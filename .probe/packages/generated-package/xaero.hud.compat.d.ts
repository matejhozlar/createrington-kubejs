declare module "xaero.hud.compat.OldSystemCompatibility" {
import {$ModuleTransform, $ModuleTransform$$Type} from "xaero.hud.module.ModuleTransform"
import {$ModuleSession$$Type} from "xaero.hud.module.ModuleSession"
import {$ModuleRenderContext$$Type} from "xaero.hud.render.module.ModuleRenderContext"

export class $OldSystemCompatibility {
constructor()

public "convertTransform"(arg0: $ModuleTransform$$Type, arg1: $ModuleSession$$Type<(never)>, arg2: $ModuleRenderContext$$Type): void
public "loadOldTransform"(arg0: (StringJS)[]): $ModuleTransform
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OldSystemCompatibility$$Type = ($OldSystemCompatibility);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OldSystemCompatibility$$Original = $OldSystemCompatibility;}
