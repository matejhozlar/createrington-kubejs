declare module "net.irisshaders.iris.mixin.LevelRendererAccessor" {
import {$BlockDestructionProgress} from "net.minecraft.server.level.BlockDestructionProgress"
import {$RenderBuffers, $RenderBuffers$$Type} from "net.minecraft.client.renderer.RenderBuffers"
import {$SortedSet} from "java.util.SortedSet"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Long2ObjectMap} from "it.unimi.dsi.fastutil.longs.Long2ObjectMap"
import {$Frustum$$Type} from "net.minecraft.client.renderer.culling.Frustum"
import {$Camera$$Type} from "net.minecraft.client.Camera"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"
import {$ClientLevel} from "net.minecraft.client.multiplayer.ClientLevel"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$EntityRenderDispatcher} from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export interface $LevelRendererAccessor$$Interface {
get "level"(): $ClientLevel
get "destructionProgress"(): $Long2ObjectMap<($SortedSet<($BlockDestructionProgress)>)>
get "entityRenderDispatcher"(): $EntityRenderDispatcher
get "renderBuffers"(): $RenderBuffers
set "renderBuffers"(value: $RenderBuffers$$Type)
}

export class $LevelRendererAccessor implements $LevelRendererAccessor$$Interface {
 "getLevel"(): $ClientLevel
 "invokeRenderSectionLayer"(arg0: $RenderType$$Type, arg1: double, arg2: double, arg3: double, arg4: $Matrix4f$$Type, arg5: $Matrix4f$$Type): void
 "shouldRegenerateClouds"(): boolean
 "setShouldRegenerateClouds"(arg0: boolean): void
 "getDestructionProgress"(): $Long2ObjectMap<($SortedSet<($BlockDestructionProgress)>)>
 "getEntityRenderDispatcher"(): $EntityRenderDispatcher
 "getRenderBuffers"(): $RenderBuffers
 "invokeSetupRender"(arg0: $Camera$$Type, arg1: $Frustum$$Type, arg2: boolean, arg3: boolean): void
 "invokeRenderEntity"(arg0: $Entity$$Type, arg1: double, arg2: double, arg3: double, arg4: float, arg5: $PoseStack$$Type, arg6: $MultiBufferSource$$Type): void
 "setRenderBuffers"(arg0: $RenderBuffers$$Type): void
 "invokeDoesMobEffectBlockSky"(arg0: $Camera$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelRendererAccessor$$Type = ($LevelRendererAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LevelRendererAccessor$$Original = $LevelRendererAccessor;}
declare module "net.irisshaders.iris.mixin.texture.SimpleTextureAccessor" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"

export interface $SimpleTextureAccessor$$Interface {

(): $ResourceLocation$$Type
get "location"(): $ResourceLocation
}

export class $SimpleTextureAccessor implements $SimpleTextureAccessor$$Interface {
 "getLocation"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleTextureAccessor$$Type = (() => $ResourceLocation$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleTextureAccessor$$Original = $SimpleTextureAccessor;}
declare module "net.irisshaders.iris.mixin.rendertype.RenderTypeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RenderTypeAccessor$$Interface {

(): boolean
}

export class $RenderTypeAccessor implements $RenderTypeAccessor$$Interface {
 "shouldSortOnUpload"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderTypeAccessor$$Type = (() => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderTypeAccessor$$Original = $RenderTypeAccessor;}
declare module "net.irisshaders.iris.mixin.LightTextureAccessor" {
import {$DynamicTexture, $DynamicTexture$$Type} from "net.minecraft.client.renderer.texture.DynamicTexture"

export interface $LightTextureAccessor$$Interface {

(): $DynamicTexture$$Type
get "lightTexture"(): $DynamicTexture
}

export class $LightTextureAccessor implements $LightTextureAccessor$$Interface {
 "getLightTexture"(): $DynamicTexture
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightTextureAccessor$$Type = (() => $DynamicTexture$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LightTextureAccessor$$Original = $LightTextureAccessor;}
declare module "net.irisshaders.iris.mixin.rendertype.RenderStateShardAccessor" {
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"

export interface $RenderStateShardAccessor$$Interface {

(): StringJS
get "name"(): StringJS
get "translucentTransparency"(): $RenderStateShard$TransparencyStateShard
}

export class $RenderStateShardAccessor implements $RenderStateShardAccessor$$Interface {
 "getName"(): StringJS
static "getTranslucentTransparency"(): $RenderStateShard$TransparencyStateShard
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShardAccessor$$Type = (() => StringJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShardAccessor$$Original = $RenderStateShardAccessor;}
declare module "net.irisshaders.iris.mixin.DimensionTypeAccessor" {
import {$OptionalLong} from "java.util.OptionalLong"

export interface $DimensionTypeAccessor$$Interface {
get "fixedTime"(): $OptionalLong
get "ambientLight"(): float
}

export class $DimensionTypeAccessor implements $DimensionTypeAccessor$$Interface {
 "getFixedTime"(): $OptionalLong
 "getAmbientLight"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimensionTypeAccessor$$Type = ($DimensionTypeAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DimensionTypeAccessor$$Original = $DimensionTypeAccessor;}
declare module "net.irisshaders.iris.mixin.texture.SpriteContentsAccessor" {
import {$SpriteContents$AnimatedTexture, $SpriteContents$AnimatedTexture$$Type} from "net.minecraft.client.renderer.texture.SpriteContents$AnimatedTexture"

export interface $SpriteContentsAccessor$$Interface {

(): $SpriteContents$AnimatedTexture$$Type
get "animatedTexture"(): $SpriteContents$AnimatedTexture
}

export class $SpriteContentsAccessor implements $SpriteContentsAccessor$$Interface {
 "getAnimatedTexture"(): $SpriteContents$AnimatedTexture
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsAccessor$$Type = (() => $SpriteContents$AnimatedTexture$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteContentsAccessor$$Original = $SpriteContentsAccessor;}
declare module "net.irisshaders.iris.mixin.texture.SpriteContentsTickerAccessor" {
import {$SpriteContents$AnimatedTexture} from "net.minecraft.client.renderer.texture.SpriteContents$AnimatedTexture"

export interface $SpriteContentsTickerAccessor$$Interface {
get "frame"(): integer
set "frame"(value: integer)
get "subFrame"(): integer
set "subFrame"(value: integer)
get "animationInfo"(): $SpriteContents$AnimatedTexture
}

export class $SpriteContentsTickerAccessor implements $SpriteContentsTickerAccessor$$Interface {
 "getFrame"(): integer
 "setFrame"(arg0: integer): void
 "getSubFrame"(): integer
 "setSubFrame"(arg0: integer): void
 "getAnimationInfo"(): $SpriteContents$AnimatedTexture
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsTickerAccessor$$Type = ($SpriteContentsTickerAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteContentsTickerAccessor$$Original = $SpriteContentsTickerAccessor;}
declare module "net.irisshaders.iris.mixin.GameRendererAccessor" {
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$PostChain} from "net.minecraft.client.renderer.PostChain"
import {$Camera$$Type} from "net.minecraft.client.Camera"

export interface $GameRendererAccessor$$Interface {
get "renderHand"(): boolean
get "panoramicMode"(): boolean
get "blurEffect"(): $PostChain
}

export class $GameRendererAccessor implements $GameRendererAccessor$$Interface {
 "shouldRenderBlockOutlineA"(): boolean
 "invokeGetFov"(arg0: $Camera$$Type, arg1: float, arg2: boolean): double
 "invokeBobHurt"(arg0: $PoseStack$$Type, arg1: float): void
 "getRenderHand"(): boolean
 "getPanoramicMode"(): boolean
 "invokeBobView"(arg0: $PoseStack$$Type, arg1: float): void
 "getBlurEffect"(): $PostChain
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameRendererAccessor$$Type = ($GameRendererAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GameRendererAccessor$$Original = $GameRendererAccessor;}
declare module "net.irisshaders.iris.mixin.texture.TextureAtlasAccessor" {
import {$TextureAtlasSprite} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Map} from "java.util.Map"

export interface $TextureAtlasAccessor$$Interface {
get "mipLevel"(): integer
get "texturesByName"(): $Map<($ResourceLocation), ($TextureAtlasSprite)>
}

export class $TextureAtlasAccessor implements $TextureAtlasAccessor$$Interface {
 "getMipLevel"(): integer
 "getTexturesByName"(): $Map<($ResourceLocation), ($TextureAtlasSprite)>
 "callGetWidth"(): integer
 "callGetHeight"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureAtlasAccessor$$Type = ($TextureAtlasAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextureAtlasAccessor$$Original = $TextureAtlasAccessor;}
declare module "net.irisshaders.iris.mixin.texture.AnimationMetadataSectionAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AnimationMetadataSectionAccessor$$Interface {
set "frameHeight"(value: integer)
set "frameWidth"(value: integer)
get "frameWidth"(): integer
get "frameHeight"(): integer
}

export class $AnimationMetadataSectionAccessor implements $AnimationMetadataSectionAccessor$$Interface {
 "setFrameHeight"(arg0: integer): void
 "setFrameWidth"(arg0: integer): void
 "getFrameWidth"(): integer
 "getFrameHeight"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationMetadataSectionAccessor$$Type = ($AnimationMetadataSectionAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnimationMetadataSectionAccessor$$Original = $AnimationMetadataSectionAccessor;}
declare module "net.irisshaders.iris.mixin.ProgramTypeAccessor" {
import {$Program$Type} from "com.mojang.blaze3d.shaders.Program$Type"

export interface $ProgramTypeAccessor$$Interface {
}

export class $ProgramTypeAccessor implements $ProgramTypeAccessor$$Interface {
static "createProgramType"(arg0: StringJS, arg1: integer, arg2: StringJS, arg3: StringJS, arg4: integer): $Program$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgramTypeAccessor$$Type = ($ProgramTypeAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProgramTypeAccessor$$Original = $ProgramTypeAccessor;}
