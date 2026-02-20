declare module "dev.architectury.extensions.injected.InjectedLiquidBlockExtension" {
import {$FlowingFluid} from "net.minecraft.world.level.material.FlowingFluid"

export interface $InjectedLiquidBlockExtension$$Interface {
}

export class $InjectedLiquidBlockExtension implements $InjectedLiquidBlockExtension$$Interface {
 "arch$getFluid"(): $FlowingFluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InjectedLiquidBlockExtension$$Type = ($InjectedLiquidBlockExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InjectedLiquidBlockExtension$$Original = $InjectedLiquidBlockExtension;}
declare module "dev.architectury.extensions.injected.InjectedItemExtension" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InjectedRegistryEntryExtension$$Interface} from "dev.architectury.extensions.injected.InjectedRegistryEntryExtension"
import {$Item} from "net.minecraft.world.item.Item"
import {$Holder} from "net.minecraft.core.Holder"

export interface $InjectedItemExtension$$Interface extends $InjectedRegistryEntryExtension$$Interface<($Item)> {
}

export class $InjectedItemExtension implements $InjectedItemExtension$$Interface {
 "arch$holder"(): $Holder<($Item)>
 "arch$registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InjectedItemExtension$$Type = ($InjectedItemExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InjectedItemExtension$$Original = $InjectedItemExtension;}
declare module "dev.architectury.extensions.injected.InjectedRegistryEntryExtension" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $InjectedRegistryEntryExtension$$Interface<T> {

(): $Holder$$Type<(T)>
}

export class $InjectedRegistryEntryExtension<T> implements $InjectedRegistryEntryExtension$$Interface {
 "arch$registryName"(): $ResourceLocation
 "arch$holder"(): $Holder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InjectedRegistryEntryExtension$$Type<T> = (() => $Holder$$Type<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InjectedRegistryEntryExtension$$Original<T> = $InjectedRegistryEntryExtension<(T)>;}
declare module "dev.architectury.extensions.injected.InjectedBlockExtension" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InjectedRegistryEntryExtension$$Interface} from "dev.architectury.extensions.injected.InjectedRegistryEntryExtension"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Holder} from "net.minecraft.core.Holder"

export interface $InjectedBlockExtension$$Interface extends $InjectedRegistryEntryExtension$$Interface<($Block)> {
}

export class $InjectedBlockExtension implements $InjectedBlockExtension$$Interface {
 "arch$holder"(): $Holder<($Block)>
 "arch$registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InjectedBlockExtension$$Type = ($InjectedBlockExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InjectedBlockExtension$$Original = $InjectedBlockExtension;}
declare module "dev.architectury.extensions.injected.InjectedItemPropertiesExtension" {
import {$CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$Item$Properties} from "net.minecraft.world.item.Item$Properties"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$DeferredSupplier$$Type} from "dev.architectury.registry.registries.DeferredSupplier"

export interface $InjectedItemPropertiesExtension$$Interface {
}

export class $InjectedItemPropertiesExtension implements $InjectedItemPropertiesExtension$$Interface {
 "arch$tab"(tab: $CreativeModeTab$$Type): $Item$Properties
 "arch$tab"(tab: $DeferredSupplier$$Type<($CreativeModeTab$$Type)>): $Item$Properties
 "arch$tab"(tab: $ResourceKey$$Type<($CreativeModeTab)>): $Item$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InjectedItemPropertiesExtension$$Type = ($InjectedItemPropertiesExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InjectedItemPropertiesExtension$$Original = $InjectedItemPropertiesExtension;}
declare module "dev.architectury.extensions.injected.InjectedEntityTypeExtension" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InjectedRegistryEntryExtension$$Interface} from "dev.architectury.extensions.injected.InjectedRegistryEntryExtension"
import {$Holder} from "net.minecraft.core.Holder"
import {$EntityType} from "net.minecraft.world.entity.EntityType"

export interface $InjectedEntityTypeExtension$$Interface extends $InjectedRegistryEntryExtension$$Interface<($EntityType<(never)>)> {
}

export class $InjectedEntityTypeExtension implements $InjectedEntityTypeExtension$$Interface {
 "arch$holder"(): $Holder<($EntityType<(never)>)>
 "arch$registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InjectedEntityTypeExtension$$Type = ($InjectedEntityTypeExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InjectedEntityTypeExtension$$Original = $InjectedEntityTypeExtension;}
declare module "dev.architectury.extensions.injected.InjectedFluidExtension" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Fluid} from "net.minecraft.world.level.material.Fluid"
import {$InjectedRegistryEntryExtension$$Interface} from "dev.architectury.extensions.injected.InjectedRegistryEntryExtension"
import {$Holder} from "net.minecraft.core.Holder"

export interface $InjectedFluidExtension$$Interface extends $InjectedRegistryEntryExtension$$Interface<($Fluid)> {
}

export class $InjectedFluidExtension implements $InjectedFluidExtension$$Interface {
 "arch$holder"(): $Holder<($Fluid)>
 "arch$registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InjectedFluidExtension$$Type = ($InjectedFluidExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InjectedFluidExtension$$Original = $InjectedFluidExtension;}
