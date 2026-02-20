declare module "xaero.common.minimap.MinimapInterface" {
import {$WaypointsIngameRenderer} from "xaero.common.minimap.waypoints.render.WaypointsIngameRenderer"
import {$MinimapElementOverMapRendererHandler} from "xaero.hud.minimap.element.render.over.MinimapElementOverMapRendererHandler"
import {$HudMod$$Type} from "xaero.common.HudMod"
import {$CompassRenderer} from "xaero.hud.minimap.compass.render.CompassRenderer"
import {$MinimapFBORenderer} from "xaero.common.minimap.render.MinimapFBORenderer"
import {$WaypointsGuiRenderer} from "xaero.common.minimap.waypoints.render.WaypointsGuiRenderer"
import {$MinimapSafeModeRenderer} from "xaero.common.minimap.render.MinimapSafeModeRenderer"
import {$Minimap} from "xaero.hud.minimap.Minimap"

/**
 * 
 * @deprecated
 */
export class $MinimapInterface extends $Minimap {
constructor(arg0: $HudMod$$Type)

/**
 * 
 * @deprecated
 */
public "getMinimapSafeModeRenderer"(): $MinimapSafeModeRenderer
/**
 * 
 * @deprecated
 */
public "getWaypointsGuiRenderer"(): $WaypointsGuiRenderer
/**
 * 
 * @deprecated
 */
public "getMinimapFBORenderer"(): $MinimapFBORenderer
/**
 * 
 * @deprecated
 */
public "getWaypointsIngameRenderer"(): $WaypointsIngameRenderer
/**
 * 
 * @deprecated
 */
public "getOverMapRendererHandler"(): $MinimapElementOverMapRendererHandler
/**
 * 
 * @deprecated
 */
public "getCompassRenderer"(): $CompassRenderer
/**
 * 
 * @deprecated
 */
public "usingFBO"(): boolean
get "minimapSafeModeRenderer"(): $MinimapSafeModeRenderer
get "waypointsGuiRenderer"(): $WaypointsGuiRenderer
get "minimapFBORenderer"(): $MinimapFBORenderer
get "waypointsIngameRenderer"(): $WaypointsIngameRenderer
get "overMapRendererHandler"(): $MinimapElementOverMapRendererHandler
get "compassRenderer"(): $CompassRenderer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapInterface$$Type = ($MinimapInterface);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinimapInterface$$Original = $MinimapInterface;}
declare module "xaero.common.minimap.MinimapProcessor" {
import {$CustomVertexConsumers$$Type} from "xaero.common.graphics.CustomVertexConsumers"
import {$MinimapInterface} from "xaero.common.minimap.MinimapInterface"
import {$ClientSyncedTrackedPlayerManager as $ClientSyncedTrackedPlayerManager$0} from "xaero.common.minimap.radar.tracker.synced.ClientSyncedTrackedPlayerManager"
import {$ClientSyncedTrackedPlayerManager, $ClientSyncedTrackedPlayerManager$$Type} from "xaero.hud.minimap.player.tracker.synced.ClientSyncedTrackedPlayerManager"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$MinimapRadar} from "xaero.common.minimap.radar.MinimapRadar"
import {$RadarSession, $RadarSession$$Type} from "xaero.hud.minimap.radar.RadarSession"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MinimapWriter, $MinimapWriter$$Type} from "xaero.common.minimap.write.MinimapWriter"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$IXaeroMinimap$$Type} from "xaero.common.IXaeroMinimap"
import {$Item} from "net.minecraft.world.item.Item"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$MinimapSession, $MinimapSession$$Type} from "xaero.hud.minimap.module.MinimapSession"

export class $MinimapProcessor {
static readonly "DEBUG": boolean
static readonly "FRAME": integer

constructor(arg0: $IXaeroMinimap$$Type, arg1: $MinimapSession$$Type, arg2: $MinimapWriter$$Type, arg3: $RadarSession$$Type, arg4: $ClientSyncedTrackedPlayerManager$$Type)

public "cleanup"(): void
public "onClientTick"(): void
public "getForcedFairPlay"(): boolean
public "setConsideringNetherFairPlayMessage"(arg0: boolean): void
public "onRender"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: double, arg6: integer, arg7: integer, arg8: float, arg9: $CustomVertexConsumers$$Type): void
public "getSession"(): $MinimapSession
public "onPlayerTick"(): void
public "getRadarSession"(): $RadarSession
public "isEnlargedMap"(): boolean
public "getMinimapWriter"(): $MinimapWriter
public "getMinimapInterface"(): $MinimapInterface
public "canUseFrameBuffer"(): boolean
public static "hasMinimapItem"(arg0: $Player$$Type): boolean
public "updateMinimapItem"(): void
public "serverHasMod"(): boolean
public "setToResetImage"(arg0: boolean): void
public "isToResetImage"(): boolean
public "getMinimapZoom"(): double
public "isManualCaveMode"(): boolean
public "setNoMinimapMessageReceived"(arg0: boolean): void
public "setFairPlayOnlyMessageReceived"(arg0: boolean): void
public "toggleManualCaveMode"(): void
public "updateZoom"(): void
public "instantZoom"(): void
public "setEnlargedMap"(arg0: boolean): void
public "isConsideringNetherFairPlayMessage"(): boolean
public "getFBOBufferSize"(): integer
public "setServerModNetworkVersion"(arg0: integer): void
public "getLastMapDimension"(): $ResourceKey<($Level)>
public "getLastMapDimensionScale"(): double
public "isCaveModeDisplayed"(): boolean
/**
 * 
 * @deprecated
 */
public "getClientSyncedTrackedPlayerManager"(): $ClientSyncedTrackedPlayerManager$0
public "getSyncedTrackedPlayerManager"(): $ClientSyncedTrackedPlayerManager
public "getNoMinimapMessageReceived"(): boolean
public "setLastMapDimension"(arg0: $ResourceKey$$Type<($Level)>): void
/**
 * 
 * @deprecated
 */
public "setLastPlayerDimDiv"(arg0: double): void
/**
 * 
 * @deprecated
 */
public "getLastPlayerDimDiv"(): double
public "getMinimapBufferSize"(arg0: integer): integer
public "setLastMapDimensionScale"(arg0: double): void
public "getMinimapItem"(): $Item
public "getMinimapSize"(): integer
public "getServerModNetworkVersion"(): integer
public "checkFBO"(): void
public "getTargetZoom"(): double
/**
 * 
 * @deprecated
 */
public "getEntityRadar"(): $MinimapRadar
get "forcedFairPlay"(): boolean
set "consideringNetherFairPlayMessage"(value: boolean)
get "session"(): $MinimapSession
get "radarSession"(): $RadarSession
get "enlargedMap"(): boolean
get "minimapWriter"(): $MinimapWriter
get "minimapInterface"(): $MinimapInterface
set "toResetImage"(value: boolean)
get "toResetImage"(): boolean
get "minimapZoom"(): double
get "manualCaveMode"(): boolean
set "noMinimapMessageReceived"(value: boolean)
set "fairPlayOnlyMessageReceived"(value: boolean)
set "enlargedMap"(value: boolean)
get "consideringNetherFairPlayMessage"(): boolean
get "FBOBufferSize"(): integer
set "serverModNetworkVersion"(value: integer)
get "lastMapDimension"(): $ResourceKey<($Level)>
get "lastMapDimensionScale"(): double
get "caveModeDisplayed"(): boolean
get "clientSyncedTrackedPlayerManager"(): $ClientSyncedTrackedPlayerManager$0
get "syncedTrackedPlayerManager"(): $ClientSyncedTrackedPlayerManager
get "noMinimapMessageReceived"(): boolean
set "lastMapDimension"(value: $ResourceKey$$Type<($Level)>)
set "lastPlayerDimDiv"(value: double)
get "lastPlayerDimDiv"(): double
set "lastMapDimensionScale"(value: double)
get "minimapItem"(): $Item
get "minimapSize"(): integer
get "serverModNetworkVersion"(): integer
get "targetZoom"(): double
get "entityRadar"(): $MinimapRadar
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapProcessor$$Type = ($MinimapProcessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinimapProcessor$$Original = $MinimapProcessor;}
