declare module "com.illusivesoulworks.polymorph.mixin.core.AccessorInventoryMenu" {
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$CraftingContainer} from "net.minecraft.world.inventory.CraftingContainer"
import {$ResultContainer} from "net.minecraft.world.inventory.ResultContainer"

export interface $AccessorInventoryMenu$$Interface {
get "resultSlots"(): $ResultContainer
get "owner"(): $Player
get "craftSlots"(): $CraftingContainer
}

export class $AccessorInventoryMenu implements $AccessorInventoryMenu$$Interface {
 "getResultSlots"(): $ResultContainer
 "getOwner"(): $Player
 "getCraftSlots"(): $CraftingContainer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorInventoryMenu$$Type = ($AccessorInventoryMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorInventoryMenu$$Original = $AccessorInventoryMenu;}
declare module "com.illusivesoulworks.polymorph.mixin.core.AccessorSmithingTrimRecipe" {
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"

export interface $AccessorSmithingTrimRecipe$$Interface {
get "base"(): $Ingredient
get "template"(): $Ingredient
get "addition"(): $Ingredient
}

export class $AccessorSmithingTrimRecipe implements $AccessorSmithingTrimRecipe$$Interface {
 "getBase"(): $Ingredient
 "getTemplate"(): $Ingredient
 "getAddition"(): $Ingredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorSmithingTrimRecipe$$Type = ($AccessorSmithingTrimRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorSmithingTrimRecipe$$Original = $AccessorSmithingTrimRecipe;}
declare module "com.illusivesoulworks.polymorph.mixin.core.AccessorAbstractFurnaceBlockEntity" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"

export interface $AccessorAbstractFurnaceBlockEntity$$Interface {

(): $NonNullList$$Type<($ItemStack$$Type)>
get "items"(): $NonNullList<($ItemStack)>
}

export class $AccessorAbstractFurnaceBlockEntity implements $AccessorAbstractFurnaceBlockEntity$$Interface {
 "getItems"(): $NonNullList<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorAbstractFurnaceBlockEntity$$Type = (() => $NonNullList$$Type<($ItemStack$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorAbstractFurnaceBlockEntity$$Original = $AccessorAbstractFurnaceBlockEntity;}
declare module "com.illusivesoulworks.polymorph.mixin.core.AccessorCraftingMenu" {
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$CraftingContainer} from "net.minecraft.world.inventory.CraftingContainer"
import {$ResultContainer} from "net.minecraft.world.inventory.ResultContainer"

export interface $AccessorCraftingMenu$$Interface {
get "resultSlots"(): $ResultContainer
get "craftSlots"(): $CraftingContainer
get "player"(): $Player
}

export class $AccessorCraftingMenu implements $AccessorCraftingMenu$$Interface {
 "getResultSlots"(): $ResultContainer
 "getCraftSlots"(): $CraftingContainer
 "getPlayer"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorCraftingMenu$$Type = ($AccessorCraftingMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorCraftingMenu$$Original = $AccessorCraftingMenu;}
declare module "com.illusivesoulworks.polymorph.mixin.core.AccessorSmithingTransformRecipe" {
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"

export interface $AccessorSmithingTransformRecipe$$Interface {
get "base"(): $Ingredient
get "template"(): $Ingredient
get "addition"(): $Ingredient
}

export class $AccessorSmithingTransformRecipe implements $AccessorSmithingTransformRecipe$$Interface {
 "getBase"(): $Ingredient
 "getTemplate"(): $Ingredient
 "getAddition"(): $Ingredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorSmithingTransformRecipe$$Type = ($AccessorSmithingTransformRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorSmithingTransformRecipe$$Original = $AccessorSmithingTransformRecipe;}
declare module "com.illusivesoulworks.polymorph.mixin.core.AccessorCrafterMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorCrafterMenu$$Interface {

(): void
}

export class $AccessorCrafterMenu implements $AccessorCrafterMenu$$Interface {
 "callRefreshRecipeResult"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorCrafterMenu$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorCrafterMenu$$Original = $AccessorCrafterMenu;}
