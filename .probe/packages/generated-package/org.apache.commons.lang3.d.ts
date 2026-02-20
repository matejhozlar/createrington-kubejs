declare module "org.apache.commons.lang3.math.Fraction" {
import {$Comparable$$Interface} from "java.lang.Comparable"

export class $Fraction extends number implements $Comparable$$Interface<($Fraction)> {
static readonly "FOUR_FIFTHS": $Fraction
static readonly "ZERO": $Fraction
static readonly "ONE_HALF": $Fraction
static readonly "TWO_QUARTERS": $Fraction
static readonly "THREE_FIFTHS": $Fraction
static readonly "ONE": $Fraction
static readonly "ONE_QUARTER": $Fraction
static readonly "TWO_THIRDS": $Fraction
static readonly "THREE_QUARTERS": $Fraction
static readonly "ONE_THIRD": $Fraction
static readonly "ONE_FIFTH": $Fraction
static readonly "TWO_FIFTHS": $Fraction

public "multiplyBy"(arg0: $Fraction$$Type): $Fraction
public "divideBy"(arg0: $Fraction$$Type): $Fraction
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "abs"(): $Fraction
public "pow"(arg0: integer): $Fraction
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $Fraction$$Type): integer
public "intValue"(): integer
public "longValue"(): long
public "floatValue"(): float
public "doubleValue"(): double
public "add"(arg0: $Fraction$$Type): $Fraction
public "reduce"(): $Fraction
public "subtract"(arg0: $Fraction$$Type): $Fraction
public "negate"(): $Fraction
public static "getFraction"(arg0: integer, arg1: integer): $Fraction
public static "getFraction"(arg0: integer, arg1: integer, arg2: integer): $Fraction
public static "getFraction"(arg0: StringJS): $Fraction
public static "getFraction"(arg0: double): $Fraction
public "getProperWhole"(): integer
public static "getReducedFraction"(arg0: integer, arg1: integer): $Fraction
public "getProperNumerator"(): integer
public "toProperString"(): StringJS
public "invert"(): $Fraction
public "getNumerator"(): integer
public "getDenominator"(): integer
get "properWhole"(): integer
get "properNumerator"(): integer
get "numerator"(): integer
get "denominator"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Fraction$$Type = ($Fraction);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Fraction$$Original = $Fraction;}
declare module "org.apache.commons.lang3.function.TriConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TriConsumer$$Interface<T, U, V> {

(arg0: T, arg1: U, arg2: V): void
}

export class $TriConsumer<T, U, V> implements $TriConsumer$$Interface {
 "accept"(arg0: T, arg1: U, arg2: V): void
 "andThen"(arg0: $TriConsumer$$Type<(T), (U), (V)>): $TriConsumer<(T), (U), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriConsumer$$Type<T, U, V> = ((arg0: T, arg1: U, arg2: V) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TriConsumer$$Original<T, U, V> = $TriConsumer<(T), (U), (V)>;}
declare module "org.apache.commons.lang3.mutable.MutableBoolean" {
import {$Mutable$$Interface} from "org.apache.commons.lang3.mutable.Mutable"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Serializable$$Interface} from "java.io.Serializable"

export class $MutableBoolean implements $Mutable$$Interface<(boolean)>, $Serializable$$Interface, $Comparable$$Interface<($MutableBoolean)> {
constructor(arg0: boolean)
constructor(arg0: boolean)
constructor()

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $MutableBoolean$$Type): integer
public "booleanValue"(): boolean
public "getValue"(): any
public "setValue"(arg0: boolean): void
public "setValue"(arg0: any): void
public "setValue"(arg0: boolean): void
public "toBoolean"(): boolean
public "isTrue"(): boolean
public "isFalse"(): boolean
public "setTrue"(): void
public "setFalse"(): void
get "value"(): any
set "value"(value: boolean)
set "value"(value: any)
set "value"(value: boolean)
get "true"(): boolean
get "false"(): boolean
get "true"(): void
get "false"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableBoolean$$Type = ($MutableBoolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MutableBoolean$$Original = $MutableBoolean;}
declare module "org.apache.commons.lang3.function.TriFunction" {
import {$Function$$Type} from "java.util.function.Function"

export interface $TriFunction$$Interface<T, U, V, R> {

(arg0: T, arg1: U, arg2: V): R
}

export class $TriFunction<T, U, V, R> implements $TriFunction$$Interface {
 "apply"(arg0: T, arg1: U, arg2: V): R
 "andThen"<W>(arg0: $Function$$Type<(R), (W)>): $TriFunction<(T), (U), (V), (W)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriFunction$$Type<T, U, V, R> = ((arg0: T, arg1: U, arg2: V) => R);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TriFunction$$Original<T, U, V, R> = $TriFunction<(T), (U), (V), (R)>;}
declare module "org.apache.commons.lang3.mutable.MutableFloat" {
import {$Mutable$$Interface} from "org.apache.commons.lang3.mutable.Mutable"
import {$Comparable$$Interface} from "java.lang.Comparable"

export class $MutableFloat extends number implements $Comparable$$Interface<($MutableFloat)>, $Mutable$$Interface<(number)> {
constructor(arg0: StringJS)
constructor(arg0: number)
constructor(arg0: float)
constructor()

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isInfinite"(): boolean
public "compareTo"(arg0: $MutableFloat$$Type): integer
public "compareTo"(arg0: any): integer
public "intValue"(): integer
public "longValue"(): long
public "floatValue"(): float
public "doubleValue"(): double
public "getValue"(): float
public "add"(arg0: float): void
public "add"(arg0: number): void
public "increment"(): void
public "isNaN"(): boolean
public "setValue"(arg0: float): void
public "setValue"(arg0: number): void
public "setValue"(arg0: any): void
public "getAndAdd"(arg0: number): float
public "getAndAdd"(arg0: float): float
public "incrementAndGet"(): float
public "getAndIncrement"(): float
public "getAndDecrement"(): float
public "decrementAndGet"(): float
public "addAndGet"(arg0: float): float
public "addAndGet"(arg0: number): float
public "subtract"(arg0: float): void
public "subtract"(arg0: number): void
public "decrement"(): void
public "toFloat"(): float
get "infinite"(): boolean
get "value"(): float
get "naN"(): boolean
set "value"(value: float)
set "value"(value: number)
set "value"(value: any)
get "andIncrement"(): float
get "andDecrement"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableFloat$$Type = ($MutableFloat);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MutableFloat$$Original = $MutableFloat;}
declare module "org.apache.commons.lang3.mutable.Mutable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Mutable$$Interface<T> {
get "value"(): T
set "value"(value: T)
}

export class $Mutable<T> implements $Mutable$$Interface {
 "getValue"(): T
 "setValue"(arg0: T): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Mutable$$Type<T> = ($Mutable<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Mutable$$Original<T> = $Mutable<(T)>;}
declare module "org.apache.commons.lang3.mutable.MutableObject" {
import {$Mutable$$Interface} from "org.apache.commons.lang3.mutable.Mutable"
import {$Serializable$$Interface} from "java.io.Serializable"

export class $MutableObject<T> implements $Mutable$$Interface<(T)>, $Serializable$$Interface {
constructor()
constructor(arg0: T)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getValue"(): T
public "setValue"(arg0: T): void
get "value"(): T
set "value"(value: T)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableObject$$Type<T> = ($MutableObject<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MutableObject$$Original<T> = $MutableObject<(T)>;}
