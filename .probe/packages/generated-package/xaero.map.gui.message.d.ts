declare module "xaero.map.gui.message.render.MessageBoxRenderer" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$MessageBox$$Type} from "xaero.map.gui.message.MessageBox"
import {$Font$$Type} from "net.minecraft.client.gui.Font"

export class $MessageBoxRenderer {
constructor()

public "render"(arg0: $GuiGraphics$$Type, arg1: $MessageBox$$Type, arg2: $Font$$Type, arg3: integer, arg4: integer, arg5: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MessageBoxRenderer$$Type = ($MessageBoxRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MessageBoxRenderer$$Original = $MessageBoxRenderer;}
declare module "xaero.map.gui.message.Message" {
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $Message {
constructor(arg0: $Component$$Type, arg1: long)

public "getText"(): $Component
public "getAdditionTime"(): long
get "text"(): $Component
get "additionTime"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Message$$Type = ($Message);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Message$$Original = $Message;}
declare module "xaero.map.gui.message.MessageBox" {
import {$Iterator} from "java.util.Iterator"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Message} from "xaero.map.gui.message.Message"

export class $MessageBox {
public "getCapacity"(): integer
public "getIterator"(): $Iterator<($Message)>
public "addMessage"(arg0: $Component$$Type): void
public "addMessageWithSource"(arg0: $Component$$Type, arg1: $Component$$Type): void
get "capacity"(): integer
get "iterator"(): $Iterator<($Message)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MessageBox$$Type = ($MessageBox);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MessageBox$$Original = $MessageBox;}
