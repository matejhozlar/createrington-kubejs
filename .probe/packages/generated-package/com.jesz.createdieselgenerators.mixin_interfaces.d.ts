declare module "com.jesz.createdieselgenerators.mixin_interfaces.IEntity" {
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $IEntity$$Interface {
set "turretPos"(value: $BlockPos$$Type)
get "turretPos"(): $BlockPos
}

export class $IEntity implements $IEntity$$Interface {
 "setTurretPos"(arg0: $BlockPos$$Type): void
 "getTurretPos"(): $BlockPos
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
