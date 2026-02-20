declare module "xaero.common.interfaces.render.InterfaceRenderer" {
import {$CustomVertexConsumers} from "xaero.common.graphics.CustomVertexConsumers"
import {$IXaeroMinimap$$Type} from "xaero.common.IXaeroMinimap"

/**
 * 
 * @deprecated
 */
export class $InterfaceRenderer {
constructor(arg0: $IXaeroMinimap$$Type)

public "getCustomVertexConsumers"(): $CustomVertexConsumers
get "customVertexConsumers"(): $CustomVertexConsumers
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InterfaceRenderer$$Type = ($InterfaceRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InterfaceRenderer$$Original = $InterfaceRenderer;}
