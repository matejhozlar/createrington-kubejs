import { $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/furiusmax/bjornlib/quest/categories" {
    export class $QuestCategory {
        getName(): $Component;
        getId(): $ResourceLocation;
        setColor(arg0: number): $QuestCategory;
        getColor(): number;
        setId(arg0: $ResourceLocation_): $QuestCategory;
        setIconTexture(arg0: $ResourceLocation_): $QuestCategory;
        getIconTexture(): $ResourceLocation;
        static MAIN_QUEST: $QuestCategory;
        static CODEC: $Codec<$QuestCategory>;
        static SECONDARY_QUEST: $QuestCategory;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $QuestCategory>;
        constructor();
        get name(): $Component;
    }
}
