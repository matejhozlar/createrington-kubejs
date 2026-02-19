declare module "dev.lopyluna.gnkinetics.mixins.KineticEffectHandlerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $KineticEffectHandlerAccessor$$Interface {

(): float
}

export class $KineticEffectHandlerAccessor implements $KineticEffectHandlerAccessor$$Interface {
 "overStressedEffect"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KineticEffectHandlerAccessor$$Type = (() => float);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KineticEffectHandlerAccessor$$Original = $KineticEffectHandlerAccessor;}
declare module "dev.lopyluna.gnkinetics.mixins.KineticBlockEntityAccessor" {
import {$KineticEffectHandler, $KineticEffectHandler$$Type} from "com.simibubi.create.content.kinetics.base.KineticEffectHandler"

export interface $KineticBlockEntityAccessor$$Interface {

(): $KineticEffectHandler$$Type
}

export class $KineticBlockEntityAccessor implements $KineticBlockEntityAccessor$$Interface {
 "effects"(): $KineticEffectHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KineticBlockEntityAccessor$$Type = (() => $KineticEffectHandler$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KineticBlockEntityAccessor$$Original = $KineticBlockEntityAccessor;}
declare module "dev.lopyluna.gnkinetics.mixins.ServerGamePacketListenerImplAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ServerGamePacketListenerImplAccessor$$Interface {
}

export class $ServerGamePacketListenerImplAccessor implements $ServerGamePacketListenerImplAccessor$$Interface {
 "aboveGroundVehicleTickCount"(arg0: integer): void
 "aboveGroundTickCount"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerGamePacketListenerImplAccessor$$Type = ($ServerGamePacketListenerImplAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerGamePacketListenerImplAccessor$$Original = $ServerGamePacketListenerImplAccessor;}
