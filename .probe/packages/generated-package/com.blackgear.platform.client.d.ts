declare module "com.blackgear.platform.client.v2.emissive.EmissiveModelWrapperHolder" {
import {$EmissiveModelWrapper, $EmissiveModelWrapper$$Type} from "com.blackgear.platform.client.v2.emissive.EmissiveModelWrapper"

export interface $EmissiveModelWrapperHolder$$Interface {
get "modelWrapper"(): $EmissiveModelWrapper
set "modelWrapper"(value: $EmissiveModelWrapper$$Type)
}

export class $EmissiveModelWrapperHolder implements $EmissiveModelWrapperHolder$$Interface {
 "getModelWrapper"(): $EmissiveModelWrapper
 "setModelWrapper"(arg0: $EmissiveModelWrapper$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmissiveModelWrapperHolder$$Type = ($EmissiveModelWrapperHolder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EmissiveModelWrapperHolder$$Original = $EmissiveModelWrapperHolder;}
declare module "com.blackgear.platform.client.v2.emissive.EmissiveSpriteHolder" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export interface $EmissiveSpriteHolder$$Interface {
get "emissiveSprite"(): $TextureAtlasSprite
set "emissiveSprite"(value: $TextureAtlasSprite$$Type)
}

export class $EmissiveSpriteHolder implements $EmissiveSpriteHolder$$Interface {
 "getEmissiveSprite"(): $TextureAtlasSprite
 "setEmissiveSprite"(arg0: $TextureAtlasSprite$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmissiveSpriteHolder$$Type = ($EmissiveSpriteHolder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EmissiveSpriteHolder$$Original = $EmissiveSpriteHolder;}
declare module "com.blackgear.platform.client.v2.emissive.EmissiveModelWrapper" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"

export class $EmissiveModelWrapper {
constructor(shouldWrap: boolean)

public "wrap"(model: $BakedModel$$Type, resource: $ResourceLocation$$Type): $BakedModel
public static "create"(shouldWrap: boolean): $EmissiveModelWrapper
public static "bootstrap"(): void
public static "getBakedModel"(model: $BakedModel$$Type): $BakedModel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmissiveModelWrapper$$Type = ($EmissiveModelWrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EmissiveModelWrapper$$Original = $EmissiveModelWrapper;}
