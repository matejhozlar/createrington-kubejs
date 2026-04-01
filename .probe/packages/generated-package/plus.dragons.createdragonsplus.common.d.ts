declare module "plus.dragons.createdragonsplus.common.recipe.UpdateRecipesEvent" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map$$Type} from "java.util.Map"
import {$RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$Multimap$$Type} from "com.google.common.collect.Multimap"
import {$RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Event} from "net.neoforged.bus.api.Event"
import {$RecipeManager, $RecipeManager$$Type} from "net.minecraft.world.item.crafting.RecipeManager"

export class $UpdateRecipesEvent extends $Event {
constructor(arg0: $RecipeManager$$Type, arg1: $Multimap$$Type<($RecipeType$$Type<(never)>), ($RecipeHolder$$Type<(never)>)>, arg2: $Map$$Type<($ResourceLocation$$Type), ($RecipeHolder$$Type<(never)>)>)

public "apply"(): void
public "addRecipe"(arg0: $RecipeHolder$$Type<(never)>): void
public "getRecipeManager"(): $RecipeManager
public "removeRecipe"(arg0: $RecipeHolder$$Type<(never)>): void
get "recipeManager"(): $RecipeManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpdateRecipesEvent$$Type = ($UpdateRecipesEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UpdateRecipesEvent$$Original = $UpdateRecipesEvent;}
