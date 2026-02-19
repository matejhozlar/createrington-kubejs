declare module "com.jesz.createdieselgenerators.events.EntityTickEvent" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $EntityTickEvent extends $Event {
 "entity": $Entity

constructor(arg0: any)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityTickEvent$$Type = ($EntityTickEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityTickEvent$$Original = $EntityTickEvent;}
