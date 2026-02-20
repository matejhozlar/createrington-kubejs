declare module "com.mojang.datafixers.util.Unit" {
import {$Enum} from "java.lang.Enum"

export class $Unit extends $Enum<($Unit)> {
static readonly "INSTANCE": $Unit

public "toString"(): StringJS
public static "values"(): ($Unit)[]
public static "valueOf"(arg0: StringJS): $Unit
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Unit$$Type = (("instance"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Unit$$Original = $Unit;}
declare module "com.mojang.datafixers.util.Either$Mu" {
import {$K1$$Interface} from "com.mojang.datafixers.kinds.K1"

export class $Either$Mu<R> implements $K1$$Interface {
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Either$Mu$$Type<R> = ($Either$Mu<(R)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Either$Mu$$Original<R> = $Either$Mu<(R)>;}
declare module "com.mojang.datafixers.util.Function13" {
import {$Function9} from "com.mojang.datafixers.util.Function9"
import {$Function8} from "com.mojang.datafixers.util.Function8"
import {$Function7} from "com.mojang.datafixers.util.Function7"
import {$Function6} from "com.mojang.datafixers.util.Function6"
import {$Function5} from "com.mojang.datafixers.util.Function5"
import {$Function4} from "com.mojang.datafixers.util.Function4"
import {$Function3} from "com.mojang.datafixers.util.Function3"
import {$Function11} from "com.mojang.datafixers.util.Function11"
import {$Function10} from "com.mojang.datafixers.util.Function10"
import {$BiFunction} from "java.util.function.BiFunction"
import {$Function12} from "com.mojang.datafixers.util.Function12"
import {$Function} from "java.util.function.Function"

export interface $Function13$$Interface<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R> {

(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13): R
}

export class $Function13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R> implements $Function13$$Interface {
 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13): R
 "curry"(): $Function<(T1), ($Function12<(T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function10<(T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (R)>)>
 "curry8"(): $Function8<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), ($Function5<(T9), (T10), (T11), (T12), (T13), (R)>)>
 "curry6"(): $Function6<(T1), (T2), (T3), (T4), (T5), (T6), ($Function7<(T7), (T8), (T9), (T10), (T11), (T12), (T13), (R)>)>
 "curry5"(): $Function5<(T1), (T2), (T3), (T4), (T5), ($Function8<(T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($Function9<(T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (R)>)>
 "curry7"(): $Function7<(T1), (T2), (T3), (T4), (T5), (T6), (T7), ($Function6<(T8), (T9), (T10), (T11), (T12), (T13), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function11<(T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (R)>)>
 "curry9"(): $Function9<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), ($Function4<(T10), (T11), (T12), (T13), (R)>)>
 "curry10"(): $Function10<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), ($Function3<(T11), (T12), (T13), (R)>)>
 "curry11"(): $Function11<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), ($BiFunction<(T12), (T13), (R)>)>
 "curry12"(): $Function12<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), ($Function<(T13), (R)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function13$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R> = ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13) => R);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Function13$$Original<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R> = $Function13<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (R)>;}
declare module "com.mojang.datafixers.util.Function12" {
import {$BiFunction} from "java.util.function.BiFunction"
import {$Function} from "java.util.function.Function"
import {$Function9} from "com.mojang.datafixers.util.Function9"
import {$Function8} from "com.mojang.datafixers.util.Function8"
import {$Function7} from "com.mojang.datafixers.util.Function7"
import {$Function6} from "com.mojang.datafixers.util.Function6"
import {$Function5} from "com.mojang.datafixers.util.Function5"
import {$Function4} from "com.mojang.datafixers.util.Function4"
import {$Function3} from "com.mojang.datafixers.util.Function3"
import {$Function11} from "com.mojang.datafixers.util.Function11"
import {$Function10} from "com.mojang.datafixers.util.Function10"

export interface $Function12$$Interface<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R> {

(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12): R
}

export class $Function12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R> implements $Function12$$Interface {
 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12): R
 "curry"(): $Function<(T1), ($Function11<(T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function9<(T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (R)>)>
 "curry8"(): $Function8<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), ($Function4<(T9), (T10), (T11), (T12), (R)>)>
 "curry6"(): $Function6<(T1), (T2), (T3), (T4), (T5), (T6), ($Function6<(T7), (T8), (T9), (T10), (T11), (T12), (R)>)>
 "curry5"(): $Function5<(T1), (T2), (T3), (T4), (T5), ($Function7<(T6), (T7), (T8), (T9), (T10), (T11), (T12), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($Function8<(T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (R)>)>
 "curry7"(): $Function7<(T1), (T2), (T3), (T4), (T5), (T6), (T7), ($Function5<(T8), (T9), (T10), (T11), (T12), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function10<(T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (R)>)>
 "curry9"(): $Function9<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), ($Function3<(T10), (T11), (T12), (R)>)>
 "curry10"(): $Function10<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), ($BiFunction<(T11), (T12), (R)>)>
 "curry11"(): $Function11<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), ($Function<(T12), (R)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function12$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R> = ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12) => R);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Function12$$Original<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R> = $Function12<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (R)>;}
declare module "com.mojang.datafixers.util.Function15" {
import {$Function9} from "com.mojang.datafixers.util.Function9"
import {$Function8} from "com.mojang.datafixers.util.Function8"
import {$Function7} from "com.mojang.datafixers.util.Function7"
import {$Function6} from "com.mojang.datafixers.util.Function6"
import {$Function5} from "com.mojang.datafixers.util.Function5"
import {$Function4} from "com.mojang.datafixers.util.Function4"
import {$Function3} from "com.mojang.datafixers.util.Function3"
import {$Function11} from "com.mojang.datafixers.util.Function11"
import {$Function10} from "com.mojang.datafixers.util.Function10"
import {$BiFunction} from "java.util.function.BiFunction"
import {$Function13} from "com.mojang.datafixers.util.Function13"
import {$Function12} from "com.mojang.datafixers.util.Function12"
import {$Function14} from "com.mojang.datafixers.util.Function14"
import {$Function} from "java.util.function.Function"

export interface $Function15$$Interface<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R> {

(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14, arg14: T15): R
}

export class $Function15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R> implements $Function15$$Interface {
 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14, arg14: T15): R
 "curry"(): $Function<(T1), ($Function14<(T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function12<(T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>
 "curry8"(): $Function8<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), ($Function7<(T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>
 "curry6"(): $Function6<(T1), (T2), (T3), (T4), (T5), (T6), ($Function9<(T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>
 "curry5"(): $Function5<(T1), (T2), (T3), (T4), (T5), ($Function10<(T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($Function11<(T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>
 "curry7"(): $Function7<(T1), (T2), (T3), (T4), (T5), (T6), (T7), ($Function8<(T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function13<(T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>
 "curry9"(): $Function9<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), ($Function6<(T10), (T11), (T12), (T13), (T14), (T15), (R)>)>
 "curry10"(): $Function10<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), ($Function5<(T11), (T12), (T13), (T14), (T15), (R)>)>
 "curry11"(): $Function11<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), ($Function4<(T12), (T13), (T14), (T15), (R)>)>
 "curry12"(): $Function12<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), ($Function3<(T13), (T14), (T15), (R)>)>
 "curry13"(): $Function13<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), ($BiFunction<(T14), (T15), (R)>)>
 "curry14"(): $Function14<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), ($Function<(T15), (R)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function15$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R> = ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14, arg14: T15) => R);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Function15$$Original<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R> = $Function15<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>;}
declare module "com.mojang.datafixers.util.Function14" {
import {$Function9} from "com.mojang.datafixers.util.Function9"
import {$Function8} from "com.mojang.datafixers.util.Function8"
import {$Function7} from "com.mojang.datafixers.util.Function7"
import {$Function6} from "com.mojang.datafixers.util.Function6"
import {$Function5} from "com.mojang.datafixers.util.Function5"
import {$Function4} from "com.mojang.datafixers.util.Function4"
import {$Function3} from "com.mojang.datafixers.util.Function3"
import {$Function11} from "com.mojang.datafixers.util.Function11"
import {$Function10} from "com.mojang.datafixers.util.Function10"
import {$BiFunction} from "java.util.function.BiFunction"
import {$Function13} from "com.mojang.datafixers.util.Function13"
import {$Function12} from "com.mojang.datafixers.util.Function12"
import {$Function} from "java.util.function.Function"

export interface $Function14$$Interface<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R> {

(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14): R
}

export class $Function14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R> implements $Function14$$Interface {
 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14): R
 "curry"(): $Function<(T1), ($Function13<(T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function11<(T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>)>
 "curry8"(): $Function8<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), ($Function6<(T9), (T10), (T11), (T12), (T13), (T14), (R)>)>
 "curry6"(): $Function6<(T1), (T2), (T3), (T4), (T5), (T6), ($Function8<(T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>)>
 "curry5"(): $Function5<(T1), (T2), (T3), (T4), (T5), ($Function9<(T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($Function10<(T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>)>
 "curry7"(): $Function7<(T1), (T2), (T3), (T4), (T5), (T6), (T7), ($Function7<(T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function12<(T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>)>
 "curry9"(): $Function9<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), ($Function5<(T10), (T11), (T12), (T13), (T14), (R)>)>
 "curry10"(): $Function10<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), ($Function4<(T11), (T12), (T13), (T14), (R)>)>
 "curry11"(): $Function11<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), ($Function3<(T12), (T13), (T14), (R)>)>
 "curry12"(): $Function12<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), ($BiFunction<(T13), (T14), (R)>)>
 "curry13"(): $Function13<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), ($Function<(T14), (R)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function14$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R> = ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14) => R);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Function14$$Original<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R> = $Function14<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>;}
declare module "com.mojang.datafixers.util.Function16" {
import {$Function9} from "com.mojang.datafixers.util.Function9"
import {$Function8} from "com.mojang.datafixers.util.Function8"
import {$Function7} from "com.mojang.datafixers.util.Function7"
import {$Function6} from "com.mojang.datafixers.util.Function6"
import {$Function5} from "com.mojang.datafixers.util.Function5"
import {$Function4} from "com.mojang.datafixers.util.Function4"
import {$Function3} from "com.mojang.datafixers.util.Function3"
import {$Function11} from "com.mojang.datafixers.util.Function11"
import {$Function10} from "com.mojang.datafixers.util.Function10"
import {$BiFunction} from "java.util.function.BiFunction"
import {$Function13} from "com.mojang.datafixers.util.Function13"
import {$Function12} from "com.mojang.datafixers.util.Function12"
import {$Function15} from "com.mojang.datafixers.util.Function15"
import {$Function14} from "com.mojang.datafixers.util.Function14"
import {$Function} from "java.util.function.Function"

export interface $Function16$$Interface<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R> {

(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14, arg14: T15, arg15: T16): R
}

export class $Function16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R> implements $Function16$$Interface {
 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14, arg14: T15, arg15: T16): R
 "curry"(): $Function<(T1), ($Function15<(T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function13<(T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>
 "curry8"(): $Function8<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), ($Function8<(T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>
 "curry6"(): $Function6<(T1), (T2), (T3), (T4), (T5), (T6), ($Function10<(T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>
 "curry5"(): $Function5<(T1), (T2), (T3), (T4), (T5), ($Function11<(T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($Function12<(T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>
 "curry7"(): $Function7<(T1), (T2), (T3), (T4), (T5), (T6), (T7), ($Function9<(T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function14<(T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>
 "curry9"(): $Function9<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), ($Function7<(T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>
 "curry10"(): $Function10<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), ($Function6<(T11), (T12), (T13), (T14), (T15), (T16), (R)>)>
 "curry11"(): $Function11<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), ($Function5<(T12), (T13), (T14), (T15), (T16), (R)>)>
 "curry12"(): $Function12<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), ($Function4<(T13), (T14), (T15), (T16), (R)>)>
 "curry13"(): $Function13<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), ($Function3<(T14), (T15), (T16), (R)>)>
 "curry14"(): $Function14<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), ($BiFunction<(T15), (T16), (R)>)>
 "curry15"(): $Function15<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), ($Function<(T16), (R)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function16$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R> = ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14, arg14: T15, arg15: T16) => R);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Function16$$Original<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R> = $Function16<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>;}
declare module "com.mojang.datafixers.util.Function11" {
import {$BiFunction} from "java.util.function.BiFunction"
import {$Function} from "java.util.function.Function"
import {$Function9} from "com.mojang.datafixers.util.Function9"
import {$Function8} from "com.mojang.datafixers.util.Function8"
import {$Function7} from "com.mojang.datafixers.util.Function7"
import {$Function6} from "com.mojang.datafixers.util.Function6"
import {$Function5} from "com.mojang.datafixers.util.Function5"
import {$Function4} from "com.mojang.datafixers.util.Function4"
import {$Function3} from "com.mojang.datafixers.util.Function3"
import {$Function10} from "com.mojang.datafixers.util.Function10"

export interface $Function11$$Interface<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R> {

(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11): R
}

export class $Function11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R> implements $Function11$$Interface {
 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11): R
 "curry"(): $Function<(T1), ($Function10<(T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function8<(T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (R)>)>
 "curry8"(): $Function8<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), ($Function3<(T9), (T10), (T11), (R)>)>
 "curry6"(): $Function6<(T1), (T2), (T3), (T4), (T5), (T6), ($Function5<(T7), (T8), (T9), (T10), (T11), (R)>)>
 "curry5"(): $Function5<(T1), (T2), (T3), (T4), (T5), ($Function6<(T6), (T7), (T8), (T9), (T10), (T11), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($Function7<(T5), (T6), (T7), (T8), (T9), (T10), (T11), (R)>)>
 "curry7"(): $Function7<(T1), (T2), (T3), (T4), (T5), (T6), (T7), ($Function4<(T8), (T9), (T10), (T11), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function9<(T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (R)>)>
 "curry9"(): $Function9<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), ($BiFunction<(T10), (T11), (R)>)>
 "curry10"(): $Function10<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), ($Function<(T11), (R)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function11$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R> = ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11) => R);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Function11$$Original<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R> = $Function11<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (R)>;}
declare module "com.mojang.datafixers.util.Function10" {
import {$BiFunction} from "java.util.function.BiFunction"
import {$Function} from "java.util.function.Function"
import {$Function9} from "com.mojang.datafixers.util.Function9"
import {$Function8} from "com.mojang.datafixers.util.Function8"
import {$Function7} from "com.mojang.datafixers.util.Function7"
import {$Function6} from "com.mojang.datafixers.util.Function6"
import {$Function5} from "com.mojang.datafixers.util.Function5"
import {$Function4} from "com.mojang.datafixers.util.Function4"
import {$Function3} from "com.mojang.datafixers.util.Function3"

export interface $Function10$$Interface<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R> {

(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10): R
}

export class $Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R> implements $Function10$$Interface {
 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10): R
 "curry"(): $Function<(T1), ($Function9<(T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function7<(T4), (T5), (T6), (T7), (T8), (T9), (T10), (R)>)>
 "curry8"(): $Function8<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), ($BiFunction<(T9), (T10), (R)>)>
 "curry6"(): $Function6<(T1), (T2), (T3), (T4), (T5), (T6), ($Function4<(T7), (T8), (T9), (T10), (R)>)>
 "curry5"(): $Function5<(T1), (T2), (T3), (T4), (T5), ($Function5<(T6), (T7), (T8), (T9), (T10), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($Function6<(T5), (T6), (T7), (T8), (T9), (T10), (R)>)>
 "curry7"(): $Function7<(T1), (T2), (T3), (T4), (T5), (T6), (T7), ($Function3<(T8), (T9), (T10), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function8<(T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (R)>)>
 "curry9"(): $Function9<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), ($Function<(T10), (R)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function10$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R> = ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10) => R);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Function10$$Original<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R> = $Function10<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (R)>;}
declare module "com.mojang.datafixers.util.Either" {
import {$App$$Type, $App$$Interface} from "com.mojang.datafixers.kinds.App"
import {$Optional} from "java.util.Optional"
import {$Function$$Type} from "java.util.function.Function"
import {$Either$Mu, $Either$Mu$$Type} from "com.mojang.datafixers.util.Either$Mu"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $Either<L, R> implements $App$$Interface<($Either$Mu<(R)>), (L)> {
public "map"<T>(arg0: $Function$$Type<(L), (T)>, arg1: $Function$$Type<(R), (T)>): T
public "flatMap"<L2>(arg0: $Function$$Type<(L), ($Either$$Type<(L2), (R)>)>): $Either<(L2), (R)>
public static "unwrap"<U>(arg0: $Either$$Type<(U), (U)>): U
public "left"(): $Optional<(L)>
public static "left"<L, R>(arg0: L): $Either<(L), (R)>
public static "right"<L, R>(arg0: R): $Either<(L), (R)>
public "right"(): $Optional<(R)>
public "swap"(): $Either<(R), (L)>
public static "unbox"<L, R>(arg0: $App$$Type<($Either$Mu$$Type<(R)>), (L)>): $Either<(L), (R)>
public "ifLeft"(arg0: $Consumer$$Type<(L)>): $Either<(L), (R)>
public "mapRight"<T>(arg0: $Function$$Type<(R), (T)>): $Either<(L), (T)>
public "ifRight"(arg0: $Consumer$$Type<(R)>): $Either<(L), (R)>
public "mapLeft"<T>(arg0: $Function$$Type<(L), (T)>): $Either<(T), (R)>
public "mapBoth"<C, D>(arg0: $Function$$Type<(L), (C)>, arg1: $Function$$Type<(R), (D)>): $Either<(C), (D)>
public "orThrow"(): L
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Either$$Type<L, R> = ($Either<(L), (R)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Either$$Original<L, R> = $Either<(L), (R)>;}
declare module "com.mojang.datafixers.util.Pair$Mu" {
import {$K1$$Interface} from "com.mojang.datafixers.kinds.K1"

export class $Pair$Mu<S> implements $K1$$Interface {
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pair$Mu$$Type<S> = ($Pair$Mu<(S)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Pair$Mu$$Original<S> = $Pair$Mu<(S)>;}
declare module "com.mojang.datafixers.util.Function9" {
import {$BiFunction} from "java.util.function.BiFunction"
import {$Function} from "java.util.function.Function"
import {$Function8} from "com.mojang.datafixers.util.Function8"
import {$Function7} from "com.mojang.datafixers.util.Function7"
import {$Function6} from "com.mojang.datafixers.util.Function6"
import {$Function5} from "com.mojang.datafixers.util.Function5"
import {$Function4} from "com.mojang.datafixers.util.Function4"
import {$Function3} from "com.mojang.datafixers.util.Function3"

export interface $Function9$$Interface<T1, T2, T3, T4, T5, T6, T7, T8, T9, R> {

(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9): R
}

export class $Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R> implements $Function9$$Interface {
 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9): R
 "curry"(): $Function<(T1), ($Function8<(T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function6<(T4), (T5), (T6), (T7), (T8), (T9), (R)>)>
 "curry8"(): $Function8<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), ($Function<(T9), (R)>)>
 "curry6"(): $Function6<(T1), (T2), (T3), (T4), (T5), (T6), ($Function3<(T7), (T8), (T9), (R)>)>
 "curry5"(): $Function5<(T1), (T2), (T3), (T4), (T5), ($Function4<(T6), (T7), (T8), (T9), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($Function5<(T5), (T6), (T7), (T8), (T9), (R)>)>
 "curry7"(): $Function7<(T1), (T2), (T3), (T4), (T5), (T6), (T7), ($BiFunction<(T8), (T9), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function7<(T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function9$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, R> = ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9) => R);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Function9$$Original<T1, T2, T3, T4, T5, T6, T7, T8, T9, R> = $Function9<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>;}
declare module "com.mojang.datafixers.util.Function8" {
import {$BiFunction} from "java.util.function.BiFunction"
import {$Function} from "java.util.function.Function"
import {$Function7} from "com.mojang.datafixers.util.Function7"
import {$Function6} from "com.mojang.datafixers.util.Function6"
import {$Function5} from "com.mojang.datafixers.util.Function5"
import {$Function4} from "com.mojang.datafixers.util.Function4"
import {$Function3} from "com.mojang.datafixers.util.Function3"

export interface $Function8$$Interface<T1, T2, T3, T4, T5, T6, T7, T8, R> {

(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8): R
}

export class $Function8<T1, T2, T3, T4, T5, T6, T7, T8, R> implements $Function8$$Interface {
 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8): R
 "curry"(): $Function<(T1), ($Function7<(T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function5<(T4), (T5), (T6), (T7), (T8), (R)>)>
 "curry6"(): $Function6<(T1), (T2), (T3), (T4), (T5), (T6), ($BiFunction<(T7), (T8), (R)>)>
 "curry5"(): $Function5<(T1), (T2), (T3), (T4), (T5), ($Function3<(T6), (T7), (T8), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($Function4<(T5), (T6), (T7), (T8), (R)>)>
 "curry7"(): $Function7<(T1), (T2), (T3), (T4), (T5), (T6), (T7), ($Function<(T8), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function6<(T3), (T4), (T5), (T6), (T7), (T8), (R)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function8$$Type<T1, T2, T3, T4, T5, T6, T7, T8, R> = ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8) => R);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Function8$$Original<T1, T2, T3, T4, T5, T6, T7, T8, R> = $Function8<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>;}
declare module "com.mojang.datafixers.util.Function7" {
import {$BiFunction} from "java.util.function.BiFunction"
import {$Function} from "java.util.function.Function"
import {$Function6} from "com.mojang.datafixers.util.Function6"
import {$Function5} from "com.mojang.datafixers.util.Function5"
import {$Function4} from "com.mojang.datafixers.util.Function4"
import {$Function3} from "com.mojang.datafixers.util.Function3"

export interface $Function7$$Interface<T1, T2, T3, T4, T5, T6, T7, R> {

(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7): R
}

export class $Function7<T1, T2, T3, T4, T5, T6, T7, R> implements $Function7$$Interface {
 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7): R
 "curry"(): $Function<(T1), ($Function6<(T2), (T3), (T4), (T5), (T6), (T7), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function4<(T4), (T5), (T6), (T7), (R)>)>
 "curry6"(): $Function6<(T1), (T2), (T3), (T4), (T5), (T6), ($Function<(T7), (R)>)>
 "curry5"(): $Function5<(T1), (T2), (T3), (T4), (T5), ($BiFunction<(T6), (T7), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($Function3<(T5), (T6), (T7), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function5<(T3), (T4), (T5), (T6), (T7), (R)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function7$$Type<T1, T2, T3, T4, T5, T6, T7, R> = ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7) => R);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Function7$$Original<T1, T2, T3, T4, T5, T6, T7, R> = $Function7<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (R)>;}
declare module "com.mojang.datafixers.util.Function6" {
import {$BiFunction} from "java.util.function.BiFunction"
import {$Function} from "java.util.function.Function"
import {$Function5} from "com.mojang.datafixers.util.Function5"
import {$Function4} from "com.mojang.datafixers.util.Function4"
import {$Function3} from "com.mojang.datafixers.util.Function3"

export interface $Function6$$Interface<T1, T2, T3, T4, T5, T6, R> {

(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6): R
}

export class $Function6<T1, T2, T3, T4, T5, T6, R> implements $Function6$$Interface {
 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6): R
 "curry"(): $Function<(T1), ($Function5<(T2), (T3), (T4), (T5), (T6), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function3<(T4), (T5), (T6), (R)>)>
 "curry5"(): $Function5<(T1), (T2), (T3), (T4), (T5), ($Function<(T6), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($BiFunction<(T5), (T6), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function4<(T3), (T4), (T5), (T6), (R)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function6$$Type<T1, T2, T3, T4, T5, T6, R> = ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6) => R);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Function6$$Original<T1, T2, T3, T4, T5, T6, R> = $Function6<(T1), (T2), (T3), (T4), (T5), (T6), (R)>;}
declare module "com.mojang.datafixers.util.Function5" {
import {$BiFunction} from "java.util.function.BiFunction"
import {$Function} from "java.util.function.Function"
import {$Function4} from "com.mojang.datafixers.util.Function4"
import {$Function3} from "com.mojang.datafixers.util.Function3"

export interface $Function5$$Interface<T1, T2, T3, T4, T5, R> {

(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5): R
}

export class $Function5<T1, T2, T3, T4, T5, R> implements $Function5$$Interface {
 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5): R
 "curry"(): $Function<(T1), ($Function4<(T2), (T3), (T4), (T5), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($BiFunction<(T4), (T5), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($Function<(T5), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function3<(T3), (T4), (T5), (R)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function5$$Type<T1, T2, T3, T4, T5, R> = ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5) => R);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Function5$$Original<T1, T2, T3, T4, T5, R> = $Function5<(T1), (T2), (T3), (T4), (T5), (R)>;}
declare module "com.mojang.datafixers.util.Function4" {
import {$BiFunction} from "java.util.function.BiFunction"
import {$Function} from "java.util.function.Function"
import {$Function3} from "com.mojang.datafixers.util.Function3"

export interface $Function4$$Interface<T1, T2, T3, T4, R> {

(arg0: T1, arg1: T2, arg2: T3, arg3: T4): R
}

export class $Function4<T1, T2, T3, T4, R> implements $Function4$$Interface {
 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4): R
 "curry"(): $Function<(T1), ($Function3<(T2), (T3), (T4), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function<(T4), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($BiFunction<(T3), (T4), (R)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function4$$Type<T1, T2, T3, T4, R> = ((arg0: T1, arg1: T2, arg2: T3, arg3: T4) => R);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Function4$$Original<T1, T2, T3, T4, R> = $Function4<(T1), (T2), (T3), (T4), (R)>;}
declare module "com.mojang.datafixers.util.Function3" {
import {$BiFunction} from "java.util.function.BiFunction"
import {$Function} from "java.util.function.Function"

export interface $Function3$$Interface<T1, T2, T3, R> {

(arg0: T1, arg1: T2, arg2: T3): R
}

export class $Function3<T1, T2, T3, R> implements $Function3$$Interface {
 "apply"(arg0: T1, arg1: T2, arg2: T3): R
 "curry"(): $Function<(T1), ($BiFunction<(T2), (T3), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function<(T3), (R)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function3$$Type<T1, T2, T3, R> = ((arg0: T1, arg1: T2, arg2: T3) => R);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Function3$$Original<T1, T2, T3, R> = $Function3<(T1), (T2), (T3), (R)>;}
declare module "com.mojang.datafixers.util.Pair" {
import {$App$$Type, $App$$Interface} from "com.mojang.datafixers.kinds.App"
import {$Map} from "java.util.Map"
import {$Function$$Type} from "java.util.function.Function"
import {$Collector} from "java.util.stream.Collector"
import {$Pair$Mu, $Pair$Mu$$Type} from "com.mojang.datafixers.util.Pair$Mu"

export class $Pair<F, S> implements $App$$Interface<($Pair$Mu<(S)>), (F)> {
constructor(arg0: F, arg1: S)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"<F, S>(arg0: F, arg1: S): $Pair<(F), (S)>
public static "toMap"<F, S>(): $Collector<($Pair<(F), (S)>), (never), ($Map<(F), (S)>)>
public "getFirst"(): F
public "swap"(): $Pair<(S), (F)>
public static "unbox"<F, S>(arg0: $App$$Type<($Pair$Mu$$Type<(S)>), (F)>): $Pair<(F), (S)>
public "getSecond"(): S
public "mapFirst"<F2>(arg0: $Function$$Type<(F), (F2)>): $Pair<(F2), (S)>
public "mapSecond"<S2>(arg0: $Function$$Type<(S), (S2)>): $Pair<(F), (S2)>
get "first"(): F
get "second"(): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pair$$Type<F, S> = ($Pair<(F), (S)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Pair$$Original<F, S> = $Pair<(F), (S)>;}
