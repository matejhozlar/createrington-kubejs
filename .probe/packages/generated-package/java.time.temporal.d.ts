declare module "java.time.temporal.ValueRange" {
import {$Serializable$$Interface} from "java.io.Serializable"
import {$TemporalField$$Type} from "java.time.temporal.TemporalField"

export class $ValueRange implements $Serializable$$Interface {
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"(arg0: long, arg1: long): $ValueRange
public static "of"(arg0: long, arg1: long, arg2: long, arg3: long): $ValueRange
public static "of"(arg0: long, arg1: long, arg2: long): $ValueRange
public "getMaximum"(): long
public "checkValidIntValue"(arg0: long, arg1: $TemporalField$$Type): integer
public "checkValidValue"(arg0: long, arg1: $TemporalField$$Type): long
public "isIntValue"(): boolean
public "isValidValue"(arg0: long): boolean
public "getMinimum"(): long
public "isValidIntValue"(arg0: long): boolean
public "isFixed"(): boolean
public "getLargestMinimum"(): long
public "getSmallestMaximum"(): long
get "maximum"(): long
get "intValue"(): boolean
get "minimum"(): long
get "fixed"(): boolean
get "largestMinimum"(): long
get "smallestMaximum"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueRange$$Type = ($ValueRange);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ValueRange$$Original = $ValueRange;}
declare module "java.time.temporal.TemporalAdjuster" {
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"

export interface $TemporalAdjuster$$Interface {

(arg0: $Temporal): $Temporal$$Type
}

export class $TemporalAdjuster implements $TemporalAdjuster$$Interface {
 "adjustInto"(arg0: $Temporal$$Type): $Temporal
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemporalAdjuster$$Type = ((arg0: $Temporal) => $Temporal$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TemporalAdjuster$$Original = $TemporalAdjuster;}
declare module "java.time.temporal.TemporalAmount" {
import {$TemporalUnit, $TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$List} from "java.util.List"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"

export interface $TemporalAmount$$Interface {
get "units"(): $List<($TemporalUnit)>
}

export class $TemporalAmount implements $TemporalAmount$$Interface {
 "get"(arg0: $TemporalUnit$$Type): long
 "getUnits"(): $List<($TemporalUnit)>
 "addTo"(arg0: $Temporal$$Type): $Temporal
 "subtractFrom"(arg0: $Temporal$$Type): $Temporal
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemporalAmount$$Type = (StringJS) | (number);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TemporalAmount$$Original = $TemporalAmount;}
declare module "java.time.temporal.TemporalField" {
import {$ResolverStyle$$Type} from "java.time.format.ResolverStyle"
import {$Map$$Type} from "java.util.Map"
import {$TemporalUnit} from "java.time.temporal.TemporalUnit"
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$ValueRange} from "java.time.temporal.ValueRange"
import {$Locale$$Type} from "java.util.Locale"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"

export interface $TemporalField$$Interface {
get "timeBased"(): boolean
get "dateBased"(): boolean
get "baseUnit"(): $TemporalUnit
get "rangeUnit"(): $TemporalUnit
}

export class $TemporalField implements $TemporalField$$Interface {
 "toString"(): StringJS
 "resolve"(arg0: $Map$$Type<($TemporalField$$Type), (long)>, arg1: $TemporalAccessor$$Type, arg2: $ResolverStyle$$Type): $TemporalAccessor
 "range"(): $ValueRange
 "getDisplayName"(arg0: $Locale$$Type): StringJS
 "isSupportedBy"(arg0: $TemporalAccessor$$Type): boolean
 "isTimeBased"(): boolean
 "getFrom"(arg0: $TemporalAccessor$$Type): long
 "adjustInto"<R extends $Temporal>(arg0: R, arg1: long): R
 "rangeRefinedBy"(arg0: $TemporalAccessor$$Type): $ValueRange
 "isDateBased"(): boolean
 "getBaseUnit"(): $TemporalUnit
 "getRangeUnit"(): $TemporalUnit
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemporalField$$Type = ($TemporalField);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TemporalField$$Original = $TemporalField;}
declare module "java.time.temporal.TemporalAccessor" {
import {$ValueRange} from "java.time.temporal.ValueRange"
import {$TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$TemporalField$$Type} from "java.time.temporal.TemporalField"

export interface $TemporalAccessor$$Interface {
}

export class $TemporalAccessor implements $TemporalAccessor$$Interface {
 "get"(arg0: $TemporalField$$Type): integer
 "getLong"(arg0: $TemporalField$$Type): long
 "isSupported"(arg0: $TemporalField$$Type): boolean
 "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
 "range"(arg0: $TemporalField$$Type): $ValueRange
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemporalAccessor$$Type = ($TemporalAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TemporalAccessor$$Original = $TemporalAccessor;}
declare module "java.time.temporal.ChronoUnit" {
import {$TemporalUnit$$Interface} from "java.time.temporal.TemporalUnit"
import {$Enum} from "java.lang.Enum"
import {$Duration} from "java.time.Duration"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"

export class $ChronoUnit extends $Enum<($ChronoUnit)> implements $TemporalUnit$$Interface {
static readonly "FOREVER": $ChronoUnit
static readonly "MICROS": $ChronoUnit
static readonly "SECONDS": $ChronoUnit
static readonly "DECADES": $ChronoUnit
static readonly "MILLENNIA": $ChronoUnit
static readonly "DAYS": $ChronoUnit
static readonly "MILLIS": $ChronoUnit
static readonly "HALF_DAYS": $ChronoUnit
static readonly "MONTHS": $ChronoUnit
static readonly "YEARS": $ChronoUnit
static readonly "HOURS": $ChronoUnit
static readonly "WEEKS": $ChronoUnit
static readonly "NANOS": $ChronoUnit
static readonly "CENTURIES": $ChronoUnit
static readonly "MINUTES": $ChronoUnit
static readonly "ERAS": $ChronoUnit

public "toString"(): StringJS
public static "values"(): ($ChronoUnit)[]
public static "valueOf"(arg0: StringJS): $ChronoUnit
public "between"(arg0: $Temporal$$Type, arg1: $Temporal$$Type): long
public "isDurationEstimated"(): boolean
public "getDuration"(): $Duration
public "addTo"<R extends $Temporal>(arg0: R, arg1: long): R
public "isSupportedBy"(arg0: $Temporal$$Type): boolean
public "isTimeBased"(): boolean
public "isDateBased"(): boolean
get "durationEstimated"(): boolean
get "duration"(): $Duration
get "timeBased"(): boolean
get "dateBased"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChronoUnit$$Type = (("nanos") | ("micros") | ("millis") | ("seconds") | ("minutes") | ("hours") | ("half_days") | ("days") | ("weeks") | ("months") | ("years") | ("decades") | ("centuries") | ("millennia") | ("eras") | ("forever"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChronoUnit$$Original = $ChronoUnit;}
declare module "java.time.temporal.TemporalQuery" {
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"

export interface $TemporalQuery$$Interface<R> {

(arg0: $TemporalAccessor): R
}

export class $TemporalQuery<R> implements $TemporalQuery$$Interface {
 "queryFrom"(arg0: $TemporalAccessor$$Type): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemporalQuery$$Type<R> = ((arg0: $TemporalAccessor) => R);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TemporalQuery$$Original<R> = $TemporalQuery<(R)>;}
declare module "java.time.temporal.Temporal" {
import {$TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$TemporalAccessor$$Interface} from "java.time.temporal.TemporalAccessor"
import {$TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$ValueRange} from "java.time.temporal.ValueRange"
import {$TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$TemporalAdjuster$$Type} from "java.time.temporal.TemporalAdjuster"
import {$TemporalField$$Type} from "java.time.temporal.TemporalField"

export interface $Temporal$$Interface extends $TemporalAccessor$$Interface {
}

export class $Temporal implements $Temporal$$Interface {
 "isSupported"(arg0: $TemporalUnit$$Type): boolean
 "with"(arg0: $TemporalField$$Type, arg1: long): $Temporal
 "with"(arg0: $TemporalAdjuster$$Type): $Temporal
 "minus"(arg0: long, arg1: $TemporalUnit$$Type): $Temporal
 "minus"(arg0: $TemporalAmount$$Type): $Temporal
 "plus"(arg0: long, arg1: $TemporalUnit$$Type): $Temporal
 "plus"(arg0: $TemporalAmount$$Type): $Temporal
 "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
 "get"(arg0: $TemporalField$$Type): integer
 "getLong"(arg0: $TemporalField$$Type): long
 "isSupported"(arg0: $TemporalField$$Type): boolean
 "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
 "range"(arg0: $TemporalField$$Type): $ValueRange
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Temporal$$Type = ($Temporal);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Temporal$$Original = $Temporal;}
declare module "java.time.temporal.TemporalUnit" {
import {$Duration} from "java.time.Duration"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"

export interface $TemporalUnit$$Interface {
get "durationEstimated"(): boolean
get "duration"(): $Duration
get "timeBased"(): boolean
get "dateBased"(): boolean
}

export class $TemporalUnit implements $TemporalUnit$$Interface {
 "toString"(): StringJS
 "between"(arg0: $Temporal$$Type, arg1: $Temporal$$Type): long
 "isDurationEstimated"(): boolean
 "getDuration"(): $Duration
 "addTo"<R extends $Temporal>(arg0: R, arg1: long): R
 "isSupportedBy"(arg0: $Temporal$$Type): boolean
 "isTimeBased"(): boolean
 "isDateBased"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemporalUnit$$Type = ($TemporalUnit);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TemporalUnit$$Original = $TemporalUnit;}
declare module "java.time.temporal.ChronoField" {
import {$ResolverStyle$$Type} from "java.time.format.ResolverStyle"
import {$Map$$Type} from "java.util.Map"
import {$TemporalUnit} from "java.time.temporal.TemporalUnit"
import {$Enum} from "java.lang.Enum"
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$ValueRange} from "java.time.temporal.ValueRange"
import {$Locale$$Type} from "java.util.Locale"
import {$TemporalField$$Type, $TemporalField$$Interface} from "java.time.temporal.TemporalField"

export class $ChronoField extends $Enum<($ChronoField)> implements $TemporalField$$Interface {
static readonly "CLOCK_HOUR_OF_AMPM": $ChronoField
static readonly "DAY_OF_YEAR": $ChronoField
static readonly "MICRO_OF_DAY": $ChronoField
static readonly "ALIGNED_DAY_OF_WEEK_IN_MONTH": $ChronoField
static readonly "DAY_OF_MONTH": $ChronoField
static readonly "SECOND_OF_MINUTE": $ChronoField
static readonly "PROLEPTIC_MONTH": $ChronoField
static readonly "MILLI_OF_SECOND": $ChronoField
static readonly "NANO_OF_DAY": $ChronoField
static readonly "CLOCK_HOUR_OF_DAY": $ChronoField
static readonly "MINUTE_OF_DAY": $ChronoField
static readonly "ALIGNED_WEEK_OF_MONTH": $ChronoField
static readonly "YEAR": $ChronoField
static readonly "HOUR_OF_DAY": $ChronoField
static readonly "MILLI_OF_DAY": $ChronoField
static readonly "ALIGNED_DAY_OF_WEEK_IN_YEAR": $ChronoField
static readonly "YEAR_OF_ERA": $ChronoField
static readonly "AMPM_OF_DAY": $ChronoField
static readonly "NANO_OF_SECOND": $ChronoField
static readonly "SECOND_OF_DAY": $ChronoField
static readonly "MICRO_OF_SECOND": $ChronoField
static readonly "MONTH_OF_YEAR": $ChronoField
static readonly "EPOCH_DAY": $ChronoField
static readonly "ERA": $ChronoField
static readonly "OFFSET_SECONDS": $ChronoField
static readonly "HOUR_OF_AMPM": $ChronoField
static readonly "MINUTE_OF_HOUR": $ChronoField
static readonly "INSTANT_SECONDS": $ChronoField
static readonly "ALIGNED_WEEK_OF_YEAR": $ChronoField
static readonly "DAY_OF_WEEK": $ChronoField

public "toString"(): StringJS
public static "values"(): ($ChronoField)[]
public static "valueOf"(arg0: StringJS): $ChronoField
public "range"(): $ValueRange
public "getDisplayName"(arg0: $Locale$$Type): StringJS
public "checkValidIntValue"(arg0: long): integer
public "isSupportedBy"(arg0: $TemporalAccessor$$Type): boolean
public "isTimeBased"(): boolean
public "getFrom"(arg0: $TemporalAccessor$$Type): long
public "adjustInto"<R extends $Temporal>(arg0: R, arg1: long): R
public "checkValidValue"(arg0: long): long
public "rangeRefinedBy"(arg0: $TemporalAccessor$$Type): $ValueRange
public "isDateBased"(): boolean
public "getBaseUnit"(): $TemporalUnit
public "getRangeUnit"(): $TemporalUnit
public "resolve"(arg0: $Map$$Type<($TemporalField$$Type), (long)>, arg1: $TemporalAccessor$$Type, arg2: $ResolverStyle$$Type): $TemporalAccessor
get "timeBased"(): boolean
get "dateBased"(): boolean
get "baseUnit"(): $TemporalUnit
get "rangeUnit"(): $TemporalUnit
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChronoField$$Type = (("nano_of_second") | ("nano_of_day") | ("micro_of_second") | ("micro_of_day") | ("milli_of_second") | ("milli_of_day") | ("second_of_minute") | ("second_of_day") | ("minute_of_hour") | ("minute_of_day") | ("hour_of_ampm") | ("clock_hour_of_ampm") | ("hour_of_day") | ("clock_hour_of_day") | ("ampm_of_day") | ("day_of_week") | ("aligned_day_of_week_in_month") | ("aligned_day_of_week_in_year") | ("day_of_month") | ("day_of_year") | ("epoch_day") | ("aligned_week_of_month") | ("aligned_week_of_year") | ("month_of_year") | ("proleptic_month") | ("year_of_era") | ("year") | ("era") | ("instant_seconds") | ("offset_seconds"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChronoField$$Original = $ChronoField;}
