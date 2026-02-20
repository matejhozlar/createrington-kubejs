declare module "org.slf4j.Logger" {
import {$LoggingEventBuilder} from "org.slf4j.spi.LoggingEventBuilder"
import {$Level$$Type} from "org.slf4j.event.Level"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$Marker$$Type} from "org.slf4j.Marker"

export interface $Logger$$Interface {
get "name"(): StringJS
get "warnEnabled"(): boolean
get "debugEnabled"(): boolean
get "infoEnabled"(): boolean
get "errorEnabled"(): boolean
get "traceEnabled"(): boolean
}

export class $Logger implements $Logger$$Interface {
static readonly "ROOT_LOGGER_NAME": StringJS

 "getName"(): StringJS
 "info"(arg0: StringJS, arg1: any, arg2: any): void
 "info"(arg0: StringJS, ...arg1: (any)[]): void
 "info"(arg0: StringJS, arg1: $Throwable$$Type): void
 "info"(arg0: StringJS, arg1: any): void
 "info"(arg0: StringJS): void
 "info"(arg0: $Marker$$Type, arg1: StringJS, arg2: $Throwable$$Type): void
 "info"(arg0: $Marker$$Type, arg1: StringJS, ...arg2: (any)[]): void
 "info"(arg0: $Marker$$Type, arg1: StringJS, arg2: any, arg3: any): void
 "info"(arg0: $Marker$$Type, arg1: StringJS, arg2: any): void
 "info"(arg0: $Marker$$Type, arg1: StringJS): void
 "trace"(arg0: $Marker$$Type, arg1: StringJS, arg2: $Throwable$$Type): void
 "trace"(arg0: StringJS, arg1: any): void
 "trace"(arg0: StringJS): void
 "trace"(arg0: StringJS, ...arg1: (any)[]): void
 "trace"(arg0: StringJS, arg1: any, arg2: any): void
 "trace"(arg0: $Marker$$Type, arg1: StringJS, arg2: any, arg3: any): void
 "trace"(arg0: $Marker$$Type, arg1: StringJS, arg2: any): void
 "trace"(arg0: $Marker$$Type, arg1: StringJS): void
 "trace"(arg0: $Marker$$Type, arg1: StringJS, ...arg2: (any)[]): void
 "trace"(arg0: StringJS, arg1: $Throwable$$Type): void
 "debug"(arg0: $Marker$$Type, arg1: StringJS, arg2: any): void
 "debug"(arg0: $Marker$$Type, arg1: StringJS, arg2: any, arg3: any): void
 "debug"(arg0: $Marker$$Type, arg1: StringJS, ...arg2: (any)[]): void
 "debug"(arg0: $Marker$$Type, arg1: StringJS, arg2: $Throwable$$Type): void
 "debug"(arg0: StringJS, arg1: any): void
 "debug"(arg0: StringJS): void
 "debug"(arg0: StringJS, arg1: any, arg2: any): void
 "debug"(arg0: $Marker$$Type, arg1: StringJS): void
 "debug"(arg0: StringJS, arg1: $Throwable$$Type): void
 "debug"(arg0: StringJS, ...arg1: (any)[]): void
 "error"(arg0: StringJS, arg1: any): void
 "error"(arg0: StringJS): void
 "error"(arg0: StringJS, arg1: $Throwable$$Type): void
 "error"(arg0: StringJS, ...arg1: (any)[]): void
 "error"(arg0: StringJS, arg1: any, arg2: any): void
 "error"(arg0: $Marker$$Type, arg1: StringJS, ...arg2: (any)[]): void
 "error"(arg0: $Marker$$Type, arg1: StringJS, arg2: $Throwable$$Type): void
 "error"(arg0: $Marker$$Type, arg1: StringJS, arg2: any): void
 "error"(arg0: $Marker$$Type, arg1: StringJS): void
 "error"(arg0: $Marker$$Type, arg1: StringJS, arg2: any, arg3: any): void
 "warn"(arg0: StringJS, arg1: any, arg2: any): void
 "warn"(arg0: $Marker$$Type, arg1: StringJS, arg2: $Throwable$$Type): void
 "warn"(arg0: StringJS, arg1: $Throwable$$Type): void
 "warn"(arg0: $Marker$$Type, arg1: StringJS): void
 "warn"(arg0: $Marker$$Type, arg1: StringJS, arg2: any): void
 "warn"(arg0: $Marker$$Type, arg1: StringJS, arg2: any, arg3: any): void
 "warn"(arg0: $Marker$$Type, arg1: StringJS, ...arg2: (any)[]): void
 "warn"(arg0: StringJS): void
 "warn"(arg0: StringJS, arg1: any): void
 "warn"(arg0: StringJS, ...arg1: (any)[]): void
 "isEnabledForLevel"(arg0: $Level$$Type): boolean
 "makeLoggingEventBuilder"(arg0: $Level$$Type): $LoggingEventBuilder
 "atError"(): $LoggingEventBuilder
 "atLevel"(arg0: $Level$$Type): $LoggingEventBuilder
 "atTrace"(): $LoggingEventBuilder
 "atDebug"(): $LoggingEventBuilder
 "atInfo"(): $LoggingEventBuilder
 "atWarn"(): $LoggingEventBuilder
 "isWarnEnabled"(arg0: $Marker$$Type): boolean
 "isWarnEnabled"(): boolean
 "isDebugEnabled"(arg0: $Marker$$Type): boolean
 "isDebugEnabled"(): boolean
 "isInfoEnabled"(arg0: $Marker$$Type): boolean
 "isInfoEnabled"(): boolean
 "isErrorEnabled"(arg0: $Marker$$Type): boolean
 "isErrorEnabled"(): boolean
 "isTraceEnabled"(): boolean
 "isTraceEnabled"(arg0: $Marker$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Logger$$Type = ($Logger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Logger$$Original = $Logger;}
declare module "org.slf4j.Marker" {
import {$Iterator} from "java.util.Iterator"
import {$Serializable$$Interface} from "java.io.Serializable"

export interface $Marker$$Interface extends $Serializable$$Interface {
get "name"(): StringJS
}

export class $Marker implements $Marker$$Interface {
static readonly "ANY_MARKER": StringJS
static readonly "ANY_NON_NULL_MARKER": StringJS

 "getName"(): StringJS
 "remove"(arg0: $Marker$$Type): boolean
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "add"(arg0: $Marker$$Type): void
 "iterator"(): $Iterator<($Marker)>
 "contains"(arg0: StringJS): boolean
 "contains"(arg0: $Marker$$Type): boolean
 "hasReferences"(): boolean
/**
 * 
 * @deprecated
 */
 "hasChildren"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Marker$$Type = ($Marker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Marker$$Original = $Marker;}
