declare module "net.minecraft.world.inventory.CartographyTableMenu" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$ContainerLevelAccess$$Type} from "net.minecraft.world.inventory.ContainerLevelAccess"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"

export class $CartographyTableMenu extends $AbstractContainerMenu {
readonly "container": $Container
static readonly "ADDITIONAL_SLOT": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "RESULT_SLOT": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "MAP_SLOT": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $ContainerLevelAccess$$Type)

public "removed"(arg0: $Player$$Type): void
public "handler$com000$deeperdarker$stillValid"(arg0: $Player$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "slotsChanged"(arg0: $Container$$Type): void
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "canTakeItemForPickAll"(arg0: $ItemStack$$Type, arg1: $Slot$$Type): boolean
public "stillValid"(arg0: $Player$$Type): boolean
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
declare module "net.minecraft.world.inventory.BeaconMenu" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional$$Type} from "java.util.Optional"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ContainerData$$Type} from "net.minecraft.world.inventory.ContainerData"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$ContainerLevelAccess$$Type} from "net.minecraft.world.inventory.ContainerLevelAccess"

export class $BeaconMenu extends $AbstractContainerMenu {
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer

constructor(arg0: integer, arg1: $Container$$Type)
constructor(arg0: integer, arg1: $Container$$Type, arg2: $ContainerData$$Type, arg3: $ContainerLevelAccess$$Type)

public "removed"(arg0: $Player$$Type): void
public "hasPayment"(): boolean
public "handler$com000$deeperdarker$stillValid"(arg0: $Player$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "setData"(arg0: integer, arg1: integer): void
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "updateEffects"(arg0: ($Holder$$Type<($MobEffect$$Type)>)?, arg1: ($Holder$$Type<($MobEffect$$Type)>)?): void
public "getPrimaryEffect"(): $Holder<($MobEffect)>
public static "encodeEffect"(arg0: $Holder$$Type<($MobEffect)>): integer
public static "decodeEffect"(arg0: integer): $Holder<($MobEffect)>
public "getSecondaryEffect"(): $Holder<($MobEffect)>
public "stillValid"(arg0: $Player$$Type): boolean
public "getLevels"(): integer
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
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$ContainerLevelAccess$$Type} from "net.minecraft.world.inventory.ContainerLevelAccess"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"

export class $GrindstoneMenu extends $AbstractContainerMenu {
static readonly "INPUT_SLOT": integer
static readonly "ADDITIONAL_SLOT": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "MAX_NAME_LENGTH": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "RESULT_SLOT": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $ContainerLevelAccess$$Type)

public "removed"(arg0: $Player$$Type): void
public "handler$com000$deeperdarker$stillValid"(arg0: $Player$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "slotsChanged"(arg0: $Container$$Type): void
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "computeResult"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): $ItemStack
public "stillValid"(arg0: $Player$$Type): boolean
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
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"

export class $ChestMenu extends $AbstractContainerMenu {
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer

constructor(arg0: $MenuType$$Type<(never)>, arg1: integer, arg2: $Inventory$$Type, arg3: $Container$$Type, arg4: integer)

public "removed"(arg0: $Player$$Type): void
public "handler$com000$deeperdarker$stillValid"(arg0: $Player$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "getContainer"(): $Container
public static "threeRows"(arg0: integer, arg1: $Inventory$$Type): $ChestMenu
public static "threeRows"(arg0: integer, arg1: $Inventory$$Type, arg2: $Container$$Type): $ChestMenu
public "getRowCount"(): integer
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public static "oneRow"(arg0: integer, arg1: $Inventory$$Type): $ChestMenu
public static "twoRows"(arg0: integer, arg1: $Inventory$$Type): $ChestMenu
public static "fourRows"(arg0: integer, arg1: $Inventory$$Type): $ChestMenu
public static "sixRows"(arg0: integer, arg1: $Inventory$$Type, arg2: $Container$$Type): $ChestMenu
public static "sixRows"(arg0: integer, arg1: $Inventory$$Type): $ChestMenu
public static "fiveRows"(arg0: integer, arg1: $Inventory$$Type): $ChestMenu
public "stillValid"(arg0: $Player$$Type): boolean
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
declare module "net.minecraft.world.inventory.RecipeBookMenu" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeBookType} from "net.minecraft.world.inventory.RecipeBookType"
import {$MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$RecipeBookCategories} from "net.minecraft.client.RecipeBookCategories"
import {$StackedContents$$Type} from "net.minecraft.world.entity.player.StackedContents"

export class $RecipeBookMenu<I extends $RecipeInput, R extends $Recipe<(object)>> extends $AbstractContainerMenu {
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer

constructor(arg0: $MenuType$$Type<(never)>, arg1: integer)

public "getGridHeight"(): integer
public "recipeMatches"(arg0: $RecipeHolder$$Type<(R)>): boolean
public "getResultSlotIndex"(): integer
public "handlePlacement"(arg0: boolean, arg1: $RecipeHolder$$Type<(never)>, arg2: $ServerPlayer$$Type): void
public "getGridWidth"(): integer
public "getRecipeBookType"(): $RecipeBookType
public "getSize"(): integer
public "clearCraftingContent"(): void
public "shouldMoveToInventory"(arg0: integer): boolean
public "getRecipeBookCategories"(): $List<($RecipeBookCategories)>
public "fillCraftSlotsStackedContents"(arg0: $StackedContents$$Type): void
get "gridHeight"(): integer
get "resultSlotIndex"(): integer
get "gridWidth"(): integer
get "recipeBookType"(): $RecipeBookType
get "size"(): integer
get "recipeBookCategories"(): $List<($RecipeBookCategories)>
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
 "sendDataChange"(arg0: $AbstractContainerMenu$$Type, arg1: integer, arg2: integer): void
 "sendSlotChange"(arg0: $AbstractContainerMenu$$Type, arg1: integer, arg2: $ItemStack$$Type): void
 "sendInitialData"(arg0: $AbstractContainerMenu$$Type, arg1: $NonNullList$$Type<($ItemStack$$Type)>, arg2: $ItemStack$$Type, arg3: (integer)[]): void
 "sendCarriedChange"(arg0: $AbstractContainerMenu$$Type, arg1: $ItemStack$$Type): void
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
declare module "net.minecraft.world.inventory.StonecutterMenu" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$StonecutterRecipe} from "net.minecraft.world.item.crafting.StonecutterRecipe"
import {$RecipeHolder} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$ContainerLevelAccess$$Type} from "net.minecraft.world.inventory.ContainerLevelAccess"
import {$MenuType} from "net.minecraft.world.inventory.MenuType"

export class $StonecutterMenu extends $AbstractContainerMenu {
static readonly "INPUT_SLOT": integer
readonly "container": $Container
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "RESULT_SLOT": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $ContainerLevelAccess$$Type)

public "getType"(): $MenuType<(never)>
public "removed"(arg0: $Player$$Type): void
public "handler$com000$deeperdarker$stillValid"(arg0: $Player$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "getRecipes"(): $List<($RecipeHolder<($StonecutterRecipe)>)>
public "registerUpdateListener"(arg0: $Runnable$$Type): void
public "clickMenuButton"(arg0: $Player$$Type, arg1: integer): boolean
public "slotsChanged"(arg0: $Container$$Type): void
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "getNumRecipes"(): integer
public "hasInputItem"(): boolean
public "canTakeItemForPickAll"(arg0: $ItemStack$$Type, arg1: $Slot$$Type): boolean
public "getSelectedRecipeIndex"(): integer
public "stillValid"(arg0: $Player$$Type): boolean
get "type"(): $MenuType<(never)>
get "recipes"(): $List<($RecipeHolder<($StonecutterRecipe)>)>
get "numRecipes"(): integer
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
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$SingleRecipeInput} from "net.minecraft.world.item.crafting.SingleRecipeInput"
import {$RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$RecipeBookType} from "net.minecraft.world.inventory.RecipeBookType"
import {$RecipeBookMenu} from "net.minecraft.world.inventory.RecipeBookMenu"
import {$AbstractCookingRecipe, $AbstractCookingRecipe$$Type} from "net.minecraft.world.item.crafting.AbstractCookingRecipe"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$StackedContents$$Type} from "net.minecraft.world.entity.player.StackedContents"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"

export class $AbstractFurnaceMenu extends $RecipeBookMenu<($SingleRecipeInput), ($AbstractCookingRecipe)> {
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "INGREDIENT_SLOT": integer
static readonly "DATA_COUNT": integer
static readonly "RESULT_SLOT": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_COUNT": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "containerId": integer
static readonly "FUEL_SLOT": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

public "getGridHeight"(): integer
public "recipeMatches"(arg0: $RecipeHolder$$Type<($AbstractCookingRecipe$$Type)>): boolean
public "getResultSlotIndex"(): integer
public "getGridWidth"(): integer
public "getRecipeBookType"(): $RecipeBookType
public "getSize"(): integer
public "clearCraftingContent"(): void
public "shouldMoveToInventory"(arg0: integer): boolean
public "handler$com000$deeperdarker$stillValid"(arg0: $Player$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "isLit"(): boolean
public "fillCraftSlotsStackedContents"(arg0: $StackedContents$$Type): void
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "getLitProgress"(): float
public "getBurnProgress"(): float
public "stillValid"(arg0: $Player$$Type): boolean
get "gridHeight"(): integer
get "resultSlotIndex"(): integer
get "gridWidth"(): integer
get "recipeBookType"(): $RecipeBookType
get "size"(): integer
get "lit"(): boolean
get "litProgress"(): float
get "burnProgress"(): float
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
declare module "net.minecraft.world.inventory.PlayerEnderChestContainer" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$EnderChestBlockEntity$$Type} from "net.minecraft.world.level.block.entity.EnderChestBlockEntity"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$SimpleContainer} from "net.minecraft.world.SimpleContainer"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$ListTag, $ListTag$$Type} from "net.minecraft.nbt.ListTag"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $PlayerEnderChestContainer extends $SimpleContainer {
 "size": integer
 "items": $NonNullList<($ItemStack)>

constructor()

public "createTag"(arg0: $HolderLookup$Provider$$Type): $ListTag
public "setActiveChest"(arg0: $EnderChestBlockEntity$$Type): void
public "startOpen"(arg0: $Player$$Type): void
public "stopOpen"(arg0: $Player$$Type): void
public "isActiveChest"(arg0: $EnderChestBlockEntity$$Type): boolean
public "stillValid"(arg0: $Player$$Type): boolean
public "fromTag"(arg0: $ListTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
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

public "getRecipeUsed"(): $RecipeHolder<(never)>
public "isEmpty"(): boolean
public "getItem"(arg0: integer): $ItemStack
public "clearContent"(): void
public "getContainerSize"(): integer
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "setRecipeUsed"(arg0: $RecipeHolder$$Type<(never)>): void
public "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
public "stillValid"(arg0: $Player$$Type): boolean
public "setChanged"(): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "hasAnyMatching"(arg0: $Predicate$$Type<($ItemStack)>): boolean
public "canTakeItem"(arg0: $Container$$Type, arg1: integer, arg2: $ItemStack$$Type): boolean
public "getMaxStackSize"(): integer
public "getMaxStackSize"(arg0: $ItemStack$$Type): integer
public "startOpen"(arg0: $Player$$Type): void
public "hasAnyOf"(arg0: $Set$$Type<($Item$$Type)>): boolean
public "countItem"(arg0: $Item$$Type): integer
public "stopOpen"(arg0: $Player$$Type): void
public "awardUsedRecipes"(arg0: $Player$$Type, arg1: $List$$Type<($ItemStack$$Type)>): void
public "setRecipeUsed"(arg0: $Level$$Type, arg1: $ServerPlayer$$Type, arg2: $RecipeHolder$$Type<(never)>): boolean
public static "tryClear"(arg0: any): void
public "canReceiveTransferCooldown"(): boolean
public "setTransferCooldown"(arg0: long): void
public "lithium$itemInsertionTestRequiresStackSize1"(): boolean
public "getBlock"(level: $Level$$Type): $LevelBlock
public "getHeight"(): integer
public "getWidth"(): integer
public "asContainer"(): $Container
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "setChanged"(): void
public "isMutable"(): boolean
public "getSlotLimit"(slot: integer): integer
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "getStackInSlot"(slot: integer): $ItemStack
public "getSlots"(): integer
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "self"(): $Container
public "clear"(): void
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "getAllItems"(): $List<($ItemStack)>
public "countNonEmpty"(match: $ItemPredicate$$Type): integer
public "countNonEmpty"(): integer
public "isEmpty"(): boolean
public "count"(match: $ItemPredicate$$Type): integer
public "count"(): integer
public "clear"(match: $ItemPredicate$$Type): void
public "find"(match: $ItemPredicate$$Type): integer
public "find"(): integer
get "recipeUsed"(): $RecipeHolder<(never)>
get "empty"(): boolean
get "containerSize"(): integer
set "recipeUsed"(value: $RecipeHolder$$Type<(never)>)
get "changed"(): void
get "maxStackSize"(): integer
set "transferCooldown"(value: long)
get "height"(): integer
get "width"(): integer
get "changed"(): void
get "mutable"(): boolean
get "slots"(): integer
get "allItems"(): $List<($ItemStack)>
get "empty"(): boolean
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
declare module "net.minecraft.world.inventory.DataSlot" {
import {$ContainerData$$Type} from "net.minecraft.world.inventory.ContainerData"

export class $DataSlot {
constructor()

public "get"(): integer
public "set"(arg0: integer): void
public static "shared"(arg0: (integer)[], arg1: integer): $DataSlot
public static "standalone"(): $DataSlot
public "checkAndClearUpdateFlag"(): boolean
public static "forContainer"(arg0: $ContainerData$$Type, arg1: integer): $DataSlot
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
declare module "net.minecraft.world.inventory.BlastFurnaceMenu" {
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$ContainerData$$Type} from "net.minecraft.world.inventory.ContainerData"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractFurnaceMenu} from "net.minecraft.world.inventory.AbstractFurnaceMenu"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export class $BlastFurnaceMenu extends $AbstractFurnaceMenu {
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "INGREDIENT_SLOT": integer
static readonly "DATA_COUNT": integer
static readonly "RESULT_SLOT": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_COUNT": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "containerId": integer
static readonly "FUEL_SLOT": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

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
declare module "net.minecraft.world.inventory.CraftingContainer" {
import {$CraftingInput} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CraftingInput$Positioned} from "net.minecraft.world.item.crafting.CraftingInput$Positioned"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$List} from "java.util.List"
import {$StackedContentsCompatible$$Interface} from "net.minecraft.world.inventory.StackedContentsCompatible"
import {$Level$$Type} from "net.minecraft.world.level.Level"
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
get "height"(): integer
get "items"(): $List<($ItemStack)>
get "empty"(): boolean
get "containerSize"(): integer
get "maxStackSize"(): integer
get "changed"(): void
set "transferCooldown"(value: long)
get "height"(): integer
get "width"(): integer
get "changed"(): void
get "mutable"(): boolean
get "slots"(): integer
get "allItems"(): $List<($ItemStack)>
get "empty"(): boolean
}

export class $CraftingContainer implements $CraftingContainer$$Interface {
 "asCraftInput"(): $CraftingInput
 "getWidth"(): integer
 "getHeight"(): integer
 "getItems"(): $List<($ItemStack)>
 "asPositionedCraftInput"(): $CraftingInput$Positioned
 "isEmpty"(): boolean
 "getItem"(arg0: integer): $ItemStack
static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
 "canPlaceItem"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "hasAnyMatching"(arg0: $Predicate$$Type<($ItemStack)>): boolean
 "canTakeItem"(arg0: $Container$$Type, arg1: integer, arg2: $ItemStack$$Type): boolean
 "getContainerSize"(): integer
 "removeItemNoUpdate"(arg0: integer): $ItemStack
 "removeItem"(arg0: integer, arg1: integer): $ItemStack
 "getMaxStackSize"(): integer
 "getMaxStackSize"(arg0: $ItemStack$$Type): integer
 "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
 "startOpen"(arg0: $Player$$Type): void
 "hasAnyOf"(arg0: $Set$$Type<($Item$$Type)>): boolean
 "countItem"(arg0: $Item$$Type): integer
 "stopOpen"(arg0: $Player$$Type): void
 "stillValid"(arg0: $Player$$Type): boolean
 "setChanged"(): void
 "fillStackedContents"(arg0: $StackedContents$$Type): void
 "clearContent"(): void
static "tryClear"(arg0: any): void
 "canReceiveTransferCooldown"(): boolean
 "setTransferCooldown"(arg0: long): void
 "lithium$itemInsertionTestRequiresStackSize1"(): boolean
 "getBlock"(level: $Level$$Type): $LevelBlock
 "getHeight"(): integer
 "getWidth"(): integer
 "asContainer"(): $Container
 "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
 "setChanged"(): void
 "isMutable"(): boolean
 "getSlotLimit"(slot: integer): integer
 "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
 "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
 "getStackInSlot"(slot: integer): $ItemStack
 "getSlots"(): integer
 "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
 "self"(): $Container
 "clear"(): void
 "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
 "getAllItems"(): $List<($ItemStack)>
 "countNonEmpty"(match: $ItemPredicate$$Type): integer
 "countNonEmpty"(): integer
 "isEmpty"(): boolean
 "count"(match: $ItemPredicate$$Type): integer
 "count"(): integer
 "clear"(match: $ItemPredicate$$Type): void
 "find"(match: $ItemPredicate$$Type): integer
 "find"(): integer
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
declare module "net.minecraft.world.inventory.HopperMenu" {
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"

export class $HopperMenu extends $AbstractContainerMenu {
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
static readonly "CONTAINER_SIZE": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $Container$$Type)

public "removed"(arg0: $Player$$Type): void
public "handler$com000$deeperdarker$stillValid"(arg0: $Player$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "stillValid"(arg0: $Player$$Type): boolean
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
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"

export class $DispenserMenu extends $AbstractContainerMenu {
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $Container$$Type)

public "removed"(arg0: $Player$$Type): void
public "handler$com000$deeperdarker$stillValid"(arg0: $Player$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "stillValid"(arg0: $Player$$Type): boolean
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
declare module "net.minecraft.world.inventory.Slot" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$Optional} from "java.util.Optional"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$SlotAccessor$$Interface} from "net.dawson.adorablehamsterpets.mixin.accessor.SlotAccessor"

export class $Slot implements $SlotAccessor$$Interface {
readonly "container": $Container
 "x": integer
 "index": integer
 "y": integer

constructor(arg0: $Container$$Type, arg1: integer, arg2: integer, arg3: integer)

public "onQuickCraft"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): void
public "hasItem"(): boolean
public "remove"(arg0: integer): $ItemStack
public "set"(arg0: $ItemStack$$Type): void
public "isActive"(): boolean
public "getItem"(): $ItemStack
public "isFake"(): boolean
public "mayPickup"(arg0: $Player$$Type): boolean
public "mayPlace"(arg0: $ItemStack$$Type): boolean
public "adorablehamsterpets$getInventory"(): $Container
public "getSlotIndex"(): integer
public "getMaxStackSize"(): integer
public "getMaxStackSize"(arg0: $ItemStack$$Type): integer
public "setByPlayer"(arg0: $ItemStack$$Type): void
public "setByPlayer"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): void
public "getContainerSlot"(): integer
public "allowModification"(arg0: $Player$$Type): boolean
public "setBackground"(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type): $Slot
public "onTake"(arg0: $Player$$Type, arg1: $ItemStack$$Type): void
public "safeInsert"(arg0: $ItemStack$$Type, arg1: integer): $ItemStack
public "safeInsert"(arg0: $ItemStack$$Type): $ItemStack
public "tryRemove"(arg0: integer, arg1: integer, arg2: $Player$$Type): $Optional<($ItemStack)>
public "safeTake"(arg0: integer, arg1: integer, arg2: $Player$$Type): $ItemStack
public "getNoItemIcon"(): $Pair<($ResourceLocation), ($ResourceLocation)>
public "isSameInventory"(arg0: $Slot$$Type): boolean
public "isHighlightable"(): boolean
public "setChanged"(): void
get "active"(): boolean
get "item"(): $ItemStack
get "fake"(): boolean
get "slotIndex"(): integer
get "maxStackSize"(): integer
set "byPlayer"(value: $ItemStack$$Type)
get "containerSlot"(): integer
get "noItemIcon"(): $Pair<($ResourceLocation), ($ResourceLocation)>
get "highlightable"(): boolean
get "changed"(): void
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
declare module "net.minecraft.world.inventory.LoomMenu" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$BannerPattern} from "net.minecraft.world.level.block.entity.BannerPattern"
import {$ContainerLevelAccess$$Type} from "net.minecraft.world.inventory.ContainerLevelAccess"

export class $LoomMenu extends $AbstractContainerMenu {
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $ContainerLevelAccess$$Type)

public "getSelectedBannerPatternIndex"(): integer
public "removed"(arg0: $Player$$Type): void
public "handler$com000$deeperdarker$stillValid"(arg0: $Player$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "getResultSlot"(): $Slot
public "getDyeSlot"(): $Slot
public "getSelectablePatterns"(): $List<($Holder<($BannerPattern)>)>
public "registerUpdateListener"(arg0: $Runnable$$Type): void
public "clickMenuButton"(arg0: $Player$$Type, arg1: integer): boolean
public "slotsChanged"(arg0: $Container$$Type): void
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "getBannerSlot"(): $Slot
public "getPatternSlot"(): $Slot
public "stillValid"(arg0: $Player$$Type): boolean
get "selectedBannerPatternIndex"(): integer
get "resultSlot"(): $Slot
get "dyeSlot"(): $Slot
get "selectablePatterns"(): $List<($Holder<($BannerPattern)>)>
get "bannerSlot"(): $Slot
get "patternSlot"(): $Slot
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
declare module "net.minecraft.world.inventory.AnvilMenu" {
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$DataSlot} from "net.minecraft.world.inventory.DataSlot"
import {$ContainerLevelAccess, $ContainerLevelAccess$$Type} from "net.minecraft.world.inventory.ContainerLevelAccess"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$ItemCombinerMenu} from "net.minecraft.world.inventory.ItemCombinerMenu"

export class $AnvilMenu extends $ItemCombinerMenu {
static readonly "INPUT_SLOT": integer
 "repairItemCountCost": integer
readonly "cost": $DataSlot
 "access": $ContainerLevelAccess
static readonly "ADDITIONAL_SLOT": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "MAX_NAME_LENGTH": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "RESULT_SLOT": integer
 "itemName": StringJS
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $ContainerLevelAccess$$Type)

public static "calculateIncreasedRepairCost"(arg0: integer): integer
public "createResult"(): void
public "setItemName"(arg0: StringJS): boolean
public "setMaximumCost"(arg0: long): void
public "getCost"(): integer
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
declare module "net.minecraft.world.inventory.SmokerMenu" {
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$ContainerData$$Type} from "net.minecraft.world.inventory.ContainerData"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractFurnaceMenu} from "net.minecraft.world.inventory.AbstractFurnaceMenu"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export class $SmokerMenu extends $AbstractFurnaceMenu {
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "INGREDIENT_SLOT": integer
static readonly "DATA_COUNT": integer
static readonly "RESULT_SLOT": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_COUNT": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "containerId": integer
static readonly "FUEL_SLOT": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

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
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$ContainerData$$Type} from "net.minecraft.world.inventory.ContainerData"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractFurnaceMenu} from "net.minecraft.world.inventory.AbstractFurnaceMenu"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export class $FurnaceMenu extends $AbstractFurnaceMenu {
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "INGREDIENT_SLOT": integer
static readonly "DATA_COUNT": integer
static readonly "RESULT_SLOT": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_COUNT": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "containerId": integer
static readonly "FUEL_SLOT": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

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
declare module "net.minecraft.world.inventory.CraftingMenu" {
import {$CraftingInput} from "net.minecraft.world.item.crafting.CraftingInput"
import {$AccessorCraftingMenu$$Interface} from "com.illusivesoulworks.polymorph.mixin.core.AccessorCraftingMenu"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeBookMenu} from "net.minecraft.world.inventory.RecipeBookMenu"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$RecipeBookType} from "net.minecraft.world.inventory.RecipeBookType"
import {$ContainerLevelAccess$$Type} from "net.minecraft.world.inventory.ContainerLevelAccess"
import {$CraftingRecipe, $CraftingRecipe$$Type} from "net.minecraft.world.item.crafting.CraftingRecipe"
import {$CraftingContainer} from "net.minecraft.world.inventory.CraftingContainer"
import {$StackedContents$$Type} from "net.minecraft.world.entity.player.StackedContents"
import {$ResultContainer} from "net.minecraft.world.inventory.ResultContainer"

export class $CraftingMenu extends $RecipeBookMenu<($CraftingInput), ($CraftingRecipe)> implements $AccessorCraftingMenu$$Interface {
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "RESULT_SLOT": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
readonly "player": $Player

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $ContainerLevelAccess$$Type)

public "getGridHeight"(): integer
public "recipeMatches"(arg0: $RecipeHolder$$Type<($CraftingRecipe$$Type)>): boolean
public "getResultSlots"(): $ResultContainer
public "getResultSlotIndex"(): integer
public "getGridWidth"(): integer
public "getRecipeBookType"(): $RecipeBookType
public "getSize"(): integer
public "removed"(arg0: $Player$$Type): void
public "clearCraftingContent"(): void
public "finishPlacingRecipe"(arg0: $RecipeHolder$$Type<($CraftingRecipe$$Type)>): void
public "shouldMoveToInventory"(arg0: integer): boolean
public "handler$com000$deeperdarker$stillValid"(arg0: $Player$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "fillCraftSlotsStackedContents"(arg0: $StackedContents$$Type): void
public "getCraftSlots"(): $CraftingContainer
public "getPlayer"(): $Player
public "beginPlacingRecipe"(): void
public "slotsChanged"(arg0: $Container$$Type): void
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "canTakeItemForPickAll"(arg0: $ItemStack$$Type, arg1: $Slot$$Type): boolean
public "stillValid"(arg0: $Player$$Type): boolean
get "gridHeight"(): integer
get "resultSlots"(): $ResultContainer
get "resultSlotIndex"(): integer
get "gridWidth"(): integer
get "recipeBookType"(): $RecipeBookType
get "size"(): integer
get "craftSlots"(): $CraftingContainer
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
declare module "net.minecraft.world.inventory.InventoryMenu" {
import {$CraftingInput} from "net.minecraft.world.item.crafting.CraftingInput"
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeBookMenu} from "net.minecraft.world.inventory.RecipeBookMenu"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AccessorInventoryMenu$$Interface} from "com.illusivesoulworks.polymorph.mixin.core.AccessorInventoryMenu"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$RecipeBookType} from "net.minecraft.world.inventory.RecipeBookType"
import {$EquipmentSlot} from "net.minecraft.world.entity.EquipmentSlot"
import {$CraftingRecipe, $CraftingRecipe$$Type} from "net.minecraft.world.item.crafting.CraftingRecipe"
import {$CraftingContainer} from "net.minecraft.world.inventory.CraftingContainer"
import {$StackedContents$$Type} from "net.minecraft.world.entity.player.StackedContents"
import {$ResultContainer} from "net.minecraft.world.inventory.ResultContainer"

export class $InventoryMenu extends $RecipeBookMenu<($CraftingInput), ($CraftingRecipe)> implements $AccessorInventoryMenu$$Interface {
static readonly "CRAFT_SLOT_END": integer
static readonly "BLOCK_ATLAS": $ResourceLocation
static readonly "EMPTY_ARMOR_SLOT_BOOTS": $ResourceLocation
static readonly "TEXTURE_EMPTY_SLOTS": $Map<($EquipmentSlot), ($ResourceLocation)>
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
static readonly "CONTAINER_ID": integer

constructor(arg0: $Inventory$$Type, arg1: boolean, arg2: $Player$$Type)

public "getGridHeight"(): integer
public "recipeMatches"(arg0: $RecipeHolder$$Type<($CraftingRecipe$$Type)>): boolean
public "getResultSlots"(): $ResultContainer
public "getResultSlotIndex"(): integer
public "getGridWidth"(): integer
public "getRecipeBookType"(): $RecipeBookType
public "getSize"(): integer
public "removed"(arg0: $Player$$Type): void
public "getOwner"(): $Player
public "clearCraftingContent"(): void
public "shouldMoveToInventory"(arg0: integer): boolean
public "fillCraftSlotsStackedContents"(arg0: $StackedContents$$Type): void
public "getCraftSlots"(): $CraftingContainer
public static "isHotbarSlot"(arg0: integer): boolean
public "slotsChanged"(arg0: $Container$$Type): void
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "canTakeItemForPickAll"(arg0: $ItemStack$$Type, arg1: $Slot$$Type): boolean
public "stillValid"(arg0: $Player$$Type): boolean
get "gridHeight"(): integer
get "resultSlots"(): $ResultContainer
get "resultSlotIndex"(): integer
get "gridWidth"(): integer
get "recipeBookType"(): $RecipeBookType
get "size"(): integer
get "craftSlots"(): $CraftingContainer
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
declare module "net.minecraft.world.inventory.AbstractContainerMenu" {
import {$ContainerListener$$Type} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$ContainerSynchronizer$$Type} from "net.minecraft.world.inventory.ContainerSynchronizer"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Operation$$Type} from "com.llamalad7.mixinextras.injector.wrapoperation.Operation"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$OptionalInt} from "java.util.OptionalInt"
import {$MenuType} from "net.minecraft.world.inventory.MenuType"
import {$Set$$Type} from "java.util.Set"
import {$ClickType$$Type} from "net.minecraft.world.inventory.ClickType"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $AbstractContainerMenu {
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer

public static "getRedstoneSignalFromBlockEntity"(arg0: $BlockEntity$$Type): integer
public static "getRedstoneSignalFromContainer"(arg0: $Container$$Type): integer
public "getType"(): $MenuType<(never)>
public "getSlot"(arg0: integer): $Slot
public "removed"(arg0: $Player$$Type): void
public static "getQuickcraftHeader"(arg0: integer): integer
public static "isValidQuickcraftType"(arg0: integer, arg1: $Player$$Type): boolean
public "suppressRemoteUpdates"(): void
public "setRemoteSlotNoCopy"(arg0: integer, arg1: $ItemStack$$Type): void
public "resumeRemoteUpdates"(): void
public "sendAllDataToRemote"(): void
public "setSynchronizer"(arg0: $ContainerSynchronizer$$Type): void
public "addSlotListener"(arg0: $ContainerListener$$Type): void
public "transferState"(arg0: $AbstractContainerMenu$$Type): void
public "setRemoteSlot"(arg0: integer, arg1: $ItemStack$$Type): void
public "canDragTo"(arg0: $Slot$$Type): boolean
public "findSlot"(arg0: $Container$$Type, arg1: integer): $OptionalInt
public "broadcastChanges"(): void
public "wrapOperation$bpm000$geckolib$removeGeckolibIdOnCopy"(arg0: $ItemStack$$Type, arg1: integer, arg2: $Operation$$Type): $ItemStack
public "wrapOperation$bpm000$geckolib$forceGeckolibSlotChange"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Operation$$Type): boolean
public "setData"(arg0: integer, arg1: integer): void
public "clickMenuButton"(arg0: $Player$$Type, arg1: integer): boolean
public "isValidSlotIndex"(arg0: integer): boolean
public "removeSlotListener"(arg0: $ContainerListener$$Type): void
public "broadcastFullState"(): void
public static "getQuickcraftType"(arg0: integer): integer
public "incrementStateId"(): integer
public "slotsChanged"(arg0: $Container$$Type): void
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "initializeContents"(arg0: integer, arg1: $List$$Type<($ItemStack$$Type)>, arg2: $ItemStack$$Type): void
public "setRemoteCarried"(arg0: $ItemStack$$Type): void
public "setItem"(arg0: integer, arg1: integer, arg2: $ItemStack$$Type): void
public "addSlot"(arg0: $Slot$$Type): $Slot
public "getItems"(): $NonNullList<($ItemStack)>
public "clicked"(arg0: integer, arg1: integer, arg2: $ClickType$$Type, arg3: $Player$$Type): void
public "getStateId"(): integer
public "canTakeItemForPickAll"(arg0: $ItemStack$$Type, arg1: $Slot$$Type): boolean
public static "getQuickCraftPlaceCount"(arg0: $Set$$Type<($Slot$$Type)>, arg1: integer, arg2: $ItemStack$$Type): integer
public static "canItemQuickReplace"(arg0: $Slot$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "wrapOperation$bpm000$geckolib$forceGeckolibIdSync"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Operation$$Type): boolean
public static "getQuickcraftMask"(arg0: integer, arg1: integer): integer
public "stillValid"(arg0: $Player$$Type): boolean
public "getCarried"(): $ItemStack
public "setCarried"(arg0: $ItemStack$$Type): void
get "type"(): $MenuType<(never)>
set "synchronizer"(value: $ContainerSynchronizer$$Type)
set "remoteCarried"(value: $ItemStack$$Type)
get "items"(): $NonNullList<($ItemStack)>
get "stateId"(): integer
get "carried"(): $ItemStack
set "carried"(value: $ItemStack$$Type)
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
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Merchant, $Merchant$$Type} from "net.minecraft.world.item.trading.Merchant"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$MerchantOffers, $MerchantOffers$$Type} from "net.minecraft.world.item.trading.MerchantOffers"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export class $MerchantMenu extends $AbstractContainerMenu {
readonly "trader": $Merchant
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
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $Merchant$$Type)

public "removed"(arg0: $Player$$Type): void
public "getOffers"(): $MerchantOffers
public "setOffers"(arg0: $MerchantOffers$$Type): void
public "slotsChanged"(arg0: $Container$$Type): void
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "tryMoveItems"(arg0: integer): void
public "canTakeItemForPickAll"(arg0: $ItemStack$$Type, arg1: $Slot$$Type): boolean
public "showProgressBar"(): boolean
public "setShowProgressBar"(arg0: boolean): void
public "setSelectionHint"(arg0: integer): void
public "getFutureTraderXp"(): integer
public "getTraderLevel"(): integer
public "setCanRestock"(arg0: boolean): void
public "getTraderXp"(): integer
public "setMerchantLevel"(arg0: integer): void
public "canRestock"(): boolean
public "setXp"(arg0: integer): void
public "stillValid"(arg0: $Player$$Type): boolean
get "offers"(): $MerchantOffers
set "offers"(value: $MerchantOffers$$Type)
set "selectionHint"(value: integer)
get "futureTraderXp"(): integer
get "traderLevel"(): integer
get "traderXp"(): integer
set "merchantLevel"(value: integer)
set "xp"(value: integer)
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
get "recipeUsed"(): $RecipeHolder<(never)>
set "recipeUsed"(value: $RecipeHolder$$Type<(never)>)
}

export class $RecipeCraftingHolder implements $RecipeCraftingHolder$$Interface {
 "getRecipeUsed"(): $RecipeHolder<(never)>
 "awardUsedRecipes"(arg0: $Player$$Type, arg1: $List$$Type<($ItemStack$$Type)>): void
 "setRecipeUsed"(arg0: $Level$$Type, arg1: $ServerPlayer$$Type, arg2: $RecipeHolder$$Type<(never)>): boolean
 "setRecipeUsed"(arg0: $RecipeHolder$$Type<(never)>): void
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
declare module "net.minecraft.world.inventory.MenuType" {
import {$MenuType$MenuSupplier, $MenuType$MenuSupplier$$Type} from "net.minecraft.world.inventory.MenuType$MenuSupplier"
import {$FeatureFlagSet, $FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$LoomMenu} from "net.minecraft.world.inventory.LoomMenu"
import {$List} from "java.util.List"
import {$IMenuTypeExtension$$Interface} from "net.neoforged.neoforge.common.extensions.IMenuTypeExtension"
import {$GrindstoneMenu} from "net.minecraft.world.inventory.GrindstoneMenu"
import {$MenuTypeKJS$$Interface} from "dev.latvian.mods.kubejs.core.MenuTypeKJS"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$CartographyTableMenu} from "net.minecraft.world.inventory.CartographyTableMenu"
import {$Holder} from "net.minecraft.core.Holder"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CraftingMenu} from "net.minecraft.world.inventory.CraftingMenu"
import {$FeatureElement$$Interface} from "net.minecraft.world.flag.FeatureElement"
import {$BeaconMenu} from "net.minecraft.world.inventory.BeaconMenu"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$DispenserMenu} from "net.minecraft.world.inventory.DispenserMenu"
import {$AnvilMenu} from "net.minecraft.world.inventory.AnvilMenu"
import {$LecternMenu} from "net.minecraft.world.inventory.LecternMenu"
import {$EnchantmentMenu} from "net.minecraft.world.inventory.EnchantmentMenu"
import {$SmokerMenu} from "net.minecraft.world.inventory.SmokerMenu"
import {$CrafterMenu} from "net.minecraft.world.inventory.CrafterMenu"
import {$ChestMenu} from "net.minecraft.world.inventory.ChestMenu"
import {$IContainerFactory$$Type} from "net.neoforged.neoforge.network.IContainerFactory"
import {$StonecutterMenu} from "net.minecraft.world.inventory.StonecutterMenu"
import {$ShulkerBoxMenu} from "net.minecraft.world.inventory.ShulkerBoxMenu"
import {$BlastFurnaceMenu} from "net.minecraft.world.inventory.BlastFurnaceMenu"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$Registry} from "net.minecraft.core.Registry"
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

public "getId"(): StringJS
public "create"(arg0: integer, arg1: $Inventory$$Type, arg2: $RegistryFriendlyByteBuf$$Type): T
public "create"(arg0: integer, arg1: $Inventory$$Type): T
public "getKey"(): $ResourceKey
public "requiredFeatures"(): $FeatureFlagSet
public "isEnabled"(arg0: $FeatureFlagSet$$Type): boolean
public static "create"<T extends $AbstractContainerMenu>(arg0: $IContainerFactory$$Type<(T)>): $MenuType<(T)>
public "getRegistryId"(): $ResourceKey<($Registry<($MenuType<(never)>)>)>
public "getRegistry"(): $Registry<($MenuType<(never)>)>
public "hasTag"(tag: $ResourceLocation$$Type): boolean
public "getMod"(): StringJS
public "getIdLocation"(): $ResourceLocation
public "getTagKeys"(): $List<($TagKey<($MenuType<(never)>)>)>
public "asHolder"(): $Holder<($MenuType<(never)>)>
public "getTags"(): $List<($ResourceLocation)>
public "specialEquals"(o: any, shallow: boolean): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "id"(): StringJS
get "key"(): $ResourceKey
get "registryId"(): $ResourceKey<($Registry<($MenuType<(never)>)>)>
get "registry"(): $Registry<($MenuType<(never)>)>
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
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$ContainerLevelAccess, $ContainerLevelAccess$$Type} from "net.minecraft.world.inventory.ContainerLevelAccess"
import {$MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"

export class $ItemCombinerMenu extends $AbstractContainerMenu {
 "access": $ContainerLevelAccess
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
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: $MenuType$$Type<(never)>, arg1: integer, arg2: $Inventory$$Type, arg3: $ContainerLevelAccess$$Type)

public "removed"(arg0: $Player$$Type): void
public "handler$com000$deeperdarker$stillValid"(arg0: $Player$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "createResult"(): void
public "getResultSlot"(): integer
public "getSlotToQuickMoveTo"(arg0: $ItemStack$$Type): integer
public "slotsChanged"(arg0: $Container$$Type): void
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "stillValid"(arg0: $Player$$Type): boolean
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
declare module "net.minecraft.world.inventory.CrafterMenu" {
import {$ContainerData$$Type} from "net.minecraft.world.inventory.ContainerData"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$ContainerListener$$Interface} from "net.minecraft.world.inventory.ContainerListener"
import {$Container} from "net.minecraft.world.Container"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$AccessorCrafterMenu$$Interface} from "com.illusivesoulworks.polymorph.mixin.core.AccessorCrafterMenu"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$CraftingContainer$$Type} from "net.minecraft.world.inventory.CraftingContainer"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export class $CrafterMenu extends $AbstractContainerMenu implements $ContainerListener$$Interface, $AccessorCrafterMenu$$Interface {
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $CraftingContainer$$Type, arg3: $ContainerData$$Type)

public "callRefreshRecipeResult"(): void
public "slotChanged"(arg0: $AbstractContainerMenu$$Type, arg1: integer, arg2: $ItemStack$$Type): void
public "getContainer"(): $Container
public "isPowered"(): boolean
public "dataChanged"(arg0: $AbstractContainerMenu$$Type, arg1: integer, arg2: integer): void
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "setSlotState"(arg0: integer, arg1: boolean): void
public "isSlotDisabled"(arg0: integer): boolean
public "stillValid"(arg0: $Player$$Type): boolean
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
declare module "net.minecraft.world.inventory.ShulkerBoxMenu" {
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"

export class $ShulkerBoxMenu extends $AbstractContainerMenu {
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $Container$$Type)

public "removed"(arg0: $Player$$Type): void
public "handler$com000$deeperdarker$stillValid"(arg0: $Player$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "stillValid"(arg0: $Player$$Type): boolean
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
declare module "net.minecraft.world.inventory.SmithingMenu" {
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ContainerLevelAccess, $ContainerLevelAccess$$Type} from "net.minecraft.world.inventory.ContainerLevelAccess"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$ItemCombinerMenu} from "net.minecraft.world.inventory.ItemCombinerMenu"

export class $SmithingMenu extends $ItemCombinerMenu {
 "access": $ContainerLevelAccess
static readonly "ADDITIONAL_SLOT": integer
static readonly "TEMPLATE_SLOT": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "ADDITIONAL_SLOT_X_PLACEMENT": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "RESULT_SLOT": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "BASE_SLOT_X_PLACEMENT": integer
static readonly "BASE_SLOT": integer
 "containerId": integer
static readonly "SLOT_Y_PLACEMENT": integer
static readonly "TEMPLATE_SLOT_X_PLACEMENT": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $ContainerLevelAccess$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type)

public "createResult"(): void
public "getSlotToQuickMoveTo"(arg0: $ItemStack$$Type): integer
public "canMoveIntoInputSlots"(arg0: $ItemStack$$Type): boolean
public "canTakeItemForPickAll"(arg0: $ItemStack$$Type, arg1: $Slot$$Type): boolean
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
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$ContainerData$$Type} from "net.minecraft.world.inventory.ContainerData"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export class $LecternMenu extends $AbstractContainerMenu {
static readonly "BUTTON_PREV_PAGE": integer
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
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer)
constructor(arg0: integer, arg1: $Container$$Type, arg2: $ContainerData$$Type)

public "getPage"(): integer
public "setData"(arg0: integer, arg1: integer): void
public "clickMenuButton"(arg0: $Player$$Type, arg1: integer): boolean
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "getBook"(): $ItemStack
public "stillValid"(arg0: $Player$$Type): boolean
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
declare module "net.minecraft.world.inventory.EnchantmentMenu" {
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$ContainerLevelAccess$$Type} from "net.minecraft.world.inventory.ContainerLevelAccess"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"

export class $EnchantmentMenu extends $AbstractContainerMenu {
readonly "costs": (integer)[]
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
readonly "enchantClue": (integer)[]
 "containerId": integer
readonly "levelClue": (integer)[]
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $ContainerLevelAccess$$Type)

public "getGoldCount"(): integer
public "removed"(arg0: $Player$$Type): void
public "handler$com000$deeperdarker$stillValid"(arg0: $Player$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "getEnchantmentSeed"(): integer
public "clickMenuButton"(arg0: $Player$$Type, arg1: integer): boolean
public "slotsChanged"(arg0: $Container$$Type): void
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "stillValid"(arg0: $Player$$Type): boolean
get "goldCount"(): integer
get "enchantmentSeed"(): integer
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
declare module "net.minecraft.world.inventory.BrewingStandMenu" {
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$ContainerData$$Type} from "net.minecraft.world.inventory.ContainerData"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"

export class $BrewingStandMenu extends $AbstractContainerMenu {
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $Container$$Type, arg3: $ContainerData$$Type)

public "handler$com000$deeperdarker$stillValid"(arg0: $Player$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "getBrewingTicks"(): integer
public "getFuel"(): integer
public "stillValid"(arg0: $Player$$Type): boolean
get "brewingTicks"(): integer
get "fuel"(): integer
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
