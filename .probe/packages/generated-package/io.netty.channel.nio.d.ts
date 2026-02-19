declare module "io.netty.channel.nio.NioEventLoopGroup" {
import {$SelectStrategyFactory$$Type} from "io.netty.channel.SelectStrategyFactory"
import {$Future} from "io.netty.util.concurrent.Future"
import {$Callable$$Type} from "java.util.concurrent.Callable"
import {$List} from "java.util.List"
import {$ThreadFactory$$Type} from "java.util.concurrent.ThreadFactory"
import {$ScheduledFuture} from "io.netty.util.concurrent.ScheduledFuture"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$EventExecutor} from "io.netty.util.concurrent.EventExecutor"
import {$EventExecutorChooserFactory$$Type} from "io.netty.util.concurrent.EventExecutorChooserFactory"
import {$TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$EventLoopTaskQueueFactory$$Type} from "io.netty.channel.EventLoopTaskQueueFactory"
import {$RejectedExecutionHandler$$Type} from "io.netty.util.concurrent.RejectedExecutionHandler"
import {$SelectorProvider$$Type} from "java.nio.channels.spi.SelectorProvider"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$MultithreadEventLoopGroup} from "io.netty.channel.MultithreadEventLoopGroup"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $NioEventLoopGroup extends $MultithreadEventLoopGroup {
constructor(arg0: integer, arg1: $Executor$$Type, arg2: $EventExecutorChooserFactory$$Type, arg3: $SelectorProvider$$Type, arg4: $SelectStrategyFactory$$Type)
constructor(arg0: integer, arg1: $Executor$$Type, arg2: $SelectorProvider$$Type, arg3: $SelectStrategyFactory$$Type)
constructor(arg0: integer, arg1: $Executor$$Type, arg2: $SelectorProvider$$Type)
constructor(arg0: integer, arg1: $ThreadFactory$$Type, arg2: $SelectorProvider$$Type, arg3: $SelectStrategyFactory$$Type)
constructor(arg0: integer, arg1: $Executor$$Type, arg2: $EventExecutorChooserFactory$$Type, arg3: $SelectorProvider$$Type, arg4: $SelectStrategyFactory$$Type, arg5: $RejectedExecutionHandler$$Type)
constructor(arg0: integer, arg1: $Executor$$Type, arg2: $EventExecutorChooserFactory$$Type, arg3: $SelectorProvider$$Type, arg4: $SelectStrategyFactory$$Type, arg5: $RejectedExecutionHandler$$Type, arg6: $EventLoopTaskQueueFactory$$Type)
constructor(arg0: integer, arg1: $Executor$$Type, arg2: $EventExecutorChooserFactory$$Type, arg3: $SelectorProvider$$Type, arg4: $SelectStrategyFactory$$Type, arg5: $RejectedExecutionHandler$$Type, arg6: $EventLoopTaskQueueFactory$$Type, arg7: $EventLoopTaskQueueFactory$$Type)
constructor()
constructor(arg0: integer)
constructor(arg0: $ThreadFactory$$Type)
constructor(arg0: integer, arg1: $ThreadFactory$$Type, arg2: $SelectorProvider$$Type)
constructor(arg0: integer, arg1: $Executor$$Type)
constructor(arg0: integer, arg1: $ThreadFactory$$Type)

public "rebuildSelectors"(): void
public "setIoRatio"(arg0: integer): void
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
set "ioRatio"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NioEventLoopGroup$$Type = ($NioEventLoopGroup);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NioEventLoopGroup$$Original = $NioEventLoopGroup;}
