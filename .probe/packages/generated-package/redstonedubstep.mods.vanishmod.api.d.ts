declare module "redstonedubstep.mods.vanishmod.api.PlayerVanishEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $PlayerVanishEvent extends $PlayerEvent {
constructor(arg0: $Player$$Type, arg1: boolean)

public "isVanished"(): boolean
public "getEntity"(): $Entity
get "vanished"(): boolean
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerVanishEvent$$Type = ($PlayerVanishEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerVanishEvent$$Original = $PlayerVanishEvent;}
