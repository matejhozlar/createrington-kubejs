declare module "xaero.lib.client.gui.widget.IClickableWidget" {
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Tooltip, $Tooltip$$Type} from "xaero.lib.client.gui.widget.Tooltip"
import {$ITooltipHaver$$Interface} from "xaero.lib.client.gui.widget.ITooltipHaver"

export interface $IClickableWidget$$Interface extends $ITooltipHaver$$Interface {
set "xaero_tooltip"(value: $Supplier$$Type<($Tooltip$$Type)>)
get "xaero_tooltip"(): $Supplier<($Tooltip)>
}

export class $IClickableWidget implements $IClickableWidget$$Interface {
 "setXaero_tooltip"(arg0: $Supplier$$Type<($Tooltip$$Type)>): void
 "getXaero_tooltip"(): $Supplier<($Tooltip)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClickableWidget$$Type = ($IClickableWidget);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IClickableWidget$$Original = $IClickableWidget;}
declare module "xaero.lib.client.gui.config.context.IEditConfigScreenContext" {
import {$Iterable} from "java.lang.Iterable"
import {$ConfigChannel$$Type} from "xaero.lib.common.config.channel.ConfigChannel"
import {$ConfigProfile, $ConfigProfile$$Type} from "xaero.lib.common.config.profile.ConfigProfile"
import {$Config} from "xaero.lib.common.config.Config"
import {$IConfigProfileInfo} from "xaero.lib.common.config.profile.IConfigProfileInfo"
import {$Component} from "net.minecraft.network.chat.Component"

export interface $IEditConfigScreenContext$$Interface {
get "clientSide"(): boolean
get "syncMessage"(): $Component
get "autoConfirm"(): boolean
get "autoDefaultProfile"(): boolean
get "screenTitleFormat"(): StringJS
get "dropdownNarration"(): $Component
}

export class $IEditConfigScreenContext implements $IEditConfigScreenContext$$Interface {
 "reset"(arg0: $ConfigChannel$$Type): void
 "getCurrentProfile"(arg0: $ConfigChannel$$Type): $ConfigProfile
 "isClientSide"(): boolean
 "hasPermission"(arg0: $ConfigChannel$$Type): boolean
 "deleteProfile"(arg0: $ConfigProfile$$Type, arg1: $ConfigChannel$$Type): void
 "createProfile"(arg0: StringJS, arg1: StringJS, arg2: $ConfigChannel$$Type, arg3: StringJS): void
 "getSyncMessage"(): $Component
 "getEnforcedConfig"(arg0: $ConfigChannel$$Type): $Config
 "getSyncStatus"(arg0: $ConfigChannel$$Type): boolean
 "isAutoConfirm"(): boolean
 "setCurrentProfile"(arg0: StringJS, arg1: $ConfigChannel$$Type): void
 "confirmProfile"(arg0: $ConfigProfile$$Type, arg1: $ConfigChannel$$Type): void
 "getProfiles"(arg0: $ConfigChannel$$Type): $Iterable<($IConfigProfileInfo)>
 "isAutoDefaultProfile"(): boolean
 "setDefaultProfileId"(arg0: StringJS, arg1: $ConfigChannel$$Type): void
 "getScreenTitleFormat"(): StringJS
 "getDefaultProfileId"(arg0: $ConfigChannel$$Type): StringJS
 "getSelectedProfileId"(arg0: $ConfigChannel$$Type): StringJS
 "getDropdownNarration"(): $Component
 "profileExists"(arg0: StringJS, arg1: $ConfigChannel$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEditConfigScreenContext$$Type = ($IEditConfigScreenContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEditConfigScreenContext$$Original = $IEditConfigScreenContext;}
declare module "xaero.lib.client.gui.widget.ITooltipHaver" {
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Tooltip, $Tooltip$$Type} from "xaero.lib.client.gui.widget.Tooltip"

export interface $ITooltipHaver$$Interface {

(): $Supplier$$Type<($Tooltip$$Type)>
get "xaero_tooltip"(): $Supplier<($Tooltip)>
}

export class $ITooltipHaver implements $ITooltipHaver$$Interface {
 "getXaero_tooltip"(): $Supplier<($Tooltip)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITooltipHaver$$Type = (() => $Supplier$$Type<($Tooltip$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ITooltipHaver$$Original = $ITooltipHaver;}
declare module "xaero.lib.client.gui.ScreenBase" {
import {$DropDownWidget$$Type} from "xaero.lib.client.gui.widget.dropdown.DropDownWidget"
import {$IScreenBase$$Interface} from "xaero.lib.client.gui.IScreenBase"
import {$Screen$DeferredTooltipRendering} from "net.minecraft.client.gui.screens.Screen$DeferredTooltipRendering"
import {$CycleButton} from "net.minecraft.client.gui.components.CycleButton"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$List} from "java.util.List"
import {$NarratorStatus} from "net.minecraft.client.NarratorStatus"
import {$CubeMap} from "net.minecraft.client.renderer.CubeMap"
import {$AbstractWidget$$Type} from "net.minecraft.client.gui.components.AbstractWidget"
import {$Font} from "net.minecraft.client.gui.Font"
import {$ScreenExtensions} from "net.fabricmc.fabric.impl.client.screen.ScreenExtensions"
import {$Component} from "net.minecraft.network.chat.Component"
import {$PanoramaRenderer} from "net.minecraft.client.renderer.PanoramaRenderer"
import {$GuiEventListener$$Type} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$NarratableEntry} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$Executor} from "java.util.concurrent.Executor"
import {$Minecraft} from "net.minecraft.client.Minecraft"
import {$Renderable} from "net.minecraft.client.gui.components.Renderable"

export class $ScreenBase extends $Screen implements $IScreenBase$$Interface {
static readonly "MENU_BACKGROUND": $ResourceLocation
 "minecraft": $Minecraft
 "parent": $Screen
static readonly "INWORLD_FOOTER_SEPARATOR": $ResourceLocation
 "deferredTooltipRendering": $Screen$DeferredTooltipRendering
static readonly "CUBE_MAP": $CubeMap
 "title": $Component
static readonly "FOOTER_SEPARATOR": $ResourceLocation
 "narratorButton": $CycleButton<($NarratorStatus)>
readonly "renderables": $List<($Renderable)>
static readonly "INWORLD_HEADER_SEPARATOR": $ResourceLocation
readonly "narratables": $List<($NarratableEntry)>
 "width": integer
static readonly "PANORAMA": $PanoramaRenderer
readonly "screenExecutor": $Executor
 "escape": $Screen
static readonly "HEADER_SEPARATOR": $ResourceLocation
 "height": integer
 "font": $Font

public "refresh"(): void
public "onExit"(arg0: $Screen$$Type): void
public "getIndex"(arg0: $GuiEventListener$$Type): integer
public "onClose"(): void
public "shouldSkipWorldRender"(): boolean
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "getEscape"(): $Screen
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseScrolled"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "renderBackground"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "canSkipWorldRender"(): boolean
public "renderEscapeScreen"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "replaceWidget"(arg0: $AbstractWidget$$Type, arg1: $AbstractWidget$$Type): void
public "onDropdownClosed"(arg0: $DropDownWidget$$Type): void
public "onDropdownOpen"(arg0: $DropDownWidget$$Type): void
public "restoreFocus"(arg0: integer): void
public static "tryToGetEscape"(arg0: $Screen$$Type): $Screen
public "goBack"(): void
public "replaceRenderableWidget"(arg0: $AbstractWidget$$Type, arg1: $AbstractWidget$$Type): void
public static "getExtensions"(arg0: $Screen$$Type): $ScreenExtensions
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenBase$$Type = ($ScreenBase);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenBase$$Original = $ScreenBase;}
declare module "xaero.lib.client.gui.widget.Tooltip" {
import {$TooltipInfo$$Type} from "xaero.lib.common.gui.widget.TooltipInfo"
import {$ArrayList$$Type} from "java.util.ArrayList"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$FormattedText$$Type} from "net.minecraft.network.chat.FormattedText"
import {$Style$$Type} from "net.minecraft.network.chat.Style"
import {$Supplier$$Interface} from "java.util.function.Supplier"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $Tooltip implements $Supplier$$Interface<($Tooltip)> {
constructor(arg0: $Component$$Type)
constructor(arg0: $Component$$Type, arg1: boolean)
constructor(arg0: integer)
constructor(arg0: $TooltipInfo$$Type)
constructor(arg0: StringJS)
constructor(arg0: StringJS, arg1: $Style$$Type)
constructor(arg0: StringJS, arg1: $Style$$Type, arg2: boolean)

public "get"(): $Tooltip
public "getLine"(arg0: integer): $Component
public "drawBox"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "setStartWidth"(arg0: integer): void
public "getPlainText"(): StringJS
public "getFullCode"(): StringJS
public "splitWords"(arg0: $ArrayList$$Type<($Component$$Type)>, arg1: $FormattedText$$Type): void
public "setAutoLinebreak"(arg0: boolean): void
public "withWidth"(arg0: integer): $Tooltip
public "createLines"(arg0: $Component$$Type): void
set "startWidth"(value: integer)
get "plainText"(): StringJS
get "fullCode"(): StringJS
set "autoLinebreak"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Tooltip$$Type = ($Tooltip);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Tooltip$$Original = $Tooltip;}
declare module "xaero.lib.client.gui.GuiSettings" {
import {$ISettingEntry} from "xaero.lib.client.gui.ISettingEntry"
import {$Screen$DeferredTooltipRendering} from "net.minecraft.client.gui.screens.Screen$DeferredTooltipRendering"
import {$CycleButton} from "net.minecraft.client.gui.components.CycleButton"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$List} from "java.util.List"
import {$NarratorStatus} from "net.minecraft.client.NarratorStatus"
import {$CubeMap} from "net.minecraft.client.renderer.CubeMap"
import {$AbstractWidget$$Type} from "net.minecraft.client.gui.components.AbstractWidget"
import {$Font} from "net.minecraft.client.gui.Font"
import {$ScreenExtensions} from "net.fabricmc.fabric.impl.client.screen.ScreenExtensions"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$PanoramaRenderer} from "net.minecraft.client.renderer.PanoramaRenderer"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ScreenBase} from "xaero.lib.client.gui.ScreenBase"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$NarratableEntry} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$Executor} from "java.util.concurrent.Executor"
import {$Minecraft} from "net.minecraft.client.Minecraft"
import {$Renderable} from "net.minecraft.client.gui.components.Renderable"
import {$WidgetScreen$$Interface} from "xaero.lib.client.gui.widget.online.WidgetScreen"

export class $GuiSettings extends $ScreenBase implements $WidgetScreen$$Interface {
static readonly "MENU_BACKGROUND": $ResourceLocation
 "minecraft": $Minecraft
 "parent": $Screen
static readonly "INWORLD_FOOTER_SEPARATOR": $ResourceLocation
 "deferredTooltipRendering": $Screen$DeferredTooltipRendering
static readonly "CUBE_MAP": $CubeMap
 "title": $Component
static readonly "FOOTER_SEPARATOR": $ResourceLocation
 "narratorButton": $CycleButton<($NarratorStatus)>
readonly "renderables": $List<($Renderable)>
static readonly "INWORLD_HEADER_SEPARATOR": $ResourceLocation
readonly "narratables": $List<($NarratableEntry)>
 "width": integer
static readonly "PANORAMA": $PanoramaRenderer
readonly "screenExecutor": $Executor
 "escape": $Screen
static readonly "HEADER_SEPARATOR": $ResourceLocation
 "height": integer
 "font": $Font

constructor(arg0: $Component$$Type, arg1: $Screen$$Type, arg2: $Screen$$Type)
constructor(arg0: $Component$$Type, arg1: $Screen$$Type, arg2: $Screen$$Type, arg3: boolean)

public "init"(): void
public "onExit"(arg0: $Screen$$Type): void
public "tick"(): void
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "getScreen"<S extends $Screen>(): S
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "renderBackground"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "charTyped"(arg0: character, arg1: integer): boolean
public "addButtonVisible"(arg0: $AbstractWidget$$Type): void
public "getEntriesCopy"(): ($ISettingEntry)[]
public static "getExtensions"(arg0: $Screen$$Type): $ScreenExtensions
get "screen"(): S
get "entriesCopy"(): ($ISettingEntry)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiSettings$$Type = ($GuiSettings);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiSettings$$Original = $GuiSettings;}
