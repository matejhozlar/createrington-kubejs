declare module "xaero.common.server.mods.SupportWorldMapServer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SupportWorldMapServer {
constructor()

public "supportsTrackedPlayers"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SupportWorldMapServer$$Type = ($SupportWorldMapServer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SupportWorldMapServer$$Original = $SupportWorldMapServer;}
declare module "xaero.common.server.mods.argonauts.SupportArgonautsServer" {
import {$ISyncedPlayerTrackerSystem} from "xaero.common.server.radar.tracker.ISyncedPlayerTrackerSystem"

export class $SupportArgonautsServer {
constructor()

public "getSyncedPlayerTrackerSystem"(): $ISyncedPlayerTrackerSystem
get "syncedPlayerTrackerSystem"(): $ISyncedPlayerTrackerSystem
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SupportArgonautsServer$$Type = ($SupportArgonautsServer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SupportArgonautsServer$$Original = $SupportArgonautsServer;}
declare module "xaero.common.server.mods.opac.SupportOPACServer" {
import {$ServerPlayerData$$Type} from "xaero.common.server.player.ServerPlayerData"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $SupportOPACServer {
constructor()

public "getReceiveLocationsFromPartyConfigValue"(arg0: $ServerPlayer$$Type): boolean
public "getReceiveLocationsFromMutualAlliesConfigValue"(arg0: $ServerPlayer$$Type): boolean
public "isPositionSyncAllowed"(arg0: integer, arg1: $ServerPlayerData$$Type, arg2: boolean): boolean
public "updateShareLocationConfigValues"(arg0: $ServerPlayer$$Type, arg1: $ServerPlayerData$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SupportOPACServer$$Type = ($SupportOPACServer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SupportOPACServer$$Original = $SupportOPACServer;}
declare module "xaero.common.server.mods.ftbteams.SupportFTBTeamsServer" {
import {$ISyncedPlayerTrackerSystem} from "xaero.common.server.radar.tracker.ISyncedPlayerTrackerSystem"

export class $SupportFTBTeamsServer {
constructor()

public "getSyncedPlayerTrackerSystem"(): $ISyncedPlayerTrackerSystem
get "syncedPlayerTrackerSystem"(): $ISyncedPlayerTrackerSystem
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SupportFTBTeamsServer$$Type = ($SupportFTBTeamsServer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SupportFTBTeamsServer$$Original = $SupportFTBTeamsServer;}
declare module "xaero.common.server.mods.SupportServerMods" {
import {$SupportOPACServer} from "xaero.common.server.mods.opac.SupportOPACServer"
import {$SupportWorldMapServer} from "xaero.common.server.mods.SupportWorldMapServer"
import {$IXaeroMinimap$$Type} from "xaero.common.IXaeroMinimap"
import {$SupportFTBTeamsServer} from "xaero.common.server.mods.ftbteams.SupportFTBTeamsServer"
import {$SupportArgonautsServer} from "xaero.common.server.mods.argonauts.SupportArgonautsServer"

export class $SupportServerMods {
constructor()

public "check"(arg0: $IXaeroMinimap$$Type): void
public "getOpac"(): $SupportOPACServer
public "hasOpac"(): boolean
public "hasFtbTeams"(): boolean
public "getArgonauts"(): $SupportArgonautsServer
public "getWorldmap"(): $SupportWorldMapServer
public "getFtbTeams"(): $SupportFTBTeamsServer
public "hasArgonauts"(): boolean
public "hasWorldmap"(): boolean
get "opac"(): $SupportOPACServer
get "argonauts"(): $SupportArgonautsServer
get "worldmap"(): $SupportWorldMapServer
get "ftbTeams"(): $SupportFTBTeamsServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SupportServerMods$$Type = ($SupportServerMods);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SupportServerMods$$Original = $SupportServerMods;}
