declare module "net.minecraft.data.worldgen.BootstrapContext" {
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$Optional} from "java.util.Optional"
import {$HolderLookup$RegistryLookup} from "net.minecraft.core.HolderLookup$RegistryLookup"
import {$Lifecycle$$Type} from "com.mojang.serialization.Lifecycle"
import {$Holder$Reference} from "net.minecraft.core.Holder$Reference"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$HolderGetter} from "net.minecraft.core.HolderGetter"

export interface $BootstrapContext$$Interface<T> {
}

export class $BootstrapContext<T> implements $BootstrapContext$$Interface {
 "lookup"<S>(arg0: $ResourceKey$$Type<($Registry<(S)>)>): $HolderGetter<(S)>
 "register"(arg0: $ResourceKey$$Type<(T)>, arg1: T, arg2: $Lifecycle$$Type): $Holder$Reference<(T)>
 "register"(arg0: $ResourceKey$$Type<(T)>, arg1: T): $Holder$Reference<(T)>
 "registryLookup"<S>(arg0: $ResourceKey$$Type<($Registry<(S)>)>): $Optional<($HolderLookup$RegistryLookup<(S)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BootstrapContext$$Type<T> = ($BootstrapContext<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BootstrapContext$$Original<T> = $BootstrapContext<(T)>;}
