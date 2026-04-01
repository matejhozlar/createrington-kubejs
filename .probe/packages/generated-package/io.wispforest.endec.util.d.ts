declare module "io.wispforest.endec.util.EndecBuffer" {
import {$Endec$$Type} from "io.wispforest.endec.Endec"
import {$SerializationContext$$Type} from "io.wispforest.endec.SerializationContext"

export interface $EndecBuffer$$Interface {
}

export class $EndecBuffer implements $EndecBuffer$$Interface {
 "write"<T>(arg0: $Endec$$Type<(T)>, arg1: T): void
 "write"<T>(arg0: $SerializationContext$$Type, arg1: $Endec$$Type<(T)>, arg2: T): void
 "read"<T>(arg0: $SerializationContext$$Type, arg1: $Endec$$Type<(T)>): T
 "read"<T>(arg0: $Endec$$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EndecBuffer$$Type = ($EndecBuffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EndecBuffer$$Original = $EndecBuffer;}
declare module "io.wispforest.endec.util.MapCarrier" {
import {$Function$$Type} from "java.util.function.Function"
import {$SerializationContext$$Type} from "io.wispforest.endec.SerializationContext"
import {$KeyedEndec$$Type} from "io.wispforest.endec.impl.KeyedEndec"

export interface $MapCarrier$$Interface {
}

export class $MapCarrier implements $MapCarrier$$Interface {
 "get"<T>(arg0: $SerializationContext$$Type, arg1: $KeyedEndec$$Type<(T)>): T
 "get"<T>(arg0: $KeyedEndec$$Type<(T)>): T
 "put"<T>(arg0: $KeyedEndec$$Type<(T)>, arg1: T): void
 "put"<T>(arg0: $SerializationContext$$Type, arg1: $KeyedEndec$$Type<(T)>, arg2: T): void
 "delete"<T>(arg0: $KeyedEndec$$Type<(T)>): void
 "copy"<T>(arg0: $KeyedEndec$$Type<(T)>, arg1: $MapCarrier$$Type): void
 "copy"<T>(arg0: $SerializationContext$$Type, arg1: $KeyedEndec$$Type<(T)>, arg2: $MapCarrier$$Type): void
 "has"<T>(arg0: $KeyedEndec$$Type<(T)>): boolean
 "getWithErrors"<T>(arg0: $KeyedEndec$$Type<(T)>): T
 "getWithErrors"<T>(arg0: $SerializationContext$$Type, arg1: $KeyedEndec$$Type<(T)>): T
 "putIfNotNull"<T>(arg0: $SerializationContext$$Type, arg1: $KeyedEndec$$Type<(T)>, arg2: T): void
 "putIfNotNull"<T>(arg0: $KeyedEndec$$Type<(T)>, arg1: T): void
 "copyIfPresent"<T>(arg0: $SerializationContext$$Type, arg1: $KeyedEndec$$Type<(T)>, arg2: $MapCarrier$$Type): void
/**
 * 
 * @deprecated
 */
 "copyIfPresent"<T>(arg0: $KeyedEndec$$Type<(T)>, arg1: $SerializationContext$$Type, arg2: $MapCarrier$$Type): void
 "copyIfPresent"<T>(arg0: $KeyedEndec$$Type<(T)>, arg1: $MapCarrier$$Type): void
/**
 * 
 * @deprecated
 */
 "mutate"<T>(arg0: $KeyedEndec$$Type<(T)>, arg1: $SerializationContext$$Type, arg2: $Function$$Type<(T), (T)>): void
 "mutate"<T>(arg0: $SerializationContext$$Type, arg1: $KeyedEndec$$Type<(T)>, arg2: $Function$$Type<(T), (T)>): void
 "mutate"<T>(arg0: $KeyedEndec$$Type<(T)>, arg1: $Function$$Type<(T), (T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapCarrier$$Type = ($MapCarrier);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapCarrier$$Original = $MapCarrier;}
declare module "io.wispforest.endec.util.Endable" {
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"

export interface $Endable$$Interface extends $AutoCloseable$$Interface {

(): void
}

export class $Endable implements $Endable$$Interface {
 "end"(): void
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Endable$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Endable$$Original = $Endable;}
