declare module "com.agent772.parallelworlds.mixin.IStructureManagerAccessor" {
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"

export interface $IStructureManagerAccessor$$Interface {

(): $LevelAccessor$$Type
}

export class $IStructureManagerAccessor implements $IStructureManagerAccessor$$Interface {
 "pw$getLevel"(): $LevelAccessor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStructureManagerAccessor$$Type = (() => $LevelAccessor$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IStructureManagerAccessor$$Original = $IStructureManagerAccessor;}
