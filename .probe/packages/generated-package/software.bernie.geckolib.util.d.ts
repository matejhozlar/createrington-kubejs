declare module "software.bernie.geckolib.util.Color" {
import {$Record} from "java.lang.Record"

export class $Color extends $Record {
static readonly "WHITE": $Color
static readonly "GRAY": $Color
static readonly "BLUE": $Color
static readonly "GREEN": $Color
static readonly "RED": $Color
static readonly "PINK": $Color
static readonly "LIGHT_GRAY": $Color
static readonly "BLACK": $Color
static readonly "MAGENTA": $Color
static readonly "YELLOW": $Color
static readonly "DARK_GRAY": $Color
static readonly "CYAN": $Color
static readonly "ORANGE": $Color

constructor(argbInt: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "ofRGBA"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $Color
public static "ofRGBA"(arg0: float, arg1: float, arg2: float, arg3: float): $Color
public "getRed"(): integer
public "getGreen"(): integer
public "getBlue"(): integer
public "getAlpha"(): integer
public "getColor"(): integer
public static "HSBtoARGB"(arg0: float, arg1: float, arg2: float): integer
public static "ofARGB"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $Color
public static "ofARGB"(arg0: float, arg1: float, arg2: float, arg3: float): $Color
public "argbInt"(): integer
public "brighter"(arg0: double): $Color
public "darker"(arg0: float): $Color
public static "ofOpaque"(arg0: integer): $Color
public static "ofRGB"(arg0: float, arg1: float, arg2: float): $Color
public static "ofRGB"(arg0: integer, arg1: integer, arg2: integer): $Color
public static "ofHSB"(arg0: float, arg1: float, arg2: float): $Color
public "getBlueFloat"(): float
public "getGreenFloat"(): float
public "getAlphaFloat"(): float
public "getRedFloat"(): float
get "red"(): integer
get "green"(): integer
get "blue"(): integer
get "alpha"(): integer
get "color"(): integer
get "blueFloat"(): float
get "greenFloat"(): float
get "alphaFloat"(): float
get "redFloat"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Color$$Type = ({"argbInt"?: integer}) | ([argbInt?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Color$$Original = $Color;}
