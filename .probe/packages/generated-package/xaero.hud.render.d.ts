declare module "xaero.hud.render.HudRenderer" {
import {$CustomVertexConsumers} from "xaero.common.graphics.CustomVertexConsumers"
import {$Hud$$Type} from "xaero.hud.Hud"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$PushboxHandler, $PushboxHandler$$Type} from "xaero.hud.pushbox.PushboxHandler"

export class $HudRenderer {
constructor(arg0: $PushboxHandler$$Type)

public "render"(arg0: $Hud$$Type, arg1: $GuiGraphics$$Type, arg2: float): void
public "getCustomVertexConsumers"(): $CustomVertexConsumers
public "getPushboxHandler"(): $PushboxHandler
get "customVertexConsumers"(): $CustomVertexConsumers
get "pushboxHandler"(): $PushboxHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HudRenderer$$Type = ($HudRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HudRenderer$$Original = $HudRenderer;}
