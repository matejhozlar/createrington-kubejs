import { $Reward } from "@package/com/furiusmax/bjornlib/quest/rewards";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List, $List_ } from "@package/java/util";
import { $QuestCategory } from "@package/com/furiusmax/bjornlib/quest/categories";
import { $QuestStep } from "@package/com/furiusmax/bjornlib/quest/steps";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/furiusmax/bjornlib/quest/types" {
    export class $Quest<T> {
        getName(): $Component;
        reset(): void;
        getId(): $ResourceLocation;
        isCompleted(arg0: $Player): boolean;
        getDescription(): $Component;
        setId(arg0: $ResourceLocation_): $Quest<any>;
        codec(): $MapCodec<T>;
        getSteps(): $List<$QuestStep<any>>;
        getDescriptionKey(): string;
        addReward(arg0: $Reward<any>): void;
        addStep(arg0: $QuestStep<any>): void;
        getRewards(): $List<$Reward<any>>;
        getNextPendingSteps(arg0: $Player): $List<$QuestStep<any>>;
        getQuestType(): $ResourceLocation;
        setQuestCategory(arg0: $QuestCategory): $Quest<any>;
        isQuestCompleted(): boolean;
        setDescriptionKey(arg0: string): $Quest<any>;
        getQuestCategory(): $QuestCategory;
        static CODEC: $Codec<$Quest<any>>;
        static BASE_CODEC: $Codec<$Quest<any>>;
        descriptionKey: string;
        id: $ResourceLocation;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Quest<any>>;
        questCategory: $QuestCategory;
        constructor(arg0: $Quest_<any>);
        constructor(arg0: $ResourceLocation_, arg1: string, arg2: $List_<$QuestStep<any>>, arg3: $List_<$Reward<any>>, arg4: $QuestCategory, arg5: boolean);
        constructor();
        get name(): $Component;
        get description(): $Component;
        get steps(): $List<$QuestStep<any>>;
        get rewards(): $List<$Reward<any>>;
        get questType(): $ResourceLocation;
        get questCompleted(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Quest}.
     */
    export type $Quest_<T> = RegistryTypes.BjornlibQuests;
    export interface $Quest<T> extends RegistryMarked<RegistryTypes.BjornlibQuestsTag, RegistryTypes.BjornlibQuests> {}
}
