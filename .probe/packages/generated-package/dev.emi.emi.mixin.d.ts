declare module "dev.emi.emi.mixin.accessor.BakedModelManagerAccessor" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$ModelResourceLocation, $ModelResourceLocation$$Type} from "net.minecraft.client.resources.model.ModelResourceLocation"

export interface $BakedModelManagerAccessor$$Interface {

(): $Map$$Type<($ModelResourceLocation$$Type), ($BakedModel$$Type)>
get "models"(): $Map<($ModelResourceLocation), ($BakedModel)>
}

export class $BakedModelManagerAccessor implements $BakedModelManagerAccessor$$Interface {
 "getModels"(): $Map<($ModelResourceLocation), ($BakedModel)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakedModelManagerAccessor$$Type = (() => $Map$$Type<($ModelResourceLocation$$Type), ($BakedModel$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BakedModelManagerAccessor$$Original = $BakedModelManagerAccessor;}
declare module "dev.emi.emi.mixin.accessor.SmithingTrimRecipeAccessor" {
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"

export interface $SmithingTrimRecipeAccessor$$Interface {
get "base"(): $Ingredient
get "template"(): $Ingredient
get "addition"(): $Ingredient
}

export class $SmithingTrimRecipeAccessor implements $SmithingTrimRecipeAccessor$$Interface {
 "getBase"(): $Ingredient
 "getTemplate"(): $Ingredient
 "getAddition"(): $Ingredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmithingTrimRecipeAccessor$$Type = ($SmithingTrimRecipeAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmithingTrimRecipeAccessor$$Original = $SmithingTrimRecipeAccessor;}
declare module "dev.emi.emi.mixin.accessor.HandledScreenAccessor" {
import {$Slot} from "net.minecraft.world.inventory.Slot"

export interface $HandledScreenAccessor$$Interface {
get "x"(): integer
get "y"(): integer
get "backgroundHeight"(): integer
get "backgroundWidth"(): integer
get "focusedSlot"(): $Slot
}

export class $HandledScreenAccessor implements $HandledScreenAccessor$$Interface {
 "getX"(): integer
 "getY"(): integer
 "getBackgroundHeight"(): integer
 "getBackgroundWidth"(): integer
 "getFocusedSlot"(): $Slot
 "invokeGetSlotAt"(arg0: double, arg1: double): $Slot
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HandledScreenAccessor$$Type = ($HandledScreenAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HandledScreenAccessor$$Original = $HandledScreenAccessor;}
declare module "dev.emi.emi.mixin.accessor.SmithingTransformRecipeAccessor" {
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"

export interface $SmithingTransformRecipeAccessor$$Interface {
get "base"(): $Ingredient
get "template"(): $Ingredient
get "addition"(): $Ingredient
}

export class $SmithingTransformRecipeAccessor implements $SmithingTransformRecipeAccessor$$Interface {
 "getBase"(): $Ingredient
 "getTemplate"(): $Ingredient
 "getAddition"(): $Ingredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmithingTransformRecipeAccessor$$Type = ($SmithingTransformRecipeAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmithingTransformRecipeAccessor$$Original = $SmithingTransformRecipeAccessor;}
declare module "dev.emi.emi.mixin.accessor.BrewingRecipeRegistryAccessor" {
import {$PotionBrewing$Mix} from "net.minecraft.world.item.alchemy.PotionBrewing$Mix"
import {$Potion} from "net.minecraft.world.item.alchemy.Potion"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$List} from "java.util.List"
import {$Item} from "net.minecraft.world.item.Item"

export interface $BrewingRecipeRegistryAccessor$$Interface {
get "potionTypes"(): $List<($Ingredient)>
get "potionRecipes"(): $List<($PotionBrewing$Mix<($Potion)>)>
get "itemRecipes"(): $List<($PotionBrewing$Mix<($Item)>)>
}

export class $BrewingRecipeRegistryAccessor implements $BrewingRecipeRegistryAccessor$$Interface {
 "getPotionTypes"(): $List<($Ingredient)>
 "getPotionRecipes"(): $List<($PotionBrewing$Mix<($Potion)>)>
 "getItemRecipes"(): $List<($PotionBrewing$Mix<($Item)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrewingRecipeRegistryAccessor$$Type = ($BrewingRecipeRegistryAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BrewingRecipeRegistryAccessor$$Original = $BrewingRecipeRegistryAccessor;}
declare module "dev.emi.emi.mixin.accessor.DrawContextAccessor" {
import {$List, $List$$Type} from "java.util.List"
import {$Font, $Font$$Type} from "net.minecraft.client.gui.Font"
import {$ClientTooltipPositioner, $ClientTooltipPositioner$$Type} from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipPositioner"
import {$ClientTooltipComponent, $ClientTooltipComponent$$Type} from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent"

export interface $DrawContextAccessor$$Interface {

(arg0: $Font, arg1: $List<($ClientTooltipComponent)>, arg2: integer, arg3: integer, arg4: $ClientTooltipPositioner): void
}

export class $DrawContextAccessor implements $DrawContextAccessor$$Interface {
 "invokeDrawTooltip"(arg0: $Font$$Type, arg1: $List$$Type<($ClientTooltipComponent$$Type)>, arg2: integer, arg3: integer, arg4: $ClientTooltipPositioner$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrawContextAccessor$$Type = ((arg0: $Font, arg1: $List<($ClientTooltipComponent)>, arg2: integer, arg3: integer, arg4: $ClientTooltipPositioner) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DrawContextAccessor$$Original = $DrawContextAccessor;}
declare module "dev.emi.emi.mixin.accessor.ItemRendererAccessor" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"

export interface $ItemRendererAccessor$$Interface {

(arg0: $BakedModel, arg1: $ItemStack, arg2: integer, arg3: integer, arg4: $PoseStack, arg5: $VertexConsumer): void
}

export class $ItemRendererAccessor implements $ItemRendererAccessor$$Interface {
 "invokeRenderBakedItemModel"(arg0: $BakedModel$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: integer, arg4: $PoseStack$$Type, arg5: $VertexConsumer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemRendererAccessor$$Type = ((arg0: $BakedModel, arg1: $ItemStack, arg2: integer, arg3: integer, arg4: $PoseStack, arg5: $VertexConsumer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemRendererAccessor$$Original = $ItemRendererAccessor;}
