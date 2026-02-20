declare module "org.spongepowered.asm.mixin.injection.callback.CallbackInfo" {
import {$Cancellable$$Interface} from "org.spongepowered.asm.mixin.injection.callback.Cancellable"
import {$Type$$Type} from "org.objectweb.asm.Type"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $CallbackInfo implements $Cancellable$$Interface {
constructor(arg0: StringJS, arg1: boolean)

public "toString"(): StringJS
public "getId"(): StringJS
public "cancel"(): void
public "isCancelled"(): boolean
public static "getCallInfoClassName"(arg0: $Type$$Type): StringJS
public "isCancellable"(): boolean
get "id"(): StringJS
get "cancelled"(): boolean
get "cancellable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CallbackInfo$$Type = ($CallbackInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CallbackInfo$$Original = $CallbackInfo;}
declare module "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable" {
import {$CallbackInfo} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $CallbackInfoReturnable<R> extends $CallbackInfo {
constructor(arg0: StringJS, arg1: boolean, arg2: float)
constructor(arg0: StringJS, arg1: boolean, arg2: integer)
constructor(arg0: StringJS, arg1: boolean, arg2: long)
constructor(arg0: StringJS, arg1: boolean, arg2: short)
constructor(arg0: StringJS, arg1: boolean, arg2: boolean)
constructor(arg0: StringJS, arg1: boolean)
constructor(arg0: StringJS, arg1: boolean, arg2: R)
constructor(arg0: StringJS, arg1: boolean, arg2: byte)
constructor(arg0: StringJS, arg1: boolean, arg2: character)
constructor(arg0: StringJS, arg1: boolean, arg2: double)

public "getReturnValue"(): R
public "getReturnValueZ"(): boolean
public "getReturnValueC"(): character
public "getReturnValueF"(): float
public "getReturnValueD"(): double
public "setReturnValue"(arg0: R): void
public "getReturnValueS"(): short
public "getReturnValueI"(): integer
public "getReturnValueB"(): byte
public "getReturnValueJ"(): long
get "returnValue"(): R
get "returnValueZ"(): boolean
get "returnValueC"(): character
get "returnValueF"(): float
get "returnValueD"(): double
set "returnValue"(value: R)
get "returnValueS"(): short
get "returnValueI"(): integer
get "returnValueB"(): byte
get "returnValueJ"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CallbackInfoReturnable$$Type<R> = ($CallbackInfoReturnable<(R)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CallbackInfoReturnable$$Original<R> = $CallbackInfoReturnable<(R)>;}
declare module "org.spongepowered.asm.mixin.injection.callback.Cancellable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Cancellable$$Interface {
get "cancelled"(): boolean
get "cancellable"(): boolean
}

export class $Cancellable implements $Cancellable$$Interface {
 "cancel"(): void
 "isCancelled"(): boolean
 "isCancellable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Cancellable$$Type = ($Cancellable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Cancellable$$Original = $Cancellable;}
