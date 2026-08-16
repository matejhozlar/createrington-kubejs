import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $MobEffectInstance } from "@package/net/minecraft/world/effect";

declare module "@package/petrolpark/mc/library/util/mixininterfaces" {
    export class $IMobEffectInstanceMixin {
    }
    export interface $IMobEffectInstanceMixin {
        petrolpark$updateUniforms(): void;
        petrolpark$getTotalDuration(): number;
        petrolpark$setTotalDuration(arg0: number): void;
    }
    export class $IGameRendererMixin {
    }
    export interface $IGameRendererMixin {
        petrolpark$addMobEffectInstanceShader(arg0: $ResourceLocation_, arg1: $MobEffectInstance): void;
        petrolpark$cleanShaderEffects(): void;
        petrolpark$removeMobEffectInstanceShader(arg0: $MobEffectInstance): void;
    }
}
