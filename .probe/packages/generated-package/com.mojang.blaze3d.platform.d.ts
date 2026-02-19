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
import {$IntUnaryOperator$$Type} from "java.util.function.IntUnaryOperator"
import {$File$$Type} from "java.io.File"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$NativeImageAccessor$$Interface} from "com.corosus.watut.mixin.client.NativeImageAccessor"
import {$NativeImage$Format, $NativeImage$Format$$Type} from "com.mojang.blaze3d.platform.NativeImage$Format"
import {$InputStream$$Type} from "java.io.InputStream"
import {$Path$$Type} from "java.nio.file.Path"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$FT_Face$$Type} from "org.lwjgl.util.freetype.FT_Face"

export class $NativeImage implements $AutoCloseable$$Interface, $NativeImageAccessor$$Interface {
constructor(arg0: integer, arg1: integer, arg2: boolean)
constructor(arg0: $NativeImage$Format$$Type, arg1: integer, arg2: integer, arg3: boolean)

public "upload"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: boolean, arg8: boolean): void
public "upload"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: boolean, arg8: boolean, arg9: boolean, arg10: boolean): void
public "upload"(arg0: integer, arg1: integer, arg2: integer, arg3: boolean): void
public "toString"(): StringJS
public "format"(): $NativeImage$Format
public static "read"(arg0: $NativeImage$Format$$Type, arg1: $ByteBuffer$$Type): $NativeImage
public static "read"(arg0: (byte)[]): $NativeImage
public static "read"(arg0: $NativeImage$Format$$Type, arg1: $InputStream$$Type): $NativeImage
public static "read"(arg0: $InputStream$$Type): $NativeImage
public static "read"(arg0: $ByteBuffer$$Type): $NativeImage
public "close"(): void
public "copyFrom"(arg0: $NativeImage$$Type): void
public "pixels"(): long
public "writeToFile"(arg0: $File$$Type): void
public "writeToFile"(arg0: $Path$$Type): void
public "flipY"(): void
public "untrack"(): void
public "getGreenOrLuminance"(arg0: integer, arg1: integer): byte
public "getLuminanceOrAlpha"(arg0: integer, arg1: integer): byte
public "downloadDepthBuffer"(arg0: float): void
public "mappedCopy"(arg0: $IntUnaryOperator$$Type): $NativeImage
public "copyRect"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: boolean, arg7: boolean): void
public "copyRect"(arg0: $NativeImage$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: boolean, arg8: boolean): void
public "blendPixel"(arg0: integer, arg1: integer, arg2: integer): void
public "fillRect"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "drawPixels"(): void
public "getPixelsRGBA"(): (integer)[]
public "applyToAllPixels"(arg0: $IntUnaryOperator$$Type): void
public "setPixelLuminance"(arg0: integer, arg1: integer, arg2: byte): void
public "setPixelRGBA"(arg0: integer, arg1: integer, arg2: integer): void
public "getPixelRGBA"(arg0: integer, arg1: integer): integer
public "getBlueOrLuminance"(arg0: integer, arg1: integer): byte
public "downloadTexture"(arg0: integer, arg1: boolean): void
/**
 * 
 * @deprecated
 */
public "makePixelArray"(): (integer)[]
public "copyFromFont"(arg0: $FT_Face$$Type, arg1: integer): boolean
public "getRedOrLuminance"(arg0: integer, arg1: integer): byte
public "asByteArray"(): (byte)[]
public "getWidth"(): integer
public "getHeight"(): integer
public "resizeSubRectTo"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $NativeImage$$Type): void
get "pixelsRGBA"(): (integer)[]
get "width"(): integer
get "height"(): integer
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

public "getX"(): integer
public "toString"(): StringJS
public "getPreferredVidMode"(arg0: ($VideoMode$$Type)?): $VideoMode
public "getMonitor"(): long
public "getMode"(arg0: integer): $VideoMode
public "getVideoModeIndex"(arg0: $VideoMode$$Type): integer
public "getCurrentMode"(): $VideoMode
public "getModeCount"(): integer
public "refreshVideoModes"(): void
public "getY"(): integer
get "x"(): integer
get "monitor"(): long
get "currentMode"(): $VideoMode
get "modeCount"(): integer
get "y"(): integer
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
import {$OptionalInt} from "java.util.OptionalInt"
import {$LazyLoadedValue} from "net.minecraft.util.LazyLoadedValue"
import {$InputConstants$Type} from "com.mojang.blaze3d.platform.InputConstants$Type"
import {$Component} from "net.minecraft.network.chat.Component"

export class $InputConstants$Key {
 "displayName": $LazyLoadedValue<($Component)>

public "getName"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getValue"(): integer
public "getType"(): $InputConstants$Type
public "getDisplayName"(): $Component
public "getNumericKeyValue"(): $OptionalInt
get "name"(): StringJS
get "value"(): integer
get "type"(): $InputConstants$Type
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
public "components"(): integer
public "setUnpackPixelStoreState"(): void
public "hasLuminanceOrGreen"(): boolean
public "luminanceOrGreenOffset"(): integer
public "luminanceOrRedOffset"(): integer
public "setPackPixelStoreState"(): void
public "hasLuminanceOrAlpha"(): boolean
public "luminanceOrAlphaOffset"(): integer
public "luminanceOrBlueOffset"(): integer
public "hasAlpha"(): boolean
public "hasBlue"(): boolean
public "hasGreen"(): boolean
public "hasRed"(): boolean
public "blueOffset"(): integer
public "redOffset"(): integer
public "glFormat"(): integer
public "supportedByStb"(): boolean
public "hasLuminance"(): boolean
public "alphaOffset"(): integer
public "greenOffset"(): integer
public "hasLuminanceOrBlue"(): boolean
public "hasLuminanceOrRed"(): boolean
public "luminanceOffset"(): integer
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
public "getRedBits"(): integer
public "getRefreshRate"(): integer
public "getGreenBits"(): integer
public "getBlueBits"(): integer
public "getWidth"(): integer
public "getHeight"(): integer
get "redBits"(): integer
get "refreshRate"(): integer
get "greenBits"(): integer
get "blueBits"(): integer
get "width"(): integer
get "height"(): integer
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
 "setWindowActive"(arg0: boolean): void
 "resizeDisplay"(): void
 "cursorEntered"(): void
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
import {$ScreenManager$$Type} from "com.mojang.blaze3d.platform.ScreenManager"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$VideoMode, $VideoMode$$Type} from "com.mojang.blaze3d.platform.VideoMode"
import {$WindowKJS$$Interface} from "dev.latvian.mods.kubejs.core.WindowKJS"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"

export class $Window implements $AutoCloseable$$Interface, $WindowKJS$$Interface {
static readonly "BASE_HEIGHT": integer
static readonly "BASE_WIDTH": integer

constructor(arg0: $WindowEventHandler$$Type, arg1: $ScreenManager$$Type, arg2: $DisplayData$$Type, arg3: StringJS, arg4: StringJS)

public "setPreferredFullscreenVideoMode"(arg0: ($VideoMode$$Type)?): void
public "getX"(): integer
public "setIcon"(arg0: $PackResources$$Type, arg1: $IconSet$$Type): void
public "setTitle"(arg0: StringJS): void
public "close"(): void
public "defaultErrorCallback"(arg0: integer, arg1: long): void
public static "getPlatform"(): StringJS
public "changeFullscreenVideoMode"(): void
public "findBestMonitor"(): $Monitor
public static "checkGlfwError"(arg0: $BiConsumer$$Type<(integer), (StringJS)>): void
public "getRefreshRate"(): integer
public "getY"(): integer
public "getPreferredFullscreenVideoMode"(): $Optional<($VideoMode)>
public "getGuiScaledWidth"(): integer
public "getGuiScaledHeight"(): integer
public "getGuiScale"(): double
public "setFramerateLimit"(arg0: integer): void
public "setErrorSection"(arg0: StringJS): void
public "isFullscreen"(): boolean
public "setWindowed"(arg0: integer, arg1: integer): void
public "toggleFullScreen"(): void
public "updateVsync"(arg0: boolean): void
public "getFramerateLimit"(): integer
public "shouldClose"(): boolean
public "updateDisplay"(): void
public "calculateScale"(arg0: integer, arg1: boolean): integer
public "setGuiScale"(arg0: double): void
public "getWidth"(): integer
public "getHeight"(): integer
public "setWidth"(arg0: integer): void
public "setHeight"(arg0: integer): void
public "getWindow"(): long
public "getScreenWidth"(): integer
public "getScreenHeight"(): integer
public "updateRawMouseInput"(arg0: boolean): void
public "setDefaultErrorCallback"(): void
public "kjs$loadIcons"(original: $List$$Type<($IoSupplier$$Type<($InputStream$$Type)>)>): $List<($IoSupplier<($InputStream)>)>
set "preferredFullscreenVideoMode"(value: ($VideoMode$$Type)?)
get "x"(): integer
set "title"(value: StringJS)
get "platform"(): StringJS
get "refreshRate"(): integer
get "y"(): integer
get "preferredFullscreenVideoMode"(): $Optional<($VideoMode)>
get "guiScaledWidth"(): integer
get "guiScaledHeight"(): integer
get "guiScale"(): double
set "framerateLimit"(value: integer)
set "errorSection"(value: StringJS)
get "fullscreen"(): boolean
get "framerateLimit"(): integer
set "guiScale"(value: double)
get "width"(): integer
get "height"(): integer
set "width"(value: integer)
set "height"(value: integer)
get "window"(): long
get "screenWidth"(): integer
get "screenHeight"(): integer
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
public "getMacIcon"(arg0: $PackResources$$Type): $IoSupplier<($InputStream)>
public "getStandardIcons"(arg0: $PackResources$$Type): $List<($IoSupplier<($InputStream)>)>
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
