declare module "toni.sodiumdynamiclights.DynamicLightSource" {
import {$Level} from "net.minecraft.world.level.Level"
import {$LevelRenderer$$Type} from "net.minecraft.client.renderer.LevelRenderer"

export interface $DynamicLightSource$$Interface {
}

export class $DynamicLightSource implements $DynamicLightSource$$Interface {
 "sdl$dynamicLightTick"(): void
 "sdl$isDynamicLightEnabled"(): boolean
 "sdl$getDynamicLightY"(): double
 "sdl$setDynamicLightEnabled"(enabled: boolean): void
 "sdl$getDynamicLightLevel"(): $Level
 "sdl$resetDynamicLight"(): void
 "sdl$getDynamicLightX"(): double
 "sdl$getDynamicLightZ"(): double
 "sdl$shouldUpdateDynamicLight"(): boolean
 "sdl$getLuminance"(): integer
 "sodiumdynamiclights$updateDynamicLight"(arg0: $LevelRenderer$$Type): boolean
 "sodiumdynamiclights$scheduleTrackedChunksRebuild"(arg0: $LevelRenderer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicLightSource$$Type = ($DynamicLightSource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DynamicLightSource$$Original = $DynamicLightSource;}
