declare module "net.minecraft.client.Options" {
import {$HumanoidArm} from "net.minecraft.world.entity.HumanoidArm"
import {$List} from "java.util.List"
import {$NarratorStatus} from "net.minecraft.client.NarratorStatus"
import {$TutorialSteps} from "net.minecraft.client.tutorial.TutorialSteps"
import {$PrioritizeChunkUpdates} from "net.minecraft.client.PrioritizeChunkUpdates"
import {$ParticleStatus} from "net.minecraft.client.ParticleStatus"
import {$PlayerModelPart$$Type} from "net.minecraft.world.entity.player.PlayerModelPart"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$IMixinOptions$$Interface} from "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinOptions"
import {$SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$Set} from "java.util.Set"
import {$Gson} from "com.google.gson.Gson"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$AttackIndicatorStatus} from "net.minecraft.client.AttackIndicatorStatus"
import {$CloudStatus} from "net.minecraft.client.CloudStatus"
import {$Logger} from "org.slf4j.Logger"
import {$File, $File$$Type} from "java.io.File"
import {$PackRepository$$Type} from "net.minecraft.server.packs.repository.PackRepository"
import {$CameraType, $CameraType$$Type} from "net.minecraft.client.CameraType"
import {$KeyMapping, $KeyMapping$$Type} from "net.minecraft.client.KeyMapping"
import {$ClientInformation} from "net.minecraft.server.level.ClientInformation"
import {$Options$FieldAccess$$Type} from "net.minecraft.client.Options$FieldAccess"
import {$InputConstants$Key$$Type} from "com.mojang.blaze3d.platform.InputConstants$Key"
import {$OptionInstance} from "net.minecraft.client.OptionInstance"
import {$ChatVisiblity} from "net.minecraft.world.entity.player.ChatVisiblity"
import {$GraphicsStatus} from "net.minecraft.client.GraphicsStatus"

export class $Options implements $IMixinOptions$$Interface {
 "tutorialStep": $TutorialSteps
static readonly "RENDER_DISTANCE_REALLY_FAR": integer
static readonly "DEFAULT_SOUND_DEVICE": StringJS
readonly "keyChat": $KeyMapping
 "resourcePacks": $List<(StringJS)>
readonly "keyInventory": $KeyMapping
readonly "keyCommand": $KeyMapping
readonly "keySwapOffhand": $KeyMapping
readonly "keyHotbarSlots": ($KeyMapping)[]
readonly "keySpectatorOutlines": $KeyMapping
static readonly "RENDER_DISTANCE_NORMAL": integer
readonly "keySprint": $KeyMapping
readonly "keyAdvancements": $KeyMapping
static readonly "RENDER_DISTANCE_EXTREME": integer
readonly "keySaveHotbarActivator": $KeyMapping
 "advancedItemTooltips": boolean
 "fullscreenVideoModeString": StringJS
readonly "keyFullscreen": $KeyMapping
 "incompatibleResourcePacks": $List<(StringJS)>
 "languageCode": StringJS
static readonly "RENDER_DISTANCE_SHORT": integer
readonly "keyDrop": $KeyMapping
 "overrideHeight": integer
static readonly "LOGGER": $Logger
 "keyMappings": ($KeyMapping)[]
 "minecraft": $Minecraft
readonly "keyAttack": $KeyMapping
 "skipMultiplayerWarning": boolean
static readonly "RENDER_DISTANCE_FAR": integer
readonly "keyUp": $KeyMapping
readonly "keyJump": $KeyMapping
readonly "keyLoadHotbarActivator": $KeyMapping
 "onboardAccessibility": boolean
readonly "keyShift": $KeyMapping
 "smoothCamera": boolean
readonly "keyScreenshot": $KeyMapping
static readonly "AUTO_GUI_SCALE": integer
readonly "keyTogglePerspective": $KeyMapping
readonly "keySocialInteractions": $KeyMapping
 "pauseOnLostFocus": boolean
readonly "keyRight": $KeyMapping
 "lastMpIp": StringJS
 "syncWrites": boolean
readonly "keySmoothCamera": $KeyMapping
 "overrideWidth": integer
readonly "keyLeft": $KeyMapping
static readonly "GSON": $Gson
 "hideServerAddress": boolean
 "glDebugVerbosity": integer
static readonly "RENDER_DISTANCE_TINY": integer
readonly "keyPlayerList": $KeyMapping
static readonly "UNLIMITED_FRAMERATE_CUTOFF": integer
 "joinedFirstServer": boolean
 "hideBundleTutorial": boolean
readonly "keyUse": $KeyMapping
readonly "keyPickItem": $KeyMapping
readonly "keyDown": $KeyMapping
 "hideGui": boolean

constructor(arg0: $Minecraft$$Type, arg1: $File$$Type)

public "load"(arg0: boolean): void
public "load"(): void
public "save"(): void
public "getFile"(): $File
public static "isTrue"(arg0: StringJS): boolean
public "gamma"(): $OptionInstance<(double)>
public "darkMojangStudiosBackground"(): $OptionInstance<(boolean)>
public "getBackgroundColor"(arg0: integer): integer
public "getBackgroundColor"(arg0: float): integer
public static "isFalse"(arg0: StringJS): boolean
public "fov"(): $OptionInstance<(integer)>
public "autoJump"(): $OptionInstance<(boolean)>
public "notificationDisplayTime"(): $OptionInstance<(double)>
public "setServerRenderDistance"(arg0: integer): void
public "darknessEffectScale"(): $OptionInstance<(double)>
public "mouseWheelSensitivity"(): $OptionInstance<(double)>
public "entityDistanceScaling"(): $OptionInstance<(double)>
public "discreteMouseScroll"(): $OptionInstance<(boolean)>
public "realmsNotifications"(): $OptionInstance<(boolean)>
public "getBackgroundOpacity"(arg0: float): float
public "updateResourcePacks"(arg0: $PackRepository$$Type): void
public "getSoundSourceVolume"(arg0: $SoundSource$$Type): float
public static "genericValueOrOffLabel"(arg0: $Component$$Type, arg1: integer): $Component
public "japaneseGlyphVariants"(): $OptionInstance<(boolean)>
public "backgroundForChatOnly"(): $OptionInstance<(boolean)>
public "chatHeightUnfocused"(): $OptionInstance<(double)>
public "showAutosaveIndicator"(): $OptionInstance<(boolean)>
public "getModelPartsFancyMenu"(): $Set
public "buildPlayerInformation"(): $ClientInformation
public "chatOpacity"(): $OptionInstance<(double)>
public "setKey"(arg0: $KeyMapping$$Type, arg1: $InputConstants$Key$$Type): void
public "guiScale"(): $OptionInstance<(integer)>
public "particles"(): $OptionInstance<($ParticleStatus)>
public "chatWidth"(): $OptionInstance<(double)>
public "chatScale"(): $OptionInstance<(double)>
public "operatorItemsTab"(): $OptionInstance<(boolean)>
public "touchscreen"(): $OptionInstance<(boolean)>
public "hideSplashTexts"(): $OptionInstance<(boolean)>
public "prioritizeChunkUpdates"(): $OptionInstance<($PrioritizeChunkUpdates)>
public "loadSelectedResourcePacks"(arg0: $PackRepository$$Type): void
public "fullscreen"(): $OptionInstance<(boolean)>
public "chatDelay"(): $OptionInstance<(double)>
public "narrator"(): $OptionInstance<($NarratorStatus)>
public "getMenuBackgroundBlurriness"(): integer
public "getCloudsType"(): $CloudStatus
public "textBackgroundOpacity"(): $OptionInstance<(double)>
public "enableVsync"(): $OptionInstance<(boolean)>
public "mipmapLevels"(): $OptionInstance<(integer)>
public "rawMouseInput"(): $OptionInstance<(boolean)>
public "framerateLimit"(): $OptionInstance<(integer)>
public "telemetryOptInExtra"(): $OptionInstance<(boolean)>
public "dumpOptionsForReport"(): StringJS
public "getEffectiveRenderDistance"(): integer
public "getCameraType"(): $CameraType
public "setCameraType"(arg0: $CameraType$$Type): void
public "chatLinksPrompt"(): $OptionInstance<(boolean)>
public "chatLinks"(): $OptionInstance<(boolean)>
public "bobView"(): $OptionInstance<(boolean)>
public "menuBackgroundBlurriness"(): $OptionInstance<(integer)>
public "glintStrength"(): $OptionInstance<(double)>
public "fovEffectScale"(): $OptionInstance<(double)>
public "screenEffectScale"(): $OptionInstance<(double)>
public "damageTiltStrength"(): $OptionInstance<(double)>
public "getSoundSourceOptionInstance"(arg0: $SoundSource$$Type): $OptionInstance<(double)>
public "invokeProcessOptionsFancyMenu"(arg0: $Options$FieldAccess$$Type): void
public "onboardingAccessibilityFinished"(): void
public "hideLightningFlash"(): $OptionInstance<(boolean)>
public "simulationDistance"(): $OptionInstance<(integer)>
public "renderDistance"(): $OptionInstance<(integer)>
public "reducedDebugInfo"(): $OptionInstance<(boolean)>
public "toggleCrouch"(): $OptionInstance<(boolean)>
public "toggleSprint"(): $OptionInstance<(boolean)>
public "hideMatchedNames"(): $OptionInstance<(boolean)>
public "directionalAudio"(): $OptionInstance<(boolean)>
public "onlyShowSecureChat"(): $OptionInstance<(boolean)>
public "chatHeightFocused"(): $OptionInstance<(double)>
public "useNativeTransport"(): boolean
public "attackIndicator"(): $OptionInstance<($AttackIndicatorStatus)>
public "panoramaSpeed"(): $OptionInstance<(double)>
public "narratorHotkey"(): $OptionInstance<(boolean)>
public "allowServerListing"(): $OptionInstance<(boolean)>
public "chatLineSpacing"(): $OptionInstance<(double)>
public "highContrast"(): $OptionInstance<(boolean)>
public "sensitivity"(): $OptionInstance<(double)>
public "autoSuggestions"(): $OptionInstance<(boolean)>
public "invertYMouse"(): $OptionInstance<(boolean)>
public "showSubtitles"(): $OptionInstance<(boolean)>
public "entityShadows"(): $OptionInstance<(boolean)>
public "soundDevice"(): $OptionInstance<(StringJS)>
public static "genericValueLabel"(arg0: $Component$$Type, arg1: integer): $Component
public static "genericValueLabel"(arg0: $Component$$Type, arg1: $Component$$Type): $Component
public "toggleModelPart"(arg0: $PlayerModelPart$$Type, arg1: boolean): void
public "isModelPartEnabled"(arg0: $PlayerModelPart$$Type): boolean
public "broadcastOptions"(): void
public "forceUnicodeFont"(): $OptionInstance<(boolean)>
public "chatColors"(): $OptionInstance<(boolean)>
public "mainHand"(): $OptionInstance<($HumanoidArm)>
public "glintSpeed"(): $OptionInstance<(double)>
public "chatVisibility"(): $OptionInstance<($ChatVisiblity)>
public "ambientOcclusion"(): $OptionInstance<(boolean)>
public "graphicsMode"(): $OptionInstance<($GraphicsStatus)>
public "cloudStatus"(): $OptionInstance<($CloudStatus)>
public "biomeBlendRadius"(): $OptionInstance<(integer)>
get "file"(): $File
set "serverRenderDistance"(value: integer)
get "modelPartsFancyMenu"(): $Set
get "cloudsType"(): $CloudStatus
get "effectiveRenderDistance"(): integer
get "cameraType"(): $CameraType
set "cameraType"(value: $CameraType$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Options$$Type = ($Options);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Options$$Original = $Options;}
declare module "net.minecraft.client.OptionInstance$TooltipSupplier" {
import {$Tooltip, $Tooltip$$Type} from "net.minecraft.client.gui.components.Tooltip"

export interface $OptionInstance$TooltipSupplier$$Interface<T> {

(arg0: T): $Tooltip$$Type
}

export class $OptionInstance$TooltipSupplier<T> implements $OptionInstance$TooltipSupplier$$Interface {
 "apply"(arg0: T): $Tooltip
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionInstance$TooltipSupplier$$Type<T> = ((arg0: T) => $Tooltip$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OptionInstance$TooltipSupplier$$Original<T> = $OptionInstance$TooltipSupplier<(T)>;}
declare module "net.minecraft.client.CommandHistory" {
import {$Collection} from "java.util.Collection"
import {$Path$$Type} from "java.nio.file.Path"

export class $CommandHistory {
constructor(arg0: $Path$$Type)

public "addCommand"(arg0: StringJS): void
public "history"(): $Collection<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandHistory$$Type = ($CommandHistory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CommandHistory$$Original = $CommandHistory;}
declare module "net.minecraft.client.OptionInstance$Enum" {
import {$Optional} from "java.util.Optional"
import {$CycleButton$ValueListSupplier} from "net.minecraft.client.gui.components.CycleButton$ValueListSupplier"
import {$List, $List$$Type} from "java.util.List"
import {$AbstractWidget} from "net.minecraft.client.gui.components.AbstractWidget"
import {$Options$$Type} from "net.minecraft.client.Options"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$OptionInstance$TooltipSupplier$$Type} from "net.minecraft.client.OptionInstance$TooltipSupplier"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Function} from "java.util.function.Function"
import {$OptionInstance$CycleableValueSet$$Interface} from "net.minecraft.client.OptionInstance$CycleableValueSet"
import {$OptionInstance} from "net.minecraft.client.OptionInstance"
import {$Record} from "java.lang.Record"

export class $OptionInstance$Enum<T> extends $Record implements $OptionInstance$CycleableValueSet$$Interface<(T)> {
constructor(arg0: $List$$Type<(T)>, arg1: $Codec$$Type<(T)>)

public "validateValue"(arg0: T): $Optional<(T)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "values"(): $List<(T)>
public "hashCode"(): integer
public "codec"(): $Codec<(T)>
public "valueListSupplier"(): $CycleButton$ValueListSupplier<(T)>
public "createButton"(arg0: $OptionInstance$TooltipSupplier$$Type<(T)>, arg1: $Options$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: $Consumer$$Type<(T)>): $Function<($OptionInstance<(T)>), ($AbstractWidget)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionInstance$Enum$$Type<T> = ({"values"?: $List$$Type<(T)>, "codec"?: $Codec$$Type<(T)>}) | ([values?: $List$$Type<(T)>, codec?: $Codec$$Type<(T)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OptionInstance$Enum$$Original<T> = $OptionInstance$Enum<(T)>;}
declare module "net.minecraft.client.MouseHandler" {
import {$MouseHandlerAccessor$$Interface as $MouseHandlerAccessor$1$$Interface} from "com.simibubi.create.foundation.mixin.accessor.MouseHandlerAccessor"
import {$MouseHandlerAccessor$$Interface as $MouseHandlerAccessor$0$$Interface} from "it.hurts.shatterbyte.clavis.common.mixin.MouseHandlerAccessor"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$MouseHandlerAccessor$$Interface as $MouseHandlerAccessor$2$$Interface} from "team.creative.creativecore.mixin.MouseHandlerAccessor"
import {$IMixinMouseHandler$$Interface} from "de.keksuccino.konkrete.mixin.mixins.client.IMixinMouseHandler"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$LocalDoubleRef$$Type} from "com.llamalad7.mixinextras.sugar.ref.LocalDoubleRef"
import {$MouseHandlerAccessor$$Interface} from "net.blay09.mods.balm.mixin.MouseHandlerAccessor"

export class $MouseHandler implements $MouseHandlerAccessor$$Interface, $IMixinMouseHandler$$Interface, $MouseHandlerAccessor$0$$Interface, $MouseHandlerAccessor$2$$Interface, $MouseHandlerAccessor$1$$Interface {
constructor(arg0: $Minecraft$$Type)

public "setup"(arg0: long): void
public "xpos"(): double
public "ypos"(): double
public "grabMouse"(): void
public "setYpos"(arg0: double): void
public "getXpos"(): double
public "setXpos"(arg0: double): void
public "getYpos"(): double
public "getLastHandleMovementTime"(): double
public "getActiveButtonKonkrete"(): integer
public "handleAccumulatedMovement"(): void
public "isRightPressed"(): boolean
public "releaseMouse"(): void
public "getMouseX"(): double
public "getMouseY"(): double
public "isLeftPressed"(): boolean
public "isMiddlePressed"(): boolean
public "getXVelocity"(): double
public "getYVelocity"(): double
public "invokeOnMove"(arg0: long, arg1: double, arg2: double): void
public "create$setXPos"(arg0: double): void
public "create$setYPos"(arg0: double): void
public "isMouseGrabbed"(): boolean
public "handler$eea000$ok_zoomer$applyZoomChanges"(arg0: double, arg1: $CallbackInfo$$Type, arg2: $LocalDoubleRef$$Type, arg3: $LocalDoubleRef$$Type, arg4: double): void
public "cursorEntered"(): void
public "setIgnoreFirstMove"(): void
set "up"(value: long)
get "lastHandleMovementTime"(): double
get "activeButtonKonkrete"(): integer
get "rightPressed"(): boolean
get "mouseX"(): double
get "mouseY"(): double
get "leftPressed"(): boolean
get "middlePressed"(): boolean
get "XVelocity"(): double
get "YVelocity"(): double
get "mouseGrabbed"(): boolean
get "ignoreFirstMove"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseHandler$$Type = ($MouseHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MouseHandler$$Original = $MouseHandler;}
declare module "net.minecraft.client.CameraType" {
import {$Enum} from "java.lang.Enum"

export class $CameraType extends $Enum<($CameraType)> {
static readonly "THIRD_PERSON_BACK": $CameraType
static readonly "THIRD_PERSON_FRONT": $CameraType
static readonly "FIRST_PERSON": $CameraType

public static "values"(): ($CameraType)[]
public static "valueOf"(arg0: StringJS): $CameraType
public "isMirrored"(): boolean
public "cycle"(): $CameraType
public "isFirstPerson"(): boolean
get "mirrored"(): boolean
get "firstPerson"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CameraType$$Type = (("first_person") | ("third_person_back") | ("third_person_front"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CameraType$$Original = $CameraType;}
declare module "net.minecraft.client.ClientRecipeBook" {
import {$Iterable$$Type} from "java.lang.Iterable"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$List} from "java.util.List"
import {$RecipeCollection} from "net.minecraft.client.gui.screens.recipebook.RecipeCollection"
import {$RecipeBook} from "net.minecraft.stats.RecipeBook"
import {$Set} from "java.util.Set"
import {$RecipeBookCategories$$Type} from "net.minecraft.client.RecipeBookCategories"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $ClientRecipeBook extends $RecipeBook {
readonly "highlight": $Set<($ResourceLocation)>
readonly "known": $Set<($ResourceLocation)>

constructor()

public "setupCollections"(arg0: $Iterable$$Type<($RecipeHolder$$Type<(never)>)>, arg1: $RegistryAccess$$Type): void
public "getCollections"(): $List<($RecipeCollection)>
public "getCollection"(arg0: $RecipeBookCategories$$Type): $List<($RecipeCollection)>
get "collections"(): $List<($RecipeCollection)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientRecipeBook$$Type = ($ClientRecipeBook);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientRecipeBook$$Original = $ClientRecipeBook;}
declare module "net.minecraft.client.NarratorStatus" {
import {$Enum} from "java.lang.Enum"
import {$Component} from "net.minecraft.network.chat.Component"

export class $NarratorStatus extends $Enum<($NarratorStatus)> {
static readonly "SYSTEM": $NarratorStatus
static readonly "ALL": $NarratorStatus
static readonly "CHAT": $NarratorStatus
static readonly "OFF": $NarratorStatus

public "getName"(): $Component
public static "values"(): ($NarratorStatus)[]
public static "valueOf"(arg0: StringJS): $NarratorStatus
public "getId"(): integer
public static "byId"(arg0: integer): $NarratorStatus
public "shouldNarrateSystem"(): boolean
public "shouldNarrateChat"(): boolean
get "name"(): $Component
get "id"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NarratorStatus$$Type = (("off") | ("all") | ("chat") | ("system"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NarratorStatus$$Original = $NarratorStatus;}
declare module "net.minecraft.client.ParticleStatus" {
import {$Enum} from "java.lang.Enum"
import {$Component} from "net.minecraft.network.chat.Component"
import {$OptionEnum$$Interface} from "net.minecraft.util.OptionEnum"

export class $ParticleStatus extends $Enum<($ParticleStatus)> implements $OptionEnum$$Interface {
static readonly "ALL": $ParticleStatus
static readonly "DECREASED": $ParticleStatus
static readonly "MINIMAL": $ParticleStatus

public static "values"(): ($ParticleStatus)[]
public static "valueOf"(arg0: StringJS): $ParticleStatus
public "getKey"(): StringJS
public "getId"(): integer
public static "byId"(arg0: integer): $ParticleStatus
public "getCaption"(): $Component
get "key"(): StringJS
get "id"(): integer
get "caption"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleStatus$$Type = (("all") | ("decreased") | ("minimal"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ParticleStatus$$Original = $ParticleStatus;}
declare module "net.minecraft.client.StringSplitter" {
import {$StringSplitter$WidthProvider, $StringSplitter$WidthProvider$$Type} from "net.minecraft.client.StringSplitter$WidthProvider"
import {$FormattedCharSequence$$Type} from "net.minecraft.util.FormattedCharSequence"
import {$StringSplitterAccessor$$Interface} from "team.creative.creativecore.mixin.StringSplitterAccessor"
import {$FormattedText, $FormattedText$$Type} from "net.minecraft.network.chat.FormattedText"
import {$Style, $Style$$Type} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$StringSplitter$LinePosConsumer$$Type} from "net.minecraft.client.StringSplitter$LinePosConsumer"

export class $StringSplitter implements $StringSplitterAccessor$$Interface {
readonly "widthProvider": $StringSplitter$WidthProvider

constructor(arg0: $StringSplitter$WidthProvider$$Type)

public "stringWidth"(arg0: $FormattedCharSequence$$Type): float
public "stringWidth"(arg0: $FormattedText$$Type): float
public "stringWidth"(arg0: StringJS): float
public "splitLines"(arg0: $FormattedText$$Type, arg1: integer, arg2: $Style$$Type): $List<($FormattedText)>
public "splitLines"(arg0: StringJS, arg1: integer, arg2: $Style$$Type): $List<($FormattedText)>
public "splitLines"(arg0: StringJS, arg1: integer, arg2: $Style$$Type, arg3: boolean, arg4: $StringSplitter$LinePosConsumer$$Type): void
public "splitLines"(arg0: $FormattedText$$Type, arg1: integer, arg2: $Style$$Type, arg3: $FormattedText$$Type): $List<($FormattedText)>
public "splitLines"(arg0: $FormattedText$$Type, arg1: integer, arg2: $Style$$Type, arg3: $BiConsumer$$Type<($FormattedText), (boolean)>): void
public "componentStyleAtWidth"(arg0: $FormattedText$$Type, arg1: integer): $Style
public "componentStyleAtWidth"(arg0: $FormattedCharSequence$$Type, arg1: integer): $Style
public static "getWordPosition"(arg0: StringJS, arg1: integer, arg2: integer, arg3: boolean): integer
public "plainTailByWidth"(arg0: StringJS, arg1: integer, arg2: $Style$$Type): StringJS
public "headByWidth"(arg0: $FormattedText$$Type, arg1: integer, arg2: $Style$$Type): $FormattedText
public "plainHeadByWidth"(arg0: StringJS, arg1: integer, arg2: $Style$$Type): StringJS
public "plainIndexAtWidth"(arg0: StringJS, arg1: integer, arg2: $Style$$Type): integer
public "findLineBreak"(arg0: StringJS, arg1: integer, arg2: $Style$$Type): integer
public "getWidthProvider"(): $StringSplitter$WidthProvider
public "formattedIndexByWidth"(arg0: StringJS, arg1: integer, arg2: $Style$$Type): integer
public "formattedHeadByWidth"(arg0: StringJS, arg1: integer, arg2: $Style$$Type): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringSplitter$$Type = ($StringSplitter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StringSplitter$$Original = $StringSplitter;}
declare module "net.minecraft.client.Options$OptionAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Options$OptionAccess$$Interface {
}

export class $Options$OptionAccess implements $Options$OptionAccess$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Options$OptionAccess$$Type = ($Options$OptionAccess);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Options$OptionAccess$$Original = $Options$OptionAccess;}
declare module "net.minecraft.client.RecipeBookCategories" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Enum} from "java.lang.Enum"
import {$RecipeBookType$$Type} from "net.minecraft.world.inventory.RecipeBookType"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeBookCategoriesAccessor$$Interface} from "org.sinytra.connector.mod.mixin.recipebook.RecipeBookCategoriesAccessor"
import {$ExtensionInfo} from "net.neoforged.fml.common.asm.enumextension.ExtensionInfo"
import {$IExtensibleEnum$$Interface} from "net.neoforged.fml.common.asm.enumextension.IExtensibleEnum"

export class $RecipeBookCategories extends $Enum<($RecipeBookCategories)> implements $IExtensibleEnum$$Interface, $RecipeBookCategoriesAccessor$$Interface {
static readonly "REFURBISHED_FURNITURE_MICROWAVE_ITEMS": $RecipeBookCategories
static readonly "CRAFTING_REDSTONE": $RecipeBookCategories
static readonly "REFURBISHED_FURNITURE_MICROWAVE_SEARCH": $RecipeBookCategories
static readonly "REFURBISHED_FURNITURE_OVEN_MISC": $RecipeBookCategories
static readonly "FARMERSDELIGHT_COOKING_SEARCH": $RecipeBookCategories
static readonly "CRAFTING_SEARCH": $RecipeBookCategories
static readonly "BLAST_FURNACE_MISC": $RecipeBookCategories
static readonly "SMOKER_FOOD": $RecipeBookCategories
static readonly "CRAFTING_BUILDING_BLOCKS": $RecipeBookCategories
static readonly "FARMERSDELIGHT_COOKING_DRINKS": $RecipeBookCategories
static readonly "SMOKER_CATEGORIES": $List<($RecipeBookCategories)>
static readonly "SMOKER_SEARCH": $RecipeBookCategories
static readonly "STONECUTTER": $RecipeBookCategories
static readonly "REFURBISHED_FURNITURE_OVEN_SEARCH": $RecipeBookCategories
static readonly "REFURBISHED_FURNITURE_OVEN_FOOD": $RecipeBookCategories
static readonly "REFURBISHED_FURNITURE_MICROWAVE_BLOCKS": $RecipeBookCategories
static readonly "REFURBISHED_FURNITURE_OVEN_BLOCKS": $RecipeBookCategories
static "AGGREGATE_CATEGORIES": $Map<($RecipeBookCategories), ($List<($RecipeBookCategories)>)>
static readonly "CRAFTING_EQUIPMENT": $RecipeBookCategories
static readonly "BLAST_FURNACE_BLOCKS": $RecipeBookCategories
static readonly "BLAST_FURNACE_CATEGORIES": $List<($RecipeBookCategories)>
static readonly "FARMERSDELIGHT_COOKING_MEALS": $RecipeBookCategories
static readonly "REFURBISHED_FURNITURE_FREEZER_BLOCKS": $RecipeBookCategories
static readonly "BREWINANDCHEWIN_FERMENTING_SEARCH": $RecipeBookCategories
static readonly "REFURBISHED_FURNITURE_FREEZER_MISC": $RecipeBookCategories
static readonly "CRAFTING_MISC": $RecipeBookCategories
static readonly "CAMPFIRE": $RecipeBookCategories
static readonly "FURNACE_CATEGORIES": $List<($RecipeBookCategories)>
static readonly "CRAFTING_CATEGORIES": $List<($RecipeBookCategories)>
static readonly "SMITHING": $RecipeBookCategories
static readonly "REFURBISHED_FURNITURE_FREEZER_SEARCH": $RecipeBookCategories
static readonly "FURNACE_FOOD": $RecipeBookCategories
static readonly "FURNACE_BLOCKS": $RecipeBookCategories
static readonly "REFURBISHED_FURNITURE_FREEZER_FOOD": $RecipeBookCategories
static readonly "FARMERSDELIGHT_COOKING_MISC": $RecipeBookCategories
static readonly "REFURBISHED_FURNITURE_MICROWAVE_MISC": $RecipeBookCategories
static readonly "FURNACE_SEARCH": $RecipeBookCategories
static readonly "REFURBISHED_FURNITURE_MICROWAVE_FOOD": $RecipeBookCategories
static readonly "BLAST_FURNACE_SEARCH": $RecipeBookCategories
static readonly "UNKNOWN": $RecipeBookCategories
static readonly "BREWINANDCHEWIN_FERMENTING_MEALS": $RecipeBookCategories
static readonly "REFURBISHED_FURNITURE_FREEZER_ITEMS": $RecipeBookCategories
static readonly "FURNACE_MISC": $RecipeBookCategories
static readonly "BREWINANDCHEWIN_FERMENTING_DRINKS": $RecipeBookCategories
static readonly "REFURBISHED_FURNITURE_OVEN_ITEMS": $RecipeBookCategories

public static "values"(): ($RecipeBookCategories)[]
public static "valueOf"(arg0: StringJS): $RecipeBookCategories
public static "getExtensionInfo"(): $ExtensionInfo
public static "getCategories"(arg0: $RecipeBookType$$Type): $List<($RecipeBookCategories)>
public "getIconItems"(): $List<($ItemStack)>
public static "setAGGREGATE_CATEGORIES$connector_$md$1ae6d3$0"(arg0: $Map$$Type): void
public static "setAGGREGATE_CATEGORIES"(arg0: $Map$$Type<($RecipeBookCategories$$Type), ($List$$Type<($RecipeBookCategories$$Type)>)>): void
get "extensionInfo"(): $ExtensionInfo
get "iconItems"(): $List<($ItemStack)>
set "AGGREGATE_CATEGORIES$connector_$md$1ae6d3$0"(value: $Map$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeBookCategories$$Type = (("crafting_search") | ("crafting_building_blocks") | ("crafting_redstone") | ("crafting_equipment") | ("crafting_misc") | ("furnace_search") | ("furnace_food") | ("furnace_blocks") | ("furnace_misc") | ("blast_furnace_search") | ("blast_furnace_blocks") | ("blast_furnace_misc") | ("smoker_search") | ("smoker_food") | ("stonecutter") | ("smithing") | ("campfire") | ("unknown") | ("brewinandchewin_fermenting_drinks") | ("brewinandchewin_fermenting_meals") | ("brewinandchewin_fermenting_search") | ("farmersdelight_cooking_drinks") | ("farmersdelight_cooking_meals") | ("farmersdelight_cooking_misc") | ("farmersdelight_cooking_search") | ("refurbished_furniture_freezer_blocks") | ("refurbished_furniture_freezer_food") | ("refurbished_furniture_freezer_items") | ("refurbished_furniture_freezer_misc") | ("refurbished_furniture_freezer_search") | ("refurbished_furniture_microwave_blocks") | ("refurbished_furniture_microwave_food") | ("refurbished_furniture_microwave_items") | ("refurbished_furniture_microwave_misc") | ("refurbished_furniture_microwave_search") | ("refurbished_furniture_oven_blocks") | ("refurbished_furniture_oven_food") | ("refurbished_furniture_oven_items") | ("refurbished_furniture_oven_misc") | ("refurbished_furniture_oven_search"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeBookCategories$$Original = $RecipeBookCategories;}
declare module "net.minecraft.client.StringSplitter$WidthProvider" {
import {$Style, $Style$$Type} from "net.minecraft.network.chat.Style"

export interface $StringSplitter$WidthProvider$$Interface {

(arg0: integer, arg1: $Style): float
}

export class $StringSplitter$WidthProvider implements $StringSplitter$WidthProvider$$Interface {
 "getWidth"(arg0: integer, arg1: $Style$$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringSplitter$WidthProvider$$Type = ((arg0: integer, arg1: $Style) => float);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StringSplitter$WidthProvider$$Original = $StringSplitter$WidthProvider;}
declare module "net.minecraft.client.GuiMessageTag$Icon" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Enum} from "java.lang.Enum"

export class $GuiMessageTag$Icon extends $Enum<($GuiMessageTag$Icon)> {
static readonly "CHAT_MODIFIED": $GuiMessageTag$Icon
readonly "sprite": $ResourceLocation
readonly "width": integer
readonly "height": integer

public static "values"(): ($GuiMessageTag$Icon)[]
public static "valueOf"(arg0: StringJS): $GuiMessageTag$Icon
public "draw"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiMessageTag$Icon$$Type = (("chat_modified"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiMessageTag$Icon$$Original = $GuiMessageTag$Icon;}
declare module "net.minecraft.client.Options$FieldAccess" {
import {$Options$OptionAccess$$Interface} from "net.minecraft.client.Options$OptionAccess"
import {$Function$$Type} from "java.util.function.Function"

export interface $Options$FieldAccess$$Interface extends $Options$OptionAccess$$Interface {
}

export class $Options$FieldAccess implements $Options$FieldAccess$$Interface {
 "process"<T>(arg0: StringJS, arg1: T, arg2: $Function$$Type<(StringJS), (T)>, arg3: $Function$$Type<(T), (StringJS)>): T
 "process"(arg0: StringJS, arg1: float): float
 "process"(arg0: StringJS, arg1: StringJS): StringJS
 "process"(arg0: StringJS, arg1: boolean): boolean
 "process"(arg0: StringJS, arg1: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Options$FieldAccess$$Type = ($Options$FieldAccess);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Options$FieldAccess$$Original = $Options$FieldAccess;}
declare module "net.minecraft.client.Minecraft" {
import {$MultiPlayerGameMode} from "net.minecraft.client.multiplayer.MultiPlayerGameMode"
import {$RenderBuffers} from "net.minecraft.client.renderer.RenderBuffers"
import {$LevelStorageSource$LevelStorageAccess$$Type} from "net.minecraft.world.level.storage.LevelStorageSource$LevelStorageAccess"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$PlayerSocialManager} from "net.minecraft.client.gui.screens.social.PlayerSocialManager"
import {$MobEffectTextureManager} from "net.minecraft.client.resources.MobEffectTextureManager"
import {$IXaeroMinimapMinecraftClient$$Interface} from "xaero.common.core.IXaeroMinimapMinecraftClient"
import {$Minecraft$ChatStatus} from "net.minecraft.client.Minecraft$ChatStatus"
import {$DeltaTracker$Timer} from "net.minecraft.client.DeltaTracker$Timer"
import {$ResourceLoadStateTracker} from "net.minecraft.client.ResourceLoadStateTracker"
import {$ServerData} from "net.minecraft.client.multiplayer.ServerData"
import {$LocalPlayer} from "net.minecraft.client.player.LocalPlayer"
import {$Proxy} from "java.net.Proxy"
import {$MinecraftClientKJS$$Interface} from "dev.latvian.mods.kubejs.core.MinecraftClientKJS"
import {$InputType, $InputType$$Type} from "net.minecraft.client.InputType"
import {$MusicManager} from "net.minecraft.client.sounds.MusicManager"
import {$PaintingTextureManager} from "net.minecraft.client.resources.PaintingTextureManager"
import {$GameConfig$$Type} from "net.minecraft.client.main.GameConfig"
import {$ChatListener} from "net.minecraft.client.multiplayer.chat.ChatListener"
import {$ScheduledEvents$ScheduledEvent} from "dev.latvian.mods.kubejs.util.ScheduledEvents$ScheduledEvent"
import {$MouseHandler} from "net.minecraft.client.MouseHandler"
import {$ProfileKeyPairManager} from "net.minecraft.client.multiplayer.ProfileKeyPairManager"
import {$GameRenderer} from "net.minecraft.client.renderer.GameRenderer"
import {$WindowEventHandler$$Interface} from "com.mojang.blaze3d.platform.WindowEventHandler"
import {$CrashReport, $CrashReport$$Type} from "net.minecraft.CrashReport"
import {$Thread} from "java.lang.Thread"
import {$SkinManager} from "net.minecraft.client.resources.SkinManager"
import {$MinecraftSessionService} from "com.mojang.authlib.minecraft.MinecraftSessionService"
import {$Options, $Options$$Type} from "net.minecraft.client.Options"
import {$Tutorial} from "net.minecraft.client.tutorial.Tutorial"
import {$TextureManager} from "net.minecraft.client.renderer.texture.TextureManager"
import {$MinecraftClientAccessor$$Interface as $MinecraftClientAccessor$0$$Interface} from "net.fabricmc.fabric.mixin.networking.client.accessor.MinecraftClientAccessor"
import {$Window} from "com.mojang.blaze3d.platform.Window"
import {$Music} from "net.minecraft.sounds.Music"
import {$ResourceManager} from "net.minecraft.server.packs.resources.ResourceManager"
import {$EntityModelSet} from "net.minecraft.client.model.geom.EntityModelSet"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$DirectoryValidator} from "net.minecraft.world.level.validation.DirectoryValidator"
import {$ReportingContext} from "net.minecraft.client.multiplayer.chat.report.ReportingContext"
import {$Font} from "net.minecraft.client.gui.Font"
import {$IMinecraftExtension$$Interface} from "net.neoforged.neoforge.client.extensions.IMinecraftExtension"
import {$Minecraft$GameLoadCookie$$Type} from "net.minecraft.client.Minecraft$GameLoadCookie"
import {$DebugScreenOverlay} from "net.minecraft.client.gui.components.DebugScreenOverlay"
import {$WorldStem$$Type} from "net.minecraft.server.WorldStem"
import {$SoundManager} from "net.minecraft.client.sounds.SoundManager"
import {$Function} from "java.util.function.Function"
import {$KeyboardHandler} from "net.minecraft.client.KeyboardHandler"
import {$ReentrantBlockableEventLoop} from "net.minecraft.util.thread.ReentrantBlockableEventLoop"
import {$RenderTarget} from "com.mojang.blaze3d.pipeline.RenderTarget"
import {$User} from "net.minecraft.client.User"
import {$SplashManager} from "net.minecraft.client.resources.SplashManager"
import {$LevelRenderer} from "net.minecraft.client.renderer.LevelRenderer"
import {$GpuWarnlistManager} from "net.minecraft.client.renderer.GpuWarnlistManager"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$ScheduledEvents$Callback$$Type} from "dev.latvian.mods.kubejs.util.ScheduledEvents$Callback"
import {$GameProfile} from "com.mojang.authlib.GameProfile"
import {$RealmsDataFetcher} from "com.mojang.realmsclient.gui.RealmsDataFetcher"
import {$ParticleEngine} from "net.minecraft.client.particle.ParticleEngine"
import {$ToastComponent} from "net.minecraft.client.gui.components.toasts.ToastComponent"
import {$MinecraftAccessor$$Interface} from "com.simibubi.create.foundation.mixin.accessor.MinecraftAccessor"
import {$DataFixer} from "com.mojang.datafixers.DataFixer"
import {$ItemRenderer} from "net.minecraft.client.renderer.entity.ItemRenderer"
import {$Overlay, $Overlay$$Type} from "net.minecraft.client.gui.screens.Overlay"
import {$ProfilerFiller} from "net.minecraft.util.profiling.ProfilerFiller"
import {$VanillaPackResources} from "net.minecraft.server.packs.VanillaPackResources"
import {$IWorldMapMinecraftClient$$Interface} from "xaero.map.core.IWorldMapMinecraftClient"
import {$ReceivingLevelScreen$Reason$$Type} from "net.minecraft.client.gui.screens.ReceivingLevelScreen$Reason"
import {$TickDuration$$Type} from "dev.latvian.mods.kubejs.util.TickDuration"
import {$Gui} from "net.minecraft.client.gui.Gui"
import {$CommandHistory} from "net.minecraft.client.CommandHistory"
import {$MinecraftClientAccessor$$Interface as $MinecraftClientAccessor$1$$Interface} from "me.flashyreese.mods.sodiumextra.mixin.gui.MinecraftClientAccessor"
import {$SignatureValidator} from "net.minecraft.util.SignatureValidator"
import {$File, $File$$Type} from "java.io.File"
import {$BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"
import {$IMixinMinecraft$$Interface} from "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinMinecraft"
import {$HitResult} from "net.minecraft.world.phys.HitResult"
import {$Locale} from "java.util.Locale"
import {$ModCheck} from "net.minecraft.util.ModCheck"
import {$GameNarrator} from "net.minecraft.client.GameNarrator"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$BlockEntityRenderDispatcher} from "net.minecraft.client.renderer.blockentity.BlockEntityRenderDispatcher"
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$HotbarManager} from "net.minecraft.client.HotbarManager"
import {$GuiSpriteManager} from "net.minecraft.client.gui.GuiSpriteManager"
import {$IntegratedServer} from "net.minecraft.client.server.IntegratedServer"
import {$LevelStorageSource} from "net.minecraft.world.level.storage.LevelStorageSource"
import {$BanDetails} from "com.mojang.authlib.minecraft.BanDetails"
import {$DownloadedPackSource} from "net.minecraft.client.resources.server.DownloadedPackSource"
import {$StoringChunkProgressListener} from "net.minecraft.server.level.progress.StoringChunkProgressListener"
import {$Path} from "java.nio.file.Path"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MinecraftClientAccessor$$Interface} from "traben.entity_model_features.mixin.accessor.MinecraftClientAccessor"
import {$UUID$$Type} from "java.util.UUID"
import {$ScheduledEvents} from "dev.latvian.mods.kubejs.util.ScheduledEvents"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$ProcessorHandle} from "net.minecraft.util.thread.ProcessorHandle"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BlockRenderDispatcher} from "net.minecraft.client.renderer.block.BlockRenderDispatcher"
import {$DebugRenderer} from "net.minecraft.client.renderer.debug.DebugRenderer"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$TextureAtlasSprite} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$MapDecorationTextureManager} from "net.minecraft.client.resources.MapDecorationTextureManager"
import {$QuickPlayLog} from "net.minecraft.client.quickplay.QuickPlayLog"
import {$PackRepository, $PackRepository$$Type} from "net.minecraft.server.packs.repository.PackRepository"
import {$KeyMapping$$Type} from "net.minecraft.client.KeyMapping"
import {$LanguageManager, $LanguageManager$$Type} from "net.minecraft.client.resources.language.LanguageManager"
import {$ModelManager} from "net.minecraft.client.resources.model.ModelManager"
import {$BlockColors} from "net.minecraft.client.color.block.BlockColors"
import {$WorldOpenFlows} from "net.minecraft.client.gui.screens.worldselection.WorldOpenFlows"
import {$ItemColors} from "net.minecraft.client.color.item.ItemColors"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$EntityRenderDispatcher} from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"
import {$ReportEnvironment$$Type} from "net.minecraft.client.multiplayer.chat.report.ReportEnvironment"
import {$Connection} from "net.minecraft.network.Connection"
import {$ClientTelemetryManager} from "net.minecraft.client.telemetry.ClientTelemetryManager"

export class $Minecraft extends $ReentrantBlockableEventLoop<($Runnable)> implements $WindowEventHandler$$Interface, $IMinecraftExtension$$Interface, $MinecraftClientAccessor$1$$Interface, $IXaeroMinimapMinecraftClient$$Interface, $IWorldMapMinecraftClient$$Interface, $MinecraftClientAccessor$$Interface, $MinecraftClientAccessor$0$$Interface, $MinecraftClientKJS$$Interface, $IMixinMinecraft$$Interface, $MinecraftAccessor$$Interface {
static "instance": $Minecraft
 "crosshairPickEntity": $Entity
 "screen": $Screen
 "cameraEntity": $Entity
 "blockRenderer": $BlockRenderDispatcher
 "running": boolean
 "sectionVisibility": boolean
static readonly "ON_OSX": boolean
readonly "mouseHandler": $MouseHandler
static readonly "UNIFORM_FONT": $ResourceLocation
readonly "gameRenderer": $GameRenderer
 "wireframe": boolean
readonly "options": $Options
readonly "levelRenderer": $LevelRenderer
 "player": $LocalPlayer
 "pendingConnection": $Connection
readonly "fontFilterFishy": $Font
 "missTime": integer
 "level": $ClientLevel
readonly "gameDirectory": $File
static readonly "$assertionsDisabled": boolean
 "gameThread": $Thread
 "sectionPath": boolean
readonly "debugRenderer": $DebugRenderer
 "noRender": boolean
static readonly "DEFAULT_FONT": $ResourceLocation
 "fpsString": StringJS
readonly "keyboardHandler": $KeyboardHandler
static readonly "UPDATE_DRIVERS_ADVICE": StringJS
readonly "particleEngine": $ParticleEngine
readonly "gui": $Gui
 "gameMode": $MultiPlayerGameMode
static readonly "ALT_FONT": $ResourceLocation
 "hitResult": $HitResult
 "smartCull": boolean
readonly "font": $Font

constructor(arg0: $GameConfig$$Type)

public "getConnection"(): $Connection
public "isLocalServer"(): boolean
public "quickPlayLog"(): $QuickPlayLog
public "realmsDataFetcher"(): $RealmsDataFetcher
public "run"(): void
public static "getInstance"(): $Minecraft
public "stop"(): void
public "destroy"(): void
public "close"(): void
public "managedBlock"(pIsDone: $BooleanSupplier$$Type): void
public "tick"(): void
public "setLevel"(arg0: $ClientLevel$$Type, arg1: $ReceivingLevelScreen$Reason$$Type): void
public "handler$enp000$bridgingmod$onItemUse"(info: $CallbackInfo$$Type): void
public "getItemRenderer"(): $ItemRenderer
public "getGuiSprites"(): $GuiSpriteManager
public "getProxy"(): $Proxy
public "isDemo"(): boolean
public "shouldRun"(arg0: $Runnable$$Type): boolean
public "isPaused"(): boolean
public "isBlocked"(arg0: $UUID$$Type): boolean
public "getOverlay"(): $Overlay
public "tell"(arg0: any): void
public "disconnect"(arg0: $Screen$$Type, arg1: boolean): void
public "disconnect"(): void
public "disconnect"(arg0: $Screen$$Type): void
public "fillReport"(arg0: $CrashReport$$Type): $CrashReport
public static "fillReport"(arg0: $Minecraft$$Type, arg1: $LanguageManager$$Type, arg2: StringJS, arg3: $Options$$Type, arg4: $CrashReport$$Type): void
public "delayCrash"(arg0: $CrashReport$$Type): void
public "getToasts"(): $ToastComponent
public "getFps"(): integer
public "pauseGame"(arg0: boolean): void
public "getUser"(): $User
public static "crash"(arg0: $Minecraft$$Type, arg1: $File$$Type, arg2: $CrashReport$$Type): void
public "getProfiler"(): $ProfilerFiller
public "getTimer"(): $DeltaTracker$Timer
public "create$setMissTime"(arg0: integer): void
public "getCurrentServer"(): $ServerData
public "isRunning"(): boolean
public "clearDownloadedResourcePacks"(): void
public "getProfileKeySignatureValidator"(): $SignatureValidator
public "getBlockEntityRenderDispatcher"(): $BlockEntityRenderDispatcher
public "getMainRenderTarget"(): $RenderTarget
public "reloadResourcePacks"(): $CompletableFuture<(void)>
public "clearResourcePacksOnError"(arg0: $Throwable$$Type, arg1: $Component$$Type, arg2: $Minecraft$GameLoadCookie$$Type): void
public "handler$bbf000$balm$run"(arg0: $CallbackInfo$$Type): void
public "getEntityRenderDispatcher"(): $EntityRenderDispatcher
public "emergencySaveAndCrash"(arg0: $CrashReport$$Type): void
public "hasSingleplayerServer"(): boolean
public "setScreen"(arg0: $Screen$$Type): void
public "updateFontOptions"(): void
public "getBlockRenderer"(): $BlockRenderDispatcher
public "setWindowActive"(arg0: boolean): void
public "getProfileKeyPairManager"(): $ProfileKeyPairManager
public "getSingleplayerServer"(): $IntegratedServer
public "debugClientMetricsStart"(arg0: $Consumer$$Type<($Component)>): boolean
public "getTelemetryManager"(): $ClientTelemetryManager
public "updateReportEnvironment"(arg0: $ReportEnvironment$$Type): void
public "telemetryOptInExtra"(): boolean
public "extraTelemetryAvailable"(): boolean
public "createWorldOpenFlows"(): $WorldOpenFlows
public static "useAmbientOcclusion"(): boolean
public "debugFpsMeterKeyPress"(arg0: integer): void
public static "useShaderTransparency"(): boolean
public "showOnlyReducedInfo"(): boolean
public "getPaintingTextures"(): $PaintingTextureManager
public "isTextFilteringEnabled"(): boolean
public "getResourcePackDirectory"(): $Path
public "getMobEffectTextures"(): $MobEffectTextureManager
public "shouldEntityAppearGlowing"(arg0: $Entity$$Type): boolean
public "getMapDecorationTextures"(): $MapDecorationTextureManager
public "getReportingContext"(): $ReportingContext
public "canValidateProfileKeys"(): boolean
public "getMinecraftSessionService"(): $MinecraftSessionService
public "getSituationalMusic"(): $Music
public "grabPanoramixScreenshot"(arg0: $File$$Type, arg1: integer, arg2: integer): $Component
public "getDownloadedPackSource"(): $DownloadedPackSource
public "getGpuWarnlistManager"(): $GpuWarnlistManager
public "getResourcePackRepository"(): $PackRepository
public "getProgressListener"(): $StoringChunkProgressListener
public "prepareForMultiplayer"(): void
public "getPlayerSocialManager"(): $PlayerSocialManager
public "getXaeroWorldMap_fps"(): integer
public "getScheduledEvents"(): $ScheduledEvents
public "openChatScreenFancyMenu"(arg0: StringJS): void
public "getXaeroMinimap_fps"(): integer
public "getCameraEntity"(): $Entity
public "getMusicManager"(): $MusicManager
public "handler$fop000$distanthorizons$close"(ci: $CallbackInfo$$Type): void
public "modify$dhf000$xaeroworldmap$onRenderCall"(arg0: boolean): boolean
public "allowsMultiplayer"(): boolean
public "renderBuffers"(): $RenderBuffers
public "directoryValidator"(): $DirectoryValidator
public "commandHistory"(): $CommandHistory
public "handler$dhf000$xaeroworldmap$onRunTickStart"(arg0: $CallbackInfo$$Type): void
public "handler$zkk000$iris$trackLastDimensionOnLeave"(arg0: $Screen$$Type, arg1: $CallbackInfo$$Type): void
public "getVanillaPackResources"(): $VanillaPackResources
public "getTextureManager"(): $TextureManager
public static "getFPS$sodium_extra_$md$1ae6d3$0"(): integer
public "getReloadStateTrackerFancyMenu"(): $ResourceLoadStateTracker
public "handler$hcl000$fabric_events_interaction_v0$cancelItemPick"(arg0: $CallbackInfo$$Type): void
public "handler$gaf000$armorposer$shouldEntityAppearGlowing"(arg0: $Entity$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "getSoundManager"(): $SoundManager
public "setCameraEntity"(arg0: $Entity$$Type): void
public "getResourceManager"(): $ResourceManager
public "isWindowActive"(): boolean
public "getHotbarManager"(): $HotbarManager
public "getLanguageManager"(): $LanguageManager
public "getTutorial"(): $Tutorial
public "getTextureAtlas"(arg0: $ResourceLocation$$Type): $Function<($ResourceLocation), ($TextureAtlasSprite)>
public "getRunningThread"(): $Thread
public "wrapRunnable"(arg0: $Runnable$$Type): $Runnable
public "getFixerUpper"(): $DataFixer
public "getSkinManager"(): $SkinManager
public "isSingleplayer"(): boolean
public static "getLauncherBrand"(): StringJS
public "getGameProfile"(): $GameProfile
public "getBlockColors"(): $BlockColors
public "delayTextureReload"(): $CompletableFuture<(void)>
public "isLocalPlayer"(arg0: $UUID$$Type): boolean
public "getChatStatus"(): $Minecraft$ChatStatus
public "getLevelSource"(): $LevelStorageSource
public "getLaunchedVersion"(): StringJS
public "delayCrashRaw"(arg0: $CrashReport$$Type): void
public "getVersionType"(): StringJS
public "isEnforceUnicode"(): boolean
public "getModelManager"(): $ModelManager
public "setLastInputType"(arg0: $InputType$$Type): void
public "getDebugOverlay"(): $DebugScreenOverlay
public "handler$enp006$bridgingmod$onTick"(ci: $CallbackInfo$$Type): void
public "multiplayerBan"(): $BanDetails
public "updateTitle"(): void
public static "checkModStatus"(): $ModCheck
public "isGameLoadFinished"(): boolean
public "resizeDisplay"(): void
public "localvar$hcl000$fabric_events_interaction_v0$modifyItemPick"(arg0: $ItemStack$$Type): $ItemStack
public "clearClientLevel"(arg0: $Screen$$Type): void
public static "renderNames"(): boolean
public "forceSetScreen"(arg0: $Screen$$Type): void
public "addCustomNbtData"(arg0: $ItemStack$$Type, arg1: $BlockEntity$$Type, arg2: $RegistryAccess$$Type): void
public static "useFancyGraphics"(): boolean
public "allowsRealms"(): boolean
public "allowsTelemetry"(): boolean
public "isNameBanned"(): boolean
public "getGpuUtilization"(): double
public "doWorldLoad"(arg0: $LevelStorageSource$LevelStorageAccess$$Type, arg1: $PackRepository$$Type, arg2: $WorldStem$$Type, arg3: boolean): void
public "getTitle"(): StringJS
public "getItemColors"(): $ItemColors
public "getLastInputType"(): $InputType
public "getSplashManager"(): $SplashManager
public "getNarrator"(): $GameNarrator
public "getEntityModels"(): $EntityModelSet
public "getChatListener"(): $ChatListener
public "updateMaxMipLevel"(arg0: integer): void
public "getWindow"(): $Window
public "setOverlay"(arg0: $Overlay$$Type): void
public "cursorEntered"(): void
public "getFrameTimeNs"(): long
public "getLocale"(): $Locale
public "popGuiLayer"(): void
public "pushGuiLayer"(arg0: $Screen$$Type): void
public static "getFPS"(): integer
public "self"(): $Minecraft
public "tell"(message: $Component$$Type): void
public "isKeyDown"(keyName: StringJS): boolean
public "isKeyDown"(key: integer): boolean
public "getName"(): $Component
public "isKeyBindDown"(id: StringJS): boolean
public "setTitle"(t: StringJS): void
public "isShiftDown"(): boolean
public "isAltDown"(): boolean
public "isCtrlDown"(): boolean
public "runCommand"(command: StringJS): void
public "getParticleTextureAtlas"(): $Function<($ResourceLocation), ($TextureAtlasSprite)>
public "setActivePostShader"(id: $ResourceLocation$$Type): void
public "isKeyMappingDown"(key: $KeyMapping$$Type): boolean
public "getCurrentScreen"(): $Screen
public "setCurrentScreen"(gui: $Screen$$Type): void
public "runCommandSilent"(command: StringJS): void
public "getCurrentWorldName"(): StringJS
public "setStatusMessage"(message: $Component$$Type): void
public "getKeyBindPressedTicks"(id: StringJS): integer
public "getBlockTextureAtlas"(): $Function<($ResourceLocation), ($TextureAtlasSprite)>
public "schedule"(timer: $TemporalAmount$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "scheduleRepeatingInTicks"(ticks: $TickDuration$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "scheduleRepeating"(timer: $TemporalAmount$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "scheduleInTicks"(ticks: $TickDuration$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "getDisplayName"(): $Component
public static "of"<Msg>(arg0: StringJS, arg1: $Consumer$$Type<(Msg)>): $ProcessorHandle<(Msg)>
get "connection"(): $Connection
get "localServer"(): boolean
get "itemRenderer"(): $ItemRenderer
get "guiSprites"(): $GuiSpriteManager
get "proxy"(): $Proxy
get "demo"(): boolean
get "paused"(): boolean
get "overlay"(): $Overlay
get "toasts"(): $ToastComponent
get "fps"(): integer
get "user"(): $User
get "profiler"(): $ProfilerFiller
get "timer"(): $DeltaTracker$Timer
get "currentServer"(): $ServerData
get "profileKeySignatureValidator"(): $SignatureValidator
get "blockEntityRenderDispatcher"(): $BlockEntityRenderDispatcher
get "mainRenderTarget"(): $RenderTarget
get "entityRenderDispatcher"(): $EntityRenderDispatcher
set "windowActive"(value: boolean)
get "profileKeyPairManager"(): $ProfileKeyPairManager
get "singleplayerServer"(): $IntegratedServer
get "telemetryManager"(): $ClientTelemetryManager
get "paintingTextures"(): $PaintingTextureManager
get "textFilteringEnabled"(): boolean
get "resourcePackDirectory"(): $Path
get "mobEffectTextures"(): $MobEffectTextureManager
get "mapDecorationTextures"(): $MapDecorationTextureManager
get "reportingContext"(): $ReportingContext
get "minecraftSessionService"(): $MinecraftSessionService
get "situationalMusic"(): $Music
get "downloadedPackSource"(): $DownloadedPackSource
get "gpuWarnlistManager"(): $GpuWarnlistManager
get "resourcePackRepository"(): $PackRepository
get "progressListener"(): $StoringChunkProgressListener
get "playerSocialManager"(): $PlayerSocialManager
get "xaeroWorldMap_fps"(): integer
get "scheduledEvents"(): $ScheduledEvents
get "xaeroMinimap_fps"(): integer
get "musicManager"(): $MusicManager
get "vanillaPackResources"(): $VanillaPackResources
get "textureManager"(): $TextureManager
get "FPS$sodium_extra_$md$1ae6d3$0"(): integer
get "reloadStateTrackerFancyMenu"(): $ResourceLoadStateTracker
get "soundManager"(): $SoundManager
get "resourceManager"(): $ResourceManager
get "windowActive"(): boolean
get "hotbarManager"(): $HotbarManager
get "languageManager"(): $LanguageManager
get "tutorial"(): $Tutorial
get "runningThread"(): $Thread
get "fixerUpper"(): $DataFixer
get "skinManager"(): $SkinManager
get "singleplayer"(): boolean
get "launcherBrand"(): StringJS
get "gameProfile"(): $GameProfile
get "blockColors"(): $BlockColors
get "chatStatus"(): $Minecraft$ChatStatus
get "levelSource"(): $LevelStorageSource
get "launchedVersion"(): StringJS
get "versionType"(): StringJS
get "enforceUnicode"(): boolean
get "modelManager"(): $ModelManager
set "lastInputType"(value: $InputType$$Type)
get "debugOverlay"(): $DebugScreenOverlay
get "gameLoadFinished"(): boolean
get "nameBanned"(): boolean
get "gpuUtilization"(): double
get "title"(): StringJS
get "itemColors"(): $ItemColors
get "lastInputType"(): $InputType
get "splashManager"(): $SplashManager
get "narrator"(): $GameNarrator
get "entityModels"(): $EntityModelSet
get "chatListener"(): $ChatListener
get "window"(): $Window
set "overlay"(value: $Overlay$$Type)
get "frameTimeNs"(): long
get "locale"(): $Locale
get "FPS"(): integer
get "name"(): $Component
set "title"(value: StringJS)
get "shiftDown"(): boolean
get "altDown"(): boolean
get "ctrlDown"(): boolean
get "particleTextureAtlas"(): $Function<($ResourceLocation), ($TextureAtlasSprite)>
set "activePostShader"(value: $ResourceLocation$$Type)
get "currentScreen"(): $Screen
set "currentScreen"(value: $Screen$$Type)
get "currentWorldName"(): StringJS
set "statusMessage"(value: $Component$$Type)
get "blockTextureAtlas"(): $Function<($ResourceLocation), ($TextureAtlasSprite)>
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Minecraft$$Type = ($Minecraft);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Minecraft$$Original = $Minecraft;}
declare module "net.minecraft.client.Camera" {
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$Vector3f} from "org.joml.Vector3f"
import {$FogType} from "net.minecraft.world.level.material.FogType"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$CameraAccessor$$Interface} from "com.blackgear.platform.core.mixin.access.CameraAccessor"
import {$CameraAccessorMixin$$Interface} from "com.pedrorok.hypertube.mixin.core.CameraAccessorMixin"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$Quaternionf} from "org.joml.Quaternionf"
import {$Camera$NearPlane} from "net.minecraft.client.Camera$NearPlane"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $Camera implements $CameraAccessorMixin$$Interface, $CameraAccessor$$Interface {
static readonly "FOG_DISTANCE_SCALE": float

constructor()

public "getPosition"(): $Vec3
public "reset"(): void
public "setup"(arg0: $BlockGetter$$Type, arg1: $Entity$$Type, arg2: boolean, arg3: boolean, arg4: float): void
public "move"(arg0: float, arg1: float, arg2: float): void
public "tick"(): void
public "getLevel"(): $BlockGetter
public "getEntity"(): $Entity
public "getLeftVector"(): $Vector3f
public "getBlockAtCamera"(): $BlockState
/**
 * 
 * @deprecated
 */
public "setRotation"(arg0: float, arg1: float): void
public "setRotation"(arg0: float, arg1: float, arg2: float): void
public "rotation"(): $Quaternionf
public "getXRot"(): float
public "getYRot"(): float
public "handler$gck000$freecam$onGetSubmersionType"(cir: $CallbackInfoReturnable$$Type): void
public "createHypertube$setDetachedExternal"(arg0: boolean): void
public "isInitialized"(): boolean
public "getBlockPosition"(): $BlockPos
public "isDetached"(): boolean
public "getFluidInCamera"(): $FogType
public "getPartialTickTime"(): float
public "getRoll"(): float
public "handler$gck000$freecam$onUpdate"(area: $BlockGetter$$Type, newFocusedEntity: $Entity$$Type, thirdPerson: boolean, inverseView: boolean, tickDelta: float, ci: $CallbackInfo$$Type): void
public "createHypertube$callSetPosition"(arg0: double, arg1: double, arg2: double): void
public "createHypertube$callGetMaxZoom"(arg0: float): float
public "createHypertube$callSetRotation"(arg0: float, arg1: float): void
public "handler$zbo000$sodium_extra$noLerp"(arg0: $CallbackInfo$$Type): void
public "setPosition"(arg0: double, arg1: double, arg2: double): void
public "setPosition"(arg0: $Vec3$$Type): void
public "getUpVector"(): $Vector3f
public "getNearPlane"(): $Camera$NearPlane
public "getLookVector"(): $Vector3f
public "createHypertube$callMove"(arg0: float, arg1: float, arg2: float): void
get "position"(): $Vec3
get "level"(): $BlockGetter
get "entity"(): $Entity
get "leftVector"(): $Vector3f
get "blockAtCamera"(): $BlockState
get "XRot"(): float
get "YRot"(): float
get "initialized"(): boolean
get "blockPosition"(): $BlockPos
get "detached"(): boolean
get "fluidInCamera"(): $FogType
get "partialTickTime"(): float
get "roll"(): float
set "position"(value: $Vec3$$Type)
get "upVector"(): $Vector3f
get "nearPlane"(): $Camera$NearPlane
get "lookVector"(): $Vector3f
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Camera$$Type = ($Camera);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Camera$$Original = $Camera;}
declare module "net.minecraft.client.Camera$NearPlane" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$NearPlaneAccessor$$Interface} from "com.blackgear.platform.core.mixin.access.NearPlaneAccessor"

export class $Camera$NearPlane implements $NearPlaneAccessor$$Interface {
readonly "forward": $Vec3

constructor(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: $Vec3$$Type)

public "getBottomRight"(): $Vec3
public "getTopRight"(): $Vec3
public "getTopLeft"(): $Vec3
public "getPointOnPlane"(arg0: float, arg1: float): $Vec3
public "getForward"(): $Vec3
public "getBottomLeft"(): $Vec3
get "bottomRight"(): $Vec3
get "topRight"(): $Vec3
get "topLeft"(): $Vec3
get "bottomLeft"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Camera$NearPlane$$Type = ($Camera$NearPlane);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Camera$NearPlane$$Original = $Camera$NearPlane;}
declare module "net.minecraft.client.DeltaTracker$Timer" {
import {$FloatUnaryOperator$$Type} from "it.unimi.dsi.fastutil.floats.FloatUnaryOperator"
import {$DeltaTracker$$Interface} from "net.minecraft.client.DeltaTracker"
import {$TimerAccessor$$Interface as $TimerAccessor$0$$Interface} from "net.createmod.ponder.mixin.accessor.TimerAccessor"
import {$TimerAccessor$$Interface} from "com.simibubi.create.foundation.mixin.accessor.TimerAccessor"

export class $DeltaTracker$Timer implements $DeltaTracker$$Interface, $TimerAccessor$0$$Interface, $TimerAccessor$$Interface {
constructor(arg0: float, arg1: long, arg2: $FloatUnaryOperator$$Type)

public "catnip$getDeltaTickResidual"(): float
public "getDeltaTickResidual"(): float
public "getRealtimeDeltaTicks"(): float
public "getGameTimeDeltaTicks"(): float
public "advanceTime"(arg0: long, arg1: boolean): integer
public "getGameTimeDeltaPartialTick"(arg0: boolean): float
public "updatePauseState"(arg0: boolean): void
public "updateFrozenState"(arg0: boolean): void
get "deltaTickResidual"(): float
get "realtimeDeltaTicks"(): float
get "gameTimeDeltaTicks"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeltaTracker$Timer$$Type = ($DeltaTracker$Timer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DeltaTracker$Timer$$Original = $DeltaTracker$Timer;}
declare module "net.minecraft.client.KeyboardHandler" {
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$IF3KeyStateSetter$$Interface} from "fi.dy.masa.malilib.util.IF3KeyStateSetter"

export class $KeyboardHandler implements $IF3KeyStateSetter$$Interface {
 "cached_key_FancyMenu": integer
 "cached_scanCode_FancyMenu": integer
 "cached_action_FancyMenu": integer
 "cached_char_codePoint_FancyMenu": integer
static readonly "DEBUG_CRASH_TIME": integer
 "cached_char_windowPointer_FancyMenu": long
 "cached_char_modifiers_FancyMenu": integer
 "cached_modifiers_FancyMenu": integer

constructor(arg0: $Minecraft$$Type)

public "setup"(arg0: long): void
public "tick"(): void
public "malilib$setF3KeyState"(value: boolean): void
public "handler$cmi000$emi$onChar"(window: long, codePoint: integer, modifiers: integer, info: $CallbackInfo$$Type): void
public "handler$cmi000$emi$onKey"(window: long, key: integer, scancode: integer, action: integer, modifiers: integer, info: $CallbackInfo$$Type): void
public "setClipboard"(arg0: StringJS): void
public "keyPress"(arg0: long, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "getClipboard"(): StringJS
set "up"(value: long)
set "clipboard"(value: StringJS)
get "clipboard"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyboardHandler$$Type = ($KeyboardHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyboardHandler$$Original = $KeyboardHandler;}
declare module "net.minecraft.client.DebugQueryHandler" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ClientPacketListener$$Type} from "net.minecraft.client.multiplayer.ClientPacketListener"
import {$IMixinDataQueryHandler$$Interface} from "fi.dy.masa.malilib.mixin.network.IMixinDataQueryHandler"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $DebugQueryHandler implements $IMixinDataQueryHandler$$Interface {
constructor(arg0: $ClientPacketListener$$Type)

public "queryBlockEntityTag"(arg0: $BlockPos$$Type, arg1: $Consumer$$Type<($CompoundTag)>): void
public "queryEntityTag"(arg0: integer, arg1: $Consumer$$Type<($CompoundTag)>): void
public "handleResponse"(arg0: integer, arg1: $CompoundTag$$Type): boolean
public "malilib_currentTransactionId"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DebugQueryHandler$$Type = ($DebugQueryHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DebugQueryHandler$$Original = $DebugQueryHandler;}
declare module "net.minecraft.client.Minecraft$ChatStatus" {
import {$Enum} from "java.lang.Enum"
import {$Component} from "net.minecraft.network.chat.Component"

export class $Minecraft$ChatStatus extends $Enum<($Minecraft$ChatStatus)> {
static readonly "DISABLED_BY_OPTIONS": $Minecraft$ChatStatus
static readonly "INFO_DISABLED_BY_PROFILE": $Component
static readonly "DISABLED_BY_PROFILE": $Minecraft$ChatStatus
static readonly "ENABLED": $Minecraft$ChatStatus
static readonly "DISABLED_BY_LAUNCHER": $Minecraft$ChatStatus

public static "values"(): ($Minecraft$ChatStatus)[]
public static "valueOf"(arg0: StringJS): $Minecraft$ChatStatus
public "getMessage"(): $Component
public "isChatAllowed"(arg0: boolean): boolean
get "message"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Minecraft$ChatStatus$$Type = (("enabled") | ("disabled_by_options") | ("disabled_by_launcher") | ("disabled_by_profile"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Minecraft$ChatStatus$$Original = $Minecraft$ChatStatus;}
declare module "net.minecraft.client.HotbarManager" {
import {$Hotbar} from "net.minecraft.client.player.inventory.Hotbar"
import {$Path$$Type} from "java.nio.file.Path"
import {$DataFixer$$Type} from "com.mojang.datafixers.DataFixer"

export class $HotbarManager {
static readonly "NUM_HOTBAR_GROUPS": integer

constructor(arg0: $Path$$Type, arg1: $DataFixer$$Type)

public "get"(arg0: integer): $Hotbar
public "save"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HotbarManager$$Type = ($HotbarManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HotbarManager$$Original = $HotbarManager;}
declare module "net.minecraft.client.DeltaTracker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DeltaTracker$$Interface {
get "realtimeDeltaTicks"(): float
get "gameTimeDeltaTicks"(): float
}

export class $DeltaTracker implements $DeltaTracker$$Interface {
static readonly "ZERO": $DeltaTracker
static readonly "ONE": $DeltaTracker

 "getRealtimeDeltaTicks"(): float
 "getGameTimeDeltaTicks"(): float
 "getGameTimeDeltaPartialTick"(arg0: boolean): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeltaTracker$$Type = ($DeltaTracker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DeltaTracker$$Original = $DeltaTracker;}
declare module "net.minecraft.client.GuiMessage$Line" {
import {$FormattedCharSequence, $FormattedCharSequence$$Type} from "net.minecraft.util.FormattedCharSequence"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$HeadData, $HeadData$$Type} from "dzwdz.chat_heads.HeadData"
import {$HeadRenderable$$Interface} from "dzwdz.chat_heads.mixininterface.HeadRenderable"
import {$GuiMessageTag, $GuiMessageTag$$Type} from "net.minecraft.client.GuiMessageTag"
import {$Record} from "java.lang.Record"

export class $GuiMessage$Line extends $Record implements $HeadRenderable$$Interface {
 "chatheads$headData": $HeadData

constructor(arg0: integer, arg1: $FormattedCharSequence$$Type, arg2: $GuiMessageTag$$Type, arg3: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "tag"(): $GuiMessageTag
public "content"(): $FormattedCharSequence
public "endOfEntry"(): boolean
public "addedTime"(): integer
public "chatheads$getHeadData"(): $HeadData
public "handler$bcd000$chat_heads$chatheads$setOwnerForFirstLine"(callbackInfo: $CallbackInfo$$Type): void
public "chatheads$setHeadData"(arg0: $HeadData$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiMessage$Line$$Type = ({"addedTime"?: integer, "endOfEntry"?: boolean, "content"?: $FormattedCharSequence$$Type, "tag"?: $GuiMessageTag$$Type}) | ([addedTime?: integer, endOfEntry?: boolean, content?: $FormattedCharSequence$$Type, tag?: $GuiMessageTag$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiMessage$Line$$Original = $GuiMessage$Line;}
declare module "net.minecraft.client.OptionInstance$CaptionBasedToString" {
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $OptionInstance$CaptionBasedToString$$Interface<T> {

(arg0: $Component, arg1: T): $Component$$Type
}

export class $OptionInstance$CaptionBasedToString<T> implements $OptionInstance$CaptionBasedToString$$Interface {
 "toString"(arg0: $Component$$Type, arg1: T): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionInstance$CaptionBasedToString$$Type<T> = ((arg0: $Component, arg1: T) => $Component$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OptionInstance$CaptionBasedToString$$Original<T> = $OptionInstance$CaptionBasedToString<(T)>;}
declare module "net.minecraft.client.AttackIndicatorStatus" {
import {$Enum} from "java.lang.Enum"
import {$Component} from "net.minecraft.network.chat.Component"
import {$OptionEnum$$Interface} from "net.minecraft.util.OptionEnum"

export class $AttackIndicatorStatus extends $Enum<($AttackIndicatorStatus)> implements $OptionEnum$$Interface {
static readonly "CROSSHAIR": $AttackIndicatorStatus
static readonly "HOTBAR": $AttackIndicatorStatus
static readonly "OFF": $AttackIndicatorStatus

public static "values"(): ($AttackIndicatorStatus)[]
public static "valueOf"(arg0: StringJS): $AttackIndicatorStatus
public "getKey"(): StringJS
public "getId"(): integer
public static "byId"(arg0: integer): $AttackIndicatorStatus
public "getCaption"(): $Component
get "key"(): StringJS
get "id"(): integer
get "caption"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttackIndicatorStatus$$Type = (("off") | ("crosshair") | ("hotbar"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AttackIndicatorStatus$$Original = $AttackIndicatorStatus;}
declare module "net.minecraft.client.User$Type" {
import {$Enum} from "java.lang.Enum"

export class $User$Type extends $Enum<($User$Type)> {
static readonly "MOJANG": $User$Type
static readonly "LEGACY": $User$Type
static readonly "MSA": $User$Type

public "getName"(): StringJS
public static "values"(): ($User$Type)[]
public static "valueOf"(arg0: StringJS): $User$Type
public static "byName"(arg0: StringJS): $User$Type
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $User$Type$$Type = (("legacy") | ("mojang") | ("msa"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $User$Type$$Original = $User$Type;}
declare module "net.minecraft.client.ResourceLoadStateTracker" {
import {$ResourceLoadStateTracker$ReloadReason$$Type} from "net.minecraft.client.ResourceLoadStateTracker$ReloadReason"
import {$List$$Type} from "java.util.List"
import {$CrashReport$$Type} from "net.minecraft.CrashReport"
import {$PackResources$$Type} from "net.minecraft.server.packs.PackResources"
import {$Throwable$$Type} from "java.lang.Throwable"

export class $ResourceLoadStateTracker {
constructor()

public "fillCrashReport"(arg0: $CrashReport$$Type): void
public "startRecovery"(arg0: $Throwable$$Type): void
public "startReload"(arg0: $ResourceLoadStateTracker$ReloadReason$$Type, arg1: $List$$Type<($PackResources$$Type)>): void
public "finishReload"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceLoadStateTracker$$Type = ($ResourceLoadStateTracker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResourceLoadStateTracker$$Original = $ResourceLoadStateTracker;}
declare module "net.minecraft.client.PrioritizeChunkUpdates" {
import {$Enum} from "java.lang.Enum"
import {$Component} from "net.minecraft.network.chat.Component"
import {$OptionEnum$$Interface} from "net.minecraft.util.OptionEnum"

export class $PrioritizeChunkUpdates extends $Enum<($PrioritizeChunkUpdates)> implements $OptionEnum$$Interface {
static readonly "NEARBY": $PrioritizeChunkUpdates
static readonly "NONE": $PrioritizeChunkUpdates
static readonly "PLAYER_AFFECTED": $PrioritizeChunkUpdates

public static "values"(): ($PrioritizeChunkUpdates)[]
public static "valueOf"(arg0: StringJS): $PrioritizeChunkUpdates
public "getKey"(): StringJS
public "getId"(): integer
public static "byId"(arg0: integer): $PrioritizeChunkUpdates
public "getCaption"(): $Component
get "key"(): StringJS
get "id"(): integer
get "caption"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrioritizeChunkUpdates$$Type = (("none") | ("player_affected") | ("nearby"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PrioritizeChunkUpdates$$Original = $PrioritizeChunkUpdates;}
declare module "net.minecraft.client.GraphicsStatus" {
import {$Enum} from "java.lang.Enum"
import {$Component} from "net.minecraft.network.chat.Component"
import {$OptionEnum$$Interface} from "net.minecraft.util.OptionEnum"

export class $GraphicsStatus extends $Enum<($GraphicsStatus)> implements $OptionEnum$$Interface {
static readonly "FANCY": $GraphicsStatus
static readonly "FABULOUS": $GraphicsStatus
static readonly "FAST": $GraphicsStatus

public "toString"(): StringJS
public static "values"(): ($GraphicsStatus)[]
public static "valueOf"(arg0: StringJS): $GraphicsStatus
public "getKey"(): StringJS
public "getId"(): integer
public static "byId"(arg0: integer): $GraphicsStatus
public "getCaption"(): $Component
get "key"(): StringJS
get "id"(): integer
get "caption"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GraphicsStatus$$Type = (("fast") | ("fancy") | ("fabulous"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GraphicsStatus$$Original = $GraphicsStatus;}
declare module "net.minecraft.client.OptionInstance" {
import {$OptionInstance$TooltipSupplier, $OptionInstance$TooltipSupplier$$Type} from "net.minecraft.client.OptionInstance$TooltipSupplier"
import {$OptionInstance$CaptionBasedToString, $OptionInstance$CaptionBasedToString$$Type} from "net.minecraft.client.OptionInstance$CaptionBasedToString"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$AbstractWidget} from "net.minecraft.client.gui.components.AbstractWidget"
import {$OptionInstance$ValueSet, $OptionInstance$ValueSet$$Type} from "net.minecraft.client.OptionInstance$ValueSet"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$OptionInstanceAccessor$$Interface} from "dev.isxander.yacl3.mixin.OptionInstanceAccessor"
import {$OptionEnum} from "net.minecraft.util.OptionEnum"
import {$Options$$Type} from "net.minecraft.client.Options"
import {$OptionInstance$Enum} from "net.minecraft.client.OptionInstance$Enum"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $OptionInstance<T> implements $OptionInstanceAccessor$$Interface {
readonly "caption": $Component
static readonly "BOOLEAN_VALUES": $OptionInstance$Enum<(boolean)>
 "value": T
static readonly "BOOLEAN_TO_STRING": $OptionInstance$CaptionBasedToString<(boolean)>

constructor(arg0: StringJS, arg1: $OptionInstance$TooltipSupplier$$Type<(T)>, arg2: $OptionInstance$CaptionBasedToString$$Type<(T)>, arg3: $OptionInstance$ValueSet$$Type<(T)>, arg4: $Codec$$Type<(T)>, arg5: T, arg6: $Consumer$$Type<(T)>)
constructor(arg0: StringJS, arg1: $OptionInstance$TooltipSupplier$$Type<(T)>, arg2: $OptionInstance$CaptionBasedToString$$Type<(T)>, arg3: $OptionInstance$ValueSet$$Type<(T)>, arg4: T, arg5: $Consumer$$Type<(T)>)

public "get"(): T
public "toString"(): StringJS
public "values"(): $OptionInstance$ValueSet<(T)>
public "set"(arg0: T): void
public static "cachedConstantTooltip"<T>(arg0: $Component$$Type): $OptionInstance$TooltipSupplier<(T)>
public static "noTooltip"<T>(): $OptionInstance$TooltipSupplier<(T)>
public static "createBoolean"(arg0: StringJS, arg1: boolean): $OptionInstance<(boolean)>
public static "createBoolean"(arg0: StringJS, arg1: $OptionInstance$TooltipSupplier$$Type<(boolean)>, arg2: boolean): $OptionInstance<(boolean)>
public static "createBoolean"(arg0: StringJS, arg1: boolean, arg2: $Consumer$$Type<(boolean)>): $OptionInstance<(boolean)>
public static "createBoolean"(arg0: StringJS, arg1: $OptionInstance$TooltipSupplier$$Type<(boolean)>, arg2: boolean, arg3: $Consumer$$Type<(boolean)>): $OptionInstance<(boolean)>
public static "createBoolean"(arg0: StringJS, arg1: $OptionInstance$TooltipSupplier$$Type<(boolean)>, arg2: $OptionInstance$CaptionBasedToString$$Type<(boolean)>, arg3: boolean, arg4: $Consumer$$Type<(boolean)>): $OptionInstance<(boolean)>
public "codec"(): $Codec<(T)>
public "createButton"(arg0: $Options$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: $Consumer$$Type<(T)>): $AbstractWidget
public "createButton"(arg0: $Options$$Type, arg1: integer, arg2: integer, arg3: integer): $AbstractWidget
public "createButton"(arg0: $Options$$Type): $AbstractWidget
public static "forOptionEnum"<T extends $OptionEnum>(): $OptionInstance$CaptionBasedToString<(T)>
public "getInitialValue"(): any
get "initialValue"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionInstance$$Type<T> = ($OptionInstance<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OptionInstance$$Original<T> = $OptionInstance<(T)>;}
declare module "net.minecraft.client.StringSplitter$LinePosConsumer" {
import {$Style, $Style$$Type} from "net.minecraft.network.chat.Style"

export interface $StringSplitter$LinePosConsumer$$Interface {

(arg0: $Style, arg1: integer, arg2: integer): void
}

export class $StringSplitter$LinePosConsumer implements $StringSplitter$LinePosConsumer$$Interface {
 "accept"(arg0: $Style$$Type, arg1: integer, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringSplitter$LinePosConsumer$$Type = ((arg0: $Style, arg1: integer, arg2: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StringSplitter$LinePosConsumer$$Original = $StringSplitter$LinePosConsumer;}
declare module "net.minecraft.client.InputType" {
import {$Enum} from "java.lang.Enum"

export class $InputType extends $Enum<($InputType)> {
static readonly "MOUSE": $InputType
static readonly "KEYBOARD_TAB": $InputType
static readonly "NONE": $InputType
static readonly "KEYBOARD_ARROW": $InputType

public static "values"(): ($InputType)[]
public static "valueOf"(arg0: StringJS): $InputType
public "isKeyboard"(): boolean
public "isMouse"(): boolean
get "keyboard"(): boolean
get "mouse"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputType$$Type = (("none") | ("mouse") | ("keyboard_arrow") | ("keyboard_tab"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InputType$$Original = $InputType;}
declare module "net.minecraft.client.User" {
import {$User$Type, $User$Type$$Type} from "net.minecraft.client.User$Type"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$UUID, $UUID$$Type} from "java.util.UUID"

export class $User {
constructor(arg0: StringJS, arg1: $UUID$$Type, arg2: StringJS, arg3: (StringJS)?, arg4: (StringJS)?, arg5: $User$Type$$Type)

public "getName"(): StringJS
public "getType"(): $User$Type
public "getClientId"(): $Optional<(StringJS)>
public "getSessionId"(): StringJS
public "getXuid"(): $Optional<(StringJS)>
public "getAccessToken"(): StringJS
public "getProfileId"(): $UUID
get "name"(): StringJS
get "type"(): $User$Type
get "clientId"(): $Optional<(StringJS)>
get "sessionId"(): StringJS
get "xuid"(): $Optional<(StringJS)>
get "accessToken"(): StringJS
get "profileId"(): $UUID
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $User$$Type = ($User);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $User$$Original = $User;}
declare module "net.minecraft.client.GameNarrator" {
import {$NarratorStatus$$Type} from "net.minecraft.client.NarratorStatus"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $GameNarrator {
static readonly "NO_TITLE": $Component

constructor(arg0: $Minecraft$$Type)

public "clear"(): void
public "destroy"(): void
public "isActive"(): boolean
public "sayNow"(arg0: $Component$$Type): void
public "sayNow"(arg0: StringJS): void
public "say"(arg0: $Component$$Type): void
public "updateNarratorStatus"(arg0: $NarratorStatus$$Type): void
public "checkStatus"(arg0: boolean): void
public "sayChat"(arg0: $Component$$Type): void
get "active"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameNarrator$$Type = ($GameNarrator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GameNarrator$$Original = $GameNarrator;}
declare module "net.minecraft.client.Minecraft$GameLoadCookie" {
import {$RealmsClient, $RealmsClient$$Type} from "com.mojang.realmsclient.client.RealmsClient"
import {$GameConfig$QuickPlayData, $GameConfig$QuickPlayData$$Type} from "net.minecraft.client.main.GameConfig$QuickPlayData"
import {$Record} from "java.lang.Record"

export class $Minecraft$GameLoadCookie extends $Record {
constructor(realmsClient: $RealmsClient$$Type, quickPlayData: $GameConfig$QuickPlayData$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "realmsClient"(): $RealmsClient
public "quickPlayData"(): $GameConfig$QuickPlayData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Minecraft$GameLoadCookie$$Type = ({"realmsClient"?: $RealmsClient$$Type, "quickPlayData"?: $GameConfig$QuickPlayData$$Type}) | ([realmsClient?: $RealmsClient$$Type, quickPlayData?: $GameConfig$QuickPlayData$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Minecraft$GameLoadCookie$$Original = $Minecraft$GameLoadCookie;}
declare module "net.minecraft.client.GuiMessageTag" {
import {$GuiMessageTag$Icon, $GuiMessageTag$Icon$$Type} from "net.minecraft.client.GuiMessageTag$Icon"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Record} from "java.lang.Record"

export class $GuiMessageTag extends $Record {
constructor(arg0: integer, arg1: $GuiMessageTag$Icon$$Type, arg2: $Component$$Type, arg3: StringJS)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "system"(): $GuiMessageTag
public "text"(): $Component
public "logTag"(): StringJS
public "icon"(): $GuiMessageTag$Icon
public static "systemSinglePlayer"(): $GuiMessageTag
public "indicatorColor"(): integer
public static "chatError"(): $GuiMessageTag
public static "chatModified"(arg0: StringJS): $GuiMessageTag
public static "chatNotSecure"(): $GuiMessageTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiMessageTag$$Type = ({"text"?: $Component$$Type, "logTag"?: StringJS, "icon"?: $GuiMessageTag$Icon$$Type, "indicatorColor"?: integer}) | ([text?: $Component$$Type, logTag?: StringJS, icon?: $GuiMessageTag$Icon$$Type, indicatorColor?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiMessageTag$$Original = $GuiMessageTag;}
declare module "net.minecraft.client.KeyMapping" {
import {$KeyMappingAccessor$$Interface as $KeyMappingAccessor$0$$Interface} from "net.blay09.mods.kuma.mixin.KeyMappingAccessor"
import {$Map} from "java.util.Map"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$KeyBindingAccessor$$Interface} from "net.fabricmc.fabric.mixin.event.interaction.client.KeyBindingAccessor"
import {$IKeyConflictContext, $IKeyConflictContext$$Type} from "net.neoforged.neoforge.client.settings.IKeyConflictContext"
import {$Component} from "net.minecraft.network.chat.Component"
import {$KeyMappingAccessor$$Interface} from "net.blay09.mods.balm.mixin.KeyMappingAccessor"
import {$AccessKeyMapping$$Interface} from "com.blamejared.controlling.mixin.AccessKeyMapping"
import {$KeyModifier, $KeyModifier$$Type} from "net.neoforged.neoforge.client.settings.KeyModifier"
import {$Supplier} from "java.util.function.Supplier"
import {$KeyBindingAccessor$$Interface as $KeyBindingAccessor$0$$Interface} from "net.fabricmc.fabric.mixin.client.keybinding.KeyBindingAccessor"
import {$AccessorKeyMapping$$Interface as $AccessorKeyMapping$0$$Interface} from "vazkii.patchouli.mixin.client.AccessorKeyMapping"
import {$AccessorKeyMapping$$Interface} from "com.railwayteam.railways.mixin.conductor_possession.AccessorKeyMapping"
import {$InputConstants$Key, $InputConstants$Key$$Type} from "com.mojang.blaze3d.platform.InputConstants$Key"
import {$InputConstants$Type$$Type} from "com.mojang.blaze3d.platform.InputConstants$Type"
import {$IKeyMappingExtension$$Interface} from "net.neoforged.neoforge.client.extensions.IKeyMappingExtension"

export class $KeyMapping implements $Comparable$$Interface<($KeyMapping)>, $IKeyMappingExtension$$Interface, $KeyMappingAccessor$$Interface, $KeyMappingAccessor$0$$Interface, $AccessKeyMapping$$Interface, $AccessorKeyMapping$$Interface, $AccessorKeyMapping$0$$Interface, $KeyBindingAccessor$0$$Interface, $KeyBindingAccessor$$Interface {
static readonly "ALL": $Map<(StringJS), ($KeyMapping)>
static readonly "CATEGORY_INTERFACE": StringJS
static readonly "CATEGORY_MULTIPLAYER": StringJS
static readonly "CATEGORY_CREATIVE": StringJS
static readonly "CATEGORY_MOVEMENT": StringJS
static readonly "CATEGORY_GAMEPLAY": StringJS
static readonly "CATEGORY_MISC": StringJS
 "key": $InputConstants$Key
static readonly "CATEGORY_INVENTORY": StringJS

constructor(arg0: StringJS, arg1: $IKeyConflictContext$$Type, arg2: $InputConstants$Key$$Type, arg3: StringJS)
constructor(arg0: StringJS, arg1: integer, arg2: StringJS)
constructor(arg0: StringJS, arg1: $InputConstants$Type$$Type, arg2: integer, arg3: StringJS)
constructor(arg0: StringJS, arg1: $IKeyConflictContext$$Type, arg2: $InputConstants$Type$$Type, arg3: integer, arg4: StringJS)
constructor(arg0: StringJS, arg1: $IKeyConflictContext$$Type, arg2: $KeyModifier$$Type, arg3: $InputConstants$Type$$Type, arg4: integer, arg5: StringJS)
constructor(arg0: StringJS, arg1: $IKeyConflictContext$$Type, arg2: $KeyModifier$$Type, arg3: $InputConstants$Key$$Type, arg4: StringJS)

public "getName"(): StringJS
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $KeyMapping$$Type): integer
public "matches"(arg0: integer, arg1: integer): boolean
public "getKey"(): $InputConstants$Key
public static "set"(arg0: $InputConstants$Key$$Type, arg1: boolean): void
public "isDefault"(): boolean
public static "setAll"(): void
public "getDefaultKeyModifier"(): $KeyModifier
public "getTranslatedKeyMessage"(): $Component
public "getKeyConflictContext"(): $IKeyConflictContext
public "setKeyConflictContext"(arg0: $IKeyConflictContext$$Type): void
public "setKeyModifierAndCode"(arg0: $KeyModifier$$Type, arg1: $InputConstants$Key$$Type): void
public "setKey"(arg0: $InputConstants$Key$$Type): void
public "isUnbound"(): boolean
public static "releaseAll"(): void
public "isDown"(): boolean
public static "getAllKeyMappings$patchouli_$md$1ae6d3$0"(): $Map
public "getCategory"(): StringJS
public "matchesMouse"(arg0: integer): boolean
public "same"(arg0: $KeyMapping$$Type): boolean
public static "fabric_getCategoryMap$fabric_key_binding_api_v1_$md$1ae6d3$1"(): $Map
public "fabric_getTimesPressed"(): integer
public "consumeClick"(): boolean
public static "resetToggleKeys"(): void
public static "createNameSupplier"(arg0: StringJS): $Supplier<($Component)>
public "fabric_getBoundKey"(): $InputConstants$Key
public "getKeyModifier"(): $KeyModifier
public static "resetMapping"(): void
public "controlling$getKey"(): $InputConstants$Key
public static "click"(arg0: $InputConstants$Key$$Type): void
public "setDown"(arg0: boolean): void
public "saveString"(): StringJS
public "getDefaultKey"(): $InputConstants$Key
public "getDisplayName"(): $Component
public "hasKeyModifierConflict"(arg0: $KeyMapping$$Type): boolean
public "setToDefault"(): void
public "isActiveAndMatches"(arg0: $InputConstants$Key$$Type): boolean
public "isConflictContextAndModifierActive"(): boolean
public static "getAllKeyMappings"(): $Map<(StringJS), ($KeyMapping)>
public static "fabric_getCategoryMap"(): $Map<(StringJS), (integer)>
get "name"(): StringJS
get "default"(): boolean
get "all"(): void
get "defaultKeyModifier"(): $KeyModifier
get "translatedKeyMessage"(): $Component
get "keyConflictContext"(): $IKeyConflictContext
set "keyConflictContext"(value: $IKeyConflictContext$$Type)
get "unbound"(): boolean
get "down"(): boolean
get "allKeyMappings$patchouli_$md$1ae6d3$0"(): $Map
get "category"(): StringJS
get "keyModifier"(): $KeyModifier
set "down"(value: boolean)
get "defaultKey"(): $InputConstants$Key
get "displayName"(): $Component
get "toDefault"(): void
get "conflictContextAndModifierActive"(): boolean
get "allKeyMappings"(): $Map<(StringJS), ($KeyMapping)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyMapping$$Type = ($KeyMapping);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyMapping$$Original = $KeyMapping;}
declare module "net.minecraft.client.OptionInstance$ValueSet" {
import {$OptionInstance$TooltipSupplier$$Type} from "net.minecraft.client.OptionInstance$TooltipSupplier"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Optional} from "java.util.Optional"
import {$Function} from "java.util.function.Function"
import {$AbstractWidget} from "net.minecraft.client.gui.components.AbstractWidget"
import {$OptionInstance} from "net.minecraft.client.OptionInstance"
import {$Options$$Type} from "net.minecraft.client.Options"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $OptionInstance$ValueSet$$Interface<T> {
}

export class $OptionInstance$ValueSet<T> implements $OptionInstance$ValueSet$$Interface {
 "validateValue"(arg0: T): $Optional<(T)>
 "codec"(): $Codec<(T)>
 "createButton"(arg0: $OptionInstance$TooltipSupplier$$Type<(T)>, arg1: $Options$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: $Consumer$$Type<(T)>): $Function<($OptionInstance<(T)>), ($AbstractWidget)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionInstance$ValueSet$$Type<T> = ($OptionInstance$ValueSet<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OptionInstance$ValueSet$$Original<T> = $OptionInstance$ValueSet<(T)>;}
declare module "net.minecraft.client.OptionInstance$CycleableValueSet" {
import {$OptionInstance$TooltipSupplier$$Type} from "net.minecraft.client.OptionInstance$TooltipSupplier"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Optional} from "java.util.Optional"
import {$Function} from "java.util.function.Function"
import {$AbstractWidget} from "net.minecraft.client.gui.components.AbstractWidget"
import {$OptionInstance} from "net.minecraft.client.OptionInstance"
import {$OptionInstance$ValueSet$$Interface} from "net.minecraft.client.OptionInstance$ValueSet"
import {$Options$$Type} from "net.minecraft.client.Options"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $OptionInstance$CycleableValueSet$$Interface<T> extends $OptionInstance$ValueSet$$Interface<(T)> {
}

export class $OptionInstance$CycleableValueSet<T> implements $OptionInstance$CycleableValueSet$$Interface {
 "validateValue"(arg0: T): $Optional<(T)>
 "codec"(): $Codec<(T)>
 "createButton"(arg0: $OptionInstance$TooltipSupplier$$Type<(T)>, arg1: $Options$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: $Consumer$$Type<(T)>): $Function<($OptionInstance<(T)>), ($AbstractWidget)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionInstance$CycleableValueSet$$Type<T> = ($OptionInstance$CycleableValueSet<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OptionInstance$CycleableValueSet$$Original<T> = $OptionInstance$CycleableValueSet<(T)>;}
declare module "net.minecraft.client.ToggleKeyMapping" {
import {$Map} from "java.util.Map"
import {$InputConstants$Key} from "com.mojang.blaze3d.platform.InputConstants$Key"
import {$BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"
import {$KeyMapping} from "net.minecraft.client.KeyMapping"

export class $ToggleKeyMapping extends $KeyMapping {
static readonly "ALL": $Map<(StringJS), ($KeyMapping)>
static readonly "CATEGORY_INTERFACE": StringJS
static readonly "CATEGORY_MULTIPLAYER": StringJS
static readonly "CATEGORY_CREATIVE": StringJS
static readonly "CATEGORY_MOVEMENT": StringJS
static readonly "CATEGORY_GAMEPLAY": StringJS
static readonly "CATEGORY_MISC": StringJS
 "key": $InputConstants$Key
static readonly "CATEGORY_INVENTORY": StringJS

constructor(arg0: StringJS, arg1: integer, arg2: StringJS, arg3: $BooleanSupplier$$Type)

public "reset"(): void
public "isDown"(): boolean
public "modifyReturnValue$cpn000$xaerominimap$onIsDown"(arg0: boolean): boolean
public "setDown"(arg0: boolean): void
public static "getAllKeyMappings"(): $Map<(StringJS), ($KeyMapping)>
public static "fabric_getCategoryMap"(): $Map<(StringJS), (integer)>
get "down"(): boolean
set "down"(value: boolean)
get "allKeyMappings"(): $Map<(StringJS), ($KeyMapping)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToggleKeyMapping$$Type = ($ToggleKeyMapping);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ToggleKeyMapping$$Original = $ToggleKeyMapping;}
declare module "net.minecraft.client.CloudStatus" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$OptionEnum$$Interface} from "net.minecraft.util.OptionEnum"
import {$Component} from "net.minecraft.network.chat.Component"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $CloudStatus extends $Enum<($CloudStatus)> implements $OptionEnum$$Interface, $StringRepresentable$$Interface {
static readonly "FANCY": $CloudStatus
static readonly "CODEC": $Codec<($CloudStatus)>
static readonly "FAST": $CloudStatus
static readonly "OFF": $CloudStatus

public static "values"(): ($CloudStatus)[]
public static "valueOf"(arg0: StringJS): $CloudStatus
public "getKey"(): StringJS
public "getId"(): integer
public "getSerializedName"(): StringJS
public "getCaption"(): $Component
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "key"(): StringJS
get "id"(): integer
get "serializedName"(): StringJS
get "caption"(): $Component
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CloudStatus$$Type = (("false") | ("fast") | ("true"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CloudStatus$$Original = $CloudStatus;}
declare module "net.minecraft.client.ResourceLoadStateTracker$ReloadReason" {
import {$Enum} from "java.lang.Enum"

export class $ResourceLoadStateTracker$ReloadReason extends $Enum<($ResourceLoadStateTracker$ReloadReason)> {
static readonly "INITIAL": $ResourceLoadStateTracker$ReloadReason
static readonly "MANUAL": $ResourceLoadStateTracker$ReloadReason
static readonly "UNKNOWN": $ResourceLoadStateTracker$ReloadReason

public static "values"(): ($ResourceLoadStateTracker$ReloadReason)[]
public static "valueOf"(arg0: StringJS): $ResourceLoadStateTracker$ReloadReason
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceLoadStateTracker$ReloadReason$$Type = (("initial") | ("manual") | ("unknown"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResourceLoadStateTracker$ReloadReason$$Original = $ResourceLoadStateTracker$ReloadReason;}
declare module "net.minecraft.client.GuiMessage" {
import {$MessageSignature, $MessageSignature$$Type} from "net.minecraft.network.chat.MessageSignature"
import {$GuiMessageTag$Icon} from "net.minecraft.client.GuiMessageTag$Icon"
import {$HeadData, $HeadData$$Type} from "dzwdz.chat_heads.HeadData"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$HeadRenderable$$Interface} from "dzwdz.chat_heads.mixininterface.HeadRenderable"
import {$GuiMessageTag, $GuiMessageTag$$Type} from "net.minecraft.client.GuiMessageTag"
import {$Record} from "java.lang.Record"

export class $GuiMessage extends $Record implements $HeadRenderable$$Interface {
 "chatheads$headData": $HeadData

constructor(arg0: integer, arg1: $Component$$Type, arg2: $MessageSignature$$Type, arg3: $GuiMessageTag$$Type)

public "signature"(): $MessageSignature
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "tag"(): $GuiMessageTag
public "content"(): $Component
public "addedTime"(): integer
public "icon"(): $GuiMessageTag$Icon
public "chatheads$getHeadData"(): $HeadData
public "chatheads$setHeadData"(headData: $HeadData$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiMessage$$Type = ({"addedTime"?: integer, "signature"?: $MessageSignature$$Type, "content"?: $Component$$Type, "tag"?: $GuiMessageTag$$Type}) | ([addedTime?: integer, signature?: $MessageSignature$$Type, content?: $Component$$Type, tag?: $GuiMessageTag$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiMessage$$Original = $GuiMessage;}
