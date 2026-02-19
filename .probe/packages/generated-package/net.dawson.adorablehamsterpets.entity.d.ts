declare module "net.dawson.adorablehamsterpets.entity.ShoulderLocation" {
import {$Enum} from "java.lang.Enum"

export class $ShoulderLocation extends $Enum<($ShoulderLocation)> {
static readonly "HEAD": $ShoulderLocation
static readonly "LEFT_SHOULDER": $ShoulderLocation
static readonly "RIGHT_SHOULDER": $ShoulderLocation

public static "values"(): ($ShoulderLocation)[]
public static "valueOf"(name: StringJS): $ShoulderLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShoulderLocation$$Type = (("right_shoulder") | ("left_shoulder") | ("head"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShoulderLocation$$Original = $ShoulderLocation;}
declare module "net.dawson.adorablehamsterpets.entity.client.feature.ShoulderHamsterState" {
import {$ShoulderAnimationState} from "net.dawson.adorablehamsterpets.entity.client.feature.ShoulderAnimationState"

export class $ShoulderHamsterState {
constructor()

public "tick"(isPlayerSprinting: boolean, isPlayerWalking: boolean): void
public "getCurrentState"(): $ShoulderAnimationState
get "currentState"(): $ShoulderAnimationState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShoulderHamsterState$$Type = ($ShoulderHamsterState);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShoulderHamsterState$$Original = $ShoulderHamsterState;}
declare module "net.dawson.adorablehamsterpets.entity.client.feature.ShoulderAnimationState" {
import {$Enum} from "java.lang.Enum"

export class $ShoulderAnimationState extends $Enum<($ShoulderAnimationState)> {
static readonly "SITTING": $ShoulderAnimationState
static readonly "LAYING_DOWN": $ShoulderAnimationState
static readonly "STANDING": $ShoulderAnimationState

public static "values"(): ($ShoulderAnimationState)[]
public static "valueOf"(name: StringJS): $ShoulderAnimationState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShoulderAnimationState$$Type = (("standing") | ("sitting") | ("laying_down"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShoulderAnimationState$$Original = $ShoulderAnimationState;}
