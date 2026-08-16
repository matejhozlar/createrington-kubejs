import { $NumberEstimate } from "@package/petrolpark/mc/library/core/data/numberProvider";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $Record } from "@package/java/lang";
import { $ITeam } from "@package/petrolpark/mc/library/core/world/entity/player/team";
import { $LootContextUser, $LootContext } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/petrolpark/mc/library/core/data/numberProvider/team" {
    export class $LootTeamNumberProviderType extends $Record {
        codec(): $MapCodec<$TeamNumberProvider>;
        constructor(codec: $MapCodec_<$TeamNumberProvider>);
    }
    /**
     * Values that may be interpreted as {@link $LootTeamNumberProviderType}.
     */
    export type $LootTeamNumberProviderType_ = RegistryTypes.PetrolparkLootTeamNumberProviderType | { codec?: $MapCodec_<$TeamNumberProvider>,  } | [codec?: $MapCodec_<$TeamNumberProvider>, ];
    export interface $LootTeamNumberProviderType extends RegistryMarked<RegistryTypes.PetrolparkLootTeamNumberProviderTypeTag, RegistryTypes.PetrolparkLootTeamNumberProviderType> {}
    export class $TeamNumberProvider {
        static CODEC: $Codec<$TeamNumberProvider>;
        static TYPED_CODEC: $Codec<$TeamNumberProvider>;
    }
    export interface $TeamNumberProvider extends $LootContextUser {
        getInt(arg0: $ITeam, arg1: $LootContext): number;
        getFloat(arg0: $ITeam, arg1: $LootContext): number;
        getEstimate(): $NumberEstimate;
        getMaxFloat(arg0: $ITeam, arg1: $LootContext): number;
        getTeamNumberProviderType(): $LootTeamNumberProviderType;
        get estimate(): $NumberEstimate;
        get teamNumberProviderType(): $LootTeamNumberProviderType;
    }
}
