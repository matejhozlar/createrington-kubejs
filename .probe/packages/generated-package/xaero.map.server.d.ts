declare module "xaero.map.server.MinecraftServerData" {
import {$SyncedPlayerTracker, $SyncedPlayerTracker$$Type} from "xaero.map.server.radar.tracker.SyncedPlayerTracker"
import {$LevelMapProperties} from "xaero.map.server.level.LevelMapProperties"
import {$Path$$Type} from "java.nio.file.Path"
import {$SyncedPlayerTrackerSystemManager, $SyncedPlayerTrackerSystemManager$$Type} from "xaero.map.server.radar.tracker.SyncedPlayerTrackerSystemManager"
import {$MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"

export class $MinecraftServerData {
constructor(arg0: $SyncedPlayerTrackerSystemManager$$Type, arg1: $SyncedPlayerTracker$$Type)

public static "get"(arg0: $MinecraftServer$$Type): $MinecraftServerData
public "getLevelProperties"(arg0: $Path$$Type): $LevelMapProperties
public "getSyncedPlayerTracker"(): $SyncedPlayerTracker
public "getSyncedPlayerTrackerSystemManager"(): $SyncedPlayerTrackerSystemManager
get "syncedPlayerTracker"(): $SyncedPlayerTracker
get "syncedPlayerTrackerSystemManager"(): $SyncedPlayerTrackerSystemManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftServerData$$Type = ($MinecraftServerData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinecraftServerData$$Original = $MinecraftServerData;}
declare module "xaero.map.server.IMinecraftServer" {
import {$MinecraftServerData, $MinecraftServerData$$Type} from "xaero.map.server.MinecraftServerData"

export interface $IMinecraftServer$$Interface {
get "xaeroWorldMapServerData"(): $MinecraftServerData
set "xaeroWorldMapServerData"(value: $MinecraftServerData$$Type)
}

export class $IMinecraftServer implements $IMinecraftServer$$Interface {
 "getXaeroWorldMapServerData"(): $MinecraftServerData
 "setXaeroWorldMapServerData"(arg0: $MinecraftServerData$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMinecraftServer$$Type = ($IMinecraftServer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMinecraftServer$$Original = $IMinecraftServer;}
