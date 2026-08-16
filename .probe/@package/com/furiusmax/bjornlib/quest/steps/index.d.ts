import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List } from "@package/java/util";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/furiusmax/bjornlib/quest/steps" {
    export class $QuestStep<S> {
        reset(): void;
        tick(arg0: $Player): boolean;
        complete(): void;
        isCompleted(): boolean;
        getDescription(): $Component;
        codec(): $MapCodec<S>;
        getDescriptionKey(): string;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, S>;
        renderStepWithMargin(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: number, arg6: number): number;
        streamListCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $List<S>>;
        doesUnlockNextStep(): boolean;
        getStepType(): $ResourceLocation;
        renderStep(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: boolean): number;
        static CODEC: $Codec<$QuestStep<any>>;
        descriptionKey: string;
        static LIST_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $List<$QuestStep<any>>>;
        completed: boolean;
        unlocksNextStep: boolean;
        constructor(arg0: string, arg1: boolean, arg2: boolean);
        constructor(arg0: string);
        constructor();
        get description(): $Component;
        get stepType(): $ResourceLocation;
    }
}
