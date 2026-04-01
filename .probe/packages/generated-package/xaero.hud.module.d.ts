declare module "xaero.hud.module.ModuleManager" {
import {$Iterable} from "java.lang.Iterable"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$HudModule, $HudModule$$Type} from "xaero.hud.module.HudModule"

export class $ModuleManager {
constructor()

public "get"(arg0: $ResourceLocation$$Type): $HudModule<(never)>
public "register"(arg0: $HudModule$$Type<(never)>): void
public "getModules"(): $Iterable<($HudModule<(never)>)>
get "modules"(): $Iterable<($HudModule<(never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleManager$$Type = ($ModuleManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModuleManager$$Original = $ModuleManager;}
declare module "xaero.hud.module.HudModule" {
import {$HudMod$$Type} from "xaero.common.HudMod"
import {$ModuleTransform, $ModuleTransform$$Type} from "xaero.hud.module.ModuleTransform"
import {$BooleanConfigOption$$Type} from "xaero.lib.common.config.option.BooleanConfigOption"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ModuleSession} from "xaero.hud.module.ModuleSession"
import {$ClientPacketListener$$Type} from "net.minecraft.client.multiplayer.ClientPacketListener"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$PushboxHandler$State} from "xaero.hud.pushbox.PushboxHandler$State"
import {$ClientConfigManager$$Type} from "xaero.lib.client.config.ClientConfigManager"
import {$TriFunction$$Type} from "org.apache.commons.lang3.function.TriFunction"
import {$IModuleRenderer, $IModuleRenderer$$Type} from "xaero.hud.render.module.IModuleRenderer"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"

export class $HudModule<MS extends $ModuleSession<(object)>> {
constructor(arg0: $ResourceLocation$$Type, arg1: $Component$$Type, arg2: $TriFunction$$Type<($HudMod), ($HudModule<(MS)>), ($ClientPacketListener), (MS)>, arg3: $Supplier$$Type<($IModuleRenderer$$Type<(MS)>)>, arg4: $Function$$Type<($Screen), ($Screen$$Type)>, arg5: $BooleanConfigOption$$Type)

public "getId"(): $ResourceLocation
public "isActive"(arg0: $ClientConfigManager$$Type): boolean
public "getDisplayName"(): $Component
public "getCurrentSession"(): MS
public "setActive"(arg0: $ClientConfigManager$$Type, arg1: boolean): void
public "getRenderer"(): $IModuleRenderer<(MS)>
public "getPushState"(): $PushboxHandler$State
public "getUsedTransform"(): $ModuleTransform
public "setTransform"(arg0: $ModuleTransform$$Type): void
public "getConfigScreenFactory"(): $Function<($Screen), ($Screen)>
public "getUnconfirmedTransform"(): $ModuleTransform
public "cancelTransform"(): void
public "confirmTransform"(): void
public "getConfirmedTransform"(): $ModuleTransform
get "id"(): $ResourceLocation
get "displayName"(): $Component
get "currentSession"(): MS
get "renderer"(): $IModuleRenderer<(MS)>
get "pushState"(): $PushboxHandler$State
get "usedTransform"(): $ModuleTransform
set "transform"(value: $ModuleTransform$$Type)
get "configScreenFactory"(): $Function<($Screen), ($Screen)>
get "unconfirmedTransform"(): $ModuleTransform
get "confirmedTransform"(): $ModuleTransform
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HudModule$$Type<MS> = ($HudModule<(MS)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HudModule$$Original<MS> = $HudModule<(MS)>;}
declare module "xaero.hud.module.ModuleSession" {
import {$HudMod, $HudMod$$Type} from "xaero.common.HudMod"
import {$HudModule, $HudModule$$Type} from "xaero.hud.module.HudModule"

export class $ModuleSession<MS extends $ModuleSession<(object)>> {
constructor(arg0: $HudMod$$Type, arg1: $HudModule$$Type<(MS)>)

public "getModule"(): $HudModule<(MS)>
public "close"(): void
public "isActive"(): boolean
public "getWidth"(arg0: double): integer
public "shouldFlipHorizontally"(arg0: integer, arg1: double): boolean
public "shouldFlipVertically"(arg0: integer, arg1: double): boolean
public "getEffectiveY"(arg0: integer, arg1: double): integer
public "getEffectiveX"(arg0: integer, arg1: double): integer
public "isFlippedHor"(): boolean
public "isFlippedVer"(): boolean
public "getHeight"(arg0: double): integer
public "prePotentialRender"(): void
public "getModMain"(): $HudMod
public "isCentered"(): boolean
public "onPostGameOverlay"(): void
get "module"(): $HudModule<(MS)>
get "active"(): boolean
get "flippedHor"(): boolean
get "flippedVer"(): boolean
get "modMain"(): $HudMod
get "centered"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleSession$$Type<MS> = ($ModuleSession<(MS)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModuleSession$$Original<MS> = $ModuleSession<(MS)>;}
declare module "xaero.hud.module.ModuleTransform" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ModuleTransform {
 "fromRight": boolean
 "fromOldSystem": boolean
 "centered": boolean
 "flippedVer": boolean
 "x": integer
 "y": integer
 "flippedHor": boolean
 "fromBottom": boolean

constructor()

public "copy"(): $ModuleTransform
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleTransform$$Type = ($ModuleTransform);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModuleTransform$$Original = $ModuleTransform;}
declare module "xaero.hud.module.ModuleSessionHandler" {
import {$HudMod$$Type} from "xaero.common.HudMod"
import {$ModuleManager$$Type} from "xaero.hud.module.ModuleManager"
import {$ModuleSession$$Type} from "xaero.hud.module.ModuleSession"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$ClientPacketListener$$Type} from "net.minecraft.client.multiplayer.ClientPacketListener"
import {$HudModule$$Type} from "xaero.hud.module.HudModule"

export class $ModuleSessionHandler {
constructor(arg0: $ModuleManager$$Type)

public "closeSessions"(arg0: $HudMod$$Type): void
public "resetSessions"(arg0: $HudMod$$Type, arg1: $ClientPacketListener$$Type, arg2: $BiConsumer$$Type<($HudModule<(never)>), ($ModuleSession<(never)>)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleSessionHandler$$Type = ($ModuleSessionHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModuleSessionHandler$$Original = $ModuleSessionHandler;}
