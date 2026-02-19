declare module "com.simibubi.create.compat.computercraft.AbstractComputerBehaviour" {
import {$SmartBlockEntity, $SmartBlockEntity$$Type} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$BlockEntityBehaviour} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$BehaviourType} from "com.simibubi.create.foundation.blockEntity.behaviour.BehaviourType"

export class $AbstractComputerBehaviour extends $BlockEntityBehaviour {
 "blockEntity": $SmartBlockEntity
static readonly "TYPE": $BehaviourType<($AbstractComputerBehaviour)>

constructor(arg0: $SmartBlockEntity$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractComputerBehaviour$$Type = ($AbstractComputerBehaviour);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractComputerBehaviour$$Original = $AbstractComputerBehaviour;}
