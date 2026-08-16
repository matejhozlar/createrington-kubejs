import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $ITeam } from "@package/petrolpark/mc/library/core/world/entity/player/team";
import { $LootContext } from "@package/net/minecraft/world/level/storage/loot";
import { $IAbstractReward } from "@package/petrolpark/mc/library/core/data/reward";

declare module "@package/petrolpark/mc/library/core/data/reward/team" {
    export class $ITeamReward$Type {
    }
    export interface $ITeamReward$Type {
        teamRewardCodec(): $MapCodec<$ITeamReward>;
    }
    /**
     * Values that may be interpreted as {@link $ITeamReward$Type}.
     */
    export type $ITeamReward$Type_ = RegistryTypes.PetrolparkTeamRewardType | (() => $MapCodec_<$ITeamReward>);
    export interface $ITeamReward$Type extends RegistryMarked<RegistryTypes.PetrolparkTeamRewardTypeTag, RegistryTypes.PetrolparkTeamRewardType> {}
    export class $ITeamReward {
        static CODEC: $Codec<$ITeamReward>;
        static TYPED_CODEC: $Codec<$ITeamReward>;
    }
    export interface $ITeamReward extends $IAbstractReward<$ITeamReward$Type> {
        reward(arg0: $ITeam, arg1: $LootContext, arg2: number, arg3: boolean): boolean;
    }
}
