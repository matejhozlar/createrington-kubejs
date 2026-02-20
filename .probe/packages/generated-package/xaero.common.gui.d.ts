declare module "xaero.common.gui.GuiHelper" {
import {$ScreenBase} from "xaero.lib.client.gui.ScreenBase"
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$IXaeroMinimap$$Type} from "xaero.common.IXaeroMinimap"
import {$GuiSettings} from "xaero.lib.client.gui.GuiSettings"

export class $GuiHelper {
constructor(arg0: $IXaeroMinimap$$Type)

public "getMainSettingsScreen"(arg0: $Screen$$Type): $GuiSettings
public "openMainSettingsFromScreen"(arg0: $Screen$$Type): void
public "getMinimapSettingsFromScreen"(arg0: $Screen$$Type): $ScreenBase
/**
 * 
 * @deprecated
 */
public "openMinimapSettingsFromScreen"(arg0: $Screen$$Type, arg1: $Screen$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiHelper$$Type = ($GuiHelper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiHelper$$Original = $GuiHelper;}
