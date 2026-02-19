declare module "dev.ftb.mods.ftblibrary.core.ItemFTBL" {
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export interface $ItemFTBL$$Interface {

(arg0: $Item): void
set "craftingRemainingItemFTBL"(value: $Item$$Type)
}

export class $ItemFTBL implements $ItemFTBL$$Interface {
 "setCraftingRemainingItemFTBL"(arg0: $Item$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFTBL$$Type = ((arg0: $Item) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemFTBL$$Original = $ItemFTBL;}
