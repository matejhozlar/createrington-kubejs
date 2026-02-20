declare module "loaderCommon.neoforge.com.seibel.distanthorizons.common.wrappers.misc.IMixinServerPlayer" {
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export interface $IMixinServerPlayer$$Interface {

(): $ServerLevel$$Type
}

export class $IMixinServerPlayer implements $IMixinServerPlayer$$Interface {
 "distantHorizons$getDimensionChangeDestination"(): $ServerLevel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinServerPlayer$$Type = (() => $ServerLevel$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMixinServerPlayer$$Original = $IMixinServerPlayer;}
