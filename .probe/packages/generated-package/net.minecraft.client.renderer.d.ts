declare module "net.minecraft.client.renderer.entity.player.PlayerRenderer" {
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$PlayerModel} from "net.minecraft.client.model.PlayerModel"
import {$EntityRendererProvider$Context$$Type} from "net.minecraft.client.renderer.entity.EntityRendererProvider$Context"
import {$LivingEntityRenderer} from "net.minecraft.client.renderer.entity.LivingEntityRenderer"
import {$AbstractClientPlayer, $AbstractClientPlayer$$Type} from "net.minecraft.client.player.AbstractClientPlayer"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$PlayerRendererInvoker$$Interface} from "com.furiusmax.bjornlib.neo.mixin.client.PlayerRendererInvoker"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$EntityRenderDispatcher} from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $PlayerRenderer extends $LivingEntityRenderer<($AbstractClientPlayer), ($PlayerModel<($AbstractClientPlayer)>)> implements $PlayerRendererInvoker$$Interface {
static readonly "LEASH_RENDER_STEPS": integer
readonly "entityRenderDispatcher": $EntityRenderDispatcher

constructor(arg0: $EntityRendererProvider$Context$$Type, arg1: boolean)

public "render"(arg0: $LivingEntity$$Type, arg1: float, arg2: float, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer): void
public "render"(arg0: $AbstractClientPlayer$$Type, arg1: float, arg2: float, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer): void
public "render"(arg0: $Entity$$Type, arg1: float, arg2: float, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer): void
public "getTextureLocation"(arg0: $Entity$$Type): $ResourceLocation
public "getTextureLocation"(arg0: $AbstractClientPlayer$$Type): $ResourceLocation
public "getRenderOffset"(arg0: $Entity$$Type, arg1: float): $Vec3
public "getRenderOffset"(arg0: $AbstractClientPlayer$$Type, arg1: float): $Vec3
public "setupRotations"(arg0: $AbstractClientPlayer$$Type, arg1: $PoseStack$$Type, arg2: float, arg3: float, arg4: float, arg5: float): void
public "renderLeftHand"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: integer, arg3: $AbstractClientPlayer$$Type): void
public "renderRightHand"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: integer, arg3: $AbstractClientPlayer$$Type): void
public "invokeSetupRotations"(arg0: $AbstractClientPlayer$$Type, arg1: $PoseStack$$Type, arg2: float, arg3: float, arg4: float, arg5: float): void
public "invokeScale"(arg0: $AbstractClientPlayer$$Type, arg1: $PoseStack$$Type, arg2: float): void
public "handler$dno000$skinlayers3d$setModelProperties"(abstractClientPlayer: $AbstractClientPlayer$$Type, info: $CallbackInfo$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerRenderer$$Type = ($PlayerRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerRenderer$$Original = $PlayerRenderer;}
declare module "net.minecraft.client.renderer.debug.StructureRenderer" {
import {$DebugRenderer$SimpleDebugRenderer$$Interface} from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$BoundingBox$$Type} from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$StructuresDebugPayload$PieceInfo$$Type} from "net.minecraft.network.protocol.common.custom.StructuresDebugPayload$PieceInfo"

export class $StructureRenderer implements $DebugRenderer$SimpleDebugRenderer$$Interface {
constructor(arg0: $Minecraft$$Type)

public "clear"(): void
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: double, arg3: double, arg4: double): void
public "addBoundingBox"(arg0: $BoundingBox$$Type, arg1: $List$$Type<($StructuresDebugPayload$PieceInfo$$Type)>, arg2: $ResourceKey$$Type<($Level)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureRenderer$$Type = ($StructureRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructureRenderer$$Original = $StructureRenderer;}
declare module "net.minecraft.client.renderer.block.model.ItemOverrides$BakedOverride" {
import {$BakedModel} from "net.minecraft.client.resources.model.BakedModel"

export class $ItemOverrides$BakedOverride {
 "model": $BakedModel

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemOverrides$BakedOverride$$Type = ($ItemOverrides$BakedOverride);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemOverrides$BakedOverride$$Original = $ItemOverrides$BakedOverride;}
declare module "net.minecraft.client.renderer.RenderType$OutlineProperty" {
import {$Enum} from "java.lang.Enum"

export class $RenderType$OutlineProperty extends $Enum<($RenderType$OutlineProperty)> {
static readonly "IS_OUTLINE": $RenderType$OutlineProperty
static readonly "NONE": $RenderType$OutlineProperty
static readonly "AFFECTS_OUTLINE": $RenderType$OutlineProperty

public "toString"(): StringJS
public static "values"(): ($RenderType$OutlineProperty)[]
public static "valueOf"(arg0: StringJS): $RenderType$OutlineProperty
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderType$OutlineProperty$$Type = (("none") | ("is_outline") | ("affects_outline"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderType$OutlineProperty$$Original = $RenderType$OutlineProperty;}
declare module "net.minecraft.client.renderer.entity.layers.RenderLayer" {
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$RenderLayerParent$$Type} from "net.minecraft.client.renderer.entity.RenderLayerParent"
import {$EntityModel} from "net.minecraft.client.model.EntityModel"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $RenderLayer<T extends $Entity, M extends $EntityModel<(object)>> {
constructor(arg0: $RenderLayerParent$$Type<(T), (M)>)

public "getParentModel"(): M
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: integer, arg3: T, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float): void
get "parentModel"(): M
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderLayer$$Type<T, M> = ($RenderLayer<(T), (M)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderLayer$$Original<T, M> = $RenderLayer<(T), (M)>;}
declare module "net.minecraft.client.renderer.RenderType$CompositeState$CompositeStateBuilder" {
import {$RenderType$CompositeState} from "net.minecraft.client.renderer.RenderType$CompositeState"
import {$RenderStateShard$LayeringStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$RenderStateShard$EmptyTextureStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$RenderStateShard$WriteMaskStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderType$OutlineProperty$$Type} from "net.minecraft.client.renderer.RenderType$OutlineProperty"
import {$RenderStateShard$ColorLogicStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$CullStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$LineStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$ShaderStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$LightmapStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TransparencyStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$TexturingStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard$OutputStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"

export class $RenderType$CompositeState$CompositeStateBuilder {
public "createCompositeState"(arg0: boolean): $RenderType$CompositeState
public "createCompositeState"(arg0: $RenderType$OutlineProperty$$Type): $RenderType$CompositeState
public "setTransparencyState"(arg0: $RenderStateShard$TransparencyStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setTexturingState"(arg0: $RenderStateShard$TexturingStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setCullState"(arg0: $RenderStateShard$CullStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setTextureState"(arg0: $RenderStateShard$EmptyTextureStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setLightmapState"(arg0: $RenderStateShard$LightmapStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setOverlayState"(arg0: $RenderStateShard$OverlayStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setShaderState"(arg0: $RenderStateShard$ShaderStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setWriteMaskState"(arg0: $RenderStateShard$WriteMaskStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setDepthTestState"(arg0: $RenderStateShard$DepthTestStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setLineState"(arg0: $RenderStateShard$LineStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setOutputState"(arg0: $RenderStateShard$OutputStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setLayeringState"(arg0: $RenderStateShard$LayeringStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setColorLogicState"(arg0: $RenderStateShard$ColorLogicStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
set "transparencyState"(value: $RenderStateShard$TransparencyStateShard$$Type)
set "texturingState"(value: $RenderStateShard$TexturingStateShard$$Type)
set "cullState"(value: $RenderStateShard$CullStateShard$$Type)
set "textureState"(value: $RenderStateShard$EmptyTextureStateShard$$Type)
set "lightmapState"(value: $RenderStateShard$LightmapStateShard$$Type)
set "overlayState"(value: $RenderStateShard$OverlayStateShard$$Type)
set "shaderState"(value: $RenderStateShard$ShaderStateShard$$Type)
set "writeMaskState"(value: $RenderStateShard$WriteMaskStateShard$$Type)
set "depthTestState"(value: $RenderStateShard$DepthTestStateShard$$Type)
set "lineState"(value: $RenderStateShard$LineStateShard$$Type)
set "outputState"(value: $RenderStateShard$OutputStateShard$$Type)
set "layeringState"(value: $RenderStateShard$LayeringStateShard$$Type)
set "colorLogicState"(value: $RenderStateShard$ColorLogicStateShard$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderType$CompositeState$CompositeStateBuilder$$Type = ($RenderType$CompositeState$CompositeStateBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderType$CompositeState$CompositeStateBuilder$$Original = $RenderType$CompositeState$CompositeStateBuilder;}
declare module "net.minecraft.client.renderer.chunk.SectionRenderDispatcher$CompiledSection" {
import {$List} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export class $SectionRenderDispatcher$CompiledSection {
static readonly "UNCOMPILED": $SectionRenderDispatcher$CompiledSection
static readonly "EMPTY": $SectionRenderDispatcher$CompiledSection

constructor()

public "isEmpty"(arg0: $RenderType$$Type): boolean
public "hasNoRenderableLayers"(): boolean
public "getRenderableBlockEntities"(): $List<($BlockEntity)>
public "facesCanSeeEachother"(arg0: $Direction$$Type, arg1: $Direction$$Type): boolean
get "renderableBlockEntities"(): $List<($BlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SectionRenderDispatcher$CompiledSection$$Type = ($SectionRenderDispatcher$CompiledSection);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SectionRenderDispatcher$CompiledSection$$Original = $SectionRenderDispatcher$CompiledSection;}
declare module "net.minecraft.client.renderer.RenderStateShard$LineStateShard" {
import {$OptionalDouble$$Type} from "java.util.OptionalDouble"
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$Runnable} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard} from "net.minecraft.client.renderer.RenderStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"

export class $RenderStateShard$LineStateShard extends $RenderStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
readonly "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: $OptionalDouble$$Type)

public "toString"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$LineStateShard$$Type = ($RenderStateShard$LineStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$LineStateShard$$Original = $RenderStateShard$LineStateShard;}
declare module "net.minecraft.client.renderer.block.LiquidBlockRenderer" {
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LiquidBlockRenderer {
constructor()

public static "shouldRenderFace"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $FluidState$$Type, arg3: $BlockState$$Type, arg4: $Direction$$Type, arg5: $FluidState$$Type): boolean
public static "shouldRenderFace"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $FluidState$$Type, arg3: $BlockState$$Type, arg4: $Direction$$Type, arg5: $BlockState$$Type): boolean
public "tesselate"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $VertexConsumer$$Type, arg3: $BlockState$$Type, arg4: $FluidState$$Type): void
public "handler$zbg000$fabric_rendering_fluids_v1$onResourceReloadReturn"(arg0: $CallbackInfo$$Type): void
public "handler$zbg000$fabric_rendering_fluids_v1$onHeadRender"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $VertexConsumer$$Type, arg3: $BlockState$$Type, arg4: $FluidState$$Type, arg5: $CallbackInfo$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LiquidBlockRenderer$$Type = ($LiquidBlockRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LiquidBlockRenderer$$Original = $LiquidBlockRenderer;}
declare module "net.minecraft.client.renderer.entity.EntityRenderer" {
import {$EntityRendererAccessor$$Interface} from "com.blackgear.vanillabackport.core.mixin.access.EntityRendererAccessor"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List, $List$$Type} from "java.util.List"
import {$Font} from "net.minecraft.client.gui.Font"
import {$Frustum$$Type} from "net.minecraft.client.renderer.culling.Frustum"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$EntityRenderDispatcher} from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$EntityRendererExtension$$Interface} from "com.supermartijn642.fusion.extensions.EntityRendererExtension"

export class $EntityRenderer<T extends $Entity> implements $EntityRendererAccessor$$Interface, $EntityRendererExtension$$Interface {
static readonly "LEASH_RENDER_STEPS": integer
readonly "entityRenderDispatcher": $EntityRenderDispatcher

public "getFont"(): $Font
public "getFusionModelParts"(): $List
public "callGetBlockLightLevel"(arg0: $Entity$$Type, arg1: $BlockPos$$Type): integer
public "setFusionModelParts"(parts: $List$$Type): void
public "render"(arg0: T, arg1: float, arg2: float, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer): void
public "getTextureLocation"(arg0: T): $ResourceLocation
public "shouldRender"(arg0: T, arg1: $Frustum$$Type, arg2: double, arg3: double, arg4: double): boolean
public "renderLeash"<E extends $Entity>(arg0: T, arg1: float, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type, arg4: E): void
public "getRenderOffset"(arg0: T, arg1: float): $Vec3
public "getPackedLightCoords"(arg0: T, arg1: float): integer
get "font"(): $Font
get "fusionModelParts"(): $List
set "fusionModelParts"(value: $List$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRenderer$$Type<T> = ($EntityRenderer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityRenderer$$Original<T> = $EntityRenderer<(T)>;}
declare module "net.minecraft.client.renderer.debug.GameTestDebugRenderer" {
import {$DebugRenderer$SimpleDebugRenderer$$Interface} from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $GameTestDebugRenderer implements $DebugRenderer$SimpleDebugRenderer$$Interface {
constructor()

public "clear"(): void
public "addMarker"(arg0: $BlockPos$$Type, arg1: integer, arg2: StringJS, arg3: integer): void
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: double, arg3: double, arg4: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameTestDebugRenderer$$Type = ($GameTestDebugRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GameTestDebugRenderer$$Original = $GameTestDebugRenderer;}
declare module "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard" {
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$Runnable} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"
import {$RenderStateShard$BooleanStateShard} from "net.minecraft.client.renderer.RenderStateShard$BooleanStateShard"

export class $RenderStateShard$LightmapStateShard extends $RenderStateShard$BooleanStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
readonly "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: boolean)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$LightmapStateShard$$Type = ($RenderStateShard$LightmapStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$LightmapStateShard$$Original = $RenderStateShard$LightmapStateShard;}
declare module "net.minecraft.client.renderer.texture.atlas.SpriteSourceType" {
import {$SpriteSource, $SpriteSource$$Type} from "net.minecraft.client.renderer.texture.atlas.SpriteSource"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"

export class $SpriteSourceType extends $Record {
constructor(arg0: $MapCodec$$Type<($SpriteSource$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "codec"(): $MapCodec<($SpriteSource)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteSourceType$$Type = ({"codec"?: $MapCodec$$Type<($SpriteSource$$Type)>}) | ([codec?: $MapCodec$$Type<($SpriteSource$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteSourceType$$Original = $SpriteSourceType;}
declare module "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard" {
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard} from "net.minecraft.client.renderer.RenderStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"

export class $RenderStateShard$LayeringStateShard extends $RenderStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
readonly "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: StringJS, arg1: $Runnable$$Type, arg2: $Runnable$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$LayeringStateShard$$Type = ($RenderStateShard$LayeringStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$LayeringStateShard$$Original = $RenderStateShard$LayeringStateShard;}
declare module "net.minecraft.client.renderer.debug.BeeDebugRenderer" {
import {$DebugRenderer$SimpleDebugRenderer$$Interface} from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$HiveDebugPayload$HiveInfo$$Type} from "net.minecraft.network.protocol.common.custom.HiveDebugPayload$HiveInfo"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$BeeDebugPayload$BeeInfo$$Type} from "net.minecraft.network.protocol.common.custom.BeeDebugPayload$BeeInfo"

export class $BeeDebugRenderer implements $DebugRenderer$SimpleDebugRenderer$$Interface {
constructor(arg0: $Minecraft$$Type)

public "clear"(): void
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: double, arg3: double, arg4: double): void
public "addOrUpdateBeeInfo"(arg0: $BeeDebugPayload$BeeInfo$$Type): void
public "addOrUpdateHiveInfo"(arg0: $HiveDebugPayload$HiveInfo$$Type, arg1: long): void
public "removeBeeInfo"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeeDebugRenderer$$Type = ($BeeDebugRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BeeDebugRenderer$$Original = $BeeDebugRenderer;}
declare module "net.minecraft.client.renderer.texture.TextureAtlasSprite$Ticker" {
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"

export interface $TextureAtlasSprite$Ticker$$Interface extends $AutoCloseable$$Interface {
}

export class $TextureAtlasSprite$Ticker implements $TextureAtlasSprite$Ticker$$Interface {
 "close"(): void
 "tickAndUpload"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureAtlasSprite$Ticker$$Type = ($TextureAtlasSprite$Ticker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextureAtlasSprite$Ticker$$Original = $TextureAtlasSprite$Ticker;}
declare module "net.minecraft.client.renderer.texture.TextureAtlasSprite" {
import {$EmissiveSpriteHolder$$Interface} from "com.blackgear.platform.client.v2.emissive.EmissiveSpriteHolder"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TextureAtlasSprite$Ticker} from "net.minecraft.client.renderer.texture.TextureAtlasSprite$Ticker"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$SpriteContents, $SpriteContents$$Type} from "net.minecraft.client.renderer.texture.SpriteContents"
import {$TextureType, $TextureType$$Type} from "com.supermartijn642.fusion.api.texture.TextureType"
import {$TextureAtlasSpriteExtension$$Interface} from "com.supermartijn642.fusion.extensions.TextureAtlasSpriteExtension"

export class $TextureAtlasSprite implements $TextureAtlasSpriteExtension$$Interface, $EmissiveSpriteHolder$$Interface {
 "v0": float
 "u0": float
 "v1": float
 "u1": float

constructor(arg0: $ResourceLocation$$Type, arg1: $SpriteContents$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer)

public "getX"(): integer
public "getV0"(): float
public "getU1"(): float
public "getV1"(): float
public "getU0"(): float
public "getV"(arg0: float): float
public "getU"(arg0: float): float
public "createTicker"(): $TextureAtlasSprite$Ticker
public "toString"(): StringJS
public "wrap"(arg0: $VertexConsumer$$Type): $VertexConsumer
public "contents"(): $SpriteContents
public "getFusionTextureType"(): $TextureType
public "setFusionTextureType"(type: $TextureType$$Type): void
public "uvShrinkRatio"(): float
public "getEmissiveSprite"(): $TextureAtlasSprite
public "setEmissiveSprite"(sprite: $TextureAtlasSprite$$Type): void
public "getPixelRGBA"(arg0: integer, arg1: integer, arg2: integer): integer
public "getY"(): integer
public "atlasLocation"(): $ResourceLocation
public "getUOffset"(arg0: float): float
public "getVOffset"(arg0: float): float
public "uploadFirstFrame"(): void
get "x"(): integer
get "fusionTextureType"(): $TextureType
set "fusionTextureType"(value: $TextureType$$Type)
get "emissiveSprite"(): $TextureAtlasSprite
set "emissiveSprite"(value: $TextureAtlasSprite$$Type)
get "y"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureAtlasSprite$$Type = ($TextureAtlasSprite);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextureAtlasSprite$$Original = $TextureAtlasSprite;}
declare module "net.minecraft.client.renderer.block.model.BlockElement" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$BlockElementRotation, $BlockElementRotation$$Type} from "net.minecraft.client.renderer.block.model.BlockElementRotation"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockElementFace, $BlockElementFace$$Type} from "net.minecraft.client.renderer.block.model.BlockElementFace"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$ExtraFaceData, $ExtraFaceData$$Type} from "net.neoforged.neoforge.client.model.ExtraFaceData"

export class $BlockElement {
readonly "rotation": $BlockElementRotation
readonly "shade": boolean
readonly "from": $Vector3f
readonly "to": $Vector3f
readonly "faces": $Map<($Direction), ($BlockElementFace)>

constructor(arg0: $Vector3f$$Type, arg1: $Vector3f$$Type, arg2: $Map$$Type<($Direction$$Type), ($BlockElementFace$$Type)>, arg3: $BlockElementRotation$$Type, arg4: boolean)
constructor(arg0: $Vector3f$$Type, arg1: $Vector3f$$Type, arg2: $Map$$Type<($Direction$$Type), ($BlockElementFace$$Type)>, arg3: $BlockElementRotation$$Type, arg4: boolean, arg5: $ExtraFaceData$$Type)

public "getFaceData"(): $ExtraFaceData
public "uvsByFace"(arg0: $Direction$$Type): (float)[]
public "setFaceData"(arg0: $ExtraFaceData$$Type): void
get "faceData"(): $ExtraFaceData
set "faceData"(value: $ExtraFaceData$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockElement$$Type = ($BlockElement);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockElement$$Original = $BlockElement;}
declare module "net.minecraft.client.renderer.debug.PathfindingRenderer" {
import {$DebugRenderer$SimpleDebugRenderer$$Interface} from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$Path$$Type} from "net.minecraft.world.level.pathfinder.Path"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"

export class $PathfindingRenderer implements $DebugRenderer$SimpleDebugRenderer$$Interface {
constructor()

public "addPath"(arg0: integer, arg1: $Path$$Type, arg2: float): void
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: double, arg3: double, arg4: double): void
public static "renderPath"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: $Path$$Type, arg3: float, arg4: boolean, arg5: boolean, arg6: double, arg7: double, arg8: double): void
public static "renderPathLine"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: $Path$$Type, arg3: double, arg4: double, arg5: double): void
public "clear"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PathfindingRenderer$$Type = ($PathfindingRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PathfindingRenderer$$Original = $PathfindingRenderer;}
declare module "net.minecraft.client.renderer.RenderStateShard$OutputStateShard" {
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard} from "net.minecraft.client.renderer.RenderStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"

export class $RenderStateShard$OutputStateShard extends $RenderStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
readonly "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: StringJS, arg1: $Runnable$$Type, arg2: $Runnable$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$OutputStateShard$$Type = ($RenderStateShard$OutputStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$OutputStateShard$$Original = $RenderStateShard$OutputStateShard;}
declare module "net.minecraft.client.renderer.debug.GoalSelectorDebugRenderer" {
import {$DebugRenderer$SimpleDebugRenderer$$Interface} from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import {$GoalDebugPayload$DebugGoal$$Type} from "net.minecraft.network.protocol.common.custom.GoalDebugPayload$DebugGoal"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List$$Type} from "java.util.List"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $GoalSelectorDebugRenderer implements $DebugRenderer$SimpleDebugRenderer$$Interface {
constructor(arg0: $Minecraft$$Type)

public "clear"(): void
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: double, arg3: double, arg4: double): void
public "addGoalSelector"(arg0: integer, arg1: $BlockPos$$Type, arg2: $List$$Type<($GoalDebugPayload$DebugGoal$$Type)>): void
public "removeGoalSelector"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GoalSelectorDebugRenderer$$Type = ($GoalSelectorDebugRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GoalSelectorDebugRenderer$$Original = $GoalSelectorDebugRenderer;}
declare module "net.minecraft.client.renderer.entity.ItemFrameRenderer" {
import {$EntityRenderer} from "net.minecraft.client.renderer.entity.EntityRenderer"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$EntityRenderDispatcher} from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"
import {$ItemFrame, $ItemFrame$$Type} from "net.minecraft.world.entity.decoration.ItemFrame"
import {$EntityRendererProvider$Context$$Type} from "net.minecraft.client.renderer.entity.EntityRendererProvider$Context"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $ItemFrameRenderer<T extends $ItemFrame> extends $EntityRenderer<(T)> {
static readonly "LEASH_RENDER_STEPS": integer
readonly "entityRenderDispatcher": $EntityRenderDispatcher
static readonly "BRIGHT_MAP_LIGHT_ADJUSTMENT": integer
static readonly "GLOW_FRAME_BRIGHTNESS": integer

constructor(arg0: $EntityRendererProvider$Context$$Type)

public "render"(arg0: $Entity$$Type, arg1: float, arg2: float, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer): void
public "render"(arg0: T, arg1: float, arg2: float, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer): void
public "getTextureLocation"(arg0: $Entity$$Type): $ResourceLocation
public "getTextureLocation"(arg0: T): $ResourceLocation
public "getRenderOffset"(arg0: T, arg1: float): $Vec3
public "getRenderOffset"(arg0: $Entity$$Type, arg1: float): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFrameRenderer$$Type<T> = ($ItemFrameRenderer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemFrameRenderer$$Original<T> = $ItemFrameRenderer<(T)>;}
declare module "net.minecraft.client.renderer.item.ClampedItemPropertyFunction" {
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ItemPropertyFunction$$Interface} from "net.minecraft.client.renderer.item.ItemPropertyFunction"

export interface $ClampedItemPropertyFunction$$Interface extends $ItemPropertyFunction$$Interface {

(arg0: $ItemStack, arg1: $ClientLevel, arg2: $LivingEntity, arg3: integer): float
}

export class $ClampedItemPropertyFunction implements $ClampedItemPropertyFunction$$Interface {
/**
 * 
 * @deprecated
 */
 "call"(arg0: $ItemStack$$Type, arg1: $ClientLevel$$Type, arg2: $LivingEntity$$Type, arg3: integer): float
 "unclampedCall"(arg0: $ItemStack$$Type, arg1: $ClientLevel$$Type, arg2: $LivingEntity$$Type, arg3: integer): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClampedItemPropertyFunction$$Type = ((arg0: $ItemStack, arg1: $ClientLevel, arg2: $LivingEntity, arg3: integer) => float);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClampedItemPropertyFunction$$Original = $ClampedItemPropertyFunction;}
declare module "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard" {
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$Runnable} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard} from "net.minecraft.client.renderer.RenderStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"

export class $RenderStateShard$DepthTestStateShard extends $RenderStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
readonly "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: StringJS, arg1: integer)

public "toString"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$DepthTestStateShard$$Type = ($RenderStateShard$DepthTestStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$DepthTestStateShard$$Original = $RenderStateShard$DepthTestStateShard;}
declare module "net.minecraft.client.renderer.texture.atlas.SpriteSource$Output" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$SpriteSource$SpriteSupplier$$Type} from "net.minecraft.client.renderer.texture.atlas.SpriteSource$SpriteSupplier"
import {$Resource$$Type} from "net.minecraft.server.packs.resources.Resource"

export interface $SpriteSource$Output$$Interface {
}

export class $SpriteSource$Output implements $SpriteSource$Output$$Interface {
 "add"(arg0: $ResourceLocation$$Type, arg1: $Resource$$Type): void
 "add"(arg0: $ResourceLocation$$Type, arg1: $SpriteSource$SpriteSupplier$$Type): void
 "removeAll"(arg0: $Predicate$$Type<($ResourceLocation)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteSource$Output$$Type = ($SpriteSource$Output);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteSource$Output$$Original = $SpriteSource$Output;}
declare module "net.minecraft.client.renderer.texture.atlas.SpriteSource$SpriteSupplier" {
import {$Function, $Function$$Type, $Function$$Interface} from "java.util.function.Function"
import {$SpriteResourceLoader, $SpriteResourceLoader$$Type} from "net.minecraft.client.renderer.texture.atlas.SpriteResourceLoader"
import {$SpriteContents, $SpriteContents$$Type} from "net.minecraft.client.renderer.texture.SpriteContents"

export interface $SpriteSource$SpriteSupplier$$Interface extends $Function$$Interface<($SpriteResourceLoader), ($SpriteContents)> {

(arg0: $SpriteResourceLoader): $SpriteContents$$Type
}

export class $SpriteSource$SpriteSupplier implements $SpriteSource$SpriteSupplier$$Interface {
 "discard"(): void
 "apply"(arg0: $SpriteResourceLoader$$Type): $SpriteContents
static "identity"<T>(): $Function<($SpriteResourceLoader), ($SpriteResourceLoader)>
 "compose"<V>(arg0: $Function$$Type<(V), ($SpriteResourceLoader$$Type)>): $Function<(V), ($SpriteContents)>
 "andThen"<V>(arg0: $Function$$Type<($SpriteContents), (V)>): $Function<($SpriteResourceLoader), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteSource$SpriteSupplier$$Type = ((arg0: $SpriteResourceLoader) => $SpriteContents$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteSource$SpriteSupplier$$Original = $SpriteSource$SpriteSupplier;}
declare module "net.minecraft.client.renderer.RenderStateShard$TextureStateShard" {
import {$Optional} from "java.util.Optional"
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$Runnable} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"

export class $RenderStateShard$TextureStateShard extends $RenderStateShard$EmptyTextureStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
readonly "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
readonly "texture": $Optional<($ResourceLocation)>
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: $ResourceLocation$$Type, arg1: boolean, arg2: boolean)

public "toString"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$TextureStateShard$$Type = ($RenderStateShard$TextureStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$TextureStateShard$$Original = $RenderStateShard$TextureStateShard;}
declare module "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard" {
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard} from "net.minecraft.client.renderer.RenderStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"

export class $RenderStateShard$TransparencyStateShard extends $RenderStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
readonly "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: StringJS, arg1: $Runnable$$Type, arg2: $Runnable$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$TransparencyStateShard$$Type = ($RenderStateShard$TransparencyStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$TransparencyStateShard$$Original = $RenderStateShard$TransparencyStateShard;}
declare module "net.minecraft.client.renderer.DimensionSpecialEffects$SkyType" {
import {$Enum} from "java.lang.Enum"

export class $DimensionSpecialEffects$SkyType extends $Enum<($DimensionSpecialEffects$SkyType)> {
static readonly "END": $DimensionSpecialEffects$SkyType
static readonly "NONE": $DimensionSpecialEffects$SkyType
static readonly "NORMAL": $DimensionSpecialEffects$SkyType

public static "values"(): ($DimensionSpecialEffects$SkyType)[]
public static "valueOf"(arg0: StringJS): $DimensionSpecialEffects$SkyType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimensionSpecialEffects$SkyType$$Type = (("none") | ("normal") | ("end"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DimensionSpecialEffects$SkyType$$Original = $DimensionSpecialEffects$SkyType;}
declare module "net.minecraft.client.renderer.RenderType" {
import {$Optional} from "java.util.Optional"
import {$RenderTypeAccessor$$Interface} from "net.createmod.ponder.mixin.client.accessor.RenderTypeAccessor"
import {$List} from "java.util.List"
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$ImmutableList} from "com.google.common.collect.ImmutableList"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderType$CompositeRenderType} from "net.minecraft.client.renderer.RenderType$CompositeRenderType"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Function} from "java.util.function.Function"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard} from "net.minecraft.client.renderer.RenderStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderType$CompositeState, $RenderType$CompositeState$$Type} from "net.minecraft.client.renderer.RenderType$CompositeState"
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$BiFunction} from "java.util.function.BiFunction"
import {$MeshData$$Type} from "com.mojang.blaze3d.vertex.MeshData"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard, $RenderStateShard$ShaderStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$TransparencyStateShard, $RenderStateShard$TransparencyStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$VertexFormat$Mode, $VertexFormat$Mode$$Type} from "com.mojang.blaze3d.vertex.VertexFormat$Mode"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"
import {$VertexFormat, $VertexFormat$$Type} from "com.mojang.blaze3d.vertex.VertexFormat"

export class $RenderType extends $RenderStateShard implements $RenderTypeAccessor$$Interface {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TEXT": $Function<($ResourceLocation), ($RenderType)>
static readonly "TEXT_BACKGROUND_SEE_THROUGH": $RenderType
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TEXT_INTENSITY_SEE_THROUGH": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "SMALL_BUFFER_SIZE": integer
static readonly "GUI": $RenderType$CompositeRenderType
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ENTITY_DECAL": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "ENTITY_GLINT": $RenderType
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "ENTITY_GLINT_DIRECT": $RenderType
readonly "setupState": $Runnable
static readonly "GUI_GHOST_RECIPE_OVERLAY": $RenderType$CompositeRenderType
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "SOLID": $RenderType
static readonly "LINE_STRIP": $RenderType$CompositeRenderType
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "EYES": $BiFunction<($ResourceLocation), ($RenderStateShard$TransparencyStateShard), ($RenderType)>
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSIENT_BUFFER_SIZE": integer
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DRAGON_RAYS_DEPTH": $RenderType
static readonly "BEACON_BEAM": $BiFunction<($ResourceLocation), (boolean), ($RenderType)>
static readonly "ENTITY_TRANSLUCENT_CULL": $Function<($ResourceLocation), ($RenderType)>
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEBUG_QUADS": $RenderType$CompositeRenderType
static readonly "ENTITY_CUTOUT": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GLINT_TRANSLUCENT": $RenderType
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "TEXT_INTENSITY_POLYGON_OFFSET": $Function<($ResourceLocation), ($RenderType)>
static readonly "CHUNK_BUFFER_LAYERS": $ImmutableList<($RenderType)>
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "LEASH": $RenderType
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "GUI_TEXT_HIGHLIGHT": $RenderType$CompositeRenderType
 "chunkLayerId": integer
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CLOUDS": $RenderType
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ENTITY_TRANSLUCENT_EMISSIVE": $BiFunction<($ResourceLocation), (boolean), ($RenderType)>
static readonly "DRAGON_EXPLOSION_ALPHA": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ARMOR_ENTITY_GLINT": $RenderType
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "TRANSLUCENT_MOVING_BLOCK": $RenderType
static readonly "ENTITY_NO_OUTLINE": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ENTITY_CUTOUT_NO_CULL_Z_OFFSET": $BiFunction<($ResourceLocation), (boolean), ($RenderType)>
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LINES": $RenderType$CompositeRenderType
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "ENTITY_CUTOUT_NO_CULL": $BiFunction<($ResourceLocation), (boolean), ($RenderType)>
static readonly "DRAGON_RAYS": $RenderType
static readonly "TRANSLUCENT": $RenderType
static readonly "CUTOUT_MIPPED": $RenderType
static readonly "END_PORTAL": $RenderType
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TEXT_POLYGON_OFFSET": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WATER_MASK": $RenderType
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTNING": $RenderType
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "TEXT_SEE_THROUGH": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ENTITY_TRANSLUCENT": $BiFunction<($ResourceLocation), (boolean), ($RenderType)>
static readonly "ENTITY_SHADOW": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GUI_OVERLAY": $RenderType$CompositeRenderType
static readonly "CLOUDS_DEPTH_ONLY": $RenderType
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEBUG_STRUCTURE_QUADS": $RenderType$CompositeRenderType
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "DEBUG_SECTION_QUADS": $RenderType$CompositeRenderType
static readonly "ENTITY_SOLID": $Function<($ResourceLocation), ($RenderType)>
static readonly "GLINT": $RenderType
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "TEXT_INTENSITY": $Function<($ResourceLocation), ($RenderType)>
static readonly "BIG_BUFFER_SIZE": integer
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MEGABYTE": integer
static readonly "ITEM_ENTITY_TRANSLUCENT_CULL": $Function<($ResourceLocation), ($RenderType)>
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "ARMOR_CUTOUT_NO_CULL": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "CUTOUT": $RenderType
static readonly "END_GATEWAY": $RenderType
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "TRIPWIRE": $RenderType
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ENTITY_SMOOTH_CUTOUT": $Function<($ResourceLocation), ($RenderType)>
static readonly "DEBUG_FILLED_BOX": $RenderType$CompositeRenderType
static readonly "CRUMBLING": $Function<($ResourceLocation), ($RenderType)>
static readonly "TEXT_BACKGROUND": $RenderType
static readonly "DEBUG_LINE_STRIP": $Function<(double), ($RenderType$CompositeRenderType)>
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: StringJS, arg1: $VertexFormat$$Type, arg2: $VertexFormat$Mode$$Type, arg3: integer, arg4: boolean, arg5: boolean, arg6: $Runnable$$Type, arg7: $Runnable$$Type)

public static "guiOverlay"(): $RenderType
public static "gui"(): $RenderType
public static "leash"(): $RenderType
public static "tripwire"(): $RenderType
public "mode"(): $VertexFormat$Mode
public "toString"(): StringJS
public static "lines"(): $RenderType
public "format"(): $VertexFormat
public static "create"(arg0: StringJS, arg1: $VertexFormat$$Type, arg2: $VertexFormat$Mode$$Type, arg3: integer, arg4: $RenderType$CompositeState$$Type): $RenderType$CompositeRenderType
public static "create"(arg0: StringJS, arg1: $VertexFormat$$Type, arg2: $VertexFormat$Mode$$Type, arg3: integer, arg4: boolean, arg5: boolean, arg6: $RenderType$CompositeState$$Type): $RenderType$CompositeRenderType
public static "text"(arg0: $ResourceLocation$$Type): $RenderType
public static "lambda$static$0"(arg0: $ResourceLocation$$Type): $RenderType
public static "lambda$static$1"(arg0: $ResourceLocation$$Type): $RenderType
public "draw"(arg0: $MeshData$$Type): void
public "bufferSize"(): integer
public static "lambda$static$20"(arg0: $ResourceLocation$$Type): $RenderType
public static "lambda$static$23"(arg0: double): $RenderType$CompositeRenderType
public static "lambda$static$22"(arg0: $ResourceLocation$$Type): $RenderType
public static "lambda$static$21"(arg0: $ResourceLocation$$Type): $RenderType
public static "lightning"(): $RenderType
public static "breezeEyes"(arg0: $ResourceLocation$$Type): $RenderType
public static "breezeWind"(arg0: $ResourceLocation$$Type, arg1: float, arg2: float): $RenderType
public static "endGateway"(): $RenderType
public static "waterMask"(): $RenderType
public static "dragonRays"(): $RenderType
public static "lineStrip"(): $RenderType
public static "debugQuads"(): $RenderType
public "outline"(): $Optional<($RenderType)>
public static "outline"(arg0: $ResourceLocation$$Type): $RenderType
public static "beaconBeam"(arg0: $ResourceLocation$$Type, arg1: boolean): $RenderType
public static "crumbling"(arg0: $ResourceLocation$$Type): $RenderType
public static "clouds"(): $RenderType
public static "glint"(): $RenderType
public "isOutline"(): boolean
public static "endPortal"(): $RenderType
public static "cutout"(): $RenderType
public static "lambda$static$2"(arg0: $ResourceLocation$$Type): $RenderType
public static "lambda$static$3"(arg0: $ResourceLocation$$Type, arg1: boolean): $RenderType
public static "solid"(): $RenderType
public static "chunkBufferLayers"(): $List<($RenderType)>
public static "createArmorDecalCutoutNoCull"(arg0: $ResourceLocation$$Type): $RenderType
public "canConsolidateConsecutiveGeometry"(): boolean
public static "translucentMovingBlockState"(): $RenderType$CompositeState
public static "catnip$create$ponder_$md$d44d69$0"(arg0: StringJS, arg1: $VertexFormat$$Type, arg2: $VertexFormat$Mode$$Type, arg3: integer, arg4: boolean, arg5: boolean, arg6: $RenderType$CompositeState$$Type): $RenderType$CompositeRenderType
public static "eyes"(arg0: $ResourceLocation$$Type): $RenderType
public static "lambda$static$5"(arg0: $ResourceLocation$$Type): $RenderType
public static "lambda$static$6"(arg0: $ResourceLocation$$Type): $RenderType
public static "lambda$static$4"(arg0: $ResourceLocation$$Type, arg1: boolean): $RenderType
public static "lambda$static$11"(arg0: $ResourceLocation$$Type): $RenderType
public static "lambda$static$8"(arg0: $ResourceLocation$$Type, arg1: boolean): $RenderType
public static "lambda$static$15"(arg0: $ResourceLocation$$Type, arg1: $RenderStateShard$TransparencyStateShard$$Type): $RenderType
public static "lambda$static$14"(arg0: $ResourceLocation$$Type): $RenderType
public static "lambda$static$13"(arg0: $ResourceLocation$$Type): $RenderType
public static "lambda$static$9"(arg0: $ResourceLocation$$Type): $RenderType
public static "lambda$static$19"(arg0: $ResourceLocation$$Type): $RenderType
public static "lambda$static$10"(arg0: $ResourceLocation$$Type, arg1: boolean): $RenderType
public static "lambda$static$17"(arg0: $ResourceLocation$$Type): $RenderType
public static "lambda$static$18"(arg0: $ResourceLocation$$Type): $RenderType
public static "lambda$static$7"(arg0: $ResourceLocation$$Type, arg1: boolean): $RenderType
public static "lambda$static$12"(arg0: $ResourceLocation$$Type): $RenderType
public static "lambda$static$16"(arg0: $ResourceLocation$$Type): $RenderType
public static "createArmorCutoutNoCull"(arg0: StringJS, arg1: $ResourceLocation$$Type, arg2: boolean): $RenderType$CompositeRenderType
public static "translucentMovingBlock"(): $RenderType
public static "textBackgroundSeeThrough"(): $RenderType
public static "dragonExplosionAlpha"(arg0: $ResourceLocation$$Type): $RenderType
public static "entityTranslucentEmissive"(arg0: $ResourceLocation$$Type): $RenderType
public static "entityTranslucentEmissive"(arg0: $ResourceLocation$$Type, arg1: boolean): $RenderType
public static "itemEntityTranslucentCull"(arg0: $ResourceLocation$$Type): $RenderType
public static "entityCutoutNoCullZOffset"(arg0: $ResourceLocation$$Type, arg1: boolean): $RenderType
public static "entityCutoutNoCullZOffset"(arg0: $ResourceLocation$$Type): $RenderType
public static "guiGhostRecipeOverlay"(): $RenderType
public static "textIntensityPolygonOffset"(arg0: $ResourceLocation$$Type): $RenderType
public static "entityTranslucentCull"(arg0: $ResourceLocation$$Type): $RenderType
public static "textIntensitySeeThrough"(arg0: $ResourceLocation$$Type): $RenderType
public static "debugStructureQuads"(): $RenderType
public "affectsCrumbling"(): boolean
public "sortOnUpload"(): boolean
public static "cutoutMipped"(): $RenderType
public static "entitySmoothCutout"(arg0: $ResourceLocation$$Type): $RenderType
public static "textIntensity"(arg0: $ResourceLocation$$Type): $RenderType
public static "energySwirl"(arg0: $ResourceLocation$$Type, arg1: float, arg2: float): $RenderType
public static "armorEntityGlint"(): $RenderType
public static "entityGlint"(): $RenderType
public static "glintTranslucent"(): $RenderType
public static "entityGlintDirect"(): $RenderType
public static "entityDecal"(arg0: $ResourceLocation$$Type): $RenderType
public static "entityShadow"(arg0: $ResourceLocation$$Type): $RenderType
public static "entityCutoutNoCull"(arg0: $ResourceLocation$$Type): $RenderType
public static "entityCutoutNoCull"(arg0: $ResourceLocation$$Type, arg1: boolean): $RenderType
public static "entityNoOutline"(arg0: $ResourceLocation$$Type): $RenderType
public static "translucentState"(arg0: $RenderStateShard$ShaderStateShard$$Type): $RenderType$CompositeState
public static "textSeeThrough"(arg0: $ResourceLocation$$Type): $RenderType
public static "entityCutout"(arg0: $ResourceLocation$$Type): $RenderType
public static "dragonRaysDepth"(): $RenderType
public static "armorCutoutNoCull"(arg0: $ResourceLocation$$Type): $RenderType
public static "createClouds"(arg0: boolean): $RenderType$CompositeRenderType
public static "debugLineStrip"(arg0: double): $RenderType
public static "debugFilledBox"(): $RenderType
public static "textBackground"(): $RenderType
public static "debugSectionQuads"(): $RenderType
public static "tripwireState"(): $RenderType$CompositeState
public static "entityTranslucent"(arg0: $ResourceLocation$$Type): $RenderType
public static "entityTranslucent"(arg0: $ResourceLocation$$Type, arg1: boolean): $RenderType
public static "guiTextHighlight"(): $RenderType
public "getChunkLayerId"(): integer
public static "entitySolid"(arg0: $ResourceLocation$$Type): $RenderType
public static "cloudsDepthOnly"(): $RenderType
public static "textPolygonOffset"(arg0: $ResourceLocation$$Type): $RenderType
public static "translucent"(): $RenderType
public static "catnip$create"(arg0: StringJS, arg1: $VertexFormat$$Type, arg2: $VertexFormat$Mode$$Type, arg3: integer, arg4: boolean, arg5: boolean, arg6: $RenderType$CompositeState$$Type): $RenderType$CompositeRenderType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderType$$Type = ($RenderType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderType$$Original = $RenderType;}
declare module "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard" {
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard} from "net.minecraft.client.renderer.RenderStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"

export class $RenderStateShard$EmptyTextureStateShard extends $RenderStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
readonly "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: $Runnable$$Type, arg1: $Runnable$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$EmptyTextureStateShard$$Type = ($RenderStateShard$EmptyTextureStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$EmptyTextureStateShard$$Original = $RenderStateShard$EmptyTextureStateShard;}
declare module "net.minecraft.client.renderer.texture.DynamicTexture" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$NativeImage, $NativeImage$$Type} from "com.mojang.blaze3d.platform.NativeImage"
import {$Path$$Type} from "java.nio.file.Path"
import {$Dumpable$$Interface} from "net.minecraft.client.renderer.texture.Dumpable"
import {$AbstractTexture} from "net.minecraft.client.renderer.texture.AbstractTexture"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $DynamicTexture extends $AbstractTexture implements $Dumpable$$Interface {
static readonly "NOT_ASSIGNED": integer

constructor(arg0: $NativeImage$$Type)
constructor(arg0: integer, arg1: integer, arg2: boolean)

public "upload"(): void
public "load"(arg0: $ResourceManager$$Type): void
public "close"(): void
public "getPixels"(): $NativeImage
public "setPixels"(arg0: $NativeImage$$Type): void
public "dumpContents"(arg0: $ResourceLocation$$Type, arg1: $Path$$Type): void
get "pixels"(): $NativeImage
set "pixels"(value: $NativeImage$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicTexture$$Type = ($DynamicTexture);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DynamicTexture$$Original = $DynamicTexture;}
declare module "net.minecraft.client.renderer.debug.GameEventListenerRenderer" {
import {$DebugRenderer$SimpleDebugRenderer$$Interface} from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import {$PositionSource$$Type} from "net.minecraft.world.level.gameevent.PositionSource"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$GameEvent$$Type} from "net.minecraft.world.level.gameevent.GameEvent"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"

export class $GameEventListenerRenderer implements $DebugRenderer$SimpleDebugRenderer$$Interface {
constructor(arg0: $Minecraft$$Type)

public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: double, arg3: double, arg4: double): void
public "trackListener"(arg0: $PositionSource$$Type, arg1: integer): void
public "trackGameEvent"(arg0: $ResourceKey$$Type<($GameEvent)>, arg1: $Vec3$$Type): void
public "clear"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameEventListenerRenderer$$Type = ($GameEventListenerRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GameEventListenerRenderer$$Original = $GameEventListenerRenderer;}
declare module "net.minecraft.client.renderer.MultiBufferSource" {
import {$MultiBufferSource$BufferSource} from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"
import {$SequencedMap$$Type} from "java.util.SequencedMap"
import {$ByteBufferBuilder$$Type} from "com.mojang.blaze3d.vertex.ByteBufferBuilder"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export interface $MultiBufferSource$$Interface {

(arg0: $RenderType): $VertexConsumer$$Type
}

export class $MultiBufferSource implements $MultiBufferSource$$Interface {
static "immediate"(arg0: $ByteBufferBuilder$$Type): $MultiBufferSource$BufferSource
 "getBuffer"(arg0: $RenderType$$Type): $VertexConsumer
static "immediateWithBuffers"(arg0: $SequencedMap$$Type<($RenderType$$Type), ($ByteBufferBuilder$$Type)>, arg1: $ByteBufferBuilder$$Type): $MultiBufferSource$BufferSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiBufferSource$$Type = ((arg0: $RenderType) => $VertexConsumer$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiBufferSource$$Original = $MultiBufferSource;}
declare module "net.minecraft.client.renderer.block.model.BlockElementFace" {
import {$BlockFaceUV, $BlockFaceUV$$Type} from "net.minecraft.client.renderer.block.model.BlockFaceUV"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$MutableObject, $MutableObject$$Type} from "org.apache.commons.lang3.mutable.MutableObject"
import {$BlockElement, $BlockElement$$Type} from "net.minecraft.client.renderer.block.model.BlockElement"
import {$ExtraFaceData, $ExtraFaceData$$Type} from "net.neoforged.neoforge.client.model.ExtraFaceData"
import {$Record} from "java.lang.Record"

export class $BlockElementFace extends $Record {
static readonly "NO_TINT": integer

constructor(arg0: $Direction$$Type, arg1: integer, arg2: StringJS, arg3: $BlockFaceUV$$Type)
constructor(cullForDirection: $Direction$$Type, tintIndex: integer, texture: StringJS, uv: $BlockFaceUV$$Type, faceData: $ExtraFaceData$$Type, parent: $MutableObject$$Type<($BlockElement$$Type)>)

public "parent"(): $MutableObject<($BlockElement)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "uv"(): $BlockFaceUV
public "texture"(): StringJS
public "cullForDirection"(): $Direction
public "tintIndex"(): integer
public "faceData"(): $ExtraFaceData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockElementFace$$Type = ({"parent"?: $MutableObject$$Type<($BlockElement$$Type)>, "tintIndex"?: integer, "uv"?: $BlockFaceUV$$Type, "faceData"?: $ExtraFaceData$$Type, "cullForDirection"?: $Direction$$Type, "texture"?: StringJS}) | ([parent?: $MutableObject$$Type<($BlockElement$$Type)>, tintIndex?: integer, uv?: $BlockFaceUV$$Type, faceData?: $ExtraFaceData$$Type, cullForDirection?: $Direction$$Type, texture?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockElementFace$$Original = $BlockElementFace;}
declare module "net.minecraft.client.renderer.block.model.BlockElementRotation" {
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$Record} from "java.lang.Record"

export class $BlockElementRotation extends $Record {
constructor(arg0: $Vector3f$$Type, arg1: $Direction$Axis$$Type, arg2: float, arg3: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "origin"(): $Vector3f
public "rescale"(): boolean
public "axis"(): $Direction$Axis
public "angle"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockElementRotation$$Type = ({"rescale"?: boolean, "axis"?: $Direction$Axis$$Type, "angle"?: float, "origin"?: $Vector3f$$Type}) | ([rescale?: boolean, axis?: $Direction$Axis$$Type, angle?: float, origin?: $Vector3f$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockElementRotation$$Original = $BlockElementRotation;}
declare module "net.minecraft.client.renderer.texture.atlas.SpriteResourceLoader" {
import {$Collection$$Type} from "java.util.Collection"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$MetadataSectionSerializer$$Type} from "net.minecraft.server.packs.metadata.MetadataSectionSerializer"
import {$SpriteContentsConstructor, $SpriteContentsConstructor$$Type} from "net.neoforged.neoforge.client.textures.SpriteContentsConstructor"
import {$SpriteContents, $SpriteContents$$Type} from "net.minecraft.client.renderer.texture.SpriteContents"
import {$Logger} from "org.slf4j.Logger"
import {$Resource, $Resource$$Type} from "net.minecraft.server.packs.resources.Resource"

export interface $SpriteResourceLoader$$Interface {

(arg0: $ResourceLocation, arg1: $Resource, arg2: $SpriteContentsConstructor): $SpriteContents$$Type
}

export class $SpriteResourceLoader implements $SpriteResourceLoader$$Interface {
static readonly "LOGGER": $Logger

 "loadSprite"(arg0: $ResourceLocation$$Type, arg1: $Resource$$Type, arg2: $SpriteContentsConstructor$$Type): $SpriteContents
 "loadSprite"(arg0: $ResourceLocation$$Type, arg1: $Resource$$Type): $SpriteContents
static "create"(arg0: $Collection$$Type<($MetadataSectionSerializer$$Type<(never)>)>): $SpriteResourceLoader
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteResourceLoader$$Type = ((arg0: $ResourceLocation, arg1: $Resource, arg2: $SpriteContentsConstructor) => $SpriteContents$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteResourceLoader$$Original = $SpriteResourceLoader;}
declare module "net.minecraft.client.renderer.RenderType$CompositeState" {
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$RenderType$CompositeState$CompositeStateBuilder} from "net.minecraft.client.renderer.RenderType$CompositeState$CompositeStateBuilder"
import {$RenderType$OutlineProperty} from "net.minecraft.client.renderer.RenderType$OutlineProperty"

export class $RenderType$CompositeState {
readonly "outlineProperty": $RenderType$OutlineProperty
readonly "textureState": $RenderStateShard$EmptyTextureStateShard

public "toString"(): StringJS
public static "builder"(): $RenderType$CompositeState$CompositeStateBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderType$CompositeState$$Type = ($RenderType$CompositeState);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderType$CompositeState$$Original = $RenderType$CompositeState;}
declare module "net.minecraft.client.renderer.SectionBufferBuilderPool" {
import {$SectionBufferBuilderPack, $SectionBufferBuilderPack$$Type} from "net.minecraft.client.renderer.SectionBufferBuilderPack"

export class $SectionBufferBuilderPool {
public "isEmpty"(): boolean
public "release"(arg0: $SectionBufferBuilderPack$$Type): void
public "acquire"(): $SectionBufferBuilderPack
public static "allocate"(arg0: integer): $SectionBufferBuilderPool
public "getFreeBufferCount"(): integer
get "empty"(): boolean
get "freeBufferCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SectionBufferBuilderPool$$Type = ($SectionBufferBuilderPool);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SectionBufferBuilderPool$$Original = $SectionBufferBuilderPool;}
declare module "net.minecraft.client.renderer.LightTexture" {
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$GameRenderer$$Type} from "net.minecraft.client.renderer.GameRenderer"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$DimensionType$$Type} from "net.minecraft.world.level.dimension.DimensionType"

export class $LightTexture implements $AutoCloseable$$Interface {
static readonly "FULL_BRIGHT": integer
static readonly "FULL_SKY": integer
static readonly "FULL_BLOCK": integer

constructor(arg0: $GameRenderer$$Type, arg1: $Minecraft$$Type)

public static "sky"(arg0: integer): integer
public "close"(): void
public static "block"(arg0: integer): integer
public "tick"(): void
public static "pack"(arg0: integer, arg1: integer): integer
public "getDarknessGamma"(arg0: float): float
public static "getBrightness"(arg0: $DimensionType$$Type, arg1: integer): float
public "turnOnLightLayer"(): void
public "turnOffLightLayer"(): void
public "updateLightTexture"(arg0: float): void
public "calculateDarknessScale"(arg0: $LivingEntity$$Type, arg1: float, arg2: float): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightTexture$$Type = ($LightTexture);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LightTexture$$Original = $LightTexture;}
declare module "net.minecraft.client.renderer.texture.SpriteTicker" {
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"

export interface $SpriteTicker$$Interface extends $AutoCloseable$$Interface {
}

export class $SpriteTicker implements $SpriteTicker$$Interface {
 "close"(): void
 "tickAndUpload"(arg0: integer, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteTicker$$Type = ($SpriteTicker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteTicker$$Original = $SpriteTicker;}
declare module "net.minecraft.client.renderer.entity.EntityRendererProvider" {
import {$EntityRenderer, $EntityRenderer$$Type} from "net.minecraft.client.renderer.entity.EntityRenderer"
import {$EntityRendererProvider$Context, $EntityRendererProvider$Context$$Type} from "net.minecraft.client.renderer.entity.EntityRendererProvider$Context"
import {$Entity} from "net.minecraft.world.entity.Entity"

export interface $EntityRendererProvider$$Interface<T extends $Entity> {

(arg0: $EntityRendererProvider$Context): $EntityRenderer$$Type<(T)>
}

export class $EntityRendererProvider<T extends $Entity> implements $EntityRendererProvider$$Interface {
 "create"(arg0: $EntityRendererProvider$Context$$Type): $EntityRenderer<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRendererProvider$$Type<T> = ((arg0: $EntityRendererProvider$Context) => $EntityRenderer$$Type<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityRendererProvider$$Original<T> = $EntityRendererProvider<(T)>;}
declare module "net.minecraft.client.renderer.ShaderInstance" {
import {$Program} from "com.mojang.blaze3d.shaders.Program"
import {$Shader$$Interface} from "com.mojang.blaze3d.shaders.Shader"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$Uniform} from "com.mojang.blaze3d.shaders.Uniform"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ResourceProvider$$Type} from "net.minecraft.server.packs.resources.ResourceProvider"
import {$Window$$Type} from "com.mojang.blaze3d.platform.Window"
import {$AbstractUniform} from "com.mojang.blaze3d.shaders.AbstractUniform"
import {$VertexFormat$Mode$$Type} from "com.mojang.blaze3d.vertex.VertexFormat$Mode"
import {$VertexFormat, $VertexFormat$$Type} from "com.mojang.blaze3d.vertex.VertexFormat"
import {$Program$Type$$Type} from "com.mojang.blaze3d.shaders.Program$Type"

export class $ShaderInstance implements $Shader$$Interface, $AutoCloseable$$Interface {
readonly "FOG_START": $Uniform
readonly "PROJECTION_MATRIX": $Uniform
static readonly "SHADER_PATH": StringJS
readonly "TEXTURE_MATRIX": $Uniform
readonly "FOG_END": $Uniform
readonly "MODEL_VIEW_MATRIX": $Uniform
readonly "SCREEN_SIZE": $Uniform
readonly "GLINT_ALPHA": $Uniform
readonly "COLOR_MODULATOR": $Uniform
readonly "LINE_WIDTH": $Uniform
readonly "LIGHT0_DIRECTION": $Uniform
readonly "CHUNK_OFFSET": $Uniform
readonly "FOG_COLOR": $Uniform
readonly "FOG_SHAPE": $Uniform
readonly "GAME_TIME": $Uniform
readonly "LIGHT1_DIRECTION": $Uniform

/**
 * 
 * @deprecated
 */
constructor(arg0: $ResourceProvider$$Type, arg1: StringJS, arg2: $VertexFormat$$Type)
constructor(arg0: $ResourceProvider$$Type, arg1: $ResourceLocation$$Type, arg2: $VertexFormat$$Type)

public "getName"(): StringJS
public "clear"(): void
public "apply"(): void
public "getId"(): integer
public "close"(): void
public "getUniform"(arg0: StringJS): $Uniform
public "markDirty"(): void
public "setSampler"(arg0: StringJS, arg1: any): void
public "getFragmentProgram"(): $Program
public "callGetOrCreate"(arg0: $ResourceProvider$$Type, arg1: $Program$Type$$Type, arg2: StringJS): $Program
public "attachToProgram"(): void
public "getVertexProgram"(): $Program
public "setDefaultUniforms"(arg0: $VertexFormat$Mode$$Type, arg1: $Matrix4f$$Type, arg2: $Matrix4f$$Type, arg3: $Window$$Type): void
public "getVertexFormat"(): $VertexFormat
public "safeGetUniform"(arg0: StringJS): $AbstractUniform
get "name"(): StringJS
get "id"(): integer
get "fragmentProgram"(): $Program
get "vertexProgram"(): $Program
get "vertexFormat"(): $VertexFormat
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShaderInstance$$Type = ($ShaderInstance);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShaderInstance$$Original = $ShaderInstance;}
declare module "net.minecraft.client.renderer.texture.Stitcher$Entry" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"

export interface $Stitcher$Entry$$Interface {
}

export class $Stitcher$Entry implements $Stitcher$Entry$$Interface {
 "name"(): $ResourceLocation
 "width"(): integer
 "height"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Stitcher$Entry$$Type = ($Stitcher$Entry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Stitcher$Entry$$Original = $Stitcher$Entry;}
declare module "net.minecraft.client.renderer.block.model.ItemModelGenerator" {
import {$TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$Material$$Type} from "net.minecraft.client.resources.model.Material"
import {$Function$$Type} from "java.util.function.Function"
import {$List} from "java.util.List"
import {$BlockModel, $BlockModel$$Type} from "net.minecraft.client.renderer.block.model.BlockModel"
import {$SpriteContents$$Type} from "net.minecraft.client.renderer.texture.SpriteContents"
import {$BlockElement} from "net.minecraft.client.renderer.block.model.BlockElement"

export class $ItemModelGenerator {
static readonly "LAYERS": $List<(StringJS)>

constructor()

public "processFrames"(arg0: integer, arg1: StringJS, arg2: $SpriteContents$$Type): $List<($BlockElement)>
public "generateBlockModel"(arg0: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>, arg1: $BlockModel$$Type): $BlockModel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemModelGenerator$$Type = ($ItemModelGenerator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemModelGenerator$$Original = $ItemModelGenerator;}
declare module "net.minecraft.client.renderer.block.BlockRenderDispatcher" {
import {$BakedModel} from "net.minecraft.client.resources.model.BakedModel"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IdentifiableResourceReloadListener$$Interface} from "net.fabricmc.fabric.api.resource.IdentifiableResourceReloadListener"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$ResourceManagerReloadListener$$Interface} from "net.minecraft.server.packs.resources.ResourceManagerReloadListener"
import {$LiquidBlockRenderer} from "net.minecraft.client.renderer.block.LiquidBlockRenderer"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockModelShaper, $BlockModelShaper$$Type} from "net.minecraft.client.renderer.block.BlockModelShaper"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$BlockEntityWithoutLevelRenderer, $BlockEntityWithoutLevelRenderer$$Type} from "net.minecraft.client.renderer.BlockEntityWithoutLevelRenderer"
import {$Collection} from "java.util.Collection"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$BlockColors$$Type} from "net.minecraft.client.color.block.BlockColors"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$ModelBlockRenderer} from "net.minecraft.client.renderer.block.ModelBlockRenderer"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $BlockRenderDispatcher implements $ResourceManagerReloadListener$$Interface, $IdentifiableResourceReloadListener$$Interface {
readonly "blockEntityRenderer": $BlockEntityWithoutLevelRenderer
 "modelRenderer": $ModelBlockRenderer
 "liquidBlockRenderer": $LiquidBlockRenderer

constructor(arg0: $BlockModelShaper$$Type, arg1: $BlockEntityWithoutLevelRenderer$$Type, arg2: $BlockColors$$Type)

/**
 * 
 * @deprecated
 */
public "renderSingleBlock"(arg0: $BlockState$$Type, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: integer, arg4: integer): void
public "renderSingleBlock"(arg0: $BlockState$$Type, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: integer, arg4: integer, arg5: $ModelData$$Type, arg6: $RenderType$$Type): void
public "onResourceManagerReload"(arg0: $ResourceManager$$Type): void
public "renderLiquid"(arg0: $BlockPos$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $VertexConsumer$$Type, arg3: $BlockState$$Type, arg4: $FluidState$$Type): void
public "renderBatched"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: $BlockAndTintGetter$$Type, arg3: $PoseStack$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: $RandomSource$$Type, arg7: $ModelData$$Type, arg8: $RenderType$$Type): void
public "renderBatched"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: $BlockAndTintGetter$$Type, arg3: $PoseStack$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: $RandomSource$$Type): void
public "getBlockModel"(arg0: $BlockState$$Type): $BakedModel
public "getFabricDependencies"(): $Collection
/**
 * 
 * @deprecated
 */
public "renderBreakingTexture"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: $BlockAndTintGetter$$Type, arg3: $PoseStack$$Type, arg4: $VertexConsumer$$Type): void
public "renderBreakingTexture"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: $BlockAndTintGetter$$Type, arg3: $PoseStack$$Type, arg4: $VertexConsumer$$Type, arg5: $ModelData$$Type): void
public "getFabricId"(): $ResourceLocation
public "getBlockModelShaper"(): $BlockModelShaper
public "getModelRenderer"(): $ModelBlockRenderer
public "getLiquidBlockRenderer"(): $LiquidBlockRenderer
public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
public "getName"(): StringJS
get "fabricDependencies"(): $Collection
get "fabricId"(): $ResourceLocation
get "blockModelShaper"(): $BlockModelShaper
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockRenderDispatcher$$Type = ($BlockRenderDispatcher);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockRenderDispatcher$$Original = $BlockRenderDispatcher;}
declare module "net.minecraft.client.renderer.texture.Tickable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Tickable$$Interface {

(): void
}

export class $Tickable implements $Tickable$$Interface {
 "tick"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Tickable$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Tickable$$Original = $Tickable;}
declare module "net.minecraft.client.renderer.blockentity.BlockEntityRenderer" {
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$AABB} from "net.minecraft.world.phys.AABB"
import {$IBlockEntityRendererExtension$$Interface} from "net.neoforged.neoforge.client.extensions.IBlockEntityRendererExtension"

export interface $BlockEntityRenderer$$Interface<T extends $BlockEntity> extends $IBlockEntityRendererExtension$$Interface<(T)> {

(arg0: T, arg1: float, arg2: $PoseStack, arg3: $MultiBufferSource, arg4: integer, arg5: integer): void
get "viewDistance"(): integer
}

export class $BlockEntityRenderer<T extends $BlockEntity> implements $BlockEntityRenderer$$Interface {
 "render"(arg0: T, arg1: float, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type, arg4: integer, arg5: integer): void
 "getViewDistance"(): integer
 "shouldRender"(arg0: T, arg1: $Vec3$$Type): boolean
 "shouldRenderOffScreen"(arg0: T): boolean
 "getRenderBoundingBox"(arg0: T): $AABB
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityRenderer$$Type<T> = ((arg0: T, arg1: float, arg2: $PoseStack, arg3: $MultiBufferSource, arg4: integer, arg5: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEntityRenderer$$Original<T> = $BlockEntityRenderer<(T)>;}
declare module "net.minecraft.client.renderer.texture.AbstractTexture" {
import {$TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $AbstractTexture implements $AutoCloseable$$Interface {
static readonly "NOT_ASSIGNED": integer

constructor()

public "releaseId"(): void
public "reset"(arg0: $TextureManager$$Type, arg1: $ResourceManager$$Type, arg2: $ResourceLocation$$Type, arg3: $Executor$$Type): void
public "load"(arg0: $ResourceManager$$Type): void
public "getId"(): integer
public "close"(): void
public "bind"(): void
public "setFilter"(arg0: boolean, arg1: boolean): void
public "setBlurMipmap"(arg0: boolean, arg1: boolean): void
public "restoreLastBlurMipmap"(): void
get "id"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractTexture$$Type = ($AbstractTexture);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractTexture$$Original = $AbstractTexture;}
declare module "net.minecraft.client.renderer.FogRenderer$FogMode" {
import {$Enum} from "java.lang.Enum"

export class $FogRenderer$FogMode extends $Enum<($FogRenderer$FogMode)> {
static readonly "FOG_TERRAIN": $FogRenderer$FogMode
static readonly "FOG_SKY": $FogRenderer$FogMode

public static "values"(): ($FogRenderer$FogMode)[]
public static "valueOf"(arg0: StringJS): $FogRenderer$FogMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FogRenderer$FogMode$$Type = (("fog_sky") | ("fog_terrain"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FogRenderer$FogMode$$Original = $FogRenderer$FogMode;}
declare module "net.minecraft.client.renderer.debug.BrainDebugRenderer$PoiInfo" {
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $BrainDebugRenderer$PoiInfo {
readonly "pos": $BlockPos
 "freeTicketCount": integer
readonly "type": StringJS

constructor(arg0: $BlockPos$$Type, arg1: StringJS, arg2: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrainDebugRenderer$PoiInfo$$Type = ($BrainDebugRenderer$PoiInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BrainDebugRenderer$PoiInfo$$Original = $BrainDebugRenderer$PoiInfo;}
declare module "net.minecraft.client.renderer.GpuWarnlistManager" {
import {$GpuWarnlistManager$Preparations} from "net.minecraft.client.renderer.GpuWarnlistManager$Preparations"
import {$SimplePreparableReloadListener} from "net.minecraft.server.packs.resources.SimplePreparableReloadListener"

export class $GpuWarnlistManager extends $SimplePreparableReloadListener<($GpuWarnlistManager$Preparations)> {
constructor()

public "willShowWarning"(): boolean
public "isSkippingFabulous"(): boolean
public "getAllWarnings"(): StringJS
public "dismissWarningAndSkipFabulous"(): void
public "showWarning"(): void
public "dismissWarning"(): void
public "resetWarnings"(): void
public "getVendorWarnings"(): StringJS
public "hasWarnings"(): boolean
public "getVersionWarnings"(): StringJS
public "isShowingWarning"(): boolean
public "getRendererWarnings"(): StringJS
get "skippingFabulous"(): boolean
get "allWarnings"(): StringJS
get "vendorWarnings"(): StringJS
get "versionWarnings"(): StringJS
get "showingWarning"(): boolean
get "rendererWarnings"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GpuWarnlistManager$$Type = ($GpuWarnlistManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GpuWarnlistManager$$Original = $GpuWarnlistManager;}
declare module "net.minecraft.client.renderer.block.model.ItemOverride$Predicate" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"

export class $ItemOverride$Predicate {
constructor(arg0: $ResourceLocation$$Type, arg1: float)

public "getProperty"(): $ResourceLocation
public "getValue"(): float
get "property"(): $ResourceLocation
get "value"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemOverride$Predicate$$Type = ($ItemOverride$Predicate);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemOverride$Predicate$$Original = $ItemOverride$Predicate;}
declare module "net.minecraft.client.renderer.entity.ItemRenderer" {
import {$ItemRendererAccessor$$Interface as $ItemRendererAccessor$1$$Interface} from "net.fabricmc.fabric.mixin.client.indigo.renderer.ItemRendererAccessor"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$List$$Type} from "java.util.List"
import {$ModelResourceLocation} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$ItemRendererAccessor$$Interface as $ItemRendererAccessor$2$$Interface} from "com.blackgear.platform.core.mixin.access.ItemRendererAccessor"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$PoseStack$Pose$$Type} from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IdentifiableResourceReloadListener$$Interface} from "net.fabricmc.fabric.api.resource.IdentifiableResourceReloadListener"
import {$ResourceManagerReloadListener$$Interface} from "net.minecraft.server.packs.resources.ResourceManagerReloadListener"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$BlockEntityWithoutLevelRenderer, $BlockEntityWithoutLevelRenderer$$Type} from "net.minecraft.client.renderer.BlockEntityWithoutLevelRenderer"
import {$ItemDisplayContext$$Type} from "net.minecraft.world.item.ItemDisplayContext"
import {$ItemRendererAccessor$$Interface as $ItemRendererAccessor$0$$Interface} from "net.createmod.ponder.mixin.client.accessor.ItemRendererAccessor"
import {$Collection} from "java.util.Collection"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$ItemRendererAccessor$$Interface} from "dev.emi.emi.mixin.accessor.ItemRendererAccessor"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$ModelManager$$Type} from "net.minecraft.client.resources.model.ModelManager"
import {$BakedQuad$$Type} from "net.minecraft.client.renderer.block.model.BakedQuad"
import {$TextureManager, $TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$ItemColors$$Type} from "net.minecraft.client.color.item.ItemColors"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$ItemModelShaper} from "net.minecraft.client.renderer.ItemModelShaper"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $ItemRenderer implements $ResourceManagerReloadListener$$Interface, $ItemRendererAccessor$1$$Interface, $ItemRendererAccessor$$Interface, $ItemRendererAccessor$0$$Interface, $IdentifiableResourceReloadListener$$Interface, $ItemRendererAccessor$2$$Interface {
static readonly "GUI_SLOT_CENTER_X": integer
static readonly "COMPASS_FOIL_UI_SCALE": float
static readonly "COMPASS_FOIL_FIRST_PERSON_SCALE": float
static readonly "COMPASS_FOIL_TEXTURE_SCALE": float
static readonly "ENCHANTED_GLINT_ENTITY": $ResourceLocation
readonly "blockEntityRenderer": $BlockEntityWithoutLevelRenderer
static readonly "GUI_SLOT_CENTER_Y": integer
static readonly "ITEM_COUNT_BLIT_OFFSET": integer
static readonly "ENCHANTED_GLINT_ITEM": $ResourceLocation
static readonly "SPYGLASS_IN_HAND_MODEL": $ModelResourceLocation
readonly "textureManager": $TextureManager
static readonly "TRIDENT_IN_HAND_MODEL": $ModelResourceLocation

constructor(arg0: $Minecraft$$Type, arg1: $TextureManager$$Type, arg2: $ModelManager$$Type, arg3: $ItemColors$$Type, arg4: $BlockEntityWithoutLevelRenderer$$Type)

public "getModel"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type, arg3: integer): $BakedModel
public "render"(arg0: $ItemStack$$Type, arg1: $ItemDisplayContext$$Type, arg2: boolean, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer, arg6: integer, arg7: $BakedModel$$Type): void
public static "fabric_callUsesDynamicDisplay$fabric_renderer_indigo_$md$d44d69$0"(arg0: $ItemStack$$Type): boolean
public "handler$eej000$codechickenl$onRenderItem"(arg0: $ItemStack$$Type, arg1: $ItemDisplayContext$$Type, arg2: boolean, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer, arg6: integer, arg7: $BakedModel$$Type, arg8: $CallbackInfo$$Type): void
public "onResourceManagerReload"(arg0: $ResourceManager$$Type): void
public "handler$dof000$dragonlib$render"(itemStack: $ItemStack$$Type, displayContext: $ItemDisplayContext$$Type, leftHand: boolean, poseStack: $PoseStack$$Type, bufferSource: $MultiBufferSource$$Type, combinedLight: integer, combinedOverlay: integer, model: $BakedModel$$Type, ci: $CallbackInfo$$Type): void
public "handler$bgi000$fabric_renderer_indigo$hook_renderItem"(arg0: $ItemStack$$Type, arg1: $ItemDisplayContext$$Type, arg2: boolean, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer, arg6: integer, arg7: $BakedModel$$Type, arg8: $CallbackInfo$$Type): void
public static "getCompassFoilBuffer"(arg0: $MultiBufferSource$$Type, arg1: $RenderType$$Type, arg2: $PoseStack$Pose$$Type): $VertexConsumer
public "getBlockEntityRenderer"(): $BlockEntityWithoutLevelRenderer
public "getFabricDependencies"(): $Collection
public "callRenderModelLists"(arg0: $BakedModel$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: integer, arg4: $PoseStack$$Type, arg5: $VertexConsumer$$Type): void
public static "getFoilBufferDirect"(arg0: $MultiBufferSource$$Type, arg1: $RenderType$$Type, arg2: boolean, arg3: boolean): $VertexConsumer
public "catnip$getTextureManager"(): $TextureManager
public "invokeRenderBakedItemModel"(arg0: $BakedModel$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: integer, arg4: $PoseStack$$Type, arg5: $VertexConsumer$$Type): void
public "renderStatic"(arg0: $ItemStack$$Type, arg1: $ItemDisplayContext$$Type, arg2: integer, arg3: integer, arg4: $PoseStack$$Type, arg5: $MultiBufferSource$$Type, arg6: $Level$$Type, arg7: integer): void
public "renderStatic"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: $ItemDisplayContext$$Type, arg3: boolean, arg4: $PoseStack$$Type, arg5: $MultiBufferSource$$Type, arg6: $Level$$Type, arg7: integer, arg8: integer, arg9: integer): void
public static "getArmorFoilBuffer"(arg0: $MultiBufferSource$$Type, arg1: $RenderType$$Type, arg2: boolean): $VertexConsumer
public "renderQuadList"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: $List$$Type<($BakedQuad$$Type)>, arg3: $ItemStack$$Type, arg4: integer, arg5: integer): void
public "renderModelLists"(arg0: $BakedModel$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: integer, arg4: $PoseStack$$Type, arg5: $VertexConsumer$$Type): void
public static "getFoilBuffer"(arg0: $MultiBufferSource$$Type, arg1: $RenderType$$Type, arg2: boolean, arg3: boolean): $VertexConsumer
public "getItemModelShaper"(): $ItemModelShaper
public "getFabricId"(): $ResourceLocation
public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
public static "fabric_callUsesDynamicDisplay"(arg0: $ItemStack$$Type): boolean
public "getName"(): StringJS
get "fabricDependencies"(): $Collection
get "itemModelShaper"(): $ItemModelShaper
get "fabricId"(): $ResourceLocation
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemRenderer$$Type = ($ItemRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemRenderer$$Original = $ItemRenderer;}
declare module "net.minecraft.client.renderer.ItemModelShaper" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ModelResourceLocation, $ModelResourceLocation$$Type} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$ModelManager, $ModelManager$$Type} from "net.minecraft.client.resources.model.ModelManager"
import {$Int2ObjectMap} from "it.unimi.dsi.fastutil.ints.Int2ObjectMap"

export class $ItemModelShaper {
readonly "shapes": $Int2ObjectMap<($ModelResourceLocation)>

constructor(arg0: $ModelManager$$Type)

public "register"(arg0: $Item$$Type, arg1: $ModelResourceLocation$$Type): void
public "rebuildCache"(): void
public "getModelManager"(): $ModelManager
public "modifyReturnValue$bhf000$fusion$resolveItemPredicatesModel"(model: $BakedModel$$Type, stack: $ItemStack$$Type): $BakedModel
public "getItemModel"(arg0: $ItemStack$$Type): $BakedModel
public "getItemModel"(arg0: $Item$$Type): $BakedModel
get "modelManager"(): $ModelManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemModelShaper$$Type = ($ItemModelShaper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemModelShaper$$Original = $ItemModelShaper;}
declare module "net.minecraft.client.renderer.entity.EntityRenderDispatcher" {
import {$EntityRenderer} from "net.minecraft.client.renderer.entity.EntityRenderer"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Frustum$$Type} from "net.minecraft.client.renderer.culling.Frustum"
import {$Font$$Type} from "net.minecraft.client.gui.Font"
import {$Camera, $Camera$$Type} from "net.minecraft.client.Camera"
import {$ItemRenderer$$Type} from "net.minecraft.client.renderer.entity.ItemRenderer"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceManagerReloadListener$$Interface} from "net.minecraft.server.packs.resources.ResourceManagerReloadListener"
import {$BlockRenderDispatcher$$Type} from "net.minecraft.client.renderer.block.BlockRenderDispatcher"
import {$EntityRenderDispatcherAccessor$$Interface} from "com.simibubi.create.foundation.mixin.accessor.EntityRenderDispatcherAccessor"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Quaternionf, $Quaternionf$$Type} from "org.joml.Quaternionf"
import {$EntityType} from "net.minecraft.world.entity.EntityType"
import {$Map} from "java.util.Map"
import {$PlayerSkin$Model} from "net.minecraft.client.resources.PlayerSkin$Model"
import {$Options, $Options$$Type} from "net.minecraft.client.Options"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$TextureManager, $TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$ItemInHandRenderer} from "net.minecraft.client.renderer.ItemInHandRenderer"
import {$EntityModelSet$$Type} from "net.minecraft.client.model.geom.EntityModelSet"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $EntityRenderDispatcher implements $ResourceManagerReloadListener$$Interface, $EntityRenderDispatcherAccessor$$Interface {
 "crosshairPickEntity": $Entity
 "renderers": $Map<($EntityType<(never)>), ($EntityRenderer<(never)>)>
readonly "options": $Options
readonly "textureManager": $TextureManager
 "camera": $Camera

constructor(arg0: $Minecraft$$Type, arg1: $TextureManager$$Type, arg2: $ItemRenderer$$Type, arg3: $BlockRenderDispatcher$$Type, arg4: $Font$$Type, arg5: $Options$$Type, arg6: $EntityModelSet$$Type)

public "prepare"(arg0: $Level$$Type, arg1: $Camera$$Type, arg2: $Entity$$Type): void
public "setLevel"(arg0: $Level$$Type): void
public "render"<E extends $Entity>(arg0: E, arg1: double, arg2: double, arg3: double, arg4: float, arg5: float, arg6: $PoseStack$$Type, arg7: $MultiBufferSource$$Type, arg8: integer): void
public "shouldRenderHitBoxes"(): boolean
public "onResourceManagerReload"(arg0: $ResourceManager$$Type): void
public "distanceToSqr"(arg0: double, arg1: double, arg2: double): double
public "distanceToSqr"(arg0: $Entity$$Type): double
public "shouldRender"<E extends $Entity>(arg0: E, arg1: $Frustum$$Type, arg2: double, arg3: double, arg4: double): boolean
public "setRenderHitBoxes"(arg0: boolean): void
public "cameraOrientation"(): $Quaternionf
public "getRenderer"<T extends $Entity>(arg0: T): $EntityRenderer<(T)>
public "overrideCameraOrientation"(arg0: $Quaternionf$$Type): void
public "getPackedLightCoords"<E extends $Entity>(arg0: E, arg1: float): integer
public "setRenderShadow"(arg0: boolean): void
public "getItemInHandRenderer"(): $ItemInHandRenderer
public "getSkinMap"(): $Map<($PlayerSkin$Model), ($EntityRenderer<($Player)>)>
public "create$getRenderers"(): $Map
public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
public "getName"(): StringJS
set "level"(value: $Level$$Type)
set "renderHitBoxes"(value: boolean)
set "renderShadow"(value: boolean)
get "itemInHandRenderer"(): $ItemInHandRenderer
get "skinMap"(): $Map<($PlayerSkin$Model), ($EntityRenderer<($Player)>)>
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRenderDispatcher$$Type = ($EntityRenderDispatcher);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityRenderDispatcher$$Original = $EntityRenderDispatcher;}
declare module "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard" {
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard} from "net.minecraft.client.renderer.RenderStateShard"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"

export class $RenderStateShard$TexturingStateShard extends $RenderStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
readonly "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: StringJS, arg1: $Runnable$$Type, arg2: $Runnable$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$TexturingStateShard$$Type = ($RenderStateShard$TexturingStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$TexturingStateShard$$Original = $RenderStateShard$TexturingStateShard;}
declare module "net.minecraft.client.renderer.RenderStateShard$CullStateShard" {
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$Runnable} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"
import {$RenderStateShard$BooleanStateShard} from "net.minecraft.client.renderer.RenderStateShard$BooleanStateShard"

export class $RenderStateShard$CullStateShard extends $RenderStateShard$BooleanStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
readonly "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: boolean)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$CullStateShard$$Type = ($RenderStateShard$CullStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$CullStateShard$$Original = $RenderStateShard$CullStateShard;}
declare module "net.minecraft.client.renderer.block.model.ItemTransforms" {
import {$ItemDisplayContext, $ItemDisplayContext$$Type} from "net.minecraft.world.item.ItemDisplayContext"
import {$ItemTransform, $ItemTransform$$Type} from "net.minecraft.client.renderer.block.model.ItemTransform"
import {$ImmutableMap, $ImmutableMap$$Type} from "com.google.common.collect.ImmutableMap"

export class $ItemTransforms {
static readonly "NO_TRANSFORMS": $ItemTransforms
readonly "head": $ItemTransform
readonly "firstPersonLeftHand": $ItemTransform
readonly "moddedTransforms": $ImmutableMap<($ItemDisplayContext), ($ItemTransform)>
readonly "firstPersonRightHand": $ItemTransform
readonly "thirdPersonRightHand": $ItemTransform
readonly "thirdPersonLeftHand": $ItemTransform
readonly "gui": $ItemTransform
readonly "ground": $ItemTransform
readonly "fixed": $ItemTransform

constructor(arg0: $ItemTransform$$Type, arg1: $ItemTransform$$Type, arg2: $ItemTransform$$Type, arg3: $ItemTransform$$Type, arg4: $ItemTransform$$Type, arg5: $ItemTransform$$Type, arg6: $ItemTransform$$Type, arg7: $ItemTransform$$Type, arg8: $ImmutableMap$$Type<($ItemDisplayContext$$Type), ($ItemTransform$$Type)>)
/**
 * 
 * @deprecated
 */
constructor(arg0: $ItemTransform$$Type, arg1: $ItemTransform$$Type, arg2: $ItemTransform$$Type, arg3: $ItemTransform$$Type, arg4: $ItemTransform$$Type, arg5: $ItemTransform$$Type, arg6: $ItemTransform$$Type, arg7: $ItemTransform$$Type)
constructor(arg0: $ItemTransforms$$Type)

public "getTransform"(arg0: $ItemDisplayContext$$Type): $ItemTransform
public "hasTransform"(arg0: $ItemDisplayContext$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTransforms$$Type = ($ItemTransforms);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemTransforms$$Original = $ItemTransforms;}
declare module "net.minecraft.client.renderer.block.BlockModelShaper" {
import {$TextureAtlasSprite} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map$$Type} from "java.util.Map"
import {$Comparable$$Type} from "java.lang.Comparable"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$ModelResourceLocation} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModelManager, $ModelManager$$Type} from "net.minecraft.client.resources.model.ModelManager"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"

export class $BlockModelShaper {
constructor(arg0: $ModelManager$$Type)

public "getTexture"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): $TextureAtlasSprite
public static "stateToModelLocation"(arg0: $ResourceLocation$$Type, arg1: $BlockState$$Type): $ModelResourceLocation
public static "stateToModelLocation"(arg0: $BlockState$$Type): $ModelResourceLocation
public "replaceCache"(arg0: $Map$$Type<($BlockState$$Type), ($BakedModel$$Type)>): void
public "getBlockModel"(arg0: $BlockState$$Type): $BakedModel
public "getModelManager"(): $ModelManager
/**
 * 
 * @deprecated
 */
public "getParticleIcon"(arg0: $BlockState$$Type): $TextureAtlasSprite
public static "statePropertiesToString"(arg0: $Map$$Type<($Property$$Type<(never)>), ($Comparable$$Type<(never)>)>): StringJS
get "modelManager"(): $ModelManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockModelShaper$$Type = ($BlockModelShaper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockModelShaper$$Original = $BlockModelShaper;}
declare module "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard" {
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$Runnable} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard} from "net.minecraft.client.renderer.RenderStateShard"
import {$ShaderInstance$$Type} from "net.minecraft.client.renderer.ShaderInstance"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"

export class $RenderStateShard$ShaderStateShard extends $RenderStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
readonly "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: $Supplier$$Type<($ShaderInstance$$Type)>)
constructor()

public "toString"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$ShaderStateShard$$Type = ($RenderStateShard$ShaderStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$ShaderStateShard$$Original = $RenderStateShard$ShaderStateShard;}
declare module "net.minecraft.client.renderer.RenderBuffers" {
import {$MultiBufferSource$BufferSource} from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"
import {$SectionBufferBuilderPack} from "net.minecraft.client.renderer.SectionBufferBuilderPack"
import {$SectionBufferBuilderPool} from "net.minecraft.client.renderer.SectionBufferBuilderPool"
import {$OutlineBufferSource} from "net.minecraft.client.renderer.OutlineBufferSource"

export class $RenderBuffers {
constructor(arg0: integer)

public "sectionBufferPool"(): $SectionBufferBuilderPool
public "fixedBufferPack"(): $SectionBufferBuilderPack
public "bufferSource"(): $MultiBufferSource$BufferSource
public "crumblingBufferSource"(): $MultiBufferSource$BufferSource
public "outlineBufferSource"(): $OutlineBufferSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderBuffers$$Type = ($RenderBuffers);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderBuffers$$Original = $RenderBuffers;}
declare module "net.minecraft.client.renderer.DimensionSpecialEffects" {
import {$DimensionSpecialEffects$SkyType, $DimensionSpecialEffects$SkyType$$Type} from "net.minecraft.client.renderer.DimensionSpecialEffects$SkyType"
import {$LightTexture$$Type} from "net.minecraft.client.renderer.LightTexture"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Vector3f$$Type} from "org.joml.Vector3f"
import {$Object2ObjectMap} from "it.unimi.dsi.fastutil.objects.Object2ObjectMap"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Camera$$Type} from "net.minecraft.client.Camera"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IDimensionSpecialEffectsExtension$$Interface} from "net.neoforged.neoforge.client.extensions.IDimensionSpecialEffectsExtension"
import {$DimensionEffectsAccessor$$Interface} from "net.fabricmc.fabric.mixin.client.rendering.DimensionEffectsAccessor"
import {$DimensionType$$Type} from "net.minecraft.world.level.dimension.DimensionType"

export class $DimensionSpecialEffects implements $IDimensionSpecialEffectsExtension$$Interface, $DimensionEffectsAccessor$$Interface {
constructor(arg0: float, arg1: boolean, arg2: $DimensionSpecialEffects$SkyType$$Type, arg3: boolean, arg4: boolean)

public "hasGround"(): boolean
public "isFoggyAt"(arg0: integer, arg1: integer): boolean
public "skyType"(): $DimensionSpecialEffects$SkyType
public static "forType"(arg0: $DimensionType$$Type): $DimensionSpecialEffects
public static "getIdentifierMap$fabric_rendering_v1_$md$d44d69$0"(): $Object2ObjectMap
public "getBrightnessDependentFogColor"(arg0: $Vec3$$Type, arg1: float): $Vec3
public "constantAmbientLight"(): boolean
public "forceBrightLightmap"(): boolean
public "getCloudHeight"(): float
public "getSunriseColor"(arg0: float, arg1: float): (float)[]
public "renderSky"(arg0: $ClientLevel$$Type, arg1: integer, arg2: float, arg3: $Matrix4f$$Type, arg4: $Camera$$Type, arg5: $Matrix4f$$Type, arg6: boolean, arg7: $Runnable$$Type): boolean
public "tickRain"(arg0: $ClientLevel$$Type, arg1: integer, arg2: $Camera$$Type): boolean
public "adjustLightmapColors"(arg0: $ClientLevel$$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: integer, arg6: integer, arg7: $Vector3f$$Type): void
public "renderSnowAndRain"(arg0: $ClientLevel$$Type, arg1: integer, arg2: float, arg3: $LightTexture$$Type, arg4: double, arg5: double, arg6: double): boolean
public "renderClouds"(arg0: $ClientLevel$$Type, arg1: integer, arg2: float, arg3: $PoseStack$$Type, arg4: double, arg5: double, arg6: double, arg7: $Matrix4f$$Type, arg8: $Matrix4f$$Type): boolean
public static "getIdentifierMap"(): $Object2ObjectMap<($ResourceLocation), ($DimensionSpecialEffects)>
get "identifierMap$fabric_rendering_v1_$md$d44d69$0"(): $Object2ObjectMap
get "cloudHeight"(): float
get "identifierMap"(): $Object2ObjectMap<($ResourceLocation), ($DimensionSpecialEffects)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimensionSpecialEffects$$Type = ($DimensionSpecialEffects);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DimensionSpecialEffects$$Original = $DimensionSpecialEffects;}
declare module "net.minecraft.client.renderer.debug.DebugRenderer" {
import {$DebugRenderer$SimpleDebugRenderer} from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import {$MultiBufferSource$BufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"
import {$Optional} from "java.util.Optional"
import {$GameTestDebugRenderer} from "net.minecraft.client.renderer.debug.GameTestDebugRenderer"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$VillageSectionsDebugRenderer} from "net.minecraft.client.renderer.debug.VillageSectionsDebugRenderer"
import {$RaidDebugRenderer} from "net.minecraft.client.renderer.debug.RaidDebugRenderer"
import {$GoalSelectorDebugRenderer} from "net.minecraft.client.renderer.debug.GoalSelectorDebugRenderer"
import {$GameEventListenerRenderer} from "net.minecraft.client.renderer.debug.GameEventListenerRenderer"
import {$BeeDebugRenderer} from "net.minecraft.client.renderer.debug.BeeDebugRenderer"
import {$BreezeDebugRenderer} from "net.minecraft.client.renderer.debug.BreezeDebugRenderer"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PathfindingRenderer} from "net.minecraft.client.renderer.debug.PathfindingRenderer"
import {$LightSectionDebugRenderer} from "net.minecraft.client.renderer.debug.LightSectionDebugRenderer"
import {$BrainDebugRenderer} from "net.minecraft.client.renderer.debug.BrainDebugRenderer"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$StructureRenderer} from "net.minecraft.client.renderer.debug.StructureRenderer"

export class $DebugRenderer {
readonly "waterDebugRenderer": $DebugRenderer$SimpleDebugRenderer
readonly "neighborsUpdateRenderer": $DebugRenderer$SimpleDebugRenderer
readonly "pathfindingRenderer": $PathfindingRenderer
readonly "gameTestDebugRenderer": $GameTestDebugRenderer
readonly "supportBlockRenderer": $DebugRenderer$SimpleDebugRenderer
readonly "solidFaceRenderer": $DebugRenderer$SimpleDebugRenderer
readonly "breezeDebugRenderer": $BreezeDebugRenderer
readonly "gameEventListenerRenderer": $GameEventListenerRenderer
readonly "structureRenderer": $StructureRenderer
readonly "lightDebugRenderer": $DebugRenderer$SimpleDebugRenderer
readonly "chunkRenderer": $DebugRenderer$SimpleDebugRenderer
readonly "brainDebugRenderer": $BrainDebugRenderer
readonly "heightMapRenderer": $DebugRenderer$SimpleDebugRenderer
readonly "chunkBorderRenderer": $DebugRenderer$SimpleDebugRenderer
readonly "collisionBoxRenderer": $DebugRenderer$SimpleDebugRenderer
readonly "skyLightSectionDebugRenderer": $LightSectionDebugRenderer
readonly "goalSelectorRenderer": $GoalSelectorDebugRenderer
readonly "beeDebugRenderer": $BeeDebugRenderer
readonly "villageSectionsDebugRenderer": $VillageSectionsDebugRenderer
readonly "raidDebugRenderer": $RaidDebugRenderer
readonly "worldGenAttemptRenderer": $DebugRenderer$SimpleDebugRenderer

constructor(arg0: $Minecraft$$Type)

public "clear"(): void
public static "renderFloatingText"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: StringJS, arg3: double, arg4: double, arg5: double, arg6: integer): void
public static "renderFloatingText"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: StringJS, arg3: double, arg4: double, arg5: double, arg6: integer, arg7: float): void
public static "renderFloatingText"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: StringJS, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
public static "renderFloatingText"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: StringJS, arg3: double, arg4: double, arg5: double, arg6: integer, arg7: float, arg8: boolean, arg9: float, arg10: boolean): void
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$BufferSource$$Type, arg2: double, arg3: double, arg4: double): void
public "switchRenderChunkborder"(): boolean
public static "renderFilledBox"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: float, arg9: float, arg10: float, arg11: float): void
public static "renderFilledBox"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type, arg4: float, arg5: float, arg6: float, arg7: float): void
public static "renderFilledBox"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: $BlockPos$$Type, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float): void
public static "renderFilledBox"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: $AABB$$Type, arg3: float, arg4: float, arg5: float, arg6: float): void
public static "getTargetedEntity"(arg0: $Entity$$Type, arg1: integer): $Optional<($Entity)>
public static "renderFilledUnitCube"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: $BlockPos$$Type, arg3: float, arg4: float, arg5: float, arg6: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DebugRenderer$$Type = ($DebugRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DebugRenderer$$Original = $DebugRenderer;}
declare module "net.minecraft.client.renderer.LevelRenderer" {
import {$RenderBuffers, $RenderBuffers$$Type} from "net.minecraft.client.renderer.RenderBuffers"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Particle} from "net.minecraft.client.particle.Particle"
import {$Frustum, $Frustum$$Type} from "net.minecraft.client.renderer.culling.Frustum"
import {$JukeboxSong$$Type} from "net.minecraft.world.item.JukeboxSong"
import {$Camera$$Type} from "net.minecraft.client.Camera"
import {$LevelRendererAccessor$$Interface} from "com.simibubi.create.foundation.mixin.accessor.LevelRendererAccessor"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$SectionRenderDispatcher$RenderSection$$Type} from "net.minecraft.client.renderer.chunk.SectionRenderDispatcher$RenderSection"
import {$IdentifiableResourceReloadListener$$Interface} from "net.fabricmc.fabric.api.resource.IdentifiableResourceReloadListener"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$GameRenderer$$Type} from "net.minecraft.client.renderer.GameRenderer"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$BlockEntityRenderDispatcher$$Type} from "net.minecraft.client.renderer.blockentity.BlockEntityRenderDispatcher"
import {$VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$SectionRenderDispatcher} from "net.minecraft.client.renderer.chunk.SectionRenderDispatcher"
import {$DeltaTracker$$Type} from "net.minecraft.client.DeltaTracker"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ResourceManagerReloadListener$$Interface} from "net.minecraft.server.packs.resources.ResourceManagerReloadListener"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$RenderTarget} from "com.mojang.blaze3d.pipeline.RenderTarget"
import {$LightTexture$$Type} from "net.minecraft.client.renderer.LightTexture"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$EntityRenderDispatcher$$Type} from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"
import {$AccessorLevelRenderer$$Interface} from "com.railwayteam.railways.mixin.client.AccessorLevelRenderer"
import {$LevelRendererAccessor$$Interface as $LevelRendererAccessor$0$$Interface} from "dev.engine_room.flywheel.backend.mixin.LevelRendererAccessor"
import {$ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"

export class $LevelRenderer implements $ResourceManagerReloadListener$$Interface, $AutoCloseable$$Interface, $LevelRendererAccessor$0$$Interface, $AccessorLevelRenderer$$Interface, $IdentifiableResourceReloadListener$$Interface, $LevelRendererAccessor$$Interface {
readonly "renderBuffers": $RenderBuffers
static readonly "HALF_SECTION_SIZE": integer
static readonly "SECTION_SIZE": integer
static readonly "DIRECTIONS": ($Direction)[]

constructor(arg0: $Minecraft$$Type, arg1: $EntityRenderDispatcher$$Type, arg2: $BlockEntityRenderDispatcher$$Type, arg3: $RenderBuffers$$Type)

public "levelEvent"(arg0: integer, arg1: $BlockPos$$Type, arg2: integer): void
public static "renderFace"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: $Direction$$Type, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float, arg12: float): void
public "renderSky"(arg0: $Matrix4f$$Type, arg1: $Matrix4f$$Type, arg2: float, arg3: $Camera$$Type, arg4: boolean, arg5: $Runnable$$Type): void
public "clear"(): void
public "close"(): void
public "resize"(arg0: integer, arg1: integer): void
public "tick"(): void
public "setLevel"(arg0: $ClientLevel$$Type): void
public "getTicks"(): integer
public "callAddParticleInternal"(arg0: $ParticleOptions$$Type, arg1: boolean, arg2: boolean, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: double): $Particle
public "create$getCapturedFrustum"(): $Frustum
public "create$getCullingFrustum"(): $Frustum
public "railways$getRenderBuffers"(): $RenderBuffers
public "updateGlobalBlockEntities"(arg0: $Collection$$Type<($BlockEntity$$Type)>, arg1: $Collection$$Type<($BlockEntity$$Type)>): void
public "handler$ela000$northstar$renderClouds"(poseStack: $PoseStack$$Type, frustumMatrix: $Matrix4f$$Type, projectionMatrix: $Matrix4f$$Type, partialTick: float, camX: double, camY: double, camZ: double, info: $CallbackInfo$$Type): void
public "onResourceManagerReload"(arg0: $ResourceManager$$Type): void
public "setSectionDirtyWithNeighbors"(arg0: integer, arg1: integer, arg2: integer): void
public static "addChainedFilledBoxVertices"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float): void
public static "addChainedFilledBoxVertices"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: float, arg9: float, arg10: float, arg11: float): void
public "handler$cnd000$patchouli$onRender"(arg0: $DeltaTracker$$Type, arg1: boolean, arg2: $Camera$$Type, arg3: $GameRenderer$$Type, arg4: $LightTexture$$Type, arg5: $Matrix4f$$Type, arg6: $Matrix4f$$Type, arg7: $CallbackInfo$$Type): void
public "iterateVisibleBlockEntities"(arg0: $Consumer$$Type<($BlockEntity)>): void
public "stopJukeboxSongAndNotifyNearby"(arg0: $BlockPos$$Type): void
public "handler$zjh000$supermartijn642corelib$renderLevel"(deltaTracker: $DeltaTracker$$Type, bl: boolean, camera: $Camera$$Type, gameRenderer: $GameRenderer$$Type, lightTexture: $LightTexture$$Type, matrix4f: $Matrix4f$$Type, matrix4f2: $Matrix4f$$Type, ci: $CallbackInfo$$Type): void
public "needsUpdate"(): void
public "tickRain"(arg0: $Camera$$Type): void
public "allChanged"(): void
public "entityTarget"(): $RenderTarget
public "addParticle"(arg0: $ParticleOptions$$Type, arg1: boolean, arg2: boolean, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: double): void
public "addParticle"(arg0: $ParticleOptions$$Type, arg1: boolean, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double): void
public "handler$cab000$geckolib$captureRenderedEntities"(arg0: $DeltaTracker$$Type, arg1: boolean, arg2: $Camera$$Type, arg3: $GameRenderer$$Type, arg4: $LightTexture$$Type, arg5: $Matrix4f$$Type, arg6: $Matrix4f$$Type, arg7: $CallbackInfo$$Type): void
public "renderLevel"(arg0: $DeltaTracker$$Type, arg1: boolean, arg2: $Camera$$Type, arg3: $GameRenderer$$Type, arg4: $LightTexture$$Type, arg5: $Matrix4f$$Type, arg6: $Matrix4f$$Type): void
public "graphicsChanged"(): void
public "getFabricDependencies"(): $Collection
public "requestOutlineEffect"(): void
public "addParticleInternal"(arg0: $ParticleOptions$$Type, arg1: boolean, arg2: boolean, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: double): $Particle
public "shouldShowEntityOutlines"(): boolean
public "getEntityStatistics"(): StringJS
public "getSectionRenderDispatcher"(): $SectionRenderDispatcher
public "notifyNearbyEntities"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: boolean): void
public "getLastViewDistance"(): double
public "addRecentlyCompiledSection"(arg0: $SectionRenderDispatcher$RenderSection$$Type): void
public "getSectionStatistics"(): StringJS
public "destroyBlockProgress"(arg0: integer, arg1: $BlockPos$$Type, arg2: integer): void
public "getItemEntityTarget"(): $RenderTarget
public "getTranslucentTarget"(): $RenderTarget
public "hasRenderedAllSections"(): boolean
public "countRenderedSections"(): integer
public "getFrustum"(): $Frustum
public "setBlocksDirty"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "globalLevelEvent"(arg0: integer, arg1: $BlockPos$$Type, arg2: integer): void
public "setBlockDirty"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type, arg2: $BlockState$$Type): void
public "onChunkLoaded"(arg0: $ChunkPos$$Type): void
public "blockChanged"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type, arg4: integer): void
public "getParticlesTarget"(): $RenderTarget
public "getCloudsTarget"(): $RenderTarget
public "getWeatherTarget"(): $RenderTarget
public "doEntityOutline"(): void
public "prepareCullFrustum"(arg0: $Vec3$$Type, arg1: $Matrix4f$$Type, arg2: $Matrix4f$$Type): void
public "getFabricId"(): $ResourceLocation
public "captureFrustum"(): void
public static "getLightColor"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type): integer
public static "getLightColor"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): integer
public "initOutline"(): void
public "getTotalSections"(): double
public static "offsetFrustum"(arg0: $Frustum$$Type): $Frustum
public "isSectionCompiled"(arg0: $BlockPos$$Type): boolean
public "killFrustum"(): void
public static "renderVoxelShape"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: $VoxelShape$$Type, arg3: double, arg4: double, arg5: double, arg6: float, arg7: float, arg8: float, arg9: float, arg10: boolean): void
public "setSectionDirty"(arg0: integer, arg1: integer, arg2: integer): void
public static "renderShape"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: $VoxelShape$$Type, arg3: double, arg4: double, arg5: double, arg6: float, arg7: float, arg8: float, arg9: float): void
public "renderHitOutline"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: $Entity$$Type, arg3: double, arg4: double, arg5: double, arg6: $BlockPos$$Type, arg7: $BlockState$$Type): void
public "playJukeboxSong"(arg0: $Holder$$Type<($JukeboxSong)>, arg1: $BlockPos$$Type): void
public "renderClouds"(arg0: $PoseStack$$Type, arg1: $Matrix4f$$Type, arg2: $Matrix4f$$Type, arg3: float, arg4: double, arg5: double, arg6: double): void
public static "renderLineBox"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: float, arg9: float, arg10: float, arg11: float, arg12: float, arg13: float, arg14: float): void
public static "renderLineBox"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: $AABB$$Type, arg3: float, arg4: float, arg5: float, arg6: float): void
public static "renderLineBox"(arg0: $VertexConsumer$$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: float, arg8: float, arg9: float, arg10: float): void
public static "renderLineBox"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: float, arg9: float, arg10: float, arg11: float): void
public "flywheel$getTicks"(): integer
public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
public "getName"(): StringJS
set "level"(value: $ClientLevel$$Type)
get "ticks"(): integer
get "fabricDependencies"(): $Collection
get "entityStatistics"(): StringJS
get "sectionRenderDispatcher"(): $SectionRenderDispatcher
get "lastViewDistance"(): double
get "sectionStatistics"(): StringJS
get "itemEntityTarget"(): $RenderTarget
get "translucentTarget"(): $RenderTarget
get "frustum"(): $Frustum
get "particlesTarget"(): $RenderTarget
get "cloudsTarget"(): $RenderTarget
get "weatherTarget"(): $RenderTarget
get "fabricId"(): $ResourceLocation
get "totalSections"(): double
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelRenderer$$Type = ($LevelRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LevelRenderer$$Original = $LevelRenderer;}
declare module "net.minecraft.client.renderer.block.model.BlockModel$GuiLight" {
import {$Enum} from "java.lang.Enum"

export class $BlockModel$GuiLight extends $Enum<($BlockModel$GuiLight)> {
static readonly "SIDE": $BlockModel$GuiLight
static readonly "FRONT": $BlockModel$GuiLight

public static "values"(): ($BlockModel$GuiLight)[]
public static "valueOf"(arg0: StringJS): $BlockModel$GuiLight
public static "getByName"(arg0: StringJS): $BlockModel$GuiLight
public "lightLikeBlock"(): boolean
public "getSerializedName"(): StringJS
get "serializedName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockModel$GuiLight$$Type = (("front") | ("side"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockModel$GuiLight$$Original = $BlockModel$GuiLight;}
declare module "net.minecraft.client.renderer.GameRenderer" {
import {$RenderBuffers, $RenderBuffers$$Type} from "net.minecraft.client.renderer.RenderBuffers"
import {$LightTexture} from "net.minecraft.client.renderer.LightTexture"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$GameRendererAccessor$$Interface} from "net.createmod.ponder.mixin.client.accessor.GameRendererAccessor"
import {$PreparableReloadListener} from "net.minecraft.server.packs.resources.PreparableReloadListener"
import {$Camera, $Camera$$Type} from "net.minecraft.client.Camera"
import {$Matrix4f, $Matrix4f$$Type} from "org.joml.Matrix4f"
import {$MapRenderer} from "net.minecraft.client.gui.MapRenderer"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ResourceProvider$$Type} from "net.minecraft.server.packs.resources.ResourceProvider"
import {$ItemInHandRenderer, $ItemInHandRenderer$$Type} from "net.minecraft.client.renderer.ItemInHandRenderer"
import {$ShaderInstance} from "net.minecraft.client.renderer.ShaderInstance"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$PostChain} from "net.minecraft.client.renderer.PostChain"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$DeltaTracker$$Type} from "net.minecraft.client.DeltaTracker"
import {$OverlayTexture} from "net.minecraft.client.renderer.texture.OverlayTexture"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $GameRenderer implements $AutoCloseable$$Interface, $GameRendererAccessor$$Interface {
readonly "renderBuffers": $RenderBuffers
static readonly "ITEM_ACTIVATION_ANIMATION_LENGTH": integer
static readonly "PROJECTION_Z_NEAR": float
 "blitShader": $ShaderInstance
static readonly "MAX_BLUR_RADIUS": integer
readonly "itemInHandRenderer": $ItemInHandRenderer

constructor(arg0: $Minecraft$$Type, arg1: $ItemInHandRenderer$$Type, arg2: $ResourceManager$$Type, arg3: $RenderBuffers$$Type)

public "resetData"(): void
public static "getRendertypeTextBackgroundSeeThroughShader"(): $ShaderInstance
public static "getRendertypeItemEntityTranslucentCullShader"(): $ShaderInstance
public static "getRendertypeEntityTranslucentEmissiveShader"(): $ShaderInstance
public static "getRendertypeEntityCutoutNoCullZOffsetShader"(): $ShaderInstance
public "close"(): void
public "pick"(arg0: float): void
public "resize"(arg0: integer, arg1: integer): void
public "tick"(): void
public "render"(arg0: $DeltaTracker$$Type, arg1: boolean): void
public static "getRendertypeArmorCutoutNoCullShader"(): $ShaderInstance
public static "getRendertypeEntityTranslucentShader"(): $ShaderInstance
public static "getRendertypeGuiTextHighlightShader"(): $ShaderInstance
public static "getRendertypeEntityGlintDirectShader"(): $ShaderInstance
public static "getRendertypeGlintTranslucentShader"(): $ShaderInstance
public static "getRendertypeEntityCutoutNoCullShader"(): $ShaderInstance
public static "getRendertypeArmorEntityGlintShader"(): $ShaderInstance
public static "getRendertypeEntityTranslucentCullShader"(): $ShaderInstance
public static "getRendertypeTextIntensitySeeThroughShader"(): $ShaderInstance
public static "getRendertypeEntitySmoothCutoutShader"(): $ShaderInstance
public static "getRendertypeTranslucentMovingBlockShader"(): $ShaderInstance
public static "getRendertypeGuiGhostRecipeOverlayShader"(): $ShaderInstance
public static "getPositionColorTexLightmapShader"(): $ShaderInstance
public static "getRendertypeEntitySolidShader"(): $ShaderInstance
public static "getRendertypeBeaconBeamShader"(): $ShaderInstance
public static "getRendertypeEntityShadowShader"(): $ShaderInstance
public static "getRendertypeEntityNoOutlineShader"(): $ShaderInstance
public static "getRendertypeEntityDecalShader"(): $ShaderInstance
public static "getRendertypeEntityAlphaShader"(): $ShaderInstance
public static "getRendertypeWaterMaskShader"(): $ShaderInstance
public static "getRendertypeEnergySwirlShader"(): $ShaderInstance
public static "getPositionColorLightmapShader"(): $ShaderInstance
public static "getRendertypeEntityCutoutShader"(): $ShaderInstance
public static "getRendertypeCutoutMippedShader"(): $ShaderInstance
public static "getRendertypeTranslucentShader"(): $ShaderInstance
public static "getRendertypeTripwireShader"(): $ShaderInstance
public static "getRendertypeArmorGlintShader"(): $ShaderInstance
public static "getRendertypeGlintDirectShader"(): $ShaderInstance
public static "getRendertypeGuiOverlayShader"(): $ShaderInstance
public static "getRendertypeEndGatewayShader"(): $ShaderInstance
public static "getRendertypeEntityGlintShader"(): $ShaderInstance
public static "getRendertypeEndPortalShader"(): $ShaderInstance
public static "getRendertypeBreezeWindShader"(): $ShaderInstance
public static "getRendertypeLightningShader"(): $ShaderInstance
public static "getRendertypeTextIntensityShader"(): $ShaderInstance
public static "getRendertypeTextSeeThroughShader"(): $ShaderInstance
public static "getRendertypeCrumblingShader"(): $ShaderInstance
public static "getRendertypeTextBackgroundShader"(): $ShaderInstance
public "isPanoramicMode"(): boolean
public "preloadUiShader"(arg0: $ResourceProvider$$Type): void
public "getMainCamera"(): $Camera
public "shutdownEffect"(): void
public "currentEffect"(): $PostChain
public "loadEffect"(arg0: $ResourceLocation$$Type): void
public "getShader"(arg0: StringJS): $ShaderInstance
public "catnip$callGetFov"(arg0: $Camera$$Type, arg1: float, arg2: boolean): double
public "getMinecraft"(): $Minecraft
public "processBlurEffect"(arg0: float): void
public "renderLevel"(arg0: $DeltaTracker$$Type): void
public "setPanoramicMode"(arg0: boolean): void
public "renderZoomed"(arg0: float, arg1: float, arg2: float): void
public static "getRendertypeSolidShader"(): $ShaderInstance
public static "getRendertypeLeashShader"(): $ShaderInstance
public static "getRendertypeGlintShader"(): $ShaderInstance
public static "getRendertypeEyesShader"(): $ShaderInstance
public static "getRendertypeCutoutShader"(): $ShaderInstance
public static "getRendertypeTextShader"(): $ShaderInstance
public static "getRendertypeCloudsShader"(): $ShaderInstance
public static "getRendertypeOutlineShader"(): $ShaderInstance
public static "getRendertypeGuiShader"(): $ShaderInstance
public static "getRendertypeLinesShader"(): $ShaderInstance
public "getProjectionMatrix"(arg0: double): $Matrix4f
public static "getNightVisionScale"(arg0: $LivingEntity$$Type, arg1: float): float
public "displayItemActivation"(arg0: $ItemStack$$Type): void
public "resetProjectionMatrix"(arg0: $Matrix4f$$Type): void
public "getDarkenWorldAmount"(arg0: float): float
public static "getPositionShader"(): $ShaderInstance
public "lightTexture"(): $LightTexture
public "togglePostEffect"(): void
public "setRenderHand"(arg0: boolean): void
public "getDepthFar"(): float
public "overlayTexture"(): $OverlayTexture
public "getRenderDistance"(): float
public "getMapRenderer"(): $MapRenderer
public static "getParticleShader"(): $ShaderInstance
public "createReloadListener"(): $PreparableReloadListener
public "checkEntityPostEffect"(arg0: $Entity$$Type): void
public "setRenderBlockOutline"(arg0: boolean): void
public static "getPositionColorShader"(): $ShaderInstance
public static "getPositionTexColorShader"(): $ShaderInstance
public static "getPositionTexShader"(): $ShaderInstance
get "rendertypeTextBackgroundSeeThroughShader"(): $ShaderInstance
get "rendertypeItemEntityTranslucentCullShader"(): $ShaderInstance
get "rendertypeEntityTranslucentEmissiveShader"(): $ShaderInstance
get "rendertypeEntityCutoutNoCullZOffsetShader"(): $ShaderInstance
get "rendertypeArmorCutoutNoCullShader"(): $ShaderInstance
get "rendertypeEntityTranslucentShader"(): $ShaderInstance
get "rendertypeGuiTextHighlightShader"(): $ShaderInstance
get "rendertypeEntityGlintDirectShader"(): $ShaderInstance
get "rendertypeGlintTranslucentShader"(): $ShaderInstance
get "rendertypeEntityCutoutNoCullShader"(): $ShaderInstance
get "rendertypeArmorEntityGlintShader"(): $ShaderInstance
get "rendertypeEntityTranslucentCullShader"(): $ShaderInstance
get "rendertypeTextIntensitySeeThroughShader"(): $ShaderInstance
get "rendertypeEntitySmoothCutoutShader"(): $ShaderInstance
get "rendertypeTranslucentMovingBlockShader"(): $ShaderInstance
get "rendertypeGuiGhostRecipeOverlayShader"(): $ShaderInstance
get "positionColorTexLightmapShader"(): $ShaderInstance
get "rendertypeEntitySolidShader"(): $ShaderInstance
get "rendertypeBeaconBeamShader"(): $ShaderInstance
get "rendertypeEntityShadowShader"(): $ShaderInstance
get "rendertypeEntityNoOutlineShader"(): $ShaderInstance
get "rendertypeEntityDecalShader"(): $ShaderInstance
get "rendertypeEntityAlphaShader"(): $ShaderInstance
get "rendertypeWaterMaskShader"(): $ShaderInstance
get "rendertypeEnergySwirlShader"(): $ShaderInstance
get "positionColorLightmapShader"(): $ShaderInstance
get "rendertypeEntityCutoutShader"(): $ShaderInstance
get "rendertypeCutoutMippedShader"(): $ShaderInstance
get "rendertypeTranslucentShader"(): $ShaderInstance
get "rendertypeTripwireShader"(): $ShaderInstance
get "rendertypeArmorGlintShader"(): $ShaderInstance
get "rendertypeGlintDirectShader"(): $ShaderInstance
get "rendertypeGuiOverlayShader"(): $ShaderInstance
get "rendertypeEndGatewayShader"(): $ShaderInstance
get "rendertypeEntityGlintShader"(): $ShaderInstance
get "rendertypeEndPortalShader"(): $ShaderInstance
get "rendertypeBreezeWindShader"(): $ShaderInstance
get "rendertypeLightningShader"(): $ShaderInstance
get "rendertypeTextIntensityShader"(): $ShaderInstance
get "rendertypeTextSeeThroughShader"(): $ShaderInstance
get "rendertypeCrumblingShader"(): $ShaderInstance
get "rendertypeTextBackgroundShader"(): $ShaderInstance
get "panoramicMode"(): boolean
get "mainCamera"(): $Camera
get "minecraft"(): $Minecraft
set "panoramicMode"(value: boolean)
get "rendertypeSolidShader"(): $ShaderInstance
get "rendertypeLeashShader"(): $ShaderInstance
get "rendertypeGlintShader"(): $ShaderInstance
get "rendertypeEyesShader"(): $ShaderInstance
get "rendertypeCutoutShader"(): $ShaderInstance
get "rendertypeTextShader"(): $ShaderInstance
get "rendertypeCloudsShader"(): $ShaderInstance
get "rendertypeOutlineShader"(): $ShaderInstance
get "rendertypeGuiShader"(): $ShaderInstance
get "rendertypeLinesShader"(): $ShaderInstance
get "positionShader"(): $ShaderInstance
set "renderHand"(value: boolean)
get "depthFar"(): float
get "renderDistance"(): float
get "mapRenderer"(): $MapRenderer
get "particleShader"(): $ShaderInstance
set "renderBlockOutline"(value: boolean)
get "positionColorShader"(): $ShaderInstance
get "positionTexColorShader"(): $ShaderInstance
get "positionTexShader"(): $ShaderInstance
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameRenderer$$Type = ($GameRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GameRenderer$$Original = $GameRenderer;}
declare module "net.minecraft.client.renderer.SectionBufferBuilderPack" {
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$ByteBufferBuilder} from "com.mojang.blaze3d.vertex.ByteBufferBuilder"
import {$RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export class $SectionBufferBuilderPack implements $AutoCloseable$$Interface {
static readonly "TOTAL_BUFFERS_SIZE": integer

constructor()

public "buffer"(arg0: $RenderType$$Type): $ByteBufferBuilder
public "close"(): void
public "clearAll"(): void
public "discardAll"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SectionBufferBuilderPack$$Type = ($SectionBufferBuilderPack);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SectionBufferBuilderPack$$Original = $SectionBufferBuilderPack;}
declare module "net.minecraft.client.renderer.entity.EntityRendererProvider$Context" {
import {$BlockRenderDispatcher, $BlockRenderDispatcher$$Type} from "net.minecraft.client.renderer.block.BlockRenderDispatcher"
import {$EntityRenderDispatcher, $EntityRenderDispatcher$$Type} from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"
import {$ItemInHandRenderer, $ItemInHandRenderer$$Type} from "net.minecraft.client.renderer.ItemInHandRenderer"
import {$Font, $Font$$Type} from "net.minecraft.client.gui.Font"
import {$ModelLayerLocation$$Type} from "net.minecraft.client.model.geom.ModelLayerLocation"
import {$ModelPart} from "net.minecraft.client.model.geom.ModelPart"
import {$ModelManager} from "net.minecraft.client.resources.model.ModelManager"
import {$EntityModelSet, $EntityModelSet$$Type} from "net.minecraft.client.model.geom.EntityModelSet"
import {$ItemRenderer, $ItemRenderer$$Type} from "net.minecraft.client.renderer.entity.ItemRenderer"
import {$ResourceManager, $ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $EntityRendererProvider$Context {
constructor(arg0: $EntityRenderDispatcher$$Type, arg1: $ItemRenderer$$Type, arg2: $BlockRenderDispatcher$$Type, arg3: $ItemInHandRenderer$$Type, arg4: $ResourceManager$$Type, arg5: $EntityModelSet$$Type, arg6: $Font$$Type)

public "getFont"(): $Font
public "getModelSet"(): $EntityModelSet
public "getResourceManager"(): $ResourceManager
public "getItemRenderer"(): $ItemRenderer
public "getModelManager"(): $ModelManager
public "getBlockRenderDispatcher"(): $BlockRenderDispatcher
public "bakeLayer"(arg0: $ModelLayerLocation$$Type): $ModelPart
public "getEntityRenderDispatcher"(): $EntityRenderDispatcher
public "getItemInHandRenderer"(): $ItemInHandRenderer
get "font"(): $Font
get "modelSet"(): $EntityModelSet
get "resourceManager"(): $ResourceManager
get "itemRenderer"(): $ItemRenderer
get "modelManager"(): $ModelManager
get "blockRenderDispatcher"(): $BlockRenderDispatcher
get "entityRenderDispatcher"(): $EntityRenderDispatcher
get "itemInHandRenderer"(): $ItemInHandRenderer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRendererProvider$Context$$Type = ($EntityRendererProvider$Context);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityRendererProvider$Context$$Original = $EntityRendererProvider$Context;}
declare module "net.minecraft.client.renderer.RenderStateShard" {
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"

export class $RenderStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
readonly "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: StringJS, arg1: $Runnable$$Type, arg2: $Runnable$$Type)

public "toString"(): StringJS
public static "setupGlintTexturing"(arg0: float): void
public "setupRenderState"(): void
public "clearRenderState"(): void
set "upGlintTexturing"(value: float)
get "upRenderState"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$$Type = ($RenderStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$$Original = $RenderStateShard;}
declare module "net.minecraft.client.renderer.block.ModelBlockRenderer" {
import {$BitSet$$Type} from "java.util.BitSet"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$BlockColors$$Type} from "net.minecraft.client.color.block.BlockColors"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$PoseStack$Pose$$Type} from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ModelBlockRenderer {
constructor(arg0: $BlockColors$$Type)

public static "clearCache"(): void
public "calculateShape"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: (integer)[], arg4: $Direction$$Type, arg5: (float)[], arg6: $BitSet$$Type): void
public "tesselateBlock"(arg0: $BlockAndTintGetter$$Type, arg1: $BakedModel$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $PoseStack$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: $RandomSource$$Type, arg8: long, arg9: integer, arg10: $ModelData$$Type, arg11: $RenderType$$Type): void
/**
 * 
 * @deprecated
 */
public "tesselateBlock"(arg0: $BlockAndTintGetter$$Type, arg1: $BakedModel$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $PoseStack$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: $RandomSource$$Type, arg8: long, arg9: integer): void
/**
 * 
 * @deprecated
 */
public "renderModel"(arg0: $PoseStack$Pose$$Type, arg1: $VertexConsumer$$Type, arg2: $BlockState$$Type, arg3: $BakedModel$$Type, arg4: float, arg5: float, arg6: float, arg7: integer, arg8: integer): void
public "renderModel"(arg0: $PoseStack$Pose$$Type, arg1: $VertexConsumer$$Type, arg2: $BlockState$$Type, arg3: $BakedModel$$Type, arg4: float, arg5: float, arg6: float, arg7: integer, arg8: integer, arg9: $ModelData$$Type, arg10: $RenderType$$Type): void
public static "enableCaching"(): void
/**
 * 
 * @deprecated
 */
public "tesselateWithAO"(arg0: $BlockAndTintGetter$$Type, arg1: $BakedModel$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $PoseStack$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: $RandomSource$$Type, arg8: long, arg9: integer): void
public "tesselateWithAO"(arg0: $BlockAndTintGetter$$Type, arg1: $BakedModel$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $PoseStack$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: $RandomSource$$Type, arg8: long, arg9: integer, arg10: $ModelData$$Type, arg11: $RenderType$$Type): void
/**
 * 
 * @deprecated
 */
public "tesselateWithoutAO"(arg0: $BlockAndTintGetter$$Type, arg1: $BakedModel$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $PoseStack$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: $RandomSource$$Type, arg8: long, arg9: integer): void
public "tesselateWithoutAO"(arg0: $BlockAndTintGetter$$Type, arg1: $BakedModel$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $PoseStack$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: $RandomSource$$Type, arg8: long, arg9: integer, arg10: $ModelData$$Type, arg11: $RenderType$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBlockRenderer$$Type = ($ModelBlockRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelBlockRenderer$$Original = $ModelBlockRenderer;}
declare module "net.minecraft.client.renderer.chunk.SectionRenderDispatcher$RenderSection$CompileTask" {
import {$Comparable$$Interface} from "java.lang.Comparable"

export class $SectionRenderDispatcher$RenderSection$CompileTask implements $Comparable$$Interface<($SectionRenderDispatcher$RenderSection$CompileTask)> {
public "compareTo"(arg0: $SectionRenderDispatcher$RenderSection$CompileTask$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SectionRenderDispatcher$RenderSection$CompileTask$$Type = ($SectionRenderDispatcher$RenderSection$CompileTask);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SectionRenderDispatcher$RenderSection$CompileTask$$Original = $SectionRenderDispatcher$RenderSection$CompileTask;}
declare module "net.minecraft.client.renderer.texture.SpriteLoader$Preparations" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$Record} from "java.lang.Record"

export class $SpriteLoader$Preparations extends $Record {
constructor(width: integer, height: integer, mipLevel: integer, missing: $TextureAtlasSprite$$Type, regions: $Map$$Type<($ResourceLocation$$Type), ($TextureAtlasSprite$$Type)>, readyForUpload: $CompletableFuture$$Type<(void)>)

public "waitForUpload"(): $CompletableFuture<($SpriteLoader$Preparations)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "width"(): integer
public "regions"(): $Map<($ResourceLocation), ($TextureAtlasSprite)>
public "missing"(): $TextureAtlasSprite
public "height"(): integer
public "mipLevel"(): integer
public "readyForUpload"(): $CompletableFuture<(void)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteLoader$Preparations$$Type = ({"width"?: integer, "missing"?: $TextureAtlasSprite$$Type, "height"?: integer, "regions"?: $Map$$Type<($ResourceLocation$$Type), ($TextureAtlasSprite$$Type)>, "mipLevel"?: integer, "readyForUpload"?: $CompletableFuture$$Type<(void)>}) | ([width?: integer, missing?: $TextureAtlasSprite$$Type, height?: integer, regions?: $Map$$Type<($ResourceLocation$$Type), ($TextureAtlasSprite$$Type)>, mipLevel?: integer, readyForUpload?: $CompletableFuture$$Type<(void)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteLoader$Preparations$$Original = $SpriteLoader$Preparations;}
declare module "net.minecraft.client.renderer.EffectInstance" {
import {$Program} from "com.mojang.blaze3d.shaders.Program"
import {$ResourceProvider$$Type} from "net.minecraft.server.packs.resources.ResourceProvider"
import {$BlendMode} from "com.mojang.blaze3d.shaders.BlendMode"
import {$AbstractUniform} from "com.mojang.blaze3d.shaders.AbstractUniform"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$Uniform} from "com.mojang.blaze3d.shaders.Uniform"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$EffectProgram} from "com.mojang.blaze3d.shaders.EffectProgram"
import {$IntSupplier$$Type} from "java.util.function.IntSupplier"
import {$Effect$$Interface} from "com.mojang.blaze3d.shaders.Effect"
import {$Program$Type$$Type} from "com.mojang.blaze3d.shaders.Program$Type"

export class $EffectInstance implements $Effect$$Interface, $AutoCloseable$$Interface {
constructor(arg0: $ResourceProvider$$Type, arg1: StringJS)

public static "getOrCreate"(arg0: $ResourceProvider$$Type, arg1: $Program$Type$$Type, arg2: StringJS): $EffectProgram
public "getName"(): StringJS
public "clear"(): void
public "apply"(): void
public "getId"(): integer
public "close"(): void
public "getUniform"(arg0: StringJS): $Uniform
public "markDirty"(): void
public "setSampler"(arg0: StringJS, arg1: $IntSupplier$$Type): void
public "getFragmentProgram"(): $Program
public "attachToProgram"(): void
public "getVertexProgram"(): $Program
public "safeGetUniform"(arg0: StringJS): $AbstractUniform
public static "parseBlendNode"(arg0: $JsonObject$$Type): $BlendMode
get "name"(): StringJS
get "id"(): integer
get "fragmentProgram"(): $Program
get "vertexProgram"(): $Program
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EffectInstance$$Type = ($EffectInstance);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EffectInstance$$Original = $EffectInstance;}
declare module "net.minecraft.client.renderer.debug.BreezeDebugRenderer" {
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$BreezeDebugPayload$BreezeInfo$$Type} from "net.minecraft.network.protocol.common.custom.BreezeDebugPayload$BreezeInfo"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"

export class $BreezeDebugRenderer {
constructor(arg0: $Minecraft$$Type)

public "clear"(): void
public "add"(arg0: $BreezeDebugPayload$BreezeInfo$$Type): void
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: double, arg3: double, arg4: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BreezeDebugRenderer$$Type = ($BreezeDebugRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BreezeDebugRenderer$$Original = $BreezeDebugRenderer;}
declare module "net.minecraft.client.renderer.chunk.SectionRenderDispatcher$RenderSection" {
import {$VertexBuffer} from "com.mojang.blaze3d.vertex.VertexBuffer"
import {$SectionRenderDispatcher$RenderSection$CompileTask} from "net.minecraft.client.renderer.chunk.SectionRenderDispatcher$RenderSection$CompileTask"
import {$RenderRegionCache$$Type} from "net.minecraft.client.renderer.chunk.RenderRegionCache"
import {$AtomicReference} from "java.util.concurrent.atomic.AtomicReference"
import {$SectionRenderDispatcher$CompiledSection} from "net.minecraft.client.renderer.chunk.SectionRenderDispatcher$CompiledSection"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$SectionRenderDispatcher$$Type} from "net.minecraft.client.renderer.chunk.SectionRenderDispatcher"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$AABB} from "net.minecraft.world.phys.AABB"

export class $SectionRenderDispatcher$RenderSection {
readonly "compiled": $AtomicReference<($SectionRenderDispatcher$CompiledSection)>
static readonly "SIZE": integer
readonly "index": integer

constructor(arg0: $SectionRenderDispatcher$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer)

public "isDirty"(): boolean
public "getBuffer"(arg0: $RenderType$$Type): $VertexBuffer
public "releaseBuffers"(): void
public "createCompileTask"(arg0: $RenderRegionCache$$Type): $SectionRenderDispatcher$RenderSection$CompileTask
public "compileSync"(arg0: $RenderRegionCache$$Type): void
public "getOrigin"(): $BlockPos
public "setOrigin"(arg0: integer, arg1: integer, arg2: integer): void
public "setDirty"(arg0: boolean): void
public "getBoundingBox"(): $AABB
public "rebuildSectionAsync"(arg0: $SectionRenderDispatcher$$Type, arg1: $RenderRegionCache$$Type): void
public "getCompiled"(): $SectionRenderDispatcher$CompiledSection
public "isAxisAlignedWith"(arg0: integer, arg1: integer, arg2: integer): boolean
public "resortTransparency"(arg0: $RenderType$$Type, arg1: $SectionRenderDispatcher$$Type): boolean
public "isDirtyFromPlayer"(): boolean
public "setNotDirty"(): void
public "hasAllNeighbors"(): boolean
public "getRelativeOrigin"(arg0: $Direction$$Type): $BlockPos
get "dirty"(): boolean
get "origin"(): $BlockPos
set "dirty"(value: boolean)
get "boundingBox"(): $AABB
get "dirtyFromPlayer"(): boolean
get "notDirty"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SectionRenderDispatcher$RenderSection$$Type = ($SectionRenderDispatcher$RenderSection);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SectionRenderDispatcher$RenderSection$$Original = $SectionRenderDispatcher$RenderSection;}
declare module "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard" {
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard} from "net.minecraft.client.renderer.RenderStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"

export class $RenderStateShard$ColorLogicStateShard extends $RenderStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
readonly "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: StringJS, arg1: $Runnable$$Type, arg2: $Runnable$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$ColorLogicStateShard$$Type = ($RenderStateShard$ColorLogicStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$ColorLogicStateShard$$Original = $RenderStateShard$ColorLogicStateShard;}
declare module "net.minecraft.client.renderer.GpuWarnlistManager$Preparations" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $GpuWarnlistManager$Preparations {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GpuWarnlistManager$Preparations$$Type = ($GpuWarnlistManager$Preparations);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GpuWarnlistManager$Preparations$$Original = $GpuWarnlistManager$Preparations;}
declare module "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard" {
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$Runnable} from "java.lang.Runnable"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard} from "net.minecraft.client.renderer.RenderStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"

export class $RenderStateShard$WriteMaskStateShard extends $RenderStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
readonly "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: boolean, arg1: boolean)

public "toString"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$WriteMaskStateShard$$Type = ($RenderStateShard$WriteMaskStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$WriteMaskStateShard$$Original = $RenderStateShard$WriteMaskStateShard;}
declare module "net.minecraft.client.renderer.block.model.ItemOverrides" {
import {$TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Material$$Type} from "net.minecraft.client.resources.model.Material"
import {$BlockModel$$Type} from "net.minecraft.client.renderer.block.model.BlockModel"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$List$$Type} from "java.util.List"
import {$ImmutableList} from "com.google.common.collect.ImmutableList"
import {$ItemOverrides$BakedOverride} from "net.minecraft.client.renderer.block.model.ItemOverrides$BakedOverride"
import {$UnbakedModel$$Type} from "net.minecraft.client.resources.model.UnbakedModel"
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$Function$$Type} from "java.util.function.Function"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ModelBaker$$Type} from "net.minecraft.client.resources.model.ModelBaker"
import {$ItemOverride$$Type} from "net.minecraft.client.renderer.block.model.ItemOverride"

export class $ItemOverrides {
static readonly "NO_OVERRIDE": float
static readonly "EMPTY": $ItemOverrides

constructor(arg0: $ModelBaker$$Type, arg1: $UnbakedModel$$Type, arg2: $List$$Type<($ItemOverride$$Type)>, arg3: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>)
/**
 * 
 * @deprecated
 */
constructor(arg0: $ModelBaker$$Type, arg1: $BlockModel$$Type, arg2: $List$$Type<($ItemOverride$$Type)>)

public "resolve"(arg0: $BakedModel$$Type, arg1: $ItemStack$$Type, arg2: $ClientLevel$$Type, arg3: $LivingEntity$$Type, arg4: integer): $BakedModel
public "getOverrides"(): $ImmutableList<($ItemOverrides$BakedOverride)>
get "overrides"(): $ImmutableList<($ItemOverrides$BakedOverride)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemOverrides$$Type = ($ItemOverrides);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemOverrides$$Original = $ItemOverrides;}
declare module "net.minecraft.client.renderer.block.model.BlockModel" {
import {$ModelInstance, $ModelInstance$$Type} from "com.supermartijn642.fusion.api.model.ModelInstance"
import {$ItemOverrides} from "net.minecraft.client.renderer.block.model.ItemOverrides"
import {$BakedModel} from "net.minecraft.client.resources.model.BakedModel"
import {$List, $List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$ItemTransforms, $ItemTransforms$$Type} from "net.minecraft.client.renderer.block.model.ItemTransforms"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$Function$$Type} from "java.util.function.Function"
import {$BlockModel$GuiLight, $BlockModel$GuiLight$$Type} from "net.minecraft.client.renderer.block.model.BlockModel$GuiLight"
import {$Gson} from "com.google.gson.Gson"
import {$ModelBaker$$Type} from "net.minecraft.client.resources.model.ModelBaker"
import {$Logger} from "org.slf4j.Logger"
import {$BlockModelExtension$$Interface} from "com.supermartijn642.fusion.extensions.BlockModelExtension"
import {$TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$Collection} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Material, $Material$$Type} from "net.minecraft.client.resources.model.Material"
import {$Reader$$Type} from "java.io.Reader"
import {$BlockElementFace$$Type} from "net.minecraft.client.renderer.block.model.BlockElementFace"
import {$BlockElement, $BlockElement$$Type} from "net.minecraft.client.renderer.block.model.BlockElement"
import {$ModelState$$Type} from "net.minecraft.client.resources.model.ModelState"
import {$UnbakedModel$$Type, $UnbakedModel$$Interface} from "net.minecraft.client.resources.model.UnbakedModel"
import {$BakedQuad} from "net.minecraft.client.renderer.block.model.BakedQuad"
import {$BlockGeometryBakingContext} from "net.neoforged.neoforge.client.model.geometry.BlockGeometryBakingContext"
import {$ItemOverride, $ItemOverride$$Type} from "net.minecraft.client.renderer.block.model.ItemOverride"

export class $BlockModel implements $UnbakedModel$$Interface, $BlockModelExtension$$Interface {
 "parent": $BlockModel
 "parentLocation": $ResourceLocation
readonly "textureMap": $Map<(StringJS), ($Either<($Material), (StringJS)>)>
readonly "guiLight": $BlockModel$GuiLight
readonly "transforms": $ItemTransforms
static readonly "GSON": $Gson
readonly "customData": $BlockGeometryBakingContext
readonly "overrides": $List<($ItemOverride)>
static readonly "PARTICLE_TEXTURE_REFERENCE": StringJS
readonly "elements": $List<($BlockElement)>
 "name": StringJS
static readonly "LOGGER": $Logger

constructor(arg0: $ResourceLocation$$Type, arg1: $List$$Type<($BlockElement$$Type)>, arg2: $Map$$Type<(StringJS), ($Either$$Type<($Material$$Type), (StringJS)>)>, arg3: boolean, arg4: $BlockModel$GuiLight$$Type, arg5: $ItemTransforms$$Type, arg6: $List$$Type<($ItemOverride$$Type)>)

public "bake"(arg0: $ModelBaker$$Type, arg1: $BlockModel$$Type, arg2: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>, arg3: $ModelState$$Type, arg4: boolean): $BakedModel
public "bake"(arg0: $ModelBaker$$Type, arg1: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>, arg2: $ModelState$$Type): $BakedModel
public "toString"(): StringJS
public "isResolved"(): boolean
public static "fromStream"(arg0: $Reader$$Type): $BlockModel
public static "fromString"(arg0: StringJS): $BlockModel
/**
 * 
 * @deprecated
 */
public "getElements"(): $List<($BlockElement)>
public "resolveParents"(arg0: $Function$$Type<($ResourceLocation), ($UnbakedModel$$Type)>): void
public "hasAmbientOcclusion"(): boolean
public "getOverrides"(): $List<($ItemOverride)>
public "getOverrides"(arg0: $ModelBaker$$Type, arg1: $BlockModel$$Type, arg2: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>): $ItemOverrides
public "getDependencies"(): $Collection<($ResourceLocation)>
public "getTransforms"(): $ItemTransforms
public "getFusionModel"(): $ModelInstance
public "setFusionModel"(fusionModel: $ModelInstance$$Type): void
public static "bakeFace"(arg0: $BlockElement$$Type, arg1: $BlockElementFace$$Type, arg2: $TextureAtlasSprite$$Type, arg3: $Direction$$Type, arg4: $ModelState$$Type): $BakedQuad
public "getMaterial"(arg0: StringJS): $Material
public "getParentLocation"(): $ResourceLocation
public "getGuiLight"(): $BlockModel$GuiLight
public "bakeVanilla"(arg0: $ModelBaker$$Type, arg1: $BlockModel$$Type, arg2: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>, arg3: $ModelState$$Type, arg4: boolean): $BakedModel
public "getRootModel"(): $BlockModel
public "findTextureEntry"(arg0: StringJS): $Either<($Material), (StringJS)>
public "hasTexture"(arg0: StringJS): boolean
get "resolved"(): boolean
get "dependencies"(): $Collection<($ResourceLocation)>
get "fusionModel"(): $ModelInstance
set "fusionModel"(value: $ModelInstance$$Type)
get "rootModel"(): $BlockModel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockModel$$Type = ($BlockModel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockModel$$Original = $BlockModel;}
declare module "net.minecraft.client.renderer.debug.VillageSectionsDebugRenderer" {
import {$DebugRenderer$SimpleDebugRenderer$$Interface} from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$SectionPos$$Type} from "net.minecraft.core.SectionPos"

export class $VillageSectionsDebugRenderer implements $DebugRenderer$SimpleDebugRenderer$$Interface {
public "clear"(): void
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: double, arg3: double, arg4: double): void
public "setVillageSection"(arg0: $SectionPos$$Type): void
public "setNotVillageSection"(arg0: $SectionPos$$Type): void
set "villageSection"(value: $SectionPos$$Type)
set "notVillageSection"(value: $SectionPos$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillageSectionsDebugRenderer$$Type = ($VillageSectionsDebugRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VillageSectionsDebugRenderer$$Original = $VillageSectionsDebugRenderer;}
declare module "net.minecraft.client.renderer.chunk.RenderChunkRegion" {
import {$LevelLightEngine} from "net.minecraft.world.level.lighting.LevelLightEngine"
import {$BlockHitResult} from "net.minecraft.world.phys.BlockHitResult"
import {$LevelHeightAccessor} from "net.minecraft.world.level.LevelHeightAccessor"
import {$TerrainRenderContext, $TerrainRenderContext$$Type} from "net.fabricmc.fabric.impl.client.indigo.renderer.render.TerrainRenderContext"
import {$Optional} from "java.util.Optional"
import {$Long2ObjectMap$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectMap"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$ColorResolver$$Type} from "net.minecraft.world.level.ColorResolver"
import {$Holder} from "net.minecraft.core.Holder"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$BlockAndTintGetter$$Interface} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function$$Type} from "java.util.function.Function"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$Stream} from "java.util.stream.Stream"
import {$ClipBlockStateContext$$Type} from "net.minecraft.world.level.ClipBlockStateContext"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$RenderDataMapConsumer$$Interface} from "net.fabricmc.fabric.impl.blockview.client.RenderDataMapConsumer"
import {$LightLayer$$Type} from "net.minecraft.world.level.LightLayer"
import {$AuxiliaryLightManager} from "net.neoforged.neoforge.common.world.AuxiliaryLightManager"
import {$RenderAttachedBlockView$$Interface} from "net.fabricmc.fabric.api.rendering.data.v1.RenderAttachedBlockView"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AccessChunkRendererRegion$$Interface} from "net.fabricmc.fabric.impl.client.indigo.renderer.accessor.AccessChunkRendererRegion"
import {$ClipContext$$Type} from "net.minecraft.world.level.ClipContext"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"
import {$AABB$$Type} from "net.minecraft.world.phys.AABB"

export class $RenderChunkRegion implements $BlockAndTintGetter$$Interface, $RenderDataMapConsumer$$Interface, $RenderAttachedBlockView$$Interface, $AccessChunkRendererRegion$$Interface {
static readonly "RADIUS": integer
static readonly "SIZE": integer

public static "index"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): integer
public "fabric_setRenderer"(arg0: $TerrainRenderContext$$Type): void
public "fabric_getRenderer"(): $TerrainRenderContext
public "getMinBuildHeight"(): integer
public "getBiomeFabric"(arg0: $BlockPos$$Type): $Holder
public "getLightEngine"(): $LevelLightEngine
public "getBlockState"(arg0: $BlockPos$$Type): $BlockState
public "getBlockEntity"(arg0: $BlockPos$$Type): $BlockEntity
public "getHeight"(): integer
public "getShade"(arg0: $Direction$$Type, arg1: boolean): float
public "getShade"(arg0: float, arg1: float, arg2: float, arg3: boolean): float
public "hasBiomes"(): boolean
public "getFluidState"(arg0: $BlockPos$$Type): $FluidState
public "getBlockTint"(arg0: $BlockPos$$Type, arg1: $ColorResolver$$Type): integer
public "getBlockEntityRenderData"(arg0: $BlockPos$$Type): any
public "getModelData"(arg0: $BlockPos$$Type): $ModelData
public "getAuxLightManager"(arg0: $ChunkPos$$Type): $AuxiliaryLightManager
public "fabric_acceptRenderDataMap"(arg0: $Long2ObjectMap$$Type): void
public "getRawBrightness"(arg0: $BlockPos$$Type, arg1: integer): integer
public "canSeeSky"(arg0: $BlockPos$$Type): boolean
public "getBrightness"(arg0: $LightLayer$$Type, arg1: $BlockPos$$Type): integer
/**
 * 
 * @deprecated
 */
public "getBlockEntityRenderAttachment"(arg0: $BlockPos$$Type): any
public "clip"(arg0: $ClipContext$$Type): $BlockHitResult
public "clipWithInteractionOverride"(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: $BlockPos$$Type, arg3: $VoxelShape$$Type, arg4: $BlockState$$Type): $BlockHitResult
public "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$$Type, arg1: $BlockEntityType$$Type<(T)>): $Optional<(T)>
public "getBlockStates"(arg0: $AABB$$Type): $Stream<($BlockState)>
public "getBlockFloorHeight"(arg0: $VoxelShape$$Type, arg1: $Supplier$$Type<($VoxelShape$$Type)>): double
public "getBlockFloorHeight"(arg0: $BlockPos$$Type): double
public "getMaxLightLevel"(): integer
public "isBlockInLine"(arg0: $ClipBlockStateContext$$Type): $BlockHitResult
public "getLightEmission"(arg0: $BlockPos$$Type): integer
public static "traverseBlocks"<T, C>(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: C, arg3: $BiFunction$$Type<(C), ($BlockPos), (T)>, arg4: $Function$$Type<(C), (T)>): T
public static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
public "getSectionIndexFromSectionY"(arg0: integer): integer
public "getSectionYFromSectionIndex"(arg0: integer): integer
public "getMaxBuildHeight"(): integer
public "isOutsideBuildHeight"(arg0: integer): boolean
public "isOutsideBuildHeight"(arg0: $BlockPos$$Type): boolean
public "getMaxSection"(): integer
public "getSectionsCount"(): integer
public "getSectionIndex"(arg0: integer): integer
public "getMinSection"(): integer
public "getAuxLightManager"(arg0: $BlockPos$$Type): $AuxiliaryLightManager
get "minBuildHeight"(): integer
get "lightEngine"(): $LevelLightEngine
get "height"(): integer
get "maxLightLevel"(): integer
get "maxBuildHeight"(): integer
get "maxSection"(): integer
get "sectionsCount"(): integer
get "minSection"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderChunkRegion$$Type = ($RenderChunkRegion);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderChunkRegion$$Original = $RenderChunkRegion;}
declare module "net.minecraft.client.renderer.debug.LightSectionDebugRenderer" {
import {$DebugRenderer$SimpleDebugRenderer$$Interface} from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import {$LightLayer$$Type} from "net.minecraft.world.level.LightLayer"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"

export class $LightSectionDebugRenderer implements $DebugRenderer$SimpleDebugRenderer$$Interface {
constructor(arg0: $Minecraft$$Type, arg1: $LightLayer$$Type)

public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: double, arg3: double, arg4: double): void
public "clear"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightSectionDebugRenderer$$Type = ($LightSectionDebugRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LightSectionDebugRenderer$$Original = $LightSectionDebugRenderer;}
declare module "net.minecraft.client.renderer.PostChain" {
import {$TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$ResourceProvider$$Type} from "net.minecraft.server.packs.resources.ResourceProvider"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$PostPass} from "net.minecraft.client.renderer.PostPass"
import {$RenderTarget, $RenderTarget$$Type} from "com.mojang.blaze3d.pipeline.RenderTarget"

export class $PostChain implements $AutoCloseable$$Interface {
constructor(arg0: $TextureManager$$Type, arg1: $ResourceProvider$$Type, arg2: $RenderTarget$$Type, arg3: $ResourceLocation$$Type)

public "getName"(): StringJS
public "close"(): void
public "resize"(arg0: integer, arg1: integer): void
public "process"(arg0: float): void
public "addPass"(arg0: StringJS, arg1: $RenderTarget$$Type, arg2: $RenderTarget$$Type, arg3: boolean): $PostPass
public "setUniform"(arg0: StringJS, arg1: float): void
public "getTempTarget"(arg0: StringJS): $RenderTarget
public "addTempTarget"(arg0: StringJS, arg1: integer, arg2: integer): void
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PostChain$$Type = ($PostChain);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PostChain$$Original = $PostChain;}
declare module "net.minecraft.client.renderer.block.model.BakedQuad" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BakedQuadAccess$$Interface} from "malte0811.ferritecore.mixin.accessors.BakedQuadAccess"

export class $BakedQuad implements $BakedQuadAccess$$Interface {
 "tintIndex": integer
 "direction": $Direction

constructor(arg0: (integer)[], arg1: integer, arg2: $Direction$$Type, arg3: $TextureAtlasSprite$$Type, arg4: boolean)
constructor(arg0: (integer)[], arg1: integer, arg2: $Direction$$Type, arg3: $TextureAtlasSprite$$Type, arg4: boolean, arg5: boolean)

public "getSprite"(): $TextureAtlasSprite
public "isTinted"(): boolean
public "hasAmbientOcclusion"(): boolean
public "getVertices"(): (integer)[]
public "getDirection"(): $Direction
public "isShade"(): boolean
public "getTintIndex"(): integer
public "setVertices"(arg0: (integer)[]): void
get "sprite"(): $TextureAtlasSprite
get "tinted"(): boolean
get "vertices"(): (integer)[]
get "shade"(): boolean
set "vertices"(value: (integer)[])
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakedQuad$$Type = ($BakedQuad);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BakedQuad$$Original = $BakedQuad;}
declare module "net.minecraft.client.renderer.debug.BrainDebugRenderer" {
import {$DebugRenderer$SimpleDebugRenderer$$Interface} from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import {$BrainDebugPayload$BrainDump$$Type} from "net.minecraft.network.protocol.common.custom.BrainDebugPayload$BrainDump"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BrainDebugRenderer$PoiInfo$$Type} from "net.minecraft.client.renderer.debug.BrainDebugRenderer$PoiInfo"

export class $BrainDebugRenderer implements $DebugRenderer$SimpleDebugRenderer$$Interface {
constructor(arg0: $Minecraft$$Type)

public "addPoi"(arg0: $BrainDebugRenderer$PoiInfo$$Type): void
public "removePoi"(arg0: $BlockPos$$Type): void
public "clear"(): void
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: double, arg3: double, arg4: double): void
public "setFreeTicketCount"(arg0: $BlockPos$$Type, arg1: integer): void
public "addOrUpdateBrainDump"(arg0: $BrainDebugPayload$BrainDump$$Type): void
public "removeBrainDump"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrainDebugRenderer$$Type = ($BrainDebugRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BrainDebugRenderer$$Original = $BrainDebugRenderer;}
declare module "net.minecraft.client.renderer.blockentity.BlockEntityRendererProvider" {
import {$BlockEntityRenderer, $BlockEntityRenderer$$Type} from "net.minecraft.client.renderer.blockentity.BlockEntityRenderer"
import {$BlockEntityRendererProvider$Context, $BlockEntityRendererProvider$Context$$Type} from "net.minecraft.client.renderer.blockentity.BlockEntityRendererProvider$Context"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $BlockEntityRendererProvider$$Interface<T extends $BlockEntity> {

(arg0: $BlockEntityRendererProvider$Context): $BlockEntityRenderer$$Type<(T)>
}

export class $BlockEntityRendererProvider<T extends $BlockEntity> implements $BlockEntityRendererProvider$$Interface {
 "create"(arg0: $BlockEntityRendererProvider$Context$$Type): $BlockEntityRenderer<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityRendererProvider$$Type<T> = ((arg0: $BlockEntityRendererProvider$Context) => $BlockEntityRenderer$$Type<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEntityRendererProvider$$Original<T> = $BlockEntityRendererProvider<(T)>;}
declare module "net.minecraft.client.renderer.chunk.SectionRenderDispatcher" {
import {$VertexBuffer$$Type} from "com.mojang.blaze3d.vertex.VertexBuffer"
import {$SectionRenderDispatcher$RenderSection$CompileTask$$Type} from "net.minecraft.client.renderer.chunk.SectionRenderDispatcher$RenderSection$CompileTask"
import {$RenderBuffers$$Type} from "net.minecraft.client.renderer.RenderBuffers"
import {$ByteBufferBuilder$Result$$Type} from "com.mojang.blaze3d.vertex.ByteBufferBuilder$Result"
import {$LevelRenderer$$Type} from "net.minecraft.client.renderer.LevelRenderer"
import {$SectionRenderDispatcher$RenderSection$$Type} from "net.minecraft.client.renderer.chunk.SectionRenderDispatcher$RenderSection"
import {$BlockEntityRenderDispatcher$$Type} from "net.minecraft.client.renderer.blockentity.BlockEntityRenderDispatcher"
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$RenderRegionCache$$Type} from "net.minecraft.client.renderer.chunk.RenderRegionCache"
import {$MeshData$$Type} from "com.mojang.blaze3d.vertex.MeshData"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$BlockRenderDispatcher$$Type} from "net.minecraft.client.renderer.block.BlockRenderDispatcher"
import {$Executor$$Type} from "java.util.concurrent.Executor"

export class $SectionRenderDispatcher {
constructor(arg0: $ClientLevel$$Type, arg1: $LevelRenderer$$Type, arg2: $Executor$$Type, arg3: $RenderBuffers$$Type, arg4: $BlockRenderDispatcher$$Type, arg5: $BlockEntityRenderDispatcher$$Type)

public "schedule"(arg0: $SectionRenderDispatcher$RenderSection$CompileTask$$Type): void
public "setLevel"(arg0: $ClientLevel$$Type): void
public "dispose"(): void
public "uploadSectionLayer"(arg0: $MeshData$$Type, arg1: $VertexBuffer$$Type): $CompletableFuture<(void)>
public "getToUpload"(): integer
public "getToBatchCount"(): integer
public "getCameraPosition"(): $Vec3
public "setCamera"(arg0: $Vec3$$Type): void
public "getStats"(): StringJS
public "uploadAllPendingUploads"(): void
public "blockUntilClear"(): void
public "isQueueEmpty"(): boolean
public "rebuildSectionSync"(arg0: $SectionRenderDispatcher$RenderSection$$Type, arg1: $RenderRegionCache$$Type): void
public "getFreeBufferCount"(): integer
public "uploadSectionIndexBuffer"(arg0: $ByteBufferBuilder$Result$$Type, arg1: $VertexBuffer$$Type): $CompletableFuture<(void)>
set "level"(value: $ClientLevel$$Type)
get "toUpload"(): integer
get "toBatchCount"(): integer
get "cameraPosition"(): $Vec3
set "camera"(value: $Vec3$$Type)
get "stats"(): StringJS
get "queueEmpty"(): boolean
get "freeBufferCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SectionRenderDispatcher$$Type = ($SectionRenderDispatcher);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SectionRenderDispatcher$$Original = $SectionRenderDispatcher;}
declare module "net.minecraft.client.renderer.PostPass" {
import {$ResourceProvider$$Type} from "net.minecraft.server.packs.resources.ResourceProvider"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$EffectInstance} from "net.minecraft.client.renderer.EffectInstance"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"
import {$RenderTarget, $RenderTarget$$Type} from "com.mojang.blaze3d.pipeline.RenderTarget"
import {$IntSupplier$$Type} from "java.util.function.IntSupplier"

export class $PostPass implements $AutoCloseable$$Interface {
readonly "outTarget": $RenderTarget
readonly "inTarget": $RenderTarget

constructor(arg0: $ResourceProvider$$Type, arg1: StringJS, arg2: $RenderTarget$$Type, arg3: $RenderTarget$$Type, arg4: boolean)

public "getEffect"(): $EffectInstance
public "getName"(): StringJS
public "close"(): void
public "process"(arg0: float): void
public "addAuxAsset"(arg0: StringJS, arg1: $IntSupplier$$Type, arg2: integer, arg3: integer): void
public "getFilterMode"(): integer
public "setOrthoMatrix"(arg0: $Matrix4f$$Type): void
get "effect"(): $EffectInstance
get "name"(): StringJS
get "filterMode"(): integer
set "orthoMatrix"(value: $Matrix4f$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PostPass$$Type = ($PostPass);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PostPass$$Original = $PostPass;}
declare module "net.minecraft.client.renderer.blockentity.BlockEntityRenderDispatcher" {
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Font$$Type} from "net.minecraft.client.gui.Font"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$Camera, $Camera$$Type} from "net.minecraft.client.Camera"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$ItemRenderer$$Type} from "net.minecraft.client.renderer.entity.ItemRenderer"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$ResourceManagerReloadListener$$Interface} from "net.minecraft.server.packs.resources.ResourceManagerReloadListener"
import {$BlockRenderDispatcher$$Type} from "net.minecraft.client.renderer.block.BlockRenderDispatcher"
import {$EntityRenderDispatcher$$Type} from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$BlockEntityRenderer} from "net.minecraft.client.renderer.blockentity.BlockEntityRenderer"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$EntityModelSet$$Type} from "net.minecraft.client.model.geom.EntityModelSet"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $BlockEntityRenderDispatcher implements $ResourceManagerReloadListener$$Interface {
 "cameraHitResult": $HitResult
 "level": $Level
 "camera": $Camera

constructor(arg0: $Font$$Type, arg1: $EntityModelSet$$Type, arg2: $Supplier$$Type<($BlockRenderDispatcher$$Type)>, arg3: $Supplier$$Type<($ItemRenderer$$Type)>, arg4: $Supplier$$Type<($EntityRenderDispatcher$$Type)>)

public "renderItem"<E extends $BlockEntity>(arg0: E, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: integer, arg4: integer): boolean
public "prepare"(arg0: $Level$$Type, arg1: $Camera$$Type, arg2: $HitResult$$Type): void
public "setLevel"(arg0: $Level$$Type): void
public "render"<E extends $BlockEntity>(arg0: E, arg1: float, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type): void
public "onResourceManagerReload"(arg0: $ResourceManager$$Type): void
public "getRenderer"<E extends $BlockEntity>(arg0: E): $BlockEntityRenderer<(E)>
public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
public "getName"(): StringJS
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityRenderDispatcher$$Type = ($BlockEntityRenderDispatcher);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEntityRenderDispatcher$$Original = $BlockEntityRenderDispatcher;}
declare module "net.minecraft.client.renderer.culling.Frustum" {
import {$AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"

export class $Frustum {
static readonly "OFFSET_STEP": integer

constructor(arg0: $Matrix4f$$Type, arg1: $Matrix4f$$Type)
constructor(arg0: $Frustum$$Type)

public "isVisible"(arg0: $AABB$$Type): boolean
public "prepare"(arg0: double, arg1: double, arg2: double): void
public "offsetToFullyIncludeCameraCube"(arg0: integer): $Frustum
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Frustum$$Type = ($Frustum);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Frustum$$Original = $Frustum;}
declare module "net.minecraft.client.renderer.texture.TextureManager" {
import {$Collection} from "java.util.Collection"
import {$Map} from "java.util.Map"
import {$Tickable$$Interface} from "net.minecraft.client.renderer.texture.Tickable"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$PreparableReloadListener$$Interface} from "net.minecraft.server.packs.resources.PreparableReloadListener"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$DynamicTexture$$Type} from "net.minecraft.client.renderer.texture.DynamicTexture"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$AbstractTexture, $AbstractTexture$$Type} from "net.minecraft.client.renderer.texture.AbstractTexture"
import {$IdentifiableResourceReloadListener$$Interface} from "net.fabricmc.fabric.api.resource.IdentifiableResourceReloadListener"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$Path$$Type} from "java.nio.file.Path"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $TextureManager implements $PreparableReloadListener$$Interface, $Tickable$$Interface, $AutoCloseable$$Interface, $IdentifiableResourceReloadListener$$Interface {
readonly "byPath": $Map<($ResourceLocation), ($AbstractTexture)>
static readonly "INTENTIONAL_MISSING_TEXTURE": $ResourceLocation

constructor(arg0: $ResourceManager$$Type)

public "register"(arg0: $ResourceLocation$$Type, arg1: $AbstractTexture$$Type): void
public "register"(arg0: StringJS, arg1: $DynamicTexture$$Type): $ResourceLocation
public "close"(): void
public "release"(arg0: $ResourceLocation$$Type): void
public "tick"(): void
public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
public "getTexture"(arg0: $ResourceLocation$$Type, arg1: $AbstractTexture$$Type): $AbstractTexture
public "getTexture"(arg0: $ResourceLocation$$Type): $AbstractTexture
public "dumpAllSheets"(arg0: $Path$$Type): void
public "bindForSetup"(arg0: $ResourceLocation$$Type): void
public "preload"(arg0: $ResourceLocation$$Type, arg1: $Executor$$Type): $CompletableFuture<(void)>
public "getFabricDependencies"(): $Collection
public "getFabricId"(): $ResourceLocation
public "getName"(): StringJS
get "fabricDependencies"(): $Collection
get "fabricId"(): $ResourceLocation
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureManager$$Type = ($TextureManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextureManager$$Original = $TextureManager;}
declare module "net.minecraft.client.renderer.entity.RenderLayerParent" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$EntityModel} from "net.minecraft.client.model.EntityModel"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export interface $RenderLayerParent$$Interface<T extends $Entity, M extends $EntityModel<(object)>> {
get "model"(): M
}

export class $RenderLayerParent<T extends $Entity, M extends $EntityModel<(object)>> implements $RenderLayerParent$$Interface {
 "getModel"(): M
 "getTextureLocation"(arg0: T): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderLayerParent$$Type<T, M> = ($RenderLayerParent<(T), (M)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderLayerParent$$Original<T, M> = $RenderLayerParent<(T), (M)>;}
declare module "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard" {
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$Runnable} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"
import {$RenderStateShard$BooleanStateShard} from "net.minecraft.client.renderer.RenderStateShard$BooleanStateShard"

export class $RenderStateShard$OverlayStateShard extends $RenderStateShard$BooleanStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
readonly "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: boolean)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$OverlayStateShard$$Type = ($RenderStateShard$OverlayStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$OverlayStateShard$$Original = $RenderStateShard$OverlayStateShard;}
declare module "net.minecraft.client.renderer.entity.LivingEntityRenderer" {
import {$RenderLayer$$Type} from "net.minecraft.client.renderer.entity.layers.RenderLayer"
import {$EntityRenderer} from "net.minecraft.client.renderer.entity.EntityRenderer"
import {$LivingEntityRendererAccessor$$Interface as $LivingEntityRendererAccessor$0$$Interface} from "com.furiusmax.bjornlib.neo.mixin.client.LivingEntityRendererAccessor"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$LivingEntityRendererInvoker$$Interface} from "net.dawson.adorablehamsterpets.mixin.client.LivingEntityRendererInvoker"
import {$EntityRendererProvider$Context$$Type} from "net.minecraft.client.renderer.entity.EntityRendererProvider$Context"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$RenderLayerParent$$Interface} from "net.minecraft.client.renderer.entity.RenderLayerParent"
import {$EntityRenderDispatcher} from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"
import {$LivingEntityRendererAccessor$$Interface} from "net.fabricmc.fabric.mixin.client.rendering.LivingEntityRendererAccessor"
import {$EntityModel, $EntityModel$$Type} from "net.minecraft.client.model.EntityModel"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$RenderType} from "net.minecraft.client.renderer.RenderType"
import {$AccessorLivingEntityRenderer$$Interface} from "com.railwayteam.railways.mixin.client.AccessorLivingEntityRenderer"

export class $LivingEntityRenderer<T extends $LivingEntity, M extends $EntityModel<(object)>> extends $EntityRenderer<(T)> implements $RenderLayerParent$$Interface<(T), (M)>, $LivingEntityRendererAccessor$$Interface, $AccessorLivingEntityRenderer$$Interface, $LivingEntityRendererAccessor$0$$Interface, $LivingEntityRendererInvoker$$Interface {
static readonly "LEASH_RENDER_STEPS": integer
readonly "entityRenderDispatcher": $EntityRenderDispatcher

constructor(arg0: $EntityRendererProvider$Context$$Type, arg1: M, arg2: float)

public "getModel"(): M
public static "getOverlayCoords"(arg0: $LivingEntity$$Type, arg1: float): integer
public "render"(arg0: T, arg1: float, arg2: float, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer): void
public "render"(arg0: $Entity$$Type, arg1: float, arg2: float, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer): void
public "addLayer"(arg0: $RenderLayer$$Type<(T), (M)>): boolean
public "callAddFeature"(arg0: $RenderLayer$$Type): boolean
public static "isEntityUpsideDown"(arg0: $LivingEntity$$Type): boolean
public "callGetRenderType"(arg0: $LivingEntity$$Type, arg1: boolean, arg2: boolean, arg3: boolean): $RenderType
public "callSetupRotations"(arg0: $LivingEntity$$Type, arg1: $PoseStack$$Type, arg2: float, arg3: float, arg4: float, arg5: float): void
public "getTextureLocation"(arg0: T): $ResourceLocation
get "model"(): M
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityRenderer$$Type<T, M> = ($LivingEntityRenderer<(T), (M)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingEntityRenderer$$Original<T, M> = $LivingEntityRenderer<(T), (M)>;}
declare module "net.minecraft.client.renderer.OutlineBufferSource" {
import {$BufferSourceExtension$$Interface} from "com.supermartijn642.fusion.extensions.BufferSourceExtension"
import {$MultiBufferSource$$Interface} from "net.minecraft.client.renderer.MultiBufferSource"
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"
import {$SequencedMap$$Type} from "java.util.SequencedMap"
import {$ByteBufferBuilder$$Type} from "com.mojang.blaze3d.vertex.ByteBufferBuilder"
import {$VertexConsumer} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export class $OutlineBufferSource implements $MultiBufferSource$$Interface, $BufferSourceExtension$$Interface {
constructor(arg0: $MultiBufferSource$BufferSource$$Type)

public "setColor"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "getBuffer"(arg0: $RenderType$$Type): $VertexConsumer
public "endOutlineBatch"(): void
public "fusionGetLastRenderType"(): $RenderType
public static "immediate"(arg0: $ByteBufferBuilder$$Type): $MultiBufferSource$BufferSource
public static "immediateWithBuffers"(arg0: $SequencedMap$$Type<($RenderType$$Type), ($ByteBufferBuilder$$Type)>, arg1: $ByteBufferBuilder$$Type): $MultiBufferSource$BufferSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OutlineBufferSource$$Type = ($OutlineBufferSource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OutlineBufferSource$$Original = $OutlineBufferSource;}
declare module "net.minecraft.client.renderer.block.model.BlockFaceUV" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $BlockFaceUV {
 "uvs": (float)[]
readonly "rotation": integer

constructor(arg0: (float)[], arg1: integer)

public "getV"(arg0: integer): float
public "getU"(arg0: integer): float
public "setMissingUv"(arg0: (float)[]): void
public "getReverseIndex"(arg0: integer): integer
set "missingUv"(value: (float)[])
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFaceUV$$Type = ($BlockFaceUV);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockFaceUV$$Original = $BlockFaceUV;}
declare module "net.minecraft.client.renderer.texture.SpriteContents" {
import {$SpriteContentsExtension$$Interface} from "com.supermartijn642.fusion.extensions.SpriteContentsExtension"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$IntStream} from "java.util.stream.IntStream"
import {$SpriteContents$AnimatedTexture} from "net.minecraft.client.renderer.texture.SpriteContents$AnimatedTexture"
import {$FrameSize$$Type} from "net.minecraft.client.resources.metadata.animation.FrameSize"
import {$Stitcher$Entry$$Interface} from "net.minecraft.client.renderer.texture.Stitcher$Entry"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$NativeImage, $NativeImage$$Type} from "com.mojang.blaze3d.platform.NativeImage"
import {$ResourceMetadata, $ResourceMetadata$$Type} from "net.minecraft.server.packs.resources.ResourceMetadata"
import {$SpriteTicker} from "net.minecraft.client.renderer.texture.SpriteTicker"
import {$Pair} from "com.supermartijn642.fusion.api.util.Pair"
import {$IPotentiallyInvisibleSpriteContents$$Interface} from "com.railwayteam.railways.mixin_interfaces.IPotentiallyInvisibleSpriteContents"

export class $SpriteContents implements $Stitcher$Entry$$Interface, $AutoCloseable$$Interface, $SpriteContentsExtension$$Interface, $IPotentiallyInvisibleSpriteContents$$Interface {
 "animatedTexture": $SpriteContents$AnimatedTexture
 "byMipLevel": ($NativeImage)[]
readonly "originalImage": $NativeImage

constructor(arg0: $ResourceLocation$$Type, arg1: $FrameSize$$Type, arg2: $NativeImage$$Type, arg3: $ResourceMetadata$$Type)

public "upload"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: ($NativeImage$$Type)[]): void
public "createTicker"(): $SpriteTicker
public "name"(): $ResourceLocation
public "toString"(): StringJS
public "close"(): void
public "width"(): integer
public "metadata"(): $ResourceMetadata
public "clearFusionTextureMetadata"(): void
public "fusionTextureMetadata"(): $Pair
public "railways$uploadFrame"(arg0: boolean): void
public "increaseMipLevel"(arg0: integer): void
public "getUniqueFrames"(): $IntStream
public "railways$isVisible"(): boolean
public "getFrameCount"(): integer
public "isTransparent"(arg0: integer, arg1: integer, arg2: integer): boolean
public "railways$shouldDoInvisibility"(): boolean
public "height"(): integer
public "getOriginalImage"(): $NativeImage
public "uploadFirstFrame"(arg0: integer, arg1: integer): void
get "uniqueFrames"(): $IntStream
get "frameCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContents$$Type = ($SpriteContents);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteContents$$Original = $SpriteContents;}
declare module "net.minecraft.client.renderer.blockentity.BlockEntityRendererProvider$Context" {
import {$BlockEntityRenderDispatcher, $BlockEntityRenderDispatcher$$Type} from "net.minecraft.client.renderer.blockentity.BlockEntityRenderDispatcher"
import {$BlockRenderDispatcher, $BlockRenderDispatcher$$Type} from "net.minecraft.client.renderer.block.BlockRenderDispatcher"
import {$EntityRenderDispatcher, $EntityRenderDispatcher$$Type} from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"
import {$Font, $Font$$Type} from "net.minecraft.client.gui.Font"
import {$ModelLayerLocation$$Type} from "net.minecraft.client.model.geom.ModelLayerLocation"
import {$ModelPart} from "net.minecraft.client.model.geom.ModelPart"
import {$EntityModelSet, $EntityModelSet$$Type} from "net.minecraft.client.model.geom.EntityModelSet"
import {$ItemRenderer, $ItemRenderer$$Type} from "net.minecraft.client.renderer.entity.ItemRenderer"

export class $BlockEntityRendererProvider$Context {
constructor(arg0: $BlockEntityRenderDispatcher$$Type, arg1: $BlockRenderDispatcher$$Type, arg2: $ItemRenderer$$Type, arg3: $EntityRenderDispatcher$$Type, arg4: $EntityModelSet$$Type, arg5: $Font$$Type)

public "getFont"(): $Font
public "getModelSet"(): $EntityModelSet
public "getEntityRenderer"(): $EntityRenderDispatcher
public "getItemRenderer"(): $ItemRenderer
public "getBlockRenderDispatcher"(): $BlockRenderDispatcher
public "bakeLayer"(arg0: $ModelLayerLocation$$Type): $ModelPart
public "getBlockEntityRenderDispatcher"(): $BlockEntityRenderDispatcher
get "font"(): $Font
get "modelSet"(): $EntityModelSet
get "entityRenderer"(): $EntityRenderDispatcher
get "itemRenderer"(): $ItemRenderer
get "blockRenderDispatcher"(): $BlockRenderDispatcher
get "blockEntityRenderDispatcher"(): $BlockEntityRenderDispatcher
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityRendererProvider$Context$$Type = ($BlockEntityRendererProvider$Context);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEntityRendererProvider$Context$$Original = $BlockEntityRendererProvider$Context;}
declare module "net.minecraft.client.renderer.RenderType$CompositeRenderType" {
import {$Optional} from "java.util.Optional"
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$ImmutableList} from "com.google.common.collect.ImmutableList"
import {$Runnable} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Function} from "java.util.function.Function"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderType$CompositeState, $RenderType$CompositeState$$Type} from "net.minecraft.client.renderer.RenderType$CompositeState"
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$BiFunction} from "java.util.function.BiFunction"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$VertexFormat$Mode$$Type} from "com.mojang.blaze3d.vertex.VertexFormat$Mode"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"
import {$RenderType} from "net.minecraft.client.renderer.RenderType"
import {$VertexFormat$$Type} from "com.mojang.blaze3d.vertex.VertexFormat"

export class $RenderType$CompositeRenderType extends $RenderType {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TEXT": $Function<($ResourceLocation), ($RenderType)>
static readonly "TEXT_BACKGROUND_SEE_THROUGH": $RenderType
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TEXT_INTENSITY_SEE_THROUGH": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "SMALL_BUFFER_SIZE": integer
static readonly "GUI": $RenderType$CompositeRenderType
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
readonly "state": $RenderType$CompositeState
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ENTITY_DECAL": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "ENTITY_GLINT": $RenderType
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "ENTITY_GLINT_DIRECT": $RenderType
readonly "setupState": $Runnable
static readonly "GUI_GHOST_RECIPE_OVERLAY": $RenderType$CompositeRenderType
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "SOLID": $RenderType
static readonly "LINE_STRIP": $RenderType$CompositeRenderType
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "EYES": $BiFunction<($ResourceLocation), ($RenderStateShard$TransparencyStateShard), ($RenderType)>
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSIENT_BUFFER_SIZE": integer
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DRAGON_RAYS_DEPTH": $RenderType
static readonly "BEACON_BEAM": $BiFunction<($ResourceLocation), (boolean), ($RenderType)>
static readonly "ENTITY_TRANSLUCENT_CULL": $Function<($ResourceLocation), ($RenderType)>
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEBUG_QUADS": $RenderType$CompositeRenderType
static readonly "ENTITY_CUTOUT": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GLINT_TRANSLUCENT": $RenderType
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "TEXT_INTENSITY_POLYGON_OFFSET": $Function<($ResourceLocation), ($RenderType)>
static readonly "CHUNK_BUFFER_LAYERS": $ImmutableList<($RenderType)>
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "LEASH": $RenderType
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "GUI_TEXT_HIGHLIGHT": $RenderType$CompositeRenderType
 "chunkLayerId": integer
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CLOUDS": $RenderType
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ENTITY_TRANSLUCENT_EMISSIVE": $BiFunction<($ResourceLocation), (boolean), ($RenderType)>
static readonly "DRAGON_EXPLOSION_ALPHA": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ARMOR_ENTITY_GLINT": $RenderType
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "TRANSLUCENT_MOVING_BLOCK": $RenderType
static readonly "ENTITY_NO_OUTLINE": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ENTITY_CUTOUT_NO_CULL_Z_OFFSET": $BiFunction<($ResourceLocation), (boolean), ($RenderType)>
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LINES": $RenderType$CompositeRenderType
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "ENTITY_CUTOUT_NO_CULL": $BiFunction<($ResourceLocation), (boolean), ($RenderType)>
static readonly "DRAGON_RAYS": $RenderType
static readonly "TRANSLUCENT": $RenderType
static readonly "CUTOUT_MIPPED": $RenderType
static readonly "END_PORTAL": $RenderType
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TEXT_POLYGON_OFFSET": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WATER_MASK": $RenderType
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTNING": $RenderType
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "TEXT_SEE_THROUGH": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ENTITY_TRANSLUCENT": $BiFunction<($ResourceLocation), (boolean), ($RenderType)>
static readonly "ENTITY_SHADOW": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GUI_OVERLAY": $RenderType$CompositeRenderType
static readonly "CLOUDS_DEPTH_ONLY": $RenderType
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEBUG_STRUCTURE_QUADS": $RenderType$CompositeRenderType
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "DEBUG_SECTION_QUADS": $RenderType$CompositeRenderType
static readonly "ENTITY_SOLID": $Function<($ResourceLocation), ($RenderType)>
static readonly "GLINT": $RenderType
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "TEXT_INTENSITY": $Function<($ResourceLocation), ($RenderType)>
static readonly "BIG_BUFFER_SIZE": integer
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MEGABYTE": integer
static readonly "ITEM_ENTITY_TRANSLUCENT_CULL": $Function<($ResourceLocation), ($RenderType)>
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "ARMOR_CUTOUT_NO_CULL": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "CUTOUT": $RenderType
static readonly "END_GATEWAY": $RenderType
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "TRIPWIRE": $RenderType
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ENTITY_SMOOTH_CUTOUT": $Function<($ResourceLocation), ($RenderType)>
static readonly "DEBUG_FILLED_BOX": $RenderType$CompositeRenderType
static readonly "CRUMBLING": $Function<($ResourceLocation), ($RenderType)>
static readonly "TEXT_BACKGROUND": $RenderType
static readonly "DEBUG_LINE_STRIP": $Function<(double), ($RenderType$CompositeRenderType)>
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

public "toString"(): StringJS
public "outline"(): $Optional<($RenderType)>
public "isOutline"(): boolean
public static "catnip$create"(arg0: StringJS, arg1: $VertexFormat$$Type, arg2: $VertexFormat$Mode$$Type, arg3: integer, arg4: boolean, arg5: boolean, arg6: $RenderType$CompositeState$$Type): $RenderType$CompositeRenderType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderType$CompositeRenderType$$Type = ($RenderType$CompositeRenderType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderType$CompositeRenderType$$Original = $RenderType$CompositeRenderType;}
declare module "net.minecraft.client.renderer.MultiBufferSource$BufferSource" {
import {$BufferSourceExtension$$Interface} from "com.supermartijn642.fusion.extensions.BufferSourceExtension"
import {$MultiBufferSource$$Interface} from "net.minecraft.client.renderer.MultiBufferSource"
import {$AccessorMultiBufferSource$$Interface} from "vazkii.patchouli.mixin.client.AccessorMultiBufferSource"
import {$SequencedMap, $SequencedMap$$Type} from "java.util.SequencedMap"
import {$ByteBufferBuilder, $ByteBufferBuilder$$Type} from "com.mojang.blaze3d.vertex.ByteBufferBuilder"
import {$VertexConsumer} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export class $MultiBufferSource$BufferSource implements $MultiBufferSource$$Interface, $BufferSourceExtension$$Interface, $AccessorMultiBufferSource$$Interface {
public "endBatch"(): void
public "endBatch"(arg0: $RenderType$$Type): void
public "getBuffer"(arg0: $RenderType$$Type): $VertexConsumer
public "endLastBatch"(): void
public "fusionGetLastRenderType"(): $RenderType
public "getFallbackBuffer"(): $ByteBufferBuilder
public "getFixedBuffers"(): $SequencedMap
public static "immediate"(arg0: $ByteBufferBuilder$$Type): $MultiBufferSource$BufferSource
public static "immediateWithBuffers"(arg0: $SequencedMap$$Type<($RenderType$$Type), ($ByteBufferBuilder$$Type)>, arg1: $ByteBufferBuilder$$Type): $MultiBufferSource$BufferSource
get "fallbackBuffer"(): $ByteBufferBuilder
get "fixedBuffers"(): $SequencedMap
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiBufferSource$BufferSource$$Type = ($MultiBufferSource$BufferSource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiBufferSource$BufferSource$$Original = $MultiBufferSource$BufferSource;}
declare module "net.minecraft.client.renderer.texture.Dumpable" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Path, $Path$$Type} from "java.nio.file.Path"

export interface $Dumpable$$Interface {

(arg0: $ResourceLocation, arg1: $Path): void
}

export class $Dumpable implements $Dumpable$$Interface {
 "dumpContents"(arg0: $ResourceLocation$$Type, arg1: $Path$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Dumpable$$Type = ((arg0: $ResourceLocation, arg1: $Path) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Dumpable$$Original = $Dumpable;}
declare module "net.minecraft.client.renderer.ItemInHandRenderer" {
import {$LocalPlayer$$Type} from "net.minecraft.client.player.LocalPlayer"
import {$ItemDisplayContext$$Type} from "net.minecraft.world.item.ItemDisplayContext"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MultiBufferSource$BufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$EntityRenderDispatcher$$Type} from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$ItemRenderer$$Type} from "net.minecraft.client.renderer.entity.ItemRenderer"

export class $ItemInHandRenderer {
 "mainHandItem": $ItemStack
 "offHandItem": $ItemStack

constructor(arg0: $Minecraft$$Type, arg1: $EntityRenderDispatcher$$Type, arg2: $ItemRenderer$$Type)

public "renderItem"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: $ItemDisplayContext$$Type, arg3: boolean, arg4: $PoseStack$$Type, arg5: $MultiBufferSource$$Type, arg6: integer): void
public "itemUsed"(arg0: $InteractionHand$$Type): void
public "tick"(): void
public "renderHandsWithItems"(arg0: float, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$BufferSource$$Type, arg3: $LocalPlayer$$Type, arg4: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemInHandRenderer$$Type = ($ItemInHandRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemInHandRenderer$$Original = $ItemInHandRenderer;}
declare module "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer" {
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"

export interface $DebugRenderer$SimpleDebugRenderer$$Interface {

(arg0: $PoseStack, arg1: $MultiBufferSource, arg2: double, arg3: double, arg4: double): void
}

export class $DebugRenderer$SimpleDebugRenderer implements $DebugRenderer$SimpleDebugRenderer$$Interface {
 "clear"(): void
 "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: double, arg3: double, arg4: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DebugRenderer$SimpleDebugRenderer$$Type = ((arg0: $PoseStack, arg1: $MultiBufferSource, arg2: double, arg3: double, arg4: double) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DebugRenderer$SimpleDebugRenderer$$Original = $DebugRenderer$SimpleDebugRenderer;}
declare module "net.minecraft.client.renderer.block.model.ItemOverride" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$List$$Type} from "java.util.List"
import {$ItemOverride$Predicate, $ItemOverride$Predicate$$Type} from "net.minecraft.client.renderer.block.model.ItemOverride$Predicate"
import {$Stream} from "java.util.stream.Stream"

export class $ItemOverride {
constructor(arg0: $ResourceLocation$$Type, arg1: $List$$Type<($ItemOverride$Predicate$$Type)>)

public "getModel"(): $ResourceLocation
public "getPredicates"(): $Stream<($ItemOverride$Predicate)>
get "model"(): $ResourceLocation
get "predicates"(): $Stream<($ItemOverride$Predicate)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemOverride$$Type = ($ItemOverride);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemOverride$$Original = $ItemOverride;}
declare module "net.minecraft.client.renderer.chunk.RenderRegionCache" {
import {$SectionPos$$Type} from "net.minecraft.core.SectionPos"
import {$RenderChunkRegion} from "net.minecraft.client.renderer.chunk.RenderChunkRegion"
import {$Level$$Type} from "net.minecraft.world.level.Level"

export class $RenderRegionCache {
constructor()

public "createRegion"(arg0: $Level$$Type, arg1: $SectionPos$$Type): $RenderChunkRegion
public "createRegion"(arg0: $Level$$Type, arg1: $SectionPos$$Type, arg2: boolean): $RenderChunkRegion
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderRegionCache$$Type = ($RenderRegionCache);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderRegionCache$$Original = $RenderRegionCache;}
declare module "net.minecraft.client.renderer.item.ItemPropertyFunction" {
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

/**
 * 
 * @deprecated
 */
export interface $ItemPropertyFunction$$Interface {

(arg0: $ItemStack, arg1: $ClientLevel, arg2: $LivingEntity, arg3: integer): float
}

export class $ItemPropertyFunction implements $ItemPropertyFunction$$Interface {
 "call"(arg0: $ItemStack$$Type, arg1: $ClientLevel$$Type, arg2: $LivingEntity$$Type, arg3: integer): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPropertyFunction$$Type = ((arg0: $ItemStack, arg1: $ClientLevel, arg2: $LivingEntity, arg3: integer) => float);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemPropertyFunction$$Original = $ItemPropertyFunction;}
declare module "net.minecraft.client.renderer.texture.atlas.SpriteSource" {
import {$SpriteSource$Output$$Type} from "net.minecraft.client.renderer.texture.atlas.SpriteSource$Output"
import {$SpriteSourceType} from "net.minecraft.client.renderer.texture.atlas.SpriteSourceType"
import {$FileToIdConverter} from "net.minecraft.resources.FileToIdConverter"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export interface $SpriteSource$$Interface {
}

export class $SpriteSource implements $SpriteSource$$Interface {
static readonly "TEXTURE_ID_CONVERTER": $FileToIdConverter

 "run"(arg0: $ResourceManager$$Type, arg1: $SpriteSource$Output$$Type): void
 "type"(): $SpriteSourceType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteSource$$Type = ($SpriteSource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteSource$$Original = $SpriteSource;}
declare module "net.minecraft.client.renderer.BlockEntityWithoutLevelRenderer" {
import {$ItemDisplayContext$$Type} from "net.minecraft.world.item.ItemDisplayContext"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$BlockEntityRenderDispatcher$$Type} from "net.minecraft.client.renderer.blockentity.BlockEntityRenderDispatcher"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$ResourceManagerReloadListener$$Interface} from "net.minecraft.server.packs.resources.ResourceManagerReloadListener"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$EntityModelSet$$Type} from "net.minecraft.client.model.geom.EntityModelSet"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $BlockEntityWithoutLevelRenderer implements $ResourceManagerReloadListener$$Interface {
constructor(arg0: $BlockEntityRenderDispatcher$$Type, arg1: $EntityModelSet$$Type)

public "onResourceManagerReload"(arg0: $ResourceManager$$Type): void
public "handler$doa000$skinlayers3d$renderByItem"(itemStack: $ItemStack$$Type, itemDisplayContext: $ItemDisplayContext$$Type, poseStack: $PoseStack$$Type, multiBufferSource: $MultiBufferSource$$Type, i: integer, j: integer, info: $CallbackInfo$$Type): void
public "handler$bpp000$geckolib$renderGeckolibItem"(arg0: $ItemStack$$Type, arg1: $ItemDisplayContext$$Type, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type, arg4: integer, arg5: integer, arg6: $CallbackInfo$$Type): void
public "renderByItem"(arg0: $ItemStack$$Type, arg1: $ItemDisplayContext$$Type, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type, arg4: integer, arg5: integer): void
public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
public "getName"(): StringJS
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityWithoutLevelRenderer$$Type = ($BlockEntityWithoutLevelRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEntityWithoutLevelRenderer$$Original = $BlockEntityWithoutLevelRenderer;}
declare module "net.minecraft.client.renderer.debug.RaidDebugRenderer" {
import {$DebugRenderer$SimpleDebugRenderer$$Interface} from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$Collection$$Type} from "java.util.Collection"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $RaidDebugRenderer implements $DebugRenderer$SimpleDebugRenderer$$Interface {
constructor(arg0: $Minecraft$$Type)

public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: double, arg3: double, arg4: double): void
public "setRaidCenters"(arg0: $Collection$$Type<($BlockPos$$Type)>): void
public "clear"(): void
set "raidCenters"(value: $Collection$$Type<($BlockPos$$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RaidDebugRenderer$$Type = ($RaidDebugRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RaidDebugRenderer$$Original = $RaidDebugRenderer;}
declare module "net.minecraft.client.renderer.RenderStateShard$BooleanStateShard" {
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard} from "net.minecraft.client.renderer.RenderStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"

export class $RenderStateShard$BooleanStateShard extends $RenderStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
readonly "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: StringJS, arg1: $Runnable$$Type, arg2: $Runnable$$Type, arg3: boolean)

public "toString"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$BooleanStateShard$$Type = ($RenderStateShard$BooleanStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$BooleanStateShard$$Original = $RenderStateShard$BooleanStateShard;}
declare module "net.minecraft.client.renderer.texture.OverlayTexture" {
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"

export class $OverlayTexture implements $AutoCloseable$$Interface {
static readonly "NO_WHITE_U": integer
static readonly "WHITE_OVERLAY_V": integer
static readonly "NO_OVERLAY": integer
static readonly "RED_OVERLAY_V": integer

constructor()

public static "v"(arg0: boolean): integer
public "close"(): void
public static "u"(arg0: float): integer
public static "pack"(arg0: float, arg1: boolean): integer
public static "pack"(arg0: integer, arg1: integer): integer
public "teardownOverlayColor"(): void
public "setupOverlayColor"(): void
get "upOverlayColor"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OverlayTexture$$Type = ($OverlayTexture);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OverlayTexture$$Original = $OverlayTexture;}
declare module "net.minecraft.client.renderer.block.model.ItemTransform" {
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"

export class $ItemTransform {
static readonly "NO_TRANSFORM": $ItemTransform
readonly "rotation": $Vector3f
readonly "translation": $Vector3f
readonly "scale": $Vector3f
readonly "rightRotation": $Vector3f

constructor(arg0: $Vector3f$$Type, arg1: $Vector3f$$Type, arg2: $Vector3f$$Type)
constructor(arg0: $Vector3f$$Type, arg1: $Vector3f$$Type, arg2: $Vector3f$$Type, arg3: $Vector3f$$Type)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "apply"(arg0: boolean, arg1: $PoseStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTransform$$Type = ($ItemTransform);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemTransform$$Original = $ItemTransform;}
declare module "net.minecraft.client.renderer.texture.TextureAtlas" {
import {$TextureAtlasSprite} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$SpriteFinderImpl$SpriteFinderAccess$$Interface} from "net.fabricmc.fabric.impl.renderer.SpriteFinderImpl$SpriteFinderAccess"
import {$SpriteLoader$Preparations$$Type} from "net.minecraft.client.renderer.texture.SpriteLoader$Preparations"
import {$Map} from "java.util.Map"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Tickable$$Interface} from "net.minecraft.client.renderer.texture.Tickable"
import {$Path$$Type} from "java.nio.file.Path"
import {$SpriteFinderImpl} from "net.fabricmc.fabric.impl.renderer.SpriteFinderImpl"
import {$Dumpable$$Interface} from "net.minecraft.client.renderer.texture.Dumpable"
import {$AbstractTexture} from "net.minecraft.client.renderer.texture.AbstractTexture"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $TextureAtlas extends $AbstractTexture implements $Dumpable$$Interface, $Tickable$$Interface, $SpriteFinderImpl$SpriteFinderAccess$$Interface {
static readonly "NOT_ASSIGNED": integer
/**
 * 
 * @deprecated
 */
static readonly "LOCATION_BLOCKS": $ResourceLocation
/**
 * 
 * @deprecated
 */
static readonly "LOCATION_PARTICLES": $ResourceLocation
 "texturesByName": $Map<($ResourceLocation), ($TextureAtlasSprite)>
 "width": integer
 "height": integer

constructor(arg0: $ResourceLocation$$Type)

public "upload"(arg0: $SpriteLoader$Preparations$$Type): void
public "getSprite"(arg0: $ResourceLocation$$Type): $TextureAtlasSprite
public "load"(arg0: $ResourceManager$$Type): void
public "location"(): $ResourceLocation
public "tick"(): void
public "cycleAnimationFrames"(): void
public "maxSupportedTextureSize"(): integer
public "fabric_spriteFinder"(): $SpriteFinderImpl
public "getTextures"(): $Map<($ResourceLocation), ($TextureAtlasSprite)>
public "clearTextureData"(): void
public "updateFilter"(arg0: $SpriteLoader$Preparations$$Type): void
public "dumpContents"(arg0: $ResourceLocation$$Type, arg1: $Path$$Type): void
get "textures"(): $Map<($ResourceLocation), ($TextureAtlasSprite)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureAtlas$$Type = ($TextureAtlas);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextureAtlas$$Original = $TextureAtlas;}
