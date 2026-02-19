declare module "com.tterrag.registrate.builders.ItemBuilder" {
import {$ItemEntry} from "com.tterrag.registrate.util.entry.ItemEntry"
import {$RegistrateItemModelProvider$$Type} from "com.tterrag.registrate.providers.RegistrateItemModelProvider"
import {$CreativeModeTabModifier$$Type} from "com.tterrag.registrate.util.CreativeModeTabModifier"
import {$NonNullUnaryOperator$$Type} from "com.tterrag.registrate.util.nullness.NonNullUnaryOperator"
import {$NonNullBiConsumer$$Type} from "com.tterrag.registrate.util.nullness.NonNullBiConsumer"
import {$RegistrateRecipeProvider$$Type} from "com.tterrag.registrate.providers.RegistrateRecipeProvider"
import {$AbstractBuilder} from "com.tterrag.registrate.builders.AbstractBuilder"
import {$DataGenContext$$Type} from "com.tterrag.registrate.providers.DataGenContext"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$NonNullSupplier, $NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$IClientItemExtensions$$Type} from "net.neoforged.neoforge.client.extensions.common.IClientItemExtensions"
import {$CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Function$$Type} from "java.util.function.Function"
import {$BuilderCallback$$Type} from "com.tterrag.registrate.builders.BuilderCallback"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$NonNullFunction$$Type} from "com.tterrag.registrate.util.nullness.NonNullFunction"
import {$AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$ItemColor$$Type} from "net.minecraft.client.color.item.ItemColor"

export class $ItemBuilder<T extends $Item, P> extends $AbstractBuilder<($Item), (T), (P), ($ItemBuilder<(T), (P)>)> {
public "register"(): $ItemEntry<(T)>
public "properties"(arg0: $NonNullUnaryOperator$$Type<($Item$Properties)>): $ItemBuilder<(T), (P)>
public "tab"(arg0: $ResourceKey$$Type<($CreativeModeTab)>): $ItemBuilder<(T), (P)>
/**
 * 
 * @deprecated
 */
public "tab"(arg0: $ResourceKey$$Type<($CreativeModeTab)>, arg1: $Consumer$$Type<($CreativeModeTabModifier)>): $ItemBuilder<(T), (P)>
public "tab"(arg0: $ResourceKey$$Type<($CreativeModeTab)>, arg1: $NonNullBiConsumer$$Type<($DataGenContext<($Item), (T)>), ($CreativeModeTabModifier)>): $ItemBuilder<(T), (P)>
public static "create"<T extends $Item, P>(arg0: $AbstractRegistrate$$Type<(never)>, arg1: P, arg2: StringJS, arg3: $BuilderCallback$$Type, arg4: $NonNullFunction$$Type<($Item$Properties), (T)>): $ItemBuilder<(T), (P)>
public "color"(arg0: $NonNullSupplier$$Type<($Supplier$$Type<($ItemColor$$Type)>)>): $ItemBuilder<(T), (P)>
public "lang"(arg0: StringJS): $ItemBuilder<(T), (P)>
public "recipe"(arg0: $NonNullBiConsumer$$Type<($DataGenContext<($Item), (T)>), ($RegistrateRecipeProvider)>): $ItemBuilder<(T), (P)>
public "tag"(...arg0: ($TagKey$$Type<($Item$$Type)>)[]): $ItemBuilder<(T), (P)>
public "removeTab"(arg0: $ResourceKey$$Type<($CreativeModeTab)>): $ItemBuilder<(T), (P)>
public "burnTime"(arg0: integer): $ItemBuilder<(T), (P)>
public "defaultLang"(): $ItemBuilder<(T), (P)>
public "model"(arg0: $NonNullBiConsumer$$Type<($DataGenContext<($Item), (T)>), ($RegistrateItemModelProvider)>): $ItemBuilder<(T), (P)>
public "initialProperties"(arg0: $NonNullSupplier$$Type<($Item$Properties$$Type)>): $ItemBuilder<(T), (P)>
public "defaultModel"(): $ItemBuilder<(T), (P)>
public "clientExtension"(arg0: $NonNullSupplier$$Type<($Supplier$$Type<($IClientItemExtensions$$Type)>)>): $ItemBuilder<(T), (P)>
/**
 * 
 * @deprecated
 */
public "clientExtension"(arg0: $Function$$Type<(T), ($NonNullSupplier$$Type<($Supplier$$Type<($IClientItemExtensions$$Type)>)>)>): $ItemBuilder<(T), (P)>
public "compostable"(arg0: float): $ItemBuilder<(T), (P)>
public "get"(): any
public static "of"<T>(arg0: $Supplier$$Type<(T)>, arg1: $NonNullSupplier$$Type<(StringJS)>): $NonNullSupplier<(T)>
public static "of"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
public static "lazy"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBuilder$$Type<T, P> = ($ItemBuilder<(T), (P)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemBuilder$$Original<T, P> = $ItemBuilder<(T), (P)>;}
declare module "com.tterrag.registrate.builders.MenuBuilder" {
import {$MenuBuilder$MenuFactory$$Type} from "com.tterrag.registrate.builders.MenuBuilder$MenuFactory"
import {$RegistryEntry} from "com.tterrag.registrate.util.entry.RegistryEntry"
import {$Screen} from "net.minecraft.client.gui.screens.Screen"
import {$AbstractBuilder} from "com.tterrag.registrate.builders.AbstractBuilder"
import {$NonNullSupplier, $NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$MenuBuilder$ScreenFactory$$Type} from "com.tterrag.registrate.builders.MenuBuilder$ScreenFactory"
import {$BuilderCallback$$Type} from "com.tterrag.registrate.builders.BuilderCallback"
import {$MenuType} from "net.minecraft.world.inventory.MenuType"
import {$AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$MenuBuilder$ForgeMenuFactory$$Type} from "com.tterrag.registrate.builders.MenuBuilder$ForgeMenuFactory"

export class $MenuBuilder<T extends $AbstractContainerMenu, S extends $Screen, P> extends $AbstractBuilder<($MenuType<(never)>), ($MenuType<(T)>), (P), ($MenuBuilder<(T), (S), (P)>)> {
constructor(arg0: $AbstractRegistrate$$Type<(never)>, arg1: P, arg2: StringJS, arg3: $BuilderCallback$$Type, arg4: $MenuBuilder$MenuFactory$$Type<(T)>, arg5: $NonNullSupplier$$Type<($MenuBuilder$ScreenFactory$$Type<(T), (S)>)>)
constructor(arg0: $AbstractRegistrate$$Type<(never)>, arg1: P, arg2: StringJS, arg3: $BuilderCallback$$Type, arg4: $MenuBuilder$ForgeMenuFactory$$Type<(T)>, arg5: $NonNullSupplier$$Type<($MenuBuilder$ScreenFactory$$Type<(T), (S)>)>)

public "register"(): $RegistryEntry
public "get"(): any
public static "of"<T>(arg0: $Supplier$$Type<(T)>, arg1: $NonNullSupplier$$Type<(StringJS)>): $NonNullSupplier<(T)>
public static "of"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
public static "lazy"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuBuilder$$Type<T, S, P> = ($MenuBuilder<(T), (S), (P)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MenuBuilder$$Original<T, S, P> = $MenuBuilder<(T), (S), (P)>;}
declare module "com.tterrag.registrate.builders.Builder" {
import {$RegistryEntry, $RegistryEntry$$Type} from "com.tterrag.registrate.util.entry.RegistryEntry"
import {$RegistrateProvider} from "com.tterrag.registrate.providers.RegistrateProvider"
import {$NonNullBiConsumer$$Type} from "com.tterrag.registrate.util.nullness.NonNullBiConsumer"
import {$DataGenContext$$Type} from "com.tterrag.registrate.providers.DataGenContext"
import {$NonNullSupplier, $NonNullSupplier$$Type, $NonNullSupplier$$Interface} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$NonNullConsumer$$Type} from "com.tterrag.registrate.util.nullness.NonNullConsumer"
import {$DataMapType$$Type} from "net.neoforged.neoforge.registries.datamaps.DataMapType"
import {$NonNullFunction$$Type} from "com.tterrag.registrate.util.nullness.NonNullFunction"
import {$AbstractRegistrate} from "com.tterrag.registrate.AbstractRegistrate"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$ProviderType$$Type} from "com.tterrag.registrate.providers.ProviderType"

export interface $Builder$$Interface<R, T, P, S extends $Builder<(object), (object), (object), (object)>> extends $NonNullSupplier$$Interface<($RegistryEntry<(R), (T)>)> {
get "name"(): StringJS
get "parent"(): P
get "owner"(): $AbstractRegistrate<(never)>
get "entry"(): T
get "registryKey"(): $ResourceKey<($Registry<(R)>)>
}

export class $Builder<R, T, P, S extends $Builder<(object), (object), (object), (object)>> implements $Builder$$Interface {
 "getName"(): StringJS
 "get"(): any
 "transform"<R2, T2, P2, S2 extends $Builder<(object), (object), (object), (object)>>(arg0: $NonNullFunction$$Type<(S), (S2)>): S2
 "register"(): $RegistryEntry<(R), (T)>
 "getParent"(): P
 "build"(): P
 "getOwner"(): $AbstractRegistrate<(never)>
 "getEntry"(): T
 "asSupplier"(): $NonNullSupplier<(T)>
 "onRegisterAfter"<OR>(arg0: $ResourceKey$$Type<($Registry<(OR)>)>, arg1: $NonNullConsumer$$Type<(T)>): S
 "addMiscData"<D extends $RegistrateProvider>(arg0: $ProviderType$$Type<(D)>, arg1: $NonNullConsumer$$Type<(D)>): S
 "dataMap"<D>(arg0: $DataMapType$$Type<(R), (D)>, arg1: D): S
 "dataMap"<D>(arg0: $DataMapType$$Type<(R), (D)>, arg1: $NonNullFunction$$Type<($DataGenContext<(R), (T)>), (D)>): S
 "getRegistryKey"(): $ResourceKey<($Registry<(R)>)>
 "setData"<D extends $RegistrateProvider>(arg0: $ProviderType$$Type<(D)>, arg1: $NonNullBiConsumer$$Type<($DataGenContext<(R), (T)>), (D)>): S
 "onRegister"(arg0: $NonNullConsumer$$Type<(T)>): S
static "of"<T>(arg0: $Supplier$$Type<($RegistryEntry$$Type<(R), (T)>)>, arg1: $NonNullSupplier$$Type<(StringJS)>): $NonNullSupplier<($RegistryEntry<(R), (T)>)>
static "of"<T>(arg0: $Supplier$$Type<($RegistryEntry$$Type<(R), (T)>)>): $NonNullSupplier<($RegistryEntry<(R), (T)>)>
static "lazy"<T>(arg0: $Supplier$$Type<($RegistryEntry$$Type<(R), (T)>)>): $NonNullSupplier<($RegistryEntry<(R), (T)>)>
 "lazy"(): $NonNullSupplier<($RegistryEntry<(R), (T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Builder$$Type<R, T, P, S> = ($Builder<(R), (T), (P), (S)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Builder$$Original<R, T, P, S> = $Builder<(R), (T), (P), (S)>;}
declare module "com.tterrag.registrate.builders.BlockEntityBuilder$BlockEntityFactory" {
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $BlockEntityBuilder$BlockEntityFactory$$Interface<T extends $BlockEntity> {

(arg0: $BlockEntityType<(T)>, arg1: $BlockPos, arg2: $BlockState): T
}

export class $BlockEntityBuilder$BlockEntityFactory<T extends $BlockEntity> implements $BlockEntityBuilder$BlockEntityFactory$$Interface {
 "create"(arg0: $BlockEntityType$$Type<(T)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityBuilder$BlockEntityFactory$$Type<T> = ((arg0: $BlockEntityType<(T)>, arg1: $BlockPos, arg2: $BlockState) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEntityBuilder$BlockEntityFactory$$Original<T> = $BlockEntityBuilder$BlockEntityFactory<(T)>;}
declare module "com.tterrag.registrate.builders.FluidBuilder" {
import {$FluidType$Properties$$Type} from "net.neoforged.neoforge.fluids.FluidType$Properties"
import {$AbstractBuilder} from "com.tterrag.registrate.builders.AbstractBuilder"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$NonNullSupplier, $NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$BucketItem} from "net.minecraft.world.item.BucketItem"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$NonNullConsumer$$Type} from "com.tterrag.registrate.util.nullness.NonNullConsumer"
import {$BuilderCallback$$Type} from "com.tterrag.registrate.builders.BuilderCallback"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$NonNullFunction$$Type} from "com.tterrag.registrate.util.nullness.NonNullFunction"
import {$BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$BlockBuilder} from "com.tterrag.registrate.builders.BlockBuilder"
import {$AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$NonNullBiFunction$$Type} from "com.tterrag.registrate.util.nullness.NonNullBiFunction"
import {$FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$FluidBuilder$FluidTypeFactory$$Type} from "com.tterrag.registrate.builders.FluidBuilder$FluidTypeFactory"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$ItemBuilder} from "com.tterrag.registrate.builders.ItemBuilder"
import {$LiquidBlock} from "net.minecraft.world.level.block.LiquidBlock"
import {$RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$BaseFlowingFluid, $BaseFlowingFluid$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid"
import {$FluidEntry} from "com.tterrag.registrate.util.entry.FluidEntry"
import {$BaseFlowingFluid$Flowing} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Flowing"

export class $FluidBuilder<T extends $BaseFlowingFluid, P> extends $AbstractBuilder<($Fluid), (T), (P), ($FluidBuilder<(T), (P)>)> {
constructor(arg0: $AbstractRegistrate$$Type<(never)>, arg1: P, arg2: StringJS, arg3: $BuilderCallback$$Type, arg4: $ResourceLocation$$Type, arg5: $ResourceLocation$$Type, arg6: $FluidBuilder$FluidTypeFactory$$Type, arg7: $NonNullFunction$$Type<($BaseFlowingFluid$Properties), (T)>)
constructor(arg0: $AbstractRegistrate$$Type<(never)>, arg1: P, arg2: StringJS, arg3: $BuilderCallback$$Type, arg4: $ResourceLocation$$Type, arg5: $ResourceLocation$$Type, arg6: $NonNullSupplier$$Type<($FluidType$$Type)>, arg7: $NonNullFunction$$Type<($BaseFlowingFluid$Properties), (T)>)

public "removeTag"(...arg0: ($TagKey$$Type<($Fluid$$Type)>)[]): $FluidBuilder<(T), (P)>
public "register"(): $FluidEntry<(T)>
public "source"(arg0: $NonNullFunction$$Type<($BaseFlowingFluid$Properties), ($BaseFlowingFluid$$Type)>): $FluidBuilder<(T), (P)>
public "properties"(arg0: $NonNullConsumer$$Type<($FluidType$Properties)>): $FluidBuilder<(T), (P)>
public static "create"<P>(arg0: $AbstractRegistrate$$Type<(never)>, arg1: P, arg2: StringJS, arg3: $BuilderCallback$$Type, arg4: $ResourceLocation$$Type, arg5: $ResourceLocation$$Type): $FluidBuilder<($BaseFlowingFluid$Flowing), (P)>
public static "create"<P>(arg0: $AbstractRegistrate$$Type<(never)>, arg1: P, arg2: StringJS, arg3: $BuilderCallback$$Type, arg4: $ResourceLocation$$Type, arg5: $ResourceLocation$$Type, arg6: $FluidBuilder$FluidTypeFactory$$Type): $FluidBuilder<($BaseFlowingFluid$Flowing), (P)>
public static "create"<P>(arg0: $AbstractRegistrate$$Type<(never)>, arg1: P, arg2: StringJS, arg3: $BuilderCallback$$Type, arg4: $ResourceLocation$$Type, arg5: $ResourceLocation$$Type, arg6: $NonNullSupplier$$Type<($FluidType$$Type)>): $FluidBuilder<($BaseFlowingFluid$Flowing), (P)>
public static "create"<T extends $BaseFlowingFluid, P>(arg0: $AbstractRegistrate$$Type<(never)>, arg1: P, arg2: StringJS, arg3: $BuilderCallback$$Type, arg4: $ResourceLocation$$Type, arg5: $ResourceLocation$$Type, arg6: $NonNullFunction$$Type<($BaseFlowingFluid$Properties), (T)>): $FluidBuilder<(T), (P)>
public static "create"<T extends $BaseFlowingFluid, P>(arg0: $AbstractRegistrate$$Type<(never)>, arg1: P, arg2: StringJS, arg3: $BuilderCallback$$Type, arg4: $ResourceLocation$$Type, arg5: $ResourceLocation$$Type, arg6: $NonNullSupplier$$Type<($FluidType$$Type)>, arg7: $NonNullFunction$$Type<($BaseFlowingFluid$Properties), (T)>): $FluidBuilder<(T), (P)>
public static "create"<T extends $BaseFlowingFluid, P>(arg0: $AbstractRegistrate$$Type<(never)>, arg1: P, arg2: StringJS, arg3: $BuilderCallback$$Type, arg4: $ResourceLocation$$Type, arg5: $ResourceLocation$$Type, arg6: $FluidBuilder$FluidTypeFactory$$Type, arg7: $NonNullFunction$$Type<($BaseFlowingFluid$Properties), (T)>): $FluidBuilder<(T), (P)>
public "block"<B extends $LiquidBlock>(arg0: $NonNullBiFunction$$Type<(T), ($BlockBehaviour$Properties), (B)>): $BlockBuilder<(B), ($FluidBuilder<(T), (P)>)>
public "block"(): $BlockBuilder<($LiquidBlock), ($FluidBuilder<(T), (P)>)>
public "lang"(arg0: StringJS): $FluidBuilder<(T), (P)>
public "tag"(...arg0: ($TagKey$$Type<($Fluid$$Type)>)[]): $FluidBuilder<(T), (P)>
public "defaultLang"(): $FluidBuilder<(T), (P)>
public "defaultSource"(): $FluidBuilder<(T), (P)>
public "fluidProperties"(arg0: $NonNullConsumer$$Type<($BaseFlowingFluid$Properties)>): $FluidBuilder<(T), (P)>
public "defaultBucket"(): $FluidBuilder<(T), (P)>
public "defaultBlock"(): $FluidBuilder<(T), (P)>
public "noBlock"(): $FluidBuilder<(T), (P)>
public "noBucket"(): $FluidBuilder<(T), (P)>
public "bucket"<I extends $BucketItem>(arg0: $NonNullBiFunction$$Type<($BaseFlowingFluid), ($Item$Properties), (I)>): $ItemBuilder<(I), ($FluidBuilder<(T), (P)>)>
public "bucket"(): $ItemBuilder<($BucketItem), ($FluidBuilder<(T), (P)>)>
public "renderType"(arg0: $Supplier$$Type<($Supplier$$Type<($RenderType$$Type)>)>): $FluidBuilder<(T), (P)>
public "get"(): any
public static "of"<T>(arg0: $Supplier$$Type<(T)>, arg1: $NonNullSupplier$$Type<(StringJS)>): $NonNullSupplier<(T)>
public static "of"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
public static "lazy"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidBuilder$$Type<T, P> = ($FluidBuilder<(T), (P)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidBuilder$$Original<T, P> = $FluidBuilder<(T), (P)>;}
declare module "com.tterrag.registrate.builders.MenuBuilder$ForgeMenuFactory" {
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MenuType, $MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"

export interface $MenuBuilder$ForgeMenuFactory$$Interface<T extends $AbstractContainerMenu> {

(arg0: $MenuType<(T)>, arg1: integer, arg2: $Inventory, arg3: $RegistryFriendlyByteBuf): T
}

export class $MenuBuilder$ForgeMenuFactory<T extends $AbstractContainerMenu> implements $MenuBuilder$ForgeMenuFactory$$Interface {
 "create"(arg0: $MenuType$$Type<(T)>, arg1: integer, arg2: $Inventory$$Type, arg3: $RegistryFriendlyByteBuf$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuBuilder$ForgeMenuFactory$$Type<T> = ((arg0: $MenuType<(T)>, arg1: integer, arg2: $Inventory, arg3: $RegistryFriendlyByteBuf) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MenuBuilder$ForgeMenuFactory$$Original<T> = $MenuBuilder$ForgeMenuFactory<(T)>;}
declare module "com.tterrag.registrate.builders.AbstractBuilder" {
import {$RegistryEntry, $RegistryEntry$$Type} from "com.tterrag.registrate.util.entry.RegistryEntry"
import {$RegistrateProvider} from "com.tterrag.registrate.providers.RegistrateProvider"
import {$NonNullBiConsumer$$Type} from "com.tterrag.registrate.util.nullness.NonNullBiConsumer"
import {$TagsProvider} from "net.minecraft.data.tags.TagsProvider"
import {$DataGenContext$$Type} from "com.tterrag.registrate.providers.DataGenContext"
import {$Builder, $Builder$$Interface} from "com.tterrag.registrate.builders.Builder"
import {$NonNullSupplier, $NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$NonNullConsumer$$Type} from "com.tterrag.registrate.util.nullness.NonNullConsumer"
import {$DataMapType$$Type} from "net.neoforged.neoforge.registries.datamaps.DataMapType"
import {$BuilderCallback$$Type} from "com.tterrag.registrate.builders.BuilderCallback"
import {$NonNullFunction$$Type} from "com.tterrag.registrate.util.nullness.NonNullFunction"
import {$AbstractRegistrate, $AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$ProviderType$$Type} from "com.tterrag.registrate.providers.ProviderType"

export class $AbstractBuilder<R, T, P, S extends $AbstractBuilder<(object), (object), (object), (object)>> implements $Builder$$Interface<(R), (T), (P), (S)> {
constructor(arg0: $AbstractRegistrate$$Type<(never)>, arg1: P, arg2: StringJS, arg3: $BuilderCallback$$Type, arg4: $ResourceKey$$Type<($Registry<(R)>)>)

public "removeTag"<TP extends $TagsProvider<(object)>>(arg0: $ProviderType$$Type<(TP)>, ...arg1: ($TagKey$$Type<(R)>)[]): S
public "getName"(): StringJS
public "register"(): $RegistryEntry<(R), (T)>
public "getParent"(): P
public "lang"(arg0: $NonNullFunction$$Type<(T), (StringJS)>, arg1: StringJS): S
public "lang"(arg0: $NonNullFunction$$Type<(T), (StringJS)>): S
public "getOwner"(): $AbstractRegistrate<(never)>
public "tag"<TP extends $TagsProvider<(object)>>(arg0: $ProviderType$$Type<(TP)>, ...arg1: ($TagKey$$Type<(R)>)[]): S
public "asOptional"(): S
public "asSupplier"(): $NonNullSupplier<(T)>
public "getRegistryKey"(): $ResourceKey<($Registry<(R)>)>
public "get"(): any
public "transform"<R2, T2, P2, S2 extends $Builder<(object), (object), (object), (object)>>(arg0: $NonNullFunction$$Type<(S), (S2)>): S2
public "build"(): P
public "getEntry"(): T
public "onRegisterAfter"<OR>(arg0: $ResourceKey$$Type<($Registry<(OR)>)>, arg1: $NonNullConsumer$$Type<(T)>): S
public "addMiscData"<D extends $RegistrateProvider>(arg0: $ProviderType$$Type<(D)>, arg1: $NonNullConsumer$$Type<(D)>): S
public "dataMap"<D>(arg0: $DataMapType$$Type<(R), (D)>, arg1: D): S
public "dataMap"<D>(arg0: $DataMapType$$Type<(R), (D)>, arg1: $NonNullFunction$$Type<($DataGenContext<(R), (T)>), (D)>): S
public "setData"<D extends $RegistrateProvider>(arg0: $ProviderType$$Type<(D)>, arg1: $NonNullBiConsumer$$Type<($DataGenContext<(R), (T)>), (D)>): S
public "onRegister"(arg0: $NonNullConsumer$$Type<(T)>): S
public static "of"<T>(arg0: $Supplier$$Type<($RegistryEntry$$Type<(R), (T)>)>, arg1: $NonNullSupplier$$Type<(StringJS)>): $NonNullSupplier<($RegistryEntry<(R), (T)>)>
public static "of"<T>(arg0: $Supplier$$Type<($RegistryEntry$$Type<(R), (T)>)>): $NonNullSupplier<($RegistryEntry<(R), (T)>)>
public static "lazy"<T>(arg0: $Supplier$$Type<($RegistryEntry$$Type<(R), (T)>)>): $NonNullSupplier<($RegistryEntry<(R), (T)>)>
public "lazy"(): $NonNullSupplier<($RegistryEntry<(R), (T)>)>
get "name"(): StringJS
get "parent"(): P
get "owner"(): $AbstractRegistrate<(never)>
get "registryKey"(): $ResourceKey<($Registry<(R)>)>
get "entry"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBuilder$$Type<R, T, P, S> = ($AbstractBuilder<(R), (T), (P), (S)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractBuilder$$Original<R, T, P, S> = $AbstractBuilder<(R), (T), (P), (S)>;}
declare module "com.tterrag.registrate.builders.MenuBuilder$ScreenFactory" {
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"

export interface $MenuBuilder$ScreenFactory$$Interface<M extends $AbstractContainerMenu, T extends $Screen> {

(arg0: M, arg1: $Inventory, arg2: $Component): T
}

export class $MenuBuilder$ScreenFactory<M extends $AbstractContainerMenu, T extends $Screen> implements $MenuBuilder$ScreenFactory$$Interface {
 "create"(arg0: M, arg1: $Inventory$$Type, arg2: $Component$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuBuilder$ScreenFactory$$Type<M, T> = ((arg0: M, arg1: $Inventory, arg2: $Component) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MenuBuilder$ScreenFactory$$Original<M, T> = $MenuBuilder$ScreenFactory<(M), (T)>;}
declare module "com.tterrag.registrate.builders.BlockBuilder" {
import {$NonNullBiConsumer$$Type} from "com.tterrag.registrate.util.nullness.NonNullBiConsumer"
import {$AbstractBuilder} from "com.tterrag.registrate.builders.AbstractBuilder"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$DataGenContext$$Type} from "com.tterrag.registrate.providers.DataGenContext"
import {$NonNullSupplier, $NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$RegistrateBlockLootTables$$Type} from "com.tterrag.registrate.providers.loot.RegistrateBlockLootTables"
import {$BlockEntityBuilder} from "com.tterrag.registrate.builders.BlockEntityBuilder"
import {$RegistrateBlockstateProvider$$Type} from "com.tterrag.registrate.providers.RegistrateBlockstateProvider"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function$$Type} from "java.util.function.Function"
import {$BuilderCallback$$Type} from "com.tterrag.registrate.builders.BuilderCallback"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$NonNullFunction$$Type} from "com.tterrag.registrate.util.nullness.NonNullFunction"
import {$AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$NonNullBiFunction$$Type} from "com.tterrag.registrate.util.nullness.NonNullBiFunction"
import {$BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$NonNullUnaryOperator$$Type} from "com.tterrag.registrate.util.nullness.NonNullUnaryOperator"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$RegistrateRecipeProvider$$Type} from "com.tterrag.registrate.providers.RegistrateRecipeProvider"
import {$BlockEntityBuilder$BlockEntityFactory$$Type} from "com.tterrag.registrate.builders.BlockEntityBuilder$BlockEntityFactory"
import {$IClientBlockExtensions$$Type} from "net.neoforged.neoforge.client.extensions.common.IClientBlockExtensions"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$BlockEntry} from "com.tterrag.registrate.util.entry.BlockEntry"
import {$ItemBuilder} from "com.tterrag.registrate.builders.ItemBuilder"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export class $BlockBuilder<T extends $Block, P> extends $AbstractBuilder<($Block), (T), (P), ($BlockBuilder<(T), (P)>)> {
public "blockstate"(arg0: $NonNullBiConsumer$$Type<($DataGenContext<($Block), (T)>), ($RegistrateBlockstateProvider)>): $BlockBuilder<(T), (P)>
public "register"(): $BlockEntry<(T)>
public "properties"(arg0: $NonNullUnaryOperator$$Type<($BlockBehaviour$Properties)>): $BlockBuilder<(T), (P)>
public static "create"<T extends $Block, P>(arg0: $AbstractRegistrate$$Type<(never)>, arg1: P, arg2: StringJS, arg3: $BuilderCallback$$Type, arg4: $NonNullFunction$$Type<($BlockBehaviour$Properties), (T)>): $BlockBuilder<(T), (P)>
public "color"(arg0: $NonNullSupplier$$Type<($Supplier$$Type<($BlockColor$$Type)>)>): $BlockBuilder<(T), (P)>
public "lang"(arg0: StringJS): $BlockBuilder<(T), (P)>
public "recipe"(arg0: $NonNullBiConsumer$$Type<($DataGenContext<($Block), (T)>), ($RegistrateRecipeProvider)>): $BlockBuilder<(T), (P)>
public "tag"(...arg0: ($TagKey$$Type<($Block$$Type)>)[]): $BlockBuilder<(T), (P)>
public "item"(): $ItemBuilder<($BlockItem), ($BlockBuilder<(T), (P)>)>
public "item"<I extends $Item>(arg0: $NonNullBiFunction$$Type<(T), ($Item$Properties), (I)>): $ItemBuilder<(I), ($BlockBuilder<(T), (P)>)>
public "loot"(arg0: $NonNullBiConsumer$$Type<($RegistrateBlockLootTables), (T)>): $BlockBuilder<(T), (P)>
public "defaultLang"(): $BlockBuilder<(T), (P)>
public "defaultBlockstate"(): $BlockBuilder<(T), (P)>
public "defaultLoot"(): $BlockBuilder<(T), (P)>
public "simpleBlockEntity"<BE extends $BlockEntity>(arg0: $BlockEntityBuilder$BlockEntityFactory$$Type<(BE)>): $BlockBuilder<(T), (P)>
public "initialProperties"(arg0: $NonNullSupplier$$Type<($Block$$Type)>): $BlockBuilder<(T), (P)>
public "blockEntity"<BE extends $BlockEntity>(arg0: $BlockEntityBuilder$BlockEntityFactory$$Type<(BE)>): $BlockEntityBuilder<(BE), ($BlockBuilder<(T), (P)>)>
public "simpleItem"(): $BlockBuilder<(T), (P)>
/**
 * 
 * @deprecated
 */
public "addLayer"(arg0: $Supplier$$Type<($Supplier$$Type<($RenderType$$Type)>)>): $BlockBuilder<(T), (P)>
/**
 * 
 * @deprecated
 */
public "clientExtension"(arg0: $Function$$Type<(T), ($NonNullSupplier$$Type<($Supplier$$Type<($IClientBlockExtensions$$Type)>)>)>): $BlockBuilder<(T), (P)>
public "clientExtension"(arg0: $NonNullSupplier$$Type<($Supplier$$Type<($IClientBlockExtensions$$Type)>)>): $BlockBuilder<(T), (P)>
public "get"(): any
public static "of"<T>(arg0: $Supplier$$Type<(T)>, arg1: $NonNullSupplier$$Type<(StringJS)>): $NonNullSupplier<(T)>
public static "of"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
public static "lazy"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBuilder$$Type<T, P> = ($BlockBuilder<(T), (P)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockBuilder$$Original<T, P> = $BlockBuilder<(T), (P)>;}
declare module "com.tterrag.registrate.builders.EntityBuilder" {
import {$EntityRenderer$$Type} from "net.minecraft.client.renderer.entity.EntityRenderer"
import {$EntityType$EntityFactory$$Type} from "net.minecraft.world.entity.EntityType$EntityFactory"
import {$NonNullBiConsumer$$Type} from "com.tterrag.registrate.util.nullness.NonNullBiConsumer"
import {$AbstractBuilder} from "com.tterrag.registrate.builders.AbstractBuilder"
import {$SpawnEggItem} from "net.minecraft.world.item.SpawnEggItem"
import {$RegistrateEntityLootTables$$Type} from "com.tterrag.registrate.providers.loot.RegistrateEntityLootTables"
import {$SpawnPlacementType$$Type} from "net.minecraft.world.entity.SpawnPlacementType"
import {$NonNullSupplier, $NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$NonNullConsumer$$Type} from "com.tterrag.registrate.util.nullness.NonNullConsumer"
import {$BuilderCallback$$Type} from "com.tterrag.registrate.builders.BuilderCallback"
import {$NonNullFunction$$Type} from "com.tterrag.registrate.util.nullness.NonNullFunction"
import {$AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$RegisterSpawnPlacementsEvent$Operation$$Type} from "net.neoforged.neoforge.event.entity.RegisterSpawnPlacementsEvent$Operation"
import {$EntityType$Builder$$Type} from "net.minecraft.world.entity.EntityType$Builder"
import {$SpawnPlacements$SpawnPredicate$$Type} from "net.minecraft.world.entity.SpawnPlacements$SpawnPredicate"
import {$EntityRendererProvider$Context$$Type} from "net.minecraft.client.renderer.entity.EntityRendererProvider$Context"
import {$Heightmap$Types$$Type} from "net.minecraft.world.level.levelgen.Heightmap$Types"
import {$EntityEntry} from "com.tterrag.registrate.util.entry.EntityEntry"
import {$MobCategory$$Type} from "net.minecraft.world.entity.MobCategory"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$AttributeSupplier$Builder$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeSupplier$Builder"
import {$ItemBuilder} from "com.tterrag.registrate.builders.ItemBuilder"

export class $EntityBuilder<T extends $Entity, P> extends $AbstractBuilder<($EntityType<(never)>), ($EntityType<(T)>), (P), ($EntityBuilder<(T), (P)>)> {
public "register"(): $EntityEntry<(T)>
public "properties"(arg0: $NonNullConsumer$$Type<($EntityType$Builder<(T)>)>): $EntityBuilder<(T), (P)>
public static "create"<T extends $Entity, P>(arg0: $AbstractRegistrate$$Type<(never)>, arg1: P, arg2: StringJS, arg3: $BuilderCallback$$Type, arg4: $EntityType$EntityFactory$$Type<(T)>, arg5: $MobCategory$$Type): $EntityBuilder<(T), (P)>
public "lang"(arg0: StringJS): $EntityBuilder<(T), (P)>
public "attributes"(arg0: $Supplier$$Type<($AttributeSupplier$Builder$$Type)>): $EntityBuilder<(T), (P)>
public "tag"(...arg0: ($TagKey$$Type<($EntityType$$Type<(never)>)>)[]): $EntityBuilder<(T), (P)>
public "loot"(arg0: $NonNullBiConsumer$$Type<($RegistrateEntityLootTables), ($EntityType<(T)>)>): $EntityBuilder<(T), (P)>
/**
 * 
 * @deprecated
 */
public "spawnEgg"(arg0: integer, arg1: integer): $ItemBuilder<($SpawnEggItem), ($EntityBuilder<(T), (P)>)>
public "defaultLang"(): $EntityBuilder<(T), (P)>
public "spawnPlacement"(arg0: $SpawnPlacementType$$Type, arg1: $Heightmap$Types$$Type, arg2: $SpawnPlacements$SpawnPredicate$$Type<(T)>, arg3: $RegisterSpawnPlacementsEvent$Operation$$Type): $EntityBuilder<(T), (P)>
public "renderer"(arg0: $NonNullSupplier$$Type<($NonNullFunction$$Type<($EntityRendererProvider$Context$$Type), ($EntityRenderer$$Type<(T)>)>)>): $EntityBuilder<(T), (P)>
/**
 * 
 * @deprecated
 */
public "defaultSpawnEgg"(arg0: integer, arg1: integer): $EntityBuilder<(T), (P)>
public "get"(): any
public static "of"<T>(arg0: $Supplier$$Type<(T)>, arg1: $NonNullSupplier$$Type<(StringJS)>): $NonNullSupplier<(T)>
public static "of"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
public static "lazy"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityBuilder$$Type<T, P> = ($EntityBuilder<(T), (P)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityBuilder$$Original<T, P> = $EntityBuilder<(T), (P)>;}
declare module "com.tterrag.registrate.builders.BlockEntityBuilder" {
import {$RegistryEntry} from "com.tterrag.registrate.util.entry.RegistryEntry"
import {$RegisterCapabilitiesEvent$$Type} from "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$AbstractBuilder} from "com.tterrag.registrate.builders.AbstractBuilder"
import {$BlockEntityBuilder$BlockEntityFactory$$Type} from "com.tterrag.registrate.builders.BlockEntityBuilder$BlockEntityFactory"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$NonNullSupplier, $NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$BuilderCallback$$Type} from "com.tterrag.registrate.builders.BuilderCallback"
import {$BlockEntityRenderer$$Type} from "net.minecraft.client.renderer.blockentity.BlockEntityRenderer"
import {$NonNullFunction$$Type} from "com.tterrag.registrate.util.nullness.NonNullFunction"
import {$AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$BlockEntityRendererProvider$Context$$Type} from "net.minecraft.client.renderer.blockentity.BlockEntityRendererProvider$Context"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $BlockEntityBuilder<T extends $BlockEntity, P> extends $AbstractBuilder<($BlockEntityType<(never)>), ($BlockEntityType<(T)>), (P), ($BlockEntityBuilder<(T), (P)>)> {
public "register"(): $RegistryEntry
public static "create"<T extends $BlockEntity, P>(arg0: $AbstractRegistrate$$Type<(never)>, arg1: P, arg2: StringJS, arg3: $BuilderCallback$$Type, arg4: $BlockEntityBuilder$BlockEntityFactory$$Type<(T)>): $BlockEntityBuilder<(T), (P)>
public "validBlocks"(...arg0: ($NonNullSupplier$$Type<($Block$$Type)>)[]): $BlockEntityBuilder<(T), (P)>
public "registerCapability"(arg0: $Consumer$$Type<($RegisterCapabilitiesEvent)>): $BlockEntityBuilder<(T), (P)>
public "validBlock"(arg0: $NonNullSupplier$$Type<($Block$$Type)>): $BlockEntityBuilder<(T), (P)>
public "renderer"(arg0: $NonNullSupplier$$Type<($NonNullFunction$$Type<($BlockEntityRendererProvider$Context$$Type), ($BlockEntityRenderer$$Type<(T)>)>)>): $BlockEntityBuilder<(T), (P)>
public "get"(): any
public static "of"<T>(arg0: $Supplier$$Type<(T)>, arg1: $NonNullSupplier$$Type<(StringJS)>): $NonNullSupplier<(T)>
public static "of"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
public static "lazy"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityBuilder$$Type<T, P> = ($BlockEntityBuilder<(T), (P)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEntityBuilder$$Original<T, P> = $BlockEntityBuilder<(T), (P)>;}
declare module "com.tterrag.registrate.builders.MenuBuilder$MenuFactory" {
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$MenuType, $MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"

export interface $MenuBuilder$MenuFactory$$Interface<T extends $AbstractContainerMenu> {

(arg0: $MenuType<(T)>, arg1: integer, arg2: $Inventory): T
}

export class $MenuBuilder$MenuFactory<T extends $AbstractContainerMenu> implements $MenuBuilder$MenuFactory$$Interface {
 "create"(arg0: $MenuType$$Type<(T)>, arg1: integer, arg2: $Inventory$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuBuilder$MenuFactory$$Type<T> = ((arg0: $MenuType<(T)>, arg1: integer, arg2: $Inventory) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MenuBuilder$MenuFactory$$Original<T> = $MenuBuilder$MenuFactory<(T)>;}
declare module "com.tterrag.registrate.builders.FluidBuilder$FluidTypeFactory" {
import {$FluidType$Properties, $FluidType$Properties$$Type} from "net.neoforged.neoforge.fluids.FluidType$Properties"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"

export interface $FluidBuilder$FluidTypeFactory$$Interface {

(arg0: $FluidType$Properties, arg1: $ResourceLocation, arg2: $ResourceLocation): $FluidType$$Type
}

export class $FluidBuilder$FluidTypeFactory implements $FluidBuilder$FluidTypeFactory$$Interface {
 "create"(arg0: $FluidType$Properties$$Type, arg1: $ResourceLocation$$Type, arg2: $ResourceLocation$$Type): $FluidType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidBuilder$FluidTypeFactory$$Type = ((arg0: $FluidType$Properties, arg1: $ResourceLocation, arg2: $ResourceLocation) => $FluidType$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidBuilder$FluidTypeFactory$$Original = $FluidBuilder$FluidTypeFactory;}
declare module "com.tterrag.registrate.builders.BuilderCallback" {
import {$NonNullSupplier, $NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$RegistryEntry, $RegistryEntry$$Type} from "com.tterrag.registrate.util.entry.RegistryEntry"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$NonNullFunction, $NonNullFunction$$Type} from "com.tterrag.registrate.util.nullness.NonNullFunction"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Builder, $Builder$$Type} from "com.tterrag.registrate.builders.Builder"
import {$DeferredHolder, $DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"

export interface $BuilderCallback$$Interface {

(arg0: StringJS, arg1: $ResourceKey<($Registry<(R)>)>, arg2: $Builder<(R), (T), (never), (never)>, arg3: $NonNullSupplier<(T)>, arg4: $NonNullFunction<($DeferredHolder<(R), (T)>), ($RegistryEntry$$Type<(R), (T)>)>): $RegistryEntry$$Type<(R), (T)>
}

export class $BuilderCallback implements $BuilderCallback$$Interface {
 "accept"<R, T>(arg0: StringJS, arg1: $ResourceKey$$Type<($Registry<(R)>)>, arg2: $Builder$$Type<(R), (T), (never), (never)>, arg3: $NonNullSupplier$$Type<(T)>, arg4: $NonNullFunction$$Type<($DeferredHolder<(R), (T)>), ($RegistryEntry$$Type<(R), (T)>)>): $RegistryEntry<(R), (T)>
 "accept"<R, T>(arg0: StringJS, arg1: $ResourceKey$$Type<($Registry<(R)>)>, arg2: $Builder$$Type<(R), (T), (never), (never)>, arg3: $NonNullSupplier$$Type<(T)>): $RegistryEntry<(R), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuilderCallback$$Type = ((arg0: StringJS, arg1: $ResourceKey<($Registry<(R)>)>, arg2: $Builder<(R), (T), (never), (never)>, arg3: $NonNullSupplier<(T)>, arg4: $NonNullFunction<($DeferredHolder<(R), (T)>), ($RegistryEntry<(R), (T)>)>) => $RegistryEntry$$Type<(R), (T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BuilderCallback$$Original = $BuilderCallback;}
declare module "com.tterrag.registrate.builders.NoConfigBuilder" {
import {$NonNullSupplier, $NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$BuilderCallback$$Type} from "com.tterrag.registrate.builders.BuilderCallback"
import {$AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$AbstractBuilder} from "com.tterrag.registrate.builders.AbstractBuilder"

export class $NoConfigBuilder<R, T, P> extends $AbstractBuilder<(R), (T), (P), ($NoConfigBuilder<(R), (T), (P)>)> {
constructor(arg0: $AbstractRegistrate$$Type<(never)>, arg1: P, arg2: StringJS, arg3: $BuilderCallback$$Type, arg4: $ResourceKey$$Type<($Registry<(R)>)>, arg5: $NonNullSupplier$$Type<(T)>)

public "get"(): any
public static "of"<T>(arg0: $Supplier$$Type<(T)>, arg1: $NonNullSupplier$$Type<(StringJS)>): $NonNullSupplier<(T)>
public static "of"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
public static "lazy"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoConfigBuilder$$Type<R, T, P> = ($NoConfigBuilder<(R), (T), (P)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NoConfigBuilder$$Original<R, T, P> = $NoConfigBuilder<(R), (T), (P)>;}
