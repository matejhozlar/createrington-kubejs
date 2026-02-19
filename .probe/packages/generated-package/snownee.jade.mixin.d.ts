declare module "snownee.jade.mixin.EntityAccess" {
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $EntityAccess$$Interface {

(): $Component$$Type
}

export class $EntityAccess implements $EntityAccess$$Interface {
 "callGetTypeName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityAccess$$Type = (() => $Component$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityAccess$$Original = $EntityAccess;}
declare module "snownee.jade.mixin.AbstractFurnaceBlockEntityAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AbstractFurnaceBlockEntityAccess$$Interface {
get "cookingProgress"(): integer
get "cookingTotalTime"(): integer
}

export class $AbstractFurnaceBlockEntityAccess implements $AbstractFurnaceBlockEntityAccess$$Interface {
 "getCookingProgress"(): integer
 "getCookingTotalTime"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractFurnaceBlockEntityAccess$$Type = ($AbstractFurnaceBlockEntityAccess);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractFurnaceBlockEntityAccess$$Original = $AbstractFurnaceBlockEntityAccess;}
