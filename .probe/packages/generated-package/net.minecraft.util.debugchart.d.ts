declare module "net.minecraft.util.debugchart.AbstractSampleLogger" {
import {$SampleLogger$$Interface} from "net.minecraft.util.debugchart.SampleLogger"

export class $AbstractSampleLogger implements $SampleLogger$$Interface {
public "logSample"(arg0: long): void
public "logFullSample"(arg0: (long)[]): void
public "logPartialSample"(arg0: long, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSampleLogger$$Type = ($AbstractSampleLogger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractSampleLogger$$Original = $AbstractSampleLogger;}
declare module "net.minecraft.util.debugchart.SampleStorage" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SampleStorage$$Interface {
}

export class $SampleStorage implements $SampleStorage$$Interface {
 "size"(): integer
 "reset"(): void
 "get"(arg0: integer, arg1: integer): long
 "get"(arg0: integer): long
 "capacity"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SampleStorage$$Type = ($SampleStorage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SampleStorage$$Original = $SampleStorage;}
declare module "net.minecraft.util.debugchart.LocalSampleLogger" {
import {$AbstractSampleLogger} from "net.minecraft.util.debugchart.AbstractSampleLogger"
import {$SampleStorage$$Interface} from "net.minecraft.util.debugchart.SampleStorage"

export class $LocalSampleLogger extends $AbstractSampleLogger implements $SampleStorage$$Interface {
static readonly "CAPACITY": integer

constructor(arg0: integer)
constructor(arg0: integer, arg1: (long)[])

public "size"(): integer
public "reset"(): void
public "get"(arg0: integer, arg1: integer): long
public "get"(arg0: integer): long
public "capacity"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocalSampleLogger$$Type = ($LocalSampleLogger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LocalSampleLogger$$Original = $LocalSampleLogger;}
declare module "net.minecraft.util.debugchart.SampleLogger" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SampleLogger$$Interface {
}

export class $SampleLogger implements $SampleLogger$$Interface {
 "logSample"(arg0: long): void
 "logFullSample"(arg0: (long)[]): void
 "logPartialSample"(arg0: long, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SampleLogger$$Type = ($SampleLogger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SampleLogger$$Original = $SampleLogger;}
declare module "net.minecraft.util.debugchart.RemoteDebugSampleType" {
import {$Enum} from "java.lang.Enum"

export class $RemoteDebugSampleType extends $Enum<($RemoteDebugSampleType)> {
static readonly "TICK_TIME": $RemoteDebugSampleType

public static "values"(): ($RemoteDebugSampleType)[]
public static "valueOf"(arg0: StringJS): $RemoteDebugSampleType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RemoteDebugSampleType$$Type = (("tick_time"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RemoteDebugSampleType$$Original = $RemoteDebugSampleType;}
