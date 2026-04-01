declare module "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.ReplaceAquiferOverride" {
import {$AquiferOverride} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.AquiferOverride"
import {$AquiferOverrideType} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.AquiferOverrideType"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ReplaceAquiferOverride extends $AquiferOverride {
static readonly "CODEC": $MapCodec<($ReplaceAquiferOverride)>
static readonly "NONE": $AquiferOverride

constructor(arg0: $BlockState$$Type)

public "type"(): $AquiferOverrideType<(never)>
public "getBlockState"(arg0: $BlockState$$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReplaceAquiferOverride$$Type = ($ReplaceAquiferOverride);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReplaceAquiferOverride$$Original = $ReplaceAquiferOverride;}
declare module "com.yungnickyoung.minecraft.yungsapi.mixin.accessor.FeaturePoolElementAccessor" {
import {$PlacedFeature, $PlacedFeature$$Type} from "net.minecraft.world.level.levelgen.placement.PlacedFeature"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $FeaturePoolElementAccessor$$Interface {

(): $Holder$$Type<($PlacedFeature$$Type)>
get "feature"(): $Holder<($PlacedFeature)>
}

export class $FeaturePoolElementAccessor implements $FeaturePoolElementAccessor$$Interface {
 "getFeature"(): $Holder<($PlacedFeature)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FeaturePoolElementAccessor$$Type = (() => $Holder$$Type<($PlacedFeature$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FeaturePoolElementAccessor$$Original = $FeaturePoolElementAccessor;}
declare module "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.AquiferOverrideMaskSupplier" {
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$AquiferOverrideMask, $AquiferOverrideMask$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.AquiferOverrideMask"

export interface $AquiferOverrideMaskSupplier$$Interface {

(arg0: $Supplier<($AquiferOverrideMask$$Type)>): $AquiferOverrideMask$$Type
}

export class $AquiferOverrideMaskSupplier implements $AquiferOverrideMaskSupplier$$Interface {
 "getOrCreateAquiferOverrideMask"(arg0: $Supplier$$Type<($AquiferOverrideMask$$Type)>): $AquiferOverrideMask
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AquiferOverrideMaskSupplier$$Type = ((arg0: $Supplier<($AquiferOverrideMask)>) => $AquiferOverrideMask$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AquiferOverrideMaskSupplier$$Original = $AquiferOverrideMaskSupplier;}
declare module "com.yungnickyoung.minecraft.yungsapi.mixin.accessor.ListPoolElementAccessor" {
import {$List, $List$$Type} from "java.util.List"
import {$StructurePoolElement, $StructurePoolElement$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement"

export interface $ListPoolElementAccessor$$Interface {

(): $List$$Type<($StructurePoolElement$$Type)>
get "elements"(): $List<($StructurePoolElement)>
}

export class $ListPoolElementAccessor implements $ListPoolElementAccessor$$Interface {
 "getElements"(): $List<($StructurePoolElement)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ListPoolElementAccessor$$Type = (() => $List$$Type<($StructurePoolElement$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ListPoolElementAccessor$$Original = $ListPoolElementAccessor;}
declare module "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.NoneAquiferOverride" {
import {$AquiferOverride} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.AquiferOverride"
import {$AquiferOverrideType} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.AquiferOverrideType"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $NoneAquiferOverride extends $AquiferOverride {
static readonly "CODEC": $MapCodec<($NoneAquiferOverride)>
static readonly "NONE": $AquiferOverride

constructor()

public "type"(): $AquiferOverrideType<(never)>
public "getBlockState"(arg0: $BlockState$$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoneAquiferOverride$$Type = ($NoneAquiferOverride);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NoneAquiferOverride$$Original = $NoneAquiferOverride;}
declare module "com.yungnickyoung.minecraft.yungsapi.mixin.accessor.SinglePoolElementAccessor" {
import {$StructureTemplateManager, $StructureTemplateManager$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager"
import {$StructureTemplate, $StructureTemplate$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate"

export interface $SinglePoolElementAccessor$$Interface {

(arg0: $StructureTemplateManager): $StructureTemplate$$Type
}

export class $SinglePoolElementAccessor implements $SinglePoolElementAccessor$$Interface {
 "callGetTemplate"(arg0: $StructureTemplateManager$$Type): $StructureTemplate
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SinglePoolElementAccessor$$Type = ((arg0: $StructureTemplateManager) => $StructureTemplate$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SinglePoolElementAccessor$$Original = $SinglePoolElementAccessor;}
declare module "com.yungnickyoung.minecraft.yungsapi.mixin.accessor.PotionAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PotionAccessor$$Interface {
get "name"(): StringJS
set "name"(value: StringJS)
}

export class $PotionAccessor implements $PotionAccessor$$Interface {
 "getName"(): StringJS
 "setName"(arg0: StringJS): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionAccessor$$Type = ($PotionAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PotionAccessor$$Original = $PotionAccessor;}
declare module "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.AquiferOverride" {
import {$AquiferOverrideType} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.AquiferOverrideType"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AquiferOverride {
static readonly "NONE": $AquiferOverride

public "type"(): $AquiferOverrideType<(never)>
public "getBlockState"(arg0: $BlockState$$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AquiferOverride$$Type = ($AquiferOverride);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AquiferOverride$$Original = $AquiferOverride;}
declare module "com.yungnickyoung.minecraft.yungsapi.mixin.accessor.StructureTemplatePoolAccessor" {
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$List, $List$$Type} from "java.util.List"
import {$StructurePoolElement, $StructurePoolElement$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement"

export interface $StructureTemplatePoolAccessor$$Interface {

(): $List$$Type<($Pair$$Type<($StructurePoolElement$$Type), (integer)>)>
get "rawTemplates"(): $List<($Pair<($StructurePoolElement), (integer)>)>
}

export class $StructureTemplatePoolAccessor implements $StructureTemplatePoolAccessor$$Interface {
 "getRawTemplates"(): $List<($Pair<($StructurePoolElement), (integer)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureTemplatePoolAccessor$$Type = (() => $List$$Type<($Pair$$Type<($StructurePoolElement$$Type), (integer)>)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructureTemplatePoolAccessor$$Original = $StructureTemplatePoolAccessor;}
declare module "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.AquiferOverrideMask" {
import {$AquiferOverride, $AquiferOverride$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.AquiferOverride"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AquiferOverrideMask {
constructor(arg0: integer, arg1: integer)

public "get"(arg0: integer, arg1: integer, arg2: integer): boolean
public "set"(arg0: integer, arg1: integer, arg2: integer): void
public "getAquiferOverride"(): $AquiferOverride
public "setAquiferOverride"(arg0: $AquiferOverride$$Type): void
public "getBlockStateForPos"(arg0: integer, arg1: integer, arg2: integer, arg3: $BlockState$$Type): $BlockState
get "aquiferOverride"(): $AquiferOverride
set "aquiferOverride"(value: $AquiferOverride$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AquiferOverrideMask$$Type = ($AquiferOverrideMask);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AquiferOverrideMask$$Original = $AquiferOverrideMask;}
declare module "com.yungnickyoung.minecraft.yungsapi.mixin.accessor.BoundingBoxAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BoundingBoxAccessor$$Interface {
set "minZ"(value: integer)
set "maxY"(value: integer)
set "maxX"(value: integer)
set "maxZ"(value: integer)
set "minX"(value: integer)
set "minY"(value: integer)
}

export class $BoundingBoxAccessor implements $BoundingBoxAccessor$$Interface {
 "setMinZ"(arg0: integer): void
 "setMaxY"(arg0: integer): void
 "setMaxX"(arg0: integer): void
 "setMaxZ"(arg0: integer): void
 "setMinX"(arg0: integer): void
 "setMinY"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoundingBoxAccessor$$Type = ($BoundingBoxAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BoundingBoxAccessor$$Original = $BoundingBoxAccessor;}
declare module "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.SolidifyAquiferOverride" {
import {$AquiferOverride} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.AquiferOverride"
import {$AquiferOverrideType} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.AquiferOverrideType"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SolidifyAquiferOverride extends $AquiferOverride {
static readonly "CODEC": $MapCodec<($SolidifyAquiferOverride)>
static readonly "NONE": $AquiferOverride

constructor()

public "type"(): $AquiferOverrideType<(never)>
public "setSolidBlockState"(arg0: $BlockState$$Type): void
public "getBlockState"(arg0: $BlockState$$Type): $BlockState
set "solidBlockState"(value: $BlockState$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SolidifyAquiferOverride$$Type = ($SolidifyAquiferOverride);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SolidifyAquiferOverride$$Original = $SolidifyAquiferOverride;}
declare module "com.yungnickyoung.minecraft.yungsapi.mixin.accessor.NoiseChunkAccessor" {
import {$NoiseSettings, $NoiseSettings$$Type} from "net.minecraft.world.level.levelgen.NoiseSettings"

export interface $NoiseChunkAccessor$$Interface {

(): $NoiseSettings$$Type
get "noiseSettings"(): $NoiseSettings
}

export class $NoiseChunkAccessor implements $NoiseChunkAccessor$$Interface {
 "getNoiseSettings"(): $NoiseSettings
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoiseChunkAccessor$$Type = (() => $NoiseSettings$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NoiseChunkAccessor$$Original = $NoiseChunkAccessor;}
declare module "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.AquiferOverrideType" {
import {$SolidifyAquiferOverride} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.SolidifyAquiferOverride"
import {$AquiferOverride} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.AquiferOverride"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$NoneAquiferOverride} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.NoneAquiferOverride"
import {$ReplaceAquiferOverride} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.ReplaceAquiferOverride"

export interface $AquiferOverrideType$$Interface<C extends $AquiferOverride> {

(): $MapCodec$$Type<(C)>
}

export class $AquiferOverrideType<C extends $AquiferOverride> implements $AquiferOverrideType$$Interface {
static readonly "AQUIFER_OVERRIDE_NAME_BY_TYPE": $Map<($AquiferOverrideType<(never)>), ($ResourceLocation)>
static readonly "SOLIDIFY": $AquiferOverrideType<($SolidifyAquiferOverride)>
static readonly "AQUIFER_OVERRIDE_TYPE_BY_NAME": $Map<($ResourceLocation), ($AquiferOverrideType<(never)>)>
static readonly "AQUIFER_OVERRIDE_CODEC": $Codec<($AquiferOverride)>
static readonly "NONE": $AquiferOverrideType<($NoneAquiferOverride)>
static readonly "REPLACE": $AquiferOverrideType<($ReplaceAquiferOverride)>
static readonly "AQUIFER_OVERRIDE_TYPE_CODEC": $Codec<($AquiferOverrideType<(never)>)>

static "register"<C extends $AquiferOverride>(arg0: $ResourceLocation$$Type, arg1: $MapCodec$$Type<(C)>): $AquiferOverrideType<(C)>
 "codec"(): $MapCodec<(C)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AquiferOverrideType$$Type<C> = (() => $MapCodec$$Type<(C)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AquiferOverrideType$$Original<C> = $AquiferOverrideType<(C)>;}
