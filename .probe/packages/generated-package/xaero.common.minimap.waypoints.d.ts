declare module "xaero.common.minimap.waypoints.WaypointWorld" {
import {$Waypoint} from "xaero.common.minimap.waypoints.Waypoint"
import {$WaypointSet} from "xaero.common.minimap.waypoints.WaypointSet"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$MinimapWorld} from "xaero.hud.minimap.world.MinimapWorld"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$WaypointWorldContainer, $WaypointWorldContainer$$Type} from "xaero.common.minimap.waypoints.WaypointWorldContainer"
import {$HashMap} from "java.util.HashMap"

/**
 * 
 * @deprecated
 */
export class $WaypointWorld extends $MinimapWorld {
/**
 * 
 * @deprecated
 */
constructor(arg0: $WaypointWorldContainer$$Type, arg1: StringJS, arg2: $ResourceKey$$Type<($Level)>)

/**
 * 
 * @deprecated
 */
public "getId"(): StringJS
/**
 * 
 * @deprecated
 */
public "getContainer"(): $WaypointWorldContainer
/**
 * 
 * @deprecated
 */
public "setId"(arg0: StringJS): void
/**
 * 
 * @deprecated
 */
public "getServerWaypoints"(): $HashMap<(integer), ($Waypoint)>
/**
 * 
 * @deprecated
 */
public "addSet"(arg0: StringJS): void
/**
 * 
 * @deprecated
 */
public "setContainer"(arg0: $WaypointWorldContainer$$Type): void
/**
 * 
 * @deprecated
 */
public "getCurrent"(): StringJS
/**
 * 
 * @deprecated
 */
public "getFullId"(): StringJS
/**
 * 
 * @deprecated
 */
public "getSets"(): $HashMap<(StringJS), ($WaypointSet)>
/**
 * 
 * @deprecated
 */
public "getDimId"(): $ResourceKey<($Level)>
/**
 * 
 * @deprecated
 */
public "getCurrentSet"(): $WaypointSet
/**
 * 
 * @deprecated
 */
public "getServerWaypointsDisabled"(): $HashMap<(StringJS), (boolean)>
/**
 * 
 * @deprecated
 */
public "getInternalWorldKey"(): StringJS
/**
 * 
 * @deprecated
 */
public "setCurrent"(arg0: StringJS): void
get "id"(): StringJS
get "container"(): $WaypointWorldContainer
set "id"(value: StringJS)
get "serverWaypoints"(): $HashMap<(integer), ($Waypoint)>
set "container"(value: $WaypointWorldContainer$$Type)
get "current"(): StringJS
get "fullId"(): StringJS
get "sets"(): $HashMap<(StringJS), ($WaypointSet)>
get "dimId"(): $ResourceKey<($Level)>
get "currentSet"(): $WaypointSet
get "serverWaypointsDisabled"(): $HashMap<(StringJS), (boolean)>
get "internalWorldKey"(): StringJS
set "current"(value: StringJS)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointWorld$$Type = ($WaypointWorld);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WaypointWorld$$Original = $WaypointWorld;}
declare module "xaero.common.minimap.waypoints.WaypointWorldRootContainer" {
import {$HudMod$$Type} from "xaero.common.HudMod"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$MinimapWorld} from "xaero.hud.minimap.world.MinimapWorld"
import {$MinimapWorldRootContainer} from "xaero.hud.minimap.world.container.MinimapWorldRootContainer"
import {$WaypointsSort} from "xaero.common.minimap.waypoints.WaypointsSort"
import {$XaeroMinimapSession$$Type} from "xaero.common.XaeroMinimapSession"
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$XaeroPath$$Type} from "xaero.hud.path.XaeroPath"
import {$IXaeroMinimap$$Type} from "xaero.common.IXaeroMinimap"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$MinimapSession$$Type} from "xaero.hud.minimap.module.MinimapSession"
import {$DimensionType} from "net.minecraft.world.level.dimension.DimensionType"
import {$WaypointWorldConnectionManager} from "xaero.common.minimap.waypoints.WaypointWorldConnectionManager"

/**
 * 
 * @deprecated
 */
export class $WaypointWorldRootContainer extends $MinimapWorldRootContainer {
/**
 * 
 * @deprecated
 */
constructor(arg0: $IXaeroMinimap$$Type, arg1: $XaeroMinimapSession$$Type, arg2: StringJS)
/**
 * 
 * @deprecated
 */
constructor(arg0: $HudMod$$Type, arg1: $MinimapSession$$Type, arg2: $XaeroPath$$Type)

/**
 * 
 * @deprecated
 */
public "loadConfig"(): void
/**
 * 
 * @deprecated
 */
public "saveConfig"(): void
/**
 * 
 * @deprecated
 */
public "isTeleportationEnabled"(): boolean
/**
 * 
 * @deprecated
 */
public "getServerTeleportCommandFormat"(): StringJS
/**
 * 
 * @deprecated
 */
public "setServerTeleportCommandFormat"(arg0: StringJS): void
/**
 * 
 * @deprecated
 */
public "isUsingDefaultTeleportCommand"(): boolean
/**
 * 
 * @deprecated
 */
public "setUsingDefaultTeleportCommand"(arg0: boolean): void
/**
 * 
 * @deprecated
 */
public "getSortType"(): $WaypointsSort
/**
 * 
 * @deprecated
 */
public "isSortReversed"(): boolean
/**
 * 
 * @deprecated
 */
public "getDimensionType"(arg0: $ResourceKey$$Type<($Level)>): $DimensionType
/**
 * 
 * @deprecated
 */
public "setIgnoreHeightmaps"(arg0: boolean): void
/**
 * 
 * @deprecated
 */
public "setUsingMultiworldDetection"(arg0: boolean): void
/**
 * 
 * @deprecated
 */
public "isIgnoreHeightmaps"(): boolean
/**
 * 
 * @deprecated
 */
public "isUsingMultiworldDetection"(): boolean
/**
 * 
 * @deprecated
 */
public "setTeleportationEnabled"(arg0: boolean): void
/**
 * 
 * @deprecated
 */
public "updateDimensionType"(arg0: $ClientLevel$$Type): void
/**
 * 
 * @deprecated
 */
public "updateConnectionsField"(arg0: $XaeroMinimapSession$$Type): void
/**
 * 
 * @deprecated
 */
public "getSubWorldConnections"(): $WaypointWorldConnectionManager
/**
 * 
 * @deprecated
 */
public "getDefaultMultiworldId"(): StringJS
/**
 * 
 * @deprecated
 */
public "setDefaultMultiworldId"(arg0: StringJS): void
/**
 * 
 * @deprecated
 */
public "isIgnoreServerLevelId"(): boolean
/**
 * 
 * @deprecated
 */
public "toggleSortType"(): void
/**
 * 
 * @deprecated
 */
public "toggleSortReversed"(): void
/**
 * 
 * @deprecated
 */
public "getDimensionScale"(arg0: $ResourceKey$$Type<($Level)>): double
/**
 * 
 * @deprecated
 */
public "getRootContainer"(): $WaypointWorldRootContainer
/**
 * 
 * @deprecated
 */
public "getServerTeleportCommandRotationFormat"(): StringJS
/**
 * 
 * @deprecated
 */
public "setServerTeleportCommandRotationFormat"(arg0: StringJS): void
/**
 * 
 * @deprecated
 */
public "getFirstWorld"(): $MinimapWorld
get "teleportationEnabled"(): boolean
get "serverTeleportCommandFormat"(): StringJS
set "serverTeleportCommandFormat"(value: StringJS)
get "usingDefaultTeleportCommand"(): boolean
set "usingDefaultTeleportCommand"(value: boolean)
get "sortType"(): $WaypointsSort
get "sortReversed"(): boolean
set "ignoreHeightmaps"(value: boolean)
set "usingMultiworldDetection"(value: boolean)
get "ignoreHeightmaps"(): boolean
get "usingMultiworldDetection"(): boolean
set "teleportationEnabled"(value: boolean)
get "subWorldConnections"(): $WaypointWorldConnectionManager
get "defaultMultiworldId"(): StringJS
set "defaultMultiworldId"(value: StringJS)
get "ignoreServerLevelId"(): boolean
get "rootContainer"(): $WaypointWorldRootContainer
get "serverTeleportCommandRotationFormat"(): StringJS
set "serverTeleportCommandRotationFormat"(value: StringJS)
get "firstWorld"(): $MinimapWorld
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointWorldRootContainer$$Type = ($WaypointWorldRootContainer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WaypointWorldRootContainer$$Original = $WaypointWorldRootContainer;}
declare module "xaero.common.minimap.waypoints.WaypointVisibilityType" {
import {$Enum} from "java.lang.Enum"
import {$Component} from "net.minecraft.network.chat.Component"

export class $WaypointVisibilityType extends $Enum<($WaypointVisibilityType)> {
static readonly "WORLD_MAP_LOCAL": $WaypointVisibilityType
static readonly "LOCAL": $WaypointVisibilityType
static readonly "GLOBAL": $WaypointVisibilityType
static readonly "WORLD_MAP_GLOBAL": $WaypointVisibilityType

public static "values"(): ($WaypointVisibilityType)[]
public static "valueOf"(arg0: StringJS): $WaypointVisibilityType
public "isGlobal"(): boolean
public "getTranslation"(): $Component
get "global"(): boolean
get "translation"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointVisibilityType$$Type = (("local") | ("global") | ("world_map_local") | ("world_map_global"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WaypointVisibilityType$$Original = $WaypointVisibilityType;}
declare module "xaero.common.minimap.waypoints.WaypointWorldContainer" {
import {$ArrayList} from "java.util.ArrayList"
import {$HudMod$$Type} from "xaero.common.HudMod"
import {$File} from "java.io.File"
import {$MinimapWorld} from "xaero.hud.minimap.world.MinimapWorld"
import {$MinimapWorldRootContainer$$Type} from "xaero.hud.minimap.world.container.MinimapWorldRootContainer"
import {$WaypointWorld, $WaypointWorld$$Type} from "xaero.common.minimap.waypoints.WaypointWorld"
import {$XaeroMinimapSession$$Type} from "xaero.common.XaeroMinimapSession"
import {$WaypointWorldRootContainer, $WaypointWorldRootContainer$$Type} from "xaero.common.minimap.waypoints.WaypointWorldRootContainer"
import {$XaeroPath$$Type} from "xaero.hud.path.XaeroPath"
import {$IXaeroMinimap$$Type} from "xaero.common.IXaeroMinimap"
import {$MinimapWorldContainer} from "xaero.hud.minimap.world.container.MinimapWorldContainer"
import {$MinimapSession$$Type} from "xaero.hud.minimap.module.MinimapSession"

/**
 * 
 * @deprecated
 */
export class $WaypointWorldContainer extends $MinimapWorldContainer {
/**
 * 
 * @deprecated
 */
constructor(arg0: $IXaeroMinimap$$Type, arg1: $XaeroMinimapSession$$Type, arg2: StringJS, arg3: $WaypointWorldRootContainer$$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: $HudMod$$Type, arg1: $MinimapSession$$Type, arg2: $XaeroPath$$Type, arg3: $MinimapWorldRootContainer$$Type)

/**
 * 
 * @deprecated
 */
public "getName"(arg0: StringJS): StringJS
/**
 * 
 * @deprecated
 */
public "isEmpty"(): boolean
/**
 * 
 * @deprecated
 */
public "getKey"(): StringJS
/**
 * 
 * @deprecated
 */
public "addName"(arg0: StringJS, arg1: StringJS): void
/**
 * 
 * @deprecated
 */
public "getFullName"(arg0: StringJS, arg1: StringJS): StringJS
/**
 * 
 * @deprecated
 */
public "setKey"(arg0: StringJS): void
/**
 * 
 * @deprecated
 */
public "getSubName"(): StringJS
/**
 * 
 * @deprecated
 */
public "getDirectory"(): $File
/**
 * 
 * @deprecated
 */
public "getSubId"(): StringJS
/**
 * 
 * @deprecated
 */
public "addWorld"(arg0: StringJS): $WaypointWorld
/**
 * 
 * @deprecated
 */
public "getFirstWorld"(): $MinimapWorld
/**
 * 
 * @deprecated
 */
public "getEqualIgnoreCaseSub"(arg0: StringJS): StringJS
/**
 * 
 * @deprecated
 */
public "getFirstWorldConnectedTo"(arg0: $WaypointWorld$$Type): $WaypointWorld
/**
 * 
 * @deprecated
 */
public "deleteSubContainer"(arg0: StringJS): void
/**
 * 
 * @deprecated
 */
public "getAllWorlds"(): $ArrayList<($WaypointWorld)>
/**
 * 
 * @deprecated
 */
public "addSubContainer"(arg0: StringJS): $WaypointWorldContainer
/**
 * 
 * @deprecated
 */
public "containsSub"(arg0: StringJS): boolean
/**
 * 
 * @deprecated
 */
public "removeName"(arg0: StringJS): void
/**
 * 
 * @deprecated
 */
public "getRootContainer"(): $WaypointWorldRootContainer
get "empty"(): boolean
get "key"(): StringJS
set "key"(value: StringJS)
get "subName"(): StringJS
get "directory"(): $File
get "subId"(): StringJS
get "firstWorld"(): $MinimapWorld
get "allWorlds"(): $ArrayList<($WaypointWorld)>
get "rootContainer"(): $WaypointWorldRootContainer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointWorldContainer$$Type = ($WaypointWorldContainer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WaypointWorldContainer$$Original = $WaypointWorldContainer;}
declare module "xaero.common.minimap.waypoints.render.WaypointsIngameRenderer" {
import {$WaypointWorldRenderer} from "xaero.hud.minimap.waypoint.render.world.WaypointWorldRenderer"
import {$ModSettings$$Type} from "xaero.common.settings.ModSettings"
import {$MultiBufferSource$BufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"
import {$Waypoint$$Type} from "xaero.common.minimap.waypoints.Waypoint"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$Vector4f$$Type} from "org.joml.Vector4f"
import {$Font$$Type} from "net.minecraft.client.gui.Font"
import {$Tesselator$$Type} from "com.mojang.blaze3d.vertex.Tesselator"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"
import {$MinimapProcessor$$Type} from "xaero.common.minimap.MinimapProcessor"
import {$MinimapRendererHelper$$Type} from "xaero.common.minimap.render.MinimapRendererHelper"
import {$WaypointWorldRenderProvider$$Type} from "xaero.hud.minimap.waypoint.render.world.WaypointWorldRenderProvider"
import {$WaypointWorldRenderContext$$Type} from "xaero.hud.minimap.waypoint.render.world.WaypointWorldRenderContext"
import {$MinimapElementReader$$Type} from "xaero.hud.minimap.element.render.MinimapElementReader"
import {$MinimapSession$$Type} from "xaero.hud.minimap.module.MinimapSession"

/**
 * 
 * @deprecated
 */
export class $WaypointsIngameRenderer extends $WaypointWorldRenderer {
constructor(arg0: $MinimapElementReader$$Type<($Waypoint$$Type), ($WaypointWorldRenderContext$$Type)>, arg1: $WaypointWorldRenderProvider$$Type, arg2: $WaypointWorldRenderContext$$Type, arg3: $Vector4f$$Type)

/**
 * 
 * @deprecated
 */
public "render"(arg0: $MinimapSession$$Type, arg1: float, arg2: $MinimapProcessor$$Type, arg3: $Matrix4f$$Type, arg4: $Matrix4f$$Type): void
/**
 * 
 * @deprecated
 */
public "drawIconInWorld"(arg0: $PoseStack$$Type, arg1: $MinimapRendererHelper$$Type, arg2: $Waypoint$$Type, arg3: $ModSettings$$Type, arg4: $Tesselator$$Type, arg5: $Font$$Type, arg6: StringJS, arg7: StringJS, arg8: float, arg9: boolean, arg10: $MultiBufferSource$BufferSource$$Type, arg11: $VertexConsumer$$Type, arg12: boolean, arg13: StringJS): void
/**
 * 
 * @deprecated
 */
public "drawAsOverlay"(arg0: $PoseStack$$Type, arg1: $PoseStack$$Type, arg2: $MinimapRendererHelper$$Type, arg3: $Waypoint$$Type, arg4: $ModSettings$$Type, arg5: $Tesselator$$Type, arg6: $Font$$Type, arg7: StringJS, arg8: StringJS, arg9: float, arg10: boolean, arg11: $MultiBufferSource$BufferSource$$Type, arg12: $VertexConsumer$$Type, arg13: $Matrix4f$$Type, arg14: integer, arg15: integer, arg16: double, arg17: double, arg18: boolean, arg19: StringJS): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointsIngameRenderer$$Type = ($WaypointsIngameRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WaypointsIngameRenderer$$Original = $WaypointsIngameRenderer;}
declare module "xaero.common.minimap.waypoints.render.WaypointsGuiRenderer" {
import {$ModSettings$$Type} from "xaero.common.settings.ModSettings"
import {$MultiTextureRenderTypeRendererProvider$$Type} from "xaero.common.graphics.renderer.multitexture.MultiTextureRenderTypeRendererProvider"
import {$MultiBufferSource$BufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"
import {$Waypoint$$Type} from "xaero.common.minimap.waypoints.Waypoint"
import {$WaypointGuiRenderContext$$Type} from "xaero.common.minimap.waypoints.render.WaypointGuiRenderContext"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$Font$$Type} from "net.minecraft.client.gui.Font"
import {$WaypointRenderProvider$$Type} from "xaero.common.minimap.waypoints.render.WaypointRenderProvider"
import {$WaypointsGuiRenderer as $WaypointsGuiRenderer$0} from "xaero.hud.minimap.waypoint.render.WaypointsGuiRenderer"
import {$MinimapElementRenderProvider} from "xaero.hud.minimap.element.render.MinimapElementRenderProvider"
import {$WaypointsManager$$Type} from "xaero.common.minimap.waypoints.WaypointsManager"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$WaypointReader$$Type} from "xaero.common.minimap.waypoints.render.WaypointReader"
import {$MinimapRendererHelper$$Type} from "xaero.common.minimap.render.MinimapRendererHelper"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Window$$Type} from "com.mojang.blaze3d.platform.Window"
import {$IXaeroMinimap$$Type} from "xaero.common.IXaeroMinimap"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$MinimapSession$$Type} from "xaero.hud.minimap.module.MinimapSession"
import {$RenderTarget$$Type} from "com.mojang.blaze3d.pipeline.RenderTarget"

/**
 * 
 * @deprecated
 */
export class $WaypointsGuiRenderer extends $WaypointsGuiRenderer$0 {
constructor(arg0: $WaypointReader$$Type, arg1: $WaypointRenderProvider$$Type, arg2: $WaypointGuiRenderContext$$Type)

/**
 * 
 * @deprecated
 */
public "getOrder"(): integer
/**
 * 
 * @deprecated
 */
public "renderElement"(arg0: integer, arg1: boolean, arg2: boolean, arg3: $GuiGraphics$$Type, arg4: $MultiBufferSource$BufferSource$$Type, arg5: $Font$$Type, arg6: $RenderTarget$$Type, arg7: $MinimapRendererHelper$$Type, arg8: $Entity$$Type, arg9: $Player$$Type, arg10: double, arg11: double, arg12: double, arg13: integer, arg14: double, arg15: float, arg16: $Waypoint$$Type, arg17: double, arg18: double, arg19: boolean, arg20: float): boolean
/**
 * 
 * @deprecated
 */
public "renderElement"(arg0: integer, arg1: boolean, arg2: boolean, arg3: $GuiGraphics$$Type, arg4: $MultiBufferSource$BufferSource$$Type, arg5: $Font$$Type, arg6: $RenderTarget$$Type, arg7: $MinimapRendererHelper$$Type, arg8: $Entity$$Type, arg9: $Player$$Type, arg10: double, arg11: double, arg12: double, arg13: integer, arg14: double, arg15: float, arg16: any, arg17: double, arg18: double, arg19: boolean, arg20: float): boolean
/**
 * 
 * @deprecated
 */
public "drawSetChange"(arg0: $MinimapSession$$Type, arg1: $GuiGraphics$$Type, arg2: $Window$$Type): void
/**
 * 
 * @deprecated
 */
public "drawSetChange"(arg0: $WaypointsManager$$Type, arg1: $GuiGraphics$$Type, arg2: $Window$$Type): void
/**
 * 
 * @deprecated
 */
public "postRender"(arg0: integer, arg1: $Entity$$Type, arg2: $Player$$Type, arg3: double, arg4: double, arg5: double, arg6: $IXaeroMinimap$$Type, arg7: $MultiBufferSource$BufferSource$$Type, arg8: $MultiTextureRenderTypeRendererProvider$$Type): void
/**
 * 
 * @deprecated
 */
public "drawIconOnGUI"(arg0: $GuiGraphics$$Type, arg1: $MinimapRendererHelper$$Type, arg2: $Waypoint$$Type, arg3: $ModSettings$$Type, arg4: integer, arg5: integer, arg6: $MultiBufferSource$BufferSource$$Type, arg7: $VertexConsumer$$Type): void
/**
 * 
 * @deprecated
 */
public "shouldRender"(arg0: integer): boolean
/**
 * 
 * @deprecated
 */
public "preRender"(arg0: integer, arg1: $Entity$$Type, arg2: $Player$$Type, arg3: double, arg4: double, arg5: double, arg6: $IXaeroMinimap$$Type, arg7: $MultiBufferSource$BufferSource$$Type, arg8: $MultiTextureRenderTypeRendererProvider$$Type): void
/**
 * 
 * @deprecated
 */
public "updateWaypointCollection"(arg0: $IXaeroMinimap$$Type): void
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
export type $WaypointsGuiRenderer$$Type = ($WaypointsGuiRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WaypointsGuiRenderer$$Original = $WaypointsGuiRenderer;}
declare module "xaero.common.minimap.waypoints.WaypointSharingHandler" {
import {$HudMod$$Type} from "xaero.common.HudMod"
import {$WaypointSharingHandler as $WaypointSharingHandler$0} from "xaero.hud.minimap.waypoint.WaypointSharingHandler"
import {$Waypoint$$Type} from "xaero.common.minimap.waypoints.Waypoint"
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$MinimapWorld$$Type} from "xaero.hud.minimap.world.MinimapWorld"
import {$MinimapSession$$Type} from "xaero.hud.minimap.module.MinimapSession"
import {$WaypointWorld$$Type} from "xaero.common.minimap.waypoints.WaypointWorld"

/**
 * 
 * @deprecated
 */
export class $WaypointSharingHandler extends $WaypointSharingHandler$0 {
static readonly "WAYPOINT_OLD_SHARE_PREFIX": StringJS
static readonly "WAYPOINT_ADD_PREFIX": StringJS
static readonly "WAYPOINT_SHARE_PREFIX": StringJS

constructor(arg0: $HudMod$$Type, arg1: $MinimapSession$$Type)

/**
 * 
 * @deprecated
 */
public "shareWaypoint"(arg0: $Screen$$Type, arg1: $Waypoint$$Type, arg2: $MinimapWorld$$Type): void
/**
 * 
 * @deprecated
 */
public "shareWaypoint"(arg0: $Screen$$Type, arg1: $Waypoint$$Type, arg2: $WaypointWorld$$Type): void
/**
 * 
 * @deprecated
 */
public "onWaypointReceived"(arg0: StringJS, arg1: StringJS): void
/**
 * 
 * @deprecated
 */
public "onWaypointAdd"(arg0: (StringJS)[]): void
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
declare module "xaero.common.minimap.waypoints.WaypointsManager" {
import {$HudMod$$Type} from "xaero.common.HudMod"
import {$Hashtable} from "java.util.Hashtable"
import {$Waypoint, $Waypoint$$Type} from "xaero.common.minimap.waypoints.Waypoint"
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$List} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClientPacketListener$$Type} from "net.minecraft.client.multiplayer.ClientPacketListener"
import {$WaypointWorld, $WaypointWorld$$Type} from "xaero.common.minimap.waypoints.WaypointWorld"
import {$HashMap} from "java.util.HashMap"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$WaypointSet, $WaypointSet$$Type} from "xaero.common.minimap.waypoints.WaypointSet"
import {$WaypointWorldContainer} from "xaero.common.minimap.waypoints.WaypointWorldContainer"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MinimapSession, $MinimapSession$$Type} from "xaero.hud.minimap.module.MinimapSession"
import {$HudModule$$Type} from "xaero.hud.module.HudModule"

/**
 * 
 * @deprecated
 */
export class $WaypointsManager extends $MinimapSession {
static readonly "customWaypoints": $Hashtable<(StringJS), ($Hashtable<(integer), ($Waypoint)>)>

constructor(arg0: $HudMod$$Type, arg1: $HudModule$$Type<($MinimapSession$$Type)>, arg2: $ClientPacketListener$$Type)

/**
 * 
 * @deprecated
 */
public "canTeleport"(arg0: boolean, arg1: $WaypointWorld$$Type): boolean
/**
 * 
 * @deprecated
 */
public "getWorld"(arg0: StringJS, arg1: StringJS): $WaypointWorld
/**
 * 
 * @deprecated
 */
public "getWorldContainer"(arg0: StringJS): $WaypointWorldContainer
/**
 * 
 * @deprecated
 */
public static "getCustomWaypoints"(arg0: StringJS): $Hashtable<(integer), ($Waypoint)>
/**
 * 
 * @deprecated
 */
public "updateWaypoints"(): void
/**
 * 
 * @deprecated
 */
public "getAutoContainerID"(): StringJS
/**
 * 
 * @deprecated
 */
public "getServerWaypoints"(): $List<($Waypoint)>
/**
 * 
 * @deprecated
 */
public "getAutoWorldID"(): StringJS
/**
 * 
 * @deprecated
 */
public "updateWorldIds"(): void
/**
 * 
 * @deprecated
 */
public "containerExists"(arg0: StringJS): boolean
/**
 * 
 * @deprecated
 */
public "addWorldContainer"(arg0: StringJS): $WaypointWorldContainer
/**
 * 
 * @deprecated
 */
public "setWaypoints"(arg0: $WaypointSet$$Type): void
/**
 * 
 * @deprecated
 */
public "getWaypointMap"(): $HashMap<(StringJS), ($WaypointWorldContainer)>
/**
 * 
 * @deprecated
 */
public "getCustomWorldID"(): StringJS
/**
 * 
 * @deprecated
 */
public "findDimensionKey"(arg0: StringJS): $ResourceKey<($Level)>
/**
 * 
 * @deprecated
 */
public "getCurrentWorldID"(arg0: StringJS): StringJS
/**
 * 
 * @deprecated
 */
public "getCurrentWorldID"(): StringJS
/**
 * 
 * @deprecated
 */
public "createDeathpoint"(arg0: $Player$$Type): void
/**
 * 
 * @deprecated
 */
public "setCustomWorldID"(arg0: StringJS): void
/**
 * 
 * @deprecated
 */
public "getNewAutoWorldID"(arg0: $ResourceKey$$Type<($Level)>, arg1: boolean): StringJS
/**
 * 
 * @deprecated
 */
public "setCurrentSpawn"(arg0: $BlockPos$$Type, arg1: $ClientLevel$$Type): void
/**
 * 
 * @deprecated
 */
public "removeContainer"(arg0: StringJS): void
/**
 * 
 * @deprecated
 */
public "getDimCoordinateScale"(arg0: $WaypointWorld$$Type): double
/**
 * 
 * @deprecated
 */
public "isWorldTeleportable"(arg0: $WaypointWorld$$Type): boolean
/**
 * 
 * @deprecated
 */
public "getDimensionDivision"(arg0: $WaypointWorld$$Type): double
/**
 * 
 * @deprecated
 */
public "onServerLevelId"(arg0: integer): void
/**
 * 
 * @deprecated
 */
public "getCurrentWorld"(arg0: StringJS, arg1: StringJS): $WaypointWorld
/**
 * 
 * @deprecated
 */
public "getCurrentWorld"(): $WaypointWorld
/**
 * 
 * @deprecated
 */
public "addWorld"(arg0: StringJS, arg1: StringJS): $WaypointWorld
/**
 * 
 * @deprecated
 */
public "getWaypoints"(): $WaypointSet
/**
 * 
 * @deprecated
 */
public "teleportToWaypoint"(arg0: $Waypoint$$Type, arg1: $WaypointWorld$$Type, arg2: $Screen$$Type, arg3: boolean): void
/**
 * 
 * @deprecated
 */
public "teleportToWaypoint"(arg0: $Waypoint$$Type, arg1: $WaypointWorld$$Type, arg2: $Screen$$Type): void
/**
 * 
 * @deprecated
 */
public "getWorldContainerNullable"(arg0: StringJS): $WaypointWorldContainer
/**
 * 
 * @deprecated
 */
public "getDimensionDirectoryName"(arg0: $ResourceKey$$Type<($Level)>): StringJS
/**
 * 
 * @deprecated
 */
public "ignoreContainerCase"(arg0: StringJS, arg1: StringJS): StringJS
/**
 * 
 * @deprecated
 */
public "createTemporaryWaypoints"(arg0: $WaypointWorld$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: boolean): void
/**
 * 
 * @deprecated
 */
public "createTemporaryWaypoints"(arg0: $WaypointWorld$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: boolean, arg5: double): void
/**
 * 
 * @deprecated
 */
public "createTemporaryWaypoints"(arg0: $WaypointWorld$$Type, arg1: integer, arg2: integer, arg3: integer): void
/**
 * 
 * @deprecated
 */
public "getCurrentContainerID"(arg0: StringJS): StringJS
/**
 * 
 * @deprecated
 */
public "getCurrentContainerID"(): StringJS
/**
 * 
 * @deprecated
 */
public "getAutoRootContainerID"(): StringJS
/**
 * 
 * @deprecated
 */
public "isTeleportationSafe"(arg0: $WaypointWorld$$Type): boolean
/**
 * 
 * @deprecated
 */
public "getCustomContainerID"(): StringJS
/**
 * 
 * @deprecated
 */
public "setCustomContainerID"(arg0: StringJS): void
/**
 * 
 * @deprecated
 */
public "getDimensionKeyForDirectoryName"(arg0: StringJS): $ResourceKey<($Level)>
/**
 * 
 * @deprecated
 */
public "getCurrentContainerAndWorldID"(): StringJS
/**
 * 
 * @deprecated
 */
public "getCurrentContainerAndWorldID"(arg0: StringJS, arg1: StringJS): StringJS
/**
 * 
 * @deprecated
 */
public "getCurrentOriginContainerID"(): StringJS
/**
 * 
 * @deprecated
 */
public "getCurrentOriginContainerID"(arg0: StringJS): StringJS
/**
 * 
 * @deprecated
 */
public "teleportAnyway"(): void
/**
 * 
 * @deprecated
 */
public "getAutoWorld"(): $WaypointWorld
/**
 * 
 * @deprecated
 */
public "isMultiplayer"(arg0: StringJS): boolean
get "autoContainerID"(): StringJS
get "serverWaypoints"(): $List<($Waypoint)>
get "autoWorldID"(): StringJS
set "waypoints"(value: $WaypointSet$$Type)
get "waypointMap"(): $HashMap<(StringJS), ($WaypointWorldContainer)>
get "customWorldID"(): StringJS
get "currentWorldID"(): StringJS
set "customWorldID"(value: StringJS)
get "currentWorld"(): $WaypointWorld
get "waypoints"(): $WaypointSet
get "currentContainerID"(): StringJS
get "autoRootContainerID"(): StringJS
get "customContainerID"(): StringJS
set "customContainerID"(value: StringJS)
get "currentContainerAndWorldID"(): StringJS
get "currentOriginContainerID"(): StringJS
get "autoWorld"(): $WaypointWorld
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointsManager$$Type = ($WaypointsManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WaypointsManager$$Original = $WaypointsManager;}
declare module "xaero.common.minimap.waypoints.WaypointSet" {
import {$ArrayList} from "java.util.ArrayList"
import {$WaypointSet as $WaypointSet$0} from "xaero.hud.minimap.waypoint.set.WaypointSet"
import {$Waypoint} from "xaero.common.minimap.waypoints.Waypoint"

/**
 * 
 * @deprecated
 */
export class $WaypointSet extends $WaypointSet$0 {
/**
 * 
 * @deprecated
 */
constructor(arg0: StringJS)

/**
 * 
 * @deprecated
 */
public "getName"(): StringJS
/**
 * 
 * @deprecated
 */
public "getList"(): $ArrayList<($Waypoint)>
get "name"(): StringJS
get "list"(): $ArrayList<($Waypoint)>
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
declare module "xaero.common.minimap.waypoints.Waypoint" {
import {$WaypointPurpose, $WaypointPurpose$$Type} from "xaero.hud.minimap.waypoint.WaypointPurpose"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$WaypointVisibilityType, $WaypointVisibilityType$$Type} from "xaero.common.minimap.waypoints.WaypointVisibilityType"
import {$WaypointColor, $WaypointColor$$Type} from "xaero.hud.minimap.waypoint.WaypointColor"
import {$Camera$$Type} from "net.minecraft.client.Camera"

export class $Waypoint implements $Comparable$$Interface<($Waypoint)> {
static readonly "ONEOFF_DESTINATION_SAFE_FOR": integer
static readonly "ONEOFF_DESTINATION_REMOVE_DISTANCE": integer
static "RENDER_SORTING_POS": $Vec3

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: StringJS, arg4: StringJS, arg5: $WaypointColor$$Type, arg6: $WaypointPurpose$$Type)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: StringJS, arg4: StringJS, arg5: $WaypointColor$$Type, arg6: $WaypointPurpose$$Type, arg7: boolean)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: StringJS, arg4: StringJS, arg5: $WaypointColor$$Type, arg6: $WaypointPurpose$$Type, arg7: boolean, arg8: boolean)
/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: StringJS, arg4: StringJS, arg5: integer)
/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: StringJS, arg4: StringJS, arg5: integer, arg6: integer)
/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: StringJS, arg4: StringJS, arg5: integer, arg6: integer, arg7: boolean)
/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: StringJS, arg4: StringJS, arg5: integer, arg6: integer, arg7: boolean, arg8: boolean)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: StringJS, arg4: StringJS, arg5: $WaypointColor$$Type)

/**
 * 
 * @deprecated
 */
public "setType"(arg0: integer): void
public "getName"(): StringJS
public "compareTo"(arg0: $Waypoint$$Type): integer
public "compareTo"(arg0: any): integer
public "setName"(arg0: StringJS): void
/**
 * 
 * @deprecated
 */
public "getSymbol"(): StringJS
/**
 * 
 * @deprecated
 */
public "setColor"(arg0: integer): void
public "getLocalizedName"(): StringJS
public "getY"(): integer
public "getYaw"(): integer
public "setRotation"(arg0: boolean): void
public "isGlobal"(): boolean
/**
 * 
 * @deprecated
 */
public "setSymbol"(arg0: StringJS): void
public "isDisabled"(): boolean
public "getInitials"(): StringJS
public "setVisibility"(arg0: $WaypointVisibilityType$$Type): void
/**
 * 
 * @deprecated
 */
public "getColor"(): integer
public "setDisabled"(arg0: boolean): void
public "setX"(arg0: integer): void
public "setY"(arg0: integer): void
public "getVisibility"(): $WaypointVisibilityType
public "getPurpose"(): $WaypointPurpose
public "setPurpose"(arg0: $WaypointPurpose$$Type): void
public "setYaw"(arg0: integer): void
public "setZ"(arg0: integer): void
public "getDistanceSq"(arg0: double, arg1: double, arg2: double): double
public "getX"(): integer
public "getX"(arg0: double): integer
public "getZ"(arg0: double): integer
public "getZ"(): integer
/**
 * 
 * @deprecated
 */
public "getActualColor"(): integer
public "getComparisonDistance"(arg0: $Camera$$Type, arg1: double): double
public "getComparisonAngleCos"(arg0: $Camera$$Type, arg1: double): double
public "getInitialsSafe"(arg0: StringJS): StringJS
public "getNameSafe"(arg0: StringJS): StringJS
/**
 * 
 * @deprecated
 */
public "getWaypointType"(): integer
/**
 * 
 * @deprecated
 */
public "setVisibilityType"(arg0: integer): void
/**
 * 
 * @deprecated
 */
public "getSymbolSafe"(arg0: StringJS): StringJS
public "getCreatedAt"(): long
public "isYIncluded"(): boolean
public "isDestination"(): boolean
public "setInitials"(arg0: StringJS): void
public "setWaypointColor"(arg0: $WaypointColor$$Type): void
public "setYIncluded"(arg0: boolean): void
public "setTemporary"(arg0: boolean): void
public "isTemporary"(): boolean
public "getWaypointColor"(): $WaypointColor
/**
 * 
 * @deprecated
 */
public "getVisibilityType"(): integer
public "getComparisonName"(): StringJS
public "isServerWaypoint"(): boolean
/**
 * 
 * @deprecated
 */
public "isOneoffDestination"(): boolean
public static "getStringFromStringSafe"(arg0: StringJS, arg1: StringJS): StringJS
/**
 * 
 * @deprecated
 */
public "setOneoffDestination"(arg0: boolean): void
public "isRotation"(): boolean
set "type"(value: integer)
get "name"(): StringJS
set "name"(value: StringJS)
get "symbol"(): StringJS
set "color"(value: integer)
get "localizedName"(): StringJS
get "y"(): integer
get "yaw"(): integer
set "rotation"(value: boolean)
get "global"(): boolean
set "symbol"(value: StringJS)
get "disabled"(): boolean
get "initials"(): StringJS
set "visibility"(value: $WaypointVisibilityType$$Type)
get "color"(): integer
set "disabled"(value: boolean)
set "x"(value: integer)
set "y"(value: integer)
get "visibility"(): $WaypointVisibilityType
get "purpose"(): $WaypointPurpose
set "purpose"(value: $WaypointPurpose$$Type)
set "yaw"(value: integer)
set "z"(value: integer)
get "x"(): integer
get "z"(): integer
get "actualColor"(): integer
get "waypointType"(): integer
set "visibilityType"(value: integer)
get "createdAt"(): long
get "YIncluded"(): boolean
get "destination"(): boolean
set "initials"(value: StringJS)
set "waypointColor"(value: $WaypointColor$$Type)
set "YIncluded"(value: boolean)
set "temporary"(value: boolean)
get "temporary"(): boolean
get "waypointColor"(): $WaypointColor
get "visibilityType"(): integer
get "comparisonName"(): StringJS
get "serverWaypoint"(): boolean
get "oneoffDestination"(): boolean
set "oneoffDestination"(value: boolean)
get "rotation"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Waypoint$$Type = ($Waypoint);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Waypoint$$Original = $Waypoint;}
