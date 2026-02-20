declare module "net.silentchaos512.lib.util.Color" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$DataResult} from "com.mojang.serialization.DataResult"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"

export class $Color {
static readonly "TURQUOISE": $Color
static readonly "MEDIUMPURPLE": $Color
static readonly "BEIGE": $Color
static readonly "CHOCOLATE": $Color
static readonly "MEDIUMAQUAMARINE": $Color
static readonly "CHARTREUSE": $Color
static readonly "PALEVIOLETRED": $Color
static readonly "LIGHTSLATEGREY": $Color
static readonly "DARKGREEN": $Color
static readonly "BLANCHEDALMOND": $Color
static readonly "CADETBLUE": $Color
static readonly "DARKVIOLET": $Color
static readonly "MEDIUMSPRINGGREEN": $Color
static readonly "BLACK": $Color
static readonly "GREENYELLOW": $Color
static readonly "SLATEGREY": $Color
static readonly "SEAGREEN": $Color
static readonly "PAPAYAWHIP": $Color
static readonly "DARKGREY": $Color
static readonly "OLIVEDRAB": $Color
static readonly "CODEC": $Codec<($Color)>
static readonly "ROSYBROWN": $Color
static readonly "MEDIUMBLUE": $Color
static readonly "LIGHTGREY": $Color
static readonly "LIGHTSEAGREEN": $Color
static readonly "WHEAT": $Color
static readonly "INDIGO": $Color
static readonly "DARKMAGENTA": $Color
static readonly "DARKGOLDENROD": $Color
static readonly "GOLDENROD": $Color
static readonly "SALMON": $Color
static readonly "LAVENDER": $Color
static readonly "CYAN": $Color
static readonly "FORESTGREEN": $Color
static readonly "VALUE_WHITE": integer
static readonly "BURLYWOOD": $Color
static readonly "LIGHTSKYBLUE": $Color
static readonly "GOLD": $Color
static readonly "GRAY": $Color
static readonly "NAVAJOWHITE": $Color
static readonly "BLUE": $Color
static readonly "LIGHTGREEN": $Color
static readonly "DEEPPINK": $Color
static readonly "PALEGREEN": $Color
static readonly "CORNFLOWERBLUE": $Color
static readonly "DARKSLATEGREY": $Color
static readonly "PINK": $Color
static readonly "ORANGERED": $Color
static readonly "DARKSEAGREEN": $Color
static readonly "LIGHTSTEELBLUE": $Color
static readonly "MINTCREAM": $Color
static readonly "DIMGREY": $Color
static readonly "ORANGE": $Color
static readonly "SPRINGGREEN": $Color
static readonly "FUCHSIA": $Color
static readonly "GAINSBORO": $Color
static readonly "MEDIUMTURQUOISE": $Color
static readonly "LIGHTCORAL": $Color
static readonly "LIGHTYELLOW": $Color
static readonly "INDIANRED": $Color
static readonly "ROYALBLUE": $Color
static readonly "DEEPSKYBLUE": $Color
static readonly "LIGHTPINK": $Color
static readonly "MAROON": $Color
static readonly "RED": $Color
static readonly "LAVENDERBLUSH": $Color
static readonly "HOTPINK": $Color
static readonly "DARKKHAKI": $Color
static readonly "SANDYBROWN": $Color
static readonly "TEAL": $Color
static readonly "MEDIUMSLATEBLUE": $Color
static readonly "SKYBLUE": $Color
static readonly "DARKORCHID": $Color
static readonly "OLDLACE": $Color
static readonly "TAN": $Color
static readonly "DARKRED": $Color
static readonly "LEMONCHIFFON": $Color
static readonly "SADDLEBROWN": $Color
static readonly "MIDNIGHTBLUE": $Color
static readonly "HONEYDEW": $Color
static readonly "LINEN": $Color
static readonly "WHITESMOKE": $Color
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($Color)>
static readonly "LIGHTSLATEGRAY": $Color
static readonly "NAVY": $Color
static readonly "SLATEBLUE": $Color
static readonly "DARKOLIVEGREEN": $Color
static readonly "VIOLET": $Color
static readonly "MEDIUMVIOLETRED": $Color
static readonly "ALICEBLUE": $Color
static readonly "FIREBRICK": $Color
static readonly "PALEGOLDENROD": $Color
static readonly "MISTYROSE": $Color
static readonly "SLATEGRAY": $Color
static readonly "KHAKI": $Color
static readonly "AQUA": $Color
static readonly "DARKBLUE": $Color
static readonly "BLUEVIOLET": $Color
static readonly "IVORY": $Color
static readonly "SNOW": $Color
static readonly "LIGHTGRAY": $Color
static readonly "CORNSILK": $Color
static readonly "REBECCAPURPLE": $Color
static readonly "STEELBLUE": $Color
static readonly "ANTIQUEWHITE": $Color
static readonly "DARKSALMON": $Color
static readonly "LIGHTBLUE": $Color
static readonly "DARKGRAY": $Color
static readonly "PEACHPUFF": $Color
static readonly "PLUM": $Color
static readonly "LAWNGREEN": $Color
static readonly "MOCCASIN": $Color
static readonly "POWDERBLUE": $Color
static readonly "SIENNA": $Color
static readonly "MAGENTA": $Color
static readonly "YELLOW": $Color
static readonly "LIGHTGOLDENRODYELLOW": $Color
static readonly "LIMEGREEN": $Color
static readonly "DARKORANGE": $Color
static readonly "CORAL": $Color
static readonly "OLIVE": $Color
static readonly "SILVER": $Color
static readonly "AZURE": $Color
static readonly "ORCHID": $Color
static readonly "DIMGRAY": $Color
static readonly "FLORALWHITE": $Color
static readonly "MEDIUMORCHID": $Color
static readonly "DARKSLATEGRAY": $Color
static readonly "PALETURQUOISE": $Color
static readonly "AQUAMARINE": $Color
static readonly "PERU": $Color
static readonly "BROWN": $Color
static readonly "TOMATO": $Color
static readonly "WHITE": $Color
static readonly "LIGHTCYAN": $Color
static readonly "MEDIUMSEAGREEN": $Color
static readonly "YELLOWGREEN": $Color
static readonly "CRIMSON": $Color
static readonly "DARKCYAN": $Color
static readonly "PURPLE": $Color
static readonly "SEASHELL": $Color
static readonly "GREEN": $Color
static readonly "LIGHTSALMON": $Color
static readonly "DARKSLATEBLUE": $Color
static readonly "LIME": $Color
static readonly "GHOSTWHITE": $Color
static readonly "DARKTURQUOISE": $Color
static readonly "THISTLE": $Color
static readonly "BISQUE": $Color
static readonly "DODGERBLUE": $Color
static readonly "GREY": $Color

constructor(arg0: float, arg1: float, arg2: float, arg3: float)
constructor(arg0: float, arg1: float, arg2: float)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)
constructor(arg0: integer, arg1: integer, arg2: integer)
constructor(arg0: integer)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "blend"(arg0: integer, arg1: integer): integer
public static "blend"(arg0: $Color$$Type, arg1: $Color$$Type, arg2: float): $Color
public static "blend"(arg0: $Color$$Type, arg1: $Color$$Type): $Color
public static "blend"(arg0: integer, arg1: integer, arg2: float): integer
public "format"(): StringJS
public static "format"(arg0: integer): StringJS
public static "from"(arg0: $JsonObject$$Type, arg1: StringJS, arg2: integer): $Color
public static "validate"(arg0: StringJS): boolean
public "write"(arg0: $FriendlyByteBuf$$Type): void
public static "read"(arg0: StringJS): $DataResult<($Color)>
public static "read"(arg0: $FriendlyByteBuf$$Type): $Color
public static "parseInt"(arg0: StringJS): integer
public static "parse"(arg0: StringJS): $Color
public "getRed"(): float
public "getGreen"(): float
public "getBlue"(): float
public "getAlpha"(): float
public static "tryParse"(arg0: StringJS, arg1: integer): $Color
public "getColor"(): integer
public "blendWith"(arg0: $Color$$Type): $Color
public "getBlueInt"(): integer
public "getRedInt"(): integer
public "getGreenInt"(): integer
public "getAlphaInt"(): integer
get "red"(): float
get "green"(): float
get "blue"(): float
get "alpha"(): float
get "color"(): integer
get "blueInt"(): integer
get "redInt"(): integer
get "greenInt"(): integer
get "alphaInt"(): integer
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
