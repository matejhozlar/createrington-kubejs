declare module "plus.dragons.createcentralkitchen.mixin.create.DeployerBlockEntityAccessor" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $DeployerBlockEntityAccessor$$Interface {

(): $ItemStack$$Type
get "heldItem"(): $ItemStack
}

export class $DeployerBlockEntityAccessor implements $DeployerBlockEntityAccessor$$Interface {
 "getHeldItem"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeployerBlockEntityAccessor$$Type = (() => $ItemStack$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DeployerBlockEntityAccessor$$Original = $DeployerBlockEntityAccessor;}
