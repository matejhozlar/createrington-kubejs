declare module "dev.tr7zw.skinlayers.accessor.PlayerSettings" {
import {$PlayerData$$Interface} from "dev.tr7zw.skinlayers.api.PlayerData"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Mesh, $Mesh$$Type} from "dev.tr7zw.skinlayers.api.Mesh"

export interface $PlayerSettings$$Interface extends $PlayerData$$Interface {
set "headMesh"(value: $Mesh$$Type)
set "rightArmMesh"(value: $Mesh$$Type)
set "leftLegMesh"(value: $Mesh$$Type)
set "leftArmMesh"(value: $Mesh$$Type)
set "torsoMesh"(value: $Mesh$$Type)
get "currentSkin"(): $ResourceLocation
set "thinArms"(value: boolean)
set "currentSkin"(value: $ResourceLocation$$Type)
set "rightLegMesh"(value: $Mesh$$Type)
get "torsoMesh"(): $Mesh
get "headMesh"(): $Mesh
get "leftArmMesh"(): $Mesh
get "rightArmMesh"(): $Mesh
get "leftLegMesh"(): $Mesh
get "rightLegMesh"(): $Mesh
}

export class $PlayerSettings implements $PlayerSettings$$Interface {
 "setHeadMesh"(arg0: $Mesh$$Type): void
 "setRightArmMesh"(arg0: $Mesh$$Type): void
 "setLeftLegMesh"(arg0: $Mesh$$Type): void
 "setLeftArmMesh"(arg0: $Mesh$$Type): void
 "setTorsoMesh"(arg0: $Mesh$$Type): void
 "getCurrentSkin"(): $ResourceLocation
 "setThinArms"(arg0: boolean): void
 "clearMeshes"(): void
 "hasThinArms"(): boolean
 "setCurrentSkin"(arg0: $ResourceLocation$$Type): void
 "setRightLegMesh"(arg0: $Mesh$$Type): void
 "getTorsoMesh"(): $Mesh
 "getHeadMesh"(): $Mesh
 "getLeftArmMesh"(): $Mesh
 "getRightArmMesh"(): $Mesh
 "getLeftLegMesh"(): $Mesh
 "getRightLegMesh"(): $Mesh
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerSettings$$Type = ($PlayerSettings);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerSettings$$Original = $PlayerSettings;}
declare module "dev.tr7zw.skinlayers.accessor.ModelPartInjector" {
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Mesh, $Mesh$$Type} from "dev.tr7zw.skinlayers.api.Mesh"
import {$OffsetProvider, $OffsetProvider$$Type} from "dev.tr7zw.skinlayers.api.OffsetProvider"

export interface $ModelPartInjector$$Interface {
get "visible"(): boolean
get "offsetProvider"(): $OffsetProvider
get "injectedMesh"(): $Mesh
}

export class $ModelPartInjector implements $ModelPartInjector$$Interface {
 "isVisible"(): boolean
 "prepareTranslateAndRotate"(arg0: $PoseStack$$Type): void
 "setInjectedMesh"(arg0: $Mesh$$Type, arg1: $OffsetProvider$$Type): void
 "getOffsetProvider"(): $OffsetProvider
 "getInjectedMesh"(): $Mesh
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelPartInjector$$Type = ($ModelPartInjector);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelPartInjector$$Original = $ModelPartInjector;}
declare module "dev.tr7zw.skinlayers.accessor.HttpTextureAccessor" {
import {$NativeImage, $NativeImage$$Type} from "com.mojang.blaze3d.platform.NativeImage"

export interface $HttpTextureAccessor$$Interface {

(): $NativeImage$$Type
get "image"(): $NativeImage
}

export class $HttpTextureAccessor implements $HttpTextureAccessor$$Interface {
 "getImage"(): $NativeImage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HttpTextureAccessor$$Type = (() => $NativeImage$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HttpTextureAccessor$$Original = $HttpTextureAccessor;}
declare module "dev.tr7zw.skinlayers.accessor.SkullSettings" {
import {$SkullData$$Interface} from "dev.tr7zw.skinlayers.api.SkullData"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Mesh, $Mesh$$Type} from "dev.tr7zw.skinlayers.api.Mesh"

export interface $SkullSettings$$Interface extends $SkullData$$Interface {
set "lastTexture"(value: $ResourceLocation$$Type)
set "upHeadLayers"(value: $Mesh$$Type)
get "headLayers"(): $Mesh
get "lastTexture"(): $ResourceLocation
get "mesh"(): $Mesh
}

export class $SkullSettings implements $SkullSettings$$Interface {
 "initialized"(): boolean
 "setLastTexture"(arg0: $ResourceLocation$$Type): void
 "setupHeadLayers"(arg0: $Mesh$$Type): void
 "getHeadLayers"(): $Mesh
 "getLastTexture"(): $ResourceLocation
 "getMesh"(): $Mesh
 "setInitialized"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkullSettings$$Type = ($SkullSettings);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SkullSettings$$Original = $SkullSettings;}
declare module "dev.tr7zw.skinlayers.accessor.NativeImageAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NativeImageAccessor$$Interface {

(): boolean
}

export class $NativeImageAccessor implements $NativeImageAccessor$$Interface {
 "skinlayers$isAllocated"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NativeImageAccessor$$Type = (() => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NativeImageAccessor$$Original = $NativeImageAccessor;}
declare module "dev.tr7zw.skinlayers.accessor.PlayerEntityModelAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PlayerEntityModelAccessor$$Interface {
set "ignored"(value: boolean)
}

export class $PlayerEntityModelAccessor implements $PlayerEntityModelAccessor$$Interface {
 "hasThinArms"(): boolean
 "setIgnored"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEntityModelAccessor$$Type = ($PlayerEntityModelAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerEntityModelAccessor$$Original = $PlayerEntityModelAccessor;}
