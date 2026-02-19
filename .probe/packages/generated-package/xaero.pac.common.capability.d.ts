declare module "xaero.pac.common.capability.ICapableObject" {
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "xaero.pac.common.capability.ICapabilityProvider"

export interface $ICapableObject$$Interface {
get "xaero_OPAC_CapabilityProvider"(): $ICapabilityProvider
set "xaero_OPAC_CapabilityProvider"(value: $ICapabilityProvider$$Type)
}

export class $ICapableObject implements $ICapableObject$$Interface {
 "getXaero_OPAC_CapabilityProvider"(): $ICapabilityProvider
 "setXaero_OPAC_CapabilityProvider"(arg0: $ICapabilityProvider$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICapableObject$$Type = ($ICapableObject);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICapableObject$$Original = $ICapableObject;}
declare module "xaero.pac.common.capability.ICapabilityProvider" {
import {$ICapability, $ICapability$$Type} from "xaero.pac.common.capability.ICapability"

export interface $ICapabilityProvider$$Interface {

(arg0: $ICapability<(T)>): T
}

export class $ICapabilityProvider implements $ICapabilityProvider$$Interface {
 "getCapability"<T>(arg0: $ICapability$$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICapabilityProvider$$Type = ((arg0: $ICapability<(T)>) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICapabilityProvider$$Original = $ICapabilityProvider;}
declare module "xaero.pac.common.capability.ICapability" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ICapability$$Interface<T> {
}

export class $ICapability<T> implements $ICapability$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICapability$$Type<T> = ($ICapability<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICapability$$Original<T> = $ICapability<(T)>;}
