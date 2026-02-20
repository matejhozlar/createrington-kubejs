declare module "de.keksuccino.fancymenu.util.rendering.ui.widget.UniqueWidget" {
import {$AbstractWidget} from "net.minecraft.client.gui.components.AbstractWidget"

export interface $UniqueWidget$$Interface {
set "widgetIdentifierFancyMenu"(value: StringJS)
get "widgetIdentifierFancyMenu"(): StringJS
}

export class $UniqueWidget implements $UniqueWidget$$Interface {
 "setWidgetIdentifierFancyMenu"(arg0: StringJS): $AbstractWidget
 "getWidgetIdentifierFancyMenu"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UniqueWidget$$Type = ($UniqueWidget);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UniqueWidget$$Original = $UniqueWidget;}
declare module "de.keksuccino.fancymenu.util.resource.RenderableResource" {
import {$Resource$$Interface} from "de.keksuccino.fancymenu.util.resource.Resource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InputStream} from "java.io.InputStream"
import {$AspectRatio} from "de.keksuccino.fancymenu.util.rendering.AspectRatio"

export interface $RenderableResource$$Interface extends $Resource$$Interface {
get "width"(): integer
get "resourceLocation"(): $ResourceLocation
get "height"(): integer
get "aspectRatio"(): $AspectRatio
get "closed"(): boolean
get "ready"(): boolean
get "loadingCompleted"(): boolean
get "loadingFailed"(): boolean
}

export class $RenderableResource implements $RenderableResource$$Interface {
static readonly "MISSING_TEXTURE_LOCATION": $ResourceLocation
static readonly "FULLY_TRANSPARENT_TEXTURE": $ResourceLocation

 "reset"(): void
 "getWidth"(): integer
 "getResourceLocation"(): $ResourceLocation
 "getHeight"(): integer
 "getAspectRatio"(): $AspectRatio
 "open"(): $InputStream
 "isClosed"(): boolean
 "isReady"(): boolean
 "isLoadingCompleted"(): boolean
 "isLoadingFailed"(): boolean
 "waitForReady"(arg0: long): void
 "waitForLoadingCompletedOrFailed"(arg0: long): void
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderableResource$$Type = ($RenderableResource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderableResource$$Original = $RenderableResource;}
declare module "de.keksuccino.fancymenu.util.resource.resources.audio.IAudio" {
import {$SoundSource, $SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$PlayableResourceWithAudio$$Interface} from "de.keksuccino.fancymenu.util.resource.resources.audio.PlayableResourceWithAudio"
import {$InputStream} from "java.io.InputStream"

export interface $IAudio$$Interface extends $PlayableResourceWithAudio$$Interface {
get "duration"(): float
get "playTime"(): float
get "soundChannel"(): $SoundSource
set "soundChannel"(value: $SoundSource$$Type)
set "volume"(value: float)
get "volume"(): float
get "paused"(): boolean
get "playing"(): boolean
get "closed"(): boolean
get "ready"(): boolean
get "loadingCompleted"(): boolean
get "loadingFailed"(): boolean
}

export class $IAudio implements $IAudio$$Interface {
 "getDuration"(): float
 "play"(): void
 "getPlayTime"(): float
 "getSoundChannel"(): $SoundSource
 "setSoundChannel"(arg0: $SoundSource$$Type): void
 "setVolume"(arg0: float): void
 "getVolume"(): float
 "stop"(): void
 "isPaused"(): boolean
 "pause"(): void
 "isPlaying"(): boolean
 "open"(): $InputStream
 "isClosed"(): boolean
 "isReady"(): boolean
 "isLoadingCompleted"(): boolean
 "isLoadingFailed"(): boolean
 "waitForReady"(arg0: long): void
 "waitForLoadingCompletedOrFailed"(arg0: long): void
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAudio$$Type = ($IAudio);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IAudio$$Original = $IAudio;}
declare module "de.keksuccino.fancymenu.util.rendering.AspectRatio" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $AspectRatio {
constructor(arg0: integer, arg1: integer)

public "getInputWidth"(): integer
public "getInputHeight"(): integer
public "getAspectRatioSizeByMaximumSize"(arg0: integer, arg1: integer): (integer)[]
public "getAspectRatioSizeByMinimumSize"(arg0: integer, arg1: integer): (integer)[]
public "getAspectRatioWidth"(arg0: integer): integer
public "getAspectRatioHeight"(arg0: integer): integer
get "inputWidth"(): integer
get "inputHeight"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AspectRatio$$Type = ($AspectRatio);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AspectRatio$$Original = $AspectRatio;}
declare module "de.keksuccino.fancymenu.util.rendering.ui.screen.CustomizableScreen" {
import {$GuiEventListener, $GuiEventListener$$Type} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$List, $List$$Type} from "java.util.List"

export interface $CustomizableScreen$$Interface {

(): $List$$Type<($GuiEventListener$$Type)>
}

export class $CustomizableScreen implements $CustomizableScreen$$Interface {
 "removeOnInitChildrenFancyMenu"(): $List<($GuiEventListener)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomizableScreen$$Type = (() => $List$$Type<($GuiEventListener$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomizableScreen$$Original = $CustomizableScreen;}
declare module "de.keksuccino.fancymenu.util.rendering.ui.widget.CustomizableWidget$CustomBackgroundResetBehavior" {
import {$Enum} from "java.lang.Enum"

export class $CustomizableWidget$CustomBackgroundResetBehavior extends $Enum<($CustomizableWidget$CustomBackgroundResetBehavior)> {
static readonly "RESET_ON_UNHOVER": $CustomizableWidget$CustomBackgroundResetBehavior
static readonly "RESET_NEVER": $CustomizableWidget$CustomBackgroundResetBehavior
static readonly "RESET_ON_HOVER": $CustomizableWidget$CustomBackgroundResetBehavior
static readonly "RESET_ON_HOVER_AND_UNHOVER": $CustomizableWidget$CustomBackgroundResetBehavior

public static "values"(): ($CustomizableWidget$CustomBackgroundResetBehavior)[]
public static "valueOf"(arg0: StringJS): $CustomizableWidget$CustomBackgroundResetBehavior
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomizableWidget$CustomBackgroundResetBehavior$$Type = (("reset_never") | ("reset_on_hover") | ("reset_on_unhover") | ("reset_on_hover_and_unhover"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomizableWidget$CustomBackgroundResetBehavior$$Original = $CustomizableWidget$CustomBackgroundResetBehavior;}
declare module "de.keksuccino.fancymenu.util.rendering.ui.widget.CustomizableWidget" {
import {$CustomizableWidget$CustomBackgroundResetBehavior, $CustomizableWidget$CustomBackgroundResetBehavior$$Type} from "de.keksuccino.fancymenu.util.rendering.ui.widget.CustomizableWidget$CustomBackgroundResetBehavior"
import {$RenderableResource, $RenderableResource$$Type} from "de.keksuccino.fancymenu.util.resource.RenderableResource"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$List} from "java.util.List"
import {$AbstractWidget$$Type} from "net.minecraft.client.gui.components.AbstractWidget"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$IAudio, $IAudio$$Type} from "de.keksuccino.fancymenu.util.resource.resources.audio.IAudio"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $CustomizableWidget$$Interface {
get "hoverStateListenersFancyMenu"(): $List<($Consumer<(boolean)>)>
get "customBackgroundResetBehaviorFancyMenu"(): $CustomizableWidget$CustomBackgroundResetBehavior
set "nineSliceCustomBackground_FancyMenu"(value: boolean)
set "customLabelFancyMenu"(value: $Component$$Type)
get "lastHoverStateFancyMenu"(): boolean
set "customWidthFancyMenu"(value: integer)
get "hoverLabelFancyMenu"(): $Component
get "customWidthFancyMenu"(): integer
get "customXFancyMenu"(): integer
set "hoverLabelFancyMenu"(value: $Component$$Type)
set "lastHoverStateFancyMenu"(value: boolean)
set "customHeightFancyMenu"(value: integer)
set "customXFancyMenu"(value: integer)
set "customYFancyMenu"(value: integer)
get "lastFocusStateFancyMenu"(): boolean
get "customHeightFancyMenu"(): integer
get "customLabelFancyMenu"(): $Component
get "hoverSoundFancyMenu"(): $IAudio
set "hoverSoundFancyMenu"(value: $IAudio$$Type)
get "customYFancyMenu"(): integer
set "lastFocusStateFancyMenu"(value: boolean)
get "hoverOrFocusStateListenersFancyMenu"(): $List<($Consumer<(boolean)>)>
get "customBackgroundInactiveFancyMenu"(): $RenderableResource
set "customBackgroundResetBehaviorFancyMenu"(value: $CustomizableWidget$CustomBackgroundResetBehavior$$Type)
set "customBackgroundInactiveFancyMenu"(value: $RenderableResource$$Type)
get "resetCustomizationsListenersFancyMenu"(): $List<($Runnable)>
get "focusStateListenersFancyMenu"(): $List<($Consumer<(boolean)>)>
get "nineSliceCustomBackgroundBorderX_FancyMenu"(): integer
get "nineSliceCustomBackgroundTexture_FancyMenu"(): boolean
get "nineSliceCustomBackgroundBorderY_FancyMenu"(): integer
get "hiddenFancyMenu"(): boolean
set "hiddenFancyMenu"(value: boolean)
set "customClickSoundFancyMenu"(value: $IAudio$$Type)
get "originalMessageFancyMenu"(): $Component
set "customBackgroundNormalFancyMenu"(value: $RenderableResource$$Type)
set "lastHoverOrFocusStateFancyMenu"(value: boolean)
get "customBackgroundNormalFancyMenu"(): $RenderableResource
get "customClickSoundFancyMenu"(): $IAudio
get "lastHoverOrFocusStateFancyMenu"(): boolean
set "nineSliceBorderX_FancyMenu"(value: integer)
get "customBackgroundHoverFancyMenu"(): $RenderableResource
set "customBackgroundHoverFancyMenu"(value: $RenderableResource$$Type)
set "nineSliceBorderY_FancyMenu"(value: integer)
}

export class $CustomizableWidget implements $CustomizableWidget$$Interface {
 "getHoverStateListenersFancyMenu"(): $List<($Consumer<(boolean)>)>
 "resetWidgetCustomizationsFancyMenu"(): void
 "addFocusStateListenerFancyMenu"(arg0: $Consumer$$Type<(boolean)>): void
 "getCustomBackgroundResetBehaviorFancyMenu"(): $CustomizableWidget$CustomBackgroundResetBehavior
 "setNineSliceCustomBackground_FancyMenu"(arg0: boolean): void
 "setCustomLabelFancyMenu"(arg0: $Component$$Type): void
 "getLastHoverStateFancyMenu"(): boolean
 "setCustomWidthFancyMenu"(arg0: integer): void
 "getHoverLabelFancyMenu"(): $Component
 "getCustomWidthFancyMenu"(): integer
 "getCustomXFancyMenu"(): integer
 "setHoverLabelFancyMenu"(arg0: $Component$$Type): void
 "setLastHoverStateFancyMenu"(arg0: boolean): void
 "setCustomHeightFancyMenu"(arg0: integer): void
 "setCustomXFancyMenu"(arg0: integer): void
 "setCustomYFancyMenu"(arg0: integer): void
 "getLastFocusStateFancyMenu"(): boolean
 "getCustomHeightFancyMenu"(): integer
 "getCustomLabelFancyMenu"(): $Component
 "getHoverSoundFancyMenu"(): $IAudio
 "setHoverSoundFancyMenu"(arg0: $IAudio$$Type): void
 "getCustomYFancyMenu"(): integer
 "setLastFocusStateFancyMenu"(arg0: boolean): void
 "stopHoverSoundFancyMenu"(): void
 "addHoverStateListenerFancyMenu"(arg0: $Consumer$$Type<(boolean)>): void
 "tickHoverOrFocusStateListenersFancyMenu"(arg0: boolean): void
 "addResetCustomizationsListenerFancyMenu"(arg0: $Runnable$$Type): void
 "getHoverOrFocusStateListenersFancyMenu"(): $List<($Consumer<(boolean)>)>
 "getCustomBackgroundInactiveFancyMenu"(): $RenderableResource
 "addHoverOrFocusStateListenerFancyMenu"(arg0: $Consumer$$Type<(boolean)>): void
 "setCustomBackgroundResetBehaviorFancyMenu"(arg0: $CustomizableWidget$CustomBackgroundResetBehavior$$Type): void
 "resetWidgetSizeAndPositionFancyMenu"(): void
 "setCustomBackgroundInactiveFancyMenu"(arg0: $RenderableResource$$Type): void
 "getResetCustomizationsListenersFancyMenu"(): $List<($Runnable)>
 "getFocusStateListenersFancyMenu"(): $List<($Consumer<(boolean)>)>
 "tickHoverStateListenersFancyMenu"(arg0: boolean): void
 "tickFocusStateListenersFancyMenu"(arg0: boolean): void
 "getNineSliceCustomBackgroundBorderX_FancyMenu"(): integer
 "isNineSliceCustomBackgroundTexture_FancyMenu"(): boolean
 "getNineSliceCustomBackgroundBorderY_FancyMenu"(): integer
 "isHiddenFancyMenu"(): boolean
 "setHiddenFancyMenu"(arg0: boolean): void
 "setCustomClickSoundFancyMenu"(arg0: $IAudio$$Type): void
 "getOriginalMessageFancyMenu"(): $Component
 "setCustomBackgroundNormalFancyMenu"(arg0: $RenderableResource$$Type): void
 "setLastHoverOrFocusStateFancyMenu"(arg0: boolean): void
 "getCustomBackgroundNormalFancyMenu"(): $RenderableResource
 "getCustomClickSoundFancyMenu"(): $IAudio
 "renderCustomBackgroundFancyMenu"(arg0: $AbstractWidget$$Type, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
 "getLastHoverOrFocusStateFancyMenu"(): boolean
 "stopCustomClickSoundFancyMenu"(): void
 "setNineSliceBorderX_FancyMenu"(arg0: integer): void
 "getCustomBackgroundHoverFancyMenu"(): $RenderableResource
 "setCustomBackgroundHoverFancyMenu"(arg0: $RenderableResource$$Type): void
 "setNineSliceBorderY_FancyMenu"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomizableWidget$$Type = ($CustomizableWidget);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomizableWidget$$Original = $CustomizableWidget;}
declare module "de.keksuccino.fancymenu.util.rendering.ui.widget.UniqueLabeledSwitchCycleButton" {
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $UniqueLabeledSwitchCycleButton$$Interface {
set "labeledSwitchComponentLabel_FancyMenu"(value: $Component$$Type)
get "labeledSwitchComponentLabel_FancyMenu"(): $Component
}

export class $UniqueLabeledSwitchCycleButton implements $UniqueLabeledSwitchCycleButton$$Interface {
 "setLabeledSwitchComponentLabel_FancyMenu"(arg0: $Component$$Type): void
 "getLabeledSwitchComponentLabel_FancyMenu"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UniqueLabeledSwitchCycleButton$$Type = ($UniqueLabeledSwitchCycleButton);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UniqueLabeledSwitchCycleButton$$Original = $UniqueLabeledSwitchCycleButton;}
declare module "de.keksuccino.fancymenu.util.resource.resources.audio.PlayableResourceWithAudio" {
import {$PlayableResource$$Interface} from "de.keksuccino.fancymenu.util.resource.PlayableResource"
import {$InputStream} from "java.io.InputStream"

export interface $PlayableResourceWithAudio$$Interface extends $PlayableResource$$Interface {
set "volume"(value: float)
get "volume"(): float
get "paused"(): boolean
get "playing"(): boolean
get "closed"(): boolean
get "ready"(): boolean
get "loadingCompleted"(): boolean
get "loadingFailed"(): boolean
}

export class $PlayableResourceWithAudio implements $PlayableResourceWithAudio$$Interface {
 "setVolume"(arg0: float): void
 "getVolume"(): float
 "stop"(): void
 "isPaused"(): boolean
 "pause"(): void
 "isPlaying"(): boolean
 "play"(): void
 "open"(): $InputStream
 "isClosed"(): boolean
 "isReady"(): boolean
 "isLoadingCompleted"(): boolean
 "isLoadingFailed"(): boolean
 "waitForReady"(arg0: long): void
 "waitForLoadingCompletedOrFailed"(arg0: long): void
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayableResourceWithAudio$$Type = ($PlayableResourceWithAudio);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayableResourceWithAudio$$Original = $PlayableResourceWithAudio;}
declare module "de.keksuccino.fancymenu.util.resource.Resource" {
import {$Closeable$$Interface} from "java.io.Closeable"
import {$InputStream} from "java.io.InputStream"

export interface $Resource$$Interface extends $Closeable$$Interface {
get "closed"(): boolean
get "ready"(): boolean
get "loadingCompleted"(): boolean
get "loadingFailed"(): boolean
}

export class $Resource implements $Resource$$Interface {
 "open"(): $InputStream
 "isClosed"(): boolean
 "isReady"(): boolean
 "isLoadingCompleted"(): boolean
 "isLoadingFailed"(): boolean
 "waitForReady"(arg0: long): void
 "waitForLoadingCompletedOrFailed"(arg0: long): void
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Resource$$Type = ($Resource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Resource$$Original = $Resource;}
