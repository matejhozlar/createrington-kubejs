declare module "net.neoforged.bus.api.IEventBus" {
import {$EventPriority$$Type} from "net.neoforged.bus.api.EventPriority"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$Class$$Type} from "java.lang.Class"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $IEventBus$$Interface {
}

export class $IEventBus implements $IEventBus$$Interface {
 "register"(arg0: any): void
 "start"(): void
 "unregister"(arg0: any): void
 "post"<T extends $Event>(arg0: T): T
 "post"<T extends $Event>(arg0: $EventPriority$$Type, arg1: T): T
 "addListener"<T extends $Event>(arg0: boolean, arg1: $Consumer$$Type<(T)>): void
 "addListener"<T extends $Event>(arg0: boolean, arg1: $Class$$Type<(T)>, arg2: $Consumer$$Type<(T)>): void
 "addListener"<T extends $Event>(arg0: $EventPriority$$Type, arg1: boolean, arg2: $Class$$Type<(T)>, arg3: $Consumer$$Type<(T)>): void
 "addListener"<T extends $Event>(arg0: $Class$$Type<(T)>, arg1: $Consumer$$Type<(T)>): void
 "addListener"<T extends $Event>(arg0: $EventPriority$$Type, arg1: $Consumer$$Type<(T)>): void
 "addListener"<T extends $Event>(arg0: $EventPriority$$Type, arg1: $Class$$Type<(T)>, arg2: $Consumer$$Type<(T)>): void
 "addListener"<T extends $Event>(arg0: $EventPriority$$Type, arg1: boolean, arg2: $Consumer$$Type<(T)>): void
 "addListener"<T extends $Event>(arg0: $Consumer$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEventBus$$Type = ($IEventBus);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEventBus$$Original = $IEventBus;}
declare module "net.neoforged.bus.api.ICancellableEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ICancellableEvent$$Interface {
get "canceled"(): boolean
set "canceled"(value: boolean)
}

export class $ICancellableEvent implements $ICancellableEvent$$Interface {
 "isCanceled"(): boolean
 "setCanceled"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICancellableEvent$$Type = ($ICancellableEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICancellableEvent$$Original = $ICancellableEvent;}
declare module "net.neoforged.bus.api.EventPriority" {
import {$Enum} from "java.lang.Enum"

export class $EventPriority extends $Enum<($EventPriority)> {
static readonly "LOWEST": $EventPriority
static readonly "HIGH": $EventPriority
static readonly "LOW": $EventPriority
static readonly "HIGHEST": $EventPriority
static readonly "NORMAL": $EventPriority

public static "values"(): ($EventPriority)[]
public static "valueOf"(arg0: StringJS): $EventPriority
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventPriority$$Type = (("highest") | ("high") | ("normal") | ("low") | ("lowest"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EventPriority$$Original = $EventPriority;}
declare module "net.neoforged.bus.api.Event" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Event {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Event$$Type = ($Event);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Event$$Original = $Event;}
