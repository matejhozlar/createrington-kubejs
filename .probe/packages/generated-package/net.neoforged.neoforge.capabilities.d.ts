declare module "net.neoforged.neoforge.capabilities.BlockCapability" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$List} from "java.util.List"
import {$Direction} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Class$$Type} from "java.lang.Class"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BaseCapability} from "net.neoforged.neoforge.capabilities.BaseCapability"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockCapability<T, C> extends $BaseCapability<(T), (C)> {
public static "create"<T, C>(arg0: $ResourceLocation$$Type, arg1: $Class$$Type<(T)>, arg2: $Class$$Type<(C)>): $BlockCapability<(T), (C)>
public static "getAll"(): $List<($BlockCapability<(never), (never)>)>
public "getCapability"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type, arg4: C): T
public static "createSided"<T>(arg0: $ResourceLocation$$Type, arg1: $Class$$Type<(T)>): $BlockCapability<(T), ($Direction)>
public static "createVoid"<T>(arg0: $ResourceLocation$$Type, arg1: $Class$$Type<(T)>): $BlockCapability<(T), (void)>
public static "getAllProxyable"(): $List<($BlockCapability<(never), (never)>)>
public "isProxyable"(): boolean
get "all"(): $List<($BlockCapability<(never), (never)>)>
get "allProxyable"(): $List<($BlockCapability<(never), (never)>)>
get "proxyable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockCapability$$Type<T, C> = ($BlockCapability<(T), (C)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockCapability$$Original<T, C> = $BlockCapability<(T), (C)>;}
declare module "net.neoforged.neoforge.capabilities.EntityCapability" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$List} from "java.util.List"
import {$Direction} from "net.minecraft.core.Direction"
import {$Class$$Type} from "java.lang.Class"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BaseCapability} from "net.neoforged.neoforge.capabilities.BaseCapability"

export class $EntityCapability<T, C> extends $BaseCapability<(T), (C)> {
public static "create"<T, C>(arg0: $ResourceLocation$$Type, arg1: $Class$$Type<(T)>, arg2: $Class$$Type<(C)>): $EntityCapability<(T), (C)>
public static "getAll"(): $List<($EntityCapability<(never), (never)>)>
public "getCapability"(arg0: $Entity$$Type, arg1: C): T
public static "createSided"<T>(arg0: $ResourceLocation$$Type, arg1: $Class$$Type<(T)>): $EntityCapability<(T), ($Direction)>
public static "createVoid"<T>(arg0: $ResourceLocation$$Type, arg1: $Class$$Type<(T)>): $EntityCapability<(T), (void)>
get "all"(): $List<($EntityCapability<(never), (never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityCapability$$Type<T, C> = ($EntityCapability<(T), (C)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityCapability$$Original<T, C> = $EntityCapability<(T), (C)>;}
declare module "net.neoforged.neoforge.capabilities.ItemCapability" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Class$$Type} from "java.lang.Class"
import {$BaseCapability} from "net.neoforged.neoforge.capabilities.BaseCapability"

export class $ItemCapability<T, C> extends $BaseCapability<(T), (C)> {
public static "create"<T, C>(arg0: $ResourceLocation$$Type, arg1: $Class$$Type<(T)>, arg2: $Class$$Type<(C)>): $ItemCapability<(T), (C)>
public static "getAll"(): $List<($ItemCapability<(never), (never)>)>
public "getCapability"(arg0: $ItemStack$$Type, arg1: C): T
public static "createVoid"<T>(arg0: $ResourceLocation$$Type, arg1: $Class$$Type<(T)>): $ItemCapability<(T), (void)>
get "all"(): $List<($ItemCapability<(never), (never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCapability$$Type<T, C> = ($ItemCapability<(T), (C)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemCapability$$Original<T, C> = $ItemCapability<(T), (C)>;}
declare module "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent" {
import {$BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ITrackingCapEvent$$Interface} from "org.embeddedt.modernfix.neoforge.caps.ITrackingCapEvent"
import {$EntityCapability$$Type} from "net.neoforged.neoforge.capabilities.EntityCapability"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$ItemCapability$$Type} from "net.neoforged.neoforge.capabilities.ItemCapability"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Set} from "java.util.Set"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"
import {$IBlockCapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.IBlockCapabilityProvider"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $RegisterCapabilitiesEvent extends $Event implements $IModBusEvent$$Interface, $ITrackingCapEvent$$Interface {
public "mfix$getTrackedCaps"(): $Set
public "registerBlockEntity"<T, C, BE extends $BlockEntity>(arg0: $BlockCapability$$Type<(T), (C)>, arg1: $BlockEntityType$$Type<(BE)>, arg2: $ICapabilityProvider$$Type<(BE), (C), (T)>): void
public "registerEntity"<T, C, E extends $Entity>(arg0: $EntityCapability$$Type<(T), (C)>, arg1: $EntityType$$Type<(E)>, arg2: $ICapabilityProvider$$Type<(E), (C), (T)>): void
public "isItemRegistered"(arg0: $ItemCapability$$Type<(never), (never)>, arg1: $Item$$Type): boolean
public "isBlockRegistered"(arg0: $BlockCapability$$Type<(never), (never)>, arg1: $Block$$Type): boolean
public "setProxyable"(arg0: $BlockCapability$$Type<(never), (never)>): void
public "setNonProxyable"(arg0: $BlockCapability$$Type<(never), (never)>): void
public "isEntityRegistered"(arg0: $EntityCapability$$Type<(never), (never)>, arg1: $EntityType$$Type<(never)>): boolean
public "registerItem"<T, C>(arg0: $ItemCapability$$Type<(T), (C)>, arg1: $ICapabilityProvider$$Type<($ItemStack), (C), (T)>, ...arg2: ($ItemLike$$Type)[]): void
public "registerBlock"<T, C>(arg0: $BlockCapability$$Type<(T), (C)>, arg1: $IBlockCapabilityProvider$$Type<(T), (C)>, ...arg2: ($Block$$Type)[]): void
set "proxyable"(value: $BlockCapability$$Type<(never), (never)>)
set "nonProxyable"(value: $BlockCapability$$Type<(never), (never)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterCapabilitiesEvent$$Type = ($RegisterCapabilitiesEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterCapabilitiesEvent$$Original = $RegisterCapabilitiesEvent;}
declare module "net.neoforged.neoforge.capabilities.BaseCapability" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Class} from "java.lang.Class"

export class $BaseCapability<T, C> {
public "typeClass"(): $Class<(T)>
public "name"(): $ResourceLocation
public "contextClass"(): $Class<(C)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseCapability$$Type<T, C> = ($BaseCapability<(T), (C)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseCapability$$Original<T, C> = $BaseCapability<(T), (C)>;}
declare module "net.neoforged.neoforge.capabilities.ICapabilityProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ICapabilityProvider$$Interface<O, C, T> {

(arg0: O, arg1: C): T
}

export class $ICapabilityProvider<O, C, T> implements $ICapabilityProvider$$Interface {
 "getCapability"(arg0: O, arg1: C): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICapabilityProvider$$Type<O, C, T> = ((arg0: O, arg1: C) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICapabilityProvider$$Original<O, C, T> = $ICapabilityProvider<(O), (C), (T)>;}
declare module "net.neoforged.neoforge.capabilities.IBlockCapabilityProvider" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IBlockCapabilityProvider$$Interface<T, C> {

(arg0: $Level, arg1: $BlockPos, arg2: $BlockState, arg3: $BlockEntity, arg4: C): T
}

export class $IBlockCapabilityProvider<T, C> implements $IBlockCapabilityProvider$$Interface {
 "getCapability"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type, arg4: C): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockCapabilityProvider$$Type<T, C> = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState, arg3: $BlockEntity, arg4: C) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IBlockCapabilityProvider$$Original<T, C> = $IBlockCapabilityProvider<(T), (C)>;}
declare module "net.neoforged.neoforge.capabilities.ICapabilityInvalidationListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ICapabilityInvalidationListener$$Interface {

(): boolean
}

export class $ICapabilityInvalidationListener implements $ICapabilityInvalidationListener$$Interface {
 "onInvalidate"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICapabilityInvalidationListener$$Type = (() => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICapabilityInvalidationListener$$Original = $ICapabilityInvalidationListener;}
