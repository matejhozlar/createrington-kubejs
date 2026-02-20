declare module "com.tterrag.registrate.util.CreativeModeTabModifier" {
import {$FeatureFlagSet, $FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Collection$$Type} from "java.util.Collection"
import {$CreativeModeTab$Output$$Interface} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$CreativeModeTab$TabVisibility$$Type} from "net.minecraft.world.item.CreativeModeTab$TabVisibility"
import {$BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"
import {$CreativeModeTab$ItemDisplayParameters, $CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"

export class $CreativeModeTabModifier implements $CreativeModeTab$Output$$Interface {
constructor(arg0: $Supplier$$Type<($FeatureFlagSet$$Type)>, arg1: $BooleanSupplier$$Type, arg2: $BiConsumer$$Type<($ItemStack), ($CreativeModeTab$TabVisibility)>, arg3: $Supplier$$Type<($CreativeModeTab$ItemDisplayParameters$$Type)>)

public "accept"(arg0: $Supplier$$Type<($ItemLike$$Type)>): void
public "accept"(arg0: $ItemStack$$Type, arg1: $CreativeModeTab$TabVisibility$$Type): void
public "accept"(arg0: $Supplier$$Type<($ItemLike$$Type)>, arg1: $CreativeModeTab$TabVisibility$$Type): void
public "getParameters"(): $CreativeModeTab$ItemDisplayParameters
public "getFlags"(): $FeatureFlagSet
public "hasPermissions"(): boolean
public "accept"(arg0: $ItemLike$$Type): void
public "accept"(arg0: $ItemLike$$Type, arg1: $CreativeModeTab$TabVisibility$$Type): void
public "accept"(arg0: $ItemStack$$Type): void
public "acceptAll"(arg0: $Collection$$Type<($ItemStack$$Type)>): void
public "acceptAll"(arg0: $Collection$$Type<($ItemStack$$Type)>, arg1: $CreativeModeTab$TabVisibility$$Type): void
get "parameters"(): $CreativeModeTab$ItemDisplayParameters
get "flags"(): $FeatureFlagSet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeModeTabModifier$$Type = ($CreativeModeTabModifier);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreativeModeTabModifier$$Original = $CreativeModeTabModifier;}
declare module "com.tterrag.registrate.util.entry.FluidEntry" {
import {$RegistryEntry} from "com.tterrag.registrate.util.entry.RegistryEntry"
import {$Optional} from "java.util.Optional"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$Holder} from "net.minecraft.core.Holder"
import {$NonNullSupplier, $NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$FluidType} from "net.neoforged.neoforge.fluids.FluidType"
import {$BaseFlowingFluid} from "net.neoforged.neoforge.fluids.BaseFlowingFluid"

export class $FluidEntry<T extends $BaseFlowingFluid> extends $RegistryEntry<($Fluid), (T)> {
constructor(arg0: $AbstractRegistrate$$Type<(never)>, arg1: $DeferredHolder$$Type<($Fluid$$Type), (T)>)

public "getType"(): $FluidType
public "is"<R>(arg0: R): boolean
public "getSource"<S extends $BaseFlowingFluid>(): S
public "getBlock"<B extends $Block>(): $Optional<(B)>
public "getBucket"<I extends $Item>(): $Optional<(I)>
public "get"(): T
public static "of"<T>(arg0: $Supplier$$Type<(T)>, arg1: $NonNullSupplier$$Type<(StringJS)>): $NonNullSupplier<(T)>
public static "of"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
public static "lazy"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
public static "direct"<T>(arg0: T): $Holder<(T)>
get "type"(): $FluidType
get "source"(): S
get "block"(): $Optional<(B)>
get "bucket"(): $Optional<(I)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidEntry$$Type<T> = ($FluidEntry<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidEntry$$Original<T> = $FluidEntry<(T)>;}
declare module "com.tterrag.registrate.util.entry.BlockEntityEntry" {
import {$RegistryEntry, $RegistryEntry$$Type} from "com.tterrag.registrate.util.entry.RegistryEntry"
import {$Optional} from "java.util.Optional"
import {$DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$Holder} from "net.minecraft.core.Holder"
import {$NonNullSupplier, $NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockEntityEntry<T extends $BlockEntity> extends $RegistryEntry<($BlockEntityType<(never)>), ($BlockEntityType<(T)>)> {
constructor(arg0: $AbstractRegistrate$$Type<(never)>, arg1: $DeferredHolder$$Type<($BlockEntityType$$Type<(never)>), ($BlockEntityType$$Type<(T)>)>)

public "get"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<(T)>
public static "cast"<T extends $BlockEntity>(arg0: $RegistryEntry$$Type<($BlockEntityType$$Type<(never)>), ($BlockEntityType$$Type<(T)>)>): $BlockEntityEntry<(T)>
public "create"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): T
public "is"(arg0: $BlockEntity$$Type): boolean
public "getNullable"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): T
public "get"(): T
public static "of"<T>(arg0: $Supplier$$Type<(T)>, arg1: $NonNullSupplier$$Type<(StringJS)>): $NonNullSupplier<(T)>
public static "of"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
public static "lazy"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
public static "direct"<T>(arg0: T): $Holder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityEntry$$Type<T> = ($BlockEntityEntry<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEntityEntry$$Original<T> = $BlockEntityEntry<(T)>;}
declare module "com.tterrag.registrate.util.nullness.NonNullFunction" {
import {$Function, $Function$$Type, $Function$$Interface} from "java.util.function.Function"

export interface $NonNullFunction$$Interface<T, R> extends $Function$$Interface<(T), (R)> {

(arg0: T): R
}

export class $NonNullFunction<T, R> implements $NonNullFunction$$Interface {
 "apply"(arg0: T): R
 "andThen"<V>(arg0: $NonNullFunction$$Type<(R), (V)>): $NonNullFunction<(T), (V)>
static "identity"<T>(): $Function<(T), (T)>
 "compose"<V>(arg0: $Function$$Type<(V), (T)>): $Function<(V), (R)>
 "andThen"<V>(arg0: $Function$$Type<(R), (V)>): $Function<(T), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NonNullFunction$$Type<T, R> = ((arg0: T) => R);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NonNullFunction$$Original<T, R> = $NonNullFunction<(T), (R)>;}
declare module "com.tterrag.registrate.util.entry.RegistryEntry" {
import {$NonNullSupplier, $NonNullSupplier$$Type, $NonNullSupplier$$Interface} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$Optional} from "java.util.Optional"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$DeferredHolder, $DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$Holder} from "net.minecraft.core.Holder"

export class $RegistryEntry<R, S> extends $DeferredHolder<(R), (S)> implements $NonNullSupplier$$Interface<(S)> {
constructor(arg0: $AbstractRegistrate$$Type<(never)>, arg1: $DeferredHolder$$Type<(R), (S)>)

public "filter"(arg0: $Predicate$$Type<(R)>): $Optional<($RegistryEntry<(R), (S)>)>
public "is"<X>(arg0: X): boolean
public "getSibling"<X, Y>(arg0: $ResourceKey$$Type<($Registry<(X)>)>): $RegistryEntry<(X), (Y)>
public "getSibling"<X, Y>(arg0: $Registry$$Type<(X)>): $RegistryEntry<(X), (Y)>
public "get"(): S
public static "of"<T>(arg0: $Supplier$$Type<(S)>, arg1: $NonNullSupplier$$Type<(StringJS)>): $NonNullSupplier<(S)>
public static "of"<T>(arg0: $Supplier$$Type<(S)>): $NonNullSupplier<(S)>
public static "lazy"<T>(arg0: $Supplier$$Type<(S)>): $NonNullSupplier<(S)>
public "lazy"(): $NonNullSupplier<(S)>
public static "direct"<T>(arg0: T): $Holder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryEntry$$Type<R, S> = ($RegistryEntry<(R), (S)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistryEntry$$Original<R, S> = $RegistryEntry<(R), (S)>;}
declare module "com.tterrag.registrate.util.nullness.NonNullSupplier" {
import {$Supplier$$Type, $Supplier$$Interface} from "java.util.function.Supplier"

export interface $NonNullSupplier$$Interface<T> extends $Supplier$$Interface<(T)> {

(): T
}

export class $NonNullSupplier<T> implements $NonNullSupplier$$Interface {
 "get"(): T
static "of"<T>(arg0: $Supplier$$Type<(T)>, arg1: $NonNullSupplier$$Type<(StringJS)>): $NonNullSupplier<(T)>
static "of"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
static "lazy"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
 "lazy"(): $NonNullSupplier<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NonNullSupplier$$Type<T> = (() => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NonNullSupplier$$Original<T> = $NonNullSupplier<(T)>;}
declare module "com.tterrag.registrate.util.nullness.NonNullBiConsumer" {
import {$BiConsumer, $BiConsumer$$Type, $BiConsumer$$Interface} from "java.util.function.BiConsumer"

export interface $NonNullBiConsumer$$Interface<T, U> extends $BiConsumer$$Interface<(T), (U)> {

(arg0: T, arg1: U): void
}

export class $NonNullBiConsumer<T, U> implements $NonNullBiConsumer$$Interface {
 "accept"(arg0: T, arg1: U): void
static "noop"<T, U>(): $NonNullBiConsumer<(T), (U)>
 "andThen"(arg0: $BiConsumer$$Type<(T), (U)>): $BiConsumer<(T), (U)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NonNullBiConsumer$$Type<T, U> = ((arg0: T, arg1: U) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NonNullBiConsumer$$Original<T, U> = $NonNullBiConsumer<(T), (U)>;}
declare module "com.tterrag.registrate.util.nullness.NonNullUnaryOperator" {
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$NonNullFunction, $NonNullFunction$$Type, $NonNullFunction$$Interface} from "com.tterrag.registrate.util.nullness.NonNullFunction"

export interface $NonNullUnaryOperator$$Interface<T> extends $NonNullFunction$$Interface<(T), (T)> {

(arg0: T): T
}

export class $NonNullUnaryOperator<T> implements $NonNullUnaryOperator$$Interface {
static "identity"<T>(): $NonNullUnaryOperator<(T)>
 "andThen"<V>(arg0: $NonNullUnaryOperator$$Type<(T)>): $NonNullUnaryOperator<(T)>
 "apply"(arg0: T): T
 "andThen"<V>(arg0: $NonNullFunction$$Type<(T), (V)>): $NonNullFunction<(T), (V)>
 "compose"<V>(arg0: $Function$$Type<(V), (T)>): $Function<(V), (T)>
 "andThen"<V>(arg0: $Function$$Type<(T), (V)>): $Function<(T), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NonNullUnaryOperator$$Type<T> = ((arg0: T) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NonNullUnaryOperator$$Original<T> = $NonNullUnaryOperator<(T)>;}
declare module "com.tterrag.registrate.util.entry.EntityEntry" {
import {$NonNullSupplier, $NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$RegistryEntry, $RegistryEntry$$Type} from "com.tterrag.registrate.util.entry.RegistryEntry"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$Holder} from "net.minecraft.core.Holder"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $EntityEntry<T extends $Entity> extends $RegistryEntry<($EntityType<(never)>), ($EntityType<(T)>)> {
constructor(arg0: $AbstractRegistrate$$Type<(never)>, arg1: $DeferredHolder$$Type<($EntityType$$Type<(never)>), ($EntityType$$Type<(T)>)>)

public static "cast"<T extends $Entity>(arg0: $RegistryEntry$$Type<($EntityType$$Type<(never)>), ($EntityType$$Type<(T)>)>): $EntityEntry<(T)>
public "create"(arg0: $Level$$Type): T
public "is"(arg0: $Entity$$Type): boolean
public "get"(): T
public static "of"<T>(arg0: $Supplier$$Type<(T)>, arg1: $NonNullSupplier$$Type<(StringJS)>): $NonNullSupplier<(T)>
public static "of"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
public static "lazy"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
public static "direct"<T>(arg0: T): $Holder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityEntry$$Type<T> = ($EntityEntry<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityEntry$$Original<T> = $EntityEntry<(T)>;}
declare module "com.tterrag.registrate.util.nullness.NonNullBiFunction" {
import {$BiFunction, $BiFunction$$Interface} from "java.util.function.BiFunction"
import {$Function$$Type} from "java.util.function.Function"

export interface $NonNullBiFunction$$Interface<T, U, R> extends $BiFunction$$Interface<(T), (U), (R)> {

(arg0: T, arg1: U): R
}

export class $NonNullBiFunction<T, U, R> implements $NonNullBiFunction$$Interface {
 "apply"(arg0: T, arg1: U): R
 "andThen"<V>(arg0: $Function$$Type<(R), (V)>): $BiFunction<(T), (U), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NonNullBiFunction$$Type<T, U, R> = ((arg0: T, arg1: U) => R);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NonNullBiFunction$$Original<T, U, R> = $NonNullBiFunction<(T), (U), (R)>;}
declare module "com.tterrag.registrate.util.entry.ItemEntry" {
import {$NonNullSupplier, $NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$RegistryEntry$$Type} from "com.tterrag.registrate.util.entry.RegistryEntry"
import {$ItemProviderEntry} from "com.tterrag.registrate.util.entry.ItemProviderEntry"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$Holder} from "net.minecraft.core.Holder"

export class $ItemEntry<T extends $Item> extends $ItemProviderEntry<($Item), (T)> {
constructor(arg0: $AbstractRegistrate$$Type<(never)>, arg1: $DeferredHolder$$Type<($Item$$Type), (T)>)

public static "cast"<T extends $Item>(arg0: $RegistryEntry$$Type<($Item$$Type), (T)>): $ItemEntry<(T)>
public "get"(): T
public static "of"<T>(arg0: $Supplier$$Type<(T)>, arg1: $NonNullSupplier$$Type<(StringJS)>): $NonNullSupplier<(T)>
public static "of"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
public static "lazy"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
public static "direct"<T>(arg0: T): $Holder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEntry$$Type<T> = ($ItemEntry<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemEntry$$Original<T> = $ItemEntry<(T)>;}
declare module "com.tterrag.registrate.util.nullness.NonNullConsumer" {
import {$Consumer, $Consumer$$Type, $Consumer$$Interface} from "java.util.function.Consumer"

export interface $NonNullConsumer$$Interface<T> extends $Consumer$$Interface<(T)> {

(arg0: T): void
}

export class $NonNullConsumer<T> implements $NonNullConsumer$$Interface {
 "accept"(arg0: T): void
 "andThen"(arg0: $NonNullConsumer$$Type<(T)>): $NonNullConsumer<(T)>
static "noop"<T>(): $NonNullConsumer<(T)>
 "andThen"(arg0: $Consumer$$Type<(T)>): $Consumer<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NonNullConsumer$$Type<T> = ((arg0: T) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NonNullConsumer$$Original<T> = $NonNullConsumer<(T)>;}
