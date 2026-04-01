declare module "xaero.hud.minimap.waypoint.WaypointSession" {
import {$HudMod$$Type} from "xaero.common.HudMod"
import {$WaypointSharingHandler} from "xaero.hud.minimap.waypoint.WaypointSharingHandler"
import {$TemporaryWaypointHandler} from "xaero.hud.minimap.waypoint.TemporaryWaypointHandler"
import {$Minecraft} from "net.minecraft.client.Minecraft"
import {$WaypointDeleter} from "xaero.hud.minimap.waypoint.render.WaypointDeleter"
import {$WaypointTeleport} from "xaero.hud.minimap.waypoint.WaypointTeleport"
import {$MinimapSession, $MinimapSession$$Type} from "xaero.hud.minimap.module.MinimapSession"
import {$DeathpointHandler} from "xaero.hud.minimap.waypoint.DeathpointHandler"
import {$WaypointCollector} from "xaero.hud.minimap.waypoint.WaypointCollector"
import {$DestinationHandler} from "xaero.hud.minimap.waypoint.DestinationHandler"

export class $WaypointSession {
constructor(arg0: $HudMod$$Type, arg1: $MinimapSession$$Type)

public "getCollector"(): $WaypointCollector
public "getSession"(): $MinimapSession
public "getSetChangedTime"(): long
public "getTemporaryHandler"(): $TemporaryWaypointHandler
public "getSharing"(): $WaypointSharingHandler
public "setSetChangedTime"(arg0: long): void
public "getMc"(): $Minecraft
public "getDeathpointHandler"(): $DeathpointHandler
public "getTeleport"(): $WaypointTeleport
public "getDestinationHandler"(): $DestinationHandler
public "getDeleter"(): $WaypointDeleter
get "collector"(): $WaypointCollector
get "session"(): $MinimapSession
get "setChangedTime"(): long
get "temporaryHandler"(): $TemporaryWaypointHandler
get "sharing"(): $WaypointSharingHandler
set "setChangedTime"(value: long)
get "mc"(): $Minecraft
get "deathpointHandler"(): $DeathpointHandler
get "teleport"(): $WaypointTeleport
get "destinationHandler"(): $DestinationHandler
get "deleter"(): $WaypointDeleter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointSession$$Type = ($WaypointSession);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WaypointSession$$Original = $WaypointSession;}
declare module "xaero.hud.minimap.waypoint.WaypointColor" {
import {$Enum} from "java.lang.Enum"
import {$Component} from "net.minecraft.network.chat.Component"

export class $WaypointColor extends $Enum<($WaypointColor)> {
static readonly "GOLD": $WaypointColor
static readonly "GRAY": $WaypointColor
static readonly "AQUA": $WaypointColor
static readonly "WHITE": $WaypointColor
static readonly "BLUE": $WaypointColor
static readonly "DARK_AQUA": $WaypointColor
static readonly "PURPLE": $WaypointColor
static readonly "DARK_BLUE": $WaypointColor
static readonly "GREEN": $WaypointColor
static readonly "RED": $WaypointColor
static readonly "DARK_PURPLE": $WaypointColor
static readonly "DARK_RED": $WaypointColor
static readonly "BLACK": $WaypointColor
static readonly "DARK_GREEN": $WaypointColor
static readonly "YELLOW": $WaypointColor
static readonly "DARK_GRAY": $WaypointColor

public "getName"(): $Component
public static "values"(): ($WaypointColor)[]
public static "valueOf"(arg0: StringJS): $WaypointColor
public static "fromIndex"(arg0: integer): $WaypointColor
public "getFormat"(): character
public static "getRandom"(): $WaypointColor
public "getHex"(): integer
get "name"(): $Component
get "format"(): character
get "random"(): $WaypointColor
get "hex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointColor$$Type = (("black") | ("dark_blue") | ("dark_green") | ("dark_aqua") | ("dark_red") | ("dark_purple") | ("gold") | ("gray") | ("dark_gray") | ("blue") | ("green") | ("aqua") | ("red") | ("purple") | ("yellow") | ("white"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WaypointColor$$Original = $WaypointColor;}
declare module "xaero.hud.minimap.waypoint.render.WaypointMapRenderer" {
import {$MultiTextureRenderTypeRendererProvider$$Type} from "xaero.common.graphics.renderer.multitexture.MultiTextureRenderTypeRendererProvider"
import {$MultiBufferSource$BufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"
import {$Waypoint, $Waypoint$$Type} from "xaero.common.minimap.waypoints.Waypoint"
import {$MinimapElementRenderInfo$$Type} from "xaero.hud.minimap.element.render.MinimapElementRenderInfo"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$MinimapElementRenderProvider} from "xaero.hud.minimap.element.render.MinimapElementRenderProvider"
import {$WaypointsManager$$Type} from "xaero.common.minimap.waypoints.WaypointsManager"
import {$MinimapRendererHelper$$Type} from "xaero.common.minimap.render.MinimapRendererHelper"
import {$WaypointMapRenderContext} from "xaero.hud.minimap.waypoint.render.WaypointMapRenderContext"
import {$MinimapElementRenderer} from "xaero.common.minimap.element.render.MinimapElementRenderer"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Window$$Type} from "com.mojang.blaze3d.platform.Window"
import {$MinimapSession$$Type} from "xaero.hud.minimap.module.MinimapSession"
import {$MinimapElementRenderLocation$$Type} from "xaero.hud.minimap.element.render.MinimapElementRenderLocation"

export class $WaypointMapRenderer extends $MinimapElementRenderer<($Waypoint), ($WaypointMapRenderContext)> {
public "getOrder"(): integer
public "renderElement"(arg0: any, arg1: boolean, arg2: boolean, arg3: double, arg4: float, arg5: double, arg6: double, arg7: $MinimapElementRenderInfo$$Type, arg8: $GuiGraphics$$Type, arg9: $MultiBufferSource$BufferSource$$Type): boolean
public "renderElement"(arg0: $Waypoint$$Type, arg1: boolean, arg2: boolean, arg3: double, arg4: float, arg5: double, arg6: double, arg7: $MinimapElementRenderInfo$$Type, arg8: $GuiGraphics$$Type, arg9: $MultiBufferSource$BufferSource$$Type): boolean
public "drawSetChange"(arg0: $MinimapSession$$Type, arg1: $GuiGraphics$$Type, arg2: $Window$$Type): void
/**
 * 
 * @deprecated
 */
public "drawSetChange"(arg0: $WaypointsManager$$Type, arg1: $GuiGraphics$$Type, arg2: $Window$$Type): void
public "postRender"(arg0: $MinimapElementRenderInfo$$Type, arg1: $MultiBufferSource$BufferSource$$Type, arg2: $MultiTextureRenderTypeRendererProvider$$Type): void
public "drawIconOnGUI"(arg0: $GuiGraphics$$Type, arg1: $MinimapRendererHelper$$Type, arg2: $Waypoint$$Type, arg3: integer, arg4: integer, arg5: integer, arg6: $MultiBufferSource$BufferSource$$Type, arg7: $VertexConsumer$$Type, arg8: $VertexConsumer$$Type): void
/**
 * 
 * @deprecated
 */
public "drawIconOnGUI"(arg0: $GuiGraphics$$Type, arg1: $MinimapRendererHelper$$Type, arg2: $Waypoint$$Type, arg3: integer, arg4: integer, arg5: $MultiBufferSource$BufferSource$$Type, arg6: $VertexConsumer$$Type, arg7: $VertexConsumer$$Type): void
public "shouldRender"(arg0: $MinimapElementRenderLocation$$Type): boolean
public "preRender"(arg0: $MinimapElementRenderInfo$$Type, arg1: $MultiBufferSource$BufferSource$$Type, arg2: $MultiTextureRenderTypeRendererProvider$$Type): void
/**
 * 
 * @deprecated
 */
public "updateWaypointCollection"(): void
/**
 * 
 * @deprecated
 */
public "getProvider"(): $MinimapElementRenderProvider
get "order"(): integer
get "provider"(): $MinimapElementRenderProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointMapRenderer$$Type = ($WaypointMapRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WaypointMapRenderer$$Original = $WaypointMapRenderer;}
declare module "xaero.hud.minimap.waypoint.set.WaypointSet" {
import {$Iterable} from "java.lang.Iterable"
import {$Collection$$Type} from "java.util.Collection"
import {$Waypoint, $Waypoint$$Type} from "xaero.common.minimap.waypoints.Waypoint"
import {$List$$Type} from "java.util.List"

export class $WaypointSet {
public "getName"(): StringJS
public "remove"(arg0: $Waypoint$$Type): void
public "remove"(arg0: integer): $Waypoint
public "size"(): integer
public "get"(arg0: integer): $Waypoint
public "clear"(): void
public "isEmpty"(): boolean
public "add"(arg0: $Waypoint$$Type, arg1: boolean): void
public "add"(arg0: $Waypoint$$Type): void
public "addAll"(arg0: $Collection$$Type<($Waypoint$$Type)>, arg1: boolean): void
public "addAll"(arg0: $Collection$$Type<($Waypoint$$Type)>): void
public "set"(arg0: integer, arg1: $Waypoint$$Type): $Waypoint
public "removeAll"(arg0: $Collection$$Type<($Waypoint$$Type)>): void
public "addTo"(arg0: $List$$Type<($Waypoint$$Type)>): void
public "getWaypoints"(): $Iterable<($Waypoint)>
get "name"(): StringJS
get "empty"(): boolean
get "waypoints"(): $Iterable<($Waypoint)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointSet$$Type = ($WaypointSet);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WaypointSet$$Original = $WaypointSet;}
declare module "xaero.hud.minimap.waypoint.WaypointPurpose" {
import {$Enum} from "java.lang.Enum"

export class $WaypointPurpose extends $Enum<($WaypointPurpose)> {
static readonly "OLD_DEATH": $WaypointPurpose
static readonly "DESTINATION": $WaypointPurpose
static readonly "DEATH": $WaypointPurpose
static readonly "NORMAL": $WaypointPurpose

public static "values"(): ($WaypointPurpose)[]
public static "valueOf"(arg0: StringJS): $WaypointPurpose
public "isDeath"(): boolean
public "isDestination"(): boolean
get "death"(): boolean
get "destination"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointPurpose$$Type = (("normal") | ("death") | ("old_death") | ("destination"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WaypointPurpose$$Original = $WaypointPurpose;}
declare module "xaero.hud.minimap.waypoint.render.world.WaypointWorldRenderer" {
import {$MinimapElementRenderer} from "xaero.hud.minimap.element.render.MinimapElementRenderer"
import {$MultiTextureRenderTypeRendererProvider$$Type} from "xaero.common.graphics.renderer.multitexture.MultiTextureRenderTypeRendererProvider"
import {$WaypointWorldRenderContext} from "xaero.hud.minimap.waypoint.render.world.WaypointWorldRenderContext"
import {$MultiBufferSource$BufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Waypoint, $Waypoint$$Type} from "xaero.common.minimap.waypoints.Waypoint"
import {$MinimapElementRenderInfo$$Type} from "xaero.hud.minimap.element.render.MinimapElementRenderInfo"
import {$MinimapElementRenderLocation$$Type} from "xaero.hud.minimap.element.render.MinimapElementRenderLocation"

export class $WaypointWorldRenderer extends $MinimapElementRenderer<($Waypoint), ($WaypointWorldRenderContext)> {
public "getOrder"(): integer
public "renderElement"(arg0: any, arg1: boolean, arg2: boolean, arg3: double, arg4: float, arg5: double, arg6: double, arg7: $MinimapElementRenderInfo$$Type, arg8: $GuiGraphics$$Type, arg9: $MultiBufferSource$BufferSource$$Type): boolean
public "renderElement"(arg0: $Waypoint$$Type, arg1: boolean, arg2: boolean, arg3: double, arg4: float, arg5: double, arg6: double, arg7: $MinimapElementRenderInfo$$Type, arg8: $GuiGraphics$$Type, arg9: $MultiBufferSource$BufferSource$$Type): boolean
public "postRender"(arg0: $MinimapElementRenderInfo$$Type, arg1: $MultiBufferSource$BufferSource$$Type, arg2: $MultiTextureRenderTypeRendererProvider$$Type): void
public "shouldRender"(arg0: $MinimapElementRenderLocation$$Type): boolean
public "preRender"(arg0: $MinimapElementRenderInfo$$Type, arg1: $MultiBufferSource$BufferSource$$Type, arg2: $MultiTextureRenderTypeRendererProvider$$Type): void
get "order"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointWorldRenderer$$Type = ($WaypointWorldRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WaypointWorldRenderer$$Original = $WaypointWorldRenderer;}
declare module "xaero.hud.minimap.waypoint.WaypointSharingHandler" {
import {$Waypoint$$Type} from "xaero.common.minimap.waypoints.Waypoint"
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$MinimapWorld$$Type} from "xaero.hud.minimap.world.MinimapWorld"

export class $WaypointSharingHandler {
static readonly "WAYPOINT_OLD_SHARE_PREFIX": StringJS
static readonly "WAYPOINT_ADD_PREFIX": StringJS
static readonly "WAYPOINT_SHARE_PREFIX": StringJS

public "shareWaypoint"(arg0: $Screen$$Type, arg1: $Waypoint$$Type, arg2: $MinimapWorld$$Type): void
public "onWaypointReceived"(arg0: StringJS, arg1: StringJS): void
public "onWaypointAdd"(arg0: (StringJS)[]): void
public "onShareConfirmationResult"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointSharingHandler$$Type = ($WaypointSharingHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WaypointSharingHandler$$Original = $WaypointSharingHandler;}
declare module "xaero.hud.minimap.waypoint.render.WaypointsGuiRenderer" {
import {$WaypointMapRenderer} from "xaero.hud.minimap.waypoint.render.WaypointMapRenderer"
import {$MinimapElementRenderProvider} from "xaero.hud.minimap.element.render.MinimapElementRenderProvider"

/**
 * 
 * @deprecated
 */
export class $WaypointsGuiRenderer extends $WaypointMapRenderer {
/**
 * 
 * @deprecated
 */
public "getProvider"(): $MinimapElementRenderProvider
get "provider"(): $MinimapElementRenderProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointsGuiRenderer$$Type = ($WaypointsGuiRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WaypointsGuiRenderer$$Original = $WaypointsGuiRenderer;}
