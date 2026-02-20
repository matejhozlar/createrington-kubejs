declare module "java.time.chrono.Era" {
import {$TemporalAccessor$$Interface} from "java.time.temporal.TemporalAccessor"
import {$TextStyle$$Type} from "java.time.format.TextStyle"
import {$ValueRange} from "java.time.temporal.ValueRange"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$Locale$$Type} from "java.util.Locale"
import {$TemporalAdjuster$$Interface} from "java.time.temporal.TemporalAdjuster"
import {$TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$TemporalField$$Type} from "java.time.temporal.TemporalField"

export interface $Era$$Interface extends $TemporalAccessor$$Interface, $TemporalAdjuster$$Interface {

(): integer
get "value"(): integer
}

export class $Era implements $Era$$Interface {
 "get"(arg0: $TemporalField$$Type): integer
 "getLong"(arg0: $TemporalField$$Type): long
 "getValue"(): integer
 "isSupported"(arg0: $TemporalField$$Type): boolean
 "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
 "range"(arg0: $TemporalField$$Type): $ValueRange
 "getDisplayName"(arg0: $TextStyle$$Type, arg1: $Locale$$Type): StringJS
 "adjustInto"(arg0: $Temporal$$Type): $Temporal
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Era$$Type = (() => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Era$$Original = $Era;}
declare module "java.time.chrono.Chronology" {
import {$Era, $Era$$Type} from "java.time.chrono.Era"
import {$ChronoField$$Type} from "java.time.temporal.ChronoField"
import {$Map$$Type} from "java.util.Map"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Clock$$Type} from "java.time.Clock"
import {$ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$List} from "java.util.List"
import {$TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$TextStyle$$Type} from "java.time.format.TextStyle"
import {$ChronoZonedDateTime} from "java.time.chrono.ChronoZonedDateTime"
import {$Locale$$Type} from "java.util.Locale"
import {$ChronoLocalDate} from "java.time.chrono.ChronoLocalDate"
import {$ChronoPeriod} from "java.time.chrono.ChronoPeriod"
import {$TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$ResolverStyle$$Type} from "java.time.format.ResolverStyle"
import {$ZoneId$$Type} from "java.time.ZoneId"
import {$Set} from "java.util.Set"
import {$ValueRange} from "java.time.temporal.ValueRange"
import {$ChronoLocalDateTime} from "java.time.chrono.ChronoLocalDateTime"
import {$Instant$$Type} from "java.time.Instant"

export interface $Chronology$$Interface extends $Comparable$$Interface<($Chronology)> {
get "id"(): StringJS
get "calendarType"(): StringJS
get "availableChronologies"(): $Set<($Chronology)>
get "isoBased"(): boolean
}

export class $Chronology implements $Chronology$$Interface {
 "equals"(arg0: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
 "compareTo"(arg0: $Chronology$$Type): integer
 "compareTo"(arg0: any): integer
static "of"(arg0: StringJS): $Chronology
static "from"(arg0: $TemporalAccessor$$Type): $Chronology
 "getId"(): StringJS
 "range"(arg0: $ChronoField$$Type): $ValueRange
 "getDisplayName"(arg0: $TextStyle$$Type, arg1: $Locale$$Type): StringJS
 "date"(arg0: integer, arg1: integer, arg2: integer): $ChronoLocalDate
 "date"(arg0: $TemporalAccessor$$Type): $ChronoLocalDate
 "date"(arg0: $Era$$Type, arg1: integer, arg2: integer, arg3: integer): $ChronoLocalDate
 "eras"(): $List<($Era)>
 "epochSecond"(arg0: $Era$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: $ZoneOffset$$Type): long
 "epochSecond"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: $ZoneOffset$$Type): long
 "isLeapYear"(arg0: long): boolean
 "eraOf"(arg0: integer): $Era
 "localDateTime"(arg0: $TemporalAccessor$$Type): $ChronoLocalDateTime<($ChronoLocalDate)>
 "getCalendarType"(): StringJS
 "dateEpochDay"(arg0: long): $ChronoLocalDate
 "dateNow"(): $ChronoLocalDate
 "dateNow"(arg0: $ZoneId$$Type): $ChronoLocalDate
 "dateNow"(arg0: $Clock$$Type): $ChronoLocalDate
 "prolepticYear"(arg0: $Era$$Type, arg1: integer): integer
 "dateYearDay"(arg0: integer, arg1: integer): $ChronoLocalDate
 "dateYearDay"(arg0: $Era$$Type, arg1: integer, arg2: integer): $ChronoLocalDate
static "ofLocale"(arg0: $Locale$$Type): $Chronology
static "getAvailableChronologies"(): $Set<($Chronology)>
 "resolveDate"(arg0: $Map$$Type<($TemporalField$$Type), (long)>, arg1: $ResolverStyle$$Type): $ChronoLocalDate
 "zonedDateTime"(arg0: $Instant$$Type, arg1: $ZoneId$$Type): $ChronoZonedDateTime<($ChronoLocalDate)>
 "zonedDateTime"(arg0: $TemporalAccessor$$Type): $ChronoZonedDateTime<($ChronoLocalDate)>
 "period"(arg0: integer, arg1: integer, arg2: integer): $ChronoPeriod
 "isIsoBased"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Chronology$$Type = ($Chronology);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Chronology$$Original = $Chronology;}
declare module "java.time.chrono.ChronoZonedDateTime" {
import {$TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Comparator} from "java.util.Comparator"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$ZoneOffset} from "java.time.ZoneOffset"
import {$TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$Temporal, $Temporal$$Type, $Temporal$$Interface} from "java.time.temporal.Temporal"
import {$ChronoLocalDate} from "java.time.chrono.ChronoLocalDate"
import {$LocalTime} from "java.time.LocalTime"
import {$TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$ZoneId, $ZoneId$$Type} from "java.time.ZoneId"
import {$DateTimeFormatter$$Type} from "java.time.format.DateTimeFormatter"
import {$TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$ValueRange} from "java.time.temporal.ValueRange"
import {$TemporalAdjuster$$Type} from "java.time.temporal.TemporalAdjuster"
import {$TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$Chronology} from "java.time.chrono.Chronology"
import {$ChronoLocalDateTime} from "java.time.chrono.ChronoLocalDateTime"
import {$Instant} from "java.time.Instant"

export interface $ChronoZonedDateTime$$Interface<D extends $ChronoLocalDate> extends $Temporal$$Interface, $Comparable$$Interface<($ChronoZonedDateTime<(never)>)> {
get "offset"(): $ZoneOffset
get "zone"(): $ZoneId
get "chronology"(): $Chronology
}

export class $ChronoZonedDateTime<D extends $ChronoLocalDate> implements $ChronoZonedDateTime$$Interface {
 "withZoneSameInstant"(arg0: $ZoneId$$Type): $ChronoZonedDateTime<(D)>
 "withZoneSameLocal"(arg0: $ZoneId$$Type): $ChronoZonedDateTime<(D)>
 "withLaterOffsetAtOverlap"(): $ChronoZonedDateTime<(D)>
 "get"(arg0: $TemporalField$$Type): integer
 "equals"(arg0: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
 "compareTo"(arg0: any): integer
 "compareTo"(arg0: $ChronoZonedDateTime$$Type<(never)>): integer
 "getLong"(arg0: $TemporalField$$Type): long
 "format"(arg0: $DateTimeFormatter$$Type): StringJS
static "from"(arg0: $TemporalAccessor$$Type): $ChronoZonedDateTime<(never)>
 "isSupported"(arg0: $TemporalField$$Type): boolean
 "isSupported"(arg0: $TemporalUnit$$Type): boolean
 "with"(arg0: $TemporalAdjuster$$Type): $Temporal
 "with"(arg0: $TemporalField$$Type, arg1: long): $Temporal
 "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
 "getOffset"(): $ZoneOffset
 "range"(arg0: $TemporalField$$Type): $ValueRange
 "toInstant"(): $Instant
 "minus"(arg0: $TemporalAmount$$Type): $Temporal
 "minus"(arg0: long, arg1: $TemporalUnit$$Type): $Temporal
 "getZone"(): $ZoneId
 "plus"(arg0: long, arg1: $TemporalUnit$$Type): $Temporal
 "plus"(arg0: $TemporalAmount$$Type): $ChronoZonedDateTime<(D)>
 "isAfter"(arg0: $ChronoZonedDateTime$$Type<(never)>): boolean
 "isBefore"(arg0: $ChronoZonedDateTime$$Type<(never)>): boolean
 "toLocalTime"(): $LocalTime
 "isEqual"(arg0: $ChronoZonedDateTime$$Type<(never)>): boolean
 "getChronology"(): $Chronology
 "toEpochSecond"(): long
static "timeLineOrder"(): $Comparator<($ChronoZonedDateTime<(never)>)>
 "toLocalDateTime"(): $ChronoLocalDateTime<(D)>
 "toLocalDate"(): D
 "withEarlierOffsetAtOverlap"(): $ChronoZonedDateTime<(D)>
 "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChronoZonedDateTime$$Type<D> = ($ChronoZonedDateTime<(D)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChronoZonedDateTime$$Original<D> = $ChronoZonedDateTime<(D)>;}
declare module "java.time.chrono.ChronoLocalDateTime" {
import {$TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Comparator} from "java.util.Comparator"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$ChronoZonedDateTime} from "java.time.chrono.ChronoZonedDateTime"
import {$Temporal, $Temporal$$Type, $Temporal$$Interface} from "java.time.temporal.Temporal"
import {$ChronoLocalDate} from "java.time.chrono.ChronoLocalDate"
import {$LocalTime} from "java.time.LocalTime"
import {$TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$ZoneId$$Type} from "java.time.ZoneId"
import {$DateTimeFormatter$$Type} from "java.time.format.DateTimeFormatter"
import {$TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$ValueRange} from "java.time.temporal.ValueRange"
import {$TemporalAdjuster$$Type, $TemporalAdjuster$$Interface} from "java.time.temporal.TemporalAdjuster"
import {$TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$Chronology} from "java.time.chrono.Chronology"
import {$Instant} from "java.time.Instant"

export interface $ChronoLocalDateTime$$Interface<D extends $ChronoLocalDate> extends $Temporal$$Interface, $TemporalAdjuster$$Interface, $Comparable$$Interface<($ChronoLocalDateTime<(never)>)> {
get "chronology"(): $Chronology
}

export class $ChronoLocalDateTime<D extends $ChronoLocalDate> implements $ChronoLocalDateTime$$Interface {
 "equals"(arg0: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
 "compareTo"(arg0: any): integer
 "compareTo"(arg0: $ChronoLocalDateTime$$Type<(never)>): integer
 "format"(arg0: $DateTimeFormatter$$Type): StringJS
static "from"(arg0: $TemporalAccessor$$Type): $ChronoLocalDateTime<(never)>
 "isSupported"(arg0: $TemporalField$$Type): boolean
 "isSupported"(arg0: $TemporalUnit$$Type): boolean
 "with"(arg0: $TemporalAdjuster$$Type): $Temporal
 "with"(arg0: $TemporalField$$Type, arg1: long): $Temporal
 "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
 "toInstant"(arg0: $ZoneOffset$$Type): $Instant
 "minus"(arg0: $TemporalAmount$$Type): $ChronoLocalDateTime<(D)>
 "minus"(arg0: long, arg1: $TemporalUnit$$Type): $ChronoLocalDateTime<(D)>
 "plus"(arg0: long, arg1: $TemporalUnit$$Type): $ChronoLocalDateTime<(D)>
 "plus"(arg0: $TemporalAmount$$Type): $ChronoLocalDateTime<(D)>
 "adjustInto"(arg0: $Temporal$$Type): $Temporal
 "atZone"(arg0: $ZoneId$$Type): $ChronoZonedDateTime<(D)>
 "isAfter"(arg0: $ChronoLocalDateTime$$Type<(never)>): boolean
 "isBefore"(arg0: $ChronoLocalDateTime$$Type<(never)>): boolean
 "toLocalTime"(): $LocalTime
 "isEqual"(arg0: $ChronoLocalDateTime$$Type<(never)>): boolean
 "getChronology"(): $Chronology
 "toEpochSecond"(arg0: $ZoneOffset$$Type): long
static "timeLineOrder"(): $Comparator<($ChronoLocalDateTime<(never)>)>
 "toLocalDate"(): D
 "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
 "get"(arg0: $TemporalField$$Type): integer
 "getLong"(arg0: $TemporalField$$Type): long
 "range"(arg0: $TemporalField$$Type): $ValueRange
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChronoLocalDateTime$$Type<D> = ($ChronoLocalDateTime<(D)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChronoLocalDateTime$$Original<D> = $ChronoLocalDateTime<(D)>;}
declare module "java.time.chrono.ChronoLocalDate" {
import {$Era} from "java.time.chrono.Era"
import {$TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Comparator} from "java.util.Comparator"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$Temporal, $Temporal$$Type, $Temporal$$Interface} from "java.time.temporal.Temporal"
import {$LocalTime$$Type} from "java.time.LocalTime"
import {$ChronoPeriod} from "java.time.chrono.ChronoPeriod"
import {$TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$DateTimeFormatter$$Type} from "java.time.format.DateTimeFormatter"
import {$TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$ValueRange} from "java.time.temporal.ValueRange"
import {$TemporalAdjuster$$Type, $TemporalAdjuster$$Interface} from "java.time.temporal.TemporalAdjuster"
import {$TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$Chronology} from "java.time.chrono.Chronology"
import {$ChronoLocalDateTime} from "java.time.chrono.ChronoLocalDateTime"

export interface $ChronoLocalDate$$Interface extends $Temporal$$Interface, $TemporalAdjuster$$Interface, $Comparable$$Interface<($ChronoLocalDate)> {
get "leapYear"(): boolean
get "era"(): $Era
get "chronology"(): $Chronology
}

export class $ChronoLocalDate implements $ChronoLocalDate$$Interface {
 "equals"(arg0: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
 "compareTo"(arg0: $ChronoLocalDate$$Type): integer
 "compareTo"(arg0: any): integer
 "format"(arg0: $DateTimeFormatter$$Type): StringJS
static "from"(arg0: $TemporalAccessor$$Type): $ChronoLocalDate
 "isSupported"(arg0: $TemporalUnit$$Type): boolean
 "isSupported"(arg0: $TemporalField$$Type): boolean
 "with"(arg0: $TemporalAdjuster$$Type): $Temporal
 "with"(arg0: $TemporalField$$Type, arg1: long): $ChronoLocalDate
 "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
 "minus"(arg0: $TemporalAmount$$Type): $Temporal
 "minus"(arg0: long, arg1: $TemporalUnit$$Type): $Temporal
 "plus"(arg0: $TemporalAmount$$Type): $ChronoLocalDate
 "plus"(arg0: long, arg1: $TemporalUnit$$Type): $ChronoLocalDate
 "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
 "until"(arg0: $ChronoLocalDate$$Type): $ChronoPeriod
 "adjustInto"(arg0: $Temporal$$Type): $Temporal
 "isAfter"(arg0: $ChronoLocalDate$$Type): boolean
 "isBefore"(arg0: $ChronoLocalDate$$Type): boolean
 "isLeapYear"(): boolean
 "lengthOfMonth"(): integer
 "lengthOfYear"(): integer
 "toEpochDay"(): long
 "atTime"(arg0: $LocalTime$$Type): $ChronoLocalDateTime<(never)>
 "isEqual"(arg0: $ChronoLocalDate$$Type): boolean
 "getEra"(): $Era
 "getChronology"(): $Chronology
static "timeLineOrder"(): $Comparator<($ChronoLocalDate)>
 "get"(arg0: $TemporalField$$Type): integer
 "getLong"(arg0: $TemporalField$$Type): long
 "range"(arg0: $TemporalField$$Type): $ValueRange
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChronoLocalDate$$Type = ($ChronoLocalDate);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChronoLocalDate$$Original = $ChronoLocalDate;}
declare module "java.time.chrono.ChronoPeriod" {
import {$TemporalUnit, $TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$List} from "java.util.List"
import {$TemporalAmount$$Type, $TemporalAmount$$Interface} from "java.time.temporal.TemporalAmount"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$ChronoLocalDate$$Type} from "java.time.chrono.ChronoLocalDate"
import {$Chronology} from "java.time.chrono.Chronology"

export interface $ChronoPeriod$$Interface extends $TemporalAmount$$Interface {
get "zero"(): boolean
get "negative"(): boolean
get "units"(): $List<($TemporalUnit)>
get "chronology"(): $Chronology
}

export class $ChronoPeriod implements $ChronoPeriod$$Interface {
 "get"(arg0: $TemporalUnit$$Type): long
 "equals"(arg0: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
static "between"(arg0: $ChronoLocalDate$$Type, arg1: $ChronoLocalDate$$Type): $ChronoPeriod
 "normalized"(): $ChronoPeriod
 "isZero"(): boolean
 "isNegative"(): boolean
 "minus"(arg0: $TemporalAmount$$Type): $ChronoPeriod
 "plus"(arg0: $TemporalAmount$$Type): $ChronoPeriod
 "getUnits"(): $List<($TemporalUnit)>
 "negated"(): $ChronoPeriod
 "multipliedBy"(arg0: integer): $ChronoPeriod
 "addTo"(arg0: $Temporal$$Type): $Temporal
 "subtractFrom"(arg0: $Temporal$$Type): $Temporal
 "getChronology"(): $Chronology
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChronoPeriod$$Type = ($ChronoPeriod);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChronoPeriod$$Original = $ChronoPeriod;}
