declare module "de.mrjulsen.mcdragonlib.mixin.BakedGlyphAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BakedGlyphAccessor$$Interface {
}

export class $BakedGlyphAccessor implements $BakedGlyphAccessor$$Interface {
 "dragonlib$setU0"(arg0: float): void
 "dragonlib$getU0"(): float
 "dragonlib$setU1"(arg0: float): void
 "dragonlib$getU1"(): float
 "dragonlib$setV0"(arg0: float): void
 "dragonlib$getV0"(): float
 "dragonlib$setV1"(arg0: float): void
 "dragonlib$getV1"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakedGlyphAccessor$$Type = ($BakedGlyphAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BakedGlyphAccessor$$Original = $BakedGlyphAccessor;}
declare module "de.mrjulsen.mcdragonlib.mixin.ScreenAccessor" {
import {$FocusNavigationEvent$TabNavigation} from "net.minecraft.client.gui.navigation.FocusNavigationEvent$TabNavigation"
import {$FocusNavigationEvent$ArrowNavigation} from "net.minecraft.client.gui.navigation.FocusNavigationEvent$ArrowNavigation"
import {$ScreenDirection$$Type} from "net.minecraft.client.gui.navigation.ScreenDirection"

export interface $ScreenAccessor$$Interface {
}

export class $ScreenAccessor implements $ScreenAccessor$$Interface {
 "dragonlib$clearFocus"(): void
 "dragonlib$createTabEvent"(): $FocusNavigationEvent$TabNavigation
 "dragonlib$createArrowEvent"(arg0: $ScreenDirection$$Type): $FocusNavigationEvent$ArrowNavigation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenAccessor$$Type = ($ScreenAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenAccessor$$Original = $ScreenAccessor;}
declare module "de.mrjulsen.mcdragonlib.mixin.AbstractWidgetAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AbstractWidgetAccessor$$Interface {

(arg0: integer): void
}

export class $AbstractWidgetAccessor implements $AbstractWidgetAccessor$$Interface {
 "dragonlib$setHeight"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractWidgetAccessor$$Type = ((arg0: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractWidgetAccessor$$Original = $AbstractWidgetAccessor;}
declare module "de.mrjulsen.mcdragonlib.mixin.FontAccessor" {
import {$FontSet} from "net.minecraft.client.gui.font.FontSet"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$StringSplitter} from "net.minecraft.client.StringSplitter"

export interface $FontAccessor$$Interface {
}

export class $FontAccessor implements $FontAccessor$$Interface {
 "dragonlib$invokeGetFontSet"(arg0: $ResourceLocation$$Type): $FontSet
 "dragonlib$getSplitter"(): $StringSplitter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FontAccessor$$Type = ($FontAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FontAccessor$$Original = $FontAccessor;}
