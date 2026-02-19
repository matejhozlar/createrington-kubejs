declare module "net.createmod.catnip.gui.element.ScreenElement" {
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"

export interface $ScreenElement$$Interface {

(arg0: $GuiGraphics, arg1: integer, arg2: integer): void
}

export class $ScreenElement implements $ScreenElement$$Interface {
 "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenElement$$Type = ((arg0: $GuiGraphics, arg1: integer, arg2: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenElement$$Original = $ScreenElement;}
declare module "net.createmod.catnip.gui.TextureSheetSegment" {
import {$BindableTexture$$Interface} from "net.createmod.catnip.render.BindableTexture"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"

export interface $TextureSheetSegment$$Interface extends $BindableTexture$$Interface {
get "startY"(): integer
get "startX"(): integer
get "width"(): integer
get "height"(): integer
get "location"(): $ResourceLocation
}

export class $TextureSheetSegment implements $TextureSheetSegment$$Interface {
 "getStartY"(): integer
 "getStartX"(): integer
 "getWidth"(): integer
 "getHeight"(): integer
 "getLocation"(): $ResourceLocation
 "bind"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureSheetSegment$$Type = ($TextureSheetSegment);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextureSheetSegment$$Original = $TextureSheetSegment;}
