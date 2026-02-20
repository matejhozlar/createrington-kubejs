declare module "xaero.hud.preset.HudPresetManager" {
import {$Iterable} from "java.lang.Iterable"
import {$HudPreset, $HudPreset$$Type} from "xaero.hud.preset.HudPreset"

export class $HudPresetManager {
constructor()

public "register"(arg0: $HudPreset$$Type): void
public "getPresets"(): $Iterable<($HudPreset)>
get "presets"(): $Iterable<($HudPreset)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HudPresetManager$$Type = ($HudPresetManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HudPresetManager$$Original = $HudPresetManager;}
