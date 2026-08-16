import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $ConnectedTextureBehaviour } from "@package/com/simibubi/create/foundation/block/connected";
import { $IEventBus } from "@package/net/neoforged/bus/api";
import { $AbstractRegistrate } from "@package/com/tterrag/registrate";
import { $CreativeModeTab_, $CreativeModeTab, $Item } from "@package/net/minecraft/world/item";
import { $SimpleBuilder } from "@package/com/simibubi/create/api/registry/registrate";
import { $EntityType$EntityFactory_, $MobCategory_, $Entity } from "@package/net/minecraft/world/entity";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $BaseFlowingFluid$Flowing, $FluidType, $BaseFlowingFluid, $BaseFlowingFluid$Properties, $FluidType$Properties } from "@package/net/neoforged/neoforge/fluids";
import { $NonNullFunction_, $NonNullSupplier_, $NonNullFunction, $NonNullConsumer } from "@package/com/tterrag/registrate/util/nullness";
import { $BlockBuilder, $BlockEntityBuilder$BlockEntityFactory_, $FluidBuilder, $FluidBuilder$FluidTypeFactory_ } from "@package/com/tterrag/registrate/builders";
import { $CasingConnectivity } from "@package/com/simibubi/create/content/decoration/encasing";
import { $RegistryEntry } from "@package/com/tterrag/registrate/util/entry";
import { $BiConsumer_, $Supplier_, $Function_, $Function } from "@package/java/util/function";
import { $MountedFluidStorageType } from "@package/com/simibubi/create/api/contraption/storage/fluid";
import { $TooltipModifier } from "@package/com/simibubi/create/foundation/item";
import { $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $DisplayTarget, $DisplaySource } from "@package/com/simibubi/create/api/behaviour/display";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $VirtualFluid } from "@package/com/simibubi/create/content/fluids";
import { $MountedItemStorageType } from "@package/com/simibubi/create/api/contraption/storage/item";

declare module "@package/com/simibubi/create/foundation/data" {
    export class $CreateRegistrate extends $AbstractRegistrate<$CreateRegistrate> {
        static create(arg0: string): $CreateRegistrate;
        entity<T extends $Entity, P>(arg0: P, arg1: string, arg2: $EntityType$EntityFactory_<T>, arg3: $MobCategory_): $CreateEntityBuilder<T, P>;
        static itemModel<T extends $Item>(arg0: $Supplier_<$NonNullFunction<$BakedModel, $BakedModel>>): $NonNullConsumer<T>;
        static blockModel<T extends $Block>(arg0: $Supplier_<$NonNullFunction<$BakedModel, $BakedModel>>): $NonNullConsumer<T>;
        getCreativeTab(): $DeferredHolder<$CreativeModeTab, $CreativeModeTab>;
        static isInCreativeTab(arg0: $RegistryEntry<never, never>, arg1: $DeferredHolder<$CreativeModeTab_, $CreativeModeTab_>): boolean;
        standardFluid(arg0: string): $FluidBuilder<$BaseFlowingFluid$Flowing, $CreateRegistrate>;
        standardFluid(arg0: string, arg1: $FluidBuilder$FluidTypeFactory_): $FluidBuilder<$BaseFlowingFluid$Flowing, $CreateRegistrate>;
        static connectedTextures(arg0: $Supplier_<$ConnectedTextureBehaviour>): $NonNullConsumer<$Block>;
        displayTarget<T extends $DisplayTarget>(arg0: string, arg1: $Supplier_<T>): $SimpleBuilder<$DisplayTarget, T, $CreateRegistrate>;
        paletteStoneBlock(arg0: string, arg1: $NonNullSupplier_<$Block>, arg2: boolean, arg3: boolean): $BlockBuilder<$Block, $CreateRegistrate>;
        paletteStoneBlock<T extends $Block>(arg0: string, arg1: $NonNullFunction_<$BlockBehaviour$Properties, T>, arg2: $NonNullSupplier_<$Block>, arg3: boolean, arg4: boolean): $BlockBuilder<T, $CreateRegistrate>;
        static defaultFluidType(arg0: $FluidType$Properties, arg1: $ResourceLocation_, arg2: $ResourceLocation_): $FluidType;
        static casingConnectivity<T extends $Block>(arg0: $BiConsumer_<T, $CasingConnectivity>): $NonNullConsumer<T>;
        mountedItemStorage<T extends $MountedItemStorageType<never>>(arg0: string, arg1: $Supplier_<T>): $SimpleBuilder<$MountedItemStorageType<never>, T, $CreateRegistrate>;
        virtualFluid(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_): $FluidBuilder<$VirtualFluid, $CreateRegistrate>;
        virtualFluid<T extends $BaseFlowingFluid>(arg0: string, arg1: $FluidBuilder$FluidTypeFactory_, arg2: $NonNullFunction_<$BaseFlowingFluid$Properties, T>, arg3: $NonNullFunction_<$BaseFlowingFluid$Properties, T>): $FluidBuilder<T, $CreateRegistrate>;
        virtualFluid<T extends $BaseFlowingFluid>(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $FluidBuilder$FluidTypeFactory_, arg4: $NonNullFunction_<$BaseFlowingFluid$Properties, T>, arg5: $NonNullFunction_<$BaseFlowingFluid$Properties, T>): $FluidBuilder<T, $CreateRegistrate>;
        virtualFluid(arg0: string): $FluidBuilder<$VirtualFluid, $CreateRegistrate>;
        displaySource<T extends $DisplaySource>(arg0: string, arg1: $Supplier_<T>): $SimpleBuilder<$DisplaySource, T, $CreateRegistrate>;
        getTooltipModifierFactory(): $Function<$Item, $TooltipModifier>;
        mountedFluidStorage<T extends $MountedFluidStorageType<never>>(arg0: string, arg1: $Supplier_<T>): $SimpleBuilder<$MountedFluidStorageType<never>, T, $CreateRegistrate>;
        registerEventListeners(arg0: $IEventBus): $CreateRegistrate;
        setTooltipModifierFactory(arg0: $Function_<$Item, $TooltipModifier>): $CreateRegistrate;
        setCreativeTab(arg0: $DeferredHolder<$CreativeModeTab_, $CreativeModeTab_>): $CreateRegistrate;
        blockEntity<T extends $BlockEntity, P>(arg0: P, arg1: string, arg2: $BlockEntityBuilder$BlockEntityFactory_<T>): $CreateBlockEntityBuilder<T, P>;
    }
}
