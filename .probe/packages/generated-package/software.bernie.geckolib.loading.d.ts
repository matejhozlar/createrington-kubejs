declare module "software.bernie.geckolib.loading.math.MathValue" {
import {$DoubleSupplier$$Interface} from "java.util.function.DoubleSupplier"

export interface $MathValue$$Interface extends $DoubleSupplier$$Interface {

(): double
get "asDouble"(): double
get "mutable"(): boolean
}

export class $MathValue implements $MathValue$$Interface {
 "get"(): double
 "getAsDouble"(): double
 "isMutable"(): boolean
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
public "rotateUvs"(arg0: float, arg1: float, arg2: float, arg3: float): (float)[]
public static "fromValue"(arg0: integer): $FaceUV$Rotation
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
declare module "software.bernie.geckolib.loading.json.raw.ModelProperties" {
import {$JsonDeserializer} from "com.google.gson.JsonDeserializer"
import {$Record} from "java.lang.Record"

export class $ModelProperties extends $Record {
constructor(animationArmsDown: boolean, animationArmsOutFront: boolean, animationDontShowArmor: boolean, animationInvertedCrouch: boolean, animationNoHeadBob: boolean, animationSingleArmAnimation: boolean, animationSingleLegAnimation: boolean, animationStationaryLegs: boolean, animationStatueOfLibertyArms: boolean, animationUpsideDown: boolean, identifier: StringJS, preserveModelPose: boolean, textureHeight: double, textureWidth: double, visibleBoundsHeight: double, visibleBoundsOffset: (double)[], visibleBoundsWidth: double)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "identifier"(): StringJS
public "textureHeight"(): double
public "textureWidth"(): double
public static "deserializer"(): $JsonDeserializer<($ModelProperties)>
public "animationSingleLegAnimation"(): boolean
public "animationSingleArmAnimation"(): boolean
public "animationStatueOfLibertyArms"(): boolean
public "animationArmsDown"(): boolean
public "visibleBoundsWidth"(): double
public "preserveModelPose"(): boolean
public "animationNoHeadBob"(): boolean
public "animationStationaryLegs"(): boolean
public "visibleBoundsOffset"(): (double)[]
public "visibleBoundsHeight"(): double
public "animationDontShowArmor"(): boolean
public "animationArmsOutFront"(): boolean
public "animationInvertedCrouch"(): boolean
public "animationUpsideDown"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelProperties$$Type = ({"animationUpsideDown"?: boolean, "visibleBoundsOffset"?: (double)[], "animationStatueOfLibertyArms"?: boolean, "visibleBoundsWidth"?: double, "textureHeight"?: double, "animationSingleArmAnimation"?: boolean, "animationSingleLegAnimation"?: boolean, "animationNoHeadBob"?: boolean, "animationArmsOutFront"?: boolean, "animationStationaryLegs"?: boolean, "preserveModelPose"?: boolean, "animationDontShowArmor"?: boolean, "visibleBoundsHeight"?: double, "animationArmsDown"?: boolean, "textureWidth"?: double, "identifier"?: StringJS, "animationInvertedCrouch"?: boolean}) | ([animationUpsideDown?: boolean, visibleBoundsOffset?: (double)[], animationStatueOfLibertyArms?: boolean, visibleBoundsWidth?: double, textureHeight?: double, animationSingleArmAnimation?: boolean, animationSingleLegAnimation?: boolean, animationNoHeadBob?: boolean, animationArmsOutFront?: boolean, animationStationaryLegs?: boolean, preserveModelPose?: boolean, animationDontShowArmor?: boolean, visibleBoundsHeight?: double, animationArmsDown?: boolean, textureWidth?: double, identifier?: StringJS, animationInvertedCrouch?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelProperties$$Original = $ModelProperties;}
