declare module "net.minecraft.util.thread.ProcessorHandle" {
import {$Exception$$Type} from "java.lang.Exception"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$Either$$Type} from "com.mojang.datafixers.util.Either"
import {$Function$$Type} from "java.util.function.Function"
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
import {$BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$ProcessorHandle, $ProcessorHandle$$Type, $ProcessorHandle$$Interface} from "net.minecraft.util.thread.ProcessorHandle"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ProfilerMeasured$$Interface} from "net.minecraft.util.profiling.metrics.ProfilerMeasured"
import {$Exception$$Type} from "java.lang.Exception"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$Either$$Type} from "com.mojang.datafixers.util.Either"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Executor$$Interface} from "java.util.concurrent.Executor"
import {$Function$$Type} from "java.util.function.Function"
import {$MetricSampler} from "net.minecraft.util.profiling.metrics.MetricSampler"

export class $BlockableEventLoop<R extends $Runnable> implements $ProfilerMeasured$$Interface, $ProcessorHandle$$Interface<(R)>, $Executor$$Interface {
public "name"(): StringJS
public "execute"(arg0: $Runnable$$Type): void
public "managedBlock"(arg0: $BooleanSupplier$$Type): void
public "submit"<V>(arg0: $Supplier$$Type<(V)>): $CompletableFuture<(V)>
public "submit"(arg0: $Runnable$$Type): $CompletableFuture<(void)>
public "pollTask"(): boolean
public "getPendingTasksCount"(): integer
public "tell"(arg0: any): void
public "tell"(arg0: R): void
public "isSameThread"(): boolean
public "profiledMetrics"(): $List<($MetricSampler)>
public "executeBlocking"(arg0: $Runnable$$Type): void
public "submitAsync"(arg0: $Runnable$$Type): $CompletableFuture<(void)>
public "executeIfPossible"(arg0: $Runnable$$Type): void
public "waitForTasks"(): void
public static "of"<Msg>(arg0: StringJS, arg1: $Consumer$$Type<(R)>): $ProcessorHandle<(R)>
public "close"(): void
public "askEither"<Source>(arg0: $Function$$Type<($ProcessorHandle<($Either<(Source), ($Exception)>)>), (R)>): $CompletableFuture<(Source)>
public "ask"<Source>(arg0: $Function$$Type<($ProcessorHandle<(Source)>), (R)>): $CompletableFuture<(Source)>
get "pendingTasksCount"(): integer
get "sameThread"(): boolean
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
declare module "net.minecraft.util.thread.ReentrantBlockableEventLoop" {
import {$BlockableEventLoop} from "net.minecraft.util.thread.BlockableEventLoop"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$ProcessorHandle} from "net.minecraft.util.thread.ProcessorHandle"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $ReentrantBlockableEventLoop<R extends $Runnable> extends $BlockableEventLoop<(R)> {
constructor(arg0: StringJS)

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
