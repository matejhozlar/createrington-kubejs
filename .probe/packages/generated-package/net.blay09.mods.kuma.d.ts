declare module "net.blay09.mods.kuma.mixin.KeyMappingAccessor" {
import {$InputConstants$Key, $InputConstants$Key$$Type} from "com.mojang.blaze3d.platform.InputConstants$Key"

export interface $KeyMappingAccessor$$Interface {

(): $InputConstants$Key$$Type
get "key"(): $InputConstants$Key
}

export class $KeyMappingAccessor implements $KeyMappingAccessor$$Interface {
 "getKey"(): $InputConstants$Key
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyMappingAccessor$$Type = (() => $InputConstants$Key$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyMappingAccessor$$Original = $KeyMappingAccessor;}
