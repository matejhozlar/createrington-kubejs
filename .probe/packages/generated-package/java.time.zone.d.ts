declare module "java.time.zone.ZoneOffsetTransitionRule" {
import {$Month, $Month$$Type} from "java.time.Month"
import {$DayOfWeek, $DayOfWeek$$Type} from "java.time.DayOfWeek"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$ZoneOffset, $ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$ZoneOffsetTransition} from "java.time.zone.ZoneOffsetTransition"
import {$ZoneOffsetTransitionRule$TimeDefinition, $ZoneOffsetTransitionRule$TimeDefinition$$Type} from "java.time.zone.ZoneOffsetTransitionRule$TimeDefinition"
import {$LocalTime, $LocalTime$$Type} from "java.time.LocalTime"

export class $ZoneOffsetTransitionRule implements $Serializable$$Interface {
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"(arg0: $Month$$Type, arg1: integer, arg2: $DayOfWeek$$Type, arg3: $LocalTime$$Type, arg4: boolean, arg5: $ZoneOffsetTransitionRule$TimeDefinition$$Type, arg6: $ZoneOffset$$Type, arg7: $ZoneOffset$$Type, arg8: $ZoneOffset$$Type): $ZoneOffsetTransitionRule
public "getMonth"(): $Month
public "getDayOfWeek"(): $DayOfWeek
public "getDayOfMonthIndicator"(): integer
public "getLocalTime"(): $LocalTime
public "isMidnightEndOfDay"(): boolean
public "getTimeDefinition"(): $ZoneOffsetTransitionRule$TimeDefinition
public "getStandardOffset"(): $ZoneOffset
public "getOffsetBefore"(): $ZoneOffset
public "getOffsetAfter"(): $ZoneOffset
public "createTransition"(arg0: integer): $ZoneOffsetTransition
get "month"(): $Month
get "dayOfWeek"(): $DayOfWeek
get "dayOfMonthIndicator"(): integer
get "localTime"(): $LocalTime
get "midnightEndOfDay"(): boolean
get "timeDefinition"(): $ZoneOffsetTransitionRule$TimeDefinition
get "standardOffset"(): $ZoneOffset
get "offsetBefore"(): $ZoneOffset
get "offsetAfter"(): $ZoneOffset
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZoneOffsetTransitionRule$$Type = ($ZoneOffsetTransitionRule);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ZoneOffsetTransitionRule$$Original = $ZoneOffsetTransitionRule;}
declare module "java.time.zone.ZoneOffsetTransition" {
import {$LocalDateTime, $LocalDateTime$$Type} from "java.time.LocalDateTime"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$ZoneOffset, $ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$Duration} from "java.time.Duration"
import {$Instant} from "java.time.Instant"

export class $ZoneOffsetTransition implements $Comparable$$Interface<($ZoneOffsetTransition)>, $Serializable$$Interface {
public "getInstant"(): $Instant
public "isOverlap"(): boolean
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: $ZoneOffsetTransition$$Type): integer
public "compareTo"(arg0: any): integer
public static "of"(arg0: $LocalDateTime$$Type, arg1: $ZoneOffset$$Type, arg2: $ZoneOffset$$Type): $ZoneOffsetTransition
public "getDuration"(): $Duration
public "isGap"(): boolean
public "getDateTimeAfter"(): $LocalDateTime
public "toEpochSecond"(): long
public "getOffsetBefore"(): $ZoneOffset
public "getOffsetAfter"(): $ZoneOffset
public "getDateTimeBefore"(): $LocalDateTime
public "isValidOffset"(arg0: $ZoneOffset$$Type): boolean
get "instant"(): $Instant
get "overlap"(): boolean
get "duration"(): $Duration
get "gap"(): boolean
get "dateTimeAfter"(): $LocalDateTime
get "offsetBefore"(): $ZoneOffset
get "offsetAfter"(): $ZoneOffset
get "dateTimeBefore"(): $LocalDateTime
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZoneOffsetTransition$$Type = ($ZoneOffsetTransition);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ZoneOffsetTransition$$Original = $ZoneOffsetTransition;}
declare module "java.time.zone.ZoneRules" {
import {$LocalDateTime$$Type} from "java.time.LocalDateTime"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$ZoneOffset, $ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$List, $List$$Type} from "java.util.List"
import {$ZoneOffsetTransition, $ZoneOffsetTransition$$Type} from "java.time.zone.ZoneOffsetTransition"
import {$Duration} from "java.time.Duration"
import {$ZoneOffsetTransitionRule, $ZoneOffsetTransitionRule$$Type} from "java.time.zone.ZoneOffsetTransitionRule"
import {$Instant$$Type} from "java.time.Instant"

export class $ZoneRules implements $Serializable$$Interface {
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"(arg0: $ZoneOffset$$Type, arg1: $ZoneOffset$$Type, arg2: $List$$Type<($ZoneOffsetTransition$$Type)>, arg3: $List$$Type<($ZoneOffsetTransition$$Type)>, arg4: $List$$Type<($ZoneOffsetTransitionRule$$Type)>): $ZoneRules
public static "of"(arg0: $ZoneOffset$$Type): $ZoneRules
public "getOffset"(arg0: $LocalDateTime$$Type): $ZoneOffset
public "getOffset"(arg0: $Instant$$Type): $ZoneOffset
public "getTransition"(arg0: $LocalDateTime$$Type): $ZoneOffsetTransition
public "isFixedOffset"(): boolean
public "getStandardOffset"(arg0: $Instant$$Type): $ZoneOffset
public "getValidOffsets"(arg0: $LocalDateTime$$Type): $List<($ZoneOffset)>
public "getDaylightSavings"(arg0: $Instant$$Type): $Duration
public "isDaylightSavings"(arg0: $Instant$$Type): boolean
public "isValidOffset"(arg0: $LocalDateTime$$Type, arg1: $ZoneOffset$$Type): boolean
public "nextTransition"(arg0: $Instant$$Type): $ZoneOffsetTransition
public "previousTransition"(arg0: $Instant$$Type): $ZoneOffsetTransition
public "getTransitions"(): $List<($ZoneOffsetTransition)>
public "getTransitionRules"(): $List<($ZoneOffsetTransitionRule)>
get "fixedOffset"(): boolean
get "transitions"(): $List<($ZoneOffsetTransition)>
get "transitionRules"(): $List<($ZoneOffsetTransitionRule)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZoneRules$$Type = ($ZoneRules);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ZoneRules$$Original = $ZoneRules;}
