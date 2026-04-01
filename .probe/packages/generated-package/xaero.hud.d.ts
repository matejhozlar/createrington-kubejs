declare module "xaero.hud.Hud" {
import {$PushboxManager, $PushboxManager$$Type} from "xaero.hud.pushbox.PushboxManager"
import {$HudEventHandler, $HudEventHandler$$Type} from "xaero.hud.event.HudEventHandler"
import {$ModuleManager, $ModuleManager$$Type} from "xaero.hud.module.ModuleManager"
import {$HudPresetManager, $HudPresetManager$$Type} from "xaero.hud.preset.HudPresetManager"
import {$OldSystemCompatibility, $OldSystemCompatibility$$Type} from "xaero.hud.compat.OldSystemCompatibility"
import {$ModuleSessionHandler, $ModuleSessionHandler$$Type} from "xaero.hud.module.ModuleSessionHandler"

export class $Hud {
constructor(arg0: $ModuleManager$$Type, arg1: $PushboxManager$$Type, arg2: $HudPresetManager$$Type, arg3: $HudEventHandler$$Type, arg4: $ModuleSessionHandler$$Type, arg5: $OldSystemCompatibility$$Type)

public "getPushboxManager"(): $PushboxManager
public "getSessionHandler"(): $ModuleSessionHandler
public "getPresetManager"(): $HudPresetManager
public "getModuleManager"(): $ModuleManager
public "getOldSystemCompatibility"(): $OldSystemCompatibility
public "getEventHandler"(): $HudEventHandler
get "pushboxManager"(): $PushboxManager
get "sessionHandler"(): $ModuleSessionHandler
get "presetManager"(): $HudPresetManager
get "moduleManager"(): $ModuleManager
get "oldSystemCompatibility"(): $OldSystemCompatibility
get "eventHandler"(): $HudEventHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Hud$$Type = ($Hud);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Hud$$Original = $Hud;}
declare module "xaero.hud.HudSession" {
import {$LocalPlayer$$Type} from "net.minecraft.client.player.LocalPlayer"
import {$MultiTextureRenderTypeRendererProvider} from "xaero.common.graphics.renderer.multitexture.MultiTextureRenderTypeRendererProvider"
import {$HudMod, $HudMod$$Type} from "xaero.common.HudMod"
import {$ModuleSession} from "xaero.hud.module.ModuleSession"
import {$ControlsHandler} from "xaero.common.controls.ControlsHandler"
import {$ClientPacketListener$$Type} from "net.minecraft.client.multiplayer.ClientPacketListener"
import {$KeyMappingTickHandler} from "xaero.hud.controls.key.KeyMappingTickHandler"
import {$HudModule$$Type} from "xaero.hud.module.HudModule"

export class $HudSession {
constructor(arg0: $HudMod$$Type)

public "init"(arg0: $ClientPacketListener$$Type): void
public static "getCurrentSession"(): $HudSession
/**
 * 
 * @deprecated
 */
public "getControls"(): $ControlsHandler
public static "getForPlayer"(arg0: $LocalPlayer$$Type): $HudSession
public "getSession"<MS extends $ModuleSession<(object)>>(arg0: $HudModule$$Type<(MS)>): MS
/**
 * 
 * @deprecated
 */
public "getMultiTextureRenderTypeRenderers"(): $MultiTextureRenderTypeRendererProvider
public "getHudMod"(): $HudMod
public "tryCleanup"(): void
public "getKeyMappingTickHandler"(): $KeyMappingTickHandler
get "currentSession"(): $HudSession
get "controls"(): $ControlsHandler
get "multiTextureRenderTypeRenderers"(): $MultiTextureRenderTypeRendererProvider
get "hudMod"(): $HudMod
get "keyMappingTickHandler"(): $KeyMappingTickHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HudSession$$Type = ($HudSession);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HudSession$$Original = $HudSession;}
