import { $Holder, $HolderSet } from "@package/net/minecraft/core";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $IRewardInfo } from "@package/petrolpark/mc/library/core/data/reward/info";
import { $LootContextUser, $LootContext } from "@package/net/minecraft/world/level/storage/loot";
export * as generator from "@package/petrolpark/mc/library/core/data/reward/generator";
export * as team from "@package/petrolpark/mc/library/core/data/reward/team";
export * as info from "@package/petrolpark/mc/library/core/data/reward/info";
export * as entity from "@package/petrolpark/mc/library/core/data/reward/entity";

declare module "@package/petrolpark/mc/library/core/data/reward" {
    export interface $IReward extends RegistryMarked<RegistryTypes.PetrolparkRewardTag, RegistryTypes.PetrolparkReward> {}
    export class $IAbstractReward<TYPE> {
    }
    export interface $IAbstractReward<TYPE> extends $LootContextUser {
        info(): $IRewardInfo;
        getType(): TYPE;
        get type(): TYPE;
    }
    export class $IReward {
        static CODEC: $Codec<$Holder<$IReward>>;
        static SET_CODEC: $Codec<$HolderSet<$IReward>>;
        static DIRECT_CODEC: $Codec<$IReward>;
        static TYPED_CODEC: $Codec<$IReward>;
    }
    export interface $IReward extends $IAbstractReward<$IReward$Type> {
        reward(arg0: $LootContext, arg1: number, arg2: boolean): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IReward}.
     */
    export type $IReward_ = RegistryTypes.PetrolparkReward;
    export interface $IReward$Type extends RegistryMarked<RegistryTypes.PetrolparkRewardTypeTag, RegistryTypes.PetrolparkRewardType> {}
    export class $IReward$Type {
    }
    export interface $IReward$Type {
        rewardCodec(): $MapCodec<$IReward>;
    }
    /**
     * Values that may be interpreted as {@link $IReward$Type}.
     */
    export type $IReward$Type_ = RegistryTypes.PetrolparkRewardType | (() => $MapCodec_<$IReward_>);
}
