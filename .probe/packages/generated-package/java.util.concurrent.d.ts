declare module "java.util.concurrent.TimeUnit" {
import {$Enum} from "java.lang.Enum"
import {$ChronoUnit, $ChronoUnit$$Type} from "java.time.temporal.ChronoUnit"
import {$Thread$$Type} from "java.lang.Thread"
import {$Duration$$Type} from "java.time.Duration"

export class $TimeUnit extends $Enum<($TimeUnit)> {
static readonly "MILLISECONDS": $TimeUnit
static readonly "MICROSECONDS": $TimeUnit
static readonly "HOURS": $TimeUnit
static readonly "SECONDS": $TimeUnit
static readonly "NANOSECONDS": $TimeUnit
static readonly "DAYS": $TimeUnit
static readonly "MINUTES": $TimeUnit

public static "values"(): ($TimeUnit)[]
public "convert"(arg0: $Duration$$Type): long
public "convert"(arg0: long, arg1: $TimeUnit$$Type): long
public static "valueOf"(arg0: StringJS): $TimeUnit
public static "of"(arg0: $ChronoUnit$$Type): $TimeUnit
public "toNanos"(arg0: long): long
public "toMillis"(arg0: long): long
public "sleep"(arg0: long): void
public "toDays"(arg0: long): long
public "toSeconds"(arg0: long): long
public "toHours"(arg0: long): long
public "toMinutes"(arg0: long): long
public "toMicros"(arg0: long): long
public "timedWait"(arg0: any, arg1: long): void
public "timedJoin"(arg0: $Thread$$Type, arg1: long): void
public "toChronoUnit"(): $ChronoUnit
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimeUnit$$Type = (("nanoseconds") | ("microseconds") | ("milliseconds") | ("seconds") | ("minutes") | ("hours") | ("days"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TimeUnit$$Original = $TimeUnit;}
declare module "java.util.concurrent.Future$State" {
import {$Enum} from "java.lang.Enum"

export class $Future$State extends $Enum<($Future$State)> {
static readonly "CANCELLED": $Future$State
static readonly "SUCCESS": $Future$State
static readonly "FAILED": $Future$State
static readonly "RUNNING": $Future$State

public static "values"(): ($Future$State)[]
public static "valueOf"(arg0: StringJS): $Future$State
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Future$State$$Type = (("running") | ("success") | ("failed") | ("cancelled"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Future$State$$Original = $Future$State;}
declare module "java.util.concurrent.ScheduledFuture" {
import {$Delayed$$Type, $Delayed$$Interface} from "java.util.concurrent.Delayed"
import {$Future$$Interface} from "java.util.concurrent.Future"
import {$Future$State} from "java.util.concurrent.Future$State"
import {$Throwable} from "java.lang.Throwable"
import {$TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

export interface $ScheduledFuture$$Interface<V> extends $Delayed$$Interface, $Future$$Interface<(V)> {
get "done"(): boolean
get "cancelled"(): boolean
}

export class $ScheduledFuture<V> implements $ScheduledFuture$$Interface {
 "getDelay"(arg0: $TimeUnit$$Type): long
 "get"(arg0: long, arg1: $TimeUnit$$Type): V
 "get"(): V
 "state"(): $Future$State
 "isDone"(): boolean
 "cancel"(arg0: boolean): boolean
 "isCancelled"(): boolean
 "resultNow"(): V
 "exceptionNow"(): $Throwable
 "compareTo"(arg0: $Delayed$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScheduledFuture$$Type<V> = ($ScheduledFuture<(V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScheduledFuture$$Original<V> = $ScheduledFuture<(V)>;}
declare module "java.util.concurrent.ConcurrentMap" {
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$Collection} from "java.util.Collection"
import {$Map, $Map$$Type, $Map$$Interface} from "java.util.Map"
import {$Function$$Type} from "java.util.function.Function"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set} from "java.util.Set"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export interface $ConcurrentMap$$Interface<K, V> extends $Map$$Interface<(K), (V)> {
[index: string | number]: V
get "empty"(): boolean
}

export class $ConcurrentMap<K, V> implements $ConcurrentMap$$Interface {
 "remove"(arg0: any, arg1: any): boolean
 "replace"(arg0: K, arg1: V, arg2: V): boolean
 "replace"(arg0: K, arg1: V): V
 "replaceAll"(arg0: $BiFunction$$Type<(K), (V), (V)>): void
 "merge"(arg0: K, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
 "putIfAbsent"(arg0: K, arg1: V): V
 "compute"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
 "forEach"(arg0: $BiConsumer$$Type<(K), (V)>): void
 "computeIfAbsent"(arg0: K, arg1: $Function$$Type<(K), (V)>): V
 "getOrDefault"(arg0: any, arg1: V): V
 "computeIfPresent"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
 "remove"(arg0: any): V
 "size"(): integer
 "get"(arg0: any): V
 "put"(arg0: K, arg1: V): V
 "equals"(arg0: any): boolean
 "values"(): $Collection<(V)>
 "hashCode"(): integer
static "copyOf"<K, V>(arg0: $Map$$Type<(K), (V)>): $Map<(K), (V)>
 "clear"(): void
 "isEmpty"(): boolean
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
static "of"<K, V>(): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
 "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
 "putAll"(arg0: $Map$$Type<(K), (V)>): void
static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
 "containsKey"(arg0: any): boolean
 "keySet"(): $Set<(K)>
 "containsValue"(arg0: any): boolean
static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(K), (V)>)[]): $Map<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConcurrentMap$$Type<K, V> = ($ConcurrentMap<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConcurrentMap$$Original<K, V> = $ConcurrentMap<(K), (V)>;}
declare module "java.util.concurrent.Callable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Callable$$Interface<V> {

(): V
}

export class $Callable<V> implements $Callable$$Interface {
 "call"(): V
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Callable$$Type<V> = (() => V);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Callable$$Original<V> = $Callable<(V)>;}
declare module "java.util.concurrent.Delayed" {
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

export interface $Delayed$$Interface extends $Comparable$$Interface<($Delayed)> {
}

export class $Delayed implements $Delayed$$Interface {
 "getDelay"(arg0: $TimeUnit$$Type): long
 "compareTo"(arg0: $Delayed$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Delayed$$Type = ($Delayed);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Delayed$$Original = $Delayed;}
declare module "java.util.concurrent.ExecutorService" {
import {$Collection$$Type} from "java.util.Collection"
import {$Callable$$Type} from "java.util.concurrent.Callable"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$Executor$$Interface} from "java.util.concurrent.Executor"
import {$List} from "java.util.List"
import {$Future} from "java.util.concurrent.Future"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

export interface $ExecutorService$$Interface extends $Executor$$Interface, $AutoCloseable$$Interface {
get "terminated"(): boolean
}

export class $ExecutorService implements $ExecutorService$$Interface {
 "shutdown"(): void
 "isTerminated"(): boolean
 "close"(): void
 "isShutdown"(): boolean
 "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future<(T)>
 "submit"(arg0: $Runnable$$Type): $Future<(never)>
 "submit"<T>(arg0: $Callable$$Type<(T)>): $Future<(T)>
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future<(T)>)>
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future<(T)>)>
 "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "shutdownNow"(): $List<($Runnable)>
 "execute"(arg0: $Runnable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExecutorService$$Type = ($ExecutorService);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExecutorService$$Original = $ExecutorService;}
declare module "java.util.concurrent.Flow$Publisher" {
import {$Flow$Subscriber, $Flow$Subscriber$$Type} from "java.util.concurrent.Flow$Subscriber"

export interface $Flow$Publisher$$Interface<T> {

(arg0: $Flow$Subscriber<(T)>): void
}

export class $Flow$Publisher<T> implements $Flow$Publisher$$Interface {
 "subscribe"(arg0: $Flow$Subscriber$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Flow$Publisher$$Type<T> = ((arg0: $Flow$Subscriber<(T)>) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Flow$Publisher$$Original<T> = $Flow$Publisher<(T)>;}
declare module "java.util.concurrent.Executor" {
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"

export interface $Executor$$Interface {

(arg0: $Runnable): void
}

export class $Executor implements $Executor$$Interface {
 "execute"(arg0: $Runnable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Executor$$Type = ((arg0: $Runnable) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Executor$$Original = $Executor;}
declare module "java.util.concurrent.BlockingQueue" {
import {$Iterator} from "java.util.Iterator"
import {$Collection$$Type} from "java.util.Collection"
import {$Queue$$Interface} from "java.util.Queue"
import {$Spliterator} from "java.util.Spliterator"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Stream} from "java.util.stream.Stream"
import {$TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$IntFunction$$Type} from "java.util.function.IntFunction"

export interface $BlockingQueue$$Interface<E> extends $Queue$$Interface<(E)> {
[Symbol.iterator](): IterableIterator<E>;
get "empty"(): boolean
}

export class $BlockingQueue<E> implements $BlockingQueue$$Interface {
 "remove"(arg0: any): boolean
 "put"(arg0: E): void
 "add"(arg0: E): boolean
 "contains"(arg0: any): boolean
 "poll"(arg0: long, arg1: $TimeUnit$$Type): E
 "offer"(arg0: E): boolean
 "offer"(arg0: E, arg1: long, arg2: $TimeUnit$$Type): boolean
 "take"(): E
 "drainTo"(arg0: $Collection$$Type<(E)>): integer
 "drainTo"(arg0: $Collection$$Type<(E)>, arg1: integer): integer
 "remainingCapacity"(): integer
 "remove"(): E
 "peek"(): E
 "element"(): E
 "poll"(): E
 "size"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "toArray"(): (any)[]
 "iterator"(): $Iterator<(E)>
 "stream"(): $Stream<(E)>
 "spliterator"(): $Spliterator<(E)>
 "addAll"(arg0: $Collection$$Type<(E)>): boolean
 "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
 "removeAll"(arg0: $Collection$$Type<(never)>): boolean
 "retainAll"(arg0: $Collection$$Type<(never)>): boolean
 "containsAll"(arg0: $Collection$$Type<(never)>): boolean
 "parallelStream"(): $Stream<(E)>
 "forEach"(arg0: $Consumer$$Type<(E)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockingQueue$$Type<E> = ($BlockingQueue<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockingQueue$$Original<E> = $BlockingQueue<(E)>;}
declare module "java.util.concurrent.Future" {
import {$Future$State} from "java.util.concurrent.Future$State"
import {$Throwable} from "java.lang.Throwable"
import {$TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

export interface $Future$$Interface<V> {
get "done"(): boolean
get "cancelled"(): boolean
}

export class $Future<V> implements $Future$$Interface {
 "get"(arg0: long, arg1: $TimeUnit$$Type): V
 "get"(): V
 "state"(): $Future$State
 "isDone"(): boolean
 "cancel"(arg0: boolean): boolean
 "isCancelled"(): boolean
 "resultNow"(): V
 "exceptionNow"(): $Throwable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Future$$Type<V> = ($Future<(V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Future$$Original<V> = $Future<(V)>;}
declare module "java.util.concurrent.Flow$Subscription" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Flow$Subscription$$Interface {
}

export class $Flow$Subscription implements $Flow$Subscription$$Interface {
 "request"(arg0: long): void
 "cancel"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Flow$Subscription$$Type = ($Flow$Subscription);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Flow$Subscription$$Original = $Flow$Subscription;}
declare module "java.util.concurrent.CompletableFuture" {
import {$CompletionStage, $CompletionStage$$Type, $CompletionStage$$Interface} from "java.util.concurrent.CompletionStage"
import {$Future$$Interface} from "java.util.concurrent.Future"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function$$Type} from "java.util.function.Function"
import {$Executor, $Executor$$Type} from "java.util.concurrent.Executor"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Future$State} from "java.util.concurrent.Future$State"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"

export class $CompletableFuture<T> implements $Future$$Interface<(T)>, $CompletionStage$$Interface<(T)> {
constructor()

public "get"(): T
public "get"(arg0: long, arg1: $TimeUnit$$Type): T
public "toString"(): StringJS
public "join"(): T
public "state"(): $Future$State
public "isDone"(): boolean
public "cancel"(arg0: boolean): boolean
public "copy"(): $CompletableFuture<(T)>
public "handle"<U>(arg0: $BiFunction$$Type<(T), ($Throwable), (U)>): $CompletableFuture<(U)>
public "complete"(arg0: T): boolean
public static "allOf"(...arg0: ($CompletableFuture$$Type<(never)>)[]): $CompletableFuture<(void)>
public "isCancelled"(): boolean
public "resultNow"(): T
public "exceptionNow"(): $Throwable
public "completeExceptionally"(arg0: $Throwable$$Type): boolean
public "newIncompleteFuture"<U>(): $CompletableFuture<(U)>
public "toCompletableFuture"(): $CompletableFuture<(T)>
public "completeAsync"(arg0: $Supplier$$Type<(T)>): $CompletableFuture<(T)>
public "completeAsync"(arg0: $Supplier$$Type<(T)>, arg1: $Executor$$Type): $CompletableFuture<(T)>
public "exceptionallyComposeAsync"(arg0: $Function$$Type): $CompletionStage
public "exceptionallyComposeAsync"(arg0: $Function$$Type, arg1: $Executor$$Type): $CompletionStage
public "exceptionallyCompose"(arg0: $Function$$Type): $CompletionStage
public "exceptionallyAsync"(arg0: $Function$$Type<($Throwable), (T)>): $CompletableFuture<(T)>
public "exceptionallyAsync"(arg0: $Function$$Type<($Throwable), (T)>, arg1: $Executor$$Type): $CompletableFuture<(T)>
public "exceptionally"(arg0: $Function$$Type<($Throwable), (T)>): $CompletableFuture<(T)>
public "whenCompleteAsync"(arg0: $BiConsumer$$Type<(T), ($Throwable)>, arg1: $Executor$$Type): $CompletableFuture<(T)>
public "whenCompleteAsync"(arg0: $BiConsumer$$Type<(T), ($Throwable)>): $CompletableFuture<(T)>
public "handleAsync"<U>(arg0: $BiFunction$$Type<(T), ($Throwable), (U)>, arg1: $Executor$$Type): $CompletableFuture<(U)>
public "handleAsync"(arg0: $BiFunction$$Type): $CompletionStage
public "thenComposeAsync"<U>(arg0: $Function$$Type<(T), ($CompletionStage$$Type<(U)>)>): $CompletableFuture<(U)>
public "thenComposeAsync"(arg0: $Function$$Type, arg1: $Executor$$Type): $CompletionStage
public "thenCompose"(arg0: $Function$$Type): $CompletionStage
public "runAfterEitherAsync"(arg0: $CompletionStage$$Type, arg1: $Runnable$$Type): $CompletionStage
public "runAfterEitherAsync"(arg0: $CompletionStage$$Type, arg1: $Runnable$$Type, arg2: $Executor$$Type): $CompletionStage
public "runAfterEither"(arg0: $CompletionStage$$Type<(never)>, arg1: $Runnable$$Type): $CompletableFuture<(void)>
public "acceptEitherAsync"(arg0: $CompletionStage$$Type<(T)>, arg1: $Consumer$$Type<(T)>): $CompletableFuture<(void)>
public "acceptEitherAsync"(arg0: $CompletionStage$$Type, arg1: $Consumer$$Type, arg2: $Executor$$Type): $CompletionStage
public "acceptEither"(arg0: $CompletionStage$$Type, arg1: $Consumer$$Type): $CompletionStage
public "applyToEitherAsync"(arg0: $CompletionStage$$Type, arg1: $Function$$Type, arg2: $Executor$$Type): $CompletionStage
public "applyToEitherAsync"(arg0: $CompletionStage$$Type, arg1: $Function$$Type): $CompletionStage
public "applyToEither"(arg0: $CompletionStage$$Type, arg1: $Function$$Type): $CompletionStage
public "runAfterBothAsync"(arg0: $CompletionStage$$Type, arg1: $Runnable$$Type, arg2: $Executor$$Type): $CompletionStage
public "runAfterBothAsync"(arg0: $CompletionStage$$Type, arg1: $Runnable$$Type): $CompletionStage
public "runAfterBoth"(arg0: $CompletionStage$$Type<(never)>, arg1: $Runnable$$Type): $CompletableFuture<(void)>
public "thenAcceptBothAsync"<U>(arg0: $CompletionStage$$Type<(U)>, arg1: $BiConsumer$$Type<(T), (U)>): $CompletableFuture<(void)>
public "thenAcceptBothAsync"<U>(arg0: $CompletionStage$$Type<(U)>, arg1: $BiConsumer$$Type<(T), (U)>, arg2: $Executor$$Type): $CompletableFuture<(void)>
public "thenAcceptBoth"(arg0: $CompletionStage$$Type, arg1: $BiConsumer$$Type): $CompletionStage
public "thenCombineAsync"(arg0: $CompletionStage$$Type, arg1: $BiFunction$$Type, arg2: $Executor$$Type): $CompletionStage
public "thenCombineAsync"<U, V>(arg0: $CompletionStage$$Type<(U)>, arg1: $BiFunction$$Type<(T), (U), (V)>): $CompletableFuture<(V)>
public "thenCombine"(arg0: $CompletionStage$$Type, arg1: $BiFunction$$Type): $CompletionStage
public "thenRunAsync"(arg0: $Runnable$$Type, arg1: $Executor$$Type): $CompletableFuture<(void)>
public "thenRunAsync"(arg0: $Runnable$$Type): $CompletionStage
public "thenRun"(arg0: $Runnable$$Type): $CompletableFuture<(void)>
public "thenAcceptAsync"(arg0: $Consumer$$Type, arg1: $Executor$$Type): $CompletionStage
public "thenAcceptAsync"(arg0: $Consumer$$Type): $CompletionStage
public "thenAccept"(arg0: $Consumer$$Type): $CompletionStage
public "thenApplyAsync"(arg0: $Function$$Type, arg1: $Executor$$Type): $CompletionStage
public "thenApplyAsync"(arg0: $Function$$Type): $CompletionStage
public "thenApply"(arg0: $Function$$Type): $CompletionStage
public static "runAsync"(arg0: $Runnable$$Type): $CompletableFuture<(void)>
public static "runAsync"(arg0: $Runnable$$Type, arg1: $Executor$$Type): $CompletableFuture<(void)>
public static "completedFuture"<U>(arg0: U): $CompletableFuture<(U)>
public "getNow"(arg0: T): T
public static "anyOf"(...arg0: ($CompletableFuture$$Type<(never)>)[]): $CompletableFuture<(any)>
public "isCompletedExceptionally"(): boolean
public "obtrudeValue"(arg0: T): void
public "obtrudeException"(arg0: $Throwable$$Type): void
public "getNumberOfDependents"(): integer
public "minimalCompletionStage"(): $CompletionStage<(T)>
public "orTimeout"(arg0: long, arg1: $TimeUnit$$Type): $CompletableFuture<(T)>
public "completeOnTimeout"(arg0: T, arg1: long, arg2: $TimeUnit$$Type): $CompletableFuture<(T)>
public static "delayedExecutor"(arg0: long, arg1: $TimeUnit$$Type, arg2: $Executor$$Type): $Executor
public static "delayedExecutor"(arg0: long, arg1: $TimeUnit$$Type): $Executor
public static "completedStage"<U>(arg0: U): $CompletionStage<(U)>
public static "failedFuture"<U>(arg0: $Throwable$$Type): $CompletableFuture<(U)>
public static "failedStage"<U>(arg0: $Throwable$$Type): $CompletionStage<(U)>
public "whenComplete"(arg0: $BiConsumer$$Type<(T), ($Throwable)>): $CompletableFuture<(T)>
public static "supplyAsync"<U>(arg0: $Supplier$$Type<(U)>): $CompletableFuture<(U)>
public static "supplyAsync"<U>(arg0: $Supplier$$Type<(U)>, arg1: $Executor$$Type): $CompletableFuture<(U)>
public "defaultExecutor"(): $Executor
get "done"(): boolean
get "cancelled"(): boolean
get "completedExceptionally"(): boolean
get "numberOfDependents"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompletableFuture$$Type<T> = ($CompletableFuture<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CompletableFuture$$Original<T> = $CompletableFuture<(T)>;}
declare module "java.util.concurrent.Flow$Subscriber" {
import {$Throwable$$Type} from "java.lang.Throwable"
import {$Flow$Subscription$$Type} from "java.util.concurrent.Flow$Subscription"

export interface $Flow$Subscriber$$Interface<T> {
}

export class $Flow$Subscriber<T> implements $Flow$Subscriber$$Interface {
 "onError"(arg0: $Throwable$$Type): void
 "onComplete"(): void
 "onNext"(arg0: T): void
 "onSubscribe"(arg0: $Flow$Subscription$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Flow$Subscriber$$Type<T> = ($Flow$Subscriber<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Flow$Subscriber$$Original<T> = $Flow$Subscriber<(T)>;}
declare module "java.util.concurrent.ThreadFactory" {
import {$Thread, $Thread$$Type} from "java.lang.Thread"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"

export interface $ThreadFactory$$Interface {

(arg0: $Runnable): $Thread$$Type
}

export class $ThreadFactory implements $ThreadFactory$$Interface {
 "newThread"(arg0: $Runnable$$Type): $Thread
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThreadFactory$$Type = ((arg0: $Runnable) => $Thread$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ThreadFactory$$Original = $ThreadFactory;}
declare module "java.util.concurrent.ScheduledExecutorService" {
import {$ScheduledFuture} from "java.util.concurrent.ScheduledFuture"
import {$Collection$$Type} from "java.util.Collection"
import {$Callable$$Type} from "java.util.concurrent.Callable"
import {$List} from "java.util.List"
import {$Future} from "java.util.concurrent.Future"
import {$ExecutorService$$Interface} from "java.util.concurrent.ExecutorService"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

export interface $ScheduledExecutorService$$Interface extends $ExecutorService$$Interface {
get "terminated"(): boolean
}

export class $ScheduledExecutorService implements $ScheduledExecutorService$$Interface {
 "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(never)>
 "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
 "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(never)>
 "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(never)>
 "shutdown"(): void
 "isTerminated"(): boolean
 "close"(): void
 "isShutdown"(): boolean
 "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future<(T)>
 "submit"(arg0: $Runnable$$Type): $Future<(never)>
 "submit"<T>(arg0: $Callable$$Type<(T)>): $Future<(T)>
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future<(T)>)>
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future<(T)>)>
 "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "shutdownNow"(): $List<($Runnable)>
 "execute"(arg0: $Runnable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScheduledExecutorService$$Type = ($ScheduledExecutorService);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScheduledExecutorService$$Original = $ScheduledExecutorService;}
declare module "java.util.concurrent.CompletionStage" {
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$Function$$Type} from "java.util.function.Function"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $CompletionStage$$Interface<T> {
}

export class $CompletionStage<T> implements $CompletionStage$$Interface {
 "handle"<U>(arg0: $BiFunction$$Type<(T), ($Throwable), (U)>): $CompletionStage<(U)>
 "toCompletableFuture"(): $CompletableFuture<(T)>
 "exceptionallyComposeAsync"(arg0: $Function$$Type<($Throwable), ($CompletionStage$$Type<(T)>)>): $CompletionStage<(T)>
 "exceptionallyComposeAsync"(arg0: $Function$$Type<($Throwable), ($CompletionStage$$Type<(T)>)>, arg1: $Executor$$Type): $CompletionStage<(T)>
 "exceptionallyCompose"(arg0: $Function$$Type<($Throwable), ($CompletionStage$$Type<(T)>)>): $CompletionStage<(T)>
 "exceptionallyAsync"(arg0: $Function$$Type<($Throwable), (T)>, arg1: $Executor$$Type): $CompletionStage<(T)>
 "exceptionallyAsync"(arg0: $Function$$Type<($Throwable), (T)>): $CompletionStage<(T)>
 "exceptionally"(arg0: $Function$$Type<($Throwable), (T)>): $CompletionStage<(T)>
 "whenCompleteAsync"(arg0: $BiConsumer$$Type<(T), ($Throwable)>): $CompletionStage<(T)>
 "whenCompleteAsync"(arg0: $BiConsumer$$Type<(T), ($Throwable)>, arg1: $Executor$$Type): $CompletionStage<(T)>
 "handleAsync"<U>(arg0: $BiFunction$$Type<(T), ($Throwable), (U)>, arg1: $Executor$$Type): $CompletionStage<(U)>
 "handleAsync"<U>(arg0: $BiFunction$$Type<(T), ($Throwable), (U)>): $CompletionStage<(U)>
 "thenComposeAsync"<U>(arg0: $Function$$Type<(T), ($CompletionStage$$Type<(U)>)>, arg1: $Executor$$Type): $CompletionStage<(U)>
 "thenComposeAsync"<U>(arg0: $Function$$Type<(T), ($CompletionStage$$Type<(U)>)>): $CompletionStage<(U)>
 "thenCompose"<U>(arg0: $Function$$Type<(T), ($CompletionStage$$Type<(U)>)>): $CompletionStage<(U)>
 "runAfterEitherAsync"(arg0: $CompletionStage$$Type<(never)>, arg1: $Runnable$$Type): $CompletionStage<(void)>
 "runAfterEitherAsync"(arg0: $CompletionStage$$Type<(never)>, arg1: $Runnable$$Type, arg2: $Executor$$Type): $CompletionStage<(void)>
 "runAfterEither"(arg0: $CompletionStage$$Type<(never)>, arg1: $Runnable$$Type): $CompletionStage<(void)>
 "acceptEitherAsync"(arg0: $CompletionStage$$Type<(T)>, arg1: $Consumer$$Type<(T)>): $CompletionStage<(void)>
 "acceptEitherAsync"(arg0: $CompletionStage$$Type<(T)>, arg1: $Consumer$$Type<(T)>, arg2: $Executor$$Type): $CompletionStage<(void)>
 "acceptEither"(arg0: $CompletionStage$$Type<(T)>, arg1: $Consumer$$Type<(T)>): $CompletionStage<(void)>
 "applyToEitherAsync"<U>(arg0: $CompletionStage$$Type<(T)>, arg1: $Function$$Type<(T), (U)>, arg2: $Executor$$Type): $CompletionStage<(U)>
 "applyToEitherAsync"<U>(arg0: $CompletionStage$$Type<(T)>, arg1: $Function$$Type<(T), (U)>): $CompletionStage<(U)>
 "applyToEither"<U>(arg0: $CompletionStage$$Type<(T)>, arg1: $Function$$Type<(T), (U)>): $CompletionStage<(U)>
 "runAfterBothAsync"(arg0: $CompletionStage$$Type<(never)>, arg1: $Runnable$$Type, arg2: $Executor$$Type): $CompletionStage<(void)>
 "runAfterBothAsync"(arg0: $CompletionStage$$Type<(never)>, arg1: $Runnable$$Type): $CompletionStage<(void)>
 "runAfterBoth"(arg0: $CompletionStage$$Type<(never)>, arg1: $Runnable$$Type): $CompletionStage<(void)>
 "thenAcceptBothAsync"<U>(arg0: $CompletionStage$$Type<(U)>, arg1: $BiConsumer$$Type<(T), (U)>, arg2: $Executor$$Type): $CompletionStage<(void)>
 "thenAcceptBothAsync"<U>(arg0: $CompletionStage$$Type<(U)>, arg1: $BiConsumer$$Type<(T), (U)>): $CompletionStage<(void)>
 "thenAcceptBoth"<U>(arg0: $CompletionStage$$Type<(U)>, arg1: $BiConsumer$$Type<(T), (U)>): $CompletionStage<(void)>
 "thenCombineAsync"<U, V>(arg0: $CompletionStage$$Type<(U)>, arg1: $BiFunction$$Type<(T), (U), (V)>, arg2: $Executor$$Type): $CompletionStage<(V)>
 "thenCombineAsync"<U, V>(arg0: $CompletionStage$$Type<(U)>, arg1: $BiFunction$$Type<(T), (U), (V)>): $CompletionStage<(V)>
 "thenCombine"<U, V>(arg0: $CompletionStage$$Type<(U)>, arg1: $BiFunction$$Type<(T), (U), (V)>): $CompletionStage<(V)>
 "thenRunAsync"(arg0: $Runnable$$Type): $CompletionStage<(void)>
 "thenRunAsync"(arg0: $Runnable$$Type, arg1: $Executor$$Type): $CompletionStage<(void)>
 "thenRun"(arg0: $Runnable$$Type): $CompletionStage<(void)>
 "thenAcceptAsync"(arg0: $Consumer$$Type<(T)>): $CompletionStage<(void)>
 "thenAcceptAsync"(arg0: $Consumer$$Type<(T)>, arg1: $Executor$$Type): $CompletionStage<(void)>
 "thenAccept"(arg0: $Consumer$$Type<(T)>): $CompletionStage<(void)>
 "thenApplyAsync"<U>(arg0: $Function$$Type<(T), (U)>, arg1: $Executor$$Type): $CompletionStage<(U)>
 "thenApplyAsync"<U>(arg0: $Function$$Type<(T), (U)>): $CompletionStage<(U)>
 "thenApply"<U>(arg0: $Function$$Type<(T), (U)>): $CompletionStage<(U)>
 "whenComplete"(arg0: $BiConsumer$$Type<(T), ($Throwable)>): $CompletionStage<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompletionStage$$Type<T> = ($CompletionStage<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CompletionStage$$Original<T> = $CompletionStage<(T)>;}
