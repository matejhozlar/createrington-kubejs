declare module "java.time.OffsetDateTime" {
import {$Month} from "java.time.Month"
import {$TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Comparator} from "java.util.Comparator"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Clock$$Type} from "java.time.Clock"
import {$ZoneOffset, $ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$Temporal, $Temporal$$Type, $Temporal$$Interface} from "java.time.temporal.Temporal"
import {$LocalTime, $LocalTime$$Type} from "java.time.LocalTime"
import {$ZonedDateTime} from "java.time.ZonedDateTime"
import {$TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$OffsetTime} from "java.time.OffsetTime"
import {$LocalDateTime, $LocalDateTime$$Type} from "java.time.LocalDateTime"
import {$DayOfWeek} from "java.time.DayOfWeek"
import {$ZoneId$$Type} from "java.time.ZoneId"
import {$LocalDate, $LocalDate$$Type} from "java.time.LocalDate"
import {$DateTimeFormatter$$Type} from "java.time.format.DateTimeFormatter"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$ValueRange} from "java.time.temporal.ValueRange"
import {$TemporalAdjuster$$Type, $TemporalAdjuster$$Interface} from "java.time.temporal.TemporalAdjuster"
import {$TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$Instant, $Instant$$Type} from "java.time.Instant"

export class $OffsetDateTime implements $Temporal$$Interface, $TemporalAdjuster$$Interface, $Comparable$$Interface<($OffsetDateTime)>, $Serializable$$Interface {
static readonly "MIN": $OffsetDateTime
static readonly "MAX": $OffsetDateTime

public "get"(arg0: $TemporalField$$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $OffsetDateTime$$Type): integer
public "getLong"(arg0: $TemporalField$$Type): long
public "format"(arg0: $DateTimeFormatter$$Type): StringJS
public static "of"(arg0: $LocalDateTime$$Type, arg1: $ZoneOffset$$Type): $OffsetDateTime
public static "of"(arg0: $LocalDate$$Type, arg1: $LocalTime$$Type, arg2: $ZoneOffset$$Type): $OffsetDateTime
public static "of"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: $ZoneOffset$$Type): $OffsetDateTime
public static "from"(arg0: $TemporalAccessor$$Type): $OffsetDateTime
public "isSupported"(arg0: $TemporalUnit$$Type): boolean
public "isSupported"(arg0: $TemporalField$$Type): boolean
public static "parse"(arg0: charseq): $OffsetDateTime
public static "parse"(arg0: charseq, arg1: $DateTimeFormatter$$Type): $OffsetDateTime
public "with"(arg0: $TemporalField$$Type, arg1: long): $OffsetDateTime
public "with"(arg0: $TemporalAdjuster$$Type): $OffsetDateTime
public "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
public "getOffset"(): $ZoneOffset
public "range"(arg0: $TemporalField$$Type): $ValueRange
public static "now"(arg0: $Clock$$Type): $OffsetDateTime
public static "now"(arg0: $ZoneId$$Type): $OffsetDateTime
public static "now"(): $OffsetDateTime
public "getNano"(): integer
public "toInstant"(): $Instant
public "getYear"(): integer
public "getMonthValue"(): integer
public "getDayOfMonth"(): integer
public "getHour"(): integer
public "getMinute"(): integer
public "getSecond"(): integer
public "minus"(arg0: long, arg1: $TemporalUnit$$Type): $OffsetDateTime
public "minus"(arg0: $TemporalAmount$$Type): $OffsetDateTime
public "plus"(arg0: long, arg1: $TemporalUnit$$Type): $OffsetDateTime
public "plus"(arg0: $TemporalAmount$$Type): $OffsetDateTime
public "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
public "plusNanos"(arg0: long): $OffsetDateTime
public "plusSeconds"(arg0: long): $OffsetDateTime
public "plusDays"(arg0: long): $OffsetDateTime
public "plusHours"(arg0: long): $OffsetDateTime
public "plusMinutes"(arg0: long): $OffsetDateTime
public "minusDays"(arg0: long): $OffsetDateTime
public "minusHours"(arg0: long): $OffsetDateTime
public "minusMinutes"(arg0: long): $OffsetDateTime
public "minusSeconds"(arg0: long): $OffsetDateTime
public "minusNanos"(arg0: long): $OffsetDateTime
public "truncatedTo"(arg0: $TemporalUnit$$Type): $OffsetDateTime
public "adjustInto"(arg0: $Temporal$$Type): $Temporal
public static "ofInstant"(arg0: $Instant$$Type, arg1: $ZoneId$$Type): $OffsetDateTime
public "isAfter"(arg0: $OffsetDateTime$$Type): boolean
public "isBefore"(arg0: $OffsetDateTime$$Type): boolean
public "getMonth"(): $Month
public "getDayOfWeek"(): $DayOfWeek
public "getDayOfYear"(): integer
public "withDayOfMonth"(arg0: integer): $OffsetDateTime
public "withDayOfYear"(arg0: integer): $OffsetDateTime
public "plusWeeks"(arg0: long): $OffsetDateTime
public "withMonth"(arg0: integer): $OffsetDateTime
public "plusMonths"(arg0: long): $OffsetDateTime
public "withYear"(arg0: integer): $OffsetDateTime
public "plusYears"(arg0: long): $OffsetDateTime
public "minusMonths"(arg0: long): $OffsetDateTime
public "toLocalTime"(): $LocalTime
public "isEqual"(arg0: $OffsetDateTime$$Type): boolean
public "minusYears"(arg0: long): $OffsetDateTime
public "minusWeeks"(arg0: long): $OffsetDateTime
public "toEpochSecond"(): long
public static "timeLineOrder"(): $Comparator<($OffsetDateTime)>
public "toLocalDateTime"(): $LocalDateTime
public "withHour"(arg0: integer): $OffsetDateTime
public "withMinute"(arg0: integer): $OffsetDateTime
public "withSecond"(arg0: integer): $OffsetDateTime
public "withNano"(arg0: integer): $OffsetDateTime
public "toLocalDate"(): $LocalDate
public "toZonedDateTime"(): $ZonedDateTime
public "withOffsetSameInstant"(arg0: $ZoneOffset$$Type): $OffsetDateTime
public "withOffsetSameLocal"(arg0: $ZoneOffset$$Type): $OffsetDateTime
public "atZoneSameInstant"(arg0: $ZoneId$$Type): $ZonedDateTime
public "atZoneSimilarLocal"(arg0: $ZoneId$$Type): $ZonedDateTime
public "toOffsetTime"(): $OffsetTime
get "offset"(): $ZoneOffset
get "nano"(): integer
get "year"(): integer
get "monthValue"(): integer
get "dayOfMonth"(): integer
get "hour"(): integer
get "minute"(): integer
get "second"(): integer
get "month"(): $Month
get "dayOfWeek"(): $DayOfWeek
get "dayOfYear"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OffsetDateTime$$Type = ($OffsetDateTime);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OffsetDateTime$$Original = $OffsetDateTime;}
declare module "java.time.Period" {
import {$TemporalUnit, $TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$LocalDate$$Type} from "java.time.LocalDate"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$List} from "java.util.List"
import {$TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$ChronoLocalDate$$Type} from "java.time.chrono.ChronoLocalDate"
import {$ChronoPeriod, $ChronoPeriod$$Interface} from "java.time.chrono.ChronoPeriod"
import {$Chronology} from "java.time.chrono.Chronology"

export class $Period implements $ChronoPeriod$$Interface, $Serializable$$Interface {
static readonly "ZERO": $Period

public "get"(arg0: $TemporalUnit$$Type): long
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"(arg0: integer, arg1: integer, arg2: integer): $Period
public static "from"(arg0: $TemporalAmount$$Type): $Period
public static "parse"(arg0: charseq): $Period
public static "between"(arg0: $LocalDate$$Type, arg1: $LocalDate$$Type): $Period
public "normalized"(): $ChronoPeriod
public "isZero"(): boolean
public "getMonths"(): integer
public "isNegative"(): boolean
public "minus"(arg0: $TemporalAmount$$Type): $Period
public "plus"(arg0: $TemporalAmount$$Type): $ChronoPeriod
public "getUnits"(): $List<($TemporalUnit)>
public "negated"(): $Period
public "multipliedBy"(arg0: integer): $ChronoPeriod
public "plusDays"(arg0: long): $Period
public static "ofDays"(arg0: integer): $Period
public "minusDays"(arg0: long): $Period
public "addTo"(arg0: $Temporal$$Type): $Temporal
public "subtractFrom"(arg0: $Temporal$$Type): $Temporal
public "plusMonths"(arg0: long): $Period
public "toTotalMonths"(): long
public "getDays"(): integer
public "plusYears"(arg0: long): $Period
public "minusMonths"(arg0: long): $Period
public "getChronology"(): $Chronology
public "minusYears"(arg0: long): $Period
public "getYears"(): integer
public static "ofYears"(arg0: integer): $Period
public static "ofMonths"(arg0: integer): $Period
public static "ofWeeks"(arg0: integer): $Period
public "withYears"(arg0: integer): $Period
public "withMonths"(arg0: integer): $Period
public "withDays"(arg0: integer): $Period
public static "between"(arg0: $ChronoLocalDate$$Type, arg1: $ChronoLocalDate$$Type): $ChronoPeriod
get "zero"(): boolean
get "months"(): integer
get "negative"(): boolean
get "units"(): $List<($TemporalUnit)>
get "days"(): integer
get "chronology"(): $Chronology
get "years"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Period$$Type = ($Period);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Period$$Original = $Period;}
declare module "java.time.LocalTime" {
import {$TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Clock$$Type} from "java.time.Clock"
import {$ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$Temporal, $Temporal$$Type, $Temporal$$Interface} from "java.time.temporal.Temporal"
import {$TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$OffsetTime} from "java.time.OffsetTime"
import {$LocalDateTime} from "java.time.LocalDateTime"
import {$ZoneId$$Type} from "java.time.ZoneId"
import {$LocalDate$$Type} from "java.time.LocalDate"
import {$DateTimeFormatter$$Type} from "java.time.format.DateTimeFormatter"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$ValueRange} from "java.time.temporal.ValueRange"
import {$TemporalAdjuster$$Type, $TemporalAdjuster$$Interface} from "java.time.temporal.TemporalAdjuster"
import {$TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$Instant$$Type} from "java.time.Instant"

export class $LocalTime implements $Temporal$$Interface, $TemporalAdjuster$$Interface, $Comparable$$Interface<($LocalTime)>, $Serializable$$Interface {
static readonly "MIN": $LocalTime
static readonly "NOON": $LocalTime
static readonly "MAX": $LocalTime
static readonly "MIDNIGHT": $LocalTime

public "get"(arg0: $TemporalField$$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $LocalTime$$Type): integer
public "getLong"(arg0: $TemporalField$$Type): long
public "format"(arg0: $DateTimeFormatter$$Type): StringJS
public static "of"(arg0: integer, arg1: integer, arg2: integer): $LocalTime
public static "of"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $LocalTime
public static "of"(arg0: integer, arg1: integer): $LocalTime
public static "from"(arg0: $TemporalAccessor$$Type): $LocalTime
public "isSupported"(arg0: $TemporalUnit$$Type): boolean
public "isSupported"(arg0: $TemporalField$$Type): boolean
public static "parse"(arg0: charseq): $LocalTime
public static "parse"(arg0: charseq, arg1: $DateTimeFormatter$$Type): $LocalTime
public "with"(arg0: $TemporalAdjuster$$Type): $LocalTime
public "with"(arg0: $TemporalField$$Type, arg1: long): $LocalTime
public "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
public "range"(arg0: $TemporalField$$Type): $ValueRange
public static "now"(): $LocalTime
public static "now"(arg0: $Clock$$Type): $LocalTime
public static "now"(arg0: $ZoneId$$Type): $LocalTime
public "getNano"(): integer
public "getHour"(): integer
public "getMinute"(): integer
public "getSecond"(): integer
public "minus"(arg0: long, arg1: $TemporalUnit$$Type): $Temporal
public "minus"(arg0: $TemporalAmount$$Type): $LocalTime
public "plus"(arg0: $TemporalAmount$$Type): $LocalTime
public "plus"(arg0: long, arg1: $TemporalUnit$$Type): $Temporal
public "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
public "plusNanos"(arg0: long): $LocalTime
public "plusSeconds"(arg0: long): $LocalTime
public "plusHours"(arg0: long): $LocalTime
public "plusMinutes"(arg0: long): $LocalTime
public "minusHours"(arg0: long): $LocalTime
public "minusMinutes"(arg0: long): $LocalTime
public "minusSeconds"(arg0: long): $LocalTime
public "minusNanos"(arg0: long): $LocalTime
public "truncatedTo"(arg0: $TemporalUnit$$Type): $LocalTime
public "adjustInto"(arg0: $Temporal$$Type): $Temporal
public static "ofInstant"(arg0: $Instant$$Type, arg1: $ZoneId$$Type): $LocalTime
public "atOffset"(arg0: $ZoneOffset$$Type): $OffsetTime
public "isAfter"(arg0: $LocalTime$$Type): boolean
public "isBefore"(arg0: $LocalTime$$Type): boolean
public "toSecondOfDay"(): integer
public "toEpochSecond"(arg0: $LocalDate$$Type, arg1: $ZoneOffset$$Type): long
public static "ofNanoOfDay"(arg0: long): $LocalTime
public "withHour"(arg0: integer): $LocalTime
public "withMinute"(arg0: integer): $LocalTime
public "withSecond"(arg0: integer): $LocalTime
public "withNano"(arg0: integer): $LocalTime
public "toNanoOfDay"(): long
public static "ofSecondOfDay"(arg0: long): $LocalTime
public "atDate"(arg0: $LocalDate$$Type): $LocalDateTime
get "nano"(): integer
get "hour"(): integer
get "minute"(): integer
get "second"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocalTime$$Type = ($LocalTime);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LocalTime$$Original = $LocalTime;}
declare module "java.time.Month" {
import {$Enum} from "java.lang.Enum"
import {$TemporalAccessor$$Type, $TemporalAccessor$$Interface} from "java.time.temporal.TemporalAccessor"
import {$TextStyle$$Type} from "java.time.format.TextStyle"
import {$ValueRange} from "java.time.temporal.ValueRange"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$Locale$$Type} from "java.util.Locale"
import {$TemporalAdjuster$$Interface} from "java.time.temporal.TemporalAdjuster"
import {$TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$TemporalField$$Type} from "java.time.temporal.TemporalField"

export class $Month extends $Enum<($Month)> implements $TemporalAccessor$$Interface, $TemporalAdjuster$$Interface {
static readonly "JANUARY": $Month
static readonly "JUNE": $Month
static readonly "MAY": $Month
static readonly "OCTOBER": $Month
static readonly "DECEMBER": $Month
static readonly "MARCH": $Month
static readonly "FEBRUARY": $Month
static readonly "AUGUST": $Month
static readonly "JULY": $Month
static readonly "SEPTEMBER": $Month
static readonly "NOVEMBER": $Month
static readonly "APRIL": $Month

public "firstMonthOfQuarter"(): $Month
public "get"(arg0: $TemporalField$$Type): integer
public "length"(arg0: boolean): integer
public static "values"(): ($Month)[]
public "getLong"(arg0: $TemporalField$$Type): long
public static "valueOf"(arg0: StringJS): $Month
public "getValue"(): integer
public static "of"(arg0: integer): $Month
public static "from"(arg0: $TemporalAccessor$$Type): $Month
public "isSupported"(arg0: $TemporalField$$Type): boolean
public "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
public "minLength"(): integer
public "range"(arg0: $TemporalField$$Type): $ValueRange
public "getDisplayName"(arg0: $TextStyle$$Type, arg1: $Locale$$Type): StringJS
public "minus"(arg0: long): $Month
public "plus"(arg0: long): $Month
public "adjustInto"(arg0: $Temporal$$Type): $Temporal
public "firstDayOfYear"(arg0: boolean): integer
public "maxLength"(): integer
get "value"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Month$$Type = (("january") | ("february") | ("march") | ("april") | ("may") | ("june") | ("july") | ("august") | ("september") | ("october") | ("november") | ("december"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Month$$Original = $Month;}
declare module "java.time.Clock" {
import {$InstantSource, $InstantSource$$Type, $InstantSource$$Interface} from "java.time.InstantSource"
import {$ZoneId, $ZoneId$$Type} from "java.time.ZoneId"
import {$Duration$$Type} from "java.time.Duration"
import {$Instant, $Instant$$Type} from "java.time.Instant"

export class $Clock implements $InstantSource$$Interface {
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "offset"(arg0: $Clock$$Type, arg1: $Duration$$Type): $Clock
public "millis"(): long
public static "system"(arg0: $ZoneId$$Type): $Clock
public static "fixed"(arg0: $Instant$$Type, arg1: $ZoneId$$Type): $Clock
public "instant"(): $Instant
public static "systemUTC"(): $Clock
public static "systemDefaultZone"(): $Clock
public static "tickMillis"(arg0: $ZoneId$$Type): $Clock
public static "tickSeconds"(arg0: $ZoneId$$Type): $Clock
public static "tickMinutes"(arg0: $ZoneId$$Type): $Clock
public static "tick"(arg0: $Clock$$Type, arg1: $Duration$$Type): $Clock
public "getZone"(): $ZoneId
public "withZone"(arg0: $ZoneId$$Type): $Clock
public static "offset"(arg0: $InstantSource$$Type, arg1: $Duration$$Type): $InstantSource
public static "system"(): $InstantSource
public static "fixed"(arg0: $Instant$$Type): $InstantSource
public static "tick"(arg0: $InstantSource$$Type, arg1: $Duration$$Type): $InstantSource
get "zone"(): $ZoneId
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Clock$$Type = ($Clock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Clock$$Original = $Clock;}
declare module "java.time.Duration" {
import {$TemporalUnit, $TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$List} from "java.util.List"
import {$TemporalAmount$$Type, $TemporalAmount$$Interface} from "java.time.temporal.TemporalAmount"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"

export class $Duration implements $TemporalAmount$$Interface, $Comparable$$Interface<($Duration)>, $Serializable$$Interface {
static readonly "ZERO": $Duration

public "get"(arg0: $TemporalUnit$$Type): long
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "abs"(): $Duration
public "compareTo"(arg0: $Duration$$Type): integer
public "compareTo"(arg0: any): integer
public static "of"(arg0: long, arg1: $TemporalUnit$$Type): $Duration
public static "from"(arg0: $TemporalAmount$$Type): $Duration
public "toNanos"(): long
public "toMillis"(): long
public static "parse"(arg0: charseq): $Duration
public static "between"(arg0: $Temporal$$Type, arg1: $Temporal$$Type): $Duration
public "isZero"(): boolean
public "getNano"(): integer
public "toDays"(): long
public "toSeconds"(): long
public "isNegative"(): boolean
public "minus"(arg0: long, arg1: $TemporalUnit$$Type): $Duration
public "minus"(arg0: $Duration$$Type): $Duration
public "isPositive"(): boolean
public "plus"(arg0: long, arg1: $TemporalUnit$$Type): $Duration
public "plus"(arg0: $Duration$$Type): $Duration
public "getUnits"(): $List<($TemporalUnit)>
public static "ofSeconds"(arg0: long, arg1: long): $Duration
public static "ofSeconds"(arg0: long): $Duration
public "negated"(): $Duration
public static "ofNanos"(arg0: long): $Duration
public "getSeconds"(): long
public "plusNanos"(arg0: long): $Duration
public "plusSeconds"(arg0: long): $Duration
public "plusMillis"(arg0: long): $Duration
public "multipliedBy"(arg0: long): $Duration
public "plusDays"(arg0: long): $Duration
public "plusHours"(arg0: long): $Duration
public "plusMinutes"(arg0: long): $Duration
public "toHours"(): long
public "toMinutes"(): long
public static "ofDays"(arg0: long): $Duration
public static "ofHours"(arg0: long): $Duration
public static "ofMinutes"(arg0: long): $Duration
public static "ofMillis"(arg0: long): $Duration
public "withSeconds"(arg0: long): $Duration
public "withNanos"(arg0: integer): $Duration
public "minusDays"(arg0: long): $Duration
public "minusHours"(arg0: long): $Duration
public "minusMinutes"(arg0: long): $Duration
public "minusSeconds"(arg0: long): $Duration
public "minusMillis"(arg0: long): $Duration
public "minusNanos"(arg0: long): $Duration
public "dividedBy"(arg0: long): $Duration
public "dividedBy"(arg0: $Duration$$Type): long
public "addTo"(arg0: $Temporal$$Type): $Temporal
public "subtractFrom"(arg0: $Temporal$$Type): $Temporal
public "toDaysPart"(): long
public "toHoursPart"(): integer
public "toMinutesPart"(): integer
public "toSecondsPart"(): integer
public "toMillisPart"(): integer
public "toNanosPart"(): integer
public "truncatedTo"(arg0: $TemporalUnit$$Type): $Duration
get "zero"(): boolean
get "nano"(): integer
get "negative"(): boolean
get "positive"(): boolean
get "units"(): $List<($TemporalUnit)>
get "seconds"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Duration$$Type = ($TemporalAmount$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Duration$$Original = $Duration;}
declare module "java.time.DayOfWeek" {
import {$Enum} from "java.lang.Enum"
import {$TemporalAccessor$$Type, $TemporalAccessor$$Interface} from "java.time.temporal.TemporalAccessor"
import {$TextStyle$$Type} from "java.time.format.TextStyle"
import {$ValueRange} from "java.time.temporal.ValueRange"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$Locale$$Type} from "java.util.Locale"
import {$TemporalAdjuster$$Interface} from "java.time.temporal.TemporalAdjuster"
import {$TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$TemporalField$$Type} from "java.time.temporal.TemporalField"

export class $DayOfWeek extends $Enum<($DayOfWeek)> implements $TemporalAccessor$$Interface, $TemporalAdjuster$$Interface {
static readonly "WEDNESDAY": $DayOfWeek
static readonly "MONDAY": $DayOfWeek
static readonly "THURSDAY": $DayOfWeek
static readonly "SUNDAY": $DayOfWeek
static readonly "TUESDAY": $DayOfWeek
static readonly "FRIDAY": $DayOfWeek
static readonly "SATURDAY": $DayOfWeek

public "get"(arg0: $TemporalField$$Type): integer
public static "values"(): ($DayOfWeek)[]
public "getLong"(arg0: $TemporalField$$Type): long
public static "valueOf"(arg0: StringJS): $DayOfWeek
public "getValue"(): integer
public static "of"(arg0: integer): $DayOfWeek
public static "from"(arg0: $TemporalAccessor$$Type): $DayOfWeek
public "isSupported"(arg0: $TemporalField$$Type): boolean
public "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
public "range"(arg0: $TemporalField$$Type): $ValueRange
public "getDisplayName"(arg0: $TextStyle$$Type, arg1: $Locale$$Type): StringJS
public "minus"(arg0: long): $DayOfWeek
public "plus"(arg0: long): $DayOfWeek
public "adjustInto"(arg0: $Temporal$$Type): $Temporal
get "value"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DayOfWeek$$Type = (("monday") | ("tuesday") | ("wednesday") | ("thursday") | ("friday") | ("saturday") | ("sunday"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DayOfWeek$$Original = $DayOfWeek;}
declare module "java.time.InstantSource" {
import {$ZoneId$$Type} from "java.time.ZoneId"
import {$Clock} from "java.time.Clock"
import {$Duration$$Type} from "java.time.Duration"
import {$Instant, $Instant$$Type} from "java.time.Instant"

export interface $InstantSource$$Interface {

(): $Instant$$Type
}

export class $InstantSource implements $InstantSource$$Interface {
static "offset"(arg0: $InstantSource$$Type, arg1: $Duration$$Type): $InstantSource
 "millis"(): long
static "system"(): $InstantSource
static "fixed"(arg0: $Instant$$Type): $InstantSource
 "instant"(): $Instant
static "tick"(arg0: $InstantSource$$Type, arg1: $Duration$$Type): $InstantSource
 "withZone"(arg0: $ZoneId$$Type): $Clock
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InstantSource$$Type = (() => $Instant$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InstantSource$$Original = $InstantSource;}
declare module "java.time.ZoneId" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ZoneRules} from "java.time.zone.ZoneRules"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$Set} from "java.util.Set"
import {$TextStyle$$Type} from "java.time.format.TextStyle"
import {$Locale$$Type} from "java.util.Locale"

export class $ZoneId implements $Serializable$$Interface {
static readonly "SHORT_IDS": $Map<(StringJS), (StringJS)>

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"(arg0: StringJS, arg1: $Map$$Type<(StringJS), (StringJS)>): $ZoneId
public static "of"(arg0: StringJS): $ZoneId
public static "from"(arg0: $TemporalAccessor$$Type): $ZoneId
public "getId"(): StringJS
public "normalized"(): $ZoneId
public "getDisplayName"(arg0: $TextStyle$$Type, arg1: $Locale$$Type): StringJS
public static "systemDefault"(): $ZoneId
public "getRules"(): $ZoneRules
public static "getAvailableZoneIds"(): $Set<(StringJS)>
public static "ofOffset"(arg0: StringJS, arg1: $ZoneOffset$$Type): $ZoneId
get "id"(): StringJS
get "rules"(): $ZoneRules
get "availableZoneIds"(): $Set<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZoneId$$Type = ($ZoneId);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ZoneId$$Original = $ZoneId;}
declare module "java.time.ZonedDateTime" {
import {$Month} from "java.time.Month"
import {$TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$ChronoLocalDate} from "java.time.chrono.ChronoLocalDate"
import {$TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$LocalDateTime$$Type} from "java.time.LocalDateTime"
import {$TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$ValueRange} from "java.time.temporal.ValueRange"
import {$TemporalAdjuster$$Type} from "java.time.temporal.TemporalAdjuster"
import {$OffsetDateTime} from "java.time.OffsetDateTime"
import {$TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Comparator} from "java.util.Comparator"
import {$Clock$$Type} from "java.time.Clock"
import {$ZoneOffset, $ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$ChronoZonedDateTime, $ChronoZonedDateTime$$Type, $ChronoZonedDateTime$$Interface} from "java.time.chrono.ChronoZonedDateTime"
import {$Temporal, $Temporal$$Type, $Temporal$$Interface} from "java.time.temporal.Temporal"
import {$LocalTime, $LocalTime$$Type} from "java.time.LocalTime"
import {$DayOfWeek} from "java.time.DayOfWeek"
import {$ZoneId, $ZoneId$$Type} from "java.time.ZoneId"
import {$LocalDate, $LocalDate$$Type} from "java.time.LocalDate"
import {$DateTimeFormatter$$Type} from "java.time.format.DateTimeFormatter"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$Chronology} from "java.time.chrono.Chronology"
import {$Instant, $Instant$$Type} from "java.time.Instant"
import {$ChronoLocalDateTime} from "java.time.chrono.ChronoLocalDateTime"

export class $ZonedDateTime implements $Temporal$$Interface, $ChronoZonedDateTime$$Interface<($LocalDate)>, $Serializable$$Interface {
public "withZoneSameInstant"(arg0: $ZoneId$$Type): $ChronoZonedDateTime
public "toOffsetDateTime"(): $OffsetDateTime
public "withZoneSameLocal"(arg0: $ZoneId$$Type): $ChronoZonedDateTime
public "withLaterOffsetAtOverlap"(): $ChronoZonedDateTime
public static "ofStrict"(arg0: $LocalDateTime$$Type, arg1: $ZoneOffset$$Type, arg2: $ZoneId$$Type): $ZonedDateTime
public "withFixedOffsetZone"(): $ZonedDateTime
public "get"(arg0: $TemporalField$$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getLong"(arg0: $TemporalField$$Type): long
public "format"(arg0: $DateTimeFormatter$$Type): StringJS
public static "of"(arg0: $LocalDate$$Type, arg1: $LocalTime$$Type, arg2: $ZoneId$$Type): $ZonedDateTime
public static "of"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: $ZoneId$$Type): $ZonedDateTime
public static "of"(arg0: $LocalDateTime$$Type, arg1: $ZoneId$$Type): $ZonedDateTime
public static "from"(arg0: $TemporalAccessor$$Type): $ZonedDateTime
public "isSupported"(arg0: $TemporalField$$Type): boolean
public "isSupported"(arg0: $TemporalUnit$$Type): boolean
public static "parse"(arg0: charseq, arg1: $DateTimeFormatter$$Type): $ZonedDateTime
public static "parse"(arg0: charseq): $ZonedDateTime
public "with"(arg0: $TemporalField$$Type, arg1: long): $ChronoZonedDateTime
public "with"(arg0: $TemporalAdjuster$$Type): $ZonedDateTime
public "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
public "getOffset"(): $ZoneOffset
public "range"(arg0: $TemporalField$$Type): $ValueRange
public static "now"(): $ZonedDateTime
public static "now"(arg0: $ZoneId$$Type): $ZonedDateTime
public static "now"(arg0: $Clock$$Type): $ZonedDateTime
public "getNano"(): integer
public "getYear"(): integer
public "getMonthValue"(): integer
public "getDayOfMonth"(): integer
public "getHour"(): integer
public "getMinute"(): integer
public "getSecond"(): integer
public "minus"(arg0: $TemporalAmount$$Type): $ZonedDateTime
public "minus"(arg0: long, arg1: $TemporalUnit$$Type): $ZonedDateTime
public "getZone"(): $ZoneId
public "plus"(arg0: long, arg1: $TemporalUnit$$Type): $Temporal
public "plus"(arg0: $TemporalAmount$$Type): $ChronoZonedDateTime
public "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
public "plusNanos"(arg0: long): $ZonedDateTime
public "plusSeconds"(arg0: long): $ZonedDateTime
public "plusDays"(arg0: long): $ZonedDateTime
public "plusHours"(arg0: long): $ZonedDateTime
public "plusMinutes"(arg0: long): $ZonedDateTime
public "minusDays"(arg0: long): $ZonedDateTime
public "minusHours"(arg0: long): $ZonedDateTime
public "minusMinutes"(arg0: long): $ZonedDateTime
public "minusSeconds"(arg0: long): $ZonedDateTime
public "minusNanos"(arg0: long): $ZonedDateTime
public "truncatedTo"(arg0: $TemporalUnit$$Type): $ZonedDateTime
public static "ofInstant"(arg0: $LocalDateTime$$Type, arg1: $ZoneOffset$$Type, arg2: $ZoneId$$Type): $ZonedDateTime
public static "ofInstant"(arg0: $Instant$$Type, arg1: $ZoneId$$Type): $ZonedDateTime
public "getMonth"(): $Month
public "getDayOfWeek"(): $DayOfWeek
public "getDayOfYear"(): integer
public "withDayOfMonth"(arg0: integer): $ZonedDateTime
public "withDayOfYear"(arg0: integer): $ZonedDateTime
public "plusWeeks"(arg0: long): $ZonedDateTime
public "withMonth"(arg0: integer): $ZonedDateTime
public "plusMonths"(arg0: long): $ZonedDateTime
public "withYear"(arg0: integer): $ZonedDateTime
public "plusYears"(arg0: long): $ZonedDateTime
public "minusMonths"(arg0: long): $ZonedDateTime
public "toLocalTime"(): $LocalTime
public "minusYears"(arg0: long): $ZonedDateTime
public "minusWeeks"(arg0: long): $ZonedDateTime
public "toLocalDateTime"(): $ChronoLocalDateTime
public "withHour"(arg0: integer): $ZonedDateTime
public "withMinute"(arg0: integer): $ZonedDateTime
public "withSecond"(arg0: integer): $ZonedDateTime
public "withNano"(arg0: integer): $ZonedDateTime
public "toLocalDate"(): $ChronoLocalDate
public static "ofLocal"(arg0: $LocalDateTime$$Type, arg1: $ZoneId$$Type, arg2: $ZoneOffset$$Type): $ZonedDateTime
public "withEarlierOffsetAtOverlap"(): $ChronoZonedDateTime
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $ChronoZonedDateTime$$Type<(never)>): integer
public "toInstant"(): $Instant
public "isAfter"(arg0: $ChronoZonedDateTime$$Type<(never)>): boolean
public "isBefore"(arg0: $ChronoZonedDateTime$$Type<(never)>): boolean
public "isEqual"(arg0: $ChronoZonedDateTime$$Type<(never)>): boolean
public "getChronology"(): $Chronology
public "toEpochSecond"(): long
public static "timeLineOrder"(): $Comparator<($ChronoZonedDateTime<(never)>)>
get "offset"(): $ZoneOffset
get "nano"(): integer
get "year"(): integer
get "monthValue"(): integer
get "dayOfMonth"(): integer
get "hour"(): integer
get "minute"(): integer
get "second"(): integer
get "zone"(): $ZoneId
get "month"(): $Month
get "dayOfWeek"(): $DayOfWeek
get "dayOfYear"(): integer
get "chronology"(): $Chronology
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZonedDateTime$$Type = ($ZonedDateTime);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ZonedDateTime$$Original = $ZonedDateTime;}
declare module "java.time.LocalDateTime" {
import {$Month, $Month$$Type} from "java.time.Month"
import {$TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Comparator} from "java.util.Comparator"
import {$Clock$$Type} from "java.time.Clock"
import {$ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$ChronoZonedDateTime} from "java.time.chrono.ChronoZonedDateTime"
import {$Temporal, $Temporal$$Type, $Temporal$$Interface} from "java.time.temporal.Temporal"
import {$LocalTime, $LocalTime$$Type} from "java.time.LocalTime"
import {$TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$DayOfWeek} from "java.time.DayOfWeek"
import {$ZoneId$$Type} from "java.time.ZoneId"
import {$LocalDate, $LocalDate$$Type} from "java.time.LocalDate"
import {$DateTimeFormatter$$Type} from "java.time.format.DateTimeFormatter"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$ValueRange} from "java.time.temporal.ValueRange"
import {$TemporalAdjuster$$Type, $TemporalAdjuster$$Interface} from "java.time.temporal.TemporalAdjuster"
import {$OffsetDateTime} from "java.time.OffsetDateTime"
import {$TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$Chronology} from "java.time.chrono.Chronology"
import {$Instant, $Instant$$Type} from "java.time.Instant"
import {$ChronoLocalDateTime, $ChronoLocalDateTime$$Type, $ChronoLocalDateTime$$Interface} from "java.time.chrono.ChronoLocalDateTime"

export class $LocalDateTime implements $Temporal$$Interface, $TemporalAdjuster$$Interface, $ChronoLocalDateTime$$Interface<($LocalDate)>, $Serializable$$Interface {
static readonly "MIN": $LocalDateTime
static readonly "MAX": $LocalDateTime

public "get"(arg0: $TemporalField$$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: $ChronoLocalDateTime$$Type<(never)>): integer
public "compareTo"(arg0: any): integer
public "getLong"(arg0: $TemporalField$$Type): long
public "format"(arg0: $DateTimeFormatter$$Type): StringJS
public static "of"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $LocalDateTime
public static "of"(arg0: integer, arg1: $Month$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): $LocalDateTime
public static "of"(arg0: integer, arg1: $Month$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer): $LocalDateTime
public static "of"(arg0: integer, arg1: $Month$$Type, arg2: integer, arg3: integer, arg4: integer): $LocalDateTime
public static "of"(arg0: $LocalDate$$Type, arg1: $LocalTime$$Type): $LocalDateTime
public static "of"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): $LocalDateTime
public static "of"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): $LocalDateTime
public static "from"(arg0: $TemporalAccessor$$Type): $LocalDateTime
public "isSupported"(arg0: $TemporalUnit$$Type): boolean
public "isSupported"(arg0: $TemporalField$$Type): boolean
public static "parse"(arg0: charseq): $LocalDateTime
public static "parse"(arg0: charseq, arg1: $DateTimeFormatter$$Type): $LocalDateTime
public "with"(arg0: $TemporalAdjuster$$Type): $Temporal
public "with"(arg0: $TemporalField$$Type, arg1: long): $LocalDateTime
public "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
public "range"(arg0: $TemporalField$$Type): $ValueRange
public static "now"(): $LocalDateTime
public static "now"(arg0: $Clock$$Type): $LocalDateTime
public static "now"(arg0: $ZoneId$$Type): $LocalDateTime
public "getNano"(): integer
public static "ofEpochSecond"(arg0: long, arg1: integer, arg2: $ZoneOffset$$Type): $LocalDateTime
public "getYear"(): integer
public "getMonthValue"(): integer
public "getDayOfMonth"(): integer
public "getHour"(): integer
public "getMinute"(): integer
public "getSecond"(): integer
public "minus"(arg0: $TemporalAmount$$Type): $Temporal
public "minus"(arg0: long, arg1: $TemporalUnit$$Type): $Temporal
public "plus"(arg0: $TemporalAmount$$Type): $ChronoLocalDateTime
public "plus"(arg0: long, arg1: $TemporalUnit$$Type): $Temporal
public "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
public "plusNanos"(arg0: long): $LocalDateTime
public "plusSeconds"(arg0: long): $LocalDateTime
public "plusDays"(arg0: long): $LocalDateTime
public "plusHours"(arg0: long): $LocalDateTime
public "plusMinutes"(arg0: long): $LocalDateTime
public "minusDays"(arg0: long): $LocalDateTime
public "minusHours"(arg0: long): $LocalDateTime
public "minusMinutes"(arg0: long): $LocalDateTime
public "minusSeconds"(arg0: long): $LocalDateTime
public "minusNanos"(arg0: long): $LocalDateTime
public "truncatedTo"(arg0: $TemporalUnit$$Type): $LocalDateTime
public "adjustInto"(arg0: $Temporal$$Type): $Temporal
public static "ofInstant"(arg0: $Instant$$Type, arg1: $ZoneId$$Type): $LocalDateTime
public "atOffset"(arg0: $ZoneOffset$$Type): $OffsetDateTime
public "atZone"(arg0: $ZoneId$$Type): $ChronoZonedDateTime
public "isAfter"(arg0: $ChronoLocalDateTime$$Type<(never)>): boolean
public "isBefore"(arg0: $ChronoLocalDateTime$$Type<(never)>): boolean
public "getMonth"(): $Month
public "getDayOfWeek"(): $DayOfWeek
public "getDayOfYear"(): integer
public "withDayOfMonth"(arg0: integer): $LocalDateTime
public "withDayOfYear"(arg0: integer): $LocalDateTime
public "plusWeeks"(arg0: long): $LocalDateTime
public "withMonth"(arg0: integer): $LocalDateTime
public "plusMonths"(arg0: long): $LocalDateTime
public "withYear"(arg0: integer): $LocalDateTime
public "plusYears"(arg0: long): $LocalDateTime
public "minusMonths"(arg0: long): $LocalDateTime
public "toLocalTime"(): $LocalTime
public "isEqual"(arg0: $ChronoLocalDateTime$$Type<(never)>): boolean
public "minusYears"(arg0: long): $LocalDateTime
public "minusWeeks"(arg0: long): $LocalDateTime
public "withHour"(arg0: integer): $LocalDateTime
public "withMinute"(arg0: integer): $LocalDateTime
public "withSecond"(arg0: integer): $LocalDateTime
public "withNano"(arg0: integer): $LocalDateTime
public "toLocalDate"(): $LocalDate
public "toInstant"(arg0: $ZoneOffset$$Type): $Instant
public "getChronology"(): $Chronology
public "toEpochSecond"(arg0: $ZoneOffset$$Type): long
public static "timeLineOrder"(): $Comparator<($ChronoLocalDateTime<(never)>)>
get "nano"(): integer
get "year"(): integer
get "monthValue"(): integer
get "dayOfMonth"(): integer
get "hour"(): integer
get "minute"(): integer
get "second"(): integer
get "month"(): $Month
get "dayOfWeek"(): $DayOfWeek
get "dayOfYear"(): integer
get "chronology"(): $Chronology
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocalDateTime$$Type = ($LocalDateTime);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LocalDateTime$$Original = $LocalDateTime;}
declare module "java.time.LocalDate" {
import {$Month, $Month$$Type} from "java.time.Month"
import {$TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$ChronoLocalDate, $ChronoLocalDate$$Type, $ChronoLocalDate$$Interface} from "java.time.chrono.ChronoLocalDate"
import {$OffsetTime$$Type} from "java.time.OffsetTime"
import {$TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$LocalDateTime} from "java.time.LocalDateTime"
import {$TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$ValueRange} from "java.time.temporal.ValueRange"
import {$Stream} from "java.util.stream.Stream"
import {$TemporalAdjuster$$Type, $TemporalAdjuster$$Interface} from "java.time.temporal.TemporalAdjuster"
import {$OffsetDateTime} from "java.time.OffsetDateTime"
import {$Era} from "java.time.chrono.Era"
import {$TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Comparator} from "java.util.Comparator"
import {$Clock$$Type} from "java.time.Clock"
import {$ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$Temporal, $Temporal$$Type, $Temporal$$Interface} from "java.time.temporal.Temporal"
import {$LocalTime$$Type} from "java.time.LocalTime"
import {$ZonedDateTime} from "java.time.ZonedDateTime"
import {$DayOfWeek} from "java.time.DayOfWeek"
import {$ZoneId$$Type} from "java.time.ZoneId"
import {$DateTimeFormatter$$Type} from "java.time.format.DateTimeFormatter"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Period, $Period$$Type} from "java.time.Period"
import {$TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$Chronology} from "java.time.chrono.Chronology"
import {$Instant$$Type} from "java.time.Instant"
import {$ChronoLocalDateTime} from "java.time.chrono.ChronoLocalDateTime"

export class $LocalDate implements $Temporal$$Interface, $TemporalAdjuster$$Interface, $ChronoLocalDate$$Interface, $Serializable$$Interface {
static readonly "MIN": $LocalDate
static readonly "MAX": $LocalDate
static readonly "EPOCH": $LocalDate

public "get"(arg0: $TemporalField$$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $ChronoLocalDate$$Type): integer
public "getLong"(arg0: $TemporalField$$Type): long
public "format"(arg0: $DateTimeFormatter$$Type): StringJS
public static "of"(arg0: integer, arg1: integer, arg2: integer): $LocalDate
public static "of"(arg0: integer, arg1: $Month$$Type, arg2: integer): $LocalDate
public static "from"(arg0: $TemporalAccessor$$Type): $LocalDate
public "isSupported"(arg0: $TemporalUnit$$Type): boolean
public "isSupported"(arg0: $TemporalField$$Type): boolean
public static "parse"(arg0: charseq): $LocalDate
public static "parse"(arg0: charseq, arg1: $DateTimeFormatter$$Type): $LocalDate
public "with"(arg0: $TemporalAdjuster$$Type): $LocalDate
public "with"(arg0: $TemporalField$$Type, arg1: long): $LocalDate
public "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
public "range"(arg0: $TemporalField$$Type): $ValueRange
public static "now"(): $LocalDate
public static "now"(arg0: $Clock$$Type): $LocalDate
public static "now"(arg0: $ZoneId$$Type): $LocalDate
public "getYear"(): integer
public "getMonthValue"(): integer
public "getDayOfMonth"(): integer
public "minus"(arg0: $TemporalAmount$$Type): $Temporal
public "minus"(arg0: long, arg1: $TemporalUnit$$Type): $LocalDate
public "plus"(arg0: $TemporalAmount$$Type): $ChronoLocalDate
public "plus"(arg0: long, arg1: $TemporalUnit$$Type): $ChronoLocalDate
public "until"(arg0: $ChronoLocalDate$$Type): $Period
public "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
public "plusDays"(arg0: long): $LocalDate
public "minusDays"(arg0: long): $LocalDate
public "adjustInto"(arg0: $Temporal$$Type): $Temporal
public static "ofInstant"(arg0: $Instant$$Type, arg1: $ZoneId$$Type): $LocalDate
public "isAfter"(arg0: $ChronoLocalDate$$Type): boolean
public "isBefore"(arg0: $ChronoLocalDate$$Type): boolean
public "isLeapYear"(): boolean
public static "ofEpochDay"(arg0: long): $LocalDate
public "lengthOfMonth"(): integer
public "lengthOfYear"(): integer
public "getMonth"(): $Month
public "toEpochDay"(): long
public "getDayOfWeek"(): $DayOfWeek
public "getDayOfYear"(): integer
public "withDayOfMonth"(arg0: integer): $LocalDate
public "withDayOfYear"(arg0: integer): $LocalDate
public "plusWeeks"(arg0: long): $LocalDate
public "withMonth"(arg0: integer): $LocalDate
public "plusMonths"(arg0: long): $LocalDate
public "withYear"(arg0: integer): $LocalDate
public static "ofYearDay"(arg0: integer, arg1: integer): $LocalDate
public "plusYears"(arg0: long): $LocalDate
public "minusMonths"(arg0: long): $LocalDate
public "atTime"(arg0: $LocalTime$$Type): $ChronoLocalDateTime
public "atTime"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $LocalDateTime
public "atTime"(arg0: $OffsetTime$$Type): $OffsetDateTime
public "atTime"(arg0: integer, arg1: integer, arg2: integer): $LocalDateTime
public "atTime"(arg0: integer, arg1: integer): $LocalDateTime
public "isEqual"(arg0: $ChronoLocalDate$$Type): boolean
public "getEra"(): $Era
public "getChronology"(): $Chronology
public "minusYears"(arg0: long): $LocalDate
public "minusWeeks"(arg0: long): $LocalDate
public "datesUntil"(arg0: $LocalDate$$Type, arg1: $Period$$Type): $Stream<($LocalDate)>
public "datesUntil"(arg0: $LocalDate$$Type): $Stream<($LocalDate)>
public "atStartOfDay"(): $LocalDateTime
public "atStartOfDay"(arg0: $ZoneId$$Type): $ZonedDateTime
public "toEpochSecond"(arg0: $LocalTime$$Type, arg1: $ZoneOffset$$Type): long
public static "timeLineOrder"(): $Comparator<($ChronoLocalDate)>
get "year"(): integer
get "monthValue"(): integer
get "dayOfMonth"(): integer
get "leapYear"(): boolean
get "month"(): $Month
get "dayOfWeek"(): $DayOfWeek
get "dayOfYear"(): integer
get "era"(): $Era
get "chronology"(): $Chronology
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocalDate$$Type = ($LocalDate);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LocalDate$$Original = $LocalDate;}
declare module "java.time.OffsetTime" {
import {$TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Clock$$Type} from "java.time.Clock"
import {$ZoneOffset, $ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$Temporal, $Temporal$$Type, $Temporal$$Interface} from "java.time.temporal.Temporal"
import {$LocalTime, $LocalTime$$Type} from "java.time.LocalTime"
import {$TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$ZoneId$$Type} from "java.time.ZoneId"
import {$LocalDate$$Type} from "java.time.LocalDate"
import {$DateTimeFormatter$$Type} from "java.time.format.DateTimeFormatter"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$ValueRange} from "java.time.temporal.ValueRange"
import {$TemporalAdjuster$$Type, $TemporalAdjuster$$Interface} from "java.time.temporal.TemporalAdjuster"
import {$OffsetDateTime} from "java.time.OffsetDateTime"
import {$TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$Instant$$Type} from "java.time.Instant"

export class $OffsetTime implements $Temporal$$Interface, $TemporalAdjuster$$Interface, $Comparable$$Interface<($OffsetTime)>, $Serializable$$Interface {
static readonly "MIN": $OffsetTime
static readonly "MAX": $OffsetTime

public "get"(arg0: $TemporalField$$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $OffsetTime$$Type): integer
public "getLong"(arg0: $TemporalField$$Type): long
public "format"(arg0: $DateTimeFormatter$$Type): StringJS
public static "of"(arg0: $LocalTime$$Type, arg1: $ZoneOffset$$Type): $OffsetTime
public static "of"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $ZoneOffset$$Type): $OffsetTime
public static "from"(arg0: $TemporalAccessor$$Type): $OffsetTime
public "isSupported"(arg0: $TemporalField$$Type): boolean
public "isSupported"(arg0: $TemporalUnit$$Type): boolean
public static "parse"(arg0: charseq): $OffsetTime
public static "parse"(arg0: charseq, arg1: $DateTimeFormatter$$Type): $OffsetTime
public "with"(arg0: $TemporalAdjuster$$Type): $OffsetTime
public "with"(arg0: $TemporalField$$Type, arg1: long): $OffsetTime
public "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
public "getOffset"(): $ZoneOffset
public "range"(arg0: $TemporalField$$Type): $ValueRange
public static "now"(): $OffsetTime
public static "now"(arg0: $ZoneId$$Type): $OffsetTime
public static "now"(arg0: $Clock$$Type): $OffsetTime
public "getNano"(): integer
public "getHour"(): integer
public "getMinute"(): integer
public "getSecond"(): integer
public "minus"(arg0: $TemporalAmount$$Type): $OffsetTime
public "minus"(arg0: long, arg1: $TemporalUnit$$Type): $OffsetTime
public "plus"(arg0: long, arg1: $TemporalUnit$$Type): $OffsetTime
public "plus"(arg0: $TemporalAmount$$Type): $OffsetTime
public "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
public "plusNanos"(arg0: long): $OffsetTime
public "plusSeconds"(arg0: long): $OffsetTime
public "plusHours"(arg0: long): $OffsetTime
public "plusMinutes"(arg0: long): $OffsetTime
public "minusHours"(arg0: long): $OffsetTime
public "minusMinutes"(arg0: long): $OffsetTime
public "minusSeconds"(arg0: long): $OffsetTime
public "minusNanos"(arg0: long): $OffsetTime
public "truncatedTo"(arg0: $TemporalUnit$$Type): $OffsetTime
public "adjustInto"(arg0: $Temporal$$Type): $Temporal
public static "ofInstant"(arg0: $Instant$$Type, arg1: $ZoneId$$Type): $OffsetTime
public "isAfter"(arg0: $OffsetTime$$Type): boolean
public "isBefore"(arg0: $OffsetTime$$Type): boolean
public "toLocalTime"(): $LocalTime
public "isEqual"(arg0: $OffsetTime$$Type): boolean
public "toEpochSecond"(arg0: $LocalDate$$Type): long
public "withHour"(arg0: integer): $OffsetTime
public "withMinute"(arg0: integer): $OffsetTime
public "withSecond"(arg0: integer): $OffsetTime
public "withNano"(arg0: integer): $OffsetTime
public "atDate"(arg0: $LocalDate$$Type): $OffsetDateTime
public "withOffsetSameInstant"(arg0: $ZoneOffset$$Type): $OffsetTime
public "withOffsetSameLocal"(arg0: $ZoneOffset$$Type): $OffsetTime
get "offset"(): $ZoneOffset
get "nano"(): integer
get "hour"(): integer
get "minute"(): integer
get "second"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OffsetTime$$Type = ($OffsetTime);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OffsetTime$$Original = $OffsetTime;}
declare module "java.time.Instant" {
import {$TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Clock$$Type} from "java.time.Clock"
import {$ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$Temporal, $Temporal$$Type, $Temporal$$Interface} from "java.time.temporal.Temporal"
import {$ZonedDateTime} from "java.time.ZonedDateTime"
import {$TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$ZoneId$$Type} from "java.time.ZoneId"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$ValueRange} from "java.time.temporal.ValueRange"
import {$TemporalAdjuster$$Type, $TemporalAdjuster$$Interface} from "java.time.temporal.TemporalAdjuster"
import {$OffsetDateTime} from "java.time.OffsetDateTime"
import {$TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"

export class $Instant implements $Temporal$$Interface, $TemporalAdjuster$$Interface, $Comparable$$Interface<($Instant)>, $Serializable$$Interface {
static readonly "MIN": $Instant
static readonly "MAX": $Instant
static readonly "EPOCH": $Instant

public "get"(arg0: $TemporalField$$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: $Instant$$Type): integer
public "compareTo"(arg0: any): integer
public "getLong"(arg0: $TemporalField$$Type): long
public static "from"(arg0: $TemporalAccessor$$Type): $Instant
public "isSupported"(arg0: $TemporalUnit$$Type): boolean
public "isSupported"(arg0: $TemporalField$$Type): boolean
public static "parse"(arg0: charseq): $Instant
public "with"(arg0: $TemporalField$$Type, arg1: long): $Instant
public "with"(arg0: $TemporalAdjuster$$Type): $Instant
public "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
public "range"(arg0: $TemporalField$$Type): $ValueRange
public static "now"(): $Instant
public static "now"(arg0: $Clock$$Type): $Instant
public "getEpochSecond"(): long
public "getNano"(): integer
public static "ofEpochSecond"(arg0: long): $Instant
public static "ofEpochSecond"(arg0: long, arg1: long): $Instant
public "minus"(arg0: $TemporalAmount$$Type): $Temporal
public "minus"(arg0: long, arg1: $TemporalUnit$$Type): $Temporal
public "toEpochMilli"(): long
public "plus"(arg0: long, arg1: $TemporalUnit$$Type): $Instant
public "plus"(arg0: $TemporalAmount$$Type): $Instant
public "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
public "plusNanos"(arg0: long): $Instant
public "plusSeconds"(arg0: long): $Instant
public "plusMillis"(arg0: long): $Instant
public "minusSeconds"(arg0: long): $Instant
public "minusMillis"(arg0: long): $Instant
public "minusNanos"(arg0: long): $Instant
public "truncatedTo"(arg0: $TemporalUnit$$Type): $Instant
public "adjustInto"(arg0: $Temporal$$Type): $Temporal
public static "ofEpochMilli"(arg0: long): $Instant
public "atOffset"(arg0: $ZoneOffset$$Type): $OffsetDateTime
public "atZone"(arg0: $ZoneId$$Type): $ZonedDateTime
public "isAfter"(arg0: $Instant$$Type): boolean
public "isBefore"(arg0: $Instant$$Type): boolean
get "epochSecond"(): long
get "nano"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Instant$$Type = ($Instant);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Instant$$Original = $Instant;}
declare module "java.time.ZoneOffset" {
import {$ZoneId} from "java.time.ZoneId"
import {$Map} from "java.util.Map"
import {$ZoneRules} from "java.time.zone.ZoneRules"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$TemporalAccessor$$Type, $TemporalAccessor$$Interface} from "java.time.temporal.TemporalAccessor"
import {$ValueRange} from "java.time.temporal.ValueRange"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$TemporalAdjuster$$Interface} from "java.time.temporal.TemporalAdjuster"
import {$TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$TemporalField$$Type} from "java.time.temporal.TemporalField"

export class $ZoneOffset extends $ZoneId implements $TemporalAccessor$$Interface, $TemporalAdjuster$$Interface, $Comparable$$Interface<($ZoneOffset)>, $Serializable$$Interface {
static readonly "MIN": $ZoneOffset
static readonly "UTC": $ZoneOffset
static readonly "MAX": $ZoneOffset
static readonly "SHORT_IDS": $Map<(StringJS), (StringJS)>

public "get"(arg0: $TemporalField$$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: $ZoneOffset$$Type): integer
public "compareTo"(arg0: any): integer
public "getLong"(arg0: $TemporalField$$Type): long
public static "of"(arg0: StringJS): $ZoneOffset
public static "from"(arg0: $TemporalAccessor$$Type): $ZoneOffset
public "isSupported"(arg0: $TemporalField$$Type): boolean
public "getId"(): StringJS
public "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
public "range"(arg0: $TemporalField$$Type): $ValueRange
public "normalized"(): $ZoneId
public static "ofHours"(arg0: integer): $ZoneOffset
public "adjustInto"(arg0: $Temporal$$Type): $Temporal
public "getRules"(): $ZoneRules
public "getTotalSeconds"(): integer
public static "ofHoursMinutesSeconds"(arg0: integer, arg1: integer, arg2: integer): $ZoneOffset
public static "ofTotalSeconds"(arg0: integer): $ZoneOffset
public static "ofHoursMinutes"(arg0: integer, arg1: integer): $ZoneOffset
get "id"(): StringJS
get "rules"(): $ZoneRules
get "totalSeconds"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZoneOffset$$Type = ($ZoneOffset);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ZoneOffset$$Original = $ZoneOffset;}
