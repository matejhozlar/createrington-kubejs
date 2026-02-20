declare module "org.sinytra.connector.mod.compat.ItemStackExtensions" {
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export interface $ItemStackExtensions$$Interface {

(arg0: $UseOnContext): $InteractionResult$$Type
}

export class $ItemStackExtensions implements $ItemStackExtensions$$Interface {
 "connector_useOn"(arg0: $UseOnContext$$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackExtensions$$Type = ((arg0: $UseOnContext) => $InteractionResult$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemStackExtensions$$Original = $ItemStackExtensions;}
declare module "org.sinytra.connector.mod.mixin.recipebook.RecipeBookCategoriesAccessor" {
import {$Map$$Type} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$RecipeBookCategories$$Type} from "net.minecraft.client.RecipeBookCategories"

export interface $RecipeBookCategoriesAccessor$$Interface {
set "AGGREGATE_CATEGORIES"(value: $Map$$Type<($RecipeBookCategories$$Type), ($List$$Type<($RecipeBookCategories$$Type)>)>)
}

export class $RecipeBookCategoriesAccessor implements $RecipeBookCategoriesAccessor$$Interface {
static "setAGGREGATE_CATEGORIES"(arg0: $Map$$Type<($RecipeBookCategories$$Type), ($List$$Type<($RecipeBookCategories$$Type)>)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeBookCategoriesAccessor$$Type = ($RecipeBookCategoriesAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeBookCategoriesAccessor$$Original = $RecipeBookCategoriesAccessor;}
