declare module "net.neoforged.neoforge.items.ItemStackHandler" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$INBTSerializable$$Interface} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$IItemHandler, $IItemHandler$$Interface} from "net.neoforged.neoforge.items.IItemHandler"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$Container} from "net.minecraft.world.Container"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$IItemHandlerModifiable$$Interface} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$Tag$$Type} from "net.minecraft.nbt.Tag"
import {$ItemStackHandlerAccessor$$Interface} from "com.simibubi.create.foundation.mixin.accessor.ItemStackHandlerAccessor"

export class $ItemStackHandler implements $IItemHandler$$Interface, $IItemHandlerModifiable$$Interface, $INBTSerializable$$Interface<($CompoundTag)>, $ItemStackHandlerAccessor$$Interface {
constructor()
constructor(arg0: $NonNullList$$Type<($ItemStack$$Type)>)
constructor(arg0: integer)

public "setSize"(arg0: integer): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getStackInSlot"(arg0: integer): $ItemStack
public "getSlots"(): integer
public "create$getStacks"(): $NonNullList
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "getBlock"(level: $Level$$Type): $LevelBlock
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "isMutable"(): boolean
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getStackInSlot"(arg0: integer): $ItemStack
public "getSlots"(): integer
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "kjs$self"(): $IItemHandler
public "getHeight"(): integer
public "getWidth"(): integer
public "asContainer"(): $Container
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "setChanged"(): void
public "getAllItems"(): $List<($ItemStack)>
public "countNonEmpty"(match: $ItemPredicate$$Type): integer
public "countNonEmpty"(): integer
public "isEmpty"(): boolean
public "count"(match: $ItemPredicate$$Type): integer
public "count"(): integer
public "clear"(match: $ItemPredicate$$Type): void
public "clear"(): void
public "find"(match: $ItemPredicate$$Type): integer
public "find"(): integer
set "size"(value: integer)
get "slots"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "height"(): integer
get "width"(): integer
get "changed"(): void
get "allItems"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackHandler$$Type = ($ItemStackHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemStackHandler$$Original = $ItemStackHandler;}
declare module "net.neoforged.neoforge.items.IItemHandler" {
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Container} from "net.minecraft.world.Container"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$InventoryKJS$$Interface} from "dev.latvian.mods.kubejs.core.InventoryKJS"

export interface $IItemHandler$$Interface extends $InventoryKJS$$Interface {
get "mutable"(): boolean
get "slots"(): integer
get "slots"(): integer
get "height"(): integer
get "width"(): integer
get "changed"(): void
get "allItems"(): $List<($ItemStack)>
get "empty"(): boolean
}

export class $IItemHandler implements $IItemHandler$$Interface {
 "getBlock"(level: $Level$$Type): $LevelBlock
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "isMutable"(): boolean
 "getSlotLimit"(arg0: integer): integer
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getStackInSlot"(arg0: integer): $ItemStack
 "getSlots"(): integer
 "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
 "getStackInSlot"(arg0: integer): $ItemStack
 "getSlots"(): integer
 "kjs$self"(): $IItemHandler
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "getHeight"(): integer
 "getWidth"(): integer
 "asContainer"(): $Container
 "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
 "setChanged"(): void
 "getAllItems"(): $List<($ItemStack)>
 "countNonEmpty"(match: $ItemPredicate$$Type): integer
 "countNonEmpty"(): integer
 "isEmpty"(): boolean
 "count"(match: $ItemPredicate$$Type): integer
 "count"(): integer
 "clear"(match: $ItemPredicate$$Type): void
 "clear"(): void
 "find"(match: $ItemPredicate$$Type): integer
 "find"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemHandler$$Type = ($IItemHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IItemHandler$$Original = $IItemHandler;}
declare module "net.neoforged.neoforge.items.IItemHandlerModifiable" {
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Container} from "net.minecraft.world.Container"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IItemHandler, $IItemHandler$$Interface} from "net.neoforged.neoforge.items.IItemHandler"

export interface $IItemHandlerModifiable$$Interface extends $IItemHandler$$Interface {
get "mutable"(): boolean
get "slots"(): integer
get "slots"(): integer
get "height"(): integer
get "width"(): integer
get "changed"(): void
get "allItems"(): $List<($ItemStack)>
get "empty"(): boolean
}

export class $IItemHandlerModifiable implements $IItemHandlerModifiable$$Interface {
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "getBlock"(level: $Level$$Type): $LevelBlock
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "isMutable"(): boolean
 "getSlotLimit"(arg0: integer): integer
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getStackInSlot"(arg0: integer): $ItemStack
 "getSlots"(): integer
 "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
 "getStackInSlot"(arg0: integer): $ItemStack
 "getSlots"(): integer
 "kjs$self"(): $IItemHandler
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "getHeight"(): integer
 "getWidth"(): integer
 "asContainer"(): $Container
 "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
 "setChanged"(): void
 "getAllItems"(): $List<($ItemStack)>
 "countNonEmpty"(match: $ItemPredicate$$Type): integer
 "countNonEmpty"(): integer
 "isEmpty"(): boolean
 "count"(match: $ItemPredicate$$Type): integer
 "count"(): integer
 "clear"(match: $ItemPredicate$$Type): void
 "clear"(): void
 "find"(match: $ItemPredicate$$Type): integer
 "find"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemHandlerModifiable$$Type = ($IItemHandlerModifiable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IItemHandlerModifiable$$Original = $IItemHandlerModifiable;}
declare module "net.neoforged.neoforge.items.wrapper.RecipeWrapper" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Interface} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List} from "java.util.List"
import {$SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"

export class $RecipeWrapper implements $RecipeInput$$Interface {
constructor(arg0: $IItemHandler$$Type)

public "size"(): integer
public "getItem"(arg0: integer): $ItemStack
public "isEmpty"(): boolean
public "find"(filter: $SlotFilter$$Type): $ItemStack
public "find"(filter: $SlotFilter$$Type, skip: integer): $ItemStack
public "self"(): $RecipeInput
public "findAll"(filter: $SlotFilter$$Type): $List<($ItemStack)>
public "findAll"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeWrapper$$Type = ($RecipeWrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeWrapper$$Original = $RecipeWrapper;}
