declare module "net.neoforged.neoforge.mixins.BlockEntityTypeAccessor" {
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Set, $Set$$Type} from "java.util.Set"

export interface $BlockEntityTypeAccessor$$Interface {

(arg0: $Set<($Block)>): void
}

export class $BlockEntityTypeAccessor implements $BlockEntityTypeAccessor$$Interface {
 "neoforge$setValidBlocks"(arg0: $Set$$Type<($Block$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityTypeAccessor$$Type = ((arg0: $Set<($Block)>) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEntityTypeAccessor$$Original = $BlockEntityTypeAccessor;}
