declare module "com.blamejared.controlling.mixin.AccessKeyMapping" {
import {$InputConstants$Key, $InputConstants$Key$$Type} from "com.mojang.blaze3d.platform.InputConstants$Key"

export interface $AccessKeyMapping$$Interface {

(): $InputConstants$Key$$Type
}

export class $AccessKeyMapping implements $AccessKeyMapping$$Interface {
 "controlling$getKey"(): $InputConstants$Key
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessKeyMapping$$Type = (() => $InputConstants$Key$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessKeyMapping$$Original = $AccessKeyMapping;}
declare module "com.blamejared.controlling.mixin.AccessInputConstantsKey" {
import {$Map} from "java.util.Map"
import {$InputConstants$Key} from "com.mojang.blaze3d.platform.InputConstants$Key"

export interface $AccessInputConstantsKey$$Interface {
}

export class $AccessInputConstantsKey implements $AccessInputConstantsKey$$Interface {
static "controlling$getNAME_MAP"(): $Map<(StringJS), ($InputConstants$Key)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessInputConstantsKey$$Type = ($AccessInputConstantsKey);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessInputConstantsKey$$Original = $AccessInputConstantsKey;}
