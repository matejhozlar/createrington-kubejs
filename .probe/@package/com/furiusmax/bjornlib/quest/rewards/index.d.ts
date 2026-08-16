import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/furiusmax/bjornlib/quest/rewards" {
    export class $Reward<T> {
        codec(): $MapCodec<T>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        static getFromTag(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $Reward<any>;
        loadFromTag(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        getRewardType(): $ResourceLocation;
        rewardPlayer(arg0: $Player): void;
        saveToTag(arg0: $HolderLookup$Provider): $CompoundTag;
        streamListCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $List<T>>;
        static CODEC: $Codec<$Reward<any>>;
        static LIST_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $List<$Reward<any>>>;
        constructor();
        get rewardType(): $ResourceLocation;
    }
}
