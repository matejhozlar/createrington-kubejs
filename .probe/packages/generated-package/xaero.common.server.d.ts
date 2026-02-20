declare module "xaero.common.server.MinecraftServerData" {
import {$LevelMapProperties} from "xaero.common.server.level.LevelMapProperties"
import {$IXaeroMinimap, $IXaeroMinimap$$Type} from "xaero.common.IXaeroMinimap"
import {$SyncedPlayerTrackerSystemManager, $SyncedPlayerTrackerSystemManager$$Type} from "xaero.common.server.radar.tracker.SyncedPlayerTrackerSystemManager"
import {$Path$$Type} from "java.nio.file.Path"
import {$SyncedPlayerTracker, $SyncedPlayerTracker$$Type} from "xaero.common.server.radar.tracker.SyncedPlayerTracker"
import {$MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"

export class $MinecraftServerData {
constructor(arg0: $SyncedPlayerTrackerSystemManager$$Type, arg1: $SyncedPlayerTracker$$Type, arg2: $IXaeroMinimap$$Type)

public static "get"(arg0: $MinecraftServer$$Type): $MinecraftServerData
public "getLevelProperties"(arg0: $Path$$Type): $LevelMapProperties
public "getModMain"(): $IXaeroMinimap
public "getSyncedPlayerTracker"(): $SyncedPlayerTracker
public "getSyncedPlayerTrackerSystemManager"(): $SyncedPlayerTrackerSystemManager
get "modMain"(): $IXaeroMinimap
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
declare module "xaero.common.server.IMinecraftServer" {
import {$MinecraftServerData, $MinecraftServerData$$Type} from "xaero.common.server.MinecraftServerData"

export interface $IMinecraftServer$$Interface {
get "xaeroMinimapServerData"(): $MinecraftServerData
set "xaeroMinimapServerData"(value: $MinecraftServerData$$Type)
}

export class $IMinecraftServer implements $IMinecraftServer$$Interface {
 "getXaeroMinimapServerData"(): $MinecraftServerData
 "setXaeroMinimapServerData"(arg0: $MinecraftServerData$$Type): void
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
