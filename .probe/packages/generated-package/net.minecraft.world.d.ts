declare module "net.minecraft.world.BossEvent$BossBarColor" {
import {$Enum} from "java.lang.Enum"
import {$ChatFormatting} from "net.minecraft.ChatFormatting"

export class $BossEvent$BossBarColor extends $Enum<($BossEvent$BossBarColor)> {
static readonly "RED": $BossEvent$BossBarColor
static readonly "WHITE": $BossEvent$BossBarColor
static readonly "PINK": $BossEvent$BossBarColor
static readonly "BLUE": $BossEvent$BossBarColor
static readonly "YELLOW": $BossEvent$BossBarColor
static readonly "PURPLE": $BossEvent$BossBarColor
static readonly "GREEN": $BossEvent$BossBarColor

public "getName"(): StringJS
public static "values"(): ($BossEvent$BossBarColor)[]
public static "valueOf"(arg0: StringJS): $BossEvent$BossBarColor
public static "byName"(arg0: StringJS): $BossEvent$BossBarColor
public "getFormatting"(): $ChatFormatting
get "name"(): StringJS
get "formatting"(): $ChatFormatting
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BossEvent$BossBarColor$$Type = (("pink") | ("blue") | ("red") | ("green") | ("yellow") | ("purple") | ("white"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BossEvent$BossBarColor$$Original = $BossEvent$BossBarColor;}
declare module "net.minecraft.world.Container" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ContainerMixin$$Interface} from "net.caffeinemc.mods.lithium.mixin.block.hopper.ContainerMixin"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LithiumCooldownReceivingInventory$$Interface} from "net.caffeinemc.mods.lithium.api.inventory.LithiumCooldownReceivingInventory"
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$Clearable$$Interface} from "net.minecraft.world.Clearable"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$LithiumTransferConditionInventory$$Interface} from "net.caffeinemc.mods.lithium.api.inventory.LithiumTransferConditionInventory"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Set$$Type} from "java.util.Set"
import {$ContainerKJS$$Interface} from "dev.latvian.mods.kubejs.core.ContainerKJS"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $Container$$Interface extends $Clearable$$Interface, $LithiumCooldownReceivingInventory$$Interface, $ContainerMixin$$Interface, $LithiumTransferConditionInventory$$Interface, $ContainerKJS$$Interface {
get "empty"(): boolean
get "containerSize"(): integer
get "maxStackSize"(): integer
get "changed"(): void
set "transferCooldown"(value: long)
get "width"(): integer
get "height"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "changed"(): void
get "empty"(): boolean
get "allItems"(): $List<($ItemStack)>
}

export class $Container implements $Container$$Interface {
static readonly "DEFAULT_DISTANCE_BUFFER": float

 "isEmpty"(): boolean
 "getItem"(arg0: integer): $ItemStack
 "canPlaceItem"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "removeItemNoUpdate"(arg0: integer): $ItemStack
 "getContainerSize"(): integer
 "removeItem"(arg0: integer, arg1: integer): $ItemStack
 "getMaxStackSize"(): integer
 "getMaxStackSize"(arg0: $ItemStack$$Type): integer
 "hasAnyMatching"(arg0: $Predicate$$Type<($ItemStack)>): boolean
 "stillValid"(arg0: $Player$$Type): boolean
 "setChanged"(): void
 "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
 "stopOpen"(arg0: $Player$$Type): void
 "hasAnyOf"(arg0: $Set$$Type<($Item$$Type)>): boolean
 "countItem"(arg0: $Item$$Type): integer
 "startOpen"(arg0: $Player$$Type): void
 "canTakeItem"(arg0: $Container$$Type, arg1: integer, arg2: $ItemStack$$Type): boolean
static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
static "tryClear"(arg0: any): void
 "clearContent"(): void
 "canReceiveTransferCooldown"(): boolean
 "setTransferCooldown"(arg0: long): void
 "lithium$itemInsertionTestRequiresStackSize1"(): boolean
 "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
 "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
 "getWidth"(): integer
 "getHeight"(): integer
 "isMutable"(): boolean
 "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
 "getSlots"(): integer
 "getSlotLimit"(slot: integer): integer
 "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
 "setChanged"(): void
 "getStackInSlot"(slot: integer): $ItemStack
 "asContainer"(): $Container
 "clear"(): void
 "self"(): $Container
 "getBlock"(level: $Level$$Type): $LevelBlock
 "isEmpty"(): boolean
 "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
 "countNonEmpty"(): integer
 "countNonEmpty"(match: $ItemPredicate$$Type): integer
 "getAllItems"(): $List<($ItemStack)>
 "clear"(match: $ItemPredicate$$Type): void
 "find"(): integer
 "find"(match: $ItemPredicate$$Type): integer
 "count"(): integer
 "count"(match: $ItemPredicate$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Container$$Type = ($Container);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Container$$Original = $Container;}
declare module "net.minecraft.world.Clearable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Clearable$$Interface {

(): void
}

export class $Clearable implements $Clearable$$Interface {
static "tryClear"(arg0: any): void
 "clearContent"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Clearable$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Clearable$$Original = $Clearable;}
declare module "net.minecraft.world.InteractionResultHolder" {
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"

export class $InteractionResultHolder<T> {
constructor(arg0: $InteractionResult$$Type, arg1: T)

public static "fail"<T>(arg0: T): $InteractionResultHolder<(T)>
public "getObject"(): T
public static "pass"<T>(arg0: T): $InteractionResultHolder<(T)>
public static "success"<T>(arg0: T): $InteractionResultHolder<(T)>
public static "consume"<T>(arg0: T): $InteractionResultHolder<(T)>
public "getResult"(): $InteractionResult
public static "sidedSuccess"<T>(arg0: T, arg1: boolean): $InteractionResultHolder<(T)>
get "object"(): T
get "result"(): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InteractionResultHolder$$Type<T> = ($InteractionResultHolder<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InteractionResultHolder$$Original<T> = $InteractionResultHolder<(T)>;}
declare module "net.minecraft.world.LockCode" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Record} from "java.lang.Record"

export class $LockCode extends $Record {
static readonly "CODEC": $Codec<($LockCode)>
static readonly "NO_LOCK": $LockCode
static readonly "TAG_LOCK": StringJS

constructor(arg0: StringJS)

public "unlocksWith"(arg0: $ItemStack$$Type): boolean
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "key"(): StringJS
public static "fromTag"(arg0: $CompoundTag$$Type): $LockCode
public "addToTag"(arg0: $CompoundTag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LockCode$$Type = ({"key"?: StringJS}) | ([key?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LockCode$$Original = $LockCode;}
declare module "net.minecraft.world.TickRateManager" {
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $TickRateManager {
static readonly "MIN_TICKRATE": float
 "runGameElements": boolean

constructor()

public "isFrozen"(): boolean
public "tick"(): void
public "tickrate"(): float
public "runsNormally"(): boolean
public "isEntityFrozen"(arg0: $Entity$$Type): boolean
public "millisecondsPerTick"(): float
public "setFrozen"(arg0: boolean): void
public "setFrozenTicksToRun"(arg0: integer): void
public "nanosecondsPerTick"(): long
public "setTickRate"(arg0: float): void
public "isSteppingForward"(): boolean
public "frozenTicksToRun"(): integer
get "frozen"(): boolean
set "frozen"(value: boolean)
set "tickRate"(value: float)
get "steppingForward"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickRateManager$$Type = ($TickRateManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TickRateManager$$Original = $TickRateManager;}
declare module "net.minecraft.world.InteractionResult" {
import {$Enum} from "java.lang.Enum"

export class $InteractionResult extends $Enum<($InteractionResult)> {
static readonly "SUCCESS": $InteractionResult
static readonly "PASS": $InteractionResult
static readonly "CONSUME_PARTIAL": $InteractionResult
static readonly "SUCCESS_NO_ITEM_USED": $InteractionResult
static readonly "CONSUME": $InteractionResult
static readonly "FAIL": $InteractionResult

public static "values"(): ($InteractionResult)[]
public static "valueOf"(arg0: StringJS): $InteractionResult
public static "sidedSuccess"(arg0: boolean): $InteractionResult
public "indicateItemUse"(): boolean
public "consumesAction"(): boolean
public "shouldSwing"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InteractionResult$$Type = (("success") | ("success_no_item_used") | ("consume") | ("consume_partial") | ("pass") | ("fail"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InteractionResult$$Original = $InteractionResult;}
declare module "net.minecraft.world.SimpleContainer" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$SpecialLogicInventory$$Interface} from "net.fabricmc.fabric.impl.transfer.item.SpecialLogicInventory"
import {$List} from "java.util.List"
import {$StackedContentsCompatible$$Interface} from "net.minecraft.world.inventory.StackedContentsCompatible"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$TransactionContext$$Type} from "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext"
import {$ListTag, $ListTag$$Type} from "net.minecraft.nbt.ListTag"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$Container, $Container$$Type, $Container$$Interface} from "net.minecraft.world.Container"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$ContainerListener$$Type} from "net.minecraft.world.ContainerListener"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Set$$Type} from "java.util.Set"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$StackedContents$$Type} from "net.minecraft.world.entity.player.StackedContents"
import {$IEntityOwnedInventory$$Interface} from "fi.dy.masa.malilib.util.IEntityOwnedInventory"

export class $SimpleContainer implements $Container$$Interface, $StackedContentsCompatible$$Interface, $IEntityOwnedInventory$$Interface, $SpecialLogicInventory$$Interface {
 "size": integer
 "entityOwner": $Entity
 "items": $NonNullList<($ItemStack)>

constructor(arg0: integer)
constructor(...arg0: ($ItemStack$$Type)[])

public "toString"(): StringJS
public "isEmpty"(): boolean
public "getItem"(arg0: integer): $ItemStack
public "removeItemType"(arg0: $Item$$Type, arg1: integer): $ItemStack
public "addItem"(arg0: $ItemStack$$Type): $ItemStack
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "getContainerSize"(): integer
public "getItems"(): $NonNullList<($ItemStack)>
public "removeAllItems"(): $List<($ItemStack)>
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "fillStackedContents"(arg0: $StackedContents$$Type): void
public "canAddItem"(arg0: $ItemStack$$Type): boolean
public "fabric_setSuppress"(arg0: boolean): void
public "removeListener"(arg0: $ContainerListener$$Type): void
public "addListener"(arg0: $ContainerListener$$Type): void
public "createTag"(arg0: $HolderLookup$Provider$$Type): $ListTag
public "stillValid"(arg0: $Player$$Type): boolean
public "fromTag"(arg0: $ListTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "setChanged"(): void
public "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
public "clearContent"(): void
public "malilib$getEntityOwner"(): $Entity
public "malilib$setEntityOwner"(entityOwner: $Entity$$Type): void
public "redirect$emm000$fabric_transfer_api_v1$fabric_redirectMarkDirty"(arg0: $SimpleContainer$$Type): void
public "fabric_onFinalCommit"(arg0: integer, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): void
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "getMaxStackSize"(): integer
public "getMaxStackSize"(arg0: $ItemStack$$Type): integer
public "hasAnyMatching"(arg0: $Predicate$$Type<($ItemStack)>): boolean
public "stopOpen"(arg0: $Player$$Type): void
public "hasAnyOf"(arg0: $Set$$Type<($Item$$Type)>): boolean
public "countItem"(arg0: $Item$$Type): integer
public "startOpen"(arg0: $Player$$Type): void
public "canTakeItem"(arg0: $Container$$Type, arg1: integer, arg2: $ItemStack$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public "fabric_onTransfer"(arg0: integer, arg1: $TransactionContext$$Type): void
public static "tryClear"(arg0: any): void
public "canReceiveTransferCooldown"(): boolean
public "setTransferCooldown"(arg0: long): void
public "lithium$itemInsertionTestRequiresStackSize1"(): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "getWidth"(): integer
public "getHeight"(): integer
public "isMutable"(): boolean
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "getSlots"(): integer
public "getSlotLimit"(slot: integer): integer
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "setChanged"(): void
public "getStackInSlot"(slot: integer): $ItemStack
public "asContainer"(): $Container
public "clear"(): void
public "self"(): $Container
public "getBlock"(level: $Level$$Type): $LevelBlock
public "isEmpty"(): boolean
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "countNonEmpty"(): integer
public "countNonEmpty"(match: $ItemPredicate$$Type): integer
public "getAllItems"(): $List<($ItemStack)>
public "clear"(match: $ItemPredicate$$Type): void
public "find"(): integer
public "find"(match: $ItemPredicate$$Type): integer
public "count"(): integer
public "count"(match: $ItemPredicate$$Type): integer
get "empty"(): boolean
get "containerSize"(): integer
get "changed"(): void
get "maxStackSize"(): integer
set "transferCooldown"(value: long)
get "width"(): integer
get "height"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "changed"(): void
get "empty"(): boolean
get "allItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleContainer$$Type = ($SimpleContainer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleContainer$$Original = $SimpleContainer;}
declare module "net.minecraft.world.RandomSequences" {
import {$RandomSource} from "net.minecraft.util.RandomSource"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$RandomSequence$$Type} from "net.minecraft.world.RandomSequence"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$SavedData} from "net.minecraft.world.level.saveddata.SavedData"
import {$SavedData$Factory} from "net.minecraft.world.level.saveddata.SavedData$Factory"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $RandomSequences extends $SavedData {
constructor(arg0: long)

public "reset"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: boolean, arg3: boolean): void
public "reset"(arg0: $ResourceLocation$$Type): void
public "get"(arg0: $ResourceLocation$$Type): $RandomSource
public static "load"(arg0: long, arg1: $CompoundTag$$Type): $RandomSequences
public "clear"(): integer
public static "factory"(arg0: long): $SavedData$Factory<($RandomSequences)>
public "save"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): $CompoundTag
public "setSeedDefaults"(arg0: integer, arg1: boolean, arg2: boolean): void
public "forAllSequences"(arg0: $BiConsumer$$Type<($ResourceLocation), ($RandomSequence)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RandomSequences$$Type = ($RandomSequences);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RandomSequences$$Original = $RandomSequences;}
declare module "net.minecraft.world.ContainerListener" {
import {$Container, $Container$$Type} from "net.minecraft.world.Container"

export interface $ContainerListener$$Interface {

(arg0: $Container): void
}

export class $ContainerListener implements $ContainerListener$$Interface {
 "containerChanged"(arg0: $Container$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerListener$$Type = ((arg0: $Container) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContainerListener$$Original = $ContainerListener;}
declare module "net.minecraft.world.BossEvent" {
import {$BossEvent$BossBarColor, $BossEvent$BossBarColor$$Type} from "net.minecraft.world.BossEvent$BossBarColor"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$BossEvent$BossBarOverlay, $BossEvent$BossBarOverlay$$Type} from "net.minecraft.world.BossEvent$BossBarOverlay"

export class $BossEvent {
 "darkenScreen": boolean
 "playBossMusic": boolean
 "color": $BossEvent$BossBarColor
 "overlay": $BossEvent$BossBarOverlay
 "name": $Component
 "progress": float
 "createWorldFog": boolean

constructor(arg0: $UUID$$Type, arg1: $Component$$Type, arg2: $BossEvent$BossBarColor$$Type, arg3: $BossEvent$BossBarOverlay$$Type)

public "getName"(): $Component
public "setName"(arg0: $Component$$Type): void
public "getId"(): $UUID
public "setColor"(arg0: $BossEvent$BossBarColor$$Type): void
public "getOverlay"(): $BossEvent$BossBarOverlay
public "setDarkenScreen"(arg0: boolean): $BossEvent
public "setPlayBossMusic"(arg0: boolean): $BossEvent
public "setCreateWorldFog"(arg0: boolean): $BossEvent
public "shouldCreateWorldFog"(): boolean
public "shouldDarkenScreen"(): boolean
public "setOverlay"(arg0: $BossEvent$BossBarOverlay$$Type): void
public "getProgress"(): float
public "setProgress"(arg0: float): void
public "getColor"(): $BossEvent$BossBarColor
public "shouldPlayBossMusic"(): boolean
get "id"(): $UUID
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BossEvent$$Type = ($BossEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BossEvent$$Original = $BossEvent;}
declare module "net.minecraft.world.MenuProvider" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$MenuConstructor$$Interface} from "net.minecraft.world.inventory.MenuConstructor"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Component} from "net.minecraft.network.chat.Component"
import {$FabricScreenHandlerFactory$$Interface} from "net.fabricmc.fabric.api.screenhandler.v1.FabricScreenHandlerFactory"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$IMenuProviderExtension$$Interface} from "net.neoforged.neoforge.client.extensions.IMenuProviderExtension"

export interface $MenuProvider$$Interface extends $MenuConstructor$$Interface, $IMenuProviderExtension$$Interface, $FabricScreenHandlerFactory$$Interface {
get "displayName"(): $Component
}

export class $MenuProvider implements $MenuProvider$$Interface {
 "getDisplayName"(): $Component
 "shouldTriggerClientSideContainerClosingOnOpen"(): boolean
 "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
 "writeClientSideData"(arg0: $AbstractContainerMenu$$Type, arg1: $RegistryFriendlyByteBuf$$Type): void
 "shouldCloseCurrentScreen"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuProvider$$Type = ($MenuProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MenuProvider$$Original = $MenuProvider;}
declare module "net.minecraft.world.BossEvent$BossBarOverlay" {
import {$Enum} from "java.lang.Enum"

export class $BossEvent$BossBarOverlay extends $Enum<($BossEvent$BossBarOverlay)> {
static readonly "NOTCHED_6": $BossEvent$BossBarOverlay
static readonly "NOTCHED_12": $BossEvent$BossBarOverlay
static readonly "PROGRESS": $BossEvent$BossBarOverlay
static readonly "NOTCHED_20": $BossEvent$BossBarOverlay
static readonly "NOTCHED_10": $BossEvent$BossBarOverlay

public "getName"(): StringJS
public static "values"(): ($BossEvent$BossBarOverlay)[]
public static "valueOf"(arg0: StringJS): $BossEvent$BossBarOverlay
public static "byName"(arg0: StringJS): $BossEvent$BossBarOverlay
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BossEvent$BossBarOverlay$$Type = (("progress") | ("notched_6") | ("notched_10") | ("notched_12") | ("notched_20"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BossEvent$BossBarOverlay$$Original = $BossEvent$BossBarOverlay;}
declare module "net.minecraft.world.Difficulty" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Codec} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Component} from "net.minecraft.network.chat.Component"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $Difficulty extends $Enum<($Difficulty)> implements $StringRepresentable$$Interface {
static readonly "EASY": $Difficulty
static readonly "CODEC": $StringRepresentable$EnumCodec<($Difficulty)>
static readonly "PEACEFUL": $Difficulty
static readonly "HARD": $Difficulty
static readonly "NORMAL": $Difficulty

public static "values"(): ($Difficulty)[]
public static "valueOf"(arg0: StringJS): $Difficulty
public "getKey"(): StringJS
public "getId"(): integer
public "getDisplayName"(): $Component
public "getInfo"(): $Component
public "getSerializedName"(): StringJS
public static "byName"(arg0: StringJS): $Difficulty
public static "byId"(arg0: integer): $Difficulty
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
get "key"(): StringJS
get "id"(): integer
get "displayName"(): $Component
get "info"(): $Component
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Difficulty$$Type = (("peaceful") | ("easy") | ("normal") | ("hard"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Difficulty$$Original = $Difficulty;}
declare module "net.minecraft.world.ItemInteractionResult" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Enum} from "java.lang.Enum"

export class $ItemInteractionResult extends $Enum<($ItemInteractionResult)> {
static readonly "SUCCESS": $ItemInteractionResult
static readonly "SKIP_DEFAULT_BLOCK_INTERACTION": $ItemInteractionResult
static readonly "CONSUME_PARTIAL": $ItemInteractionResult
static readonly "CONSUME": $ItemInteractionResult
static readonly "PASS_TO_DEFAULT_BLOCK_INTERACTION": $ItemInteractionResult
static readonly "FAIL": $ItemInteractionResult

public static "values"(): ($ItemInteractionResult)[]
public static "valueOf"(arg0: StringJS): $ItemInteractionResult
public "result"(): $InteractionResult
public static "sidedSuccess"(arg0: boolean): $ItemInteractionResult
public "consumesAction"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemInteractionResult$$Type = (("success") | ("consume") | ("consume_partial") | ("pass_to_default_block_interaction") | ("skip_default_block_interaction") | ("fail"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemInteractionResult$$Original = $ItemInteractionResult;}
declare module "net.minecraft.world.RandomizableContainer" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$List} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$Container, $Container$$Type, $Container$$Interface} from "net.minecraft.world.Container"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Set$$Type} from "java.util.Set"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $RandomizableContainer$$Interface extends $Container$$Interface {
get "level"(): $Level
set "lootTable"(value: $ResourceKey$$Type<($LootTable)>)
get "blockPos"(): $BlockPos
set "lootTableSeed"(value: long)
get "lootTable"(): $ResourceKey<($LootTable)>
get "lootTableSeed"(): long
get "empty"(): boolean
get "containerSize"(): integer
get "maxStackSize"(): integer
get "changed"(): void
set "transferCooldown"(value: long)
get "width"(): integer
get "height"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "changed"(): void
get "empty"(): boolean
get "allItems"(): $List<($ItemStack)>
}

export class $RandomizableContainer implements $RandomizableContainer$$Interface {
static readonly "LOOT_TABLE_SEED_TAG": StringJS
static readonly "LOOT_TABLE_TAG": StringJS

 "getLevel"(): $Level
 "tryLoadLootTable"(arg0: $CompoundTag$$Type): boolean
 "trySaveLootTable"(arg0: $CompoundTag$$Type): boolean
 "unpackLootTable"(arg0: $Player$$Type): void
 "setLootTable"(arg0: $ResourceKey$$Type<($LootTable)>): void
 "setLootTable"(arg0: $ResourceKey$$Type<($LootTable)>, arg1: long): void
 "getBlockPos"(): $BlockPos
 "setLootTableSeed"(arg0: long): void
 "getLootTable"(): $ResourceKey<($LootTable)>
 "getLootTableSeed"(): long
static "setBlockEntityLootTable"(arg0: $BlockGetter$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $ResourceKey$$Type<($LootTable)>): void
 "isEmpty"(): boolean
 "getItem"(arg0: integer): $ItemStack
 "canPlaceItem"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "removeItemNoUpdate"(arg0: integer): $ItemStack
 "getContainerSize"(): integer
 "removeItem"(arg0: integer, arg1: integer): $ItemStack
 "getMaxStackSize"(): integer
 "getMaxStackSize"(arg0: $ItemStack$$Type): integer
 "hasAnyMatching"(arg0: $Predicate$$Type<($ItemStack)>): boolean
 "stillValid"(arg0: $Player$$Type): boolean
 "setChanged"(): void
 "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
 "stopOpen"(arg0: $Player$$Type): void
 "hasAnyOf"(arg0: $Set$$Type<($Item$$Type)>): boolean
 "countItem"(arg0: $Item$$Type): integer
 "startOpen"(arg0: $Player$$Type): void
 "canTakeItem"(arg0: $Container$$Type, arg1: integer, arg2: $ItemStack$$Type): boolean
static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
static "tryClear"(arg0: any): void
 "clearContent"(): void
 "canReceiveTransferCooldown"(): boolean
 "setTransferCooldown"(arg0: long): void
 "lithium$itemInsertionTestRequiresStackSize1"(): boolean
 "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
 "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
 "getWidth"(): integer
 "getHeight"(): integer
 "isMutable"(): boolean
 "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
 "getSlots"(): integer
 "getSlotLimit"(slot: integer): integer
 "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
 "setChanged"(): void
 "getStackInSlot"(slot: integer): $ItemStack
 "asContainer"(): $Container
 "clear"(): void
 "self"(): $Container
 "getBlock"(level: $Level$$Type): $LevelBlock
 "isEmpty"(): boolean
 "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
 "countNonEmpty"(): integer
 "countNonEmpty"(match: $ItemPredicate$$Type): integer
 "getAllItems"(): $List<($ItemStack)>
 "clear"(match: $ItemPredicate$$Type): void
 "find"(): integer
 "find"(match: $ItemPredicate$$Type): integer
 "count"(): integer
 "count"(match: $ItemPredicate$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RandomizableContainer$$Type = ($RandomizableContainer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RandomizableContainer$$Original = $RandomizableContainer;}
declare module "net.minecraft.world.RandomSequence" {
import {$RandomSource} from "net.minecraft.util.RandomSource"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional$$Type} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$XoroshiroRandomSource$$Type} from "net.minecraft.world.level.levelgen.XoroshiroRandomSource"
import {$RandomSupport$Seed128bit} from "net.minecraft.world.level.levelgen.RandomSupport$Seed128bit"

export class $RandomSequence {
static readonly "CODEC": $Codec<($RandomSequence)>

constructor(arg0: long, arg1: ($ResourceLocation$$Type)?)
constructor(arg0: long, arg1: $ResourceLocation$$Type)
constructor(arg0: $XoroshiroRandomSource$$Type)

public "random"(): $RandomSource
public static "seedForKey"(arg0: $ResourceLocation$$Type): $RandomSupport$Seed128bit
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RandomSequence$$Type = ($RandomSequence);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RandomSequence$$Original = $RandomSequence;}
declare module "net.minecraft.world.DifficultyInstance" {
import {$Difficulty, $Difficulty$$Type} from "net.minecraft.world.Difficulty"

export class $DifficultyInstance {
constructor(arg0: $Difficulty$$Type, arg1: long, arg2: long, arg3: float)

public "getEffectiveDifficulty"(): float
public "isHarderThan"(arg0: float): boolean
public "getDifficulty"(): $Difficulty
public "getSpecialMultiplier"(): float
public "isHard"(): boolean
get "effectiveDifficulty"(): float
get "difficulty"(): $Difficulty
get "specialMultiplier"(): float
get "hard"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DifficultyInstance$$Type = ($DifficultyInstance);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DifficultyInstance$$Original = $DifficultyInstance;}
declare module "net.minecraft.world.Nameable" {
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $Nameable$$Interface {

(): $Component$$Type
get "name"(): $Component
get "displayName"(): $Component
get "customName"(): $Component
}

export class $Nameable implements $Nameable$$Interface {
 "getName"(): $Component
 "getDisplayName"(): $Component
 "getCustomName"(): $Component
 "hasCustomName"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Nameable$$Type = (() => $Component$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Nameable$$Original = $Nameable;}
declare module "net.minecraft.world.InteractionHand" {
import {$Enum} from "java.lang.Enum"

export class $InteractionHand extends $Enum<($InteractionHand)> {
static readonly "MAIN_HAND": $InteractionHand
static readonly "OFF_HAND": $InteractionHand

public static "values"(): ($InteractionHand)[]
public static "valueOf"(arg0: StringJS): $InteractionHand
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InteractionHand$$Type = (("main_hand") | ("off_hand"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InteractionHand$$Original = $InteractionHand;}
declare module "net.minecraft.world.WorldlyContainer" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$List} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$Container, $Container$$Type, $Container$$Interface} from "net.minecraft.world.Container"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Set$$Type} from "java.util.Set"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $WorldlyContainer$$Interface extends $Container$$Interface {
get "empty"(): boolean
get "containerSize"(): integer
get "maxStackSize"(): integer
get "changed"(): void
set "transferCooldown"(value: long)
get "width"(): integer
get "height"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "changed"(): void
get "empty"(): boolean
get "allItems"(): $List<($ItemStack)>
}

export class $WorldlyContainer implements $WorldlyContainer$$Interface {
 "canTakeItemThroughFace"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Direction$$Type): boolean
 "canPlaceItemThroughFace"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Direction$$Type): boolean
 "getSlotsForFace"(arg0: $Direction$$Type): (integer)[]
 "isEmpty"(): boolean
 "getItem"(arg0: integer): $ItemStack
 "canPlaceItem"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "removeItemNoUpdate"(arg0: integer): $ItemStack
 "getContainerSize"(): integer
 "removeItem"(arg0: integer, arg1: integer): $ItemStack
 "getMaxStackSize"(): integer
 "getMaxStackSize"(arg0: $ItemStack$$Type): integer
 "hasAnyMatching"(arg0: $Predicate$$Type<($ItemStack)>): boolean
 "stillValid"(arg0: $Player$$Type): boolean
 "setChanged"(): void
 "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
 "stopOpen"(arg0: $Player$$Type): void
 "hasAnyOf"(arg0: $Set$$Type<($Item$$Type)>): boolean
 "countItem"(arg0: $Item$$Type): integer
 "startOpen"(arg0: $Player$$Type): void
 "canTakeItem"(arg0: $Container$$Type, arg1: integer, arg2: $ItemStack$$Type): boolean
static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
static "tryClear"(arg0: any): void
 "clearContent"(): void
 "canReceiveTransferCooldown"(): boolean
 "setTransferCooldown"(arg0: long): void
 "lithium$itemInsertionTestRequiresStackSize1"(): boolean
 "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
 "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
 "getWidth"(): integer
 "getHeight"(): integer
 "isMutable"(): boolean
 "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
 "getSlots"(): integer
 "getSlotLimit"(slot: integer): integer
 "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
 "setChanged"(): void
 "getStackInSlot"(slot: integer): $ItemStack
 "asContainer"(): $Container
 "clear"(): void
 "self"(): $Container
 "getBlock"(level: $Level$$Type): $LevelBlock
 "isEmpty"(): boolean
 "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
 "countNonEmpty"(): integer
 "countNonEmpty"(match: $ItemPredicate$$Type): integer
 "getAllItems"(): $List<($ItemStack)>
 "clear"(match: $ItemPredicate$$Type): void
 "find"(): integer
 "find"(match: $ItemPredicate$$Type): integer
 "count"(): integer
 "count"(match: $ItemPredicate$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldlyContainer$$Type = ($WorldlyContainer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldlyContainer$$Original = $WorldlyContainer;}
