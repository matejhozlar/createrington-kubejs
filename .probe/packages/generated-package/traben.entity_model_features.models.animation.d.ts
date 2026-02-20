declare module "traben.entity_model_features.models.animation.math.variables.EMFModelOrRenderVariable" {
import {$EMFModelPart$$Type} from "traben.entity_model_features.models.parts.EMFModelPart"
import {$Enum} from "java.lang.Enum"
import {$ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"

export class $EMFModelOrRenderVariable extends $Enum<($EMFModelOrRenderVariable)> {
static readonly "TX": $EMFModelOrRenderVariable
static readonly "RENDER_shadow_size": $EMFModelOrRenderVariable
static readonly "RENDER_SHADOW_OPACITY": $EMFModelOrRenderVariable
static readonly "TY": $EMFModelOrRenderVariable
static readonly "SX": $EMFModelOrRenderVariable
static readonly "TZ": $EMFModelOrRenderVariable
static readonly "RX": $EMFModelOrRenderVariable
static readonly "SY": $EMFModelOrRenderVariable
static readonly "RY": $EMFModelOrRenderVariable
static readonly "SZ": $EMFModelOrRenderVariable
static readonly "RZ": $EMFModelOrRenderVariable
static readonly "RENDER_SHADOW_X": $EMFModelOrRenderVariable
static readonly "VISIBLE": $EMFModelOrRenderVariable
static readonly "RENDER_SHADOW_Z": $EMFModelOrRenderVariable
static readonly "RENDER_LEASH_X": $EMFModelOrRenderVariable
static readonly "RENDER_LEASH_Y": $EMFModelOrRenderVariable
static readonly "RENDER_LEASH_Z": $EMFModelOrRenderVariable
static readonly "VISIBLE_BOXES": $EMFModelOrRenderVariable

public static "get"(id: StringJS): $EMFModelOrRenderVariable
public static "values"(): ($EMFModelOrRenderVariable)[]
public static "valueOf"(name: StringJS): $EMFModelOrRenderVariable
public "getValue"(arg0: $ModelPart$$Type): float
public "getValue"(): float
public "setValue"(arg0: $EMFModelPart$$Type, arg1: float): void
public "isBoolean"(): boolean
public static "getRenderVariable"(id: StringJS): $EMFModelOrRenderVariable
public "isRenderVariable"(): boolean
get "value"(): float
get "boolean"(): boolean
get "renderVariable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EMFModelOrRenderVariable$$Type = (("tx") | ("ty") | ("tz") | ("rx") | ("ry") | ("rz") | ("sx") | ("sy") | ("sz") | ("visible") | ("visible_boxes") | ("render_shadow_size") | ("render_shadow_opacity") | ("render_shadow_x") | ("render_shadow_z") | ("render_leash_x") | ("render_leash_y") | ("render_leash_z"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EMFModelOrRenderVariable$$Original = $EMFModelOrRenderVariable;}
declare module "traben.entity_model_features.models.animation.EMFAnimation" {
import {$EMFModelPart, $EMFModelPart$$Type} from "traben.entity_model_features.models.parts.EMFModelPart"
import {$Object2ObjectLinkedOpenHashMap, $Object2ObjectLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ObjectLinkedOpenHashMap"
import {$EMFModelOrRenderVariable$$Type} from "traben.entity_model_features.models.animation.math.variables.EMFModelOrRenderVariable"
import {$ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"
import {$Object2ObjectOpenHashMap, $Object2ObjectOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ObjectOpenHashMap"

export class $EMFAnimation {
 "temp_emfAnimationVariables": $Object2ObjectLinkedOpenHashMap<(StringJS), ($EMFAnimation)>
readonly "modelName": StringJS
 "temp_allPartsBySingleAndFullHeirachicalId": $Object2ObjectOpenHashMap<(StringJS), ($EMFModelPart)>
readonly "animKey": StringJS
readonly "expressionString": StringJS

constructor(partToApplyTo: $EMFModelPart$$Type, modelOrRenderVariableToChange: $EMFModelOrRenderVariable$$Type, animKey: StringJS, initialExpression: StringJS, modelName: StringJS)

public "toString"(): StringJS
public "isValid"(): boolean
public "isVar"(): boolean
public "getResultViaCalculate"(): float
public "calculateAndSet"(): void
public "initExpression"(emfAnimationVariables: $Object2ObjectLinkedOpenHashMap$$Type<(StringJS), ($EMFAnimation$$Type)>, allPartByName: $Object2ObjectOpenHashMap$$Type<(StringJS), ($EMFModelPart$$Type)>): void
public "calculateAndSetIfNotPaused"(paused: ($ModelPart$$Type)[]): void
public "getLastResultOnly"(): float
get "valid"(): boolean
get "var"(): boolean
get "resultViaCalculate"(): float
get "lastResultOnly"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EMFAnimation$$Type = ($EMFAnimation);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EMFAnimation$$Original = $EMFAnimation;}
