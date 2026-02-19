declare module "software.bernie.geckolib.model.GeoModel" {
import {$Optional} from "java.util.Optional"
import {$GeoBone} from "software.bernie.geckolib.cache.object.GeoBone"
import {$Animation} from "software.bernie.geckolib.animation.Animation"
import {$BakedGeoModel} from "software.bernie.geckolib.cache.object.BakedGeoModel"
import {$GeoRenderer$$Type} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$AnimationProcessor} from "software.bernie.geckolib.animation.AnimationProcessor"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$AnimationState$$Type} from "software.bernie.geckolib.animation.AnimationState"
import {$DataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.DataTicket"
import {$RenderType} from "net.minecraft.client.renderer.RenderType"

export class $GeoModel<T extends $GeoAnimatable> {
constructor()

public "getAnimationResourceFallbacks"(arg0: T): ($ResourceLocation)[]
/**
 * 
 * @deprecated
 */
public "getModelResource"(arg0: T): $ResourceLocation
public "getModelResource"(arg0: T, arg1: $GeoRenderer$$Type<(T)>): $ResourceLocation
/**
 * 
 * @deprecated
 */
public "getTextureResource"(arg0: T): $ResourceLocation
public "getTextureResource"(arg0: T, arg1: $GeoRenderer$$Type<(T)>): $ResourceLocation
public "crashIfBoneMissing"(): boolean
public "applyMolangQueries"(arg0: $AnimationState$$Type<(T)>, arg1: double): void
public "handleAnimations"(arg0: T, arg1: long, arg2: $AnimationState$$Type<(T)>, arg3: float): void
public "getAnimation"(arg0: T, arg1: StringJS): $Animation
public "getBone"(arg0: StringJS): $Optional<($GeoBone)>
public "getRenderType"(arg0: T, arg1: $ResourceLocation$$Type): $RenderType
public "getBakedModel"(arg0: $ResourceLocation$$Type): $BakedGeoModel
public "setCustomAnimations"(arg0: T, arg1: long, arg2: $AnimationState$$Type<(T)>): void
public "getAnimationResource"(arg0: T): $ResourceLocation
public "addAdditionalStateData"(arg0: T, arg1: long, arg2: $BiConsumer$$Type<($DataTicket<(T)>), (T)>): void
public "getAnimationProcessor"(): $AnimationProcessor<(T)>
get "animationProcessor"(): $AnimationProcessor<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoModel$$Type<T> = ($GeoModel<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoModel$$Original<T> = $GeoModel<(T)>;}
