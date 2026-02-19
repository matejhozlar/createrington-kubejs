declare module "net.neoforged.neoforge.client.event.RenderPlayerEvent$Post" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$PlayerRenderer$$Type} from "net.minecraft.client.renderer.entity.player.PlayerRenderer"
import {$RenderPlayerEvent} from "net.neoforged.neoforge.client.event.RenderPlayerEvent"

export class $RenderPlayerEvent$Post extends $RenderPlayerEvent {
constructor(arg0: $Player$$Type, arg1: $PlayerRenderer$$Type, arg2: float, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer)

public "getEntity"(): $Entity
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderPlayerEvent$Post$$Type = ($RenderPlayerEvent$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderPlayerEvent$Post$$Original = $RenderPlayerEvent$Post;}
declare module "net.neoforged.neoforge.client.event.RenderFrameEvent$Post" {
import {$RenderFrameEvent} from "net.neoforged.neoforge.client.event.RenderFrameEvent"
import {$DeltaTracker$$Type} from "net.minecraft.client.DeltaTracker"

export class $RenderFrameEvent$Post extends $RenderFrameEvent {
constructor(arg0: $DeltaTracker$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderFrameEvent$Post$$Type = ($RenderFrameEvent$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderFrameEvent$Post$$Original = $RenderFrameEvent$Post;}
declare module "net.neoforged.neoforge.client.event.ClientPlayerNetworkEvent$LoggingIn" {
import {$MultiPlayerGameMode$$Type} from "net.minecraft.client.multiplayer.MultiPlayerGameMode"
import {$LocalPlayer$$Type} from "net.minecraft.client.player.LocalPlayer"
import {$ClientPlayerNetworkEvent} from "net.neoforged.neoforge.client.event.ClientPlayerNetworkEvent"
import {$Connection$$Type} from "net.minecraft.network.Connection"

export class $ClientPlayerNetworkEvent$LoggingIn extends $ClientPlayerNetworkEvent {
constructor(arg0: $MultiPlayerGameMode$$Type, arg1: $LocalPlayer$$Type, arg2: $Connection$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientPlayerNetworkEvent$LoggingIn$$Type = ($ClientPlayerNetworkEvent$LoggingIn);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientPlayerNetworkEvent$LoggingIn$$Original = $ClientPlayerNetworkEvent$LoggingIn;}
declare module "net.neoforged.neoforge.client.event.ScreenEvent" {
import {$Screen} from "net.minecraft.client.gui.screens.Screen"
import {$Event} from "net.neoforged.bus.api.Event"

export class $ScreenEvent extends $Event {
public "getScreen"(): $Screen
get "screen"(): $Screen
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvent$$Type = ($ScreenEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenEvent$$Original = $ScreenEvent;}
declare module "net.neoforged.neoforge.client.event.EntityRenderersEvent$RegisterLayerDefinitions" {
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$EntityRenderersEvent} from "net.neoforged.neoforge.client.event.EntityRenderersEvent"
import {$ModelLayerLocation$$Type} from "net.minecraft.client.model.geom.ModelLayerLocation"
import {$LayerDefinition$$Type} from "net.minecraft.client.model.geom.builders.LayerDefinition"

export class $EntityRenderersEvent$RegisterLayerDefinitions extends $EntityRenderersEvent {
constructor()

public "registerLayerDefinition"(arg0: $ModelLayerLocation$$Type, arg1: $Supplier$$Type<($LayerDefinition$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRenderersEvent$RegisterLayerDefinitions$$Type = ($EntityRenderersEvent$RegisterLayerDefinitions);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityRenderersEvent$RegisterLayerDefinitions$$Original = $EntityRenderersEvent$RegisterLayerDefinitions;}
declare module "net.neoforged.neoforge.client.event.ClientTickEvent$Post" {
import {$ClientTickEvent} from "net.neoforged.neoforge.client.event.ClientTickEvent"

export class $ClientTickEvent$Post extends $ClientTickEvent {
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientTickEvent$Post$$Type = ($ClientTickEvent$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientTickEvent$Post$$Original = $ClientTickEvent$Post;}
declare module "net.neoforged.neoforge.client.event.InputEvent" {
import {$Event} from "net.neoforged.bus.api.Event"

export class $InputEvent extends $Event {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputEvent$$Type = ($InputEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InputEvent$$Original = $InputEvent;}
declare module "net.neoforged.neoforge.client.DimensionTransitionScreenManager$ReceivingLevelScreenFactory" {
import {$ReceivingLevelScreen$Reason, $ReceivingLevelScreen$Reason$$Type} from "net.minecraft.client.gui.screens.ReceivingLevelScreen$Reason"
import {$BooleanSupplier, $BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"
import {$ReceivingLevelScreen, $ReceivingLevelScreen$$Type} from "net.minecraft.client.gui.screens.ReceivingLevelScreen"

export interface $DimensionTransitionScreenManager$ReceivingLevelScreenFactory$$Interface {

(arg0: $BooleanSupplier, arg1: $ReceivingLevelScreen$Reason): $ReceivingLevelScreen$$Type
}

export class $DimensionTransitionScreenManager$ReceivingLevelScreenFactory implements $DimensionTransitionScreenManager$ReceivingLevelScreenFactory$$Interface {
 "create"(arg0: $BooleanSupplier$$Type, arg1: $ReceivingLevelScreen$Reason$$Type): $ReceivingLevelScreen
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimensionTransitionScreenManager$ReceivingLevelScreenFactory$$Type = ((arg0: $BooleanSupplier, arg1: $ReceivingLevelScreen$Reason) => $ReceivingLevelScreen$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DimensionTransitionScreenManager$ReceivingLevelScreenFactory$$Original = $DimensionTransitionScreenManager$ReceivingLevelScreenFactory;}
declare module "net.neoforged.neoforge.client.event.AddSectionGeometryEvent" {
import {$List} from "java.util.List"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AddSectionGeometryEvent$AdditionalSectionRenderer, $AddSectionGeometryEvent$AdditionalSectionRenderer$$Type} from "net.neoforged.neoforge.client.event.AddSectionGeometryEvent$AdditionalSectionRenderer"

export class $AddSectionGeometryEvent extends $Event {
constructor(arg0: $BlockPos$$Type, arg1: $Level$$Type)

public "getLevel"(): $Level
public "getSectionOrigin"(): $BlockPos
public "addRenderer"(arg0: $AddSectionGeometryEvent$AdditionalSectionRenderer$$Type): void
public "getAdditionalRenderers"(): $List<($AddSectionGeometryEvent$AdditionalSectionRenderer)>
get "level"(): $Level
get "sectionOrigin"(): $BlockPos
get "additionalRenderers"(): $List<($AddSectionGeometryEvent$AdditionalSectionRenderer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddSectionGeometryEvent$$Type = ($AddSectionGeometryEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AddSectionGeometryEvent$$Original = $AddSectionGeometryEvent;}
declare module "net.neoforged.neoforge.client.event.RenderLevelStageEvent$RegisterStageEvent" {
import {$RenderLevelStageEvent$Stage} from "net.neoforged.neoforge.client.event.RenderLevelStageEvent$Stage"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Event} from "net.neoforged.bus.api.Event"
import {$RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"

export class $RenderLevelStageEvent$RegisterStageEvent extends $Event implements $IModBusEvent$$Interface {
constructor()

public "register"(arg0: $ResourceLocation$$Type, arg1: $RenderType$$Type): $RenderLevelStageEvent$Stage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderLevelStageEvent$RegisterStageEvent$$Type = ($RenderLevelStageEvent$RegisterStageEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderLevelStageEvent$RegisterStageEvent$$Original = $RenderLevelStageEvent$RegisterStageEvent;}
declare module "net.neoforged.neoforge.client.event.RenderBlockScreenEffectEvent$OverlayType" {
import {$Enum} from "java.lang.Enum"

export class $RenderBlockScreenEffectEvent$OverlayType extends $Enum<($RenderBlockScreenEffectEvent$OverlayType)> {
static readonly "FIRE": $RenderBlockScreenEffectEvent$OverlayType
static readonly "BLOCK": $RenderBlockScreenEffectEvent$OverlayType
static readonly "WATER": $RenderBlockScreenEffectEvent$OverlayType

public static "values"(): ($RenderBlockScreenEffectEvent$OverlayType)[]
public static "valueOf"(arg0: StringJS): $RenderBlockScreenEffectEvent$OverlayType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderBlockScreenEffectEvent$OverlayType$$Type = (("fire") | ("block") | ("water"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderBlockScreenEffectEvent$OverlayType$$Original = $RenderBlockScreenEffectEvent$OverlayType;}
declare module "net.neoforged.neoforge.client.event.RegisterParticleProvidersEvent" {
import {$ParticleProvider$$Type} from "net.minecraft.client.particle.ParticleProvider"
import {$ParticleProvider$Sprite$$Type} from "net.minecraft.client.particle.ParticleProvider$Sprite"
import {$ParticleEngine$$Type} from "net.minecraft.client.particle.ParticleEngine"
import {$ParticleType$$Type} from "net.minecraft.core.particles.ParticleType"
import {$Event} from "net.neoforged.bus.api.Event"
import {$ParticleEngine$SpriteParticleRegistration$$Type} from "net.minecraft.client.particle.ParticleEngine$SpriteParticleRegistration"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"
import {$ParticleOptions} from "net.minecraft.core.particles.ParticleOptions"

export class $RegisterParticleProvidersEvent extends $Event implements $IModBusEvent$$Interface {
constructor(arg0: $ParticleEngine$$Type)

public "registerSpecial"<T extends $ParticleOptions>(arg0: $ParticleType$$Type<(T)>, arg1: $ParticleProvider$$Type<(T)>): void
public "registerSprite"<T extends $ParticleOptions>(arg0: $ParticleType$$Type<(T)>, arg1: $ParticleProvider$Sprite$$Type<(T)>): void
public "registerSpriteSet"<T extends $ParticleOptions>(arg0: $ParticleType$$Type<(T)>, arg1: $ParticleEngine$SpriteParticleRegistration$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterParticleProvidersEvent$$Type = ($RegisterParticleProvidersEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterParticleProvidersEvent$$Original = $RegisterParticleProvidersEvent;}
declare module "net.neoforged.neoforge.client.event.RenderPlayerEvent$Pre" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$PlayerRenderer$$Type} from "net.minecraft.client.renderer.entity.player.PlayerRenderer"
import {$RenderPlayerEvent} from "net.neoforged.neoforge.client.event.RenderPlayerEvent"

export class $RenderPlayerEvent$Pre extends $RenderPlayerEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Player$$Type, arg1: $PlayerRenderer$$Type, arg2: float, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer)

public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
public "getEntity"(): $Entity
get "canceled"(): boolean
set "canceled"(value: boolean)
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderPlayerEvent$Pre$$Type = ($RenderPlayerEvent$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderPlayerEvent$Pre$$Original = $RenderPlayerEvent$Pre;}
declare module "net.neoforged.neoforge.client.event.RegisterJsonAnimationTypesEvent" {
import {$AnimationChannel$Interpolation$$Type} from "net.minecraft.client.animation.AnimationChannel$Interpolation"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Event} from "net.neoforged.bus.api.Event"
import {$ImmutableMap$Builder$$Type} from "com.google.common.collect.ImmutableMap$Builder"
import {$AnimationTarget$$Type} from "net.neoforged.neoforge.client.entity.animation.AnimationTarget"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"

export class $RegisterJsonAnimationTypesEvent extends $Event implements $IModBusEvent$$Interface {
constructor(arg0: $ImmutableMap$Builder$$Type<($ResourceLocation$$Type), ($AnimationTarget$$Type)>, arg1: $ImmutableMap$Builder$$Type<($ResourceLocation$$Type), ($AnimationChannel$Interpolation$$Type)>)

public "registerTarget"(arg0: $ResourceLocation$$Type, arg1: $AnimationTarget$$Type): void
public "registerInterpolation"(arg0: $ResourceLocation$$Type, arg1: $AnimationChannel$Interpolation$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterJsonAnimationTypesEvent$$Type = ($RegisterJsonAnimationTypesEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterJsonAnimationTypesEvent$$Original = $RegisterJsonAnimationTypesEvent;}
declare module "net.neoforged.neoforge.client.event.AddSectionGeometryEvent$AdditionalSectionRenderer" {
import {$AddSectionGeometryEvent$SectionRenderingContext, $AddSectionGeometryEvent$SectionRenderingContext$$Type} from "net.neoforged.neoforge.client.event.AddSectionGeometryEvent$SectionRenderingContext"

export interface $AddSectionGeometryEvent$AdditionalSectionRenderer$$Interface {

(arg0: $AddSectionGeometryEvent$SectionRenderingContext): void
}

export class $AddSectionGeometryEvent$AdditionalSectionRenderer implements $AddSectionGeometryEvent$AdditionalSectionRenderer$$Interface {
 "render"(arg0: $AddSectionGeometryEvent$SectionRenderingContext$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddSectionGeometryEvent$AdditionalSectionRenderer$$Type = ((arg0: $AddSectionGeometryEvent$SectionRenderingContext) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AddSectionGeometryEvent$AdditionalSectionRenderer$$Original = $AddSectionGeometryEvent$AdditionalSectionRenderer;}
declare module "net.neoforged.neoforge.client.event.ClientPlayerNetworkEvent$Clone" {
import {$MultiPlayerGameMode$$Type} from "net.minecraft.client.multiplayer.MultiPlayerGameMode"
import {$LocalPlayer, $LocalPlayer$$Type} from "net.minecraft.client.player.LocalPlayer"
import {$ClientPlayerNetworkEvent} from "net.neoforged.neoforge.client.event.ClientPlayerNetworkEvent"
import {$Connection$$Type} from "net.minecraft.network.Connection"

export class $ClientPlayerNetworkEvent$Clone extends $ClientPlayerNetworkEvent {
constructor(arg0: $MultiPlayerGameMode$$Type, arg1: $LocalPlayer$$Type, arg2: $LocalPlayer$$Type, arg3: $Connection$$Type)

public "getOldPlayer"(): $LocalPlayer
public "getNewPlayer"(): $LocalPlayer
public "getPlayer"(): $LocalPlayer
get "oldPlayer"(): $LocalPlayer
get "newPlayer"(): $LocalPlayer
get "player"(): $LocalPlayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientPlayerNetworkEvent$Clone$$Type = ($ClientPlayerNetworkEvent$Clone);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientPlayerNetworkEvent$Clone$$Original = $ClientPlayerNetworkEvent$Clone;}
declare module "net.neoforged.neoforge.client.extensions.common.RegisterClientExtensionsEvent" {
import {$IClientItemExtensions$$Type} from "net.neoforged.neoforge.client.extensions.common.IClientItemExtensions"
import {$IClientMobEffectExtensions$$Type} from "net.neoforged.neoforge.client.extensions.common.IClientMobEffectExtensions"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$IClientFluidTypeExtensions$$Type} from "net.neoforged.neoforge.client.extensions.common.IClientFluidTypeExtensions"
import {$FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"
import {$IClientBlockExtensions$$Type} from "net.neoforged.neoforge.client.extensions.common.IClientBlockExtensions"
import {$MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder$$Type} from "net.minecraft.core.Holder"

export class $RegisterClientExtensionsEvent extends $Event implements $IModBusEvent$$Interface {
public "registerMobEffect"(arg0: $IClientMobEffectExtensions$$Type, ...arg1: ($MobEffect$$Type)[]): void
public "registerMobEffect"(arg0: $IClientMobEffectExtensions$$Type, ...arg1: ($Holder$$Type<($MobEffect$$Type)>)[]): void
public "registerFluidType"(arg0: $IClientFluidTypeExtensions$$Type, ...arg1: ($Holder$$Type<($FluidType$$Type)>)[]): void
public "registerFluidType"(arg0: $IClientFluidTypeExtensions$$Type, ...arg1: ($FluidType$$Type)[]): void
public "isItemRegistered"(arg0: $Item$$Type): boolean
public "isBlockRegistered"(arg0: $Block$$Type): boolean
public "isFluidTypeRegistered"(arg0: $FluidType$$Type): boolean
public "isMobEffectRegistered"(arg0: $MobEffect$$Type): boolean
public "registerItem"(arg0: $IClientItemExtensions$$Type, ...arg1: ($Holder$$Type<($Item$$Type)>)[]): void
public "registerItem"(arg0: $IClientItemExtensions$$Type, ...arg1: ($Item$$Type)[]): void
public "registerBlock"(arg0: $IClientBlockExtensions$$Type, ...arg1: ($Block$$Type)[]): void
public "registerBlock"(arg0: $IClientBlockExtensions$$Type, ...arg1: ($Holder$$Type<($Block$$Type)>)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterClientExtensionsEvent$$Type = ($RegisterClientExtensionsEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterClientExtensionsEvent$$Original = $RegisterClientExtensionsEvent;}
declare module "net.neoforged.neoforge.client.event.RegisterRenderBuffersEvent" {
import {$SequencedMap$$Type} from "java.util.SequencedMap"
import {$ByteBufferBuilder$$Type} from "com.mojang.blaze3d.vertex.ByteBufferBuilder"
import {$Event} from "net.neoforged.bus.api.Event"
import {$RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"

export class $RegisterRenderBuffersEvent extends $Event implements $IModBusEvent$$Interface {
constructor(arg0: $SequencedMap$$Type<($RenderType$$Type), ($ByteBufferBuilder$$Type)>)

public "registerRenderBuffer"(arg0: $RenderType$$Type): void
public "registerRenderBuffer"(arg0: $RenderType$$Type, arg1: $ByteBufferBuilder$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterRenderBuffersEvent$$Type = ($RegisterRenderBuffersEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterRenderBuffersEvent$$Original = $RegisterRenderBuffersEvent;}
declare module "net.neoforged.neoforge.client.event.RenderFrameEvent" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$DeltaTracker} from "net.minecraft.client.DeltaTracker"

export class $RenderFrameEvent extends $Event {
public "getPartialTick"(): $DeltaTracker
get "partialTick"(): $DeltaTracker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderFrameEvent$$Type = ($RenderFrameEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderFrameEvent$$Original = $RenderFrameEvent;}
declare module "net.neoforged.neoforge.client.event.ScreenEvent$CharacterTyped" {
import {$ScreenEvent} from "net.neoforged.neoforge.client.event.ScreenEvent"
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export class $ScreenEvent$CharacterTyped extends $ScreenEvent {
constructor(arg0: $Screen$$Type, arg1: character, arg2: integer)

public "getModifiers"(): integer
public "getCodePoint"(): character
get "modifiers"(): integer
get "codePoint"(): character
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvent$CharacterTyped$$Type = ($ScreenEvent$CharacterTyped);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenEvent$CharacterTyped$$Original = $ScreenEvent$CharacterTyped;}
declare module "net.neoforged.neoforge.client.event.ScreenshotEvent" {
import {$File, $File$$Type} from "java.io.File"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Event} from "net.neoforged.bus.api.Event"
import {$NativeImage, $NativeImage$$Type} from "com.mojang.blaze3d.platform.NativeImage"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $ScreenshotEvent extends $Event implements $ICancellableEvent$$Interface {
static readonly "DEFAULT_CANCEL_REASON": $Component

constructor(arg0: $NativeImage$$Type, arg1: $File$$Type)

public "getImage"(): $NativeImage
public "getScreenshotFile"(): $File
public "getCancelMessage"(): $Component
public "setResultMessage"(arg0: $Component$$Type): void
public "setScreenshotFile"(arg0: $File$$Type): void
public "getResultMessage"(): $Component
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "image"(): $NativeImage
get "screenshotFile"(): $File
get "cancelMessage"(): $Component
set "resultMessage"(value: $Component$$Type)
set "screenshotFile"(value: $File$$Type)
get "resultMessage"(): $Component
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenshotEvent$$Type = ($ScreenshotEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenshotEvent$$Original = $ScreenshotEvent;}
declare module "net.neoforged.neoforge.client.event.RegisterNamedRenderTypesEvent" {
import {$RenderTypeGroup$$Type} from "net.neoforged.neoforge.client.RenderTypeGroup"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map$$Type} from "java.util.Map"
import {$Event} from "net.neoforged.bus.api.Event"
import {$RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"

export class $RegisterNamedRenderTypesEvent extends $Event implements $IModBusEvent$$Interface {
constructor(arg0: $Map$$Type<($ResourceLocation$$Type), ($RenderTypeGroup$$Type)>)

public "register"(arg0: $ResourceLocation$$Type, arg1: $RenderType$$Type, arg2: $RenderType$$Type): void
public "register"(arg0: $ResourceLocation$$Type, arg1: $RenderType$$Type, arg2: $RenderType$$Type, arg3: $RenderType$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterNamedRenderTypesEvent$$Type = ($RegisterNamedRenderTypesEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterNamedRenderTypesEvent$$Original = $RegisterNamedRenderTypesEvent;}
declare module "net.neoforged.neoforge.client.event.RenderGuiLayerEvent$Post" {
import {$LayeredDraw$Layer$$Type} from "net.minecraft.client.gui.LayeredDraw$Layer"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$RenderGuiLayerEvent} from "net.neoforged.neoforge.client.event.RenderGuiLayerEvent"
import {$DeltaTracker$$Type} from "net.minecraft.client.DeltaTracker"

export class $RenderGuiLayerEvent$Post extends $RenderGuiLayerEvent {
constructor(arg0: $GuiGraphics$$Type, arg1: $DeltaTracker$$Type, arg2: $ResourceLocation$$Type, arg3: $LayeredDraw$Layer$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderGuiLayerEvent$Post$$Type = ($RenderGuiLayerEvent$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderGuiLayerEvent$Post$$Original = $RenderGuiLayerEvent$Post;}
declare module "net.neoforged.neoforge.client.event.RegisterSpriteSourceTypesEvent" {
import {$BiMap$$Type} from "com.google.common.collect.BiMap"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$SpriteSource$$Type} from "net.minecraft.client.renderer.texture.atlas.SpriteSource"
import {$Event} from "net.neoforged.bus.api.Event"
import {$SpriteSourceType, $SpriteSourceType$$Type} from "net.minecraft.client.renderer.texture.atlas.SpriteSourceType"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"
import {$MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $RegisterSpriteSourceTypesEvent extends $Event implements $IModBusEvent$$Interface {
constructor(arg0: $BiMap$$Type<($ResourceLocation$$Type), ($SpriteSourceType$$Type)>)

/**
 * 
 * @deprecated
 */
public "register"(arg0: $ResourceLocation$$Type, arg1: $MapCodec$$Type<($SpriteSource$$Type)>): $SpriteSourceType
public "register"(arg0: $ResourceLocation$$Type, arg1: $SpriteSourceType$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterSpriteSourceTypesEvent$$Type = ($RegisterSpriteSourceTypesEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterSpriteSourceTypesEvent$$Original = $RegisterSpriteSourceTypesEvent;}
declare module "net.neoforged.neoforge.client.extensions.IPoseStackExtension" {
import {$Transformation$$Type} from "com.mojang.math.Transformation"

export interface $IPoseStackExtension$$Interface {
}

export class $IPoseStackExtension implements $IPoseStackExtension$$Interface {
 "pushTransformation"(arg0: $Transformation$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPoseStackExtension$$Type = ($IPoseStackExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPoseStackExtension$$Original = $IPoseStackExtension;}
declare module "net.neoforged.neoforge.client.event.ViewportEvent$ComputeFogColor" {
import {$Camera$$Type} from "net.minecraft.client.Camera"
import {$ViewportEvent} from "net.neoforged.neoforge.client.event.ViewportEvent"

export class $ViewportEvent$ComputeFogColor extends $ViewportEvent {
constructor(arg0: $Camera$$Type, arg1: float, arg2: float, arg3: float, arg4: float)

public "setRed"(arg0: float): void
public "setGreen"(arg0: float): void
public "setBlue"(arg0: float): void
public "getGreen"(): float
public "getBlue"(): float
public "getRed"(): float
set "red"(value: float)
set "green"(value: float)
set "blue"(value: float)
get "green"(): float
get "blue"(): float
get "red"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ViewportEvent$ComputeFogColor$$Type = ($ViewportEvent$ComputeFogColor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ViewportEvent$ComputeFogColor$$Original = $ViewportEvent$ComputeFogColor;}
declare module "net.neoforged.neoforge.client.extensions.common.IClientMobEffectExtensions" {
import {$MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$EffectRenderingInventoryScreen$$Type} from "net.minecraft.client.gui.screens.inventory.EffectRenderingInventoryScreen"
import {$Gui$$Type} from "net.minecraft.client.gui.Gui"
import {$MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"

export interface $IClientMobEffectExtensions$$Interface {
}

export class $IClientMobEffectExtensions implements $IClientMobEffectExtensions$$Interface {
static readonly "DEFAULT": $IClientMobEffectExtensions

 "renderGuiIcon"(arg0: $MobEffectInstance$$Type, arg1: $Gui$$Type, arg2: $GuiGraphics$$Type, arg3: integer, arg4: integer, arg5: float, arg6: float): boolean
 "isVisibleInGui"(arg0: $MobEffectInstance$$Type): boolean
static "of"(arg0: $MobEffectInstance$$Type): $IClientMobEffectExtensions
static "of"(arg0: $MobEffect$$Type): $IClientMobEffectExtensions
 "isVisibleInInventory"(arg0: $MobEffectInstance$$Type): boolean
 "renderInventoryIcon"(arg0: $MobEffectInstance$$Type, arg1: $EffectRenderingInventoryScreen$$Type<(never)>, arg2: $GuiGraphics$$Type, arg3: integer, arg4: integer, arg5: integer): boolean
 "renderInventoryText"(arg0: $MobEffectInstance$$Type, arg1: $EffectRenderingInventoryScreen$$Type<(never)>, arg2: $GuiGraphics$$Type, arg3: integer, arg4: integer, arg5: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClientMobEffectExtensions$$Type = ($IClientMobEffectExtensions);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IClientMobEffectExtensions$$Original = $IClientMobEffectExtensions;}
declare module "net.neoforged.neoforge.client.settings.KeyConflictContext" {
import {$Enum} from "java.lang.Enum"
import {$IKeyConflictContext$$Type, $IKeyConflictContext$$Interface} from "net.neoforged.neoforge.client.settings.IKeyConflictContext"

export class $KeyConflictContext extends $Enum<($KeyConflictContext)> implements $IKeyConflictContext$$Interface {
static readonly "IN_GAME": $KeyConflictContext
static readonly "UNIVERSAL": $KeyConflictContext
static readonly "GUI": $KeyConflictContext

public static "values"(): ($KeyConflictContext)[]
public static "valueOf"(arg0: StringJS): $KeyConflictContext
public "isActive"(): boolean
public "conflicts"(arg0: $IKeyConflictContext$$Type): boolean
get "active"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyConflictContext$$Type = (("universal") | ("gui") | ("in_game"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyConflictContext$$Original = $KeyConflictContext;}
declare module "net.neoforged.neoforge.client.event.RegisterKeyMappingsEvent" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$KeyMapping$$Type} from "net.minecraft.client.KeyMapping"
import {$Options$$Type} from "net.minecraft.client.Options"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"

export class $RegisterKeyMappingsEvent extends $Event implements $IModBusEvent$$Interface {
constructor(arg0: $Options$$Type)

public "register"(arg0: $KeyMapping$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterKeyMappingsEvent$$Type = ($RegisterKeyMappingsEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterKeyMappingsEvent$$Original = $RegisterKeyMappingsEvent;}
declare module "net.neoforged.neoforge.client.event.ClientChatEvent" {
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Event} from "net.neoforged.bus.api.Event"

export class $ClientChatEvent extends $Event implements $ICancellableEvent$$Interface {
constructor(arg0: StringJS)

public "getMessage"(): StringJS
public "getOriginalMessage"(): StringJS
public "setMessage"(arg0: StringJS): void
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "message"(): StringJS
get "originalMessage"(): StringJS
set "message"(value: StringJS)
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientChatEvent$$Type = ($ClientChatEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientChatEvent$$Original = $ClientChatEvent;}
declare module "net.neoforged.neoforge.client.event.RegisterColorHandlersEvent$ColorResolvers" {
import {$ImmutableList$Builder$$Type} from "com.google.common.collect.ImmutableList$Builder"
import {$ColorResolver$$Type} from "net.minecraft.world.level.ColorResolver"
import {$RegisterColorHandlersEvent} from "net.neoforged.neoforge.client.event.RegisterColorHandlersEvent"

export class $RegisterColorHandlersEvent$ColorResolvers extends $RegisterColorHandlersEvent {
constructor(arg0: $ImmutableList$Builder$$Type<($ColorResolver$$Type)>)

public "register"(arg0: $ColorResolver$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterColorHandlersEvent$ColorResolvers$$Type = ($RegisterColorHandlersEvent$ColorResolvers);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterColorHandlersEvent$ColorResolvers$$Original = $RegisterColorHandlersEvent$ColorResolvers;}
declare module "net.neoforged.neoforge.client.extensions.ModelStateExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ModelStateExtension$$Interface {
}

export class $ModelStateExtension implements $ModelStateExtension$$Interface {
 "mayApplyArbitraryRotation"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelStateExtension$$Type = ($ModelStateExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelStateExtension$$Original = $ModelStateExtension;}
declare module "net.neoforged.neoforge.client.event.ScreenEvent$CharacterTyped$Pre" {
import {$ScreenEvent$CharacterTyped} from "net.neoforged.neoforge.client.event.ScreenEvent$CharacterTyped"
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"

export class $ScreenEvent$CharacterTyped$Pre extends $ScreenEvent$CharacterTyped implements $ICancellableEvent$$Interface {
constructor(arg0: $Screen$$Type, arg1: character, arg2: integer)

public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvent$CharacterTyped$Pre$$Type = ($ScreenEvent$CharacterTyped$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenEvent$CharacterTyped$Pre$$Original = $ScreenEvent$CharacterTyped$Pre;}
declare module "net.neoforged.neoforge.client.event.GatherSkippedAttributeTooltipsEvent" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EquipmentSlotGroup$$Type} from "net.minecraft.world.entity.EquipmentSlotGroup"
import {$Event} from "net.neoforged.bus.api.Event"
import {$AttributeTooltipContext, $AttributeTooltipContext$$Type} from "net.neoforged.neoforge.common.util.AttributeTooltipContext"

export class $GatherSkippedAttributeTooltipsEvent extends $Event {
constructor(arg0: $ItemStack$$Type, arg1: $AttributeTooltipContext$$Type)

public "getContext"(): $AttributeTooltipContext
public "getStack"(): $ItemStack
public "isSkippingAll"(): boolean
public "skipGroup"(arg0: $EquipmentSlotGroup$$Type): void
public "isSkipped"(arg0: $ResourceLocation$$Type): boolean
public "isSkipped"(arg0: $EquipmentSlotGroup$$Type): boolean
public "setSkipAll"(arg0: boolean): void
public "skipId"(arg0: $ResourceLocation$$Type): void
get "context"(): $AttributeTooltipContext
get "stack"(): $ItemStack
get "skippingAll"(): boolean
set "skipAll"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GatherSkippedAttributeTooltipsEvent$$Type = ($GatherSkippedAttributeTooltipsEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GatherSkippedAttributeTooltipsEvent$$Original = $GatherSkippedAttributeTooltipsEvent;}
declare module "net.neoforged.neoforge.client.extensions.common.IClientBlockExtensions" {
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ParticleEngine$$Type} from "net.minecraft.client.particle.ParticleEngine"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Vector3d, $Vector3d$$Type} from "org.joml.Vector3d"

export interface $IClientBlockExtensions$$Interface {
}

export class $IClientBlockExtensions implements $IClientBlockExtensions$$Interface {
static readonly "DEFAULT": $IClientBlockExtensions

 "addDestroyEffects"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $ParticleEngine$$Type): boolean
 "addHitEffects"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $HitResult$$Type, arg3: $ParticleEngine$$Type): boolean
static "of"(arg0: $BlockState$$Type): $IClientBlockExtensions
static "of"(arg0: $Block$$Type): $IClientBlockExtensions
 "areBreakingParticlesTinted"(arg0: $BlockState$$Type, arg1: $ClientLevel$$Type, arg2: $BlockPos$$Type): boolean
 "getFogColor"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type, arg4: $Vector3d$$Type, arg5: float): $Vector3d
 "playBreakSound"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClientBlockExtensions$$Type = ($IClientBlockExtensions);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IClientBlockExtensions$$Original = $IClientBlockExtensions;}
declare module "net.neoforged.neoforge.client.event.RenderLivingEvent$Post" {
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$RenderLivingEvent} from "net.neoforged.neoforge.client.event.RenderLivingEvent"
import {$EntityModel} from "net.minecraft.client.model.EntityModel"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$LivingEntityRenderer$$Type} from "net.minecraft.client.renderer.entity.LivingEntityRenderer"

export class $RenderLivingEvent$Post<T extends $LivingEntity, M extends $EntityModel<(object)>> extends $RenderLivingEvent<(T), (M)> {
constructor(arg0: $LivingEntity$$Type, arg1: $LivingEntityRenderer$$Type<(T), (M)>, arg2: float, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderLivingEvent$Post$$Type<T, M> = ($RenderLivingEvent$Post<(T), (M)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderLivingEvent$Post$$Original<T, M> = $RenderLivingEvent$Post<(T), (M)>;}
declare module "net.neoforged.neoforge.client.event.CustomizeGuiOverlayEvent" {
import {$Window} from "com.mojang.blaze3d.platform.Window"
import {$GuiGraphics} from "net.minecraft.client.gui.GuiGraphics"
import {$Event} from "net.neoforged.bus.api.Event"
import {$DeltaTracker} from "net.minecraft.client.DeltaTracker"

export class $CustomizeGuiOverlayEvent extends $Event {
public "getPartialTick"(): $DeltaTracker
public "getGuiGraphics"(): $GuiGraphics
public "getWindow"(): $Window
get "partialTick"(): $DeltaTracker
get "guiGraphics"(): $GuiGraphics
get "window"(): $Window
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomizeGuiOverlayEvent$$Type = ($CustomizeGuiOverlayEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomizeGuiOverlayEvent$$Original = $CustomizeGuiOverlayEvent;}
declare module "net.neoforged.neoforge.client.model.geometry.IGeometryLoader" {
import {$JsonDeserializationContext, $JsonDeserializationContext$$Type} from "com.google.gson.JsonDeserializationContext"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$IUnbakedGeometry, $IUnbakedGeometry$$Type} from "net.neoforged.neoforge.client.model.geometry.IUnbakedGeometry"

export interface $IGeometryLoader$$Interface<T extends $IUnbakedGeometry<(object)>> {

(arg0: $JsonObject, arg1: $JsonDeserializationContext): T
}

export class $IGeometryLoader<T extends $IUnbakedGeometry<(object)>> implements $IGeometryLoader$$Interface {
 "read"(arg0: $JsonObject$$Type, arg1: $JsonDeserializationContext$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGeometryLoader$$Type<T> = ((arg0: $JsonObject, arg1: $JsonDeserializationContext) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IGeometryLoader$$Original<T> = $IGeometryLoader<(T)>;}
declare module "net.neoforged.neoforge.client.event.ContainerScreenEvent$Render" {
import {$GuiGraphics} from "net.minecraft.client.gui.GuiGraphics"
import {$ContainerScreenEvent} from "net.neoforged.neoforge.client.event.ContainerScreenEvent"

export class $ContainerScreenEvent$Render extends $ContainerScreenEvent {
public "getMouseX"(): integer
public "getMouseY"(): integer
public "getGuiGraphics"(): $GuiGraphics
get "mouseX"(): integer
get "mouseY"(): integer
get "guiGraphics"(): $GuiGraphics
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerScreenEvent$Render$$Type = ($ContainerScreenEvent$Render);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContainerScreenEvent$Render$$Original = $ContainerScreenEvent$Render;}
declare module "net.neoforged.neoforge.client.event.ScreenEvent$Render$Pre" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$ScreenEvent$Render} from "net.neoforged.neoforge.client.event.ScreenEvent$Render"

export class $ScreenEvent$Render$Pre extends $ScreenEvent$Render implements $ICancellableEvent$$Interface {
constructor(arg0: $Screen$$Type, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer, arg4: float)

public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvent$Render$Pre$$Type = ($ScreenEvent$Render$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenEvent$Render$Pre$$Original = $ScreenEvent$Render$Pre;}
declare module "net.neoforged.neoforge.client.extensions.IVertexConsumerExtension" {
import {$PoseStack$Pose$$Type} from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import {$VertexFormatElement$$Type} from "com.mojang.blaze3d.vertex.VertexFormatElement"
import {$VertexConsumer} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$Vector3f$$Type} from "org.joml.Vector3f"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$BakedQuad$$Type} from "net.minecraft.client.renderer.block.model.BakedQuad"
import {$Matrix3f$$Type} from "org.joml.Matrix3f"

export interface $IVertexConsumerExtension$$Interface {
}

export class $IVertexConsumerExtension implements $IVertexConsumerExtension$$Interface {
 "misc"(arg0: $VertexFormatElement$$Type, ...arg1: (integer)[]): $VertexConsumer
 "putBulkData"(arg0: $PoseStack$Pose$$Type, arg1: $BakedQuad$$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: integer, arg7: integer, arg8: boolean): void
 "applyBakedLighting"(arg0: integer, arg1: $ByteBuffer$$Type): integer
 "applyBakedNormals"(arg0: $Vector3f$$Type, arg1: $ByteBuffer$$Type, arg2: $Matrix3f$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVertexConsumerExtension$$Type = ($IVertexConsumerExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IVertexConsumerExtension$$Original = $IVertexConsumerExtension;}
declare module "net.neoforged.neoforge.client.event.CalculatePlayerTurnEvent" {
import {$Event} from "net.neoforged.bus.api.Event"

export class $CalculatePlayerTurnEvent extends $Event {
constructor(arg0: double, arg1: boolean)

public "getCinematicCameraEnabled"(): boolean
public "getMouseSensitivity"(): double
public "setMouseSensitivity"(arg0: double): void
public "setCinematicCameraEnabled"(arg0: boolean): void
get "cinematicCameraEnabled"(): boolean
get "mouseSensitivity"(): double
set "mouseSensitivity"(value: double)
set "cinematicCameraEnabled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CalculatePlayerTurnEvent$$Type = ($CalculatePlayerTurnEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CalculatePlayerTurnEvent$$Original = $CalculatePlayerTurnEvent;}
declare module "net.neoforged.neoforge.client.event.ScreenEvent$MouseButtonPressed" {
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ScreenEvent$MouseInput} from "net.neoforged.neoforge.client.event.ScreenEvent$MouseInput"

export class $ScreenEvent$MouseButtonPressed extends $ScreenEvent$MouseInput {
constructor(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer)

public "getMouseX"(): double
public "getButton"(): integer
public "getMouseY"(): double
get "mouseX"(): double
get "button"(): integer
get "mouseY"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvent$MouseButtonPressed$$Type = ($ScreenEvent$MouseButtonPressed);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenEvent$MouseButtonPressed$$Original = $ScreenEvent$MouseButtonPressed;}
declare module "net.neoforged.neoforge.client.event.ContainerScreenEvent$Render$Background" {
import {$ContainerScreenEvent$Render} from "net.neoforged.neoforge.client.event.ContainerScreenEvent$Render"
import {$AbstractContainerScreen$$Type} from "net.minecraft.client.gui.screens.inventory.AbstractContainerScreen"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"

export class $ContainerScreenEvent$Render$Background extends $ContainerScreenEvent$Render {
constructor(arg0: $AbstractContainerScreen$$Type<(never)>, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerScreenEvent$Render$Background$$Type = ($ContainerScreenEvent$Render$Background);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContainerScreenEvent$Render$Background$$Original = $ContainerScreenEvent$Render$Background;}
declare module "net.neoforged.neoforge.client.event.ScreenEvent$KeyReleased$Pre" {
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$ScreenEvent$KeyReleased} from "net.neoforged.neoforge.client.event.ScreenEvent$KeyReleased"

export class $ScreenEvent$KeyReleased$Pre extends $ScreenEvent$KeyReleased implements $ICancellableEvent$$Interface {
constructor(arg0: $Screen$$Type, arg1: integer, arg2: integer, arg3: integer)

public "getKeyCode"(): integer
public "getModifiers"(): integer
public "getScanCode"(): integer
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "keyCode"(): integer
get "modifiers"(): integer
get "scanCode"(): integer
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvent$KeyReleased$Pre$$Type = ($ScreenEvent$KeyReleased$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenEvent$KeyReleased$Pre$$Original = $ScreenEvent$KeyReleased$Pre;}
declare module "net.neoforged.neoforge.client.event.sound.SoundEvent$SoundSourceEvent" {
import {$SoundEvent} from "net.neoforged.neoforge.client.event.sound.SoundEvent"
import {$SoundInstance} from "net.minecraft.client.resources.sounds.SoundInstance"
import {$Channel} from "com.mojang.blaze3d.audio.Channel"

export class $SoundEvent$SoundSourceEvent extends $SoundEvent {
public "getSound"(): $SoundInstance
public "getName"(): StringJS
public "getChannel"(): $Channel
get "sound"(): $SoundInstance
get "name"(): StringJS
get "channel"(): $Channel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundEvent$SoundSourceEvent$$Type = ($SoundEvent$SoundSourceEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoundEvent$SoundSourceEvent$$Original = $SoundEvent$SoundSourceEvent;}
declare module "net.neoforged.neoforge.client.event.ScreenEvent$MouseButtonPressed$Post$Result" {
import {$Enum} from "java.lang.Enum"

export class $ScreenEvent$MouseButtonPressed$Post$Result extends $Enum<($ScreenEvent$MouseButtonPressed$Post$Result)> {
static readonly "FORCE_HANDLED": $ScreenEvent$MouseButtonPressed$Post$Result
static readonly "FORCE_UNHANDLED": $ScreenEvent$MouseButtonPressed$Post$Result
static readonly "DEFAULT": $ScreenEvent$MouseButtonPressed$Post$Result

public static "values"(): ($ScreenEvent$MouseButtonPressed$Post$Result)[]
public static "valueOf"(arg0: StringJS): $ScreenEvent$MouseButtonPressed$Post$Result
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvent$MouseButtonPressed$Post$Result$$Type = (("force_handled") | ("default") | ("force_unhandled"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenEvent$MouseButtonPressed$Post$Result$$Original = $ScreenEvent$MouseButtonPressed$Post$Result;}
declare module "net.neoforged.neoforge.client.model.geometry.IGeometryBakingContext" {
import {$ItemTransforms} from "net.minecraft.client.renderer.block.model.ItemTransforms"
import {$RenderTypeGroup} from "net.neoforged.neoforge.client.RenderTypeGroup"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Material} from "net.minecraft.client.resources.model.Material"
import {$Transformation} from "com.mojang.math.Transformation"

export interface $IGeometryBakingContext$$Interface {
get "rootTransform"(): $Transformation
get "gui3d"(): boolean
get "transforms"(): $ItemTransforms
get "renderTypeHint"(): $ResourceLocation
get "modelName"(): StringJS
}

export class $IGeometryBakingContext implements $IGeometryBakingContext$$Interface {
 "useBlockLight"(): boolean
 "getRootTransform"(): $Transformation
 "isGui3d"(): boolean
 "getTransforms"(): $ItemTransforms
 "getRenderTypeHint"(): $ResourceLocation
 "getRenderType"(arg0: $ResourceLocation$$Type): $RenderTypeGroup
 "getMaterial"(arg0: StringJS): $Material
 "useAmbientOcclusion"(): boolean
 "isComponentVisible"(arg0: StringJS, arg1: boolean): boolean
 "getModelName"(): StringJS
 "hasMaterial"(arg0: StringJS): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGeometryBakingContext$$Type = ($IGeometryBakingContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IGeometryBakingContext$$Original = $IGeometryBakingContext;}
declare module "net.neoforged.neoforge.client.event.CustomizeGuiOverlayEvent$BossEventProgress" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Window$$Type} from "com.mojang.blaze3d.platform.Window"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$LerpingBossEvent, $LerpingBossEvent$$Type} from "net.minecraft.client.gui.components.LerpingBossEvent"
import {$DeltaTracker$$Type} from "net.minecraft.client.DeltaTracker"
import {$CustomizeGuiOverlayEvent} from "net.neoforged.neoforge.client.event.CustomizeGuiOverlayEvent"

export class $CustomizeGuiOverlayEvent$BossEventProgress extends $CustomizeGuiOverlayEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Window$$Type, arg1: $GuiGraphics$$Type, arg2: $DeltaTracker$$Type, arg3: $LerpingBossEvent$$Type, arg4: integer, arg5: integer, arg6: integer)

public "getX"(): integer
public "getY"(): integer
public "getIncrement"(): integer
public "getBossEvent"(): $LerpingBossEvent
public "setIncrement"(arg0: integer): void
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "x"(): integer
get "y"(): integer
get "increment"(): integer
get "bossEvent"(): $LerpingBossEvent
set "increment"(value: integer)
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomizeGuiOverlayEvent$BossEventProgress$$Type = ($CustomizeGuiOverlayEvent$BossEventProgress);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomizeGuiOverlayEvent$BossEventProgress$$Original = $CustomizeGuiOverlayEvent$BossEventProgress;}
declare module "net.neoforged.neoforge.client.model.data.ModelData" {
import {$ModelProperty, $ModelProperty$$Type} from "net.neoforged.neoforge.client.model.data.ModelProperty"
import {$Set} from "java.util.Set"
import {$ModelData$Builder} from "net.neoforged.neoforge.client.model.data.ModelData$Builder"

export class $ModelData {
static readonly "EMPTY": $ModelData

public "derive"(): $ModelData$Builder
public "get"<T>(arg0: $ModelProperty$$Type<(T)>): T
public static "of"<T>(arg0: $ModelProperty$$Type<(T)>, arg1: T): $ModelData
public static "builder"(): $ModelData$Builder
public "getProperties"(): $Set<($ModelProperty<(never)>)>
public "has"(arg0: $ModelProperty$$Type<(never)>): boolean
get "properties"(): $Set<($ModelProperty<(never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelData$$Type = ($ModelData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelData$$Original = $ModelData;}
declare module "net.neoforged.neoforge.client.event.RenderGuiEvent$Post" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$RenderGuiEvent} from "net.neoforged.neoforge.client.event.RenderGuiEvent"
import {$DeltaTracker$$Type} from "net.minecraft.client.DeltaTracker"

export class $RenderGuiEvent$Post extends $RenderGuiEvent {
constructor(arg0: $GuiGraphics$$Type, arg1: $DeltaTracker$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderGuiEvent$Post$$Type = ($RenderGuiEvent$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderGuiEvent$Post$$Original = $RenderGuiEvent$Post;}
declare module "net.neoforged.neoforge.client.event.EntityRenderersEvent" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"

export class $EntityRenderersEvent extends $Event implements $IModBusEvent$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRenderersEvent$$Type = ($EntityRenderersEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityRenderersEvent$$Original = $EntityRenderersEvent;}
declare module "net.neoforged.neoforge.client.event.ClientPlayerNetworkEvent$LoggingOut" {
import {$LocalPlayer, $LocalPlayer$$Type} from "net.minecraft.client.player.LocalPlayer"
import {$MultiPlayerGameMode, $MultiPlayerGameMode$$Type} from "net.minecraft.client.multiplayer.MultiPlayerGameMode"
import {$ClientPlayerNetworkEvent} from "net.neoforged.neoforge.client.event.ClientPlayerNetworkEvent"
import {$Connection, $Connection$$Type} from "net.minecraft.network.Connection"

export class $ClientPlayerNetworkEvent$LoggingOut extends $ClientPlayerNetworkEvent {
constructor(arg0: $MultiPlayerGameMode$$Type, arg1: $LocalPlayer$$Type, arg2: $Connection$$Type)

public "getMultiPlayerGameMode"(): $MultiPlayerGameMode
public "getConnection"(): $Connection
public "getPlayer"(): $LocalPlayer
get "multiPlayerGameMode"(): $MultiPlayerGameMode
get "connection"(): $Connection
get "player"(): $LocalPlayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientPlayerNetworkEvent$LoggingOut$$Type = ($ClientPlayerNetworkEvent$LoggingOut);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientPlayerNetworkEvent$LoggingOut$$Original = $ClientPlayerNetworkEvent$LoggingOut;}
declare module "net.neoforged.neoforge.client.event.ScreenEvent$Render" {
import {$ScreenEvent} from "net.neoforged.neoforge.client.event.ScreenEvent"
import {$GuiGraphics} from "net.minecraft.client.gui.GuiGraphics"

export class $ScreenEvent$Render extends $ScreenEvent {
public "getMouseX"(): integer
public "getMouseY"(): integer
public "getPartialTick"(): float
public "getGuiGraphics"(): $GuiGraphics
get "mouseX"(): integer
get "mouseY"(): integer
get "partialTick"(): float
get "guiGraphics"(): $GuiGraphics
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvent$Render$$Type = ($ScreenEvent$Render);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenEvent$Render$$Original = $ScreenEvent$Render;}
declare module "net.neoforged.neoforge.client.event.ScreenEvent$Opening" {
import {$ScreenEvent} from "net.neoforged.neoforge.client.event.ScreenEvent"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"

export class $ScreenEvent$Opening extends $ScreenEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Screen$$Type, arg1: $Screen$$Type)

public "getNewScreen"(): $Screen
public "getCurrentScreen"(): $Screen
public "setNewScreen"(arg0: $Screen$$Type): void
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "newScreen"(): $Screen
get "currentScreen"(): $Screen
set "newScreen"(value: $Screen$$Type)
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvent$Opening$$Type = ($ScreenEvent$Opening);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenEvent$Opening$$Original = $ScreenEvent$Opening;}
declare module "net.neoforged.neoforge.client.event.ScreenEvent$MouseButtonPressed$Pre" {
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$ScreenEvent$MouseButtonPressed} from "net.neoforged.neoforge.client.event.ScreenEvent$MouseButtonPressed"

export class $ScreenEvent$MouseButtonPressed$Pre extends $ScreenEvent$MouseButtonPressed implements $ICancellableEvent$$Interface {
constructor(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer)

public "getMouseX"(): double
public "getMouseY"(): double
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "mouseX"(): double
get "mouseY"(): double
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvent$MouseButtonPressed$Pre$$Type = ($ScreenEvent$MouseButtonPressed$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenEvent$MouseButtonPressed$Pre$$Original = $ScreenEvent$MouseButtonPressed$Pre;}
declare module "net.neoforged.neoforge.client.event.ScreenEvent$MouseScrolled" {
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ScreenEvent$MouseInput} from "net.neoforged.neoforge.client.event.ScreenEvent$MouseInput"

export class $ScreenEvent$MouseScrolled extends $ScreenEvent$MouseInput {
constructor(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: double, arg4: double)

public "getMouseX"(): double
public "getMouseY"(): double
public "getScrollDeltaY"(): double
public "getScrollDeltaX"(): double
get "mouseX"(): double
get "mouseY"(): double
get "scrollDeltaY"(): double
get "scrollDeltaX"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvent$MouseScrolled$$Type = ($ScreenEvent$MouseScrolled);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenEvent$MouseScrolled$$Original = $ScreenEvent$MouseScrolled;}
declare module "net.neoforged.neoforge.client.event.ModelEvent$RegisterAdditional" {
import {$ModelEvent} from "net.neoforged.neoforge.client.event.ModelEvent"
import {$ModelResourceLocation$$Type} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$Set$$Type} from "java.util.Set"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"

export class $ModelEvent$RegisterAdditional extends $ModelEvent implements $IModBusEvent$$Interface {
constructor(arg0: $Set$$Type<($ModelResourceLocation$$Type)>)

public "register"(arg0: $ModelResourceLocation$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelEvent$RegisterAdditional$$Type = ($ModelEvent$RegisterAdditional);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelEvent$RegisterAdditional$$Original = $ModelEvent$RegisterAdditional;}
declare module "net.neoforged.neoforge.client.event.InputEvent$MouseButton$Pre" {
import {$InputEvent$MouseButton} from "net.neoforged.neoforge.client.event.InputEvent$MouseButton"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"

export class $InputEvent$MouseButton$Pre extends $InputEvent$MouseButton implements $ICancellableEvent$$Interface {
constructor(arg0: integer, arg1: integer, arg2: integer)

public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputEvent$MouseButton$Pre$$Type = ($InputEvent$MouseButton$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InputEvent$MouseButton$Pre$$Original = $InputEvent$MouseButton$Pre;}
declare module "net.neoforged.neoforge.client.event.RenderLivingEvent" {
import {$MultiBufferSource} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Event} from "net.neoforged.bus.api.Event"
import {$EntityModel} from "net.minecraft.client.model.EntityModel"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$LivingEntityRenderer} from "net.minecraft.client.renderer.entity.LivingEntityRenderer"

export class $RenderLivingEvent<T extends $LivingEntity, M extends $EntityModel<(object)>> extends $Event {
public "getPackedLight"(): integer
public "getPartialTick"(): float
public "getMultiBufferSource"(): $MultiBufferSource
public "getEntity"(): $LivingEntity
public "getRenderer"(): $LivingEntityRenderer<(T), (M)>
public "getPoseStack"(): $PoseStack
get "packedLight"(): integer
get "partialTick"(): float
get "multiBufferSource"(): $MultiBufferSource
get "entity"(): $LivingEntity
get "renderer"(): $LivingEntityRenderer<(T), (M)>
get "poseStack"(): $PoseStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderLivingEvent$$Type<T, M> = ($RenderLivingEvent<(T), (M)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderLivingEvent$$Original<T, M> = $RenderLivingEvent<(T), (M)>;}
declare module "net.neoforged.neoforge.client.extensions.common.IClientItemExtensions" {
import {$HumanoidArm$$Type} from "net.minecraft.world.entity.HumanoidArm"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Model, $Model$$Type} from "net.minecraft.client.model.Model"
import {$Font} from "net.minecraft.client.gui.Font"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ArmorMaterial$Layer$$Type} from "net.minecraft.world.item.ArmorMaterial$Layer"
import {$HumanoidModel, $HumanoidModel$$Type} from "net.minecraft.client.model.HumanoidModel"
import {$LocalPlayer$$Type} from "net.minecraft.client.player.LocalPlayer"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$IClientItemExtensions$FontContext$$Type} from "net.neoforged.neoforge.client.extensions.common.IClientItemExtensions$FontContext"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$DeltaTracker$$Type} from "net.minecraft.client.DeltaTracker"
import {$HumanoidModel$ArmPose} from "net.minecraft.client.model.HumanoidModel$ArmPose"
import {$BlockEntityWithoutLevelRenderer} from "net.minecraft.client.renderer.BlockEntityWithoutLevelRenderer"

export interface $IClientItemExtensions$$Interface {
get "customRenderer"(): $BlockEntityWithoutLevelRenderer
}

export class $IClientItemExtensions implements $IClientItemExtensions$$Interface {
static readonly "DEFAULT": $IClientItemExtensions

 "getFont"(arg0: $ItemStack$$Type, arg1: $IClientItemExtensions$FontContext$$Type): $Font
static "of"(arg0: $ItemStack$$Type): $IClientItemExtensions
static "of"(arg0: $Item$$Type): $IClientItemExtensions
 "getArmPose"(arg0: $LivingEntity$$Type, arg1: $InteractionHand$$Type, arg2: $ItemStack$$Type): $HumanoidModel$ArmPose
 "getArmorLayerTintColor"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $ArmorMaterial$Layer$$Type, arg3: integer, arg4: integer): integer
 "getScopeOverlayTexture"(arg0: $ItemStack$$Type): $ResourceLocation
 "getGenericArmorModel"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: $EquipmentSlot$$Type, arg3: $HumanoidModel$$Type<(never)>): $Model
 "getHumanoidArmorModel"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: $EquipmentSlot$$Type, arg3: $HumanoidModel$$Type<(never)>): $HumanoidModel<(never)>
 "shouldSpreadAsEntity"(arg0: $ItemStack$$Type): boolean
/**
 * 
 * @deprecated
 */
 "renderHelmetOverlay"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: integer, arg3: integer, arg4: float): void
 "renderHelmetOverlay"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $GuiGraphics$$Type, arg3: $DeltaTracker$$Type): void
 "setupModelAnimations"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: $EquipmentSlot$$Type, arg3: $Model$$Type, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float): void
 "applyForgeHandTransform"(arg0: $PoseStack$$Type, arg1: $LocalPlayer$$Type, arg2: $HumanoidArm$$Type, arg3: $ItemStack$$Type, arg4: float, arg5: float, arg6: float): boolean
 "shouldBobAsEntity"(arg0: $ItemStack$$Type): boolean
 "getDefaultDyeColor"(arg0: $ItemStack$$Type): integer
 "getCustomRenderer"(): $BlockEntityWithoutLevelRenderer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClientItemExtensions$$Type = ($IClientItemExtensions);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IClientItemExtensions$$Original = $IClientItemExtensions;}
declare module "net.neoforged.neoforge.client.event.RecipesUpdatedEvent" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$RecipeManager, $RecipeManager$$Type} from "net.minecraft.world.item.crafting.RecipeManager"

export class $RecipesUpdatedEvent extends $Event {
constructor(arg0: $RecipeManager$$Type)

public "getRecipeManager"(): $RecipeManager
get "recipeManager"(): $RecipeManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipesUpdatedEvent$$Type = ($RecipesUpdatedEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipesUpdatedEvent$$Original = $RecipesUpdatedEvent;}
declare module "net.neoforged.neoforge.client.event.ClientChatReceivedEvent$Player" {
import {$PlayerChatMessage, $PlayerChatMessage$$Type} from "net.minecraft.network.chat.PlayerChatMessage"
import {$UUID$$Type} from "java.util.UUID"
import {$ClientChatReceivedEvent} from "net.neoforged.neoforge.client.event.ClientChatReceivedEvent"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$ChatType$Bound$$Type} from "net.minecraft.network.chat.ChatType$Bound"

export class $ClientChatReceivedEvent$Player extends $ClientChatReceivedEvent {
constructor(arg0: $ChatType$Bound$$Type, arg1: $Component$$Type, arg2: $PlayerChatMessage$$Type, arg3: $UUID$$Type)

public "getPlayerChatMessage"(): $PlayerChatMessage
get "playerChatMessage"(): $PlayerChatMessage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientChatReceivedEvent$Player$$Type = ($ClientChatReceivedEvent$Player);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientChatReceivedEvent$Player$$Original = $ClientChatReceivedEvent$Player;}
declare module "net.neoforged.neoforge.client.event.ScreenEvent$MouseScrolled$Pre" {
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$ScreenEvent$MouseScrolled} from "net.neoforged.neoforge.client.event.ScreenEvent$MouseScrolled"

export class $ScreenEvent$MouseScrolled$Pre extends $ScreenEvent$MouseScrolled implements $ICancellableEvent$$Interface {
constructor(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: double, arg4: double)

public "getMouseX"(): double
public "getMouseY"(): double
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "mouseX"(): double
get "mouseY"(): double
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvent$MouseScrolled$Pre$$Type = ($ScreenEvent$MouseScrolled$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenEvent$MouseScrolled$Pre$$Original = $ScreenEvent$MouseScrolled$Pre;}
declare module "net.neoforged.neoforge.client.extensions.IDimensionSpecialEffectsExtension" {
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$LightTexture$$Type} from "net.minecraft.client.renderer.LightTexture"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Vector3f$$Type} from "org.joml.Vector3f"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Camera$$Type} from "net.minecraft.client.Camera"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"

export interface $IDimensionSpecialEffectsExtension$$Interface {
}

export class $IDimensionSpecialEffectsExtension implements $IDimensionSpecialEffectsExtension$$Interface {
 "renderSky"(arg0: $ClientLevel$$Type, arg1: integer, arg2: float, arg3: $Matrix4f$$Type, arg4: $Camera$$Type, arg5: $Matrix4f$$Type, arg6: boolean, arg7: $Runnable$$Type): boolean
 "tickRain"(arg0: $ClientLevel$$Type, arg1: integer, arg2: $Camera$$Type): boolean
 "adjustLightmapColors"(arg0: $ClientLevel$$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: integer, arg6: integer, arg7: $Vector3f$$Type): void
 "renderSnowAndRain"(arg0: $ClientLevel$$Type, arg1: integer, arg2: float, arg3: $LightTexture$$Type, arg4: double, arg5: double, arg6: double): boolean
 "renderClouds"(arg0: $ClientLevel$$Type, arg1: integer, arg2: float, arg3: $PoseStack$$Type, arg4: double, arg5: double, arg6: double, arg7: $Matrix4f$$Type, arg8: $Matrix4f$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDimensionSpecialEffectsExtension$$Type = ($IDimensionSpecialEffectsExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IDimensionSpecialEffectsExtension$$Original = $IDimensionSpecialEffectsExtension;}
declare module "net.neoforged.neoforge.client.event.ClientChatReceivedEvent$System" {
import {$ClientChatReceivedEvent} from "net.neoforged.neoforge.client.event.ClientChatReceivedEvent"
import {$Component$$Type} from "net.minecraft.network.chat.Component"

export class $ClientChatReceivedEvent$System extends $ClientChatReceivedEvent {
constructor(arg0: $Component$$Type, arg1: boolean)

public "isOverlay"(): boolean
get "overlay"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientChatReceivedEvent$System$$Type = ($ClientChatReceivedEvent$System);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientChatReceivedEvent$System$$Original = $ClientChatReceivedEvent$System;}
declare module "net.neoforged.neoforge.client.event.ScreenEvent$KeyPressed$Post" {
import {$ScreenEvent$KeyPressed} from "net.neoforged.neoforge.client.event.ScreenEvent$KeyPressed"
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"

export class $ScreenEvent$KeyPressed$Post extends $ScreenEvent$KeyPressed implements $ICancellableEvent$$Interface {
constructor(arg0: $Screen$$Type, arg1: integer, arg2: integer, arg3: integer)

public "getKeyCode"(): integer
public "getModifiers"(): integer
public "getScanCode"(): integer
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "keyCode"(): integer
get "modifiers"(): integer
get "scanCode"(): integer
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvent$KeyPressed$Post$$Type = ($ScreenEvent$KeyPressed$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenEvent$KeyPressed$Post$$Original = $ScreenEvent$KeyPressed$Post;}
declare module "net.neoforged.neoforge.client.event.RenderTooltipEvent" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$GuiGraphics} from "net.minecraft.client.gui.GuiGraphics"
import {$List} from "java.util.List"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Font} from "net.minecraft.client.gui.Font"
import {$ClientTooltipComponent} from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent"

export class $RenderTooltipEvent extends $Event {
public "getX"(): integer
public "getFont"(): $Font
public "getY"(): integer
public "getGraphics"(): $GuiGraphics
public "getComponents"(): $List<($ClientTooltipComponent)>
public "getItemStack"(): $ItemStack
get "x"(): integer
get "font"(): $Font
get "y"(): integer
get "graphics"(): $GuiGraphics
get "components"(): $List<($ClientTooltipComponent)>
get "itemStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderTooltipEvent$$Type = ($RenderTooltipEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderTooltipEvent$$Original = $RenderTooltipEvent;}
declare module "net.neoforged.neoforge.client.extensions.common.IClientFluidTypeExtensions" {
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$Camera$$Type} from "net.minecraft.client.Camera"
import {$FogShape$$Type} from "com.mojang.blaze3d.shaders.FogShape"
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$FogRenderer$FogMode$$Type} from "net.minecraft.client.renderer.FogRenderer$FogMode"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IClientFluidTypeExtensions$$Interface {
get "tintColor"(): integer
get "stillTexture"(): $ResourceLocation
get "overlayTexture"(): $ResourceLocation
get "flowingTexture"(): $ResourceLocation
}

export class $IClientFluidTypeExtensions implements $IClientFluidTypeExtensions$$Interface {
static readonly "DEFAULT": $IClientFluidTypeExtensions

static "of"(arg0: $FluidState$$Type): $IClientFluidTypeExtensions
static "of"(arg0: $FluidType$$Type): $IClientFluidTypeExtensions
static "of"(arg0: $Fluid$$Type): $IClientFluidTypeExtensions
 "getTintColor"(arg0: $FluidState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): integer
 "getTintColor"(arg0: $FluidStack$$Type): integer
 "getTintColor"(): integer
 "getStillTexture"(arg0: $FluidStack$$Type): $ResourceLocation
 "getStillTexture"(arg0: $FluidState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): $ResourceLocation
 "getStillTexture"(): $ResourceLocation
 "getRenderOverlayTexture"(arg0: $Minecraft$$Type): $ResourceLocation
 "getOverlayTexture"(): $ResourceLocation
 "getOverlayTexture"(arg0: $FluidStack$$Type): $ResourceLocation
 "getOverlayTexture"(arg0: $FluidState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): $ResourceLocation
 "modifyFogRender"(arg0: $Camera$$Type, arg1: $FogRenderer$FogMode$$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: $FogShape$$Type): void
 "renderOverlay"(arg0: $Minecraft$$Type, arg1: $PoseStack$$Type): void
 "renderFluid"(arg0: $FluidState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $VertexConsumer$$Type, arg4: $BlockState$$Type): boolean
 "modifyFogColor"(arg0: $Camera$$Type, arg1: float, arg2: $ClientLevel$$Type, arg3: integer, arg4: float, arg5: $Vector3f$$Type): $Vector3f
 "getFlowingTexture"(arg0: $FluidState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): $ResourceLocation
 "getFlowingTexture"(): $ResourceLocation
 "getFlowingTexture"(arg0: $FluidStack$$Type): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClientFluidTypeExtensions$$Type = ($IClientFluidTypeExtensions);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IClientFluidTypeExtensions$$Original = $IClientFluidTypeExtensions;}
declare module "net.neoforged.neoforge.client.extensions.IKeyMappingExtension" {
import {$KeyModifier, $KeyModifier$$Type} from "net.neoforged.neoforge.client.settings.KeyModifier"
import {$IKeyConflictContext, $IKeyConflictContext$$Type} from "net.neoforged.neoforge.client.settings.IKeyConflictContext"
import {$InputConstants$Key, $InputConstants$Key$$Type} from "com.mojang.blaze3d.platform.InputConstants$Key"
import {$KeyMapping$$Type} from "net.minecraft.client.KeyMapping"
import {$Component} from "net.minecraft.network.chat.Component"

export interface $IKeyMappingExtension$$Interface {
get "key"(): $InputConstants$Key
get "displayName"(): $Component
get "keyConflictContext"(): $IKeyConflictContext
get "defaultKeyModifier"(): $KeyModifier
set "keyConflictContext"(value: $IKeyConflictContext$$Type)
get "toDefault"(): void
get "conflictContextAndModifierActive"(): boolean
get "keyModifier"(): $KeyModifier
}

export class $IKeyMappingExtension implements $IKeyMappingExtension$$Interface {
 "getKey"(): $InputConstants$Key
 "getDisplayName"(): $Component
 "getKeyConflictContext"(): $IKeyConflictContext
 "getDefaultKeyModifier"(): $KeyModifier
 "setKeyConflictContext"(arg0: $IKeyConflictContext$$Type): void
 "setKeyModifierAndCode"(arg0: $KeyModifier$$Type, arg1: $InputConstants$Key$$Type): void
 "hasKeyModifierConflict"(arg0: $KeyMapping$$Type): boolean
 "setToDefault"(): void
 "isConflictContextAndModifierActive"(): boolean
 "getKeyModifier"(): $KeyModifier
 "isActiveAndMatches"(arg0: $InputConstants$Key$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IKeyMappingExtension$$Type = ($IKeyMappingExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IKeyMappingExtension$$Original = $IKeyMappingExtension;}
declare module "net.neoforged.neoforge.client.model.data.ModelDataManager" {
import {$Long2ObjectMap} from "it.unimi.dsi.fastutil.longs.Long2ObjectMap"
import {$SectionPos$$Type} from "net.minecraft.core.SectionPos"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$ChunkEvent$Unload$$Type} from "net.neoforged.neoforge.event.level.ChunkEvent$Unload"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$Long2ObjectFunction} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"

export class $ModelDataManager {
static readonly "EMPTY_SNAPSHOT": $Long2ObjectFunction<($ModelData)>

constructor(arg0: $Level$$Type)

public "snapshotSectionRegion"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): $Long2ObjectFunction<($ModelData)>
public static "onChunkUnload"(arg0: $ChunkEvent$Unload$$Type): void
public "requestRefresh"(arg0: $BlockEntity$$Type): void
public "getAt"(arg0: $BlockPos$$Type): $ModelData
public "getAt"(arg0: $SectionPos$$Type): $Long2ObjectMap<($ModelData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelDataManager$$Type = ($ModelDataManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelDataManager$$Original = $ModelDataManager;}
declare module "net.neoforged.neoforge.client.model.geometry.BlockGeometryBakingContext" {
import {$TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$BlockGeometryBakingContext$VisibilityData} from "net.neoforged.neoforge.client.model.geometry.BlockGeometryBakingContext$VisibilityData"
import {$Material, $Material$$Type} from "net.minecraft.client.resources.model.Material"
import {$ItemOverrides$$Type} from "net.minecraft.client.renderer.block.model.ItemOverrides"
import {$BlockModel, $BlockModel$$Type} from "net.minecraft.client.renderer.block.model.BlockModel"
import {$BakedModel} from "net.minecraft.client.resources.model.BakedModel"
import {$IGeometryBakingContext$$Interface} from "net.neoforged.neoforge.client.model.geometry.IGeometryBakingContext"
import {$ModelState$$Type} from "net.minecraft.client.resources.model.ModelState"
import {$ItemTransforms} from "net.minecraft.client.renderer.block.model.ItemTransforms"
import {$RenderTypeGroup} from "net.neoforged.neoforge.client.RenderTypeGroup"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Transformation, $Transformation$$Type} from "com.mojang.math.Transformation"
import {$Function$$Type} from "java.util.function.Function"
import {$ModelBaker$$Type} from "net.minecraft.client.resources.model.ModelBaker"
import {$IUnbakedGeometry, $IUnbakedGeometry$$Type} from "net.neoforged.neoforge.client.model.geometry.IUnbakedGeometry"

export class $BlockGeometryBakingContext implements $IGeometryBakingContext$$Interface {
readonly "owner": $BlockModel
readonly "visibilityData": $BlockGeometryBakingContext$VisibilityData

constructor(arg0: $BlockModel$$Type)

public "useBlockLight"(): boolean
public "getRootTransform"(): $Transformation
public "isGui3d"(): boolean
public "bake"(arg0: $ModelBaker$$Type, arg1: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>, arg2: $ModelState$$Type, arg3: $ItemOverrides$$Type): $BakedModel
public "copyFrom"(arg0: $BlockGeometryBakingContext$$Type): void
public "getTransforms"(): $ItemTransforms
public "getRenderTypeHint"(): $ResourceLocation
public "getMaterial"(arg0: StringJS): $Material
public "useAmbientOcclusion"(): boolean
public "getCustomGeometry"(): $IUnbakedGeometry<(never)>
public "hasCustomGeometry"(): boolean
public "isComponentVisible"(arg0: StringJS, arg1: boolean): boolean
public "getModelName"(): StringJS
public "setCustomGeometry"(arg0: $IUnbakedGeometry$$Type<(never)>): void
public "setRootTransform"(arg0: $Transformation$$Type): void
public "setRenderTypeHint"(arg0: $ResourceLocation$$Type): void
public "hasMaterial"(arg0: StringJS): boolean
public "setGui3d"(arg0: boolean): void
public "getRenderType"(arg0: $ResourceLocation$$Type): $RenderTypeGroup
get "rootTransform"(): $Transformation
get "gui3d"(): boolean
get "transforms"(): $ItemTransforms
get "renderTypeHint"(): $ResourceLocation
get "customGeometry"(): $IUnbakedGeometry<(never)>
get "modelName"(): StringJS
set "customGeometry"(value: $IUnbakedGeometry$$Type<(never)>)
set "rootTransform"(value: $Transformation$$Type)
set "renderTypeHint"(value: $ResourceLocation$$Type)
set "gui3d"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockGeometryBakingContext$$Type = ($BlockGeometryBakingContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockGeometryBakingContext$$Original = $BlockGeometryBakingContext;}
declare module "net.neoforged.neoforge.client.event.RenderLevelStageEvent$Stage" {
import {$RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export class $RenderLevelStageEvent$Stage {
static readonly "AFTER_WEATHER": $RenderLevelStageEvent$Stage
static readonly "AFTER_SKY": $RenderLevelStageEvent$Stage
static readonly "AFTER_CUTOUT_BLOCKS": $RenderLevelStageEvent$Stage
static readonly "AFTER_TRANSLUCENT_BLOCKS": $RenderLevelStageEvent$Stage
static readonly "AFTER_SOLID_BLOCKS": $RenderLevelStageEvent$Stage
static readonly "AFTER_TRIPWIRE_BLOCKS": $RenderLevelStageEvent$Stage
static readonly "AFTER_LEVEL": $RenderLevelStageEvent$Stage
static readonly "AFTER_BLOCK_ENTITIES": $RenderLevelStageEvent$Stage
static readonly "AFTER_ENTITIES": $RenderLevelStageEvent$Stage
static readonly "AFTER_PARTICLES": $RenderLevelStageEvent$Stage
static readonly "AFTER_CUTOUT_MIPPED_BLOCKS_BLOCKS": $RenderLevelStageEvent$Stage

public "toString"(): StringJS
public static "fromRenderType"(arg0: $RenderType$$Type): $RenderLevelStageEvent$Stage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderLevelStageEvent$Stage$$Type = ($RenderLevelStageEvent$Stage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderLevelStageEvent$Stage$$Original = $RenderLevelStageEvent$Stage;}
declare module "net.neoforged.neoforge.client.event.ViewportEvent$ComputeFov" {
import {$GameRenderer$$Type} from "net.minecraft.client.renderer.GameRenderer"
import {$Camera$$Type} from "net.minecraft.client.Camera"
import {$ViewportEvent} from "net.neoforged.neoforge.client.event.ViewportEvent"

export class $ViewportEvent$ComputeFov extends $ViewportEvent {
constructor(arg0: $GameRenderer$$Type, arg1: $Camera$$Type, arg2: double, arg3: double, arg4: boolean)

public "usedConfiguredFov"(): boolean
public "getFOV"(): double
public "setFOV"(arg0: double): void
get "FOV"(): double
set "FOV"(value: double)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ViewportEvent$ComputeFov$$Type = ($ViewportEvent$ComputeFov);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ViewportEvent$ComputeFov$$Original = $ViewportEvent$ComputeFov;}
declare module "net.neoforged.neoforge.client.event.RegisterEntitySpectatorShadersEvent" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map$$Type} from "java.util.Map"
import {$Event} from "net.neoforged.bus.api.Event"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $RegisterEntitySpectatorShadersEvent extends $Event implements $IModBusEvent$$Interface {
constructor(arg0: $Map$$Type<($EntityType$$Type<(never)>), ($ResourceLocation$$Type)>)

public "register"(arg0: $EntityType$$Type<(never)>, arg1: $ResourceLocation$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterEntitySpectatorShadersEvent$$Type = ($RegisterEntitySpectatorShadersEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterEntitySpectatorShadersEvent$$Original = $RegisterEntitySpectatorShadersEvent;}
declare module "net.neoforged.neoforge.client.model.data.ModelProperty" {
import {$Predicate, $Predicate$$Type, $Predicate$$Interface} from "java.util.function.Predicate"

export class $ModelProperty<T> implements $Predicate$$Interface<(T)> {
constructor()
constructor(arg0: $Predicate$$Type<(T)>)

public "test"(arg0: T): boolean
public "or"(arg0: $Predicate$$Type<(T)>): $Predicate<(T)>
public "negate"(): $Predicate<(T)>
public "and"(arg0: $Predicate$$Type<(T)>): $Predicate<(T)>
public static "not"<T>(arg0: $Predicate$$Type<(T)>): $Predicate<(T)>
public static "isEqual"<T>(arg0: any): $Predicate<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelProperty$$Type<T> = ($ModelProperty<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelProperty$$Original<T> = $ModelProperty<(T)>;}
declare module "net.neoforged.neoforge.client.event.RenderGuiEvent$Pre" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$RenderGuiEvent} from "net.neoforged.neoforge.client.event.RenderGuiEvent"
import {$DeltaTracker$$Type} from "net.minecraft.client.DeltaTracker"

export class $RenderGuiEvent$Pre extends $RenderGuiEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $GuiGraphics$$Type, arg1: $DeltaTracker$$Type)

public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderGuiEvent$Pre$$Type = ($RenderGuiEvent$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderGuiEvent$Pre$$Original = $RenderGuiEvent$Pre;}
declare module "net.neoforged.neoforge.client.event.RegisterColorHandlersEvent$Item" {
import {$BlockColors, $BlockColors$$Type} from "net.minecraft.client.color.block.BlockColors"
import {$ItemColors, $ItemColors$$Type} from "net.minecraft.client.color.item.ItemColors"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$RegisterColorHandlersEvent} from "net.neoforged.neoforge.client.event.RegisterColorHandlersEvent"
import {$ItemColor$$Type} from "net.minecraft.client.color.item.ItemColor"

export class $RegisterColorHandlersEvent$Item extends $RegisterColorHandlersEvent {
constructor(arg0: $ItemColors$$Type, arg1: $BlockColors$$Type)

public "register"(arg0: $ItemColor$$Type, ...arg1: ($ItemLike$$Type)[]): void
public "getBlockColors"(): $BlockColors
public "getItemColors"(): $ItemColors
get "blockColors"(): $BlockColors
get "itemColors"(): $ItemColors
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterColorHandlersEvent$Item$$Type = ($RegisterColorHandlersEvent$Item);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterColorHandlersEvent$Item$$Original = $RegisterColorHandlersEvent$Item;}
declare module "net.neoforged.neoforge.client.event.RegisterItemDecorationsEvent" {
import {$Map$$Type} from "java.util.Map"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$List$$Type} from "java.util.List"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$IItemDecorator$$Type} from "net.neoforged.neoforge.client.IItemDecorator"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"

export class $RegisterItemDecorationsEvent extends $Event implements $IModBusEvent$$Interface {
constructor(arg0: $Map$$Type<($Item$$Type), ($List$$Type<($IItemDecorator$$Type)>)>)

public "register"(arg0: $ItemLike$$Type, arg1: $IItemDecorator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterItemDecorationsEvent$$Type = ($RegisterItemDecorationsEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterItemDecorationsEvent$$Original = $RegisterItemDecorationsEvent;}
declare module "net.neoforged.neoforge.client.event.ScreenEvent$KeyInput" {
import {$ScreenEvent} from "net.neoforged.neoforge.client.event.ScreenEvent"

export class $ScreenEvent$KeyInput extends $ScreenEvent {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvent$KeyInput$$Type = ($ScreenEvent$KeyInput);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenEvent$KeyInput$$Original = $ScreenEvent$KeyInput;}
declare module "net.neoforged.neoforge.client.event.RegisterClientTooltipComponentFactoriesEvent" {
import {$TooltipComponent, $TooltipComponent$$Type} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$Map$$Type} from "java.util.Map"
import {$Function$$Type} from "java.util.function.Function"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Class$$Type} from "java.lang.Class"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"
import {$ClientTooltipComponent$$Type} from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent"

export class $RegisterClientTooltipComponentFactoriesEvent extends $Event implements $IModBusEvent$$Interface {
constructor(arg0: $Map$$Type<($Class$$Type<($TooltipComponent$$Type)>), ($Function$$Type<($TooltipComponent$$Type), ($ClientTooltipComponent$$Type)>)>)

public "register"<T extends $TooltipComponent>(arg0: $Class$$Type<(T)>, arg1: $Function$$Type<(T), ($ClientTooltipComponent$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterClientTooltipComponentFactoriesEvent$$Type = ($RegisterClientTooltipComponentFactoriesEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterClientTooltipComponentFactoriesEvent$$Original = $RegisterClientTooltipComponentFactoriesEvent;}
declare module "net.neoforged.neoforge.client.event.RenderHighlightEvent$Entity" {
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$EntityHitResult, $EntityHitResult$$Type} from "net.minecraft.world.phys.EntityHitResult"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$RenderHighlightEvent} from "net.neoforged.neoforge.client.event.RenderHighlightEvent"
import {$LevelRenderer$$Type} from "net.minecraft.client.renderer.LevelRenderer"
import {$DeltaTracker$$Type} from "net.minecraft.client.DeltaTracker"
import {$Camera$$Type} from "net.minecraft.client.Camera"

export class $RenderHighlightEvent$Entity extends $RenderHighlightEvent {
constructor(arg0: $LevelRenderer$$Type, arg1: $Camera$$Type, arg2: $EntityHitResult$$Type, arg3: $DeltaTracker$$Type, arg4: $PoseStack$$Type, arg5: $MultiBufferSource$$Type)

public "getTarget"(): $EntityHitResult
get "target"(): $EntityHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderHighlightEvent$Entity$$Type = ($RenderHighlightEvent$Entity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderHighlightEvent$Entity$$Original = $RenderHighlightEvent$Entity;}
declare module "net.neoforged.neoforge.client.event.ScreenEvent$KeyReleased" {
import {$ScreenEvent$KeyInput} from "net.neoforged.neoforge.client.event.ScreenEvent$KeyInput"
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export class $ScreenEvent$KeyReleased extends $ScreenEvent$KeyInput {
constructor(arg0: $Screen$$Type, arg1: integer, arg2: integer, arg3: integer)

public "getKeyCode"(): integer
public "getModifiers"(): integer
public "getScanCode"(): integer
get "keyCode"(): integer
get "modifiers"(): integer
get "scanCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvent$KeyReleased$$Type = ($ScreenEvent$KeyReleased);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenEvent$KeyReleased$$Original = $ScreenEvent$KeyReleased;}
declare module "net.neoforged.neoforge.client.extensions.IBakedModelExtension" {
import {$TextureAtlasSprite} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$ItemDisplayContext$$Type} from "net.minecraft.world.item.ItemDisplayContext"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List} from "java.util.List"
import {$BakedModel} from "net.minecraft.client.resources.model.BakedModel"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$BakedQuad} from "net.minecraft.client.renderer.block.model.BakedQuad"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$ChunkRenderTypeSet} from "net.neoforged.neoforge.client.ChunkRenderTypeSet"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$TriState} from "net.neoforged.neoforge.common.util.TriState"

export interface $IBakedModelExtension$$Interface {
}

export class $IBakedModelExtension implements $IBakedModelExtension$$Interface {
 "getRenderTypes"(arg0: $BlockState$$Type, arg1: $RandomSource$$Type, arg2: $ModelData$$Type): $ChunkRenderTypeSet
 "getRenderTypes"(arg0: $ItemStack$$Type, arg1: boolean): $List<($RenderType)>
 "getRenderPasses"(arg0: $ItemStack$$Type, arg1: boolean): $List<($BakedModel)>
 "getQuads"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $RandomSource$$Type, arg3: $ModelData$$Type, arg4: $RenderType$$Type): $List<($BakedQuad)>
 "applyTransform"(arg0: $ItemDisplayContext$$Type, arg1: $PoseStack$$Type, arg2: boolean): $BakedModel
 "getParticleIcon"(arg0: $ModelData$$Type): $TextureAtlasSprite
 "getModelData"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ModelData$$Type): $ModelData
 "useAmbientOcclusion"(arg0: $BlockState$$Type, arg1: $ModelData$$Type, arg2: $RenderType$$Type): $TriState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBakedModelExtension$$Type = ($IBakedModelExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IBakedModelExtension$$Original = $IBakedModelExtension;}
declare module "net.neoforged.neoforge.client.event.ScreenEvent$Closing" {
import {$ScreenEvent} from "net.neoforged.neoforge.client.event.ScreenEvent"
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export class $ScreenEvent$Closing extends $ScreenEvent {
constructor(arg0: $Screen$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvent$Closing$$Type = ($ScreenEvent$Closing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenEvent$Closing$$Original = $ScreenEvent$Closing;}
declare module "net.neoforged.neoforge.client.event.ClientChatReceivedEvent" {
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ChatType$Bound, $ChatType$Bound$$Type} from "net.minecraft.network.chat.ChatType$Bound"

export class $ClientChatReceivedEvent extends $Event implements $ICancellableEvent$$Interface {
constructor(arg0: $ChatType$Bound$$Type, arg1: $Component$$Type, arg2: $UUID$$Type)

public "getMessage"(): $Component
public "isSystem"(): boolean
public "getBoundChatType"(): $ChatType$Bound
public "setMessage"(arg0: $Component$$Type): void
public "getSender"(): $UUID
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "message"(): $Component
get "system"(): boolean
get "boundChatType"(): $ChatType$Bound
set "message"(value: $Component$$Type)
get "sender"(): $UUID
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientChatReceivedEvent$$Type = ($ClientChatReceivedEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientChatReceivedEvent$$Original = $ClientChatReceivedEvent;}
declare module "net.neoforged.neoforge.client.event.sound.PlaySoundSourceEvent" {
import {$SoundEngine$$Type} from "net.minecraft.client.sounds.SoundEngine"
import {$SoundInstance$$Type} from "net.minecraft.client.resources.sounds.SoundInstance"
import {$Channel$$Type} from "com.mojang.blaze3d.audio.Channel"
import {$SoundEvent$SoundSourceEvent} from "net.neoforged.neoforge.client.event.sound.SoundEvent$SoundSourceEvent"

export class $PlaySoundSourceEvent extends $SoundEvent$SoundSourceEvent {
constructor(arg0: $SoundEngine$$Type, arg1: $SoundInstance$$Type, arg2: $Channel$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlaySoundSourceEvent$$Type = ($PlaySoundSourceEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlaySoundSourceEvent$$Original = $PlaySoundSourceEvent;}
declare module "net.neoforged.neoforge.client.event.RegisterClientCommandsEvent" {
import {$CommandBuildContext, $CommandBuildContext$$Type} from "net.minecraft.commands.CommandBuildContext"
import {$Event} from "net.neoforged.bus.api.Event"
import {$CommandDispatcher, $CommandDispatcher$$Type} from "com.mojang.brigadier.CommandDispatcher"
import {$CommandSourceStack, $CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"

export class $RegisterClientCommandsEvent extends $Event {
constructor(arg0: $CommandDispatcher$$Type<($CommandSourceStack$$Type)>, arg1: $CommandBuildContext$$Type)

public "getBuildContext"(): $CommandBuildContext
public "getDispatcher"(): $CommandDispatcher<($CommandSourceStack)>
get "buildContext"(): $CommandBuildContext
get "dispatcher"(): $CommandDispatcher<($CommandSourceStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterClientCommandsEvent$$Type = ($RegisterClientCommandsEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterClientCommandsEvent$$Original = $RegisterClientCommandsEvent;}
declare module "net.neoforged.neoforge.client.extensions.IFontExtension" {
import {$FormattedText, $FormattedText$$Type} from "net.minecraft.network.chat.FormattedText"
import {$Font, $Font$$Type} from "net.minecraft.client.gui.Font"

export interface $IFontExtension$$Interface {

(): $Font$$Type
}

export class $IFontExtension implements $IFontExtension$$Interface {
static readonly "ELLIPSIS": $FormattedText

 "self"(): $Font
 "ellipsize"(arg0: $FormattedText$$Type, arg1: integer): $FormattedText
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFontExtension$$Type = (() => $Font$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFontExtension$$Original = $IFontExtension;}
declare module "net.neoforged.neoforge.client.event.RegisterShadersEvent" {
import {$ResourceProvider, $ResourceProvider$$Type} from "net.minecraft.server.packs.resources.ResourceProvider"
import {$Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$List$$Type} from "java.util.List"
import {$Event} from "net.neoforged.bus.api.Event"
import {$ShaderInstance$$Type} from "net.minecraft.client.renderer.ShaderInstance"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $RegisterShadersEvent extends $Event implements $IModBusEvent$$Interface {
constructor(arg0: $ResourceProvider$$Type, arg1: $List$$Type<($Pair$$Type<($ShaderInstance$$Type), ($Consumer$$Type<($ShaderInstance$$Type)>)>)>)

public "getResourceProvider"(): $ResourceProvider
public "registerShader"(arg0: $ShaderInstance$$Type, arg1: $Consumer$$Type<($ShaderInstance)>): void
get "resourceProvider"(): $ResourceProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterShadersEvent$$Type = ($RegisterShadersEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterShadersEvent$$Original = $RegisterShadersEvent;}
declare module "net.neoforged.neoforge.client.event.RenderPlayerEvent" {
import {$MultiBufferSource} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack} from "com.mojang.blaze3d.vertex.PoseStack"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$PlayerRenderer} from "net.minecraft.client.renderer.entity.player.PlayerRenderer"

export class $RenderPlayerEvent extends $PlayerEvent {
public "getPackedLight"(): integer
public "getPartialTick"(): float
public "getMultiBufferSource"(): $MultiBufferSource
public "getRenderer"(): $PlayerRenderer
public "getPoseStack"(): $PoseStack
public "getEntity"(): $Entity
get "packedLight"(): integer
get "partialTick"(): float
get "multiBufferSource"(): $MultiBufferSource
get "renderer"(): $PlayerRenderer
get "poseStack"(): $PoseStack
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderPlayerEvent$$Type = ($RenderPlayerEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderPlayerEvent$$Original = $RenderPlayerEvent;}
declare module "net.neoforged.neoforge.client.event.ClientPlayerNetworkEvent" {
import {$LocalPlayer} from "net.minecraft.client.player.LocalPlayer"
import {$MultiPlayerGameMode} from "net.minecraft.client.multiplayer.MultiPlayerGameMode"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Connection} from "net.minecraft.network.Connection"

export class $ClientPlayerNetworkEvent extends $Event {
public "getMultiPlayerGameMode"(): $MultiPlayerGameMode
public "getConnection"(): $Connection
public "getPlayer"(): $LocalPlayer
get "multiPlayerGameMode"(): $MultiPlayerGameMode
get "connection"(): $Connection
get "player"(): $LocalPlayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientPlayerNetworkEvent$$Type = ($ClientPlayerNetworkEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientPlayerNetworkEvent$$Original = $ClientPlayerNetworkEvent;}
declare module "net.neoforged.neoforge.client.event.ScreenEvent$KeyReleased$Post" {
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$ScreenEvent$KeyReleased} from "net.neoforged.neoforge.client.event.ScreenEvent$KeyReleased"

export class $ScreenEvent$KeyReleased$Post extends $ScreenEvent$KeyReleased implements $ICancellableEvent$$Interface {
constructor(arg0: $Screen$$Type, arg1: integer, arg2: integer, arg3: integer)

public "getKeyCode"(): integer
public "getModifiers"(): integer
public "getScanCode"(): integer
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "keyCode"(): integer
get "modifiers"(): integer
get "scanCode"(): integer
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvent$KeyReleased$Post$$Type = ($ScreenEvent$KeyReleased$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenEvent$KeyReleased$Post$$Original = $ScreenEvent$KeyReleased$Post;}
declare module "net.neoforged.neoforge.client.event.sound.PlaySoundEvent" {
import {$SoundEvent} from "net.neoforged.neoforge.client.event.sound.SoundEvent"
import {$SoundEngine$$Type} from "net.minecraft.client.sounds.SoundEngine"
import {$SoundInstance, $SoundInstance$$Type} from "net.minecraft.client.resources.sounds.SoundInstance"

export class $PlaySoundEvent extends $SoundEvent {
constructor(arg0: $SoundEngine$$Type, arg1: $SoundInstance$$Type)

public "getSound"(): $SoundInstance
public "getName"(): StringJS
public "setSound"(arg0: $SoundInstance$$Type): void
public "getOriginalSound"(): $SoundInstance
get "sound"(): $SoundInstance
get "name"(): StringJS
set "sound"(value: $SoundInstance$$Type)
get "originalSound"(): $SoundInstance
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlaySoundEvent$$Type = ($PlaySoundEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlaySoundEvent$$Original = $PlaySoundEvent;}
declare module "net.neoforged.neoforge.client.event.RenderBlockScreenEffectEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RenderBlockScreenEffectEvent$OverlayType, $RenderBlockScreenEffectEvent$OverlayType$$Type} from "net.neoforged.neoforge.client.event.RenderBlockScreenEffectEvent$OverlayType"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Event} from "net.neoforged.bus.api.Event"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RenderBlockScreenEffectEvent extends $Event implements $ICancellableEvent$$Interface {
constructor(arg0: $Player$$Type, arg1: $PoseStack$$Type, arg2: $RenderBlockScreenEffectEvent$OverlayType$$Type, arg3: $BlockState$$Type, arg4: $BlockPos$$Type)

public "getBlockState"(): $BlockState
public "getPlayer"(): $Player
public "getBlockPos"(): $BlockPos
public "getOverlayType"(): $RenderBlockScreenEffectEvent$OverlayType
public "getPoseStack"(): $PoseStack
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "blockState"(): $BlockState
get "player"(): $Player
get "blockPos"(): $BlockPos
get "overlayType"(): $RenderBlockScreenEffectEvent$OverlayType
get "poseStack"(): $PoseStack
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderBlockScreenEffectEvent$$Type = ($RenderBlockScreenEffectEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderBlockScreenEffectEvent$$Original = $RenderBlockScreenEffectEvent;}
declare module "net.neoforged.neoforge.client.gui.map.RegisterMapDecorationRenderersEvent" {
import {$Map$$Type} from "java.util.Map"
import {$Event} from "net.neoforged.bus.api.Event"
import {$IMapDecorationRenderer$$Type} from "net.neoforged.neoforge.client.gui.map.IMapDecorationRenderer"
import {$MapDecorationType$$Type} from "net.minecraft.world.level.saveddata.maps.MapDecorationType"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"

export class $RegisterMapDecorationRenderersEvent extends $Event implements $IModBusEvent$$Interface {
constructor(arg0: $Map$$Type<($MapDecorationType$$Type), ($IMapDecorationRenderer$$Type)>)

public "register"(arg0: $MapDecorationType$$Type, arg1: $IMapDecorationRenderer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterMapDecorationRenderersEvent$$Type = ($RegisterMapDecorationRenderersEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterMapDecorationRenderersEvent$$Original = $RegisterMapDecorationRenderersEvent;}
declare module "net.neoforged.neoforge.client.event.RenderHandEvent" {
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Event} from "net.neoforged.bus.api.Event"

export class $RenderHandEvent extends $Event implements $ICancellableEvent$$Interface {
constructor(arg0: $InteractionHand$$Type, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: integer, arg4: float, arg5: float, arg6: float, arg7: float, arg8: $ItemStack$$Type)

public "getPackedLight"(): integer
public "getPartialTick"(): float
public "getMultiBufferSource"(): $MultiBufferSource
public "getHand"(): $InteractionHand
public "getSwingProgress"(): float
public "getEquipProgress"(): float
public "getItemStack"(): $ItemStack
public "getInterpolatedPitch"(): float
public "getPoseStack"(): $PoseStack
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "packedLight"(): integer
get "partialTick"(): float
get "multiBufferSource"(): $MultiBufferSource
get "hand"(): $InteractionHand
get "swingProgress"(): float
get "equipProgress"(): float
get "itemStack"(): $ItemStack
get "interpolatedPitch"(): float
get "poseStack"(): $PoseStack
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderHandEvent$$Type = ($RenderHandEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderHandEvent$$Original = $RenderHandEvent;}
declare module "net.neoforged.neoforge.client.event.ScreenEvent$RenderInventoryMobEffects" {
import {$ScreenEvent} from "net.neoforged.neoforge.client.event.ScreenEvent"
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"

export class $ScreenEvent$RenderInventoryMobEffects extends $ScreenEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Screen$$Type, arg1: integer, arg2: boolean, arg3: integer)

public "isCompact"(): boolean
public "getAvailableSpace"(): integer
public "setCompact"(arg0: boolean): void
public "getHorizontalOffset"(): integer
public "setHorizontalOffset"(arg0: integer): void
public "addHorizontalOffset"(arg0: integer): void
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "compact"(): boolean
get "availableSpace"(): integer
set "compact"(value: boolean)
get "horizontalOffset"(): integer
set "horizontalOffset"(value: integer)
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvent$RenderInventoryMobEffects$$Type = ($ScreenEvent$RenderInventoryMobEffects);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenEvent$RenderInventoryMobEffects$$Original = $ScreenEvent$RenderInventoryMobEffects;}
declare module "net.neoforged.neoforge.client.event.ScreenEvent$Init" {
import {$GuiEventListener, $GuiEventListener$$Type} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$ScreenEvent} from "net.neoforged.neoforge.client.event.ScreenEvent"
import {$List} from "java.util.List"

export class $ScreenEvent$Init extends $ScreenEvent {
public "getListenersList"(): $List<($GuiEventListener)>
public "addListener"(arg0: $GuiEventListener$$Type): void
public "removeListener"(arg0: $GuiEventListener$$Type): void
get "listenersList"(): $List<($GuiEventListener)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvent$Init$$Type = ($ScreenEvent$Init);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenEvent$Init$$Original = $ScreenEvent$Init;}
declare module "net.neoforged.neoforge.client.event.ScreenEvent$MouseButtonPressed$Post" {
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ScreenEvent$MouseButtonPressed} from "net.neoforged.neoforge.client.event.ScreenEvent$MouseButtonPressed"
import {$ScreenEvent$MouseButtonPressed$Post$Result, $ScreenEvent$MouseButtonPressed$Post$Result$$Type} from "net.neoforged.neoforge.client.event.ScreenEvent$MouseButtonPressed$Post$Result"

export class $ScreenEvent$MouseButtonPressed$Post extends $ScreenEvent$MouseButtonPressed {
constructor(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer, arg4: boolean)

public "getMouseX"(): double
public "getMouseY"(): double
public "setResult"(arg0: $ScreenEvent$MouseButtonPressed$Post$Result$$Type): void
public "getResult"(): $ScreenEvent$MouseButtonPressed$Post$Result
public "wasClickHandled"(): boolean
public "getClickResult"(): boolean
get "mouseX"(): double
get "mouseY"(): double
set "result"(value: $ScreenEvent$MouseButtonPressed$Post$Result$$Type)
get "result"(): $ScreenEvent$MouseButtonPressed$Post$Result
get "clickResult"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvent$MouseButtonPressed$Post$$Type = ($ScreenEvent$MouseButtonPressed$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenEvent$MouseButtonPressed$Post$$Original = $ScreenEvent$MouseButtonPressed$Post;}
declare module "net.neoforged.neoforge.client.extensions.IBlockEntityRendererExtension" {
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$AABB} from "net.minecraft.world.phys.AABB"

export interface $IBlockEntityRendererExtension$$Interface<T extends $BlockEntity> {
}

export class $IBlockEntityRendererExtension<T extends $BlockEntity> implements $IBlockEntityRendererExtension$$Interface {
 "getRenderBoundingBox"(arg0: T): $AABB
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockEntityRendererExtension$$Type<T> = ($IBlockEntityRendererExtension<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IBlockEntityRendererExtension$$Original<T> = $IBlockEntityRendererExtension<(T)>;}
declare module "net.neoforged.neoforge.client.event.InputEvent$InteractionKeyMappingTriggered" {
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$InputEvent} from "net.neoforged.neoforge.client.event.InputEvent"
import {$KeyMapping, $KeyMapping$$Type} from "net.minecraft.client.KeyMapping"

export class $InputEvent$InteractionKeyMappingTriggered extends $InputEvent implements $ICancellableEvent$$Interface {
constructor(arg0: integer, arg1: $KeyMapping$$Type, arg2: $InteractionHand$$Type)

public "getHand"(): $InteractionHand
public "setSwingHand"(arg0: boolean): void
public "isPickBlock"(): boolean
public "shouldSwingHand"(): boolean
public "getKeyMapping"(): $KeyMapping
public "isUseItem"(): boolean
public "isAttack"(): boolean
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "hand"(): $InteractionHand
set "swingHand"(value: boolean)
get "pickBlock"(): boolean
get "keyMapping"(): $KeyMapping
get "useItem"(): boolean
get "attack"(): boolean
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputEvent$InteractionKeyMappingTriggered$$Type = ($InputEvent$InteractionKeyMappingTriggered);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InputEvent$InteractionKeyMappingTriggered$$Original = $InputEvent$InteractionKeyMappingTriggered;}
declare module "net.neoforged.neoforge.client.RenderTypeGroup" {
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$Record} from "java.lang.Record"

export class $RenderTypeGroup extends $Record {
static "EMPTY": $RenderTypeGroup

constructor(block: $RenderType$$Type, entity: $RenderType$$Type, entityFabulous: $RenderType$$Type)
constructor(arg0: $RenderType$$Type, arg1: $RenderType$$Type)

public "entityFabulous"(): $RenderType
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public "block"(): $RenderType
public "entity"(): $RenderType
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderTypeGroup$$Type = ({"entity"?: $RenderType$$Type, "block"?: $RenderType$$Type, "entityFabulous"?: $RenderType$$Type}) | ([entity?: $RenderType$$Type, block?: $RenderType$$Type, entityFabulous?: $RenderType$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderTypeGroup$$Original = $RenderTypeGroup;}
declare module "net.neoforged.neoforge.client.event.EntityRenderersEvent$RegisterRenderers" {
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockEntityRendererProvider$$Type} from "net.minecraft.client.renderer.blockentity.BlockEntityRendererProvider"
import {$EntityRendererProvider$$Type} from "net.minecraft.client.renderer.entity.EntityRendererProvider"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$EntityRenderersEvent} from "net.neoforged.neoforge.client.event.EntityRenderersEvent"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $EntityRenderersEvent$RegisterRenderers extends $EntityRenderersEvent {
constructor()

public "registerBlockEntityRenderer"<T extends $BlockEntity>(arg0: $BlockEntityType$$Type<(T)>, arg1: $BlockEntityRendererProvider$$Type<(T)>): void
public "registerEntityRenderer"<T extends $Entity>(arg0: $EntityType$$Type<(T)>, arg1: $EntityRendererProvider$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRenderersEvent$RegisterRenderers$$Type = ($EntityRenderersEvent$RegisterRenderers);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityRenderersEvent$RegisterRenderers$$Original = $EntityRenderersEvent$RegisterRenderers;}
declare module "net.neoforged.neoforge.client.event.RenderItemInFrameEvent" {
import {$ItemFrameRenderer, $ItemFrameRenderer$$Type} from "net.minecraft.client.renderer.entity.ItemFrameRenderer"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Event} from "net.neoforged.bus.api.Event"
import {$ItemFrame, $ItemFrame$$Type} from "net.minecraft.world.entity.decoration.ItemFrame"

export class $RenderItemInFrameEvent extends $Event implements $ICancellableEvent$$Interface {
constructor(arg0: $ItemFrame$$Type, arg1: $ItemFrameRenderer$$Type<(never)>, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type, arg4: integer)

public "getPackedLight"(): integer
public "getMultiBufferSource"(): $MultiBufferSource
public "getItemStack"(): $ItemStack
public "getRenderer"(): $ItemFrameRenderer<(never)>
public "getPoseStack"(): $PoseStack
public "getItemFrameEntity"(): $ItemFrame
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "packedLight"(): integer
get "multiBufferSource"(): $MultiBufferSource
get "itemStack"(): $ItemStack
get "renderer"(): $ItemFrameRenderer<(never)>
get "poseStack"(): $PoseStack
get "itemFrameEntity"(): $ItemFrame
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderItemInFrameEvent$$Type = ($RenderItemInFrameEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderItemInFrameEvent$$Original = $RenderItemInFrameEvent;}
declare module "net.neoforged.neoforge.client.model.geometry.IUnbakedGeometry" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Material, $Material$$Type} from "net.minecraft.client.resources.model.Material"
import {$ItemOverrides, $ItemOverrides$$Type} from "net.minecraft.client.renderer.block.model.ItemOverrides"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$IGeometryBakingContext, $IGeometryBakingContext$$Type} from "net.neoforged.neoforge.client.model.geometry.IGeometryBakingContext"
import {$Set} from "java.util.Set"
import {$ModelState, $ModelState$$Type} from "net.minecraft.client.resources.model.ModelState"
import {$ModelBaker, $ModelBaker$$Type} from "net.minecraft.client.resources.model.ModelBaker"
import {$UnbakedModel$$Type} from "net.minecraft.client.resources.model.UnbakedModel"

export interface $IUnbakedGeometry$$Interface<T extends $IUnbakedGeometry<(object)>> {

(arg0: $IGeometryBakingContext, arg1: $ModelBaker, arg2: $Function<($Material), ($TextureAtlasSprite$$Type)>, arg3: $ModelState, arg4: $ItemOverrides): $BakedModel$$Type
get "configurableComponentNames"(): $Set<(StringJS)>
}

export class $IUnbakedGeometry<T extends $IUnbakedGeometry<(object)>> implements $IUnbakedGeometry$$Interface {
 "bake"(arg0: $IGeometryBakingContext$$Type, arg1: $ModelBaker$$Type, arg2: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>, arg3: $ModelState$$Type, arg4: $ItemOverrides$$Type): $BakedModel
 "resolveParents"(arg0: $Function$$Type<($ResourceLocation), ($UnbakedModel$$Type)>, arg1: $IGeometryBakingContext$$Type): void
 "getConfigurableComponentNames"(): $Set<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUnbakedGeometry$$Type<T> = ((arg0: $IGeometryBakingContext, arg1: $ModelBaker, arg2: $Function<($Material), ($TextureAtlasSprite)>, arg3: $ModelState, arg4: $ItemOverrides) => $BakedModel$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IUnbakedGeometry$$Original<T> = $IUnbakedGeometry<(T)>;}
declare module "net.neoforged.neoforge.client.event.EntityRenderersEvent$AddLayers" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$EntityRenderer, $EntityRenderer$$Type} from "net.minecraft.client.renderer.entity.EntityRenderer"
import {$Map$$Type} from "java.util.Map"
import {$PlayerSkin$Model, $PlayerSkin$Model$$Type} from "net.minecraft.client.resources.PlayerSkin$Model"
import {$Set} from "java.util.Set"
import {$EntityRendererProvider$Context, $EntityRendererProvider$Context$$Type} from "net.minecraft.client.renderer.entity.EntityRendererProvider$Context"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$EntityRenderersEvent} from "net.neoforged.neoforge.client.event.EntityRenderersEvent"
import {$EntityModelSet} from "net.minecraft.client.model.geom.EntityModelSet"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $EntityRenderersEvent$AddLayers extends $EntityRenderersEvent {
constructor(arg0: $Map$$Type<($EntityType$$Type<(never)>), ($EntityRenderer$$Type<(never)>)>, arg1: $Map$$Type<($PlayerSkin$Model$$Type), ($EntityRenderer$$Type<($Player$$Type)>)>, arg2: $EntityRendererProvider$Context$$Type)

public "getContext"(): $EntityRendererProvider$Context
public "getEntityTypes"(): $Set<($EntityType<(never)>)>
public "getSkins"(): $Set<($PlayerSkin$Model)>
public "getRenderer"<T extends $Entity, R extends $EntityRenderer<(object)>>(arg0: $EntityType$$Type<(T)>): R
public "getSkin"<R extends $EntityRenderer<(object)>>(arg0: $PlayerSkin$Model$$Type): R
public "getEntityModels"(): $EntityModelSet
get "context"(): $EntityRendererProvider$Context
get "entityTypes"(): $Set<($EntityType<(never)>)>
get "skins"(): $Set<($PlayerSkin$Model)>
get "entityModels"(): $EntityModelSet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRenderersEvent$AddLayers$$Type = ($EntityRenderersEvent$AddLayers);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityRenderersEvent$AddLayers$$Original = $EntityRenderersEvent$AddLayers;}
declare module "net.neoforged.neoforge.client.event.ScreenEvent$Init$Pre" {
import {$GuiEventListener$$Type} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$ScreenEvent$Init} from "net.neoforged.neoforge.client.event.ScreenEvent$Init"
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$List$$Type} from "java.util.List"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $ScreenEvent$Init$Pre extends $ScreenEvent$Init implements $ICancellableEvent$$Interface {
constructor(arg0: $Screen$$Type, arg1: $List$$Type<($GuiEventListener$$Type)>, arg2: $Consumer$$Type<($GuiEventListener)>, arg3: $Consumer$$Type<($GuiEventListener)>)

public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvent$Init$Pre$$Type = ($ScreenEvent$Init$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenEvent$Init$Pre$$Original = $ScreenEvent$Init$Pre;}
declare module "net.neoforged.neoforge.client.event.MovementInputUpdateEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Input, $Input$$Type} from "net.minecraft.client.player.Input"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $MovementInputUpdateEvent extends $PlayerEvent {
constructor(arg0: $Player$$Type, arg1: $Input$$Type)

public "getInput"(): $Input
public "getEntity"(): $Entity
get "input"(): $Input
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MovementInputUpdateEvent$$Type = ($MovementInputUpdateEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MovementInputUpdateEvent$$Original = $MovementInputUpdateEvent;}
declare module "net.neoforged.neoforge.client.textures.SpriteContentsConstructor" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$NativeImage, $NativeImage$$Type} from "com.mojang.blaze3d.platform.NativeImage"
import {$SpriteContents, $SpriteContents$$Type} from "net.minecraft.client.renderer.texture.SpriteContents"
import {$ResourceMetadata, $ResourceMetadata$$Type} from "net.minecraft.server.packs.resources.ResourceMetadata"
import {$FrameSize, $FrameSize$$Type} from "net.minecraft.client.resources.metadata.animation.FrameSize"

export interface $SpriteContentsConstructor$$Interface {

(arg0: $ResourceLocation, arg1: $FrameSize, arg2: $NativeImage, arg3: $ResourceMetadata): $SpriteContents$$Type
}

export class $SpriteContentsConstructor implements $SpriteContentsConstructor$$Interface {
 "create"(arg0: $ResourceLocation$$Type, arg1: $FrameSize$$Type, arg2: $NativeImage$$Type, arg3: $ResourceMetadata$$Type): $SpriteContents
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsConstructor$$Type = ((arg0: $ResourceLocation, arg1: $FrameSize, arg2: $NativeImage, arg3: $ResourceMetadata) => $SpriteContents$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteContentsConstructor$$Original = $SpriteContentsConstructor;}
declare module "net.neoforged.neoforge.client.event.RegisterDimensionTransitionScreenEvent" {
import {$Map$$Type} from "java.util.Map"
import {$Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$Event} from "net.neoforged.bus.api.Event"
import {$DimensionTransitionScreenManager$ReceivingLevelScreenFactory$$Type} from "net.neoforged.neoforge.client.DimensionTransitionScreenManager$ReceivingLevelScreenFactory"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"

export class $RegisterDimensionTransitionScreenEvent extends $Event implements $IModBusEvent$$Interface {
constructor(arg0: $Map$$Type<($Pair$$Type<($ResourceKey$$Type<($Level$$Type)>), ($ResourceKey$$Type<($Level$$Type)>)>), ($DimensionTransitionScreenManager$ReceivingLevelScreenFactory$$Type)>, arg1: $Map$$Type<($ResourceKey$$Type<($Level$$Type)>), ($DimensionTransitionScreenManager$ReceivingLevelScreenFactory$$Type)>, arg2: $Map$$Type<($ResourceKey$$Type<($Level$$Type)>), ($DimensionTransitionScreenManager$ReceivingLevelScreenFactory$$Type)>)

public "registerIncomingEffect"(arg0: $ResourceKey$$Type<($Level)>, arg1: $DimensionTransitionScreenManager$ReceivingLevelScreenFactory$$Type): boolean
public "registerOutgoingEffect"(arg0: $ResourceKey$$Type<($Level)>, arg1: $DimensionTransitionScreenManager$ReceivingLevelScreenFactory$$Type): boolean
public "registerConditionalEffect"(arg0: $ResourceKey$$Type<($Level)>, arg1: $ResourceKey$$Type<($Level)>, arg2: $DimensionTransitionScreenManager$ReceivingLevelScreenFactory$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterDimensionTransitionScreenEvent$$Type = ($RegisterDimensionTransitionScreenEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterDimensionTransitionScreenEvent$$Original = $RegisterDimensionTransitionScreenEvent;}
declare module "net.neoforged.neoforge.client.extensions.IMinecraftExtension" {
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$Locale} from "java.util.Locale"

export interface $IMinecraftExtension$$Interface {
get "locale"(): $Locale
}

export class $IMinecraftExtension implements $IMinecraftExtension$$Interface {
 "getLocale"(): $Locale
 "popGuiLayer"(): void
 "pushGuiLayer"(arg0: $Screen$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMinecraftExtension$$Type = ($IMinecraftExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMinecraftExtension$$Original = $IMinecraftExtension;}
declare module "net.neoforged.neoforge.client.event.InputEvent$MouseScrollingEvent" {
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$InputEvent} from "net.neoforged.neoforge.client.event.InputEvent"

export class $InputEvent$MouseScrollingEvent extends $InputEvent implements $ICancellableEvent$$Interface {
constructor(arg0: double, arg1: double, arg2: boolean, arg3: boolean, arg4: boolean, arg5: double, arg6: double)

public "getMouseX"(): double
public "getMouseY"(): double
public "isMiddleDown"(): boolean
public "isRightDown"(): boolean
public "isLeftDown"(): boolean
public "getScrollDeltaY"(): double
public "getScrollDeltaX"(): double
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "mouseX"(): double
get "mouseY"(): double
get "middleDown"(): boolean
get "rightDown"(): boolean
get "leftDown"(): boolean
get "scrollDeltaY"(): double
get "scrollDeltaX"(): double
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputEvent$MouseScrollingEvent$$Type = ($InputEvent$MouseScrollingEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InputEvent$MouseScrollingEvent$$Original = $InputEvent$MouseScrollingEvent;}
declare module "net.neoforged.neoforge.client.event.ScreenEvent$BackgroundRendered" {
import {$ScreenEvent} from "net.neoforged.neoforge.client.event.ScreenEvent"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

/**
 * 
 * @deprecated
 */
export class $ScreenEvent$BackgroundRendered extends $ScreenEvent {
constructor(arg0: $Screen$$Type, arg1: $GuiGraphics$$Type)

public "getGuiGraphics"(): $GuiGraphics
get "guiGraphics"(): $GuiGraphics
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvent$BackgroundRendered$$Type = ($ScreenEvent$BackgroundRendered);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenEvent$BackgroundRendered$$Original = $ScreenEvent$BackgroundRendered;}
declare module "net.neoforged.neoforge.client.event.RenderTooltipEvent$Color" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$List$$Type} from "java.util.List"
import {$RenderTooltipEvent} from "net.neoforged.neoforge.client.event.RenderTooltipEvent"
import {$Font$$Type} from "net.minecraft.client.gui.Font"
import {$ClientTooltipComponent$$Type} from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent"

export class $RenderTooltipEvent$Color extends $RenderTooltipEvent {
constructor(arg0: $ItemStack$$Type, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer, arg4: $Font$$Type, arg5: integer, arg6: integer, arg7: integer, arg8: $List$$Type<($ClientTooltipComponent$$Type)>)

public "setBorderStart"(arg0: integer): void
public "setBorderEnd"(arg0: integer): void
public "getBackgroundStart"(): integer
public "getBackgroundEnd"(): integer
public "getBorderEnd"(): integer
public "getBorderStart"(): integer
public "setBackgroundEnd"(arg0: integer): void
public "setBackgroundStart"(arg0: integer): void
public "getOriginalBackgroundStart"(): integer
public "getOriginalBorderEnd"(): integer
public "getOriginalBackgroundEnd"(): integer
public "getOriginalBorderStart"(): integer
public "setBackground"(arg0: integer): void
set "borderStart"(value: integer)
set "borderEnd"(value: integer)
get "backgroundStart"(): integer
get "backgroundEnd"(): integer
get "borderEnd"(): integer
get "borderStart"(): integer
set "backgroundEnd"(value: integer)
set "backgroundStart"(value: integer)
get "originalBackgroundStart"(): integer
get "originalBorderEnd"(): integer
get "originalBackgroundEnd"(): integer
get "originalBorderStart"(): integer
set "background"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderTooltipEvent$Color$$Type = ($RenderTooltipEvent$Color);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderTooltipEvent$Color$$Original = $RenderTooltipEvent$Color;}
declare module "net.neoforged.neoforge.client.entity.animation.AnimationTarget" {
import {$AnimationKeyframeTarget, $AnimationKeyframeTarget$$Type} from "net.neoforged.neoforge.client.entity.animation.AnimationKeyframeTarget"
import {$AnimationChannel$Target, $AnimationChannel$Target$$Type} from "net.minecraft.client.animation.AnimationChannel$Target"
import {$Record} from "java.lang.Record"

export class $AnimationTarget extends $Record {
static readonly "ROTATION": $AnimationTarget
static readonly "POSITION": $AnimationTarget
static readonly "SCALE": $AnimationTarget

constructor(channelTarget: $AnimationChannel$Target$$Type, keyframeTarget: $AnimationKeyframeTarget$$Type, inverseKeyframeTarget: $AnimationKeyframeTarget$$Type)

public "channelTarget"(): $AnimationChannel$Target
public "keyframeTarget"(): $AnimationKeyframeTarget
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "inverseKeyframeTarget"(): $AnimationKeyframeTarget
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationTarget$$Type = ({"inverseKeyframeTarget"?: $AnimationKeyframeTarget$$Type, "channelTarget"?: $AnimationChannel$Target$$Type, "keyframeTarget"?: $AnimationKeyframeTarget$$Type}) | ([inverseKeyframeTarget?: $AnimationKeyframeTarget$$Type, channelTarget?: $AnimationChannel$Target$$Type, keyframeTarget?: $AnimationKeyframeTarget$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnimationTarget$$Original = $AnimationTarget;}
declare module "net.neoforged.neoforge.client.event.RenderFrameEvent$Pre" {
import {$RenderFrameEvent} from "net.neoforged.neoforge.client.event.RenderFrameEvent"
import {$DeltaTracker$$Type} from "net.minecraft.client.DeltaTracker"

export class $RenderFrameEvent$Pre extends $RenderFrameEvent {
constructor(arg0: $DeltaTracker$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderFrameEvent$Pre$$Type = ($RenderFrameEvent$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderFrameEvent$Pre$$Original = $RenderFrameEvent$Pre;}
declare module "net.neoforged.neoforge.client.event.ScreenEvent$KeyPressed$Pre" {
import {$ScreenEvent$KeyPressed} from "net.neoforged.neoforge.client.event.ScreenEvent$KeyPressed"
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"

export class $ScreenEvent$KeyPressed$Pre extends $ScreenEvent$KeyPressed implements $ICancellableEvent$$Interface {
constructor(arg0: $Screen$$Type, arg1: integer, arg2: integer, arg3: integer)

public "getKeyCode"(): integer
public "getModifiers"(): integer
public "getScanCode"(): integer
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "keyCode"(): integer
get "modifiers"(): integer
get "scanCode"(): integer
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvent$KeyPressed$Pre$$Type = ($ScreenEvent$KeyPressed$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenEvent$KeyPressed$Pre$$Original = $ScreenEvent$KeyPressed$Pre;}
declare module "net.neoforged.neoforge.client.event.sound.SoundEngineLoadEvent" {
import {$SoundEvent} from "net.neoforged.neoforge.client.event.sound.SoundEvent"
import {$SoundEngine$$Type} from "net.minecraft.client.sounds.SoundEngine"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"

export class $SoundEngineLoadEvent extends $SoundEvent implements $IModBusEvent$$Interface {
constructor(arg0: $SoundEngine$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundEngineLoadEvent$$Type = ($SoundEngineLoadEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoundEngineLoadEvent$$Original = $SoundEngineLoadEvent;}
declare module "net.neoforged.neoforge.client.event.ClientTickEvent" {
import {$Event} from "net.neoforged.bus.api.Event"

export class $ClientTickEvent extends $Event {
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientTickEvent$$Type = ($ClientTickEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientTickEvent$$Original = $ClientTickEvent;}
declare module "net.neoforged.neoforge.client.event.ScreenEvent$Render$Post" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ScreenEvent$Render} from "net.neoforged.neoforge.client.event.ScreenEvent$Render"

export class $ScreenEvent$Render$Post extends $ScreenEvent$Render {
constructor(arg0: $Screen$$Type, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer, arg4: float)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvent$Render$Post$$Type = ($ScreenEvent$Render$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenEvent$Render$Post$$Original = $ScreenEvent$Render$Post;}
declare module "net.neoforged.neoforge.client.model.data.ModelData$Builder" {
import {$ModelProperty$$Type} from "net.neoforged.neoforge.client.model.data.ModelProperty"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"

export class $ModelData$Builder {
public "with"<T>(arg0: $ModelProperty$$Type<(T)>, arg1: T): $ModelData$Builder
public "build"(): $ModelData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelData$Builder$$Type = ($ModelData$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelData$Builder$$Original = $ModelData$Builder;}
declare module "net.neoforged.neoforge.client.event.ScreenEvent$MouseDragged$Pre" {
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ScreenEvent$MouseDragged} from "net.neoforged.neoforge.client.event.ScreenEvent$MouseDragged"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"

export class $ScreenEvent$MouseDragged$Pre extends $ScreenEvent$MouseDragged implements $ICancellableEvent$$Interface {
constructor(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer, arg4: double, arg5: double)

public "getMouseX"(): double
public "getMouseY"(): double
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "mouseX"(): double
get "mouseY"(): double
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvent$MouseDragged$Pre$$Type = ($ScreenEvent$MouseDragged$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenEvent$MouseDragged$Pre$$Original = $ScreenEvent$MouseDragged$Pre;}
declare module "net.neoforged.neoforge.client.event.sound.PlayStreamingSourceEvent" {
import {$SoundEngine$$Type} from "net.minecraft.client.sounds.SoundEngine"
import {$SoundInstance$$Type} from "net.minecraft.client.resources.sounds.SoundInstance"
import {$Channel$$Type} from "com.mojang.blaze3d.audio.Channel"
import {$SoundEvent$SoundSourceEvent} from "net.neoforged.neoforge.client.event.sound.SoundEvent$SoundSourceEvent"

export class $PlayStreamingSourceEvent extends $SoundEvent$SoundSourceEvent {
constructor(arg0: $SoundEngine$$Type, arg1: $SoundInstance$$Type, arg2: $Channel$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayStreamingSourceEvent$$Type = ($PlayStreamingSourceEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayStreamingSourceEvent$$Original = $PlayStreamingSourceEvent;}
declare module "net.neoforged.neoforge.client.event.RenderTooltipEvent$Pre" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$List$$Type} from "java.util.List"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$ClientTooltipPositioner, $ClientTooltipPositioner$$Type} from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipPositioner"
import {$RenderTooltipEvent} from "net.neoforged.neoforge.client.event.RenderTooltipEvent"
import {$Font$$Type} from "net.minecraft.client.gui.Font"
import {$ClientTooltipComponent$$Type} from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent"

export class $RenderTooltipEvent$Pre extends $RenderTooltipEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $ItemStack$$Type, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: $Font$$Type, arg7: $List$$Type<($ClientTooltipComponent$$Type)>, arg8: $ClientTooltipPositioner$$Type)

public "setFont"(arg0: $Font$$Type): void
public "setY"(arg0: integer): void
public "setX"(arg0: integer): void
public "getTooltipPositioner"(): $ClientTooltipPositioner
public "getScreenWidth"(): integer
public "getScreenHeight"(): integer
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
set "font"(value: $Font$$Type)
set "y"(value: integer)
set "x"(value: integer)
get "tooltipPositioner"(): $ClientTooltipPositioner
get "screenWidth"(): integer
get "screenHeight"(): integer
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderTooltipEvent$Pre$$Type = ($RenderTooltipEvent$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderTooltipEvent$Pre$$Original = $RenderTooltipEvent$Pre;}
declare module "net.neoforged.neoforge.client.event.RegisterMenuScreensEvent" {
import {$Map$$Type} from "java.util.Map"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$Screen} from "net.minecraft.client.gui.screens.Screen"
import {$MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$Event} from "net.neoforged.bus.api.Event"
import {$MenuScreens$ScreenConstructor$$Type} from "net.minecraft.client.gui.screens.MenuScreens$ScreenConstructor"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"

export class $RegisterMenuScreensEvent extends $Event implements $IModBusEvent$$Interface {
constructor(arg0: $Map$$Type<($MenuType$$Type<(never)>), ($MenuScreens$ScreenConstructor$$Type<(never), (never)>)>)

public "register"<M extends $AbstractContainerMenu, U extends $Screen>(arg0: $MenuType$$Type<(M)>, arg1: $MenuScreens$ScreenConstructor$$Type<(M), (U)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterMenuScreensEvent$$Type = ($RegisterMenuScreensEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterMenuScreensEvent$$Original = $RegisterMenuScreensEvent;}
declare module "net.neoforged.neoforge.client.event.InputEvent$MouseButton$Post" {
import {$InputEvent$MouseButton} from "net.neoforged.neoforge.client.event.InputEvent$MouseButton"

export class $InputEvent$MouseButton$Post extends $InputEvent$MouseButton {
constructor(arg0: integer, arg1: integer, arg2: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputEvent$MouseButton$Post$$Type = ($InputEvent$MouseButton$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InputEvent$MouseButton$Post$$Original = $InputEvent$MouseButton$Post;}
declare module "net.neoforged.neoforge.client.event.RegisterRecipeBookCategoriesEvent" {
import {$Map$$Type} from "java.util.Map"
import {$RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$Function$$Type} from "java.util.function.Function"
import {$RecipeBookType$$Type} from "net.minecraft.world.inventory.RecipeBookType"
import {$List$$Type} from "java.util.List"
import {$RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Event} from "net.neoforged.bus.api.Event"
import {$ImmutableList$$Type} from "com.google.common.collect.ImmutableList"
import {$RecipeBookCategories$$Type} from "net.minecraft.client.RecipeBookCategories"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"

export class $RegisterRecipeBookCategoriesEvent extends $Event implements $IModBusEvent$$Interface {
constructor(arg0: $Map$$Type<($RecipeBookCategories$$Type), ($ImmutableList$$Type<($RecipeBookCategories$$Type)>)>, arg1: $Map$$Type<($RecipeBookType$$Type), ($ImmutableList$$Type<($RecipeBookCategories$$Type)>)>, arg2: $Map$$Type<($RecipeType$$Type<(never)>), ($Function$$Type<($RecipeHolder$$Type<(never)>), ($RecipeBookCategories$$Type)>)>)

public "registerRecipeCategoryFinder"(arg0: $RecipeType$$Type<(never)>, arg1: $Function$$Type<($RecipeHolder<(never)>), ($RecipeBookCategories$$Type)>): void
public "registerAggregateCategory"(arg0: $RecipeBookCategories$$Type, arg1: $List$$Type<($RecipeBookCategories$$Type)>): void
public "registerBookCategories"(arg0: $RecipeBookType$$Type, arg1: $List$$Type<($RecipeBookCategories$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterRecipeBookCategoriesEvent$$Type = ($RegisterRecipeBookCategoriesEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterRecipeBookCategoriesEvent$$Original = $RegisterRecipeBookCategoriesEvent;}
declare module "net.neoforged.neoforge.client.event.InputEvent$MouseButton" {
import {$InputEvent} from "net.neoforged.neoforge.client.event.InputEvent"

export class $InputEvent$MouseButton extends $InputEvent {
public "getButton"(): integer
public "getModifiers"(): integer
public "getAction"(): integer
get "button"(): integer
get "modifiers"(): integer
get "action"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputEvent$MouseButton$$Type = ($InputEvent$MouseButton);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InputEvent$MouseButton$$Original = $InputEvent$MouseButton;}
declare module "net.neoforged.neoforge.client.event.RegisterPresetEditorsEvent" {
import {$Map$$Type} from "java.util.Map"
import {$Event} from "net.neoforged.bus.api.Event"
import {$PresetEditor$$Type} from "net.minecraft.client.gui.screens.worldselection.PresetEditor"
import {$WorldPreset$$Type} from "net.minecraft.world.level.levelgen.presets.WorldPreset"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"

export class $RegisterPresetEditorsEvent extends $Event implements $IModBusEvent$$Interface {
constructor(arg0: $Map$$Type<($ResourceKey$$Type<($WorldPreset$$Type)>), ($PresetEditor$$Type)>)

public "register"(arg0: $ResourceKey$$Type<($WorldPreset)>, arg1: $PresetEditor$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterPresetEditorsEvent$$Type = ($RegisterPresetEditorsEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterPresetEditorsEvent$$Original = $RegisterPresetEditorsEvent;}
declare module "net.neoforged.neoforge.client.extensions.IAbstractWidgetExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IAbstractWidgetExtension$$Interface {
}

export class $IAbstractWidgetExtension implements $IAbstractWidgetExtension$$Interface {
 "onClick"(arg0: double, arg1: double, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAbstractWidgetExtension$$Type = ($IAbstractWidgetExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IAbstractWidgetExtension$$Original = $IAbstractWidgetExtension;}
declare module "net.neoforged.neoforge.client.event.RenderNameTagEvent" {
import {$EntityEvent} from "net.neoforged.neoforge.event.entity.EntityEvent"
import {$EntityRenderer, $EntityRenderer$$Type} from "net.minecraft.client.renderer.entity.EntityRenderer"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$TriState, $TriState$$Type} from "net.neoforged.neoforge.common.util.TriState"

export class $RenderNameTagEvent extends $EntityEvent {
constructor(arg0: $Entity$$Type, arg1: $Component$$Type, arg2: $EntityRenderer$$Type<(never)>, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer, arg6: float)

public "getPackedLight"(): integer
public "getContent"(): $Component
public "canRender"(): $TriState
public "setContent"(arg0: $Component$$Type): void
public "getPartialTick"(): float
public "getMultiBufferSource"(): $MultiBufferSource
public "getOriginalContent"(): $Component
public "setCanRender"(arg0: $TriState$$Type): void
public "getEntityRenderer"(): $EntityRenderer<(never)>
public "getPoseStack"(): $PoseStack
get "packedLight"(): integer
get "content"(): $Component
set "content"(value: $Component$$Type)
get "partialTick"(): float
get "multiBufferSource"(): $MultiBufferSource
get "originalContent"(): $Component
get "entityRenderer"(): $EntityRenderer<(never)>
get "poseStack"(): $PoseStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderNameTagEvent$$Type = ($RenderNameTagEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderNameTagEvent$$Original = $RenderNameTagEvent;}
declare module "net.neoforged.neoforge.client.extensions.IMenuProviderExtension" {
import {$AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"

export interface $IMenuProviderExtension$$Interface {
}

export class $IMenuProviderExtension implements $IMenuProviderExtension$$Interface {
 "writeClientSideData"(arg0: $AbstractContainerMenu$$Type, arg1: $RegistryFriendlyByteBuf$$Type): void
 "shouldTriggerClientSideContainerClosingOnOpen"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMenuProviderExtension$$Type = ($IMenuProviderExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMenuProviderExtension$$Original = $IMenuProviderExtension;}
declare module "net.neoforged.neoforge.client.event.CustomizeGuiOverlayEvent$Chat" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Window$$Type} from "com.mojang.blaze3d.platform.Window"
import {$DeltaTracker$$Type} from "net.minecraft.client.DeltaTracker"
import {$CustomizeGuiOverlayEvent} from "net.neoforged.neoforge.client.event.CustomizeGuiOverlayEvent"

export class $CustomizeGuiOverlayEvent$Chat extends $CustomizeGuiOverlayEvent {
constructor(arg0: $Window$$Type, arg1: $GuiGraphics$$Type, arg2: $DeltaTracker$$Type, arg3: integer, arg4: integer)

public "getPosX"(): integer
public "getPosY"(): integer
public "setPosX"(arg0: integer): void
public "setPosY"(arg0: integer): void
get "posX"(): integer
get "posY"(): integer
set "posX"(value: integer)
set "posY"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomizeGuiOverlayEvent$Chat$$Type = ($CustomizeGuiOverlayEvent$Chat);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomizeGuiOverlayEvent$Chat$$Original = $CustomizeGuiOverlayEvent$Chat;}
declare module "net.neoforged.neoforge.client.event.AddAttributeTooltipsEvent" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$AttributeTooltipContext, $AttributeTooltipContext$$Type} from "net.neoforged.neoforge.common.util.AttributeTooltipContext"

export class $AddAttributeTooltipsEvent extends $Event {
constructor(arg0: $ItemStack$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $AttributeTooltipContext$$Type)

public "getContext"(): $AttributeTooltipContext
public "getStack"(): $ItemStack
public "addTooltipLines"(...arg0: ($Component$$Type)[]): void
public "shouldShow"(): boolean
get "context"(): $AttributeTooltipContext
get "stack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddAttributeTooltipsEvent$$Type = ($AddAttributeTooltipsEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AddAttributeTooltipsEvent$$Original = $AddAttributeTooltipsEvent;}
declare module "net.neoforged.neoforge.client.event.RenderArmEvent" {
import {$HumanoidArm, $HumanoidArm$$Type} from "net.minecraft.world.entity.HumanoidArm"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Event} from "net.neoforged.bus.api.Event"
import {$AbstractClientPlayer, $AbstractClientPlayer$$Type} from "net.minecraft.client.player.AbstractClientPlayer"

export class $RenderArmEvent extends $Event implements $ICancellableEvent$$Interface {
constructor(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: integer, arg3: $AbstractClientPlayer$$Type, arg4: $HumanoidArm$$Type)

public "getPackedLight"(): integer
public "getArm"(): $HumanoidArm
public "getMultiBufferSource"(): $MultiBufferSource
public "getPlayer"(): $AbstractClientPlayer
public "getPoseStack"(): $PoseStack
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "packedLight"(): integer
get "arm"(): $HumanoidArm
get "multiBufferSource"(): $MultiBufferSource
get "player"(): $AbstractClientPlayer
get "poseStack"(): $PoseStack
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderArmEvent$$Type = ($RenderArmEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderArmEvent$$Original = $RenderArmEvent;}
declare module "net.neoforged.neoforge.client.event.ScreenEvent$MouseButtonReleased$Pre" {
import {$ScreenEvent$MouseButtonReleased} from "net.neoforged.neoforge.client.event.ScreenEvent$MouseButtonReleased"
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"

export class $ScreenEvent$MouseButtonReleased$Pre extends $ScreenEvent$MouseButtonReleased implements $ICancellableEvent$$Interface {
constructor(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer)

public "getMouseX"(): double
public "getMouseY"(): double
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "mouseX"(): double
get "mouseY"(): double
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvent$MouseButtonReleased$Pre$$Type = ($ScreenEvent$MouseButtonReleased$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenEvent$MouseButtonReleased$Pre$$Original = $ScreenEvent$MouseButtonReleased$Pre;}
declare module "net.neoforged.neoforge.client.extensions.IModelBakerExtension" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Material, $Material$$Type} from "net.minecraft.client.resources.model.Material"
import {$ModelResourceLocation$$Type} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$BakedModel} from "net.minecraft.client.resources.model.BakedModel"
import {$ModelState$$Type} from "net.minecraft.client.resources.model.ModelState"
import {$UnbakedModel, $UnbakedModel$$Type} from "net.minecraft.client.resources.model.UnbakedModel"

export interface $IModelBakerExtension$$Interface {
get "modelTextureGetter"(): $Function<($Material), ($TextureAtlasSprite)>
}

export class $IModelBakerExtension implements $IModelBakerExtension$$Interface {
 "bake"(arg0: $ResourceLocation$$Type, arg1: $ModelState$$Type, arg2: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>): $BakedModel
 "getModelTextureGetter"(): $Function<($Material), ($TextureAtlasSprite)>
 "getTopLevelModel"(arg0: $ModelResourceLocation$$Type): $UnbakedModel
 "bakeUncached"(arg0: $UnbakedModel$$Type, arg1: $ModelState$$Type, arg2: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>): $BakedModel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModelBakerExtension$$Type = ($IModelBakerExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IModelBakerExtension$$Original = $IModelBakerExtension;}
declare module "net.neoforged.neoforge.client.event.RenderTooltipEvent$GatherComponents" {
import {$TooltipComponent, $TooltipComponent$$Type} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FormattedText, $FormattedText$$Type} from "net.minecraft.network.chat.FormattedText"
import {$List, $List$$Type} from "java.util.List"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$Event} from "net.neoforged.bus.api.Event"

export class $RenderTooltipEvent$GatherComponents extends $Event implements $ICancellableEvent$$Interface {
constructor(arg0: $ItemStack$$Type, arg1: integer, arg2: integer, arg3: $List$$Type<($Either$$Type<($FormattedText$$Type), ($TooltipComponent$$Type)>)>, arg4: integer)

public "getItemStack"(): $ItemStack
public "getMaxWidth"(): integer
public "setMaxWidth"(arg0: integer): void
public "getScreenWidth"(): integer
public "getScreenHeight"(): integer
public "getTooltipElements"(): $List<($Either<($FormattedText), ($TooltipComponent)>)>
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "itemStack"(): $ItemStack
get "maxWidth"(): integer
set "maxWidth"(value: integer)
get "screenWidth"(): integer
get "screenHeight"(): integer
get "tooltipElements"(): $List<($Either<($FormattedText), ($TooltipComponent)>)>
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderTooltipEvent$GatherComponents$$Type = ($RenderTooltipEvent$GatherComponents);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderTooltipEvent$GatherComponents$$Original = $RenderTooltipEvent$GatherComponents;}
declare module "net.neoforged.neoforge.client.event.ClientPauseChangeEvent$Pre" {
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$ClientPauseChangeEvent} from "net.neoforged.neoforge.client.event.ClientPauseChangeEvent"

export class $ClientPauseChangeEvent$Pre extends $ClientPauseChangeEvent implements $ICancellableEvent$$Interface {
constructor(arg0: boolean)

public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientPauseChangeEvent$Pre$$Type = ($ClientPauseChangeEvent$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientPauseChangeEvent$Pre$$Original = $ClientPauseChangeEvent$Pre;}
declare module "net.neoforged.neoforge.client.event.ComputeFovModifierEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Event} from "net.neoforged.bus.api.Event"

export class $ComputeFovModifierEvent extends $Event {
constructor(arg0: $Player$$Type, arg1: float)

public "setNewFovModifier"(arg0: float): void
public "getNewFovModifier"(): float
public "getFovModifier"(): float
public "getPlayer"(): $Player
set "newFovModifier"(value: float)
get "newFovModifier"(): float
get "fovModifier"(): float
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComputeFovModifierEvent$$Type = ($ComputeFovModifierEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ComputeFovModifierEvent$$Original = $ComputeFovModifierEvent;}
declare module "net.neoforged.neoforge.client.event.RegisterDimensionSpecialEffectsEvent" {
import {$DimensionSpecialEffects$$Type} from "net.minecraft.client.renderer.DimensionSpecialEffects"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map$$Type} from "java.util.Map"
import {$Event} from "net.neoforged.bus.api.Event"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"

export class $RegisterDimensionSpecialEffectsEvent extends $Event implements $IModBusEvent$$Interface {
constructor(arg0: $Map$$Type<($ResourceLocation$$Type), ($DimensionSpecialEffects$$Type)>)

public "register"(arg0: $ResourceLocation$$Type, arg1: $DimensionSpecialEffects$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterDimensionSpecialEffectsEvent$$Type = ($RegisterDimensionSpecialEffectsEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterDimensionSpecialEffectsEvent$$Original = $RegisterDimensionSpecialEffectsEvent;}
declare module "net.neoforged.neoforge.client.event.CalculateDetachedCameraDistanceEvent" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$Camera, $Camera$$Type} from "net.minecraft.client.Camera"

export class $CalculateDetachedCameraDistanceEvent extends $Event {
constructor(arg0: $Camera$$Type, arg1: boolean, arg2: float, arg3: float)

public "getCamera"(): $Camera
public "isCameraFlipped"(): boolean
public "setDistance"(arg0: float): void
public "getDistance"(): float
public "getEntityScalingFactor"(): float
get "camera"(): $Camera
get "cameraFlipped"(): boolean
set "distance"(value: float)
get "distance"(): float
get "entityScalingFactor"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CalculateDetachedCameraDistanceEvent$$Type = ($CalculateDetachedCameraDistanceEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CalculateDetachedCameraDistanceEvent$$Original = $CalculateDetachedCameraDistanceEvent;}
declare module "net.neoforged.neoforge.client.event.ModelEvent$ModifyBakingResult" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$ModelEvent} from "net.neoforged.neoforge.client.event.ModelEvent"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Material, $Material$$Type} from "net.minecraft.client.resources.model.Material"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$ModelResourceLocation, $ModelResourceLocation$$Type} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$ModelBakery, $ModelBakery$$Type} from "net.minecraft.client.resources.model.ModelBakery"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"

export class $ModelEvent$ModifyBakingResult extends $ModelEvent implements $IModBusEvent$$Interface {
constructor(arg0: $Map$$Type<($ModelResourceLocation$$Type), ($BakedModel$$Type)>, arg1: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>, arg2: $ModelBakery$$Type)

public "getModelBakery"(): $ModelBakery
public "getTextureGetter"(): $Function<($Material), ($TextureAtlasSprite)>
public "getModels"(): $Map<($ModelResourceLocation), ($BakedModel)>
get "modelBakery"(): $ModelBakery
get "textureGetter"(): $Function<($Material), ($TextureAtlasSprite)>
get "models"(): $Map<($ModelResourceLocation), ($BakedModel)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelEvent$ModifyBakingResult$$Type = ($ModelEvent$ModifyBakingResult);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelEvent$ModifyBakingResult$$Original = $ModelEvent$ModifyBakingResult;}
declare module "net.neoforged.neoforge.client.event.RegisterClientReloadListenersEvent" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$ReloadableResourceManager$$Type} from "net.minecraft.server.packs.resources.ReloadableResourceManager"
import {$PreparableReloadListener$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"

export class $RegisterClientReloadListenersEvent extends $Event implements $IModBusEvent$$Interface {
constructor(arg0: $ReloadableResourceManager$$Type)

public "registerReloadListener"(arg0: $PreparableReloadListener$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterClientReloadListenersEvent$$Type = ($RegisterClientReloadListenersEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterClientReloadListenersEvent$$Original = $RegisterClientReloadListenersEvent;}
declare module "net.neoforged.neoforge.client.event.InputEvent$Key" {
import {$InputEvent} from "net.neoforged.neoforge.client.event.InputEvent"

export class $InputEvent$Key extends $InputEvent {
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)

public "getModifiers"(): integer
public "getKey"(): integer
public "getScanCode"(): integer
public "getAction"(): integer
get "modifiers"(): integer
get "key"(): integer
get "scanCode"(): integer
get "action"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputEvent$Key$$Type = ($InputEvent$Key);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InputEvent$Key$$Original = $InputEvent$Key;}
declare module "net.neoforged.neoforge.client.model.ExtraFaceData" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$JsonElement$$Type} from "com.google.gson.JsonElement"
import {$Record} from "java.lang.Record"

export class $ExtraFaceData extends $Record {
static readonly "CODEC": $Codec<($ExtraFaceData)>
static readonly "COLOR": $Codec<(integer)>
static readonly "DEFAULT": $ExtraFaceData

constructor(color: integer, blockLight: integer, skyLight: integer, ambientOcclusion: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "read"(arg0: $JsonElement$$Type, arg1: $ExtraFaceData$$Type): $ExtraFaceData
public "color"(): integer
public "ambientOcclusion"(): boolean
public "blockLight"(): integer
public "skyLight"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtraFaceData$$Type = ({"blockLight"?: integer, "color"?: integer, "ambientOcclusion"?: boolean, "skyLight"?: integer}) | ([blockLight?: integer, color?: integer, ambientOcclusion?: boolean, skyLight?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExtraFaceData$$Original = $ExtraFaceData;}
declare module "net.neoforged.neoforge.client.model.lighting.QuadLighter" {
import {$PoseStack$Pose$$Type} from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BakedQuad$$Type} from "net.minecraft.client.renderer.block.model.BakedQuad"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $QuadLighter {
public "reset"(): void
public "setup"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): void
public "process"(arg0: $VertexConsumer$$Type, arg1: $PoseStack$Pose$$Type, arg2: $BakedQuad$$Type, arg3: integer): void
public static "calculateShade"(arg0: float, arg1: float, arg2: float, arg3: boolean): float
public "computeLightingForQuad"(arg0: (integer)[], arg1: boolean): void
public "computeLightingForQuad"(arg0: $BakedQuad$$Type): void
public "getComputedLightmap"(): (integer)[]
public "getComputedBrightness"(): (float)[]
get "computedLightmap"(): (integer)[]
get "computedBrightness"(): (float)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuadLighter$$Type = ($QuadLighter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuadLighter$$Original = $QuadLighter;}
declare module "net.neoforged.neoforge.client.event.ViewportEvent" {
import {$GameRenderer, $GameRenderer$$Type} from "net.minecraft.client.renderer.GameRenderer"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Camera, $Camera$$Type} from "net.minecraft.client.Camera"

export class $ViewportEvent extends $Event {
constructor(arg0: $GameRenderer$$Type, arg1: $Camera$$Type, arg2: double)

public "getCamera"(): $Camera
public "getPartialTick"(): double
public "getRenderer"(): $GameRenderer
get "camera"(): $Camera
get "partialTick"(): double
get "renderer"(): $GameRenderer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ViewportEvent$$Type = ($ViewportEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ViewportEvent$$Original = $ViewportEvent;}
declare module "net.neoforged.neoforge.client.event.sound.SoundEvent" {
import {$SoundEngine} from "net.minecraft.client.sounds.SoundEngine"
import {$Event} from "net.neoforged.bus.api.Event"

export class $SoundEvent extends $Event {
public "getEngine"(): $SoundEngine
get "engine"(): $SoundEngine
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundEvent$$Type = ($SoundEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoundEvent$$Original = $SoundEvent;}
declare module "net.neoforged.neoforge.client.event.ScreenEvent$MouseButtonReleased$Post$Result" {
import {$Enum} from "java.lang.Enum"

export class $ScreenEvent$MouseButtonReleased$Post$Result extends $Enum<($ScreenEvent$MouseButtonReleased$Post$Result)> {
static readonly "FORCE_HANDLED": $ScreenEvent$MouseButtonReleased$Post$Result
static readonly "FORCE_UNHANDLED": $ScreenEvent$MouseButtonReleased$Post$Result
static readonly "DEFAULT": $ScreenEvent$MouseButtonReleased$Post$Result

public static "values"(): ($ScreenEvent$MouseButtonReleased$Post$Result)[]
public static "valueOf"(arg0: StringJS): $ScreenEvent$MouseButtonReleased$Post$Result
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvent$MouseButtonReleased$Post$Result$$Type = (("force_handled") | ("default") | ("force_unhandled"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenEvent$MouseButtonReleased$Post$Result$$Original = $ScreenEvent$MouseButtonReleased$Post$Result;}
declare module "net.neoforged.neoforge.client.entity.animation.AnimationKeyframeTarget" {
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"

export interface $AnimationKeyframeTarget$$Interface {

(arg0: float, arg1: float, arg2: float): $Vector3f$$Type
}

export class $AnimationKeyframeTarget implements $AnimationKeyframeTarget$$Interface {
 "apply"(arg0: float, arg1: float, arg2: float): $Vector3f
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationKeyframeTarget$$Type = ((arg0: float, arg1: float, arg2: float) => $Vector3f$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnimationKeyframeTarget$$Original = $AnimationKeyframeTarget;}
declare module "net.neoforged.neoforge.client.gui.GuiLayerManager$NamedLayer" {
import {$LayeredDraw$Layer, $LayeredDraw$Layer$$Type} from "net.minecraft.client.gui.LayeredDraw$Layer"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Record} from "java.lang.Record"

export class $GuiLayerManager$NamedLayer extends $Record {
constructor(name: $ResourceLocation$$Type, layer: $LayeredDraw$Layer$$Type)

public "name"(): $ResourceLocation
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "layer"(): $LayeredDraw$Layer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiLayerManager$NamedLayer$$Type = ({"layer"?: $LayeredDraw$Layer$$Type, "name"?: $ResourceLocation$$Type}) | ([layer?: $LayeredDraw$Layer$$Type, name?: $ResourceLocation$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiLayerManager$NamedLayer$$Original = $GuiLayerManager$NamedLayer;}
declare module "net.neoforged.neoforge.client.event.ClientPauseChangeEvent" {
import {$Event} from "net.neoforged.bus.api.Event"

export class $ClientPauseChangeEvent extends $Event {
constructor(arg0: boolean)

public "isPaused"(): boolean
get "paused"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientPauseChangeEvent$$Type = ($ClientPauseChangeEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientPauseChangeEvent$$Original = $ClientPauseChangeEvent;}
declare module "net.neoforged.neoforge.client.event.ScreenEvent$MouseInput" {
import {$ScreenEvent} from "net.neoforged.neoforge.client.event.ScreenEvent"

export class $ScreenEvent$MouseInput extends $ScreenEvent {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvent$MouseInput$$Type = ($ScreenEvent$MouseInput);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenEvent$MouseInput$$Original = $ScreenEvent$MouseInput;}
declare module "net.neoforged.neoforge.client.IItemDecorator" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Font, $Font$$Type} from "net.minecraft.client.gui.Font"

export interface $IItemDecorator$$Interface {

(arg0: $GuiGraphics, arg1: $Font, arg2: $ItemStack, arg3: integer, arg4: integer): boolean
}

export class $IItemDecorator implements $IItemDecorator$$Interface {
 "render"(arg0: $GuiGraphics$$Type, arg1: $Font$$Type, arg2: $ItemStack$$Type, arg3: integer, arg4: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemDecorator$$Type = ((arg0: $GuiGraphics, arg1: $Font, arg2: $ItemStack, arg3: integer, arg4: integer) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IItemDecorator$$Original = $IItemDecorator;}
declare module "net.neoforged.neoforge.client.ChunkRenderTypeSet" {
import {$Iterator} from "java.util.Iterator"
import {$Iterable$$Type, $Iterable$$Interface} from "java.lang.Iterable"
import {$Collection$$Type} from "java.util.Collection"
import {$Spliterator} from "java.util.Spliterator"
import {$List} from "java.util.List"
import {$ExtendedChunkRenderTypeSet$$Interface} from "net.fabricmc.fabric.impl.blockrenderlayer.ExtendedChunkRenderTypeSet"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $ChunkRenderTypeSet implements $Iterable$$Interface<($RenderType)>, $ExtendedChunkRenderTypeSet$$Interface {
public "isEmpty"(): boolean
public "iterator"(): $Iterator<($RenderType)>
public static "of"(arg0: $Collection$$Type<($RenderType$$Type)>): $ChunkRenderTypeSet
public static "of"(...arg0: ($RenderType$$Type)[]): $ChunkRenderTypeSet
public "contains"(arg0: $RenderType$$Type): boolean
public "asList"(): $List<($RenderType)>
public static "all"(): $ChunkRenderTypeSet
public static "union"(...arg0: ($ChunkRenderTypeSet$$Type)[]): $ChunkRenderTypeSet
public static "union"(arg0: $Collection$$Type<($ChunkRenderTypeSet$$Type)>): $ChunkRenderTypeSet
public static "union"(arg0: $Iterable$$Type<($ChunkRenderTypeSet$$Type)>): $ChunkRenderTypeSet
public static "none"(): $ChunkRenderTypeSet
public static "intersection"(...arg0: ($ChunkRenderTypeSet$$Type)[]): $ChunkRenderTypeSet
public static "intersection"(arg0: $Collection$$Type<($ChunkRenderTypeSet$$Type)>): $ChunkRenderTypeSet
public static "intersection"(arg0: $Iterable$$Type<($ChunkRenderTypeSet$$Type)>): $ChunkRenderTypeSet
public "sinytra$firstLayer"(): $RenderType
public "spliterator"(): $Spliterator<($RenderType)>
public "forEach"(arg0: $Consumer$$Type<($RenderType)>): void
[Symbol.iterator](): IterableIterator<$RenderType>;
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkRenderTypeSet$$Type = ($ChunkRenderTypeSet);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkRenderTypeSet$$Original = $ChunkRenderTypeSet;}
declare module "net.neoforged.neoforge.client.gui.map.IMapDecorationRenderer" {
import {$MapDecorationTextureManager, $MapDecorationTextureManager$$Type} from "net.minecraft.client.resources.MapDecorationTextureManager"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$MapDecoration, $MapDecoration$$Type} from "net.minecraft.world.level.saveddata.maps.MapDecoration"
import {$MapItemSavedData, $MapItemSavedData$$Type} from "net.minecraft.world.level.saveddata.maps.MapItemSavedData"

export interface $IMapDecorationRenderer$$Interface {

(arg0: $MapDecoration, arg1: $PoseStack, arg2: $MultiBufferSource, arg3: $MapItemSavedData, arg4: $MapDecorationTextureManager, arg5: boolean, arg6: integer, arg7: integer): boolean
}

export class $IMapDecorationRenderer implements $IMapDecorationRenderer$$Interface {
 "render"(arg0: $MapDecoration$$Type, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: $MapItemSavedData$$Type, arg4: $MapDecorationTextureManager$$Type, arg5: boolean, arg6: integer, arg7: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMapDecorationRenderer$$Type = ((arg0: $MapDecoration, arg1: $PoseStack, arg2: $MultiBufferSource, arg3: $MapItemSavedData, arg4: $MapDecorationTextureManager, arg5: boolean, arg6: integer, arg7: integer) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMapDecorationRenderer$$Original = $IMapDecorationRenderer;}
declare module "net.neoforged.neoforge.client.event.ModelEvent" {
import {$Event} from "net.neoforged.bus.api.Event"

export class $ModelEvent extends $Event {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelEvent$$Type = ($ModelEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelEvent$$Original = $ModelEvent;}
declare module "net.neoforged.neoforge.client.extensions.IGuiGraphicsExtension" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Font$$Type} from "net.minecraft.client.gui.Font"
import {$Component$$Type} from "net.minecraft.network.chat.Component"

export interface $IGuiGraphicsExtension$$Interface {
}

export class $IGuiGraphicsExtension implements $IGuiGraphicsExtension$$Interface {
static readonly "DEFAULT_BORDER_COLOR_START": integer
static readonly "TEXT_COLOR_CODES": (integer)[]
static readonly "UNDO_CHAR": StringJS
static readonly "DEFAULT_BACKGROUND_COLOR": integer
static readonly "VALID": StringJS
static readonly "DEFAULT_BORDER_COLOR_END": integer
static readonly "INVALID": StringJS
static readonly "RESET_CHAR": StringJS

 "blitInscribed"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
 "blitInscribed"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: boolean, arg8: boolean): void
 "blitWithBorder"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer, arg10: integer, arg11: integer, arg12: integer): void
 "blitWithBorder"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer): void
 "getColorFromFormattingCharacter"(arg0: character, arg1: boolean): integer
 "drawScrollingString"(arg0: $Font$$Type, arg1: $Component$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGuiGraphicsExtension$$Type = ($IGuiGraphicsExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IGuiGraphicsExtension$$Original = $IGuiGraphicsExtension;}
declare module "net.neoforged.neoforge.client.event.ScreenEvent$MouseScrolled$Post" {
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ScreenEvent$MouseScrolled} from "net.neoforged.neoforge.client.event.ScreenEvent$MouseScrolled"

export class $ScreenEvent$MouseScrolled$Post extends $ScreenEvent$MouseScrolled {
constructor(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: double, arg4: double)

public "getMouseX"(): double
public "getMouseY"(): double
get "mouseX"(): double
get "mouseY"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvent$MouseScrolled$Post$$Type = ($ScreenEvent$MouseScrolled$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenEvent$MouseScrolled$Post$$Original = $ScreenEvent$MouseScrolled$Post;}
declare module "net.neoforged.neoforge.client.event.RenderGuiLayerEvent" {
import {$LayeredDraw$Layer} from "net.minecraft.client.gui.LayeredDraw$Layer"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics} from "net.minecraft.client.gui.GuiGraphics"
import {$Event} from "net.neoforged.bus.api.Event"
import {$DeltaTracker} from "net.minecraft.client.DeltaTracker"

export class $RenderGuiLayerEvent extends $Event {
public "getName"(): $ResourceLocation
public "getLayer"(): $LayeredDraw$Layer
public "getPartialTick"(): $DeltaTracker
public "getGuiGraphics"(): $GuiGraphics
get "name"(): $ResourceLocation
get "layer"(): $LayeredDraw$Layer
get "partialTick"(): $DeltaTracker
get "guiGraphics"(): $GuiGraphics
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderGuiLayerEvent$$Type = ($RenderGuiLayerEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderGuiLayerEvent$$Original = $RenderGuiLayerEvent;}
declare module "net.neoforged.neoforge.client.model.geometry.BlockGeometryBakingContext$VisibilityData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $BlockGeometryBakingContext$VisibilityData {
constructor()

public "isVisible"(arg0: StringJS, arg1: boolean): boolean
public "copyFrom"(arg0: $BlockGeometryBakingContext$VisibilityData$$Type): void
public "hasCustomVisibility"(arg0: StringJS): boolean
public "setVisibilityState"(arg0: StringJS, arg1: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockGeometryBakingContext$VisibilityData$$Type = ($BlockGeometryBakingContext$VisibilityData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockGeometryBakingContext$VisibilityData$$Original = $BlockGeometryBakingContext$VisibilityData;}
declare module "net.neoforged.neoforge.client.event.ModelEvent$BakingCompleted" {
import {$ModelEvent} from "net.neoforged.neoforge.client.event.ModelEvent"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ModelResourceLocation, $ModelResourceLocation$$Type} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$ModelBakery, $ModelBakery$$Type} from "net.minecraft.client.resources.model.ModelBakery"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"
import {$ModelManager, $ModelManager$$Type} from "net.minecraft.client.resources.model.ModelManager"

export class $ModelEvent$BakingCompleted extends $ModelEvent implements $IModBusEvent$$Interface {
constructor(arg0: $ModelManager$$Type, arg1: $Map$$Type<($ModelResourceLocation$$Type), ($BakedModel$$Type)>, arg2: $ModelBakery$$Type)

public "getModelBakery"(): $ModelBakery
public "getModelManager"(): $ModelManager
public "getModels"(): $Map<($ModelResourceLocation), ($BakedModel)>
get "modelBakery"(): $ModelBakery
get "modelManager"(): $ModelManager
get "models"(): $Map<($ModelResourceLocation), ($BakedModel)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelEvent$BakingCompleted$$Type = ($ModelEvent$BakingCompleted);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelEvent$BakingCompleted$$Original = $ModelEvent$BakingCompleted;}
declare module "net.neoforged.neoforge.client.event.AddSectionGeometryEvent$SectionRenderingContext" {
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$QuadLighter} from "net.neoforged.neoforge.client.model.lighting.QuadLighter"
import {$Function$$Type} from "java.util.function.Function"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export class $AddSectionGeometryEvent$SectionRenderingContext {
constructor(arg0: $Function$$Type<($RenderType), ($VertexConsumer$$Type)>, arg1: $BlockAndTintGetter$$Type, arg2: $PoseStack$$Type)

public "getRegion"(): $BlockAndTintGetter
public "getPoseStack"(): $PoseStack
public "getOrCreateChunkBuffer"(arg0: $RenderType$$Type): $VertexConsumer
public "getQuadLighter"(arg0: boolean): $QuadLighter
get "region"(): $BlockAndTintGetter
get "poseStack"(): $PoseStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddSectionGeometryEvent$SectionRenderingContext$$Type = ($AddSectionGeometryEvent$SectionRenderingContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AddSectionGeometryEvent$SectionRenderingContext$$Original = $AddSectionGeometryEvent$SectionRenderingContext;}
declare module "net.neoforged.neoforge.client.event.RenderHighlightEvent$Block" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$RenderHighlightEvent} from "net.neoforged.neoforge.client.event.RenderHighlightEvent"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$LevelRenderer$$Type} from "net.minecraft.client.renderer.LevelRenderer"
import {$DeltaTracker$$Type} from "net.minecraft.client.DeltaTracker"
import {$Camera$$Type} from "net.minecraft.client.Camera"

export class $RenderHighlightEvent$Block extends $RenderHighlightEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $LevelRenderer$$Type, arg1: $Camera$$Type, arg2: $BlockHitResult$$Type, arg3: $DeltaTracker$$Type, arg4: $PoseStack$$Type, arg5: $MultiBufferSource$$Type)

public "getTarget"(): $BlockHitResult
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "target"(): $BlockHitResult
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderHighlightEvent$Block$$Type = ($RenderHighlightEvent$Block);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderHighlightEvent$Block$$Original = $RenderHighlightEvent$Block;}
declare module "net.neoforged.neoforge.client.event.ClientPauseChangeEvent$Post" {
import {$ClientPauseChangeEvent} from "net.neoforged.neoforge.client.event.ClientPauseChangeEvent"

export class $ClientPauseChangeEvent$Post extends $ClientPauseChangeEvent {
constructor(arg0: boolean)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientPauseChangeEvent$Post$$Type = ($ClientPauseChangeEvent$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientPauseChangeEvent$Post$$Original = $ClientPauseChangeEvent$Post;}
declare module "net.neoforged.neoforge.client.event.RegisterGuiLayersEvent" {
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$LayeredDraw$Layer$$Type} from "net.minecraft.client.gui.LayeredDraw$Layer"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$List$$Type} from "java.util.List"
import {$GuiLayerManager$NamedLayer$$Type} from "net.neoforged.neoforge.client.gui.GuiLayerManager$NamedLayer"
import {$Event} from "net.neoforged.bus.api.Event"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"

export class $RegisterGuiLayersEvent extends $Event implements $IModBusEvent$$Interface {
constructor(arg0: $List$$Type<($GuiLayerManager$NamedLayer$$Type)>)

public "wrapLayer"(arg0: $ResourceLocation$$Type, arg1: $UnaryOperator$$Type<($LayeredDraw$Layer)>): void
public "registerBelow"(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type, arg2: $LayeredDraw$Layer$$Type): void
public "registerAboveAll"(arg0: $ResourceLocation$$Type, arg1: $LayeredDraw$Layer$$Type): void
public "registerBelowAll"(arg0: $ResourceLocation$$Type, arg1: $LayeredDraw$Layer$$Type): void
public "replaceLayer"(arg0: $ResourceLocation$$Type, arg1: $LayeredDraw$Layer$$Type): void
public "registerAbove"(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type, arg2: $LayeredDraw$Layer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterGuiLayersEvent$$Type = ($RegisterGuiLayersEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterGuiLayersEvent$$Original = $RegisterGuiLayersEvent;}
declare module "net.neoforged.neoforge.client.extensions.common.IClientItemExtensions$FontContext" {
import {$Enum} from "java.lang.Enum"

export class $IClientItemExtensions$FontContext extends $Enum<($IClientItemExtensions$FontContext)> {
static readonly "TOOLTIP": $IClientItemExtensions$FontContext
static readonly "SELECTED_ITEM_NAME": $IClientItemExtensions$FontContext
static readonly "ITEM_COUNT": $IClientItemExtensions$FontContext

public static "values"(): ($IClientItemExtensions$FontContext)[]
public static "valueOf"(arg0: StringJS): $IClientItemExtensions$FontContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClientItemExtensions$FontContext$$Type = (("item_count") | ("tooltip") | ("selected_item_name"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IClientItemExtensions$FontContext$$Original = $IClientItemExtensions$FontContext;}
declare module "net.neoforged.neoforge.client.event.RegisterColorHandlersEvent" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"

export class $RegisterColorHandlersEvent extends $Event implements $IModBusEvent$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterColorHandlersEvent$$Type = ($RegisterColorHandlersEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterColorHandlersEvent$$Original = $RegisterColorHandlersEvent;}
declare module "net.neoforged.neoforge.client.event.RegisterMaterialAtlasesEvent" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map$$Type} from "java.util.Map"
import {$Event} from "net.neoforged.bus.api.Event"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"

export class $RegisterMaterialAtlasesEvent extends $Event implements $IModBusEvent$$Interface {
constructor(arg0: $Map$$Type<($ResourceLocation$$Type), ($ResourceLocation$$Type)>)

public "register"(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterMaterialAtlasesEvent$$Type = ($RegisterMaterialAtlasesEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterMaterialAtlasesEvent$$Original = $RegisterMaterialAtlasesEvent;}
declare module "net.neoforged.neoforge.client.event.RenderGuiLayerEvent$Pre" {
import {$LayeredDraw$Layer$$Type} from "net.minecraft.client.gui.LayeredDraw$Layer"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$RenderGuiLayerEvent} from "net.neoforged.neoforge.client.event.RenderGuiLayerEvent"
import {$DeltaTracker$$Type} from "net.minecraft.client.DeltaTracker"

export class $RenderGuiLayerEvent$Pre extends $RenderGuiLayerEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $GuiGraphics$$Type, arg1: $DeltaTracker$$Type, arg2: $ResourceLocation$$Type, arg3: $LayeredDraw$Layer$$Type)

public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderGuiLayerEvent$Pre$$Type = ($RenderGuiLayerEvent$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderGuiLayerEvent$Pre$$Original = $RenderGuiLayerEvent$Pre;}
declare module "net.neoforged.neoforge.client.event.ViewportEvent$RenderFog" {
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Camera$$Type} from "net.minecraft.client.Camera"
import {$FogShape, $FogShape$$Type} from "com.mojang.blaze3d.shaders.FogShape"
import {$FogType, $FogType$$Type} from "net.minecraft.world.level.material.FogType"
import {$FogRenderer$FogMode, $FogRenderer$FogMode$$Type} from "net.minecraft.client.renderer.FogRenderer$FogMode"
import {$ViewportEvent} from "net.neoforged.neoforge.client.event.ViewportEvent"

export class $ViewportEvent$RenderFog extends $ViewportEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $FogRenderer$FogMode$$Type, arg1: $FogType$$Type, arg2: $Camera$$Type, arg3: float, arg4: float, arg5: float, arg6: $FogShape$$Type)

public "getType"(): $FogType
public "getMode"(): $FogRenderer$FogMode
public "getFogShape"(): $FogShape
public "setFogShape"(arg0: $FogShape$$Type): void
public "setFarPlaneDistance"(arg0: float): void
public "getNearPlaneDistance"(): float
public "setNearPlaneDistance"(arg0: float): void
public "getFarPlaneDistance"(): float
public "scaleNearPlaneDistance"(arg0: float): void
public "scaleFarPlaneDistance"(arg0: float): void
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "type"(): $FogType
get "mode"(): $FogRenderer$FogMode
get "fogShape"(): $FogShape
set "fogShape"(value: $FogShape$$Type)
set "farPlaneDistance"(value: float)
get "nearPlaneDistance"(): float
set "nearPlaneDistance"(value: float)
get "farPlaneDistance"(): float
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ViewportEvent$RenderFog$$Type = ($ViewportEvent$RenderFog);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ViewportEvent$RenderFog$$Original = $ViewportEvent$RenderFog;}
declare module "net.neoforged.neoforge.client.event.ModelEvent$RegisterGeometryLoaders" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ModelEvent} from "net.neoforged.neoforge.client.event.ModelEvent"
import {$Map$$Type} from "java.util.Map"
import {$IGeometryLoader$$Type} from "net.neoforged.neoforge.client.model.geometry.IGeometryLoader"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"

export class $ModelEvent$RegisterGeometryLoaders extends $ModelEvent implements $IModBusEvent$$Interface {
constructor(arg0: $Map$$Type<($ResourceLocation$$Type), ($IGeometryLoader$$Type<(never)>)>)

public "register"(arg0: $ResourceLocation$$Type, arg1: $IGeometryLoader$$Type<(never)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelEvent$RegisterGeometryLoaders$$Type = ($ModelEvent$RegisterGeometryLoaders);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelEvent$RegisterGeometryLoaders$$Original = $ModelEvent$RegisterGeometryLoaders;}
declare module "net.neoforged.neoforge.client.event.ClientPlayerChangeGameTypeEvent" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$PlayerInfo, $PlayerInfo$$Type} from "net.minecraft.client.multiplayer.PlayerInfo"
import {$GameType, $GameType$$Type} from "net.minecraft.world.level.GameType"

export class $ClientPlayerChangeGameTypeEvent extends $Event {
constructor(arg0: $PlayerInfo$$Type, arg1: $GameType$$Type, arg2: $GameType$$Type)

public "getInfo"(): $PlayerInfo
public "getCurrentGameType"(): $GameType
public "getNewGameType"(): $GameType
get "info"(): $PlayerInfo
get "currentGameType"(): $GameType
get "newGameType"(): $GameType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientPlayerChangeGameTypeEvent$$Type = ($ClientPlayerChangeGameTypeEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientPlayerChangeGameTypeEvent$$Original = $ClientPlayerChangeGameTypeEvent;}
declare module "net.neoforged.neoforge.client.event.ScreenEvent$Init$Post" {
import {$GuiEventListener$$Type} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$ScreenEvent$Init} from "net.neoforged.neoforge.client.event.ScreenEvent$Init"
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$List$$Type} from "java.util.List"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $ScreenEvent$Init$Post extends $ScreenEvent$Init {
constructor(arg0: $Screen$$Type, arg1: $List$$Type<($GuiEventListener$$Type)>, arg2: $Consumer$$Type<($GuiEventListener)>, arg3: $Consumer$$Type<($GuiEventListener)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvent$Init$Post$$Type = ($ScreenEvent$Init$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenEvent$Init$Post$$Original = $ScreenEvent$Init$Post;}
declare module "net.neoforged.neoforge.client.event.ScreenEvent$MouseDragged$Post" {
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ScreenEvent$MouseDragged} from "net.neoforged.neoforge.client.event.ScreenEvent$MouseDragged"

export class $ScreenEvent$MouseDragged$Post extends $ScreenEvent$MouseDragged {
constructor(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer, arg4: double, arg5: double)

public "getMouseX"(): double
public "getMouseY"(): double
get "mouseX"(): double
get "mouseY"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvent$MouseDragged$Post$$Type = ($ScreenEvent$MouseDragged$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenEvent$MouseDragged$Post$$Original = $ScreenEvent$MouseDragged$Post;}
declare module "net.neoforged.neoforge.client.event.RenderHighlightEvent" {
import {$MultiBufferSource} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Event} from "net.neoforged.bus.api.Event"
import {$LevelRenderer} from "net.minecraft.client.renderer.LevelRenderer"
import {$DeltaTracker} from "net.minecraft.client.DeltaTracker"
import {$HitResult} from "net.minecraft.world.phys.HitResult"
import {$Camera} from "net.minecraft.client.Camera"

export class $RenderHighlightEvent extends $Event {
public "getTarget"(): $HitResult
public "getCamera"(): $Camera
public "getMultiBufferSource"(): $MultiBufferSource
public "getDeltaTracker"(): $DeltaTracker
public "getLevelRenderer"(): $LevelRenderer
public "getPoseStack"(): $PoseStack
get "target"(): $HitResult
get "camera"(): $Camera
get "multiBufferSource"(): $MultiBufferSource
get "deltaTracker"(): $DeltaTracker
get "levelRenderer"(): $LevelRenderer
get "poseStack"(): $PoseStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderHighlightEvent$$Type = ($RenderHighlightEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderHighlightEvent$$Original = $RenderHighlightEvent;}
declare module "net.neoforged.neoforge.client.event.RegisterColorHandlersEvent$Block" {
import {$BlockColors, $BlockColors$$Type} from "net.minecraft.client.color.block.BlockColors"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$RegisterColorHandlersEvent} from "net.neoforged.neoforge.client.event.RegisterColorHandlersEvent"
import {$BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"

export class $RegisterColorHandlersEvent$Block extends $RegisterColorHandlersEvent {
constructor(arg0: $BlockColors$$Type)

public "register"(arg0: $BlockColor$$Type, ...arg1: ($Block$$Type)[]): void
public "getBlockColors"(): $BlockColors
get "blockColors"(): $BlockColors
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterColorHandlersEvent$Block$$Type = ($RegisterColorHandlersEvent$Block);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterColorHandlersEvent$Block$$Original = $RegisterColorHandlersEvent$Block;}
declare module "net.neoforged.neoforge.client.event.CustomizeGuiOverlayEvent$DebugText" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Window$$Type} from "com.mojang.blaze3d.platform.Window"
import {$List, $List$$Type} from "java.util.List"
import {$DeltaTracker$$Type} from "net.minecraft.client.DeltaTracker"
import {$CustomizeGuiOverlayEvent} from "net.neoforged.neoforge.client.event.CustomizeGuiOverlayEvent"

export class $CustomizeGuiOverlayEvent$DebugText extends $CustomizeGuiOverlayEvent {
constructor(arg0: $Window$$Type, arg1: $GuiGraphics$$Type, arg2: $DeltaTracker$$Type, arg3: $List$$Type<(StringJS)>, arg4: $List$$Type<(StringJS)>)

public "getLeft"(): $List<(StringJS)>
public "getRight"(): $List<(StringJS)>
get "left"(): $List<(StringJS)>
get "right"(): $List<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomizeGuiOverlayEvent$DebugText$$Type = ($CustomizeGuiOverlayEvent$DebugText);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomizeGuiOverlayEvent$DebugText$$Original = $CustomizeGuiOverlayEvent$DebugText;}
declare module "net.neoforged.neoforge.client.event.ScreenEvent$KeyPressed" {
import {$ScreenEvent$KeyInput} from "net.neoforged.neoforge.client.event.ScreenEvent$KeyInput"
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export class $ScreenEvent$KeyPressed extends $ScreenEvent$KeyInput {
constructor(arg0: $Screen$$Type, arg1: integer, arg2: integer, arg3: integer)

public "getKeyCode"(): integer
public "getModifiers"(): integer
public "getScanCode"(): integer
get "keyCode"(): integer
get "modifiers"(): integer
get "scanCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvent$KeyPressed$$Type = ($ScreenEvent$KeyPressed);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenEvent$KeyPressed$$Original = $ScreenEvent$KeyPressed;}
declare module "net.neoforged.neoforge.client.event.ContainerScreenEvent$Render$Foreground" {
import {$ContainerScreenEvent$Render} from "net.neoforged.neoforge.client.event.ContainerScreenEvent$Render"
import {$AbstractContainerScreen$$Type} from "net.minecraft.client.gui.screens.inventory.AbstractContainerScreen"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"

export class $ContainerScreenEvent$Render$Foreground extends $ContainerScreenEvent$Render {
constructor(arg0: $AbstractContainerScreen$$Type<(never)>, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerScreenEvent$Render$Foreground$$Type = ($ContainerScreenEvent$Render$Foreground);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContainerScreenEvent$Render$Foreground$$Original = $ContainerScreenEvent$Render$Foreground;}
declare module "net.neoforged.neoforge.client.ExtendedServerListData" {
import {$Record} from "java.lang.Record"

export class $ExtendedServerListData extends $Record {
constructor(arg0: StringJS, arg1: boolean, arg2: integer, arg3: StringJS)
constructor(type: StringJS, isCompatible: boolean, numberOfMods: integer, extraReason: StringJS, truncated: boolean)

public "type"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "truncated"(): boolean
public "isCompatible"(): boolean
public "numberOfMods"(): integer
public "extraReason"(): StringJS
get "compatible"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedServerListData$$Type = ({"truncated"?: boolean, "type"?: StringJS, "numberOfMods"?: integer, "extraReason"?: StringJS, "isCompatible"?: boolean}) | ([truncated?: boolean, type?: StringJS, numberOfMods?: integer, extraReason?: StringJS, isCompatible?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExtendedServerListData$$Original = $ExtendedServerListData;}
declare module "net.neoforged.neoforge.client.event.ViewportEvent$ComputeCameraAngles" {
import {$Camera$$Type} from "net.minecraft.client.Camera"
import {$ViewportEvent} from "net.neoforged.neoforge.client.event.ViewportEvent"

export class $ViewportEvent$ComputeCameraAngles extends $ViewportEvent {
constructor(arg0: $Camera$$Type, arg1: double, arg2: float, arg3: float, arg4: float)

public "getPitch"(): float
public "setPitch"(arg0: float): void
public "getYaw"(): float
public "setRoll"(arg0: float): void
public "setYaw"(arg0: float): void
public "getRoll"(): float
get "pitch"(): float
set "pitch"(value: float)
get "yaw"(): float
set "roll"(value: float)
set "yaw"(value: float)
get "roll"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ViewportEvent$ComputeCameraAngles$$Type = ($ViewportEvent$ComputeCameraAngles);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ViewportEvent$ComputeCameraAngles$$Original = $ViewportEvent$ComputeCameraAngles;}
declare module "net.neoforged.neoforge.client.event.EntityRenderersEvent$CreateSkullModels" {
import {$ImmutableMap$Builder$$Type} from "com.google.common.collect.ImmutableMap$Builder"
import {$SkullModelBase$$Type} from "net.minecraft.client.model.SkullModelBase"
import {$EntityRenderersEvent} from "net.neoforged.neoforge.client.event.EntityRenderersEvent"
import {$SkullBlock$Type$$Type} from "net.minecraft.world.level.block.SkullBlock$Type"
import {$EntityModelSet, $EntityModelSet$$Type} from "net.minecraft.client.model.geom.EntityModelSet"

export class $EntityRenderersEvent$CreateSkullModels extends $EntityRenderersEvent {
constructor(arg0: $ImmutableMap$Builder$$Type<($SkullBlock$Type$$Type), ($SkullModelBase$$Type)>, arg1: $EntityModelSet$$Type)

public "getEntityModelSet"(): $EntityModelSet
public "registerSkullModel"(arg0: $SkullBlock$Type$$Type, arg1: $SkullModelBase$$Type): void
get "entityModelSet"(): $EntityModelSet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRenderersEvent$CreateSkullModels$$Type = ($EntityRenderersEvent$CreateSkullModels);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityRenderersEvent$CreateSkullModels$$Original = $EntityRenderersEvent$CreateSkullModels;}
declare module "net.neoforged.neoforge.client.settings.IKeyConflictContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IKeyConflictContext$$Interface {
get "active"(): boolean
}

export class $IKeyConflictContext implements $IKeyConflictContext$$Interface {
 "isActive"(): boolean
 "conflicts"(arg0: $IKeyConflictContext$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IKeyConflictContext$$Type = ($IKeyConflictContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IKeyConflictContext$$Original = $IKeyConflictContext;}
declare module "net.neoforged.neoforge.client.event.RenderLevelStageEvent" {
import {$RenderLevelStageEvent$Stage, $RenderLevelStageEvent$Stage$$Type} from "net.neoforged.neoforge.client.event.RenderLevelStageEvent$Stage"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Frustum, $Frustum$$Type} from "net.minecraft.client.renderer.culling.Frustum"
import {$LevelRenderer, $LevelRenderer$$Type} from "net.minecraft.client.renderer.LevelRenderer"
import {$DeltaTracker, $DeltaTracker$$Type} from "net.minecraft.client.DeltaTracker"
import {$Camera, $Camera$$Type} from "net.minecraft.client.Camera"
import {$Matrix4f, $Matrix4f$$Type} from "org.joml.Matrix4f"

export class $RenderLevelStageEvent extends $Event {
constructor(arg0: $RenderLevelStageEvent$Stage$$Type, arg1: $LevelRenderer$$Type, arg2: $PoseStack$$Type, arg3: $Matrix4f$$Type, arg4: $Matrix4f$$Type, arg5: integer, arg6: $DeltaTracker$$Type, arg7: $Camera$$Type, arg8: $Frustum$$Type)

public "getCamera"(): $Camera
public "getPartialTick"(): $DeltaTracker
public "getModelViewMatrix"(): $Matrix4f
public "getLevelRenderer"(): $LevelRenderer
public "getRenderTick"(): integer
public "getStage"(): $RenderLevelStageEvent$Stage
public "getProjectionMatrix"(): $Matrix4f
public "getFrustum"(): $Frustum
public "getPoseStack"(): $PoseStack
get "camera"(): $Camera
get "partialTick"(): $DeltaTracker
get "modelViewMatrix"(): $Matrix4f
get "levelRenderer"(): $LevelRenderer
get "renderTick"(): integer
get "stage"(): $RenderLevelStageEvent$Stage
get "projectionMatrix"(): $Matrix4f
get "frustum"(): $Frustum
get "poseStack"(): $PoseStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderLevelStageEvent$$Type = ($RenderLevelStageEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderLevelStageEvent$$Original = $RenderLevelStageEvent;}
declare module "net.neoforged.neoforge.client.event.ToastAddEvent" {
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Toast, $Toast$$Type} from "net.minecraft.client.gui.components.toasts.Toast"

export class $ToastAddEvent extends $Event implements $ICancellableEvent$$Interface {
constructor(arg0: $Toast$$Type)

public "getToast"(): $Toast
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "toast"(): $Toast
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToastAddEvent$$Type = ($ToastAddEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ToastAddEvent$$Original = $ToastAddEvent;}
declare module "net.neoforged.neoforge.client.event.RenderLivingEvent$Pre" {
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$RenderLivingEvent} from "net.neoforged.neoforge.client.event.RenderLivingEvent"
import {$EntityModel} from "net.minecraft.client.model.EntityModel"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$LivingEntityRenderer$$Type} from "net.minecraft.client.renderer.entity.LivingEntityRenderer"

export class $RenderLivingEvent$Pre<T extends $LivingEntity, M extends $EntityModel<(object)>> extends $RenderLivingEvent<(T), (M)> implements $ICancellableEvent$$Interface {
constructor(arg0: $LivingEntity$$Type, arg1: $LivingEntityRenderer$$Type<(T), (M)>, arg2: float, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer)

public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderLivingEvent$Pre$$Type<T, M> = ($RenderLivingEvent$Pre<(T), (M)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderLivingEvent$Pre$$Original<T, M> = $RenderLivingEvent$Pre<(T), (M)>;}
declare module "net.neoforged.neoforge.client.event.ScreenEvent$MouseButtonReleased$Post" {
import {$ScreenEvent$MouseButtonReleased} from "net.neoforged.neoforge.client.event.ScreenEvent$MouseButtonReleased"
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ScreenEvent$MouseButtonReleased$Post$Result, $ScreenEvent$MouseButtonReleased$Post$Result$$Type} from "net.neoforged.neoforge.client.event.ScreenEvent$MouseButtonReleased$Post$Result"

export class $ScreenEvent$MouseButtonReleased$Post extends $ScreenEvent$MouseButtonReleased {
constructor(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer, arg4: boolean)

public "getMouseX"(): double
public "getMouseY"(): double
public "setResult"(arg0: $ScreenEvent$MouseButtonReleased$Post$Result$$Type): void
public "getResult"(): $ScreenEvent$MouseButtonReleased$Post$Result
public "wasReleaseHandled"(): boolean
public "getReleaseResult"(): boolean
get "mouseX"(): double
get "mouseY"(): double
set "result"(value: $ScreenEvent$MouseButtonReleased$Post$Result$$Type)
get "result"(): $ScreenEvent$MouseButtonReleased$Post$Result
get "releaseResult"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvent$MouseButtonReleased$Post$$Type = ($ScreenEvent$MouseButtonReleased$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenEvent$MouseButtonReleased$Post$$Original = $ScreenEvent$MouseButtonReleased$Post;}
declare module "net.neoforged.neoforge.client.event.GatherEffectScreenTooltipsEvent" {
import {$MobEffectInstance, $MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$EffectRenderingInventoryScreen, $EffectRenderingInventoryScreen$$Type} from "net.minecraft.client.gui.screens.inventory.EffectRenderingInventoryScreen"
import {$List, $List$$Type} from "java.util.List"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $GatherEffectScreenTooltipsEvent extends $Event {
constructor(arg0: $EffectRenderingInventoryScreen$$Type<(never)>, arg1: $MobEffectInstance$$Type, arg2: $List$$Type<($Component$$Type)>)

public "getEffectInstance"(): $MobEffectInstance
public "getTooltip"(): $List<($Component)>
public "getScreen"(): $EffectRenderingInventoryScreen<(never)>
get "effectInstance"(): $MobEffectInstance
get "tooltip"(): $List<($Component)>
get "screen"(): $EffectRenderingInventoryScreen<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GatherEffectScreenTooltipsEvent$$Type = ($GatherEffectScreenTooltipsEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GatherEffectScreenTooltipsEvent$$Original = $GatherEffectScreenTooltipsEvent;}
declare module "net.neoforged.neoforge.client.event.SelectMusicEvent" {
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Event} from "net.neoforged.bus.api.Event"
import {$SoundInstance, $SoundInstance$$Type} from "net.minecraft.client.resources.sounds.SoundInstance"
import {$Music, $Music$$Type} from "net.minecraft.sounds.Music"

export class $SelectMusicEvent extends $Event implements $ICancellableEvent$$Interface {
constructor(arg0: $Music$$Type, arg1: $SoundInstance$$Type)

public "overrideMusic"(arg0: $Music$$Type): void
public "getOriginalMusic"(): $Music
public "getPlayingMusic"(): $SoundInstance
public "setMusic"(arg0: $Music$$Type): void
public "getMusic"(): $Music
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "originalMusic"(): $Music
get "playingMusic"(): $SoundInstance
set "music"(value: $Music$$Type)
get "music"(): $Music
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SelectMusicEvent$$Type = ($SelectMusicEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SelectMusicEvent$$Original = $SelectMusicEvent;}
declare module "net.neoforged.neoforge.client.settings.KeyModifier" {
import {$Enum} from "java.lang.Enum"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$List} from "java.util.List"
import {$IKeyConflictContext$$Type} from "net.neoforged.neoforge.client.settings.IKeyConflictContext"
import {$InputConstants$Key, $InputConstants$Key$$Type} from "com.mojang.blaze3d.platform.InputConstants$Key"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $KeyModifier extends $Enum<($KeyModifier)> {
static readonly "SHIFT": $KeyModifier
static readonly "MODIFIER_VALUES": ($KeyModifier)[]
static readonly "ALT": $KeyModifier
static readonly "NONE": $KeyModifier
static readonly "CONTROL": $KeyModifier

public static "values"(): ($KeyModifier)[]
public static "valueOf"(arg0: StringJS): $KeyModifier
public "matches"(arg0: $InputConstants$Key$$Type): boolean
public "isActive"(arg0: $IKeyConflictContext$$Type): boolean
public "codes"(): ($InputConstants$Key)[]
public static "valueFromString"(arg0: StringJS): $KeyModifier
public static "getActiveModifiers"(): $List<($KeyModifier)>
/**
 * 
 * @deprecated
 */
public static "getActiveModifier"(): $KeyModifier
public static "isKeyCodeModifier"(arg0: $InputConstants$Key$$Type): boolean
public static "getKeyModifier"(arg0: $InputConstants$Key$$Type): $KeyModifier
public "getCombinedName"(arg0: $InputConstants$Key$$Type, arg1: $Supplier$$Type<($Component$$Type)>): $Component
get "activeModifiers"(): $List<($KeyModifier)>
get "activeModifier"(): $KeyModifier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyModifier$$Type = (("control") | ("shift") | ("alt") | ("none"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyModifier$$Original = $KeyModifier;}
declare module "net.neoforged.neoforge.client.event.ContainerScreenEvent" {
import {$AbstractContainerScreen} from "net.minecraft.client.gui.screens.inventory.AbstractContainerScreen"
import {$Event} from "net.neoforged.bus.api.Event"

export class $ContainerScreenEvent extends $Event {
public "getContainerScreen"(): $AbstractContainerScreen<(never)>
get "containerScreen"(): $AbstractContainerScreen<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerScreenEvent$$Type = ($ContainerScreenEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContainerScreenEvent$$Original = $ContainerScreenEvent;}
declare module "net.neoforged.neoforge.client.event.TextureAtlasStitchedEvent" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$TextureAtlas, $TextureAtlas$$Type} from "net.minecraft.client.renderer.texture.TextureAtlas"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"

export class $TextureAtlasStitchedEvent extends $Event implements $IModBusEvent$$Interface {
constructor(arg0: $TextureAtlas$$Type)

public "getAtlas"(): $TextureAtlas
get "atlas"(): $TextureAtlas
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureAtlasStitchedEvent$$Type = ($TextureAtlasStitchedEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextureAtlasStitchedEvent$$Original = $TextureAtlasStitchedEvent;}
declare module "net.neoforged.neoforge.client.event.ScreenEvent$MouseDragged" {
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ScreenEvent$MouseInput} from "net.neoforged.neoforge.client.event.ScreenEvent$MouseInput"

export class $ScreenEvent$MouseDragged extends $ScreenEvent$MouseInput {
constructor(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer, arg4: double, arg5: double)

public "getMouseX"(): double
public "getMouseY"(): double
public "getMouseButton"(): integer
public "getDragX"(): double
public "getDragY"(): double
get "mouseX"(): double
get "mouseY"(): double
get "mouseButton"(): integer
get "dragX"(): double
get "dragY"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvent$MouseDragged$$Type = ($ScreenEvent$MouseDragged);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenEvent$MouseDragged$$Original = $ScreenEvent$MouseDragged;}
declare module "net.neoforged.neoforge.client.event.RenderGuiEvent" {
import {$GuiGraphics} from "net.minecraft.client.gui.GuiGraphics"
import {$Event} from "net.neoforged.bus.api.Event"
import {$DeltaTracker} from "net.minecraft.client.DeltaTracker"

export class $RenderGuiEvent extends $Event {
public "getPartialTick"(): $DeltaTracker
public "getGuiGraphics"(): $GuiGraphics
get "partialTick"(): $DeltaTracker
get "guiGraphics"(): $GuiGraphics
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderGuiEvent$$Type = ($RenderGuiEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderGuiEvent$$Original = $RenderGuiEvent;}
declare module "net.neoforged.neoforge.client.event.ClientTickEvent$Pre" {
import {$ClientTickEvent} from "net.neoforged.neoforge.client.event.ClientTickEvent"

export class $ClientTickEvent$Pre extends $ClientTickEvent {
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientTickEvent$Pre$$Type = ($ClientTickEvent$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientTickEvent$Pre$$Original = $ClientTickEvent$Pre;}
declare module "net.neoforged.neoforge.client.event.ScreenEvent$CharacterTyped$Post" {
import {$ScreenEvent$CharacterTyped} from "net.neoforged.neoforge.client.event.ScreenEvent$CharacterTyped"
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export class $ScreenEvent$CharacterTyped$Post extends $ScreenEvent$CharacterTyped {
constructor(arg0: $Screen$$Type, arg1: character, arg2: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvent$CharacterTyped$Post$$Type = ($ScreenEvent$CharacterTyped$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenEvent$CharacterTyped$Post$$Original = $ScreenEvent$CharacterTyped$Post;}
declare module "net.neoforged.neoforge.client.event.ScreenEvent$MouseButtonReleased" {
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ScreenEvent$MouseInput} from "net.neoforged.neoforge.client.event.ScreenEvent$MouseInput"

export class $ScreenEvent$MouseButtonReleased extends $ScreenEvent$MouseInput {
constructor(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer)

public "getMouseX"(): double
public "getButton"(): integer
public "getMouseY"(): double
get "mouseX"(): double
get "button"(): integer
get "mouseY"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvent$MouseButtonReleased$$Type = ($ScreenEvent$MouseButtonReleased);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenEvent$MouseButtonReleased$$Original = $ScreenEvent$MouseButtonReleased;}
