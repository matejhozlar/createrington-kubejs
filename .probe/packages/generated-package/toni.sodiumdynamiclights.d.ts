declare module "toni.sodiumdynamiclights.DynamicLightSource" {
import {$Level} from "net.minecraft.world.level.Level"
import {$LevelRenderer$$Type} from "net.minecraft.client.renderer.LevelRenderer"

export interface $DynamicLightSource$$Interface {
}

export class $DynamicLightSource implements $DynamicLightSource$$Interface {
 "sodiumdynamiclights$scheduleTrackedChunksRebuild"(arg0: $LevelRenderer$$Type): void
 "sdl$shouldUpdateDynamicLight"(): boolean
 "sodiumdynamiclights$updateDynamicLight"(arg0: $LevelRenderer$$Type): boolean
 "sdl$getDynamicLightX"(): double
 "sdl$getDynamicLightY"(): double
 "sdl$getDynamicLightZ"(): double
 "sdl$getDynamicLightLevel"(): $Level
 "sdl$isDynamicLightEnabled"(): boolean
 "sdl$setDynamicLightEnabled"(enabled: boolean): void
 "sdl$dynamicLightTick"(): void
 "sdl$resetDynamicLight"(): void
 "sdl$getLuminance"(): integer
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
