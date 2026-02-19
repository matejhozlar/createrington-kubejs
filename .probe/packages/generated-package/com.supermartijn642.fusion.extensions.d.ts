declare module "com.supermartijn642.fusion.extensions.EntityRendererExtension" {
import {$FusionModelPart, $FusionModelPart$$Type} from "com.supermartijn642.fusion.entity.model.FusionModelPart"
import {$List, $List$$Type} from "java.util.List"

export interface $EntityRendererExtension$$Interface {
get "fusionModelParts"(): $List<($FusionModelPart)>
set "fusionModelParts"(value: $List$$Type<($FusionModelPart$$Type)>)
}

export class $EntityRendererExtension implements $EntityRendererExtension$$Interface {
 "getFusionModelParts"(): $List<($FusionModelPart)>
 "setFusionModelParts"(parts: $List$$Type<($FusionModelPart$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRendererExtension$$Type = ($EntityRendererExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityRendererExtension$$Original = $EntityRendererExtension;}
declare module "com.supermartijn642.fusion.extensions.EntityExtension" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ModelPart, $ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"
import {$Triple, $Triple$$Type} from "com.supermartijn642.fusion.util.Triple"

export interface $EntityExtension$$Interface {
}

export class $EntityExtension implements $EntityExtension$$Interface {
 "markFusionRecomputeModels"(): void
 "shouldFusionRecomputeModel"(layerIndex: integer): boolean
 "getFusionModel"(layerIndex: integer): $Triple<($ModelPart), ($ResourceLocation), (float)>
 "setFusionModel"(layerIndex: integer, model: $Triple$$Type<($ModelPart$$Type), ($ResourceLocation$$Type), (float)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityExtension$$Type = ($EntityExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityExtension$$Original = $EntityExtension;}
declare module "com.supermartijn642.fusion.extensions.BufferSourceExtension" {
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export interface $BufferSourceExtension$$Interface {

(): $RenderType$$Type
}

export class $BufferSourceExtension implements $BufferSourceExtension$$Interface {
 "fusionGetLastRenderType"(): $RenderType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferSourceExtension$$Type = (() => $RenderType$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BufferSourceExtension$$Original = $BufferSourceExtension;}
declare module "com.supermartijn642.fusion.extensions.PackExtension" {
import {$FusionPackMetadata, $FusionPackMetadata$$Type} from "com.supermartijn642.fusion.resources.FusionPackMetadata"

export interface $PackExtension$$Interface {

(): $FusionPackMetadata$$Type
get "fusionMetadata"(): $FusionPackMetadata
}

export class $PackExtension implements $PackExtension$$Interface {
 "getFusionMetadata"(): $FusionPackMetadata
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PackExtension$$Type = (() => $FusionPackMetadata$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PackExtension$$Original = $PackExtension;}
declare module "com.supermartijn642.fusion.extensions.SpriteContentsExtension" {
import {$TextureType} from "com.supermartijn642.fusion.api.texture.TextureType"
import {$Pair} from "com.supermartijn642.fusion.api.util.Pair"

export interface $SpriteContentsExtension$$Interface {
}

export class $SpriteContentsExtension implements $SpriteContentsExtension$$Interface {
 "clearFusionTextureMetadata"(): void
 "fusionTextureMetadata"(): $Pair<($TextureType<(any)>), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsExtension$$Type = ($SpriteContentsExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteContentsExtension$$Original = $SpriteContentsExtension;}
declare module "com.supermartijn642.fusion.extensions.TextureAtlasSpriteExtension" {
import {$TextureType, $TextureType$$Type} from "com.supermartijn642.fusion.api.texture.TextureType"

export interface $TextureAtlasSpriteExtension$$Interface {
get "fusionTextureType"(): $TextureType<(never)>
set "fusionTextureType"(value: $TextureType$$Type<(never)>)
}

export class $TextureAtlasSpriteExtension implements $TextureAtlasSpriteExtension$$Interface {
 "getFusionTextureType"(): $TextureType<(never)>
 "setFusionTextureType"(type: $TextureType$$Type<(never)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureAtlasSpriteExtension$$Type = ($TextureAtlasSpriteExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextureAtlasSpriteExtension$$Original = $TextureAtlasSpriteExtension;}
declare module "com.supermartijn642.fusion.extensions.BlockModelExtension" {
import {$ModelInstance, $ModelInstance$$Type} from "com.supermartijn642.fusion.api.model.ModelInstance"

export interface $BlockModelExtension$$Interface {
get "fusionModel"(): $ModelInstance<(never)>
set "fusionModel"(value: $ModelInstance$$Type<(never)>)
}

export class $BlockModelExtension implements $BlockModelExtension$$Interface {
 "getFusionModel"(): $ModelInstance<(never)>
 "setFusionModel"(model: $ModelInstance$$Type<(never)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockModelExtension$$Type = ($BlockModelExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockModelExtension$$Original = $BlockModelExtension;}
