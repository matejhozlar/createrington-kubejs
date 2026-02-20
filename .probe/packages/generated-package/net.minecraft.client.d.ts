declare module "net.minecraft.client.Options" {
import {$HumanoidArm} from "net.minecraft.world.entity.HumanoidArm"
import {$List} from "java.util.List"
import {$NarratorStatus} from "net.minecraft.client.NarratorStatus"
import {$TutorialSteps} from "net.minecraft.client.tutorial.TutorialSteps"
import {$PlayerModelPart$$Type} from "net.minecraft.world.entity.player.PlayerModelPart"
import {$PrioritizeChunkUpdates} from "net.minecraft.client.PrioritizeChunkUpdates"
import {$ParticleStatus} from "net.minecraft.client.ParticleStatus"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$IMixinOptions$$Interface} from "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinOptions"
import {$SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$Set} from "java.util.Set"
import {$Gson} from "com.google.gson.Gson"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$CloudStatus} from "net.minecraft.client.CloudStatus"
import {$AttackIndicatorStatus} from "net.minecraft.client.AttackIndicatorStatus"
import {$Logger} from "org.slf4j.Logger"
import {$File, $File$$Type} from "java.io.File"
import {$PackRepository$$Type} from "net.minecraft.server.packs.repository.PackRepository"
import {$CameraType, $CameraType$$Type} from "net.minecraft.client.CameraType"
import {$KeyMapping, $KeyMapping$$Type} from "net.minecraft.client.KeyMapping"
import {$ClientInformation} from "net.minecraft.server.level.ClientInformation"
import {$InputConstants$Key$$Type} from "com.mojang.blaze3d.platform.InputConstants$Key"
import {$Options$FieldAccess$$Type} from "net.minecraft.client.Options$FieldAccess"
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

public "glintSpeed"(): $OptionInstance<(double)>
public "bobView"(): $OptionInstance<(boolean)>
public "load"(arg0: boolean): void
public "load"(): void
public "save"(): void
public "getFile"(): $File
public static "isTrue"(arg0: StringJS): boolean
public "chatScale"(): $OptionInstance<(double)>
public "chatWidth"(): $OptionInstance<(double)>
public "getMenuBackgroundBlurriness"(): integer
public "darkMojangStudiosBackground"(): $OptionInstance<(boolean)>
public "invokeProcessOptionsFancyMenu"(arg0: $Options$FieldAccess$$Type): void
public "onboardingAccessibilityFinished"(): void
public "fov"(): $OptionInstance<(integer)>
public "broadcastOptions"(): void
public "isModelPartEnabled"(arg0: $PlayerModelPart$$Type): boolean
public "toggleModelPart"(arg0: $PlayerModelPart$$Type, arg1: boolean): void
public static "genericValueLabel"(arg0: $Component$$Type, arg1: $Component$$Type): $Component
public static "genericValueLabel"(arg0: $Component$$Type, arg1: integer): $Component
public "chatLineSpacing"(): $OptionInstance<(double)>
public "chatHeightFocused"(): $OptionInstance<(double)>
public "showSubtitles"(): $OptionInstance<(boolean)>
public "sensitivity"(): $OptionInstance<(double)>
public "toggleCrouch"(): $OptionInstance<(boolean)>
public "entityShadows"(): $OptionInstance<(boolean)>
public "autoSuggestions"(): $OptionInstance<(boolean)>
public "narratorHotkey"(): $OptionInstance<(boolean)>
public "useNativeTransport"(): boolean
public "onlyShowSecureChat"(): $OptionInstance<(boolean)>
public "allowServerListing"(): $OptionInstance<(boolean)>
public "soundDevice"(): $OptionInstance<(StringJS)>
public "toggleSprint"(): $OptionInstance<(boolean)>
public "panoramaSpeed"(): $OptionInstance<(double)>
public "highContrast"(): $OptionInstance<(boolean)>
public "directionalAudio"(): $OptionInstance<(boolean)>
public "invertYMouse"(): $OptionInstance<(boolean)>
public "attackIndicator"(): $OptionInstance<($AttackIndicatorStatus)>
public "hideMatchedNames"(): $OptionInstance<(boolean)>
public "guiScale"(): $OptionInstance<(integer)>
public "particles"(): $OptionInstance<($ParticleStatus)>
public "narrator"(): $OptionInstance<($NarratorStatus)>
public "chatDelay"(): $OptionInstance<(double)>
public "fullscreen"(): $OptionInstance<(boolean)>
public "setCameraType"(arg0: $CameraType$$Type): void
public "getCameraType"(): $CameraType
public "ambientOcclusion"(): $OptionInstance<(boolean)>
public "renderDistance"(): $OptionInstance<(integer)>
public "chatVisibility"(): $OptionInstance<($ChatVisiblity)>
public "reducedDebugInfo"(): $OptionInstance<(boolean)>
public static "isFalse"(arg0: StringJS): boolean
public "mainHand"(): $OptionInstance<($HumanoidArm)>
public "chatColors"(): $OptionInstance<(boolean)>
public "gamma"(): $OptionInstance<(double)>
public "getBackgroundColor"(arg0: integer): integer
public "getBackgroundColor"(arg0: float): integer
public "prioritizeChunkUpdates"(): $OptionInstance<($PrioritizeChunkUpdates)>
public "fovEffectScale"(): $OptionInstance<(double)>
public "screenEffectScale"(): $OptionInstance<(double)>
public "damageTiltStrength"(): $OptionInstance<(double)>
public "chatOpacity"(): $OptionInstance<(double)>
public "autoJump"(): $OptionInstance<(boolean)>
public "setKey"(arg0: $KeyMapping$$Type, arg1: $InputConstants$Key$$Type): void
public "forceUnicodeFont"(): $OptionInstance<(boolean)>
public "cloudStatus"(): $OptionInstance<($CloudStatus)>
public "biomeBlendRadius"(): $OptionInstance<(integer)>
public "graphicsMode"(): $OptionInstance<($GraphicsStatus)>
public "mipmapLevels"(): $OptionInstance<(integer)>
public "enableVsync"(): $OptionInstance<(boolean)>
public "rawMouseInput"(): $OptionInstance<(boolean)>
public "glintStrength"(): $OptionInstance<(double)>
public "framerateLimit"(): $OptionInstance<(integer)>
public "hideLightningFlash"(): $OptionInstance<(boolean)>
public "simulationDistance"(): $OptionInstance<(integer)>
public "hideSplashTexts"(): $OptionInstance<(boolean)>
public "touchscreen"(): $OptionInstance<(boolean)>
public "operatorItemsTab"(): $OptionInstance<(boolean)>
public "notificationDisplayTime"(): $OptionInstance<(double)>
public "menuBackgroundBlurriness"(): $OptionInstance<(integer)>
public "loadSelectedResourcePacks"(arg0: $PackRepository$$Type): void
public "dumpOptionsForReport"(): StringJS
public "getEffectiveRenderDistance"(): integer
public "telemetryOptInExtra"(): $OptionInstance<(boolean)>
public "getCloudsType"(): $CloudStatus
public "getSoundSourceOptionInstance"(arg0: $SoundSource$$Type): $OptionInstance<(double)>
public "setServerRenderDistance"(arg0: integer): void
public "japaneseGlyphVariants"(): $OptionInstance<(boolean)>
public "discreteMouseScroll"(): $OptionInstance<(boolean)>
public "realmsNotifications"(): $OptionInstance<(boolean)>
public "backgroundForChatOnly"(): $OptionInstance<(boolean)>
public "showAutosaveIndicator"(): $OptionInstance<(boolean)>
public "updateResourcePacks"(arg0: $PackRepository$$Type): void
public "getSoundSourceVolume"(arg0: $SoundSource$$Type): float
public "entityDistanceScaling"(): $OptionInstance<(double)>
public "chatHeightUnfocused"(): $OptionInstance<(double)>
public "mouseWheelSensitivity"(): $OptionInstance<(double)>
public "darknessEffectScale"(): $OptionInstance<(double)>
public "getBackgroundOpacity"(arg0: float): float
public static "genericValueOrOffLabel"(arg0: $Component$$Type, arg1: integer): $Component
public "buildPlayerInformation"(): $ClientInformation
public "getModelPartsFancyMenu"(): $Set
public "chatLinksPrompt"(): $OptionInstance<(boolean)>
public "textBackgroundOpacity"(): $OptionInstance<(double)>
public "chatLinks"(): $OptionInstance<(boolean)>
get "file"(): $File
set "cameraType"(value: $CameraType$$Type)
get "cameraType"(): $CameraType
get "effectiveRenderDistance"(): integer
get "cloudsType"(): $CloudStatus
set "serverRenderDistance"(value: integer)
get "modelPartsFancyMenu"(): $Set
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

public "history"(): $Collection<(StringJS)>
public "addCommand"(arg0: StringJS): void
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
import {$OptionInstance} from "net.minecraft.client.OptionInstance"
import {$OptionInstance$CycleableValueSet$$Interface} from "net.minecraft.client.OptionInstance$CycleableValueSet"
import {$Record} from "java.lang.Record"

export class $OptionInstance$Enum<T> extends $Record implements $OptionInstance$CycleableValueSet$$Interface<(T)> {
constructor(arg0: $List$$Type<(T)>, arg1: $Codec$$Type<(T)>)

public "validateValue"(arg0: T): $Optional<(T)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "values"(): $List<(T)>
public "hashCode"(): integer
public "valueListSupplier"(): $CycleButton$ValueListSupplier<(T)>
public "codec"(): $Codec<(T)>
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
import {$MouseHandlerAccessor$$Interface as $MouseHandlerAccessor$0$$Interface} from "com.simibubi.create.foundation.mixin.accessor.MouseHandlerAccessor"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$MouseHandlerAccessor$$Interface as $MouseHandlerAccessor$1$$Interface} from "team.creative.creativecore.mixin.MouseHandlerAccessor"
import {$IMixinMouseHandler$$Interface} from "de.keksuccino.konkrete.mixin.mixins.client.IMixinMouseHandler"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$LocalDoubleRef$$Type} from "com.llamalad7.mixinextras.sugar.ref.LocalDoubleRef"
import {$MouseHandlerAccessor$$Interface} from "net.blay09.mods.balm.mixin.MouseHandlerAccessor"

export class $MouseHandler implements $MouseHandlerAccessor$$Interface, $IMixinMouseHandler$$Interface, $MouseHandlerAccessor$1$$Interface, $MouseHandlerAccessor$0$$Interface {
constructor(arg0: $Minecraft$$Type)

public "setup"(arg0: long): void
public "getActiveButtonKonkrete"(): integer
public "getLastHandleMovementTime"(): double
public "handler$dnn000$ok_zoomer$applyZoomChanges"(arg0: double, arg1: $CallbackInfo$$Type, arg2: $LocalDoubleRef$$Type, arg3: $LocalDoubleRef$$Type, arg4: double): void
public "grabMouse"(): void
public "isMouseGrabbed"(): boolean
public "getMouseY"(): double
public "getMouseX"(): double
public "xpos"(): double
public "ypos"(): double
public "isRightPressed"(): boolean
public "cursorEntered"(): void
public "setIgnoreFirstMove"(): void
public "releaseMouse"(): void
public "handleAccumulatedMovement"(): void
public "isMiddlePressed"(): boolean
public "isLeftPressed"(): boolean
public "getXVelocity"(): double
public "getYVelocity"(): double
public "create$setXPos"(arg0: double): void
public "create$setYPos"(arg0: double): void
set "up"(value: long)
get "activeButtonKonkrete"(): integer
get "lastHandleMovementTime"(): double
get "mouseGrabbed"(): boolean
get "mouseY"(): double
get "mouseX"(): double
get "rightPressed"(): boolean
get "ignoreFirstMove"(): void
get "middlePressed"(): boolean
get "leftPressed"(): boolean
get "XVelocity"(): double
get "YVelocity"(): double
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
public "isFirstPerson"(): boolean
public "cycle"(): $CameraType
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

public "getCollection"(arg0: $RecipeBookCategories$$Type): $List<($RecipeCollection)>
public "setupCollections"(arg0: $Iterable$$Type<($RecipeHolder$$Type<(never)>)>, arg1: $RegistryAccess$$Type): void
public "getCollections"(): $List<($RecipeCollection)>
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
public "shouldNarrateChat"(): boolean
public static "byId"(arg0: integer): $NarratorStatus
public "shouldNarrateSystem"(): boolean
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
import {$OptionEnum$$Interface} from "net.minecraft.util.OptionEnum"
import {$Component} from "net.minecraft.network.chat.Component"

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

public "splitLines"(arg0: $FormattedText$$Type, arg1: integer, arg2: $Style$$Type): $List<($FormattedText)>
public "splitLines"(arg0: StringJS, arg1: integer, arg2: $Style$$Type): $List<($FormattedText)>
public "splitLines"(arg0: StringJS, arg1: integer, arg2: $Style$$Type, arg3: boolean, arg4: $StringSplitter$LinePosConsumer$$Type): void
public "splitLines"(arg0: $FormattedText$$Type, arg1: integer, arg2: $Style$$Type, arg3: $FormattedText$$Type): $List<($FormattedText)>
public "splitLines"(arg0: $FormattedText$$Type, arg1: integer, arg2: $Style$$Type, arg3: $BiConsumer$$Type<($FormattedText), (boolean)>): void
public "stringWidth"(arg0: $FormattedCharSequence$$Type): float
public "stringWidth"(arg0: $FormattedText$$Type): float
public "stringWidth"(arg0: StringJS): float
public "componentStyleAtWidth"(arg0: $FormattedText$$Type, arg1: integer): $Style
public "componentStyleAtWidth"(arg0: $FormattedCharSequence$$Type, arg1: integer): $Style
public static "getWordPosition"(arg0: StringJS, arg1: integer, arg2: integer, arg3: boolean): integer
public "plainIndexAtWidth"(arg0: StringJS, arg1: integer, arg2: $Style$$Type): integer
public "getWidthProvider"(): $StringSplitter$WidthProvider
public "findLineBreak"(arg0: StringJS, arg1: integer, arg2: $Style$$Type): integer
public "formattedHeadByWidth"(arg0: StringJS, arg1: integer, arg2: $Style$$Type): StringJS
public "formattedIndexByWidth"(arg0: StringJS, arg1: integer, arg2: $Style$$Type): integer
public "plainTailByWidth"(arg0: StringJS, arg1: integer, arg2: $Style$$Type): StringJS
public "plainHeadByWidth"(arg0: StringJS, arg1: integer, arg2: $Style$$Type): StringJS
public "headByWidth"(arg0: $FormattedText$$Type, arg1: integer, arg2: $Style$$Type): $FormattedText
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
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
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
static readonly "REFURBISHED_FURNITURE_FREEZER_ITEMS": $RecipeBookCategories
static readonly "FURNACE_MISC": $RecipeBookCategories
static readonly "REFURBISHED_FURNITURE_OVEN_ITEMS": $RecipeBookCategories

public static "values"(): ($RecipeBookCategories)[]
public static "valueOf"(arg0: StringJS): $RecipeBookCategories
public static "getExtensionInfo"(): $ExtensionInfo
public static "getCategories"(arg0: $RecipeBookType$$Type): $List<($RecipeBookCategories)>
public static "setAGGREGATE_CATEGORIES$connector_$md$6d3b50$0"(arg0: $Map$$Type): void
public "getIconItems"(): $List<($ItemStack)>
public static "setAGGREGATE_CATEGORIES"(arg0: $Map$$Type<($RecipeBookCategories$$Type), ($List$$Type<($RecipeBookCategories$$Type)>)>): void
get "extensionInfo"(): $ExtensionInfo
set "AGGREGATE_CATEGORIES$connector_$md$6d3b50$0"(value: $Map$$Type)
get "iconItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeBookCategories$$Type = (("crafting_search") | ("crafting_building_blocks") | ("crafting_redstone") | ("crafting_equipment") | ("crafting_misc") | ("furnace_search") | ("furnace_food") | ("furnace_blocks") | ("furnace_misc") | ("blast_furnace_search") | ("blast_furnace_blocks") | ("blast_furnace_misc") | ("smoker_search") | ("smoker_food") | ("stonecutter") | ("smithing") | ("campfire") | ("unknown") | ("farmersdelight_cooking_drinks") | ("farmersdelight_cooking_meals") | ("farmersdelight_cooking_misc") | ("farmersdelight_cooking_search") | ("refurbished_furniture_freezer_blocks") | ("refurbished_furniture_freezer_food") | ("refurbished_furniture_freezer_items") | ("refurbished_furniture_freezer_misc") | ("refurbished_furniture_freezer_search") | ("refurbished_furniture_microwave_blocks") | ("refurbished_furniture_microwave_food") | ("refurbished_furniture_microwave_items") | ("refurbished_furniture_microwave_misc") | ("refurbished_furniture_microwave_search") | ("refurbished_furniture_oven_blocks") | ("refurbished_furniture_oven_food") | ("refurbished_furniture_oven_items") | ("refurbished_furniture_oven_misc") | ("refurbished_furniture_oven_search"));
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
import {$ClientPacketListener} from "net.minecraft.client.multiplayer.ClientPacketListener"
import {$MobEffectTextureManager} from "net.minecraft.client.resources.MobEffectTextureManager"
import {$Minecraft$ChatStatus} from "net.minecraft.client.Minecraft$ChatStatus"
import {$IXaeroMinimapMinecraftClient$$Interface} from "xaero.common.core.IXaeroMinimapMinecraftClient"
import {$ResourceLoadStateTracker} from "net.minecraft.client.ResourceLoadStateTracker"
import {$ServerData} from "net.minecraft.client.multiplayer.ServerData"
import {$LocalPlayer} from "net.minecraft.client.player.LocalPlayer"
import {$MinecraftClientKJS$$Interface} from "dev.latvian.mods.kubejs.core.MinecraftClientKJS"
import {$Proxy} from "java.net.Proxy"
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
import {$SkinManager} from "net.minecraft.client.resources.SkinManager"
import {$Thread} from "java.lang.Thread"
import {$MinecraftSessionService} from "com.mojang.authlib.minecraft.MinecraftSessionService"
import {$Options, $Options$$Type} from "net.minecraft.client.Options"
import {$Tutorial} from "net.minecraft.client.tutorial.Tutorial"
import {$TextureManager} from "net.minecraft.client.renderer.texture.TextureManager"
import {$MinecraftClientAccessor$$Interface as $MinecraftClientAccessor$0$$Interface} from "net.fabricmc.fabric.mixin.networking.client.accessor.MinecraftClientAccessor"
import {$Window} from "com.mojang.blaze3d.platform.Window"
import {$Music} from "net.minecraft.sounds.Music"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$EntityModelSet} from "net.minecraft.client.model.geom.EntityModelSet"
import {$ResourceManager} from "net.minecraft.server.packs.resources.ResourceManager"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$DirectoryValidator} from "net.minecraft.world.level.validation.DirectoryValidator"
import {$ReportingContext} from "net.minecraft.client.multiplayer.chat.report.ReportingContext"
import {$Font} from "net.minecraft.client.gui.Font"
import {$IMinecraftExtension$$Interface} from "net.neoforged.neoforge.client.extensions.IMinecraftExtension"
import {$Minecraft$GameLoadCookie$$Type} from "net.minecraft.client.Minecraft$GameLoadCookie"
import {$DebugScreenOverlay} from "net.minecraft.client.gui.components.DebugScreenOverlay"
import {$Function} from "java.util.function.Function"
import {$WorldStem$$Type} from "net.minecraft.server.WorldStem"
import {$SoundManager} from "net.minecraft.client.sounds.SoundManager"
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
import {$ProfilerFiller} from "net.minecraft.util.profiling.ProfilerFiller"
import {$ItemRenderer} from "net.minecraft.client.renderer.entity.ItemRenderer"
import {$DataFixer} from "com.mojang.datafixers.DataFixer"
import {$Overlay, $Overlay$$Type} from "net.minecraft.client.gui.screens.Overlay"
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
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$HotbarManager} from "net.minecraft.client.HotbarManager"
import {$BlockEntityRenderDispatcher} from "net.minecraft.client.renderer.blockentity.BlockEntityRenderDispatcher"
import {$IntegratedServer} from "net.minecraft.client.server.IntegratedServer"
import {$GuiSpriteManager} from "net.minecraft.client.gui.GuiSpriteManager"
import {$LevelStorageSource} from "net.minecraft.world.level.storage.LevelStorageSource"
import {$StoringChunkProgressListener} from "net.minecraft.server.level.progress.StoringChunkProgressListener"
import {$DownloadedPackSource} from "net.minecraft.client.resources.server.DownloadedPackSource"
import {$BanDetails} from "com.mojang.authlib.minecraft.BanDetails"
import {$DeltaTracker} from "net.minecraft.client.DeltaTracker"
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
import {$LanguageManager, $LanguageManager$$Type} from "net.minecraft.client.resources.language.LanguageManager"
import {$KeyMapping$$Type} from "net.minecraft.client.KeyMapping"
import {$ModelManager} from "net.minecraft.client.resources.model.ModelManager"
import {$BlockColors} from "net.minecraft.client.color.block.BlockColors"
import {$WorldOpenFlows} from "net.minecraft.client.gui.screens.worldselection.WorldOpenFlows"
import {$ItemColors} from "net.minecraft.client.color.item.ItemColors"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$EntityRenderDispatcher} from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"
import {$Connection} from "net.minecraft.network.Connection"
import {$ReportEnvironment$$Type} from "net.minecraft.client.multiplayer.chat.report.ReportEnvironment"
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

public "getConnection"(): $ClientPacketListener
public "run"(): void
public static "getInstance"(): $Minecraft
public "stop"(): void
public "destroy"(): void
public "close"(): void
public "managedBlock"(pIsDone: $BooleanSupplier$$Type): void
public "tick"(): void
public "setLevel"(arg0: $ClientLevel$$Type, arg1: $ReceivingLevelScreen$Reason$$Type): void
public "getProxy"(): $Proxy
public "handler$bia000$transition$fillReport"(theCrash: $CrashReport$$Type, ci: $CallbackInfoReturnable$$Type): void
public "getCurrentServer"(): $ServerData
public "pauseGame"(arg0: boolean): void
public "getFps"(): integer
public "isBlocked"(arg0: $UUID$$Type): boolean
public "getUser"(): $User
public "isDemo"(): boolean
public "shouldRun"(arg0: $Runnable$$Type): boolean
public "getOverlay"(): $Overlay
public "isPaused"(): boolean
public "setScreen"(arg0: $Screen$$Type): void
public "getToasts"(): $ToastComponent
public "delayCrash"(arg0: $CrashReport$$Type): void
public static "fillReport"(arg0: $Minecraft$$Type, arg1: $LanguageManager$$Type, arg2: StringJS, arg3: $Options$$Type, arg4: $CrashReport$$Type): void
public "fillReport"(arg0: $CrashReport$$Type): $CrashReport
public "disconnect"(): void
public "disconnect"(arg0: $Screen$$Type): void
public "disconnect"(arg0: $Screen$$Type, arg1: boolean): void
public "getVanillaPackResources"(): $VanillaPackResources
public "getCameraEntity"(): $Entity
public "clearClientLevel"(arg0: $Screen$$Type): void
public "forceSetScreen"(arg0: $Screen$$Type): void
public "allowsTelemetry"(): boolean
public "getGpuUtilization"(): double
public "isNameBanned"(): boolean
public "allowsRealms"(): boolean
public "doWorldLoad"(arg0: $LevelStorageSource$LevelStorageAccess$$Type, arg1: $PackRepository$$Type, arg2: $WorldStem$$Type, arg3: boolean): void
public "addCustomNbtData"(arg0: $ItemStack$$Type, arg1: $BlockEntity$$Type, arg2: $RegistryAccess$$Type): void
public static "useFancyGraphics"(): boolean
public "getGameProfile"(): $GameProfile
public "getTextureAtlas"(arg0: $ResourceLocation$$Type): $Function<($ResourceLocation), ($TextureAtlasSprite)>
public "getLanguageManager"(): $LanguageManager
public static "renderNames"(): boolean
public "isLocalPlayer"(arg0: $UUID$$Type): boolean
public "getSoundManager"(): $SoundManager
public "delayTextureReload"(): $CompletableFuture<(void)>
public "isSingleplayer"(): boolean
public static "getLauncherBrand"(): StringJS
public "getResourceManager"(): $ResourceManager
public "getLastInputType"(): $InputType
public "setCameraEntity"(arg0: $Entity$$Type): void
public "getSkinManager"(): $SkinManager
public "getItemColors"(): $ItemColors
public "getNarrator"(): $GameNarrator
public "getRunningThread"(): $Thread
public "isWindowActive"(): boolean
public "getChatListener"(): $ChatListener
public "getTutorial"(): $Tutorial
public "updateMaxMipLevel"(arg0: integer): void
public "getEntityModels"(): $EntityModelSet
public "wrapRunnable"(arg0: $Runnable$$Type): $Runnable
public "getHotbarManager"(): $HotbarManager
public "getBlockColors"(): $BlockColors
public "getSplashManager"(): $SplashManager
public "getFixerUpper"(): $DataFixer
public "getTitle"(): StringJS
public "create$setMissTime"(arg0: integer): void
public "handler$gcl000$fabric_events_interaction_v0$cancelItemPick"(arg0: $CallbackInfo$$Type): void
public "handler$fef000$armorposer$shouldEntityAppearGlowing"(arg0: $Entity$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "getItemRenderer"(): $ItemRenderer
public "quickPlayLog"(): $QuickPlayLog
public "realmsDataFetcher"(): $RealmsDataFetcher
public "renderBuffers"(): $RenderBuffers
public "allowsMultiplayer"(): boolean
public "isLocalServer"(): boolean
public "getGuiSprites"(): $GuiSpriteManager
public static "crash"(arg0: $Minecraft$$Type, arg1: $File$$Type, arg2: $CrashReport$$Type): void
public "isRunning"(): boolean
public "getProfiler"(): $ProfilerFiller
public "getLaunchedVersion"(): StringJS
public "getVersionType"(): StringJS
public "delayCrashRaw"(arg0: $CrashReport$$Type): void
public "multiplayerBan"(): $BanDetails
public "resizeDisplay"(): void
public "isEnforceUnicode"(): boolean
public "getModelManager"(): $ModelManager
public "getDebugOverlay"(): $DebugScreenOverlay
public static "checkModStatus"(): $ModCheck
public "updateTitle"(): void
public "isGameLoadFinished"(): boolean
public "cursorEntered"(): void
public "getFrameTimeNs"(): long
public "getChatStatus"(): $Minecraft$ChatStatus
public "getLevelSource"(): $LevelStorageSource
public "setLastInputType"(arg0: $InputType$$Type): void
public "getMusicManager"(): $MusicManager
public "getBlockRenderer"(): $BlockRenderDispatcher
public "commandHistory"(): $CommandHistory
public "updateFontOptions"(): void
public "directoryValidator"(): $DirectoryValidator
public "setWindowActive"(arg0: boolean): void
public "setOverlay"(arg0: $Overlay$$Type): void
public "getWindow"(): $Window
public "getTimer"(): $DeltaTracker
public "getEntityRenderDispatcher"(): $EntityRenderDispatcher
public "getMainRenderTarget"(): $RenderTarget
public "reloadResourcePacks"(): $CompletableFuture<(void)>
public "debugClientMetricsStart"(arg0: $Consumer$$Type<($Component)>): boolean
public "getSingleplayerServer"(): $IntegratedServer
public "debugFpsMeterKeyPress"(arg0: integer): void
public "emergencySaveAndCrash"(arg0: $CrashReport$$Type): void
public "hasSingleplayerServer"(): boolean
public "clearResourcePacksOnError"(arg0: $Throwable$$Type, arg1: $Component$$Type, arg2: $Minecraft$GameLoadCookie$$Type): void
public "handler$bai000$balm$run"(arg0: $CallbackInfo$$Type): void
public "getResourcePackRepository"(): $PackRepository
public "getSituationalMusic"(): $Music
public "updateReportEnvironment"(arg0: $ReportEnvironment$$Type): void
public "getGpuWarnlistManager"(): $GpuWarnlistManager
public "createWorldOpenFlows"(): $WorldOpenFlows
public "getTelemetryManager"(): $ClientTelemetryManager
public static "useShaderTransparency"(): boolean
public "getDownloadedPackSource"(): $DownloadedPackSource
public "getProfileKeyPairManager"(): $ProfileKeyPairManager
public "getResourcePackDirectory"(): $Path
public "extraTelemetryAvailable"(): boolean
public "telemetryOptInExtra"(): boolean
public static "useAmbientOcclusion"(): boolean
public "getProgressListener"(): $StoringChunkProgressListener
public "showOnlyReducedInfo"(): boolean
public "canValidateProfileKeys"(): boolean
public "getScheduledEvents"(): $ScheduledEvents
public "grabPanoramixScreenshot"(arg0: $File$$Type, arg1: integer, arg2: integer): $Component
public "shouldEntityAppearGlowing"(arg0: $Entity$$Type): boolean
public "getXaeroMinimap_fps"(): integer
public "getMinecraftSessionService"(): $MinecraftSessionService
public "prepareForMultiplayer"(): void
public "getMapDecorationTextures"(): $MapDecorationTextureManager
public "isTextFilteringEnabled"(): boolean
public "getPaintingTextures"(): $PaintingTextureManager
public "getMobEffectTextures"(): $MobEffectTextureManager
public "getReportingContext"(): $ReportingContext
public "getPlayerSocialManager"(): $PlayerSocialManager
public "getXaeroWorldMap_fps"(): integer
public "openChatScreenFancyMenu"(arg0: StringJS): void
public "tell"(arg0: any): void
public "localvar$gcl000$fabric_events_interaction_v0$modifyItemPick"(arg0: $ItemStack$$Type): $ItemStack
public "handler$dbc000$xaeroworldmap$onRunTickStart"(arg0: $CallbackInfo$$Type): void
public "handler$zjn000$iris$trackLastDimensionOnLeave"(arg0: $Screen$$Type, arg1: $CallbackInfo$$Type): void
public "getReloadStateTrackerFancyMenu"(): $ResourceLoadStateTracker
public static "getFPS$sodium_extra_$md$6d3b50$0"(): integer
public "handler$egn006$bridgingmod$onTick"(ci: $CallbackInfo$$Type): void
public "getBlockEntityRenderDispatcher"(): $BlockEntityRenderDispatcher
public "clearDownloadedResourcePacks"(): void
public "getProfileKeySignatureValidator"(): $SignatureValidator
public "getTextureManager"(): $TextureManager
public "modify$dbc000$xaeroworldmap$onRenderCall"(arg0: boolean): boolean
public "handler$fdd000$distanthorizons$close"(ci: $CallbackInfo$$Type): void
public "handler$egn000$bridgingmod$onItemUse"(info: $CallbackInfo$$Type): void
public "getLocale"(): $Locale
public "pushGuiLayer"(arg0: $Screen$$Type): void
public "popGuiLayer"(): void
public static "getFPS"(): integer
public "runCommand"(command: StringJS): void
public "getName"(): $Component
public "isKeyDown"(keyName: StringJS): boolean
public "isKeyDown"(key: integer): boolean
public "isKeyBindDown"(id: StringJS): boolean
public "isShiftDown"(): boolean
public "isCtrlDown"(): boolean
public "isAltDown"(): boolean
public "setTitle"(t: StringJS): void
public "getBlockTextureAtlas"(): $Function<($ResourceLocation), ($TextureAtlasSprite)>
public "getCurrentScreen"(): $Screen
public "getCurrentWorldName"(): StringJS
public "setStatusMessage"(message: $Component$$Type): void
public "runCommandSilent"(command: StringJS): void
public "setActivePostShader"(id: $ResourceLocation$$Type): void
public "setCurrentScreen"(gui: $Screen$$Type): void
public "getKeyBindPressedTicks"(id: StringJS): integer
public "isKeyMappingDown"(key: $KeyMapping$$Type): boolean
public "self"(): $Minecraft
public "tell"(message: $Component$$Type): void
public "getParticleTextureAtlas"(): $Function<($ResourceLocation), ($TextureAtlasSprite)>
public "schedule"(timer: $TemporalAmount$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "scheduleRepeating"(timer: $TemporalAmount$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "scheduleInTicks"(ticks: $TickDuration$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "scheduleRepeatingInTicks"(ticks: $TickDuration$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "getDisplayName"(): $Component
public static "of"<Msg>(arg0: StringJS, arg1: $Consumer$$Type<(Msg)>): $ProcessorHandle<(Msg)>
get "connection"(): $ClientPacketListener
get "proxy"(): $Proxy
get "currentServer"(): $ServerData
get "fps"(): integer
get "user"(): $User
get "demo"(): boolean
get "overlay"(): $Overlay
get "paused"(): boolean
get "toasts"(): $ToastComponent
get "vanillaPackResources"(): $VanillaPackResources
get "gpuUtilization"(): double
get "nameBanned"(): boolean
get "gameProfile"(): $GameProfile
get "languageManager"(): $LanguageManager
get "soundManager"(): $SoundManager
get "singleplayer"(): boolean
get "launcherBrand"(): StringJS
get "resourceManager"(): $ResourceManager
get "lastInputType"(): $InputType
get "skinManager"(): $SkinManager
get "itemColors"(): $ItemColors
get "narrator"(): $GameNarrator
get "runningThread"(): $Thread
get "windowActive"(): boolean
get "chatListener"(): $ChatListener
get "tutorial"(): $Tutorial
get "entityModels"(): $EntityModelSet
get "hotbarManager"(): $HotbarManager
get "blockColors"(): $BlockColors
get "splashManager"(): $SplashManager
get "fixerUpper"(): $DataFixer
get "title"(): StringJS
get "itemRenderer"(): $ItemRenderer
get "localServer"(): boolean
get "guiSprites"(): $GuiSpriteManager
get "profiler"(): $ProfilerFiller
get "launchedVersion"(): StringJS
get "versionType"(): StringJS
get "enforceUnicode"(): boolean
get "modelManager"(): $ModelManager
get "debugOverlay"(): $DebugScreenOverlay
get "gameLoadFinished"(): boolean
get "frameTimeNs"(): long
get "chatStatus"(): $Minecraft$ChatStatus
get "levelSource"(): $LevelStorageSource
set "lastInputType"(value: $InputType$$Type)
get "musicManager"(): $MusicManager
set "windowActive"(value: boolean)
set "overlay"(value: $Overlay$$Type)
get "window"(): $Window
get "timer"(): $DeltaTracker
get "entityRenderDispatcher"(): $EntityRenderDispatcher
get "mainRenderTarget"(): $RenderTarget
get "singleplayerServer"(): $IntegratedServer
get "resourcePackRepository"(): $PackRepository
get "situationalMusic"(): $Music
get "gpuWarnlistManager"(): $GpuWarnlistManager
get "telemetryManager"(): $ClientTelemetryManager
get "downloadedPackSource"(): $DownloadedPackSource
get "profileKeyPairManager"(): $ProfileKeyPairManager
get "resourcePackDirectory"(): $Path
get "progressListener"(): $StoringChunkProgressListener
get "scheduledEvents"(): $ScheduledEvents
get "xaeroMinimap_fps"(): integer
get "minecraftSessionService"(): $MinecraftSessionService
get "mapDecorationTextures"(): $MapDecorationTextureManager
get "textFilteringEnabled"(): boolean
get "paintingTextures"(): $PaintingTextureManager
get "mobEffectTextures"(): $MobEffectTextureManager
get "reportingContext"(): $ReportingContext
get "playerSocialManager"(): $PlayerSocialManager
get "xaeroWorldMap_fps"(): integer
get "reloadStateTrackerFancyMenu"(): $ResourceLoadStateTracker
get "FPS$sodium_extra_$md$6d3b50$0"(): integer
get "blockEntityRenderDispatcher"(): $BlockEntityRenderDispatcher
get "profileKeySignatureValidator"(): $SignatureValidator
get "textureManager"(): $TextureManager
get "locale"(): $Locale
get "FPS"(): integer
get "name"(): $Component
get "shiftDown"(): boolean
get "ctrlDown"(): boolean
get "altDown"(): boolean
set "title"(value: StringJS)
get "blockTextureAtlas"(): $Function<($ResourceLocation), ($TextureAtlasSprite)>
get "currentScreen"(): $Screen
get "currentWorldName"(): StringJS
set "statusMessage"(value: $Component$$Type)
set "activePostShader"(value: $ResourceLocation$$Type)
set "currentScreen"(value: $Screen$$Type)
get "particleTextureAtlas"(): $Function<($ResourceLocation), ($TextureAtlasSprite)>
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
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$Camera$NearPlane} from "net.minecraft.client.Camera$NearPlane"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Quaternionf} from "org.joml.Quaternionf"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $Camera implements $CameraAccessor$$Interface {
static readonly "FOG_DISTANCE_SCALE": float

constructor()

public "getPosition"(): $Vec3
public "reset"(): void
public "setup"(arg0: $BlockGetter$$Type, arg1: $Entity$$Type, arg2: boolean, arg3: boolean, arg4: float): void
public "move"(arg0: float, arg1: float, arg2: float): void
public "tick"(): void
public "getLevel"(): $BlockGetter
public "getXRot"(): float
public "getYRot"(): float
/**
 * 
 * @deprecated
 */
public "setRotation"(arg0: float, arg1: float): void
public "setRotation"(arg0: float, arg1: float, arg2: float): void
public "getUpVector"(): $Vector3f
public "getLeftVector"(): $Vector3f
public "getBlockAtCamera"(): $BlockState
public "getNearPlane"(): $Camera$NearPlane
public "handler$ffp000$freecam$onGetSubmersionType"(cir: $CallbackInfoReturnable$$Type): void
public "setPosition"(arg0: $Vec3$$Type): void
public "setPosition"(arg0: double, arg1: double, arg2: double): void
public "getEntity"(): $Entity
public "isDetached"(): boolean
public "rotation"(): $Quaternionf
public "getFluidInCamera"(): $FogType
public "getPartialTickTime"(): float
public "isInitialized"(): boolean
public "getRoll"(): float
public "getBlockPosition"(): $BlockPos
public "getLookVector"(): $Vector3f
public "handler$zbo000$sodium_extra$noLerp"(arg0: $CallbackInfo$$Type): void
public "handler$ffp000$freecam$onUpdate"(area: $BlockGetter$$Type, newFocusedEntity: $Entity$$Type, thirdPerson: boolean, inverseView: boolean, tickDelta: float, ci: $CallbackInfo$$Type): void
get "position"(): $Vec3
get "level"(): $BlockGetter
get "XRot"(): float
get "YRot"(): float
get "upVector"(): $Vector3f
get "leftVector"(): $Vector3f
get "blockAtCamera"(): $BlockState
get "nearPlane"(): $Camera$NearPlane
set "position"(value: $Vec3$$Type)
get "entity"(): $Entity
get "detached"(): boolean
get "fluidInCamera"(): $FogType
get "partialTickTime"(): float
get "initialized"(): boolean
get "roll"(): float
get "blockPosition"(): $BlockPos
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

public "getTopRight"(): $Vec3
public "getBottomRight"(): $Vec3
public "getBottomLeft"(): $Vec3
public "getForward"(): $Vec3
public "getTopLeft"(): $Vec3
public "getPointOnPlane"(arg0: float, arg1: float): $Vec3
get "topRight"(): $Vec3
get "bottomRight"(): $Vec3
get "bottomLeft"(): $Vec3
get "topLeft"(): $Vec3
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
import {$TimerAccessor$$Interface as $TimerAccessor$0$$Interface} from "com.simibubi.create.foundation.mixin.accessor.TimerAccessor"
import {$TimerAccessor$$Interface} from "net.createmod.ponder.mixin.accessor.TimerAccessor"

export class $DeltaTracker$Timer implements $DeltaTracker$$Interface, $TimerAccessor$$Interface, $TimerAccessor$0$$Interface {
constructor(arg0: float, arg1: long, arg2: $FloatUnaryOperator$$Type)

public "getDeltaTickResidual"(): float
public "getGameTimeDeltaTicks"(): float
public "getRealtimeDeltaTicks"(): float
public "advanceTime"(arg0: long, arg1: boolean): integer
public "updatePauseState"(arg0: boolean): void
public "updateFrozenState"(arg0: boolean): void
public "catnip$getDeltaTickResidual"(): float
public "getGameTimeDeltaPartialTick"(arg0: boolean): float
get "deltaTickResidual"(): float
get "gameTimeDeltaTicks"(): float
get "realtimeDeltaTicks"(): float
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
public "handler$cig000$emi$onKey"(window: long, key: integer, scancode: integer, action: integer, modifiers: integer, info: $CallbackInfo$$Type): void
public "handler$cig000$emi$onChar"(window: long, codePoint: integer, modifiers: integer, info: $CallbackInfo$$Type): void
public "malilib$setF3KeyState"(value: boolean): void
public "keyPress"(arg0: long, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "getClipboard"(): StringJS
public "setClipboard"(arg0: StringJS): void
set "up"(value: long)
get "clipboard"(): StringJS
set "clipboard"(value: StringJS)
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
get "gameTimeDeltaTicks"(): float
get "realtimeDeltaTicks"(): float
}

export class $DeltaTracker implements $DeltaTracker$$Interface {
static readonly "ZERO": $DeltaTracker
static readonly "ONE": $DeltaTracker

 "getGameTimeDeltaTicks"(): float
 "getRealtimeDeltaTicks"(): float
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
import {$GuiMessageTag, $GuiMessageTag$$Type} from "net.minecraft.client.GuiMessageTag"
import {$HeadRenderable$$Interface} from "dzwdz.chat_heads.mixininterface.HeadRenderable"
import {$Record} from "java.lang.Record"

export class $GuiMessage$Line extends $Record implements $HeadRenderable$$Interface {
 "chatheads$headData": $HeadData

constructor(arg0: integer, arg1: $FormattedCharSequence$$Type, arg2: $GuiMessageTag$$Type, arg3: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "tag"(): $GuiMessageTag
public "content"(): $FormattedCharSequence
public "addedTime"(): integer
public "endOfEntry"(): boolean
public "chatheads$getHeadData"(): $HeadData
public "handler$bbg000$chat_heads$chatheads$setOwnerForFirstLine"(callbackInfo: $CallbackInfo$$Type): void
public "chatheads$setHeadData"(arg0: $HeadData$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiMessage$Line$$Type = ({"tag"?: $GuiMessageTag$$Type, "content"?: $FormattedCharSequence$$Type, "endOfEntry"?: boolean, "addedTime"?: integer}) | ([tag?: $GuiMessageTag$$Type, content?: $FormattedCharSequence$$Type, endOfEntry?: boolean, addedTime?: integer]);
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
import {$OptionEnum$$Interface} from "net.minecraft.util.OptionEnum"
import {$Component} from "net.minecraft.network.chat.Component"

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
import {$List$$Type} from "java.util.List"
import {$ResourceLoadStateTracker$ReloadReason$$Type} from "net.minecraft.client.ResourceLoadStateTracker$ReloadReason"
import {$CrashReport$$Type} from "net.minecraft.CrashReport"
import {$PackResources$$Type} from "net.minecraft.server.packs.PackResources"
import {$Throwable$$Type} from "java.lang.Throwable"

export class $ResourceLoadStateTracker {
constructor()

public "fillCrashReport"(arg0: $CrashReport$$Type): void
public "finishReload"(): void
public "startReload"(arg0: $ResourceLoadStateTracker$ReloadReason$$Type, arg1: $List$$Type<($PackResources$$Type)>): void
public "startRecovery"(arg0: $Throwable$$Type): void
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
import {$OptionEnum$$Interface} from "net.minecraft.util.OptionEnum"
import {$Component} from "net.minecraft.network.chat.Component"

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
import {$OptionEnum$$Interface} from "net.minecraft.util.OptionEnum"
import {$Component} from "net.minecraft.network.chat.Component"

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
import {$OptionInstanceAccessor$$Interface} from "dev.isxander.yacl3.mixin.OptionInstanceAccessor"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
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
public static "noTooltip"<T>(): $OptionInstance$TooltipSupplier<(T)>
public static "forOptionEnum"<T extends $OptionEnum>(): $OptionInstance$CaptionBasedToString<(T)>
public "getInitialValue"(): any
public "createButton"(arg0: $Options$$Type): $AbstractWidget
public "createButton"(arg0: $Options$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: $Consumer$$Type<(T)>): $AbstractWidget
public "createButton"(arg0: $Options$$Type, arg1: integer, arg2: integer, arg3: integer): $AbstractWidget
public "codec"(): $Codec<(T)>
public static "createBoolean"(arg0: StringJS, arg1: $OptionInstance$TooltipSupplier$$Type<(boolean)>, arg2: boolean, arg3: $Consumer$$Type<(boolean)>): $OptionInstance<(boolean)>
public static "createBoolean"(arg0: StringJS, arg1: $OptionInstance$TooltipSupplier$$Type<(boolean)>, arg2: boolean): $OptionInstance<(boolean)>
public static "createBoolean"(arg0: StringJS, arg1: boolean): $OptionInstance<(boolean)>
public static "createBoolean"(arg0: StringJS, arg1: boolean, arg2: $Consumer$$Type<(boolean)>): $OptionInstance<(boolean)>
public static "createBoolean"(arg0: StringJS, arg1: $OptionInstance$TooltipSupplier$$Type<(boolean)>, arg2: $OptionInstance$CaptionBasedToString$$Type<(boolean)>, arg3: boolean, arg4: $Consumer$$Type<(boolean)>): $OptionInstance<(boolean)>
public static "cachedConstantTooltip"<T>(arg0: $Component$$Type): $OptionInstance$TooltipSupplier<(T)>
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
public "isMouse"(): boolean
public "isKeyboard"(): boolean
get "mouse"(): boolean
get "keyboard"(): boolean
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
public "getXuid"(): $Optional<(StringJS)>
public "getProfileId"(): $UUID
public "getAccessToken"(): StringJS
public "getSessionId"(): StringJS
public "getClientId"(): $Optional<(StringJS)>
get "name"(): StringJS
get "type"(): $User$Type
get "xuid"(): $Optional<(StringJS)>
get "profileId"(): $UUID
get "accessToken"(): StringJS
get "sessionId"(): StringJS
get "clientId"(): $Optional<(StringJS)>
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
public "say"(arg0: $Component$$Type): void
public "updateNarratorStatus"(arg0: $NarratorStatus$$Type): void
public "sayNow"(arg0: StringJS): void
public "sayNow"(arg0: $Component$$Type): void
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
public "quickPlayData"(): $GameConfig$QuickPlayData
public "realmsClient"(): $RealmsClient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Minecraft$GameLoadCookie$$Type = ({"quickPlayData"?: $GameConfig$QuickPlayData$$Type, "realmsClient"?: $RealmsClient$$Type}) | ([quickPlayData?: $GameConfig$QuickPlayData$$Type, realmsClient?: $RealmsClient$$Type]);
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
public "indicatorColor"(): integer
public static "systemSinglePlayer"(): $GuiMessageTag
public "icon"(): $GuiMessageTag$Icon
public "logTag"(): StringJS
public static "chatError"(): $GuiMessageTag
public static "chatModified"(arg0: StringJS): $GuiMessageTag
public static "chatNotSecure"(): $GuiMessageTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiMessageTag$$Type = ({"icon"?: $GuiMessageTag$Icon$$Type, "logTag"?: StringJS, "text"?: $Component$$Type, "indicatorColor"?: integer}) | ([icon?: $GuiMessageTag$Icon$$Type, logTag?: StringJS, text?: $Component$$Type, indicatorColor?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiMessageTag$$Original = $GuiMessageTag;}
declare module "net.minecraft.client.KeyMapping" {
import {$KeyMappingAccessor$$Interface as $KeyMappingAccessor$0$$Interface} from "net.blay09.mods.kuma.mixin.KeyMappingAccessor"
import {$Map} from "java.util.Map"
import {$KeyBindingAccessor$$Interface as $KeyBindingAccessor$0$$Interface} from "net.fabricmc.fabric.mixin.event.interaction.client.KeyBindingAccessor"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$IKeyConflictContext, $IKeyConflictContext$$Type} from "net.neoforged.neoforge.client.settings.IKeyConflictContext"
import {$Component} from "net.minecraft.network.chat.Component"
import {$KeyMappingAccessor$$Interface} from "net.blay09.mods.balm.mixin.KeyMappingAccessor"
import {$AccessKeyMapping$$Interface} from "com.blamejared.controlling.mixin.AccessKeyMapping"
import {$KeyModifier, $KeyModifier$$Type} from "net.neoforged.neoforge.client.settings.KeyModifier"
import {$Supplier} from "java.util.function.Supplier"
import {$KeyBindingAccessor$$Interface} from "net.fabricmc.fabric.mixin.client.keybinding.KeyBindingAccessor"
import {$AccessorKeyMapping$$Interface as $AccessorKeyMapping$0$$Interface} from "com.railwayteam.railways.mixin.conductor_possession.AccessorKeyMapping"
import {$AccessorKeyMapping$$Interface} from "vazkii.patchouli.mixin.client.AccessorKeyMapping"
import {$InputConstants$Key, $InputConstants$Key$$Type} from "com.mojang.blaze3d.platform.InputConstants$Key"
import {$InputConstants$Type$$Type} from "com.mojang.blaze3d.platform.InputConstants$Type"
import {$IKeyMappingExtension$$Interface} from "net.neoforged.neoforge.client.extensions.IKeyMappingExtension"

export class $KeyMapping implements $Comparable$$Interface<($KeyMapping)>, $IKeyMappingExtension$$Interface, $KeyMappingAccessor$$Interface, $KeyMappingAccessor$0$$Interface, $AccessKeyMapping$$Interface, $AccessorKeyMapping$0$$Interface, $AccessorKeyMapping$$Interface, $KeyBindingAccessor$$Interface, $KeyBindingAccessor$0$$Interface {
static readonly "ALL": $Map<(StringJS), ($KeyMapping)>
static readonly "CATEGORY_INTERFACE": StringJS
static readonly "CATEGORY_MULTIPLAYER": StringJS
static readonly "CATEGORY_CREATIVE": StringJS
static readonly "CATEGORY_MOVEMENT": StringJS
static readonly "CATEGORY_GAMEPLAY": StringJS
static readonly "CATEGORY_MISC": StringJS
 "key": $InputConstants$Key
static readonly "CATEGORY_INVENTORY": StringJS

constructor(arg0: StringJS, arg1: $IKeyConflictContext$$Type, arg2: $KeyModifier$$Type, arg3: $InputConstants$Type$$Type, arg4: integer, arg5: StringJS)
constructor(arg0: StringJS, arg1: integer, arg2: StringJS)
constructor(arg0: StringJS, arg1: $InputConstants$Type$$Type, arg2: integer, arg3: StringJS)
constructor(arg0: StringJS, arg1: $IKeyConflictContext$$Type, arg2: $KeyModifier$$Type, arg3: $InputConstants$Key$$Type, arg4: StringJS)
constructor(arg0: StringJS, arg1: $IKeyConflictContext$$Type, arg2: $InputConstants$Type$$Type, arg3: integer, arg4: StringJS)
constructor(arg0: StringJS, arg1: $IKeyConflictContext$$Type, arg2: $InputConstants$Key$$Type, arg3: StringJS)

public "getName"(): StringJS
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $KeyMapping$$Type): integer
public "matches"(arg0: integer, arg1: integer): boolean
public "getKey"(): $InputConstants$Key
public static "set"(arg0: $InputConstants$Key$$Type, arg1: boolean): void
public "isDefault"(): boolean
public static "setAll"(): void
public static "fabric_getCategoryMap$fabric_key_binding_api_v1_$md$6d3b50$1"(): $Map
public "isDown"(): boolean
public static "releaseAll"(): void
public "setDown"(arg0: boolean): void
public "consumeClick"(): boolean
public static "click"(arg0: $InputConstants$Key$$Type): void
public "getCategory"(): StringJS
public "setKey"(arg0: $InputConstants$Key$$Type): void
public static "createNameSupplier"(arg0: StringJS): $Supplier<($Component)>
public static "resetToggleKeys"(): void
public "matchesMouse"(arg0: integer): boolean
public "setKeyConflictContext"(arg0: $IKeyConflictContext$$Type): void
public "getTranslatedKeyMessage"(): $Component
public "setKeyModifierAndCode"(arg0: $KeyModifier$$Type, arg1: $InputConstants$Key$$Type): void
public "getKeyConflictContext"(): $IKeyConflictContext
public "getDefaultKeyModifier"(): $KeyModifier
public "fabric_getTimesPressed"(): integer
public "isUnbound"(): boolean
public "same"(arg0: $KeyMapping$$Type): boolean
public "saveString"(): StringJS
public static "getAllKeyMappings$patchouli_$md$6d3b50$0"(): $Map
public "getDefaultKey"(): $InputConstants$Key
public "controlling$getKey"(): $InputConstants$Key
public "fabric_getBoundKey"(): $InputConstants$Key
public static "resetMapping"(): void
public "getKeyModifier"(): $KeyModifier
public "getDisplayName"(): $Component
public "setToDefault"(): void
public "isActiveAndMatches"(arg0: $InputConstants$Key$$Type): boolean
public "hasKeyModifierConflict"(arg0: $KeyMapping$$Type): boolean
public "isConflictContextAndModifierActive"(): boolean
public static "getAllKeyMappings"(): $Map<(StringJS), ($KeyMapping)>
public static "fabric_getCategoryMap"(): $Map<(StringJS), (integer)>
get "name"(): StringJS
get "default"(): boolean
get "all"(): void
get "down"(): boolean
set "down"(value: boolean)
get "category"(): StringJS
set "keyConflictContext"(value: $IKeyConflictContext$$Type)
get "translatedKeyMessage"(): $Component
get "keyConflictContext"(): $IKeyConflictContext
get "defaultKeyModifier"(): $KeyModifier
get "unbound"(): boolean
get "allKeyMappings$patchouli_$md$6d3b50$0"(): $Map
get "defaultKey"(): $InputConstants$Key
get "keyModifier"(): $KeyModifier
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
 "createButton"(arg0: $OptionInstance$TooltipSupplier$$Type<(T)>, arg1: $Options$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: $Consumer$$Type<(T)>): $Function<($OptionInstance<(T)>), ($AbstractWidget)>
 "codec"(): $Codec<(T)>
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
import {$OptionInstance$ValueSet$$Interface} from "net.minecraft.client.OptionInstance$ValueSet"
import {$OptionInstance} from "net.minecraft.client.OptionInstance"
import {$Options$$Type} from "net.minecraft.client.Options"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $OptionInstance$CycleableValueSet$$Interface<T> extends $OptionInstance$ValueSet$$Interface<(T)> {
}

export class $OptionInstance$CycleableValueSet<T> implements $OptionInstance$CycleableValueSet$$Interface {
 "validateValue"(arg0: T): $Optional<(T)>
 "createButton"(arg0: $OptionInstance$TooltipSupplier$$Type<(T)>, arg1: $Options$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: $Consumer$$Type<(T)>): $Function<($OptionInstance<(T)>), ($AbstractWidget)>
 "codec"(): $Codec<(T)>
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
import {$KeyMapping} from "net.minecraft.client.KeyMapping"
import {$BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"

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
public "setDown"(arg0: boolean): void
public "modifyReturnValue$ckg000$xaerominimap$onIsDown"(arg0: boolean): boolean
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
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Component} from "net.minecraft.network.chat.Component"
import {$OptionEnum$$Interface} from "net.minecraft.util.OptionEnum"
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
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
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
import {$GuiMessageTag, $GuiMessageTag$$Type} from "net.minecraft.client.GuiMessageTag"
import {$HeadRenderable$$Interface} from "dzwdz.chat_heads.mixininterface.HeadRenderable"
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
public "icon"(): $GuiMessageTag$Icon
public "addedTime"(): integer
public "chatheads$getHeadData"(): $HeadData
public "chatheads$setHeadData"(headData: $HeadData$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiMessage$$Type = ({"tag"?: $GuiMessageTag$$Type, "content"?: $Component$$Type, "signature"?: $MessageSignature$$Type, "addedTime"?: integer}) | ([tag?: $GuiMessageTag$$Type, content?: $Component$$Type, signature?: $MessageSignature$$Type, addedTime?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiMessage$$Original = $GuiMessage;}
