declare module "com.blamejared.controlling.api.events.IKeyEntryMouseReleasedEvent" {
import {$IKeyEntry} from "com.blamejared.controlling.api.entries.IKeyEntry"

export interface $IKeyEntryMouseReleasedEvent$$Interface {
get "entry"(): $IKeyEntry
get "handled"(): boolean
get "mouseX"(): double
get "mouseY"(): double
set "handled"(value: boolean)
get "buttonId"(): integer
}

export class $IKeyEntryMouseReleasedEvent implements $IKeyEntryMouseReleasedEvent$$Interface {
 "getEntry"(): $IKeyEntry
 "isHandled"(): boolean
 "getMouseX"(): double
 "getMouseY"(): double
 "setHandled"(arg0: boolean): void
 "getButtonId"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IKeyEntryMouseReleasedEvent$$Type = ($IKeyEntryMouseReleasedEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IKeyEntryMouseReleasedEvent$$Original = $IKeyEntryMouseReleasedEvent;}
declare module "com.blamejared.controlling.api.entries.IKeyEntry" {
import {$GuiEventListener} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$List} from "java.util.List"
import {$KeyMapping} from "net.minecraft.client.KeyMapping"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Button} from "net.minecraft.client.gui.components.Button"

export interface $IKeyEntry$$Interface {
get "key"(): $KeyMapping
get "keyDesc"(): $Component
get "btnChangeKeyBinding"(): $Button
get "btnResetKeyBinding"(): $Button
}

export class $IKeyEntry implements $IKeyEntry$$Interface {
 "getKey"(): $KeyMapping
 "children"(): $List<($GuiEventListener)>
 "categoryName"(): $Component
 "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: boolean, arg9: float): void
 "getKeyDesc"(): $Component
 "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
 "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
 "getBtnChangeKeyBinding"(): $Button
 "getBtnResetKeyBinding"(): $Button
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IKeyEntry$$Type = ($IKeyEntry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IKeyEntry$$Original = $IKeyEntry;}
declare module "com.blamejared.controlling.api.events.KeyEntryRenderEvent" {
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$IKeyEntry, $IKeyEntry$$Type} from "com.blamejared.controlling.api.entries.IKeyEntry"
import {$Event} from "net.neoforged.bus.api.Event"
import {$IKeyEntryRenderEvent$$Interface} from "com.blamejared.controlling.api.events.IKeyEntryRenderEvent"

export class $KeyEntryRenderEvent extends $Event implements $IKeyEntryRenderEvent$$Interface {
constructor(arg0: $IKeyEntry$$Type, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: boolean, arg10: float)

public "getEntry"(): $IKeyEntry
public "getY"(): integer
public "getRowWidth"(): integer
public "isHovered"(): boolean
public "getSlotIndex"(): integer
public "getPartialTicks"(): float
public "getRowLeft"(): integer
public "getX"(): integer
public "getMouseX"(): integer
public "getMouseY"(): integer
public "getGuiGraphics"(): $GuiGraphics
get "entry"(): $IKeyEntry
get "y"(): integer
get "rowWidth"(): integer
get "hovered"(): boolean
get "slotIndex"(): integer
get "partialTicks"(): float
get "rowLeft"(): integer
get "x"(): integer
get "mouseX"(): integer
get "mouseY"(): integer
get "guiGraphics"(): $GuiGraphics
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyEntryRenderEvent$$Type = ($KeyEntryRenderEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyEntryRenderEvent$$Original = $KeyEntryRenderEvent;}
declare module "com.blamejared.controlling.api.events.IKeyEntryListenersEvent" {
import {$GuiEventListener} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$IKeyEntry} from "com.blamejared.controlling.api.entries.IKeyEntry"
import {$List} from "java.util.List"

export interface $IKeyEntryListenersEvent$$Interface {
get "entry"(): $IKeyEntry
get "listeners"(): $List<($GuiEventListener)>
}

export class $IKeyEntryListenersEvent implements $IKeyEntryListenersEvent$$Interface {
 "getEntry"(): $IKeyEntry
 "getListeners"(): $List<($GuiEventListener)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IKeyEntryListenersEvent$$Type = ($IKeyEntryListenersEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IKeyEntryListenersEvent$$Original = $IKeyEntryListenersEvent;}
declare module "com.blamejared.controlling.api.events.IKeyEntryRenderEvent" {
import {$GuiGraphics} from "net.minecraft.client.gui.GuiGraphics"
import {$IKeyEntry} from "com.blamejared.controlling.api.entries.IKeyEntry"

export interface $IKeyEntryRenderEvent$$Interface {
get "entry"(): $IKeyEntry
get "y"(): integer
get "rowWidth"(): integer
get "hovered"(): boolean
get "slotIndex"(): integer
get "partialTicks"(): float
get "rowLeft"(): integer
get "x"(): integer
get "mouseX"(): integer
get "mouseY"(): integer
get "guiGraphics"(): $GuiGraphics
}

export class $IKeyEntryRenderEvent implements $IKeyEntryRenderEvent$$Interface {
 "getEntry"(): $IKeyEntry
 "getY"(): integer
 "getRowWidth"(): integer
 "isHovered"(): boolean
 "getSlotIndex"(): integer
 "getPartialTicks"(): float
 "getRowLeft"(): integer
 "getX"(): integer
 "getMouseX"(): integer
 "getMouseY"(): integer
 "getGuiGraphics"(): $GuiGraphics
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IKeyEntryRenderEvent$$Type = ($IKeyEntryRenderEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IKeyEntryRenderEvent$$Original = $IKeyEntryRenderEvent;}
declare module "com.blamejared.controlling.api.events.KeyEntryMouseReleasedEvent" {
import {$IKeyEntryMouseReleasedEvent$$Interface} from "com.blamejared.controlling.api.events.IKeyEntryMouseReleasedEvent"
import {$IKeyEntry, $IKeyEntry$$Type} from "com.blamejared.controlling.api.entries.IKeyEntry"
import {$Event} from "net.neoforged.bus.api.Event"

export class $KeyEntryMouseReleasedEvent extends $Event implements $IKeyEntryMouseReleasedEvent$$Interface {
constructor(arg0: $IKeyEntry$$Type, arg1: double, arg2: double, arg3: integer)

public "getEntry"(): $IKeyEntry
public "isHandled"(): boolean
public "getMouseX"(): double
public "getMouseY"(): double
public "setHandled"(arg0: boolean): void
public "getButtonId"(): integer
get "entry"(): $IKeyEntry
get "handled"(): boolean
get "mouseX"(): double
get "mouseY"(): double
set "handled"(value: boolean)
get "buttonId"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyEntryMouseReleasedEvent$$Type = ($KeyEntryMouseReleasedEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyEntryMouseReleasedEvent$$Original = $KeyEntryMouseReleasedEvent;}
declare module "com.blamejared.controlling.api.events.KeyEntryListenersEvent" {
import {$GuiEventListener} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$IKeyEntry, $IKeyEntry$$Type} from "com.blamejared.controlling.api.entries.IKeyEntry"
import {$List} from "java.util.List"
import {$Event} from "net.neoforged.bus.api.Event"
import {$IKeyEntryListenersEvent$$Interface} from "com.blamejared.controlling.api.events.IKeyEntryListenersEvent"

export class $KeyEntryListenersEvent extends $Event implements $IKeyEntryListenersEvent$$Interface {
constructor(arg0: $IKeyEntry$$Type)

public "getEntry"(): $IKeyEntry
public "getListeners"(): $List<($GuiEventListener)>
get "entry"(): $IKeyEntry
get "listeners"(): $List<($GuiEventListener)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyEntryListenersEvent$$Type = ($KeyEntryListenersEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyEntryListenersEvent$$Original = $KeyEntryListenersEvent;}
declare module "com.blamejared.controlling.api.events.KeyEntryMouseClickedEvent" {
import {$IKeyEntry, $IKeyEntry$$Type} from "com.blamejared.controlling.api.entries.IKeyEntry"
import {$Event} from "net.neoforged.bus.api.Event"
import {$IKeyEntryMouseClickedEvent$$Interface} from "com.blamejared.controlling.api.events.IKeyEntryMouseClickedEvent"

export class $KeyEntryMouseClickedEvent extends $Event implements $IKeyEntryMouseClickedEvent$$Interface {
constructor(arg0: $IKeyEntry$$Type, arg1: double, arg2: double, arg3: integer)

public "getEntry"(): $IKeyEntry
public "isHandled"(): boolean
public "getMouseX"(): double
public "getMouseY"(): double
public "setHandled"(arg0: boolean): void
public "getButtonId"(): integer
get "entry"(): $IKeyEntry
get "handled"(): boolean
get "mouseX"(): double
get "mouseY"(): double
set "handled"(value: boolean)
get "buttonId"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyEntryMouseClickedEvent$$Type = ($KeyEntryMouseClickedEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyEntryMouseClickedEvent$$Original = $KeyEntryMouseClickedEvent;}
declare module "com.blamejared.controlling.api.events.IKeyEntryMouseClickedEvent" {
import {$IKeyEntry} from "com.blamejared.controlling.api.entries.IKeyEntry"

export interface $IKeyEntryMouseClickedEvent$$Interface {
get "entry"(): $IKeyEntry
get "handled"(): boolean
get "mouseX"(): double
get "mouseY"(): double
set "handled"(value: boolean)
get "buttonId"(): integer
}

export class $IKeyEntryMouseClickedEvent implements $IKeyEntryMouseClickedEvent$$Interface {
 "getEntry"(): $IKeyEntry
 "isHandled"(): boolean
 "getMouseX"(): double
 "getMouseY"(): double
 "setHandled"(arg0: boolean): void
 "getButtonId"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IKeyEntryMouseClickedEvent$$Type = ($IKeyEntryMouseClickedEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IKeyEntryMouseClickedEvent$$Original = $IKeyEntryMouseClickedEvent;}
