declare module "net.minecraft.util.profiling.metrics.MetricSampler$SamplerResult" {
import {$Int2DoubleMap$$Type} from "it.unimi.dsi.fastutil.ints.Int2DoubleMap"

export class $MetricSampler$SamplerResult {
constructor(arg0: integer, arg1: integer, arg2: $Int2DoubleMap$$Type)

public "getFirstTick"(): integer
public "getLastTick"(): integer
public "valueAtTick"(arg0: integer): double
get "firstTick"(): integer
get "lastTick"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MetricSampler$SamplerResult$$Type = ($MetricSampler$SamplerResult);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MetricSampler$SamplerResult$$Original = $MetricSampler$SamplerResult;}
declare module "net.minecraft.util.profiling.metrics.MetricSampler$ThresholdTest" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MetricSampler$ThresholdTest$$Interface {

(arg0: double): boolean
}

export class $MetricSampler$ThresholdTest implements $MetricSampler$ThresholdTest$$Interface {
 "test"(arg0: double): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MetricSampler$ThresholdTest$$Type = ((arg0: double) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MetricSampler$ThresholdTest$$Original = $MetricSampler$ThresholdTest;}
declare module "net.minecraft.util.profiling.metrics.MetricSampler$MetricSamplerBuilder" {
import {$ToDoubleFunction$$Type} from "java.util.function.ToDoubleFunction"
import {$MetricSampler$ThresholdTest$$Type} from "net.minecraft.util.profiling.metrics.MetricSampler$ThresholdTest"
import {$MetricSampler} from "net.minecraft.util.profiling.metrics.MetricSampler"
import {$MetricCategory$$Type} from "net.minecraft.util.profiling.metrics.MetricCategory"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $MetricSampler$MetricSamplerBuilder<T> {
constructor(arg0: StringJS, arg1: $MetricCategory$$Type, arg2: $ToDoubleFunction$$Type<(T)>, arg3: T)

public "build"(): $MetricSampler
public "withBeforeTick"(arg0: $Consumer$$Type<(T)>): $MetricSampler$MetricSamplerBuilder<(T)>
public "withThresholdAlert"(arg0: $MetricSampler$ThresholdTest$$Type): $MetricSampler$MetricSamplerBuilder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MetricSampler$MetricSamplerBuilder$$Type<T> = ($MetricSampler$MetricSamplerBuilder<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MetricSampler$MetricSamplerBuilder$$Original<T> = $MetricSampler$MetricSamplerBuilder<(T)>;}
declare module "net.minecraft.util.profiling.metrics.MetricCategory" {
import {$Enum} from "java.lang.Enum"

export class $MetricCategory extends $Enum<($MetricCategory)> {
static readonly "JVM": $MetricCategory
static readonly "PATH_FINDING": $MetricCategory
static readonly "EVENT_LOOPS": $MetricCategory
static readonly "TICK_LOOP": $MetricCategory
static readonly "CHUNK_RENDERING": $MetricCategory
static readonly "CPU": $MetricCategory
static readonly "MAIL_BOXES": $MetricCategory
static readonly "CHUNK_RENDERING_DISPATCHING": $MetricCategory
static readonly "GPU": $MetricCategory

public "getDescription"(): StringJS
public static "values"(): ($MetricCategory)[]
public static "valueOf"(arg0: StringJS): $MetricCategory
get "description"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MetricCategory$$Type = (("path_finding") | ("event_loops") | ("mail_boxes") | ("tick_loop") | ("jvm") | ("chunk_rendering") | ("chunk_rendering_dispatching") | ("cpu") | ("gpu"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MetricCategory$$Original = $MetricCategory;}
declare module "net.minecraft.util.profiling.ProfileResults" {
import {$List} from "java.util.List"
import {$Path$$Type} from "java.nio.file.Path"
import {$ResultField} from "net.minecraft.util.profiling.ResultField"

export interface $ProfileResults$$Interface {
get "nanoDuration"(): long
get "tickDuration"(): integer
get "startTimeNano"(): long
get "startTimeTicks"(): integer
get "endTimeNano"(): long
get "profilerResults"(): StringJS
get "endTimeTicks"(): integer
}

export class $ProfileResults implements $ProfileResults$$Interface {
static readonly "PATH_SEPARATOR": character

 "getTimes"(arg0: StringJS): $List<($ResultField)>
static "demanglePath"(arg0: StringJS): StringJS
 "getNanoDuration"(): long
 "getTickDuration"(): integer
 "saveResults"(arg0: $Path$$Type): boolean
 "getStartTimeNano"(): long
 "getStartTimeTicks"(): integer
 "getEndTimeNano"(): long
 "getProfilerResults"(): StringJS
 "getEndTimeTicks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProfileResults$$Type = ($ProfileResults);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProfileResults$$Original = $ProfileResults;}
declare module "net.minecraft.util.profiling.metrics.ProfilerMeasured" {
import {$List, $List$$Type} from "java.util.List"
import {$MetricSampler, $MetricSampler$$Type} from "net.minecraft.util.profiling.metrics.MetricSampler"

export interface $ProfilerMeasured$$Interface {

(): $List$$Type<($MetricSampler$$Type)>
}

export class $ProfilerMeasured implements $ProfilerMeasured$$Interface {
 "profiledMetrics"(): $List<($MetricSampler)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProfilerMeasured$$Type = (() => $List$$Type<($MetricSampler$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProfilerMeasured$$Original = $ProfilerMeasured;}
declare module "net.minecraft.util.profiling.metrics.MetricSampler" {
import {$DoubleSupplier$$Type} from "java.util.function.DoubleSupplier"
import {$MetricSampler$SamplerResult} from "net.minecraft.util.profiling.metrics.MetricSampler$SamplerResult"
import {$ToDoubleFunction$$Type} from "java.util.function.ToDoubleFunction"
import {$MetricSampler$MetricSamplerBuilder} from "net.minecraft.util.profiling.metrics.MetricSampler$MetricSamplerBuilder"
import {$MetricCategory, $MetricCategory$$Type} from "net.minecraft.util.profiling.metrics.MetricCategory"

export class $MetricSampler {
public "onStartTick"(): void
public "onFinished"(): void
public "onEndTick"(arg0: integer): void
public "getName"(): StringJS
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "builder"<T>(arg0: StringJS, arg1: $MetricCategory$$Type, arg2: $ToDoubleFunction$$Type<(T)>, arg3: T): $MetricSampler$MetricSamplerBuilder<(T)>
public "result"(): $MetricSampler$SamplerResult
public static "create"<T>(arg0: StringJS, arg1: $MetricCategory$$Type, arg2: T, arg3: $ToDoubleFunction$$Type<(T)>): $MetricSampler
public static "create"(arg0: StringJS, arg1: $MetricCategory$$Type, arg2: $DoubleSupplier$$Type): $MetricSampler
public "getCategory"(): $MetricCategory
public "triggersThreshold"(): boolean
get "name"(): StringJS
get "category"(): $MetricCategory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MetricSampler$$Type = ($MetricSampler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MetricSampler$$Original = $MetricSampler;}
declare module "net.minecraft.util.profiling.ProfilerFiller" {
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$MetricCategory$$Type} from "net.minecraft.util.profiling.metrics.MetricCategory"

export interface $ProfilerFiller$$Interface {
}

export class $ProfilerFiller implements $ProfilerFiller$$Interface {
static readonly "ROOT": StringJS

 "endTick"(): void
 "startTick"(): void
static "tee"(arg0: $ProfilerFiller$$Type, arg1: $ProfilerFiller$$Type): $ProfilerFiller
 "popPush"(arg0: StringJS): void
 "popPush"(arg0: $Supplier$$Type<(StringJS)>): void
 "push"(arg0: $Supplier$$Type<(StringJS)>): void
 "push"(arg0: StringJS): void
 "pop"(): void
 "incrementCounter"(arg0: $Supplier$$Type<(StringJS)>, arg1: integer): void
 "incrementCounter"(arg0: StringJS): void
 "incrementCounter"(arg0: StringJS, arg1: integer): void
 "incrementCounter"(arg0: $Supplier$$Type<(StringJS)>): void
 "markForCharting"(arg0: $MetricCategory$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProfilerFiller$$Type = ($ProfilerFiller);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProfilerFiller$$Original = $ProfilerFiller;}
declare module "net.minecraft.util.profiling.ResultField" {
import {$Comparable$$Interface} from "java.lang.Comparable"

export class $ResultField implements $Comparable$$Interface<($ResultField)> {
readonly "globalPercentage": double
readonly "percentage": double
readonly "count": long
readonly "name": StringJS

constructor(arg0: StringJS, arg1: double, arg2: double, arg3: long)

public "getColor"(): integer
public "compareTo"(arg0: $ResultField$$Type): integer
public "compareTo"(arg0: any): integer
get "color"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResultField$$Type = ($ResultField);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResultField$$Original = $ResultField;}
