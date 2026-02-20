declare module "me.pepperbell.continuity.client.mixin.ReloadableResourceManagerImplAccessor" {
import {$CloseableResourceManager, $CloseableResourceManager$$Type} from "net.minecraft.server.packs.resources.CloseableResourceManager"

export interface $ReloadableResourceManagerImplAccessor$$Interface {

(): $CloseableResourceManager$$Type
get "activeManager"(): $CloseableResourceManager
}

export class $ReloadableResourceManagerImplAccessor implements $ReloadableResourceManagerImplAccessor$$Interface {
 "getActiveManager"(): $CloseableResourceManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReloadableResourceManagerImplAccessor$$Type = (() => $CloseableResourceManager$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReloadableResourceManagerImplAccessor$$Original = $ReloadableResourceManagerImplAccessor;}
declare module "me.pepperbell.continuity.client.mixinterface.SpriteExtension" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export interface $SpriteExtension$$Interface {
}

export class $SpriteExtension implements $SpriteExtension$$Interface {
 "continuity$getEmissiveSprite"(): $TextureAtlasSprite
 "continuity$setEmissiveSprite"(arg0: $TextureAtlasSprite$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteExtension$$Type = ($SpriteExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteExtension$$Original = $SpriteExtension;}
declare module "me.pepperbell.continuity.client.mixinterface.ModelLoaderExtension" {
import {$ModelWrappingHandler, $ModelWrappingHandler$$Type} from "me.pepperbell.continuity.client.resource.ModelWrappingHandler"

export interface $ModelLoaderExtension$$Interface {
}

export class $ModelLoaderExtension implements $ModelLoaderExtension$$Interface {
 "continuity$getModelWrappingHandler"(): $ModelWrappingHandler
 "continuity$setModelWrappingHandler"(arg0: $ModelWrappingHandler$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelLoaderExtension$$Type = ($ModelLoaderExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelLoaderExtension$$Original = $ModelLoaderExtension;}
declare module "me.pepperbell.continuity.client.resource.ModelWrappingHandler" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ModelResourceLocation$$Type} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"

export class $ModelWrappingHandler {
public "wrap"(model: $BakedModel$$Type, resourceId: $ResourceLocation$$Type, topLevelId: $ModelResourceLocation$$Type): $BakedModel
public static "init"(): void
public static "create"(wrapCtm: boolean, wrapEmissive: boolean): $ModelWrappingHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelWrappingHandler$$Type = ($ModelWrappingHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelWrappingHandler$$Original = $ModelWrappingHandler;}
