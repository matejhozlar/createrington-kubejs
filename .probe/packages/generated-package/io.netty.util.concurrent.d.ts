declare module "io.netty.util.concurrent.AbstractEventExecutorGroup" {
import {$Iterator} from "java.util.Iterator"
import {$Future as $Future$0} from "io.netty.util.concurrent.Future"
import {$Collection$$Type} from "java.util.Collection"
import {$Callable$$Type} from "java.util.concurrent.Callable"
import {$Spliterator} from "java.util.Spliterator"
import {$List} from "java.util.List"
import {$Future} from "java.util.concurrent.Future"
import {$ScheduledFuture} from "io.netty.util.concurrent.ScheduledFuture"
import {$EventExecutorGroup$$Interface} from "io.netty.util.concurrent.EventExecutorGroup"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$ScheduledFuture as $ScheduledFuture$0} from "java.util.concurrent.ScheduledFuture"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractEventExecutorGroup implements $EventExecutorGroup$$Interface {
constructor()

/**
 * 
 * @deprecated
 */
public "shutdown"(): void
public "execute"(arg0: $Runnable$$Type): void
public "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
public "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(never)>
public "submit"(arg0: $Callable$$Type): $Future
public "submit"(arg0: $Runnable$$Type): $Future
public "submit"(arg0: $Runnable$$Type, arg1: any): $Future
public "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
public "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
public "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future<(T)>)>
public "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future<(T)>)>
/**
 * 
 * @deprecated
 */
public "shutdownNow"(): $List<($Runnable)>
public "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture$0
public "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture$0
public "shutdownGracefully"(): $Future$0<(never)>
public "iterator"(): $Iterator<($EventExecutor)>
public "next"(): $EventExecutor
public "isShuttingDown"(): boolean
public "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$$Type): $Future$0<(never)>
public "terminationFuture"(): $Future$0<(never)>
public "spliterator"(): $Spliterator<($EventExecutor)>
public "forEach"(arg0: $Consumer$$Type<($EventExecutor)>): void
public "isTerminated"(): boolean
public "close"(): void
public "isShutdown"(): boolean
public "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
[Symbol.iterator](): IterableIterator<$EventExecutor>;
get "shuttingDown"(): boolean
get "terminated"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractEventExecutorGroup$$Type = ($AbstractEventExecutorGroup);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractEventExecutorGroup$$Original = $AbstractEventExecutorGroup;}
declare module "io.netty.util.concurrent.RejectedExecutionHandler" {
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$SingleThreadEventExecutor, $SingleThreadEventExecutor$$Type} from "io.netty.util.concurrent.SingleThreadEventExecutor"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $RejectedExecutionHandler$$Interface {

(arg0: $Runnable, arg1: $SingleThreadEventExecutor): void
}

export class $RejectedExecutionHandler implements $RejectedExecutionHandler$$Interface {
 "rejected"(arg0: $Runnable$$Type, arg1: $SingleThreadEventExecutor$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RejectedExecutionHandler$$Type = ((arg0: $Runnable, arg1: $SingleThreadEventExecutor) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RejectedExecutionHandler$$Original = $RejectedExecutionHandler;}
declare module "io.netty.util.concurrent.ScheduledFuture" {
import {$GenericFutureListener$$Type} from "io.netty.util.concurrent.GenericFutureListener"
import {$ScheduledFuture$$Interface as $ScheduledFuture$0$$Interface} from "java.util.concurrent.ScheduledFuture"
import {$Delayed$$Type} from "java.util.concurrent.Delayed"
import {$Future, $Future$$Type, $Future$$Interface} from "io.netty.util.concurrent.Future"
import {$Future$State} from "java.util.concurrent.Future$State"
import {$Throwable} from "java.lang.Throwable"
import {$TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ScheduledFuture$$Interface<V> extends $Future$$Interface<(V)>, $ScheduledFuture$0$$Interface<(V)> {
get "now"(): V
get "cancellable"(): boolean
get "success"(): boolean
get "done"(): boolean
get "cancelled"(): boolean
}

export class $ScheduledFuture<V> implements $ScheduledFuture$$Interface {
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $Future<(V)>
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "await"(): $Future<(V)>
 "sync"(): $Future<(V)>
 "awaitUninterruptibly"(arg0: long): boolean
 "awaitUninterruptibly"(): $Future<(V)>
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $Future<(V)>
 "syncUninterruptibly"(): $Future<(V)>
 "getNow"(): V
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $Future<(V)>
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $Future<(V)>
 "isCancellable"(): boolean
 "isSuccess"(): boolean
 "get"(arg0: long, arg1: $TimeUnit$$Type): V
 "get"(): V
 "state"(): $Future$State
 "isDone"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): V
 "exceptionNow"(): $Throwable
 "getDelay"(arg0: $TimeUnit$$Type): long
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
declare module "io.netty.util.concurrent.OrderedEventExecutor" {
import {$Iterator} from "java.util.Iterator"
import {$Future as $Future$0} from "io.netty.util.concurrent.Future"
import {$Collection$$Type} from "java.util.Collection"
import {$Callable$$Type} from "java.util.concurrent.Callable"
import {$Spliterator} from "java.util.Spliterator"
import {$List} from "java.util.List"
import {$Thread$$Type} from "java.lang.Thread"
import {$Future} from "java.util.concurrent.Future"
import {$ScheduledFuture} from "io.netty.util.concurrent.ScheduledFuture"
import {$EventExecutorGroup} from "io.netty.util.concurrent.EventExecutorGroup"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Promise} from "io.netty.util.concurrent.Promise"
import {$EventExecutor, $EventExecutor$$Type, $EventExecutor$$Interface} from "io.netty.util.concurrent.EventExecutor"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$ProgressivePromise} from "io.netty.util.concurrent.ProgressivePromise"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $OrderedEventExecutor$$Interface extends $EventExecutor$$Interface {
[Symbol.iterator](): IterableIterator<$EventExecutor>;
get "shuttingDown"(): boolean
get "terminated"(): boolean
}

export class $OrderedEventExecutor implements $OrderedEventExecutor$$Interface {
 "parent"(): $EventExecutorGroup
 "next"(): $EventExecutor
 "newProgressivePromise"<V>(): $ProgressivePromise<(V)>
 "inEventLoop"(arg0: $Thread$$Type): boolean
 "inEventLoop"(): boolean
 "newPromise"<V>(): $Promise<(V)>
 "newSucceededFuture"<V>(arg0: V): $Future$0<(V)>
 "newFailedFuture"<V>(arg0: $Throwable$$Type): $Future$0<(V)>
/**
 * 
 * @deprecated
 */
 "shutdown"(): void
 "iterator"(): $Iterator<($EventExecutor)>
 "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(never)>
 "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
 "submit"(arg0: $Runnable$$Type): $Future$0<(never)>
 "submit"<T>(arg0: $Callable$$Type<(T)>): $Future$0<(T)>
 "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future$0<(T)>
/**
 * 
 * @deprecated
 */
 "shutdownNow"(): $List<($Runnable)>
 "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(never)>
 "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(never)>
 "isShuttingDown"(): boolean
 "shutdownGracefully"(): $Future$0<(never)>
 "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$$Type): $Future$0<(never)>
 "terminationFuture"(): $Future$0<(never)>
 "spliterator"(): $Spliterator<($EventExecutor)>
 "forEach"(arg0: $Consumer$$Type<($EventExecutor)>): void
 "isTerminated"(): boolean
 "close"(): void
 "isShutdown"(): boolean
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future<(T)>)>
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future<(T)>)>
 "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "execute"(arg0: $Runnable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OrderedEventExecutor$$Type = ($OrderedEventExecutor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OrderedEventExecutor$$Original = $OrderedEventExecutor;}
declare module "io.netty.util.concurrent.ThreadProperties" {
import {$StackTraceElement} from "java.lang.StackTraceElement"
import {$Thread$State} from "java.lang.Thread$State"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ThreadProperties$$Interface {
get "daemon"(): boolean
get "alive"(): boolean
get "interrupted"(): boolean
}

export class $ThreadProperties implements $ThreadProperties$$Interface {
 "name"(): StringJS
 "priority"(): integer
 "id"(): long
 "stackTrace"(): ($StackTraceElement)[]
 "isDaemon"(): boolean
 "isAlive"(): boolean
 "isInterrupted"(): boolean
 "state"(): $Thread$State
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThreadProperties$$Type = ($ThreadProperties);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ThreadProperties$$Original = $ThreadProperties;}
declare module "io.netty.util.concurrent.EventExecutor" {
import {$Iterator} from "java.util.Iterator"
import {$Future as $Future$0} from "io.netty.util.concurrent.Future"
import {$Collection$$Type} from "java.util.Collection"
import {$Callable$$Type} from "java.util.concurrent.Callable"
import {$Spliterator} from "java.util.Spliterator"
import {$List} from "java.util.List"
import {$Thread$$Type} from "java.lang.Thread"
import {$Future} from "java.util.concurrent.Future"
import {$ScheduledFuture} from "io.netty.util.concurrent.ScheduledFuture"
import {$EventExecutorGroup, $EventExecutorGroup$$Interface} from "io.netty.util.concurrent.EventExecutorGroup"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Promise} from "io.netty.util.concurrent.Promise"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$ProgressivePromise} from "io.netty.util.concurrent.ProgressivePromise"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventExecutor$$Interface extends $EventExecutorGroup$$Interface {
[Symbol.iterator](): IterableIterator<$EventExecutor>;
get "shuttingDown"(): boolean
get "terminated"(): boolean
}

export class $EventExecutor implements $EventExecutor$$Interface {
 "parent"(): $EventExecutorGroup
 "next"(): $EventExecutor
 "newProgressivePromise"<V>(): $ProgressivePromise<(V)>
 "inEventLoop"(arg0: $Thread$$Type): boolean
 "inEventLoop"(): boolean
 "newPromise"<V>(): $Promise<(V)>
 "newSucceededFuture"<V>(arg0: V): $Future$0<(V)>
 "newFailedFuture"<V>(arg0: $Throwable$$Type): $Future$0<(V)>
/**
 * 
 * @deprecated
 */
 "shutdown"(): void
 "iterator"(): $Iterator<($EventExecutor)>
 "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(never)>
 "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
 "submit"(arg0: $Runnable$$Type): $Future$0<(never)>
 "submit"<T>(arg0: $Callable$$Type<(T)>): $Future$0<(T)>
 "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future$0<(T)>
/**
 * 
 * @deprecated
 */
 "shutdownNow"(): $List<($Runnable)>
 "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(never)>
 "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(never)>
 "isShuttingDown"(): boolean
 "shutdownGracefully"(): $Future$0<(never)>
 "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$$Type): $Future$0<(never)>
 "terminationFuture"(): $Future$0<(never)>
 "spliterator"(): $Spliterator<($EventExecutor)>
 "forEach"(arg0: $Consumer$$Type<($EventExecutor)>): void
 "isTerminated"(): boolean
 "close"(): void
 "isShutdown"(): boolean
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future<(T)>)>
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future<(T)>)>
 "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "execute"(arg0: $Runnable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventExecutor$$Type = ($EventExecutor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EventExecutor$$Original = $EventExecutor;}
declare module "io.netty.util.concurrent.ProgressiveFuture" {
import {$GenericFutureListener$$Type} from "io.netty.util.concurrent.GenericFutureListener"
import {$Future$$Type, $Future$$Interface} from "io.netty.util.concurrent.Future"
import {$Future$State} from "java.util.concurrent.Future$State"
import {$Throwable} from "java.lang.Throwable"
import {$TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ProgressiveFuture$$Interface<V> extends $Future$$Interface<(V)> {
get "now"(): V
get "cancellable"(): boolean
get "success"(): boolean
get "done"(): boolean
get "cancelled"(): boolean
}

export class $ProgressiveFuture<V> implements $ProgressiveFuture$$Interface {
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $ProgressiveFuture<(V)>
 "await"(): $ProgressiveFuture<(V)>
 "sync"(): $ProgressiveFuture<(V)>
 "awaitUninterruptibly"(): $ProgressiveFuture<(V)>
 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $ProgressiveFuture<(V)>
 "syncUninterruptibly"(): $ProgressiveFuture<(V)>
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $ProgressiveFuture<(V)>
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $ProgressiveFuture<(V)>
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "getNow"(): V
 "isCancellable"(): boolean
 "isSuccess"(): boolean
 "get"(arg0: long, arg1: $TimeUnit$$Type): V
 "get"(): V
 "state"(): $Future$State
 "isDone"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): V
 "exceptionNow"(): $Throwable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressiveFuture$$Type<V> = ($ProgressiveFuture<(V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProgressiveFuture$$Original<V> = $ProgressiveFuture<(V)>;}
declare module "io.netty.util.concurrent.Future" {
import {$GenericFutureListener$$Type} from "io.netty.util.concurrent.GenericFutureListener"
import {$Future$$Interface as $Future$0$$Interface} from "java.util.concurrent.Future"
import {$Future$State} from "java.util.concurrent.Future$State"
import {$Throwable} from "java.lang.Throwable"
import {$TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Future$$Interface<V> extends $Future$0$$Interface<(V)> {
get "now"(): V
get "cancellable"(): boolean
get "success"(): boolean
get "done"(): boolean
get "cancelled"(): boolean
}

export class $Future<V> implements $Future$$Interface {
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $Future<(V)>
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "await"(): $Future<(V)>
 "sync"(): $Future<(V)>
 "awaitUninterruptibly"(arg0: long): boolean
 "awaitUninterruptibly"(): $Future<(V)>
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $Future<(V)>
 "syncUninterruptibly"(): $Future<(V)>
 "getNow"(): V
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $Future<(V)>
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $Future<(V)>
 "isCancellable"(): boolean
 "isSuccess"(): boolean
 "get"(arg0: long, arg1: $TimeUnit$$Type): V
 "get"(): V
 "state"(): $Future$State
 "isDone"(): boolean
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
declare module "io.netty.util.concurrent.MultithreadEventExecutorGroup" {
import {$ScheduledFuture} from "java.util.concurrent.ScheduledFuture"
import {$Iterator} from "java.util.Iterator"
import {$Callable$$Type} from "java.util.concurrent.Callable"
import {$Future} from "io.netty.util.concurrent.Future"
import {$Future as $Future$0} from "java.util.concurrent.Future"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$AbstractEventExecutorGroup} from "io.netty.util.concurrent.AbstractEventExecutorGroup"
import {$EventExecutor} from "io.netty.util.concurrent.EventExecutor"
import {$TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $MultithreadEventExecutorGroup extends $AbstractEventExecutorGroup {
/**
 * 
 * @deprecated
 */
public "shutdown"(): void
public "iterator"(): $Iterator<($EventExecutor)>
public "next"(): $EventExecutor
public "isTerminated"(): boolean
public "isShutdown"(): boolean
public "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
public "executorCount"(): integer
public "isShuttingDown"(): boolean
public "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$$Type): $Future<(never)>
public "terminationFuture"(): $Future<(never)>
public "submit"(arg0: $Callable$$Type): $Future$0
public "submit"(arg0: $Runnable$$Type): $Future$0
public "submit"(arg0: $Runnable$$Type, arg1: any): $Future$0
public "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture
public "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture
get "terminated"(): boolean
get "shuttingDown"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultithreadEventExecutorGroup$$Type = ($MultithreadEventExecutorGroup);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultithreadEventExecutorGroup$$Original = $MultithreadEventExecutorGroup;}
declare module "io.netty.util.concurrent.SingleThreadEventExecutor" {
import {$Future as $Future$0} from "io.netty.util.concurrent.Future"
import {$Collection$$Type} from "java.util.Collection"
import {$Callable$$Type} from "java.util.concurrent.Callable"
import {$List} from "java.util.List"
import {$Thread$$Type} from "java.lang.Thread"
import {$Future} from "java.util.concurrent.Future"
import {$EventExecutorGroup} from "io.netty.util.concurrent.EventExecutorGroup"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Promise} from "io.netty.util.concurrent.Promise"
import {$EventExecutor} from "io.netty.util.concurrent.EventExecutor"
import {$TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$ScheduledFuture} from "java.util.concurrent.ScheduledFuture"
import {$AbstractScheduledEventExecutor} from "io.netty.util.concurrent.AbstractScheduledEventExecutor"
import {$ThreadProperties} from "io.netty.util.concurrent.ThreadProperties"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$ProgressivePromise} from "io.netty.util.concurrent.ProgressivePromise"
import {$OrderedEventExecutor$$Interface} from "io.netty.util.concurrent.OrderedEventExecutor"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $SingleThreadEventExecutor extends $AbstractScheduledEventExecutor implements $OrderedEventExecutor$$Interface {
/**
 * 
 * @deprecated
 */
public "shutdown"(): void
public "execute"(arg0: $Runnable$$Type): void
public "isTerminated"(): boolean
public "isShutdown"(): boolean
public "addShutdownHook"(arg0: $Runnable$$Type): void
public "removeShutdownHook"(arg0: $Runnable$$Type): void
public "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
public "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
public "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future<(T)>)>
public "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future<(T)>)>
public "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
public "inEventLoop"(arg0: $Thread$$Type): boolean
public "isShuttingDown"(): boolean
public "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$$Type): $Future$0<(never)>
public "terminationFuture"(): $Future$0<(never)>
public "lazyExecute"(arg0: $Runnable$$Type): void
public "pendingTasks"(): integer
public "threadProperties"(): $ThreadProperties
public "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture
public "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture
public "parent"(): $EventExecutorGroup
public "next"(): $EventExecutor
public "newProgressivePromise"<V>(): $ProgressivePromise<(V)>
public "inEventLoop"(): boolean
public "newPromise"<V>(): $Promise<(V)>
public "newSucceededFuture"<V>(arg0: V): $Future$0<(V)>
public "newFailedFuture"<V>(arg0: $Throwable$$Type): $Future$0<(V)>
public "submit"(arg0: $Callable$$Type): $Future
public "submit"(arg0: $Runnable$$Type): $Future
public "submit"(arg0: $Runnable$$Type, arg1: any): $Future
get "terminated"(): boolean
get "shuttingDown"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleThreadEventExecutor$$Type = ($SingleThreadEventExecutor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SingleThreadEventExecutor$$Original = $SingleThreadEventExecutor;}
declare module "io.netty.util.concurrent.AbstractScheduledEventExecutor" {
import {$ScheduledFuture as $ScheduledFuture$0} from "java.util.concurrent.ScheduledFuture"
import {$AbstractEventExecutor} from "io.netty.util.concurrent.AbstractEventExecutor"
import {$Callable$$Type} from "java.util.concurrent.Callable"
import {$Future} from "java.util.concurrent.Future"
import {$ScheduledFuture} from "io.netty.util.concurrent.ScheduledFuture"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractScheduledEventExecutor extends $AbstractEventExecutor {
public "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
public "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(never)>
public "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture$0
public "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture$0
public "submit"(arg0: $Callable$$Type): $Future
public "submit"(arg0: $Runnable$$Type): $Future
public "submit"(arg0: $Runnable$$Type, arg1: any): $Future
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractScheduledEventExecutor$$Type = ($AbstractScheduledEventExecutor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractScheduledEventExecutor$$Original = $AbstractScheduledEventExecutor;}
declare module "io.netty.util.concurrent.EventExecutorGroup" {
import {$Iterator} from "java.util.Iterator"
import {$Iterable$$Interface} from "java.lang.Iterable"
import {$Future as $Future$0} from "io.netty.util.concurrent.Future"
import {$Collection$$Type} from "java.util.Collection"
import {$Callable$$Type} from "java.util.concurrent.Callable"
import {$Spliterator} from "java.util.Spliterator"
import {$List} from "java.util.List"
import {$Future} from "java.util.concurrent.Future"
import {$ScheduledFuture} from "io.netty.util.concurrent.ScheduledFuture"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$ScheduledExecutorService$$Interface} from "java.util.concurrent.ScheduledExecutorService"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventExecutorGroup$$Interface extends $ScheduledExecutorService$$Interface, $Iterable$$Interface<($EventExecutor)> {
[Symbol.iterator](): IterableIterator<$EventExecutor>;
get "shuttingDown"(): boolean
get "terminated"(): boolean
}

export class $EventExecutorGroup implements $EventExecutorGroup$$Interface {
/**
 * 
 * @deprecated
 */
 "shutdown"(): void
 "iterator"(): $Iterator<($EventExecutor)>
 "next"(): $EventExecutor
 "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(never)>
 "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
 "submit"(arg0: $Runnable$$Type): $Future$0<(never)>
 "submit"<T>(arg0: $Callable$$Type<(T)>): $Future$0<(T)>
 "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future$0<(T)>
/**
 * 
 * @deprecated
 */
 "shutdownNow"(): $List<($Runnable)>
 "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(never)>
 "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(never)>
 "isShuttingDown"(): boolean
 "shutdownGracefully"(): $Future$0<(never)>
 "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$$Type): $Future$0<(never)>
 "terminationFuture"(): $Future$0<(never)>
 "spliterator"(): $Spliterator<($EventExecutor)>
 "forEach"(arg0: $Consumer$$Type<($EventExecutor)>): void
 "isTerminated"(): boolean
 "close"(): void
 "isShutdown"(): boolean
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future<(T)>)>
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future<(T)>)>
 "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "execute"(arg0: $Runnable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventExecutorGroup$$Type = ($EventExecutorGroup);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EventExecutorGroup$$Original = $EventExecutorGroup;}
declare module "io.netty.util.concurrent.Promise" {
import {$GenericFutureListener$$Type} from "io.netty.util.concurrent.GenericFutureListener"
import {$Future$$Type, $Future$$Interface} from "io.netty.util.concurrent.Future"
import {$Future$State} from "java.util.concurrent.Future$State"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Promise$$Interface<V> extends $Future$$Interface<(V)> {
get "uncancellable"(): boolean
set "success"(value: V)
set "failure"(value: $Throwable$$Type)
get "now"(): V
get "cancellable"(): boolean
get "success"(): boolean
get "done"(): boolean
get "cancelled"(): boolean
}

export class $Promise<V> implements $Promise$$Interface {
 "setUncancellable"(): boolean
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $Promise<(V)>
 "await"(): $Promise<(V)>
 "sync"(): $Promise<(V)>
 "awaitUninterruptibly"(): $Promise<(V)>
 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $Promise<(V)>
 "setSuccess"(arg0: V): $Promise<(V)>
 "syncUninterruptibly"(): $Promise<(V)>
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $Promise<(V)>
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $Promise<(V)>
 "tryFailure"(arg0: $Throwable$$Type): boolean
 "trySuccess"(arg0: V): boolean
 "setFailure"(arg0: $Throwable$$Type): $Promise<(V)>
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "getNow"(): V
 "isCancellable"(): boolean
 "isSuccess"(): boolean
 "get"(arg0: long, arg1: $TimeUnit$$Type): V
 "get"(): V
 "state"(): $Future$State
 "isDone"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): V
 "exceptionNow"(): $Throwable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Promise$$Type<V> = ($Promise<(V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Promise$$Original<V> = $Promise<(V)>;}
declare module "io.netty.util.concurrent.ProgressivePromise" {
import {$GenericFutureListener$$Type} from "io.netty.util.concurrent.GenericFutureListener"
import {$Future$$Type} from "io.netty.util.concurrent.Future"
import {$Future$State} from "java.util.concurrent.Future$State"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ProgressiveFuture$$Interface} from "io.netty.util.concurrent.ProgressiveFuture"
import {$Promise$$Interface} from "io.netty.util.concurrent.Promise"
import {$TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ProgressivePromise$$Interface<V> extends $Promise$$Interface<(V)>, $ProgressiveFuture$$Interface<(V)> {
set "success"(value: V)
set "failure"(value: $Throwable$$Type)
get "uncancellable"(): boolean
get "now"(): V
get "cancellable"(): boolean
get "success"(): boolean
get "done"(): boolean
get "cancelled"(): boolean
}

export class $ProgressivePromise<V> implements $ProgressivePromise$$Interface {
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $ProgressivePromise<(V)>
 "await"(): $ProgressivePromise<(V)>
 "sync"(): $ProgressivePromise<(V)>
 "awaitUninterruptibly"(): $ProgressivePromise<(V)>
 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $ProgressivePromise<(V)>
 "setSuccess"(arg0: V): $ProgressivePromise<(V)>
 "syncUninterruptibly"(): $ProgressivePromise<(V)>
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $ProgressivePromise<(V)>
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $ProgressivePromise<(V)>
 "setFailure"(arg0: $Throwable$$Type): $ProgressivePromise<(V)>
 "setProgress"(arg0: long, arg1: long): $ProgressivePromise<(V)>
 "tryProgress"(arg0: long, arg1: long): boolean
 "setUncancellable"(): boolean
 "tryFailure"(arg0: $Throwable$$Type): boolean
 "trySuccess"(arg0: V): boolean
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "getNow"(): V
 "isCancellable"(): boolean
 "isSuccess"(): boolean
 "get"(arg0: long, arg1: $TimeUnit$$Type): V
 "get"(): V
 "state"(): $Future$State
 "isDone"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): V
 "exceptionNow"(): $Throwable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressivePromise$$Type<V> = ($ProgressivePromise<(V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProgressivePromise$$Original<V> = $ProgressivePromise<(V)>;}
declare module "io.netty.util.concurrent.EventExecutorChooserFactory" {
import {$EventExecutorChooserFactory$EventExecutorChooser, $EventExecutorChooserFactory$EventExecutorChooser$$Type} from "io.netty.util.concurrent.EventExecutorChooserFactory$EventExecutorChooser"
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventExecutorChooserFactory$$Interface {

(arg0: ($EventExecutor)[]): $EventExecutorChooserFactory$EventExecutorChooser$$Type
}

export class $EventExecutorChooserFactory implements $EventExecutorChooserFactory$$Interface {
 "newChooser"(arg0: ($EventExecutor$$Type)[]): $EventExecutorChooserFactory$EventExecutorChooser
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventExecutorChooserFactory$$Type = ((arg0: ($EventExecutor)[]) => $EventExecutorChooserFactory$EventExecutorChooser$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EventExecutorChooserFactory$$Original = $EventExecutorChooserFactory;}
declare module "io.netty.util.concurrent.EventExecutorChooserFactory$EventExecutorChooser" {
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventExecutorChooserFactory$EventExecutorChooser$$Interface {

(): $EventExecutor$$Type
}

export class $EventExecutorChooserFactory$EventExecutorChooser implements $EventExecutorChooserFactory$EventExecutorChooser$$Interface {
 "next"(): $EventExecutor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventExecutorChooserFactory$EventExecutorChooser$$Type = (() => $EventExecutor$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EventExecutorChooserFactory$EventExecutorChooser$$Original = $EventExecutorChooserFactory$EventExecutorChooser;}
declare module "io.netty.util.concurrent.GenericFutureListener" {
import {$EventListener$$Interface} from "java.util.EventListener"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $GenericFutureListener$$Interface<F extends $Future<(object)>> extends $EventListener$$Interface {

(arg0: F): void
}

export class $GenericFutureListener<F extends $Future<(object)>> implements $GenericFutureListener$$Interface {
 "operationComplete"(arg0: F): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericFutureListener$$Type<F> = ((arg0: F) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GenericFutureListener$$Original<F> = $GenericFutureListener<(F)>;}
