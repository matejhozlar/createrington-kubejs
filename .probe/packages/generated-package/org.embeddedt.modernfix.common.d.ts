declare module "org.embeddedt.modernfix.common.mixin.perf.reduce_blockstate_cache_rebuilds.BlockBehaviourInvoker" {
import {$FluidState} from "net.minecraft.world.level.material.FluidState"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $BlockBehaviourInvoker$$Interface {
}

export class $BlockBehaviourInvoker implements $BlockBehaviourInvoker$$Interface {
 "invokeGetFluidState"(arg0: $BlockState$$Type): $FluidState
 "invokeIsRandomlyTicking"(arg0: $BlockState$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBehaviourInvoker$$Type = ($BlockBehaviourInvoker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockBehaviourInvoker$$Original = $BlockBehaviourInvoker;}
