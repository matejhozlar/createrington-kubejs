declare module "net.minecraft.client.model.geom.builders.LayerDefinition" {
import {$ModelPart} from "net.minecraft.client.model.geom.ModelPart"
import {$MaterialDefinition$$Type} from "net.minecraft.client.model.geom.builders.MaterialDefinition"
import {$MeshDefinition$$Type} from "net.minecraft.client.model.geom.builders.MeshDefinition"

export class $LayerDefinition {
constructor(arg0: $MeshDefinition$$Type, arg1: $MaterialDefinition$$Type)

public static "create"(arg0: $MeshDefinition$$Type, arg1: integer, arg2: integer): $LayerDefinition
public "bakeRoot"(): $ModelPart
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LayerDefinition$$Type = ($LayerDefinition);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LayerDefinition$$Original = $LayerDefinition;}
declare module "net.minecraft.client.model.geom.builders.CubeDefinition" {
import {$ModelPart$Cube} from "net.minecraft.client.model.geom.ModelPart$Cube"

export class $CubeDefinition {
public "bake"(arg0: integer, arg1: integer): $ModelPart$Cube
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CubeDefinition$$Type = ($CubeDefinition);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CubeDefinition$$Original = $CubeDefinition;}
declare module "net.minecraft.client.model.geom.builders.MeshDefinition" {
import {$PartDefinition} from "net.minecraft.client.model.geom.builders.PartDefinition"

export class $MeshDefinition {
constructor()

public "getRoot"(): $PartDefinition
get "root"(): $PartDefinition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MeshDefinition$$Type = ($MeshDefinition);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MeshDefinition$$Original = $MeshDefinition;}
declare module "net.minecraft.client.model.geom.builders.PartDefinition" {
import {$PartPose$$Type} from "net.minecraft.client.model.geom.PartPose"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$CubeDefinition$$Type} from "net.minecraft.client.model.geom.builders.CubeDefinition"
import {$ModelPart} from "net.minecraft.client.model.geom.ModelPart"
import {$CubeListBuilder$$Type} from "net.minecraft.client.model.geom.builders.CubeListBuilder"

export class $PartDefinition {
readonly "children": $Map<(StringJS), ($PartDefinition)>

constructor(arg0: $List$$Type<($CubeDefinition$$Type)>, arg1: $PartPose$$Type)

public "bake"(arg0: integer, arg1: integer): $ModelPart
public "getChild"(arg0: StringJS): $PartDefinition
public "addOrReplaceChild"(arg0: StringJS, arg1: $CubeListBuilder$$Type, arg2: $PartPose$$Type): $PartDefinition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartDefinition$$Type = ($PartDefinition);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PartDefinition$$Original = $PartDefinition;}
declare module "net.minecraft.client.model.Model" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Function$$Type} from "java.util.function.Function"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export class $Model {
constructor(arg0: $Function$$Type<($ResourceLocation), ($RenderType$$Type)>)

public "renderToBuffer"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: integer, arg3: integer): void
public "renderToBuffer"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: integer, arg3: integer, arg4: integer): void
public "renderType"(arg0: $ResourceLocation$$Type): $RenderType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Model$$Type = ($Model);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Model$$Original = $Model;}
declare module "net.minecraft.client.model.HumanoidModel" {
import {$HeadedModel$$Interface} from "net.minecraft.client.model.HeadedModel"
import {$HumanoidArm$$Type} from "net.minecraft.world.entity.HumanoidArm"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$AgeableListModel} from "net.minecraft.client.model.AgeableListModel"
import {$CubeDeformation$$Type} from "net.minecraft.client.model.geom.builders.CubeDeformation"
import {$MeshDefinition} from "net.minecraft.client.model.geom.builders.MeshDefinition"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ArmedModel$$Interface} from "net.minecraft.client.model.ArmedModel"
import {$Function$$Type} from "java.util.function.Function"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ModelPart, $ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"
import {$RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$HumanoidModel$ArmPose} from "net.minecraft.client.model.HumanoidModel$ArmPose"

export class $HumanoidModel<T extends $LivingEntity> extends $AgeableListModel<(T)> implements $ArmedModel$$Interface, $HeadedModel$$Interface {
readonly "scaleHead": boolean
 "young": boolean
readonly "rightArm": $ModelPart
static readonly "OVERLAY_SCALE": float
readonly "leftLeg": $ModelPart
 "riding": boolean
readonly "body": $ModelPart
 "swimAmount": float
readonly "head": $ModelPart
readonly "leftArm": $ModelPart
readonly "babyYHeadOffset": float
static readonly "TOOT_HORN_YROT_BASE": float
readonly "hat": $ModelPart
readonly "bodyYOffset": float
static readonly "TOOT_HORN_XROT_BASE": float
 "leftArmPose": $HumanoidModel$ArmPose
 "attackTime": float
readonly "babyZHeadOffset": float
readonly "babyHeadScale": float
static readonly "LEGGINGS_OVERLAY_SCALE": float
static readonly "HAT_OVERLAY_SCALE": float
 "crouching": boolean
readonly "rightLeg": $ModelPart
readonly "babyBodyScale": float
 "rightArmPose": $HumanoidModel$ArmPose

constructor(arg0: $ModelPart$$Type)
constructor(arg0: $ModelPart$$Type, arg1: $Function$$Type<($ResourceLocation), ($RenderType$$Type)>)

public "prepareMobModel"(arg0: T, arg1: float, arg2: float, arg3: float): void
public "prepareMobModel"(arg0: $Entity$$Type, arg1: float, arg2: float, arg3: float): void
public "copyPropertiesTo"(arg0: $HumanoidModel$$Type<(T)>): void
public "getHead"(): $ModelPart
public "setupAnim"(arg0: $Entity$$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): void
public "setupAnim"(arg0: T, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): void
public "setAllVisible"(arg0: boolean): void
public "translateToHand"(arg0: $HumanoidArm$$Type, arg1: $PoseStack$$Type): void
public static "createMesh"(arg0: $CubeDeformation$$Type, arg1: float): $MeshDefinition
public "handler$bnk000$immersive_melodies$immersiveMelodies$injectSetupAnim"(arg0: $LivingEntity$$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: $CallbackInfo$$Type): void
set "allVisible"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HumanoidModel$$Type<T> = ($HumanoidModel<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HumanoidModel$$Original<T> = $HumanoidModel<(T)>;}
declare module "net.minecraft.client.model.geom.ModelPart$Polygon" {
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$ModelPart$Vertex, $ModelPart$Vertex$$Type} from "net.minecraft.client.model.geom.ModelPart$Vertex"
import {$Vector3f} from "org.joml.Vector3f"

export class $ModelPart$Polygon {
 "normal": $Vector3f
 "vertices": ($ModelPart$Vertex)[]

constructor(arg0: ($ModelPart$Vertex$$Type)[], arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: boolean, arg8: $Direction$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelPart$Polygon$$Type = ($ModelPart$Polygon);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelPart$Polygon$$Original = $ModelPart$Polygon;}
declare module "net.minecraft.client.model.ArmedModel" {
import {$HumanoidArm, $HumanoidArm$$Type} from "net.minecraft.world.entity.HumanoidArm"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"

export interface $ArmedModel$$Interface {

(arg0: $HumanoidArm, arg1: $PoseStack): void
}

export class $ArmedModel implements $ArmedModel$$Interface {
 "translateToHand"(arg0: $HumanoidArm$$Type, arg1: $PoseStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmedModel$$Type = ((arg0: $HumanoidArm, arg1: $PoseStack) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArmedModel$$Original = $ArmedModel;}
declare module "net.minecraft.client.model.geom.builders.CubeDeformation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CubeDeformation {
static readonly "NONE": $CubeDeformation

constructor(arg0: float, arg1: float, arg2: float)
constructor(arg0: float)

public "extend"(arg0: float, arg1: float, arg2: float): $CubeDeformation
public "extend"(arg0: float): $CubeDeformation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CubeDeformation$$Type = ($CubeDeformation);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CubeDeformation$$Original = $CubeDeformation;}
declare module "net.minecraft.client.model.geom.builders.MaterialDefinition" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $MaterialDefinition {
constructor(arg0: integer, arg1: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialDefinition$$Type = ($MaterialDefinition);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MaterialDefinition$$Original = $MaterialDefinition;}
declare module "net.minecraft.client.model.geom.ModelPart$Vertex" {
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"

export class $ModelPart$Vertex {
readonly "pos": $Vector3f
readonly "u": float
readonly "v": float

constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float)
constructor(arg0: $Vector3f$$Type, arg1: float, arg2: float)

public "remap"(arg0: float, arg1: float): $ModelPart$Vertex
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelPart$Vertex$$Type = ($ModelPart$Vertex);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelPart$Vertex$$Original = $ModelPart$Vertex;}
declare module "net.minecraft.client.model.geom.ModelPart" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$List, $List$$Type} from "java.util.List"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$ModelPartInjector$$Interface} from "dev.tr7zw.skinlayers.accessor.ModelPartInjector"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$ModelPartAccessor$$Interface} from "com.jesz.createdieselgenerators.mixins.ModelPartAccessor"
import {$Vector3f$$Type} from "org.joml.Vector3f"
import {$OffsetProvider, $OffsetProvider$$Type} from "dev.tr7zw.skinlayers.api.OffsetProvider"
import {$PartPose, $PartPose$$Type} from "net.minecraft.client.model.geom.PartPose"
import {$PoseStack$Pose$$Type} from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ModelPart$Cube, $ModelPart$Cube$$Type} from "net.minecraft.client.model.geom.ModelPart$Cube"
import {$ModelPartAccessor$$Interface as $ModelPartAccessor$0$$Interface} from "dev.engine_room.flywheel.impl.mixin.ModelPartAccessor"
import {$Mesh, $Mesh$$Type} from "dev.tr7zw.skinlayers.api.Mesh"
import {$Stream} from "java.util.stream.Stream"
import {$ModelPart$Visitor$$Type} from "net.minecraft.client.model.geom.ModelPart$Visitor"

export class $ModelPart implements $ModelPartInjector$$Interface, $ModelPartAccessor$0$$Interface, $ModelPartAccessor$$Interface {
 "visible": boolean
static readonly "DEFAULT_SCALE": float
 "zRot": float
 "yRot": float
 "xRot": float
 "yScale": float
 "children": $Map<(StringJS), ($ModelPart)>
 "xScale": float
 "cubes": $List<($ModelPart$Cube)>
 "initialPose": $PartPose
 "x": float
 "y": float
 "z": float
 "skipDraw": boolean
 "zScale": float

constructor(arg0: $List$$Type<($ModelPart$Cube$$Type)>, arg1: $Map$$Type<(StringJS), ($ModelPart$$Type)>)

public "setPos"(arg0: float, arg1: float, arg2: float): void
public "isVisible"(): boolean
public "isEmpty"(): boolean
public "visit"(arg0: $PoseStack$$Type, arg1: $ModelPart$Visitor$$Type): void
public "getChild"(arg0: StringJS): $ModelPart
public "copyFrom"(arg0: $ModelPart$$Type): void
public "render"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: integer, arg3: integer): void
public "render"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: integer, arg3: integer, arg4: integer): void
public "offsetPos"(arg0: $Vector3f$$Type): void
public "setRotation"(arg0: float, arg1: float, arg2: float): void
public "hasChild"(arg0: StringJS): boolean
public "offsetScale"(arg0: $Vector3f$$Type): void
public "translateAndRotate"(arg0: $PoseStack$$Type): void
public "prepareTranslateAndRotate"(poseStack: $PoseStack$$Type): void
public "loadPose"(arg0: $PartPose$$Type): void
public "handler$doc000$skinlayers3d$render"(poseStack: $PoseStack$$Type, vertexConsumer: $VertexConsumer$$Type, light: integer, overlay: integer, color: integer, ci: $CallbackInfo$$Type): void
public "setInitialPose"(arg0: $PartPose$$Type): void
public "getAllParts"(): $Stream<($ModelPart)>
public "flywheel$compile"(arg0: $PoseStack$Pose$$Type, arg1: $VertexConsumer$$Type, arg2: integer, arg3: integer, arg4: integer): void
public "offsetRotation"(arg0: $Vector3f$$Type): void
public "getInitialPose"(): $PartPose
public "getInjectedMesh"(): $Mesh
public "getRandomCube"(arg0: $RandomSource$$Type): $ModelPart$Cube
public "setInjectedMesh"(mesh: $Mesh$$Type, offsetProvider: $OffsetProvider$$Type): void
public "getOffsetProvider"(): $OffsetProvider
public "flywheel$children"(): $Map
public "getCubes"(): $List
public "resetPose"(): void
public "storePose"(): $PartPose
get "empty"(): boolean
get "allParts"(): $Stream<($ModelPart)>
get "injectedMesh"(): $Mesh
get "offsetProvider"(): $OffsetProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelPart$$Type = ($ModelPart);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelPart$$Original = $ModelPart;}
declare module "net.minecraft.client.model.geom.PartPose" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $PartPose {
static readonly "ZERO": $PartPose
readonly "zRot": float
readonly "yRot": float
readonly "x": float
readonly "xRot": float
readonly "y": float
readonly "z": float

public static "offset"(arg0: float, arg1: float, arg2: float): $PartPose
public static "rotation"(arg0: float, arg1: float, arg2: float): $PartPose
public static "offsetAndRotation"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): $PartPose
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartPose$$Type = ($PartPose);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PartPose$$Original = $PartPose;}
declare module "net.minecraft.client.model.PlayerModel" {
import {$HumanoidArm$$Type} from "net.minecraft.world.entity.HumanoidArm"
import {$PlayerEntityModelAccessor$$Interface} from "dev.tr7zw.skinlayers.accessor.PlayerEntityModelAccessor"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$PlayerModelAccessor$$Interface} from "earth.terrarium.tempad.common.mixin.PlayerModelAccessor"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$CubeDeformation$$Type} from "net.minecraft.client.model.geom.builders.CubeDeformation"
import {$MeshDefinition} from "net.minecraft.client.model.geom.builders.MeshDefinition"
import {$HumanoidModel} from "net.minecraft.client.model.HumanoidModel"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ModelPart, $ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"
import {$HumanoidModel$ArmPose} from "net.minecraft.client.model.HumanoidModel$ArmPose"

export class $PlayerModel<T extends $LivingEntity> extends $HumanoidModel<(T)> implements $PlayerModelAccessor$$Interface, $PlayerEntityModelAccessor$$Interface {
readonly "scaleHead": boolean
 "young": boolean
readonly "leftSleeve": $ModelPart
readonly "rightArm": $ModelPart
static readonly "OVERLAY_SCALE": float
readonly "slim": boolean
readonly "leftLeg": $ModelPart
 "riding": boolean
readonly "body": $ModelPart
readonly "rightPants": $ModelPart
 "swimAmount": float
readonly "head": $ModelPart
readonly "leftArm": $ModelPart
readonly "babyYHeadOffset": float
static readonly "TOOT_HORN_YROT_BASE": float
readonly "hat": $ModelPart
readonly "bodyYOffset": float
static readonly "TOOT_HORN_XROT_BASE": float
 "leftArmPose": $HumanoidModel$ArmPose
 "attackTime": float
readonly "babyZHeadOffset": float
readonly "babyHeadScale": float
static readonly "LEGGINGS_OVERLAY_SCALE": float
readonly "jacket": $ModelPart
readonly "leftPants": $ModelPart
static readonly "HAT_OVERLAY_SCALE": float
 "crouching": boolean
readonly "rightSleeve": $ModelPart
readonly "rightLeg": $ModelPart
readonly "babyBodyScale": float
 "rightArmPose": $HumanoidModel$ArmPose

constructor(arg0: $ModelPart$$Type, arg1: boolean)

public "handler$ecd000$watut$setupAnim"(arg0: $LivingEntity$$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: $CallbackInfo$$Type): void
public "hasThinArms"(): boolean
public "setupAnim"(arg0: $Entity$$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): void
public "setupAnim"(arg0: T, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): void
public "renderCloak"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: integer, arg3: integer): void
public "getRandomModelPart"(arg0: $RandomSource$$Type): $ModelPart
public "setAllVisible"(arg0: boolean): void
public "translateToHand"(arg0: $HumanoidArm$$Type, arg1: $PoseStack$$Type): void
public static "createMesh"(arg0: $CubeDeformation$$Type, arg1: boolean): $MeshDefinition
public "getSlim"(): boolean
public "renderEars"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: integer, arg3: integer): void
set "allVisible"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerModel$$Type<T> = ($PlayerModel<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerModel$$Original<T> = $PlayerModel<(T)>;}
declare module "net.minecraft.client.model.HumanoidModel$ArmPose" {
import {$HumanoidModel$$Type} from "net.minecraft.client.model.HumanoidModel"
import {$HumanoidArm$$Type} from "net.minecraft.world.entity.HumanoidArm"
import {$Enum} from "java.lang.Enum"
import {$ExtensionInfo} from "net.neoforged.fml.common.asm.enumextension.ExtensionInfo"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$IExtensibleEnum$$Interface} from "net.neoforged.fml.common.asm.enumextension.IExtensibleEnum"

export class $HumanoidModel$ArmPose extends $Enum<($HumanoidModel$ArmPose)> implements $IExtensibleEnum$$Interface {
static readonly "ITEM": $HumanoidModel$ArmPose
static readonly "BOW_AND_ARROW": $HumanoidModel$ArmPose
static readonly "BRUSH": $HumanoidModel$ArmPose
static readonly "TOOT_HORN": $HumanoidModel$ArmPose
static readonly "CROSSBOW_HOLD": $HumanoidModel$ArmPose
static readonly "TEMPAD_timedoor_projector": $HumanoidModel$ArmPose
static readonly "BLOCK": $HumanoidModel$ArmPose
static readonly "CROSSBOW_CHARGE": $HumanoidModel$ArmPose
static readonly "THROW_SPEAR": $HumanoidModel$ArmPose
static readonly "EMPTY": $HumanoidModel$ArmPose
static readonly "SPYGLASS": $HumanoidModel$ArmPose

public static "values"(): ($HumanoidModel$ArmPose)[]
public static "valueOf"(arg0: StringJS): $HumanoidModel$ArmPose
public static "getExtensionInfo"(): $ExtensionInfo
public "applyTransform"<T extends $LivingEntity>(arg0: $HumanoidModel$$Type<(T)>, arg1: T, arg2: $HumanoidArm$$Type): void
public "isTwoHanded"(): boolean
get "extensionInfo"(): $ExtensionInfo
get "twoHanded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HumanoidModel$ArmPose$$Type = (("empty") | ("item") | ("block") | ("bow_and_arrow") | ("throw_spear") | ("crossbow_charge") | ("crossbow_hold") | ("spyglass") | ("toot_horn") | ("brush") | ("tempad_timedoor_projector"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HumanoidModel$ArmPose$$Original = $HumanoidModel$ArmPose;}
declare module "net.minecraft.client.model.geom.EntityModelSet" {
import {$ResourceManagerReloadListener$$Interface} from "net.minecraft.server.packs.resources.ResourceManagerReloadListener"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$ModelLayerLocation$$Type} from "net.minecraft.client.model.geom.ModelLayerLocation"
import {$ModelPart} from "net.minecraft.client.model.geom.ModelPart"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $EntityModelSet implements $ResourceManagerReloadListener$$Interface {
constructor()

public "onResourceManagerReload"(arg0: $ResourceManager$$Type): void
public "bakeLayer"(arg0: $ModelLayerLocation$$Type): $ModelPart
public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
public "getName"(): StringJS
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityModelSet$$Type = ($EntityModelSet);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityModelSet$$Original = $EntityModelSet;}
declare module "net.minecraft.client.model.AgeableListModel" {
import {$Iterable} from "java.lang.Iterable"
import {$AgeableListModelAccessor$$Interface as $AgeableListModelAccessor$0$$Interface} from "com.simibubi.create.foundation.mixin.accessor.AgeableListModelAccessor"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$AgeableListModelAccessor$$Interface} from "com.jesz.createdieselgenerators.mixins.AgeableListModelAccessor"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$EntityModel} from "net.minecraft.client.model.EntityModel"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $AgeableListModel<E extends $Entity> extends $EntityModel<(E)> implements $AgeableListModelAccessor$0$$Interface, $AgeableListModelAccessor$$Interface {
readonly "scaleHead": boolean
 "attackTime": float
readonly "babyZHeadOffset": float
 "young": boolean
readonly "babyHeadScale": float
readonly "babyYHeadOffset": float
readonly "babyBodyScale": float
 "riding": boolean
readonly "bodyYOffset": float

public "renderToBuffer"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: integer, arg3: integer, arg4: integer): void
public "getBabyHeadScale"(): float
public "getScaleHead"(): boolean
public "getBabyZHeadOffset"(): float
public "getBabyYHeadOffset"(): float
public "create$callBodyParts"(): $Iterable
public "create$callHeadParts"(): $Iterable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AgeableListModel$$Type<E> = ($AgeableListModel<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AgeableListModel$$Original<E> = $AgeableListModel<(E)>;}
declare module "net.minecraft.client.model.geom.ModelPart$Cube" {
import {$PoseStack$Pose$$Type} from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import {$ModelPart$Polygon} from "net.minecraft.client.model.geom.ModelPart$Polygon"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$Set$$Type} from "java.util.Set"

export class $ModelPart$Cube {
 "minY": float
 "polygons": ($ModelPart$Polygon)[]
 "minX": float
 "maxZ": float
 "maxY": float
 "maxX": float
 "minZ": float

constructor(arg0: integer, arg1: integer, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: boolean, arg12: float, arg13: float, arg14: $Set$$Type<($Direction$$Type)>)

public "compile"(arg0: $PoseStack$Pose$$Type, arg1: $VertexConsumer$$Type, arg2: integer, arg3: integer, arg4: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelPart$Cube$$Type = ($ModelPart$Cube);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelPart$Cube$$Original = $ModelPart$Cube;}
declare module "net.minecraft.client.model.EntityModel" {
import {$Model} from "net.minecraft.client.model.Model"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $EntityModel<T extends $Entity> extends $Model {
 "attackTime": float
 "young": boolean
 "riding": boolean

public "prepareMobModel"(arg0: T, arg1: float, arg2: float, arg3: float): void
public "copyPropertiesTo"(arg0: $EntityModel$$Type<(T)>): void
public "setupAnim"(arg0: T, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityModel$$Type<T> = ($EntityModel<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityModel$$Original<T> = $EntityModel<(T)>;}
declare module "net.minecraft.client.model.geom.ModelPart$Visitor" {
import {$PoseStack$Pose, $PoseStack$Pose$$Type} from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import {$ModelPart$Cube, $ModelPart$Cube$$Type} from "net.minecraft.client.model.geom.ModelPart$Cube"

export interface $ModelPart$Visitor$$Interface {

(arg0: $PoseStack$Pose, arg1: StringJS, arg2: integer, arg3: $ModelPart$Cube): void
}

export class $ModelPart$Visitor implements $ModelPart$Visitor$$Interface {
 "visit"(arg0: $PoseStack$Pose$$Type, arg1: StringJS, arg2: integer, arg3: $ModelPart$Cube$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelPart$Visitor$$Type = ((arg0: $PoseStack$Pose, arg1: StringJS, arg2: integer, arg3: $ModelPart$Cube) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelPart$Visitor$$Original = $ModelPart$Visitor;}
declare module "net.minecraft.client.model.geom.builders.CubeListBuilder" {
import {$List} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Set$$Type} from "java.util.Set"
import {$CubeDefinition} from "net.minecraft.client.model.geom.builders.CubeDefinition"
import {$CubeDeformation$$Type} from "net.minecraft.client.model.geom.builders.CubeDeformation"

export class $CubeListBuilder {
constructor()

public static "create"(): $CubeListBuilder
public "addBox"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: boolean): $CubeListBuilder
public "addBox"(arg0: StringJS, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float): $CubeListBuilder
public "addBox"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: $Set$$Type<($Direction$$Type)>): $CubeListBuilder
public "addBox"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: $CubeDeformation$$Type, arg7: float, arg8: float): $CubeListBuilder
public "addBox"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: $CubeDeformation$$Type): $CubeListBuilder
public "addBox"(arg0: StringJS, arg1: float, arg2: float, arg3: float, arg4: integer, arg5: integer, arg6: integer, arg7: $CubeDeformation$$Type, arg8: integer, arg9: integer): $CubeListBuilder
public "addBox"(arg0: StringJS, arg1: float, arg2: float, arg3: float, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer): $CubeListBuilder
public "addBox"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): $CubeListBuilder
public "addBox"(arg0: StringJS, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: $CubeDeformation$$Type): $CubeListBuilder
public "mirror"(): $CubeListBuilder
public "mirror"(arg0: boolean): $CubeListBuilder
public "texOffs"(arg0: integer, arg1: integer): $CubeListBuilder
public "getCubes"(): $List<($CubeDefinition)>
get "cubes"(): $List<($CubeDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CubeListBuilder$$Type = ($CubeListBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CubeListBuilder$$Original = $CubeListBuilder;}
declare module "net.minecraft.client.model.geom.ModelLayerLocation" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"

export class $ModelLayerLocation {
constructor(arg0: $ResourceLocation$$Type, arg1: StringJS)

public "getModel"(): $ResourceLocation
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getLayer"(): StringJS
get "model"(): $ResourceLocation
get "layer"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelLayerLocation$$Type = ($ModelLayerLocation);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelLayerLocation$$Original = $ModelLayerLocation;}
declare module "net.minecraft.client.model.SkullModelBase" {
import {$Model} from "net.minecraft.client.model.Model"

export class $SkullModelBase extends $Model {
constructor()

public "setupAnim"(arg0: float, arg1: float, arg2: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkullModelBase$$Type = ($SkullModelBase);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SkullModelBase$$Original = $SkullModelBase;}
declare module "net.minecraft.client.model.HeadedModel" {
import {$ModelPart, $ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"

export interface $HeadedModel$$Interface {

(): $ModelPart$$Type
get "head"(): $ModelPart
}

export class $HeadedModel implements $HeadedModel$$Interface {
 "getHead"(): $ModelPart
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeadedModel$$Type = (() => $ModelPart$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HeadedModel$$Original = $HeadedModel;}
