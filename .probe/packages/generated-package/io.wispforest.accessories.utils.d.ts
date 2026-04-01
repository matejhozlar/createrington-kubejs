declare module "io.wispforest.accessories.utils.ItemStackMutation" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$EventStream} from "io.wispforest.owo.util.EventStream"

export interface $ItemStackMutation$$Interface {

(arg0: $ItemStack, arg1: $List<($DataComponentType<(never)>)>): void
}

export class $ItemStackMutation implements $ItemStackMutation$$Interface {
static "getEvent"(stack: $ItemStack$$Type): $EventStream<($ItemStackMutation)>
 "onMutation"(arg0: $ItemStack$$Type, arg1: $List$$Type<($DataComponentType$$Type<(never)>)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackMutation$$Type = ((arg0: $ItemStack, arg1: $List<($DataComponentType<(never)>)>) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemStackMutation$$Original = $ItemStackMutation;}
