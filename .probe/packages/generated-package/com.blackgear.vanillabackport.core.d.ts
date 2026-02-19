declare module "com.blackgear.vanillabackport.core.mixin.access.BundleContentsAccessor" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Fraction} from "org.apache.commons.lang3.math.Fraction"

export interface $BundleContentsAccessor$$Interface {
}

export class $BundleContentsAccessor implements $BundleContentsAccessor$$Interface {
static "callGetWeight"(stack: $ItemStack$$Type): $Fraction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BundleContentsAccessor$$Type = ($BundleContentsAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BundleContentsAccessor$$Original = $BundleContentsAccessor;}
declare module "com.blackgear.vanillabackport.core.mixin.access.EntityRendererAccessor" {
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export interface $EntityRendererAccessor$$Interface {

(arg0: T, arg1: $BlockPos): integer
}

export class $EntityRendererAccessor implements $EntityRendererAccessor$$Interface {
 "callGetBlockLightLevel"<T extends $Entity>(arg0: T, arg1: $BlockPos$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRendererAccessor$$Type = ((arg0: T, arg1: $BlockPos) => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityRendererAccessor$$Original = $EntityRendererAccessor;}
declare module "com.blackgear.vanillabackport.core.mixin.access.BiomeAccessor" {
import {$Biome$ClimateSettings, $Biome$ClimateSettings$$Type} from "net.minecraft.world.level.biome.Biome$ClimateSettings"

export interface $BiomeAccessor$$Interface {

(): $Biome$ClimateSettings$$Type
get "climateSettings"(): $Biome$ClimateSettings
}

export class $BiomeAccessor implements $BiomeAccessor$$Interface {
 "getClimateSettings"(): $Biome$ClimateSettings
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeAccessor$$Type = (() => $Biome$ClimateSettings$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BiomeAccessor$$Original = $BiomeAccessor;}
declare module "com.blackgear.vanillabackport.core.mixin.access.SoundEngineAccessor" {
import {$Map} from "java.util.Map"
import {$SoundInstance, $SoundInstance$$Type} from "net.minecraft.client.resources.sounds.SoundInstance"
import {$ChannelAccess$ChannelHandle} from "net.minecraft.client.sounds.ChannelAccess$ChannelHandle"

export interface $SoundEngineAccessor$$Interface {
get "loaded"(): boolean
get "instanceToChannel"(): $Map<($SoundInstance), ($ChannelAccess$ChannelHandle)>
}

export class $SoundEngineAccessor implements $SoundEngineAccessor$$Interface {
 "isLoaded"(): boolean
 "getInstanceToChannel"(): $Map<($SoundInstance), ($ChannelAccess$ChannelHandle)>
 "callCalculateVolume"(arg0: $SoundInstance$$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundEngineAccessor$$Type = ($SoundEngineAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoundEngineAccessor$$Original = $SoundEngineAccessor;}
declare module "com.blackgear.vanillabackport.core.mixin.access.LivingEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LivingEntityAccessor$$Interface {

(): boolean
get "jumping"(): boolean
}

export class $LivingEntityAccessor implements $LivingEntityAccessor$$Interface {
 "isJumping"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityAccessor$$Type = (() => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingEntityAccessor$$Original = $LivingEntityAccessor;}
declare module "com.blackgear.vanillabackport.core.mixin.access.SoundManagerAccessor" {
import {$SoundEngine, $SoundEngine$$Type} from "net.minecraft.client.sounds.SoundEngine"

export interface $SoundManagerAccessor$$Interface {

(): $SoundEngine$$Type
get "soundEngine"(): $SoundEngine
}

export class $SoundManagerAccessor implements $SoundManagerAccessor$$Interface {
 "getSoundEngine"(): $SoundEngine
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundManagerAccessor$$Type = (() => $SoundEngine$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoundManagerAccessor$$Original = $SoundManagerAccessor;}
declare module "com.blackgear.vanillabackport.core.mixin.access.NoiseGeneratorSettingsAccessor" {
import {$SurfaceRules$RuleSource, $SurfaceRules$RuleSource$$Type} from "net.minecraft.world.level.levelgen.SurfaceRules$RuleSource"

export interface $NoiseGeneratorSettingsAccessor$$Interface {

(arg0: $SurfaceRules$RuleSource): void
set "surfaceRule"(value: $SurfaceRules$RuleSource$$Type)
}

export class $NoiseGeneratorSettingsAccessor implements $NoiseGeneratorSettingsAccessor$$Interface {
 "setSurfaceRule"(arg0: $SurfaceRules$RuleSource$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoiseGeneratorSettingsAccessor$$Type = ((arg0: $SurfaceRules$RuleSource) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NoiseGeneratorSettingsAccessor$$Original = $NoiseGeneratorSettingsAccessor;}
declare module "com.blackgear.vanillabackport.core.mixin.access.EntityAccessor" {
import {$EntityDimensions} from "net.minecraft.world.entity.EntityDimensions"

export interface $EntityAccessor$$Interface {
get "dimensions"(): $EntityDimensions
}

export class $EntityAccessor implements $EntityAccessor$$Interface {
 "callSetRot"(arg0: float, arg1: float): void
 "getDimensions"(): $EntityDimensions
 "callReapplyPosition"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityAccessor$$Type = ($EntityAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityAccessor$$Original = $EntityAccessor;}
declare module "com.blackgear.vanillabackport.core.mixin.access.WolfAccessor" {
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"

export interface $WolfAccessor$$Interface {

(arg0: $DyeColor): void
}

export class $WolfAccessor implements $WolfAccessor$$Interface {
 "callSetCollarColor"(arg0: $DyeColor$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WolfAccessor$$Type = ((arg0: $DyeColor) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WolfAccessor$$Original = $WolfAccessor;}
declare module "com.blackgear.vanillabackport.core.mixin.access.GuiGraphicsAccessor" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$GuiSpriteScaling$NineSlice, $GuiSpriteScaling$NineSlice$$Type} from "net.minecraft.client.resources.metadata.gui.GuiSpriteScaling$NineSlice"

export interface $GuiGraphicsAccessor$$Interface {

(arg0: $TextureAtlasSprite, arg1: $GuiSpriteScaling$NineSlice, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
}

export class $GuiGraphicsAccessor implements $GuiGraphicsAccessor$$Interface {
 "callBlitNineSlicedSprite"(arg0: $TextureAtlasSprite$$Type, arg1: $GuiSpriteScaling$NineSlice$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiGraphicsAccessor$$Type = ((arg0: $TextureAtlasSprite, arg1: $GuiSpriteScaling$NineSlice, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiGraphicsAccessor$$Original = $GuiGraphicsAccessor;}
