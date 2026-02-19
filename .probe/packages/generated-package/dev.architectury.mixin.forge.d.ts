declare module "dev.architectury.mixin.forge.neoforge.LiquidBlockAccessor" {
import {$FlowingFluid, $FlowingFluid$$Type} from "net.minecraft.world.level.material.FlowingFluid"

export interface $LiquidBlockAccessor$$Interface {

(): $FlowingFluid$$Type
get "fluid"(): $FlowingFluid
}

export class $LiquidBlockAccessor implements $LiquidBlockAccessor$$Interface {
 "getFluid"(): $FlowingFluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LiquidBlockAccessor$$Type = (() => $FlowingFluid$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LiquidBlockAccessor$$Original = $LiquidBlockAccessor;}
