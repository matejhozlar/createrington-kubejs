declare module "com.teamresourceful.resourcefullib.common.color.MutableColor" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$Color} from "com.teamresourceful.resourcefullib.common.color.Color"
import {$ByteCodec} from "com.teamresourceful.bytecodecs.base.ByteCodec"

export class $MutableColor extends $Color {
static readonly "CODEC": $Codec<($Color)>
static readonly "BYTE_CODEC": $ByteCodec<($Color)>
static readonly "RAINBOW": $Color
static readonly "DEFAULT": $Color
static readonly "RGB_CODEC": $Codec<($Color)>

public "setRed"(r: integer): void
public "setGreen"(g: integer): void
public "setBlue"(b: integer): void
set "red"(value: integer)
set "green"(value: integer)
set "blue"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableColor$$Type = ($MutableColor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MutableColor$$Original = $MutableColor;}
declare module "com.teamresourceful.resourcefullib.common.color.Color" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$DataResult} from "com.mojang.serialization.DataResult"
import {$Style} from "net.minecraft.network.chat.Style"
import {$Dynamic$$Type} from "com.mojang.serialization.Dynamic"
import {$ByteCodec} from "com.teamresourceful.bytecodecs.base.ByteCodec"
import {$MutableColor$$Type} from "com.teamresourceful.resourcefullib.common.color.MutableColor"
import {$TextColor} from "net.minecraft.network.chat.TextColor"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $Color {
static readonly "CODEC": $Codec<($Color)>
static readonly "BYTE_CODEC": $ByteCodec<($Color)>
static readonly "RAINBOW": $Color
static readonly "DEFAULT": $Color
static readonly "RGB_CODEC": $Codec<($Color)>

constructor(value: integer)
constructor(r: integer, g: integer, b: integer, a: integer)

public static "createNamedColor"(name: StringJS, value: integer): $Color
public "getIntAlpha"(): integer
public "getRGBComponents"(compArray: (float)[]): (float)[]
public "getFloatAlpha"(): float
public "getFloatRed"(): float
public "getFloatBlue"(): float
public "getFloatGreen"(): float
public "getIntGreen"(): integer
public static "createPulsingColor"(name: StringJS, startingValue: integer, editorConsumer: $Consumer$$Type<($MutableColor)>): $Color
public static "decodeColor"(dynamic: $Dynamic$$Type<(never)>): $DataResult<($Color)>
/**
 * 
 * @deprecated
 */
public static "initRainbow"(): void
public "equals"(obj: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getValue"(): integer
public static "parse"(color: StringJS): $Color
public "isDefault"(): boolean
public "getTextColor"(): $TextColor
public static "parseColor"(color: StringJS): integer
public "isSpecial"(): boolean
public "withAlpha"(alpha: integer): $Color
public static "tryParse"(color: StringJS): $Color
public "getIntBlue"(): integer
/**
 * 
 * @deprecated
 */
public "isRainbow"(): boolean
public "getAsStyle"(): $Style
public "getIntRed"(): integer
get "intAlpha"(): integer
get "floatAlpha"(): float
get "floatRed"(): float
get "floatBlue"(): float
get "floatGreen"(): float
get "intGreen"(): integer
get "value"(): integer
get "default"(): boolean
get "textColor"(): $TextColor
get "special"(): boolean
get "intBlue"(): integer
get "rainbow"(): boolean
get "asStyle"(): $Style
get "intRed"(): integer
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
