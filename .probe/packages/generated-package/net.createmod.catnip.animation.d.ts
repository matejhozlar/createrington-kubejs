declare module "net.createmod.catnip.animation.LerpedFloat" {
import {$LerpedFloat$Chaser$$Type} from "net.createmod.catnip.animation.LerpedFloat$Chaser"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$LerpedFloat$Interpolator$$Type} from "net.createmod.catnip.animation.LerpedFloat$Interpolator"

export class $LerpedFloat {
constructor(arg0: $LerpedFloat$Interpolator$$Type)

public "getValue"(): float
public "getValue"(arg0: float): float
public "setValue"(arg0: double): void
public "readNBT"(arg0: $CompoundTag$$Type, arg1: boolean): void
public "writeNBT"(): $CompoundTag
public "tickChaser"(): void
public "chase"(arg0: double, arg1: double, arg2: $LerpedFloat$Chaser$$Type): $LerpedFloat
public "updateChaseSpeed"(arg0: double): boolean
public "forceNextSync"(): void
public "getChaseTarget"(): float
public "chaseTimed"(arg0: double, arg1: integer): $LerpedFloat
public static "linear"(): $LerpedFloat
public static "angular"(): $LerpedFloat
public "settled"(): boolean
public "updateChaseTarget"(arg0: float): void
public "startWithValue"(arg0: double): $LerpedFloat
public "disableSmartAngleChasing"(): $LerpedFloat
public "setValueNoUpdate"(arg0: double): void
get "value"(): float
set "value"(value: double)
get "chaseTarget"(): float
get "tled"(): boolean
set "valueNoUpdate"(value: double)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LerpedFloat$$Type = ($LerpedFloat);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LerpedFloat$$Original = $LerpedFloat;}
declare module "net.createmod.catnip.animation.LerpedFloat$Interpolator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LerpedFloat$Interpolator$$Interface {

(arg0: double, arg1: double, arg2: double): float
}

export class $LerpedFloat$Interpolator implements $LerpedFloat$Interpolator$$Interface {
 "interpolate"(arg0: double, arg1: double, arg2: double): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LerpedFloat$Interpolator$$Type = ((arg0: double, arg1: double, arg2: double) => float);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LerpedFloat$Interpolator$$Original = $LerpedFloat$Interpolator;}
declare module "net.createmod.catnip.animation.LerpedFloat$Chaser" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LerpedFloat$Chaser$$Interface {

(arg0: double, arg1: double, arg2: double): float
}

export class $LerpedFloat$Chaser implements $LerpedFloat$Chaser$$Interface {
static readonly "IDLE": $LerpedFloat$Chaser
static readonly "EXP": $LerpedFloat$Chaser
static readonly "LINEAR": $LerpedFloat$Chaser

static "exp"(arg0: double): $LerpedFloat$Chaser
 "chase"(arg0: double, arg1: double, arg2: double): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LerpedFloat$Chaser$$Type = ((arg0: double, arg1: double, arg2: double) => float);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LerpedFloat$Chaser$$Original = $LerpedFloat$Chaser;}
