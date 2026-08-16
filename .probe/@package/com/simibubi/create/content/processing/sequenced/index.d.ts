import { $SizedFluidIngredient } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $Supplier } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Component } from "@package/net/minecraft/network/chat";
import { $SequencedAssemblySubCategory } from "@package/com/simibubi/create/compat/jei/category/sequencedAssembly";
import { $Set_, $List_ } from "@package/java/util";
import { $ProcessingRecipe } from "@package/com/simibubi/create/content/processing/recipe";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/processing/sequenced" {
    export class $SequencedRecipe<T extends $ProcessingRecipe<never, never>> {
        getRecipe(): T;
        getAsAssemblyRecipe(): $IAssemblyRecipe;
        static CODEC: $Codec<$SequencedRecipe<never>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SequencedRecipe<never>>;
        constructor(arg0: T);
        get recipe(): T;
        get asAssemblyRecipe(): $IAssemblyRecipe;
    }
    export class $IAssemblyRecipe {
    }
    export interface $IAssemblyRecipe {
        addRequiredMachines(arg0: $Set_<$ItemLike_>): void;
        getDescriptionForAssembly(): $Component;
        addAssemblyIngredients(arg0: $List_<$Ingredient_>): void;
        addAssemblyFluidIngredients(arg0: $List_<$SizedFluidIngredient>): void;
        getJEISubCategory(): $Supplier<$Supplier<$SequencedAssemblySubCategory>>;
        supportsAssembly(): boolean;
        get descriptionForAssembly(): $Component;
        get JEISubCategory(): $Supplier<$Supplier<$SequencedAssemblySubCategory>>;
    }
}
