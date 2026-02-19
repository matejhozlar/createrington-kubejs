declare module "com.mojang.datafixers.kinds.App2" {
import {$K2} from "com.mojang.datafixers.kinds.K2"

export interface $App2$$Interface<F extends $K2, A, B> {
}

export class $App2<F extends $K2, A, B> implements $App2$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $App2$$Type<F, A, B> = ($App2<(F), (A), (B)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $App2$$Original<F, A, B> = $App2<(F), (A), (B)>;}
declare module "com.mojang.datafixers.kinds.App" {
import {$K1} from "com.mojang.datafixers.kinds.K1"

export interface $App$$Interface<F extends $K1, A> {
}

export class $App<F extends $K1, A> implements $App$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $App$$Type<F, A> = ($App<(F), (A)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $App$$Original<F, A> = $App<(F), (A)>;}
declare module "com.mojang.datafixers.kinds.Applicative$Mu" {
import {$Functor$Mu$$Interface} from "com.mojang.datafixers.kinds.Functor$Mu"

export interface $Applicative$Mu$$Interface extends $Functor$Mu$$Interface {
}

export class $Applicative$Mu implements $Applicative$Mu$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Applicative$Mu$$Type = ($Applicative$Mu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Applicative$Mu$$Original = $Applicative$Mu;}
declare module "com.mojang.datafixers.kinds.Applicative" {
import {$Function9, $Function9$$Type} from "com.mojang.datafixers.util.Function9"
import {$Function8, $Function8$$Type} from "com.mojang.datafixers.util.Function8"
import {$Function7, $Function7$$Type} from "com.mojang.datafixers.util.Function7"
import {$Function6, $Function6$$Type} from "com.mojang.datafixers.util.Function6"
import {$Function5, $Function5$$Type} from "com.mojang.datafixers.util.Function5"
import {$Function4, $Function4$$Type} from "com.mojang.datafixers.util.Function4"
import {$Function3, $Function3$$Type} from "com.mojang.datafixers.util.Function3"
import {$Function11$$Type} from "com.mojang.datafixers.util.Function11"
import {$Function10$$Type} from "com.mojang.datafixers.util.Function10"
import {$Products$P10} from "com.mojang.datafixers.Products$P10"
import {$Products$P3} from "com.mojang.datafixers.Products$P3"
import {$Products$P4} from "com.mojang.datafixers.Products$P4"
import {$Products$P11} from "com.mojang.datafixers.Products$P11"
import {$Products$P1} from "com.mojang.datafixers.Products$P1"
import {$Products$P2} from "com.mojang.datafixers.Products$P2"
import {$Products$P7} from "com.mojang.datafixers.Products$P7"
import {$Products$P8} from "com.mojang.datafixers.Products$P8"
import {$Products$P5} from "com.mojang.datafixers.Products$P5"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Products$P6} from "com.mojang.datafixers.Products$P6"
import {$Products$P16} from "com.mojang.datafixers.Products$P16"
import {$Products$P14} from "com.mojang.datafixers.Products$P14"
import {$Products$P15} from "com.mojang.datafixers.Products$P15"
import {$Products$P12} from "com.mojang.datafixers.Products$P12"
import {$Products$P13} from "com.mojang.datafixers.Products$P13"
import {$Applicative$Mu} from "com.mojang.datafixers.kinds.Applicative$Mu"
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$Products$P9} from "com.mojang.datafixers.Products$P9"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Function13$$Type} from "com.mojang.datafixers.util.Function13"
import {$Function12$$Type} from "com.mojang.datafixers.util.Function12"
import {$Function15$$Type} from "com.mojang.datafixers.util.Function15"
import {$Function14$$Type} from "com.mojang.datafixers.util.Function14"
import {$Function16$$Type} from "com.mojang.datafixers.util.Function16"
import {$K1} from "com.mojang.datafixers.kinds.K1"
import {$Functor$$Interface} from "com.mojang.datafixers.kinds.Functor"

export interface $Applicative$$Interface<F extends $K1, Mu extends $Applicative$Mu> extends $Functor$$Interface<(F), (Mu)> {
}

export class $Applicative<F extends $K1, Mu extends $Applicative$Mu> implements $Applicative$$Interface {
static "unbox"<F extends $K1, Mu extends $Applicative$Mu>(arg0: $App$$Type<(Mu), (F)>): $Applicative<(F), (Mu)>
 "point"<A>(arg0: A): $App<(F), (A)>
 "ap"<A, R>(arg0: $App$$Type<(F), ($Function$$Type<(A), (R)>)>, arg1: $App$$Type<(F), (A)>): $App<(F), (R)>
 "ap"<A, R>(arg0: $Function$$Type<(A), (R)>, arg1: $App$$Type<(F), (A)>): $App<(F), (R)>
 "apply2"<A, B, R>(arg0: $BiFunction$$Type<(A), (B), (R)>, arg1: $App$$Type<(F), (A)>, arg2: $App$$Type<(F), (B)>): $App<(F), (R)>
 "ap2"<A, B, R>(arg0: $App$$Type<(F), ($BiFunction$$Type<(A), (B), (R)>)>, arg1: $App$$Type<(F), (A)>, arg2: $App$$Type<(F), (B)>): $App<(F), (R)>
 "apply3"<T1, T2, T3, R>(arg0: $Function3$$Type<(T1), (T2), (T3), (R)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>): $App<(F), (R)>
 "ap16"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>(arg0: $App$$Type<(F), ($Function16$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>, arg6: $App$$Type<(F), (T6)>, arg7: $App$$Type<(F), (T7)>, arg8: $App$$Type<(F), (T8)>, arg9: $App$$Type<(F), (T9)>, arg10: $App$$Type<(F), (T10)>, arg11: $App$$Type<(F), (T11)>, arg12: $App$$Type<(F), (T12)>, arg13: $App$$Type<(F), (T13)>, arg14: $App$$Type<(F), (T14)>, arg15: $App$$Type<(F), (T15)>, arg16: $App$$Type<(F), (T16)>): $App<(F), (R)>
 "ap12"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>(arg0: $App$$Type<(F), ($Function12$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (R)>)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>, arg6: $App$$Type<(F), (T6)>, arg7: $App$$Type<(F), (T7)>, arg8: $App$$Type<(F), (T8)>, arg9: $App$$Type<(F), (T9)>, arg10: $App$$Type<(F), (T10)>, arg11: $App$$Type<(F), (T11)>, arg12: $App$$Type<(F), (T12)>): $App<(F), (R)>
 "lift3"<T1, T2, T3, R>(arg0: $App$$Type<(F), ($Function3$$Type<(T1), (T2), (T3), (R)>)>): $Function3<($App<(F), (T1)>), ($App<(F), (T2)>), ($App<(F), (T3)>), ($App<(F), (R)>)>
 "lift6"<T1, T2, T3, T4, T5, T6, R>(arg0: $App$$Type<(F), ($Function6$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (R)>)>): $Function6<($App<(F), (T1)>), ($App<(F), (T2)>), ($App<(F), (T3)>), ($App<(F), (T4)>), ($App<(F), (T5)>), ($App<(F), (T6)>), ($App<(F), (R)>)>
 "ap7"<T1, T2, T3, T4, T5, T6, T7, R>(arg0: $App$$Type<(F), ($Function7$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (R)>)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>, arg6: $App$$Type<(F), (T6)>, arg7: $App$$Type<(F), (T7)>): $App<(F), (R)>
 "ap4"<T1, T2, T3, T4, R>(arg0: $App$$Type<(F), ($Function4$$Type<(T1), (T2), (T3), (T4), (R)>)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>): $App<(F), (R)>
 "lift7"<T1, T2, T3, T4, T5, T6, T7, R>(arg0: $App$$Type<(F), ($Function7$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (R)>)>): $Function7<($App<(F), (T1)>), ($App<(F), (T2)>), ($App<(F), (T3)>), ($App<(F), (T4)>), ($App<(F), (T5)>), ($App<(F), (T6)>), ($App<(F), (T7)>), ($App<(F), (R)>)>
 "lift8"<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: $App$$Type<(F), ($Function8$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>)>): $Function8<($App<(F), (T1)>), ($App<(F), (T2)>), ($App<(F), (T3)>), ($App<(F), (T4)>), ($App<(F), (T5)>), ($App<(F), (T6)>), ($App<(F), (T7)>), ($App<(F), (T8)>), ($App<(F), (R)>)>
 "ap10"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>(arg0: $App$$Type<(F), ($Function10$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (R)>)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>, arg6: $App$$Type<(F), (T6)>, arg7: $App$$Type<(F), (T7)>, arg8: $App$$Type<(F), (T8)>, arg9: $App$$Type<(F), (T9)>, arg10: $App$$Type<(F), (T10)>): $App<(F), (R)>
 "lift2"<A, B, R>(arg0: $App$$Type<(F), ($BiFunction$$Type<(A), (B), (R)>)>): $BiFunction<($App<(F), (A)>), ($App<(F), (B)>), ($App<(F), (R)>)>
 "lift1"<A, R>(arg0: $App$$Type<(F), ($Function$$Type<(A), (R)>)>): $Function<($App<(F), (A)>), ($App<(F), (R)>)>
 "ap15"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>(arg0: $App$$Type<(F), ($Function15$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>, arg6: $App$$Type<(F), (T6)>, arg7: $App$$Type<(F), (T7)>, arg8: $App$$Type<(F), (T8)>, arg9: $App$$Type<(F), (T9)>, arg10: $App$$Type<(F), (T10)>, arg11: $App$$Type<(F), (T11)>, arg12: $App$$Type<(F), (T12)>, arg13: $App$$Type<(F), (T13)>, arg14: $App$$Type<(F), (T14)>, arg15: $App$$Type<(F), (T15)>): $App<(F), (R)>
 "ap6"<T1, T2, T3, T4, T5, T6, R>(arg0: $App$$Type<(F), ($Function6$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (R)>)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>, arg6: $App$$Type<(F), (T6)>): $App<(F), (R)>
 "ap13"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>(arg0: $App$$Type<(F), ($Function13$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (R)>)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>, arg6: $App$$Type<(F), (T6)>, arg7: $App$$Type<(F), (T7)>, arg8: $App$$Type<(F), (T8)>, arg9: $App$$Type<(F), (T9)>, arg10: $App$$Type<(F), (T10)>, arg11: $App$$Type<(F), (T11)>, arg12: $App$$Type<(F), (T12)>, arg13: $App$$Type<(F), (T13)>): $App<(F), (R)>
 "lift4"<T1, T2, T3, T4, R>(arg0: $App$$Type<(F), ($Function4$$Type<(T1), (T2), (T3), (T4), (R)>)>): $Function4<($App<(F), (T1)>), ($App<(F), (T2)>), ($App<(F), (T3)>), ($App<(F), (T4)>), ($App<(F), (R)>)>
 "ap5"<T1, T2, T3, T4, T5, R>(arg0: $App$$Type<(F), ($Function5$$Type<(T1), (T2), (T3), (T4), (T5), (R)>)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>): $App<(F), (R)>
 "ap8"<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: $App$$Type<(F), ($Function8$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>, arg6: $App$$Type<(F), (T6)>, arg7: $App$$Type<(F), (T7)>, arg8: $App$$Type<(F), (T8)>): $App<(F), (R)>
 "lift9"<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: $App$$Type<(F), ($Function9$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>)>): $Function9<($App<(F), (T1)>), ($App<(F), (T2)>), ($App<(F), (T3)>), ($App<(F), (T4)>), ($App<(F), (T5)>), ($App<(F), (T6)>), ($App<(F), (T7)>), ($App<(F), (T8)>), ($App<(F), (T9)>), ($App<(F), (R)>)>
 "ap3"<T1, T2, T3, R>(arg0: $App$$Type<(F), ($Function3$$Type<(T1), (T2), (T3), (R)>)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>): $App<(F), (R)>
 "ap9"<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: $App$$Type<(F), ($Function9$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>, arg6: $App$$Type<(F), (T6)>, arg7: $App$$Type<(F), (T7)>, arg8: $App$$Type<(F), (T8)>, arg9: $App$$Type<(F), (T9)>): $App<(F), (R)>
 "ap11"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>(arg0: $App$$Type<(F), ($Function11$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (R)>)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>, arg6: $App$$Type<(F), (T6)>, arg7: $App$$Type<(F), (T7)>, arg8: $App$$Type<(F), (T8)>, arg9: $App$$Type<(F), (T9)>, arg10: $App$$Type<(F), (T10)>, arg11: $App$$Type<(F), (T11)>): $App<(F), (R)>
 "lift5"<T1, T2, T3, T4, T5, R>(arg0: $App$$Type<(F), ($Function5$$Type<(T1), (T2), (T3), (T4), (T5), (R)>)>): $Function5<($App<(F), (T1)>), ($App<(F), (T2)>), ($App<(F), (T3)>), ($App<(F), (T4)>), ($App<(F), (T5)>), ($App<(F), (R)>)>
 "ap14"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>(arg0: $App$$Type<(F), ($Function14$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>, arg6: $App$$Type<(F), (T6)>, arg7: $App$$Type<(F), (T7)>, arg8: $App$$Type<(F), (T8)>, arg9: $App$$Type<(F), (T9)>, arg10: $App$$Type<(F), (T10)>, arg11: $App$$Type<(F), (T11)>, arg12: $App$$Type<(F), (T12)>, arg13: $App$$Type<(F), (T13)>, arg14: $App$$Type<(F), (T14)>): $App<(F), (R)>
 "apply9"<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: $Function9$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>, arg6: $App$$Type<(F), (T6)>, arg7: $App$$Type<(F), (T7)>, arg8: $App$$Type<(F), (T8)>, arg9: $App$$Type<(F), (T9)>): $App<(F), (R)>
 "apply4"<T1, T2, T3, T4, R>(arg0: $Function4$$Type<(T1), (T2), (T3), (T4), (R)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>): $App<(F), (R)>
 "apply6"<T1, T2, T3, T4, T5, T6, R>(arg0: $Function6$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (R)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>, arg6: $App$$Type<(F), (T6)>): $App<(F), (R)>
 "apply7"<T1, T2, T3, T4, T5, T6, T7, R>(arg0: $Function7$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (R)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>, arg6: $App$$Type<(F), (T6)>, arg7: $App$$Type<(F), (T7)>): $App<(F), (R)>
 "apply5"<T1, T2, T3, T4, T5, R>(arg0: $Function5$$Type<(T1), (T2), (T3), (T4), (T5), (R)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>): $App<(F), (R)>
 "apply8"<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: $Function8$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>, arg1: $App$$Type<(F), (T1)>, arg2: $App$$Type<(F), (T2)>, arg3: $App$$Type<(F), (T3)>, arg4: $App$$Type<(F), (T4)>, arg5: $App$$Type<(F), (T5)>, arg6: $App$$Type<(F), (T6)>, arg7: $App$$Type<(F), (T7)>, arg8: $App$$Type<(F), (T8)>): $App<(F), (R)>
 "map"<T, R>(arg0: $Function$$Type<(T), (R)>, arg1: $App$$Type<(F), (T)>): $App<(F), (R)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>): $Products$P11<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>): $Products$P10<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>): $Products$P9<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>, arg12: $App$$Type<(F), (T13)>, arg13: $App$$Type<(F), (T14)>, arg14: $App$$Type<(F), (T15)>, arg15: $App$$Type<(F), (T16)>): $Products$P16<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>, arg12: $App$$Type<(F), (T13)>, arg13: $App$$Type<(F), (T14)>, arg14: $App$$Type<(F), (T15)>): $Products$P15<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>, arg12: $App$$Type<(F), (T13)>, arg13: $App$$Type<(F), (T14)>): $Products$P14<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>, arg12: $App$$Type<(F), (T13)>): $Products$P13<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>): $Products$P12<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12)>
 "group"<T1, T2, T3>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>): $Products$P3<(F), (T1), (T2), (T3)>
 "group"<T1, T2>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>): $Products$P2<(F), (T1), (T2)>
 "group"<T1>(arg0: $App$$Type<(F), (T1)>): $Products$P1<(F), (T1)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>): $Products$P8<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>
 "group"<T1, T2, T3, T4, T5, T6, T7>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>): $Products$P7<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7)>
 "group"<T1, T2, T3, T4, T5, T6>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>): $Products$P6<(F), (T1), (T2), (T3), (T4), (T5), (T6)>
 "group"<T1, T2, T3, T4, T5>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>): $Products$P5<(F), (T1), (T2), (T3), (T4), (T5)>
 "group"<T1, T2, T3, T4>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>): $Products$P4<(F), (T1), (T2), (T3), (T4)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Applicative$$Type<F, Mu> = ($Applicative<(F), (Mu)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Applicative$$Original<F, Mu> = $Applicative<(F), (Mu)>;}
declare module "com.mojang.datafixers.kinds.Functor" {
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$Products$P9} from "com.mojang.datafixers.Products$P9"
import {$Products$P10} from "com.mojang.datafixers.Products$P10"
import {$Products$P3} from "com.mojang.datafixers.Products$P3"
import {$Products$P11} from "com.mojang.datafixers.Products$P11"
import {$Products$P4} from "com.mojang.datafixers.Products$P4"
import {$Products$P1} from "com.mojang.datafixers.Products$P1"
import {$Functor$Mu} from "com.mojang.datafixers.kinds.Functor$Mu"
import {$Products$P2} from "com.mojang.datafixers.Products$P2"
import {$Products$P7} from "com.mojang.datafixers.Products$P7"
import {$Products$P8} from "com.mojang.datafixers.Products$P8"
import {$Products$P5} from "com.mojang.datafixers.Products$P5"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Products$P6} from "com.mojang.datafixers.Products$P6"
import {$K1} from "com.mojang.datafixers.kinds.K1"
import {$Products$P16} from "com.mojang.datafixers.Products$P16"
import {$Kind1$$Interface} from "com.mojang.datafixers.kinds.Kind1"
import {$Products$P14} from "com.mojang.datafixers.Products$P14"
import {$Products$P15} from "com.mojang.datafixers.Products$P15"
import {$Products$P12} from "com.mojang.datafixers.Products$P12"
import {$Products$P13} from "com.mojang.datafixers.Products$P13"

export interface $Functor$$Interface<F extends $K1, Mu extends $Functor$Mu> extends $Kind1$$Interface<(F), (Mu)> {

(arg0: $Function<(T), (R)>, arg1: $App<(F), (T)>): $App$$Type<(F), (R)>
}

export class $Functor<F extends $K1, Mu extends $Functor$Mu> implements $Functor$$Interface {
 "map"<T, R>(arg0: $Function$$Type<(T), (R)>, arg1: $App$$Type<(F), (T)>): $App<(F), (R)>
static "unbox"<F extends $K1, Mu extends $Functor$Mu>(arg0: $App$$Type<(Mu), (F)>): $Functor<(F), (Mu)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>): $Products$P11<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>): $Products$P10<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>): $Products$P9<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>, arg12: $App$$Type<(F), (T13)>, arg13: $App$$Type<(F), (T14)>, arg14: $App$$Type<(F), (T15)>, arg15: $App$$Type<(F), (T16)>): $Products$P16<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>, arg12: $App$$Type<(F), (T13)>, arg13: $App$$Type<(F), (T14)>, arg14: $App$$Type<(F), (T15)>): $Products$P15<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>, arg12: $App$$Type<(F), (T13)>, arg13: $App$$Type<(F), (T14)>): $Products$P14<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>, arg12: $App$$Type<(F), (T13)>): $Products$P13<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>): $Products$P12<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12)>
 "group"<T1, T2, T3>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>): $Products$P3<(F), (T1), (T2), (T3)>
 "group"<T1, T2>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>): $Products$P2<(F), (T1), (T2)>
 "group"<T1>(arg0: $App$$Type<(F), (T1)>): $Products$P1<(F), (T1)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>): $Products$P8<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>
 "group"<T1, T2, T3, T4, T5, T6, T7>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>): $Products$P7<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7)>
 "group"<T1, T2, T3, T4, T5, T6>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>): $Products$P6<(F), (T1), (T2), (T3), (T4), (T5), (T6)>
 "group"<T1, T2, T3, T4, T5>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>): $Products$P5<(F), (T1), (T2), (T3), (T4), (T5)>
 "group"<T1, T2, T3, T4>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>): $Products$P4<(F), (T1), (T2), (T3), (T4)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Functor$$Type<F, Mu> = ((arg0: $Function<(T), (R)>, arg1: $App<(F), (T)>) => $App$$Type<(F), (R)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Functor$$Original<F, Mu> = $Functor<(F), (Mu)>;}
declare module "com.mojang.datafixers.kinds.Kind1$Mu" {
import {$K1$$Interface} from "com.mojang.datafixers.kinds.K1"

export interface $Kind1$Mu$$Interface extends $K1$$Interface {
}

export class $Kind1$Mu implements $Kind1$Mu$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Kind1$Mu$$Type = ($Kind1$Mu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Kind1$Mu$$Original = $Kind1$Mu;}
declare module "com.mojang.datafixers.kinds.Functor$Mu" {
import {$Kind1$Mu$$Interface} from "com.mojang.datafixers.kinds.Kind1$Mu"

export interface $Functor$Mu$$Interface extends $Kind1$Mu$$Interface {
}

export class $Functor$Mu implements $Functor$Mu$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Functor$Mu$$Type = ($Functor$Mu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Functor$Mu$$Original = $Functor$Mu;}
declare module "com.mojang.datafixers.kinds.Kind1" {
import {$App$$Type, $App$$Interface} from "com.mojang.datafixers.kinds.App"
import {$Kind1$Mu} from "com.mojang.datafixers.kinds.Kind1$Mu"
import {$Products$P9} from "com.mojang.datafixers.Products$P9"
import {$Products$P10} from "com.mojang.datafixers.Products$P10"
import {$Products$P3} from "com.mojang.datafixers.Products$P3"
import {$Products$P11} from "com.mojang.datafixers.Products$P11"
import {$Products$P4} from "com.mojang.datafixers.Products$P4"
import {$Products$P1} from "com.mojang.datafixers.Products$P1"
import {$Products$P2} from "com.mojang.datafixers.Products$P2"
import {$Products$P7} from "com.mojang.datafixers.Products$P7"
import {$Products$P8} from "com.mojang.datafixers.Products$P8"
import {$Products$P5} from "com.mojang.datafixers.Products$P5"
import {$Products$P6} from "com.mojang.datafixers.Products$P6"
import {$K1} from "com.mojang.datafixers.kinds.K1"
import {$Products$P16} from "com.mojang.datafixers.Products$P16"
import {$Products$P14} from "com.mojang.datafixers.Products$P14"
import {$Products$P15} from "com.mojang.datafixers.Products$P15"
import {$Products$P12} from "com.mojang.datafixers.Products$P12"
import {$Products$P13} from "com.mojang.datafixers.Products$P13"

export interface $Kind1$$Interface<F extends $K1, Mu extends $Kind1$Mu> extends $App$$Interface<(Mu), (F)> {
}

export class $Kind1<F extends $K1, Mu extends $Kind1$Mu> implements $Kind1$$Interface {
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>): $Products$P11<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>): $Products$P10<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>): $Products$P9<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>, arg12: $App$$Type<(F), (T13)>, arg13: $App$$Type<(F), (T14)>, arg14: $App$$Type<(F), (T15)>, arg15: $App$$Type<(F), (T16)>): $Products$P16<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>, arg12: $App$$Type<(F), (T13)>, arg13: $App$$Type<(F), (T14)>, arg14: $App$$Type<(F), (T15)>): $Products$P15<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>, arg12: $App$$Type<(F), (T13)>, arg13: $App$$Type<(F), (T14)>): $Products$P14<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>, arg12: $App$$Type<(F), (T13)>): $Products$P13<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>): $Products$P12<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12)>
 "group"<T1, T2, T3>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>): $Products$P3<(F), (T1), (T2), (T3)>
 "group"<T1, T2>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>): $Products$P2<(F), (T1), (T2)>
 "group"<T1>(arg0: $App$$Type<(F), (T1)>): $Products$P1<(F), (T1)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>): $Products$P8<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>
 "group"<T1, T2, T3, T4, T5, T6, T7>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>): $Products$P7<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7)>
 "group"<T1, T2, T3, T4, T5, T6>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>): $Products$P6<(F), (T1), (T2), (T3), (T4), (T5), (T6)>
 "group"<T1, T2, T3, T4, T5>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>): $Products$P5<(F), (T1), (T2), (T3), (T4), (T5)>
 "group"<T1, T2, T3, T4>(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>): $Products$P4<(F), (T1), (T2), (T3), (T4)>
static "unbox"<F extends $K1, Proof extends $Kind1$Mu>(arg0: $App$$Type<(Proof), (F)>): $Kind1<(F), (Proof)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Kind1$$Type<F, Mu> = ($Kind1<(F), (Mu)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Kind1$$Original<F, Mu> = $Kind1<(F), (Mu)>;}
declare module "com.mojang.datafixers.kinds.K1" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $K1$$Interface {
}

export class $K1 implements $K1$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $K1$$Type = ($K1);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $K1$$Original = $K1;}
declare module "com.mojang.datafixers.kinds.K2" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $K2$$Interface {
}

export class $K2 implements $K2$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $K2$$Type = ($K2);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $K2$$Original = $K2;}
