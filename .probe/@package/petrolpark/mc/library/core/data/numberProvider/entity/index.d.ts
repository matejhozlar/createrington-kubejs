import { $NumberEstimate } from "@package/petrolpark/mc/library/core/data/numberProvider";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Record } from "@package/java/lang";
import { $LootContextUser, $LootContext } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/petrolpark/mc/library/core/data/numberProvider/entity" {
    export class $LootEntityNumberProviderType extends $Record {
        codec(): $MapCodec<$EntityNumberProvider>;
        constructor(codec: $MapCodec_<$EntityNumberProvider>);
    }
    /**
     * Values that may be interpreted as {@link $LootEntityNumberProviderType}.
     */
    export type $LootEntityNumberProviderType_ = RegistryTypes.PetrolparkLootEntityNumberProviderType | { codec?: $MapCodec_<$EntityNumberProvider>,  } | [codec?: $MapCodec_<$EntityNumberProvider>, ];
    export class $EntityNumberProvider {
        static CODEC: $Codec<$EntityNumberProvider>;
        static TYPED_CODEC: $Codec<$EntityNumberProvider>;
    }
    export interface $EntityNumberProvider extends $LootContextUser {
        getInt(arg0: $Entity, arg1: $LootContext): number;
        getFloat(arg0: $Entity, arg1: $LootContext): number;
        getEstimate(): $NumberEstimate;
        getEntityNumberProviderType(): $LootEntityNumberProviderType;
        getMaxFloat(arg0: $Entity, arg1: $LootContext): number;
        get estimate(): $NumberEstimate;
        get entityNumberProviderType(): $LootEntityNumberProviderType;
    }
    export interface $LootEntityNumberProviderType extends RegistryMarked<RegistryTypes.PetrolparkLootEntityNumberProviderTypeTag, RegistryTypes.PetrolparkLootEntityNumberProviderType> {}
}
