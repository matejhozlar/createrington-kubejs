declare module "top.theillusivec4.curios.api.event.CurioDropsEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$ICuriosItemHandler, $ICuriosItemHandler$$Type} from "top.theillusivec4.curios.api.type.capability.ICuriosItemHandler"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ItemEntity, $ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"

export class $CurioDropsEvent extends $LivingEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $LivingEntity$$Type, arg1: $ICuriosItemHandler$$Type, arg2: $DamageSource$$Type, arg3: $Collection$$Type<($ItemEntity$$Type)>, arg4: integer, arg5: boolean)

public "getSource"(): $DamageSource
public "getLootingLevel"(): integer
public "getCurioHandler"(): $ICuriosItemHandler
public "isRecentlyHit"(): boolean
public "getDrops"(): $Collection<($ItemEntity)>
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "source"(): $DamageSource
get "lootingLevel"(): integer
get "curioHandler"(): $ICuriosItemHandler
get "recentlyHit"(): boolean
get "drops"(): $Collection<($ItemEntity)>
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioDropsEvent$$Type = ($CurioDropsEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioDropsEvent$$Original = $CurioDropsEvent;}
declare module "top.theillusivec4.curios.api.event.DropRulesEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$ICuriosItemHandler, $ICuriosItemHandler$$Type} from "top.theillusivec4.curios.api.type.capability.ICuriosItemHandler"
import {$ICurio$DropRule, $ICurio$DropRule$$Type} from "top.theillusivec4.curios.api.type.capability.ICurio$DropRule"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ImmutableList} from "com.google.common.collect.ImmutableList"
import {$Tuple} from "net.minecraft.util.Tuple"

export class $DropRulesEvent extends $LivingEvent {
constructor(arg0: $LivingEntity$$Type, arg1: $ICuriosItemHandler$$Type, arg2: $DamageSource$$Type, arg3: integer, arg4: boolean)

public "getSource"(): $DamageSource
public "getOverrides"(): $ImmutableList<($Tuple<($Predicate<($ItemStack)>), ($ICurio$DropRule)>)>
public "getLootingLevel"(): integer
public "getCurioHandler"(): $ICuriosItemHandler
public "addOverride"(arg0: $Predicate$$Type<($ItemStack)>, arg1: $ICurio$DropRule$$Type): void
public "isRecentlyHit"(): boolean
get "source"(): $DamageSource
get "overrides"(): $ImmutableList<($Tuple<($Predicate<($ItemStack)>), ($ICurio$DropRule)>)>
get "lootingLevel"(): integer
get "curioHandler"(): $ICuriosItemHandler
get "recentlyHit"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DropRulesEvent$$Type = ($DropRulesEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DropRulesEvent$$Original = $DropRulesEvent;}
declare module "top.theillusivec4.curios.api.extensions.ICurioSlotExtension" {
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Component} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export interface $ICurioSlotExtension$$Interface {
}

export class $ICurioSlotExtension implements $ICurioSlotExtension$$Interface {
static readonly "DEFAULT": $ICurioSlotExtension

static "from"(arg0: StringJS): $ICurioSlotExtension
 "getSlotTooltip"(arg0: $SlotContext$$Type, arg1: $TooltipFlag$$Type): $List<($Component)>
 "getDisplayStack"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): $ItemStack
 "getCloneStack"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICurioSlotExtension$$Type = ($ICurioSlotExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICurioSlotExtension$$Original = $ICurioSlotExtension;}
declare module "top.theillusivec4.curios.api.event.CurioCanUnequipEvent" {
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$TriState, $TriState$$Type} from "net.neoforged.neoforge.common.util.TriState"

export class $CurioCanUnequipEvent extends $LivingEvent {
constructor(arg0: $ItemStack$$Type, arg1: $SlotContext$$Type)

public "getStack"(): $ItemStack
public "getSlotContext"(): $SlotContext
public "setUnequipResult"(arg0: $TriState$$Type): void
public "getUnequipResult"(): $TriState
get "stack"(): $ItemStack
get "slotContext"(): $SlotContext
set "unequipResult"(value: $TriState$$Type)
get "unequipResult"(): $TriState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioCanUnequipEvent$$Type = ($CurioCanUnequipEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioCanUnequipEvent$$Original = $CurioCanUnequipEvent;}
declare module "top.theillusivec4.curios.api.event.CurioCanEquipEvent" {
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$TriState, $TriState$$Type} from "net.neoforged.neoforge.common.util.TriState"

export class $CurioCanEquipEvent extends $LivingEvent {
constructor(arg0: $ItemStack$$Type, arg1: $SlotContext$$Type, arg2: $TriState$$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: $ItemStack$$Type, arg1: $SlotContext$$Type)

public "getStack"(): $ItemStack
public "getSlotContext"(): $SlotContext
public "setEquipResult"(arg0: $TriState$$Type): void
public "getEquipResult"(): $TriState
get "stack"(): $ItemStack
get "slotContext"(): $SlotContext
set "equipResult"(value: $TriState$$Type)
get "equipResult"(): $TriState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioCanEquipEvent$$Type = ($CurioCanEquipEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioCanEquipEvent$$Original = $CurioCanEquipEvent;}
declare module "top.theillusivec4.curios.api.event.CurioAttributeModifierEvent" {
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Collection} from "java.util.Collection"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $CurioAttributeModifierEvent extends $Event {
constructor(arg0: $ItemStack$$Type, arg1: $SlotContext$$Type, arg2: $ResourceLocation$$Type, arg3: $Multimap$$Type<($Holder$$Type<($Attribute$$Type)>), ($AttributeModifier$$Type)>)

public "getModifiers"(): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "getId"(): $ResourceLocation
public "removeAttribute"(arg0: $Holder$$Type<($Attribute)>): $Collection<($AttributeModifier)>
public "getOriginalModifiers"(): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "removeModifier"(arg0: $Holder$$Type<($Attribute)>, arg1: $AttributeModifier$$Type): boolean
public "getItemStack"(): $ItemStack
public "clearModifiers"(): void
public "addModifier"(arg0: $Holder$$Type<($Attribute)>, arg1: $AttributeModifier$$Type): boolean
public "getSlotContext"(): $SlotContext
get "modifiers"(): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
get "id"(): $ResourceLocation
get "originalModifiers"(): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
get "itemStack"(): $ItemStack
get "slotContext"(): $SlotContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioAttributeModifierEvent$$Type = ($CurioAttributeModifierEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioAttributeModifierEvent$$Original = $CurioAttributeModifierEvent;}
declare module "top.theillusivec4.curios.api.event.SlotModifiersUpdatedEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Set, $Set$$Type} from "java.util.Set"

export class $SlotModifiersUpdatedEvent extends $LivingEvent {
constructor(arg0: $LivingEntity$$Type, arg1: $Set$$Type<(StringJS)>)

public "getTypes"(): $Set<(StringJS)>
get "types"(): $Set<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotModifiersUpdatedEvent$$Type = ($SlotModifiersUpdatedEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlotModifiersUpdatedEvent$$Original = $SlotModifiersUpdatedEvent;}
declare module "top.theillusivec4.curios.api.event.CurioChangeEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $CurioChangeEvent extends $LivingEvent {
constructor(arg0: $LivingEntity$$Type, arg1: StringJS, arg2: integer, arg3: $ItemStack$$Type, arg4: $ItemStack$$Type)

public "getIdentifier"(): StringJS
public "getFrom"(): $ItemStack
public "getTo"(): $ItemStack
public "getSlotIndex"(): integer
get "identifier"(): StringJS
get "from"(): $ItemStack
get "to"(): $ItemStack
get "slotIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioChangeEvent$$Type = ($CurioChangeEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioChangeEvent$$Original = $CurioChangeEvent;}
declare module "top.theillusivec4.curios.api.type.inventory.ICurioStacksHandler" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection} from "java.util.Collection"
import {$IDynamicStackHandler} from "top.theillusivec4.curios.api.type.inventory.IDynamicStackHandler"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map} from "java.util.Map"
import {$AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$ICurio$DropRule} from "top.theillusivec4.curios.api.type.capability.ICurio$DropRule"
import {$Set} from "java.util.Set"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export interface $ICurioStacksHandler$$Interface {
get "identifier"(): StringJS
get "stacks"(): $IDynamicStackHandler
get "modifiers"(): $Map<($ResourceLocation), ($AttributeModifier)>
get "slots"(): integer
get "cosmeticStacks"(): $IDynamicStackHandler
get "dropRule"(): $ICurio$DropRule
get "activeStates"(): $NonNullList<(boolean)>
get "renders"(): $NonNullList<(boolean)>
get "visible"(): boolean
get "sizeShift"(): integer
get "cachedModifiers"(): $Set<($AttributeModifier)>
get "permanentModifiers"(): $Set<($AttributeModifier)>
get "syncTag"(): $CompoundTag
}

export class $ICurioStacksHandler implements $ICurioStacksHandler$$Interface {
 "getIdentifier"(): StringJS
 "getStacks"(): $IDynamicStackHandler
 "getModifiers"(): $Map<($ResourceLocation), ($AttributeModifier)>
 "update"(): void
/**
 * 
 * @deprecated
 */
 "grow"(arg0: integer): void
 "addPermanentModifier"(arg0: $AttributeModifier$$Type): void
 "getSlots"(): integer
 "getCosmeticStacks"(): $IDynamicStackHandler
 "getDropRule"(): $ICurio$DropRule
 "getActiveStates"(): $NonNullList<(boolean)>
 "addTransientModifier"(arg0: $AttributeModifier$$Type): void
 "removeModifier"(arg0: $ResourceLocation$$Type): void
/**
 * 
 * @deprecated
 */
 "shrink"(arg0: integer): void
 "getRenders"(): $NonNullList<(boolean)>
 "clearModifiers"(): void
 "isVisible"(): boolean
 "deserializeNBT"(arg0: $CompoundTag$$Type): void
 "serializeNBT"(): $CompoundTag
 "applySyncTag"(arg0: $CompoundTag$$Type): void
 "updateActiveState"(arg0: integer): void
/**
 * 
 * @deprecated
 */
 "getSizeShift"(): integer
 "copyModifiers"(arg0: $ICurioStacksHandler$$Type): void
 "getCachedModifiers"(): $Set<($AttributeModifier)>
 "getPermanentModifiers"(): $Set<($AttributeModifier)>
 "getModifiersByOperation"(arg0: $AttributeModifier$Operation$$Type): $Collection<($AttributeModifier)>
 "clearCachedModifiers"(): void
 "hasCosmetic"(): boolean
 "canToggleRendering"(): boolean
 "getSyncTag"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICurioStacksHandler$$Type = ($ICurioStacksHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICurioStacksHandler$$Original = $ICurioStacksHandler;}
declare module "top.theillusivec4.curios.api.SlotResult" {
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Record} from "java.lang.Record"

export class $SlotResult extends $Record {
constructor(slotContext: $SlotContext$$Type, stack: $ItemStack$$Type)

public "stack"(): $ItemStack
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "slotContext"(): $SlotContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotResult$$Type = ({"slotContext"?: $SlotContext$$Type, "stack"?: $ItemStack$$Type}) | ([slotContext?: $SlotContext$$Type, stack?: $ItemStack$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlotResult$$Original = $SlotResult;}
declare module "top.theillusivec4.curios.api.type.inventory.IDynamicStackHandler" {
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Container} from "net.minecraft.world.Container"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$List} from "java.util.List"
import {$IItemHandlerModifiable$$Interface} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IDynamicStackHandler$$Interface extends $IItemHandlerModifiable$$Interface {
get "slots"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "empty"(): boolean
get "width"(): integer
get "height"(): integer
get "changed"(): void
get "allItems"(): $List<($ItemStack)>
}

export class $IDynamicStackHandler implements $IDynamicStackHandler$$Interface {
 "grow"(arg0: integer): void
 "getSlots"(): integer
 "getStackInSlot"(arg0: integer): $ItemStack
 "shrink"(arg0: integer): void
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
 "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
 "setPreviousStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "getPreviousStackInSlot"(arg0: integer): $ItemStack
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "getSlotLimit"(arg0: integer): integer
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "isMutable"(): boolean
 "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
 "getSlots"(): integer
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "getStackInSlot"(arg0: integer): $ItemStack
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "kjs$self"(): $IItemHandler
 "getBlock"(level: $Level$$Type): $LevelBlock
 "isEmpty"(): boolean
 "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
 "getWidth"(): integer
 "getHeight"(): integer
 "countNonEmpty"(): integer
 "countNonEmpty"(match: $ItemPredicate$$Type): integer
 "setChanged"(): void
 "getAllItems"(): $List<($ItemStack)>
 "asContainer"(): $Container
 "clear"(): void
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
export type $IDynamicStackHandler$$Type = ($IDynamicStackHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IDynamicStackHandler$$Original = $IDynamicStackHandler;}
declare module "top.theillusivec4.curios.api.extensions.RegisterCuriosExtensionsEvent" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$ICurioSlotExtension$$Type} from "top.theillusivec4.curios.api.extensions.ICurioSlotExtension"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"

export class $RegisterCuriosExtensionsEvent extends $Event implements $IModBusEvent$$Interface {
constructor()

public "registerSlotExtension"(arg0: $ICurioSlotExtension$$Type, ...arg1: (StringJS)[]): void
public "isSlotExtensionRegistered"(arg0: StringJS): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterCuriosExtensionsEvent$$Type = ($RegisterCuriosExtensionsEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterCuriosExtensionsEvent$$Original = $RegisterCuriosExtensionsEvent;}
declare module "top.theillusivec4.curios.api.type.capability.ICuriosItemHandler" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Optional} from "java.util.Optional"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$List} from "java.util.List"
import {$SlotResult} from "top.theillusivec4.curios.api.SlotResult"
import {$ListTag, $ListTag$$Type} from "net.minecraft.nbt.ListTag"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ICurioStacksHandler, $ICurioStacksHandler$$Type} from "top.theillusivec4.curios.api.type.inventory.ICurioStacksHandler"
import {$AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$IItemHandlerModifiable} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Set} from "java.util.Set"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$Logger} from "org.slf4j.Logger"

export interface $ICuriosItemHandler$$Interface {
get "modifiers"(): $Multimap<(StringJS), ($AttributeModifier)>
get "updatingInventories"(): $Set<($ICurioStacksHandler)>
get "slots"(): integer
set "curios"(value: $Map$$Type<(StringJS), ($ICurioStacksHandler$$Type)>)
get "wearer"(): $LivingEntity
get "visibleSlots"(): integer
get "lockedSlots"(): $Set<(StringJS)>
get "fortuneBonus"(): integer
get "equippedCurios"(): $IItemHandlerModifiable
get "curios"(): $Map<(StringJS), ($ICurioStacksHandler)>
}

export class $ICuriosItemHandler implements $ICuriosItemHandler$$Interface {
static readonly "LOGGER": $Logger

 "reset"(): void
 "getModifiers"(): $Multimap<(StringJS), ($AttributeModifier)>
 "addTransientSlotModifiers"(arg0: $Multimap$$Type<(StringJS), ($AttributeModifier$$Type)>): void
 "addPermanentSlotModifier"(arg0: StringJS, arg1: $ResourceLocation$$Type, arg2: double, arg3: $AttributeModifier$Operation$$Type): void
 "removeSlotModifiers"(arg0: $Multimap$$Type<(StringJS), ($AttributeModifier$$Type)>): void
 "clearCachedSlotModifiers"(): void
 "handleInvalidStacks"(): void
 "getUpdatingInventories"(): $Set<($ICurioStacksHandler)>
 "addTransientSlotModifier"(arg0: StringJS, arg1: $ResourceLocation$$Type, arg2: double, arg3: $AttributeModifier$Operation$$Type): void
 "addPermanentSlotModifiers"(arg0: $Multimap$$Type<(StringJS), ($AttributeModifier$$Type)>): void
 "getSlots"(): integer
 "findCurios"(arg0: $Predicate$$Type<($ItemStack)>): $List<($SlotResult)>
 "findCurios"(arg0: $Predicate$$Type<($ItemStack)>, arg1: boolean, arg2: StringJS): $List<($SlotResult)>
 "findCurios"(...arg0: (StringJS)[]): $List<($SlotResult)>
 "findCurios"(arg0: $Item$$Type): $List<($SlotResult)>
 "findCurios"(arg0: boolean, ...arg1: (StringJS)[]): $List<($SlotResult)>
/**
 * 
 * @deprecated
 */
 "processSlots"(): void
 "findFirstCurio"(arg0: $Predicate$$Type<($ItemStack)>, arg1: StringJS): $Optional<($SlotResult)>
 "findFirstCurio"(arg0: $Item$$Type): $Optional<($SlotResult)>
 "findFirstCurio"(arg0: $Predicate$$Type<($ItemStack)>): $Optional<($SlotResult)>
 "findFirstCurio"(arg0: $Predicate$$Type<($ItemStack)>, arg1: boolean, arg2: StringJS): $Optional<($SlotResult)>
 "writeTag"(): $Tag
 "setCurios"(arg0: $Map$$Type<(StringJS), ($ICurioStacksHandler$$Type)>): void
 "readTag"(arg0: $Tag$$Type): void
 "getWearer"(): $LivingEntity
 "findCurio"(arg0: StringJS, arg1: integer, arg2: boolean): $Optional<($SlotResult)>
 "findCurio"(arg0: StringJS, arg1: integer): $Optional<($SlotResult)>
 "getVisibleSlots"(): integer
 "isSlotActive"(arg0: StringJS, arg1: integer): boolean
/**
 * 
 * @deprecated
 */
 "unlockSlotType"(arg0: StringJS, arg1: integer, arg2: boolean, arg3: boolean): void
 "setSlotsActive"(arg0: StringJS, arg1: boolean): void
/**
 * 
 * @deprecated
 */
 "growSlotType"(arg0: StringJS, arg1: integer): void
 "getStacksHandler"(arg0: StringJS): $Optional<($ICurioStacksHandler)>
 "setEquippedCurio"(arg0: StringJS, arg1: integer, arg2: $ItemStack$$Type): void
 "saveInventory"(arg0: boolean): $ListTag
 "setSlotActive"(arg0: StringJS, arg1: integer, arg2: boolean): void
 "loadInventory"(arg0: $ListTag$$Type): void
 "clearSlotModifiers"(): void
/**
 * 
 * @deprecated
 */
 "lockSlotType"(arg0: StringJS): void
/**
 * 
 * @deprecated
 */
 "shrinkSlotType"(arg0: StringJS, arg1: integer): void
/**
 * 
 * @deprecated
 */
 "getLockedSlots"(): $Set<(StringJS)>
 "removeSlotModifier"(arg0: StringJS, arg1: $ResourceLocation$$Type): void
 "loseInvalidStack"(arg0: $ItemStack$$Type): void
/**
 * 
 * @deprecated
 */
 "getFortuneBonus"(): integer
 "getLootingLevel"(arg0: $LootContext$$Type): integer
 "getEquippedCurios"(): $IItemHandlerModifiable
 "getFortuneLevel"(arg0: $LootContext$$Type): integer
 "getCurios"(): $Map<(StringJS), ($ICurioStacksHandler)>
 "isEquipped"(arg0: $Predicate$$Type<($ItemStack)>): boolean
 "isEquipped"(arg0: $Item$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICuriosItemHandler$$Type = ($ICuriosItemHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICuriosItemHandler$$Original = $ICuriosItemHandler;}
declare module "top.theillusivec4.curios.api.SlotContext" {
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Record} from "java.lang.Record"

export class $SlotContext extends $Record {
constructor(identifier: StringJS, entity: $LivingEntity$$Type, index: integer, cosmetic: boolean, visible: boolean)

public "index"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "visible"(): boolean
public "identifier"(): StringJS
public "entity"(): $LivingEntity
public "cosmetic"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotContext$$Type = ({"entity"?: $LivingEntity$$Type, "visible"?: boolean, "cosmetic"?: boolean, "index"?: integer, "identifier"?: StringJS}) | ([entity?: $LivingEntity$$Type, visible?: boolean, cosmetic?: boolean, index?: integer, identifier?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlotContext$$Original = $SlotContext;}
declare module "top.theillusivec4.curios.api.type.capability.ICurio$DropRule" {
import {$Enum} from "java.lang.Enum"

export class $ICurio$DropRule extends $Enum<($ICurio$DropRule)> {
static readonly "ALWAYS_KEEP": $ICurio$DropRule
static readonly "DESTROY": $ICurio$DropRule
static readonly "ALWAYS_DROP": $ICurio$DropRule
static readonly "DEFAULT": $ICurio$DropRule

public static "values"(): ($ICurio$DropRule)[]
public static "valueOf"(arg0: StringJS): $ICurio$DropRule
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICurio$DropRule$$Type = (("default") | ("always_drop") | ("always_keep") | ("destroy"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICurio$DropRule$$Original = $ICurio$DropRule;}
