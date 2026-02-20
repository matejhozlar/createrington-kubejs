declare module "net.minecraft.util.thread.ProcessorMailbox" {
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$List} from "java.util.List"
import {$Runnable, $Runnable$$Type, $Runnable$$Interface} from "java.lang.Runnable"
import {$ProcessorHandle, $ProcessorHandle$$Type, $ProcessorHandle$$Interface} from "net.minecraft.util.thread.ProcessorHandle"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ProfilerMeasured$$Interface} from "net.minecraft.util.profiling.metrics.ProfilerMeasured"
import {$Exception$$Type} from "java.lang.Exception"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$Function$$Type} from "java.util.function.Function"
import {$Either$$Type} from "com.mojang.datafixers.util.Either"
import {$StrictQueue$$Type} from "net.minecraft.util.thread.StrictQueue"
import {$MetricSampler} from "net.minecraft.util.profiling.metrics.MetricSampler"

export class $ProcessorMailbox<T> implements $ProfilerMeasured$$Interface, $ProcessorHandle$$Interface<(T)>, $AutoCloseable$$Interface, $Runnable$$Interface {
constructor(arg0: $StrictQueue$$Type<(T), ($Runnable$$Type)>, arg1: $Executor$$Type, arg2: StringJS)

public "name"(): StringJS
public "run"(): void
public "size"(): integer
public "toString"(): StringJS
public "close"(): void
public static "create"(arg0: $Executor$$Type, arg1: StringJS): $ProcessorMailbox<($Runnable)>
public "profiledMetrics"(): $List<($MetricSampler)>
public "tell"(arg0: T): void
public "runAll"(): void
public "hasWork"(): boolean
public static "of"<Msg>(arg0: StringJS, arg1: $Consumer$$Type<(T)>): $ProcessorHandle<(T)>
public "askEither"<Source>(arg0: $Function$$Type<($ProcessorHandle<($Either<(Source), ($Exception)>)>), (T)>): $CompletableFuture<(Source)>
public "ask"<Source>(arg0: $Function$$Type<($ProcessorHandle<(Source)>), (T)>): $CompletableFuture<(Source)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProcessorMailbox$$Type<T> = ($ProcessorMailbox<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProcessorMailbox$$Original<T> = $ProcessorMailbox<(T)>;}
declare module "net.minecraft.util.thread.StrictQueue" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $StrictQueue$$Interface<T, F> {
get "empty"(): boolean
}

export class $StrictQueue<T, F> implements $StrictQueue$$Interface {
 "size"(): integer
 "isEmpty"(): boolean
 "push"(arg0: T): boolean
 "pop"(): F
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StrictQueue$$Type<T, F> = ($StrictQueue<(T), (F)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StrictQueue$$Original<T, F> = $StrictQueue<(T), (F)>;}
declare module "net.minecraft.util.thread.ReentrantBlockableEventLoop" {
import {$BlockableEventLoop} from "net.minecraft.util.thread.BlockableEventLoop"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$ProcessorHandle} from "net.minecraft.util.thread.ProcessorHandle"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $ReentrantBlockableEventLoop<R extends $Runnable> extends $BlockableEventLoop<(R)> {
constructor(arg0: StringJS)

public "runningTask"(): boolean
public "scheduleExecutables"(): boolean
public "doRunTask"(arg0: R): void
public static "of"<Msg>(arg0: StringJS, arg1: $Consumer$$Type<(Msg)>): $ProcessorHandle<(Msg)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReentrantBlockableEventLoop$$Type<R> = ($ReentrantBlockableEventLoop<(R)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReentrantBlockableEventLoop$$Original<R> = $ReentrantBlockableEventLoop<(R)>;}
declare module "net.minecraft.util.thread.ProcessorHandle" {
import {$Exception$$Type} from "java.lang.Exception"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$Function$$Type} from "java.util.function.Function"
import {$Either$$Type} from "com.mojang.datafixers.util.Either"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $ProcessorHandle$$Interface<Msg> extends $AutoCloseable$$Interface {
}

export class $ProcessorHandle<Msg> implements $ProcessorHandle$$Interface {
 "name"(): StringJS
static "of"<Msg>(arg0: StringJS, arg1: $Consumer$$Type<(Msg)>): $ProcessorHandle<(Msg)>
 "close"(): void
 "tell"(arg0: Msg): void
 "askEither"<Source>(arg0: $Function$$Type<($ProcessorHandle<($Either<(Source), ($Exception)>)>), (Msg)>): $CompletableFuture<(Source)>
 "ask"<Source>(arg0: $Function$$Type<($ProcessorHandle<(Source)>), (Msg)>): $CompletableFuture<(Source)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProcessorHandle$$Type<Msg> = ($ProcessorHandle<(Msg)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProcessorHandle$$Original<Msg> = $ProcessorHandle<(Msg)>;}
declare module "net.minecraft.util.thread.BlockableEventLoop" {
import {$List} from "java.util.List"
import {$Thread} from "java.lang.Thread"
import {$BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$ProcessorHandle, $ProcessorHandle$$Type, $ProcessorHandle$$Interface} from "net.minecraft.util.thread.ProcessorHandle"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ProfilerMeasured$$Interface} from "net.minecraft.util.profiling.metrics.ProfilerMeasured"
import {$Exception$$Type} from "java.lang.Exception"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$Executor$$Interface} from "java.util.concurrent.Executor"
import {$Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Either$$Type} from "com.mojang.datafixers.util.Either"
import {$MetricSampler} from "net.minecraft.util.profiling.metrics.MetricSampler"

export class $BlockableEventLoop<R extends $Runnable> implements $ProfilerMeasured$$Interface, $ProcessorHandle$$Interface<(R)>, $Executor$$Interface {
constructor(arg0: StringJS)

public "name"(): StringJS
public "execute"(arg0: $Runnable$$Type): void
public "managedBlock"(arg0: $BooleanSupplier$$Type): void
public "submit"(arg0: $Runnable$$Type): $CompletableFuture<(void)>
public "submit"<V>(arg0: $Supplier$$Type<(V)>): $CompletableFuture<(V)>
public "pollTask"(): boolean
public "shouldRun"(arg0: R): boolean
public "dropAllTasks"(): void
public "isSameThread"(): boolean
public "getRunningThread"(): $Thread
public "wrapRunnable"(arg0: $Runnable$$Type): R
public "profiledMetrics"(): $List<($MetricSampler)>
public "executeBlocking"(arg0: $Runnable$$Type): void
public "executeIfPossible"(arg0: $Runnable$$Type): void
public "waitForTasks"(): void
public "submitAsync"(arg0: $Runnable$$Type): $CompletableFuture<(void)>
public "runAllTasks"(): void
public "scheduleExecutables"(): boolean
public "getPendingTasksCount"(): integer
public "tell"(arg0: R): void
public "tell"(arg0: any): void
public "doRunTask"(arg0: R): void
public static "of"<Msg>(arg0: StringJS, arg1: $Consumer$$Type<(R)>): $ProcessorHandle<(R)>
public "close"(): void
public "askEither"<Source>(arg0: $Function$$Type<($ProcessorHandle<($Either<(Source), ($Exception)>)>), (R)>): $CompletableFuture<(Source)>
public "ask"<Source>(arg0: $Function$$Type<($ProcessorHandle<(Source)>), (R)>): $CompletableFuture<(Source)>
get "sameThread"(): boolean
get "runningThread"(): $Thread
get "pendingTasksCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockableEventLoop$$Type<R> = ($BlockableEventLoop<(R)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockableEventLoop$$Original<R> = $BlockableEventLoop<(R)>;}
