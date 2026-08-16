import { $ItemStack } from "@package/net/minecraft/world/item";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $IAdvancedIngredient } from "@package/petrolpark/mc/library/core/data/recipe/ingredient/advanced";
import { $Record } from "@package/java/lang";
import { $LootContextUser, $LootContext } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/petrolpark/mc/library/core/data/recipe/ingredient/randomizer" {
    export interface $IngredientRandomizerType extends RegistryMarked<RegistryTypes.PetrolparkIngredientRandomizerTypeTag, RegistryTypes.PetrolparkIngredientRandomizerType> {}
    export class $IngredientRandomizerType extends $Record {
        codec(): $MapCodec<$IngredientRandomizer>;
        constructor(codec: $MapCodec_<$IngredientRandomizer>);
    }
    /**
     * Values that may be interpreted as {@link $IngredientRandomizerType}.
     */
    export type $IngredientRandomizerType_ = RegistryTypes.PetrolparkIngredientRandomizerType | { codec?: $MapCodec_<$IngredientRandomizer>,  } | [codec?: $MapCodec_<$IngredientRandomizer>, ];
    export class $IngredientRandomizer {
        static DIRECT_CODEC: $Codec<$IngredientRandomizer>;
        static TYPED_CODEC: $Codec<$IngredientRandomizer>;
    }
    export interface $IngredientRandomizer extends $LootContextUser {
        getType(): $IngredientRandomizerType;
        generate(arg0: $LootContext): $IAdvancedIngredient<$ItemStack>;
        get type(): $IngredientRandomizerType;
    }
}
