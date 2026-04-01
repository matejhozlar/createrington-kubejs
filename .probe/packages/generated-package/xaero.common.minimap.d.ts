declare module "xaero.common.minimap.MinimapInterface" {
import {$MinimapElementOverMapRendererHandler} from "xaero.hud.minimap.element.render.over.MinimapElementOverMapRendererHandler"
import {$WaypointsIngameRenderer} from "xaero.common.minimap.waypoints.render.WaypointsIngameRenderer"
import {$CompassRenderer} from "xaero.hud.minimap.compass.render.CompassRenderer"
import {$HudMod$$Type} from "xaero.common.HudMod"
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
public "getCompassRenderer"(): $CompassRenderer
/**
 * 
 * @deprecated
 */
public "getOverMapRendererHandler"(): $MinimapElementOverMapRendererHandler
/**
 * 
 * @deprecated
 */
public "getMinimapFBORenderer"(): $MinimapFBORenderer
/**
 * 
 * @deprecated
 */
public "getMinimapSafeModeRenderer"(): $MinimapSafeModeRenderer
/**
 * 
 * @deprecated
 */
public "getWaypointsIngameRenderer"(): $WaypointsIngameRenderer
/**
 * 
 * @deprecated
 */
public "getWaypointsGuiRenderer"(): $WaypointsGuiRenderer
/**
 * 
 * @deprecated
 */
public "usingFBO"(): boolean
get "compassRenderer"(): $CompassRenderer
get "overMapRendererHandler"(): $MinimapElementOverMapRendererHandler
get "minimapFBORenderer"(): $MinimapFBORenderer
get "minimapSafeModeRenderer"(): $MinimapSafeModeRenderer
get "waypointsIngameRenderer"(): $WaypointsIngameRenderer
get "waypointsGuiRenderer"(): $WaypointsGuiRenderer
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
public "getSyncedTrackedPlayerManager"(): $ClientSyncedTrackedPlayerManager
public "getForcedFairPlay"(): boolean
public "onRender"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: double, arg6: integer, arg7: integer, arg8: float, arg9: $CustomVertexConsumers$$Type): void
public "getMinimapWriter"(): $MinimapWriter
public "onClientTick"(): void
public "getMinimapInterface"(): $MinimapInterface
public "getSession"(): $MinimapSession
public "setLastMapDimensionScale"(arg0: double): void
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
public "getMinimapItem"(): $Item
public "getMinimapSize"(): integer
public "canUseFrameBuffer"(): boolean
public "getFBOBufferSize"(): integer
public "serverHasMod"(): boolean
public "setConsideringNetherFairPlayMessage"(arg0: boolean): void
public "getMinimapZoom"(): double
public "isManualCaveMode"(): boolean
public "onPlayerTick"(): void
public "toggleManualCaveMode"(): void
public "updateMinimapItem"(): void
public static "hasMinimapItem"(arg0: $Player$$Type): boolean
public "updateZoom"(): void
public "setServerModNetworkVersion"(arg0: integer): void
public "setFairPlayOnlyMessageReceived"(arg0: boolean): void
public "setNoMinimapMessageReceived"(arg0: boolean): void
public "setEnlargedMap"(arg0: boolean): void
public "instantZoom"(): void
public "checkFBO"(): void
public "getLastMapDimensionScale"(): double
public "isCaveModeDisplayed"(): boolean
public "getLastMapDimension"(): $ResourceKey<($Level)>
public "getNoMinimapMessageReceived"(): boolean
public "isEnlargedMap"(): boolean
public "getRadarSession"(): $RadarSession
public "isToResetImage"(): boolean
public "setToResetImage"(arg0: boolean): void
public "getServerModNetworkVersion"(): integer
/**
 * 
 * @deprecated
 */
public "getClientSyncedTrackedPlayerManager"(): $ClientSyncedTrackedPlayerManager$0
public "getTargetZoom"(): double
/**
 * 
 * @deprecated
 */
public "getEntityRadar"(): $MinimapRadar
public "isConsideringNetherFairPlayMessage"(): boolean
get "syncedTrackedPlayerManager"(): $ClientSyncedTrackedPlayerManager
get "forcedFairPlay"(): boolean
get "minimapWriter"(): $MinimapWriter
get "minimapInterface"(): $MinimapInterface
get "session"(): $MinimapSession
set "lastMapDimensionScale"(value: double)
set "lastMapDimension"(value: $ResourceKey$$Type<($Level)>)
set "lastPlayerDimDiv"(value: double)
get "lastPlayerDimDiv"(): double
get "minimapItem"(): $Item
get "minimapSize"(): integer
get "FBOBufferSize"(): integer
set "consideringNetherFairPlayMessage"(value: boolean)
get "minimapZoom"(): double
get "manualCaveMode"(): boolean
set "serverModNetworkVersion"(value: integer)
set "fairPlayOnlyMessageReceived"(value: boolean)
set "noMinimapMessageReceived"(value: boolean)
set "enlargedMap"(value: boolean)
get "lastMapDimensionScale"(): double
get "caveModeDisplayed"(): boolean
get "lastMapDimension"(): $ResourceKey<($Level)>
get "noMinimapMessageReceived"(): boolean
get "enlargedMap"(): boolean
get "radarSession"(): $RadarSession
get "toResetImage"(): boolean
set "toResetImage"(value: boolean)
get "serverModNetworkVersion"(): integer
get "clientSyncedTrackedPlayerManager"(): $ClientSyncedTrackedPlayerManager$0
get "targetZoom"(): double
get "entityRadar"(): $MinimapRadar
get "consideringNetherFairPlayMessage"(): boolean
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
