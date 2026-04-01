declare module "com.pedrorok.hypertube.mixin.core.PlayerModelAccessor" {
import {$ModelPart, $ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"

export interface $PlayerModelAccessor$$Interface {

(): $ModelPart$$Type
}

export class $PlayerModelAccessor implements $PlayerModelAccessor$$Interface {
 "createHypertube$getCloak"(): $ModelPart
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerModelAccessor$$Type = (() => $ModelPart$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerModelAccessor$$Original = $PlayerModelAccessor;}
declare module "com.pedrorok.hypertube.mixin.core.CameraAccessorMixin" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CameraAccessorMixin$$Interface {
}

export class $CameraAccessorMixin implements $CameraAccessorMixin$$Interface {
 "createHypertube$callSetPosition"(arg0: double, arg1: double, arg2: double): void
 "createHypertube$callGetMaxZoom"(arg0: float): float
 "createHypertube$callSetRotation"(arg0: float, arg1: float): void
 "createHypertube$callMove"(arg0: float, arg1: float, arg2: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CameraAccessorMixin$$Type = ($CameraAccessorMixin);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CameraAccessorMixin$$Original = $CameraAccessorMixin;}
