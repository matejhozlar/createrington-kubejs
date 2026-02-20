declare module "net.minecraft.world.inventory.BeaconMenu" {
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional$$Type} from "java.util.Optional"
import {$List} from "java.util.List"
import {$ContainerSynchronizer} from "net.minecraft.world.inventory.ContainerSynchronizer"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$ContainerData$$Type} from "net.minecraft.world.inventory.ContainerData"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$ContainerLevelAccess$$Type} from "net.minecraft.world.inventory.ContainerLevelAccess"
import {$MenuType} from "net.minecraft.world.inventory.MenuType"
import {$Set} from "java.util.Set"

export class $BeaconMenu extends $AbstractContainerMenu {
readonly "quickcraftSlots": $Set<($Slot)>
 "remoteCarried": $ItemStack
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
static readonly "$assertionsDisabled": boolean
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "quickcraftType": integer
 "synchronizer": $ContainerSynchronizer
 "menuType": $MenuType<(never)>
readonly "containerListeners": $List<($ContainerListener)>
 "quickcraftStatus": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Container$$Type)
constructor(arg0: integer, arg1: $Container$$Type, arg2: $ContainerData$$Type, arg3: $ContainerLevelAccess$$Type)

public "removed"(arg0: $Player$$Type): void
public "hasPayment"(): boolean
public "handler$ehc000$deeperdarker$stillValid"(arg0: $Player$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "getPrimaryEffect"(): $Holder<($MobEffect)>
public static "encodeEffect"(arg0: $Holder$$Type<($MobEffect)>): integer
public static "decodeEffect"(arg0: integer): $Holder<($MobEffect)>
public "updateEffects"(arg0: ($Holder$$Type<($MobEffect$$Type)>)?, arg1: ($Holder$$Type<($MobEffect$$Type)>)?): void
public "getSecondaryEffect"(): $Holder<($MobEffect)>
public "setData"(arg0: integer, arg1: integer): void
public "stillValid"(arg0: $Player$$Type): boolean
public "getLevels"(): integer
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
get "primaryEffect"(): $Holder<($MobEffect)>
get "secondaryEffect"(): $Holder<($MobEffect)>
get "levels"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeaconMenu$$Type = ($BeaconMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BeaconMenu$$Original = $BeaconMenu;}
declare module "net.minecraft.world.inventory.GrindstoneMenu" {
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$ContainerSynchronizer} from "net.minecraft.world.inventory.ContainerSynchronizer"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$ContainerLevelAccess$$Type} from "net.minecraft.world.inventory.ContainerLevelAccess"
import {$MenuType} from "net.minecraft.world.inventory.MenuType"
import {$Set} from "java.util.Set"

export class $GrindstoneMenu extends $AbstractContainerMenu {
readonly "quickcraftSlots": $Set<($Slot)>
static readonly "ADDITIONAL_SLOT": integer
 "remoteCarried": $ItemStack
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
static readonly "INPUT_SLOT": integer
readonly "repairSlots": $Container
static readonly "$assertionsDisabled": boolean
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "MAX_NAME_LENGTH": integer
static readonly "RESULT_SLOT": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "quickcraftType": integer
 "synchronizer": $ContainerSynchronizer
 "menuType": $MenuType<(never)>
readonly "containerListeners": $List<($ContainerListener)>
 "quickcraftStatus": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $ContainerLevelAccess$$Type)

public "removed"(arg0: $Player$$Type): void
public "computeResult"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): $ItemStack
public "handler$ehc000$deeperdarker$stillValid"(arg0: $Player$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "stillValid"(arg0: $Player$$Type): boolean
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "slotsChanged"(arg0: $Container$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GrindstoneMenu$$Type = ($GrindstoneMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GrindstoneMenu$$Original = $GrindstoneMenu;}
declare module "net.minecraft.world.inventory.RecipeBookType" {
import {$Enum} from "java.lang.Enum"
import {$ExtensionInfo} from "net.neoforged.fml.common.asm.enumextension.ExtensionInfo"
import {$IExtensibleEnum$$Interface} from "net.neoforged.fml.common.asm.enumextension.IExtensibleEnum"

export class $RecipeBookType extends $Enum<($RecipeBookType)> implements $IExtensibleEnum$$Interface {
static readonly "FURNACE": $RecipeBookType
static readonly "BLAST_FURNACE": $RecipeBookType
static readonly "SMOKER": $RecipeBookType
static readonly "FARMERSDELIGHT_COOKING": $RecipeBookType
static readonly "CRAFTING": $RecipeBookType
static readonly "REFURBISHED_FURNITURE_FREEZER": $RecipeBookType
static readonly "REFURBISHED_FURNITURE_MICROWAVE": $RecipeBookType
static readonly "REFURBISHED_FURNITURE_OVEN": $RecipeBookType

public static "values"(): ($RecipeBookType)[]
public static "valueOf"(arg0: StringJS): $RecipeBookType
public static "getExtensionInfo"(): $ExtensionInfo
get "extensionInfo"(): $ExtensionInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeBookType$$Type = (("crafting") | ("furnace") | ("blast_furnace") | ("smoker") | ("farmersdelight_cooking") | ("refurbished_furniture_freezer") | ("refurbished_furniture_microwave") | ("refurbished_furniture_oven"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeBookType$$Original = $RecipeBookType;}
declare module "net.minecraft.world.inventory.RecipeBookMenu" {
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$ContainerSynchronizer} from "net.minecraft.world.inventory.ContainerSynchronizer"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RecipeInput} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeBookType} from "net.minecraft.world.inventory.RecipeBookType"
import {$MenuType, $MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$Set} from "java.util.Set"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$RecipeBookCategories} from "net.minecraft.client.RecipeBookCategories"
import {$StackedContents$$Type} from "net.minecraft.world.entity.player.StackedContents"

export class $RecipeBookMenu<I extends $RecipeInput, R extends $Recipe<(object)>> extends $AbstractContainerMenu {
readonly "quickcraftSlots": $Set<($Slot)>
 "remoteCarried": $ItemStack
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "quickcraftType": integer
 "synchronizer": $ContainerSynchronizer
 "menuType": $MenuType<(never)>
readonly "containerListeners": $List<($ContainerListener)>
 "quickcraftStatus": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: $MenuType$$Type<(never)>, arg1: integer)

public "getSize"(): integer
public "fillCraftSlotsStackedContents"(arg0: $StackedContents$$Type): void
public "clearCraftingContent"(): void
public "getRecipeBookCategories"(): $List<($RecipeBookCategories)>
public "finishPlacingRecipe"(arg0: $RecipeHolder$$Type<(R)>): void
public "shouldMoveToInventory"(arg0: integer): boolean
public "getRecipeBookType"(): $RecipeBookType
public "getGridWidth"(): integer
public "handlePlacement"(arg0: boolean, arg1: $RecipeHolder$$Type<(never)>, arg2: $ServerPlayer$$Type): void
public "recipeMatches"(arg0: $RecipeHolder$$Type<(R)>): boolean
public "getResultSlotIndex"(): integer
public "beginPlacingRecipe"(): void
public "getGridHeight"(): integer
get "size"(): integer
get "recipeBookCategories"(): $List<($RecipeBookCategories)>
get "recipeBookType"(): $RecipeBookType
get "gridWidth"(): integer
get "resultSlotIndex"(): integer
get "gridHeight"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeBookMenu$$Type<I, R> = ($RecipeBookMenu<(I), (R)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeBookMenu$$Original<I, R> = $RecipeBookMenu<(I), (R)>;}
declare module "net.minecraft.world.inventory.ClickType" {
import {$Enum} from "java.lang.Enum"

export class $ClickType extends $Enum<($ClickType)> {
static readonly "QUICK_MOVE": $ClickType
static readonly "SWAP": $ClickType
static readonly "PICKUP_ALL": $ClickType
static readonly "THROW": $ClickType
static readonly "QUICK_CRAFT": $ClickType
static readonly "PICKUP": $ClickType
static readonly "CLONE": $ClickType

public static "values"(): ($ClickType)[]
public static "valueOf"(arg0: StringJS): $ClickType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClickType$$Type = (("pickup") | ("quick_move") | ("swap") | ("clone") | ("throw") | ("quick_craft") | ("pickup_all"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClickType$$Original = $ClickType;}
declare module "net.minecraft.world.inventory.ContainerSynchronizer" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$NonNullList$$Type} from "net.minecraft.core.NonNullList"

export interface $ContainerSynchronizer$$Interface {
}

export class $ContainerSynchronizer implements $ContainerSynchronizer$$Interface {
 "sendInitialData"(arg0: $AbstractContainerMenu$$Type, arg1: $NonNullList$$Type<($ItemStack$$Type)>, arg2: $ItemStack$$Type, arg3: (integer)[]): void
 "sendDataChange"(arg0: $AbstractContainerMenu$$Type, arg1: integer, arg2: integer): void
 "sendCarriedChange"(arg0: $AbstractContainerMenu$$Type, arg1: $ItemStack$$Type): void
 "sendSlotChange"(arg0: $AbstractContainerMenu$$Type, arg1: integer, arg2: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerSynchronizer$$Type = ($ContainerSynchronizer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContainerSynchronizer$$Original = $ContainerSynchronizer;}
declare module "net.minecraft.world.inventory.StonecutterMenu" {
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$ContainerSynchronizer} from "net.minecraft.world.inventory.ContainerSynchronizer"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$StonecutterRecipe} from "net.minecraft.world.item.crafting.StonecutterRecipe"
import {$RecipeHolder} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$ContainerLevelAccess$$Type} from "net.minecraft.world.inventory.ContainerLevelAccess"
import {$MenuType} from "net.minecraft.world.inventory.MenuType"
import {$Set} from "java.util.Set"
import {$ResultContainer} from "net.minecraft.world.inventory.ResultContainer"

export class $StonecutterMenu extends $AbstractContainerMenu {
readonly "container": $Container
readonly "quickcraftSlots": $Set<($Slot)>
 "lastSoundTime": long
 "slotUpdateListener": $Runnable
 "remoteCarried": $ItemStack
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
readonly "resultSlot": $Slot
readonly "inputSlot": $Slot
readonly "resultContainer": $ResultContainer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
static readonly "INPUT_SLOT": integer
static readonly "$assertionsDisabled": boolean
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "RESULT_SLOT": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "quickcraftType": integer
 "synchronizer": $ContainerSynchronizer
 "menuType": $MenuType<(never)>
readonly "containerListeners": $List<($ContainerListener)>
 "quickcraftStatus": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $ContainerLevelAccess$$Type)

public "getType"(): $MenuType<(never)>
public "removed"(arg0: $Player$$Type): void
public "canTakeItemForPickAll"(arg0: $ItemStack$$Type, arg1: $Slot$$Type): boolean
public "getNumRecipes"(): integer
public "hasInputItem"(): boolean
public "setupResultSlot"(): void
public "handler$ehc000$deeperdarker$stillValid"(arg0: $Player$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "getRecipes"(): $List<($RecipeHolder<($StonecutterRecipe)>)>
public "stillValid"(arg0: $Player$$Type): boolean
public "registerUpdateListener"(arg0: $Runnable$$Type): void
public "getSelectedRecipeIndex"(): integer
public "clickMenuButton"(arg0: $Player$$Type, arg1: integer): boolean
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "slotsChanged"(arg0: $Container$$Type): void
get "type"(): $MenuType<(never)>
get "numRecipes"(): integer
get "upResultSlot"(): void
get "recipes"(): $List<($RecipeHolder<($StonecutterRecipe)>)>
get "selectedRecipeIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StonecutterMenu$$Type = ($StonecutterMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StonecutterMenu$$Original = $StonecutterMenu;}
declare module "net.minecraft.world.inventory.AbstractFurnaceMenu" {
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SingleRecipeInput} from "net.minecraft.world.item.crafting.SingleRecipeInput"
import {$RecipeBookMenu} from "net.minecraft.world.inventory.RecipeBookMenu"
import {$List} from "java.util.List"
import {$RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level} from "net.minecraft.world.level.Level"
import {$AbstractCookingRecipe, $AbstractCookingRecipe$$Type} from "net.minecraft.world.item.crafting.AbstractCookingRecipe"
import {$ContainerSynchronizer} from "net.minecraft.world.inventory.ContainerSynchronizer"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$ContainerData$$Type} from "net.minecraft.world.inventory.ContainerData"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$RecipeBookType, $RecipeBookType$$Type} from "net.minecraft.world.inventory.RecipeBookType"
import {$MenuType, $MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$Set} from "java.util.Set"
import {$StackedContents$$Type} from "net.minecraft.world.entity.player.StackedContents"

export class $AbstractFurnaceMenu extends $RecipeBookMenu<($SingleRecipeInput), ($AbstractCookingRecipe)> {
readonly "quickcraftSlots": $Set<($Slot)>
 "remoteCarried": $ItemStack
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
readonly "level": $Level
static readonly "$assertionsDisabled": boolean
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "INGREDIENT_SLOT": integer
static readonly "DATA_COUNT": integer
static readonly "RESULT_SLOT": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_COUNT": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "quickcraftType": integer
 "synchronizer": $ContainerSynchronizer
 "menuType": $MenuType<(never)>
readonly "containerListeners": $List<($ContainerListener)>
 "quickcraftStatus": integer
static readonly "FUEL_SLOT": integer

constructor(arg0: $MenuType$$Type<(never)>, arg1: $RecipeType$$Type<($AbstractCookingRecipe$$Type)>, arg2: $RecipeBookType$$Type, arg3: integer, arg4: $Inventory$$Type)
constructor(arg0: $MenuType$$Type<(never)>, arg1: $RecipeType$$Type<($AbstractCookingRecipe$$Type)>, arg2: $RecipeBookType$$Type, arg3: integer, arg4: $Inventory$$Type, arg5: $Container$$Type, arg6: $ContainerData$$Type)

public "getSize"(): integer
public "canSmelt"(arg0: $ItemStack$$Type): boolean
public "fillCraftSlotsStackedContents"(arg0: $StackedContents$$Type): void
public "isFuel"(arg0: $ItemStack$$Type): boolean
public "isLit"(): boolean
public "handler$ehc000$deeperdarker$stillValid"(arg0: $Player$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "clearCraftingContent"(): void
public "shouldMoveToInventory"(arg0: integer): boolean
public "getBurnProgress"(): float
public "getLitProgress"(): float
public "stillValid"(arg0: $Player$$Type): boolean
public "getRecipeBookType"(): $RecipeBookType
public "getGridWidth"(): integer
public "recipeMatches"(arg0: $RecipeHolder$$Type<($AbstractCookingRecipe$$Type)>): boolean
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "getResultSlotIndex"(): integer
public "getGridHeight"(): integer
get "size"(): integer
get "lit"(): boolean
get "burnProgress"(): float
get "litProgress"(): float
get "recipeBookType"(): $RecipeBookType
get "gridWidth"(): integer
get "resultSlotIndex"(): integer
get "gridHeight"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractFurnaceMenu$$Type = ($AbstractFurnaceMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractFurnaceMenu$$Original = $AbstractFurnaceMenu;}
declare module "net.minecraft.world.inventory.DataSlot" {
import {$ContainerData$$Type} from "net.minecraft.world.inventory.ContainerData"

export class $DataSlot {
constructor()

public "get"(): integer
public "set"(arg0: integer): void
public static "shared"(arg0: (integer)[], arg1: integer): $DataSlot
public static "standalone"(): $DataSlot
public static "forContainer"(arg0: $ContainerData$$Type, arg1: integer): $DataSlot
public "checkAndClearUpdateFlag"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataSlot$$Type = ($DataSlot);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DataSlot$$Original = $DataSlot;}
declare module "net.minecraft.world.inventory.BlastFurnaceMenu" {
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Level} from "net.minecraft.world.level.Level"
import {$ContainerSynchronizer} from "net.minecraft.world.inventory.ContainerSynchronizer"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$ContainerData$$Type} from "net.minecraft.world.inventory.ContainerData"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractFurnaceMenu} from "net.minecraft.world.inventory.AbstractFurnaceMenu"
import {$MenuType} from "net.minecraft.world.inventory.MenuType"
import {$Set} from "java.util.Set"

export class $BlastFurnaceMenu extends $AbstractFurnaceMenu {
readonly "quickcraftSlots": $Set<($Slot)>
 "remoteCarried": $ItemStack
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
readonly "level": $Level
static readonly "$assertionsDisabled": boolean
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "INGREDIENT_SLOT": integer
static readonly "DATA_COUNT": integer
static readonly "RESULT_SLOT": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_COUNT": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "quickcraftType": integer
 "synchronizer": $ContainerSynchronizer
 "menuType": $MenuType<(never)>
readonly "containerListeners": $List<($ContainerListener)>
 "quickcraftStatus": integer
static readonly "FUEL_SLOT": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $Container$$Type, arg3: $ContainerData$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlastFurnaceMenu$$Type = ($BlastFurnaceMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlastFurnaceMenu$$Original = $BlastFurnaceMenu;}
declare module "net.minecraft.world.inventory.HopperMenu" {
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$ContainerSynchronizer} from "net.minecraft.world.inventory.ContainerSynchronizer"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$MenuType} from "net.minecraft.world.inventory.MenuType"
import {$Set} from "java.util.Set"

export class $HopperMenu extends $AbstractContainerMenu {
readonly "quickcraftSlots": $Set<($Slot)>
 "remoteCarried": $ItemStack
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
static readonly "$assertionsDisabled": boolean
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "quickcraftType": integer
 "synchronizer": $ContainerSynchronizer
static readonly "CONTAINER_SIZE": integer
 "menuType": $MenuType<(never)>
readonly "containerListeners": $List<($ContainerListener)>
 "quickcraftStatus": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $Container$$Type)

public "removed"(arg0: $Player$$Type): void
public "handler$ehc000$deeperdarker$stillValid"(arg0: $Player$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "stillValid"(arg0: $Player$$Type): boolean
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HopperMenu$$Type = ($HopperMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HopperMenu$$Original = $HopperMenu;}
declare module "net.minecraft.world.inventory.DispenserMenu" {
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$ContainerSynchronizer} from "net.minecraft.world.inventory.ContainerSynchronizer"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$MenuType} from "net.minecraft.world.inventory.MenuType"
import {$Set} from "java.util.Set"

export class $DispenserMenu extends $AbstractContainerMenu {
readonly "quickcraftSlots": $Set<($Slot)>
 "remoteCarried": $ItemStack
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
static readonly "$assertionsDisabled": boolean
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "quickcraftType": integer
 "synchronizer": $ContainerSynchronizer
 "menuType": $MenuType<(never)>
readonly "containerListeners": $List<($ContainerListener)>
 "quickcraftStatus": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $Container$$Type)

public "removed"(arg0: $Player$$Type): void
public "handler$ehc000$deeperdarker$stillValid"(arg0: $Player$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "stillValid"(arg0: $Player$$Type): boolean
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DispenserMenu$$Type = ($DispenserMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DispenserMenu$$Original = $DispenserMenu;}
declare module "net.minecraft.world.inventory.Slot" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$SlotAccessor$$Interface} from "net.blay09.mods.balm.mixin.SlotAccessor"
import {$SlotAccessor$$Interface as $SlotAccessor$0$$Interface} from "net.dawson.adorablehamsterpets.mixin.accessor.SlotAccessor"

export class $Slot implements $SlotAccessor$$Interface, $SlotAccessor$0$$Interface {
readonly "container": $Container
 "x": integer
 "index": integer
 "y": integer

constructor(arg0: $Container$$Type, arg1: integer, arg2: integer, arg3: integer)

public "hasItem"(): boolean
public "remove"(arg0: integer): $ItemStack
public "set"(arg0: $ItemStack$$Type): void
public "isActive"(): boolean
public "getItem"(): $ItemStack
public "adorablehamsterpets$getInventory"(): $Container
public "setY"(arg0: integer): void
public "setX"(arg0: integer): void
public "mayPlace"(arg0: $ItemStack$$Type): boolean
public "isFake"(): boolean
public "mayPickup"(arg0: $Player$$Type): boolean
public "allowModification"(arg0: $Player$$Type): boolean
public "tryRemove"(arg0: integer, arg1: integer, arg2: $Player$$Type): $Optional<($ItemStack)>
public "onTake"(arg0: $Player$$Type, arg1: $ItemStack$$Type): void
public "safeTake"(arg0: integer, arg1: integer, arg2: $Player$$Type): $ItemStack
public "safeInsert"(arg0: $ItemStack$$Type, arg1: integer): $ItemStack
public "safeInsert"(arg0: $ItemStack$$Type): $ItemStack
public "getMaxStackSize"(arg0: $ItemStack$$Type): integer
public "getMaxStackSize"(): integer
public "setBackground"(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type): $Slot
public "getNoItemIcon"(): $Pair<($ResourceLocation), ($ResourceLocation)>
public "isHighlightable"(): boolean
public "isSameInventory"(arg0: $Slot$$Type): boolean
public "getSlotIndex"(): integer
public "setChanged"(): void
public "checkTakeAchievements"(arg0: $ItemStack$$Type): void
public "setByPlayer"(arg0: $ItemStack$$Type): void
public "setByPlayer"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): void
public "onSwapCraft"(arg0: integer): void
public "getContainerSlot"(): integer
public "onQuickCraft"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): void
public "onQuickCraft"(arg0: $ItemStack$$Type, arg1: integer): void
get "active"(): boolean
get "item"(): $ItemStack
get "fake"(): boolean
get "maxStackSize"(): integer
get "noItemIcon"(): $Pair<($ResourceLocation), ($ResourceLocation)>
get "highlightable"(): boolean
get "slotIndex"(): integer
get "changed"(): void
set "byPlayer"(value: $ItemStack$$Type)
get "containerSlot"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Slot$$Type = ($Slot);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Slot$$Original = $Slot;}
declare module "net.minecraft.world.inventory.AnvilMenu" {
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$DataSlot} from "net.minecraft.world.inventory.DataSlot"
import {$List} from "java.util.List"
import {$ContainerSynchronizer} from "net.minecraft.world.inventory.ContainerSynchronizer"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$ItemCombinerMenu} from "net.minecraft.world.inventory.ItemCombinerMenu"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemCombinerMenuSlotDefinition} from "net.minecraft.world.inventory.ItemCombinerMenuSlotDefinition"
import {$Container} from "net.minecraft.world.Container"
import {$ContainerLevelAccess, $ContainerLevelAccess$$Type} from "net.minecraft.world.inventory.ContainerLevelAccess"
import {$MenuType} from "net.minecraft.world.inventory.MenuType"
import {$Set} from "java.util.Set"
import {$ResultContainer} from "net.minecraft.world.inventory.ResultContainer"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AnvilMenu extends $ItemCombinerMenu {
readonly "quickcraftSlots": $Set<($Slot)>
 "repairItemCountCost": integer
 "access": $ContainerLevelAccess
static readonly "ADDITIONAL_SLOT": integer
 "remoteCarried": $ItemStack
readonly "resultSlots": $ResultContainer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
 "itemName": StringJS
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
readonly "player": $Player
static readonly "INPUT_SLOT": integer
readonly "cost": $DataSlot
static readonly "$assertionsDisabled": boolean
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "MAX_NAME_LENGTH": integer
readonly "inputSlots": $Container
static readonly "RESULT_SLOT": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "quickcraftType": integer
 "synchronizer": $ContainerSynchronizer
 "menuType": $MenuType<(never)>
readonly "containerListeners": $List<($ContainerListener)>
 "quickcraftStatus": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $ContainerLevelAccess$$Type)

public "mayPickup"(arg0: $Player$$Type, arg1: boolean): boolean
public "isValidBlock"(arg0: $BlockState$$Type): boolean
public "createResult"(): void
public "setItemName"(arg0: StringJS): boolean
public "setMaximumCost"(arg0: long): void
public "onTake"(arg0: $Player$$Type, arg1: $ItemStack$$Type): void
public "getCost"(): integer
public static "calculateIncreasedRepairCost"(arg0: integer): integer
public "createInputSlotDefinitions"(): $ItemCombinerMenuSlotDefinition
set "maximumCost"(value: long)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnvilMenu$$Type = ($AnvilMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnvilMenu$$Original = $AnvilMenu;}
declare module "net.minecraft.world.inventory.CraftingMenu" {
import {$AccessorCraftingMenu$$Interface} from "com.illusivesoulworks.polymorph.mixin.core.AccessorCraftingMenu"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeBookMenu} from "net.minecraft.world.inventory.RecipeBookMenu"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ContainerLevelAccess$$Type} from "net.minecraft.world.inventory.ContainerLevelAccess"
import {$RecipeBookType} from "net.minecraft.world.inventory.RecipeBookType"
import {$Set} from "java.util.Set"
import {$ResultContainer, $ResultContainer$$Type} from "net.minecraft.world.inventory.ResultContainer"
import {$CraftingInput} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ContainerSynchronizer} from "net.minecraft.world.inventory.ContainerSynchronizer"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$MenuType} from "net.minecraft.world.inventory.MenuType"
import {$CraftingRecipe, $CraftingRecipe$$Type} from "net.minecraft.world.item.crafting.CraftingRecipe"
import {$CraftingContainer, $CraftingContainer$$Type} from "net.minecraft.world.inventory.CraftingContainer"
import {$StackedContents$$Type} from "net.minecraft.world.entity.player.StackedContents"

export class $CraftingMenu extends $RecipeBookMenu<($CraftingInput), ($CraftingRecipe)> implements $AccessorCraftingMenu$$Interface {
readonly "quickcraftSlots": $Set<($Slot)>
 "remoteCarried": $ItemStack
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
static readonly "$assertionsDisabled": boolean
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "RESULT_SLOT": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "quickcraftType": integer
 "synchronizer": $ContainerSynchronizer
 "menuType": $MenuType<(never)>
readonly "containerListeners": $List<($ContainerListener)>
 "quickcraftStatus": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
readonly "player": $Player

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $ContainerLevelAccess$$Type)

public "getSize"(): integer
public "removed"(arg0: $Player$$Type): void
public "canTakeItemForPickAll"(arg0: $ItemStack$$Type, arg1: $Slot$$Type): boolean
public "fillCraftSlotsStackedContents"(arg0: $StackedContents$$Type): void
public "handler$ehc000$deeperdarker$stillValid"(arg0: $Player$$Type, arg1: $CallbackInfoReturnable$$Type): void
public static "slotChangedCraftingGrid"(arg0: $AbstractContainerMenu$$Type, arg1: $Level$$Type, arg2: $Player$$Type, arg3: $CraftingContainer$$Type, arg4: $ResultContainer$$Type, arg5: $RecipeHolder$$Type<($CraftingRecipe$$Type)>): void
public "clearCraftingContent"(): void
public "finishPlacingRecipe"(arg0: $RecipeHolder$$Type<($CraftingRecipe$$Type)>): void
public "shouldMoveToInventory"(arg0: integer): boolean
public "getPlayer"(): $Player
public "getCraftSlots"(): $CraftingContainer
public "stillValid"(arg0: $Player$$Type): boolean
public "getRecipeBookType"(): $RecipeBookType
public "getGridWidth"(): integer
public "getResultSlots"(): $ResultContainer
public "recipeMatches"(arg0: $RecipeHolder$$Type<($CraftingRecipe$$Type)>): boolean
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "slotsChanged"(arg0: $Container$$Type): void
public "getResultSlotIndex"(): integer
public "beginPlacingRecipe"(): void
public "getGridHeight"(): integer
get "size"(): integer
get "craftSlots"(): $CraftingContainer
get "recipeBookType"(): $RecipeBookType
get "gridWidth"(): integer
get "resultSlots"(): $ResultContainer
get "resultSlotIndex"(): integer
get "gridHeight"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingMenu$$Type = ($CraftingMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CraftingMenu$$Original = $CraftingMenu;}
declare module "net.minecraft.world.inventory.AbstractContainerMenu" {
import {$ContainerListener, $ContainerListener$$Type} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$DataSlot, $DataSlot$$Type} from "net.minecraft.world.inventory.DataSlot"
import {$List, $List$$Type} from "java.util.List"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$SlotAccess} from "net.minecraft.world.entity.SlotAccess"
import {$ContainerSynchronizer, $ContainerSynchronizer$$Type} from "net.minecraft.world.inventory.ContainerSynchronizer"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$ContainerData$$Type} from "net.minecraft.world.inventory.ContainerData"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Operation$$Type} from "com.llamalad7.mixinextras.injector.wrapoperation.Operation"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$OptionalInt} from "java.util.OptionalInt"
import {$ContainerLevelAccess$$Type} from "net.minecraft.world.inventory.ContainerLevelAccess"
import {$MenuType, $MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ClickType$$Type} from "net.minecraft.world.inventory.ClickType"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $AbstractContainerMenu {
readonly "quickcraftSlots": $Set<($Slot)>
 "remoteCarried": $ItemStack
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "quickcraftType": integer
 "synchronizer": $ContainerSynchronizer
 "menuType": $MenuType<(never)>
readonly "containerListeners": $List<($ContainerListener)>
 "quickcraftStatus": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: $MenuType$$Type<(never)>, arg1: integer)

public "getType"(): $MenuType<(never)>
public "getSlot"(arg0: integer): $Slot
public "removed"(arg0: $Player$$Type): void
public static "canItemQuickReplace"(arg0: $Slot$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public static "getQuickCraftPlaceCount"(arg0: $Set$$Type<($Slot$$Type)>, arg1: integer, arg2: $ItemStack$$Type): integer
public "canTakeItemForPickAll"(arg0: $ItemStack$$Type, arg1: $Slot$$Type): boolean
public "findSlot"(arg0: $Container$$Type, arg1: integer): $OptionalInt
public "canDragTo"(arg0: $Slot$$Type): boolean
public "transferState"(arg0: $AbstractContainerMenu$$Type): void
public "wrapOperation$cpl000$geckolib$removeGeckolibIdOnCopy"(arg0: $ItemStack$$Type, arg1: integer, arg2: $Operation$$Type): $ItemStack
public "wrapOperation$cpl000$geckolib$forceGeckolibSlotChange"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Operation$$Type): boolean
public static "getRedstoneSignalFromContainer"(arg0: $Container$$Type): integer
public static "getRedstoneSignalFromBlockEntity"(arg0: $BlockEntity$$Type): integer
public "clicked"(arg0: integer, arg1: integer, arg2: $ClickType$$Type, arg3: $Player$$Type): void
public "addSlot"(arg0: $Slot$$Type): $Slot
public "doClick"(arg0: integer, arg1: integer, arg2: $ClickType$$Type, arg3: $Player$$Type): void
public "getStateId"(): integer
public "getItems"(): $NonNullList<($ItemStack)>
public "setRemoteSlot"(arg0: integer, arg1: $ItemStack$$Type): void
public "setRemoteSlotNoCopy"(arg0: integer, arg1: $ItemStack$$Type): void
public "createCarriedSlotAccess"(): $SlotAccess
public static "isValidQuickcraftType"(arg0: integer, arg1: $Player$$Type): boolean
public "resumeRemoteUpdates"(): void
public static "getQuickcraftHeader"(arg0: integer): integer
public "synchronizeCarriedToRemote"(): void
public static "checkContainerDataCount"(arg0: $ContainerData$$Type, arg1: integer): void
public "sendAllDataToRemote"(): void
public "setData"(arg0: integer, arg1: integer): void
public "setSynchronizer"(arg0: $ContainerSynchronizer$$Type): void
public "addSlotListener"(arg0: $ContainerListener$$Type): void
public static "getQuickcraftMask"(arg0: integer, arg1: integer): integer
public "broadcastChanges"(): void
public static "stillValid"(arg0: $ContainerLevelAccess$$Type, arg1: $Player$$Type, arg2: $Block$$Type): boolean
public "stillValid"(arg0: $Player$$Type): boolean
public "setCarried"(arg0: $ItemStack$$Type): void
public "getCarried"(): $ItemStack
public "setItem"(arg0: integer, arg1: integer, arg2: $ItemStack$$Type): void
public "wrapOperation$cpl000$geckolib$forceGeckolibIdSync"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Operation$$Type): boolean
public "suppressRemoteUpdates"(): void
public static "checkContainerSize"(arg0: $Container$$Type, arg1: integer): void
public "isValidSlotIndex"(arg0: integer): boolean
public "addDataSlot"(arg0: $DataSlot$$Type): $DataSlot
public "addDataSlots"(arg0: $ContainerData$$Type): void
public "removeSlotListener"(arg0: $ContainerListener$$Type): void
public "clickMenuButton"(arg0: $Player$$Type, arg1: integer): boolean
public "moveItemStackTo"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer, arg3: boolean): boolean
public "resetQuickCraft"(): void
public "incrementStateId"(): integer
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public static "getQuickcraftType"(arg0: integer): integer
public "slotsChanged"(arg0: $Container$$Type): void
public "broadcastFullState"(): void
public "setRemoteCarried"(arg0: $ItemStack$$Type): void
public "clearContainer"(arg0: $Player$$Type, arg1: $Container$$Type): void
public "initializeContents"(arg0: integer, arg1: $List$$Type<($ItemStack$$Type)>, arg2: $ItemStack$$Type): void
get "type"(): $MenuType<(never)>
get "stateId"(): integer
get "items"(): $NonNullList<($ItemStack)>
set "carried"(value: $ItemStack$$Type)
get "carried"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractContainerMenu$$Type = ($AbstractContainerMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractContainerMenu$$Original = $AbstractContainerMenu;}
declare module "net.minecraft.world.inventory.MerchantMenu" {
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MerchantOffers, $MerchantOffers$$Type} from "net.minecraft.world.item.trading.MerchantOffers"
import {$List} from "java.util.List"
import {$ContainerSynchronizer} from "net.minecraft.world.inventory.ContainerSynchronizer"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Merchant, $Merchant$$Type} from "net.minecraft.world.item.trading.Merchant"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$MenuType} from "net.minecraft.world.inventory.MenuType"
import {$Set} from "java.util.Set"

export class $MerchantMenu extends $AbstractContainerMenu {
readonly "quickcraftSlots": $Set<($Slot)>
static readonly "PAYMENT2_SLOT": integer
 "remoteCarried": $ItemStack
readonly "trader": $Merchant
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "PAYMENT1_SLOT": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "RESULT_SLOT": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "quickcraftType": integer
 "synchronizer": $ContainerSynchronizer
 "menuType": $MenuType<(never)>
readonly "containerListeners": $List<($ContainerListener)>
 "quickcraftStatus": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $Merchant$$Type)

public "showProgressBar"(): boolean
public "getTraderXp"(): integer
public "setCanRestock"(arg0: boolean): void
public "setMerchantLevel"(arg0: integer): void
public "setSelectionHint"(arg0: integer): void
public "getTraderLevel"(): integer
public "getFutureTraderXp"(): integer
public "setShowProgressBar"(arg0: boolean): void
public "removed"(arg0: $Player$$Type): void
public "canTakeItemForPickAll"(arg0: $ItemStack$$Type, arg1: $Slot$$Type): boolean
public "tryMoveItems"(arg0: integer): void
public "setXp"(arg0: integer): void
public "setOffers"(arg0: $MerchantOffers$$Type): void
public "getOffers"(): $MerchantOffers
public "stillValid"(arg0: $Player$$Type): boolean
public "canRestock"(): boolean
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "slotsChanged"(arg0: $Container$$Type): void
get "traderXp"(): integer
set "merchantLevel"(value: integer)
set "selectionHint"(value: integer)
get "traderLevel"(): integer
get "futureTraderXp"(): integer
set "xp"(value: integer)
set "offers"(value: $MerchantOffers$$Type)
get "offers"(): $MerchantOffers
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MerchantMenu$$Type = ($MerchantMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MerchantMenu$$Original = $MerchantMenu;}
declare module "net.minecraft.world.inventory.RecipeCraftingHolder" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeHolder, $RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export interface $RecipeCraftingHolder$$Interface {
set "recipeUsed"(value: $RecipeHolder$$Type<(never)>)
get "recipeUsed"(): $RecipeHolder<(never)>
}

export class $RecipeCraftingHolder implements $RecipeCraftingHolder$$Interface {
 "setRecipeUsed"(arg0: $Level$$Type, arg1: $ServerPlayer$$Type, arg2: $RecipeHolder$$Type<(never)>): boolean
 "setRecipeUsed"(arg0: $RecipeHolder$$Type<(never)>): void
 "awardUsedRecipes"(arg0: $Player$$Type, arg1: $List$$Type<($ItemStack$$Type)>): void
 "getRecipeUsed"(): $RecipeHolder<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeCraftingHolder$$Type = ($RecipeCraftingHolder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeCraftingHolder$$Original = $RecipeCraftingHolder;}
declare module "net.minecraft.world.inventory.ItemCombinerMenuSlotDefinition$Builder" {
import {$ItemCombinerMenuSlotDefinition} from "net.minecraft.world.inventory.ItemCombinerMenuSlotDefinition"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Predicate$$Type} from "java.util.function.Predicate"

export class $ItemCombinerMenuSlotDefinition$Builder {
constructor()

public "build"(): $ItemCombinerMenuSlotDefinition
public "withResultSlot"(arg0: integer, arg1: integer, arg2: integer): $ItemCombinerMenuSlotDefinition$Builder
public "withSlot"(arg0: integer, arg1: integer, arg2: integer, arg3: $Predicate$$Type<($ItemStack)>): $ItemCombinerMenuSlotDefinition$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCombinerMenuSlotDefinition$Builder$$Type = ($ItemCombinerMenuSlotDefinition$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemCombinerMenuSlotDefinition$Builder$$Original = $ItemCombinerMenuSlotDefinition$Builder;}
declare module "net.minecraft.world.inventory.CrafterMenu" {
import {$ContainerListener, $ContainerListener$$Interface} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$ContainerSynchronizer} from "net.minecraft.world.inventory.ContainerSynchronizer"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$ContainerData$$Type} from "net.minecraft.world.inventory.ContainerData"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Container} from "net.minecraft.world.Container"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$MenuType} from "net.minecraft.world.inventory.MenuType"
import {$Set} from "java.util.Set"
import {$AccessorCrafterMenu$$Interface} from "com.illusivesoulworks.polymorph.mixin.core.AccessorCrafterMenu"
import {$CraftingContainer$$Type} from "net.minecraft.world.inventory.CraftingContainer"

export class $CrafterMenu extends $AbstractContainerMenu implements $ContainerListener$$Interface, $AccessorCrafterMenu$$Interface {
readonly "quickcraftSlots": $Set<($Slot)>
 "remoteCarried": $ItemStack
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_COUNT": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "quickcraftType": integer
 "synchronizer": $ContainerSynchronizer
 "menuType": $MenuType<(never)>
readonly "containerListeners": $List<($ContainerListener)>
 "quickcraftStatus": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $CraftingContainer$$Type, arg3: $ContainerData$$Type)

public "setSlotState"(arg0: integer, arg1: boolean): void
public "isSlotDisabled"(arg0: integer): boolean
public "getContainer"(): $Container
public "stillValid"(arg0: $Player$$Type): boolean
public "slotChanged"(arg0: $AbstractContainerMenu$$Type, arg1: integer, arg2: $ItemStack$$Type): void
public "isPowered"(): boolean
public "callRefreshRecipeResult"(): void
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "dataChanged"(arg0: $AbstractContainerMenu$$Type, arg1: integer, arg2: integer): void
get "container"(): $Container
get "powered"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrafterMenu$$Type = ($CrafterMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CrafterMenu$$Original = $CrafterMenu;}
declare module "net.minecraft.world.inventory.SmithingMenu" {
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$ContainerSynchronizer} from "net.minecraft.world.inventory.ContainerSynchronizer"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$ItemCombinerMenu} from "net.minecraft.world.inventory.ItemCombinerMenu"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemCombinerMenuSlotDefinition} from "net.minecraft.world.inventory.ItemCombinerMenuSlotDefinition"
import {$Container} from "net.minecraft.world.Container"
import {$RecipeHolder} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$ContainerLevelAccess, $ContainerLevelAccess$$Type} from "net.minecraft.world.inventory.ContainerLevelAccess"
import {$MenuType} from "net.minecraft.world.inventory.MenuType"
import {$Set} from "java.util.Set"
import {$SmithingRecipe} from "net.minecraft.world.item.crafting.SmithingRecipe"
import {$ResultContainer} from "net.minecraft.world.inventory.ResultContainer"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SmithingMenu extends $ItemCombinerMenu {
readonly "quickcraftSlots": $Set<($Slot)>
 "access": $ContainerLevelAccess
static readonly "ADDITIONAL_SLOT": integer
 "remoteCarried": $ItemStack
readonly "resultSlots": $ResultContainer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
static readonly "ADDITIONAL_SLOT_X_PLACEMENT": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
 "selectedRecipe": $RecipeHolder<($SmithingRecipe)>
 "containerId": integer
static readonly "SLOT_Y_PLACEMENT": integer
static readonly "TEMPLATE_SLOT_X_PLACEMENT": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
readonly "player": $Player
static readonly "TEMPLATE_SLOT": integer
static readonly "$assertionsDisabled": boolean
 "lastSlots": $NonNullList<($ItemStack)>
readonly "inputSlots": $Container
static readonly "RESULT_SLOT": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "BASE_SLOT_X_PLACEMENT": integer
 "quickcraftType": integer
 "synchronizer": $ContainerSynchronizer
static readonly "BASE_SLOT": integer
 "menuType": $MenuType<(never)>
readonly "containerListeners": $List<($ContainerListener)>
 "quickcraftStatus": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $ContainerLevelAccess$$Type)

public "canTakeItemForPickAll"(arg0: $ItemStack$$Type, arg1: $Slot$$Type): boolean
public "mayPickup"(arg0: $Player$$Type, arg1: boolean): boolean
public "isValidBlock"(arg0: $BlockState$$Type): boolean
public "createResult"(): void
public "onTake"(arg0: $Player$$Type, arg1: $ItemStack$$Type): void
public "getSlotToQuickMoveTo"(arg0: $ItemStack$$Type): integer
public "canMoveIntoInputSlots"(arg0: $ItemStack$$Type): boolean
public "createInputSlotDefinitions"(): $ItemCombinerMenuSlotDefinition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmithingMenu$$Type = ($SmithingMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmithingMenu$$Original = $SmithingMenu;}
declare module "net.minecraft.world.inventory.EnchantmentMenu" {
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$ContainerSynchronizer} from "net.minecraft.world.inventory.ContainerSynchronizer"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$ContainerLevelAccess$$Type} from "net.minecraft.world.inventory.ContainerLevelAccess"
import {$MenuType} from "net.minecraft.world.inventory.MenuType"
import {$Set} from "java.util.Set"

export class $EnchantmentMenu extends $AbstractContainerMenu {
readonly "quickcraftSlots": $Set<($Slot)>
 "remoteCarried": $ItemStack
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
readonly "enchantClue": (integer)[]
 "containerId": integer
readonly "levelClue": (integer)[]
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
readonly "costs": (integer)[]
static readonly "EMPTY_SLOT_LAPIS_LAZULI": $ResourceLocation
static readonly "$assertionsDisabled": boolean
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "quickcraftType": integer
 "synchronizer": $ContainerSynchronizer
 "menuType": $MenuType<(never)>
readonly "containerListeners": $List<($ContainerListener)>
 "quickcraftStatus": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $ContainerLevelAccess$$Type)

public "removed"(arg0: $Player$$Type): void
public "getEnchantmentSeed"(): integer
public "handler$ehc000$deeperdarker$stillValid"(arg0: $Player$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "stillValid"(arg0: $Player$$Type): boolean
public "getGoldCount"(): integer
public "clickMenuButton"(arg0: $Player$$Type, arg1: integer): boolean
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "slotsChanged"(arg0: $Container$$Type): void
get "enchantmentSeed"(): integer
get "goldCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentMenu$$Type = ($EnchantmentMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantmentMenu$$Original = $EnchantmentMenu;}
declare module "net.minecraft.world.inventory.tooltip.TooltipComponent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TooltipComponent$$Interface {
}

export class $TooltipComponent implements $TooltipComponent$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TooltipComponent$$Type = ($TooltipComponent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TooltipComponent$$Original = $TooltipComponent;}
declare module "net.minecraft.world.inventory.CartographyTableMenu" {
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$ContainerSynchronizer} from "net.minecraft.world.inventory.ContainerSynchronizer"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$ContainerLevelAccess$$Type} from "net.minecraft.world.inventory.ContainerLevelAccess"
import {$MenuType} from "net.minecraft.world.inventory.MenuType"
import {$Set} from "java.util.Set"

export class $CartographyTableMenu extends $AbstractContainerMenu {
readonly "container": $Container
readonly "quickcraftSlots": $Set<($Slot)>
static readonly "ADDITIONAL_SLOT": integer
 "lastSoundTime": long
 "remoteCarried": $ItemStack
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
static readonly "$assertionsDisabled": boolean
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "RESULT_SLOT": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "MAP_SLOT": integer
 "quickcraftType": integer
 "synchronizer": $ContainerSynchronizer
 "menuType": $MenuType<(never)>
readonly "containerListeners": $List<($ContainerListener)>
 "quickcraftStatus": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $ContainerLevelAccess$$Type)

public "removed"(arg0: $Player$$Type): void
public "canTakeItemForPickAll"(arg0: $ItemStack$$Type, arg1: $Slot$$Type): boolean
public "handler$ehc000$deeperdarker$stillValid"(arg0: $Player$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "stillValid"(arg0: $Player$$Type): boolean
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "slotsChanged"(arg0: $Container$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CartographyTableMenu$$Type = ($CartographyTableMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CartographyTableMenu$$Original = $CartographyTableMenu;}
declare module "net.minecraft.world.inventory.ClickAction" {
import {$Enum} from "java.lang.Enum"

export class $ClickAction extends $Enum<($ClickAction)> {
static readonly "SECONDARY": $ClickAction
static readonly "PRIMARY": $ClickAction

public static "values"(): ($ClickAction)[]
public static "valueOf"(arg0: StringJS): $ClickAction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClickAction$$Type = (("primary") | ("secondary"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClickAction$$Original = $ClickAction;}
declare module "net.minecraft.world.inventory.ChestMenu" {
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$ContainerSynchronizer} from "net.minecraft.world.inventory.ContainerSynchronizer"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$MenuType, $MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$Set} from "java.util.Set"

export class $ChestMenu extends $AbstractContainerMenu {
readonly "quickcraftSlots": $Set<($Slot)>
 "remoteCarried": $ItemStack
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
static readonly "$assertionsDisabled": boolean
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "quickcraftType": integer
 "synchronizer": $ContainerSynchronizer
 "menuType": $MenuType<(never)>
readonly "containerListeners": $List<($ContainerListener)>
 "quickcraftStatus": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: $MenuType$$Type<(never)>, arg1: integer, arg2: $Inventory$$Type, arg3: $Container$$Type, arg4: integer)

public "removed"(arg0: $Player$$Type): void
public "getContainer"(): $Container
public static "twoRows"(arg0: integer, arg1: $Inventory$$Type): $ChestMenu
public static "oneRow"(arg0: integer, arg1: $Inventory$$Type): $ChestMenu
public static "fourRows"(arg0: integer, arg1: $Inventory$$Type): $ChestMenu
public static "sixRows"(arg0: integer, arg1: $Inventory$$Type, arg2: $Container$$Type): $ChestMenu
public static "sixRows"(arg0: integer, arg1: $Inventory$$Type): $ChestMenu
public static "fiveRows"(arg0: integer, arg1: $Inventory$$Type): $ChestMenu
public "handler$ehc000$deeperdarker$stillValid"(arg0: $Player$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "getRowCount"(): integer
public "stillValid"(arg0: $Player$$Type): boolean
public static "threeRows"(arg0: integer, arg1: $Inventory$$Type): $ChestMenu
public static "threeRows"(arg0: integer, arg1: $Inventory$$Type, arg2: $Container$$Type): $ChestMenu
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
get "container"(): $Container
get "rowCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChestMenu$$Type = ($ChestMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChestMenu$$Original = $ChestMenu;}
declare module "net.minecraft.world.inventory.ItemCombinerMenuSlotDefinition" {
import {$ItemCombinerMenuSlotDefinition$Builder} from "net.minecraft.world.inventory.ItemCombinerMenuSlotDefinition$Builder"
import {$List, $List$$Type} from "java.util.List"
import {$ItemCombinerMenuSlotDefinition$SlotDefinition, $ItemCombinerMenuSlotDefinition$SlotDefinition$$Type} from "net.minecraft.world.inventory.ItemCombinerMenuSlotDefinition$SlotDefinition"

export class $ItemCombinerMenuSlotDefinition {
constructor(arg0: $List$$Type<($ItemCombinerMenuSlotDefinition$SlotDefinition$$Type)>, arg1: $ItemCombinerMenuSlotDefinition$SlotDefinition$$Type)

public "getSlot"(arg0: integer): $ItemCombinerMenuSlotDefinition$SlotDefinition
public static "create"(): $ItemCombinerMenuSlotDefinition$Builder
public "getSlots"(): $List<($ItemCombinerMenuSlotDefinition$SlotDefinition)>
public "getNumOfInputSlots"(): integer
public "getResultSlot"(): $ItemCombinerMenuSlotDefinition$SlotDefinition
public "hasSlot"(arg0: integer): boolean
public "getInputSlotIndexes"(): $List<(integer)>
public "getResultSlotIndex"(): integer
get "slots"(): $List<($ItemCombinerMenuSlotDefinition$SlotDefinition)>
get "numOfInputSlots"(): integer
get "resultSlot"(): $ItemCombinerMenuSlotDefinition$SlotDefinition
get "inputSlotIndexes"(): $List<(integer)>
get "resultSlotIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCombinerMenuSlotDefinition$$Type = ($ItemCombinerMenuSlotDefinition);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemCombinerMenuSlotDefinition$$Original = $ItemCombinerMenuSlotDefinition;}
declare module "net.minecraft.world.inventory.ContainerListener" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"

export interface $ContainerListener$$Interface {
}

export class $ContainerListener implements $ContainerListener$$Interface {
 "slotChanged"(arg0: $AbstractContainerMenu$$Type, arg1: integer, arg2: $ItemStack$$Type): void
 "dataChanged"(arg0: $AbstractContainerMenu$$Type, arg1: integer, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerListener$$Type = ($ContainerListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContainerListener$$Original = $ContainerListener;}
declare module "net.minecraft.world.inventory.PlayerEnderChestContainer" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$EnderChestBlockEntity$$Type} from "net.minecraft.world.level.block.entity.EnderChestBlockEntity"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$SimpleContainer} from "net.minecraft.world.SimpleContainer"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$ListTag, $ListTag$$Type} from "net.minecraft.nbt.ListTag"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $PlayerEnderChestContainer extends $SimpleContainer {
 "size": integer
 "entityOwner": $Entity
 "items": $NonNullList<($ItemStack)>

constructor()

public "isActiveChest"(arg0: $EnderChestBlockEntity$$Type): boolean
public "createTag"(arg0: $HolderLookup$Provider$$Type): $ListTag
public "stillValid"(arg0: $Player$$Type): boolean
public "fromTag"(arg0: $ListTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "stopOpen"(arg0: $Player$$Type): void
public "startOpen"(arg0: $Player$$Type): void
public "setActiveChest"(arg0: $EnderChestBlockEntity$$Type): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public static "tryClear"(arg0: any): void
set "activeChest"(value: $EnderChestBlockEntity$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEnderChestContainer$$Type = ($PlayerEnderChestContainer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerEnderChestContainer$$Original = $PlayerEnderChestContainer;}
declare module "net.minecraft.world.inventory.ResultContainer" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$List, $List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$RecipeCraftingHolder$$Interface} from "net.minecraft.world.inventory.RecipeCraftingHolder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$Container, $Container$$Type, $Container$$Interface} from "net.minecraft.world.Container"
import {$RecipeHolder, $RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Set$$Type} from "java.util.Set"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $ResultContainer implements $Container$$Interface, $RecipeCraftingHolder$$Interface {
 "itemStacks": $NonNullList<($ItemStack)>

constructor()

public "isEmpty"(): boolean
public "getItem"(arg0: integer): $ItemStack
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "getContainerSize"(): integer
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "stillValid"(arg0: $Player$$Type): boolean
public "setChanged"(): void
public "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
public "clearContent"(): void
public "setRecipeUsed"(arg0: $RecipeHolder$$Type<(never)>): void
public "getRecipeUsed"(): $RecipeHolder<(never)>
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "getMaxStackSize"(): integer
public "getMaxStackSize"(arg0: $ItemStack$$Type): integer
public "hasAnyMatching"(arg0: $Predicate$$Type<($ItemStack)>): boolean
public "stopOpen"(arg0: $Player$$Type): void
public "hasAnyOf"(arg0: $Set$$Type<($Item$$Type)>): boolean
public "countItem"(arg0: $Item$$Type): integer
public "startOpen"(arg0: $Player$$Type): void
public "canTakeItem"(arg0: $Container$$Type, arg1: integer, arg2: $ItemStack$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public "setRecipeUsed"(arg0: $Level$$Type, arg1: $ServerPlayer$$Type, arg2: $RecipeHolder$$Type<(never)>): boolean
public "awardUsedRecipes"(arg0: $Player$$Type, arg1: $List$$Type<($ItemStack$$Type)>): void
public static "tryClear"(arg0: any): void
public "canReceiveTransferCooldown"(): boolean
public "setTransferCooldown"(arg0: long): void
public "lithium$itemInsertionTestRequiresStackSize1"(): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "getWidth"(): integer
public "getHeight"(): integer
public "isMutable"(): boolean
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "getSlots"(): integer
public "getSlotLimit"(slot: integer): integer
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "setChanged"(): void
public "getStackInSlot"(slot: integer): $ItemStack
public "asContainer"(): $Container
public "clear"(): void
public "self"(): $Container
public "getBlock"(level: $Level$$Type): $LevelBlock
public "isEmpty"(): boolean
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "countNonEmpty"(): integer
public "countNonEmpty"(match: $ItemPredicate$$Type): integer
public "getAllItems"(): $List<($ItemStack)>
public "clear"(match: $ItemPredicate$$Type): void
public "find"(): integer
public "find"(match: $ItemPredicate$$Type): integer
public "count"(): integer
public "count"(match: $ItemPredicate$$Type): integer
get "empty"(): boolean
get "containerSize"(): integer
get "changed"(): void
set "recipeUsed"(value: $RecipeHolder$$Type<(never)>)
get "recipeUsed"(): $RecipeHolder<(never)>
get "maxStackSize"(): integer
set "transferCooldown"(value: long)
get "width"(): integer
get "height"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "changed"(): void
get "empty"(): boolean
get "allItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResultContainer$$Type = ($ResultContainer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResultContainer$$Original = $ResultContainer;}
declare module "net.minecraft.world.inventory.StackedContentsCompatible" {
import {$StackedContents, $StackedContents$$Type} from "net.minecraft.world.entity.player.StackedContents"

export interface $StackedContentsCompatible$$Interface {

(arg0: $StackedContents): void
}

export class $StackedContentsCompatible implements $StackedContentsCompatible$$Interface {
 "fillStackedContents"(arg0: $StackedContents$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StackedContentsCompatible$$Type = ((arg0: $StackedContents) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StackedContentsCompatible$$Original = $StackedContentsCompatible;}
declare module "net.minecraft.world.inventory.CraftingContainer" {
import {$CraftingInput} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CraftingInput$Positioned} from "net.minecraft.world.item.crafting.CraftingInput$Positioned"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$StackedContentsCompatible$$Interface} from "net.minecraft.world.inventory.StackedContentsCompatible"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$Container, $Container$$Type, $Container$$Interface} from "net.minecraft.world.Container"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Set$$Type} from "java.util.Set"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$StackedContents$$Type} from "net.minecraft.world.entity.player.StackedContents"

export interface $CraftingContainer$$Interface extends $Container$$Interface, $StackedContentsCompatible$$Interface {
get "width"(): integer
get "items"(): $List<($ItemStack)>
get "height"(): integer
get "empty"(): boolean
get "containerSize"(): integer
get "maxStackSize"(): integer
get "changed"(): void
set "transferCooldown"(value: long)
get "width"(): integer
get "height"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "changed"(): void
get "empty"(): boolean
get "allItems"(): $List<($ItemStack)>
}

export class $CraftingContainer implements $CraftingContainer$$Interface {
 "getWidth"(): integer
 "getItems"(): $List<($ItemStack)>
 "asCraftInput"(): $CraftingInput
 "getHeight"(): integer
 "asPositionedCraftInput"(): $CraftingInput$Positioned
 "isEmpty"(): boolean
 "getItem"(arg0: integer): $ItemStack
 "canPlaceItem"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "removeItemNoUpdate"(arg0: integer): $ItemStack
 "getContainerSize"(): integer
 "removeItem"(arg0: integer, arg1: integer): $ItemStack
 "getMaxStackSize"(): integer
 "getMaxStackSize"(arg0: $ItemStack$$Type): integer
 "hasAnyMatching"(arg0: $Predicate$$Type<($ItemStack)>): boolean
 "stillValid"(arg0: $Player$$Type): boolean
 "setChanged"(): void
 "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
 "stopOpen"(arg0: $Player$$Type): void
 "hasAnyOf"(arg0: $Set$$Type<($Item$$Type)>): boolean
 "countItem"(arg0: $Item$$Type): integer
 "startOpen"(arg0: $Player$$Type): void
 "canTakeItem"(arg0: $Container$$Type, arg1: integer, arg2: $ItemStack$$Type): boolean
static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
 "fillStackedContents"(arg0: $StackedContents$$Type): void
static "tryClear"(arg0: any): void
 "clearContent"(): void
 "canReceiveTransferCooldown"(): boolean
 "setTransferCooldown"(arg0: long): void
 "lithium$itemInsertionTestRequiresStackSize1"(): boolean
 "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
 "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
 "getWidth"(): integer
 "getHeight"(): integer
 "isMutable"(): boolean
 "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
 "getSlots"(): integer
 "getSlotLimit"(slot: integer): integer
 "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
 "setChanged"(): void
 "getStackInSlot"(slot: integer): $ItemStack
 "asContainer"(): $Container
 "clear"(): void
 "self"(): $Container
 "getBlock"(level: $Level$$Type): $LevelBlock
 "isEmpty"(): boolean
 "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
 "countNonEmpty"(): integer
 "countNonEmpty"(match: $ItemPredicate$$Type): integer
 "getAllItems"(): $List<($ItemStack)>
 "clear"(match: $ItemPredicate$$Type): void
 "find"(): integer
 "find"(match: $ItemPredicate$$Type): integer
 "count"(): integer
 "count"(match: $ItemPredicate$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingContainer$$Type = ($CraftingContainer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CraftingContainer$$Original = $CraftingContainer;}
declare module "net.minecraft.world.inventory.MenuType$MenuSupplier" {
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"

export interface $MenuType$MenuSupplier$$Interface<T extends $AbstractContainerMenu> {

(arg0: integer, arg1: $Inventory): T
}

export class $MenuType$MenuSupplier<T extends $AbstractContainerMenu> implements $MenuType$MenuSupplier$$Interface {
 "create"(arg0: integer, arg1: $Inventory$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuType$MenuSupplier$$Type<T> = ((arg0: integer, arg1: $Inventory) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MenuType$MenuSupplier$$Original<T> = $MenuType$MenuSupplier<(T)>;}
declare module "net.minecraft.world.inventory.LoomMenu" {
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$DataSlot} from "net.minecraft.world.inventory.DataSlot"
import {$List} from "java.util.List"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$ContainerSynchronizer} from "net.minecraft.world.inventory.ContainerSynchronizer"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Holder} from "net.minecraft.core.Holder"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$ContainerLevelAccess$$Type} from "net.minecraft.world.inventory.ContainerLevelAccess"
import {$BannerPattern} from "net.minecraft.world.level.block.entity.BannerPattern"
import {$MenuType} from "net.minecraft.world.inventory.MenuType"
import {$Set} from "java.util.Set"

export class $LoomMenu extends $AbstractContainerMenu {
readonly "quickcraftSlots": $Set<($Slot)>
 "slotUpdateListener": $Runnable
 "lastSoundTime": long
 "remoteCarried": $ItemStack
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
readonly "bannerSlot": $Slot
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
static readonly "$assertionsDisabled": boolean
 "lastSlots": $NonNullList<($ItemStack)>
readonly "dyeSlot": $Slot
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
readonly "selectedBannerPatternIndex": $DataSlot
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "quickcraftType": integer
 "synchronizer": $ContainerSynchronizer
 "menuType": $MenuType<(never)>
readonly "containerListeners": $List<($ContainerListener)>
 "quickcraftStatus": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $ContainerLevelAccess$$Type)

public "removed"(arg0: $Player$$Type): void
public "getResultSlot"(): $Slot
public "getBannerSlot"(): $Slot
public "getPatternSlot"(): $Slot
public "handler$ehc000$deeperdarker$stillValid"(arg0: $Player$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "getDyeSlot"(): $Slot
public "stillValid"(arg0: $Player$$Type): boolean
public "getSelectedBannerPatternIndex"(): integer
public "registerUpdateListener"(arg0: $Runnable$$Type): void
public "getSelectablePatterns"(): $List<($Holder<($BannerPattern)>)>
public "clickMenuButton"(arg0: $Player$$Type, arg1: integer): boolean
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "slotsChanged"(arg0: $Container$$Type): void
get "resultSlot"(): $Slot
get "patternSlot"(): $Slot
get "selectablePatterns"(): $List<($Holder<($BannerPattern)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoomMenu$$Type = ($LoomMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LoomMenu$$Original = $LoomMenu;}
declare module "net.minecraft.world.inventory.ContainerData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ContainerData$$Interface {
get "count"(): integer
}

export class $ContainerData implements $ContainerData$$Interface {
 "get"(arg0: integer): integer
 "set"(arg0: integer, arg1: integer): void
 "getCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerData$$Type = ($ContainerData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContainerData$$Original = $ContainerData;}
declare module "net.minecraft.world.inventory.SmokerMenu" {
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Level} from "net.minecraft.world.level.Level"
import {$ContainerSynchronizer} from "net.minecraft.world.inventory.ContainerSynchronizer"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$ContainerData$$Type} from "net.minecraft.world.inventory.ContainerData"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractFurnaceMenu} from "net.minecraft.world.inventory.AbstractFurnaceMenu"
import {$MenuType} from "net.minecraft.world.inventory.MenuType"
import {$Set} from "java.util.Set"

export class $SmokerMenu extends $AbstractFurnaceMenu {
readonly "quickcraftSlots": $Set<($Slot)>
 "remoteCarried": $ItemStack
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
readonly "level": $Level
static readonly "$assertionsDisabled": boolean
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "INGREDIENT_SLOT": integer
static readonly "DATA_COUNT": integer
static readonly "RESULT_SLOT": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_COUNT": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "quickcraftType": integer
 "synchronizer": $ContainerSynchronizer
 "menuType": $MenuType<(never)>
readonly "containerListeners": $List<($ContainerListener)>
 "quickcraftStatus": integer
static readonly "FUEL_SLOT": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $Container$$Type, arg3: $ContainerData$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmokerMenu$$Type = ($SmokerMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmokerMenu$$Original = $SmokerMenu;}
declare module "net.minecraft.world.inventory.FurnaceMenu" {
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Level} from "net.minecraft.world.level.Level"
import {$ContainerSynchronizer} from "net.minecraft.world.inventory.ContainerSynchronizer"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$ContainerData$$Type} from "net.minecraft.world.inventory.ContainerData"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractFurnaceMenu} from "net.minecraft.world.inventory.AbstractFurnaceMenu"
import {$MenuType} from "net.minecraft.world.inventory.MenuType"
import {$Set} from "java.util.Set"

export class $FurnaceMenu extends $AbstractFurnaceMenu {
readonly "quickcraftSlots": $Set<($Slot)>
 "remoteCarried": $ItemStack
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
readonly "level": $Level
static readonly "$assertionsDisabled": boolean
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "INGREDIENT_SLOT": integer
static readonly "DATA_COUNT": integer
static readonly "RESULT_SLOT": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_COUNT": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "quickcraftType": integer
 "synchronizer": $ContainerSynchronizer
 "menuType": $MenuType<(never)>
readonly "containerListeners": $List<($ContainerListener)>
 "quickcraftStatus": integer
static readonly "FUEL_SLOT": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $Container$$Type, arg3: $ContainerData$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FurnaceMenu$$Type = ($FurnaceMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FurnaceMenu$$Original = $FurnaceMenu;}
declare module "net.minecraft.world.inventory.InventoryMenu" {
import {$CraftingInput} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$RecipeBookMenu} from "net.minecraft.world.inventory.RecipeBookMenu"
import {$List} from "java.util.List"
import {$ContainerSynchronizer} from "net.minecraft.world.inventory.ContainerSynchronizer"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AccessorInventoryMenu$$Interface} from "com.illusivesoulworks.polymorph.mixin.core.AccessorInventoryMenu"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$EquipmentSlot} from "net.minecraft.world.entity.EquipmentSlot"
import {$RecipeBookType} from "net.minecraft.world.inventory.RecipeBookType"
import {$MenuType} from "net.minecraft.world.inventory.MenuType"
import {$Set} from "java.util.Set"
import {$CraftingRecipe, $CraftingRecipe$$Type} from "net.minecraft.world.item.crafting.CraftingRecipe"
import {$CraftingContainer} from "net.minecraft.world.inventory.CraftingContainer"
import {$StackedContents$$Type} from "net.minecraft.world.entity.player.StackedContents"
import {$ResultContainer} from "net.minecraft.world.inventory.ResultContainer"

export class $InventoryMenu extends $RecipeBookMenu<($CraftingInput), ($CraftingRecipe)> implements $AccessorInventoryMenu$$Interface {
readonly "quickcraftSlots": $Set<($Slot)>
static readonly "CRAFT_SLOT_END": integer
static readonly "BLOCK_ATLAS": $ResourceLocation
static readonly "EMPTY_ARMOR_SLOT_BOOTS": $ResourceLocation
static readonly "TEXTURE_EMPTY_SLOTS": $Map<($EquipmentSlot), ($ResourceLocation)>
 "remoteCarried": $ItemStack
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
static readonly "USE_ROW_SLOT_START": integer
static readonly "EMPTY_ARMOR_SLOT_CHESTPLATE": $ResourceLocation
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "CRAFT_SLOT_COUNT": integer
static readonly "SHIELD_SLOT": integer
static readonly "ARMOR_SLOT_START": integer
static readonly "ARMOR_SLOT_COUNT": integer
static readonly "INV_SLOT_START": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
static readonly "CRAFT_SLOT_START": integer
readonly "owner": $Player
static readonly "EMPTY_ARMOR_SLOT_HELMET": $ResourceLocation
static readonly "SLOT_IDS": ($EquipmentSlot)[]
readonly "active": boolean
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "ARMOR_SLOT_END": integer
static readonly "RESULT_SLOT": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "USE_ROW_SLOT_END": integer
static readonly "EMPTY_ARMOR_SLOT_SHIELD": $ResourceLocation
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "INV_SLOT_END": integer
static readonly "EMPTY_ARMOR_SLOT_LEGGINGS": $ResourceLocation
 "quickcraftType": integer
 "synchronizer": $ContainerSynchronizer
 "menuType": $MenuType<(never)>
readonly "containerListeners": $List<($ContainerListener)>
 "quickcraftStatus": integer
static readonly "CONTAINER_ID": integer

constructor(arg0: $Inventory$$Type, arg1: boolean, arg2: $Player$$Type)

public "getSize"(): integer
public "removed"(arg0: $Player$$Type): void
public "getOwner"(): $Player
public "canTakeItemForPickAll"(arg0: $ItemStack$$Type, arg1: $Slot$$Type): boolean
public "fillCraftSlotsStackedContents"(arg0: $StackedContents$$Type): void
public static "isHotbarSlot"(arg0: integer): boolean
public "clearCraftingContent"(): void
public "shouldMoveToInventory"(arg0: integer): boolean
public "getCraftSlots"(): $CraftingContainer
public "stillValid"(arg0: $Player$$Type): boolean
public "getRecipeBookType"(): $RecipeBookType
public "getGridWidth"(): integer
public "getResultSlots"(): $ResultContainer
public "recipeMatches"(arg0: $RecipeHolder$$Type<($CraftingRecipe$$Type)>): boolean
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "slotsChanged"(arg0: $Container$$Type): void
public "getResultSlotIndex"(): integer
public "getGridHeight"(): integer
get "size"(): integer
get "craftSlots"(): $CraftingContainer
get "recipeBookType"(): $RecipeBookType
get "gridWidth"(): integer
get "resultSlots"(): $ResultContainer
get "resultSlotIndex"(): integer
get "gridHeight"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryMenu$$Type = ($InventoryMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InventoryMenu$$Original = $InventoryMenu;}
declare module "net.minecraft.world.inventory.MenuType" {
import {$FeatureFlagSet, $FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$LoomMenu} from "net.minecraft.world.inventory.LoomMenu"
import {$MenuType$MenuSupplier, $MenuType$MenuSupplier$$Type} from "net.minecraft.world.inventory.MenuType$MenuSupplier"
import {$List} from "java.util.List"
import {$IMenuTypeExtension$$Interface} from "net.neoforged.neoforge.common.extensions.IMenuTypeExtension"
import {$GrindstoneMenu} from "net.minecraft.world.inventory.GrindstoneMenu"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$MenuTypeKJS$$Interface} from "dev.latvian.mods.kubejs.core.MenuTypeKJS"
import {$CartographyTableMenu} from "net.minecraft.world.inventory.CartographyTableMenu"
import {$Holder} from "net.minecraft.core.Holder"
import {$CraftingMenu} from "net.minecraft.world.inventory.CraftingMenu"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$FeatureElement$$Interface} from "net.minecraft.world.flag.FeatureElement"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$BeaconMenu} from "net.minecraft.world.inventory.BeaconMenu"
import {$DispenserMenu} from "net.minecraft.world.inventory.DispenserMenu"
import {$AnvilMenu} from "net.minecraft.world.inventory.AnvilMenu"
import {$LecternMenu} from "net.minecraft.world.inventory.LecternMenu"
import {$EnchantmentMenu} from "net.minecraft.world.inventory.EnchantmentMenu"
import {$SmokerMenu} from "net.minecraft.world.inventory.SmokerMenu"
import {$CrafterMenu} from "net.minecraft.world.inventory.CrafterMenu"
import {$ChestMenu} from "net.minecraft.world.inventory.ChestMenu"
import {$IContainerFactory$$Type} from "net.neoforged.neoforge.network.IContainerFactory"
import {$StonecutterMenu} from "net.minecraft.world.inventory.StonecutterMenu"
import {$BlastFurnaceMenu} from "net.minecraft.world.inventory.BlastFurnaceMenu"
import {$ShulkerBoxMenu} from "net.minecraft.world.inventory.ShulkerBoxMenu"
import {$Registry} from "net.minecraft.core.Registry"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TagKey} from "net.minecraft.tags.TagKey"
import {$SmithingMenu} from "net.minecraft.world.inventory.SmithingMenu"
import {$BrewingStandMenu} from "net.minecraft.world.inventory.BrewingStandMenu"
import {$HopperMenu} from "net.minecraft.world.inventory.HopperMenu"
import {$FurnaceMenu} from "net.minecraft.world.inventory.FurnaceMenu"
import {$MerchantMenu} from "net.minecraft.world.inventory.MerchantMenu"

export class $MenuType<T extends $AbstractContainerMenu> implements $FeatureElement$$Interface, $IMenuTypeExtension$$Interface<(T)>, $MenuTypeKJS$$Interface {
static readonly "ENCHANTMENT": $MenuType<($EnchantmentMenu)>
static readonly "LOOM": $MenuType<($LoomMenu)>
static readonly "BLAST_FURNACE": $MenuType<($BlastFurnaceMenu)>
static readonly "CARTOGRAPHY_TABLE": $MenuType<($CartographyTableMenu)>
static readonly "BEACON": $MenuType<($BeaconMenu)>
static readonly "MERCHANT": $MenuType<($MerchantMenu)>
static readonly "CRAFTER_3x3": $MenuType<($CrafterMenu)>
static readonly "FURNACE": $MenuType<($FurnaceMenu)>
static readonly "ANVIL": $MenuType<($AnvilMenu)>
static readonly "STONECUTTER": $MenuType<($StonecutterMenu)>
static readonly "GENERIC_3x3": $MenuType<($DispenserMenu)>
static readonly "CRAFTING": $MenuType<($CraftingMenu)>
static readonly "GENERIC_9x1": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x2": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x3": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x4": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x5": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x6": $MenuType<($ChestMenu)>
static readonly "BREWING_STAND": $MenuType<($BrewingStandMenu)>
static readonly "SMOKER": $MenuType<($SmokerMenu)>
readonly "constructor": $MenuType$MenuSupplier<(T)>
static readonly "SMITHING": $MenuType<($SmithingMenu)>
static readonly "HOPPER": $MenuType<($HopperMenu)>
static readonly "LECTERN": $MenuType<($LecternMenu)>
static readonly "GRINDSTONE": $MenuType<($GrindstoneMenu)>
static readonly "SHULKER_BOX": $MenuType<($ShulkerBoxMenu)>

constructor(arg0: $MenuType$MenuSupplier$$Type<(T)>, arg1: $FeatureFlagSet$$Type)

public "create"(arg0: integer, arg1: $Inventory$$Type, arg2: $RegistryFriendlyByteBuf$$Type): any
public "create"(arg0: integer, arg1: $Inventory$$Type): T
public "requiredFeatures"(): $FeatureFlagSet
public "getId"(): StringJS
public "getKey"(): $ResourceKey
public "isEnabled"(arg0: $FeatureFlagSet$$Type): boolean
public static "create"<T extends $AbstractContainerMenu>(arg0: $IContainerFactory$$Type<(T)>): $MenuType<(T)>
public "getRegistry"(): $Registry<($MenuType<(never)>)>
public "getRegistryId"(): $ResourceKey<($Registry<($MenuType<(never)>)>)>
public "specialEquals"(o: any, shallow: boolean): boolean
public "getMod"(): StringJS
public "hasTag"(tag: $ResourceLocation$$Type): boolean
public "getIdLocation"(): $ResourceLocation
public "asHolder"(): $Holder<($MenuType<(never)>)>
public "getTagKeys"(): $List<($TagKey<($MenuType<(never)>)>)>
public "getTags"(): $List<($ResourceLocation)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "id"(): StringJS
get "key"(): $ResourceKey
get "registry"(): $Registry<($MenuType<(never)>)>
get "registryId"(): $ResourceKey<($Registry<($MenuType<(never)>)>)>
get "mod"(): StringJS
get "idLocation"(): $ResourceLocation
get "tagKeys"(): $List<($TagKey<($MenuType<(never)>)>)>
get "tags"(): $List<($ResourceLocation)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.Menu
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.MenuTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuType$$Type<T> = (Special.Menu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MenuType$$Original<T> = $MenuType<(T)>;}
declare module "net.minecraft.world.inventory.ItemCombinerMenu" {
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$SimpleContainer} from "net.minecraft.world.SimpleContainer"
import {$ContainerSynchronizer} from "net.minecraft.world.inventory.ContainerSynchronizer"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemCombinerMenuSlotDefinition, $ItemCombinerMenuSlotDefinition$$Type} from "net.minecraft.world.inventory.ItemCombinerMenuSlotDefinition"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$ContainerLevelAccess, $ContainerLevelAccess$$Type} from "net.minecraft.world.inventory.ContainerLevelAccess"
import {$MenuType, $MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$Set} from "java.util.Set"
import {$ResultContainer} from "net.minecraft.world.inventory.ResultContainer"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ItemCombinerMenu extends $AbstractContainerMenu {
readonly "quickcraftSlots": $Set<($Slot)>
 "access": $ContainerLevelAccess
 "remoteCarried": $ItemStack
readonly "resultSlots": $ResultContainer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
readonly "player": $Player
static readonly "$assertionsDisabled": boolean
 "lastSlots": $NonNullList<($ItemStack)>
readonly "inputSlots": $Container
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "quickcraftType": integer
 "synchronizer": $ContainerSynchronizer
 "menuType": $MenuType<(never)>
readonly "containerListeners": $List<($ContainerListener)>
 "quickcraftStatus": integer

constructor(arg0: $MenuType$$Type<(never)>, arg1: integer, arg2: $Inventory$$Type, arg3: $ContainerLevelAccess$$Type)

public "removed"(arg0: $Player$$Type): void
public "mayPickup"(arg0: $Player$$Type, arg1: boolean): boolean
public "createInputSlots"(arg0: $ItemCombinerMenuSlotDefinition$$Type): void
public "isValidBlock"(arg0: $BlockState$$Type): boolean
public "createResult"(): void
public "createContainer"(arg0: integer): $SimpleContainer
public "createResultSlot"(arg0: $ItemCombinerMenuSlotDefinition$$Type): void
public "getResultSlot"(): integer
public "onTake"(arg0: $Player$$Type, arg1: $ItemStack$$Type): void
public "handler$ehc000$deeperdarker$stillValid"(arg0: $Player$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "stillValid"(arg0: $Player$$Type): boolean
public "getSlotToQuickMoveTo"(arg0: $ItemStack$$Type): integer
public "canMoveIntoInputSlots"(arg0: $ItemStack$$Type): boolean
public "createInputSlotDefinitions"(): $ItemCombinerMenuSlotDefinition
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "slotsChanged"(arg0: $Container$$Type): void
get "resultSlot"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCombinerMenu$$Type = ($ItemCombinerMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemCombinerMenu$$Original = $ItemCombinerMenu;}
declare module "net.minecraft.world.inventory.ShulkerBoxMenu" {
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$ContainerSynchronizer} from "net.minecraft.world.inventory.ContainerSynchronizer"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$MenuType} from "net.minecraft.world.inventory.MenuType"
import {$Set} from "java.util.Set"

export class $ShulkerBoxMenu extends $AbstractContainerMenu {
readonly "quickcraftSlots": $Set<($Slot)>
 "remoteCarried": $ItemStack
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
static readonly "$assertionsDisabled": boolean
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "quickcraftType": integer
 "synchronizer": $ContainerSynchronizer
 "menuType": $MenuType<(never)>
readonly "containerListeners": $List<($ContainerListener)>
 "quickcraftStatus": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $Container$$Type)

public "removed"(arg0: $Player$$Type): void
public "handler$ehc000$deeperdarker$stillValid"(arg0: $Player$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "stillValid"(arg0: $Player$$Type): boolean
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShulkerBoxMenu$$Type = ($ShulkerBoxMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShulkerBoxMenu$$Original = $ShulkerBoxMenu;}
declare module "net.minecraft.world.inventory.ContainerLevelAccess" {
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ContainerLevelAccessMixin$$Interface} from "com.railwayteam.railways.neoforge.mixin.ContainerLevelAccessMixin"

export interface $ContainerLevelAccess$$Interface extends $ContainerLevelAccessMixin$$Interface {

(arg0: $BiFunction<($Level), ($BlockPos), (T)>): (T)?
}

export class $ContainerLevelAccess implements $ContainerLevelAccess$$Interface {
static readonly "NULL": $ContainerLevelAccess

 "execute"(arg0: $BiConsumer$$Type<($Level), ($BlockPos)>): void
static "create"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $ContainerLevelAccess
 "evaluate"<T>(arg0: $BiFunction$$Type<($Level), ($BlockPos), (T)>, arg1: T): T
 "evaluate"<T>(arg0: $BiFunction$$Type<($Level), ($BlockPos), (T)>): $Optional<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerLevelAccess$$Type = ((arg0: $BiFunction<($Level), ($BlockPos), (T)>) => (T)?);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContainerLevelAccess$$Original = $ContainerLevelAccess;}
declare module "net.minecraft.world.inventory.LecternMenu" {
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$ContainerSynchronizer} from "net.minecraft.world.inventory.ContainerSynchronizer"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$ContainerData$$Type} from "net.minecraft.world.inventory.ContainerData"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$MenuType} from "net.minecraft.world.inventory.MenuType"
import {$Set} from "java.util.Set"

export class $LecternMenu extends $AbstractContainerMenu {
readonly "quickcraftSlots": $Set<($Slot)>
static readonly "BUTTON_PREV_PAGE": integer
 "remoteCarried": $ItemStack
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "BUTTON_PAGE_JUMP_RANGE_START": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "BUTTON_NEXT_PAGE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "BUTTON_TAKE_BOOK": integer
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "quickcraftType": integer
 "synchronizer": $ContainerSynchronizer
 "menuType": $MenuType<(never)>
readonly "containerListeners": $List<($ContainerListener)>
 "quickcraftStatus": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer)
constructor(arg0: integer, arg1: $Container$$Type, arg2: $ContainerData$$Type)

public "getPage"(): integer
public "getBook"(): $ItemStack
public "setData"(arg0: integer, arg1: integer): void
public "stillValid"(arg0: $Player$$Type): boolean
public "clickMenuButton"(arg0: $Player$$Type, arg1: integer): boolean
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
get "page"(): integer
get "book"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LecternMenu$$Type = ($LecternMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LecternMenu$$Original = $LecternMenu;}
declare module "net.minecraft.world.inventory.BrewingStandMenu" {
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$ContainerSynchronizer} from "net.minecraft.world.inventory.ContainerSynchronizer"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$ContainerData$$Type} from "net.minecraft.world.inventory.ContainerData"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$MenuType} from "net.minecraft.world.inventory.MenuType"
import {$Set} from "java.util.Set"

export class $BrewingStandMenu extends $AbstractContainerMenu {
readonly "quickcraftSlots": $Set<($Slot)>
 "remoteCarried": $ItemStack
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
static readonly "$assertionsDisabled": boolean
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "quickcraftType": integer
 "synchronizer": $ContainerSynchronizer
 "menuType": $MenuType<(never)>
readonly "containerListeners": $List<($ContainerListener)>
 "quickcraftStatus": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $Container$$Type, arg3: $ContainerData$$Type)

public "getFuel"(): integer
public "handler$ehc000$deeperdarker$stillValid"(arg0: $Player$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "getBrewingTicks"(): integer
public "stillValid"(arg0: $Player$$Type): boolean
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
get "fuel"(): integer
get "brewingTicks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrewingStandMenu$$Type = ($BrewingStandMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BrewingStandMenu$$Original = $BrewingStandMenu;}
declare module "net.minecraft.world.inventory.ItemCombinerMenuSlotDefinition$SlotDefinition" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Record} from "java.lang.Record"

export class $ItemCombinerMenuSlotDefinition$SlotDefinition extends $Record {
static readonly "EMPTY": $ItemCombinerMenuSlotDefinition$SlotDefinition

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: $Predicate$$Type<($ItemStack)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "x"(): integer
public "y"(): integer
public "slotIndex"(): integer
public "mayPlace"(): $Predicate<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCombinerMenuSlotDefinition$SlotDefinition$$Type = ({"mayPlace"?: $Predicate$$Type<($ItemStack$$Type)>, "y"?: integer, "x"?: integer, "slotIndex"?: integer}) | ([mayPlace?: $Predicate$$Type<($ItemStack$$Type)>, y?: integer, x?: integer, slotIndex?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemCombinerMenuSlotDefinition$SlotDefinition$$Original = $ItemCombinerMenuSlotDefinition$SlotDefinition;}
declare module "net.minecraft.world.inventory.MenuConstructor" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"

export interface $MenuConstructor$$Interface {

(arg0: integer, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu$$Type
}

export class $MenuConstructor implements $MenuConstructor$$Interface {
 "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuConstructor$$Type = ((arg0: integer, arg1: $Inventory, arg2: $Player) => $AbstractContainerMenu$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MenuConstructor$$Original = $MenuConstructor;}
