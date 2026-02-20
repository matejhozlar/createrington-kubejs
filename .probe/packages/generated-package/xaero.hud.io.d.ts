declare module "xaero.hud.io.HudIO" {
import {$PrintWriter$$Type} from "java.io.PrintWriter"

export class $HudIO {
static readonly "SEPARATOR": StringJS
static readonly "MODULE_LINE_PREFIX": StringJS

public "load"(arg0: StringJS, arg1: boolean): boolean
public "save"(arg0: $PrintWriter$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HudIO$$Type = ($HudIO);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HudIO$$Original = $HudIO;}
