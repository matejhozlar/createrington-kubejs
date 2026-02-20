declare module "com.mojang.blaze3d.platform.ScreenManager" {
import {$MonitorCreator$$Type} from "com.mojang.blaze3d.platform.MonitorCreator"
import {$Window$$Type} from "com.mojang.blaze3d.platform.Window"
import {$Monitor} from "com.mojang.blaze3d.platform.Monitor"

export class $ScreenManager {
constructor(arg0: $MonitorCreator$$Type)

public "shutdown"(): void
public static "clamp"(arg0: integer, arg1: integer, arg2: integer): integer
public "getMonitor"(arg0: long): $Monitor
public "findBestMonitor"(arg0: $Window$$Type): $Monitor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenManager$$Type = ($ScreenManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenManager$$Original = $ScreenManager;}
declare module "com.mojang.blaze3d.platform.Monitor" {
import {$Optional$$Type} from "java.util.Optional"
import {$VideoMode, $VideoMode$$Type} from "com.mojang.blaze3d.platform.VideoMode"

export class $Monitor {
constructor(arg0: long)

public "toString"(): StringJS
public "getX"(): integer
public "getMode"(arg0: integer): $VideoMode
public "getPreferredVidMode"(arg0: ($VideoMode$$Type)?): $VideoMode
public "getMonitor"(): long
public "getY"(): integer
public "refreshVideoModes"(): void
public "getCurrentMode"(): $VideoMode
public "getModeCount"(): integer
public "getVideoModeIndex"(arg0: $VideoMode$$Type): integer
get "x"(): integer
get "monitor"(): long
get "y"(): integer
get "currentMode"(): $VideoMode
get "modeCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Monitor$$Type = ($Monitor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Monitor$$Original = $Monitor;}
declare module "com.mojang.blaze3d.platform.InputConstants$Key" {
import {$AccessInputConstantsKey$$Interface} from "com.blamejared.controlling.mixin.AccessInputConstantsKey"
import {$Map} from "java.util.Map"
import {$OptionalInt} from "java.util.OptionalInt"
import {$LazyLoadedValue} from "net.minecraft.util.LazyLoadedValue"
import {$InputConstants$Type} from "com.mojang.blaze3d.platform.InputConstants$Type"
import {$Component} from "net.minecraft.network.chat.Component"

export class $InputConstants$Key implements $AccessInputConstantsKey$$Interface {
 "displayName": $LazyLoadedValue<($Component)>

public "getName"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getValue"(): integer
public "getType"(): $InputConstants$Type
public "getDisplayName"(): $Component
public static "getNAME_MAP$controlling_$md$6d3b50$0"(): $Map
public "getNumericKeyValue"(): $OptionalInt
public static "controlling$getNAME_MAP"(): $Map<(StringJS), ($InputConstants$Key)>
get "name"(): StringJS
get "value"(): integer
get "type"(): $InputConstants$Type
get "NAME_MAP$controlling_$md$6d3b50$0"(): $Map
get "numericKeyValue"(): $OptionalInt
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputConstants$Key$$Type = ($InputConstants$Key);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InputConstants$Key$$Original = $InputConstants$Key;}
declare module "com.mojang.blaze3d.platform.NativeImage$Format" {
import {$Enum} from "java.lang.Enum"

export class $NativeImage$Format extends $Enum<($NativeImage$Format)> {
static readonly "LUMINANCE_ALPHA": $NativeImage$Format
static readonly "RGBA": $NativeImage$Format
static readonly "LUMINANCE": $NativeImage$Format
static readonly "RGB": $NativeImage$Format

public static "values"(): ($NativeImage$Format)[]
public static "valueOf"(arg0: StringJS): $NativeImage$Format
public "setUnpackPixelStoreState"(): void
public "luminanceOrRedOffset"(): integer
public "luminanceOrGreenOffset"(): integer
public "luminanceOrAlphaOffset"(): integer
public "setPackPixelStoreState"(): void
public "hasLuminanceOrGreen"(): boolean
public "luminanceOrBlueOffset"(): integer
public "hasLuminanceOrAlpha"(): boolean
public "glFormat"(): integer
public "components"(): integer
public "hasAlpha"(): boolean
public "hasRed"(): boolean
public "hasBlue"(): boolean
public "hasGreen"(): boolean
public "redOffset"(): integer
public "blueOffset"(): integer
public "alphaOffset"(): integer
public "luminanceOffset"(): integer
public "hasLuminanceOrBlue"(): boolean
public "hasLuminanceOrRed"(): boolean
public "supportedByStb"(): boolean
public "greenOffset"(): integer
public "hasLuminance"(): boolean
get "unpackPixelStoreState"(): void
get "packPixelStoreState"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NativeImage$Format$$Type = (("rgba") | ("rgb") | ("luminance_alpha") | ("luminance"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NativeImage$Format$$Original = $NativeImage$Format;}
declare module "com.mojang.blaze3d.platform.DisplayData" {
import {$OptionalInt, $OptionalInt$$Type} from "java.util.OptionalInt"

export class $DisplayData {
readonly "fullscreenHeight": $OptionalInt
readonly "fullscreenWidth": $OptionalInt
readonly "width": integer
readonly "height": integer
readonly "isFullscreen": boolean

constructor(arg0: integer, arg1: integer, arg2: $OptionalInt$$Type, arg3: $OptionalInt$$Type, arg4: boolean)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplayData$$Type = ($DisplayData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DisplayData$$Original = $DisplayData;}
declare module "com.mojang.blaze3d.platform.MonitorCreator" {
import {$Monitor, $Monitor$$Type} from "com.mojang.blaze3d.platform.Monitor"

export interface $MonitorCreator$$Interface {

(arg0: long): $Monitor$$Type
}

export class $MonitorCreator implements $MonitorCreator$$Interface {
 "createMonitor"(arg0: long): $Monitor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MonitorCreator$$Type = ((arg0: long) => $Monitor$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MonitorCreator$$Original = $MonitorCreator;}
declare module "com.mojang.blaze3d.platform.NativeImage" {
import {$NativeImageAccessor$$Interface} from "net.caffeinemc.mods.sodium.mixin.features.textures.NativeImageAccessor"
import {$IntUnaryOperator$$Type} from "java.util.function.IntUnaryOperator"
import {$File$$Type} from "java.io.File"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$NativeImageAccessor$$Interface as $NativeImageAccessor$1$$Interface} from "dev.tr7zw.skinlayers.accessor.NativeImageAccessor"
import {$NativeImageAccessor$$Interface as $NativeImageAccessor$0$$Interface} from "com.corosus.watut.mixin.client.NativeImageAccessor"
import {$NativeImage$Format, $NativeImage$Format$$Type} from "com.mojang.blaze3d.platform.NativeImage$Format"
import {$Path$$Type} from "java.nio.file.Path"
import {$InputStream$$Type} from "java.io.InputStream"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$FT_Face$$Type} from "org.lwjgl.util.freetype.FT_Face"

export class $NativeImage implements $AutoCloseable$$Interface, $NativeImageAccessor$$Interface, $NativeImageAccessor$1$$Interface, $NativeImageAccessor$0$$Interface {
constructor(arg0: $NativeImage$Format$$Type, arg1: integer, arg2: integer, arg3: boolean)
constructor(arg0: integer, arg1: integer, arg2: boolean)

public "toString"(): StringJS
public "format"(): $NativeImage$Format
public static "read"(arg0: $NativeImage$Format$$Type, arg1: $ByteBuffer$$Type): $NativeImage
public static "read"(arg0: (byte)[]): $NativeImage
public static "read"(arg0: $InputStream$$Type): $NativeImage
public static "read"(arg0: $NativeImage$Format$$Type, arg1: $InputStream$$Type): $NativeImage
public static "read"(arg0: $ByteBuffer$$Type): $NativeImage
public "close"(): void
public "copyFrom"(arg0: $NativeImage$$Type): void
public "writeToFile"(arg0: $Path$$Type): void
public "writeToFile"(arg0: $File$$Type): void
public "getGreenOrLuminance"(arg0: integer, arg1: integer): byte
public "downloadDepthBuffer"(arg0: float): void
public "getLuminanceOrAlpha"(arg0: integer, arg1: integer): byte
public "skinlayers$isAllocated"(): boolean
public "getWidth"(): integer
public "getPixels"(): long
public "setPixelRGBA"(arg0: integer, arg1: integer, arg2: integer): void
public "upload"(arg0: integer, arg1: integer, arg2: integer, arg3: boolean): void
public "upload"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: boolean, arg8: boolean): void
public "upload"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: boolean, arg8: boolean, arg9: boolean, arg10: boolean): void
public "pixels"(): long
public "untrack"(): void
public "resizeSubRectTo"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $NativeImage$$Type): void
public "getHeight"(): integer
public "blendPixel"(arg0: integer, arg1: integer, arg2: integer): void
public "mappedCopy"(arg0: $IntUnaryOperator$$Type): $NativeImage
public "copyRect"(arg0: $NativeImage$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: boolean, arg8: boolean): void
public "copyRect"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: boolean, arg7: boolean): void
public "fillRect"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "drawPixels"(): void
public "flipY"(): void
public "getBlueOrLuminance"(arg0: integer, arg1: integer): byte
public "getPixelRGBA"(arg0: integer, arg1: integer): integer
public "getRedOrLuminance"(arg0: integer, arg1: integer): byte
public "setPixelLuminance"(arg0: integer, arg1: integer, arg2: byte): void
public "downloadTexture"(arg0: integer, arg1: boolean): void
public "applyToAllPixels"(arg0: $IntUnaryOperator$$Type): void
/**
 * 
 * @deprecated
 */
public "makePixelArray"(): (integer)[]
public "copyFromFont"(arg0: $FT_Face$$Type, arg1: integer): boolean
public "asByteArray"(): (byte)[]
public "getPixelsRGBA"(): (integer)[]
get "width"(): integer
get "height"(): integer
get "pixelsRGBA"(): (integer)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NativeImage$$Type = ($NativeImage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NativeImage$$Original = $NativeImage;}
declare module "com.mojang.blaze3d.platform.VideoMode" {
import {$GLFWVidMode$Buffer$$Type} from "org.lwjgl.glfw.GLFWVidMode$Buffer"
import {$Optional} from "java.util.Optional"
import {$GLFWVidMode$$Type} from "org.lwjgl.glfw.GLFWVidMode"

export class $VideoMode {
constructor(arg0: $GLFWVidMode$$Type)
constructor(arg0: $GLFWVidMode$Buffer$$Type)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "write"(): StringJS
public static "read"(arg0: StringJS): $Optional<($VideoMode)>
public "getWidth"(): integer
public "getRedBits"(): integer
public "getHeight"(): integer
public "getRefreshRate"(): integer
public "getBlueBits"(): integer
public "getGreenBits"(): integer
get "width"(): integer
get "redBits"(): integer
get "height"(): integer
get "refreshRate"(): integer
get "blueBits"(): integer
get "greenBits"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VideoMode$$Type = ($VideoMode);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VideoMode$$Original = $VideoMode;}
declare module "com.mojang.blaze3d.platform.WindowEventHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $WindowEventHandler$$Interface {
set "windowActive"(value: boolean)
}

export class $WindowEventHandler implements $WindowEventHandler$$Interface {
 "resizeDisplay"(): void
 "cursorEntered"(): void
 "setWindowActive"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WindowEventHandler$$Type = ($WindowEventHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WindowEventHandler$$Original = $WindowEventHandler;}
declare module "com.mojang.blaze3d.platform.Window" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$WindowEventHandler$$Type} from "com.mojang.blaze3d.platform.WindowEventHandler"
import {$List, $List$$Type} from "java.util.List"
import {$PackResources$$Type} from "net.minecraft.server.packs.PackResources"
import {$IconSet$$Type} from "com.mojang.blaze3d.platform.IconSet"
import {$IoSupplier, $IoSupplier$$Type} from "net.minecraft.server.packs.resources.IoSupplier"
import {$Monitor} from "com.mojang.blaze3d.platform.Monitor"
import {$DisplayData$$Type} from "com.mojang.blaze3d.platform.DisplayData"
import {$Operation$$Type} from "com.llamalad7.mixinextras.injector.wrapoperation.Operation"
import {$ScreenManager$$Type} from "com.mojang.blaze3d.platform.ScreenManager"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$NativeWindowHandle$$Interface} from "net.caffeinemc.mods.sodium.client.platform.NativeWindowHandle"
import {$VideoMode, $VideoMode$$Type} from "com.mojang.blaze3d.platform.VideoMode"
import {$WindowKJS$$Interface} from "dev.latvian.mods.kubejs.core.WindowKJS"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"

export class $Window implements $AutoCloseable$$Interface, $NativeWindowHandle$$Interface, $WindowKJS$$Interface {
static readonly "BASE_HEIGHT": integer
static readonly "BASE_WIDTH": integer

constructor(arg0: $WindowEventHandler$$Type, arg1: $ScreenManager$$Type, arg2: $DisplayData$$Type, arg3: StringJS, arg4: StringJS)

public "close"(): void
public "getWidth"(): integer
public "setWidth"(arg0: integer): void
public "setHeight"(arg0: integer): void
public "setIcon"(arg0: $PackResources$$Type, arg1: $IconSet$$Type): void
public "setTitle"(arg0: StringJS): void
public "getX"(): integer
public "defaultErrorCallback"(arg0: integer, arg1: long): void
public "changeFullscreenVideoMode"(): void
public "wrapOperation$ced000$sodium$setAdditionalWindowHints"(arg0: integer, arg1: integer, arg2: charseq, arg3: long, arg4: long, arg5: $Operation$$Type): long
public "getGuiScale"(): double
public "getY"(): integer
public "getScreenHeight"(): integer
public "getScreenWidth"(): integer
public static "getPlatform"(): StringJS
public "calculateScale"(arg0: integer, arg1: boolean): integer
public "getFramerateLimit"(): integer
public "setGuiScale"(arg0: double): void
public "updateDisplay"(): void
public "shouldClose"(): boolean
public "toggleFullScreen"(): void
public "updateVsync"(arg0: boolean): void
public "setWindowed"(arg0: integer, arg1: integer): void
public "setFramerateLimit"(arg0: integer): void
public "isFullscreen"(): boolean
public "setErrorSection"(arg0: StringJS): void
public "getWindow"(): long
public "setDefaultErrorCallback"(): void
public "updateRawMouseInput"(arg0: boolean): void
public "getHeight"(): integer
public "getPreferredFullscreenVideoMode"(): $Optional<($VideoMode)>
public static "checkGlfwError"(arg0: $BiConsumer$$Type<(integer), (StringJS)>): void
public "getGuiScaledHeight"(): integer
public "getGuiScaledWidth"(): integer
public "getRefreshRate"(): integer
public "findBestMonitor"(): $Monitor
public "getWin32Handle"(): long
public "setPreferredFullscreenVideoMode"(arg0: ($VideoMode$$Type)?): void
public "kjs$loadIcons"(original: $List$$Type<($IoSupplier$$Type<($InputStream$$Type)>)>): $List<($IoSupplier<($InputStream)>)>
get "width"(): integer
set "width"(value: integer)
set "height"(value: integer)
set "title"(value: StringJS)
get "x"(): integer
get "guiScale"(): double
get "y"(): integer
get "screenHeight"(): integer
get "screenWidth"(): integer
get "platform"(): StringJS
get "framerateLimit"(): integer
set "guiScale"(value: double)
set "framerateLimit"(value: integer)
get "fullscreen"(): boolean
set "errorSection"(value: StringJS)
get "window"(): long
get "height"(): integer
get "preferredFullscreenVideoMode"(): $Optional<($VideoMode)>
get "guiScaledHeight"(): integer
get "guiScaledWidth"(): integer
get "refreshRate"(): integer
get "win32Handle"(): long
set "preferredFullscreenVideoMode"(value: ($VideoMode$$Type)?)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Window$$Type = ($Window);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Window$$Original = $Window;}
declare module "com.mojang.blaze3d.platform.InputConstants$Type" {
import {$Enum} from "java.lang.Enum"
import {$InputConstants$Key} from "com.mojang.blaze3d.platform.InputConstants$Key"

export class $InputConstants$Type extends $Enum<($InputConstants$Type)> {
static readonly "SCANCODE": $InputConstants$Type
static readonly "MOUSE": $InputConstants$Type
static readonly "KEYSYM": $InputConstants$Type

public "getOrCreate"(arg0: integer): $InputConstants$Key
public static "values"(): ($InputConstants$Type)[]
public static "valueOf"(arg0: StringJS): $InputConstants$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputConstants$Type$$Type = (("keysym") | ("scancode") | ("mouse"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InputConstants$Type$$Original = $InputConstants$Type;}
declare module "com.mojang.blaze3d.platform.IconSet" {
import {$Enum} from "java.lang.Enum"
import {$List} from "java.util.List"
import {$PackResources$$Type} from "net.minecraft.server.packs.PackResources"
import {$IoSupplier} from "net.minecraft.server.packs.resources.IoSupplier"
import {$InputStream} from "java.io.InputStream"

export class $IconSet extends $Enum<($IconSet)> {
static readonly "SNAPSHOT": $IconSet
static readonly "RELEASE": $IconSet

public static "values"(): ($IconSet)[]
public static "valueOf"(arg0: StringJS): $IconSet
public "getStandardIcons"(arg0: $PackResources$$Type): $List<($IoSupplier<($InputStream)>)>
public "getMacIcon"(arg0: $PackResources$$Type): $IoSupplier<($InputStream)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IconSet$$Type = (("release") | ("snapshot"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IconSet$$Original = $IconSet;}
