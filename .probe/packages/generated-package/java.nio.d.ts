declare module "java.nio.DoubleBuffer" {
import {$ByteOrder} from "java.nio.ByteOrder"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Buffer} from "java.nio.Buffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DoubleBuffer extends $Buffer implements $Comparable$$Interface<($DoubleBuffer)> {
public "reset"(): $Buffer
public "get"(arg0: integer, arg1: (double)[]): $DoubleBuffer
public "get"(arg0: integer): double
public "get"(arg0: (double)[], arg1: integer, arg2: integer): $DoubleBuffer
public "get"(arg0: (double)[]): $DoubleBuffer
public "get"(arg0: integer, arg1: (double)[], arg2: integer, arg3: integer): $DoubleBuffer
public "get"(): double
public "put"(arg0: integer, arg1: (double)[], arg2: integer, arg3: integer): $DoubleBuffer
public "put"(arg0: integer, arg1: (double)[]): $DoubleBuffer
public "put"(arg0: integer, arg1: $DoubleBuffer$$Type, arg2: integer, arg3: integer): $DoubleBuffer
public "put"(arg0: (double)[]): $DoubleBuffer
public "put"(arg0: $DoubleBuffer$$Type): $DoubleBuffer
public "put"(arg0: (double)[], arg1: integer, arg2: integer): $DoubleBuffer
public "put"(arg0: double): $DoubleBuffer
public "put"(arg0: integer, arg1: double): $DoubleBuffer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $DoubleBuffer$$Type): integer
public "clear"(): $DoubleBuffer
public static "wrap"(arg0: (double)[], arg1: integer, arg2: integer): $DoubleBuffer
public static "wrap"(arg0: (double)[]): $DoubleBuffer
public "position"(arg0: integer): $DoubleBuffer
public "mismatch"(arg0: $DoubleBuffer$$Type): integer
public "limit"(arg0: integer): $Buffer
public "isDirect"(): boolean
public "hasArray"(): boolean
public "array"(): (double)[]
public "arrayOffset"(): integer
public "mark"(): $DoubleBuffer
public "flip"(): $Buffer
public "rewind"(): $DoubleBuffer
public "slice"(): $DoubleBuffer
public "slice"(arg0: integer, arg1: integer): $Buffer
public "duplicate"(): $DoubleBuffer
public static "allocate"(arg0: integer): $DoubleBuffer
public "asReadOnlyBuffer"(): $DoubleBuffer
public "compact"(): $DoubleBuffer
public "order"(): $ByteOrder
get "direct"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleBuffer$$Type = ($DoubleBuffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoubleBuffer$$Original = $DoubleBuffer;}
declare module "java.nio.LongBuffer" {
import {$ByteOrder} from "java.nio.ByteOrder"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Buffer} from "java.nio.Buffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $LongBuffer extends $Buffer implements $Comparable$$Interface<($LongBuffer)> {
public "reset"(): $Buffer
public "get"(arg0: integer, arg1: (long)[]): $LongBuffer
public "get"(arg0: integer): long
public "get"(arg0: (long)[], arg1: integer, arg2: integer): $LongBuffer
public "get"(arg0: (long)[]): $LongBuffer
public "get"(arg0: integer, arg1: (long)[], arg2: integer, arg3: integer): $LongBuffer
public "get"(): long
public "put"(arg0: integer, arg1: (long)[], arg2: integer, arg3: integer): $LongBuffer
public "put"(arg0: integer, arg1: (long)[]): $LongBuffer
public "put"(arg0: integer, arg1: $LongBuffer$$Type, arg2: integer, arg3: integer): $LongBuffer
public "put"(arg0: (long)[]): $LongBuffer
public "put"(arg0: $LongBuffer$$Type): $LongBuffer
public "put"(arg0: (long)[], arg1: integer, arg2: integer): $LongBuffer
public "put"(arg0: long): $LongBuffer
public "put"(arg0: integer, arg1: long): $LongBuffer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $LongBuffer$$Type): integer
public "clear"(): $LongBuffer
public static "wrap"(arg0: (long)[], arg1: integer, arg2: integer): $LongBuffer
public static "wrap"(arg0: (long)[]): $LongBuffer
public "position"(arg0: integer): $LongBuffer
public "mismatch"(arg0: $LongBuffer$$Type): integer
public "limit"(arg0: integer): $Buffer
public "isDirect"(): boolean
public "hasArray"(): boolean
public "array"(): (long)[]
public "arrayOffset"(): integer
public "mark"(): $LongBuffer
public "flip"(): $Buffer
public "rewind"(): $LongBuffer
public "slice"(): $LongBuffer
public "slice"(arg0: integer, arg1: integer): $Buffer
public "duplicate"(): $LongBuffer
public static "allocate"(arg0: integer): $LongBuffer
public "asReadOnlyBuffer"(): $LongBuffer
public "compact"(): $LongBuffer
public "order"(): $ByteOrder
get "direct"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongBuffer$$Type = ($LongBuffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LongBuffer$$Original = $LongBuffer;}
declare module "java.nio.Buffer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Buffer {
public "reset"(): $Buffer
public "clear"(): $Buffer
public "position"(arg0: integer): $Buffer
public "position"(): integer
public "limit"(): integer
public "limit"(arg0: integer): $Buffer
public "remaining"(): integer
public "isDirect"(): boolean
public "hasArray"(): boolean
public "array"(): any
public "arrayOffset"(): integer
public "capacity"(): integer
public "mark"(): $Buffer
public "flip"(): $Buffer
public "rewind"(): $Buffer
public "hasRemaining"(): boolean
public "isReadOnly"(): boolean
public "slice"(arg0: integer, arg1: integer): $Buffer
public "slice"(): $Buffer
public "duplicate"(): $Buffer
get "direct"(): boolean
get "readOnly"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Buffer$$Type = ($Buffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Buffer$$Original = $Buffer;}
declare module "java.nio.ByteOrder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ByteOrder {
static readonly "BIG_ENDIAN": $ByteOrder
static readonly "LITTLE_ENDIAN": $ByteOrder

public "toString"(): StringJS
public static "nativeOrder"(): $ByteOrder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ByteOrder$$Type = ($ByteOrder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ByteOrder$$Original = $ByteOrder;}
declare module "java.nio.CharBuffer" {
import {$ByteOrder} from "java.nio.ByteOrder"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Appendable$$Interface} from "java.lang.Appendable"
import {$IntStream} from "java.util.stream.IntStream"
import {$Buffer} from "java.nio.Buffer"
import {$Readable$$Interface} from "java.lang.Readable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $CharBuffer extends $Buffer implements $Comparable$$Interface<($CharBuffer)>, $Appendable$$Interface, charseq, $Readable$$Interface {
public "reset"(): $CharBuffer
public "get"(arg0: (character)[], arg1: integer, arg2: integer): $CharBuffer
public "get"(arg0: integer): character
public "get"(): character
public "get"(arg0: (character)[]): $CharBuffer
public "get"(arg0: integer, arg1: (character)[], arg2: integer, arg3: integer): $CharBuffer
public "get"(arg0: integer, arg1: (character)[]): $CharBuffer
public "put"(arg0: integer, arg1: character): $CharBuffer
public "put"(arg0: (character)[], arg1: integer, arg2: integer): $CharBuffer
public "put"(arg0: integer, arg1: (character)[], arg2: integer, arg3: integer): $CharBuffer
public "put"(arg0: (character)[]): $CharBuffer
public "put"(arg0: $CharBuffer$$Type): $CharBuffer
public "put"(arg0: integer, arg1: $CharBuffer$$Type, arg2: integer, arg3: integer): $CharBuffer
public "put"(arg0: integer, arg1: (character)[]): $CharBuffer
public "put"(arg0: StringJS): $CharBuffer
public "put"(arg0: StringJS, arg1: integer, arg2: integer): $CharBuffer
public "put"(arg0: character): $CharBuffer
public "equals"(arg0: any): boolean
public "length"(): integer
public "toString"(): StringJS
public "append"(arg0: character): $CharBuffer
public "append"(arg0: charseq): $CharBuffer
public "append"(arg0: charseq, arg1: integer, arg2: integer): $CharBuffer
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $CharBuffer$$Type): integer
public "clear"(): $CharBuffer
public static "wrap"(arg0: (character)[], arg1: integer, arg2: integer): $CharBuffer
public static "wrap"(arg0: charseq, arg1: integer, arg2: integer): $CharBuffer
public static "wrap"(arg0: charseq): $CharBuffer
public static "wrap"(arg0: (character)[]): $CharBuffer
public "position"(arg0: integer): $CharBuffer
public "charAt"(arg0: integer): character
public "mismatch"(arg0: $CharBuffer$$Type): integer
public "isEmpty"(): boolean
public "subSequence"(arg0: integer, arg1: integer): charseq
public "limit"(arg0: integer): $Buffer
public "chars"(): $IntStream
public "isDirect"(): boolean
public "hasArray"(): boolean
public "array"(): any
public "arrayOffset"(): integer
public "read"(arg0: $CharBuffer$$Type): integer
public "mark"(): $CharBuffer
public "flip"(): $CharBuffer
public "rewind"(): $Buffer
public "slice"(arg0: integer, arg1: integer): $CharBuffer
public "slice"(): $CharBuffer
public "duplicate"(): $CharBuffer
public static "allocate"(arg0: integer): $CharBuffer
public "asReadOnlyBuffer"(): $CharBuffer
public "compact"(): $CharBuffer
public "order"(): $ByteOrder
public static "compare"(arg0: charseq, arg1: charseq): integer
public "codePoints"(): $IntStream
get "empty"(): boolean
get "direct"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CharBuffer$$Type = ($CharBuffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CharBuffer$$Original = $CharBuffer;}
declare module "java.nio.IntBuffer" {
import {$ByteOrder} from "java.nio.ByteOrder"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Buffer} from "java.nio.Buffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $IntBuffer extends $Buffer implements $Comparable$$Interface<($IntBuffer)> {
public "reset"(): $Buffer
public "get"(arg0: integer, arg1: (integer)[]): $IntBuffer
public "get"(arg0: integer): integer
public "get"(arg0: (integer)[], arg1: integer, arg2: integer): $IntBuffer
public "get"(arg0: (integer)[]): $IntBuffer
public "get"(arg0: integer, arg1: (integer)[], arg2: integer, arg3: integer): $IntBuffer
public "get"(): integer
public "put"(arg0: integer, arg1: (integer)[], arg2: integer, arg3: integer): $IntBuffer
public "put"(arg0: integer, arg1: (integer)[]): $IntBuffer
public "put"(arg0: integer, arg1: $IntBuffer$$Type, arg2: integer, arg3: integer): $IntBuffer
public "put"(arg0: (integer)[]): $IntBuffer
public "put"(arg0: $IntBuffer$$Type): $IntBuffer
public "put"(arg0: (integer)[], arg1: integer, arg2: integer): $IntBuffer
public "put"(arg0: integer): $IntBuffer
public "put"(arg0: integer, arg1: integer): $IntBuffer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $IntBuffer$$Type): integer
public "clear"(): $IntBuffer
public static "wrap"(arg0: (integer)[], arg1: integer, arg2: integer): $IntBuffer
public static "wrap"(arg0: (integer)[]): $IntBuffer
public "position"(arg0: integer): $IntBuffer
public "mismatch"(arg0: $IntBuffer$$Type): integer
public "limit"(arg0: integer): $Buffer
public "isDirect"(): boolean
public "hasArray"(): boolean
public "array"(): (integer)[]
public "arrayOffset"(): integer
public "mark"(): $IntBuffer
public "flip"(): $Buffer
public "rewind"(): $IntBuffer
public "slice"(): $IntBuffer
public "slice"(arg0: integer, arg1: integer): $Buffer
public "duplicate"(): $IntBuffer
public static "allocate"(arg0: integer): $IntBuffer
public "asReadOnlyBuffer"(): $IntBuffer
public "compact"(): $IntBuffer
public "order"(): $ByteOrder
get "direct"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntBuffer$$Type = ($IntBuffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntBuffer$$Original = $IntBuffer;}
declare module "java.nio.ShortBuffer" {
import {$ByteOrder} from "java.nio.ByteOrder"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Buffer} from "java.nio.Buffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ShortBuffer extends $Buffer implements $Comparable$$Interface<($ShortBuffer)> {
public "reset"(): $Buffer
public "get"(arg0: integer, arg1: (short)[]): $ShortBuffer
public "get"(arg0: integer): short
public "get"(arg0: (short)[], arg1: integer, arg2: integer): $ShortBuffer
public "get"(arg0: (short)[]): $ShortBuffer
public "get"(arg0: integer, arg1: (short)[], arg2: integer, arg3: integer): $ShortBuffer
public "get"(): short
public "put"(arg0: integer, arg1: (short)[], arg2: integer, arg3: integer): $ShortBuffer
public "put"(arg0: integer, arg1: (short)[]): $ShortBuffer
public "put"(arg0: integer, arg1: $ShortBuffer$$Type, arg2: integer, arg3: integer): $ShortBuffer
public "put"(arg0: (short)[]): $ShortBuffer
public "put"(arg0: $ShortBuffer$$Type): $ShortBuffer
public "put"(arg0: (short)[], arg1: integer, arg2: integer): $ShortBuffer
public "put"(arg0: short): $ShortBuffer
public "put"(arg0: integer, arg1: short): $ShortBuffer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $ShortBuffer$$Type): integer
public "clear"(): $ShortBuffer
public static "wrap"(arg0: (short)[], arg1: integer, arg2: integer): $ShortBuffer
public static "wrap"(arg0: (short)[]): $ShortBuffer
public "position"(arg0: integer): $ShortBuffer
public "mismatch"(arg0: $ShortBuffer$$Type): integer
public "limit"(arg0: integer): $Buffer
public "isDirect"(): boolean
public "hasArray"(): boolean
public "array"(): (short)[]
public "arrayOffset"(): integer
public "mark"(): $ShortBuffer
public "flip"(): $Buffer
public "rewind"(): $ShortBuffer
public "slice"(): $ShortBuffer
public "slice"(arg0: integer, arg1: integer): $Buffer
public "duplicate"(): $ShortBuffer
public static "allocate"(arg0: integer): $ShortBuffer
public "asReadOnlyBuffer"(): $ShortBuffer
public "compact"(): $ShortBuffer
public "order"(): $ByteOrder
get "direct"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShortBuffer$$Type = ($ShortBuffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShortBuffer$$Original = $ShortBuffer;}
declare module "java.nio.FloatBuffer" {
import {$ByteOrder} from "java.nio.ByteOrder"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Buffer} from "java.nio.Buffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FloatBuffer extends $Buffer implements $Comparable$$Interface<($FloatBuffer)> {
public "reset"(): $Buffer
public "get"(arg0: integer, arg1: (float)[]): $FloatBuffer
public "get"(arg0: integer): float
public "get"(arg0: (float)[], arg1: integer, arg2: integer): $FloatBuffer
public "get"(arg0: (float)[]): $FloatBuffer
public "get"(arg0: integer, arg1: (float)[], arg2: integer, arg3: integer): $FloatBuffer
public "get"(): float
public "put"(arg0: integer, arg1: (float)[], arg2: integer, arg3: integer): $FloatBuffer
public "put"(arg0: integer, arg1: (float)[]): $FloatBuffer
public "put"(arg0: integer, arg1: $FloatBuffer$$Type, arg2: integer, arg3: integer): $FloatBuffer
public "put"(arg0: (float)[]): $FloatBuffer
public "put"(arg0: $FloatBuffer$$Type): $FloatBuffer
public "put"(arg0: (float)[], arg1: integer, arg2: integer): $FloatBuffer
public "put"(arg0: float): $FloatBuffer
public "put"(arg0: integer, arg1: float): $FloatBuffer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $FloatBuffer$$Type): integer
public "clear"(): $FloatBuffer
public static "wrap"(arg0: (float)[], arg1: integer, arg2: integer): $FloatBuffer
public static "wrap"(arg0: (float)[]): $FloatBuffer
public "position"(arg0: integer): $FloatBuffer
public "mismatch"(arg0: $FloatBuffer$$Type): integer
public "limit"(arg0: integer): $Buffer
public "isDirect"(): boolean
public "hasArray"(): boolean
public "array"(): (float)[]
public "arrayOffset"(): integer
public "mark"(): $FloatBuffer
public "flip"(): $Buffer
public "rewind"(): $FloatBuffer
public "slice"(): $FloatBuffer
public "slice"(arg0: integer, arg1: integer): $Buffer
public "duplicate"(): $FloatBuffer
public static "allocate"(arg0: integer): $FloatBuffer
public "asReadOnlyBuffer"(): $FloatBuffer
public "compact"(): $FloatBuffer
public "order"(): $ByteOrder
get "direct"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FloatBuffer$$Type = ($FloatBuffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FloatBuffer$$Original = $FloatBuffer;}
declare module "java.nio.MappedByteBuffer" {
import {$Buffer} from "java.nio.Buffer"
import {$ByteBuffer} from "java.nio.ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $MappedByteBuffer extends $ByteBuffer {
public "reset"(): $ByteBuffer
public "load"(): $MappedByteBuffer
public "clear"(): $MappedByteBuffer
public "position"(arg0: integer): $ByteBuffer
public "limit"(arg0: integer): $ByteBuffer
public "mark"(): $MappedByteBuffer
public "flip"(): $Buffer
public "rewind"(): $MappedByteBuffer
public "slice"(arg0: integer, arg1: integer): $ByteBuffer
public "slice"(): $ByteBuffer
public "duplicate"(): $MappedByteBuffer
public "compact"(): $MappedByteBuffer
public "isLoaded"(): boolean
public "force"(): $MappedByteBuffer
public "force"(arg0: integer, arg1: integer): $MappedByteBuffer
public "array"(): any
get "loaded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MappedByteBuffer$$Type = ($MappedByteBuffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MappedByteBuffer$$Original = $MappedByteBuffer;}
declare module "java.nio.ByteBuffer" {
import {$FloatBuffer} from "java.nio.FloatBuffer"
import {$CharBuffer} from "java.nio.CharBuffer"
import {$ByteOrder, $ByteOrder$$Type} from "java.nio.ByteOrder"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$IntBuffer} from "java.nio.IntBuffer"
import {$LongBuffer} from "java.nio.LongBuffer"
import {$Buffer} from "java.nio.Buffer"
import {$DoubleBuffer} from "java.nio.DoubleBuffer"
import {$ShortBuffer} from "java.nio.ShortBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ByteBuffer extends $Buffer implements $Comparable$$Interface<($ByteBuffer)> {
public "reset"(): $ByteBuffer
public "get"(arg0: (byte)[]): $ByteBuffer
public "get"(arg0: integer): byte
public "get"(): byte
public "get"(arg0: (byte)[], arg1: integer, arg2: integer): $ByteBuffer
public "get"(arg0: integer, arg1: (byte)[]): $ByteBuffer
public "get"(arg0: integer, arg1: (byte)[], arg2: integer, arg3: integer): $ByteBuffer
public "put"(arg0: integer, arg1: byte): $ByteBuffer
public "put"(arg0: $ByteBuffer$$Type): $ByteBuffer
public "put"(arg0: integer, arg1: $ByteBuffer$$Type, arg2: integer, arg3: integer): $ByteBuffer
public "put"(arg0: (byte)[]): $ByteBuffer
public "put"(arg0: integer, arg1: (byte)[]): $ByteBuffer
public "put"(arg0: integer, arg1: (byte)[], arg2: integer, arg3: integer): $ByteBuffer
public "put"(arg0: (byte)[], arg1: integer, arg2: integer): $ByteBuffer
public "put"(arg0: byte): $ByteBuffer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: $ByteBuffer$$Type): integer
public "compareTo"(arg0: any): integer
public "getShort"(): short
public "getShort"(arg0: integer): short
public "putShort"(arg0: integer, arg1: short): $ByteBuffer
public "putShort"(arg0: short): $ByteBuffer
public "getChar"(arg0: integer): character
public "getChar"(): character
public "putChar"(arg0: integer, arg1: character): $ByteBuffer
public "putChar"(arg0: character): $ByteBuffer
public "getInt"(arg0: integer): integer
public "getInt"(): integer
public "putInt"(arg0: integer, arg1: integer): $ByteBuffer
public "putInt"(arg0: integer): $ByteBuffer
public "getLong"(arg0: integer): long
public "getLong"(): long
public "putLong"(arg0: long): $ByteBuffer
public "putLong"(arg0: integer, arg1: long): $ByteBuffer
public "getFloat"(): float
public "getFloat"(arg0: integer): float
public "putFloat"(arg0: float): $ByteBuffer
public "putFloat"(arg0: integer, arg1: float): $ByteBuffer
public "getDouble"(arg0: integer): double
public "getDouble"(): double
public "putDouble"(arg0: integer, arg1: double): $ByteBuffer
public "putDouble"(arg0: double): $ByteBuffer
public "clear"(): $ByteBuffer
public static "wrap"(arg0: (byte)[], arg1: integer, arg2: integer): $ByteBuffer
public static "wrap"(arg0: (byte)[]): $ByteBuffer
public "position"(arg0: integer): $ByteBuffer
public "mismatch"(arg0: $ByteBuffer$$Type): integer
public "limit"(arg0: integer): $Buffer
public "isDirect"(): boolean
public "hasArray"(): boolean
public "array"(): any
public "arrayOffset"(): integer
public "mark"(): $Buffer
public "flip"(): $ByteBuffer
public "rewind"(): $Buffer
public "slice"(): $Buffer
public "slice"(arg0: integer, arg1: integer): $ByteBuffer
public "duplicate"(): $Buffer
public static "allocate"(arg0: integer): $ByteBuffer
public "alignmentOffset"(arg0: integer, arg1: integer): integer
public static "allocateDirect"(arg0: integer): $ByteBuffer
public "asReadOnlyBuffer"(): $ByteBuffer
public "compact"(): $ByteBuffer
public "order"(arg0: $ByteOrder$$Type): $ByteBuffer
public "order"(): $ByteOrder
public "alignedSlice"(arg0: integer): $ByteBuffer
public "asCharBuffer"(): $CharBuffer
public "asShortBuffer"(): $ShortBuffer
public "asIntBuffer"(): $IntBuffer
public "asLongBuffer"(): $LongBuffer
public "asFloatBuffer"(): $FloatBuffer
public "asDoubleBuffer"(): $DoubleBuffer
get "short"(): short
get "char"(): character
get "int"(): integer
get "long"(): long
get "float"(): float
get "double"(): double
get "direct"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ByteBuffer$$Type = ($ByteBuffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ByteBuffer$$Original = $ByteBuffer;}
