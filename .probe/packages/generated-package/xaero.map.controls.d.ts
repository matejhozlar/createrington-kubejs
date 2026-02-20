declare module "xaero.map.controls.ControlsHandler" {
import {$MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$KeyMapping$$Type} from "net.minecraft.client.KeyMapping"

export class $ControlsHandler {
constructor(arg0: $MapProcessor$$Type)

public "keyDown"(arg0: $KeyMapping$$Type, arg1: boolean, arg2: boolean): void
public "keyUp"(arg0: $KeyMapping$$Type, arg1: boolean): void
public "onKeyInput"(arg0: $Minecraft$$Type): void
public "handleKeyEvents"(): void
public static "isKeyRepeat"(arg0: $KeyMapping$$Type): boolean
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
