import { $NumberEstimate } from "@package/petrolpark/mc/library/core/data/numberProvider";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $Record } from "@package/java/lang";
import { $LootContextUser, $LootContext } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/petrolpark/mc/library/core/data/numberProvider/itemStack" {
    export class $LootItemStackNumberProviderType extends $Record {
        codec(): $MapCodec<$ItemStackNumberProvider>;
        constructor(codec: $MapCodec_<$ItemStackNumberProvider>);
    }
    /**
     * Values that may be interpreted as {@link $LootItemStackNumberProviderType}.
     */
    export type $LootItemStackNumberProviderType_ = RegistryTypes.PetrolparkLootItemStackNumberProviderType | { codec?: $MapCodec_<$ItemStackNumberProvider>,  } | [codec?: $MapCodec_<$ItemStackNumberProvider>, ];
    export interface $LootItemStackNumberProviderType extends RegistryMarked<RegistryTypes.PetrolparkLootItemStackNumberProviderTypeTag, RegistryTypes.PetrolparkLootItemStackNumberProviderType> {}
    export class $ItemStackNumberProvider {
        static CODEC: $Codec<$ItemStackNumberProvider>;
        static TYPED_CODEC: $Codec<$ItemStackNumberProvider>;
    }
    export interface $ItemStackNumberProvider extends $LootContextUser {
        getInt(arg0: $ItemStack_, arg1: $LootContext): number;
        getFloat(arg0: $ItemStack_, arg1: $LootContext): number;
        getEstimate(): $NumberEstimate;
        getItemStackNumberProviderType(): $LootItemStackNumberProviderType;
        getMaxFloat(arg0: $ItemStack_, arg1: $LootContext): number;
        get estimate(): $NumberEstimate;
        get itemStackNumberProviderType(): $LootItemStackNumberProviderType;
    }
}
