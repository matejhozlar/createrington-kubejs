declare module "org.apache.logging.log4j.Marker" {
import {$Serializable$$Interface} from "java.io.Serializable"

export interface $Marker$$Interface extends $Serializable$$Interface {
get "name"(): StringJS
get "parents"(): ($Marker)[]
set "parents"(value: ($Marker$$Type)[])
}

export class $Marker implements $Marker$$Interface {
 "getName"(): StringJS
 "remove"(marker: $Marker$$Type): boolean
 "equals"(obj: any): boolean
 "hashCode"(): integer
 "getParents"(): ($Marker)[]
 "addParents"(...markers: ($Marker$$Type)[]): $Marker
 "setParents"(...markers: ($Marker$$Type)[]): $Marker
 "hasParents"(): boolean
 "isInstanceOf"(name: StringJS): boolean
 "isInstanceOf"(m: $Marker$$Type): boolean
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
declare module "org.apache.logging.log4j.Level" {
import {$StandardLevel} from "org.apache.logging.log4j.spi.StandardLevel"
import {$Enum} from "java.lang.Enum"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Class, $Class$$Type} from "java.lang.Class"

export class $Level implements $Comparable$$Interface<($Level)>, $Serializable$$Interface {
static readonly "TRACE": $Level
static readonly "ALL": $Level
static readonly "CATEGORY": StringJS
static readonly "ERROR": $Level
static readonly "INFO": $Level
static readonly "FATAL": $Level
static readonly "DEBUG": $Level
static readonly "OFF": $Level
static readonly "WARN": $Level

public "name"(): StringJS
public static "forName"(name: StringJS, intValue: integer): $Level
public "equals"(other: any): boolean
public "toString"(): StringJS
public static "values"(): ($Level)[]
public "hashCode"(): integer
public "clone"(): any
public "compareTo"(other: any): integer
public "compareTo"(other: $Level$$Type): integer
public static "valueOf"<T extends $Enum<(object)>>(enumType: $Class$$Type<(T)>, name: StringJS): T
public static "valueOf"(name: StringJS): $Level
public "getDeclaringClass"(): $Class<($Level)>
public static "getLevel"(name: StringJS): $Level
public "isInRange"(minLevel: $Level$$Type, maxLevel: $Level$$Type): boolean
public "intLevel"(): integer
public static "toLevel"(name: StringJS, defaultLevel: $Level$$Type): $Level
public static "toLevel"(level: StringJS): $Level
public "isMoreSpecificThan"(level: $Level$$Type): boolean
public "getStandardLevel"(): $StandardLevel
public "isLessSpecificThan"(level: $Level$$Type): boolean
get "declaringClass"(): $Class<($Level)>
get "standardLevel"(): $StandardLevel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Level$$Type = ($Level);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Level$$Original = $Level;}
declare module "org.apache.logging.log4j.util.Supplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * 
 * @deprecated
 */
export interface $Supplier$$Interface<T> {

(): T
}

export class $Supplier<T> implements $Supplier$$Interface {
 "get"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Supplier$$Type<T> = (() => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Supplier$$Original<T> = $Supplier<(T)>;}
declare module "org.apache.logging.log4j.util.MessageSupplier" {
import {$Message, $Message$$Type} from "org.apache.logging.log4j.message.Message"

export interface $MessageSupplier$$Interface {

(): $Message$$Type
}

export class $MessageSupplier implements $MessageSupplier$$Interface {
 "get"(): $Message
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MessageSupplier$$Type = (() => $Message$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MessageSupplier$$Original = $MessageSupplier;}
declare module "org.apache.logging.log4j.message.EntryMessage" {
import {$FlowMessage$$Interface} from "org.apache.logging.log4j.message.FlowMessage"
import {$Throwable} from "java.lang.Throwable"
import {$Message} from "org.apache.logging.log4j.message.Message"

export interface $EntryMessage$$Interface extends $FlowMessage$$Interface {
get "message"(): $Message
get "text"(): StringJS
get "parameters"(): (any)[]
get "format"(): StringJS
get "formattedMessage"(): StringJS
get "throwable"(): $Throwable
}

export class $EntryMessage implements $EntryMessage$$Interface {
 "getMessage"(): $Message
 "getText"(): StringJS
 "getParameters"(): (any)[]
 "getFormat"(): StringJS
 "getFormattedMessage"(): StringJS
 "getThrowable"(): $Throwable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntryMessage$$Type = ($EntryMessage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntryMessage$$Original = $EntryMessage;}
declare module "org.apache.logging.log4j.message.Message" {
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Throwable} from "java.lang.Throwable"

export interface $Message$$Interface extends $Serializable$$Interface {
get "parameters"(): (any)[]
get "format"(): StringJS
get "formattedMessage"(): StringJS
get "throwable"(): $Throwable
}

export class $Message implements $Message$$Interface {
 "getParameters"(): (any)[]
 "getFormat"(): StringJS
 "getFormattedMessage"(): StringJS
 "getThrowable"(): $Throwable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Message$$Type = ($Message);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Message$$Original = $Message;}
declare module "org.apache.logging.log4j.Logger" {
import {$Supplier$$Type} from "org.apache.logging.log4j.util.Supplier"
import {$MessageFactory} from "org.apache.logging.log4j.message.MessageFactory"
import {$StackTraceElement$$Type} from "java.lang.StackTraceElement"
import {$EntryMessage, $EntryMessage$$Type} from "org.apache.logging.log4j.message.EntryMessage"
import {$Level, $Level$$Type} from "org.apache.logging.log4j.Level"
import {$LogBuilder} from "org.apache.logging.log4j.LogBuilder"
import {$MessageSupplier$$Type} from "org.apache.logging.log4j.util.MessageSupplier"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$Message$$Type} from "org.apache.logging.log4j.message.Message"
import {$FlowMessageFactory} from "org.apache.logging.log4j.message.FlowMessageFactory"
import {$Marker$$Type} from "org.apache.logging.log4j.Marker"

export interface $Logger$$Interface {
get "name"(): StringJS
get "level"(): $Level
get "flowMessageFactory"(): $FlowMessageFactory
get "messageFactory"(): MF
get "warnEnabled"(): boolean
get "debugEnabled"(): boolean
get "fatalEnabled"(): boolean
get "infoEnabled"(): boolean
get "errorEnabled"(): boolean
get "traceEnabled"(): boolean
}

export class $Logger implements $Logger$$Interface {
 "getName"(): StringJS
/**
 * 
 * @deprecated
 */
 "exit"<R>(result: R): R
/**
 * 
 * @deprecated
 */
 "exit"(): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: StringJS, p0: any, p1: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "log"(level: $Level$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "log"(level: $Level$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "log"(level: $Level$$Type, message: StringJS, ...params: (any)[]): void
 "log"(level: $Level$$Type, message: StringJS, ...paramSuppliers: ($Supplier$$Type<(never)>)[]): void
 "log"(level: $Level$$Type, message: StringJS, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, messageSupplier: $Supplier$$Type<(never)>): void
 "log"(level: $Level$$Type, messageSupplier: $Supplier$$Type<(never)>, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: StringJS, p0: any): void
 "log"(level: $Level$$Type, message: StringJS, p0: any, p1: any): void
 "log"(level: $Level$$Type, message: StringJS, p0: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "log"(level: $Level$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "log"(level: $Level$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "log"(level: $Level$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "log"(level: $Level$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "log"(level: $Level$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any): void
 "log"(level: $Level$$Type, message: StringJS, p0: any, p1: any, p2: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: charseq, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: any, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: StringJS): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: StringJS, ...params: (any)[]): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: StringJS, ...paramSuppliers: ($Supplier$$Type<(never)>)[]): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: StringJS, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: $Message$$Type): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: charseq): void
 "log"(level: $Level$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, message: charseq): void
 "log"(level: $Level$$Type, message: charseq, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, message: any): void
 "log"(level: $Level$$Type, message: any, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, message: StringJS): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(never)>): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(never)>, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, message: $Message$$Type): void
 "log"(level: $Level$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, messageSupplier: $MessageSupplier$$Type): void
 "isEnabled"(level: $Level$$Type, marker: $Marker$$Type): boolean
 "isEnabled"(level: $Level$$Type): boolean
 "info"(marker: $Marker$$Type, message: any): void
 "info"(marker: $Marker$$Type, message: any, throwable: $Throwable$$Type): void
 "info"(marker: $Marker$$Type, message: StringJS): void
 "info"(marker: $Marker$$Type, message: charseq, throwable: $Throwable$$Type): void
 "info"(marker: $Marker$$Type, message: charseq): void
 "info"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "info"(message: StringJS, p0: any, p1: any): void
 "info"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(never)>, throwable: $Throwable$$Type): void
 "info"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(never)>): void
 "info"(marker: $Marker$$Type, message: StringJS, throwable: $Throwable$$Type): void
 "info"(marker: $Marker$$Type, message: StringJS, ...paramSuppliers: ($Supplier$$Type<(never)>)[]): void
 "info"(marker: $Marker$$Type, message: StringJS, ...params: (any)[]): void
 "info"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "info"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "info"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type): void
 "info"(marker: $Marker$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
 "info"(marker: $Marker$$Type, message: $Message$$Type): void
 "info"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "info"(message: StringJS, p0: any, p1: any, p2: any): void
 "info"(message: StringJS, p0: any, p1: any, p2: any, p3: any): void
 "info"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "info"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "info"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "info"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "info"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any): void
 "info"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any): void
 "info"(marker: $Marker$$Type, message: StringJS, p0: any): void
 "info"(messageSupplier: $Supplier$$Type<(never)>, throwable: $Throwable$$Type): void
 "info"(messageSupplier: $Supplier$$Type<(never)>): void
 "info"(message: StringJS, throwable: $Throwable$$Type): void
 "info"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "info"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "info"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "info"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "info"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "info"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any): void
 "info"(message: charseq, throwable: $Throwable$$Type): void
 "info"(message: charseq): void
 "info"(messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "info"(messageSupplier: $MessageSupplier$$Type): void
 "info"(message: $Message$$Type, throwable: $Throwable$$Type): void
 "info"(message: $Message$$Type): void
 "info"(message: StringJS, ...paramSuppliers: ($Supplier$$Type<(never)>)[]): void
 "info"(message: StringJS, ...params: (any)[]): void
 "info"(message: StringJS): void
 "info"(message: any, throwable: $Throwable$$Type): void
 "info"(message: any): void
 "info"(message: StringJS, p0: any): void
 "printf"(level: $Level$$Type, format: StringJS, ...params: (any)[]): void
 "printf"(level: $Level$$Type, marker: $Marker$$Type, format: StringJS, ...params: (any)[]): void
/**
 * 
 * @deprecated
 */
 "entry"(): void
/**
 * 
 * @deprecated
 */
 "entry"(...params: (any)[]): void
 "trace"(message: StringJS): void
 "trace"(message: $Message$$Type): void
 "trace"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(never)>, throwable: $Throwable$$Type): void
 "trace"(message: StringJS, ...params: (any)[]): void
 "trace"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(never)>): void
 "trace"(message: charseq, throwable: $Throwable$$Type): void
 "trace"(messageSupplier: $MessageSupplier$$Type): void
 "trace"(messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "trace"(message: charseq): void
 "trace"(message: $Message$$Type, throwable: $Throwable$$Type): void
 "trace"(message: any): void
 "trace"(message: any, throwable: $Throwable$$Type): void
 "trace"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any): void
 "trace"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any): void
 "trace"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any): void
 "trace"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "trace"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "trace"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "trace"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "trace"(message: StringJS, ...paramSuppliers: ($Supplier$$Type<(never)>)[]): void
 "trace"(message: StringJS, throwable: $Throwable$$Type): void
 "trace"(messageSupplier: $Supplier$$Type<(never)>): void
 "trace"(messageSupplier: $Supplier$$Type<(never)>, throwable: $Throwable$$Type): void
 "trace"(marker: $Marker$$Type, message: StringJS, p0: any): void
 "trace"(message: StringJS, p0: any, p1: any, p2: any, p3: any): void
 "trace"(message: StringJS, p0: any, p1: any, p2: any): void
 "trace"(message: StringJS, p0: any, p1: any): void
 "trace"(message: StringJS, p0: any): void
 "trace"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "trace"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "trace"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "trace"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "trace"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "trace"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "trace"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "trace"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "trace"(marker: $Marker$$Type, message: any): void
 "trace"(marker: $Marker$$Type, message: any, throwable: $Throwable$$Type): void
 "trace"(marker: $Marker$$Type, message: StringJS): void
 "trace"(marker: $Marker$$Type, message: StringJS, ...params: (any)[]): void
 "trace"(marker: $Marker$$Type, message: StringJS, ...paramSuppliers: ($Supplier$$Type<(never)>)[]): void
 "trace"(marker: $Marker$$Type, message: StringJS, throwable: $Throwable$$Type): void
 "trace"(marker: $Marker$$Type, message: $Message$$Type): void
 "trace"(marker: $Marker$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
 "trace"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type): void
 "trace"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "trace"(marker: $Marker$$Type, message: charseq): void
 "trace"(marker: $Marker$$Type, message: charseq, throwable: $Throwable$$Type): void
 "debug"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any): void
 "debug"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any): void
 "debug"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any): void
 "debug"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "debug"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "debug"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "debug"(message: StringJS, ...params: (any)[]): void
 "debug"(message: StringJS, ...paramSuppliers: ($Supplier$$Type<(never)>)[]): void
 "debug"(message: StringJS, throwable: $Throwable$$Type): void
 "debug"(messageSupplier: $Supplier$$Type<(never)>): void
 "debug"(messageSupplier: $Supplier$$Type<(never)>, throwable: $Throwable$$Type): void
 "debug"(marker: $Marker$$Type, message: StringJS, p0: any): void
 "debug"(message: StringJS, p0: any, p1: any, p2: any, p3: any): void
 "debug"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "debug"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "debug"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "debug"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "debug"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "debug"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "debug"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "debug"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "debug"(message: StringJS, p0: any): void
 "debug"(message: StringJS, p0: any, p1: any): void
 "debug"(message: StringJS, p0: any, p1: any, p2: any): void
 "debug"(marker: $Marker$$Type, message: charseq, throwable: $Throwable$$Type): void
 "debug"(marker: $Marker$$Type, message: any): void
 "debug"(marker: $Marker$$Type, message: any, throwable: $Throwable$$Type): void
 "debug"(marker: $Marker$$Type, message: StringJS): void
 "debug"(marker: $Marker$$Type, message: StringJS, ...params: (any)[]): void
 "debug"(marker: $Marker$$Type, message: StringJS, ...paramSuppliers: ($Supplier$$Type<(never)>)[]): void
 "debug"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "debug"(marker: $Marker$$Type, message: $Message$$Type): void
 "debug"(marker: $Marker$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
 "debug"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type): void
 "debug"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "debug"(marker: $Marker$$Type, message: charseq): void
 "debug"(messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "debug"(message: charseq): void
 "debug"(message: charseq, throwable: $Throwable$$Type): void
 "debug"(message: any): void
 "debug"(message: any, throwable: $Throwable$$Type): void
 "debug"(message: StringJS): void
 "debug"(marker: $Marker$$Type, message: StringJS, throwable: $Throwable$$Type): void
 "debug"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(never)>): void
 "debug"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(never)>, throwable: $Throwable$$Type): void
 "debug"(messageSupplier: $MessageSupplier$$Type): void
 "debug"(message: $Message$$Type, throwable: $Throwable$$Type): void
 "debug"(message: $Message$$Type): void
 "error"(message: charseq): void
 "error"(message: charseq, throwable: $Throwable$$Type): void
 "error"(message: any): void
 "error"(messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "error"(messageSupplier: $MessageSupplier$$Type): void
 "error"(message: $Message$$Type, throwable: $Throwable$$Type): void
 "error"(messageSupplier: $Supplier$$Type<(never)>): void
 "error"(message: StringJS, throwable: $Throwable$$Type): void
 "error"(message: StringJS, ...paramSuppliers: ($Supplier$$Type<(never)>)[]): void
 "error"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type): void
 "error"(message: StringJS): void
 "error"(message: any, throwable: $Throwable$$Type): void
 "error"(marker: $Marker$$Type, message: StringJS): void
 "error"(marker: $Marker$$Type, message: any, throwable: $Throwable$$Type): void
 "error"(marker: $Marker$$Type, message: any): void
 "error"(marker: $Marker$$Type, message: charseq, throwable: $Throwable$$Type): void
 "error"(marker: $Marker$$Type, message: charseq): void
 "error"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "error"(message: $Message$$Type): void
 "error"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(never)>, throwable: $Throwable$$Type): void
 "error"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(never)>): void
 "error"(marker: $Marker$$Type, message: StringJS, throwable: $Throwable$$Type): void
 "error"(marker: $Marker$$Type, message: StringJS, ...paramSuppliers: ($Supplier$$Type<(never)>)[]): void
 "error"(marker: $Marker$$Type, message: StringJS, ...params: (any)[]): void
 "error"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "error"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "error"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "error"(message: StringJS, p0: any, p1: any, p2: any, p3: any): void
 "error"(message: StringJS, p0: any, p1: any, p2: any): void
 "error"(message: StringJS, p0: any, p1: any): void
 "error"(message: StringJS, ...params: (any)[]): void
 "error"(marker: $Marker$$Type, message: $Message$$Type): void
 "error"(marker: $Marker$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
 "error"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "error"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "error"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "error"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "error"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any): void
 "error"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any): void
 "error"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any): void
 "error"(marker: $Marker$$Type, message: StringJS, p0: any): void
 "error"(messageSupplier: $Supplier$$Type<(never)>, throwable: $Throwable$$Type): void
 "error"(message: StringJS, p0: any): void
 "error"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "error"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "error"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "error"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "error"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "warn"(message: charseq): void
 "warn"(message: charseq, throwable: $Throwable$$Type): void
 "warn"(message: any): void
 "warn"(message: any, throwable: $Throwable$$Type): void
 "warn"(messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "warn"(messageSupplier: $MessageSupplier$$Type): void
 "warn"(message: $Message$$Type, throwable: $Throwable$$Type): void
 "warn"(messageSupplier: $Supplier$$Type<(never)>, throwable: $Throwable$$Type): void
 "warn"(messageSupplier: $Supplier$$Type<(never)>): void
 "warn"(message: StringJS, throwable: $Throwable$$Type): void
 "warn"(message: StringJS, ...paramSuppliers: ($Supplier$$Type<(never)>)[]): void
 "warn"(message: StringJS, ...params: (any)[]): void
 "warn"(message: StringJS): void
 "warn"(marker: $Marker$$Type, message: charseq, throwable: $Throwable$$Type): void
 "warn"(marker: $Marker$$Type, message: any): void
 "warn"(marker: $Marker$$Type, message: any, throwable: $Throwable$$Type): void
 "warn"(marker: $Marker$$Type, message: StringJS): void
 "warn"(marker: $Marker$$Type, message: charseq): void
 "warn"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "warn"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type): void
 "warn"(message: $Message$$Type): void
 "warn"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(never)>, throwable: $Throwable$$Type): void
 "warn"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(never)>): void
 "warn"(marker: $Marker$$Type, message: StringJS, throwable: $Throwable$$Type): void
 "warn"(marker: $Marker$$Type, message: StringJS, ...paramSuppliers: ($Supplier$$Type<(never)>)[]): void
 "warn"(marker: $Marker$$Type, message: StringJS, ...params: (any)[]): void
 "warn"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "warn"(message: StringJS, p0: any, p1: any, p2: any, p3: any): void
 "warn"(message: StringJS, p0: any, p1: any, p2: any): void
 "warn"(message: StringJS, p0: any, p1: any): void
 "warn"(marker: $Marker$$Type, message: $Message$$Type): void
 "warn"(message: StringJS, p0: any): void
 "warn"(marker: $Marker$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
 "warn"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "warn"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "warn"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "warn"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "warn"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "warn"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "warn"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "warn"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any): void
 "warn"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any): void
 "warn"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any): void
 "warn"(marker: $Marker$$Type, message: StringJS, p0: any): void
 "warn"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "warn"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "warn"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "warn"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "getLevel"(): $Level
 "throwing"<T extends $Throwable>(throwable: T): T
 "throwing"<T extends $Throwable>(level: $Level$$Type, throwable: T): T
 "getFlowMessageFactory"(): $FlowMessageFactory
 "logMessage"(level: $Level$$Type, marker: $Marker$$Type, fqcn: StringJS, location: $StackTraceElement$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
 "atError"(): $LogBuilder
 "atFatal"(): $LogBuilder
 "atLevel"(level: $Level$$Type): $LogBuilder
 "always"(): $LogBuilder
 "fatal"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "fatal"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "fatal"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "fatal"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any): void
 "fatal"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any): void
 "fatal"(message: $Message$$Type, throwable: $Throwable$$Type): void
 "fatal"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "fatal"(message: StringJS, p0: any, p1: any, p2: any): void
 "fatal"(message: StringJS, p0: any, p1: any, p2: any, p3: any): void
 "fatal"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "fatal"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "fatal"(message: StringJS, p0: any, p1: any): void
 "fatal"(message: StringJS, p0: any): void
 "fatal"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "fatal"(message: charseq, throwable: $Throwable$$Type): void
 "fatal"(message: any): void
 "fatal"(message: any, throwable: $Throwable$$Type): void
 "fatal"(message: StringJS): void
 "fatal"(message: charseq): void
 "fatal"(messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "fatal"(messageSupplier: $MessageSupplier$$Type): void
 "fatal"(messageSupplier: $Supplier$$Type<(never)>): void
 "fatal"(messageSupplier: $Supplier$$Type<(never)>, throwable: $Throwable$$Type): void
 "fatal"(marker: $Marker$$Type, message: StringJS, p0: any): void
 "fatal"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any): void
 "fatal"(message: StringJS, throwable: $Throwable$$Type): void
 "fatal"(message: StringJS, ...paramSuppliers: ($Supplier$$Type<(never)>)[]): void
 "fatal"(message: StringJS, ...params: (any)[]): void
 "fatal"(marker: $Marker$$Type, message: StringJS): void
 "fatal"(marker: $Marker$$Type, message: any, throwable: $Throwable$$Type): void
 "fatal"(marker: $Marker$$Type, message: any): void
 "fatal"(marker: $Marker$$Type, message: charseq, throwable: $Throwable$$Type): void
 "fatal"(marker: $Marker$$Type, message: StringJS, ...params: (any)[]): void
 "fatal"(marker: $Marker$$Type, message: StringJS, ...paramSuppliers: ($Supplier$$Type<(never)>)[]): void
 "fatal"(marker: $Marker$$Type, message: StringJS, throwable: $Throwable$$Type): void
 "fatal"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "fatal"(marker: $Marker$$Type, message: $Message$$Type): void
 "fatal"(marker: $Marker$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
 "fatal"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type): void
 "fatal"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "fatal"(marker: $Marker$$Type, message: charseq): void
 "fatal"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "fatal"(message: $Message$$Type): void
 "fatal"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "fatal"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "fatal"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "fatal"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(never)>, throwable: $Throwable$$Type): void
 "fatal"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(never)>): void
 "traceExit"(): void
 "traceExit"<R>(message: $Message$$Type, result: R): R
 "traceExit"(message: $EntryMessage$$Type): void
 "traceExit"<R>(message: $EntryMessage$$Type, result: R): R
 "traceExit"<R>(format: StringJS, result: R): R
 "traceExit"<R>(result: R): R
 "catching"(throwable: $Throwable$$Type): void
 "catching"(level: $Level$$Type, throwable: $Throwable$$Type): void
 "atTrace"(): $LogBuilder
 "atDebug"(): $LogBuilder
 "atInfo"(): $LogBuilder
 "traceEntry"(format: StringJS, ...params: (any)[]): $EntryMessage
 "traceEntry"(): $EntryMessage
 "traceEntry"(message: $Message$$Type): $EntryMessage
 "traceEntry"(...paramSuppliers: ($Supplier$$Type<(never)>)[]): $EntryMessage
 "traceEntry"(format: StringJS, ...paramSuppliers: ($Supplier$$Type<(never)>)[]): $EntryMessage
 "atWarn"(): $LogBuilder
 "getMessageFactory"<MF extends $MessageFactory>(): MF
 "isWarnEnabled"(): boolean
 "isWarnEnabled"(marker: $Marker$$Type): boolean
 "isDebugEnabled"(): boolean
 "isDebugEnabled"(marker: $Marker$$Type): boolean
 "isFatalEnabled"(): boolean
 "isFatalEnabled"(marker: $Marker$$Type): boolean
 "isInfoEnabled"(): boolean
 "isInfoEnabled"(marker: $Marker$$Type): boolean
 "isErrorEnabled"(): boolean
 "isErrorEnabled"(marker: $Marker$$Type): boolean
 "isTraceEnabled"(marker: $Marker$$Type): boolean
 "isTraceEnabled"(): boolean
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
declare module "org.apache.logging.log4j.message.FlowMessageFactory" {
import {$ExitMessage} from "org.apache.logging.log4j.message.ExitMessage"
import {$EntryMessage, $EntryMessage$$Type} from "org.apache.logging.log4j.message.EntryMessage"
import {$Message$$Type} from "org.apache.logging.log4j.message.Message"

export interface $FlowMessageFactory$$Interface {
}

export class $FlowMessageFactory implements $FlowMessageFactory$$Interface {
 "newEntryMessage"(message: StringJS, ...params: (any)[]): $EntryMessage
 "newEntryMessage"(message: $Message$$Type): $EntryMessage
 "newExitMessage"(message: $EntryMessage$$Type): $ExitMessage
 "newExitMessage"(result: any, message: $Message$$Type): $ExitMessage
 "newExitMessage"(result: any, message: $EntryMessage$$Type): $ExitMessage
 "newExitMessage"(message: $Message$$Type): $ExitMessage
 "newExitMessage"(format: StringJS, result: any): $ExitMessage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlowMessageFactory$$Type = ($FlowMessageFactory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FlowMessageFactory$$Original = $FlowMessageFactory;}
declare module "org.apache.logging.log4j.LogBuilder" {
import {$Supplier$$Type} from "org.apache.logging.log4j.util.Supplier"
import {$StackTraceElement$$Type} from "java.lang.StackTraceElement"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$Message, $Message$$Type} from "org.apache.logging.log4j.message.Message"
import {$Marker$$Type} from "org.apache.logging.log4j.Marker"

export interface $LogBuilder$$Interface {
}

export class $LogBuilder implements $LogBuilder$$Interface {
static readonly "NOOP": $LogBuilder

 "log"(message: StringJS, p0: any, p1: any, p2: any, p3: any): void
 "log"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "log"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "log"(message: StringJS, p0: any, p1: any, p2: any): void
 "log"(message: StringJS, p0: any, p1: any): void
 "log"(message: StringJS, p0: any): void
 "log"(): void
 "log"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "log"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "log"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "log"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "log"(message: StringJS, ...params: ($Supplier$$Type<(never)>)[]): void
 "log"(message: StringJS, ...params: (any)[]): void
 "log"(message: StringJS): void
 "log"(message: charseq): void
 "log"(message: any): void
 "log"(messageSupplier: $Supplier$$Type<($Message$$Type)>): void
 "log"(message: $Message$$Type): void
 "withMarker"(marker: $Marker$$Type): $LogBuilder
 "logAndGet"(messageSupplier: $Supplier$$Type<($Message$$Type)>): $Message
 "withThrowable"(throwable: $Throwable$$Type): $LogBuilder
 "withLocation"(): $LogBuilder
 "withLocation"(location: $StackTraceElement$$Type): $LogBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LogBuilder$$Type = ($LogBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LogBuilder$$Original = $LogBuilder;}
declare module "org.apache.logging.log4j.message.MessageFactory" {
import {$Message} from "org.apache.logging.log4j.message.Message"

export interface $MessageFactory$$Interface {
}

export class $MessageFactory implements $MessageFactory$$Interface {
 "newMessage"(message: any): $Message
 "newMessage"(message: StringJS): $Message
 "newMessage"(message: StringJS, ...params: (any)[]): $Message
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MessageFactory$$Type = ($MessageFactory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MessageFactory$$Original = $MessageFactory;}
