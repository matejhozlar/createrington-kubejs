declare module "tschipp.carryon.events.EntityPickupEvent" {
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $EntityPickupEvent extends $Event implements $ICancellableEvent$$Interface {
readonly "player": $ServerPlayer
readonly "target": $Entity

constructor(arg0: $ServerPlayer$$Type, arg1: $Entity$$Type)

public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityPickupEvent$$Type = ($EntityPickupEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityPickupEvent$$Original = $EntityPickupEvent;}
