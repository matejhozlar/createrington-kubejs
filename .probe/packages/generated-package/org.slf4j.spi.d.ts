declare module "org.slf4j.spi.LoggingEventBuilder" {
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$Marker$$Type} from "org.slf4j.Marker"

export interface $LoggingEventBuilder$$Interface {
set "cause"(value: $Throwable$$Type)
set "message"(value: $Supplier$$Type<(StringJS)>)
set "message"(value: StringJS)
}

export class $LoggingEventBuilder implements $LoggingEventBuilder$$Interface {
 "log"(): void
 "log"(arg0: StringJS): void
 "log"(arg0: StringJS, arg1: any): void
 "log"(arg0: $Supplier$$Type<(StringJS)>): void
 "log"(arg0: StringJS, ...arg1: (any)[]): void
 "log"(arg0: StringJS, arg1: any, arg2: any): void
 "setCause"(arg0: $Throwable$$Type): $LoggingEventBuilder
 "addMarker"(arg0: $Marker$$Type): $LoggingEventBuilder
 "addKeyValue"(arg0: StringJS, arg1: any): $LoggingEventBuilder
 "addKeyValue"(arg0: StringJS, arg1: $Supplier$$Type<(any)>): $LoggingEventBuilder
 "addArgument"(arg0: any): $LoggingEventBuilder
 "addArgument"(arg0: $Supplier$$Type<(never)>): $LoggingEventBuilder
 "setMessage"(arg0: $Supplier$$Type<(StringJS)>): $LoggingEventBuilder
 "setMessage"(arg0: StringJS): $LoggingEventBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoggingEventBuilder$$Type = ($LoggingEventBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LoggingEventBuilder$$Original = $LoggingEventBuilder;}
