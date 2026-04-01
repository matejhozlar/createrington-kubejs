declare module "io.wispforest.accessories.client.gui.ButtonEvents$AdjustRendering" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$AbstractButton, $AbstractButton$$Type} from "net.minecraft.client.gui.components.AbstractButton"

export interface $ButtonEvents$AdjustRendering$$Interface {

(arg0: $AbstractButton, arg1: $GuiGraphics, arg2: $ResourceLocation, arg3: integer, arg4: integer, arg5: integer, arg6: integer): boolean
}

export class $ButtonEvents$AdjustRendering implements $ButtonEvents$AdjustRendering$$Interface {
 "render"(arg0: $AbstractButton$$Type, arg1: $GuiGraphics$$Type, arg2: $ResourceLocation$$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ButtonEvents$AdjustRendering$$Type = ((arg0: $AbstractButton, arg1: $GuiGraphics, arg2: $ResourceLocation, arg3: integer, arg4: integer, arg5: integer, arg6: integer) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ButtonEvents$AdjustRendering$$Original = $ButtonEvents$AdjustRendering;}
declare module "io.wispforest.accessories.client.gui.AbstractButtonExtension" {
import {$ButtonEvents$AdjustRendering, $ButtonEvents$AdjustRendering$$Type} from "io.wispforest.accessories.client.gui.ButtonEvents$AdjustRendering"
import {$AbstractButton} from "net.minecraft.client.gui.components.AbstractButton"
import {$Event, $Event$$Type} from "net.fabricmc.fabric.api.event.Event"

export interface $AbstractButtonExtension$$Interface {

(): $Event$$Type<($ButtonEvents$AdjustRendering$$Type)>
get "renderingEvent"(): $Event<($ButtonEvents$AdjustRendering)>
}

export class $AbstractButtonExtension implements $AbstractButtonExtension$$Interface {
 "adjustRendering"<B extends $AbstractButton>(event: $ButtonEvents$AdjustRendering$$Type): B
 "getRenderingEvent"(): $Event<($ButtonEvents$AdjustRendering)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractButtonExtension$$Type = (() => $Event$$Type<($ButtonEvents$AdjustRendering$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractButtonExtension$$Original = $AbstractButtonExtension;}
