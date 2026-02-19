declare module "org.lwjgl.glfw.GLFWVidMode$Buffer" {
import {$StructBuffer} from "org.lwjgl.system.StructBuffer"
import {$GLFWVidMode} from "org.lwjgl.glfw.GLFWVidMode"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $GLFWVidMode$Buffer extends $StructBuffer<($GLFWVidMode), ($GLFWVidMode$Buffer)> {
constructor(arg0: long, arg1: integer)
constructor(arg0: $ByteBuffer$$Type)

public "width"(): integer
public "refreshRate"(): integer
public "greenBits"(): integer
public "redBits"(): integer
public "blueBits"(): integer
public "height"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GLFWVidMode$Buffer$$Type = ($GLFWVidMode$Buffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GLFWVidMode$Buffer$$Original = $GLFWVidMode$Buffer;}
declare module "org.lwjgl.glfw.GLFWVidMode" {
import {$GLFWVidMode$Buffer} from "org.lwjgl.glfw.GLFWVidMode$Buffer"
import {$Struct} from "org.lwjgl.system.Struct"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $GLFWVidMode extends $Struct<($GLFWVidMode)> {
static readonly "ALIGNOF": integer
static readonly "SIZEOF": integer
static readonly "GREENBITS": integer
static readonly "WIDTH": integer
static readonly "REFRESHRATE": integer
static readonly "HEIGHT": integer
static readonly "REDBITS": integer
static readonly "BLUEBITS": integer

constructor(arg0: $ByteBuffer$$Type)

public static "create"(arg0: long): $GLFWVidMode
public static "create"(arg0: long, arg1: integer): $GLFWVidMode$Buffer
public "width"(): integer
public static "nwidth"(arg0: long): integer
public "sizeof"(): integer
public static "createSafe"(arg0: long, arg1: integer): $GLFWVidMode$Buffer
public static "createSafe"(arg0: long): $GLFWVidMode
public static "nheight"(arg0: long): integer
public "refreshRate"(): integer
public static "ngreenBits"(arg0: long): integer
public "greenBits"(): integer
public "redBits"(): integer
public "blueBits"(): integer
public static "nblueBits"(arg0: long): integer
public static "nredBits"(arg0: long): integer
public "height"(): integer
public static "nrefreshRate"(arg0: long): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GLFWVidMode$$Type = ($GLFWVidMode);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GLFWVidMode$$Original = $GLFWVidMode;}
