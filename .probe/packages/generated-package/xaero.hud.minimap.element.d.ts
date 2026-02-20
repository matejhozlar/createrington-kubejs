declare module "xaero.hud.minimap.element.render.MinimapElementRenderInfo" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$MinimapElementRenderLocation, $MinimapElementRenderLocation$$Type} from "xaero.hud.minimap.element.render.MinimapElementRenderLocation"
import {$RenderTarget, $RenderTarget$$Type} from "com.mojang.blaze3d.pipeline.RenderTarget"

export class $MinimapElementRenderInfo {
readonly "mapDimension": $ResourceKey<($Level)>
readonly "renderEntityDimensionScale": double
readonly "backgroundCoordinateScale": double
readonly "cave": boolean
readonly "renderEntityPos": $Vec3
readonly "renderPos": $Vec3
readonly "renderEntity": $Entity
readonly "location": $MinimapElementRenderLocation
readonly "renderEntityDimension": $ResourceKey<($Level)>
readonly "player": $Player
readonly "partialTicks": float
readonly "framebuffer": $RenderTarget

constructor(arg0: $MinimapElementRenderLocation$$Type, arg1: $Entity$$Type, arg2: $Player$$Type, arg3: $Vec3$$Type, arg4: boolean, arg5: float, arg6: $RenderTarget$$Type, arg7: double, arg8: $ResourceKey$$Type<($Level)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapElementRenderInfo$$Type = ($MinimapElementRenderInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinimapElementRenderInfo$$Original = $MinimapElementRenderInfo;}
declare module "xaero.hud.minimap.element.render.MinimapElementRenderLocation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $MinimapElementRenderLocation {
/**
 * 
 * @deprecated
 */
static readonly "IN_GAME": $MinimapElementRenderLocation
static readonly "OVER_MINIMAP": $MinimapElementRenderLocation
static readonly "IN_MINIMAP": $MinimapElementRenderLocation
static readonly "WORLD_MAP": $MinimapElementRenderLocation
static readonly "UNKNOWN": $MinimapElementRenderLocation
static readonly "WORLD_MAP_MENU": $MinimapElementRenderLocation
static readonly "IN_WORLD": $MinimapElementRenderLocation

constructor()

public static "fromIndex"(arg0: integer): $MinimapElementRenderLocation
public "getIndex"(): integer
get "index"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapElementRenderLocation$$Type = ($MinimapElementRenderLocation);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinimapElementRenderLocation$$Original = $MinimapElementRenderLocation;}
declare module "xaero.hud.minimap.element.render.over.MinimapElementOverMapRendererHandler" {
import {$MinimapElementRendererHandler} from "xaero.common.minimap.element.render.MinimapElementRendererHandler"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"

export class $MinimapElementOverMapRendererHandler extends $MinimapElementRendererHandler {
public "prepareRender"(arg0: double, arg1: double, arg2: double, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: boolean, arg8: float): void
public static "translatePosition"(arg0: $PoseStack$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: double, arg6: double, arg7: double, arg8: double, arg9: double, arg10: boolean, arg11: (double)[]): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapElementOverMapRendererHandler$$Type = ($MinimapElementOverMapRendererHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinimapElementOverMapRendererHandler$$Original = $MinimapElementOverMapRendererHandler;}
declare module "xaero.hud.minimap.element.render.MinimapElementRenderer" {
import {$MultiTextureRenderTypeRendererProvider$$Type} from "xaero.common.graphics.renderer.multitexture.MultiTextureRenderTypeRendererProvider"
import {$MultiBufferSource$BufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$MinimapElementReader, $MinimapElementReader$$Type} from "xaero.hud.minimap.element.render.MinimapElementReader"
import {$MinimapElementRenderInfo$$Type} from "xaero.hud.minimap.element.render.MinimapElementRenderInfo"
import {$MinimapElementRenderLocation$$Type} from "xaero.hud.minimap.element.render.MinimapElementRenderLocation"
import {$MinimapElementRenderProvider, $MinimapElementRenderProvider$$Type} from "xaero.hud.minimap.element.render.MinimapElementRenderProvider"

export class $MinimapElementRenderer<E, RC> implements $Comparable$$Interface<($MinimapElementRenderer<(never), (never)>)> {
constructor(arg0: $MinimapElementReader$$Type<(E), (RC)>, arg1: $MinimapElementRenderProvider$$Type<(E), (RC)>, arg2: RC)

public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $MinimapElementRenderer$$Type<(never), (never)>): integer
public "getContext"(): RC
public "getProvider"(): $MinimapElementRenderProvider<(E), (RC)>
public "getOrder"(): integer
public "postRender"(arg0: $MinimapElementRenderInfo$$Type, arg1: $MultiBufferSource$BufferSource$$Type, arg2: $MultiTextureRenderTypeRendererProvider$$Type): void
public "shouldRender"(arg0: $MinimapElementRenderLocation$$Type): boolean
public "getElementReader"(): $MinimapElementReader<(E), (RC)>
public "renderElement"(arg0: E, arg1: boolean, arg2: boolean, arg3: double, arg4: float, arg5: double, arg6: double, arg7: $MinimapElementRenderInfo$$Type, arg8: $GuiGraphics$$Type, arg9: $MultiBufferSource$BufferSource$$Type): boolean
public "preRender"(arg0: $MinimapElementRenderInfo$$Type, arg1: $MultiBufferSource$BufferSource$$Type, arg2: $MultiTextureRenderTypeRendererProvider$$Type): void
get "context"(): RC
get "provider"(): $MinimapElementRenderProvider<(E), (RC)>
get "order"(): integer
get "elementReader"(): $MinimapElementReader<(E), (RC)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapElementRenderer$$Type<E, RC> = ($MinimapElementRenderer<(E), (RC)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinimapElementRenderer$$Original<E, RC> = $MinimapElementRenderer<(E), (RC)>;}
declare module "xaero.hud.minimap.element.render.world.MinimapElementWorldRendererHandler" {
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$MinimapElementRendererHandler} from "xaero.hud.minimap.element.render.MinimapElementRendererHandler"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$RenderTarget$$Type} from "com.mojang.blaze3d.pipeline.RenderTarget"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"

export class $MinimapElementWorldRendererHandler extends $MinimapElementRendererHandler {
public "render"(arg0: $GuiGraphics$$Type, arg1: $Vec3$$Type, arg2: float, arg3: $RenderTarget$$Type, arg4: double, arg5: $ResourceKey$$Type<($Level)>): void
public "prepareRender"(arg0: $Matrix4f$$Type, arg1: $Matrix4f$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapElementWorldRendererHandler$$Type = ($MinimapElementWorldRendererHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinimapElementWorldRendererHandler$$Original = $MinimapElementWorldRendererHandler;}
