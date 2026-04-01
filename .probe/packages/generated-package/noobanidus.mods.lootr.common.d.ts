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
declare module "noobanidus.mods.lootr.common.mixins.AccessorMixinBrushableBlockEntity" {
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$LootTable} from "net.minecraft.world.level.storage.loot.LootTable"

export interface $AccessorMixinBrushableBlockEntity$$Interface {
}

export class $AccessorMixinBrushableBlockEntity implements $AccessorMixinBrushableBlockEntity$$Interface {
 "lootr$getLootTableSeed"(): long
 "lootr$getLootTable"(): $ResourceKey<($LootTable)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorMixinBrushableBlockEntity$$Type = ($AccessorMixinBrushableBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorMixinBrushableBlockEntity$$Original = $AccessorMixinBrushableBlockEntity;}
declare module "noobanidus.mods.lootr.common.mixins.AccessorMixinFallingBlockEntity" {
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $AccessorMixinFallingBlockEntity$$Interface {

(arg0: $BlockState): void
}

export class $AccessorMixinFallingBlockEntity implements $AccessorMixinFallingBlockEntity$$Interface {
 "lootr$setBlockState"(arg0: $BlockState$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorMixinFallingBlockEntity$$Type = ((arg0: $BlockState) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorMixinFallingBlockEntity$$Original = $AccessorMixinFallingBlockEntity;}
