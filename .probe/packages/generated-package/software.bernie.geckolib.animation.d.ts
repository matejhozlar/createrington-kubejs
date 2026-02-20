declare module "software.bernie.geckolib.animation.Animation$LoopType" {
import {$AnimationController, $AnimationController$$Type} from "software.bernie.geckolib.animation.AnimationController"
import {$Map} from "java.util.Map"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$JsonElement$$Type} from "com.google.gson.JsonElement"
import {$Animation, $Animation$$Type} from "software.bernie.geckolib.animation.Animation"

export interface $Animation$LoopType$$Interface {

(arg0: $GeoAnimatable, arg1: $AnimationController<($GeoAnimatable)>, arg2: $Animation): boolean
get "id"(): StringJS
}

export class $Animation$LoopType implements $Animation$LoopType$$Interface {
static readonly "LOOP": $Animation$LoopType
static readonly "HOLD_ON_LAST_FRAME": $Animation$LoopType
static readonly "PLAY_ONCE": $Animation$LoopType
static readonly "LOOP_TYPES": $Map<(StringJS), ($Animation$LoopType)>
static readonly "DEFAULT": $Animation$LoopType

static "register"(arg0: StringJS, arg1: $Animation$LoopType$$Type): $Animation$LoopType
 "getId"(): StringJS
static "fromString"(arg0: StringJS): $Animation$LoopType
static "fromJson"(arg0: $JsonElement$$Type): $Animation$LoopType
 "shouldPlayAgain"(arg0: $GeoAnimatable$$Type, arg1: $AnimationController$$Type<($GeoAnimatable$$Type)>, arg2: $Animation$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Animation$LoopType$$Type = ((arg0: $GeoAnimatable, arg1: $AnimationController<($GeoAnimatable)>, arg2: $Animation) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Animation$LoopType$$Original = $Animation$LoopType;}
declare module "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar" {
import {$AnimationController, $AnimationController$$Type} from "software.bernie.geckolib.animation.AnimationController"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$List, $List$$Type} from "java.util.List"
import {$Record} from "java.lang.Record"

export class $AnimatableManager$ControllerRegistrar extends $Record {
constructor(controllers: $List$$Type<($AnimationController$$Type<($GeoAnimatable$$Type)>)>)

public "remove"(arg0: StringJS): $AnimatableManager$ControllerRegistrar
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "add"(...arg0: ($AnimationController$$Type<(never)>)[]): $AnimatableManager$ControllerRegistrar
public "add"(arg0: $AnimationController$$Type<(never)>): $AnimatableManager$ControllerRegistrar
public "controllers"(): $List<($AnimationController<($GeoAnimatable)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatableManager$ControllerRegistrar$$Type = ({"controllers"?: $List$$Type<($AnimationController$$Type<($GeoAnimatable$$Type)>)>}) | ([controllers?: $List$$Type<($AnimationController$$Type<($GeoAnimatable$$Type)>)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnimatableManager$ControllerRegistrar$$Original = $AnimatableManager$ControllerRegistrar;}
declare module "software.bernie.geckolib.animation.RawAnimation" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RawAnimation$Stage} from "software.bernie.geckolib.animation.RawAnimation$Stage"
import {$List} from "java.util.List"
import {$Animation$LoopType$$Type} from "software.bernie.geckolib.animation.Animation$LoopType"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $RawAnimation {
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($RawAnimation)>

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "copyOf"(arg0: $RawAnimation$$Type): $RawAnimation
public static "begin"(): $RawAnimation
public "then"(arg0: StringJS, arg1: $Animation$LoopType$$Type): $RawAnimation
public "thenLoop"(arg0: StringJS): $RawAnimation
public "thenWait"(arg0: integer): $RawAnimation
public "thenPlay"(arg0: StringJS): $RawAnimation
public "getStageCount"(): integer
public "getAnimationStages"(): $List<($RawAnimation$Stage)>
public "thenPlayAndHold"(arg0: StringJS): $RawAnimation
public "thenPlayXTimes"(arg0: StringJS, arg1: integer): $RawAnimation
get "stageCount"(): integer
get "animationStages"(): $List<($RawAnimation$Stage)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RawAnimation$$Type = ($RawAnimation);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RawAnimation$$Original = $RawAnimation;}
declare module "software.bernie.geckolib.animation.RawAnimation$Stage" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Animation$LoopType, $Animation$LoopType$$Type} from "software.bernie.geckolib.animation.Animation$LoopType"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $RawAnimation$Stage extends $Record {
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($RawAnimation$Stage)>

constructor(arg0: StringJS, arg1: $Animation$LoopType$$Type)
constructor(animationName: StringJS, loopType: $Animation$LoopType$$Type, additionalTicks: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "loopType"(): $Animation$LoopType
public "animationName"(): StringJS
public "additionalTicks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RawAnimation$Stage$$Type = ({"additionalTicks"?: integer, "loopType"?: $Animation$LoopType$$Type, "animationName"?: StringJS}) | ([additionalTicks?: integer, loopType?: $Animation$LoopType$$Type, animationName?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RawAnimation$Stage$$Original = $RawAnimation$Stage;}
declare module "software.bernie.geckolib.animation.AnimationProcessor" {
import {$Queue} from "java.util.Queue"
import {$Collection} from "java.util.Collection"
import {$RawAnimation$$Type} from "software.bernie.geckolib.animation.RawAnimation"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$GeoModel$$Type} from "software.bernie.geckolib.model.GeoModel"
import {$AnimationState$$Type} from "software.bernie.geckolib.animation.AnimationState"
import {$GeoBone, $GeoBone$$Type} from "software.bernie.geckolib.cache.object.GeoBone"
import {$AnimatableManager$$Type} from "software.bernie.geckolib.animation.AnimatableManager"
import {$AnimationProcessor$QueuedAnimation} from "software.bernie.geckolib.animation.AnimationProcessor$QueuedAnimation"
import {$BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"

export class $AnimationProcessor<T extends $GeoAnimatable> {
 "reloadAnimations": boolean

constructor(arg0: $GeoModel$$Type<(T)>)

public "getBone"(arg0: StringJS): $GeoBone
public "tickAnimation"(arg0: T, arg1: $GeoModel$$Type<(T)>, arg2: $AnimatableManager$$Type<(T)>, arg3: double, arg4: $AnimationState$$Type<(T)>, arg5: boolean): void
public "registerGeoBone"(arg0: $GeoBone$$Type): void
public "buildAnimationQueue"(arg0: T, arg1: $RawAnimation$$Type): $Queue<($AnimationProcessor$QueuedAnimation)>
public "setActiveModel"(arg0: $BakedGeoModel$$Type): void
public "preAnimationSetup"(arg0: $AnimationState$$Type<(T)>, arg1: double): void
public "getRegisteredBones"(): $Collection<($GeoBone)>
set "activeModel"(value: $BakedGeoModel$$Type)
get "registeredBones"(): $Collection<($GeoBone)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationProcessor$$Type<T> = ($AnimationProcessor<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnimationProcessor$$Original<T> = $AnimationProcessor<(T)>;}
declare module "software.bernie.geckolib.animation.keyframe.KeyframeStack" {
import {$List, $List$$Type} from "java.util.List"
import {$Keyframe} from "software.bernie.geckolib.animation.keyframe.Keyframe"
import {$Record} from "java.lang.Record"

export class $KeyframeStack<T extends $Keyframe<(object)>> extends $Record {
constructor()
constructor(xKeyframes: $List$$Type<(T)>, yKeyframes: $List$$Type<(T)>, zKeyframes: $List$$Type<(T)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "from"<F extends $Keyframe<(object)>>(arg0: $KeyframeStack$$Type<(F)>): $KeyframeStack<(F)>
public "xKeyframes"(): $List<(T)>
public "yKeyframes"(): $List<(T)>
public "zKeyframes"(): $List<(T)>
public "getLastKeyframeTime"(): double
get "lastKeyframeTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyframeStack$$Type<T> = ({"zKeyframes"?: $List$$Type<(T)>, "yKeyframes"?: $List$$Type<(T)>, "xKeyframes"?: $List$$Type<(T)>}) | ([zKeyframes?: $List$$Type<(T)>, yKeyframes?: $List$$Type<(T)>, xKeyframes?: $List$$Type<(T)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyframeStack$$Original<T> = $KeyframeStack<(T)>;}
declare module "software.bernie.geckolib.animation.AnimationController" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$RawAnimation, $RawAnimation$$Type} from "software.bernie.geckolib.animation.RawAnimation"
import {$AnimationController$AnimationStateHandler, $AnimationController$AnimationStateHandler$$Type} from "software.bernie.geckolib.animation.AnimationController$AnimationStateHandler"
import {$BoneSnapshot$$Type} from "software.bernie.geckolib.animation.state.BoneSnapshot"
import {$GeoBone$$Type} from "software.bernie.geckolib.cache.object.GeoBone"
import {$EasingType$$Type} from "software.bernie.geckolib.animation.EasingType"
import {$AnimationController$State} from "software.bernie.geckolib.animation.AnimationController$State"
import {$AnimationController$SoundKeyframeHandler$$Type} from "software.bernie.geckolib.animation.AnimationController$SoundKeyframeHandler"
import {$AnimationProcessor$QueuedAnimation} from "software.bernie.geckolib.animation.AnimationProcessor$QueuedAnimation"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$GeoModel$$Type} from "software.bernie.geckolib.model.GeoModel"
import {$Function$$Type} from "java.util.function.Function"
import {$AnimationController$ParticleKeyframeHandler$$Type} from "software.bernie.geckolib.animation.AnimationController$ParticleKeyframeHandler"
import {$AnimationState$$Type} from "software.bernie.geckolib.animation.AnimationState"
import {$AnimationController$CustomKeyframeHandler$$Type} from "software.bernie.geckolib.animation.AnimationController$CustomKeyframeHandler"
import {$BoneAnimationQueue} from "software.bernie.geckolib.animation.keyframe.BoneAnimationQueue"

export class $AnimationController<T extends $GeoAnimatable> {
constructor(arg0: T, arg1: $AnimationController$AnimationStateHandler$$Type<(T)>)
constructor(arg0: T, arg1: StringJS, arg2: $AnimationController$AnimationStateHandler$$Type<(T)>)
constructor(arg0: T, arg1: StringJS, arg2: integer, arg3: $AnimationController$AnimationStateHandler$$Type<(T)>)
constructor(arg0: T, arg1: integer, arg2: $AnimationController$AnimationStateHandler$$Type<(T)>)

public "getName"(): StringJS
public "stop"(): void
public "process"(arg0: $GeoModel$$Type<(T)>, arg1: $AnimationState$$Type<(T)>, arg2: $Map$$Type<(StringJS), ($GeoBone$$Type)>, arg3: $Map$$Type<(StringJS), ($BoneSnapshot$$Type)>, arg4: double, arg5: boolean): void
public "getCurrentRawAnimation"(): $RawAnimation
public "setSoundKeyframeHandler"(arg0: $AnimationController$SoundKeyframeHandler$$Type<(T)>): $AnimationController<(T)>
public "setParticleKeyframeHandler"(arg0: $AnimationController$ParticleKeyframeHandler$$Type<(T)>): $AnimationController<(T)>
public "triggerableAnim"(arg0: StringJS, arg1: $RawAnimation$$Type): $AnimationController<(T)>
public "setAnimationSpeed"(arg0: double): $AnimationController<(T)>
public "getAnimationSpeed"(): double
public "tryTriggerAnimation"(arg0: StringJS): boolean
public "setAnimation"(arg0: $RawAnimation$$Type): void
public "setOverrideEasingType"(arg0: $EasingType$$Type): $AnimationController<(T)>
public "receiveTriggeredAnimations"(): $AnimationController<(T)>
public "getCurrentAnimation"(): $AnimationProcessor$QueuedAnimation
public "getTriggeredAnimation"(): $RawAnimation
public "hasAnimationFinished"(): boolean
public "getBoneAnimationQueues"(): $Map<(StringJS), ($BoneAnimationQueue)>
public "forceAnimationReset"(): void
public "setAnimationSpeedHandler"(arg0: $Function$$Type<(T), (double)>): $AnimationController<(T)>
public "setCustomInstructionKeyframeHandler"(arg0: $AnimationController$CustomKeyframeHandler$$Type<(T)>): $AnimationController<(T)>
public "transitionLength"(arg0: integer): $AnimationController<(T)>
public "getStateHandler"(): $AnimationController$AnimationStateHandler<(T)>
public "getAnimationState"(): $AnimationController$State
public "setOverrideEasingTypeFunction"(arg0: $Function$$Type<(T), ($EasingType$$Type)>): $AnimationController<(T)>
public "isPlayingTriggeredAnimation"(): boolean
get "name"(): StringJS
get "currentRawAnimation"(): $RawAnimation
set "soundKeyframeHandler"(value: $AnimationController$SoundKeyframeHandler$$Type<(T)>)
set "particleKeyframeHandler"(value: $AnimationController$ParticleKeyframeHandler$$Type<(T)>)
set "animationSpeed"(value: double)
get "animationSpeed"(): double
set "animation"(value: $RawAnimation$$Type)
set "overrideEasingType"(value: $EasingType$$Type)
get "currentAnimation"(): $AnimationProcessor$QueuedAnimation
get "triggeredAnimation"(): $RawAnimation
get "boneAnimationQueues"(): $Map<(StringJS), ($BoneAnimationQueue)>
set "animationSpeedHandler"(value: $Function$$Type<(T), (double)>)
set "customInstructionKeyframeHandler"(value: $AnimationController$CustomKeyframeHandler$$Type<(T)>)
get "stateHandler"(): $AnimationController$AnimationStateHandler<(T)>
get "animationState"(): $AnimationController$State
set "overrideEasingTypeFunction"(value: $Function$$Type<(T), ($EasingType$$Type)>)
get "playingTriggeredAnimation"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationController$$Type<T> = ($AnimationController<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnimationController$$Original<T> = $AnimationController<(T)>;}
declare module "software.bernie.geckolib.animation.keyframe.BoneAnimationQueue" {
import {$AnimationPoint$$Type} from "software.bernie.geckolib.animation.keyframe.AnimationPoint"
import {$AnimationPointQueue, $AnimationPointQueue$$Type} from "software.bernie.geckolib.animation.keyframe.AnimationPointQueue"
import {$GeoBone, $GeoBone$$Type} from "software.bernie.geckolib.cache.object.GeoBone"
import {$Keyframe$$Type} from "software.bernie.geckolib.animation.keyframe.Keyframe"
import {$BoneSnapshot$$Type} from "software.bernie.geckolib.animation.state.BoneSnapshot"
import {$Record} from "java.lang.Record"

export class $BoneAnimationQueue extends $Record {
constructor(arg0: $GeoBone$$Type)
constructor(bone: $GeoBone$$Type, rotationXQueue: $AnimationPointQueue$$Type, rotationYQueue: $AnimationPointQueue$$Type, rotationZQueue: $AnimationPointQueue$$Type, positionXQueue: $AnimationPointQueue$$Type, positionYQueue: $AnimationPointQueue$$Type, positionZQueue: $AnimationPointQueue$$Type, scaleXQueue: $AnimationPointQueue$$Type, scaleYQueue: $AnimationPointQueue$$Type, scaleZQueue: $AnimationPointQueue$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "bone"(): $GeoBone
public "addScales"(arg0: $AnimationPoint$$Type, arg1: $AnimationPoint$$Type, arg2: $AnimationPoint$$Type): void
public "rotationXQueue"(): $AnimationPointQueue
public "rotationZQueue"(): $AnimationPointQueue
public "rotationYQueue"(): $AnimationPointQueue
public "positionXQueue"(): $AnimationPointQueue
public "positionYQueue"(): $AnimationPointQueue
public "positionZQueue"(): $AnimationPointQueue
public "scaleXQueue"(): $AnimationPointQueue
public "scaleYQueue"(): $AnimationPointQueue
public "scaleZQueue"(): $AnimationPointQueue
public "addNextRotation"(arg0: $Keyframe$$Type<(never)>, arg1: double, arg2: double, arg3: $BoneSnapshot$$Type, arg4: $BoneSnapshot$$Type, arg5: $AnimationPoint$$Type, arg6: $AnimationPoint$$Type, arg7: $AnimationPoint$$Type): void
public "addNextPosition"(arg0: $Keyframe$$Type<(never)>, arg1: double, arg2: double, arg3: $BoneSnapshot$$Type, arg4: $AnimationPoint$$Type, arg5: $AnimationPoint$$Type, arg6: $AnimationPoint$$Type): void
public "addNextScale"(arg0: $Keyframe$$Type<(never)>, arg1: double, arg2: double, arg3: $BoneSnapshot$$Type, arg4: $AnimationPoint$$Type, arg5: $AnimationPoint$$Type, arg6: $AnimationPoint$$Type): void
public "addRotations"(arg0: $AnimationPoint$$Type, arg1: $AnimationPoint$$Type, arg2: $AnimationPoint$$Type): void
public "addPositions"(arg0: $AnimationPoint$$Type, arg1: $AnimationPoint$$Type, arg2: $AnimationPoint$$Type): void
public "addScaleZPoint"(arg0: $Keyframe$$Type<(never)>, arg1: double, arg2: double, arg3: double, arg4: double): void
public "addRotationZPoint"(arg0: $Keyframe$$Type<(never)>, arg1: double, arg2: double, arg3: double, arg4: double): void
public "addPosYPoint"(arg0: $Keyframe$$Type<(never)>, arg1: double, arg2: double, arg3: double, arg4: double): void
public "addPosXPoint"(arg0: $Keyframe$$Type<(never)>, arg1: double, arg2: double, arg3: double, arg4: double): void
public "addScaleXPoint"(arg0: $Keyframe$$Type<(never)>, arg1: double, arg2: double, arg3: double, arg4: double): void
public "addRotationYPoint"(arg0: $Keyframe$$Type<(never)>, arg1: double, arg2: double, arg3: double, arg4: double): void
public "addRotationXPoint"(arg0: $Keyframe$$Type<(never)>, arg1: double, arg2: double, arg3: double, arg4: double): void
public "addScaleYPoint"(arg0: $Keyframe$$Type<(never)>, arg1: double, arg2: double, arg3: double, arg4: double): void
public "addPosZPoint"(arg0: $Keyframe$$Type<(never)>, arg1: double, arg2: double, arg3: double, arg4: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoneAnimationQueue$$Type = ({"positionXQueue"?: $AnimationPointQueue$$Type, "rotationZQueue"?: $AnimationPointQueue$$Type, "scaleZQueue"?: $AnimationPointQueue$$Type, "scaleXQueue"?: $AnimationPointQueue$$Type, "rotationXQueue"?: $AnimationPointQueue$$Type, "positionYQueue"?: $AnimationPointQueue$$Type, "bone"?: $GeoBone$$Type, "rotationYQueue"?: $AnimationPointQueue$$Type, "scaleYQueue"?: $AnimationPointQueue$$Type, "positionZQueue"?: $AnimationPointQueue$$Type}) | ([positionXQueue?: $AnimationPointQueue$$Type, rotationZQueue?: $AnimationPointQueue$$Type, scaleZQueue?: $AnimationPointQueue$$Type, scaleXQueue?: $AnimationPointQueue$$Type, rotationXQueue?: $AnimationPointQueue$$Type, positionYQueue?: $AnimationPointQueue$$Type, bone?: $GeoBone$$Type, rotationYQueue?: $AnimationPointQueue$$Type, scaleYQueue?: $AnimationPointQueue$$Type, positionZQueue?: $AnimationPointQueue$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BoneAnimationQueue$$Original = $BoneAnimationQueue;}
declare module "software.bernie.geckolib.animation.Animation" {
import {$Animation$Keyframes, $Animation$Keyframes$$Type} from "software.bernie.geckolib.animation.Animation$Keyframes"
import {$BoneAnimation, $BoneAnimation$$Type} from "software.bernie.geckolib.animation.keyframe.BoneAnimation"
import {$Animation$LoopType, $Animation$LoopType$$Type} from "software.bernie.geckolib.animation.Animation$LoopType"
import {$Record} from "java.lang.Record"

export class $Animation extends $Record {
constructor(name: StringJS, length: double, loopType: $Animation$LoopType$$Type, boneAnimations: ($BoneAnimation$$Type)[], keyFrames: $Animation$Keyframes$$Type)

public "name"(): StringJS
public "equals"(arg0: any): boolean
public "length"(): double
public "toString"(): StringJS
public "hashCode"(): integer
public "loopType"(): $Animation$LoopType
public "keyFrames"(): $Animation$Keyframes
public "boneAnimations"(): ($BoneAnimation)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Animation$$Type = ({"loopType"?: $Animation$LoopType$$Type, "boneAnimations"?: ($BoneAnimation$$Type)[], "name"?: StringJS, "length"?: double, "keyFrames"?: $Animation$Keyframes$$Type}) | ([loopType?: $Animation$LoopType$$Type, boneAnimations?: ($BoneAnimation$$Type)[], name?: StringJS, length?: double, keyFrames?: $Animation$Keyframes$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Animation$$Original = $Animation;}
declare module "software.bernie.geckolib.animation.keyframe.Keyframe" {
import {$List, $List$$Type} from "java.util.List"
import {$EasingType, $EasingType$$Type} from "software.bernie.geckolib.animation.EasingType"
import {$MathValue, $MathValue$$Type} from "software.bernie.geckolib.loading.math.MathValue"
import {$Record} from "java.lang.Record"

export class $Keyframe<T extends $MathValue> extends $Record {
constructor(length: double, startValue: T, endValue: T, easingType: $EasingType$$Type, easingArgs: $List$$Type<(T)>)
constructor(arg0: double, arg1: T, arg2: T, arg3: $EasingType$$Type)
constructor(arg0: double, arg1: T, arg2: T)

public "equals"(arg0: any): boolean
public "length"(): double
public "toString"(): StringJS
public "hashCode"(): integer
public "endValue"(): T
public "startValue"(): T
public "easingType"(): $EasingType
public "easingArgs"(): $List<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Keyframe$$Type<T> = ({"startValue"?: T, "easingArgs"?: $List$$Type<(T)>, "easingType"?: $EasingType$$Type, "endValue"?: T, "length"?: double}) | ([startValue?: T, easingArgs?: $List$$Type<(T)>, easingType?: $EasingType$$Type, endValue?: T, length?: double]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Keyframe$$Original<T> = $Keyframe<(T)>;}
declare module "software.bernie.geckolib.animation.EasingType" {
import {$AnimationPoint$$Type} from "software.bernie.geckolib.animation.keyframe.AnimationPoint"
import {$Double2DoubleFunction, $Double2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2DoubleFunction"
import {$Map} from "java.util.Map"
import {$JsonElement$$Type} from "com.google.gson.JsonElement"

export interface $EasingType$$Interface {

(arg0: double): $Double2DoubleFunction$$Type
}

export class $EasingType implements $EasingType$$Interface {
static readonly "EASE_OUT_QUAD": $EasingType
static readonly "EASE_OUT_SINE": $EasingType
static readonly "CATMULLROM": $EasingType
static readonly "EASE_OUT_ELASTIC": $EasingType
static readonly "EASE_OUT_QUART": $EasingType
static readonly "EASE_IN_OUT_QUAD": $EasingType
static readonly "EASE_IN_ELASTIC": $EasingType
static readonly "EASE_IN_CUBIC": $EasingType
static readonly "EASE_IN_QUINT": $EasingType
static readonly "EASE_IN_OUT_SINE": $EasingType
static readonly "EASE_IN_OUT_CIRC": $EasingType
static readonly "EASE_IN_EXPO": $EasingType
static readonly "EASE_OUT_CIRC": $EasingType
static readonly "EASE_IN_QUART": $EasingType
static readonly "EASE_OUT_CUBIC": $EasingType
static readonly "EASE_IN_OUT_BOUNCE": $EasingType
static readonly "EASE_IN_OUT_CUBIC": $EasingType
static readonly "EASE_IN_OUT_EXPO": $EasingType
static readonly "EASING_TYPES": $Map<(StringJS), ($EasingType)>
static readonly "EASE_OUT_BACK": $EasingType
static readonly "EASE_IN_BOUNCE": $EasingType
static readonly "EASE_IN_OUT_BACK": $EasingType
static readonly "STEP": $EasingType
static readonly "EASE_IN_OUT_QUINT": $EasingType
static readonly "EASE_IN_OUT_ELASTIC": $EasingType
static readonly "EASE_IN_BACK": $EasingType
static readonly "EASE_OUT_BOUNCE": $EasingType
static readonly "EASE_IN_SINE": $EasingType
static readonly "EASE_IN_QUAD": $EasingType
static readonly "EASE_OUT_EXPO": $EasingType
static readonly "EASE_OUT_QUINT": $EasingType
static readonly "LINEAR": $EasingType
static readonly "EASE_IN_OUT_QUART": $EasingType
static readonly "EASE_IN_CIRC": $EasingType

static "pow"(arg0: double): $Double2DoubleFunction
static "exp"(arg0: double): double
 "apply"(arg0: $AnimationPoint$$Type): double
 "apply"(arg0: $AnimationPoint$$Type, arg1: double, arg2: double): double
static "register"(arg0: StringJS, arg1: $EasingType$$Type): $EasingType
static "step"(arg0: double): $Double2DoubleFunction
static "back"(arg0: double): $Double2DoubleFunction
static "fromString"(arg0: StringJS): $EasingType
static "circle"(arg0: double): double
static "fromJson"(arg0: $JsonElement$$Type): $EasingType
static "bounce"(arg0: double): $Double2DoubleFunction
static "linear"(arg0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
static "linear"(arg0: double): double
 "buildTransformer"(arg0: double): $Double2DoubleFunction
static "lerpWithOverride"(arg0: $AnimationPoint$$Type, arg1: $EasingType$$Type): double
static "stepNonNegative"(arg0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
static "stepPositive"(arg0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
static "cubic"(arg0: double): double
static "elastic"(arg0: double): $Double2DoubleFunction
static "quadratic"(arg0: double): double
static "easeOut"(arg0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
static "easeInOut"(arg0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
static "catmullRom"(arg0: double): double
static "sine"(arg0: double): double
static "easeIn"(arg0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EasingType$$Type = ((arg0: double) => $Double2DoubleFunction$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EasingType$$Original = $EasingType;}
declare module "software.bernie.geckolib.animation.keyframe.event.data.ParticleKeyframeData" {
import {$KeyFrameData} from "software.bernie.geckolib.animation.keyframe.event.data.KeyFrameData"

export class $ParticleKeyframeData extends $KeyFrameData {
constructor(arg0: double, arg1: StringJS, arg2: StringJS, arg3: StringJS)

public "hashCode"(): integer
public "script"(): StringJS
public "getLocator"(): StringJS
public "getEffect"(): StringJS
get "locator"(): StringJS
get "effect"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleKeyframeData$$Type = ($ParticleKeyframeData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ParticleKeyframeData$$Original = $ParticleKeyframeData;}
declare module "software.bernie.geckolib.animation.state.BoneSnapshot" {
import {$GeoBone, $GeoBone$$Type} from "software.bernie.geckolib.cache.object.GeoBone"

export class $BoneSnapshot {
constructor(arg0: $GeoBone$$Type)

public "updateScale"(arg0: float, arg1: float, arg2: float): void
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "copy"(arg0: $BoneSnapshot$$Type): $BoneSnapshot
public "getRotY"(): float
public "getRotX"(): float
public "getOffsetZ"(): float
public "getScaleX"(): float
public "getRotZ"(): float
public "getScaleY"(): float
public "getScaleZ"(): float
public "updateRotation"(arg0: float, arg1: float, arg2: float): void
public "getOffsetX"(): float
public "getOffsetY"(): float
public "getBone"(): $GeoBone
public "startRotAnim"(): void
public "stopPosAnim"(arg0: double): void
public "stopScaleAnim"(arg0: double): void
public "startPosAnim"(): void
public "startScaleAnim"(): void
public "stopRotAnim"(arg0: double): void
public "updateOffset"(arg0: float, arg1: float, arg2: float): void
public "getLastResetScaleTick"(): double
public "isScaleAnimInProgress"(): boolean
public "getLastResetPositionTick"(): double
public "isPosAnimInProgress"(): boolean
public "getLastResetRotationTick"(): double
public "isRotAnimInProgress"(): boolean
get "rotY"(): float
get "rotX"(): float
get "offsetZ"(): float
get "scaleX"(): float
get "rotZ"(): float
get "scaleY"(): float
get "scaleZ"(): float
get "offsetX"(): float
get "offsetY"(): float
get "bone"(): $GeoBone
get "lastResetScaleTick"(): double
get "scaleAnimInProgress"(): boolean
get "lastResetPositionTick"(): double
get "posAnimInProgress"(): boolean
get "lastResetRotationTick"(): double
get "rotAnimInProgress"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoneSnapshot$$Type = ($BoneSnapshot);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BoneSnapshot$$Original = $BoneSnapshot;}
declare module "software.bernie.geckolib.animation.AnimationController$State" {
import {$Enum} from "java.lang.Enum"

export class $AnimationController$State extends $Enum<($AnimationController$State)> {
static readonly "PAUSED": $AnimationController$State
static readonly "RUNNING": $AnimationController$State
static readonly "STOPPED": $AnimationController$State
static readonly "TRANSITIONING": $AnimationController$State

public static "values"(): ($AnimationController$State)[]
public static "valueOf"(arg0: StringJS): $AnimationController$State
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationController$State$$Type = (("running") | ("transitioning") | ("paused") | ("stopped"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnimationController$State$$Original = $AnimationController$State;}
declare module "software.bernie.geckolib.animation.keyframe.event.data.CustomInstructionKeyframeData" {
import {$KeyFrameData} from "software.bernie.geckolib.animation.keyframe.event.data.KeyFrameData"

export class $CustomInstructionKeyframeData extends $KeyFrameData {
constructor(arg0: double, arg1: StringJS)

public "hashCode"(): integer
public "getInstructions"(): StringJS
get "instructions"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomInstructionKeyframeData$$Type = ($CustomInstructionKeyframeData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomInstructionKeyframeData$$Original = $CustomInstructionKeyframeData;}
declare module "software.bernie.geckolib.animation.AnimationState" {
import {$AnimationController, $AnimationController$$Type} from "software.bernie.geckolib.animation.AnimationController"
import {$Map} from "java.util.Map"
import {$RawAnimation$$Type} from "software.bernie.geckolib.animation.RawAnimation"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$DataTicket, $DataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.DataTicket"
import {$PlayState} from "software.bernie.geckolib.animation.PlayState"

export class $AnimationState<T extends $GeoAnimatable> {
 "animationTick": double

constructor(arg0: T, arg1: float, arg2: float, arg3: float, arg4: boolean)

public "getData"<D>(arg0: $DataTicket$$Type<(D)>): D
public "getController"(): $AnimationController<(T)>
public "getLimbSwingAmount"(): float
public "getPartialTick"(): float
public "isMoving"(): boolean
public "setData"<D>(arg0: $DataTicket$$Type<(D)>, arg1: D): void
public "setAndContinue"(arg0: $RawAnimation$$Type): $PlayState
public "setAnimation"(arg0: $RawAnimation$$Type): void
public "getExtraData"(): $Map<($DataTicket<(never)>), (never)>
public "getAnimatable"(): T
public "withController"(arg0: $AnimationController$$Type<(T)>): $AnimationState<(T)>
public "isCurrentAnimationStage"(arg0: StringJS): boolean
public "resetCurrentAnimation"(): void
public "getAnimationTick"(): double
public "setControllerSpeed"(arg0: float): void
public "getLimbSwing"(): float
public "isCurrentAnimation"(arg0: $RawAnimation$$Type): boolean
get "controller"(): $AnimationController<(T)>
get "limbSwingAmount"(): float
get "partialTick"(): float
get "moving"(): boolean
set "andContinue"(value: $RawAnimation$$Type)
set "animation"(value: $RawAnimation$$Type)
get "extraData"(): $Map<($DataTicket<(never)>), (never)>
get "animatable"(): T
set "controllerSpeed"(value: float)
get "limbSwing"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationState$$Type<T> = ($AnimationState<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnimationState$$Original<T> = $AnimationState<(T)>;}
declare module "software.bernie.geckolib.animation.keyframe.BoneAnimation" {
import {$Keyframe, $Keyframe$$Type} from "software.bernie.geckolib.animation.keyframe.Keyframe"
import {$KeyframeStack, $KeyframeStack$$Type} from "software.bernie.geckolib.animation.keyframe.KeyframeStack"
import {$MathValue, $MathValue$$Type} from "software.bernie.geckolib.loading.math.MathValue"
import {$Record} from "java.lang.Record"

export class $BoneAnimation extends $Record {
constructor(boneName: StringJS, rotationKeyFrames: $KeyframeStack$$Type<($Keyframe$$Type<($MathValue$$Type)>)>, positionKeyFrames: $KeyframeStack$$Type<($Keyframe$$Type<($MathValue$$Type)>)>, scaleKeyFrames: $KeyframeStack$$Type<($Keyframe$$Type<($MathValue$$Type)>)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "boneName"(): StringJS
public "rotationKeyFrames"(): $KeyframeStack<($Keyframe<($MathValue)>)>
public "scaleKeyFrames"(): $KeyframeStack<($Keyframe<($MathValue)>)>
public "positionKeyFrames"(): $KeyframeStack<($Keyframe<($MathValue)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoneAnimation$$Type = ({"scaleKeyFrames"?: $KeyframeStack$$Type<($Keyframe$$Type<($MathValue$$Type)>)>, "boneName"?: StringJS, "rotationKeyFrames"?: $KeyframeStack$$Type<($Keyframe$$Type<($MathValue$$Type)>)>, "positionKeyFrames"?: $KeyframeStack$$Type<($Keyframe$$Type<($MathValue$$Type)>)>}) | ([scaleKeyFrames?: $KeyframeStack$$Type<($Keyframe$$Type<($MathValue$$Type)>)>, boneName?: StringJS, rotationKeyFrames?: $KeyframeStack$$Type<($Keyframe$$Type<($MathValue$$Type)>)>, positionKeyFrames?: $KeyframeStack$$Type<($Keyframe$$Type<($MathValue$$Type)>)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BoneAnimation$$Original = $BoneAnimation;}
declare module "software.bernie.geckolib.animation.keyframe.event.data.SoundKeyframeData" {
import {$KeyFrameData} from "software.bernie.geckolib.animation.keyframe.event.data.KeyFrameData"

export class $SoundKeyframeData extends $KeyFrameData {
constructor(arg0: double, arg1: StringJS)

public "hashCode"(): integer
public "getSound"(): StringJS
get "sound"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundKeyframeData$$Type = ($SoundKeyframeData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoundKeyframeData$$Original = $SoundKeyframeData;}
declare module "software.bernie.geckolib.animation.Animation$Keyframes" {
import {$SoundKeyframeData, $SoundKeyframeData$$Type} from "software.bernie.geckolib.animation.keyframe.event.data.SoundKeyframeData"
import {$CustomInstructionKeyframeData, $CustomInstructionKeyframeData$$Type} from "software.bernie.geckolib.animation.keyframe.event.data.CustomInstructionKeyframeData"
import {$ParticleKeyframeData, $ParticleKeyframeData$$Type} from "software.bernie.geckolib.animation.keyframe.event.data.ParticleKeyframeData"
import {$Record} from "java.lang.Record"

export class $Animation$Keyframes extends $Record {
constructor(sounds: ($SoundKeyframeData$$Type)[], particles: ($ParticleKeyframeData$$Type)[], customInstructions: ($CustomInstructionKeyframeData$$Type)[])

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "particles"(): ($ParticleKeyframeData)[]
public "sounds"(): ($SoundKeyframeData)[]
public "customInstructions"(): ($CustomInstructionKeyframeData)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Animation$Keyframes$$Type = ({"particles"?: ($ParticleKeyframeData$$Type)[], "customInstructions"?: ($CustomInstructionKeyframeData$$Type)[], "sounds"?: ($SoundKeyframeData$$Type)[]}) | ([particles?: ($ParticleKeyframeData$$Type)[], customInstructions?: ($CustomInstructionKeyframeData$$Type)[], sounds?: ($SoundKeyframeData$$Type)[]]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Animation$Keyframes$$Original = $Animation$Keyframes;}
declare module "software.bernie.geckolib.animation.PlayState" {
import {$Enum} from "java.lang.Enum"

export class $PlayState extends $Enum<($PlayState)> {
static readonly "CONTINUE": $PlayState
static readonly "STOP": $PlayState

public static "values"(): ($PlayState)[]
public static "valueOf"(arg0: StringJS): $PlayState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayState$$Type = (("continue") | ("stop"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayState$$Original = $PlayState;}
declare module "software.bernie.geckolib.animation.AnimationController$CustomKeyframeHandler" {
import {$GeoAnimatable} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$CustomInstructionKeyframeEvent, $CustomInstructionKeyframeEvent$$Type} from "software.bernie.geckolib.animation.keyframe.event.CustomInstructionKeyframeEvent"

export interface $AnimationController$CustomKeyframeHandler$$Interface<A extends $GeoAnimatable> {

(arg0: $CustomInstructionKeyframeEvent<(A)>): void
}

export class $AnimationController$CustomKeyframeHandler<A extends $GeoAnimatable> implements $AnimationController$CustomKeyframeHandler$$Interface {
 "handle"(arg0: $CustomInstructionKeyframeEvent$$Type<(A)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationController$CustomKeyframeHandler$$Type<A> = ((arg0: $CustomInstructionKeyframeEvent<(A)>) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnimationController$CustomKeyframeHandler$$Original<A> = $AnimationController$CustomKeyframeHandler<(A)>;}
declare module "software.bernie.geckolib.animation.AnimationController$SoundKeyframeHandler" {
import {$SoundKeyframeEvent, $SoundKeyframeEvent$$Type} from "software.bernie.geckolib.animation.keyframe.event.SoundKeyframeEvent"
import {$GeoAnimatable} from "software.bernie.geckolib.animatable.GeoAnimatable"

export interface $AnimationController$SoundKeyframeHandler$$Interface<A extends $GeoAnimatable> {

(arg0: $SoundKeyframeEvent<(A)>): void
}

export class $AnimationController$SoundKeyframeHandler<A extends $GeoAnimatable> implements $AnimationController$SoundKeyframeHandler$$Interface {
 "handle"(arg0: $SoundKeyframeEvent$$Type<(A)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationController$SoundKeyframeHandler$$Type<A> = ((arg0: $SoundKeyframeEvent<(A)>) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnimationController$SoundKeyframeHandler$$Original<A> = $AnimationController$SoundKeyframeHandler<(A)>;}
declare module "software.bernie.geckolib.animation.AnimationProcessor$QueuedAnimation" {
import {$Animation$LoopType, $Animation$LoopType$$Type} from "software.bernie.geckolib.animation.Animation$LoopType"
import {$Animation, $Animation$$Type} from "software.bernie.geckolib.animation.Animation"
import {$Record} from "java.lang.Record"

export class $AnimationProcessor$QueuedAnimation extends $Record {
constructor(animation: $Animation$$Type, loopType: $Animation$LoopType$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "loopType"(): $Animation$LoopType
public "animation"(): $Animation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationProcessor$QueuedAnimation$$Type = ({"animation"?: $Animation$$Type, "loopType"?: $Animation$LoopType$$Type}) | ([animation?: $Animation$$Type, loopType?: $Animation$LoopType$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnimationProcessor$QueuedAnimation$$Original = $AnimationProcessor$QueuedAnimation;}
declare module "software.bernie.geckolib.animation.AnimatableManager" {
import {$AnimationController, $AnimationController$$Type} from "software.bernie.geckolib.animation.AnimationController"
import {$Map} from "java.util.Map"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$DataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.DataTicket"
import {$BoneSnapshot} from "software.bernie.geckolib.animation.state.BoneSnapshot"

export class $AnimatableManager<T extends $GeoAnimatable> {
constructor(arg0: $GeoAnimatable$$Type)

public "getData"<D>(arg0: $DataTicket$$Type<(D)>): D
public "getLastUpdateTime"(): double
public "removeController"(arg0: StringJS): void
public "setData"<D>(arg0: $DataTicket$$Type<(D)>, arg1: D): void
public "stopTriggeredAnimation"(arg0: StringJS, arg1: StringJS): void
public "stopTriggeredAnimation"(arg0: StringJS): void
public "tryTriggerAnimation"(arg0: StringJS): void
public "tryTriggerAnimation"(arg0: StringJS, arg1: StringJS): void
public "updatedAt"(arg0: double): void
public "startedAt"(arg0: double): void
public "getFirstTickTime"(): double
public "isFirstTick"(): boolean
public "getAnimationControllers"(): $Map<(StringJS), ($AnimationController<(T)>)>
public "getBoneSnapshotCollection"(): $Map<(StringJS), ($BoneSnapshot)>
public "addController"(arg0: $AnimationController$$Type): void
public "clearSnapshotCache"(): void
get "lastUpdateTime"(): double
get "firstTickTime"(): double
get "firstTick"(): boolean
get "animationControllers"(): $Map<(StringJS), ($AnimationController<(T)>)>
get "boneSnapshotCollection"(): $Map<(StringJS), ($BoneSnapshot)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatableManager$$Type<T> = ($AnimatableManager<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnimatableManager$$Original<T> = $AnimatableManager<(T)>;}
declare module "software.bernie.geckolib.animation.AnimationController$ParticleKeyframeHandler" {
import {$ParticleKeyframeEvent, $ParticleKeyframeEvent$$Type} from "software.bernie.geckolib.animation.keyframe.event.ParticleKeyframeEvent"
import {$GeoAnimatable} from "software.bernie.geckolib.animatable.GeoAnimatable"

export interface $AnimationController$ParticleKeyframeHandler$$Interface<A extends $GeoAnimatable> {

(arg0: $ParticleKeyframeEvent<(A)>): void
}

export class $AnimationController$ParticleKeyframeHandler<A extends $GeoAnimatable> implements $AnimationController$ParticleKeyframeHandler$$Interface {
 "handle"(arg0: $ParticleKeyframeEvent$$Type<(A)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationController$ParticleKeyframeHandler$$Type<A> = ((arg0: $ParticleKeyframeEvent<(A)>) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnimationController$ParticleKeyframeHandler$$Original<A> = $AnimationController$ParticleKeyframeHandler<(A)>;}
declare module "software.bernie.geckolib.animation.AnimationController$AnimationStateHandler" {
import {$GeoAnimatable} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$AnimationState, $AnimationState$$Type} from "software.bernie.geckolib.animation.AnimationState"
import {$PlayState, $PlayState$$Type} from "software.bernie.geckolib.animation.PlayState"

export interface $AnimationController$AnimationStateHandler$$Interface<A extends $GeoAnimatable> {

(arg0: $AnimationState<(A)>): $PlayState$$Type
}

export class $AnimationController$AnimationStateHandler<A extends $GeoAnimatable> implements $AnimationController$AnimationStateHandler$$Interface {
 "handle"(arg0: $AnimationState$$Type<(A)>): $PlayState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationController$AnimationStateHandler$$Type<A> = ((arg0: $AnimationState<(A)>) => $PlayState$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnimationController$AnimationStateHandler$$Original<A> = $AnimationController$AnimationStateHandler<(A)>;}
