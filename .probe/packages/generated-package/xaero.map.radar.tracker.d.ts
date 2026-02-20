declare module "xaero.map.radar.tracker.synced.ClientSyncedTrackedPlayerManager" {
import {$Iterable} from "java.lang.Iterable"
import {$UUID$$Type} from "java.util.UUID"
import {$SyncedTrackedPlayer} from "xaero.map.server.radar.tracker.SyncedTrackedPlayer"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export class $ClientSyncedTrackedPlayerManager {
constructor()

public "remove"(arg0: $UUID$$Type): void
public "reset"(): void
public "update"(arg0: $UUID$$Type, arg1: double, arg2: double, arg3: double, arg4: $ResourceKey$$Type<($Level)>): void
public "getPlayers"(): $Iterable<($SyncedTrackedPlayer)>
get "players"(): $Iterable<($SyncedTrackedPlayer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientSyncedTrackedPlayerManager$$Type = ($ClientSyncedTrackedPlayerManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientSyncedTrackedPlayerManager$$Original = $ClientSyncedTrackedPlayerManager;}
