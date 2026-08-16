import { $Supplier_ } from "@package/java/util/function";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $MechanicalPressBlockEntity, $PressingRecipe } from "@package/com/simibubi/create/content/kinetics/press";

declare module "@package/petrolpark/mc/library/compat/create/core/world/block/entity/press" {
    export class $PressingRecipeSearchEvent extends $Event implements $ICancellableEvent {
        getStack(): $ItemStack;
        addRecipe(arg0: $Supplier_<($RecipeHolder<$PressingRecipe>) | undefined>, arg1: number): void;
        getBlockEntity(): $MechanicalPressBlockEntity;
        getRecipe(): $RecipeHolder<$PressingRecipe>;
        shouldAddRecipeWithPriority(arg0: number): boolean;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $MechanicalPressBlockEntity, arg1: $ItemStack_);
        get stack(): $ItemStack;
        get blockEntity(): $MechanicalPressBlockEntity;
        get recipe(): $RecipeHolder<$PressingRecipe>;
    }
}
