declare module "com.teamresourceful.bytecodecs.defaults.MapCodec" {
import {$Collection} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Enum} from "java.lang.Enum"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List} from "java.util.List"
import {$PairCodec, $PairCodec$$Type} from "com.teamresourceful.bytecodecs.defaults.PairCodec"
import {$ObjectEntryByteCodec} from "com.teamresourceful.bytecodecs.base.ObjectEntryByteCodec"
import {$Either, $Either$$Type} from "com.teamresourceful.bytecodecs.utils.Either"
import {$ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function$$Type} from "java.util.function.Function"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set} from "java.util.Set"
import {$Class$$Type} from "java.lang.Class"
import {$ByteCodec, $ByteCodec$$Type, $ByteCodec$$Interface} from "com.teamresourceful.bytecodecs.base.ByteCodec"
import {$Record} from "java.lang.Record"

export class $MapCodec<K, V> extends $Record implements $ByteCodec$$Interface<($Map<(K), (V)>)> {
constructor(arg0: $ByteCodec$$Type<(K)>, arg1: $ByteCodec$$Type<(V)>)
constructor(codec: $PairCodec$$Type<(K), (V)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "decode"(arg0: $ByteBuf$$Type): any
public "encode"(arg0: any, arg1: $ByteBuf$$Type): void
public "encode"(arg0: $Map$$Type<(K), (V)>, arg1: $ByteBuf$$Type): void
public "codec"(): $PairCodec<(K), (V)>
public "nullableOf"(): $ByteCodec<($Map<(K), (V)>)>
public static "pairOf"<K, V>(arg0: $ByteCodec$$Type<(K)>, arg1: $ByteCodec$$Type<(V)>): $PairCodec<(K), (V)>
public static "mapOf"<K, V>(arg0: $ByteCodec$$Type<(K)>, arg1: $ByteCodec$$Type<(V)>): $MapCodec<(K), (V)>
public "setOf"(): $ByteCodec<($Set<($Map<(K), (V)>)>)>
public "dispatch"<O>(arg0: $Function$$Type<($Map<(K), (V)>), ($ByteCodec$$Type<(O)>)>, arg1: $Function$$Type<(O), ($Map$$Type<(K), (V)>)>): $ByteCodec<(O)>
public "map"<R>(arg0: $Function$$Type<($Map<(K), (V)>), (R)>, arg1: $Function$$Type<(R), ($Map$$Type<(K), (V)>)>): $ByteCodec<(R)>
public "optionalOf"(arg0: $Supplier$$Type<($Map$$Type<(K), (V)>)>): $ByteCodec<($Optional<($Map<(K), (V)>)>)>
public "optionalOf"(): $ByteCodec<($Optional<($Map<(K), (V)>)>)>
public "optionalOf"(arg0: $Map$$Type<(K), (V)>): $ByteCodec<($Optional<($Map<(K), (V)>)>)>
public static "unit"<T>(arg0: $Supplier$$Type<($Map$$Type<(K), (V)>)>): $ByteCodec<($Map<(K), (V)>)>
public static "unit"<T>(arg0: $Map$$Type<(K), (V)>): $ByteCodec<($Map<(K), (V)>)>
public static "choice"<T>(arg0: $ByteCodec$$Type<($Map$$Type<(K), (V)>)>, arg1: $ByteCodec$$Type<($Map$$Type<(K), (V)>)>, arg2: $Function$$Type<($Map<(K), (V)>), ($Either$$Type<($Map$$Type<(K), (V)>), ($Map$$Type<(K), (V)>)>)>): $ByteCodec<($Map<(K), (V)>)>
public "linkedSetOf"(): $ByteCodec<($Set<($Map<(K), (V)>)>)>
public static "either"<F, S>(arg0: $ByteCodec$$Type<(F)>, arg1: $ByteCodec$$Type<(S)>): $ByteCodec<($Either<(F), (S)>)>
public "fieldOf"<O>(arg0: $Function$$Type<(O), ($Map$$Type<(K), (V)>)>): $ObjectEntryByteCodec<(O), ($Map<(K), (V)>)>
public static "passthrough"<T>(arg0: $BiConsumer$$Type<($ByteBuf), ($Map<(K), (V)>)>, arg1: $Function$$Type<($ByteBuf), ($Map$$Type<(K), (V)>)>): $ByteCodec<($Map<(K), (V)>)>
public "mapDispatch"<O>(arg0: $Function$$Type<($Map<(K), (V)>), ($ByteCodec$$Type<(O)>)>): $ByteCodec<($Map<($Map<(K), (V)>), (O)>)>
public "collectionOf"<C extends $Collection<(object)>>(arg0: $Function$$Type<(integer), (C)>): $ByteCodec<(C)>
public "nullableFieldOf"<O>(arg0: $Function$$Type<(O), ($Map$$Type<(K), (V)>)>): $ObjectEntryByteCodec<(O), ($Map<(K), (V)>)>
public "nullableFieldOf"<O>(arg0: $Map$$Type<(K), (V)>, arg1: $Function$$Type<(O), ($Map$$Type<(K), (V)>)>): $ObjectEntryByteCodec<(O), ($Map<(K), (V)>)>
public "nullableFieldOf"<O>(arg0: $Supplier$$Type<($Map$$Type<(K), (V)>)>, arg1: $Function$$Type<(O), ($Map$$Type<(K), (V)>)>): $ObjectEntryByteCodec<(O), ($Map<(K), (V)>)>
public "optionalFieldOf"<O>(arg0: $Supplier$$Type<($Map$$Type<(K), (V)>)>, arg1: $Function$$Type<(O), (($Map$$Type<(K), (V)>)?)>): $ObjectEntryByteCodec<(O), ($Optional<($Map<(K), (V)>)>)>
public "optionalFieldOf"<O>(arg0: $Function$$Type<(O), (($Map$$Type<(K), (V)>)?)>): $ObjectEntryByteCodec<(O), ($Optional<($Map<(K), (V)>)>)>
public "optionalFieldOf"<O>(arg0: $Map$$Type<(K), (V)>, arg1: $Function$$Type<(O), (($Map$$Type<(K), (V)>)?)>): $ObjectEntryByteCodec<(O), ($Optional<($Map<(K), (V)>)>)>
public static "ofEnum"<T extends $Enum<(object)>>(arg0: $Class$$Type<($Map$$Type<(K), (V)>)>): $ByteCodec<($Map<(K), (V)>)>
public "listOf"(): $ByteCodec<($List<($Map<(K), (V)>)>)>
get "of"(): $ByteCodec<($Set<($Map<(K), (V)>)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapCodec$$Type<K, V> = ({"codec"?: $PairCodec$$Type<(K), (V)>}) | ([codec?: $PairCodec$$Type<(K), (V)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapCodec$$Original<K, V> = $MapCodec<(K), (V)>;}
declare module "com.teamresourceful.bytecodecs.defaults.PairCodec" {
import {$Collection} from "java.util.Collection"
import {$Map} from "java.util.Map"
import {$Enum} from "java.lang.Enum"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List} from "java.util.List"
import {$ObjectEntryByteCodec} from "com.teamresourceful.bytecodecs.base.ObjectEntryByteCodec"
import {$Either, $Either$$Type} from "com.teamresourceful.bytecodecs.utils.Either"
import {$ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function$$Type} from "java.util.function.Function"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set} from "java.util.Set"
import {$Class$$Type} from "java.lang.Class"
import {$ByteCodec, $ByteCodec$$Type, $ByteCodec$$Interface} from "com.teamresourceful.bytecodecs.base.ByteCodec"
import {$Record} from "java.lang.Record"
import {$MapCodec} from "com.teamresourceful.bytecodecs.defaults.MapCodec"

export class $PairCodec<K, V> extends $Record implements $ByteCodec$$Interface<($Map$Entry<(K), (V)>)> {
constructor(first: $ByteCodec$$Type<(K)>, second: $ByteCodec$$Type<(V)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "decode"(arg0: $ByteBuf$$Type): any
public "encode"(arg0: any, arg1: $ByteBuf$$Type): void
public "encode"(arg0: $Map$Entry$$Type<(K), (V)>, arg1: $ByteBuf$$Type): void
public "first"(): $ByteCodec<(K)>
public "second"(): $ByteCodec<(V)>
public "nullableOf"(): $ByteCodec<($Map$Entry<(K), (V)>)>
public static "pairOf"<K, V>(arg0: $ByteCodec$$Type<(K)>, arg1: $ByteCodec$$Type<(V)>): $PairCodec<(K), (V)>
public static "mapOf"<K, V>(arg0: $ByteCodec$$Type<(K)>, arg1: $ByteCodec$$Type<(V)>): $MapCodec<(K), (V)>
public "setOf"(): $ByteCodec<($Set<($Map$Entry<(K), (V)>)>)>
public "dispatch"<O>(arg0: $Function$$Type<($Map$Entry<(K), (V)>), ($ByteCodec$$Type<(O)>)>, arg1: $Function$$Type<(O), ($Map$Entry$$Type<(K), (V)>)>): $ByteCodec<(O)>
public "map"<R>(arg0: $Function$$Type<($Map$Entry<(K), (V)>), (R)>, arg1: $Function$$Type<(R), ($Map$Entry$$Type<(K), (V)>)>): $ByteCodec<(R)>
public "optionalOf"(arg0: $Supplier$$Type<($Map$Entry$$Type<(K), (V)>)>): $ByteCodec<($Optional<($Map$Entry<(K), (V)>)>)>
public "optionalOf"(): $ByteCodec<($Optional<($Map$Entry<(K), (V)>)>)>
public "optionalOf"(arg0: $Map$Entry$$Type<(K), (V)>): $ByteCodec<($Optional<($Map$Entry<(K), (V)>)>)>
public static "unit"<T>(arg0: $Supplier$$Type<($Map$Entry$$Type<(K), (V)>)>): $ByteCodec<($Map$Entry<(K), (V)>)>
public static "unit"<T>(arg0: $Map$Entry$$Type<(K), (V)>): $ByteCodec<($Map$Entry<(K), (V)>)>
public static "choice"<T>(arg0: $ByteCodec$$Type<($Map$Entry$$Type<(K), (V)>)>, arg1: $ByteCodec$$Type<($Map$Entry$$Type<(K), (V)>)>, arg2: $Function$$Type<($Map$Entry<(K), (V)>), ($Either$$Type<($Map$Entry$$Type<(K), (V)>), ($Map$Entry$$Type<(K), (V)>)>)>): $ByteCodec<($Map$Entry<(K), (V)>)>
public "linkedSetOf"(): $ByteCodec<($Set<($Map$Entry<(K), (V)>)>)>
public static "either"<F, S>(arg0: $ByteCodec$$Type<(F)>, arg1: $ByteCodec$$Type<(S)>): $ByteCodec<($Either<(F), (S)>)>
public "fieldOf"<O>(arg0: $Function$$Type<(O), ($Map$Entry$$Type<(K), (V)>)>): $ObjectEntryByteCodec<(O), ($Map$Entry<(K), (V)>)>
public static "passthrough"<T>(arg0: $BiConsumer$$Type<($ByteBuf), ($Map$Entry<(K), (V)>)>, arg1: $Function$$Type<($ByteBuf), ($Map$Entry$$Type<(K), (V)>)>): $ByteCodec<($Map$Entry<(K), (V)>)>
public "mapDispatch"<O>(arg0: $Function$$Type<($Map$Entry<(K), (V)>), ($ByteCodec$$Type<(O)>)>): $ByteCodec<($Map<($Map$Entry<(K), (V)>), (O)>)>
public "collectionOf"<C extends $Collection<(object)>>(arg0: $Function$$Type<(integer), (C)>): $ByteCodec<(C)>
public "nullableFieldOf"<O>(arg0: $Function$$Type<(O), ($Map$Entry$$Type<(K), (V)>)>): $ObjectEntryByteCodec<(O), ($Map$Entry<(K), (V)>)>
public "nullableFieldOf"<O>(arg0: $Map$Entry$$Type<(K), (V)>, arg1: $Function$$Type<(O), ($Map$Entry$$Type<(K), (V)>)>): $ObjectEntryByteCodec<(O), ($Map$Entry<(K), (V)>)>
public "nullableFieldOf"<O>(arg0: $Supplier$$Type<($Map$Entry$$Type<(K), (V)>)>, arg1: $Function$$Type<(O), ($Map$Entry$$Type<(K), (V)>)>): $ObjectEntryByteCodec<(O), ($Map$Entry<(K), (V)>)>
public "optionalFieldOf"<O>(arg0: $Supplier$$Type<($Map$Entry$$Type<(K), (V)>)>, arg1: $Function$$Type<(O), (($Map$Entry$$Type<(K), (V)>)?)>): $ObjectEntryByteCodec<(O), ($Optional<($Map$Entry<(K), (V)>)>)>
public "optionalFieldOf"<O>(arg0: $Function$$Type<(O), (($Map$Entry$$Type<(K), (V)>)?)>): $ObjectEntryByteCodec<(O), ($Optional<($Map$Entry<(K), (V)>)>)>
public "optionalFieldOf"<O>(arg0: $Map$Entry$$Type<(K), (V)>, arg1: $Function$$Type<(O), (($Map$Entry$$Type<(K), (V)>)?)>): $ObjectEntryByteCodec<(O), ($Optional<($Map$Entry<(K), (V)>)>)>
public static "ofEnum"<T extends $Enum<(object)>>(arg0: $Class$$Type<($Map$Entry$$Type<(K), (V)>)>): $ByteCodec<($Map$Entry<(K), (V)>)>
public "listOf"(): $ByteCodec<($List<($Map$Entry<(K), (V)>)>)>
get "of"(): $ByteCodec<($Set<($Map$Entry<(K), (V)>)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PairCodec$$Type<K, V> = ({"first"?: $ByteCodec$$Type<(K)>, "second"?: $ByteCodec$$Type<(V)>}) | ([first?: $ByteCodec$$Type<(K)>, second?: $ByteCodec$$Type<(V)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PairCodec$$Original<K, V> = $PairCodec<(K), (V)>;}
