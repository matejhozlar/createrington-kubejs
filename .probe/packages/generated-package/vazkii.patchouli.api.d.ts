declare module "vazkii.patchouli.api.BookContentsReloadEvent" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Event} from "net.neoforged.bus.api.Event"

export class $BookContentsReloadEvent extends $Event {
constructor(arg0: $ResourceLocation$$Type)

public "getBook"(): $ResourceLocation
get "book"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookContentsReloadEvent$$Type = ($BookContentsReloadEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BookContentsReloadEvent$$Original = $BookContentsReloadEvent;}
declare module "vazkii.patchouli.api.BookDrawScreenEvent" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$Event} from "net.neoforged.bus.api.Event"

export class $BookDrawScreenEvent extends $Event {
constructor(arg0: $ResourceLocation$$Type, arg1: $Screen$$Type, arg2: integer, arg3: integer, arg4: float, arg5: $GuiGraphics$$Type)

public "getMouseY"(): integer
public "getMouseX"(): integer
public "getBook"(): $ResourceLocation
public "getScreen"(): $Screen
public "getPartialTicks"(): float
public "getGraphics"(): $GuiGraphics
get "mouseY"(): integer
get "mouseX"(): integer
get "book"(): $ResourceLocation
get "screen"(): $Screen
get "partialTicks"(): float
get "graphics"(): $GuiGraphics
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookDrawScreenEvent$$Type = ($BookDrawScreenEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BookDrawScreenEvent$$Original = $BookDrawScreenEvent;}
