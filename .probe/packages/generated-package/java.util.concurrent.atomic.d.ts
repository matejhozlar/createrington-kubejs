declare module "java.util.concurrent.atomic.AtomicReference" {
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$BinaryOperator$$Type} from "java.util.function.BinaryOperator"

export class $AtomicReference<V> implements $Serializable$$Interface {
constructor(arg0: V)
constructor()

public "get"(): V
public "toString"(): StringJS
public "set"(arg0: V): void
public "getOpaque"(): V
public "setOpaque"(arg0: V): void
public "getAcquire"(): V
public "setRelease"(arg0: V): void
public "compareAndSet"(arg0: V, arg1: V): boolean
public "compareAndExchange"(arg0: V, arg1: V): V
public "compareAndExchangeAcquire"(arg0: V, arg1: V): V
public "compareAndExchangeRelease"(arg0: V, arg1: V): V
public "weakCompareAndSetPlain"(arg0: V, arg1: V): boolean
/**
 * 
 * @deprecated
 */
public "weakCompareAndSet"(arg0: V, arg1: V): boolean
public "weakCompareAndSetAcquire"(arg0: V, arg1: V): boolean
public "weakCompareAndSetRelease"(arg0: V, arg1: V): boolean
public "getAndSet"(arg0: V): V
public "lazySet"(arg0: V): void
public "weakCompareAndSetVolatile"(arg0: V, arg1: V): boolean
public "getAndUpdate"(arg0: $UnaryOperator$$Type<(V)>): V
public "updateAndGet"(arg0: $UnaryOperator$$Type<(V)>): V
public "getAndAccumulate"(arg0: V, arg1: $BinaryOperator$$Type<(V)>): V
public "accumulateAndGet"(arg0: V, arg1: $BinaryOperator$$Type<(V)>): V
public "getPlain"(): V
public "setPlain"(arg0: V): void
get "opaque"(): V
set "opaque"(value: V)
get "acquire"(): V
set "release"(value: V)
get "plain"(): V
set "plain"(value: V)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AtomicReference$$Type<V> = ($AtomicReference<(V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AtomicReference$$Original<V> = $AtomicReference<(V)>;}
declare module "java.util.concurrent.atomic.AtomicReferenceArray" {
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$BinaryOperator$$Type} from "java.util.function.BinaryOperator"

export class $AtomicReferenceArray<E> implements $Serializable$$Interface {
constructor(arg0: integer)
constructor(arg0: (E)[])

public "get"(arg0: integer): E
public "length"(): integer
public "toString"(): StringJS
public "set"(arg0: integer, arg1: E): void
public "getOpaque"(arg0: integer): E
public "setOpaque"(arg0: integer, arg1: E): void
public "getAcquire"(arg0: integer): E
public "setRelease"(arg0: integer, arg1: E): void
public "compareAndSet"(arg0: integer, arg1: E, arg2: E): boolean
public "compareAndExchange"(arg0: integer, arg1: E, arg2: E): E
public "compareAndExchangeAcquire"(arg0: integer, arg1: E, arg2: E): E
public "compareAndExchangeRelease"(arg0: integer, arg1: E, arg2: E): E
public "weakCompareAndSetPlain"(arg0: integer, arg1: E, arg2: E): boolean
/**
 * 
 * @deprecated
 */
public "weakCompareAndSet"(arg0: integer, arg1: E, arg2: E): boolean
public "weakCompareAndSetAcquire"(arg0: integer, arg1: E, arg2: E): boolean
public "weakCompareAndSetRelease"(arg0: integer, arg1: E, arg2: E): boolean
public "getAndSet"(arg0: integer, arg1: E): E
public "lazySet"(arg0: integer, arg1: E): void
public "weakCompareAndSetVolatile"(arg0: integer, arg1: E, arg2: E): boolean
public "getAndUpdate"(arg0: integer, arg1: $UnaryOperator$$Type<(E)>): E
public "updateAndGet"(arg0: integer, arg1: $UnaryOperator$$Type<(E)>): E
public "getAndAccumulate"(arg0: integer, arg1: E, arg2: $BinaryOperator$$Type<(E)>): E
public "accumulateAndGet"(arg0: integer, arg1: E, arg2: $BinaryOperator$$Type<(E)>): E
public "getPlain"(arg0: integer): E
public "setPlain"(arg0: integer, arg1: E): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AtomicReferenceArray$$Type<E> = ($AtomicReferenceArray<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AtomicReferenceArray$$Original<E> = $AtomicReferenceArray<(E)>;}
declare module "java.util.concurrent.atomic.AtomicInteger" {
import {$IntUnaryOperator$$Type} from "java.util.function.IntUnaryOperator"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$IntBinaryOperator$$Type} from "java.util.function.IntBinaryOperator"

export class $AtomicInteger extends number implements $Serializable$$Interface {
constructor(arg0: integer)
constructor()

public "get"(): integer
public "toString"(): StringJS
public "intValue"(): integer
public "longValue"(): long
public "floatValue"(): float
public "doubleValue"(): double
public "set"(arg0: integer): void
public "getOpaque"(): integer
public "setOpaque"(arg0: integer): void
public "getAcquire"(): integer
public "setRelease"(arg0: integer): void
public "compareAndSet"(arg0: integer, arg1: integer): boolean
public "compareAndExchange"(arg0: integer, arg1: integer): integer
public "compareAndExchangeAcquire"(arg0: integer, arg1: integer): integer
public "compareAndExchangeRelease"(arg0: integer, arg1: integer): integer
public "weakCompareAndSetPlain"(arg0: integer, arg1: integer): boolean
/**
 * 
 * @deprecated
 */
public "weakCompareAndSet"(arg0: integer, arg1: integer): boolean
public "weakCompareAndSetAcquire"(arg0: integer, arg1: integer): boolean
public "weakCompareAndSetRelease"(arg0: integer, arg1: integer): boolean
public "getAndSet"(arg0: integer): integer
public "getAndAdd"(arg0: integer): integer
public "lazySet"(arg0: integer): void
public "incrementAndGet"(): integer
public "weakCompareAndSetVolatile"(arg0: integer, arg1: integer): boolean
public "getAndIncrement"(): integer
public "getAndDecrement"(): integer
public "decrementAndGet"(): integer
public "addAndGet"(arg0: integer): integer
public "getAndUpdate"(arg0: $IntUnaryOperator$$Type): integer
public "updateAndGet"(arg0: $IntUnaryOperator$$Type): integer
public "getAndAccumulate"(arg0: integer, arg1: $IntBinaryOperator$$Type): integer
public "accumulateAndGet"(arg0: integer, arg1: $IntBinaryOperator$$Type): integer
public "getPlain"(): integer
public "setPlain"(arg0: integer): void
get "opaque"(): integer
set "opaque"(value: integer)
get "acquire"(): integer
set "release"(value: integer)
get "andIncrement"(): integer
get "andDecrement"(): integer
get "plain"(): integer
set "plain"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AtomicInteger$$Type = ($AtomicInteger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AtomicInteger$$Original = $AtomicInteger;}
declare module "java.util.concurrent.atomic.AtomicBoolean" {
import {$Serializable$$Interface} from "java.io.Serializable"

export class $AtomicBoolean implements $Serializable$$Interface {
constructor(arg0: boolean)
constructor()

public "get"(): boolean
public "toString"(): StringJS
public "set"(arg0: boolean): void
public "getOpaque"(): boolean
public "setOpaque"(arg0: boolean): void
public "getAcquire"(): boolean
public "setRelease"(arg0: boolean): void
public "compareAndSet"(arg0: boolean, arg1: boolean): boolean
public "compareAndExchange"(arg0: boolean, arg1: boolean): boolean
public "compareAndExchangeAcquire"(arg0: boolean, arg1: boolean): boolean
public "compareAndExchangeRelease"(arg0: boolean, arg1: boolean): boolean
public "weakCompareAndSetPlain"(arg0: boolean, arg1: boolean): boolean
/**
 * 
 * @deprecated
 */
public "weakCompareAndSet"(arg0: boolean, arg1: boolean): boolean
public "weakCompareAndSetAcquire"(arg0: boolean, arg1: boolean): boolean
public "weakCompareAndSetRelease"(arg0: boolean, arg1: boolean): boolean
public "getAndSet"(arg0: boolean): boolean
public "lazySet"(arg0: boolean): void
public "weakCompareAndSetVolatile"(arg0: boolean, arg1: boolean): boolean
public "getPlain"(): boolean
public "setPlain"(arg0: boolean): void
get "opaque"(): boolean
set "opaque"(value: boolean)
get "acquire"(): boolean
set "release"(value: boolean)
get "plain"(): boolean
set "plain"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AtomicBoolean$$Type = ($AtomicBoolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AtomicBoolean$$Original = $AtomicBoolean;}
