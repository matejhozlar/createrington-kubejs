declare module "net.minecraft.commands.execution.Frame$FrameControl" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Frame$FrameControl$$Interface {

(): void
}

export class $Frame$FrameControl implements $Frame$FrameControl$$Interface {
 "discard"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Frame$FrameControl$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Frame$FrameControl$$Original = $Frame$FrameControl;}
declare module "net.minecraft.commands.execution.EntryAction" {
import {$Frame, $Frame$$Type} from "net.minecraft.commands.execution.Frame"
import {$ExecutionContext, $ExecutionContext$$Type} from "net.minecraft.commands.execution.ExecutionContext"

export interface $EntryAction$$Interface<T> {

(arg0: $ExecutionContext<(T)>, arg1: $Frame): void
}

export class $EntryAction<T> implements $EntryAction$$Interface {
 "execute"(arg0: $ExecutionContext$$Type<(T)>, arg1: $Frame$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntryAction$$Type<T> = ((arg0: $ExecutionContext<(T)>, arg1: $Frame) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntryAction$$Original<T> = $EntryAction<(T)>;}
declare module "net.minecraft.commands.execution.TraceCallbacks" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"

export interface $TraceCallbacks$$Interface extends $AutoCloseable$$Interface {
}

export class $TraceCallbacks implements $TraceCallbacks$$Interface {
 "close"(): void
 "onError"(arg0: StringJS): void
 "onCall"(arg0: integer, arg1: $ResourceLocation$$Type, arg2: integer): void
 "onCommand"(arg0: integer, arg1: StringJS): void
 "onReturn"(arg0: integer, arg1: StringJS, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraceCallbacks$$Type = ($TraceCallbacks);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TraceCallbacks$$Original = $TraceCallbacks;}
declare module "net.minecraft.commands.execution.Frame" {
import {$Frame$FrameControl, $Frame$FrameControl$$Type} from "net.minecraft.commands.execution.Frame$FrameControl"
import {$Record} from "java.lang.Record"
import {$CommandResultCallback, $CommandResultCallback$$Type} from "net.minecraft.commands.CommandResultCallback"

export class $Frame extends $Record {
constructor(arg0: integer, arg1: $CommandResultCallback$$Type, arg2: $Frame$FrameControl$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "depth"(): integer
public "discard"(): void
public "returnSuccess"(arg0: integer): void
public "returnFailure"(): void
public "frameControl"(): $Frame$FrameControl
public "returnValueConsumer"(): $CommandResultCallback
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Frame$$Type = ({"returnValueConsumer"?: $CommandResultCallback$$Type, "depth"?: integer, "frameControl"?: $Frame$FrameControl$$Type}) | ([returnValueConsumer?: $CommandResultCallback$$Type, depth?: integer, frameControl?: $Frame$FrameControl$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Frame$$Original = $Frame;}
declare module "net.minecraft.commands.execution.UnboundEntryAction" {
import {$EntryAction} from "net.minecraft.commands.execution.EntryAction"
import {$Frame, $Frame$$Type} from "net.minecraft.commands.execution.Frame"
import {$ExecutionContext, $ExecutionContext$$Type} from "net.minecraft.commands.execution.ExecutionContext"

export interface $UnboundEntryAction$$Interface<T> {

(arg0: T, arg1: $ExecutionContext<(T)>, arg2: $Frame): void
}

export class $UnboundEntryAction<T> implements $UnboundEntryAction$$Interface {
 "execute"(arg0: T, arg1: $ExecutionContext$$Type<(T)>, arg2: $Frame$$Type): void
 "bind"(arg0: T): $EntryAction<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnboundEntryAction$$Type<T> = ((arg0: T, arg1: $ExecutionContext<(T)>, arg2: $Frame) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UnboundEntryAction$$Original<T> = $UnboundEntryAction<(T)>;}
declare module "net.minecraft.commands.execution.CommandQueueEntry" {
import {$EntryAction, $EntryAction$$Type} from "net.minecraft.commands.execution.EntryAction"
import {$Frame, $Frame$$Type} from "net.minecraft.commands.execution.Frame"
import {$ExecutionContext$$Type} from "net.minecraft.commands.execution.ExecutionContext"
import {$Record} from "java.lang.Record"

export class $CommandQueueEntry<T> extends $Record {
constructor(arg0: $Frame$$Type, arg1: $EntryAction$$Type<(T)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "execute"(arg0: $ExecutionContext$$Type<(T)>): void
public "action"(): $EntryAction<(T)>
public "frame"(): $Frame
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandQueueEntry$$Type<T> = ({"frame"?: $Frame$$Type, "action"?: $EntryAction$$Type<(T)>}) | ([frame?: $Frame$$Type, action?: $EntryAction$$Type<(T)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CommandQueueEntry$$Original<T> = $CommandQueueEntry<(T)>;}
declare module "net.minecraft.commands.execution.ExecutionContext" {
import {$Frame$FrameControl} from "net.minecraft.commands.execution.Frame$FrameControl"
import {$ExecutionCommandSource, $ExecutionCommandSource$$Type} from "net.minecraft.commands.ExecutionCommandSource"
import {$ContextChain$$Type} from "com.mojang.brigadier.context.ContextChain"
import {$TraceCallbacks, $TraceCallbacks$$Type} from "net.minecraft.commands.execution.TraceCallbacks"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$InstantiatedFunction$$Type} from "net.minecraft.commands.functions.InstantiatedFunction"
import {$CommandQueueEntry$$Type} from "net.minecraft.commands.execution.CommandQueueEntry"
import {$CommandResultCallback$$Type} from "net.minecraft.commands.CommandResultCallback"
import {$ProfilerFiller, $ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"

export class $ExecutionContext<T> implements $AutoCloseable$$Interface {
constructor(arg0: integer, arg1: integer, arg2: $ProfilerFiller$$Type)

public "close"(): void
public "profiler"(): $ProfilerFiller
public static "queueInitialCommandExecution"<T extends $ExecutionCommandSource<(object)>>(arg0: $ExecutionContext$$Type<(T)>, arg1: StringJS, arg2: $ContextChain$$Type<(T)>, arg3: T, arg4: $CommandResultCallback$$Type): void
public "forkLimit"(): integer
public "tracer"(): $TraceCallbacks
public "tracer"(arg0: $TraceCallbacks$$Type): void
public "queueNext"(arg0: $CommandQueueEntry$$Type<(T)>): void
public "incrementCost"(): void
public static "queueInitialFunctionCall"<T extends $ExecutionCommandSource<(object)>>(arg0: $ExecutionContext$$Type<(T)>, arg1: $InstantiatedFunction$$Type<(T)>, arg2: T, arg3: $CommandResultCallback$$Type): void
public "runCommandQueue"(): void
public "frameControlForDepth"(arg0: integer): $Frame$FrameControl
public "discardAtDepthOrHigher"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExecutionContext$$Type<T> = ($ExecutionContext<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExecutionContext$$Original<T> = $ExecutionContext<(T)>;}
