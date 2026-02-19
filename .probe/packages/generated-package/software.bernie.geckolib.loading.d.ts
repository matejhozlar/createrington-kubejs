declare module "software.bernie.geckolib.loading.json.raw.ModelProperties" {
import {$JsonDeserializer} from "com.google.gson.JsonDeserializer"
import {$Record} from "java.lang.Record"

export class $ModelProperties extends $Record {
constructor(animationArmsDown: boolean, animationArmsOutFront: boolean, animationDontShowArmor: boolean, animationInvertedCrouch: boolean, animationNoHeadBob: boolean, animationSingleArmAnimation: boolean, animationSingleLegAnimation: boolean, animationStationaryLegs: boolean, animationStatueOfLibertyArms: boolean, animationUpsideDown: boolean, identifier: StringJS, preserveModelPose: boolean, textureHeight: double, textureWidth: double, visibleBoundsHeight: double, visibleBoundsOffset: (double)[], visibleBoundsWidth: double)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "deserializer"(): $JsonDeserializer<($ModelProperties)>
public "identifier"(): StringJS
public "textureWidth"(): double
public "textureHeight"(): double
public "animationArmsOutFront"(): boolean
public "animationStationaryLegs"(): boolean
public "visibleBoundsHeight"(): double
public "animationUpsideDown"(): boolean
public "animationDontShowArmor"(): boolean
public "animationInvertedCrouch"(): boolean
public "visibleBoundsOffset"(): (double)[]
public "animationArmsDown"(): boolean
public "visibleBoundsWidth"(): double
public "preserveModelPose"(): boolean
public "animationNoHeadBob"(): boolean
public "animationSingleArmAnimation"(): boolean
public "animationStatueOfLibertyArms"(): boolean
public "animationSingleLegAnimation"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelProperties$$Type = ({"animationArmsDown"?: boolean, "visibleBoundsHeight"?: double, "animationDontShowArmor"?: boolean, "preserveModelPose"?: boolean, "animationStationaryLegs"?: boolean, "animationArmsOutFront"?: boolean, "animationNoHeadBob"?: boolean, "animationSingleLegAnimation"?: boolean, "animationSingleArmAnimation"?: boolean, "textureHeight"?: double, "visibleBoundsWidth"?: double, "animationStatueOfLibertyArms"?: boolean, "visibleBoundsOffset"?: (double)[], "animationUpsideDown"?: boolean, "animationInvertedCrouch"?: boolean, "identifier"?: StringJS, "textureWidth"?: double}) | ([animationArmsDown?: boolean, visibleBoundsHeight?: double, animationDontShowArmor?: boolean, preserveModelPose?: boolean, animationStationaryLegs?: boolean, animationArmsOutFront?: boolean, animationNoHeadBob?: boolean, animationSingleLegAnimation?: boolean, animationSingleArmAnimation?: boolean, textureHeight?: double, visibleBoundsWidth?: double, animationStatueOfLibertyArms?: boolean, visibleBoundsOffset?: (double)[], animationUpsideDown?: boolean, animationInvertedCrouch?: boolean, identifier?: StringJS, textureWidth?: double]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelProperties$$Original = $ModelProperties;}
declare module "software.bernie.geckolib.loading.math.MathValue" {
import {$DoubleSupplier$$Interface} from "java.util.function.DoubleSupplier"

export interface $MathValue$$Interface extends $DoubleSupplier$$Interface {

(): double
get "mutable"(): boolean
get "asDouble"(): double
}

export class $MathValue implements $MathValue$$Interface {
 "isMutable"(): boolean
 "get"(): double
 "getAsDouble"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MathValue$$Type = (() => double);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MathValue$$Original = $MathValue;}
declare module "software.bernie.geckolib.loading.json.raw.FaceUV$Rotation" {
import {$Enum} from "java.lang.Enum"

export class $FaceUV$Rotation extends $Enum<($FaceUV$Rotation)> {
static readonly "CLOCKWISE_90": $FaceUV$Rotation
static readonly "CLOCKWISE_270": $FaceUV$Rotation
static readonly "CLOCKWISE_180": $FaceUV$Rotation
static readonly "NONE": $FaceUV$Rotation

public static "values"(): ($FaceUV$Rotation)[]
public static "valueOf"(arg0: StringJS): $FaceUV$Rotation
public static "fromValue"(arg0: integer): $FaceUV$Rotation
public "rotateUvs"(arg0: float, arg1: float, arg2: float, arg3: float): (float)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FaceUV$Rotation$$Type = (("none") | ("clockwise_90") | ("clockwise_180") | ("clockwise_270"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FaceUV$Rotation$$Original = $FaceUV$Rotation;}
