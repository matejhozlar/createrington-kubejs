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

public "setBlue"(b: integer): void
public "setRed"(r: integer): void
public "setGreen"(g: integer): void
set "blue"(value: integer)
set "red"(value: integer)
set "green"(value: integer)
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
import {$MutableColor$$Type} from "com.teamresourceful.resourcefullib.common.color.MutableColor"
import {$ByteCodec} from "com.teamresourceful.bytecodecs.base.ByteCodec"
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
public "getTextColor"(): $TextColor
public static "tryParse"(color: StringJS): $Color
public "withAlpha"(alpha: integer): $Color
public "isSpecial"(): boolean
public "getRGBComponents"(compArray: (float)[]): (float)[]
public "getFloatRed"(): float
public static "createPulsingColor"(name: StringJS, startingValue: integer, editorConsumer: $Consumer$$Type<($MutableColor)>): $Color
public "getIntAlpha"(): integer
public static "createNamedColor"(name: StringJS, value: integer): $Color
/**
 * 
 * @deprecated
 */
public static "initRainbow"(): void
public "getIntGreen"(): integer
public "getFloatBlue"(): float
public static "decodeColor"(dynamic: $Dynamic$$Type<(never)>): $DataResult<($Color)>
public "getFloatAlpha"(): float
public "getFloatGreen"(): float
/**
 * 
 * @deprecated
 */
public "isRainbow"(): boolean
public "getIntRed"(): integer
public "getAsStyle"(): $Style
public "getIntBlue"(): integer
get "value"(): integer
get "default"(): boolean
get "textColor"(): $TextColor
get "special"(): boolean
get "floatRed"(): float
get "intAlpha"(): integer
get "intGreen"(): integer
get "floatBlue"(): float
get "floatAlpha"(): float
get "floatGreen"(): float
get "rainbow"(): boolean
get "intRed"(): integer
get "asStyle"(): $Style
get "intBlue"(): integer
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
