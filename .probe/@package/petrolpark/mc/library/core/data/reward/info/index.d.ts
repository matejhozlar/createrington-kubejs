import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Lang$IndentedTooltipBuilder } from "@package/petrolpark/mc/library/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/petrolpark/mc/library/core/data/reward/info" {
    export interface $IRewardInfo$Type extends RegistryMarked<RegistryTypes.PetrolparkRewardInfoTypeTag, RegistryTypes.PetrolparkRewardInfoType> {}
    export class $IRewardInfo {
        static DIRECT_CODEC: $Codec<$IRewardInfo>;
        static TYPED_CODEC: $Codec<$IRewardInfo>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $IRewardInfo>;
    }
    export interface $IRewardInfo {
        addToDescription(arg0: $Lang$IndentedTooltipBuilder): void;
        render(arg0: $GuiGraphics): void;
        getRewardInfoType(): $IRewardInfo$Type;
        get rewardInfoType(): $IRewardInfo$Type;
    }
    export class $IRewardInfo$Type {
    }
    export interface $IRewardInfo$Type {
        infoStreamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $IRewardInfo>;
        infoCodec(): $MapCodec<$IRewardInfo>;
    }
    /**
     * Values that may be interpreted as {@link $IRewardInfo$Type}.
     */
    export type $IRewardInfo$Type_ = RegistryTypes.PetrolparkRewardInfoType;
}
