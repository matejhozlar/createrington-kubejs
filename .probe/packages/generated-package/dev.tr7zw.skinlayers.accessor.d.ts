declare module "dev.tr7zw.skinlayers.accessor.PlayerSettings" {
import {$PlayerData$$Interface} from "dev.tr7zw.skinlayers.api.PlayerData"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Mesh, $Mesh$$Type} from "dev.tr7zw.skinlayers.api.Mesh"

export interface $PlayerSettings$$Interface extends $PlayerData$$Interface {
set "thinArms"(value: boolean)
set "leftArmMesh"(value: $Mesh$$Type)
set "torsoMesh"(value: $Mesh$$Type)
set "headMesh"(value: $Mesh$$Type)
set "rightArmMesh"(value: $Mesh$$Type)
set "leftLegMesh"(value: $Mesh$$Type)
set "rightLegMesh"(value: $Mesh$$Type)
get "currentSkin"(): $ResourceLocation
set "currentSkin"(value: $ResourceLocation$$Type)
get "headMesh"(): $Mesh
get "leftLegMesh"(): $Mesh
get "torsoMesh"(): $Mesh
get "leftArmMesh"(): $Mesh
get "rightArmMesh"(): $Mesh
get "rightLegMesh"(): $Mesh
}

export class $PlayerSettings implements $PlayerSettings$$Interface {
 "hasThinArms"(): boolean
 "setThinArms"(arg0: boolean): void
 "setLeftArmMesh"(arg0: $Mesh$$Type): void
 "setTorsoMesh"(arg0: $Mesh$$Type): void
 "setHeadMesh"(arg0: $Mesh$$Type): void
 "setRightArmMesh"(arg0: $Mesh$$Type): void
 "setLeftLegMesh"(arg0: $Mesh$$Type): void
 "setRightLegMesh"(arg0: $Mesh$$Type): void
 "getCurrentSkin"(): $ResourceLocation
 "setCurrentSkin"(arg0: $ResourceLocation$$Type): void
 "clearMeshes"(): void
 "getHeadMesh"(): $Mesh
 "getLeftLegMesh"(): $Mesh
 "getTorsoMesh"(): $Mesh
 "getLeftArmMesh"(): $Mesh
 "getRightArmMesh"(): $Mesh
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
get "injectedMesh"(): $Mesh
get "offsetProvider"(): $OffsetProvider
}

export class $ModelPartInjector implements $ModelPartInjector$$Interface {
 "prepareTranslateAndRotate"(arg0: $PoseStack$$Type): void
 "isVisible"(): boolean
 "getInjectedMesh"(): $Mesh
 "getOffsetProvider"(): $OffsetProvider
 "setInjectedMesh"(arg0: $Mesh$$Type, arg1: $OffsetProvider$$Type): void
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
get "headLayers"(): $Mesh
set "upHeadLayers"(value: $Mesh$$Type)
set "lastTexture"(value: $ResourceLocation$$Type)
get "lastTexture"(): $ResourceLocation
get "mesh"(): $Mesh
}

export class $SkullSettings implements $SkullSettings$$Interface {
 "initialized"(): boolean
 "setInitialized"(arg0: boolean): void
 "getHeadLayers"(): $Mesh
 "setupHeadLayers"(arg0: $Mesh$$Type): void
 "setLastTexture"(arg0: $ResourceLocation$$Type): void
 "getLastTexture"(): $ResourceLocation
 "getMesh"(): $Mesh
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
declare module "dev.tr7zw.skinlayers.accessor.PlayerEntityModelAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PlayerEntityModelAccessor$$Interface {

(): boolean
}

export class $PlayerEntityModelAccessor implements $PlayerEntityModelAccessor$$Interface {
 "hasThinArms"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEntityModelAccessor$$Type = (() => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerEntityModelAccessor$$Original = $PlayerEntityModelAccessor;}
