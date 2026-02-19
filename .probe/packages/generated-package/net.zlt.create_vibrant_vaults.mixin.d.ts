declare module "net.zlt.create_vibrant_vaults.mixin.accessor.PackagePortBlockEntityAccessor" {
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"

export interface $PackagePortBlockEntityAccessor$$Interface {

(): $IItemHandler$$Type
}

export class $PackagePortBlockEntityAccessor implements $PackagePortBlockEntityAccessor$$Interface {
 "createVibrantVaults$getItemHandler"(): $IItemHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PackagePortBlockEntityAccessor$$Type = (() => $IItemHandler$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PackagePortBlockEntityAccessor$$Original = $PackagePortBlockEntityAccessor;}
