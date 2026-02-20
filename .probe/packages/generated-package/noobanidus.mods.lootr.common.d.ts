declare module "noobanidus.mods.lootr.common.mixins.MixinDimensionDataStorage" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$SavedData, $SavedData$$Type} from "net.minecraft.world.level.saveddata.SavedData"

export interface $MixinDimensionDataStorage$$Interface {

(): $Map$$Type<(StringJS), ($SavedData$$Type)>
get "cache"(): $Map<(StringJS), ($SavedData)>
}

export class $MixinDimensionDataStorage implements $MixinDimensionDataStorage$$Interface {
 "getCache"(): $Map<(StringJS), ($SavedData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinDimensionDataStorage$$Type = (() => $Map$$Type<(StringJS), ($SavedData$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MixinDimensionDataStorage$$Original = $MixinDimensionDataStorage;}
declare module "noobanidus.mods.lootr.common.mixins.AccessorMixinDimensionDataStorage" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$SavedData, $SavedData$$Type} from "net.minecraft.world.level.saveddata.SavedData"

export interface $AccessorMixinDimensionDataStorage$$Interface {

(): $Map$$Type<(StringJS), ($SavedData$$Type)>
get "cache"(): $Map<(StringJS), ($SavedData)>
}

export class $AccessorMixinDimensionDataStorage implements $AccessorMixinDimensionDataStorage$$Interface {
 "getCache"(): $Map<(StringJS), ($SavedData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorMixinDimensionDataStorage$$Type = (() => $Map$$Type<(StringJS), ($SavedData$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorMixinDimensionDataStorage$$Original = $AccessorMixinDimensionDataStorage;}
declare module "noobanidus.mods.lootr.common.mixins.AccessorMixinBaseContainerBlockEntity" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$LockCode, $LockCode$$Type} from "net.minecraft.world.LockCode"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export interface $AccessorMixinBaseContainerBlockEntity$$Interface {
get "lockKey"(): $LockCode
set "lockKey"(value: $LockCode$$Type)
}

export class $AccessorMixinBaseContainerBlockEntity implements $AccessorMixinBaseContainerBlockEntity$$Interface {
 "invokeGetItems"(): $NonNullList<($ItemStack)>
 "getLockKey"(): $LockCode
 "setLockKey"(arg0: $LockCode$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorMixinBaseContainerBlockEntity$$Type = ($AccessorMixinBaseContainerBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorMixinBaseContainerBlockEntity$$Original = $AccessorMixinBaseContainerBlockEntity;}
declare module "noobanidus.mods.lootr.common.mixins.AccessorMixinVehicleEntity" {
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export interface $AccessorMixinVehicleEntity$$Interface {

(): $Item$$Type
}

export class $AccessorMixinVehicleEntity implements $AccessorMixinVehicleEntity$$Interface {
 "invokeGetDropItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorMixinVehicleEntity$$Type = (() => $Item$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorMixinVehicleEntity$$Original = $AccessorMixinVehicleEntity;}
