declare module "com.agent772.createshufflefilter.mixins.BlockEntityBehaviourAccessor" {
import {$SmartBlockEntity, $SmartBlockEntity$$Type} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"

export interface $BlockEntityBehaviourAccessor$$Interface {

(): $SmartBlockEntity$$Type
get "blockEntity"(): $SmartBlockEntity
}

export class $BlockEntityBehaviourAccessor implements $BlockEntityBehaviourAccessor$$Interface {
 "getBlockEntity"(): $SmartBlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityBehaviourAccessor$$Type = (() => $SmartBlockEntity$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEntityBehaviourAccessor$$Original = $BlockEntityBehaviourAccessor;}
