declare module "java.util.function.LongToDoubleFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LongToDoubleFunction$$Interface {

(arg0: long): double
}

export class $LongToDoubleFunction implements $LongToDoubleFunction$$Interface {
 "applyAsDouble"(arg0: long): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongToDoubleFunction$$Type = ((arg0: long) => double);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LongToDoubleFunction$$Original = $LongToDoubleFunction;}
declare module "java.util.function.LongBinaryOperator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LongBinaryOperator$$Interface {

(arg0: long, arg1: long): long
}

export class $LongBinaryOperator implements $LongBinaryOperator$$Interface {
 "applyAsLong"(arg0: long, arg1: long): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongBinaryOperator$$Type = ((arg0: long, arg1: long) => long);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LongBinaryOperator$$Original = $LongBinaryOperator;}
declare module "java.util.function.Supplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Supplier$$Interface<T> {

(): T
}

export class $Supplier<T> implements $Supplier$$Interface {
 "get"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Supplier$$Type<T> = (() => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Supplier$$Original<T> = $Supplier<(T)>;}
declare module "java.util.function.DoubleToLongFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DoubleToLongFunction$$Interface {

(arg0: double): long
}

export class $DoubleToLongFunction implements $DoubleToLongFunction$$Interface {
 "applyAsLong"(arg0: double): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleToLongFunction$$Type = ((arg0: double) => long);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoubleToLongFunction$$Original = $DoubleToLongFunction;}
declare module "java.util.function.ObjDoubleConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ObjDoubleConsumer$$Interface<T> {

(arg0: T, arg1: double): void
}

export class $ObjDoubleConsumer<T> implements $ObjDoubleConsumer$$Interface {
 "accept"(arg0: T, arg1: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjDoubleConsumer$$Type<T> = ((arg0: T, arg1: double) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ObjDoubleConsumer$$Original<T> = $ObjDoubleConsumer<(T)>;}
declare module "java.util.function.IntToLongFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntToLongFunction$$Interface {

(arg0: integer): long
}

export class $IntToLongFunction implements $IntToLongFunction$$Interface {
 "applyAsLong"(arg0: integer): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntToLongFunction$$Type = ((arg0: integer) => long);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntToLongFunction$$Original = $IntToLongFunction;}
declare module "java.util.function.IntSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntSupplier$$Interface {

(): integer
get "asInt"(): integer
}

export class $IntSupplier implements $IntSupplier$$Interface {
 "getAsInt"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntSupplier$$Type = (() => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntSupplier$$Original = $IntSupplier;}
declare module "java.util.function.DoubleToIntFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DoubleToIntFunction$$Interface {

(arg0: double): integer
}

export class $DoubleToIntFunction implements $DoubleToIntFunction$$Interface {
 "applyAsInt"(arg0: double): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleToIntFunction$$Type = ((arg0: double) => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoubleToIntFunction$$Original = $DoubleToIntFunction;}
declare module "java.util.function.Predicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Predicate$$Interface<T> {

(arg0: T): boolean
}

export class $Predicate<T> implements $Predicate$$Interface {
 "test"(arg0: T): boolean
 "or"(arg0: $Predicate$$Type<(T)>): $Predicate<(T)>
 "negate"(): $Predicate<(T)>
 "and"(arg0: $Predicate$$Type<(T)>): $Predicate<(T)>
static "not"<T>(arg0: $Predicate$$Type<(T)>): $Predicate<(T)>
static "isEqual"<T>(arg0: any): $Predicate<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Predicate$$Type<T> = ((arg0: T) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Predicate$$Original<T> = $Predicate<(T)>;}
declare module "java.util.function.LongSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LongSupplier$$Interface {

(): long
get "asLong"(): long
}

export class $LongSupplier implements $LongSupplier$$Interface {
 "getAsLong"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongSupplier$$Type = (() => long);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LongSupplier$$Original = $LongSupplier;}
declare module "java.util.function.IntUnaryOperator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntUnaryOperator$$Interface {

(arg0: integer): integer
}

export class $IntUnaryOperator implements $IntUnaryOperator$$Interface {
static "identity"(): $IntUnaryOperator
 "applyAsInt"(arg0: integer): integer
 "compose"(arg0: $IntUnaryOperator$$Type): $IntUnaryOperator
 "andThen"(arg0: $IntUnaryOperator$$Type): $IntUnaryOperator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntUnaryOperator$$Type = ((arg0: integer) => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntUnaryOperator$$Original = $IntUnaryOperator;}
declare module "java.util.function.IntToDoubleFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntToDoubleFunction$$Interface {

(arg0: integer): double
}

export class $IntToDoubleFunction implements $IntToDoubleFunction$$Interface {
 "applyAsDouble"(arg0: integer): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntToDoubleFunction$$Type = ((arg0: integer) => double);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntToDoubleFunction$$Original = $IntToDoubleFunction;}
declare module "java.util.function.DoubleBinaryOperator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DoubleBinaryOperator$$Interface {

(arg0: double, arg1: double): double
}

export class $DoubleBinaryOperator implements $DoubleBinaryOperator$$Interface {
 "applyAsDouble"(arg0: double, arg1: double): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleBinaryOperator$$Type = ((arg0: double, arg1: double) => double);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoubleBinaryOperator$$Original = $DoubleBinaryOperator;}
declare module "java.util.function.ObjIntConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ObjIntConsumer$$Interface<T> {

(arg0: T, arg1: integer): void
}

export class $ObjIntConsumer<T> implements $ObjIntConsumer$$Interface {
 "accept"(arg0: T, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjIntConsumer$$Type<T> = ((arg0: T, arg1: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ObjIntConsumer$$Original<T> = $ObjIntConsumer<(T)>;}
declare module "java.util.function.DoubleSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DoubleSupplier$$Interface {

(): double
get "asDouble"(): double
}

export class $DoubleSupplier implements $DoubleSupplier$$Interface {
 "getAsDouble"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleSupplier$$Type = (() => double);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoubleSupplier$$Original = $DoubleSupplier;}
declare module "java.util.function.BiPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BiPredicate$$Interface<T, U> {

(arg0: T, arg1: U): boolean
}

export class $BiPredicate<T, U> implements $BiPredicate$$Interface {
 "test"(arg0: T, arg1: U): boolean
 "or"(arg0: $BiPredicate$$Type<(T), (U)>): $BiPredicate<(T), (U)>
 "negate"(): $BiPredicate<(T), (U)>
 "and"(arg0: $BiPredicate$$Type<(T), (U)>): $BiPredicate<(T), (U)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiPredicate$$Type<T, U> = ((arg0: T, arg1: U) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BiPredicate$$Original<T, U> = $BiPredicate<(T), (U)>;}
declare module "java.util.function.BiFunction" {
import {$Function$$Type} from "java.util.function.Function"

export interface $BiFunction$$Interface<T, U, R> {

(arg0: T, arg1: U): R
}

export class $BiFunction<T, U, R> implements $BiFunction$$Interface {
 "apply"(arg0: T, arg1: U): R
 "andThen"<V>(arg0: $Function$$Type<(R), (V)>): $BiFunction<(T), (U), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiFunction$$Type<T, U, R> = ((arg0: T, arg1: U) => R);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BiFunction$$Original<T, U, R> = $BiFunction<(T), (U), (R)>;}
declare module "java.util.function.BinaryOperator" {
import {$BiFunction, $BiFunction$$Interface} from "java.util.function.BiFunction"
import {$Comparator$$Type} from "java.util.Comparator"
import {$Function$$Type} from "java.util.function.Function"

export interface $BinaryOperator$$Interface<T> extends $BiFunction$$Interface<(T), (T), (T)> {

(arg0: T, arg1: T): T
}

export class $BinaryOperator<T> implements $BinaryOperator$$Interface {
static "minBy"<T>(arg0: $Comparator$$Type<(T)>): $BinaryOperator<(T)>
static "maxBy"<T>(arg0: $Comparator$$Type<(T)>): $BinaryOperator<(T)>
 "apply"(arg0: T, arg1: T): T
 "andThen"<V>(arg0: $Function$$Type<(T), (V)>): $BiFunction<(T), (T), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BinaryOperator$$Type<T> = ((arg0: T, arg1: T) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BinaryOperator$$Original<T> = $BinaryOperator<(T)>;}
declare module "java.util.function.UnaryOperator" {
import {$Function, $Function$$Type, $Function$$Interface} from "java.util.function.Function"

export interface $UnaryOperator$$Interface<T> extends $Function$$Interface<(T), (T)> {

(arg0: T): T
}

export class $UnaryOperator<T> implements $UnaryOperator$$Interface {
static "identity"<T>(): $UnaryOperator<(T)>
 "apply"(arg0: T): T
 "compose"<V>(arg0: $Function$$Type<(V), (T)>): $Function<(V), (T)>
 "andThen"<V>(arg0: $Function$$Type<(T), (V)>): $Function<(T), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnaryOperator$$Type<T> = ((arg0: T) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UnaryOperator$$Original<T> = $UnaryOperator<(T)>;}
declare module "java.util.function.LongFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LongFunction$$Interface<R> {

(arg0: long): R
}

export class $LongFunction<R> implements $LongFunction$$Interface {
 "apply"(arg0: long): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongFunction$$Type<R> = ((arg0: long) => R);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LongFunction$$Original<R> = $LongFunction<(R)>;}
declare module "java.util.function.IntFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntFunction$$Interface<R> {

(arg0: integer): R
}

export class $IntFunction<R> implements $IntFunction$$Interface {
 "apply"(arg0: integer): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntFunction$$Type<R> = ((arg0: integer) => R);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntFunction$$Original<R> = $IntFunction<(R)>;}
declare module "java.util.function.DoublePredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DoublePredicate$$Interface {

(arg0: double): boolean
}

export class $DoublePredicate implements $DoublePredicate$$Interface {
 "test"(arg0: double): boolean
 "or"(arg0: $DoublePredicate$$Type): $DoublePredicate
 "negate"(): $DoublePredicate
 "and"(arg0: $DoublePredicate$$Type): $DoublePredicate
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoublePredicate$$Type = ((arg0: double) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoublePredicate$$Original = $DoublePredicate;}
declare module "java.util.function.ToIntBiFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ToIntBiFunction$$Interface<T, U> {

(arg0: T, arg1: U): integer
}

export class $ToIntBiFunction<T, U> implements $ToIntBiFunction$$Interface {
 "applyAsInt"(arg0: T, arg1: U): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToIntBiFunction$$Type<T, U> = ((arg0: T, arg1: U) => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ToIntBiFunction$$Original<T, U> = $ToIntBiFunction<(T), (U)>;}
declare module "java.util.function.LongToIntFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LongToIntFunction$$Interface {

(arg0: long): integer
}

export class $LongToIntFunction implements $LongToIntFunction$$Interface {
 "applyAsInt"(arg0: long): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongToIntFunction$$Type = ((arg0: long) => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LongToIntFunction$$Original = $LongToIntFunction;}
declare module "java.util.function.Consumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Consumer$$Interface<T> {

(arg0: T): void
}

export class $Consumer<T> implements $Consumer$$Interface {
 "accept"(arg0: T): void
 "andThen"(arg0: $Consumer$$Type<(T)>): $Consumer<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Consumer$$Type<T> = ((arg0: T) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Consumer$$Original<T> = $Consumer<(T)>;}
declare module "java.util.function.ToIntFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ToIntFunction$$Interface<T> {

(arg0: T): integer
}

export class $ToIntFunction<T> implements $ToIntFunction$$Interface {
 "applyAsInt"(arg0: T): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToIntFunction$$Type<T> = ((arg0: T) => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ToIntFunction$$Original<T> = $ToIntFunction<(T)>;}
declare module "java.util.function.DoubleFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DoubleFunction$$Interface<R> {

(arg0: double): R
}

export class $DoubleFunction<R> implements $DoubleFunction$$Interface {
 "apply"(arg0: double): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleFunction$$Type<R> = ((arg0: double) => R);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoubleFunction$$Original<R> = $DoubleFunction<(R)>;}
declare module "java.util.function.LongConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LongConsumer$$Interface {

(arg0: long): void
}

export class $LongConsumer implements $LongConsumer$$Interface {
 "accept"(arg0: long): void
 "andThen"(arg0: $LongConsumer$$Type): $LongConsumer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongConsumer$$Type = ((arg0: long) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LongConsumer$$Original = $LongConsumer;}
declare module "java.util.function.LongPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LongPredicate$$Interface {

(arg0: long): boolean
}

export class $LongPredicate implements $LongPredicate$$Interface {
 "test"(arg0: long): boolean
 "or"(arg0: $LongPredicate$$Type): $LongPredicate
 "negate"(): $LongPredicate
 "and"(arg0: $LongPredicate$$Type): $LongPredicate
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongPredicate$$Type = ((arg0: long) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LongPredicate$$Original = $LongPredicate;}
declare module "java.util.function.IntBinaryOperator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntBinaryOperator$$Interface {

(arg0: integer, arg1: integer): integer
}

export class $IntBinaryOperator implements $IntBinaryOperator$$Interface {
 "applyAsInt"(arg0: integer, arg1: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntBinaryOperator$$Type = ((arg0: integer, arg1: integer) => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntBinaryOperator$$Original = $IntBinaryOperator;}
declare module "java.util.function.Function" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Function$$Interface<T, R> {

(arg0: T): R
}

export class $Function<T, R> implements $Function$$Interface {
 "apply"(arg0: T): R
static "identity"<T>(): $Function<(T), (T)>
 "compose"<V>(arg0: $Function$$Type<(V), (T)>): $Function<(V), (R)>
 "andThen"<V>(arg0: $Function$$Type<(R), (V)>): $Function<(T), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function$$Type<T, R> = ((arg0: T) => R);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Function$$Original<T, R> = $Function<(T), (R)>;}
declare module "java.util.function.ObjLongConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ObjLongConsumer$$Interface<T> {

(arg0: T, arg1: long): void
}

export class $ObjLongConsumer<T> implements $ObjLongConsumer$$Interface {
 "accept"(arg0: T, arg1: long): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjLongConsumer$$Type<T> = ((arg0: T, arg1: long) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ObjLongConsumer$$Original<T> = $ObjLongConsumer<(T)>;}
declare module "java.util.function.DoubleConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DoubleConsumer$$Interface {

(arg0: double): void
}

export class $DoubleConsumer implements $DoubleConsumer$$Interface {
 "accept"(arg0: double): void
 "andThen"(arg0: $DoubleConsumer$$Type): $DoubleConsumer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleConsumer$$Type = ((arg0: double) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoubleConsumer$$Original = $DoubleConsumer;}
declare module "java.util.function.ToDoubleFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ToDoubleFunction$$Interface<T> {

(arg0: T): double
}

export class $ToDoubleFunction<T> implements $ToDoubleFunction$$Interface {
 "applyAsDouble"(arg0: T): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToDoubleFunction$$Type<T> = ((arg0: T) => double);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ToDoubleFunction$$Original<T> = $ToDoubleFunction<(T)>;}
declare module "java.util.function.BooleanSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BooleanSupplier$$Interface {

(): boolean
get "asBoolean"(): boolean
}

export class $BooleanSupplier implements $BooleanSupplier$$Interface {
 "getAsBoolean"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BooleanSupplier$$Type = (() => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BooleanSupplier$$Original = $BooleanSupplier;}
declare module "java.util.function.BiConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BiConsumer$$Interface<T, U> {

(arg0: T, arg1: U): void
}

export class $BiConsumer<T, U> implements $BiConsumer$$Interface {
 "accept"(arg0: T, arg1: U): void
 "andThen"(arg0: $BiConsumer$$Type<(T), (U)>): $BiConsumer<(T), (U)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiConsumer$$Type<T, U> = ((arg0: T, arg1: U) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BiConsumer$$Original<T, U> = $BiConsumer<(T), (U)>;}
declare module "java.util.function.IntConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntConsumer$$Interface {

(arg0: integer): void
}

export class $IntConsumer implements $IntConsumer$$Interface {
 "accept"(arg0: integer): void
 "andThen"(arg0: $IntConsumer$$Type): $IntConsumer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntConsumer$$Type = ((arg0: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntConsumer$$Original = $IntConsumer;}
declare module "java.util.function.LongUnaryOperator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LongUnaryOperator$$Interface {

(arg0: long): long
}

export class $LongUnaryOperator implements $LongUnaryOperator$$Interface {
static "identity"(): $LongUnaryOperator
 "applyAsLong"(arg0: long): long
 "compose"(arg0: $LongUnaryOperator$$Type): $LongUnaryOperator
 "andThen"(arg0: $LongUnaryOperator$$Type): $LongUnaryOperator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongUnaryOperator$$Type = ((arg0: long) => long);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LongUnaryOperator$$Original = $LongUnaryOperator;}
declare module "java.util.function.IntPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntPredicate$$Interface {

(arg0: integer): boolean
}

export class $IntPredicate implements $IntPredicate$$Interface {
 "test"(arg0: integer): boolean
 "or"(arg0: $IntPredicate$$Type): $IntPredicate
 "negate"(): $IntPredicate
 "and"(arg0: $IntPredicate$$Type): $IntPredicate
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntPredicate$$Type = ((arg0: integer) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntPredicate$$Original = $IntPredicate;}
declare module "java.util.function.DoubleUnaryOperator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DoubleUnaryOperator$$Interface {

(arg0: double): double
}

export class $DoubleUnaryOperator implements $DoubleUnaryOperator$$Interface {
static "identity"(): $DoubleUnaryOperator
 "applyAsDouble"(arg0: double): double
 "compose"(arg0: $DoubleUnaryOperator$$Type): $DoubleUnaryOperator
 "andThen"(arg0: $DoubleUnaryOperator$$Type): $DoubleUnaryOperator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleUnaryOperator$$Type = ((arg0: double) => double);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoubleUnaryOperator$$Original = $DoubleUnaryOperator;}
declare module "java.util.function.ToLongFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ToLongFunction$$Interface<T> {

(arg0: T): long
}

export class $ToLongFunction<T> implements $ToLongFunction$$Interface {
 "applyAsLong"(arg0: T): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToLongFunction$$Type<T> = ((arg0: T) => long);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ToLongFunction$$Original<T> = $ToLongFunction<(T)>;}
