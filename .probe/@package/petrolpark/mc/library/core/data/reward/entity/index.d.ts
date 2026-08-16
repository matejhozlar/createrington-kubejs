import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $LootContext } from "@package/net/minecraft/world/level/storage/loot";
import { $IAbstractReward } from "@package/petrolpark/mc/library/core/data/reward";

declare module "@package/petrolpark/mc/library/core/data/reward/entity" {
    export class $IEntityReward$Type {
    }
    export interface $IEntityReward$Type {
        entityRewardCodec(): $MapCodec<$IEntityReward>;
    }
    /**
     * Values that may be interpreted as {@link $IEntityReward$Type}.
     */
    export type $IEntityReward$Type_ = RegistryTypes.PetrolparkEntityRewardType | (() => $MapCodec_<$IEntityReward>);
    export class $IEntityReward {
        static CODEC: $Codec<$IEntityReward>;
        static TYPED_CODEC: $Codec<$IEntityReward>;
    }
    export interface $IEntityReward extends $IAbstractReward<$IEntityReward$Type> {
        reward(arg0: $Entity, arg1: $LootContext, arg2: number, arg3: boolean): boolean;
    }
    export interface $IEntityReward$Type extends RegistryMarked<RegistryTypes.PetrolparkEntityRewardTypeTag, RegistryTypes.PetrolparkEntityRewardType> {}
}
