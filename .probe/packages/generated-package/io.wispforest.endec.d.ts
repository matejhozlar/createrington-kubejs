declare module "io.wispforest.endec.Serializer$Map" {
import {$Endable$$Interface} from "io.wispforest.endec.util.Endable"

export interface $Serializer$Map$$Interface<V> extends $Endable$$Interface {
}

export class $Serializer$Map<V> implements $Serializer$Map$$Interface {
 "entry"(arg0: StringJS, arg1: V): void
 "end"(): void
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Serializer$Map$$Type<V> = ($Serializer$Map<(V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Serializer$Map$$Original<V> = $Serializer$Map<(V)>;}
declare module "io.wispforest.endec.SerializationAttribute" {
import {$SerializationAttribute$WithValue} from "io.wispforest.endec.SerializationAttribute$WithValue"
import {$SerializationAttribute$Marker} from "io.wispforest.endec.SerializationAttribute$Marker"

export class $SerializationAttribute {
readonly "name": StringJS

public static "marker"(arg0: StringJS): $SerializationAttribute$Marker
public static "withValue"<T>(arg0: StringJS): $SerializationAttribute$WithValue<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SerializationAttribute$$Type = ($SerializationAttribute);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SerializationAttribute$$Original = $SerializationAttribute;}
declare module "io.wispforest.endec.Endec$DecoderWithError" {
import {$Exception, $Exception$$Type} from "java.lang.Exception"
import {$SerializationContext, $SerializationContext$$Type} from "io.wispforest.endec.SerializationContext"
import {$Deserializer, $Deserializer$$Type} from "io.wispforest.endec.Deserializer"

export interface $Endec$DecoderWithError$$Interface<T> {

(arg0: $SerializationContext, arg1: $Deserializer<(never)>, arg2: $Exception): T
}

export class $Endec$DecoderWithError<T> implements $Endec$DecoderWithError$$Interface {
 "decode"(arg0: $SerializationContext$$Type, arg1: $Deserializer$$Type<(never)>, arg2: $Exception$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Endec$DecoderWithError$$Type<T> = ((arg0: $SerializationContext, arg1: $Deserializer<(never)>, arg2: $Exception) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Endec$DecoderWithError$$Original<T> = $Endec$DecoderWithError<(T)>;}
declare module "io.wispforest.endec.Serializer$Sequence" {
import {$Endable$$Interface} from "io.wispforest.endec.util.Endable"

export interface $Serializer$Sequence$$Interface<E> extends $Endable$$Interface {
}

export class $Serializer$Sequence<E> implements $Serializer$Sequence$$Interface {
 "element"(arg0: E): void
 "end"(): void
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Serializer$Sequence$$Type<E> = ($Serializer$Sequence<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Serializer$Sequence$$Original<E> = $Serializer$Sequence<(E)>;}
declare module "io.wispforest.endec.Serializer" {
import {$Endec$$Type} from "io.wispforest.endec.Endec"
import {$Serializer$Sequence} from "io.wispforest.endec.Serializer$Sequence"
import {$Optional$$Type} from "java.util.Optional"
import {$SerializationContext, $SerializationContext$$Type} from "io.wispforest.endec.SerializationContext"
import {$Serializer$Map} from "io.wispforest.endec.Serializer$Map"
import {$Serializer$Struct} from "io.wispforest.endec.Serializer$Struct"

export interface $Serializer$$Interface<T> {
set "upContext"(value: $SerializationContext$$Type)
}

export class $Serializer<T> implements $Serializer$$Interface {
 "map"<V>(arg0: $SerializationContext$$Type, arg1: $Endec$$Type<(V)>, arg2: integer): $Serializer$Map<(V)>
 "result"(): T
 "writeInt"(arg0: $SerializationContext$$Type, arg1: integer): void
 "writeBytes"(arg0: $SerializationContext$$Type, arg1: (byte)[]): void
 "writeFloat"(arg0: $SerializationContext$$Type, arg1: float): void
 "sequence"<E>(arg0: $SerializationContext$$Type, arg1: $Endec$$Type<(E)>, arg2: integer): $Serializer$Sequence<(E)>
 "writeBoolean"(arg0: $SerializationContext$$Type, arg1: boolean): void
 "writeByte"(arg0: $SerializationContext$$Type, arg1: byte): void
 "writeShort"(arg0: $SerializationContext$$Type, arg1: short): void
 "writeLong"(arg0: $SerializationContext$$Type, arg1: long): void
 "writeDouble"(arg0: $SerializationContext$$Type, arg1: double): void
 "writeString"(arg0: $SerializationContext$$Type, arg1: StringJS): void
 "setupContext"(arg0: $SerializationContext$$Type): $SerializationContext
 "writeOptional"<V>(arg0: $SerializationContext$$Type, arg1: $Endec$$Type<(V)>, arg2: (V)?): void
 "writeVarInt"(arg0: $SerializationContext$$Type, arg1: integer): void
 "writeVarLong"(arg0: $SerializationContext$$Type, arg1: long): void
 "struct"(): $Serializer$Struct
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Serializer$$Type<T> = ($Serializer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Serializer$$Original<T> = $Serializer<(T)>;}
declare module "io.wispforest.endec.Deserializer$Struct" {
import {$Endec$$Type} from "io.wispforest.endec.Endec"
import {$SerializationContext$$Type} from "io.wispforest.endec.SerializationContext"

export interface $Deserializer$Struct$$Interface {
}

export class $Deserializer$Struct implements $Deserializer$Struct$$Interface {
 "field"<F>(arg0: StringJS, arg1: $SerializationContext$$Type, arg2: $Endec$$Type<(F)>): F
 "field"<F>(arg0: StringJS, arg1: $SerializationContext$$Type, arg2: $Endec$$Type<(F)>, arg3: F): F
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Deserializer$Struct$$Type = ($Deserializer$Struct);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Deserializer$Struct$$Original = $Deserializer$Struct;}
declare module "io.wispforest.endec.SerializationAttribute$Instance" {
import {$SerializationAttribute} from "io.wispforest.endec.SerializationAttribute"

export interface $SerializationAttribute$Instance$$Interface {
}

export class $SerializationAttribute$Instance implements $SerializationAttribute$Instance$$Interface {
 "value"(): any
 "attribute"(): $SerializationAttribute
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SerializationAttribute$Instance$$Type = ($SerializationAttribute$Instance);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SerializationAttribute$Instance$$Original = $SerializationAttribute$Instance;}
declare module "io.wispforest.endec.Endec$Encoder" {
import {$Serializer, $Serializer$$Type} from "io.wispforest.endec.Serializer"
import {$SerializationContext, $SerializationContext$$Type} from "io.wispforest.endec.SerializationContext"

export interface $Endec$Encoder$$Interface<T> {

(arg0: $SerializationContext, arg1: $Serializer<(never)>, arg2: T): void
}

export class $Endec$Encoder<T> implements $Endec$Encoder$$Interface {
 "encode"(arg0: $SerializationContext$$Type, arg1: $Serializer$$Type<(never)>, arg2: T): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Endec$Encoder$$Type<T> = ((arg0: $SerializationContext, arg1: $Serializer<(never)>, arg2: T) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Endec$Encoder$$Original<T> = $Endec$Encoder<(T)>;}
declare module "io.wispforest.endec.StructEndec" {
import {$Endec, $Endec$$Type, $Endec$$Interface} from "io.wispforest.endec.Endec"
import {$Endec$Decoder$$Type} from "io.wispforest.endec.Endec$Decoder"
import {$SerializationAttribute$$Type} from "io.wispforest.endec.SerializationAttribute"
import {$Map} from "java.util.Map"
import {$Optional} from "java.util.Optional"
import {$Enum} from "java.lang.Enum"
import {$List} from "java.util.List"
import {$SerializationContext$$Type} from "io.wispforest.endec.SerializationContext"
import {$StructField} from "io.wispforest.endec.impl.StructField"
import {$Deserializer$$Type} from "io.wispforest.endec.Deserializer"
import {$Serializer$Struct$$Type} from "io.wispforest.endec.Serializer$Struct"
import {$AttributeEndecBuilder} from "io.wispforest.endec.impl.AttributeEndecBuilder"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$Deserializer$Struct$$Type} from "io.wispforest.endec.Deserializer$Struct"
import {$Serializer$$Type} from "io.wispforest.endec.Serializer"
import {$Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Endec$Encoder$$Type} from "io.wispforest.endec.Endec$Encoder"
import {$Class$$Type} from "java.lang.Class"
import {$Set} from "java.util.Set"
import {$Endec$DecoderWithError$$Type} from "io.wispforest.endec.Endec$DecoderWithError"
import {$KeyedEndec} from "io.wispforest.endec.impl.KeyedEndec"

export interface $StructEndec$$Interface<T> extends $Endec$$Interface<(T)> {
}

export class $StructEndec<T> implements $StructEndec$$Interface {
 "decode"(arg0: $SerializationContext$$Type, arg1: $Deserializer$$Type<(never)>): T
 "encode"(arg0: $SerializationContext$$Type, arg1: $Serializer$$Type<(never)>, arg2: T): void
static "unit"<T>(arg0: $Supplier$$Type<(T)>): $StructEndec<(T)>
static "unit"<T>(arg0: T): $StructEndec<(T)>
 "xmap"(arg0: $Function$$Type, arg1: $Function$$Type): $Endec
 "encodeStruct"(arg0: $SerializationContext$$Type, arg1: $Serializer$$Type<(never)>, arg2: $Serializer$Struct$$Type, arg3: T): void
 "decodeStruct"(arg0: $SerializationContext$$Type, arg1: $Deserializer$$Type<(never)>, arg2: $Deserializer$Struct$$Type): T
 "xmapWithContext"(arg0: $BiFunction$$Type, arg1: $BiFunction$$Type): $Endec
 "flatFieldOf"<S>(arg0: $Function$$Type<(S), (T)>): $StructField<(S), (T)>
static "map"<K, V>(arg0: $Endec$$Type<(K)>, arg1: $Endec$$Type<(V)>): $Endec<($Map<(K), (V)>)>
static "map"<K, V>(arg0: $Function$$Type<(K), (StringJS)>, arg1: $Function$$Type<(StringJS), (K)>, arg2: $Endec$$Type<(V)>): $Endec<($Map<(K), (V)>)>
static "of"<T>(arg0: $Endec$Encoder$$Type<(T)>, arg1: $Endec$Decoder$$Type<(T)>): $Endec<(T)>
 "validate"(arg0: $Consumer$$Type<(T)>): $Endec<(T)>
 "optionalOf"(): $Endec<($Optional<(T)>)>
 "decodeFully"<E>(arg0: $SerializationContext$$Type, arg1: $Function$$Type<(E), ($Deserializer$$Type<(E)>)>, arg2: E): T
 "decodeFully"<E>(arg0: $Function$$Type<(E), ($Deserializer$$Type<(E)>)>, arg1: E): T
 "encodeFully"<E>(arg0: $Supplier$$Type<($Serializer$$Type<(E)>)>, arg1: T): E
 "encodeFully"<E>(arg0: $SerializationContext$$Type, arg1: $Supplier$$Type<($Serializer$$Type<(E)>)>, arg2: T): E
static "forEnum"<E extends $Enum<(object)>>(arg0: $Class$$Type<(E)>): $Endec<(E)>
 "keyed"(arg0: StringJS, arg1: T): $KeyedEndec<(T)>
 "keyed"(arg0: StringJS, arg1: $Supplier$$Type<(T)>): $KeyedEndec<(T)>
 "optionalFieldOf"<S>(arg0: StringJS, arg1: $Function$$Type<(S), (T)>, arg2: T): $StructField<(S), (T)>
 "optionalFieldOf"<S>(arg0: StringJS, arg1: $Function$$Type<(S), (T)>, arg2: $Supplier$$Type<(T)>): $StructField<(S), (T)>
 "listOf"(): $Endec<($List<(T)>)>
 "fieldOf"<S>(arg0: StringJS, arg1: $Function$$Type<(S), (T)>): $StructField<(S), (T)>
static "ifAttr"<T>(arg0: $SerializationAttribute$$Type, arg1: $Endec$$Type<(T)>): $AttributeEndecBuilder<(T)>
 "nullableOf"(): $Endec<(T)>
 "setOf"(): $Endec<($Set<(T)>)>
 "mapOf"(): $Endec<($Map<(StringJS), (T)>)>
static "dispatchedStruct"<T, K>(arg0: $Function$$Type<(K), ($StructEndec$$Type<(T)>)>, arg1: $Function$$Type<(T), (K)>, arg2: $Endec$$Type<(K)>, arg3: StringJS): $Endec<(T)>
static "dispatchedStruct"<T, K>(arg0: $Function$$Type<(K), ($StructEndec$$Type<(T)>)>, arg1: $Function$$Type<(T), (K)>, arg2: $Endec$$Type<(K)>): $Endec<(T)>
 "catchErrors"(arg0: $Endec$DecoderWithError$$Type<(T)>): $Endec<(T)>
static "dispatched"<T, K>(arg0: $Function$$Type<(K), ($Endec$$Type<(T)>)>, arg1: $Function$$Type<(T), (K)>, arg2: $Endec$$Type<(K)>): $Endec<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructEndec$$Type<T> = ($StructEndec<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructEndec$$Original<T> = $StructEndec<(T)>;}
declare module "io.wispforest.endec.SerializationAttribute$WithValue" {
import {$SerializationAttribute} from "io.wispforest.endec.SerializationAttribute"
import {$SerializationAttribute$Instance} from "io.wispforest.endec.SerializationAttribute$Instance"

export class $SerializationAttribute$WithValue<T> extends $SerializationAttribute {
readonly "name": StringJS

public "instance"(arg0: T): $SerializationAttribute$Instance
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SerializationAttribute$WithValue$$Type<T> = ($SerializationAttribute$WithValue<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SerializationAttribute$WithValue$$Original<T> = $SerializationAttribute$WithValue<(T)>;}
declare module "io.wispforest.endec.SerializationContext" {
import {$SerializationAttribute$$Type} from "io.wispforest.endec.SerializationAttribute"
import {$SerializationAttribute$WithValue$$Type} from "io.wispforest.endec.SerializationAttribute$WithValue"
import {$SerializationAttribute$Instance$$Type} from "io.wispforest.endec.SerializationAttribute$Instance"

export class $SerializationContext {
public static "empty"(): $SerializationContext
public static "suppressed"(...arg0: ($SerializationAttribute$$Type)[]): $SerializationContext
public static "attributes"(...arg0: ($SerializationAttribute$Instance$$Type)[]): $SerializationContext
public "and"(arg0: $SerializationContext$$Type): $SerializationContext
public "hasAttribute"(arg0: $SerializationAttribute$$Type): boolean
public "withAttributes"(...arg0: ($SerializationAttribute$Instance$$Type)[]): $SerializationContext
public "getAttributeValue"<A>(arg0: $SerializationAttribute$WithValue$$Type<(A)>): A
public "withoutAttributes"(...arg0: ($SerializationAttribute$$Type)[]): $SerializationContext
public "withoutSuppressed"(...arg0: ($SerializationAttribute$$Type)[]): $SerializationContext
public "withSuppressed"(...arg0: ($SerializationAttribute$$Type)[]): $SerializationContext
public "requireAttributeValue"<A>(arg0: $SerializationAttribute$WithValue$$Type<(A)>): A
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SerializationContext$$Type = ($SerializationContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SerializationContext$$Original = $SerializationContext;}
declare module "io.wispforest.endec.Serializer$Struct" {
import {$Endec$$Type} from "io.wispforest.endec.Endec"
import {$Endable$$Interface} from "io.wispforest.endec.util.Endable"
import {$SerializationContext$$Type} from "io.wispforest.endec.SerializationContext"

export interface $Serializer$Struct$$Interface extends $Endable$$Interface {
}

export class $Serializer$Struct implements $Serializer$Struct$$Interface {
 "field"<F>(arg0: StringJS, arg1: $SerializationContext$$Type, arg2: $Endec$$Type<(F)>, arg3: F): $Serializer$Struct
 "end"(): void
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Serializer$Struct$$Type = ($Serializer$Struct);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Serializer$Struct$$Original = $Serializer$Struct;}
declare module "io.wispforest.endec.Endec" {
import {$StructEndec$$Type} from "io.wispforest.endec.StructEndec"
import {$SerializationAttribute$$Type} from "io.wispforest.endec.SerializationAttribute"
import {$Endec$Decoder$$Type} from "io.wispforest.endec.Endec$Decoder"
import {$Map} from "java.util.Map"
import {$Optional} from "java.util.Optional"
import {$Enum} from "java.lang.Enum"
import {$List} from "java.util.List"
import {$SerializationContext$$Type} from "io.wispforest.endec.SerializationContext"
import {$StructField} from "io.wispforest.endec.impl.StructField"
import {$Deserializer$$Type} from "io.wispforest.endec.Deserializer"
import {$AttributeEndecBuilder} from "io.wispforest.endec.impl.AttributeEndecBuilder"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$Serializer$$Type} from "io.wispforest.endec.Serializer"
import {$Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Endec$Encoder$$Type} from "io.wispforest.endec.Endec$Encoder"
import {$Class$$Type} from "java.lang.Class"
import {$Set} from "java.util.Set"
import {$Endec$DecoderWithError$$Type} from "io.wispforest.endec.Endec$DecoderWithError"
import {$KeyedEndec} from "io.wispforest.endec.impl.KeyedEndec"

export interface $Endec$$Interface<T> {
}

export class $Endec<T> implements $Endec$$Interface {
static readonly "BYTES": $Endec<((byte)[])>
static readonly "VAR_LONG": $Endec<(long)>
static readonly "FLOAT": $Endec<(float)>
static readonly "VAR_INT": $Endec<(integer)>
static readonly "BYTE": $Endec<(byte)>
static readonly "STRING": $Endec<(StringJS)>
static readonly "DOUBLE": $Endec<(double)>
static readonly "VOID": $Endec<(void)>
static readonly "BOOLEAN": $Endec<(boolean)>
static readonly "INT": $Endec<(integer)>
static readonly "SHORT": $Endec<(short)>
static readonly "LONG": $Endec<(long)>

 "decode"(arg0: $SerializationContext$$Type, arg1: $Deserializer$$Type<(never)>): T
 "encode"(arg0: $SerializationContext$$Type, arg1: $Serializer$$Type<(never)>, arg2: T): void
static "map"<K, V>(arg0: $Endec$$Type<(K)>, arg1: $Endec$$Type<(V)>): $Endec<($Map<(K), (V)>)>
static "map"<K, V>(arg0: $Function$$Type<(K), (StringJS)>, arg1: $Function$$Type<(StringJS), (K)>, arg2: $Endec$$Type<(V)>): $Endec<($Map<(K), (V)>)>
static "of"<T>(arg0: $Endec$Encoder$$Type<(T)>, arg1: $Endec$Decoder$$Type<(T)>): $Endec<(T)>
 "validate"(arg0: $Consumer$$Type<(T)>): $Endec<(T)>
 "optionalOf"(): $Endec<($Optional<(T)>)>
 "decodeFully"<E>(arg0: $SerializationContext$$Type, arg1: $Function$$Type<(E), ($Deserializer$$Type<(E)>)>, arg2: E): T
 "decodeFully"<E>(arg0: $Function$$Type<(E), ($Deserializer$$Type<(E)>)>, arg1: E): T
 "encodeFully"<E>(arg0: $Supplier$$Type<($Serializer$$Type<(E)>)>, arg1: T): E
 "encodeFully"<E>(arg0: $SerializationContext$$Type, arg1: $Supplier$$Type<($Serializer$$Type<(E)>)>, arg2: T): E
static "forEnum"<E extends $Enum<(object)>>(arg0: $Class$$Type<(E)>): $Endec<(E)>
 "keyed"(arg0: StringJS, arg1: T): $KeyedEndec<(T)>
 "keyed"(arg0: StringJS, arg1: $Supplier$$Type<(T)>): $KeyedEndec<(T)>
 "optionalFieldOf"<S>(arg0: StringJS, arg1: $Function$$Type<(S), (T)>, arg2: T): $StructField<(S), (T)>
 "optionalFieldOf"<S>(arg0: StringJS, arg1: $Function$$Type<(S), (T)>, arg2: $Supplier$$Type<(T)>): $StructField<(S), (T)>
 "xmap"<R>(arg0: $Function$$Type<(T), (R)>, arg1: $Function$$Type<(R), (T)>): $Endec<(R)>
 "listOf"(): $Endec<($List<(T)>)>
 "fieldOf"<S>(arg0: StringJS, arg1: $Function$$Type<(S), (T)>): $StructField<(S), (T)>
 "xmapWithContext"<R>(arg0: $BiFunction$$Type<($SerializationContext), (T), (R)>, arg1: $BiFunction$$Type<($SerializationContext), (R), (T)>): $Endec<(R)>
static "ifAttr"<T>(arg0: $SerializationAttribute$$Type, arg1: $Endec$$Type<(T)>): $AttributeEndecBuilder<(T)>
 "nullableOf"(): $Endec<(T)>
 "setOf"(): $Endec<($Set<(T)>)>
 "mapOf"(): $Endec<($Map<(StringJS), (T)>)>
static "dispatchedStruct"<T, K>(arg0: $Function$$Type<(K), ($StructEndec$$Type<(T)>)>, arg1: $Function$$Type<(T), (K)>, arg2: $Endec$$Type<(K)>, arg3: StringJS): $Endec<(T)>
static "dispatchedStruct"<T, K>(arg0: $Function$$Type<(K), ($StructEndec$$Type<(T)>)>, arg1: $Function$$Type<(T), (K)>, arg2: $Endec$$Type<(K)>): $Endec<(T)>
 "catchErrors"(arg0: $Endec$DecoderWithError$$Type<(T)>): $Endec<(T)>
static "dispatched"<T, K>(arg0: $Function$$Type<(K), ($Endec$$Type<(T)>)>, arg1: $Function$$Type<(T), (K)>, arg2: $Endec$$Type<(K)>): $Endec<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Endec$$Type<T> = ($Endec<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Endec$$Original<T> = $Endec<(T)>;}
declare module "io.wispforest.endec.Deserializer$Sequence" {
import {$Iterator$$Interface} from "java.util.Iterator"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $Deserializer$Sequence$$Interface<E> extends $Iterator$$Interface<(E)> {
}

export class $Deserializer$Sequence<E> implements $Deserializer$Sequence$$Interface {
 "hasNext"(): boolean
 "next"(): E
 "estimatedSize"(): integer
 "remove"(): void
 "forEachRemaining"(arg0: $Consumer$$Type<(E)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Deserializer$Sequence$$Type<E> = ($Deserializer$Sequence<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Deserializer$Sequence$$Original<E> = $Deserializer$Sequence<(E)>;}
declare module "io.wispforest.endec.Endec$Decoder" {
import {$SerializationContext, $SerializationContext$$Type} from "io.wispforest.endec.SerializationContext"
import {$Deserializer, $Deserializer$$Type} from "io.wispforest.endec.Deserializer"

export interface $Endec$Decoder$$Interface<T> {

(arg0: $SerializationContext, arg1: $Deserializer<(never)>): T
}

export class $Endec$Decoder<T> implements $Endec$Decoder$$Interface {
 "decode"(arg0: $SerializationContext$$Type, arg1: $Deserializer$$Type<(never)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Endec$Decoder$$Type<T> = ((arg0: $SerializationContext, arg1: $Deserializer<(never)>) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Endec$Decoder$$Original<T> = $Endec$Decoder<(T)>;}
declare module "io.wispforest.endec.SerializationAttribute$Marker" {
import {$SerializationAttribute} from "io.wispforest.endec.SerializationAttribute"
import {$SerializationAttribute$Instance$$Interface} from "io.wispforest.endec.SerializationAttribute$Instance"

export class $SerializationAttribute$Marker extends $SerializationAttribute implements $SerializationAttribute$Instance$$Interface {
readonly "name": StringJS

public "value"(): any
public "attribute"(): $SerializationAttribute
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SerializationAttribute$Marker$$Type = ($SerializationAttribute$Marker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SerializationAttribute$Marker$$Original = $SerializationAttribute$Marker;}
declare module "io.wispforest.endec.Deserializer" {
import {$Endec$$Type} from "io.wispforest.endec.Endec"
import {$Deserializer$Struct} from "io.wispforest.endec.Deserializer$Struct"
import {$Deserializer$Map} from "io.wispforest.endec.Deserializer$Map"
import {$Optional} from "java.util.Optional"
import {$Function$$Type} from "java.util.function.Function"
import {$Deserializer$Sequence} from "io.wispforest.endec.Deserializer$Sequence"
import {$SerializationContext, $SerializationContext$$Type} from "io.wispforest.endec.SerializationContext"

export interface $Deserializer$$Interface<T> {
set "upContext"(value: $SerializationContext$$Type)
}

export class $Deserializer<T> implements $Deserializer$$Interface {
 "tryRead"<V>(arg0: $Function$$Type<($Deserializer<(T)>), (V)>): V
 "map"<V>(arg0: $SerializationContext$$Type, arg1: $Endec$$Type<(V)>): $Deserializer$Map<(V)>
 "readInt"(arg0: $SerializationContext$$Type): integer
 "readBytes"(arg0: $SerializationContext$$Type): (byte)[]
 "readFloat"(arg0: $SerializationContext$$Type): float
 "sequence"<E>(arg0: $SerializationContext$$Type, arg1: $Endec$$Type<(E)>): $Deserializer$Sequence<(E)>
 "readBoolean"(arg0: $SerializationContext$$Type): boolean
 "readByte"(arg0: $SerializationContext$$Type): byte
 "readShort"(arg0: $SerializationContext$$Type): short
 "readLong"(arg0: $SerializationContext$$Type): long
 "readDouble"(arg0: $SerializationContext$$Type): double
 "readString"(arg0: $SerializationContext$$Type): StringJS
 "setupContext"(arg0: $SerializationContext$$Type): $SerializationContext
 "readVarLong"(arg0: $SerializationContext$$Type): long
 "readOptional"<V>(arg0: $SerializationContext$$Type, arg1: $Endec$$Type<(V)>): $Optional<(V)>
 "struct"(): $Deserializer$Struct
 "readVarInt"(arg0: $SerializationContext$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Deserializer$$Type<T> = ($Deserializer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Deserializer$$Original<T> = $Deserializer<(T)>;}
declare module "io.wispforest.endec.Deserializer$Map" {
import {$Iterator$$Interface} from "java.util.Iterator"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $Deserializer$Map$$Interface<E> extends $Iterator$$Interface<($Map$Entry<(StringJS), (E)>)> {
}

export class $Deserializer$Map<E> implements $Deserializer$Map$$Interface {
 "hasNext"(): boolean
 "next"(): any
 "estimatedSize"(): integer
 "remove"(): void
 "forEachRemaining"(arg0: $Consumer$$Type<($Map$Entry<(StringJS), (E)>)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Deserializer$Map$$Type<E> = ($Deserializer$Map<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Deserializer$Map$$Original<E> = $Deserializer$Map<(E)>;}
