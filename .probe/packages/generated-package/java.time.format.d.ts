declare module "java.time.format.TextStyle" {
import {$Enum} from "java.lang.Enum"

export class $TextStyle extends $Enum<($TextStyle)> {
static readonly "SHORT_STANDALONE": $TextStyle
static readonly "NARROW_STANDALONE": $TextStyle
static readonly "FULL_STANDALONE": $TextStyle
static readonly "FULL": $TextStyle
static readonly "SHORT": $TextStyle
static readonly "NARROW": $TextStyle

public static "values"(): ($TextStyle)[]
public static "valueOf"(arg0: StringJS): $TextStyle
public "isStandalone"(): boolean
public "asStandalone"(): $TextStyle
public "asNormal"(): $TextStyle
get "standalone"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextStyle$$Type = (("full") | ("full_standalone") | ("short") | ("short_standalone") | ("narrow") | ("narrow_standalone"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextStyle$$Original = $TextStyle;}
declare module "java.time.format.FormatStyle" {
import {$Enum} from "java.lang.Enum"

export class $FormatStyle extends $Enum<($FormatStyle)> {
static readonly "MEDIUM": $FormatStyle
static readonly "FULL": $FormatStyle
static readonly "LONG": $FormatStyle
static readonly "SHORT": $FormatStyle

public static "values"(): ($FormatStyle)[]
public static "valueOf"(arg0: StringJS): $FormatStyle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FormatStyle$$Type = (("full") | ("long") | ("medium") | ("short"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FormatStyle$$Original = $FormatStyle;}
declare module "java.time.format.ResolverStyle" {
import {$Enum} from "java.lang.Enum"

export class $ResolverStyle extends $Enum<($ResolverStyle)> {
static readonly "STRICT": $ResolverStyle
static readonly "LENIENT": $ResolverStyle
static readonly "SMART": $ResolverStyle

public static "values"(): ($ResolverStyle)[]
public static "valueOf"(arg0: StringJS): $ResolverStyle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResolverStyle$$Type = (("strict") | ("smart") | ("lenient"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResolverStyle$$Original = $ResolverStyle;}
declare module "java.time.format.DecimalStyle" {
import {$Set} from "java.util.Set"
import {$Locale, $Locale$$Type} from "java.util.Locale"

export class $DecimalStyle {
static readonly "STANDARD": $DecimalStyle

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"(arg0: $Locale$$Type): $DecimalStyle
public static "getAvailableLocales"(): $Set<($Locale)>
public "getZeroDigit"(): character
public "getDecimalSeparator"(): character
public "getPositiveSign"(): character
public "getNegativeSign"(): character
public static "ofDefaultLocale"(): $DecimalStyle
public "withZeroDigit"(arg0: character): $DecimalStyle
public "withPositiveSign"(arg0: character): $DecimalStyle
public "withNegativeSign"(arg0: character): $DecimalStyle
public "withDecimalSeparator"(arg0: character): $DecimalStyle
get "availableLocales"(): $Set<($Locale)>
get "zeroDigit"(): character
get "decimalSeparator"(): character
get "positiveSign"(): character
get "negativeSign"(): character
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DecimalStyle$$Type = ($DecimalStyle);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DecimalStyle$$Original = $DecimalStyle;}
declare module "java.time.format.DateTimeFormatter" {
import {$Appendable$$Type} from "java.lang.Appendable"
import {$DecimalStyle, $DecimalStyle$$Type} from "java.time.format.DecimalStyle"
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$Locale, $Locale$$Type} from "java.util.Locale"
import {$Format} from "java.text.Format"
import {$TemporalField, $TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$ResolverStyle, $ResolverStyle$$Type} from "java.time.format.ResolverStyle"
import {$ZoneId, $ZoneId$$Type} from "java.time.ZoneId"
import {$ParsePosition$$Type} from "java.text.ParsePosition"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Period} from "java.time.Period"
import {$TemporalQuery, $TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$Chronology, $Chronology$$Type} from "java.time.chrono.Chronology"
import {$FormatStyle$$Type} from "java.time.format.FormatStyle"

export class $DateTimeFormatter {
static readonly "ISO_OFFSET_TIME": $DateTimeFormatter
static readonly "ISO_LOCAL_DATE_TIME": $DateTimeFormatter
static readonly "RFC_1123_DATE_TIME": $DateTimeFormatter
static readonly "ISO_INSTANT": $DateTimeFormatter
static readonly "ISO_ZONED_DATE_TIME": $DateTimeFormatter
static readonly "ISO_OFFSET_DATE_TIME": $DateTimeFormatter
static readonly "ISO_DATE_TIME": $DateTimeFormatter
static readonly "ISO_DATE": $DateTimeFormatter
static readonly "ISO_TIME": $DateTimeFormatter
static readonly "ISO_LOCAL_TIME": $DateTimeFormatter
static readonly "ISO_OFFSET_DATE": $DateTimeFormatter
static readonly "ISO_ORDINAL_DATE": $DateTimeFormatter
static readonly "ISO_LOCAL_DATE": $DateTimeFormatter
static readonly "BASIC_ISO_DATE": $DateTimeFormatter
static readonly "ISO_WEEK_DATE": $DateTimeFormatter

public "toString"(): StringJS
public "format"(arg0: $TemporalAccessor$$Type): StringJS
public "parse"(arg0: charseq, arg1: $ParsePosition$$Type): $TemporalAccessor
public "parse"<T>(arg0: charseq, arg1: $TemporalQuery$$Type<(T)>): T
public "parse"(arg0: charseq): $TemporalAccessor
public "getLocale"(): $Locale
public "getZone"(): $ZoneId
public "withZone"(arg0: $ZoneId$$Type): $DateTimeFormatter
public "getChronology"(): $Chronology
public "formatTo"(arg0: $TemporalAccessor$$Type, arg1: $Appendable$$Type): void
public static "ofPattern"(arg0: StringJS): $DateTimeFormatter
public static "ofPattern"(arg0: StringJS, arg1: $Locale$$Type): $DateTimeFormatter
public static "ofLocalizedDate"(arg0: $FormatStyle$$Type): $DateTimeFormatter
public static "ofLocalizedTime"(arg0: $FormatStyle$$Type): $DateTimeFormatter
public static "ofLocalizedDateTime"(arg0: $FormatStyle$$Type, arg1: $FormatStyle$$Type): $DateTimeFormatter
public static "ofLocalizedDateTime"(arg0: $FormatStyle$$Type): $DateTimeFormatter
public static "ofLocalizedPattern"(arg0: StringJS): $DateTimeFormatter
public static "parsedExcessDays"(): $TemporalQuery<($Period)>
public static "parsedLeapSecond"(): $TemporalQuery<(boolean)>
public "withLocale"(arg0: $Locale$$Type): $DateTimeFormatter
public "localizedBy"(arg0: $Locale$$Type): $DateTimeFormatter
public "getDecimalStyle"(): $DecimalStyle
public "withDecimalStyle"(arg0: $DecimalStyle$$Type): $DateTimeFormatter
public "withChronology"(arg0: $Chronology$$Type): $DateTimeFormatter
public "getResolverStyle"(): $ResolverStyle
public "withResolverStyle"(arg0: $ResolverStyle$$Type): $DateTimeFormatter
public "getResolverFields"(): $Set<($TemporalField)>
public "withResolverFields"(...arg0: ($TemporalField$$Type)[]): $DateTimeFormatter
public "withResolverFields"(arg0: $Set$$Type<($TemporalField$$Type)>): $DateTimeFormatter
public "parseBest"(arg0: charseq, ...arg1: ($TemporalQuery$$Type<(never)>)[]): $TemporalAccessor
public "parseUnresolved"(arg0: charseq, arg1: $ParsePosition$$Type): $TemporalAccessor
public "toFormat"(arg0: $TemporalQuery$$Type<(never)>): $Format
public "toFormat"(): $Format
get "locale"(): $Locale
get "zone"(): $ZoneId
get "chronology"(): $Chronology
get "decimalStyle"(): $DecimalStyle
get "resolverStyle"(): $ResolverStyle
get "resolverFields"(): $Set<($TemporalField)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DateTimeFormatter$$Type = ($DateTimeFormatter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DateTimeFormatter$$Original = $DateTimeFormatter;}
