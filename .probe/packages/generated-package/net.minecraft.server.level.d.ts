declare module "net.minecraft.server.level.Ticket" {
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$TicketType, $TicketType$$Type} from "net.minecraft.server.level.TicketType"

export class $Ticket<T> implements $Comparable$$Interface<($Ticket<(never)>)> {
 "createdTick": long

constructor(arg0: $TicketType$$Type<(T)>, arg1: integer, arg2: T)
constructor(arg0: $TicketType$$Type<(T)>, arg1: integer, arg2: T, arg3: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $Ticket$$Type<(never)>): integer
public "getType"(): $TicketType<(T)>
public "timedOut"(arg0: long): boolean
public "getTicketLevel"(): integer
public "setCreatedTick"(arg0: long): void
public "isForceTicks"(): boolean
get "type"(): $TicketType<(T)>
get "ticketLevel"(): integer
get "forceTicks"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Ticket$$Type<T> = ($Ticket<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Ticket$$Original<T> = $Ticket<(T)>;}
declare module "net.minecraft.server.level.ServerLevel" {
import {$PortalForcer} from "net.minecraft.world.level.portal.PortalForcer"
import {$ReputationEventType$$Type} from "net.minecraft.world.entity.ai.village.ReputationEventType"
import {$LevelStorageSource$LevelStorageAccess$$Type} from "net.minecraft.world.level.storage.LevelStorageSource$LevelStorageAccess"
import {$PathTypeCache} from "net.minecraft.world.level.pathfinder.PathTypeCache"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$Mob, $Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$StructureManager} from "net.minecraft.world.level.StructureManager"
import {$ExplosionDamageCalculator$$Type} from "net.minecraft.world.level.ExplosionDamageCalculator"
import {$NorthstarOxygen} from "com.lightning.northstar.world.oxygen.NorthstarOxygen"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$LevelTicks} from "net.minecraft.world.ticks.LevelTicks"
import {$IServerLevel$$Interface} from "org.embeddedt.modernfix.duck.IServerLevel"
import {$Stream$$Type} from "java.util.stream.Stream"
import {$LongCollection$$Type} from "it.unimi.dsi.fastutil.longs.LongCollection"
import {$TickRateManager} from "net.minecraft.world.TickRateManager"
import {$ArrayList} from "java.util.ArrayList"
import {$SafeBlockGetter} from "org.embeddedt.modernfix.chunk.SafeBlockGetter"
import {$ServerLevelAccessor$$Interface as $ServerLevelAccessor$0$$Interface} from "net.caffeinemc.mods.lithium.mixin.minimal_nonvanilla.spawning.ServerLevelAccessor"
import {$AttachmentChange$$Type} from "net.fabricmc.fabric.impl.attachment.sync.AttachmentChange"
import {$CrashReport$$Type} from "net.minecraft.CrashReport"
import {$Entity$RemovalReason$$Type} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$NorthstarLevel$$Interface} from "com.lightning.northstar.accessor.NorthstarLevel"
import {$LevelStem$$Type} from "net.minecraft.world.level.dimension.LevelStem"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$IWorldMapServerLevel$$Interface} from "xaero.map.core.IWorldMapServerLevel"
import {$Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$CustomSpawner$$Type} from "net.minecraft.world.level.CustomSpawner"
import {$ChunkProgressListener$$Type} from "net.minecraft.server.level.progress.ChunkProgressListener"
import {$CrashReportCategory} from "net.minecraft.CrashReportCategory"
import {$ServerLevelAccessor$$Interface as $ServerLevelAccessor$2$$Interface} from "net.caffeinemc.mods.lithium.mixin.util.entity_movement_tracking.ServerLevelAccessor"
import {$RegistryAccess} from "net.minecraft.core.RegistryAccess"
import {$PotionBrewing} from "net.minecraft.world.item.alchemy.PotionBrewing"
import {$ServerLevelAccessor$$Interface} from "com.simibubi.create.foundation.mixin.accessor.ServerLevelAccessor"
import {$DimensionDataStorage} from "net.minecraft.world.level.storage.DimensionDataStorage"
import {$FeatureFlagSet} from "net.minecraft.world.flag.FeatureFlagSet"
import {$BlockSnapshot} from "net.neoforged.neoforge.common.util.BlockSnapshot"
import {$ServerWorldExtended$$Interface} from "net.caffeinemc.mods.lithium.common.world.ServerWorldExtended"
import {$IntProvider} from "net.minecraft.util.valueproviders.IntProvider"
import {$StructureTemplateManager} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager"
import {$RandomSequences, $RandomSequences$$Type} from "net.minecraft.world.RandomSequences"
import {$ServerScoreboard} from "net.minecraft.server.ServerScoreboard"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
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
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$EntityTickList} from "net.minecraft.world.level.entity.EntityTickList"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$ICapabilityInvalidationListener$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityInvalidationListener"
import {$LinkManager} from "com.mrcrayfish.furniture.refurbished.electricity.LinkManager"
import {$ReputationEventHandler$$Type} from "net.minecraft.world.entity.ReputationEventHandler"
import {$SectionPos$$Type} from "net.minecraft.core.SectionPos"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$EntityGetter} from "net.minecraft.world.level.EntityGetter"
import {$Iterable} from "java.lang.Iterable"
import {$MapId, $MapId$$Type} from "net.minecraft.world.level.saveddata.maps.MapId"
import {$LevelHeightAccessor} from "net.minecraft.world.level.LevelHeightAccessor"
import {$ISafeBlockGetter$$Interface} from "org.embeddedt.modernfix.duck.ISafeBlockGetter"
import {$ChunkAccess, $ChunkAccess$$Type} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$BlockApiCacheImpl$$Type} from "net.fabricmc.fabric.impl.lookup.block.BlockApiCacheImpl"
import {$StrongholdLocationCache} from "org.embeddedt.modernfix.world.StrongholdLocationCache"
import {$PartEntity} from "net.neoforged.neoforge.entity.PartEntity"
import {$AttachmentType$$Type as $AttachmentType$0$$Type} from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import {$WritableLevelData} from "net.minecraft.world.level.storage.WritableLevelData"
import {$GameEvent$$Type} from "net.minecraft.world.level.gameevent.GameEvent"
import {$SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Raid} from "net.minecraft.world.entity.raid.Raid"
import {$EntityTypeTest$$Type} from "net.minecraft.world.level.entity.EntityTypeTest"
import {$Set} from "java.util.Set"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$MapItemSavedData, $MapItemSavedData$$Type} from "net.minecraft.world.level.saveddata.maps.MapItemSavedData"
import {$ServerChunkCache} from "net.minecraft.server.level.ServerChunkCache"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$RecipeManager} from "net.minecraft.world.item.crafting.RecipeManager"
import {$BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"
import {$PersistentEntitySectionManager} from "net.minecraft.world.level.entity.PersistentEntitySectionManager"
import {$ServerLevelAccessor$$Interface as $ServerLevelAccessor$1$$Interface} from "net.caffeinemc.mods.lithium.mixin.util.accessors.ServerLevelAccessor"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ServerLevelKJS$$Interface} from "dev.latvian.mods.kubejs.core.ServerLevelKJS"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$Fluid} from "net.minecraft.world.level.material.Fluid"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$LevelChunk$$Type} from "net.minecraft.world.level.chunk.LevelChunk"
import {$Path$$Type} from "java.nio.file.Path"
import {$EndDragonFight, $EndDragonFight$$Type} from "net.minecraft.world.level.dimension.end.EndDragonFight"
import {$Raids} from "net.minecraft.world.entity.raid.Raids"
import {$AttachmentTargetInfo} from "net.fabricmc.fabric.impl.attachment.sync.AttachmentTargetInfo"
import {$AttachmentTargetImpl$$Interface} from "net.fabricmc.fabric.impl.attachment.AttachmentTargetImpl"
import {$ServerWorldCapabilities, $ServerWorldCapabilities$$Type} from "xaero.map.capabilities.ServerWorldCapabilities"
import {$LongSet} from "it.unimi.dsi.fastutil.longs.LongSet"
import {$List, $List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ProgressListener$$Type} from "net.minecraft.util.ProgressListener"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$EnderDragon} from "net.minecraft.world.entity.boss.enderdragon.EnderDragon"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AttachmentType$$Type} from "net.neoforged.neoforge.attachment.AttachmentType"
import {$Collection} from "java.util.Collection"
import {$TickingBlockEntity} from "net.minecraft.world.level.block.entity.TickingBlockEntity"
import {$BoundingBox$$Type} from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$NeighborUpdater} from "net.minecraft.world.level.redstone.NeighborUpdater"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$Int2ObjectMap} from "it.unimi.dsi.fastutil.ints.Int2ObjectMap"
import {$ParticleOptions, $ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"
import {$PoiManager} from "net.minecraft.world.entity.ai.village.poi.PoiManager"

export class $ServerLevel extends $Level implements $WorldGenLevel$$Interface, $IServerLevel$$Interface, $ISafeBlockGetter$$Interface, $ServerWorldExtended$$Interface, $ServerLevelAccessor$0$$Interface, $ServerLevelAccessor$1$$Interface, $ServerLevelAccessor$2$$Interface, $IWorldMapServerLevel$$Interface, $AttachmentTargetImpl$$Interface, $ServerWorldCache$$Interface, $LinkManager$Access$$Interface, $ServerLevelKJS$$Interface, $ServerLevelAccessor$$Interface, $NorthstarLevel$$Interface {
 "restoringBlockSnapshots": boolean
readonly "neighborUpdater": $NeighborUpdater
static readonly "LONG_PARTICLE_CLIP_RANGE": integer
static readonly "RAIN_DELAY": $IntProvider
 "xaero_wm_capabilities": $ServerWorldCapabilities
 "randValue": integer
readonly "levelData": $WritableLevelData
 "thunderLevel": float
readonly "random": $RandomSource
 "capturedBlockSnapshots": $ArrayList<($BlockSnapshot)>
static readonly "MAX_ENTITY_SPAWN_Y": integer
static readonly "NETHER": $ResourceKey<($Level)>
 "navigatingMobs": $Set<($Mob)>
static readonly "MAX_BRIGHTNESS": integer
static readonly "SHORT_PARTICLE_CLIP_RANGE": integer
readonly "entityTickList": $EntityTickList
readonly "raids": $Raids
 "rainLevel": float
readonly "dragonParts": $Int2ObjectMap<($PartEntity<(never)>)>
 "oThunderLevel": float
static readonly "THUNDER_DURATION": $IntProvider
static readonly "RAIN_DURATION": $IntProvider
readonly "players": $List<($ServerPlayer)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "isUpdatingNavigations": boolean
readonly "addend": integer
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

public "northstar$queueBlockUpdates"(positions: $LongCollection$$Type): void
public "toString"(): StringJS
public "close"(): void
public "save"(arg0: $ProgressListener$$Type, arg1: boolean, arg2: boolean): void
public "unload"(arg0: $LevelChunk$$Type): void
public "tick"(arg0: $BooleanSupplier$$Type): void
public "getSeed"(): long
public "getLevel"(): $ServerLevel
public "tickChunk"(arg0: $LevelChunk$$Type, arg1: integer): void
public "getPlayers"(arg0: $Predicate$$Type<($ServerPlayer)>): $List<($ServerPlayer)>
public "getPlayers"(arg0: $Predicate$$Type<($ServerPlayer)>, arg1: integer): $List<($ServerPlayer)>
public "getDragons"(): $List<($EnderDragon)>
public "explode"(arg0: $Entity$$Type, arg1: $DamageSource$$Type, arg2: $ExplosionDamageCalculator$$Type, arg3: double, arg4: double, arg5: double, arg6: float, arg7: boolean, arg8: $Level$ExplosionInteraction$$Type, arg9: $ParticleOptions$$Type, arg10: $ParticleOptions$$Type, arg11: $Holder$$Type<($SoundEvent)>): $Explosion
public "getEntities"<T extends $Entity>(arg0: $EntityTypeTest$$Type<($Entity$$Type), (T)>, arg1: $Predicate$$Type<(T)>): $List<(T)>
public "getEntities"<T extends $Entity>(arg0: $EntityTypeTest$$Type<($Entity$$Type), (T)>, arg1: $Predicate$$Type<(T)>, arg2: $List$$Type<(T)>, arg3: integer): void
public "getEntities"<T extends $Entity>(arg0: $EntityTypeTest$$Type<($Entity$$Type), (T)>, arg1: $Predicate$$Type<(T)>, arg2: $List$$Type<(T)>): void
public "fabric_getSyncTargetInfo"(): $AttachmentTargetInfo
public "broadcastDamageEvent"(arg0: $Entity$$Type, arg1: $DamageSource$$Type): void
public "getPersistentData"(): $CompoundTag
public "updateSleepingPlayerList"(): void
public "fillReportDetails"(arg0: $CrashReport$$Type): $CrashReportCategory
public "getChunkSource"(): $ServerChunkCache
public "getRecipeManager"(): $RecipeManager
public "getStructureManager"(): $StructureTemplateManager
public "findLightningTargetAround"(arg0: $BlockPos$$Type): $BlockPos
public "setWeatherParameters"(arg0: integer, arg1: integer, arg2: boolean, arg3: boolean): void
public "addDuringTeleport"(arg0: $Entity$$Type): void
public "resetEmptyTime"(): void
public "fabric_syncChange"(arg0: $AttachmentType$0$$Type, arg1: $AttachmentSyncPayloadS2C$$Type): void
public "mayInteract"(arg0: $Player$$Type, arg1: $BlockPos$$Type): boolean
public "getDayTimeFraction"(): float
public "getDataStorage"(): $DimensionDataStorage
public "structureManager"(): $StructureManager
public "resetWeatherCycle"(): void
public "tickCustomSpawners"(arg0: boolean, arg1: boolean): void
/**
 * 
 * @deprecated
 */
public "setDragonFight"(arg0: $EndDragonFight$$Type): void
public "tryAddFreshEntityWithPassengers"(arg0: $Entity$$Type): boolean
public "redirect$elo000$observable$onTickLiquid"(state: $FluidState$$Type, level: $Level$$Type, pos: $BlockPos$$Type): void
public "handler$gja000$northstar$venusTickChunk"(chunk: $LevelChunk$$Type, randomTickSpeed: integer, info: $CallbackInfo$$Type): void
public "getEntityManager"(): $PersistentEntitySectionManager
public "getPathTypeCache"(): $PathTypeCache
public "areEntitiesLoaded"(arg0: long): boolean
public "getRandomSequences"(): $RandomSequences
public "observable$track"(entity: $Entity$$Type, consumer: $Consumer$$Type): void
public "getDragonFight"(): $EndDragonFight
public "startTickingChunk"(arg0: $LevelChunk$$Type): void
public "getRandomSequence"(arg0: $ResourceLocation$$Type): $RandomSource
public "getWatchdogStats"(): StringJS
public "getAllEntities"(): $Iterable<($Entity)>
public "findClosestBiome3d"(arg0: $Predicate$$Type<($Holder<($Biome)>)>, arg1: $BlockPos$$Type, arg2: integer, arg3: integer, arg4: integer): $Pair<($BlockPos), ($Holder<($Biome)>)>
public "getPortalForcer"(): $PortalForcer
public "clearBlockEvents"(arg0: $BoundingBox$$Type): void
public "getForcedChunks"(): $LongSet
public "addRespawnedPlayer"(arg0: $ServerPlayer$$Type): void
public "getPoiManager"(): $PoiManager
/**
 * 
 * @deprecated
 */
public "getEntityOrPart"(arg0: integer): $Entity
public "isCloseToVillage"(arg0: $BlockPos$$Type, arg1: integer): boolean
public "saveDebugReport"(arg0: $Path$$Type): void
public "getLogicalHeight"(): integer
public "setChunkForced"(arg0: integer, arg1: integer, arg2: boolean): boolean
public "tickPrecipitation"(arg0: $BlockPos$$Type): void
public "isHandlingTick"(): boolean
public "getRandomPlayer"(): $ServerPlayer
public "addNewPlayer"(arg0: $ServerPlayer$$Type): void
public "sectionsToVillage"(arg0: $SectionPos$$Type): integer
public "onReputationEvent"(arg0: $ReputationEventType$$Type, arg1: $Entity$$Type, arg2: $ReputationEventHandler$$Type): void
public "destroyBlockProgress"(arg0: integer, arg1: $BlockPos$$Type, arg2: integer): void
public "gatherChunkSourceStats"(): StringJS
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: $Block$$Type, arg3: $BlockPos$$Type, arg4: boolean): void
public "neighborChanged"(arg0: $BlockPos$$Type, arg1: $Block$$Type, arg2: $BlockPos$$Type): void
public "onBlockStateChange"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type, arg2: $BlockState$$Type): void
public "sendBlockUpdated"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type, arg2: $BlockState$$Type, arg3: integer): void
public "updateNeighborsAt"(arg0: $BlockPos$$Type, arg1: $Block$$Type): void
public "blockUpdated"(arg0: $BlockPos$$Type, arg1: $Block$$Type): void
public "shouldTickBlocksAt"(arg0: long): boolean
public "getEntity"(arg0: integer): $Entity
public "broadcastEntityEvent"(arg0: $Entity$$Type, arg1: byte): void
public "playSeededSound"(arg0: $Player$$Type, arg1: $Entity$$Type, arg2: $Holder$$Type<($SoundEvent)>, arg3: $SoundSource$$Type, arg4: float, arg5: float, arg6: long): void
public "playSeededSound"(arg0: $Player$$Type, arg1: double, arg2: double, arg3: double, arg4: $Holder$$Type<($SoundEvent)>, arg5: $SoundSource$$Type, arg6: float, arg7: float, arg8: long): void
public "getScoreboard"(): $ServerScoreboard
public "sendParticles"<T extends $ParticleOptions>(arg0: $ServerPlayer$$Type, arg1: T, arg2: boolean, arg3: double, arg4: double, arg5: double, arg6: integer, arg7: double, arg8: double, arg9: double, arg10: double): boolean
public "sendParticles"<T extends $ParticleOptions>(arg0: T, arg1: double, arg2: double, arg3: double, arg4: integer, arg5: double, arg6: double, arg7: double, arg8: double): integer
public "sendParticles"(arg0: $ServerPlayer$$Type, arg1: boolean, arg2: double, arg3: double, arg4: double, arg5: $Packet$$Type<(never)>): boolean
public "getPartEntities"(): $Collection<($PartEntity<(never)>)>
public "globalLevelEvent"(arg0: integer, arg1: $BlockPos$$Type, arg2: integer): void
public "setDayTimePerTick"(arg0: float): void
public "getDayTimePerTick"(): float
public "setDayTimeFraction"(arg0: float): void
public "potionBrewing"(): $PotionBrewing
public "getFreeMapId"(): $MapId
public "setMapData"(arg0: $MapId$$Type, arg1: $MapItemSavedData$$Type): void
public "blockEvent"(arg0: $BlockPos$$Type, arg1: $Block$$Type, arg2: integer, arg3: integer): void
public "getMapData"(arg0: $MapId$$Type): $MapItemSavedData
public "noSave"(): boolean
public "mfix$getSafeBlockGetter"(): $SafeBlockGetter
public "updateNeighborsAtExceptFromFacing"(arg0: $BlockPos$$Type, arg1: $Block$$Type, arg2: $Direction$$Type): void
public "levelEvent"(arg0: $Player$$Type, arg1: integer, arg2: $BlockPos$$Type, arg3: integer): void
public "addFreshEntity"(arg0: $Entity$$Type): boolean
public "getUncachedNoiseBiome"(arg0: integer, arg1: integer, arg2: integer): $Holder<($Biome)>
public "invalidateCapabilities"(arg0: $BlockPos$$Type): void
public "invalidateCapabilities"(arg0: $ChunkPos$$Type): void
public "setDayTime"(arg0: long): void
public "getShade"(arg0: $Direction$$Type, arg1: boolean): float
public "tickTime"(): void
public "enabledFeatures"(): $FeatureFlagSet
public "tickRateManager"(): $TickRateManager
public "canSleepThroughNights"(): boolean
public "removePlayerImmediately"(arg0: $ServerPlayer$$Type, arg1: $Entity$RemovalReason$$Type): void
public "getBlockTicks"(): $LevelTicks<($Block)>
public "getFluidTicks"(): $LevelTicks<($Fluid)>
public "tickNonPassenger"(arg0: $Entity$$Type): void
public "setDefaultSpawnPos"(arg0: $BlockPos$$Type, arg1: float): void
public "addWithUUID"(arg0: $Entity$$Type): boolean
public "syncData"(arg0: $AttachmentType$$Type<(never)>): void
public "getChunk"(arg0: integer, arg1: integer): $ChunkAccess
public "isPositionEntityTicking"(arg0: $BlockPos$$Type): boolean
public "getRaidAt"(arg0: $BlockPos$$Type): $Raid
public "isRaided"(arg0: $BlockPos$$Type): boolean
public "getRaids"(): $Raids
public "isVillage"(arg0: $SectionPos$$Type): boolean
public "isVillage"(arg0: $BlockPos$$Type): boolean
public "findNearestMapStructure"(arg0: $TagKey$$Type<($Structure)>, arg1: $BlockPos$$Type, arg2: integer, arg3: boolean): $BlockPos
public "addLegacyChunkEntities"(arg0: $Stream$$Type<($Entity$$Type)>): void
public "addWorldGenChunkEntities"(arg0: $Stream$$Type<($Entity$$Type)>): void
public "setXaero_wm_capabilities"(arg0: $ServerWorldCapabilities$$Type): void
public "create$getEntityTickList"(): $EntityTickList
public "mfix$getStrongholdCache"(): $StrongholdLocationCache
public "registerCapabilityListener"(arg0: $BlockPos$$Type, arg1: $ICapabilityInvalidationListener$$Type): void
public "isNaturalSpawningAllowed"(arg0: $BlockPos$$Type): boolean
public "isNaturalSpawningAllowed"(arg0: $ChunkPos$$Type): boolean
public "getXaero_wm_capabilities"(): $ServerWorldCapabilities
public "fabric_invalidateCache"(arg0: $BlockPos$$Type): void
public "fabric_registerCache"(arg0: $BlockPos$$Type, arg1: $BlockApiCacheImpl$$Type): void
public "onStructureStartsAvailable"(arg0: $ChunkAccess$$Type): void
public "fabric_getDynamicRegistryManager"(): $RegistryAccess
public "isFlat"(): boolean
public "lithium$setNavigationInactive"(arg0: $Mob$$Type): void
public "areEntityNavigationsConsistent"(): boolean
public "cleanCapabilityListenerReferences"(): void
public "lithium$setNavigationActive"(arg0: $Mob$$Type): void
public "redirect$elo000$observable$onTickBlock"(state: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, random: $RandomSource$$Type): void
public "refurbishedFurniture$GetLinkManager"(): $LinkManager
public "redirect$elo000$observable$onTickPassenger"(entity: $Entity$$Type): void
public "gameEvent"(arg0: $Holder$$Type<($GameEvent)>, arg1: $Vec3$$Type, arg2: $GameEvent$Context$$Type): void
public "getServer"(): $MinecraftServer
public "redirect$elo000$observable$onTickNonPassenger"(entity: $Entity$$Type): void
public "handler$cod000$immersive_melodies$immersiveMelodies$injectTickEntity"(arg0: $Entity$$Type, arg1: $CallbackInfo$$Type): void
public "handler$cod000$immersive_melodies$immersiveMelodies$injectTickPassenger"(arg0: $Entity$$Type, arg1: $Entity$$Type, arg2: $CallbackInfo$$Type): void
public "ensureCanWrite"(arg0: $BlockPos$$Type): boolean
public "setCurrentlyGenerating"(arg0: $Supplier$$Type<(StringJS)>): void
public "acknowledgeSyncedEntry"(arg0: $AttachmentType$0$$Type<(never)>, arg1: $AttachmentChange$$Type): void
public "fabric_shouldTryToSync"(): boolean
public "fabric_computeInitialSyncChanges"(arg0: $ServerPlayer$$Type, arg1: $Consumer$$Type<($AttachmentChange)>): void
public "spawnParticles"(options: $ParticleOptions$$Type, overrideLimiter: boolean, x: double, y: double, z: double, vx: double, vy: double, vz: double, count: integer, speed: double): void
public "self"(): $EntityGetter
public "northstar$temperature"(): $NorthstarTemperature
public "northstar$oxygen"(): $NorthstarOxygen
public "addFreshEntityWithPassengers"(arg0: $Entity$$Type): void
public static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
public "getHeight"(): integer
public "getMinBuildHeight"(): integer
public static "getAllLoadedEntities"(level: $Level$$Type): $Iterable<($Entity)>
public static "traverseBlocks"<T, C>(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: C, arg3: $BiFunction$$Type<(C), ($BlockPos), (T)>, arg4: $Function$$Type<(C), (T)>): T
get "seed"(): long
get "level"(): $ServerLevel
get "dragons"(): $List<($EnderDragon)>
get "persistentData"(): $CompoundTag
get "chunkSource"(): $ServerChunkCache
get "recipeManager"(): $RecipeManager
get "dayTimeFraction"(): float
get "dataStorage"(): $DimensionDataStorage
set "dragonFight"(value: $EndDragonFight$$Type)
get "pathTypeCache"(): $PathTypeCache
get "randomSequences"(): $RandomSequences
get "dragonFight"(): $EndDragonFight
get "watchdogStats"(): StringJS
get "allEntities"(): $Iterable<($Entity)>
get "portalForcer"(): $PortalForcer
get "forcedChunks"(): $LongSet
get "poiManager"(): $PoiManager
get "logicalHeight"(): integer
get "handlingTick"(): boolean
get "randomPlayer"(): $ServerPlayer
get "scoreboard"(): $ServerScoreboard
get "partEntities"(): $Collection<($PartEntity<(never)>)>
set "dayTimePerTick"(value: float)
get "dayTimePerTick"(): float
set "dayTimeFraction"(value: float)
get "freeMapId"(): $MapId
set "dayTime"(value: long)
get "blockTicks"(): $LevelTicks<($Block)>
get "fluidTicks"(): $LevelTicks<($Fluid)>
get "flat"(): boolean
get "server"(): $MinecraftServer
set "currentlyGenerating"(value: $Supplier$$Type<(StringJS)>)
get "height"(): integer
get "minBuildHeight"(): integer
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
declare module "net.minecraft.server.level.GenerationChunkHolder" {
import {$ChunkResult} from "net.minecraft.server.level.ChunkResult"
import {$ChunkStep$$Type} from "net.minecraft.world.level.chunk.status.ChunkStep"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$List} from "java.util.List"
import {$ImposterProtoChunk$$Type} from "net.minecraft.world.level.chunk.ImposterProtoChunk"
import {$ChunkAccess} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$AtomicReferenceArray} from "java.util.concurrent.atomic.AtomicReferenceArray"
import {$StaticCache2D$$Type} from "net.minecraft.util.StaticCache2D"
import {$ChunkGenerationTask$$Type} from "net.minecraft.server.level.ChunkGenerationTask"
import {$ChunkStatus, $ChunkStatus$$Type} from "net.minecraft.world.level.chunk.status.ChunkStatus"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$FullChunkStatus} from "net.minecraft.server.level.FullChunkStatus"
import {$ChunkMap$$Type} from "net.minecraft.server.level.ChunkMap"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$GenerationChunkHolderAccessor$$Interface} from "net.caffeinemc.mods.lithium.mixin.world.chunk_access.GenerationChunkHolderAccessor"
import {$GeneratingChunkMap$$Type} from "net.minecraft.server.level.GeneratingChunkMap"
import {$LevelChunk} from "net.minecraft.world.level.chunk.LevelChunk"

export class $GenerationChunkHolder implements $GenerationChunkHolderAccessor$$Interface {
 "currentlyLoading": $LevelChunk
readonly "pos": $ChunkPos
static readonly "UNLOADED_CHUNK": $ChunkResult<($ChunkAccess)>
static readonly "UNLOADED_CHUNK_FUTURE": $CompletableFuture<($ChunkResult<($ChunkAccess)>)>

constructor(arg0: $ChunkPos$$Type)

public "getChunkIfPresent"(arg0: $ChunkStatus$$Type): $ChunkAccess
public "getPos"(): $ChunkPos
public "scheduleChunkGenerationTask"(arg0: $ChunkStatus$$Type, arg1: $ChunkMap$$Type): $CompletableFuture<($ChunkResult<($ChunkAccess)>)>
public "lithium$getChunkFuturesByStatus"(): $AtomicReferenceArray
public "getFullStatus"(): $FullChunkStatus
public "getPersistedStatus"(): $ChunkStatus
public "getChunkIfPresentUnchecked"(arg0: $ChunkStatus$$Type): $ChunkAccess
public "invokeCannotBeLoaded"(arg0: $ChunkStatus$$Type): boolean
public "removeTask"(arg0: $ChunkGenerationTask$$Type): void
public "decreaseGenerationRefCount"(): void
public "getGenerationRefCount"(): integer
public "increaseGenerationRefCount"(): void
public "updateHighestAllowedStatus"(arg0: $ChunkMap$$Type): void
public "getTicketLevel"(): integer
public "replaceProtoChunk"(arg0: $ImposterProtoChunk$$Type): void
public "getLatestStatus"(): $ChunkStatus
public "getQueueLevel"(): integer
public "getAllFutures"(): $List<($Pair<($ChunkStatus), ($CompletableFuture<($ChunkResult<($ChunkAccess)>)>)>)>
public "getLatestChunk"(): $ChunkAccess
public "applyStep"(arg0: $ChunkStep$$Type, arg1: $GeneratingChunkMap$$Type, arg2: $StaticCache2D$$Type<($GenerationChunkHolder$$Type)>): $CompletableFuture<($ChunkResult<($ChunkAccess)>)>
get "fullStatus"(): $FullChunkStatus
get "persistedStatus"(): $ChunkStatus
get "generationRefCount"(): integer
get "ticketLevel"(): integer
get "latestStatus"(): $ChunkStatus
get "queueLevel"(): integer
get "allFutures"(): $List<($Pair<($ChunkStatus), ($CompletableFuture<($ChunkResult<($ChunkAccess)>)>)>)>
get "latestChunk"(): $ChunkAccess
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
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$ChunkStatus$$Type} from "net.minecraft.world.level.chunk.status.ChunkStatus"
import {$GenerationChunkHolder, $GenerationChunkHolder$$Type} from "net.minecraft.server.level.GenerationChunkHolder"

export interface $GeneratingChunkMap$$Interface {
}

export class $GeneratingChunkMap implements $GeneratingChunkMap$$Interface {
 "runGenerationTasks"(): void
 "scheduleGenerationTask"(arg0: $ChunkStatus$$Type, arg1: $ChunkPos$$Type): $ChunkGenerationTask
 "acquireGeneration"(arg0: long): $GenerationChunkHolder
 "releaseGeneration"(arg0: $GenerationChunkHolder$$Type): void
 "applyStep"(arg0: $GenerationChunkHolder$$Type, arg1: $ChunkStep$$Type, arg2: $StaticCache2D$$Type<($GenerationChunkHolder$$Type)>): $CompletableFuture<($ChunkAccess)>
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
declare module "net.minecraft.server.level.ChunkResult" {
import {$Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
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
 "ifSuccess"(arg0: $Consumer$$Type<(T)>): $ChunkResult<(T)>
 "isSuccess"(): boolean
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
declare module "net.minecraft.server.level.ServerEntity" {
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$PacketAndPayloadAcceptor$$Type} from "net.neoforged.neoforge.network.bundle.PacketAndPayloadAcceptor"
import {$Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $ServerEntity {
static readonly "FORCED_POS_UPDATE_PERIOD": integer

constructor(arg0: $ServerLevel$$Type, arg1: $Entity$$Type, arg2: integer, arg3: boolean, arg4: $Consumer$$Type<($Packet<(never)>)>)

public "getLastSentYHeadRot"(): float
public "addPairing"(arg0: $ServerPlayer$$Type): void
public "sendChanges"(): void
public "removePairing"(arg0: $ServerPlayer$$Type): void
public "getLastSentMovement"(): $Vec3
public "getPositionBase"(): $Vec3
public "getLastSentXRot"(): float
public "getLastSentYRot"(): float
public "sendPairingData"(arg0: $ServerPlayer$$Type, arg1: $PacketAndPayloadAcceptor$$Type<($ClientGamePacketListener$$Type)>): void
get "lastSentYHeadRot"(): float
get "lastSentMovement"(): $Vec3
get "positionBase"(): $Vec3
get "lastSentXRot"(): float
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
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$ChunkStatus, $ChunkStatus$$Type} from "net.minecraft.world.level.chunk.status.ChunkStatus"

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
import {$Thread} from "java.lang.Thread"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"
import {$ProcessorHandle} from "net.minecraft.util.thread.ProcessorHandle"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ServerChunkCache, $ServerChunkCache$$Type} from "net.minecraft.server.level.ServerChunkCache"

export class $ServerChunkCache$MainThreadExecutor extends $BlockableEventLoop<($Runnable)> {
readonly "this$0": $ServerChunkCache

constructor(arg0: $ServerChunkCache$$Type, arg1: $Level$$Type)

public "managedBlock"(arg0: $BooleanSupplier$$Type): void
public "pollTask"(): boolean
public "shouldRun"(arg0: $Runnable$$Type): boolean
public "getRunningThread"(): $Thread
public "wrapRunnable"(arg0: $Runnable$$Type): $Runnable
public "scheduleExecutables"(): boolean
public "doRunTask"(arg0: $Runnable$$Type): void
public static "of"<Msg>(arg0: StringJS, arg1: $Consumer$$Type<(Msg)>): $ProcessorHandle<(Msg)>
get "runningThread"(): $Thread
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
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$ChunkMap$$Type} from "net.minecraft.server.level.ChunkMap"
import {$ChunkHolder$LevelChangeListener$$Type} from "net.minecraft.server.level.ChunkHolder$LevelChangeListener"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$ChunkHolderExtended$$Interface} from "net.caffeinemc.mods.lithium.common.world.chunk.ChunkHolderExtended"
import {$LevelChunk, $LevelChunk$$Type} from "net.minecraft.world.level.chunk.LevelChunk"
import {$ChunkHolder$PlayerProvider$$Type} from "net.minecraft.server.level.ChunkHolder$PlayerProvider"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GenerationChunkHolder} from "net.minecraft.server.level.GenerationChunkHolder"

export class $ChunkHolder extends $GenerationChunkHolder implements $ChunkHolderExtended$$Interface {
 "currentlyLoading": $LevelChunk
readonly "pos": $ChunkPos
static readonly "UNLOADED_CHUNK": $ChunkResult<($ChunkAccess)>
static readonly "UNLOADED_LEVEL_CHUNK": $ChunkResult<($LevelChunk)>
static readonly "UNLOADED_CHUNK_FUTURE": $CompletableFuture<($ChunkResult<($ChunkAccess)>)>

constructor(arg0: $ChunkPos$$Type, arg1: integer, arg2: $LevelHeightAccessor$$Type, arg3: $LevelLightEngine$$Type, arg4: $ChunkHolder$LevelChangeListener$$Type, arg5: $ChunkHolder$PlayerProvider$$Type)

public "getFullChunkFuture"(): $CompletableFuture<($ChunkResult<($LevelChunk)>)>
public "getTickingChunk"(): $LevelChunk
public "lithium$updateLastAccessTime"(arg0: long): boolean
public "blockChanged"(arg0: $BlockPos$$Type): void
public "broadcastChanges"(arg0: $LevelChunk$$Type): void
public "getTickingChunkFuture"(): $CompletableFuture<($ChunkResult<($LevelChunk)>)>
public "sectionLightChanged"(arg0: $LightLayer$$Type, arg1: integer): void
public "refreshAccessibility"(): void
public "wasAccessibleSinceLastSave"(): boolean
public "getEntityTickingChunkFuture"(): $CompletableFuture<($ChunkResult<($LevelChunk)>)>
public "getTicketLevel"(): integer
public "addSendDependency"(arg0: $CompletableFuture$$Type<(never)>): void
public "getQueueLevel"(): integer
public "isReadyForSaving"(): boolean
public "getSaveSyncFuture"(): $CompletableFuture<(never)>
public "getChunkToSend"(): $LevelChunk
public "getSendSyncFuture"(): $CompletableFuture<(never)>
public "setTicketLevel"(arg0: integer): void
public "updateFutures"(arg0: $ChunkMap$$Type, arg1: $Executor$$Type): void
get "fullChunkFuture"(): $CompletableFuture<($ChunkResult<($LevelChunk)>)>
get "tickingChunk"(): $LevelChunk
get "tickingChunkFuture"(): $CompletableFuture<($ChunkResult<($LevelChunk)>)>
get "entityTickingChunkFuture"(): $CompletableFuture<($ChunkResult<($LevelChunk)>)>
get "ticketLevel"(): integer
get "queueLevel"(): integer
get "readyForSaving"(): boolean
get "saveSyncFuture"(): $CompletableFuture<(never)>
get "chunkToSend"(): $LevelChunk
get "sendSyncFuture"(): $CompletableFuture<(never)>
set "ticketLevel"(value: integer)
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
declare module "net.minecraft.server.level.ChunkMap" {
import {$Iterable} from "java.lang.Iterable"
import {$ChunkGeneratorStructureState} from "net.minecraft.world.level.chunk.ChunkGeneratorStructureState"
import {$IllegalStateException$$Type} from "java.lang.IllegalStateException"
import {$LevelStorageSource$LevelStorageAccess$$Type} from "net.minecraft.world.level.storage.LevelStorageSource$LevelStorageAccess"
import {$ChunkResult} from "net.minecraft.server.level.ChunkResult"
import {$Long2ObjectLinkedOpenHashMap} from "it.unimi.dsi.fastutil.longs.Long2ObjectLinkedOpenHashMap"
import {$ChunkAccess, $ChunkAccess$$Type} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$DataFixer, $DataFixer$$Type} from "com.mojang.datafixers.DataFixer"
import {$ChunkMap$TrackedEntity} from "net.minecraft.server.level.ChunkMap$TrackedEntity"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$ChunkStorage} from "net.minecraft.world.level.chunk.storage.ChunkStorage"
import {$ObjectIterator} from "it.unimi.dsi.fastutil.objects.ObjectIterator"
import {$RandomState} from "net.minecraft.world.level.levelgen.RandomState"
import {$ServerChunkLoadingManagerAccessor$$Interface} from "net.fabricmc.fabric.mixin.networking.accessor.ServerChunkLoadingManagerAccessor"
import {$ThreadedLevelLightEngine} from "net.minecraft.server.level.ThreadedLevelLightEngine"
import {$BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"
import {$StaticCache2D$$Type} from "net.minecraft.util.StaticCache2D"
import {$ChunkGenerationTask} from "net.minecraft.server.level.ChunkGenerationTask"
import {$ChunkStatus$$Type} from "net.minecraft.world.level.chunk.status.ChunkStatus"
import {$FullChunkStatus$$Type} from "net.minecraft.server.level.FullChunkStatus"
import {$ChunkGenerator, $ChunkGenerator$$Type} from "net.minecraft.world.level.chunk.ChunkGenerator"
import {$BlockableEventLoop, $BlockableEventLoop$$Type} from "net.minecraft.util.thread.BlockableEventLoop"
import {$ChunkStatusUpdateListener$$Type} from "net.minecraft.world.level.entity.ChunkStatusUpdateListener"
import {$LevelChunk} from "net.minecraft.world.level.chunk.LevelChunk"
import {$GeneratingChunkMap$$Interface} from "net.minecraft.server.level.GeneratingChunkMap"
import {$Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ChunkProgressListener$$Type} from "net.minecraft.server.level.progress.ChunkProgressListener"
import {$GenerationChunkHolder, $GenerationChunkHolder$$Type} from "net.minecraft.server.level.GenerationChunkHolder"
import {$DimensionDataStorage$$Type} from "net.minecraft.world.level.storage.DimensionDataStorage"
import {$ChunkStep$$Type} from "net.minecraft.world.level.chunk.status.ChunkStep"
import {$LongSet} from "it.unimi.dsi.fastutil.longs.LongSet"
import {$List, $List$$Type} from "java.util.List"
import {$ChunkMapAccessor$$Interface} from "com.railwayteam.railways.neoforge.mixin.ChunkMapAccessor"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$LightChunkGetter$$Type} from "net.minecraft.world.level.chunk.LightChunkGetter"
import {$StructureTemplateManager$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager"
import {$ChunkTaskPriorityQueueSorter$Message$$Type} from "net.minecraft.server.level.ChunkTaskPriorityQueueSorter$Message"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$IOWorker} from "net.minecraft.world.level.chunk.storage.IOWorker"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$IntSupplier} from "java.util.function.IntSupplier"
import {$DistanceManager} from "net.minecraft.server.level.DistanceManager"
import {$Writer$$Type} from "java.io.Writer"
import {$ObjectCollection$$Type} from "it.unimi.dsi.fastutil.objects.ObjectCollection"
import {$ChunkHolder, $ChunkHolder$$Type} from "net.minecraft.server.level.ChunkHolder"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$ChunkHolder$PlayerProvider$$Interface} from "net.minecraft.server.level.ChunkHolder$PlayerProvider"
import {$ReportedException} from "net.minecraft.ReportedException"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Int2ObjectMap} from "it.unimi.dsi.fastutil.ints.Int2ObjectMap"
import {$PoiManager} from "net.minecraft.world.entity.ai.village.poi.PoiManager"

export class $ChunkMap extends $ChunkStorage implements $ChunkHolder$PlayerProvider$$Interface, $GeneratingChunkMap$$Interface, $ChunkMapAccessor$$Interface, $ServerChunkLoadingManagerAccessor$$Interface {
readonly "fixerUpper": $DataFixer
readonly "entityMap": $Int2ObjectMap<($ChunkMap$TrackedEntity)>
 "toDrop": $LongSet
readonly "level": $ServerLevel
readonly "updatingChunkMap": $Long2ObjectLinkedOpenHashMap<($ChunkHolder)>
static readonly "MAX_VIEW_DISTANCE": integer
readonly "mainThreadExecutor": $BlockableEventLoop<($Runnable)>
static readonly "LAST_MONOLYTH_STRUCTURE_DATA_VERSION": integer
readonly "pendingUnloads": $Long2ObjectLinkedOpenHashMap<($ChunkHolder)>
static readonly "MIN_VIEW_DISTANCE": integer
 "visibleChunkMap": $Long2ObjectLinkedOpenHashMap<($ChunkHolder)>
static readonly "FORCED_TICKET_LEVEL": integer
readonly "worker": $IOWorker

constructor(arg0: $ServerLevel$$Type, arg1: $LevelStorageSource$LevelStorageAccess$$Type, arg2: $DataFixer$$Type, arg3: $StructureTemplateManager$$Type, arg4: $Executor$$Type, arg5: $BlockableEventLoop$$Type<($Runnable$$Type)>, arg6: $LightChunkGetter$$Type, arg7: $ChunkGenerator$$Type, arg8: $ChunkProgressListener$$Type, arg9: $ChunkStatusUpdateListener$$Type, arg10: $Supplier$$Type<($DimensionDataStorage$$Type)>, arg11: integer, arg12: boolean)

public "size"(): integer
public "close"(): void
public "generator"(): $ChunkGenerator
public "broadcast"(arg0: $Entity$$Type, arg1: $Packet$$Type<(never)>): void
public "move"(arg0: $ServerPlayer$$Type): void
public "tick"(arg0: $BooleanSupplier$$Type): void
public "tick"(): void
public "promoteChunkMap"(): boolean
public "runGenerationTasks"(): void
public "getChunkDebugData"(arg0: $ChunkPos$$Type): StringJS
public "getPlayers"(arg0: $ChunkPos$$Type, arg1: boolean): $List<($ServerPlayer)>
public "anyPlayerCloseEnoughForSpawning"(arg0: $ChunkPos$$Type): boolean
public "getChunks"(): $Iterable<($ChunkHolder)>
public "randomState"(): $RandomState
public "getDistanceManager"(): $DistanceManager
public "getPoiManager"(): $PoiManager
public "getLightEngine"(): $ThreadedLevelLightEngine
public "addEntity"(arg0: $Entity$$Type): void
public "removeEntity"(arg0: $Entity$$Type): void
public "dumpChunks"(arg0: $Writer$$Type): void
public "getTickingGenerated"(): integer
public "getStorageName"(): StringJS
public "saveAllChunks"(arg0: boolean): void
public "hasWork"(): boolean
public "resendBiomesForChunks"(arg0: $List$$Type<($ChunkAccess$$Type)>): void
public "broadcastAndSend"(arg0: $Entity$$Type, arg1: $Packet$$Type<(never)>): void
public "setServerViewDistance"(arg0: integer): void
public "getVisibleChunkIfPresent"(arg0: long): $ChunkHolder
public "getPlayersWatching"(arg0: $Entity$$Type): $List<($ServerPlayer)>
public "generatorState"(): $ChunkGeneratorStructureState
public "getPlayersCloseForSpawning"(arg0: $ChunkPos$$Type): $List<($ServerPlayer)>
public "scheduleGenerationTask"(arg0: $ChunkStatus$$Type, arg1: $ChunkPos$$Type): $ChunkGenerationTask
public "updateChunkScheduling"(arg0: long, arg1: integer, arg2: $ChunkHolder$$Type, arg3: integer): $ChunkHolder
public "getPlayerViewDistance"(arg0: $ServerPlayer$$Type): integer
public "prepareTickingChunk"(arg0: $ChunkHolder$$Type): $CompletableFuture<($ChunkResult<($LevelChunk)>)>
public "getUpdatingChunkIfPresent"(arg0: long): $ChunkHolder
public "prepareAccessibleChunk"(arg0: $ChunkHolder$$Type): $CompletableFuture<($ChunkResult<($LevelChunk)>)>
public "onFullChunkStatusChange"(arg0: $ChunkPos$$Type, arg1: $FullChunkStatus$$Type): void
public "prepareEntityTickingChunk"(arg0: $ChunkHolder$$Type): $CompletableFuture<($ChunkResult<($LevelChunk)>)>
public "scheduleOnMainThreadMailbox"(arg0: $ChunkTaskPriorityQueueSorter$Message$$Type<($Runnable$$Type)>): void
public "getChunkQueueLevel"(arg0: long): $IntSupplier
public "acquireGeneration"(arg0: long): $GenerationChunkHolder
public "isChunkTracked"(arg0: $ServerPlayer$$Type, arg1: integer, arg2: integer): boolean
public "releaseGeneration"(arg0: $GenerationChunkHolder$$Type): void
public "updatePlayerStatus"(arg0: $ServerPlayer$$Type, arg1: boolean): void
public "getEntityMap"(): $Int2ObjectMap
public "getChunkToSend"(arg0: long): $LevelChunk
public "debugFuturesAndCreateReportedException"(arg0: $IllegalStateException$$Type, arg1: StringJS): $ReportedException
public "waitForLightBeforeSending"(arg0: $ChunkPos$$Type, arg1: integer): void
public "applyStep"(arg0: $GenerationChunkHolder$$Type, arg1: $ChunkStep$$Type, arg2: $StaticCache2D$$Type<($GenerationChunkHolder$$Type)>): $CompletableFuture<($ChunkAccess)>
public "redirect$chj000$smoothchunk$smoothChunksaveChunks"(arg0: $ObjectCollection$$Type): $ObjectIterator
get "chunks"(): $Iterable<($ChunkHolder)>
get "distanceManager"(): $DistanceManager
get "poiManager"(): $PoiManager
get "lightEngine"(): $ThreadedLevelLightEngine
get "tickingGenerated"(): integer
get "storageName"(): StringJS
set "serverViewDistance"(value: integer)
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
declare module "net.minecraft.server.level.ServerPlayerGameMode" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$AccessorServerPlayerGameMode$$Interface} from "com.sk89q.worldedit.neoforge.mixin.AccessorServerPlayerGameMode"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameType, $GameType$$Type} from "net.minecraft.world.level.GameType"
import {$ServerboundPlayerActionPacket$Action$$Type} from "net.minecraft.network.protocol.game.ServerboundPlayerActionPacket$Action"

export class $ServerPlayerGameMode implements $AccessorServerPlayerGameMode$$Interface {
 "level": $ServerLevel
readonly "player": $ServerPlayer

constructor(arg0: $ServerPlayer$$Type)

public "tick"(): void
public "setLevel"(arg0: $ServerLevel$$Type): void
public "useItemOn"(arg0: $ServerPlayer$$Type, arg1: $Level$$Type, arg2: $ItemStack$$Type, arg3: $InteractionHand$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "useItem"(arg0: $ServerPlayer$$Type, arg1: $Level$$Type, arg2: $ItemStack$$Type, arg3: $InteractionHand$$Type): $InteractionResult
public "isCreative"(): boolean
public "isDestroyingBlock"(): boolean
public "destroyBlock"(arg0: $BlockPos$$Type): boolean
public "isSurvival"(): boolean
public "getPreviousGameModeForPlayer"(): $GameType
public "getGameModeForPlayer"(): $GameType
public "changeGameModeForPlayer"(arg0: $GameType$$Type): boolean
public "setGameModeForPlayer"(arg0: $GameType$$Type, arg1: $GameType$$Type): void
public "handleBlockBreakAction"(arg0: $BlockPos$$Type, arg1: $ServerboundPlayerActionPacket$Action$$Type, arg2: $Direction$$Type, arg3: integer, arg4: integer): void
public "destroyAndAck"(arg0: $BlockPos$$Type, arg1: integer, arg2: StringJS): void
get "creative"(): boolean
get "destroyingBlock"(): boolean
get "survival"(): boolean
get "previousGameModeForPlayer"(): $GameType
get "gameModeForPlayer"(): $GameType
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
declare module "net.minecraft.server.level.ClientInformation" {
import {$HumanoidArm, $HumanoidArm$$Type} from "net.minecraft.world.entity.HumanoidArm"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$ChatVisiblity, $ChatVisiblity$$Type} from "net.minecraft.world.entity.player.ChatVisiblity"
import {$Record} from "java.lang.Record"

export class $ClientInformation extends $Record {
static readonly "MAX_LANGUAGE_LENGTH": integer

constructor(arg0: StringJS, arg1: integer, arg2: $ChatVisiblity$$Type, arg3: boolean, arg4: integer, arg5: $HumanoidArm$$Type, arg6: boolean, arg7: boolean)
constructor(arg0: $FriendlyByteBuf$$Type)

public "textFilteringEnabled"(): boolean
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "write"(arg0: $FriendlyByteBuf$$Type): void
public "language"(): StringJS
public "chatVisibility"(): $ChatVisiblity
public "mainHand"(): $HumanoidArm
public "chatColors"(): boolean
public "modelCustomisation"(): integer
public "viewDistance"(): integer
public static "createDefault"(): $ClientInformation
public "allowsListing"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientInformation$$Type = ({"mainHand"?: $HumanoidArm$$Type, "textFilteringEnabled"?: boolean, "modelCustomisation"?: integer, "viewDistance"?: integer, "language"?: StringJS, "allowsListing"?: boolean, "chatVisibility"?: $ChatVisiblity$$Type, "chatColors"?: boolean}) | ([mainHand?: $HumanoidArm$$Type, textFilteringEnabled?: boolean, modelCustomisation?: integer, viewDistance?: integer, language?: StringJS, allowsListing?: boolean, chatVisibility?: $ChatVisiblity$$Type, chatColors?: boolean]);
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
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$EntityTypeTest$$Type} from "net.minecraft.world.level.entity.EntityTypeTest"
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
import {$Holder$Reference} from "net.minecraft.core.Holder$Reference"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ClipContext$$Type} from "net.minecraft.world.level.ClipContext"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$GenerationChunkHolder$$Type} from "net.minecraft.server.level.GenerationChunkHolder"
import {$EntityArrayList} from "dev.latvian.mods.kubejs.player.EntityArrayList"
import {$RegistryAccess} from "net.minecraft.core.RegistryAccess"
import {$FeatureFlagSet} from "net.minecraft.world.flag.FeatureFlagSet"
import {$ChunkStep$$Type} from "net.minecraft.world.level.chunk.status.ChunkStep"
import {$UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$ChunkSource} from "net.minecraft.world.level.chunk.ChunkSource"
import {$WorldBorder} from "net.minecraft.world.level.border.WorldBorder"
import {$TickPriority$$Type} from "net.minecraft.world.ticks.TickPriority"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$Class$$Type} from "java.lang.Class"
import {$TargetingConditions$$Type} from "net.minecraft.world.entity.ai.targeting.TargetingConditions"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ClipBlockStateContext$$Type} from "net.minecraft.world.level.ClipBlockStateContext"
import {$WorldGenLevel$$Interface} from "net.minecraft.world.level.WorldGenLevel"
import {$HolderLookup} from "net.minecraft.core.HolderLookup"
import {$LightLayer$$Type} from "net.minecraft.world.level.LightLayer"
import {$GameEvent$Context$$Type} from "net.minecraft.world.level.gameevent.GameEvent$Context"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$BlockGetter} from "net.minecraft.world.level.BlockGetter"
import {$LevelTickAccess} from "net.minecraft.world.ticks.LevelTickAccess"
import {$Heightmap$Types$$Type} from "net.minecraft.world.level.levelgen.Heightmap$Types"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$EntityGetter} from "net.minecraft.world.level.EntityGetter"
import {$DifficultyInstance} from "net.minecraft.world.DifficultyInstance"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MinecraftServer} from "net.minecraft.server.MinecraftServer"
import {$ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"
import {$DimensionType} from "net.minecraft.world.level.dimension.DimensionType"

export class $WorldGenRegion implements $WorldGenLevel$$Interface {
constructor(arg0: $ServerLevel$$Type, arg1: $StaticCache2D$$Type<($GenerationChunkHolder$$Type)>, arg2: $ChunkStep$$Type, arg3: $ChunkAccess$$Type)

public "getSeed"(): long
/**
 * 
 * @deprecated
 */
public "getLevel"(): $ServerLevel
public "isOldChunkAround"(arg0: $ChunkPos$$Type, arg1: integer): boolean
public "getFluidState"(arg0: $BlockPos$$Type): $FluidState
public "getEntities"<T extends $Entity>(arg0: $EntityTypeTest$$Type<($Entity$$Type), (T)>, arg1: $AABB$$Type, arg2: $Predicate$$Type<(T)>): $List<(T)>
public "getEntities"(arg0: $Entity$$Type, arg1: $AABB$$Type, arg2: $Predicate$$Type<($Entity)>): $List<($Entity)>
public "registryAccess"(): $RegistryAccess
public "getBlockEntity"(arg0: $BlockPos$$Type): $BlockEntity
public "getChunkSource"(): $ChunkSource
public "ensureCanWrite"(arg0: $BlockPos$$Type): boolean
public "getLightEngine"(): $LevelLightEngine
public "dimensionType"(): $DimensionType
public "getSeaLevel"(): integer
public "removeBlock"(arg0: $BlockPos$$Type, arg1: boolean): boolean
public "isClientSide"(): boolean
public "addParticle"(arg0: $ParticleOptions$$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double): void
public "nextSubTickCount"(): long
public "isStateAtPosition"(arg0: $BlockPos$$Type, arg1: $Predicate$$Type<($BlockState)>): boolean
public "getSkyDarken"(): integer
public "isFluidAtPosition"(arg0: $BlockPos$$Type, arg1: $Predicate$$Type<($FluidState)>): boolean
public "getRandom"(): $RandomSource
public "levelEvent"(arg0: $Player$$Type, arg1: integer, arg2: $BlockPos$$Type, arg3: integer): void
public "getCenter"(): $ChunkPos
public "getBlockState"(arg0: $BlockPos$$Type): $BlockState
public "addFreshEntity"(arg0: $Entity$$Type): boolean
public "getUncachedNoiseBiome"(arg0: integer, arg1: integer, arg2: integer): $Holder<($Biome)>
public "getShade"(arg0: $Direction$$Type, arg1: boolean): float
public "getLevelData"(): $LevelData
public "enabledFeatures"(): $FeatureFlagSet
public "getWorldBorder"(): $WorldBorder
public "setBlock"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type, arg2: integer, arg3: integer): boolean
public "getBiomeManager"(): $BiomeManager
public "getBlockTicks"(): $LevelTickAccess<($Block)>
public "getNearestPlayer"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: $Predicate$$Type<($Entity)>): $Player
public "getFluidTicks"(): $LevelTickAccess<($Fluid)>
public "destroyBlock"(arg0: $BlockPos$$Type, arg1: boolean, arg2: $Entity$$Type, arg3: integer): boolean
public "getChunk"(arg0: integer, arg1: integer, arg2: $ChunkStatus$$Type, arg3: boolean): $ChunkAccess
public "getChunk"(arg0: integer, arg1: integer): $ChunkAccess
public "getHeight"(): integer
public "getHeight"(arg0: $Heightmap$Types$$Type, arg1: integer, arg2: integer): integer
public "setCurrentlyGenerating"(arg0: $Supplier$$Type<(StringJS)>): void
public "localvar$zbf000$easyanvils$setBlock"(blockState: $BlockState$$Type): $BlockState
public "getCurrentDifficultyAt"(arg0: $BlockPos$$Type): $DifficultyInstance
public "gameEvent"(arg0: $Holder$$Type<($GameEvent)>, arg1: $Vec3$$Type, arg2: $GameEvent$Context$$Type): void
public "getServer"(): $MinecraftServer
public "playSound"(arg0: $Player$$Type, arg1: $BlockPos$$Type, arg2: $SoundEvent$$Type, arg3: $SoundSource$$Type, arg4: float, arg5: float): void
public "getMinBuildHeight"(): integer
public "hasChunk"(arg0: integer, arg1: integer): boolean
public "addFreshEntityWithPassengers"(arg0: $Entity$$Type): void
public "neighborShapeChanged"(arg0: $Direction$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type, arg4: integer, arg5: integer): void
public "blockUpdated"(arg0: $BlockPos$$Type, arg1: $Block$$Type): void
public "levelEvent"(arg0: integer, arg1: $BlockPos$$Type, arg2: integer): void
public "dayTime"(): long
public "scheduleTick"(arg0: $BlockPos$$Type, arg1: $Fluid$$Type, arg2: integer): void
public "scheduleTick"(arg0: $BlockPos$$Type, arg1: $Block$$Type, arg2: integer): void
public "scheduleTick"(arg0: $BlockPos$$Type, arg1: $Block$$Type, arg2: integer, arg3: $TickPriority$$Type): void
public "scheduleTick"(arg0: $BlockPos$$Type, arg1: $Fluid$$Type, arg2: integer, arg3: $TickPriority$$Type): void
public "gameEvent"(arg0: $Entity$$Type, arg1: $Holder$$Type<($GameEvent)>, arg2: $Vec3$$Type): void
public "gameEvent"(arg0: $Entity$$Type, arg1: $Holder$$Type<($GameEvent)>, arg2: $BlockPos$$Type): void
public "gameEvent"(arg0: $Holder$$Type<($GameEvent)>, arg1: $BlockPos$$Type, arg2: $GameEvent$Context$$Type): void
public "gameEvent"(arg0: $ResourceKey$$Type<($GameEvent)>, arg1: $BlockPos$$Type, arg2: $GameEvent$Context$$Type): void
public "playSound"(arg0: $Player$$Type, arg1: $BlockPos$$Type, arg2: $SoundEvent$$Type, arg3: $SoundSource$$Type): void
public "getDifficulty"(): $Difficulty
public "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$$Type, arg1: $BlockEntityType$$Type<(T)>): $Optional<(T)>
public "getHeightmapPos"(arg0: $Heightmap$Types$$Type, arg1: $BlockPos$$Type): $BlockPos
public "isUnobstructed"(arg0: $Entity$$Type, arg1: $VoxelShape$$Type): boolean
public "getEntityCollisions"(arg0: $Entity$$Type, arg1: $AABB$$Type): $List<($VoxelShape)>
public "getTimeOfDay"(arg0: float): float
public "getMoonBrightness"(): float
public "getMoonPhase"(): integer
public "getEntities"(arg0: $Entity$$Type, arg1: $AABB$$Type): $List<($Entity)>
public "getEntitiesOfClass"<T extends $Entity>(arg0: $Class$$Type<(T)>, arg1: $AABB$$Type): $List<(T)>
public "getEntitiesOfClass"<T extends $Entity>(arg0: $Class$$Type<(T)>, arg1: $AABB$$Type, arg2: $Predicate$$Type<(T)>): $List<(T)>
public "hasNearbyAlivePlayer"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "getNearestPlayer"(arg0: $TargetingConditions$$Type, arg1: double, arg2: double, arg3: double): $Player
public "getNearestPlayer"(arg0: $TargetingConditions$$Type, arg1: $LivingEntity$$Type, arg2: double, arg3: double, arg4: double): $Player
public "getNearestPlayer"(arg0: $TargetingConditions$$Type, arg1: $LivingEntity$$Type): $Player
public "getNearestPlayer"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: boolean): $Player
public "getNearestPlayer"(arg0: $Entity$$Type, arg1: double): $Player
public "getNearestEntity"<T extends $LivingEntity>(arg0: $Class$$Type<(T)>, arg1: $TargetingConditions$$Type, arg2: $LivingEntity$$Type, arg3: double, arg4: double, arg5: double, arg6: $AABB$$Type): T
public "getNearestEntity"<T extends $LivingEntity>(arg0: $List$$Type<(T)>, arg1: $TargetingConditions$$Type, arg2: $LivingEntity$$Type, arg3: double, arg4: double, arg5: double): T
public "getNearbyPlayers"(arg0: $TargetingConditions$$Type, arg1: $LivingEntity$$Type, arg2: $AABB$$Type): $List<($Player)>
public "getNearbyEntities"<T extends $LivingEntity>(arg0: $Class$$Type<(T)>, arg1: $TargetingConditions$$Type, arg2: $LivingEntity$$Type, arg3: $AABB$$Type): $List<(T)>
public "getPlayerByUUID"(arg0: $UUID$$Type): $Player
public "getBiome"(arg0: $BlockPos$$Type): $Holder<($Biome)>
public "getBlockStatesIfLoaded"(arg0: $AABB$$Type): $Stream<($BlockState)>
/**
 * 
 * @deprecated
 */
public "hasChunksAt"(arg0: $BlockPos$$Type, arg1: $BlockPos$$Type): boolean
/**
 * 
 * @deprecated
 */
public "hasChunksAt"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
/**
 * 
 * @deprecated
 */
public "hasChunksAt"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): boolean
public "lithium$getLoadedChunk"(arg0: integer, arg1: integer): $ChunkAccess
public "getChunkForCollisions"(arg0: integer, arg1: integer): $BlockGetter
public "canSeeSkyFromBelowWater"(arg0: $BlockPos$$Type): boolean
public "getMaxLocalRawBrightness"(arg0: $BlockPos$$Type, arg1: integer): integer
public "getMaxLocalRawBrightness"(arg0: $BlockPos$$Type): integer
public "isWaterAt"(arg0: $BlockPos$$Type): boolean
public "hasBiomes"(): boolean
public "getPathfindingCostFromLightLevels"(arg0: $BlockPos$$Type): float
public "isEmptyBlock"(arg0: $BlockPos$$Type): boolean
public "holderLookup"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $HolderLookup<(T)>
public "getBlockTint"(arg0: $BlockPos$$Type, arg1: $ColorResolver$$Type): integer
public "getNoiseBiome"(arg0: integer, arg1: integer, arg2: integer): $Holder<($Biome)>
public "getBiomeFabric"(arg0: $BlockPos$$Type): $Holder
public "getChunk"(arg0: $BlockPos$$Type): $ChunkAccess
public "getChunk"(arg0: integer, arg1: integer, arg2: $ChunkStatus$$Type): $ChunkAccess
/**
 * 
 * @deprecated
 */
public "getLightLevelDependentMagicValue"(arg0: $BlockPos$$Type): float
/**
 * 
 * @deprecated
 */
public "hasChunkAt"(arg0: integer, arg1: integer): boolean
/**
 * 
 * @deprecated
 */
public "hasChunkAt"(arg0: $BlockPos$$Type): boolean
public "containsAnyLiquid"(arg0: $AABB$$Type): boolean
public "getEntitiesWithin"(aabb: $AABB$$Type): $EntityArrayList
public "getMcEntities"(): $Iterable<($Entity)>
public "getPlayers"(): $EntityArrayList
public "getMcPlayers"(): $List<($Player)>
public "self"(): $EntityGetter
public "canSeeSky"(arg0: $BlockPos$$Type): boolean
public "getBrightness"(arg0: $LightLayer$$Type, arg1: $BlockPos$$Type): integer
public "getRawBrightness"(arg0: $BlockPos$$Type, arg1: integer): integer
public "collidesWithSuffocatingBlock"(arg0: $Entity$$Type, arg1: $AABB$$Type): boolean
public "findSupportingBlock"(arg0: $Entity$$Type, arg1: $AABB$$Type): $Optional<($BlockPos)>
public "getBlockCollisions"(arg0: $Entity$$Type, arg1: $AABB$$Type): $Iterable<($VoxelShape)>
public "findFreePosition"(arg0: $Entity$$Type, arg1: $VoxelShape$$Type, arg2: $Vec3$$Type, arg3: double, arg4: double, arg5: double): $Optional<($Vec3)>
public "isUnobstructed"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: $CollisionContext$$Type): boolean
public "isUnobstructed"(arg0: $Entity$$Type): boolean
public "getCollisions"(arg0: $Entity$$Type, arg1: $AABB$$Type): $Iterable<($VoxelShape)>
public "noCollision"(arg0: $Entity$$Type): boolean
public "noCollision"(arg0: $AABB$$Type): boolean
public "noCollision"(arg0: $Entity$$Type, arg1: $AABB$$Type): boolean
public "noBlockCollision"(arg0: $Entity$$Type, arg1: $AABB$$Type): boolean
public "getBestNeighborSignal"(arg0: $BlockPos$$Type): integer
public "getControlInputSignal"(arg0: $BlockPos$$Type, arg1: $Direction$$Type, arg2: boolean): integer
public "getSignal"(arg0: $BlockPos$$Type, arg1: $Direction$$Type): integer
public "hasSignal"(arg0: $BlockPos$$Type, arg1: $Direction$$Type): boolean
public "getDirectSignal"(arg0: $BlockPos$$Type, arg1: $Direction$$Type): integer
public "hasNeighborSignal"(arg0: $BlockPos$$Type): boolean
public "getDirectSignalTo"(arg0: $BlockPos$$Type): integer
public "holder"<T>(arg0: $ResourceKey$$Type<(T)>): $Optional<($Holder$Reference<(T)>)>
public "isAreaLoaded"(arg0: $BlockPos$$Type, arg1: integer): boolean
public "holderOrThrow"<T>(arg0: $ResourceKey$$Type<(T)>): $Holder<(T)>
/**
 * 
 * @deprecated
 */
public "getBlockEntityRenderAttachment"(arg0: $BlockPos$$Type): any
public "setBlock"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type, arg2: integer): boolean
public "destroyBlock"(arg0: $BlockPos$$Type, arg1: boolean): boolean
public "destroyBlock"(arg0: $BlockPos$$Type, arg1: boolean, arg2: $Entity$$Type): boolean
public "getEntityByNetworkID"(id: integer): $Entity
public "getEntityByUUID"(id: $UUID$$Type): $Entity
public "getEntities"(): $EntityArrayList
public "clipWithInteractionOverride"(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: $BlockPos$$Type, arg3: $VoxelShape$$Type, arg4: $BlockState$$Type): $BlockHitResult
public "getLightEmission"(arg0: $BlockPos$$Type): integer
public "clip"(arg0: $ClipContext$$Type): $BlockHitResult
public "getBlockFloorHeight"(arg0: $BlockPos$$Type): double
public "getBlockFloorHeight"(arg0: $VoxelShape$$Type, arg1: $Supplier$$Type<($VoxelShape$$Type)>): double
public "getBlockStates"(arg0: $AABB$$Type): $Stream<($BlockState)>
public "isBlockInLine"(arg0: $ClipBlockStateContext$$Type): $BlockHitResult
public "getMaxLightLevel"(): integer
public static "traverseBlocks"<T, C>(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: C, arg3: $BiFunction$$Type<(C), ($BlockPos), (T)>, arg4: $Function$$Type<(C), (T)>): T
public "getShade"(arg0: float, arg1: float, arg2: float, arg3: boolean): float
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
get "seed"(): long
get "level"(): $ServerLevel
get "chunkSource"(): $ChunkSource
get "lightEngine"(): $LevelLightEngine
get "seaLevel"(): integer
get "clientSide"(): boolean
get "skyDarken"(): integer
get "random"(): $RandomSource
get "center"(): $ChunkPos
get "levelData"(): $LevelData
get "worldBorder"(): $WorldBorder
get "biomeManager"(): $BiomeManager
get "blockTicks"(): $LevelTickAccess<($Block)>
get "fluidTicks"(): $LevelTickAccess<($Fluid)>
get "height"(): integer
set "currentlyGenerating"(value: $Supplier$$Type<(StringJS)>)
get "server"(): $MinecraftServer
get "minBuildHeight"(): integer
get "difficulty"(): $Difficulty
get "moonBrightness"(): float
get "moonPhase"(): integer
get "mcEntities"(): $Iterable<($Entity)>
get "players"(): $EntityArrayList
get "mcPlayers"(): $List<($Player)>
get "entities"(): $EntityArrayList
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
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LightLayer$$Type} from "net.minecraft.world.level.LightLayer"
import {$NaturalSpawner$SpawnState} from "net.minecraft.world.level.NaturalSpawner$SpawnState"
import {$RandomState} from "net.minecraft.world.level.levelgen.RandomState"
import {$Thread} from "java.lang.Thread"
import {$ThreadedLevelLightEngine} from "net.minecraft.server.level.ThreadedLevelLightEngine"
import {$BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$ChunkStatus$$Type} from "net.minecraft.world.level.chunk.status.ChunkStatus"
import {$ServerChunkCache$MainThreadExecutor} from "net.minecraft.server.level.ServerChunkCache$MainThreadExecutor"
import {$LightChunk} from "net.minecraft.world.level.chunk.LightChunk"
import {$DistanceManager} from "net.minecraft.server.level.DistanceManager"
import {$BlockGetter} from "net.minecraft.world.level.BlockGetter"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$ChunkGenerator, $ChunkGenerator$$Type} from "net.minecraft.world.level.chunk.ChunkGenerator"
import {$SectionPos$$Type} from "net.minecraft.core.SectionPos"
import {$ChunkStatusUpdateListener$$Type} from "net.minecraft.world.level.entity.ChunkStatusUpdateListener"
import {$LevelChunk} from "net.minecraft.world.level.chunk.LevelChunk"
import {$Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ChunkProgressListener$$Type} from "net.minecraft.server.level.progress.ChunkProgressListener"
import {$IServerChunkCacheExtension$$Interface} from "net.neoforged.neoforge.common.extensions.IServerChunkCacheExtension"
import {$PoiManager} from "net.minecraft.world.entity.ai.village.poi.PoiManager"

export class $ServerChunkCache extends $ChunkSource implements $IServerChunkCacheExtension$$Interface {
readonly "mainThread": $Thread
readonly "mainThreadProcessor": $ServerChunkCache$MainThreadExecutor
readonly "distanceManager": $DistanceManager
readonly "level": $ServerLevel
readonly "lightEngine": $ThreadedLevelLightEngine
readonly "chunkMap": $ChunkMap

constructor(arg0: $ServerLevel$$Type, arg1: $LevelStorageSource$LevelStorageAccess$$Type, arg2: $DataFixer$$Type, arg3: $StructureTemplateManager$$Type, arg4: $Executor$$Type, arg5: $ChunkGenerator$$Type, arg6: integer, arg7: integer, arg8: boolean, arg9: $ChunkProgressListener$$Type, arg10: $ChunkStatusUpdateListener$$Type, arg11: $Supplier$$Type<($DimensionDataStorage$$Type)>)

public "close"(): void
public "save"(arg0: boolean): void
public "broadcast"(arg0: $Entity$$Type, arg1: $Packet$$Type<(never)>): void
public "move"(arg0: $ServerPlayer$$Type): void
public "tick"(arg0: $BooleanSupplier$$Type, arg1: boolean): void
public "pollTask"(): boolean
public "getLevel"(): $BlockGetter
public "getChunkDebugData"(arg0: $ChunkPos$$Type): StringJS
public "getGenerator"(): $ChunkGenerator
public "addRegionTicket"<T>(arg0: $TicketType$$Type<(T)>, arg1: $ChunkPos$$Type, arg2: integer, arg3: T, arg4: boolean): void
public "addRegionTicket"<T>(arg0: $TicketType$$Type<(T)>, arg1: $ChunkPos$$Type, arg2: integer, arg3: T): void
public "getChunkNow"(arg0: integer, arg1: integer): $LevelChunk
public "randomState"(): $RandomState
public "getDataStorage"(): $DimensionDataStorage
public "chunkScanner"(): $ChunkScanAccess
public "getGeneratorState"(): $ChunkGeneratorStructureState
public "isPositionTicking"(arg0: long): boolean
public "getPoiManager"(): $PoiManager
public "updateChunkForced"(arg0: $ChunkPos$$Type, arg1: boolean): void
public "getLastSpawnState"(): $NaturalSpawner$SpawnState
public "removeRegionTicket"<T>(arg0: $TicketType$$Type<(T)>, arg1: $ChunkPos$$Type, arg2: integer, arg3: T, arg4: boolean): void
public "removeRegionTicket"<T>(arg0: $TicketType$$Type<(T)>, arg1: $ChunkPos$$Type, arg2: integer, arg3: T): void
public "getLightEngine"(): $ThreadedLevelLightEngine
public "setSpawnSettings"(arg0: boolean, arg1: boolean): void
public "gatherStats"(): StringJS
public "getChunkForLighting"(arg0: integer, arg1: integer): $LightChunk
public "addEntity"(arg0: $Entity$$Type): void
public "blockChanged"(arg0: $BlockPos$$Type): void
public "removeEntity"(arg0: $Entity$$Type): void
public "onLightUpdate"(arg0: $LightLayer$$Type, arg1: $SectionPos$$Type): void
public "getChunk"(arg0: integer, arg1: integer, arg2: $ChunkStatus$$Type, arg3: boolean): $ChunkAccess
public "getPendingTasksCount"(): integer
public "removeTicketsOnClosing"(): void
public "getTickingGenerated"(): integer
public "getChunkFuture"(arg0: integer, arg1: integer, arg2: $ChunkStatus$$Type, arg3: boolean): $CompletableFuture<($ChunkResult<($ChunkAccess)>)>
public "broadcastAndSend"(arg0: $Entity$$Type, arg1: $Packet$$Type<(never)>): void
public "runDistanceManagerUpdates"(): boolean
public "getLoadedChunksCount"(): integer
public "hasChunk"(arg0: integer, arg1: integer): boolean
public "setViewDistance"(arg0: integer): void
public "setSimulationDistance"(arg0: integer): void
public "handler$chm000$smoothchunk$onSaveALlChunks"(arg0: boolean, arg1: $CallbackInfo$$Type): void
public "handler$coc000$immersive_melodies$immersiveMelodies$injectServerChunkManagerInit"(arg0: $ServerLevel$$Type, arg1: $LevelStorageSource$LevelStorageAccess$$Type, arg2: $DataFixer$$Type, arg3: $StructureTemplateManager$$Type, arg4: $Executor$$Type, arg5: $ChunkGenerator$$Type, arg6: integer, arg7: integer, arg8: boolean, arg9: $ChunkProgressListener$$Type, arg10: $ChunkStatusUpdateListener$$Type, arg11: $Supplier$$Type, arg12: $CallbackInfo$$Type): void
public "self"(): $ServerChunkCache
public "broadcast"(arg0: $Entity$$Type, arg1: $CustomPacketPayload$$Type): void
public "broadcastAndSend"(arg0: $Entity$$Type, arg1: $CustomPacketPayload$$Type): void
get "generator"(): $ChunkGenerator
get "dataStorage"(): $DimensionDataStorage
get "generatorState"(): $ChunkGeneratorStructureState
get "poiManager"(): $PoiManager
get "lastSpawnState"(): $NaturalSpawner$SpawnState
get "pendingTasksCount"(): integer
get "tickingGenerated"(): integer
get "loadedChunksCount"(): integer
set "viewDistance"(value: integer)
set "simulationDistance"(value: integer)
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
declare module "net.minecraft.server.level.ServerPlayer" {
import {$HumanoidArm} from "net.minecraft.world.entity.HumanoidArm"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RemoteChatSession, $RemoteChatSession$$Type} from "net.minecraft.network.chat.RemoteChatSession"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$ServerGamePacketListenerImpl} from "net.minecraft.server.network.ServerGamePacketListenerImpl"
import {$NorthstarServerPlayer$$Interface} from "com.lightning.northstar.accessor.NorthstarServerPlayer"
import {$ServerPlayerKJS$$Interface} from "dev.latvian.mods.kubejs.core.ServerPlayerKJS"
import {$Either} from "com.mojang.datafixers.util.Either"
import {$ServerPlayerDataAPI, $ServerPlayerDataAPI$$Type} from "xaero.pac.common.server.player.data.api.ServerPlayerDataAPI"
import {$KubeJSGUI$$Type} from "dev.latvian.mods.kubejs.gui.KubeJSGUI"
import {$TextFilter} from "net.minecraft.server.network.TextFilter"
import {$ServerStatsCounter} from "net.minecraft.stats.ServerStatsCounter"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Entity$RemovalReason} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$ClientInformation, $ClientInformation$$Type} from "net.minecraft.server.level.ClientInformation"
import {$ItemCooldowns} from "net.minecraft.world.item.ItemCooldowns"
import {$RandomSource} from "net.minecraft.util.RandomSource"
import {$AbstractHorse$$Type} from "net.minecraft.world.entity.animal.horse.AbstractHorse"
import {$ServerRecipeBook} from "net.minecraft.stats.ServerRecipeBook"
import {$Unit} from "net.minecraft.util.Unit"
import {$MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$SynchedEntityData} from "net.minecraft.network.syncher.SynchedEntityData"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Pose} from "net.minecraft.world.entity.Pose"
import {$MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$DimensionTransition, $DimensionTransition$$Type} from "net.minecraft.world.level.portal.DimensionTransition"
import {$FishingHook} from "net.minecraft.world.entity.projectile.FishingHook"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ServerPlayerData as $ServerPlayerData$1, $ServerPlayerData$$Type as $ServerPlayerData$1$$Type} from "xaero.map.server.player.ServerPlayerData"
import {$IServerPlayer$$Interface as $IServerPlayer$0$$Interface} from "xaero.lib.common.player.IServerPlayer"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$LevelRenderer$$Type} from "net.minecraft.client.renderer.LevelRenderer"
import {$ChangeSubscriber, $ChangeSubscriber$$Type} from "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$PlayerStatsJS} from "dev.latvian.mods.kubejs.player.PlayerStatsJS"
import {$ChunkTrackingView, $ChunkTrackingView$$Type} from "net.minecraft.server.level.ChunkTrackingView"
import {$Team} from "net.minecraft.world.scores.Team"
import {$ServerPlayerAccessor$$Interface} from "com.railwayteam.railways.mixin.conductor_possession.ServerPlayerAccessor"
import {$ServerStatus$$Type} from "net.minecraft.network.protocol.status.ServerStatus"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$SectionPos, $SectionPos$$Type} from "net.minecraft.core.SectionPos"
import {$TagKey} from "net.minecraft.tags.TagKey"
import {$AtomicInteger} from "java.util.concurrent.atomic.AtomicInteger"
import {$Stack} from "java.util.Stack"
import {$ChatVisiblity} from "net.minecraft.world.entity.player.ChatVisiblity"
import {$NorthstarPlayer$$Interface} from "com.lightning.northstar.accessor.NorthstarPlayer"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$ChatType$Bound$$Type} from "net.minecraft.network.chat.ChatType$Bound"
import {$Iterable} from "java.lang.Iterable"
import {$CommonPlayerSpawnInfo} from "net.minecraft.network.protocol.game.CommonPlayerSpawnInfo"
import {$DimensionTransition$PostDimensionTransition$$Type} from "net.minecraft.world.level.portal.DimensionTransition$PostDimensionTransition"
import {$Brain} from "net.minecraft.world.entity.ai.Brain"
import {$Optional} from "java.util.Optional"
import {$ServerPlayerData, $ServerPlayerData$$Type} from "xaero.lib.common.player.ServerPlayerData"
import {$SignBlockEntity$$Type} from "net.minecraft.world.level.block.entity.SignBlockEntity"
import {$SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$IMixinServerPlayer$$Interface} from "loaderCommon.neoforge.com.seibel.distanthorizons.common.wrappers.misc.IMixinServerPlayer"
import {$Inventory} from "net.minecraft.world.entity.player.Inventory"
import {$Player$BedSleepingProblem} from "net.minecraft.world.entity.player.Player$BedSleepingProblem"
import {$CommandBlockEntity$$Type} from "net.minecraft.world.level.block.entity.CommandBlockEntity"
import {$ChestMenuData$$Type} from "dev.latvian.mods.kubejs.gui.chest.ChestMenuData"
import {$RelativeMovement$$Type} from "net.minecraft.world.entity.RelativeMovement"
import {$SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$EntityDataAccessor} from "net.minecraft.network.syncher.EntityDataAccessor"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Set$$Type} from "java.util.Set"
import {$FluidType} from "net.neoforged.neoforge.fluids.FluidType"
import {$IServerPlayer$$Interface} from "xaero.map.server.player.IServerPlayer"
import {$EntityType} from "net.minecraft.world.entity.EntityType"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$IOpenPACServerPlayer$$Interface} from "xaero.pac.common.server.player.data.IOpenPACServerPlayer"
import {$ServerPlayerData as $ServerPlayerData$0, $ServerPlayerData$$Type as $ServerPlayerData$0$$Type} from "xaero.common.server.player.ServerPlayerData"
import {$PlayerEnderChestContainer} from "net.minecraft.world.inventory.PlayerEnderChestContainer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$LevelBlock, $LevelBlock$$Type} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$Fluid} from "net.minecraft.world.level.material.Fluid"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Stat$$Type} from "net.minecraft.stats.Stat"
import {$RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$OptionalInt} from "java.util.OptionalInt"
import {$Object2DoubleMap} from "it.unimi.dsi.fastutil.objects.Object2DoubleMap"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$InventoryMenu} from "net.minecraft.world.inventory.InventoryMenu"
import {$PlayerAdvancements} from "net.minecraft.server.PlayerAdvancements"
import {$MerchantOffers$$Type} from "net.minecraft.world.item.trading.MerchantOffers"
import {$UUID} from "java.util.UUID"
import {$List$$Type} from "java.util.List"
import {$ServerPlayerGameMode} from "net.minecraft.server.level.ServerPlayerGameMode"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$WardenSpawnTracker} from "net.minecraft.world.entity.monster.warden.WardenSpawnTracker"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$FoodData} from "net.minecraft.world.food.FoodData"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Abilities} from "net.minecraft.world.entity.player.Abilities"
import {$OutgoingChatMessage$$Type} from "net.minecraft.network.chat.OutgoingChatMessage"
import {$DamageContainer} from "net.neoforged.neoforge.common.damagesource.DamageContainer"
import {$WalkAnimationState} from "net.minecraft.world.entity.WalkAnimationState"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$InventoryKJS$$Type} from "dev.latvian.mods.kubejs.core.InventoryKJS"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$GameType$$Type} from "net.minecraft.world.level.GameType"
import {$NotificationToastData$$Type} from "dev.latvian.mods.kubejs.util.NotificationToastData"
import {$IServerPlayer$$Interface as $IServerPlayer$1$$Interface} from "xaero.common.server.player.IServerPlayer"
import {$Collection$$Type} from "java.util.Collection"
import {$EntityDimensions} from "net.minecraft.world.entity.EntityDimensions"
import {$ItemEntity, $ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EntityAnchorArgument$Anchor$$Type} from "net.minecraft.commands.arguments.EntityAnchorArgument$Anchor"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"

export class $ServerPlayer extends $Player implements $IOpenPACServerPlayer$$Interface, $IServerPlayer$1$$Interface, $IServerPlayer$$Interface, $ServerPlayerAccessor$$Interface, $ServerPlayerKJS$$Interface, $IServerPlayer$0$$Interface, $IMixinServerPlayer$$Interface, $NorthstarPlayer$$Interface, $NorthstarServerPlayer$$Interface {
 "lerpYRot": double
static readonly "USE_ITEM_INTERVAL": integer
 "lerpYHeadRot": double
 "useItem": $ItemStack
 "jumpTriggerTime": integer
static readonly "DATA_LIVING_ENTITY_FLAGS": $EntityDataAccessor<(byte)>
 "yBodyRotO": float
 "removalReason": $Entity$RemovalReason
 "swingingArm": $InteractionHand
static readonly "CRAFTING_SLOT_OFFSET": integer
static readonly "ID_TAG": StringJS
static readonly "DATA_HEALTH_ID": $EntityDataAccessor<(float)>
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "boardingCooldown": integer
static readonly "DATA_POSE": $EntityDataAccessor<($Pose)>
 "walkDist": float
 "noCulling": boolean
readonly "gameMode": $ServerPlayerGameMode
 "appliedScale": float
readonly "object": any
 "forgeFluidTypeHeight": $Object2DoubleMap<($FluidType)>
static readonly "UUID_TAG": StringJS
static readonly "DEATH_DURATION": integer
 "portalProcess": $PortalProcessor
static readonly "DEFAULT_ENTITY_INTERACTION_RANGE": float
 "dead": boolean
 "verticalCollision": boolean
 "hurtDir": float
static readonly "DEFAULT_BABY_SCALE": float
static readonly "DEFAULT_BB_HEIGHT": float
 "seenCredits": boolean
 "flyDist": float
 "currentImpulseImpactPos": $Vec3
 "wasOnFire": boolean
 "autoSpinAttackTicks": integer
 "noActionTime": integer
static readonly "DATA_SHARED_FLAGS_ID": $EntityDataAccessor<(byte)>
 "wasTouchingWater": boolean
 "horizontalCollision": boolean
 "damageContainers": $Stack<($DamageContainer)>
static readonly "ARMOR_SLOT_OFFSET": integer
static readonly "SLEEP_DURATION": integer
 "yCloak": double
 "run": float
 "swingTime": integer
static readonly "BODY_ARMOR_OFFSET": integer
 "xCloak": double
 "stuckSpeedMultiplier": $Vec3
 "tickCount": integer
 "animStepO": float
 "sodiumdynamiclights$luminance": integer
static readonly "BOARDING_COOLDOWN": integer
static readonly "MAX_HEALTH": integer
static readonly "MIN_MOVEMENT_DISTANCE": double
static readonly "BASE_JUMP_POWER": float
static readonly "DEFAULT_EYE_HEIGHT": float
 "PLANET_GRAV": double
 "yRot": float
static readonly "CROUCH_BB_HEIGHT": float
 "moveDist": float
 "enchantmentSeed": integer
static readonly "FLAG_FALL_FLYING": integer
 "xOld": double
 "containerMenu": $AbstractContainerMenu
 "hurtTime": integer
 "swinging": boolean
 "attackStrengthTicker": integer
static readonly "DEFAULT_MAIN_HAND": $HumanoidArm
 "deathTime": integer
 "invulnerableTime": integer
 "wasUnderwater": boolean
 "fallDistance": float
static readonly "DEFAULT_VEHICLE_ATTACHMENT": $Vec3
readonly "inventory": $Inventory
readonly "random": $RandomSource
 "lerpSteps": integer
 "yOld": double
static readonly "HAND_SLOTS": integer
/**
 * 
 * @deprecated
 */
 "fluidHeight": $Object2DoubleMap<($TagKey<($Fluid)>)>
 "lerpXRot": double
 "removeArrowTime": integer
 "walkDistO": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "isInPowderSnow": boolean
 "animStep": float
 "blocksBuilding": boolean
 "takeXpDelay": integer
 "deathScore": integer
 "oBob": float
 "xo": double
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "lastHurtByPlayerTime": integer
 "autoSpinAttackItemStack": $ItemStack
static readonly "DEFAULT_BASE_GRAVITY": double
 "wasEyeInWater": boolean
 "hasImpulse": boolean
static readonly "ENTITY_COUNTER": $AtomicInteger
 "yHeadRot": float
 "yCloakO": double
 "noPhysics": boolean
 "fallFlyTicks": integer
 "autoSpinAttackDmg": float
 "yo": double
 "connection": $ServerGamePacketListenerImpl
static readonly "FLAG_ONFIRE": integer
 "zza": float
 "rotOffs": float
static readonly "INTERACTION_DISTANCE_VERIFICATION_BUFFER": double
static readonly "WAKE_UP_DURATION": integer
 "xRotO": float
 "zo": double
 "wonGame": boolean
 "lastHurt": float
readonly "walkAnimation": $WalkAnimationState
static readonly "STANDING_DIMENSIONS": $EntityDimensions
static readonly "DATA_PLAYER_MODE_CUSTOMISATION": $EntityDataAccessor<(byte)>
 "yya": float
readonly "server": $MinecraftServer
 "oAttackAnim": float
 "yHeadRotO": float
static readonly "DEFAULT_MODEL_CUSTOMIZATION": integer
 "hurtDuration": integer
 "updateClimbingMobCachingSectionOnChange": boolean
static readonly "SWIMMING_BB_HEIGHT": float
 "verticalCollisionBelow": boolean
 "experienceLevel": integer
 "eyeHeight": float
static readonly "ATTRIBUTES_FIELD": StringJS
static readonly "PERSISTED_NBT_TAG": StringJS
 "xxa": float
 "zCloak": double
 "lerpHeadSteps": integer
 "brain": $Brain<(never)>
static readonly "PASSENGERS_TAG": StringJS
 "stringUUID": StringJS
 "xCloakO": double
 "attackAnim": float
 "zOld": double
readonly "timeOffs": float
static readonly "LIVING_ENTITY_FLAG_SPIN_ATTACK": integer
 "entity": $LivingEntity
readonly "rotA": float
 "dimensions": $EntityDimensions
static readonly "ENDER_SLOT_OFFSET": integer
 "firstTick": boolean
static readonly "HELD_ITEM_SLOT": integer
 "uuid": $UUID
readonly "abilities": $Abilities
 "lastHurtByPlayer": $Player
static readonly "SWING_DURATION": integer
 "yRotO": float
static readonly "CONTENTS_SLOT_INDEX": integer
 "enderChestInventory": $PlayerEnderChestContainer
 "zCloakO": double
 "mainSupportingBlockPos": $Optional<($BlockPos)>
 "oRun": float
 "bob": float
 "experienceProgress": float
 "create_diesel_generators$turretPos": $BlockPos
 "totalExperience": integer
 "wasInPowderSnow": boolean
 "hurtMarked": boolean
 "useItemRemaining": integer
readonly "entityData": $SynchedEntityData
 "foodData": $FoodData
static readonly "SLEEPING_DIMENSIONS": $EntityDimensions
static readonly "DATA_PLAYER_MAIN_HAND": $EntityDataAccessor<(byte)>
static readonly "EQUIPMENT_SLOT_OFFSET": integer
readonly "defaultFlySpeed": float
 "jumping": boolean
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
readonly "inventoryMenu": $InventoryMenu
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "ARMOR_SLOTS": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "LIVING_ENTITY_FLAG_OFF_HAND": integer
static readonly "DATA_SHOULDER_LEFT": $EntityDataAccessor<($CompoundTag)>
static readonly "PLAYER_HURT_EXPERIENCE_TIME": integer
static readonly "DEFAULT_BB_WIDTH": float
 "minorHorizontalCollision": boolean
static readonly "LIVING_ENTITY_FLAG_IS_USING": integer
static readonly "EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT": float
 "lerpX": double
 "lerpZ": double
 "lerpY": double
 "fishing": $FishingHook
static readonly "SWIMMING_BB_WIDTH": float
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "yBodyRot": float
static readonly "DEFAULT_BLOCK_INTERACTION_RANGE": float
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "FLAG_GLOWING": integer
readonly "invulnerableDuration": integer
 "removeStingerTime": integer
static readonly "DATA_SHOULDER_RIGHT": $EntityDataAccessor<($CompoundTag)>
 "currentExplosionCause": $Entity

constructor(arg0: $MinecraftServer$$Type, arg1: $ServerLevel$$Type, arg2: $GameProfile$$Type, arg3: $ClientInformation$$Type)

public "drop"(arg0: boolean): boolean
public "drop"(arg0: $ItemStack$$Type, arg1: boolean, arg2: boolean): $ItemEntity
public "isChangingDimension"(): boolean
public "requestedViewDistance"(): integer
public "setExperiencePoints"(arg0: integer): void
public "setExperienceLevels"(arg0: integer): void
public "trackStartFallingPosition"(): void
public "getLanguage"(): StringJS
public "tick"(): void
public "take"(arg0: $Entity$$Type, arg1: integer): void
public "attack"(arg0: $Entity$$Type): void
public "die"(arg0: $DamageSource$$Type): void
public "setGameMode"(arg0: $GameType$$Type): boolean
public "setPlayerInput"(arg0: float, arg1: float, arg2: boolean, arg3: boolean): void
public "doCheckFallDamage"(arg0: double, arg1: double, arg2: double, arg3: boolean): void
public "setServerLevel"(arg0: $ServerLevel$$Type): void
public "hasDisconnected"(): boolean
public "resetSentInfo"(): void
public "findRespawnPositionAndUseSpawnBlock"(arg0: boolean, arg1: $DimensionTransition$PostDimensionTransition$$Type): $DimensionTransition
public "swing"(arg0: $InteractionHand$$Type): void
public "isCreative"(): boolean
public "disconnect"(): void
public "processPortalCooldown"(): void
public "adjustSpawnLocation"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type): $BlockPos
public "onEquippedItemBroken"(arg0: $Item$$Type, arg1: $EquipmentSlot$$Type): void
public "createItemCooldowns"(): $ItemCooldowns
public "getWardenSpawnTracker"(): $Optional<($WardenSpawnTracker)>
public "triggerRecipeCrafted"(arg0: $RecipeHolder$$Type<(never)>, arg1: $List$$Type<($ItemStack$$Type)>): void
public "giveExperiencePoints"(arg0: integer): void
public "onEnchantmentPerformed"(arg0: $ItemStack$$Type, arg1: integer): void
public "giveExperienceLevels"(arg0: integer): void
public "isSpectator"(): boolean
public "getAdvancements"(): $PlayerAdvancements
public "onInsideBlock"(arg0: $BlockState$$Type): void
public "startRiding"(arg0: $Entity$$Type, arg1: boolean): boolean
public "broadcastToPlayer"(arg0: $ServerPlayer$$Type): boolean
public "restoreFrom"(arg0: $ServerPlayer$$Type, arg1: boolean): void
public "teleportRelative"(arg0: double, arg1: double, arg2: double): void
public "onExplosionHit"(arg0: $Entity$$Type): void
public "getPermissionLevel"(): integer
public "mayInteract"(arg0: $Level$$Type, arg1: $BlockPos$$Type): boolean
public "getKnownMovement"(): $Vec3
public "serverLevel"(): $ServerLevel
public "stopSleepInBed"(arg0: boolean, arg1: boolean): void
public "playNotifySound"(arg0: $SoundEvent$$Type, arg1: $SoundSource$$Type, arg2: float, arg3: float): void
public "closeMenu"(): void
public "canHarmPlayer"(arg0: $Player$$Type): boolean
public "openTextEdit"(arg0: $SignBlockEntity$$Type, arg1: boolean): void
public "openCommandBlock"(arg0: $CommandBlockEntity$$Type): void
public "doCloseContainer"(): void
public "sendMerchantOffers"(arg0: integer, arg1: $MerchantOffers$$Type, arg2: integer, arg3: integer, arg4: boolean, arg5: boolean): void
public "awardRecipesByKey"(arg0: $List$$Type<($ResourceLocation$$Type)>): void
public "onUpdateAbilities"(): void
public "getEnchantedDamage"(arg0: $Entity$$Type, arg1: float, arg2: $DamageSource$$Type): float
public "startSleepInBed"(arg0: $BlockPos$$Type): $Either<($Player$BedSleepingProblem), ($Unit)>
public "openHorseInventory"(arg0: $AbstractHorse$$Type, arg1: $Container$$Type): void
public "resetRecipes"(arg0: $Collection$$Type<($RecipeHolder$$Type<(never)>)>): integer
public "awardRecipes"(arg0: $Collection$$Type<($RecipeHolder$$Type<(never)>)>): integer
public "openItemGui"(arg0: $ItemStack$$Type, arg1: $InteractionHand$$Type): void
public "changeDimension"(arg0: $DimensionTransition$$Type): $Entity
public "setTabListFooter"(arg0: $Component$$Type): void
public "sendServerStatus"(arg0: $ServerStatus$$Type): void
public "setKnownMovement"(arg0: $Vec3$$Type): void
public "setRespawnPosition"(arg0: $ResourceKey$$Type<($Level)>, arg1: $BlockPos$$Type, arg2: float, arg3: boolean, arg4: boolean): void
public "getChatVisibility"(): $ChatVisiblity
public "clientInformation"(): $ClientInformation
public "getLastSectionPos"(): $SectionPos
public "setLastSectionPos"(arg0: $SectionPos$$Type): void
public "setTabListHeader"(arg0: $Component$$Type): void
public "setChatSession"(arg0: $RemoteChatSession$$Type): void
public "refreshTabListName"(): void
public "getTextFilter"(): $TextFilter
public "canChatInColor"(): boolean
public "loadGameTypes"(arg0: $CompoundTag$$Type): void
public "getTabListFooter"(): $Component
public "getLastActionTime"(): long
public "getTabListHeader"(): $Component
public "getChatSession"(): $RemoteChatSession
public "getIpAddress"(): StringJS
public "addAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "readAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "updateInvisibilityStatus"(): void
public "onEffectRemoved"(arg0: $MobEffectInstance$$Type): void
public "onEffectUpdated"(arg0: $MobEffectInstance$$Type, arg1: boolean, arg2: $Entity$$Type): void
public "checkFallDamage"(arg0: double, arg1: boolean, arg2: $BlockState$$Type, arg3: $BlockPos$$Type): void
public "onChangedBlock"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type): void
public "teleportTo"(arg0: double, arg1: double, arg2: double): void
public "teleportTo"(arg0: $ServerLevel$$Type, arg1: double, arg2: double, arg3: double, arg4: float, arg5: float): void
public "teleportTo"(arg0: $ServerLevel$$Type, arg1: double, arg2: double, arg3: double, arg4: $Set$$Type<($RelativeMovement$$Type)>, arg5: float, arg6: float): boolean
public "moveTo"(arg0: double, arg1: double, arg2: double): void
public "getRespawnAngle"(): float
public "initInventoryMenu"(): void
public "isRespawnForced"(): boolean
public "showEndCredits"(): void
public "updateOptions"(arg0: $ClientInformation$$Type): void
public "getRespawnDimension"(): $ResourceKey<($Level)>
public "createCommonSpawnInfo"(arg0: $ServerLevel$$Type): $CommonPlayerSpawnInfo
public "getRecipeBook"(): $ServerRecipeBook
public "xaerolib_setData"(arg0: $ServerPlayerData$$Type): void
public "xaerolib_getData"(): $ServerPlayerData
public "sendChatMessage"(arg0: $OutgoingChatMessage$$Type, arg1: boolean, arg2: $ChatType$Bound$$Type): void
public "getStatsCounter"(): $ServerStatsCounter
public "isInvulnerableTo"(arg0: $DamageSource$$Type): boolean
public "openMenu"(arg0: $MenuProvider$$Type): $OptionalInt
public "openMenu"(arg0: $MenuProvider$$Type, arg1: $Consumer$$Type<($RegistryFriendlyByteBuf)>): $OptionalInt
public "resetStat"(arg0: $Stat$$Type<(never)>): void
public "magicCrit"(arg0: $Entity$$Type): void
public "crit"(arg0: $Entity$$Type): void
public "displayClientMessage"(arg0: $Component$$Type, arg1: boolean): void
public "isTextFilteringEnabled"(): boolean
public "clearRaidOmenPosition"(): void
public "setXaeroWorldMapPlayerData"(arg0: $ServerPlayerData$1$$Type): void
public "getXaero_OPAC_PlayerData"(): $ServerPlayerDataAPI
public "setXaeroMinimapPlayerData"(arg0: $ServerPlayerData$0$$Type): void
public "getRaidOmenPosition"(): $BlockPos
public "getXaeroWorldMapPlayerData"(): $ServerPlayerData$1
public "setXaero_OPAC_PlayerData"(arg0: $ServerPlayerDataAPI$$Type): void
public "getXaeroMinimapPlayerData"(): $ServerPlayerData$0
public "allowsListing"(): boolean
public "lookAt"(arg0: $EntityAnchorArgument$Anchor$$Type, arg1: $Vec3$$Type): void
public "lookAt"(arg0: $EntityAnchorArgument$Anchor$$Type, arg1: $Entity$$Type, arg2: $EntityAnchorArgument$Anchor$$Type): void
public "getRespawnPosition"(): $BlockPos
public "setSpawnExtraParticlesOnFall"(arg0: boolean): void
public "trackEnteredOrExitedLavaOnVehicle"(): void
public "northstar$setPositionRelativeTo"(other: $Entity$$Type): void
public "dismountTo"(arg0: double, arg1: double, arg2: double): void
public "travel"(arg0: $Vec3$$Type): void
public "stopRiding"(): void
public "rideTick"(): void
public "attack"(arg0: $DamageSource$$Type, arg1: float): boolean
public "awardStat"(arg0: $Stat$$Type<(never)>, arg1: integer): void
public "sendSystemMessage"(arg0: $Component$$Type, arg1: boolean): void
public "sendSystemMessage"(arg0: $Component$$Type): void
public "onEffectAdded"(arg0: $MobEffectInstance$$Type, arg1: $Entity$$Type): void
public "indicateDamage"(arg0: double, arg1: double): void
public "awardKillScore"(arg0: $Entity$$Type, arg1: integer, arg2: $DamageSource$$Type): void
public "pushEntities"(): void
public "onLeaveCombat"(): void
public "onEnterCombat"(): void
public "resetFallDistance"(): void
public "updateUsingItem"(arg0: $ItemStack$$Type): void
public "onItemPickup"(arg0: $ItemEntity$$Type): void
public "completeUsingItem"(): void
public "startSleeping"(arg0: $BlockPos$$Type): void
public "distantHorizons$getDimensionChangeDestination"(): $ServerLevel
public "handler$fcm000$distanthorizons$setServerLevel"(level: $ServerLevel$$Type, ci: $CallbackInfo$$Type): void
public "handler$zpc000$quickrightclick$setRespawnPosition"(arg0: $ResourceKey$$Type, arg1: $BlockPos$$Type, arg2: float, arg3: boolean, arg4: boolean, arg5: $CallbackInfo$$Type): void
public "handler$fcm000$distanthorizons$changeDimension"(dimensionTransition: $DimensionTransition$$Type, cir: $CallbackInfoReturnable$$Type): void
public "checkRidingStatistics"(arg0: double, arg1: double, arg2: double): void
public "getChunkTrackingView"(): $ChunkTrackingView
public "shouldFilterMessageTo"(arg0: $ServerPlayer$$Type): boolean
public "setRaidOmenPosition"(arg0: $BlockPos$$Type): void
public "resetLastActionTime"(): void
public "getTabListDisplayName"(): $Component
public "checkMovementStatistics"(arg0: double, arg1: double, arg2: double): void
public "hasChangedDimension"(): void
public "copyRespawnPosition"(arg0: $ServerPlayer$$Type): void
public "setChunkTrackingView"(arg0: $ChunkTrackingView$$Type): void
public "setTabListHeaderFooter"(arg0: $Component$$Type, arg1: $Component$$Type): void
public "getCamera"(): $Entity
public "setCamera"(arg0: $Entity$$Type): void
public "doTick"(): void
public "openChestGUI"(gui: $Consumer$$Type<($KubeJSGUI)>): void
public "openChestGUI"(title: $Component$$Type, rows: integer, gui: $Consumer$$Type<($ChestMenuData)>): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setSelectedSlot"(index: integer): void
public "sendData"(channel: StringJS, data: $CompoundTag$$Type): void
public "isMiningBlock"(): boolean
public "setMouseItem"(item: $ItemStack$$Type): void
public "getStats"(): $PlayerStatsJS
public "notify"(builder: $NotificationToastData$$Type): void
public "setActivePostShader"(id: $ResourceLocation$$Type): void
public "self"(): $Player
public "isOp"(): boolean
public "ban"(banner: StringJS, reason: StringJS, expiresInMillis: long): void
public "kick"(): void
public "kick"(reason: $Component$$Type): void
public "heal"(): void
public "unlockAdvancement"(id: $ResourceLocation$$Type): void
public "getSpawnLocation"(): $LevelBlock
public "openInventoryGUI"(inventory: $InventoryKJS$$Type, title: $Component$$Type, columns: integer): void
public "openInventoryGUI"(inventory: $InventoryKJS$$Type, title: $Component$$Type): void
public "openInventoryGUI"(inventory: $InventoryKJS$$Type, title: $Component$$Type, columns: integer, rows: integer): void
public "revokeAdvancement"(id: $ResourceLocation$$Type): void
public "setSpawnLocation"(c: $LevelBlock$$Type): void
public "isAdvancementDone"(id: $ResourceLocation$$Type): boolean
public "captureInventory"(autoRestore: boolean): $Container
public "setCreativeMode"(mode: boolean): void
public "northstar$setRelativeEntity"(entity: $Entity$$Type, ticks: integer): void
public "northstar$getRelativeEntity"(): $Entity
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$resetDynamicLight"(): void
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$shouldUpdateDynamicLight"(): boolean
public "sodiumdynamiclights$updateDynamicLight"(arg0: $LevelRenderer$$Type): boolean
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(arg0: $LevelRenderer$$Type): void
public "etf$getScoreboardTeam"(): $Team
public "etf$getItemsEquipped"(): $Iterable<($ItemStack)>
public "etf$getType"(): $EntityType<(never)>
public "etf$getHandItems"(): $Iterable<($ItemStack)>
public "etf$hasCustomName"(): boolean
public "etf$getCustomName"(): $Component
/**
 * 
 * @deprecated
 */
public "etf$getPose"(): $Pose
public "etf$distanceTo"(arg0: $Entity$$Type): float
public "etf$getVelocity"(): $Vec3
public "etf$getUuid"(): $UUID
public "etf$getOptifineId"(): integer
public "etf$getArmorItems"(): $Iterable<($ItemStack)>
public "etf$canBeBright"(): boolean
public "etf$isBlockEntity"(): boolean
public "etf$getBlockY"(): integer
public "etf$getNbt"(): $CompoundTag
public "etf$getBlockPos"(): $BlockPos
public "etf$getEntityKey"(): StringJS
public "etf$getWorld"(): $Level
public "lithium$getCachedFeetBlockState"(): $BlockState
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "combine"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: integer, arg2: $ChangeSubscriber$$Type<(T)>, arg3: integer): $ChangeSubscriber<(T)>
public static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: boolean): $ChangeSubscriber<(T)>
public static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>): $ChangeSubscriber<(T)>
public static "dataOf"(arg0: $ChangeSubscriber$$Type<(never)>, arg1: $ChangeSubscriber$$Type<(never)>, arg2: integer): integer
public static "containsSubscriber"(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: integer, arg2: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg3: integer): boolean
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: integer, arg4: boolean): integer
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer): integer
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
get "changingDimension"(): boolean
set "experiencePoints"(value: integer)
set "experienceLevels"(value: integer)
get "language"(): StringJS
get "creative"(): boolean
get "wardenSpawnTracker"(): $Optional<($WardenSpawnTracker)>
get "spectator"(): boolean
get "advancements"(): $PlayerAdvancements
get "permissionLevel"(): integer
get "knownMovement"(): $Vec3
set "tabListFooter"(value: $Component$$Type)
set "knownMovement"(value: $Vec3$$Type)
get "chatVisibility"(): $ChatVisiblity
get "lastSectionPos"(): $SectionPos
set "lastSectionPos"(value: $SectionPos$$Type)
set "tabListHeader"(value: $Component$$Type)
set "chatSession"(value: $RemoteChatSession$$Type)
get "textFilter"(): $TextFilter
get "tabListFooter"(): $Component
get "lastActionTime"(): long
get "tabListHeader"(): $Component
get "chatSession"(): $RemoteChatSession
get "ipAddress"(): StringJS
get "respawnAngle"(): float
get "respawnForced"(): boolean
get "respawnDimension"(): $ResourceKey<($Level)>
get "recipeBook"(): $ServerRecipeBook
get "statsCounter"(): $ServerStatsCounter
get "textFilteringEnabled"(): boolean
set "xaeroWorldMapPlayerData"(value: $ServerPlayerData$1$$Type)
get "xaero_OPAC_PlayerData"(): $ServerPlayerDataAPI
set "xaeroMinimapPlayerData"(value: $ServerPlayerData$0$$Type)
get "raidOmenPosition"(): $BlockPos
get "xaeroWorldMapPlayerData"(): $ServerPlayerData$1
set "xaero_OPAC_PlayerData"(value: $ServerPlayerDataAPI$$Type)
get "xaeroMinimapPlayerData"(): $ServerPlayerData$0
get "respawnPosition"(): $BlockPos
set "spawnExtraParticlesOnFall"(value: boolean)
get "chunkTrackingView"(): $ChunkTrackingView
set "raidOmenPosition"(value: $BlockPos$$Type)
get "tabListDisplayName"(): $Component
set "chunkTrackingView"(value: $ChunkTrackingView$$Type)
get "camera"(): $Entity
set "camera"(value: $Entity$$Type)
set "selectedSlot"(value: integer)
get "miningBlock"(): boolean
set "mouseItem"(value: $ItemStack$$Type)
get "stats"(): $PlayerStatsJS
set "activePostShader"(value: $ResourceLocation$$Type)
get "op"(): boolean
get "spawnLocation"(): $LevelBlock
set "spawnLocation"(value: $LevelBlock$$Type)
set "creativeMode"(value: boolean)
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
declare module "net.minecraft.server.level.ChunkTaskPriorityQueueSorter" {
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$List$$Type} from "java.util.List"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$ProcessorHandle, $ProcessorHandle$$Type} from "net.minecraft.util.thread.ProcessorHandle"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$ChunkTaskPriorityQueueSorter$Release} from "net.minecraft.server.level.ChunkTaskPriorityQueueSorter$Release"
import {$ChunkHolder$LevelChangeListener$$Interface} from "net.minecraft.server.level.ChunkHolder$LevelChangeListener"
import {$IntSupplier$$Type} from "java.util.function.IntSupplier"
import {$ChunkTaskPriorityQueueSorter$Message} from "net.minecraft.server.level.ChunkTaskPriorityQueueSorter$Message"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$Function$$Type} from "java.util.function.Function"
import {$IntConsumer$$Type} from "java.util.function.IntConsumer"
import {$GenerationChunkHolder$$Type} from "net.minecraft.server.level.GenerationChunkHolder"
import {$Unit$$Type} from "net.minecraft.util.Unit"

export class $ChunkTaskPriorityQueueSorter implements $ChunkHolder$LevelChangeListener$$Interface, $AutoCloseable$$Interface {
constructor(arg0: $List$$Type<($ProcessorHandle$$Type<(never)>)>, arg1: $Executor$$Type, arg2: integer)

public static "message"<T>(arg0: $GenerationChunkHolder$$Type, arg1: $Function$$Type<($ProcessorHandle<($Unit)>), (T)>): $ChunkTaskPriorityQueueSorter$Message<(T)>
public static "message"(arg0: $GenerationChunkHolder$$Type, arg1: $Runnable$$Type): $ChunkTaskPriorityQueueSorter$Message<($Runnable)>
public static "message"(arg0: $Runnable$$Type, arg1: long, arg2: $IntSupplier$$Type): $ChunkTaskPriorityQueueSorter$Message<($Runnable)>
public static "message"<T>(arg0: $Function$$Type<($ProcessorHandle<($Unit)>), (T)>, arg1: long, arg2: $IntSupplier$$Type): $ChunkTaskPriorityQueueSorter$Message<(T)>
public "close"(): void
public static "release"(arg0: $Runnable$$Type, arg1: long, arg2: boolean): $ChunkTaskPriorityQueueSorter$Release
public "getDebugStatus"(): StringJS
public "getProcessor"<T>(arg0: $ProcessorHandle$$Type<(T)>, arg1: boolean): $ProcessorHandle<($ChunkTaskPriorityQueueSorter$Message<(T)>)>
public "hasWork"(): boolean
public "getReleaseProcessor"(arg0: $ProcessorHandle$$Type<($Runnable$$Type)>): $ProcessorHandle<($ChunkTaskPriorityQueueSorter$Release)>
public "onLevelChange"(arg0: $ChunkPos$$Type, arg1: $IntSupplier$$Type, arg2: integer, arg3: $IntConsumer$$Type): void
get "debugStatus"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkTaskPriorityQueueSorter$$Type = ($ChunkTaskPriorityQueueSorter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkTaskPriorityQueueSorter$$Original = $ChunkTaskPriorityQueueSorter;}
declare module "net.minecraft.server.level.BlockDestructionProgress" {
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$BlockDestructionProgressExtension$$Interface} from "com.simibubi.create.foundation.block.render.BlockDestructionProgressExtension"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $BlockDestructionProgress implements $Comparable$$Interface<($BlockDestructionProgress)>, $BlockDestructionProgressExtension$$Interface {
constructor(arg0: integer, arg1: $BlockPos$$Type)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $BlockDestructionProgress$$Type): integer
public "getId"(): integer
public "getPos"(): $BlockPos
public "create$setExtraPositions"(arg0: $Set$$Type): void
public "create$getExtraPositions"(): $Set
public "getUpdatedRenderTick"(): integer
public "getProgress"(): integer
public "setProgress"(arg0: integer): void
public "updateTick"(arg0: integer): void
get "id"(): integer
get "pos"(): $BlockPos
get "updatedRenderTick"(): integer
get "progress"(): integer
set "progress"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockDestructionProgress$$Type = ($BlockDestructionProgress);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockDestructionProgress$$Original = $BlockDestructionProgress;}
declare module "net.minecraft.server.level.ChunkTracker" {
import {$DynamicGraphMinFixedPoint} from "net.minecraft.world.level.lighting.DynamicGraphMinFixedPoint"

export class $ChunkTracker extends $DynamicGraphMinFixedPoint {
readonly "levelCount": integer
static readonly "SOURCE": long

constructor(arg0: integer, arg1: integer, arg2: integer)

public "update"(arg0: long, arg1: integer, arg2: boolean): void
public "isSource"(arg0: long): boolean
public "checkNeighborsAfterUpdate"(arg0: long, arg1: integer, arg2: boolean): void
public "computeLevelFromNeighbor"(arg0: long, arg1: long, arg2: integer): integer
public "getLevelFromSource"(arg0: long): integer
public "getComputedLevel"(arg0: long, arg1: long, arg2: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkTracker$$Type = ($ChunkTracker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkTracker$$Original = $ChunkTracker;}
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
import {$SectionPos} from "net.minecraft.core.SectionPos"
import {$ServerPlayerConnection} from "net.minecraft.server.network.ServerPlayerConnection"
import {$Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$Set} from "java.util.Set"
import {$EntityTrackerAccessor$$Interface} from "net.fabricmc.fabric.mixin.networking.accessor.EntityTrackerAccessor"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ServerEntity} from "net.minecraft.server.level.ServerEntity"
import {$ChunkMapAccessor$TrackedEntityAccessor$$Interface} from "com.railwayteam.railways.neoforge.mixin.ChunkMapAccessor$TrackedEntityAccessor"
import {$ChunkMap, $ChunkMap$$Type} from "net.minecraft.server.level.ChunkMap"

export class $ChunkMap$TrackedEntity implements $ChunkMapAccessor$TrackedEntityAccessor$$Interface, $EntityTrackerAccessor$$Interface {
readonly "serverEntity": $ServerEntity
 "lastSectionPos": $SectionPos
readonly "this$0": $ChunkMap
readonly "entity": $Entity
readonly "seenBy": $Set<($ServerPlayerConnection)>

constructor(arg0: $ChunkMap$$Type, arg1: $Entity$$Type, arg2: integer, arg3: integer, arg4: boolean)

public "getSeenBy"(): $Set
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "broadcast"(arg0: $Packet$$Type<(never)>): void
public "getPlayersTracking"(): $Set
public "removePlayer"(arg0: $ServerPlayer$$Type): void
public "broadcastAndSend"(arg0: $Packet$$Type<(never)>): void
public "updatePlayers"(arg0: $List$$Type<($ServerPlayer$$Type)>): void
public "updatePlayer"(arg0: $ServerPlayer$$Type): void
public "broadcastRemoved"(): void
public "localvar$dfk000$railways$securitycraft$modifyFlag"(arg0: boolean): boolean
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
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$ChunkStatus$$Type} from "net.minecraft.world.level.chunk.status.ChunkStatus"

export interface $ChunkProgressListener$$Interface {
}

export class $ChunkProgressListener implements $ChunkProgressListener$$Interface {
 "start"(): void
 "stop"(): void
static "calculateDiameter"(arg0: integer): integer
 "onStatusChange"(arg0: $ChunkPos$$Type, arg1: $ChunkStatus$$Type): void
 "updateSpawnPos"(arg0: $ChunkPos$$Type): void
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
declare module "net.minecraft.server.level.ServerBossEvent" {
import {$Collection} from "java.util.Collection"
import {$BossEvent$BossBarColor, $BossEvent$BossBarColor$$Type} from "net.minecraft.world.BossEvent$BossBarColor"
import {$BossEvent} from "net.minecraft.world.BossEvent"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$BossEvent$BossBarOverlay, $BossEvent$BossBarOverlay$$Type} from "net.minecraft.world.BossEvent$BossBarOverlay"

export class $ServerBossEvent extends $BossEvent {
 "darkenScreen": boolean
 "playBossMusic": boolean
 "color": $BossEvent$BossBarColor
 "overlay": $BossEvent$BossBarOverlay
 "name": $Component
 "progress": float
 "createWorldFog": boolean

constructor(arg0: $Component$$Type, arg1: $BossEvent$BossBarColor$$Type, arg2: $BossEvent$BossBarOverlay$$Type)

public "setName"(arg0: $Component$$Type): void
public "setColor"(arg0: $BossEvent$BossBarColor$$Type): void
public "addPlayer"(arg0: $ServerPlayer$$Type): void
public "getPlayers"(): $Collection<($ServerPlayer)>
public "setDarkenScreen"(arg0: boolean): $BossEvent
public "setVisible"(arg0: boolean): void
public "setPlayBossMusic"(arg0: boolean): $BossEvent
public "setCreateWorldFog"(arg0: boolean): $BossEvent
public "setOverlay"(arg0: $BossEvent$BossBarOverlay$$Type): void
public "removePlayer"(arg0: $ServerPlayer$$Type): void
public "setProgress"(arg0: float): void
public "isVisible"(): boolean
public "removeAllPlayers"(): void
get "players"(): $Collection<($ServerPlayer)>
set "visible"(value: boolean)
get "visible"(): boolean
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
declare module "net.minecraft.server.level.ChunkTaskPriorityQueueSorter$Release" {
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"

export class $ChunkTaskPriorityQueueSorter$Release {
readonly "task": $Runnable
readonly "pos": long
readonly "clearQueue": boolean

constructor(arg0: $Runnable$$Type, arg1: long, arg2: boolean)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkTaskPriorityQueueSorter$Release$$Type = ($ChunkTaskPriorityQueueSorter$Release);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkTaskPriorityQueueSorter$Release$$Original = $ChunkTaskPriorityQueueSorter$Release;}
declare module "net.minecraft.server.level.ChunkTaskPriorityQueueSorter$Message" {
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$ProcessorHandle, $ProcessorHandle$$Type} from "net.minecraft.util.thread.ProcessorHandle"
import {$IntSupplier, $IntSupplier$$Type} from "java.util.function.IntSupplier"
import {$Unit, $Unit$$Type} from "net.minecraft.util.Unit"

export class $ChunkTaskPriorityQueueSorter$Message<T> {
readonly "task": $Function<($ProcessorHandle<($Unit)>), (T)>
readonly "pos": long
readonly "level": $IntSupplier

constructor(arg0: $Function$$Type<($ProcessorHandle<($Unit)>), (T)>, arg1: long, arg2: $IntSupplier$$Type)

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
declare module "net.minecraft.server.level.ChunkGenerationTask" {
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$GeneratingChunkMap$$Type} from "net.minecraft.server.level.GeneratingChunkMap"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$ChunkStatus, $ChunkStatus$$Type} from "net.minecraft.world.level.chunk.status.ChunkStatus"
import {$GenerationChunkHolder} from "net.minecraft.server.level.GenerationChunkHolder"

export class $ChunkGenerationTask {
readonly "targetStatus": $ChunkStatus

public static "create"(arg0: $GeneratingChunkMap$$Type, arg1: $ChunkStatus$$Type, arg2: $ChunkPos$$Type): $ChunkGenerationTask
public "getCenter"(): $GenerationChunkHolder
public "markForCancellation"(): void
public "runUntilWait"(): $CompletableFuture<(never)>
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
declare module "net.minecraft.server.level.ThreadedLevelLightEngine" {
import {$LevelLightEngine} from "net.minecraft.world.level.lighting.LevelLightEngine"
import {$LightLayer$$Type} from "net.minecraft.world.level.LightLayer"
import {$LevelHeightAccessor} from "net.minecraft.world.level.LevelHeightAccessor"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$ProcessorMailbox$$Type} from "net.minecraft.util.thread.ProcessorMailbox"
import {$ChunkAccess, $ChunkAccess$$Type} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$LightChunkGetter$$Type} from "net.minecraft.world.level.chunk.LightChunkGetter"
import {$ProcessorHandle$$Type} from "net.minecraft.util.thread.ProcessorHandle"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$ChunkMap$$Type} from "net.minecraft.server.level.ChunkMap"
import {$ChunkTaskPriorityQueueSorter$Message$$Type} from "net.minecraft.server.level.ChunkTaskPriorityQueueSorter$Message"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$SectionPos$$Type} from "net.minecraft.core.SectionPos"
import {$DataLayer$$Type} from "net.minecraft.world.level.chunk.DataLayer"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $ThreadedLevelLightEngine extends $LevelLightEngine implements $AutoCloseable$$Interface {
static readonly "DEFAULT_BATCH_SIZE": integer
static readonly "LIGHT_SECTION_PADDING": integer
readonly "levelHeightAccessor": $LevelHeightAccessor

constructor(arg0: $LightChunkGetter$$Type, arg1: $ChunkMap$$Type, arg2: boolean, arg3: $ProcessorMailbox$$Type<($Runnable$$Type)>, arg4: $ProcessorHandle$$Type<($ChunkTaskPriorityQueueSorter$Message$$Type<($Runnable$$Type)>)>)

public "close"(): void
public "lightChunk"(arg0: $ChunkAccess$$Type, arg1: boolean): $CompletableFuture<($ChunkAccess)>
public "updateChunkStatus"(arg0: $ChunkPos$$Type): void
public "checkBlock"(arg0: $BlockPos$$Type): void
public "setLightEnabled"(arg0: $ChunkPos$$Type, arg1: boolean): void
public "runLightUpdates"(): integer
public "updateSectionStatus"(arg0: $SectionPos$$Type, arg1: boolean): void
public "retainData"(arg0: $ChunkPos$$Type, arg1: boolean): void
public "queueSectionData"(arg0: $LightLayer$$Type, arg1: $SectionPos$$Type, arg2: $DataLayer$$Type): void
public "initializeLight"(arg0: $ChunkAccess$$Type, arg1: boolean): $CompletableFuture<($ChunkAccess)>
public "tryScheduleUpdate"(): void
public "propagateLightSources"(arg0: $ChunkPos$$Type): void
public "waitForPendingTasks"(arg0: integer, arg1: integer): $CompletableFuture<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThreadedLevelLightEngine$$Type = ($ThreadedLevelLightEngine);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ThreadedLevelLightEngine$$Original = $ThreadedLevelLightEngine;}
declare module "net.minecraft.server.level.TickingTracker" {
import {$Long2ByteMap} from "it.unimi.dsi.fastutil.longs.Long2ByteMap"
import {$ChunkTracker} from "net.minecraft.server.level.ChunkTracker"
import {$TicketType$$Type} from "net.minecraft.server.level.TicketType"
import {$Ticket$$Type} from "net.minecraft.server.level.Ticket"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"

export class $TickingTracker extends $ChunkTracker {
readonly "levelCount": integer
readonly "chunks": $Long2ByteMap
static readonly "SOURCE": long
static readonly "MAX_LEVEL": integer

constructor()

public "getLevel"(arg0: long): integer
public "getLevel"(arg0: $ChunkPos$$Type): integer
public "setLevel"(arg0: long, arg1: integer): void
public "runAllUpdates"(): void
public "removeTicket"<T>(arg0: $TicketType$$Type<(T)>, arg1: $ChunkPos$$Type, arg2: integer, arg3: T): void
public "removeTicket"(arg0: long, arg1: $Ticket$$Type<(never)>): void
public "getTicketDebugString"(arg0: long): StringJS
public "replacePlayerTicketsLevel"(arg0: integer): void
public "getLevelFromSource"(arg0: long): integer
public "addTicket"<T>(arg0: $TicketType$$Type<(T)>, arg1: $ChunkPos$$Type, arg2: integer, arg3: T): void
public "addTicket"(arg0: long, arg1: $Ticket$$Type<(never)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickingTracker$$Type = ($TickingTracker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TickingTracker$$Original = $TickingTracker;}
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

constructor(arg0: StringJS, arg1: $Comparator$$Type<(T)>, arg2: long)

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
declare module "net.minecraft.server.level.DistanceManager" {
import {$LongSet} from "it.unimi.dsi.fastutil.longs.LongSet"
import {$Long2ObjectMap} from "it.unimi.dsi.fastutil.longs.Long2ObjectMap"
import {$TicketType$$Type} from "net.minecraft.server.level.TicketType"
import {$Runnable} from "java.lang.Runnable"
import {$ProcessorHandle} from "net.minecraft.util.thread.ProcessorHandle"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$SortedArraySet} from "net.minecraft.util.SortedArraySet"
import {$Long2ObjectOpenHashMap} from "it.unimi.dsi.fastutil.longs.Long2ObjectOpenHashMap"
import {$ChunkMap$$Type} from "net.minecraft.server.level.ChunkMap"
import {$ChunkTaskPriorityQueueSorter$Release} from "net.minecraft.server.level.ChunkTaskPriorityQueueSorter$Release"
import {$ChunkTaskPriorityQueueSorter} from "net.minecraft.server.level.ChunkTaskPriorityQueueSorter"
import {$ChunkHolder, $ChunkHolder$$Type} from "net.minecraft.server.level.ChunkHolder"
import {$ChunkTaskPriorityQueueSorter$Message} from "net.minecraft.server.level.ChunkTaskPriorityQueueSorter$Message"
import {$ObjectSet} from "it.unimi.dsi.fastutil.objects.ObjectSet"
import {$SectionPos$$Type} from "net.minecraft.core.SectionPos"
import {$Executor, $Executor$$Type} from "java.util.concurrent.Executor"
import {$Ticket, $Ticket$$Type} from "net.minecraft.server.level.Ticket"
import {$Set} from "java.util.Set"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Logger} from "org.slf4j.Logger"
import {$TickingTracker} from "net.minecraft.server.level.TickingTracker"

export class $DistanceManager {
readonly "ticketThrottlerInput": $ProcessorHandle<($ChunkTaskPriorityQueueSorter$Message<($Runnable)>)>
readonly "ticketsToRelease": $LongSet
readonly "chunksToUpdateFutures": $Set<($ChunkHolder)>
readonly "tickets": $Long2ObjectOpenHashMap<($SortedArraySet<($Ticket<(never)>)>)>
readonly "ticketThrottler": $ChunkTaskPriorityQueueSorter
readonly "playersPerChunk": $Long2ObjectMap<($ObjectSet<($ServerPlayer)>)>
static readonly "LOGGER": $Logger
readonly "mainThreadExecutor": $Executor
readonly "ticketThrottlerReleaser": $ProcessorHandle<($ChunkTaskPriorityQueueSorter$Release)>
static readonly "PLAYER_TICKET_LEVEL": integer

constructor(arg0: $Executor$$Type, arg1: $Executor$$Type)

public "purgeStaleTickets"(): void
public "shouldForceTicks"(arg0: long): boolean
public "addPlayer"(arg0: $SectionPos$$Type, arg1: $ServerPlayer$$Type): void
public "inBlockTickingRange"(arg0: long): boolean
public "addRegionTicket"<T>(arg0: $TicketType$$Type<(T)>, arg1: $ChunkPos$$Type, arg2: integer, arg3: T): void
public "addRegionTicket"<T>(arg0: $TicketType$$Type<(T)>, arg1: $ChunkPos$$Type, arg2: integer, arg3: T, arg4: boolean): void
public "updateChunkForced"(arg0: $ChunkPos$$Type, arg1: boolean): void
public "removeRegionTicket"<T>(arg0: $TicketType$$Type<(T)>, arg1: $ChunkPos$$Type, arg2: integer, arg3: T): void
public "removeRegionTicket"<T>(arg0: $TicketType$$Type<(T)>, arg1: $ChunkPos$$Type, arg2: integer, arg3: T, arg4: boolean): void
public "getDebugStatus"(): StringJS
public "runAllUpdates"(arg0: $ChunkMap$$Type): boolean
public "removePlayer"(arg0: $SectionPos$$Type, arg1: $ServerPlayer$$Type): void
public "getChunk"(arg0: long): $ChunkHolder
public "getNaturalSpawnChunkCount"(): integer
public "inEntityTickingRange"(arg0: long): boolean
public "removeTicket"<T>(arg0: $TicketType$$Type<(T)>, arg1: $ChunkPos$$Type, arg2: integer, arg3: T): void
public "removeTicket"(arg0: long, arg1: $Ticket$$Type<(never)>): void
public "removeTicketsOnClosing"(): void
public "updateSimulationDistance"(arg0: integer): void
public "updateChunkScheduling"(arg0: long, arg1: integer, arg2: $ChunkHolder$$Type, arg3: integer): $ChunkHolder
public "updatePlayerTickets"(arg0: integer): void
public "getTicketDebugString"(arg0: long): StringJS
public "hasPlayersNearby"(arg0: long): boolean
public "tickingTracker"(): $TickingTracker
public "isChunkToRemove"(arg0: long): boolean
public "addTicket"<T>(arg0: $TicketType$$Type<(T)>, arg1: $ChunkPos$$Type, arg2: integer, arg3: T): void
public "addTicket"(arg0: long, arg1: $Ticket$$Type<(never)>): void
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

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "position"(): $Vec3
public static "of"(arg0: $Vec3$$Type, arg1: $BlockPos$$Type): $ServerPlayer$RespawnPosAngle
public "yaw"(): float
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
