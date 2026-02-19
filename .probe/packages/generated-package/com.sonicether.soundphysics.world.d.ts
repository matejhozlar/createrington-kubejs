declare module "com.sonicether.soundphysics.world.ClonedLevelChunk" {
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$LevelHeightAccessor} from "net.minecraft.world.level.LevelHeightAccessor"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ChunkAccess} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$LevelChunkSection$$Type} from "net.minecraft.world.level.chunk.LevelChunkSection"
import {$ChunkAccess$TicksToSave} from "net.minecraft.world.level.chunk.ChunkAccess$TicksToSave"
import {$ChunkStatus} from "net.minecraft.world.level.chunk.status.ChunkStatus"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$TickContainerAccess} from "net.minecraft.world.ticks.TickContainerAccess"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Fluid} from "net.minecraft.world.level.material.Fluid"
import {$Function$$Type} from "java.util.function.Function"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ClonedLevelChunk extends $ChunkAccess {
static readonly "NO_FILLED_SECTION": integer

constructor(arg0: $Level$$Type, arg1: $ChunkPos$$Type, arg2: ($LevelChunkSection$$Type)[])

public "getPersistedStatus"(): $ChunkStatus
public "addEntity"(arg0: $Entity$$Type): void
public "getBlockEntityNbtForSaving"(arg0: $BlockPos$$Type, arg1: $HolderLookup$Provider$$Type): $CompoundTag
public "getTicksForSerialization"(): $ChunkAccess$TicksToSave
public "getBlockState"(arg0: $BlockPos$$Type): $BlockState
public "getBlockEntity"(arg0: $BlockPos$$Type): $BlockEntity
public "getFluidState"(arg0: $BlockPos$$Type): $FluidState
public "getFluidTicks"(): $TickContainerAccess<($Fluid)>
public "getBlockTicks"(): $TickContainerAccess<($Block)>
public "setBlockEntity"(arg0: $BlockEntity$$Type): void
public "setBlockState"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type, arg2: boolean): $BlockState
public "removeBlockEntity"(arg0: $BlockPos$$Type): void
public static "traverseBlocks"<T, C>(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: C, arg3: $BiFunction$$Type<(C), ($BlockPos), (T)>, arg4: $Function$$Type<(C), (T)>): T
public static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
get "persistedStatus"(): $ChunkStatus
get "ticksForSerialization"(): $ChunkAccess$TicksToSave
get "fluidTicks"(): $TickContainerAccess<($Fluid)>
get "blockTicks"(): $TickContainerAccess<($Block)>
set "blockEntity"(value: $BlockEntity$$Type)
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
declare module "com.sonicether.soundphysics.world.ClonedClientLevel" {
import {$BlockHitResult} from "net.minecraft.world.phys.BlockHitResult"
import {$LevelHeightAccessor} from "net.minecraft.world.level.LevelHeightAccessor"
import {$Optional} from "java.util.Optional"
import {$ClientLevelProxy$$Interface} from "com.sonicether.soundphysics.world.ClientLevelProxy"
import {$Holder} from "net.minecraft.core.Holder"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ClonedLevelChunk} from "com.sonicether.soundphysics.world.ClonedLevelChunk"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function$$Type} from "java.util.function.Function"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Biome} from "net.minecraft.world.level.biome.Biome"
import {$Stream} from "java.util.stream.Stream"
import {$ClipBlockStateContext$$Type} from "net.minecraft.world.level.ClipBlockStateContext"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$AuxiliaryLightManager} from "net.neoforged.neoforge.common.world.AuxiliaryLightManager"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ClipContext$$Type} from "net.minecraft.world.level.ClipContext"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"
import {$AABB$$Type} from "net.minecraft.world.phys.AABB"

export class $ClonedClientLevel implements $ClientLevelProxy$$Interface {
constructor(arg0: $ClientLevel$$Type, arg1: $BlockPos$$Type, arg2: long, arg3: integer)

public "getChunk"(arg0: integer, arg1: integer): $ClonedLevelChunk
public "getTick"(): long
public "getOrigin"(): $BlockPos
public "getMinBuildHeight"(): integer
public "getBlockState"(arg0: $BlockPos$$Type): $BlockState
public "getBlockEntity"(arg0: $BlockPos$$Type): $BlockEntity
public "getHeight"(): integer
public "getFluidState"(arg0: $BlockPos$$Type): $FluidState
public "clip"(arg0: $ClipContext$$Type): $BlockHitResult
public "clipWithInteractionOverride"(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: $BlockPos$$Type, arg3: $VoxelShape$$Type, arg4: $BlockState$$Type): $BlockHitResult
public "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$$Type, arg1: $BlockEntityType$$Type<(T)>): $Optional<(T)>
public "getBlockStates"(arg0: $AABB$$Type): $Stream<($BlockState)>
public "getBlockFloorHeight"(arg0: $VoxelShape$$Type, arg1: $Supplier$$Type<($VoxelShape$$Type)>): double
public "getBlockFloorHeight"(arg0: $BlockPos$$Type): double
public "getMaxLightLevel"(): integer
public "isBlockInLine"(arg0: $ClipBlockStateContext$$Type): $BlockHitResult
public "getLightEmission"(arg0: $BlockPos$$Type): integer
public static "traverseBlocks"<T, C>(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: C, arg3: $BiFunction$$Type<(C), ($BlockPos), (T)>, arg4: $Function$$Type<(C), (T)>): T
public static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
public "getSectionIndexFromSectionY"(arg0: integer): integer
public "getSectionYFromSectionIndex"(arg0: integer): integer
public "getMaxBuildHeight"(): integer
public "isOutsideBuildHeight"(arg0: integer): boolean
public "isOutsideBuildHeight"(arg0: $BlockPos$$Type): boolean
public "getMaxSection"(): integer
public "getSectionsCount"(): integer
public "getSectionIndex"(arg0: integer): integer
public "getMinSection"(): integer
public "getModelData"(arg0: $BlockPos$$Type): $ModelData
public "getAuxLightManager"(arg0: $ChunkPos$$Type): $AuxiliaryLightManager
public "getAuxLightManager"(arg0: $BlockPos$$Type): $AuxiliaryLightManager
public "getBiomeFabric"(arg0: $BlockPos$$Type): $Holder<($Biome)>
public "hasBiomes"(): boolean
public "getBlockEntityRenderData"(arg0: $BlockPos$$Type): any
get "tick"(): long
get "origin"(): $BlockPos
get "minBuildHeight"(): integer
get "height"(): integer
get "maxLightLevel"(): integer
get "maxBuildHeight"(): integer
get "maxSection"(): integer
get "sectionsCount"(): integer
get "minSection"(): integer
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
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function$$Type} from "java.util.function.Function"
import {$ClipContext$$Type} from "net.minecraft.world.level.ClipContext"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Biome} from "net.minecraft.world.level.biome.Biome"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$Stream} from "java.util.stream.Stream"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"
import {$ClipBlockStateContext$$Type} from "net.minecraft.world.level.ClipBlockStateContext"
import {$AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ClientLevelProxy$$Interface extends $BlockGetter$$Interface {
get "maxLightLevel"(): integer
get "minBuildHeight"(): integer
get "height"(): integer
get "maxBuildHeight"(): integer
get "maxSection"(): integer
get "sectionsCount"(): integer
get "minSection"(): integer
}

export class $ClientLevelProxy implements $ClientLevelProxy$$Interface {
 "clip"(arg0: $ClipContext$$Type): $BlockHitResult
 "getBlockState"(arg0: $BlockPos$$Type): $BlockState
 "clipWithInteractionOverride"(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: $BlockPos$$Type, arg3: $VoxelShape$$Type, arg4: $BlockState$$Type): $BlockHitResult
 "getBlockEntity"(arg0: $BlockPos$$Type): $BlockEntity
 "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$$Type, arg1: $BlockEntityType$$Type<(T)>): $Optional<(T)>
 "getFluidState"(arg0: $BlockPos$$Type): $FluidState
 "getBlockStates"(arg0: $AABB$$Type): $Stream<($BlockState)>
 "getBlockFloorHeight"(arg0: $VoxelShape$$Type, arg1: $Supplier$$Type<($VoxelShape$$Type)>): double
 "getBlockFloorHeight"(arg0: $BlockPos$$Type): double
 "getMaxLightLevel"(): integer
 "isBlockInLine"(arg0: $ClipBlockStateContext$$Type): $BlockHitResult
 "getLightEmission"(arg0: $BlockPos$$Type): integer
static "traverseBlocks"<T, C>(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: C, arg3: $BiFunction$$Type<(C), ($BlockPos), (T)>, arg4: $Function$$Type<(C), (T)>): T
static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
 "getMinBuildHeight"(): integer
 "getSectionIndexFromSectionY"(arg0: integer): integer
 "getSectionYFromSectionIndex"(arg0: integer): integer
 "getHeight"(): integer
 "getMaxBuildHeight"(): integer
 "isOutsideBuildHeight"(arg0: integer): boolean
 "isOutsideBuildHeight"(arg0: $BlockPos$$Type): boolean
 "getMaxSection"(): integer
 "getSectionsCount"(): integer
 "getSectionIndex"(arg0: integer): integer
 "getMinSection"(): integer
 "getModelData"(arg0: $BlockPos$$Type): $ModelData
 "getAuxLightManager"(arg0: $ChunkPos$$Type): $AuxiliaryLightManager
 "getAuxLightManager"(arg0: $BlockPos$$Type): $AuxiliaryLightManager
 "getBiomeFabric"(arg0: $BlockPos$$Type): $Holder<($Biome)>
 "hasBiomes"(): boolean
 "getBlockEntityRenderData"(arg0: $BlockPos$$Type): any
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
