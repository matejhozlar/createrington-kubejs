declare module "xaero.common.server.radar.tracker.ISyncedPlayerTrackerSystem" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"

export interface $ISyncedPlayerTrackerSystem$$Interface {
get "partySystem"(): boolean
}

export class $ISyncedPlayerTrackerSystem implements $ISyncedPlayerTrackerSystem$$Interface {
 "isPartySystem"(): boolean
 "getTrackingLevel"(arg0: $Player$$Type, arg1: $Player$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISyncedPlayerTrackerSystem$$Type = ($ISyncedPlayerTrackerSystem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISyncedPlayerTrackerSystem$$Original = $ISyncedPlayerTrackerSystem;}
declare module "xaero.common.server.radar.tracker.SyncedPlayerTracker" {
import {$MinecraftServerData$$Type} from "xaero.common.server.MinecraftServerData"
import {$IXaeroMinimap$$Type} from "xaero.common.IXaeroMinimap"
import {$ServerPlayerData$$Type} from "xaero.common.server.player.ServerPlayerData"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"

export class $SyncedPlayerTracker {
constructor(arg0: $IXaeroMinimap$$Type)

public "onTick"(arg0: $MinecraftServer$$Type, arg1: $ServerPlayer$$Type, arg2: $MinecraftServerData$$Type, arg3: $ServerPlayerData$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncedPlayerTracker$$Type = ($SyncedPlayerTracker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SyncedPlayerTracker$$Original = $SyncedPlayerTracker;}
declare module "xaero.common.server.radar.tracker.SyncedPlayerTrackerSystemManager" {
import {$Iterable} from "java.lang.Iterable"
import {$ISyncedPlayerTrackerSystem, $ISyncedPlayerTrackerSystem$$Type} from "xaero.common.server.radar.tracker.ISyncedPlayerTrackerSystem"

export class $SyncedPlayerTrackerSystemManager {
constructor()

public "register"(arg0: StringJS, arg1: $ISyncedPlayerTrackerSystem$$Type): void
public "getSystems"(): $Iterable<($ISyncedPlayerTrackerSystem)>
get "systems"(): $Iterable<($ISyncedPlayerTrackerSystem)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncedPlayerTrackerSystemManager$$Type = ($SyncedPlayerTrackerSystemManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SyncedPlayerTrackerSystemManager$$Original = $SyncedPlayerTrackerSystemManager;}
declare module "xaero.common.server.radar.tracker.SyncedTrackedPlayer" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export class $SyncedTrackedPlayer {
constructor(arg0: $UUID$$Type, arg1: double, arg2: double, arg3: double, arg4: $ResourceKey$$Type<($Level)>)

public "update"(arg0: $Player$$Type): void
public "getId"(): $UUID
public "copyFrom"(arg0: $SyncedTrackedPlayer$$Type): void
public "getX"(): double
public "getZ"(): double
public "getDimensionKey"(): $ResourceKey<($Level)>
public "matchesEnough"(arg0: $Player$$Type, arg1: double): boolean
public "getY"(): double
public "setPos"(arg0: double, arg1: double, arg2: double): $SyncedTrackedPlayer
public "setDimension"(arg0: $ResourceKey$$Type<($Level)>): $SyncedTrackedPlayer
get "id"(): $UUID
get "x"(): double
get "z"(): double
get "dimensionKey"(): $ResourceKey<($Level)>
get "y"(): double
set "dimension"(value: $ResourceKey$$Type<($Level)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncedTrackedPlayer$$Type = ($SyncedTrackedPlayer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SyncedTrackedPlayer$$Original = $SyncedTrackedPlayer;}
