declare module "team.creative.creativecore.client.render.model.CreativeQuadLighter" {
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $CreativeQuadLighter$$Interface {
set "state"(value: $BlockState$$Type)
set "customTint"(value: integer)
}

export class $CreativeQuadLighter implements $CreativeQuadLighter$$Interface {
 "setState"(arg0: $BlockState$$Type): void
 "setCustomTint"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeQuadLighter$$Type = ($CreativeQuadLighter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreativeQuadLighter$$Original = $CreativeQuadLighter;}
