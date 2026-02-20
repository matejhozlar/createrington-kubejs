declare module "com.mojang.datafixers.functions.PointFree" {
import {$DynamicOps} from "com.mojang.serialization.DynamicOps"
import {$Type} from "com.mojang.datafixers.types.Type"
import {$Function} from "java.util.function.Function"

export class $PointFree<T> {
constructor()

public "type"(): $Type<(T)>
public "toString"(): StringJS
public "toString"(arg0: integer): StringJS
public static "indent"(arg0: integer): StringJS
public "eval"(): $Function<($DynamicOps<(never)>), (T)>
public "evalCached"(): $Function<($DynamicOps<(never)>), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PointFree$$Type<T> = ($PointFree<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PointFree$$Original<T> = $PointFree<(T)>;}
declare module "com.mojang.datafixers.functions.PointFreeRule" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$PointFree, $PointFree$$Type} from "com.mojang.datafixers.functions.PointFree"

export interface $PointFreeRule$$Interface {

(arg0: $PointFree<(A)>): ($PointFree$$Type<(A)>)?
}

export class $PointFreeRule implements $PointFreeRule$$Interface {
static "seq"(...arg0: ($PointFreeRule$$Type)[]): $PointFreeRule
static "all"(arg0: $PointFreeRule$$Type): $PointFreeRule
static "choice"(...arg0: ($PointFreeRule$$Type)[]): $PointFreeRule
static "everywhere"(arg0: $PointFreeRule$$Type, arg1: $PointFreeRule$$Type): $PointFreeRule
static "one"(arg0: $PointFreeRule$$Type): $PointFreeRule
 "rewrite"<A>(arg0: $PointFree$$Type<(A)>): $Optional<($PointFree<(A)>)>
static "many"(arg0: $PointFreeRule$$Type): $PointFreeRule
static "once"(arg0: $PointFreeRule$$Type): $PointFreeRule
static "nop"(): $PointFreeRule
 "rewriteOrNop"<A>(arg0: $PointFree$$Type<(A)>): $PointFree<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PointFreeRule$$Type = ((arg0: $PointFree<(A)>) => ($PointFree$$Type<(A)>)?);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PointFreeRule$$Original = $PointFreeRule;}
