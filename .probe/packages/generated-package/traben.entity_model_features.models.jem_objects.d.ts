declare module "traben.entity_model_features.models.jem_objects.EMFPartData" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$LinkedHashMap} from "java.util.LinkedHashMap"
import {$PoseStack} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List} from "java.util.List"
import {$LinkedList} from "java.util.LinkedList"
import {$EMFJemData$$Type} from "traben.entity_model_features.models.jem_objects.EMFJemData"
import {$EMFBoxData} from "traben.entity_model_features.models.jem_objects.EMFBoxData"
import {$Object2ObjectOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ObjectOpenHashMap"
import {$Consumer} from "java.util.function.Consumer"

export class $EMFPartData {
 "boxes": ($EMFBoxData)[]
 "rotate": (float)[]
 "attachments": $Object2ObjectOpenHashMap<(StringJS), ((float)[])>
 "texture": StringJS
 "invertAxis": StringJS
 "submodel": $EMFPartData
 "mirrorTexture": StringJS
 "part": StringJS
 "scale": float
 "baseId": StringJS
 "translate": (float)[]
 "textureSize": (integer)[]
 "animations": $LinkedList<($LinkedHashMap<(StringJS), (StringJS)>)>
 "model": StringJS
 "id": StringJS
 "attach": boolean
 "submodels": $LinkedList<($EMFPartData)>

constructor()

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "prepare"(textureSize: (integer)[], jem: $EMFJemData$$Type): void
public "getAttachments"(): $List<($Consumer<($PoseStack)>)>
public "getCustomTexture"(): $ResourceLocation
get "customTexture"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EMFPartData$$Type = ($EMFPartData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EMFPartData$$Original = $EMFPartData;}
declare module "traben.entity_model_features.models.jem_objects.EMFJemData" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$EMFModel_ID, $EMFModel_ID$$Type} from "traben.entity_model_features.models.EMFModel_ID"
import {$LinkedHashMap} from "java.util.LinkedHashMap"
import {$List} from "java.util.List"
import {$LinkedList} from "java.util.LinkedList"
import {$EMFDirectoryHandler, $EMFDirectoryHandler$$Type} from "traben.entity_model_features.utils.EMFDirectoryHandler"
import {$EMFPartData} from "traben.entity_model_features.models.jem_objects.EMFPartData"

export class $EMFJemData {
 "directoryContext": $EMFDirectoryHandler
 "models": $LinkedList<($EMFPartData)>
 "textureSize": (integer)[]
 "texture": StringJS
 "shadow_size": double

constructor()

public "toString"(): StringJS
public "prepare"(directoryContext: $EMFDirectoryHandler$$Type, mobModelIDInfo: $EMFModel_ID$$Type): void
public "getMobModelIDInfo"(): $EMFModel_ID
public "getCustomTexture"(): $ResourceLocation
public "getAllTopLevelAnimationsByVanillaPartName"(): $LinkedHashMap<(StringJS), ($List<($LinkedHashMap<(StringJS), (StringJS)>)>)>
public "validateJemTexture"(textureIn: StringJS): $ResourceLocation
public "validateJemTexture"(textureIn: StringJS, canRemoveRedundancy: boolean): $ResourceLocation
get "mobModelIDInfo"(): $EMFModel_ID
get "customTexture"(): $ResourceLocation
get "allTopLevelAnimationsByVanillaPartName"(): $LinkedHashMap<(StringJS), ($List<($LinkedHashMap<(StringJS), (StringJS)>)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EMFJemData$$Type = ($EMFJemData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EMFJemData$$Original = $EMFJemData;}
