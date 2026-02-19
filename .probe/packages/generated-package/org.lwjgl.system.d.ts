declare module "org.lwjgl.system.Callback" {
import {$Pointer$$Interface} from "org.lwjgl.system.Pointer"
import {$CallbackI} from "org.lwjgl.system.CallbackI"
import {$NativeResource$$Interface} from "org.lwjgl.system.NativeResource"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Callback implements $Pointer$$Interface, $NativeResource$$Interface {
public static "get"<T extends $CallbackI>(arg0: long): T
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "address"(): long
public "free"(): void
public static "free"(arg0: long): void
public static "getSafe"<T extends $CallbackI>(arg0: long): T
public "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Callback$$Type = ($Callback);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Callback$$Original = $Callback;}
declare module "org.lwjgl.system.Pointer$Default" {
import {$Pointer$$Interface} from "org.lwjgl.system.Pointer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Pointer$Default implements $Pointer$$Interface {
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "address"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pointer$Default$$Type = ($Pointer$Default);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Pointer$Default$$Original = $Pointer$Default;}
declare module "org.lwjgl.system.Pointer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Pointer$$Interface {

(): long
}

export class $Pointer implements $Pointer$$Interface {
static readonly "POINTER_SIZE": integer
static readonly "CLONG_SIZE": integer
static readonly "CLONG_SHIFT": integer
static readonly "BITS32": boolean
static readonly "POINTER_SHIFT": integer
static readonly "BITS64": boolean

 "address"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pointer$$Type = (() => long);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Pointer$$Original = $Pointer;}
declare module "org.lwjgl.system.CallbackI" {
import {$Pointer$$Interface} from "org.lwjgl.system.Pointer"
import {$FFICIF} from "org.lwjgl.system.libffi.FFICIF"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $CallbackI$$Interface extends $Pointer$$Interface {
get "callInterface"(): $FFICIF
}

export class $CallbackI implements $CallbackI$$Interface {
 "callback"(arg0: long, arg1: long): void
 "address"(): long
 "getCallInterface"(): $FFICIF
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CallbackI$$Type = ($CallbackI);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CallbackI$$Original = $CallbackI;}
declare module "org.lwjgl.system.Struct$StructValidation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Struct$StructValidation$$Interface {

(arg0: long): void
}

export class $Struct$StructValidation implements $Struct$StructValidation$$Interface {
 "validate"(arg0: long): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Struct$StructValidation$$Type = ((arg0: long) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Struct$StructValidation$$Original = $Struct$StructValidation;}
declare module "org.lwjgl.system.NativeResource" {
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $NativeResource$$Interface extends $AutoCloseable$$Interface {

(): void
}

export class $NativeResource implements $NativeResource$$Interface {
 "close"(): void
 "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NativeResource$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NativeResource$$Original = $NativeResource;}
declare module "org.lwjgl.system.MemoryStack" {
import {$Pointer$$Type} from "org.lwjgl.system.Pointer"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$CustomBuffer$$Type} from "org.lwjgl.system.CustomBuffer"
import {$IntBuffer} from "java.nio.IntBuffer"
import {$LongBuffer} from "java.nio.LongBuffer"
import {$Buffer$$Type} from "java.nio.Buffer"
import {$CLongBuffer} from "org.lwjgl.CLongBuffer"
import {$DoubleBuffer} from "java.nio.DoubleBuffer"
import {$PointerBuffer} from "org.lwjgl.PointerBuffer"
import {$ShortBuffer} from "java.nio.ShortBuffer"
import {$FloatBuffer} from "java.nio.FloatBuffer"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$Pointer$Default} from "org.lwjgl.system.Pointer$Default"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $MemoryStack extends $Pointer$Default implements $AutoCloseable$$Interface {
public "UTF16"(arg0: charseq, arg1: boolean): $ByteBuffer
public "UTF16"(arg0: charseq): $ByteBuffer
public "bytes"(arg0: byte, arg1: byte): $ByteBuffer
public "bytes"(arg0: byte, arg1: byte, arg2: byte, arg3: byte): $ByteBuffer
public "bytes"(...arg0: (byte)[]): $ByteBuffer
public "bytes"(arg0: byte): $ByteBuffer
public "bytes"(arg0: byte, arg1: byte, arg2: byte): $ByteBuffer
public "close"(): void
public "getSize"(): integer
public static "create"(): $MemoryStack
public static "create"(arg0: $ByteBuffer$$Type): $MemoryStack
public static "create"(arg0: integer): $MemoryStack
public "getAddress"(): long
public "nbyte"(arg0: byte): long
public "ASCII"(arg0: charseq): $ByteBuffer
public "ASCII"(arg0: charseq, arg1: boolean): $ByteBuffer
public "UTF8"(arg0: charseq): $ByteBuffer
public "UTF8"(arg0: charseq, arg1: boolean): $ByteBuffer
public "push"(): $MemoryStack
public "pop"(): $MemoryStack
public "ints"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $IntBuffer
public "ints"(arg0: integer, arg1: integer, arg2: integer): $IntBuffer
public "ints"(...arg0: (integer)[]): $IntBuffer
public "ints"(arg0: integer): $IntBuffer
public "ints"(arg0: integer, arg1: integer): $IntBuffer
public "longs"(arg0: long, arg1: long): $LongBuffer
public "longs"(arg0: long, arg1: long, arg2: long): $LongBuffer
public "longs"(...arg0: (long)[]): $LongBuffer
public "longs"(arg0: long, arg1: long, arg2: long, arg3: long): $LongBuffer
public "longs"(arg0: long): $LongBuffer
public "doubles"(arg0: double, arg1: double, arg2: double): $DoubleBuffer
public "doubles"(...arg0: (double)[]): $DoubleBuffer
public "doubles"(arg0: double): $DoubleBuffer
public "doubles"(arg0: double, arg1: double): $DoubleBuffer
public "doubles"(arg0: double, arg1: double, arg2: double, arg3: double): $DoubleBuffer
public "nASCII"(arg0: charseq, arg1: boolean): integer
public static "stackPush"(): $MemoryStack
public "malloc"(arg0: integer, arg1: integer): $ByteBuffer
public "malloc"(arg0: integer): $ByteBuffer
public static "stackGet"(): $MemoryStack
public "nmalloc"(arg0: integer): long
public "nmalloc"(arg0: integer, arg1: integer): long
public "ncalloc"(arg0: integer, arg1: integer, arg2: integer): long
public "calloc"(arg0: integer): $ByteBuffer
public "calloc"(arg0: integer, arg1: integer): $ByteBuffer
public "getPointer"(): integer
public "callocInt"(arg0: integer): $IntBuffer
public "setPointer"(arg0: integer): void
public "nUTF8"(arg0: charseq, arg1: boolean): integer
public "pointers"(arg0: $Buffer$$Type, arg1: $Buffer$$Type, arg2: $Buffer$$Type): $PointerBuffer
public "pointers"(arg0: long, arg1: long): $PointerBuffer
public "pointers"(arg0: long, arg1: long, arg2: long): $PointerBuffer
public "pointers"(arg0: $Buffer$$Type, arg1: $Buffer$$Type): $PointerBuffer
public "pointers"(...arg0: ($Buffer$$Type)[]): $PointerBuffer
public "pointers"(arg0: long): $PointerBuffer
public "pointers"(arg0: $Pointer$$Type, arg1: $Pointer$$Type, arg2: $Pointer$$Type): $PointerBuffer
public "pointers"(arg0: long, arg1: long, arg2: long, arg3: long): $PointerBuffer
public "pointers"(arg0: $Pointer$$Type, arg1: $Pointer$$Type): $PointerBuffer
public "pointers"(arg0: $Pointer$$Type): $PointerBuffer
public "pointers"(...arg0: (long)[]): $PointerBuffer
public "pointers"(arg0: $Pointer$$Type, arg1: $Pointer$$Type, arg2: $Pointer$$Type, arg3: $Pointer$$Type): $PointerBuffer
public "pointers"(...arg0: ($Pointer$$Type)[]): $PointerBuffer
public "pointers"(arg0: $Buffer$$Type): $PointerBuffer
public "pointers"(arg0: $Buffer$$Type, arg1: $Buffer$$Type, arg2: $Buffer$$Type, arg3: $Buffer$$Type): $PointerBuffer
public "mallocInt"(arg0: integer): $IntBuffer
public "nASCIISafe"(arg0: charseq, arg1: boolean): integer
public "nUTF16Safe"(arg0: charseq, arg1: boolean): integer
public "shorts"(arg0: short, arg1: short, arg2: short): $ShortBuffer
public "shorts"(...arg0: (short)[]): $ShortBuffer
public "shorts"(arg0: short): $ShortBuffer
public "shorts"(arg0: short, arg1: short): $ShortBuffer
public "shorts"(arg0: short, arg1: short, arg2: short, arg3: short): $ShortBuffer
public "nint"(arg0: integer): long
public "ndouble"(arg0: double): long
public static "ncreate"(arg0: long, arg1: integer): $MemoryStack
public "nclong"(arg0: long): long
public static "stackInts"(arg0: integer, arg1: integer): $IntBuffer
public static "stackInts"(arg0: integer, arg1: integer, arg2: integer): $IntBuffer
public static "stackInts"(arg0: integer): $IntBuffer
public static "stackInts"(...arg0: (integer)[]): $IntBuffer
public static "stackInts"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $IntBuffer
public static "stackLongs"(...arg0: (long)[]): $LongBuffer
public static "stackLongs"(arg0: long, arg1: long, arg2: long): $LongBuffer
public static "stackLongs"(arg0: long, arg1: long, arg2: long, arg3: long): $LongBuffer
public static "stackLongs"(arg0: long): $LongBuffer
public static "stackLongs"(arg0: long, arg1: long): $LongBuffer
public static "stackASCII"(arg0: charseq, arg1: boolean): $ByteBuffer
public static "stackASCII"(arg0: charseq): $ByteBuffer
public "callocLong"(arg0: integer): $LongBuffer
public "npointer"(arg0: $Buffer$$Type): long
public "npointer"(arg0: $Pointer$$Type): long
public "npointer"(arg0: long): long
public "UTF8Safe"(arg0: charseq): $ByteBuffer
public "UTF8Safe"(arg0: charseq, arg1: boolean): $ByteBuffer
public "nfloat"(arg0: float): long
public "nUTF16"(arg0: charseq, arg1: boolean): integer
public "ASCIISafe"(arg0: charseq): $ByteBuffer
public "ASCIISafe"(arg0: charseq, arg1: boolean): $ByteBuffer
public "clongs"(arg0: long, arg1: long, arg2: long, arg3: long): $CLongBuffer
public "clongs"(arg0: long, arg1: long): $CLongBuffer
public "clongs"(arg0: long, arg1: long, arg2: long): $CLongBuffer
public "clongs"(...arg0: (long)[]): $CLongBuffer
public "clongs"(arg0: long): $CLongBuffer
public static "stackUTF16"(arg0: charseq, arg1: boolean): $ByteBuffer
public static "stackUTF16"(arg0: charseq): $ByteBuffer
public "nshort"(arg0: short): long
public "UTF16Safe"(arg0: charseq, arg1: boolean): $ByteBuffer
public "UTF16Safe"(arg0: charseq): $ByteBuffer
public "nlong"(arg0: long): long
public "nUTF8Safe"(arg0: charseq, arg1: boolean): integer
public static "stackBytes"(...arg0: (byte)[]): $ByteBuffer
public static "stackBytes"(arg0: byte, arg1: byte): $ByteBuffer
public static "stackBytes"(arg0: byte, arg1: byte, arg2: byte): $ByteBuffer
public static "stackBytes"(arg0: byte, arg1: byte, arg2: byte, arg3: byte): $ByteBuffer
public static "stackBytes"(arg0: byte): $ByteBuffer
public static "stackUTF8"(arg0: charseq, arg1: boolean): $ByteBuffer
public static "stackUTF8"(arg0: charseq): $ByteBuffer
public "floats"(...arg0: (float)[]): $FloatBuffer
public "floats"(arg0: float, arg1: float, arg2: float, arg3: float): $FloatBuffer
public "floats"(arg0: float): $FloatBuffer
public "floats"(arg0: float, arg1: float): $FloatBuffer
public "floats"(arg0: float, arg1: float, arg2: float): $FloatBuffer
public "mallocLong"(arg0: integer): $LongBuffer
public static "stackPop"(): $MemoryStack
public "mallocPointer"(arg0: integer): $PointerBuffer
public "getPointerAddress"(): long
public static "stackMallocShort"(arg0: integer): $ShortBuffer
public static "stackCallocShort"(arg0: integer): $ShortBuffer
public "callocCLong"(arg0: integer): $CLongBuffer
public static "stackShorts"(arg0: short, arg1: short, arg2: short): $ShortBuffer
public static "stackShorts"(...arg0: (short)[]): $ShortBuffer
public static "stackShorts"(arg0: short, arg1: short, arg2: short, arg3: short): $ShortBuffer
public static "stackShorts"(arg0: short): $ShortBuffer
public static "stackShorts"(arg0: short, arg1: short): $ShortBuffer
public static "stackMallocInt"(arg0: integer): $IntBuffer
public static "stackCallocInt"(arg0: integer): $IntBuffer
public static "stackMallocLong"(arg0: integer): $LongBuffer
public static "stackCallocLong"(arg0: integer): $LongBuffer
public static "nstackCalloc"(arg0: integer, arg1: integer, arg2: integer): long
public static "stackCalloc"(arg0: integer): $ByteBuffer
public "callocShort"(arg0: integer): $ShortBuffer
public "getFrameIndex"(): integer
public "mallocShort"(arg0: integer): $ShortBuffer
public "mallocFloat"(arg0: integer): $FloatBuffer
public "callocFloat"(arg0: integer): $FloatBuffer
public "mallocDouble"(arg0: integer): $DoubleBuffer
public "callocDouble"(arg0: integer): $DoubleBuffer
public "mallocCLong"(arg0: integer): $CLongBuffer
public "callocPointer"(arg0: integer): $PointerBuffer
public "pointersOfElements"(arg0: $CustomBuffer$$Type<(never)>): $PointerBuffer
public static "nstackMalloc"(arg0: integer): long
public static "nstackMalloc"(arg0: integer, arg1: integer): long
public static "stackMalloc"(arg0: integer): $ByteBuffer
public static "stackCallocCLong"(arg0: integer): $CLongBuffer
public static "stackCallocPointer"(arg0: integer): $PointerBuffer
public static "stackCLongs"(arg0: long): $CLongBuffer
public static "stackCLongs"(arg0: long, arg1: long, arg2: long): $CLongBuffer
public static "stackCLongs"(arg0: long, arg1: long): $CLongBuffer
public static "stackCLongs"(arg0: long, arg1: long, arg2: long, arg3: long): $CLongBuffer
public static "stackCLongs"(...arg0: (long)[]): $CLongBuffer
public static "stackUTF8Safe"(arg0: charseq, arg1: boolean): $ByteBuffer
public static "stackUTF8Safe"(arg0: charseq): $ByteBuffer
public static "stackCallocFloat"(arg0: integer): $FloatBuffer
public static "stackCallocDouble"(arg0: integer): $DoubleBuffer
public static "stackDoubles"(...arg0: (double)[]): $DoubleBuffer
public static "stackDoubles"(arg0: double, arg1: double, arg2: double, arg3: double): $DoubleBuffer
public static "stackDoubles"(arg0: double): $DoubleBuffer
public static "stackDoubles"(arg0: double, arg1: double): $DoubleBuffer
public static "stackDoubles"(arg0: double, arg1: double, arg2: double): $DoubleBuffer
public static "stackMallocDouble"(arg0: integer): $DoubleBuffer
public static "stackASCIISafe"(arg0: charseq, arg1: boolean): $ByteBuffer
public static "stackASCIISafe"(arg0: charseq): $ByteBuffer
public static "stackMallocFloat"(arg0: integer): $FloatBuffer
public static "stackUTF16Safe"(arg0: charseq): $ByteBuffer
public static "stackUTF16Safe"(arg0: charseq, arg1: boolean): $ByteBuffer
public static "stackMallocCLong"(arg0: integer): $CLongBuffer
public static "stackFloats"(arg0: float, arg1: float, arg2: float): $FloatBuffer
public static "stackFloats"(arg0: float, arg1: float, arg2: float, arg3: float): $FloatBuffer
public static "stackFloats"(...arg0: (float)[]): $FloatBuffer
public static "stackFloats"(arg0: float, arg1: float): $FloatBuffer
public static "stackFloats"(arg0: float): $FloatBuffer
public static "stackMallocPointer"(arg0: integer): $PointerBuffer
public static "stackPointers"(arg0: long, arg1: long): $PointerBuffer
public static "stackPointers"(arg0: $Pointer$$Type): $PointerBuffer
public static "stackPointers"(...arg0: (long)[]): $PointerBuffer
public static "stackPointers"(arg0: long, arg1: long, arg2: long, arg3: long): $PointerBuffer
public static "stackPointers"(arg0: long, arg1: long, arg2: long): $PointerBuffer
public static "stackPointers"(arg0: long): $PointerBuffer
public static "stackPointers"(...arg0: ($Pointer$$Type)[]): $PointerBuffer
public static "stackPointers"(arg0: $Pointer$$Type, arg1: $Pointer$$Type, arg2: $Pointer$$Type, arg3: $Pointer$$Type): $PointerBuffer
public static "stackPointers"(arg0: $Pointer$$Type, arg1: $Pointer$$Type, arg2: $Pointer$$Type): $PointerBuffer
public static "stackPointers"(arg0: $Pointer$$Type, arg1: $Pointer$$Type): $PointerBuffer
get "size"(): integer
get "address"(): long
get "pointer"(): integer
set "pointer"(value: integer)
get "pointerAddress"(): long
get "frameIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MemoryStack$$Type = ($MemoryStack);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MemoryStack$$Original = $MemoryStack;}
declare module "org.lwjgl.system.Struct" {
import {$Struct$StructValidation$$Type} from "org.lwjgl.system.Struct$StructValidation"
import {$Pointer$Default} from "org.lwjgl.system.Pointer$Default"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Struct<SELF extends $Struct<(object)>> extends $Pointer$Default {
public "clear"(): void
public static "validate"(arg0: long, arg1: integer, arg2: integer, arg3: $Struct$StructValidation$$Type): void
public "isNull"(arg0: integer): boolean
public "free"(): void
public "sizeof"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Struct$$Type<SELF> = ($Struct<(SELF)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Struct$$Original<SELF> = $Struct<(SELF)>;}
declare module "org.lwjgl.system.StructBuffer" {
import {$Iterable$$Interface} from "java.lang.Iterable"
import {$Iterator} from "java.util.Iterator"
import {$Spliterator} from "java.util.Spliterator"
import {$Struct, $Struct$$Type} from "org.lwjgl.system.Struct"
import {$CustomBuffer} from "org.lwjgl.system.CustomBuffer"
import {$Stream} from "java.util.stream.Stream"
import {$Consumer$$Type} from "java.util.function.Consumer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $StructBuffer<T extends $Struct<(object)>, SELF extends $StructBuffer<(object), (object)>> extends $CustomBuffer<(SELF)> implements $Iterable$$Interface<(T)> {
public "get"(arg0: integer, arg1: T): SELF
public "get"(arg0: T): SELF
public "get"(arg0: integer): T
public "get"(): T
public "put"(arg0: integer, arg1: T): SELF
public "put"(arg0: T): SELF
public "iterator"(): $Iterator<(T)>
public "apply"(arg0: integer, arg1: $Consumer$$Type<(T)>): SELF
public "apply"(arg0: $Consumer$$Type<(T)>): SELF
public "stream"(): $Stream<(T)>
public "spliterator"(): $Spliterator<(T)>
public "forEach"(arg0: $Consumer$$Type<(T)>): void
public "parallelStream"(): $Stream<(T)>
public "sizeof"(): integer
[Symbol.iterator](): IterableIterator<T>;
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructBuffer$$Type<T, SELF> = ($StructBuffer<(T), (SELF)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructBuffer$$Original<T, SELF> = $StructBuffer<(T), (SELF)>;}
declare module "org.lwjgl.system.CustomBuffer" {
import {$Pointer$Default} from "org.lwjgl.system.Pointer$Default"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $CustomBuffer<SELF extends $CustomBuffer<(object)>> extends $Pointer$Default {
public "reset"(): SELF
public "put"(arg0: SELF): SELF
public "toString"(): StringJS
public "clear"(): SELF
public "position"(): integer
public "position"(arg0: integer): SELF
public "limit"(): integer
public "limit"(arg0: integer): SELF
public "remaining"(): integer
public "capacity"(): integer
public "address"(): long
public "address"(arg0: integer): long
public "mark"(): SELF
public "flip"(): SELF
public "rewind"(): SELF
public "hasRemaining"(): boolean
public "slice"(): SELF
public "slice"(arg0: integer, arg1: integer): SELF
public "duplicate"(): SELF
public "free"(): void
public "compact"(): SELF
public "address0"(): long
public "sizeof"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomBuffer$$Type<SELF> = ($CustomBuffer<(SELF)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomBuffer$$Original<SELF> = $CustomBuffer<(SELF)>;}
