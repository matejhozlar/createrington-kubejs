declare module "xaero.common.controls.ControlsHandler" {
import {$HudSession$$Type} from "xaero.hud.HudSession"
import {$IXaeroMinimap$$Type} from "xaero.common.IXaeroMinimap"
import {$KeyMapping$$Type} from "net.minecraft.client.KeyMapping"

/**
 * 
 * @deprecated
 */
export class $ControlsHandler {
constructor(arg0: $IXaeroMinimap$$Type, arg1: $HudSession$$Type)

/**
 * 
 * @deprecated
 */
public "isDown"(arg0: $KeyMapping$$Type): boolean
/**
 * 
 * @deprecated
 */
public "keyDown"(arg0: $KeyMapping$$Type, arg1: boolean, arg2: boolean): void
/**
 * 
 * @deprecated
 */
public "keyUp"(arg0: $KeyMapping$$Type, arg1: boolean): void
/**
 * 
 * @deprecated
 */
public "setKeyState"(arg0: $KeyMapping$$Type, arg1: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControlsHandler$$Type = ($ControlsHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ControlsHandler$$Original = $ControlsHandler;}
