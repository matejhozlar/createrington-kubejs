declare module "xaero.common.events.ClientEventsListener" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$HudSession$$Type} from "xaero.hud.HudSession"
import {$ToggleKeyMapping$$Type} from "net.minecraft.client.ToggleKeyMapping"

export class $ClientEventsListener {
constructor()

public "clientTickPost"(arg0: $HudSession$$Type): void
public "playerTickPost"(arg0: $HudSession$$Type): void
public "handleRenderStatusEffectOverlay"(arg0: $GuiGraphics$$Type): boolean
public "handleForceToggleKeyMapping"(arg0: $ToggleKeyMapping$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientEventsListener$$Type = ($ClientEventsListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientEventsListener$$Original = $ClientEventsListener;}
declare module "xaero.common.events.ModClientEvents" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$IXaeroMinimap$$Type} from "xaero.common.IXaeroMinimap"
import {$TextureAtlas$$Type} from "net.minecraft.client.renderer.texture.TextureAtlas"
import {$DeltaTracker$$Type} from "net.minecraft.client.DeltaTracker"

export class $ModClientEvents {
constructor(arg0: $IXaeroMinimap$$Type)

public "handleTextureStitchEventPost"(arg0: $TextureAtlas$$Type): void
public "handleRenderModOverlay"(arg0: $GuiGraphics$$Type, arg1: $DeltaTracker$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModClientEvents$$Type = ($ModClientEvents);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModClientEvents$$Original = $ModClientEvents;}
declare module "xaero.common.events.CommonEvents" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$HudMod$$Type} from "xaero.common.HudMod"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"

export class $CommonEvents {
constructor(arg0: $HudMod$$Type)

public "onServerStarting"(arg0: $MinecraftServer$$Type): void
public "onPlayerLogIn"(arg0: $Player$$Type): void
public "onServerStopped"(arg0: $MinecraftServer$$Type): void
public "onPlayerWorldJoin"(arg0: $ServerPlayer$$Type): void
public "handlePlayerTickStart"(arg0: $Player$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonEvents$$Type = ($CommonEvents);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CommonEvents$$Original = $CommonEvents;}
declare module "xaero.common.events.ClientEvents" {
import {$RealmsServer} from "com.mojang.realmsclient.dto.RealmsServer"
import {$HudMod$$Type} from "xaero.common.HudMod"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$ToggleKeyMapping$$Type} from "net.minecraft.client.ToggleKeyMapping"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$ChatType$Bound$$Type} from "net.minecraft.network.chat.ChatType$Bound"

export class $ClientEvents {
 "latestRealm": $RealmsServer

constructor(arg0: $HudMod$$Type)

public "handleClientSystemChatReceivedEvent"(arg0: $Component$$Type): boolean
public "handleClientPlayerChatReceivedEvent"(arg0: $ChatType$Bound$$Type, arg1: $Component$$Type, arg2: $GameProfile$$Type): boolean
public "handleGuiOpen"(arg0: $Screen$$Type): $Screen
public "getLastGuiOpen"(): any
public "worldUnload"(arg0: $LevelAccessor$$Type): void
public "handlePlayerSetSpawnEvent"(arg0: $BlockPos$$Type, arg1: $Level$$Type): void
public "handleRenderTickStart"(): void
public "handlePlayerTickStart"(arg0: $Player$$Type): void
public "handleClientTickStart"(): void
public "handleClientSendChatEvent"(arg0: StringJS): boolean
public "handleDrawScreenEventPost"(arg0: $Screen$$Type): void
public "handleRenderGameOverlayEventPre"(arg0: $GuiGraphics$$Type, arg1: float): void
public "handleRenderStatusEffectOverlay"(arg0: $GuiGraphics$$Type): boolean
public "handleRenderGameOverlayEventPost"(): void
public "handleForceToggleKeyMapping"(arg0: $ToggleKeyMapping$$Type): boolean
public "handleRenderCrosshairOverlay"(arg0: $GuiGraphics$$Type): boolean
get "lastGuiOpen"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientEvents$$Type = ($ClientEvents);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientEvents$$Original = $ClientEvents;}
declare module "xaero.common.events.ModCommonEvents" {
import {$IXaeroMinimap$$Type} from "xaero.common.IXaeroMinimap"

export class $ModCommonEvents {
constructor(arg0: $IXaeroMinimap$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModCommonEvents$$Type = ($ModCommonEvents);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModCommonEvents$$Original = $ModCommonEvents;}
