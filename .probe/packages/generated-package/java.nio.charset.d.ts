declare module "java.nio.charset.CoderResult" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $CoderResult {
static readonly "OVERFLOW": $CoderResult
static readonly "UNDERFLOW": $CoderResult

public "length"(): integer
public "toString"(): StringJS
public "isUnderflow"(): boolean
public "throwException"(): void
public "isOverflow"(): boolean
public static "unmappableForLength"(arg0: integer): $CoderResult
public "isError"(): boolean
public static "malformedForLength"(arg0: integer): $CoderResult
public "isMalformed"(): boolean
public "isUnmappable"(): boolean
get "underflow"(): boolean
get "overflow"(): boolean
get "error"(): boolean
get "malformed"(): boolean
get "unmappable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoderResult$$Type = ($CoderResult);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CoderResult$$Original = $CoderResult;}
declare module "java.nio.charset.CharsetEncoder" {
import {$CharBuffer$$Type} from "java.nio.CharBuffer"
import {$CodingErrorAction, $CodingErrorAction$$Type} from "java.nio.charset.CodingErrorAction"
import {$Charset} from "java.nio.charset.Charset"
import {$CoderResult} from "java.nio.charset.CoderResult"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $CharsetEncoder {
public "reset"(): $CharsetEncoder
public "onMalformedInput"(arg0: $CodingErrorAction$$Type): $CharsetEncoder
public "onUnmappableCharacter"(arg0: $CodingErrorAction$$Type): $CharsetEncoder
public "maxBytesPerChar"(): float
public "encode"(arg0: $CharBuffer$$Type, arg1: $ByteBuffer$$Type, arg2: boolean): $CoderResult
public "encode"(arg0: $CharBuffer$$Type): $ByteBuffer
public "flush"(arg0: $ByteBuffer$$Type): $CoderResult
public "canEncode"(arg0: charseq): boolean
public "canEncode"(arg0: character): boolean
public "charset"(): $Charset
public "replacement"(): (byte)[]
public "isLegalReplacement"(arg0: (byte)[]): boolean
public "malformedInputAction"(): $CodingErrorAction
public "unmappableCharacterAction"(): $CodingErrorAction
public "averageBytesPerChar"(): float
public "replaceWith"(arg0: (byte)[]): $CharsetEncoder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CharsetEncoder$$Type = ($CharsetEncoder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CharsetEncoder$$Original = $CharsetEncoder;}
declare module "java.nio.charset.Charset" {
import {$CharBuffer, $CharBuffer$$Type} from "java.nio.CharBuffer"
import {$CharsetDecoder} from "java.nio.charset.CharsetDecoder"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$CharsetEncoder} from "java.nio.charset.CharsetEncoder"
import {$Set} from "java.util.Set"
import {$Locale$$Type} from "java.util.Locale"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$SortedMap} from "java.util.SortedMap"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Charset implements $Comparable$$Interface<($Charset)> {
public "name"(): StringJS
public static "forName"(arg0: StringJS, arg1: $Charset$$Type): $Charset
public static "forName"(arg0: StringJS): $Charset
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $Charset$$Type): integer
public "newDecoder"(): $CharsetDecoder
public "decode"(arg0: $ByteBuffer$$Type): $CharBuffer
public "newEncoder"(): $CharsetEncoder
public "encode"(arg0: $CharBuffer$$Type): $ByteBuffer
public "encode"(arg0: StringJS): $ByteBuffer
public static "defaultCharset"(): $Charset
public "canEncode"(): boolean
public "contains"(arg0: $Charset$$Type): boolean
public "isRegistered"(): boolean
public static "isSupported"(arg0: StringJS): boolean
public "aliases"(): $Set<(StringJS)>
public static "availableCharsets"(): $SortedMap<(StringJS), ($Charset)>
public "displayName"(arg0: $Locale$$Type): StringJS
public "displayName"(): StringJS
get "registered"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Charset$$Type = ($Charset);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Charset$$Original = $Charset;}
declare module "java.nio.charset.CharsetDecoder" {
import {$CharBuffer, $CharBuffer$$Type} from "java.nio.CharBuffer"
import {$CodingErrorAction, $CodingErrorAction$$Type} from "java.nio.charset.CodingErrorAction"
import {$Charset} from "java.nio.charset.Charset"
import {$CoderResult} from "java.nio.charset.CoderResult"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $CharsetDecoder {
public "reset"(): $CharsetDecoder
public "maxCharsPerByte"(): float
public "onMalformedInput"(arg0: $CodingErrorAction$$Type): $CharsetDecoder
public "onUnmappableCharacter"(arg0: $CodingErrorAction$$Type): $CharsetDecoder
public "decode"(arg0: $ByteBuffer$$Type): $CharBuffer
public "decode"(arg0: $ByteBuffer$$Type, arg1: $CharBuffer$$Type, arg2: boolean): $CoderResult
public "flush"(arg0: $CharBuffer$$Type): $CoderResult
public "charset"(): $Charset
public "replacement"(): StringJS
public "malformedInputAction"(): $CodingErrorAction
public "unmappableCharacterAction"(): $CodingErrorAction
public "replaceWith"(arg0: StringJS): $CharsetDecoder
public "averageCharsPerByte"(): float
public "isAutoDetecting"(): boolean
public "isCharsetDetected"(): boolean
public "detectedCharset"(): $Charset
get "autoDetecting"(): boolean
get "charsetDetected"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CharsetDecoder$$Type = ($CharsetDecoder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CharsetDecoder$$Original = $CharsetDecoder;}
declare module "java.nio.charset.CodingErrorAction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $CodingErrorAction {
static readonly "REPORT": $CodingErrorAction
static readonly "IGNORE": $CodingErrorAction
static readonly "REPLACE": $CodingErrorAction

public "toString"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CodingErrorAction$$Type = ($CodingErrorAction);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CodingErrorAction$$Original = $CodingErrorAction;}
