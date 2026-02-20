declare module "fi.dy.masa.malilib.mixin.entity.IMixinPlayerEntity" {
import {$PlayerEnderChestContainer, $PlayerEnderChestContainer$$Type} from "net.minecraft.world.inventory.PlayerEnderChestContainer"

export interface $IMixinPlayerEntity$$Interface {

(): $PlayerEnderChestContainer$$Type
}

export class $IMixinPlayerEntity implements $IMixinPlayerEntity$$Interface {
 "malilib_getEnderItems"(): $PlayerEnderChestContainer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinPlayerEntity$$Type = (() => $PlayerEnderChestContainer$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMixinPlayerEntity$$Original = $IMixinPlayerEntity;}
declare module "fi.dy.masa.malilib.mixin.entity.IMixinMerchantEntity" {
import {$MerchantOffers, $MerchantOffers$$Type} from "net.minecraft.world.item.trading.MerchantOffers"

export interface $IMixinMerchantEntity$$Interface {

(): $MerchantOffers$$Type
}

export class $IMixinMerchantEntity implements $IMixinMerchantEntity$$Interface {
 "malilib_offers"(): $MerchantOffers
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinMerchantEntity$$Type = (() => $MerchantOffers$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMixinMerchantEntity$$Original = $IMixinMerchantEntity;}
declare module "fi.dy.masa.malilib.mixin.item.IMixinContainerComponent" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"

export interface $IMixinContainerComponent$$Interface {

(): $NonNullList$$Type<($ItemStack$$Type)>
}

export class $IMixinContainerComponent implements $IMixinContainerComponent$$Interface {
 "malilib_getStacks"(): $NonNullList<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinContainerComponent$$Type = (() => $NonNullList$$Type<($ItemStack$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMixinContainerComponent$$Original = $IMixinContainerComponent;}
declare module "fi.dy.masa.malilib.util.IEntityOwnedInventory" {
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export interface $IEntityOwnedInventory$$Interface {
}

export class $IEntityOwnedInventory implements $IEntityOwnedInventory$$Interface {
 "malilib$getEntityOwner"(): $Entity
 "malilib$setEntityOwner"(arg0: $Entity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEntityOwnedInventory$$Type = ($IEntityOwnedInventory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEntityOwnedInventory$$Original = $IEntityOwnedInventory;}
declare module "fi.dy.masa.malilib.util.IF3KeyStateSetter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IF3KeyStateSetter$$Interface {

(arg0: boolean): void
}

export class $IF3KeyStateSetter implements $IF3KeyStateSetter$$Interface {
 "malilib$setF3KeyState"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IF3KeyStateSetter$$Type = ((arg0: boolean) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IF3KeyStateSetter$$Original = $IF3KeyStateSetter;}
declare module "fi.dy.masa.malilib.mixin.entity.IMixinPiglinEntity" {
import {$SimpleContainer, $SimpleContainer$$Type} from "net.minecraft.world.SimpleContainer"

export interface $IMixinPiglinEntity$$Interface {

(): $SimpleContainer$$Type
}

export class $IMixinPiglinEntity implements $IMixinPiglinEntity$$Interface {
 "malilib_getInventory"(): $SimpleContainer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinPiglinEntity$$Type = (() => $SimpleContainer$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMixinPiglinEntity$$Original = $IMixinPiglinEntity;}
declare module "fi.dy.masa.malilib.mixin.network.IMixinDataQueryHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMixinDataQueryHandler$$Interface {

(): integer
}

export class $IMixinDataQueryHandler implements $IMixinDataQueryHandler$$Interface {
 "malilib_currentTransactionId"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinDataQueryHandler$$Type = (() => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMixinDataQueryHandler$$Original = $IMixinDataQueryHandler;}
declare module "fi.dy.masa.malilib.mixin.entity.IMixinAbstractHorseEntity" {
import {$SimpleContainer, $SimpleContainer$$Type} from "net.minecraft.world.SimpleContainer"

export interface $IMixinAbstractHorseEntity$$Interface {

(): $SimpleContainer$$Type
}

export class $IMixinAbstractHorseEntity implements $IMixinAbstractHorseEntity$$Interface {
 "malilib_getHorseInventory"(): $SimpleContainer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinAbstractHorseEntity$$Type = (() => $SimpleContainer$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMixinAbstractHorseEntity$$Original = $IMixinAbstractHorseEntity;}
declare module "fi.dy.masa.malilib.mixin.screen.IMixinHandledScreen" {
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"

export interface $IMixinHandledScreen$$Interface {

(): $Slot$$Type
}

export class $IMixinHandledScreen implements $IMixinHandledScreen$$Interface {
 "malilib_getFocusedSlot"(): $Slot
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinHandledScreen$$Type = (() => $Slot$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMixinHandledScreen$$Original = $IMixinHandledScreen;}
declare module "fi.dy.masa.malilib.util.game.IGameHud" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IGameHud$$Interface {

(arg0: integer): void
}

export class $IGameHud implements $IGameHud$$Interface {
 "malilib$setOverlayRemaining"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGameHud$$Type = ((arg0: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IGameHud$$Original = $IGameHud;}
