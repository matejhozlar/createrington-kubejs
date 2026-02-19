declare module "dev.tr7zw.trender.gui.impl.mixin.client.DrawContextAccessor" {
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"

export interface $DrawContextAccessor$$Interface {

(): $MultiBufferSource$BufferSource$$Type
}

export class $DrawContextAccessor implements $DrawContextAccessor$$Interface {
 "libgui$getVertexConsumers"(): $MultiBufferSource$BufferSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrawContextAccessor$$Type = (() => $MultiBufferSource$BufferSource$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DrawContextAccessor$$Original = $DrawContextAccessor;}
declare module "dev.tr7zw.trender.gui.impl.mixin.client.ScreenAccessor" {
import {$GuiEventListener, $GuiEventListener$$Type} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$List, $List$$Type} from "java.util.List"

export interface $ScreenAccessor$$Interface {

(): $List$$Type<($GuiEventListener$$Type)>
}

export class $ScreenAccessor implements $ScreenAccessor$$Interface {
 "libgui$getChildren"(): $List<($GuiEventListener)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenAccessor$$Type = (() => $List$$Type<($GuiEventListener$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenAccessor$$Original = $ScreenAccessor;}
