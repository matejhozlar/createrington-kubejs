/**
 * Fixes known ProbeJS type generation bugs in .probe/ directory and
 * injects real registry IDs for autocomplete.
 *
 * Run after ProbeJS dump: node scripts/fix-probe-types.js
 *
 * Fixes:
 * 1. "public static get/set" inside interfaces (invalid TS)
 * 2. Unclosed template literal in TagOf type (registry_type.d.ts)
 * 3. Replaces opaque probejs$$ placeholder types with real registry ID unions
 */

import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join } from 'path';

const probeDir = '.probe';
let filesFixed = 0;
let totalFixes = 0;

// Phase 1: Fix syntax errors

function walkDir(dir, callback) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      walkDir(full, callback);
    } else if (full.endsWith('.d.ts')) {
      callback(full);
    }
  }
}

function fixSyntaxErrors(filePath) {
  const original = readFileSync(filePath, 'utf8');
  let content = original;
  let fixes = 0;

  // Fix 1: Remove "public static" from get/set inside interface bodies.
  const staticAccessorRe = /^(public static )(get |set )/gm;
  content = content.replace(staticAccessorRe, (_, _pub, accessor) => {
    fixes++;
    return accessor;
  });

  // Fix 2: Unclosed template literal in TagOf type.
  const tagOfRe = /\$\{infer Suffix\} \?/g;
  content = content.replace(tagOfRe, () => {
    fixes++;
    return '${infer Suffix}` ?';
  });

  if (fixes > 0) {
    writeFileSync(filePath, content, 'utf8');
    console.log(`  Fixed ${fixes} syntax issue(s) in ${filePath}`);
    filesFixed++;
    totalFixes += fixes;
  }
}

// Phase 2: Inject real registry IDs

/**
 * Map of registry key -> { typeName, tagTypeName } in registry_type.d.ts
 * We only inject IDs for the registries that are most useful for scripting.
 */
const REGISTRY_MAP = {
  'minecraft:block': { type: 'Block', tag: 'BlockTag' },
  'minecraft:item': { type: 'Item', tag: 'ItemTag' },
  'minecraft:fluid': { type: 'Fluid', tag: 'FluidTag' },
  'minecraft:entity_type': { type: 'EntityType', tag: 'EntityTypeTag' },
  'minecraft:mob_effect': { type: 'MobEffect', tag: 'MobEffectTag' },
  'minecraft:enchantment': { type: 'Enchantment', tag: 'EnchantmentTag' },
  'minecraft:potion': { type: 'Potion', tag: 'PotionTag' },
};

function buildUnion(ids) {
  if (ids.length === 0) return '(string & {})';
  // Group by mod namespace for readability
  const byMod = {};
  for (const id of ids) {
    const ns = id.split(':')[0];
    (byMod[ns] ??= []).push(id);
  }
  // Sort namespaces alphabetically, items within each namespace alphabetically
  const parts = [];
  for (const ns of Object.keys(byMod).sort()) {
    for (const id of byMod[ns].sort()) {
      parts.push(`"${id}"`);
    }
  }
  // Add (string & {}) fallback so arbitrary strings are still accepted
  parts.push('(string & {})');
  return parts.join(' | ');
}

function injectRegistryTypes() {
  const registryPath = join(probeDir, 'registry_objects.json');
  if (!existsSync(registryPath)) {
    console.log('  Skipping registry injection: registry_objects.json not found');
    return;
  }

  const registryData = JSON.parse(readFileSync(registryPath, 'utf8'));

  // Load tag data if available (produced by scripts/extract-tags.js)
  const tagPath = join(probeDir, 'tag_objects.json');
  let tagData = {};
  if (existsSync(tagPath)) {
    tagData = JSON.parse(readFileSync(tagPath, 'utf8'));
    console.log(`  Loaded tag data for ${Object.keys(tagData).length} registries`);
  } else {
    console.log('  No tag_objects.json found — tag types will use (string & {})');
  }

  // Process each registry_type.d.ts across server/startup/client
  const registryTypeFiles = [
    join(probeDir, 'server', 'generated-server', 'registry_type.d.ts'),
    join(probeDir, 'startup', 'generated-startup', 'registry_type.d.ts'),
    join(probeDir, 'client', 'generated-client', 'registry_type.d.ts'),
  ];

  for (const filePath of registryTypeFiles) {
    if (!existsSync(filePath)) continue;

    let content = readFileSync(filePath, 'utf8');
    let fixes = 0;

    for (const [registryKey, { type: typeName, tag: tagTypeName }] of Object.entries(REGISTRY_MAP)) {
      const ids = registryData[registryKey] || [];

      // Replace the object type declaration with real IDs union + #tag references.
      // Matches the original probejs$$ placeholder OR any previously-injected content.
      const tagIds = tagData[registryKey] || [];
      const hashTagIds = tagIds.map(id => `#${id}`);
      const allObjIds = [...ids, ...hashTagIds];
      const objPattern = new RegExp(
        `(export type ${typeName} = ).+`,
      );
      if (objPattern.test(content) && allObjIds.length > 0) {
        const union = buildUnion(allObjIds);
        content = content.replace(objPattern, `$1${union};`);
        fixes++;
        console.log(`  Injected ${ids.length} IDs + ${tagIds.length} #tag refs for Special.${typeName}`);
      }

      // Replace the tag type declaration with real tag IDs (or fallback).
      // Matches any current content (placeholder, fallback, or previous injection).
      const tagPattern = new RegExp(
        `(export type ${tagTypeName} = ).+`,
      );
      if (tagPattern.test(content) && tagIds.length > 0) {
        const tagUnion = buildUnion(tagIds);
        content = content.replace(tagPattern, `$1${tagUnion};`);
        fixes++;
        console.log(`  Injected ${tagIds.length} tag IDs for Special.${tagTypeName}`);
      } else if (tagPattern.test(content)) {
        content = content.replace(tagPattern, `$1(string & {});`);
        fixes++;
      }
    }

    // Also fix any remaining opaque types we don't have data for:
    // Replace all probejs$$object$$ and probejs$$tag$$ with (string & {})
    // so they accept any string rather than causing type errors
    const remainingObj = /("probejs\$\$object\$\$[^"]*")/g;
    const remainingTag = /("probejs\$\$tag\$\$[^"]*")/g;
    const remainingMod = /("probejs\$\$mod")/g;
    const remainingRecipe = /("probejs\$\$recipeId")/g;
    const remainingTranslation = /("probejs\$\$translation")/g;
    const remainingItemStack = /("probejs\$\$itemStack")/g;

    for (const re of [remainingObj, remainingTag, remainingMod, remainingRecipe, remainingTranslation, remainingItemStack]) {
      content = content.replace(re, () => {
        fixes++;
        return '(string & {})';
      });
    }

    if (fixes > 0) {
      writeFileSync(filePath, content, 'utf8');
      filesFixed++;
      totalFixes += fixes;
    }
  }

  // Also fix opaque types in special_types.d.ts
  const specialTypeFiles = [
    join(probeDir, 'server', 'generated-server', 'special_types.d.ts'),
    join(probeDir, 'startup', 'generated-startup', 'special_types.d.ts'),
    join(probeDir, 'client', 'generated-client', 'special_types.d.ts'),
  ];

  // Collect unique mod namespaces from all registries for Special.Mod
  const modIds = new Set();
  for (const ids of Object.values(registryData)) {
    for (const id of ids) {
      const ns = id.split(':')[0];
      if (ns) modIds.add(ns);
    }
  }
  const modUnion = buildUnion([...modIds]);

  for (const filePath of specialTypeFiles) {
    if (!existsSync(filePath)) continue;
    let content = readFileSync(filePath, 'utf8');
    let fixes = 0;

    const placeholders = [
      /("probejs\$\$object\$\$[^"]*")/g,
      /("probejs\$\$tag\$\$[^"]*")/g,
      /("probejs\$\$mod")/g,
      /("probejs\$\$recipeId")/g,
      /("probejs\$\$translation")/g,
    ];

    for (const re of placeholders) {
      content = content.replace(re, () => {
        fixes++;
        return '(string & {})';
      });
    }

    // Inject real mod IDs into Special.Mod (replace placeholder or previous fallback)
    const modPattern = /(export type Mod = ).+/;
    if (modPattern.test(content) && modIds.size > 0) {
      content = content.replace(modPattern, `$1${modUnion};`);
      fixes++;
      console.log(`  Injected ${modIds.size} mod IDs for Special.Mod`);
    }

    if (fixes > 0) {
      writeFileSync(filePath, content, 'utf8');
      console.log(`  Replaced ${fixes} placeholder type(s) in ${filePath}`);
      filesFixed++;
      totalFixes += fixes;
    }
  }

  // Fix opaque types in package files (e.g. probejs$$itemStack)
  walkDir(join(probeDir, 'packages'), (filePath) => {
    let content = readFileSync(filePath, 'utf8');
    let fixes = 0;

    const placeholders = [
      /("probejs\$\$[^"]*")/g,
    ];

    for (const re of placeholders) {
      content = content.replace(re, () => {
        fixes++;
        return '(string & {})';
      });
    }

    if (fixes > 0) {
      writeFileSync(filePath, content, 'utf8');
      console.log(`  Replaced ${fixes} placeholder type(s) in ${filePath}`);
      filesFixed++;
      totalFixes += fixes;
    }
  });

  // Patch $ItemStack$$Type so its string branch uses Special.Item for autocomplete.
  // ProbeJS generates "probejs$$itemStack" which gets replaced with (string & {}) above,
  // but Special.Item gives real item ID suggestions.
  const itemStackFile = join(probeDir, 'packages', 'generated-package', 'net.minecraft.world.item.d.ts');
  if (existsSync(itemStackFile)) {
    let isContent = readFileSync(itemStackFile, 'utf8');
    const before = isContent;
    isContent = isContent.replace(
      /(\$ItemStack\$\$Type = )\(\(string & \{\}\)\)/,
      '$1((Special.Item))',
    );
    if (isContent !== before) {
      writeFileSync(itemStackFile, isContent, 'utf8');
      console.log('  Patched $ItemStack$$Type to use Special.Item');
      filesFixed++;
      totalFixes++;
    }
  }

  // Fix opaque types in events.d.ts, bindings.d.ts, etc.
  const otherGenFiles = [
    'events.d.ts', 'bindings.d.ts', 'tag_events.d.ts',
    'recipe_viewer_events.d.ts',
  ];
  const genDirs = [
    join(probeDir, 'server', 'generated-server'),
    join(probeDir, 'startup', 'generated-startup'),
    join(probeDir, 'client', 'generated-client'),
  ];

  for (const dir of genDirs) {
    for (const fileName of otherGenFiles) {
      const filePath = join(dir, fileName);
      if (!existsSync(filePath)) continue;
      let content = readFileSync(filePath, 'utf8');
      let fixes = 0;

      const placeholders = [
        /("probejs\$\$object\$\$[^"]*")/g,
        /("probejs\$\$tag\$\$[^"]*")/g,
        /("probejs\$\$mod")/g,
        /("probejs\$\$recipeId")/g,
        /("probejs\$\$translation")/g,
      ];

      for (const re of placeholders) {
        content = content.replace(re, () => {
          fixes++;
          return '(string & {})';
        });
      }

      if (fixes > 0) {
        writeFileSync(filePath, content, 'utf8');
        console.log(`  Replaced ${fixes} placeholder type(s) in ${filePath}`);
        filesFixed++;
        totalFixes += fixes;
      }
    }
  }
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Main

console.log('Phase 1: Fixing ProbeJS syntax errors...');
walkDir(probeDir, fixSyntaxErrors);
console.log(`  ${totalFixes} syntax fixes across ${filesFixed} files.\n`);

const prevFixes = totalFixes;
const prevFiles = filesFixed;
console.log('Phase 2: Injecting real registry IDs...');
injectRegistryTypes();
console.log(`  ${totalFixes - prevFixes} registry fixes across ${filesFixed - prevFiles} files.\n`);

console.log(`Done: ${totalFixes} total fixes across ${filesFixed} total files.`);
