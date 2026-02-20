declare module "com.supermartijn642.fusion.api.util.Pair" {
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$Function$$Type} from "java.util.function.Function"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"

export class $Pair<X, Y> {
public "equals"(o: any): boolean
public "hashCode"(): integer
public "apply"(consumer: $BiConsumer$$Type<(X), (Y)>): void
public "map"<R, S>(mapLeft: $Function$$Type<(X), (R)>, mapRight: $Function$$Type<(Y), (S)>): $Pair<(R), (S)>
public static "of"<X, Y>(left: X, right: Y): $Pair<(X), (Y)>
public "flatMap"<S>(mapper: $BiFunction$$Type<(X), (Y), (S)>): S
public "left"(): X
public "right"(): Y
public "mapRight"<S>(mapper: $Function$$Type<(Y), (S)>): $Pair<(X), (S)>
public "mapLeft"<S>(mapper: $Function$$Type<(X), (S)>): $Pair<(S), (Y)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pair$$Type<X, Y> = ($Pair<(X), (Y)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Pair$$Original<X, Y> = $Pair<(X), (Y)>;}
declare module "com.supermartijn642.fusion.api.texture.SpritePreparationContext" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$AnimationMetadataSection} from "net.minecraft.client.resources.metadata.animation.AnimationMetadataSection"
import {$Pair} from "com.supermartijn642.fusion.api.util.Pair"

export interface $SpritePreparationContext$$Interface {
get "identifier"(): $ResourceLocation
get "textureHeight"(): integer
get "textureWidth"(): integer
get "animationMetadata"(): $AnimationMetadataSection
get "originalFrameHeight"(): integer
get "originalFrameWith"(): integer
get "originalFrameSize"(): $Pair<(integer), (integer)>
}

export class $SpritePreparationContext implements $SpritePreparationContext$$Interface {
 "getIdentifier"(): $ResourceLocation
 "getTextureHeight"(): integer
 "getTextureWidth"(): integer
 "getAnimationMetadata"(): $AnimationMetadataSection
 "getOriginalFrameHeight"(): integer
 "getOriginalFrameWith"(): integer
 "getOriginalFrameSize"(): $Pair<(integer), (integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpritePreparationContext$$Type = ($SpritePreparationContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpritePreparationContext$$Original = $SpritePreparationContext;}
declare module "com.supermartijn642.fusion.api.model.SpriteIdentifier" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Material, $Material$$Type} from "net.minecraft.client.resources.model.Material"

export interface $SpriteIdentifier$$Interface {
get "atlas"(): $ResourceLocation
get "texture"(): $ResourceLocation
}

export class $SpriteIdentifier implements $SpriteIdentifier$$Interface {
static "of"(atlas: $ResourceLocation$$Type, texture: $ResourceLocation$$Type): $SpriteIdentifier
static "of"(material: $Material$$Type): $SpriteIdentifier
 "getAtlas"(): $ResourceLocation
static "missing"(): $SpriteIdentifier
 "getTexture"(): $ResourceLocation
 "toMaterial"(): $Material
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteIdentifier$$Type = ($SpriteIdentifier);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteIdentifier$$Original = $SpriteIdentifier;}
declare module "com.supermartijn642.fusion.api.model.ModelInstance" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Collection} from "java.util.Collection"
import {$BlockModel} from "net.minecraft.client.renderer.block.model.BlockModel"
import {$BakedModel} from "net.minecraft.client.resources.model.BakedModel"
import {$List} from "java.util.List"
import {$ModelType, $ModelType$$Type} from "com.supermartijn642.fusion.api.model.ModelType"
import {$ModelBakingContext$$Type} from "com.supermartijn642.fusion.api.model.ModelBakingContext"

export interface $ModelInstance$$Interface<T> {
get "asVanillaModel"(): $BlockModel
get "parentModels"(): $List<($ResourceLocation)>
get "modelType"(): $ModelType<(T)>
get "modelData"(): T
get "modelDependencies"(): $Collection<($ResourceLocation)>
}

export class $ModelInstance<T> implements $ModelInstance$$Interface {
 "getAsVanillaModel"(): $BlockModel
 "getParentModels"(): $List<($ResourceLocation)>
static "of"<T>(modelType: $ModelType$$Type<(T)>, modelData: T): $ModelInstance<(T)>
 "bake"(context: $ModelBakingContext$$Type): $BakedModel
 "getModelType"(): $ModelType<(T)>
 "getModelData"(): T
 "getModelDependencies"(): $Collection<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelInstance$$Type<T> = ($ModelInstance<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelInstance$$Original<T> = $ModelInstance<(T)>;}
declare module "com.supermartijn642.fusion.api.texture.TextureType" {
import {$TextureAtlasSprite} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$SpriteCreationContext$$Type} from "com.supermartijn642.fusion.api.texture.SpriteCreationContext"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$SpritePreparationContext$$Type} from "com.supermartijn642.fusion.api.texture.SpritePreparationContext"
import {$Pair} from "com.supermartijn642.fusion.api.util.Pair"
import {$Serializer$$Interface} from "com.supermartijn642.fusion.api.util.Serializer"

export interface $TextureType$$Interface<T> extends $Serializer$$Interface<(T)> {
}

export class $TextureType<T> implements $TextureType$$Interface {
 "createSprite"(context: $SpriteCreationContext$$Type, data: T): $TextureAtlasSprite
 "getFrameSize"(context: $SpritePreparationContext$$Type, data: T): $Pair<(integer), (integer)>
 "serialize"(data: T): $JsonObject
 "deserialize"(json: $JsonObject$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureType$$Type<T> = ($TextureType<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextureType$$Original<T> = $TextureType<(T)>;}
declare module "com.supermartijn642.fusion.api.model.ModelBakingContext" {
import {$TextureAtlasSprite} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$SpriteIdentifier$$Type} from "com.supermartijn642.fusion.api.model.SpriteIdentifier"
import {$ModelInstance} from "com.supermartijn642.fusion.api.model.ModelInstance"
import {$ModelState} from "net.minecraft.client.resources.model.ModelState"
import {$ModelBaker} from "net.minecraft.client.resources.model.ModelBaker"

export interface $ModelBakingContext$$Interface {
get "transformation"(): $ModelState
get "modelBaker"(): $ModelBaker
get "modelIdentifier"(): $ResourceLocation
}

export class $ModelBakingContext implements $ModelBakingContext$$Interface {
 "getModel"(identifier: $ResourceLocation$$Type): $ModelInstance<(never)>
 "getTransformation"(): $ModelState
 "getTexture"(identifier: $SpriteIdentifier$$Type): $TextureAtlasSprite
 "getTexture"(atlas: $ResourceLocation$$Type, texture: $ResourceLocation$$Type): $TextureAtlasSprite
 "getModelBaker"(): $ModelBaker
 "getBlockTexture"(texture: $ResourceLocation$$Type): $TextureAtlasSprite
 "getModelIdentifier"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBakingContext$$Type = ($ModelBakingContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelBakingContext$$Original = $ModelBakingContext;}
declare module "com.supermartijn642.fusion.api.model.ModelType" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Collection} from "java.util.Collection"
import {$BlockModel} from "net.minecraft.client.renderer.block.model.BlockModel"
import {$BakedModel} from "net.minecraft.client.resources.model.BakedModel"
import {$List} from "java.util.List"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$ModelBakingContext$$Type} from "com.supermartijn642.fusion.api.model.ModelBakingContext"
import {$Serializer$$Interface} from "com.supermartijn642.fusion.api.util.Serializer"

export interface $ModelType$$Interface<T> extends $Serializer$$Interface<(T)> {
}

export class $ModelType<T> implements $ModelType$$Interface {
 "getAsVanillaModel"(data: T): $BlockModel
 "getParentModels"(data: T): $List<($ResourceLocation)>
 "bake"(context: $ModelBakingContext$$Type, data: T): $BakedModel
 "getModelDependencies"(data: T): $Collection<($ResourceLocation)>
 "serialize"(data: T): $JsonObject
 "deserialize"(json: $JsonObject$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelType$$Type<T> = ($ModelType<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelType$$Original<T> = $ModelType<(T)>;}
declare module "com.supermartijn642.fusion.api.util.Serializer" {
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"

export interface $Serializer$$Interface<T> {
}

export class $Serializer<T> implements $Serializer$$Interface {
 "serialize"(data: T): $JsonObject
 "deserialize"(json: $JsonObject$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Serializer$$Type<T> = ($Serializer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Serializer$$Original<T> = $Serializer<(T)>;}
declare module "com.supermartijn642.fusion.api.texture.SpriteCreationContext" {
import {$TextureAtlasSprite} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$NativeImage} from "com.mojang.blaze3d.platform.NativeImage"
import {$TextureAtlas} from "net.minecraft.client.renderer.texture.TextureAtlas"

export interface $SpriteCreationContext$$Interface {
get "atlas"(): $TextureAtlas
get "atlasHeight"(): integer
get "spritePositionY"(): integer
get "spritePositionX"(): integer
get "atlasWidth"(): integer
get "spriteHeight"(): integer
get "mipmapLevels"(): integer
get "spriteWidth"(): integer
get "textureBuffers"(): ($NativeImage)[]
get "textureHeight"(): integer
get "textureWidth"(): integer
get "textureIdentifier"(): $ResourceLocation
}

export class $SpriteCreationContext implements $SpriteCreationContext$$Interface {
 "getAtlas"(): $TextureAtlas
 "getAtlasHeight"(): integer
 "getSpritePositionY"(): integer
 "getSpritePositionX"(): integer
 "getAtlasWidth"(): integer
 "getSpriteHeight"(): integer
 "getMipmapLevels"(): integer
 "getSpriteWidth"(): integer
 "getTextureBuffers"(): ($NativeImage)[]
 "getTextureHeight"(): integer
 "getTextureWidth"(): integer
 "getTextureIdentifier"(): $ResourceLocation
 "createOriginalSprite"(): $TextureAtlasSprite
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteCreationContext$$Type = ($SpriteCreationContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteCreationContext$$Original = $SpriteCreationContext;}
