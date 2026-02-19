declare module "net.minecraft.server.level.ClientInformation" {
import {$HumanoidArm, $HumanoidArm$$Type} from "net.minecraft.world.entity.HumanoidArm"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$ChatVisiblity, $ChatVisiblity$$Type} from "net.minecraft.world.entity.player.ChatVisiblity"
import {$Record} from "java.lang.Record"

export class $ClientInformation extends $Record {
static readonly "MAX_LANGUAGE_LENGTH": integer

constructor(arg0: $FriendlyByteBuf$$Type)
constructor(arg0: StringJS, arg1: integer, arg2: $ChatVisiblity$$Type, arg3: boolean, arg4: integer, arg5: $HumanoidArm$$Type, arg6: boolean, arg7: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "write"(arg0: $FriendlyByteBuf$$Type): void
public "language"(): StringJS
public "textFilteringEnabled"(): boolean
public "allowsListing"(): boolean
public "modelCustomisation"(): integer
public "viewDistance"(): integer
public "chatVisibility"(): $ChatVisiblity
public static "createDefault"(): $ClientInformation
public "mainHand"(): $HumanoidArm
public "chatColors"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientInformation$$Type = ({"viewDistance"?: integer, "modelCustomisation"?: integer, "textFilteringEnabled"?: boolean, "mainHand"?: $HumanoidArm$$Type, "chatColors"?: boolean, "chatVisibility"?: $ChatVisiblity$$Type, "allowsListing"?: boolean, "language"?: StringJS}) | ([viewDistance?: integer, modelCustomisation?: integer, textFilteringEnabled?: boolean, mainHand?: $HumanoidArm$$Type, chatColors?: boolean, chatVisibility?: $ChatVisiblity$$Type, allowsListing?: boolean, language?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientInformation$$Original = $ClientInformation;}
declare module "net.minecraft.server.level.WorldGenRegion" {
import {$Iterable} from "java.lang.Iterable"
import {$LevelLightEngine} from "net.minecraft.world.level.lighting.LevelLightEngine"
import {$BlockHitResult} from "net.minecraft.world.phys.BlockHitResult"
import {$LevelHeightAccessor} from "net.minecraft.world.level.LevelHeightAccessor"
import {$Optional} from "java.util.Optional"
import {$ChunkAccess, $ChunkAccess$$Type} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$ColorResolver$$Type} from "net.minecraft.world.level.ColorResolver"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$GameEvent$$Type} from "net.minecraft.world.level.gameevent.GameEvent"
import {$SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$EntityTypeTest$$Type} from "net.minecraft.world.level.entity.EntityTypeTest"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Biome} from "net.minecraft.world.level.biome.Biome"
import {$Stream} from "java.util.stream.Stream"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$BiomeManager} from "net.minecraft.world.level.biome.BiomeManager"
import {$AuxiliaryLightManager} from "net.neoforged.neoforge.common.world.AuxiliaryLightManager"
import {$Difficulty} from "net.minecraft.world.Difficulty"
import {$StaticCache2D$$Type} from "net.minecraft.util.StaticCache2D"
import {$ChunkStatus$$Type} from "net.minecraft.world.level.chunk.status.ChunkStatus"
import {$LevelData} from "net.minecraft.world.level.storage.LevelData"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$RandomSource} from "net.minecraft.util.RandomSource"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Holder$Reference} from "net.minecraft.core.Holder$Reference"
import {$ClipContext$$Type} from "net.minecraft.world.level.ClipContext"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$EntityArrayList} from "dev.latvian.mods.kubejs.player.EntityArrayList"
import {$GenerationChunkHolder$$Type} from "net.minecraft.server.level.GenerationChunkHolder"
import {$RegistryAccess} from "net.minecraft.core.RegistryAccess"
import {$FeatureFlagSet} from "net.minecraft.world.flag.FeatureFlagSet"
import {$ChunkStep$$Type} from "net.minecraft.world.level.chunk.status.ChunkStep"
import {$UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$ChunkSource} from "net.minecraft.world.level.chunk.ChunkSource"
import {$WorldBorder} from "net.minecraft.world.level.border.WorldBorder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TickPriority$$Type} from "net.minecraft.world.ticks.TickPriority"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$TargetingConditions$$Type} from "net.minecraft.world.entity.ai.targeting.TargetingConditions"
import {$Class$$Type} from "java.lang.Class"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ClipBlockStateContext$$Type} from "net.minecraft.world.level.ClipBlockStateContext"
import {$WorldGenLevel$$Interface} from "net.minecraft.world.level.WorldGenLevel"
import {$HolderLookup} from "net.minecraft.core.HolderLookup"
import {$LightLayer$$Type} from "net.minecraft.world.level.LightLayer"
import {$GameEvent$Context$$Type} from "net.minecraft.world.level.gameevent.GameEvent$Context"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$BlockGetter} from "net.minecraft.world.level.BlockGetter"
import {$Operation$$Type} from "com.llamalad7.mixinextras.injector.wrapoperation.Operation"
import {$LevelTickAccess} from "net.minecraft.world.ticks.LevelTickAccess"
import {$Heightmap$Types$$Type} from "net.minecraft.world.level.levelgen.Heightmap$Types"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$EntityGetter} from "net.minecraft.world.level.EntityGetter"
import {$DifficultyInstance} from "net.minecraft.world.DifficultyInstance"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"
import {$MinecraftServer} from "net.minecraft.server.MinecraftServer"
import {$DimensionType} from "net.minecraft.world.level.dimension.DimensionType"

export class $WorldGenRegion implements $WorldGenLevel$$Interface {
constructor(arg0: $ServerLevel$$Type, arg1: $StaticCache2D$$Type<($GenerationChunkHolder$$Type)>, arg2: $ChunkStep$$Type, arg3: $ChunkAccess$$Type)

public "ensureCanWrite"(arg0: $BlockPos$$Type): boolean
public "setBlock"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type, arg2: integer, arg3: integer): boolean
public "setCurrentlyGenerating"(arg0: $Supplier$$Type<(StringJS)>): void
public "getRandom"(): $RandomSource
public "gameEvent"(arg0: $Holder$$Type<($GameEvent)>, arg1: $Vec3$$Type, arg2: $GameEvent$Context$$Type): void
public "playSound"(arg0: $Player$$Type, arg1: $BlockPos$$Type, arg2: $SoundEvent$$Type, arg3: $SoundSource$$Type, arg4: float, arg5: float): void
public "getServer"(): $MinecraftServer
public "levelEvent"(arg0: $Player$$Type, arg1: integer, arg2: $BlockPos$$Type, arg3: integer): void
public "getCenter"(): $ChunkPos
public "getChunk"(arg0: integer, arg1: integer): $ChunkAccess
public "getChunk"(arg0: integer, arg1: integer, arg2: $ChunkStatus$$Type, arg3: boolean): $ChunkAccess
public "getSeed"(): long
/**
 * 
 * @deprecated
 */
public "getLevel"(): $ServerLevel
public "getEntities"(arg0: $Entity$$Type, arg1: $AABB$$Type, arg2: $Predicate$$Type<($Entity)>): $List<($Entity)>
public "getEntities"<T extends $Entity>(arg0: $EntityTypeTest$$Type<($Entity$$Type), (T)>, arg1: $AABB$$Type, arg2: $Predicate$$Type<(T)>): $List<(T)>
public "getSeaLevel"(): integer
public "dimensionType"(): $DimensionType
public "getMinBuildHeight"(): integer
public "getLightEngine"(): $LevelLightEngine
public "getBlockState"(arg0: $BlockPos$$Type): $BlockState
public "addFreshEntity"(arg0: $Entity$$Type): boolean
public "destroyBlock"(arg0: $BlockPos$$Type, arg1: boolean, arg2: $Entity$$Type, arg3: integer): boolean
public "registryAccess"(): $RegistryAccess
public "getBlockEntity"(arg0: $BlockPos$$Type): $BlockEntity
public "getLevelData"(): $LevelData
public "getWorldBorder"(): $WorldBorder
public "enabledFeatures"(): $FeatureFlagSet
public "getHeight"(arg0: $Heightmap$Types$$Type, arg1: integer, arg2: integer): integer
public "getHeight"(): integer
public "hasChunk"(arg0: integer, arg1: integer): boolean
public "getShade"(arg0: $Direction$$Type, arg1: boolean): float
public "getFluidState"(arg0: $BlockPos$$Type): $FluidState
public "getFluidTicks"(): $LevelTickAccess<($Fluid)>
public "getBlockTicks"(): $LevelTickAccess<($Block)>
public "nextSubTickCount"(): long
public "getNearestPlayer"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: $Predicate$$Type<($Entity)>): $Player
public "getSkyDarken"(): integer
public "getBiomeManager"(): $BiomeManager
public "isClientSide"(): boolean
public "addParticle"(arg0: $ParticleOptions$$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double): void
public "localvar$zbf000$easyanvils$setBlock"(blockState: $BlockState$$Type): $BlockState
public "getChunkSource"(): $ChunkSource
public "getUncachedNoiseBiome"(arg0: integer, arg1: integer, arg2: integer): $Holder<($Biome)>
public "getCurrentDifficultyAt"(arg0: $BlockPos$$Type): $DifficultyInstance
public "isStateAtPosition"(arg0: $BlockPos$$Type, arg1: $Predicate$$Type<($BlockState)>): boolean
public "isFluidAtPosition"(arg0: $BlockPos$$Type, arg1: $Predicate$$Type<($FluidState)>): boolean
public "removeBlock"(arg0: $BlockPos$$Type, arg1: boolean): boolean
public "isOldChunkAround"(arg0: $ChunkPos$$Type, arg1: integer): boolean
public "addFreshEntityWithPassengers"(arg0: $Entity$$Type): void
public "gameEvent"(arg0: $Entity$$Type, arg1: $Holder$$Type<($GameEvent)>, arg2: $Vec3$$Type): void
public "gameEvent"(arg0: $ResourceKey$$Type<($GameEvent)>, arg1: $BlockPos$$Type, arg2: $GameEvent$Context$$Type): void
public "gameEvent"(arg0: $Holder$$Type<($GameEvent)>, arg1: $BlockPos$$Type, arg2: $GameEvent$Context$$Type): void
public "gameEvent"(arg0: $Entity$$Type, arg1: $Holder$$Type<($GameEvent)>, arg2: $BlockPos$$Type): void
public "playSound"(arg0: $Player$$Type, arg1: $BlockPos$$Type, arg2: $SoundEvent$$Type, arg3: $SoundSource$$Type): void
public "levelEvent"(arg0: integer, arg1: $BlockPos$$Type, arg2: integer): void
public "dayTime"(): long
public "blockUpdated"(arg0: $BlockPos$$Type, arg1: $Block$$Type): void
public "scheduleTick"(arg0: $BlockPos$$Type, arg1: $Fluid$$Type, arg2: integer, arg3: $TickPriority$$Type): void
public "scheduleTick"(arg0: $BlockPos$$Type, arg1: $Block$$Type, arg2: integer, arg3: $TickPriority$$Type): void
public "scheduleTick"(arg0: $BlockPos$$Type, arg1: $Block$$Type, arg2: integer): void
public "scheduleTick"(arg0: $BlockPos$$Type, arg1: $Fluid$$Type, arg2: integer): void
public "getDifficulty"(): $Difficulty
public "neighborShapeChanged"(arg0: $Direction$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type, arg4: integer, arg5: integer): void
public "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$$Type, arg1: $BlockEntityType$$Type<(T)>): $Optional<(T)>
public "isUnobstructed"(arg0: $Entity$$Type, arg1: $VoxelShape$$Type): boolean
public "getHeightmapPos"(arg0: $Heightmap$Types$$Type, arg1: $BlockPos$$Type): $BlockPos
public "getEntityCollisions"(arg0: $Entity$$Type, arg1: $AABB$$Type): $List<($VoxelShape)>
public "getTimeOfDay"(arg0: float): float
public "getMoonPhase"(): integer
public "getMoonBrightness"(): float
public "getEntities"(arg0: $Entity$$Type, arg1: $AABB$$Type): $List<($Entity)>
public "wrapOperation$bpc000$vmod$vanishmod$checkNearestPlayerVanished"(arg0: $Predicate$$Type, arg1: any, arg2: $Operation$$Type): boolean
public "wrapOperation$bpc000$vmod$vanishmod$checkNearbyAlivePlayerVanished"(arg0: $Predicate$$Type, arg1: any, arg2: $Operation$$Type): boolean
public "getEntitiesOfClass"<T extends $Entity>(arg0: $Class$$Type<(T)>, arg1: $AABB$$Type, arg2: $Predicate$$Type<(T)>): $List<(T)>
public "getEntitiesOfClass"<T extends $Entity>(arg0: $Class$$Type<(T)>, arg1: $AABB$$Type): $List<(T)>
public "getNearestEntity"<T extends $LivingEntity>(arg0: $Class$$Type<(T)>, arg1: $TargetingConditions$$Type, arg2: $LivingEntity$$Type, arg3: double, arg4: double, arg5: double, arg6: $AABB$$Type): T
public "getNearestEntity"<T extends $LivingEntity>(arg0: $List$$Type<(T)>, arg1: $TargetingConditions$$Type, arg2: $LivingEntity$$Type, arg3: double, arg4: double, arg5: double): T
public "getNearbyEntities"<T extends $LivingEntity>(arg0: $Class$$Type<(T)>, arg1: $TargetingConditions$$Type, arg2: $LivingEntity$$Type, arg3: $AABB$$Type): $List<(T)>
public "getNearestPlayer"(arg0: $TargetingConditions$$Type, arg1: double, arg2: double, arg3: double): $Player
public "getNearestPlayer"(arg0: $TargetingConditions$$Type, arg1: $LivingEntity$$Type, arg2: double, arg3: double, arg4: double): $Player
public "getNearestPlayer"(arg0: $Entity$$Type, arg1: double): $Player
public "getNearestPlayer"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: boolean): $Player
public "getNearestPlayer"(arg0: $TargetingConditions$$Type, arg1: $LivingEntity$$Type): $Player
public "getPlayerByUUID"(arg0: $UUID$$Type): $Player
public "getNearbyPlayers"(arg0: $TargetingConditions$$Type, arg1: $LivingEntity$$Type, arg2: $AABB$$Type): $List<($Player)>
public "hasNearbyAlivePlayer"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "getBiome"(arg0: $BlockPos$$Type): $Holder<($Biome)>
/**
 * 
 * @deprecated
 */
public "hasChunkAt"(arg0: $BlockPos$$Type): boolean
/**
 * 
 * @deprecated
 */
public "hasChunkAt"(arg0: integer, arg1: integer): boolean
public "getChunk"(arg0: $BlockPos$$Type): $ChunkAccess
public "getChunk"(arg0: integer, arg1: integer, arg2: $ChunkStatus$$Type): $ChunkAccess
public "getBlockStatesIfLoaded"(arg0: $AABB$$Type): $Stream<($BlockState)>
public "isEmptyBlock"(arg0: $BlockPos$$Type): boolean
public "holderLookup"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $HolderLookup<(T)>
public "containsAnyLiquid"(arg0: $AABB$$Type): boolean
/**
 * 
 * @deprecated
 */
public "hasChunksAt"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
/**
 * 
 * @deprecated
 */
public "hasChunksAt"(arg0: $BlockPos$$Type, arg1: $BlockPos$$Type): boolean
/**
 * 
 * @deprecated
 */
public "hasChunksAt"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): boolean
public "getBiomeFabric"(arg0: $BlockPos$$Type): $Holder
public "getPathfindingCostFromLightLevels"(arg0: $BlockPos$$Type): float
/**
 * 
 * @deprecated
 */
public "getLightLevelDependentMagicValue"(arg0: $BlockPos$$Type): float
public "isWaterAt"(arg0: $BlockPos$$Type): boolean
public "hasBiomes"(): boolean
public "getBlockTint"(arg0: $BlockPos$$Type, arg1: $ColorResolver$$Type): integer
public "getNoiseBiome"(arg0: integer, arg1: integer, arg2: integer): $Holder<($Biome)>
public "canSeeSkyFromBelowWater"(arg0: $BlockPos$$Type): boolean
public "getMaxLocalRawBrightness"(arg0: $BlockPos$$Type): integer
public "getMaxLocalRawBrightness"(arg0: $BlockPos$$Type, arg1: integer): integer
public "lithium$getLoadedChunk"(arg0: integer, arg1: integer): $ChunkAccess
public "getChunkForCollisions"(arg0: integer, arg1: integer): $BlockGetter
public "self"(): $EntityGetter
public "getPlayers"(): $EntityArrayList
public "getMcEntities"(): $Iterable<($Entity)>
public "getMcPlayers"(): $List<($Player)>
public "getEntitiesWithin"(aabb: $AABB$$Type): $EntityArrayList
public "getRawBrightness"(arg0: $BlockPos$$Type, arg1: integer): integer
public "canSeeSky"(arg0: $BlockPos$$Type): boolean
public "getBrightness"(arg0: $LightLayer$$Type, arg1: $BlockPos$$Type): integer
public "findSupportingBlock"(arg0: $Entity$$Type, arg1: $AABB$$Type): $Optional<($BlockPos)>
public "noBlockCollision"(arg0: $Entity$$Type, arg1: $AABB$$Type): boolean
public "noCollision"(arg0: $Entity$$Type): boolean
public "noCollision"(arg0: $Entity$$Type, arg1: $AABB$$Type): boolean
public "noCollision"(arg0: $AABB$$Type): boolean
public "getBlockCollisions"(arg0: $Entity$$Type, arg1: $AABB$$Type): $Iterable<($VoxelShape)>
public "findFreePosition"(arg0: $Entity$$Type, arg1: $VoxelShape$$Type, arg2: $Vec3$$Type, arg3: double, arg4: double, arg5: double): $Optional<($Vec3)>
public "collidesWithSuffocatingBlock"(arg0: $Entity$$Type, arg1: $AABB$$Type): boolean
public "isUnobstructed"(arg0: $Entity$$Type): boolean
public "isUnobstructed"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: $CollisionContext$$Type): boolean
public "getCollisions"(arg0: $Entity$$Type, arg1: $AABB$$Type): $Iterable<($VoxelShape)>
public "getSignal"(arg0: $BlockPos$$Type, arg1: $Direction$$Type): integer
public "hasSignal"(arg0: $BlockPos$$Type, arg1: $Direction$$Type): boolean
public "getControlInputSignal"(arg0: $BlockPos$$Type, arg1: $Direction$$Type, arg2: boolean): integer
public "getBestNeighborSignal"(arg0: $BlockPos$$Type): integer
public "getDirectSignal"(arg0: $BlockPos$$Type, arg1: $Direction$$Type): integer
public "getDirectSignalTo"(arg0: $BlockPos$$Type): integer
public "hasNeighborSignal"(arg0: $BlockPos$$Type): boolean
public "holder"<T>(arg0: $ResourceKey$$Type<(T)>): $Optional<($Holder$Reference<(T)>)>
public "holderOrThrow"<T>(arg0: $ResourceKey$$Type<(T)>): $Holder<(T)>
public "isAreaLoaded"(arg0: $BlockPos$$Type, arg1: integer): boolean
/**
 * 
 * @deprecated
 */
public "getBlockEntityRenderAttachment"(arg0: $BlockPos$$Type): any
public "setBlock"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type, arg2: integer): boolean
public "destroyBlock"(arg0: $BlockPos$$Type, arg1: boolean): boolean
public "destroyBlock"(arg0: $BlockPos$$Type, arg1: boolean, arg2: $Entity$$Type): boolean
public "getEntities"(): $EntityArrayList
public "getEntityByUUID"(id: $UUID$$Type): $Entity
public "getEntityByNetworkID"(id: integer): $Entity
public "clip"(arg0: $ClipContext$$Type): $BlockHitResult
public "clipWithInteractionOverride"(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: $BlockPos$$Type, arg3: $VoxelShape$$Type, arg4: $BlockState$$Type): $BlockHitResult
public "getBlockStates"(arg0: $AABB$$Type): $Stream<($BlockState)>
public "getBlockFloorHeight"(arg0: $VoxelShape$$Type, arg1: $Supplier$$Type<($VoxelShape$$Type)>): double
public "getBlockFloorHeight"(arg0: $BlockPos$$Type): double
public "getMaxLightLevel"(): integer
public "isBlockInLine"(arg0: $ClipBlockStateContext$$Type): $BlockHitResult
public "getLightEmission"(arg0: $BlockPos$$Type): integer
public static "traverseBlocks"<T, C>(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: C, arg3: $BiFunction$$Type<(C), ($BlockPos), (T)>, arg4: $Function$$Type<(C), (T)>): T
public "getShade"(arg0: float, arg1: float, arg2: float, arg3: boolean): float
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
public "getBlockEntityRenderData"(arg0: $BlockPos$$Type): any
set "currentlyGenerating"(value: $Supplier$$Type<(StringJS)>)
get "random"(): $RandomSource
get "server"(): $MinecraftServer
get "center"(): $ChunkPos
get "seed"(): long
get "level"(): $ServerLevel
get "seaLevel"(): integer
get "minBuildHeight"(): integer
get "lightEngine"(): $LevelLightEngine
get "levelData"(): $LevelData
get "worldBorder"(): $WorldBorder
get "height"(): integer
get "fluidTicks"(): $LevelTickAccess<($Fluid)>
get "blockTicks"(): $LevelTickAccess<($Block)>
get "skyDarken"(): integer
get "biomeManager"(): $BiomeManager
get "clientSide"(): boolean
get "chunkSource"(): $ChunkSource
get "difficulty"(): $Difficulty
get "moonPhase"(): integer
get "moonBrightness"(): float
get "players"(): $EntityArrayList
get "mcEntities"(): $Iterable<($Entity)>
get "mcPlayers"(): $List<($Player)>
get "entities"(): $EntityArrayList
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
export type $WorldGenRegion$$Type = ($WorldGenRegion);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldGenRegion$$Original = $WorldGenRegion;}
declare module "net.minecraft.server.level.ChunkHolder$LevelChangeListener" {
import {$IntConsumer, $IntConsumer$$Type} from "java.util.function.IntConsumer"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$IntSupplier, $IntSupplier$$Type} from "java.util.function.IntSupplier"

export interface $ChunkHolder$LevelChangeListener$$Interface {

(arg0: $ChunkPos, arg1: $IntSupplier, arg2: integer, arg3: $IntConsumer): void
}

export class $ChunkHolder$LevelChangeListener implements $ChunkHolder$LevelChangeListener$$Interface {
 "onLevelChange"(arg0: $ChunkPos$$Type, arg1: $IntSupplier$$Type, arg2: integer, arg3: $IntConsumer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkHolder$LevelChangeListener$$Type = ((arg0: $ChunkPos, arg1: $IntSupplier, arg2: integer, arg3: $IntConsumer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkHolder$LevelChangeListener$$Original = $ChunkHolder$LevelChangeListener;}
declare module "net.minecraft.server.level.ServerLevel" {
import {$PortalForcer} from "net.minecraft.world.level.portal.PortalForcer"
import {$LevelStorageSource$LevelStorageAccess$$Type} from "net.minecraft.world.level.storage.LevelStorageSource$LevelStorageAccess"
import {$ReputationEventType$$Type} from "net.minecraft.world.entity.ai.village.ReputationEventType"
import {$PathTypeCache} from "net.minecraft.world.level.pathfinder.PathTypeCache"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$StructureManager} from "net.minecraft.world.level.StructureManager"
import {$ExplosionDamageCalculator$$Type} from "net.minecraft.world.level.ExplosionDamageCalculator"
import {$NorthstarOxygen} from "com.lightning.northstar.world.oxygen.NorthstarOxygen"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IServerLevel$$Interface} from "org.embeddedt.modernfix.duck.IServerLevel"
import {$Stream$$Type} from "java.util.stream.Stream"
import {$TickRateManager} from "net.minecraft.world.TickRateManager"
import {$LongCollection$$Type} from "it.unimi.dsi.fastutil.longs.LongCollection"
import {$ArrayList} from "java.util.ArrayList"
import {$SafeBlockGetter} from "org.embeddedt.modernfix.chunk.SafeBlockGetter"
import {$ServerLevelAccessor$$Interface as $ServerLevelAccessor$0$$Interface} from "net.caffeinemc.mods.lithium.mixin.minimal_nonvanilla.spawning.ServerLevelAccessor"
import {$AttachmentChange$$Type} from "net.fabricmc.fabric.impl.attachment.sync.AttachmentChange"
import {$CrashReport$$Type} from "net.minecraft.CrashReport"
import {$Entity$RemovalReason$$Type} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$LevelStem$$Type} from "net.minecraft.world.level.dimension.LevelStem"
import {$NorthstarLevel$$Interface} from "com.lightning.northstar.accessor.NorthstarLevel"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$CustomSpawner$$Type} from "net.minecraft.world.level.CustomSpawner"
import {$ChunkProgressListener$$Type} from "net.minecraft.server.level.progress.ChunkProgressListener"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$CrashReportCategory} from "net.minecraft.CrashReportCategory"
import {$PotionBrewing} from "net.minecraft.world.item.alchemy.PotionBrewing"
import {$ServerLevelAccessor$$Interface as $ServerLevelAccessor$2$$Interface} from "com.simibubi.create.foundation.mixin.accessor.ServerLevelAccessor"
import {$ServerLevelAccessor$$Interface as $ServerLevelAccessor$1$$Interface} from "net.caffeinemc.mods.lithium.mixin.util.entity_movement_tracking.ServerLevelAccessor"
import {$RegistryAccess} from "net.minecraft.core.RegistryAccess"
import {$DimensionDataStorage} from "net.minecraft.world.level.storage.DimensionDataStorage"
import {$FeatureFlagSet} from "net.minecraft.world.flag.FeatureFlagSet"
import {$BlockSnapshot} from "net.neoforged.neoforge.common.util.BlockSnapshot"
import {$ServerWorldExtended$$Interface} from "net.caffeinemc.mods.lithium.common.world.ServerWorldExtended"
import {$IntProvider} from "net.minecraft.util.valueproviders.IntProvider"
import {$StructureTemplateManager} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager"
import {$RandomSequences, $RandomSequences$$Type} from "net.minecraft.world.RandomSequences"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ServerScoreboard} from "net.minecraft.server.ServerScoreboard"
import {$Explosion} from "net.minecraft.world.level.Explosion"
import {$ServerLevelData$$Type} from "net.minecraft.world.level.storage.ServerLevelData"
import {$Level$ExplosionInteraction$$Type} from "net.minecraft.world.level.Level$ExplosionInteraction"
import {$LinkManager$Access$$Interface} from "com.mrcrayfish.furniture.refurbished.electricity.LinkManager$Access"
import {$Function$$Type} from "java.util.function.Function"
import {$ServerWorldCache$$Interface} from "net.fabricmc.fabric.impl.lookup.block.ServerWorldCache"
import {$NorthstarTemperature} from "com.lightning.northstar.world.temperature.NorthstarTemperature"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WorldGenLevel$$Interface} from "net.minecraft.world.level.WorldGenLevel"
import {$AttachmentSyncPayloadS2C$$Type} from "net.fabricmc.fabric.impl.attachment.sync.s2c.AttachmentSyncPayloadS2C"
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$GameEvent$Context$$Type} from "net.minecraft.world.level.gameevent.GameEvent$Context"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$EntityTickList} from "net.minecraft.world.level.entity.EntityTickList"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$ICapabilityInvalidationListener$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityInvalidationListener"
import {$LinkManager} from "com.mrcrayfish.furniture.refurbished.electricity.LinkManager"
import {$ReputationEventHandler$$Type} from "net.minecraft.world.entity.ReputationEventHandler"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$SectionPos$$Type} from "net.minecraft.core.SectionPos"
import {$EntityGetter} from "net.minecraft.world.level.EntityGetter"
import {$Iterable} from "java.lang.Iterable"
import {$MapId, $MapId$$Type} from "net.minecraft.world.level.saveddata.maps.MapId"
import {$LevelHeightAccessor} from "net.minecraft.world.level.LevelHeightAccessor"
import {$ISafeBlockGetter$$Interface} from "org.embeddedt.modernfix.duck.ISafeBlockGetter"
import {$ChunkAccess, $ChunkAccess$$Type} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$StrongholdLocationCache} from "org.embeddedt.modernfix.world.StrongholdLocationCache"
import {$BlockApiCacheImpl$$Type} from "net.fabricmc.fabric.impl.lookup.block.BlockApiCacheImpl"
import {$PartEntity} from "net.neoforged.neoforge.entity.PartEntity"
import {$GameEvent$$Type} from "net.minecraft.world.level.gameevent.GameEvent"
import {$AttachmentType$$Type} from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import {$SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Raid} from "net.minecraft.world.entity.raid.Raid"
import {$EntityTypeTest$$Type} from "net.minecraft.world.level.entity.EntityTypeTest"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$MapItemSavedData, $MapItemSavedData$$Type} from "net.minecraft.world.level.saveddata.maps.MapItemSavedData"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ServerChunkCache} from "net.minecraft.server.level.ServerChunkCache"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$RecipeManager} from "net.minecraft.world.item.crafting.RecipeManager"
import {$BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"
import {$PersistentEntitySectionManager} from "net.minecraft.world.level.entity.PersistentEntitySectionManager"
import {$ServerLevelAccessor$$Interface} from "net.caffeinemc.mods.lithium.mixin.util.accessors.ServerLevelAccessor"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ServerLevelKJS$$Interface} from "dev.latvian.mods.kubejs.core.ServerLevelKJS"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$LevelChunk$$Type} from "net.minecraft.world.level.chunk.LevelChunk"
import {$EndDragonFight, $EndDragonFight$$Type} from "net.minecraft.world.level.dimension.end.EndDragonFight"
import {$Path$$Type} from "java.nio.file.Path"
import {$Raids} from "net.minecraft.world.entity.raid.Raids"
import {$AttachmentTargetInfo} from "net.fabricmc.fabric.impl.attachment.sync.AttachmentTargetInfo"
import {$AttachmentTargetImpl$$Interface} from "net.fabricmc.fabric.impl.attachment.AttachmentTargetImpl"
import {$LongSet} from "it.unimi.dsi.fastutil.longs.LongSet"
import {$List, $List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ProgressListener$$Type} from "net.minecraft.util.ProgressListener"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$EnderDragon} from "net.minecraft.world.entity.boss.enderdragon.EnderDragon"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AttachmentType$$Type as $AttachmentType$0$$Type} from "net.neoforged.neoforge.attachment.AttachmentType"
import {$BoundingBox$$Type} from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import {$Collection} from "java.util.Collection"
import {$TickingBlockEntity} from "net.minecraft.world.level.block.entity.TickingBlockEntity"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$LevelTickAccess} from "net.minecraft.world.ticks.LevelTickAccess"
import {$ParticleOptions, $ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$PoiManager} from "net.minecraft.world.entity.ai.village.poi.PoiManager"

export class $ServerLevel extends $Level implements $WorldGenLevel$$Interface, $IServerLevel$$Interface, $ISafeBlockGetter$$Interface, $ServerWorldExtended$$Interface, $ServerLevelAccessor$0$$Interface, $ServerLevelAccessor$$Interface, $ServerLevelAccessor$1$$Interface, $AttachmentTargetImpl$$Interface, $ServerWorldCache$$Interface, $LinkManager$Access$$Interface, $ServerLevelKJS$$Interface, $ServerLevelAccessor$2$$Interface, $NorthstarLevel$$Interface {
 "restoringBlockSnapshots": boolean
static readonly "LONG_PARTICLE_CLIP_RANGE": integer
static readonly "RAIN_DELAY": $IntProvider
 "thunderLevel": float
readonly "random": $RandomSource
 "capturedBlockSnapshots": $ArrayList<($BlockSnapshot)>
static readonly "MAX_ENTITY_SPAWN_Y": integer
static readonly "NETHER": $ResourceKey<($Level)>
static readonly "MAX_BRIGHTNESS": integer
static readonly "SHORT_PARTICLE_CLIP_RANGE": integer
 "rainLevel": float
 "oThunderLevel": float
static readonly "THUNDER_DURATION": $IntProvider
static readonly "RAIN_DURATION": $IntProvider
static readonly "ATTACHMENTS_NBT_KEY": StringJS
readonly "entityManager": $PersistentEntitySectionManager<($Entity)>
static readonly "OVERWORLD": $ResourceKey<($Level)>
static readonly "TICKS_PER_DAY": integer
 "oRainLevel": float
static readonly "END_SPAWN_POINT": $BlockPos
static readonly "RESOURCE_KEY_CODEC": $Codec<($ResourceKey<($Level)>)>
static readonly "END": $ResourceKey<($Level)>
static readonly "MAX_LEVEL_SIZE": integer
static readonly "MIN_ENTITY_SPAWN_Y": integer
readonly "blockEntityTickers": $List<($TickingBlockEntity)>
 "captureBlockSnapshots": boolean

constructor(arg0: $MinecraftServer$$Type, arg1: $Executor$$Type, arg2: $LevelStorageSource$LevelStorageAccess$$Type, arg3: $ServerLevelData$$Type, arg4: $ResourceKey$$Type<($Level)>, arg5: $LevelStem$$Type, arg6: $ChunkProgressListener$$Type, arg7: boolean, arg8: long, arg9: $List$$Type<($CustomSpawner$$Type)>, arg10: boolean, arg11: $RandomSequences$$Type)

public "getForcedChunks"(): $LongSet
public "onReputationEvent"(arg0: $ReputationEventType$$Type, arg1: $Entity$$Type, arg2: $ReputationEventHandler$$Type): void
public "saveDebugReport"(arg0: $Path$$Type): void
/**
 * 
 * @deprecated
 */
public "getEntityOrPart"(arg0: integer): $Entity
public "isCloseToVillage"(arg0: $BlockPos$$Type, arg1: integer): boolean
public "getAllEntities"(): $Iterable<($Entity)>
public "getRandomSequences"(): $RandomSequences
public "getRandomSequence"(arg0: $ResourceLocation$$Type): $RandomSource
public "getDragonFight"(): $EndDragonFight
public "getLogicalHeight"(): integer
public "addNewPlayer"(arg0: $ServerPlayer$$Type): void
public "getPortalForcer"(): $PortalForcer
public "getRandomPlayer"(): $ServerPlayer
public "findClosestBiome3d"(arg0: $Predicate$$Type<($Holder<($Biome)>)>, arg1: $BlockPos$$Type, arg2: integer, arg3: integer, arg4: integer): $Pair<($BlockPos), ($Holder<($Biome)>)>
public "clearBlockEvents"(arg0: $BoundingBox$$Type): void
public "setChunkForced"(arg0: integer, arg1: integer, arg2: boolean): boolean
public "addRespawnedPlayer"(arg0: $ServerPlayer$$Type): void
public "sectionsToVillage"(arg0: $SectionPos$$Type): integer
public "getWatchdogStats"(): StringJS
public "startTickingChunk"(arg0: $LevelChunk$$Type): void
public "getPathTypeCache"(): $PathTypeCache
public "areEntitiesLoaded"(arg0: long): boolean
public "observable$track"(entity: $Entity$$Type, consumer: $Consumer$$Type): void
public "getEntityManager"(): $PersistentEntitySectionManager
public "refurbishedFurniture$GetLinkManager"(): $LinkManager
public "addWorldGenChunkEntities"(arg0: $Stream$$Type<($Entity$$Type)>): void
public "onStructureStartsAvailable"(arg0: $ChunkAccess$$Type): void
public "registerCapabilityListener"(arg0: $BlockPos$$Type, arg1: $ICapabilityInvalidationListener$$Type): void
public "findNearestMapStructure"(arg0: $TagKey$$Type<($Structure)>, arg1: $BlockPos$$Type, arg2: integer, arg3: boolean): $BlockPos
public "addLegacyChunkEntities"(arg0: $Stream$$Type<($Entity$$Type)>): void
public "fabric_registerCache"(arg0: $BlockPos$$Type, arg1: $BlockApiCacheImpl$$Type): void
public "fabric_invalidateCache"(arg0: $BlockPos$$Type): void
public "mfix$getStrongholdCache"(): $StrongholdLocationCache
public "create$getEntityTickList"(): $EntityTickList
public "isNaturalSpawningAllowed"(arg0: $ChunkPos$$Type): boolean
public "isNaturalSpawningAllowed"(arg0: $BlockPos$$Type): boolean
public "gameEvent"(arg0: $Holder$$Type<($GameEvent)>, arg1: $Vec3$$Type, arg2: $GameEvent$Context$$Type): void
public "getServer"(): $MinecraftServer
public "levelEvent"(arg0: $Player$$Type, arg1: integer, arg2: $BlockPos$$Type, arg3: integer): void
public "syncData"(arg0: $AttachmentType$0$$Type<(never)>): void
public "getChunk"(arg0: integer, arg1: integer): $ChunkAccess
public "toString"(): StringJS
public "close"(): void
public "save"(arg0: $ProgressListener$$Type, arg1: boolean, arg2: boolean): void
public "unload"(arg0: $LevelChunk$$Type): void
public "tick"(arg0: $BooleanSupplier$$Type): void
public "getSeed"(): long
public "getLevel"(): $ServerLevel
public "getPersistentData"(): $CompoundTag
public "fabric_getSyncTargetInfo"(): $AttachmentTargetInfo
public "updateSleepingPlayerList"(): void
public "getEntities"<T extends $Entity>(arg0: $EntityTypeTest$$Type<($Entity$$Type), (T)>, arg1: $Predicate$$Type<(T)>, arg2: $List$$Type<(T)>): void
public "getEntities"<T extends $Entity>(arg0: $EntityTypeTest$$Type<($Entity$$Type), (T)>, arg1: $Predicate$$Type<(T)>, arg2: $List$$Type<(T)>, arg3: integer): void
public "getEntities"<T extends $Entity>(arg0: $EntityTypeTest$$Type<($Entity$$Type), (T)>, arg1: $Predicate$$Type<(T)>): $List<(T)>
public "removePlayerImmediately"(arg0: $ServerPlayer$$Type, arg1: $Entity$RemovalReason$$Type): void
public "canSleepThroughNights"(): boolean
public "explode"(arg0: $Entity$$Type, arg1: $DamageSource$$Type, arg2: $ExplosionDamageCalculator$$Type, arg3: double, arg4: double, arg5: double, arg6: float, arg7: boolean, arg8: $Level$ExplosionInteraction$$Type, arg9: $ParticleOptions$$Type, arg10: $ParticleOptions$$Type, arg11: $Holder$$Type<($SoundEvent)>): $Explosion
public "blockEvent"(arg0: $BlockPos$$Type, arg1: $Block$$Type, arg2: integer, arg3: integer): void
public "noSave"(): boolean
public "getMapData"(arg0: $MapId$$Type): $MapItemSavedData
public "setMapData"(arg0: $MapId$$Type, arg1: $MapItemSavedData$$Type): void
public "setDayTime"(arg0: long): void
public "setWeatherParameters"(arg0: integer, arg1: integer, arg2: boolean, arg3: boolean): void
public "getStructureManager"(): $StructureTemplateManager
public "cleanCapabilityListenerReferences"(): void
public "tryAddFreshEntityWithPassengers"(arg0: $Entity$$Type): boolean
public "structureManager"(): $StructureManager
public "getPoiManager"(): $PoiManager
public "getDataStorage"(): $DimensionDataStorage
public "tickCustomSpawners"(arg0: boolean, arg1: boolean): void
public "isHandlingTick"(): boolean
/**
 * 
 * @deprecated
 */
public "setDragonFight"(arg0: $EndDragonFight$$Type): void
public "tickPrecipitation"(arg0: $BlockPos$$Type): void
public "resetWeatherCycle"(): void
public "redirect$ddi000$observable$onTickNonPassenger"(entity: $Entity$$Type): void
public "lithium$setNavigationInactive"(arg0: $Mob$$Type): void
public "lithium$setNavigationActive"(arg0: $Mob$$Type): void
public "areEntityNavigationsConsistent"(): boolean
public "mfix$getSafeBlockGetter"(): $SafeBlockGetter
public "getDragons"(): $List<($EnderDragon)>
public "getPlayers"(arg0: $Predicate$$Type<($ServerPlayer)>): $List<($ServerPlayer)>
public "getPlayers"(arg0: $Predicate$$Type<($ServerPlayer)>, arg1: integer): $List<($ServerPlayer)>
public "broadcastEntityEvent"(arg0: $Entity$$Type, arg1: byte): void
public "broadcastDamageEvent"(arg0: $Entity$$Type, arg1: $DamageSource$$Type): void
public "addDuringTeleport"(arg0: $Entity$$Type): void
public "resetEmptyTime"(): void
public "mayInteract"(arg0: $Player$$Type, arg1: $BlockPos$$Type): boolean
public "fabric_syncChange"(arg0: $AttachmentType$$Type, arg1: $AttachmentSyncPayloadS2C$$Type): void
public "getDayTimeFraction"(): float
public "addWithUUID"(arg0: $Entity$$Type): boolean
public "isFlat"(): boolean
public "addFreshEntity"(arg0: $Entity$$Type): boolean
public "northstar$queueBlockUpdates"(positions: $LongCollection$$Type): void
public "updateNeighborsAtExceptFromFacing"(arg0: $BlockPos$$Type, arg1: $Block$$Type, arg2: $Direction$$Type): void
public "getEntity"(arg0: integer): $Entity
public "enabledFeatures"(): $FeatureFlagSet
public "tickRateManager"(): $TickRateManager
public "fillReportDetails"(arg0: $CrashReport$$Type): $CrashReportCategory
public "fabric_getDynamicRegistryManager"(): $RegistryAccess
public "getShade"(arg0: $Direction$$Type, arg1: boolean): float
public "isRaided"(arg0: $BlockPos$$Type): boolean
public "getRaidAt"(arg0: $BlockPos$$Type): $Raid
public "isVillage"(arg0: $BlockPos$$Type): boolean
public "isVillage"(arg0: $SectionPos$$Type): boolean
public "getRaids"(): $Raids
public "handler$bni000$immersive_melodies$immersiveMelodies$injectTickEntity"(arg0: $Entity$$Type, arg1: $CallbackInfo$$Type): void
public "handler$bni000$immersive_melodies$immersiveMelodies$injectTickPassenger"(arg0: $Entity$$Type, arg1: $Entity$$Type, arg2: $CallbackInfo$$Type): void
public "getFluidTicks"(): $LevelTickAccess
public "getBlockTicks"(): $LevelTickAccess
public "blockUpdated"(arg0: $BlockPos$$Type, arg1: $Block$$Type): void
public "sendParticles"<T extends $ParticleOptions>(arg0: $ServerPlayer$$Type, arg1: T, arg2: boolean, arg3: double, arg4: double, arg5: double, arg6: integer, arg7: double, arg8: double, arg9: double, arg10: double): boolean
public "sendParticles"<T extends $ParticleOptions>(arg0: T, arg1: double, arg2: double, arg3: double, arg4: integer, arg5: double, arg6: double, arg7: double, arg8: double): integer
public "sendParticles"(arg0: $ServerPlayer$$Type, arg1: boolean, arg2: double, arg3: double, arg4: double, arg5: $Packet$$Type<(never)>): boolean
public "getScoreboard"(): $ServerScoreboard
public "playSeededSound"(arg0: $Player$$Type, arg1: double, arg2: double, arg3: double, arg4: $Holder$$Type<($SoundEvent)>, arg5: $SoundSource$$Type, arg6: float, arg7: float, arg8: long): void
public "playSeededSound"(arg0: $Player$$Type, arg1: $Entity$$Type, arg2: $Holder$$Type<($SoundEvent)>, arg3: $SoundSource$$Type, arg4: float, arg5: float, arg6: long): void
public "getChunkSource"(): $ServerChunkCache
public "getRecipeManager"(): $RecipeManager
public "getUncachedNoiseBiome"(arg0: integer, arg1: integer, arg2: integer): $Holder<($Biome)>
public "invalidateCapabilities"(arg0: $BlockPos$$Type): void
public "invalidateCapabilities"(arg0: $ChunkPos$$Type): void
public "gatherChunkSourceStats"(): StringJS
public "destroyBlockProgress"(arg0: integer, arg1: $BlockPos$$Type, arg2: integer): void
public "isPositionEntityTicking"(arg0: $BlockPos$$Type): boolean
public "tickChunk"(arg0: $LevelChunk$$Type, arg1: integer): void
public "sendBlockUpdated"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type, arg2: $BlockState$$Type, arg3: integer): void
public "getPartEntities"(): $Collection<($PartEntity<(never)>)>
public "onBlockStateChange"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type, arg2: $BlockState$$Type): void
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: $Block$$Type, arg3: $BlockPos$$Type, arg4: boolean): void
public "neighborChanged"(arg0: $BlockPos$$Type, arg1: $Block$$Type, arg2: $BlockPos$$Type): void
public "globalLevelEvent"(arg0: integer, arg1: $BlockPos$$Type, arg2: integer): void
public "getFreeMapId"(): $MapId
public "updateNeighborsAt"(arg0: $BlockPos$$Type, arg1: $Block$$Type): void
public "shouldTickBlocksAt"(arg0: long): boolean
public "getDayTimePerTick"(): float
public "setDayTimePerTick"(arg0: float): void
public "setDayTimeFraction"(arg0: float): void
public "potionBrewing"(): $PotionBrewing
public "tickNonPassenger"(arg0: $Entity$$Type): void
public "setDefaultSpawnPos"(arg0: $BlockPos$$Type, arg1: float): void
public "redirect$ddi000$observable$onTickPassenger"(entity: $Entity$$Type): void
public "handler$ekl000$northstar$venusTickChunk"(chunk: $LevelChunk$$Type, randomTickSpeed: integer, info: $CallbackInfo$$Type): void
public "redirect$ddi000$observable$onTickLiquid"(state: $FluidState$$Type, level: $Level$$Type, pos: $BlockPos$$Type): void
public "redirect$ddi000$observable$onTickBlock"(state: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, random: $RandomSource$$Type): void
public "ensureCanWrite"(arg0: $BlockPos$$Type): boolean
public "setCurrentlyGenerating"(arg0: $Supplier$$Type<(StringJS)>): void
public "acknowledgeSyncedEntry"(arg0: $AttachmentType$$Type<(never)>, arg1: $AttachmentChange$$Type): void
public "fabric_shouldTryToSync"(): boolean
public "fabric_computeInitialSyncChanges"(arg0: $ServerPlayer$$Type, arg1: $Consumer$$Type<($AttachmentChange)>): void
public "self"(): $EntityGetter
public "spawnParticles"(options: $ParticleOptions$$Type, overrideLimiter: boolean, x: double, y: double, z: double, vx: double, vy: double, vz: double, count: integer, speed: double): void
public "northstar$temperature"(): $NorthstarTemperature
public "northstar$oxygen"(): $NorthstarOxygen
public "addFreshEntityWithPassengers"(arg0: $Entity$$Type): void
public static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
public "getMinBuildHeight"(): integer
public "getHeight"(): integer
public static "getAllLoadedEntities"(level: $Level$$Type): $Iterable<($Entity)>
public static "traverseBlocks"<T, C>(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: C, arg3: $BiFunction$$Type<(C), ($BlockPos), (T)>, arg4: $Function$$Type<(C), (T)>): T
get "forcedChunks"(): $LongSet
get "allEntities"(): $Iterable<($Entity)>
get "randomSequences"(): $RandomSequences
get "dragonFight"(): $EndDragonFight
get "logicalHeight"(): integer
get "portalForcer"(): $PortalForcer
get "randomPlayer"(): $ServerPlayer
get "watchdogStats"(): StringJS
get "pathTypeCache"(): $PathTypeCache
get "server"(): $MinecraftServer
get "seed"(): long
get "level"(): $ServerLevel
get "persistentData"(): $CompoundTag
set "dayTime"(value: long)
get "poiManager"(): $PoiManager
get "dataStorage"(): $DimensionDataStorage
get "handlingTick"(): boolean
set "dragonFight"(value: $EndDragonFight$$Type)
get "dragons"(): $List<($EnderDragon)>
get "dayTimeFraction"(): float
get "flat"(): boolean
get "raids"(): $Raids
get "fluidTicks"(): $LevelTickAccess
get "blockTicks"(): $LevelTickAccess
get "scoreboard"(): $ServerScoreboard
get "chunkSource"(): $ServerChunkCache
get "recipeManager"(): $RecipeManager
get "partEntities"(): $Collection<($PartEntity<(never)>)>
get "freeMapId"(): $MapId
get "dayTimePerTick"(): float
set "dayTimePerTick"(value: float)
set "dayTimeFraction"(value: float)
set "currentlyGenerating"(value: $Supplier$$Type<(StringJS)>)
get "minBuildHeight"(): integer
get "height"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerLevel$$Type = ($ServerLevel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerLevel$$Original = $ServerLevel;}
declare module "net.minecraft.server.level.ChunkHolder$PlayerProvider" {
import {$List, $List$$Type} from "java.util.List"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"

export interface $ChunkHolder$PlayerProvider$$Interface {

(arg0: $ChunkPos, arg1: boolean): $List$$Type<($ServerPlayer$$Type)>
}

export class $ChunkHolder$PlayerProvider implements $ChunkHolder$PlayerProvider$$Interface {
 "getPlayers"(arg0: $ChunkPos$$Type, arg1: boolean): $List<($ServerPlayer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkHolder$PlayerProvider$$Type = ((arg0: $ChunkPos, arg1: boolean) => $List$$Type<($ServerPlayer$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkHolder$PlayerProvider$$Original = $ChunkHolder$PlayerProvider;}
declare module "net.minecraft.server.level.ServerChunkCache" {
import {$ChunkGeneratorStructureState} from "net.minecraft.world.level.chunk.ChunkGeneratorStructureState"
import {$LevelLightEngine} from "net.minecraft.world.level.lighting.LevelLightEngine"
import {$DimensionDataStorage, $DimensionDataStorage$$Type} from "net.minecraft.world.level.storage.DimensionDataStorage"
import {$LevelStorageSource$LevelStorageAccess$$Type} from "net.minecraft.world.level.storage.LevelStorageSource$LevelStorageAccess"
import {$ChunkResult} from "net.minecraft.server.level.ChunkResult"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$TicketType$$Type} from "net.minecraft.server.level.TicketType"
import {$ChunkAccess} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$ChunkSource} from "net.minecraft.world.level.chunk.ChunkSource"
import {$StructureTemplateManager$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager"
import {$ChunkMap} from "net.minecraft.server.level.ChunkMap"
import {$DataFixer$$Type} from "com.mojang.datafixers.DataFixer"
import {$ChunkScanAccess} from "net.minecraft.world.level.chunk.storage.ChunkScanAccess"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$LightLayer$$Type} from "net.minecraft.world.level.LightLayer"
import {$NaturalSpawner$SpawnState} from "net.minecraft.world.level.NaturalSpawner$SpawnState"
import {$RandomState} from "net.minecraft.world.level.levelgen.RandomState"
import {$BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"
import {$CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$ChunkStatus$$Type} from "net.minecraft.world.level.chunk.status.ChunkStatus"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$ServerChunkCache$MainThreadExecutor} from "net.minecraft.server.level.ServerChunkCache$MainThreadExecutor"
import {$LightChunk} from "net.minecraft.world.level.chunk.LightChunk"
import {$BlockGetter} from "net.minecraft.world.level.BlockGetter"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$ChunkGenerator, $ChunkGenerator$$Type} from "net.minecraft.world.level.chunk.ChunkGenerator"
import {$SectionPos$$Type} from "net.minecraft.core.SectionPos"
import {$LevelChunk} from "net.minecraft.world.level.chunk.LevelChunk"
import {$ChunkStatusUpdateListener$$Type} from "net.minecraft.world.level.entity.ChunkStatusUpdateListener"
import {$Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ChunkProgressListener$$Type} from "net.minecraft.server.level.progress.ChunkProgressListener"
import {$IServerChunkCacheExtension$$Interface} from "net.neoforged.neoforge.common.extensions.IServerChunkCacheExtension"
import {$PoiManager} from "net.minecraft.world.entity.ai.village.poi.PoiManager"

export class $ServerChunkCache extends $ChunkSource implements $IServerChunkCacheExtension$$Interface {
readonly "mainThreadProcessor": $ServerChunkCache$MainThreadExecutor
readonly "level": $ServerLevel
readonly "chunkMap": $ChunkMap

constructor(arg0: $ServerLevel$$Type, arg1: $LevelStorageSource$LevelStorageAccess$$Type, arg2: $DataFixer$$Type, arg3: $StructureTemplateManager$$Type, arg4: $Executor$$Type, arg5: $ChunkGenerator$$Type, arg6: integer, arg7: integer, arg8: boolean, arg9: $ChunkProgressListener$$Type, arg10: $ChunkStatusUpdateListener$$Type, arg11: $Supplier$$Type<($DimensionDataStorage$$Type)>)

public "getLastSpawnState"(): $NaturalSpawner$SpawnState
public "isPositionTicking"(arg0: long): boolean
public "removeRegionTicket"<T>(arg0: $TicketType$$Type<(T)>, arg1: $ChunkPos$$Type, arg2: integer, arg3: T): void
public "removeRegionTicket"<T>(arg0: $TicketType$$Type<(T)>, arg1: $ChunkPos$$Type, arg2: integer, arg3: T, arg4: boolean): void
public "updateChunkForced"(arg0: $ChunkPos$$Type, arg1: boolean): void
public "getChunk"(arg0: integer, arg1: integer, arg2: $ChunkStatus$$Type, arg3: boolean): $ChunkAccess
public "close"(): void
public "save"(arg0: boolean): void
public "broadcast"(arg0: $Entity$$Type, arg1: $Packet$$Type<(never)>): void
public "move"(arg0: $ServerPlayer$$Type): void
public "tick"(arg0: $BooleanSupplier$$Type, arg1: boolean): void
public "pollTask"(): boolean
public "getLevel"(): $BlockGetter
public "setViewDistance"(arg0: integer): void
public "getGenerator"(): $ChunkGenerator
public "addEntity"(arg0: $Entity$$Type): void
public "getPoiManager"(): $PoiManager
public "getDataStorage"(): $DimensionDataStorage
public "chunkScanner"(): $ChunkScanAccess
public "randomState"(): $RandomState
public "getGeneratorState"(): $ChunkGeneratorStructureState
public "broadcastAndSend"(arg0: $Entity$$Type, arg1: $Packet$$Type<(never)>): void
public "addRegionTicket"<T>(arg0: $TicketType$$Type<(T)>, arg1: $ChunkPos$$Type, arg2: integer, arg3: T, arg4: boolean): void
public "addRegionTicket"<T>(arg0: $TicketType$$Type<(T)>, arg1: $ChunkPos$$Type, arg2: integer, arg3: T): void
public "getChunkNow"(arg0: integer, arg1: integer): $LevelChunk
public "getLightEngine"(): $LevelLightEngine
public "getPendingTasksCount"(): integer
public "hasChunk"(arg0: integer, arg1: integer): boolean
public "removeTicketsOnClosing"(): void
public "getTickingGenerated"(): integer
public "getChunkFuture"(arg0: integer, arg1: integer, arg2: $ChunkStatus$$Type, arg3: boolean): $CompletableFuture<($ChunkResult<($ChunkAccess)>)>
public "getChunkForLighting"(arg0: integer, arg1: integer): $LightChunk
public "setSpawnSettings"(arg0: boolean, arg1: boolean): void
public "gatherStats"(): StringJS
public "removeEntity"(arg0: $Entity$$Type): void
public "blockChanged"(arg0: $BlockPos$$Type): void
public "onLightUpdate"(arg0: $LightLayer$$Type, arg1: $SectionPos$$Type): void
public "getChunkDebugData"(arg0: $ChunkPos$$Type): StringJS
public "setSimulationDistance"(arg0: integer): void
public "getLoadedChunksCount"(): integer
public "handler$big000$smoothchunk$onSaveALlChunks"(arg0: boolean, arg1: $CallbackInfo$$Type): void
public "self"(): $ServerChunkCache
public "broadcast"(arg0: $Entity$$Type, arg1: $CustomPacketPayload$$Type): void
public "broadcastAndSend"(arg0: $Entity$$Type, arg1: $CustomPacketPayload$$Type): void
get "lastSpawnState"(): $NaturalSpawner$SpawnState
set "viewDistance"(value: integer)
get "generator"(): $ChunkGenerator
get "poiManager"(): $PoiManager
get "dataStorage"(): $DimensionDataStorage
get "generatorState"(): $ChunkGeneratorStructureState
get "lightEngine"(): $LevelLightEngine
get "pendingTasksCount"(): integer
get "tickingGenerated"(): integer
set "simulationDistance"(value: integer)
get "loadedChunksCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerChunkCache$$Type = ($ServerChunkCache);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerChunkCache$$Original = $ServerChunkCache;}
declare module "net.minecraft.server.level.FullChunkStatus" {
import {$Enum} from "java.lang.Enum"

export class $FullChunkStatus extends $Enum<($FullChunkStatus)> {
static readonly "ENTITY_TICKING": $FullChunkStatus
static readonly "INACCESSIBLE": $FullChunkStatus
static readonly "FULL": $FullChunkStatus
static readonly "BLOCK_TICKING": $FullChunkStatus

public static "values"(): ($FullChunkStatus)[]
public static "valueOf"(arg0: StringJS): $FullChunkStatus
public "isOrAfter"(arg0: $FullChunkStatus$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FullChunkStatus$$Type = (("inaccessible") | ("full") | ("block_ticking") | ("entity_ticking"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FullChunkStatus$$Original = $FullChunkStatus;}
declare module "net.minecraft.server.level.ServerPlayer" {
import {$HumanoidArm} from "net.minecraft.world.entity.HumanoidArm"
import {$CommonPlayerSpawnInfo} from "net.minecraft.network.protocol.game.CommonPlayerSpawnInfo"
import {$DimensionTransition$PostDimensionTransition$$Type} from "net.minecraft.world.level.portal.DimensionTransition$PostDimensionTransition"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RemoteChatSession, $RemoteChatSession$$Type} from "net.minecraft.network.chat.RemoteChatSession"
import {$Optional} from "java.util.Optional"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$SignBlockEntity$$Type} from "net.minecraft.world.level.block.entity.SignBlockEntity"
import {$ServerGamePacketListenerImpl} from "net.minecraft.server.network.ServerGamePacketListenerImpl"
import {$SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Player$BedSleepingProblem} from "net.minecraft.world.entity.player.Player$BedSleepingProblem"
import {$NorthstarServerPlayer$$Interface} from "com.lightning.northstar.accessor.NorthstarServerPlayer"
import {$CommandBlockEntity$$Type} from "net.minecraft.world.level.block.entity.CommandBlockEntity"
import {$ChestMenuData$$Type} from "dev.latvian.mods.kubejs.gui.chest.ChestMenuData"
import {$RelativeMovement$$Type} from "net.minecraft.world.entity.RelativeMovement"
import {$SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$EntityDataAccessor} from "net.minecraft.network.syncher.EntityDataAccessor"
import {$Either} from "com.mojang.datafixers.util.Either"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$ServerPlayerKJS$$Interface} from "dev.latvian.mods.kubejs.core.ServerPlayerKJS"
import {$ServerPlayerDataAPI, $ServerPlayerDataAPI$$Type} from "xaero.pac.common.server.player.data.api.ServerPlayerDataAPI"
import {$Set$$Type} from "java.util.Set"
import {$KubeJSGUI$$Type} from "dev.latvian.mods.kubejs.gui.KubeJSGUI"
import {$TextFilter} from "net.minecraft.server.network.TextFilter"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$ServerStatsCounter} from "net.minecraft.stats.ServerStatsCounter"
import {$IOpenPACServerPlayer$$Interface} from "xaero.pac.common.server.player.data.IOpenPACServerPlayer"
import {$Entity$RemovalReason} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ClientInformation, $ClientInformation$$Type} from "net.minecraft.server.level.ClientInformation"
import {$LevelBlock, $LevelBlock$$Type} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$AbstractHorse$$Type} from "net.minecraft.world.entity.animal.horse.AbstractHorse"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$Stat$$Type} from "net.minecraft.stats.Stat"
import {$OptionalInt} from "java.util.OptionalInt"
import {$RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$ServerRecipeBook} from "net.minecraft.stats.ServerRecipeBook"
import {$InventoryMenu} from "net.minecraft.world.inventory.InventoryMenu"
import {$Unit} from "net.minecraft.util.Unit"
import {$PlayerAdvancements} from "net.minecraft.server.PlayerAdvancements"
import {$MerchantOffers$$Type} from "net.minecraft.world.item.trading.MerchantOffers"
import {$List$$Type} from "java.util.List"
import {$ServerPlayerGameMode} from "net.minecraft.server.level.ServerPlayerGameMode"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$WardenSpawnTracker} from "net.minecraft.world.entity.monster.warden.WardenSpawnTracker"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Abilities} from "net.minecraft.world.entity.player.Abilities"
import {$DimensionTransition, $DimensionTransition$$Type} from "net.minecraft.world.level.portal.DimensionTransition"
import {$OutgoingChatMessage$$Type} from "net.minecraft.network.chat.OutgoingChatMessage"
import {$FishingHook} from "net.minecraft.world.entity.projectile.FishingHook"
import {$WalkAnimationState} from "net.minecraft.world.entity.WalkAnimationState"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$InventoryKJS$$Type} from "dev.latvian.mods.kubejs.core.InventoryKJS"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameType$$Type} from "net.minecraft.world.level.GameType"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$NotificationToastData$$Type} from "dev.latvian.mods.kubejs.util.NotificationToastData"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection$$Type} from "java.util.Collection"
import {$EntityDimensions} from "net.minecraft.world.entity.EntityDimensions"
import {$ItemEntity, $ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$ChangeSubscriber, $ChangeSubscriber$$Type} from "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$PlayerStatsJS} from "dev.latvian.mods.kubejs.player.PlayerStatsJS"
import {$ChunkTrackingView, $ChunkTrackingView$$Type} from "net.minecraft.server.level.ChunkTrackingView"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$ServerPlayerAccessor$$Interface} from "com.railwayteam.railways.mixin.conductor_possession.ServerPlayerAccessor"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ServerStatus$$Type} from "net.minecraft.network.protocol.status.ServerStatus"
import {$SectionPos, $SectionPos$$Type} from "net.minecraft.core.SectionPos"
import {$ChatVisiblity} from "net.minecraft.world.entity.player.ChatVisiblity"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$NorthstarPlayer$$Interface} from "com.lightning.northstar.accessor.NorthstarPlayer"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$EntityAnchorArgument$Anchor$$Type} from "net.minecraft.commands.arguments.EntityAnchorArgument$Anchor"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$ChatType$Bound$$Type} from "net.minecraft.network.chat.ChatType$Bound"

export class $ServerPlayer extends $Player implements $IOpenPACServerPlayer$$Interface, $ServerPlayerAccessor$$Interface, $ServerPlayerKJS$$Interface, $NorthstarPlayer$$Interface, $NorthstarServerPlayer$$Interface {
static readonly "DEFAULT_BASE_GRAVITY": double
 "hasImpulse": boolean
static readonly "USE_ITEM_INTERVAL": integer
 "yHeadRot": float
 "yCloakO": double
 "noPhysics": boolean
 "yo": double
 "connection": $ServerGamePacketListenerImpl
 "yBodyRotO": float
 "removalReason": $Entity$RemovalReason
 "zza": float
 "swingingArm": $InteractionHand
static readonly "CRAFTING_SLOT_OFFSET": integer
static readonly "INTERACTION_DISTANCE_VERIFICATION_BUFFER": double
static readonly "ID_TAG": StringJS
static readonly "DATA_HEALTH_ID": $EntityDataAccessor<(float)>
static readonly "WAKE_UP_DURATION": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
 "zo": double
 "wonGame": boolean
 "walkDist": float
 "noCulling": boolean
readonly "walkAnimation": $WalkAnimationState
readonly "gameMode": $ServerPlayerGameMode
readonly "object": any
static readonly "STANDING_DIMENSIONS": $EntityDimensions
 "yya": float
readonly "server": $MinecraftServer
 "oAttackAnim": float
 "yHeadRotO": float
static readonly "UUID_TAG": StringJS
static readonly "DEFAULT_MODEL_CUSTOMIZATION": integer
 "hurtDuration": integer
static readonly "DEATH_DURATION": integer
 "portalProcess": $PortalProcessor
static readonly "SWIMMING_BB_HEIGHT": float
static readonly "DEFAULT_ENTITY_INTERACTION_RANGE": float
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "experienceLevel": integer
static readonly "DEFAULT_BABY_SCALE": float
 "eyeHeight": float
static readonly "ATTRIBUTES_FIELD": StringJS
static readonly "PERSISTED_NBT_TAG": StringJS
static readonly "DEFAULT_BB_HEIGHT": float
 "seenCredits": boolean
 "xxa": float
 "zCloak": double
 "flyDist": float
 "currentImpulseImpactPos": $Vec3
static readonly "PASSENGERS_TAG": StringJS
 "xCloakO": double
 "wasOnFire": boolean
 "attackAnim": float
 "zOld": double
readonly "timeOffs": float
readonly "rotA": float
 "horizontalCollision": boolean
 "dimensions": $EntityDimensions
static readonly "ENDER_SLOT_OFFSET": integer
static readonly "ARMOR_SLOT_OFFSET": integer
static readonly "SLEEP_DURATION": integer
static readonly "HELD_ITEM_SLOT": integer
 "yCloak": double
 "swingTime": integer
static readonly "BODY_ARMOR_OFFSET": integer
 "xCloak": double
readonly "abilities": $Abilities
 "tickCount": integer
static readonly "BOARDING_COOLDOWN": integer
static readonly "MAX_HEALTH": integer
static readonly "SWING_DURATION": integer
 "yRotO": float
static readonly "MIN_MOVEMENT_DISTANCE": double
static readonly "CONTENTS_SLOT_INDEX": integer
static readonly "BASE_JUMP_POWER": float
static readonly "DEFAULT_EYE_HEIGHT": float
static readonly "CROUCH_BB_HEIGHT": float
 "moveDist": float
 "zCloakO": double
 "mainSupportingBlockPos": $Optional<($BlockPos)>
 "bob": float
 "experienceProgress": float
 "create_diesel_generators$turretPos": $BlockPos
 "totalExperience": integer
 "xOld": double
 "wasInPowderSnow": boolean
 "containerMenu": $AbstractContainerMenu
 "hurtTime": integer
 "swinging": boolean
 "hurtMarked": boolean
static readonly "DEFAULT_MAIN_HAND": $HumanoidArm
 "deathTime": integer
static readonly "EQUIPMENT_SLOT_OFFSET": integer
 "invulnerableTime": integer
 "jumping": boolean
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
static readonly "DEFAULT_VEHICLE_ATTACHMENT": $Vec3
readonly "inventoryMenu": $InventoryMenu
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "ARMOR_SLOTS": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "PLAYER_HURT_EXPERIENCE_TIME": integer
 "yOld": double
static readonly "HAND_SLOTS": integer
static readonly "DEFAULT_BB_WIDTH": float
 "minorHorizontalCollision": boolean
static readonly "EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT": float
 "fishing": $FishingHook
 "removeArrowTime": integer
 "walkDistO": float
static readonly "SWIMMING_BB_WIDTH": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "yBodyRot": float
 "blocksBuilding": boolean
 "takeXpDelay": integer
static readonly "DEFAULT_BLOCK_INTERACTION_RANGE": float
 "oBob": float
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
readonly "invulnerableDuration": integer
 "removeStingerTime": integer
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "currentExplosionCause": $Entity

constructor(arg0: $MinecraftServer$$Type, arg1: $ServerLevel$$Type, arg2: $GameProfile$$Type, arg3: $ClientInformation$$Type)

public "disconnect"(): void
public "isCreative"(): boolean
public "swing"(arg0: $InteractionHand$$Type): void
public "attack"(arg0: $DamageSource$$Type, arg1: float): boolean
public "awardStat"(arg0: $Stat$$Type<(never)>, arg1: integer): void
public "dismountTo"(arg0: double, arg1: double, arg2: double): void
public "travel"(arg0: $Vec3$$Type): void
public "rideTick"(): void
public "stopRiding"(): void
public "teleportTo"(arg0: $ServerLevel$$Type, arg1: double, arg2: double, arg3: double, arg4: $Set$$Type<($RelativeMovement$$Type)>, arg5: float, arg6: float): boolean
public "teleportTo"(arg0: $ServerLevel$$Type, arg1: double, arg2: double, arg3: double, arg4: float, arg5: float): void
public "teleportTo"(arg0: double, arg1: double, arg2: double): void
public "moveTo"(arg0: double, arg1: double, arg2: double): void
public "getTabListDisplayName"(): $Component
public "setRaidOmenPosition"(arg0: $BlockPos$$Type): void
public "copyRespawnPosition"(arg0: $ServerPlayer$$Type): void
public "clearRaidOmenPosition"(): void
public "resetLastActionTime"(): void
public "checkMovementStatistics"(arg0: double, arg1: double, arg2: double): void
public "setXaero_OPAC_PlayerData"(arg0: $ServerPlayerDataAPI$$Type): void
public "getXaero_OPAC_PlayerData"(): $ServerPlayerDataAPI
public "checkRidingStatistics"(arg0: double, arg1: double, arg2: double): void
public "getRaidOmenPosition"(): $BlockPos
public "setTabListHeaderFooter"(arg0: $Component$$Type, arg1: $Component$$Type): void
public "hasChangedDimension"(): void
public "setChunkTrackingView"(arg0: $ChunkTrackingView$$Type): void
public "getChunkTrackingView"(): $ChunkTrackingView
public "shouldFilterMessageTo"(arg0: $ServerPlayer$$Type): boolean
public "drop"(arg0: $ItemStack$$Type, arg1: boolean, arg2: boolean): $ItemEntity
public "drop"(arg0: boolean): boolean
public "getLanguage"(): StringJS
public "tick"(): void
public "take"(arg0: $Entity$$Type, arg1: integer): void
public "northstar$setPositionRelativeTo"(other: $Entity$$Type): void
public "trackEnteredOrExitedLavaOnVehicle"(): void
public "setSpawnExtraParticlesOnFall"(arg0: boolean): void
public "onEquippedItemBroken"(arg0: $Item$$Type, arg1: $EquipmentSlot$$Type): void
public "adjustSpawnLocation"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type): $BlockPos
public "giveExperienceLevels"(arg0: integer): void
public "onEnchantmentPerformed"(arg0: $ItemStack$$Type, arg1: integer): void
public "giveExperiencePoints"(arg0: integer): void
public "triggerRecipeCrafted"(arg0: $RecipeHolder$$Type<(never)>, arg1: $List$$Type<($ItemStack$$Type)>): void
public "getWardenSpawnTracker"(): $Optional<($WardenSpawnTracker)>
public "getCamera"(): $Entity
public "doTick"(): void
public "setCamera"(arg0: $Entity$$Type): void
public "requestedViewDistance"(): integer
public "setExperiencePoints"(arg0: integer): void
public "setExperienceLevels"(arg0: integer): void
public "getRespawnDimension"(): $ResourceKey<($Level)>
public "createCommonSpawnInfo"(arg0: $ServerLevel$$Type): $CommonPlayerSpawnInfo
public "trackStartFallingPosition"(): void
public "isChangingDimension"(): boolean
public "allowsListing"(): boolean
public "initInventoryMenu"(): void
public "setTabListHeader"(arg0: $Component$$Type): void
public "getRespawnAngle"(): float
public "getTabListFooter"(): $Component
public "getLastActionTime"(): long
public "doCheckFallDamage"(arg0: double, arg1: double, arg2: double, arg3: boolean): void
public "loadGameTypes"(arg0: $CompoundTag$$Type): void
public "setRespawnPosition"(arg0: $ResourceKey$$Type<($Level)>, arg1: $BlockPos$$Type, arg2: float, arg3: boolean, arg4: boolean): void
public "getTabListHeader"(): $Component
public "isRespawnForced"(): boolean
public "sendChatMessage"(arg0: $OutgoingChatMessage$$Type, arg1: boolean, arg2: $ChatType$Bound$$Type): void
public "getIpAddress"(): StringJS
public "setPlayerInput"(arg0: float, arg1: float, arg2: boolean, arg3: boolean): void
public "clientInformation"(): $ClientInformation
public "canChatInColor"(): boolean
public "setGameMode"(arg0: $GameType$$Type): boolean
public "resetSentInfo"(): void
public "hasDisconnected"(): boolean
public "getChatVisibility"(): $ChatVisiblity
public "sendServerStatus"(arg0: $ServerStatus$$Type): void
public "setLastSectionPos"(arg0: $SectionPos$$Type): void
public "setTabListFooter"(arg0: $Component$$Type): void
public "refreshTabListName"(): void
public "getLastSectionPos"(): $SectionPos
public "getTextFilter"(): $TextFilter
public "setServerLevel"(arg0: $ServerLevel$$Type): void
public "showEndCredits"(): void
public "setKnownMovement"(arg0: $Vec3$$Type): void
public "setChatSession"(arg0: $RemoteChatSession$$Type): void
public "getChatSession"(): $RemoteChatSession
public "lookAt"(arg0: $EntityAnchorArgument$Anchor$$Type, arg1: $Entity$$Type, arg2: $EntityAnchorArgument$Anchor$$Type): void
public "lookAt"(arg0: $EntityAnchorArgument$Anchor$$Type, arg1: $Vec3$$Type): void
public "addAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "readAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "resetFallDistance"(): void
public "onItemPickup"(arg0: $ItemEntity$$Type): void
public "onLeaveCombat"(): void
public "onEnterCombat"(): void
public "startSleeping"(arg0: $BlockPos$$Type): void
public "sendSystemMessage"(arg0: $Component$$Type, arg1: boolean): void
public "sendSystemMessage"(arg0: $Component$$Type): void
public "onInsideBlock"(arg0: $BlockState$$Type): void
public "restoreFrom"(arg0: $ServerPlayer$$Type, arg1: boolean): void
public "startRiding"(arg0: $Entity$$Type, arg1: boolean): boolean
public "onExplosionHit"(arg0: $Entity$$Type): void
public "mayInteract"(arg0: $Level$$Type, arg1: $BlockPos$$Type): boolean
public "getKnownMovement"(): $Vec3
public "broadcastToPlayer"(arg0: $ServerPlayer$$Type): boolean
public "teleportRelative"(arg0: double, arg1: double, arg2: double): void
public "serverLevel"(): $ServerLevel
public "closeMenu"(): void
public "stopSleepInBed"(arg0: boolean, arg1: boolean): void
public "openTextEdit"(arg0: $SignBlockEntity$$Type, arg1: boolean): void
public "playNotifySound"(arg0: $SoundEvent$$Type, arg1: $SoundSource$$Type, arg2: float, arg3: float): void
public "sendMerchantOffers"(arg0: integer, arg1: $MerchantOffers$$Type, arg2: integer, arg3: integer, arg4: boolean, arg5: boolean): void
public "openItemGui"(arg0: $ItemStack$$Type, arg1: $InteractionHand$$Type): void
public "openCommandBlock"(arg0: $CommandBlockEntity$$Type): void
public "doCloseContainer"(): void
public "canHarmPlayer"(arg0: $Player$$Type): boolean
public "openHorseInventory"(arg0: $AbstractHorse$$Type, arg1: $Container$$Type): void
public "resetRecipes"(arg0: $Collection$$Type<($RecipeHolder$$Type<(never)>)>): integer
public "onUpdateAbilities"(): void
public "awardRecipes"(arg0: $Collection$$Type<($RecipeHolder$$Type<(never)>)>): integer
public "awardRecipesByKey"(arg0: $List$$Type<($ResourceLocation$$Type)>): void
public "startSleepInBed"(arg0: $BlockPos$$Type): $Either<($Player$BedSleepingProblem), ($Unit)>
public "isInvulnerableTo"(arg0: $DamageSource$$Type): boolean
public "getRespawnPosition"(): $BlockPos
public "changeDimension"(arg0: $DimensionTransition$$Type): $Entity
public "updateOptions"(arg0: $ClientInformation$$Type): void
public "isSpectator"(): boolean
public "getAdvancements"(): $PlayerAdvancements
public "getStatsCounter"(): $ServerStatsCounter
public "findRespawnPositionAndUseSpawnBlock"(arg0: boolean, arg1: $DimensionTransition$PostDimensionTransition$$Type): $DimensionTransition
public "getRecipeBook"(): $ServerRecipeBook
public "awardKillScore"(arg0: $Entity$$Type, arg1: integer, arg2: $DamageSource$$Type): void
public "indicateDamage"(arg0: double, arg1: double): void
public "handler$boj000$vmod$vanishmod$onIsSpectator"(arg0: $CallbackInfoReturnable$$Type): void
public "handler$boj000$vmod$vanishmod$onSendChatMessage"(arg0: $OutgoingChatMessage$$Type, arg1: boolean, arg2: $ChatType$Bound$$Type, arg3: $CallbackInfo$$Type): void
public "handler$zga000$quickrightclick$setRespawnPosition"(arg0: $ResourceKey$$Type, arg1: $BlockPos$$Type, arg2: float, arg3: boolean, arg4: boolean, arg5: $CallbackInfo$$Type): void
public "attack"(arg0: $Entity$$Type): void
public "die"(arg0: $DamageSource$$Type): void
public "displayClientMessage"(arg0: $Component$$Type, arg1: boolean): void
public "isTextFilteringEnabled"(): boolean
public "openMenu"(arg0: $MenuProvider$$Type): $OptionalInt
public "openMenu"(arg0: $MenuProvider$$Type, arg1: $Consumer$$Type<($RegistryFriendlyByteBuf)>): $OptionalInt
public "resetStat"(arg0: $Stat$$Type<(never)>): void
public "crit"(arg0: $Entity$$Type): void
public "magicCrit"(arg0: $Entity$$Type): void
public "isAdvancementDone"(id: $ResourceLocation$$Type): boolean
public "getSpawnLocation"(): $LevelBlock
public "captureInventory"(autoRestore: boolean): $Container
public "unlockAdvancement"(id: $ResourceLocation$$Type): void
public "openInventoryGUI"(inventory: $InventoryKJS$$Type, title: $Component$$Type, columns: integer, rows: integer): void
public "openInventoryGUI"(inventory: $InventoryKJS$$Type, title: $Component$$Type): void
public "openInventoryGUI"(inventory: $InventoryKJS$$Type, title: $Component$$Type, columns: integer): void
public "setCreativeMode"(mode: boolean): void
public "revokeAdvancement"(id: $ResourceLocation$$Type): void
public "setSpawnLocation"(c: $LevelBlock$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setSelectedSlot"(index: integer): void
public "openChestGUI"(title: $Component$$Type, rows: integer, gui: $Consumer$$Type<($ChestMenuData)>): void
public "openChestGUI"(gui: $Consumer$$Type<($KubeJSGUI)>): void
public "getStats"(): $PlayerStatsJS
public "isMiningBlock"(): boolean
public "setMouseItem"(item: $ItemStack$$Type): void
public "sendData"(channel: StringJS, data: $CompoundTag$$Type): void
public "ban"(banner: StringJS, reason: StringJS, expiresInMillis: long): void
public "heal"(): void
public "isOp"(): boolean
public "kick"(): void
public "kick"(reason: $Component$$Type): void
public "setActivePostShader"(id: $ResourceLocation$$Type): void
public "self"(): $Entity
public "notify"(builder: $NotificationToastData$$Type): void
public "northstar$getRelativeEntity"(): $Entity
public "northstar$setRelativeEntity"(entity: $Entity$$Type, ticks: integer): void
public "lithium$getCachedFeetBlockState"(): $BlockState
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "dataOf"(arg0: $ChangeSubscriber$$Type<(never)>, arg1: $ChangeSubscriber$$Type<(never)>, arg2: integer): integer
public static "combine"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: integer, arg2: $ChangeSubscriber$$Type<(T)>, arg3: integer): $ChangeSubscriber<(T)>
public static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>): $ChangeSubscriber<(T)>
public static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: boolean): $ChangeSubscriber<(T)>
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: integer, arg4: boolean): integer
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer): integer
public static "containsSubscriber"(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: integer, arg2: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg3: integer): boolean
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
get "creative"(): boolean
get "tabListDisplayName"(): $Component
set "raidOmenPosition"(value: $BlockPos$$Type)
set "xaero_OPAC_PlayerData"(value: $ServerPlayerDataAPI$$Type)
get "xaero_OPAC_PlayerData"(): $ServerPlayerDataAPI
get "raidOmenPosition"(): $BlockPos
set "chunkTrackingView"(value: $ChunkTrackingView$$Type)
get "chunkTrackingView"(): $ChunkTrackingView
get "language"(): StringJS
set "spawnExtraParticlesOnFall"(value: boolean)
get "wardenSpawnTracker"(): $Optional<($WardenSpawnTracker)>
get "camera"(): $Entity
set "camera"(value: $Entity$$Type)
set "experiencePoints"(value: integer)
set "experienceLevels"(value: integer)
get "respawnDimension"(): $ResourceKey<($Level)>
get "changingDimension"(): boolean
set "tabListHeader"(value: $Component$$Type)
get "respawnAngle"(): float
get "tabListFooter"(): $Component
get "lastActionTime"(): long
get "tabListHeader"(): $Component
get "respawnForced"(): boolean
get "ipAddress"(): StringJS
get "chatVisibility"(): $ChatVisiblity
set "lastSectionPos"(value: $SectionPos$$Type)
set "tabListFooter"(value: $Component$$Type)
get "lastSectionPos"(): $SectionPos
get "textFilter"(): $TextFilter
set "knownMovement"(value: $Vec3$$Type)
set "chatSession"(value: $RemoteChatSession$$Type)
get "chatSession"(): $RemoteChatSession
get "knownMovement"(): $Vec3
get "respawnPosition"(): $BlockPos
get "spectator"(): boolean
get "advancements"(): $PlayerAdvancements
get "statsCounter"(): $ServerStatsCounter
get "recipeBook"(): $ServerRecipeBook
get "textFilteringEnabled"(): boolean
get "spawnLocation"(): $LevelBlock
set "creativeMode"(value: boolean)
set "spawnLocation"(value: $LevelBlock$$Type)
set "selectedSlot"(value: integer)
get "stats"(): $PlayerStatsJS
get "miningBlock"(): boolean
set "mouseItem"(value: $ItemStack$$Type)
get "op"(): boolean
set "activePostShader"(value: $ResourceLocation$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayer$$Type = ($ServerPlayer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerPlayer$$Original = $ServerPlayer;}
declare module "net.minecraft.server.level.GenerationChunkHolder" {
import {$ChunkResult} from "net.minecraft.server.level.ChunkResult"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$List} from "java.util.List"
import {$ImposterProtoChunk$$Type} from "net.minecraft.world.level.chunk.ImposterProtoChunk"
import {$ChunkAccess} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$AtomicReferenceArray} from "java.util.concurrent.atomic.AtomicReferenceArray"
import {$ChunkStatus, $ChunkStatus$$Type} from "net.minecraft.world.level.chunk.status.ChunkStatus"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$ChunkMap$$Type} from "net.minecraft.server.level.ChunkMap"
import {$FullChunkStatus} from "net.minecraft.server.level.FullChunkStatus"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$GenerationChunkHolderAccessor$$Interface} from "net.caffeinemc.mods.lithium.mixin.world.chunk_access.GenerationChunkHolderAccessor"
import {$LevelChunk} from "net.minecraft.world.level.chunk.LevelChunk"

export class $GenerationChunkHolder implements $GenerationChunkHolderAccessor$$Interface {
 "currentlyLoading": $LevelChunk
static readonly "UNLOADED_CHUNK": $ChunkResult<($ChunkAccess)>
static readonly "UNLOADED_CHUNK_FUTURE": $CompletableFuture<($ChunkResult<($ChunkAccess)>)>

constructor(arg0: $ChunkPos$$Type)

public "getPersistedStatus"(): $ChunkStatus
public "getPos"(): $ChunkPos
public "scheduleChunkGenerationTask"(arg0: $ChunkStatus$$Type, arg1: $ChunkMap$$Type): $CompletableFuture<($ChunkResult<($ChunkAccess)>)>
public "lithium$getChunkFuturesByStatus"(): $AtomicReferenceArray
public "getFullStatus"(): $FullChunkStatus
public "getTicketLevel"(): integer
public "replaceProtoChunk"(arg0: $ImposterProtoChunk$$Type): void
public "getChunkIfPresent"(arg0: $ChunkStatus$$Type): $ChunkAccess
public "invokeCannotBeLoaded"(arg0: $ChunkStatus$$Type): boolean
public "getChunkIfPresentUnchecked"(arg0: $ChunkStatus$$Type): $ChunkAccess
public "getLatestChunk"(): $ChunkAccess
public "getLatestStatus"(): $ChunkStatus
public "getAllFutures"(): $List<($Pair<($ChunkStatus), ($CompletableFuture<($ChunkResult<($ChunkAccess)>)>)>)>
public "getQueueLevel"(): integer
public "increaseGenerationRefCount"(): void
public "getGenerationRefCount"(): integer
public "decreaseGenerationRefCount"(): void
get "persistedStatus"(): $ChunkStatus
get "pos"(): $ChunkPos
get "fullStatus"(): $FullChunkStatus
get "ticketLevel"(): integer
get "latestChunk"(): $ChunkAccess
get "latestStatus"(): $ChunkStatus
get "allFutures"(): $List<($Pair<($ChunkStatus), ($CompletableFuture<($ChunkResult<($ChunkAccess)>)>)>)>
get "queueLevel"(): integer
get "generationRefCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenerationChunkHolder$$Type = ($GenerationChunkHolder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GenerationChunkHolder$$Original = $GenerationChunkHolder;}
declare module "net.minecraft.server.level.GeneratingChunkMap" {
import {$ChunkStep$$Type} from "net.minecraft.world.level.chunk.status.ChunkStep"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$ChunkAccess} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$StaticCache2D$$Type} from "net.minecraft.util.StaticCache2D"
import {$ChunkGenerationTask} from "net.minecraft.server.level.ChunkGenerationTask"
import {$ChunkStatus$$Type} from "net.minecraft.world.level.chunk.status.ChunkStatus"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$GenerationChunkHolder, $GenerationChunkHolder$$Type} from "net.minecraft.server.level.GenerationChunkHolder"

export interface $GeneratingChunkMap$$Interface {
}

export class $GeneratingChunkMap implements $GeneratingChunkMap$$Interface {
 "runGenerationTasks"(): void
 "releaseGeneration"(arg0: $GenerationChunkHolder$$Type): void
 "acquireGeneration"(arg0: long): $GenerationChunkHolder
 "applyStep"(arg0: $GenerationChunkHolder$$Type, arg1: $ChunkStep$$Type, arg2: $StaticCache2D$$Type<($GenerationChunkHolder$$Type)>): $CompletableFuture<($ChunkAccess)>
 "scheduleGenerationTask"(arg0: $ChunkStatus$$Type, arg1: $ChunkPos$$Type): $ChunkGenerationTask
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeneratingChunkMap$$Type = ($GeneratingChunkMap);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeneratingChunkMap$$Original = $GeneratingChunkMap;}
declare module "net.minecraft.server.level.progress.ChunkProgressListenerFactory" {
import {$ChunkProgressListener, $ChunkProgressListener$$Type} from "net.minecraft.server.level.progress.ChunkProgressListener"

export interface $ChunkProgressListenerFactory$$Interface {

(arg0: integer): $ChunkProgressListener$$Type
}

export class $ChunkProgressListenerFactory implements $ChunkProgressListenerFactory$$Interface {
 "create"(arg0: integer): $ChunkProgressListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkProgressListenerFactory$$Type = ((arg0: integer) => $ChunkProgressListener$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkProgressListenerFactory$$Original = $ChunkProgressListenerFactory;}
declare module "net.minecraft.server.level.ChunkMap$TrackedEntity" {
import {$List$$Type} from "java.util.List"
import {$ServerPlayerConnection} from "net.minecraft.server.network.ServerPlayerConnection"
import {$Set} from "java.util.Set"
import {$Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$EntityTrackerAccessor$$Interface} from "net.fabricmc.fabric.mixin.networking.accessor.EntityTrackerAccessor"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ChunkMapAccessor$TrackedEntityAccessor$$Interface} from "com.railwayteam.railways.neoforge.mixin.ChunkMapAccessor$TrackedEntityAccessor"
import {$ChunkMap$$Type} from "net.minecraft.server.level.ChunkMap"

export class $ChunkMap$TrackedEntity implements $ChunkMapAccessor$TrackedEntityAccessor$$Interface, $EntityTrackerAccessor$$Interface {
readonly "seenBy": $Set<($ServerPlayerConnection)>

constructor(arg0: $ChunkMap$$Type, arg1: $Entity$$Type, arg2: integer, arg3: integer, arg4: boolean)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "broadcast"(arg0: $Packet$$Type<(never)>): void
public "getPlayersTracking"(): $Set
public "broadcastAndSend"(arg0: $Packet$$Type<(never)>): void
public "removePlayer"(arg0: $ServerPlayer$$Type): void
public "getSeenBy"(): $Set
public "updatePlayers"(arg0: $List$$Type<($ServerPlayer$$Type)>): void
public "localvar$cff000$railways$securitycraft$modifyFlag"(arg0: boolean): boolean
public "updatePlayer"(arg0: $ServerPlayer$$Type): void
public "broadcastRemoved"(): void
get "playersTracking"(): $Set
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkMap$TrackedEntity$$Type = ($ChunkMap$TrackedEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkMap$TrackedEntity$$Original = $ChunkMap$TrackedEntity;}
declare module "net.minecraft.server.level.progress.ChunkProgressListener" {
import {$ChunkStatus$$Type} from "net.minecraft.world.level.chunk.status.ChunkStatus"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"

export interface $ChunkProgressListener$$Interface {
}

export class $ChunkProgressListener implements $ChunkProgressListener$$Interface {
 "start"(): void
 "stop"(): void
 "onStatusChange"(arg0: $ChunkPos$$Type, arg1: $ChunkStatus$$Type): void
 "updateSpawnPos"(arg0: $ChunkPos$$Type): void
static "calculateDiameter"(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkProgressListener$$Type = ($ChunkProgressListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkProgressListener$$Original = $ChunkProgressListener;}
declare module "net.minecraft.server.level.ChunkResult" {
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function$$Type} from "java.util.function.Function"
import {$Throwable} from "java.lang.Throwable"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $ChunkResult$$Interface<T> {
get "success"(): boolean
}

export class $ChunkResult<T> implements $ChunkResult$$Interface {
 "map"<R>(arg0: $Function$$Type<(T), (R)>): $ChunkResult<(R)>
static "of"<T>(arg0: T): $ChunkResult<(T)>
 "orElse"(arg0: T): T
static "orElse"<R>(arg0: $ChunkResult$$Type<(R)>, arg1: R): R
 "orElseThrow"<E extends $Throwable>(arg0: $Supplier$$Type<(E)>): T
static "error"<T>(arg0: $Supplier$$Type<(StringJS)>): $ChunkResult<(T)>
static "error"<T>(arg0: StringJS): $ChunkResult<(T)>
 "getError"(): StringJS
 "isSuccess"(): boolean
 "ifSuccess"(arg0: $Consumer$$Type<(T)>): $ChunkResult<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkResult$$Type<T> = ($ChunkResult<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkResult$$Original<T> = $ChunkResult<(T)>;}
declare module "net.minecraft.server.level.ServerBossEvent" {
import {$Collection} from "java.util.Collection"
import {$BossEvent$BossBarColor$$Type} from "net.minecraft.world.BossEvent$BossBarColor"
import {$BossEvent} from "net.minecraft.world.BossEvent"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BossEvent$BossBarOverlay$$Type} from "net.minecraft.world.BossEvent$BossBarOverlay"

export class $ServerBossEvent extends $BossEvent {
constructor(arg0: $Component$$Type, arg1: $BossEvent$BossBarColor$$Type, arg2: $BossEvent$BossBarOverlay$$Type)

public "removeAllPlayers"(): void
public "isVisible"(): boolean
public "setName"(arg0: $Component$$Type): void
public "setColor"(arg0: $BossEvent$BossBarColor$$Type): void
public "addPlayer"(arg0: $ServerPlayer$$Type): void
public "setDarkenScreen"(arg0: boolean): $BossEvent
public "getPlayers"(): $Collection<($ServerPlayer)>
public "setOverlay"(arg0: $BossEvent$BossBarOverlay$$Type): void
public "setVisible"(arg0: boolean): void
public "removePlayer"(arg0: $ServerPlayer$$Type): void
public "setProgress"(arg0: float): void
public "setPlayBossMusic"(arg0: boolean): $BossEvent
public "setCreateWorldFog"(arg0: boolean): $BossEvent
get "visible"(): boolean
set "name"(value: $Component$$Type)
set "color"(value: $BossEvent$BossBarColor$$Type)
set "darkenScreen"(value: boolean)
get "players"(): $Collection<($ServerPlayer)>
set "overlay"(value: $BossEvent$BossBarOverlay$$Type)
set "visible"(value: boolean)
set "progress"(value: float)
set "playBossMusic"(value: boolean)
set "createWorldFog"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerBossEvent$$Type = ($ServerBossEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerBossEvent$$Original = $ServerBossEvent;}
declare module "net.minecraft.server.level.ChunkTaskPriorityQueueSorter$Message" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ChunkTaskPriorityQueueSorter$Message<T> {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkTaskPriorityQueueSorter$Message$$Type<T> = ($ChunkTaskPriorityQueueSorter$Message<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkTaskPriorityQueueSorter$Message$$Original<T> = $ChunkTaskPriorityQueueSorter$Message<(T)>;}
declare module "net.minecraft.server.level.ServerEntity" {
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$PacketAndPayloadAcceptor$$Type} from "net.neoforged.neoforge.network.bundle.PacketAndPayloadAcceptor"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $ServerEntity {
static readonly "FORCED_POS_UPDATE_PERIOD": integer

constructor(arg0: $ServerLevel$$Type, arg1: $Entity$$Type, arg2: integer, arg3: boolean, arg4: $Consumer$$Type<($Packet<(never)>)>)

public "getLastSentYHeadRot"(): float
public "addPairing"(arg0: $ServerPlayer$$Type): void
public "getLastSentMovement"(): $Vec3
public "sendPairingData"(arg0: $ServerPlayer$$Type, arg1: $PacketAndPayloadAcceptor$$Type<($ClientGamePacketListener$$Type)>): void
public "getLastSentXRot"(): float
public "getPositionBase"(): $Vec3
public "getLastSentYRot"(): float
public "sendChanges"(): void
public "removePairing"(arg0: $ServerPlayer$$Type): void
get "lastSentYHeadRot"(): float
get "lastSentMovement"(): $Vec3
get "lastSentXRot"(): float
get "positionBase"(): $Vec3
get "lastSentYRot"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerEntity$$Type = ($ServerEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerEntity$$Original = $ServerEntity;}
declare module "net.minecraft.server.level.progress.StoringChunkProgressListener" {
import {$ChunkProgressListener$$Interface} from "net.minecraft.server.level.progress.ChunkProgressListener"
import {$ChunkStatus, $ChunkStatus$$Type} from "net.minecraft.world.level.chunk.status.ChunkStatus"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"

export class $StoringChunkProgressListener implements $ChunkProgressListener$$Interface {
public "start"(): void
public "stop"(): void
public static "create"(arg0: integer): $StoringChunkProgressListener
public "getStatus"(arg0: integer, arg1: integer): $ChunkStatus
public "getProgress"(): integer
public "getDiameter"(): integer
public "getFullDiameter"(): integer
public "onStatusChange"(arg0: $ChunkPos$$Type, arg1: $ChunkStatus$$Type): void
public "updateSpawnPos"(arg0: $ChunkPos$$Type): void
public static "createFromGameruleRadius"(arg0: integer): $StoringChunkProgressListener
public static "createCompleted"(): $StoringChunkProgressListener
public static "calculateDiameter"(arg0: integer): integer
get "progress"(): integer
get "diameter"(): integer
get "fullDiameter"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StoringChunkProgressListener$$Type = ($StoringChunkProgressListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StoringChunkProgressListener$$Original = $StoringChunkProgressListener;}
declare module "net.minecraft.server.level.ChunkGenerationTask" {
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$GeneratingChunkMap$$Type} from "net.minecraft.server.level.GeneratingChunkMap"
import {$ChunkStatus, $ChunkStatus$$Type} from "net.minecraft.world.level.chunk.status.ChunkStatus"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$GenerationChunkHolder} from "net.minecraft.server.level.GenerationChunkHolder"

export class $ChunkGenerationTask {
readonly "targetStatus": $ChunkStatus

public "getCenter"(): $GenerationChunkHolder
public static "create"(arg0: $GeneratingChunkMap$$Type, arg1: $ChunkStatus$$Type, arg2: $ChunkPos$$Type): $ChunkGenerationTask
public "runUntilWait"(): $CompletableFuture<(never)>
public "markForCancellation"(): void
get "center"(): $GenerationChunkHolder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkGenerationTask$$Type = ($ChunkGenerationTask);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkGenerationTask$$Original = $ChunkGenerationTask;}
declare module "net.minecraft.server.level.ChunkTrackingView" {
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $ChunkTrackingView$$Interface {
}

export class $ChunkTrackingView implements $ChunkTrackingView$$Interface {
static readonly "EMPTY": $ChunkTrackingView

static "of"(arg0: $ChunkPos$$Type, arg1: integer): $ChunkTrackingView
 "contains"(arg0: integer, arg1: integer, arg2: boolean): boolean
 "contains"(arg0: integer, arg1: integer): boolean
 "contains"(arg0: $ChunkPos$$Type): boolean
 "forEach"(arg0: $Consumer$$Type<($ChunkPos)>): void
static "difference"(arg0: $ChunkTrackingView$$Type, arg1: $ChunkTrackingView$$Type, arg2: $Consumer$$Type<($ChunkPos)>, arg3: $Consumer$$Type<($ChunkPos)>): void
static "isWithinDistance"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: boolean): boolean
static "isInViewDistance"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): boolean
 "isInViewDistance"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkTrackingView$$Type = ($ChunkTrackingView);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkTrackingView$$Original = $ChunkTrackingView;}
declare module "net.minecraft.server.level.ServerChunkCache$MainThreadExecutor" {
import {$BlockableEventLoop} from "net.minecraft.util.thread.BlockableEventLoop"
import {$Runnable} from "java.lang.Runnable"
import {$BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"
import {$ProcessorHandle} from "net.minecraft.util.thread.ProcessorHandle"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $ServerChunkCache$MainThreadExecutor extends $BlockableEventLoop<($Runnable)> {
public "managedBlock"(arg0: $BooleanSupplier$$Type): void
public "pollTask"(): boolean
public static "of"<Msg>(arg0: StringJS, arg1: $Consumer$$Type<(Msg)>): $ProcessorHandle<(Msg)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerChunkCache$MainThreadExecutor$$Type = ($ServerChunkCache$MainThreadExecutor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerChunkCache$MainThreadExecutor$$Original = $ServerChunkCache$MainThreadExecutor;}
declare module "net.minecraft.server.level.ChunkHolder" {
import {$LevelLightEngine$$Type} from "net.minecraft.world.level.lighting.LevelLightEngine"
import {$LightLayer$$Type} from "net.minecraft.world.level.LightLayer"
import {$LevelHeightAccessor$$Type} from "net.minecraft.world.level.LevelHeightAccessor"
import {$ChunkResult} from "net.minecraft.server.level.ChunkResult"
import {$ChunkAccess} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$ChunkHolder$LevelChangeListener$$Type} from "net.minecraft.server.level.ChunkHolder$LevelChangeListener"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$ChunkHolderExtended$$Interface} from "net.caffeinemc.mods.lithium.common.world.chunk.ChunkHolderExtended"
import {$LevelChunk, $LevelChunk$$Type} from "net.minecraft.world.level.chunk.LevelChunk"
import {$ChunkHolder$PlayerProvider$$Type} from "net.minecraft.server.level.ChunkHolder$PlayerProvider"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GenerationChunkHolder} from "net.minecraft.server.level.GenerationChunkHolder"

export class $ChunkHolder extends $GenerationChunkHolder implements $ChunkHolderExtended$$Interface {
 "currentlyLoading": $LevelChunk
static readonly "UNLOADED_CHUNK": $ChunkResult<($ChunkAccess)>
static readonly "UNLOADED_LEVEL_CHUNK": $ChunkResult<($LevelChunk)>
static readonly "UNLOADED_CHUNK_FUTURE": $CompletableFuture<($ChunkResult<($ChunkAccess)>)>

constructor(arg0: $ChunkPos$$Type, arg1: integer, arg2: $LevelHeightAccessor$$Type, arg3: $LevelLightEngine$$Type, arg4: $ChunkHolder$LevelChangeListener$$Type, arg5: $ChunkHolder$PlayerProvider$$Type)

public "broadcastChanges"(arg0: $LevelChunk$$Type): void
public "lithium$updateLastAccessTime"(arg0: long): boolean
public "blockChanged"(arg0: $BlockPos$$Type): void
public "getTicketLevel"(): integer
public "getTickingChunk"(): $LevelChunk
public "getFullChunkFuture"(): $CompletableFuture<($ChunkResult<($LevelChunk)>)>
public "getTickingChunkFuture"(): $CompletableFuture<($ChunkResult<($LevelChunk)>)>
public "sectionLightChanged"(arg0: $LightLayer$$Type, arg1: integer): void
public "setTicketLevel"(arg0: integer): void
public "getSendSyncFuture"(): $CompletableFuture<(never)>
public "getSaveSyncFuture"(): $CompletableFuture<(never)>
public "isReadyForSaving"(): boolean
public "getChunkToSend"(): $LevelChunk
public "getQueueLevel"(): integer
public "addSendDependency"(arg0: $CompletableFuture$$Type<(never)>): void
public "getEntityTickingChunkFuture"(): $CompletableFuture<($ChunkResult<($LevelChunk)>)>
public "refreshAccessibility"(): void
public "wasAccessibleSinceLastSave"(): boolean
get "ticketLevel"(): integer
get "tickingChunk"(): $LevelChunk
get "fullChunkFuture"(): $CompletableFuture<($ChunkResult<($LevelChunk)>)>
get "tickingChunkFuture"(): $CompletableFuture<($ChunkResult<($LevelChunk)>)>
set "ticketLevel"(value: integer)
get "sendSyncFuture"(): $CompletableFuture<(never)>
get "saveSyncFuture"(): $CompletableFuture<(never)>
get "readyForSaving"(): boolean
get "chunkToSend"(): $LevelChunk
get "queueLevel"(): integer
get "entityTickingChunkFuture"(): $CompletableFuture<($ChunkResult<($LevelChunk)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkHolder$$Type = ($ChunkHolder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkHolder$$Original = $ChunkHolder;}
declare module "net.minecraft.server.level.TicketType" {
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$ChunkPos} from "net.minecraft.world.level.ChunkPos"
import {$Unit} from "net.minecraft.util.Unit"

export class $TicketType<T> {
static readonly "PLAYER": $TicketType<($ChunkPos)>
static readonly "POST_TELEPORT": $TicketType<(integer)>
static readonly "DRAGON": $TicketType<($Unit)>
static readonly "START": $TicketType<($Unit)>
static readonly "FORCED": $TicketType<($ChunkPos)>
static readonly "UNKNOWN": $TicketType<($ChunkPos)>
static readonly "PORTAL": $TicketType<($BlockPos)>

public "toString"(): StringJS
public static "create"<T>(arg0: StringJS, arg1: $Comparator$$Type<(T)>): $TicketType<(T)>
public static "create"<T>(arg0: StringJS, arg1: $Comparator$$Type<(T)>, arg2: integer): $TicketType<(T)>
public "timeout"(): long
public "getComparator"(): $Comparator<(T)>
get "comparator"(): $Comparator<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TicketType$$Type<T> = ($TicketType<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TicketType$$Original<T> = $TicketType<(T)>;}
declare module "net.minecraft.server.level.ChunkMap" {
import {$Iterable} from "java.lang.Iterable"
import {$DimensionDataStorage$$Type} from "net.minecraft.world.level.storage.DimensionDataStorage"
import {$LevelStorageSource$LevelStorageAccess$$Type} from "net.minecraft.world.level.storage.LevelStorageSource$LevelStorageAccess"
import {$IllegalStateException$$Type} from "java.lang.IllegalStateException"
import {$ChunkResult} from "net.minecraft.server.level.ChunkResult"
import {$ChunkStep$$Type} from "net.minecraft.world.level.chunk.status.ChunkStep"
import {$Long2ObjectLinkedOpenHashMap} from "it.unimi.dsi.fastutil.longs.Long2ObjectLinkedOpenHashMap"
import {$List, $List$$Type} from "java.util.List"
import {$ChunkMapAccessor$$Interface} from "com.railwayteam.railways.neoforge.mixin.ChunkMapAccessor"
import {$ChunkAccess, $ChunkAccess$$Type} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$LightChunkGetter$$Type} from "net.minecraft.world.level.chunk.LightChunkGetter"
import {$StructureTemplateManager$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager"
import {$DataFixer$$Type} from "com.mojang.datafixers.DataFixer"
import {$ChunkMap$TrackedEntity} from "net.minecraft.server.level.ChunkMap$TrackedEntity"
import {$ChunkTaskPriorityQueueSorter$Message$$Type} from "net.minecraft.server.level.ChunkTaskPriorityQueueSorter$Message"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$ChunkStorage} from "net.minecraft.world.level.chunk.storage.ChunkStorage"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ObjectIterator} from "it.unimi.dsi.fastutil.objects.ObjectIterator"
import {$ServerChunkLoadingManagerAccessor$$Interface} from "net.fabricmc.fabric.mixin.networking.accessor.ServerChunkLoadingManagerAccessor"
import {$ChunkGenerationTask} from "net.minecraft.server.level.ChunkGenerationTask"
import {$StaticCache2D$$Type} from "net.minecraft.util.StaticCache2D"
import {$ChunkStatus$$Type} from "net.minecraft.world.level.chunk.status.ChunkStatus"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$DistanceManager} from "net.minecraft.server.level.DistanceManager"
import {$ObjectCollection$$Type} from "it.unimi.dsi.fastutil.objects.ObjectCollection"
import {$ChunkHolder, $ChunkHolder$$Type} from "net.minecraft.server.level.ChunkHolder"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$ChunkGenerator$$Type} from "net.minecraft.world.level.chunk.ChunkGenerator"
import {$BlockableEventLoop$$Type} from "net.minecraft.util.thread.BlockableEventLoop"
import {$LevelChunk} from "net.minecraft.world.level.chunk.LevelChunk"
import {$GeneratingChunkMap$$Interface} from "net.minecraft.server.level.GeneratingChunkMap"
import {$ChunkStatusUpdateListener$$Type} from "net.minecraft.world.level.entity.ChunkStatusUpdateListener"
import {$ChunkHolder$PlayerProvider$$Interface} from "net.minecraft.server.level.ChunkHolder$PlayerProvider"
import {$Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ReportedException} from "net.minecraft.ReportedException"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ChunkProgressListener$$Type} from "net.minecraft.server.level.progress.ChunkProgressListener"
import {$Int2ObjectMap} from "it.unimi.dsi.fastutil.ints.Int2ObjectMap"
import {$GenerationChunkHolder, $GenerationChunkHolder$$Type} from "net.minecraft.server.level.GenerationChunkHolder"

export class $ChunkMap extends $ChunkStorage implements $ChunkHolder$PlayerProvider$$Interface, $GeneratingChunkMap$$Interface, $ChunkMapAccessor$$Interface, $ServerChunkLoadingManagerAccessor$$Interface {
readonly "entityMap": $Int2ObjectMap<($ChunkMap$TrackedEntity)>
readonly "level": $ServerLevel
readonly "updatingChunkMap": $Long2ObjectLinkedOpenHashMap<($ChunkHolder)>
static readonly "MIN_VIEW_DISTANCE": integer
 "visibleChunkMap": $Long2ObjectLinkedOpenHashMap<($ChunkHolder)>
static readonly "MAX_VIEW_DISTANCE": integer
static readonly "FORCED_TICKET_LEVEL": integer
static readonly "LAST_MONOLYTH_STRUCTURE_DATA_VERSION": integer
readonly "pendingUnloads": $Long2ObjectLinkedOpenHashMap<($ChunkHolder)>

constructor(arg0: $ServerLevel$$Type, arg1: $LevelStorageSource$LevelStorageAccess$$Type, arg2: $DataFixer$$Type, arg3: $StructureTemplateManager$$Type, arg4: $Executor$$Type, arg5: $BlockableEventLoop$$Type<($Runnable$$Type)>, arg6: $LightChunkGetter$$Type, arg7: $ChunkGenerator$$Type, arg8: $ChunkProgressListener$$Type, arg9: $ChunkStatusUpdateListener$$Type, arg10: $Supplier$$Type<($DimensionDataStorage$$Type)>, arg11: integer, arg12: boolean)

public "size"(): integer
public "close"(): void
public "broadcast"(arg0: $Entity$$Type, arg1: $Packet$$Type<(never)>): void
public "move"(arg0: $ServerPlayer$$Type): void
public "resendBiomesForChunks"(arg0: $List$$Type<($ChunkAccess$$Type)>): void
public "hasWork"(): boolean
public "getPlayersWatching"(arg0: $Entity$$Type): $List<($ServerPlayer)>
public "getDistanceManager"(): $DistanceManager
public "getPlayers"(arg0: $ChunkPos$$Type, arg1: boolean): $List<($ServerPlayer)>
public "getChunks"(): $Iterable<($ChunkHolder)>
public "redirect$bid000$smoothchunk$smoothChunksaveChunks"(arg0: $ObjectCollection$$Type): $ObjectIterator
public "getTickingGenerated"(): integer
public "getStorageName"(): StringJS
public "runGenerationTasks"(): void
public "getChunkDebugData"(arg0: $ChunkPos$$Type): StringJS
public "debugFuturesAndCreateReportedException"(arg0: $IllegalStateException$$Type, arg1: StringJS): $ReportedException
public "waitForLightBeforeSending"(arg0: $ChunkPos$$Type, arg1: integer): void
public "getVisibleChunkIfPresent"(arg0: long): $ChunkHolder
public "releaseGeneration"(arg0: $GenerationChunkHolder$$Type): void
public "acquireGeneration"(arg0: long): $GenerationChunkHolder
public "getEntityMap"(): $Int2ObjectMap
public "getChunkToSend"(arg0: long): $LevelChunk
public "scheduleOnMainThreadMailbox"(arg0: $ChunkTaskPriorityQueueSorter$Message$$Type<($Runnable$$Type)>): void
public "applyStep"(arg0: $GenerationChunkHolder$$Type, arg1: $ChunkStep$$Type, arg2: $StaticCache2D$$Type<($GenerationChunkHolder$$Type)>): $CompletableFuture<($ChunkAccess)>
public "scheduleGenerationTask"(arg0: $ChunkStatus$$Type, arg1: $ChunkPos$$Type): $ChunkGenerationTask
public "prepareEntityTickingChunk"(arg0: $ChunkHolder$$Type): $CompletableFuture<($ChunkResult<($LevelChunk)>)>
public "prepareAccessibleChunk"(arg0: $ChunkHolder$$Type): $CompletableFuture<($ChunkResult<($LevelChunk)>)>
public "getPlayersCloseForSpawning"(arg0: $ChunkPos$$Type): $List<($ServerPlayer)>
public "prepareTickingChunk"(arg0: $ChunkHolder$$Type): $CompletableFuture<($ChunkResult<($LevelChunk)>)>
get "distanceManager"(): $DistanceManager
get "chunks"(): $Iterable<($ChunkHolder)>
get "tickingGenerated"(): integer
get "storageName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkMap$$Type = ($ChunkMap);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkMap$$Original = $ChunkMap;}
declare module "net.minecraft.server.level.DistanceManager" {
import {$SectionPos$$Type} from "net.minecraft.core.SectionPos"
import {$TicketType$$Type} from "net.minecraft.server.level.TicketType"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$ChunkMap$$Type} from "net.minecraft.server.level.ChunkMap"

export class $DistanceManager {
public "getDebugStatus"(): StringJS
public "removeRegionTicket"<T>(arg0: $TicketType$$Type<(T)>, arg1: $ChunkPos$$Type, arg2: integer, arg3: T, arg4: boolean): void
public "removeRegionTicket"<T>(arg0: $TicketType$$Type<(T)>, arg1: $ChunkPos$$Type, arg2: integer, arg3: T): void
public "inEntityTickingRange"(arg0: long): boolean
public "getNaturalSpawnChunkCount"(): integer
public "addPlayer"(arg0: $SectionPos$$Type, arg1: $ServerPlayer$$Type): void
public "inBlockTickingRange"(arg0: long): boolean
public "addRegionTicket"<T>(arg0: $TicketType$$Type<(T)>, arg1: $ChunkPos$$Type, arg2: integer, arg3: T, arg4: boolean): void
public "addRegionTicket"<T>(arg0: $TicketType$$Type<(T)>, arg1: $ChunkPos$$Type, arg2: integer, arg3: T): void
public "addTicket"<T>(arg0: $TicketType$$Type<(T)>, arg1: $ChunkPos$$Type, arg2: integer, arg3: T): void
public "removeTicketsOnClosing"(): void
public "removeTicket"<T>(arg0: $TicketType$$Type<(T)>, arg1: $ChunkPos$$Type, arg2: integer, arg3: T): void
public "removePlayer"(arg0: $SectionPos$$Type, arg1: $ServerPlayer$$Type): void
public "runAllUpdates"(arg0: $ChunkMap$$Type): boolean
public "shouldForceTicks"(arg0: long): boolean
public "updateSimulationDistance"(arg0: integer): void
public "hasPlayersNearby"(arg0: long): boolean
public "hasTickets"(): boolean
get "debugStatus"(): StringJS
get "naturalSpawnChunkCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DistanceManager$$Type = ($DistanceManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DistanceManager$$Original = $DistanceManager;}
declare module "net.minecraft.server.level.ServerPlayer$RespawnPosAngle" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Record} from "java.lang.Record"

export class $ServerPlayer$RespawnPosAngle extends $Record {
constructor(position: $Vec3$$Type, yaw: float)

public "yaw"(): float
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "position"(): $Vec3
public static "of"(arg0: $Vec3$$Type, arg1: $BlockPos$$Type): $ServerPlayer$RespawnPosAngle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayer$RespawnPosAngle$$Type = ({"position"?: $Vec3$$Type, "yaw"?: float}) | ([position?: $Vec3$$Type, yaw?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerPlayer$RespawnPosAngle$$Original = $ServerPlayer$RespawnPosAngle;}
declare module "net.minecraft.server.level.ServerPlayerGameMode" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$AccessorServerPlayerGameMode$$Interface} from "com.sk89q.worldedit.neoforge.mixin.AccessorServerPlayerGameMode"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$GameType, $GameType$$Type} from "net.minecraft.world.level.GameType"
import {$ServerboundPlayerActionPacket$Action$$Type} from "net.minecraft.network.protocol.game.ServerboundPlayerActionPacket$Action"

export class $ServerPlayerGameMode implements $AccessorServerPlayerGameMode$$Interface {
constructor(arg0: $ServerPlayer$$Type)

public "useItemOn"(arg0: $ServerPlayer$$Type, arg1: $Level$$Type, arg2: $ItemStack$$Type, arg3: $InteractionHand$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "isCreative"(): boolean
public "useItem"(arg0: $ServerPlayer$$Type, arg1: $Level$$Type, arg2: $ItemStack$$Type, arg3: $InteractionHand$$Type): $InteractionResult
public "getGameModeForPlayer"(): $GameType
public "changeGameModeForPlayer"(arg0: $GameType$$Type): boolean
public "tick"(): void
public "setLevel"(arg0: $ServerLevel$$Type): void
public "getPreviousGameModeForPlayer"(): $GameType
public "handleBlockBreakAction"(arg0: $BlockPos$$Type, arg1: $ServerboundPlayerActionPacket$Action$$Type, arg2: $Direction$$Type, arg3: integer, arg4: integer): void
public "isDestroyingBlock"(): boolean
public "destroyBlock"(arg0: $BlockPos$$Type): boolean
public "isSurvival"(): boolean
public "destroyAndAck"(arg0: $BlockPos$$Type, arg1: integer, arg2: StringJS): void
get "creative"(): boolean
get "gameModeForPlayer"(): $GameType
set "level"(value: $ServerLevel$$Type)
get "previousGameModeForPlayer"(): $GameType
get "destroyingBlock"(): boolean
get "survival"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayerGameMode$$Type = ($ServerPlayerGameMode);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerPlayerGameMode$$Original = $ServerPlayerGameMode;}
