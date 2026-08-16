import { $Holder } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Record } from "@package/java/lang";
import { $LootContextUser, $LootContext } from "@package/net/minecraft/world/level/storage/loot";
import { $IReward } from "@package/petrolpark/mc/library/core/data/reward";

declare module "@package/petrolpark/mc/library/core/data/reward/generator" {
    export class $RewardGeneratorType extends $Record {
        codec(): $MapCodec<$IRewardGenerator>;
        constructor(codec: $MapCodec_<$IRewardGenerator_>);
    }
    /**
     * Values that may be interpreted as {@link $RewardGeneratorType}.
     */
    export type $RewardGeneratorType_ = RegistryTypes.PetrolparkRewardGeneratorType | { codec?: $MapCodec_<$IRewardGenerator_>,  } | [codec?: $MapCodec_<$IRewardGenerator_>, ];
    export class $IRewardGenerator {
        static CODEC: $Codec<$Holder<$IRewardGenerator>>;
        static DIRECT_CODEC: $Codec<$IRewardGenerator>;
        static TYPED_CODEC: $Codec<$IRewardGenerator>;
    }
    export interface $IRewardGenerator extends $LootContextUser {
        getType(): $RewardGeneratorType;
        generate(arg0: $LootContext): $Stream<$Holder<$IReward>>;
        get type(): $RewardGeneratorType;
    }
    /**
     * Values that may be interpreted as {@link $IRewardGenerator}.
     */
    export type $IRewardGenerator_ = RegistryTypes.PetrolparkRewardGenerator;
    export interface $RewardGeneratorType extends RegistryMarked<RegistryTypes.PetrolparkRewardGeneratorTypeTag, RegistryTypes.PetrolparkRewardGeneratorType> {}
    export interface $IRewardGenerator extends RegistryMarked<RegistryTypes.PetrolparkRewardGeneratorTag, RegistryTypes.PetrolparkRewardGenerator> {}
}
