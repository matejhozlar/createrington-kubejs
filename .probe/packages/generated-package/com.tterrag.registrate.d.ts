declare module "com.tterrag.registrate.AbstractRegistrate" {
import {$RegistryEntry} from "com.tterrag.registrate.util.entry.RegistryEntry"
import {$EntityType$EntityFactory$$Type} from "net.minecraft.world.entity.EntityType$EntityFactory"
import {$Optional} from "java.util.Optional"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$EntityBuilder} from "com.tterrag.registrate.builders.EntityBuilder"
import {$BlockEntityBuilder} from "com.tterrag.registrate.builders.BlockEntityBuilder"
import {$CreativeModeTab, $CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$MenuBuilder$ScreenFactory$$Type} from "com.tterrag.registrate.builders.MenuBuilder$ScreenFactory"
import {$BuilderCallback$$Type} from "com.tterrag.registrate.builders.BuilderCallback"
import {$NonNullFunction$$Type} from "com.tterrag.registrate.util.nullness.NonNullFunction"
import {$BlockBuilder} from "com.tterrag.registrate.builders.BlockBuilder"
import {$NonNullBiFunction$$Type} from "com.tterrag.registrate.util.nullness.NonNullBiFunction"
import {$FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$NonNullUnaryOperator$$Type} from "com.tterrag.registrate.util.nullness.NonNullUnaryOperator"
import {$RegistryBuilder$$Type} from "net.neoforged.neoforge.registries.RegistryBuilder"
import {$FluidBuilder} from "com.tterrag.registrate.builders.FluidBuilder"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$ItemBuilder} from "com.tterrag.registrate.builders.ItemBuilder"
import {$CreativeModeTab$Builder$$Type} from "net.minecraft.world.item.CreativeModeTab$Builder"
import {$MenuBuilder$ForgeMenuFactory$$Type} from "com.tterrag.registrate.builders.MenuBuilder$ForgeMenuFactory"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BaseFlowingFluid} from "net.neoforged.neoforge.fluids.BaseFlowingFluid"
import {$ProviderType$$Type} from "com.tterrag.registrate.providers.ProviderType"
import {$BaseFlowingFluid$Flowing} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Flowing"
import {$MenuBuilder$MenuFactory$$Type} from "com.tterrag.registrate.builders.MenuBuilder$MenuFactory"
import {$Screen} from "net.minecraft.client.gui.screens.Screen"
import {$NoConfigBuilder} from "com.tterrag.registrate.builders.NoConfigBuilder"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$IEventBus, $IEventBus$$Type} from "net.neoforged.bus.api.IEventBus"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$NonNullConsumer$$Type} from "com.tterrag.registrate.util.nullness.NonNullConsumer"
import {$Function$$Type} from "java.util.function.Function"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$MenuBuilder} from "com.tterrag.registrate.builders.MenuBuilder"
import {$BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$RegistrateProvider, $RegistrateProvider$$Type} from "com.tterrag.registrate.providers.RegistrateProvider"
import {$DataProviderInitializer} from "com.tterrag.registrate.providers.DataProviderInitializer"
import {$Collection} from "java.util.Collection"
import {$CreativeModeTabModifier$$Type} from "com.tterrag.registrate.util.CreativeModeTabModifier"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockEntityBuilder$BlockEntityFactory$$Type} from "com.tterrag.registrate.builders.BlockEntityBuilder$BlockEntityFactory"
import {$Builder, $Builder$$Type} from "com.tterrag.registrate.builders.Builder"
import {$FluidBuilder$FluidTypeFactory$$Type} from "com.tterrag.registrate.builders.FluidBuilder$FluidTypeFactory"
import {$MobCategory$$Type} from "net.minecraft.world.entity.MobCategory"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"

export class $AbstractRegistrate<S extends $AbstractRegistrate<(object)>> {
public "get"<R, T>(arg0: $ResourceKey$$Type<($Registry<(R)>)>): $RegistryEntry<(R), (T)>
public "get"<R, T>(arg0: StringJS, arg1: $ResourceKey$$Type<($Registry<(R)>)>): $RegistryEntry<(R), (T)>
public "transform"<R, T, P, S2 extends $Builder<(object), (object), (object), (object)>>(arg0: $NonNullFunction$$Type<(S), (S2)>): S2
public "transform"(arg0: $NonNullUnaryOperator$$Type<(S)>): S
public "isRegistered"<R>(arg0: $ResourceKey$$Type<($Registry<(R)>)>): boolean
public "entry"<R, T, P, S2 extends $Builder<(object), (object), (object), (object)>>(arg0: StringJS, arg1: $NonNullFunction$$Type<($BuilderCallback), (S2)>): S2
public "entry"<R, T, P, S2 extends $Builder<(object), (object), (object), (object)>>(arg0: $NonNullBiFunction$$Type<(StringJS), ($BuilderCallback), (S2)>): S2
public "generic"<R, T>(arg0: $ResourceKey$$Type<($Registry<(R)>)>, arg1: $NonNullSupplier$$Type<(T)>): $NoConfigBuilder<(R), (T), (S)>
public "generic"<R, T, P>(arg0: P, arg1: StringJS, arg2: $ResourceKey$$Type<($Registry<(R)>)>, arg3: $NonNullSupplier$$Type<(T)>): $NoConfigBuilder<(R), (T), (P)>
public "generic"<R, T>(arg0: StringJS, arg1: $ResourceKey$$Type<($Registry<(R)>)>, arg2: $NonNullSupplier$$Type<(T)>): $NoConfigBuilder<(R), (T), (S)>
public "generic"<R, T, P>(arg0: P, arg1: $ResourceKey$$Type<($Registry<(R)>)>, arg2: $NonNullSupplier$$Type<(T)>): $NoConfigBuilder<(R), (T), (P)>
public "block"<T extends $Block>(arg0: StringJS, arg1: $NonNullFunction$$Type<($BlockBehaviour$Properties), (T)>): $BlockBuilder<(T), (S)>
public "block"<T extends $Block, P>(arg0: P, arg1: StringJS, arg2: $NonNullFunction$$Type<($BlockBehaviour$Properties), (T)>): $BlockBuilder<(T), (P)>
public "block"<T extends $Block>(arg0: $NonNullFunction$$Type<($BlockBehaviour$Properties), (T)>): $BlockBuilder<(T), (S)>
public "block"<T extends $Block, P>(arg0: P, arg1: $NonNullFunction$$Type<($BlockBehaviour$Properties), (T)>): $BlockBuilder<(T), (P)>
public "object"(arg0: StringJS): S
public "getAll"<R, T>(arg0: $ResourceKey$$Type<($Registry<(R)>)>): $Collection<($RegistryEntry<(R), (T)>)>
public "item"<T extends $Item, P>(arg0: P, arg1: $NonNullFunction$$Type<($Item$Properties), (T)>): $ItemBuilder<(T), (P)>
public "item"<T extends $Item>(arg0: StringJS, arg1: $NonNullFunction$$Type<($Item$Properties), (T)>): $ItemBuilder<(T), (S)>
public "item"<T extends $Item>(arg0: $NonNullFunction$$Type<($Item$Properties), (T)>): $ItemBuilder<(T), (S)>
public "item"<T extends $Item, P>(arg0: P, arg1: StringJS, arg2: $NonNullFunction$$Type<($Item$Properties), (T)>): $ItemBuilder<(T), (P)>
public "entity"<T extends $Entity, P>(arg0: P, arg1: StringJS, arg2: $EntityType$EntityFactory$$Type<(T)>, arg3: $MobCategory$$Type): $EntityBuilder<(T), (P)>
public "entity"<T extends $Entity, P>(arg0: P, arg1: $EntityType$EntityFactory$$Type<(T)>, arg2: $MobCategory$$Type): $EntityBuilder<(T), (P)>
public "entity"<T extends $Entity>(arg0: $EntityType$EntityFactory$$Type<(T)>, arg1: $MobCategory$$Type): $EntityBuilder<(T), (S)>
public "entity"<T extends $Entity>(arg0: StringJS, arg1: $EntityType$EntityFactory$$Type<(T)>, arg2: $MobCategory$$Type): $EntityBuilder<(T), (S)>
public "getOptional"<R, T>(arg0: StringJS, arg1: $ResourceKey$$Type<($Registry<(R)>)>): $Optional<($RegistryEntry<(R), (T)>)>
public "genData"<T extends $RegistrateProvider>(arg0: $ProviderType$$Type<(T)>, arg1: T): void
public "skipErrors"(arg0: boolean): S
public "addRawLang"(arg0: StringJS, arg1: StringJS): $MutableComponent
public "addLang"(arg0: StringJS, arg1: $ResourceLocation$$Type, arg2: StringJS, arg3: StringJS): $MutableComponent
public "addLang"(arg0: StringJS, arg1: $ResourceLocation$$Type, arg2: StringJS): $MutableComponent
public "getModid"(): StringJS
public "fluid"<T extends $BaseFlowingFluid>(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type, arg2: $NonNullSupplier$$Type<($FluidType$$Type)>, arg3: $NonNullFunction$$Type<($BaseFlowingFluid$Properties), (T)>): $FluidBuilder<(T), (S)>
public "fluid"(arg0: StringJS): $FluidBuilder<($BaseFlowingFluid$Flowing), (S)>
public "fluid"<T extends $BaseFlowingFluid>(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type, arg2: $FluidBuilder$FluidTypeFactory$$Type, arg3: $NonNullFunction$$Type<($BaseFlowingFluid$Properties), (T)>): $FluidBuilder<(T), (S)>
public "fluid"<T extends $BaseFlowingFluid>(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type, arg2: $NonNullFunction$$Type<($BaseFlowingFluid$Properties), (T)>): $FluidBuilder<(T), (S)>
public "fluid"<T extends $BaseFlowingFluid>(arg0: StringJS, arg1: $ResourceLocation$$Type, arg2: $ResourceLocation$$Type, arg3: $FluidBuilder$FluidTypeFactory$$Type, arg4: $NonNullFunction$$Type<($BaseFlowingFluid$Properties), (T)>): $FluidBuilder<(T), (S)>
public "fluid"<T extends $BaseFlowingFluid>(arg0: StringJS, arg1: $ResourceLocation$$Type, arg2: $ResourceLocation$$Type, arg3: $NonNullFunction$$Type<($BaseFlowingFluid$Properties), (T)>): $FluidBuilder<(T), (S)>
public "fluid"(arg0: StringJS, arg1: $ResourceLocation$$Type, arg2: $ResourceLocation$$Type, arg3: $NonNullSupplier$$Type<($FluidType$$Type)>): $FluidBuilder<($BaseFlowingFluid$Flowing), (S)>
public "fluid"(arg0: StringJS, arg1: $ResourceLocation$$Type, arg2: $ResourceLocation$$Type, arg3: $FluidBuilder$FluidTypeFactory$$Type): $FluidBuilder<($BaseFlowingFluid$Flowing), (S)>
public "fluid"(arg0: StringJS, arg1: $ResourceLocation$$Type, arg2: $ResourceLocation$$Type): $FluidBuilder<($BaseFlowingFluid$Flowing), (S)>
public "fluid"(arg0: StringJS, arg1: $NonNullSupplier$$Type<($FluidType$$Type)>): $FluidBuilder<($BaseFlowingFluid$Flowing), (S)>
public "fluid"(arg0: StringJS, arg1: $FluidBuilder$FluidTypeFactory$$Type): $FluidBuilder<($BaseFlowingFluid$Flowing), (S)>
public "fluid"<P>(arg0: P, arg1: StringJS, arg2: $ResourceLocation$$Type, arg3: $ResourceLocation$$Type): $FluidBuilder<($BaseFlowingFluid$Flowing), (P)>
public "fluid"<P>(arg0: P, arg1: StringJS, arg2: $NonNullSupplier$$Type<($FluidType$$Type)>): $FluidBuilder<($BaseFlowingFluid$Flowing), (P)>
public "fluid"<P>(arg0: P, arg1: StringJS, arg2: $FluidBuilder$FluidTypeFactory$$Type): $FluidBuilder<($BaseFlowingFluid$Flowing), (P)>
public "fluid"<P>(arg0: P, arg1: StringJS): $FluidBuilder<($BaseFlowingFluid$Flowing), (P)>
public "fluid"<T extends $BaseFlowingFluid, P>(arg0: P, arg1: $ResourceLocation$$Type, arg2: $ResourceLocation$$Type, arg3: $NonNullSupplier$$Type<($FluidType$$Type)>, arg4: $NonNullFunction$$Type<($BaseFlowingFluid$Properties), (T)>): $FluidBuilder<(T), (P)>
public "fluid"<T extends $BaseFlowingFluid, P>(arg0: P, arg1: StringJS, arg2: $ResourceLocation$$Type, arg3: $ResourceLocation$$Type, arg4: $NonNullSupplier$$Type<($FluidType$$Type)>, arg5: $NonNullFunction$$Type<($BaseFlowingFluid$Properties), (T)>): $FluidBuilder<(T), (P)>
public "fluid"<T extends $BaseFlowingFluid, P>(arg0: P, arg1: StringJS, arg2: $ResourceLocation$$Type, arg3: $ResourceLocation$$Type, arg4: $FluidBuilder$FluidTypeFactory$$Type, arg5: $NonNullFunction$$Type<($BaseFlowingFluid$Properties), (T)>): $FluidBuilder<(T), (P)>
public "fluid"<T extends $BaseFlowingFluid, P>(arg0: P, arg1: StringJS, arg2: $ResourceLocation$$Type, arg3: $ResourceLocation$$Type, arg4: $NonNullFunction$$Type<($BaseFlowingFluid$Properties), (T)>): $FluidBuilder<(T), (P)>
public "fluid"<P>(arg0: P, arg1: StringJS, arg2: $ResourceLocation$$Type, arg3: $ResourceLocation$$Type, arg4: $NonNullSupplier$$Type<($FluidType$$Type)>): $FluidBuilder<($BaseFlowingFluid$Flowing), (P)>
public "fluid"<P>(arg0: P, arg1: StringJS, arg2: $ResourceLocation$$Type, arg3: $ResourceLocation$$Type, arg4: $FluidBuilder$FluidTypeFactory$$Type): $FluidBuilder<($BaseFlowingFluid$Flowing), (P)>
public "fluid"<P>(arg0: P, arg1: $ResourceLocation$$Type, arg2: $ResourceLocation$$Type): $FluidBuilder<($BaseFlowingFluid$Flowing), (P)>
public "fluid"<P>(arg0: P, arg1: $NonNullSupplier$$Type<($FluidType$$Type)>): $FluidBuilder<($BaseFlowingFluid$Flowing), (P)>
public "fluid"<P>(arg0: P, arg1: $FluidBuilder$FluidTypeFactory$$Type): $FluidBuilder<($BaseFlowingFluid$Flowing), (P)>
public "fluid"<P>(arg0: P): $FluidBuilder<($BaseFlowingFluid$Flowing), (P)>
public "fluid"<T extends $BaseFlowingFluid>(arg0: StringJS, arg1: $ResourceLocation$$Type, arg2: $ResourceLocation$$Type, arg3: $NonNullSupplier$$Type<($FluidType$$Type)>, arg4: $NonNullFunction$$Type<($BaseFlowingFluid$Properties), (T)>): $FluidBuilder<(T), (S)>
public "fluid"<T extends $BaseFlowingFluid, P>(arg0: P, arg1: $ResourceLocation$$Type, arg2: $ResourceLocation$$Type, arg3: $FluidBuilder$FluidTypeFactory$$Type, arg4: $NonNullFunction$$Type<($BaseFlowingFluid$Properties), (T)>): $FluidBuilder<(T), (P)>
public "fluid"<T extends $BaseFlowingFluid, P>(arg0: P, arg1: $ResourceLocation$$Type, arg2: $ResourceLocation$$Type, arg3: $NonNullFunction$$Type<($BaseFlowingFluid$Properties), (T)>): $FluidBuilder<(T), (P)>
public "fluid"<P>(arg0: P, arg1: $ResourceLocation$$Type, arg2: $ResourceLocation$$Type, arg3: $NonNullSupplier$$Type<($FluidType$$Type)>): $FluidBuilder<($BaseFlowingFluid$Flowing), (P)>
public "fluid"<P>(arg0: P, arg1: $ResourceLocation$$Type, arg2: $ResourceLocation$$Type, arg3: $FluidBuilder$FluidTypeFactory$$Type): $FluidBuilder<($BaseFlowingFluid$Flowing), (P)>
public "fluid"(): $FluidBuilder<($BaseFlowingFluid$Flowing), (S)>
public "fluid"(arg0: $FluidBuilder$FluidTypeFactory$$Type): $FluidBuilder<($BaseFlowingFluid$Flowing), (S)>
public "fluid"(arg0: $NonNullSupplier$$Type<($FluidType$$Type)>): $FluidBuilder<($BaseFlowingFluid$Flowing), (S)>
public "fluid"(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type, arg2: $NonNullSupplier$$Type<($FluidType$$Type)>): $FluidBuilder<($BaseFlowingFluid$Flowing), (S)>
public "fluid"(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type, arg2: $FluidBuilder$FluidTypeFactory$$Type): $FluidBuilder<($BaseFlowingFluid$Flowing), (S)>
public "fluid"(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type): $FluidBuilder<($BaseFlowingFluid$Flowing), (S)>
public "setDataGenerator"<P extends $RegistrateProvider, R>(arg0: StringJS, arg1: $ResourceKey$$Type<($Registry<(R)>)>, arg2: $ProviderType$$Type<(P)>, arg3: $NonNullConsumer$$Type<(P)>): S
public "setDataGenerator"<P extends $RegistrateProvider, R>(arg0: $Builder$$Type<(R), (never), (never), (never)>, arg1: $ProviderType$$Type<(P)>, arg2: $NonNullConsumer$$Type<(P)>): S
public "addDataGenerator"<T extends $RegistrateProvider>(arg0: $ProviderType$$Type<(T)>, arg1: $NonNullConsumer$$Type<(T)>): S
public "getDataProvider"<P extends $RegistrateProvider>(arg0: $ProviderType$$Type<(P)>): $Optional<(P)>
public "makeRegistry"<R>(arg0: StringJS, arg1: $Function$$Type<($ResourceKey<($Registry<(R)>)>), ($RegistryBuilder$$Type<(R)>)>): $ResourceKey<($Registry<(R)>)>
public "setModEventBus"(arg0: $IEventBus$$Type): void
public "getModEventBus"(): $IEventBus
public "defaultCreativeTab"<P>(arg0: P, arg1: StringJS): $NoConfigBuilder<($CreativeModeTab), ($CreativeModeTab), (P)>
public "defaultCreativeTab"(arg0: $Consumer$$Type<($CreativeModeTab$Builder)>): $NoConfigBuilder<($CreativeModeTab), ($CreativeModeTab), (S)>
public "defaultCreativeTab"<P>(arg0: P): $NoConfigBuilder<($CreativeModeTab), ($CreativeModeTab), (P)>
public "defaultCreativeTab"(arg0: StringJS): $NoConfigBuilder<($CreativeModeTab), ($CreativeModeTab), (S)>
public "defaultCreativeTab"(arg0: StringJS, arg1: $Consumer$$Type<($CreativeModeTab$Builder)>): $NoConfigBuilder<($CreativeModeTab), ($CreativeModeTab), (S)>
public "defaultCreativeTab"<P>(arg0: P, arg1: $Consumer$$Type<($CreativeModeTab$Builder)>): $NoConfigBuilder<($CreativeModeTab), ($CreativeModeTab), (P)>
public "defaultCreativeTab"<P>(arg0: P, arg1: StringJS, arg2: $Consumer$$Type<($CreativeModeTab$Builder)>): $NoConfigBuilder<($CreativeModeTab), ($CreativeModeTab), (P)>
public "defaultCreativeTab"(arg0: $ResourceKey$$Type<($CreativeModeTab)>): S
public "defaultCreativeTab"(): $NoConfigBuilder<($CreativeModeTab), ($CreativeModeTab), (S)>
public "blockEntity"<T extends $BlockEntity, P>(arg0: P, arg1: StringJS, arg2: $BlockEntityBuilder$BlockEntityFactory$$Type<(T)>): $BlockEntityBuilder<(T), (P)>
public "blockEntity"<T extends $BlockEntity>(arg0: StringJS, arg1: $BlockEntityBuilder$BlockEntityFactory$$Type<(T)>): $BlockEntityBuilder<(T), (S)>
public "blockEntity"<T extends $BlockEntity>(arg0: $BlockEntityBuilder$BlockEntityFactory$$Type<(T)>): $BlockEntityBuilder<(T), (S)>
public "blockEntity"<T extends $BlockEntity, P>(arg0: P, arg1: $BlockEntityBuilder$BlockEntityFactory$$Type<(T)>): $BlockEntityBuilder<(T), (P)>
public "menu"<T extends $AbstractContainerMenu, SC extends $Screen>(arg0: StringJS, arg1: $MenuBuilder$MenuFactory$$Type<(T)>, arg2: $NonNullSupplier$$Type<($MenuBuilder$ScreenFactory$$Type<(T), (SC)>)>): $MenuBuilder<(T), (SC), (S)>
public "menu"<T extends $AbstractContainerMenu, SC extends $Screen, P>(arg0: P, arg1: $MenuBuilder$MenuFactory$$Type<(T)>, arg2: $NonNullSupplier$$Type<($MenuBuilder$ScreenFactory$$Type<(T), (SC)>)>): $MenuBuilder<(T), (SC), (P)>
public "menu"<T extends $AbstractContainerMenu, SC extends $Screen>(arg0: $MenuBuilder$MenuFactory$$Type<(T)>, arg1: $NonNullSupplier$$Type<($MenuBuilder$ScreenFactory$$Type<(T), (SC)>)>): $MenuBuilder<(T), (SC), (S)>
public "menu"<T extends $AbstractContainerMenu, SC extends $Screen, P>(arg0: P, arg1: StringJS, arg2: $MenuBuilder$ForgeMenuFactory$$Type<(T)>, arg3: $NonNullSupplier$$Type<($MenuBuilder$ScreenFactory$$Type<(T), (SC)>)>): $MenuBuilder<(T), (SC), (P)>
public "menu"<T extends $AbstractContainerMenu, SC extends $Screen, P>(arg0: P, arg1: $MenuBuilder$ForgeMenuFactory$$Type<(T)>, arg2: $NonNullSupplier$$Type<($MenuBuilder$ScreenFactory$$Type<(T), (SC)>)>): $MenuBuilder<(T), (SC), (P)>
public "menu"<T extends $AbstractContainerMenu, SC extends $Screen>(arg0: StringJS, arg1: $MenuBuilder$ForgeMenuFactory$$Type<(T)>, arg2: $NonNullSupplier$$Type<($MenuBuilder$ScreenFactory$$Type<(T), (SC)>)>): $MenuBuilder<(T), (SC), (S)>
public "menu"<T extends $AbstractContainerMenu, SC extends $Screen>(arg0: $MenuBuilder$ForgeMenuFactory$$Type<(T)>, arg1: $NonNullSupplier$$Type<($MenuBuilder$ScreenFactory$$Type<(T), (SC)>)>): $MenuBuilder<(T), (SC), (S)>
public "menu"<T extends $AbstractContainerMenu, SC extends $Screen, P>(arg0: P, arg1: StringJS, arg2: $MenuBuilder$MenuFactory$$Type<(T)>, arg3: $NonNullSupplier$$Type<($MenuBuilder$ScreenFactory$$Type<(T), (SC)>)>): $MenuBuilder<(T), (SC), (P)>
public static "isDevEnvironment"(): boolean
public "registerEventListeners"(arg0: $IEventBus$$Type): S
public "addRegisterCallback"<R, T>(arg0: StringJS, arg1: $ResourceKey$$Type<($Registry<(R)>)>, arg2: $NonNullConsumer$$Type<(T)>): S
public "addRegisterCallback"<R>(arg0: $ResourceKey$$Type<($Registry<(R)>)>, arg1: $Runnable$$Type): S
public "getDataGenInitializer"(): $DataProviderInitializer
public "makeDatapackRegistry"<R>(arg0: StringJS, arg1: $Codec$$Type<(R)>, arg2: $Codec$$Type<(R)>): $ResourceKey<($Registry<(R)>)>
public "makeDatapackRegistry"<R>(arg0: StringJS, arg1: $Codec$$Type<(R)>): $ResourceKey<($Registry<(R)>)>
public "modifyCreativeModeTab"(arg0: $ResourceKey$$Type<($CreativeModeTab)>, arg1: $Consumer$$Type<($CreativeModeTabModifier)>): S
public "simple"<R, T, P>(arg0: P, arg1: StringJS, arg2: $ResourceKey$$Type<($Registry<(R)>)>, arg3: $NonNullSupplier$$Type<(T)>): $RegistryEntry<(R), (T)>
public "simple"<R, T, P>(arg0: P, arg1: $ResourceKey$$Type<($Registry<(R)>)>, arg2: $NonNullSupplier$$Type<(T)>): $RegistryEntry<(R), (T)>
public "simple"<R, T>(arg0: StringJS, arg1: $ResourceKey$$Type<($Registry<(R)>)>, arg2: $NonNullSupplier$$Type<(T)>): $RegistryEntry<(R), (T)>
public "simple"<R, T>(arg0: $ResourceKey$$Type<($Registry<(R)>)>, arg1: $NonNullSupplier$$Type<(T)>): $RegistryEntry<(R), (T)>
get "modid"(): StringJS
set "modEventBus"(value: $IEventBus$$Type)
get "modEventBus"(): $IEventBus
get "devEnvironment"(): boolean
get "dataGenInitializer"(): $DataProviderInitializer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractRegistrate$$Type<S> = ($AbstractRegistrate<(S)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractRegistrate$$Original<S> = $AbstractRegistrate<(S)>;}
