declare module "xaero.map.graphics.renderer.multitexture.MultiTextureRenderTypeRenderer" {
import {$BufferBuilder} from "com.mojang.blaze3d.vertex.BufferBuilder"

export class $MultiTextureRenderTypeRenderer {
public "begin"(arg0: integer): $BufferBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiTextureRenderTypeRenderer$$Type = ($MultiTextureRenderTypeRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiTextureRenderTypeRenderer$$Original = $MultiTextureRenderTypeRenderer;}
declare module "xaero.map.graphics.renderer.multitexture.MultiTextureRenderTypeRendererProvider" {
import {$IntConsumer$$Type} from "java.util.function.IntConsumer"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$MultiTextureRenderTypeRenderer, $MultiTextureRenderTypeRenderer$$Type} from "xaero.map.graphics.renderer.multitexture.MultiTextureRenderTypeRenderer"

export class $MultiTextureRenderTypeRendererProvider {
constructor(arg0: integer)

public "getRenderer"(arg0: $IntConsumer$$Type, arg1: $IntConsumer$$Type, arg2: $Runnable$$Type, arg3: $RenderType$$Type): $MultiTextureRenderTypeRenderer
public "getRenderer"(arg0: $IntConsumer$$Type, arg1: $IntConsumer$$Type, arg2: $RenderType$$Type): $MultiTextureRenderTypeRenderer
public "draw"(arg0: $MultiTextureRenderTypeRenderer$$Type): void
public static "defaultTextureBind"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiTextureRenderTypeRendererProvider$$Type = ($MultiTextureRenderTypeRendererProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiTextureRenderTypeRendererProvider$$Original = $MultiTextureRenderTypeRendererProvider;}
