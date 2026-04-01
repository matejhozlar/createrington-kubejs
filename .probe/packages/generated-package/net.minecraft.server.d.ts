declare module "net.minecraft.server.ServerLinks$UntrustedEntry" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ServerLinks$KnownLinkType, $ServerLinks$KnownLinkType$$Type} from "net.minecraft.server.ServerLinks$KnownLinkType"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $ServerLinks$UntrustedEntry extends $Record {
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($ServerLinks$UntrustedEntry)>

constructor(arg0: $Either$$Type<($ServerLinks$KnownLinkType$$Type), ($Component$$Type)>, arg1: StringJS)

public "type"(): $Either<($ServerLinks$KnownLinkType), ($Component)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "link"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerLinks$UntrustedEntry$$Type = ({"type"?: $Either$$Type<($ServerLinks$KnownLinkType$$Type), ($Component$$Type)>, "link"?: StringJS}) | ([type?: $Either$$Type<($ServerLinks$KnownLinkType$$Type), ($Component$$Type)>, link?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerLinks$UntrustedEntry$$Original = $ServerLinks$UntrustedEntry;}
declare module "net.minecraft.server.TickTask" {
import {$Runnable$$Type, $Runnable$$Interface} from "java.lang.Runnable"

export class $TickTask implements $Runnable$$Interface {
constructor(arg0: integer, arg1: $Runnable$$Type)

public "run"(): void
public "getTick"(): integer
get "tick"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickTask$$Type = ($TickTask);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TickTask$$Original = $TickTask;}
declare module "net.minecraft.server.ServerAdvancementManager" {
import {$Collection} from "java.util.Collection"
import {$Map$$Type} from "java.util.Map"
import {$JsonElement$$Type} from "com.google.gson.JsonElement"
import {$AdvancementHolder} from "net.minecraft.advancements.AdvancementHolder"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$SimpleJsonResourceReloadListener} from "net.minecraft.server.packs.resources.SimpleJsonResourceReloadListener"
import {$IdentifiableResourceReloadListener$$Interface} from "net.fabricmc.fabric.api.resource.IdentifiableResourceReloadListener"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AdvancementTree} from "net.minecraft.advancements.AdvancementTree"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $ServerAdvancementManager extends $SimpleJsonResourceReloadListener implements $IdentifiableResourceReloadListener$$Interface {
constructor(arg0: $HolderLookup$Provider$$Type)

public "get"(arg0: $ResourceLocation$$Type): $AdvancementHolder
public "apply"(arg0: any, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type): void
public "apply"(arg0: $Map$$Type<($ResourceLocation$$Type), ($JsonElement$$Type)>, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type): void
public "tree"(): $AdvancementTree
public "fabric_getRegistryLookup"(): $HolderLookup$Provider
public "getFabricId"(): $ResourceLocation
public "getFabricDependencies"(): $Collection
public "getAllAdvancements"(): $Collection<($AdvancementHolder)>
public "prepare"(arg0: $ResourceManager$$Type, arg1: $ProfilerFiller$$Type): any
public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
get "fabricId"(): $ResourceLocation
get "fabricDependencies"(): $Collection
get "allAdvancements"(): $Collection<($AdvancementHolder)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerAdvancementManager$$Type = ($ServerAdvancementManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerAdvancementManager$$Original = $ServerAdvancementManager;}
declare module "net.minecraft.server.ServerFunctionLibrary" {
import {$Iterable} from "java.lang.Iterable"
import {$Collection} from "java.util.Collection"
import {$Map} from "java.util.Map"
import {$Optional} from "java.util.Optional"
import {$PreparableReloadListener$$Interface} from "net.minecraft.server.packs.resources.PreparableReloadListener"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$CommandFunction} from "net.minecraft.commands.functions.CommandFunction"
import {$IdentifiableResourceReloadListener$$Interface} from "net.fabricmc.fabric.api.resource.IdentifiableResourceReloadListener"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry} from "net.minecraft.core.Registry"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$CommandDispatcher$$Type} from "com.mojang.brigadier.CommandDispatcher"
import {$CommandSourceStack, $CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $ServerFunctionLibrary implements $PreparableReloadListener$$Interface, $IdentifiableResourceReloadListener$$Interface {
static readonly "TYPE_KEY": $ResourceKey<($Registry<($CommandFunction<($CommandSourceStack)>)>)>

constructor(arg0: integer, arg1: $CommandDispatcher$$Type<($CommandSourceStack$$Type)>)

public "getFunction"(arg0: $ResourceLocation$$Type): $Optional<($CommandFunction<($CommandSourceStack)>)>
public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
public "getTag"(arg0: $ResourceLocation$$Type): $Collection<($CommandFunction<($CommandSourceStack)>)>
public "getFabricId"(): $ResourceLocation
public "getFunctions"(): $Map<($ResourceLocation), ($CommandFunction<($CommandSourceStack)>)>
public "getFabricDependencies"(): $Collection
public "getAvailableTags"(): $Iterable<($ResourceLocation)>
public "getName"(): StringJS
get "fabricId"(): $ResourceLocation
get "functions"(): $Map<($ResourceLocation), ($CommandFunction<($CommandSourceStack)>)>
get "fabricDependencies"(): $Collection
get "availableTags"(): $Iterable<($ResourceLocation)>
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerFunctionLibrary$$Type = ($ServerFunctionLibrary);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerFunctionLibrary$$Original = $ServerFunctionLibrary;}
declare module "net.minecraft.server.Services" {
import {$GameProfileCache, $GameProfileCache$$Type} from "net.minecraft.server.players.GameProfileCache"
import {$SignatureValidator} from "net.minecraft.util.SignatureValidator"
import {$YggdrasilAuthenticationService$$Type} from "com.mojang.authlib.yggdrasil.YggdrasilAuthenticationService"
import {$ServicesKeySet, $ServicesKeySet$$Type} from "com.mojang.authlib.yggdrasil.ServicesKeySet"
import {$File$$Type} from "java.io.File"
import {$MinecraftSessionService, $MinecraftSessionService$$Type} from "com.mojang.authlib.minecraft.MinecraftSessionService"
import {$GameProfileRepository, $GameProfileRepository$$Type} from "com.mojang.authlib.GameProfileRepository"
import {$Record} from "java.lang.Record"

export class $Services extends $Record {
constructor(arg0: $MinecraftSessionService$$Type, arg1: $ServicesKeySet$$Type, arg2: $GameProfileRepository$$Type, arg3: $GameProfileCache$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "create"(arg0: $YggdrasilAuthenticationService$$Type, arg1: $File$$Type): $Services
public "servicesKeySet"(): $ServicesKeySet
public "canValidateProfileKeys"(): boolean
public "profileKeySignatureValidator"(): $SignatureValidator
public "sessionService"(): $MinecraftSessionService
public "profileCache"(): $GameProfileCache
public "profileRepository"(): $GameProfileRepository
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Services$$Type = ({"sessionService"?: $MinecraftSessionService$$Type, "servicesKeySet"?: $ServicesKeySet$$Type, "profileCache"?: $GameProfileCache$$Type, "profileRepository"?: $GameProfileRepository$$Type}) | ([sessionService?: $MinecraftSessionService$$Type, servicesKeySet?: $ServicesKeySet$$Type, profileCache?: $GameProfileCache$$Type, profileRepository?: $GameProfileRepository$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Services$$Original = $Services;}
declare module "net.minecraft.server.ReloadableServerResources" {
import {$FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$TagManager} from "net.minecraft.tags.TagManager"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$ServerScriptManager} from "dev.latvian.mods.kubejs.server.ServerScriptManager"
import {$List} from "java.util.List"
import {$LayeredRegistryAccess$$Type} from "net.minecraft.core.LayeredRegistryAccess"
import {$ServerAdvancementManager} from "net.minecraft.server.ServerAdvancementManager"
import {$RecipeManager} from "net.minecraft.world.item.crafting.RecipeManager"
import {$Commands} from "net.minecraft.commands.Commands"
import {$ReloadableServerResourcesKJS$$Interface} from "dev.latvian.mods.kubejs.core.ReloadableServerResourcesKJS"
import {$PreparableReloadListener} from "net.minecraft.server.packs.resources.PreparableReloadListener"
import {$ReloadableServerRegistries$Holder} from "net.minecraft.server.ReloadableServerRegistries$Holder"
import {$HolderLookup$Provider} from "net.minecraft.core.HolderLookup$Provider"
import {$RegistryLayer$$Type} from "net.minecraft.server.RegistryLayer"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$ICondition$IContext} from "net.neoforged.neoforge.common.conditions.ICondition$IContext"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$ServerFunctionLibrary} from "net.minecraft.server.ServerFunctionLibrary"
import {$Commands$CommandSelection$$Type} from "net.minecraft.commands.Commands$CommandSelection"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $ReloadableServerResources implements $ReloadableServerResourcesKJS$$Interface {
public "listeners"(): $List<($PreparableReloadListener)>
public "fullRegistries"(): $ReloadableServerRegistries$Holder
public "kjs$getTagManager"(): $TagManager
public "handler$glk000$sliceanddice$injectRecipes"(arg0: $CallbackInfo$$Type): void
public "getRegistryLookup"(): $HolderLookup$Provider
public "getConditionContext"(): $ICondition$IContext
public "getRecipes"(): $RecipeManager
public "getAdvancements"(): $ServerAdvancementManager
public "getRecipeManager"(): $RecipeManager
public "getCommands"(): $Commands
public "getFunctionLibrary"(): $ServerFunctionLibrary
public static "loadResources"(arg0: $ResourceManager$$Type, arg1: $LayeredRegistryAccess$$Type<($RegistryLayer$$Type)>, arg2: $FeatureFlagSet$$Type, arg3: $Commands$CommandSelection$$Type, arg4: integer, arg5: $Executor$$Type, arg6: $Executor$$Type): $CompletableFuture<($ReloadableServerResources)>
public "updateRegistryTags"(): void
public "kjs$getServerScriptManager"(): $ServerScriptManager
get "registryLookup"(): $HolderLookup$Provider
get "conditionContext"(): $ICondition$IContext
get "recipes"(): $RecipeManager
get "advancements"(): $ServerAdvancementManager
get "recipeManager"(): $RecipeManager
get "commands"(): $Commands
get "functionLibrary"(): $ServerFunctionLibrary
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReloadableServerResources$$Type = ($ReloadableServerResources);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReloadableServerResources$$Original = $ReloadableServerResources;}
declare module "net.minecraft.server.MinecraftServer" {
import {$MinecraftServerData as $MinecraftServerData$0, $MinecraftServerData$$Type as $MinecraftServerData$0$$Type} from "xaero.common.server.MinecraftServerData"
import {$LevelStorageSource$LevelStorageAccess, $LevelStorageSource$LevelStorageAccess$$Type} from "net.minecraft.world.level.storage.LevelStorageSource$LevelStorageAccess"
import {$MinecraftServer$ReloadableResources} from "net.minecraft.server.MinecraftServer$ReloadableResources"
import {$CommandStorage} from "net.minecraft.world.level.storage.CommandStorage"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$Proxy, $Proxy$$Type} from "java.net.Proxy"
import {$ChunkIOErrorReporter$$Interface} from "net.minecraft.world.level.chunk.storage.ChunkIOErrorReporter"
import {$TextFilter} from "net.minecraft.server.network.TextFilter"
import {$ScheduledEvents$ScheduledEvent} from "dev.latvian.mods.kubejs.util.ScheduledEvents$ScheduledEvent"
import {$MinecraftServerData, $MinecraftServerData$$Type} from "xaero.map.server.MinecraftServerData"
import {$ProfileResults, $ProfileResults$$Type} from "net.minecraft.util.profiling.ProfileResults"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$Difficulty$$Type} from "net.minecraft.world.Difficulty"
import {$CrashReport$$Type} from "net.minecraft.CrashReport"
import {$MinecraftSessionService} from "com.mojang.authlib.minecraft.MinecraftSessionService"
import {$Thread, $Thread$$Type} from "java.lang.Thread"
import {$FabricOriginalKnownPacksGetter$$Interface} from "net.fabricmc.fabric.impl.resource.loader.FabricOriginalKnownPacksGetter"
import {$PlayerSelector$$Type} from "dev.latvian.mods.kubejs.core.PlayerSelector"
import {$LevelResource$$Type} from "net.minecraft.world.level.storage.LevelResource"
import {$ChunkGenerator$$Type} from "net.minecraft.world.level.chunk.ChunkGenerator"
import {$ServerConnectionListener} from "net.minecraft.server.network.ServerConnectionListener"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ChunkProgressListener$$Type} from "net.minecraft.server.level.progress.ChunkProgressListener"
import {$AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$EntityArrayList} from "dev.latvian.mods.kubejs.player.EntityArrayList"
import {$PotionBrewing} from "net.minecraft.world.item.alchemy.PotionBrewing"
import {$ResourceManager} from "net.minecraft.server.packs.resources.ResourceManager"
import {$LevelSettings} from "net.minecraft.world.level.LevelSettings"
import {$LayeredRegistryAccess} from "net.minecraft.core.LayeredRegistryAccess"
import {$RegionStorageInfo$$Type} from "net.minecraft.world.level.chunk.storage.RegionStorageInfo"
import {$StructureTemplateManager} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ServerScoreboard} from "net.minecraft.server.ServerScoreboard"
import {$WorldStem$$Type} from "net.minecraft.server.WorldStem"
import {$IServerDimensionAccessor$$Interface} from "com.agent772.parallelworlds.accessor.IServerDimensionAccessor"
import {$Function$$Type} from "java.util.function.Function"
import {$ReentrantBlockableEventLoop} from "net.minecraft.util.thread.ReentrantBlockableEventLoop"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$CommandSource$$Interface} from "net.minecraft.commands.CommandSource"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$MinecraftServer$ServerResourcePackInfo} from "net.minecraft.server.MinecraftServer$ServerResourcePackInfo"
import {$Map} from "java.util.Map"
import {$MinecraftServerAccessor$$Interface} from "net.createmod.ponder.mixin.accessor.MinecraftServerAccessor"
import {$ServerInfo$$Interface} from "net.minecraft.server.ServerInfo"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$GameProfileRepository} from "com.mojang.authlib.GameProfileRepository"
import {$IServerDataAPI, $IServerDataAPI$$Type} from "xaero.pac.common.server.IServerDataAPI"
import {$ScheduledEvents$Callback$$Type} from "dev.latvian.mods.kubejs.util.ScheduledEvents$Callback"
import {$ServerStatus} from "net.minecraft.network.protocol.status.ServerStatus"
import {$ReportedException} from "net.minecraft.ReportedException"
import {$WorldData} from "net.minecraft.world.level.storage.WorldData"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$Services, $Services$$Type} from "net.minecraft.server.Services"
import {$RuntimeException$$Type} from "java.lang.RuntimeException"
import {$PlayerList, $PlayerList$$Type} from "net.minecraft.server.players.PlayerList"
import {$CommandSourceStack, $CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"
import {$ChatType$Bound$$Type} from "net.minecraft.network.chat.ChatType$Bound"
import {$Iterable} from "java.lang.Iterable"
import {$Optional} from "java.util.Optional"
import {$AdvancementNode} from "net.minecraft.advancements.AdvancementNode"
import {$ReloadableServerRegistries$Holder} from "net.minecraft.server.ReloadableServerRegistries$Holder"
import {$DataFixer, $DataFixer$$Type} from "com.mojang.datafixers.DataFixer"
import {$ProfilerFiller} from "net.minecraft.util.profiling.ProfilerFiller"
import {$ServerFunctionManager} from "net.minecraft.server.ServerFunctionManager"
import {$IMinecraftServer$$Interface} from "xaero.common.server.IMinecraftServer"
import {$Set} from "java.util.Set"
import {$TickDuration$$Type} from "dev.latvian.mods.kubejs.util.TickDuration"
import {$PlayerDataStorage} from "net.minecraft.world.level.storage.PlayerDataStorage"
import {$SignatureValidator} from "net.minecraft.util.SignatureValidator"
import {$ServerAdvancementManager} from "net.minecraft.server.ServerAdvancementManager"
import {$ServerLinks} from "net.minecraft.server.ServerLinks"
import {$RecipeManager} from "net.minecraft.world.item.crafting.RecipeManager"
import {$Commands} from "net.minecraft.commands.Commands"
import {$ChunkProgressListenerFactory$$Type} from "net.minecraft.server.level.progress.ChunkProgressListenerFactory"
import {$BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"
import {$ModCheck} from "net.minecraft.util.ModCheck"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$GameRules} from "net.minecraft.world.level.GameRules"
import {$KeyPair} from "java.security.KeyPair"
import {$RegistryLayer} from "net.minecraft.server.RegistryLayer"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$WorldDataConfiguration, $WorldDataConfiguration$$Type} from "net.minecraft.world.level.WorldDataConfiguration"
import {$ServerTickRateManager} from "net.minecraft.server.ServerTickRateManager"
import {$UUID$$Type} from "java.util.UUID"
import {$List} from "java.util.List"
import {$ServerPlayerGameMode} from "net.minecraft.server.level.ServerPlayerGameMode"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ScheduledEvents} from "dev.latvian.mods.kubejs.util.ScheduledEvents"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$ProcessorHandle} from "net.minecraft.util.thread.ProcessorHandle"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ITimeTrackingServer$$Interface} from "org.embeddedt.modernfix.duck.ITimeTrackingServer"
import {$RemoteDebugSampleType$$Type} from "net.minecraft.util.debugchart.RemoteDebugSampleType"
import {$MinecraftServerKJS$$Interface} from "dev.latvian.mods.kubejs.core.MinecraftServerKJS"
import {$ChatDecorator} from "net.minecraft.network.chat.ChatDecorator"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RegistryAccess$Frozen} from "net.minecraft.core.RegistryAccess$Frozen"
import {$Executor} from "java.util.concurrent.Executor"
import {$SampleLogger} from "net.minecraft.util.debugchart.SampleLogger"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$IMinecraftServer$$Interface as $IMinecraftServer$0$$Interface} from "xaero.map.server.IMinecraftServer"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$GameType, $GameType$$Type} from "net.minecraft.world.level.GameType"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$SystemReport, $SystemReport$$Type} from "net.minecraft.SystemReport"
import {$TickTask, $TickTask$$Type} from "net.minecraft.server.TickTask"
import {$GameProfileCache} from "net.minecraft.server.players.GameProfileCache"
import {$Collection$$Type} from "java.util.Collection"
import {$PackRepository, $PackRepository$$Type} from "net.minecraft.server.packs.repository.PackRepository"
import {$AttachedData} from "dev.latvian.mods.kubejs.util.AttachedData"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$CustomBossEvents} from "net.minecraft.server.bossevents.CustomBossEvents"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export class $MinecraftServer extends $ReentrantBlockableEventLoop<($TickTask)> implements $ServerInfo$$Interface, $ChunkIOErrorReporter$$Interface, $CommandSource$$Interface, $AutoCloseable$$Interface, $ITimeTrackingServer$$Interface, $IMinecraftServer$$Interface, $IMinecraftServer$0$$Interface, $IServerDimensionAccessor$$Interface, $MinecraftServerKJS$$Interface, $FabricOriginalKnownPacksGetter$$Interface, $MinecraftServerAccessor$$Interface {
static readonly "VANILLA_BRAND": StringJS
static readonly "ANONYMOUS_PLAYER_PROFILE": $GameProfile
 "nextTickTimeNanos": long
 "resources": $MinecraftServer$ReloadableResources
readonly "services": $Services
static readonly "ABSOLUTE_MAX_WORLD_SIZE": integer
static readonly "DEMO_SETTINGS": $LevelSettings
readonly "proxy": $Proxy
readonly "executor": $Executor
readonly "worldData": $WorldData
readonly "storageSource": $LevelStorageSource$LevelStorageAccess
readonly "levels": $Map<($ResourceKey<($Level)>), ($ServerLevel)>
readonly "playerDataStorage": $PlayerDataStorage

constructor(arg0: $Thread$$Type, arg1: $LevelStorageSource$LevelStorageAccess$$Type, arg2: $PackRepository$$Type, arg3: $WorldStem$$Type, arg4: $Proxy$$Type, arg5: $DataFixer$$Type, arg6: $Services$$Type, arg7: $ChunkProgressListenerFactory$$Type)

public "getConnection"(): $ServerConnectionListener
public "close"(): void
public "getPort"(): integer
public "getFile"(arg0: StringJS): $Path
public "isShutdown"(): boolean
public "halt"(arg0: boolean): void
public "managedBlock"(arg0: $BooleanSupplier$$Type): void
public "pollTask"(): boolean
public "getLevel"(arg0: $ResourceKey$$Type<($Level)>): $ServerLevel
public "isSpawningAnimals"(): boolean
public "areNpcsEnabled"(): boolean
public "tickServer"(arg0: $BooleanSupplier$$Type): void
public "getProfilePermissions"(arg0: $GameProfile$$Type): integer
public "restoreInventories"(): $Map
public "createGameModeForPlayer"(arg0: $ServerPlayer$$Type): $ServerPlayerGameMode
public "createTextFilterForPlayer"(arg0: $ServerPlayer$$Type): $TextFilter
public "isDedicated"(): boolean
public "getProxy"(): $Proxy
public "getMaxChainedNeighborUpdates"(): integer
public "getWorldScreenshotFile"(): $Optional<($Path)>
public "isStopped"(): boolean
public "getPlayerList"(): $PlayerList
public "isDemo"(): boolean
public "shouldRun"(arg0: $Runnable$$Type): boolean
public "shouldRun"(arg0: $TickTask$$Type): boolean
public "isPaused"(): boolean
public "tell"(arg0: any): void
public "doRunTask"(arg0: $TickTask$$Type): void
public "doRunTask"(arg0: $Runnable$$Type): void
public "isHardcore"(): boolean
public "registries"(): $LayeredRegistryAccess<($RegistryLayer)>
public static "spin"<S extends $MinecraftServer>(arg0: $Function$$Type<($Thread), (S)>): S
public "isReady"(): boolean
public "endMetricsRecordingTick"(): void
public static "throwIfFatalException"(): boolean
public "getAverageTickTimeNanos"(): long
public "enforceSecureProfile"(): boolean
public "shouldRconBroadcast"(): boolean
public "isTickTimeLoggingEnabled"(): boolean
public "setEnforceWhitelist"(arg0: boolean): void
public static "configurePackRepository"(arg0: $PackRepository$$Type, arg1: $WorldDataConfiguration$$Type, arg2: boolean, arg3: boolean): $WorldDataConfiguration
public "isSingleplayerOwner"(arg0: $GameProfile$$Type): boolean
public "reportChunkLoadFailure"(arg0: $Throwable$$Type, arg1: $RegionStorageInfo$$Type, arg2: $ChunkPos$$Type): void
public "reportChunkSaveFailure"(arg0: $Throwable$$Type, arg1: $RegionStorageInfo$$Type, arg2: $ChunkPos$$Type): void
public "setPlayerIdleTimeout"(arg0: integer): void
public "getXaero_OPAC_ServerData"(): $IServerDataAPI
public "isResourcePackRequired"(): boolean
public "mfix$getLastTickStartTime"(): long
public "fillServerSystemReport"(arg0: $SystemReport$$Type): $SystemReport
public "kickUnlistedPlayers"(arg0: $CommandSourceStack$$Type): void
public "getSingleplayerProfile"(): $GameProfile
public "getPreventProxyConnections"(): boolean
public "getCurrentSmoothedTickTime"(): float
public "stopRecordingMetrics"(): void
public "setSingleplayerProfile"(arg0: $GameProfile$$Type): void
public "isTimeProfilerRunning"(): boolean
public "setPreventProxyConnections"(arg0: boolean): void
public "getServerResourcePack"(): $Optional<($MinecraftServer$ServerResourcePackInfo)>
public "subscribeToDebugSample"(arg0: $ServerPlayer$$Type, arg1: $RemoteDebugSampleType$$Type): void
public "dumpServerProperties"(arg0: $Path$$Type): void
public "getScaledTrackingDistance"(arg0: integer): integer
public "getProfileRepository"(): $GameProfileRepository
public "getSpawnProtectionRadius"(): integer
public "getPlayerIdleTimeout"(): integer
public "getCompressionThreshold"(): integer
public "pw$createRuntimeDimension"(arg0: $ResourceKey$$Type, arg1: $Holder$$Type, arg2: $ChunkGenerator$$Type, arg3: long): $ServerLevel
public "pw$removeRuntimeDimension"(arg0: $ResourceKey$$Type): void
public "setXaeroMinimapServerData"(arg0: $MinecraftServerData$0$$Type): void
public "catnip$getStorageSource"(): $LevelStorageSource$LevelStorageAccess
public "getXaeroMinimapServerData"(): $MinecraftServerData$0
public "pw$getRuntimeLevels"(): $Map
public "setXaeroWorldMapServerData"(arg0: $MinecraftServerData$$Type): void
public "getXaeroWorldMapServerData"(): $MinecraftServerData
public "getProfiler"(): $ProfilerFiller
public "loadLevel"(): void
public "setXaero_OPAC_ServerData"(arg0: $IServerDataAPI$$Type): void
public "getCustomBossEvents"(): $CustomBossEvents
public "setDifficultyLocked"(arg0: boolean): void
public "waitForTasks"(): void
public "executeIfPossible"(arg0: $Runnable$$Type): void
public "setPort"(arg0: integer): void
public "setId"(arg0: StringJS): void
public "isRunning"(): boolean
public "getStatus"(): $ServerStatus
public "getProfileKeySignatureValidator"(): $SignatureValidator
public "getData"(): $AttachedData
public "getGameRules"(): $GameRules
public "getPersistentData"(): $CompoundTag
public "getKeyPair"(): $KeyPair
public "setDifficulty"(arg0: $Difficulty$$Type, arg1: boolean): void
public "getMotd"(): StringJS
public "cancelRecordingMetrics"(): void
public "finishRecordingMetrics"(): void
public "startRecordingMetrics"(arg0: $Consumer$$Type<($ProfileResults)>, arg1: $Consumer$$Type<($Path)>): void
public "setUsesAuthentication"(arg0: boolean): void
public "getScheduledEvents"(): $ScheduledEvents
public "scheduleExecutables"(): boolean
public "tickRateManager"(): $ServerTickRateManager
public "getOperatorUserPermissionLevel"(): integer
public "getRateLimitPacketsPerSecond"(): integer
public "getFunctionCompilationLevel"(): integer
public "pw$cleanupAllRuntimeDimensions"(): void
public "fabric_getOriginalKnownPacks"(): $List
public "getAllLevels"(): $Iterable<($ServerLevel)>
public "getFunctions"(): $ServerFunctionManager
public "isPvpAllowed"(): boolean
public "getSpawnRadius"(arg0: $ServerLevel$$Type): integer
public "getForcedGameType"(): $GameType
public "getDefaultGameType"(): $GameType
public "getTickTime"(arg0: $ResourceKey$$Type<($Level)>): (long)[]
public "stop"(): void
public "getLocalIp"(): StringJS
public "runServer"(): void
public "setLocalIp"(arg0: StringJS): void
public "setDemo"(arg0: boolean): void
public "setMotd"(arg0: StringJS): void
public "hasGui"(): boolean
public "logIPs"(): boolean
public "isCommandBlockEnabled"(): boolean
public "serverLinks"(): $ServerLinks
public "getCommandStorage"(): $CommandStorage
public "getTickCount"(): integer
public "overworld"(): $ServerLevel
public "getResourceManager"(): $ResourceManager
public "getRunningThread"(): $Thread
public "wrapRunnable"(arg0: $Runnable$$Type): $TickTask
public "getFixerUpper"(): $DataFixer
public "isSingleplayer"(): boolean
public "getStructureManager"(): $StructureTemplateManager
public "isUnderSpawnProtection"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type): boolean
public "getAbsoluteMaxWorldSize"(): integer
public "forceSynchronousWrites"(): boolean
public "forceTimeSynchronization"(): void
public "getProfileCache"(): $GameProfileCache
public "getChatDecorator"(): $ChatDecorator
public "isLevelEnabled"(arg0: $Level$$Type): boolean
public "acceptsFailure"(): boolean
public "acceptsSuccess"(): boolean
public "shouldInformAdmins"(): boolean
public "reloadableRegistries"(): $ReloadableServerRegistries$Holder
public "isPublished"(): boolean
public "potionBrewing"(): $PotionBrewing
public "createCommandSourceStack"(): $CommandSourceStack
public "getWorldPath"(arg0: $LevelResource$$Type): $Path
public "levelKeys"(): $Set<($ResourceKey<($Level)>)>
public "initServer"(): boolean
public "registryAccess"(): $RegistryAccess$Frozen
public "getAdvancements"(): $ServerAdvancementManager
public "getRecipeManager"(): $RecipeManager
public "logChatMessage"(arg0: $Component$$Type, arg1: $ChatType$Bound$$Type, arg2: StringJS): void
public "sendSystemMessage"(arg0: $Component$$Type): void
public "getCommands"(): $Commands
public "forceDifficulty"(): void
public "onServerExit"(): void
public "saveEverything"(arg0: boolean, arg1: boolean, arg2: boolean): boolean
public "onServerCrash"(arg0: $CrashReport$$Type): void
public "getModdedStatus"(): $ModCheck
public "saveAllChunks"(arg0: boolean, arg1: boolean, arg2: boolean): boolean
public "waitUntilNextTick"(): void
public "getServerModName"(): StringJS
public "createLevels"(arg0: $ChunkProgressListener$$Type): void
public static "setFatalException"(arg0: $RuntimeException$$Type): void
public "onTickRateChanged"(): void
public "getServerVersion"(): StringJS
public "initializeKeyPair"(): void
public "isFlightAllowed"(): boolean
public "setFlightAllowed"(arg0: boolean): void
public "setPlayerList"(arg0: $PlayerList$$Type): void
public "setPvpAllowed"(arg0: boolean): void
public "getSessionService"(): $MinecraftSessionService
public "getTickTimeLogger"(): $SampleLogger
public "invalidateStatus"(): void
public "getNextTickTime"(): long
public "hidesOnlinePlayers"(): boolean
public "getPlayerCount"(): integer
public "getPlayerNames"(): (StringJS)[]
public "tickChildren"(arg0: $BooleanSupplier$$Type): void
public "isSpawningMonsters"(): boolean
public "setDefaultGameType"(arg0: $GameType$$Type): void
public "publishServer"(arg0: $GameType$$Type, arg1: boolean, arg2: integer): boolean
public "getStatusJson"(): StringJS
public "reloadResources"(arg0: $Collection$$Type<(StringJS)>): $CompletableFuture<(void)>
public "addTickable"(arg0: $Runnable$$Type): void
public "isEnforceWhitelist"(): boolean
public "getMaxPlayers"(): integer
public "isEpollEnabled"(): boolean
public "usesAuthentication"(): boolean
public "repliesToStatus"(): boolean
/**
 * 
 * @deprecated
 */
public "markWorldsDirty"(): void
public "stopTimeProfiler"(): $ProfileResults
public "getPackRepository"(): $PackRepository
public "getTickTimesNanos"(): (long)[]
public "isRecordingMetrics"(): boolean
public "startTimeProfiler"(): void
/**
 * 
 * @deprecated
 */
public "forgeGetWorldMap"(): $Map<($ResourceKey<($Level)>), ($ServerLevel)>
public "getOverworld"(): $ServerLevel
public "acceptsTransfers"(): boolean
public "isCurrentlySaving"(): boolean
public "getServerDirectory"(): $Path
public "getServerResources"(): $MinecraftServer$ReloadableResources
public "getWorldData"(): $WorldData
public "fillSystemReport"(arg0: $SystemReport$$Type): $SystemReport
public "getScoreboard"(): $ServerScoreboard
public static "createMisplacedChunkReport"(arg0: $ChunkPos$$Type, arg1: $ChunkPos$$Type): $ReportedException
public "reportMisplacedChunk"(arg0: $ChunkPos$$Type, arg1: $ChunkPos$$Type, arg2: $RegionStorageInfo$$Type): void
public "alwaysAccepts"(): boolean
public "self"(): $MinecraftServer
public "tell"(message: $Component$$Type): void
public "getName"(): $Component
public "runCommand"(command: StringJS): void
public "sendData"(channel: StringJS, data: $CompoundTag$$Type): void
public "setActivePostShader"(id: $ResourceLocation$$Type): void
public "runCommandSilent"(command: StringJS): void
public "setStatusMessage"(message: $Component$$Type): void
public "getEntityByNetworkID"(id: integer): $Entity
public "getEntityByUUID"(id: $UUID$$Type): $Entity
public "getAdvancement"(id: $ResourceLocation$$Type): $AdvancementNode
public "getMcPlayers"(): $List<($Player)>
public "getMcEntities"(): $Iterable<($Entity)>
public "getPlayers"(): $EntityArrayList
public "getPlayer"(selector: $PlayerSelector$$Type): $ServerPlayer
public "getLevel"(dimension: $ResourceLocation$$Type): $ServerLevel
public "sendData"(channel: StringJS): void
public "schedule"(timer: $TemporalAmount$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "scheduleRepeatingInTicks"(ticks: $TickDuration$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "scheduleRepeating"(timer: $TemporalAmount$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "scheduleInTicks"(ticks: $TickDuration$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "getEntitiesWithin"(aabb: $AABB$$Type): $EntityArrayList
public "getEntities"(): $EntityArrayList
public "getDisplayName"(): $Component
public static "of"<Msg>(arg0: StringJS, arg1: $Consumer$$Type<(Msg)>): $ProcessorHandle<(Msg)>
get "connection"(): $ServerConnectionListener
get "port"(): integer
get "shutdown"(): boolean
get "spawningAnimals"(): boolean
get "dedicated"(): boolean
get "maxChainedNeighborUpdates"(): integer
get "worldScreenshotFile"(): $Optional<($Path)>
get "stopped"(): boolean
get "playerList"(): $PlayerList
get "demo"(): boolean
get "paused"(): boolean
get "hardcore"(): boolean
get "ready"(): boolean
get "averageTickTimeNanos"(): long
get "tickTimeLoggingEnabled"(): boolean
set "enforceWhitelist"(value: boolean)
set "playerIdleTimeout"(value: integer)
get "xaero_OPAC_ServerData"(): $IServerDataAPI
get "resourcePackRequired"(): boolean
get "singleplayerProfile"(): $GameProfile
get "preventProxyConnections"(): boolean
get "currentSmoothedTickTime"(): float
set "singleplayerProfile"(value: $GameProfile$$Type)
get "timeProfilerRunning"(): boolean
set "preventProxyConnections"(value: boolean)
get "serverResourcePack"(): $Optional<($MinecraftServer$ServerResourcePackInfo)>
get "profileRepository"(): $GameProfileRepository
get "spawnProtectionRadius"(): integer
get "playerIdleTimeout"(): integer
get "compressionThreshold"(): integer
set "xaeroMinimapServerData"(value: $MinecraftServerData$0$$Type)
get "xaeroMinimapServerData"(): $MinecraftServerData$0
set "xaeroWorldMapServerData"(value: $MinecraftServerData$$Type)
get "xaeroWorldMapServerData"(): $MinecraftServerData
get "profiler"(): $ProfilerFiller
set "xaero_OPAC_ServerData"(value: $IServerDataAPI$$Type)
get "customBossEvents"(): $CustomBossEvents
set "difficultyLocked"(value: boolean)
set "port"(value: integer)
set "id"(value: StringJS)
get "running"(): boolean
get "status"(): $ServerStatus
get "profileKeySignatureValidator"(): $SignatureValidator
get "data"(): $AttachedData
get "gameRules"(): $GameRules
get "persistentData"(): $CompoundTag
get "keyPair"(): $KeyPair
get "motd"(): StringJS
get "scheduledEvents"(): $ScheduledEvents
get "operatorUserPermissionLevel"(): integer
get "rateLimitPacketsPerSecond"(): integer
get "functionCompilationLevel"(): integer
get "allLevels"(): $Iterable<($ServerLevel)>
get "functions"(): $ServerFunctionManager
get "pvpAllowed"(): boolean
get "forcedGameType"(): $GameType
get "defaultGameType"(): $GameType
get "localIp"(): StringJS
set "localIp"(value: StringJS)
set "demo"(value: boolean)
set "motd"(value: StringJS)
get "commandBlockEnabled"(): boolean
get "commandStorage"(): $CommandStorage
get "tickCount"(): integer
get "resourceManager"(): $ResourceManager
get "runningThread"(): $Thread
get "fixerUpper"(): $DataFixer
get "singleplayer"(): boolean
get "structureManager"(): $StructureTemplateManager
get "absoluteMaxWorldSize"(): integer
get "profileCache"(): $GameProfileCache
get "chatDecorator"(): $ChatDecorator
get "published"(): boolean
get "advancements"(): $ServerAdvancementManager
get "recipeManager"(): $RecipeManager
get "commands"(): $Commands
get "moddedStatus"(): $ModCheck
get "serverModName"(): StringJS
set "fatalException"(value: $RuntimeException$$Type)
get "serverVersion"(): StringJS
get "flightAllowed"(): boolean
set "flightAllowed"(value: boolean)
set "playerList"(value: $PlayerList$$Type)
set "pvpAllowed"(value: boolean)
get "sessionService"(): $MinecraftSessionService
get "tickTimeLogger"(): $SampleLogger
get "nextTickTime"(): long
get "playerCount"(): integer
get "playerNames"(): (StringJS)[]
get "spawningMonsters"(): boolean
set "defaultGameType"(value: $GameType$$Type)
get "statusJson"(): StringJS
get "enforceWhitelist"(): boolean
get "maxPlayers"(): integer
get "epollEnabled"(): boolean
get "packRepository"(): $PackRepository
get "tickTimesNanos"(): (long)[]
get "recordingMetrics"(): boolean
get "currentlySaving"(): boolean
get "serverDirectory"(): $Path
get "serverResources"(): $MinecraftServer$ReloadableResources
get "scoreboard"(): $ServerScoreboard
get "name"(): $Component
set "activePostShader"(value: $ResourceLocation$$Type)
set "statusMessage"(value: $Component$$Type)
get "mcPlayers"(): $List<($Player)>
get "mcEntities"(): $Iterable<($Entity)>
get "players"(): $EntityArrayList
get "entities"(): $EntityArrayList
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftServer$$Type = ($MinecraftServer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinecraftServer$$Original = $MinecraftServer;}
declare module "net.minecraft.server.WorldLoader$PackConfig" {
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$PackRepository, $PackRepository$$Type} from "net.minecraft.server.packs.repository.PackRepository"
import {$CloseableResourceManager} from "net.minecraft.server.packs.resources.CloseableResourceManager"
import {$WorldDataConfiguration, $WorldDataConfiguration$$Type} from "net.minecraft.world.level.WorldDataConfiguration"
import {$Record} from "java.lang.Record"

export class $WorldLoader$PackConfig extends $Record {
constructor(packRepository: $PackRepository$$Type, initialDataConfig: $WorldDataConfiguration$$Type, safeMode: boolean, initMode: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "initialDataConfig"(): $WorldDataConfiguration
public "packRepository"(): $PackRepository
public "createResourceManager"(): $Pair<($WorldDataConfiguration), ($CloseableResourceManager)>
public "safeMode"(): boolean
public "initMode"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldLoader$PackConfig$$Type = ({"safeMode"?: boolean, "initialDataConfig"?: $WorldDataConfiguration$$Type, "packRepository"?: $PackRepository$$Type, "initMode"?: boolean}) | ([safeMode?: boolean, initialDataConfig?: $WorldDataConfiguration$$Type, packRepository?: $PackRepository$$Type, initMode?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldLoader$PackConfig$$Original = $WorldLoader$PackConfig;}
declare module "net.minecraft.server.PlayerAdvancements" {
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$ServerAdvancementManager$$Type} from "net.minecraft.server.ServerAdvancementManager"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$AdvancementHolder$$Type} from "net.minecraft.advancements.AdvancementHolder"
import {$Path$$Type} from "java.nio.file.Path"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$AdvancementProgress} from "net.minecraft.advancements.AdvancementProgress"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$PlayerList$$Type} from "net.minecraft.server.players.PlayerList"
import {$DataFixer$$Type} from "com.mojang.datafixers.DataFixer"

export class $PlayerAdvancements {
 "player": $ServerPlayer

constructor(arg0: $DataFixer$$Type, arg1: $PlayerList$$Type, arg2: $ServerAdvancementManager$$Type, arg3: $Path$$Type, arg4: $ServerPlayer$$Type)

public "save"(): void
public "reload"(arg0: $ServerAdvancementManager$$Type): void
public "stopListening"(): void
public "setSelectedTab"(arg0: $AdvancementHolder$$Type): void
public "getOrStartProgress"(arg0: $AdvancementHolder$$Type): $AdvancementProgress
public "award"(arg0: $AdvancementHolder$$Type, arg1: StringJS): boolean
public "flushDirty"(arg0: $ServerPlayer$$Type): void
public "revoke"(arg0: $AdvancementHolder$$Type, arg1: StringJS): boolean
public "handler$hci000$fabric_events_interaction_v0$preventOwnerOverride"(arg0: $ServerPlayer$$Type, arg1: $CallbackInfo$$Type): void
public "handler$hci000$fabric_events_interaction_v0$preventGrantCriterion"(arg0: $AdvancementHolder$$Type, arg1: StringJS, arg2: $CallbackInfoReturnable$$Type): void
public "setPlayer"(arg0: $ServerPlayer$$Type): void
public "modify$fnp000$discord_chat_mod$modifyAdvancementMessage"(component: $Component$$Type, advancementHolder: $AdvancementHolder$$Type): $Component
set "selectedTab"(value: $AdvancementHolder$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerAdvancements$$Type = ($PlayerAdvancements);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerAdvancements$$Original = $PlayerAdvancements;}
declare module "net.minecraft.server.ServerLinks" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ServerLinks$Entry, $ServerLinks$Entry$$Type} from "net.minecraft.server.ServerLinks$Entry"
import {$Optional} from "java.util.Optional"
import {$ServerLinks$KnownLinkType, $ServerLinks$KnownLinkType$$Type} from "net.minecraft.server.ServerLinks$KnownLinkType"
import {$Either} from "com.mojang.datafixers.util.Either"
import {$List, $List$$Type} from "java.util.List"
import {$ServerLinks$UntrustedEntry} from "net.minecraft.server.ServerLinks$UntrustedEntry"
import {$Component} from "net.minecraft.network.chat.Component"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $ServerLinks extends $Record {
static readonly "UNTRUSTED_LINKS_STREAM_CODEC": $StreamCodec<($ByteBuf), ($List<($ServerLinks$UntrustedEntry)>)>
static readonly "TYPE_STREAM_CODEC": $StreamCodec<($ByteBuf), ($Either<($ServerLinks$KnownLinkType), ($Component)>)>
static readonly "EMPTY": $ServerLinks

constructor(arg0: $List$$Type<($ServerLinks$Entry$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public "entries"(): $List<($ServerLinks$Entry)>
public "findKnownType"(arg0: $ServerLinks$KnownLinkType$$Type): $Optional<($ServerLinks$Entry)>
public "untrust"(): $List<($ServerLinks$UntrustedEntry)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerLinks$$Type = ({"entries"?: $List$$Type<($ServerLinks$Entry$$Type)>}) | ([entries?: $List$$Type<($ServerLinks$Entry$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerLinks$$Original = $ServerLinks;}
declare module "net.minecraft.server.ServerLinks$KnownLinkType" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ServerLinks$Entry} from "net.minecraft.server.ServerLinks$Entry"
import {$URI$$Type} from "java.net.URI"
import {$Enum} from "java.lang.Enum"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $ServerLinks$KnownLinkType extends $Enum<($ServerLinks$KnownLinkType)> {
static readonly "SUPPORT": $ServerLinks$KnownLinkType
static readonly "FORUMS": $ServerLinks$KnownLinkType
static readonly "STATUS": $ServerLinks$KnownLinkType
static readonly "ANNOUNCEMENTS": $ServerLinks$KnownLinkType
static readonly "COMMUNITY": $ServerLinks$KnownLinkType
static readonly "BUG_REPORT": $ServerLinks$KnownLinkType
static readonly "NEWS": $ServerLinks$KnownLinkType
static readonly "COMMUNITY_GUIDELINES": $ServerLinks$KnownLinkType
static readonly "FEEDBACK": $ServerLinks$KnownLinkType
static readonly "WEBSITE": $ServerLinks$KnownLinkType
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($ServerLinks$KnownLinkType)>

public static "values"(): ($ServerLinks$KnownLinkType)[]
public static "valueOf"(arg0: StringJS): $ServerLinks$KnownLinkType
public "create"(arg0: $URI$$Type): $ServerLinks$Entry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerLinks$KnownLinkType$$Type = (("bug_report") | ("community_guidelines") | ("support") | ("status") | ("feedback") | ("community") | ("website") | ("forums") | ("news") | ("announcements"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerLinks$KnownLinkType$$Original = $ServerLinks$KnownLinkType;}
declare module "net.minecraft.server.ReloadableServerRegistries$Holder" {
import {$HolderGetter$Provider} from "net.minecraft.core.HolderGetter$Provider"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$RegistryAccess$Frozen, $RegistryAccess$Frozen$$Type} from "net.minecraft.core.RegistryAccess$Frozen"
import {$Collection} from "java.util.Collection"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"

export class $ReloadableServerRegistries$Holder {
constructor(arg0: $RegistryAccess$Frozen$$Type)

public "get"(): $RegistryAccess$Frozen
public "lookup"(): $HolderGetter$Provider
public "getKeys"(arg0: $ResourceKey$$Type<($Registry<(never)>)>): $Collection<($ResourceLocation)>
public "getLootTable"(arg0: $ResourceKey$$Type<($LootTable)>): $LootTable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReloadableServerRegistries$Holder$$Type = ($ReloadableServerRegistries$Holder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReloadableServerRegistries$Holder$$Original = $ReloadableServerRegistries$Holder;}
declare module "net.minecraft.server.ServerLinks$Entry" {
import {$URI, $URI$$Type} from "java.net.URI"
import {$ServerLinks$KnownLinkType, $ServerLinks$KnownLinkType$$Type} from "net.minecraft.server.ServerLinks$KnownLinkType"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Record} from "java.lang.Record"

export class $ServerLinks$Entry extends $Record {
constructor(arg0: $Either$$Type<($ServerLinks$KnownLinkType$$Type), ($Component$$Type)>, arg1: $URI$$Type)

public "type"(): $Either<($ServerLinks$KnownLinkType), ($Component)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "displayName"(): $Component
public "link"(): $URI
public static "custom"(arg0: $Component$$Type, arg1: $URI$$Type): $ServerLinks$Entry
public static "knownType"(arg0: $ServerLinks$KnownLinkType$$Type, arg1: $URI$$Type): $ServerLinks$Entry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerLinks$Entry$$Type = ({"type"?: $Either$$Type<($ServerLinks$KnownLinkType$$Type), ($Component$$Type)>, "link"?: $URI$$Type}) | ([type?: $Either$$Type<($ServerLinks$KnownLinkType$$Type), ($Component$$Type)>, link?: $URI$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerLinks$Entry$$Original = $ServerLinks$Entry;}
declare module "net.minecraft.server.MinecraftServer$ServerResourcePackInfo" {
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Record} from "java.lang.Record"

export class $MinecraftServer$ServerResourcePackInfo extends $Record {
constructor(id: $UUID$$Type, url: StringJS, hash: StringJS, isRequired: boolean, prompt: $Component$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "hash"(): StringJS
public "url"(): StringJS
public "id"(): $UUID
public "prompt"(): $Component
public "isRequired"(): boolean
get "required"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftServer$ServerResourcePackInfo$$Type = ({"prompt"?: $Component$$Type, "isRequired"?: boolean, "url"?: StringJS, "hash"?: StringJS, "id"?: $UUID$$Type}) | ([prompt?: $Component$$Type, isRequired?: boolean, url?: StringJS, hash?: StringJS, id?: $UUID$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinecraftServer$ServerResourcePackInfo$$Original = $MinecraftServer$ServerResourcePackInfo;}
declare module "net.minecraft.server.WorldStem" {
import {$RegistryLayer, $RegistryLayer$$Type} from "net.minecraft.server.RegistryLayer"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$LayeredRegistryAccess, $LayeredRegistryAccess$$Type} from "net.minecraft.core.LayeredRegistryAccess"
import {$WorldData, $WorldData$$Type} from "net.minecraft.world.level.storage.WorldData"
import {$ReloadableServerResources, $ReloadableServerResources$$Type} from "net.minecraft.server.ReloadableServerResources"
import {$CloseableResourceManager, $CloseableResourceManager$$Type} from "net.minecraft.server.packs.resources.CloseableResourceManager"
import {$Record} from "java.lang.Record"

export class $WorldStem extends $Record implements $AutoCloseable$$Interface {
constructor(arg0: $CloseableResourceManager$$Type, arg1: $ReloadableServerResources$$Type, arg2: $LayeredRegistryAccess$$Type<($RegistryLayer$$Type)>, arg3: $WorldData$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "close"(): void
public "registries"(): $LayeredRegistryAccess<($RegistryLayer)>
public "worldData"(): $WorldData
public "resourceManager"(): $CloseableResourceManager
public "dataPackResources"(): $ReloadableServerResources
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldStem$$Type = ({"resourceManager"?: $CloseableResourceManager$$Type, "dataPackResources"?: $ReloadableServerResources$$Type, "registries"?: $LayeredRegistryAccess$$Type<($RegistryLayer$$Type)>, "worldData"?: $WorldData$$Type}) | ([resourceManager?: $CloseableResourceManager$$Type, dataPackResources?: $ReloadableServerResources$$Type, registries?: $LayeredRegistryAccess$$Type<($RegistryLayer$$Type)>, worldData?: $WorldData$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldStem$$Original = $WorldStem;}
declare module "net.minecraft.server.ServerTickRateManager" {
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$TickRateManager} from "net.minecraft.world.TickRateManager"
import {$MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"

export class $ServerTickRateManager extends $TickRateManager {
static readonly "MIN_TICKRATE": float
 "runGameElements": boolean

constructor(arg0: $MinecraftServer$$Type)

public "updateJoiningPlayer"(arg0: $ServerPlayer$$Type): void
public "checkShouldSprintThisTick"(): boolean
public "isSprinting"(): boolean
public "setTickRate"(arg0: float): void
public "setFrozen"(arg0: boolean): void
public "endTickWork"(): void
public "requestGameToSprint"(arg0: integer): boolean
public "stepGameIfPaused"(arg0: integer): boolean
public "stopSprinting"(): boolean
public "stopStepping"(): boolean
get "sprinting"(): boolean
set "tickRate"(value: float)
set "frozen"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerTickRateManager$$Type = ($ServerTickRateManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerTickRateManager$$Original = $ServerTickRateManager;}
declare module "net.minecraft.server.ServerInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ServerInfo$$Interface {
get "motd"(): StringJS
get "serverVersion"(): StringJS
get "playerCount"(): integer
get "maxPlayers"(): integer
}

export class $ServerInfo implements $ServerInfo$$Interface {
 "getMotd"(): StringJS
 "getServerVersion"(): StringJS
 "getPlayerCount"(): integer
 "getMaxPlayers"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerInfo$$Type = ($ServerInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerInfo$$Original = $ServerInfo;}
declare module "net.minecraft.server.ServerFunctionManager" {
import {$Iterable} from "java.lang.Iterable"
import {$CommandFunction, $CommandFunction$$Type} from "net.minecraft.commands.functions.CommandFunction"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Collection} from "java.util.Collection"
import {$Optional} from "java.util.Optional"
import {$IProfilingServerFunctionManager$$Interface} from "org.embeddedt.modernfix.duck.IProfilingServerFunctionManager"
import {$CommandDispatcher} from "com.mojang.brigadier.CommandDispatcher"
import {$ServerFunctionLibrary$$Type} from "net.minecraft.server.ServerFunctionLibrary"
import {$CommandSourceStack, $CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"
import {$MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"

export class $ServerFunctionManager implements $IProfilingServerFunctionManager$$Interface {
constructor(arg0: $MinecraftServer$$Type, arg1: $ServerFunctionLibrary$$Type)

public "get"(arg0: $ResourceLocation$$Type): $Optional<($CommandFunction<($CommandSourceStack)>)>
public "execute"(arg0: $CommandFunction$$Type<($CommandSourceStack$$Type)>, arg1: $CommandSourceStack$$Type): void
public "tick"(): void
public "getTag"(arg0: $ResourceLocation$$Type): $Collection<($CommandFunction<($CommandSourceStack)>)>
public "getDispatcher"(): $CommandDispatcher<($CommandSourceStack)>
public "mfix$getProfilingResults"(): StringJS
public "getGameLoopSender"(): $CommandSourceStack
public "replaceLibrary"(arg0: $ServerFunctionLibrary$$Type): void
public "getTagNames"(): $Iterable<($ResourceLocation)>
public "getFunctionNames"(): $Iterable<($ResourceLocation)>
get "dispatcher"(): $CommandDispatcher<($CommandSourceStack)>
get "gameLoopSender"(): $CommandSourceStack
get "tagNames"(): $Iterable<($ResourceLocation)>
get "functionNames"(): $Iterable<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerFunctionManager$$Type = ($ServerFunctionManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerFunctionManager$$Original = $ServerFunctionManager;}
declare module "net.minecraft.server.MinecraftServer$ReloadableResources" {
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$ReloadableServerResources, $ReloadableServerResources$$Type} from "net.minecraft.server.ReloadableServerResources"
import {$CloseableResourceManager, $CloseableResourceManager$$Type} from "net.minecraft.server.packs.resources.CloseableResourceManager"
import {$Record} from "java.lang.Record"

export class $MinecraftServer$ReloadableResources extends $Record implements $AutoCloseable$$Interface {
constructor(resourceManager: $CloseableResourceManager$$Type, managers: $ReloadableServerResources$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "close"(): void
public "managers"(): $ReloadableServerResources
public "resourceManager"(): $CloseableResourceManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftServer$ReloadableResources$$Type = ({"resourceManager"?: $CloseableResourceManager$$Type, "managers"?: $ReloadableServerResources$$Type}) | ([resourceManager?: $CloseableResourceManager$$Type, managers?: $ReloadableServerResources$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinecraftServer$ReloadableResources$$Original = $MinecraftServer$ReloadableResources;}
declare module "net.minecraft.server.ServerScoreboard" {
import {$List} from "java.util.List"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$ScoreboardSaveData} from "net.minecraft.world.scores.ScoreboardSaveData"
import {$Score$$Type} from "net.minecraft.world.scores.Score"
import {$Objective$$Type} from "net.minecraft.world.scores.Objective"
import {$ScoreHolder$$Type} from "net.minecraft.world.scores.ScoreHolder"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$PlayerTeam$$Type} from "net.minecraft.world.scores.PlayerTeam"
import {$SavedData$Factory} from "net.minecraft.world.level.saveddata.SavedData$Factory"
import {$Scoreboard} from "net.minecraft.world.scores.Scoreboard"
import {$MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$DisplaySlot$$Type} from "net.minecraft.world.scores.DisplaySlot"

export class $ServerScoreboard extends $Scoreboard {
static readonly "HIDDEN_SCORE_PREFIX": StringJS

constructor(arg0: $MinecraftServer$$Type)

public "getObjectiveDisplaySlotCount"(arg0: $Objective$$Type): integer
public "setDisplayObjective"(arg0: $DisplaySlot$$Type, arg1: $Objective$$Type): void
public "removePlayerFromTeam"(arg0: StringJS, arg1: $PlayerTeam$$Type): void
public "onPlayerScoreRemoved"(arg0: $ScoreHolder$$Type, arg1: $Objective$$Type): void
public "stopTrackingObjective"(arg0: $Objective$$Type): void
public "startTrackingObjective"(arg0: $Objective$$Type): void
public "onObjectiveAdded"(arg0: $Objective$$Type): void
public "onPlayerRemoved"(arg0: $ScoreHolder$$Type): void
public "onTeamRemoved"(arg0: $PlayerTeam$$Type): void
public "onObjectiveChanged"(arg0: $Objective$$Type): void
public "onObjectiveRemoved"(arg0: $Objective$$Type): void
public "onTeamAdded"(arg0: $PlayerTeam$$Type): void
public "onScoreChanged"(arg0: $ScoreHolder$$Type, arg1: $Objective$$Type, arg2: $Score$$Type): void
public "onScoreLockChanged"(arg0: $ScoreHolder$$Type, arg1: $Objective$$Type): void
public "onTeamChanged"(arg0: $PlayerTeam$$Type): void
public "setDirty"(): void
public "getStopTrackingPackets"(arg0: $Objective$$Type): $List<($Packet<(never)>)>
public "getStartTrackingPackets"(arg0: $Objective$$Type): $List<($Packet<(never)>)>
public "addDirtyListener"(arg0: $Runnable$$Type): void
public "dataFactory"(): $SavedData$Factory<($ScoreboardSaveData)>
public "addPlayerToTeam"(arg0: StringJS, arg1: $PlayerTeam$$Type): boolean
get "dirty"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerScoreboard$$Type = ($ServerScoreboard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerScoreboard$$Original = $ServerScoreboard;}
declare module "net.minecraft.server.RegistryLayer" {
import {$Enum} from "java.lang.Enum"
import {$LayeredRegistryAccess} from "net.minecraft.core.LayeredRegistryAccess"

export class $RegistryLayer extends $Enum<($RegistryLayer)> {
static readonly "WORLDGEN": $RegistryLayer
static readonly "DIMENSIONS": $RegistryLayer
static readonly "RELOADABLE": $RegistryLayer
static readonly "STATIC": $RegistryLayer

public static "values"(): ($RegistryLayer)[]
public static "valueOf"(arg0: StringJS): $RegistryLayer
public static "createRegistryAccess"(): $LayeredRegistryAccess<($RegistryLayer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryLayer$$Type = (("static") | ("worldgen") | ("dimensions") | ("reloadable"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistryLayer$$Original = $RegistryLayer;}
