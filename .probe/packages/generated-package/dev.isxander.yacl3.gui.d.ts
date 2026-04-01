declare module "dev.isxander.yacl3.gui.render.GuiRenderStateSink" {
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"

export interface $GuiRenderStateSink$$Interface {

(): $MultiBufferSource$$Type
}

export class $GuiRenderStateSink implements $GuiRenderStateSink$$Interface {
static "bufferSource"(arg0: $GuiGraphics$$Type): $MultiBufferSource
 "yacl$bufferSource"(): $MultiBufferSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiRenderStateSink$$Type = (() => $MultiBufferSource$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiRenderStateSink$$Original = $GuiRenderStateSink;}
