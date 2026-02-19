declare module "dev.architectury.utils.OptionalSupplier" {
import {$Optional} from "java.util.Optional"
import {$Supplier$$Type, $Supplier$$Interface} from "java.util.function.Supplier"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Stream} from "java.util.stream.Stream"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $OptionalSupplier$$Interface<T> extends $Supplier$$Interface<(T)> {
get "present"(): boolean
get "orNull"(): T
}

export class $OptionalSupplier<T> implements $OptionalSupplier$$Interface {
 "stream"(): $Stream<(T)>
 "isPresent"(): boolean
 "orElse"(other: T): T
 "ifPresent"(action: $Consumer$$Type<(T)>): void
 "ifPresentOrElse"(action: $Consumer$$Type<(T)>, emptyAction: $Runnable$$Type): void
 "orElseGet"(supplier: $Supplier$$Type<(T)>): T
 "toOptional"(): $Optional<(T)>
 "getOrNull"(): T
 "get"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionalSupplier$$Type<T> = ($OptionalSupplier<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OptionalSupplier$$Original<T> = $OptionalSupplier<(T)>;}
