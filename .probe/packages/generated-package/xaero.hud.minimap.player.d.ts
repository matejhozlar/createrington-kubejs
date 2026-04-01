declare module "xaero.hud.minimap.player.tracker.system.IRenderedPlayerTracker" {
import {$Iterator} from "java.util.Iterator"
import {$ITrackedPlayerReader} from "xaero.hud.minimap.player.tracker.system.ITrackedPlayerReader"

export interface $IRenderedPlayerTracker$$Interface<P> {
get "reader"(): $ITrackedPlayerReader<(P)>
get "trackedPlayerIterator"(): $Iterator<(P)>
}

export class $IRenderedPlayerTracker<P> implements $IRenderedPlayerTracker$$Interface {
 "getReader"(): $ITrackedPlayerReader<(P)>
 "getTrackedPlayerIterator"(): $Iterator<(P)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRenderedPlayerTracker$$Type<P> = ($IRenderedPlayerTracker<(P)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IRenderedPlayerTracker$$Original<P> = $IRenderedPlayerTracker<(P)>;}
declare module "xaero.hud.minimap.player.tracker.PlayerTrackerMinimapElementCollector" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Iterable} from "java.lang.Iterable"
import {$RenderedPlayerTrackerManager$$Type} from "xaero.hud.minimap.player.tracker.system.RenderedPlayerTrackerManager"
import {$UUID$$Type} from "java.util.UUID"
import {$PlayerTrackerMinimapElement} from "xaero.hud.minimap.player.tracker.PlayerTrackerMinimapElement"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"

export class $PlayerTrackerMinimapElementCollector {
constructor(arg0: $RenderedPlayerTrackerManager$$Type)

public "update"(arg0: $Minecraft$$Type): void
public "getElements"(): $Iterable<($PlayerTrackerMinimapElement<(never)>)>
public "playerExists"(arg0: $UUID$$Type): boolean
public "confirmPlayerRadarRender"(arg0: $Player$$Type): void
public "resetRenderedOnRadarFlags"(): void
get "elements"(): $Iterable<($PlayerTrackerMinimapElement<(never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerTrackerMinimapElementCollector$$Type = ($PlayerTrackerMinimapElementCollector);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerTrackerMinimapElementCollector$$Original = $PlayerTrackerMinimapElementCollector;}
declare module "xaero.hud.minimap.player.tracker.PlayerTrackerMinimapElementRenderer" {
import {$MultiTextureRenderTypeRendererProvider$$Type} from "xaero.common.graphics.renderer.multitexture.MultiTextureRenderTypeRendererProvider"
import {$MinimapElementRenderer} from "xaero.hud.minimap.element.render.MinimapElementRenderer"
import {$MultiBufferSource$BufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"
import {$MinimapElementRenderInfo$$Type} from "xaero.hud.minimap.element.render.MinimapElementRenderInfo"
import {$PlayerTrackerMinimapElement, $PlayerTrackerMinimapElement$$Type} from "xaero.hud.minimap.player.tracker.PlayerTrackerMinimapElement"
import {$PlayerInfo$$Type} from "net.minecraft.client.multiplayer.PlayerInfo"
import {$PlayerTrackerMinimapElementRenderContext} from "xaero.hud.minimap.player.tracker.PlayerTrackerMinimapElementRenderContext"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$PlayerTrackerMinimapElementCollector} from "xaero.hud.minimap.player.tracker.PlayerTrackerMinimapElementCollector"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$MinimapElementRenderLocation$$Type} from "xaero.hud.minimap.element.render.MinimapElementRenderLocation"

export class $PlayerTrackerMinimapElementRenderer extends $MinimapElementRenderer<($PlayerTrackerMinimapElement<(never)>), ($PlayerTrackerMinimapElementRenderContext)> {
public "getOrder"(): integer
public "renderElement"(arg0: $PlayerTrackerMinimapElement$$Type<(never)>, arg1: boolean, arg2: boolean, arg3: double, arg4: float, arg5: double, arg6: double, arg7: $MinimapElementRenderInfo$$Type, arg8: $GuiGraphics$$Type, arg9: $MultiBufferSource$BufferSource$$Type): boolean
public "renderElement"(arg0: any, arg1: boolean, arg2: boolean, arg3: double, arg4: float, arg5: double, arg6: double, arg7: $MinimapElementRenderInfo$$Type, arg8: $GuiGraphics$$Type, arg9: $MultiBufferSource$BufferSource$$Type): boolean
public "getPlayerSkin"(arg0: $Player$$Type, arg1: $PlayerInfo$$Type): $ResourceLocation
public "getCollector"(): $PlayerTrackerMinimapElementCollector
public "postRender"(arg0: $MinimapElementRenderInfo$$Type, arg1: $MultiBufferSource$BufferSource$$Type, arg2: $MultiTextureRenderTypeRendererProvider$$Type): void
public "shouldRender"(arg0: $MinimapElementRenderLocation$$Type): boolean
public "preRender"(arg0: $MinimapElementRenderInfo$$Type, arg1: $MultiBufferSource$BufferSource$$Type, arg2: $MultiTextureRenderTypeRendererProvider$$Type): void
get "order"(): integer
get "collector"(): $PlayerTrackerMinimapElementCollector
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerTrackerMinimapElementRenderer$$Type = ($PlayerTrackerMinimapElementRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerTrackerMinimapElementRenderer$$Original = $PlayerTrackerMinimapElementRenderer;}
declare module "xaero.hud.minimap.player.tracker.synced.ClientSyncedTrackedPlayerManager" {
import {$Iterable} from "java.lang.Iterable"
import {$UUID$$Type} from "java.util.UUID"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$SyncedTrackedPlayer} from "xaero.common.server.radar.tracker.SyncedTrackedPlayer"

export class $ClientSyncedTrackedPlayerManager {
public "remove"(arg0: $UUID$$Type): void
public "reset"(): void
public "update"(arg0: $UUID$$Type, arg1: double, arg2: double, arg3: double, arg4: $ResourceKey$$Type<($Level)>): void
public "getPlayers"(): $Iterable<($SyncedTrackedPlayer)>
get "players"(): $Iterable<($SyncedTrackedPlayer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientSyncedTrackedPlayerManager$$Type = ($ClientSyncedTrackedPlayerManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientSyncedTrackedPlayerManager$$Original = $ClientSyncedTrackedPlayerManager;}
declare module "xaero.hud.minimap.player.tracker.system.RenderedPlayerTrackerManager" {
import {$Iterable} from "java.lang.Iterable"
import {$IRenderedPlayerTracker, $IRenderedPlayerTracker$$Type} from "xaero.hud.minimap.player.tracker.system.IRenderedPlayerTracker"

export class $RenderedPlayerTrackerManager {
public "register"(arg0: StringJS, arg1: $IRenderedPlayerTracker$$Type<(never)>): void
public "getAllSystems"(): $Iterable<($IRenderedPlayerTracker<(never)>)>
get "allSystems"(): $Iterable<($IRenderedPlayerTracker<(never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderedPlayerTrackerManager$$Type = ($RenderedPlayerTrackerManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderedPlayerTrackerManager$$Original = $RenderedPlayerTrackerManager;}
declare module "xaero.hud.minimap.player.tracker.PlayerTrackerMinimapElementRenderContext" {
import {$MultiTextureRenderTypeRenderer} from "xaero.common.graphics.renderer.multitexture.MultiTextureRenderTypeRenderer"
import {$Level} from "net.minecraft.world.level.Level"
import {$VertexConsumer} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"

export class $PlayerTrackerMinimapElementRenderContext {
 "uniqueTextureUIObjectRenderer": $MultiTextureRenderTypeRenderer
 "coloredBackgroundConsumer": $VertexConsumer
 "renderEntityDimId": $ResourceKey<($Level)>
 "mapDimId": $ResourceKey<($Level)>
 "iconScale": float

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerTrackerMinimapElementRenderContext$$Type = ($PlayerTrackerMinimapElementRenderContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerTrackerMinimapElementRenderContext$$Original = $PlayerTrackerMinimapElementRenderContext;}
declare module "xaero.hud.minimap.player.tracker.PlayerTrackerMinimapElement" {
import {$IRenderedPlayerTracker, $IRenderedPlayerTracker$$Type} from "xaero.hud.minimap.player.tracker.system.IRenderedPlayerTracker"
import {$UUID} from "java.util.UUID"
import {$Level} from "net.minecraft.world.level.Level"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"

export class $PlayerTrackerMinimapElement<P> {
constructor(arg0: P, arg1: $IRenderedPlayerTracker$$Type<(P)>)

public "getY"(): double
public "getDimension"(): $ResourceKey<($Level)>
public "getPlayer"(): P
public "wasRenderedOnRadar"(): boolean
public "getSystem"(): $IRenderedPlayerTracker<(P)>
public "getPlayerId"(): $UUID
public "getX"(): double
public "getZ"(): double
public "setRenderedOnRadar"(arg0: boolean): void
get "y"(): double
get "dimension"(): $ResourceKey<($Level)>
get "player"(): P
get "system"(): $IRenderedPlayerTracker<(P)>
get "playerId"(): $UUID
get "x"(): double
get "z"(): double
set "renderedOnRadar"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerTrackerMinimapElement$$Type<P> = ($PlayerTrackerMinimapElement<(P)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerTrackerMinimapElement$$Original<P> = $PlayerTrackerMinimapElement<(P)>;}
