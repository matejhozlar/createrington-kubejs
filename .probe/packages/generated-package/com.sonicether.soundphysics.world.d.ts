declare module "com.sonicether.soundphysics.world.CachingClientLevel" {
import {$ClonedClientLevel, $ClonedClientLevel$$Type} from "com.sonicether.soundphysics.world.ClonedClientLevel"

export interface $CachingClientLevel$$Interface {
}

export class $CachingClientLevel implements $CachingClientLevel$$Interface {
 "sound_physics_remastered$getCachedClone"(): $ClonedClientLevel
 "sound_physics_remastered$setCachedClone"(arg0: $ClonedClientLevel$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CachingClientLevel$$Type = ($CachingClientLevel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CachingClientLevel$$Original = $CachingClientLevel;}
declare module "com.sonicether.soundphysics.world.ClonedLevelChunk" {
import {$UpgradeData} from "net.minecraft.world.level.chunk.UpgradeData"
import {$LevelHeightAccessor} from "net.minecraft.world.level.LevelHeightAccessor"
import {$NoiseChunk} from "net.minecraft.world.level.levelgen.NoiseChunk"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ChunkAccess} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$ChunkAccess$TicksToSave} from "net.minecraft.world.level.chunk.ChunkAccess$TicksToSave"
import {$TickContainerAccess} from "net.minecraft.world.ticks.TickContainerAccess"
import {$BlendingData} from "net.minecraft.world.level.levelgen.blending.BlendingData"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Function$$Type} from "java.util.function.Function"
import {$Heightmap} from "net.minecraft.world.level.levelgen.Heightmap"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ChunkSkyLightSources} from "net.minecraft.world.level.lighting.ChunkSkyLightSources"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$Map} from "java.util.Map"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$LevelChunkSection, $LevelChunkSection$$Type} from "net.minecraft.world.level.chunk.LevelChunkSection"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$ChunkStatus} from "net.minecraft.world.level.chunk.status.ChunkStatus"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$Fluid} from "net.minecraft.world.level.material.Fluid"
import {$Heightmap$Types} from "net.minecraft.world.level.levelgen.Heightmap$Types"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$ShortList} from "it.unimi.dsi.fastutil.shorts.ShortList"

export class $ClonedLevelChunk extends $ChunkAccess {
readonly "upgradeData": $UpgradeData
readonly "chunkPos": $ChunkPos
readonly "pendingBlockEntities": $Map<($BlockPos), ($CompoundTag)>
 "noiseChunk": $NoiseChunk
readonly "sections": ($LevelChunkSection)[]
 "skyLightSources": $ChunkSkyLightSources
readonly "postProcessing": ($ShortList)[]
 "blendingData": $BlendingData
readonly "levelHeightAccessor": $LevelHeightAccessor
readonly "blockEntities": $Map<($BlockPos), ($BlockEntity)>
 "saveTimePoint": long
 "unsaved": boolean
readonly "heightmaps": $Map<($Heightmap$Types), ($Heightmap)>
static readonly "NO_FILLED_SECTION": integer

constructor(arg0: $Level$$Type, arg1: $ChunkPos$$Type, arg2: ($LevelChunkSection$$Type)[])

public "getBlockEntityNbtForSaving"(arg0: $BlockPos$$Type, arg1: $HolderLookup$Provider$$Type): $CompoundTag
public "getTicksForSerialization"(): $ChunkAccess$TicksToSave
public "getFluidState"(arg0: $BlockPos$$Type): $FluidState
public "getBlockEntity"(arg0: $BlockPos$$Type): $BlockEntity
public "setBlockState"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type, arg2: boolean): $BlockState
public "setBlockEntity"(arg0: $BlockEntity$$Type): void
public "removeBlockEntity"(arg0: $BlockPos$$Type): void
public "getBlockState"(arg0: $BlockPos$$Type): $BlockState
public "getPersistedStatus"(): $ChunkStatus
public "addEntity"(arg0: $Entity$$Type): void
public "getBlockTicks"(): $TickContainerAccess<($Block)>
public "getFluidTicks"(): $TickContainerAccess<($Fluid)>
public static "traverseBlocks"<T, C>(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: C, arg3: $BiFunction$$Type<(C), ($BlockPos), (T)>, arg4: $Function$$Type<(C), (T)>): T
public static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
get "ticksForSerialization"(): $ChunkAccess$TicksToSave
set "blockEntity"(value: $BlockEntity$$Type)
get "persistedStatus"(): $ChunkStatus
get "blockTicks"(): $TickContainerAccess<($Block)>
get "fluidTicks"(): $TickContainerAccess<($Fluid)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClonedLevelChunk$$Type = ($ClonedLevelChunk);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClonedLevelChunk$$Original = $ClonedLevelChunk;}
declare module "com.sonicether.soundphysics.world.ClonedClientLevel" {
import {$BlockHitResult} from "net.minecraft.world.phys.BlockHitResult"
import {$LevelHeightAccessor} from "net.minecraft.world.level.LevelHeightAccessor"
import {$Optional} from "java.util.Optional"
import {$ClientLevelProxy$$Interface} from "com.sonicether.soundphysics.world.ClientLevelProxy"
import {$Holder} from "net.minecraft.core.Holder"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ClonedLevelChunk} from "com.sonicether.soundphysics.world.ClonedLevelChunk"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Biome} from "net.minecraft.world.level.biome.Biome"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Stream} from "java.util.stream.Stream"
import {$ClipBlockStateContext$$Type} from "net.minecraft.world.level.ClipBlockStateContext"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$AuxiliaryLightManager} from "net.neoforged.neoforge.common.world.AuxiliaryLightManager"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ClipContext$$Type} from "net.minecraft.world.level.ClipContext"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$AABB$$Type} from "net.minecraft.world.phys.AABB"

export class $ClonedClientLevel implements $ClientLevelProxy$$Interface {
constructor(arg0: $ClientLevel$$Type, arg1: $BlockPos$$Type, arg2: long, arg3: integer)

public "getFluidState"(arg0: $BlockPos$$Type): $FluidState
public "getBlockEntity"(arg0: $BlockPos$$Type): $BlockEntity
public "getOrigin"(): $BlockPos
public "getBlockState"(arg0: $BlockPos$$Type): $BlockState
public "getChunk"(arg0: integer, arg1: integer): $ClonedLevelChunk
public "getHeight"(): integer
public "getTick"(): long
public "getMinBuildHeight"(): integer
public "clipWithInteractionOverride"(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: $BlockPos$$Type, arg3: $VoxelShape$$Type, arg4: $BlockState$$Type): $BlockHitResult
public "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$$Type, arg1: $BlockEntityType$$Type<(T)>): $Optional<(T)>
public "getLightEmission"(arg0: $BlockPos$$Type): integer
public "clip"(arg0: $ClipContext$$Type): $BlockHitResult
public "getBlockFloorHeight"(arg0: $BlockPos$$Type): double
public "getBlockFloorHeight"(arg0: $VoxelShape$$Type, arg1: $Supplier$$Type<($VoxelShape$$Type)>): double
public "getBlockStates"(arg0: $AABB$$Type): $Stream<($BlockState)>
public "isBlockInLine"(arg0: $ClipBlockStateContext$$Type): $BlockHitResult
public "getMaxLightLevel"(): integer
public static "traverseBlocks"<T, C>(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: C, arg3: $BiFunction$$Type<(C), ($BlockPos), (T)>, arg4: $Function$$Type<(C), (T)>): T
public static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
public "getSectionYFromSectionIndex"(arg0: integer): integer
public "getSectionIndexFromSectionY"(arg0: integer): integer
public "getMaxBuildHeight"(): integer
public "getSectionIndex"(arg0: integer): integer
public "getMaxSection"(): integer
public "getMinSection"(): integer
public "getSectionsCount"(): integer
public "isOutsideBuildHeight"(arg0: $BlockPos$$Type): boolean
public "isOutsideBuildHeight"(arg0: integer): boolean
public "getAuxLightManager"(arg0: $BlockPos$$Type): $AuxiliaryLightManager
public "getAuxLightManager"(arg0: $ChunkPos$$Type): $AuxiliaryLightManager
public "getModelData"(arg0: $BlockPos$$Type): $ModelData
public "getBlockEntityRenderData"(arg0: $BlockPos$$Type): any
public "hasBiomes"(): boolean
public "getBiomeFabric"(arg0: $BlockPos$$Type): $Holder<($Biome)>
get "origin"(): $BlockPos
get "height"(): integer
get "tick"(): long
get "minBuildHeight"(): integer
get "maxLightLevel"(): integer
get "maxBuildHeight"(): integer
get "maxSection"(): integer
get "minSection"(): integer
get "sectionsCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClonedClientLevel$$Type = ($ClonedClientLevel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClonedClientLevel$$Original = $ClonedClientLevel;}
declare module "com.sonicether.soundphysics.world.ClientLevelProxy" {
import {$BlockHitResult} from "net.minecraft.world.phys.BlockHitResult"
import {$LevelHeightAccessor} from "net.minecraft.world.level.LevelHeightAccessor"
import {$Optional} from "java.util.Optional"
import {$AuxiliaryLightManager} from "net.neoforged.neoforge.common.world.AuxiliaryLightManager"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$Holder} from "net.minecraft.core.Holder"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$BlockGetter$$Interface} from "net.minecraft.world.level.BlockGetter"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$ClipContext$$Type} from "net.minecraft.world.level.ClipContext"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$Biome} from "net.minecraft.world.level.biome.Biome"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"
import {$Stream} from "java.util.stream.Stream"
import {$ClipBlockStateContext$$Type} from "net.minecraft.world.level.ClipBlockStateContext"
import {$AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ClientLevelProxy$$Interface extends $BlockGetter$$Interface {
get "maxLightLevel"(): integer
get "maxBuildHeight"(): integer
get "maxSection"(): integer
get "minSection"(): integer
get "sectionsCount"(): integer
get "height"(): integer
get "minBuildHeight"(): integer
}

export class $ClientLevelProxy implements $ClientLevelProxy$$Interface {
 "clipWithInteractionOverride"(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: $BlockPos$$Type, arg3: $VoxelShape$$Type, arg4: $BlockState$$Type): $BlockHitResult
 "getFluidState"(arg0: $BlockPos$$Type): $FluidState
 "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$$Type, arg1: $BlockEntityType$$Type<(T)>): $Optional<(T)>
 "getBlockEntity"(arg0: $BlockPos$$Type): $BlockEntity
 "getLightEmission"(arg0: $BlockPos$$Type): integer
 "clip"(arg0: $ClipContext$$Type): $BlockHitResult
 "getBlockState"(arg0: $BlockPos$$Type): $BlockState
 "getBlockFloorHeight"(arg0: $BlockPos$$Type): double
 "getBlockFloorHeight"(arg0: $VoxelShape$$Type, arg1: $Supplier$$Type<($VoxelShape$$Type)>): double
 "getBlockStates"(arg0: $AABB$$Type): $Stream<($BlockState)>
 "isBlockInLine"(arg0: $ClipBlockStateContext$$Type): $BlockHitResult
 "getMaxLightLevel"(): integer
static "traverseBlocks"<T, C>(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: C, arg3: $BiFunction$$Type<(C), ($BlockPos), (T)>, arg4: $Function$$Type<(C), (T)>): T
static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
 "getSectionYFromSectionIndex"(arg0: integer): integer
 "getSectionIndexFromSectionY"(arg0: integer): integer
 "getMaxBuildHeight"(): integer
 "getSectionIndex"(arg0: integer): integer
 "getMaxSection"(): integer
 "getMinSection"(): integer
 "getSectionsCount"(): integer
 "getHeight"(): integer
 "isOutsideBuildHeight"(arg0: $BlockPos$$Type): boolean
 "isOutsideBuildHeight"(arg0: integer): boolean
 "getMinBuildHeight"(): integer
 "getAuxLightManager"(arg0: $BlockPos$$Type): $AuxiliaryLightManager
 "getAuxLightManager"(arg0: $ChunkPos$$Type): $AuxiliaryLightManager
 "getModelData"(arg0: $BlockPos$$Type): $ModelData
 "getBlockEntityRenderData"(arg0: $BlockPos$$Type): any
 "hasBiomes"(): boolean
 "getBiomeFabric"(arg0: $BlockPos$$Type): $Holder<($Biome)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientLevelProxy$$Type = ($ClientLevelProxy);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientLevelProxy$$Original = $ClientLevelProxy;}
