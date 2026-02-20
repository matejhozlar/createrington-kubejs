declare module "xaero.hud.minimap.module.MinimapSession" {
import {$MinimapWorldStateUpdater} from "xaero.hud.minimap.world.state.MinimapWorldStateUpdater"
import {$MultiTextureRenderTypeRendererProvider} from "xaero.common.graphics.renderer.multitexture.MultiTextureRenderTypeRendererProvider"
import {$HudMod$$Type} from "xaero.common.HudMod"
import {$MinimapWorldManager} from "xaero.hud.minimap.world.MinimapWorldManager"
import {$ModuleSession} from "xaero.hud.module.ModuleSession"
import {$MinimapDimensionHelper} from "xaero.hud.minimap.world.MinimapDimensionHelper"
import {$ClientPacketListener$$Type} from "net.minecraft.client.multiplayer.ClientPacketListener"
import {$MinimapWorldManagerIO} from "xaero.hud.minimap.world.io.MinimapWorldManagerIO"
import {$RadarSession} from "xaero.hud.minimap.radar.RadarSession"
import {$WaypointSession} from "xaero.hud.minimap.waypoint.WaypointSession"
import {$MinimapProcessor} from "xaero.common.minimap.MinimapProcessor"
import {$MinimapWorldState} from "xaero.hud.minimap.world.state.MinimapWorldState"
import {$Minecraft} from "net.minecraft.client.Minecraft"
import {$HudModule$$Type} from "xaero.hud.module.HudModule"

export class $MinimapSession extends $ModuleSession<($MinimapSession)> {
constructor(arg0: $HudMod$$Type, arg1: $HudModule$$Type<($MinimapSession$$Type)>, arg2: $ClientPacketListener$$Type)

public "close"(): void
public "getWidth"(arg0: double): integer
public "getProcessor"(): $MinimapProcessor
public "getHeight"(arg0: double): integer
public "getRadarSession"(): $RadarSession
public "getWaypointSession"(): $WaypointSession
public "getWorldStateUpdater"(): $MinimapWorldStateUpdater
public "getWorldManager"(): $MinimapWorldManager
public "getMultiTextureRenderTypeRenderers"(): $MultiTextureRenderTypeRendererProvider
public "getWorldManagerIO"(): $MinimapWorldManagerIO
public "getWorldState"(): $MinimapWorldState
public "getDimensionHelper"(): $MinimapDimensionHelper
public "getHideMinimapUnderF3"(): boolean
public "getHideMinimapUnderScreen"(): boolean
public "prePotentialRender"(): void
public "getConfiguredWidth"(): integer
public "getMc"(): $Minecraft
get "processor"(): $MinimapProcessor
get "radarSession"(): $RadarSession
get "waypointSession"(): $WaypointSession
get "worldStateUpdater"(): $MinimapWorldStateUpdater
get "worldManager"(): $MinimapWorldManager
get "multiTextureRenderTypeRenderers"(): $MultiTextureRenderTypeRendererProvider
get "worldManagerIO"(): $MinimapWorldManagerIO
get "worldState"(): $MinimapWorldState
get "dimensionHelper"(): $MinimapDimensionHelper
get "hideMinimapUnderF3"(): boolean
get "hideMinimapUnderScreen"(): boolean
get "configuredWidth"(): integer
get "mc"(): $Minecraft
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapSession$$Type = ($MinimapSession);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinimapSession$$Original = $MinimapSession;}
