declare module "com.blamejared.clumps.helper.IClumpedOrb" {
import {$Map, $Map$$Type} from "java.util.Map"

export interface $IClumpedOrb$$Interface {
}

export class $IClumpedOrb implements $IClumpedOrb$$Interface {
 "clumps$resolve"(): boolean
 "clumps$getClumpedMap"(): $Map<(integer), (integer)>
 "clumps$setClumpedMap"(arg0: $Map$$Type<(integer), (integer)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClumpedOrb$$Type = ($IClumpedOrb);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IClumpedOrb$$Original = $IClumpedOrb;}
