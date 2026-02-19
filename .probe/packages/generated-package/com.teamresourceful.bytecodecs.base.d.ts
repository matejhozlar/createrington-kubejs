declare module "com.teamresourceful.bytecodecs.base.WrappedByteCodec" {
import {$Collection} from "java.util.Collection"
import {$Map} from "java.util.Map"
import {$Enum} from "java.lang.Enum"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List} from "java.util.List"
import {$PairCodec} from "com.teamresourceful.bytecodecs.defaults.PairCodec"
import {$ObjectEntryByteCodec} from "com.teamresourceful.bytecodecs.base.ObjectEntryByteCodec"
import {$Either, $Either$$Type} from "com.teamresourceful.bytecodecs.utils.Either"
import {$ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function$$Type} from "java.util.function.Function"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set} from "java.util.Set"
import {$Class$$Type} from "java.lang.Class"
import {$ByteCodec, $ByteCodec$$Type, $ByteCodec$$Interface} from "com.teamresourceful.bytecodecs.base.ByteCodec"
import {$MapCodec} from "com.teamresourceful.bytecodecs.defaults.MapCodec"

export interface $WrappedByteCodec$$Interface<T> extends $ByteCodec$$Interface<(T)> {

(): $ByteCodec$$Type<(T)>
get "of"(): $ByteCodec<($Set<(T)>)>
}

export class $WrappedByteCodec<T> implements $WrappedByteCodec$$Interface {
 "decode"(arg0: $ByteBuf$$Type): T
 "encode"(arg0: T, arg1: $ByteBuf$$Type): void
 "codec"(): $ByteCodec<(T)>
 "nullableOf"(): $ByteCodec<(T)>
static "pairOf"<K, V>(arg0: $ByteCodec$$Type<(K)>, arg1: $ByteCodec$$Type<(V)>): $PairCodec<(K), (V)>
static "mapOf"<K, V>(arg0: $ByteCodec$$Type<(K)>, arg1: $ByteCodec$$Type<(V)>): $MapCodec<(K), (V)>
 "setOf"(): $ByteCodec<($Set<(T)>)>
 "dispatch"<O>(arg0: $Function$$Type<(T), ($ByteCodec$$Type<(O)>)>, arg1: $Function$$Type<(O), (T)>): $ByteCodec<(O)>
 "map"<R>(arg0: $Function$$Type<(T), (R)>, arg1: $Function$$Type<(R), (T)>): $ByteCodec<(R)>
 "optionalOf"(arg0: $Supplier$$Type<(T)>): $ByteCodec<($Optional<(T)>)>
 "optionalOf"(): $ByteCodec<($Optional<(T)>)>
 "optionalOf"(arg0: T): $ByteCodec<($Optional<(T)>)>
static "unit"<T>(arg0: $Supplier$$Type<(T)>): $ByteCodec<(T)>
static "unit"<T>(arg0: T): $ByteCodec<(T)>
static "choice"<T>(arg0: $ByteCodec$$Type<(T)>, arg1: $ByteCodec$$Type<(T)>, arg2: $Function$$Type<(T), ($Either$$Type<(T), (T)>)>): $ByteCodec<(T)>
 "linkedSetOf"(): $ByteCodec<($Set<(T)>)>
static "either"<F, S>(arg0: $ByteCodec$$Type<(F)>, arg1: $ByteCodec$$Type<(S)>): $ByteCodec<($Either<(F), (S)>)>
 "fieldOf"<O>(arg0: $Function$$Type<(O), (T)>): $ObjectEntryByteCodec<(O), (T)>
static "passthrough"<T>(arg0: $BiConsumer$$Type<($ByteBuf), (T)>, arg1: $Function$$Type<($ByteBuf), (T)>): $ByteCodec<(T)>
 "mapDispatch"<O>(arg0: $Function$$Type<(T), ($ByteCodec$$Type<(O)>)>): $ByteCodec<($Map<(T), (O)>)>
 "collectionOf"<C extends $Collection<(object)>>(arg0: $Function$$Type<(integer), (C)>): $ByteCodec<(C)>
 "nullableFieldOf"<O>(arg0: $Function$$Type<(O), (T)>): $ObjectEntryByteCodec<(O), (T)>
 "nullableFieldOf"<O>(arg0: T, arg1: $Function$$Type<(O), (T)>): $ObjectEntryByteCodec<(O), (T)>
 "nullableFieldOf"<O>(arg0: $Supplier$$Type<(T)>, arg1: $Function$$Type<(O), (T)>): $ObjectEntryByteCodec<(O), (T)>
 "optionalFieldOf"<O>(arg0: $Supplier$$Type<(T)>, arg1: $Function$$Type<(O), ((T)?)>): $ObjectEntryByteCodec<(O), ($Optional<(T)>)>
 "optionalFieldOf"<O>(arg0: $Function$$Type<(O), ((T)?)>): $ObjectEntryByteCodec<(O), ($Optional<(T)>)>
 "optionalFieldOf"<O>(arg0: T, arg1: $Function$$Type<(O), ((T)?)>): $ObjectEntryByteCodec<(O), ($Optional<(T)>)>
static "ofEnum"<T extends $Enum<(object)>>(arg0: $Class$$Type<(T)>): $ByteCodec<(T)>
 "listOf"(): $ByteCodec<($List<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrappedByteCodec$$Type<T> = (() => $ByteCodec$$Type<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WrappedByteCodec$$Original<T> = $WrappedByteCodec<(T)>;}
declare module "com.teamresourceful.bytecodecs.base.ObjectEntryByteCodec" {
import {$Collection} from "java.util.Collection"
import {$Map} from "java.util.Map"
import {$Enum} from "java.lang.Enum"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List} from "java.util.List"
import {$PairCodec} from "com.teamresourceful.bytecodecs.defaults.PairCodec"
import {$Either, $Either$$Type} from "com.teamresourceful.bytecodecs.utils.Either"
import {$ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set} from "java.util.Set"
import {$Class$$Type} from "java.lang.Class"
import {$ByteCodec, $ByteCodec$$Type} from "com.teamresourceful.bytecodecs.base.ByteCodec"
import {$WrappedByteCodec$$Interface} from "com.teamresourceful.bytecodecs.base.WrappedByteCodec"
import {$Record} from "java.lang.Record"
import {$MapCodec} from "com.teamresourceful.bytecodecs.defaults.MapCodec"

export class $ObjectEntryByteCodec<O, T> extends $Record implements $WrappedByteCodec$$Interface<(T)> {
constructor(codec: $ByteCodec$$Type<(T)>, getter: $Function$$Type<(O), (T)>)

public "mapEncode"(arg0: O, arg1: $ByteBuf$$Type): void
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getter"(): $Function<(O), (T)>
public "codec"(): $ByteCodec<(T)>
public "decode"(arg0: $ByteBuf$$Type): T
public "encode"(arg0: T, arg1: $ByteBuf$$Type): void
public "nullableOf"(): $ByteCodec<(T)>
public static "pairOf"<K, V>(arg0: $ByteCodec$$Type<(K)>, arg1: $ByteCodec$$Type<(V)>): $PairCodec<(K), (V)>
public static "mapOf"<K, V>(arg0: $ByteCodec$$Type<(K)>, arg1: $ByteCodec$$Type<(V)>): $MapCodec<(K), (V)>
public "setOf"(): $ByteCodec<($Set<(T)>)>
public "dispatch"<O>(arg0: $Function$$Type<(T), ($ByteCodec$$Type<(O)>)>, arg1: $Function$$Type<(O), (T)>): $ByteCodec<(O)>
public "map"<R>(arg0: $Function$$Type<(T), (R)>, arg1: $Function$$Type<(R), (T)>): $ByteCodec<(R)>
public "optionalOf"(arg0: $Supplier$$Type<(T)>): $ByteCodec<($Optional<(T)>)>
public "optionalOf"(): $ByteCodec<($Optional<(T)>)>
public "optionalOf"(arg0: T): $ByteCodec<($Optional<(T)>)>
public static "unit"<T>(arg0: $Supplier$$Type<(T)>): $ByteCodec<(T)>
public static "unit"<T>(arg0: T): $ByteCodec<(T)>
public static "choice"<T>(arg0: $ByteCodec$$Type<(T)>, arg1: $ByteCodec$$Type<(T)>, arg2: $Function$$Type<(T), ($Either$$Type<(T), (T)>)>): $ByteCodec<(T)>
public "linkedSetOf"(): $ByteCodec<($Set<(T)>)>
public static "either"<F, S>(arg0: $ByteCodec$$Type<(F)>, arg1: $ByteCodec$$Type<(S)>): $ByteCodec<($Either<(F), (S)>)>
public "fieldOf"<O>(arg0: $Function$$Type<(O), (T)>): $ObjectEntryByteCodec<(O), (T)>
public static "passthrough"<T>(arg0: $BiConsumer$$Type<($ByteBuf), (T)>, arg1: $Function$$Type<($ByteBuf), (T)>): $ByteCodec<(T)>
public "mapDispatch"<O>(arg0: $Function$$Type<(T), ($ByteCodec$$Type<(O)>)>): $ByteCodec<($Map<(T), (O)>)>
public "collectionOf"<C extends $Collection<(object)>>(arg0: $Function$$Type<(integer), (C)>): $ByteCodec<(C)>
public "nullableFieldOf"<O>(arg0: $Function$$Type<(O), (T)>): $ObjectEntryByteCodec<(O), (T)>
public "nullableFieldOf"<O>(arg0: T, arg1: $Function$$Type<(O), (T)>): $ObjectEntryByteCodec<(O), (T)>
public "nullableFieldOf"<O>(arg0: $Supplier$$Type<(T)>, arg1: $Function$$Type<(O), (T)>): $ObjectEntryByteCodec<(O), (T)>
public "optionalFieldOf"<O>(arg0: $Supplier$$Type<(T)>, arg1: $Function$$Type<(O), ((T)?)>): $ObjectEntryByteCodec<(O), ($Optional<(T)>)>
public "optionalFieldOf"<O>(arg0: $Function$$Type<(O), ((T)?)>): $ObjectEntryByteCodec<(O), ($Optional<(T)>)>
public "optionalFieldOf"<O>(arg0: T, arg1: $Function$$Type<(O), ((T)?)>): $ObjectEntryByteCodec<(O), ($Optional<(T)>)>
public static "ofEnum"<T extends $Enum<(object)>>(arg0: $Class$$Type<(T)>): $ByteCodec<(T)>
public "listOf"(): $ByteCodec<($List<(T)>)>
get "ter"(): $Function<(O), (T)>
get "of"(): $ByteCodec<($Set<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectEntryByteCodec$$Type<O, T> = ({"codec"?: $ByteCodec$$Type<(T)>, "getter"?: $Function$$Type<(O), (T)>}) | ([codec?: $ByteCodec$$Type<(T)>, getter?: $Function$$Type<(O), (T)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ObjectEntryByteCodec$$Original<O, T> = $ObjectEntryByteCodec<(O), (T)>;}
declare module "com.teamresourceful.bytecodecs.base.ByteCodec" {
import {$Collection} from "java.util.Collection"
import {$Map} from "java.util.Map"
import {$Enum} from "java.lang.Enum"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$UUID} from "java.util.UUID"
import {$List} from "java.util.List"
import {$PairCodec} from "com.teamresourceful.bytecodecs.defaults.PairCodec"
import {$ObjectEntryByteCodec} from "com.teamresourceful.bytecodecs.base.ObjectEntryByteCodec"
import {$Either, $Either$$Type} from "com.teamresourceful.bytecodecs.utils.Either"
import {$ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function$$Type} from "java.util.function.Function"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set} from "java.util.Set"
import {$Class$$Type} from "java.lang.Class"
import {$MapCodec} from "com.teamresourceful.bytecodecs.defaults.MapCodec"

export interface $ByteCodec$$Interface<T> {
get "of"(): $ByteCodec<($Set<(T)>)>
}

export class $ByteCodec<T> implements $ByteCodec$$Interface {
static readonly "FLOAT": $ByteCodec<(float)>
static readonly "VAR_INT": $ByteCodec<(integer)>
static readonly "STRING_COMPONENT": $ByteCodec<(StringJS)>
static readonly "CHAR": $ByteCodec<(character)>
static readonly "BOOLEAN": $ByteCodec<(boolean)>
static readonly "INT": $ByteCodec<(integer)>
static readonly "SHORT": $ByteCodec<(short)>
static readonly "VAR_LONG": $ByteCodec<(long)>
static readonly "BYTE": $ByteCodec<(byte)>
static readonly "STRING": $ByteCodec<(StringJS)>
static readonly "DOUBLE": $ByteCodec<(double)>
static readonly "UUID": $ByteCodec<($UUID)>
static readonly "LONG": $ByteCodec<(long)>

 "nullableOf"(): $ByteCodec<(T)>
static "pairOf"<K, V>(arg0: $ByteCodec$$Type<(K)>, arg1: $ByteCodec$$Type<(V)>): $PairCodec<(K), (V)>
static "mapOf"<K, V>(arg0: $ByteCodec$$Type<(K)>, arg1: $ByteCodec$$Type<(V)>): $MapCodec<(K), (V)>
 "setOf"(): $ByteCodec<($Set<(T)>)>
 "dispatch"<O>(arg0: $Function$$Type<(T), ($ByteCodec$$Type<(O)>)>, arg1: $Function$$Type<(O), (T)>): $ByteCodec<(O)>
 "decode"(arg0: $ByteBuf$$Type): T
 "encode"(arg0: T, arg1: $ByteBuf$$Type): void
 "map"<R>(arg0: $Function$$Type<(T), (R)>, arg1: $Function$$Type<(R), (T)>): $ByteCodec<(R)>
 "optionalOf"(arg0: $Supplier$$Type<(T)>): $ByteCodec<($Optional<(T)>)>
 "optionalOf"(): $ByteCodec<($Optional<(T)>)>
 "optionalOf"(arg0: T): $ByteCodec<($Optional<(T)>)>
static "unit"<T>(arg0: $Supplier$$Type<(T)>): $ByteCodec<(T)>
static "unit"<T>(arg0: T): $ByteCodec<(T)>
static "choice"<T>(arg0: $ByteCodec$$Type<(T)>, arg1: $ByteCodec$$Type<(T)>, arg2: $Function$$Type<(T), ($Either$$Type<(T), (T)>)>): $ByteCodec<(T)>
 "linkedSetOf"(): $ByteCodec<($Set<(T)>)>
static "either"<F, S>(arg0: $ByteCodec$$Type<(F)>, arg1: $ByteCodec$$Type<(S)>): $ByteCodec<($Either<(F), (S)>)>
 "fieldOf"<O>(arg0: $Function$$Type<(O), (T)>): $ObjectEntryByteCodec<(O), (T)>
static "passthrough"<T>(arg0: $BiConsumer$$Type<($ByteBuf), (T)>, arg1: $Function$$Type<($ByteBuf), (T)>): $ByteCodec<(T)>
 "mapDispatch"<O>(arg0: $Function$$Type<(T), ($ByteCodec$$Type<(O)>)>): $ByteCodec<($Map<(T), (O)>)>
 "collectionOf"<C extends $Collection<(object)>>(arg0: $Function$$Type<(integer), (C)>): $ByteCodec<(C)>
 "nullableFieldOf"<O>(arg0: $Function$$Type<(O), (T)>): $ObjectEntryByteCodec<(O), (T)>
 "nullableFieldOf"<O>(arg0: T, arg1: $Function$$Type<(O), (T)>): $ObjectEntryByteCodec<(O), (T)>
 "nullableFieldOf"<O>(arg0: $Supplier$$Type<(T)>, arg1: $Function$$Type<(O), (T)>): $ObjectEntryByteCodec<(O), (T)>
 "optionalFieldOf"<O>(arg0: $Supplier$$Type<(T)>, arg1: $Function$$Type<(O), ((T)?)>): $ObjectEntryByteCodec<(O), ($Optional<(T)>)>
 "optionalFieldOf"<O>(arg0: $Function$$Type<(O), ((T)?)>): $ObjectEntryByteCodec<(O), ($Optional<(T)>)>
 "optionalFieldOf"<O>(arg0: T, arg1: $Function$$Type<(O), ((T)?)>): $ObjectEntryByteCodec<(O), ($Optional<(T)>)>
static "ofEnum"<T extends $Enum<(object)>>(arg0: $Class$$Type<(T)>): $ByteCodec<(T)>
 "listOf"(): $ByteCodec<($List<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ByteCodec$$Type<T> = ($ByteCodec<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ByteCodec$$Original<T> = $ByteCodec<(T)>;}
