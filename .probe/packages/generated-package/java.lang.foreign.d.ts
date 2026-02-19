declare module "java.lang.foreign.SegmentAllocator" {
import {$MemorySegment, $MemorySegment$$Type} from "java.lang.foreign.MemorySegment"
import {$ValueLayout$OfLong$$Type} from "java.lang.foreign.ValueLayout$OfLong"
import {$ValueLayout$OfByte$$Type} from "java.lang.foreign.ValueLayout$OfByte"
import {$ValueLayout$OfDouble$$Type} from "java.lang.foreign.ValueLayout$OfDouble"
import {$AddressLayout$$Type} from "java.lang.foreign.AddressLayout"
import {$MemoryLayout$$Type} from "java.lang.foreign.MemoryLayout"
import {$ValueLayout$OfInt$$Type} from "java.lang.foreign.ValueLayout$OfInt"
import {$ValueLayout$OfShort$$Type} from "java.lang.foreign.ValueLayout$OfShort"
import {$ValueLayout$OfFloat$$Type} from "java.lang.foreign.ValueLayout$OfFloat"
import {$ValueLayout$OfChar$$Type} from "java.lang.foreign.ValueLayout$OfChar"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $SegmentAllocator$$Interface {

(arg0: long, arg1: long): $MemorySegment$$Type
}

export class $SegmentAllocator implements $SegmentAllocator$$Interface {
static "prefixAllocator"(arg0: $MemorySegment$$Type): $SegmentAllocator
 "allocate"(arg0: $AddressLayout$$Type, arg1: $MemorySegment$$Type): $MemorySegment
 "allocate"(arg0: $ValueLayout$OfDouble$$Type, arg1: double): $MemorySegment
 "allocate"(arg0: $ValueLayout$OfLong$$Type, arg1: long): $MemorySegment
 "allocate"(arg0: long, arg1: long): $MemorySegment
 "allocate"(arg0: long): $MemorySegment
 "allocate"(arg0: $MemoryLayout$$Type): $MemorySegment
 "allocate"(arg0: $ValueLayout$OfByte$$Type, arg1: byte): $MemorySegment
 "allocate"(arg0: $ValueLayout$OfChar$$Type, arg1: character): $MemorySegment
 "allocate"(arg0: $ValueLayout$OfShort$$Type, arg1: short): $MemorySegment
 "allocate"(arg0: $ValueLayout$OfFloat$$Type, arg1: float): $MemorySegment
 "allocate"(arg0: $ValueLayout$OfInt$$Type, arg1: integer): $MemorySegment
 "allocateArray"(arg0: $ValueLayout$OfLong$$Type, ...arg1: (long)[]): $MemorySegment
 "allocateArray"(arg0: $ValueLayout$OfDouble$$Type, ...arg1: (double)[]): $MemorySegment
 "allocateArray"(arg0: $MemoryLayout$$Type, arg1: long): $MemorySegment
 "allocateArray"(arg0: $ValueLayout$OfByte$$Type, ...arg1: (byte)[]): $MemorySegment
 "allocateArray"(arg0: $ValueLayout$OfShort$$Type, ...arg1: (short)[]): $MemorySegment
 "allocateArray"(arg0: $ValueLayout$OfChar$$Type, ...arg1: (character)[]): $MemorySegment
 "allocateArray"(arg0: $ValueLayout$OfFloat$$Type, ...arg1: (float)[]): $MemorySegment
 "allocateArray"(arg0: $ValueLayout$OfInt$$Type, ...arg1: (integer)[]): $MemorySegment
 "allocateUtf8String"(arg0: StringJS): $MemorySegment
static "slicingAllocator"(arg0: $MemorySegment$$Type): $SegmentAllocator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SegmentAllocator$$Type = ((arg0: long, arg1: long) => $MemorySegment$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SegmentAllocator$$Original = $SegmentAllocator;}
declare module "java.lang.foreign.ValueLayout$OfBoolean" {
import {$StructLayout} from "java.lang.foreign.StructLayout"
import {$ByteOrder, $ByteOrder$$Type} from "java.nio.ByteOrder"
import {$Optional} from "java.util.Optional"
import {$MethodHandle} from "java.lang.invoke.MethodHandle"
import {$PaddingLayout} from "java.lang.foreign.PaddingLayout"
import {$UnionLayout} from "java.lang.foreign.UnionLayout"
import {$MemoryLayout, $MemoryLayout$$Type} from "java.lang.foreign.MemoryLayout"
import {$SequenceLayout} from "java.lang.foreign.SequenceLayout"
import {$MemoryLayout$PathElement$$Type} from "java.lang.foreign.MemoryLayout$PathElement"
import {$ValueLayout, $ValueLayout$$Interface} from "java.lang.foreign.ValueLayout"
import {$VarHandle} from "java.lang.invoke.VarHandle"
import {$Class} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ValueLayout$OfBoolean$$Interface extends $ValueLayout$$Interface {
}

export class $ValueLayout$OfBoolean implements $ValueLayout$OfBoolean$$Interface {
 "withName"(arg0: StringJS): $MemoryLayout
 "withByteAlignment"(arg0: long): $MemoryLayout
 "withoutName"(): $MemoryLayout
 "withOrder"(arg0: $ByteOrder$$Type): $ValueLayout
 "carrier"(): $Class<(never)>
 "order"(): $ByteOrder
 "arrayElementVarHandle"(...arg0: (integer)[]): $VarHandle
 "byteSize"(): long
 "byteAlignment"(): long
 "name"(): $Optional<(StringJS)>
 "equals"(arg0: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
 "byteOffset"(...arg0: ($MemoryLayout$PathElement$$Type)[]): long
 "select"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MemoryLayout
static "paddingLayout"(arg0: long): $PaddingLayout
static "structLayout"(...arg0: ($MemoryLayout$$Type)[]): $StructLayout
static "unionLayout"(...arg0: ($MemoryLayout$$Type)[]): $UnionLayout
static "sequenceLayout"(arg0: $MemoryLayout$$Type): $SequenceLayout
static "sequenceLayout"(arg0: long, arg1: $MemoryLayout$$Type): $SequenceLayout
 "byteOffsetHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "varHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $VarHandle
 "sliceHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueLayout$OfBoolean$$Type = ($ValueLayout$OfBoolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ValueLayout$OfBoolean$$Original = $ValueLayout$OfBoolean;}
declare module "java.lang.foreign.StructLayout" {
import {$MemoryLayout, $MemoryLayout$$Type} from "java.lang.foreign.MemoryLayout"
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$SequenceLayout} from "java.lang.foreign.SequenceLayout"
import {$MemoryLayout$PathElement$$Type} from "java.lang.foreign.MemoryLayout$PathElement"
import {$MethodHandle} from "java.lang.invoke.MethodHandle"
import {$VarHandle} from "java.lang.invoke.VarHandle"
import {$GroupLayout, $GroupLayout$$Interface} from "java.lang.foreign.GroupLayout"
import {$PaddingLayout} from "java.lang.foreign.PaddingLayout"
import {$UnionLayout} from "java.lang.foreign.UnionLayout"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $StructLayout$$Interface extends $GroupLayout$$Interface {
}

export class $StructLayout implements $StructLayout$$Interface {
 "withName"(arg0: StringJS): $GroupLayout
 "withByteAlignment"(arg0: long): $MemoryLayout
 "withoutName"(): $GroupLayout
 "memberLayouts"(): $List<($MemoryLayout)>
 "byteSize"(): long
 "byteAlignment"(): long
 "name"(): $Optional<(StringJS)>
 "equals"(arg0: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
 "byteOffset"(...arg0: ($MemoryLayout$PathElement$$Type)[]): long
 "select"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MemoryLayout
static "paddingLayout"(arg0: long): $PaddingLayout
static "structLayout"(...arg0: ($MemoryLayout$$Type)[]): $StructLayout
static "unionLayout"(...arg0: ($MemoryLayout$$Type)[]): $UnionLayout
static "sequenceLayout"(arg0: $MemoryLayout$$Type): $SequenceLayout
static "sequenceLayout"(arg0: long, arg1: $MemoryLayout$$Type): $SequenceLayout
 "byteOffsetHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "varHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $VarHandle
 "sliceHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructLayout$$Type = ($StructLayout);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructLayout$$Original = $StructLayout;}
declare module "java.lang.foreign.ValueLayout$OfFloat" {
import {$StructLayout} from "java.lang.foreign.StructLayout"
import {$ByteOrder, $ByteOrder$$Type} from "java.nio.ByteOrder"
import {$Optional} from "java.util.Optional"
import {$MethodHandle} from "java.lang.invoke.MethodHandle"
import {$PaddingLayout} from "java.lang.foreign.PaddingLayout"
import {$UnionLayout} from "java.lang.foreign.UnionLayout"
import {$MemoryLayout, $MemoryLayout$$Type} from "java.lang.foreign.MemoryLayout"
import {$SequenceLayout} from "java.lang.foreign.SequenceLayout"
import {$MemoryLayout$PathElement$$Type} from "java.lang.foreign.MemoryLayout$PathElement"
import {$ValueLayout, $ValueLayout$$Interface} from "java.lang.foreign.ValueLayout"
import {$VarHandle} from "java.lang.invoke.VarHandle"
import {$Class} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ValueLayout$OfFloat$$Interface extends $ValueLayout$$Interface {
}

export class $ValueLayout$OfFloat implements $ValueLayout$OfFloat$$Interface {
 "withName"(arg0: StringJS): $MemoryLayout
 "withByteAlignment"(arg0: long): $MemoryLayout
 "withoutName"(): $MemoryLayout
 "withOrder"(arg0: $ByteOrder$$Type): $ValueLayout
 "carrier"(): $Class<(never)>
 "order"(): $ByteOrder
 "arrayElementVarHandle"(...arg0: (integer)[]): $VarHandle
 "byteSize"(): long
 "byteAlignment"(): long
 "name"(): $Optional<(StringJS)>
 "equals"(arg0: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
 "byteOffset"(...arg0: ($MemoryLayout$PathElement$$Type)[]): long
 "select"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MemoryLayout
static "paddingLayout"(arg0: long): $PaddingLayout
static "structLayout"(...arg0: ($MemoryLayout$$Type)[]): $StructLayout
static "unionLayout"(...arg0: ($MemoryLayout$$Type)[]): $UnionLayout
static "sequenceLayout"(arg0: $MemoryLayout$$Type): $SequenceLayout
static "sequenceLayout"(arg0: long, arg1: $MemoryLayout$$Type): $SequenceLayout
 "byteOffsetHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "varHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $VarHandle
 "sliceHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueLayout$OfFloat$$Type = ($ValueLayout$OfFloat);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ValueLayout$OfFloat$$Original = $ValueLayout$OfFloat;}
declare module "java.lang.foreign.MemorySegment$Scope" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $MemorySegment$Scope$$Interface {
get "alive"(): boolean
}

export class $MemorySegment$Scope implements $MemorySegment$Scope$$Interface {
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "isAlive"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MemorySegment$Scope$$Type = ($MemorySegment$Scope);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MemorySegment$Scope$$Original = $MemorySegment$Scope;}
declare module "java.lang.foreign.UnionLayout" {
import {$StructLayout} from "java.lang.foreign.StructLayout"
import {$MemoryLayout, $MemoryLayout$$Type} from "java.lang.foreign.MemoryLayout"
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$SequenceLayout} from "java.lang.foreign.SequenceLayout"
import {$MemoryLayout$PathElement$$Type} from "java.lang.foreign.MemoryLayout$PathElement"
import {$MethodHandle} from "java.lang.invoke.MethodHandle"
import {$VarHandle} from "java.lang.invoke.VarHandle"
import {$GroupLayout, $GroupLayout$$Interface} from "java.lang.foreign.GroupLayout"
import {$PaddingLayout} from "java.lang.foreign.PaddingLayout"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $UnionLayout$$Interface extends $GroupLayout$$Interface {
}

export class $UnionLayout implements $UnionLayout$$Interface {
 "withName"(arg0: StringJS): $GroupLayout
 "withByteAlignment"(arg0: long): $MemoryLayout
 "withoutName"(): $GroupLayout
 "memberLayouts"(): $List<($MemoryLayout)>
 "byteSize"(): long
 "byteAlignment"(): long
 "name"(): $Optional<(StringJS)>
 "equals"(arg0: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
 "byteOffset"(...arg0: ($MemoryLayout$PathElement$$Type)[]): long
 "select"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MemoryLayout
static "paddingLayout"(arg0: long): $PaddingLayout
static "structLayout"(...arg0: ($MemoryLayout$$Type)[]): $StructLayout
static "unionLayout"(...arg0: ($MemoryLayout$$Type)[]): $UnionLayout
static "sequenceLayout"(arg0: $MemoryLayout$$Type): $SequenceLayout
static "sequenceLayout"(arg0: long, arg1: $MemoryLayout$$Type): $SequenceLayout
 "byteOffsetHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "varHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $VarHandle
 "sliceHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnionLayout$$Type = ($UnionLayout);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UnionLayout$$Original = $UnionLayout;}
declare module "java.lang.foreign.ValueLayout$OfShort" {
import {$StructLayout} from "java.lang.foreign.StructLayout"
import {$ByteOrder, $ByteOrder$$Type} from "java.nio.ByteOrder"
import {$Optional} from "java.util.Optional"
import {$MethodHandle} from "java.lang.invoke.MethodHandle"
import {$PaddingLayout} from "java.lang.foreign.PaddingLayout"
import {$UnionLayout} from "java.lang.foreign.UnionLayout"
import {$MemoryLayout, $MemoryLayout$$Type} from "java.lang.foreign.MemoryLayout"
import {$SequenceLayout} from "java.lang.foreign.SequenceLayout"
import {$MemoryLayout$PathElement$$Type} from "java.lang.foreign.MemoryLayout$PathElement"
import {$ValueLayout, $ValueLayout$$Interface} from "java.lang.foreign.ValueLayout"
import {$VarHandle} from "java.lang.invoke.VarHandle"
import {$Class} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ValueLayout$OfShort$$Interface extends $ValueLayout$$Interface {
}

export class $ValueLayout$OfShort implements $ValueLayout$OfShort$$Interface {
 "withName"(arg0: StringJS): $MemoryLayout
 "withByteAlignment"(arg0: long): $MemoryLayout
 "withoutName"(): $MemoryLayout
 "withOrder"(arg0: $ByteOrder$$Type): $ValueLayout
 "carrier"(): $Class<(never)>
 "order"(): $ByteOrder
 "arrayElementVarHandle"(...arg0: (integer)[]): $VarHandle
 "byteSize"(): long
 "byteAlignment"(): long
 "name"(): $Optional<(StringJS)>
 "equals"(arg0: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
 "byteOffset"(...arg0: ($MemoryLayout$PathElement$$Type)[]): long
 "select"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MemoryLayout
static "paddingLayout"(arg0: long): $PaddingLayout
static "structLayout"(...arg0: ($MemoryLayout$$Type)[]): $StructLayout
static "unionLayout"(...arg0: ($MemoryLayout$$Type)[]): $UnionLayout
static "sequenceLayout"(arg0: $MemoryLayout$$Type): $SequenceLayout
static "sequenceLayout"(arg0: long, arg1: $MemoryLayout$$Type): $SequenceLayout
 "byteOffsetHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "varHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $VarHandle
 "sliceHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueLayout$OfShort$$Type = ($ValueLayout$OfShort);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ValueLayout$OfShort$$Original = $ValueLayout$OfShort;}
declare module "java.lang.foreign.Arena" {
import {$ValueLayout$OfLong$$Type} from "java.lang.foreign.ValueLayout$OfLong"
import {$ValueLayout$OfDouble$$Type} from "java.lang.foreign.ValueLayout$OfDouble"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$ValueLayout$OfInt$$Type} from "java.lang.foreign.ValueLayout$OfInt"
import {$ValueLayout$OfShort$$Type} from "java.lang.foreign.ValueLayout$OfShort"
import {$MemorySegment, $MemorySegment$$Type} from "java.lang.foreign.MemorySegment"
import {$ValueLayout$OfByte$$Type} from "java.lang.foreign.ValueLayout$OfByte"
import {$AddressLayout$$Type} from "java.lang.foreign.AddressLayout"
import {$MemoryLayout$$Type} from "java.lang.foreign.MemoryLayout"
import {$ValueLayout$OfFloat$$Type} from "java.lang.foreign.ValueLayout$OfFloat"
import {$SegmentAllocator, $SegmentAllocator$$Interface} from "java.lang.foreign.SegmentAllocator"
import {$MemorySegment$Scope} from "java.lang.foreign.MemorySegment$Scope"
import {$ValueLayout$OfChar$$Type} from "java.lang.foreign.ValueLayout$OfChar"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Arena$$Interface extends $SegmentAllocator$$Interface, $AutoCloseable$$Interface {
}

export class $Arena implements $Arena$$Interface {
 "scope"(): $MemorySegment$Scope
 "close"(): void
 "allocate"(arg0: long, arg1: long): $MemorySegment
static "global"(): $Arena
static "ofAuto"(): $Arena
static "ofConfined"(): $Arena
static "ofShared"(): $Arena
static "prefixAllocator"(arg0: $MemorySegment$$Type): $SegmentAllocator
 "allocate"(arg0: $AddressLayout$$Type, arg1: $MemorySegment$$Type): $MemorySegment
 "allocate"(arg0: $ValueLayout$OfDouble$$Type, arg1: double): $MemorySegment
 "allocate"(arg0: $ValueLayout$OfLong$$Type, arg1: long): $MemorySegment
 "allocate"(arg0: long): $MemorySegment
 "allocate"(arg0: $MemoryLayout$$Type): $MemorySegment
 "allocate"(arg0: $ValueLayout$OfByte$$Type, arg1: byte): $MemorySegment
 "allocate"(arg0: $ValueLayout$OfChar$$Type, arg1: character): $MemorySegment
 "allocate"(arg0: $ValueLayout$OfShort$$Type, arg1: short): $MemorySegment
 "allocate"(arg0: $ValueLayout$OfFloat$$Type, arg1: float): $MemorySegment
 "allocate"(arg0: $ValueLayout$OfInt$$Type, arg1: integer): $MemorySegment
 "allocateArray"(arg0: $ValueLayout$OfLong$$Type, ...arg1: (long)[]): $MemorySegment
 "allocateArray"(arg0: $ValueLayout$OfDouble$$Type, ...arg1: (double)[]): $MemorySegment
 "allocateArray"(arg0: $MemoryLayout$$Type, arg1: long): $MemorySegment
 "allocateArray"(arg0: $ValueLayout$OfByte$$Type, ...arg1: (byte)[]): $MemorySegment
 "allocateArray"(arg0: $ValueLayout$OfShort$$Type, ...arg1: (short)[]): $MemorySegment
 "allocateArray"(arg0: $ValueLayout$OfChar$$Type, ...arg1: (character)[]): $MemorySegment
 "allocateArray"(arg0: $ValueLayout$OfFloat$$Type, ...arg1: (float)[]): $MemorySegment
 "allocateArray"(arg0: $ValueLayout$OfInt$$Type, ...arg1: (integer)[]): $MemorySegment
 "allocateUtf8String"(arg0: StringJS): $MemorySegment
static "slicingAllocator"(arg0: $MemorySegment$$Type): $SegmentAllocator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Arena$$Type = ($Arena);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Arena$$Original = $Arena;}
declare module "java.lang.foreign.ValueLayout$OfChar" {
import {$StructLayout} from "java.lang.foreign.StructLayout"
import {$ByteOrder, $ByteOrder$$Type} from "java.nio.ByteOrder"
import {$Optional} from "java.util.Optional"
import {$MethodHandle} from "java.lang.invoke.MethodHandle"
import {$PaddingLayout} from "java.lang.foreign.PaddingLayout"
import {$UnionLayout} from "java.lang.foreign.UnionLayout"
import {$MemoryLayout, $MemoryLayout$$Type} from "java.lang.foreign.MemoryLayout"
import {$SequenceLayout} from "java.lang.foreign.SequenceLayout"
import {$MemoryLayout$PathElement$$Type} from "java.lang.foreign.MemoryLayout$PathElement"
import {$ValueLayout, $ValueLayout$$Interface} from "java.lang.foreign.ValueLayout"
import {$VarHandle} from "java.lang.invoke.VarHandle"
import {$Class} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ValueLayout$OfChar$$Interface extends $ValueLayout$$Interface {
}

export class $ValueLayout$OfChar implements $ValueLayout$OfChar$$Interface {
 "withName"(arg0: StringJS): $MemoryLayout
 "withByteAlignment"(arg0: long): $MemoryLayout
 "withoutName"(): $MemoryLayout
 "withOrder"(arg0: $ByteOrder$$Type): $ValueLayout
 "carrier"(): $Class<(never)>
 "order"(): $ByteOrder
 "arrayElementVarHandle"(...arg0: (integer)[]): $VarHandle
 "byteSize"(): long
 "byteAlignment"(): long
 "name"(): $Optional<(StringJS)>
 "equals"(arg0: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
 "byteOffset"(...arg0: ($MemoryLayout$PathElement$$Type)[]): long
 "select"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MemoryLayout
static "paddingLayout"(arg0: long): $PaddingLayout
static "structLayout"(...arg0: ($MemoryLayout$$Type)[]): $StructLayout
static "unionLayout"(...arg0: ($MemoryLayout$$Type)[]): $UnionLayout
static "sequenceLayout"(arg0: $MemoryLayout$$Type): $SequenceLayout
static "sequenceLayout"(arg0: long, arg1: $MemoryLayout$$Type): $SequenceLayout
 "byteOffsetHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "varHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $VarHandle
 "sliceHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueLayout$OfChar$$Type = ($ValueLayout$OfChar);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ValueLayout$OfChar$$Original = $ValueLayout$OfChar;}
declare module "java.lang.foreign.MemoryLayout" {
import {$StructLayout} from "java.lang.foreign.StructLayout"
import {$Optional} from "java.util.Optional"
import {$SequenceLayout} from "java.lang.foreign.SequenceLayout"
import {$MemoryLayout$PathElement$$Type} from "java.lang.foreign.MemoryLayout$PathElement"
import {$VarHandle} from "java.lang.invoke.VarHandle"
import {$MethodHandle} from "java.lang.invoke.MethodHandle"
import {$PaddingLayout} from "java.lang.foreign.PaddingLayout"
import {$UnionLayout} from "java.lang.foreign.UnionLayout"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $MemoryLayout$$Interface {
}

export class $MemoryLayout implements $MemoryLayout$$Interface {
 "byteSize"(): long
 "byteAlignment"(): long
 "name"(): $Optional<(StringJS)>
 "equals"(arg0: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
 "byteOffset"(...arg0: ($MemoryLayout$PathElement$$Type)[]): long
 "withName"(arg0: StringJS): $MemoryLayout
 "select"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MemoryLayout
static "paddingLayout"(arg0: long): $PaddingLayout
static "structLayout"(...arg0: ($MemoryLayout$$Type)[]): $StructLayout
static "unionLayout"(...arg0: ($MemoryLayout$$Type)[]): $UnionLayout
 "withByteAlignment"(arg0: long): $MemoryLayout
 "withoutName"(): $MemoryLayout
static "sequenceLayout"(arg0: $MemoryLayout$$Type): $SequenceLayout
static "sequenceLayout"(arg0: long, arg1: $MemoryLayout$$Type): $SequenceLayout
 "byteOffsetHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "varHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $VarHandle
 "sliceHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MemoryLayout$$Type = ($MemoryLayout);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MemoryLayout$$Original = $MemoryLayout;}
declare module "java.lang.foreign.ValueLayout$OfByte" {
import {$StructLayout} from "java.lang.foreign.StructLayout"
import {$ByteOrder, $ByteOrder$$Type} from "java.nio.ByteOrder"
import {$Optional} from "java.util.Optional"
import {$MethodHandle} from "java.lang.invoke.MethodHandle"
import {$PaddingLayout} from "java.lang.foreign.PaddingLayout"
import {$UnionLayout} from "java.lang.foreign.UnionLayout"
import {$MemoryLayout, $MemoryLayout$$Type} from "java.lang.foreign.MemoryLayout"
import {$SequenceLayout} from "java.lang.foreign.SequenceLayout"
import {$MemoryLayout$PathElement$$Type} from "java.lang.foreign.MemoryLayout$PathElement"
import {$ValueLayout, $ValueLayout$$Interface} from "java.lang.foreign.ValueLayout"
import {$VarHandle} from "java.lang.invoke.VarHandle"
import {$Class} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ValueLayout$OfByte$$Interface extends $ValueLayout$$Interface {
}

export class $ValueLayout$OfByte implements $ValueLayout$OfByte$$Interface {
 "withName"(arg0: StringJS): $MemoryLayout
 "withByteAlignment"(arg0: long): $MemoryLayout
 "withoutName"(): $MemoryLayout
 "withOrder"(arg0: $ByteOrder$$Type): $ValueLayout
 "carrier"(): $Class<(never)>
 "order"(): $ByteOrder
 "arrayElementVarHandle"(...arg0: (integer)[]): $VarHandle
 "byteSize"(): long
 "byteAlignment"(): long
 "name"(): $Optional<(StringJS)>
 "equals"(arg0: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
 "byteOffset"(...arg0: ($MemoryLayout$PathElement$$Type)[]): long
 "select"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MemoryLayout
static "paddingLayout"(arg0: long): $PaddingLayout
static "structLayout"(...arg0: ($MemoryLayout$$Type)[]): $StructLayout
static "unionLayout"(...arg0: ($MemoryLayout$$Type)[]): $UnionLayout
static "sequenceLayout"(arg0: $MemoryLayout$$Type): $SequenceLayout
static "sequenceLayout"(arg0: long, arg1: $MemoryLayout$$Type): $SequenceLayout
 "byteOffsetHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "varHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $VarHandle
 "sliceHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueLayout$OfByte$$Type = ($ValueLayout$OfByte);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ValueLayout$OfByte$$Original = $ValueLayout$OfByte;}
declare module "java.lang.foreign.ValueLayout$OfInt" {
import {$StructLayout} from "java.lang.foreign.StructLayout"
import {$ByteOrder, $ByteOrder$$Type} from "java.nio.ByteOrder"
import {$Optional} from "java.util.Optional"
import {$MethodHandle} from "java.lang.invoke.MethodHandle"
import {$PaddingLayout} from "java.lang.foreign.PaddingLayout"
import {$UnionLayout} from "java.lang.foreign.UnionLayout"
import {$MemoryLayout, $MemoryLayout$$Type} from "java.lang.foreign.MemoryLayout"
import {$SequenceLayout} from "java.lang.foreign.SequenceLayout"
import {$MemoryLayout$PathElement$$Type} from "java.lang.foreign.MemoryLayout$PathElement"
import {$ValueLayout, $ValueLayout$$Interface} from "java.lang.foreign.ValueLayout"
import {$VarHandle} from "java.lang.invoke.VarHandle"
import {$Class} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ValueLayout$OfInt$$Interface extends $ValueLayout$$Interface {
}

export class $ValueLayout$OfInt implements $ValueLayout$OfInt$$Interface {
 "withName"(arg0: StringJS): $MemoryLayout
 "withByteAlignment"(arg0: long): $MemoryLayout
 "withoutName"(): $MemoryLayout
 "withOrder"(arg0: $ByteOrder$$Type): $ValueLayout
 "carrier"(): $Class<(never)>
 "order"(): $ByteOrder
 "arrayElementVarHandle"(...arg0: (integer)[]): $VarHandle
 "byteSize"(): long
 "byteAlignment"(): long
 "name"(): $Optional<(StringJS)>
 "equals"(arg0: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
 "byteOffset"(...arg0: ($MemoryLayout$PathElement$$Type)[]): long
 "select"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MemoryLayout
static "paddingLayout"(arg0: long): $PaddingLayout
static "structLayout"(...arg0: ($MemoryLayout$$Type)[]): $StructLayout
static "unionLayout"(...arg0: ($MemoryLayout$$Type)[]): $UnionLayout
static "sequenceLayout"(arg0: $MemoryLayout$$Type): $SequenceLayout
static "sequenceLayout"(arg0: long, arg1: $MemoryLayout$$Type): $SequenceLayout
 "byteOffsetHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "varHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $VarHandle
 "sliceHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueLayout$OfInt$$Type = ($ValueLayout$OfInt);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ValueLayout$OfInt$$Original = $ValueLayout$OfInt;}
declare module "java.lang.foreign.PaddingLayout" {
import {$StructLayout} from "java.lang.foreign.StructLayout"
import {$Optional} from "java.util.Optional"
import {$MemoryLayout, $MemoryLayout$$Type, $MemoryLayout$$Interface} from "java.lang.foreign.MemoryLayout"
import {$SequenceLayout} from "java.lang.foreign.SequenceLayout"
import {$MemoryLayout$PathElement$$Type} from "java.lang.foreign.MemoryLayout$PathElement"
import {$VarHandle} from "java.lang.invoke.VarHandle"
import {$MethodHandle} from "java.lang.invoke.MethodHandle"
import {$UnionLayout} from "java.lang.foreign.UnionLayout"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $PaddingLayout$$Interface extends $MemoryLayout$$Interface {
}

export class $PaddingLayout implements $PaddingLayout$$Interface {
 "withName"(arg0: StringJS): $MemoryLayout
 "withByteAlignment"(arg0: long): $MemoryLayout
 "withoutName"(): $MemoryLayout
 "byteSize"(): long
 "byteAlignment"(): long
 "name"(): $Optional<(StringJS)>
 "equals"(arg0: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
 "byteOffset"(...arg0: ($MemoryLayout$PathElement$$Type)[]): long
 "select"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MemoryLayout
static "paddingLayout"(arg0: long): $PaddingLayout
static "structLayout"(...arg0: ($MemoryLayout$$Type)[]): $StructLayout
static "unionLayout"(...arg0: ($MemoryLayout$$Type)[]): $UnionLayout
static "sequenceLayout"(arg0: $MemoryLayout$$Type): $SequenceLayout
static "sequenceLayout"(arg0: long, arg1: $MemoryLayout$$Type): $SequenceLayout
 "byteOffsetHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "varHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $VarHandle
 "sliceHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaddingLayout$$Type = ($PaddingLayout);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PaddingLayout$$Original = $PaddingLayout;}
declare module "java.lang.foreign.AddressLayout" {
import {$StructLayout} from "java.lang.foreign.StructLayout"
import {$ByteOrder, $ByteOrder$$Type} from "java.nio.ByteOrder"
import {$Optional} from "java.util.Optional"
import {$MethodHandle} from "java.lang.invoke.MethodHandle"
import {$PaddingLayout} from "java.lang.foreign.PaddingLayout"
import {$UnionLayout} from "java.lang.foreign.UnionLayout"
import {$MemoryLayout, $MemoryLayout$$Type} from "java.lang.foreign.MemoryLayout"
import {$SequenceLayout} from "java.lang.foreign.SequenceLayout"
import {$MemoryLayout$PathElement$$Type} from "java.lang.foreign.MemoryLayout$PathElement"
import {$ValueLayout, $ValueLayout$$Interface} from "java.lang.foreign.ValueLayout"
import {$VarHandle} from "java.lang.invoke.VarHandle"
import {$Class} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $AddressLayout$$Interface extends $ValueLayout$$Interface {
}

export class $AddressLayout implements $AddressLayout$$Interface {
 "withName"(arg0: StringJS): $ValueLayout
 "withByteAlignment"(arg0: long): $AddressLayout
 "withoutName"(): $ValueLayout
 "withOrder"(arg0: $ByteOrder$$Type): $AddressLayout
 "withTargetLayout"(arg0: $MemoryLayout$$Type): $AddressLayout
 "withoutTargetLayout"(): $AddressLayout
 "targetLayout"(): $Optional<($MemoryLayout)>
 "carrier"(): $Class<(never)>
 "order"(): $ByteOrder
 "arrayElementVarHandle"(...arg0: (integer)[]): $VarHandle
 "byteSize"(): long
 "byteAlignment"(): long
 "name"(): $Optional<(StringJS)>
 "equals"(arg0: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
 "byteOffset"(...arg0: ($MemoryLayout$PathElement$$Type)[]): long
 "select"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MemoryLayout
static "paddingLayout"(arg0: long): $PaddingLayout
static "structLayout"(...arg0: ($MemoryLayout$$Type)[]): $StructLayout
static "unionLayout"(...arg0: ($MemoryLayout$$Type)[]): $UnionLayout
static "sequenceLayout"(arg0: $MemoryLayout$$Type): $SequenceLayout
static "sequenceLayout"(arg0: long, arg1: $MemoryLayout$$Type): $SequenceLayout
 "byteOffsetHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "varHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $VarHandle
 "sliceHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddressLayout$$Type = ($AddressLayout);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AddressLayout$$Original = $AddressLayout;}
declare module "java.lang.foreign.MemoryLayout$PathElement" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $MemoryLayout$PathElement$$Interface {
}

export class $MemoryLayout$PathElement implements $MemoryLayout$PathElement$$Interface {
static "sequenceElement"(arg0: long): $MemoryLayout$PathElement
static "sequenceElement"(): $MemoryLayout$PathElement
static "sequenceElement"(arg0: long, arg1: long): $MemoryLayout$PathElement
static "groupElement"(arg0: StringJS): $MemoryLayout$PathElement
static "groupElement"(arg0: long): $MemoryLayout$PathElement
static "dereferenceElement"(): $MemoryLayout$PathElement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MemoryLayout$PathElement$$Type = ($MemoryLayout$PathElement);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MemoryLayout$PathElement$$Original = $MemoryLayout$PathElement;}
declare module "java.lang.foreign.ValueLayout$OfLong" {
import {$StructLayout} from "java.lang.foreign.StructLayout"
import {$ByteOrder, $ByteOrder$$Type} from "java.nio.ByteOrder"
import {$Optional} from "java.util.Optional"
import {$MethodHandle} from "java.lang.invoke.MethodHandle"
import {$PaddingLayout} from "java.lang.foreign.PaddingLayout"
import {$UnionLayout} from "java.lang.foreign.UnionLayout"
import {$MemoryLayout, $MemoryLayout$$Type} from "java.lang.foreign.MemoryLayout"
import {$SequenceLayout} from "java.lang.foreign.SequenceLayout"
import {$MemoryLayout$PathElement$$Type} from "java.lang.foreign.MemoryLayout$PathElement"
import {$ValueLayout, $ValueLayout$$Interface} from "java.lang.foreign.ValueLayout"
import {$VarHandle} from "java.lang.invoke.VarHandle"
import {$Class} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ValueLayout$OfLong$$Interface extends $ValueLayout$$Interface {
}

export class $ValueLayout$OfLong implements $ValueLayout$OfLong$$Interface {
 "withName"(arg0: StringJS): $MemoryLayout
 "withByteAlignment"(arg0: long): $MemoryLayout
 "withoutName"(): $MemoryLayout
 "withOrder"(arg0: $ByteOrder$$Type): $ValueLayout
 "carrier"(): $Class<(never)>
 "order"(): $ByteOrder
 "arrayElementVarHandle"(...arg0: (integer)[]): $VarHandle
 "byteSize"(): long
 "byteAlignment"(): long
 "name"(): $Optional<(StringJS)>
 "equals"(arg0: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
 "byteOffset"(...arg0: ($MemoryLayout$PathElement$$Type)[]): long
 "select"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MemoryLayout
static "paddingLayout"(arg0: long): $PaddingLayout
static "structLayout"(...arg0: ($MemoryLayout$$Type)[]): $StructLayout
static "unionLayout"(...arg0: ($MemoryLayout$$Type)[]): $UnionLayout
static "sequenceLayout"(arg0: $MemoryLayout$$Type): $SequenceLayout
static "sequenceLayout"(arg0: long, arg1: $MemoryLayout$$Type): $SequenceLayout
 "byteOffsetHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "varHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $VarHandle
 "sliceHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueLayout$OfLong$$Type = ($ValueLayout$OfLong);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ValueLayout$OfLong$$Original = $ValueLayout$OfLong;}
declare module "java.lang.foreign.ValueLayout$OfDouble" {
import {$StructLayout} from "java.lang.foreign.StructLayout"
import {$ByteOrder, $ByteOrder$$Type} from "java.nio.ByteOrder"
import {$Optional} from "java.util.Optional"
import {$MethodHandle} from "java.lang.invoke.MethodHandle"
import {$PaddingLayout} from "java.lang.foreign.PaddingLayout"
import {$UnionLayout} from "java.lang.foreign.UnionLayout"
import {$MemoryLayout, $MemoryLayout$$Type} from "java.lang.foreign.MemoryLayout"
import {$SequenceLayout} from "java.lang.foreign.SequenceLayout"
import {$MemoryLayout$PathElement$$Type} from "java.lang.foreign.MemoryLayout$PathElement"
import {$ValueLayout, $ValueLayout$$Interface} from "java.lang.foreign.ValueLayout"
import {$VarHandle} from "java.lang.invoke.VarHandle"
import {$Class} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ValueLayout$OfDouble$$Interface extends $ValueLayout$$Interface {
}

export class $ValueLayout$OfDouble implements $ValueLayout$OfDouble$$Interface {
 "withName"(arg0: StringJS): $MemoryLayout
 "withByteAlignment"(arg0: long): $MemoryLayout
 "withoutName"(): $MemoryLayout
 "withOrder"(arg0: $ByteOrder$$Type): $ValueLayout
 "carrier"(): $Class<(never)>
 "order"(): $ByteOrder
 "arrayElementVarHandle"(...arg0: (integer)[]): $VarHandle
 "byteSize"(): long
 "byteAlignment"(): long
 "name"(): $Optional<(StringJS)>
 "equals"(arg0: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
 "byteOffset"(...arg0: ($MemoryLayout$PathElement$$Type)[]): long
 "select"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MemoryLayout
static "paddingLayout"(arg0: long): $PaddingLayout
static "structLayout"(...arg0: ($MemoryLayout$$Type)[]): $StructLayout
static "unionLayout"(...arg0: ($MemoryLayout$$Type)[]): $UnionLayout
static "sequenceLayout"(arg0: $MemoryLayout$$Type): $SequenceLayout
static "sequenceLayout"(arg0: long, arg1: $MemoryLayout$$Type): $SequenceLayout
 "byteOffsetHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "varHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $VarHandle
 "sliceHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueLayout$OfDouble$$Type = ($ValueLayout$OfDouble);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ValueLayout$OfDouble$$Original = $ValueLayout$OfDouble;}
declare module "java.lang.foreign.MemorySegment" {
import {$ValueLayout$OfLong$$Type} from "java.lang.foreign.ValueLayout$OfLong"
import {$ValueLayout$OfDouble$$Type} from "java.lang.foreign.ValueLayout$OfDouble"
import {$Optional} from "java.util.Optional"
import {$Spliterator} from "java.util.Spliterator"
import {$ValueLayout$OfInt$$Type} from "java.lang.foreign.ValueLayout$OfInt"
import {$Arena$$Type} from "java.lang.foreign.Arena"
import {$Thread$$Type} from "java.lang.Thread"
import {$ValueLayout$OfBoolean$$Type} from "java.lang.foreign.ValueLayout$OfBoolean"
import {$Buffer$$Type} from "java.nio.Buffer"
import {$ValueLayout$OfShort$$Type} from "java.lang.foreign.ValueLayout$OfShort"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ValueLayout$OfByte$$Type} from "java.lang.foreign.ValueLayout$OfByte"
import {$AddressLayout$$Type} from "java.lang.foreign.AddressLayout"
import {$MemoryLayout$$Type} from "java.lang.foreign.MemoryLayout"
import {$ValueLayout$$Type} from "java.lang.foreign.ValueLayout"
import {$Stream} from "java.util.stream.Stream"
import {$ValueLayout$OfFloat$$Type} from "java.lang.foreign.ValueLayout$OfFloat"
import {$ByteBuffer} from "java.nio.ByteBuffer"
import {$MemorySegment$Scope} from "java.lang.foreign.MemorySegment$Scope"
import {$ValueLayout$OfChar$$Type} from "java.lang.foreign.ValueLayout$OfChar"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $MemorySegment$$Interface {
get "mapped"(): boolean
get "native"(): boolean
get "readOnly"(): boolean
get "loaded"(): boolean
}

export class $MemorySegment implements $MemorySegment$$Interface {
static readonly "NULL": $MemorySegment

 "byteSize"(): long
 "isAccessibleBy"(arg0: $Thread$$Type): boolean
 "asSlice"(arg0: long, arg1: long): $MemorySegment
 "asSlice"(arg0: long): $MemorySegment
 "asSlice"(arg0: long, arg1: long, arg2: long): $MemorySegment
 "asSlice"(arg0: long, arg1: $MemoryLayout$$Type): $MemorySegment
static "ofBuffer"(arg0: $Buffer$$Type): $MemorySegment
 "heapBase"(): $Optional<(never)>
 "reinterpret"(arg0: long, arg1: $Arena$$Type, arg2: $Consumer$$Type<($MemorySegment)>): $MemorySegment
 "reinterpret"(arg0: long): $MemorySegment
 "reinterpret"(arg0: $Arena$$Type, arg1: $Consumer$$Type<($MemorySegment)>): $MemorySegment
 "asReadOnly"(): $MemorySegment
 "isMapped"(): boolean
 "asOverlappingSlice"(arg0: $MemorySegment$$Type): $Optional<($MemorySegment)>
 "segmentOffset"(arg0: $MemorySegment$$Type): long
 "asByteBuffer"(): $ByteBuffer
 "getUtf8String"(arg0: long): StringJS
 "setUtf8String"(arg0: long, arg1: StringJS): void
static "ofArray"(arg0: (byte)[]): $MemorySegment
static "ofArray"(arg0: (long)[]): $MemorySegment
static "ofArray"(arg0: (double)[]): $MemorySegment
static "ofArray"(arg0: (short)[]): $MemorySegment
static "ofArray"(arg0: (character)[]): $MemorySegment
static "ofArray"(arg0: (integer)[]): $MemorySegment
static "ofArray"(arg0: (float)[]): $MemorySegment
static "ofAddress"(arg0: long): $MemorySegment
 "getAtIndex"(arg0: $ValueLayout$OfByte$$Type, arg1: long): byte
 "getAtIndex"(arg0: $ValueLayout$OfBoolean$$Type, arg1: long): boolean
 "getAtIndex"(arg0: $ValueLayout$OfChar$$Type, arg1: long): character
 "getAtIndex"(arg0: $ValueLayout$OfDouble$$Type, arg1: long): double
 "getAtIndex"(arg0: $ValueLayout$OfLong$$Type, arg1: long): long
 "getAtIndex"(arg0: $ValueLayout$OfFloat$$Type, arg1: long): float
 "getAtIndex"(arg0: $ValueLayout$OfInt$$Type, arg1: long): integer
 "getAtIndex"(arg0: $ValueLayout$OfShort$$Type, arg1: long): short
 "getAtIndex"(arg0: $AddressLayout$$Type, arg1: long): $MemorySegment
 "setAtIndex"(arg0: $AddressLayout$$Type, arg1: long, arg2: $MemorySegment$$Type): void
 "setAtIndex"(arg0: $ValueLayout$OfLong$$Type, arg1: long, arg2: long): void
 "setAtIndex"(arg0: $ValueLayout$OfShort$$Type, arg1: long, arg2: short): void
 "setAtIndex"(arg0: $ValueLayout$OfDouble$$Type, arg1: long, arg2: double): void
 "setAtIndex"(arg0: $ValueLayout$OfBoolean$$Type, arg1: long, arg2: boolean): void
 "setAtIndex"(arg0: $ValueLayout$OfByte$$Type, arg1: long, arg2: byte): void
 "setAtIndex"(arg0: $ValueLayout$OfChar$$Type, arg1: long, arg2: character): void
 "setAtIndex"(arg0: $ValueLayout$OfInt$$Type, arg1: long, arg2: integer): void
 "setAtIndex"(arg0: $ValueLayout$OfFloat$$Type, arg1: long, arg2: float): void
 "scope"(): $MemorySegment$Scope
 "get"(arg0: $ValueLayout$OfFloat$$Type, arg1: long): float
 "get"(arg0: $ValueLayout$OfLong$$Type, arg1: long): long
 "get"(arg0: $ValueLayout$OfChar$$Type, arg1: long): character
 "get"(arg0: $ValueLayout$OfShort$$Type, arg1: long): short
 "get"(arg0: $AddressLayout$$Type, arg1: long): $MemorySegment
 "get"(arg0: $ValueLayout$OfInt$$Type, arg1: long): integer
 "get"(arg0: $ValueLayout$OfDouble$$Type, arg1: long): double
 "get"(arg0: $ValueLayout$OfByte$$Type, arg1: long): byte
 "get"(arg0: $ValueLayout$OfBoolean$$Type, arg1: long): boolean
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "load"(): void
 "mismatch"(arg0: $MemorySegment$$Type): long
static "mismatch"(arg0: $MemorySegment$$Type, arg1: long, arg2: long, arg3: $MemorySegment$$Type, arg4: long, arg5: long): long
 "toArray"(arg0: $ValueLayout$OfLong$$Type): (long)[]
 "toArray"(arg0: $ValueLayout$OfFloat$$Type): (float)[]
 "toArray"(arg0: $ValueLayout$OfByte$$Type): (byte)[]
 "toArray"(arg0: $ValueLayout$OfShort$$Type): (short)[]
 "toArray"(arg0: $ValueLayout$OfChar$$Type): (character)[]
 "toArray"(arg0: $ValueLayout$OfInt$$Type): (integer)[]
 "toArray"(arg0: $ValueLayout$OfDouble$$Type): (double)[]
 "fill"(arg0: byte): $MemorySegment
 "elements"(arg0: $MemoryLayout$$Type): $Stream<($MemorySegment)>
 "spliterator"(arg0: $MemoryLayout$$Type): $Spliterator<($MemorySegment)>
 "set"(arg0: $ValueLayout$OfChar$$Type, arg1: long, arg2: character): void
 "set"(arg0: $ValueLayout$OfBoolean$$Type, arg1: long, arg2: boolean): void
 "set"(arg0: $AddressLayout$$Type, arg1: long, arg2: $MemorySegment$$Type): void
 "set"(arg0: $ValueLayout$OfByte$$Type, arg1: long, arg2: byte): void
 "set"(arg0: $ValueLayout$OfInt$$Type, arg1: long, arg2: integer): void
 "set"(arg0: $ValueLayout$OfLong$$Type, arg1: long, arg2: long): void
 "set"(arg0: $ValueLayout$OfShort$$Type, arg1: long, arg2: short): void
 "set"(arg0: $ValueLayout$OfDouble$$Type, arg1: long, arg2: double): void
 "set"(arg0: $ValueLayout$OfFloat$$Type, arg1: long, arg2: float): void
static "copy"(arg0: $MemorySegment$$Type, arg1: long, arg2: $MemorySegment$$Type, arg3: long, arg4: long): void
static "copy"(arg0: $MemorySegment$$Type, arg1: $ValueLayout$$Type, arg2: long, arg3: $MemorySegment$$Type, arg4: $ValueLayout$$Type, arg5: long, arg6: long): void
static "copy"(arg0: any, arg1: integer, arg2: $MemorySegment$$Type, arg3: $ValueLayout$$Type, arg4: long, arg5: integer): void
static "copy"(arg0: $MemorySegment$$Type, arg1: $ValueLayout$$Type, arg2: long, arg3: any, arg4: integer, arg5: integer): void
 "isNative"(): boolean
 "address"(): long
 "isReadOnly"(): boolean
 "isLoaded"(): boolean
 "unload"(): void
 "force"(): void
 "copyFrom"(arg0: $MemorySegment$$Type): $MemorySegment
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MemorySegment$$Type = ($MemorySegment);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MemorySegment$$Original = $MemorySegment;}
declare module "java.lang.foreign.ValueLayout" {
import {$StructLayout} from "java.lang.foreign.StructLayout"
import {$ValueLayout$OfLong} from "java.lang.foreign.ValueLayout$OfLong"
import {$ValueLayout$OfDouble} from "java.lang.foreign.ValueLayout$OfDouble"
import {$ByteOrder, $ByteOrder$$Type} from "java.nio.ByteOrder"
import {$Optional} from "java.util.Optional"
import {$ValueLayout$OfInt} from "java.lang.foreign.ValueLayout$OfInt"
import {$ValueLayout$OfBoolean} from "java.lang.foreign.ValueLayout$OfBoolean"
import {$MethodHandle} from "java.lang.invoke.MethodHandle"
import {$ValueLayout$OfShort} from "java.lang.foreign.ValueLayout$OfShort"
import {$PaddingLayout} from "java.lang.foreign.PaddingLayout"
import {$UnionLayout} from "java.lang.foreign.UnionLayout"
import {$ValueLayout$OfByte} from "java.lang.foreign.ValueLayout$OfByte"
import {$AddressLayout} from "java.lang.foreign.AddressLayout"
import {$MemoryLayout, $MemoryLayout$$Type, $MemoryLayout$$Interface} from "java.lang.foreign.MemoryLayout"
import {$SequenceLayout} from "java.lang.foreign.SequenceLayout"
import {$MemoryLayout$PathElement$$Type} from "java.lang.foreign.MemoryLayout$PathElement"
import {$VarHandle} from "java.lang.invoke.VarHandle"
import {$Class} from "java.lang.Class"
import {$ValueLayout$OfFloat} from "java.lang.foreign.ValueLayout$OfFloat"
import {$ValueLayout$OfChar} from "java.lang.foreign.ValueLayout$OfChar"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ValueLayout$$Interface extends $MemoryLayout$$Interface {
}

export class $ValueLayout implements $ValueLayout$$Interface {
static readonly "JAVA_CHAR": $ValueLayout$OfChar
static readonly "ADDRESS_UNALIGNED": $AddressLayout
static readonly "JAVA_LONG_UNALIGNED": $ValueLayout$OfLong
static readonly "JAVA_BOOLEAN": $ValueLayout$OfBoolean
static readonly "JAVA_INT_UNALIGNED": $ValueLayout$OfInt
static readonly "JAVA_DOUBLE": $ValueLayout$OfDouble
static readonly "JAVA_LONG": $ValueLayout$OfLong
static readonly "JAVA_CHAR_UNALIGNED": $ValueLayout$OfChar
static readonly "JAVA_FLOAT": $ValueLayout$OfFloat
static readonly "JAVA_BYTE": $ValueLayout$OfByte
static readonly "ADDRESS": $AddressLayout
static readonly "JAVA_FLOAT_UNALIGNED": $ValueLayout$OfFloat
static readonly "JAVA_SHORT": $ValueLayout$OfShort
static readonly "JAVA_DOUBLE_UNALIGNED": $ValueLayout$OfDouble
static readonly "JAVA_SHORT_UNALIGNED": $ValueLayout$OfShort
static readonly "JAVA_INT": $ValueLayout$OfInt

 "carrier"(): $Class<(never)>
 "order"(): $ByteOrder
 "arrayElementVarHandle"(...arg0: (integer)[]): $VarHandle
 "withName"(arg0: StringJS): $MemoryLayout
 "withByteAlignment"(arg0: long): $MemoryLayout
 "withoutName"(): $MemoryLayout
 "withOrder"(arg0: $ByteOrder$$Type): $ValueLayout
 "byteSize"(): long
 "byteAlignment"(): long
 "name"(): $Optional<(StringJS)>
 "equals"(arg0: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
 "byteOffset"(...arg0: ($MemoryLayout$PathElement$$Type)[]): long
 "select"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MemoryLayout
static "paddingLayout"(arg0: long): $PaddingLayout
static "structLayout"(...arg0: ($MemoryLayout$$Type)[]): $StructLayout
static "unionLayout"(...arg0: ($MemoryLayout$$Type)[]): $UnionLayout
static "sequenceLayout"(arg0: $MemoryLayout$$Type): $SequenceLayout
static "sequenceLayout"(arg0: long, arg1: $MemoryLayout$$Type): $SequenceLayout
 "byteOffsetHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "varHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $VarHandle
 "sliceHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueLayout$$Type = ($ValueLayout);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ValueLayout$$Original = $ValueLayout;}
declare module "java.lang.foreign.SequenceLayout" {
import {$StructLayout} from "java.lang.foreign.StructLayout"
import {$Optional} from "java.util.Optional"
import {$MemoryLayout, $MemoryLayout$$Type, $MemoryLayout$$Interface} from "java.lang.foreign.MemoryLayout"
import {$MemoryLayout$PathElement$$Type} from "java.lang.foreign.MemoryLayout$PathElement"
import {$VarHandle} from "java.lang.invoke.VarHandle"
import {$MethodHandle} from "java.lang.invoke.MethodHandle"
import {$PaddingLayout} from "java.lang.foreign.PaddingLayout"
import {$UnionLayout} from "java.lang.foreign.UnionLayout"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $SequenceLayout$$Interface extends $MemoryLayout$$Interface {
}

export class $SequenceLayout implements $SequenceLayout$$Interface {
 "elementCount"(): long
 "flatten"(): $SequenceLayout
 "reshape"(...arg0: (long)[]): $SequenceLayout
 "withName"(arg0: StringJS): $MemoryLayout
 "elementLayout"(): $MemoryLayout
 "withByteAlignment"(arg0: long): $SequenceLayout
 "withoutName"(): $MemoryLayout
 "withElementCount"(arg0: long): $SequenceLayout
 "byteSize"(): long
 "byteAlignment"(): long
 "name"(): $Optional<(StringJS)>
 "equals"(arg0: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
 "byteOffset"(...arg0: ($MemoryLayout$PathElement$$Type)[]): long
 "select"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MemoryLayout
static "paddingLayout"(arg0: long): $PaddingLayout
static "structLayout"(...arg0: ($MemoryLayout$$Type)[]): $StructLayout
static "unionLayout"(...arg0: ($MemoryLayout$$Type)[]): $UnionLayout
static "sequenceLayout"(arg0: $MemoryLayout$$Type): $SequenceLayout
static "sequenceLayout"(arg0: long, arg1: $MemoryLayout$$Type): $SequenceLayout
 "byteOffsetHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
 "varHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $VarHandle
 "sliceHandle"(...arg0: ($MemoryLayout$PathElement$$Type)[]): $MethodHandle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SequenceLayout$$Type = ($SequenceLayout);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SequenceLayout$$Original = $SequenceLayout;}
