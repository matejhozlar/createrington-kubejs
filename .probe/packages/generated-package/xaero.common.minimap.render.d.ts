declare module "xaero.common.minimap.render.MinimapSafeModeRenderer" {
import {$Iterator$$Type} from "java.util.Iterator"
import {$ModSettings$$Type} from "xaero.common.settings.ModSettings"
import {$CompassRenderer$$Type} from "xaero.hud.minimap.compass.render.CompassRenderer"
import {$HudMod$$Type} from "xaero.common.HudMod"
import {$RadarColor$$Type} from "xaero.hud.minimap.radar.color.RadarColor"
import {$MinimapRenderer} from "xaero.common.minimap.render.MinimapRenderer"
import {$MinimapProcessor$$Type} from "xaero.common.minimap.MinimapProcessor"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Minimap$$Type} from "xaero.hud.minimap.Minimap"
import {$MinimapSession$$Type} from "xaero.hud.minimap.module.MinimapSession"
import {$WaypointMapRenderer$$Type} from "xaero.hud.minimap.waypoint.render.WaypointMapRenderer"

export class $MinimapSafeModeRenderer extends $MinimapRenderer {
static readonly "black": integer
static readonly "slime": integer

constructor(arg0: $HudMod$$Type, arg1: $Minecraft$$Type, arg2: $WaypointMapRenderer$$Type, arg3: $Minimap$$Type, arg4: $CompassRenderer$$Type)

public "renderEntityListSafeMode"(arg0: $MinimapProcessor$$Type, arg1: $Entity$$Type, arg2: $Iterator$$Type<($Entity$$Type)>, arg3: double, arg4: double, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: double, arg10: double, arg11: float, arg12: integer, arg13: boolean, arg14: integer, arg15: $RadarColor$$Type, arg16: $RadarColor$$Type, arg17: double): void
public "updateMapFrameSafeMode"(arg0: $MinimapSession$$Type, arg1: $MinimapProcessor$$Type, arg2: $Player$$Type, arg3: $Entity$$Type, arg4: integer, arg5: integer, arg6: float, arg7: integer, arg8: boolean, arg9: integer, arg10: double, arg11: double, arg12: boolean, arg13: $ModSettings$$Type): void
public "renderEntityDotSafeMode"(arg0: $MinimapProcessor$$Type, arg1: $Entity$$Type, arg2: $Entity$$Type, arg3: double, arg4: double, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: double, arg10: double, arg11: float, arg12: integer, arg13: boolean, arg14: integer, arg15: $RadarColor$$Type, arg16: $RadarColor$$Type, arg17: double): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapSafeModeRenderer$$Type = ($MinimapSafeModeRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinimapSafeModeRenderer$$Original = $MinimapSafeModeRenderer;}
declare module "xaero.common.minimap.render.MinimapFBORenderer" {
import {$CompassRenderer$$Type} from "xaero.hud.minimap.compass.render.CompassRenderer"
import {$CustomVertexConsumers$$Type} from "xaero.common.graphics.CustomVertexConsumers"
import {$HudMod$$Type} from "xaero.common.HudMod"
import {$MultiBufferSource$BufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$MinimapRenderer} from "xaero.common.minimap.render.MinimapRenderer"
import {$RadarRenderer as $RadarRenderer$0} from "xaero.hud.minimap.radar.render.element.RadarRenderer"
import {$MinimapProcessor$$Type} from "xaero.common.minimap.MinimapProcessor"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$RadarRenderer} from "xaero.common.minimap.render.radar.element.RadarRenderer"
import {$EntityModel$$Type} from "net.minecraft.client.model.EntityModel"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Minimap$$Type} from "xaero.hud.minimap.Minimap"
import {$MinimapSession$$Type} from "xaero.hud.minimap.module.MinimapSession"
import {$ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"
import {$WaypointMapRenderer$$Type} from "xaero.hud.minimap.waypoint.render.WaypointMapRenderer"

export class $MinimapFBORenderer extends $MinimapRenderer {
static readonly "black": integer
static readonly "slime": integer

constructor(arg0: $HudMod$$Type, arg1: $Minecraft$$Type, arg2: $WaypointMapRenderer$$Type, arg3: $Minimap$$Type, arg4: $CompassRenderer$$Type)

public "assumeUsingFBO"(): boolean
public "isTriedFBO"(): boolean
public "setLoadedFBO"(arg0: boolean): void
public "renderChunksToFBO"(arg0: $MinimapSession$$Type, arg1: $GuiGraphics$$Type, arg2: $MinimapProcessor$$Type, arg3: $Vec3$$Type, arg4: $ResourceKey$$Type<($Level)>, arg5: double, arg6: integer, arg7: float, arg8: integer, arg9: boolean, arg10: boolean, arg11: integer, arg12: double, arg13: double, arg14: boolean, arg15: $CustomVertexConsumers$$Type): void
/**
 * 
 * @deprecated
 */
public "getRadarRenderer"(): $RadarRenderer
public "deleteFramebuffers"(): void
public "loadFrameBuffer"(arg0: $MinimapProcessor$$Type): void
public "resetEntityIcons"(): void
public "isLoadedFBO"(): boolean
public "resetEntityIconsResources"(): void
public "onRadarIconModelRenderTrace"(arg0: $EntityModel$$Type<(never)>, arg1: $VertexConsumer$$Type, arg2: integer): void
public "onEntityIconModelPartRenderTrace"(arg0: $ModelPart$$Type, arg1: integer): void
public "renderMainEntityDot"(arg0: $GuiGraphics$$Type, arg1: $Entity$$Type, arg2: boolean, arg3: $MultiBufferSource$BufferSource$$Type): void
public "getEntityRadarRenderer"(): $RadarRenderer$0
get "triedFBO"(): boolean
set "loadedFBO"(value: boolean)
get "radarRenderer"(): $RadarRenderer
get "loadedFBO"(): boolean
get "entityRadarRenderer"(): $RadarRenderer$0
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapFBORenderer$$Type = ($MinimapFBORenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinimapFBORenderer$$Original = $MinimapFBORenderer;}
