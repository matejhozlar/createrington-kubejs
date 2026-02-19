declare module "net.createmod.catnip.theme.Color" {
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$Style} from "net.minecraft.network.chat.Style"
import {$Vector3f} from "org.joml.Vector3f"
import {$Couple$$Type} from "net.createmod.catnip.data.Couple"

export class $Color {
static readonly "RED": $Color
static readonly "TRANSPARENT_BLACK": $Color
static readonly "WHITE": $Color
static readonly "BLACK": $Color
static readonly "SPRING_GREEN": $Color
static readonly "PURPLE": $Color
static readonly "GREEN": $Color

constructor(arg0: integer, arg1: boolean)
constructor(arg0: integer)
constructor(arg0: float, arg1: float, arg2: float, arg3: float)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)
constructor(arg0: integer, arg1: integer, arg2: integer)

public "setValue"(arg0: integer): $Color
public "copy"(): $Color
public "copy"(arg0: boolean): $Color
public "getRGB"(): integer
public static "mixColors"(arg0: $Couple$$Type<($Color$$Type)>, arg1: float): $Color
public static "mixColors"(arg0: $Color$$Type, arg1: $Color$$Type, arg2: float): $Color
public static "mixColors"(arg0: integer, arg1: integer, arg2: float): integer
public "scaleAlphaForText"(arg0: float): $Color
public static "rainbowColor"(arg0: integer): $Color
public "getAlphaAsFloat"(): float
public "ensureMutable"(): $Color
public "getRedAsFloat"(): float
public "getGreenAsFloat"(): float
public static "generateFromLong"(arg0: long): $Color
public "getBlueAsFloat"(): float
public "modifyValue"(arg0: $UnaryOperator$$Type<(integer)>): $Color
public "asVector"(): $Vec3
public "mixWith"(arg0: $Color$$Type, arg1: float): $Color
public "scaleAlpha"(arg0: float): $Color
public "asStyle"(): $Style
public "darker"(): $Color
public "brighter"(): $Color
public "setImmutable"(): $Color
public "asVectorF"(): $Vector3f
public "setAlpha"(arg0: integer): $Color
public "setAlpha"(arg0: float): $Color
public "setRed"(arg0: float): $Color
public "setRed"(arg0: integer): $Color
public "setGreen"(arg0: integer): $Color
public "setGreen"(arg0: float): $Color
public "setBlue"(arg0: float): $Color
public "setBlue"(arg0: integer): $Color
public "getGreen"(): integer
public "getBlue"(): integer
public "getRed"(): integer
public "getAlpha"(): integer
set "value"(value: integer)
get "RGB"(): integer
get "alphaAsFloat"(): float
get "redAsFloat"(): float
get "greenAsFloat"(): float
get "blueAsFloat"(): float
get "immutable"(): $Color
set "alpha"(value: integer)
set "alpha"(value: float)
set "red"(value: float)
set "red"(value: integer)
set "green"(value: integer)
set "green"(value: float)
set "blue"(value: float)
set "blue"(value: integer)
get "green"(): integer
get "blue"(): integer
get "red"(): integer
get "alpha"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Color$$Type = ($Color);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Color$$Original = $Color;}
