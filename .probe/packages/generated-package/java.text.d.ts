declare module "java.text.NumberFormat" {
import {$FieldPosition$$Type} from "java.text.FieldPosition"
import {$ParsePosition$$Type} from "java.text.ParsePosition"
import {$StringBuffer, $StringBuffer$$Type} from "java.lang.StringBuffer"
import {$NumberFormat$Style$$Type} from "java.text.NumberFormat$Style"
import {$Locale, $Locale$$Type} from "java.util.Locale"
import {$Format} from "java.text.Format"
import {$Currency, $Currency$$Type} from "java.util.Currency"
import {$RoundingMode, $RoundingMode$$Type} from "java.math.RoundingMode"

export class $NumberFormat extends $Format {
static readonly "FRACTION_FIELD": integer
static readonly "INTEGER_FIELD": integer

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "clone"(): any
public "format"(arg0: long, arg1: $StringBuffer$$Type, arg2: $FieldPosition$$Type): $StringBuffer
public "format"(arg0: double, arg1: $StringBuffer$$Type, arg2: $FieldPosition$$Type): $StringBuffer
public "format"(arg0: any, arg1: $StringBuffer$$Type, arg2: $FieldPosition$$Type): $StringBuffer
public "format"(arg0: double): StringJS
public "format"(arg0: long): StringJS
public static "getInstance"(): $NumberFormat
public static "getInstance"(arg0: $Locale$$Type): $NumberFormat
public "parse"(arg0: StringJS, arg1: $ParsePosition$$Type): number
public "parse"(arg0: StringJS): number
public static "getAvailableLocales"(): ($Locale)[]
public "parseObject"(arg0: StringJS, arg1: $ParsePosition$$Type): any
public "getMaximumIntegerDigits"(): integer
public "getMinimumIntegerDigits"(): integer
public "getMaximumFractionDigits"(): integer
public "getMinimumFractionDigits"(): integer
public "isGroupingUsed"(): boolean
public "isParseIntegerOnly"(): boolean
public "setGroupingUsed"(arg0: boolean): void
public "setMinimumIntegerDigits"(arg0: integer): void
public "setMaximumIntegerDigits"(arg0: integer): void
public "setMaximumFractionDigits"(arg0: integer): void
public "setMinimumFractionDigits"(arg0: integer): void
public "getCurrency"(): $Currency
public "setCurrency"(arg0: $Currency$$Type): void
public "setRoundingMode"(arg0: $RoundingMode$$Type): void
public "getRoundingMode"(): $RoundingMode
public static "getNumberInstance"(): $NumberFormat
public static "getNumberInstance"(arg0: $Locale$$Type): $NumberFormat
public static "getPercentInstance"(): $NumberFormat
public static "getPercentInstance"(arg0: $Locale$$Type): $NumberFormat
public static "getCurrencyInstance"(arg0: $Locale$$Type): $NumberFormat
public static "getCurrencyInstance"(): $NumberFormat
public static "getIntegerInstance"(arg0: $Locale$$Type): $NumberFormat
public static "getIntegerInstance"(): $NumberFormat
public static "getCompactNumberInstance"(): $NumberFormat
public static "getCompactNumberInstance"(arg0: $Locale$$Type, arg1: $NumberFormat$Style$$Type): $NumberFormat
public "setParseIntegerOnly"(arg0: boolean): void
get "instance"(): $NumberFormat
get "availableLocales"(): ($Locale)[]
get "maximumIntegerDigits"(): integer
get "minimumIntegerDigits"(): integer
get "maximumFractionDigits"(): integer
get "minimumFractionDigits"(): integer
get "groupingUsed"(): boolean
get "parseIntegerOnly"(): boolean
set "groupingUsed"(value: boolean)
set "minimumIntegerDigits"(value: integer)
set "maximumIntegerDigits"(value: integer)
set "maximumFractionDigits"(value: integer)
set "minimumFractionDigits"(value: integer)
get "currency"(): $Currency
set "currency"(value: $Currency$$Type)
set "roundingMode"(value: $RoundingMode$$Type)
get "roundingMode"(): $RoundingMode
get "numberInstance"(): $NumberFormat
get "percentInstance"(): $NumberFormat
get "currencyInstance"(): $NumberFormat
get "integerInstance"(): $NumberFormat
get "compactNumberInstance"(): $NumberFormat
set "parseIntegerOnly"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NumberFormat$$Type = ($NumberFormat);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NumberFormat$$Original = $NumberFormat;}
declare module "java.text.DecimalFormatSymbols" {
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Cloneable$$Interface} from "java.lang.Cloneable"
import {$Locale, $Locale$$Type} from "java.util.Locale"
import {$Currency, $Currency$$Type} from "java.util.Currency"

export class $DecimalFormatSymbols implements $Cloneable$$Interface, $Serializable$$Interface {
constructor()
constructor(arg0: $Locale$$Type)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "clone"(): any
public static "getInstance"(arg0: $Locale$$Type): $DecimalFormatSymbols
public static "getInstance"(): $DecimalFormatSymbols
public static "getAvailableLocales"(): ($Locale)[]
public "getNaN"(): StringJS
public "getInfinity"(): StringJS
public "getZeroDigit"(): character
public "getMonetaryGroupingSeparator"(): character
public "getGroupingSeparator"(): character
public "getMonetaryDecimalSeparator"(): character
public "getDecimalSeparator"(): character
public "getExponentSeparator"(): StringJS
public "getInternationalCurrencySymbol"(): StringJS
public "getCurrencySymbol"(): StringJS
public "getDigit"(): character
public "getPatternSeparator"(): character
public "getPercent"(): character
public "getPerMill"(): character
public "getMinusSign"(): character
public "getCurrency"(): $Currency
public "setCurrency"(arg0: $Currency$$Type): void
public "getLocale"(): $Locale
public "setZeroDigit"(arg0: character): void
public "setGroupingSeparator"(arg0: character): void
public "setDecimalSeparator"(arg0: character): void
public "setPerMill"(arg0: character): void
public "setPercent"(arg0: character): void
public "setDigit"(arg0: character): void
public "setPatternSeparator"(arg0: character): void
public "setInfinity"(arg0: StringJS): void
public "setNaN"(arg0: StringJS): void
public "setMinusSign"(arg0: character): void
public "setCurrencySymbol"(arg0: StringJS): void
public "setInternationalCurrencySymbol"(arg0: StringJS): void
public "setMonetaryDecimalSeparator"(arg0: character): void
public "setExponentSeparator"(arg0: StringJS): void
public "setMonetaryGroupingSeparator"(arg0: character): void
get "instance"(): $DecimalFormatSymbols
get "availableLocales"(): ($Locale)[]
get "naN"(): StringJS
get "infinity"(): StringJS
get "zeroDigit"(): character
get "monetaryGroupingSeparator"(): character
get "groupingSeparator"(): character
get "monetaryDecimalSeparator"(): character
get "decimalSeparator"(): character
get "exponentSeparator"(): StringJS
get "internationalCurrencySymbol"(): StringJS
get "currencySymbol"(): StringJS
get "digit"(): character
get "patternSeparator"(): character
get "percent"(): character
get "perMill"(): character
get "minusSign"(): character
get "currency"(): $Currency
set "currency"(value: $Currency$$Type)
get "locale"(): $Locale
set "zeroDigit"(value: character)
set "groupingSeparator"(value: character)
set "decimalSeparator"(value: character)
set "perMill"(value: character)
set "percent"(value: character)
set "digit"(value: character)
set "patternSeparator"(value: character)
set "infinity"(value: StringJS)
set "naN"(value: StringJS)
set "minusSign"(value: character)
set "currencySymbol"(value: StringJS)
set "internationalCurrencySymbol"(value: StringJS)
set "monetaryDecimalSeparator"(value: character)
set "exponentSeparator"(value: StringJS)
set "monetaryGroupingSeparator"(value: character)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DecimalFormatSymbols$$Type = ($DecimalFormatSymbols);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DecimalFormatSymbols$$Original = $DecimalFormatSymbols;}
declare module "java.text.CharacterIterator" {
import {$Cloneable$$Interface} from "java.lang.Cloneable"

export interface $CharacterIterator$$Interface extends $Cloneable$$Interface {
get "index"(): integer
get "beginIndex"(): integer
get "endIndex"(): integer
set "index"(value: integer)
}

export class $CharacterIterator implements $CharacterIterator$$Interface {
static readonly "DONE": character

 "clone"(): any
 "next"(): character
 "last"(): character
 "first"(): character
 "current"(): character
 "previous"(): character
 "getIndex"(): integer
 "getBeginIndex"(): integer
 "getEndIndex"(): integer
 "setIndex"(arg0: integer): character
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CharacterIterator$$Type = ($CharacterIterator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CharacterIterator$$Original = $CharacterIterator;}
declare module "java.text.ParsePosition" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ParsePosition {
constructor(arg0: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getIndex"(): integer
public "getErrorIndex"(): integer
public "setErrorIndex"(arg0: integer): void
public "setIndex"(arg0: integer): void
get "index"(): integer
get "errorIndex"(): integer
set "errorIndex"(value: integer)
set "index"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParsePosition$$Type = ($ParsePosition);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ParsePosition$$Original = $ParsePosition;}
declare module "java.text.DecimalFormat" {
import {$AttributedCharacterIterator} from "java.text.AttributedCharacterIterator"
import {$NumberFormat} from "java.text.NumberFormat"
import {$FieldPosition$$Type} from "java.text.FieldPosition"
import {$ParsePosition$$Type} from "java.text.ParsePosition"
import {$StringBuffer, $StringBuffer$$Type} from "java.lang.StringBuffer"
import {$Currency, $Currency$$Type} from "java.util.Currency"
import {$DecimalFormatSymbols, $DecimalFormatSymbols$$Type} from "java.text.DecimalFormatSymbols"
import {$RoundingMode, $RoundingMode$$Type} from "java.math.RoundingMode"

export class $DecimalFormat extends $NumberFormat {
static readonly "FRACTION_FIELD": integer
static readonly "INTEGER_FIELD": integer

constructor(arg0: StringJS, arg1: $DecimalFormatSymbols$$Type)
constructor(arg0: StringJS)
constructor()

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "clone"(): any
public "format"(arg0: double, arg1: $StringBuffer$$Type, arg2: $FieldPosition$$Type): $StringBuffer
public "format"(arg0: any, arg1: $StringBuffer$$Type, arg2: $FieldPosition$$Type): $StringBuffer
public "format"(arg0: long, arg1: $StringBuffer$$Type, arg2: $FieldPosition$$Type): $StringBuffer
public "parse"(arg0: StringJS, arg1: $ParsePosition$$Type): number
public "formatToCharacterIterator"(arg0: any): $AttributedCharacterIterator
public "getMaximumIntegerDigits"(): integer
public "getMinimumIntegerDigits"(): integer
public "getMaximumFractionDigits"(): integer
public "getMinimumFractionDigits"(): integer
public "applyPattern"(arg0: StringJS): void
public "isParseBigDecimal"(): boolean
public "setGroupingUsed"(arg0: boolean): void
public "toPattern"(): StringJS
public "setMinimumIntegerDigits"(arg0: integer): void
public "setMaximumIntegerDigits"(arg0: integer): void
public "setMaximumFractionDigits"(arg0: integer): void
public "setMinimumFractionDigits"(arg0: integer): void
public "setDecimalSeparatorAlwaysShown"(arg0: boolean): void
public "getCurrency"(): $Currency
public "setCurrency"(arg0: $Currency$$Type): void
public "setRoundingMode"(arg0: $RoundingMode$$Type): void
public "getRoundingMode"(): $RoundingMode
public "getDecimalFormatSymbols"(): $DecimalFormatSymbols
public "setDecimalFormatSymbols"(arg0: $DecimalFormatSymbols$$Type): void
public "getPositivePrefix"(): StringJS
public "setPositivePrefix"(arg0: StringJS): void
public "getNegativePrefix"(): StringJS
public "setNegativePrefix"(arg0: StringJS): void
public "getPositiveSuffix"(): StringJS
public "setPositiveSuffix"(arg0: StringJS): void
public "getNegativeSuffix"(): StringJS
public "setNegativeSuffix"(arg0: StringJS): void
public "getMultiplier"(): integer
public "setMultiplier"(arg0: integer): void
public "getGroupingSize"(): integer
public "setGroupingSize"(arg0: integer): void
public "isDecimalSeparatorAlwaysShown"(): boolean
public "setParseBigDecimal"(arg0: boolean): void
public "toLocalizedPattern"(): StringJS
public "applyLocalizedPattern"(arg0: StringJS): void
get "maximumIntegerDigits"(): integer
get "minimumIntegerDigits"(): integer
get "maximumFractionDigits"(): integer
get "minimumFractionDigits"(): integer
get "parseBigDecimal"(): boolean
set "groupingUsed"(value: boolean)
set "minimumIntegerDigits"(value: integer)
set "maximumIntegerDigits"(value: integer)
set "maximumFractionDigits"(value: integer)
set "minimumFractionDigits"(value: integer)
set "decimalSeparatorAlwaysShown"(value: boolean)
get "currency"(): $Currency
set "currency"(value: $Currency$$Type)
set "roundingMode"(value: $RoundingMode$$Type)
get "roundingMode"(): $RoundingMode
get "decimalFormatSymbols"(): $DecimalFormatSymbols
set "decimalFormatSymbols"(value: $DecimalFormatSymbols$$Type)
get "positivePrefix"(): StringJS
set "positivePrefix"(value: StringJS)
get "negativePrefix"(): StringJS
set "negativePrefix"(value: StringJS)
get "positiveSuffix"(): StringJS
set "positiveSuffix"(value: StringJS)
get "negativeSuffix"(): StringJS
set "negativeSuffix"(value: StringJS)
get "multiplier"(): integer
set "multiplier"(value: integer)
get "groupingSize"(): integer
set "groupingSize"(value: integer)
get "decimalSeparatorAlwaysShown"(): boolean
set "parseBigDecimal"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DecimalFormat$$Type = ($DecimalFormat);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DecimalFormat$$Original = $DecimalFormat;}
declare module "java.text.Format" {
import {$AttributedCharacterIterator} from "java.text.AttributedCharacterIterator"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$FieldPosition$$Type} from "java.text.FieldPosition"
import {$ParsePosition$$Type} from "java.text.ParsePosition"
import {$StringBuffer, $StringBuffer$$Type} from "java.lang.StringBuffer"
import {$Cloneable$$Interface} from "java.lang.Cloneable"

export class $Format implements $Serializable$$Interface, $Cloneable$$Interface {
public "clone"(): any
public "format"(arg0: any, arg1: $StringBuffer$$Type, arg2: $FieldPosition$$Type): $StringBuffer
public "format"(arg0: any): StringJS
public "parseObject"(arg0: StringJS): any
public "parseObject"(arg0: StringJS, arg1: $ParsePosition$$Type): any
public "formatToCharacterIterator"(arg0: any): $AttributedCharacterIterator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Format$$Type = ($Format);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Format$$Original = $Format;}
declare module "java.text.AttributedCharacterIterator" {
import {$Map} from "java.util.Map"
import {$CharacterIterator$$Interface} from "java.text.CharacterIterator"
import {$Set, $Set$$Type} from "java.util.Set"
import {$AttributedCharacterIterator$Attribute, $AttributedCharacterIterator$Attribute$$Type} from "java.text.AttributedCharacterIterator$Attribute"

export interface $AttributedCharacterIterator$$Interface extends $CharacterIterator$$Interface {
get "attributes"(): $Map<($AttributedCharacterIterator$Attribute), (any)>
get "allAttributeKeys"(): $Set<($AttributedCharacterIterator$Attribute)>
get "runStart"(): integer
get "runLimit"(): integer
get "index"(): integer
get "beginIndex"(): integer
get "endIndex"(): integer
set "index"(value: integer)
}

export class $AttributedCharacterIterator implements $AttributedCharacterIterator$$Interface {
 "getAttributes"(): $Map<($AttributedCharacterIterator$Attribute), (any)>
 "getAttribute"(arg0: $AttributedCharacterIterator$Attribute$$Type): any
 "getAllAttributeKeys"(): $Set<($AttributedCharacterIterator$Attribute)>
 "getRunStart"(): integer
 "getRunStart"(arg0: $Set$$Type<($AttributedCharacterIterator$Attribute$$Type)>): integer
 "getRunStart"(arg0: $AttributedCharacterIterator$Attribute$$Type): integer
 "getRunLimit"(arg0: $AttributedCharacterIterator$Attribute$$Type): integer
 "getRunLimit"(): integer
 "getRunLimit"(arg0: $Set$$Type<($AttributedCharacterIterator$Attribute$$Type)>): integer
 "clone"(): any
 "next"(): character
 "last"(): character
 "first"(): character
 "current"(): character
 "previous"(): character
 "getIndex"(): integer
 "getBeginIndex"(): integer
 "getEndIndex"(): integer
 "setIndex"(arg0: integer): character
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttributedCharacterIterator$$Type = ($AttributedCharacterIterator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AttributedCharacterIterator$$Original = $AttributedCharacterIterator;}
declare module "java.text.DateFormatSymbols" {
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Cloneable$$Interface} from "java.lang.Cloneable"
import {$Locale, $Locale$$Type} from "java.util.Locale"

export class $DateFormatSymbols implements $Serializable$$Interface, $Cloneable$$Interface {
constructor(arg0: $Locale$$Type)
constructor()

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "clone"(): any
public static "getInstance"(): $DateFormatSymbols
public static "getInstance"(arg0: $Locale$$Type): $DateFormatSymbols
public static "getAvailableLocales"(): ($Locale)[]
public "getZoneStrings"(): ((StringJS)[])[]
public "getEras"(): (StringJS)[]
public "setEras"(arg0: (StringJS)[]): void
public "getMonths"(): (StringJS)[]
public "setMonths"(arg0: (StringJS)[]): void
public "getShortMonths"(): (StringJS)[]
public "setShortMonths"(arg0: (StringJS)[]): void
public "getWeekdays"(): (StringJS)[]
public "setWeekdays"(arg0: (StringJS)[]): void
public "getShortWeekdays"(): (StringJS)[]
public "setShortWeekdays"(arg0: (StringJS)[]): void
public "getAmPmStrings"(): (StringJS)[]
public "setAmPmStrings"(arg0: (StringJS)[]): void
public "setZoneStrings"(arg0: ((StringJS)[])[]): void
public "getLocalPatternChars"(): StringJS
public "setLocalPatternChars"(arg0: StringJS): void
get "instance"(): $DateFormatSymbols
get "availableLocales"(): ($Locale)[]
get "zoneStrings"(): ((StringJS)[])[]
get "eras"(): (StringJS)[]
set "eras"(value: (StringJS)[])
get "months"(): (StringJS)[]
set "months"(value: (StringJS)[])
get "shortMonths"(): (StringJS)[]
set "shortMonths"(value: (StringJS)[])
get "weekdays"(): (StringJS)[]
set "weekdays"(value: (StringJS)[])
get "shortWeekdays"(): (StringJS)[]
set "shortWeekdays"(value: (StringJS)[])
get "amPmStrings"(): (StringJS)[]
set "amPmStrings"(value: (StringJS)[])
set "zoneStrings"(value: ((StringJS)[])[])
get "localPatternChars"(): StringJS
set "localPatternChars"(value: StringJS)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DateFormatSymbols$$Type = ($DateFormatSymbols);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DateFormatSymbols$$Original = $DateFormatSymbols;}
declare module "java.text.DateFormat" {
import {$FieldPosition$$Type} from "java.text.FieldPosition"
import {$ParsePosition$$Type} from "java.text.ParsePosition"
import {$NumberFormat, $NumberFormat$$Type} from "java.text.NumberFormat"
import {$StringBuffer, $StringBuffer$$Type} from "java.lang.StringBuffer"
import {$TimeZone, $TimeZone$$Type} from "java.util.TimeZone"
import {$Date, $Date$$Type} from "java.util.Date"
import {$Locale, $Locale$$Type} from "java.util.Locale"
import {$Format} from "java.text.Format"
import {$Calendar, $Calendar$$Type} from "java.util.Calendar"

export class $DateFormat extends $Format {
static readonly "DAY_OF_YEAR_FIELD": integer
static readonly "DATE_FIELD": integer
static readonly "MILLISECOND_FIELD": integer
static readonly "MEDIUM": integer
static readonly "YEAR_FIELD": integer
static readonly "DAY_OF_WEEK_IN_MONTH_FIELD": integer
static readonly "MINUTE_FIELD": integer
static readonly "FULL": integer
static readonly "ERA_FIELD": integer
static readonly "AM_PM_FIELD": integer
static readonly "SHORT": integer
static readonly "HOUR_OF_DAY1_FIELD": integer
static readonly "MONTH_FIELD": integer
static readonly "DAY_OF_WEEK_FIELD": integer
static readonly "WEEK_OF_YEAR_FIELD": integer
static readonly "HOUR1_FIELD": integer
static readonly "HOUR_OF_DAY0_FIELD": integer
static readonly "WEEK_OF_MONTH_FIELD": integer
static readonly "TIMEZONE_FIELD": integer
static readonly "HOUR0_FIELD": integer
static readonly "DEFAULT": integer
static readonly "SECOND_FIELD": integer
static readonly "LONG": integer

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "clone"(): any
public "format"(arg0: any, arg1: $StringBuffer$$Type, arg2: $FieldPosition$$Type): $StringBuffer
public "format"(arg0: $Date$$Type): StringJS
public "format"(arg0: $Date$$Type, arg1: $StringBuffer$$Type, arg2: $FieldPosition$$Type): $StringBuffer
public static "getInstance"(): $DateFormat
public "parse"(arg0: StringJS): $Date
public "parse"(arg0: StringJS, arg1: $ParsePosition$$Type): $Date
public static "getDateTimeInstance"(arg0: integer, arg1: integer): $DateFormat
public static "getDateTimeInstance"(arg0: integer, arg1: integer, arg2: $Locale$$Type): $DateFormat
public static "getDateTimeInstance"(): $DateFormat
public static "getAvailableLocales"(): ($Locale)[]
public "setTimeZone"(arg0: $TimeZone$$Type): void
public "getTimeZone"(): $TimeZone
public "setLenient"(arg0: boolean): void
public "isLenient"(): boolean
public static "getDateInstance"(arg0: integer): $DateFormat
public static "getDateInstance"(arg0: integer, arg1: $Locale$$Type): $DateFormat
public static "getDateInstance"(): $DateFormat
public static "getTimeInstance"(arg0: integer, arg1: $Locale$$Type): $DateFormat
public static "getTimeInstance"(arg0: integer): $DateFormat
public static "getTimeInstance"(): $DateFormat
public "parseObject"(arg0: StringJS, arg1: $ParsePosition$$Type): any
public "setCalendar"(arg0: $Calendar$$Type): void
public "getCalendar"(): $Calendar
public "setNumberFormat"(arg0: $NumberFormat$$Type): void
public "getNumberFormat"(): $NumberFormat
get "instance"(): $DateFormat
get "dateTimeInstance"(): $DateFormat
get "availableLocales"(): ($Locale)[]
set "timeZone"(value: $TimeZone$$Type)
get "timeZone"(): $TimeZone
set "lenient"(value: boolean)
get "lenient"(): boolean
get "dateInstance"(): $DateFormat
get "timeInstance"(): $DateFormat
set "calendar"(value: $Calendar$$Type)
get "calendar"(): $Calendar
set "numberFormat"(value: $NumberFormat$$Type)
get "numberFormat"(): $NumberFormat
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DateFormat$$Type = ($DateFormat);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DateFormat$$Original = $DateFormat;}
declare module "java.text.SimpleDateFormat" {
import {$AttributedCharacterIterator} from "java.text.AttributedCharacterIterator"
import {$DateFormatSymbols, $DateFormatSymbols$$Type} from "java.text.DateFormatSymbols"
import {$FieldPosition$$Type} from "java.text.FieldPosition"
import {$ParsePosition$$Type} from "java.text.ParsePosition"
import {$StringBuffer, $StringBuffer$$Type} from "java.lang.StringBuffer"
import {$Date, $Date$$Type} from "java.util.Date"
import {$Locale$$Type} from "java.util.Locale"
import {$DateFormat} from "java.text.DateFormat"

export class $SimpleDateFormat extends $DateFormat {
static readonly "DAY_OF_YEAR_FIELD": integer
static readonly "DATE_FIELD": integer
static readonly "MILLISECOND_FIELD": integer
static readonly "MEDIUM": integer
static readonly "YEAR_FIELD": integer
static readonly "DAY_OF_WEEK_IN_MONTH_FIELD": integer
static readonly "MINUTE_FIELD": integer
static readonly "FULL": integer
static readonly "ERA_FIELD": integer
static readonly "AM_PM_FIELD": integer
static readonly "SHORT": integer
static readonly "HOUR_OF_DAY1_FIELD": integer
static readonly "MONTH_FIELD": integer
static readonly "DAY_OF_WEEK_FIELD": integer
static readonly "WEEK_OF_YEAR_FIELD": integer
static readonly "HOUR1_FIELD": integer
static readonly "HOUR_OF_DAY0_FIELD": integer
static readonly "WEEK_OF_MONTH_FIELD": integer
static readonly "TIMEZONE_FIELD": integer
static readonly "HOUR0_FIELD": integer
static readonly "DEFAULT": integer
static readonly "SECOND_FIELD": integer
static readonly "LONG": integer

constructor(arg0: StringJS, arg1: $DateFormatSymbols$$Type)
constructor(arg0: StringJS, arg1: $Locale$$Type)
constructor(arg0: StringJS)
constructor()

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "clone"(): any
public "format"(arg0: $Date$$Type, arg1: $StringBuffer$$Type, arg2: $FieldPosition$$Type): $StringBuffer
public "parse"(arg0: StringJS, arg1: $ParsePosition$$Type): $Date
public "formatToCharacterIterator"(arg0: any): $AttributedCharacterIterator
public "applyPattern"(arg0: StringJS): void
public "toPattern"(): StringJS
public "toLocalizedPattern"(): StringJS
public "applyLocalizedPattern"(arg0: StringJS): void
public "set2DigitYearStart"(arg0: $Date$$Type): void
public "get2DigitYearStart"(): $Date
public "getDateFormatSymbols"(): $DateFormatSymbols
public "setDateFormatSymbols"(arg0: $DateFormatSymbols$$Type): void
set "2DigitYearStart"(value: $Date$$Type)
get "2DigitYearStart"(): $Date
get "dateFormatSymbols"(): $DateFormatSymbols
set "dateFormatSymbols"(value: $DateFormatSymbols$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleDateFormat$$Type = ($SimpleDateFormat);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleDateFormat$$Original = $SimpleDateFormat;}
declare module "java.text.Format$Field" {
import {$AttributedCharacterIterator$Attribute} from "java.text.AttributedCharacterIterator$Attribute"

export class $Format$Field extends $AttributedCharacterIterator$Attribute {
static readonly "LANGUAGE": $AttributedCharacterIterator$Attribute
static readonly "INPUT_METHOD_SEGMENT": $AttributedCharacterIterator$Attribute
static readonly "READING": $AttributedCharacterIterator$Attribute

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Format$Field$$Type = ($Format$Field);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Format$Field$$Original = $Format$Field;}
declare module "java.text.NumberFormat$Style" {
import {$Enum} from "java.lang.Enum"

export class $NumberFormat$Style extends $Enum<($NumberFormat$Style)> {
static readonly "SHORT": $NumberFormat$Style
static readonly "LONG": $NumberFormat$Style

public static "values"(): ($NumberFormat$Style)[]
public static "valueOf"(arg0: StringJS): $NumberFormat$Style
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NumberFormat$Style$$Type = (("short") | ("long"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NumberFormat$Style$$Original = $NumberFormat$Style;}
declare module "java.text.FieldPosition" {
import {$Format$Field, $Format$Field$$Type} from "java.text.Format$Field"

export class $FieldPosition {
constructor(arg0: $Format$Field$$Type, arg1: integer)
constructor(arg0: $Format$Field$$Type)
constructor(arg0: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getField"(): integer
public "setBeginIndex"(arg0: integer): void
public "setEndIndex"(arg0: integer): void
public "getFieldAttribute"(): $Format$Field
public "getBeginIndex"(): integer
public "getEndIndex"(): integer
get "field"(): integer
set "beginIndex"(value: integer)
set "endIndex"(value: integer)
get "fieldAttribute"(): $Format$Field
get "beginIndex"(): integer
get "endIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FieldPosition$$Type = ($FieldPosition);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FieldPosition$$Original = $FieldPosition;}
declare module "java.text.AttributedCharacterIterator$Attribute" {
import {$Serializable$$Interface} from "java.io.Serializable"

export class $AttributedCharacterIterator$Attribute implements $Serializable$$Interface {
static readonly "LANGUAGE": $AttributedCharacterIterator$Attribute
static readonly "INPUT_METHOD_SEGMENT": $AttributedCharacterIterator$Attribute
static readonly "READING": $AttributedCharacterIterator$Attribute

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttributedCharacterIterator$Attribute$$Type = ($AttributedCharacterIterator$Attribute);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AttributedCharacterIterator$Attribute$$Original = $AttributedCharacterIterator$Attribute;}
