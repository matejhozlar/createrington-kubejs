declare module "com.mojang.datafixers.types.Type$TypeError" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Type$TypeError {
constructor(arg0: StringJS)

public "toString"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Type$TypeError$$Type = ($Type$TypeError);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Type$TypeError$$Original = $Type$TypeError;}
declare module "com.mojang.datafixers.types.templates.RecursivePoint$RecursivePointType" {
import {$TypedOptic} from "com.mojang.datafixers.TypedOptic"
import {$DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Type, $Type$$Type} from "com.mojang.datafixers.types.Type"
import {$Optional} from "java.util.Optional"
import {$TypeRewriteRule$$Type} from "com.mojang.datafixers.TypeRewriteRule"
import {$RecursiveTypeFamily, $RecursiveTypeFamily$$Type} from "com.mojang.datafixers.types.families.RecursiveTypeFamily"
import {$TypeTemplate} from "com.mojang.datafixers.types.templates.TypeTemplate"
import {$RewriteResult} from "com.mojang.datafixers.RewriteResult"
import {$TaggedChoice$TaggedChoiceType} from "com.mojang.datafixers.types.templates.TaggedChoice$TaggedChoiceType"
import {$Type$TypeMatcher$$Type} from "com.mojang.datafixers.types.Type$TypeMatcher"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Either} from "com.mojang.datafixers.util.Either"
import {$View} from "com.mojang.datafixers.View"
import {$PointFreeRule$$Type} from "com.mojang.datafixers.functions.PointFreeRule"
import {$Type$FieldNotFoundException} from "com.mojang.datafixers.types.Type$FieldNotFoundException"

export class $RecursivePoint$RecursivePointType<A> extends $Type<(A)> {
constructor(arg0: $RecursiveTypeFamily$$Type, arg1: integer, arg2: $Supplier$$Type<($Type$$Type<(A)>)>)

public "updateMu"(arg0: $RecursiveTypeFamily$$Type): $Type<(never)>
public "unfold"(): $Type<(A)>
public "index"(): integer
public "equals"(arg0: any, arg1: boolean, arg2: boolean): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "out"(): $View<(A), (A)>
public "in"(): $View<(A), (A)>
public "all"(arg0: $TypeRewriteRule$$Type, arg1: boolean, arg2: boolean): $RewriteResult<(A), (never)>
public "family"(): $RecursiveTypeFamily
public "point"(arg0: $DynamicOps$$Type<(never)>): $Optional<(A)>
public "one"(arg0: $TypeRewriteRule$$Type): $Optional<($RewriteResult<(A), (never)>)>
public "everywhere"(arg0: $TypeRewriteRule$$Type, arg1: $PointFreeRule$$Type, arg2: boolean, arg3: boolean): $Optional<($RewriteResult<(A), (never)>)>
public "findChoiceType"(arg0: StringJS, arg1: integer): $Optional<($TaggedChoice$TaggedChoiceType<(never)>)>
public "findFieldTypeOpt"(arg0: StringJS): $Optional<($Type<(never)>)>
public "buildTemplate"(): $TypeTemplate
public "findCheckedType"(arg0: integer): $Optional<($Type<(never)>)>
public "findTypeInChildren"<FT, FR>(arg0: $Type$$Type<(FT)>, arg1: $Type$$Type<(FR)>, arg2: $Type$TypeMatcher$$Type<(FT), (FR)>, arg3: boolean): $Either<($TypedOptic<(A), (never), (FT), (FR)>), ($Type$FieldNotFoundException)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecursivePoint$RecursivePointType$$Type<A> = ($RecursivePoint$RecursivePointType<(A)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecursivePoint$RecursivePointType$$Original<A> = $RecursivePoint$RecursivePointType<(A)>;}
declare module "com.mojang.datafixers.types.families.Algebra" {
import {$RewriteResult} from "com.mojang.datafixers.RewriteResult"

export interface $Algebra$$Interface {
}

export class $Algebra implements $Algebra$$Interface {
 "toString"(arg0: integer): StringJS
 "apply"(arg0: integer): $RewriteResult<(never), (never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Algebra$$Type = ($Algebra);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Algebra$$Original = $Algebra;}
declare module "com.mojang.datafixers.types.Type" {
import {$App$$Type, $App$$Interface} from "com.mojang.datafixers.kinds.App"
import {$TypedOptic, $TypedOptic$$Type} from "com.mojang.datafixers.TypedOptic"
import {$DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Optional} from "java.util.Optional"
import {$TypeRewriteRule$$Type} from "com.mojang.datafixers.TypeRewriteRule"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$DataResult} from "com.mojang.serialization.DataResult"
import {$Type$Mu, $Type$Mu$$Type} from "com.mojang.datafixers.types.Type$Mu"
import {$Dynamic, $Dynamic$$Type} from "com.mojang.serialization.Dynamic"
import {$RecursiveTypeFamily$$Type} from "com.mojang.datafixers.types.families.RecursiveTypeFamily"
import {$OpticFinder, $OpticFinder$$Type} from "com.mojang.datafixers.OpticFinder"
import {$TypeTemplate} from "com.mojang.datafixers.types.templates.TypeTemplate"
import {$RewriteResult, $RewriteResult$$Type} from "com.mojang.datafixers.RewriteResult"
import {$TaggedChoice$TaggedChoiceType} from "com.mojang.datafixers.types.templates.TaggedChoice$TaggedChoiceType"
import {$Type$TypeMatcher$$Type} from "com.mojang.datafixers.types.Type$TypeMatcher"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Typed, $Typed$$Type} from "com.mojang.datafixers.Typed"
import {$Either} from "com.mojang.datafixers.util.Either"
import {$PointFreeRule$$Type} from "com.mojang.datafixers.functions.PointFreeRule"
import {$Type$FieldNotFoundException} from "com.mojang.datafixers.types.Type$FieldNotFoundException"

export class $Type<A> implements $App$$Interface<($Type$Mu), (A)> {
constructor()

public "findType"<FT, FR>(arg0: $Type$$Type<(FT)>, arg1: $Type$$Type<(FR)>, arg2: $Type$TypeMatcher$$Type<(FT), (FR)>, arg3: boolean): $Either<($TypedOptic<(A), (never), (FT), (FR)>), ($Type$FieldNotFoundException)>
public "updateMu"(arg0: $RecursiveTypeFamily$$Type): $Type<(never)>
public static "opticView"<S, T, A, B>(arg0: $Type$$Type<(S)>, arg1: $RewriteResult$$Type<(A), (B)>, arg2: $TypedOptic$$Type<(S), (T), (A), (B)>): $RewriteResult<(S), (T)>
public "getSetType"<FT, FR>(arg0: $OpticFinder$$Type<(FT)>, arg1: $Type$$Type<(FR)>): $Type<(never)>
public "equals"(arg0: any): boolean
public "equals"(arg0: any, arg1: boolean, arg2: boolean): boolean
public "write"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: A): $DataResult<(T)>
public "read"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: $TypeRewriteRule$$Type, arg2: $PointFreeRule$$Type, arg3: T): $DataResult<($Pair<($Optional<(never)>), (T)>)>
public "read"<T>(arg0: $Dynamic$$Type<(T)>): $DataResult<($Pair<(A), ($Dynamic<(T)>)>)>
public "finder"(): $OpticFinder<(A)>
public "all"(arg0: $TypeRewriteRule$$Type, arg1: boolean, arg2: boolean): $RewriteResult<(A), (never)>
public static "unbox"<A>(arg0: $App$$Type<($Type$Mu$$Type), (A)>): $Type<(A)>
public "template"(): $TypeTemplate
public "findField"(arg0: StringJS): $OpticFinder<(never)>
public "rewrite"(arg0: $TypeRewriteRule$$Type, arg1: $PointFreeRule$$Type): $Optional<($RewriteResult<(A), (never)>)>
public "point"(arg0: $DynamicOps$$Type<(never)>): $Optional<(A)>
public "one"(arg0: $TypeRewriteRule$$Type): $Optional<($RewriteResult<(A), (never)>)>
public "codec"(): $Codec<(A)>
public "ifSame"<B>(arg0: $Typed$$Type<(B)>): $Optional<(A)>
public "ifSame"<B>(arg0: $Type$$Type<(B)>, arg1: $RewriteResult$$Type<(B), (never)>): $Optional<($RewriteResult<(A), (never)>)>
public "ifSame"<B>(arg0: $Type$$Type<(B)>, arg1: B): $Optional<(A)>
public "readTyped"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: T): $DataResult<($Pair<($Typed<(A)>), (T)>)>
public "readTyped"<T>(arg0: $Dynamic$$Type<(T)>): $DataResult<($Pair<($Typed<(A)>), (T)>)>
public "everywhere"(arg0: $TypeRewriteRule$$Type, arg1: $PointFreeRule$$Type, arg2: boolean, arg3: boolean): $Optional<($RewriteResult<(A), (never)>)>
public "pointTyped"(arg0: $DynamicOps$$Type<(never)>): $Optional<($Typed<(A)>)>
public "findChoiceType"(arg0: StringJS, arg1: integer): $Optional<($TaggedChoice$TaggedChoiceType<(never)>)>
public "findFieldType"(arg0: StringJS): $Type<(never)>
public "findFieldTypeOpt"(arg0: StringJS): $Optional<($Type<(never)>)>
public "buildTemplate"(): $TypeTemplate
public "readAndWrite"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: $Type$$Type<(never)>, arg2: $TypeRewriteRule$$Type, arg3: $PointFreeRule$$Type, arg4: T): $DataResult<(T)>
public "findCheckedType"(arg0: integer): $Optional<($Type<(never)>)>
public "findTypeInChildren"<FT, FR>(arg0: $Type$$Type<(FT)>, arg1: $Type$$Type<(FR)>, arg2: $Type$TypeMatcher$$Type<(FT), (FR)>, arg3: boolean): $Either<($TypedOptic<(A), (never), (FT), (FR)>), ($Type$FieldNotFoundException)>
public "rewriteOrNop"(arg0: $TypeRewriteRule$$Type): $RewriteResult<(A), (never)>
public "findTypeCached"<FT, FR>(arg0: $Type$$Type<(FT)>, arg1: $Type$$Type<(FR)>, arg2: $Type$TypeMatcher$$Type<(FT), (FR)>, arg3: boolean): $Either<($TypedOptic<(A), (never), (FT), (FR)>), ($Type$FieldNotFoundException)>
public "writeDynamic"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: A): $DataResult<($Dynamic<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Type$$Type<A> = ($Type<(A)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Type$$Original<A> = $Type<(A)>;}
declare module "com.mojang.datafixers.types.Type$Mu" {
import {$K1$$Interface} from "com.mojang.datafixers.kinds.K1"

export class $Type$Mu implements $K1$$Interface {
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Type$Mu$$Type = ($Type$Mu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Type$Mu$$Original = $Type$Mu;}
declare module "com.mojang.datafixers.types.templates.TypeTemplate" {
import {$RewriteResult, $RewriteResult$$Type} from "com.mojang.datafixers.RewriteResult"
import {$FamilyOptic, $FamilyOptic$$Type} from "com.mojang.datafixers.FamilyOptic"
import {$Type, $Type$$Type} from "com.mojang.datafixers.types.Type"
import {$TypeFamily, $TypeFamily$$Type} from "com.mojang.datafixers.types.families.TypeFamily"
import {$Either} from "com.mojang.datafixers.util.Either"
import {$Type$FieldNotFoundException} from "com.mojang.datafixers.types.Type$FieldNotFoundException"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"

export interface $TypeTemplate$$Interface {
}

export class $TypeTemplate implements $TypeTemplate$$Interface {
 "applyO"<A, B>(arg0: $FamilyOptic$$Type<(A), (B)>, arg1: $Type$$Type<(A)>, arg2: $Type$$Type<(B)>): $FamilyOptic<(A), (B)>
 "hmap"(arg0: $TypeFamily$$Type, arg1: $IntFunction$$Type<($RewriteResult$$Type<(never), (never)>)>): $IntFunction<($RewriteResult<(never), (never)>)>
 "size"(): integer
 "apply"(arg0: $TypeFamily$$Type): $TypeFamily
 "toSimpleType"(): $Type<(never)>
 "findFieldOrType"<A, B>(arg0: integer, arg1: StringJS, arg2: $Type$$Type<(A)>, arg3: $Type$$Type<(B)>): $Either<($TypeTemplate), ($Type$FieldNotFoundException)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeTemplate$$Type = ($TypeTemplate);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TypeTemplate$$Original = $TypeTemplate;}
declare module "com.mojang.datafixers.types.families.RecursiveTypeFamily" {
import {$FamilyOptic} from "com.mojang.datafixers.FamilyOptic"
import {$TypedOptic, $TypedOptic$$Type} from "com.mojang.datafixers.TypedOptic"
import {$Type$$Type} from "com.mojang.datafixers.types.Type"
import {$TypeFamily$$Interface} from "com.mojang.datafixers.types.families.TypeFamily"
import {$Optional} from "java.util.Optional"
import {$TypeRewriteRule$$Type} from "com.mojang.datafixers.TypeRewriteRule"
import {$RecursivePoint$RecursivePointType} from "com.mojang.datafixers.types.templates.RecursivePoint$RecursivePointType"
import {$Algebra$$Type} from "com.mojang.datafixers.types.families.Algebra"
import {$TypeTemplate, $TypeTemplate$$Type} from "com.mojang.datafixers.types.templates.TypeTemplate"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"
import {$RewriteResult} from "com.mojang.datafixers.RewriteResult"
import {$Type$TypeMatcher$$Type} from "com.mojang.datafixers.types.Type$TypeMatcher"
import {$Either} from "com.mojang.datafixers.util.Either"
import {$PointFreeRule$$Type} from "com.mojang.datafixers.functions.PointFreeRule"
import {$Type$FieldNotFoundException} from "com.mojang.datafixers.types.Type$FieldNotFoundException"

export class $RecursiveTypeFamily implements $TypeFamily$$Interface {
constructor(arg0: StringJS, arg1: $TypeTemplate$$Type)

public "fold"(arg0: $Algebra$$Type, arg1: $RecursiveTypeFamily$$Type): $IntFunction<($RewriteResult<(never), (never)>)>
public "findType"<A, B>(arg0: integer, arg1: $Type$$Type<(A)>, arg2: $Type$$Type<(B)>, arg3: $Type$TypeMatcher$$Type<(A), (B)>, arg4: boolean): $Either<($TypedOptic<(never), (never), (A), (B)>), ($Type$FieldNotFoundException)>
public "name"(): StringJS
public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "apply"(arg0: integer): $RecursivePoint$RecursivePointType<(never)>
public "template"(): $TypeTemplate
public "everywhere"(arg0: integer, arg1: $TypeRewriteRule$$Type, arg2: $PointFreeRule$$Type): $Optional<($RewriteResult<(never), (never)>)>
public "buildMuType"<A>(arg0: $Type$$Type<(A)>, arg1: $RecursiveTypeFamily$$Type): $RecursivePoint$RecursivePointType<(A)>
public static "familyOptic"<A, B>(arg0: $IntFunction$$Type<($TypedOptic$$Type<(never), (never), (A), (B)>)>): $FamilyOptic<(A), (B)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecursiveTypeFamily$$Type = ($RecursiveTypeFamily);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecursiveTypeFamily$$Original = $RecursiveTypeFamily;}
declare module "com.mojang.datafixers.types.Type$TypeMatcher" {
import {$TypedOptic, $TypedOptic$$Type} from "com.mojang.datafixers.TypedOptic"
import {$Type, $Type$$Type} from "com.mojang.datafixers.types.Type"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$Type$FieldNotFoundException, $Type$FieldNotFoundException$$Type} from "com.mojang.datafixers.types.Type$FieldNotFoundException"

export interface $Type$TypeMatcher$$Interface<FT, FR> {

(arg0: $Type<(S)>): $Either$$Type<($TypedOptic$$Type<(S), (never), (FT), (FR)>), ($Type$FieldNotFoundException$$Type)>
}

export class $Type$TypeMatcher<FT, FR> implements $Type$TypeMatcher$$Interface {
 "match"<S>(arg0: $Type$$Type<(S)>): $Either<($TypedOptic<(S), (never), (FT), (FR)>), ($Type$FieldNotFoundException)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Type$TypeMatcher$$Type<FT, FR> = ((arg0: $Type<(S)>) => $Either$$Type<($TypedOptic$$Type<(S), (never), (FT), (FR)>), ($Type$FieldNotFoundException$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Type$TypeMatcher$$Original<FT, FR> = $Type$TypeMatcher<(FT), (FR)>;}
declare module "com.mojang.datafixers.types.templates.TaggedChoice$TaggedChoiceType" {
import {$TypedOptic} from "com.mojang.datafixers.TypedOptic"
import {$Map} from "java.util.Map"
import {$DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Type, $Type$$Type} from "com.mojang.datafixers.types.Type"
import {$Optional} from "java.util.Optional"
import {$TypeRewriteRule$$Type} from "com.mojang.datafixers.TypeRewriteRule"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$RecursiveTypeFamily$$Type} from "com.mojang.datafixers.types.families.RecursiveTypeFamily"
import {$Object2ObjectMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ObjectMap"
import {$TypeTemplate} from "com.mojang.datafixers.types.templates.TypeTemplate"
import {$RewriteResult, $RewriteResult$$Type} from "com.mojang.datafixers.RewriteResult"
import {$Type$TypeMatcher$$Type} from "com.mojang.datafixers.types.Type$TypeMatcher"
import {$Typed} from "com.mojang.datafixers.Typed"
import {$Either} from "com.mojang.datafixers.util.Either"
import {$Type$FieldNotFoundException} from "com.mojang.datafixers.types.Type$FieldNotFoundException"

export class $TaggedChoice$TaggedChoiceType<K> extends $Type<($Pair<(K), (never)>)> {
constructor(arg0: StringJS, arg1: $Type$$Type<(K)>, arg2: $Object2ObjectMap$$Type<(K), ($Type$$Type<(never)>)>)

public "updateMu"(arg0: $RecursiveTypeFamily$$Type): $Type<(never)>
public "getName"(): StringJS
public "equals"(arg0: any, arg1: boolean, arg2: boolean): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "types"(): $Map<(K), ($Type<(never)>)>
public "all"(arg0: $TypeRewriteRule$$Type, arg1: boolean, arg2: boolean): $RewriteResult<($Pair<(K), (never)>), (never)>
public "point"(arg0: $DynamicOps$$Type<(never)>, arg1: K, arg2: any): $Optional<($Typed<($Pair<(K), (never)>)>)>
public "point"(arg0: $DynamicOps$$Type<(never)>): $Optional<($Pair<(K), (never)>)>
public "one"(arg0: $TypeRewriteRule$$Type): $Optional<($RewriteResult<($Pair<(K), (never)>), (never)>)>
public "getKeyType"(): $Type<(K)>
public "hasType"(arg0: K): boolean
public "findChoiceType"(arg0: StringJS, arg1: integer): $Optional<($TaggedChoice$TaggedChoiceType<(never)>)>
public "findFieldTypeOpt"(arg0: StringJS): $Optional<($Type<(never)>)>
public "buildTemplate"(): $TypeTemplate
public "findCheckedType"(arg0: integer): $Optional<($Type<(never)>)>
public "findTypeInChildren"<FT, FR>(arg0: $Type$$Type<(FT)>, arg1: $Type$$Type<(FR)>, arg2: $Type$TypeMatcher$$Type<(FT), (FR)>, arg3: boolean): $Either<($TypedOptic<($Pair<(K), (never)>), (never), (FT), (FR)>), ($Type$FieldNotFoundException)>
public static "elementResult"<K, FT, FR>(arg0: K, arg1: $TaggedChoice$TaggedChoiceType$$Type<(K)>, arg2: $RewriteResult$$Type<(FT), (FR)>): $RewriteResult<($Pair<(K), (never)>), ($Pair<(K), (never)>)>
get "name"(): StringJS
get "keyType"(): $Type<(K)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaggedChoice$TaggedChoiceType$$Type<K> = ($TaggedChoice$TaggedChoiceType<(K)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TaggedChoice$TaggedChoiceType$$Original<K> = $TaggedChoice$TaggedChoiceType<(K)>;}
declare module "com.mojang.datafixers.types.Type$FieldNotFoundException" {
import {$Type$TypeError} from "com.mojang.datafixers.types.Type$TypeError"

export class $Type$FieldNotFoundException extends $Type$TypeError {
constructor(arg0: StringJS)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Type$FieldNotFoundException$$Type = ($Type$FieldNotFoundException);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Type$FieldNotFoundException$$Original = $Type$FieldNotFoundException;}
declare module "com.mojang.datafixers.types.families.TypeFamily" {
import {$FamilyOptic} from "com.mojang.datafixers.FamilyOptic"
import {$TypedOptic$$Type} from "com.mojang.datafixers.TypedOptic"
import {$Type, $Type$$Type} from "com.mojang.datafixers.types.Type"
import {$IntFunction$$Type} from "java.util.function.IntFunction"

export interface $TypeFamily$$Interface {

(arg0: integer): $Type$$Type<(never)>
}

export class $TypeFamily implements $TypeFamily$$Interface {
 "apply"(arg0: integer): $Type<(never)>
static "familyOptic"<A, B>(arg0: $IntFunction$$Type<($TypedOptic$$Type<(never), (never), (A), (B)>)>): $FamilyOptic<(A), (B)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeFamily$$Type = ((arg0: integer) => $Type$$Type<(never)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TypeFamily$$Original = $TypeFamily;}
