declare module "xaero.map.biome.BlockTintProvider" {
import {$BlockHitResult} from "net.minecraft.world.phys.BlockHitResult"
import {$LevelLightEngine} from "net.minecraft.world.level.lighting.LevelLightEngine"
import {$MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$LevelHeightAccessor} from "net.minecraft.world.level.LevelHeightAccessor"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$ColorResolver$$Type} from "net.minecraft.world.level.ColorResolver"
import {$Holder} from "net.minecraft.core.Holder"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$MapWriter$$Type} from "xaero.map.MapWriter"
import {$BlockAndTintGetter$$Interface} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BiomeColorCalculator$$Type} from "xaero.map.biome.BiomeColorCalculator"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$MapTile$$Type} from "xaero.map.region.MapTile"
import {$Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$BrokenBlockTintCache$$Type} from "xaero.map.cache.BrokenBlockTintCache"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$Stream} from "java.util.stream.Stream"
import {$ClipBlockStateContext$$Type} from "net.minecraft.world.level.ClipBlockStateContext"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$LightLayer$$Type} from "net.minecraft.world.level.LightLayer"
import {$AuxiliaryLightManager} from "net.neoforged.neoforge.common.world.AuxiliaryLightManager"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ClipContext$$Type} from "net.minecraft.world.level.ClipContext"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"
import {$AABB$$Type} from "net.minecraft.world.phys.AABB"

export class $BlockTintProvider implements $BlockAndTintGetter$$Interface {
constructor(arg0: $Registry$$Type<($Biome$$Type)>, arg1: $BiomeColorCalculator$$Type, arg2: $MapProcessor$$Type, arg3: $BrokenBlockTintCache$$Type, arg4: $MapWriter$$Type)

public "getFluidState"(arg0: $BlockPos$$Type): $FluidState
public "getBlockState"(arg0: $BlockPos$$Type): $BlockState
public "getMinBuildHeight"(): integer
public "getHeight"(): integer
public "getShade"(arg0: $Direction$$Type, arg1: boolean): float
public "getBlockTint"(arg0: $BlockPos$$Type, arg1: $ColorResolver$$Type): integer
public "getLightEngine"(): $LevelLightEngine
public "getBlockEntity"(arg0: $BlockPos$$Type): $BlockEntity
public "getBiomeColor"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type, arg2: boolean, arg3: $MapTile$$Type, arg4: integer): integer
public "canSeeSky"(arg0: $BlockPos$$Type): boolean
public "getBrightness"(arg0: $LightLayer$$Type, arg1: $BlockPos$$Type): integer
public "getRawBrightness"(arg0: $BlockPos$$Type, arg1: integer): integer
public "clip"(arg0: $ClipContext$$Type): $BlockHitResult
public "getBlockFloorHeight"(arg0: $BlockPos$$Type): double
public "getBlockFloorHeight"(arg0: $VoxelShape$$Type, arg1: $Supplier$$Type<($VoxelShape$$Type)>): double
public static "traverseBlocks"<T, C>(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: C, arg3: $BiFunction$$Type<(C), ($BlockPos), (T)>, arg4: $Function$$Type<(C), (T)>): T
public "getBlockStates"(arg0: $AABB$$Type): $Stream<($BlockState)>
public "getMaxLightLevel"(): integer
public "isBlockInLine"(arg0: $ClipBlockStateContext$$Type): $BlockHitResult
public "getLightEmission"(arg0: $BlockPos$$Type): integer
public "clipWithInteractionOverride"(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: $BlockPos$$Type, arg3: $VoxelShape$$Type, arg4: $BlockState$$Type): $BlockHitResult
public "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$$Type, arg1: $BlockEntityType$$Type<(T)>): $Optional<(T)>
public "getShade"(arg0: float, arg1: float, arg2: float, arg3: boolean): float
public static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
public "isOutsideBuildHeight"(arg0: integer): boolean
public "isOutsideBuildHeight"(arg0: $BlockPos$$Type): boolean
public "getMaxBuildHeight"(): integer
public "getMinSection"(): integer
public "getSectionsCount"(): integer
public "getMaxSection"(): integer
public "getSectionIndex"(arg0: integer): integer
public "getSectionIndexFromSectionY"(arg0: integer): integer
public "getSectionYFromSectionIndex"(arg0: integer): integer
public "getAuxLightManager"(arg0: $BlockPos$$Type): $AuxiliaryLightManager
public "getAuxLightManager"(arg0: $ChunkPos$$Type): $AuxiliaryLightManager
public "getModelData"(arg0: $BlockPos$$Type): $ModelData
public "getBlockEntityRenderData"(arg0: $BlockPos$$Type): any
public "hasBiomes"(): boolean
public "getBiomeFabric"(arg0: $BlockPos$$Type): $Holder<($Biome)>
get "minBuildHeight"(): integer
get "height"(): integer
get "lightEngine"(): $LevelLightEngine
get "maxLightLevel"(): integer
get "maxBuildHeight"(): integer
get "minSection"(): integer
get "sectionsCount"(): integer
get "maxSection"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTintProvider$$Type = ($BlockTintProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockTintProvider$$Original = $BlockTintProvider;}
declare module "xaero.map.biome.BiomeGetter" {
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $BiomeGetter {
readonly "UNKNOWN_BIOME": $ResourceKey<($Biome)>
readonly "PLACEHOLDER_BIOME": $ResourceKey<($Biome)>

constructor()

public "getBiome"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Registry$$Type<($Biome$$Type)>): $ResourceKey<($Biome)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeGetter$$Type = ($BiomeGetter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BiomeGetter$$Original = $BiomeGetter;}
declare module "xaero.map.biome.BiomeColorCalculator" {
import {$MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$BlockPos$MutableBlockPos$$Type} from "net.minecraft.core.BlockPos$MutableBlockPos"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$MapTile$$Type} from "xaero.map.region.MapTile"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ColorResolver$$Type} from "net.minecraft.world.level.ColorResolver"

export class $BiomeColorCalculator {
readonly "UNREACHABLE_BIOME": $ResourceKey<($Biome)>
readonly "RIVER_BIOME": $ResourceKey<($Biome)>

constructor()

public "prepare"(arg0: boolean): void
public "getBiomeAtPos"(arg0: $BlockPos$$Type, arg1: $MapTile$$Type, arg2: integer, arg3: $MapProcessor$$Type): $ResourceKey<($Biome)>
public "getBiomeColor"(arg0: $ColorResolver$$Type, arg1: boolean, arg2: $BlockPos$MutableBlockPos$$Type, arg3: $MapTile$$Type, arg4: integer, arg5: $Registry$$Type<($Biome$$Type)>, arg6: $MapProcessor$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeColorCalculator$$Type = ($BiomeColorCalculator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BiomeColorCalculator$$Original = $BiomeColorCalculator;}
