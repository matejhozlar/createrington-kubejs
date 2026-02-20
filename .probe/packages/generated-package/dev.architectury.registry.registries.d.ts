declare module "dev.architectury.registry.registries.DeferredSupplier" {
import {$OptionalSupplier$$Interface} from "dev.architectury.utils.OptionalSupplier"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Optional} from "java.util.Optional"
import {$Registry} from "net.minecraft.core.Registry"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Stream} from "java.util.stream.Stream"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $DeferredSupplier$$Interface<T> extends $OptionalSupplier$$Interface<(T)> {
get "key"(): $ResourceKey<(T)>
get "id"(): $ResourceLocation
get "registryKey"(): $ResourceKey<($Registry<(T)>)>
get "registryId"(): $ResourceLocation
get "present"(): boolean
get "orNull"(): T
}

export class $DeferredSupplier<T> implements $DeferredSupplier$$Interface {
 "getKey"(): $ResourceKey<(T)>
 "getId"(): $ResourceLocation
 "getRegistryKey"(): $ResourceKey<($Registry<(T)>)>
 "getRegistryId"(): $ResourceLocation
 "stream"(): $Stream<(T)>
 "isPresent"(): boolean
 "orElse"(other: T): T
 "ifPresent"(action: $Consumer$$Type<(T)>): void
 "ifPresentOrElse"(action: $Consumer$$Type<(T)>, emptyAction: $Runnable$$Type): void
 "orElseGet"(supplier: $Supplier$$Type<(T)>): T
 "getOrNull"(): T
 "toOptional"(): $Optional<(T)>
 "get"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeferredSupplier$$Type<T> = ($DeferredSupplier<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DeferredSupplier$$Original<T> = $DeferredSupplier<(T)>;}
