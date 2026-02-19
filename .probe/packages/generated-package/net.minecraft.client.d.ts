declare module "net.minecraft.client.Options" {
import {$HumanoidArm} from "net.minecraft.world.entity.HumanoidArm"
import {$File, $File$$Type} from "java.io.File"
import {$List} from "java.util.List"
import {$TutorialSteps} from "net.minecraft.client.tutorial.TutorialSteps"
import {$NarratorStatus} from "net.minecraft.client.NarratorStatus"
import {$PackRepository$$Type} from "net.minecraft.server.packs.repository.PackRepository"
import {$PrioritizeChunkUpdates} from "net.minecraft.client.PrioritizeChunkUpdates"
import {$CameraType, $CameraType$$Type} from "net.minecraft.client.CameraType"
import {$PlayerModelPart$$Type} from "net.minecraft.world.entity.player.PlayerModelPart"
import {$ParticleStatus} from "net.minecraft.client.ParticleStatus"
import {$KeyMapping, $KeyMapping$$Type} from "net.minecraft.client.KeyMapping"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ClientInformation} from "net.minecraft.server.level.ClientInformation"
import {$SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$InputConstants$Key$$Type} from "com.mojang.blaze3d.platform.InputConstants$Key"
import {$ChatVisiblity} from "net.minecraft.world.entity.player.ChatVisiblity"
import {$OptionInstance} from "net.minecraft.client.OptionInstance"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$CloudStatus} from "net.minecraft.client.CloudStatus"
import {$AttackIndicatorStatus} from "net.minecraft.client.AttackIndicatorStatus"
import {$GraphicsStatus} from "net.minecraft.client.GraphicsStatus"

export class $Options {
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
 "keyMappings": ($KeyMapping)[]
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

public "fullscreen"(): $OptionInstance<(boolean)>
public "chatDelay"(): $OptionInstance<(double)>
public "narrator"(): $OptionInstance<($NarratorStatus)>
public "guiScale"(): $OptionInstance<(integer)>
public "particles"(): $OptionInstance<($ParticleStatus)>
public "load"(): void
public "load"(arg0: boolean): void
public "save"(): void
public "getFile"(): $File
public "gamma"(): $OptionInstance<(double)>
public "notificationDisplayTime"(): $OptionInstance<(double)>
public "realmsNotifications"(): $OptionInstance<(boolean)>
public "showAutosaveIndicator"(): $OptionInstance<(boolean)>
public "japaneseGlyphVariants"(): $OptionInstance<(boolean)>
public "mouseWheelSensitivity"(): $OptionInstance<(double)>
public static "genericValueOrOffLabel"(arg0: $Component$$Type, arg1: integer): $Component
public "updateResourcePacks"(arg0: $PackRepository$$Type): void
public "darknessEffectScale"(): $OptionInstance<(double)>
public "discreteMouseScroll"(): $OptionInstance<(boolean)>
public "backgroundForChatOnly"(): $OptionInstance<(boolean)>
public "getSoundSourceVolume"(arg0: $SoundSource$$Type): float
public "chatHeightUnfocused"(): $OptionInstance<(double)>
public "getBackgroundOpacity"(arg0: float): float
public "buildPlayerInformation"(): $ClientInformation
public "setServerRenderDistance"(arg0: integer): void
public "bobView"(): $OptionInstance<(boolean)>
public "chatWidth"(): $OptionInstance<(double)>
public "chatScale"(): $OptionInstance<(double)>
public "glintSpeed"(): $OptionInstance<(double)>
public "darkMojangStudiosBackground"(): $OptionInstance<(boolean)>
public "textBackgroundOpacity"(): $OptionInstance<(double)>
public "menuBackgroundBlurriness"(): $OptionInstance<(integer)>
public "broadcastOptions"(): void
public "isModelPartEnabled"(arg0: $PlayerModelPart$$Type): boolean
public "toggleModelPart"(arg0: $PlayerModelPart$$Type, arg1: boolean): void
public static "genericValueLabel"(arg0: $Component$$Type, arg1: $Component$$Type): $Component
public static "genericValueLabel"(arg0: $Component$$Type, arg1: integer): $Component
public "onboardingAccessibilityFinished"(): void
public "getMenuBackgroundBlurriness"(): integer
public "getSoundSourceOptionInstance"(arg0: $SoundSource$$Type): $OptionInstance<(double)>
public "setKey"(arg0: $KeyMapping$$Type, arg1: $InputConstants$Key$$Type): void
public "renderDistance"(): $OptionInstance<(integer)>
public "ambientOcclusion"(): $OptionInstance<(boolean)>
public "chatVisibility"(): $OptionInstance<($ChatVisiblity)>
public "getBackgroundColor"(arg0: float): integer
public "getBackgroundColor"(arg0: integer): integer
public "framerateLimit"(): $OptionInstance<(integer)>
public "glintStrength"(): $OptionInstance<(double)>
public "enableVsync"(): $OptionInstance<(boolean)>
public "rawMouseInput"(): $OptionInstance<(boolean)>
public "mipmapLevels"(): $OptionInstance<(integer)>
public "forceUnicodeFont"(): $OptionInstance<(boolean)>
public "graphicsMode"(): $OptionInstance<($GraphicsStatus)>
public "cloudStatus"(): $OptionInstance<($CloudStatus)>
public "biomeBlendRadius"(): $OptionInstance<(integer)>
public "getCameraType"(): $CameraType
public "setCameraType"(arg0: $CameraType$$Type): void
public "mainHand"(): $OptionInstance<($HumanoidArm)>
public "chatColors"(): $OptionInstance<(boolean)>
public "autoJump"(): $OptionInstance<(boolean)>
public "fov"(): $OptionInstance<(integer)>
public "chatLinks"(): $OptionInstance<(boolean)>
public "chatLinksPrompt"(): $OptionInstance<(boolean)>
public "hideSplashTexts"(): $OptionInstance<(boolean)>
public "chatOpacity"(): $OptionInstance<(double)>
public "reducedDebugInfo"(): $OptionInstance<(boolean)>
public "prioritizeChunkUpdates"(): $OptionInstance<($PrioritizeChunkUpdates)>
public "entityDistanceScaling"(): $OptionInstance<(double)>
public "useNativeTransport"(): boolean
public "sensitivity"(): $OptionInstance<(double)>
public "toggleCrouch"(): $OptionInstance<(boolean)>
public "panoramaSpeed"(): $OptionInstance<(double)>
public "directionalAudio"(): $OptionInstance<(boolean)>
public "autoSuggestions"(): $OptionInstance<(boolean)>
public "hideMatchedNames"(): $OptionInstance<(boolean)>
public "entityShadows"(): $OptionInstance<(boolean)>
public "chatLineSpacing"(): $OptionInstance<(double)>
public "attackIndicator"(): $OptionInstance<($AttackIndicatorStatus)>
public "chatHeightFocused"(): $OptionInstance<(double)>
public "toggleSprint"(): $OptionInstance<(boolean)>
public "highContrast"(): $OptionInstance<(boolean)>
public "allowServerListing"(): $OptionInstance<(boolean)>
public "onlyShowSecureChat"(): $OptionInstance<(boolean)>
public "invertYMouse"(): $OptionInstance<(boolean)>
public "simulationDistance"(): $OptionInstance<(integer)>
public "soundDevice"(): $OptionInstance<(StringJS)>
public "narratorHotkey"(): $OptionInstance<(boolean)>
public "showSubtitles"(): $OptionInstance<(boolean)>
public "hideLightningFlash"(): $OptionInstance<(boolean)>
public "operatorItemsTab"(): $OptionInstance<(boolean)>
public "touchscreen"(): $OptionInstance<(boolean)>
public "fovEffectScale"(): $OptionInstance<(double)>
public "damageTiltStrength"(): $OptionInstance<(double)>
public "screenEffectScale"(): $OptionInstance<(double)>
public "getCloudsType"(): $CloudStatus
public "loadSelectedResourcePacks"(arg0: $PackRepository$$Type): void
public "telemetryOptInExtra"(): $OptionInstance<(boolean)>
public "dumpOptionsForReport"(): StringJS
public "getEffectiveRenderDistance"(): integer
get "file"(): $File
set "serverRenderDistance"(value: integer)
get "cameraType"(): $CameraType
set "cameraType"(value: $CameraType$$Type)
get "cloudsType"(): $CloudStatus
get "effectiveRenderDistance"(): integer
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
declare module "net.minecraft.client.OptionInstance$Enum" {
import {$CycleButton$ValueListSupplier} from "net.minecraft.client.gui.components.CycleButton$ValueListSupplier"
import {$Optional} from "java.util.Optional"
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
export type $OptionInstance$Enum$$Type<T> = ({"codec"?: $Codec$$Type<(T)>, "values"?: $List$$Type<(T)>}) | ([codec?: $Codec$$Type<(T)>, values?: $List$$Type<(T)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OptionInstance$Enum$$Original<T> = $OptionInstance$Enum<(T)>;}
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
declare module "net.minecraft.client.MouseHandler" {
import {$MouseHandlerAccessor$$Interface} from "com.simibubi.create.foundation.mixin.accessor.MouseHandlerAccessor"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"

export class $MouseHandler implements $MouseHandlerAccessor$$Interface {
constructor(arg0: $Minecraft$$Type)

public "grabMouse"(): void
public "setup"(arg0: long): void
public "ypos"(): double
public "xpos"(): double
public "getXVelocity"(): double
public "create$setYPos"(arg0: double): void
public "getYVelocity"(): double
public "isMiddlePressed"(): boolean
public "isLeftPressed"(): boolean
public "create$setXPos"(arg0: double): void
public "releaseMouse"(): void
public "setIgnoreFirstMove"(): void
public "cursorEntered"(): void
public "isMouseGrabbed"(): boolean
public "isRightPressed"(): boolean
public "handleAccumulatedMovement"(): void
set "up"(value: long)
get "XVelocity"(): double
get "YVelocity"(): double
get "middlePressed"(): boolean
get "leftPressed"(): boolean
get "ignoreFirstMove"(): void
get "mouseGrabbed"(): boolean
get "rightPressed"(): boolean
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
import {$RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$List} from "java.util.List"
import {$RecipeCollection} from "net.minecraft.client.gui.screens.recipebook.RecipeCollection"
import {$RecipeBook} from "net.minecraft.stats.RecipeBook"
import {$RecipeBookCategories$$Type} from "net.minecraft.client.RecipeBookCategories"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $ClientRecipeBook extends $RecipeBook {
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
public "shouldNarrateSystem"(): boolean
public static "byId"(arg0: integer): $NarratorStatus
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
declare module "net.minecraft.client.OptionInstance" {
import {$OptionInstance$TooltipSupplier, $OptionInstance$TooltipSupplier$$Type} from "net.minecraft.client.OptionInstance$TooltipSupplier"
import {$OptionInstance$CaptionBasedToString, $OptionInstance$CaptionBasedToString$$Type} from "net.minecraft.client.OptionInstance$CaptionBasedToString"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$AbstractWidget} from "net.minecraft.client.gui.components.AbstractWidget"
import {$OptionInstance$ValueSet, $OptionInstance$ValueSet$$Type} from "net.minecraft.client.OptionInstance$ValueSet"
import {$OptionEnum} from "net.minecraft.util.OptionEnum"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Options$$Type} from "net.minecraft.client.Options"
import {$OptionInstance$Enum} from "net.minecraft.client.OptionInstance$Enum"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $OptionInstance<T> {
readonly "caption": $Component
static readonly "BOOLEAN_VALUES": $OptionInstance$Enum<(boolean)>
 "value": T
static readonly "BOOLEAN_TO_STRING": $OptionInstance$CaptionBasedToString<(boolean)>

constructor(arg0: StringJS, arg1: $OptionInstance$TooltipSupplier$$Type<(T)>, arg2: $OptionInstance$CaptionBasedToString$$Type<(T)>, arg3: $OptionInstance$ValueSet$$Type<(T)>, arg4: T, arg5: $Consumer$$Type<(T)>)
constructor(arg0: StringJS, arg1: $OptionInstance$TooltipSupplier$$Type<(T)>, arg2: $OptionInstance$CaptionBasedToString$$Type<(T)>, arg3: $OptionInstance$ValueSet$$Type<(T)>, arg4: $Codec$$Type<(T)>, arg5: T, arg6: $Consumer$$Type<(T)>)

public "get"(): T
public "toString"(): StringJS
public "values"(): $OptionInstance$ValueSet<(T)>
public "set"(arg0: T): void
public static "cachedConstantTooltip"<T>(arg0: $Component$$Type): $OptionInstance$TooltipSupplier<(T)>
public static "noTooltip"<T>(): $OptionInstance$TooltipSupplier<(T)>
public "codec"(): $Codec<(T)>
public static "createBoolean"(arg0: StringJS, arg1: $OptionInstance$TooltipSupplier$$Type<(boolean)>, arg2: boolean): $OptionInstance<(boolean)>
public static "createBoolean"(arg0: StringJS, arg1: $OptionInstance$TooltipSupplier$$Type<(boolean)>, arg2: boolean, arg3: $Consumer$$Type<(boolean)>): $OptionInstance<(boolean)>
public static "createBoolean"(arg0: StringJS, arg1: $OptionInstance$TooltipSupplier$$Type<(boolean)>, arg2: $OptionInstance$CaptionBasedToString$$Type<(boolean)>, arg3: boolean, arg4: $Consumer$$Type<(boolean)>): $OptionInstance<(boolean)>
public static "createBoolean"(arg0: StringJS, arg1: boolean): $OptionInstance<(boolean)>
public static "createBoolean"(arg0: StringJS, arg1: boolean, arg2: $Consumer$$Type<(boolean)>): $OptionInstance<(boolean)>
public static "forOptionEnum"<T extends $OptionEnum>(): $OptionInstance$CaptionBasedToString<(T)>
public "createButton"(arg0: $Options$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: $Consumer$$Type<(T)>): $AbstractWidget
public "createButton"(arg0: $Options$$Type, arg1: integer, arg2: integer, arg3: integer): $AbstractWidget
public "createButton"(arg0: $Options$$Type): $AbstractWidget
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
declare module "net.minecraft.client.InputType" {
import {$Enum} from "java.lang.Enum"

export class $InputType extends $Enum<($InputType)> {
static readonly "MOUSE": $InputType
static readonly "KEYBOARD_TAB": $InputType
static readonly "NONE": $InputType
static readonly "KEYBOARD_ARROW": $InputType

public "isMouse"(): boolean
public static "values"(): ($InputType)[]
public static "valueOf"(arg0: StringJS): $InputType
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
declare module "net.minecraft.client.StringSplitter" {
import {$StringSplitter$WidthProvider$$Type} from "net.minecraft.client.StringSplitter$WidthProvider"
import {$FormattedCharSequence$$Type} from "net.minecraft.util.FormattedCharSequence"
import {$FormattedText, $FormattedText$$Type} from "net.minecraft.network.chat.FormattedText"
import {$List} from "java.util.List"
import {$Style, $Style$$Type} from "net.minecraft.network.chat.Style"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$StringSplitter$LinePosConsumer$$Type} from "net.minecraft.client.StringSplitter$LinePosConsumer"

export class $StringSplitter {
constructor(arg0: $StringSplitter$WidthProvider$$Type)

public "splitLines"(arg0: $FormattedText$$Type, arg1: integer, arg2: $Style$$Type): $List<($FormattedText)>
public "splitLines"(arg0: StringJS, arg1: integer, arg2: $Style$$Type): $List<($FormattedText)>
public "splitLines"(arg0: StringJS, arg1: integer, arg2: $Style$$Type, arg3: boolean, arg4: $StringSplitter$LinePosConsumer$$Type): void
public "splitLines"(arg0: $FormattedText$$Type, arg1: integer, arg2: $Style$$Type, arg3: $FormattedText$$Type): $List<($FormattedText)>
public "splitLines"(arg0: $FormattedText$$Type, arg1: integer, arg2: $Style$$Type, arg3: $BiConsumer$$Type<($FormattedText), (boolean)>): void
public "stringWidth"(arg0: StringJS): float
public "stringWidth"(arg0: $FormattedCharSequence$$Type): float
public "stringWidth"(arg0: $FormattedText$$Type): float
public static "getWordPosition"(arg0: StringJS, arg1: integer, arg2: integer, arg3: boolean): integer
public "plainIndexAtWidth"(arg0: StringJS, arg1: integer, arg2: $Style$$Type): integer
public "findLineBreak"(arg0: StringJS, arg1: integer, arg2: $Style$$Type): integer
public "componentStyleAtWidth"(arg0: $FormattedCharSequence$$Type, arg1: integer): $Style
public "componentStyleAtWidth"(arg0: $FormattedText$$Type, arg1: integer): $Style
public "headByWidth"(arg0: $FormattedText$$Type, arg1: integer, arg2: $Style$$Type): $FormattedText
public "plainTailByWidth"(arg0: StringJS, arg1: integer, arg2: $Style$$Type): StringJS
public "plainHeadByWidth"(arg0: StringJS, arg1: integer, arg2: $Style$$Type): StringJS
public "formattedHeadByWidth"(arg0: StringJS, arg1: integer, arg2: $Style$$Type): StringJS
public "formattedIndexByWidth"(arg0: StringJS, arg1: integer, arg2: $Style$$Type): integer
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
declare module "net.minecraft.client.RecipeBookCategories" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$Enum} from "java.lang.Enum"
import {$List} from "java.util.List"
import {$RecipeBookType$$Type} from "net.minecraft.world.inventory.RecipeBookType"
import {$ExtensionInfo} from "net.neoforged.fml.common.asm.enumextension.ExtensionInfo"
import {$IExtensibleEnum$$Interface} from "net.neoforged.fml.common.asm.enumextension.IExtensibleEnum"

export class $RecipeBookCategories extends $Enum<($RecipeBookCategories)> implements $IExtensibleEnum$$Interface {
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
static readonly "AGGREGATE_CATEGORIES": $Map<($RecipeBookCategories), ($List<($RecipeBookCategories)>)>
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

public "getIconItems"(): $List<($ItemStack)>
public static "getCategories"(arg0: $RecipeBookType$$Type): $List<($RecipeBookCategories)>
public static "values"(): ($RecipeBookCategories)[]
public static "valueOf"(arg0: StringJS): $RecipeBookCategories
public static "getExtensionInfo"(): $ExtensionInfo
get "iconItems"(): $List<($ItemStack)>
get "extensionInfo"(): $ExtensionInfo
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
declare module "net.minecraft.client.User" {
import {$User$Type, $User$Type$$Type} from "net.minecraft.client.User$Type"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$UUID, $UUID$$Type} from "java.util.UUID"

export class $User {
constructor(arg0: StringJS, arg1: $UUID$$Type, arg2: StringJS, arg3: (StringJS)?, arg4: (StringJS)?, arg5: $User$Type$$Type)

public "getXuid"(): $Optional<(StringJS)>
public "getName"(): StringJS
public "getType"(): $User$Type
public "getAccessToken"(): StringJS
public "getProfileId"(): $UUID
public "getSessionId"(): StringJS
public "getClientId"(): $Optional<(StringJS)>
get "xuid"(): $Optional<(StringJS)>
get "name"(): StringJS
get "type"(): $User$Type
get "accessToken"(): StringJS
get "profileId"(): $UUID
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

public "sayNow"(arg0: $Component$$Type): void
public "sayNow"(arg0: StringJS): void
public "clear"(): void
public "destroy"(): void
public "isActive"(): boolean
public "say"(arg0: $Component$$Type): void
public "checkStatus"(arg0: boolean): void
public "updateNarratorStatus"(arg0: $NarratorStatus$$Type): void
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
export type $Minecraft$GameLoadCookie$$Type = ({"quickPlayData"?: $GameConfig$QuickPlayData$$Type, "realmsClient"?: $RealmsClient$$Type}) | ([quickPlayData?: $GameConfig$QuickPlayData$$Type, realmsClient?: $RealmsClient$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Minecraft$GameLoadCookie$$Original = $Minecraft$GameLoadCookie;}
declare module "net.minecraft.client.GuiMessageTag$Icon" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Enum} from "java.lang.Enum"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"

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
public "indicatorColor"(): integer
public static "systemSinglePlayer"(): $GuiMessageTag
public "icon"(): $GuiMessageTag$Icon
public static "chatError"(): $GuiMessageTag
public static "chatModified"(arg0: StringJS): $GuiMessageTag
public static "chatNotSecure"(): $GuiMessageTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiMessageTag$$Type = ({"icon"?: $GuiMessageTag$Icon$$Type, "indicatorColor"?: integer, "text"?: $Component$$Type, "logTag"?: StringJS}) | ([icon?: $GuiMessageTag$Icon$$Type, indicatorColor?: integer, text?: $Component$$Type, logTag?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiMessageTag$$Original = $GuiMessageTag;}
declare module "net.minecraft.client.KeyMapping" {
import {$Map} from "java.util.Map"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$KeyBindingAccessor$$Interface} from "net.fabricmc.fabric.mixin.event.interaction.client.KeyBindingAccessor"
import {$IKeyConflictContext, $IKeyConflictContext$$Type} from "net.neoforged.neoforge.client.settings.IKeyConflictContext"
import {$Component} from "net.minecraft.network.chat.Component"
import {$KeyModifier, $KeyModifier$$Type} from "net.neoforged.neoforge.client.settings.KeyModifier"
import {$Supplier} from "java.util.function.Supplier"
import {$KeyBindingAccessor$$Interface as $KeyBindingAccessor$0$$Interface} from "net.fabricmc.fabric.mixin.client.keybinding.KeyBindingAccessor"
import {$AccessorKeyMapping$$Interface as $AccessorKeyMapping$0$$Interface} from "vazkii.patchouli.mixin.client.AccessorKeyMapping"
import {$AccessorKeyMapping$$Interface} from "com.railwayteam.railways.mixin.conductor_possession.AccessorKeyMapping"
import {$InputConstants$Key, $InputConstants$Key$$Type} from "com.mojang.blaze3d.platform.InputConstants$Key"
import {$InputConstants$Type$$Type} from "com.mojang.blaze3d.platform.InputConstants$Type"
import {$IKeyMappingExtension$$Interface} from "net.neoforged.neoforge.client.extensions.IKeyMappingExtension"

export class $KeyMapping implements $Comparable$$Interface<($KeyMapping)>, $IKeyMappingExtension$$Interface, $AccessorKeyMapping$$Interface, $AccessorKeyMapping$0$$Interface, $KeyBindingAccessor$0$$Interface, $KeyBindingAccessor$$Interface {
static readonly "ALL": $Map<(StringJS), ($KeyMapping)>
static readonly "CATEGORY_INTERFACE": StringJS
static readonly "CATEGORY_MULTIPLAYER": StringJS
static readonly "CATEGORY_CREATIVE": StringJS
static readonly "CATEGORY_MOVEMENT": StringJS
static readonly "CATEGORY_GAMEPLAY": StringJS
static readonly "CATEGORY_MISC": StringJS
 "key": $InputConstants$Key
static readonly "CATEGORY_INVENTORY": StringJS

constructor(arg0: StringJS, arg1: integer, arg2: StringJS)
constructor(arg0: StringJS, arg1: $InputConstants$Type$$Type, arg2: integer, arg3: StringJS)
constructor(arg0: StringJS, arg1: $IKeyConflictContext$$Type, arg2: $InputConstants$Type$$Type, arg3: integer, arg4: StringJS)
constructor(arg0: StringJS, arg1: $IKeyConflictContext$$Type, arg2: $InputConstants$Key$$Type, arg3: StringJS)
constructor(arg0: StringJS, arg1: $IKeyConflictContext$$Type, arg2: $KeyModifier$$Type, arg3: $InputConstants$Type$$Type, arg4: integer, arg5: StringJS)
constructor(arg0: StringJS, arg1: $IKeyConflictContext$$Type, arg2: $KeyModifier$$Type, arg3: $InputConstants$Key$$Type, arg4: StringJS)

public static "releaseAll"(): void
public "isDown"(): boolean
public "getName"(): StringJS
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $KeyMapping$$Type): integer
public "matches"(arg0: integer, arg1: integer): boolean
public "getKey"(): $InputConstants$Key
public static "set"(arg0: $InputConstants$Key$$Type, arg1: boolean): void
public "isDefault"(): boolean
public static "setAll"(): void
public "getKeyConflictContext"(): $IKeyConflictContext
public "getDefaultKeyModifier"(): $KeyModifier
public "setKeyConflictContext"(arg0: $IKeyConflictContext$$Type): void
public "setKeyModifierAndCode"(arg0: $KeyModifier$$Type, arg1: $InputConstants$Key$$Type): void
public "getTranslatedKeyMessage"(): $Component
public "saveString"(): StringJS
public "setDown"(arg0: boolean): void
public static "fabric_getCategoryMap$fabric_key_binding_api_v1_$md$d44d69$1"(): $Map
public static "getAllKeyMappings$patchouli_$md$d44d69$0"(): $Map
public "getCategory"(): StringJS
public "same"(arg0: $KeyMapping$$Type): boolean
public "setKey"(arg0: $InputConstants$Key$$Type): void
public static "createNameSupplier"(arg0: StringJS): $Supplier<($Component)>
public "consumeClick"(): boolean
public "isUnbound"(): boolean
public "fabric_getTimesPressed"(): integer
public static "resetToggleKeys"(): void
public "getDefaultKey"(): $InputConstants$Key
public static "click"(arg0: $InputConstants$Key$$Type): void
public "fabric_getBoundKey"(): $InputConstants$Key
public static "resetMapping"(): void
public "getKeyModifier"(): $KeyModifier
public "matchesMouse"(arg0: integer): boolean
public "getDisplayName"(): $Component
public "hasKeyModifierConflict"(arg0: $KeyMapping$$Type): boolean
public "setToDefault"(): void
public "isConflictContextAndModifierActive"(): boolean
public "isActiveAndMatches"(arg0: $InputConstants$Key$$Type): boolean
public static "getAllKeyMappings"(): $Map<(StringJS), ($KeyMapping)>
public static "fabric_getCategoryMap"(): $Map<(StringJS), (integer)>
get "down"(): boolean
get "name"(): StringJS
get "default"(): boolean
get "all"(): void
get "keyConflictContext"(): $IKeyConflictContext
get "defaultKeyModifier"(): $KeyModifier
set "keyConflictContext"(value: $IKeyConflictContext$$Type)
get "translatedKeyMessage"(): $Component
set "down"(value: boolean)
get "allKeyMappings$patchouli_$md$d44d69$0"(): $Map
get "category"(): StringJS
get "unbound"(): boolean
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
import {$Optional} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
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
declare module "net.minecraft.client.Minecraft" {
import {$MultiPlayerGameMode} from "net.minecraft.client.multiplayer.MultiPlayerGameMode"
import {$RenderBuffers} from "net.minecraft.client.renderer.RenderBuffers"
import {$LevelStorageSource$LevelStorageAccess$$Type} from "net.minecraft.world.level.storage.LevelStorageSource$LevelStorageAccess"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$PlayerSocialManager} from "net.minecraft.client.gui.screens.social.PlayerSocialManager"
import {$MobEffectTextureManager} from "net.minecraft.client.resources.MobEffectTextureManager"
import {$ClientPacketListener} from "net.minecraft.client.multiplayer.ClientPacketListener"
import {$Minecraft$ChatStatus} from "net.minecraft.client.Minecraft$ChatStatus"
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
import {$MinecraftSessionService} from "com.mojang.authlib.minecraft.MinecraftSessionService"
import {$SkinManager} from "net.minecraft.client.resources.SkinManager"
import {$Thread} from "java.lang.Thread"
import {$Options, $Options$$Type} from "net.minecraft.client.Options"
import {$Tutorial} from "net.minecraft.client.tutorial.Tutorial"
import {$TextureManager} from "net.minecraft.client.renderer.texture.TextureManager"
import {$MinecraftClientAccessor$$Interface} from "net.fabricmc.fabric.mixin.networking.client.accessor.MinecraftClientAccessor"
import {$Window} from "com.mojang.blaze3d.platform.Window"
import {$Music} from "net.minecraft.sounds.Music"
import {$ResourceManager} from "net.minecraft.server.packs.resources.ResourceManager"
import {$EntityModelSet} from "net.minecraft.client.model.geom.EntityModelSet"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ReportingContext} from "net.minecraft.client.multiplayer.chat.report.ReportingContext"
import {$DirectoryValidator} from "net.minecraft.world.level.validation.DirectoryValidator"
import {$Font} from "net.minecraft.client.gui.Font"
import {$IMinecraftExtension$$Interface} from "net.neoforged.neoforge.client.extensions.IMinecraftExtension"
import {$DebugScreenOverlay} from "net.minecraft.client.gui.components.DebugScreenOverlay"
import {$Minecraft$GameLoadCookie$$Type} from "net.minecraft.client.Minecraft$GameLoadCookie"
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
import {$ItemRenderer} from "net.minecraft.client.renderer.entity.ItemRenderer"
import {$Overlay, $Overlay$$Type} from "net.minecraft.client.gui.screens.Overlay"
import {$DataFixer} from "com.mojang.datafixers.DataFixer"
import {$ProfilerFiller} from "net.minecraft.util.profiling.ProfilerFiller"
import {$VanillaPackResources} from "net.minecraft.server.packs.VanillaPackResources"
import {$ReceivingLevelScreen$Reason$$Type} from "net.minecraft.client.gui.screens.ReceivingLevelScreen$Reason"
import {$TickDuration$$Type} from "dev.latvian.mods.kubejs.util.TickDuration"
import {$Gui} from "net.minecraft.client.gui.Gui"
import {$CommandHistory} from "net.minecraft.client.CommandHistory"
import {$SignatureValidator} from "net.minecraft.util.SignatureValidator"
import {$File, $File$$Type} from "java.io.File"
import {$BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"
import {$Locale} from "java.util.Locale"
import {$HitResult} from "net.minecraft.world.phys.HitResult"
import {$ModCheck} from "net.minecraft.util.ModCheck"
import {$GameNarrator} from "net.minecraft.client.GameNarrator"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$HotbarManager} from "net.minecraft.client.HotbarManager"
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$BlockEntityRenderDispatcher} from "net.minecraft.client.renderer.blockentity.BlockEntityRenderDispatcher"
import {$IntegratedServer} from "net.minecraft.client.server.IntegratedServer"
import {$GuiSpriteManager} from "net.minecraft.client.gui.GuiSpriteManager"
import {$LevelStorageSource} from "net.minecraft.world.level.storage.LevelStorageSource"
import {$StoringChunkProgressListener} from "net.minecraft.server.level.progress.StoringChunkProgressListener"
import {$BanDetails} from "com.mojang.authlib.minecraft.BanDetails"
import {$DeltaTracker} from "net.minecraft.client.DeltaTracker"
import {$DownloadedPackSource} from "net.minecraft.client.resources.server.DownloadedPackSource"
import {$Path} from "java.nio.file.Path"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$UUID$$Type} from "java.util.UUID"
import {$ScheduledEvents} from "dev.latvian.mods.kubejs.util.ScheduledEvents"
import {$Runnable} from "java.lang.Runnable"
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

export class $Minecraft extends $ReentrantBlockableEventLoop<($Runnable)> implements $WindowEventHandler$$Interface, $IMinecraftExtension$$Interface, $MinecraftClientAccessor$$Interface, $MinecraftClientKJS$$Interface, $MinecraftAccessor$$Interface {
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

public "getTimer"(): $DeltaTracker
public "setScreen"(arg0: $Screen$$Type): void
public "disconnect"(arg0: $Screen$$Type, arg1: boolean): void
public "disconnect"(): void
public "disconnect"(arg0: $Screen$$Type): void
public "getToasts"(): $ToastComponent
public "getFps"(): integer
public "fillReport"(arg0: $CrashReport$$Type): $CrashReport
public static "fillReport"(arg0: $Minecraft$$Type, arg1: $LanguageManager$$Type, arg2: StringJS, arg3: $Options$$Type, arg4: $CrashReport$$Type): void
public "delayCrash"(arg0: $CrashReport$$Type): void
public "pauseGame"(arg0: boolean): void
public "getUser"(): $User
public "isBlocked"(arg0: $UUID$$Type): boolean
public "isDemo"(): boolean
public "isPaused"(): boolean
public "getConnection"(): $ClientPacketListener
public "run"(): void
public static "getInstance"(): $Minecraft
public "stop"(): void
public "destroy"(): void
public "close"(): void
public "managedBlock"(pIsDone: $BooleanSupplier$$Type): void
public "tick"(): void
public "setLevel"(arg0: $ClientLevel$$Type, arg1: $ReceivingLevelScreen$Reason$$Type): void
public static "crash"(arg0: $Minecraft$$Type, arg1: $File$$Type, arg2: $CrashReport$$Type): void
public "isRunning"(): boolean
public "localvar$eeh000$fabric_events_interaction_v0$modifyItemPick"(arg0: $ItemStack$$Type): $ItemStack
public "getProfiler"(): $ProfilerFiller
public "isSingleplayer"(): boolean
public "delayTextureReload"(): $CompletableFuture<(void)>
public "isLocalPlayer"(arg0: $UUID$$Type): boolean
public "getGameProfile"(): $GameProfile
public "getResourceManager"(): $ResourceManager
public "getLanguageManager"(): $LanguageManager
public "getTextureAtlas"(arg0: $ResourceLocation$$Type): $Function<($ResourceLocation), ($TextureAtlasSprite)>
public "addCustomNbtData"(arg0: $ItemStack$$Type, arg1: $BlockEntity$$Type, arg2: $RegistryAccess$$Type): void
public static "renderNames"(): boolean
public "allowsTelemetry"(): boolean
public "isNameBanned"(): boolean
public static "useFancyGraphics"(): boolean
public "allowsRealms"(): boolean
public static "getLauncherBrand"(): StringJS
public "getSoundManager"(): $SoundManager
public "getSkinManager"(): $SkinManager
public "getTextureManager"(): $TextureManager
public "getGuiSprites"(): $GuiSpriteManager
public "getItemRenderer"(): $ItemRenderer
public "allowsMultiplayer"(): boolean
public "renderBuffers"(): $RenderBuffers
public "commandHistory"(): $CommandHistory
public "directoryValidator"(): $DirectoryValidator
public "quickPlayLog"(): $QuickPlayLog
public "setWindowActive"(arg0: boolean): void
public "isLocalServer"(): boolean
public "realmsDataFetcher"(): $RealmsDataFetcher
public "multiplayerBan"(): $BanDetails
public "updateTitle"(): void
public "isGameLoadFinished"(): boolean
public static "checkModStatus"(): $ModCheck
public "resizeDisplay"(): void
public "getBlockRenderer"(): $BlockRenderDispatcher
public "getDebugOverlay"(): $DebugScreenOverlay
public "getVersionType"(): StringJS
public "getModelManager"(): $ModelManager
public "getLaunchedVersion"(): StringJS
public "getLevelSource"(): $LevelStorageSource
public "getChatStatus"(): $Minecraft$ChatStatus
public "delayCrashRaw"(arg0: $CrashReport$$Type): void
public "isEnforceUnicode"(): boolean
public "setLastInputType"(arg0: $InputType$$Type): void
public "getFrameTimeNs"(): long
public "getMusicManager"(): $MusicManager
public "cursorEntered"(): void
public "doWorldLoad"(arg0: $LevelStorageSource$LevelStorageAccess$$Type, arg1: $PackRepository$$Type, arg2: $WorldStem$$Type, arg3: boolean): void
public "getGpuUtilization"(): double
public "getCameraEntity"(): $Entity
public "clearClientLevel"(arg0: $Screen$$Type): void
public "forceSetScreen"(arg0: $Screen$$Type): void
public "setOverlay"(arg0: $Overlay$$Type): void
public "getWindow"(): $Window
public "tell"(arg0: any): void
public "getOverlay"(): $Overlay
public "getCurrentServer"(): $ServerData
public "handler$dpc000$armorposer$shouldEntityAppearGlowing"(arg0: $Entity$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "handler$eeh000$fabric_events_interaction_v0$cancelItemPick"(arg0: $CallbackInfo$$Type): void
public "getProfileKeySignatureValidator"(): $SignatureValidator
public "clearDownloadedResourcePacks"(): void
public "getBlockEntityRenderDispatcher"(): $BlockEntityRenderDispatcher
public "getBlockColors"(): $BlockColors
public "getTutorial"(): $Tutorial
public "getItemColors"(): $ItemColors
public "getSplashManager"(): $SplashManager
public "getChatListener"(): $ChatListener
public "getLastInputType"(): $InputType
public "getNarrator"(): $GameNarrator
public "getHotbarManager"(): $HotbarManager
public "setCameraEntity"(arg0: $Entity$$Type): void
public "getEntityModels"(): $EntityModelSet
public "isWindowActive"(): boolean
public "getFixerUpper"(): $DataFixer
public "updateMaxMipLevel"(arg0: integer): void
public "getTitle"(): StringJS
public "create$setMissTime"(arg0: integer): void
public "getProxy"(): $Proxy
public "reloadResourcePacks"(): $CompletableFuture<(void)>
public "clearResourcePacksOnError"(arg0: $Throwable$$Type, arg1: $Component$$Type, arg2: $Minecraft$GameLoadCookie$$Type): void
public "getEntityRenderDispatcher"(): $EntityRenderDispatcher
public "emergencySaveAndCrash"(arg0: $CrashReport$$Type): void
public "getMainRenderTarget"(): $RenderTarget
public "getProfileKeyPairManager"(): $ProfileKeyPairManager
public static "useAmbientOcclusion"(): boolean
public "telemetryOptInExtra"(): boolean
public static "useShaderTransparency"(): boolean
public "debugFpsMeterKeyPress"(arg0: integer): void
public "getTelemetryManager"(): $ClientTelemetryManager
public "getSingleplayerServer"(): $IntegratedServer
public "updateReportEnvironment"(arg0: $ReportEnvironment$$Type): void
public "hasSingleplayerServer"(): boolean
public "createWorldOpenFlows"(): $WorldOpenFlows
public "extraTelemetryAvailable"(): boolean
public "debugClientMetricsStart"(arg0: $Consumer$$Type<($Component)>): boolean
public "getMobEffectTextures"(): $MobEffectTextureManager
public "getPlayerSocialManager"(): $PlayerSocialManager
public "getResourcePackRepository"(): $PackRepository
public "getReportingContext"(): $ReportingContext
public "getSituationalMusic"(): $Music
public "showOnlyReducedInfo"(): boolean
public "getMapDecorationTextures"(): $MapDecorationTextureManager
public "isTextFilteringEnabled"(): boolean
public "getScheduledEvents"(): $ScheduledEvents
public "shouldEntityAppearGlowing"(arg0: $Entity$$Type): boolean
public "canValidateProfileKeys"(): boolean
public "getGpuWarnlistManager"(): $GpuWarnlistManager
public "grabPanoramixScreenshot"(arg0: $File$$Type, arg1: integer, arg2: integer): $Component
public "getProgressListener"(): $StoringChunkProgressListener
public "getPaintingTextures"(): $PaintingTextureManager
public "getDownloadedPackSource"(): $DownloadedPackSource
public "prepareForMultiplayer"(): void
public "getMinecraftSessionService"(): $MinecraftSessionService
public "getResourcePackDirectory"(): $Path
public "getVanillaPackResources"(): $VanillaPackResources
public "getLocale"(): $Locale
public "popGuiLayer"(): void
public "pushGuiLayer"(arg0: $Screen$$Type): void
public "setStatusMessage"(message: $Component$$Type): void
public "isKeyMappingDown"(key: $KeyMapping$$Type): boolean
public "getBlockTextureAtlas"(): $Function<($ResourceLocation), ($TextureAtlasSprite)>
public "getCurrentScreen"(): $Screen
public "getCurrentWorldName"(): StringJS
public "setCurrentScreen"(gui: $Screen$$Type): void
public "getKeyBindPressedTicks"(id: StringJS): integer
public "runCommandSilent"(command: StringJS): void
public "setActivePostShader"(id: $ResourceLocation$$Type): void
public "tell"(message: $Component$$Type): void
public "self"(): $Minecraft
public "getParticleTextureAtlas"(): $Function<($ResourceLocation), ($TextureAtlasSprite)>
public "getName"(): $Component
public "isKeyBindDown"(id: StringJS): boolean
public "isShiftDown"(): boolean
public "runCommand"(command: StringJS): void
public "isAltDown"(): boolean
public "isKeyDown"(keyName: StringJS): boolean
public "isKeyDown"(key: integer): boolean
public "setTitle"(t: StringJS): void
public "isCtrlDown"(): boolean
public "scheduleRepeating"(timer: $TemporalAmount$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "scheduleInTicks"(ticks: $TickDuration$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "scheduleRepeatingInTicks"(ticks: $TickDuration$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "schedule"(timer: $TemporalAmount$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "getDisplayName"(): $Component
public static "of"<Msg>(arg0: StringJS, arg1: $Consumer$$Type<(Msg)>): $ProcessorHandle<(Msg)>
get "timer"(): $DeltaTracker
get "toasts"(): $ToastComponent
get "fps"(): integer
get "user"(): $User
get "demo"(): boolean
get "paused"(): boolean
get "connection"(): $ClientPacketListener
get "instance"(): $Minecraft
get "profiler"(): $ProfilerFiller
get "singleplayer"(): boolean
get "gameProfile"(): $GameProfile
get "resourceManager"(): $ResourceManager
get "languageManager"(): $LanguageManager
get "nameBanned"(): boolean
get "launcherBrand"(): StringJS
get "soundManager"(): $SoundManager
get "skinManager"(): $SkinManager
get "textureManager"(): $TextureManager
get "guiSprites"(): $GuiSpriteManager
get "itemRenderer"(): $ItemRenderer
set "windowActive"(value: boolean)
get "localServer"(): boolean
get "gameLoadFinished"(): boolean
get "debugOverlay"(): $DebugScreenOverlay
get "versionType"(): StringJS
get "modelManager"(): $ModelManager
get "launchedVersion"(): StringJS
get "levelSource"(): $LevelStorageSource
get "chatStatus"(): $Minecraft$ChatStatus
get "enforceUnicode"(): boolean
set "lastInputType"(value: $InputType$$Type)
get "frameTimeNs"(): long
get "musicManager"(): $MusicManager
get "gpuUtilization"(): double
set "overlay"(value: $Overlay$$Type)
get "window"(): $Window
get "overlay"(): $Overlay
get "currentServer"(): $ServerData
get "profileKeySignatureValidator"(): $SignatureValidator
get "blockEntityRenderDispatcher"(): $BlockEntityRenderDispatcher
get "blockColors"(): $BlockColors
get "tutorial"(): $Tutorial
get "itemColors"(): $ItemColors
get "splashManager"(): $SplashManager
get "chatListener"(): $ChatListener
get "lastInputType"(): $InputType
get "narrator"(): $GameNarrator
get "hotbarManager"(): $HotbarManager
get "entityModels"(): $EntityModelSet
get "windowActive"(): boolean
get "fixerUpper"(): $DataFixer
get "title"(): StringJS
get "proxy"(): $Proxy
get "entityRenderDispatcher"(): $EntityRenderDispatcher
get "mainRenderTarget"(): $RenderTarget
get "profileKeyPairManager"(): $ProfileKeyPairManager
get "telemetryManager"(): $ClientTelemetryManager
get "singleplayerServer"(): $IntegratedServer
get "mobEffectTextures"(): $MobEffectTextureManager
get "playerSocialManager"(): $PlayerSocialManager
get "resourcePackRepository"(): $PackRepository
get "reportingContext"(): $ReportingContext
get "situationalMusic"(): $Music
get "mapDecorationTextures"(): $MapDecorationTextureManager
get "textFilteringEnabled"(): boolean
get "scheduledEvents"(): $ScheduledEvents
get "gpuWarnlistManager"(): $GpuWarnlistManager
get "progressListener"(): $StoringChunkProgressListener
get "paintingTextures"(): $PaintingTextureManager
get "downloadedPackSource"(): $DownloadedPackSource
get "minecraftSessionService"(): $MinecraftSessionService
get "resourcePackDirectory"(): $Path
get "vanillaPackResources"(): $VanillaPackResources
get "locale"(): $Locale
set "statusMessage"(value: $Component$$Type)
get "blockTextureAtlas"(): $Function<($ResourceLocation), ($TextureAtlasSprite)>
get "currentScreen"(): $Screen
get "currentWorldName"(): StringJS
set "currentScreen"(value: $Screen$$Type)
set "activePostShader"(value: $ResourceLocation$$Type)
get "particleTextureAtlas"(): $Function<($ResourceLocation), ($TextureAtlasSprite)>
get "name"(): $Component
get "shiftDown"(): boolean
get "altDown"(): boolean
set "title"(value: StringJS)
get "ctrlDown"(): boolean
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
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$CameraAccessor$$Interface} from "com.blackgear.platform.core.mixin.access.CameraAccessor"
import {$Vector3f} from "org.joml.Vector3f"
import {$Quaternionf} from "org.joml.Quaternionf"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$Camera$NearPlane} from "net.minecraft.client.Camera$NearPlane"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$FogType} from "net.minecraft.world.level.material.FogType"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $Camera implements $CameraAccessor$$Interface {
static readonly "FOG_DISTANCE_SCALE": float

constructor()

public "getXRot"(): float
public "getYRot"(): float
public "isDetached"(): boolean
public "getPosition"(): $Vec3
public "reset"(): void
public "setup"(arg0: $BlockGetter$$Type, arg1: $Entity$$Type, arg2: boolean, arg3: boolean, arg4: float): void
public "tick"(): void
public "getLevel"(): $BlockGetter
public "rotation"(): $Quaternionf
public "getUpVector"(): $Vector3f
public "getEntity"(): $Entity
public "isInitialized"(): boolean
public "getLookVector"(): $Vector3f
public "getRoll"(): float
public "getFluidInCamera"(): $FogType
public "getPartialTickTime"(): float
public "getBlockPosition"(): $BlockPos
public "getBlockAtCamera"(): $BlockState
public "getNearPlane"(): $Camera$NearPlane
public "getLeftVector"(): $Vector3f
get "XRot"(): float
get "YRot"(): float
get "detached"(): boolean
get "position"(): $Vec3
get "level"(): $BlockGetter
get "upVector"(): $Vector3f
get "entity"(): $Entity
get "initialized"(): boolean
get "lookVector"(): $Vector3f
get "roll"(): float
get "fluidInCamera"(): $FogType
get "partialTickTime"(): float
get "blockPosition"(): $BlockPos
get "blockAtCamera"(): $BlockState
get "nearPlane"(): $Camera$NearPlane
get "leftVector"(): $Vector3f
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
declare module "net.minecraft.client.OptionInstance$CycleableValueSet" {
import {$OptionInstance$TooltipSupplier$$Type} from "net.minecraft.client.OptionInstance$TooltipSupplier"
import {$Optional} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
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
declare module "net.minecraft.client.Camera$NearPlane" {
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$NearPlaneAccessor$$Interface} from "com.blackgear.platform.core.mixin.access.NearPlaneAccessor"

export class $Camera$NearPlane implements $NearPlaneAccessor$$Interface {
public "getForward"(): $Vec3
public "getPointOnPlane"(arg0: float, arg1: float): $Vec3
public "getTopLeft"(): $Vec3
public "getBottomLeft"(): $Vec3
public "getTopRight"(): $Vec3
public "getBottomRight"(): $Vec3
get "forward"(): $Vec3
get "topLeft"(): $Vec3
get "bottomLeft"(): $Vec3
get "topRight"(): $Vec3
get "bottomRight"(): $Vec3
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
declare module "net.minecraft.client.CloudStatus" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
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
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
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
declare module "net.minecraft.client.KeyboardHandler" {
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"

export class $KeyboardHandler {
static readonly "DEBUG_CRASH_TIME": integer

constructor(arg0: $Minecraft$$Type)

public "setup"(arg0: long): void
public "tick"(): void
public "handler$bio000$emi$onKey"(window: long, key: integer, scancode: integer, action: integer, modifiers: integer, info: $CallbackInfo$$Type): void
public "handler$bio000$emi$onChar"(window: long, codePoint: integer, modifiers: integer, info: $CallbackInfo$$Type): void
public "getClipboard"(): StringJS
public "keyPress"(arg0: long, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
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
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $DebugQueryHandler {
constructor(arg0: $ClientPacketListener$$Type)

public "handleResponse"(arg0: integer, arg1: $CompoundTag$$Type): boolean
public "queryBlockEntityTag"(arg0: $BlockPos$$Type, arg1: $Consumer$$Type<($CompoundTag)>): void
public "queryEntityTag"(arg0: integer, arg1: $Consumer$$Type<($CompoundTag)>): void
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
declare module "net.minecraft.client.GuiMessage" {
import {$MessageSignature, $MessageSignature$$Type} from "net.minecraft.network.chat.MessageSignature"
import {$GuiMessageTag$Icon} from "net.minecraft.client.GuiMessageTag$Icon"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$GuiMessageTag, $GuiMessageTag$$Type} from "net.minecraft.client.GuiMessageTag"
import {$Record} from "java.lang.Record"

export class $GuiMessage extends $Record {
constructor(arg0: integer, arg1: $Component$$Type, arg2: $MessageSignature$$Type, arg3: $GuiMessageTag$$Type)

public "signature"(): $MessageSignature
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "tag"(): $GuiMessageTag
public "content"(): $Component
public "addedTime"(): integer
public "icon"(): $GuiMessageTag$Icon
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiMessage$$Type = ({"signature"?: $MessageSignature$$Type, "content"?: $Component$$Type, "tag"?: $GuiMessageTag$$Type, "addedTime"?: integer}) | ([signature?: $MessageSignature$$Type, content?: $Component$$Type, tag?: $GuiMessageTag$$Type, addedTime?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiMessage$$Original = $GuiMessage;}
declare module "net.minecraft.client.DeltaTracker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DeltaTracker$$Interface {
get "realtimeDeltaTicks"(): float
get "gameTimeDeltaTicks"(): float
}

export class $DeltaTracker implements $DeltaTracker$$Interface {
static readonly "ZERO": $DeltaTracker
static readonly "ONE": $DeltaTracker

 "getGameTimeDeltaPartialTick"(arg0: boolean): float
 "getRealtimeDeltaTicks"(): float
 "getGameTimeDeltaTicks"(): float
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
