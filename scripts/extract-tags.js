#!/usr/bin/env node
/**
 * Extracts tag resource locations from mod JAR files.
 *
 * Scans mods/*.jar for data/<namespace>/tags/<type>/<path>.json entries,
 * deduplicates across JARs, and writes .probe/tag_objects.json.
 *
 * Run: node scripts/extract-tags.js
 */

import AdmZip from 'adm-zip';
import { readdirSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, basename } from 'path';
import chalk from 'chalk';
import ora from 'ora';

const MODS_DIR = 'mods';
const OUTPUT_DIR = '.probe';
const OUTPUT_FILE = join(OUTPUT_DIR, 'tag_objects.json');

// Map plural directory names to their canonical singular registry key form.
// Minecraft 1.21+ uses singular, but older mods / datapacks may use plural.
const PLURAL_TO_SINGULAR = {
  blocks: 'block',
  items: 'item',
  fluids: 'fluid',
  entity_types: 'entity_type',
};

// Tag entry pattern: data/<namespace>/tags/<type>/<path>.json
const TAG_ENTRY_RE = /^data\/([^/]+)\/tags\/([^/]+)\/(.+)\.json$/;

function extractTagsFromJar(jarPath) {
  const zip = new AdmZip(jarPath);
  const tags = {}; // { registryKey: Set<tagId> }

  for (const entry of zip.getEntries()) {
    if (entry.isDirectory) continue;

    const match = entry.entryName.match(TAG_ENTRY_RE);
    if (!match) continue;

    const [, namespace, rawType, path] = match;
    const type = PLURAL_TO_SINGULAR[rawType] || rawType;
    const registryKey = `minecraft:${type}`;
    const tagId = `${namespace}:${path}`;

    if (!tags[registryKey]) tags[registryKey] = new Set();
    tags[registryKey].add(tagId);
  }

  return tags;
}

function main() {
  console.log(chalk.cyan.bold('\nCreaterington — Extract Tags\n'));

  if (!existsSync(MODS_DIR)) {
    console.error(chalk.red(`Error: ${MODS_DIR}/ directory not found`));
    process.exit(1);
  }

  const jars = readdirSync(MODS_DIR).filter(f => f.endsWith('.jar'));
  if (jars.length === 0) {
    console.error(chalk.red(`Error: No .jar files found in ${MODS_DIR}/`));
    process.exit(1);
  }

  console.log(`Found ${chalk.yellow(jars.length)} mod JARs\n`);

  const allTags = {}; // { registryKey: Set<tagId> }
  let processed = 0;
  let errors = 0;
  const spinner = ora('Scanning JARs...').start();

  for (const jar of jars) {
    const jarPath = join(MODS_DIR, jar);
    try {
      const jarTags = extractTagsFromJar(jarPath);
      for (const [key, ids] of Object.entries(jarTags)) {
        if (!allTags[key]) allTags[key] = new Set();
        for (const id of ids) allTags[key].add(id);
      }
      processed++;
    } catch (err) {
      errors++;
      spinner.warn(`Failed to read ${chalk.gray(jar)}: ${err.message}`);
      spinner.start('Scanning JARs...');
    }
  }

  spinner.succeed(`Scanned ${chalk.green(processed)} JARs${errors > 0 ? chalk.yellow(` (${errors} failed)`) : ''}`);

  // Convert Sets to sorted arrays
  const result = {};
  for (const key of Object.keys(allTags).sort()) {
    result[key] = [...allTags[key]].sort();
  }

  // Summary
  const totalTags = Object.values(result).reduce((sum, arr) => sum + arr.length, 0);
  console.log(`\nExtracted ${chalk.green(totalTags)} tags across ${chalk.green(Object.keys(result).length)} registries:\n`);
  for (const [key, ids] of Object.entries(result)) {
    console.log(`  ${chalk.gray(key)}: ${chalk.yellow(ids.length)} tags`);
  }

  // Write output
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, JSON.stringify(result, null, 2) + '\n', 'utf8');
  console.log(`\nWritten to ${chalk.green(OUTPUT_FILE)}`);
  console.log(chalk.green.bold('\nDone!\n'));
}

main();
