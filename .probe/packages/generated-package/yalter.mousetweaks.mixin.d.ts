declare module "yalter.mousetweaks.mixin.AbstractContainerScreenAccessor" {
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$ClickType$$Type} from "net.minecraft.world.inventory.ClickType"

export interface $AbstractContainerScreenAccessor$$Interface {
}

export class $AbstractContainerScreenAccessor implements $AbstractContainerScreenAccessor$$Interface {
 "mousetweaks$getIsQuickCrafting"(): boolean
 "mousetweaks$getQuickCraftingButton"(): integer
 "mousetweaks$setIsQuickCrafting"(arg0: boolean): void
 "mousetweaks$setSkipNextRelease"(arg0: boolean): void
 "mousetweaks$invokeSlotClicked"(arg0: $Slot$$Type, arg1: integer, arg2: integer, arg3: $ClickType$$Type): void
 "mousetweaks$invokeFindSlot"(arg0: double, arg1: double): $Slot
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractContainerScreenAccessor$$Type = ($AbstractContainerScreenAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractContainerScreenAccessor$$Original = $AbstractContainerScreenAccessor;}
