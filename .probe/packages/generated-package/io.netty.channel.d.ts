declare module "io.netty.channel.SelectStrategyFactory" {
import {$SelectStrategy, $SelectStrategy$$Type} from "io.netty.channel.SelectStrategy"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $SelectStrategyFactory$$Interface {

(): $SelectStrategy$$Type
}

export class $SelectStrategyFactory implements $SelectStrategyFactory$$Interface {
 "newSelectStrategy"(): $SelectStrategy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SelectStrategyFactory$$Type = (() => $SelectStrategy$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SelectStrategyFactory$$Original = $SelectStrategyFactory;}
declare module "io.netty.channel.WriteBufferWaterMark" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $WriteBufferWaterMark {
static readonly "DEFAULT": $WriteBufferWaterMark

constructor(arg0: integer, arg1: integer)

public "toString"(): StringJS
public "high"(): integer
public "low"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WriteBufferWaterMark$$Type = ($WriteBufferWaterMark);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WriteBufferWaterMark$$Original = $WriteBufferWaterMark;}
declare module "io.netty.channel.MessageSizeEstimator" {
import {$MessageSizeEstimator$Handle, $MessageSizeEstimator$Handle$$Type} from "io.netty.channel.MessageSizeEstimator$Handle"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $MessageSizeEstimator$$Interface {

(): $MessageSizeEstimator$Handle$$Type
}

export class $MessageSizeEstimator implements $MessageSizeEstimator$$Interface {
 "newHandle"(): $MessageSizeEstimator$Handle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MessageSizeEstimator$$Type = (() => $MessageSizeEstimator$Handle$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MessageSizeEstimator$$Original = $MessageSizeEstimator;}
declare module "io.netty.channel.ChannelProgressivePromise" {
import {$GenericFutureListener$$Type} from "io.netty.util.concurrent.GenericFutureListener"
import {$Future$$Type} from "io.netty.util.concurrent.Future"
import {$ChannelProgressiveFuture$$Interface} from "io.netty.channel.ChannelProgressiveFuture"
import {$Future$State} from "java.util.concurrent.Future$State"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ProgressivePromise, $ProgressivePromise$$Interface} from "io.netty.util.concurrent.ProgressivePromise"
import {$ChannelPromise$$Interface} from "io.netty.channel.ChannelPromise"
import {$Channel} from "io.netty.channel.Channel"
import {$TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelProgressivePromise$$Interface extends $ProgressivePromise$$Interface<(void)>, $ChannelProgressiveFuture$$Interface, $ChannelPromise$$Interface {
get "success"(): $ChannelProgressivePromise
set "success"(value: void)
set "failure"(value: $Throwable$$Type)
set "success"(value: void)
get "uncancellable"(): boolean
get "void"(): boolean
get "now"(): void
get "cancellable"(): boolean
get "success"(): boolean
get "done"(): boolean
get "cancelled"(): boolean
}

export class $ChannelProgressivePromise implements $ChannelProgressivePromise$$Interface {
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelProgressivePromise
 "await"(): $ChannelProgressivePromise
 "sync"(): $ChannelProgressivePromise
 "awaitUninterruptibly"(): $ChannelProgressivePromise
 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelProgressivePromise
 "setSuccess"(): $ChannelProgressivePromise
 "setSuccess"(arg0: void): $ChannelProgressivePromise
 "syncUninterruptibly"(): $ChannelProgressivePromise
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelProgressivePromise
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelProgressivePromise
 "unvoid"(): $ChannelProgressivePromise
 "setFailure"(arg0: $Throwable$$Type): $ChannelProgressivePromise
 "setProgress"(arg0: long, arg1: long): $ChannelProgressivePromise
 "setSuccess"(arg0: void): $ProgressivePromise<(void)>
 "tryProgress"(arg0: long, arg1: long): boolean
 "channel"(): $Channel
 "trySuccess"(): boolean
 "setUncancellable"(): boolean
 "tryFailure"(arg0: $Throwable$$Type): boolean
 "trySuccess"(arg0: void): boolean
 "isVoid"(): boolean
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "getNow"(): void
 "isCancellable"(): boolean
 "isSuccess"(): boolean
 "get"(arg0: long, arg1: $TimeUnit$$Type): void
 "get"(): void
 "state"(): $Future$State
 "isDone"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): void
 "exceptionNow"(): $Throwable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelProgressivePromise$$Type = ($ChannelProgressivePromise);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChannelProgressivePromise$$Original = $ChannelProgressivePromise;}
declare module "io.netty.channel.ChannelHandlerContext" {
import {$ChannelInboundInvoker$$Interface} from "io.netty.channel.ChannelInboundInvoker"
import {$SocketAddress$$Type} from "java.net.SocketAddress"
import {$ChannelPipeline} from "io.netty.channel.ChannelPipeline"
import {$ChannelPromise, $ChannelPromise$$Type} from "io.netty.channel.ChannelPromise"
import {$Channel} from "io.netty.channel.Channel"
import {$EventExecutor} from "io.netty.util.concurrent.EventExecutor"
import {$ChannelOutboundInvoker$$Interface} from "io.netty.channel.ChannelOutboundInvoker"
import {$ChannelFuture} from "io.netty.channel.ChannelFuture"
import {$ChannelProgressivePromise} from "io.netty.channel.ChannelProgressivePromise"
import {$AttributeMap$$Interface} from "io.netty.util.AttributeMap"
import {$ChannelHandler} from "io.netty.channel.ChannelHandler"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$AttributeKey$$Type} from "io.netty.util.AttributeKey"
import {$ByteBufAllocator} from "io.netty.buffer.ByteBufAllocator"
import {$Attribute} from "io.netty.util.Attribute"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelHandlerContext$$Interface extends $AttributeMap$$Interface, $ChannelInboundInvoker$$Interface, $ChannelOutboundInvoker$$Interface {
get "removed"(): boolean
}

export class $ChannelHandlerContext implements $ChannelHandlerContext$$Interface {
/**
 * 
 * @deprecated
 */
 "hasAttr"<T>(arg0: $AttributeKey$$Type<(T)>): boolean
 "name"(): StringJS
 "flush"(): $ChannelHandlerContext
 "read"(): $ChannelHandlerContext
 "handler"(): $ChannelHandler
/**
 * 
 * @deprecated
 */
 "attr"<T>(arg0: $AttributeKey$$Type<(T)>): $Attribute<(T)>
 "channel"(): $Channel
 "executor"(): $EventExecutor
 "pipeline"(): $ChannelPipeline
 "fireUserEventTriggered"(arg0: any): $ChannelHandlerContext
 "fireChannelRegistered"(): $ChannelHandlerContext
 "fireChannelUnregistered"(): $ChannelHandlerContext
 "fireChannelInactive"(): $ChannelHandlerContext
 "fireChannelReadComplete"(): $ChannelHandlerContext
 "fireChannelRead"(arg0: any): $ChannelHandlerContext
 "fireChannelActive"(): $ChannelHandlerContext
 "fireChannelWritabilityChanged"(): $ChannelHandlerContext
 "alloc"(): $ByteBufAllocator
 "fireExceptionCaught"(arg0: $Throwable$$Type): $ChannelHandlerContext
 "isRemoved"(): boolean
 "voidPromise"(): $ChannelPromise
 "disconnect"(): $ChannelFuture
 "disconnect"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "write"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "write"(arg0: any): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type, arg2: $ChannelPromise$$Type): $ChannelFuture
 "close"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "close"(): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "newProgressivePromise"(): $ChannelProgressivePromise
 "deregister"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "deregister"(): $ChannelFuture
 "newPromise"(): $ChannelPromise
 "writeAndFlush"(arg0: any): $ChannelFuture
 "writeAndFlush"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "newSucceededFuture"(): $ChannelFuture
 "newFailedFuture"(arg0: $Throwable$$Type): $ChannelFuture
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelHandlerContext$$Type = ($ChannelHandlerContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChannelHandlerContext$$Original = $ChannelHandlerContext;}
declare module "io.netty.channel.EventLoopGroup" {
import {$Iterator} from "java.util.Iterator"
import {$EventLoop} from "io.netty.channel.EventLoop"
import {$Future as $Future$0} from "io.netty.util.concurrent.Future"
import {$Collection$$Type} from "java.util.Collection"
import {$Callable$$Type} from "java.util.concurrent.Callable"
import {$Spliterator} from "java.util.Spliterator"
import {$List} from "java.util.List"
import {$Future} from "java.util.concurrent.Future"
import {$ScheduledFuture} from "io.netty.util.concurrent.ScheduledFuture"
import {$EventExecutorGroup$$Interface} from "io.netty.util.concurrent.EventExecutorGroup"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$ChannelPromise$$Type} from "io.netty.channel.ChannelPromise"
import {$Channel$$Type} from "io.netty.channel.Channel"
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$ChannelFuture} from "io.netty.channel.ChannelFuture"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventLoopGroup$$Interface extends $EventExecutorGroup$$Interface {
[Symbol.iterator](): IterableIterator<$EventExecutor>;
get "shuttingDown"(): boolean
get "terminated"(): boolean
}

export class $EventLoopGroup implements $EventLoopGroup$$Interface {
 "next"(): $EventLoop
/**
 * 
 * @deprecated
 */
 "register"(arg0: $Channel$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "register"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "register"(arg0: $Channel$$Type): $ChannelFuture
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
export type $EventLoopGroup$$Type = ($EventLoopGroup);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EventLoopGroup$$Original = $EventLoopGroup;}
declare module "io.netty.channel.ChannelConfig" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$WriteBufferWaterMark, $WriteBufferWaterMark$$Type} from "io.netty.channel.WriteBufferWaterMark"
import {$RecvByteBufAllocator, $RecvByteBufAllocator$$Type} from "io.netty.channel.RecvByteBufAllocator"
import {$ChannelOption, $ChannelOption$$Type} from "io.netty.channel.ChannelOption"
import {$ByteBufAllocator, $ByteBufAllocator$$Type} from "io.netty.buffer.ByteBufAllocator"
import {$MessageSizeEstimator, $MessageSizeEstimator$$Type} from "io.netty.channel.MessageSizeEstimator"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelConfig$$Interface {
get "allocator"(): $ByteBufAllocator
set "connectTimeoutMillis"(value: integer)
set "autoRead"(value: boolean)
get "options"(): $Map<($ChannelOption<(never)>), (any)>
set "options"(value: $Map$$Type<($ChannelOption$$Type<(never)>), (never)>)
get "writeSpinCount"(): integer
set "writeSpinCount"(value: integer)
set "autoClose"(value: boolean)
get "autoClose"(): boolean
set "allocator"(value: $ByteBufAllocator$$Type)
get "recvByteBufAllocator"(): T
set "recvByteBufAllocator"(value: $RecvByteBufAllocator$$Type)
set "maxMessagesPerRead"(value: integer)
get "maxMessagesPerRead"(): integer
get "writeBufferWaterMark"(): $WriteBufferWaterMark
get "connectTimeoutMillis"(): integer
set "writeBufferLowWaterMark"(value: integer)
set "messageSizeEstimator"(value: $MessageSizeEstimator$$Type)
get "messageSizeEstimator"(): $MessageSizeEstimator
get "writeBufferLowWaterMark"(): integer
set "writeBufferWaterMark"(value: $WriteBufferWaterMark$$Type)
get "autoRead"(): boolean
set "writeBufferHighWaterMark"(value: integer)
get "writeBufferHighWaterMark"(): integer
}

export class $ChannelConfig implements $ChannelConfig$$Interface {
 "setOption"<T>(arg0: $ChannelOption$$Type<(T)>, arg1: T): boolean
 "getOption"<T>(arg0: $ChannelOption$$Type<(T)>): T
 "getAllocator"(): $ByteBufAllocator
 "setConnectTimeoutMillis"(arg0: integer): $ChannelConfig
 "setAutoRead"(arg0: boolean): $ChannelConfig
 "getOptions"(): $Map<($ChannelOption<(never)>), (any)>
 "setOptions"(arg0: $Map$$Type<($ChannelOption$$Type<(never)>), (never)>): boolean
 "getWriteSpinCount"(): integer
 "setWriteSpinCount"(arg0: integer): $ChannelConfig
 "setAutoClose"(arg0: boolean): $ChannelConfig
 "isAutoClose"(): boolean
 "setAllocator"(arg0: $ByteBufAllocator$$Type): $ChannelConfig
 "getRecvByteBufAllocator"<T extends $RecvByteBufAllocator>(): T
 "setRecvByteBufAllocator"(arg0: $RecvByteBufAllocator$$Type): $ChannelConfig
/**
 * 
 * @deprecated
 */
 "setMaxMessagesPerRead"(arg0: integer): $ChannelConfig
/**
 * 
 * @deprecated
 */
 "getMaxMessagesPerRead"(): integer
 "getWriteBufferWaterMark"(): $WriteBufferWaterMark
 "getConnectTimeoutMillis"(): integer
 "setWriteBufferLowWaterMark"(arg0: integer): $ChannelConfig
 "setMessageSizeEstimator"(arg0: $MessageSizeEstimator$$Type): $ChannelConfig
 "getMessageSizeEstimator"(): $MessageSizeEstimator
 "getWriteBufferLowWaterMark"(): integer
 "setWriteBufferWaterMark"(arg0: $WriteBufferWaterMark$$Type): $ChannelConfig
 "isAutoRead"(): boolean
 "setWriteBufferHighWaterMark"(arg0: integer): $ChannelConfig
 "getWriteBufferHighWaterMark"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelConfig$$Type = ($ChannelConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChannelConfig$$Original = $ChannelConfig;}
declare module "io.netty.channel.ChannelPromise" {
import {$GenericFutureListener$$Type} from "io.netty.util.concurrent.GenericFutureListener"
import {$ChannelFuture$$Interface} from "io.netty.channel.ChannelFuture"
import {$Future$$Type} from "io.netty.util.concurrent.Future"
import {$Future$State} from "java.util.concurrent.Future$State"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$Promise, $Promise$$Interface} from "io.netty.util.concurrent.Promise"
import {$Channel} from "io.netty.channel.Channel"
import {$TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelPromise$$Interface extends $ChannelFuture$$Interface, $Promise$$Interface<(void)> {
get "success"(): $ChannelPromise
set "success"(value: void)
set "failure"(value: $Throwable$$Type)
get "void"(): boolean
get "uncancellable"(): boolean
set "success"(value: void)
get "now"(): void
get "cancellable"(): boolean
get "success"(): boolean
get "done"(): boolean
get "cancelled"(): boolean
}

export class $ChannelPromise implements $ChannelPromise$$Interface {
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelPromise
 "await"(): $ChannelPromise
 "sync"(): $ChannelPromise
 "channel"(): $Channel
 "awaitUninterruptibly"(): $ChannelPromise
 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelPromise
 "setSuccess"(): $ChannelPromise
 "setSuccess"(arg0: void): $ChannelPromise
 "syncUninterruptibly"(): $ChannelPromise
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelPromise
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelPromise
 "unvoid"(): $ChannelPromise
 "trySuccess"(): boolean
 "setFailure"(arg0: $Throwable$$Type): $ChannelPromise
 "isVoid"(): boolean
 "setUncancellable"(): boolean
 "setSuccess"(arg0: void): $Promise<(void)>
 "tryFailure"(arg0: $Throwable$$Type): boolean
 "trySuccess"(arg0: void): boolean
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "getNow"(): void
 "isCancellable"(): boolean
 "isSuccess"(): boolean
 "get"(arg0: long, arg1: $TimeUnit$$Type): void
 "get"(): void
 "state"(): $Future$State
 "isDone"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): void
 "exceptionNow"(): $Throwable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelPromise$$Type = ($ChannelPromise);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChannelPromise$$Original = $ChannelPromise;}
declare module "io.netty.channel.Channel" {
import {$EventLoop} from "io.netty.channel.EventLoop"
import {$ChannelConfig} from "io.netty.channel.ChannelConfig"
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Channel$Unsafe} from "io.netty.channel.Channel$Unsafe"
import {$ChannelId} from "io.netty.channel.ChannelId"
import {$ChannelPipeline} from "io.netty.channel.ChannelPipeline"
import {$ChannelPromise, $ChannelPromise$$Type} from "io.netty.channel.ChannelPromise"
import {$ChannelOutboundInvoker$$Interface} from "io.netty.channel.ChannelOutboundInvoker"
import {$ChannelFuture} from "io.netty.channel.ChannelFuture"
import {$ChannelProgressivePromise} from "io.netty.channel.ChannelProgressivePromise"
import {$AttributeMap$$Interface} from "io.netty.util.AttributeMap"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$AttributeKey$$Type} from "io.netty.util.AttributeKey"
import {$ByteBufAllocator} from "io.netty.buffer.ByteBufAllocator"
import {$ChannelMetadata} from "io.netty.channel.ChannelMetadata"
import {$Attribute} from "io.netty.util.Attribute"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Channel$$Interface extends $AttributeMap$$Interface, $ChannelOutboundInvoker$$Interface, $Comparable$$Interface<($Channel)> {
get "open"(): boolean
get "registered"(): boolean
get "active"(): boolean
get "writable"(): boolean
}

export class $Channel implements $Channel$$Interface {
 "localAddress"(): $SocketAddress
 "remoteAddress"(): $SocketAddress
 "parent"(): $Channel
 "flush"(): $Channel
 "isOpen"(): boolean
 "isRegistered"(): boolean
 "id"(): $ChannelId
 "unsafe"(): $Channel$Unsafe
 "read"(): $Channel
 "isActive"(): boolean
 "config"(): $ChannelConfig
 "isWritable"(): boolean
 "metadata"(): $ChannelMetadata
 "pipeline"(): $ChannelPipeline
 "closeFuture"(): $ChannelFuture
 "eventLoop"(): $EventLoop
 "alloc"(): $ByteBufAllocator
 "bytesBeforeWritable"(): long
 "bytesBeforeUnwritable"(): long
 "hasAttr"<T>(arg0: $AttributeKey$$Type<(T)>): boolean
 "attr"<T>(arg0: $AttributeKey$$Type<(T)>): $Attribute<(T)>
 "voidPromise"(): $ChannelPromise
 "disconnect"(): $ChannelFuture
 "disconnect"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "write"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "write"(arg0: any): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type, arg2: $ChannelPromise$$Type): $ChannelFuture
 "close"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "close"(): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "newProgressivePromise"(): $ChannelProgressivePromise
 "deregister"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "deregister"(): $ChannelFuture
 "newPromise"(): $ChannelPromise
 "writeAndFlush"(arg0: any): $ChannelFuture
 "writeAndFlush"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "newSucceededFuture"(): $ChannelFuture
 "newFailedFuture"(arg0: $Throwable$$Type): $ChannelFuture
 "compareTo"(arg0: $Channel$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Channel$$Type = ($Channel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Channel$$Original = $Channel;}
declare module "io.netty.channel.SelectStrategy" {
import {$IntSupplier, $IntSupplier$$Type} from "io.netty.util.IntSupplier"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $SelectStrategy$$Interface {

(arg0: $IntSupplier, arg1: boolean): integer
}

export class $SelectStrategy implements $SelectStrategy$$Interface {
static readonly "CONTINUE": integer
static readonly "BUSY_WAIT": integer
static readonly "SELECT": integer

 "calculateStrategy"(arg0: $IntSupplier$$Type, arg1: boolean): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SelectStrategy$$Type = ((arg0: $IntSupplier, arg1: boolean) => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SelectStrategy$$Original = $SelectStrategy;}
declare module "io.netty.channel.ChannelMetadata" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ChannelMetadata {
constructor(arg0: boolean)
constructor(arg0: boolean, arg1: integer)

public "hasDisconnect"(): boolean
public "defaultMaxMessagesPerRead"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelMetadata$$Type = ($ChannelMetadata);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChannelMetadata$$Original = $ChannelMetadata;}
declare module "io.netty.channel.SimpleChannelInboundHandler" {
import {$ChannelInboundHandlerAdapter} from "io.netty.channel.ChannelInboundHandlerAdapter"
import {$ChannelHandlerContext$$Type} from "io.netty.channel.ChannelHandlerContext"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $SimpleChannelInboundHandler<I> extends $ChannelInboundHandlerAdapter {
public "acceptInboundMessage"(arg0: any): boolean
public "channelRead"(arg0: $ChannelHandlerContext$$Type, arg1: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleChannelInboundHandler$$Type<I> = ($SimpleChannelInboundHandler<(I)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleChannelInboundHandler$$Original<I> = $SimpleChannelInboundHandler<(I)>;}
declare module "io.netty.channel.RecvByteBufAllocator" {
import {$RecvByteBufAllocator$Handle, $RecvByteBufAllocator$Handle$$Type} from "io.netty.channel.RecvByteBufAllocator$Handle"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $RecvByteBufAllocator$$Interface {

(): $RecvByteBufAllocator$Handle$$Type
}

export class $RecvByteBufAllocator implements $RecvByteBufAllocator$$Interface {
 "newHandle"(): $RecvByteBufAllocator$Handle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecvByteBufAllocator$$Type = (() => $RecvByteBufAllocator$Handle$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecvByteBufAllocator$$Original = $RecvByteBufAllocator;}
declare module "io.netty.channel.ChannelPipeline" {
import {$Iterator} from "java.util.Iterator"
import {$Iterable$$Interface} from "java.lang.Iterable"
import {$ChannelInboundInvoker$$Interface} from "io.netty.channel.ChannelInboundInvoker"
import {$Map} from "java.util.Map"
import {$SocketAddress$$Type} from "java.net.SocketAddress"
import {$Spliterator} from "java.util.Spliterator"
import {$List} from "java.util.List"
import {$EventExecutorGroup$$Type} from "io.netty.util.concurrent.EventExecutorGroup"
import {$ChannelPromise, $ChannelPromise$$Type} from "io.netty.channel.ChannelPromise"
import {$Channel} from "io.netty.channel.Channel"
import {$ChannelHandlerContext} from "io.netty.channel.ChannelHandlerContext"
import {$ChannelOutboundInvoker, $ChannelOutboundInvoker$$Interface} from "io.netty.channel.ChannelOutboundInvoker"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ChannelFuture} from "io.netty.channel.ChannelFuture"
import {$ChannelProgressivePromise} from "io.netty.channel.ChannelProgressivePromise"
import {$ChannelHandler, $ChannelHandler$$Type} from "io.netty.channel.ChannelHandler"
import {$Class$$Type} from "java.lang.Class"
import {$Throwable$$Type} from "java.lang.Throwable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelPipeline$$Interface extends $ChannelInboundInvoker$$Interface, $ChannelOutboundInvoker$$Interface, $Iterable$$Interface<($Map$Entry<(StringJS), ($ChannelHandler)>)> {
[Symbol.iterator](): IterableIterator<$Map$Entry<(StringJS), ($ChannelHandler)>>;
}

export class $ChannelPipeline implements $ChannelPipeline$$Interface {
 "lastContext"(): $ChannelHandlerContext
 "remove"(arg0: $ChannelHandler$$Type): $ChannelPipeline
 "remove"<T extends $ChannelHandler>(arg0: $Class$$Type<(T)>): T
 "remove"(arg0: StringJS): $ChannelHandler
 "get"(arg0: StringJS): $ChannelHandler
 "get"<T extends $ChannelHandler>(arg0: $Class$$Type<(T)>): T
 "context"(arg0: $Class$$Type<($ChannelHandler$$Type)>): $ChannelHandlerContext
 "context"(arg0: StringJS): $ChannelHandlerContext
 "context"(arg0: $ChannelHandler$$Type): $ChannelHandlerContext
 "flush"(): $ChannelPipeline
 "replace"(arg0: StringJS, arg1: StringJS, arg2: $ChannelHandler$$Type): $ChannelHandler
 "replace"<T extends $ChannelHandler>(arg0: $Class$$Type<(T)>, arg1: StringJS, arg2: $ChannelHandler$$Type): T
 "replace"(arg0: $ChannelHandler$$Type, arg1: StringJS, arg2: $ChannelHandler$$Type): $ChannelPipeline
 "last"(): $ChannelHandler
 "toMap"(): $Map<(StringJS), ($ChannelHandler)>
 "first"(): $ChannelHandler
 "names"(): $List<(StringJS)>
 "addFirst"(arg0: StringJS, arg1: $ChannelHandler$$Type): $ChannelPipeline
 "addFirst"(...arg0: ($ChannelHandler$$Type)[]): $ChannelPipeline
 "addFirst"(arg0: $EventExecutorGroup$$Type, arg1: StringJS, arg2: $ChannelHandler$$Type): $ChannelPipeline
 "addFirst"(arg0: $EventExecutorGroup$$Type, ...arg1: ($ChannelHandler$$Type)[]): $ChannelPipeline
 "addLast"(arg0: $EventExecutorGroup$$Type, arg1: StringJS, arg2: $ChannelHandler$$Type): $ChannelPipeline
 "addLast"(arg0: StringJS, arg1: $ChannelHandler$$Type): $ChannelPipeline
 "addLast"(...arg0: ($ChannelHandler$$Type)[]): $ChannelPipeline
 "addLast"(arg0: $EventExecutorGroup$$Type, ...arg1: ($ChannelHandler$$Type)[]): $ChannelPipeline
 "removeFirst"(): $ChannelHandler
 "removeLast"(): $ChannelHandler
 "channel"(): $Channel
 "addAfter"(arg0: StringJS, arg1: StringJS, arg2: $ChannelHandler$$Type): $ChannelPipeline
 "addAfter"(arg0: $EventExecutorGroup$$Type, arg1: StringJS, arg2: StringJS, arg3: $ChannelHandler$$Type): $ChannelPipeline
 "addBefore"(arg0: StringJS, arg1: StringJS, arg2: $ChannelHandler$$Type): $ChannelPipeline
 "addBefore"(arg0: $EventExecutorGroup$$Type, arg1: StringJS, arg2: StringJS, arg3: $ChannelHandler$$Type): $ChannelPipeline
 "fireUserEventTriggered"(arg0: any): $ChannelPipeline
 "fireChannelRegistered"(): $ChannelPipeline
 "fireChannelUnregistered"(): $ChannelPipeline
 "fireChannelInactive"(): $ChannelPipeline
 "fireChannelReadComplete"(): $ChannelPipeline
 "fireChannelRead"(arg0: any): $ChannelPipeline
 "fireChannelActive"(): $ChannelPipeline
 "fireChannelWritabilityChanged"(): $ChannelPipeline
 "fireExceptionCaught"(arg0: $Throwable$$Type): $ChannelPipeline
 "firstContext"(): $ChannelHandlerContext
 "voidPromise"(): $ChannelPromise
 "disconnect"(): $ChannelFuture
 "disconnect"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "write"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "write"(arg0: any): $ChannelFuture
 "read"(): $ChannelOutboundInvoker
 "connect"(arg0: $SocketAddress$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type, arg2: $ChannelPromise$$Type): $ChannelFuture
 "close"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "close"(): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "newProgressivePromise"(): $ChannelProgressivePromise
 "deregister"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "deregister"(): $ChannelFuture
 "newPromise"(): $ChannelPromise
 "writeAndFlush"(arg0: any): $ChannelFuture
 "writeAndFlush"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "newSucceededFuture"(): $ChannelFuture
 "newFailedFuture"(arg0: $Throwable$$Type): $ChannelFuture
 "iterator"(): $Iterator<($Map$Entry<(StringJS), ($ChannelHandler)>)>
 "spliterator"(): $Spliterator<($Map$Entry<(StringJS), ($ChannelHandler)>)>
 "forEach"(arg0: $Consumer$$Type<($Map$Entry<(StringJS), ($ChannelHandler)>)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelPipeline$$Type = ($ChannelPipeline);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChannelPipeline$$Original = $ChannelPipeline;}
declare module "io.netty.channel.ChannelHandler" {
import {$Throwable$$Type} from "java.lang.Throwable"
import {$ChannelHandlerContext$$Type} from "io.netty.channel.ChannelHandlerContext"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelHandler$$Interface {
}

export class $ChannelHandler implements $ChannelHandler$$Interface {
 "handlerRemoved"(arg0: $ChannelHandlerContext$$Type): void
/**
 * 
 * @deprecated
 */
 "exceptionCaught"(arg0: $ChannelHandlerContext$$Type, arg1: $Throwable$$Type): void
 "handlerAdded"(arg0: $ChannelHandlerContext$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelHandler$$Type = ($ChannelHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChannelHandler$$Original = $ChannelHandler;}
declare module "io.netty.channel.ChannelHandlerAdapter" {
import {$ChannelHandler$$Interface} from "io.netty.channel.ChannelHandler"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$ChannelHandlerContext$$Type} from "io.netty.channel.ChannelHandlerContext"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ChannelHandlerAdapter implements $ChannelHandler$$Interface {
constructor()

public "isSharable"(): boolean
public "handlerRemoved"(arg0: $ChannelHandlerContext$$Type): void
/**
 * 
 * @deprecated
 */
public "exceptionCaught"(arg0: $ChannelHandlerContext$$Type, arg1: $Throwable$$Type): void
public "handlerAdded"(arg0: $ChannelHandlerContext$$Type): void
get "sharable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelHandlerAdapter$$Type = ($ChannelHandlerAdapter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChannelHandlerAdapter$$Original = $ChannelHandlerAdapter;}
declare module "io.netty.channel.ChannelInboundHandler" {
import {$ChannelHandler$$Interface} from "io.netty.channel.ChannelHandler"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$ChannelHandlerContext$$Type} from "io.netty.channel.ChannelHandlerContext"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelInboundHandler$$Interface extends $ChannelHandler$$Interface {
}

export class $ChannelInboundHandler implements $ChannelInboundHandler$$Interface {
 "channelActive"(arg0: $ChannelHandlerContext$$Type): void
 "channelInactive"(arg0: $ChannelHandlerContext$$Type): void
 "channelReadComplete"(arg0: $ChannelHandlerContext$$Type): void
 "channelWritabilityChanged"(arg0: $ChannelHandlerContext$$Type): void
 "channelUnregistered"(arg0: $ChannelHandlerContext$$Type): void
 "exceptionCaught"(arg0: $ChannelHandlerContext$$Type, arg1: $Throwable$$Type): void
 "channelRead"(arg0: $ChannelHandlerContext$$Type, arg1: any): void
 "userEventTriggered"(arg0: $ChannelHandlerContext$$Type, arg1: any): void
 "channelRegistered"(arg0: $ChannelHandlerContext$$Type): void
 "handlerRemoved"(arg0: $ChannelHandlerContext$$Type): void
 "handlerAdded"(arg0: $ChannelHandlerContext$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelInboundHandler$$Type = ($ChannelInboundHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChannelInboundHandler$$Original = $ChannelInboundHandler;}
declare module "io.netty.channel.ChannelInboundInvoker" {
import {$Throwable$$Type} from "java.lang.Throwable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelInboundInvoker$$Interface {
}

export class $ChannelInboundInvoker implements $ChannelInboundInvoker$$Interface {
 "fireUserEventTriggered"(arg0: any): $ChannelInboundInvoker
 "fireChannelRegistered"(): $ChannelInboundInvoker
 "fireChannelUnregistered"(): $ChannelInboundInvoker
 "fireChannelInactive"(): $ChannelInboundInvoker
 "fireChannelReadComplete"(): $ChannelInboundInvoker
 "fireChannelRead"(arg0: any): $ChannelInboundInvoker
 "fireChannelActive"(): $ChannelInboundInvoker
 "fireChannelWritabilityChanged"(): $ChannelInboundInvoker
 "fireExceptionCaught"(arg0: $Throwable$$Type): $ChannelInboundInvoker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelInboundInvoker$$Type = ($ChannelInboundInvoker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChannelInboundInvoker$$Original = $ChannelInboundInvoker;}
declare module "io.netty.channel.DefaultEventLoopGroup" {
import {$Callable$$Type} from "java.util.concurrent.Callable"
import {$Future} from "io.netty.util.concurrent.Future"
import {$List} from "java.util.List"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$ThreadFactory$$Type} from "java.util.concurrent.ThreadFactory"
import {$ScheduledFuture} from "io.netty.util.concurrent.ScheduledFuture"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$EventExecutor} from "io.netty.util.concurrent.EventExecutor"
import {$TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$MultithreadEventLoopGroup} from "io.netty.channel.MultithreadEventLoopGroup"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DefaultEventLoopGroup extends $MultithreadEventLoopGroup {
constructor(arg0: integer, arg1: $Executor$$Type)
constructor(arg0: integer, arg1: $ThreadFactory$$Type)
constructor(arg0: $ThreadFactory$$Type)
constructor(arg0: integer)
constructor()

public "next"(): $EventExecutor
public "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(never)>
public "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
public "submit"(arg0: $Runnable$$Type): $Future<(never)>
public "submit"<T>(arg0: $Callable$$Type<(T)>): $Future<(T)>
public "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future<(T)>
/**
 * 
 * @deprecated
 */
public "shutdownNow"(): $List<($Runnable)>
public "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(never)>
public "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(never)>
public "shutdownGracefully"(): $Future<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DefaultEventLoopGroup$$Type = ($DefaultEventLoopGroup);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DefaultEventLoopGroup$$Original = $DefaultEventLoopGroup;}
declare module "io.netty.channel.MessageSizeEstimator$Handle" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $MessageSizeEstimator$Handle$$Interface {

(arg0: any): integer
}

export class $MessageSizeEstimator$Handle implements $MessageSizeEstimator$Handle$$Interface {
 "size"(arg0: any): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MessageSizeEstimator$Handle$$Type = ((arg0: any) => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MessageSizeEstimator$Handle$$Original = $MessageSizeEstimator$Handle;}
declare module "io.netty.channel.ChannelId" {
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Serializable$$Interface} from "java.io.Serializable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelId$$Interface extends $Serializable$$Interface, $Comparable$$Interface<($ChannelId)> {
}

export class $ChannelId implements $ChannelId$$Interface {
 "asShortText"(): StringJS
 "asLongText"(): StringJS
 "compareTo"(arg0: $ChannelId$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelId$$Type = ($ChannelId);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChannelId$$Original = $ChannelId;}
declare module "io.netty.channel.ChannelProgressiveFuture" {
import {$GenericFutureListener$$Type} from "io.netty.util.concurrent.GenericFutureListener"
import {$ChannelFuture$$Interface} from "io.netty.channel.ChannelFuture"
import {$Future$$Type} from "io.netty.util.concurrent.Future"
import {$Future$State} from "java.util.concurrent.Future$State"
import {$Throwable} from "java.lang.Throwable"
import {$ProgressiveFuture$$Interface} from "io.netty.util.concurrent.ProgressiveFuture"
import {$Channel} from "io.netty.channel.Channel"
import {$TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelProgressiveFuture$$Interface extends $ChannelFuture$$Interface, $ProgressiveFuture$$Interface<(void)> {
get "void"(): boolean
get "now"(): void
get "cancellable"(): boolean
get "success"(): boolean
get "done"(): boolean
get "cancelled"(): boolean
}

export class $ChannelProgressiveFuture implements $ChannelProgressiveFuture$$Interface {
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelProgressiveFuture
 "await"(): $ChannelProgressiveFuture
 "sync"(): $ChannelProgressiveFuture
 "awaitUninterruptibly"(): $ChannelProgressiveFuture
 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelProgressiveFuture
 "syncUninterruptibly"(): $ChannelProgressiveFuture
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelProgressiveFuture
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelProgressiveFuture
 "isVoid"(): boolean
 "channel"(): $Channel
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "getNow"(): void
 "isCancellable"(): boolean
 "isSuccess"(): boolean
 "get"(arg0: long, arg1: $TimeUnit$$Type): void
 "get"(): void
 "state"(): $Future$State
 "isDone"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): void
 "exceptionNow"(): $Throwable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelProgressiveFuture$$Type = ($ChannelProgressiveFuture);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChannelProgressiveFuture$$Original = $ChannelProgressiveFuture;}
declare module "io.netty.channel.RecvByteBufAllocator$Handle" {
import {$ChannelConfig$$Type} from "io.netty.channel.ChannelConfig"
import {$ByteBufAllocator$$Type} from "io.netty.buffer.ByteBufAllocator"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

/**
 * 
 * @deprecated
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $RecvByteBufAllocator$Handle$$Interface {
}

export class $RecvByteBufAllocator$Handle implements $RecvByteBufAllocator$Handle$$Interface {
 "reset"(arg0: $ChannelConfig$$Type): void
 "allocate"(arg0: $ByteBufAllocator$$Type): $ByteBuf
 "guess"(): integer
 "continueReading"(): boolean
 "readComplete"(): void
 "attemptedBytesRead"(): integer
 "attemptedBytesRead"(arg0: integer): void
 "lastBytesRead"(): integer
 "lastBytesRead"(arg0: integer): void
 "incMessagesRead"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecvByteBufAllocator$Handle$$Type = ($RecvByteBufAllocator$Handle);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecvByteBufAllocator$Handle$$Original = $RecvByteBufAllocator$Handle;}
declare module "io.netty.channel.ChannelOutboundBuffer" {
import {$ChannelOutboundBuffer$MessageProcessor$$Type} from "io.netty.channel.ChannelOutboundBuffer$MessageProcessor"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$ByteBuffer} from "java.nio.ByteBuffer"
import {$ChannelPromise$$Type} from "io.netty.channel.ChannelPromise"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ChannelOutboundBuffer {
public "remove"(): boolean
public "remove"(arg0: $Throwable$$Type): boolean
public "size"(): integer
public "isEmpty"(): boolean
public "current"(): any
public "isWritable"(): boolean
public "addMessage"(arg0: any, arg1: integer, arg2: $ChannelPromise$$Type): void
public "currentProgress"(): long
public "nioBuffers"(arg0: integer, arg1: long): ($ByteBuffer)[]
public "nioBuffers"(): ($ByteBuffer)[]
public "progress"(arg0: long): void
public "nioBufferCount"(): integer
/**
 * 
 * @deprecated
 */
public "recycle"(): void
public "nioBufferSize"(): long
public "removeBytes"(arg0: long): void
public "bytesBeforeWritable"(): long
public "bytesBeforeUnwritable"(): long
public "forEachFlushedMessage"(arg0: $ChannelOutboundBuffer$MessageProcessor$$Type): void
public "totalPendingWriteBytes"(): long
public "getUserDefinedWritability"(arg0: integer): boolean
public "setUserDefinedWritability"(arg0: integer, arg1: boolean): void
public "addFlush"(): void
get "empty"(): boolean
get "writable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelOutboundBuffer$$Type = ($ChannelOutboundBuffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChannelOutboundBuffer$$Original = $ChannelOutboundBuffer;}
declare module "io.netty.channel.ChannelOutboundInvoker" {
import {$ChannelFuture} from "io.netty.channel.ChannelFuture"
import {$SocketAddress$$Type} from "java.net.SocketAddress"
import {$ChannelProgressivePromise} from "io.netty.channel.ChannelProgressivePromise"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$ChannelPromise, $ChannelPromise$$Type} from "io.netty.channel.ChannelPromise"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelOutboundInvoker$$Interface {
}

export class $ChannelOutboundInvoker implements $ChannelOutboundInvoker$$Interface {
 "voidPromise"(): $ChannelPromise
 "disconnect"(): $ChannelFuture
 "disconnect"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "flush"(): $ChannelOutboundInvoker
 "write"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "write"(arg0: any): $ChannelFuture
 "read"(): $ChannelOutboundInvoker
 "connect"(arg0: $SocketAddress$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type, arg2: $ChannelPromise$$Type): $ChannelFuture
 "close"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "close"(): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "newProgressivePromise"(): $ChannelProgressivePromise
 "deregister"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "deregister"(): $ChannelFuture
 "newPromise"(): $ChannelPromise
 "writeAndFlush"(arg0: any): $ChannelFuture
 "writeAndFlush"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "newSucceededFuture"(): $ChannelFuture
 "newFailedFuture"(arg0: $Throwable$$Type): $ChannelFuture
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelOutboundInvoker$$Type = ($ChannelOutboundInvoker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChannelOutboundInvoker$$Original = $ChannelOutboundInvoker;}
declare module "io.netty.channel.EventLoopTaskQueueFactory" {
import {$Queue, $Queue$$Type} from "java.util.Queue"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventLoopTaskQueueFactory$$Interface {

(arg0: integer): $Queue$$Type<($Runnable$$Type)>
}

export class $EventLoopTaskQueueFactory implements $EventLoopTaskQueueFactory$$Interface {
 "newTaskQueue"(arg0: integer): $Queue<($Runnable)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventLoopTaskQueueFactory$$Type = ((arg0: integer) => $Queue$$Type<($Runnable$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EventLoopTaskQueueFactory$$Original = $EventLoopTaskQueueFactory;}
declare module "io.netty.channel.MultithreadEventLoopGroup" {
import {$Future} from "io.netty.util.concurrent.Future"
import {$Callable$$Type} from "java.util.concurrent.Callable"
import {$EventLoopGroup$$Interface} from "io.netty.channel.EventLoopGroup"
import {$List} from "java.util.List"
import {$ScheduledFuture} from "io.netty.util.concurrent.ScheduledFuture"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$ChannelPromise$$Type} from "io.netty.channel.ChannelPromise"
import {$Channel$$Type} from "io.netty.channel.Channel"
import {$EventExecutor} from "io.netty.util.concurrent.EventExecutor"
import {$TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$ChannelFuture} from "io.netty.channel.ChannelFuture"
import {$MultithreadEventExecutorGroup} from "io.netty.util.concurrent.MultithreadEventExecutorGroup"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $MultithreadEventLoopGroup extends $MultithreadEventExecutorGroup implements $EventLoopGroup$$Interface {
public "next"(): $EventExecutor
public "register"(arg0: $Channel$$Type): $ChannelFuture
/**
 * 
 * @deprecated
 */
public "register"(arg0: $Channel$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
public "register"(arg0: $ChannelPromise$$Type): $ChannelFuture
public "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(never)>
public "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
public "submit"(arg0: $Runnable$$Type): $Future<(never)>
public "submit"<T>(arg0: $Callable$$Type<(T)>): $Future<(T)>
public "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future<(T)>
/**
 * 
 * @deprecated
 */
public "shutdownNow"(): $List<($Runnable)>
public "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(never)>
public "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(never)>
public "shutdownGracefully"(): $Future<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultithreadEventLoopGroup$$Type = ($MultithreadEventLoopGroup);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultithreadEventLoopGroup$$Original = $MultithreadEventLoopGroup;}
declare module "io.netty.channel.ChannelInboundHandlerAdapter" {
import {$ChannelHandlerAdapter} from "io.netty.channel.ChannelHandlerAdapter"
import {$ChannelInboundHandler$$Interface} from "io.netty.channel.ChannelInboundHandler"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$ChannelHandlerContext$$Type} from "io.netty.channel.ChannelHandlerContext"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ChannelInboundHandlerAdapter extends $ChannelHandlerAdapter implements $ChannelInboundHandler$$Interface {
constructor()

public "channelActive"(arg0: $ChannelHandlerContext$$Type): void
public "channelInactive"(arg0: $ChannelHandlerContext$$Type): void
public "channelReadComplete"(arg0: $ChannelHandlerContext$$Type): void
public "channelWritabilityChanged"(arg0: $ChannelHandlerContext$$Type): void
public "channelUnregistered"(arg0: $ChannelHandlerContext$$Type): void
public "exceptionCaught"(arg0: $ChannelHandlerContext$$Type, arg1: $Throwable$$Type): void
public "channelRead"(arg0: $ChannelHandlerContext$$Type, arg1: any): void
public "userEventTriggered"(arg0: $ChannelHandlerContext$$Type, arg1: any): void
public "channelRegistered"(arg0: $ChannelHandlerContext$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelInboundHandlerAdapter$$Type = ($ChannelInboundHandlerAdapter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChannelInboundHandlerAdapter$$Original = $ChannelInboundHandlerAdapter;}
declare module "io.netty.channel.ChannelOutboundBuffer$MessageProcessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelOutboundBuffer$MessageProcessor$$Interface {

(arg0: any): boolean
}

export class $ChannelOutboundBuffer$MessageProcessor implements $ChannelOutboundBuffer$MessageProcessor$$Interface {
 "processMessage"(arg0: any): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelOutboundBuffer$MessageProcessor$$Type = ((arg0: any) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChannelOutboundBuffer$MessageProcessor$$Original = $ChannelOutboundBuffer$MessageProcessor;}
declare module "io.netty.channel.Channel$Unsafe" {
import {$EventLoop$$Type} from "io.netty.channel.EventLoop"
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$ChannelOutboundBuffer} from "io.netty.channel.ChannelOutboundBuffer"
import {$ChannelPromise, $ChannelPromise$$Type} from "io.netty.channel.ChannelPromise"
import {$RecvByteBufAllocator$Handle} from "io.netty.channel.RecvByteBufAllocator$Handle"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Channel$Unsafe$$Interface {
}

export class $Channel$Unsafe implements $Channel$Unsafe$$Interface {
 "voidPromise"(): $ChannelPromise
 "disconnect"(arg0: $ChannelPromise$$Type): void
 "localAddress"(): $SocketAddress
 "remoteAddress"(): $SocketAddress
 "flush"(): void
 "register"(arg0: $EventLoop$$Type, arg1: $ChannelPromise$$Type): void
 "write"(arg0: any, arg1: $ChannelPromise$$Type): void
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type, arg2: $ChannelPromise$$Type): void
 "close"(arg0: $ChannelPromise$$Type): void
 "bind"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): void
 "beginRead"(): void
 "deregister"(arg0: $ChannelPromise$$Type): void
 "closeForcibly"(): void
 "outboundBuffer"(): $ChannelOutboundBuffer
 "recvBufAllocHandle"(): $RecvByteBufAllocator$Handle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Channel$Unsafe$$Type = ($Channel$Unsafe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Channel$Unsafe$$Original = $Channel$Unsafe;}
declare module "io.netty.channel.ChannelFuture" {
import {$GenericFutureListener$$Type} from "io.netty.util.concurrent.GenericFutureListener"
import {$Future$$Type, $Future$$Interface} from "io.netty.util.concurrent.Future"
import {$Future$State} from "java.util.concurrent.Future$State"
import {$Throwable} from "java.lang.Throwable"
import {$Channel} from "io.netty.channel.Channel"
import {$TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelFuture$$Interface extends $Future$$Interface<(void)> {
get "void"(): boolean
get "now"(): void
get "cancellable"(): boolean
get "success"(): boolean
get "done"(): boolean
get "cancelled"(): boolean
}

export class $ChannelFuture implements $ChannelFuture$$Interface {
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelFuture
 "await"(): $ChannelFuture
 "isVoid"(): boolean
 "sync"(): $ChannelFuture
 "channel"(): $Channel
 "awaitUninterruptibly"(): $ChannelFuture
 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelFuture
 "syncUninterruptibly"(): $ChannelFuture
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelFuture
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelFuture
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "getNow"(): void
 "isCancellable"(): boolean
 "isSuccess"(): boolean
 "get"(arg0: long, arg1: $TimeUnit$$Type): void
 "get"(): void
 "state"(): $Future$State
 "isDone"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): void
 "exceptionNow"(): $Throwable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelFuture$$Type = ($ChannelFuture);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChannelFuture$$Original = $ChannelFuture;}
declare module "io.netty.channel.EventLoop" {
import {$Iterator} from "java.util.Iterator"
import {$Collection$$Type} from "java.util.Collection"
import {$Future as $Future$0} from "io.netty.util.concurrent.Future"
import {$Callable$$Type} from "java.util.concurrent.Callable"
import {$EventLoopGroup, $EventLoopGroup$$Interface} from "io.netty.channel.EventLoopGroup"
import {$Spliterator} from "java.util.Spliterator"
import {$List} from "java.util.List"
import {$Thread$$Type} from "java.lang.Thread"
import {$Future} from "java.util.concurrent.Future"
import {$ScheduledFuture} from "io.netty.util.concurrent.ScheduledFuture"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Promise} from "io.netty.util.concurrent.Promise"
import {$ChannelPromise$$Type} from "io.netty.channel.ChannelPromise"
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"
import {$Channel$$Type} from "io.netty.channel.Channel"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$ChannelFuture} from "io.netty.channel.ChannelFuture"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$ProgressivePromise} from "io.netty.util.concurrent.ProgressivePromise"
import {$OrderedEventExecutor$$Interface} from "io.netty.util.concurrent.OrderedEventExecutor"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventLoop$$Interface extends $OrderedEventExecutor$$Interface, $EventLoopGroup$$Interface {
[Symbol.iterator](): IterableIterator<$EventExecutor>;
get "shuttingDown"(): boolean
get "terminated"(): boolean
}

export class $EventLoop implements $EventLoop$$Interface {
 "parent"(): $EventLoopGroup
 "next"(): $EventLoop
/**
 * 
 * @deprecated
 */
 "register"(arg0: $Channel$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "register"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "register"(arg0: $Channel$$Type): $ChannelFuture
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
export type $EventLoop$$Type = ($EventLoop);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EventLoop$$Original = $EventLoop;}
declare module "io.netty.channel.ChannelOption" {
import {$WriteBufferWaterMark} from "io.netty.channel.WriteBufferWaterMark"
import {$RecvByteBufAllocator} from "io.netty.channel.RecvByteBufAllocator"
import {$InetAddress} from "java.net.InetAddress"
import {$AbstractConstant} from "io.netty.util.AbstractConstant"
import {$Class$$Type} from "java.lang.Class"
import {$NetworkInterface} from "java.net.NetworkInterface"
import {$ByteBufAllocator} from "io.netty.buffer.ByteBufAllocator"
import {$MessageSizeEstimator} from "io.netty.channel.MessageSizeEstimator"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ChannelOption<T> extends $AbstractConstant<($ChannelOption<(T)>)> {
/**
 * 
 * @deprecated
 */
static readonly "WRITE_BUFFER_HIGH_WATER_MARK": $ChannelOption<(integer)>
/**
 * 
 * @deprecated
 */
static readonly "WRITE_BUFFER_LOW_WATER_MARK": $ChannelOption<(integer)>
/**
 * 
 * @deprecated
 */
static readonly "DATAGRAM_CHANNEL_ACTIVE_ON_REGISTRATION": $ChannelOption<(boolean)>
static readonly "IP_TOS": $ChannelOption<(integer)>
static readonly "SINGLE_EVENTEXECUTOR_PER_GROUP": $ChannelOption<(boolean)>
static readonly "SO_SNDBUF": $ChannelOption<(integer)>
static readonly "IP_MULTICAST_IF": $ChannelOption<($NetworkInterface)>
static readonly "WRITE_BUFFER_WATER_MARK": $ChannelOption<($WriteBufferWaterMark)>
static readonly "TCP_NODELAY": $ChannelOption<(boolean)>
static readonly "TCP_FASTOPEN": $ChannelOption<(integer)>
static readonly "SO_LINGER": $ChannelOption<(integer)>
static readonly "SO_RCVBUF": $ChannelOption<(integer)>
static readonly "SO_KEEPALIVE": $ChannelOption<(boolean)>
static readonly "ALLOCATOR": $ChannelOption<($ByteBufAllocator)>
static readonly "IP_MULTICAST_ADDR": $ChannelOption<($InetAddress)>
static readonly "IP_MULTICAST_LOOP_DISABLED": $ChannelOption<(boolean)>
static readonly "TCP_FASTOPEN_CONNECT": $ChannelOption<(boolean)>
static readonly "MESSAGE_SIZE_ESTIMATOR": $ChannelOption<($MessageSizeEstimator)>
static readonly "WRITE_SPIN_COUNT": $ChannelOption<(integer)>
static readonly "SO_TIMEOUT": $ChannelOption<(integer)>
static readonly "SO_REUSEADDR": $ChannelOption<(boolean)>
static readonly "CONNECT_TIMEOUT_MILLIS": $ChannelOption<(integer)>
static readonly "ALLOW_HALF_CLOSURE": $ChannelOption<(boolean)>
static readonly "SO_BACKLOG": $ChannelOption<(integer)>
/**
 * 
 * @deprecated
 */
static readonly "MAX_MESSAGES_PER_READ": $ChannelOption<(integer)>
static readonly "AUTO_CLOSE": $ChannelOption<(boolean)>
static readonly "MAX_MESSAGES_PER_WRITE": $ChannelOption<(integer)>
static readonly "SO_BROADCAST": $ChannelOption<(boolean)>
static readonly "AUTO_READ": $ChannelOption<(boolean)>
static readonly "IP_MULTICAST_TTL": $ChannelOption<(integer)>
static readonly "RCVBUF_ALLOCATOR": $ChannelOption<($RecvByteBufAllocator)>

public static "valueOf"<T>(arg0: StringJS): $ChannelOption<(T)>
public static "valueOf"<T>(arg0: $Class$$Type<(never)>, arg1: StringJS): $ChannelOption<(T)>
/**
 * 
 * @deprecated
 */
public static "newInstance"<T>(arg0: StringJS): $ChannelOption<(T)>
public "validate"(arg0: T): void
public static "exists"(arg0: StringJS): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelOption$$Type<T> = ($ChannelOption<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChannelOption$$Original<T> = $ChannelOption<(T)>;}
