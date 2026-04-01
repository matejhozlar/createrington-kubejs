declare module "traben.entity_model_features.models.parts.EMFModelPartVanilla" {
import {$Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$EMFModel_ID} from "traben.entity_model_features.models.EMFModel_ID"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List} from "java.util.List"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$EMFModelPartWithState$EMFModelState} from "traben.entity_model_features.models.parts.EMFModelPartWithState$EMFModelState"
import {$OffsetProvider, $OffsetProvider$$Type} from "dev.tr7zw.skinlayers.api.OffsetProvider"
import {$PartPose} from "net.minecraft.client.model.geom.PartPose"
import {$EMFModelPartWithState} from "traben.entity_model_features.models.parts.EMFModelPartWithState"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ModelPart$Cube} from "net.minecraft.client.model.geom.ModelPart$Cube"
import {$Int2ObjectOpenHashMap} from "it.unimi.dsi.fastutil.ints.Int2ObjectOpenHashMap"
import {$Mesh, $Mesh$$Type} from "dev.tr7zw.skinlayers.api.Mesh"
import {$ModelPart, $ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"

export class $EMFModelPartVanilla extends $EMFModelPartWithState {
 "visible": boolean
static readonly "DEFAULT_SCALE": float
 "textureOverride": $ResourceLocation
 "zRot": float
 "yRot": float
 "xRot": float
 "yScale": float
 "isSetByAnimation": boolean
readonly "allKnownStateVariants": $Int2ObjectOpenHashMap<($EMFModelPartWithState$EMFModelState)>
 "children": $Map<(StringJS), ($ModelPart)>
 "currentModelVariant": integer
 "xScale": float
 "cubes": $List<($ModelPart$Cube)>
 "initialPose": $PartPose
 "x": float
 "y": float
 "z": float
 "skipDraw": boolean
 "emf$modelInfo": $EMFModel_ID
 "zScale": float

constructor(name: StringJS, vanillaPart: $ModelPart$$Type, optifinePartNames: $Collection$$Type<(StringJS)>, allVanillaParts: $Map$$Type<(StringJS), ($EMFModelPartVanilla$$Type)>)

public "toString"(): StringJS
public "render"(matrices: $PoseStack$$Type, vertices: $VertexConsumer$$Type, light: integer, overlay: integer, k: integer): void
public "toStringShort"(): StringJS
public "setHideInTheseStates"(variant: integer): void
public "getAllEMFCustomChildren"(): ($ModelPart)[]
public "receiveRootAnimationRunnable"(variant: integer, run: $Runnable$$Type): void
public "prepareTranslateAndRotate"(arg0: $PoseStack$$Type): void
public "isVisible"(): boolean
public "getInjectedMesh"(): $Mesh
public "getOffsetProvider"(): $OffsetProvider
public "setInjectedMesh"(arg0: $Mesh$$Type, arg1: $OffsetProvider$$Type): void
set "hideInTheseStates"(value: integer)
get "allEMFCustomChildren"(): ($ModelPart)[]
get "injectedMesh"(): $Mesh
get "offsetProvider"(): $OffsetProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EMFModelPartVanilla$$Type = ($EMFModelPartVanilla);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EMFModelPartVanilla$$Original = $EMFModelPartVanilla;}
declare module "traben.entity_model_features.models.parts.EMFModelPartWithState$EMFModelState" {
import {$PartPose, $PartPose$$Type} from "net.minecraft.client.model.geom.PartPose"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ModelPart$Cube, $ModelPart$Cube$$Type} from "net.minecraft.client.model.geom.ModelPart$Cube"
import {$List, $List$$Type} from "java.util.List"
import {$ModelPart, $ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"
import {$EMFModelPart$Animator, $EMFModelPart$Animator$$Type} from "traben.entity_model_features.models.parts.EMFModelPart$Animator"
import {$Record} from "java.lang.Record"

export class $EMFModelPartWithState$EMFModelState extends $Record {
constructor(defaultTransform: $PartPose$$Type, cuboids: $List$$Type<($ModelPart$Cube$$Type)>, variantChildren: $Map$$Type<(StringJS), ($ModelPart$$Type)>, xScale: float, yScale: float, zScale: float, visible: boolean, hidden: boolean, texture: $ResourceLocation$$Type, animation: $EMFModelPart$Animator$$Type)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "copy"(copyFrom: $EMFModelPartWithState$EMFModelState$$Type): $EMFModelPartWithState$EMFModelState
public "visible"(): boolean
public "texture"(): $ResourceLocation
public "yScale"(): float
public "xScale"(): float
public "animation"(): $EMFModelPart$Animator
public "hidden"(): boolean
public "cuboids"(): $List<($ModelPart$Cube)>
public "zScale"(): float
public "variantChildren"(): $Map<(StringJS), ($ModelPart)>
public "defaultTransform"(): $PartPose
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EMFModelPartWithState$EMFModelState$$Type = ({"yScale"?: float, "hidden"?: boolean, "texture"?: $ResourceLocation$$Type, "animation"?: $EMFModelPart$Animator$$Type, "variantChildren"?: $Map$$Type<(StringJS), ($ModelPart$$Type)>, "xScale"?: float, "zScale"?: float, "defaultTransform"?: $PartPose$$Type, "cuboids"?: $List$$Type<($ModelPart$Cube$$Type)>, "visible"?: boolean}) | ([yScale?: float, hidden?: boolean, texture?: $ResourceLocation$$Type, animation?: $EMFModelPart$Animator$$Type, variantChildren?: $Map$$Type<(StringJS), ($ModelPart$$Type)>, xScale?: float, zScale?: float, defaultTransform?: $PartPose$$Type, cuboids?: $List$$Type<($ModelPart$Cube$$Type)>, visible?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EMFModelPartWithState$EMFModelState$$Original = $EMFModelPartWithState$EMFModelState;}
declare module "traben.entity_model_features.models.parts.EMFModelPartRoot" {
import {$EntityIntLRU} from "traben.entity_texture_features.utils.EntityIntLRU"
import {$EMFModelPartVanilla, $EMFModelPartVanilla$$Type} from "traben.entity_model_features.models.parts.EMFModelPartVanilla"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$UUID$$Type} from "java.util.UUID"
import {$EMFModel_ID, $EMFModel_ID$$Type} from "traben.entity_model_features.models.EMFModel_ID"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List} from "java.util.List"
import {$EMFJemData$$Type} from "traben.entity_model_features.models.jem_objects.EMFJemData"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$EMFModelPartWithState$EMFModelState} from "traben.entity_model_features.models.parts.EMFModelPartWithState$EMFModelState"
import {$ETFApi$ETFVariantSuffixProvider} from "traben.entity_texture_features.ETFApi$ETFVariantSuffixProvider"
import {$OffsetProvider, $OffsetProvider$$Type} from "dev.tr7zw.skinlayers.api.OffsetProvider"
import {$PartPose} from "net.minecraft.client.model.geom.PartPose"
import {$EMFAnimation$$Type} from "traben.entity_model_features.models.animation.EMFAnimation"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ModelPart$Cube} from "net.minecraft.client.model.geom.ModelPart$Cube"
import {$Int2ObjectOpenHashMap} from "it.unimi.dsi.fastutil.ints.Int2ObjectOpenHashMap"
import {$EMFDirectoryHandler, $EMFDirectoryHandler$$Type} from "traben.entity_model_features.utils.EMFDirectoryHandler"
import {$Mesh, $Mesh$$Type} from "dev.tr7zw.skinlayers.api.Mesh"
import {$ModelPart, $ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"

export class $EMFModelPartRoot extends $EMFModelPartVanilla {
static readonly "DEFAULT_SCALE": float
 "textureOverride": $ResourceLocation
 "zRot": float
 "xRot": float
readonly "allKnownStateVariants": $Int2ObjectOpenHashMap<($EMFModelPartWithState$EMFModelState)>
 "children": $Map<(StringJS), ($ModelPart)>
readonly "vanillaRoot": $ModelPart
 "zScale": float
 "visible": boolean
 "yRot": float
 "yScale": float
 "variantTester": $ETFApi$ETFVariantSuffixProvider
 "directoryContext": $EMFDirectoryHandler
readonly "modelName": $EMFModel_ID
 "isSetByAnimation": boolean
 "currentModelVariant": integer
 "xScale": float
 "cubes": $List<($ModelPart$Cube)>
 "initialPose": $PartPose
 "x": float
 "y": float
 "z": float
 "skipDraw": boolean
 "emf$modelInfo": $EMFModel_ID
readonly "entitySuffixMap": $EntityIntLRU
 "containsCustomModel": boolean

constructor(mobNameForFileAndMap: $EMFModel_ID$$Type, directoryContext: $EMFDirectoryHandler$$Type, vanillaRoot: $ModelPart$$Type, optifinePartNames: $Collection$$Type<(StringJS)>, mapForCreatedParts: $Map$$Type<(StringJS), ($EMFModelPartVanilla$$Type)>)

public "toString"(): StringJS
public "toStringShort"(): StringJS
public "getAllVanillaPartsEMF"(): $Collection<($EMFModelPartVanilla)>
public "getVanillaFormatRoot"(): $ModelPart
public "checkIfShouldExpireEntity"(id: $UUID$$Type): void
public "tryRenderVanillaRootNormally"(matrixStack: $PoseStack$$Type, vertexConsumer: $VertexConsumer$$Type, light: integer, overlay: integer): void
public "resetVanillaPartsToDefaults"(): void
public "doVariantCheck"(): void
public "receiveAnimations"(variant: integer, animationList: $Collection$$Type<($EMFAnimation$$Type)>): void
public "addVariantOfJem"(jemData: $EMFJemData$$Type, variant: integer): void
public "discoverAndInitVariants"(fallbackPropertiesName: StringJS): void
public "setVariant1ToVanilla0"(): void
public "hasAnimation"(): boolean
public "getTopLevelJemTexture"(): $ResourceLocation
public "tryRenderVanillaFormatRoot"(matrixStack: $PoseStack$$Type, vertexConsumer: $VertexConsumer$$Type, light: integer, overlay: integer): void
public "prepareTranslateAndRotate"(arg0: $PoseStack$$Type): void
public "isVisible"(): boolean
public "getInjectedMesh"(): $Mesh
public "getOffsetProvider"(): $OffsetProvider
public "setInjectedMesh"(arg0: $Mesh$$Type, arg1: $OffsetProvider$$Type): void
get "allVanillaPartsEMF"(): $Collection<($EMFModelPartVanilla)>
get "vanillaFormatRoot"(): $ModelPart
get "variant1ToVanilla0"(): void
get "topLevelJemTexture"(): $ResourceLocation
get "injectedMesh"(): $Mesh
get "offsetProvider"(): $OffsetProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EMFModelPartRoot$$Type = ($EMFModelPartRoot);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EMFModelPartRoot$$Original = $EMFModelPartRoot;}
declare module "traben.entity_model_features.models.parts.EMFModelPart$Animator" {
import {$Runnable, $Runnable$$Type, $Runnable$$Interface} from "java.lang.Runnable"

export class $EMFModelPart$Animator implements $Runnable$$Interface {
public "run"(): void
public "setAnimation"(animation: $Runnable$$Type): void
public "getAnimation"(): $Runnable
public "hasAnimation"(): boolean
set "animation"(value: $Runnable$$Type)
get "animation"(): $Runnable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EMFModelPart$Animator$$Type = ($EMFModelPart$Animator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EMFModelPart$Animator$$Original = $EMFModelPart$Animator;}
declare module "traben.entity_model_features.models.parts.EMFModelPart" {
import {$Object2ReferenceOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ReferenceOpenHashMap"
import {$Map, $Map$$Type} from "java.util.Map"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$EMFModel_ID} from "traben.entity_model_features.models.EMFModel_ID"
import {$ModelPartInjector$$Interface} from "dev.tr7zw.skinlayers.accessor.ModelPartInjector"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List, $List$$Type} from "java.util.List"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$OffsetProvider, $OffsetProvider$$Type} from "dev.tr7zw.skinlayers.api.OffsetProvider"
import {$PartPose} from "net.minecraft.client.model.geom.PartPose"
import {$PoseStack$Pose$$Type} from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ModelPart$Cube, $ModelPart$Cube$$Type} from "net.minecraft.client.model.geom.ModelPart$Cube"
import {$Mesh, $Mesh$$Type} from "dev.tr7zw.skinlayers.api.Mesh"
import {$ModelPart, $ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"

export class $EMFModelPart extends $ModelPart implements $ModelPartInjector$$Interface {
 "visible": boolean
static readonly "DEFAULT_SCALE": float
 "textureOverride": $ResourceLocation
 "zRot": float
 "yRot": float
 "xRot": float
 "yScale": float
 "isSetByAnimation": boolean
 "children": $Map<(StringJS), ($ModelPart)>
 "xScale": float
 "cubes": $List<($ModelPart$Cube)>
 "initialPose": $PartPose
 "x": float
 "y": float
 "z": float
 "skipDraw": boolean
 "emf$modelInfo": $EMFModel_ID
 "zScale": float

constructor(cuboids: $List$$Type<($ModelPart$Cube$$Type)>, children: $Map$$Type<(StringJS), ($ModelPart$$Type)>)

public "toString"(): StringJS
public "compile"(pose: $PoseStack$Pose$$Type, vertexConsumer: $VertexConsumer$$Type, i: integer, j: integer, k: integer): void
public "render"(matrices: $PoseStack$$Type, vertices: $VertexConsumer$$Type, light: integer, overlay: integer, k: integer): void
public "toStringShort"(): StringJS
public "getVanillaModelPartsOfCurrentState"(): $ModelPart
public "renderBoxes"(matrices: $PoseStack$$Type, vertices: $VertexConsumer$$Type): void
public "renderBoxesNoChildren"(matrices: $PoseStack$$Type, vertices: $VertexConsumer$$Type, alpha: float): void
public "simplePrintChildren"(depth: integer): StringJS
public "getAllChildPartsAsAnimationMap"(prefixableParents: StringJS, variantNum: integer, optifinePartNameMap: $Map$$Type<(StringJS), (StringJS)>): $Object2ReferenceOpenHashMap<(StringJS), ($EMFModelPart)>
public "handler$fph001$skinlayers3d$render"(poseStack: $PoseStack$$Type, vertexConsumer: $VertexConsumer$$Type, light: integer, overlay: integer, color: integer, ci: $CallbackInfo$$Type): void
public "prepareTranslateAndRotate"(arg0: $PoseStack$$Type): void
public "isVisible"(): boolean
public "getInjectedMesh"(): $Mesh
public "getOffsetProvider"(): $OffsetProvider
public "setInjectedMesh"(arg0: $Mesh$$Type, arg1: $OffsetProvider$$Type): void
get "vanillaModelPartsOfCurrentState"(): $ModelPart
get "injectedMesh"(): $Mesh
get "offsetProvider"(): $OffsetProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EMFModelPart$$Type = ($EMFModelPart);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EMFModelPart$$Original = $EMFModelPart;}
declare module "traben.entity_model_features.models.parts.EMFModelPartWithState" {
import {$EMFModelPart} from "traben.entity_model_features.models.parts.EMFModelPart"
import {$Map, $Map$$Type} from "java.util.Map"
import {$EMFModel_ID} from "traben.entity_model_features.models.EMFModel_ID"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List, $List$$Type} from "java.util.List"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$EMFModelPartWithState$EMFModelState} from "traben.entity_model_features.models.parts.EMFModelPartWithState$EMFModelState"
import {$OffsetProvider, $OffsetProvider$$Type} from "dev.tr7zw.skinlayers.api.OffsetProvider"
import {$PartPose} from "net.minecraft.client.model.geom.PartPose"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ModelPart$Cube, $ModelPart$Cube$$Type} from "net.minecraft.client.model.geom.ModelPart$Cube"
import {$Int2ObjectOpenHashMap} from "it.unimi.dsi.fastutil.ints.Int2ObjectOpenHashMap"
import {$Mesh, $Mesh$$Type} from "dev.tr7zw.skinlayers.api.Mesh"
import {$ModelPart, $ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"

export class $EMFModelPartWithState extends $EMFModelPart {
 "visible": boolean
static readonly "DEFAULT_SCALE": float
 "textureOverride": $ResourceLocation
 "zRot": float
 "yRot": float
 "xRot": float
 "yScale": float
 "isSetByAnimation": boolean
readonly "allKnownStateVariants": $Int2ObjectOpenHashMap<($EMFModelPartWithState$EMFModelState)>
 "children": $Map<(StringJS), ($ModelPart)>
 "currentModelVariant": integer
 "xScale": float
 "cubes": $List<($ModelPart$Cube)>
 "initialPose": $PartPose
 "x": float
 "y": float
 "z": float
 "skipDraw": boolean
 "emf$modelInfo": $EMFModel_ID
 "zScale": float

constructor(cuboids: $List$$Type<($ModelPart$Cube$$Type)>, children: $Map$$Type<(StringJS), ($ModelPart$$Type)>)

public "render"(matrices: $PoseStack$$Type, vertices: $VertexConsumer$$Type, light: integer, overlay: integer, k: integer): void
public "setVariantStateTo"(newVariant: integer): void
public "prepareTranslateAndRotate"(arg0: $PoseStack$$Type): void
public "isVisible"(): boolean
public "getInjectedMesh"(): $Mesh
public "getOffsetProvider"(): $OffsetProvider
public "setInjectedMesh"(arg0: $Mesh$$Type, arg1: $OffsetProvider$$Type): void
set "variantStateTo"(value: integer)
get "injectedMesh"(): $Mesh
get "offsetProvider"(): $OffsetProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EMFModelPartWithState$$Type = ($EMFModelPartWithState);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EMFModelPartWithState$$Original = $EMFModelPartWithState;}
