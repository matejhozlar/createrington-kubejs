declare module "com.mojang.serialization.codecs.RecordCodecBuilder$Instance" {
import {$Function9, $Function9$$Type} from "com.mojang.datafixers.util.Function9"
import {$Function8, $Function8$$Type} from "com.mojang.datafixers.util.Function8"
import {$Function7, $Function7$$Type} from "com.mojang.datafixers.util.Function7"
import {$Function6, $Function6$$Type} from "com.mojang.datafixers.util.Function6"
import {$Function5, $Function5$$Type} from "com.mojang.datafixers.util.Function5"
import {$RecordCodecBuilder$Instance$Mu, $RecordCodecBuilder$Instance$Mu$$Type} from "com.mojang.serialization.codecs.RecordCodecBuilder$Instance$Mu"
import {$Function4, $Function4$$Type} from "com.mojang.datafixers.util.Function4"
import {$Function3, $Function3$$Type} from "com.mojang.datafixers.util.Function3"
import {$Function11$$Type} from "com.mojang.datafixers.util.Function11"
import {$Function10$$Type} from "com.mojang.datafixers.util.Function10"
import {$Products$P10} from "com.mojang.datafixers.Products$P10"
import {$Products$P3} from "com.mojang.datafixers.Products$P3"
import {$Products$P11} from "com.mojang.datafixers.Products$P11"
import {$Products$P4} from "com.mojang.datafixers.Products$P4"
import {$Products$P1} from "com.mojang.datafixers.Products$P1"
import {$Products$P2} from "com.mojang.datafixers.Products$P2"
import {$Products$P7} from "com.mojang.datafixers.Products$P7"
import {$RecordCodecBuilder$Mu, $RecordCodecBuilder$Mu$$Type} from "com.mojang.serialization.codecs.RecordCodecBuilder$Mu"
import {$Products$P8} from "com.mojang.datafixers.Products$P8"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Products$P5} from "com.mojang.datafixers.Products$P5"
import {$Products$P6} from "com.mojang.datafixers.Products$P6"
import {$Products$P16} from "com.mojang.datafixers.Products$P16"
import {$Products$P14} from "com.mojang.datafixers.Products$P14"
import {$Products$P15} from "com.mojang.datafixers.Products$P15"
import {$Products$P12} from "com.mojang.datafixers.Products$P12"
import {$Products$P13} from "com.mojang.datafixers.Products$P13"
import {$Applicative$Mu} from "com.mojang.datafixers.kinds.Applicative$Mu"
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$Products$P9} from "com.mojang.datafixers.Products$P9"
import {$Function13$$Type} from "com.mojang.datafixers.util.Function13"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Function12$$Type} from "com.mojang.datafixers.util.Function12"
import {$Function15$$Type} from "com.mojang.datafixers.util.Function15"
import {$Function14$$Type} from "com.mojang.datafixers.util.Function14"
import {$Function16$$Type} from "com.mojang.datafixers.util.Function16"
import {$K1} from "com.mojang.datafixers.kinds.K1"
import {$Lifecycle$$Type} from "com.mojang.serialization.Lifecycle"
import {$Applicative, $Applicative$$Interface} from "com.mojang.datafixers.kinds.Applicative"

export class $RecordCodecBuilder$Instance<O> implements $Applicative$$Interface<($RecordCodecBuilder$Mu<(O)>), ($RecordCodecBuilder$Instance$Mu<(O)>)> {
constructor()

public "map"<T, R>(arg0: $Function$$Type<(T), (R)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "point"<A>(arg0: A, arg1: $Lifecycle$$Type): $App<($RecordCodecBuilder$Mu<(O)>), (A)>
public "point"<A>(arg0: A): $App<($RecordCodecBuilder$Mu<(O)>), (A)>
public "ap3"<T1, T2, T3, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function3$$Type<(T1), (T2), (T3), (R)>)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "lift1"<A, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function$$Type<(A), (R)>)>): $Function<($App<($RecordCodecBuilder$Mu<(O)>), (A)>), ($App<($RecordCodecBuilder$Mu<(O)>), (R)>)>
public "ap4"<T1, T2, T3, T4, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function4$$Type<(T1), (T2), (T3), (T4), (R)>)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "ap2"<A, B, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($BiFunction$$Type<(A), (B), (R)>)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (A)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (B)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "stable"<A>(arg0: A): $App<($RecordCodecBuilder$Mu<(O)>), (A)>
public "deprecated"<A>(arg0: A, arg1: integer): $App<($RecordCodecBuilder$Mu<(O)>), (A)>
public static "unbox"<F extends $K1, Mu extends $Applicative$Mu>(arg0: $App$$Type<($RecordCodecBuilder$Instance$Mu$$Type<(O)>), ($RecordCodecBuilder$Mu$$Type<(O)>)>): $Applicative<($RecordCodecBuilder$Mu<(O)>), ($RecordCodecBuilder$Instance$Mu<(O)>)>
public "ap"<A, R>(arg0: $Function$$Type<(A), (R)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (A)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "ap"<A, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function$$Type<(A), (R)>)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (A)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "ap9"<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function9$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg7: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>, arg8: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T8)>, arg9: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T9)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "ap7"<T1, T2, T3, T4, T5, T6, T7, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function7$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (R)>)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg7: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "lift3"<T1, T2, T3, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function3$$Type<(T1), (T2), (T3), (R)>)>): $Function3<($App<($RecordCodecBuilder$Mu<(O)>), (T1)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T2)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T3)>), ($App<($RecordCodecBuilder$Mu<(O)>), (R)>)>
public "lift7"<T1, T2, T3, T4, T5, T6, T7, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function7$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (R)>)>): $Function7<($App<($RecordCodecBuilder$Mu<(O)>), (T1)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T2)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T3)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T4)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T5)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T6)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T7)>), ($App<($RecordCodecBuilder$Mu<(O)>), (R)>)>
public "ap12"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function12$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (R)>)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg7: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>, arg8: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T8)>, arg9: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T9)>, arg10: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T10)>, arg11: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T11)>, arg12: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T12)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "ap13"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function13$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (R)>)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg7: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>, arg8: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T8)>, arg9: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T9)>, arg10: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T10)>, arg11: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T11)>, arg12: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T12)>, arg13: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T13)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "ap15"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function15$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg7: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>, arg8: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T8)>, arg9: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T9)>, arg10: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T10)>, arg11: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T11)>, arg12: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T12)>, arg13: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T13)>, arg14: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T14)>, arg15: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T15)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "apply5"<T1, T2, T3, T4, T5, R>(arg0: $Function5$$Type<(T1), (T2), (T3), (T4), (T5), (R)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "apply8"<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: $Function8$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg7: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>, arg8: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T8)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "apply9"<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: $Function9$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg7: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>, arg8: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T8)>, arg9: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T9)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "lift2"<A, B, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($BiFunction$$Type<(A), (B), (R)>)>): $BiFunction<($App<($RecordCodecBuilder$Mu<(O)>), (A)>), ($App<($RecordCodecBuilder$Mu<(O)>), (B)>), ($App<($RecordCodecBuilder$Mu<(O)>), (R)>)>
public "ap8"<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function8$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg7: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>, arg8: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T8)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "ap6"<T1, T2, T3, T4, T5, T6, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function6$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (R)>)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "lift6"<T1, T2, T3, T4, T5, T6, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function6$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (R)>)>): $Function6<($App<($RecordCodecBuilder$Mu<(O)>), (T1)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T2)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T3)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T4)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T5)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T6)>), ($App<($RecordCodecBuilder$Mu<(O)>), (R)>)>
public "apply4"<T1, T2, T3, T4, R>(arg0: $Function4$$Type<(T1), (T2), (T3), (T4), (R)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "apply2"<A, B, R>(arg0: $BiFunction$$Type<(A), (B), (R)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (A)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (B)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "ap16"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function16$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg7: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>, arg8: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T8)>, arg9: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T9)>, arg10: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T10)>, arg11: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T11)>, arg12: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T12)>, arg13: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T13)>, arg14: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T14)>, arg15: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T15)>, arg16: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T16)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "ap5"<T1, T2, T3, T4, T5, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function5$$Type<(T1), (T2), (T3), (T4), (T5), (R)>)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "lift4"<T1, T2, T3, T4, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function4$$Type<(T1), (T2), (T3), (T4), (R)>)>): $Function4<($App<($RecordCodecBuilder$Mu<(O)>), (T1)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T2)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T3)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T4)>), ($App<($RecordCodecBuilder$Mu<(O)>), (R)>)>
public "lift8"<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function8$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>)>): $Function8<($App<($RecordCodecBuilder$Mu<(O)>), (T1)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T2)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T3)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T4)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T5)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T6)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T7)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T8)>), ($App<($RecordCodecBuilder$Mu<(O)>), (R)>)>
public "lift9"<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function9$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>)>): $Function9<($App<($RecordCodecBuilder$Mu<(O)>), (T1)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T2)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T3)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T4)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T5)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T6)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T7)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T8)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T9)>), ($App<($RecordCodecBuilder$Mu<(O)>), (R)>)>
public "ap11"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function11$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (R)>)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg7: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>, arg8: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T8)>, arg9: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T9)>, arg10: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T10)>, arg11: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T11)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "lift5"<T1, T2, T3, T4, T5, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function5$$Type<(T1), (T2), (T3), (T4), (T5), (R)>)>): $Function5<($App<($RecordCodecBuilder$Mu<(O)>), (T1)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T2)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T3)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T4)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T5)>), ($App<($RecordCodecBuilder$Mu<(O)>), (R)>)>
public "ap14"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function14$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg7: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>, arg8: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T8)>, arg9: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T9)>, arg10: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T10)>, arg11: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T11)>, arg12: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T12)>, arg13: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T13)>, arg14: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T14)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "ap10"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), ($Function10$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (R)>)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg7: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>, arg8: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T8)>, arg9: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T9)>, arg10: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T10)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "apply3"<T1, T2, T3, R>(arg0: $Function3$$Type<(T1), (T2), (T3), (R)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "apply6"<T1, T2, T3, T4, T5, T6, R>(arg0: $Function6$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (R)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "apply7"<T1, T2, T3, T4, T5, T6, T7, R>(arg0: $Function7$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (R)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg7: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>, arg7: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T8)>, arg8: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T9)>, arg9: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T10)>, arg10: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T11)>): $Products$P11<($RecordCodecBuilder$Mu<(O)>), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>, arg7: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T8)>, arg8: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T9)>, arg9: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T10)>): $Products$P10<($RecordCodecBuilder$Mu<(O)>), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>, arg7: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T8)>, arg8: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T9)>): $Products$P9<($RecordCodecBuilder$Mu<(O)>), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>, arg7: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T8)>, arg8: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T9)>, arg9: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T10)>, arg10: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T11)>, arg11: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T12)>, arg12: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T13)>, arg13: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T14)>, arg14: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T15)>, arg15: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T16)>): $Products$P16<($RecordCodecBuilder$Mu<(O)>), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>, arg7: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T8)>, arg8: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T9)>, arg9: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T10)>, arg10: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T11)>, arg11: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T12)>, arg12: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T13)>, arg13: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T14)>, arg14: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T15)>): $Products$P15<($RecordCodecBuilder$Mu<(O)>), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>, arg7: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T8)>, arg8: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T9)>, arg9: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T10)>, arg10: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T11)>, arg11: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T12)>, arg12: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T13)>, arg13: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T14)>): $Products$P14<($RecordCodecBuilder$Mu<(O)>), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>, arg7: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T8)>, arg8: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T9)>, arg9: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T10)>, arg10: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T11)>, arg11: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T12)>, arg12: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T13)>): $Products$P13<($RecordCodecBuilder$Mu<(O)>), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>, arg7: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T8)>, arg8: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T9)>, arg9: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T10)>, arg10: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T11)>, arg11: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T12)>): $Products$P12<($RecordCodecBuilder$Mu<(O)>), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12)>
public "group"<T1, T2, T3>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>): $Products$P3<($RecordCodecBuilder$Mu<(O)>), (T1), (T2), (T3)>
public "group"<T1, T2>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>): $Products$P2<($RecordCodecBuilder$Mu<(O)>), (T1), (T2)>
public "group"<T1>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>): $Products$P1<($RecordCodecBuilder$Mu<(O)>), (T1)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>, arg7: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T8)>): $Products$P8<($RecordCodecBuilder$Mu<(O)>), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>
public "group"<T1, T2, T3, T4, T5, T6, T7>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>, arg6: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T7)>): $Products$P7<($RecordCodecBuilder$Mu<(O)>), (T1), (T2), (T3), (T4), (T5), (T6), (T7)>
public "group"<T1, T2, T3, T4, T5, T6>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>, arg5: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T6)>): $Products$P6<($RecordCodecBuilder$Mu<(O)>), (T1), (T2), (T3), (T4), (T5), (T6)>
public "group"<T1, T2, T3, T4, T5>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>, arg4: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T5)>): $Products$P5<($RecordCodecBuilder$Mu<(O)>), (T1), (T2), (T3), (T4), (T5)>
public "group"<T1, T2, T3, T4>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T1)>, arg1: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T2)>, arg2: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T3)>, arg3: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (T4)>): $Products$P4<($RecordCodecBuilder$Mu<(O)>), (T1), (T2), (T3), (T4)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecordCodecBuilder$Instance$$Type<O> = ($RecordCodecBuilder$Instance<(O)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecordCodecBuilder$Instance$$Original<O> = $RecordCodecBuilder$Instance<(O)>;}
declare module "com.mojang.serialization.codecs.RecordCodecBuilder$Mu" {
import {$K1$$Interface} from "com.mojang.datafixers.kinds.K1"

export class $RecordCodecBuilder$Mu<O> implements $K1$$Interface {
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecordCodecBuilder$Mu$$Type<O> = ($RecordCodecBuilder$Mu<(O)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecordCodecBuilder$Mu$$Original<O> = $RecordCodecBuilder$Mu<(O)>;}
declare module "com.mojang.serialization.codecs.UnboundedMapCodec" {
import {$DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$Dynamic$$Type} from "com.mojang.serialization.Dynamic"
import {$Encoder, $Encoder$$Type} from "com.mojang.serialization.Encoder"
import {$Decoder$Terminal, $Decoder$Terminal$$Type} from "com.mojang.serialization.Decoder$Terminal"
import {$MapDecoder$$Type} from "com.mojang.serialization.MapDecoder"
import {$Codec, $Codec$$Type, $Codec$$Interface} from "com.mojang.serialization.Codec"
import {$Either} from "com.mojang.datafixers.util.Either"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Decoder, $Decoder$$Type} from "com.mojang.serialization.Decoder"
import {$Codec$ResultFunction$$Type} from "com.mojang.serialization.Codec$ResultFunction"
import {$Decoder$Boxed, $Decoder$Boxed$$Type} from "com.mojang.serialization.Decoder$Boxed"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$Map, $Map$$Type} from "java.util.Map"
import {$BaseMapCodec$$Interface} from "com.mojang.serialization.codecs.BaseMapCodec"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$SimpleMapCodec} from "com.mojang.serialization.codecs.SimpleMapCodec"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$Decoder$Simple, $Decoder$Simple$$Type} from "com.mojang.serialization.Decoder$Simple"
import {$RecordBuilder, $RecordBuilder$$Type} from "com.mojang.serialization.RecordBuilder"
import {$MapLike$$Type} from "com.mojang.serialization.MapLike"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$MapEncoder, $MapEncoder$$Type} from "com.mojang.serialization.MapEncoder"
import {$Lifecycle$$Type} from "com.mojang.serialization.Lifecycle"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"

export class $UnboundedMapCodec<K, V> extends $Record implements $BaseMapCodec$$Interface<(K), (V)>, $Codec$$Interface<($Map<(K), (V)>)> {
constructor(keyCodec: $Codec$$Type<(K)>, elementCodec: $Codec$$Type<(V)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "decode"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: T): $DataResult<($Pair<($Map<(K), (V)>), (T)>)>
public "encode"(arg0: any, arg1: $DynamicOps$$Type, arg2: any): $DataResult
public "encode"<T>(arg0: $Map$$Type<(K), (V)>, arg1: $DynamicOps$$Type<(T)>, arg2: T): $DataResult<(T)>
public "elementCodec"(): $Codec<(V)>
public "keyCodec"(): $Codec<(K)>
public "decode"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: $MapLike$$Type<(T)>): $DataResult<($Map<(K), (V)>)>
public "encode"<T>(arg0: $Map$$Type<(K), (V)>, arg1: $DynamicOps$$Type<(T)>, arg2: $RecordBuilder$$Type<(T)>): $RecordBuilder<(T)>
public "dispatch"<E>(arg0: StringJS, arg1: $Function$$Type<(E), ($Map$$Type<(K), (V)>)>, arg2: $Function$$Type<($Map<(K), (V)>), ($MapCodec$$Type<(E)>)>): $Codec<(E)>
public "dispatch"<E>(arg0: $Function$$Type<(E), ($Map$$Type<(K), (V)>)>, arg1: $Function$$Type<($Map<(K), (V)>), ($MapCodec$$Type<(E)>)>): $Codec<(E)>
public static "of"<A>(arg0: $MapEncoder$$Type<($Map$$Type<(K), (V)>)>, arg1: $MapDecoder$$Type<($Map$$Type<(K), (V)>)>, arg2: $Supplier$$Type<(StringJS)>): $MapCodec<($Map<(K), (V)>)>
public static "of"<A>(arg0: $MapEncoder$$Type<($Map$$Type<(K), (V)>)>, arg1: $MapDecoder$$Type<($Map$$Type<(K), (V)>)>): $MapCodec<($Map<(K), (V)>)>
public static "of"<A>(arg0: $Encoder$$Type<($Map$$Type<(K), (V)>)>, arg1: $Decoder$$Type<($Map$$Type<(K), (V)>)>, arg2: StringJS): $Codec<($Map<(K), (V)>)>
public static "of"<A>(arg0: $Encoder$$Type<($Map$$Type<(K), (V)>)>, arg1: $Decoder$$Type<($Map$$Type<(K), (V)>)>): $Codec<($Map<(K), (V)>)>
public static "list"<E>(arg0: $Codec$$Type<(E)>): $Codec<($List<(E)>)>
public static "list"<E>(arg0: $Codec$$Type<(E)>, arg1: integer, arg2: integer): $Codec<($List<(E)>)>
public "validate"(arg0: $Function$$Type<($Map<(K), (V)>), ($DataResult$$Type<($Map$$Type<(K), (V)>)>)>): $Codec<($Map<(K), (V)>)>
public "orElse"(arg0: $UnaryOperator$$Type<(StringJS)>, arg1: $Map$$Type<(K), (V)>): $Codec<($Map<(K), (V)>)>
public "orElse"(arg0: $Map$$Type<(K), (V)>): $Codec<($Map<(K), (V)>)>
public "orElse"(arg0: $Consumer$$Type<(StringJS)>, arg1: $Map$$Type<(K), (V)>): $Codec<($Map<(K), (V)>)>
public static "unit"<A>(arg0: $Map$$Type<(K), (V)>): $Codec<($Map<(K), (V)>)>
public static "unit"<A>(arg0: $Supplier$$Type<($Map$$Type<(K), (V)>)>): $Codec<($Map<(K), (V)>)>
public static "string"(arg0: integer, arg1: integer): $Codec<(StringJS)>
public "orElseGet"(arg0: $UnaryOperator$$Type<(StringJS)>, arg1: $Supplier$$Type<($Map$$Type<(K), (V)>)>): $Codec<($Map<(K), (V)>)>
public "orElseGet"(arg0: $Supplier$$Type<($Map$$Type<(K), (V)>)>): $Codec<($Map<(K), (V)>)>
public "orElseGet"(arg0: $Consumer$$Type<(StringJS)>, arg1: $Supplier$$Type<($Map$$Type<(K), (V)>)>): $Codec<($Map<(K), (V)>)>
public static "recursive"<A>(arg0: StringJS, arg1: $Function$$Type<($Codec<($Map<(K), (V)>)>), ($Codec$$Type<($Map$$Type<(K), (V)>)>)>): $Codec<($Map<(K), (V)>)>
public static "pair"<F, S>(arg0: $Codec$$Type<(F)>, arg1: $Codec$$Type<(S)>): $Codec<($Pair<(F), (S)>)>
public static "checkRange"<N extends number>(arg0: N, arg1: N): $Function<(N), ($DataResult<(N)>)>
public static "xor"<F, S>(arg0: $Codec$$Type<(F)>, arg1: $Codec$$Type<(S)>): $Codec<($Either<(F), (S)>)>
public static "unboundedMap"<K, V>(arg0: $Codec$$Type<(K)>, arg1: $Codec$$Type<(V)>): $UnboundedMapCodec<(K), (V)>
public "comapFlatMap"<S>(arg0: $Function$$Type<($Map<(K), (V)>), ($DataResult$$Type<(S)>)>, arg1: $Function$$Type<(S), ($Map$$Type<(K), (V)>)>): $Codec<(S)>
public "optionalFieldOf"(arg0: StringJS, arg1: $Map$$Type<(K), (V)>): $MapCodec<($Map<(K), (V)>)>
public "optionalFieldOf"(arg0: StringJS, arg1: $Map$$Type<(K), (V)>, arg2: $Lifecycle$$Type): $MapCodec<($Map<(K), (V)>)>
public "optionalFieldOf"(arg0: StringJS): $MapCodec<($Optional<($Map<(K), (V)>)>)>
public "optionalFieldOf"(arg0: StringJS, arg1: $Lifecycle$$Type, arg2: $Map$$Type<(K), (V)>, arg3: $Lifecycle$$Type): $MapCodec<($Map<(K), (V)>)>
public "partialDispatch"<E>(arg0: StringJS, arg1: $Function$$Type<(E), ($DataResult$$Type<($Map$$Type<(K), (V)>)>)>, arg2: $Function$$Type<($Map<(K), (V)>), ($DataResult$$Type<($MapCodec$$Type<(E)>)>)>): $Codec<(E)>
public static "sizeLimitedString"(arg0: integer): $Codec<(StringJS)>
public static "withAlternative"<T, U>(arg0: $Codec$$Type<(T)>, arg1: $Codec$$Type<(U)>, arg2: $Function$$Type<(U), (T)>): $Codec<(T)>
public static "withAlternative"<T>(arg0: $Codec$$Type<(T)>, arg1: $Codec$$Type<(T)>): $Codec<(T)>
public "dispatchStable"<E>(arg0: $Function$$Type<(E), ($Map$$Type<(K), (V)>)>, arg1: $Function$$Type<($Map<(K), (V)>), ($MapCodec$$Type<(E)>)>): $Codec<(E)>
public "withLifecycle"(arg0: $Lifecycle$$Type): $Decoder
public static "optionalField"<F>(arg0: StringJS, arg1: $Codec$$Type<(F)>, arg2: boolean): $MapCodec<($Optional<(F)>)>
public static "doubleRange"(arg0: double, arg1: double): $Codec<(double)>
public static "lazyInitialized"<A>(arg0: $Supplier$$Type<($Codec$$Type<($Map$$Type<(K), (V)>)>)>): $Codec<($Map<(K), (V)>)>
public "promotePartial"(arg0: $Consumer$$Type): $Decoder
public "flatComapMap"<S>(arg0: $Function$$Type<($Map<(K), (V)>), (S)>, arg1: $Function$$Type<(S), ($DataResult$$Type<($Map$$Type<(K), (V)>)>)>): $Codec<(S)>
public static "compoundList"<K, V>(arg0: $Codec$$Type<(K)>, arg1: $Codec$$Type<(V)>): $Codec<($List<($Pair<(K), (V)>)>)>
public static "stringResolver"<E>(arg0: $Function$$Type<(E), (StringJS)>, arg1: $Function$$Type<(StringJS), (E)>): $Codec<(E)>
public "dispatchMap"<E>(arg0: $Function$$Type<(E), ($Map$$Type<(K), (V)>)>, arg1: $Function$$Type<($Map<(K), (V)>), ($MapCodec$$Type<(E)>)>): $MapCodec<(E)>
public "dispatchMap"<E>(arg0: StringJS, arg1: $Function$$Type<(E), ($Map$$Type<(K), (V)>)>, arg2: $Function$$Type<($Map<(K), (V)>), ($MapCodec$$Type<(E)>)>): $MapCodec<(E)>
public static "dispatchedMap"<K, V>(arg0: $Codec$$Type<(K)>, arg1: $Function$$Type<(K), ($Codec$$Type<(V)>)>): $Codec<($Map<(K), (V)>)>
public "sizeLimitedListOf"(arg0: integer): $Codec<($List<($Map<(K), (V)>)>)>
public static "floatRange"(arg0: float, arg1: float): $Codec<(float)>
public static "mapEither"<F, S>(arg0: $MapCodec$$Type<(F)>, arg1: $MapCodec$$Type<(S)>): $MapCodec<($Either<(F), (S)>)>
public static "simpleMap"<K, V>(arg0: $Codec$$Type<(K)>, arg1: $Codec$$Type<(V)>, arg2: $Keyable$$Type): $SimpleMapCodec<(K), (V)>
public static "mapPair"<F, S>(arg0: $MapCodec$$Type<(F)>, arg1: $MapCodec$$Type<(S)>): $MapCodec<($Pair<(F), (S)>)>
public static "intRange"(arg0: integer, arg1: integer): $Codec<(integer)>
public "fieldOf"(arg0: StringJS): $MapCodec<($Map<(K), (V)>)>
public "mapResult"(arg0: $Codec$ResultFunction$$Type<($Map$$Type<(K), (V)>)>): $Codec<($Map<(K), (V)>)>
public "xmap"<S>(arg0: $Function$$Type<($Map<(K), (V)>), (S)>, arg1: $Function$$Type<(S), ($Map$$Type<(K), (V)>)>): $Codec<(S)>
public "listOf"(): $Codec<($List<($Map<(K), (V)>)>)>
public "listOf"(arg0: integer, arg1: integer): $Codec<($List<($Map<(K), (V)>)>)>
public static "either"<F, S>(arg0: $Codec$$Type<(F)>, arg1: $Codec$$Type<(S)>): $Codec<($Either<(F), (S)>)>
public "stable"(): $Codec<($Map<(K), (V)>)>
public "deprecated"(arg0: integer): $Codec<($Map<(K), (V)>)>
public "flatXmap"<S>(arg0: $Function$$Type<($Map<(K), (V)>), ($DataResult$$Type<(S)>)>, arg1: $Function$$Type<(S), ($DataResult$$Type<($Map$$Type<(K), (V)>)>)>): $Codec<(S)>
public "lenientOptionalFieldOf"(arg0: StringJS, arg1: $Lifecycle$$Type, arg2: $Map$$Type<(K), (V)>, arg3: $Lifecycle$$Type): $MapCodec<($Map<(K), (V)>)>
public "lenientOptionalFieldOf"(arg0: StringJS, arg1: $Map$$Type<(K), (V)>, arg2: $Lifecycle$$Type): $MapCodec<($Map<(K), (V)>)>
public "lenientOptionalFieldOf"(arg0: StringJS, arg1: $Map$$Type<(K), (V)>): $MapCodec<($Map<(K), (V)>)>
public "lenientOptionalFieldOf"(arg0: StringJS): $MapCodec<($Optional<($Map<(K), (V)>)>)>
public static "empty"<A>(): $MapEncoder<($Map<(K), (V)>)>
public static "error"<A>(arg0: StringJS): $Encoder<($Map<(K), (V)>)>
public "encodeStart"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: $Map$$Type<(K), (V)>): $DataResult<(T)>
public "comap"<B>(arg0: $Function$$Type<(B), ($Map$$Type<(K), (V)>)>): $Encoder<(B)>
public "flatComap"<B>(arg0: $Function$$Type<(B), ($DataResult$$Type<($Map$$Type<(K), (V)>)>)>): $Encoder<(B)>
public "decode"<T>(arg0: $Dynamic$$Type<(T)>): $DataResult<($Pair<($Map<(K), (V)>), (T)>)>
public "map"<B>(arg0: $Function$$Type<($Map<(K), (V)>), (B)>): $Decoder<(B)>
public "flatMap"<B>(arg0: $Function$$Type<($Map<(K), (V)>), ($DataResult$$Type<(B)>)>): $Decoder<(B)>
public "parse"<T>(arg0: $Dynamic$$Type<(T)>): $DataResult<($Map<(K), (V)>)>
public "parse"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: T): $DataResult<($Map<(K), (V)>)>
public "boxed"(): $Decoder$Boxed<($Map<(K), (V)>)>
public "terminal"(): $Decoder$Terminal<($Map<(K), (V)>)>
public static "ofSimple"<A>(arg0: $Decoder$Simple$$Type<($Map$$Type<(K), (V)>)>): $Decoder<($Map<(K), (V)>)>
public static "ofTerminal"<A>(arg0: $Decoder$Terminal$$Type<($Map$$Type<(K), (V)>)>): $Decoder<($Map<(K), (V)>)>
public static "ofBoxed"<A>(arg0: $Decoder$Boxed$$Type<($Map$$Type<(K), (V)>)>): $Decoder<($Map<(K), (V)>)>
public "simple"(): $Decoder$Simple<($Map<(K), (V)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnboundedMapCodec$$Type<K, V> = ({"keyCodec"?: $Codec$$Type<(K)>, "elementCodec"?: $Codec$$Type<(V)>}) | ([keyCodec?: $Codec$$Type<(K)>, elementCodec?: $Codec$$Type<(V)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UnboundedMapCodec$$Original<K, V> = $UnboundedMapCodec<(K), (V)>;}
declare module "com.mojang.serialization.codecs.SimpleMapCodec" {
import {$KeyCompressor, $KeyCompressor$$Type} from "com.mojang.serialization.KeyCompressor"
import {$DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Map, $Map$$Type} from "java.util.Map"
import {$BaseMapCodec$$Interface} from "com.mojang.serialization.codecs.BaseMapCodec"
import {$DataResult} from "com.mojang.serialization.DataResult"
import {$RecordBuilder, $RecordBuilder$$Type} from "com.mojang.serialization.RecordBuilder"
import {$MapLike$$Type} from "com.mojang.serialization.MapLike"
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $SimpleMapCodec<K, V> extends $MapCodec<($Map<(K), (V)>)> implements $BaseMapCodec$$Interface<(K), (V)> {
constructor(arg0: $Codec$$Type<(K)>, arg1: $Codec$$Type<(V)>, arg2: $Keyable$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "decode"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: $MapLike$$Type<(T)>): $DataResult<($Map<(K), (V)>)>
public "encode"(arg0: any, arg1: $DynamicOps$$Type, arg2: $RecordBuilder$$Type): $RecordBuilder
public "encode"<T>(arg0: $Map$$Type<(K), (V)>, arg1: $DynamicOps$$Type<(T)>, arg2: $RecordBuilder$$Type<(T)>): $RecordBuilder<(T)>
public "keys"<T>(arg0: $DynamicOps$$Type<(T)>): $Stream<(T)>
public "elementCodec"(): $Codec<(V)>
public "keyCodec"(): $Codec<(K)>
public "compressor"<T>(arg0: $DynamicOps$$Type<(T)>): $KeyCompressor<(T)>
public static "makeCompressedBuilder"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: $KeyCompressor$$Type<(T)>): $RecordBuilder<(T)>
public static "forStrings"(arg0: $Supplier$$Type<($Stream$$Type<(StringJS)>)>): $Keyable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleMapCodec$$Type<K, V> = ($SimpleMapCodec<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleMapCodec$$Original<K, V> = $SimpleMapCodec<(K), (V)>;}
declare module "com.mojang.serialization.codecs.RecordCodecBuilder$Instance$Mu" {
import {$Applicative$Mu$$Interface} from "com.mojang.datafixers.kinds.Applicative$Mu"

export class $RecordCodecBuilder$Instance$Mu<O> implements $Applicative$Mu$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecordCodecBuilder$Instance$Mu$$Type<O> = ($RecordCodecBuilder$Instance$Mu<(O)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecordCodecBuilder$Instance$Mu$$Original<O> = $RecordCodecBuilder$Instance$Mu<(O)>;}
declare module "com.mojang.serialization.codecs.RecordCodecBuilder" {
import {$App$$Type, $App$$Interface} from "com.mojang.datafixers.kinds.App"
import {$MapDecoder$$Type} from "com.mojang.serialization.MapDecoder"
import {$RecordCodecBuilder$Instance, $RecordCodecBuilder$Instance$$Type} from "com.mojang.serialization.codecs.RecordCodecBuilder$Instance"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RecordCodecBuilder$Mu, $RecordCodecBuilder$Mu$$Type} from "com.mojang.serialization.codecs.RecordCodecBuilder$Mu"
import {$Function$$Type} from "java.util.function.Function"
import {$MapEncoder$$Type} from "com.mojang.serialization.MapEncoder"
import {$Lifecycle$$Type} from "com.mojang.serialization.Lifecycle"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $RecordCodecBuilder<O, F> implements $App$$Interface<($RecordCodecBuilder$Mu<(O)>), (F)> {
public static "of"<O, F>(arg0: $Function$$Type<(O), (F)>, arg1: $MapCodec$$Type<(F)>): $RecordCodecBuilder<(O), (F)>
public static "of"<O, F>(arg0: $Function$$Type<(O), (F)>, arg1: StringJS, arg2: $Codec$$Type<(F)>): $RecordCodecBuilder<(O), (F)>
public static "create"<O>(arg0: $Function$$Type<($RecordCodecBuilder$Instance<(O)>), ($App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (O)>)>): $Codec<(O)>
public static "instance"<O>(): $RecordCodecBuilder$Instance<(O)>
public static "build"<O>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (O)>): $MapCodec<(O)>
public static "unbox"<O, F>(arg0: $App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (F)>): $RecordCodecBuilder<(O), (F)>
public static "point"<O, F>(arg0: F): $RecordCodecBuilder<(O), (F)>
public static "point"<O, F>(arg0: F, arg1: $Lifecycle$$Type): $RecordCodecBuilder<(O), (F)>
public "dependent"<E>(arg0: $Function$$Type<(O), (E)>, arg1: $MapEncoder$$Type<(E)>, arg2: $Function$$Type<(F), ($MapDecoder$$Type<(E)>)>): $RecordCodecBuilder<(O), (E)>
public static "mapCodec"<O>(arg0: $Function$$Type<($RecordCodecBuilder$Instance<(O)>), ($App$$Type<($RecordCodecBuilder$Mu$$Type<(O)>), (O)>)>): $MapCodec<(O)>
public static "stable"<O, F>(arg0: F): $RecordCodecBuilder<(O), (F)>
public static "deprecated"<O, F>(arg0: F, arg1: integer): $RecordCodecBuilder<(O), (F)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecordCodecBuilder$$Type<O, F> = ($RecordCodecBuilder<(O), (F)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecordCodecBuilder$$Original<O, F> = $RecordCodecBuilder<(O), (F)>;}
declare module "com.mojang.serialization.codecs.PrimitiveCodec" {
import {$DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$Dynamic$$Type} from "com.mojang.serialization.Dynamic"
import {$Encoder, $Encoder$$Type} from "com.mojang.serialization.Encoder"
import {$Decoder$Terminal, $Decoder$Terminal$$Type} from "com.mojang.serialization.Decoder$Terminal"
import {$MapDecoder$$Type} from "com.mojang.serialization.MapDecoder"
import {$Codec, $Codec$$Type, $Codec$$Interface} from "com.mojang.serialization.Codec"
import {$Either} from "com.mojang.datafixers.util.Either"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Decoder, $Decoder$$Type} from "com.mojang.serialization.Decoder"
import {$Codec$ResultFunction$$Type} from "com.mojang.serialization.Codec$ResultFunction"
import {$Decoder$Boxed, $Decoder$Boxed$$Type} from "com.mojang.serialization.Decoder$Boxed"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$Map} from "java.util.Map"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$SimpleMapCodec} from "com.mojang.serialization.codecs.SimpleMapCodec"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$Decoder$Simple, $Decoder$Simple$$Type} from "com.mojang.serialization.Decoder$Simple"
import {$UnboundedMapCodec} from "com.mojang.serialization.codecs.UnboundedMapCodec"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$MapEncoder, $MapEncoder$$Type} from "com.mojang.serialization.MapEncoder"
import {$Lifecycle$$Type} from "com.mojang.serialization.Lifecycle"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export interface $PrimitiveCodec$$Interface<A> extends $Codec$$Interface<(A)> {
}

export class $PrimitiveCodec<A> implements $PrimitiveCodec$$Interface {
 "decode"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: T): $DataResult<($Pair<(A), (T)>)>
 "encode"<T>(arg0: A, arg1: $DynamicOps$$Type<(T)>, arg2: T): $DataResult<(T)>
 "write"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: A): T
 "read"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: T): $DataResult<(A)>
 "dispatch"<E>(arg0: StringJS, arg1: $Function$$Type<(E), (A)>, arg2: $Function$$Type<(A), ($MapCodec$$Type<(E)>)>): $Codec<(E)>
 "dispatch"<E>(arg0: $Function$$Type<(E), (A)>, arg1: $Function$$Type<(A), ($MapCodec$$Type<(E)>)>): $Codec<(E)>
static "of"<A>(arg0: $MapEncoder$$Type<(A)>, arg1: $MapDecoder$$Type<(A)>, arg2: $Supplier$$Type<(StringJS)>): $MapCodec<(A)>
static "of"<A>(arg0: $MapEncoder$$Type<(A)>, arg1: $MapDecoder$$Type<(A)>): $MapCodec<(A)>
static "of"<A>(arg0: $Encoder$$Type<(A)>, arg1: $Decoder$$Type<(A)>, arg2: StringJS): $Codec<(A)>
static "of"<A>(arg0: $Encoder$$Type<(A)>, arg1: $Decoder$$Type<(A)>): $Codec<(A)>
static "list"<E>(arg0: $Codec$$Type<(E)>): $Codec<($List<(E)>)>
static "list"<E>(arg0: $Codec$$Type<(E)>, arg1: integer, arg2: integer): $Codec<($List<(E)>)>
 "validate"(arg0: $Function$$Type<(A), ($DataResult$$Type<(A)>)>): $Codec<(A)>
 "orElse"(arg0: $UnaryOperator$$Type<(StringJS)>, arg1: A): $Codec<(A)>
 "orElse"(arg0: A): $Codec<(A)>
 "orElse"(arg0: $Consumer$$Type<(StringJS)>, arg1: A): $Codec<(A)>
static "unit"<A>(arg0: A): $Codec<(A)>
static "unit"<A>(arg0: $Supplier$$Type<(A)>): $Codec<(A)>
static "string"(arg0: integer, arg1: integer): $Codec<(StringJS)>
 "orElseGet"(arg0: $UnaryOperator$$Type<(StringJS)>, arg1: $Supplier$$Type<(A)>): $Codec<(A)>
 "orElseGet"(arg0: $Supplier$$Type<(A)>): $Codec<(A)>
 "orElseGet"(arg0: $Consumer$$Type<(StringJS)>, arg1: $Supplier$$Type<(A)>): $Codec<(A)>
static "recursive"<A>(arg0: StringJS, arg1: $Function$$Type<($Codec<(A)>), ($Codec$$Type<(A)>)>): $Codec<(A)>
static "pair"<F, S>(arg0: $Codec$$Type<(F)>, arg1: $Codec$$Type<(S)>): $Codec<($Pair<(F), (S)>)>
static "checkRange"<N extends number>(arg0: N, arg1: N): $Function<(N), ($DataResult<(N)>)>
static "xor"<F, S>(arg0: $Codec$$Type<(F)>, arg1: $Codec$$Type<(S)>): $Codec<($Either<(F), (S)>)>
static "unboundedMap"<K, V>(arg0: $Codec$$Type<(K)>, arg1: $Codec$$Type<(V)>): $UnboundedMapCodec<(K), (V)>
 "comapFlatMap"<S>(arg0: $Function$$Type<(A), ($DataResult$$Type<(S)>)>, arg1: $Function$$Type<(S), (A)>): $Codec<(S)>
 "optionalFieldOf"(arg0: StringJS, arg1: A): $MapCodec<(A)>
 "optionalFieldOf"(arg0: StringJS, arg1: A, arg2: $Lifecycle$$Type): $MapCodec<(A)>
 "optionalFieldOf"(arg0: StringJS): $MapCodec<($Optional<(A)>)>
 "optionalFieldOf"(arg0: StringJS, arg1: $Lifecycle$$Type, arg2: A, arg3: $Lifecycle$$Type): $MapCodec<(A)>
 "partialDispatch"<E>(arg0: StringJS, arg1: $Function$$Type<(E), ($DataResult$$Type<(A)>)>, arg2: $Function$$Type<(A), ($DataResult$$Type<($MapCodec$$Type<(E)>)>)>): $Codec<(E)>
static "sizeLimitedString"(arg0: integer): $Codec<(StringJS)>
static "withAlternative"<T, U>(arg0: $Codec$$Type<(T)>, arg1: $Codec$$Type<(U)>, arg2: $Function$$Type<(U), (T)>): $Codec<(T)>
static "withAlternative"<T>(arg0: $Codec$$Type<(T)>, arg1: $Codec$$Type<(T)>): $Codec<(T)>
 "dispatchStable"<E>(arg0: $Function$$Type<(E), (A)>, arg1: $Function$$Type<(A), ($MapCodec$$Type<(E)>)>): $Codec<(E)>
 "withLifecycle"(arg0: $Lifecycle$$Type): $Decoder
static "optionalField"<F>(arg0: StringJS, arg1: $Codec$$Type<(F)>, arg2: boolean): $MapCodec<($Optional<(F)>)>
static "doubleRange"(arg0: double, arg1: double): $Codec<(double)>
static "lazyInitialized"<A>(arg0: $Supplier$$Type<($Codec$$Type<(A)>)>): $Codec<(A)>
 "promotePartial"(arg0: $Consumer$$Type): $Decoder
 "flatComapMap"<S>(arg0: $Function$$Type<(A), (S)>, arg1: $Function$$Type<(S), ($DataResult$$Type<(A)>)>): $Codec<(S)>
static "compoundList"<K, V>(arg0: $Codec$$Type<(K)>, arg1: $Codec$$Type<(V)>): $Codec<($List<($Pair<(K), (V)>)>)>
static "stringResolver"<E>(arg0: $Function$$Type<(E), (StringJS)>, arg1: $Function$$Type<(StringJS), (E)>): $Codec<(E)>
 "dispatchMap"<E>(arg0: $Function$$Type<(E), (A)>, arg1: $Function$$Type<(A), ($MapCodec$$Type<(E)>)>): $MapCodec<(E)>
 "dispatchMap"<E>(arg0: StringJS, arg1: $Function$$Type<(E), (A)>, arg2: $Function$$Type<(A), ($MapCodec$$Type<(E)>)>): $MapCodec<(E)>
static "dispatchedMap"<K, V>(arg0: $Codec$$Type<(K)>, arg1: $Function$$Type<(K), ($Codec$$Type<(V)>)>): $Codec<($Map<(K), (V)>)>
 "sizeLimitedListOf"(arg0: integer): $Codec<($List<(A)>)>
static "floatRange"(arg0: float, arg1: float): $Codec<(float)>
static "mapEither"<F, S>(arg0: $MapCodec$$Type<(F)>, arg1: $MapCodec$$Type<(S)>): $MapCodec<($Either<(F), (S)>)>
static "simpleMap"<K, V>(arg0: $Codec$$Type<(K)>, arg1: $Codec$$Type<(V)>, arg2: $Keyable$$Type): $SimpleMapCodec<(K), (V)>
static "mapPair"<F, S>(arg0: $MapCodec$$Type<(F)>, arg1: $MapCodec$$Type<(S)>): $MapCodec<($Pair<(F), (S)>)>
static "intRange"(arg0: integer, arg1: integer): $Codec<(integer)>
 "fieldOf"(arg0: StringJS): $MapCodec<(A)>
 "mapResult"(arg0: $Codec$ResultFunction$$Type<(A)>): $Codec<(A)>
 "xmap"<S>(arg0: $Function$$Type<(A), (S)>, arg1: $Function$$Type<(S), (A)>): $Codec<(S)>
 "listOf"(): $Codec<($List<(A)>)>
 "listOf"(arg0: integer, arg1: integer): $Codec<($List<(A)>)>
static "either"<F, S>(arg0: $Codec$$Type<(F)>, arg1: $Codec$$Type<(S)>): $Codec<($Either<(F), (S)>)>
 "stable"(): $Codec<(A)>
 "deprecated"(arg0: integer): $Codec<(A)>
 "flatXmap"<S>(arg0: $Function$$Type<(A), ($DataResult$$Type<(S)>)>, arg1: $Function$$Type<(S), ($DataResult$$Type<(A)>)>): $Codec<(S)>
 "lenientOptionalFieldOf"(arg0: StringJS, arg1: $Lifecycle$$Type, arg2: A, arg3: $Lifecycle$$Type): $MapCodec<(A)>
 "lenientOptionalFieldOf"(arg0: StringJS, arg1: A, arg2: $Lifecycle$$Type): $MapCodec<(A)>
 "lenientOptionalFieldOf"(arg0: StringJS, arg1: A): $MapCodec<(A)>
 "lenientOptionalFieldOf"(arg0: StringJS): $MapCodec<($Optional<(A)>)>
static "empty"<A>(): $MapEncoder<(A)>
static "error"<A>(arg0: StringJS): $Encoder<(A)>
 "encodeStart"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: A): $DataResult<(T)>
 "comap"<B>(arg0: $Function$$Type<(B), (A)>): $Encoder<(B)>
 "flatComap"<B>(arg0: $Function$$Type<(B), ($DataResult$$Type<(A)>)>): $Encoder<(B)>
 "decode"<T>(arg0: $Dynamic$$Type<(T)>): $DataResult<($Pair<(A), (T)>)>
 "map"<B>(arg0: $Function$$Type<(A), (B)>): $Decoder<(B)>
 "flatMap"<B>(arg0: $Function$$Type<(A), ($DataResult$$Type<(B)>)>): $Decoder<(B)>
 "parse"<T>(arg0: $Dynamic$$Type<(T)>): $DataResult<(A)>
 "parse"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: T): $DataResult<(A)>
 "boxed"(): $Decoder$Boxed<(A)>
 "terminal"(): $Decoder$Terminal<(A)>
static "ofSimple"<A>(arg0: $Decoder$Simple$$Type<(A)>): $Decoder<(A)>
static "ofTerminal"<A>(arg0: $Decoder$Terminal$$Type<(A)>): $Decoder<(A)>
static "ofBoxed"<A>(arg0: $Decoder$Boxed$$Type<(A)>): $Decoder<(A)>
 "simple"(): $Decoder$Simple<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrimitiveCodec$$Type<A> = ($PrimitiveCodec<(A)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PrimitiveCodec$$Original<A> = $PrimitiveCodec<(A)>;}
declare module "com.mojang.serialization.codecs.BaseMapCodec" {
import {$DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$DataResult} from "com.mojang.serialization.DataResult"
import {$RecordBuilder, $RecordBuilder$$Type} from "com.mojang.serialization.RecordBuilder"
import {$MapLike$$Type} from "com.mojang.serialization.MapLike"

export interface $BaseMapCodec$$Interface<K, V> {
}

export class $BaseMapCodec<K, V> implements $BaseMapCodec$$Interface {
 "decode"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: $MapLike$$Type<(T)>): $DataResult<($Map<(K), (V)>)>
 "encode"<T>(arg0: $Map$$Type<(K), (V)>, arg1: $DynamicOps$$Type<(T)>, arg2: $RecordBuilder$$Type<(T)>): $RecordBuilder<(T)>
 "elementCodec"(): $Codec<(V)>
 "keyCodec"(): $Codec<(K)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseMapCodec$$Type<K, V> = ($BaseMapCodec<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseMapCodec$$Original<K, V> = $BaseMapCodec<(K), (V)>;}
