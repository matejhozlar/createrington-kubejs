declare module "net.minecraft.client.renderer.chunk.SectionCompiler" {
import {$BlockEntityRenderDispatcher$$Type} from "net.minecraft.client.renderer.blockentity.BlockEntityRenderDispatcher"
import {$SectionCompiler$Results} from "net.minecraft.client.renderer.chunk.SectionCompiler$Results"
import {$BlockRenderDispatcher$$Type} from "net.minecraft.client.renderer.block.BlockRenderDispatcher"
import {$List$$Type} from "java.util.List"
import {$SectionPos$$Type} from "net.minecraft.core.SectionPos"
import {$RenderChunkRegion$$Type} from "net.minecraft.client.renderer.chunk.RenderChunkRegion"
import {$SectionBufferBuilderPack$$Type} from "net.minecraft.client.renderer.SectionBufferBuilderPack"
import {$AddSectionGeometryEvent$AdditionalSectionRenderer$$Type} from "net.neoforged.neoforge.client.event.AddSectionGeometryEvent$AdditionalSectionRenderer"
import {$VertexSorting$$Type} from "com.mojang.blaze3d.vertex.VertexSorting"

export class $SectionCompiler {
constructor(arg0: $BlockRenderDispatcher$$Type, arg1: $BlockEntityRenderDispatcher$$Type)

public "compile"(arg0: $SectionPos$$Type, arg1: $RenderChunkRegion$$Type, arg2: $VertexSorting$$Type, arg3: $SectionBufferBuilderPack$$Type, arg4: $List$$Type<($AddSectionGeometryEvent$AdditionalSectionRenderer$$Type)>): $SectionCompiler$Results
public "compile"(arg0: $SectionPos$$Type, arg1: $RenderChunkRegion$$Type, arg2: $VertexSorting$$Type, arg3: $SectionBufferBuilderPack$$Type): $SectionCompiler$Results
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SectionCompiler$$Type = ($SectionCompiler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SectionCompiler$$Original = $SectionCompiler;}
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

public "tesselate"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $VertexConsumer$$Type, arg3: $BlockState$$Type, arg4: $FluidState$$Type): void
public static "shouldRenderFace"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $FluidState$$Type, arg3: $BlockState$$Type, arg4: $Direction$$Type, arg5: $BlockState$$Type): boolean
public static "shouldRenderFace"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $FluidState$$Type, arg3: $BlockState$$Type, arg4: $Direction$$Type, arg5: $FluidState$$Type): boolean
public "setupSprites"(): void
public "handler$zdk000$fabric_rendering_fluids_v1$onResourceReloadReturn"(arg0: $CallbackInfo$$Type): void
public "handler$zdk000$fabric_rendering_fluids_v1$onHeadRender"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $VertexConsumer$$Type, arg3: $BlockState$$Type, arg4: $FluidState$$Type, arg5: $CallbackInfo$$Type): void
get "upSprites"(): void
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
declare module "net.minecraft.client.renderer.block.model.BlockModelDefinition$Context" {
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$Gson} from "com.google.gson.Gson"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockModelDefinition$Context {
readonly "gson": $Gson

constructor()

public "getDefinition"(): $StateDefinition<($Block), ($BlockState)>
public "setDefinition"(arg0: $StateDefinition$$Type<($Block$$Type), ($BlockState$$Type)>): void
get "definition"(): $StateDefinition<($Block), ($BlockState)>
set "definition"(value: $StateDefinition$$Type<($Block$$Type), ($BlockState$$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockModelDefinition$Context$$Type = ($BlockModelDefinition$Context);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockModelDefinition$Context$$Original = $BlockModelDefinition$Context;}
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
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
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

public static "getTranslucentTransparency"(): $RenderStateShard$TransparencyStateShard
public static "getGLINT_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getCRUMBLING_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getNO_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
get "translucentTransparency"(): $RenderStateShard$TransparencyStateShard
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
public "removeBeeInfo"(arg0: integer): void
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: double, arg3: double, arg4: double): void
public "addOrUpdateHiveInfo"(arg0: $HiveDebugPayload$HiveInfo$$Type, arg1: long): void
public "addOrUpdateBeeInfo"(arg0: $BeeDebugPayload$BeeInfo$$Type): void
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
import {$SpriteExtension$$Interface} from "me.pepperbell.continuity.client.mixinterface.SpriteExtension"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$SpriteContents, $SpriteContents$$Type} from "net.minecraft.client.renderer.texture.SpriteContents"
import {$TextureType, $TextureType$$Type} from "com.supermartijn642.fusion.api.texture.TextureType"
import {$TextureAtlasSpriteExtension$$Interface} from "net.caffeinemc.mods.sodium.client.render.chunk.compile.pipeline.TextureAtlasSpriteExtension"
import {$TextureAtlasSpriteExtension$$Interface as $TextureAtlasSpriteExtension$0$$Interface} from "com.supermartijn642.fusion.extensions.TextureAtlasSpriteExtension"

export class $TextureAtlasSprite implements $TextureAtlasSpriteExtension$0$$Interface, $TextureAtlasSpriteExtension$$Interface, $SpriteExtension$$Interface, $EmissiveSpriteHolder$$Interface {
readonly "x": integer
readonly "y": integer
 "v0": float
 "u0": float
 "v1": float
 "u1": float

constructor(arg0: $ResourceLocation$$Type, arg1: $SpriteContents$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer)

public "toString"(): StringJS
public "wrap"(arg0: $VertexConsumer$$Type): $VertexConsumer
public "contents"(): $SpriteContents
public "getV"(arg0: float): float
public "getU"(arg0: float): float
public "getX"(): integer
public "getV0"(): float
public "getU1"(): float
public "getU0"(): float
public "getV1"(): float
public "getUOffset"(arg0: float): float
public "getVOffset"(arg0: float): float
public "atlasLocation"(): $ResourceLocation
public "getY"(): integer
public "uploadFirstFrame"(): void
public "uvShrinkRatio"(): float
public "getEmissiveSprite"(): $TextureAtlasSprite
public "setEmissiveSprite"(sprite: $TextureAtlasSprite$$Type): void
public "getPixelRGBA"(arg0: integer, arg1: integer, arg2: integer): integer
public "sodium$hasUnknownImageContents"(): boolean
public "continuity$getEmissiveSprite"(): $TextureAtlasSprite
public "continuity$setEmissiveSprite"(sprite: $TextureAtlasSprite$$Type): void
public "setFusionTextureType"(type: $TextureType$$Type): void
public "getFusionTextureType"(): $TextureType
public "createTicker"(): $TextureAtlasSprite$Ticker
get "emissiveSprite"(): $TextureAtlasSprite
set "emissiveSprite"(value: $TextureAtlasSprite$$Type)
set "fusionTextureType"(value: $TextureType$$Type)
get "fusionTextureType"(): $TextureType
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
declare module "net.minecraft.client.renderer.debug.GoalSelectorDebugRenderer" {
import {$DebugRenderer$SimpleDebugRenderer$$Interface} from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import {$GoalDebugPayload$DebugGoal$$Type} from "net.minecraft.network.protocol.common.custom.GoalDebugPayload$DebugGoal"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$List$$Type} from "java.util.List"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $GoalSelectorDebugRenderer implements $DebugRenderer$SimpleDebugRenderer$$Interface {
constructor(arg0: $Minecraft$$Type)

public "clear"(): void
public "removeGoalSelector"(arg0: integer): void
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: double, arg3: double, arg4: double): void
public "addGoalSelector"(arg0: integer, arg1: $BlockPos$$Type, arg2: $List$$Type<($GoalDebugPayload$DebugGoal$$Type)>): void
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
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$EntityRendererProvider$Context$$Type} from "net.minecraft.client.renderer.entity.EntityRendererProvider$Context"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$EntityRenderDispatcher} from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"
import {$ItemFrame, $ItemFrame$$Type} from "net.minecraft.world.entity.decoration.ItemFrame"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $ItemFrameRenderer<T extends $ItemFrame> extends $EntityRenderer<(T)> {
 "shadowRadius": float
static readonly "LEASH_RENDER_STEPS": integer
readonly "entityRenderDispatcher": $EntityRenderDispatcher
 "shadowStrength": float
static readonly "BRIGHT_MAP_LIGHT_ADJUSTMENT": integer
static readonly "GLOW_FRAME_BRIGHTNESS": integer
static readonly "NAMETAG_SCALE": float

constructor(arg0: $EntityRendererProvider$Context$$Type)

public "getRenderOffset"(arg0: $Entity$$Type, arg1: float): $Vec3
public "getRenderOffset"(arg0: T, arg1: float): $Vec3
public "render"(arg0: $Entity$$Type, arg1: float, arg2: float, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer): void
public "render"(arg0: T, arg1: float, arg2: float, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer): void
public "renderNameTag"(arg0: T, arg1: $Component$$Type, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type, arg4: integer, arg5: float): void
public "renderNameTag"(arg0: $Entity$$Type, arg1: $Component$$Type, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type, arg4: integer, arg5: float): void
public "getTextureLocation"(arg0: $Entity$$Type): $ResourceLocation
public "getTextureLocation"(arg0: T): $ResourceLocation
public "getBlockLightLevel"(arg0: T, arg1: $BlockPos$$Type): integer
public "getBlockLightLevel"(arg0: $Entity$$Type, arg1: $BlockPos$$Type): integer
public "shouldShowName"(arg0: T): boolean
public "shouldShowName"(arg0: $Entity$$Type): boolean
public "handler$zcm000$sodium_extra$render"(arg0: $ItemFrame$$Type, arg1: float, arg2: float, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer, arg6: $CallbackInfo$$Type): void
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
public "texture"(): StringJS
public "uv"(): $BlockFaceUV
public "cullForDirection"(): $Direction
public "tintIndex"(): integer
public "faceData"(): $ExtraFaceData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockElementFace$$Type = ({"uv"?: $BlockFaceUV$$Type, "tintIndex"?: integer, "parent"?: $MutableObject$$Type<($BlockElement$$Type)>, "texture"?: StringJS, "cullForDirection"?: $Direction$$Type, "faceData"?: $ExtraFaceData$$Type}) | ([uv?: $BlockFaceUV$$Type, tintIndex?: integer, parent?: $MutableObject$$Type<($BlockElement$$Type)>, texture?: StringJS, cullForDirection?: $Direction$$Type, faceData?: $ExtraFaceData$$Type]);
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
public "angle"(): float
public "axis"(): $Direction$Axis
public "rescale"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockElementRotation$$Type = ({"angle"?: float, "axis"?: $Direction$Axis$$Type, "rescale"?: boolean, "origin"?: $Vector3f$$Type}) | ([angle?: float, axis?: $Direction$Axis$$Type, rescale?: boolean, origin?: $Vector3f$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockElementRotation$$Original = $BlockElementRotation;}
declare module "net.minecraft.client.renderer.block.model.multipart.Selector" {
import {$Condition$$Type} from "net.minecraft.client.renderer.block.model.multipart.Condition"
import {$MultiVariant, $MultiVariant$$Type} from "net.minecraft.client.renderer.block.model.MultiVariant"
import {$Predicate} from "java.util.function.Predicate"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $Selector {
constructor(arg0: $Condition$$Type, arg1: $MultiVariant$$Type)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getVariant"(): $MultiVariant
public "getPredicate"(arg0: $StateDefinition$$Type<($Block$$Type), ($BlockState$$Type)>): $Predicate<($BlockState)>
get "variant"(): $MultiVariant
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Selector$$Type = ($Selector);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Selector$$Original = $Selector;}
declare module "net.minecraft.client.renderer.LightTexture" {
import {$GameRenderer$$Type} from "net.minecraft.client.renderer.GameRenderer"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$LightTextureAccessor$$Interface} from "net.irisshaders.iris.mixin.LightTextureAccessor"
import {$DynamicTexture} from "net.minecraft.client.renderer.texture.DynamicTexture"
import {$DimensionType$$Type} from "net.minecraft.world.level.dimension.DimensionType"

export class $LightTexture implements $AutoCloseable$$Interface, $LightTextureAccessor$$Interface {
static readonly "FULL_BRIGHT": integer
static readonly "FULL_SKY": integer
static readonly "FULL_BLOCK": integer

constructor(arg0: $GameRenderer$$Type, arg1: $Minecraft$$Type)

public "close"(): void
public static "block"(arg0: integer): integer
public "tick"(): void
public static "sky"(arg0: integer): integer
public "getLightTexture"(): $DynamicTexture
public "turnOffLightLayer"(): void
public "turnOnLightLayer"(): void
public "updateLightTexture"(arg0: float): void
public static "pack"(arg0: integer, arg1: integer): integer
public "getDarknessGamma"(arg0: float): float
public static "getBrightness"(arg0: $DimensionType$$Type, arg1: integer): float
public "calculateDarknessScale"(arg0: $LivingEntity$$Type, arg1: float, arg2: float): float
public "handler$fdc000$distanthorizons$updateLightTexture"(partialTicks: float, ci: $CallbackInfo$$Type): void
get "lightTexture"(): $DynamicTexture
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
declare module "net.minecraft.client.renderer.block.model.ItemOverrides$PropertyMatcher" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ItemOverrides$PropertyMatcher {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemOverrides$PropertyMatcher$$Type = ($ItemOverrides$PropertyMatcher);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemOverrides$PropertyMatcher$$Original = $ItemOverrides$PropertyMatcher;}
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
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$JsonElement$$Type} from "com.google.gson.JsonElement"
import {$List} from "java.util.List"
import {$MethodHandle$$Type} from "java.lang.invoke.MethodHandle"
import {$ShaderInstanceInterface$$Interface} from "net.irisshaders.iris.mixinterface.ShaderInstanceInterface"
import {$Uniform} from "com.mojang.blaze3d.shaders.Uniform"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"
import {$ResourceProvider$$Type} from "net.minecraft.server.packs.resources.ResourceProvider"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AbstractUniform} from "com.mojang.blaze3d.shaders.AbstractUniform"
import {$Window$$Type} from "com.mojang.blaze3d.platform.Window"
import {$VertexFormat$Mode$$Type} from "com.mojang.blaze3d.vertex.VertexFormat$Mode"
import {$Logger} from "org.slf4j.Logger"
import {$VertexFormat, $VertexFormat$$Type} from "com.mojang.blaze3d.vertex.VertexFormat"
import {$Program$Type$$Type} from "com.mojang.blaze3d.shaders.Program$Type"

export class $ShaderInstance implements $Shader$$Interface, $AutoCloseable$$Interface, $ShaderInstanceInterface$$Interface {
readonly "FOG_START": $Uniform
 "PROJECTION_MATRIX": $Uniform
static readonly "SHADER_PATH": StringJS
 "TEXTURE_MATRIX": $Uniform
readonly "uniforms": $List<($Uniform)>
readonly "FOG_END": $Uniform
 "MODEL_VIEW_MATRIX": $Uniform
readonly "SCREEN_SIZE": $Uniform
readonly "GLINT_ALPHA": $Uniform
 "COLOR_MODULATOR": $Uniform
readonly "LINE_WIDTH": $Uniform
static readonly "LOGGER": $Logger
readonly "LIGHT0_DIRECTION": $Uniform
 "CHUNK_OFFSET": $Uniform
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

public "getUniform"(arg0: StringJS): $Uniform
public "getName"(): StringJS
public "clear"(): void
public "apply"(): void
public "getId"(): integer
public "close"(): void
public "handler$zki000$iris$setupGeometryShader"(arg0: $ResourceProvider$$Type, arg1: StringJS, arg2: $VertexFormat$$Type, arg3: $CallbackInfo$$Type): void
public "handler$zop000$iris$setupGeometryShader"(arg0: $ResourceProvider$$Type, arg1: $ResourceLocation$$Type, arg2: $VertexFormat$$Type, arg3: $CallbackInfo$$Type): void
public "iris$createExtraShaders"(arg0: $ResourceProvider$$Type, arg1: StringJS): void
public "iris$shouldSkipThis"(): boolean
public "safeGetUniform"(arg0: StringJS): $AbstractUniform
public "attachToProgram"(): void
public "setShouldSkip"(arg0: $MethodHandle$$Type): void
public "setDefaultUniforms"(arg0: $VertexFormat$Mode$$Type, arg1: $Matrix4f$$Type, arg2: $Matrix4f$$Type, arg3: $Window$$Type): void
public "callGetOrCreate"(arg0: $ResourceProvider$$Type, arg1: $Program$Type$$Type, arg2: StringJS): $Program
public "getVertexProgram"(): $Program
public "getFragmentProgram"(): $Program
public "parseUniformNode"(arg0: $JsonElement$$Type): void
public "getVertexFormat"(): $VertexFormat
public "setSampler"(arg0: StringJS, arg1: any): void
public "markDirty"(): void
public "redirect$zki000$iris$redirectBindAttributeLocation"(arg0: integer, arg1: integer, arg2: charseq): void
get "name"(): StringJS
get "id"(): integer
set "shouldSkip"(value: $MethodHandle$$Type)
get "vertexProgram"(): $Program
get "fragmentProgram"(): $Program
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
 "shouldRender"(arg0: T, arg1: $Vec3$$Type): boolean
 "getViewDistance"(): integer
 "render"(arg0: T, arg1: float, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type, arg4: integer, arg5: integer): void
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
 "mipmap": boolean
 "blur": boolean
 "id": integer

constructor()

public "reset"(arg0: $TextureManager$$Type, arg1: $ResourceManager$$Type, arg2: $ResourceLocation$$Type, arg3: $Executor$$Type): void
public "load"(arg0: $ResourceManager$$Type): void
public "getId"(): integer
public "close"(): void
public "bind"(): void
public "setFilter"(arg0: boolean, arg1: boolean): void
public "restoreLastBlurMipmap"(): void
public "releaseId"(): void
public "setBlurMipmap"(arg0: boolean, arg1: boolean): void
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
import {$GpuWarnlistManager$Preparations, $GpuWarnlistManager$Preparations$$Type} from "net.minecraft.client.renderer.GpuWarnlistManager$Preparations"
import {$SimplePreparableReloadListener} from "net.minecraft.server.packs.resources.SimplePreparableReloadListener"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"

export class $GpuWarnlistManager extends $SimplePreparableReloadListener<($GpuWarnlistManager$Preparations)> {
constructor()

public "apply"(arg0: any, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type): void
public "apply"(arg0: $GpuWarnlistManager$Preparations$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type): void
public "prepare"(arg0: $ResourceManager$$Type, arg1: $ProfilerFiller$$Type): $GpuWarnlistManager$Preparations
public "isSkippingFabulous"(): boolean
public "willShowWarning"(): boolean
public "getAllWarnings"(): StringJS
public "showWarning"(): void
public "dismissWarningAndSkipFabulous"(): void
public "hasWarnings"(): boolean
public "getVendorWarnings"(): StringJS
public "resetWarnings"(): void
public "getVersionWarnings"(): StringJS
public "dismissWarning"(): void
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
declare module "net.minecraft.client.renderer.entity.EntityRenderDispatcher" {
import {$EntityRenderer} from "net.minecraft.client.renderer.entity.EntityRenderer"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Font$$Type} from "net.minecraft.client.gui.Font"
import {$Frustum$$Type} from "net.minecraft.client.renderer.culling.Frustum"
import {$Camera, $Camera$$Type} from "net.minecraft.client.Camera"
import {$ItemRenderer$$Type} from "net.minecraft.client.renderer.entity.ItemRenderer"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$EntityRenderDispatcherAccessor$$Interface} from "traben.entity_model_features.mixin.accessor.EntityRenderDispatcherAccessor"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceManagerReloadListener$$Interface} from "net.minecraft.server.packs.resources.ResourceManagerReloadListener"
import {$EntityRenderDispatcherAccessor$$Interface as $EntityRenderDispatcherAccessor$0$$Interface} from "com.simibubi.create.foundation.mixin.accessor.EntityRenderDispatcherAccessor"
import {$BlockRenderDispatcher$$Type} from "net.minecraft.client.renderer.block.BlockRenderDispatcher"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Quaternionf, $Quaternionf$$Type} from "org.joml.Quaternionf"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
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

export class $EntityRenderDispatcher implements $ResourceManagerReloadListener$$Interface, $EntityRenderDispatcherAccessor$$Interface, $EntityRenderDispatcherAccessor$0$$Interface {
 "crosshairPickEntity": $Entity
 "renderers": $Map<($EntityType<(never)>), ($EntityRenderer<(never)>)>
readonly "options": $Options
 "shouldRenderShadow": boolean
readonly "textureManager": $TextureManager
 "camera": $Camera

constructor(arg0: $Minecraft$$Type, arg1: $TextureManager$$Type, arg2: $ItemRenderer$$Type, arg3: $BlockRenderDispatcher$$Type, arg4: $Font$$Type, arg5: $Options$$Type, arg6: $EntityModelSet$$Type)

public "prepare"(arg0: $Level$$Type, arg1: $Camera$$Type, arg2: $Entity$$Type): void
public "setLevel"(arg0: $Level$$Type): void
public "shouldRenderHitBoxes"(): boolean
public "getPackedLightCoords"<E extends $Entity>(arg0: E, arg1: float): integer
public "overrideCameraOrientation"(arg0: $Quaternionf$$Type): void
public "getRenderer"<T extends $Entity>(arg0: T): $EntityRenderer<(T)>
public "onResourceManagerReload"(arg0: $ResourceManager$$Type): void
public "shouldRender"<E extends $Entity>(arg0: E, arg1: $Frustum$$Type, arg2: double, arg3: double, arg4: double): boolean
public "render"<E extends $Entity>(arg0: E, arg1: double, arg2: double, arg3: double, arg4: float, arg5: float, arg6: $PoseStack$$Type, arg7: $MultiBufferSource$$Type, arg8: integer): void
public "getItemInHandRenderer"(): $ItemInHandRenderer
public "cameraOrientation"(): $Quaternionf
public "setRenderHitBoxes"(arg0: boolean): void
public "setRenderShadow"(arg0: boolean): void
public "distanceToSqr"(arg0: double, arg1: double, arg2: double): double
public "distanceToSqr"(arg0: $Entity$$Type): double
public "isShouldRenderShadow"(): boolean
public "getSkinMap"(): $Map<($PlayerSkin$Model), ($EntityRenderer<($Player)>)>
public "create$getRenderers"(): $Map
public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
public "getName"(): StringJS
set "level"(value: $Level$$Type)
get "itemInHandRenderer"(): $ItemInHandRenderer
set "renderHitBoxes"(value: boolean)
set "renderShadow"(value: boolean)
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
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
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

public static "getTranslucentTransparency"(): $RenderStateShard$TransparencyStateShard
public static "getGLINT_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getCRUMBLING_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getNO_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
get "translucentTransparency"(): $RenderStateShard$TransparencyStateShard
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
declare module "net.minecraft.client.renderer.block.BlockModelShaper" {
import {$TextureAtlasSprite} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$Map$$Type} from "java.util.Map"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
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

public static "stateToModelLocation"(arg0: $ResourceLocation$$Type, arg1: $BlockState$$Type): $ModelResourceLocation
public static "stateToModelLocation"(arg0: $BlockState$$Type): $ModelResourceLocation
public "getModelManager"(): $ModelManager
/**
 * 
 * @deprecated
 */
public "getParticleIcon"(arg0: $BlockState$$Type): $TextureAtlasSprite
public "getBlockModel"(arg0: $BlockState$$Type): $BakedModel
public "getTexture"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): $TextureAtlasSprite
public "replaceCache"(arg0: $Map$$Type<($BlockState$$Type), ($BakedModel$$Type)>): void
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
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
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
public static "getTranslucentTransparency"(): $RenderStateShard$TransparencyStateShard
public static "getGLINT_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getCRUMBLING_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getNO_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
get "translucentTransparency"(): $RenderStateShard$TransparencyStateShard
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
declare module "net.minecraft.client.renderer.DimensionSpecialEffects" {
import {$DimensionSpecialEffects$SkyType, $DimensionSpecialEffects$SkyType$$Type} from "net.minecraft.client.renderer.DimensionSpecialEffects$SkyType"
import {$LightTexture$$Type} from "net.minecraft.client.renderer.LightTexture"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Vector3f$$Type} from "org.joml.Vector3f"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Object2ObjectMap} from "it.unimi.dsi.fastutil.objects.Object2ObjectMap"
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

public static "forType"(arg0: $DimensionType$$Type): $DimensionSpecialEffects
public "isFoggyAt"(arg0: integer, arg1: integer): boolean
public "constantAmbientLight"(): boolean
public "skyType"(): $DimensionSpecialEffects$SkyType
public "getBrightnessDependentFogColor"(arg0: $Vec3$$Type, arg1: float): $Vec3
public "getCloudHeight"(): float
public "getSunriseColor"(arg0: float, arg1: float): (float)[]
public static "getIdentifierMap$fabric_rendering_v1_$md$6d3b50$0"(): $Object2ObjectMap
public "forceBrightLightmap"(): boolean
public "hasGround"(): boolean
public "tickRain"(arg0: $ClientLevel$$Type, arg1: integer, arg2: $Camera$$Type): boolean
public "renderSky"(arg0: $ClientLevel$$Type, arg1: integer, arg2: float, arg3: $Matrix4f$$Type, arg4: $Camera$$Type, arg5: $Matrix4f$$Type, arg6: boolean, arg7: $Runnable$$Type): boolean
public "renderSnowAndRain"(arg0: $ClientLevel$$Type, arg1: integer, arg2: float, arg3: $LightTexture$$Type, arg4: double, arg5: double, arg6: double): boolean
public "renderClouds"(arg0: $ClientLevel$$Type, arg1: integer, arg2: float, arg3: $PoseStack$$Type, arg4: double, arg5: double, arg6: double, arg7: $Matrix4f$$Type, arg8: $Matrix4f$$Type): boolean
public "adjustLightmapColors"(arg0: $ClientLevel$$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: integer, arg6: integer, arg7: $Vector3f$$Type): void
public static "getIdentifierMap"(): $Object2ObjectMap<($ResourceLocation), ($DimensionSpecialEffects)>
get "cloudHeight"(): float
get "identifierMap$fabric_rendering_v1_$md$6d3b50$0"(): $Object2ObjectMap
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
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$BrainDebugRenderer} from "net.minecraft.client.renderer.debug.BrainDebugRenderer"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
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
public "switchRenderChunkborder"(): boolean
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$BufferSource$$Type, arg2: double, arg3: double, arg4: double): void
public static "renderFloatingText"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: StringJS, arg3: double, arg4: double, arg5: double, arg6: integer, arg7: float, arg8: boolean, arg9: float, arg10: boolean): void
public static "renderFloatingText"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: StringJS, arg3: double, arg4: double, arg5: double, arg6: integer, arg7: float): void
public static "renderFloatingText"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: StringJS, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
public static "renderFloatingText"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: StringJS, arg3: double, arg4: double, arg5: double, arg6: integer): void
public static "renderFilledUnitCube"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: $BlockPos$$Type, arg3: float, arg4: float, arg5: float, arg6: float): void
public static "renderFilledBox"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: $AABB$$Type, arg3: float, arg4: float, arg5: float, arg6: float): void
public static "renderFilledBox"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type, arg4: float, arg5: float, arg6: float, arg7: float): void
public static "renderFilledBox"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: $BlockPos$$Type, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float): void
public static "renderFilledBox"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: float, arg9: float, arg10: float, arg11: float): void
public static "getTargetedEntity"(arg0: $Entity$$Type, arg1: integer): $Optional<($Entity)>
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
declare module "net.minecraft.client.renderer.texture.SpriteContents$InterpolationData" {
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$SpriteContents, $SpriteContents$$Type} from "net.minecraft.client.renderer.texture.SpriteContents"
import {$SpriteContents$Ticker$$Type} from "net.minecraft.client.renderer.texture.SpriteContents$Ticker"

export class $SpriteContents$InterpolationData implements $AutoCloseable$$Interface {
readonly "this$0": $SpriteContents

constructor(arg0: $SpriteContents$$Type)

public "close"(): void
public "uploadInterpolatedFrame"(arg0: integer, arg1: integer, arg2: $SpriteContents$Ticker$$Type): void
public "handler$cgl000$sodium$assignParent"(arg0: $SpriteContents$$Type, arg1: $CallbackInfo$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContents$InterpolationData$$Type = ($SpriteContents$InterpolationData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteContents$InterpolationData$$Original = $SpriteContents$InterpolationData;}
declare module "net.minecraft.client.renderer.GameRenderer" {
import {$RenderBuffers, $RenderBuffers$$Type} from "net.minecraft.client.renderer.RenderBuffers"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$IMixinGameRenderer$$Interface} from "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinGameRenderer"
import {$Camera, $Camera$$Type} from "net.minecraft.client.Camera"
import {$Matrix4f, $Matrix4f$$Type} from "org.joml.Matrix4f"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ResourceProvider$$Type} from "net.minecraft.server.packs.resources.ResourceProvider"
import {$ShaderInstance} from "net.minecraft.client.renderer.ShaderInstance"
import {$PostChain} from "net.minecraft.client.renderer.PostChain"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$OverlayTexture} from "net.minecraft.client.renderer.texture.OverlayTexture"
import {$Logger} from "org.slf4j.Logger"
import {$GameRendererAccessor$$Interface as $GameRendererAccessor$0$$Interface} from "net.irisshaders.iris.mixin.GameRendererAccessor"
import {$LightTexture} from "net.minecraft.client.renderer.LightTexture"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$GameRendererAccessor$$Interface} from "net.createmod.ponder.mixin.client.accessor.GameRendererAccessor"
import {$PreparableReloadListener} from "net.minecraft.server.packs.resources.PreparableReloadListener"
import {$MapRenderer} from "net.minecraft.client.gui.MapRenderer"
import {$ItemInHandRenderer, $ItemInHandRenderer$$Type} from "net.minecraft.client.renderer.ItemInHandRenderer"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$DeltaTracker$$Type} from "net.minecraft.client.DeltaTracker"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $GameRenderer implements $AutoCloseable$$Interface, $GameRendererAccessor$0$$Interface, $IMixinGameRenderer$$Interface, $GameRendererAccessor$$Interface {
readonly "minecraft": $Minecraft
 "postEffect": $PostChain
readonly "renderBuffers": $RenderBuffers
static readonly "ITEM_ACTIVATION_ANIMATION_LENGTH": integer
static readonly "PROJECTION_Z_NEAR": float
 "blitShader": $ShaderInstance
static readonly "LOGGER": $Logger
static readonly "MAX_BLUR_RADIUS": integer
readonly "itemInHandRenderer": $ItemInHandRenderer

constructor(arg0: $Minecraft$$Type, arg1: $ItemInHandRenderer$$Type, arg2: $ResourceManager$$Type, arg3: $RenderBuffers$$Type)

public "getShader"(arg0: StringJS): $ShaderInstance
public "getFov"(arg0: $Camera$$Type, arg1: float, arg2: boolean): double
public "close"(): void
public "pick"(arg0: float): void
public "resize"(arg0: integer, arg1: integer): void
public "tick"(): void
public static "getRendertypeEntityTranslucentShader"(): $ShaderInstance
public static "getRendertypeGlintTranslucentShader"(): $ShaderInstance
public static "getRendertypeGuiGhostRecipeOverlayShader"(): $ShaderInstance
public static "getRendertypeEntityCutoutNoCullShader"(): $ShaderInstance
public static "getRendertypeEntityTranslucentCullShader"(): $ShaderInstance
public static "getRendertypeTextIntensitySeeThroughShader"(): $ShaderInstance
public static "getRendertypeArmorCutoutNoCullShader"(): $ShaderInstance
public static "getRendertypeEntitySmoothCutoutShader"(): $ShaderInstance
public static "getRendertypeGuiTextHighlightShader"(): $ShaderInstance
public static "getRendertypeArmorEntityGlintShader"(): $ShaderInstance
public static "getRendertypeEntityGlintDirectShader"(): $ShaderInstance
public static "getRendertypeTranslucentMovingBlockShader"(): $ShaderInstance
public static "getRendertypeLeashShader"(): $ShaderInstance
public static "getRendertypeLinesShader"(): $ShaderInstance
public static "getRendertypeEyesShader"(): $ShaderInstance
public static "getRendertypeCloudsShader"(): $ShaderInstance
public static "getRendertypeOutlineShader"(): $ShaderInstance
public static "getRendertypeGuiShader"(): $ShaderInstance
public static "getRendertypeCutoutShader"(): $ShaderInstance
public static "getRendertypeGlintShader"(): $ShaderInstance
public static "getRendertypeTextShader"(): $ShaderInstance
public static "getRendertypeSolidShader"(): $ShaderInstance
public "getDarkenWorldAmount"(arg0: float): float
public "getProjectionMatrix"(arg0: double): $Matrix4f
public "resetProjectionMatrix"(arg0: $Matrix4f$$Type): void
public static "getNightVisionScale"(arg0: $LivingEntity$$Type, arg1: float): float
public "displayItemActivation"(arg0: $ItemStack$$Type): void
public "getBlurEffect_FancyMenu"(): $PostChain
public "shouldRenderBlockOutlineA"(): boolean
public "resetData"(): void
public static "getPositionTexColorShader"(): $ShaderInstance
public static "getPositionColorShader"(): $ShaderInstance
public static "getPositionTexShader"(): $ShaderInstance
public "isPanoramicMode"(): boolean
public "setPanoramicMode"(arg0: boolean): void
public "renderZoomed"(arg0: float, arg1: float, arg2: float): void
public "renderLevel"(arg0: $DeltaTracker$$Type): void
public "loadEffect"(arg0: $ResourceLocation$$Type): void
public static "getPositionShader"(): $ShaderInstance
public "reloadShaders"(arg0: $ResourceProvider$$Type): void
public "lightTexture"(): $LightTexture
public "setRenderHand"(arg0: boolean): void
public "togglePostEffect"(): void
public "getRenderDistance"(): float
public "getMapRenderer"(): $MapRenderer
public "getDepthFar"(): float
public static "getParticleShader"(): $ShaderInstance
public "invokeGetFov"(arg0: $Camera$$Type, arg1: float, arg2: boolean): double
public "invokeBobHurt"(arg0: $PoseStack$$Type, arg1: float): void
public "getRenderHand"(): boolean
public "getPanoramicMode"(): boolean
public "invokeBobView"(arg0: $PoseStack$$Type, arg1: float): void
public "render"(arg0: $DeltaTracker$$Type, arg1: boolean): void
public "preloadUiShader"(arg0: $ResourceProvider$$Type): void
public "getMainCamera"(): $Camera
public "currentEffect"(): $PostChain
public "shutdownEffect"(): void
public "getBlurEffect"(): $PostChain
public "createReloadListener"(): $PreparableReloadListener
public "checkEntityPostEffect"(arg0: $Entity$$Type): void
public "setRenderBlockOutline"(arg0: boolean): void
public static "getRendertypeGlintDirectShader"(): $ShaderInstance
public static "getRendertypeArmorGlintShader"(): $ShaderInstance
public static "getRendertypeEntityGlintShader"(): $ShaderInstance
public static "getRendertypeBeaconBeamShader"(): $ShaderInstance
public static "getRendertypeEnergySwirlShader"(): $ShaderInstance
public static "getRendertypeTextBackgroundShader"(): $ShaderInstance
public static "getPositionColorTexLightmapShader"(): $ShaderInstance
public static "getRendertypeEntityDecalShader"(): $ShaderInstance
public static "getRendertypeTextSeeThroughShader"(): $ShaderInstance
public static "getRendertypeLightningShader"(): $ShaderInstance
public static "getRendertypeEndGatewayShader"(): $ShaderInstance
public static "getRendertypeEntityAlphaShader"(): $ShaderInstance
public static "getRendertypeCrumblingShader"(): $ShaderInstance
public static "getRendertypeTranslucentShader"(): $ShaderInstance
public static "getRendertypeTripwireShader"(): $ShaderInstance
public static "getRendertypeEntitySolidShader"(): $ShaderInstance
public static "getRendertypeEntityCutoutShader"(): $ShaderInstance
public static "getRendertypeWaterMaskShader"(): $ShaderInstance
public static "getPositionColorLightmapShader"(): $ShaderInstance
public static "getRendertypeGuiOverlayShader"(): $ShaderInstance
public static "getRendertypeEntityNoOutlineShader"(): $ShaderInstance
public static "getRendertypeBreezeWindShader"(): $ShaderInstance
public static "getRendertypeCutoutMippedShader"(): $ShaderInstance
public static "getRendertypeEntityShadowShader"(): $ShaderInstance
public static "getRendertypeTextIntensityShader"(): $ShaderInstance
public static "getRendertypeEndPortalShader"(): $ShaderInstance
public static "getRendertypeEntityCutoutNoCullZOffsetShader"(): $ShaderInstance
public static "getRendertypeEntityTranslucentEmissiveShader"(): $ShaderInstance
public static "getRendertypeTextBackgroundSeeThroughShader"(): $ShaderInstance
public static "getRendertypeItemEntityTranslucentCullShader"(): $ShaderInstance
public "catnip$callGetFov"(arg0: $Camera$$Type, arg1: float, arg2: boolean): double
public "overlayTexture"(): $OverlayTexture
public "getMinecraft"(): $Minecraft
public "processBlurEffect"(arg0: float): void
get "rendertypeEntityTranslucentShader"(): $ShaderInstance
get "rendertypeGlintTranslucentShader"(): $ShaderInstance
get "rendertypeGuiGhostRecipeOverlayShader"(): $ShaderInstance
get "rendertypeEntityCutoutNoCullShader"(): $ShaderInstance
get "rendertypeEntityTranslucentCullShader"(): $ShaderInstance
get "rendertypeTextIntensitySeeThroughShader"(): $ShaderInstance
get "rendertypeArmorCutoutNoCullShader"(): $ShaderInstance
get "rendertypeEntitySmoothCutoutShader"(): $ShaderInstance
get "rendertypeGuiTextHighlightShader"(): $ShaderInstance
get "rendertypeArmorEntityGlintShader"(): $ShaderInstance
get "rendertypeEntityGlintDirectShader"(): $ShaderInstance
get "rendertypeTranslucentMovingBlockShader"(): $ShaderInstance
get "rendertypeLeashShader"(): $ShaderInstance
get "rendertypeLinesShader"(): $ShaderInstance
get "rendertypeEyesShader"(): $ShaderInstance
get "rendertypeCloudsShader"(): $ShaderInstance
get "rendertypeOutlineShader"(): $ShaderInstance
get "rendertypeGuiShader"(): $ShaderInstance
get "rendertypeCutoutShader"(): $ShaderInstance
get "rendertypeGlintShader"(): $ShaderInstance
get "rendertypeTextShader"(): $ShaderInstance
get "rendertypeSolidShader"(): $ShaderInstance
get "blurEffect_FancyMenu"(): $PostChain
get "positionTexColorShader"(): $ShaderInstance
get "positionColorShader"(): $ShaderInstance
get "positionTexShader"(): $ShaderInstance
get "panoramicMode"(): boolean
set "panoramicMode"(value: boolean)
get "positionShader"(): $ShaderInstance
set "renderHand"(value: boolean)
get "renderDistance"(): float
get "mapRenderer"(): $MapRenderer
get "depthFar"(): float
get "particleShader"(): $ShaderInstance
get "renderHand"(): boolean
get "panoramicMode"(): boolean
get "mainCamera"(): $Camera
get "blurEffect"(): $PostChain
set "renderBlockOutline"(value: boolean)
get "rendertypeGlintDirectShader"(): $ShaderInstance
get "rendertypeArmorGlintShader"(): $ShaderInstance
get "rendertypeEntityGlintShader"(): $ShaderInstance
get "rendertypeBeaconBeamShader"(): $ShaderInstance
get "rendertypeEnergySwirlShader"(): $ShaderInstance
get "rendertypeTextBackgroundShader"(): $ShaderInstance
get "positionColorTexLightmapShader"(): $ShaderInstance
get "rendertypeEntityDecalShader"(): $ShaderInstance
get "rendertypeTextSeeThroughShader"(): $ShaderInstance
get "rendertypeLightningShader"(): $ShaderInstance
get "rendertypeEndGatewayShader"(): $ShaderInstance
get "rendertypeEntityAlphaShader"(): $ShaderInstance
get "rendertypeCrumblingShader"(): $ShaderInstance
get "rendertypeTranslucentShader"(): $ShaderInstance
get "rendertypeTripwireShader"(): $ShaderInstance
get "rendertypeEntitySolidShader"(): $ShaderInstance
get "rendertypeEntityCutoutShader"(): $ShaderInstance
get "rendertypeWaterMaskShader"(): $ShaderInstance
get "positionColorLightmapShader"(): $ShaderInstance
get "rendertypeGuiOverlayShader"(): $ShaderInstance
get "rendertypeEntityNoOutlineShader"(): $ShaderInstance
get "rendertypeBreezeWindShader"(): $ShaderInstance
get "rendertypeCutoutMippedShader"(): $ShaderInstance
get "rendertypeEntityShadowShader"(): $ShaderInstance
get "rendertypeTextIntensityShader"(): $ShaderInstance
get "rendertypeEndPortalShader"(): $ShaderInstance
get "rendertypeEntityCutoutNoCullZOffsetShader"(): $ShaderInstance
get "rendertypeEntityTranslucentEmissiveShader"(): $ShaderInstance
get "rendertypeTextBackgroundSeeThroughShader"(): $ShaderInstance
get "rendertypeItemEntityTranslucentCullShader"(): $ShaderInstance
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
declare module "net.minecraft.client.renderer.entity.EntityRendererProvider$Context" {
import {$BlockRenderDispatcher, $BlockRenderDispatcher$$Type} from "net.minecraft.client.renderer.block.BlockRenderDispatcher"
import {$EntityRenderDispatcher, $EntityRenderDispatcher$$Type} from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"
import {$ItemInHandRenderer, $ItemInHandRenderer$$Type} from "net.minecraft.client.renderer.ItemInHandRenderer"
import {$Font, $Font$$Type} from "net.minecraft.client.gui.Font"
import {$ModelLayerLocation$$Type} from "net.minecraft.client.model.geom.ModelLayerLocation"
import {$ModelPart} from "net.minecraft.client.model.geom.ModelPart"
import {$ModelManager} from "net.minecraft.client.resources.model.ModelManager"
import {$ResourceManager, $ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"
import {$EntityModelSet, $EntityModelSet$$Type} from "net.minecraft.client.model.geom.EntityModelSet"
import {$ItemRenderer, $ItemRenderer$$Type} from "net.minecraft.client.renderer.entity.ItemRenderer"

export class $EntityRendererProvider$Context {
constructor(arg0: $EntityRenderDispatcher$$Type, arg1: $ItemRenderer$$Type, arg2: $BlockRenderDispatcher$$Type, arg3: $ItemInHandRenderer$$Type, arg4: $ResourceManager$$Type, arg5: $EntityModelSet$$Type, arg6: $Font$$Type)

public "getFont"(): $Font
public "getResourceManager"(): $ResourceManager
public "getItemRenderer"(): $ItemRenderer
public "getModelManager"(): $ModelManager
public "getEntityRenderDispatcher"(): $EntityRenderDispatcher
public "getItemInHandRenderer"(): $ItemInHandRenderer
public "getModelSet"(): $EntityModelSet
public "bakeLayer"(arg0: $ModelLayerLocation$$Type): $ModelPart
public "getBlockRenderDispatcher"(): $BlockRenderDispatcher
get "font"(): $Font
get "resourceManager"(): $ResourceManager
get "itemRenderer"(): $ItemRenderer
get "modelManager"(): $ModelManager
get "entityRenderDispatcher"(): $EntityRenderDispatcher
get "itemInHandRenderer"(): $ItemInHandRenderer
get "modelSet"(): $EntityModelSet
get "blockRenderDispatcher"(): $BlockRenderDispatcher
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
import {$RenderStateShardAccessor$$Interface} from "net.irisshaders.batchedentityrendering.mixin.RenderStateShardAccessor"
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
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShardAccessor$$Interface as $RenderStateShardAccessor$0$$Interface} from "net.irisshaders.iris.mixin.rendertype.RenderStateShardAccessor"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"

export class $RenderStateShard implements $RenderStateShardAccessor$0$$Interface, $RenderStateShardAccessor$$Interface {
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

public "getName"(): StringJS
public "toString"(): StringJS
public static "getNO_TRANSPARENCY$iris_$md$6d3b50$1"(): $RenderStateShard$TransparencyStateShard
public static "getGLINT_TRANSPARENCY$iris_$md$6d3b50$2"(): $RenderStateShard$TransparencyStateShard
public static "setupGlintTexturing"(arg0: float): void
public "clearRenderState"(): void
public "setupRenderState"(): void
public static "getTranslucentTransparency$iris_$md$6d3b50$0"(): $RenderStateShard$TransparencyStateShard
public static "getCRUMBLING_TRANSPARENCY$iris_$md$6d3b50$3"(): $RenderStateShard$TransparencyStateShard
public static "getTranslucentTransparency"(): $RenderStateShard$TransparencyStateShard
public static "getGLINT_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getCRUMBLING_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getNO_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
get "NO_TRANSPARENCY$iris_$md$6d3b50$1"(): $RenderStateShard$TransparencyStateShard
get "GLINT_TRANSPARENCY$iris_$md$6d3b50$2"(): $RenderStateShard$TransparencyStateShard
set "upGlintTexturing"(value: float)
get "upRenderState"(): void
get "translucentTransparency$iris_$md$6d3b50$0"(): $RenderStateShard$TransparencyStateShard
get "CRUMBLING_TRANSPARENCY$iris_$md$6d3b50$3"(): $RenderStateShard$TransparencyStateShard
get "translucentTransparency"(): $RenderStateShard$TransparencyStateShard
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
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$ModelBlockRenderer$Cache} from "net.minecraft.client.renderer.block.ModelBlockRenderer$Cache"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockColors$$Type} from "net.minecraft.client.color.block.BlockColors"
import {$PoseStack$Pose$$Type} from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ModelBlockRenderer {
static readonly "CACHE": $ThreadLocal<($ModelBlockRenderer$Cache)>
static readonly "DIRECTIONS": ($Direction)[]

constructor(arg0: $BlockColors$$Type)

public static "clearCache"(): void
public "calculateShape"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: (integer)[], arg4: $Direction$$Type, arg5: (float)[], arg6: $BitSet$$Type): void
public "renderModel"(arg0: $PoseStack$Pose$$Type, arg1: $VertexConsumer$$Type, arg2: $BlockState$$Type, arg3: $BakedModel$$Type, arg4: float, arg5: float, arg6: float, arg7: integer, arg8: integer, arg9: $ModelData$$Type, arg10: $RenderType$$Type): void
/**
 * 
 * @deprecated
 */
public "renderModel"(arg0: $PoseStack$Pose$$Type, arg1: $VertexConsumer$$Type, arg2: $BlockState$$Type, arg3: $BakedModel$$Type, arg4: float, arg5: float, arg6: float, arg7: integer, arg8: integer): void
public static "enableCaching"(): void
/**
 * 
 * @deprecated
 */
public "tesselateBlock"(arg0: $BlockAndTintGetter$$Type, arg1: $BakedModel$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $PoseStack$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: $RandomSource$$Type, arg8: long, arg9: integer): void
public "tesselateBlock"(arg0: $BlockAndTintGetter$$Type, arg1: $BakedModel$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $PoseStack$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: $RandomSource$$Type, arg8: long, arg9: integer, arg10: $ModelData$$Type, arg11: $RenderType$$Type): void
/**
 * 
 * @deprecated
 */
public "tesselateWithoutAO"(arg0: $BlockAndTintGetter$$Type, arg1: $BakedModel$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $PoseStack$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: $RandomSource$$Type, arg8: long, arg9: integer): void
public "tesselateWithoutAO"(arg0: $BlockAndTintGetter$$Type, arg1: $BakedModel$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $PoseStack$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: $RandomSource$$Type, arg8: long, arg9: integer, arg10: $ModelData$$Type, arg11: $RenderType$$Type): void
public "tesselateWithAO"(arg0: $BlockAndTintGetter$$Type, arg1: $BakedModel$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $PoseStack$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: $RandomSource$$Type, arg8: long, arg9: integer, arg10: $ModelData$$Type, arg11: $RenderType$$Type): void
/**
 * 
 * @deprecated
 */
public "tesselateWithAO"(arg0: $BlockAndTintGetter$$Type, arg1: $BakedModel$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $PoseStack$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: $RandomSource$$Type, arg8: long, arg9: integer): void
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

public "mipLevel"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "width"(): integer
public "regions"(): $Map<($ResourceLocation), ($TextureAtlasSprite)>
public "waitForUpload"(): $CompletableFuture<($SpriteLoader$Preparations)>
public "missing"(): $TextureAtlasSprite
public "height"(): integer
public "readyForUpload"(): $CompletableFuture<(void)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteLoader$Preparations$$Type = ({"readyForUpload"?: $CompletableFuture$$Type<(void)>, "mipLevel"?: integer, "regions"?: $Map$$Type<($ResourceLocation$$Type), ($TextureAtlasSprite$$Type)>, "height"?: integer, "missing"?: $TextureAtlasSprite$$Type, "width"?: integer}) | ([readyForUpload?: $CompletableFuture$$Type<(void)>, mipLevel?: integer, regions?: $Map$$Type<($ResourceLocation$$Type), ($TextureAtlasSprite$$Type)>, height?: integer, missing?: $TextureAtlasSprite$$Type, width?: integer]);
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
import {$Program$Type$$Type} from "com.mojang.blaze3d.shaders.Program$Type"
import {$Effect$$Interface} from "com.mojang.blaze3d.shaders.Effect"
import {$IntSupplier$$Type} from "java.util.function.IntSupplier"

export class $EffectInstance implements $Effect$$Interface, $AutoCloseable$$Interface {
constructor(arg0: $ResourceProvider$$Type, arg1: StringJS)

public static "getOrCreate"(arg0: $ResourceProvider$$Type, arg1: $Program$Type$$Type, arg2: StringJS): $EffectProgram
public "getUniform"(arg0: StringJS): $Uniform
public "getName"(): StringJS
public "clear"(): void
public "apply"(): void
public "getId"(): integer
public "close"(): void
public "safeGetUniform"(arg0: StringJS): $AbstractUniform
public "attachToProgram"(): void
public "getVertexProgram"(): $Program
public "getFragmentProgram"(): $Program
public "setSampler"(arg0: StringJS, arg1: $IntSupplier$$Type): void
public "markDirty"(): void
public static "parseBlendNode"(arg0: $JsonObject$$Type): $BlendMode
get "name"(): StringJS
get "id"(): integer
get "vertexProgram"(): $Program
get "fragmentProgram"(): $Program
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
import {$SectionRenderDispatcher$RenderSection$CompileTask} from "net.minecraft.client.renderer.chunk.SectionRenderDispatcher$RenderSection$CompileTask"
import {$VertexBuffer} from "com.mojang.blaze3d.vertex.VertexBuffer"
import {$AtomicReference} from "java.util.concurrent.atomic.AtomicReference"
import {$BlockPos$MutableBlockPos} from "net.minecraft.core.BlockPos$MutableBlockPos"
import {$Collection$$Type} from "java.util.Collection"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$VertexSorting} from "com.mojang.blaze3d.vertex.VertexSorting"
import {$RenderRegionCache$$Type} from "net.minecraft.client.renderer.chunk.RenderRegionCache"
import {$SectionRenderDispatcher$CompiledSection, $SectionRenderDispatcher$CompiledSection$$Type} from "net.minecraft.client.renderer.chunk.SectionRenderDispatcher$CompiledSection"
import {$SectionRenderDispatcher, $SectionRenderDispatcher$$Type} from "net.minecraft.client.renderer.chunk.SectionRenderDispatcher"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$AABB} from "net.minecraft.world.phys.AABB"
import {$RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export class $SectionRenderDispatcher$RenderSection {
readonly "compiled": $AtomicReference<($SectionRenderDispatcher$CompiledSection)>
static readonly "SIZE": integer
readonly "origin": $BlockPos$MutableBlockPos
readonly "this$0": $SectionRenderDispatcher
readonly "index": integer

constructor(arg0: $SectionRenderDispatcher$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer)

public "isDirty"(): boolean
public "getBuffer"(arg0: $RenderType$$Type): $VertexBuffer
public "hasAllNeighbors"(): boolean
public "getRelativeOrigin"(arg0: $Direction$$Type): $BlockPos
public "getOrigin"(): $BlockPos
public "updateGlobalBlockEntities"(arg0: $Collection$$Type<($BlockEntity$$Type)>): void
public "rebuildSectionAsync"(arg0: $SectionRenderDispatcher$$Type, arg1: $RenderRegionCache$$Type): void
public "setDirty"(arg0: boolean): void
public "getCompiled"(): $SectionRenderDispatcher$CompiledSection
public "setNotDirty"(): void
public "isDirtyFromPlayer"(): boolean
public "getBoundingBox"(): $AABB
public "createVertexSorting"(): $VertexSorting
public "setOrigin"(arg0: integer, arg1: integer, arg2: integer): void
public "compileSync"(arg0: $RenderRegionCache$$Type): void
public "releaseBuffers"(): void
public "resortTransparency"(arg0: $RenderType$$Type, arg1: $SectionRenderDispatcher$$Type): boolean
public "isAxisAlignedWith"(arg0: integer, arg1: integer, arg2: integer): boolean
public "createCompileTask"(arg0: $RenderRegionCache$$Type): $SectionRenderDispatcher$RenderSection$CompileTask
public "setCompiled"(arg0: $SectionRenderDispatcher$CompiledSection$$Type): void
public "getDistToPlayerSqr"(): double
public "cancelTasks"(): boolean
get "dirty"(): boolean
set "dirty"(value: boolean)
get "notDirty"(): void
get "dirtyFromPlayer"(): boolean
get "boundingBox"(): $AABB
get "distToPlayerSqr"(): double
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
declare module "net.minecraft.client.renderer.chunk.SectionCompiler$Results" {
import {$MeshData} from "com.mojang.blaze3d.vertex.MeshData"
import {$Map} from "java.util.Map"
import {$List} from "java.util.List"
import {$MeshData$SortState} from "com.mojang.blaze3d.vertex.MeshData$SortState"
import {$VisibilitySet} from "net.minecraft.client.renderer.chunk.VisibilitySet"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$RenderType} from "net.minecraft.client.renderer.RenderType"

export class $SectionCompiler$Results {
 "transparencyState": $MeshData$SortState
 "visibilitySet": $VisibilitySet
readonly "globalBlockEntities": $List<($BlockEntity)>
readonly "blockEntities": $List<($BlockEntity)>
readonly "renderedLayers": $Map<($RenderType), ($MeshData)>

constructor()

public "release"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SectionCompiler$Results$$Type = ($SectionCompiler$Results);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SectionCompiler$Results$$Original = $SectionCompiler$Results;}
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
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
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
public static "getTranslucentTransparency"(): $RenderStateShard$TransparencyStateShard
public static "getGLINT_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getCRUMBLING_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getNO_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
get "translucentTransparency"(): $RenderStateShard$TransparencyStateShard
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
import {$List$$Type} from "java.util.List"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$BlockModel$$Type} from "net.minecraft.client.renderer.block.model.BlockModel"
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

constructor()
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
import {$Function$$Type} from "java.util.function.Function"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
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

public "toString"(): StringJS
public "isResolved"(): boolean
public static "fromStream"(arg0: $Reader$$Type): $BlockModel
public static "fromString"(arg0: StringJS): $BlockModel
public "bake"(arg0: $ModelBaker$$Type, arg1: $BlockModel$$Type, arg2: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>, arg3: $ModelState$$Type, arg4: boolean): $BakedModel
public "bake"(arg0: $ModelBaker$$Type, arg1: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>, arg2: $ModelState$$Type): $BakedModel
public "getTransforms"(): $ItemTransforms
public "getOverrides"(arg0: $ModelBaker$$Type, arg1: $BlockModel$$Type, arg2: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>): $ItemOverrides
public "getOverrides"(): $List<($ItemOverride)>
/**
 * 
 * @deprecated
 */
public "getElements"(): $List<($BlockElement)>
public "setFusionModel"(fusionModel: $ModelInstance$$Type): void
public "getFusionModel"(): $ModelInstance
public "hasTexture"(arg0: StringJS): boolean
public "getDependencies"(): $Collection<($ResourceLocation)>
public "getMaterial"(arg0: StringJS): $Material
public "resolveParents"(arg0: $Function$$Type<($ResourceLocation), ($UnbakedModel$$Type)>): void
public "hasAmbientOcclusion"(): boolean
public static "isTextureReference"(arg0: StringJS): boolean
public "getRootModel"(): $BlockModel
public "bakeVanilla"(arg0: $ModelBaker$$Type, arg1: $BlockModel$$Type, arg2: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>, arg3: $ModelState$$Type, arg4: boolean): $BakedModel
public "findTextureEntry"(arg0: StringJS): $Either<($Material), (StringJS)>
public "getParentLocation"(): $ResourceLocation
public "getGuiLight"(): $BlockModel$GuiLight
public static "bakeFace"(arg0: $BlockElement$$Type, arg1: $BlockElementFace$$Type, arg2: $TextureAtlasSprite$$Type, arg3: $Direction$$Type, arg4: $ModelState$$Type): $BakedQuad
get "resolved"(): boolean
set "fusionModel"(value: $ModelInstance$$Type)
get "fusionModel"(): $ModelInstance
get "dependencies"(): $Collection<($ResourceLocation)>
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
declare module "net.minecraft.client.renderer.chunk.RenderChunkRegion" {
import {$LevelLightEngine} from "net.minecraft.world.level.lighting.LevelLightEngine"
import {$BlockHitResult} from "net.minecraft.world.phys.BlockHitResult"
import {$LevelHeightAccessor} from "net.minecraft.world.level.LevelHeightAccessor"
import {$Optional} from "java.util.Optional"
import {$Long2ObjectMap$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectMap"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ColorResolver$$Type} from "net.minecraft.world.level.ColorResolver"
import {$Holder} from "net.minecraft.core.Holder"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$BlockAndTintGetter$$Interface} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$Stream} from "java.util.stream.Stream"
import {$ClipBlockStateContext$$Type} from "net.minecraft.world.level.ClipBlockStateContext"
import {$RenderDataMapConsumer$$Interface} from "net.fabricmc.fabric.impl.blockview.client.RenderDataMapConsumer"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$LightLayer$$Type} from "net.minecraft.world.level.LightLayer"
import {$AuxiliaryLightManager} from "net.neoforged.neoforge.common.world.AuxiliaryLightManager"
import {$RenderAttachedBlockView$$Interface} from "net.fabricmc.fabric.api.rendering.data.v1.RenderAttachedBlockView"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$RenderChunk, $RenderChunk$$Type} from "net.minecraft.client.renderer.chunk.RenderChunk"
import {$ClipContext$$Type} from "net.minecraft.world.level.ClipContext"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$Long2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"

export class $RenderChunkRegion implements $BlockAndTintGetter$$Interface, $RenderDataMapConsumer$$Interface, $RenderAttachedBlockView$$Interface {
static readonly "RADIUS": integer
readonly "level": $Level
readonly "chunks": ($RenderChunk)[]
static readonly "SIZE": integer

/**
 * 
 * @deprecated
 */
constructor(arg0: $Level$$Type, arg1: integer, arg2: integer, arg3: ($RenderChunk$$Type)[])
constructor(arg0: $Level$$Type, arg1: integer, arg2: integer, arg3: ($RenderChunk$$Type)[], arg4: $Long2ObjectFunction$$Type<($ModelData$$Type)>)

public static "index"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): integer
public "getFluidState"(arg0: $BlockPos$$Type): $FluidState
public "getBlockEntity"(arg0: $BlockPos$$Type): $BlockEntity
public "getLightEngine"(): $LevelLightEngine
public "getBlockState"(arg0: $BlockPos$$Type): $BlockState
public "getBlockEntityRenderData"(arg0: $BlockPos$$Type): any
public "getShade"(arg0: $Direction$$Type, arg1: boolean): float
public "getShade"(arg0: float, arg1: float, arg2: float, arg3: boolean): float
public "hasBiomes"(): boolean
public "getAuxLightManager"(arg0: $ChunkPos$$Type): $AuxiliaryLightManager
public "getBlockTint"(arg0: $BlockPos$$Type, arg1: $ColorResolver$$Type): integer
public "getBiomeFabric"(arg0: $BlockPos$$Type): $Holder
public "getModelData"(arg0: $BlockPos$$Type): $ModelData
public "getHeight"(): integer
public "getMinBuildHeight"(): integer
public "fabric_acceptRenderDataMap"(arg0: $Long2ObjectMap$$Type): void
public "canSeeSky"(arg0: $BlockPos$$Type): boolean
public "getBrightness"(arg0: $LightLayer$$Type, arg1: $BlockPos$$Type): integer
public "getRawBrightness"(arg0: $BlockPos$$Type, arg1: integer): integer
/**
 * 
 * @deprecated
 */
public "getBlockEntityRenderAttachment"(arg0: $BlockPos$$Type): any
public "clipWithInteractionOverride"(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: $BlockPos$$Type, arg3: $VoxelShape$$Type, arg4: $BlockState$$Type): $BlockHitResult
public "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$$Type, arg1: $BlockEntityType$$Type<(T)>): $Optional<(T)>
public "getLightEmission"(arg0: $BlockPos$$Type): integer
public "clip"(arg0: $ClipContext$$Type): $BlockHitResult
public "getBlockFloorHeight"(arg0: $BlockPos$$Type): double
public "getBlockFloorHeight"(arg0: $VoxelShape$$Type, arg1: $Supplier$$Type<($VoxelShape$$Type)>): double
public "getBlockStates"(arg0: $AABB$$Type): $Stream<($BlockState)>
public "isBlockInLine"(arg0: $ClipBlockStateContext$$Type): $BlockHitResult
public "getMaxLightLevel"(): integer
public static "traverseBlocks"<T, C>(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: C, arg3: $BiFunction$$Type<(C), ($BlockPos), (T)>, arg4: $Function$$Type<(C), (T)>): T
public static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
public "getSectionYFromSectionIndex"(arg0: integer): integer
public "getSectionIndexFromSectionY"(arg0: integer): integer
public "getMaxBuildHeight"(): integer
public "getSectionIndex"(arg0: integer): integer
public "getMaxSection"(): integer
public "getMinSection"(): integer
public "getSectionsCount"(): integer
public "isOutsideBuildHeight"(arg0: $BlockPos$$Type): boolean
public "isOutsideBuildHeight"(arg0: integer): boolean
public "getAuxLightManager"(arg0: $BlockPos$$Type): $AuxiliaryLightManager
get "lightEngine"(): $LevelLightEngine
get "height"(): integer
get "minBuildHeight"(): integer
get "maxLightLevel"(): integer
get "maxBuildHeight"(): integer
get "maxSection"(): integer
get "minSection"(): integer
get "sectionsCount"(): integer
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
declare module "net.minecraft.client.renderer.block.model.BakedQuad" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$BakedQuadView$$Interface} from "net.caffeinemc.mods.sodium.client.model.quad.BakedQuadView"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BakedQuadAccess$$Interface} from "malte0811.ferritecore.mixin.accessors.BakedQuadAccess"
import {$ModelQuadFacing} from "net.caffeinemc.mods.sodium.client.model.quad.properties.ModelQuadFacing"

export class $BakedQuad implements $BakedQuadView$$Interface, $BakedQuadAccess$$Interface {
 "tintIndex": integer
 "vertices": (integer)[]
readonly "sprite": $TextureAtlasSprite
 "direction": $Direction

constructor(arg0: (integer)[], arg1: integer, arg2: $Direction$$Type, arg3: $TextureAtlasSprite$$Type, arg4: boolean, arg5: boolean)
constructor(arg0: (integer)[], arg1: integer, arg2: $Direction$$Type, arg3: $TextureAtlasSprite$$Type, arg4: boolean)

public "getLight"(arg0: integer): integer
public "getFlags"(): integer
public "getX"(arg0: integer): float
public "getZ"(arg0: integer): float
public "getY"(arg0: integer): float
public "getTintIndex"(): integer
public "setVertices"(arg0: (integer)[]): void
public "getFaceNormal"(): integer
public "getLightFace"(): $Direction
public "getColorIndex"(): integer
public "getVertexNormal"(arg0: integer): integer
public "getSprite"(): $TextureAtlasSprite
public "getColor"(arg0: integer): integer
public "hasAmbientOcclusion"(): boolean
public "isTinted"(): boolean
public "getTexU"(arg0: integer): float
public "getTexV"(arg0: integer): float
public "getVertices"(): (integer)[]
public "getDirection"(): $Direction
public "isShade"(): boolean
public "hasAO"(): boolean
public "getNormalFace"(): $ModelQuadFacing
public "hasShade"(): boolean
public "hasColor"(): boolean
public "getAccurateNormal"(arg0: integer): integer
public "calculateNormal"(): integer
get "flags"(): integer
get "faceNormal"(): integer
get "lightFace"(): $Direction
get "colorIndex"(): integer
get "tinted"(): boolean
get "shade"(): boolean
get "normalFace"(): $ModelQuadFacing
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
declare module "net.minecraft.client.renderer.chunk.SectionRenderDispatcher" {
import {$VertexBuffer$$Type} from "com.mojang.blaze3d.vertex.VertexBuffer"
import {$SectionRenderDispatcher$RenderSection$CompileTask$$Type} from "net.minecraft.client.renderer.chunk.SectionRenderDispatcher$RenderSection$CompileTask"
import {$RenderBuffers$$Type} from "net.minecraft.client.renderer.RenderBuffers"
import {$ByteBufferBuilder$Result$$Type} from "com.mojang.blaze3d.vertex.ByteBufferBuilder$Result"
import {$LevelRenderer, $LevelRenderer$$Type} from "net.minecraft.client.renderer.LevelRenderer"
import {$SectionCompiler} from "net.minecraft.client.renderer.chunk.SectionCompiler"
import {$BlockEntityRenderDispatcher$$Type} from "net.minecraft.client.renderer.blockentity.BlockEntityRenderDispatcher"
import {$SectionRenderDispatcher$RenderSection$$Type} from "net.minecraft.client.renderer.chunk.SectionRenderDispatcher$RenderSection"
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$RenderRegionCache$$Type} from "net.minecraft.client.renderer.chunk.RenderRegionCache"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$MeshData$$Type} from "com.mojang.blaze3d.vertex.MeshData"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$BlockRenderDispatcher$$Type} from "net.minecraft.client.renderer.block.BlockRenderDispatcher"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$SectionBufferBuilderPack} from "net.minecraft.client.renderer.SectionBufferBuilderPack"

export class $SectionRenderDispatcher {
readonly "renderer": $LevelRenderer
readonly "sectionCompiler": $SectionCompiler
 "level": $ClientLevel
readonly "fixedBuffers": $SectionBufferBuilderPack

constructor(arg0: $ClientLevel$$Type, arg1: $LevelRenderer$$Type, arg2: $Executor$$Type, arg3: $RenderBuffers$$Type, arg4: $BlockRenderDispatcher$$Type, arg5: $BlockEntityRenderDispatcher$$Type)

public "schedule"(arg0: $SectionRenderDispatcher$RenderSection$CompileTask$$Type): void
public "setLevel"(arg0: $ClientLevel$$Type): void
public "dispose"(): void
public "isQueueEmpty"(): boolean
public "uploadAllPendingUploads"(): void
public "getStats"(): StringJS
public "blockUntilClear"(): void
public "rebuildSectionSync"(arg0: $SectionRenderDispatcher$RenderSection$$Type, arg1: $RenderRegionCache$$Type): void
public "setCamera"(arg0: $Vec3$$Type): void
public "getFreeBufferCount"(): integer
public "getCameraPosition"(): $Vec3
public "uploadSectionLayer"(arg0: $MeshData$$Type, arg1: $VertexBuffer$$Type): $CompletableFuture<(void)>
public "getToUpload"(): integer
public "getToBatchCount"(): integer
public "uploadSectionIndexBuffer"(arg0: $ByteBufferBuilder$Result$$Type, arg1: $VertexBuffer$$Type): $CompletableFuture<(void)>
get "queueEmpty"(): boolean
get "stats"(): StringJS
set "camera"(value: $Vec3$$Type)
get "freeBufferCount"(): integer
get "cameraPosition"(): $Vec3
get "toUpload"(): integer
get "toBatchCount"(): integer
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
declare module "net.minecraft.client.renderer.culling.Frustum" {
import {$ViewportProvider$$Interface} from "net.caffeinemc.mods.sodium.client.render.viewport.ViewportProvider"
import {$Viewport} from "net.caffeinemc.mods.sodium.client.render.viewport.Viewport"
import {$AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"

export class $Frustum implements $ViewportProvider$$Interface {
static readonly "OFFSET_STEP": integer

constructor(arg0: $Matrix4f$$Type, arg1: $Matrix4f$$Type)
constructor(arg0: $Frustum$$Type)

public "prepare"(arg0: double, arg1: double, arg2: double): void
public "sodium$createViewport"(): $Viewport
public "offsetToFullyIncludeCameraCube"(arg0: integer): $Frustum
public "isVisible"(arg0: $AABB$$Type): boolean
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
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
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

public static "getTranslucentTransparency"(): $RenderStateShard$TransparencyStateShard
public static "getGLINT_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getCRUMBLING_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getNO_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
get "translucentTransparency"(): $RenderStateShard$TransparencyStateShard
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
declare module "net.minecraft.client.renderer.OutlineBufferSource" {
import {$OutlineBufferSourceAccessor$$Interface} from "net.irisshaders.batchedentityrendering.mixin.OutlineBufferSourceAccessor"
import {$BufferSourceExtension$$Interface} from "com.supermartijn642.fusion.extensions.BufferSourceExtension"
import {$MultiBufferSource$$Interface} from "net.minecraft.client.renderer.MultiBufferSource"
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"
import {$SequencedMap$$Type} from "java.util.SequencedMap"
import {$ByteBufferBuilder$$Type} from "com.mojang.blaze3d.vertex.ByteBufferBuilder"
import {$VertexConsumer} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export class $OutlineBufferSource implements $MultiBufferSource$$Interface, $OutlineBufferSourceAccessor$$Interface, $BufferSourceExtension$$Interface {
constructor(arg0: $MultiBufferSource$BufferSource$$Type)

public "setColor"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "getBuffer"(arg0: $RenderType$$Type): $VertexConsumer
public "endOutlineBatch"(): void
public "getOutlineBufferSource"(): $MultiBufferSource$BufferSource
public "fusionGetLastRenderType"(): $RenderType
public static "immediate"(arg0: $ByteBufferBuilder$$Type): $MultiBufferSource$BufferSource
public static "immediateWithBuffers"(arg0: $SequencedMap$$Type<($RenderType$$Type), ($ByteBufferBuilder$$Type)>, arg1: $ByteBufferBuilder$$Type): $MultiBufferSource$BufferSource
get "outlineBufferSource"(): $MultiBufferSource$BufferSource
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
import {$SpriteContentsExtension$$Interface} from "net.irisshaders.iris.pbr.texture.SpriteContentsExtension"
import {$IntStream} from "java.util.stream.IntStream"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$SpriteContentsExtension$$Interface as $SpriteContentsExtension$0$$Interface} from "com.supermartijn642.fusion.extensions.SpriteContentsExtension"
import {$SpriteContents$AnimatedTexture} from "net.minecraft.client.renderer.texture.SpriteContents$AnimatedTexture"
import {$SpriteContentsExtension$$Interface as $SpriteContentsExtension$2$$Interface} from "net.caffeinemc.mods.sodium.client.render.texture.SpriteContentsExtension"
import {$SpriteContentsAccessor$$Interface as $SpriteContentsAccessor$0$$Interface} from "net.irisshaders.iris.mixin.texture.SpriteContentsAccessor"
import {$FrameSize$$Type} from "net.minecraft.client.resources.metadata.animation.FrameSize"
import {$Stitcher$Entry$$Interface} from "net.minecraft.client.renderer.texture.Stitcher$Entry"
import {$SpriteContents$Ticker} from "net.minecraft.client.renderer.texture.SpriteContents$Ticker"
import {$SpriteContentsExtension$$Interface as $SpriteContentsExtension$3$$Interface} from "net.caffeinemc.mods.sodium.client.render.chunk.compile.pipeline.SpriteContentsExtension"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$SpriteContentsInvoker$$Interface} from "net.caffeinemc.mods.sodium.mixin.features.textures.SpriteContentsInvoker"
import {$PBRSpriteHolder} from "net.irisshaders.iris.pbr.texture.PBRSpriteHolder"
import {$SpriteContentsAccessor$$Interface} from "net.caffeinemc.mods.sodium.mixin.features.textures.animations.upload.SpriteContentsAccessor"
import {$NativeImage, $NativeImage$$Type} from "com.mojang.blaze3d.platform.NativeImage"
import {$ResourceMetadata, $ResourceMetadata$$Type} from "net.minecraft.server.packs.resources.ResourceMetadata"
import {$SpriteTicker} from "net.minecraft.client.renderer.texture.SpriteTicker"
import {$Pair} from "com.supermartijn642.fusion.api.util.Pair"
import {$SpriteContentsExtension$$Interface as $SpriteContentsExtension$1$$Interface} from "net.irisshaders.iris.pbr.SpriteContentsExtension"
import {$IPotentiallyInvisibleSpriteContents$$Interface} from "com.railwayteam.railways.mixin_interfaces.IPotentiallyInvisibleSpriteContents"

export class $SpriteContents implements $Stitcher$Entry$$Interface, $AutoCloseable$$Interface, $SpriteContentsExtension$1$$Interface, $SpriteContentsAccessor$0$$Interface, $SpriteContentsExtension$$Interface, $SpriteContentsExtension$0$$Interface, $SpriteContentsInvoker$$Interface, $SpriteContentsExtension$2$$Interface, $SpriteContentsAccessor$$Interface, $SpriteContentsExtension$3$$Interface, $IPotentiallyInvisibleSpriteContents$$Interface {
 "animatedTexture": $SpriteContents$AnimatedTexture
 "byMipLevel": ($NativeImage)[]
 "originalImage": $NativeImage

constructor(arg0: $ResourceLocation$$Type, arg1: $FrameSize$$Type, arg2: $NativeImage$$Type, arg3: $ResourceMetadata$$Type)

public "name"(): $ResourceLocation
public "toString"(): StringJS
public "close"(): void
public "width"(): integer
public "metadata"(): $ResourceMetadata
public "upload"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: ($NativeImage$$Type)[]): void
public "getImages"(): ($NativeImage)[]
public "getPBRHolder"(): $PBRSpriteHolder
public "uploadFirstFrame"(arg0: integer, arg1: integer): void
public "height"(): integer
public "getOriginalImage"(): $NativeImage
public "increaseMipLevel"(arg0: integer): void
public "sodium$isActive"(): boolean
public "getUniqueFrames"(): $IntStream
public "getCreatedTicker"(): $SpriteContents$Ticker
public "railways$isVisible"(): boolean
public "getFrameCount"(): integer
public "isTransparent"(arg0: integer, arg1: integer, arg2: integer): boolean
public "getAnimatedTexture"(): $SpriteContents$AnimatedTexture
public "invokeUpload"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: ($NativeImage$$Type)[]): void
public "sodium$setActive"(arg0: boolean): void
public "sodium$hasTransparentPixels"(): boolean
public "railways$shouldDoInvisibility"(): boolean
public "sodium$hasTranslucentPixels"(): boolean
public "getOrCreatePBRHolder"(): $PBRSpriteHolder
public "createTicker"(): $SpriteTicker
public "sodium$hasAnimation"(): boolean
public "railways$uploadFrame"(arg0: boolean): void
public "fusionTextureMetadata"(): $Pair
public "clearFusionTextureMetadata"(): void
get "images"(): ($NativeImage)[]
get "PBRHolder"(): $PBRSpriteHolder
get "uniqueFrames"(): $IntStream
get "createdTicker"(): $SpriteContents$Ticker
get "frameCount"(): integer
get "orCreatePBRHolder"(): $PBRSpriteHolder
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
public "getItemRenderer"(): $ItemRenderer
public "getEntityRenderer"(): $EntityRenderDispatcher
public "getModelSet"(): $EntityModelSet
public "getBlockEntityRenderDispatcher"(): $BlockEntityRenderDispatcher
public "bakeLayer"(arg0: $ModelLayerLocation$$Type): $ModelPart
public "getBlockRenderDispatcher"(): $BlockRenderDispatcher
get "font"(): $Font
get "itemRenderer"(): $ItemRenderer
get "entityRenderer"(): $EntityRenderDispatcher
get "modelSet"(): $EntityModelSet
get "blockEntityRenderDispatcher"(): $BlockEntityRenderDispatcher
get "blockRenderDispatcher"(): $BlockRenderDispatcher
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
declare module "net.minecraft.client.renderer.texture.SimpleTexture" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$SimpleTexture$TextureImage} from "net.minecraft.client.renderer.texture.SimpleTexture$TextureImage"
import {$SimpleTextureAccessor$$Interface} from "net.irisshaders.iris.mixin.texture.SimpleTextureAccessor"
import {$Logger} from "org.slf4j.Logger"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"
import {$AbstractTexture} from "net.minecraft.client.renderer.texture.AbstractTexture"

export class $SimpleTexture extends $AbstractTexture implements $SimpleTextureAccessor$$Interface {
static readonly "NOT_ASSIGNED": integer
 "mipmap": boolean
 "blur": boolean
static readonly "LOGGER": $Logger
readonly "location": $ResourceLocation
 "id": integer

constructor(arg0: $ResourceLocation$$Type)

public "load"(arg0: $ResourceManager$$Type): void
public "getLocation"(): $ResourceLocation
public "getTextureImage"(arg0: $ResourceManager$$Type): $SimpleTexture$TextureImage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleTexture$$Type = ($SimpleTexture);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleTexture$$Original = $SimpleTexture;}
declare module "net.minecraft.client.renderer.ItemInHandRenderer" {
import {$ItemDisplayContext$$Type} from "net.minecraft.world.item.ItemDisplayContext"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MultiBufferSource$BufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$ItemInHandRenderer$HandRenderSelection} from "net.minecraft.client.renderer.ItemInHandRenderer$HandRenderSelection"
import {$ItemRenderer$$Type} from "net.minecraft.client.renderer.entity.ItemRenderer"
import {$LocalPlayer$$Type} from "net.minecraft.client.player.LocalPlayer"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$EntityRenderDispatcher$$Type} from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"

export class $ItemInHandRenderer {
 "mainHandItem": $ItemStack
 "offHandItem": $ItemStack

constructor(arg0: $Minecraft$$Type, arg1: $EntityRenderDispatcher$$Type, arg2: $ItemRenderer$$Type)

public "tick"(): void
public "renderHandsWithItems"(arg0: float, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$BufferSource$$Type, arg3: $LocalPlayer$$Type, arg4: integer): void
public "itemUsed"(arg0: $InteractionHand$$Type): void
public "renderItem"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: $ItemDisplayContext$$Type, arg3: boolean, arg4: $PoseStack$$Type, arg5: $MultiBufferSource$$Type, arg6: integer): void
public static "evaluateWhichHandsToRender"(arg0: $LocalPlayer$$Type): $ItemInHandRenderer$HandRenderSelection
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
declare module "net.minecraft.client.renderer.block.model.multipart.MultiPart" {
import {$Selector, $Selector$$Type} from "net.minecraft.client.renderer.block.model.multipart.Selector"
import {$TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$Collection} from "java.util.Collection"
import {$Material$$Type} from "net.minecraft.client.resources.model.Material"
import {$BakedModel} from "net.minecraft.client.resources.model.BakedModel"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ModelState$$Type} from "net.minecraft.client.resources.model.ModelState"
import {$UnbakedModel$$Type, $UnbakedModel$$Interface} from "net.minecraft.client.resources.model.UnbakedModel"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$MultiVariant} from "net.minecraft.client.renderer.block.model.MultiVariant"
import {$Function$$Type} from "java.util.function.Function"
import {$Set} from "java.util.Set"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ModelBaker$$Type} from "net.minecraft.client.resources.model.ModelBaker"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MultiPart implements $UnbakedModel$$Interface {
readonly "definition": $StateDefinition<($Block), ($BlockState)>

constructor(arg0: $StateDefinition$$Type<($Block$$Type), ($BlockState$$Type)>, arg1: $List$$Type<($Selector$$Type)>)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getMultiVariants"(): $Set<($MultiVariant)>
public "bake"(arg0: $ModelBaker$$Type, arg1: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>, arg2: $ModelState$$Type): $BakedModel
public "getDependencies"(): $Collection<($ResourceLocation)>
public "resolveParents"(arg0: $Function$$Type<($ResourceLocation), ($UnbakedModel$$Type)>): void
public "getSelectors"(): $List<($Selector)>
get "multiVariants"(): $Set<($MultiVariant)>
get "dependencies"(): $Collection<($ResourceLocation)>
get "selectors"(): $List<($Selector)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiPart$$Type = ($MultiPart);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiPart$$Original = $MultiPart;}
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
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
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
public static "getTranslucentTransparency"(): $RenderStateShard$TransparencyStateShard
public static "getGLINT_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getCRUMBLING_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getNO_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
get "translucentTransparency"(): $RenderStateShard$TransparencyStateShard
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
public "setupOverlayColor"(): void
public static "pack"(arg0: float, arg1: boolean): integer
public static "pack"(arg0: integer, arg1: integer): integer
public "teardownOverlayColor"(): void
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
declare module "net.minecraft.client.renderer.entity.player.PlayerRenderer" {
import {$RenderLayer} from "net.minecraft.client.renderer.entity.layers.RenderLayer"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$PlayerModel} from "net.minecraft.client.model.PlayerModel"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List} from "java.util.List"
import {$EntityRendererProvider$Context$$Type} from "net.minecraft.client.renderer.entity.EntityRendererProvider$Context"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$ETFPlayerSkinHolder$$Interface} from "traben.entity_texture_features.features.player.ETFPlayerSkinHolder"
import {$AbstractClientPlayer, $AbstractClientPlayer$$Type} from "net.minecraft.client.player.AbstractClientPlayer"
import {$LivingEntityRenderer} from "net.minecraft.client.renderer.entity.LivingEntityRenderer"
import {$PlayerRendererInvoker$$Interface} from "com.furiusmax.bjornlib.neo.mixin.client.PlayerRendererInvoker"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$EntityRenderDispatcher} from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"
import {$EntityModel} from "net.minecraft.client.model.EntityModel"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ETFPlayerTexture} from "traben.entity_texture_features.features.player.ETFPlayerTexture"

export class $PlayerRenderer extends $LivingEntityRenderer<($AbstractClientPlayer), ($PlayerModel<($AbstractClientPlayer)>)> implements $ETFPlayerSkinHolder$$Interface, $PlayerRendererInvoker$$Interface {
 "shadowRadius": float
static readonly "LEASH_RENDER_STEPS": integer
readonly "entityRenderDispatcher": $EntityRenderDispatcher
 "layers": $List<($RenderLayer<(T), (M)>)>
 "shadowStrength": float
 "model": M
static readonly "NAMETAG_SCALE": float

constructor(arg0: $EntityRendererProvider$Context$$Type, arg1: boolean)

public "scale"(arg0: $LivingEntity$$Type, arg1: $PoseStack$$Type, arg2: float): void
public "scale"(arg0: $AbstractClientPlayer$$Type, arg1: $PoseStack$$Type, arg2: float): void
public "setupRotations"(arg0: $LivingEntity$$Type, arg1: $PoseStack$$Type, arg2: float, arg3: float, arg4: float, arg5: float): void
public "setupRotations"(arg0: $AbstractClientPlayer$$Type, arg1: $PoseStack$$Type, arg2: float, arg3: float, arg4: float, arg5: float): void
public "getRenderOffset"(arg0: $AbstractClientPlayer$$Type, arg1: float): $Vec3
public "getRenderOffset"(arg0: $Entity$$Type, arg1: float): $Vec3
public "render"(arg0: $LivingEntity$$Type, arg1: float, arg2: float, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer): void
public "render"(arg0: $Entity$$Type, arg1: float, arg2: float, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer): void
public "render"(arg0: $AbstractClientPlayer$$Type, arg1: float, arg2: float, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer): void
public "renderRightHand"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: integer, arg3: $AbstractClientPlayer$$Type): void
public "renderLeftHand"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: integer, arg3: $AbstractClientPlayer$$Type): void
public "renderNameTag"(arg0: $Entity$$Type, arg1: $Component$$Type, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type, arg4: integer, arg5: float): void
public "renderNameTag"(arg0: $AbstractClientPlayer$$Type, arg1: $Component$$Type, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type, arg4: integer, arg5: float): void
public "getTextureLocation"(arg0: $Entity$$Type): $ResourceLocation
public "getTextureLocation"(arg0: $AbstractClientPlayer$$Type): $ResourceLocation
public "etf$getETFPlayerTexture"(): $ETFPlayerTexture
public "invokeSetupRotations"(arg0: $AbstractClientPlayer$$Type, arg1: $PoseStack$$Type, arg2: float, arg3: float, arg4: float, arg5: float): void
public "invokeScale"(arg0: $AbstractClientPlayer$$Type, arg1: $PoseStack$$Type, arg2: float): void
public "md6d3b50$entity_texture_features$getShadowRadius$0"(arg0: $Entity$$Type): float
public "handler$fdg000$skinlayers3d$setModelProperties"(abstractClientPlayer: $AbstractClientPlayer$$Type, info: $CallbackInfo$$Type): void
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
import {$List$$Type} from "java.util.List"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
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
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$ItemOverrides$PropertyMatcher$$Type} from "net.minecraft.client.renderer.block.model.ItemOverrides$PropertyMatcher"

export class $ItemOverrides$BakedOverride {
 "model": $BakedModel

constructor(arg0: ($ItemOverrides$PropertyMatcher$$Type)[], arg1: $BakedModel$$Type)

public "test"(arg0: (float)[]): boolean
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
declare module "net.minecraft.client.renderer.entity.layers.RenderLayer" {
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RenderLayerParent$$Type} from "net.minecraft.client.renderer.entity.RenderLayerParent"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$EntityModel, $EntityModel$$Type} from "net.minecraft.client.model.EntityModel"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $RenderLayer<T extends $Entity, M extends $EntityModel<(object)>> {
constructor(arg0: $RenderLayerParent$$Type<(T), (M)>)

public static "coloredCutoutModelCopyLayerRender"<T extends $LivingEntity>(arg0: $EntityModel$$Type<(T)>, arg1: $EntityModel$$Type<(T)>, arg2: $ResourceLocation$$Type, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer, arg6: T, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float, arg12: float, arg13: integer): void
public static "renderColoredCutoutModel"<T extends $LivingEntity>(arg0: $EntityModel$$Type<(T)>, arg1: $ResourceLocation$$Type, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type, arg4: integer, arg5: T, arg6: integer): void
public "getParentModel"(): M
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: integer, arg3: T, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float): void
public "getTextureLocation"(arg0: T): $ResourceLocation
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
import {$RenderStateShard$TransparencyStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$LightmapStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TexturingStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard$OutputStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"

export class $RenderType$CompositeState$CompositeStateBuilder {
constructor()

public "createCompositeState"(arg0: boolean): $RenderType$CompositeState
public "createCompositeState"(arg0: $RenderType$OutlineProperty$$Type): $RenderType$CompositeState
public "setTransparencyState"(arg0: $RenderStateShard$TransparencyStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setOverlayState"(arg0: $RenderStateShard$OverlayStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setDepthTestState"(arg0: $RenderStateShard$DepthTestStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setTexturingState"(arg0: $RenderStateShard$TexturingStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setOutputState"(arg0: $RenderStateShard$OutputStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setCullState"(arg0: $RenderStateShard$CullStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setWriteMaskState"(arg0: $RenderStateShard$WriteMaskStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setLayeringState"(arg0: $RenderStateShard$LayeringStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setLightmapState"(arg0: $RenderStateShard$LightmapStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setShaderState"(arg0: $RenderStateShard$ShaderStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setTextureState"(arg0: $RenderStateShard$EmptyTextureStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setColorLogicState"(arg0: $RenderStateShard$ColorLogicStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setLineState"(arg0: $RenderStateShard$LineStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
set "transparencyState"(value: $RenderStateShard$TransparencyStateShard$$Type)
set "overlayState"(value: $RenderStateShard$OverlayStateShard$$Type)
set "depthTestState"(value: $RenderStateShard$DepthTestStateShard$$Type)
set "texturingState"(value: $RenderStateShard$TexturingStateShard$$Type)
set "outputState"(value: $RenderStateShard$OutputStateShard$$Type)
set "cullState"(value: $RenderStateShard$CullStateShard$$Type)
set "writeMaskState"(value: $RenderStateShard$WriteMaskStateShard$$Type)
set "layeringState"(value: $RenderStateShard$LayeringStateShard$$Type)
set "lightmapState"(value: $RenderStateShard$LightmapStateShard$$Type)
set "shaderState"(value: $RenderStateShard$ShaderStateShard$$Type)
set "textureState"(value: $RenderStateShard$EmptyTextureStateShard$$Type)
set "colorLogicState"(value: $RenderStateShard$ColorLogicStateShard$$Type)
set "lineState"(value: $RenderStateShard$LineStateShard$$Type)
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
import {$MeshData$SortState} from "com.mojang.blaze3d.vertex.MeshData$SortState"
import {$Set} from "java.util.Set"
import {$VisibilitySet} from "net.minecraft.client.renderer.chunk.VisibilitySet"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export class $SectionRenderDispatcher$CompiledSection {
 "transparencyState": $MeshData$SortState
readonly "hasBlocks": $Set<($RenderType)>
 "visibilitySet": $VisibilitySet
static readonly "UNCOMPILED": $SectionRenderDispatcher$CompiledSection
static readonly "EMPTY": $SectionRenderDispatcher$CompiledSection
readonly "renderableBlockEntities": $List<($BlockEntity)>

constructor()

public "isEmpty"(arg0: $RenderType$$Type): boolean
public "getRenderableBlockEntities"(): $List<($BlockEntity)>
public "facesCanSeeEachother"(arg0: $Direction$$Type, arg1: $Direction$$Type): boolean
public "hasNoRenderableLayers"(): boolean
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
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
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
public static "getTranslucentTransparency"(): $RenderStateShard$TransparencyStateShard
public static "getGLINT_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getCRUMBLING_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getNO_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
get "translucentTransparency"(): $RenderStateShard$TransparencyStateShard
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
declare module "net.minecraft.client.renderer.entity.EntityRenderer" {
import {$EntityRendererAccessor$$Interface} from "com.blackgear.vanillabackport.core.mixin.access.EntityRendererAccessor"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List, $List$$Type} from "java.util.List"
import {$Font} from "net.minecraft.client.gui.Font"
import {$Frustum$$Type} from "net.minecraft.client.renderer.culling.Frustum"
import {$EntityRendererProvider$Context$$Type} from "net.minecraft.client.renderer.entity.EntityRendererProvider$Context"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$EntityRenderDispatcher} from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AABB} from "net.minecraft.world.phys.AABB"
import {$EntityRendererInter$$Interface} from "dev.tr7zw.entityculling.access.EntityRendererInter"
import {$EntityRendererExtension$$Interface} from "com.supermartijn642.fusion.extensions.EntityRendererExtension"

export class $EntityRenderer<T extends $Entity> implements $EntityRendererAccessor$$Interface, $EntityRendererExtension$$Interface, $EntityRendererInter$$Interface {
 "shadowRadius": float
static readonly "LEASH_RENDER_STEPS": integer
readonly "entityRenderDispatcher": $EntityRenderDispatcher
 "shadowStrength": float
static readonly "NAMETAG_SCALE": float

constructor(arg0: $EntityRendererProvider$Context$$Type)

public "getPackedLightCoords"(arg0: T, arg1: float): integer
public "getFont"(): $Font
public "entityCullingIgnoresCulling"(entity: $Entity$$Type): boolean
public "shouldRender"(arg0: T, arg1: $Frustum$$Type, arg2: double, arg3: double, arg4: double): boolean
public "getRenderOffset"(arg0: T, arg1: float): $Vec3
public "shadowShouldShowName"(entity: $Entity$$Type): boolean
public "shadowRenderNameTag"(entity: $Entity$$Type, component: $Component$$Type, poseStack: $PoseStack$$Type, multiBufferSource: $MultiBufferSource$$Type, light: integer, delta: float): void
public "render"(arg0: T, arg1: float, arg2: float, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer): void
public "setFusionModelParts"(parts: $List$$Type): void
public "getFusionModelParts"(): $List
public "callGetBlockLightLevel"(arg0: $Entity$$Type, arg1: $BlockPos$$Type): integer
public "entityCullingGetCullingBox"(entity: $Entity$$Type): $AABB
public "renderNameTag"(arg0: T, arg1: $Component$$Type, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type, arg4: integer, arg5: float): void
public "getTextureLocation"(arg0: T): $ResourceLocation
public "renderLeash"<E extends $Entity>(arg0: T, arg1: float, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type, arg4: E): void
public "getSkyLightLevel"(arg0: T, arg1: $BlockPos$$Type): integer
public "getBlockLightLevel"(arg0: T, arg1: $BlockPos$$Type): integer
public "getShadowRadius"(arg0: T): float
public "shouldShowName"(arg0: T): boolean
get "font"(): $Font
set "fusionModelParts"(value: $List$$Type)
get "fusionModelParts"(): $List
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

public static "getTranslucentTransparency"(): $RenderStateShard$TransparencyStateShard
public static "getGLINT_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getCRUMBLING_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getNO_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
get "translucentTransparency"(): $RenderStateShard$TransparencyStateShard
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
declare module "net.minecraft.client.renderer.chunk.RenderChunk" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $RenderChunk {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderChunk$$Type = ($RenderChunk);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderChunk$$Original = $RenderChunk;}
declare module "net.minecraft.client.renderer.debug.PathfindingRenderer" {
import {$DebugRenderer$SimpleDebugRenderer$$Interface} from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$Path$$Type} from "net.minecraft.world.level.pathfinder.Path"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"

export class $PathfindingRenderer implements $DebugRenderer$SimpleDebugRenderer$$Interface {
constructor()

public static "renderPathLine"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: $Path$$Type, arg3: double, arg4: double, arg5: double): void
public "addPath"(arg0: integer, arg1: $Path$$Type, arg2: float): void
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: double, arg3: double, arg4: double): void
public static "renderPath"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: $Path$$Type, arg3: float, arg4: boolean, arg5: boolean, arg6: double, arg7: double, arg8: double): void
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
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
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

public static "getTranslucentTransparency"(): $RenderStateShard$TransparencyStateShard
public static "getGLINT_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getCRUMBLING_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getNO_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
get "translucentTransparency"(): $RenderStateShard$TransparencyStateShard
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
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
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
public static "getTranslucentTransparency"(): $RenderStateShard$TransparencyStateShard
public static "getGLINT_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getCRUMBLING_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getNO_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
get "translucentTransparency"(): $RenderStateShard$TransparencyStateShard
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
import {$SpriteContents, $SpriteContents$$Type} from "net.minecraft.client.renderer.texture.SpriteContents"
import {$SpriteResourceLoader, $SpriteResourceLoader$$Type} from "net.minecraft.client.renderer.texture.atlas.SpriteResourceLoader"

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
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
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
 "blur": boolean
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
 "mipmap": boolean
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
public "cutoutTexture"(): $Optional<($ResourceLocation)>
public static "getTranslucentTransparency"(): $RenderStateShard$TransparencyStateShard
public static "getGLINT_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getCRUMBLING_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getNO_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
get "translucentTransparency"(): $RenderStateShard$TransparencyStateShard
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

public static "getTranslucentTransparency"(): $RenderStateShard$TransparencyStateShard
public static "getGLINT_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getCRUMBLING_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getNO_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
get "translucentTransparency"(): $RenderStateShard$TransparencyStateShard
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
import {$RenderTypeAccessor$$Interface as $RenderTypeAccessor$1$$Interface} from "net.createmod.ponder.mixin.client.accessor.RenderTypeAccessor"
import {$List} from "java.util.List"
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$ImmutableList} from "com.google.common.collect.ImmutableList"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderType$CompositeRenderType} from "net.minecraft.client.renderer.RenderType$CompositeRenderType"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$Function} from "java.util.function.Function"
import {$RenderStateShard} from "net.minecraft.client.renderer.RenderStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderTypeAccessor$$Interface as $RenderTypeAccessor$0$$Interface} from "net.irisshaders.batchedentityrendering.mixin.RenderTypeAccessor"
import {$RenderTypeAccessor$$Interface} from "net.irisshaders.iris.mixin.rendertype.RenderTypeAccessor"
import {$RenderType$CompositeState, $RenderType$CompositeState$$Type} from "net.minecraft.client.renderer.RenderType$CompositeState"
import {$TransparencyType, $TransparencyType$$Type} from "net.irisshaders.batchedentityrendering.impl.TransparencyType"
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$BlendingStateHolder$$Interface} from "net.irisshaders.batchedentityrendering.impl.BlendingStateHolder"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$BiFunction} from "java.util.function.BiFunction"
import {$MeshData$$Type} from "com.mojang.blaze3d.vertex.MeshData"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$ShaderStateShard, $RenderStateShard$ShaderStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TransparencyStateShard, $RenderStateShard$TransparencyStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$VertexFormat$Mode, $VertexFormat$Mode$$Type} from "com.mojang.blaze3d.vertex.VertexFormat$Mode"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"
import {$VertexFormat, $VertexFormat$$Type} from "com.mojang.blaze3d.vertex.VertexFormat"

export class $RenderType extends $RenderStateShard implements $RenderTypeAccessor$$Interface, $BlendingStateHolder$$Interface, $RenderTypeAccessor$0$$Interface, $RenderTypeAccessor$1$$Interface {
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

public static "cutout"(): $RenderType
public "outline"(): $Optional<($RenderType)>
public static "outline"(arg0: $ResourceLocation$$Type): $RenderType
public static "breezeWind"(arg0: $ResourceLocation$$Type, arg1: float, arg2: float): $RenderType
public static "endGateway"(): $RenderType
public static "lineStrip"(): $RenderType
public "isOutline"(): boolean
public static "glint"(): $RenderType
public static "dragonRays"(): $RenderType
public static "breezeEyes"(arg0: $ResourceLocation$$Type): $RenderType
public static "waterMask"(): $RenderType
public static "beaconBeam"(arg0: $ResourceLocation$$Type, arg1: boolean): $RenderType
public static "clouds"(): $RenderType
public static "debugQuads"(): $RenderType
public static "crumbling"(arg0: $ResourceLocation$$Type): $RenderType
public "mode"(): $VertexFormat$Mode
public "toString"(): StringJS
public static "lines"(): $RenderType
public "format"(): $VertexFormat
public static "create"(arg0: StringJS, arg1: $VertexFormat$$Type, arg2: $VertexFormat$Mode$$Type, arg3: integer, arg4: $RenderType$CompositeState$$Type): $RenderType$CompositeRenderType
public static "create"(arg0: StringJS, arg1: $VertexFormat$$Type, arg2: $VertexFormat$Mode$$Type, arg3: integer, arg4: boolean, arg5: boolean, arg6: $RenderType$CompositeState$$Type): $RenderType$CompositeRenderType
public static "text"(arg0: $ResourceLocation$$Type): $RenderType
public static "lambda$static$0"(arg0: $ResourceLocation$$Type): $RenderType
public static "lambda$static$1"(arg0: $ResourceLocation$$Type): $RenderType
public "bufferSize"(): integer
public static "endPortal"(): $RenderType
public static "entityCutoutNoCullZOffset"(arg0: $ResourceLocation$$Type): $RenderType
public static "entityCutoutNoCullZOffset"(arg0: $ResourceLocation$$Type, arg1: boolean): $RenderType
public static "debugStructureQuads"(): $RenderType
public static "textBackgroundSeeThrough"(): $RenderType
public static "translucentMovingBlock"(): $RenderType
public static "entityTranslucentEmissive"(arg0: $ResourceLocation$$Type): $RenderType
public static "entityTranslucentEmissive"(arg0: $ResourceLocation$$Type, arg1: boolean): $RenderType
public static "entityTranslucentCull"(arg0: $ResourceLocation$$Type): $RenderType
public static "createArmorCutoutNoCull"(arg0: StringJS, arg1: $ResourceLocation$$Type, arg2: boolean): $RenderType$CompositeRenderType
public static "textIntensityPolygonOffset"(arg0: $ResourceLocation$$Type): $RenderType
public static "guiGhostRecipeOverlay"(): $RenderType
public static "dragonExplosionAlpha"(arg0: $ResourceLocation$$Type): $RenderType
public static "textIntensitySeeThrough"(arg0: $ResourceLocation$$Type): $RenderType
public static "itemEntityTranslucentCull"(arg0: $ResourceLocation$$Type): $RenderType
public "setTransparencyType"(arg0: $TransparencyType$$Type): void
public "getTransparencyType"(): $TransparencyType
public static "lambda$static$2"(arg0: $ResourceLocation$$Type): $RenderType
public static "lambda$static$3"(arg0: $ResourceLocation$$Type, arg1: boolean): $RenderType
public static "gui"(): $RenderType
public static "armorCutoutNoCull"(arg0: $ResourceLocation$$Type): $RenderType
public static "debugFilledBox"(): $RenderType
public static "tripwireState"(): $RenderType$CompositeState
public "affectsCrumbling"(): boolean
public static "translucent"(): $RenderType
public static "entitySolid"(arg0: $ResourceLocation$$Type): $RenderType
public static "entitySmoothCutout"(arg0: $ResourceLocation$$Type): $RenderType
public static "translucentState"(arg0: $RenderStateShard$ShaderStateShard$$Type): $RenderType$CompositeState
public static "armorEntityGlint"(): $RenderType
public static "entityGlint"(): $RenderType
public static "entityShadow"(arg0: $ResourceLocation$$Type): $RenderType
public static "dragonRaysDepth"(): $RenderType
public static "glintTranslucent"(): $RenderType
public static "createClouds"(arg0: boolean): $RenderType$CompositeRenderType
public static "textSeeThrough"(arg0: $ResourceLocation$$Type): $RenderType
public static "cutoutMipped"(): $RenderType
public static "entityCutoutNoCull"(arg0: $ResourceLocation$$Type, arg1: boolean): $RenderType
public static "entityCutoutNoCull"(arg0: $ResourceLocation$$Type): $RenderType
public static "entityNoOutline"(arg0: $ResourceLocation$$Type): $RenderType
public static "entityGlintDirect"(): $RenderType
public static "textBackground"(): $RenderType
public static "textIntensity"(arg0: $ResourceLocation$$Type): $RenderType
public static "entityTranslucent"(arg0: $ResourceLocation$$Type, arg1: boolean): $RenderType
public static "entityTranslucent"(arg0: $ResourceLocation$$Type): $RenderType
public static "textPolygonOffset"(arg0: $ResourceLocation$$Type): $RenderType
public static "entityCutout"(arg0: $ResourceLocation$$Type): $RenderType
public static "cloudsDepthOnly"(): $RenderType
public "sortOnUpload"(): boolean
public static "entityDecal"(arg0: $ResourceLocation$$Type): $RenderType
public static "energySwirl"(arg0: $ResourceLocation$$Type, arg1: float, arg2: float): $RenderType
public static "debugLineStrip"(arg0: double): $RenderType
public static "debugSectionQuads"(): $RenderType
public "getChunkLayerId"(): integer
public static "guiTextHighlight"(): $RenderType
public "shouldSortOnUpload"(): boolean
public static "guiOverlay"(): $RenderType
public "draw"(arg0: $MeshData$$Type): void
public static "lambda$static$11"(arg0: $ResourceLocation$$Type): $RenderType
public static "lambda$static$12"(arg0: $ResourceLocation$$Type): $RenderType
public static "lambda$static$5"(arg0: $ResourceLocation$$Type): $RenderType
public static "lambda$static$6"(arg0: $ResourceLocation$$Type): $RenderType
public static "lambda$static$9"(arg0: $ResourceLocation$$Type): $RenderType
public static "lambda$static$8"(arg0: $ResourceLocation$$Type, arg1: boolean): $RenderType
public static "lambda$static$4"(arg0: $ResourceLocation$$Type, arg1: boolean): $RenderType
public static "lambda$static$10"(arg0: $ResourceLocation$$Type, arg1: boolean): $RenderType
public static "lambda$static$7"(arg0: $ResourceLocation$$Type, arg1: boolean): $RenderType
public static "chunkBufferLayers"(): $List<($RenderType)>
public static "lightning"(): $RenderType
public static "createArmorDecalCutoutNoCull"(arg0: $ResourceLocation$$Type): $RenderType
public "canConsolidateConsecutiveGeometry"(): boolean
public static "translucentMovingBlockState"(): $RenderType$CompositeState
public static "catnip$create$ponder_$md$6d3b50$0"(arg0: StringJS, arg1: $VertexFormat$$Type, arg2: $VertexFormat$Mode$$Type, arg3: integer, arg4: boolean, arg5: boolean, arg6: $RenderType$CompositeState$$Type): $RenderType$CompositeRenderType
public static "leash"(): $RenderType
public static "eyes"(arg0: $ResourceLocation$$Type): $RenderType
public static "solid"(): $RenderType
public static "lambda$static$20"(arg0: $ResourceLocation$$Type): $RenderType
public static "lambda$static$23"(arg0: double): $RenderType$CompositeRenderType
public static "lambda$static$21"(arg0: $ResourceLocation$$Type): $RenderType
public static "lambda$static$22"(arg0: $ResourceLocation$$Type): $RenderType
public static "lambda$static$17"(arg0: $ResourceLocation$$Type): $RenderType
public static "lambda$static$19"(arg0: $ResourceLocation$$Type): $RenderType
public static "lambda$static$14"(arg0: $ResourceLocation$$Type): $RenderType
public static "lambda$static$16"(arg0: $ResourceLocation$$Type): $RenderType
public static "lambda$static$13"(arg0: $ResourceLocation$$Type): $RenderType
public static "lambda$static$18"(arg0: $ResourceLocation$$Type): $RenderType
public static "lambda$static$15"(arg0: $ResourceLocation$$Type, arg1: $RenderStateShard$TransparencyStateShard$$Type): $RenderType
public static "tripwire"(): $RenderType
public static "catnip$create"(arg0: StringJS, arg1: $VertexFormat$$Type, arg2: $VertexFormat$Mode$$Type, arg3: integer, arg4: boolean, arg5: boolean, arg6: $RenderType$CompositeState$$Type): $RenderType$CompositeRenderType
public static "getTranslucentTransparency"(): $RenderStateShard$TransparencyStateShard
public static "getGLINT_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getCRUMBLING_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getNO_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
set "transparencyType"(value: $TransparencyType$$Type)
get "transparencyType"(): $TransparencyType
get "translucentTransparency"(): $RenderStateShard$TransparencyStateShard
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
declare module "net.minecraft.client.renderer.ItemInHandRenderer$HandRenderSelection" {
import {$Enum} from "java.lang.Enum"

export class $ItemInHandRenderer$HandRenderSelection extends $Enum<($ItemInHandRenderer$HandRenderSelection)> {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemInHandRenderer$HandRenderSelection$$Type = (("render_both_hands") | ("render_main_hand_only") | ("render_off_hand_only"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemInHandRenderer$HandRenderSelection$$Original = $ItemInHandRenderer$HandRenderSelection;}
declare module "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard" {
import {$Optional} from "java.util.Optional"
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
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

constructor()
constructor(arg0: $Runnable$$Type, arg1: $Runnable$$Type)

public "cutoutTexture"(): $Optional<($ResourceLocation)>
public static "getTranslucentTransparency"(): $RenderStateShard$TransparencyStateShard
public static "getGLINT_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getCRUMBLING_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getNO_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
get "translucentTransparency"(): $RenderStateShard$TransparencyStateShard
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
import {$IMixinDynamicTexture$$Interface} from "de.keksuccino.konkrete.mixin.mixins.client.IMixinDynamicTexture"
import {$NativeImage, $NativeImage$$Type} from "com.mojang.blaze3d.platform.NativeImage"
import {$Path$$Type} from "java.nio.file.Path"
import {$Dumpable$$Interface} from "net.minecraft.client.renderer.texture.Dumpable"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"
import {$AbstractTexture} from "net.minecraft.client.renderer.texture.AbstractTexture"

export class $DynamicTexture extends $AbstractTexture implements $Dumpable$$Interface, $IMixinDynamicTexture$$Interface {
static readonly "NOT_ASSIGNED": integer
 "mipmap": boolean
 "blur": boolean
 "id": integer

constructor(arg0: $NativeImage$$Type)
constructor(arg0: integer, arg1: integer, arg2: boolean)

public "load"(arg0: $ResourceManager$$Type): void
public "close"(): void
public "getPixels"(): $NativeImage
public "setPixels"(arg0: $NativeImage$$Type): void
public "upload"(): void
public "dumpContents"(arg0: $ResourceLocation$$Type, arg1: $Path$$Type): void
public "getPixelsKonkrete"(): $NativeImage
public "setPixelsKonkrete"(arg0: $NativeImage$$Type): void
get "pixels"(): $NativeImage
set "pixels"(value: $NativeImage$$Type)
get "pixelsKonkrete"(): $NativeImage
set "pixelsKonkrete"(value: $NativeImage$$Type)
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
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$PositionSource$$Type} from "net.minecraft.world.level.gameevent.PositionSource"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$GameEvent$$Type} from "net.minecraft.world.level.gameevent.GameEvent"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

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
declare module "net.minecraft.client.renderer.texture.atlas.SpriteResourceLoader" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Collection$$Type} from "java.util.Collection"
import {$SpriteContentsConstructor, $SpriteContentsConstructor$$Type} from "net.neoforged.neoforge.client.textures.SpriteContentsConstructor"
import {$MetadataSectionSerializer$$Type} from "net.minecraft.server.packs.metadata.MetadataSectionSerializer"
import {$SpriteContents, $SpriteContents$$Type} from "net.minecraft.client.renderer.texture.SpriteContents"
import {$Logger} from "org.slf4j.Logger"
import {$Resource, $Resource$$Type} from "net.minecraft.server.packs.resources.Resource"

export interface $SpriteResourceLoader$$Interface {

(arg0: $ResourceLocation, arg1: $Resource, arg2: $SpriteContentsConstructor): $SpriteContents$$Type
}

export class $SpriteResourceLoader implements $SpriteResourceLoader$$Interface {
static readonly "LOGGER": $Logger

static "create"(arg0: $Collection$$Type<($MetadataSectionSerializer$$Type<(never)>)>): $SpriteResourceLoader
 "loadSprite"(arg0: $ResourceLocation$$Type, arg1: $Resource$$Type): $SpriteContents
 "loadSprite"(arg0: $ResourceLocation$$Type, arg1: $Resource$$Type, arg2: $SpriteContentsConstructor$$Type): $SpriteContents
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
declare module "net.minecraft.client.renderer.texture.HttpTexture" {
import {$SimpleTexture} from "net.minecraft.client.renderer.texture.SimpleTexture"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$File, $File$$Type} from "java.io.File"
import {$HttpTextureAccessor$$Interface} from "dev.tr7zw.skinlayers.accessor.HttpTextureAccessor"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$TextureLocationSettable$$Interface} from "dzwdz.chat_heads.mixininterface.TextureLocationSettable"
import {$NativeImage, $NativeImage$$Type} from "com.mojang.blaze3d.platform.NativeImage"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Logger} from "org.slf4j.Logger"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $HttpTexture extends $SimpleTexture implements $TextureLocationSettable$$Interface, $HttpTextureAccessor$$Interface {
static readonly "NOT_ASSIGNED": integer
readonly "file": $File
 "mipmap": boolean
 "blur": boolean
static readonly "LOGGER": $Logger
readonly "location": $ResourceLocation
 "id": integer

constructor(arg0: $File$$Type, arg1: StringJS, arg2: $ResourceLocation$$Type, arg3: boolean, arg4: $Runnable$$Type)

public "load"(arg0: $ResourceManager$$Type): void
public "getImage"(): $NativeImage
public "handler$bbh000$chat_heads$chatheads$registerBlendedHeadTexture"(image: $NativeImage$$Type, ci: $CallbackInfo$$Type): void
public "processLegacySkin"(arg0: $NativeImage$$Type): $NativeImage
public "chatheads$setTextureLocation"(textureLocation: $ResourceLocation$$Type): void
get "image"(): $NativeImage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HttpTexture$$Type = ($HttpTexture);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HttpTexture$$Original = $HttpTexture;}
declare module "net.minecraft.client.renderer.texture.SpriteContents$Ticker" {
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$SpriteContents$AnimatedTexture, $SpriteContents$AnimatedTexture$$Type} from "net.minecraft.client.renderer.texture.SpriteContents$AnimatedTexture"
import {$SpriteContentsTickerAccessor$$Interface as $SpriteContentsTickerAccessor$0$$Interface} from "net.caffeinemc.mods.sodium.mixin.features.textures.animations.upload.SpriteContentsTickerAccessor"
import {$SpriteContents$$Type} from "net.minecraft.client.renderer.texture.SpriteContents"
import {$SpriteTicker$$Interface} from "net.minecraft.client.renderer.texture.SpriteTicker"
import {$SpriteContents$InterpolationData$$Type} from "net.minecraft.client.renderer.texture.SpriteContents$InterpolationData"
import {$SpriteContentsTickerAccessor$$Interface} from "net.irisshaders.iris.mixin.texture.SpriteContentsTickerAccessor"

export class $SpriteContents$Ticker implements $SpriteTicker$$Interface, $SpriteContentsTickerAccessor$$Interface, $SpriteContentsTickerAccessor$0$$Interface {
 "subFrame": integer
readonly "animationInfo": $SpriteContents$AnimatedTexture
 "frame": integer

constructor(arg0: $SpriteContents$$Type, arg1: $SpriteContents$AnimatedTexture$$Type, arg2: $SpriteContents$InterpolationData$$Type)

public "close"(): void
public "getFrame"(): integer
public "tickAndUpload"(arg0: integer, arg1: integer): void
public "getFrameIndex"(): integer
public "setFrame"(arg0: integer): void
public "getSubFrame"(): integer
public "setSubFrame"(arg0: integer): void
public "getAnimationInfo"(): $SpriteContents$AnimatedTexture
public "getFrameTicks"(): integer
public "handler$cgk000$sodium$assignParent"(arg0: $SpriteContents$$Type, arg1: $SpriteContents$AnimatedTexture$$Type, arg2: $SpriteContents$InterpolationData$$Type, arg3: $CallbackInfo$$Type): void
get "frameIndex"(): integer
get "frameTicks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContents$Ticker$$Type = ($SpriteContents$Ticker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteContents$Ticker$$Original = $SpriteContents$Ticker;}
declare module "net.minecraft.client.renderer.RenderType$CompositeState" {
import {$RenderStateShard$LayeringStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$RenderStateShard$EmptyTextureStateShard, $RenderStateShard$EmptyTextureStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$ImmutableList} from "com.google.common.collect.ImmutableList"
import {$RenderType$CompositeState$CompositeStateBuilder} from "net.minecraft.client.renderer.RenderType$CompositeState$CompositeStateBuilder"
import {$RenderStateShard$WriteMaskStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard, $RenderStateShard$DepthTestStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderType$OutlineProperty, $RenderType$OutlineProperty$$Type} from "net.minecraft.client.renderer.RenderType$OutlineProperty"
import {$RenderStateShard$ColorLogicStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$CullStateShard, $RenderStateShard$CullStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$LineStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$ShaderStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TransparencyStateShard, $RenderStateShard$TransparencyStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$LightmapStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TexturingStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard} from "net.minecraft.client.renderer.RenderStateShard"
import {$CompositeStateAccessor$$Interface} from "net.irisshaders.batchedentityrendering.mixin.CompositeStateAccessor"
import {$RenderStateShard$OutputStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"

export class $RenderType$CompositeState implements $CompositeStateAccessor$$Interface {
readonly "outlineProperty": $RenderType$OutlineProperty
readonly "cullState": $RenderStateShard$CullStateShard
readonly "textureState": $RenderStateShard$EmptyTextureStateShard
readonly "states": $ImmutableList<($RenderStateShard)>

constructor(arg0: $RenderStateShard$EmptyTextureStateShard$$Type, arg1: $RenderStateShard$ShaderStateShard$$Type, arg2: $RenderStateShard$TransparencyStateShard$$Type, arg3: $RenderStateShard$DepthTestStateShard$$Type, arg4: $RenderStateShard$CullStateShard$$Type, arg5: $RenderStateShard$LightmapStateShard$$Type, arg6: $RenderStateShard$OverlayStateShard$$Type, arg7: $RenderStateShard$LayeringStateShard$$Type, arg8: $RenderStateShard$OutputStateShard$$Type, arg9: $RenderStateShard$TexturingStateShard$$Type, arg10: $RenderStateShard$WriteMaskStateShard$$Type, arg11: $RenderStateShard$LineStateShard$$Type, arg12: $RenderStateShard$ColorLogicStateShard$$Type, arg13: $RenderType$OutlineProperty$$Type)

public "toString"(): StringJS
public static "builder"(): $RenderType$CompositeState$CompositeStateBuilder
public "getDepth"(): $RenderStateShard$DepthTestStateShard
public "getTransparency"(): $RenderStateShard$TransparencyStateShard
get "depth"(): $RenderStateShard$DepthTestStateShard
get "transparency"(): $RenderStateShard$TransparencyStateShard
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
import {$List$$Type} from "java.util.List"
import {$SectionBufferBuilderPack, $SectionBufferBuilderPack$$Type} from "net.minecraft.client.renderer.SectionBufferBuilderPack"

export class $SectionBufferBuilderPool {
constructor(arg0: $List$$Type<($SectionBufferBuilderPack$$Type)>)

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
declare module "net.minecraft.client.renderer.block.ModelBlockRenderer$Cache" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ModelBlockRenderer$Cache {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBlockRenderer$Cache$$Type = ($ModelBlockRenderer$Cache);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelBlockRenderer$Cache$$Original = $ModelBlockRenderer$Cache;}
declare module "net.minecraft.client.renderer.block.model.ItemModelGenerator" {
import {$TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$Material$$Type} from "net.minecraft.client.resources.model.Material"
import {$Function$$Type} from "java.util.function.Function"
import {$BlockModel, $BlockModel$$Type} from "net.minecraft.client.renderer.block.model.BlockModel"
import {$List} from "java.util.List"
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
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$BakedModel} from "net.minecraft.client.resources.model.BakedModel"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IdentifiableResourceReloadListener$$Interface} from "net.fabricmc.fabric.api.resource.IdentifiableResourceReloadListener"
import {$ResourceManagerReloadListener$$Interface} from "net.minecraft.server.packs.resources.ResourceManagerReloadListener"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
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

public "onResourceManagerReload"(arg0: $ResourceManager$$Type): void
public "renderBreakingTexture"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: $BlockAndTintGetter$$Type, arg3: $PoseStack$$Type, arg4: $VertexConsumer$$Type, arg5: $ModelData$$Type): void
/**
 * 
 * @deprecated
 */
public "renderBreakingTexture"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: $BlockAndTintGetter$$Type, arg3: $PoseStack$$Type, arg4: $VertexConsumer$$Type): void
public "getFabricId"(): $ResourceLocation
public "getBlockModel"(arg0: $BlockState$$Type): $BakedModel
public "getBlockModelShaper"(): $BlockModelShaper
public "renderSingleBlock"(arg0: $BlockState$$Type, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: integer, arg4: integer, arg5: $ModelData$$Type, arg6: $RenderType$$Type): void
/**
 * 
 * @deprecated
 */
public "renderSingleBlock"(arg0: $BlockState$$Type, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: integer, arg4: integer): void
public "getFabricDependencies"(): $Collection
public "renderBatched"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: $BlockAndTintGetter$$Type, arg3: $PoseStack$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: $RandomSource$$Type): void
public "renderBatched"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: $BlockAndTintGetter$$Type, arg3: $PoseStack$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: $RandomSource$$Type, arg7: $ModelData$$Type, arg8: $RenderType$$Type): void
public "renderLiquid"(arg0: $BlockPos$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $VertexConsumer$$Type, arg3: $BlockState$$Type, arg4: $FluidState$$Type): void
public "getLiquidBlockRenderer"(): $LiquidBlockRenderer
public "getModelRenderer"(): $ModelBlockRenderer
public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
public "getName"(): StringJS
get "fabricId"(): $ResourceLocation
get "blockModelShaper"(): $BlockModelShaper
get "fabricDependencies"(): $Collection
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
declare module "net.minecraft.client.renderer.chunk.VisibilitySet" {
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Set$$Type} from "java.util.Set"

export class $VisibilitySet {
constructor()

public "toString"(): StringJS
public "add"(arg0: $Set$$Type<($Direction$$Type)>): void
public "set"(arg0: $Direction$$Type, arg1: $Direction$$Type, arg2: boolean): void
public "setAll"(arg0: boolean): void
public "visibilityBetween"(arg0: $Direction$$Type, arg1: $Direction$$Type): boolean
set "all"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VisibilitySet$$Type = ($VisibilitySet);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VisibilitySet$$Original = $VisibilitySet;}
declare module "net.minecraft.client.renderer.block.model.BlockModelDefinition" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$MultiVariant, $MultiVariant$$Type} from "net.minecraft.client.renderer.block.model.MultiVariant"
import {$Reader$$Type} from "java.io.Reader"
import {$List$$Type} from "java.util.List"
import {$JsonElement$$Type} from "com.google.gson.JsonElement"
import {$Set} from "java.util.Set"
import {$MultiPart, $MultiPart$$Type} from "net.minecraft.client.renderer.block.model.multipart.MultiPart"
import {$BlockModelDefinition$Context$$Type} from "net.minecraft.client.renderer.block.model.BlockModelDefinition$Context"

export class $BlockModelDefinition {
constructor(arg0: $List$$Type<($BlockModelDefinition$$Type)>)
constructor(arg0: $Map$$Type<(StringJS), ($MultiVariant$$Type)>, arg1: $MultiPart$$Type)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getVariant"(arg0: StringJS): $MultiVariant
public "getVariants"(): $Map<(StringJS), ($MultiVariant)>
public static "fromStream"(arg0: $BlockModelDefinition$Context$$Type, arg1: $Reader$$Type): $BlockModelDefinition
public "getMultiVariants"(): $Set<($MultiVariant)>
public "hasVariant"(arg0: StringJS): boolean
public static "fromJsonElement"(arg0: $BlockModelDefinition$Context$$Type, arg1: $JsonElement$$Type): $BlockModelDefinition
public "getMultiPart"(): $MultiPart
public "isMultiPart"(): boolean
get "variants"(): $Map<(StringJS), ($MultiVariant)>
get "multiVariants"(): $Set<($MultiVariant)>
get "multiPart"(): $MultiPart
get "multiPart"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockModelDefinition$$Type = ($BlockModelDefinition);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockModelDefinition$$Original = $BlockModelDefinition;}
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
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List$$Type} from "java.util.List"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$ModelResourceLocation} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$ItemRendererAccessor$$Interface as $ItemRendererAccessor$1$$Interface} from "com.blackgear.platform.core.mixin.access.ItemRendererAccessor"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$PoseStack$Pose$$Type} from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IdentifiableResourceReloadListener$$Interface} from "net.fabricmc.fabric.api.resource.IdentifiableResourceReloadListener"
import {$ResourceManagerReloadListener$$Interface} from "net.minecraft.server.packs.resources.ResourceManagerReloadListener"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$ItemRendererAccessor$$Interface as $ItemRendererAccessor$2$$Interface} from "net.caffeinemc.mods.sodium.mixin.features.render.frapi.ItemRendererAccessor"
import {$BlockEntityWithoutLevelRenderer, $BlockEntityWithoutLevelRenderer$$Type} from "net.minecraft.client.renderer.BlockEntityWithoutLevelRenderer"
import {$ItemRendererAccessor$$Interface as $ItemRendererAccessor$0$$Interface} from "net.createmod.ponder.mixin.client.accessor.ItemRendererAccessor"
import {$ItemDisplayContext$$Type} from "net.minecraft.world.item.ItemDisplayContext"
import {$Collection} from "java.util.Collection"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$ItemRendererAccessor$$Interface} from "dev.emi.emi.mixin.accessor.ItemRendererAccessor"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$ModelManager$$Type} from "net.minecraft.client.resources.model.ModelManager"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$BakedQuad$$Type} from "net.minecraft.client.renderer.block.model.BakedQuad"
import {$TextureManager, $TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$ItemColors$$Type} from "net.minecraft.client.color.item.ItemColors"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$ItemModelShaper} from "net.minecraft.client.renderer.ItemModelShaper"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $ItemRenderer implements $ResourceManagerReloadListener$$Interface, $ItemRendererAccessor$2$$Interface, $ItemRendererAccessor$$Interface, $IdentifiableResourceReloadListener$$Interface, $ItemRendererAccessor$1$$Interface, $ItemRendererAccessor$0$$Interface {
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

public static "hasAnimatedTexture$sodium_$md$6d3b50$1"(arg0: $ItemStack$$Type): boolean
public "handler$gcn000$codechickenl$onRenderItem"(arg0: $ItemStack$$Type, arg1: $ItemDisplayContext$$Type, arg2: boolean, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer, arg6: integer, arg7: $BakedModel$$Type, arg8: $CallbackInfo$$Type): void
public "handler$coi000$immersive_melodies$immersiveMelodies$injectGetModel"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type, arg3: integer, arg4: $CallbackInfoReturnable$$Type): void
public "handler$coi000$immersive_melodies$immersiveMelodies$modifyVariable"(arg0: $ItemStack$$Type, arg1: $ItemDisplayContext$$Type, arg2: boolean, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer, arg6: integer, arg7: $BakedModel$$Type, arg8: $CallbackInfo$$Type): void
public "getModel"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type, arg3: integer): $BakedModel
public "onResourceManagerReload"(arg0: $ResourceManager$$Type): void
public "renderStatic"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: $ItemDisplayContext$$Type, arg3: boolean, arg4: $PoseStack$$Type, arg5: $MultiBufferSource$$Type, arg6: $Level$$Type, arg7: integer, arg8: integer, arg9: integer): void
public "renderStatic"(arg0: $ItemStack$$Type, arg1: $ItemDisplayContext$$Type, arg2: integer, arg3: integer, arg4: $PoseStack$$Type, arg5: $MultiBufferSource$$Type, arg6: $Level$$Type, arg7: integer): void
public "renderQuadList"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: $List$$Type<($BakedQuad$$Type)>, arg3: $ItemStack$$Type, arg4: integer, arg5: integer): void
public static "getFoilBuffer"(arg0: $MultiBufferSource$$Type, arg1: $RenderType$$Type, arg2: boolean, arg3: boolean): $VertexConsumer
public static "getArmorFoilBuffer"(arg0: $MultiBufferSource$$Type, arg1: $RenderType$$Type, arg2: boolean): $VertexConsumer
public "renderModelLists"(arg0: $BakedModel$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: integer, arg4: $PoseStack$$Type, arg5: $VertexConsumer$$Type): void
public "getItemModelShaper"(): $ItemModelShaper
public "getFabricId"(): $ResourceLocation
public "render"(arg0: $ItemStack$$Type, arg1: $ItemDisplayContext$$Type, arg2: boolean, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer, arg6: integer, arg7: $BakedModel$$Type): void
public "localvar$coi000$immersive_melodies$immersiveMelodies$modifyVariable"(arg0: $BakedModel$$Type): $BakedModel
public "callRenderModelLists"(arg0: $BakedModel$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: integer, arg4: $PoseStack$$Type, arg5: $VertexConsumer$$Type): void
public "catnip$getTextureManager"(): $TextureManager
public "invokeRenderBakedItemModel"(arg0: $BakedModel$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: integer, arg4: $PoseStack$$Type, arg5: $VertexConsumer$$Type): void
public static "getCompassFoilBuffer"(arg0: $MultiBufferSource$$Type, arg1: $RenderType$$Type, arg2: $PoseStack$Pose$$Type): $VertexConsumer
public "getFabricDependencies"(): $Collection
public static "getFoilBufferDirect"(arg0: $MultiBufferSource$$Type, arg1: $RenderType$$Type, arg2: boolean, arg3: boolean): $VertexConsumer
public "getBlockEntityRenderer"(): $BlockEntityWithoutLevelRenderer
public "handler$fdo000$dragonlib$render"(itemStack: $ItemStack$$Type, displayContext: $ItemDisplayContext$$Type, leftHand: boolean, poseStack: $PoseStack$$Type, bufferSource: $MultiBufferSource$$Type, combinedLight: integer, combinedOverlay: integer, model: $BakedModel$$Type, ci: $CallbackInfo$$Type): void
public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
public static "sodium$hasAnimatedTexture"(arg0: $ItemStack$$Type): boolean
public "getName"(): StringJS
get "itemModelShaper"(): $ItemModelShaper
get "fabricId"(): $ResourceLocation
get "fabricDependencies"(): $Collection
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
public "modifyReturnValue$cde000$fusion$resolveItemPredicatesModel"(model: $BakedModel$$Type, stack: $ItemStack$$Type): $BakedModel
public "getItemModel"(arg0: $Item$$Type): $BakedModel
public "getItemModel"(arg0: $ItemStack$$Type): $BakedModel
public "getModelManager"(): $ModelManager
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
declare module "net.minecraft.client.renderer.block.model.MultiVariant" {
import {$TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Collection} from "java.util.Collection"
import {$Material$$Type} from "net.minecraft.client.resources.model.Material"
import {$Variant, $Variant$$Type} from "net.minecraft.client.renderer.block.model.Variant"
import {$Function$$Type} from "java.util.function.Function"
import {$BakedModel} from "net.minecraft.client.resources.model.BakedModel"
import {$List, $List$$Type} from "java.util.List"
import {$ModelBaker$$Type} from "net.minecraft.client.resources.model.ModelBaker"
import {$ModelState$$Type} from "net.minecraft.client.resources.model.ModelState"
import {$UnbakedModel$$Interface} from "net.minecraft.client.resources.model.UnbakedModel"

export class $MultiVariant implements $UnbakedModel$$Interface {
constructor(arg0: $List$$Type<($Variant$$Type)>)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getVariants"(): $List<($Variant)>
public "bake"(arg0: $ModelBaker$$Type, arg1: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>, arg2: $ModelState$$Type): $BakedModel
public "getDependencies"(): $Collection<($ResourceLocation)>
public "resolveParents"(modelGetter: $Function$$Type): void
get "variants"(): $List<($Variant)>
get "dependencies"(): $Collection<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiVariant$$Type = ($MultiVariant);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiVariant$$Original = $MultiVariant;}
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
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
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

public static "getTranslucentTransparency"(): $RenderStateShard$TransparencyStateShard
public static "getGLINT_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getCRUMBLING_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getNO_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
get "translucentTransparency"(): $RenderStateShard$TransparencyStateShard
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
declare module "net.minecraft.client.renderer.texture.SimpleTexture$TextureImage" {
import {$Closeable$$Interface} from "java.io.Closeable"

export class $SimpleTexture$TextureImage implements $Closeable$$Interface {
public "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleTexture$TextureImage$$Type = ($SimpleTexture$TextureImage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleTexture$TextureImage$$Original = $SimpleTexture$TextureImage;}
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
declare module "net.minecraft.client.renderer.RenderBuffers" {
import {$DrawCallTrackingRenderBuffers$$Interface} from "net.irisshaders.batchedentityrendering.impl.DrawCallTrackingRenderBuffers"
import {$MultiBufferSource$BufferSource} from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"
import {$MemoryTrackingRenderBuffers$$Interface} from "net.irisshaders.batchedentityrendering.impl.MemoryTrackingRenderBuffers"
import {$SectionBufferBuilderPack} from "net.minecraft.client.renderer.SectionBufferBuilderPack"
import {$SectionBufferBuilderPool} from "net.minecraft.client.renderer.SectionBufferBuilderPool"
import {$RenderBuffersExt$$Interface} from "net.irisshaders.batchedentityrendering.impl.RenderBuffersExt"
import {$OutlineBufferSource} from "net.minecraft.client.renderer.OutlineBufferSource"

export class $RenderBuffers implements $MemoryTrackingRenderBuffers$$Interface, $RenderBuffersExt$$Interface, $DrawCallTrackingRenderBuffers$$Interface {
constructor(arg0: integer)

public "bufferSource"(): $MultiBufferSource$BufferSource
public "crumblingBufferSource"(): $MultiBufferSource$BufferSource
public "outlineBufferSource"(): $OutlineBufferSource
public "beginLevelRendering"(): void
public "resetDrawCounts"(): void
public "endLevelRendering"(): void
public "getEntityBufferAllocatedSize"(): long
public "getRenderTypes"(): integer
public "getMaxBegins"(): integer
public "getDrawCalls"(): integer
public "fixedBufferPack"(): $SectionBufferBuilderPack
public "sectionBufferPool"(): $SectionBufferBuilderPool
public "getMiscBufferAllocatedSize"(): long
public "freeAndDeleteBuffers"(): void
get "entityBufferAllocatedSize"(): long
get "renderTypes"(): integer
get "maxBegins"(): integer
get "drawCalls"(): integer
get "miscBufferAllocatedSize"(): long
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
declare module "net.minecraft.client.renderer.LevelRenderer" {
import {$RenderBuffers, $RenderBuffers$$Type} from "net.minecraft.client.renderer.RenderBuffers"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$LevelRendererAccessor$$Interface as $LevelRendererAccessor$0$$Interface} from "me.flashyreese.mods.sodiumextra.mixin.optimizations.beacon_beam_rendering.LevelRendererAccessor"
import {$Particle} from "net.minecraft.client.particle.Particle"
import {$Frustum, $Frustum$$Type} from "net.minecraft.client.renderer.culling.Frustum"
import {$JukeboxSong$$Type} from "net.minecraft.world.item.JukeboxSong"
import {$Camera$$Type} from "net.minecraft.client.Camera"
import {$LevelRendererAccessor$$Interface as $LevelRendererAccessor$2$$Interface} from "com.simibubi.create.foundation.mixin.accessor.LevelRendererAccessor"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$SectionRenderDispatcher$RenderSection, $SectionRenderDispatcher$RenderSection$$Type} from "net.minecraft.client.renderer.chunk.SectionRenderDispatcher$RenderSection"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$IdentifiableResourceReloadListener$$Interface} from "net.fabricmc.fabric.api.resource.IdentifiableResourceReloadListener"
import {$ShaderInstance$$Type} from "net.minecraft.client.renderer.ShaderInstance"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$LevelRendererAccessor$$Interface as $LevelRendererAccessor$1$$Interface} from "net.irisshaders.iris.mixin.LevelRendererAccessor"
import {$CullingDataCache$$Interface} from "net.irisshaders.iris.shadows.CullingDataCache"
import {$GameRenderer$$Type} from "net.minecraft.client.renderer.GameRenderer"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$BlockEntityRenderDispatcher$$Type} from "net.minecraft.client.renderer.blockentity.BlockEntityRenderDispatcher"
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$SectionRenderDispatcher} from "net.minecraft.client.renderer.chunk.SectionRenderDispatcher"
import {$DeltaTracker$$Type} from "net.minecraft.client.DeltaTracker"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$SodiumWorldRenderer} from "net.caffeinemc.mods.sodium.client.render.SodiumWorldRenderer"
import {$AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"
import {$LevelRendererExtension$$Interface} from "net.caffeinemc.mods.sodium.client.world.LevelRendererExtension"
import {$DimensionSpecialEffects$$Type} from "net.minecraft.client.renderer.DimensionSpecialEffects"
import {$VertexBuffer$$Type} from "com.mojang.blaze3d.vertex.VertexBuffer"
import {$Long2ObjectMap} from "it.unimi.dsi.fastutil.longs.Long2ObjectMap"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ResourceManagerReloadListener$$Interface} from "net.minecraft.server.packs.resources.ResourceManagerReloadListener"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$WorldRendererAccessor$$Interface} from "toni.sodiumdynamiclights.accessor.WorldRendererAccessor"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$RenderTarget} from "com.mojang.blaze3d.pipeline.RenderTarget"
import {$LightTexture$$Type} from "net.minecraft.client.renderer.LightTexture"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$ObjectArrayList} from "it.unimi.dsi.fastutil.objects.ObjectArrayList"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Operation$$Type} from "com.llamalad7.mixinextras.injector.wrapoperation.Operation"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$EntityRenderDispatcher, $EntityRenderDispatcher$$Type} from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"
import {$AccessorLevelRenderer$$Interface} from "com.railwayteam.railways.mixin.client.AccessorLevelRenderer"
import {$LevelRendererAccessor$$Interface} from "dev.engine_room.flywheel.backend.mixin.LevelRendererAccessor"
import {$ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"

export class $LevelRenderer implements $ResourceManagerReloadListener$$Interface, $AutoCloseable$$Interface, $WorldRendererAccessor$$Interface, $LevelRendererAccessor$0$$Interface, $LevelRendererAccessor$1$$Interface, $CullingDataCache$$Interface, $LevelRendererExtension$$Interface, $AccessorLevelRenderer$$Interface, $IdentifiableResourceReloadListener$$Interface, $LevelRendererAccessor$$Interface, $LevelRendererAccessor$2$$Interface {
 "sc": float
 "renderBuffers": $RenderBuffers
 "visibleSections": $ObjectArrayList<($SectionRenderDispatcher$RenderSection)>
static readonly "HALF_SECTION_SIZE": integer
static readonly "SECTION_SIZE": integer
static readonly "DIRECTIONS": ($Direction)[]
static readonly "CLOUDS_LOCATION": $ResourceLocation

constructor(arg0: $Minecraft$$Type, arg1: $EntityRenderDispatcher$$Type, arg2: $BlockEntityRenderDispatcher$$Type, arg3: $RenderBuffers$$Type)

public "tickRain"(arg0: $Camera$$Type): void
public "getFrustum"(): $Frustum
public "clear"(): void
public "close"(): void
public "resize"(arg0: integer, arg1: integer): void
public "tick"(): void
public "getLevel"(): $ClientLevel
public "setLevel"(arg0: $ClientLevel$$Type): void
public "handler$gjf001$northstar$renderClouds"(poseStack: $PoseStack$$Type, frustumMatrix: $Matrix4f$$Type, projectionMatrix: $Matrix4f$$Type, partialTick: float, camX: double, camY: double, camZ: double, info: $CallbackInfo$$Type): void
public "wrapOperation$zcp000$sodium_extra$redirectSetSkyShader"(arg0: $VertexBuffer$$Type, arg1: $Matrix4f$$Type, arg2: $Matrix4f$$Type, arg3: $ShaderInstance$$Type, arg4: $Operation$$Type): void
public "entityTarget"(): $RenderTarget
public "getItemEntityTarget"(): $RenderTarget
public "getTranslucentTarget"(): $RenderTarget
public "countRenderedSections"(): integer
public "hasRenderedAllSections"(): boolean
public "wrapOperation$zdi000$sodium_extra$redirectGetFogColorOverride"(arg0: $DimensionSpecialEffects$$Type, arg1: float, arg2: float, arg3: $Operation$$Type): (float)[]
public "wrapOperation$zdg000$sodium_extra$redirectGetStarBrightness"(arg0: $ClientLevel$$Type, arg1: float, arg2: $Operation$$Type): float
public "needsUpdate"(): void
public "graphicsChanged"(): void
public "renderLevel"(arg0: $DeltaTracker$$Type, arg1: boolean, arg2: $Camera$$Type, arg3: $GameRenderer$$Type, arg4: $LightTexture$$Type, arg5: $Matrix4f$$Type, arg6: $Matrix4f$$Type): void
public "onResourceManagerReload"(arg0: $ResourceManager$$Type): void
public "captureFrustum"(): void
public "destroyBlockProgress"(arg0: integer, arg1: $BlockPos$$Type, arg2: integer): void
public "setBlocksDirty"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "addParticle"(arg0: $ParticleOptions$$Type, arg1: boolean, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double): void
public "addParticle"(arg0: $ParticleOptions$$Type, arg1: boolean, arg2: boolean, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: double): void
public "globalLevelEvent"(arg0: integer, arg1: $BlockPos$$Type, arg2: integer): void
public "renderSky"(arg0: $Matrix4f$$Type, arg1: $Matrix4f$$Type, arg2: float, arg3: $Camera$$Type, arg4: boolean, arg5: $Runnable$$Type): void
public "levelEvent"(arg0: integer, arg1: $BlockPos$$Type, arg2: integer): void
public "getSectionStatistics"(): StringJS
public "invokeRenderSectionLayer"(arg0: $RenderType$$Type, arg1: double, arg2: double, arg3: double, arg4: $Matrix4f$$Type, arg5: $Matrix4f$$Type): void
public "shouldRegenerateClouds"(): boolean
public "setShouldRegenerateClouds"(arg0: boolean): void
public "sodium$getWorldRenderer"(): $SodiumWorldRenderer
public "updateGlobalBlockEntities"(arg0: $Collection$$Type<($BlockEntity$$Type)>, arg1: $Collection$$Type<($BlockEntity$$Type)>): void
public "railways$getRenderBuffers"(): $RenderBuffers
public "notifyNearbyEntities"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: boolean): void
public "addRecentlyCompiledSection"(arg0: $SectionRenderDispatcher$RenderSection$$Type): void
public "requestOutlineEffect"(): void
public "addParticleInternal"(arg0: $ParticleOptions$$Type, arg1: boolean, arg2: boolean, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: double): $Particle
public "getCloudsTarget"(): $RenderTarget
public "getWeatherTarget"(): $RenderTarget
public "getParticlesTarget"(): $RenderTarget
public "prepareCullFrustum"(arg0: $Vec3$$Type, arg1: $Matrix4f$$Type, arg2: $Matrix4f$$Type): void
public "doEntityOutline"(): void
public "getFabricId"(): $ResourceLocation
public "getTicks"(): integer
public "callAddParticleInternal"(arg0: $ParticleOptions$$Type, arg1: boolean, arg2: boolean, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: double): $Particle
public "create$getCullingFrustum"(): $Frustum
public "create$getCapturedFrustum"(): $Frustum
public "getDestructionProgress"(): $Long2ObjectMap
public "setSectionDirtyWithNeighbors"(arg0: integer, arg1: integer, arg2: integer): void
public "blockChanged"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type, arg4: integer): void
public "onChunkLoaded"(arg0: $ChunkPos$$Type): void
public "setBlockDirty"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type, arg2: $BlockState$$Type): void
public "getEntityRenderDispatcher"(): $EntityRenderDispatcher
public "allChanged"(): void
public "saveState"(): void
public "initOutline"(): void
public "isSectionCompiled"(arg0: $BlockPos$$Type): boolean
public "getTotalSections"(): double
public static "offsetFrustum"(arg0: $Frustum$$Type): $Frustum
public static "renderVoxelShape"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: $VoxelShape$$Type, arg3: double, arg4: double, arg5: double, arg6: float, arg7: float, arg8: float, arg9: float, arg10: boolean): void
public "renderClouds"(arg0: $PoseStack$$Type, arg1: $Matrix4f$$Type, arg2: $Matrix4f$$Type, arg3: float, arg4: double, arg5: double, arg6: double): void
public static "renderShape"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: $VoxelShape$$Type, arg3: double, arg4: double, arg5: double, arg6: float, arg7: float, arg8: float, arg9: float): void
public static "renderLineBox"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: $AABB$$Type, arg3: float, arg4: float, arg5: float, arg6: float): void
public static "renderLineBox"(arg0: $VertexConsumer$$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: float, arg8: float, arg9: float, arg10: float): void
public static "renderLineBox"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: float, arg9: float, arg10: float, arg11: float, arg12: float, arg13: float, arg14: float): void
public static "renderLineBox"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: float, arg9: float, arg10: float, arg11: float): void
public "setSectionDirty"(arg0: integer, arg1: integer, arg2: integer): void
public "killFrustum"(): void
public "playJukeboxSong"(arg0: $Holder$$Type<($JukeboxSong)>, arg1: $BlockPos$$Type): void
public "renderHitOutline"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: $Entity$$Type, arg3: double, arg4: double, arg5: double, arg6: $BlockPos$$Type, arg7: $BlockState$$Type): void
public static "getLightColor"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type): integer
public static "getLightColor"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): integer
public static "renderFace"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: $Direction$$Type, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float, arg12: float): void
public "getFabricDependencies"(): $Collection
public "restoreState"(): void
public "getCullingFrustum"(): $Frustum
public "getRenderBuffers"(): $RenderBuffers
public "invokeSetupRender"(arg0: $Camera$$Type, arg1: $Frustum$$Type, arg2: boolean, arg3: boolean): void
public "flywheel$getTicks"(): integer
public "invokeRenderEntity"(arg0: $Entity$$Type, arg1: double, arg2: double, arg3: double, arg4: float, arg5: $PoseStack$$Type, arg6: $MultiBufferSource$$Type): void
public "setRenderBuffers"(arg0: $RenderBuffers$$Type): void
public "invokeDoesMobEffectBlockSky"(arg0: $Camera$$Type): boolean
public "stopJukeboxSongAndNotifyNearby"(arg0: $BlockPos$$Type): void
public static "addChainedFilledBoxVertices"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float): void
public static "addChainedFilledBoxVertices"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: float, arg9: float, arg10: float, arg11: float): void
public "iterateVisibleBlockEntities"(arg0: $Consumer$$Type<($BlockEntity)>): void
public "handler$cep000$sodium$replaceBlockEntityIteration"(arg0: $Consumer$$Type, arg1: $CallbackInfo$$Type): void
public "handler$bfc000$supermartijn642corelib$renderLevel"(deltaTracker: $DeltaTracker$$Type, bl: boolean, camera: $Camera$$Type, gameRenderer: $GameRenderer$$Type, lightTexture: $LightTexture$$Type, matrix4f: $Matrix4f$$Type, matrix4f2: $Matrix4f$$Type, ci: $CallbackInfo$$Type): void
public "handler$ego000$bridgingmod$renderTracedViewPath"(deltaTracker: $DeltaTracker$$Type, bl: boolean, camera: $Camera$$Type, gameRenderer: $GameRenderer$$Type, lightTexture: $LightTexture$$Type, matrix4f: $Matrix4f$$Type, matrix4f2: $Matrix4f$$Type, ci: $CallbackInfo$$Type): void
public "handler$zcp000$sodium_extra$preRenderEndSky"(arg0: $PoseStack$$Type, arg1: $CallbackInfo$$Type): void
public "handler$zce000$sodium_extra$tickRainSplashing"(arg0: $Camera$$Type, arg1: $CallbackInfo$$Type): void
public "handler$daa000$geckolib$captureRenderedEntities"(arg0: $DeltaTracker$$Type, arg1: boolean, arg2: $Camera$$Type, arg3: $GameRenderer$$Type, arg4: $LightTexture$$Type, arg5: $Matrix4f$$Type, arg6: $Matrix4f$$Type, arg7: $CallbackInfo$$Type): void
public "handler$cge000$sodium$renderClouds"(arg0: $PoseStack$$Type, arg1: $Matrix4f$$Type, arg2: $Matrix4f$$Type, arg3: float, arg4: double, arg5: double, arg6: double, arg7: $CallbackInfo$$Type): void
public "sodiumdynamiclights$scheduleChunkRebuild"(arg0: integer, arg1: integer, arg2: integer, arg3: boolean): void
public "handler$efg000$patchouli$onRender"(arg0: $DeltaTracker$$Type, arg1: boolean, arg2: $Camera$$Type, arg3: $GameRenderer$$Type, arg4: $LightTexture$$Type, arg5: $Matrix4f$$Type, arg6: $Matrix4f$$Type, arg7: $CallbackInfo$$Type): void
public "shouldShowEntityOutlines"(): boolean
public "getSectionRenderDispatcher"(): $SectionRenderDispatcher
public "getLastViewDistance"(): double
public "getEntityStatistics"(): StringJS
public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
public "getName"(): StringJS
get "frustum"(): $Frustum
get "level"(): $ClientLevel
set "level"(value: $ClientLevel$$Type)
get "itemEntityTarget"(): $RenderTarget
get "translucentTarget"(): $RenderTarget
get "sectionStatistics"(): StringJS
get "cloudsTarget"(): $RenderTarget
get "weatherTarget"(): $RenderTarget
get "particlesTarget"(): $RenderTarget
get "fabricId"(): $ResourceLocation
get "ticks"(): integer
get "destructionProgress"(): $Long2ObjectMap
get "entityRenderDispatcher"(): $EntityRenderDispatcher
get "totalSections"(): double
get "fabricDependencies"(): $Collection
get "cullingFrustum"(): $Frustum
get "sectionRenderDispatcher"(): $SectionRenderDispatcher
get "lastViewDistance"(): double
get "entityStatistics"(): StringJS
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
public "getSerializedName"(): StringJS
public "lightLikeBlock"(): boolean
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
declare module "net.minecraft.client.renderer.SectionBufferBuilderPack" {
import {$Map} from "java.util.Map"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$ByteBufferBuilder} from "com.mojang.blaze3d.vertex.ByteBufferBuilder"
import {$SectionBufferBuilderPackAccessor$$Interface} from "net.irisshaders.batchedentityrendering.mixin.SectionBufferBuilderPackAccessor"
import {$RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export class $SectionBufferBuilderPack implements $AutoCloseable$$Interface, $SectionBufferBuilderPackAccessor$$Interface {
static readonly "TOTAL_BUFFERS_SIZE": integer

constructor()

public "buffer"(arg0: $RenderType$$Type): $ByteBufferBuilder
public "close"(): void
public "getBuffers"(): $Map
public "clearAll"(): void
public "discardAll"(): void
get "buffers"(): $Map
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
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
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

public static "getTranslucentTransparency"(): $RenderStateShard$TransparencyStateShard
public static "getGLINT_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getCRUMBLING_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getNO_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
get "translucentTransparency"(): $RenderStateShard$TransparencyStateShard
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
declare module "net.minecraft.client.renderer.debug.VillageSectionsDebugRenderer" {
import {$DebugRenderer$SimpleDebugRenderer$$Interface} from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$SectionPos$$Type} from "net.minecraft.core.SectionPos"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"

export class $VillageSectionsDebugRenderer implements $DebugRenderer$SimpleDebugRenderer$$Interface {
constructor()

public "clear"(): void
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: double, arg3: double, arg4: double): void
public "setNotVillageSection"(arg0: $SectionPos$$Type): void
public "setVillageSection"(arg0: $SectionPos$$Type): void
set "notVillageSection"(value: $SectionPos$$Type)
set "villageSection"(value: $SectionPos$$Type)
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
public "setUniform"(arg0: StringJS, arg1: float): void
public "getTempTarget"(arg0: StringJS): $RenderTarget
public "addTempTarget"(arg0: StringJS, arg1: integer, arg2: integer): void
public "addPass"(arg0: StringJS, arg1: $RenderTarget$$Type, arg2: $RenderTarget$$Type, arg3: boolean): $PostPass
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

public "clear"(): void
public "removeBrainDump"(arg0: integer): void
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: double, arg3: double, arg4: double): void
public "addPoi"(arg0: $BrainDebugRenderer$PoiInfo$$Type): void
public "removePoi"(arg0: $BlockPos$$Type): void
public "addOrUpdateBrainDump"(arg0: $BrainDebugPayload$BrainDump$$Type): void
public "setFreeTicketCount"(arg0: $BlockPos$$Type, arg1: integer): void
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
declare module "net.minecraft.client.renderer.PostPass" {
import {$ResourceProvider$$Type} from "net.minecraft.server.packs.resources.ResourceProvider"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$EffectInstance} from "net.minecraft.client.renderer.EffectInstance"
import {$RenderTarget, $RenderTarget$$Type} from "com.mojang.blaze3d.pipeline.RenderTarget"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"
import {$IntSupplier$$Type} from "java.util.function.IntSupplier"

export class $PostPass implements $AutoCloseable$$Interface {
readonly "outTarget": $RenderTarget
readonly "inTarget": $RenderTarget

constructor(arg0: $ResourceProvider$$Type, arg1: StringJS, arg2: $RenderTarget$$Type, arg3: $RenderTarget$$Type, arg4: boolean)

public "getName"(): StringJS
public "close"(): void
public "process"(arg0: float): void
public "getEffect"(): $EffectInstance
public "getFilterMode"(): integer
public "setOrthoMatrix"(arg0: $Matrix4f$$Type): void
public "addAuxAsset"(arg0: StringJS, arg1: $IntSupplier$$Type, arg2: integer, arg3: integer): void
get "name"(): StringJS
get "effect"(): $EffectInstance
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
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Font$$Type} from "net.minecraft.client.gui.Font"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$Camera, $Camera$$Type} from "net.minecraft.client.Camera"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$ItemRenderer$$Type} from "net.minecraft.client.renderer.entity.ItemRenderer"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceManagerReloadListener$$Interface} from "net.minecraft.server.packs.resources.ResourceManagerReloadListener"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$BlockRenderDispatcher$$Type} from "net.minecraft.client.renderer.block.BlockRenderDispatcher"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$EntityRenderDispatcher$$Type} from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$BlockEntityRenderer} from "net.minecraft.client.renderer.blockentity.BlockEntityRenderer"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$EntityModelSet$$Type} from "net.minecraft.client.model.geom.EntityModelSet"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $BlockEntityRenderDispatcher implements $ResourceManagerReloadListener$$Interface {
 "cameraHitResult": $HitResult
 "level": $Level
 "camera": $Camera

constructor(arg0: $Font$$Type, arg1: $EntityModelSet$$Type, arg2: $Supplier$$Type<($BlockRenderDispatcher$$Type)>, arg3: $Supplier$$Type<($ItemRenderer$$Type)>, arg4: $Supplier$$Type<($EntityRenderDispatcher$$Type)>)

public "prepare"(arg0: $Level$$Type, arg1: $Camera$$Type, arg2: $HitResult$$Type): void
public "setLevel"(arg0: $Level$$Type): void
public "renderItem"<E extends $BlockEntity>(arg0: E, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: integer, arg4: integer): boolean
public "getRenderer"<E extends $BlockEntity>(arg0: E): $BlockEntityRenderer<(E)>
public "onResourceManagerReload"(arg0: $ResourceManager$$Type): void
public "render"<E extends $BlockEntity>(arg0: E, arg1: float, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type): void
public "handler$cle000$entityculling$render"(blockEntity: $BlockEntity$$Type, f: float, poseStack: $PoseStack$$Type, multiBufferSource: $MultiBufferSource$$Type, info: $CallbackInfo$$Type): void
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
declare module "net.minecraft.client.renderer.CubeMap" {
import {$TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"

export class $CubeMap {
constructor(arg0: $ResourceLocation$$Type)

public "render"(arg0: $Minecraft$$Type, arg1: float, arg2: float, arg3: float): void
public "preload"(arg0: $TextureManager$$Type, arg1: $Executor$$Type): $CompletableFuture<(void)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CubeMap$$Type = ($CubeMap);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CubeMap$$Original = $CubeMap;}
declare module "net.minecraft.client.renderer.texture.TextureManager" {
import {$Collection} from "java.util.Collection"
import {$Map} from "java.util.Map"
import {$Tickable$$Interface} from "net.minecraft.client.renderer.texture.Tickable"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$PreparableReloadListener$$Interface} from "net.minecraft.server.packs.resources.PreparableReloadListener"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$AbstractTexture, $AbstractTexture$$Type} from "net.minecraft.client.renderer.texture.AbstractTexture"
import {$DynamicTexture$$Type} from "net.minecraft.client.renderer.texture.DynamicTexture"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
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

public "register"(arg0: StringJS, arg1: $DynamicTexture$$Type): $ResourceLocation
public "register"(arg0: $ResourceLocation$$Type, arg1: $AbstractTexture$$Type): void
public "close"(): void
public "release"(arg0: $ResourceLocation$$Type): void
public "tick"(): void
public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
public "bindForSetup"(arg0: $ResourceLocation$$Type): void
public "getFabricId"(): $ResourceLocation
public "getTexture"(arg0: $ResourceLocation$$Type): $AbstractTexture
public "getTexture"(arg0: $ResourceLocation$$Type, arg1: $AbstractTexture$$Type): $AbstractTexture
public "preload"(arg0: $ResourceLocation$$Type, arg1: $Executor$$Type): $CompletableFuture<(void)>
public "getFabricDependencies"(): $Collection
public "dumpAllSheets"(arg0: $Path$$Type): void
public "getName"(): StringJS
get "fabricId"(): $ResourceLocation
get "fabricDependencies"(): $Collection
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
declare module "net.minecraft.client.renderer.block.model.Variant" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Transformation, $Transformation$$Type} from "com.mojang.math.Transformation"
import {$ModelState$$Interface} from "net.minecraft.client.resources.model.ModelState"

export class $Variant implements $ModelState$$Interface {
constructor(arg0: $ResourceLocation$$Type, arg1: $Transformation$$Type, arg2: boolean, arg3: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getModelLocation"(): $ResourceLocation
public "getWeight"(): integer
public "getRotation"(): $Transformation
public "isUvLocked"(): boolean
public "mayApplyArbitraryRotation"(): boolean
get "modelLocation"(): $ResourceLocation
get "weight"(): integer
get "rotation"(): $Transformation
get "uvLocked"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Variant$$Type = ($Variant);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Variant$$Original = $Variant;}
declare module "net.minecraft.client.renderer.entity.LivingEntityRenderer" {
import {$RenderLayer, $RenderLayer$$Type} from "net.minecraft.client.renderer.entity.layers.RenderLayer"
import {$EntityRenderer} from "net.minecraft.client.renderer.entity.EntityRenderer"
import {$LivingEntityRendererAccessor$$Interface} from "com.furiusmax.bjornlib.neo.mixin.client.LivingEntityRendererAccessor"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List} from "java.util.List"
import {$LivingEntityRendererInvoker$$Interface} from "net.dawson.adorablehamsterpets.mixin.client.LivingEntityRendererInvoker"
import {$EntityRendererProvider$Context$$Type} from "net.minecraft.client.renderer.entity.EntityRendererProvider$Context"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$EntityRenderDispatcher} from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"
import {$RenderLayerParent$$Interface} from "net.minecraft.client.renderer.entity.RenderLayerParent"
import {$LivingEntityRendererAccessor$$Interface as $LivingEntityRendererAccessor$0$$Interface} from "net.fabricmc.fabric.mixin.client.rendering.LivingEntityRendererAccessor"
import {$EntityModel, $EntityModel$$Type} from "net.minecraft.client.model.EntityModel"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$RenderType} from "net.minecraft.client.renderer.RenderType"
import {$AccessorLivingEntityRenderer$$Interface} from "com.railwayteam.railways.mixin.client.AccessorLivingEntityRenderer"

export class $LivingEntityRenderer<T extends $LivingEntity, M extends $EntityModel<(object)>> extends $EntityRenderer<(T)> implements $RenderLayerParent$$Interface<(T), (M)>, $LivingEntityRendererAccessor$0$$Interface, $AccessorLivingEntityRenderer$$Interface, $LivingEntityRendererAccessor$$Interface, $LivingEntityRendererInvoker$$Interface {
 "shadowRadius": float
static readonly "LEASH_RENDER_STEPS": integer
readonly "entityRenderDispatcher": $EntityRenderDispatcher
 "layers": $List<($RenderLayer<(T), (M)>)>
 "shadowStrength": float
 "model": M
static readonly "NAMETAG_SCALE": float

constructor(arg0: $EntityRendererProvider$Context$$Type, arg1: M, arg2: float)

public "scale"(arg0: T, arg1: $PoseStack$$Type, arg2: float): void
public "getModel"(): M
public static "getOverlayCoords"(arg0: $LivingEntity$$Type, arg1: float): integer
public "isShaking"(arg0: T): boolean
public static "isEntityUpsideDown"(arg0: $LivingEntity$$Type): boolean
public "isBodyVisible"(arg0: T): boolean
public "setupRotations"(arg0: T, arg1: $PoseStack$$Type, arg2: float, arg3: float, arg4: float, arg5: float): void
public "callAddFeature"(arg0: $RenderLayer$$Type): boolean
public "callGetRenderType"(arg0: $LivingEntity$$Type, arg1: boolean, arg2: boolean, arg3: boolean): $RenderType
public "callSetupRotations"(arg0: $LivingEntity$$Type, arg1: $PoseStack$$Type, arg2: float, arg3: float, arg4: float, arg5: float): void
public "getFlipDegrees"(arg0: T): float
public "getRenderType"(arg0: T, arg1: boolean, arg2: boolean, arg3: boolean): $RenderType
public "render"(arg0: $Entity$$Type, arg1: float, arg2: float, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer): void
public "render"(arg0: T, arg1: float, arg2: float, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer): void
public "addLayer"(arg0: $RenderLayer$$Type<(T), (M)>): boolean
public "getBob"(arg0: T, arg1: float): float
public "getShadowRadius"(arg0: T): float
public "getShadowRadius"(arg0: $Entity$$Type): float
public "getWhiteOverlayProgress"(arg0: T, arg1: float): float
public "shouldShowName"(arg0: T): boolean
public "shouldShowName"(arg0: $Entity$$Type): boolean
public "getAttackAnim"(arg0: T, arg1: float): float
public "getTextureLocation"(arg0: T): $ResourceLocation
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
declare module "net.minecraft.client.renderer.RenderType$CompositeRenderType" {
import {$Optional} from "java.util.Optional"
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$ImmutableList} from "com.google.common.collect.ImmutableList"
import {$Runnable} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$Function} from "java.util.function.Function"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderType$CompositeState, $RenderType$CompositeState$$Type} from "net.minecraft.client.renderer.RenderType$CompositeState"
import {$TransparencyType, $TransparencyType$$Type} from "net.irisshaders.batchedentityrendering.impl.TransparencyType"
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$BlendingStateHolder$$Interface} from "net.irisshaders.batchedentityrendering.impl.BlendingStateHolder"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$BiFunction} from "java.util.function.BiFunction"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$VertexFormat$Mode$$Type} from "com.mojang.blaze3d.vertex.VertexFormat$Mode"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"
import {$VertexFormat$$Type} from "com.mojang.blaze3d.vertex.VertexFormat"
import {$RenderType} from "net.minecraft.client.renderer.RenderType"
import {$ETFRenderLayerWithTexture$$Interface} from "traben.entity_texture_features.utils.ETFRenderLayerWithTexture"

export class $RenderType$CompositeRenderType extends $RenderType implements $BlendingStateHolder$$Interface, $ETFRenderLayerWithTexture$$Interface {
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
static readonly "OUTLINE": $BiFunction<($ResourceLocation), ($RenderStateShard$CullStateShard), ($RenderType)>
static readonly "TEXT_BACKGROUND": $RenderType
static readonly "DEBUG_LINE_STRIP": $Function<(double), ($RenderType$CompositeRenderType)>
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: StringJS, arg1: $VertexFormat$$Type, arg2: $VertexFormat$Mode$$Type, arg3: integer, arg4: boolean, arg5: boolean, arg6: $RenderType$CompositeState$$Type)

public "outline"(): $Optional<($RenderType)>
public "isOutline"(): boolean
public "etf$getId"(): $Optional
public "toString"(): StringJS
public "state"(): $RenderType$CompositeState
public "setTransparencyType"(arg0: $TransparencyType$$Type): void
public "getTransparencyType"(): $TransparencyType
public static "catnip$create"(arg0: StringJS, arg1: $VertexFormat$$Type, arg2: $VertexFormat$Mode$$Type, arg3: integer, arg4: boolean, arg5: boolean, arg6: $RenderType$CompositeState$$Type): $RenderType$CompositeRenderType
public static "getTranslucentTransparency"(): $RenderStateShard$TransparencyStateShard
public static "getGLINT_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getCRUMBLING_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getNO_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
set "transparencyType"(value: $TransparencyType$$Type)
get "transparencyType"(): $TransparencyType
get "translucentTransparency"(): $RenderStateShard$TransparencyStateShard
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
import {$MemoryTrackingBuffer$$Interface} from "net.irisshaders.batchedentityrendering.impl.MemoryTrackingBuffer"
import {$BufferSourceExtension$$Interface} from "com.supermartijn642.fusion.extensions.BufferSourceExtension"
import {$Map} from "java.util.Map"
import {$BufferBuilder} from "com.mojang.blaze3d.vertex.BufferBuilder"
import {$VertexConsumer} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$IBufferSource$$Interface} from "xaero.common.core.IBufferSource"
import {$MultiBufferSource$$Interface} from "net.minecraft.client.renderer.MultiBufferSource"
import {$AccessorMultiBufferSource$$Interface} from "vazkii.patchouli.mixin.client.AccessorMultiBufferSource"
import {$SequencedMap, $SequencedMap$$Type} from "java.util.SequencedMap"
import {$ByteBufferBuilder, $ByteBufferBuilder$$Type} from "com.mojang.blaze3d.vertex.ByteBufferBuilder"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$BufferSourceAccessor$$Interface} from "net.irisshaders.batchedentityrendering.mixin.BufferSourceAccessor"

export class $MultiBufferSource$BufferSource implements $MultiBufferSource$$Interface, $BufferSourceAccessor$$Interface, $MemoryTrackingBuffer$$Interface, $BufferSourceExtension$$Interface, $IBufferSource$$Interface, $AccessorMultiBufferSource$$Interface {
readonly "startedBuilders": $Map<($RenderType), ($BufferBuilder)>
readonly "fixedBuffers": $SequencedMap<($RenderType), ($ByteBufferBuilder)>
 "lastSharedType": $RenderType
readonly "sharedBuffer": $ByteBufferBuilder

constructor(arg0: $ByteBufferBuilder$$Type, arg1: $SequencedMap$$Type<($RenderType$$Type), ($ByteBufferBuilder$$Type)>)

public "getBuffer"(arg0: $RenderType$$Type): $VertexConsumer
public "endBatch"(arg0: $RenderType$$Type): void
public "endBatch"(): void
public "localvar$cjl000$xaerominimap$onGetBuffer"(arg0: $RenderType$$Type): $RenderType
public "freeAndDeleteBuffer"(): void
public "endLastBatch"(): void
public "getUsedSize"(): long
public "getAllocatedSize"(): long
public "getFixedBuffers"(): $SequencedMap
public "getFallbackBuffer"(): $ByteBufferBuilder
public "fusionGetLastRenderType"(): $RenderType
public "setXaero_lastRenderType"(arg0: $RenderType$$Type): void
public "getXaero_lastRenderType"(): $RenderType
public static "immediate"(arg0: $ByteBufferBuilder$$Type): $MultiBufferSource$BufferSource
public static "immediateWithBuffers"(arg0: $SequencedMap$$Type<($RenderType$$Type), ($ByteBufferBuilder$$Type)>, arg1: $ByteBufferBuilder$$Type): $MultiBufferSource$BufferSource
get "usedSize"(): long
get "allocatedSize"(): long
get "fallbackBuffer"(): $ByteBufferBuilder
set "xaero_lastRenderType"(value: $RenderType$$Type)
get "xaero_lastRenderType"(): $RenderType
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

public "createRegion"(arg0: $Level$$Type, arg1: $SectionPos$$Type, arg2: boolean): $RenderChunkRegion
public "createRegion"(arg0: $Level$$Type, arg1: $SectionPos$$Type): $RenderChunkRegion
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
declare module "net.minecraft.client.renderer.BlockEntityWithoutLevelRenderer" {
import {$ItemDisplayContext$$Type} from "net.minecraft.world.item.ItemDisplayContext"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$BlockEntityRenderDispatcher$$Type} from "net.minecraft.client.renderer.blockentity.BlockEntityRenderDispatcher"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceManagerReloadListener$$Interface} from "net.minecraft.server.packs.resources.ResourceManagerReloadListener"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$EntityModelSet$$Type} from "net.minecraft.client.model.geom.EntityModelSet"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $BlockEntityWithoutLevelRenderer implements $ResourceManagerReloadListener$$Interface {
constructor(arg0: $BlockEntityRenderDispatcher$$Type, arg1: $EntityModelSet$$Type)

public "onResourceManagerReload"(arg0: $ResourceManager$$Type): void
public "renderByItem"(arg0: $ItemStack$$Type, arg1: $ItemDisplayContext$$Type, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type, arg4: integer, arg5: integer): void
public "handler$cpo000$geckolib$renderGeckolibItem"(arg0: $ItemStack$$Type, arg1: $ItemDisplayContext$$Type, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type, arg4: integer, arg5: integer, arg6: $CallbackInfo$$Type): void
public "handler$fdi000$skinlayers3d$renderByItem"(itemStack: $ItemStack$$Type, itemDisplayContext: $ItemDisplayContext$$Type, poseStack: $PoseStack$$Type, multiBufferSource: $MultiBufferSource$$Type, i: integer, j: integer, info: $CallbackInfo$$Type): void
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
declare module "net.minecraft.client.renderer.PanoramaRenderer" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$CubeMap$$Type} from "net.minecraft.client.renderer.CubeMap"

export class $PanoramaRenderer {
static readonly "PANORAMA_OVERLAY": $ResourceLocation

constructor(arg0: $CubeMap$$Type)

public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float, arg4: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PanoramaRenderer$$Type = ($PanoramaRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PanoramaRenderer$$Original = $PanoramaRenderer;}
declare module "net.minecraft.client.renderer.texture.TextureAtlas" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$TextureAtlasAccessor$$Interface as $TextureAtlasAccessor$0$$Interface} from "net.caffeinemc.mods.sodium.mixin.core.render.texture.TextureAtlasAccessor"
import {$Map} from "java.util.Map"
import {$Tickable$$Interface} from "net.minecraft.client.renderer.texture.Tickable"
import {$PBRAtlasHolder} from "net.irisshaders.iris.pbr.texture.PBRAtlasHolder"
import {$SpriteFinderImpl} from "net.fabricmc.fabric.impl.renderer.SpriteFinderImpl"
import {$TextureAtlasExtension$$Interface} from "net.irisshaders.iris.pbr.texture.TextureAtlasExtension"
import {$Dumpable$$Interface} from "net.minecraft.client.renderer.texture.Dumpable"
import {$AbstractTexture} from "net.minecraft.client.renderer.texture.AbstractTexture"
import {$SpriteLoader$Preparations$$Type} from "net.minecraft.client.renderer.texture.SpriteLoader$Preparations"
import {$SpriteFinderImpl$SpriteFinderAccess$$Interface} from "net.fabricmc.fabric.impl.renderer.SpriteFinderImpl$SpriteFinderAccess"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TextureAtlasSprite$Ticker} from "net.minecraft.client.renderer.texture.TextureAtlasSprite$Ticker"
import {$TextureAtlasAccessor$$Interface} from "net.irisshaders.iris.mixin.texture.TextureAtlasAccessor"
import {$Path$$Type} from "java.nio.file.Path"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $TextureAtlas extends $AbstractTexture implements $Dumpable$$Interface, $Tickable$$Interface, $TextureAtlasAccessor$$Interface, $TextureAtlasExtension$$Interface, $TextureAtlasAccessor$0$$Interface, $SpriteFinderImpl$SpriteFinderAccess$$Interface {
static readonly "NOT_ASSIGNED": integer
/**
 * 
 * @deprecated
 */
static readonly "LOCATION_BLOCKS": $ResourceLocation
 "mipmap": boolean
/**
 * 
 * @deprecated
 */
static readonly "LOCATION_PARTICLES": $ResourceLocation
 "texturesByName": $Map<($ResourceLocation), ($TextureAtlasSprite)>
 "width": integer
 "blur": boolean
 "id": integer
 "height": integer

constructor(arg0: $ResourceLocation$$Type)

public "load"(arg0: $ResourceManager$$Type): void
public "location"(): $ResourceLocation
public "tick"(): void
public "getWidth"(): integer
public "fabric_spriteFinder"(): $SpriteFinderImpl
public "redirect$zbj000$sodium_extra$sodiumExtra$tickAnimatedSprites"(arg0: $TextureAtlasSprite$$Type): $TextureAtlasSprite$Ticker
public "upload"(arg0: $SpriteLoader$Preparations$$Type): void
public "getMipLevel"(): integer
public "updateFilter"(arg0: $SpriteLoader$Preparations$$Type): void
public "clearTextureData"(): void
public "getPBRHolder"(): $PBRAtlasHolder
public "getTextures"(): $Map<($ResourceLocation), ($TextureAtlasSprite)>
public "getTexturesByName"(): $Map
public "callGetWidth"(): integer
public "callGetHeight"(): integer
public "getSprite"(arg0: $ResourceLocation$$Type): $TextureAtlasSprite
public "dumpContents"(arg0: $ResourceLocation$$Type, arg1: $Path$$Type): void
public "getHeight"(): integer
public "maxSupportedTextureSize"(): integer
public "cycleAnimationFrames"(): void
public "getOrCreatePBRHolder"(): $PBRAtlasHolder
get "mipLevel"(): integer
get "PBRHolder"(): $PBRAtlasHolder
get "textures"(): $Map<($ResourceLocation), ($TextureAtlasSprite)>
get "orCreatePBRHolder"(): $PBRAtlasHolder
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
