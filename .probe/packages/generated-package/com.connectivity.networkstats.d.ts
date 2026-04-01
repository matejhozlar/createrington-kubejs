declare module "com.connectivity.networkstats.INamedPacket" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $INamedPacket$$Interface {
get "name"(): StringJS
set "name"(value: StringJS)
}

export class $INamedPacket implements $INamedPacket$$Interface {
 "getName"(): StringJS
 "setName"(arg0: StringJS): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INamedPacket$$Type = ($INamedPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $INamedPacket$$Original = $INamedPacket;}
declare module "com.connectivity.networkstats.IModifyAbleNbtAccounter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IModifyAbleNbtAccounter$$Interface {
set "quota"(value: long)
get "originalQuota"(): long
}

export class $IModifyAbleNbtAccounter implements $IModifyAbleNbtAccounter$$Interface {
 "setQuota"(arg0: long): void
 "getOriginalQuota"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModifyAbleNbtAccounter$$Type = ($IModifyAbleNbtAccounter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IModifyAbleNbtAccounter$$Original = $IModifyAbleNbtAccounter;}
