import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $RecipeInput, $Recipe } from "@package/net/minecraft/world/item/crafting";

declare module "@package/petrolpark/mc/library/core/flags/recipe" {
    export class $IHandleFlagsMyselfRecipe<I extends $RecipeInput> {
    }
    export interface $IHandleFlagsMyselfRecipe<I extends $RecipeInput> extends $Recipe<I> {
        areFlagsHandled(arg0: I, arg1: $HolderLookup$Provider): boolean;
    }
}
