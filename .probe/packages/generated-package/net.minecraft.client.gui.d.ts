declare module "net.minecraft.client.gui.narration.NarratedElementType" {
import {$Enum} from "java.lang.Enum"

export class $NarratedElementType extends $Enum<($NarratedElementType)> {
static readonly "POSITION": $NarratedElementType
static readonly "USAGE": $NarratedElementType
static readonly "HINT": $NarratedElementType
static readonly "TITLE": $NarratedElementType

public static "values"(): ($NarratedElementType)[]
public static "valueOf"(arg0: StringJS): $NarratedElementType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NarratedElementType$$Type = (("title") | ("position") | ("hint") | ("usage"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NarratedElementType$$Original = $NarratedElementType;}
declare module "net.minecraft.client.gui.Font" {
import {$FontAccessor$$Interface as $FontAccessor$0$$Interface} from "com.simibubi.create.foundation.mixin.accessor.FontAccessor"
import {$FormattedText, $FormattedText$$Type} from "net.minecraft.network.chat.FormattedText"
import {$List} from "java.util.List"
import {$Font$DisplayMode$$Type} from "net.minecraft.client.gui.Font$DisplayMode"
import {$StringSplitter} from "net.minecraft.client.StringSplitter"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$IFontExtension$$Interface} from "net.neoforged.neoforge.client.extensions.IFontExtension"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"
import {$RandomSource} from "net.minecraft.util.RandomSource"
import {$FontSet, $FontSet$$Type} from "net.minecraft.client.gui.font.FontSet"
import {$FormattedCharSequence, $FormattedCharSequence$$Type} from "net.minecraft.util.FormattedCharSequence"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$JadeFont$$Interface} from "snownee.jade.gui.JadeFont"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$FontAccess$$Interface} from "com.kipti.bnb.mixin_accessor.FontAccess"
import {$FontAccessor$$Interface} from "de.mrjulsen.mcdragonlib.mixin.FontAccessor"

export class $Font implements $IFontExtension$$Interface, $FontAccess$$Interface, $FontAccessor$$Interface, $JadeFont$$Interface, $FontAccessor$0$$Interface {
readonly "random": $RandomSource
readonly "filterFishyGlyphs": boolean
readonly "fonts": $Function<($ResourceLocation), ($FontSet)>
static readonly "ALPHA_CUTOFF": integer
readonly "lineHeight": integer
 "splitter": $StringSplitter

constructor(arg0: $Function$$Type<($ResourceLocation), ($FontSet$$Type)>, arg1: boolean)

public "split"(arg0: $FormattedText$$Type, arg1: integer): $List<($FormattedCharSequence)>
public "self"(): $Font
public "width"(arg0: $FormattedCharSequence$$Type): integer
public "width"(arg0: StringJS): integer
public "width"(arg0: $FormattedText$$Type): integer
public "renderText"(arg0: StringJS, arg1: float, arg2: float, arg3: integer, arg4: boolean, arg5: $Matrix4f$$Type, arg6: $MultiBufferSource$$Type, arg7: $Font$DisplayMode$$Type, arg8: integer, arg9: integer): float
public "substrByWidth"(arg0: $FormattedText$$Type, arg1: integer): $FormattedText
public "wordWrapHeight"(arg0: $FormattedText$$Type, arg1: integer): integer
public "wordWrapHeight"(arg0: StringJS, arg1: integer): integer
public "plainSubstrByWidth"(arg0: StringJS, arg1: integer, arg2: boolean): StringJS
public "plainSubstrByWidth"(arg0: StringJS, arg1: integer): StringJS
public "jade$setGlint"(arg0: float, arg1: float): void
public "isBidirectional"(): boolean
public "drawInBatch"(arg0: $Component$$Type, arg1: float, arg2: float, arg3: integer, arg4: boolean, arg5: $Matrix4f$$Type, arg6: $MultiBufferSource$$Type, arg7: $Font$DisplayMode$$Type, arg8: integer, arg9: integer): integer
public "drawInBatch"(arg0: $FormattedCharSequence$$Type, arg1: float, arg2: float, arg3: integer, arg4: boolean, arg5: $Matrix4f$$Type, arg6: $MultiBufferSource$$Type, arg7: $Font$DisplayMode$$Type, arg8: integer, arg9: integer): integer
public "drawInBatch"(arg0: StringJS, arg1: float, arg2: float, arg3: integer, arg4: boolean, arg5: $Matrix4f$$Type, arg6: $MultiBufferSource$$Type, arg7: $Font$DisplayMode$$Type, arg8: integer, arg9: integer, arg10: boolean): integer
public "drawInBatch"(arg0: StringJS, arg1: float, arg2: float, arg3: integer, arg4: boolean, arg5: $Matrix4f$$Type, arg6: $MultiBufferSource$$Type, arg7: $Font$DisplayMode$$Type, arg8: integer, arg9: integer): integer
public "getSplitter"(): $StringSplitter
public "create$getFonts"(): $Function
public "jade$setGlintStrength"(arg0: float, arg1: float): void
public "getFontSet"(arg0: $ResourceLocation$$Type): $FontSet
public "drawInBatch8xOutline"(arg0: $FormattedCharSequence$$Type, arg1: float, arg2: float, arg3: integer, arg4: integer, arg5: $Matrix4f$$Type, arg6: $MultiBufferSource$$Type, arg7: integer): void
public "dragonlib$invokeGetFontSet"(arg0: $ResourceLocation$$Type): $FontSet
public "bidirectionalShaping"(arg0: StringJS): StringJS
public "bits_n_bobs$getFontSet"(arg0: $ResourceLocation$$Type): $FontSet
public "dragonlib$getSplitter"(): $StringSplitter
public "ellipsize"(arg0: $FormattedText$$Type, arg1: integer): $FormattedText
get "bidirectional"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Font$$Type = ($Font);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Font$$Original = $Font;}
declare module "net.minecraft.client.gui.navigation.ScreenDirection" {
import {$Enum} from "java.lang.Enum"
import {$IntComparator} from "it.unimi.dsi.fastutil.ints.IntComparator"
import {$ScreenAxis} from "net.minecraft.client.gui.navigation.ScreenAxis"

export class $ScreenDirection extends $Enum<($ScreenDirection)> {
static readonly "DOWN": $ScreenDirection
static readonly "LEFT": $ScreenDirection
static readonly "RIGHT": $ScreenDirection
static readonly "UP": $ScreenDirection

public "getAxis"(): $ScreenAxis
public static "values"(): ($ScreenDirection)[]
public static "valueOf"(arg0: StringJS): $ScreenDirection
public "isPositive"(): boolean
public "isAfter"(arg0: integer, arg1: integer): boolean
public "isBefore"(arg0: integer, arg1: integer): boolean
public "getOpposite"(): $ScreenDirection
public "coordinateValueComparator"(): $IntComparator
get "axis"(): $ScreenAxis
get "positive"(): boolean
get "opposite"(): $ScreenDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenDirection$$Type = (("up") | ("down") | ("left") | ("right"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenDirection$$Original = $ScreenDirection;}
declare module "net.minecraft.client.gui.screens.inventory.MenuAccess" {
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"

export interface $MenuAccess$$Interface<T extends $AbstractContainerMenu> {

(): T
get "menu"(): T
}

export class $MenuAccess<T extends $AbstractContainerMenu> implements $MenuAccess$$Interface {
 "getMenu"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuAccess$$Type<T> = (() => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MenuAccess$$Original<T> = $MenuAccess<(T)>;}
declare module "net.minecraft.client.gui.screens.worldselection.WorldCreationContext$DimensionsUpdater" {
import {$BiFunction, $BiFunction$$Interface} from "java.util.function.BiFunction"
import {$RegistryAccess$Frozen, $RegistryAccess$Frozen$$Type} from "net.minecraft.core.RegistryAccess$Frozen"
import {$Function$$Type} from "java.util.function.Function"
import {$WorldDimensions, $WorldDimensions$$Type} from "net.minecraft.world.level.levelgen.WorldDimensions"

export interface $WorldCreationContext$DimensionsUpdater$$Interface extends $BiFunction$$Interface<($RegistryAccess$Frozen), ($WorldDimensions), ($WorldDimensions)> {

(arg0: $RegistryAccess$Frozen, arg1: $WorldDimensions): $WorldDimensions$$Type
}

export class $WorldCreationContext$DimensionsUpdater implements $WorldCreationContext$DimensionsUpdater$$Interface {
 "apply"(arg0: $RegistryAccess$Frozen$$Type, arg1: $WorldDimensions$$Type): $WorldDimensions
 "andThen"<V>(arg0: $Function$$Type<($WorldDimensions), (V)>): $BiFunction<($RegistryAccess$Frozen), ($WorldDimensions), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldCreationContext$DimensionsUpdater$$Type = ((arg0: $RegistryAccess$Frozen, arg1: $WorldDimensions) => $WorldDimensions$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldCreationContext$DimensionsUpdater$$Original = $WorldCreationContext$DimensionsUpdater;}
declare module "net.minecraft.client.gui.screens.social.PlayerSocialManager" {
import {$UserApiService$$Type} from "com.mojang.authlib.minecraft.UserApiService"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Set} from "java.util.Set"
import {$PlayerInfo$$Type} from "net.minecraft.client.multiplayer.PlayerInfo"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"

export class $PlayerSocialManager {
constructor(arg0: $Minecraft$$Type, arg1: $UserApiService$$Type)

public "isBlocked"(arg0: $UUID$$Type): boolean
public "showPlayer"(arg0: $UUID$$Type): void
public "isHidden"(arg0: $UUID$$Type): boolean
public "getDiscoveredUUID"(arg0: StringJS): $UUID
public "addPlayer"(arg0: $PlayerInfo$$Type): void
public "hidePlayer"(arg0: $UUID$$Type): void
public "stopOnlineMode"(): void
public "startOnlineMode"(): void
public "getHiddenPlayers"(): $Set<($UUID)>
public "removePlayer"(arg0: $UUID$$Type): void
public "shouldHideMessageFrom"(arg0: $UUID$$Type): boolean
get "hiddenPlayers"(): $Set<($UUID)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerSocialManager$$Type = ($PlayerSocialManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerSocialManager$$Original = $PlayerSocialManager;}
declare module "net.minecraft.client.gui.components.AbstractWidget" {
import {$NarrationElementOutput$$Type} from "net.minecraft.client.gui.narration.NarrationElementOutput"
import {$FocusNavigationEvent$$Type} from "net.minecraft.client.gui.navigation.FocusNavigationEvent"
import {$Font$$Type} from "net.minecraft.client.gui.Font"
import {$Duration$$Type} from "java.time.Duration"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Tooltip, $Tooltip$$Type} from "net.minecraft.client.gui.components.Tooltip"
import {$LayoutElement$$Interface} from "net.minecraft.client.gui.layouts.LayoutElement"
import {$GuiEventListener$$Interface} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$ScreenRectangle} from "net.minecraft.client.gui.navigation.ScreenRectangle"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$WidgetTooltipHolder} from "net.minecraft.client.gui.components.WidgetTooltipHolder"
import {$SoundManager$$Type} from "net.minecraft.client.sounds.SoundManager"
import {$NarratableEntry$$Interface} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$IAbstractWidgetExtension$$Interface} from "net.neoforged.neoforge.client.extensions.IAbstractWidgetExtension"
import {$ComponentPath} from "net.minecraft.client.gui.ComponentPath"
import {$Renderable$$Interface} from "net.minecraft.client.gui.components.Renderable"
import {$AbstractWidgetAccessor$$Interface} from "de.mrjulsen.mcdragonlib.mixin.AbstractWidgetAccessor"
import {$NarratableEntry$NarrationPriority} from "net.minecraft.client.gui.narration.NarratableEntry$NarrationPriority"

export class $AbstractWidget implements $Renderable$$Interface, $GuiEventListener$$Interface, $LayoutElement$$Interface, $NarratableEntry$$Interface, $IAbstractWidgetExtension$$Interface, $AbstractWidgetAccessor$$Interface {
static readonly "UNSET_FG_COLOR": integer
 "visible": boolean
 "x": integer
 "tooltip": $WidgetTooltipHolder
 "y": integer
 "active": boolean

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $Component$$Type)

public "getX"(): integer
public "getMessage"(): $Component
public "isActive"(): boolean
public "setSize"(arg0: integer, arg1: integer): void
public "dragonlib$setHeight"(arg0: integer): void
public "getRight"(): integer
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "getTooltip"(): $Tooltip
public "isHovered"(): boolean
public "setTooltip"(arg0: $Tooltip$$Type): void
public "onRelease"(arg0: double, arg1: double): void
public "setFGColor"(arg0: integer): void
/**
 * 
 * @deprecated
 */
public "onClick"(arg0: double, arg1: double): void
public "getFGColor"(): integer
public "getBottom"(): integer
public "setTooltipDelay"(arg0: $Duration$$Type): void
public "isHoveredOrFocused"(): boolean
public "playDownSound"(arg0: $SoundManager$$Type): void
public "setTabOrderGroup"(arg0: integer): void
public "setRectangle"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "clearFGColor"(): void
public "getY"(): integer
public static "wrapDefaultNarrationMessage"(arg0: $Component$$Type): $MutableComponent
public "setMessage"(arg0: $Component$$Type): void
public "getWidth"(): integer
public "getHeight"(): integer
public "setWidth"(arg0: integer): void
public "setHeight"(arg0: integer): void
public "setY"(arg0: integer): void
public "setX"(arg0: integer): void
public "setFocused"(arg0: boolean): void
public "isFocused"(): boolean
public "setAlpha"(arg0: float): void
public "getRectangle"(): $ScreenRectangle
public "nextFocusPath"(arg0: $FocusNavigationEvent$$Type): $ComponentPath
public "updateNarration"(arg0: $NarrationElementOutput$$Type): void
public "narrationPriority"(): $NarratableEntry$NarrationPriority
public "isMouseOver"(arg0: double, arg1: double): boolean
public "getTabOrderGroup"(): integer
public "mouseDragged"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
public "visitWidgets"(arg0: $Consumer$$Type<($AbstractWidget)>): void
public static "renderScrollingString"(arg0: $GuiGraphics$$Type, arg1: $Font$$Type, arg2: $Component$$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer): void
public static "renderScrollingString"(arg0: $GuiGraphics$$Type, arg1: $Font$$Type, arg2: $Component$$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer): void
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "charTyped"(arg0: character, arg1: integer): boolean
public "mouseMoved"(arg0: double, arg1: double): void
public "mouseScrolled"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
public "getCurrentFocusPath"(): $ComponentPath
public "setPosition"(arg0: integer, arg1: integer): void
public "onClick"(arg0: double, arg1: double, arg2: integer): void
get "message"(): $Component
get "right"(): integer
get "hovered"(): boolean
set "FGColor"(value: integer)
get "FGColor"(): integer
get "bottom"(): integer
set "tooltipDelay"(value: $Duration$$Type)
get "hoveredOrFocused"(): boolean
set "tabOrderGroup"(value: integer)
set "message"(value: $Component$$Type)
get "width"(): integer
get "height"(): integer
set "width"(value: integer)
set "height"(value: integer)
set "focused"(value: boolean)
get "focused"(): boolean
set "alpha"(value: float)
get "rectangle"(): $ScreenRectangle
get "tabOrderGroup"(): integer
get "currentFocusPath"(): $ComponentPath
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractWidget$$Type = ($AbstractWidget);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractWidget$$Original = $AbstractWidget;}
declare module "net.minecraft.client.gui.screens.ReceivingLevelScreen$Reason" {
import {$Enum} from "java.lang.Enum"

export class $ReceivingLevelScreen$Reason extends $Enum<($ReceivingLevelScreen$Reason)> {
static readonly "OTHER": $ReceivingLevelScreen$Reason
static readonly "NETHER_PORTAL": $ReceivingLevelScreen$Reason
static readonly "END_PORTAL": $ReceivingLevelScreen$Reason

public static "values"(): ($ReceivingLevelScreen$Reason)[]
public static "valueOf"(arg0: StringJS): $ReceivingLevelScreen$Reason
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReceivingLevelScreen$Reason$$Type = (("nether_portal") | ("end_portal") | ("other"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReceivingLevelScreen$Reason$$Original = $ReceivingLevelScreen$Reason;}
declare module "net.minecraft.client.gui.narration.NarrationThunk" {
import {$List$$Type} from "java.util.List"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $NarrationThunk<T> {
static readonly "EMPTY": $NarrationThunk<(never)>

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "from"(arg0: StringJS): $NarrationThunk<(never)>
public static "from"(arg0: $List$$Type<($Component$$Type)>): $NarrationThunk<(never)>
public static "from"(arg0: $Component$$Type): $NarrationThunk<(never)>
public "getText"(arg0: $Consumer$$Type<(StringJS)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NarrationThunk$$Type<T> = ($NarrationThunk<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NarrationThunk$$Original<T> = $NarrationThunk<(T)>;}
declare module "net.minecraft.client.gui.Gui$HeartType" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Enum} from "java.lang.Enum"
import {$ExtensionInfo} from "net.neoforged.fml.common.asm.enumextension.ExtensionInfo"
import {$IExtensibleEnum$$Interface} from "net.neoforged.fml.common.asm.enumextension.IExtensibleEnum"

export class $Gui$HeartType extends $Enum<($Gui$HeartType)> implements $IExtensibleEnum$$Interface {
static readonly "ABSORBING": $Gui$HeartType
static readonly "CONTAINER": $Gui$HeartType
static readonly "WITHERED": $Gui$HeartType
static readonly "POISIONED": $Gui$HeartType
static readonly "FROZEN": $Gui$HeartType
static readonly "NORMAL": $Gui$HeartType

public "getSprite"(arg0: boolean, arg1: boolean, arg2: boolean): $ResourceLocation
public static "values"(): ($Gui$HeartType)[]
public static "valueOf"(arg0: StringJS): $Gui$HeartType
public static "getExtensionInfo"(): $ExtensionInfo
get "extensionInfo"(): $ExtensionInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Gui$HeartType$$Type = (("container") | ("normal") | ("poisioned") | ("withered") | ("absorbing") | ("frozen"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Gui$HeartType$$Original = $Gui$HeartType;}
declare module "net.minecraft.client.gui.screens.recipebook.RecipeCollection" {
import {$RecipeHolder, $RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeBook$$Type} from "net.minecraft.stats.RecipeBook"
import {$StackedContents$$Type} from "net.minecraft.world.entity.player.StackedContents"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $RecipeCollection {
constructor(arg0: $RegistryAccess$$Type, arg1: $List$$Type<($RecipeHolder$$Type<(never)>)>)

public "getRecipes"(): $List<($RecipeHolder<(never)>)>
public "getRecipes"(arg0: boolean): $List<($RecipeHolder<(never)>)>
public "canCraft"(arg0: $StackedContents$$Type, arg1: integer, arg2: integer, arg3: $RecipeBook$$Type): void
public "updateKnownRecipes"(arg0: $RecipeBook$$Type): void
public "registryAccess"(): $RegistryAccess
public "hasSingleResultItem"(): boolean
public "hasFitting"(): boolean
public "hasCraftable"(): boolean
public "isCraftable"(arg0: $RecipeHolder$$Type<(never)>): boolean
public "hasKnownRecipes"(): boolean
public "getDisplayRecipes"(arg0: boolean): $List<($RecipeHolder<(never)>)>
get "recipes"(): $List<($RecipeHolder<(never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeCollection$$Type = ($RecipeCollection);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeCollection$$Original = $RecipeCollection;}
declare module "net.minecraft.client.gui.font.FontOption$Filter" {
import {$FontOption$$Type} from "net.minecraft.client.gui.font.FontOption"
import {$Map$$Type} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Set$$Type} from "java.util.Set"

export class $FontOption$Filter {
static readonly "CODEC": $Codec<($FontOption$Filter)>
static readonly "ALWAYS_PASS": $FontOption$Filter

constructor(arg0: $Map$$Type<($FontOption$$Type), (boolean)>)

public "apply"(arg0: $Set$$Type<($FontOption$$Type)>): boolean
public "merge"(arg0: $FontOption$Filter$$Type): $FontOption$Filter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FontOption$Filter$$Type = ($FontOption$Filter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FontOption$Filter$$Original = $FontOption$Filter;}
declare module "net.minecraft.client.gui.screens.worldselection.WorldCreationUiState$SelectedGameMode" {
import {$Enum} from "java.lang.Enum"
import {$Component} from "net.minecraft.network.chat.Component"
import {$GameType} from "net.minecraft.world.level.GameType"

export class $WorldCreationUiState$SelectedGameMode extends $Enum<($WorldCreationUiState$SelectedGameMode)> {
static readonly "SURVIVAL": $WorldCreationUiState$SelectedGameMode
readonly "gameType": $GameType
readonly "displayName": $Component
static readonly "CREATIVE": $WorldCreationUiState$SelectedGameMode
static readonly "DEBUG": $WorldCreationUiState$SelectedGameMode
static readonly "HARDCORE": $WorldCreationUiState$SelectedGameMode

public static "values"(): ($WorldCreationUiState$SelectedGameMode)[]
public static "valueOf"(arg0: StringJS): $WorldCreationUiState$SelectedGameMode
public "getInfo"(): $Component
get "info"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldCreationUiState$SelectedGameMode$$Type = (("survival") | ("hardcore") | ("creative") | ("debug"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldCreationUiState$SelectedGameMode$$Original = $WorldCreationUiState$SelectedGameMode;}
declare module "net.minecraft.client.gui.screens.Screen$DeferredTooltipRendering" {
import {$FormattedCharSequence$$Type} from "net.minecraft.util.FormattedCharSequence"
import {$List$$Type} from "java.util.List"
import {$ClientTooltipPositioner$$Type} from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipPositioner"
import {$Record} from "java.lang.Record"

export class $Screen$DeferredTooltipRendering extends $Record {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Screen$DeferredTooltipRendering$$Type = ({"positioner"?: $ClientTooltipPositioner$$Type, "tooltip"?: $List$$Type<($FormattedCharSequence$$Type)>}) | ([positioner?: $ClientTooltipPositioner$$Type, tooltip?: $List$$Type<($FormattedCharSequence$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Screen$DeferredTooltipRendering$$Original = $Screen$DeferredTooltipRendering;}
declare module "net.minecraft.client.gui.screens.MenuScreens$ScreenConstructor" {
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"

export interface $MenuScreens$ScreenConstructor$$Interface<T extends $AbstractContainerMenu, U extends $Screen> {

(arg0: T, arg1: $Inventory, arg2: $Component): U
}

export class $MenuScreens$ScreenConstructor<T extends $AbstractContainerMenu, U extends $Screen> implements $MenuScreens$ScreenConstructor$$Interface {
 "create"(arg0: T, arg1: $Inventory$$Type, arg2: $Component$$Type): U
 "fromPacket"(arg0: $Component$$Type, arg1: $MenuType$$Type<(T)>, arg2: $Minecraft$$Type, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuScreens$ScreenConstructor$$Type<T, U> = ((arg0: T, arg1: $Inventory, arg2: $Component) => U);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MenuScreens$ScreenConstructor$$Original<T, U> = $MenuScreens$ScreenConstructor<(T), (U)>;}
declare module "net.minecraft.client.gui.spectator.categories.SpectatorPage" {
import {$SpectatorMenuItem, $SpectatorMenuItem$$Type} from "net.minecraft.client.gui.spectator.SpectatorMenuItem"
import {$List$$Type} from "java.util.List"

export class $SpectatorPage {
static readonly "NO_SELECTION": integer

constructor(arg0: $List$$Type<($SpectatorMenuItem$$Type)>, arg1: integer)

public "getItem"(arg0: integer): $SpectatorMenuItem
public "getSelectedSlot"(): integer
get "selectedSlot"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpectatorPage$$Type = ($SpectatorPage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpectatorPage$$Original = $SpectatorPage;}
declare module "net.minecraft.client.gui.narration.NarrationElementOutput" {
import {$NarrationThunk$$Type} from "net.minecraft.client.gui.narration.NarrationThunk"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$NarratedElementType$$Type} from "net.minecraft.client.gui.narration.NarratedElementType"

export interface $NarrationElementOutput$$Interface {
}

export class $NarrationElementOutput implements $NarrationElementOutput$$Interface {
 "add"(arg0: $NarratedElementType$$Type, arg1: $NarrationThunk$$Type<(never)>): void
 "add"(arg0: $NarratedElementType$$Type, ...arg1: ($Component$$Type)[]): void
 "add"(arg0: $NarratedElementType$$Type, arg1: StringJS): void
 "add"(arg0: $NarratedElementType$$Type, arg1: $Component$$Type): void
 "nest"(): $NarrationElementOutput
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NarrationElementOutput$$Type = ($NarrationElementOutput);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NarrationElementOutput$$Original = $NarrationElementOutput;}
declare module "net.minecraft.client.gui.components.toasts.ToastComponent$ToastInstance" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Toast} from "net.minecraft.client.gui.components.toasts.Toast"

export class $ToastComponent$ToastInstance<T extends $Toast> {
public "render"(arg0: integer, arg1: $GuiGraphics$$Type): boolean
public "getToast"(): T
get "toast"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToastComponent$ToastInstance$$Type<T> = ($ToastComponent$ToastInstance<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ToastComponent$ToastInstance$$Original<T> = $ToastComponent$ToastInstance<(T)>;}
declare module "net.minecraft.client.gui.components.ChatComponent$State" {
import {$ChatComponent$DelayedMessageDeletion$$Type} from "net.minecraft.client.gui.components.ChatComponent$DelayedMessageDeletion"
import {$List$$Type} from "java.util.List"
import {$GuiMessage$$Type} from "net.minecraft.client.GuiMessage"

export class $ChatComponent$State {
constructor(arg0: $List$$Type<($GuiMessage$$Type)>, arg1: $List$$Type<(StringJS)>, arg2: $List$$Type<($ChatComponent$DelayedMessageDeletion$$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChatComponent$State$$Type = ($ChatComponent$State);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChatComponent$State$$Original = $ChatComponent$State;}
declare module "net.minecraft.client.gui.font.GlyphRenderTypes" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Font$DisplayMode$$Type} from "net.minecraft.client.gui.Font$DisplayMode"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$Record} from "java.lang.Record"

export class $GlyphRenderTypes extends $Record {
constructor(arg0: $RenderType$$Type, arg1: $RenderType$$Type, arg2: $RenderType$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "normal"(): $RenderType
public "select"(arg0: $Font$DisplayMode$$Type): $RenderType
public "polygonOffset"(): $RenderType
public static "createForIntensityTexture"(arg0: $ResourceLocation$$Type): $GlyphRenderTypes
public static "createForColorTexture"(arg0: $ResourceLocation$$Type): $GlyphRenderTypes
public "seeThrough"(): $RenderType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlyphRenderTypes$$Type = ({"polygonOffset"?: $RenderType$$Type, "seeThrough"?: $RenderType$$Type, "normal"?: $RenderType$$Type}) | ([polygonOffset?: $RenderType$$Type, seeThrough?: $RenderType$$Type, normal?: $RenderType$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GlyphRenderTypes$$Original = $GlyphRenderTypes;}
declare module "net.minecraft.client.gui.screens.worldselection.PresetEditor" {
import {$Map} from "java.util.Map"
import {$WorldCreationContext, $WorldCreationContext$$Type} from "net.minecraft.client.gui.screens.worldselection.WorldCreationContext"
import {$Optional} from "java.util.Optional"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$WorldPreset} from "net.minecraft.world.level.levelgen.presets.WorldPreset"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$CreateWorldScreen, $CreateWorldScreen$$Type} from "net.minecraft.client.gui.screens.worldselection.CreateWorldScreen"

export interface $PresetEditor$$Interface {

(arg0: $CreateWorldScreen, arg1: $WorldCreationContext): $Screen$$Type
}

export class $PresetEditor implements $PresetEditor$$Interface {
/**
 * 
 * @deprecated
 */
static readonly "EDITORS": $Map<($Optional<($ResourceKey<($WorldPreset)>)>), ($PresetEditor)>

 "createEditScreen"(arg0: $CreateWorldScreen$$Type, arg1: $WorldCreationContext$$Type): $Screen
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PresetEditor$$Type = ((arg0: $CreateWorldScreen, arg1: $WorldCreationContext) => $Screen$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PresetEditor$$Original = $PresetEditor;}
declare module "net.minecraft.client.gui.font.glyphs.BakedGlyph" {
import {$BakedGlyph$Effect$$Type} from "net.minecraft.client.gui.font.glyphs.BakedGlyph$Effect"
import {$GlyphRenderTypes$$Type} from "net.minecraft.client.gui.font.GlyphRenderTypes"
import {$ReverseRenderableBakedGlyph$$Interface} from "com.kipti.bnb.mixin_accessor.ReverseRenderableBakedGlyph"
import {$BakedGlyphAccessor$$Interface} from "de.mrjulsen.mcdragonlib.mixin.BakedGlyphAccessor"
import {$Font$DisplayMode$$Type} from "net.minecraft.client.gui.Font$DisplayMode"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$RenderType} from "net.minecraft.client.renderer.RenderType"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"

export class $BakedGlyph implements $ReverseRenderableBakedGlyph$$Interface, $BakedGlyphAccessor$$Interface {
constructor(arg0: $GlyphRenderTypes$$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float)

public "render"(arg0: boolean, arg1: float, arg2: float, arg3: $Matrix4f$$Type, arg4: $VertexConsumer$$Type, arg5: float, arg6: float, arg7: float, arg8: float, arg9: integer): void
public "renderType"(arg0: $Font$DisplayMode$$Type): $RenderType
public "dragonlib$setU0"(arg0: float): void
public "dragonlib$getU0"(): float
public "dragonlib$setV0"(arg0: float): void
public "dragonlib$getV0"(): float
public "dragonlib$setV1"(arg0: float): void
public "dragonlib$setU1"(arg0: float): void
public "dragonlib$getV1"(): float
public "renderEffect"(arg0: $BakedGlyph$Effect$$Type, arg1: $Matrix4f$$Type, arg2: $VertexConsumer$$Type, arg3: integer): void
public "dragonlib$getU1"(): float
public "bits_n_bobs$renderReverse"(arg0: boolean, arg1: float, arg2: float, arg3: $Matrix4f$$Type, arg4: $VertexConsumer$$Type, arg5: float, arg6: float, arg7: float, arg8: float, arg9: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakedGlyph$$Type = ($BakedGlyph);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BakedGlyph$$Original = $BakedGlyph;}
declare module "net.minecraft.client.gui.screens.worldselection.WorldCreationContext$OptionsModifier" {
import {$UnaryOperator, $UnaryOperator$$Interface} from "java.util.function.UnaryOperator"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$WorldOptions, $WorldOptions$$Type} from "net.minecraft.world.level.levelgen.WorldOptions"

export interface $WorldCreationContext$OptionsModifier$$Interface extends $UnaryOperator$$Interface<($WorldOptions)> {

(arg0: $WorldOptions): $WorldOptions$$Type
}

export class $WorldCreationContext$OptionsModifier implements $WorldCreationContext$OptionsModifier$$Interface {
static "identity"<T>(): $UnaryOperator<($WorldOptions)>
 "apply"(arg0: $WorldOptions$$Type): $WorldOptions
 "compose"<V>(arg0: $Function$$Type<(V), ($WorldOptions$$Type)>): $Function<(V), ($WorldOptions)>
 "andThen"<V>(arg0: $Function$$Type<($WorldOptions), (V)>): $Function<($WorldOptions), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldCreationContext$OptionsModifier$$Type = ((arg0: $WorldOptions) => $WorldOptions$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldCreationContext$OptionsModifier$$Original = $WorldCreationContext$OptionsModifier;}
declare module "net.minecraft.client.gui.MapRenderer" {
import {$TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$MapId$$Type} from "net.minecraft.world.level.saveddata.maps.MapId"
import {$MapDecorationTextureManager$$Type} from "net.minecraft.client.resources.MapDecorationTextureManager"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$MapItemSavedData$$Type} from "net.minecraft.world.level.saveddata.maps.MapItemSavedData"

export class $MapRenderer implements $AutoCloseable$$Interface {
constructor(arg0: $TextureManager$$Type, arg1: $MapDecorationTextureManager$$Type)

public "resetData"(): void
public "update"(arg0: $MapId$$Type, arg1: $MapItemSavedData$$Type): void
public "close"(): void
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: $MapId$$Type, arg3: $MapItemSavedData$$Type, arg4: boolean, arg5: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapRenderer$$Type = ($MapRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapRenderer$$Original = $MapRenderer;}
declare module "net.minecraft.client.gui.narration.NarratableEntry" {
import {$NarrationElementOutput$$Type} from "net.minecraft.client.gui.narration.NarrationElementOutput"
import {$TabOrderedElement$$Interface} from "net.minecraft.client.gui.components.TabOrderedElement"
import {$NarrationSupplier$$Interface} from "net.minecraft.client.gui.narration.NarrationSupplier"
import {$NarratableEntry$NarrationPriority} from "net.minecraft.client.gui.narration.NarratableEntry$NarrationPriority"

export interface $NarratableEntry$$Interface extends $TabOrderedElement$$Interface, $NarrationSupplier$$Interface {
get "active"(): boolean
get "tabOrderGroup"(): integer
}

export class $NarratableEntry implements $NarratableEntry$$Interface {
 "isActive"(): boolean
 "narrationPriority"(): $NarratableEntry$NarrationPriority
 "getTabOrderGroup"(): integer
 "updateNarration"(arg0: $NarrationElementOutput$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NarratableEntry$$Type = ($NarratableEntry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NarratableEntry$$Original = $NarratableEntry;}
declare module "net.minecraft.client.gui.narration.NarrationSupplier" {
import {$NarrationElementOutput, $NarrationElementOutput$$Type} from "net.minecraft.client.gui.narration.NarrationElementOutput"

export interface $NarrationSupplier$$Interface {

(arg0: $NarrationElementOutput): void
}

export class $NarrationSupplier implements $NarrationSupplier$$Interface {
 "updateNarration"(arg0: $NarrationElementOutput$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NarrationSupplier$$Type = ((arg0: $NarrationElementOutput) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NarrationSupplier$$Original = $NarrationSupplier;}
declare module "net.minecraft.client.gui.Gui" {
import {$BossHealthOverlay} from "net.minecraft.client.gui.components.BossHealthOverlay"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$PlayerTabOverlay} from "net.minecraft.client.gui.components.PlayerTabOverlay"
import {$Font} from "net.minecraft.client.gui.Font"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ChatComponent} from "net.minecraft.client.gui.components.ChatComponent"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$DebugScreenOverlay} from "net.minecraft.client.gui.components.DebugScreenOverlay"
import {$GuiAccessor$$Interface} from "com.simibubi.create.foundation.mixin.accessor.GuiAccessor"
import {$SubtitleOverlay} from "net.minecraft.client.gui.components.SubtitleOverlay"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$DeltaTracker$$Type} from "net.minecraft.client.DeltaTracker"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$SpectatorGui} from "net.minecraft.client.gui.components.spectator.SpectatorGui"

export class $Gui implements $GuiAccessor$$Interface {
readonly "minecraft": $Minecraft
static readonly "SPYGLASS_SCOPE_LOCATION": $ResourceLocation
 "vignetteBrightness": float
 "rightHeight": integer
 "displayHealth": integer
 "leftHeight": integer

constructor(arg0: $Minecraft$$Type)

public "getLayerCount"(): integer
public "initModdedOverlays"(): void
public "getTabList"(): $PlayerTabOverlay
public "getFont"(): $Font
public "setTitle"(arg0: $Component$$Type): void
public "clear"(): void
public "setTimes"(arg0: integer, arg1: integer, arg2: integer): void
public "tick"(arg0: boolean): void
public "clearCache"(): void
public "render"(arg0: $GuiGraphics$$Type, arg1: $DeltaTracker$$Type): void
public "resetTitleTimes"(): void
public "setSubtitle"(arg0: $Component$$Type): void
public "getBossOverlay"(): $BossHealthOverlay
public "getDebugOverlay"(): $DebugScreenOverlay
public "setOverlayMessage"(arg0: $Component$$Type, arg1: boolean): void
public "getSpectatorGui"(): $SpectatorGui
public "onDisconnected"(): void
public "getChat"(): $ChatComponent
public "isShowingChatDisabledByPlayer"(): boolean
public "setChatDisabledByPlayerShown"(arg0: boolean): void
public "renderSavingIndicator"(arg0: $GuiGraphics$$Type, arg1: $DeltaTracker$$Type): void
public "getGuiTicks"(): integer
public "setNowPlaying"(arg0: $Component$$Type): void
public "handler$cnj000$collective$render"(arg0: $GuiGraphics$$Type, arg1: $DeltaTracker$$Type, arg2: $CallbackInfo$$Type): void
public "getVehicleMaxHearts"(arg0: $LivingEntity$$Type): integer
public "renderSelectedItemName"(arg0: $GuiGraphics$$Type, arg1: integer): void
public "getPlayerVehicleWithHealth"(): $LivingEntity
public "create$getSubtitleOverlay"(): $SubtitleOverlay
public "create$renderTextureOverlay"(arg0: $GuiGraphics$$Type, arg1: $ResourceLocation$$Type, arg2: float): void
public "create$getToolHighlightTimer"(): integer
get "layerCount"(): integer
get "tabList"(): $PlayerTabOverlay
get "font"(): $Font
set "title"(value: $Component$$Type)
set "subtitle"(value: $Component$$Type)
get "bossOverlay"(): $BossHealthOverlay
get "debugOverlay"(): $DebugScreenOverlay
get "spectatorGui"(): $SpectatorGui
get "chat"(): $ChatComponent
get "showingChatDisabledByPlayer"(): boolean
set "chatDisabledByPlayerShown"(value: boolean)
get "guiTicks"(): integer
set "nowPlaying"(value: $Component$$Type)
get "playerVehicleWithHealth"(): $LivingEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Gui$$Type = ($Gui);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Gui$$Original = $Gui;}
declare module "net.minecraft.client.gui.screens.worldselection.WorldCreationUiState$WorldTypeEntry" {
import {$WorldPreset, $WorldPreset$$Type} from "net.minecraft.world.level.levelgen.presets.WorldPreset"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $WorldCreationUiState$WorldTypeEntry extends $Record {
constructor(preset: $Holder$$Type<($WorldPreset)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "preset"(): $Holder<($WorldPreset)>
public "isAmplified"(): boolean
public "describePreset"(): $Component
get "amplified"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldCreationUiState$WorldTypeEntry$$Type = ({"preset"?: $Holder$$Type<($WorldPreset)>}) | ([preset?: $Holder$$Type<($WorldPreset)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldCreationUiState$WorldTypeEntry$$Original = $WorldCreationUiState$WorldTypeEntry;}
declare module "net.minecraft.client.gui.spectator.SpectatorMenuListener" {
import {$SpectatorMenu, $SpectatorMenu$$Type} from "net.minecraft.client.gui.spectator.SpectatorMenu"

export interface $SpectatorMenuListener$$Interface {

(arg0: $SpectatorMenu): void
}

export class $SpectatorMenuListener implements $SpectatorMenuListener$$Interface {
 "onSpectatorMenuClosed"(arg0: $SpectatorMenu$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpectatorMenuListener$$Type = ((arg0: $SpectatorMenu) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpectatorMenuListener$$Original = $SpectatorMenuListener;}
declare module "net.minecraft.client.gui.screens.Overlay" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Renderable$$Interface} from "net.minecraft.client.gui.components.Renderable"

export class $Overlay implements $Renderable$$Interface {
constructor()

public "isPauseScreen"(): boolean
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
get "pauseScreen"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Overlay$$Type = ($Overlay);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Overlay$$Original = $Overlay;}
declare module "net.minecraft.client.gui.screens.ReceivingLevelScreen" {
import {$Screen$DeferredTooltipRendering} from "net.minecraft.client.gui.screens.Screen$DeferredTooltipRendering"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$List} from "java.util.List"
import {$Font} from "net.minecraft.client.gui.Font"
import {$BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"
import {$Component} from "net.minecraft.network.chat.Component"
import {$ScreenExtensions} from "net.fabricmc.fabric.impl.client.screen.ScreenExtensions"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$NarratableEntry} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$ReceivingLevelScreen$Reason$$Type} from "net.minecraft.client.gui.screens.ReceivingLevelScreen$Reason"
import {$Minecraft} from "net.minecraft.client.Minecraft"
import {$Renderable} from "net.minecraft.client.gui.components.Renderable"

export class $ReceivingLevelScreen extends $Screen {
static readonly "MENU_BACKGROUND": $ResourceLocation
 "minecraft": $Minecraft
static readonly "INWORLD_FOOTER_SEPARATOR": $ResourceLocation
 "deferredTooltipRendering": $Screen$DeferredTooltipRendering
 "title": $Component
static readonly "FOOTER_SEPARATOR": $ResourceLocation
readonly "renderables": $List<($Renderable)>
static readonly "INWORLD_HEADER_SEPARATOR": $ResourceLocation
readonly "narratables": $List<($NarratableEntry)>
 "width": integer
static readonly "HEADER_SEPARATOR": $ResourceLocation
 "height": integer
 "font": $Font

constructor(arg0: $BooleanSupplier$$Type, arg1: $ReceivingLevelScreen$Reason$$Type)

public "onClose"(): void
public "tick"(): void
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "isPauseScreen"(): boolean
public "renderBackground"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "shouldCloseOnEsc"(): boolean
public static "getExtensions"(arg0: $Screen$$Type): $ScreenExtensions
get "pauseScreen"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReceivingLevelScreen$$Type = ($ReceivingLevelScreen);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReceivingLevelScreen$$Original = $ReceivingLevelScreen;}
declare module "net.minecraft.client.gui.components.WidgetTooltipHolder" {
import {$NarrationElementOutput$$Type} from "net.minecraft.client.gui.narration.NarrationElementOutput"
import {$ScreenRectangle$$Type} from "net.minecraft.client.gui.navigation.ScreenRectangle"
import {$ClientTooltipPositioner} from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipPositioner"
import {$Duration$$Type} from "java.time.Duration"
import {$Tooltip, $Tooltip$$Type} from "net.minecraft.client.gui.components.Tooltip"

export class $WidgetTooltipHolder {
constructor()

public "get"(): $Tooltip
public "set"(arg0: $Tooltip$$Type): void
public "refreshTooltipForNextRenderPass"(arg0: boolean, arg1: boolean, arg2: $ScreenRectangle$$Type): void
public "setDelay"(arg0: $Duration$$Type): void
public "updateNarration"(arg0: $NarrationElementOutput$$Type): void
public "createTooltipPositioner"(arg0: $ScreenRectangle$$Type, arg1: boolean, arg2: boolean): $ClientTooltipPositioner
set "delay"(value: $Duration$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetTooltipHolder$$Type = ($WidgetTooltipHolder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WidgetTooltipHolder$$Original = $WidgetTooltipHolder;}
declare module "net.minecraft.client.gui.components.events.ContainerEventHandler" {
import {$GuiEventListener, $GuiEventListener$$Type, $GuiEventListener$$Interface} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$FocusNavigationEvent$$Type} from "net.minecraft.client.gui.navigation.FocusNavigationEvent"
import {$ScreenRectangle} from "net.minecraft.client.gui.navigation.ScreenRectangle"
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$ComponentPath} from "net.minecraft.client.gui.ComponentPath"

export interface $ContainerEventHandler$$Interface extends $GuiEventListener$$Interface {
get "focused"(): $GuiEventListener
set "focused"(value: boolean)
set "focused"(value: $GuiEventListener$$Type)
get "dragging"(): boolean
get "focused"(): boolean
set "dragging"(value: boolean)
get "currentFocusPath"(): $ComponentPath
get "rectangle"(): $ScreenRectangle
get "tabOrderGroup"(): integer
}

export class $ContainerEventHandler implements $ContainerEventHandler$$Interface {
 "children"(): $List<($GuiEventListener)>
 "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
 "getFocused"(): $GuiEventListener
 "setFocused"(arg0: boolean): void
 "setFocused"(arg0: $GuiEventListener$$Type): void
 "getChildAt"(arg0: double, arg1: double): $Optional<($GuiEventListener)>
 "isDragging"(): boolean
 "charTyped"(arg0: character, arg1: integer): boolean
 "isFocused"(): boolean
 "nextFocusPath"(arg0: $FocusNavigationEvent$$Type): $ComponentPath
 "mouseDragged"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
 "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
 "setDragging"(arg0: boolean): void
 "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
 "mouseScrolled"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
 "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
 "getCurrentFocusPath"(): $ComponentPath
 "mouseMoved"(arg0: double, arg1: double): void
 "getRectangle"(): $ScreenRectangle
 "isMouseOver"(arg0: double, arg1: double): boolean
 "getTabOrderGroup"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerEventHandler$$Type = ($ContainerEventHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContainerEventHandler$$Original = $ContainerEventHandler;}
declare module "net.minecraft.client.gui.components.toasts.Toast" {
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Toast$Visibility, $Toast$Visibility$$Type} from "net.minecraft.client.gui.components.toasts.Toast$Visibility"
import {$ToastComponent, $ToastComponent$$Type} from "net.minecraft.client.gui.components.toasts.ToastComponent"

export interface $Toast$$Interface {

(arg0: $GuiGraphics, arg1: $ToastComponent, arg2: long): $Toast$Visibility$$Type
get "token"(): any
}

export class $Toast implements $Toast$$Interface {
static readonly "NO_TOKEN": any
static readonly "SLOT_HEIGHT": integer

 "slotCount"(): integer
 "width"(): integer
 "getToken"(): any
 "render"(arg0: $GuiGraphics$$Type, arg1: $ToastComponent$$Type, arg2: long): $Toast$Visibility
 "height"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Toast$$Type = ((arg0: $GuiGraphics, arg1: $ToastComponent, arg2: long) => $Toast$Visibility$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Toast$$Original = $Toast;}
declare module "net.minecraft.client.gui.navigation.FocusNavigationEvent$ArrowNavigation" {
import {$FocusNavigationEvent$$Interface} from "net.minecraft.client.gui.navigation.FocusNavigationEvent"
import {$Record} from "java.lang.Record"
import {$ScreenDirection, $ScreenDirection$$Type} from "net.minecraft.client.gui.navigation.ScreenDirection"

export class $FocusNavigationEvent$ArrowNavigation extends $Record implements $FocusNavigationEvent$$Interface {
constructor(arg0: $ScreenDirection$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "direction"(): $ScreenDirection
public "getVerticalDirectionForInitialFocus"(): $ScreenDirection
get "verticalDirectionForInitialFocus"(): $ScreenDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FocusNavigationEvent$ArrowNavigation$$Type = ({"direction"?: $ScreenDirection$$Type}) | ([direction?: $ScreenDirection$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FocusNavigationEvent$ArrowNavigation$$Original = $FocusNavigationEvent$ArrowNavigation;}
declare module "net.minecraft.client.gui.screens.Screen" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$ScreenAccessor$$Interface as $ScreenAccessor$0$$Interface} from "de.mrjulsen.mcdragonlib.mixin.ScreenAccessor"
import {$List, $List$$Type} from "java.util.List"
import {$ScreenAccessor$$Interface as $ScreenAccessor$3$$Interface} from "com.blackgear.platform.core.mixin.access.ScreenAccessor"
import {$Font} from "net.minecraft.client.gui.Font"
import {$ScreenAccessor$$Interface} from "net.fabricmc.fabric.mixin.screen.ScreenAccessor"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ScreenExtensions, $ScreenExtensions$$Interface} from "net.fabricmc.fabric.impl.client.screen.ScreenExtensions"
import {$AccessorScreen$$Interface} from "vazkii.patchouli.mixin.client.AccessorScreen"
import {$ScreenDirection$$Type} from "net.minecraft.client.gui.navigation.ScreenDirection"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ScreenAccessor$$Interface as $ScreenAccessor$1$$Interface} from "com.mrcrayfish.furniture.refurbished.mixin.client.ScreenAccessor"
import {$ScreenAccessor$$Interface as $ScreenAccessor$2$$Interface} from "dev.tr7zw.trender.gui.impl.mixin.client.ScreenAccessor"
import {$ClientTooltipPositioner$$Type} from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipPositioner"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Renderable, $Renderable$$Type, $Renderable$$Interface} from "net.minecraft.client.gui.components.Renderable"
import {$AbstractContainerEventHandler} from "net.minecraft.client.gui.components.events.AbstractContainerEventHandler"
import {$FocusNavigationEvent$TabNavigation} from "net.minecraft.client.gui.navigation.FocusNavigationEvent$TabNavigation"
import {$Screen$DeferredTooltipRendering} from "net.minecraft.client.gui.screens.Screen$DeferredTooltipRendering"
import {$Style$$Type} from "net.minecraft.network.chat.Style"
import {$ScreenWidgetAdder$$Interface} from "net.dawson.adorablehamsterpets.mixin.accessor.ScreenWidgetAdder"
import {$ScreenAccessor$$Interface as $ScreenAccessor$4$$Interface} from "net.createmod.ponder.mixin.client.accessor.ScreenAccessor"
import {$Event} from "net.fabricmc.fabric.api.event.Event"
import {$Screen$NarratableSearchResult} from "net.minecraft.client.gui.screens.Screen$NarratableSearchResult"
import {$Tooltip$$Type} from "net.minecraft.client.gui.components.Tooltip"
import {$FormattedCharSequence$$Type} from "net.minecraft.util.FormattedCharSequence"
import {$GuiEventListener, $GuiEventListener$$Type} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$ScreenRectangle} from "net.minecraft.client.gui.navigation.ScreenRectangle"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$NarratableEntry, $NarratableEntry$$Type} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$FocusNavigationEvent$ArrowNavigation} from "net.minecraft.client.gui.navigation.FocusNavigationEvent$ArrowNavigation"
import {$Path$$Type} from "java.nio.file.Path"
import {$Music} from "net.minecraft.sounds.Music"

export class $Screen extends $AbstractContainerEventHandler implements $Renderable$$Interface, $ScreenExtensions$$Interface, $ScreenAccessor$$Interface, $ScreenAccessor$4$$Interface, $AccessorScreen$$Interface, $ScreenWidgetAdder$$Interface, $ScreenAccessor$1$$Interface, $ScreenAccessor$2$$Interface, $ScreenAccessor$0$$Interface, $ScreenAccessor$3$$Interface {
static readonly "MENU_BACKGROUND": $ResourceLocation
 "minecraft": $Minecraft
static readonly "INWORLD_FOOTER_SEPARATOR": $ResourceLocation
 "deferredTooltipRendering": $Screen$DeferredTooltipRendering
 "title": $Component
static readonly "FOOTER_SEPARATOR": $ResourceLocation
readonly "renderables": $List<($Renderable)>
static readonly "INWORLD_HEADER_SEPARATOR": $ResourceLocation
readonly "narratables": $List<($NarratableEntry)>
 "width": integer
static readonly "HEADER_SEPARATOR": $ResourceLocation
 "height": integer
 "font": $Font

public "getFont"(): $Font
public "init"(arg0: $Minecraft$$Type, arg1: integer, arg2: integer): void
public "added"(): void
public "removed"(): void
public "resize"(arg0: $Minecraft$$Type, arg1: integer, arg2: integer): void
public "onClose"(): void
public "tick"(): void
public "children"(): $List<($GuiEventListener)>
public "getChildren"(): $List
public static "isCopy"(arg0: integer): boolean
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "renderTransparentBackground"(arg0: $GuiGraphics$$Type): void
public "handler$doe000$dragonlib$render"(ci: $CallbackInfo$$Type): void
public static "renderMenuBackgroundTexture"(arg0: $GuiGraphics$$Type, arg1: $ResourceLocation$$Type, arg2: integer, arg3: integer, arg4: float, arg5: float, arg6: integer, arg7: integer): void
public "fabric_getBeforeRenderEvent"(): $Event
public "fabric_getAfterKeyReleaseEvent"(): $Event
public "fabric_getAllowMouseReleaseEvent"(): $Event
public "fabric_getAllowKeyReleaseEvent"(): $Event
public "fabric_getAllowMouseScrollEvent"(): $Event
public "fabric_getBeforeMouseScrollEvent"(): $Event
public "fabric_getBeforeKeyPressEvent"(): $Event
public "setTooltipForNextRenderPass"(arg0: $Component$$Type): void
public "setTooltipForNextRenderPass"(arg0: $List$$Type<($FormattedCharSequence$$Type)>, arg1: $ClientTooltipPositioner$$Type, arg2: boolean): void
public "setTooltipForNextRenderPass"(arg0: $List$$Type<($FormattedCharSequence$$Type)>): void
public "setTooltipForNextRenderPass"(arg0: $Tooltip$$Type, arg1: $ClientTooltipPositioner$$Type, arg2: boolean): void
public "adorablehamsterpets$addWidget"(arg0: $GuiEventListener$$Type): $GuiEventListener
public "fabric_getAllowMouseClickEvent"(): $Event
public "fabric_getBeforeMouseClickEvent"(): $Event
public "fabric_getAfterMouseScrollEvent"(): $Event
public "fabric_getBeforeKeyReleaseEvent"(): $Event
public "fabric_getBeforeMouseReleaseEvent"(): $Event
public "fabric_getAfterKeyPressEvent"(): $Event
public "fabric_getAfterMouseClickEvent"(): $Event
public "fabric_getAfterMouseReleaseEvent"(): $Event
public "fabric_getAllowKeyPressEvent"(): $Event
public "getTitle"(): $Component
public "getBackgroundMusic"(): $Music
public "isPauseScreen"(): boolean
public static "getTooltipFromItem"(arg0: $Minecraft$$Type, arg1: $ItemStack$$Type): $List<($Component)>
public static "wrapScreenError"(arg0: $Runnable$$Type, arg1: StringJS, arg2: StringJS): void
public static "hasControlDown"(): boolean
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "clearFocus"(): void
public static "isCut"(arg0: integer): boolean
public static "isPaste"(arg0: integer): boolean
public "addWidget"<T extends $GuiEventListener>(arg0: T): T
public static "hasAltDown"(): boolean
public "getRectangle"(): $ScreenRectangle
public "getMinecraft"(): $Minecraft
public "getRenderables"(): $List
public "afterMouseAction"(): void
public "getNarratables"(): $List
public "renderWithTooltip"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "libgui$getChildren"(): $List
public static "isSelectAll"(arg0: integer): boolean
public "callAddWidget"(arg0: $GuiEventListener$$Type): $GuiEventListener
public "renderBackground"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "isMouseOver"(arg0: double, arg1: double): boolean
public "shouldCloseOnEsc"(): boolean
public "onFilesDrop"(arg0: $List$$Type<($Path$$Type)>): void
public "afterMouseMove"(): void
public "addRenderableOnly"<T extends $Renderable>(arg0: T): T
public "fabric_getButtons"(): $List
public static "hasShiftDown"(): boolean
public "addRenderableWidget"<T extends $GuiEventListener>(arg0: T): T
public "handleComponentClicked"(arg0: $Style$$Type): boolean
public static "findNarratableWidget"(arg0: $List$$Type<($NarratableEntry$$Type)>, arg1: $NarratableEntry$$Type): $Screen$NarratableSearchResult
public "handleDelayedNarration"(): void
public "updateNarratorStatus"(arg0: boolean): void
public "getNarrationMessage"(): $Component
public "triggerImmediateNarration"(arg0: boolean): void
public "afterKeyboardAction"(): void
public "dragonlib$createArrowEvent"(arg0: $ScreenDirection$$Type): $FocusNavigationEvent$ArrowNavigation
public "dragonlib$clearFocus"(): void
public "callAddRenderableOnly"(arg0: $Renderable$$Type): $Renderable
public "catnip$getRenderables"(): $List
public "dragonlib$createTabEvent"(): $FocusNavigationEvent$TabNavigation
public "fabric_getRemoveEvent"(): $Event
public "fabric_getAfterTickEvent"(): $Event
public "fabric_getBeforeTickEvent"(): $Event
public "callAddRenderableWidget"(arg0: $GuiEventListener$$Type): $GuiEventListener
public "fabric_getAfterRenderEvent"(): $Event
public static "getExtensions"(arg0: $Screen$$Type): $ScreenExtensions
set "tooltipForNextRenderPass"(value: $Component$$Type)
set "tooltipForNextRenderPass"(value: $List$$Type<($FormattedCharSequence$$Type)>)
get "backgroundMusic"(): $Music
get "pauseScreen"(): boolean
get "rectangle"(): $ScreenRectangle
get "narrationMessage"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Screen$$Type = ($Screen);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Screen$$Original = $Screen;}
declare module "net.minecraft.client.gui.navigation.ScreenAxis" {
import {$Enum} from "java.lang.Enum"
import {$ScreenDirection} from "net.minecraft.client.gui.navigation.ScreenDirection"

export class $ScreenAxis extends $Enum<($ScreenAxis)> {
static readonly "VERTICAL": $ScreenAxis
static readonly "HORIZONTAL": $ScreenAxis

public static "values"(): ($ScreenAxis)[]
public static "valueOf"(arg0: StringJS): $ScreenAxis
public "getNegative"(): $ScreenDirection
public "getDirection"(arg0: boolean): $ScreenDirection
public "orthogonal"(): $ScreenAxis
public "getPositive"(): $ScreenDirection
get "negative"(): $ScreenDirection
get "positive"(): $ScreenDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenAxis$$Type = (("horizontal") | ("vertical"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenAxis$$Original = $ScreenAxis;}
declare module "net.minecraft.client.gui.components.CycleButton$ValueListSupplier" {
import {$Collection$$Type} from "java.util.Collection"
import {$List, $List$$Type} from "java.util.List"
import {$BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"

export interface $CycleButton$ValueListSupplier$$Interface<T> {
get "defaultList"(): $List<(T)>
get "selectedList"(): $List<(T)>
}

export class $CycleButton$ValueListSupplier<T> implements $CycleButton$ValueListSupplier$$Interface {
static "create"<T>(arg0: $BooleanSupplier$$Type, arg1: $List$$Type<(T)>, arg2: $List$$Type<(T)>): $CycleButton$ValueListSupplier<(T)>
static "create"<T>(arg0: $Collection$$Type<(T)>): $CycleButton$ValueListSupplier<(T)>
 "getDefaultList"(): $List<(T)>
 "getSelectedList"(): $List<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CycleButton$ValueListSupplier$$Type<T> = ($CycleButton$ValueListSupplier<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CycleButton$ValueListSupplier$$Original<T> = $CycleButton$ValueListSupplier<(T)>;}
declare module "net.minecraft.client.gui.components.spectator.SpectatorGui" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$SpectatorMenuListener$$Interface} from "net.minecraft.client.gui.spectator.SpectatorMenuListener"
import {$SpectatorMenu$$Type} from "net.minecraft.client.gui.spectator.SpectatorMenu"

export class $SpectatorGui implements $SpectatorMenuListener$$Interface {
constructor(arg0: $Minecraft$$Type)

public "renderHotbar"(arg0: $GuiGraphics$$Type): void
public "onMouseMiddleClick"(): void
public "onMouseScrolled"(arg0: integer): void
public "isMenuActive"(): boolean
public "renderTooltip"(arg0: $GuiGraphics$$Type): void
public "onHotbarSelected"(arg0: integer): void
public "onSpectatorMenuClosed"(arg0: $SpectatorMenu$$Type): void
get "menuActive"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpectatorGui$$Type = ($SpectatorGui);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpectatorGui$$Original = $SpectatorGui;}
declare module "net.minecraft.client.gui.components.ChatComponent" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$ChatComponent$State, $ChatComponent$State$$Type} from "net.minecraft.client.gui.components.ChatComponent$State"
import {$MessageSignature$$Type} from "net.minecraft.network.chat.MessageSignature"
import {$Style} from "net.minecraft.network.chat.Style"
import {$ArrayListDeque} from "net.minecraft.util.ArrayListDeque"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$GuiMessageTag, $GuiMessageTag$$Type} from "net.minecraft.client.GuiMessageTag"

export class $ChatComponent {
constructor(arg0: $Minecraft$$Type)

public "scrollChat"(arg0: integer): void
public "tick"(): void
public "addMessage"(arg0: $Component$$Type): void
public "addMessage"(arg0: $Component$$Type, arg1: $MessageSignature$$Type, arg2: $GuiMessageTag$$Type): void
public static "defaultUnfocusedPct"(): double
public "restoreState"(arg0: $ChatComponent$State$$Type): void
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: boolean): void
public "storeState"(): $ChatComponent$State
public "getScale"(): double
public "rescaleChat"(): void
public "clearMessages"(arg0: boolean): void
public "isChatFocused"(): boolean
public "deleteMessage"(arg0: $MessageSignature$$Type): void
public "getWidth"(): integer
public static "getWidth"(arg0: double): integer
public static "getHeight"(arg0: double): integer
public "getHeight"(): integer
public "getClickedComponentStyleAt"(arg0: double, arg1: double): $Style
public "handleChatQueueClicked"(arg0: double, arg1: double): boolean
public "getMessageTagAt"(arg0: double, arg1: double): $GuiMessageTag
public "resetChatScroll"(): void
public "addRecentChat"(arg0: StringJS): void
public "getRecentChat"(): $ArrayListDeque<(StringJS)>
public "getLinesPerPage"(): integer
get "scale"(): double
get "chatFocused"(): boolean
get "width"(): integer
get "height"(): integer
get "recentChat"(): $ArrayListDeque<(StringJS)>
get "linesPerPage"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChatComponent$$Type = ($ChatComponent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChatComponent$$Original = $ChatComponent;}
declare module "net.minecraft.client.gui.components.LerpingBossEvent" {
import {$BossEvent$BossBarColor$$Type} from "net.minecraft.world.BossEvent$BossBarColor"
import {$UUID$$Type} from "java.util.UUID"
import {$BossEvent} from "net.minecraft.world.BossEvent"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BossEvent$BossBarOverlay$$Type} from "net.minecraft.world.BossEvent$BossBarOverlay"

export class $LerpingBossEvent extends $BossEvent {
constructor(arg0: $UUID$$Type, arg1: $Component$$Type, arg2: float, arg3: $BossEvent$BossBarColor$$Type, arg4: $BossEvent$BossBarOverlay$$Type, arg5: boolean, arg6: boolean, arg7: boolean)

public "getProgress"(): float
public "setProgress"(arg0: float): void
get "progress"(): float
set "progress"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LerpingBossEvent$$Type = ($LerpingBossEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LerpingBossEvent$$Original = $LerpingBossEvent;}
declare module "net.minecraft.client.gui.components.toasts.Toast$Visibility" {
import {$Enum} from "java.lang.Enum"
import {$SoundManager$$Type} from "net.minecraft.client.sounds.SoundManager"

export class $Toast$Visibility extends $Enum<($Toast$Visibility)> {
static readonly "HIDE": $Toast$Visibility
static readonly "SHOW": $Toast$Visibility

public "playSound"(arg0: $SoundManager$$Type): void
public static "values"(): ($Toast$Visibility)[]
public static "valueOf"(arg0: StringJS): $Toast$Visibility
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Toast$Visibility$$Type = (("show") | ("hide"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Toast$Visibility$$Original = $Toast$Visibility;}
declare module "net.minecraft.client.gui.components.events.GuiEventListener" {
import {$FocusNavigationEvent$$Type} from "net.minecraft.client.gui.navigation.FocusNavigationEvent"
import {$TabOrderedElement$$Interface} from "net.minecraft.client.gui.components.TabOrderedElement"
import {$ScreenRectangle} from "net.minecraft.client.gui.navigation.ScreenRectangle"
import {$ComponentPath} from "net.minecraft.client.gui.ComponentPath"

export interface $GuiEventListener$$Interface extends $TabOrderedElement$$Interface {
set "focused"(value: boolean)
get "focused"(): boolean
get "rectangle"(): $ScreenRectangle
get "currentFocusPath"(): $ComponentPath
get "tabOrderGroup"(): integer
}

export class $GuiEventListener implements $GuiEventListener$$Interface {
static readonly "DOUBLE_CLICK_THRESHOLD_MS": long

 "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
 "setFocused"(arg0: boolean): void
 "charTyped"(arg0: character, arg1: integer): boolean
 "isFocused"(): boolean
 "mouseMoved"(arg0: double, arg1: double): void
 "getRectangle"(): $ScreenRectangle
 "nextFocusPath"(arg0: $FocusNavigationEvent$$Type): $ComponentPath
 "isMouseOver"(arg0: double, arg1: double): boolean
 "mouseDragged"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
 "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
 "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
 "mouseScrolled"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
 "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
 "getCurrentFocusPath"(): $ComponentPath
 "getTabOrderGroup"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiEventListener$$Type = ($GuiEventListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiEventListener$$Original = $GuiEventListener;}
declare module "net.minecraft.client.gui.font.glyphs.BakedGlyph$Effect" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $BakedGlyph$Effect {
constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakedGlyph$Effect$$Type = ($BakedGlyph$Effect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BakedGlyph$Effect$$Original = $BakedGlyph$Effect;}
declare module "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent" {
import {$TooltipComponent$$Type} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$FormattedCharSequence$$Type} from "net.minecraft.util.FormattedCharSequence"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$MultiBufferSource$BufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"
import {$Font$$Type} from "net.minecraft.client.gui.Font"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"

export interface $ClientTooltipComponent$$Interface {
get "height"(): integer
}

export class $ClientTooltipComponent implements $ClientTooltipComponent$$Interface {
static "create"(arg0: $FormattedCharSequence$$Type): $ClientTooltipComponent
static "create"(arg0: $TooltipComponent$$Type): $ClientTooltipComponent
 "renderText"(arg0: $Font$$Type, arg1: integer, arg2: integer, arg3: $Matrix4f$$Type, arg4: $MultiBufferSource$BufferSource$$Type): void
 "renderImage"(arg0: $Font$$Type, arg1: integer, arg2: integer, arg3: $GuiGraphics$$Type): void
 "getWidth"(arg0: $Font$$Type): integer
 "getHeight"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientTooltipComponent$$Type = ($ClientTooltipComponent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientTooltipComponent$$Original = $ClientTooltipComponent;}
declare module "net.minecraft.client.gui.components.Tooltip" {
import {$NarrationElementOutput$$Type} from "net.minecraft.client.gui.narration.NarrationElementOutput"
import {$FormattedCharSequence} from "net.minecraft.util.FormattedCharSequence"
import {$List} from "java.util.List"
import {$NarrationSupplier$$Interface} from "net.minecraft.client.gui.narration.NarrationSupplier"
import {$Language} from "net.minecraft.locale.Language"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $Tooltip implements $NarrationSupplier$$Interface {
 "cachedTooltip": $List<($FormattedCharSequence)>
readonly "message": $Component
 "splitWithLanguage": $Language

constructor(arg0: $Component$$Type, arg1: $Component$$Type)

public static "create"(arg0: $Component$$Type): $Tooltip
public static "create"(arg0: $Component$$Type, arg1: $Component$$Type): $Tooltip
public "toCharSequence"(arg0: $Minecraft$$Type): $List<($FormattedCharSequence)>
public static "splitTooltip"(arg0: $Minecraft$$Type, arg1: $Component$$Type): $List<($FormattedCharSequence)>
public "updateNarration"(arg0: $NarrationElementOutput$$Type): void
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
declare module "net.minecraft.client.gui.screens.worldselection.WorldOpenFlows" {
import {$LevelStorageSource$LevelStorageAccess$$Type} from "net.minecraft.world.level.storage.LevelStorageSource$LevelStorageAccess"
import {$LevelSettings, $LevelSettings$$Type} from "net.minecraft.world.level.LevelSettings"
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$LayeredRegistryAccess$$Type} from "net.minecraft.core.LayeredRegistryAccess"
import {$Dynamic$$Type} from "com.mojang.serialization.Dynamic"
import {$PackRepository$$Type} from "net.minecraft.server.packs.repository.PackRepository"
import {$WorldDimensions$$Type} from "net.minecraft.world.level.levelgen.WorldDimensions"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$ReloadableServerResources$$Type} from "net.minecraft.server.ReloadableServerResources"
import {$WorldOptions$$Type} from "net.minecraft.world.level.levelgen.WorldOptions"
import {$RegistryLayer$$Type} from "net.minecraft.server.RegistryLayer"
import {$WorldCreationContext} from "net.minecraft.client.gui.screens.worldselection.WorldCreationContext"
import {$Function$$Type} from "java.util.function.Function"
import {$WorldStem} from "net.minecraft.server.WorldStem"
import {$LevelStorageSource$$Type} from "net.minecraft.world.level.storage.LevelStorageSource"
import {$Lifecycle$$Type} from "com.mojang.serialization.Lifecycle"
import {$WorldData$$Type} from "net.minecraft.world.level.storage.WorldData"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$CreateWorldScreen$$Type} from "net.minecraft.client.gui.screens.worldselection.CreateWorldScreen"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $WorldOpenFlows {
constructor(arg0: $Minecraft$$Type, arg1: $LevelStorageSource$$Type)

public "loadWorldStem"(arg0: $Dynamic$$Type<(never)>, arg1: boolean, arg2: $PackRepository$$Type): $WorldStem
public "recreateWorldData"(arg0: $LevelStorageSource$LevelStorageAccess$$Type): $Pair<($LevelSettings), ($WorldCreationContext)>
public "openWorld"(arg0: StringJS, arg1: $Runnable$$Type): void
public "createFreshLevel"(arg0: StringJS, arg1: $LevelSettings$$Type, arg2: $WorldOptions$$Type, arg3: $Function$$Type<($RegistryAccess), ($WorldDimensions$$Type)>, arg4: $Screen$$Type): void
public static "confirmWorldCreation"(arg0: $Minecraft$$Type, arg1: $CreateWorldScreen$$Type, arg2: $Lifecycle$$Type, arg3: $Runnable$$Type, arg4: boolean): void
public "createLevelFromExistingSettings"(arg0: $LevelStorageSource$LevelStorageAccess$$Type, arg1: $ReloadableServerResources$$Type, arg2: $LayeredRegistryAccess$$Type<($RegistryLayer$$Type)>, arg3: $WorldData$$Type): void
public "localvar$cnl000$collective$loadLevel_bl2"(arg0: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldOpenFlows$$Type = ($WorldOpenFlows);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldOpenFlows$$Original = $WorldOpenFlows;}
declare module "net.minecraft.client.gui.screens.worldselection.WorldCreationUiState" {
import {$Optional$$Type} from "java.util.Optional"
import {$List} from "java.util.List"
import {$OptionalLong$$Type} from "java.util.OptionalLong"
import {$Difficulty, $Difficulty$$Type} from "net.minecraft.world.Difficulty"
import {$WorldCreationContext$DimensionsUpdater$$Type} from "net.minecraft.client.gui.screens.worldselection.WorldCreationContext$DimensionsUpdater"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$GameRules, $GameRules$$Type} from "net.minecraft.world.level.GameRules"
import {$WorldCreationUiState$SelectedGameMode, $WorldCreationUiState$SelectedGameMode$$Type} from "net.minecraft.client.gui.screens.worldselection.WorldCreationUiState$SelectedGameMode"
import {$WorldCreationContext, $WorldCreationContext$$Type} from "net.minecraft.client.gui.screens.worldselection.WorldCreationContext"
import {$WorldCreationUiState$WorldTypeEntry, $WorldCreationUiState$WorldTypeEntry$$Type} from "net.minecraft.client.gui.screens.worldselection.WorldCreationUiState$WorldTypeEntry"
import {$WorldPreset$$Type} from "net.minecraft.world.level.levelgen.presets.WorldPreset"
import {$PresetEditor} from "net.minecraft.client.gui.screens.worldselection.PresetEditor"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Path$$Type} from "java.nio.file.Path"

export class $WorldCreationUiState {
constructor(arg0: $Path$$Type, arg1: $WorldCreationContext$$Type, arg2: ($ResourceKey$$Type<($WorldPreset$$Type)>)?, arg3: $OptionalLong$$Type)

public "getTargetFolder"(): StringJS
public "isHardcore"(): boolean
public "getName"(): StringJS
public "setName"(arg0: StringJS): void
public "isDebug"(): boolean
public "setSeed"(arg0: StringJS): void
public "getSeed"(): StringJS
public "setAllowCommands"(arg0: boolean): void
public "setGameMode"(arg0: $WorldCreationUiState$SelectedGameMode$$Type): void
public "setGameRules"(arg0: $GameRules$$Type): void
public "onChanged"(): void
public "setSettings"(arg0: $WorldCreationContext$$Type): void
public "getSettings"(): $WorldCreationContext
public "addListener"(arg0: $Consumer$$Type<($WorldCreationUiState)>): void
public "getGameMode"(): $WorldCreationUiState$SelectedGameMode
public "getDifficulty"(): $Difficulty
public "getGameRules"(): $GameRules
public "setDifficulty"(arg0: $Difficulty$$Type): void
public "isAllowCommands"(): boolean
public "updateDimensions"(arg0: $WorldCreationContext$DimensionsUpdater$$Type): void
public "getWorldType"(): $WorldCreationUiState$WorldTypeEntry
public "getAltPresetList"(): $List<($WorldCreationUiState$WorldTypeEntry)>
public "getPresetEditor"(): $PresetEditor
public "setBonusChest"(arg0: boolean): void
public "setWorldType"(arg0: $WorldCreationUiState$WorldTypeEntry$$Type): void
public "isBonusChest"(): boolean
public "getNormalPresetList"(): $List<($WorldCreationUiState$WorldTypeEntry)>
public "setGenerateStructures"(arg0: boolean): void
public "isGenerateStructures"(): boolean
get "targetFolder"(): StringJS
get "hardcore"(): boolean
get "name"(): StringJS
set "name"(value: StringJS)
get "debug"(): boolean
set "seed"(value: StringJS)
get "seed"(): StringJS
set "allowCommands"(value: boolean)
set "gameMode"(value: $WorldCreationUiState$SelectedGameMode$$Type)
set "gameRules"(value: $GameRules$$Type)
set "settings"(value: $WorldCreationContext$$Type)
get "settings"(): $WorldCreationContext
get "gameMode"(): $WorldCreationUiState$SelectedGameMode
get "difficulty"(): $Difficulty
get "gameRules"(): $GameRules
set "difficulty"(value: $Difficulty$$Type)
get "allowCommands"(): boolean
get "worldType"(): $WorldCreationUiState$WorldTypeEntry
get "altPresetList"(): $List<($WorldCreationUiState$WorldTypeEntry)>
get "presetEditor"(): $PresetEditor
set "bonusChest"(value: boolean)
set "worldType"(value: $WorldCreationUiState$WorldTypeEntry$$Type)
get "bonusChest"(): boolean
get "normalPresetList"(): $List<($WorldCreationUiState$WorldTypeEntry)>
set "generateStructures"(value: boolean)
get "generateStructures"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldCreationUiState$$Type = ($WorldCreationUiState);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldCreationUiState$$Original = $WorldCreationUiState;}
declare module "net.minecraft.client.gui.spectator.SpectatorMenu" {
import {$SpectatorMenuCategory, $SpectatorMenuCategory$$Type} from "net.minecraft.client.gui.spectator.SpectatorMenuCategory"
import {$SpectatorMenuItem} from "net.minecraft.client.gui.spectator.SpectatorMenuItem"
import {$SpectatorPage} from "net.minecraft.client.gui.spectator.categories.SpectatorPage"
import {$List} from "java.util.List"
import {$SpectatorMenuListener$$Type} from "net.minecraft.client.gui.spectator.SpectatorMenuListener"

export class $SpectatorMenu {
static readonly "EMPTY_SLOT": $SpectatorMenuItem

constructor(arg0: $SpectatorMenuListener$$Type)

public "getSelectedItem"(): $SpectatorMenuItem
public "exit"(): void
public "getItem"(arg0: integer): $SpectatorMenuItem
public "getSelectedSlot"(): integer
public "getItems"(): $List<($SpectatorMenuItem)>
public "getSelectedCategory"(): $SpectatorMenuCategory
public "selectSlot"(arg0: integer): void
public "getCurrentPage"(): $SpectatorPage
public "selectCategory"(arg0: $SpectatorMenuCategory$$Type): void
get "selectedItem"(): $SpectatorMenuItem
get "selectedSlot"(): integer
get "items"(): $List<($SpectatorMenuItem)>
get "selectedCategory"(): $SpectatorMenuCategory
get "currentPage"(): $SpectatorPage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpectatorMenu$$Type = ($SpectatorMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpectatorMenu$$Original = $SpectatorMenu;}
declare module "net.minecraft.client.gui.screens.worldselection.WorldCreationContext" {
import {$LayeredRegistryAccess, $LayeredRegistryAccess$$Type} from "net.minecraft.core.LayeredRegistryAccess"
import {$WorldDimensions, $WorldDimensions$$Type} from "net.minecraft.world.level.levelgen.WorldDimensions"
import {$ReloadableServerResources, $ReloadableServerResources$$Type} from "net.minecraft.server.ReloadableServerResources"
import {$WorldOptions, $WorldOptions$$Type} from "net.minecraft.world.level.levelgen.WorldOptions"
import {$WorldCreationContext$DimensionsUpdater$$Type} from "net.minecraft.client.gui.screens.worldselection.WorldCreationContext$DimensionsUpdater"
import {$LevelStem, $LevelStem$$Type} from "net.minecraft.world.level.dimension.LevelStem"
import {$WorldCreationContext$OptionsModifier$$Type} from "net.minecraft.client.gui.screens.worldselection.WorldCreationContext$OptionsModifier"
import {$RegistryAccess$Frozen} from "net.minecraft.core.RegistryAccess$Frozen"
import {$RegistryLayer, $RegistryLayer$$Type} from "net.minecraft.server.RegistryLayer"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$WorldGenSettings$$Type} from "net.minecraft.world.level.levelgen.WorldGenSettings"
import {$WorldDataConfiguration, $WorldDataConfiguration$$Type} from "net.minecraft.world.level.WorldDataConfiguration"
import {$Record} from "java.lang.Record"

export class $WorldCreationContext extends $Record {
constructor(arg0: $WorldGenSettings$$Type, arg1: $LayeredRegistryAccess$$Type<($RegistryLayer$$Type)>, arg2: $ReloadableServerResources$$Type, arg3: $WorldDataConfiguration$$Type)
constructor(options: $WorldOptions$$Type, datapackDimensions: $Registry$$Type<($LevelStem$$Type)>, selectedDimensions: $WorldDimensions$$Type, worldgenRegistries: $LayeredRegistryAccess$$Type<($RegistryLayer$$Type)>, dataPackResources: $ReloadableServerResources$$Type, dataConfiguration: $WorldDataConfiguration$$Type)
constructor(arg0: $WorldOptions$$Type, arg1: $WorldDimensions$$Type, arg2: $LayeredRegistryAccess$$Type<($RegistryLayer$$Type)>, arg3: $ReloadableServerResources$$Type, arg4: $WorldDataConfiguration$$Type)

public "dataPackResources"(): $ReloadableServerResources
public "withDimensions"(arg0: $WorldCreationContext$DimensionsUpdater$$Type): $WorldCreationContext
public "worldgenRegistries"(): $LayeredRegistryAccess<($RegistryLayer)>
public "withSettings"(arg0: $WorldOptions$$Type, arg1: $WorldDimensions$$Type): $WorldCreationContext
public "selectedDimensions"(): $WorldDimensions
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "validate"(): void
public "options"(): $WorldOptions
public "dataConfiguration"(): $WorldDataConfiguration
public "datapackDimensions"(): $Registry<($LevelStem)>
public "withOptions"(arg0: $WorldCreationContext$OptionsModifier$$Type): $WorldCreationContext
public "withDataConfiguration"(arg0: $WorldDataConfiguration$$Type): $WorldCreationContext
public "worldgenLoadContext"(): $RegistryAccess$Frozen
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldCreationContext$$Type = ({"datapackDimensions"?: $Registry$$Type<($LevelStem$$Type)>, "dataPackResources"?: $ReloadableServerResources$$Type, "dataConfiguration"?: $WorldDataConfiguration$$Type, "options"?: $WorldOptions$$Type, "selectedDimensions"?: $WorldDimensions$$Type, "worldgenRegistries"?: $LayeredRegistryAccess$$Type<($RegistryLayer$$Type)>}) | ([datapackDimensions?: $Registry$$Type<($LevelStem$$Type)>, dataPackResources?: $ReloadableServerResources$$Type, dataConfiguration?: $WorldDataConfiguration$$Type, options?: $WorldOptions$$Type, selectedDimensions?: $WorldDimensions$$Type, worldgenRegistries?: $LayeredRegistryAccess$$Type<($RegistryLayer$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldCreationContext$$Original = $WorldCreationContext;}
declare module "net.minecraft.client.gui.GuiSpriteManager" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$GuiSpriteScaling} from "net.minecraft.client.resources.metadata.gui.GuiSpriteScaling"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TextureAtlasHolder} from "net.minecraft.client.resources.TextureAtlasHolder"

export class $GuiSpriteManager extends $TextureAtlasHolder {
constructor(arg0: $TextureManager$$Type)

public "getSprite"(arg0: $ResourceLocation$$Type): $TextureAtlasSprite
public "getSpriteScaling"(arg0: $TextureAtlasSprite$$Type): $GuiSpriteScaling
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiSpriteManager$$Type = ($GuiSpriteManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiSpriteManager$$Original = $GuiSpriteManager;}
declare module "net.minecraft.client.gui.font.FontOption" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $FontOption extends $Enum<($FontOption)> implements $StringRepresentable$$Interface {
static readonly "CODEC": $Codec<($FontOption)>
static readonly "UNIFORM": $FontOption
static readonly "JAPANESE_VARIANTS": $FontOption

public static "values"(): ($FontOption)[]
public static "valueOf"(arg0: StringJS): $FontOption
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FontOption$$Type = (("uniform") | ("jp"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FontOption$$Original = $FontOption;}
declare module "net.minecraft.client.gui.components.SplashRenderer" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Font$$Type} from "net.minecraft.client.gui.Font"

export class $SplashRenderer {
static readonly "CHRISTMAS": $SplashRenderer
static readonly "HALLOWEEN": $SplashRenderer
static readonly "NEW_YEAR": $SplashRenderer

constructor(arg0: StringJS)

public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: $Font$$Type, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SplashRenderer$$Type = ($SplashRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SplashRenderer$$Original = $SplashRenderer;}
declare module "net.minecraft.client.gui.components.SubtitleOverlay" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$WeighedSoundEvents$$Type} from "net.minecraft.client.sounds.WeighedSoundEvents"
import {$SoundInstance$$Type} from "net.minecraft.client.resources.sounds.SoundInstance"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$SoundEventListener$$Interface} from "net.minecraft.client.sounds.SoundEventListener"

export class $SubtitleOverlay implements $SoundEventListener$$Interface {
constructor(arg0: $Minecraft$$Type)

public "render"(arg0: $GuiGraphics$$Type): void
public "onPlaySound"(arg0: $SoundInstance$$Type, arg1: $WeighedSoundEvents$$Type, arg2: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SubtitleOverlay$$Type = ($SubtitleOverlay);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SubtitleOverlay$$Original = $SubtitleOverlay;}
declare module "net.minecraft.client.gui.GuiGraphics" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FormattedText$$Type} from "net.minecraft.network.chat.FormattedText"
import {$Optional$$Type} from "java.util.Optional"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$List$$Type} from "java.util.List"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Font$$Type} from "net.minecraft.client.gui.Font"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipComponent$$Type} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$DrawContextAccessor$$Interface as $DrawContextAccessor$0$$Interface} from "dev.tr7zw.trender.gui.impl.mixin.client.DrawContextAccessor"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$NorthstarGuiGraphics$$Interface} from "com.lightning.northstar.accessor.NorthstarGuiGraphics"
import {$Either$$Type} from "com.mojang.datafixers.util.Either"
import {$ClientTooltipPositioner$$Type} from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipPositioner"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$IGuiGraphicsExtension$$Interface} from "net.neoforged.neoforge.client.extensions.IGuiGraphicsExtension"
import {$TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"
import {$DrawContextAccessor$$Interface} from "dev.emi.emi.mixin.accessor.DrawContextAccessor"
import {$Style$$Type} from "net.minecraft.network.chat.Style"
import {$TilingAnchor$$Type} from "com.lightning.northstar.client.TilingAnchor"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$ClientTooltipComponent$$Type} from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent"
import {$FormattedCharSequence$$Type} from "net.minecraft.util.FormattedCharSequence"
import {$GuiSpriteScaling$NineSlice$$Type} from "net.minecraft.client.resources.metadata.gui.GuiSpriteScaling$NineSlice"
import {$GuiGraphicsAccessor$$Interface} from "com.blackgear.vanillabackport.core.mixin.access.GuiGraphicsAccessor"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export class $GuiGraphics implements $IGuiGraphicsExtension$$Interface, $GuiGraphicsAccessor$$Interface, $DrawContextAccessor$$Interface, $DrawContextAccessor$0$$Interface, $NorthstarGuiGraphics$$Interface {
 "minecraft": $Minecraft
static readonly "MIN_GUI_Z": float
static readonly "MAX_GUI_Z": float

constructor(arg0: $Minecraft$$Type, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$BufferSource$$Type)
constructor(arg0: $Minecraft$$Type, arg1: $MultiBufferSource$BufferSource$$Type)

public "guiWidth"(): integer
public "blit"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $TextureAtlasSprite$$Type): void
public "blit"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
public "blit"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: float, arg4: float, arg5: integer, arg6: integer, arg7: integer, arg8: integer): void
public "blit"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $TextureAtlasSprite$$Type, arg6: float, arg7: float, arg8: float, arg9: float): void
public "blit"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: float, arg5: float, arg6: integer, arg7: integer, arg8: integer, arg9: integer): void
public "blit"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: float, arg6: float, arg7: integer, arg8: integer, arg9: integer, arg10: integer): void
public "guiHeight"(): integer
public "pose"(): $PoseStack
public "hLine"(arg0: $RenderType$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "hLine"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "vLine"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "vLine"(arg0: $RenderType$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "drawString"(arg0: $Font$$Type, arg1: $FormattedCharSequence$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: boolean): integer
public "drawString"(arg0: $Font$$Type, arg1: $FormattedCharSequence$$Type, arg2: integer, arg3: integer, arg4: integer): integer
public "drawString"(arg0: $Font$$Type, arg1: StringJS, arg2: integer, arg3: integer, arg4: integer): integer
public "drawString"(arg0: $Font$$Type, arg1: $Component$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: boolean): integer
public "drawString"(arg0: $Font$$Type, arg1: StringJS, arg2: float, arg3: float, arg4: integer, arg5: boolean): integer
public "drawString"(arg0: $Font$$Type, arg1: StringJS, arg2: integer, arg3: integer, arg4: integer, arg5: boolean): integer
public "drawString"(arg0: $Font$$Type, arg1: $Component$$Type, arg2: integer, arg3: integer, arg4: integer): integer
public "drawString"(arg0: $Font$$Type, arg1: $FormattedCharSequence$$Type, arg2: float, arg3: float, arg4: integer, arg5: boolean): integer
public "innerBlit"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float): void
public "innerBlit"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float, arg12: float, arg13: float): void
public "blitSprite"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "blitSprite"(arg0: $TextureAtlasSprite$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer): void
public "blitSprite"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer): void
public "blitSprite"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer): void
public "blitSprite"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "renderItem"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: integer, arg4: integer): void
public "renderItem"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer): void
public "renderItem"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer, arg3: integer): void
public "renderItem"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "flush"(): void
public "fill"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "fill"(arg0: $RenderType$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
public "fill"(arg0: $RenderType$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "fill"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "setColor"(arg0: float, arg1: float, arg2: float, arg3: float): void
public "handler$dnk000$discord_chat_mod$drawString"(font: $Font$$Type, text: StringJS, x: integer, y: integer, color: integer, dropShadow: boolean, cir: $CallbackInfoReturnable$$Type): void
public "handler$dnk000$discord_chat_mod$drawString"(font: $Font$$Type, text: $FormattedCharSequence$$Type, x: integer, y: integer, color: integer, dropShadow: boolean, cir: $CallbackInfoReturnable$$Type): void
public "handler$ekm000$northstar$onRenderItemDecorations"(font: $Font$$Type, stack: $ItemStack$$Type, x: integer, y: integer, text: StringJS, ci: $CallbackInfo$$Type): void
public "enableScissor"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "bufferSource"(): $MultiBufferSource$BufferSource
/**
 * 
 * @deprecated
 */
public "drawManaged"(arg0: $Runnable$$Type): void
public "fillGradient"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
public "fillGradient"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "fillGradient"(arg0: $RenderType$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer): void
public "disableScissor"(): void
public "fillRenderType"(arg0: $RenderType$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "drawCenteredString"(arg0: $Font$$Type, arg1: $FormattedCharSequence$$Type, arg2: integer, arg3: integer, arg4: integer): void
public "drawCenteredString"(arg0: $Font$$Type, arg1: StringJS, arg2: integer, arg3: integer, arg4: integer): void
public "drawCenteredString"(arg0: $Font$$Type, arg1: $Component$$Type, arg2: integer, arg3: integer, arg4: integer): void
public "blitTiledSprite"(arg0: $TextureAtlasSprite$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer, arg10: integer, arg11: integer): void
public "drawWordWrap"(arg0: $Font$$Type, arg1: $FormattedText$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "renderTooltip"(arg0: $Font$$Type, arg1: $Component$$Type, arg2: integer, arg3: integer): void
public "renderTooltip"(arg0: $Font$$Type, arg1: $List$$Type<($Component$$Type)>, arg2: ($TooltipComponent$$Type)?, arg3: integer, arg4: integer): void
public "renderTooltip"(arg0: $Font$$Type, arg1: $List$$Type<($FormattedCharSequence$$Type)>, arg2: $ClientTooltipPositioner$$Type, arg3: integer, arg4: integer): void
public "renderTooltip"(arg0: $Font$$Type, arg1: $List$$Type<($FormattedCharSequence$$Type)>, arg2: integer, arg3: integer): void
public "renderTooltip"(arg0: $Font$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: integer): void
public "renderTooltip"(arg0: $Font$$Type, arg1: $List$$Type<($Component$$Type)>, arg2: ($TooltipComponent$$Type)?, arg3: $ItemStack$$Type, arg4: integer, arg5: integer): void
public "invokeDrawTooltip"(arg0: $Font$$Type, arg1: $List$$Type, arg2: integer, arg3: integer, arg4: $ClientTooltipPositioner$$Type): void
public "renderOutline"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "renderFakeItem"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer, arg3: integer): void
public "renderFakeItem"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer): void
public "renderComponentTooltipFromElements"(arg0: $Font$$Type, arg1: $List$$Type<($Either$$Type<($FormattedText$$Type), ($TooltipComponent$$Type)>)>, arg2: integer, arg3: integer, arg4: $ItemStack$$Type): void
public "renderTooltipInternal"(arg0: $Font$$Type, arg1: $List$$Type<($ClientTooltipComponent$$Type)>, arg2: integer, arg3: integer, arg4: $ClientTooltipPositioner$$Type): void
public "callBlitNineSlicedSprite"(arg0: $TextureAtlasSprite$$Type, arg1: $GuiSpriteScaling$NineSlice$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
public "blitNineSlicedSprite"(arg0: $TextureAtlasSprite$$Type, arg1: $GuiSpriteScaling$NineSlice$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
public "drawStringWithBackdrop"(arg0: $Font$$Type, arg1: $Component$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer): integer
public "renderComponentHoverEffect"(arg0: $Font$$Type, arg1: $Style$$Type, arg2: integer, arg3: integer): void
public "renderItemDecorations"(arg0: $Font$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: integer, arg4: StringJS): void
public "renderItemDecorations"(arg0: $Font$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: integer): void
public "renderComponentTooltip"(arg0: $Font$$Type, arg1: $List$$Type<($Component$$Type)>, arg2: integer, arg3: integer): void
public "renderComponentTooltip"(arg0: $Font$$Type, arg1: $List$$Type<($FormattedText$$Type)>, arg2: integer, arg3: integer, arg4: $ItemStack$$Type): void
public "containsPointInScissor"(arg0: integer, arg1: integer): boolean
public "libgui$getVertexConsumers"(): $MultiBufferSource$BufferSource
public "blitInscribed"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
public "blitInscribed"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: boolean, arg8: boolean): void
public "blitWithBorder"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer, arg10: integer, arg11: integer, arg12: integer): void
public "blitWithBorder"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer): void
public "getColorFromFormattingCharacter"(arg0: character, arg1: boolean): integer
public "drawScrollingString"(arg0: $Font$$Type, arg1: $Component$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer): integer
public "northstar$blitRepeating"(sprite: $TextureAtlasSprite$$Type, x: integer, y: integer, w: integer, h: integer, anchor: $TilingAnchor$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiGraphics$$Type = ($GuiGraphics);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiGraphics$$Original = $GuiGraphics;}
declare module "net.minecraft.client.gui.components.PlayerTabOverlay" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Objective$$Type} from "net.minecraft.world.scores.Objective"
import {$PlayerInfo$$Type} from "net.minecraft.client.multiplayer.PlayerInfo"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Scoreboard$$Type} from "net.minecraft.world.scores.Scoreboard"
import {$Gui$$Type} from "net.minecraft.client.gui.Gui"

export class $PlayerTabOverlay {
static readonly "MAX_ROWS_PER_COL": integer
 "visible": boolean

constructor(arg0: $Minecraft$$Type, arg1: $Gui$$Type)

public "setFooter"(arg0: $Component$$Type): void
public "reset"(): void
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: $Scoreboard$$Type, arg3: $Objective$$Type): void
public "setHeader"(arg0: $Component$$Type): void
public "setVisible"(arg0: boolean): void
public "redirect$ece000$watut$renderPingIcon"(arg0: $PlayerTabOverlay$$Type, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: $PlayerInfo$$Type): void
public "getNameForDisplay"(arg0: $PlayerInfo$$Type): $Component
public "renderPingIcon"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: $PlayerInfo$$Type): void
set "footer"(value: $Component$$Type)
set "header"(value: $Component$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerTabOverlay$$Type = ($PlayerTabOverlay);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerTabOverlay$$Original = $PlayerTabOverlay;}
declare module "net.minecraft.client.gui.LayeredDraw$Layer" {
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$DeltaTracker, $DeltaTracker$$Type} from "net.minecraft.client.DeltaTracker"

export interface $LayeredDraw$Layer$$Interface {

(arg0: $GuiGraphics, arg1: $DeltaTracker): void
}

export class $LayeredDraw$Layer implements $LayeredDraw$Layer$$Interface {
 "render"(arg0: $GuiGraphics$$Type, arg1: $DeltaTracker$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LayeredDraw$Layer$$Type = ((arg0: $GuiGraphics, arg1: $DeltaTracker) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LayeredDraw$Layer$$Original = $LayeredDraw$Layer;}
declare module "net.minecraft.client.gui.components.toasts.TutorialToast" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Toast$Visibility} from "net.minecraft.client.gui.components.toasts.Toast$Visibility"
import {$ToastComponent$$Type} from "net.minecraft.client.gui.components.toasts.ToastComponent"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Toast$$Interface} from "net.minecraft.client.gui.components.toasts.Toast"
import {$TutorialToast$Icons$$Type} from "net.minecraft.client.gui.components.toasts.TutorialToast$Icons"

export class $TutorialToast implements $Toast$$Interface {
static readonly "PROGRESS_BAR_HEIGHT": integer
static readonly "PROGRESS_BAR_X": integer
static readonly "PROGRESS_BAR_WIDTH": integer
static readonly "PROGRESS_BAR_Y": integer

constructor(arg0: $TutorialToast$Icons$$Type, arg1: $Component$$Type, arg2: $Component$$Type, arg3: boolean)

public "render"(arg0: $GuiGraphics$$Type, arg1: $ToastComponent$$Type, arg2: long): $Toast$Visibility
public "updateProgress"(arg0: float): void
public "hide"(): void
public "slotCount"(): integer
public "width"(): integer
public "getToken"(): any
public "height"(): integer
get "token"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TutorialToast$$Type = ($TutorialToast);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TutorialToast$$Original = $TutorialToast;}
declare module "net.minecraft.client.gui.components.ChatComponent$DelayedMessageDeletion" {
import {$MessageSignature$$Type} from "net.minecraft.network.chat.MessageSignature"
import {$Record} from "java.lang.Record"

export class $ChatComponent$DelayedMessageDeletion extends $Record {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChatComponent$DelayedMessageDeletion$$Type = ({"signature"?: $MessageSignature$$Type, "deletableAfter"?: integer}) | ([signature?: $MessageSignature$$Type, deletableAfter?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChatComponent$DelayedMessageDeletion$$Original = $ChatComponent$DelayedMessageDeletion;}
declare module "net.minecraft.client.gui.screens.worldselection.CreateWorldScreen" {
import {$LevelSettings$$Type} from "net.minecraft.world.level.LevelSettings"
import {$Screen$DeferredTooltipRendering} from "net.minecraft.client.gui.screens.Screen$DeferredTooltipRendering"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$List} from "java.util.List"
import {$Font} from "net.minecraft.client.gui.Font"
import {$Component} from "net.minecraft.network.chat.Component"
import {$ScreenExtensions} from "net.fabricmc.fabric.impl.client.screen.ScreenExtensions"
import {$WorldCreationUiState} from "net.minecraft.client.gui.screens.worldselection.WorldCreationUiState"
import {$GuiEventListener, $GuiEventListener$$Type} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$WorldCreationContext$$Type} from "net.minecraft.client.gui.screens.worldselection.WorldCreationContext"
import {$NarratableEntry} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Renderable} from "net.minecraft.client.gui.components.Renderable"
import {$Path, $Path$$Type} from "java.nio.file.Path"

export class $CreateWorldScreen extends $Screen {
static readonly "MENU_BACKGROUND": $ResourceLocation
 "minecraft": $Minecraft
static readonly "INWORLD_FOOTER_SEPARATOR": $ResourceLocation
 "deferredTooltipRendering": $Screen$DeferredTooltipRendering
 "title": $Component
static readonly "FOOTER_SEPARATOR": $ResourceLocation
static readonly "TAB_HEADER_BACKGROUND": $ResourceLocation
readonly "renderables": $List<($Renderable)>
static readonly "INWORLD_HEADER_SEPARATOR": $ResourceLocation
readonly "narratables": $List<($NarratableEntry)>
 "width": integer
static readonly "HEADER_SEPARATOR": $ResourceLocation
 "height": integer
 "font": $Font

public static "createFromExisting"(arg0: $Minecraft$$Type, arg1: $Screen$$Type, arg2: $LevelSettings$$Type, arg3: $WorldCreationContext$$Type, arg4: $Path$$Type): $CreateWorldScreen
public "getUiState"(): $WorldCreationUiState
public "onClose"(): void
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "repositionElements"(): void
public "addRenderableWidget"<T extends $GuiEventListener>(arg0: T): T
public static "createTempDataPackDirFromExistingWorld"(arg0: $Path$$Type, arg1: $Minecraft$$Type): $Path
public static "openFresh"(arg0: $Minecraft$$Type, arg1: $Screen$$Type): void
public "popScreen"(): void
public static "getExtensions"(arg0: $Screen$$Type): $ScreenExtensions
get "uiState"(): $WorldCreationUiState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreateWorldScreen$$Type = ($CreateWorldScreen);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreateWorldScreen$$Original = $CreateWorldScreen;}
declare module "net.minecraft.client.gui.spectator.SpectatorMenuItem" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Component} from "net.minecraft.network.chat.Component"
import {$SpectatorMenu$$Type} from "net.minecraft.client.gui.spectator.SpectatorMenu"

export interface $SpectatorMenuItem$$Interface {
get "name"(): $Component
get "enabled"(): boolean
}

export class $SpectatorMenuItem implements $SpectatorMenuItem$$Interface {
 "getName"(): $Component
 "isEnabled"(): boolean
 "renderIcon"(arg0: $GuiGraphics$$Type, arg1: float, arg2: integer): void
 "selectItem"(arg0: $SpectatorMenu$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpectatorMenuItem$$Type = ($SpectatorMenuItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpectatorMenuItem$$Original = $SpectatorMenuItem;}
declare module "net.minecraft.client.gui.navigation.ScreenPosition" {
import {$Record} from "java.lang.Record"
import {$ScreenAxis$$Type} from "net.minecraft.client.gui.navigation.ScreenAxis"
import {$ScreenDirection$$Type} from "net.minecraft.client.gui.navigation.ScreenDirection"

export class $ScreenPosition extends $Record {
constructor(arg0: integer, arg1: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"(arg0: $ScreenAxis$$Type, arg1: integer, arg2: integer): $ScreenPosition
public "x"(): integer
public "y"(): integer
public "step"(arg0: $ScreenDirection$$Type): $ScreenPosition
public "getCoordinate"(arg0: $ScreenAxis$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenPosition$$Type = ({"x"?: integer, "y"?: integer}) | ([x?: integer, y?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenPosition$$Original = $ScreenPosition;}
declare module "net.minecraft.client.gui.navigation.FocusNavigationEvent$TabNavigation" {
import {$FocusNavigationEvent$$Interface} from "net.minecraft.client.gui.navigation.FocusNavigationEvent"
import {$ScreenDirection} from "net.minecraft.client.gui.navigation.ScreenDirection"
import {$Record} from "java.lang.Record"

export class $FocusNavigationEvent$TabNavigation extends $Record implements $FocusNavigationEvent$$Interface {
constructor(arg0: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getVerticalDirectionForInitialFocus"(): $ScreenDirection
public "forward"(): boolean
get "verticalDirectionForInitialFocus"(): $ScreenDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FocusNavigationEvent$TabNavigation$$Type = ({"forward"?: boolean}) | ([forward?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FocusNavigationEvent$TabNavigation$$Original = $FocusNavigationEvent$TabNavigation;}
declare module "net.minecraft.client.gui.components.events.AbstractContainerEventHandler" {
import {$GuiEventListener, $GuiEventListener$$Type} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$FocusNavigationEvent$$Type} from "net.minecraft.client.gui.navigation.FocusNavigationEvent"
import {$ScreenRectangle} from "net.minecraft.client.gui.navigation.ScreenRectangle"
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$ComponentPath} from "net.minecraft.client.gui.ComponentPath"
import {$ContainerEventHandler$$Interface} from "net.minecraft.client.gui.components.events.ContainerEventHandler"

export class $AbstractContainerEventHandler implements $ContainerEventHandler$$Interface {
constructor()

public "getFocused"(): $GuiEventListener
public "setFocused"(arg0: $GuiEventListener$$Type): void
public "isDragging"(): boolean
public "setDragging"(arg0: boolean): void
public "children"(): $List<($GuiEventListener)>
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "setFocused"(arg0: boolean): void
public "getChildAt"(arg0: double, arg1: double): $Optional<($GuiEventListener)>
public "charTyped"(arg0: character, arg1: integer): boolean
public "isFocused"(): boolean
public "nextFocusPath"(arg0: $FocusNavigationEvent$$Type): $ComponentPath
public "mouseDragged"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseScrolled"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
public "getCurrentFocusPath"(): $ComponentPath
public "mouseMoved"(arg0: double, arg1: double): void
public "getRectangle"(): $ScreenRectangle
public "isMouseOver"(arg0: double, arg1: double): boolean
public "getTabOrderGroup"(): integer
get "focused"(): $GuiEventListener
set "focused"(value: $GuiEventListener$$Type)
get "dragging"(): boolean
set "dragging"(value: boolean)
set "focused"(value: boolean)
get "focused"(): boolean
get "currentFocusPath"(): $ComponentPath
get "rectangle"(): $ScreenRectangle
get "tabOrderGroup"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractContainerEventHandler$$Type = ($AbstractContainerEventHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractContainerEventHandler$$Original = $AbstractContainerEventHandler;}
declare module "net.minecraft.client.gui.navigation.ScreenRectangle" {
import {$ScreenPosition, $ScreenPosition$$Type} from "net.minecraft.client.gui.navigation.ScreenPosition"
import {$Record} from "java.lang.Record"
import {$ScreenAxis$$Type} from "net.minecraft.client.gui.navigation.ScreenAxis"
import {$ScreenDirection$$Type} from "net.minecraft.client.gui.navigation.ScreenDirection"

export class $ScreenRectangle extends $Record {
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)
constructor(arg0: $ScreenPosition$$Type, arg1: integer, arg2: integer)

public "bottom"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getLength"(arg0: $ScreenAxis$$Type): integer
public "position"(): $ScreenPosition
public static "of"(arg0: $ScreenAxis$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $ScreenRectangle
public static "empty"(): $ScreenRectangle
public "top"(): integer
public "step"(arg0: $ScreenDirection$$Type): $ScreenRectangle
public "left"(): integer
public "right"(): integer
public "width"(): integer
public "overlaps"(arg0: $ScreenRectangle$$Type): boolean
public "height"(): integer
public "intersection"(arg0: $ScreenRectangle$$Type): $ScreenRectangle
public "containsPoint"(arg0: integer, arg1: integer): boolean
public "getBorder"(arg0: $ScreenDirection$$Type): $ScreenRectangle
public "getCenterInAxis"(arg0: $ScreenAxis$$Type): integer
public "overlapsInAxis"(arg0: $ScreenRectangle$$Type, arg1: $ScreenAxis$$Type): boolean
public "getBoundInDirection"(arg0: $ScreenDirection$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenRectangle$$Type = ({"height"?: integer, "position"?: $ScreenPosition$$Type, "width"?: integer}) | ([height?: integer, position?: $ScreenPosition$$Type, width?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenRectangle$$Original = $ScreenRectangle;}
declare module "net.minecraft.client.gui.navigation.FocusNavigationEvent" {
import {$ScreenDirection, $ScreenDirection$$Type} from "net.minecraft.client.gui.navigation.ScreenDirection"

export interface $FocusNavigationEvent$$Interface {

(): $ScreenDirection$$Type
get "verticalDirectionForInitialFocus"(): $ScreenDirection
}

export class $FocusNavigationEvent implements $FocusNavigationEvent$$Interface {
 "getVerticalDirectionForInitialFocus"(): $ScreenDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FocusNavigationEvent$$Type = (() => $ScreenDirection$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FocusNavigationEvent$$Original = $FocusNavigationEvent;}
declare module "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipPositioner" {
import {$Vector2ic, $Vector2ic$$Type} from "org.joml.Vector2ic"

export interface $ClientTooltipPositioner$$Interface {

(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): $Vector2ic$$Type
}

export class $ClientTooltipPositioner implements $ClientTooltipPositioner$$Interface {
 "positionTooltip"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): $Vector2ic
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientTooltipPositioner$$Type = ((arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer) => $Vector2ic$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientTooltipPositioner$$Original = $ClientTooltipPositioner;}
declare module "net.minecraft.client.gui.screens.inventory.AbstractContainerScreen" {
import {$Screen$DeferredTooltipRendering} from "net.minecraft.client.gui.screens.Screen$DeferredTooltipRendering"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$HandledScreenAccessor$$Interface as $HandledScreenAccessor$0$$Interface} from "net.dawson.adorablehamsterpets.mixin.client.accessor.HandledScreenAccessor"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$List} from "java.util.List"
import {$Font} from "net.minecraft.client.gui.Font"
import {$MenuAccess$$Interface} from "net.minecraft.client.gui.screens.inventory.MenuAccess"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ScreenExtensions} from "net.fabricmc.fabric.impl.client.screen.ScreenExtensions"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$NarratableEntry} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$Minecraft} from "net.minecraft.client.Minecraft"
import {$ClickType$$Type} from "net.minecraft.world.inventory.ClickType"
import {$Renderable} from "net.minecraft.client.gui.components.Renderable"
import {$HandledScreenAccessor$$Interface} from "dev.emi.emi.mixin.accessor.HandledScreenAccessor"

export class $AbstractContainerScreen<T extends $AbstractContainerMenu> extends $Screen implements $MenuAccess$$Interface<(T)>, $HandledScreenAccessor$$Interface, $HandledScreenAccessor$0$$Interface {
 "leftPos": integer
static readonly "MENU_BACKGROUND": $ResourceLocation
 "minecraft": $Minecraft
static readonly "INWORLD_FOOTER_SEPARATOR": $ResourceLocation
 "clickedSlot": $Slot
 "title": $Component
 "snapbackStartY": integer
readonly "renderables": $List<($Renderable)>
 "hoveredSlot": $Slot
static readonly "INWORLD_HEADER_SEPARATOR": $ResourceLocation
 "isSplittingStack": boolean
 "snapbackItem": $ItemStack
 "snapbackStartX": integer
static readonly "INVENTORY_LOCATION": $ResourceLocation
 "snapbackTime": long
static readonly "HEADER_SEPARATOR": $ResourceLocation
 "height": integer
 "imageWidth": integer
 "snapbackEnd": $Slot
 "draggingItem": $ItemStack
static readonly "SLOT_ITEM_BLIT_OFFSET": integer
 "quickCraftingRemainder": integer
 "deferredTooltipRendering": $Screen$DeferredTooltipRendering
static readonly "FOOTER_SEPARATOR": $ResourceLocation
 "imageHeight": integer
 "quickCraftingType": integer
readonly "narratables": $List<($NarratableEntry)>
 "width": integer
 "topPos": integer
 "font": $Font

constructor(arg0: T, arg1: $Inventory$$Type, arg2: $Component$$Type)

public "getX"(): integer
public "removed"(): void
public "onClose"(): void
public "tick"(): void
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "isHovering"(arg0: $Slot$$Type, arg1: double, arg2: double): boolean
public "isHovering"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: double, arg5: double): boolean
public "renderSlot"(arg0: $GuiGraphics$$Type, arg1: $Slot$$Type): void
public "findSlot"(arg0: double, arg1: double): $Slot
public "getMenu"(): T
public "getXSize"(): integer
public "getYSize"(): integer
public "getY"(): integer
public "recalculateQuickCraftRemaining"(): void
public "handler$dod000$dragonlib$render"(guiGraphics: $GuiGraphics$$Type, mouseX: integer, mouseY: integer, partialTick: float, ci: $CallbackInfo$$Type): void
public "isPauseScreen"(): boolean
public "getGuiLeft"(): integer
public "getGuiTop"(): integer
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "renderBackground"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "mouseDragged"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
public "getBackgroundHeight"(): integer
public static "renderSlotHighlight"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public static "renderSlotHighlight"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer): void
public "slotClicked"(arg0: $Slot$$Type, arg1: integer, arg2: integer, arg3: $ClickType$$Type): void
public "clearDraggingState"(): void
public "renderFloatingItem"(arg0: $GuiGraphics$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: integer, arg4: StringJS): void
public "getSlotUnderMouse"(): $Slot
public "getBackgroundWidth"(): integer
public "getSlotColor"(arg0: integer): integer
public "getFocusedSlot"(): $Slot
public "invokeGetSlotAt"(arg0: double, arg1: double): $Slot
public static "getExtensions"(arg0: $Screen$$Type): $ScreenExtensions
get "x"(): integer
get "menu"(): T
get "XSize"(): integer
get "YSize"(): integer
get "y"(): integer
get "pauseScreen"(): boolean
get "guiLeft"(): integer
get "guiTop"(): integer
get "backgroundHeight"(): integer
get "slotUnderMouse"(): $Slot
get "backgroundWidth"(): integer
get "focusedSlot"(): $Slot
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractContainerScreen$$Type<T> = ($AbstractContainerScreen<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractContainerScreen$$Original<T> = $AbstractContainerScreen<(T)>;}
declare module "net.minecraft.client.gui.Font$DisplayMode" {
import {$Enum} from "java.lang.Enum"

export class $Font$DisplayMode extends $Enum<($Font$DisplayMode)> {
static readonly "POLYGON_OFFSET": $Font$DisplayMode
static readonly "SEE_THROUGH": $Font$DisplayMode
static readonly "NORMAL": $Font$DisplayMode

public static "values"(): ($Font$DisplayMode)[]
public static "valueOf"(arg0: StringJS): $Font$DisplayMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Font$DisplayMode$$Type = (("normal") | ("see_through") | ("polygon_offset"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Font$DisplayMode$$Original = $Font$DisplayMode;}
declare module "net.minecraft.client.gui.ComponentPath" {
import {$GuiEventListener, $GuiEventListener$$Type} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$ContainerEventHandler$$Type} from "net.minecraft.client.gui.components.events.ContainerEventHandler"

export interface $ComponentPath$$Interface {
}

export class $ComponentPath implements $ComponentPath$$Interface {
 "component"(): $GuiEventListener
static "path"(arg0: $ContainerEventHandler$$Type, arg1: $ComponentPath$$Type): $ComponentPath
static "path"(arg0: $GuiEventListener$$Type, ...arg1: ($ContainerEventHandler$$Type)[]): $ComponentPath
 "applyFocus"(arg0: boolean): void
static "leaf"(arg0: $GuiEventListener$$Type): $ComponentPath
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComponentPath$$Type = ($ComponentPath);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ComponentPath$$Original = $ComponentPath;}
declare module "net.minecraft.client.gui.narration.NarratableEntry$NarrationPriority" {
import {$Enum} from "java.lang.Enum"

export class $NarratableEntry$NarrationPriority extends $Enum<($NarratableEntry$NarrationPriority)> {
static readonly "HOVERED": $NarratableEntry$NarrationPriority
static readonly "NONE": $NarratableEntry$NarrationPriority
static readonly "FOCUSED": $NarratableEntry$NarrationPriority

public "isTerminal"(): boolean
public static "values"(): ($NarratableEntry$NarrationPriority)[]
public static "valueOf"(arg0: StringJS): $NarratableEntry$NarrationPriority
get "terminal"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NarratableEntry$NarrationPriority$$Type = (("none") | ("hovered") | ("focused"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NarratableEntry$NarrationPriority$$Original = $NarratableEntry$NarrationPriority;}
declare module "net.minecraft.client.gui.components.BossHealthOverlay" {
import {$ClientboundBossEventPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBossEventPacket"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"

export class $BossHealthOverlay {
constructor(arg0: $Minecraft$$Type)

public "reset"(): void
public "update"(arg0: $ClientboundBossEventPacket$$Type): void
public "render"(arg0: $GuiGraphics$$Type): void
public "shouldPlayMusic"(): boolean
public "shouldCreateWorldFog"(): boolean
public "shouldDarkenScreen"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BossHealthOverlay$$Type = ($BossHealthOverlay);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BossHealthOverlay$$Original = $BossHealthOverlay;}
declare module "net.minecraft.client.gui.screens.Screen$NarratableSearchResult" {
import {$NarratableEntry, $NarratableEntry$$Type} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$NarratableEntry$NarrationPriority, $NarratableEntry$NarrationPriority$$Type} from "net.minecraft.client.gui.narration.NarratableEntry$NarrationPriority"

export class $Screen$NarratableSearchResult {
readonly "entry": $NarratableEntry
readonly "index": integer
readonly "priority": $NarratableEntry$NarrationPriority

constructor(arg0: $NarratableEntry$$Type, arg1: integer, arg2: $NarratableEntry$NarrationPriority$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Screen$NarratableSearchResult$$Type = ($Screen$NarratableSearchResult);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Screen$NarratableSearchResult$$Original = $Screen$NarratableSearchResult;}
declare module "net.minecraft.client.gui.components.toasts.ToastComponent" {
import {$ToastComponent$ToastInstance} from "net.minecraft.client.gui.components.toasts.ToastComponent$ToastInstance"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$List} from "java.util.List"
import {$Class$$Type} from "java.lang.Class"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Toast, $Toast$$Type} from "net.minecraft.client.gui.components.toasts.Toast"

export class $ToastComponent {
readonly "visible": $List<($ToastComponent$ToastInstance<(never)>)>

constructor(arg0: $Minecraft$$Type)

public "clear"(): void
public "render"(arg0: $GuiGraphics$$Type): void
public "getToast"<T extends $Toast>(arg0: $Class$$Type<(T)>, arg1: any): T
public "getNotificationDisplayTimeMultiplier"(): double
public "freeSlots"(): integer
public "addToast"(arg0: $Toast$$Type): void
public "getMinecraft"(): $Minecraft
get "notificationDisplayTimeMultiplier"(): double
get "minecraft"(): $Minecraft
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToastComponent$$Type = ($ToastComponent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ToastComponent$$Original = $ToastComponent;}
declare module "net.minecraft.client.gui.font.FontSet" {
import {$TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$FontOption$$Type} from "net.minecraft.client.gui.font.FontOption"
import {$BakedGlyph} from "net.minecraft.client.gui.font.glyphs.BakedGlyph"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$List$$Type} from "java.util.List"
import {$Set$$Type} from "java.util.Set"
import {$GlyphProvider$Conditional$$Type} from "com.mojang.blaze3d.font.GlyphProvider$Conditional"
import {$GlyphInfo, $GlyphInfo$$Type} from "com.mojang.blaze3d.font.GlyphInfo"

export class $FontSet implements $AutoCloseable$$Interface {
constructor(arg0: $TextureManager$$Type, arg1: $ResourceLocation$$Type)

public "name"(): $ResourceLocation
public "close"(): void
public "reload"(arg0: $Set$$Type<($FontOption$$Type)>): void
public "reload"(arg0: $List$$Type<($GlyphProvider$Conditional$$Type)>, arg1: $Set$$Type<($FontOption$$Type)>): void
public "getRandomGlyph"(arg0: $GlyphInfo$$Type): $BakedGlyph
public "getGlyphInfo"(arg0: integer, arg1: boolean): $GlyphInfo
public "getGlyph"(arg0: integer): $BakedGlyph
public "whiteGlyph"(): $BakedGlyph
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FontSet$$Type = ($FontSet);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FontSet$$Original = $FontSet;}
declare module "net.minecraft.client.gui.components.toasts.TutorialToast$Icons" {
import {$Enum} from "java.lang.Enum"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"

export class $TutorialToast$Icons extends $Enum<($TutorialToast$Icons)> {
static readonly "MOUSE": $TutorialToast$Icons
static readonly "WOODEN_PLANKS": $TutorialToast$Icons
static readonly "MOVEMENT_KEYS": $TutorialToast$Icons
static readonly "RIGHT_CLICK": $TutorialToast$Icons
static readonly "TREE": $TutorialToast$Icons
static readonly "SOCIAL_INTERACTIONS": $TutorialToast$Icons
static readonly "RECIPE_BOOK": $TutorialToast$Icons

public static "values"(): ($TutorialToast$Icons)[]
public static "valueOf"(arg0: StringJS): $TutorialToast$Icons
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TutorialToast$Icons$$Type = (("movement_keys") | ("mouse") | ("tree") | ("recipe_book") | ("wooden_planks") | ("social_interactions") | ("right_click"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TutorialToast$Icons$$Original = $TutorialToast$Icons;}
declare module "net.minecraft.client.gui.components.Renderable" {
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"

export interface $Renderable$$Interface {

(arg0: $GuiGraphics, arg1: integer, arg2: integer, arg3: float): void
}

export class $Renderable implements $Renderable$$Interface {
 "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Renderable$$Type = ((arg0: $GuiGraphics, arg1: integer, arg2: integer, arg3: float) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Renderable$$Original = $Renderable;}
declare module "net.minecraft.client.gui.spectator.SpectatorMenuCategory" {
import {$SpectatorMenuItem} from "net.minecraft.client.gui.spectator.SpectatorMenuItem"
import {$List} from "java.util.List"
import {$Component} from "net.minecraft.network.chat.Component"

export interface $SpectatorMenuCategory$$Interface {
get "items"(): $List<($SpectatorMenuItem)>
get "prompt"(): $Component
}

export class $SpectatorMenuCategory implements $SpectatorMenuCategory$$Interface {
 "getItems"(): $List<($SpectatorMenuItem)>
 "getPrompt"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpectatorMenuCategory$$Type = ($SpectatorMenuCategory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpectatorMenuCategory$$Original = $SpectatorMenuCategory;}
declare module "net.minecraft.client.gui.components.TabOrderedElement" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TabOrderedElement$$Interface {
get "tabOrderGroup"(): integer
}

export class $TabOrderedElement implements $TabOrderedElement$$Interface {
 "getTabOrderGroup"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TabOrderedElement$$Type = ($TabOrderedElement);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TabOrderedElement$$Original = $TabOrderedElement;}
declare module "net.minecraft.client.gui.components.DebugScreenOverlay" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$LocalSampleLogger} from "net.minecraft.util.debugchart.LocalSampleLogger"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$RemoteDebugSampleType$$Type} from "net.minecraft.util.debugchart.RemoteDebugSampleType"

export class $DebugScreenOverlay {
constructor(arg0: $Minecraft$$Type)

public "reset"(): void
public "render"(arg0: $GuiGraphics$$Type): void
public "clearChunkCache"(): void
public "toggleProfilerChart"(): void
public "toggleNetworkCharts"(): void
public "toggleFpsCharts"(): void
public "toggleOverlay"(): void
public "showNetworkCharts"(): boolean
public "logRemoteSample"(arg0: (long)[], arg1: $RemoteDebugSampleType$$Type): void
public "getBandwidthLogger"(): $LocalSampleLogger
public "showFpsCharts"(): boolean
public "getPingLogger"(): $LocalSampleLogger
public "showProfilerChart"(): boolean
public "logFrameDuration"(arg0: long): void
public "showDebugScreen"(): boolean
public "getTickTimeLogger"(): $LocalSampleLogger
get "bandwidthLogger"(): $LocalSampleLogger
get "pingLogger"(): $LocalSampleLogger
get "tickTimeLogger"(): $LocalSampleLogger
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DebugScreenOverlay$$Type = ($DebugScreenOverlay);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DebugScreenOverlay$$Original = $DebugScreenOverlay;}
declare module "net.minecraft.client.gui.screens.inventory.EffectRenderingInventoryScreen" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Screen$DeferredTooltipRendering} from "net.minecraft.client.gui.screens.Screen$DeferredTooltipRendering"
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$List} from "java.util.List"
import {$Font} from "net.minecraft.client.gui.Font"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ScreenExtensions} from "net.fabricmc.fabric.impl.client.screen.ScreenExtensions"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$AbstractContainerScreen} from "net.minecraft.client.gui.screens.inventory.AbstractContainerScreen"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$NarratableEntry} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$Minecraft} from "net.minecraft.client.Minecraft"
import {$Renderable} from "net.minecraft.client.gui.components.Renderable"

export class $EffectRenderingInventoryScreen<T extends $AbstractContainerMenu> extends $AbstractContainerScreen<(T)> {
 "leftPos": integer
static readonly "MENU_BACKGROUND": $ResourceLocation
 "minecraft": $Minecraft
static readonly "INWORLD_FOOTER_SEPARATOR": $ResourceLocation
 "clickedSlot": $Slot
 "title": $Component
 "snapbackStartY": integer
readonly "renderables": $List<($Renderable)>
 "hoveredSlot": $Slot
static readonly "INWORLD_HEADER_SEPARATOR": $ResourceLocation
 "isSplittingStack": boolean
 "snapbackItem": $ItemStack
 "snapbackStartX": integer
static readonly "INVENTORY_LOCATION": $ResourceLocation
 "snapbackTime": long
static readonly "HEADER_SEPARATOR": $ResourceLocation
 "height": integer
 "imageWidth": integer
 "snapbackEnd": $Slot
 "draggingItem": $ItemStack
static readonly "SLOT_ITEM_BLIT_OFFSET": integer
 "quickCraftingRemainder": integer
 "deferredTooltipRendering": $Screen$DeferredTooltipRendering
static readonly "FOOTER_SEPARATOR": $ResourceLocation
 "imageHeight": integer
 "quickCraftingType": integer
readonly "narratables": $List<($NarratableEntry)>
 "width": integer
 "topPos": integer
 "font": $Font

constructor(arg0: T, arg1: $Inventory$$Type, arg2: $Component$$Type)

public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "canSeeEffects"(): boolean
public static "getExtensions"(arg0: $Screen$$Type): $ScreenExtensions
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EffectRenderingInventoryScreen$$Type<T> = ($EffectRenderingInventoryScreen<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EffectRenderingInventoryScreen$$Original<T> = $EffectRenderingInventoryScreen<(T)>;}
declare module "net.minecraft.client.gui.layouts.LayoutElement" {
import {$ScreenRectangle} from "net.minecraft.client.gui.navigation.ScreenRectangle"
import {$AbstractWidget$$Type} from "net.minecraft.client.gui.components.AbstractWidget"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $LayoutElement$$Interface {
get "x"(): integer
get "y"(): integer
get "width"(): integer
get "height"(): integer
set "y"(value: integer)
set "x"(value: integer)
get "rectangle"(): $ScreenRectangle
}

export class $LayoutElement implements $LayoutElement$$Interface {
 "getX"(): integer
 "getY"(): integer
 "getWidth"(): integer
 "getHeight"(): integer
 "setY"(arg0: integer): void
 "setX"(arg0: integer): void
 "getRectangle"(): $ScreenRectangle
 "setPosition"(arg0: integer, arg1: integer): void
 "visitWidgets"(arg0: $Consumer$$Type<($AbstractWidget)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LayoutElement$$Type = ($LayoutElement);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LayoutElement$$Original = $LayoutElement;}
