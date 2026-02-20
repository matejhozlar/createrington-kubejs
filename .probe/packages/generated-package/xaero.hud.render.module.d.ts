declare module "xaero.hud.render.module.IModuleRenderer" {
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$ModuleSession, $ModuleSession$$Type} from "xaero.hud.module.ModuleSession"
import {$ModuleRenderContext, $ModuleRenderContext$$Type} from "xaero.hud.render.module.ModuleRenderContext"

export interface $IModuleRenderer$$Interface<MS extends $ModuleSession<(object)>> {

(arg0: MS, arg1: $ModuleRenderContext, arg2: $GuiGraphics, arg3: float): void
}

export class $IModuleRenderer<MS extends $ModuleSession<(object)>> implements $IModuleRenderer$$Interface {
 "render"(arg0: MS, arg1: $ModuleRenderContext$$Type, arg2: $GuiGraphics$$Type, arg3: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModuleRenderer$$Type<MS> = ((arg0: MS, arg1: $ModuleRenderContext, arg2: $GuiGraphics, arg3: float) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IModuleRenderer$$Original<MS> = $IModuleRenderer<(MS)>;}
