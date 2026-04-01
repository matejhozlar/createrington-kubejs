declare module "net.irisshaders.iris.api.v0.item.IrisItemLightProvider" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Vector3f} from "org.joml.Vector3f"

export interface $IrisItemLightProvider$$Interface {
}

export class $IrisItemLightProvider implements $IrisItemLightProvider$$Interface {
static readonly "DEFAULT_LIGHT_COLOR": $Vector3f

 "getLightColor"(arg0: $Player$$Type, arg1: $ItemStack$$Type): $Vector3f
 "getLightEmission"(arg0: $Player$$Type, arg1: $ItemStack$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IrisItemLightProvider$$Type = ($IrisItemLightProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IrisItemLightProvider$$Original = $IrisItemLightProvider;}
