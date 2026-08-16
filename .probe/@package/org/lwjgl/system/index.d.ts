import { $Consumer_ } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $FFICIF } from "@package/org/lwjgl/system/libffi";
import { $CLongBuffer, $PointerBuffer } from "@package/org/lwjgl";
import { $CharSequence, $Iterable, $AutoCloseable } from "@package/java/lang";
import { $Spliterator, $Iterator } from "@package/java/util";
import { $DoubleBuffer, $Buffer, $LongBuffer, $ByteBuffer, $IntBuffer, $FloatBuffer, $ShortBuffer } from "@package/java/nio";
export * as libffi from "@package/org/lwjgl/system/libffi";

declare module "@package/org/lwjgl/system" {
    export class $StructBuffer<T extends $Struct<T>, SELF extends $StructBuffer<T, SELF>> extends $CustomBuffer<SELF> implements $Iterable<T> {
        get(arg0: number, arg1: T): SELF;
        get(arg0: T): SELF;
        get(arg0: number): T;
        get(): T;
        put(arg0: number, arg1: T): SELF;
        put(arg0: T): SELF;
        iterator(): $Iterator<T>;
        apply(arg0: number, arg1: $Consumer_<T>): SELF;
        apply(arg0: $Consumer_<T>): SELF;
        stream(): $Stream<T>;
        spliterator(): $Spliterator<T>;
        forEach(arg0: $Consumer_<T>): void;
        parallelStream(): $Stream<T>;
        [Symbol.iterator](): Iterator<T>
    }
    export class $CustomBuffer<SELF extends $CustomBuffer<SELF>> extends $Pointer$Default {
        reset(): SELF;
        put(arg0: SELF): SELF;
        clear(): SELF;
        position(): number;
        position(arg0: number): SELF;
        limit(): number;
        limit(arg0: number): SELF;
        remaining(): number;
        capacity(): number;
        address(arg0: number): number;
        mark(): SELF;
        flip(): SELF;
        rewind(): SELF;
        hasRemaining(): boolean;
        slice(): SELF;
        slice(arg0: number, arg1: number): SELF;
        duplicate(): SELF;
        free(): void;
        compact(): SELF;
        sizeof(): number;
        address0(): number;
    }
    export class $MemoryStack extends $Pointer$Default implements $AutoCloseable {
        UTF16(arg0: $CharSequence, arg1: boolean): $ByteBuffer;
        UTF16(arg0: $CharSequence): $ByteBuffer;
        bytes(arg0: number, arg1: number): $ByteBuffer;
        bytes(arg0: number, arg1: number, arg2: number, arg3: number): $ByteBuffer;
        bytes(...arg0: number[]): $ByteBuffer;
        bytes(arg0: number): $ByteBuffer;
        bytes(arg0: number, arg1: number, arg2: number): $ByteBuffer;
        close(): void;
        getSize(): number;
        static create(): $MemoryStack;
        static create(arg0: $ByteBuffer): $MemoryStack;
        static create(arg0: number): $MemoryStack;
        getAddress(): number;
        nbyte(arg0: number): number;
        ASCII(arg0: $CharSequence): $ByteBuffer;
        ASCII(arg0: $CharSequence, arg1: boolean): $ByteBuffer;
        UTF8(arg0: $CharSequence, arg1: boolean): $ByteBuffer;
        UTF8(arg0: $CharSequence): $ByteBuffer;
        push(): $MemoryStack;
        pop(): $MemoryStack;
        ints(...arg0: number[]): $IntBuffer;
        ints(arg0: number, arg1: number, arg2: number): $IntBuffer;
        ints(arg0: number, arg1: number, arg2: number, arg3: number): $IntBuffer;
        ints(arg0: number, arg1: number): $IntBuffer;
        ints(arg0: number): $IntBuffer;
        longs(...arg0: number[]): $LongBuffer;
        longs(arg0: number, arg1: number, arg2: number, arg3: number): $LongBuffer;
        longs(arg0: number, arg1: number): $LongBuffer;
        longs(arg0: number): $LongBuffer;
        longs(arg0: number, arg1: number, arg2: number): $LongBuffer;
        doubles(arg0: number, arg1: number): $DoubleBuffer;
        doubles(arg0: number, arg1: number, arg2: number, arg3: number): $DoubleBuffer;
        doubles(arg0: number): $DoubleBuffer;
        doubles(arg0: number, arg1: number, arg2: number): $DoubleBuffer;
        doubles(...arg0: number[]): $DoubleBuffer;
        malloc(arg0: number): $ByteBuffer;
        malloc(arg0: number, arg1: number): $ByteBuffer;
        static stackPush(): $MemoryStack;
        callocInt(arg0: number): $IntBuffer;
        calloc(arg0: number): $ByteBuffer;
        calloc(arg0: number, arg1: number): $ByteBuffer;
        ncalloc(arg0: number, arg1: number, arg2: number): number;
        pointers(arg0: $Buffer, arg1: $Buffer): $PointerBuffer;
        pointers(arg0: $Buffer): $PointerBuffer;
        pointers(...arg0: $Pointer_[]): $PointerBuffer;
        pointers(arg0: $Pointer_, arg1: $Pointer_, arg2: $Pointer_, arg3: $Pointer_): $PointerBuffer;
        pointers(arg0: number): $PointerBuffer;
        pointers(arg0: $Buffer, arg1: $Buffer, arg2: $Buffer, arg3: $Buffer): $PointerBuffer;
        pointers(...arg0: $Buffer[]): $PointerBuffer;
        pointers(...arg0: number[]): $PointerBuffer;
        pointers(arg0: number, arg1: number, arg2: number, arg3: number): $PointerBuffer;
        pointers(arg0: number, arg1: number, arg2: number): $PointerBuffer;
        pointers(arg0: number, arg1: number): $PointerBuffer;
        pointers(arg0: $Pointer_): $PointerBuffer;
        pointers(arg0: $Pointer_, arg1: $Pointer_): $PointerBuffer;
        pointers(arg0: $Pointer_, arg1: $Pointer_, arg2: $Pointer_): $PointerBuffer;
        pointers(arg0: $Buffer, arg1: $Buffer, arg2: $Buffer): $PointerBuffer;
        mallocInt(arg0: number): $IntBuffer;
        nmalloc(arg0: number, arg1: number): number;
        nmalloc(arg0: number): number;
        UTF16Safe(arg0: $CharSequence | null): $ByteBuffer;
        UTF16Safe(arg0: $CharSequence | null, arg1: boolean): $ByteBuffer;
        static ncreate(arg0: number, arg1: number): $MemoryStack;
        shorts(arg0: number, arg1: number, arg2: number, arg3: number): $ShortBuffer;
        shorts(arg0: number, arg1: number, arg2: number): $ShortBuffer;
        shorts(...arg0: number[]): $ShortBuffer;
        shorts(arg0: number, arg1: number): $ShortBuffer;
        shorts(arg0: number): $ShortBuffer;
        mallocLong(arg0: number): $LongBuffer;
        nlong(arg0: number): number;
        nUTF16Safe(arg0: $CharSequence | null, arg1: boolean): number;
        static stackASCII(arg0: $CharSequence, arg1: boolean): $ByteBuffer;
        static stackASCII(arg0: $CharSequence): $ByteBuffer;
        getPointer(): number;
        static stackPop(): $MemoryStack;
        nfloat(arg0: number): number;
        nUTF8(arg0: $CharSequence, arg1: boolean): number;
        UTF8Safe(arg0: $CharSequence | null): $ByteBuffer;
        UTF8Safe(arg0: $CharSequence | null, arg1: boolean): $ByteBuffer;
        static stackInts(...arg0: number[]): $IntBuffer;
        static stackInts(arg0: number, arg1: number, arg2: number, arg3: number): $IntBuffer;
        static stackInts(arg0: number, arg1: number, arg2: number): $IntBuffer;
        static stackInts(arg0: number, arg1: number): $IntBuffer;
        static stackInts(arg0: number): $IntBuffer;
        nint(arg0: number): number;
        nASCIISafe(arg0: $CharSequence | null, arg1: boolean): number;
        static stackLongs(arg0: number, arg1: number): $LongBuffer;
        static stackLongs(arg0: number): $LongBuffer;
        static stackLongs(...arg0: number[]): $LongBuffer;
        static stackLongs(arg0: number, arg1: number, arg2: number): $LongBuffer;
        static stackLongs(arg0: number, arg1: number, arg2: number, arg3: number): $LongBuffer;
        static stackUTF16(arg0: $CharSequence): $ByteBuffer;
        static stackUTF16(arg0: $CharSequence, arg1: boolean): $ByteBuffer;
        setPointer(arg0: number): void;
        clongs(arg0: number, arg1: number, arg2: number): $CLongBuffer;
        clongs(arg0: number): $CLongBuffer;
        clongs(arg0: number, arg1: number): $CLongBuffer;
        clongs(arg0: number, arg1: number, arg2: number, arg3: number): $CLongBuffer;
        clongs(...arg0: number[]): $CLongBuffer;
        floats(...arg0: number[]): $FloatBuffer;
        floats(arg0: number, arg1: number, arg2: number, arg3: number): $FloatBuffer;
        floats(arg0: number): $FloatBuffer;
        floats(arg0: number, arg1: number, arg2: number): $FloatBuffer;
        floats(arg0: number, arg1: number): $FloatBuffer;
        ASCIISafe(arg0: $CharSequence | null): $ByteBuffer;
        ASCIISafe(arg0: $CharSequence | null, arg1: boolean): $ByteBuffer;
        nshort(arg0: number): number;
        static stackBytes(arg0: number, arg1: number, arg2: number): $ByteBuffer;
        static stackBytes(arg0: number): $ByteBuffer;
        static stackBytes(arg0: number, arg1: number): $ByteBuffer;
        static stackBytes(...arg0: number[]): $ByteBuffer;
        static stackBytes(arg0: number, arg1: number, arg2: number, arg3: number): $ByteBuffer;
        nUTF8Safe(arg0: $CharSequence | null, arg1: boolean): number;
        callocLong(arg0: number): $LongBuffer;
        npointer(arg0: number): number;
        npointer(arg0: $Pointer_): number;
        npointer(arg0: $Buffer): number;
        nASCII(arg0: $CharSequence, arg1: boolean): number;
        nclong(arg0: number): number;
        ndouble(arg0: number): number;
        static stackUTF8(arg0: $CharSequence, arg1: boolean): $ByteBuffer;
        static stackUTF8(arg0: $CharSequence): $ByteBuffer;
        static stackGet(): $MemoryStack;
        nUTF16(arg0: $CharSequence, arg1: boolean): number;
        mallocPointer(arg0: number): $PointerBuffer;
        getFrameIndex(): number;
        mallocCLong(arg0: number): $CLongBuffer;
        static stackMalloc(arg0: number): $ByteBuffer;
        static stackCallocCLong(arg0: number): $CLongBuffer;
        static stackCallocDouble(arg0: number): $DoubleBuffer;
        mallocDouble(arg0: number): $DoubleBuffer;
        static nstackMalloc(arg0: number, arg1: number): number;
        static nstackMalloc(arg0: number): number;
        static stackCallocInt(arg0: number): $IntBuffer;
        callocPointer(arg0: number): $PointerBuffer;
        static stackMallocLong(arg0: number): $LongBuffer;
        mallocFloat(arg0: number): $FloatBuffer;
        static stackMallocInt(arg0: number): $IntBuffer;
        pointersOfElements(arg0: $CustomBuffer<never>): $PointerBuffer;
        static stackMallocFloat(arg0: number): $FloatBuffer;
        static stackMallocDouble(arg0: number): $DoubleBuffer;
        callocCLong(arg0: number): $CLongBuffer;
        static stackCallocShort(arg0: number): $ShortBuffer;
        static stackDoubles(arg0: number): $DoubleBuffer;
        static stackDoubles(arg0: number, arg1: number, arg2: number, arg3: number): $DoubleBuffer;
        static stackDoubles(...arg0: number[]): $DoubleBuffer;
        static stackDoubles(arg0: number, arg1: number): $DoubleBuffer;
        static stackDoubles(arg0: number, arg1: number, arg2: number): $DoubleBuffer;
        static stackCallocFloat(arg0: number): $FloatBuffer;
        callocShort(arg0: number): $ShortBuffer;
        static stackCalloc(arg0: number): $ByteBuffer;
        static stackMallocShort(arg0: number): $ShortBuffer;
        static stackCallocPointer(arg0: number): $PointerBuffer;
        static stackUTF8Safe(arg0: $CharSequence | null, arg1: boolean): $ByteBuffer;
        static stackUTF8Safe(arg0: $CharSequence | null): $ByteBuffer;
        static stackASCIISafe(arg0: $CharSequence | null): $ByteBuffer;
        static stackASCIISafe(arg0: $CharSequence | null, arg1: boolean): $ByteBuffer;
        static stackPointers(...arg0: $Pointer_[]): $PointerBuffer;
        static stackPointers(arg0: $Pointer_, arg1: $Pointer_, arg2: $Pointer_, arg3: $Pointer_): $PointerBuffer;
        static stackPointers(...arg0: number[]): $PointerBuffer;
        static stackPointers(arg0: $Pointer_): $PointerBuffer;
        static stackPointers(arg0: $Pointer_, arg1: $Pointer_): $PointerBuffer;
        static stackPointers(arg0: $Pointer_, arg1: $Pointer_, arg2: $Pointer_): $PointerBuffer;
        static stackPointers(arg0: number): $PointerBuffer;
        static stackPointers(arg0: number, arg1: number): $PointerBuffer;
        static stackPointers(arg0: number, arg1: number, arg2: number): $PointerBuffer;
        static stackPointers(arg0: number, arg1: number, arg2: number, arg3: number): $PointerBuffer;
        mallocShort(arg0: number): $ShortBuffer;
        static nstackCalloc(arg0: number, arg1: number, arg2: number): number;
        callocFloat(arg0: number): $FloatBuffer;
        static stackShorts(arg0: number, arg1: number): $ShortBuffer;
        static stackShorts(arg0: number, arg1: number, arg2: number, arg3: number): $ShortBuffer;
        static stackShorts(arg0: number, arg1: number, arg2: number): $ShortBuffer;
        static stackShorts(arg0: number): $ShortBuffer;
        static stackShorts(...arg0: number[]): $ShortBuffer;
        callocDouble(arg0: number): $DoubleBuffer;
        static stackUTF16Safe(arg0: $CharSequence | null, arg1: boolean): $ByteBuffer;
        static stackUTF16Safe(arg0: $CharSequence | null): $ByteBuffer;
        static stackMallocPointer(arg0: number): $PointerBuffer;
        getPointerAddress(): number;
        static stackCallocLong(arg0: number): $LongBuffer;
        static stackMallocCLong(arg0: number): $CLongBuffer;
        static stackCLongs(...arg0: number[]): $CLongBuffer;
        static stackCLongs(arg0: number, arg1: number, arg2: number, arg3: number): $CLongBuffer;
        static stackCLongs(arg0: number): $CLongBuffer;
        static stackCLongs(arg0: number, arg1: number): $CLongBuffer;
        static stackCLongs(arg0: number, arg1: number, arg2: number): $CLongBuffer;
        static stackFloats(arg0: number, arg1: number, arg2: number, arg3: number): $FloatBuffer;
        static stackFloats(arg0: number): $FloatBuffer;
        static stackFloats(...arg0: number[]): $FloatBuffer;
        static stackFloats(arg0: number, arg1: number, arg2: number): $FloatBuffer;
        static stackFloats(arg0: number, arg1: number): $FloatBuffer;
        get size(): number;
        get frameIndex(): number;
        get pointerAddress(): number;
    }
    export class $Pointer {
        static POINTER_SIZE: number;
        static CLONG_SIZE: number;
        static CLONG_SHIFT: number;
        static BITS32: boolean;
        static POINTER_SHIFT: number;
        static BITS64: boolean;
    }
    export interface $Pointer {
        address(): number;
    }
    /**
     * Values that may be interpreted as {@link $Pointer}.
     */
    export type $Pointer_ = (() => number);
    export class $NativeResource {
    }
    export interface $NativeResource extends $AutoCloseable {
        close(): void;
        free(): void;
    }
    /**
     * Values that may be interpreted as {@link $NativeResource}.
     */
    export type $NativeResource_ = (() => void);
    export class $Struct<SELF extends $Struct<SELF>> extends $Pointer$Default {
        clear(): void;
        static validate(arg0: number, arg1: number, arg2: number, arg3: $Struct$StructValidation_): void;
        isNull(arg0: number): boolean;
        free(): void;
        sizeof(): number;
    }
    export class $Callback implements $Pointer, $NativeResource {
        static get<T extends $CallbackI>(arg0: number): T;
        address(): number;
        free(): void;
        static free(arg0: number): void;
        static getSafe<T extends $CallbackI>(arg0: number): T;
        close(): void;
    }
    export class $CallbackI {
    }
    export interface $CallbackI extends $Pointer {
        address(): number;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    export class $Pointer$Default implements $Pointer {
        address(): number;
    }
    export class $Struct$StructValidation {
    }
    export interface $Struct$StructValidation {
        validate(arg0: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Struct$StructValidation}.
     */
    export type $Struct$StructValidation_ = ((arg0: number) => void);
}
