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
import {$Style} from "net.minecraft.network.chat.Style"
import {$DataResult} from "com.mojang.serialization.DataResult"
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

public "equals"(obj: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getValue"(): integer
public static "parse"(color: StringJS): $Color
public "isDefault"(): boolean
public static "parseColor"(color: StringJS): integer
public "getIntRed"(): integer
/**
 * 
 * @deprecated
 */
public "isRainbow"(): boolean
public "getAsStyle"(): $Style
public "getIntBlue"(): integer
public static "tryParse"(color: StringJS): $Color
public "getFloatAlpha"(): float
public "getFloatRed"(): float
public "getFloatBlue"(): float
public "getIntAlpha"(): integer
/**
 * 
 * @deprecated
 */
public static "initRainbow"(): void
public "getIntGreen"(): integer
public static "createPulsingColor"(name: StringJS, startingValue: integer, editorConsumer: $Consumer$$Type<($MutableColor)>): $Color
public static "decodeColor"(dynamic: $Dynamic$$Type<(never)>): $DataResult<($Color)>
public "getFloatGreen"(): float
public static "createNamedColor"(name: StringJS, value: integer): $Color
public "getRGBComponents"(compArray: (float)[]): (float)[]
public "isSpecial"(): boolean
public "withAlpha"(alpha: integer): $Color
public "getTextColor"(): $TextColor
get "value"(): integer
get "default"(): boolean
get "intRed"(): integer
get "rainbow"(): boolean
get "asStyle"(): $Style
get "intBlue"(): integer
get "floatAlpha"(): float
get "floatRed"(): float
get "floatBlue"(): float
get "intAlpha"(): integer
get "intGreen"(): integer
get "floatGreen"(): float
get "special"(): boolean
get "textColor"(): $TextColor
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
