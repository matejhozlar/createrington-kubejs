declare module "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache" {
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$DataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.DataTicket"
import {$AnimatableManager} from "software.bernie.geckolib.animation.AnimatableManager"

export class $AnimatableInstanceCache {
constructor(arg0: $GeoAnimatable$$Type)

public "getManagerForId"<T extends $GeoAnimatable>(arg0: long): $AnimatableManager<(T)>
public "getRenderProvider"(): any
public "addDataPoint"<D>(arg0: long, arg1: $DataTicket$$Type<(D)>, arg2: D): void
public "getDataPoint"<D>(arg0: long, arg1: $DataTicket$$Type<(D)>): D
get "renderProvider"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatableInstanceCache$$Type = ($AnimatableInstanceCache);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnimatableInstanceCache$$Original = $AnimatableInstanceCache;}
declare module "software.bernie.geckolib.animatable.GeoAnimatable" {
import {$AnimatableInstanceCache} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"

export interface $GeoAnimatable$$Interface {
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "boneResetTime"(): double
}

export class $GeoAnimatable implements $GeoAnimatable$$Interface {
 "shouldPlayAnimsWhileGamePaused"(): boolean
 "getAnimatableInstanceCache"(): $AnimatableInstanceCache
 "animatableCacheOverride"(): $AnimatableInstanceCache
 "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
 "getTick"(arg0: any): double
 "getBoneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoAnimatable$$Type = ($GeoAnimatable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoAnimatable$$Original = $GeoAnimatable;}
