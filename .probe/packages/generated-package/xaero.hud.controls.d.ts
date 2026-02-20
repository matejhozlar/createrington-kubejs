declare module "xaero.hud.controls.ControlsRegister" {
import {$KeyMappingControllerManager} from "xaero.hud.controls.key.KeyMappingControllerManager"
import {$KeyMapping$$Type} from "net.minecraft.client.KeyMapping"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $ControlsRegister {
public "registerKeybindings"(arg0: $Consumer$$Type<($KeyMapping)>): void
public "onStage2"(): void
public "getKeyMappingControllers"(): $KeyMappingControllerManager
get "keyMappingControllers"(): $KeyMappingControllerManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControlsRegister$$Type = ($ControlsRegister);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ControlsRegister$$Original = $ControlsRegister;}
