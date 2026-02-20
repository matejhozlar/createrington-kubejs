declare module "traben.entity_texture_features.features.texture_handlers.ETFSprite" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$SpriteContents} from "net.minecraft.client.renderer.texture.SpriteContents"
import {$ETFTexture$$Type} from "traben.entity_texture_features.features.texture_handlers.ETFTexture"
import {$Resource$$Type} from "net.minecraft.server.packs.resources.Resource"

export class $ETFSprite {
readonly "isETFAltered": boolean

constructor(originalSprite: $TextureAtlasSprite$$Type, etfTexture: $ETFTexture$$Type, isNotVariant: boolean)

public static "load"(id: $ResourceLocation$$Type, resource: $Resource$$Type): $SpriteContents
public "isEmissive"(): boolean
public "getSpriteVariant"(): $TextureAtlasSprite
public "getEmissive"(): $TextureAtlasSprite
get "emissive"(): boolean
get "spriteVariant"(): $TextureAtlasSprite
get "emissive"(): $TextureAtlasSprite
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ETFSprite$$Type = ($ETFSprite);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ETFSprite$$Original = $ETFSprite;}
declare module "traben.entity_texture_features.features.texture_handlers.ETFTexture" {
import {$TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$ETFTexture$TextureReturnState} from "traben.entity_texture_features.features.texture_handlers.ETFTexture$TextureReturnState"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$VertexConsumer} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$Model$$Type} from "net.minecraft.client.model.Model"
import {$ETFConfig$EmissiveRenderModes$$Type} from "traben.entity_texture_features.config.ETFConfig$EmissiveRenderModes"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ETFSprite} from "traben.entity_texture_features.features.texture_handlers.ETFSprite"
import {$NativeImage$$Type} from "com.mojang.blaze3d.platform.NativeImage"
import {$ETFEntity$$Type} from "traben.entity_texture_features.utils.ETFEntity"
import {$ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"

export class $ETFTexture {
static readonly "PATCH_NAMESPACE_PREFIX": StringJS
 "currentTextureState": $ETFTexture$TextureReturnState
readonly "thisIdentifier": $ResourceLocation
 "eSuffix": StringJS

constructor(variantIdentifier: $ResourceLocation$$Type)

public "toString"(): StringJS
public "exists"(): boolean
public "isEmissive"(): boolean
public "doesBlink"(): boolean
public "canPatch"(): boolean
public "doesBlink2"(): boolean
public "getEnchantIdentifierOfCurrentState"(): $ResourceLocation
public "renderEmissive"(matrixStack: $PoseStack$$Type, vertexConsumerProvider: $MultiBufferSource$$Type, model: $Model$$Type): void
public "renderEmissive"(matrixStack: $PoseStack$$Type, vertexConsumerProvider: $MultiBufferSource$$Type, model: $Model$$Type, modeToUsePossiblyManuallyChosen: $ETFConfig$EmissiveRenderModes$$Type): void
public "renderEmissive"(matrixStack: $PoseStack$$Type, vertexConsumerProvider: $MultiBufferSource$$Type, modelPart: $ModelPart$$Type, modeToUsePossiblyManuallyChosen: $ETFConfig$EmissiveRenderModes$$Type): void
public "renderEmissive"(matrixStack: $PoseStack$$Type, vertexConsumerProvider: $MultiBufferSource$$Type, modelPart: $ModelPart$$Type): void
public "isEnchanted"(): boolean
public "setGUIBlink"(): void
public "getTextureIdentifier"(entity: $ETFEntity$$Type): $ResourceLocation
public static "manual"(modifiedSkinIdentifier: $ResourceLocation$$Type, blinkIdentifier: $ResourceLocation$$Type, blink2Identifier: $ResourceLocation$$Type, emissiveIdentifier: $ResourceLocation$$Type, blinkEmissiveIdentifier: $ResourceLocation$$Type, blink2EmissiveIdentifier: $ResourceLocation$$Type, enchantIdentifier: $ResourceLocation$$Type, blinkenchantIdentifier: $ResourceLocation$$Type, blink2enchantIdentifier: $ResourceLocation$$Type, patchIdentifier: $ResourceLocation$$Type, blinkpatchIdentifier: $ResourceLocation$$Type, blink2patchIdentifier: $ResourceLocation$$Type): $ETFTexture
public static "manual"(modifiedSkinIdentifier: $ResourceLocation$$Type, emissiveIdentifier: $ResourceLocation$$Type, enchantIdentifier: $ResourceLocation$$Type): $ETFTexture
public "getEmissiveIdentifierOfCurrentState"(): $ResourceLocation
public static "ofUnmodifiable"(identifier: $ResourceLocation$$Type, emissiveIdentifier: $ResourceLocation$$Type): $ETFTexture
public "getPaintingSprite"(originalSprite: $TextureAtlasSprite$$Type, originalID: $ResourceLocation$$Type): $ETFSprite
public static "patchTextureToRemoveZFightingWithOtherTexture"(baseImage: $NativeImage$$Type, otherImage: $NativeImage$$Type): void
public "assertPatchedTextures"(): void
public "getEmissiveVertexConsumer"(vertexConsumerProvider: $MultiBufferSource$$Type, model: $Model$$Type, modeToUsePossiblyManuallyChosen: $ETFConfig$EmissiveRenderModes$$Type): $VertexConsumer
get "emissive"(): boolean
get "enchantIdentifierOfCurrentState"(): $ResourceLocation
get "enchanted"(): boolean
get "GUIBlink"(): void
get "emissiveIdentifierOfCurrentState"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ETFTexture$$Type = ($ETFTexture);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ETFTexture$$Original = $ETFTexture;}
declare module "traben.entity_texture_features.features.texture_handlers.ETFTexture$TextureReturnState" {
import {$Enum} from "java.lang.Enum"

export class $ETFTexture$TextureReturnState extends $Enum<($ETFTexture$TextureReturnState)> {
static readonly "BLINK_PATCHED": $ETFTexture$TextureReturnState
static readonly "BLINK2_PATCHED": $ETFTexture$TextureReturnState
static readonly "APPLY_BLINK": $ETFTexture$TextureReturnState
static readonly "BLINK2": $ETFTexture$TextureReturnState
static readonly "APPLY_BLINK2": $ETFTexture$TextureReturnState
static readonly "NORMAL_PATCHED": $ETFTexture$TextureReturnState
static readonly "BLINK": $ETFTexture$TextureReturnState
static readonly "APPLY_PATCH": $ETFTexture$TextureReturnState
static readonly "NORMAL": $ETFTexture$TextureReturnState

public "toString"(): StringJS
public static "values"(): ($ETFTexture$TextureReturnState)[]
public static "valueOf"(name: StringJS): $ETFTexture$TextureReturnState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ETFTexture$TextureReturnState$$Type = (("normal") | ("normal_patched") | ("blink") | ("blink_patched") | ("blink2") | ("blink2_patched") | ("apply_patch") | ("apply_blink") | ("apply_blink2"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ETFTexture$TextureReturnState$$Original = $ETFTexture$TextureReturnState;}
