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
declare module "dev.tr7zw.skinlayers.accessor.PlayerSettings" {
import {$PlayerData$$Interface} from "dev.tr7zw.skinlayers.api.PlayerData"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Mesh, $Mesh$$Type} from "dev.tr7zw.skinlayers.api.Mesh"

export interface $PlayerSettings$$Interface extends $PlayerData$$Interface {
set "leftLegMesh"(value: $Mesh$$Type)
set "rightLegMesh"(value: $Mesh$$Type)
set "headMesh"(value: $Mesh$$Type)
get "currentSkin"(): $ResourceLocation
set "rightArmMesh"(value: $Mesh$$Type)
set "leftArmMesh"(value: $Mesh$$Type)
set "currentSkin"(value: $ResourceLocation$$Type)
set "thinArms"(value: boolean)
set "torsoMesh"(value: $Mesh$$Type)
get "torsoMesh"(): $Mesh
get "rightLegMesh"(): $Mesh
get "rightArmMesh"(): $Mesh
get "headMesh"(): $Mesh
get "leftLegMesh"(): $Mesh
get "leftArmMesh"(): $Mesh
}

export class $PlayerSettings implements $PlayerSettings$$Interface {
 "setLeftLegMesh"(arg0: $Mesh$$Type): void
 "setRightLegMesh"(arg0: $Mesh$$Type): void
 "setHeadMesh"(arg0: $Mesh$$Type): void
 "hasThinArms"(): boolean
 "getCurrentSkin"(): $ResourceLocation
 "setRightArmMesh"(arg0: $Mesh$$Type): void
 "setLeftArmMesh"(arg0: $Mesh$$Type): void
 "clearMeshes"(): void
 "setCurrentSkin"(arg0: $ResourceLocation$$Type): void
 "setThinArms"(arg0: boolean): void
 "setTorsoMesh"(arg0: $Mesh$$Type): void
 "getTorsoMesh"(): $Mesh
 "getRightLegMesh"(): $Mesh
 "getRightArmMesh"(): $Mesh
 "getHeadMesh"(): $Mesh
 "getLeftLegMesh"(): $Mesh
 "getLeftArmMesh"(): $Mesh
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
 "isVisible"(): boolean
 "prepareTranslateAndRotate"(arg0: $PoseStack$$Type): void
 "getInjectedMesh"(): $Mesh
 "setInjectedMesh"(arg0: $Mesh$$Type, arg1: $OffsetProvider$$Type): void
 "getOffsetProvider"(): $OffsetProvider
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
declare module "dev.tr7zw.skinlayers.accessor.SkullSettings" {
import {$SkullData$$Interface} from "dev.tr7zw.skinlayers.api.SkullData"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Mesh, $Mesh$$Type} from "dev.tr7zw.skinlayers.api.Mesh"

export interface $SkullSettings$$Interface extends $SkullData$$Interface {
set "upHeadLayers"(value: $Mesh$$Type)
set "lastTexture"(value: $ResourceLocation$$Type)
get "lastTexture"(): $ResourceLocation
get "headLayers"(): $Mesh
get "mesh"(): $Mesh
}

export class $SkullSettings implements $SkullSettings$$Interface {
 "initialized"(): boolean
 "setupHeadLayers"(arg0: $Mesh$$Type): void
 "setLastTexture"(arg0: $ResourceLocation$$Type): void
 "getLastTexture"(): $ResourceLocation
 "getHeadLayers"(): $Mesh
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
