import { $Level } from "@package/net/minecraft/world/level";
import { $LevelRenderer } from "@package/net/minecraft/client/renderer";
export * as accessor from "@package/toni/sodiumdynamiclights/accessor";

declare module "@package/toni/sodiumdynamiclights" {
    export class $DynamicLightSource {
    }
    export interface $DynamicLightSource {
        sodiumdynamiclights$scheduleTrackedChunksRebuild(arg0: $LevelRenderer): void;
        sdl$shouldUpdateDynamicLight(): boolean;
        sdl$dynamicLightTick(): void;
        sdl$getDynamicLightLevel(): $Level;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        sdl$resetDynamicLight(): void;
        sdl$getDynamicLightY(): number;
        sdl$getDynamicLightZ(): number;
        sdl$getDynamicLightX(): number;
        sdl$isDynamicLightEnabled(): boolean;
        sdl$getLuminance(): number;
        sodiumdynamiclights$updateDynamicLight(arg0: $LevelRenderer): boolean;
    }
}
