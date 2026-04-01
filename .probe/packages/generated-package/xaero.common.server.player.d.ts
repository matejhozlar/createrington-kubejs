declare module "xaero.common.server.player.ServerPlayerData" {
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Set} from "java.util.Set"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$SyncedTrackedPlayer} from "xaero.common.server.radar.tracker.SyncedTrackedPlayer"

export class $ServerPlayerData {
constructor(arg0: $UUID$$Type)

public static "get"(arg0: $ServerPlayer$$Type): $ServerPlayerData
public "ensureLastSyncedData"(): $SyncedTrackedPlayer
public "getCurrentlySyncedPlayers"(): $Set<($UUID)>
public "setLastTrackedPlayerSync"(arg0: long): void
public "getLastTrackedPlayerSync"(): long
public "setClientModNetworkVersion"(arg0: integer): void
public "getClientModNetworkVersion"(): integer
public "hasMod"(): boolean
public "ensureCurrentlySyncedPlayers"(): $Set<($UUID)>
public "getOpacData"(): any
public "setOpacData"(arg0: any): void
public "getLastSyncedData"(): $SyncedTrackedPlayer
get "currentlySyncedPlayers"(): $Set<($UUID)>
set "lastTrackedPlayerSync"(value: long)
get "lastTrackedPlayerSync"(): long
set "clientModNetworkVersion"(value: integer)
get "clientModNetworkVersion"(): integer
get "opacData"(): any
set "opacData"(value: any)
get "lastSyncedData"(): $SyncedTrackedPlayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayerData$$Type = ($ServerPlayerData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerPlayerData$$Original = $ServerPlayerData;}
declare module "xaero.common.server.player.IServerPlayer" {
import {$ServerPlayerData, $ServerPlayerData$$Type} from "xaero.common.server.player.ServerPlayerData"

export interface $IServerPlayer$$Interface {
set "xaeroMinimapPlayerData"(value: $ServerPlayerData$$Type)
get "xaeroMinimapPlayerData"(): $ServerPlayerData
}

export class $IServerPlayer implements $IServerPlayer$$Interface {
 "setXaeroMinimapPlayerData"(arg0: $ServerPlayerData$$Type): void
 "getXaeroMinimapPlayerData"(): $ServerPlayerData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerPlayer$$Type = ($IServerPlayer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IServerPlayer$$Original = $IServerPlayer;}
declare module "xaero.common.server.player.ServerPlayerTickHandler" {
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $ServerPlayerTickHandler {
constructor()

public "tick"(arg0: $ServerPlayer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayerTickHandler$$Type = ($ServerPlayerTickHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerPlayerTickHandler$$Original = $ServerPlayerTickHandler;}
