declare module "traben.entity_texture_features.ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction" {
import {$ETFEntity, $ETFEntity$$Type} from "traben.entity_texture_features.utils.ETFEntity"

export interface $ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction$$Interface {

(arg0: $ETFEntity): integer
}

export class $ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction implements $ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction$$Interface {
 "toInt"(arg0: $ETFEntity$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction$$Type = ((arg0: $ETFEntity) => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction$$Original = $ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction;}
declare module "traben.entity_texture_features.ETFApi$ETFVariantSuffixProvider" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$UUID$$Type} from "java.util.UUID"
import {$IntOpenHashSet} from "it.unimi.dsi.fastutil.ints.IntOpenHashSet"
import {$ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction$$Type} from "traben.entity_texture_features.ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ETFEntity$$Type} from "traben.entity_texture_features.utils.ETFEntity"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $ETFApi$ETFVariantSuffixProvider$$Interface {
get "allSuffixes"(): $IntOpenHashSet
set "randomSupplier"(value: $ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction$$Type)
}

export class $ETFApi$ETFVariantSuffixProvider implements $ETFApi$ETFVariantSuffixProvider$$Interface {
 "size"(): integer
 "entityCanUpdate"(arg0: $UUID$$Type): boolean
 "getAllSuffixes"(): $IntOpenHashSet
static "getVariantProviderOrNull"(propertiesFileIdentifier: $ResourceLocation$$Type, vanillaIdentifier: $ResourceLocation$$Type, ...suffixKeyName: (StringJS)[]): $ETFApi$ETFVariantSuffixProvider
 "getSuffixForETFEntity"(arg0: $ETFEntity$$Type): integer
 "getSuffixForEntity"(entityToBeTested: $Entity$$Type): integer
 "setRandomSupplier"(arg0: $ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction$$Type): void
 "getSuffixForBlockEntity"(entityToBeTested: $BlockEntity$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ETFApi$ETFVariantSuffixProvider$$Type = ($ETFApi$ETFVariantSuffixProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ETFApi$ETFVariantSuffixProvider$$Original = $ETFApi$ETFVariantSuffixProvider;}
