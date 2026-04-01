declare module "io.wispforest.accessories.pond.owo.ComponentExtension" {
import {$Component, $Component$$Type} from "io.wispforest.owo.ui.core.Component"
import {$Runnable$$Type} from "java.lang.Runnable"

export interface $ComponentExtension$$Interface<T extends $Component> {
}

export class $ComponentExtension<T extends $Component> implements $ComponentExtension$$Interface {
 "allowIndividualOverdraw"(arg0: boolean): T
 "allowIndividualOverdraw"(): boolean
static "bypassCheck"(component: $Component$$Type, runnable: $Runnable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComponentExtension$$Type<T> = ($ComponentExtension<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ComponentExtension$$Original<T> = $ComponentExtension<(T)>;}
declare module "io.wispforest.accessories.pond.ModelRootAccess" {
import {$Optional} from "java.util.Optional"
import {$ModelPart} from "net.minecraft.client.model.geom.ModelPart"

export interface $ModelRootAccess$$Interface {
}

export class $ModelRootAccess implements $ModelRootAccess$$Interface {
 "accessories$getAnyDescendantWithName"(name: StringJS): $Optional<($ModelPart)>
 "accessories$rootPart"(): $ModelPart
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelRootAccess$$Type = ($ModelRootAccess);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelRootAccess$$Original = $ModelRootAccess;}
declare module "io.wispforest.accessories.pond.stack.PatchedDataComponentMapExtension" {
import {$ItemStackMutation} from "io.wispforest.accessories.utils.ItemStackMutation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EventStream} from "io.wispforest.owo.util.EventStream"

export interface $PatchedDataComponentMapExtension$$Interface {
}

export class $PatchedDataComponentMapExtension implements $PatchedDataComponentMapExtension$$Interface {
 "accessories$hasChanged"(): boolean
 "accessories$getMutationEvent"(arg0: $ItemStack$$Type): $EventStream<($ItemStackMutation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PatchedDataComponentMapExtension$$Type = ($PatchedDataComponentMapExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PatchedDataComponentMapExtension$$Original = $PatchedDataComponentMapExtension;}
declare module "io.wispforest.accessories.pond.CosmeticArmorLookupTogglable" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $CosmeticArmorLookupTogglable$$Interface {
set "lookupToggle"(value: boolean)
get "lookupToggle"(): boolean
}

export class $CosmeticArmorLookupTogglable implements $CosmeticArmorLookupTogglable$$Interface {
static "getAlternativeStack"(livingEntity: $LivingEntity$$Type, equipmentSlot: $EquipmentSlot$$Type, consumer: $Consumer$$Type<($ItemStack)>): void
 "setLookupToggle"(value: boolean): void
 "getLookupToggle"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmeticArmorLookupTogglable$$Type = ($CosmeticArmorLookupTogglable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CosmeticArmorLookupTogglable$$Original = $CosmeticArmorLookupTogglable;}
declare module "io.wispforest.accessories.pond.CloseContainerTransfer" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export interface $CloseContainerTransfer$$Interface {

(arg0: $Screen): void
}

export class $CloseContainerTransfer implements $CloseContainerTransfer$$Interface {
 "accessories$setScreenTransfer"(arg0: $Screen$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CloseContainerTransfer$$Type = ((arg0: $Screen) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CloseContainerTransfer$$Original = $CloseContainerTransfer;}
declare module "io.wispforest.accessories.pond.ItemBasedSteerable" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemBasedSteering} from "net.minecraft.world.entity.ItemBasedSteering"
import {$SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$Saddleable$$Interface} from "net.minecraft.world.entity.Saddleable"

export interface $ItemBasedSteerable$$Interface extends $Saddleable$$Interface {
get "instance"(): $ItemBasedSteering
get "saddleable"(): boolean
get "saddled"(): boolean
get "saddleSoundEvent"(): $SoundEvent
}

export class $ItemBasedSteerable implements $ItemBasedSteerable$$Interface {
 "getInstance"(): $ItemBasedSteering
 "isSaddleable"(): boolean
 "equipSaddle"(arg0: $ItemStack$$Type, arg1: $SoundSource$$Type): void
 "isSaddled"(): boolean
 "getSaddleSoundEvent"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBasedSteerable$$Type = ($ItemBasedSteerable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemBasedSteerable$$Original = $ItemBasedSteerable;}
declare module "io.wispforest.accessories.pond.ContainerScreenExtension" {
import {$Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"

export interface $ContainerScreenExtension$$Interface {
}

export class $ContainerScreenExtension implements $ContainerScreenExtension$$Interface {
 "isHovering_Logical"(slot: $Slot$$Type, mouseX: double, mouseY: double): boolean
 "hoverStackOffset"(): integer
 "forceRenderSlot"(context: $GuiGraphics$$Type, slot: $Slot$$Type): void
 "shouldRenderSlot"(slot: $Slot$$Type): boolean
 "isHovering_Rendering"(slot: $Slot$$Type, mouseX: double, mouseY: double): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerScreenExtension$$Type = ($ContainerScreenExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContainerScreenExtension$$Original = $ContainerScreenExtension;}
declare module "io.wispforest.accessories.pond.ModelPartLoadingHelper" {
import {$ModelPart, $ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"

export interface $ModelPartLoadingHelper$$Interface {
}

export class $ModelPartLoadingHelper implements $ModelPartLoadingHelper$$Interface {
 "accessories$clearQueue"(): void
 "accessories$pushRoot"(root: $ModelPart$$Type): void
 "accessories$pollRoot"(): $ModelPart
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelPartLoadingHelper$$Type = ($ModelPartLoadingHelper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelPartLoadingHelper$$Original = $ModelPartLoadingHelper;}
declare module "io.wispforest.accessories.pond.AccessoriesFrameBufferExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessoriesFrameBufferExtension$$Interface {

(arg0: boolean): void
}

export class $AccessoriesFrameBufferExtension implements $AccessoriesFrameBufferExtension$$Interface {
 "accessories$setUseHighlightShader"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoriesFrameBufferExtension$$Type = ((arg0: boolean) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessoriesFrameBufferExtension$$Original = $AccessoriesFrameBufferExtension;}
declare module "io.wispforest.accessories.pond.DroppedStacksExtension" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $DroppedStacksExtension$$Interface {
}

export class $DroppedStacksExtension implements $DroppedStacksExtension$$Interface {
 "addToBeDroppedStacks"(arg0: $Collection$$Type<($ItemStack$$Type)>): void
 "toBeDroppedStacks"(): $Collection<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DroppedStacksExtension$$Type = ($DroppedStacksExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DroppedStacksExtension$$Original = $DroppedStacksExtension;}
declare module "io.wispforest.accessories.pond.AccessoriesLivingEntityExtension" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SlotReference, $SlotReference$$Type} from "io.wispforest.accessories.api.slot.SlotReference"

export interface $AccessoriesLivingEntityExtension$$Interface {

(arg0: $SlotReference, arg1: $ItemStack, arg2: $ItemStack): void
}

export class $AccessoriesLivingEntityExtension implements $AccessoriesLivingEntityExtension$$Interface {
 "onEquipItem"(arg0: $SlotReference$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoriesLivingEntityExtension$$Type = ((arg0: $SlotReference, arg1: $ItemStack, arg2: $ItemStack) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessoriesLivingEntityExtension$$Original = $AccessoriesLivingEntityExtension;}
declare module "io.wispforest.accessories.pond.AccessoriesAPIAccess" {
import {$AccessoriesCapability} from "io.wispforest.accessories.api.AccessoriesCapability"
import {$AccessoriesHolder} from "io.wispforest.accessories.api.AccessoriesHolder"

export interface $AccessoriesAPIAccess$$Interface {
}

export class $AccessoriesAPIAccess implements $AccessoriesAPIAccess$$Interface {
 "accessoriesCapability"(): $AccessoriesCapability
 "accessoriesHolder"(): $AccessoriesHolder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoriesAPIAccess$$Type = ($AccessoriesAPIAccess);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessoriesAPIAccess$$Original = $AccessoriesAPIAccess;}
