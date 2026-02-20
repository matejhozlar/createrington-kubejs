declare module "xaero.hud.minimap.Minimap" {
import {$WaypointsIngameRenderer} from "xaero.common.minimap.waypoints.render.WaypointsIngameRenderer"
import {$WaypointWorldRenderer} from "xaero.hud.minimap.waypoint.render.world.WaypointWorldRenderer"
import {$MinimapElementOverMapRendererHandler} from "xaero.hud.minimap.element.render.over.MinimapElementOverMapRendererHandler"
import {$HudMod, $HudMod$$Type} from "xaero.common.HudMod"
import {$CompassRenderer} from "xaero.hud.minimap.compass.render.CompassRenderer"
import {$WaypointsGuiRenderer} from "xaero.hud.minimap.waypoint.render.WaypointsGuiRenderer"
import {$MinimapFBORenderer} from "xaero.common.minimap.render.MinimapFBORenderer"
import {$InfoDisplays} from "xaero.hud.minimap.info.InfoDisplays"
import {$WaypointsGuiRenderer as $WaypointsGuiRenderer$0} from "xaero.common.minimap.waypoints.render.WaypointsGuiRenderer"
import {$MinimapElementWorldRendererHandler} from "xaero.hud.minimap.element.render.world.MinimapElementWorldRendererHandler"
import {$MinimapSafeModeRenderer} from "xaero.common.minimap.render.MinimapSafeModeRenderer"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$WaypointMapRenderer} from "xaero.hud.minimap.waypoint.render.WaypointMapRenderer"

export class $Minimap {
constructor(arg0: $HudMod$$Type)

public "setCrashedWith"(arg0: $Throwable$$Type): void
public "getInfoDisplays"(): $InfoDisplays
public "getMinimapSafeModeRenderer"(): $MinimapSafeModeRenderer
public "getWaypointWorldRenderer"(): $WaypointWorldRenderer
/**
 * 
 * @deprecated
 */
public "getWaypointsGuiRenderer"(): $WaypointsGuiRenderer$0
public "getMinimapFBORenderer"(): $MinimapFBORenderer
/**
 * 
 * @deprecated
 */
public "getWaypointGuiRenderer"(): $WaypointsGuiRenderer
/**
 * 
 * @deprecated
 */
public "getWaypointsIngameRenderer"(): $WaypointsIngameRenderer
public "getWaypointMapRenderer"(): $WaypointMapRenderer
public "getWorldRendererHandler"(): $MinimapElementWorldRendererHandler
public "getOverMapRendererHandler"(): $MinimapElementOverMapRendererHandler
public "checkCrashes"(): void
public "getCrashedWith"(): $Throwable
public "getCompassRenderer"(): $CompassRenderer
public "getModMain"(): $HudMod
public "usingFBO"(): boolean
set "crashedWith"(value: $Throwable$$Type)
get "infoDisplays"(): $InfoDisplays
get "minimapSafeModeRenderer"(): $MinimapSafeModeRenderer
get "waypointWorldRenderer"(): $WaypointWorldRenderer
get "waypointsGuiRenderer"(): $WaypointsGuiRenderer$0
get "minimapFBORenderer"(): $MinimapFBORenderer
get "waypointGuiRenderer"(): $WaypointsGuiRenderer
get "waypointsIngameRenderer"(): $WaypointsIngameRenderer
get "waypointMapRenderer"(): $WaypointMapRenderer
get "worldRendererHandler"(): $MinimapElementWorldRendererHandler
get "overMapRendererHandler"(): $MinimapElementOverMapRendererHandler
get "crashedWith"(): $Throwable
get "compassRenderer"(): $CompassRenderer
get "modMain"(): $HudMod
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Minimap$$Type = ($Minimap);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Minimap$$Original = $Minimap;}
