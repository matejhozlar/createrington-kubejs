declare module "com.lightning.northstar.mixin.accessor.FlowingFluidAccessor" {
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $FlowingFluidAccessor$$Interface {

(arg0: $LevelAccessor, arg1: $BlockPos, arg2: $BlockState): void
}

export class $FlowingFluidAccessor implements $FlowingFluidAccessor$$Interface {
 "northstar$beforeDestroyingBlock"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlowingFluidAccessor$$Type = ((arg0: $LevelAccessor, arg1: $BlockPos, arg2: $BlockState) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FlowingFluidAccessor$$Original = $FlowingFluidAccessor;}
