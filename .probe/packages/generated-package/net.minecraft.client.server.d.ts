declare module "net.minecraft.client.server.IntegratedServer" {
import {$LevelSettings} from "net.minecraft.world.level.LevelSettings"
import {$LevelStorageSource$LevelStorageAccess, $LevelStorageSource$LevelStorageAccess$$Type} from "net.minecraft.world.level.storage.LevelStorageSource$LevelStorageAccess"
import {$UUID$$Type} from "java.util.UUID"
import {$MinecraftServer$ReloadableResources} from "net.minecraft.server.MinecraftServer$ReloadableResources"
import {$RegionStorageInfo$$Type} from "net.minecraft.world.level.chunk.storage.RegionStorageInfo"
import {$ProcessorHandle} from "net.minecraft.util.thread.ProcessorHandle"
import {$Proxy} from "java.net.Proxy"
import {$WorldStem$$Type} from "net.minecraft.server.WorldStem"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$GameType, $GameType$$Type} from "net.minecraft.world.level.GameType"
import {$SystemReport, $SystemReport$$Type} from "net.minecraft.SystemReport"
import {$PlayerDataStorage} from "net.minecraft.world.level.storage.PlayerDataStorage"
import {$LocalSampleLogger} from "net.minecraft.util.debugchart.LocalSampleLogger"
import {$CrashReport$$Type} from "net.minecraft.CrashReport"
import {$PackRepository$$Type} from "net.minecraft.server.packs.repository.PackRepository"
import {$Thread$$Type} from "java.lang.Thread"
import {$BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"
import {$ChunkProgressListenerFactory$$Type} from "net.minecraft.server.level.progress.ChunkProgressListenerFactory"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$ModCheck} from "net.minecraft.util.ModCheck"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ReportedException} from "net.minecraft.ReportedException"
import {$WorldData} from "net.minecraft.world.level.storage.WorldData"
import {$Path} from "java.nio.file.Path"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$Services, $Services$$Type} from "net.minecraft.server.Services"
import {$MinecraftServer} from "net.minecraft.server.MinecraftServer"

export class $IntegratedServer extends $MinecraftServer {
static readonly "VANILLA_BRAND": StringJS
readonly "proxy": $Proxy
static readonly "ANONYMOUS_PLAYER_PROFILE": $GameProfile
 "nextTickTimeNanos": long
 "resources": $MinecraftServer$ReloadableResources
readonly "worldData": $WorldData
readonly "services": $Services
readonly "storageSource": $LevelStorageSource$LevelStorageAccess
static readonly "ABSOLUTE_MAX_WORLD_SIZE": integer
static readonly "DEMO_SETTINGS": $LevelSettings
readonly "playerDataStorage": $PlayerDataStorage

constructor(arg0: $Thread$$Type, arg1: $Minecraft$$Type, arg2: $LevelStorageSource$LevelStorageAccess$$Type, arg3: $PackRepository$$Type, arg4: $WorldStem$$Type, arg5: $Services$$Type, arg6: $ChunkProgressListenerFactory$$Type)

public "getPort"(): integer
public "halt"(arg0: boolean): void
public "isPaused"(): boolean
public "getRateLimitPacketsPerSecond"(): integer
public "getOperatorUserPermissionLevel"(): integer
public "getFunctionCompilationLevel"(): integer
public "isDedicated"(): boolean
public "forceSynchronousWrites"(): boolean
public "shouldInformAdmins"(): boolean
public "getForcedGameType"(): $GameType
public "tickServer"(arg0: $BooleanSupplier$$Type): void
public "isPublished"(): boolean
public "isCommandBlockEnabled"(): boolean
public "initServer"(): boolean
public "setUUID"(arg0: $UUID$$Type): void
public "stop"(): void
public "isTickTimeLoggingEnabled"(): boolean
public "shouldRconBroadcast"(): boolean
public "getScaledTrackingDistance"(arg0: integer): integer
public "isSingleplayerOwner"(arg0: $GameProfile$$Type): boolean
public "fillServerSystemReport"(arg0: $SystemReport$$Type): $SystemReport
public "reportChunkLoadFailure"(arg0: $Throwable$$Type, arg1: $RegionStorageInfo$$Type, arg2: $ChunkPos$$Type): void
public "reportChunkSaveFailure"(arg0: $Throwable$$Type, arg1: $RegionStorageInfo$$Type, arg2: $ChunkPos$$Type): void
public "getModdedStatus"(): $ModCheck
public "saveEverything"(arg0: boolean, arg1: boolean, arg2: boolean): boolean
public "onServerCrash"(arg0: $CrashReport$$Type): void
public "isEpollEnabled"(): boolean
public "setDefaultGameType"(arg0: $GameType$$Type): void
public "getTickTimeLogger"(): $LocalSampleLogger
public "publishServer"(arg0: $GameType$$Type, arg1: boolean, arg2: integer): boolean
public "getServerDirectory"(): $Path
public static "createMisplacedChunkReport"(arg0: $ChunkPos$$Type, arg1: $ChunkPos$$Type): $ReportedException
public static "of"<Msg>(arg0: StringJS, arg1: $Consumer$$Type<(Msg)>): $ProcessorHandle<(Msg)>
get "port"(): integer
get "paused"(): boolean
get "rateLimitPacketsPerSecond"(): integer
get "operatorUserPermissionLevel"(): integer
get "functionCompilationLevel"(): integer
get "dedicated"(): boolean
get "forcedGameType"(): $GameType
get "published"(): boolean
get "commandBlockEnabled"(): boolean
set "UUID"(value: $UUID$$Type)
get "tickTimeLoggingEnabled"(): boolean
get "moddedStatus"(): $ModCheck
get "epollEnabled"(): boolean
set "defaultGameType"(value: $GameType$$Type)
get "tickTimeLogger"(): $LocalSampleLogger
get "serverDirectory"(): $Path
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntegratedServer$$Type = ($IntegratedServer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntegratedServer$$Original = $IntegratedServer;}
