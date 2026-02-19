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

public "isRecentlyHit"(): boolean
public "getSource"(): $DamageSource
public "getDrops"(): $Collection<($ItemEntity)>
public "getLootingLevel"(): integer
public "getCurioHandler"(): $ICuriosItemHandler
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "recentlyHit"(): boolean
get "source"(): $DamageSource
get "drops"(): $Collection<($ItemEntity)>
get "lootingLevel"(): integer
get "curioHandler"(): $ICuriosItemHandler
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
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$ICurio$DropRule, $ICurio$DropRule$$Type} from "top.theillusivec4.curios.api.type.capability.ICurio$DropRule"
import {$ImmutableList} from "com.google.common.collect.ImmutableList"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Tuple} from "net.minecraft.util.Tuple"

export class $DropRulesEvent extends $LivingEvent {
constructor(arg0: $LivingEntity$$Type, arg1: $ICuriosItemHandler$$Type, arg2: $DamageSource$$Type, arg3: integer, arg4: boolean)

public "isRecentlyHit"(): boolean
public "getSource"(): $DamageSource
public "getOverrides"(): $ImmutableList<($Tuple<($Predicate<($ItemStack)>), ($ICurio$DropRule)>)>
public "addOverride"(arg0: $Predicate$$Type<($ItemStack)>, arg1: $ICurio$DropRule$$Type): void
public "getLootingLevel"(): integer
public "getCurioHandler"(): $ICuriosItemHandler
get "recentlyHit"(): boolean
get "source"(): $DamageSource
get "overrides"(): $ImmutableList<($Tuple<($Predicate<($ItemStack)>), ($ICurio$DropRule)>)>
get "lootingLevel"(): integer
get "curioHandler"(): $ICuriosItemHandler
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
declare module "top.theillusivec4.curios.api.type.inventory.ICurioStacksHandler" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Collection} from "java.util.Collection"
import {$IDynamicStackHandler} from "top.theillusivec4.curios.api.type.inventory.IDynamicStackHandler"
import {$Map} from "java.util.Map"
import {$AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$ICurio$DropRule} from "top.theillusivec4.curios.api.type.capability.ICurio$DropRule"
import {$Set} from "java.util.Set"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export interface $ICurioStacksHandler$$Interface {
get "visible"(): boolean
get "stacks"(): $IDynamicStackHandler
get "modifiers"(): $Map<($ResourceLocation), ($AttributeModifier)>
get "cosmeticStacks"(): $IDynamicStackHandler
get "identifier"(): StringJS
get "activeStates"(): $NonNullList<(boolean)>
get "renders"(): $NonNullList<(boolean)>
get "slots"(): integer
get "dropRule"(): $ICurio$DropRule
get "cachedModifiers"(): $Set<($AttributeModifier)>
get "sizeShift"(): integer
get "syncTag"(): $CompoundTag
get "permanentModifiers"(): $Set<($AttributeModifier)>
}

export class $ICurioStacksHandler implements $ICurioStacksHandler$$Interface {
 "isVisible"(): boolean
 "clearModifiers"(): void
 "getStacks"(): $IDynamicStackHandler
 "getModifiers"(): $Map<($ResourceLocation), ($AttributeModifier)>
 "update"(): void
/**
 * 
 * @deprecated
 */
 "grow"(arg0: integer): void
 "getCosmeticStacks"(): $IDynamicStackHandler
 "addTransientModifier"(arg0: $AttributeModifier$$Type): void
 "serializeNBT"(): $CompoundTag
 "deserializeNBT"(arg0: $CompoundTag$$Type): void
/**
 * 
 * @deprecated
 */
 "shrink"(arg0: integer): void
 "getIdentifier"(): StringJS
 "addPermanentModifier"(arg0: $AttributeModifier$$Type): void
 "getActiveStates"(): $NonNullList<(boolean)>
 "getRenders"(): $NonNullList<(boolean)>
 "getSlots"(): integer
 "removeModifier"(arg0: $ResourceLocation$$Type): void
 "getDropRule"(): $ICurio$DropRule
 "hasCosmetic"(): boolean
 "canToggleRendering"(): boolean
 "getCachedModifiers"(): $Set<($AttributeModifier)>
/**
 * 
 * @deprecated
 */
 "getSizeShift"(): integer
 "updateActiveState"(arg0: integer): void
 "applySyncTag"(arg0: $CompoundTag$$Type): void
 "copyModifiers"(arg0: $ICurioStacksHandler$$Type): void
 "getSyncTag"(): $CompoundTag
 "getModifiersByOperation"(arg0: $AttributeModifier$Operation$$Type): $Collection<($AttributeModifier)>
 "clearCachedModifiers"(): void
 "getPermanentModifiers"(): $Set<($AttributeModifier)>
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
export type $SlotResult$$Type = ({"stack"?: $ItemStack$$Type, "slotContext"?: $SlotContext$$Type}) | ([stack?: $ItemStack$$Type, slotContext?: $SlotContext$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlotResult$$Original = $SlotResult;}
declare module "top.theillusivec4.curios.api.type.inventory.IDynamicStackHandler" {
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Container} from "net.minecraft.world.Container"
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
get "height"(): integer
get "width"(): integer
get "changed"(): void
get "allItems"(): $List<($ItemStack)>
get "empty"(): boolean
}

export class $IDynamicStackHandler implements $IDynamicStackHandler$$Interface {
 "getPreviousStackInSlot"(arg0: integer): $ItemStack
 "setPreviousStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "grow"(arg0: integer): void
 "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "shrink"(arg0: integer): void
 "getStackInSlot"(arg0: integer): $ItemStack
 "getSlots"(): integer
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
export type $IDynamicStackHandler$$Type = ($IDynamicStackHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IDynamicStackHandler$$Original = $IDynamicStackHandler;}
declare module "top.theillusivec4.curios.api.event.CurioCanUnequipEvent" {
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$TriState, $TriState$$Type} from "net.neoforged.neoforge.common.util.TriState"

export class $CurioCanUnequipEvent extends $LivingEvent {
constructor(arg0: $ItemStack$$Type, arg1: $SlotContext$$Type)

public "getStack"(): $ItemStack
public "getSlotContext"(): $SlotContext
public "getUnequipResult"(): $TriState
public "setUnequipResult"(arg0: $TriState$$Type): void
get "stack"(): $ItemStack
get "slotContext"(): $SlotContext
get "unequipResult"(): $TriState
set "unequipResult"(value: $TriState$$Type)
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
declare module "top.theillusivec4.curios.api.extensions.RegisterCuriosExtensionsEvent" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$ICurioSlotExtension$$Type} from "top.theillusivec4.curios.api.extensions.ICurioSlotExtension"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"

export class $RegisterCuriosExtensionsEvent extends $Event implements $IModBusEvent$$Interface {
constructor()

public "isSlotExtensionRegistered"(arg0: StringJS): boolean
public "registerSlotExtension"(arg0: $ICurioSlotExtension$$Type, ...arg1: (StringJS)[]): void
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
import {$Map, $Map$$Type} from "java.util.Map"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$SlotResult} from "top.theillusivec4.curios.api.SlotResult"
import {$ListTag, $ListTag$$Type} from "net.minecraft.nbt.ListTag"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ICurioStacksHandler, $ICurioStacksHandler$$Type} from "top.theillusivec4.curios.api.type.inventory.ICurioStacksHandler"
import {$AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$IItemHandlerModifiable} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$Set} from "java.util.Set"
import {$Logger} from "org.slf4j.Logger"

export interface $ICuriosItemHandler$$Interface {
get "modifiers"(): $Multimap<(StringJS), ($AttributeModifier)>
get "wearer"(): $LivingEntity
set "curios"(value: $Map$$Type<(StringJS), ($ICurioStacksHandler$$Type)>)
get "updatingInventories"(): $Set<($ICurioStacksHandler)>
get "lockedSlots"(): $Set<(StringJS)>
get "visibleSlots"(): integer
get "fortuneBonus"(): integer
get "curios"(): $Map<(StringJS), ($ICurioStacksHandler)>
get "slots"(): integer
get "equippedCurios"(): $IItemHandlerModifiable
}

export class $ICuriosItemHandler implements $ICuriosItemHandler$$Interface {
static readonly "LOGGER": $Logger

 "findCurios"(arg0: $Predicate$$Type<($ItemStack)>): $List<($SlotResult)>
 "findCurios"(arg0: $Predicate$$Type<($ItemStack)>, arg1: boolean, arg2: StringJS): $List<($SlotResult)>
 "findCurios"(...arg0: (StringJS)[]): $List<($SlotResult)>
 "findCurios"(arg0: boolean, ...arg1: (StringJS)[]): $List<($SlotResult)>
 "findCurios"(arg0: $Item$$Type): $List<($SlotResult)>
 "reset"(): void
 "getModifiers"(): $Multimap<(StringJS), ($AttributeModifier)>
 "readTag"(arg0: $Tag$$Type): void
 "getWearer"(): $LivingEntity
 "writeTag"(): $Tag
 "setCurios"(arg0: $Map$$Type<(StringJS), ($ICurioStacksHandler$$Type)>): void
 "addTransientSlotModifier"(arg0: StringJS, arg1: $ResourceLocation$$Type, arg2: double, arg3: $AttributeModifier$Operation$$Type): void
 "addPermanentSlotModifier"(arg0: StringJS, arg1: $ResourceLocation$$Type, arg2: double, arg3: $AttributeModifier$Operation$$Type): void
 "addPermanentSlotModifiers"(arg0: $Multimap$$Type<(StringJS), ($AttributeModifier$$Type)>): void
 "removeSlotModifiers"(arg0: $Multimap$$Type<(StringJS), ($AttributeModifier$$Type)>): void
 "handleInvalidStacks"(): void
 "addTransientSlotModifiers"(arg0: $Multimap$$Type<(StringJS), ($AttributeModifier$$Type)>): void
 "clearCachedSlotModifiers"(): void
 "getUpdatingInventories"(): $Set<($ICurioStacksHandler)>
 "loadInventory"(arg0: $ListTag$$Type): void
/**
 * 
 * @deprecated
 */
 "getLockedSlots"(): $Set<(StringJS)>
 "setSlotActive"(arg0: StringJS, arg1: integer, arg2: boolean): void
 "getVisibleSlots"(): integer
/**
 * 
 * @deprecated
 */
 "lockSlotType"(arg0: StringJS): void
 "getStacksHandler"(arg0: StringJS): $Optional<($ICurioStacksHandler)>
 "isSlotActive"(arg0: StringJS, arg1: integer): boolean
 "clearSlotModifiers"(): void
/**
 * 
 * @deprecated
 */
 "getFortuneBonus"(): integer
 "saveInventory"(arg0: boolean): $ListTag
/**
 * 
 * @deprecated
 */
 "growSlotType"(arg0: StringJS, arg1: integer): void
 "setSlotsActive"(arg0: StringJS, arg1: boolean): void
 "removeSlotModifier"(arg0: StringJS, arg1: $ResourceLocation$$Type): void
 "loseInvalidStack"(arg0: $ItemStack$$Type): void
/**
 * 
 * @deprecated
 */
 "unlockSlotType"(arg0: StringJS, arg1: integer, arg2: boolean, arg3: boolean): void
/**
 * 
 * @deprecated
 */
 "shrinkSlotType"(arg0: StringJS, arg1: integer): void
 "findFirstCurio"(arg0: $Item$$Type): $Optional<($SlotResult)>
 "findFirstCurio"(arg0: $Predicate$$Type<($ItemStack)>, arg1: boolean, arg2: StringJS): $Optional<($SlotResult)>
 "findFirstCurio"(arg0: $Predicate$$Type<($ItemStack)>, arg1: StringJS): $Optional<($SlotResult)>
 "findFirstCurio"(arg0: $Predicate$$Type<($ItemStack)>): $Optional<($SlotResult)>
/**
 * 
 * @deprecated
 */
 "processSlots"(): void
 "getCurios"(): $Map<(StringJS), ($ICurioStacksHandler)>
 "isEquipped"(arg0: $Predicate$$Type<($ItemStack)>): boolean
 "isEquipped"(arg0: $Item$$Type): boolean
 "getSlots"(): integer
 "findCurio"(arg0: StringJS, arg1: integer, arg2: boolean): $Optional<($SlotResult)>
 "findCurio"(arg0: StringJS, arg1: integer): $Optional<($SlotResult)>
 "getFortuneLevel"(arg0: $LootContext$$Type): integer
 "getLootingLevel"(arg0: $LootContext$$Type): integer
 "getEquippedCurios"(): $IItemHandlerModifiable
 "setEquippedCurio"(arg0: StringJS, arg1: integer, arg2: $ItemStack$$Type): void
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
public "entity"(): $LivingEntity
public "cosmetic"(): boolean
public "identifier"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotContext$$Type = ({"visible"?: boolean, "entity"?: $LivingEntity$$Type, "identifier"?: StringJS, "index"?: integer, "cosmetic"?: boolean}) | ([visible?: boolean, entity?: $LivingEntity$$Type, identifier?: StringJS, index?: integer, cosmetic?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlotContext$$Original = $SlotContext;}
declare module "top.theillusivec4.curios.api.event.CurioAttributeModifierEvent" {
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Collection} from "java.util.Collection"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $CurioAttributeModifierEvent extends $Event {
constructor(arg0: $ItemStack$$Type, arg1: $SlotContext$$Type, arg2: $ResourceLocation$$Type, arg3: $Multimap$$Type<($Holder$$Type<($Attribute$$Type)>), ($AttributeModifier$$Type)>)

public "addModifier"(arg0: $Holder$$Type<($Attribute)>, arg1: $AttributeModifier$$Type): boolean
public "clearModifiers"(): void
public "getModifiers"(): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "getId"(): $ResourceLocation
public "removeAttribute"(arg0: $Holder$$Type<($Attribute)>): $Collection<($AttributeModifier)>
public "getOriginalModifiers"(): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "getItemStack"(): $ItemStack
public "removeModifier"(arg0: $Holder$$Type<($Attribute)>, arg1: $AttributeModifier$$Type): boolean
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
import {$Set, $Set$$Type} from "java.util.Set"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

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
declare module "top.theillusivec4.curios.api.event.CurioChangeEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $CurioChangeEvent extends $LivingEvent {
constructor(arg0: $LivingEntity$$Type, arg1: StringJS, arg2: integer, arg3: $ItemStack$$Type, arg4: $ItemStack$$Type)

public "getTo"(): $ItemStack
public "getFrom"(): $ItemStack
public "getSlotIndex"(): integer
public "getIdentifier"(): StringJS
get "to"(): $ItemStack
get "from"(): $ItemStack
get "slotIndex"(): integer
get "identifier"(): StringJS
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
