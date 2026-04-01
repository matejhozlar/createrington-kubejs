declare module "io.wispforest.owo.mixin.registry.ReferenceAccessor" {
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export interface $ReferenceAccessor$$Interface<T> {
}

export class $ReferenceAccessor<T> implements $ReferenceAccessor$$Interface {
 "owo$setValue"(arg0: T): void
 "owo$setRegistryKey"(arg0: $ResourceKey$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReferenceAccessor$$Type<T> = ($ReferenceAccessor<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReferenceAccessor$$Original<T> = $ReferenceAccessor<(T)>;}
declare module "io.wispforest.owo.mixin.ui.access.TextFieldWidgetAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TextFieldWidgetAccessor$$Interface {

(): boolean
}

export class $TextFieldWidgetAccessor implements $TextFieldWidgetAccessor$$Interface {
 "owo$drawsBackground"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextFieldWidgetAccessor$$Type = (() => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextFieldWidgetAccessor$$Original = $TextFieldWidgetAccessor;}
declare module "io.wispforest.owo.mixin.ext.ComponentMapImplAccessor" {
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"

export interface $ComponentMapImplAccessor$$Interface {
}

export class $ComponentMapImplAccessor implements $ComponentMapImplAccessor$$Interface {
 "owo$setBaseComponents"(arg0: $DataComponentMap$$Type): void
 "owo$getBaseComponents"(): $DataComponentMap
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComponentMapImplAccessor$$Type = ($ComponentMapImplAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ComponentMapImplAccessor$$Original = $ComponentMapImplAccessor;}
declare module "io.wispforest.owo.mixin.ui.SlotAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SlotAccessor$$Interface {
}

export class $SlotAccessor implements $SlotAccessor$$Interface {
 "owo$setX"(arg0: integer): void
 "owo$setY"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotAccessor$$Type = ($SlotAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlotAccessor$$Original = $SlotAccessor;}
declare module "io.wispforest.owo.mixin.ForwardingDynamicOpsAccessor" {
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"

export interface $ForwardingDynamicOpsAccessor$$Interface<T> {

(): $DynamicOps$$Type<(T)>
}

export class $ForwardingDynamicOpsAccessor<T> implements $ForwardingDynamicOpsAccessor$$Interface {
 "owo$delegate"(): $DynamicOps<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForwardingDynamicOpsAccessor$$Type<T> = (() => $DynamicOps$$Type<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ForwardingDynamicOpsAccessor$$Original<T> = $ForwardingDynamicOpsAccessor<(T)>;}
declare module "io.wispforest.owo.mixin.ui.DrawContextInvoker" {
import {$GuiGraphics$ScissorStack, $GuiGraphics$ScissorStack$$Type} from "net.minecraft.client.gui.GuiGraphics$ScissorStack"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List$$Type} from "java.util.List"
import {$ClientTooltipPositioner$$Type} from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipPositioner"
import {$Font$$Type} from "net.minecraft.client.gui.Font"
import {$ClientTooltipComponent$$Type} from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent"

export interface $DrawContextInvoker$$Interface {
}

export class $DrawContextInvoker implements $DrawContextInvoker$$Interface {
 "owo$getScissorStack"(): $GuiGraphics$ScissorStack
 "owo$setScissorStack"(arg0: $GuiGraphics$ScissorStack$$Type): void
 "owo$setMatrices"(arg0: $PoseStack$$Type): void
 "owo$getMatrices"(): $PoseStack
 "owo$renderTooltipFromComponents"(arg0: $Font$$Type, arg1: $List$$Type<($ClientTooltipComponent$$Type)>, arg2: integer, arg3: integer, arg4: $ClientTooltipPositioner$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrawContextInvoker$$Type = ($DrawContextInvoker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DrawContextInvoker$$Original = $DrawContextInvoker;}
declare module "io.wispforest.owo.mixin.ScreenAccessor" {
import {$GuiEventListener, $GuiEventListener$$Type} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$CubeMap} from "net.minecraft.client.renderer.CubeMap"
import {$PanoramaRenderer} from "net.minecraft.client.renderer.PanoramaRenderer"

export interface $ScreenAccessor$$Interface {

(arg0: T): T
}

export class $ScreenAccessor implements $ScreenAccessor$$Interface {
static "owo$ROTATING_PANORAMA_RENDERER"(): $PanoramaRenderer
 "owo$addDrawableChild"<T extends $GuiEventListener>(arg0: T): T
static "owo$PANORAMA_RENDERER"(): $CubeMap
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenAccessor$$Type = ((arg0: T) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenAccessor$$Original = $ScreenAccessor;}
declare module "io.wispforest.owo.mixin.BufferBuilderAccessor" {
import {$VertexFormat$Mode} from "com.mojang.blaze3d.vertex.VertexFormat$Mode"
import {$VertexFormat} from "com.mojang.blaze3d.vertex.VertexFormat"

export interface $BufferBuilderAccessor$$Interface {
get "format"(): $VertexFormat
get "drawMode"(): $VertexFormat$Mode
get "building"(): boolean
}

export class $BufferBuilderAccessor implements $BufferBuilderAccessor$$Interface {
 "getFormat"(): $VertexFormat
 "getDrawMode"(): $VertexFormat$Mode
 "isBuilding"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferBuilderAccessor$$Type = ($BufferBuilderAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BufferBuilderAccessor$$Original = $BufferBuilderAccessor;}
declare module "io.wispforest.owo.mixin.ui.access.BlockEntityAccessor" {
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $BlockEntityAccessor$$Interface {

(arg0: $BlockState): void
}

export class $BlockEntityAccessor implements $BlockEntityAccessor$$Interface {
 "owo$setCachedState"(arg0: $BlockState$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityAccessor$$Type = ((arg0: $BlockState) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEntityAccessor$$Original = $BlockEntityAccessor;}
declare module "io.wispforest.owo.mixin.ui.layers.HandledScreenAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $HandledScreenAccessor$$Interface {
}

export class $HandledScreenAccessor implements $HandledScreenAccessor$$Interface {
 "owo$getRootX"(): integer
 "owo$getRootY"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HandledScreenAccessor$$Type = ($HandledScreenAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HandledScreenAccessor$$Original = $HandledScreenAccessor;}
declare module "io.wispforest.owo.mixin.ServerCommonNetworkHandlerAccessor" {
import {$Connection} from "net.minecraft.network.Connection"
import {$MinecraftServer} from "net.minecraft.server.MinecraftServer"

export interface $ServerCommonNetworkHandlerAccessor$$Interface {
}

export class $ServerCommonNetworkHandlerAccessor implements $ServerCommonNetworkHandlerAccessor$$Interface {
 "owo$server"(): $MinecraftServer
 "owo$getConnection"(): $Connection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerCommonNetworkHandlerAccessor$$Type = ($ServerCommonNetworkHandlerAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerCommonNetworkHandlerAccessor$$Original = $ServerCommonNetworkHandlerAccessor;}
declare module "io.wispforest.owo.mixin.shader.ShaderProgramAccessor" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Uniform, $Uniform$$Type} from "com.mojang.blaze3d.shaders.Uniform"

export interface $ShaderProgramAccessor$$Interface {

(): $Map$$Type<(StringJS), ($Uniform$$Type)>
}

export class $ShaderProgramAccessor implements $ShaderProgramAccessor$$Interface {
 "owo$getLoadedUniforms"(): $Map<(StringJS), ($Uniform)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShaderProgramAccessor$$Type = (() => $Map$$Type<(StringJS), ($Uniform$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShaderProgramAccessor$$Original = $ShaderProgramAccessor;}
declare module "io.wispforest.owo.mixin.offline.AdvancementProgressAccessor" {
import {$AdvancementRequirements, $AdvancementRequirements$$Type} from "net.minecraft.advancements.AdvancementRequirements"

export interface $AdvancementProgressAccessor$$Interface {
get "requirements"(): $AdvancementRequirements
set "requirements"(value: $AdvancementRequirements$$Type)
}

export class $AdvancementProgressAccessor implements $AdvancementProgressAccessor$$Interface {
 "getRequirements"(): $AdvancementRequirements
 "setRequirements"(arg0: $AdvancementRequirements$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancementProgressAccessor$$Type = ($AdvancementProgressAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AdvancementProgressAccessor$$Original = $AdvancementProgressAccessor;}
declare module "io.wispforest.owo.mixin.ScreenHandlerInvoker" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $ScreenHandlerInvoker$$Interface {

(arg0: $ItemStack, arg1: integer, arg2: integer, arg3: boolean): boolean
}

export class $ScreenHandlerInvoker implements $ScreenHandlerInvoker$$Interface {
 "owo$insertItem"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenHandlerInvoker$$Type = ((arg0: $ItemStack, arg1: integer, arg2: integer, arg3: boolean) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenHandlerInvoker$$Original = $ScreenHandlerInvoker;}
declare module "io.wispforest.owo.mixin.ClientCommonNetworkHandlerAccessor" {
import {$Connection, $Connection$$Type} from "net.minecraft.network.Connection"

export interface $ClientCommonNetworkHandlerAccessor$$Interface {

(): $Connection$$Type
get "connection"(): $Connection
}

export class $ClientCommonNetworkHandlerAccessor implements $ClientCommonNetworkHandlerAccessor$$Interface {
 "getConnection"(): $Connection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientCommonNetworkHandlerAccessor$$Type = (() => $Connection$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientCommonNetworkHandlerAccessor$$Original = $ClientCommonNetworkHandlerAccessor;}
declare module "io.wispforest.owo.mixin.ui.access.ClickableWidgetAccessor" {
import {$WidgetTooltipHolder} from "net.minecraft.client.gui.components.WidgetTooltipHolder"

export interface $ClickableWidgetAccessor$$Interface {
}

export class $ClickableWidgetAccessor implements $ClickableWidgetAccessor$$Interface {
 "owo$setX"(arg0: integer): void
 "owo$setY"(arg0: integer): void
 "owo$setHeight"(arg0: integer): void
 "owo$setWidth"(arg0: integer): void
 "owo$getTooltip"(): $WidgetTooltipHolder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClickableWidgetAccessor$$Type = ($ClickableWidgetAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClickableWidgetAccessor$$Original = $ClickableWidgetAccessor;}
declare module "io.wispforest.owo.mixin.RegistryOpsAccessor" {
import {$RegistryOps$RegistryInfoLookup, $RegistryOps$RegistryInfoLookup$$Type} from "net.minecraft.resources.RegistryOps$RegistryInfoLookup"

export interface $RegistryOpsAccessor$$Interface {

(): $RegistryOps$RegistryInfoLookup$$Type
}

export class $RegistryOpsAccessor implements $RegistryOpsAccessor$$Interface {
 "owo$infoGetter"(): $RegistryOps$RegistryInfoLookup
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryOpsAccessor$$Type = (() => $RegistryOps$RegistryInfoLookup$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistryOpsAccessor$$Original = $RegistryOpsAccessor;}
declare module "io.wispforest.owo.mixin.ui.access.ButtonWidgetAccessor" {
import {$Button$OnPress, $Button$OnPress$$Type} from "net.minecraft.client.gui.components.Button$OnPress"

export interface $ButtonWidgetAccessor$$Interface {

(arg0: $Button$OnPress): void
}

export class $ButtonWidgetAccessor implements $ButtonWidgetAccessor$$Interface {
 "owo$setOnPress"(arg0: $Button$OnPress$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ButtonWidgetAccessor$$Type = ((arg0: $Button$OnPress) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ButtonWidgetAccessor$$Original = $ButtonWidgetAccessor;}
declare module "io.wispforest.owo.mixin.itemgroup.ItemGroupAccessor" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Set$$Type} from "java.util.Set"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$CreativeModeTab$Row$$Type} from "net.minecraft.world.item.CreativeModeTab$Row"
import {$CreativeModeTab$DisplayItemsGenerator, $CreativeModeTab$DisplayItemsGenerator$$Type} from "net.minecraft.world.item.CreativeModeTab$DisplayItemsGenerator"

export interface $ItemGroupAccessor$$Interface {
}

export class $ItemGroupAccessor implements $ItemGroupAccessor$$Interface {
 "owo$getEntryCollector"(): $CreativeModeTab$DisplayItemsGenerator
 "owo$setEntryCollector"(arg0: $CreativeModeTab$DisplayItemsGenerator$$Type): void
 "owo$setSearchTabStacks"(arg0: $Set$$Type<($ItemStack$$Type)>): void
 "owo$setDisplayName"(arg0: $Component$$Type): void
 "owo$setColumn"(arg0: integer): void
 "owo$setRow"(arg0: $CreativeModeTab$Row$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemGroupAccessor$$Type = ($ItemGroupAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemGroupAccessor$$Original = $ItemGroupAccessor;}
