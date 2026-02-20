declare module "plus.dragons.createdragonsplus.common.recipe.UpdateRecipesEvent" {
import {$Map$$Type} from "java.util.Map"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$Multimap$$Type} from "com.google.common.collect.Multimap"
import {$RecipeManager, $RecipeManager$$Type} from "net.minecraft.world.item.crafting.RecipeManager"
import {$Event} from "net.neoforged.bus.api.Event"
import {$RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"

export class $UpdateRecipesEvent extends $Event {
constructor(arg0: $RecipeManager$$Type, arg1: $Multimap$$Type<($RecipeType$$Type<(never)>), ($RecipeHolder$$Type<(never)>)>, arg2: $Map$$Type<($ResourceLocation$$Type), ($RecipeHolder$$Type<(never)>)>)

public "apply"(): void
public "getRecipeManager"(): $RecipeManager
public "addRecipe"(arg0: $RecipeHolder$$Type<(never)>): void
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
