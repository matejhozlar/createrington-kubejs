declare module "com.mojang.datafixers.TypedOptic$Element" {
import {$Type, $Type$$Type} from "com.mojang.datafixers.types.Type"
import {$Optic, $Optic$$Type} from "com.mojang.datafixers.optics.Optic"
import {$Record} from "java.lang.Record"

export class $TypedOptic$Element<S, T, A, B> extends $Record {
constructor(sType: $Type$$Type<(S)>, tType: $Type$$Type<(T)>, aType: $Type$$Type<(A)>, bType: $Type$$Type<(B)>, optic: $Optic$$Type<(never), (S), (T), (A), (B)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "tType"(): $Type<(T)>
public "aType"(): $Type<(A)>
public "sType"(): $Type<(S)>
public "optic"(): $Optic<(never), (S), (T), (A), (B)>
public "bType"(): $Type<(B)>
public "castOuterUnchecked"<S2, T2>(arg0: $Type$$Type<(S2)>, arg1: $Type$$Type<(T2)>): $TypedOptic$Element<(S2), (T2), (A), (B)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypedOptic$Element$$Type<S, T, A, B> = ({"tType"?: $Type$$Type<(T)>, "sType"?: $Type$$Type<(S)>, "optic"?: $Optic$$Type<(never), (S), (T), (A), (B)>, "bType"?: $Type$$Type<(B)>, "aType"?: $Type$$Type<(A)>}) | ([tType?: $Type$$Type<(T)>, sType?: $Type$$Type<(S)>, optic?: $Optic$$Type<(never), (S), (T), (A), (B)>, bType?: $Type$$Type<(B)>, aType?: $Type$$Type<(A)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TypedOptic$Element$$Original<S, T, A, B> = $TypedOptic$Element<(S), (T), (A), (B)>;}
declare module "com.mojang.datafixers.TypeRewriteRule" {
import {$RewriteResult, $RewriteResult$$Type} from "com.mojang.datafixers.RewriteResult"
import {$Type, $Type$$Type} from "com.mojang.datafixers.types.Type"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$PointFreeRule$$Type} from "com.mojang.datafixers.functions.PointFreeRule"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $TypeRewriteRule$$Interface {

(arg0: $Type<(A)>): ($RewriteResult$$Type<(A), (never)>)?
}

export class $TypeRewriteRule implements $TypeRewriteRule$$Interface {
static "orElse"(arg0: $TypeRewriteRule$$Type, arg1: $TypeRewriteRule$$Type): $TypeRewriteRule
static "orElse"(arg0: $TypeRewriteRule$$Type, arg1: $Supplier$$Type<($TypeRewriteRule$$Type)>): $TypeRewriteRule
static "seq"(arg0: $TypeRewriteRule$$Type, arg1: $TypeRewriteRule$$Type): $TypeRewriteRule
static "seq"(arg0: $TypeRewriteRule$$Type, ...arg1: ($TypeRewriteRule$$Type)[]): $TypeRewriteRule
static "seq"(arg0: $List$$Type<($TypeRewriteRule$$Type)>): $TypeRewriteRule
static "all"(arg0: $TypeRewriteRule$$Type, arg1: boolean, arg2: boolean): $TypeRewriteRule
static "checkOnce"(arg0: $TypeRewriteRule$$Type, arg1: $Consumer$$Type<($Type<(never)>)>): $TypeRewriteRule
static "ifSame"<B>(arg0: $Type$$Type<(B)>, arg1: $RewriteResult$$Type<(B), (never)>): $TypeRewriteRule
static "everywhere"(arg0: $TypeRewriteRule$$Type, arg1: $PointFreeRule$$Type, arg2: boolean, arg3: boolean): $TypeRewriteRule
static "one"(arg0: $TypeRewriteRule$$Type): $TypeRewriteRule
 "rewrite"<A>(arg0: $Type$$Type<(A)>): $Optional<($RewriteResult<(A), (never)>)>
static "once"(arg0: $TypeRewriteRule$$Type): $TypeRewriteRule
static "nop"(): $TypeRewriteRule
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeRewriteRule$$Type = ((arg0: $Type<(A)>) => ($RewriteResult$$Type<(A), (never)>)?);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TypeRewriteRule$$Original = $TypeRewriteRule;}
declare module "com.mojang.datafixers.TypedOptic" {
import {$App$$Type} from "com.mojang.datafixers.kinds.App"
import {$Collection$$Type} from "java.util.Collection"
import {$Optional} from "java.util.Optional"
import {$Type, $Type$$Type} from "com.mojang.datafixers.types.Type"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$List, $List$$Type} from "java.util.List"
import {$TypeToken, $TypeToken$$Type} from "com.google.common.reflect.TypeToken"
import {$TaggedChoice$TaggedChoiceType$$Type} from "com.mojang.datafixers.types.templates.TaggedChoice$TaggedChoiceType"
import {$App2, $App2$$Type} from "com.mojang.datafixers.kinds.App2"
import {$Either} from "com.mojang.datafixers.util.Either"
import {$K1, $K1$$Type} from "com.mojang.datafixers.kinds.K1"
import {$K2} from "com.mojang.datafixers.kinds.K2"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Optic, $Optic$$Type} from "com.mojang.datafixers.optics.Optic"
import {$TypedOptic$Element, $TypedOptic$Element$$Type} from "com.mojang.datafixers.TypedOptic$Element"
import {$Record} from "java.lang.Record"

export class $TypedOptic<S, T, A, B> extends $Record {
constructor(arg0: $TypeToken$$Type<($K1$$Type)>, arg1: $Type$$Type<(S)>, arg2: $Type$$Type<(T)>, arg3: $Type$$Type<(A)>, arg4: $Type$$Type<(B)>, arg5: $Optic$$Type<(never), (S), (T), (A), (B)>)
constructor(arg0: $Set$$Type<($TypeToken$$Type<($K1$$Type)>)>, arg1: $Type$$Type<(S)>, arg2: $Type$$Type<(T)>, arg3: $Type$$Type<(A)>, arg4: $Type$$Type<(B)>, arg5: $Optic$$Type<(never), (S), (T), (A), (B)>)
constructor(bounds: $Set$$Type<($TypeToken$$Type<($K1$$Type)>)>, elements: $List$$Type<($TypedOptic$Element$$Type<(never), (never), (never), (never)>)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "apply"<P extends $K2, Proof2 extends $K1>(arg0: $TypeToken$$Type<(Proof2)>, arg1: $App$$Type<(Proof2), (P)>, arg2: $App2$$Type<(P), (A), (B)>): $App2<(P), (S), (T)>
public static "list"<A, B>(arg0: $Type$$Type<(A)>, arg1: $Type$$Type<(B)>): $TypedOptic<($List<(A)>), ($List<(B)>), (A), (B)>
public "elements"(): $List<($TypedOptic$Element<(never), (never), (never), (never)>)>
public "bounds"(): $Set<($TypeToken<($K1)>)>
public "innermost"(): $Optic<(never), (never), (never), (A), (B)>
public "compose"<A1, B1>(arg0: $TypedOptic$$Type<(A), (B), (A1), (B1)>): $TypedOptic<(S), (T), (A1), (B1)>
public static "adapter"<S, T>(arg0: $Type$$Type<(S)>, arg1: $Type$$Type<(T)>): $TypedOptic<(S), (T), (S), (T)>
public "tType"(): $Type<(T)>
public "aType"(): $Type<(A)>
public static "tagged"<K, A, B>(arg0: $TaggedChoice$TaggedChoiceType$$Type<(K)>, arg1: K, arg2: $Type$$Type<(A)>, arg3: $Type$$Type<(B)>): $TypedOptic<($Pair<(K), (never)>), ($Pair<(K), (never)>), (A), (B)>
public static "compoundListKeys"<K, V, K2>(arg0: $Type$$Type<(K)>, arg1: $Type$$Type<(K2)>, arg2: $Type$$Type<(V)>): $TypedOptic<($List<($Pair<(K), (V)>)>), ($List<($Pair<(K2), (V)>)>), (K), (K2)>
public static "compoundListElements"<K, V, V2>(arg0: $Type$$Type<(K)>, arg1: $Type$$Type<(V)>, arg2: $Type$$Type<(V2)>): $TypedOptic<($List<($Pair<(K), (V)>)>), ($List<($Pair<(K), (V2)>)>), (V), (V2)>
public "sType"(): $Type<(S)>
public static "instanceOf"<Proof2 extends $K1>(arg0: $Collection$$Type<($TypeToken$$Type<($K1$$Type)>)>, arg1: $TypeToken$$Type<(Proof2)>): boolean
public static "inj2"<F, G, G2>(arg0: $Type$$Type<(F)>, arg1: $Type$$Type<(G)>, arg2: $Type$$Type<(G2)>): $TypedOptic<($Either<(F), (G)>), ($Either<(F), (G2)>), (G), (G2)>
public static "proj2"<F, G, G2>(arg0: $Type$$Type<(F)>, arg1: $Type$$Type<(G)>, arg2: $Type$$Type<(G2)>): $TypedOptic<($Pair<(F), (G)>), ($Pair<(F), (G2)>), (G), (G2)>
public "upCast"<Proof2 extends $K1>(arg0: $TypeToken$$Type<(Proof2)>): $Optional<($Optic<(Proof2), (S), (T), (A), (B)>)>
public static "inj1"<F, G, F2>(arg0: $Type$$Type<(F)>, arg1: $Type$$Type<(G)>, arg2: $Type$$Type<(F2)>): $TypedOptic<($Either<(F), (G)>), ($Either<(F2), (G)>), (F), (F2)>
public "bType"(): $Type<(B)>
public static "proj1"<F, G, F2>(arg0: $Type$$Type<(F)>, arg1: $Type$$Type<(G)>, arg2: $Type$$Type<(F2)>): $TypedOptic<($Pair<(F), (G)>), ($Pair<(F2), (G)>), (F), (F2)>
public "castOuter"(arg0: $Type$$Type<(S)>, arg1: $Type$$Type<(T)>): $TypedOptic<(S), (T), (A), (B)>
public "castOuterUnchecked"<S2, T2>(arg0: $Type$$Type<(S2)>, arg1: $Type$$Type<(T2)>): $TypedOptic<(S2), (T2), (A), (B)>
public "outermost"(): $Optic<(never), (S), (T), (never), (never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypedOptic$$Type<S, T, A, B> = ({"bounds"?: $Set$$Type<($TypeToken$$Type<($K1$$Type)>)>, "elements"?: $List$$Type<($TypedOptic$Element$$Type<(never), (never), (never), (never)>)>}) | ([bounds?: $Set$$Type<($TypeToken$$Type<($K1$$Type)>)>, elements?: $List$$Type<($TypedOptic$Element$$Type<(never), (never), (never), (never)>)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TypedOptic$$Original<S, T, A, B> = $TypedOptic<(S), (T), (A), (B)>;}
declare module "com.mojang.datafixers.FamilyOptic" {
import {$TypedOptic, $TypedOptic$$Type} from "com.mojang.datafixers.TypedOptic"

export interface $FamilyOptic$$Interface<A, B> {

(arg0: integer): $TypedOptic$$Type<(never), (never), (A), (B)>
}

export class $FamilyOptic<A, B> implements $FamilyOptic$$Interface {
 "apply"(arg0: integer): $TypedOptic<(never), (never), (A), (B)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FamilyOptic$$Type<A, B> = ((arg0: integer) => $TypedOptic$$Type<(never), (never), (A), (B)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FamilyOptic$$Original<A, B> = $FamilyOptic<(A), (B)>;}
declare module "com.mojang.datafixers.View$Mu" {
import {$K2$$Interface} from "com.mojang.datafixers.kinds.K2"

export class $View$Mu implements $K2$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $View$Mu$$Type = ($View$Mu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $View$Mu$$Original = $View$Mu;}
declare module "com.mojang.datafixers.View" {
import {$App2$$Interface} from "com.mojang.datafixers.kinds.App2"
import {$DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Optional} from "java.util.Optional"
import {$Type, $Type$$Type} from "com.mojang.datafixers.types.Type"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$View$Mu} from "com.mojang.datafixers.View$Mu"
import {$PointFreeRule$$Type} from "com.mojang.datafixers.functions.PointFreeRule"
import {$PointFree, $PointFree$$Type} from "com.mojang.datafixers.functions.PointFree"
import {$Record} from "java.lang.Record"

export class $View<A, B> extends $Record implements $App2$$Interface<($View$Mu), (A), (B)> {
constructor(arg0: $PointFree$$Type<($Function$$Type<(A), (B)>)>)

public "type"(): $Type<(A)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "newType"(): $Type<(B)>
public "flatMap"<C>(arg0: $Function$$Type<($Type<(B)>), ($View$$Type<(B), (C)>)>): $View<(A), (C)>
public "function"(): $PointFree<($Function<(A), (B)>)>
public static "create"<A, B>(arg0: $PointFree$$Type<($Function$$Type<(A), (B)>)>): $View<(A), (B)>
public static "create"<A, B>(arg0: StringJS, arg1: $Type$$Type<(A)>, arg2: $Type$$Type<(B)>, arg3: $Function$$Type<($DynamicOps<(never)>), ($Function$$Type<(A), (B)>)>): $View<(A), (B)>
public "compose"<C>(arg0: $View$$Type<(C), (A)>): $View<(C), (B)>
public "rewrite"(arg0: $PointFreeRule$$Type): $Optional<($View<(A), (B)>)>
public static "nopView"<A>(arg0: $Type$$Type<(A)>): $View<(A), (A)>
public "funcType"(): $Type<($Function<(A), (B)>)>
public "isNop"(): boolean
public "rewriteOrNop"(arg0: $PointFreeRule$$Type): $View<(A), (B)>
get "nop"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $View$$Type<A, B> = ({"function"?: $PointFree$$Type<($Function$$Type<(A), (B)>)>}) | ([arg?: $PointFree$$Type<($Function$$Type<(A), (B)>)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $View$$Original<A, B> = $View<(A), (B)>;}
declare module "com.mojang.datafixers.Products$P3" {
import {$Products$P4, $Products$P4$$Type} from "com.mojang.datafixers.Products$P4"
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$Products$P2$$Type} from "com.mojang.datafixers.Products$P2"
import {$Products$P7} from "com.mojang.datafixers.Products$P7"
import {$Products$P8} from "com.mojang.datafixers.Products$P8"
import {$Products$P5, $Products$P5$$Type} from "com.mojang.datafixers.Products$P5"
import {$Products$P6} from "com.mojang.datafixers.Products$P6"
import {$K1} from "com.mojang.datafixers.kinds.K1"
import {$Applicative$$Type} from "com.mojang.datafixers.kinds.Applicative"
import {$Function3$$Type} from "com.mojang.datafixers.util.Function3"

export class $Products$P3<F extends $K1, T1, T2, T3> {
constructor(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>)

public "apply"<R>(arg0: $Applicative$$Type<(F), (never)>, arg1: $Function3$$Type<(T1), (T2), (T3), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$$Type<(F), (never)>, arg1: $App$$Type<(F), ($Function3$$Type<(T1), (T2), (T3), (R)>)>): $App<(F), (R)>
public "t1"(): $App<(F), (T1)>
public "t2"(): $App<(F), (T2)>
public "and"<T4, T5, T6, T7, T8>(arg0: $Products$P5$$Type<(F), (T4), (T5), (T6), (T7), (T8)>): $Products$P8<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>
public "and"<T4, T5>(arg0: $Products$P2$$Type<(F), (T4), (T5)>): $Products$P5<(F), (T1), (T2), (T3), (T4), (T5)>
public "and"<T4, T5, T6, T7>(arg0: $Products$P4$$Type<(F), (T4), (T5), (T6), (T7)>): $Products$P7<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7)>
public "and"<T4>(arg0: $App$$Type<(F), (T4)>): $Products$P4<(F), (T1), (T2), (T3), (T4)>
public "and"<T4, T5, T6>(arg0: $Products$P3$$Type<(F), (T4), (T5), (T6)>): $Products$P6<(F), (T1), (T2), (T3), (T4), (T5), (T6)>
public "t3"(): $App<(F), (T3)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P3$$Type<F, T1, T2, T3> = ($Products$P3<(F), (T1), (T2), (T3)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Products$P3$$Original<F, T1, T2, T3> = $Products$P3<(F), (T1), (T2), (T3)>;}
declare module "com.mojang.datafixers.Products$P4" {
import {$Products$P3$$Type} from "com.mojang.datafixers.Products$P3"
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$Products$P2$$Type} from "com.mojang.datafixers.Products$P2"
import {$Products$P7} from "com.mojang.datafixers.Products$P7"
import {$Products$P8} from "com.mojang.datafixers.Products$P8"
import {$Products$P5} from "com.mojang.datafixers.Products$P5"
import {$Products$P6} from "com.mojang.datafixers.Products$P6"
import {$K1} from "com.mojang.datafixers.kinds.K1"
import {$Applicative$$Type} from "com.mojang.datafixers.kinds.Applicative"
import {$Function4$$Type} from "com.mojang.datafixers.util.Function4"

export class $Products$P4<F extends $K1, T1, T2, T3, T4> {
constructor(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>)

public "apply"<R>(arg0: $Applicative$$Type<(F), (never)>, arg1: $Function4$$Type<(T1), (T2), (T3), (T4), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$$Type<(F), (never)>, arg1: $App$$Type<(F), ($Function4$$Type<(T1), (T2), (T3), (T4), (R)>)>): $App<(F), (R)>
public "t1"(): $App<(F), (T1)>
public "t2"(): $App<(F), (T2)>
public "and"<T5, T6, T7, T8>(arg0: $Products$P4$$Type<(F), (T5), (T6), (T7), (T8)>): $Products$P8<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>
public "and"<T5>(arg0: $App$$Type<(F), (T5)>): $Products$P5<(F), (T1), (T2), (T3), (T4), (T5)>
public "and"<T5, T6, T7>(arg0: $Products$P3$$Type<(F), (T5), (T6), (T7)>): $Products$P7<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7)>
public "and"<T5, T6>(arg0: $Products$P2$$Type<(F), (T5), (T6)>): $Products$P6<(F), (T1), (T2), (T3), (T4), (T5), (T6)>
public "t3"(): $App<(F), (T3)>
public "t4"(): $App<(F), (T4)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P4$$Type<F, T1, T2, T3, T4> = ($Products$P4<(F), (T1), (T2), (T3), (T4)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Products$P4$$Original<F, T1, T2, T3, T4> = $Products$P4<(F), (T1), (T2), (T3), (T4)>;}
declare module "com.mojang.datafixers.Products$P1" {
import {$Products$P3, $Products$P3$$Type} from "com.mojang.datafixers.Products$P3"
import {$Products$P4, $Products$P4$$Type} from "com.mojang.datafixers.Products$P4"
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$Products$P2, $Products$P2$$Type} from "com.mojang.datafixers.Products$P2"
import {$Products$P7, $Products$P7$$Type} from "com.mojang.datafixers.Products$P7"
import {$Products$P8} from "com.mojang.datafixers.Products$P8"
import {$Function$$Type} from "java.util.function.Function"
import {$Products$P5, $Products$P5$$Type} from "com.mojang.datafixers.Products$P5"
import {$Products$P6, $Products$P6$$Type} from "com.mojang.datafixers.Products$P6"
import {$K1} from "com.mojang.datafixers.kinds.K1"
import {$Applicative$$Type} from "com.mojang.datafixers.kinds.Applicative"

export class $Products$P1<F extends $K1, T1> {
constructor(arg0: $App$$Type<(F), (T1)>)

public "apply"<R>(arg0: $Applicative$$Type<(F), (never)>, arg1: $Function$$Type<(T1), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$$Type<(F), (never)>, arg1: $App$$Type<(F), ($Function$$Type<(T1), (R)>)>): $App<(F), (R)>
public "t1"(): $App<(F), (T1)>
public "and"<T2, T3, T4, T5, T6, T7>(arg0: $Products$P6$$Type<(F), (T2), (T3), (T4), (T5), (T6), (T7)>): $Products$P7<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7)>
public "and"<T2, T3, T4, T5, T6, T7, T8>(arg0: $Products$P7$$Type<(F), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>): $Products$P8<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>
public "and"<T2, T3, T4, T5>(arg0: $Products$P4$$Type<(F), (T2), (T3), (T4), (T5)>): $Products$P5<(F), (T1), (T2), (T3), (T4), (T5)>
public "and"<T2, T3>(arg0: $Products$P2$$Type<(F), (T2), (T3)>): $Products$P3<(F), (T1), (T2), (T3)>
public "and"<T2, T3, T4>(arg0: $Products$P3$$Type<(F), (T2), (T3), (T4)>): $Products$P4<(F), (T1), (T2), (T3), (T4)>
public "and"<T2>(arg0: $App$$Type<(F), (T2)>): $Products$P2<(F), (T1), (T2)>
public "and"<T2, T3, T4, T5, T6>(arg0: $Products$P5$$Type<(F), (T2), (T3), (T4), (T5), (T6)>): $Products$P6<(F), (T1), (T2), (T3), (T4), (T5), (T6)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P1$$Type<F, T1> = ($Products$P1<(F), (T1)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Products$P1$$Original<F, T1> = $Products$P1<(F), (T1)>;}
declare module "com.mojang.datafixers.Products$P2" {
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$Products$P3, $Products$P3$$Type} from "com.mojang.datafixers.Products$P3"
import {$Products$P4, $Products$P4$$Type} from "com.mojang.datafixers.Products$P4"
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$Products$P7} from "com.mojang.datafixers.Products$P7"
import {$Products$P8} from "com.mojang.datafixers.Products$P8"
import {$Products$P5, $Products$P5$$Type} from "com.mojang.datafixers.Products$P5"
import {$Products$P6, $Products$P6$$Type} from "com.mojang.datafixers.Products$P6"
import {$K1} from "com.mojang.datafixers.kinds.K1"
import {$Applicative$$Type} from "com.mojang.datafixers.kinds.Applicative"

export class $Products$P2<F extends $K1, T1, T2> {
constructor(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>)

public "apply"<R>(arg0: $Applicative$$Type<(F), (never)>, arg1: $BiFunction$$Type<(T1), (T2), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$$Type<(F), (never)>, arg1: $App$$Type<(F), ($BiFunction$$Type<(T1), (T2), (R)>)>): $App<(F), (R)>
public "t1"(): $App<(F), (T1)>
public "t2"(): $App<(F), (T2)>
public "and"<T3, T4, T5, T6, T7, T8>(arg0: $Products$P6$$Type<(F), (T3), (T4), (T5), (T6), (T7), (T8)>): $Products$P8<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>
public "and"<T3, T4, T5, T6, T7>(arg0: $Products$P5$$Type<(F), (T3), (T4), (T5), (T6), (T7)>): $Products$P7<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7)>
public "and"<T3, T4, T5>(arg0: $Products$P3$$Type<(F), (T3), (T4), (T5)>): $Products$P5<(F), (T1), (T2), (T3), (T4), (T5)>
public "and"<T3, T4, T5, T6>(arg0: $Products$P4$$Type<(F), (T3), (T4), (T5), (T6)>): $Products$P6<(F), (T1), (T2), (T3), (T4), (T5), (T6)>
public "and"<T3, T4>(arg0: $Products$P2$$Type<(F), (T3), (T4)>): $Products$P4<(F), (T1), (T2), (T3), (T4)>
public "and"<T3>(arg0: $App$$Type<(F), (T3)>): $Products$P3<(F), (T1), (T2), (T3)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P2$$Type<F, T1, T2> = ($Products$P2<(F), (T1), (T2)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Products$P2$$Original<F, T1, T2> = $Products$P2<(F), (T1), (T2)>;}
declare module "com.mojang.datafixers.Products$P7" {
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$Products$P8} from "com.mojang.datafixers.Products$P8"
import {$K1} from "com.mojang.datafixers.kinds.K1"
import {$Function7$$Type} from "com.mojang.datafixers.util.Function7"
import {$Applicative$$Type} from "com.mojang.datafixers.kinds.Applicative"

export class $Products$P7<F extends $K1, T1, T2, T3, T4, T5, T6, T7> {
constructor(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>)

public "apply"<R>(arg0: $Applicative$$Type<(F), (never)>, arg1: $Function7$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$$Type<(F), (never)>, arg1: $App$$Type<(F), ($Function7$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (R)>)>): $App<(F), (R)>
public "t1"(): $App<(F), (T1)>
public "t2"(): $App<(F), (T2)>
public "and"<T8>(arg0: $App$$Type<(F), (T8)>): $Products$P8<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>
public "t3"(): $App<(F), (T3)>
public "t6"(): $App<(F), (T6)>
public "t4"(): $App<(F), (T4)>
public "t7"(): $App<(F), (T7)>
public "t5"(): $App<(F), (T5)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P7$$Type<F, T1, T2, T3, T4, T5, T6, T7> = ($Products$P7<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Products$P7$$Original<F, T1, T2, T3, T4, T5, T6, T7> = $Products$P7<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7)>;}
declare module "com.mojang.datafixers.Products$P8" {
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$K1} from "com.mojang.datafixers.kinds.K1"
import {$Function8$$Type} from "com.mojang.datafixers.util.Function8"
import {$Applicative$$Type} from "com.mojang.datafixers.kinds.Applicative"

export class $Products$P8<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8> {
constructor(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>)

public "apply"<R>(arg0: $Applicative$$Type<(F), (never)>, arg1: $Function8$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$$Type<(F), (never)>, arg1: $App$$Type<(F), ($Function8$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>)>): $App<(F), (R)>
public "t1"(): $App<(F), (T1)>
public "t2"(): $App<(F), (T2)>
public "t3"(): $App<(F), (T3)>
public "t6"(): $App<(F), (T6)>
public "t4"(): $App<(F), (T4)>
public "t8"(): $App<(F), (T8)>
public "t7"(): $App<(F), (T7)>
public "t5"(): $App<(F), (T5)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P8$$Type<F, T1, T2, T3, T4, T5, T6, T7, T8> = ($Products$P8<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Products$P8$$Original<F, T1, T2, T3, T4, T5, T6, T7, T8> = $Products$P8<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>;}
declare module "com.mojang.datafixers.Products$P5" {
import {$Products$P3$$Type} from "com.mojang.datafixers.Products$P3"
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$Products$P2$$Type} from "com.mojang.datafixers.Products$P2"
import {$Products$P7} from "com.mojang.datafixers.Products$P7"
import {$Products$P8} from "com.mojang.datafixers.Products$P8"
import {$Products$P6} from "com.mojang.datafixers.Products$P6"
import {$K1} from "com.mojang.datafixers.kinds.K1"
import {$Function5$$Type} from "com.mojang.datafixers.util.Function5"
import {$Applicative$$Type} from "com.mojang.datafixers.kinds.Applicative"

export class $Products$P5<F extends $K1, T1, T2, T3, T4, T5> {
constructor(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>)

public "apply"<R>(arg0: $Applicative$$Type<(F), (never)>, arg1: $Function5$$Type<(T1), (T2), (T3), (T4), (T5), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$$Type<(F), (never)>, arg1: $App$$Type<(F), ($Function5$$Type<(T1), (T2), (T3), (T4), (T5), (R)>)>): $App<(F), (R)>
public "t1"(): $App<(F), (T1)>
public "t2"(): $App<(F), (T2)>
public "and"<T6>(arg0: $App$$Type<(F), (T6)>): $Products$P6<(F), (T1), (T2), (T3), (T4), (T5), (T6)>
public "and"<T6, T7, T8>(arg0: $Products$P3$$Type<(F), (T6), (T7), (T8)>): $Products$P8<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>
public "and"<T6, T7>(arg0: $Products$P2$$Type<(F), (T6), (T7)>): $Products$P7<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7)>
public "t3"(): $App<(F), (T3)>
public "t4"(): $App<(F), (T4)>
public "t5"(): $App<(F), (T5)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P5$$Type<F, T1, T2, T3, T4, T5> = ($Products$P5<(F), (T1), (T2), (T3), (T4), (T5)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Products$P5$$Original<F, T1, T2, T3, T4, T5> = $Products$P5<(F), (T1), (T2), (T3), (T4), (T5)>;}
declare module "com.mojang.datafixers.Products$P6" {
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$Products$P2$$Type} from "com.mojang.datafixers.Products$P2"
import {$Products$P7} from "com.mojang.datafixers.Products$P7"
import {$Products$P8} from "com.mojang.datafixers.Products$P8"
import {$K1} from "com.mojang.datafixers.kinds.K1"
import {$Function6$$Type} from "com.mojang.datafixers.util.Function6"
import {$Applicative$$Type} from "com.mojang.datafixers.kinds.Applicative"

export class $Products$P6<F extends $K1, T1, T2, T3, T4, T5, T6> {
constructor(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>)

public "apply"<R>(arg0: $Applicative$$Type<(F), (never)>, arg1: $Function6$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$$Type<(F), (never)>, arg1: $App$$Type<(F), ($Function6$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (R)>)>): $App<(F), (R)>
public "t1"(): $App<(F), (T1)>
public "t2"(): $App<(F), (T2)>
public "and"<T7, T8>(arg0: $Products$P2$$Type<(F), (T7), (T8)>): $Products$P8<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>
public "and"<T7>(arg0: $App$$Type<(F), (T7)>): $Products$P7<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7)>
public "t3"(): $App<(F), (T3)>
public "t6"(): $App<(F), (T6)>
public "t4"(): $App<(F), (T4)>
public "t5"(): $App<(F), (T5)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P6$$Type<F, T1, T2, T3, T4, T5, T6> = ($Products$P6<(F), (T1), (T2), (T3), (T4), (T5), (T6)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Products$P6$$Original<F, T1, T2, T3, T4, T5, T6> = $Products$P6<(F), (T1), (T2), (T3), (T4), (T5), (T6)>;}
declare module "com.mojang.datafixers.Products$P9" {
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$Function9$$Type} from "com.mojang.datafixers.util.Function9"
import {$K1} from "com.mojang.datafixers.kinds.K1"
import {$Applicative$$Type} from "com.mojang.datafixers.kinds.Applicative"

export class $Products$P9<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9> {
constructor(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>)

public "apply"<R>(arg0: $Applicative$$Type<(F), (never)>, arg1: $Function9$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$$Type<(F), (never)>, arg1: $App$$Type<(F), ($Function9$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>)>): $App<(F), (R)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P9$$Type<F, T1, T2, T3, T4, T5, T6, T7, T8, T9> = ($Products$P9<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Products$P9$$Original<F, T1, T2, T3, T4, T5, T6, T7, T8, T9> = $Products$P9<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9)>;}
declare module "com.mojang.datafixers.Products$P10" {
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$K1} from "com.mojang.datafixers.kinds.K1"
import {$Applicative$$Type} from "com.mojang.datafixers.kinds.Applicative"
import {$Function10$$Type} from "com.mojang.datafixers.util.Function10"

export class $Products$P10<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10> {
constructor(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>)

public "apply"<R>(arg0: $Applicative$$Type<(F), (never)>, arg1: $Function10$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$$Type<(F), (never)>, arg1: $App$$Type<(F), ($Function10$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (R)>)>): $App<(F), (R)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P10$$Type<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10> = ($Products$P10<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Products$P10$$Original<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10> = $Products$P10<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10)>;}
declare module "com.mojang.datafixers.Products$P11" {
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$K1} from "com.mojang.datafixers.kinds.K1"
import {$Applicative$$Type} from "com.mojang.datafixers.kinds.Applicative"
import {$Function11$$Type} from "com.mojang.datafixers.util.Function11"

export class $Products$P11<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11> {
constructor(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>)

public "apply"<R>(arg0: $Applicative$$Type<(F), (never)>, arg1: $Function11$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$$Type<(F), (never)>, arg1: $App$$Type<(F), ($Function11$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (R)>)>): $App<(F), (R)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P11$$Type<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11> = ($Products$P11<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Products$P11$$Original<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11> = $Products$P11<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11)>;}
declare module "com.mojang.datafixers.Products$P16" {
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$Function16$$Type} from "com.mojang.datafixers.util.Function16"
import {$K1} from "com.mojang.datafixers.kinds.K1"
import {$Applicative$$Type} from "com.mojang.datafixers.kinds.Applicative"

export class $Products$P16<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16> {
constructor(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>, arg12: $App$$Type<(F), (T13)>, arg13: $App$$Type<(F), (T14)>, arg14: $App$$Type<(F), (T15)>, arg15: $App$$Type<(F), (T16)>)

public "apply"<R>(arg0: $Applicative$$Type<(F), (never)>, arg1: $Function16$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$$Type<(F), (never)>, arg1: $App$$Type<(F), ($Function16$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>): $App<(F), (R)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P16$$Type<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16> = ($Products$P16<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Products$P16$$Original<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16> = $Products$P16<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16)>;}
declare module "com.mojang.datafixers.Products$P14" {
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$Function14$$Type} from "com.mojang.datafixers.util.Function14"
import {$K1} from "com.mojang.datafixers.kinds.K1"
import {$Applicative$$Type} from "com.mojang.datafixers.kinds.Applicative"

export class $Products$P14<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14> {
constructor(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>, arg12: $App$$Type<(F), (T13)>, arg13: $App$$Type<(F), (T14)>)

public "apply"<R>(arg0: $Applicative$$Type<(F), (never)>, arg1: $Function14$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$$Type<(F), (never)>, arg1: $App$$Type<(F), ($Function14$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>)>): $App<(F), (R)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P14$$Type<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14> = ($Products$P14<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Products$P14$$Original<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14> = $Products$P14<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14)>;}
declare module "com.mojang.datafixers.Products$P15" {
import {$Function15$$Type} from "com.mojang.datafixers.util.Function15"
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$K1} from "com.mojang.datafixers.kinds.K1"
import {$Applicative$$Type} from "com.mojang.datafixers.kinds.Applicative"

export class $Products$P15<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15> {
constructor(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>, arg12: $App$$Type<(F), (T13)>, arg13: $App$$Type<(F), (T14)>, arg14: $App$$Type<(F), (T15)>)

public "apply"<R>(arg0: $Applicative$$Type<(F), (never)>, arg1: $Function15$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$$Type<(F), (never)>, arg1: $App$$Type<(F), ($Function15$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>): $App<(F), (R)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P15$$Type<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15> = ($Products$P15<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Products$P15$$Original<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15> = $Products$P15<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15)>;}
declare module "com.mojang.datafixers.Products$P12" {
import {$Function12$$Type} from "com.mojang.datafixers.util.Function12"
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$K1} from "com.mojang.datafixers.kinds.K1"
import {$Applicative$$Type} from "com.mojang.datafixers.kinds.Applicative"

export class $Products$P12<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12> {
constructor(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>)

public "apply"<R>(arg0: $Applicative$$Type<(F), (never)>, arg1: $Function12$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$$Type<(F), (never)>, arg1: $App$$Type<(F), ($Function12$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (R)>)>): $App<(F), (R)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P12$$Type<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12> = ($Products$P12<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Products$P12$$Original<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12> = $Products$P12<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12)>;}
declare module "com.mojang.datafixers.Products$P13" {
import {$Function13$$Type} from "com.mojang.datafixers.util.Function13"
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$K1} from "com.mojang.datafixers.kinds.K1"
import {$Applicative$$Type} from "com.mojang.datafixers.kinds.Applicative"

export class $Products$P13<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13> {
constructor(arg0: $App$$Type<(F), (T1)>, arg1: $App$$Type<(F), (T2)>, arg2: $App$$Type<(F), (T3)>, arg3: $App$$Type<(F), (T4)>, arg4: $App$$Type<(F), (T5)>, arg5: $App$$Type<(F), (T6)>, arg6: $App$$Type<(F), (T7)>, arg7: $App$$Type<(F), (T8)>, arg8: $App$$Type<(F), (T9)>, arg9: $App$$Type<(F), (T10)>, arg10: $App$$Type<(F), (T11)>, arg11: $App$$Type<(F), (T12)>, arg12: $App$$Type<(F), (T13)>)

public "apply"<R>(arg0: $Applicative$$Type<(F), (never)>, arg1: $Function13$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$$Type<(F), (never)>, arg1: $App$$Type<(F), ($Function13$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (R)>)>): $App<(F), (R)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P13$$Type<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13> = ($Products$P13<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Products$P13$$Original<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13> = $Products$P13<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13)>;}
declare module "com.mojang.datafixers.Typed" {
import {$TypedOptic$$Type} from "com.mojang.datafixers.TypedOptic"
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Optional} from "java.util.Optional"
import {$Type, $Type$$Type} from "com.mojang.datafixers.types.Type"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$Function$$Type} from "java.util.function.Function"
import {$Either} from "com.mojang.datafixers.util.Either"
import {$DataResult} from "com.mojang.serialization.DataResult"
import {$List} from "java.util.List"
import {$Dynamic} from "com.mojang.serialization.Dynamic"
import {$OpticFinder$$Type} from "com.mojang.datafixers.OpticFinder"

export class $Typed<A> {
constructor(arg0: $Type$$Type<(A)>, arg1: $DynamicOps$$Type<(never)>, arg2: A)

public "getOrCreate"<FT>(arg0: $OpticFinder$$Type<(FT)>): FT
public "get"<FT>(arg0: $OpticFinder$$Type<(FT)>): FT
public "toString"(): StringJS
public "update"<FT, FR>(arg0: $OpticFinder$$Type<(FT)>, arg1: $Type$$Type<(FR)>, arg2: $Function$$Type<(FT), (FR)>): $Typed<(never)>
public "update"<FT>(arg0: $OpticFinder$$Type<(FT)>, arg1: $Function$$Type<(FT), (FT)>): $Typed<(never)>
public "getValue"(): A
public "out"(): $Typed<(A)>
public "set"<FT, FR>(arg0: $OpticFinder$$Type<(FT)>, arg1: $Typed$$Type<(FR)>): $Typed<(never)>
public "set"<FT, FR>(arg0: $OpticFinder$$Type<(FT)>, arg1: $Type$$Type<(FR)>, arg2: FR): $Typed<(never)>
public "set"<FT>(arg0: $OpticFinder$$Type<(FT)>, arg1: FT): $Typed<(never)>
public "write"(): $DataResult<($Dynamic<(never)>)>
public "getOrDefault"<FT>(arg0: $OpticFinder$$Type<(FT)>, arg1: FT): FT
public "getType"(): $Type<(A)>
public static "pair"<A, B>(arg0: $Typed$$Type<(A)>, arg1: $Typed$$Type<(B)>): $Typed<($Pair<(A), (B)>)>
public "getAll"<FT>(arg0: $TypedOptic$$Type<(A), (never), (FT), (never)>): $List<(FT)>
public "getOrCreateTyped"<FT>(arg0: $OpticFinder$$Type<(FT)>): $Typed<(FT)>
public "getOptional"<FT>(arg0: $OpticFinder$$Type<(FT)>): $Optional<(FT)>
public "updateRecursiveTyped"<FT, FR>(arg0: $OpticFinder$$Type<(FT)>, arg1: $Type$$Type<(FR)>, arg2: $Function$$Type<($Typed<(never)>), ($Typed$$Type<(never)>)>): $Typed<(never)>
public "updateRecursiveTyped"<FT>(arg0: $OpticFinder$$Type<(FT)>, arg1: $Function$$Type<($Typed<(never)>), ($Typed$$Type<(never)>)>): $Typed<(never)>
public "getTyped"<FT>(arg0: $OpticFinder$$Type<(FT)>): $Typed<(FT)>
public "getAllTyped"<FT>(arg0: $OpticFinder$$Type<(FT)>): $List<($Typed<(FT)>)>
public "getOps"(): $DynamicOps<(never)>
public "updateTyped"<FT, FR>(arg0: $OpticFinder$$Type<(FT)>, arg1: $Type$$Type<(FR)>, arg2: $Function$$Type<($Typed<(never)>), ($Typed$$Type<(never)>)>): $Typed<(never)>
public "updateTyped"<FT>(arg0: $OpticFinder$$Type<(FT)>, arg1: $Function$$Type<($Typed<(never)>), ($Typed$$Type<(never)>)>): $Typed<(never)>
public "updateRecursive"<FT>(arg0: $OpticFinder$$Type<(FT)>, arg1: $Function$$Type<(FT), (FT)>): $Typed<(never)>
public "updateRecursive"<FT, FR>(arg0: $OpticFinder$$Type<(FT)>, arg1: $Type$$Type<(FR)>, arg2: $Function$$Type<(FT), (FR)>): $Typed<(never)>
public "inj2"<B>(arg0: $Type$$Type<(B)>): $Typed<($Either<(B), (A)>)>
public "inj1"<B>(arg0: $Type$$Type<(B)>): $Typed<($Either<(A), (B)>)>
public "getOptionalTyped"<FT>(arg0: $OpticFinder$$Type<(FT)>): $Optional<($Typed<(FT)>)>
get "value"(): A
get "type"(): $Type<(A)>
get "ops"(): $DynamicOps<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Typed$$Type<A> = ($Typed<(A)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Typed$$Original<A> = $Typed<(A)>;}
declare module "com.mojang.datafixers.OpticFinder" {
import {$TypedOptic} from "com.mojang.datafixers.TypedOptic"
import {$Type, $Type$$Type} from "com.mojang.datafixers.types.Type"
import {$Either} from "com.mojang.datafixers.util.Either"
import {$Type$FieldNotFoundException} from "com.mojang.datafixers.types.Type$FieldNotFoundException"

export interface $OpticFinder$$Interface<FT> {
}

export class $OpticFinder<FT> implements $OpticFinder$$Interface {
 "type"(): $Type<(FT)>
 "findType"<A>(arg0: $Type$$Type<(A)>, arg1: boolean): $Either<($TypedOptic<(A), (never), (FT), (FT)>), ($Type$FieldNotFoundException)>
 "findType"<A, FR>(arg0: $Type$$Type<(A)>, arg1: $Type$$Type<(FR)>, arg2: boolean): $Either<($TypedOptic<(A), (never), (FT), (FR)>), ($Type$FieldNotFoundException)>
 "inField"<GT>(arg0: StringJS, arg1: $Type$$Type<(GT)>): $OpticFinder<(FT)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OpticFinder$$Type<FT> = ($OpticFinder<(FT)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OpticFinder$$Original<FT> = $OpticFinder<(FT)>;}
declare module "com.mojang.datafixers.DataFixer" {
import {$DSL$TypeReference$$Type} from "com.mojang.datafixers.DSL$TypeReference"
import {$Dynamic, $Dynamic$$Type} from "com.mojang.serialization.Dynamic"
import {$Schema} from "com.mojang.datafixers.schemas.Schema"

export interface $DataFixer$$Interface {
}

export class $DataFixer implements $DataFixer$$Interface {
 "update"<T>(arg0: $DSL$TypeReference$$Type, arg1: $Dynamic$$Type<(T)>, arg2: integer, arg3: integer): $Dynamic<(T)>
 "getSchema"(arg0: integer): $Schema
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataFixer$$Type = ($DataFixer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DataFixer$$Original = $DataFixer;}
declare module "com.mojang.datafixers.RewriteResult" {
import {$BitSet, $BitSet$$Type} from "java.util.BitSet"
import {$Type$$Type} from "com.mojang.datafixers.types.Type"
import {$View, $View$$Type} from "com.mojang.datafixers.View"
import {$Record} from "java.lang.Record"

export class $RewriteResult<A, B> extends $Record {
constructor(view: $View$$Type<(A), (B)>, recData: $BitSet$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "create"<A, B>(arg0: $View$$Type<(A), (B)>, arg1: $BitSet$$Type): $RewriteResult<(A), (B)>
public "compose"<C>(arg0: $RewriteResult$$Type<(C), (A)>): $RewriteResult<(C), (B)>
public "view"(): $View<(A), (B)>
public "recData"(): $BitSet
public static "nop"<A>(arg0: $Type$$Type<(A)>): $RewriteResult<(A), (A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RewriteResult$$Type<A, B> = ({"view"?: $View$$Type<(A), (B)>, "recData"?: $BitSet$$Type}) | ([view?: $View$$Type<(A), (B)>, recData?: $BitSet$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RewriteResult$$Original<A, B> = $RewriteResult<(A), (B)>;}
declare module "com.mojang.datafixers.DSL$TypeReference" {
import {$TypeTemplate} from "com.mojang.datafixers.types.templates.TypeTemplate"
import {$Schema$$Type} from "com.mojang.datafixers.schemas.Schema"

export interface $DSL$TypeReference$$Interface {

(): StringJS
}

export class $DSL$TypeReference implements $DSL$TypeReference$$Interface {
 "in"(arg0: $Schema$$Type): $TypeTemplate
 "typeName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DSL$TypeReference$$Type = (() => StringJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DSL$TypeReference$$Original = $DSL$TypeReference;}
