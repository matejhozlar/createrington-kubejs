declare module "xaero.hud.minimap.Minimap" {
import {$MinimapElementOverMapRendererHandler} from "xaero.hud.minimap.element.render.over.MinimapElementOverMapRendererHandler"
import {$WaypointWorldRenderer} from "xaero.hud.minimap.waypoint.render.world.WaypointWorldRenderer"
import {$WaypointsIngameRenderer} from "xaero.common.minimap.waypoints.render.WaypointsIngameRenderer"
import {$CompassRenderer} from "xaero.hud.minimap.compass.render.CompassRenderer"
import {$HudMod, $HudMod$$Type} from "xaero.common.HudMod"
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
public "getCrashedWith"(): $Throwable
public "getCompassRenderer"(): $CompassRenderer
public "checkCrashes"(): void
public "getWorldRendererHandler"(): $MinimapElementWorldRendererHandler
public "getOverMapRendererHandler"(): $MinimapElementOverMapRendererHandler
public "getMinimapFBORenderer"(): $MinimapFBORenderer
public "getWaypointWorldRenderer"(): $WaypointWorldRenderer
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
public "getWaypointsGuiRenderer"(): $WaypointsGuiRenderer$0
/**
 * 
 * @deprecated
 */
public "getWaypointGuiRenderer"(): $WaypointsGuiRenderer
public "getWaypointMapRenderer"(): $WaypointMapRenderer
public "usingFBO"(): boolean
public "getModMain"(): $HudMod
set "crashedWith"(value: $Throwable$$Type)
get "infoDisplays"(): $InfoDisplays
get "crashedWith"(): $Throwable
get "compassRenderer"(): $CompassRenderer
get "worldRendererHandler"(): $MinimapElementWorldRendererHandler
get "overMapRendererHandler"(): $MinimapElementOverMapRendererHandler
get "minimapFBORenderer"(): $MinimapFBORenderer
get "waypointWorldRenderer"(): $WaypointWorldRenderer
get "minimapSafeModeRenderer"(): $MinimapSafeModeRenderer
get "waypointsIngameRenderer"(): $WaypointsIngameRenderer
get "waypointsGuiRenderer"(): $WaypointsGuiRenderer$0
get "waypointGuiRenderer"(): $WaypointsGuiRenderer
get "waypointMapRenderer"(): $WaypointMapRenderer
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
