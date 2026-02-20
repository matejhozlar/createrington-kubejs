declare module "com.jesz.createdieselgenerators.mixin_interfaces.IEntity" {
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $IEntity$$Interface {
get "turretPos"(): $BlockPos
set "turretPos"(value: $BlockPos$$Type)
}

export class $IEntity implements $IEntity$$Interface {
 "getTurretPos"(): $BlockPos
 "setTurretPos"(arg0: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEntity$$Type = ($IEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEntity$$Original = $IEntity;}
