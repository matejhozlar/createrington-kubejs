declare module "com.supermartijn642.fusion.entity.model.EntityLayerProperties" {
import {$List$$Type} from "java.util.List"
import {$VanillaModelLayerProperties$$Type} from "com.supermartijn642.fusion.entity.VanillaModelLayerProperties"
import {$Triple} from "com.supermartijn642.fusion.util.Triple"
import {$EntityLayerProperties$ModelOption$$Type} from "com.supermartijn642.fusion.entity.model.EntityLayerProperties$ModelOption"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$RandomSource} from "net.minecraft.util.RandomSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ModelLayerLocation, $ModelLayerLocation$$Type} from "net.minecraft.client.model.geom.ModelLayerLocation"
import {$Pair$$Type} from "com.supermartijn642.fusion.api.util.Pair"
import {$ModelPart, $ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"
import {$EntityModelPredicate$$Type} from "com.supermartijn642.fusion.entity.model.predicates.EntityModelPredicate"

export class $EntityLayerProperties {
static readonly "RANDOM": $RandomSource

constructor(identifier: $ModelLayerLocation$$Type, defaultModel: $List$$Type<($EntityLayerProperties$ModelOption$$Type)>, conditionals: $List$$Type<($Pair$$Type<($EntityModelPredicate$$Type), ($List$$Type<($EntityLayerProperties$ModelOption$$Type)>)>)>)

public "identifier"(): $ModelLayerLocation
public "transformed"(properties: $VanillaModelLayerProperties$$Type): $EntityLayerProperties
public "gatherModels"(output: $Consumer$$Type<($ModelPart)>): void
public "chooseModel"(entity: $Entity$$Type): $Triple<($ModelPart), ($ResourceLocation), (float)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityLayerProperties$$Type = ($EntityLayerProperties);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityLayerProperties$$Original = $EntityLayerProperties;}
declare module "com.supermartijn642.fusion.entity.model.predicates.EntityModelPredicate" {
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Serializer} from "com.supermartijn642.fusion.api.util.Serializer"

export interface $EntityModelPredicate$$Interface {
get "serializer"(): $Serializer<($EntityModelPredicate)>
}

export class $EntityModelPredicate implements $EntityModelPredicate$$Interface {
 "test"(entity: $Entity$$Type): boolean
 "getSerializer"(): $Serializer<($EntityModelPredicate)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityModelPredicate$$Type = ($EntityModelPredicate);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityModelPredicate$$Original = $EntityModelPredicate;}
declare module "com.supermartijn642.fusion.entity.model.FusionModelPart" {
import {$Map} from "java.util.Map"
import {$EMFModel_ID} from "traben.entity_model_features.models.EMFModel_ID"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List} from "java.util.List"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$VanillaModelLayerProperties$$Type} from "com.supermartijn642.fusion.entity.VanillaModelLayerProperties"
import {$EntityLayerProperties$$Type} from "com.supermartijn642.fusion.entity.model.EntityLayerProperties"
import {$PartPose} from "net.minecraft.client.model.geom.PartPose"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ModelPart$Cube} from "net.minecraft.client.model.geom.ModelPart$Cube"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ModelPart, $ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"
import {$SubModelPart, $SubModelPart$$Type} from "com.supermartijn642.fusion.entity.model.SubModelPart"

export class $FusionModelPart extends $SubModelPart {
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
 "emf$modelInfo": $EMFModel_ID
 "zScale": float

constructor(layerIndex: integer, original: $ModelPart$$Type)

public "clear"(): void
public "setup"(entity: $Entity$$Type, bufferSource: $MultiBufferSource$$Type): void
public "setProperties"(properties: $EntityLayerProperties$$Type, vanillaProperties: $VanillaModelLayerProperties$$Type): void
public "render"(poseStack: $PoseStack$$Type, vertexConsumer: $VertexConsumer$$Type, i: integer, j: integer, k: integer): void
public "renderPart"(part: $SubModelPart$$Type, poseStack: $PoseStack$$Type, vertexConsumer: $VertexConsumer$$Type, i: integer, j: integer, k: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FusionModelPart$$Type = ($FusionModelPart);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FusionModelPart$$Original = $FusionModelPart;}
declare module "com.supermartijn642.fusion.entity.model.SubModelPart" {
import {$FusionModelPart$$Type} from "com.supermartijn642.fusion.entity.model.FusionModelPart"
import {$PartPose} from "net.minecraft.client.model.geom.PartPose"
import {$Map} from "java.util.Map"
import {$ModelPart$Cube} from "net.minecraft.client.model.geom.ModelPart$Cube"
import {$EMFModel_ID} from "traben.entity_model_features.models.EMFModel_ID"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List} from "java.util.List"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$ModelPart, $ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $SubModelPart extends $ModelPart {
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
 "emf$modelInfo": $EMFModel_ID
 "zScale": float

constructor(mainPart: $FusionModelPart$$Type)

public "finish"(): void
public "getChild"(name: StringJS): $ModelPart
public "mirror"(target: $ModelPart$$Type): void
public "render"(poseStack: $PoseStack$$Type, vertexConsumer: $VertexConsumer$$Type, i: integer, j: integer, k: integer): void
public "hasChild"(name: StringJS): boolean
public "validateModelHasImportantChildren"(model: $ModelPart$$Type, missingPartOutput: $Consumer$$Type<(StringJS)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SubModelPart$$Type = ($SubModelPart);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SubModelPart$$Original = $SubModelPart;}
declare module "com.supermartijn642.fusion.entity.model.EntityLayerProperties$ModelOption" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$List, $List$$Type} from "java.util.List"
import {$ModelPart, $ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"

export class $EntityLayerProperties$ModelOption {
constructor(model: $ModelPart$$Type, isVanillaModel: boolean, textures: $List$$Type<($ResourceLocation$$Type)>, weight: double, scaling: float)

public "weight"(): double
public "model"(): $ModelPart
public "textures"(): $List<($ResourceLocation)>
public "scaling"(): float
public "isVanillaModel"(): boolean
get "vanillaModel"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityLayerProperties$ModelOption$$Type = ($EntityLayerProperties$ModelOption);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityLayerProperties$ModelOption$$Original = $EntityLayerProperties$ModelOption;}
declare module "com.supermartijn642.fusion.entity.VanillaModelLayerProperties" {
import {$EntityRenderer$$Type} from "net.minecraft.client.renderer.entity.EntityRenderer"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$ModelLayerLocation$$Type} from "net.minecraft.client.model.geom.ModelLayerLocation"

export class $VanillaModelLayerProperties {
public static "get"(location: $ModelLayerLocation$$Type, renderer: $EntityRenderer$$Type<(never)>): $VanillaModelLayerProperties
public "transform"(poseStack: $PoseStack$$Type): void
public "getOffsetZ"(): float
public "getOffsetX"(): float
public "getOffsetY"(): float
public "shouldFlipZ"(): boolean
public "shouldFlipX"(): boolean
public "shouldFlipY"(): boolean
get "offsetZ"(): float
get "offsetX"(): float
get "offsetY"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VanillaModelLayerProperties$$Type = ($VanillaModelLayerProperties);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VanillaModelLayerProperties$$Original = $VanillaModelLayerProperties;}
