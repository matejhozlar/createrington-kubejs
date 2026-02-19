declare module "net.minecraft.client.animation.Keyframe" {
import {$AnimationChannel$Interpolation, $AnimationChannel$Interpolation$$Type} from "net.minecraft.client.animation.AnimationChannel$Interpolation"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$Record} from "java.lang.Record"

export class $Keyframe extends $Record {
constructor(arg0: float, arg1: $Vector3f$$Type, arg2: $AnimationChannel$Interpolation$$Type)

public "interpolation"(): $AnimationChannel$Interpolation
public "equals"(arg0: any): boolean
public "target"(): $Vector3f
public "toString"(): StringJS
public "hashCode"(): integer
public "timestamp"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Keyframe$$Type = ({"interpolation"?: $AnimationChannel$Interpolation$$Type, "target"?: $Vector3f$$Type, "timestamp"?: float}) | ([interpolation?: $AnimationChannel$Interpolation$$Type, target?: $Vector3f$$Type, timestamp?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Keyframe$$Original = $Keyframe;}
declare module "net.minecraft.client.animation.AnimationChannel$Target" {
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$ModelPart, $ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"

export interface $AnimationChannel$Target$$Interface {

(arg0: $ModelPart, arg1: $Vector3f): void
}

export class $AnimationChannel$Target implements $AnimationChannel$Target$$Interface {
 "apply"(arg0: $ModelPart$$Type, arg1: $Vector3f$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationChannel$Target$$Type = ((arg0: $ModelPart, arg1: $Vector3f) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnimationChannel$Target$$Original = $AnimationChannel$Target;}
declare module "net.minecraft.client.animation.AnimationChannel$Interpolation" {
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$Keyframe, $Keyframe$$Type} from "net.minecraft.client.animation.Keyframe"

export interface $AnimationChannel$Interpolation$$Interface {

(arg0: $Vector3f, arg1: float, arg2: ($Keyframe)[], arg3: integer, arg4: integer, arg5: float): $Vector3f$$Type
}

export class $AnimationChannel$Interpolation implements $AnimationChannel$Interpolation$$Interface {
 "apply"(arg0: $Vector3f$$Type, arg1: float, arg2: ($Keyframe$$Type)[], arg3: integer, arg4: integer, arg5: float): $Vector3f
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationChannel$Interpolation$$Type = ((arg0: $Vector3f, arg1: float, arg2: ($Keyframe)[], arg3: integer, arg4: integer, arg5: float) => $Vector3f$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnimationChannel$Interpolation$$Original = $AnimationChannel$Interpolation;}
