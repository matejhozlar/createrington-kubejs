declare module "net.neoforged.neoforge.items.IItemHandler" {
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$Container} from "net.minecraft.world.Container"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$InventoryKJS$$Interface} from "dev.latvian.mods.kubejs.core.InventoryKJS"

export interface $IItemHandler$$Interface extends $InventoryKJS$$Interface {
get "slots"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "empty"(): boolean
get "height"(): integer
get "changed"(): void
get "width"(): integer
get "allItems"(): $List<($ItemStack)>
}

export class $IItemHandler implements $IItemHandler$$Interface {
 "kjs$self"(): $IItemHandler
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "getStackInSlot"(arg0: integer): $ItemStack
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "getSlots"(): integer
 "getSlotLimit"(arg0: integer): integer
 "getStackInSlot"(arg0: integer): $ItemStack
 "isMutable"(): boolean
 "getSlotLimit"(arg0: integer): integer
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
 "getSlots"(): integer
 "getBlock"(level: $Level$$Type): $LevelBlock
 "isEmpty"(): boolean
 "find"(match: $ItemPredicate$$Type): integer
 "find"(): integer
 "clear"(): void
 "clear"(match: $ItemPredicate$$Type): void
 "count"(match: $ItemPredicate$$Type): integer
 "count"(): integer
 "getHeight"(): integer
 "setChanged"(): void
 "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
 "countNonEmpty"(): integer
 "countNonEmpty"(match: $ItemPredicate$$Type): integer
 "getWidth"(): integer
 "asContainer"(): $Container
 "getAllItems"(): $List<($ItemStack)>
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
declare module "net.neoforged.neoforge.items.ItemStackHandler" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$INBTSerializable$$Interface} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$IItemHandler, $IItemHandler$$Interface} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$Container} from "net.minecraft.world.Container"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$IItemHandlerModifiable$$Interface} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$ItemStackHandlerAccessor$$Interface} from "com.simibubi.create.foundation.mixin.accessor.ItemStackHandlerAccessor"

export class $ItemStackHandler implements $IItemHandler$$Interface, $IItemHandlerModifiable$$Interface, $INBTSerializable$$Interface<($CompoundTag)>, $ItemStackHandlerAccessor$$Interface {
constructor(arg0: $NonNullList$$Type<($ItemStack$$Type)>)
constructor(arg0: integer)
constructor()

public "setSize"(arg0: integer): void
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "getStackInSlot"(arg0: integer): $ItemStack
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "getSlotLimit"(arg0: integer): integer
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
public "getSlots"(): integer
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public "create$getStacks"(): $NonNullList
public "kjs$self"(): $IItemHandler
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "getSlots"(): integer
public "getSlotLimit"(arg0: integer): integer
public "getStackInSlot"(arg0: integer): $ItemStack
public "isMutable"(): boolean
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "getBlock"(level: $Level$$Type): $LevelBlock
public "isEmpty"(): boolean
public "find"(match: $ItemPredicate$$Type): integer
public "find"(): integer
public "clear"(): void
public "clear"(match: $ItemPredicate$$Type): void
public "count"(match: $ItemPredicate$$Type): integer
public "count"(): integer
public "getHeight"(): integer
public "setChanged"(): void
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "countNonEmpty"(): integer
public "countNonEmpty"(match: $ItemPredicate$$Type): integer
public "getWidth"(): integer
public "asContainer"(): $Container
public "getAllItems"(): $List<($ItemStack)>
set "size"(value: integer)
get "slots"(): integer
get "slots"(): integer
get "mutable"(): boolean
get "empty"(): boolean
get "height"(): integer
get "changed"(): void
get "width"(): integer
get "allItems"(): $List<($ItemStack)>
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
declare module "net.neoforged.neoforge.items.IItemHandlerModifiable" {
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$Container} from "net.minecraft.world.Container"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IItemHandler, $IItemHandler$$Interface} from "net.neoforged.neoforge.items.IItemHandler"

export interface $IItemHandlerModifiable$$Interface extends $IItemHandler$$Interface {
get "slots"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "empty"(): boolean
get "height"(): integer
get "changed"(): void
get "width"(): integer
get "allItems"(): $List<($ItemStack)>
}

export class $IItemHandlerModifiable implements $IItemHandlerModifiable$$Interface {
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "kjs$self"(): $IItemHandler
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "getStackInSlot"(arg0: integer): $ItemStack
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "getSlots"(): integer
 "getSlotLimit"(arg0: integer): integer
 "getStackInSlot"(arg0: integer): $ItemStack
 "isMutable"(): boolean
 "getSlotLimit"(arg0: integer): integer
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
 "getSlots"(): integer
 "getBlock"(level: $Level$$Type): $LevelBlock
 "isEmpty"(): boolean
 "find"(match: $ItemPredicate$$Type): integer
 "find"(): integer
 "clear"(): void
 "clear"(match: $ItemPredicate$$Type): void
 "count"(match: $ItemPredicate$$Type): integer
 "count"(): integer
 "getHeight"(): integer
 "setChanged"(): void
 "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
 "countNonEmpty"(): integer
 "countNonEmpty"(match: $ItemPredicate$$Type): integer
 "getWidth"(): integer
 "asContainer"(): $Container
 "getAllItems"(): $List<($ItemStack)>
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
public "findAll"(): $List<($ItemStack)>
public "findAll"(filter: $SlotFilter$$Type): $List<($ItemStack)>
public "self"(): $RecipeInput
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
