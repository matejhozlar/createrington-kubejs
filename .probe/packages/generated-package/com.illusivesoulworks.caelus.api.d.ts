declare module "com.illusivesoulworks.caelus.api.RenderCapeEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $RenderCapeEvent extends $PlayerEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Player$$Type)

public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
public "getEntity"(): $Entity
get "canceled"(): boolean
set "canceled"(value: boolean)
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderCapeEvent$$Type = ($RenderCapeEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderCapeEvent$$Original = $RenderCapeEvent;}
