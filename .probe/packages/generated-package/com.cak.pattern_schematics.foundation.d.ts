declare module "com.cak.pattern_schematics.foundation.mixin_accessors.MovementContextAccessor" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $MovementContextAccessor$$Interface {

(arg0: $ItemStack): void
}

export class $MovementContextAccessor implements $MovementContextAccessor$$Interface {
 "pattern_schematics$setFilter"(arg0: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MovementContextAccessor$$Type = ((arg0: $ItemStack) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MovementContextAccessor$$Original = $MovementContextAccessor;}
