declare module "dev.tr7zw.skinlayers.api.SkullData" {
import {$Mesh, $Mesh$$Type} from "dev.tr7zw.skinlayers.api.Mesh"

export interface $SkullData$$Interface {

(): $Mesh$$Type
get "mesh"(): $Mesh
}

export class $SkullData implements $SkullData$$Interface {
 "getMesh"(): $Mesh
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkullData$$Type = (() => $Mesh$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SkullData$$Original = $SkullData;}
declare module "dev.tr7zw.skinlayers.api.OffsetProvider" {
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Mesh, $Mesh$$Type} from "dev.tr7zw.skinlayers.api.Mesh"

export interface $OffsetProvider$$Interface {

(arg0: $PoseStack, arg1: $Mesh): void
}

export class $OffsetProvider implements $OffsetProvider$$Interface {
static readonly "HEAD": $OffsetProvider
static readonly "LEFT_ARM": $OffsetProvider
static readonly "FIRSTPERSON_RIGHT_ARM": $OffsetProvider
static readonly "SKULL": $OffsetProvider
static readonly "RIGHT_ARM_SLIM": $OffsetProvider
static readonly "RIGHT_LEG": $OffsetProvider
static readonly "LEFT_LEG": $OffsetProvider
static readonly "FIRSTPERSON_LEFT_ARM_SLIM": $OffsetProvider
static readonly "FIRSTPERSON_RIGHT_ARM_SLIM": $OffsetProvider
static readonly "FIRSTPERSON_LEFT_ARM": $OffsetProvider
static readonly "LEFT_ARM_SLIM": $OffsetProvider
static readonly "RIGHT_ARM": $OffsetProvider
static readonly "BODY": $OffsetProvider

 "applyOffset"(arg0: $PoseStack$$Type, arg1: $Mesh$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OffsetProvider$$Type = ((arg0: $PoseStack, arg1: $Mesh) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OffsetProvider$$Original = $OffsetProvider;}
declare module "dev.tr7zw.skinlayers.api.PlayerData" {
import {$Mesh} from "dev.tr7zw.skinlayers.api.Mesh"

export interface $PlayerData$$Interface {
get "torsoMesh"(): $Mesh
get "headMesh"(): $Mesh
get "leftArmMesh"(): $Mesh
get "rightArmMesh"(): $Mesh
get "leftLegMesh"(): $Mesh
get "rightLegMesh"(): $Mesh
}

export class $PlayerData implements $PlayerData$$Interface {
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
export type $PlayerData$$Type = ($PlayerData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerData$$Original = $PlayerData;}
declare module "dev.tr7zw.skinlayers.api.Mesh" {
import {$PartPose$$Type} from "net.minecraft.client.model.geom.PartPose"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"

export interface $Mesh$$Interface {
set "visible"(value: boolean)
get "visible"(): boolean
}

export class $Mesh implements $Mesh$$Interface {
static readonly "EMPTY": $Mesh

 "reset"(): void
 "copyFrom"(arg0: $ModelPart$$Type): void
 "setRotation"(arg0: float, arg1: float, arg2: float): void
 "setVisible"(arg0: boolean): void
 "setPosition"(arg0: float, arg1: float, arg2: float): void
 "render"(arg0: $ModelPart$$Type, arg1: $PoseStack$$Type, arg2: $VertexConsumer$$Type, arg3: integer, arg4: integer, arg5: integer): void
 "render"(vanillaModel: $ModelPart$$Type, poseStack: $PoseStack$$Type, vertexConsumer: $VertexConsumer$$Type, light: integer, overlay: integer, red: float, green: float, blue: float, alpha: float): void
 "render"(poseStack: $PoseStack$$Type, vertexConsumer: $VertexConsumer$$Type, light: integer, overlay: integer): void
 "isVisible"(): boolean
 "loadPose"(arg0: $PartPose$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Mesh$$Type = ($Mesh);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Mesh$$Original = $Mesh;}
