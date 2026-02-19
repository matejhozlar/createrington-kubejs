declare module "it.unimi.dsi.fastutil.objects.Reference2ByteFunction" {
import {$Byte2ByteFunction, $Byte2ByteFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction"
import {$Float2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import {$Byte2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import {$Float2ByteFunction} from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import {$Reference2IntFunction} from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import {$Long2ByteFunction} from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import {$Byte2IntFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"
import {$Reference2ShortFunction} from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import {$Reference2LongFunction} from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import {$Double2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import {$Int2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import {$Byte2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Byte2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import {$Byte2ShortFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import {$Byte2CharFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import {$Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ReferenceFunction"
import {$Reference2ObjectFunction} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Object2ByteFunction} from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import {$Short2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import {$Long2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import {$Byte2LongFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import {$Reference2FloatFunction} from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import {$ToIntFunction$$Interface} from "java.util.function.ToIntFunction"
import {$Char2ByteFunction} from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import {$Double2ByteFunction} from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import {$Reference2CharFunction} from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import {$Object2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import {$Char2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import {$Reference2DoubleFunction} from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import {$Byte2FloatFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import {$Short2ByteFunction} from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import {$Int2ByteFunction} from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"

export interface $Reference2ByteFunction$$Interface<K> extends $Function$0$$Interface<(K), (byte)>, $ToIntFunction$$Interface<(K)> {

(arg0: any): byte
}

export class $Reference2ByteFunction<K> implements $Reference2ByteFunction$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): any
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): any
/**
 * 
 * @deprecated
 */
 "put"(arg0: K, arg1: byte): byte
 "put"(arg0: K, arg1: byte): byte
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "getByte"(arg0: any): byte
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: byte): byte
 "getOrDefault"(arg0: any, arg1: byte): byte
 "applyAsInt"(arg0: K): integer
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(byte), (T)>): $Function<(K), (T)>
 "andThenFloat"(arg0: $Byte2FloatFunction$$Type): $Reference2FloatFunction<(K)>
 "andThenObject"<T>(arg0: $Byte2ObjectFunction$$Type<(T)>): $Reference2ObjectFunction<(K), (T)>
 "composeByte"(arg0: $Byte2ReferenceFunction$$Type<(K)>): $Byte2ByteFunction
 "andThenLong"(arg0: $Byte2LongFunction$$Type): $Reference2LongFunction<(K)>
 "defaultReturnValue"(): byte
 "defaultReturnValue"(arg0: byte): void
 "composeLong"(arg0: $Long2ReferenceFunction$$Type<(K)>): $Long2ByteFunction
 "andThenChar"(arg0: $Byte2CharFunction$$Type): $Reference2CharFunction<(K)>
 "andThenDouble"(arg0: $Byte2DoubleFunction$$Type): $Reference2DoubleFunction<(K)>
 "composeObject"<T>(arg0: $Object2ReferenceFunction$$Type<(T), (K)>): $Object2ByteFunction<(T)>
 "composeChar"(arg0: $Char2ReferenceFunction$$Type<(K)>): $Char2ByteFunction
 "composeReference"<T>(arg0: $Reference2ReferenceFunction$$Type<(T), (K)>): $Reference2ByteFunction<(T)>
 "andThenShort"(arg0: $Byte2ShortFunction$$Type): $Reference2ShortFunction<(K)>
 "composeShort"(arg0: $Short2ReferenceFunction$$Type<(K)>): $Short2ByteFunction
 "composeFloat"(arg0: $Float2ReferenceFunction$$Type<(K)>): $Float2ByteFunction
 "andThenReference"<T>(arg0: $Byte2ReferenceFunction$$Type<(T)>): $Reference2ReferenceFunction<(K), (T)>
 "composeDouble"(arg0: $Double2ReferenceFunction$$Type<(K)>): $Double2ByteFunction
 "andThenByte"(arg0: $Byte2ByteFunction$$Type): $Reference2ByteFunction<(K)>
 "composeInt"(arg0: $Int2ReferenceFunction$$Type<(K)>): $Int2ByteFunction
 "andThenInt"(arg0: $Byte2IntFunction$$Type): $Reference2IntFunction<(K)>
 "removeByte"(arg0: any): byte
 "size"(): integer
 "clear"(): void
 "apply"(arg0: K): byte
 "containsKey"(arg0: any): boolean
static "identity"<T>(): $Function<(K), (K)>
 "compose"<V>(arg0: $Function$$Type<(V), (K)>): $Function<(V), (byte)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Reference2ByteFunction$$Type<K> = ((arg0: any) => byte);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Reference2ByteFunction$$Original<K> = $Reference2ByteFunction<(K)>;}
declare module "it.unimi.dsi.fastutil.objects.ObjectSortedSet" {
import {$Iterator} from "java.util.Iterator"
import {$ObjectBidirectionalIterator} from "it.unimi.dsi.fastutil.objects.ObjectBidirectionalIterator"
import {$Collection$$Type} from "java.util.Collection"
import {$SortedSet, $SortedSet$$Interface} from "java.util.SortedSet"
import {$Comparator} from "java.util.Comparator"
import {$Spliterator} from "java.util.Spliterator"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$ObjectBidirectionalIterable$$Interface} from "it.unimi.dsi.fastutil.objects.ObjectBidirectionalIterable"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$IntFunction$$Type} from "java.util.function.IntFunction"
import {$SequencedSet} from "java.util.SequencedSet"
import {$ObjectSet, $ObjectSet$$Interface} from "it.unimi.dsi.fastutil.objects.ObjectSet"
import {$Set} from "java.util.Set"
import {$Stream} from "java.util.stream.Stream"

export interface $ObjectSortedSet$$Interface<K> extends $ObjectSet$$Interface<(K)>, $SortedSet$$Interface<(K)>, $ObjectBidirectionalIterable$$Interface<(K)> {
[Symbol.iterator](): IterableIterator<K>;
get "empty"(): boolean
}

export class $ObjectSortedSet<K> implements $ObjectSortedSet$$Interface {
 "iterator"(): $Iterator
 "iterator"(arg0: K): $ObjectBidirectionalIterator<(K)>
 "spliterator"(): $Spliterator
 "subSet"(arg0: any, arg1: any): $SortedSet
 "headSet"(arg0: any): $SortedSet
 "tailSet"(arg0: any): $SortedSet
static "of"<K>(arg0: K, arg1: K): $ObjectSet<(K)>
static "of"<K>(...arg0: (K)[]): $ObjectSet<(K)>
static "of"<K>(arg0: K, arg1: K, arg2: K): $ObjectSet<(K)>
static "of"<K>(): $ObjectSet<(K)>
static "of"<K>(arg0: K): $ObjectSet<(K)>
 "last"(): K
 "first"(): K
 "getFirst"(): K
 "getLast"(): K
 "addFirst"(arg0: K): void
 "addLast"(arg0: K): void
 "removeFirst"(): K
 "removeLast"(): K
 "reversed"(): $SequencedSet
 "comparator"(): $Comparator<(K)>
 "remove"(arg0: any): boolean
 "size"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<E>(arg0: $Collection$$Type<(K)>): $Set<(K)>
 "clear"(): void
 "isEmpty"(): boolean
 "add"(arg0: K): boolean
 "toArray"(): (any)[]
 "toArray"<T>(arg0: (T)[]): (T)[]
static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K): $Set<(K)>
static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K): $Set<(K)>
static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K): $Set<(K)>
static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K, arg6: K, arg7: K, arg8: K, arg9: K): $Set<(K)>
static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K, arg6: K, arg7: K, arg8: K): $Set<(K)>
static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K, arg6: K, arg7: K): $Set<(K)>
static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K, arg6: K): $Set<(K)>
 "contains"(arg0: any): boolean
 "addAll"(arg0: $Collection$$Type<(K)>): boolean
 "removeAll"(arg0: $Collection$$Type<(never)>): boolean
 "retainAll"(arg0: $Collection$$Type<(never)>): boolean
 "containsAll"(arg0: $Collection$$Type<(never)>): boolean
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "stream"(): $Stream<(K)>
 "removeIf"(arg0: $Predicate$$Type<(K)>): boolean
 "parallelStream"(): $Stream<(K)>
 "forEach"(arg0: $Consumer$$Type<(K)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectSortedSet$$Type<K> = ($ObjectSortedSet<(K)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ObjectSortedSet$$Original<K> = $ObjectSortedSet<(K)>;}
declare module "it.unimi.dsi.fastutil.objects.ObjectLinkedOpenCustomHashSet" {
import {$Iterator$$Type} from "java.util.Iterator"
import {$ObjectBidirectionalIterator} from "it.unimi.dsi.fastutil.objects.ObjectBidirectionalIterator"
import {$Collection$$Type} from "java.util.Collection"
import {$AbstractObjectSortedSet} from "it.unimi.dsi.fastutil.objects.AbstractObjectSortedSet"
import {$SortedSet} from "java.util.SortedSet"
import {$Comparator} from "java.util.Comparator"
import {$Spliterator} from "java.util.Spliterator"
import {$Hash$$Interface} from "it.unimi.dsi.fastutil.Hash"
import {$ObjectIterator} from "it.unimi.dsi.fastutil.objects.ObjectIterator"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ObjectCollection$$Type} from "it.unimi.dsi.fastutil.objects.ObjectCollection"
import {$SequencedSet} from "java.util.SequencedSet"
import {$Hash$Strategy, $Hash$Strategy$$Type} from "it.unimi.dsi.fastutil.Hash$Strategy"
import {$ObjectSet} from "it.unimi.dsi.fastutil.objects.ObjectSet"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$ObjectSortedSet} from "it.unimi.dsi.fastutil.objects.ObjectSortedSet"
import {$Cloneable$$Interface} from "java.lang.Cloneable"
import {$Set} from "java.util.Set"

export class $ObjectLinkedOpenCustomHashSet<K> extends $AbstractObjectSortedSet<(K)> implements $Serializable$$Interface, $Cloneable$$Interface, $Hash$$Interface {
constructor(arg0: (K)[], arg1: integer, arg2: integer, arg3: float, arg4: $Hash$Strategy$$Type<(K)>)
constructor(arg0: $Iterator$$Type<(K)>, arg1: $Hash$Strategy$$Type<(K)>)
constructor(arg0: $Iterator$$Type<(K)>, arg1: float, arg2: $Hash$Strategy$$Type<(K)>)
constructor(arg0: $ObjectCollection$$Type<(K)>, arg1: $Hash$Strategy$$Type<(K)>)
constructor(arg0: (K)[], arg1: integer, arg2: integer, arg3: $Hash$Strategy$$Type<(K)>)
constructor(arg0: (K)[], arg1: float, arg2: $Hash$Strategy$$Type<(K)>)
constructor(arg0: (K)[], arg1: $Hash$Strategy$$Type<(K)>)
constructor(arg0: integer, arg1: float, arg2: $Hash$Strategy$$Type<(K)>)
constructor(arg0: integer, arg1: $Hash$Strategy$$Type<(K)>)
constructor(arg0: $Hash$Strategy$$Type<(K)>)
constructor(arg0: $ObjectCollection$$Type<(K)>, arg1: float, arg2: $Hash$Strategy$$Type<(K)>)
constructor(arg0: $Collection$$Type<(K)>, arg1: $Hash$Strategy$$Type<(K)>)
constructor(arg0: $Collection$$Type<(K)>, arg1: float, arg2: $Hash$Strategy$$Type<(K)>)

public "remove"(arg0: any): boolean
public "size"(): integer
public "get"(arg0: any): K
public "hashCode"(): integer
public "clone"(): $ObjectLinkedOpenCustomHashSet<(K)>
public "clear"(): void
public "isEmpty"(): boolean
public "add"(arg0: K): boolean
public "iterator"(): $ObjectIterator
public "iterator"(arg0: any): $ObjectBidirectionalIterator
public "trim"(arg0: integer): boolean
public "trim"(): boolean
public "contains"(arg0: any): boolean
public "last"(): K
public "spliterator"(): $Spliterator
public "addAll"(arg0: $Collection$$Type<(K)>): boolean
public "first"(): K
public "forEach"(arg0: $Consumer$$Type<(K)>): void
public "ensureCapacity"(arg0: integer): void
public "removeFirst"(): K
public "removeLast"(): K
public "comparator"(): $Comparator<(K)>
public "subSet"(arg0: any, arg1: any): $SortedSet
public "headSet"(arg0: any): $SortedSet
public "tailSet"(arg0: K): $ObjectSortedSet<(K)>
public "strategy"(): $Hash$Strategy<(K)>
public "addAndMoveToLast"(arg0: K): boolean
public "addAndMoveToFirst"(arg0: K): boolean
public "addOrGet"(arg0: K): K
public static "of"<K>(arg0: K, arg1: K): $ObjectSet<(K)>
public static "of"<K>(...arg0: (K)[]): $ObjectSet<(K)>
public static "of"<K>(arg0: K, arg1: K, arg2: K): $ObjectSet<(K)>
public static "of"<K>(): $ObjectSet<(K)>
public static "of"<K>(arg0: K): $ObjectSet<(K)>
public "reversed"(): $SequencedSet
public static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $Set<(E)>
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $Set<(E)>
public "removeAll"(arg0: $Collection$$Type<(never)>): boolean
public "retainAll"(arg0: $Collection$$Type<(never)>): boolean
public "containsAll"(arg0: $Collection$$Type<(never)>): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectLinkedOpenCustomHashSet$$Type<K> = ($ObjectLinkedOpenCustomHashSet<(K)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ObjectLinkedOpenCustomHashSet$$Original<K> = $ObjectLinkedOpenCustomHashSet<(K)>;}
declare module "it.unimi.dsi.fastutil.longs.Long2IntMap" {
import {$Object2IntFunction} from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import {$Long2CharFunction} from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import {$Reference2IntFunction} from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import {$Long2ByteFunction} from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import {$Long2IntFunction, $Long2IntFunction$$Type, $Long2IntFunction$$Interface} from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import {$LongFunction$$Type} from "java.util.function.LongFunction"
import {$Short2IntFunction} from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import {$Int2FloatFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import {$Byte2IntFunction} from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"
import {$IntBinaryOperator$$Type} from "java.util.function.IntBinaryOperator"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$Float2IntFunction} from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import {$Int2CharFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import {$Reference2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import {$Long2ShortFunction} from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import {$Int2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import {$Int2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$Int2IntFunction, $Int2IntFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Set} from "java.util.Set"
import {$Int2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import {$Long2IntMap$Entry} from "it.unimi.dsi.fastutil.longs.Long2IntMap$Entry"
import {$Map, $Map$$Type, $Map$$Interface} from "java.util.Map"
import {$IntBinaryOperator$$Type as $IntBinaryOperator$0$$Type} from "it.unimi.dsi.fastutil.ints.IntBinaryOperator"
import {$IntCollection} from "it.unimi.dsi.fastutil.ints.IntCollection"
import {$Long2DoubleFunction} from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import {$Long2LongFunction, $Long2LongFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import {$Int2ShortFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import {$Float2LongFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import {$LongToIntFunction$$Type} from "java.util.function.LongToIntFunction"
import {$Long2ReferenceFunction} from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import {$Byte2LongFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$Char2LongFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import {$Double2LongFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import {$Short2LongFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import {$ObjectSet} from "it.unimi.dsi.fastutil.objects.ObjectSet"
import {$Int2LongFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import {$Char2IntFunction} from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Long2FloatFunction} from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import {$Double2IntFunction} from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import {$Object2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import {$Int2ByteFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import {$Long2ObjectFunction} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"

export interface $Long2IntMap$$Interface extends $Long2IntFunction$$Interface, $Map$$Interface<(long), (integer)> {
[index: string | number]: integer
get "empty"(): boolean
}

export class $Long2IntMap implements $Long2IntMap$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): integer
 "remove"(arg0: long, arg1: integer): boolean
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any, arg1: any): boolean
 "size"(): integer
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): integer
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "put"(arg0: long, arg1: integer): integer
 "values"(): $IntCollection
 "clear"(): void
 "replace"(arg0: long, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "replace"(arg0: long, arg1: integer): integer
 "replace"(arg0: long, arg1: integer, arg2: integer): boolean
/**
 * 
 * @deprecated
 */
 "replace"(arg0: any, arg1: any, arg2: any): boolean
/**
 * 
 * @deprecated
 */
 "replace"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "replace"(arg0: long, arg1: integer, arg2: integer): boolean
 "merge"(arg0: long, arg1: integer, arg2: $BiFunction$$Type<(integer), (integer), (integer)>): integer
/**
 * 
 * @deprecated
 */
 "merge"(arg0: long, arg1: integer, arg2: $BiFunction$$Type<(integer), (integer), (integer)>): integer
/**
 * 
 * @deprecated
 */
 "merge"(arg0: any, arg1: any, arg2: $BiFunction$$Type): any
/**
 * 
 * @deprecated
 */
 "entrySet"(): $ObjectSet<($Map$Entry<(long), (integer)>)>
/**
 * 
 * @deprecated
 */
 "putIfAbsent"(arg0: long, arg1: integer): integer
 "putIfAbsent"(arg0: long, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "putIfAbsent"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "compute"(arg0: long, arg1: $BiFunction$$Type<(long), (integer), (integer)>): integer
/**
 * 
 * @deprecated
 */
 "compute"(arg0: any, arg1: $BiFunction$$Type): any
 "compute"(arg0: long, arg1: $BiFunction$$Type<(long), (integer), (integer)>): integer
 "forEach"(arg0: $BiConsumer$$Type<(long), (integer)>): void
 "containsKey"(arg0: long): boolean
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "computeIfAbsent"(arg0: long, arg1: $LongToIntFunction$$Type): integer
/**
 * 
 * @deprecated
 */
 "computeIfAbsent"(arg0: any, arg1: $Function$$Type): any
/**
 * 
 * @deprecated
 */
 "computeIfAbsent"(arg0: long, arg1: $Function$$Type<(long), (integer)>): integer
 "computeIfAbsent"(arg0: long, arg1: $Long2IntFunction$$Type): integer
 "keySet"(): $Set
 "containsValue"(arg0: integer): boolean
/**
 * 
 * @deprecated
 */
 "containsValue"(arg0: any): boolean
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
 "getOrDefault"(arg0: long, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: integer): integer
 "computeIfPresent"(arg0: long, arg1: $BiFunction$$Type<(long), (integer), (integer)>): integer
/**
 * 
 * @deprecated
 */
 "computeIfPresent"(arg0: any, arg1: $BiFunction$$Type): any
/**
 * 
 * @deprecated
 */
 "computeIfPresent"(arg0: long, arg1: $BiFunction$$Type<(long), (integer), (integer)>): integer
 "computeIfAbsentNullable"(arg0: long, arg1: $LongFunction$$Type<(integer)>): integer
/**
 * 
 * @deprecated
 */
 "computeIfAbsentPartial"(arg0: long, arg1: $Long2IntFunction$$Type): integer
 "defaultReturnValue"(arg0: integer): void
 "defaultReturnValue"(): integer
 "mergeInt"(arg0: long, arg1: integer, arg2: $IntBinaryOperator$$Type): integer
 "mergeInt"(arg0: long, arg1: integer, arg2: $IntBinaryOperator$0$$Type): integer
 "long2IntEntrySet"(): $ObjectSet<($Long2IntMap$Entry)>
 "remove"(arg0: long): integer
 "get"(arg0: long): integer
 "put"(arg0: long, arg1: integer): integer
 "applyAsInt"(arg0: long): integer
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (long)>): $Function<(T), (integer)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(integer), (T)>): $Function<(long), (T)>
 "andThenFloat"(arg0: $Int2FloatFunction$$Type): $Long2FloatFunction
 "andThenObject"<T>(arg0: $Int2ObjectFunction$$Type<(T)>): $Long2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2LongFunction$$Type): $Byte2IntFunction
 "andThenLong"(arg0: $Int2LongFunction$$Type): $Long2LongFunction
 "composeLong"(arg0: $Long2LongFunction$$Type): $Long2IntFunction
 "andThenChar"(arg0: $Int2CharFunction$$Type): $Long2CharFunction
 "andThenDouble"(arg0: $Int2DoubleFunction$$Type): $Long2DoubleFunction
 "composeObject"<T>(arg0: $Object2LongFunction$$Type<(T)>): $Object2IntFunction<(T)>
 "composeChar"(arg0: $Char2LongFunction$$Type): $Char2IntFunction
 "composeReference"<T>(arg0: $Reference2LongFunction$$Type<(T)>): $Reference2IntFunction<(T)>
 "andThenShort"(arg0: $Int2ShortFunction$$Type): $Long2ShortFunction
 "composeShort"(arg0: $Short2LongFunction$$Type): $Short2IntFunction
 "composeFloat"(arg0: $Float2LongFunction$$Type): $Float2IntFunction
 "andThenReference"<T>(arg0: $Int2ReferenceFunction$$Type<(T)>): $Long2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2LongFunction$$Type): $Double2IntFunction
 "andThenByte"(arg0: $Int2ByteFunction$$Type): $Long2ByteFunction
 "composeInt"(arg0: $Int2LongFunction$$Type): $Int2IntFunction
 "andThenInt"(arg0: $Int2IntFunction$$Type): $Long2IntFunction
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<K, V>(arg0: $Map$$Type<(long), (integer)>): $Map<(long), (integer)>
 "isEmpty"(): boolean
 "replaceAll"(arg0: $BiFunction$$Type<(long), (integer), (integer)>): void
static "of"<K, V>(arg0: long, arg1: integer, arg2: long, arg3: integer, arg4: long, arg5: integer, arg6: long, arg7: integer): $Map<(long), (integer)>
static "of"<K, V>(): $Map<(long), (integer)>
static "of"<K, V>(arg0: long, arg1: integer): $Map<(long), (integer)>
static "of"<K, V>(arg0: long, arg1: integer, arg2: long, arg3: integer): $Map<(long), (integer)>
static "of"<K, V>(arg0: long, arg1: integer, arg2: long, arg3: integer, arg4: long, arg5: integer): $Map<(long), (integer)>
static "of"<K, V>(arg0: long, arg1: integer, arg2: long, arg3: integer, arg4: long, arg5: integer, arg6: long, arg7: integer, arg8: long, arg9: integer, arg10: long, arg11: integer, arg12: long, arg13: integer, arg14: long, arg15: integer, arg16: long, arg17: integer, arg18: long, arg19: integer): $Map<(long), (integer)>
static "of"<K, V>(arg0: long, arg1: integer, arg2: long, arg3: integer, arg4: long, arg5: integer, arg6: long, arg7: integer, arg8: long, arg9: integer, arg10: long, arg11: integer, arg12: long, arg13: integer, arg14: long, arg15: integer, arg16: long, arg17: integer): $Map<(long), (integer)>
static "of"<K, V>(arg0: long, arg1: integer, arg2: long, arg3: integer, arg4: long, arg5: integer, arg6: long, arg7: integer, arg8: long, arg9: integer, arg10: long, arg11: integer, arg12: long, arg13: integer, arg14: long, arg15: integer): $Map<(long), (integer)>
static "of"<K, V>(arg0: long, arg1: integer, arg2: long, arg3: integer, arg4: long, arg5: integer, arg6: long, arg7: integer, arg8: long, arg9: integer, arg10: long, arg11: integer, arg12: long, arg13: integer): $Map<(long), (integer)>
static "of"<K, V>(arg0: long, arg1: integer, arg2: long, arg3: integer, arg4: long, arg5: integer, arg6: long, arg7: integer, arg8: long, arg9: integer, arg10: long, arg11: integer): $Map<(long), (integer)>
static "of"<K, V>(arg0: long, arg1: integer, arg2: long, arg3: integer, arg4: long, arg5: integer, arg6: long, arg7: integer, arg8: long, arg9: integer): $Map<(long), (integer)>
 "putAll"(arg0: $Map$$Type<(long), (integer)>): void
static "entry"<K, V>(arg0: long, arg1: integer): $Map$Entry<(long), (integer)>
static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(long), (integer)>)[]): $Map<(long), (integer)>
 "apply"(arg0: long): integer
static "identity"<T>(): $Function<(long), (long)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Long2IntMap$$Type = ($Long2IntMap);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Long2IntMap$$Original = $Long2IntMap;}
declare module "it.unimi.dsi.fastutil.longs.Long2ReferenceMap$FastEntrySet" {
import {$Iterator} from "java.util.Iterator"
import {$Long2ReferenceMap$Entry, $Long2ReferenceMap$Entry$$Type} from "it.unimi.dsi.fastutil.longs.Long2ReferenceMap$Entry"
import {$Collection$$Type} from "java.util.Collection"
import {$ObjectSet, $ObjectSet$$Interface} from "it.unimi.dsi.fastutil.objects.ObjectSet"
import {$Spliterator} from "java.util.Spliterator"
import {$ObjectIterator} from "it.unimi.dsi.fastutil.objects.ObjectIterator"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Set} from "java.util.Set"
import {$Stream} from "java.util.stream.Stream"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$IntFunction$$Type} from "java.util.function.IntFunction"

export interface $Long2ReferenceMap$FastEntrySet$$Interface<V> extends $ObjectSet$$Interface<($Long2ReferenceMap$Entry<(V)>)> {
get "empty"(): boolean
}

export class $Long2ReferenceMap$FastEntrySet<V> implements $Long2ReferenceMap$FastEntrySet$$Interface {
 "fastIterator"(): $ObjectIterator<($Long2ReferenceMap$Entry<(V)>)>
 "fastForEach"(arg0: $Consumer$$Type<($Long2ReferenceMap$Entry<(V)>)>): void
 "iterator"(): $Iterator
static "of"<K>(arg0: $Long2ReferenceMap$Entry$$Type<(V)>, arg1: $Long2ReferenceMap$Entry$$Type<(V)>): $ObjectSet<($Long2ReferenceMap$Entry<(V)>)>
static "of"<K>(...arg0: ($Long2ReferenceMap$Entry$$Type<(V)>)[]): $ObjectSet<($Long2ReferenceMap$Entry<(V)>)>
static "of"<K>(arg0: $Long2ReferenceMap$Entry$$Type<(V)>, arg1: $Long2ReferenceMap$Entry$$Type<(V)>, arg2: $Long2ReferenceMap$Entry$$Type<(V)>): $ObjectSet<($Long2ReferenceMap$Entry<(V)>)>
static "of"<K>(): $ObjectSet<($Long2ReferenceMap$Entry<(V)>)>
static "of"<K>(arg0: $Long2ReferenceMap$Entry$$Type<(V)>): $ObjectSet<($Long2ReferenceMap$Entry<(V)>)>
 "spliterator"(): $Spliterator
 "remove"(arg0: any): boolean
 "size"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<E>(arg0: $Collection$$Type<($Long2ReferenceMap$Entry$$Type<(V)>)>): $Set<($Long2ReferenceMap$Entry<(V)>)>
 "clear"(): void
 "isEmpty"(): boolean
 "add"(arg0: $Long2ReferenceMap$Entry$$Type<(V)>): boolean
 "toArray"(): (any)[]
 "toArray"<T>(arg0: (T)[]): (T)[]
static "of"<E>(arg0: $Long2ReferenceMap$Entry$$Type<(V)>, arg1: $Long2ReferenceMap$Entry$$Type<(V)>, arg2: $Long2ReferenceMap$Entry$$Type<(V)>, arg3: $Long2ReferenceMap$Entry$$Type<(V)>, arg4: $Long2ReferenceMap$Entry$$Type<(V)>, arg5: $Long2ReferenceMap$Entry$$Type<(V)>): $Set<($Long2ReferenceMap$Entry<(V)>)>
static "of"<E>(arg0: $Long2ReferenceMap$Entry$$Type<(V)>, arg1: $Long2ReferenceMap$Entry$$Type<(V)>, arg2: $Long2ReferenceMap$Entry$$Type<(V)>, arg3: $Long2ReferenceMap$Entry$$Type<(V)>, arg4: $Long2ReferenceMap$Entry$$Type<(V)>): $Set<($Long2ReferenceMap$Entry<(V)>)>
static "of"<E>(arg0: $Long2ReferenceMap$Entry$$Type<(V)>, arg1: $Long2ReferenceMap$Entry$$Type<(V)>, arg2: $Long2ReferenceMap$Entry$$Type<(V)>, arg3: $Long2ReferenceMap$Entry$$Type<(V)>): $Set<($Long2ReferenceMap$Entry<(V)>)>
static "of"<E>(arg0: $Long2ReferenceMap$Entry$$Type<(V)>, arg1: $Long2ReferenceMap$Entry$$Type<(V)>, arg2: $Long2ReferenceMap$Entry$$Type<(V)>, arg3: $Long2ReferenceMap$Entry$$Type<(V)>, arg4: $Long2ReferenceMap$Entry$$Type<(V)>, arg5: $Long2ReferenceMap$Entry$$Type<(V)>, arg6: $Long2ReferenceMap$Entry$$Type<(V)>, arg7: $Long2ReferenceMap$Entry$$Type<(V)>, arg8: $Long2ReferenceMap$Entry$$Type<(V)>, arg9: $Long2ReferenceMap$Entry$$Type<(V)>): $Set<($Long2ReferenceMap$Entry<(V)>)>
static "of"<E>(arg0: $Long2ReferenceMap$Entry$$Type<(V)>, arg1: $Long2ReferenceMap$Entry$$Type<(V)>, arg2: $Long2ReferenceMap$Entry$$Type<(V)>, arg3: $Long2ReferenceMap$Entry$$Type<(V)>, arg4: $Long2ReferenceMap$Entry$$Type<(V)>, arg5: $Long2ReferenceMap$Entry$$Type<(V)>, arg6: $Long2ReferenceMap$Entry$$Type<(V)>, arg7: $Long2ReferenceMap$Entry$$Type<(V)>, arg8: $Long2ReferenceMap$Entry$$Type<(V)>): $Set<($Long2ReferenceMap$Entry<(V)>)>
static "of"<E>(arg0: $Long2ReferenceMap$Entry$$Type<(V)>, arg1: $Long2ReferenceMap$Entry$$Type<(V)>, arg2: $Long2ReferenceMap$Entry$$Type<(V)>, arg3: $Long2ReferenceMap$Entry$$Type<(V)>, arg4: $Long2ReferenceMap$Entry$$Type<(V)>, arg5: $Long2ReferenceMap$Entry$$Type<(V)>, arg6: $Long2ReferenceMap$Entry$$Type<(V)>, arg7: $Long2ReferenceMap$Entry$$Type<(V)>): $Set<($Long2ReferenceMap$Entry<(V)>)>
static "of"<E>(arg0: $Long2ReferenceMap$Entry$$Type<(V)>, arg1: $Long2ReferenceMap$Entry$$Type<(V)>, arg2: $Long2ReferenceMap$Entry$$Type<(V)>, arg3: $Long2ReferenceMap$Entry$$Type<(V)>, arg4: $Long2ReferenceMap$Entry$$Type<(V)>, arg5: $Long2ReferenceMap$Entry$$Type<(V)>, arg6: $Long2ReferenceMap$Entry$$Type<(V)>): $Set<($Long2ReferenceMap$Entry<(V)>)>
 "contains"(arg0: any): boolean
 "addAll"(arg0: $Collection$$Type<($Long2ReferenceMap$Entry$$Type<(V)>)>): boolean
 "removeAll"(arg0: $Collection$$Type<(never)>): boolean
 "retainAll"(arg0: $Collection$$Type<(never)>): boolean
 "containsAll"(arg0: $Collection$$Type<(never)>): boolean
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "stream"(): $Stream<($Long2ReferenceMap$Entry<(V)>)>
 "removeIf"(arg0: $Predicate$$Type<($Long2ReferenceMap$Entry<(V)>)>): boolean
 "parallelStream"(): $Stream<($Long2ReferenceMap$Entry<(V)>)>
 "forEach"(arg0: $Consumer$$Type<($Long2ReferenceMap$Entry<(V)>)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Long2ReferenceMap$FastEntrySet$$Type<V> = ($Long2ReferenceMap$FastEntrySet<(V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Long2ReferenceMap$FastEntrySet$$Original<V> = $Long2ReferenceMap$FastEntrySet<(V)>;}
declare module "it.unimi.dsi.fastutil.objects.ObjectCollection" {
import {$Iterator} from "java.util.Iterator"
import {$ObjectSpliterator} from "it.unimi.dsi.fastutil.objects.ObjectSpliterator"
import {$Collection$$Type, $Collection$$Interface} from "java.util.Collection"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$ObjectIterable$$Interface} from "it.unimi.dsi.fastutil.objects.ObjectIterable"
import {$Stream} from "java.util.stream.Stream"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$IntFunction$$Type} from "java.util.function.IntFunction"

export interface $ObjectCollection$$Interface<K> extends $Collection$$Interface<(K)>, $ObjectIterable$$Interface<(K)> {
get "empty"(): boolean
}

export class $ObjectCollection<K> implements $ObjectCollection$$Interface {
 "iterator"(): $Iterator
 "spliterator"(): $ObjectSpliterator<(K)>
 "remove"(arg0: any): boolean
 "size"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "add"(arg0: K): boolean
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "toArray"(): (any)[]
 "stream"(): $Stream<(K)>
 "contains"(arg0: any): boolean
 "addAll"(arg0: $Collection$$Type<(K)>): boolean
 "removeIf"(arg0: $Predicate$$Type<(K)>): boolean
 "removeAll"(arg0: $Collection$$Type<(never)>): boolean
 "retainAll"(arg0: $Collection$$Type<(never)>): boolean
 "containsAll"(arg0: $Collection$$Type<(never)>): boolean
 "parallelStream"(): $Stream<(K)>
 "forEach"(arg0: $Consumer$$Type<(K)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectCollection$$Type<K> = ($ObjectCollection<(K)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ObjectCollection$$Original<K> = $ObjectCollection<(K)>;}
declare module "it.unimi.dsi.fastutil.ints.AbstractIntSet" {
import {$IntSet, $IntSet$$Interface} from "it.unimi.dsi.fastutil.ints.IntSet"
import {$IntIterator} from "it.unimi.dsi.fastutil.ints.IntIterator"
import {$Collection$$Type} from "java.util.Collection"
import {$AbstractIntCollection} from "it.unimi.dsi.fastutil.ints.AbstractIntCollection"
import {$Cloneable$$Interface} from "java.lang.Cloneable"
import {$Set} from "java.util.Set"
import {$IntSpliterator} from "it.unimi.dsi.fastutil.ints.IntSpliterator"

export class $AbstractIntSet extends $AbstractIntCollection implements $Cloneable$$Interface, $IntSet$$Interface {
public "remove"(arg0: integer): boolean
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "iterator"(): $IntIterator
/**
 * 
 * @deprecated
 */
public "rem"(arg0: integer): boolean
/**
 * 
 * @deprecated
 */
public "remove"(arg0: any): boolean
/**
 * 
 * @deprecated
 */
public "add"(arg0: integer): boolean
/**
 * 
 * @deprecated
 */
public "add"(arg0: any): boolean
public static "of"(arg0: integer, arg1: integer): $IntSet
public static "of"(): $IntSet
public static "of"(...arg0: (integer)[]): $IntSet
public static "of"(arg0: integer): $IntSet
public static "of"(arg0: integer, arg1: integer, arg2: integer): $IntSet
/**
 * 
 * @deprecated
 */
public "contains"(arg0: any): boolean
public "spliterator"(): $IntSpliterator
public "size"(): integer
public static "copyOf"<E>(arg0: $Collection$$Type<(integer)>): $Set<(integer)>
public "clear"(): void
public "isEmpty"(): boolean
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public static "of"<E>(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): $Set<(integer)>
public static "of"<E>(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $Set<(integer)>
public static "of"<E>(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $Set<(integer)>
public static "of"<E>(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer): $Set<(integer)>
public static "of"<E>(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer): $Set<(integer)>
public static "of"<E>(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer): $Set<(integer)>
public static "of"<E>(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): $Set<(integer)>
public static "of"<E>(...arg0: (integer)[]): $Set<(integer)>
public static "of"<E>(arg0: integer, arg1: integer, arg2: integer): $Set<(integer)>
public static "of"<E>(arg0: integer): $Set<(integer)>
public static "of"<E>(arg0: integer, arg1: integer): $Set<(integer)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractIntSet$$Type = ($AbstractIntSet);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractIntSet$$Original = $AbstractIntSet;}
declare module "it.unimi.dsi.fastutil.chars.Char2ShortFunction" {
import {$Char2DoubleFunction} from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import {$Long2CharFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import {$Short2IntFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import {$Reference2ShortFunction} from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import {$Int2CharFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import {$Long2ShortFunction} from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import {$Short2CharFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import {$Char2ObjectFunction} from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Short2ShortFunction, $Short2ShortFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ShortFunction"
import {$Byte2ShortFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import {$Float2CharFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import {$Byte2CharFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import {$Short2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import {$Object2CharFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Int2ShortFunction} from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import {$Float2ShortFunction} from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import {$Short2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import {$Char2CharFunction, $Char2CharFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2CharFunction"
import {$Double2CharFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import {$Char2LongFunction} from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import {$IntUnaryOperator, $IntUnaryOperator$$Type, $IntUnaryOperator$$Interface} from "java.util.function.IntUnaryOperator"
import {$Short2LongFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import {$Char2ByteFunction} from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import {$Reference2CharFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import {$Object2ShortFunction} from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import {$Short2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import {$Char2ReferenceFunction} from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import {$Char2IntFunction} from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import {$Char2FloatFunction} from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import {$Short2FloatFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import {$Short2ByteFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import {$Double2ShortFunction} from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"

export interface $Char2ShortFunction$$Interface extends $Function$0$$Interface<(character), (short)>, $IntUnaryOperator$$Interface {

(arg0: character): short
}

export class $Char2ShortFunction implements $Char2ShortFunction$$Interface {
 "remove"(arg0: character): short
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): short
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): short
 "get"(arg0: character): short
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: character, arg1: short): short
/**
 * 
 * @deprecated
 */
 "put"(arg0: character, arg1: short): short
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "containsKey"(arg0: character): boolean
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: short): short
 "getOrDefault"(arg0: character, arg1: short): short
/**
 * 
 * @deprecated
 */
 "applyAsInt"(arg0: integer): integer
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (character)>): $Function<(T), (short)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(short), (T)>): $Function<(character), (T)>
 "andThenFloat"(arg0: $Short2FloatFunction$$Type): $Char2FloatFunction
 "andThenObject"<T>(arg0: $Short2ObjectFunction$$Type<(T)>): $Char2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2CharFunction$$Type): $Byte2ShortFunction
 "andThenLong"(arg0: $Short2LongFunction$$Type): $Char2LongFunction
 "defaultReturnValue"(): short
 "defaultReturnValue"(arg0: short): void
 "composeLong"(arg0: $Long2CharFunction$$Type): $Long2ShortFunction
 "andThenChar"(arg0: $Short2CharFunction$$Type): $Char2CharFunction
 "andThenDouble"(arg0: $Short2DoubleFunction$$Type): $Char2DoubleFunction
 "composeObject"<T>(arg0: $Object2CharFunction$$Type<(T)>): $Object2ShortFunction<(T)>
 "composeChar"(arg0: $Char2CharFunction$$Type): $Char2ShortFunction
 "composeReference"<T>(arg0: $Reference2CharFunction$$Type<(T)>): $Reference2ShortFunction<(T)>
 "andThenShort"(arg0: $Short2ShortFunction$$Type): $Char2ShortFunction
 "composeShort"(arg0: $Short2CharFunction$$Type): $Short2ShortFunction
 "composeFloat"(arg0: $Float2CharFunction$$Type): $Float2ShortFunction
 "andThenReference"<T>(arg0: $Short2ReferenceFunction$$Type<(T)>): $Char2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2CharFunction$$Type): $Double2ShortFunction
 "andThenByte"(arg0: $Short2ByteFunction$$Type): $Char2ByteFunction
 "composeInt"(arg0: $Int2CharFunction$$Type): $Int2ShortFunction
 "andThenInt"(arg0: $Short2IntFunction$$Type): $Char2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: character): short
static "identity"(): $IntUnaryOperator
 "compose"(arg0: $IntUnaryOperator$$Type): $IntUnaryOperator
 "andThen"(arg0: $IntUnaryOperator$$Type): $IntUnaryOperator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Char2ShortFunction$$Type = ((arg0: character) => short);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Char2ShortFunction$$Original = $Char2ShortFunction;}
declare module "it.unimi.dsi.fastutil.longs.Long2LongFunction" {
import {$Long2CharFunction, $Long2CharFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Long2DoubleFunction, $Long2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import {$Long2IntFunction, $Long2IntFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import {$Long2ByteFunction, $Long2ByteFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import {$Float2LongFunction, $Float2LongFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import {$Long2ReferenceFunction, $Long2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import {$LongUnaryOperator, $LongUnaryOperator$$Type, $LongUnaryOperator$$Interface} from "java.util.function.LongUnaryOperator"
import {$Byte2LongFunction, $Byte2LongFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import {$Reference2LongFunction, $Reference2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import {$Char2LongFunction, $Char2LongFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import {$Long2ShortFunction, $Long2ShortFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import {$Double2LongFunction, $Double2LongFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import {$Short2LongFunction, $Short2LongFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import {$Int2LongFunction, $Int2LongFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Long2FloatFunction, $Long2FloatFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import {$Object2LongFunction, $Object2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import {$Long2ObjectFunction, $Long2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"

export interface $Long2LongFunction$$Interface extends $Function$0$$Interface<(long), (long)>, $LongUnaryOperator$$Interface {

(arg0: long): long
}

export class $Long2LongFunction implements $Long2LongFunction$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): any
 "remove"(arg0: long): long
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): long
 "get"(arg0: long): long
/**
 * 
 * @deprecated
 */
 "put"(arg0: long, arg1: long): long
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: long, arg1: long): long
static "identity"(): $Long2LongFunction
 "containsKey"(arg0: long): boolean
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "getOrDefault"(arg0: long, arg1: long): long
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: long): long
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
 "applyAsLong"(arg0: long): long
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (long)>): $Function<(T), (long)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(long), (T)>): $Function<(long), (T)>
 "andThenFloat"(arg0: $Long2FloatFunction$$Type): $Long2FloatFunction
 "andThenObject"<T>(arg0: $Long2ObjectFunction$$Type<(T)>): $Long2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2LongFunction$$Type): $Byte2LongFunction
 "andThenLong"(arg0: $Long2LongFunction$$Type): $Long2LongFunction
 "defaultReturnValue"(): long
 "defaultReturnValue"(arg0: long): void
 "composeLong"(arg0: $Long2LongFunction$$Type): $Long2LongFunction
 "andThenChar"(arg0: $Long2CharFunction$$Type): $Long2CharFunction
 "andThenDouble"(arg0: $Long2DoubleFunction$$Type): $Long2DoubleFunction
 "composeObject"<T>(arg0: $Object2LongFunction$$Type<(T)>): $Object2LongFunction<(T)>
 "composeChar"(arg0: $Char2LongFunction$$Type): $Char2LongFunction
 "composeReference"<T>(arg0: $Reference2LongFunction$$Type<(T)>): $Reference2LongFunction<(T)>
 "andThenShort"(arg0: $Long2ShortFunction$$Type): $Long2ShortFunction
 "composeShort"(arg0: $Short2LongFunction$$Type): $Short2LongFunction
 "composeFloat"(arg0: $Float2LongFunction$$Type): $Float2LongFunction
 "andThenReference"<T>(arg0: $Long2ReferenceFunction$$Type<(T)>): $Long2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2LongFunction$$Type): $Double2LongFunction
 "andThenByte"(arg0: $Long2ByteFunction$$Type): $Long2ByteFunction
 "composeInt"(arg0: $Int2LongFunction$$Type): $Int2LongFunction
 "andThenInt"(arg0: $Long2IntFunction$$Type): $Long2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: long): long
 "compose"(arg0: $LongUnaryOperator$$Type): $LongUnaryOperator
 "andThen"(arg0: $LongUnaryOperator$$Type): $LongUnaryOperator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Long2LongFunction$$Type = ((arg0: long) => long);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Long2LongFunction$$Original = $Long2LongFunction;}
declare module "it.unimi.dsi.fastutil.ints.Int2ShortFunction" {
import {$Object2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import {$Reference2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import {$Long2IntFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import {$Short2IntFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import {$Int2FloatFunction} from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import {$Byte2IntFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"
import {$Reference2ShortFunction} from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import {$Float2IntFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import {$Int2CharFunction} from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import {$Long2ShortFunction} from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import {$Short2CharFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import {$Int2ReferenceFunction} from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import {$Int2ObjectFunction} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$Char2ShortFunction} from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import {$Int2IntFunction, $Int2IntFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Short2ShortFunction, $Short2ShortFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ShortFunction"
import {$Byte2ShortFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import {$Int2DoubleFunction} from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import {$Short2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Float2ShortFunction} from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import {$Short2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import {$IntUnaryOperator, $IntUnaryOperator$$Type, $IntUnaryOperator$$Interface} from "java.util.function.IntUnaryOperator"
import {$Short2LongFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import {$Int2LongFunction} from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import {$Object2ShortFunction} from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import {$Short2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import {$Char2IntFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import {$Double2IntFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import {$Short2FloatFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import {$Short2ByteFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import {$Int2ByteFunction} from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import {$Double2ShortFunction} from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"

export interface $Int2ShortFunction$$Interface extends $Function$0$$Interface<(integer), (short)>, $IntUnaryOperator$$Interface {

(arg0: integer): short
}

export class $Int2ShortFunction implements $Int2ShortFunction$$Interface {
 "remove"(arg0: integer): short
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): short
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): short
 "get"(arg0: integer): short
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: integer, arg1: short): short
/**
 * 
 * @deprecated
 */
 "put"(arg0: integer, arg1: short): short
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "containsKey"(arg0: integer): boolean
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: short): short
 "getOrDefault"(arg0: integer, arg1: short): short
 "applyAsInt"(arg0: integer): integer
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (integer)>): $Function<(T), (short)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(short), (T)>): $Function<(integer), (T)>
 "andThenFloat"(arg0: $Short2FloatFunction$$Type): $Int2FloatFunction
 "andThenObject"<T>(arg0: $Short2ObjectFunction$$Type<(T)>): $Int2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2IntFunction$$Type): $Byte2ShortFunction
 "andThenLong"(arg0: $Short2LongFunction$$Type): $Int2LongFunction
 "defaultReturnValue"(): short
 "defaultReturnValue"(arg0: short): void
 "composeLong"(arg0: $Long2IntFunction$$Type): $Long2ShortFunction
 "andThenChar"(arg0: $Short2CharFunction$$Type): $Int2CharFunction
 "andThenDouble"(arg0: $Short2DoubleFunction$$Type): $Int2DoubleFunction
 "composeObject"<T>(arg0: $Object2IntFunction$$Type<(T)>): $Object2ShortFunction<(T)>
 "composeChar"(arg0: $Char2IntFunction$$Type): $Char2ShortFunction
 "composeReference"<T>(arg0: $Reference2IntFunction$$Type<(T)>): $Reference2ShortFunction<(T)>
 "andThenShort"(arg0: $Short2ShortFunction$$Type): $Int2ShortFunction
 "composeShort"(arg0: $Short2IntFunction$$Type): $Short2ShortFunction
 "composeFloat"(arg0: $Float2IntFunction$$Type): $Float2ShortFunction
 "andThenReference"<T>(arg0: $Short2ReferenceFunction$$Type<(T)>): $Int2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2IntFunction$$Type): $Double2ShortFunction
 "andThenByte"(arg0: $Short2ByteFunction$$Type): $Int2ByteFunction
 "composeInt"(arg0: $Int2IntFunction$$Type): $Int2ShortFunction
 "andThenInt"(arg0: $Short2IntFunction$$Type): $Int2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: integer): short
static "identity"(): $IntUnaryOperator
 "compose"(arg0: $IntUnaryOperator$$Type): $IntUnaryOperator
 "andThen"(arg0: $IntUnaryOperator$$Type): $IntUnaryOperator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Int2ShortFunction$$Type = ((arg0: integer) => short);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Int2ShortFunction$$Original = $Int2ShortFunction;}
declare module "it.unimi.dsi.fastutil.ints.IntIterator" {
import {$IntConsumer$$Type as $IntConsumer$0$$Type} from "java.util.function.IntConsumer"
import {$PrimitiveIterator$OfInt$$Interface} from "java.util.PrimitiveIterator$OfInt"
import {$IntConsumer$$Type} from "it.unimi.dsi.fastutil.ints.IntConsumer"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $IntIterator$$Interface extends $PrimitiveIterator$OfInt$$Interface {
}

export class $IntIterator implements $IntIterator$$Interface {
/**
 * 
 * @deprecated
 */
 "forEachRemaining"(arg0: $Consumer$$Type<(integer)>): void
 "forEachRemaining"(arg0: $IntConsumer$$Type): void
/**
 * 
 * @deprecated
 */
 "next"(): any
 "skip"(arg0: integer): integer
 "nextInt"(): integer
 "forEachRemaining"(arg0: any): void
 "forEachRemaining"(arg0: $IntConsumer$0$$Type): void
 "remove"(): void
 "hasNext"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntIterator$$Type = ($IntIterator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntIterator$$Original = $IntIterator;}
declare module "it.unimi.dsi.fastutil.shorts.ShortUnaryOperator" {
import {$UnaryOperator$$Interface} from "java.util.function.UnaryOperator"
import {$IntUnaryOperator, $IntUnaryOperator$$Type, $IntUnaryOperator$$Interface} from "java.util.function.IntUnaryOperator"
import {$Function, $Function$$Type} from "java.util.function.Function"

export interface $ShortUnaryOperator$$Interface extends $UnaryOperator$$Interface<(short)>, $IntUnaryOperator$$Interface {

(arg0: short): short
}

export class $ShortUnaryOperator implements $ShortUnaryOperator$$Interface {
static "negation"(): $ShortUnaryOperator
/**
 * 
 * @deprecated
 */
 "apply"(arg0: short): short
/**
 * 
 * @deprecated
 */
 "apply"(arg0: any): any
 "apply"(arg0: short): short
static "identity"(): $ShortUnaryOperator
/**
 * 
 * @deprecated
 */
 "applyAsInt"(arg0: integer): integer
 "compose"(arg0: $IntUnaryOperator$$Type): $IntUnaryOperator
 "andThen"(arg0: $IntUnaryOperator$$Type): $IntUnaryOperator
 "compose"<V>(arg0: $Function$$Type<(V), (short)>): $Function<(V), (short)>
 "andThen"<V>(arg0: $Function$$Type<(short), (V)>): $Function<(short), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShortUnaryOperator$$Type = ((arg0: short) => short);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShortUnaryOperator$$Original = $ShortUnaryOperator;}
declare module "it.unimi.dsi.fastutil.bytes.Byte2LongFunction" {
import {$Byte2ByteFunction, $Byte2ByteFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction"
import {$Float2ByteFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import {$Byte2DoubleFunction} from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import {$Long2CharFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import {$Long2IntFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import {$Long2ByteFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import {$Byte2IntFunction} from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"
import {$Reference2LongFunction} from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import {$Long2ShortFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import {$Reference2ByteFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import {$Byte2ReferenceFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Byte2ObjectFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import {$Byte2ShortFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import {$Byte2CharFunction} from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Long2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import {$Long2LongFunction, $Long2LongFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import {$Float2LongFunction} from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import {$Object2ByteFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import {$Long2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import {$Char2LongFunction} from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import {$Double2LongFunction} from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import {$IntToLongFunction$$Interface} from "java.util.function.IntToLongFunction"
import {$Short2LongFunction} from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import {$Char2ByteFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import {$Double2ByteFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import {$Int2LongFunction} from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import {$Long2FloatFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import {$Object2LongFunction} from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import {$Byte2FloatFunction} from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import {$Short2ByteFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import {$Int2ByteFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import {$Long2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"

export interface $Byte2LongFunction$$Interface extends $Function$0$$Interface<(byte), (long)>, $IntToLongFunction$$Interface {

(arg0: byte): long
}

export class $Byte2LongFunction implements $Byte2LongFunction$$Interface {
 "remove"(arg0: byte): long
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): long
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): long
 "get"(arg0: byte): long
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: byte, arg1: long): long
/**
 * 
 * @deprecated
 */
 "put"(arg0: byte, arg1: long): long
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "containsKey"(arg0: byte): boolean
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: long): long
 "getOrDefault"(arg0: byte, arg1: long): long
/**
 * 
 * @deprecated
 */
 "applyAsLong"(arg0: integer): long
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (byte)>): $Function<(T), (long)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(long), (T)>): $Function<(byte), (T)>
 "andThenFloat"(arg0: $Long2FloatFunction$$Type): $Byte2FloatFunction
 "andThenObject"<T>(arg0: $Long2ObjectFunction$$Type<(T)>): $Byte2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2ByteFunction$$Type): $Byte2LongFunction
 "andThenLong"(arg0: $Long2LongFunction$$Type): $Byte2LongFunction
 "defaultReturnValue"(): long
 "defaultReturnValue"(arg0: long): void
 "composeLong"(arg0: $Long2ByteFunction$$Type): $Long2LongFunction
 "andThenChar"(arg0: $Long2CharFunction$$Type): $Byte2CharFunction
 "andThenDouble"(arg0: $Long2DoubleFunction$$Type): $Byte2DoubleFunction
 "composeObject"<T>(arg0: $Object2ByteFunction$$Type<(T)>): $Object2LongFunction<(T)>
 "composeChar"(arg0: $Char2ByteFunction$$Type): $Char2LongFunction
 "composeReference"<T>(arg0: $Reference2ByteFunction$$Type<(T)>): $Reference2LongFunction<(T)>
 "andThenShort"(arg0: $Long2ShortFunction$$Type): $Byte2ShortFunction
 "composeShort"(arg0: $Short2ByteFunction$$Type): $Short2LongFunction
 "composeFloat"(arg0: $Float2ByteFunction$$Type): $Float2LongFunction
 "andThenReference"<T>(arg0: $Long2ReferenceFunction$$Type<(T)>): $Byte2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2ByteFunction$$Type): $Double2LongFunction
 "andThenByte"(arg0: $Long2ByteFunction$$Type): $Byte2ByteFunction
 "composeInt"(arg0: $Int2ByteFunction$$Type): $Int2LongFunction
 "andThenInt"(arg0: $Long2IntFunction$$Type): $Byte2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: byte): long
static "identity"<T>(): $Function<(byte), (byte)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Byte2LongFunction$$Type = ((arg0: byte) => long);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Byte2LongFunction$$Original = $Byte2LongFunction;}
declare module "it.unimi.dsi.fastutil.objects.Object2LongMap$Entry" {
import {$Comparable} from "java.lang.Comparable"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$Map$Entry, $Map$Entry$$Type, $Map$Entry$$Interface} from "java.util.Map$Entry"

export interface $Object2LongMap$Entry$$Interface<K> extends $Map$Entry$$Interface<(K), (long)> {
get "value"(): long
set "value"(value: any)
set "value"(value: long)
set "value"(value: long)
get "longValue"(): long
get "key"(): K
}

export class $Object2LongMap$Entry<K> implements $Object2LongMap$Entry$$Interface {
/**
 * 
 * @deprecated
 */
 "getValue"(): long
/**
 * 
 * @deprecated
 */
 "setValue"(arg0: any): any
/**
 * 
 * @deprecated
 */
 "setValue"(arg0: long): long
 "setValue"(arg0: long): long
 "getLongValue"(): long
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<K, V>(arg0: $Map$Entry$$Type<(K), (long)>): $Map$Entry<(K), (long)>
 "getKey"(): K
static "comparingByKey"<K, V>(arg0: $Comparator$$Type<(K)>): $Comparator<($Map$Entry<(K), (long)>)>
static "comparingByKey"<K extends $Comparable<(object)>, V>(): $Comparator<($Map$Entry<(K), (long)>)>
static "comparingByValue"<K, V extends $Comparable<(object)>>(): $Comparator<($Map$Entry<(K), (long)>)>
static "comparingByValue"<K, V>(arg0: $Comparator$$Type<(long)>): $Comparator<($Map$Entry<(K), (long)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Object2LongMap$Entry$$Type<K> = ($Object2LongMap$Entry<(K)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Object2LongMap$Entry$$Original<K> = $Object2LongMap$Entry<(K)>;}
declare module "it.unimi.dsi.fastutil.floats.Float2LongFunction" {
import {$Float2ReferenceFunction} from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import {$Float2ByteFunction} from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import {$Long2CharFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import {$Long2IntFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import {$Long2ByteFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import {$Int2FloatFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import {$Reference2LongFunction} from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import {$Float2IntFunction} from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import {$Double2FloatFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import {$Long2ShortFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Object2FloatFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import {$Float2CharFunction} from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Long2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import {$Long2LongFunction, $Long2LongFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import {$Float2ShortFunction} from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import {$Long2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import {$Byte2LongFunction} from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import {$Reference2FloatFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import {$Char2LongFunction} from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import {$Float2ObjectFunction} from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import {$Double2LongFunction} from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import {$Short2LongFunction} from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import {$Float2FloatFunction, $Float2FloatFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2FloatFunction"
import {$Int2LongFunction} from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import {$Long2FloatFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import {$Char2FloatFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import {$Short2FloatFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import {$Object2LongFunction} from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import {$Byte2FloatFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import {$Float2DoubleFunction} from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import {$Long2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import {$DoubleToLongFunction$$Interface} from "java.util.function.DoubleToLongFunction"

export interface $Float2LongFunction$$Interface extends $Function$0$$Interface<(float), (long)>, $DoubleToLongFunction$$Interface {

(arg0: float): long
}

export class $Float2LongFunction implements $Float2LongFunction$$Interface {
 "remove"(arg0: float): long
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): long
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): long
 "get"(arg0: float): long
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: float, arg1: long): long
/**
 * 
 * @deprecated
 */
 "put"(arg0: float, arg1: long): long
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "containsKey"(arg0: float): boolean
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: long): long
 "getOrDefault"(arg0: float, arg1: long): long
/**
 * 
 * @deprecated
 */
 "applyAsLong"(arg0: double): long
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (float)>): $Function<(T), (long)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(long), (T)>): $Function<(float), (T)>
 "andThenFloat"(arg0: $Long2FloatFunction$$Type): $Float2FloatFunction
 "andThenObject"<T>(arg0: $Long2ObjectFunction$$Type<(T)>): $Float2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2FloatFunction$$Type): $Byte2LongFunction
 "andThenLong"(arg0: $Long2LongFunction$$Type): $Float2LongFunction
 "defaultReturnValue"(): long
 "defaultReturnValue"(arg0: long): void
 "composeLong"(arg0: $Long2FloatFunction$$Type): $Long2LongFunction
 "andThenChar"(arg0: $Long2CharFunction$$Type): $Float2CharFunction
 "andThenDouble"(arg0: $Long2DoubleFunction$$Type): $Float2DoubleFunction
 "composeObject"<T>(arg0: $Object2FloatFunction$$Type<(T)>): $Object2LongFunction<(T)>
 "composeChar"(arg0: $Char2FloatFunction$$Type): $Char2LongFunction
 "composeReference"<T>(arg0: $Reference2FloatFunction$$Type<(T)>): $Reference2LongFunction<(T)>
 "andThenShort"(arg0: $Long2ShortFunction$$Type): $Float2ShortFunction
 "composeShort"(arg0: $Short2FloatFunction$$Type): $Short2LongFunction
 "composeFloat"(arg0: $Float2FloatFunction$$Type): $Float2LongFunction
 "andThenReference"<T>(arg0: $Long2ReferenceFunction$$Type<(T)>): $Float2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2FloatFunction$$Type): $Double2LongFunction
 "andThenByte"(arg0: $Long2ByteFunction$$Type): $Float2ByteFunction
 "composeInt"(arg0: $Int2FloatFunction$$Type): $Int2LongFunction
 "andThenInt"(arg0: $Long2IntFunction$$Type): $Float2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: float): long
static "identity"<T>(): $Function<(float), (float)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Float2LongFunction$$Type = ((arg0: float) => long);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Float2LongFunction$$Original = $Float2LongFunction;}
declare module "it.unimi.dsi.fastutil.ints.IntComparator" {
import {$ToIntFunction$$Type} from "java.util.function.ToIntFunction"
import {$ToLongFunction$$Type} from "java.util.function.ToLongFunction"
import {$ToDoubleFunction$$Type} from "java.util.function.ToDoubleFunction"
import {$Comparable} from "java.lang.Comparable"
import {$Comparator, $Comparator$$Type, $Comparator$$Interface} from "java.util.Comparator"
import {$Function$$Type} from "java.util.function.Function"

export interface $IntComparator$$Interface extends $Comparator$$Interface<(integer)> {
}

export class $IntComparator implements $IntComparator$$Interface {
/**
 * 
 * @deprecated
 */
 "compare"(arg0: any, arg1: any): integer
/**
 * 
 * @deprecated
 */
 "compare"(arg0: integer, arg1: integer): integer
 "compare"(arg0: integer, arg1: integer): integer
 "reversed"(): $IntComparator
 "thenComparing"(arg0: $Comparator$$Type<(integer)>): $Comparator<(integer)>
 "thenComparing"(arg0: $IntComparator$$Type): $IntComparator
 "equals"(arg0: any): boolean
static "reverseOrder"<T extends $Comparable<(object)>>(): $Comparator<(integer)>
static "comparing"<T, U extends $Comparable<(object)>>(arg0: $Function$$Type<(integer), (U)>): $Comparator<(integer)>
static "comparing"<T, U>(arg0: $Function$$Type<(integer), (U)>, arg1: $Comparator$$Type<(U)>): $Comparator<(integer)>
 "thenComparing"<U>(arg0: $Function$$Type<(integer), (U)>, arg1: $Comparator$$Type<(U)>): $Comparator<(integer)>
 "thenComparing"<U extends $Comparable<(object)>>(arg0: $Function$$Type<(integer), (U)>): $Comparator<(integer)>
static "comparingInt"<T>(arg0: $ToIntFunction$$Type<(integer)>): $Comparator<(integer)>
static "comparingLong"<T>(arg0: $ToLongFunction$$Type<(integer)>): $Comparator<(integer)>
static "comparingDouble"<T>(arg0: $ToDoubleFunction$$Type<(integer)>): $Comparator<(integer)>
 "thenComparingInt"(arg0: $ToIntFunction$$Type<(integer)>): $Comparator<(integer)>
 "thenComparingLong"(arg0: $ToLongFunction$$Type<(integer)>): $Comparator<(integer)>
 "thenComparingDouble"(arg0: $ToDoubleFunction$$Type<(integer)>): $Comparator<(integer)>
static "naturalOrder"<T extends $Comparable<(object)>>(): $Comparator<(integer)>
static "nullsFirst"<T>(arg0: $Comparator$$Type<(integer)>): $Comparator<(integer)>
static "nullsLast"<T>(arg0: $Comparator$$Type<(integer)>): $Comparator<(integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntComparator$$Type = ($IntComparator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntComparator$$Original = $IntComparator;}
declare module "it.unimi.dsi.fastutil.Hash" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Hash$$Interface {
}

export class $Hash implements $Hash$$Interface {
/**
 * 
 * @deprecated
 */
static readonly "DEFAULT_GROWTH_FACTOR": integer
static readonly "FAST_LOAD_FACTOR": float
static readonly "DEFAULT_INITIAL_SIZE": integer
static readonly "DEFAULT_LOAD_FACTOR": float
/**
 * 
 * @deprecated
 */
static readonly "OCCUPIED": byte
static readonly "VERY_FAST_LOAD_FACTOR": float
/**
 * 
 * @deprecated
 */
static readonly "FREE": byte
/**
 * 
 * @deprecated
 */
static readonly "PRIMES": (integer)[]
/**
 * 
 * @deprecated
 */
static readonly "REMOVED": byte

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Hash$$Type = ($Hash);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Hash$$Original = $Hash;}
declare module "it.unimi.dsi.fastutil.objects.Object2ByteSortedMap" {
import {$Float2ByteFunction} from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import {$Byte2IntFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$Reference2ByteFunction} from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import {$Byte2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import {$Char2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import {$Object2FloatFunction} from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import {$Byte2CharFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import {$Comparator} from "java.util.Comparator"
import {$Object2ByteFunction, $Object2ByteFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$Char2ByteFunction} from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import {$Object2ShortFunction} from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import {$Object2ReferenceFunction} from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import {$Short2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import {$ObjectSortedSet} from "it.unimi.dsi.fastutil.objects.ObjectSortedSet"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Byte2FloatFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import {$Short2ByteFunction} from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import {$Int2ByteFunction} from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import {$Long2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import {$Byte2ByteFunction, $Byte2ByteFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction"
import {$Byte2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import {$Object2IntFunction} from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import {$Long2ByteFunction} from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import {$Object2ObjectFunction, $Object2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import {$IntBinaryOperator$$Type} from "java.util.function.IntBinaryOperator"
import {$Int2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$Object2DoubleFunction} from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Byte2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import {$Byte2ShortFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import {$SortedMap, $SortedMap$$Interface} from "java.util.SortedMap"
import {$Object2ByteMap$Entry} from "it.unimi.dsi.fastutil.objects.Object2ByteMap$Entry"
import {$ByteBinaryOperator$$Type} from "it.unimi.dsi.fastutil.bytes.ByteBinaryOperator"
import {$Reference2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Collection} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Object2CharFunction} from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import {$SequencedCollection} from "java.util.SequencedCollection"
import {$Byte2LongFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import {$ToIntFunction$$Type} from "java.util.function.ToIntFunction"
import {$Float2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import {$SequencedSet} from "java.util.SequencedSet"
import {$Double2ByteFunction} from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import {$ObjectSet} from "it.unimi.dsi.fastutil.objects.ObjectSet"
import {$Object2ByteMap$$Interface} from "it.unimi.dsi.fastutil.objects.Object2ByteMap"
import {$Object2LongFunction} from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import {$Double2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"

export interface $Object2ByteSortedMap$$Interface<K> extends $Object2ByteMap$$Interface<(K)>, $SortedMap$$Interface<(K), (byte)> {
[index: string | number]: byte
get "empty"(): boolean
}

export class $Object2ByteSortedMap<K> implements $Object2ByteSortedMap$$Interface {
 "values"(): $Collection
/**
 * 
 * @deprecated
 */
 "entrySet"(): $ObjectSet
 "keySet"(): $ObjectSet
 "comparator"(): $Comparator<(K)>
 "subMap"(arg0: any, arg1: any): $SortedMap
 "headMap"(arg0: any): $SortedMap
 "tailMap"(arg0: any): $SortedMap
 "object2ByteEntrySet"(): $ObjectSortedSet<($Object2ByteMap$Entry<(K)>)>
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any, arg1: any): boolean
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): any
 "remove"(arg0: any, arg1: byte): boolean
 "size"(): integer
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): byte
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "put"(arg0: K, arg1: byte): byte
 "clear"(): void
 "replace"(arg0: K, arg1: byte): byte
 "replace"(arg0: K, arg1: byte, arg2: byte): boolean
/**
 * 
 * @deprecated
 */
 "replace"(arg0: K, arg1: byte): byte
/**
 * 
 * @deprecated
 */
 "replace"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "replace"(arg0: K, arg1: byte, arg2: byte): boolean
/**
 * 
 * @deprecated
 */
 "replace"(arg0: any, arg1: any, arg2: any): boolean
/**
 * 
 * @deprecated
 */
 "merge"(arg0: any, arg1: any, arg2: $BiFunction$$Type): any
/**
 * 
 * @deprecated
 */
 "merge"(arg0: K, arg1: byte, arg2: $BiFunction$$Type<(byte), (byte), (byte)>): byte
 "merge"(arg0: K, arg1: byte, arg2: $BiFunction$$Type<(byte), (byte), (byte)>): byte
 "putIfAbsent"(arg0: K, arg1: byte): byte
/**
 * 
 * @deprecated
 */
 "putIfAbsent"(arg0: K, arg1: byte): byte
/**
 * 
 * @deprecated
 */
 "putIfAbsent"(arg0: any, arg1: any): any
 "forEach"(arg0: $BiConsumer$$Type<(K), (byte)>): void
 "containsKey"(arg0: any): boolean
 "computeIfAbsent"(arg0: K, arg1: $ToIntFunction$$Type<(K)>): byte
 "computeIfAbsent"(arg0: K, arg1: $Object2ByteFunction$$Type<(K)>): byte
/**
 * 
 * @deprecated
 */
 "containsValue"(arg0: any): boolean
 "containsValue"(arg0: byte): boolean
 "getOrDefault"(arg0: any, arg1: byte): byte
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: byte): byte
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "computeByteIfAbsentPartial"(arg0: K, arg1: $Object2ByteFunction$$Type<(K)>): byte
 "computeByteIfPresent"(arg0: K, arg1: $BiFunction$$Type<(K), (byte), (byte)>): byte
/**
 * 
 * @deprecated
 */
 "computeByteIfAbsent"(arg0: K, arg1: $ToIntFunction$$Type<(K)>): byte
 "computeByte"(arg0: K, arg1: $BiFunction$$Type<(K), (byte), (byte)>): byte
 "defaultReturnValue"(): byte
 "defaultReturnValue"(arg0: byte): void
 "mergeByte"(arg0: K, arg1: byte, arg2: $IntBinaryOperator$$Type): byte
 "mergeByte"(arg0: K, arg1: byte, arg2: $ByteBinaryOperator$$Type): byte
/**
 * 
 * @deprecated
 */
 "mergeByte"(arg0: K, arg1: byte, arg2: $BiFunction$$Type<(byte), (byte), (byte)>): byte
 "reversed"(): $SortedMap<(K), (byte)>
 "firstKey"(): K
 "putFirst"(arg0: K, arg1: byte): byte
 "putLast"(arg0: K, arg1: byte): byte
 "lastKey"(): K
 "put"(arg0: K, arg1: byte): byte
 "getByte"(arg0: any): byte
 "applyAsInt"(arg0: K): integer
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(byte), (T)>): $Function<(K), (T)>
 "andThenFloat"(arg0: $Byte2FloatFunction$$Type): $Object2FloatFunction<(K)>
 "andThenObject"<T>(arg0: $Byte2ObjectFunction$$Type<(T)>): $Object2ObjectFunction<(K), (T)>
 "composeByte"(arg0: $Byte2ObjectFunction$$Type<(K)>): $Byte2ByteFunction
 "andThenLong"(arg0: $Byte2LongFunction$$Type): $Object2LongFunction<(K)>
 "composeLong"(arg0: $Long2ObjectFunction$$Type<(K)>): $Long2ByteFunction
 "andThenChar"(arg0: $Byte2CharFunction$$Type): $Object2CharFunction<(K)>
 "andThenDouble"(arg0: $Byte2DoubleFunction$$Type): $Object2DoubleFunction<(K)>
 "composeObject"<T>(arg0: $Object2ObjectFunction$$Type<(T), (K)>): $Object2ByteFunction<(T)>
 "composeChar"(arg0: $Char2ObjectFunction$$Type<(K)>): $Char2ByteFunction
 "composeReference"<T>(arg0: $Reference2ObjectFunction$$Type<(T), (K)>): $Reference2ByteFunction<(T)>
 "andThenShort"(arg0: $Byte2ShortFunction$$Type): $Object2ShortFunction<(K)>
 "composeShort"(arg0: $Short2ObjectFunction$$Type<(K)>): $Short2ByteFunction
 "composeFloat"(arg0: $Float2ObjectFunction$$Type<(K)>): $Float2ByteFunction
 "andThenReference"<T>(arg0: $Byte2ReferenceFunction$$Type<(T)>): $Object2ReferenceFunction<(K), (T)>
 "composeDouble"(arg0: $Double2ObjectFunction$$Type<(K)>): $Double2ByteFunction
 "andThenByte"(arg0: $Byte2ByteFunction$$Type): $Object2ByteFunction<(K)>
 "composeInt"(arg0: $Int2ObjectFunction$$Type<(K)>): $Int2ByteFunction
 "andThenInt"(arg0: $Byte2IntFunction$$Type): $Object2IntFunction<(K)>
 "removeByte"(arg0: any): byte
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<K, V>(arg0: $Map$$Type<(K), (byte)>): $Map<(K), (byte)>
 "isEmpty"(): boolean
 "replaceAll"(arg0: $BiFunction$$Type<(K), (byte), (byte)>): void
static "of"<K, V>(arg0: K, arg1: byte, arg2: K, arg3: byte, arg4: K, arg5: byte, arg6: K, arg7: byte): $Map<(K), (byte)>
static "of"<K, V>(): $Map<(K), (byte)>
static "of"<K, V>(arg0: K, arg1: byte): $Map<(K), (byte)>
static "of"<K, V>(arg0: K, arg1: byte, arg2: K, arg3: byte): $Map<(K), (byte)>
static "of"<K, V>(arg0: K, arg1: byte, arg2: K, arg3: byte, arg4: K, arg5: byte): $Map<(K), (byte)>
static "of"<K, V>(arg0: K, arg1: byte, arg2: K, arg3: byte, arg4: K, arg5: byte, arg6: K, arg7: byte, arg8: K, arg9: byte, arg10: K, arg11: byte, arg12: K, arg13: byte, arg14: K, arg15: byte, arg16: K, arg17: byte, arg18: K, arg19: byte): $Map<(K), (byte)>
static "of"<K, V>(arg0: K, arg1: byte, arg2: K, arg3: byte, arg4: K, arg5: byte, arg6: K, arg7: byte, arg8: K, arg9: byte, arg10: K, arg11: byte, arg12: K, arg13: byte, arg14: K, arg15: byte, arg16: K, arg17: byte): $Map<(K), (byte)>
static "of"<K, V>(arg0: K, arg1: byte, arg2: K, arg3: byte, arg4: K, arg5: byte, arg6: K, arg7: byte, arg8: K, arg9: byte, arg10: K, arg11: byte, arg12: K, arg13: byte, arg14: K, arg15: byte): $Map<(K), (byte)>
static "of"<K, V>(arg0: K, arg1: byte, arg2: K, arg3: byte, arg4: K, arg5: byte, arg6: K, arg7: byte, arg8: K, arg9: byte, arg10: K, arg11: byte, arg12: K, arg13: byte): $Map<(K), (byte)>
static "of"<K, V>(arg0: K, arg1: byte, arg2: K, arg3: byte, arg4: K, arg5: byte, arg6: K, arg7: byte, arg8: K, arg9: byte, arg10: K, arg11: byte): $Map<(K), (byte)>
static "of"<K, V>(arg0: K, arg1: byte, arg2: K, arg3: byte, arg4: K, arg5: byte, arg6: K, arg7: byte, arg8: K, arg9: byte): $Map<(K), (byte)>
 "putAll"(arg0: $Map$$Type<(K), (byte)>): void
 "compute"(arg0: K, arg1: $BiFunction$$Type<(K), (byte), (byte)>): byte
static "entry"<K, V>(arg0: K, arg1: byte): $Map$Entry<(K), (byte)>
 "computeIfAbsent"(arg0: K, arg1: $Function$$Type<(K), (byte)>): byte
 "computeIfPresent"(arg0: K, arg1: $BiFunction$$Type<(K), (byte), (byte)>): byte
static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(K), (byte)>)[]): $Map<(K), (byte)>
 "sequencedKeySet"(): $SequencedSet<(K)>
 "sequencedValues"(): $SequencedCollection<(byte)>
 "sequencedEntrySet"(): $SequencedSet<($Map$Entry<(K), (byte)>)>
 "firstEntry"(): $Map$Entry<(K), (byte)>
 "lastEntry"(): $Map$Entry<(K), (byte)>
 "pollFirstEntry"(): $Map$Entry<(K), (byte)>
 "pollLastEntry"(): $Map$Entry<(K), (byte)>
 "apply"(arg0: K): byte
static "identity"<T>(): $Function<(K), (K)>
 "compose"<V>(arg0: $Function$$Type<(V), (K)>): $Function<(V), (byte)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Object2ByteSortedMap$$Type<K> = ($Object2ByteSortedMap<(K)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Object2ByteSortedMap$$Original<K> = $Object2ByteSortedMap<(K)>;}
declare module "it.unimi.dsi.fastutil.shorts.ShortIterable" {
import {$Iterable$$Interface} from "java.lang.Iterable"
import {$Iterator} from "java.util.Iterator"
import {$IntIterator} from "it.unimi.dsi.fastutil.ints.IntIterator"
import {$ShortConsumer$$Type} from "it.unimi.dsi.fastutil.shorts.ShortConsumer"
import {$Spliterator} from "java.util.Spliterator"
import {$IntConsumer$$Type} from "java.util.function.IntConsumer"
import {$IntSpliterator} from "it.unimi.dsi.fastutil.ints.IntSpliterator"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $ShortIterable$$Interface extends $Iterable$$Interface<(short)> {
}

export class $ShortIterable implements $ShortIterable$$Interface {
 "iterator"(): $Iterator
 "spliterator"(): $Spliterator
 "forEach"(arg0: $ShortConsumer$$Type): void
/**
 * 
 * @deprecated
 */
 "forEach"(arg0: $Consumer$$Type<(short)>): void
 "forEach"(arg0: $IntConsumer$$Type): void
 "intSpliterator"(): $IntSpliterator
 "intIterator"(): $IntIterator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShortIterable$$Type = ($ShortIterable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShortIterable$$Original = $ShortIterable;}
declare module "it.unimi.dsi.fastutil.Pair" {
import {$Comparator} from "java.util.Comparator"

export interface $Pair$$Interface<L, R> {
}

export class $Pair<L, R> implements $Pair$$Interface {
 "value"(): R
 "value"(arg0: R): $Pair<(L), (R)>
static "of"<L, R>(arg0: L, arg1: R): $Pair<(L), (R)>
 "first"(arg0: L): $Pair<(L), (R)>
 "first"(): L
 "second"(): R
 "second"(arg0: R): $Pair<(L), (R)>
 "key"(): L
 "key"(arg0: L): $Pair<(L), (R)>
 "left"(): L
 "left"(arg0: L): $Pair<(L), (R)>
 "right"(): R
 "right"(arg0: R): $Pair<(L), (R)>
static "lexComparator"<L, R>(): $Comparator<($Pair<(L), (R)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pair$$Type<L, R> = ($Pair<(L), (R)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Pair$$Original<L, R> = $Pair<(L), (R)>;}
declare module "it.unimi.dsi.fastutil.doubles.Double2CharFunction" {
import {$Char2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import {$Byte2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import {$Long2CharFunction} from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import {$Int2CharFunction} from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import {$Double2FloatFunction} from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import {$Double2ReferenceFunction} from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import {$Short2CharFunction} from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import {$Char2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import {$Object2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import {$Char2ShortFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Float2CharFunction} from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import {$Int2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import {$Byte2CharFunction} from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import {$Short2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import {$Double2DoubleFunction, $Double2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2DoubleFunction"
import {$Object2CharFunction} from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Long2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import {$Char2CharFunction, $Char2CharFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2CharFunction"
import {$Char2LongFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import {$Double2LongFunction} from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import {$Char2ByteFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import {$Double2ByteFunction} from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import {$Reference2CharFunction} from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import {$DoubleToIntFunction$$Interface} from "java.util.function.DoubleToIntFunction"
import {$Char2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import {$Char2IntFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import {$Char2FloatFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import {$Double2IntFunction} from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import {$Double2ObjectFunction} from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import {$Reference2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import {$Float2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import {$Double2ShortFunction} from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"

export interface $Double2CharFunction$$Interface extends $Function$0$$Interface<(double), (character)>, $DoubleToIntFunction$$Interface {

(arg0: double): character
}

export class $Double2CharFunction implements $Double2CharFunction$$Interface {
 "remove"(arg0: double): character
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): character
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): character
 "get"(arg0: double): character
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: double, arg1: character): character
/**
 * 
 * @deprecated
 */
 "put"(arg0: double, arg1: character): character
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "containsKey"(arg0: double): boolean
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: character): character
 "getOrDefault"(arg0: double, arg1: character): character
 "applyAsInt"(arg0: double): integer
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (double)>): $Function<(T), (character)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(character), (T)>): $Function<(double), (T)>
 "andThenFloat"(arg0: $Char2FloatFunction$$Type): $Double2FloatFunction
 "andThenObject"<T>(arg0: $Char2ObjectFunction$$Type<(T)>): $Double2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2DoubleFunction$$Type): $Byte2CharFunction
 "andThenLong"(arg0: $Char2LongFunction$$Type): $Double2LongFunction
 "defaultReturnValue"(): character
 "defaultReturnValue"(arg0: character): void
 "composeLong"(arg0: $Long2DoubleFunction$$Type): $Long2CharFunction
 "andThenChar"(arg0: $Char2CharFunction$$Type): $Double2CharFunction
 "andThenDouble"(arg0: $Char2DoubleFunction$$Type): $Double2DoubleFunction
 "composeObject"<T>(arg0: $Object2DoubleFunction$$Type<(T)>): $Object2CharFunction<(T)>
 "composeChar"(arg0: $Char2DoubleFunction$$Type): $Char2CharFunction
 "composeReference"<T>(arg0: $Reference2DoubleFunction$$Type<(T)>): $Reference2CharFunction<(T)>
 "andThenShort"(arg0: $Char2ShortFunction$$Type): $Double2ShortFunction
 "composeShort"(arg0: $Short2DoubleFunction$$Type): $Short2CharFunction
 "composeFloat"(arg0: $Float2DoubleFunction$$Type): $Float2CharFunction
 "andThenReference"<T>(arg0: $Char2ReferenceFunction$$Type<(T)>): $Double2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2DoubleFunction$$Type): $Double2CharFunction
 "andThenByte"(arg0: $Char2ByteFunction$$Type): $Double2ByteFunction
 "composeInt"(arg0: $Int2DoubleFunction$$Type): $Int2CharFunction
 "andThenInt"(arg0: $Char2IntFunction$$Type): $Double2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: double): character
static "identity"<T>(): $Function<(double), (double)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Double2CharFunction$$Type = ((arg0: double) => character);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Double2CharFunction$$Original = $Double2CharFunction;}
declare module "it.unimi.dsi.fastutil.objects.AbstractObject2ByteSortedMap" {
import {$Collection} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Comparator} from "java.util.Comparator"
import {$SequencedCollection} from "java.util.SequencedCollection"
import {$AbstractObject2ByteMap} from "it.unimi.dsi.fastutil.objects.AbstractObject2ByteMap"
import {$Object2ByteSortedMap$$Interface} from "it.unimi.dsi.fastutil.objects.Object2ByteSortedMap"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$SequencedSet} from "java.util.SequencedSet"
import {$ObjectSet} from "it.unimi.dsi.fastutil.objects.ObjectSet"
import {$ObjectSortedSet} from "it.unimi.dsi.fastutil.objects.ObjectSortedSet"
import {$Function} from "java.util.function.Function"
import {$Set} from "java.util.Set"
import {$SortedMap} from "java.util.SortedMap"
import {$Object2ByteMap$Entry} from "it.unimi.dsi.fastutil.objects.Object2ByteMap$Entry"

export class $AbstractObject2ByteSortedMap<K> extends $AbstractObject2ByteMap<(K)> implements $Object2ByteSortedMap$$Interface<(K)> {
public "values"(): $Collection
public "keySet"(): $Set
/**
 * 
 * @deprecated
 */
public "entrySet"(): $ObjectSet
public "comparator"(): $Comparator<(K)>
public "subMap"(arg0: any, arg1: any): $SortedMap
public "headMap"(arg0: any): $SortedMap
public "tailMap"(arg0: any): $SortedMap
public "object2ByteEntrySet"(): $ObjectSortedSet<($Object2ByteMap$Entry<(K)>)>
/**
 * 
 * @deprecated
 */
public "remove"(arg0: any): any
public "defaultReturnValue"(): byte
public "defaultReturnValue"(arg0: byte): void
public "reversed"(): $SortedMap<(K), (byte)>
public "firstKey"(): K
public "putFirst"(arg0: K, arg1: byte): byte
public "putLast"(arg0: K, arg1: byte): byte
public "lastKey"(): K
public static "copyOf"<K, V>(arg0: $Map$$Type<(K), (byte)>): $Map<(K), (byte)>
public static "of"<K, V>(arg0: K, arg1: byte, arg2: K, arg3: byte, arg4: K, arg5: byte, arg6: K, arg7: byte): $Map<(K), (byte)>
public static "of"<K, V>(): $Map<(K), (byte)>
public static "of"<K, V>(arg0: K, arg1: byte): $Map<(K), (byte)>
public static "of"<K, V>(arg0: K, arg1: byte, arg2: K, arg3: byte): $Map<(K), (byte)>
public static "of"<K, V>(arg0: K, arg1: byte, arg2: K, arg3: byte, arg4: K, arg5: byte): $Map<(K), (byte)>
public static "of"<K, V>(arg0: K, arg1: byte, arg2: K, arg3: byte, arg4: K, arg5: byte, arg6: K, arg7: byte, arg8: K, arg9: byte, arg10: K, arg11: byte, arg12: K, arg13: byte, arg14: K, arg15: byte, arg16: K, arg17: byte, arg18: K, arg19: byte): $Map<(K), (byte)>
public static "of"<K, V>(arg0: K, arg1: byte, arg2: K, arg3: byte, arg4: K, arg5: byte, arg6: K, arg7: byte, arg8: K, arg9: byte, arg10: K, arg11: byte, arg12: K, arg13: byte, arg14: K, arg15: byte, arg16: K, arg17: byte): $Map<(K), (byte)>
public static "of"<K, V>(arg0: K, arg1: byte, arg2: K, arg3: byte, arg4: K, arg5: byte, arg6: K, arg7: byte, arg8: K, arg9: byte, arg10: K, arg11: byte, arg12: K, arg13: byte, arg14: K, arg15: byte): $Map<(K), (byte)>
public static "of"<K, V>(arg0: K, arg1: byte, arg2: K, arg3: byte, arg4: K, arg5: byte, arg6: K, arg7: byte, arg8: K, arg9: byte, arg10: K, arg11: byte, arg12: K, arg13: byte): $Map<(K), (byte)>
public static "of"<K, V>(arg0: K, arg1: byte, arg2: K, arg3: byte, arg4: K, arg5: byte, arg6: K, arg7: byte, arg8: K, arg9: byte, arg10: K, arg11: byte): $Map<(K), (byte)>
public static "of"<K, V>(arg0: K, arg1: byte, arg2: K, arg3: byte, arg4: K, arg5: byte, arg6: K, arg7: byte, arg8: K, arg9: byte): $Map<(K), (byte)>
public static "entry"<K, V>(arg0: K, arg1: byte): $Map$Entry<(K), (byte)>
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(K), (byte)>)[]): $Map<(K), (byte)>
public "sequencedKeySet"(): $SequencedSet<(K)>
public "sequencedValues"(): $SequencedCollection<(byte)>
public "sequencedEntrySet"(): $SequencedSet<($Map$Entry<(K), (byte)>)>
public "firstEntry"(): $Map$Entry<(K), (byte)>
public "lastEntry"(): $Map$Entry<(K), (byte)>
public "pollFirstEntry"(): $Map$Entry<(K), (byte)>
public "pollLastEntry"(): $Map$Entry<(K), (byte)>
public static "identity"<T>(): $Function<(K), (K)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractObject2ByteSortedMap$$Type<K> = ($AbstractObject2ByteSortedMap<(K)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractObject2ByteSortedMap$$Original<K> = $AbstractObject2ByteSortedMap<(K)>;}
declare module "it.unimi.dsi.fastutil.chars.Char2CharFunction" {
import {$Char2DoubleFunction, $Char2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import {$Object2CharFunction, $Object2CharFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import {$Long2CharFunction, $Long2CharFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Double2CharFunction, $Double2CharFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import {$Int2CharFunction, $Int2CharFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import {$Char2LongFunction, $Char2LongFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import {$IntUnaryOperator, $IntUnaryOperator$$Type, $IntUnaryOperator$$Interface} from "java.util.function.IntUnaryOperator"
import {$Short2CharFunction, $Short2CharFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import {$Char2ByteFunction, $Char2ByteFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import {$Reference2CharFunction, $Reference2CharFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import {$Char2ObjectFunction, $Char2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import {$Char2ReferenceFunction, $Char2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import {$Char2IntFunction, $Char2IntFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import {$Char2ShortFunction, $Char2ShortFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Char2FloatFunction, $Char2FloatFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import {$Float2CharFunction, $Float2CharFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import {$Byte2CharFunction, $Byte2CharFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"

export interface $Char2CharFunction$$Interface extends $Function$0$$Interface<(character), (character)>, $IntUnaryOperator$$Interface {

(arg0: character): character
}

export class $Char2CharFunction implements $Char2CharFunction$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): any
 "remove"(arg0: character): character
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): character
 "get"(arg0: character): character
/**
 * 
 * @deprecated
 */
 "put"(arg0: character, arg1: character): character
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: character, arg1: character): character
static "identity"(): $Char2CharFunction
 "containsKey"(arg0: character): boolean
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "getOrDefault"(arg0: character, arg1: character): character
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: character): character
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "applyAsInt"(arg0: integer): integer
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (character)>): $Function<(T), (character)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(character), (T)>): $Function<(character), (T)>
 "andThenFloat"(arg0: $Char2FloatFunction$$Type): $Char2FloatFunction
 "andThenObject"<T>(arg0: $Char2ObjectFunction$$Type<(T)>): $Char2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2CharFunction$$Type): $Byte2CharFunction
 "andThenLong"(arg0: $Char2LongFunction$$Type): $Char2LongFunction
 "defaultReturnValue"(): character
 "defaultReturnValue"(arg0: character): void
 "composeLong"(arg0: $Long2CharFunction$$Type): $Long2CharFunction
 "andThenChar"(arg0: $Char2CharFunction$$Type): $Char2CharFunction
 "andThenDouble"(arg0: $Char2DoubleFunction$$Type): $Char2DoubleFunction
 "composeObject"<T>(arg0: $Object2CharFunction$$Type<(T)>): $Object2CharFunction<(T)>
 "composeChar"(arg0: $Char2CharFunction$$Type): $Char2CharFunction
 "composeReference"<T>(arg0: $Reference2CharFunction$$Type<(T)>): $Reference2CharFunction<(T)>
 "andThenShort"(arg0: $Char2ShortFunction$$Type): $Char2ShortFunction
 "composeShort"(arg0: $Short2CharFunction$$Type): $Short2CharFunction
 "composeFloat"(arg0: $Float2CharFunction$$Type): $Float2CharFunction
 "andThenReference"<T>(arg0: $Char2ReferenceFunction$$Type<(T)>): $Char2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2CharFunction$$Type): $Double2CharFunction
 "andThenByte"(arg0: $Char2ByteFunction$$Type): $Char2ByteFunction
 "composeInt"(arg0: $Int2CharFunction$$Type): $Int2CharFunction
 "andThenInt"(arg0: $Char2IntFunction$$Type): $Char2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: character): character
 "compose"(arg0: $IntUnaryOperator$$Type): $IntUnaryOperator
 "andThen"(arg0: $IntUnaryOperator$$Type): $IntUnaryOperator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Char2CharFunction$$Type = ((arg0: character) => character);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Char2CharFunction$$Original = $Char2CharFunction;}
declare module "it.unimi.dsi.fastutil.doubles.Double2ByteFunction" {
import {$Char2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import {$Byte2ByteFunction, $Byte2ByteFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction"
import {$Byte2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import {$Float2ByteFunction} from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import {$Long2ByteFunction} from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import {$Byte2IntFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"
import {$Double2FloatFunction} from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import {$Double2ReferenceFunction} from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import {$Reference2ByteFunction} from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import {$Byte2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import {$Object2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Byte2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import {$Byte2ShortFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import {$Int2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import {$Byte2CharFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import {$Short2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import {$Double2DoubleFunction, $Double2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2DoubleFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Long2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import {$Object2ByteFunction} from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import {$Double2CharFunction} from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import {$Byte2LongFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import {$Double2LongFunction} from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import {$Char2ByteFunction} from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import {$DoubleToIntFunction$$Interface} from "java.util.function.DoubleToIntFunction"
import {$Double2IntFunction} from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import {$Double2ObjectFunction} from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import {$Reference2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import {$Byte2FloatFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import {$Short2ByteFunction} from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import {$Float2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import {$Int2ByteFunction} from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import {$Double2ShortFunction} from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"

export interface $Double2ByteFunction$$Interface extends $Function$0$$Interface<(double), (byte)>, $DoubleToIntFunction$$Interface {

(arg0: double): byte
}

export class $Double2ByteFunction implements $Double2ByteFunction$$Interface {
 "remove"(arg0: double): byte
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): byte
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): byte
 "get"(arg0: double): byte
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: double, arg1: byte): byte
/**
 * 
 * @deprecated
 */
 "put"(arg0: double, arg1: byte): byte
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "containsKey"(arg0: double): boolean
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: byte): byte
 "getOrDefault"(arg0: double, arg1: byte): byte
 "applyAsInt"(arg0: double): integer
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (double)>): $Function<(T), (byte)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(byte), (T)>): $Function<(double), (T)>
 "andThenFloat"(arg0: $Byte2FloatFunction$$Type): $Double2FloatFunction
 "andThenObject"<T>(arg0: $Byte2ObjectFunction$$Type<(T)>): $Double2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2DoubleFunction$$Type): $Byte2ByteFunction
 "andThenLong"(arg0: $Byte2LongFunction$$Type): $Double2LongFunction
 "defaultReturnValue"(): byte
 "defaultReturnValue"(arg0: byte): void
 "composeLong"(arg0: $Long2DoubleFunction$$Type): $Long2ByteFunction
 "andThenChar"(arg0: $Byte2CharFunction$$Type): $Double2CharFunction
 "andThenDouble"(arg0: $Byte2DoubleFunction$$Type): $Double2DoubleFunction
 "composeObject"<T>(arg0: $Object2DoubleFunction$$Type<(T)>): $Object2ByteFunction<(T)>
 "composeChar"(arg0: $Char2DoubleFunction$$Type): $Char2ByteFunction
 "composeReference"<T>(arg0: $Reference2DoubleFunction$$Type<(T)>): $Reference2ByteFunction<(T)>
 "andThenShort"(arg0: $Byte2ShortFunction$$Type): $Double2ShortFunction
 "composeShort"(arg0: $Short2DoubleFunction$$Type): $Short2ByteFunction
 "composeFloat"(arg0: $Float2DoubleFunction$$Type): $Float2ByteFunction
 "andThenReference"<T>(arg0: $Byte2ReferenceFunction$$Type<(T)>): $Double2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2DoubleFunction$$Type): $Double2ByteFunction
 "andThenByte"(arg0: $Byte2ByteFunction$$Type): $Double2ByteFunction
 "composeInt"(arg0: $Int2DoubleFunction$$Type): $Int2ByteFunction
 "andThenInt"(arg0: $Byte2IntFunction$$Type): $Double2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: double): byte
static "identity"<T>(): $Function<(double), (double)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Double2ByteFunction$$Type = ((arg0: double) => byte);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Double2ByteFunction$$Original = $Double2ByteFunction;}
declare module "it.unimi.dsi.fastutil.objects.Object2ObjectMap$Entry" {
import {$Comparable} from "java.lang.Comparable"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$Map$Entry, $Map$Entry$$Type, $Map$Entry$$Interface} from "java.util.Map$Entry"

export interface $Object2ObjectMap$Entry$$Interface<K, V> extends $Map$Entry$$Interface<(K), (V)> {
get "value"(): V
get "key"(): K
set "value"(value: V)
}

export class $Object2ObjectMap$Entry<K, V> implements $Object2ObjectMap$Entry$$Interface {
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<K, V>(arg0: $Map$Entry$$Type<(K), (V)>): $Map$Entry<(K), (V)>
 "getValue"(): V
 "getKey"(): K
static "comparingByKey"<K, V>(arg0: $Comparator$$Type<(K)>): $Comparator<($Map$Entry<(K), (V)>)>
static "comparingByKey"<K extends $Comparable<(object)>, V>(): $Comparator<($Map$Entry<(K), (V)>)>
 "setValue"(arg0: V): V
static "comparingByValue"<K, V extends $Comparable<(object)>>(): $Comparator<($Map$Entry<(K), (V)>)>
static "comparingByValue"<K, V>(arg0: $Comparator$$Type<(V)>): $Comparator<($Map$Entry<(K), (V)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Object2ObjectMap$Entry$$Type<K, V> = ($Object2ObjectMap$Entry<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Object2ObjectMap$Entry$$Original<K, V> = $Object2ObjectMap$Entry<(K), (V)>;}
declare module "it.unimi.dsi.fastutil.shorts.Short2CharFunction" {
import {$Char2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import {$Long2CharFunction} from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import {$Short2IntFunction} from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import {$Reference2ShortFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import {$Int2CharFunction} from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import {$Long2ShortFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import {$Char2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import {$Char2ShortFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Short2ShortFunction, $Short2ShortFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ShortFunction"
import {$Byte2ShortFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import {$Float2CharFunction} from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import {$Byte2CharFunction} from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import {$Short2DoubleFunction} from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import {$Object2CharFunction} from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Int2ShortFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import {$Short2ReferenceFunction} from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import {$Float2ShortFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import {$Double2CharFunction} from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import {$Char2CharFunction, $Char2CharFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2CharFunction"
import {$Char2LongFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import {$IntUnaryOperator, $IntUnaryOperator$$Type, $IntUnaryOperator$$Interface} from "java.util.function.IntUnaryOperator"
import {$Short2LongFunction} from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import {$Char2ByteFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import {$Reference2CharFunction} from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import {$Short2ObjectFunction} from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import {$Char2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import {$Object2ShortFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import {$Char2IntFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import {$Char2FloatFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import {$Short2FloatFunction} from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import {$Short2ByteFunction} from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import {$Double2ShortFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"

export interface $Short2CharFunction$$Interface extends $Function$0$$Interface<(short), (character)>, $IntUnaryOperator$$Interface {

(arg0: short): character
}

export class $Short2CharFunction implements $Short2CharFunction$$Interface {
 "remove"(arg0: short): character
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): character
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): character
 "get"(arg0: short): character
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: short, arg1: character): character
/**
 * 
 * @deprecated
 */
 "put"(arg0: short, arg1: character): character
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "containsKey"(arg0: short): boolean
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: character): character
 "getOrDefault"(arg0: short, arg1: character): character
/**
 * 
 * @deprecated
 */
 "applyAsInt"(arg0: integer): integer
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (short)>): $Function<(T), (character)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(character), (T)>): $Function<(short), (T)>
 "andThenFloat"(arg0: $Char2FloatFunction$$Type): $Short2FloatFunction
 "andThenObject"<T>(arg0: $Char2ObjectFunction$$Type<(T)>): $Short2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2ShortFunction$$Type): $Byte2CharFunction
 "andThenLong"(arg0: $Char2LongFunction$$Type): $Short2LongFunction
 "defaultReturnValue"(): character
 "defaultReturnValue"(arg0: character): void
 "composeLong"(arg0: $Long2ShortFunction$$Type): $Long2CharFunction
 "andThenChar"(arg0: $Char2CharFunction$$Type): $Short2CharFunction
 "andThenDouble"(arg0: $Char2DoubleFunction$$Type): $Short2DoubleFunction
 "composeObject"<T>(arg0: $Object2ShortFunction$$Type<(T)>): $Object2CharFunction<(T)>
 "composeChar"(arg0: $Char2ShortFunction$$Type): $Char2CharFunction
 "composeReference"<T>(arg0: $Reference2ShortFunction$$Type<(T)>): $Reference2CharFunction<(T)>
 "andThenShort"(arg0: $Char2ShortFunction$$Type): $Short2ShortFunction
 "composeShort"(arg0: $Short2ShortFunction$$Type): $Short2CharFunction
 "composeFloat"(arg0: $Float2ShortFunction$$Type): $Float2CharFunction
 "andThenReference"<T>(arg0: $Char2ReferenceFunction$$Type<(T)>): $Short2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2ShortFunction$$Type): $Double2CharFunction
 "andThenByte"(arg0: $Char2ByteFunction$$Type): $Short2ByteFunction
 "composeInt"(arg0: $Int2ShortFunction$$Type): $Int2CharFunction
 "andThenInt"(arg0: $Char2IntFunction$$Type): $Short2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: short): character
static "identity"(): $IntUnaryOperator
 "compose"(arg0: $IntUnaryOperator$$Type): $IntUnaryOperator
 "andThen"(arg0: $IntUnaryOperator$$Type): $IntUnaryOperator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Short2CharFunction$$Type = ((arg0: short) => character);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Short2CharFunction$$Original = $Short2CharFunction;}
declare module "it.unimi.dsi.fastutil.objects.Reference2ObjectMap" {
import {$Float2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import {$Object2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import {$Reference2IntFunction} from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import {$Object2ObjectFunction, $Object2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$Reference2ShortFunction} from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import {$Reference2LongFunction} from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import {$Double2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import {$Int2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import {$Reference2ByteFunction} from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import {$Byte2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import {$Int2ObjectFunction} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$Char2ObjectFunction} from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import {$Object2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Object2FloatFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import {$Byte2ObjectFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import {$Set} from "java.util.Set"
import {$Reference2ObjectMap$Entry} from "it.unimi.dsi.fastutil.objects.Reference2ObjectMap$Entry"
import {$Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ReferenceFunction"
import {$Reference2ObjectFunction, $Reference2ObjectFunction$$Type, $Reference2ObjectFunction$$Interface} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Collection} from "java.util.Collection"
import {$Map, $Map$$Type, $Map$$Interface} from "java.util.Map"
import {$Object2CharFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import {$Object2ByteFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import {$Short2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import {$Long2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$Reference2FloatFunction} from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import {$Float2ObjectFunction} from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import {$Reference2CharFunction} from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import {$ObjectSet} from "it.unimi.dsi.fastutil.objects.ObjectSet"
import {$Short2ObjectFunction} from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import {$Object2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import {$Char2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import {$Object2ShortFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Object2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import {$Double2ObjectFunction} from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import {$Reference2DoubleFunction} from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import {$Long2ObjectFunction} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"

export interface $Reference2ObjectMap$$Interface<K, V> extends $Reference2ObjectFunction$$Interface<(K), (V)>, $Map$$Interface<(K), (V)> {
[index: string | number]: V
get "empty"(): boolean
}

export class $Reference2ObjectMap<K, V> implements $Reference2ObjectMap$$Interface {
 "remove"(arg0: any): V
 "remove"(arg0: any, arg1: any): boolean
 "size"(): integer
 "put"(arg0: K, arg1: V): V
 "values"(): $Collection
 "clear"(): void
 "replace"(arg0: K, arg1: V): V
 "replace"(arg0: K, arg1: V, arg2: V): boolean
 "merge"(arg0: K, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
 "entrySet"(): $ObjectSet<($Map$Entry<(K), (V)>)>
 "putIfAbsent"(arg0: K, arg1: V): V
 "compute"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
 "forEach"(arg0: $BiConsumer$$Type<(K), (V)>): void
 "containsKey"(arg0: any): boolean
 "computeIfAbsent"(arg0: K, arg1: $Reference2ObjectFunction$$Type<(K), (V)>): V
 "keySet"(): $Set
 "getOrDefault"(arg0: any, arg1: V): V
 "computeIfPresent"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
 "reference2ObjectEntrySet"(): $ObjectSet<($Reference2ObjectMap$Entry<(K), (V)>)>
/**
 * 
 * @deprecated
 */
 "computeObjectIfAbsentPartial"(arg0: K, arg1: $Reference2ObjectFunction$$Type<(K), (V)>): V
 "defaultReturnValue"(arg0: V): void
 "defaultReturnValue"(): V
 "get"(arg0: any): V
 "andThenFloat"(arg0: $Object2FloatFunction$$Type<(V)>): $Reference2FloatFunction<(K)>
 "andThenObject"<T>(arg0: $Object2ObjectFunction$$Type<(V), (T)>): $Reference2ObjectFunction<(K), (T)>
 "composeByte"(arg0: $Byte2ReferenceFunction$$Type<(K)>): $Byte2ObjectFunction<(V)>
 "andThenLong"(arg0: $Object2LongFunction$$Type<(V)>): $Reference2LongFunction<(K)>
 "composeLong"(arg0: $Long2ReferenceFunction$$Type<(K)>): $Long2ObjectFunction<(V)>
 "andThenChar"(arg0: $Object2CharFunction$$Type<(V)>): $Reference2CharFunction<(K)>
 "andThenDouble"(arg0: $Object2DoubleFunction$$Type<(V)>): $Reference2DoubleFunction<(K)>
 "composeObject"<T>(arg0: $Object2ReferenceFunction$$Type<(T), (K)>): $Object2ObjectFunction<(T), (V)>
 "composeChar"(arg0: $Char2ReferenceFunction$$Type<(K)>): $Char2ObjectFunction<(V)>
 "composeReference"<T>(arg0: $Reference2ReferenceFunction$$Type<(T), (K)>): $Reference2ObjectFunction<(T), (V)>
 "andThenShort"(arg0: $Object2ShortFunction$$Type<(V)>): $Reference2ShortFunction<(K)>
 "composeShort"(arg0: $Short2ReferenceFunction$$Type<(K)>): $Short2ObjectFunction<(V)>
 "composeFloat"(arg0: $Float2ReferenceFunction$$Type<(K)>): $Float2ObjectFunction<(V)>
 "andThenReference"<T>(arg0: $Object2ReferenceFunction$$Type<(V), (T)>): $Reference2ReferenceFunction<(K), (T)>
 "composeDouble"(arg0: $Double2ReferenceFunction$$Type<(K)>): $Double2ObjectFunction<(V)>
 "andThenByte"(arg0: $Object2ByteFunction$$Type<(V)>): $Reference2ByteFunction<(K)>
 "composeInt"(arg0: $Int2ReferenceFunction$$Type<(K)>): $Int2ObjectFunction<(V)>
 "andThenInt"(arg0: $Object2IntFunction$$Type<(V)>): $Reference2IntFunction<(K)>
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<K, V>(arg0: $Map$$Type<(K), (V)>): $Map<(K), (V)>
 "isEmpty"(): boolean
 "replaceAll"(arg0: $BiFunction$$Type<(K), (V), (V)>): void
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
static "of"<K, V>(): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
 "putAll"(arg0: $Map$$Type<(K), (V)>): void
static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
 "computeIfAbsent"(arg0: K, arg1: $Function$$Type<(K), (V)>): V
 "containsValue"(arg0: any): boolean
static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(K), (V)>)[]): $Map<(K), (V)>
 "apply"(arg0: K): V
static "identity"<T>(): $Function<(K), (K)>
 "compose"<V>(arg0: $Function$$Type<(V), (K)>): $Function<(V), (V)>
 "andThen"<V>(arg0: $Function$$Type<(V), (V)>): $Function<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Reference2ObjectMap$$Type<K, V> = ($Reference2ObjectMap<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Reference2ObjectMap$$Original<K, V> = $Reference2ObjectMap<(K), (V)>;}
declare module "it.unimi.dsi.fastutil.ints.IntIterable" {
import {$Iterable$$Interface} from "java.lang.Iterable"
import {$Iterator} from "java.util.Iterator"
import {$IntIterator} from "it.unimi.dsi.fastutil.ints.IntIterator"
import {$Spliterator} from "java.util.Spliterator"
import {$IntConsumer$$Type as $IntConsumer$0$$Type} from "java.util.function.IntConsumer"
import {$IntSpliterator} from "it.unimi.dsi.fastutil.ints.IntSpliterator"
import {$IntConsumer$$Type} from "it.unimi.dsi.fastutil.ints.IntConsumer"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $IntIterable$$Interface extends $Iterable$$Interface<(integer)> {
}

export class $IntIterable implements $IntIterable$$Interface {
 "iterator"(): $Iterator
 "spliterator"(): $Spliterator
 "forEach"(arg0: $IntConsumer$0$$Type): void
/**
 * 
 * @deprecated
 */
 "forEach"(arg0: $Consumer$$Type<(integer)>): void
 "forEach"(arg0: $IntConsumer$$Type): void
 "intSpliterator"(): $IntSpliterator
 "intIterator"(): $IntIterator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntIterable$$Type = ($IntIterable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntIterable$$Original = $IntIterable;}
declare module "it.unimi.dsi.fastutil.objects.Object2ByteMap" {
import {$Byte2ByteFunction, $Byte2ByteFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction"
import {$Byte2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import {$Float2ByteFunction} from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import {$Object2IntFunction} from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import {$Long2ByteFunction} from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import {$Object2ObjectFunction, $Object2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import {$Byte2IntFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"
import {$IntBinaryOperator$$Type} from "java.util.function.IntBinaryOperator"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$Reference2ByteFunction} from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import {$Byte2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import {$Int2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$Char2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import {$Object2DoubleFunction} from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Object2FloatFunction} from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import {$Byte2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import {$Byte2ShortFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import {$Byte2CharFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import {$Object2ByteMap$Entry} from "it.unimi.dsi.fastutil.objects.Object2ByteMap$Entry"
import {$ByteBinaryOperator$$Type} from "it.unimi.dsi.fastutil.bytes.ByteBinaryOperator"
import {$Reference2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Collection} from "java.util.Collection"
import {$Map, $Map$$Type, $Map$$Interface} from "java.util.Map"
import {$Object2CharFunction} from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import {$Object2ByteFunction, $Object2ByteFunction$$Type, $Object2ByteFunction$$Interface} from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import {$Byte2LongFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$ToIntFunction$$Type} from "java.util.function.ToIntFunction"
import {$Float2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import {$Char2ByteFunction} from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import {$Double2ByteFunction} from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import {$ObjectSet} from "it.unimi.dsi.fastutil.objects.ObjectSet"
import {$Object2ShortFunction} from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import {$Object2ReferenceFunction} from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import {$Short2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Object2LongFunction} from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import {$Double2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import {$Byte2FloatFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import {$Short2ByteFunction} from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import {$Int2ByteFunction} from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import {$Long2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"

export interface $Object2ByteMap$$Interface<K> extends $Object2ByteFunction$$Interface<(K)>, $Map$$Interface<(K), (byte)> {
[index: string | number]: byte
get "empty"(): boolean
}

export class $Object2ByteMap<K> implements $Object2ByteMap$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any, arg1: any): boolean
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): any
 "remove"(arg0: any, arg1: byte): boolean
 "size"(): integer
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): byte
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "put"(arg0: K, arg1: byte): byte
 "values"(): $Collection
 "clear"(): void
 "replace"(arg0: K, arg1: byte): byte
 "replace"(arg0: K, arg1: byte, arg2: byte): boolean
/**
 * 
 * @deprecated
 */
 "replace"(arg0: K, arg1: byte): byte
/**
 * 
 * @deprecated
 */
 "replace"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "replace"(arg0: K, arg1: byte, arg2: byte): boolean
/**
 * 
 * @deprecated
 */
 "replace"(arg0: any, arg1: any, arg2: any): boolean
/**
 * 
 * @deprecated
 */
 "merge"(arg0: any, arg1: any, arg2: $BiFunction$$Type): any
/**
 * 
 * @deprecated
 */
 "merge"(arg0: K, arg1: byte, arg2: $BiFunction$$Type<(byte), (byte), (byte)>): byte
 "merge"(arg0: K, arg1: byte, arg2: $BiFunction$$Type<(byte), (byte), (byte)>): byte
/**
 * 
 * @deprecated
 */
 "entrySet"(): $ObjectSet<($Map$Entry<(K), (byte)>)>
 "putIfAbsent"(arg0: K, arg1: byte): byte
/**
 * 
 * @deprecated
 */
 "putIfAbsent"(arg0: K, arg1: byte): byte
/**
 * 
 * @deprecated
 */
 "putIfAbsent"(arg0: any, arg1: any): any
 "forEach"(arg0: $BiConsumer$$Type<(K), (byte)>): void
 "containsKey"(arg0: any): boolean
 "computeIfAbsent"(arg0: K, arg1: $ToIntFunction$$Type<(K)>): byte
 "computeIfAbsent"(arg0: K, arg1: $Object2ByteFunction$$Type<(K)>): byte
 "keySet"(): $ObjectSet<(K)>
/**
 * 
 * @deprecated
 */
 "containsValue"(arg0: any): boolean
 "containsValue"(arg0: byte): boolean
 "getOrDefault"(arg0: any, arg1: byte): byte
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: byte): byte
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "computeByteIfAbsentPartial"(arg0: K, arg1: $Object2ByteFunction$$Type<(K)>): byte
 "computeByteIfPresent"(arg0: K, arg1: $BiFunction$$Type<(K), (byte), (byte)>): byte
 "object2ByteEntrySet"(): $ObjectSet<($Object2ByteMap$Entry<(K)>)>
/**
 * 
 * @deprecated
 */
 "computeByteIfAbsent"(arg0: K, arg1: $ToIntFunction$$Type<(K)>): byte
 "computeByte"(arg0: K, arg1: $BiFunction$$Type<(K), (byte), (byte)>): byte
 "defaultReturnValue"(): byte
 "defaultReturnValue"(arg0: byte): void
 "mergeByte"(arg0: K, arg1: byte, arg2: $IntBinaryOperator$$Type): byte
 "mergeByte"(arg0: K, arg1: byte, arg2: $ByteBinaryOperator$$Type): byte
/**
 * 
 * @deprecated
 */
 "mergeByte"(arg0: K, arg1: byte, arg2: $BiFunction$$Type<(byte), (byte), (byte)>): byte
 "put"(arg0: K, arg1: byte): byte
 "getByte"(arg0: any): byte
 "applyAsInt"(arg0: K): integer
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(byte), (T)>): $Function<(K), (T)>
 "andThenFloat"(arg0: $Byte2FloatFunction$$Type): $Object2FloatFunction<(K)>
 "andThenObject"<T>(arg0: $Byte2ObjectFunction$$Type<(T)>): $Object2ObjectFunction<(K), (T)>
 "composeByte"(arg0: $Byte2ObjectFunction$$Type<(K)>): $Byte2ByteFunction
 "andThenLong"(arg0: $Byte2LongFunction$$Type): $Object2LongFunction<(K)>
 "composeLong"(arg0: $Long2ObjectFunction$$Type<(K)>): $Long2ByteFunction
 "andThenChar"(arg0: $Byte2CharFunction$$Type): $Object2CharFunction<(K)>
 "andThenDouble"(arg0: $Byte2DoubleFunction$$Type): $Object2DoubleFunction<(K)>
 "composeObject"<T>(arg0: $Object2ObjectFunction$$Type<(T), (K)>): $Object2ByteFunction<(T)>
 "composeChar"(arg0: $Char2ObjectFunction$$Type<(K)>): $Char2ByteFunction
 "composeReference"<T>(arg0: $Reference2ObjectFunction$$Type<(T), (K)>): $Reference2ByteFunction<(T)>
 "andThenShort"(arg0: $Byte2ShortFunction$$Type): $Object2ShortFunction<(K)>
 "composeShort"(arg0: $Short2ObjectFunction$$Type<(K)>): $Short2ByteFunction
 "composeFloat"(arg0: $Float2ObjectFunction$$Type<(K)>): $Float2ByteFunction
 "andThenReference"<T>(arg0: $Byte2ReferenceFunction$$Type<(T)>): $Object2ReferenceFunction<(K), (T)>
 "composeDouble"(arg0: $Double2ObjectFunction$$Type<(K)>): $Double2ByteFunction
 "andThenByte"(arg0: $Byte2ByteFunction$$Type): $Object2ByteFunction<(K)>
 "composeInt"(arg0: $Int2ObjectFunction$$Type<(K)>): $Int2ByteFunction
 "andThenInt"(arg0: $Byte2IntFunction$$Type): $Object2IntFunction<(K)>
 "removeByte"(arg0: any): byte
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<K, V>(arg0: $Map$$Type<(K), (byte)>): $Map<(K), (byte)>
 "isEmpty"(): boolean
 "replaceAll"(arg0: $BiFunction$$Type<(K), (byte), (byte)>): void
static "of"<K, V>(arg0: K, arg1: byte, arg2: K, arg3: byte, arg4: K, arg5: byte, arg6: K, arg7: byte): $Map<(K), (byte)>
static "of"<K, V>(): $Map<(K), (byte)>
static "of"<K, V>(arg0: K, arg1: byte): $Map<(K), (byte)>
static "of"<K, V>(arg0: K, arg1: byte, arg2: K, arg3: byte): $Map<(K), (byte)>
static "of"<K, V>(arg0: K, arg1: byte, arg2: K, arg3: byte, arg4: K, arg5: byte): $Map<(K), (byte)>
static "of"<K, V>(arg0: K, arg1: byte, arg2: K, arg3: byte, arg4: K, arg5: byte, arg6: K, arg7: byte, arg8: K, arg9: byte, arg10: K, arg11: byte, arg12: K, arg13: byte, arg14: K, arg15: byte, arg16: K, arg17: byte, arg18: K, arg19: byte): $Map<(K), (byte)>
static "of"<K, V>(arg0: K, arg1: byte, arg2: K, arg3: byte, arg4: K, arg5: byte, arg6: K, arg7: byte, arg8: K, arg9: byte, arg10: K, arg11: byte, arg12: K, arg13: byte, arg14: K, arg15: byte, arg16: K, arg17: byte): $Map<(K), (byte)>
static "of"<K, V>(arg0: K, arg1: byte, arg2: K, arg3: byte, arg4: K, arg5: byte, arg6: K, arg7: byte, arg8: K, arg9: byte, arg10: K, arg11: byte, arg12: K, arg13: byte, arg14: K, arg15: byte): $Map<(K), (byte)>
static "of"<K, V>(arg0: K, arg1: byte, arg2: K, arg3: byte, arg4: K, arg5: byte, arg6: K, arg7: byte, arg8: K, arg9: byte, arg10: K, arg11: byte, arg12: K, arg13: byte): $Map<(K), (byte)>
static "of"<K, V>(arg0: K, arg1: byte, arg2: K, arg3: byte, arg4: K, arg5: byte, arg6: K, arg7: byte, arg8: K, arg9: byte, arg10: K, arg11: byte): $Map<(K), (byte)>
static "of"<K, V>(arg0: K, arg1: byte, arg2: K, arg3: byte, arg4: K, arg5: byte, arg6: K, arg7: byte, arg8: K, arg9: byte): $Map<(K), (byte)>
 "putAll"(arg0: $Map$$Type<(K), (byte)>): void
 "compute"(arg0: K, arg1: $BiFunction$$Type<(K), (byte), (byte)>): byte
static "entry"<K, V>(arg0: K, arg1: byte): $Map$Entry<(K), (byte)>
 "computeIfAbsent"(arg0: K, arg1: $Function$$Type<(K), (byte)>): byte
 "computeIfPresent"(arg0: K, arg1: $BiFunction$$Type<(K), (byte), (byte)>): byte
static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(K), (byte)>)[]): $Map<(K), (byte)>
 "apply"(arg0: K): byte
static "identity"<T>(): $Function<(K), (K)>
 "compose"<V>(arg0: $Function$$Type<(V), (K)>): $Function<(V), (byte)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Object2ByteMap$$Type<K> = ($Object2ByteMap<(K)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Object2ByteMap$$Original<K> = $Object2ByteMap<(K)>;}
declare module "it.unimi.dsi.fastutil.longs.Long2ReferenceOpenHashMap" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Hash$$Interface} from "it.unimi.dsi.fastutil.Hash"
import {$LongSet} from "it.unimi.dsi.fastutil.longs.LongSet"
import {$LongFunction$$Type} from "java.util.function.LongFunction"
import {$Long2ReferenceMap$FastEntrySet} from "it.unimi.dsi.fastutil.longs.Long2ReferenceMap$FastEntrySet"
import {$AbstractLong2ReferenceMap} from "it.unimi.dsi.fastutil.longs.AbstractLong2ReferenceMap"
import {$Long2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Function} from "java.util.function.Function"
import {$Cloneable$$Interface} from "java.lang.Cloneable"
import {$ReferenceCollection} from "it.unimi.dsi.fastutil.objects.ReferenceCollection"
import {$Long2ReferenceMap$$Type} from "it.unimi.dsi.fastutil.longs.Long2ReferenceMap"
import {$Set} from "java.util.Set"

export class $Long2ReferenceOpenHashMap<V> extends $AbstractLong2ReferenceMap<(V)> implements $Serializable$$Interface, $Cloneable$$Interface, $Hash$$Interface {
constructor(arg0: $Map$$Type<(long), (V)>)
constructor(arg0: $Long2ReferenceMap$$Type<(V)>, arg1: float)
constructor(arg0: $Long2ReferenceMap$$Type<(V)>)
constructor(arg0: (long)[], arg1: (V)[], arg2: float)
constructor(arg0: (long)[], arg1: (V)[])
constructor(arg0: integer, arg1: float)
constructor(arg0: integer)
constructor()
constructor(arg0: $Map$$Type<(long), (V)>, arg1: float)

public "remove"(arg0: long, arg1: any): boolean
public "remove"(arg0: long): V
public "size"(): integer
public "get"(arg0: long): V
public "put"(arg0: long, arg1: V): V
public "values"(): $ReferenceCollection<(V)>
public "hashCode"(): integer
public "clone"(): $Long2ReferenceOpenHashMap<(V)>
public "clear"(): void
public "isEmpty"(): boolean
public "replace"(arg0: long, arg1: V): V
public "replace"(arg0: long, arg1: V, arg2: V): boolean
public "trim"(): boolean
public "trim"(arg0: integer): boolean
public "merge"(arg0: long, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
public "putAll"(arg0: $Map$$Type<(long), (V)>): void
public "putIfAbsent"(arg0: long, arg1: V): V
public "compute"(arg0: long, arg1: $BiFunction$$Type<(long), (V), (V)>): V
public "containsKey"(arg0: long): boolean
public "computeIfAbsent"(arg0: long, arg1: $Long2ReferenceFunction$$Type<(V)>): V
public "computeIfAbsent"(arg0: long, arg1: $LongFunction$$Type<(V)>): V
public "keySet"(): $LongSet
public "containsValue"(arg0: any): boolean
public "getOrDefault"(arg0: long, arg1: V): V
public "computeIfPresent"(arg0: long, arg1: $BiFunction$$Type<(long), (V), (V)>): V
public "ensureCapacity"(arg0: integer): void
public "long2ReferenceEntrySet"(): $Long2ReferenceMap$FastEntrySet<(V)>
/**
 * 
 * @deprecated
 */
public "entrySet"(): $Set
public "defaultReturnValue"(arg0: V): void
public "defaultReturnValue"(): V
public static "copyOf"<K, V>(arg0: $Map$$Type<(K), (V)>): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
public static "of"<K, V>(): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(K), (V)>)[]): $Map<(K), (V)>
public static "identity"<T>(): $Function<(T), (T)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Long2ReferenceOpenHashMap$$Type<V> = ($Long2ReferenceOpenHashMap<(V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Long2ReferenceOpenHashMap$$Original<V> = $Long2ReferenceOpenHashMap<(V)>;}
declare module "it.unimi.dsi.fastutil.doubles.DoubleCollection" {
import {$Collection$$Type, $Collection$$Interface} from "java.util.Collection"
import {$DoubleIterable$$Interface} from "it.unimi.dsi.fastutil.doubles.DoubleIterable"
import {$Spliterator} from "java.util.Spliterator"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$DoubleIterator} from "it.unimi.dsi.fastutil.doubles.DoubleIterator"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$IntFunction$$Type} from "java.util.function.IntFunction"
import {$DoubleConsumer$$Type as $DoubleConsumer$0$$Type} from "java.util.function.DoubleConsumer"
import {$DoublePredicate$$Type as $DoublePredicate$0$$Type} from "it.unimi.dsi.fastutil.doubles.DoublePredicate"
import {$DoubleSpliterator} from "it.unimi.dsi.fastutil.doubles.DoubleSpliterator"
import {$DoubleConsumer$$Type} from "it.unimi.dsi.fastutil.doubles.DoubleConsumer"
import {$DoubleStream} from "java.util.stream.DoubleStream"
import {$Stream} from "java.util.stream.Stream"
import {$DoublePredicate$$Type} from "java.util.function.DoublePredicate"

export interface $DoubleCollection$$Interface extends $Collection$$Interface<(double)>, $DoubleIterable$$Interface {
get "empty"(): boolean
}

export class $DoubleCollection implements $DoubleCollection$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): boolean
/**
 * 
 * @deprecated
 */
 "add"(arg0: any): boolean
 "add"(arg0: double): boolean
/**
 * 
 * @deprecated
 */
 "add"(arg0: double): boolean
 "toArray"(arg0: (double)[]): (double)[]
 "iterator"(): $DoubleIterator
/**
 * 
 * @deprecated
 */
 "stream"(): $Stream<(double)>
 "contains"(arg0: double): boolean
/**
 * 
 * @deprecated
 */
 "contains"(arg0: any): boolean
 "spliterator"(): $Spliterator
 "addAll"(arg0: $DoubleCollection$$Type): boolean
 "removeIf"(arg0: $DoublePredicate$$Type): boolean
/**
 * 
 * @deprecated
 */
 "removeIf"(arg0: $Predicate$$Type<(double)>): boolean
 "removeIf"(arg0: $DoublePredicate$0$$Type): boolean
 "removeAll"(arg0: $DoubleCollection$$Type): boolean
 "retainAll"(arg0: $DoubleCollection$$Type): boolean
 "containsAll"(arg0: $DoubleCollection$$Type): boolean
/**
 * 
 * @deprecated
 */
 "parallelStream"(): $Stream<(double)>
 "rem"(arg0: double): boolean
 "doubleStream"(): $DoubleStream
 "doubleParallelStream"(): $DoubleStream
 "toDoubleArray"(): (double)[]
/**
 * 
 * @deprecated
 */
 "toDoubleArray"(arg0: (double)[]): (double)[]
 "doubleSpliterator"(): $DoubleSpliterator
 "doubleIterator"(): $DoubleIterator
 "size"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "toArray"(): (any)[]
 "addAll"(arg0: $Collection$$Type<(double)>): boolean
 "removeAll"(arg0: $Collection$$Type<(never)>): boolean
 "retainAll"(arg0: $Collection$$Type<(never)>): boolean
 "containsAll"(arg0: $Collection$$Type<(never)>): boolean
 "forEach"(arg0: $DoubleConsumer$0$$Type): void
/**
 * 
 * @deprecated
 */
 "forEach"(arg0: $Consumer$$Type<(double)>): void
 "forEach"(arg0: $DoubleConsumer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleCollection$$Type = ($DoubleCollection);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoubleCollection$$Original = $DoubleCollection;}
declare module "it.unimi.dsi.fastutil.floats.Float2ObjectFunction" {
import {$Float2ReferenceFunction} from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import {$Float2ByteFunction} from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import {$Object2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import {$Object2ObjectFunction, $Object2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import {$Int2FloatFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import {$Float2IntFunction} from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import {$Double2FloatFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import {$Int2ObjectFunction} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$Char2ObjectFunction} from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import {$Object2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Object2FloatFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import {$Byte2ObjectFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import {$Float2CharFunction} from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import {$Reference2ObjectFunction} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Object2CharFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Float2LongFunction} from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import {$Object2ByteFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import {$Float2ShortFunction} from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import {$Reference2FloatFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import {$Float2FloatFunction, $Float2FloatFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2FloatFunction"
import {$Short2ObjectFunction} from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import {$Object2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import {$Object2ShortFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import {$Long2FloatFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import {$Char2FloatFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import {$Short2FloatFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import {$Object2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import {$Double2ObjectFunction} from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import {$DoubleFunction$$Interface} from "java.util.function.DoubleFunction"
import {$Byte2FloatFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import {$Float2DoubleFunction} from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import {$Long2ObjectFunction} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"

export interface $Float2ObjectFunction$$Interface<V> extends $Function$0$$Interface<(float), (V)>, $DoubleFunction$$Interface<(V)> {

(arg0: float): V
}

export class $Float2ObjectFunction<V> implements $Float2ObjectFunction$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): V
 "remove"(arg0: float): V
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): V
 "get"(arg0: float): V
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "put"(arg0: float, arg1: V): V
 "put"(arg0: float, arg1: V): V
/**
 * 
 * @deprecated
 */
 "apply"(arg0: double): V
 "containsKey"(arg0: float): boolean
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "getOrDefault"(arg0: float, arg1: V): V
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: V): V
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (float)>): $Function<(T), (V)>
 "andThenFloat"(arg0: $Object2FloatFunction$$Type<(V)>): $Float2FloatFunction
 "andThenObject"<T>(arg0: $Object2ObjectFunction$$Type<(V), (T)>): $Float2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2FloatFunction$$Type): $Byte2ObjectFunction<(V)>
 "andThenLong"(arg0: $Object2LongFunction$$Type<(V)>): $Float2LongFunction
 "defaultReturnValue"(): V
 "defaultReturnValue"(arg0: V): void
 "composeLong"(arg0: $Long2FloatFunction$$Type): $Long2ObjectFunction<(V)>
 "andThenChar"(arg0: $Object2CharFunction$$Type<(V)>): $Float2CharFunction
 "andThenDouble"(arg0: $Object2DoubleFunction$$Type<(V)>): $Float2DoubleFunction
 "composeObject"<T>(arg0: $Object2FloatFunction$$Type<(T)>): $Object2ObjectFunction<(T), (V)>
 "composeChar"(arg0: $Char2FloatFunction$$Type): $Char2ObjectFunction<(V)>
 "composeReference"<T>(arg0: $Reference2FloatFunction$$Type<(T)>): $Reference2ObjectFunction<(T), (V)>
 "andThenShort"(arg0: $Object2ShortFunction$$Type<(V)>): $Float2ShortFunction
 "composeShort"(arg0: $Short2FloatFunction$$Type): $Short2ObjectFunction<(V)>
 "composeFloat"(arg0: $Float2FloatFunction$$Type): $Float2ObjectFunction<(V)>
 "andThenReference"<T>(arg0: $Object2ReferenceFunction$$Type<(V), (T)>): $Float2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2FloatFunction$$Type): $Double2ObjectFunction<(V)>
 "andThenByte"(arg0: $Object2ByteFunction$$Type<(V)>): $Float2ByteFunction
 "composeInt"(arg0: $Int2FloatFunction$$Type): $Int2ObjectFunction<(V)>
 "andThenInt"(arg0: $Object2IntFunction$$Type<(V)>): $Float2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: float): V
static "identity"<T>(): $Function<(float), (float)>
 "andThen"<V>(arg0: $Function$$Type<(V), (V)>): $Function<(float), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Float2ObjectFunction$$Type<V> = ((arg0: float) => V);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Float2ObjectFunction$$Original<V> = $Float2ObjectFunction<(V)>;}
declare module "it.unimi.dsi.fastutil.objects.Object2FloatFunction" {
import {$Float2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import {$Float2ByteFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import {$ToDoubleFunction$$Interface} from "java.util.function.ToDoubleFunction"
import {$Object2IntFunction} from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import {$Object2ObjectFunction, $Object2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import {$Int2FloatFunction} from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import {$Float2IntFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import {$Double2FloatFunction} from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import {$Int2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$Char2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import {$Object2DoubleFunction} from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Byte2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import {$Float2CharFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import {$Reference2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Object2CharFunction} from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Float2LongFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import {$Object2ByteFunction} from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import {$Float2ShortFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import {$Reference2FloatFunction} from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import {$Float2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import {$Float2FloatFunction, $Float2FloatFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2FloatFunction"
import {$Object2ShortFunction} from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import {$Object2ReferenceFunction} from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import {$Short2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import {$Char2FloatFunction} from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import {$Long2FloatFunction} from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import {$Short2FloatFunction} from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import {$Object2LongFunction} from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import {$Double2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import {$Byte2FloatFunction} from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import {$Float2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import {$Long2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"

export interface $Object2FloatFunction$$Interface<K> extends $Function$0$$Interface<(K), (float)>, $ToDoubleFunction$$Interface<(K)> {

(arg0: any): float
}

export class $Object2FloatFunction<K> implements $Object2FloatFunction$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): any
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): any
/**
 * 
 * @deprecated
 */
 "put"(arg0: K, arg1: float): float
 "put"(arg0: K, arg1: float): float
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "getFloat"(arg0: any): float
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: float): float
 "getOrDefault"(arg0: any, arg1: float): float
 "applyAsDouble"(arg0: K): double
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(float), (T)>): $Function<(K), (T)>
 "andThenFloat"(arg0: $Float2FloatFunction$$Type): $Object2FloatFunction<(K)>
 "andThenObject"<T>(arg0: $Float2ObjectFunction$$Type<(T)>): $Object2ObjectFunction<(K), (T)>
 "composeByte"(arg0: $Byte2ObjectFunction$$Type<(K)>): $Byte2FloatFunction
 "andThenLong"(arg0: $Float2LongFunction$$Type): $Object2LongFunction<(K)>
 "defaultReturnValue"(): float
 "defaultReturnValue"(arg0: float): void
 "composeLong"(arg0: $Long2ObjectFunction$$Type<(K)>): $Long2FloatFunction
 "andThenChar"(arg0: $Float2CharFunction$$Type): $Object2CharFunction<(K)>
 "andThenDouble"(arg0: $Float2DoubleFunction$$Type): $Object2DoubleFunction<(K)>
 "composeObject"<T>(arg0: $Object2ObjectFunction$$Type<(T), (K)>): $Object2FloatFunction<(T)>
 "composeChar"(arg0: $Char2ObjectFunction$$Type<(K)>): $Char2FloatFunction
 "composeReference"<T>(arg0: $Reference2ObjectFunction$$Type<(T), (K)>): $Reference2FloatFunction<(T)>
 "andThenShort"(arg0: $Float2ShortFunction$$Type): $Object2ShortFunction<(K)>
 "composeShort"(arg0: $Short2ObjectFunction$$Type<(K)>): $Short2FloatFunction
 "composeFloat"(arg0: $Float2ObjectFunction$$Type<(K)>): $Float2FloatFunction
 "andThenReference"<T>(arg0: $Float2ReferenceFunction$$Type<(T)>): $Object2ReferenceFunction<(K), (T)>
 "composeDouble"(arg0: $Double2ObjectFunction$$Type<(K)>): $Double2FloatFunction
 "andThenByte"(arg0: $Float2ByteFunction$$Type): $Object2ByteFunction<(K)>
 "removeFloat"(arg0: any): float
 "composeInt"(arg0: $Int2ObjectFunction$$Type<(K)>): $Int2FloatFunction
 "andThenInt"(arg0: $Float2IntFunction$$Type): $Object2IntFunction<(K)>
 "size"(): integer
 "clear"(): void
 "apply"(arg0: K): float
 "containsKey"(arg0: any): boolean
static "identity"<T>(): $Function<(K), (K)>
 "compose"<V>(arg0: $Function$$Type<(V), (K)>): $Function<(V), (float)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Object2FloatFunction$$Type<K> = ((arg0: any) => float);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Object2FloatFunction$$Original<K> = $Object2FloatFunction<(K)>;}
declare module "it.unimi.dsi.fastutil.shorts.ShortPredicate" {
import {$Predicate, $Predicate$$Type, $Predicate$$Interface} from "java.util.function.Predicate"
import {$IntPredicate, $IntPredicate$$Type, $IntPredicate$$Interface} from "java.util.function.IntPredicate"

export interface $ShortPredicate$$Interface extends $Predicate$$Interface<(short)>, $IntPredicate$$Interface {

(arg0: short): boolean
}

export class $ShortPredicate implements $ShortPredicate$$Interface {
/**
 * 
 * @deprecated
 */
 "test"(arg0: any): boolean
/**
 * 
 * @deprecated
 */
 "test"(arg0: short): boolean
 "test"(arg0: short): boolean
/**
 * 
 * @deprecated
 */
 "test"(arg0: integer): boolean
 "or"(arg0: $ShortPredicate$$Type): $ShortPredicate
 "or"(arg0: $IntPredicate$$Type): $ShortPredicate
/**
 * 
 * @deprecated
 */
 "or"(arg0: $Predicate$$Type<(short)>): $Predicate<(short)>
 "negate"(): $IntPredicate
 "and"(arg0: $IntPredicate$$Type): $IntPredicate
 "and"(arg0: $ShortPredicate$$Type): $ShortPredicate
/**
 * 
 * @deprecated
 */
 "and"(arg0: $Predicate$$Type<(short)>): $Predicate<(short)>
static "not"<T>(arg0: $Predicate$$Type<(short)>): $Predicate<(short)>
static "isEqual"<T>(arg0: any): $Predicate<(short)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShortPredicate$$Type = ((arg0: short) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShortPredicate$$Original = $ShortPredicate;}
declare module "it.unimi.dsi.fastutil.longs.LongComparator" {
import {$ToIntFunction$$Type} from "java.util.function.ToIntFunction"
import {$ToLongFunction$$Type} from "java.util.function.ToLongFunction"
import {$ToDoubleFunction$$Type} from "java.util.function.ToDoubleFunction"
import {$Comparable} from "java.lang.Comparable"
import {$Comparator, $Comparator$$Type, $Comparator$$Interface} from "java.util.Comparator"
import {$Function$$Type} from "java.util.function.Function"

export interface $LongComparator$$Interface extends $Comparator$$Interface<(long)> {
}

export class $LongComparator implements $LongComparator$$Interface {
/**
 * 
 * @deprecated
 */
 "compare"(arg0: any, arg1: any): integer
/**
 * 
 * @deprecated
 */
 "compare"(arg0: long, arg1: long): integer
 "compare"(arg0: long, arg1: long): integer
 "reversed"(): $LongComparator
 "thenComparing"(arg0: $Comparator$$Type<(long)>): $Comparator<(long)>
 "thenComparing"(arg0: $LongComparator$$Type): $LongComparator
 "equals"(arg0: any): boolean
static "reverseOrder"<T extends $Comparable<(object)>>(): $Comparator<(long)>
static "comparing"<T, U extends $Comparable<(object)>>(arg0: $Function$$Type<(long), (U)>): $Comparator<(long)>
static "comparing"<T, U>(arg0: $Function$$Type<(long), (U)>, arg1: $Comparator$$Type<(U)>): $Comparator<(long)>
 "thenComparing"<U>(arg0: $Function$$Type<(long), (U)>, arg1: $Comparator$$Type<(U)>): $Comparator<(long)>
 "thenComparing"<U extends $Comparable<(object)>>(arg0: $Function$$Type<(long), (U)>): $Comparator<(long)>
static "comparingInt"<T>(arg0: $ToIntFunction$$Type<(long)>): $Comparator<(long)>
static "comparingLong"<T>(arg0: $ToLongFunction$$Type<(long)>): $Comparator<(long)>
static "comparingDouble"<T>(arg0: $ToDoubleFunction$$Type<(long)>): $Comparator<(long)>
 "thenComparingInt"(arg0: $ToIntFunction$$Type<(long)>): $Comparator<(long)>
 "thenComparingLong"(arg0: $ToLongFunction$$Type<(long)>): $Comparator<(long)>
 "thenComparingDouble"(arg0: $ToDoubleFunction$$Type<(long)>): $Comparator<(long)>
static "naturalOrder"<T extends $Comparable<(object)>>(): $Comparator<(long)>
static "nullsFirst"<T>(arg0: $Comparator$$Type<(long)>): $Comparator<(long)>
static "nullsLast"<T>(arg0: $Comparator$$Type<(long)>): $Comparator<(long)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongComparator$$Type = ($LongComparator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LongComparator$$Original = $LongComparator;}
declare module "it.unimi.dsi.fastutil.bytes.ByteCollection" {
import {$ByteIterator} from "it.unimi.dsi.fastutil.bytes.ByteIterator"
import {$Collection$$Type, $Collection$$Interface} from "java.util.Collection"
import {$ByteConsumer$$Type} from "it.unimi.dsi.fastutil.bytes.ByteConsumer"
import {$ByteIterable$$Interface} from "it.unimi.dsi.fastutil.bytes.ByteIterable"
import {$Spliterator} from "java.util.Spliterator"
import {$IntStream} from "java.util.stream.IntStream"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$BytePredicate$$Type} from "it.unimi.dsi.fastutil.bytes.BytePredicate"
import {$IntPredicate$$Type} from "java.util.function.IntPredicate"
import {$IntSpliterator} from "it.unimi.dsi.fastutil.ints.IntSpliterator"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$IntFunction$$Type} from "java.util.function.IntFunction"
import {$IntIterator} from "it.unimi.dsi.fastutil.ints.IntIterator"
import {$IntConsumer$$Type} from "java.util.function.IntConsumer"
import {$Stream} from "java.util.stream.Stream"

export interface $ByteCollection$$Interface extends $Collection$$Interface<(byte)>, $ByteIterable$$Interface {
get "empty"(): boolean
}

export class $ByteCollection implements $ByteCollection$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): boolean
/**
 * 
 * @deprecated
 */
 "add"(arg0: any): boolean
 "add"(arg0: byte): boolean
/**
 * 
 * @deprecated
 */
 "add"(arg0: byte): boolean
 "toArray"(arg0: (byte)[]): (byte)[]
 "iterator"(): $ByteIterator
/**
 * 
 * @deprecated
 */
 "stream"(): $Stream<(byte)>
 "intStream"(): $IntStream
/**
 * 
 * @deprecated
 */
 "contains"(arg0: any): boolean
 "contains"(arg0: byte): boolean
 "spliterator"(): $Spliterator
 "addAll"(arg0: $ByteCollection$$Type): boolean
/**
 * 
 * @deprecated
 */
 "removeIf"(arg0: $Predicate$$Type<(byte)>): boolean
 "removeIf"(arg0: $BytePredicate$$Type): boolean
 "removeIf"(arg0: $IntPredicate$$Type): boolean
 "removeAll"(arg0: $ByteCollection$$Type): boolean
 "retainAll"(arg0: $ByteCollection$$Type): boolean
 "containsAll"(arg0: $ByteCollection$$Type): boolean
/**
 * 
 * @deprecated
 */
 "parallelStream"(): $Stream<(byte)>
 "rem"(arg0: byte): boolean
/**
 * 
 * @deprecated
 */
 "toByteArray"(arg0: (byte)[]): (byte)[]
 "toByteArray"(): (byte)[]
 "intSpliterator"(): $IntSpliterator
 "intIterator"(): $IntIterator
 "intParallelStream"(): $IntStream
 "size"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "toArray"(): (any)[]
 "addAll"(arg0: $Collection$$Type<(byte)>): boolean
 "removeAll"(arg0: $Collection$$Type<(never)>): boolean
 "retainAll"(arg0: $Collection$$Type<(never)>): boolean
 "containsAll"(arg0: $Collection$$Type<(never)>): boolean
 "forEach"(arg0: $ByteConsumer$$Type): void
/**
 * 
 * @deprecated
 */
 "forEach"(arg0: $Consumer$$Type<(byte)>): void
 "forEach"(arg0: $IntConsumer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ByteCollection$$Type = ($ByteCollection);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ByteCollection$$Original = $ByteCollection;}
declare module "it.unimi.dsi.fastutil.shorts.ShortIterator" {
import {$ShortConsumer, $ShortConsumer$$Type} from "it.unimi.dsi.fastutil.shorts.ShortConsumer"
import {$IntConsumer$$Type} from "java.util.function.IntConsumer"
import {$PrimitiveIterator$$Interface} from "java.util.PrimitiveIterator"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $ShortIterator$$Interface extends $PrimitiveIterator$$Interface<(short), ($ShortConsumer)> {
}

export class $ShortIterator implements $ShortIterator$$Interface {
 "forEachRemaining"(arg0: $IntConsumer$$Type): void
 "forEachRemaining"(arg0: $ShortConsumer$$Type): void
 "forEachRemaining"(arg0: any): void
/**
 * 
 * @deprecated
 */
 "forEachRemaining"(arg0: $Consumer$$Type<(short)>): void
/**
 * 
 * @deprecated
 */
 "next"(): any
 "skip"(arg0: integer): integer
 "nextShort"(): short
 "remove"(): void
 "hasNext"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShortIterator$$Type = ($ShortIterator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShortIterator$$Original = $ShortIterator;}
declare module "it.unimi.dsi.fastutil.ints.IntOpenHashSet" {
import {$Iterator$$Type} from "java.util.Iterator"
import {$AbstractIntSet} from "it.unimi.dsi.fastutil.ints.AbstractIntSet"
import {$Collection$$Type} from "java.util.Collection"
import {$IntStream$$Type} from "java.util.stream.IntStream"
import {$Spliterator} from "java.util.Spliterator"
import {$Hash$$Interface} from "it.unimi.dsi.fastutil.Hash"
import {$IntCollection$$Type} from "it.unimi.dsi.fastutil.ints.IntCollection"
import {$IntIterator, $IntIterator$$Type} from "it.unimi.dsi.fastutil.ints.IntIterator"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$IntConsumer$$Type} from "java.util.function.IntConsumer"
import {$Cloneable$$Interface} from "java.lang.Cloneable"
import {$Set} from "java.util.Set"

export class $IntOpenHashSet extends $AbstractIntSet implements $Serializable$$Interface, $Cloneable$$Interface, $Hash$$Interface {
constructor(arg0: $Iterator$$Type<(never)>)
constructor(arg0: $Iterator$$Type<(never)>, arg1: float)
constructor(arg0: $IntIterator$$Type)
constructor(arg0: $IntIterator$$Type, arg1: float)
constructor(arg0: (integer)[])
constructor(arg0: (integer)[], arg1: float)
constructor(arg0: (integer)[], arg1: integer, arg2: integer)
constructor(arg0: (integer)[], arg1: integer, arg2: integer, arg3: float)
constructor(arg0: $Collection$$Type<(integer)>, arg1: float)
constructor()
constructor(arg0: integer)
constructor(arg0: integer, arg1: float)
constructor(arg0: $IntCollection$$Type)
constructor(arg0: $IntCollection$$Type, arg1: float)
constructor(arg0: $Collection$$Type<(integer)>)

public "remove"(arg0: integer): boolean
public "size"(): integer
public "hashCode"(): integer
public "clone"(): $IntOpenHashSet
public "clear"(): void
public "isEmpty"(): boolean
public "add"(arg0: integer): boolean
public "iterator"(): $IntIterator
public "trim"(): boolean
public "trim"(arg0: integer): boolean
public static "of"(arg0: integer, arg1: integer): $IntOpenHashSet
public static "of"(): $IntOpenHashSet
public static "of"(...arg0: (integer)[]): $IntOpenHashSet
public static "of"(arg0: integer): $IntOpenHashSet
public static "of"(arg0: integer, arg1: integer, arg2: integer): $IntOpenHashSet
public "contains"(arg0: integer): boolean
public "spliterator"(): $Spliterator
public "addAll"(arg0: $IntCollection$$Type): boolean
public "addAll"(arg0: $Collection$$Type<(integer)>): boolean
public "forEach"(arg0: $IntConsumer$$Type): void
public static "toSet"(arg0: $IntStream$$Type): $IntOpenHashSet
public "ensureCapacity"(arg0: integer): void
public static "toSetWithExpectedSize"(arg0: $IntStream$$Type, arg1: integer): $IntOpenHashSet
/**
 * 
 * @deprecated
 */
public "remove"(arg0: any): boolean
/**
 * 
 * @deprecated
 */
public "add"(arg0: integer): boolean
/**
 * 
 * @deprecated
 */
public "add"(arg0: any): boolean
/**
 * 
 * @deprecated
 */
public "contains"(arg0: any): boolean
public static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $Set<(E)>
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $Set<(E)>
public static "of"<E>(...arg0: (E)[]): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $Set<(E)>
public static "of"<E>(arg0: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E): $Set<(E)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntOpenHashSet$$Type = ($IntOpenHashSet);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntOpenHashSet$$Original = $IntOpenHashSet;}
declare module "it.unimi.dsi.fastutil.floats.Float2ShortFunction" {
import {$Float2ReferenceFunction} from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import {$Float2ByteFunction} from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import {$Short2IntFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import {$Int2FloatFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import {$Reference2ShortFunction} from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import {$Float2IntFunction} from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import {$Double2FloatFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import {$Long2ShortFunction} from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import {$Short2CharFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import {$Char2ShortFunction} from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Object2FloatFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import {$Short2ShortFunction, $Short2ShortFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ShortFunction"
import {$Byte2ShortFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import {$Float2CharFunction} from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import {$Short2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Int2ShortFunction} from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import {$Float2LongFunction} from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import {$Short2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import {$Reference2FloatFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import {$Float2ObjectFunction} from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import {$Short2LongFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import {$Float2FloatFunction, $Float2FloatFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2FloatFunction"
import {$DoubleToIntFunction$$Interface} from "java.util.function.DoubleToIntFunction"
import {$Object2ShortFunction} from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import {$Short2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import {$Long2FloatFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import {$Char2FloatFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import {$Short2FloatFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import {$Byte2FloatFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import {$Short2ByteFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import {$Float2DoubleFunction} from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import {$Double2ShortFunction} from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"

export interface $Float2ShortFunction$$Interface extends $Function$0$$Interface<(float), (short)>, $DoubleToIntFunction$$Interface {

(arg0: float): short
}

export class $Float2ShortFunction implements $Float2ShortFunction$$Interface {
 "remove"(arg0: float): short
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): short
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): short
 "get"(arg0: float): short
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: float, arg1: short): short
/**
 * 
 * @deprecated
 */
 "put"(arg0: float, arg1: short): short
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "containsKey"(arg0: float): boolean
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: short): short
 "getOrDefault"(arg0: float, arg1: short): short
/**
 * 
 * @deprecated
 */
 "applyAsInt"(arg0: double): integer
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (float)>): $Function<(T), (short)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(short), (T)>): $Function<(float), (T)>
 "andThenFloat"(arg0: $Short2FloatFunction$$Type): $Float2FloatFunction
 "andThenObject"<T>(arg0: $Short2ObjectFunction$$Type<(T)>): $Float2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2FloatFunction$$Type): $Byte2ShortFunction
 "andThenLong"(arg0: $Short2LongFunction$$Type): $Float2LongFunction
 "defaultReturnValue"(): short
 "defaultReturnValue"(arg0: short): void
 "composeLong"(arg0: $Long2FloatFunction$$Type): $Long2ShortFunction
 "andThenChar"(arg0: $Short2CharFunction$$Type): $Float2CharFunction
 "andThenDouble"(arg0: $Short2DoubleFunction$$Type): $Float2DoubleFunction
 "composeObject"<T>(arg0: $Object2FloatFunction$$Type<(T)>): $Object2ShortFunction<(T)>
 "composeChar"(arg0: $Char2FloatFunction$$Type): $Char2ShortFunction
 "composeReference"<T>(arg0: $Reference2FloatFunction$$Type<(T)>): $Reference2ShortFunction<(T)>
 "andThenShort"(arg0: $Short2ShortFunction$$Type): $Float2ShortFunction
 "composeShort"(arg0: $Short2FloatFunction$$Type): $Short2ShortFunction
 "composeFloat"(arg0: $Float2FloatFunction$$Type): $Float2ShortFunction
 "andThenReference"<T>(arg0: $Short2ReferenceFunction$$Type<(T)>): $Float2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2FloatFunction$$Type): $Double2ShortFunction
 "andThenByte"(arg0: $Short2ByteFunction$$Type): $Float2ByteFunction
 "composeInt"(arg0: $Int2FloatFunction$$Type): $Int2ShortFunction
 "andThenInt"(arg0: $Short2IntFunction$$Type): $Float2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: float): short
static "identity"<T>(): $Function<(float), (float)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Float2ShortFunction$$Type = ((arg0: float) => short);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Float2ShortFunction$$Original = $Float2ShortFunction;}
declare module "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction" {
import {$Byte2ByteFunction, $Byte2ByteFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction"
import {$Float2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import {$Float2ByteFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import {$Byte2DoubleFunction} from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import {$Long2ByteFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import {$Int2FloatFunction} from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import {$Byte2IntFunction} from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"
import {$Float2IntFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import {$Double2FloatFunction} from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import {$Reference2ByteFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import {$Byte2ReferenceFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Object2FloatFunction} from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import {$Byte2ObjectFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import {$IntToDoubleFunction$$Interface} from "java.util.function.IntToDoubleFunction"
import {$Byte2ShortFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import {$Float2CharFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import {$Byte2CharFunction} from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Float2LongFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import {$Object2ByteFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import {$Float2ShortFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import {$Byte2LongFunction} from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import {$Reference2FloatFunction} from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import {$Float2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import {$Float2FloatFunction, $Float2FloatFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2FloatFunction"
import {$Char2ByteFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import {$Double2ByteFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import {$Char2FloatFunction} from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import {$Long2FloatFunction} from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import {$Short2FloatFunction} from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import {$Short2ByteFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import {$Float2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import {$Int2ByteFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"

export interface $Byte2FloatFunction$$Interface extends $Function$0$$Interface<(byte), (float)>, $IntToDoubleFunction$$Interface {

(arg0: byte): float
}

export class $Byte2FloatFunction implements $Byte2FloatFunction$$Interface {
 "remove"(arg0: byte): float
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): float
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): float
 "get"(arg0: byte): float
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: byte, arg1: float): float
/**
 * 
 * @deprecated
 */
 "put"(arg0: byte, arg1: float): float
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "containsKey"(arg0: byte): boolean
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: float): float
 "getOrDefault"(arg0: byte, arg1: float): float
/**
 * 
 * @deprecated
 */
 "applyAsDouble"(arg0: integer): double
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (byte)>): $Function<(T), (float)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(float), (T)>): $Function<(byte), (T)>
 "andThenFloat"(arg0: $Float2FloatFunction$$Type): $Byte2FloatFunction
 "andThenObject"<T>(arg0: $Float2ObjectFunction$$Type<(T)>): $Byte2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2ByteFunction$$Type): $Byte2FloatFunction
 "andThenLong"(arg0: $Float2LongFunction$$Type): $Byte2LongFunction
 "defaultReturnValue"(): float
 "defaultReturnValue"(arg0: float): void
 "composeLong"(arg0: $Long2ByteFunction$$Type): $Long2FloatFunction
 "andThenChar"(arg0: $Float2CharFunction$$Type): $Byte2CharFunction
 "andThenDouble"(arg0: $Float2DoubleFunction$$Type): $Byte2DoubleFunction
 "composeObject"<T>(arg0: $Object2ByteFunction$$Type<(T)>): $Object2FloatFunction<(T)>
 "composeChar"(arg0: $Char2ByteFunction$$Type): $Char2FloatFunction
 "composeReference"<T>(arg0: $Reference2ByteFunction$$Type<(T)>): $Reference2FloatFunction<(T)>
 "andThenShort"(arg0: $Float2ShortFunction$$Type): $Byte2ShortFunction
 "composeShort"(arg0: $Short2ByteFunction$$Type): $Short2FloatFunction
 "composeFloat"(arg0: $Float2ByteFunction$$Type): $Float2FloatFunction
 "andThenReference"<T>(arg0: $Float2ReferenceFunction$$Type<(T)>): $Byte2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2ByteFunction$$Type): $Double2FloatFunction
 "andThenByte"(arg0: $Float2ByteFunction$$Type): $Byte2ByteFunction
 "composeInt"(arg0: $Int2ByteFunction$$Type): $Int2FloatFunction
 "andThenInt"(arg0: $Float2IntFunction$$Type): $Byte2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: byte): float
static "identity"<T>(): $Function<(byte), (byte)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Byte2FloatFunction$$Type = ((arg0: byte) => float);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Byte2FloatFunction$$Original = $Byte2FloatFunction;}
declare module "it.unimi.dsi.fastutil.doubles.Double2FloatFunction" {
import {$Char2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import {$DoubleUnaryOperator, $DoubleUnaryOperator$$Type, $DoubleUnaryOperator$$Interface} from "java.util.function.DoubleUnaryOperator"
import {$Float2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import {$Float2ByteFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import {$Byte2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import {$Int2FloatFunction} from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import {$Float2IntFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import {$Double2ReferenceFunction} from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import {$Object2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Object2FloatFunction} from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import {$Float2CharFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import {$Int2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import {$Short2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import {$Double2DoubleFunction, $Double2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2DoubleFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Long2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import {$Float2LongFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import {$Float2ShortFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import {$Double2CharFunction} from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import {$Reference2FloatFunction} from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import {$Float2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import {$Double2LongFunction} from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import {$Float2FloatFunction, $Float2FloatFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2FloatFunction"
import {$Double2ByteFunction} from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import {$Char2FloatFunction} from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import {$Long2FloatFunction} from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import {$Double2IntFunction} from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import {$Short2FloatFunction} from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import {$Double2ObjectFunction} from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import {$Reference2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import {$Byte2FloatFunction} from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import {$Float2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import {$Double2ShortFunction} from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"

export interface $Double2FloatFunction$$Interface extends $Function$0$$Interface<(double), (float)>, $DoubleUnaryOperator$$Interface {

(arg0: double): float
}

export class $Double2FloatFunction implements $Double2FloatFunction$$Interface {
 "remove"(arg0: double): float
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): float
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): float
 "get"(arg0: double): float
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: double, arg1: float): float
/**
 * 
 * @deprecated
 */
 "put"(arg0: double, arg1: float): float
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "containsKey"(arg0: double): boolean
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: float): float
 "getOrDefault"(arg0: double, arg1: float): float
 "applyAsDouble"(arg0: double): double
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (double)>): $Function<(T), (float)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(float), (T)>): $Function<(double), (T)>
 "andThenFloat"(arg0: $Float2FloatFunction$$Type): $Double2FloatFunction
 "andThenObject"<T>(arg0: $Float2ObjectFunction$$Type<(T)>): $Double2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2DoubleFunction$$Type): $Byte2FloatFunction
 "andThenLong"(arg0: $Float2LongFunction$$Type): $Double2LongFunction
 "defaultReturnValue"(): float
 "defaultReturnValue"(arg0: float): void
 "composeLong"(arg0: $Long2DoubleFunction$$Type): $Long2FloatFunction
 "andThenChar"(arg0: $Float2CharFunction$$Type): $Double2CharFunction
 "andThenDouble"(arg0: $Float2DoubleFunction$$Type): $Double2DoubleFunction
 "composeObject"<T>(arg0: $Object2DoubleFunction$$Type<(T)>): $Object2FloatFunction<(T)>
 "composeChar"(arg0: $Char2DoubleFunction$$Type): $Char2FloatFunction
 "composeReference"<T>(arg0: $Reference2DoubleFunction$$Type<(T)>): $Reference2FloatFunction<(T)>
 "andThenShort"(arg0: $Float2ShortFunction$$Type): $Double2ShortFunction
 "composeShort"(arg0: $Short2DoubleFunction$$Type): $Short2FloatFunction
 "composeFloat"(arg0: $Float2DoubleFunction$$Type): $Float2FloatFunction
 "andThenReference"<T>(arg0: $Float2ReferenceFunction$$Type<(T)>): $Double2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2DoubleFunction$$Type): $Double2FloatFunction
 "andThenByte"(arg0: $Float2ByteFunction$$Type): $Double2ByteFunction
 "composeInt"(arg0: $Int2DoubleFunction$$Type): $Int2FloatFunction
 "andThenInt"(arg0: $Float2IntFunction$$Type): $Double2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: double): float
static "identity"(): $DoubleUnaryOperator
 "compose"(arg0: $DoubleUnaryOperator$$Type): $DoubleUnaryOperator
 "andThen"(arg0: $DoubleUnaryOperator$$Type): $DoubleUnaryOperator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Double2FloatFunction$$Type = ((arg0: double) => float);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Double2FloatFunction$$Original = $Double2FloatFunction;}
declare module "it.unimi.dsi.fastutil.ints.IntBinaryOperator" {
import {$BiFunction} from "java.util.function.BiFunction"
import {$Comparator$$Type} from "java.util.Comparator"
import {$Function$$Type} from "java.util.function.Function"
import {$BinaryOperator, $BinaryOperator$$Interface} from "java.util.function.BinaryOperator"
import {$IntBinaryOperator$$Interface as $IntBinaryOperator$0$$Interface} from "java.util.function.IntBinaryOperator"

export interface $IntBinaryOperator$$Interface extends $BinaryOperator$$Interface<(integer)>, $IntBinaryOperator$0$$Interface {

(arg0: integer, arg1: integer): integer
}

export class $IntBinaryOperator implements $IntBinaryOperator$$Interface {
/**
 * 
 * @deprecated
 */
 "apply"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "apply"(arg0: integer, arg1: integer): integer
 "apply"(arg0: integer, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "applyAsInt"(arg0: integer, arg1: integer): integer
static "minBy"<T>(arg0: $Comparator$$Type<(integer)>): $BinaryOperator<(integer)>
static "maxBy"<T>(arg0: $Comparator$$Type<(integer)>): $BinaryOperator<(integer)>
 "andThen"<V>(arg0: $Function$$Type<(integer), (V)>): $BiFunction<(integer), (integer), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntBinaryOperator$$Type = ((arg0: integer, arg1: integer) => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntBinaryOperator$$Original = $IntBinaryOperator;}
declare module "it.unimi.dsi.fastutil.objects.Object2LongFunction" {
import {$Object2IntFunction} from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import {$Long2CharFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import {$Long2IntFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import {$Long2ByteFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import {$Object2ObjectFunction, $Object2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import {$Reference2LongFunction} from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import {$Long2ShortFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import {$ToLongFunction$$Interface} from "java.util.function.ToLongFunction"
import {$Int2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$Char2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import {$Object2DoubleFunction} from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Object2FloatFunction} from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import {$Byte2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import {$Reference2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Object2CharFunction} from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Long2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import {$Long2LongFunction, $Long2LongFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import {$Float2LongFunction} from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import {$Object2ByteFunction} from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import {$Long2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import {$Byte2LongFunction} from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import {$Char2LongFunction} from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import {$Float2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import {$Double2LongFunction} from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import {$Short2LongFunction} from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import {$Int2LongFunction} from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import {$Object2ShortFunction} from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import {$Object2ReferenceFunction} from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import {$Short2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import {$Long2FloatFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import {$Double2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import {$Long2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"

export interface $Object2LongFunction$$Interface<K> extends $Function$0$$Interface<(K), (long)>, $ToLongFunction$$Interface<(K)> {

(arg0: any): long
}

export class $Object2LongFunction<K> implements $Object2LongFunction$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): any
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): long
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: K, arg1: long): long
/**
 * 
 * @deprecated
 */
 "put"(arg0: K, arg1: long): long
 "getLong"(arg0: any): long
 "getOrDefault"(arg0: any, arg1: long): long
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: long): long
 "applyAsLong"(arg0: K): long
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(long), (T)>): $Function<(K), (T)>
 "removeLong"(arg0: any): long
 "andThenFloat"(arg0: $Long2FloatFunction$$Type): $Object2FloatFunction<(K)>
 "andThenObject"<T>(arg0: $Long2ObjectFunction$$Type<(T)>): $Object2ObjectFunction<(K), (T)>
 "composeByte"(arg0: $Byte2ObjectFunction$$Type<(K)>): $Byte2LongFunction
 "andThenLong"(arg0: $Long2LongFunction$$Type): $Object2LongFunction<(K)>
 "defaultReturnValue"(arg0: long): void
 "defaultReturnValue"(): long
 "composeLong"(arg0: $Long2ObjectFunction$$Type<(K)>): $Long2LongFunction
 "andThenChar"(arg0: $Long2CharFunction$$Type): $Object2CharFunction<(K)>
 "andThenDouble"(arg0: $Long2DoubleFunction$$Type): $Object2DoubleFunction<(K)>
 "composeObject"<T>(arg0: $Object2ObjectFunction$$Type<(T), (K)>): $Object2LongFunction<(T)>
 "composeChar"(arg0: $Char2ObjectFunction$$Type<(K)>): $Char2LongFunction
 "composeReference"<T>(arg0: $Reference2ObjectFunction$$Type<(T), (K)>): $Reference2LongFunction<(T)>
 "andThenShort"(arg0: $Long2ShortFunction$$Type): $Object2ShortFunction<(K)>
 "composeShort"(arg0: $Short2ObjectFunction$$Type<(K)>): $Short2LongFunction
 "composeFloat"(arg0: $Float2ObjectFunction$$Type<(K)>): $Float2LongFunction
 "andThenReference"<T>(arg0: $Long2ReferenceFunction$$Type<(T)>): $Object2ReferenceFunction<(K), (T)>
 "composeDouble"(arg0: $Double2ObjectFunction$$Type<(K)>): $Double2LongFunction
 "andThenByte"(arg0: $Long2ByteFunction$$Type): $Object2ByteFunction<(K)>
 "composeInt"(arg0: $Int2ObjectFunction$$Type<(K)>): $Int2LongFunction
 "andThenInt"(arg0: $Long2IntFunction$$Type): $Object2IntFunction<(K)>
 "size"(): integer
 "clear"(): void
 "apply"(arg0: K): long
 "containsKey"(arg0: any): boolean
static "identity"<T>(): $Function<(K), (K)>
 "compose"<V>(arg0: $Function$$Type<(V), (K)>): $Function<(V), (long)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Object2LongFunction$$Type<K> = ((arg0: any) => long);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Object2LongFunction$$Original<K> = $Object2LongFunction<(K)>;}
declare module "it.unimi.dsi.fastutil.ints.IntList" {
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Spliterator} from "java.util.Spliterator"
import {$List, $List$$Type, $List$$Interface} from "java.util.List"
import {$IntPredicate$$Type as $IntPredicate$0$$Type} from "java.util.function.IntPredicate"
import {$IntFunction$$Type} from "java.util.function.IntFunction"
import {$IntConsumer$$Type as $IntConsumer$0$$Type} from "java.util.function.IntConsumer"
import {$IntUnaryOperator$$Type} from "it.unimi.dsi.fastutil.ints.IntUnaryOperator"
import {$Stream} from "java.util.stream.Stream"
import {$IntComparator$$Type} from "it.unimi.dsi.fastutil.ints.IntComparator"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$Collection$$Type} from "java.util.Collection"
import {$SequencedCollection} from "java.util.SequencedCollection"
import {$Comparator$$Type} from "java.util.Comparator"
import {$IntStream} from "java.util.stream.IntStream"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$IntCollection$$Type, $IntCollection$$Interface} from "it.unimi.dsi.fastutil.ints.IntCollection"
import {$IntSpliterator} from "it.unimi.dsi.fastutil.ints.IntSpliterator"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$IntListIterator} from "it.unimi.dsi.fastutil.ints.IntListIterator"
import {$IntUnaryOperator$$Type as $IntUnaryOperator$0$$Type} from "java.util.function.IntUnaryOperator"
import {$IntIterator} from "it.unimi.dsi.fastutil.ints.IntIterator"
import {$ListIterator} from "java.util.ListIterator"
import {$IntPredicate$$Type} from "it.unimi.dsi.fastutil.ints.IntPredicate"
import {$IntConsumer$$Type} from "it.unimi.dsi.fastutil.ints.IntConsumer"

export interface $IntList$$Interface extends $List$$Interface<(integer)>, $Comparable$$Interface<($List<(integer)>)>, $IntCollection$$Interface {
set "elements"(value: (integer)[])
get "empty"(): boolean
get "first"(): integer
get "last"(): integer
}

export class $IntList implements $IntList$$Interface {
 "removeInt"(arg0: integer): integer
/**
 * 
 * @deprecated
 */
 "remove"(arg0: integer): any
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): boolean
 "size"(arg0: integer): void
/**
 * 
 * @deprecated
 */
 "get"(arg0: integer): integer
/**
 * 
 * @deprecated
 */
 "indexOf"(arg0: any): integer
 "indexOf"(arg0: integer): integer
 "getInt"(arg0: integer): integer
/**
 * 
 * @deprecated
 */
 "lastIndexOf"(arg0: any): integer
 "lastIndexOf"(arg0: integer): integer
 "replaceAll"(arg0: $IntUnaryOperator$0$$Type): void
/**
 * 
 * @deprecated
 */
 "replaceAll"(arg0: $UnaryOperator$$Type<(integer)>): void
 "replaceAll"(arg0: $IntUnaryOperator$$Type): void
 "add"(arg0: integer): boolean
/**
 * 
 * @deprecated
 */
 "add"(arg0: any): boolean
 "add"(arg0: integer, arg1: integer): void
/**
 * 
 * @deprecated
 */
 "add"(arg0: integer, arg1: integer): void
/**
 * 
 * @deprecated
 */
 "add"(arg0: integer): boolean
/**
 * 
 * @deprecated
 */
 "add"(arg0: integer, arg1: any): void
 "subList"(arg0: integer, arg1: integer): $List
 "iterator"(): $IntListIterator
static "of"(...arg0: (integer)[]): $IntList
static "of"(): $IntList
static "of"(arg0: integer, arg1: integer): $IntList
static "of"(arg0: integer): $IntList
static "of"(arg0: integer, arg1: integer, arg2: integer): $IntList
/**
 * 
 * @deprecated
 */
 "contains"(arg0: any): boolean
 "spliterator"(): $Spliterator
 "addAll"(arg0: integer, arg1: $IntCollection$$Type): boolean
 "addAll"(arg0: integer, arg1: $IntList$$Type): boolean
 "addAll"(arg0: $IntList$$Type): boolean
 "set"(arg0: integer, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "set"(arg0: integer, arg1: any): any
/**
 * 
 * @deprecated
 */
 "set"(arg0: integer, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "sort"(arg0: $Comparator$$Type<(integer)>): void
 "sort"(arg0: $IntComparator$$Type): void
 "listIterator"(): $ListIterator
 "listIterator"(arg0: integer): $ListIterator
 "getElements"(arg0: integer, arg1: (integer)[], arg2: integer, arg3: integer): void
 "setElements"(arg0: integer, arg1: (integer)[], arg2: integer, arg3: integer): void
 "setElements"(arg0: integer, arg1: (integer)[]): void
 "setElements"(arg0: (integer)[]): void
/**
 * 
 * @deprecated
 */
 "unstableSort"(arg0: $Comparator$$Type<(integer)>): void
 "unstableSort"(arg0: $IntComparator$$Type): void
 "removeElements"(arg0: integer, arg1: integer): void
 "addElements"(arg0: integer, arg1: (integer)[], arg2: integer, arg3: integer): void
 "addElements"(arg0: integer, arg1: (integer)[]): void
 "size"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<E>(arg0: $Collection$$Type<(integer)>): $List<(integer)>
 "clear"(): void
 "isEmpty"(): boolean
 "toArray"(): (any)[]
 "toArray"<T>(arg0: (T)[]): (T)[]
static "of"<E>(arg0: integer, arg1: integer, arg2: integer): $List<(integer)>
static "of"<E>(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $List<(integer)>
static "of"<E>(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $List<(integer)>
static "of"<E>(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer): $List<(integer)>
static "of"<E>(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer): $List<(integer)>
static "of"<E>(arg0: integer): $List<(integer)>
static "of"<E>(arg0: integer, arg1: integer): $List<(integer)>
static "of"<E>(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): $List<(integer)>
static "of"<E>(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer): $List<(integer)>
static "of"<E>(...arg0: (integer)[]): $List<(integer)>
static "of"<E>(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): $List<(integer)>
 "addAll"(arg0: $Collection$$Type<(integer)>): boolean
 "addAll"(arg0: integer, arg1: $Collection$$Type<(integer)>): boolean
 "getFirst"(): integer
 "getLast"(): integer
 "addFirst"(arg0: integer): void
 "addLast"(arg0: integer): void
 "removeFirst"(): integer
 "removeLast"(): integer
 "removeAll"(arg0: $Collection$$Type<(never)>): boolean
 "retainAll"(arg0: $Collection$$Type<(never)>): boolean
 "reversed"(): $SequencedCollection
 "containsAll"(arg0: $Collection$$Type<(never)>): boolean
 "compareTo"(arg0: $List$$Type<(integer)>): integer
 "toArray"(arg0: (integer)[]): (integer)[]
/**
 * 
 * @deprecated
 */
 "stream"(): $Stream<(integer)>
 "intStream"(): $IntStream
 "contains"(arg0: integer): boolean
 "addAll"(arg0: $IntCollection$$Type): boolean
/**
 * 
 * @deprecated
 */
 "removeIf"(arg0: $Predicate$$Type<(integer)>): boolean
 "removeIf"(arg0: $IntPredicate$0$$Type): boolean
 "removeIf"(arg0: $IntPredicate$$Type): boolean
 "removeAll"(arg0: $IntCollection$$Type): boolean
 "retainAll"(arg0: $IntCollection$$Type): boolean
 "containsAll"(arg0: $IntCollection$$Type): boolean
/**
 * 
 * @deprecated
 */
 "parallelStream"(): $Stream<(integer)>
 "rem"(arg0: integer): boolean
/**
 * 
 * @deprecated
 */
 "toIntArray"(arg0: (integer)[]): (integer)[]
 "toIntArray"(): (integer)[]
 "intSpliterator"(): $IntSpliterator
 "intIterator"(): $IntIterator
 "intParallelStream"(): $IntStream
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "forEach"(arg0: $IntConsumer$0$$Type): void
/**
 * 
 * @deprecated
 */
 "forEach"(arg0: $Consumer$$Type<(integer)>): void
 "forEach"(arg0: $IntConsumer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntList$$Type = ($IntList);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntList$$Original = $IntList;}
declare module "it.unimi.dsi.fastutil.floats.Float2ByteFunction" {
import {$Byte2ByteFunction, $Byte2ByteFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction"
import {$Float2ReferenceFunction} from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import {$Byte2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import {$Long2ByteFunction} from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import {$Int2FloatFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import {$Byte2IntFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"
import {$Float2IntFunction} from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import {$Double2FloatFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import {$Reference2ByteFunction} from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import {$Byte2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Object2FloatFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import {$Byte2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import {$Byte2ShortFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import {$Float2CharFunction} from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import {$Byte2CharFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Float2LongFunction} from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import {$Object2ByteFunction} from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import {$Float2ShortFunction} from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import {$Byte2LongFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import {$Reference2FloatFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import {$Float2ObjectFunction} from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import {$Float2FloatFunction, $Float2FloatFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2FloatFunction"
import {$Char2ByteFunction} from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import {$Double2ByteFunction} from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import {$DoubleToIntFunction$$Interface} from "java.util.function.DoubleToIntFunction"
import {$Long2FloatFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import {$Char2FloatFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import {$Short2FloatFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import {$Byte2FloatFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import {$Short2ByteFunction} from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import {$Float2DoubleFunction} from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import {$Int2ByteFunction} from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"

export interface $Float2ByteFunction$$Interface extends $Function$0$$Interface<(float), (byte)>, $DoubleToIntFunction$$Interface {

(arg0: float): byte
}

export class $Float2ByteFunction implements $Float2ByteFunction$$Interface {
 "remove"(arg0: float): byte
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): byte
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): byte
 "get"(arg0: float): byte
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: float, arg1: byte): byte
/**
 * 
 * @deprecated
 */
 "put"(arg0: float, arg1: byte): byte
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "containsKey"(arg0: float): boolean
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: byte): byte
 "getOrDefault"(arg0: float, arg1: byte): byte
/**
 * 
 * @deprecated
 */
 "applyAsInt"(arg0: double): integer
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (float)>): $Function<(T), (byte)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(byte), (T)>): $Function<(float), (T)>
 "andThenFloat"(arg0: $Byte2FloatFunction$$Type): $Float2FloatFunction
 "andThenObject"<T>(arg0: $Byte2ObjectFunction$$Type<(T)>): $Float2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2FloatFunction$$Type): $Byte2ByteFunction
 "andThenLong"(arg0: $Byte2LongFunction$$Type): $Float2LongFunction
 "defaultReturnValue"(): byte
 "defaultReturnValue"(arg0: byte): void
 "composeLong"(arg0: $Long2FloatFunction$$Type): $Long2ByteFunction
 "andThenChar"(arg0: $Byte2CharFunction$$Type): $Float2CharFunction
 "andThenDouble"(arg0: $Byte2DoubleFunction$$Type): $Float2DoubleFunction
 "composeObject"<T>(arg0: $Object2FloatFunction$$Type<(T)>): $Object2ByteFunction<(T)>
 "composeChar"(arg0: $Char2FloatFunction$$Type): $Char2ByteFunction
 "composeReference"<T>(arg0: $Reference2FloatFunction$$Type<(T)>): $Reference2ByteFunction<(T)>
 "andThenShort"(arg0: $Byte2ShortFunction$$Type): $Float2ShortFunction
 "composeShort"(arg0: $Short2FloatFunction$$Type): $Short2ByteFunction
 "composeFloat"(arg0: $Float2FloatFunction$$Type): $Float2ByteFunction
 "andThenReference"<T>(arg0: $Byte2ReferenceFunction$$Type<(T)>): $Float2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2FloatFunction$$Type): $Double2ByteFunction
 "andThenByte"(arg0: $Byte2ByteFunction$$Type): $Float2ByteFunction
 "composeInt"(arg0: $Int2FloatFunction$$Type): $Int2ByteFunction
 "andThenInt"(arg0: $Byte2IntFunction$$Type): $Float2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: float): byte
static "identity"<T>(): $Function<(float), (float)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Float2ByteFunction$$Type = ((arg0: float) => byte);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Float2ByteFunction$$Original = $Float2ByteFunction;}
declare module "it.unimi.dsi.fastutil.objects.ObjectList" {
import {$Iterator} from "java.util.Iterator"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$Collection$$Type} from "java.util.Collection"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Spliterator} from "java.util.Spliterator"
import {$SequencedCollection} from "java.util.SequencedCollection"
import {$Comparator$$Type} from "java.util.Comparator"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$List, $List$$Type, $List$$Interface} from "java.util.List"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$IntFunction$$Type} from "java.util.function.IntFunction"
import {$ObjectCollection$$Interface} from "it.unimi.dsi.fastutil.objects.ObjectCollection"
import {$ListIterator} from "java.util.ListIterator"
import {$Stream} from "java.util.stream.Stream"
import {$ObjectListIterator} from "it.unimi.dsi.fastutil.objects.ObjectListIterator"

export interface $ObjectList$$Interface<K> extends $List$$Interface<(K)>, $Comparable$$Interface<($List<(K)>)>, $ObjectCollection$$Interface<(K)> {
set "elements"(value: (K)[])
get "empty"(): boolean
get "first"(): K
get "last"(): K
}

export class $ObjectList<K> implements $ObjectList$$Interface {
 "size"(arg0: integer): void
 "subList"(arg0: integer, arg1: integer): $ObjectList<(K)>
 "iterator"(): $Iterator
static "of"<K>(...arg0: (K)[]): $ObjectList<(K)>
static "of"<K>(arg0: K, arg1: K, arg2: K): $ObjectList<(K)>
static "of"<K>(arg0: K, arg1: K): $ObjectList<(K)>
static "of"<K>(): $ObjectList<(K)>
static "of"<K>(arg0: K): $ObjectList<(K)>
 "spliterator"(): $Spliterator
 "addAll"(arg0: $ObjectList$$Type<(K)>): boolean
 "addAll"(arg0: integer, arg1: $ObjectList$$Type<(K)>): boolean
 "sort"(arg0: $Comparator$$Type<(K)>): void
 "listIterator"(arg0: integer): $ObjectListIterator<(K)>
 "listIterator"(): $ListIterator
 "getElements"(arg0: integer, arg1: (any)[], arg2: integer, arg3: integer): void
 "setElements"(arg0: integer, arg1: (K)[], arg2: integer, arg3: integer): void
 "setElements"(arg0: integer, arg1: (K)[]): void
 "setElements"(arg0: (K)[]): void
 "unstableSort"(arg0: $Comparator$$Type<(K)>): void
 "removeElements"(arg0: integer, arg1: integer): void
 "addElements"(arg0: integer, arg1: (K)[]): void
 "addElements"(arg0: integer, arg1: (K)[], arg2: integer, arg3: integer): void
 "remove"(arg0: any): boolean
 "remove"(arg0: integer): K
 "size"(): integer
 "get"(arg0: integer): K
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<E>(arg0: $Collection$$Type<(K)>): $List<(K)>
 "indexOf"(arg0: any): integer
 "clear"(): void
 "lastIndexOf"(arg0: any): integer
 "isEmpty"(): boolean
 "replaceAll"(arg0: $UnaryOperator$$Type<(K)>): void
 "add"(arg0: K): boolean
 "add"(arg0: integer, arg1: K): void
 "toArray"(): (any)[]
 "toArray"<T>(arg0: (T)[]): (T)[]
static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K): $List<(K)>
static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K): $List<(K)>
static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K, arg6: K, arg7: K, arg8: K, arg9: K): $List<(K)>
static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K, arg6: K, arg7: K, arg8: K): $List<(K)>
static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K, arg6: K): $List<(K)>
static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K, arg6: K, arg7: K): $List<(K)>
static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K): $List<(K)>
 "contains"(arg0: any): boolean
 "addAll"(arg0: $Collection$$Type<(K)>): boolean
 "addAll"(arg0: integer, arg1: $Collection$$Type<(K)>): boolean
 "set"(arg0: integer, arg1: K): K
 "getFirst"(): K
 "getLast"(): K
 "addFirst"(arg0: K): void
 "addLast"(arg0: K): void
 "removeFirst"(): K
 "removeLast"(): K
 "removeAll"(arg0: $Collection$$Type<(never)>): boolean
 "retainAll"(arg0: $Collection$$Type<(never)>): boolean
 "reversed"(): $SequencedCollection
 "containsAll"(arg0: $Collection$$Type<(never)>): boolean
 "compareTo"(arg0: $List$$Type<(K)>): integer
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "stream"(): $Stream<(K)>
 "removeIf"(arg0: $Predicate$$Type<(K)>): boolean
 "parallelStream"(): $Stream<(K)>
 "forEach"(arg0: $Consumer$$Type<(K)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectList$$Type<K> = ($ObjectList<(K)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ObjectList$$Original<K> = $ObjectList<(K)>;}
declare module "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction" {
import {$Char2DoubleFunction} from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import {$Byte2DoubleFunction} from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import {$Short2IntFunction} from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import {$Reference2ShortFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import {$Double2FloatFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import {$Double2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import {$Long2ShortFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import {$Short2CharFunction} from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import {$Object2DoubleFunction} from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import {$Char2ShortFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Short2ShortFunction, $Short2ShortFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ShortFunction"
import {$IntToDoubleFunction$$Interface} from "java.util.function.IntToDoubleFunction"
import {$Byte2ShortFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import {$Int2DoubleFunction} from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import {$Double2DoubleFunction, $Double2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2DoubleFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Long2DoubleFunction} from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import {$Int2ShortFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import {$Short2ReferenceFunction} from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import {$Float2ShortFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import {$Double2CharFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import {$Double2LongFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import {$Short2LongFunction} from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import {$Double2ByteFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import {$Short2ObjectFunction} from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import {$Object2ShortFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import {$Double2IntFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import {$Short2FloatFunction} from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import {$Double2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import {$Reference2DoubleFunction} from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import {$Short2ByteFunction} from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import {$Float2DoubleFunction} from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import {$Double2ShortFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"

export interface $Short2DoubleFunction$$Interface extends $Function$0$$Interface<(short), (double)>, $IntToDoubleFunction$$Interface {

(arg0: short): double
}

export class $Short2DoubleFunction implements $Short2DoubleFunction$$Interface {
 "remove"(arg0: short): double
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): double
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): double
 "get"(arg0: short): double
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: short, arg1: double): double
/**
 * 
 * @deprecated
 */
 "put"(arg0: short, arg1: double): double
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "containsKey"(arg0: short): boolean
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: double): double
 "getOrDefault"(arg0: short, arg1: double): double
/**
 * 
 * @deprecated
 */
 "applyAsDouble"(arg0: integer): double
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (short)>): $Function<(T), (double)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(double), (T)>): $Function<(short), (T)>
 "andThenFloat"(arg0: $Double2FloatFunction$$Type): $Short2FloatFunction
 "andThenObject"<T>(arg0: $Double2ObjectFunction$$Type<(T)>): $Short2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2ShortFunction$$Type): $Byte2DoubleFunction
 "andThenLong"(arg0: $Double2LongFunction$$Type): $Short2LongFunction
 "defaultReturnValue"(): double
 "defaultReturnValue"(arg0: double): void
 "composeLong"(arg0: $Long2ShortFunction$$Type): $Long2DoubleFunction
 "andThenChar"(arg0: $Double2CharFunction$$Type): $Short2CharFunction
 "andThenDouble"(arg0: $Double2DoubleFunction$$Type): $Short2DoubleFunction
 "composeObject"<T>(arg0: $Object2ShortFunction$$Type<(T)>): $Object2DoubleFunction<(T)>
 "composeChar"(arg0: $Char2ShortFunction$$Type): $Char2DoubleFunction
 "composeReference"<T>(arg0: $Reference2ShortFunction$$Type<(T)>): $Reference2DoubleFunction<(T)>
 "andThenShort"(arg0: $Double2ShortFunction$$Type): $Short2ShortFunction
 "composeShort"(arg0: $Short2ShortFunction$$Type): $Short2DoubleFunction
 "composeFloat"(arg0: $Float2ShortFunction$$Type): $Float2DoubleFunction
 "andThenReference"<T>(arg0: $Double2ReferenceFunction$$Type<(T)>): $Short2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2ShortFunction$$Type): $Double2DoubleFunction
 "andThenByte"(arg0: $Double2ByteFunction$$Type): $Short2ByteFunction
 "composeInt"(arg0: $Int2ShortFunction$$Type): $Int2DoubleFunction
 "andThenInt"(arg0: $Double2IntFunction$$Type): $Short2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: short): double
static "identity"<T>(): $Function<(short), (short)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Short2DoubleFunction$$Type = ((arg0: short) => double);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Short2DoubleFunction$$Original = $Short2DoubleFunction;}
declare module "it.unimi.dsi.fastutil.objects.ReferenceSet" {
import {$Iterator} from "java.util.Iterator"
import {$Collection$$Type} from "java.util.Collection"
import {$Spliterator} from "java.util.Spliterator"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$ReferenceCollection$$Interface} from "it.unimi.dsi.fastutil.objects.ReferenceCollection"
import {$Set, $Set$$Interface} from "java.util.Set"
import {$Stream} from "java.util.stream.Stream"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$IntFunction$$Type} from "java.util.function.IntFunction"

export interface $ReferenceSet$$Interface<K> extends $ReferenceCollection$$Interface<(K)>, $Set$$Interface<(K)> {
get "empty"(): boolean
}

export class $ReferenceSet<K> implements $ReferenceSet$$Interface {
 "iterator"(): $Iterator
static "of"<K>(arg0: K, arg1: K): $ReferenceSet<(K)>
static "of"<K>(...arg0: (K)[]): $ReferenceSet<(K)>
static "of"<K>(arg0: K, arg1: K, arg2: K): $ReferenceSet<(K)>
static "of"<K>(): $ReferenceSet<(K)>
static "of"<K>(arg0: K): $ReferenceSet<(K)>
 "spliterator"(): $Spliterator
 "remove"(arg0: any): boolean
 "size"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<E>(arg0: $Collection$$Type<(K)>): $Set<(K)>
 "clear"(): void
 "isEmpty"(): boolean
 "add"(arg0: K): boolean
 "toArray"(): (any)[]
 "toArray"<T>(arg0: (T)[]): (T)[]
static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K): $Set<(K)>
static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K): $Set<(K)>
static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K): $Set<(K)>
static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K, arg6: K, arg7: K, arg8: K, arg9: K): $Set<(K)>
static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K, arg6: K, arg7: K, arg8: K): $Set<(K)>
static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K, arg6: K, arg7: K): $Set<(K)>
static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K, arg6: K): $Set<(K)>
 "contains"(arg0: any): boolean
 "addAll"(arg0: $Collection$$Type<(K)>): boolean
 "removeAll"(arg0: $Collection$$Type<(never)>): boolean
 "retainAll"(arg0: $Collection$$Type<(never)>): boolean
 "containsAll"(arg0: $Collection$$Type<(never)>): boolean
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "stream"(): $Stream<(K)>
 "removeIf"(arg0: $Predicate$$Type<(K)>): boolean
 "parallelStream"(): $Stream<(K)>
 "forEach"(arg0: $Consumer$$Type<(K)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReferenceSet$$Type<K> = ($ReferenceSet<(K)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReferenceSet$$Original<K> = $ReferenceSet<(K)>;}
declare module "it.unimi.dsi.fastutil.ints.Int2DoubleMap" {
import {$Char2DoubleFunction} from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import {$Byte2DoubleFunction} from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import {$Object2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import {$Reference2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import {$Long2IntFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import {$Short2IntFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import {$Int2FloatFunction} from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import {$Byte2IntFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"
import {$DoubleBinaryOperator$$Type} from "java.util.function.DoubleBinaryOperator"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$IntFunction$$Type} from "java.util.function.IntFunction"
import {$Int2CharFunction} from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import {$Double2FloatFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import {$Float2IntFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import {$Double2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import {$Int2ReferenceFunction} from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import {$Int2ObjectFunction} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$Object2DoubleFunction} from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import {$Int2IntFunction, $Int2IntFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$IntToDoubleFunction$$Type} from "java.util.function.IntToDoubleFunction"
import {$Int2DoubleFunction, $Int2DoubleFunction$$Type, $Int2DoubleFunction$$Interface} from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import {$Int2DoubleMap$Entry} from "it.unimi.dsi.fastutil.ints.Int2DoubleMap$Entry"
import {$Short2DoubleFunction} from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import {$Double2DoubleFunction, $Double2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2DoubleFunction"
import {$Collection} from "java.util.Collection"
import {$Map, $Map$$Type, $Map$$Interface} from "java.util.Map"
import {$Long2DoubleFunction} from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import {$Int2ShortFunction} from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import {$Double2CharFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$IntSet} from "it.unimi.dsi.fastutil.ints.IntSet"
import {$Double2LongFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import {$Double2ByteFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import {$ObjectSet} from "it.unimi.dsi.fastutil.objects.ObjectSet"
import {$Int2LongFunction} from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import {$Char2IntFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Double2IntFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import {$DoubleBinaryOperator$$Type as $DoubleBinaryOperator$0$$Type} from "it.unimi.dsi.fastutil.doubles.DoubleBinaryOperator"
import {$Reference2DoubleFunction} from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import {$Double2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import {$Float2DoubleFunction} from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import {$Int2ByteFunction} from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import {$Double2ShortFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"

export interface $Int2DoubleMap$$Interface extends $Int2DoubleFunction$$Interface, $Map$$Interface<(integer), (double)> {
[index: string | number]: any
get "empty"(): boolean
}

export class $Int2DoubleMap implements $Int2DoubleMap$$Interface {
 "mergeDouble"(arg0: integer, arg1: double, arg2: $DoubleBinaryOperator$$Type): double
 "mergeDouble"(arg0: integer, arg1: double, arg2: $DoubleBinaryOperator$0$$Type): double
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): any
 "remove"(arg0: integer, arg1: double): boolean
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any, arg1: any): boolean
 "size"(): integer
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): any
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "put"(arg0: integer, arg1: double): double
 "values"(): $Collection
 "clear"(): void
/**
 * 
 * @deprecated
 */
 "replace"(arg0: integer, arg1: double): double
/**
 * 
 * @deprecated
 */
 "replace"(arg0: integer, arg1: double, arg2: double): boolean
 "replace"(arg0: integer, arg1: double, arg2: double): boolean
 "replace"(arg0: integer, arg1: double): double
/**
 * 
 * @deprecated
 */
 "replace"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "replace"(arg0: any, arg1: any, arg2: any): boolean
/**
 * 
 * @deprecated
 */
 "merge"(arg0: any, arg1: any, arg2: $BiFunction$$Type): any
 "merge"(arg0: integer, arg1: double, arg2: $BiFunction$$Type<(double), (double), (double)>): double
/**
 * 
 * @deprecated
 */
 "merge"(arg0: integer, arg1: double, arg2: $BiFunction$$Type<(double), (double), (double)>): double
/**
 * 
 * @deprecated
 */
 "entrySet"(): $ObjectSet<($Map$Entry<(integer), (double)>)>
 "putIfAbsent"(arg0: integer, arg1: double): double
/**
 * 
 * @deprecated
 */
 "putIfAbsent"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "putIfAbsent"(arg0: integer, arg1: double): double
/**
 * 
 * @deprecated
 */
 "compute"(arg0: integer, arg1: $BiFunction$$Type<(integer), (double), (double)>): double
/**
 * 
 * @deprecated
 */
 "compute"(arg0: any, arg1: $BiFunction$$Type): any
 "compute"(arg0: integer, arg1: $BiFunction$$Type<(integer), (double), (double)>): double
 "forEach"(arg0: $BiConsumer$$Type<(integer), (double)>): void
 "containsKey"(arg0: integer): boolean
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
/**
 * 
 * @deprecated
 */
 "computeIfAbsent"(arg0: any, arg1: $Function$$Type): any
/**
 * 
 * @deprecated
 */
 "computeIfAbsent"(arg0: integer, arg1: $Function$$Type<(integer), (double)>): double
 "computeIfAbsent"(arg0: integer, arg1: $Int2DoubleFunction$$Type): double
 "computeIfAbsent"(arg0: integer, arg1: $IntToDoubleFunction$$Type): double
 "keySet"(): $IntSet
/**
 * 
 * @deprecated
 */
 "containsValue"(arg0: any): boolean
 "containsValue"(arg0: double): boolean
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: double): double
 "getOrDefault"(arg0: integer, arg1: double): double
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
 "computeIfPresent"(arg0: integer, arg1: $BiFunction$$Type<(integer), (double), (double)>): double
/**
 * 
 * @deprecated
 */
 "computeIfPresent"(arg0: integer, arg1: $BiFunction$$Type<(integer), (double), (double)>): double
/**
 * 
 * @deprecated
 */
 "computeIfPresent"(arg0: any, arg1: $BiFunction$$Type): any
 "computeIfAbsentNullable"(arg0: integer, arg1: $IntFunction$$Type<(double)>): double
/**
 * 
 * @deprecated
 */
 "computeIfAbsentPartial"(arg0: integer, arg1: $Int2DoubleFunction$$Type): double
 "defaultReturnValue"(arg0: double): void
 "defaultReturnValue"(): double
 "int2DoubleEntrySet"(): $ObjectSet<($Int2DoubleMap$Entry)>
 "remove"(arg0: integer): double
 "get"(arg0: integer): double
 "put"(arg0: integer, arg1: double): double
 "applyAsDouble"(arg0: integer): double
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (integer)>): $Function<(T), (double)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(double), (T)>): $Function<(integer), (T)>
 "andThenFloat"(arg0: $Double2FloatFunction$$Type): $Int2FloatFunction
 "andThenObject"<T>(arg0: $Double2ObjectFunction$$Type<(T)>): $Int2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2IntFunction$$Type): $Byte2DoubleFunction
 "andThenLong"(arg0: $Double2LongFunction$$Type): $Int2LongFunction
 "composeLong"(arg0: $Long2IntFunction$$Type): $Long2DoubleFunction
 "andThenChar"(arg0: $Double2CharFunction$$Type): $Int2CharFunction
 "andThenDouble"(arg0: $Double2DoubleFunction$$Type): $Int2DoubleFunction
 "composeObject"<T>(arg0: $Object2IntFunction$$Type<(T)>): $Object2DoubleFunction<(T)>
 "composeChar"(arg0: $Char2IntFunction$$Type): $Char2DoubleFunction
 "composeReference"<T>(arg0: $Reference2IntFunction$$Type<(T)>): $Reference2DoubleFunction<(T)>
 "andThenShort"(arg0: $Double2ShortFunction$$Type): $Int2ShortFunction
 "composeShort"(arg0: $Short2IntFunction$$Type): $Short2DoubleFunction
 "composeFloat"(arg0: $Float2IntFunction$$Type): $Float2DoubleFunction
 "andThenReference"<T>(arg0: $Double2ReferenceFunction$$Type<(T)>): $Int2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2IntFunction$$Type): $Double2DoubleFunction
 "andThenByte"(arg0: $Double2ByteFunction$$Type): $Int2ByteFunction
 "composeInt"(arg0: $Int2IntFunction$$Type): $Int2DoubleFunction
 "andThenInt"(arg0: $Double2IntFunction$$Type): $Int2IntFunction
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<K, V>(arg0: $Map$$Type<(integer), (double)>): $Map<(integer), (double)>
 "isEmpty"(): boolean
 "replaceAll"(arg0: $BiFunction$$Type<(integer), (double), (double)>): void
static "of"<K, V>(arg0: integer, arg1: double, arg2: integer, arg3: double, arg4: integer, arg5: double, arg6: integer, arg7: double): $Map<(integer), (double)>
static "of"<K, V>(): $Map<(integer), (double)>
static "of"<K, V>(arg0: integer, arg1: double): $Map<(integer), (double)>
static "of"<K, V>(arg0: integer, arg1: double, arg2: integer, arg3: double): $Map<(integer), (double)>
static "of"<K, V>(arg0: integer, arg1: double, arg2: integer, arg3: double, arg4: integer, arg5: double): $Map<(integer), (double)>
static "of"<K, V>(arg0: integer, arg1: double, arg2: integer, arg3: double, arg4: integer, arg5: double, arg6: integer, arg7: double, arg8: integer, arg9: double, arg10: integer, arg11: double, arg12: integer, arg13: double, arg14: integer, arg15: double, arg16: integer, arg17: double, arg18: integer, arg19: double): $Map<(integer), (double)>
static "of"<K, V>(arg0: integer, arg1: double, arg2: integer, arg3: double, arg4: integer, arg5: double, arg6: integer, arg7: double, arg8: integer, arg9: double, arg10: integer, arg11: double, arg12: integer, arg13: double, arg14: integer, arg15: double, arg16: integer, arg17: double): $Map<(integer), (double)>
static "of"<K, V>(arg0: integer, arg1: double, arg2: integer, arg3: double, arg4: integer, arg5: double, arg6: integer, arg7: double, arg8: integer, arg9: double, arg10: integer, arg11: double, arg12: integer, arg13: double, arg14: integer, arg15: double): $Map<(integer), (double)>
static "of"<K, V>(arg0: integer, arg1: double, arg2: integer, arg3: double, arg4: integer, arg5: double, arg6: integer, arg7: double, arg8: integer, arg9: double, arg10: integer, arg11: double, arg12: integer, arg13: double): $Map<(integer), (double)>
static "of"<K, V>(arg0: integer, arg1: double, arg2: integer, arg3: double, arg4: integer, arg5: double, arg6: integer, arg7: double, arg8: integer, arg9: double, arg10: integer, arg11: double): $Map<(integer), (double)>
static "of"<K, V>(arg0: integer, arg1: double, arg2: integer, arg3: double, arg4: integer, arg5: double, arg6: integer, arg7: double, arg8: integer, arg9: double): $Map<(integer), (double)>
 "putAll"(arg0: $Map$$Type<(integer), (double)>): void
static "entry"<K, V>(arg0: integer, arg1: double): $Map$Entry<(integer), (double)>
static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(integer), (double)>)[]): $Map<(integer), (double)>
 "apply"(arg0: integer): double
static "identity"<T>(): $Function<(integer), (integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Int2DoubleMap$$Type = ($Int2DoubleMap);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Int2DoubleMap$$Original = $Int2DoubleMap;}
declare module "it.unimi.dsi.fastutil.objects.ObjectSet" {
import {$Iterator} from "java.util.Iterator"
import {$ObjectCollection$$Interface} from "it.unimi.dsi.fastutil.objects.ObjectCollection"
import {$Collection$$Type} from "java.util.Collection"
import {$Spliterator} from "java.util.Spliterator"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Set, $Set$$Interface} from "java.util.Set"
import {$Stream} from "java.util.stream.Stream"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$IntFunction$$Type} from "java.util.function.IntFunction"

export interface $ObjectSet$$Interface<K> extends $ObjectCollection$$Interface<(K)>, $Set$$Interface<(K)> {
get "empty"(): boolean
}

export class $ObjectSet<K> implements $ObjectSet$$Interface {
 "iterator"(): $Iterator
static "of"<K>(arg0: K, arg1: K): $ObjectSet<(K)>
static "of"<K>(...arg0: (K)[]): $ObjectSet<(K)>
static "of"<K>(arg0: K, arg1: K, arg2: K): $ObjectSet<(K)>
static "of"<K>(): $ObjectSet<(K)>
static "of"<K>(arg0: K): $ObjectSet<(K)>
 "spliterator"(): $Spliterator
 "remove"(arg0: any): boolean
 "size"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<E>(arg0: $Collection$$Type<(K)>): $Set<(K)>
 "clear"(): void
 "isEmpty"(): boolean
 "add"(arg0: K): boolean
 "toArray"(): (any)[]
 "toArray"<T>(arg0: (T)[]): (T)[]
static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K): $Set<(K)>
static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K): $Set<(K)>
static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K): $Set<(K)>
static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K, arg6: K, arg7: K, arg8: K, arg9: K): $Set<(K)>
static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K, arg6: K, arg7: K, arg8: K): $Set<(K)>
static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K, arg6: K, arg7: K): $Set<(K)>
static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K, arg6: K): $Set<(K)>
 "contains"(arg0: any): boolean
 "addAll"(arg0: $Collection$$Type<(K)>): boolean
 "removeAll"(arg0: $Collection$$Type<(never)>): boolean
 "retainAll"(arg0: $Collection$$Type<(never)>): boolean
 "containsAll"(arg0: $Collection$$Type<(never)>): boolean
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "stream"(): $Stream<(K)>
 "removeIf"(arg0: $Predicate$$Type<(K)>): boolean
 "parallelStream"(): $Stream<(K)>
 "forEach"(arg0: $Consumer$$Type<(K)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectSet$$Type<K> = ($ObjectSet<(K)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ObjectSet$$Original<K> = $ObjectSet<(K)>;}
declare module "it.unimi.dsi.fastutil.longs.Long2ByteFunction" {
import {$Byte2ByteFunction, $Byte2ByteFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction"
import {$Byte2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import {$Float2ByteFunction} from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import {$Long2CharFunction} from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import {$Long2IntFunction} from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import {$Byte2IntFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"
import {$Reference2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import {$Long2ShortFunction} from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import {$Reference2ByteFunction} from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import {$Byte2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Byte2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import {$Byte2ShortFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import {$Byte2CharFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Long2DoubleFunction} from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import {$Long2LongFunction, $Long2LongFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import {$Float2LongFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import {$Object2ByteFunction} from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import {$LongToIntFunction$$Interface} from "java.util.function.LongToIntFunction"
import {$Long2ReferenceFunction} from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import {$Byte2LongFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import {$Char2LongFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import {$Double2LongFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import {$Short2LongFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import {$Char2ByteFunction} from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import {$Double2ByteFunction} from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import {$Int2LongFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import {$Long2FloatFunction} from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import {$Object2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import {$Byte2FloatFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import {$Short2ByteFunction} from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import {$Int2ByteFunction} from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import {$Long2ObjectFunction} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"

export interface $Long2ByteFunction$$Interface extends $Function$0$$Interface<(long), (byte)>, $LongToIntFunction$$Interface {

(arg0: long): byte
}

export class $Long2ByteFunction implements $Long2ByteFunction$$Interface {
 "remove"(arg0: long): byte
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): byte
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): byte
 "get"(arg0: long): byte
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: long, arg1: byte): byte
/**
 * 
 * @deprecated
 */
 "put"(arg0: long, arg1: byte): byte
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "containsKey"(arg0: long): boolean
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: byte): byte
 "getOrDefault"(arg0: long, arg1: byte): byte
 "applyAsInt"(arg0: long): integer
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (long)>): $Function<(T), (byte)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(byte), (T)>): $Function<(long), (T)>
 "andThenFloat"(arg0: $Byte2FloatFunction$$Type): $Long2FloatFunction
 "andThenObject"<T>(arg0: $Byte2ObjectFunction$$Type<(T)>): $Long2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2LongFunction$$Type): $Byte2ByteFunction
 "andThenLong"(arg0: $Byte2LongFunction$$Type): $Long2LongFunction
 "defaultReturnValue"(): byte
 "defaultReturnValue"(arg0: byte): void
 "composeLong"(arg0: $Long2LongFunction$$Type): $Long2ByteFunction
 "andThenChar"(arg0: $Byte2CharFunction$$Type): $Long2CharFunction
 "andThenDouble"(arg0: $Byte2DoubleFunction$$Type): $Long2DoubleFunction
 "composeObject"<T>(arg0: $Object2LongFunction$$Type<(T)>): $Object2ByteFunction<(T)>
 "composeChar"(arg0: $Char2LongFunction$$Type): $Char2ByteFunction
 "composeReference"<T>(arg0: $Reference2LongFunction$$Type<(T)>): $Reference2ByteFunction<(T)>
 "andThenShort"(arg0: $Byte2ShortFunction$$Type): $Long2ShortFunction
 "composeShort"(arg0: $Short2LongFunction$$Type): $Short2ByteFunction
 "composeFloat"(arg0: $Float2LongFunction$$Type): $Float2ByteFunction
 "andThenReference"<T>(arg0: $Byte2ReferenceFunction$$Type<(T)>): $Long2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2LongFunction$$Type): $Double2ByteFunction
 "andThenByte"(arg0: $Byte2ByteFunction$$Type): $Long2ByteFunction
 "composeInt"(arg0: $Int2LongFunction$$Type): $Int2ByteFunction
 "andThenInt"(arg0: $Byte2IntFunction$$Type): $Long2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: long): byte
static "identity"<T>(): $Function<(long), (long)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Long2ByteFunction$$Type = ((arg0: long) => byte);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Long2ByteFunction$$Original = $Long2ByteFunction;}
declare module "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction" {
import {$Char2DoubleFunction} from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import {$Float2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import {$Byte2DoubleFunction} from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import {$ToDoubleFunction$$Interface} from "java.util.function.ToDoubleFunction"
import {$Reference2IntFunction} from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import {$Reference2ShortFunction} from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import {$Reference2LongFunction} from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import {$Double2FloatFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import {$Double2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import {$Int2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import {$Reference2ByteFunction} from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import {$Byte2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import {$Object2DoubleFunction} from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Int2DoubleFunction} from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import {$Short2DoubleFunction} from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import {$Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ReferenceFunction"
import {$Double2DoubleFunction, $Double2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2DoubleFunction"
import {$Reference2ObjectFunction} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Long2DoubleFunction} from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import {$Short2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import {$Long2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import {$Double2CharFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import {$Reference2FloatFunction} from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import {$Double2LongFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import {$Double2ByteFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import {$Reference2CharFunction} from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import {$Object2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import {$Char2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import {$Double2IntFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import {$Double2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import {$Float2DoubleFunction} from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import {$Double2ShortFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"

export interface $Reference2DoubleFunction$$Interface<K> extends $Function$0$$Interface<(K), (double)>, $ToDoubleFunction$$Interface<(K)> {

(arg0: any): double
}

export class $Reference2DoubleFunction<K> implements $Reference2DoubleFunction$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): any
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): double
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: K, arg1: double): double
/**
 * 
 * @deprecated
 */
 "put"(arg0: K, arg1: double): double
 "getDouble"(arg0: any): double
 "getOrDefault"(arg0: any, arg1: double): double
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: double): double
 "applyAsDouble"(arg0: K): double
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(double), (T)>): $Function<(K), (T)>
 "removeDouble"(arg0: any): double
 "andThenFloat"(arg0: $Double2FloatFunction$$Type): $Reference2FloatFunction<(K)>
 "andThenObject"<T>(arg0: $Double2ObjectFunction$$Type<(T)>): $Reference2ObjectFunction<(K), (T)>
 "composeByte"(arg0: $Byte2ReferenceFunction$$Type<(K)>): $Byte2DoubleFunction
 "andThenLong"(arg0: $Double2LongFunction$$Type): $Reference2LongFunction<(K)>
 "defaultReturnValue"(arg0: double): void
 "defaultReturnValue"(): double
 "composeLong"(arg0: $Long2ReferenceFunction$$Type<(K)>): $Long2DoubleFunction
 "andThenChar"(arg0: $Double2CharFunction$$Type): $Reference2CharFunction<(K)>
 "andThenDouble"(arg0: $Double2DoubleFunction$$Type): $Reference2DoubleFunction<(K)>
 "composeObject"<T>(arg0: $Object2ReferenceFunction$$Type<(T), (K)>): $Object2DoubleFunction<(T)>
 "composeChar"(arg0: $Char2ReferenceFunction$$Type<(K)>): $Char2DoubleFunction
 "composeReference"<T>(arg0: $Reference2ReferenceFunction$$Type<(T), (K)>): $Reference2DoubleFunction<(T)>
 "andThenShort"(arg0: $Double2ShortFunction$$Type): $Reference2ShortFunction<(K)>
 "composeShort"(arg0: $Short2ReferenceFunction$$Type<(K)>): $Short2DoubleFunction
 "composeFloat"(arg0: $Float2ReferenceFunction$$Type<(K)>): $Float2DoubleFunction
 "andThenReference"<T>(arg0: $Double2ReferenceFunction$$Type<(T)>): $Reference2ReferenceFunction<(K), (T)>
 "composeDouble"(arg0: $Double2ReferenceFunction$$Type<(K)>): $Double2DoubleFunction
 "andThenByte"(arg0: $Double2ByteFunction$$Type): $Reference2ByteFunction<(K)>
 "composeInt"(arg0: $Int2ReferenceFunction$$Type<(K)>): $Int2DoubleFunction
 "andThenInt"(arg0: $Double2IntFunction$$Type): $Reference2IntFunction<(K)>
 "size"(): integer
 "clear"(): void
 "apply"(arg0: K): double
 "containsKey"(arg0: any): boolean
static "identity"<T>(): $Function<(K), (K)>
 "compose"<V>(arg0: $Function$$Type<(V), (K)>): $Function<(V), (double)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Reference2DoubleFunction$$Type<K> = ((arg0: any) => double);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Reference2DoubleFunction$$Original<K> = $Reference2DoubleFunction<(K)>;}
declare module "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction" {
import {$Byte2DoubleFunction, $Byte2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import {$Float2ByteFunction, $Float2ByteFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Long2ByteFunction, $Long2ByteFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import {$Byte2IntFunction, $Byte2IntFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"
import {$Object2ByteFunction, $Object2ByteFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import {$Byte2LongFunction, $Byte2LongFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import {$IntUnaryOperator, $IntUnaryOperator$$Type, $IntUnaryOperator$$Interface} from "java.util.function.IntUnaryOperator"
import {$Reference2ByteFunction, $Reference2ByteFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import {$Char2ByteFunction, $Char2ByteFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import {$Double2ByteFunction, $Double2ByteFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import {$Byte2ReferenceFunction, $Byte2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Byte2ObjectFunction, $Byte2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import {$Byte2ShortFunction, $Byte2ShortFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import {$Byte2FloatFunction, $Byte2FloatFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import {$Short2ByteFunction, $Short2ByteFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import {$Byte2CharFunction, $Byte2CharFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import {$Int2ByteFunction, $Int2ByteFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"

export interface $Byte2ByteFunction$$Interface extends $Function$0$$Interface<(byte), (byte)>, $IntUnaryOperator$$Interface {

(arg0: byte): byte
}

export class $Byte2ByteFunction implements $Byte2ByteFunction$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): any
 "remove"(arg0: byte): byte
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): byte
 "get"(arg0: byte): byte
/**
 * 
 * @deprecated
 */
 "put"(arg0: byte, arg1: byte): byte
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: byte, arg1: byte): byte
static "identity"(): $Byte2ByteFunction
 "containsKey"(arg0: byte): boolean
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "getOrDefault"(arg0: byte, arg1: byte): byte
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: byte): byte
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "applyAsInt"(arg0: integer): integer
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (byte)>): $Function<(T), (byte)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(byte), (T)>): $Function<(byte), (T)>
 "andThenFloat"(arg0: $Byte2FloatFunction$$Type): $Byte2FloatFunction
 "andThenObject"<T>(arg0: $Byte2ObjectFunction$$Type<(T)>): $Byte2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2ByteFunction$$Type): $Byte2ByteFunction
 "andThenLong"(arg0: $Byte2LongFunction$$Type): $Byte2LongFunction
 "defaultReturnValue"(): byte
 "defaultReturnValue"(arg0: byte): void
 "composeLong"(arg0: $Long2ByteFunction$$Type): $Long2ByteFunction
 "andThenChar"(arg0: $Byte2CharFunction$$Type): $Byte2CharFunction
 "andThenDouble"(arg0: $Byte2DoubleFunction$$Type): $Byte2DoubleFunction
 "composeObject"<T>(arg0: $Object2ByteFunction$$Type<(T)>): $Object2ByteFunction<(T)>
 "composeChar"(arg0: $Char2ByteFunction$$Type): $Char2ByteFunction
 "composeReference"<T>(arg0: $Reference2ByteFunction$$Type<(T)>): $Reference2ByteFunction<(T)>
 "andThenShort"(arg0: $Byte2ShortFunction$$Type): $Byte2ShortFunction
 "composeShort"(arg0: $Short2ByteFunction$$Type): $Short2ByteFunction
 "composeFloat"(arg0: $Float2ByteFunction$$Type): $Float2ByteFunction
 "andThenReference"<T>(arg0: $Byte2ReferenceFunction$$Type<(T)>): $Byte2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2ByteFunction$$Type): $Double2ByteFunction
 "andThenByte"(arg0: $Byte2ByteFunction$$Type): $Byte2ByteFunction
 "composeInt"(arg0: $Int2ByteFunction$$Type): $Int2ByteFunction
 "andThenInt"(arg0: $Byte2IntFunction$$Type): $Byte2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: byte): byte
 "compose"(arg0: $IntUnaryOperator$$Type): $IntUnaryOperator
 "andThen"(arg0: $IntUnaryOperator$$Type): $IntUnaryOperator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Byte2ByteFunction$$Type = ((arg0: byte) => byte);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Byte2ByteFunction$$Original = $Byte2ByteFunction;}
declare module "it.unimi.dsi.fastutil.objects.Reference2LongFunction" {
import {$Float2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import {$Long2CharFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import {$Reference2IntFunction} from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import {$Long2IntFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import {$Long2ByteFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import {$Reference2ShortFunction} from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import {$Double2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import {$Long2ShortFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import {$Int2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import {$Reference2ByteFunction} from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import {$ToLongFunction$$Interface} from "java.util.function.ToLongFunction"
import {$Byte2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ReferenceFunction"
import {$Reference2ObjectFunction} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Long2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import {$Long2LongFunction, $Long2LongFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import {$Float2LongFunction} from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import {$Short2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import {$Long2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import {$Byte2LongFunction} from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import {$Reference2FloatFunction} from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import {$Char2LongFunction} from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import {$Double2LongFunction} from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import {$Short2LongFunction} from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import {$Reference2CharFunction} from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import {$Int2LongFunction} from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import {$Object2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import {$Char2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import {$Long2FloatFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import {$Object2LongFunction} from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import {$Reference2DoubleFunction} from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import {$Long2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"

export interface $Reference2LongFunction$$Interface<K> extends $Function$0$$Interface<(K), (long)>, $ToLongFunction$$Interface<(K)> {

(arg0: any): long
}

export class $Reference2LongFunction<K> implements $Reference2LongFunction$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): any
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): long
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: K, arg1: long): long
/**
 * 
 * @deprecated
 */
 "put"(arg0: K, arg1: long): long
 "getLong"(arg0: any): long
 "getOrDefault"(arg0: any, arg1: long): long
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: long): long
 "applyAsLong"(arg0: K): long
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(long), (T)>): $Function<(K), (T)>
 "removeLong"(arg0: any): long
 "andThenFloat"(arg0: $Long2FloatFunction$$Type): $Reference2FloatFunction<(K)>
 "andThenObject"<T>(arg0: $Long2ObjectFunction$$Type<(T)>): $Reference2ObjectFunction<(K), (T)>
 "composeByte"(arg0: $Byte2ReferenceFunction$$Type<(K)>): $Byte2LongFunction
 "andThenLong"(arg0: $Long2LongFunction$$Type): $Reference2LongFunction<(K)>
 "defaultReturnValue"(arg0: long): void
 "defaultReturnValue"(): long
 "composeLong"(arg0: $Long2ReferenceFunction$$Type<(K)>): $Long2LongFunction
 "andThenChar"(arg0: $Long2CharFunction$$Type): $Reference2CharFunction<(K)>
 "andThenDouble"(arg0: $Long2DoubleFunction$$Type): $Reference2DoubleFunction<(K)>
 "composeObject"<T>(arg0: $Object2ReferenceFunction$$Type<(T), (K)>): $Object2LongFunction<(T)>
 "composeChar"(arg0: $Char2ReferenceFunction$$Type<(K)>): $Char2LongFunction
 "composeReference"<T>(arg0: $Reference2ReferenceFunction$$Type<(T), (K)>): $Reference2LongFunction<(T)>
 "andThenShort"(arg0: $Long2ShortFunction$$Type): $Reference2ShortFunction<(K)>
 "composeShort"(arg0: $Short2ReferenceFunction$$Type<(K)>): $Short2LongFunction
 "composeFloat"(arg0: $Float2ReferenceFunction$$Type<(K)>): $Float2LongFunction
 "andThenReference"<T>(arg0: $Long2ReferenceFunction$$Type<(T)>): $Reference2ReferenceFunction<(K), (T)>
 "composeDouble"(arg0: $Double2ReferenceFunction$$Type<(K)>): $Double2LongFunction
 "andThenByte"(arg0: $Long2ByteFunction$$Type): $Reference2ByteFunction<(K)>
 "composeInt"(arg0: $Int2ReferenceFunction$$Type<(K)>): $Int2LongFunction
 "andThenInt"(arg0: $Long2IntFunction$$Type): $Reference2IntFunction<(K)>
 "size"(): integer
 "clear"(): void
 "apply"(arg0: K): long
 "containsKey"(arg0: any): boolean
static "identity"<T>(): $Function<(K), (K)>
 "compose"<V>(arg0: $Function$$Type<(V), (K)>): $Function<(V), (long)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Reference2LongFunction$$Type<K> = ((arg0: any) => long);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Reference2LongFunction$$Original<K> = $Reference2LongFunction<(K)>;}
declare module "it.unimi.dsi.fastutil.ints.Int2DoubleFunction" {
import {$Char2DoubleFunction} from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import {$Byte2DoubleFunction} from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import {$Object2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import {$Reference2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import {$Long2IntFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import {$Short2IntFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import {$Int2FloatFunction} from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import {$Byte2IntFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"
import {$Float2IntFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import {$Int2CharFunction} from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import {$Double2FloatFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import {$Double2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import {$Int2ReferenceFunction} from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import {$Int2ObjectFunction} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$Object2DoubleFunction} from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import {$Int2IntFunction, $Int2IntFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$IntToDoubleFunction$$Interface} from "java.util.function.IntToDoubleFunction"
import {$Short2DoubleFunction} from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import {$Double2DoubleFunction, $Double2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2DoubleFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Long2DoubleFunction} from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import {$Int2ShortFunction} from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import {$Double2CharFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import {$Double2LongFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import {$Double2ByteFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import {$Int2LongFunction} from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import {$Char2IntFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import {$Double2IntFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import {$Double2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import {$Reference2DoubleFunction} from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import {$Float2DoubleFunction} from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import {$Int2ByteFunction} from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import {$Double2ShortFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"

export interface $Int2DoubleFunction$$Interface extends $Function$0$$Interface<(integer), (double)>, $IntToDoubleFunction$$Interface {

(arg0: integer): double
}

export class $Int2DoubleFunction implements $Int2DoubleFunction$$Interface {
 "remove"(arg0: integer): double
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): double
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): double
 "get"(arg0: integer): double
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: integer, arg1: double): double
/**
 * 
 * @deprecated
 */
 "put"(arg0: integer, arg1: double): double
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "containsKey"(arg0: integer): boolean
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: double): double
 "getOrDefault"(arg0: integer, arg1: double): double
 "applyAsDouble"(arg0: integer): double
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (integer)>): $Function<(T), (double)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(double), (T)>): $Function<(integer), (T)>
 "andThenFloat"(arg0: $Double2FloatFunction$$Type): $Int2FloatFunction
 "andThenObject"<T>(arg0: $Double2ObjectFunction$$Type<(T)>): $Int2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2IntFunction$$Type): $Byte2DoubleFunction
 "andThenLong"(arg0: $Double2LongFunction$$Type): $Int2LongFunction
 "defaultReturnValue"(): double
 "defaultReturnValue"(arg0: double): void
 "composeLong"(arg0: $Long2IntFunction$$Type): $Long2DoubleFunction
 "andThenChar"(arg0: $Double2CharFunction$$Type): $Int2CharFunction
 "andThenDouble"(arg0: $Double2DoubleFunction$$Type): $Int2DoubleFunction
 "composeObject"<T>(arg0: $Object2IntFunction$$Type<(T)>): $Object2DoubleFunction<(T)>
 "composeChar"(arg0: $Char2IntFunction$$Type): $Char2DoubleFunction
 "composeReference"<T>(arg0: $Reference2IntFunction$$Type<(T)>): $Reference2DoubleFunction<(T)>
 "andThenShort"(arg0: $Double2ShortFunction$$Type): $Int2ShortFunction
 "composeShort"(arg0: $Short2IntFunction$$Type): $Short2DoubleFunction
 "composeFloat"(arg0: $Float2IntFunction$$Type): $Float2DoubleFunction
 "andThenReference"<T>(arg0: $Double2ReferenceFunction$$Type<(T)>): $Int2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2IntFunction$$Type): $Double2DoubleFunction
 "andThenByte"(arg0: $Double2ByteFunction$$Type): $Int2ByteFunction
 "composeInt"(arg0: $Int2IntFunction$$Type): $Int2DoubleFunction
 "andThenInt"(arg0: $Double2IntFunction$$Type): $Int2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: integer): double
static "identity"<T>(): $Function<(integer), (integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Int2DoubleFunction$$Type = ((arg0: integer) => double);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Int2DoubleFunction$$Original = $Int2DoubleFunction;}
declare module "it.unimi.dsi.fastutil.Function" {
import {$Function as $Function$0, $Function$$Type as $Function$0$$Type, $Function$$Interface as $Function$0$$Interface} from "java.util.function.Function"

export interface $Function$$Interface<K, V> extends $Function$0$$Interface<(K), (V)> {

(arg0: any): V
}

export class $Function<K, V> implements $Function$$Interface {
 "remove"(arg0: any): V
 "size"(): integer
 "get"(arg0: any): V
 "put"(arg0: K, arg1: V): V
 "clear"(): void
 "apply"(arg0: K): V
 "containsKey"(arg0: any): boolean
 "getOrDefault"(arg0: any, arg1: V): V
static "identity"<T>(): $Function$0<(K), (K)>
 "compose"<V>(arg0: $Function$0$$Type<(V), (K)>): $Function$0<(V), (V)>
 "andThen"<V>(arg0: $Function$0$$Type<(V), (V)>): $Function$0<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function$$Type<K, V> = ((arg0: any) => V);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Function$$Original<K, V> = $Function<(K), (V)>;}
declare module "it.unimi.dsi.fastutil.objects.Reference2ObjectOpenHashMap" {
import {$Reference2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Hash$$Interface} from "it.unimi.dsi.fastutil.Hash"
import {$ReferenceSet} from "it.unimi.dsi.fastutil.objects.ReferenceSet"
import {$Reference2ObjectMap$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ObjectMap"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$ObjectCollection} from "it.unimi.dsi.fastutil.objects.ObjectCollection"
import {$AbstractReference2ObjectMap} from "it.unimi.dsi.fastutil.objects.AbstractReference2ObjectMap"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Function} from "java.util.function.Function"
import {$Cloneable$$Interface} from "java.lang.Cloneable"
import {$Reference2ObjectMap$FastEntrySet} from "it.unimi.dsi.fastutil.objects.Reference2ObjectMap$FastEntrySet"

export class $Reference2ObjectOpenHashMap<K, V> extends $AbstractReference2ObjectMap<(K), (V)> implements $Serializable$$Interface, $Cloneable$$Interface, $Hash$$Interface {
constructor(arg0: $Map$$Type<(K), (V)>)
constructor(arg0: $Reference2ObjectMap$$Type<(K), (V)>, arg1: float)
constructor(arg0: $Reference2ObjectMap$$Type<(K), (V)>)
constructor(arg0: (K)[], arg1: (V)[], arg2: float)
constructor(arg0: (K)[], arg1: (V)[])
constructor(arg0: integer, arg1: float)
constructor(arg0: integer)
constructor()
constructor(arg0: $Map$$Type<(K), (V)>, arg1: float)

public "remove"(arg0: any, arg1: any): boolean
public "remove"(arg0: any): V
public "size"(): integer
public "get"(arg0: any): V
public "put"(arg0: K, arg1: V): V
public "values"(): $ObjectCollection<(V)>
public "hashCode"(): integer
public "clone"(): $Reference2ObjectOpenHashMap<(K), (V)>
public "clear"(): void
public "isEmpty"(): boolean
public "replace"(arg0: K, arg1: V): V
public "replace"(arg0: K, arg1: V, arg2: V): boolean
public "trim"(): boolean
public "trim"(arg0: integer): boolean
public "merge"(arg0: K, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
public "putAll"(arg0: $Map$$Type<(K), (V)>): void
public "putIfAbsent"(arg0: K, arg1: V): V
public "compute"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
public "containsKey"(arg0: any): boolean
public "computeIfAbsent"(arg0: K, arg1: $Reference2ObjectFunction$$Type<(K), (V)>): V
public "keySet"(): $ReferenceSet<(K)>
public "containsValue"(arg0: any): boolean
public "getOrDefault"(arg0: any, arg1: V): V
public "computeIfPresent"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
public "ensureCapacity"(arg0: integer): void
public "reference2ObjectEntrySet"(): $Reference2ObjectMap$FastEntrySet<(K), (V)>
public "defaultReturnValue"(arg0: V): void
public "defaultReturnValue"(): V
public static "copyOf"<K, V>(arg0: $Map$$Type<(K), (V)>): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
public static "of"<K, V>(): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(K), (V)>)[]): $Map<(K), (V)>
public static "identity"<T>(): $Function<(T), (T)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Reference2ObjectOpenHashMap$$Type<K, V> = ($Reference2ObjectOpenHashMap<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Reference2ObjectOpenHashMap$$Original<K, V> = $Reference2ObjectOpenHashMap<(K), (V)>;}
declare module "it.unimi.dsi.fastutil.longs.LongList" {
import {$LongPredicate$$Type as $LongPredicate$0$$Type} from "java.util.function.LongPredicate"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Spliterator} from "java.util.Spliterator"
import {$List, $List$$Type, $List$$Interface} from "java.util.List"
import {$LongComparator$$Type} from "it.unimi.dsi.fastutil.longs.LongComparator"
import {$IntFunction$$Type} from "java.util.function.IntFunction"
import {$LongPredicate$$Type} from "it.unimi.dsi.fastutil.longs.LongPredicate"
import {$LongConsumer$$Type as $LongConsumer$0$$Type} from "java.util.function.LongConsumer"
import {$LongSpliterator} from "it.unimi.dsi.fastutil.longs.LongSpliterator"
import {$Stream} from "java.util.stream.Stream"
import {$LongCollection$$Type, $LongCollection$$Interface} from "it.unimi.dsi.fastutil.longs.LongCollection"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$Collection$$Type} from "java.util.Collection"
import {$SequencedCollection} from "java.util.SequencedCollection"
import {$Comparator$$Type} from "java.util.Comparator"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$LongStream} from "java.util.stream.LongStream"
import {$LongUnaryOperator$$Type} from "it.unimi.dsi.fastutil.longs.LongUnaryOperator"
import {$LongUnaryOperator$$Type as $LongUnaryOperator$0$$Type} from "java.util.function.LongUnaryOperator"
import {$LongConsumer$$Type} from "it.unimi.dsi.fastutil.longs.LongConsumer"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$LongListIterator} from "it.unimi.dsi.fastutil.longs.LongListIterator"
import {$ListIterator} from "java.util.ListIterator"
import {$LongIterator} from "it.unimi.dsi.fastutil.longs.LongIterator"

export interface $LongList$$Interface extends $List$$Interface<(long)>, $Comparable$$Interface<($List<(long)>)>, $LongCollection$$Interface {
set "elements"(value: (long)[])
get "empty"(): boolean
get "first"(): long
get "last"(): long
}

export class $LongList implements $LongList$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: integer): any
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): boolean
 "size"(arg0: integer): void
/**
 * 
 * @deprecated
 */
 "get"(arg0: integer): any
 "indexOf"(arg0: long): integer
/**
 * 
 * @deprecated
 */
 "indexOf"(arg0: any): integer
 "getLong"(arg0: integer): long
 "lastIndexOf"(arg0: long): integer
/**
 * 
 * @deprecated
 */
 "lastIndexOf"(arg0: any): integer
 "replaceAll"(arg0: $LongUnaryOperator$$Type): void
/**
 * 
 * @deprecated
 */
 "replaceAll"(arg0: $UnaryOperator$$Type<(long)>): void
 "replaceAll"(arg0: $LongUnaryOperator$0$$Type): void
/**
 * 
 * @deprecated
 */
 "add"(arg0: any): boolean
/**
 * 
 * @deprecated
 */
 "add"(arg0: long): boolean
 "add"(arg0: integer, arg1: long): void
/**
 * 
 * @deprecated
 */
 "add"(arg0: integer, arg1: long): void
/**
 * 
 * @deprecated
 */
 "add"(arg0: integer, arg1: any): void
 "add"(arg0: long): boolean
 "subList"(arg0: integer, arg1: integer): $List
 "iterator"(): $LongListIterator
static "of"(...arg0: (long)[]): $LongList
static "of"(): $LongList
static "of"(arg0: long, arg1: long): $LongList
static "of"(arg0: long): $LongList
static "of"(arg0: long, arg1: long, arg2: long): $LongList
/**
 * 
 * @deprecated
 */
 "contains"(arg0: any): boolean
 "spliterator"(): $Spliterator
 "addAll"(arg0: integer, arg1: $LongCollection$$Type): boolean
 "addAll"(arg0: $LongList$$Type): boolean
 "addAll"(arg0: integer, arg1: $LongList$$Type): boolean
 "set"(arg0: integer, arg1: long): long
/**
 * 
 * @deprecated
 */
 "set"(arg0: integer, arg1: any): any
/**
 * 
 * @deprecated
 */
 "set"(arg0: integer, arg1: long): long
 "sort"(arg0: $LongComparator$$Type): void
/**
 * 
 * @deprecated
 */
 "sort"(arg0: $Comparator$$Type<(long)>): void
 "listIterator"(arg0: integer): $ListIterator
 "listIterator"(): $ListIterator
 "getElements"(arg0: integer, arg1: (long)[], arg2: integer, arg3: integer): void
 "setElements"(arg0: integer, arg1: (long)[]): void
 "setElements"(arg0: integer, arg1: (long)[], arg2: integer, arg3: integer): void
 "setElements"(arg0: (long)[]): void
 "removeLong"(arg0: integer): long
/**
 * 
 * @deprecated
 */
 "unstableSort"(arg0: $Comparator$$Type<(long)>): void
 "unstableSort"(arg0: $LongComparator$$Type): void
 "removeElements"(arg0: integer, arg1: integer): void
 "addElements"(arg0: integer, arg1: (long)[]): void
 "addElements"(arg0: integer, arg1: (long)[], arg2: integer, arg3: integer): void
 "size"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<E>(arg0: $Collection$$Type<(long)>): $List<(long)>
 "clear"(): void
 "isEmpty"(): boolean
 "toArray"(): (any)[]
 "toArray"<T>(arg0: (T)[]): (T)[]
static "of"<E>(arg0: long, arg1: long, arg2: long): $List<(long)>
static "of"<E>(arg0: long, arg1: long, arg2: long, arg3: long): $List<(long)>
static "of"<E>(arg0: long, arg1: long, arg2: long, arg3: long, arg4: long): $List<(long)>
static "of"<E>(arg0: long, arg1: long, arg2: long, arg3: long, arg4: long, arg5: long, arg6: long, arg7: long, arg8: long, arg9: long): $List<(long)>
static "of"<E>(arg0: long, arg1: long, arg2: long, arg3: long, arg4: long, arg5: long, arg6: long, arg7: long, arg8: long): $List<(long)>
static "of"<E>(arg0: long): $List<(long)>
static "of"<E>(arg0: long, arg1: long): $List<(long)>
static "of"<E>(arg0: long, arg1: long, arg2: long, arg3: long, arg4: long, arg5: long, arg6: long): $List<(long)>
static "of"<E>(arg0: long, arg1: long, arg2: long, arg3: long, arg4: long, arg5: long, arg6: long, arg7: long): $List<(long)>
static "of"<E>(...arg0: (long)[]): $List<(long)>
static "of"<E>(arg0: long, arg1: long, arg2: long, arg3: long, arg4: long, arg5: long): $List<(long)>
 "addAll"(arg0: $Collection$$Type<(long)>): boolean
 "addAll"(arg0: integer, arg1: $Collection$$Type<(long)>): boolean
 "getFirst"(): long
 "getLast"(): long
 "addFirst"(arg0: long): void
 "addLast"(arg0: long): void
 "removeFirst"(): long
 "removeLast"(): long
 "removeAll"(arg0: $Collection$$Type<(never)>): boolean
 "retainAll"(arg0: $Collection$$Type<(never)>): boolean
 "reversed"(): $SequencedCollection
 "containsAll"(arg0: $Collection$$Type<(never)>): boolean
 "compareTo"(arg0: $List$$Type<(long)>): integer
 "toArray"(arg0: (long)[]): (long)[]
/**
 * 
 * @deprecated
 */
 "stream"(): $Stream<(long)>
 "contains"(arg0: long): boolean
 "addAll"(arg0: $LongCollection$$Type): boolean
 "removeIf"(arg0: $LongPredicate$0$$Type): boolean
/**
 * 
 * @deprecated
 */
 "removeIf"(arg0: $Predicate$$Type<(long)>): boolean
 "removeIf"(arg0: $LongPredicate$$Type): boolean
 "removeAll"(arg0: $LongCollection$$Type): boolean
 "retainAll"(arg0: $LongCollection$$Type): boolean
 "containsAll"(arg0: $LongCollection$$Type): boolean
/**
 * 
 * @deprecated
 */
 "parallelStream"(): $Stream<(long)>
 "rem"(arg0: long): boolean
 "longStream"(): $LongStream
/**
 * 
 * @deprecated
 */
 "toLongArray"(arg0: (long)[]): (long)[]
 "toLongArray"(): (long)[]
 "longParallelStream"(): $LongStream
 "longIterator"(): $LongIterator
 "longSpliterator"(): $LongSpliterator
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "forEach"(arg0: $LongConsumer$0$$Type): void
/**
 * 
 * @deprecated
 */
 "forEach"(arg0: $Consumer$$Type<(long)>): void
 "forEach"(arg0: $LongConsumer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongList$$Type = ($LongList);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LongList$$Original = $LongList;}
declare module "it.unimi.dsi.fastutil.ints.Int2ObjectMap$Entry" {
import {$Comparable} from "java.lang.Comparable"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$Map$Entry, $Map$Entry$$Type, $Map$Entry$$Interface} from "java.util.Map$Entry"

export interface $Int2ObjectMap$Entry$$Interface<V> extends $Map$Entry$$Interface<(integer), (V)> {
get "key"(): integer
get "intKey"(): integer
get "value"(): V
set "value"(value: V)
}

export class $Int2ObjectMap$Entry<V> implements $Int2ObjectMap$Entry$$Interface {
/**
 * 
 * @deprecated
 */
 "getKey"(): integer
 "getIntKey"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<K, V>(arg0: $Map$Entry$$Type<(integer), (V)>): $Map$Entry<(integer), (V)>
 "getValue"(): V
static "comparingByKey"<K, V>(arg0: $Comparator$$Type<(integer)>): $Comparator<($Map$Entry<(integer), (V)>)>
static "comparingByKey"<K extends $Comparable<(object)>, V>(): $Comparator<($Map$Entry<(integer), (V)>)>
 "setValue"(arg0: V): V
static "comparingByValue"<K, V extends $Comparable<(object)>>(): $Comparator<($Map$Entry<(integer), (V)>)>
static "comparingByValue"<K, V>(arg0: $Comparator$$Type<(V)>): $Comparator<($Map$Entry<(integer), (V)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Int2ObjectMap$Entry$$Type<V> = ($Int2ObjectMap$Entry<(V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Int2ObjectMap$Entry$$Original<V> = $Int2ObjectMap$Entry<(V)>;}
declare module "it.unimi.dsi.fastutil.doubles.DoubleListIterator" {
import {$DoubleConsumer$$Type as $DoubleConsumer$0$$Type} from "java.util.function.DoubleConsumer"
import {$ListIterator$$Interface} from "java.util.ListIterator"
import {$DoubleConsumer$$Type} from "it.unimi.dsi.fastutil.doubles.DoubleConsumer"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$DoubleBidirectionalIterator$$Interface} from "it.unimi.dsi.fastutil.doubles.DoubleBidirectionalIterator"

export interface $DoubleListIterator$$Interface extends $DoubleBidirectionalIterator$$Interface, $ListIterator$$Interface<(double)> {
}

export class $DoubleListIterator implements $DoubleListIterator$$Interface {
 "remove"(): void
/**
 * 
 * @deprecated
 */
 "add"(arg0: double): void
/**
 * 
 * @deprecated
 */
 "add"(arg0: any): void
 "add"(arg0: double): void
/**
 * 
 * @deprecated
 */
 "next"(): any
/**
 * 
 * @deprecated
 */
 "set"(arg0: any): void
/**
 * 
 * @deprecated
 */
 "set"(arg0: double): void
 "set"(arg0: double): void
/**
 * 
 * @deprecated
 */
 "previous"(): any
 "skip"(arg0: integer): integer
 "back"(arg0: integer): integer
 "previousDouble"(): double
 "hasNext"(): boolean
 "nextIndex"(): integer
 "previousIndex"(): integer
 "hasPrevious"(): boolean
/**
 * 
 * @deprecated
 */
 "forEachRemaining"(arg0: $Consumer$$Type<(double)>): void
 "forEachRemaining"(arg0: $DoubleConsumer$$Type): void
 "nextDouble"(): double
 "forEachRemaining"(arg0: any): void
 "forEachRemaining"(arg0: $DoubleConsumer$0$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleListIterator$$Type = ($DoubleListIterator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoubleListIterator$$Original = $DoubleListIterator;}
declare module "it.unimi.dsi.fastutil.doubles.DoubleList" {
import {$DoubleUnaryOperator$$Type} from "java.util.function.DoubleUnaryOperator"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Spliterator} from "java.util.Spliterator"
import {$List, $List$$Type, $List$$Interface} from "java.util.List"
import {$DoubleIterator} from "it.unimi.dsi.fastutil.doubles.DoubleIterator"
import {$IntFunction$$Type} from "java.util.function.IntFunction"
import {$DoublePredicate$$Type as $DoublePredicate$0$$Type} from "it.unimi.dsi.fastutil.doubles.DoublePredicate"
import {$Stream} from "java.util.stream.Stream"
import {$DoubleUnaryOperator$$Type as $DoubleUnaryOperator$0$$Type} from "it.unimi.dsi.fastutil.doubles.DoubleUnaryOperator"
import {$DoublePredicate$$Type} from "java.util.function.DoublePredicate"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$DoubleComparator$$Type} from "it.unimi.dsi.fastutil.doubles.DoubleComparator"
import {$Collection$$Type} from "java.util.Collection"
import {$DoubleCollection$$Type, $DoubleCollection$$Interface} from "it.unimi.dsi.fastutil.doubles.DoubleCollection"
import {$SequencedCollection} from "java.util.SequencedCollection"
import {$Comparator$$Type} from "java.util.Comparator"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$DoubleListIterator} from "it.unimi.dsi.fastutil.doubles.DoubleListIterator"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$DoubleConsumer$$Type} from "java.util.function.DoubleConsumer"
import {$ListIterator} from "java.util.ListIterator"
import {$DoubleSpliterator} from "it.unimi.dsi.fastutil.doubles.DoubleSpliterator"
import {$DoubleConsumer$$Type as $DoubleConsumer$0$$Type} from "it.unimi.dsi.fastutil.doubles.DoubleConsumer"
import {$DoubleStream} from "java.util.stream.DoubleStream"

export interface $DoubleList$$Interface extends $List$$Interface<(double)>, $Comparable$$Interface<($List<(double)>)>, $DoubleCollection$$Interface {
set "elements"(value: (double)[])
get "empty"(): boolean
get "first"(): double
get "last"(): double
}

export class $DoubleList implements $DoubleList$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: integer): any
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): boolean
 "size"(arg0: integer): void
/**
 * 
 * @deprecated
 */
 "get"(arg0: integer): any
 "indexOf"(arg0: double): integer
/**
 * 
 * @deprecated
 */
 "indexOf"(arg0: any): integer
 "getDouble"(arg0: integer): double
 "lastIndexOf"(arg0: double): integer
/**
 * 
 * @deprecated
 */
 "lastIndexOf"(arg0: any): integer
 "replaceAll"(arg0: $DoubleUnaryOperator$0$$Type): void
/**
 * 
 * @deprecated
 */
 "replaceAll"(arg0: $UnaryOperator$$Type<(double)>): void
 "replaceAll"(arg0: $DoubleUnaryOperator$$Type): void
/**
 * 
 * @deprecated
 */
 "add"(arg0: any): boolean
/**
 * 
 * @deprecated
 */
 "add"(arg0: double): boolean
 "add"(arg0: integer, arg1: double): void
/**
 * 
 * @deprecated
 */
 "add"(arg0: integer, arg1: double): void
/**
 * 
 * @deprecated
 */
 "add"(arg0: integer, arg1: any): void
 "add"(arg0: double): boolean
 "subList"(arg0: integer, arg1: integer): $List
 "iterator"(): $DoubleListIterator
static "of"(...arg0: (double)[]): $DoubleList
static "of"(): $DoubleList
static "of"(arg0: double, arg1: double): $DoubleList
static "of"(arg0: double): $DoubleList
static "of"(arg0: double, arg1: double, arg2: double): $DoubleList
/**
 * 
 * @deprecated
 */
 "contains"(arg0: any): boolean
 "spliterator"(): $Spliterator
 "addAll"(arg0: integer, arg1: $DoubleCollection$$Type): boolean
 "addAll"(arg0: $DoubleList$$Type): boolean
 "addAll"(arg0: integer, arg1: $DoubleList$$Type): boolean
 "set"(arg0: integer, arg1: double): double
/**
 * 
 * @deprecated
 */
 "set"(arg0: integer, arg1: any): any
/**
 * 
 * @deprecated
 */
 "set"(arg0: integer, arg1: double): double
 "sort"(arg0: $DoubleComparator$$Type): void
/**
 * 
 * @deprecated
 */
 "sort"(arg0: $Comparator$$Type<(double)>): void
 "listIterator"(arg0: integer): $ListIterator
 "listIterator"(): $ListIterator
 "getElements"(arg0: integer, arg1: (double)[], arg2: integer, arg3: integer): void
 "setElements"(arg0: integer, arg1: (double)[]): void
 "setElements"(arg0: integer, arg1: (double)[], arg2: integer, arg3: integer): void
 "setElements"(arg0: (double)[]): void
 "removeDouble"(arg0: integer): double
/**
 * 
 * @deprecated
 */
 "unstableSort"(arg0: $Comparator$$Type<(double)>): void
 "unstableSort"(arg0: $DoubleComparator$$Type): void
 "removeElements"(arg0: integer, arg1: integer): void
 "addElements"(arg0: integer, arg1: (double)[]): void
 "addElements"(arg0: integer, arg1: (double)[], arg2: integer, arg3: integer): void
 "size"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<E>(arg0: $Collection$$Type<(double)>): $List<(double)>
 "clear"(): void
 "isEmpty"(): boolean
 "toArray"(): (any)[]
 "toArray"<T>(arg0: (T)[]): (T)[]
static "of"<E>(arg0: double, arg1: double, arg2: double): $List<(double)>
static "of"<E>(arg0: double, arg1: double, arg2: double, arg3: double): $List<(double)>
static "of"<E>(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double): $List<(double)>
static "of"<E>(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: double, arg9: double): $List<(double)>
static "of"<E>(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: double): $List<(double)>
static "of"<E>(arg0: double): $List<(double)>
static "of"<E>(arg0: double, arg1: double): $List<(double)>
static "of"<E>(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double): $List<(double)>
static "of"<E>(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double): $List<(double)>
static "of"<E>(...arg0: (double)[]): $List<(double)>
static "of"<E>(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): $List<(double)>
 "addAll"(arg0: $Collection$$Type<(double)>): boolean
 "addAll"(arg0: integer, arg1: $Collection$$Type<(double)>): boolean
 "getFirst"(): double
 "getLast"(): double
 "addFirst"(arg0: double): void
 "addLast"(arg0: double): void
 "removeFirst"(): double
 "removeLast"(): double
 "removeAll"(arg0: $Collection$$Type<(never)>): boolean
 "retainAll"(arg0: $Collection$$Type<(never)>): boolean
 "reversed"(): $SequencedCollection
 "containsAll"(arg0: $Collection$$Type<(never)>): boolean
 "compareTo"(arg0: $List$$Type<(double)>): integer
 "toArray"(arg0: (double)[]): (double)[]
/**
 * 
 * @deprecated
 */
 "stream"(): $Stream<(double)>
 "contains"(arg0: double): boolean
 "addAll"(arg0: $DoubleCollection$$Type): boolean
 "removeIf"(arg0: $DoublePredicate$$Type): boolean
/**
 * 
 * @deprecated
 */
 "removeIf"(arg0: $Predicate$$Type<(double)>): boolean
 "removeIf"(arg0: $DoublePredicate$0$$Type): boolean
 "removeAll"(arg0: $DoubleCollection$$Type): boolean
 "retainAll"(arg0: $DoubleCollection$$Type): boolean
 "containsAll"(arg0: $DoubleCollection$$Type): boolean
/**
 * 
 * @deprecated
 */
 "parallelStream"(): $Stream<(double)>
 "rem"(arg0: double): boolean
 "doubleStream"(): $DoubleStream
 "doubleParallelStream"(): $DoubleStream
 "toDoubleArray"(): (double)[]
/**
 * 
 * @deprecated
 */
 "toDoubleArray"(arg0: (double)[]): (double)[]
 "doubleSpliterator"(): $DoubleSpliterator
 "doubleIterator"(): $DoubleIterator
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "forEach"(arg0: $DoubleConsumer$$Type): void
/**
 * 
 * @deprecated
 */
 "forEach"(arg0: $Consumer$$Type<(double)>): void
 "forEach"(arg0: $DoubleConsumer$0$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleList$$Type = ($DoubleList);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoubleList$$Original = $DoubleList;}
declare module "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction" {
import {$Float2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import {$Object2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import {$Reference2IntFunction} from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import {$Object2ObjectFunction, $Object2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import {$Reference2ShortFunction} from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import {$Reference2LongFunction} from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import {$Double2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import {$Int2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import {$Reference2ByteFunction} from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import {$Int2ObjectFunction} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$Byte2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import {$Char2ObjectFunction} from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import {$Object2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Object2FloatFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import {$Byte2ObjectFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import {$Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ReferenceFunction"
import {$Object2CharFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Object2ByteFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import {$Short2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import {$Long2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import {$Reference2FloatFunction} from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import {$Float2ObjectFunction} from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import {$Reference2CharFunction} from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import {$Short2ObjectFunction} from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import {$Object2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import {$Char2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import {$Object2ShortFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import {$Object2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import {$Double2ObjectFunction} from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import {$Reference2DoubleFunction} from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import {$Long2ObjectFunction} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"

export interface $Reference2ObjectFunction$$Interface<K, V> extends $Function$0$$Interface<(K), (V)> {

(arg0: any): V
}

export class $Reference2ObjectFunction<K, V> implements $Reference2ObjectFunction$$Interface {
 "remove"(arg0: any): V
 "get"(arg0: any): V
 "put"(arg0: K, arg1: V): V
 "getOrDefault"(arg0: any, arg1: V): V
 "andThenFloat"(arg0: $Object2FloatFunction$$Type<(V)>): $Reference2FloatFunction<(K)>
 "andThenObject"<T>(arg0: $Object2ObjectFunction$$Type<(V), (T)>): $Reference2ObjectFunction<(K), (T)>
 "composeByte"(arg0: $Byte2ReferenceFunction$$Type<(K)>): $Byte2ObjectFunction<(V)>
 "andThenLong"(arg0: $Object2LongFunction$$Type<(V)>): $Reference2LongFunction<(K)>
 "defaultReturnValue"(arg0: V): void
 "defaultReturnValue"(): V
 "composeLong"(arg0: $Long2ReferenceFunction$$Type<(K)>): $Long2ObjectFunction<(V)>
 "andThenChar"(arg0: $Object2CharFunction$$Type<(V)>): $Reference2CharFunction<(K)>
 "andThenDouble"(arg0: $Object2DoubleFunction$$Type<(V)>): $Reference2DoubleFunction<(K)>
 "composeObject"<T>(arg0: $Object2ReferenceFunction$$Type<(T), (K)>): $Object2ObjectFunction<(T), (V)>
 "composeChar"(arg0: $Char2ReferenceFunction$$Type<(K)>): $Char2ObjectFunction<(V)>
 "composeReference"<T>(arg0: $Reference2ReferenceFunction$$Type<(T), (K)>): $Reference2ObjectFunction<(T), (V)>
 "andThenShort"(arg0: $Object2ShortFunction$$Type<(V)>): $Reference2ShortFunction<(K)>
 "composeShort"(arg0: $Short2ReferenceFunction$$Type<(K)>): $Short2ObjectFunction<(V)>
 "composeFloat"(arg0: $Float2ReferenceFunction$$Type<(K)>): $Float2ObjectFunction<(V)>
 "andThenReference"<T>(arg0: $Object2ReferenceFunction$$Type<(V), (T)>): $Reference2ReferenceFunction<(K), (T)>
 "composeDouble"(arg0: $Double2ReferenceFunction$$Type<(K)>): $Double2ObjectFunction<(V)>
 "andThenByte"(arg0: $Object2ByteFunction$$Type<(V)>): $Reference2ByteFunction<(K)>
 "composeInt"(arg0: $Int2ReferenceFunction$$Type<(K)>): $Int2ObjectFunction<(V)>
 "andThenInt"(arg0: $Object2IntFunction$$Type<(V)>): $Reference2IntFunction<(K)>
 "size"(): integer
 "clear"(): void
 "apply"(arg0: K): V
 "containsKey"(arg0: any): boolean
static "identity"<T>(): $Function<(K), (K)>
 "compose"<V>(arg0: $Function$$Type<(V), (K)>): $Function<(V), (V)>
 "andThen"<V>(arg0: $Function$$Type<(V), (V)>): $Function<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Reference2ObjectFunction$$Type<K, V> = ((arg0: any) => V);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Reference2ObjectFunction$$Original<K, V> = $Reference2ObjectFunction<(K), (V)>;}
declare module "it.unimi.dsi.fastutil.objects.Reference2FloatFunction" {
import {$Float2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import {$Float2ByteFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import {$ToDoubleFunction$$Interface} from "java.util.function.ToDoubleFunction"
import {$Reference2IntFunction} from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import {$Int2FloatFunction} from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import {$Reference2ShortFunction} from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import {$Float2IntFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import {$Reference2LongFunction} from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import {$Double2FloatFunction} from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import {$Double2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import {$Int2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import {$Reference2ByteFunction} from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import {$Byte2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Object2FloatFunction} from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import {$Float2CharFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import {$Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ReferenceFunction"
import {$Reference2ObjectFunction} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Float2LongFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import {$Float2ShortFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import {$Short2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import {$Long2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import {$Float2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import {$Float2FloatFunction, $Float2FloatFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2FloatFunction"
import {$Reference2CharFunction} from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import {$Object2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import {$Char2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import {$Char2FloatFunction} from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import {$Long2FloatFunction} from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import {$Short2FloatFunction} from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import {$Reference2DoubleFunction} from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import {$Byte2FloatFunction} from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import {$Float2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"

export interface $Reference2FloatFunction$$Interface<K> extends $Function$0$$Interface<(K), (float)>, $ToDoubleFunction$$Interface<(K)> {

(arg0: any): float
}

export class $Reference2FloatFunction<K> implements $Reference2FloatFunction$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): any
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): any
/**
 * 
 * @deprecated
 */
 "put"(arg0: K, arg1: float): float
 "put"(arg0: K, arg1: float): float
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "getFloat"(arg0: any): float
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: float): float
 "getOrDefault"(arg0: any, arg1: float): float
 "applyAsDouble"(arg0: K): double
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(float), (T)>): $Function<(K), (T)>
 "andThenFloat"(arg0: $Float2FloatFunction$$Type): $Reference2FloatFunction<(K)>
 "andThenObject"<T>(arg0: $Float2ObjectFunction$$Type<(T)>): $Reference2ObjectFunction<(K), (T)>
 "composeByte"(arg0: $Byte2ReferenceFunction$$Type<(K)>): $Byte2FloatFunction
 "andThenLong"(arg0: $Float2LongFunction$$Type): $Reference2LongFunction<(K)>
 "defaultReturnValue"(): float
 "defaultReturnValue"(arg0: float): void
 "composeLong"(arg0: $Long2ReferenceFunction$$Type<(K)>): $Long2FloatFunction
 "andThenChar"(arg0: $Float2CharFunction$$Type): $Reference2CharFunction<(K)>
 "andThenDouble"(arg0: $Float2DoubleFunction$$Type): $Reference2DoubleFunction<(K)>
 "composeObject"<T>(arg0: $Object2ReferenceFunction$$Type<(T), (K)>): $Object2FloatFunction<(T)>
 "composeChar"(arg0: $Char2ReferenceFunction$$Type<(K)>): $Char2FloatFunction
 "composeReference"<T>(arg0: $Reference2ReferenceFunction$$Type<(T), (K)>): $Reference2FloatFunction<(T)>
 "andThenShort"(arg0: $Float2ShortFunction$$Type): $Reference2ShortFunction<(K)>
 "composeShort"(arg0: $Short2ReferenceFunction$$Type<(K)>): $Short2FloatFunction
 "composeFloat"(arg0: $Float2ReferenceFunction$$Type<(K)>): $Float2FloatFunction
 "andThenReference"<T>(arg0: $Float2ReferenceFunction$$Type<(T)>): $Reference2ReferenceFunction<(K), (T)>
 "composeDouble"(arg0: $Double2ReferenceFunction$$Type<(K)>): $Double2FloatFunction
 "andThenByte"(arg0: $Float2ByteFunction$$Type): $Reference2ByteFunction<(K)>
 "removeFloat"(arg0: any): float
 "composeInt"(arg0: $Int2ReferenceFunction$$Type<(K)>): $Int2FloatFunction
 "andThenInt"(arg0: $Float2IntFunction$$Type): $Reference2IntFunction<(K)>
 "size"(): integer
 "clear"(): void
 "apply"(arg0: K): float
 "containsKey"(arg0: any): boolean
static "identity"<T>(): $Function<(K), (K)>
 "compose"<V>(arg0: $Function$$Type<(V), (K)>): $Function<(V), (float)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Reference2FloatFunction$$Type<K> = ((arg0: any) => float);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Reference2FloatFunction$$Original<K> = $Reference2FloatFunction<(K)>;}
declare module "it.unimi.dsi.fastutil.shorts.ShortConsumer" {
import {$IntConsumer, $IntConsumer$$Type, $IntConsumer$$Interface} from "java.util.function.IntConsumer"
import {$Consumer, $Consumer$$Type, $Consumer$$Interface} from "java.util.function.Consumer"

export interface $ShortConsumer$$Interface extends $Consumer$$Interface<(short)>, $IntConsumer$$Interface {

(arg0: short): void
}

export class $ShortConsumer implements $ShortConsumer$$Interface {
/**
 * 
 * @deprecated
 */
 "accept"(arg0: any): void
/**
 * 
 * @deprecated
 */
 "accept"(arg0: short): void
/**
 * 
 * @deprecated
 */
 "accept"(arg0: integer): void
 "accept"(arg0: short): void
/**
 * 
 * @deprecated
 */
 "andThen"(arg0: $Consumer$$Type<(short)>): $Consumer<(short)>
 "andThen"(arg0: $IntConsumer$$Type): $IntConsumer
 "andThen"(arg0: $ShortConsumer$$Type): $ShortConsumer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShortConsumer$$Type = ((arg0: short) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShortConsumer$$Original = $ShortConsumer;}
declare module "it.unimi.dsi.fastutil.longs.AbstractLongSet" {
import {$AbstractLongCollection} from "it.unimi.dsi.fastutil.longs.AbstractLongCollection"
import {$Collection$$Type} from "java.util.Collection"
import {$LongSet, $LongSet$$Interface} from "it.unimi.dsi.fastutil.longs.LongSet"
import {$LongSpliterator} from "it.unimi.dsi.fastutil.longs.LongSpliterator"
import {$Cloneable$$Interface} from "java.lang.Cloneable"
import {$Set} from "java.util.Set"
import {$LongIterator} from "it.unimi.dsi.fastutil.longs.LongIterator"

export class $AbstractLongSet extends $AbstractLongCollection implements $Cloneable$$Interface, $LongSet$$Interface {
public "remove"(arg0: long): boolean
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "iterator"(): $LongIterator
/**
 * 
 * @deprecated
 */
public "rem"(arg0: long): boolean
/**
 * 
 * @deprecated
 */
public "remove"(arg0: any): boolean
/**
 * 
 * @deprecated
 */
public "add"(arg0: long): boolean
/**
 * 
 * @deprecated
 */
public "add"(arg0: any): boolean
public static "of"(arg0: long, arg1: long): $LongSet
public static "of"(): $LongSet
public static "of"(...arg0: (long)[]): $LongSet
public static "of"(arg0: long): $LongSet
public static "of"(arg0: long, arg1: long, arg2: long): $LongSet
/**
 * 
 * @deprecated
 */
public "contains"(arg0: any): boolean
public "spliterator"(): $LongSpliterator
public "size"(): integer
public static "copyOf"<E>(arg0: $Collection$$Type<(long)>): $Set<(long)>
public "clear"(): void
public "isEmpty"(): boolean
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public static "of"<E>(arg0: long, arg1: long, arg2: long, arg3: long, arg4: long, arg5: long): $Set<(long)>
public static "of"<E>(arg0: long, arg1: long, arg2: long, arg3: long, arg4: long): $Set<(long)>
public static "of"<E>(arg0: long, arg1: long, arg2: long, arg3: long): $Set<(long)>
public static "of"<E>(arg0: long, arg1: long, arg2: long, arg3: long, arg4: long, arg5: long, arg6: long, arg7: long, arg8: long, arg9: long): $Set<(long)>
public static "of"<E>(arg0: long, arg1: long, arg2: long, arg3: long, arg4: long, arg5: long, arg6: long, arg7: long, arg8: long): $Set<(long)>
public static "of"<E>(arg0: long, arg1: long, arg2: long, arg3: long, arg4: long, arg5: long, arg6: long, arg7: long): $Set<(long)>
public static "of"<E>(arg0: long, arg1: long, arg2: long, arg3: long, arg4: long, arg5: long, arg6: long): $Set<(long)>
public static "of"<E>(...arg0: (long)[]): $Set<(long)>
public static "of"<E>(arg0: long, arg1: long, arg2: long): $Set<(long)>
public static "of"<E>(arg0: long): $Set<(long)>
public static "of"<E>(arg0: long, arg1: long): $Set<(long)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractLongSet$$Type = ($AbstractLongSet);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractLongSet$$Original = $AbstractLongSet;}
declare module "it.unimi.dsi.fastutil.objects.AbstractObject2ByteMap" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ByteCollection} from "it.unimi.dsi.fastutil.bytes.ByteCollection"
import {$Object2ByteFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import {$IntBinaryOperator$$Type} from "java.util.function.IntBinaryOperator"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$ToIntFunction$$Type} from "java.util.function.ToIntFunction"
import {$ObjectSet} from "it.unimi.dsi.fastutil.objects.ObjectSet"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Object2ByteMap$$Interface} from "it.unimi.dsi.fastutil.objects.Object2ByteMap"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$AbstractObject2ByteFunction} from "it.unimi.dsi.fastutil.objects.AbstractObject2ByteFunction"
import {$Set} from "java.util.Set"
import {$Object2ByteMap$Entry} from "it.unimi.dsi.fastutil.objects.Object2ByteMap$Entry"
import {$ByteBinaryOperator$$Type} from "it.unimi.dsi.fastutil.bytes.ByteBinaryOperator"

export class $AbstractObject2ByteMap<K> extends $AbstractObject2ByteFunction<(K)> implements $Object2ByteMap$$Interface<(K)>, $Serializable$$Interface {
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "values"(): $ByteCollection
public "hashCode"(): integer
public "isEmpty"(): boolean
public "putAll"(arg0: $Map$$Type<(K), (byte)>): void
public "containsKey"(arg0: any): boolean
public "keySet"(): $Set
public "containsValue"(arg0: byte): boolean
/**
 * 
 * @deprecated
 */
public "remove"(arg0: any, arg1: any): boolean
/**
 * 
 * @deprecated
 */
public "remove"(arg0: any): any
public "remove"(arg0: any, arg1: byte): boolean
public "size"(): integer
/**
 * 
 * @deprecated
 */
public "get"(arg0: any): byte
/**
 * 
 * @deprecated
 */
public "put"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
public "put"(arg0: K, arg1: byte): byte
public "clear"(): void
public "replace"(arg0: K, arg1: byte): byte
public "replace"(arg0: K, arg1: byte, arg2: byte): boolean
/**
 * 
 * @deprecated
 */
public "replace"(arg0: K, arg1: byte): byte
/**
 * 
 * @deprecated
 */
public "replace"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
public "replace"(arg0: K, arg1: byte, arg2: byte): boolean
/**
 * 
 * @deprecated
 */
public "replace"(arg0: any, arg1: any, arg2: any): boolean
/**
 * 
 * @deprecated
 */
public "merge"(arg0: any, arg1: any, arg2: $BiFunction$$Type): any
/**
 * 
 * @deprecated
 */
public "merge"(arg0: K, arg1: byte, arg2: $BiFunction$$Type<(byte), (byte), (byte)>): byte
public "merge"(arg0: K, arg1: byte, arg2: $BiFunction$$Type<(byte), (byte), (byte)>): byte
/**
 * 
 * @deprecated
 */
public "entrySet"(): $ObjectSet<($Map$Entry<(K), (byte)>)>
public "putIfAbsent"(arg0: K, arg1: byte): byte
/**
 * 
 * @deprecated
 */
public "putIfAbsent"(arg0: K, arg1: byte): byte
/**
 * 
 * @deprecated
 */
public "putIfAbsent"(arg0: any, arg1: any): any
public "forEach"(arg0: $BiConsumer$$Type<(K), (byte)>): void
public "computeIfAbsent"(arg0: K, arg1: $ToIntFunction$$Type<(K)>): byte
public "computeIfAbsent"(arg0: K, arg1: $Object2ByteFunction$$Type<(K)>): byte
/**
 * 
 * @deprecated
 */
public "containsValue"(arg0: any): boolean
public "getOrDefault"(arg0: any, arg1: byte): byte
/**
 * 
 * @deprecated
 */
public "getOrDefault"(arg0: any, arg1: byte): byte
/**
 * 
 * @deprecated
 */
public "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
public "computeByteIfAbsentPartial"(arg0: K, arg1: $Object2ByteFunction$$Type<(K)>): byte
public "computeByteIfPresent"(arg0: K, arg1: $BiFunction$$Type<(K), (byte), (byte)>): byte
public "object2ByteEntrySet"(): $ObjectSet<($Object2ByteMap$Entry<(K)>)>
/**
 * 
 * @deprecated
 */
public "computeByteIfAbsent"(arg0: K, arg1: $ToIntFunction$$Type<(K)>): byte
public "computeByte"(arg0: K, arg1: $BiFunction$$Type<(K), (byte), (byte)>): byte
public "defaultReturnValue"(): byte
public "defaultReturnValue"(arg0: byte): void
public "mergeByte"(arg0: K, arg1: byte, arg2: $IntBinaryOperator$$Type): byte
public "mergeByte"(arg0: K, arg1: byte, arg2: $ByteBinaryOperator$$Type): byte
/**
 * 
 * @deprecated
 */
public "mergeByte"(arg0: K, arg1: byte, arg2: $BiFunction$$Type<(byte), (byte), (byte)>): byte
public static "copyOf"<K, V>(arg0: $Map$$Type<(K), (byte)>): $Map<(K), (byte)>
public "replaceAll"(arg0: $BiFunction$$Type<(K), (byte), (byte)>): void
public static "of"<K, V>(arg0: K, arg1: byte, arg2: K, arg3: byte, arg4: K, arg5: byte, arg6: K, arg7: byte): $Map<(K), (byte)>
public static "of"<K, V>(): $Map<(K), (byte)>
public static "of"<K, V>(arg0: K, arg1: byte): $Map<(K), (byte)>
public static "of"<K, V>(arg0: K, arg1: byte, arg2: K, arg3: byte): $Map<(K), (byte)>
public static "of"<K, V>(arg0: K, arg1: byte, arg2: K, arg3: byte, arg4: K, arg5: byte): $Map<(K), (byte)>
public static "of"<K, V>(arg0: K, arg1: byte, arg2: K, arg3: byte, arg4: K, arg5: byte, arg6: K, arg7: byte, arg8: K, arg9: byte, arg10: K, arg11: byte, arg12: K, arg13: byte, arg14: K, arg15: byte, arg16: K, arg17: byte, arg18: K, arg19: byte): $Map<(K), (byte)>
public static "of"<K, V>(arg0: K, arg1: byte, arg2: K, arg3: byte, arg4: K, arg5: byte, arg6: K, arg7: byte, arg8: K, arg9: byte, arg10: K, arg11: byte, arg12: K, arg13: byte, arg14: K, arg15: byte, arg16: K, arg17: byte): $Map<(K), (byte)>
public static "of"<K, V>(arg0: K, arg1: byte, arg2: K, arg3: byte, arg4: K, arg5: byte, arg6: K, arg7: byte, arg8: K, arg9: byte, arg10: K, arg11: byte, arg12: K, arg13: byte, arg14: K, arg15: byte): $Map<(K), (byte)>
public static "of"<K, V>(arg0: K, arg1: byte, arg2: K, arg3: byte, arg4: K, arg5: byte, arg6: K, arg7: byte, arg8: K, arg9: byte, arg10: K, arg11: byte, arg12: K, arg13: byte): $Map<(K), (byte)>
public static "of"<K, V>(arg0: K, arg1: byte, arg2: K, arg3: byte, arg4: K, arg5: byte, arg6: K, arg7: byte, arg8: K, arg9: byte, arg10: K, arg11: byte): $Map<(K), (byte)>
public static "of"<K, V>(arg0: K, arg1: byte, arg2: K, arg3: byte, arg4: K, arg5: byte, arg6: K, arg7: byte, arg8: K, arg9: byte): $Map<(K), (byte)>
public "compute"(arg0: K, arg1: $BiFunction$$Type<(K), (byte), (byte)>): byte
public static "entry"<K, V>(arg0: K, arg1: byte): $Map$Entry<(K), (byte)>
public "computeIfAbsent"(arg0: K, arg1: $Function$$Type<(K), (byte)>): byte
public "computeIfPresent"(arg0: K, arg1: $BiFunction$$Type<(K), (byte), (byte)>): byte
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(K), (byte)>)[]): $Map<(K), (byte)>
public static "identity"<T>(): $Function<(K), (K)>
[index: string | number]: byte
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractObject2ByteMap$$Type<K> = ($AbstractObject2ByteMap<(K)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractObject2ByteMap$$Original<K> = $AbstractObject2ByteMap<(K)>;}
declare module "it.unimi.dsi.fastutil.chars.Char2ByteFunction" {
import {$Char2DoubleFunction} from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import {$Byte2ByteFunction, $Byte2ByteFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction"
import {$Byte2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import {$Float2ByteFunction} from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import {$Long2CharFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import {$Long2ByteFunction} from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import {$Byte2IntFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"
import {$Int2CharFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import {$Short2CharFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import {$Reference2ByteFunction} from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import {$Byte2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import {$Char2ObjectFunction} from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import {$Char2ShortFunction} from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Byte2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import {$Byte2ShortFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import {$Float2CharFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import {$Byte2CharFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import {$Object2CharFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Object2ByteFunction} from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import {$Char2CharFunction, $Char2CharFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2CharFunction"
import {$Double2CharFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import {$Byte2LongFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import {$Char2LongFunction} from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import {$IntUnaryOperator, $IntUnaryOperator$$Type, $IntUnaryOperator$$Interface} from "java.util.function.IntUnaryOperator"
import {$Double2ByteFunction} from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import {$Reference2CharFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import {$Char2ReferenceFunction} from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import {$Char2IntFunction} from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import {$Char2FloatFunction} from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import {$Byte2FloatFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import {$Short2ByteFunction} from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import {$Int2ByteFunction} from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"

export interface $Char2ByteFunction$$Interface extends $Function$0$$Interface<(character), (byte)>, $IntUnaryOperator$$Interface {

(arg0: character): byte
}

export class $Char2ByteFunction implements $Char2ByteFunction$$Interface {
 "remove"(arg0: character): byte
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): byte
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): byte
 "get"(arg0: character): byte
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: character, arg1: byte): byte
/**
 * 
 * @deprecated
 */
 "put"(arg0: character, arg1: byte): byte
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "containsKey"(arg0: character): boolean
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: byte): byte
 "getOrDefault"(arg0: character, arg1: byte): byte
/**
 * 
 * @deprecated
 */
 "applyAsInt"(arg0: integer): integer
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (character)>): $Function<(T), (byte)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(byte), (T)>): $Function<(character), (T)>
 "andThenFloat"(arg0: $Byte2FloatFunction$$Type): $Char2FloatFunction
 "andThenObject"<T>(arg0: $Byte2ObjectFunction$$Type<(T)>): $Char2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2CharFunction$$Type): $Byte2ByteFunction
 "andThenLong"(arg0: $Byte2LongFunction$$Type): $Char2LongFunction
 "defaultReturnValue"(): byte
 "defaultReturnValue"(arg0: byte): void
 "composeLong"(arg0: $Long2CharFunction$$Type): $Long2ByteFunction
 "andThenChar"(arg0: $Byte2CharFunction$$Type): $Char2CharFunction
 "andThenDouble"(arg0: $Byte2DoubleFunction$$Type): $Char2DoubleFunction
 "composeObject"<T>(arg0: $Object2CharFunction$$Type<(T)>): $Object2ByteFunction<(T)>
 "composeChar"(arg0: $Char2CharFunction$$Type): $Char2ByteFunction
 "composeReference"<T>(arg0: $Reference2CharFunction$$Type<(T)>): $Reference2ByteFunction<(T)>
 "andThenShort"(arg0: $Byte2ShortFunction$$Type): $Char2ShortFunction
 "composeShort"(arg0: $Short2CharFunction$$Type): $Short2ByteFunction
 "composeFloat"(arg0: $Float2CharFunction$$Type): $Float2ByteFunction
 "andThenReference"<T>(arg0: $Byte2ReferenceFunction$$Type<(T)>): $Char2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2CharFunction$$Type): $Double2ByteFunction
 "andThenByte"(arg0: $Byte2ByteFunction$$Type): $Char2ByteFunction
 "composeInt"(arg0: $Int2CharFunction$$Type): $Int2ByteFunction
 "andThenInt"(arg0: $Byte2IntFunction$$Type): $Char2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: character): byte
static "identity"(): $IntUnaryOperator
 "compose"(arg0: $IntUnaryOperator$$Type): $IntUnaryOperator
 "andThen"(arg0: $IntUnaryOperator$$Type): $IntUnaryOperator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Char2ByteFunction$$Type = ((arg0: character) => byte);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Char2ByteFunction$$Original = $Char2ByteFunction;}
declare module "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction" {
import {$Float2ReferenceFunction} from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import {$Object2IntFunction} from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import {$Reference2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import {$Object2ObjectFunction, $Object2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import {$Reference2ShortFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import {$Reference2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import {$Double2ReferenceFunction} from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import {$Int2ReferenceFunction} from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import {$Reference2ByteFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import {$Byte2ReferenceFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import {$Int2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$Char2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import {$Object2DoubleFunction} from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Object2FloatFunction} from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import {$Byte2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import {$Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ReferenceFunction"
import {$Reference2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Object2CharFunction} from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Object2ByteFunction} from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import {$Short2ReferenceFunction} from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import {$Long2ReferenceFunction} from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import {$Reference2FloatFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import {$Float2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import {$Reference2CharFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import {$Object2ShortFunction} from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import {$Short2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import {$Char2ReferenceFunction} from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import {$Object2LongFunction} from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import {$Double2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import {$Reference2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import {$Long2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"

export interface $Object2ReferenceFunction$$Interface<K, V> extends $Function$0$$Interface<(K), (V)> {

(arg0: any): V
}

export class $Object2ReferenceFunction<K, V> implements $Object2ReferenceFunction$$Interface {
 "remove"(arg0: any): V
 "get"(arg0: any): V
 "put"(arg0: K, arg1: V): V
 "getOrDefault"(arg0: any, arg1: V): V
 "andThenFloat"(arg0: $Reference2FloatFunction$$Type<(V)>): $Object2FloatFunction<(K)>
 "andThenObject"<T>(arg0: $Reference2ObjectFunction$$Type<(V), (T)>): $Object2ObjectFunction<(K), (T)>
 "composeByte"(arg0: $Byte2ObjectFunction$$Type<(K)>): $Byte2ReferenceFunction<(V)>
 "andThenLong"(arg0: $Reference2LongFunction$$Type<(V)>): $Object2LongFunction<(K)>
 "defaultReturnValue"(arg0: V): void
 "defaultReturnValue"(): V
 "composeLong"(arg0: $Long2ObjectFunction$$Type<(K)>): $Long2ReferenceFunction<(V)>
 "andThenChar"(arg0: $Reference2CharFunction$$Type<(V)>): $Object2CharFunction<(K)>
 "andThenDouble"(arg0: $Reference2DoubleFunction$$Type<(V)>): $Object2DoubleFunction<(K)>
 "composeObject"<T>(arg0: $Object2ObjectFunction$$Type<(T), (K)>): $Object2ReferenceFunction<(T), (V)>
 "composeChar"(arg0: $Char2ObjectFunction$$Type<(K)>): $Char2ReferenceFunction<(V)>
 "composeReference"<T>(arg0: $Reference2ObjectFunction$$Type<(T), (K)>): $Reference2ReferenceFunction<(T), (V)>
 "andThenShort"(arg0: $Reference2ShortFunction$$Type<(V)>): $Object2ShortFunction<(K)>
 "composeShort"(arg0: $Short2ObjectFunction$$Type<(K)>): $Short2ReferenceFunction<(V)>
 "composeFloat"(arg0: $Float2ObjectFunction$$Type<(K)>): $Float2ReferenceFunction<(V)>
 "andThenReference"<T>(arg0: $Reference2ReferenceFunction$$Type<(V), (T)>): $Object2ReferenceFunction<(K), (T)>
 "composeDouble"(arg0: $Double2ObjectFunction$$Type<(K)>): $Double2ReferenceFunction<(V)>
 "andThenByte"(arg0: $Reference2ByteFunction$$Type<(V)>): $Object2ByteFunction<(K)>
 "composeInt"(arg0: $Int2ObjectFunction$$Type<(K)>): $Int2ReferenceFunction<(V)>
 "andThenInt"(arg0: $Reference2IntFunction$$Type<(V)>): $Object2IntFunction<(K)>
 "size"(): integer
 "clear"(): void
 "apply"(arg0: K): V
 "containsKey"(arg0: any): boolean
static "identity"<T>(): $Function<(K), (K)>
 "compose"<V>(arg0: $Function$$Type<(V), (K)>): $Function<(V), (V)>
 "andThen"<V>(arg0: $Function$$Type<(V), (V)>): $Function<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Object2ReferenceFunction$$Type<K, V> = ((arg0: any) => V);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Object2ReferenceFunction$$Original<K, V> = $Object2ReferenceFunction<(K), (V)>;}
declare module "it.unimi.dsi.fastutil.longs.Long2ObjectFunction" {
import {$Object2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import {$Long2CharFunction} from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import {$Long2ByteFunction} from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import {$Long2IntFunction} from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import {$LongFunction$$Interface} from "java.util.function.LongFunction"
import {$Object2ObjectFunction, $Object2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import {$Reference2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import {$Long2ShortFunction} from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import {$Int2ObjectFunction} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$Char2ObjectFunction} from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import {$Object2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Object2FloatFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import {$Byte2ObjectFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import {$Reference2ObjectFunction} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Object2CharFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Long2DoubleFunction} from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import {$Long2LongFunction, $Long2LongFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import {$Float2LongFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import {$Object2ByteFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import {$Long2ReferenceFunction} from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import {$Byte2LongFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import {$Char2LongFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import {$Double2LongFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import {$Float2ObjectFunction} from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import {$Short2LongFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import {$Int2LongFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import {$Short2ObjectFunction} from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import {$Object2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import {$Object2ShortFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import {$Long2FloatFunction} from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import {$Object2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import {$Double2ObjectFunction} from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"

export interface $Long2ObjectFunction$$Interface<V> extends $Function$0$$Interface<(long), (V)>, $LongFunction$$Interface<(V)> {

(arg0: long): V
}

export class $Long2ObjectFunction<V> implements $Long2ObjectFunction$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): V
 "remove"(arg0: long): V
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): V
 "get"(arg0: long): V
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "put"(arg0: long, arg1: V): V
 "put"(arg0: long, arg1: V): V
 "apply"(arg0: long): V
 "containsKey"(arg0: long): boolean
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "getOrDefault"(arg0: long, arg1: V): V
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: V): V
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (long)>): $Function<(T), (V)>
 "andThenFloat"(arg0: $Object2FloatFunction$$Type<(V)>): $Long2FloatFunction
 "andThenObject"<T>(arg0: $Object2ObjectFunction$$Type<(V), (T)>): $Long2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2LongFunction$$Type): $Byte2ObjectFunction<(V)>
 "andThenLong"(arg0: $Object2LongFunction$$Type<(V)>): $Long2LongFunction
 "defaultReturnValue"(): V
 "defaultReturnValue"(arg0: V): void
 "composeLong"(arg0: $Long2LongFunction$$Type): $Long2ObjectFunction<(V)>
 "andThenChar"(arg0: $Object2CharFunction$$Type<(V)>): $Long2CharFunction
 "andThenDouble"(arg0: $Object2DoubleFunction$$Type<(V)>): $Long2DoubleFunction
 "composeObject"<T>(arg0: $Object2LongFunction$$Type<(T)>): $Object2ObjectFunction<(T), (V)>
 "composeChar"(arg0: $Char2LongFunction$$Type): $Char2ObjectFunction<(V)>
 "composeReference"<T>(arg0: $Reference2LongFunction$$Type<(T)>): $Reference2ObjectFunction<(T), (V)>
 "andThenShort"(arg0: $Object2ShortFunction$$Type<(V)>): $Long2ShortFunction
 "composeShort"(arg0: $Short2LongFunction$$Type): $Short2ObjectFunction<(V)>
 "composeFloat"(arg0: $Float2LongFunction$$Type): $Float2ObjectFunction<(V)>
 "andThenReference"<T>(arg0: $Object2ReferenceFunction$$Type<(V), (T)>): $Long2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2LongFunction$$Type): $Double2ObjectFunction<(V)>
 "andThenByte"(arg0: $Object2ByteFunction$$Type<(V)>): $Long2ByteFunction
 "composeInt"(arg0: $Int2LongFunction$$Type): $Int2ObjectFunction<(V)>
 "andThenInt"(arg0: $Object2IntFunction$$Type<(V)>): $Long2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: long): V
static "identity"<T>(): $Function<(long), (long)>
 "andThen"<V>(arg0: $Function$$Type<(V), (V)>): $Function<(long), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Long2ObjectFunction$$Type<V> = ((arg0: long) => V);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Long2ObjectFunction$$Original<V> = $Long2ObjectFunction<(V)>;}
declare module "it.unimi.dsi.fastutil.shorts.ShortCollection" {
import {$ShortPredicate$$Type} from "it.unimi.dsi.fastutil.shorts.ShortPredicate"
import {$Collection$$Type, $Collection$$Interface} from "java.util.Collection"
import {$Spliterator} from "java.util.Spliterator"
import {$IntStream} from "java.util.stream.IntStream"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$IntPredicate$$Type} from "java.util.function.IntPredicate"
import {$IntSpliterator} from "it.unimi.dsi.fastutil.ints.IntSpliterator"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$IntFunction$$Type} from "java.util.function.IntFunction"
import {$IntIterator} from "it.unimi.dsi.fastutil.ints.IntIterator"
import {$ShortConsumer$$Type} from "it.unimi.dsi.fastutil.shorts.ShortConsumer"
import {$IntConsumer$$Type} from "java.util.function.IntConsumer"
import {$ShortIterable$$Interface} from "it.unimi.dsi.fastutil.shorts.ShortIterable"
import {$Stream} from "java.util.stream.Stream"
import {$ShortIterator} from "it.unimi.dsi.fastutil.shorts.ShortIterator"

export interface $ShortCollection$$Interface extends $Collection$$Interface<(short)>, $ShortIterable$$Interface {
get "empty"(): boolean
}

export class $ShortCollection implements $ShortCollection$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): boolean
/**
 * 
 * @deprecated
 */
 "add"(arg0: any): boolean
 "add"(arg0: short): boolean
/**
 * 
 * @deprecated
 */
 "add"(arg0: short): boolean
 "toArray"(arg0: (short)[]): (short)[]
 "iterator"(): $ShortIterator
/**
 * 
 * @deprecated
 */
 "stream"(): $Stream<(short)>
 "intStream"(): $IntStream
/**
 * 
 * @deprecated
 */
 "contains"(arg0: any): boolean
 "contains"(arg0: short): boolean
 "spliterator"(): $Spliterator
 "addAll"(arg0: $ShortCollection$$Type): boolean
/**
 * 
 * @deprecated
 */
 "removeIf"(arg0: $Predicate$$Type<(short)>): boolean
 "removeIf"(arg0: $ShortPredicate$$Type): boolean
 "removeIf"(arg0: $IntPredicate$$Type): boolean
 "removeAll"(arg0: $ShortCollection$$Type): boolean
 "retainAll"(arg0: $ShortCollection$$Type): boolean
 "containsAll"(arg0: $ShortCollection$$Type): boolean
/**
 * 
 * @deprecated
 */
 "parallelStream"(): $Stream<(short)>
 "rem"(arg0: short): boolean
/**
 * 
 * @deprecated
 */
 "toShortArray"(arg0: (short)[]): (short)[]
 "toShortArray"(): (short)[]
 "intSpliterator"(): $IntSpliterator
 "intIterator"(): $IntIterator
 "intParallelStream"(): $IntStream
 "size"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "toArray"(): (any)[]
 "addAll"(arg0: $Collection$$Type<(short)>): boolean
 "removeAll"(arg0: $Collection$$Type<(never)>): boolean
 "retainAll"(arg0: $Collection$$Type<(never)>): boolean
 "containsAll"(arg0: $Collection$$Type<(never)>): boolean
 "forEach"(arg0: $ShortConsumer$$Type): void
/**
 * 
 * @deprecated
 */
 "forEach"(arg0: $Consumer$$Type<(short)>): void
 "forEach"(arg0: $IntConsumer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShortCollection$$Type = ($ShortCollection);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShortCollection$$Original = $ShortCollection;}
declare module "it.unimi.dsi.fastutil.objects.AbstractReference2ObjectMap" {
import {$Reference2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Reference2ObjectMap$$Interface} from "it.unimi.dsi.fastutil.objects.Reference2ObjectMap"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$ObjectCollection} from "it.unimi.dsi.fastutil.objects.ObjectCollection"
import {$ObjectSet} from "it.unimi.dsi.fastutil.objects.ObjectSet"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set} from "java.util.Set"
import {$AbstractReference2ObjectFunction} from "it.unimi.dsi.fastutil.objects.AbstractReference2ObjectFunction"
import {$Reference2ObjectMap$Entry} from "it.unimi.dsi.fastutil.objects.Reference2ObjectMap$Entry"

export class $AbstractReference2ObjectMap<K, V> extends $AbstractReference2ObjectFunction<(K), (V)> implements $Reference2ObjectMap$$Interface<(K), (V)>, $Serializable$$Interface {
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "values"(): $ObjectCollection<(V)>
public "hashCode"(): integer
public "isEmpty"(): boolean
public "putAll"(arg0: $Map$$Type<(K), (V)>): void
public "containsKey"(arg0: any): boolean
public "keySet"(): $Set
public "containsValue"(arg0: any): boolean
public "remove"(arg0: any): V
public "remove"(arg0: any, arg1: any): boolean
public "size"(): integer
public "put"(arg0: K, arg1: V): V
public "clear"(): void
public "replace"(arg0: K, arg1: V): V
public "replace"(arg0: K, arg1: V, arg2: V): boolean
public "merge"(arg0: K, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
public "entrySet"(): $ObjectSet<($Map$Entry<(K), (V)>)>
public "putIfAbsent"(arg0: K, arg1: V): V
public "compute"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
public "forEach"(arg0: $BiConsumer$$Type<(K), (V)>): void
public "computeIfAbsent"(arg0: K, arg1: $Reference2ObjectFunction$$Type<(K), (V)>): V
public "getOrDefault"(arg0: any, arg1: V): V
public "computeIfPresent"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
public "reference2ObjectEntrySet"(): $ObjectSet<($Reference2ObjectMap$Entry<(K), (V)>)>
/**
 * 
 * @deprecated
 */
public "computeObjectIfAbsentPartial"(arg0: K, arg1: $Reference2ObjectFunction$$Type<(K), (V)>): V
public "defaultReturnValue"(arg0: V): void
public "defaultReturnValue"(): V
public static "copyOf"<K, V>(arg0: $Map$$Type<(K), (V)>): $Map<(K), (V)>
public "replaceAll"(arg0: $BiFunction$$Type<(K), (V), (V)>): void
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
public static "of"<K, V>(): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public "computeIfAbsent"(arg0: K, arg1: $Function$$Type<(K), (V)>): V
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(K), (V)>)[]): $Map<(K), (V)>
public static "identity"<T>(): $Function<(K), (K)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractReference2ObjectMap$$Type<K, V> = ($AbstractReference2ObjectMap<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractReference2ObjectMap$$Original<K, V> = $AbstractReference2ObjectMap<(K), (V)>;}
declare module "it.unimi.dsi.fastutil.longs.Long2ObjectLinkedOpenHashMap" {
import {$Collection} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Hash$$Interface} from "it.unimi.dsi.fastutil.Hash"
import {$Long2ObjectMap$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectMap"
import {$LongFunction$$Type} from "java.util.function.LongFunction"
import {$LongComparator} from "it.unimi.dsi.fastutil.longs.LongComparator"
import {$Long2ObjectSortedMap} from "it.unimi.dsi.fastutil.longs.Long2ObjectSortedMap"
import {$AbstractLong2ObjectSortedMap} from "it.unimi.dsi.fastutil.longs.AbstractLong2ObjectSortedMap"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$ObjectSet} from "it.unimi.dsi.fastutil.objects.ObjectSet"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Function} from "java.util.function.Function"
import {$Cloneable$$Interface} from "java.lang.Cloneable"
import {$Set} from "java.util.Set"
import {$Long2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"

export class $Long2ObjectLinkedOpenHashMap<V> extends $AbstractLong2ObjectSortedMap<(V)> implements $Serializable$$Interface, $Cloneable$$Interface, $Hash$$Interface {
constructor(arg0: $Map$$Type<(long), (V)>)
constructor(arg0: $Long2ObjectMap$$Type<(V)>, arg1: float)
constructor(arg0: $Long2ObjectMap$$Type<(V)>)
constructor(arg0: (long)[], arg1: (V)[], arg2: float)
constructor(arg0: (long)[], arg1: (V)[])
constructor(arg0: integer, arg1: float)
constructor(arg0: integer)
constructor()
constructor(arg0: $Map$$Type<(long), (V)>, arg1: float)

public "remove"(arg0: long): V
public "remove"(arg0: long, arg1: any): boolean
public "size"(): integer
public "get"(arg0: long): V
public "put"(arg0: long, arg1: V): V
public "values"(): $Collection
public "hashCode"(): integer
public "clone"(): any
public "clear"(): void
public "isEmpty"(): boolean
public "replace"(arg0: long, arg1: V): V
public "replace"(arg0: long, arg1: V, arg2: V): boolean
public "trim"(arg0: integer): boolean
public "trim"(): boolean
public "merge"(arg0: long, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
public "putAll"(arg0: $Map$$Type<(long), (V)>): void
public "putIfAbsent"(arg0: long, arg1: V): V
public "compute"(arg0: long, arg1: $BiFunction$$Type<(long), (V), (V)>): V
public "containsKey"(arg0: long): boolean
public "computeIfAbsent"(arg0: long, arg1: $LongFunction$$Type<(V)>): V
public "computeIfAbsent"(arg0: long, arg1: $Long2ObjectFunction$$Type<(V)>): V
public "keySet"(): $Set
public "containsValue"(arg0: any): boolean
public "getOrDefault"(arg0: long, arg1: V): V
public "computeIfPresent"(arg0: long, arg1: $BiFunction$$Type<(long), (V), (V)>): V
public "ensureCapacity"(arg0: integer): void
public "removeFirst"(): V
public "removeLast"(): V
public "comparator"(): $LongComparator
public "subMap"(arg0: long, arg1: long): $Long2ObjectSortedMap<(V)>
public "headMap"(arg0: long): $Long2ObjectSortedMap<(V)>
public "tailMap"(arg0: long): $Long2ObjectSortedMap<(V)>
public "lastLongKey"(): long
public "firstLongKey"(): long
public "long2ObjectEntrySet"(): $ObjectSet
public "getAndMoveToFirst"(arg0: long): V
public "getAndMoveToLast"(arg0: long): V
public "putAndMoveToFirst"(arg0: long, arg1: V): V
public "putAndMoveToLast"(arg0: long, arg1: V): V
/**
 * 
 * @deprecated
 */
public "firstKey"(): any
/**
 * 
 * @deprecated
 */
public "lastKey"(): any
public "defaultReturnValue"(): V
public "defaultReturnValue"(arg0: V): void
public static "copyOf"<K, V>(arg0: $Map$$Type<(K), (V)>): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
public static "of"<K, V>(): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(K), (V)>)[]): $Map<(K), (V)>
public static "identity"<T>(): $Function<(T), (T)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Long2ObjectLinkedOpenHashMap$$Type<V> = ($Long2ObjectLinkedOpenHashMap<(V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Long2ObjectLinkedOpenHashMap$$Original<V> = $Long2ObjectLinkedOpenHashMap<(V)>;}
declare module "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction" {
import {$Object2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import {$Object2ObjectFunction, $Object2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import {$Short2IntFunction} from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import {$IntFunction$$Interface} from "java.util.function.IntFunction"
import {$Reference2ShortFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import {$Long2ShortFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import {$Short2CharFunction} from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import {$Int2ObjectFunction} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$Char2ObjectFunction} from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import {$Object2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import {$Char2ShortFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Object2FloatFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import {$Short2ShortFunction, $Short2ShortFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ShortFunction"
import {$Byte2ObjectFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import {$Byte2ShortFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import {$Short2DoubleFunction} from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import {$Reference2ObjectFunction} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Object2CharFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Int2ShortFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import {$Object2ByteFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import {$Short2ReferenceFunction} from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import {$Float2ShortFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import {$Float2ObjectFunction} from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import {$Short2LongFunction} from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import {$Object2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import {$Object2ShortFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import {$Short2FloatFunction} from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import {$Object2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import {$Double2ObjectFunction} from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import {$Short2ByteFunction} from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import {$Long2ObjectFunction} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import {$Double2ShortFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"

export interface $Short2ObjectFunction$$Interface<V> extends $Function$0$$Interface<(short), (V)>, $IntFunction$$Interface<(V)> {

(arg0: short): V
}

export class $Short2ObjectFunction<V> implements $Short2ObjectFunction$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): V
 "remove"(arg0: short): V
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): V
 "get"(arg0: short): V
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "put"(arg0: short, arg1: V): V
 "put"(arg0: short, arg1: V): V
/**
 * 
 * @deprecated
 */
 "apply"(arg0: integer): V
 "containsKey"(arg0: short): boolean
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "getOrDefault"(arg0: short, arg1: V): V
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: V): V
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (short)>): $Function<(T), (V)>
 "andThenFloat"(arg0: $Object2FloatFunction$$Type<(V)>): $Short2FloatFunction
 "andThenObject"<T>(arg0: $Object2ObjectFunction$$Type<(V), (T)>): $Short2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2ShortFunction$$Type): $Byte2ObjectFunction<(V)>
 "andThenLong"(arg0: $Object2LongFunction$$Type<(V)>): $Short2LongFunction
 "defaultReturnValue"(): V
 "defaultReturnValue"(arg0: V): void
 "composeLong"(arg0: $Long2ShortFunction$$Type): $Long2ObjectFunction<(V)>
 "andThenChar"(arg0: $Object2CharFunction$$Type<(V)>): $Short2CharFunction
 "andThenDouble"(arg0: $Object2DoubleFunction$$Type<(V)>): $Short2DoubleFunction
 "composeObject"<T>(arg0: $Object2ShortFunction$$Type<(T)>): $Object2ObjectFunction<(T), (V)>
 "composeChar"(arg0: $Char2ShortFunction$$Type): $Char2ObjectFunction<(V)>
 "composeReference"<T>(arg0: $Reference2ShortFunction$$Type<(T)>): $Reference2ObjectFunction<(T), (V)>
 "andThenShort"(arg0: $Object2ShortFunction$$Type<(V)>): $Short2ShortFunction
 "composeShort"(arg0: $Short2ShortFunction$$Type): $Short2ObjectFunction<(V)>
 "composeFloat"(arg0: $Float2ShortFunction$$Type): $Float2ObjectFunction<(V)>
 "andThenReference"<T>(arg0: $Object2ReferenceFunction$$Type<(V), (T)>): $Short2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2ShortFunction$$Type): $Double2ObjectFunction<(V)>
 "andThenByte"(arg0: $Object2ByteFunction$$Type<(V)>): $Short2ByteFunction
 "composeInt"(arg0: $Int2ShortFunction$$Type): $Int2ObjectFunction<(V)>
 "andThenInt"(arg0: $Object2IntFunction$$Type<(V)>): $Short2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: short): V
static "identity"<T>(): $Function<(short), (short)>
 "andThen"<V>(arg0: $Function$$Type<(V), (V)>): $Function<(short), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Short2ObjectFunction$$Type<V> = ((arg0: short) => V);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Short2ObjectFunction$$Original<V> = $Short2ObjectFunction<(V)>;}
declare module "it.unimi.dsi.fastutil.doubles.DoublePredicate" {
import {$Predicate, $Predicate$$Type, $Predicate$$Interface} from "java.util.function.Predicate"
import {$DoublePredicate as $DoublePredicate$0, $DoublePredicate$$Type as $DoublePredicate$0$$Type, $DoublePredicate$$Interface as $DoublePredicate$0$$Interface} from "java.util.function.DoublePredicate"

export interface $DoublePredicate$$Interface extends $Predicate$$Interface<(double)>, $DoublePredicate$0$$Interface {

(arg0: double): boolean
}

export class $DoublePredicate implements $DoublePredicate$$Interface {
/**
 * 
 * @deprecated
 */
 "test"(arg0: double): boolean
/**
 * 
 * @deprecated
 */
 "test"(arg0: any): boolean
/**
 * 
 * @deprecated
 */
 "or"(arg0: $Predicate$$Type<(double)>): $Predicate<(double)>
 "or"(arg0: $DoublePredicate$0$$Type): $DoublePredicate
 "or"(arg0: $DoublePredicate$$Type): $DoublePredicate
 "negate"(): $DoublePredicate$0
 "and"(arg0: $DoublePredicate$0$$Type): $DoublePredicate$0
 "and"(arg0: $DoublePredicate$$Type): $DoublePredicate
/**
 * 
 * @deprecated
 */
 "and"(arg0: $Predicate$$Type<(double)>): $Predicate<(double)>
static "not"<T>(arg0: $Predicate$$Type<(double)>): $Predicate<(double)>
static "isEqual"<T>(arg0: any): $Predicate<(double)>
 "test"(arg0: double): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoublePredicate$$Type = ((arg0: double) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoublePredicate$$Original = $DoublePredicate;}
declare module "it.unimi.dsi.fastutil.longs.Long2ReferenceMap" {
import {$Float2ReferenceFunction} from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import {$Long2CharFunction} from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import {$Reference2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import {$Long2ByteFunction} from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import {$Long2IntFunction} from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import {$LongFunction$$Type} from "java.util.function.LongFunction"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$Reference2ShortFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import {$Reference2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import {$Long2ShortFunction} from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import {$Double2ReferenceFunction} from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import {$Reference2ByteFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import {$Int2ReferenceFunction} from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import {$Byte2ReferenceFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Set} from "java.util.Set"
import {$Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ReferenceFunction"
import {$Reference2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Map, $Map$$Type, $Map$$Interface} from "java.util.Map"
import {$Long2DoubleFunction} from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import {$Long2LongFunction, $Long2LongFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import {$Float2LongFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import {$Short2ReferenceFunction} from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import {$Long2ReferenceFunction, $Long2ReferenceFunction$$Type, $Long2ReferenceFunction$$Interface} from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import {$Byte2LongFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import {$Reference2FloatFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$Long2ReferenceMap$Entry} from "it.unimi.dsi.fastutil.longs.Long2ReferenceMap$Entry"
import {$Char2LongFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import {$Double2LongFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import {$Short2LongFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import {$ObjectSet} from "it.unimi.dsi.fastutil.objects.ObjectSet"
import {$Reference2CharFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import {$Int2LongFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import {$Object2ReferenceFunction} from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import {$Char2ReferenceFunction} from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import {$ReferenceCollection} from "it.unimi.dsi.fastutil.objects.ReferenceCollection"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Long2FloatFunction} from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import {$Object2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import {$Reference2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import {$Long2ObjectFunction} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"

export interface $Long2ReferenceMap$$Interface<V> extends $Long2ReferenceFunction$$Interface<(V)>, $Map$$Interface<(long), (V)> {
[index: string | number]: V
get "empty"(): boolean
}

export class $Long2ReferenceMap<V> implements $Long2ReferenceMap$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): V
 "remove"(arg0: long, arg1: any): boolean
 "size"(): integer
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): V
/**
 * 
 * @deprecated
 */
 "put"(arg0: long, arg1: V): V
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "values"(): $ReferenceCollection<(V)>
 "clear"(): void
 "replace"(arg0: long, arg1: V, arg2: V): boolean
 "replace"(arg0: long, arg1: V): V
 "merge"(arg0: long, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
/**
 * 
 * @deprecated
 */
 "entrySet"(): $Set
 "putIfAbsent"(arg0: long, arg1: V): V
 "compute"(arg0: long, arg1: $BiFunction$$Type<(long), (V), (V)>): V
 "forEach"(arg0: $BiConsumer$$Type<(long), (V)>): void
 "containsKey"(arg0: long): boolean
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "computeIfAbsent"(arg0: long, arg1: $Long2ReferenceFunction$$Type<(V)>): V
 "computeIfAbsent"(arg0: long, arg1: $LongFunction$$Type<(V)>): V
 "keySet"(): $Set
 "getOrDefault"(arg0: long, arg1: V): V
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: V): V
 "computeIfPresent"(arg0: long, arg1: $BiFunction$$Type<(long), (V), (V)>): V
/**
 * 
 * @deprecated
 */
 "computeIfAbsentPartial"(arg0: long, arg1: $Long2ReferenceFunction$$Type<(V)>): V
 "defaultReturnValue"(arg0: V): void
 "defaultReturnValue"(): V
 "long2ReferenceEntrySet"(): $ObjectSet<($Long2ReferenceMap$Entry<(V)>)>
 "remove"(arg0: long): V
 "get"(arg0: long): V
 "put"(arg0: long, arg1: V): V
 "apply"(arg0: long): V
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (long)>): $Function<(T), (V)>
 "andThenFloat"(arg0: $Reference2FloatFunction$$Type<(V)>): $Long2FloatFunction
 "andThenObject"<T>(arg0: $Reference2ObjectFunction$$Type<(V), (T)>): $Long2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2LongFunction$$Type): $Byte2ReferenceFunction<(V)>
 "andThenLong"(arg0: $Reference2LongFunction$$Type<(V)>): $Long2LongFunction
 "composeLong"(arg0: $Long2LongFunction$$Type): $Long2ReferenceFunction<(V)>
 "andThenChar"(arg0: $Reference2CharFunction$$Type<(V)>): $Long2CharFunction
 "andThenDouble"(arg0: $Reference2DoubleFunction$$Type<(V)>): $Long2DoubleFunction
 "composeObject"<T>(arg0: $Object2LongFunction$$Type<(T)>): $Object2ReferenceFunction<(T), (V)>
 "composeChar"(arg0: $Char2LongFunction$$Type): $Char2ReferenceFunction<(V)>
 "composeReference"<T>(arg0: $Reference2LongFunction$$Type<(T)>): $Reference2ReferenceFunction<(T), (V)>
 "andThenShort"(arg0: $Reference2ShortFunction$$Type<(V)>): $Long2ShortFunction
 "composeShort"(arg0: $Short2LongFunction$$Type): $Short2ReferenceFunction<(V)>
 "composeFloat"(arg0: $Float2LongFunction$$Type): $Float2ReferenceFunction<(V)>
 "andThenReference"<T>(arg0: $Reference2ReferenceFunction$$Type<(V), (T)>): $Long2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2LongFunction$$Type): $Double2ReferenceFunction<(V)>
 "andThenByte"(arg0: $Reference2ByteFunction$$Type<(V)>): $Long2ByteFunction
 "composeInt"(arg0: $Int2LongFunction$$Type): $Int2ReferenceFunction<(V)>
 "andThenInt"(arg0: $Reference2IntFunction$$Type<(V)>): $Long2IntFunction
 "remove"(arg0: any, arg1: any): boolean
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<K, V>(arg0: $Map$$Type<(long), (V)>): $Map<(long), (V)>
 "isEmpty"(): boolean
 "replace"(arg0: long, arg1: V, arg2: V): boolean
 "replace"(arg0: long, arg1: V): V
 "replaceAll"(arg0: $BiFunction$$Type<(long), (V), (V)>): void
static "of"<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V, arg6: long, arg7: V): $Map<(long), (V)>
static "of"<K, V>(): $Map<(long), (V)>
static "of"<K, V>(arg0: long, arg1: V): $Map<(long), (V)>
static "of"<K, V>(arg0: long, arg1: V, arg2: long, arg3: V): $Map<(long), (V)>
static "of"<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V): $Map<(long), (V)>
static "of"<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V, arg6: long, arg7: V, arg8: long, arg9: V, arg10: long, arg11: V, arg12: long, arg13: V, arg14: long, arg15: V, arg16: long, arg17: V, arg18: long, arg19: V): $Map<(long), (V)>
static "of"<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V, arg6: long, arg7: V, arg8: long, arg9: V, arg10: long, arg11: V, arg12: long, arg13: V, arg14: long, arg15: V, arg16: long, arg17: V): $Map<(long), (V)>
static "of"<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V, arg6: long, arg7: V, arg8: long, arg9: V, arg10: long, arg11: V, arg12: long, arg13: V, arg14: long, arg15: V): $Map<(long), (V)>
static "of"<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V, arg6: long, arg7: V, arg8: long, arg9: V, arg10: long, arg11: V, arg12: long, arg13: V): $Map<(long), (V)>
static "of"<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V, arg6: long, arg7: V, arg8: long, arg9: V, arg10: long, arg11: V): $Map<(long), (V)>
static "of"<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V, arg6: long, arg7: V, arg8: long, arg9: V): $Map<(long), (V)>
 "merge"(arg0: long, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
 "putAll"(arg0: $Map$$Type<(long), (V)>): void
 "putIfAbsent"(arg0: long, arg1: V): V
 "compute"(arg0: long, arg1: $BiFunction$$Type<(long), (V), (V)>): V
static "entry"<K, V>(arg0: long, arg1: V): $Map$Entry<(long), (V)>
 "computeIfAbsent"(arg0: long, arg1: $Function$$Type<(long), (V)>): V
 "containsValue"(arg0: any): boolean
 "computeIfPresent"(arg0: long, arg1: $BiFunction$$Type<(long), (V), (V)>): V
static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(long), (V)>)[]): $Map<(long), (V)>
 "apply"(arg0: long): V
static "identity"<T>(): $Function<(long), (long)>
 "andThen"<V>(arg0: $Function$$Type<(V), (V)>): $Function<(long), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Long2ReferenceMap$$Type<V> = ($Long2ReferenceMap<(V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Long2ReferenceMap$$Original<V> = $Long2ReferenceMap<(V)>;}
declare module "it.unimi.dsi.fastutil.doubles.DoubleIterable" {
import {$Iterable$$Interface} from "java.lang.Iterable"
import {$Iterator} from "java.util.Iterator"
import {$DoubleConsumer$$Type} from "java.util.function.DoubleConsumer"
import {$Spliterator} from "java.util.Spliterator"
import {$DoubleSpliterator} from "it.unimi.dsi.fastutil.doubles.DoubleSpliterator"
import {$DoubleIterator} from "it.unimi.dsi.fastutil.doubles.DoubleIterator"
import {$DoubleConsumer$$Type as $DoubleConsumer$0$$Type} from "it.unimi.dsi.fastutil.doubles.DoubleConsumer"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $DoubleIterable$$Interface extends $Iterable$$Interface<(double)> {
}

export class $DoubleIterable implements $DoubleIterable$$Interface {
 "iterator"(): $Iterator
 "spliterator"(): $Spliterator
 "forEach"(arg0: $DoubleConsumer$$Type): void
/**
 * 
 * @deprecated
 */
 "forEach"(arg0: $Consumer$$Type<(double)>): void
 "forEach"(arg0: $DoubleConsumer$0$$Type): void
 "doubleSpliterator"(): $DoubleSpliterator
 "doubleIterator"(): $DoubleIterator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleIterable$$Type = ($DoubleIterable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoubleIterable$$Original = $DoubleIterable;}
declare module "it.unimi.dsi.fastutil.doubles.DoubleDoublePair" {
import {$Pair, $Pair$$Interface} from "it.unimi.dsi.fastutil.Pair"
import {$Comparator} from "java.util.Comparator"

export interface $DoubleDoublePair$$Interface extends $Pair$$Interface<(double), (double)> {
}

export class $DoubleDoublePair implements $DoubleDoublePair$$Interface {
 "leftDouble"(): double
/**
 * 
 * @deprecated
 */
 "value"(arg0: double): $DoubleDoublePair
/**
 * 
 * @deprecated
 */
 "value"(): any
/**
 * 
 * @deprecated
 */
 "value"(arg0: any): $Pair
 "value"(arg0: double): $DoubleDoublePair
static "of"(arg0: double, arg1: double): $DoubleDoublePair
/**
 * 
 * @deprecated
 */
 "first"(arg0: any): $Pair
/**
 * 
 * @deprecated
 */
 "first"(): any
/**
 * 
 * @deprecated
 */
 "first"(arg0: double): $DoubleDoublePair
 "first"(arg0: double): $DoubleDoublePair
/**
 * 
 * @deprecated
 */
 "second"(arg0: double): $DoubleDoublePair
 "second"(arg0: double): $DoubleDoublePair
/**
 * 
 * @deprecated
 */
 "second"(): double
/**
 * 
 * @deprecated
 */
 "second"(arg0: any): $Pair
/**
 * 
 * @deprecated
 */
 "key"(): any
/**
 * 
 * @deprecated
 */
 "key"(arg0: double): $DoubleDoublePair
 "key"(arg0: double): $DoubleDoublePair
/**
 * 
 * @deprecated
 */
 "key"(arg0: any): $Pair
/**
 * 
 * @deprecated
 */
 "left"(): any
/**
 * 
 * @deprecated
 */
 "left"(arg0: any): $Pair
/**
 * 
 * @deprecated
 */
 "left"(arg0: double): $DoubleDoublePair
 "left"(arg0: double): $DoubleDoublePair
/**
 * 
 * @deprecated
 */
 "right"(): any
 "right"(arg0: double): $DoubleDoublePair
/**
 * 
 * @deprecated
 */
 "right"(arg0: double): $DoubleDoublePair
/**
 * 
 * @deprecated
 */
 "right"(arg0: any): $Pair
 "valueDouble"(): double
 "secondDouble"(): double
static "lexComparator"(): $Comparator<($DoubleDoublePair)>
 "firstDouble"(): double
 "rightDouble"(): double
 "keyDouble"(): double
static "of"<L, R>(arg0: double, arg1: double): $Pair<(double), (double)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleDoublePair$$Type = ($DoubleDoublePair);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoubleDoublePair$$Original = $DoubleDoublePair;}
declare module "it.unimi.dsi.fastutil.ints.IntUnaryOperator" {
import {$UnaryOperator$$Interface} from "java.util.function.UnaryOperator"
import {$IntUnaryOperator as $IntUnaryOperator$0, $IntUnaryOperator$$Type as $IntUnaryOperator$0$$Type, $IntUnaryOperator$$Interface as $IntUnaryOperator$0$$Interface} from "java.util.function.IntUnaryOperator"
import {$Function, $Function$$Type} from "java.util.function.Function"

export interface $IntUnaryOperator$$Interface extends $UnaryOperator$$Interface<(integer)>, $IntUnaryOperator$0$$Interface {

(arg0: integer): integer
}

export class $IntUnaryOperator implements $IntUnaryOperator$$Interface {
static "negation"(): $IntUnaryOperator
/**
 * 
 * @deprecated
 */
 "apply"(arg0: integer): integer
/**
 * 
 * @deprecated
 */
 "apply"(arg0: any): any
 "apply"(arg0: integer): integer
static "identity"(): $IntUnaryOperator
/**
 * 
 * @deprecated
 */
 "applyAsInt"(arg0: integer): integer
 "compose"(arg0: $IntUnaryOperator$0$$Type): $IntUnaryOperator$0
 "andThen"(arg0: $IntUnaryOperator$0$$Type): $IntUnaryOperator$0
 "compose"<V>(arg0: $Function$$Type<(V), (integer)>): $Function<(V), (integer)>
 "andThen"<V>(arg0: $Function$$Type<(integer), (V)>): $Function<(integer), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntUnaryOperator$$Type = ((arg0: integer) => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntUnaryOperator$$Original = $IntUnaryOperator;}
declare module "it.unimi.dsi.fastutil.floats.Float2DoubleFunction" {
import {$Char2DoubleFunction} from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import {$DoubleUnaryOperator, $DoubleUnaryOperator$$Type, $DoubleUnaryOperator$$Interface} from "java.util.function.DoubleUnaryOperator"
import {$Float2ReferenceFunction} from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import {$Byte2DoubleFunction} from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import {$Float2ByteFunction} from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import {$Int2FloatFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import {$Float2IntFunction} from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import {$Double2FloatFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import {$Double2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import {$Object2DoubleFunction} from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Object2FloatFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import {$Float2CharFunction} from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import {$Int2DoubleFunction} from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import {$Short2DoubleFunction} from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import {$Double2DoubleFunction, $Double2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2DoubleFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Long2DoubleFunction} from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import {$Float2LongFunction} from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import {$Float2ShortFunction} from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import {$Double2CharFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import {$Reference2FloatFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import {$Double2LongFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import {$Float2ObjectFunction} from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import {$Float2FloatFunction, $Float2FloatFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2FloatFunction"
import {$Double2ByteFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import {$Long2FloatFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import {$Char2FloatFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import {$Double2IntFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import {$Short2FloatFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import {$Double2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import {$Reference2DoubleFunction} from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import {$Byte2FloatFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import {$Double2ShortFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"

export interface $Float2DoubleFunction$$Interface extends $Function$0$$Interface<(float), (double)>, $DoubleUnaryOperator$$Interface {

(arg0: float): double
}

export class $Float2DoubleFunction implements $Float2DoubleFunction$$Interface {
 "remove"(arg0: float): double
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): double
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): double
 "get"(arg0: float): double
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: float, arg1: double): double
/**
 * 
 * @deprecated
 */
 "put"(arg0: float, arg1: double): double
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "containsKey"(arg0: float): boolean
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: double): double
 "getOrDefault"(arg0: float, arg1: double): double
/**
 * 
 * @deprecated
 */
 "applyAsDouble"(arg0: double): double
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (float)>): $Function<(T), (double)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(double), (T)>): $Function<(float), (T)>
 "andThenFloat"(arg0: $Double2FloatFunction$$Type): $Float2FloatFunction
 "andThenObject"<T>(arg0: $Double2ObjectFunction$$Type<(T)>): $Float2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2FloatFunction$$Type): $Byte2DoubleFunction
 "andThenLong"(arg0: $Double2LongFunction$$Type): $Float2LongFunction
 "defaultReturnValue"(): double
 "defaultReturnValue"(arg0: double): void
 "composeLong"(arg0: $Long2FloatFunction$$Type): $Long2DoubleFunction
 "andThenChar"(arg0: $Double2CharFunction$$Type): $Float2CharFunction
 "andThenDouble"(arg0: $Double2DoubleFunction$$Type): $Float2DoubleFunction
 "composeObject"<T>(arg0: $Object2FloatFunction$$Type<(T)>): $Object2DoubleFunction<(T)>
 "composeChar"(arg0: $Char2FloatFunction$$Type): $Char2DoubleFunction
 "composeReference"<T>(arg0: $Reference2FloatFunction$$Type<(T)>): $Reference2DoubleFunction<(T)>
 "andThenShort"(arg0: $Double2ShortFunction$$Type): $Float2ShortFunction
 "composeShort"(arg0: $Short2FloatFunction$$Type): $Short2DoubleFunction
 "composeFloat"(arg0: $Float2FloatFunction$$Type): $Float2DoubleFunction
 "andThenReference"<T>(arg0: $Double2ReferenceFunction$$Type<(T)>): $Float2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2FloatFunction$$Type): $Double2DoubleFunction
 "andThenByte"(arg0: $Double2ByteFunction$$Type): $Float2ByteFunction
 "composeInt"(arg0: $Int2FloatFunction$$Type): $Int2DoubleFunction
 "andThenInt"(arg0: $Double2IntFunction$$Type): $Float2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: float): double
static "identity"(): $DoubleUnaryOperator
 "compose"(arg0: $DoubleUnaryOperator$$Type): $DoubleUnaryOperator
 "andThen"(arg0: $DoubleUnaryOperator$$Type): $DoubleUnaryOperator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Float2DoubleFunction$$Type = ((arg0: float) => double);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Float2DoubleFunction$$Original = $Float2DoubleFunction;}
declare module "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction" {
import {$Byte2ByteFunction, $Byte2ByteFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction"
import {$Float2ByteFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import {$Byte2DoubleFunction} from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import {$Object2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import {$Long2ByteFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import {$Object2ObjectFunction, $Object2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import {$Byte2IntFunction} from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"
import {$IntFunction$$Interface} from "java.util.function.IntFunction"
import {$Reference2ByteFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import {$Byte2ReferenceFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import {$Int2ObjectFunction} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$Char2ObjectFunction} from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import {$Object2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Object2FloatFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import {$Byte2ShortFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import {$Byte2CharFunction} from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import {$Reference2ObjectFunction} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Object2CharFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Object2ByteFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import {$Byte2LongFunction} from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import {$Float2ObjectFunction} from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import {$Char2ByteFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import {$Double2ByteFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import {$Short2ObjectFunction} from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import {$Object2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import {$Object2ShortFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import {$Object2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import {$Double2ObjectFunction} from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import {$Byte2FloatFunction} from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import {$Short2ByteFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import {$Int2ByteFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import {$Long2ObjectFunction} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"

export interface $Byte2ObjectFunction$$Interface<V> extends $Function$0$$Interface<(byte), (V)>, $IntFunction$$Interface<(V)> {

(arg0: byte): V
}

export class $Byte2ObjectFunction<V> implements $Byte2ObjectFunction$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): V
 "remove"(arg0: byte): V
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): V
 "get"(arg0: byte): V
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "put"(arg0: byte, arg1: V): V
 "put"(arg0: byte, arg1: V): V
/**
 * 
 * @deprecated
 */
 "apply"(arg0: integer): V
 "containsKey"(arg0: byte): boolean
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "getOrDefault"(arg0: byte, arg1: V): V
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: V): V
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (byte)>): $Function<(T), (V)>
 "andThenFloat"(arg0: $Object2FloatFunction$$Type<(V)>): $Byte2FloatFunction
 "andThenObject"<T>(arg0: $Object2ObjectFunction$$Type<(V), (T)>): $Byte2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2ByteFunction$$Type): $Byte2ObjectFunction<(V)>
 "andThenLong"(arg0: $Object2LongFunction$$Type<(V)>): $Byte2LongFunction
 "defaultReturnValue"(): V
 "defaultReturnValue"(arg0: V): void
 "composeLong"(arg0: $Long2ByteFunction$$Type): $Long2ObjectFunction<(V)>
 "andThenChar"(arg0: $Object2CharFunction$$Type<(V)>): $Byte2CharFunction
 "andThenDouble"(arg0: $Object2DoubleFunction$$Type<(V)>): $Byte2DoubleFunction
 "composeObject"<T>(arg0: $Object2ByteFunction$$Type<(T)>): $Object2ObjectFunction<(T), (V)>
 "composeChar"(arg0: $Char2ByteFunction$$Type): $Char2ObjectFunction<(V)>
 "composeReference"<T>(arg0: $Reference2ByteFunction$$Type<(T)>): $Reference2ObjectFunction<(T), (V)>
 "andThenShort"(arg0: $Object2ShortFunction$$Type<(V)>): $Byte2ShortFunction
 "composeShort"(arg0: $Short2ByteFunction$$Type): $Short2ObjectFunction<(V)>
 "composeFloat"(arg0: $Float2ByteFunction$$Type): $Float2ObjectFunction<(V)>
 "andThenReference"<T>(arg0: $Object2ReferenceFunction$$Type<(V), (T)>): $Byte2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2ByteFunction$$Type): $Double2ObjectFunction<(V)>
 "andThenByte"(arg0: $Object2ByteFunction$$Type<(V)>): $Byte2ByteFunction
 "composeInt"(arg0: $Int2ByteFunction$$Type): $Int2ObjectFunction<(V)>
 "andThenInt"(arg0: $Object2IntFunction$$Type<(V)>): $Byte2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: byte): V
static "identity"<T>(): $Function<(byte), (byte)>
 "andThen"<V>(arg0: $Function$$Type<(V), (V)>): $Function<(byte), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Byte2ObjectFunction$$Type<V> = ((arg0: byte) => V);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Byte2ObjectFunction$$Original<V> = $Byte2ObjectFunction<(V)>;}
declare module "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction" {
import {$Char2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import {$Byte2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import {$Object2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import {$Object2ObjectFunction, $Object2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import {$Double2FloatFunction} from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import {$Double2ReferenceFunction} from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import {$Int2ObjectFunction} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$Char2ObjectFunction} from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import {$Object2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Object2FloatFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import {$Byte2ObjectFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import {$Int2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import {$Short2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import {$Double2DoubleFunction, $Double2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2DoubleFunction"
import {$Reference2ObjectFunction} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Object2CharFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Long2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import {$Object2ByteFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import {$Double2CharFunction} from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import {$Float2ObjectFunction} from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import {$Double2LongFunction} from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import {$Double2ByteFunction} from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import {$Short2ObjectFunction} from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import {$Object2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import {$Object2ShortFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import {$Double2IntFunction} from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import {$Object2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import {$Reference2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import {$DoubleFunction$$Interface} from "java.util.function.DoubleFunction"
import {$Float2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import {$Long2ObjectFunction} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import {$Double2ShortFunction} from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"

export interface $Double2ObjectFunction$$Interface<V> extends $Function$0$$Interface<(double), (V)>, $DoubleFunction$$Interface<(V)> {

(arg0: double): V
}

export class $Double2ObjectFunction<V> implements $Double2ObjectFunction$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): V
 "remove"(arg0: double): V
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): V
 "get"(arg0: double): V
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "put"(arg0: double, arg1: V): V
 "put"(arg0: double, arg1: V): V
 "apply"(arg0: double): V
 "containsKey"(arg0: double): boolean
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "getOrDefault"(arg0: double, arg1: V): V
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: V): V
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (double)>): $Function<(T), (V)>
 "andThenFloat"(arg0: $Object2FloatFunction$$Type<(V)>): $Double2FloatFunction
 "andThenObject"<T>(arg0: $Object2ObjectFunction$$Type<(V), (T)>): $Double2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2DoubleFunction$$Type): $Byte2ObjectFunction<(V)>
 "andThenLong"(arg0: $Object2LongFunction$$Type<(V)>): $Double2LongFunction
 "defaultReturnValue"(): V
 "defaultReturnValue"(arg0: V): void
 "composeLong"(arg0: $Long2DoubleFunction$$Type): $Long2ObjectFunction<(V)>
 "andThenChar"(arg0: $Object2CharFunction$$Type<(V)>): $Double2CharFunction
 "andThenDouble"(arg0: $Object2DoubleFunction$$Type<(V)>): $Double2DoubleFunction
 "composeObject"<T>(arg0: $Object2DoubleFunction$$Type<(T)>): $Object2ObjectFunction<(T), (V)>
 "composeChar"(arg0: $Char2DoubleFunction$$Type): $Char2ObjectFunction<(V)>
 "composeReference"<T>(arg0: $Reference2DoubleFunction$$Type<(T)>): $Reference2ObjectFunction<(T), (V)>
 "andThenShort"(arg0: $Object2ShortFunction$$Type<(V)>): $Double2ShortFunction
 "composeShort"(arg0: $Short2DoubleFunction$$Type): $Short2ObjectFunction<(V)>
 "composeFloat"(arg0: $Float2DoubleFunction$$Type): $Float2ObjectFunction<(V)>
 "andThenReference"<T>(arg0: $Object2ReferenceFunction$$Type<(V), (T)>): $Double2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2DoubleFunction$$Type): $Double2ObjectFunction<(V)>
 "andThenByte"(arg0: $Object2ByteFunction$$Type<(V)>): $Double2ByteFunction
 "composeInt"(arg0: $Int2DoubleFunction$$Type): $Int2ObjectFunction<(V)>
 "andThenInt"(arg0: $Object2IntFunction$$Type<(V)>): $Double2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: double): V
static "identity"<T>(): $Function<(double), (double)>
 "andThen"<V>(arg0: $Function$$Type<(V), (V)>): $Function<(double), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Double2ObjectFunction$$Type<V> = ((arg0: double) => V);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Double2ObjectFunction$$Original<V> = $Double2ObjectFunction<(V)>;}
declare module "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction" {
import {$Byte2ByteFunction, $Byte2ByteFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction"
import {$Float2ReferenceFunction} from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import {$Float2ByteFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import {$Byte2DoubleFunction} from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import {$Reference2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import {$Long2ByteFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import {$Byte2IntFunction} from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"
import {$IntFunction$$Interface} from "java.util.function.IntFunction"
import {$Reference2ShortFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import {$Reference2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import {$Double2ReferenceFunction} from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import {$Int2ReferenceFunction} from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import {$Reference2ByteFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Byte2ObjectFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import {$Byte2ShortFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import {$Byte2CharFunction} from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import {$Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ReferenceFunction"
import {$Reference2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Object2ByteFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import {$Short2ReferenceFunction} from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import {$Long2ReferenceFunction} from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import {$Byte2LongFunction} from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import {$Reference2FloatFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import {$Char2ByteFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import {$Double2ByteFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import {$Reference2CharFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import {$Object2ReferenceFunction} from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import {$Char2ReferenceFunction} from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import {$Reference2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import {$Byte2FloatFunction} from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import {$Short2ByteFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import {$Int2ByteFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"

export interface $Byte2ReferenceFunction$$Interface<V> extends $Function$0$$Interface<(byte), (V)>, $IntFunction$$Interface<(V)> {

(arg0: byte): V
}

export class $Byte2ReferenceFunction<V> implements $Byte2ReferenceFunction$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): V
 "remove"(arg0: byte): V
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): V
 "get"(arg0: byte): V
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "put"(arg0: byte, arg1: V): V
 "put"(arg0: byte, arg1: V): V
/**
 * 
 * @deprecated
 */
 "apply"(arg0: integer): V
 "containsKey"(arg0: byte): boolean
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "getOrDefault"(arg0: byte, arg1: V): V
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: V): V
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (byte)>): $Function<(T), (V)>
 "andThenFloat"(arg0: $Reference2FloatFunction$$Type<(V)>): $Byte2FloatFunction
 "andThenObject"<T>(arg0: $Reference2ObjectFunction$$Type<(V), (T)>): $Byte2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2ByteFunction$$Type): $Byte2ReferenceFunction<(V)>
 "andThenLong"(arg0: $Reference2LongFunction$$Type<(V)>): $Byte2LongFunction
 "defaultReturnValue"(): V
 "defaultReturnValue"(arg0: V): void
 "composeLong"(arg0: $Long2ByteFunction$$Type): $Long2ReferenceFunction<(V)>
 "andThenChar"(arg0: $Reference2CharFunction$$Type<(V)>): $Byte2CharFunction
 "andThenDouble"(arg0: $Reference2DoubleFunction$$Type<(V)>): $Byte2DoubleFunction
 "composeObject"<T>(arg0: $Object2ByteFunction$$Type<(T)>): $Object2ReferenceFunction<(T), (V)>
 "composeChar"(arg0: $Char2ByteFunction$$Type): $Char2ReferenceFunction<(V)>
 "composeReference"<T>(arg0: $Reference2ByteFunction$$Type<(T)>): $Reference2ReferenceFunction<(T), (V)>
 "andThenShort"(arg0: $Reference2ShortFunction$$Type<(V)>): $Byte2ShortFunction
 "composeShort"(arg0: $Short2ByteFunction$$Type): $Short2ReferenceFunction<(V)>
 "composeFloat"(arg0: $Float2ByteFunction$$Type): $Float2ReferenceFunction<(V)>
 "andThenReference"<T>(arg0: $Reference2ReferenceFunction$$Type<(V), (T)>): $Byte2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2ByteFunction$$Type): $Double2ReferenceFunction<(V)>
 "andThenByte"(arg0: $Reference2ByteFunction$$Type<(V)>): $Byte2ByteFunction
 "composeInt"(arg0: $Int2ByteFunction$$Type): $Int2ReferenceFunction<(V)>
 "andThenInt"(arg0: $Reference2IntFunction$$Type<(V)>): $Byte2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: byte): V
static "identity"<T>(): $Function<(byte), (byte)>
 "andThen"<V>(arg0: $Function$$Type<(V), (V)>): $Function<(byte), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Byte2ReferenceFunction$$Type<V> = ((arg0: byte) => V);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Byte2ReferenceFunction$$Original<V> = $Byte2ReferenceFunction<(V)>;}
declare module "it.unimi.dsi.fastutil.floats.Float2IntFunction" {
import {$Float2ReferenceFunction} from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import {$Float2ByteFunction} from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import {$Object2IntFunction} from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import {$Reference2IntFunction} from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import {$Long2IntFunction} from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import {$Short2IntFunction} from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import {$Int2FloatFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import {$Byte2IntFunction} from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"
import {$Double2FloatFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import {$Int2CharFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import {$Int2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import {$Int2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$Int2IntFunction, $Int2IntFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Object2FloatFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import {$Float2CharFunction} from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import {$Int2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Int2ShortFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import {$Float2LongFunction} from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import {$Float2ShortFunction} from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import {$Reference2FloatFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import {$Float2ObjectFunction} from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import {$Float2FloatFunction, $Float2FloatFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2FloatFunction"
import {$Int2LongFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import {$DoubleToIntFunction$$Interface} from "java.util.function.DoubleToIntFunction"
import {$Char2IntFunction} from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import {$Long2FloatFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import {$Char2FloatFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import {$Double2IntFunction} from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import {$Short2FloatFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import {$Byte2FloatFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import {$Float2DoubleFunction} from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import {$Int2ByteFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"

export interface $Float2IntFunction$$Interface extends $Function$0$$Interface<(float), (integer)>, $DoubleToIntFunction$$Interface {

(arg0: float): integer
}

export class $Float2IntFunction implements $Float2IntFunction$$Interface {
 "remove"(arg0: float): integer
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): integer
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): integer
 "get"(arg0: float): integer
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: float, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "put"(arg0: float, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "containsKey"(arg0: float): boolean
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: integer): integer
 "getOrDefault"(arg0: float, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "applyAsInt"(arg0: double): integer
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (float)>): $Function<(T), (integer)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(integer), (T)>): $Function<(float), (T)>
 "andThenFloat"(arg0: $Int2FloatFunction$$Type): $Float2FloatFunction
 "andThenObject"<T>(arg0: $Int2ObjectFunction$$Type<(T)>): $Float2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2FloatFunction$$Type): $Byte2IntFunction
 "andThenLong"(arg0: $Int2LongFunction$$Type): $Float2LongFunction
 "defaultReturnValue"(): integer
 "defaultReturnValue"(arg0: integer): void
 "composeLong"(arg0: $Long2FloatFunction$$Type): $Long2IntFunction
 "andThenChar"(arg0: $Int2CharFunction$$Type): $Float2CharFunction
 "andThenDouble"(arg0: $Int2DoubleFunction$$Type): $Float2DoubleFunction
 "composeObject"<T>(arg0: $Object2FloatFunction$$Type<(T)>): $Object2IntFunction<(T)>
 "composeChar"(arg0: $Char2FloatFunction$$Type): $Char2IntFunction
 "composeReference"<T>(arg0: $Reference2FloatFunction$$Type<(T)>): $Reference2IntFunction<(T)>
 "andThenShort"(arg0: $Int2ShortFunction$$Type): $Float2ShortFunction
 "composeShort"(arg0: $Short2FloatFunction$$Type): $Short2IntFunction
 "composeFloat"(arg0: $Float2FloatFunction$$Type): $Float2IntFunction
 "andThenReference"<T>(arg0: $Int2ReferenceFunction$$Type<(T)>): $Float2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2FloatFunction$$Type): $Double2IntFunction
 "andThenByte"(arg0: $Int2ByteFunction$$Type): $Float2ByteFunction
 "composeInt"(arg0: $Int2FloatFunction$$Type): $Int2IntFunction
 "andThenInt"(arg0: $Int2IntFunction$$Type): $Float2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: float): integer
static "identity"<T>(): $Function<(float), (float)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Float2IntFunction$$Type = ((arg0: float) => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Float2IntFunction$$Original = $Float2IntFunction;}
declare module "it.unimi.dsi.fastutil.ints.Int2FloatFunction" {
import {$Float2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import {$Float2ByteFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import {$Object2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import {$Reference2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import {$Long2IntFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import {$Short2IntFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import {$Byte2IntFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"
import {$Float2IntFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import {$Int2CharFunction} from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import {$Double2FloatFunction} from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import {$Int2ReferenceFunction} from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import {$Int2ObjectFunction} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$Int2IntFunction, $Int2IntFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Object2FloatFunction} from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import {$IntToDoubleFunction$$Interface} from "java.util.function.IntToDoubleFunction"
import {$Float2CharFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import {$Int2DoubleFunction} from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Int2ShortFunction} from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import {$Float2LongFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import {$Float2ShortFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import {$Reference2FloatFunction} from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import {$Float2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import {$Float2FloatFunction, $Float2FloatFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2FloatFunction"
import {$Int2LongFunction} from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import {$Char2IntFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import {$Char2FloatFunction} from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import {$Long2FloatFunction} from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import {$Double2IntFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import {$Short2FloatFunction} from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import {$Byte2FloatFunction} from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import {$Float2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import {$Int2ByteFunction} from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"

export interface $Int2FloatFunction$$Interface extends $Function$0$$Interface<(integer), (float)>, $IntToDoubleFunction$$Interface {

(arg0: integer): float
}

export class $Int2FloatFunction implements $Int2FloatFunction$$Interface {
 "remove"(arg0: integer): float
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): float
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): float
 "get"(arg0: integer): float
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: integer, arg1: float): float
/**
 * 
 * @deprecated
 */
 "put"(arg0: integer, arg1: float): float
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "containsKey"(arg0: integer): boolean
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: float): float
 "getOrDefault"(arg0: integer, arg1: float): float
 "applyAsDouble"(arg0: integer): double
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (integer)>): $Function<(T), (float)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(float), (T)>): $Function<(integer), (T)>
 "andThenFloat"(arg0: $Float2FloatFunction$$Type): $Int2FloatFunction
 "andThenObject"<T>(arg0: $Float2ObjectFunction$$Type<(T)>): $Int2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2IntFunction$$Type): $Byte2FloatFunction
 "andThenLong"(arg0: $Float2LongFunction$$Type): $Int2LongFunction
 "defaultReturnValue"(): float
 "defaultReturnValue"(arg0: float): void
 "composeLong"(arg0: $Long2IntFunction$$Type): $Long2FloatFunction
 "andThenChar"(arg0: $Float2CharFunction$$Type): $Int2CharFunction
 "andThenDouble"(arg0: $Float2DoubleFunction$$Type): $Int2DoubleFunction
 "composeObject"<T>(arg0: $Object2IntFunction$$Type<(T)>): $Object2FloatFunction<(T)>
 "composeChar"(arg0: $Char2IntFunction$$Type): $Char2FloatFunction
 "composeReference"<T>(arg0: $Reference2IntFunction$$Type<(T)>): $Reference2FloatFunction<(T)>
 "andThenShort"(arg0: $Float2ShortFunction$$Type): $Int2ShortFunction
 "composeShort"(arg0: $Short2IntFunction$$Type): $Short2FloatFunction
 "composeFloat"(arg0: $Float2IntFunction$$Type): $Float2FloatFunction
 "andThenReference"<T>(arg0: $Float2ReferenceFunction$$Type<(T)>): $Int2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2IntFunction$$Type): $Double2FloatFunction
 "andThenByte"(arg0: $Float2ByteFunction$$Type): $Int2ByteFunction
 "composeInt"(arg0: $Int2IntFunction$$Type): $Int2FloatFunction
 "andThenInt"(arg0: $Float2IntFunction$$Type): $Int2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: integer): float
static "identity"<T>(): $Function<(integer), (integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Int2FloatFunction$$Type = ((arg0: integer) => float);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Int2FloatFunction$$Original = $Int2FloatFunction;}
declare module "it.unimi.dsi.fastutil.doubles.Double2ShortFunction" {
import {$Char2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import {$Byte2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import {$Short2IntFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import {$Reference2ShortFunction} from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import {$Double2FloatFunction} from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import {$Long2ShortFunction} from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import {$Double2ReferenceFunction} from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import {$Short2CharFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import {$Object2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import {$Char2ShortFunction} from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Short2ShortFunction, $Short2ShortFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ShortFunction"
import {$Byte2ShortFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import {$Int2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import {$Short2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import {$Double2DoubleFunction, $Double2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2DoubleFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Long2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import {$Int2ShortFunction} from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import {$Float2ShortFunction} from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import {$Short2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import {$Double2CharFunction} from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import {$Double2LongFunction} from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import {$Short2LongFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import {$Double2ByteFunction} from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import {$DoubleToIntFunction$$Interface} from "java.util.function.DoubleToIntFunction"
import {$Object2ShortFunction} from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import {$Short2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import {$Double2IntFunction} from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import {$Short2FloatFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import {$Double2ObjectFunction} from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import {$Reference2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import {$Short2ByteFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import {$Float2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"

export interface $Double2ShortFunction$$Interface extends $Function$0$$Interface<(double), (short)>, $DoubleToIntFunction$$Interface {

(arg0: double): short
}

export class $Double2ShortFunction implements $Double2ShortFunction$$Interface {
 "remove"(arg0: double): short
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): short
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): short
 "get"(arg0: double): short
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: double, arg1: short): short
/**
 * 
 * @deprecated
 */
 "put"(arg0: double, arg1: short): short
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "containsKey"(arg0: double): boolean
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: short): short
 "getOrDefault"(arg0: double, arg1: short): short
 "applyAsInt"(arg0: double): integer
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (double)>): $Function<(T), (short)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(short), (T)>): $Function<(double), (T)>
 "andThenFloat"(arg0: $Short2FloatFunction$$Type): $Double2FloatFunction
 "andThenObject"<T>(arg0: $Short2ObjectFunction$$Type<(T)>): $Double2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2DoubleFunction$$Type): $Byte2ShortFunction
 "andThenLong"(arg0: $Short2LongFunction$$Type): $Double2LongFunction
 "defaultReturnValue"(): short
 "defaultReturnValue"(arg0: short): void
 "composeLong"(arg0: $Long2DoubleFunction$$Type): $Long2ShortFunction
 "andThenChar"(arg0: $Short2CharFunction$$Type): $Double2CharFunction
 "andThenDouble"(arg0: $Short2DoubleFunction$$Type): $Double2DoubleFunction
 "composeObject"<T>(arg0: $Object2DoubleFunction$$Type<(T)>): $Object2ShortFunction<(T)>
 "composeChar"(arg0: $Char2DoubleFunction$$Type): $Char2ShortFunction
 "composeReference"<T>(arg0: $Reference2DoubleFunction$$Type<(T)>): $Reference2ShortFunction<(T)>
 "andThenShort"(arg0: $Short2ShortFunction$$Type): $Double2ShortFunction
 "composeShort"(arg0: $Short2DoubleFunction$$Type): $Short2ShortFunction
 "composeFloat"(arg0: $Float2DoubleFunction$$Type): $Float2ShortFunction
 "andThenReference"<T>(arg0: $Short2ReferenceFunction$$Type<(T)>): $Double2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2DoubleFunction$$Type): $Double2ShortFunction
 "andThenByte"(arg0: $Short2ByteFunction$$Type): $Double2ByteFunction
 "composeInt"(arg0: $Int2DoubleFunction$$Type): $Int2ShortFunction
 "andThenInt"(arg0: $Short2IntFunction$$Type): $Double2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: double): short
static "identity"<T>(): $Function<(double), (double)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Double2ShortFunction$$Type = ((arg0: double) => short);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Double2ShortFunction$$Original = $Double2ShortFunction;}
declare module "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction" {
import {$Byte2ByteFunction, $Byte2ByteFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction"
import {$Float2ByteFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import {$Byte2DoubleFunction} from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import {$Long2ByteFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import {$Short2IntFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import {$Byte2IntFunction} from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"
import {$Reference2ShortFunction} from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import {$Long2ShortFunction} from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import {$Short2CharFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import {$Reference2ByteFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import {$Byte2ReferenceFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import {$Char2ShortFunction} from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Short2ShortFunction, $Short2ShortFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ShortFunction"
import {$Byte2ObjectFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import {$Byte2CharFunction} from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import {$Short2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Int2ShortFunction} from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import {$Object2ByteFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import {$Float2ShortFunction} from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import {$Short2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import {$Byte2LongFunction} from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import {$IntUnaryOperator, $IntUnaryOperator$$Type, $IntUnaryOperator$$Interface} from "java.util.function.IntUnaryOperator"
import {$Short2LongFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import {$Char2ByteFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import {$Double2ByteFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import {$Object2ShortFunction} from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import {$Short2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import {$Short2FloatFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import {$Byte2FloatFunction} from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import {$Short2ByteFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import {$Int2ByteFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import {$Double2ShortFunction} from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"

export interface $Byte2ShortFunction$$Interface extends $Function$0$$Interface<(byte), (short)>, $IntUnaryOperator$$Interface {

(arg0: byte): short
}

export class $Byte2ShortFunction implements $Byte2ShortFunction$$Interface {
 "remove"(arg0: byte): short
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): short
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): short
 "get"(arg0: byte): short
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: byte, arg1: short): short
/**
 * 
 * @deprecated
 */
 "put"(arg0: byte, arg1: short): short
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "containsKey"(arg0: byte): boolean
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: short): short
 "getOrDefault"(arg0: byte, arg1: short): short
/**
 * 
 * @deprecated
 */
 "applyAsInt"(arg0: integer): integer
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (byte)>): $Function<(T), (short)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(short), (T)>): $Function<(byte), (T)>
 "andThenFloat"(arg0: $Short2FloatFunction$$Type): $Byte2FloatFunction
 "andThenObject"<T>(arg0: $Short2ObjectFunction$$Type<(T)>): $Byte2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2ByteFunction$$Type): $Byte2ShortFunction
 "andThenLong"(arg0: $Short2LongFunction$$Type): $Byte2LongFunction
 "defaultReturnValue"(): short
 "defaultReturnValue"(arg0: short): void
 "composeLong"(arg0: $Long2ByteFunction$$Type): $Long2ShortFunction
 "andThenChar"(arg0: $Short2CharFunction$$Type): $Byte2CharFunction
 "andThenDouble"(arg0: $Short2DoubleFunction$$Type): $Byte2DoubleFunction
 "composeObject"<T>(arg0: $Object2ByteFunction$$Type<(T)>): $Object2ShortFunction<(T)>
 "composeChar"(arg0: $Char2ByteFunction$$Type): $Char2ShortFunction
 "composeReference"<T>(arg0: $Reference2ByteFunction$$Type<(T)>): $Reference2ShortFunction<(T)>
 "andThenShort"(arg0: $Short2ShortFunction$$Type): $Byte2ShortFunction
 "composeShort"(arg0: $Short2ByteFunction$$Type): $Short2ShortFunction
 "composeFloat"(arg0: $Float2ByteFunction$$Type): $Float2ShortFunction
 "andThenReference"<T>(arg0: $Short2ReferenceFunction$$Type<(T)>): $Byte2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2ByteFunction$$Type): $Double2ShortFunction
 "andThenByte"(arg0: $Short2ByteFunction$$Type): $Byte2ByteFunction
 "composeInt"(arg0: $Int2ByteFunction$$Type): $Int2ShortFunction
 "andThenInt"(arg0: $Short2IntFunction$$Type): $Byte2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: byte): short
static "identity"(): $IntUnaryOperator
 "compose"(arg0: $IntUnaryOperator$$Type): $IntUnaryOperator
 "andThen"(arg0: $IntUnaryOperator$$Type): $IntUnaryOperator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Byte2ShortFunction$$Type = ((arg0: byte) => short);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Byte2ShortFunction$$Original = $Byte2ShortFunction;}
declare module "it.unimi.dsi.fastutil.objects.Object2ShortFunction" {
import {$Object2IntFunction} from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import {$Short2IntFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import {$Object2ObjectFunction, $Object2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import {$Reference2ShortFunction} from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import {$Long2ShortFunction} from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import {$Short2CharFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import {$Int2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$Char2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import {$Object2DoubleFunction} from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import {$Char2ShortFunction} from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Object2FloatFunction} from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import {$Short2ShortFunction, $Short2ShortFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ShortFunction"
import {$Byte2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import {$Byte2ShortFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import {$Short2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import {$Reference2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Object2CharFunction} from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Int2ShortFunction} from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import {$Object2ByteFunction} from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import {$Float2ShortFunction} from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import {$Short2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import {$ToIntFunction$$Interface} from "java.util.function.ToIntFunction"
import {$Float2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import {$Short2LongFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import {$Object2ReferenceFunction} from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import {$Short2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import {$Short2FloatFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import {$Object2LongFunction} from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import {$Double2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import {$Short2ByteFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import {$Long2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import {$Double2ShortFunction} from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"

export interface $Object2ShortFunction$$Interface<K> extends $Function$0$$Interface<(K), (short)>, $ToIntFunction$$Interface<(K)> {

(arg0: any): short
}

export class $Object2ShortFunction<K> implements $Object2ShortFunction$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): any
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): short
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: K, arg1: short): short
/**
 * 
 * @deprecated
 */
 "put"(arg0: K, arg1: short): short
 "getShort"(arg0: any): short
 "getOrDefault"(arg0: any, arg1: short): short
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: short): short
 "applyAsInt"(arg0: K): integer
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(short), (T)>): $Function<(K), (T)>
 "removeShort"(arg0: any): short
 "andThenFloat"(arg0: $Short2FloatFunction$$Type): $Object2FloatFunction<(K)>
 "andThenObject"<T>(arg0: $Short2ObjectFunction$$Type<(T)>): $Object2ObjectFunction<(K), (T)>
 "composeByte"(arg0: $Byte2ObjectFunction$$Type<(K)>): $Byte2ShortFunction
 "andThenLong"(arg0: $Short2LongFunction$$Type): $Object2LongFunction<(K)>
 "defaultReturnValue"(arg0: short): void
 "defaultReturnValue"(): short
 "composeLong"(arg0: $Long2ObjectFunction$$Type<(K)>): $Long2ShortFunction
 "andThenChar"(arg0: $Short2CharFunction$$Type): $Object2CharFunction<(K)>
 "andThenDouble"(arg0: $Short2DoubleFunction$$Type): $Object2DoubleFunction<(K)>
 "composeObject"<T>(arg0: $Object2ObjectFunction$$Type<(T), (K)>): $Object2ShortFunction<(T)>
 "composeChar"(arg0: $Char2ObjectFunction$$Type<(K)>): $Char2ShortFunction
 "composeReference"<T>(arg0: $Reference2ObjectFunction$$Type<(T), (K)>): $Reference2ShortFunction<(T)>
 "andThenShort"(arg0: $Short2ShortFunction$$Type): $Object2ShortFunction<(K)>
 "composeShort"(arg0: $Short2ObjectFunction$$Type<(K)>): $Short2ShortFunction
 "composeFloat"(arg0: $Float2ObjectFunction$$Type<(K)>): $Float2ShortFunction
 "andThenReference"<T>(arg0: $Short2ReferenceFunction$$Type<(T)>): $Object2ReferenceFunction<(K), (T)>
 "composeDouble"(arg0: $Double2ObjectFunction$$Type<(K)>): $Double2ShortFunction
 "andThenByte"(arg0: $Short2ByteFunction$$Type): $Object2ByteFunction<(K)>
 "composeInt"(arg0: $Int2ObjectFunction$$Type<(K)>): $Int2ShortFunction
 "andThenInt"(arg0: $Short2IntFunction$$Type): $Object2IntFunction<(K)>
 "size"(): integer
 "clear"(): void
 "apply"(arg0: K): short
 "containsKey"(arg0: any): boolean
static "identity"<T>(): $Function<(K), (K)>
 "compose"<V>(arg0: $Function$$Type<(V), (K)>): $Function<(V), (short)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Object2ShortFunction$$Type<K> = ((arg0: any) => short);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Object2ShortFunction$$Original<K> = $Object2ShortFunction<(K)>;}
declare module "it.unimi.dsi.fastutil.objects.Reference2IntMap" {
import {$Float2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import {$Object2IntFunction} from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import {$Reference2IntFunction, $Reference2IntFunction$$Type, $Reference2IntFunction$$Interface} from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import {$Long2IntFunction} from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import {$Short2IntFunction} from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import {$Int2FloatFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import {$Byte2IntFunction} from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"
import {$IntBinaryOperator$$Type} from "java.util.function.IntBinaryOperator"
import {$Reference2IntMap$Entry} from "it.unimi.dsi.fastutil.objects.Reference2IntMap$Entry"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$Reference2ShortFunction} from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import {$Reference2LongFunction} from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import {$Float2IntFunction} from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import {$Int2CharFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import {$Double2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import {$Int2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import {$Reference2ByteFunction} from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import {$Byte2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import {$Int2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$Int2IntFunction, $Int2IntFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Set} from "java.util.Set"
import {$Int2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import {$Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ReferenceFunction"
import {$Reference2ObjectFunction} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Collection} from "java.util.Collection"
import {$Map, $Map$$Type, $Map$$Interface} from "java.util.Map"
import {$IntBinaryOperator$$Type as $IntBinaryOperator$0$$Type} from "it.unimi.dsi.fastutil.ints.IntBinaryOperator"
import {$Int2ShortFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import {$Short2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import {$Long2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$Reference2FloatFunction} from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import {$ToIntFunction$$Type} from "java.util.function.ToIntFunction"
import {$Reference2CharFunction} from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import {$ObjectSet} from "it.unimi.dsi.fastutil.objects.ObjectSet"
import {$Int2LongFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import {$Object2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import {$Char2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import {$Char2IntFunction} from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Double2IntFunction} from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import {$Reference2DoubleFunction} from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import {$Int2ByteFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"

export interface $Reference2IntMap$$Interface<K> extends $Reference2IntFunction$$Interface<(K)>, $Map$$Interface<(K), (integer)> {
[index: string | number]: integer
get "empty"(): boolean
}

export class $Reference2IntMap<K> implements $Reference2IntMap$$Interface {
 "computeInt"(arg0: K, arg1: $BiFunction$$Type<(K), (integer), (integer)>): integer
 "remove"(arg0: any, arg1: integer): boolean
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): integer
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any, arg1: any): boolean
 "size"(): integer
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): integer
/**
 * 
 * @deprecated
 */
 "put"(arg0: K, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "values"(): $Collection
 "clear"(): void
 "replace"(arg0: K, arg1: integer, arg2: integer): boolean
 "replace"(arg0: K, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "replace"(arg0: K, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "replace"(arg0: any, arg1: any, arg2: any): boolean
/**
 * 
 * @deprecated
 */
 "replace"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "replace"(arg0: K, arg1: integer, arg2: integer): boolean
 "merge"(arg0: K, arg1: integer, arg2: $BiFunction$$Type<(integer), (integer), (integer)>): integer
/**
 * 
 * @deprecated
 */
 "merge"(arg0: K, arg1: integer, arg2: $BiFunction$$Type<(integer), (integer), (integer)>): integer
/**
 * 
 * @deprecated
 */
 "merge"(arg0: any, arg1: any, arg2: $BiFunction$$Type): any
/**
 * 
 * @deprecated
 */
 "entrySet"(): $ObjectSet<($Map$Entry<(K), (integer)>)>
 "putIfAbsent"(arg0: K, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "putIfAbsent"(arg0: K, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "putIfAbsent"(arg0: any, arg1: any): any
 "forEach"(arg0: $BiConsumer$$Type<(K), (integer)>): void
 "containsKey"(arg0: any): boolean
 "computeIfAbsent"(arg0: K, arg1: $Reference2IntFunction$$Type<(K)>): integer
 "computeIfAbsent"(arg0: K, arg1: $ToIntFunction$$Type<(K)>): integer
 "keySet"(): $Set
/**
 * 
 * @deprecated
 */
 "containsValue"(arg0: any): boolean
 "containsValue"(arg0: integer): boolean
 "getOrDefault"(arg0: any, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: integer): integer
 "reference2IntEntrySet"(): $ObjectSet<($Reference2IntMap$Entry<(K)>)>
/**
 * 
 * @deprecated
 */
 "computeIntIfAbsentPartial"(arg0: K, arg1: $Reference2IntFunction$$Type<(K)>): integer
 "computeIntIfPresent"(arg0: K, arg1: $BiFunction$$Type<(K), (integer), (integer)>): integer
 "defaultReturnValue"(arg0: integer): void
 "defaultReturnValue"(): integer
/**
 * 
 * @deprecated
 */
 "computeIntIfAbsent"(arg0: K, arg1: $ToIntFunction$$Type<(K)>): integer
/**
 * 
 * @deprecated
 */
 "mergeInt"(arg0: K, arg1: integer, arg2: $BiFunction$$Type<(integer), (integer), (integer)>): integer
 "mergeInt"(arg0: K, arg1: integer, arg2: $IntBinaryOperator$0$$Type): integer
 "mergeInt"(arg0: K, arg1: integer, arg2: $IntBinaryOperator$$Type): integer
 "removeInt"(arg0: any): integer
 "put"(arg0: K, arg1: integer): integer
 "getInt"(arg0: any): integer
 "applyAsInt"(arg0: K): integer
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(integer), (T)>): $Function<(K), (T)>
 "andThenFloat"(arg0: $Int2FloatFunction$$Type): $Reference2FloatFunction<(K)>
 "andThenObject"<T>(arg0: $Int2ObjectFunction$$Type<(T)>): $Reference2ObjectFunction<(K), (T)>
 "composeByte"(arg0: $Byte2ReferenceFunction$$Type<(K)>): $Byte2IntFunction
 "andThenLong"(arg0: $Int2LongFunction$$Type): $Reference2LongFunction<(K)>
 "composeLong"(arg0: $Long2ReferenceFunction$$Type<(K)>): $Long2IntFunction
 "andThenChar"(arg0: $Int2CharFunction$$Type): $Reference2CharFunction<(K)>
 "andThenDouble"(arg0: $Int2DoubleFunction$$Type): $Reference2DoubleFunction<(K)>
 "composeObject"<T>(arg0: $Object2ReferenceFunction$$Type<(T), (K)>): $Object2IntFunction<(T)>
 "composeChar"(arg0: $Char2ReferenceFunction$$Type<(K)>): $Char2IntFunction
 "composeReference"<T>(arg0: $Reference2ReferenceFunction$$Type<(T), (K)>): $Reference2IntFunction<(T)>
 "andThenShort"(arg0: $Int2ShortFunction$$Type): $Reference2ShortFunction<(K)>
 "composeShort"(arg0: $Short2ReferenceFunction$$Type<(K)>): $Short2IntFunction
 "composeFloat"(arg0: $Float2ReferenceFunction$$Type<(K)>): $Float2IntFunction
 "andThenReference"<T>(arg0: $Int2ReferenceFunction$$Type<(T)>): $Reference2ReferenceFunction<(K), (T)>
 "composeDouble"(arg0: $Double2ReferenceFunction$$Type<(K)>): $Double2IntFunction
 "andThenByte"(arg0: $Int2ByteFunction$$Type): $Reference2ByteFunction<(K)>
 "composeInt"(arg0: $Int2ReferenceFunction$$Type<(K)>): $Int2IntFunction
 "andThenInt"(arg0: $Int2IntFunction$$Type): $Reference2IntFunction<(K)>
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<K, V>(arg0: $Map$$Type<(K), (integer)>): $Map<(K), (integer)>
 "isEmpty"(): boolean
 "replaceAll"(arg0: $BiFunction$$Type<(K), (integer), (integer)>): void
static "of"<K, V>(arg0: K, arg1: integer, arg2: K, arg3: integer, arg4: K, arg5: integer, arg6: K, arg7: integer): $Map<(K), (integer)>
static "of"<K, V>(): $Map<(K), (integer)>
static "of"<K, V>(arg0: K, arg1: integer): $Map<(K), (integer)>
static "of"<K, V>(arg0: K, arg1: integer, arg2: K, arg3: integer): $Map<(K), (integer)>
static "of"<K, V>(arg0: K, arg1: integer, arg2: K, arg3: integer, arg4: K, arg5: integer): $Map<(K), (integer)>
static "of"<K, V>(arg0: K, arg1: integer, arg2: K, arg3: integer, arg4: K, arg5: integer, arg6: K, arg7: integer, arg8: K, arg9: integer, arg10: K, arg11: integer, arg12: K, arg13: integer, arg14: K, arg15: integer, arg16: K, arg17: integer, arg18: K, arg19: integer): $Map<(K), (integer)>
static "of"<K, V>(arg0: K, arg1: integer, arg2: K, arg3: integer, arg4: K, arg5: integer, arg6: K, arg7: integer, arg8: K, arg9: integer, arg10: K, arg11: integer, arg12: K, arg13: integer, arg14: K, arg15: integer, arg16: K, arg17: integer): $Map<(K), (integer)>
static "of"<K, V>(arg0: K, arg1: integer, arg2: K, arg3: integer, arg4: K, arg5: integer, arg6: K, arg7: integer, arg8: K, arg9: integer, arg10: K, arg11: integer, arg12: K, arg13: integer, arg14: K, arg15: integer): $Map<(K), (integer)>
static "of"<K, V>(arg0: K, arg1: integer, arg2: K, arg3: integer, arg4: K, arg5: integer, arg6: K, arg7: integer, arg8: K, arg9: integer, arg10: K, arg11: integer, arg12: K, arg13: integer): $Map<(K), (integer)>
static "of"<K, V>(arg0: K, arg1: integer, arg2: K, arg3: integer, arg4: K, arg5: integer, arg6: K, arg7: integer, arg8: K, arg9: integer, arg10: K, arg11: integer): $Map<(K), (integer)>
static "of"<K, V>(arg0: K, arg1: integer, arg2: K, arg3: integer, arg4: K, arg5: integer, arg6: K, arg7: integer, arg8: K, arg9: integer): $Map<(K), (integer)>
 "putAll"(arg0: $Map$$Type<(K), (integer)>): void
 "compute"(arg0: K, arg1: $BiFunction$$Type<(K), (integer), (integer)>): integer
static "entry"<K, V>(arg0: K, arg1: integer): $Map$Entry<(K), (integer)>
 "computeIfAbsent"(arg0: K, arg1: $Function$$Type<(K), (integer)>): integer
 "computeIfPresent"(arg0: K, arg1: $BiFunction$$Type<(K), (integer), (integer)>): integer
static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(K), (integer)>)[]): $Map<(K), (integer)>
 "apply"(arg0: K): integer
static "identity"<T>(): $Function<(K), (K)>
 "compose"<V>(arg0: $Function$$Type<(V), (K)>): $Function<(V), (integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Reference2IntMap$$Type<K> = ($Reference2IntMap<(K)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Reference2IntMap$$Original<K> = $Reference2IntMap<(K)>;}
declare module "it.unimi.dsi.fastutil.bytes.ByteBinaryOperator" {
import {$BiFunction} from "java.util.function.BiFunction"
import {$Comparator$$Type} from "java.util.Comparator"
import {$Function$$Type} from "java.util.function.Function"
import {$BinaryOperator, $BinaryOperator$$Interface} from "java.util.function.BinaryOperator"
import {$IntBinaryOperator$$Interface} from "java.util.function.IntBinaryOperator"

export interface $ByteBinaryOperator$$Interface extends $BinaryOperator$$Interface<(byte)>, $IntBinaryOperator$$Interface {

(arg0: byte, arg1: byte): byte
}

export class $ByteBinaryOperator implements $ByteBinaryOperator$$Interface {
/**
 * 
 * @deprecated
 */
 "apply"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "apply"(arg0: byte, arg1: byte): byte
 "apply"(arg0: byte, arg1: byte): byte
/**
 * 
 * @deprecated
 */
 "applyAsInt"(arg0: integer, arg1: integer): integer
static "minBy"<T>(arg0: $Comparator$$Type<(byte)>): $BinaryOperator<(byte)>
static "maxBy"<T>(arg0: $Comparator$$Type<(byte)>): $BinaryOperator<(byte)>
 "andThen"<V>(arg0: $Function$$Type<(byte), (V)>): $BiFunction<(byte), (byte), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ByteBinaryOperator$$Type = ((arg0: byte, arg1: byte) => byte);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ByteBinaryOperator$$Original = $ByteBinaryOperator;}
declare module "it.unimi.dsi.fastutil.chars.Char2DoubleFunction" {
import {$Byte2DoubleFunction} from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import {$Long2CharFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import {$Double2FloatFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import {$Int2CharFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import {$Double2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import {$Short2CharFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import {$Char2ObjectFunction} from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import {$Object2DoubleFunction} from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import {$Char2ShortFunction} from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$IntToDoubleFunction$$Interface} from "java.util.function.IntToDoubleFunction"
import {$Float2CharFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import {$Int2DoubleFunction} from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import {$Byte2CharFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import {$Short2DoubleFunction} from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import {$Double2DoubleFunction, $Double2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2DoubleFunction"
import {$Object2CharFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Long2DoubleFunction} from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import {$Char2CharFunction, $Char2CharFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2CharFunction"
import {$Double2CharFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import {$Char2LongFunction} from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import {$Double2LongFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import {$Double2ByteFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import {$Char2ByteFunction} from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import {$Reference2CharFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import {$Char2ReferenceFunction} from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import {$Char2IntFunction} from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import {$Char2FloatFunction} from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import {$Double2IntFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import {$Double2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import {$Reference2DoubleFunction} from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import {$Float2DoubleFunction} from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import {$Double2ShortFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"

export interface $Char2DoubleFunction$$Interface extends $Function$0$$Interface<(character), (double)>, $IntToDoubleFunction$$Interface {

(arg0: character): double
}

export class $Char2DoubleFunction implements $Char2DoubleFunction$$Interface {
 "remove"(arg0: character): double
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): double
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): double
 "get"(arg0: character): double
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: character, arg1: double): double
/**
 * 
 * @deprecated
 */
 "put"(arg0: character, arg1: double): double
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "containsKey"(arg0: character): boolean
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: double): double
 "getOrDefault"(arg0: character, arg1: double): double
/**
 * 
 * @deprecated
 */
 "applyAsDouble"(arg0: integer): double
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (character)>): $Function<(T), (double)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(double), (T)>): $Function<(character), (T)>
 "andThenFloat"(arg0: $Double2FloatFunction$$Type): $Char2FloatFunction
 "andThenObject"<T>(arg0: $Double2ObjectFunction$$Type<(T)>): $Char2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2CharFunction$$Type): $Byte2DoubleFunction
 "andThenLong"(arg0: $Double2LongFunction$$Type): $Char2LongFunction
 "defaultReturnValue"(): double
 "defaultReturnValue"(arg0: double): void
 "composeLong"(arg0: $Long2CharFunction$$Type): $Long2DoubleFunction
 "andThenChar"(arg0: $Double2CharFunction$$Type): $Char2CharFunction
 "andThenDouble"(arg0: $Double2DoubleFunction$$Type): $Char2DoubleFunction
 "composeObject"<T>(arg0: $Object2CharFunction$$Type<(T)>): $Object2DoubleFunction<(T)>
 "composeChar"(arg0: $Char2CharFunction$$Type): $Char2DoubleFunction
 "composeReference"<T>(arg0: $Reference2CharFunction$$Type<(T)>): $Reference2DoubleFunction<(T)>
 "andThenShort"(arg0: $Double2ShortFunction$$Type): $Char2ShortFunction
 "composeShort"(arg0: $Short2CharFunction$$Type): $Short2DoubleFunction
 "composeFloat"(arg0: $Float2CharFunction$$Type): $Float2DoubleFunction
 "andThenReference"<T>(arg0: $Double2ReferenceFunction$$Type<(T)>): $Char2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2CharFunction$$Type): $Double2DoubleFunction
 "andThenByte"(arg0: $Double2ByteFunction$$Type): $Char2ByteFunction
 "composeInt"(arg0: $Int2CharFunction$$Type): $Int2DoubleFunction
 "andThenInt"(arg0: $Double2IntFunction$$Type): $Char2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: character): double
static "identity"<T>(): $Function<(character), (character)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Char2DoubleFunction$$Type = ((arg0: character) => double);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Char2DoubleFunction$$Original = $Char2DoubleFunction;}
declare module "it.unimi.dsi.fastutil.Hash$Strategy" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Hash$Strategy$$Interface<K> {
}

export class $Hash$Strategy<K> implements $Hash$Strategy$$Interface {
 "equals"(arg0: K, arg1: K): boolean
 "hashCode"(arg0: K): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Hash$Strategy$$Type<K> = ($Hash$Strategy<(K)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Hash$Strategy$$Original<K> = $Hash$Strategy<(K)>;}
declare module "it.unimi.dsi.fastutil.doubles.DoubleIterator" {
import {$DoubleConsumer$$Type as $DoubleConsumer$0$$Type} from "java.util.function.DoubleConsumer"
import {$DoubleConsumer$$Type} from "it.unimi.dsi.fastutil.doubles.DoubleConsumer"
import {$PrimitiveIterator$OfDouble$$Interface} from "java.util.PrimitiveIterator$OfDouble"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $DoubleIterator$$Interface extends $PrimitiveIterator$OfDouble$$Interface {
}

export class $DoubleIterator implements $DoubleIterator$$Interface {
/**
 * 
 * @deprecated
 */
 "forEachRemaining"(arg0: $Consumer$$Type<(double)>): void
 "forEachRemaining"(arg0: $DoubleConsumer$$Type): void
/**
 * 
 * @deprecated
 */
 "next"(): any
 "skip"(arg0: integer): integer
 "nextDouble"(): double
 "forEachRemaining"(arg0: any): void
 "forEachRemaining"(arg0: $DoubleConsumer$0$$Type): void
 "remove"(): void
 "hasNext"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleIterator$$Type = ($DoubleIterator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoubleIterator$$Original = $DoubleIterator;}
declare module "it.unimi.dsi.fastutil.objects.Object2IntMap$Entry" {
import {$Comparable} from "java.lang.Comparable"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$Map$Entry, $Map$Entry$$Type, $Map$Entry$$Interface} from "java.util.Map$Entry"

export interface $Object2IntMap$Entry$$Interface<K> extends $Map$Entry$$Interface<(K), (integer)> {
get "value"(): integer
set "value"(value: any)
set "value"(value: integer)
set "value"(value: integer)
get "intValue"(): integer
get "key"(): K
}

export class $Object2IntMap$Entry<K> implements $Object2IntMap$Entry$$Interface {
/**
 * 
 * @deprecated
 */
 "getValue"(): integer
/**
 * 
 * @deprecated
 */
 "setValue"(arg0: any): any
/**
 * 
 * @deprecated
 */
 "setValue"(arg0: integer): integer
 "setValue"(arg0: integer): integer
 "getIntValue"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<K, V>(arg0: $Map$Entry$$Type<(K), (integer)>): $Map$Entry<(K), (integer)>
 "getKey"(): K
static "comparingByKey"<K, V>(arg0: $Comparator$$Type<(K)>): $Comparator<($Map$Entry<(K), (integer)>)>
static "comparingByKey"<K extends $Comparable<(object)>, V>(): $Comparator<($Map$Entry<(K), (integer)>)>
static "comparingByValue"<K, V extends $Comparable<(object)>>(): $Comparator<($Map$Entry<(K), (integer)>)>
static "comparingByValue"<K, V>(arg0: $Comparator$$Type<(integer)>): $Comparator<($Map$Entry<(K), (integer)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Object2IntMap$Entry$$Type<K> = ($Object2IntMap$Entry<(K)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Object2IntMap$Entry$$Original<K> = $Object2IntMap$Entry<(K)>;}
declare module "it.unimi.dsi.fastutil.longs.AbstractLong2ReferenceMap" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$LongFunction$$Type} from "java.util.function.LongFunction"
import {$Long2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$Long2ReferenceMap$Entry} from "it.unimi.dsi.fastutil.longs.Long2ReferenceMap$Entry"
import {$ObjectSet} from "it.unimi.dsi.fastutil.objects.ObjectSet"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$AbstractLong2ReferenceFunction} from "it.unimi.dsi.fastutil.longs.AbstractLong2ReferenceFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$ReferenceCollection} from "it.unimi.dsi.fastutil.objects.ReferenceCollection"
import {$Long2ReferenceMap$$Interface} from "it.unimi.dsi.fastutil.longs.Long2ReferenceMap"
import {$Set} from "java.util.Set"

export class $AbstractLong2ReferenceMap<V> extends $AbstractLong2ReferenceFunction<(V)> implements $Long2ReferenceMap$$Interface<(V)>, $Serializable$$Interface {
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "values"(): $ReferenceCollection<(V)>
public "hashCode"(): integer
public "isEmpty"(): boolean
public "putAll"(arg0: $Map$$Type<(long), (V)>): void
public "containsKey"(arg0: long): boolean
public "keySet"(): $Set
public "containsValue"(arg0: any): boolean
/**
 * 
 * @deprecated
 */
public "remove"(arg0: any): V
public "remove"(arg0: long, arg1: any): boolean
public "size"(): integer
/**
 * 
 * @deprecated
 */
public "get"(arg0: any): V
/**
 * 
 * @deprecated
 */
public "put"(arg0: long, arg1: V): V
/**
 * 
 * @deprecated
 */
public "put"(arg0: any, arg1: any): any
public "clear"(): void
public "replace"(arg0: long, arg1: V, arg2: V): boolean
public "replace"(arg0: long, arg1: V): V
public "merge"(arg0: long, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
/**
 * 
 * @deprecated
 */
public "entrySet"(): $Set
public "putIfAbsent"(arg0: long, arg1: V): V
public "compute"(arg0: long, arg1: $BiFunction$$Type<(long), (V), (V)>): V
public "forEach"(arg0: $BiConsumer$$Type<(long), (V)>): void
/**
 * 
 * @deprecated
 */
public "containsKey"(arg0: any): boolean
public "computeIfAbsent"(arg0: long, arg1: $Long2ReferenceFunction$$Type<(V)>): V
public "computeIfAbsent"(arg0: long, arg1: $LongFunction$$Type<(V)>): V
public "getOrDefault"(arg0: long, arg1: V): V
/**
 * 
 * @deprecated
 */
public "getOrDefault"(arg0: any, arg1: V): V
public "computeIfPresent"(arg0: long, arg1: $BiFunction$$Type<(long), (V), (V)>): V
/**
 * 
 * @deprecated
 */
public "computeIfAbsentPartial"(arg0: long, arg1: $Long2ReferenceFunction$$Type<(V)>): V
public "defaultReturnValue"(arg0: V): void
public "defaultReturnValue"(): V
public "long2ReferenceEntrySet"(): $ObjectSet<($Long2ReferenceMap$Entry<(V)>)>
public "remove"(arg0: any, arg1: any): boolean
public static "copyOf"<K, V>(arg0: $Map$$Type<(long), (V)>): $Map<(long), (V)>
public "replace"(arg0: long, arg1: V, arg2: V): boolean
public "replace"(arg0: long, arg1: V): V
public "replaceAll"(arg0: $BiFunction$$Type<(long), (V), (V)>): void
public static "of"<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V, arg6: long, arg7: V): $Map<(long), (V)>
public static "of"<K, V>(): $Map<(long), (V)>
public static "of"<K, V>(arg0: long, arg1: V): $Map<(long), (V)>
public static "of"<K, V>(arg0: long, arg1: V, arg2: long, arg3: V): $Map<(long), (V)>
public static "of"<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V): $Map<(long), (V)>
public static "of"<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V, arg6: long, arg7: V, arg8: long, arg9: V, arg10: long, arg11: V, arg12: long, arg13: V, arg14: long, arg15: V, arg16: long, arg17: V, arg18: long, arg19: V): $Map<(long), (V)>
public static "of"<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V, arg6: long, arg7: V, arg8: long, arg9: V, arg10: long, arg11: V, arg12: long, arg13: V, arg14: long, arg15: V, arg16: long, arg17: V): $Map<(long), (V)>
public static "of"<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V, arg6: long, arg7: V, arg8: long, arg9: V, arg10: long, arg11: V, arg12: long, arg13: V, arg14: long, arg15: V): $Map<(long), (V)>
public static "of"<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V, arg6: long, arg7: V, arg8: long, arg9: V, arg10: long, arg11: V, arg12: long, arg13: V): $Map<(long), (V)>
public static "of"<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V, arg6: long, arg7: V, arg8: long, arg9: V, arg10: long, arg11: V): $Map<(long), (V)>
public static "of"<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V, arg6: long, arg7: V, arg8: long, arg9: V): $Map<(long), (V)>
public "merge"(arg0: long, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
public "putIfAbsent"(arg0: long, arg1: V): V
public "compute"(arg0: long, arg1: $BiFunction$$Type<(long), (V), (V)>): V
public static "entry"<K, V>(arg0: long, arg1: V): $Map$Entry<(long), (V)>
public "computeIfAbsent"(arg0: long, arg1: $Function$$Type<(long), (V)>): V
public "computeIfPresent"(arg0: long, arg1: $BiFunction$$Type<(long), (V), (V)>): V
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(long), (V)>)[]): $Map<(long), (V)>
public static "identity"<T>(): $Function<(long), (long)>
[index: string | number]: V
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractLong2ReferenceMap$$Type<V> = ($AbstractLong2ReferenceMap<(V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractLong2ReferenceMap$$Original<V> = $AbstractLong2ReferenceMap<(V)>;}
declare module "it.unimi.dsi.fastutil.chars.Char2LongFunction" {
import {$Char2DoubleFunction} from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import {$Long2CharFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import {$Long2IntFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import {$Long2ByteFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import {$Reference2LongFunction} from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import {$Int2CharFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import {$Long2ShortFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import {$Short2CharFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import {$Char2ObjectFunction} from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import {$Char2ShortFunction} from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Float2CharFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import {$Byte2CharFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import {$Object2CharFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Long2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import {$Long2LongFunction, $Long2LongFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import {$Float2LongFunction} from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import {$Long2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import {$Char2CharFunction, $Char2CharFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2CharFunction"
import {$Double2CharFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import {$Byte2LongFunction} from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import {$Double2LongFunction} from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import {$IntToLongFunction$$Interface} from "java.util.function.IntToLongFunction"
import {$Short2LongFunction} from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import {$Char2ByteFunction} from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import {$Int2LongFunction} from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import {$Reference2CharFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import {$Char2ReferenceFunction} from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import {$Char2IntFunction} from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import {$Char2FloatFunction} from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import {$Long2FloatFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import {$Object2LongFunction} from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import {$Long2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"

export interface $Char2LongFunction$$Interface extends $Function$0$$Interface<(character), (long)>, $IntToLongFunction$$Interface {

(arg0: character): long
}

export class $Char2LongFunction implements $Char2LongFunction$$Interface {
 "remove"(arg0: character): long
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): long
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): long
 "get"(arg0: character): long
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: character, arg1: long): long
/**
 * 
 * @deprecated
 */
 "put"(arg0: character, arg1: long): long
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "containsKey"(arg0: character): boolean
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: long): long
 "getOrDefault"(arg0: character, arg1: long): long
/**
 * 
 * @deprecated
 */
 "applyAsLong"(arg0: integer): long
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (character)>): $Function<(T), (long)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(long), (T)>): $Function<(character), (T)>
 "andThenFloat"(arg0: $Long2FloatFunction$$Type): $Char2FloatFunction
 "andThenObject"<T>(arg0: $Long2ObjectFunction$$Type<(T)>): $Char2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2CharFunction$$Type): $Byte2LongFunction
 "andThenLong"(arg0: $Long2LongFunction$$Type): $Char2LongFunction
 "defaultReturnValue"(): long
 "defaultReturnValue"(arg0: long): void
 "composeLong"(arg0: $Long2CharFunction$$Type): $Long2LongFunction
 "andThenChar"(arg0: $Long2CharFunction$$Type): $Char2CharFunction
 "andThenDouble"(arg0: $Long2DoubleFunction$$Type): $Char2DoubleFunction
 "composeObject"<T>(arg0: $Object2CharFunction$$Type<(T)>): $Object2LongFunction<(T)>
 "composeChar"(arg0: $Char2CharFunction$$Type): $Char2LongFunction
 "composeReference"<T>(arg0: $Reference2CharFunction$$Type<(T)>): $Reference2LongFunction<(T)>
 "andThenShort"(arg0: $Long2ShortFunction$$Type): $Char2ShortFunction
 "composeShort"(arg0: $Short2CharFunction$$Type): $Short2LongFunction
 "composeFloat"(arg0: $Float2CharFunction$$Type): $Float2LongFunction
 "andThenReference"<T>(arg0: $Long2ReferenceFunction$$Type<(T)>): $Char2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2CharFunction$$Type): $Double2LongFunction
 "andThenByte"(arg0: $Long2ByteFunction$$Type): $Char2ByteFunction
 "composeInt"(arg0: $Int2CharFunction$$Type): $Int2LongFunction
 "andThenInt"(arg0: $Long2IntFunction$$Type): $Char2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: character): long
static "identity"<T>(): $Function<(character), (character)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Char2LongFunction$$Type = ((arg0: character) => long);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Char2LongFunction$$Original = $Char2LongFunction;}
declare module "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction" {
import {$Float2ReferenceFunction} from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import {$Reference2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import {$Short2IntFunction} from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import {$IntFunction$$Interface} from "java.util.function.IntFunction"
import {$Reference2ShortFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import {$Reference2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import {$Long2ShortFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import {$Double2ReferenceFunction} from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import {$Int2ReferenceFunction} from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import {$Short2CharFunction} from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import {$Reference2ByteFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import {$Byte2ReferenceFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import {$Char2ShortFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Short2ShortFunction, $Short2ShortFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ShortFunction"
import {$Byte2ShortFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import {$Short2DoubleFunction} from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import {$Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ReferenceFunction"
import {$Reference2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Int2ShortFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import {$Float2ShortFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import {$Long2ReferenceFunction} from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import {$Reference2FloatFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import {$Short2LongFunction} from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import {$Reference2CharFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import {$Short2ObjectFunction} from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import {$Object2ReferenceFunction} from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import {$Object2ShortFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import {$Char2ReferenceFunction} from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import {$Short2FloatFunction} from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import {$Reference2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import {$Short2ByteFunction} from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import {$Double2ShortFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"

export interface $Short2ReferenceFunction$$Interface<V> extends $Function$0$$Interface<(short), (V)>, $IntFunction$$Interface<(V)> {

(arg0: short): V
}

export class $Short2ReferenceFunction<V> implements $Short2ReferenceFunction$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): V
 "remove"(arg0: short): V
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): V
 "get"(arg0: short): V
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "put"(arg0: short, arg1: V): V
 "put"(arg0: short, arg1: V): V
/**
 * 
 * @deprecated
 */
 "apply"(arg0: integer): V
 "containsKey"(arg0: short): boolean
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "getOrDefault"(arg0: short, arg1: V): V
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: V): V
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (short)>): $Function<(T), (V)>
 "andThenFloat"(arg0: $Reference2FloatFunction$$Type<(V)>): $Short2FloatFunction
 "andThenObject"<T>(arg0: $Reference2ObjectFunction$$Type<(V), (T)>): $Short2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2ShortFunction$$Type): $Byte2ReferenceFunction<(V)>
 "andThenLong"(arg0: $Reference2LongFunction$$Type<(V)>): $Short2LongFunction
 "defaultReturnValue"(): V
 "defaultReturnValue"(arg0: V): void
 "composeLong"(arg0: $Long2ShortFunction$$Type): $Long2ReferenceFunction<(V)>
 "andThenChar"(arg0: $Reference2CharFunction$$Type<(V)>): $Short2CharFunction
 "andThenDouble"(arg0: $Reference2DoubleFunction$$Type<(V)>): $Short2DoubleFunction
 "composeObject"<T>(arg0: $Object2ShortFunction$$Type<(T)>): $Object2ReferenceFunction<(T), (V)>
 "composeChar"(arg0: $Char2ShortFunction$$Type): $Char2ReferenceFunction<(V)>
 "composeReference"<T>(arg0: $Reference2ShortFunction$$Type<(T)>): $Reference2ReferenceFunction<(T), (V)>
 "andThenShort"(arg0: $Reference2ShortFunction$$Type<(V)>): $Short2ShortFunction
 "composeShort"(arg0: $Short2ShortFunction$$Type): $Short2ReferenceFunction<(V)>
 "composeFloat"(arg0: $Float2ShortFunction$$Type): $Float2ReferenceFunction<(V)>
 "andThenReference"<T>(arg0: $Reference2ReferenceFunction$$Type<(V), (T)>): $Short2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2ShortFunction$$Type): $Double2ReferenceFunction<(V)>
 "andThenByte"(arg0: $Reference2ByteFunction$$Type<(V)>): $Short2ByteFunction
 "composeInt"(arg0: $Int2ShortFunction$$Type): $Int2ReferenceFunction<(V)>
 "andThenInt"(arg0: $Reference2IntFunction$$Type<(V)>): $Short2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: short): V
static "identity"<T>(): $Function<(short), (short)>
 "andThen"<V>(arg0: $Function$$Type<(V), (V)>): $Function<(short), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Short2ReferenceFunction$$Type<V> = ((arg0: short) => V);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Short2ReferenceFunction$$Original<V> = $Short2ReferenceFunction<(V)>;}
declare module "it.unimi.dsi.fastutil.longs.LongPredicate" {
import {$LongPredicate as $LongPredicate$0, $LongPredicate$$Type as $LongPredicate$0$$Type, $LongPredicate$$Interface as $LongPredicate$0$$Interface} from "java.util.function.LongPredicate"
import {$Predicate, $Predicate$$Type, $Predicate$$Interface} from "java.util.function.Predicate"

export interface $LongPredicate$$Interface extends $Predicate$$Interface<(long)>, $LongPredicate$0$$Interface {

(arg0: long): boolean
}

export class $LongPredicate implements $LongPredicate$$Interface {
/**
 * 
 * @deprecated
 */
 "test"(arg0: long): boolean
/**
 * 
 * @deprecated
 */
 "test"(arg0: any): boolean
/**
 * 
 * @deprecated
 */
 "or"(arg0: $Predicate$$Type<(long)>): $Predicate<(long)>
 "or"(arg0: $LongPredicate$0$$Type): $LongPredicate
 "or"(arg0: $LongPredicate$$Type): $LongPredicate
 "negate"(): $LongPredicate$0
 "and"(arg0: $LongPredicate$0$$Type): $LongPredicate$0
 "and"(arg0: $LongPredicate$$Type): $LongPredicate
/**
 * 
 * @deprecated
 */
 "and"(arg0: $Predicate$$Type<(long)>): $Predicate<(long)>
static "not"<T>(arg0: $Predicate$$Type<(long)>): $Predicate<(long)>
static "isEqual"<T>(arg0: any): $Predicate<(long)>
 "test"(arg0: long): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongPredicate$$Type = ((arg0: long) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LongPredicate$$Original = $LongPredicate;}
declare module "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction" {
import {$Float2ReferenceFunction} from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import {$Object2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import {$Reference2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import {$Long2IntFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import {$Short2IntFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import {$Int2FloatFunction} from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import {$Byte2IntFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"
import {$IntFunction$$Interface} from "java.util.function.IntFunction"
import {$Reference2ShortFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import {$Float2IntFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import {$Reference2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import {$Int2CharFunction} from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import {$Double2ReferenceFunction} from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import {$Reference2ByteFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import {$Byte2ReferenceFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import {$Int2ObjectFunction} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$Int2IntFunction, $Int2IntFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Int2DoubleFunction} from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import {$Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ReferenceFunction"
import {$Reference2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Int2ShortFunction} from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import {$Short2ReferenceFunction} from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import {$Long2ReferenceFunction} from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import {$Reference2FloatFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import {$Int2LongFunction} from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import {$Reference2CharFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import {$Object2ReferenceFunction} from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import {$Char2IntFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import {$Char2ReferenceFunction} from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import {$Double2IntFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import {$Reference2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import {$Int2ByteFunction} from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"

export interface $Int2ReferenceFunction$$Interface<V> extends $Function$0$$Interface<(integer), (V)>, $IntFunction$$Interface<(V)> {

(arg0: integer): V
}

export class $Int2ReferenceFunction<V> implements $Int2ReferenceFunction$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): V
 "remove"(arg0: integer): V
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): V
 "get"(arg0: integer): V
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "put"(arg0: integer, arg1: V): V
 "put"(arg0: integer, arg1: V): V
 "apply"(arg0: integer): V
 "containsKey"(arg0: integer): boolean
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "getOrDefault"(arg0: integer, arg1: V): V
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: V): V
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (integer)>): $Function<(T), (V)>
 "andThenFloat"(arg0: $Reference2FloatFunction$$Type<(V)>): $Int2FloatFunction
 "andThenObject"<T>(arg0: $Reference2ObjectFunction$$Type<(V), (T)>): $Int2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2IntFunction$$Type): $Byte2ReferenceFunction<(V)>
 "andThenLong"(arg0: $Reference2LongFunction$$Type<(V)>): $Int2LongFunction
 "defaultReturnValue"(): V
 "defaultReturnValue"(arg0: V): void
 "composeLong"(arg0: $Long2IntFunction$$Type): $Long2ReferenceFunction<(V)>
 "andThenChar"(arg0: $Reference2CharFunction$$Type<(V)>): $Int2CharFunction
 "andThenDouble"(arg0: $Reference2DoubleFunction$$Type<(V)>): $Int2DoubleFunction
 "composeObject"<T>(arg0: $Object2IntFunction$$Type<(T)>): $Object2ReferenceFunction<(T), (V)>
 "composeChar"(arg0: $Char2IntFunction$$Type): $Char2ReferenceFunction<(V)>
 "composeReference"<T>(arg0: $Reference2IntFunction$$Type<(T)>): $Reference2ReferenceFunction<(T), (V)>
 "andThenShort"(arg0: $Reference2ShortFunction$$Type<(V)>): $Int2ShortFunction
 "composeShort"(arg0: $Short2IntFunction$$Type): $Short2ReferenceFunction<(V)>
 "composeFloat"(arg0: $Float2IntFunction$$Type): $Float2ReferenceFunction<(V)>
 "andThenReference"<T>(arg0: $Reference2ReferenceFunction$$Type<(V), (T)>): $Int2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2IntFunction$$Type): $Double2ReferenceFunction<(V)>
 "andThenByte"(arg0: $Reference2ByteFunction$$Type<(V)>): $Int2ByteFunction
 "composeInt"(arg0: $Int2IntFunction$$Type): $Int2ReferenceFunction<(V)>
 "andThenInt"(arg0: $Reference2IntFunction$$Type<(V)>): $Int2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: integer): V
static "identity"<T>(): $Function<(integer), (integer)>
 "andThen"<V>(arg0: $Function$$Type<(V), (V)>): $Function<(integer), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Int2ReferenceFunction$$Type<V> = ((arg0: integer) => V);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Int2ReferenceFunction$$Original<V> = $Int2ReferenceFunction<(V)>;}
declare module "it.unimi.dsi.fastutil.shorts.Short2FloatFunction" {
import {$Float2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import {$Float2ByteFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import {$Short2IntFunction} from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import {$Int2FloatFunction} from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import {$Reference2ShortFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import {$Float2IntFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import {$Double2FloatFunction} from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import {$Long2ShortFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import {$Short2CharFunction} from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import {$Char2ShortFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Object2FloatFunction} from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import {$Short2ShortFunction, $Short2ShortFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ShortFunction"
import {$IntToDoubleFunction$$Interface} from "java.util.function.IntToDoubleFunction"
import {$Byte2ShortFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import {$Float2CharFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import {$Short2DoubleFunction} from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Int2ShortFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import {$Float2LongFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import {$Short2ReferenceFunction} from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import {$Float2ShortFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import {$Reference2FloatFunction} from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import {$Float2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import {$Short2LongFunction} from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import {$Float2FloatFunction, $Float2FloatFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2FloatFunction"
import {$Short2ObjectFunction} from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import {$Object2ShortFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import {$Char2FloatFunction} from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import {$Long2FloatFunction} from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import {$Byte2FloatFunction} from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import {$Short2ByteFunction} from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import {$Float2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import {$Double2ShortFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"

export interface $Short2FloatFunction$$Interface extends $Function$0$$Interface<(short), (float)>, $IntToDoubleFunction$$Interface {

(arg0: short): float
}

export class $Short2FloatFunction implements $Short2FloatFunction$$Interface {
 "remove"(arg0: short): float
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): float
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): float
 "get"(arg0: short): float
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: short, arg1: float): float
/**
 * 
 * @deprecated
 */
 "put"(arg0: short, arg1: float): float
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "containsKey"(arg0: short): boolean
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: float): float
 "getOrDefault"(arg0: short, arg1: float): float
/**
 * 
 * @deprecated
 */
 "applyAsDouble"(arg0: integer): double
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (short)>): $Function<(T), (float)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(float), (T)>): $Function<(short), (T)>
 "andThenFloat"(arg0: $Float2FloatFunction$$Type): $Short2FloatFunction
 "andThenObject"<T>(arg0: $Float2ObjectFunction$$Type<(T)>): $Short2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2ShortFunction$$Type): $Byte2FloatFunction
 "andThenLong"(arg0: $Float2LongFunction$$Type): $Short2LongFunction
 "defaultReturnValue"(): float
 "defaultReturnValue"(arg0: float): void
 "composeLong"(arg0: $Long2ShortFunction$$Type): $Long2FloatFunction
 "andThenChar"(arg0: $Float2CharFunction$$Type): $Short2CharFunction
 "andThenDouble"(arg0: $Float2DoubleFunction$$Type): $Short2DoubleFunction
 "composeObject"<T>(arg0: $Object2ShortFunction$$Type<(T)>): $Object2FloatFunction<(T)>
 "composeChar"(arg0: $Char2ShortFunction$$Type): $Char2FloatFunction
 "composeReference"<T>(arg0: $Reference2ShortFunction$$Type<(T)>): $Reference2FloatFunction<(T)>
 "andThenShort"(arg0: $Float2ShortFunction$$Type): $Short2ShortFunction
 "composeShort"(arg0: $Short2ShortFunction$$Type): $Short2FloatFunction
 "composeFloat"(arg0: $Float2ShortFunction$$Type): $Float2FloatFunction
 "andThenReference"<T>(arg0: $Float2ReferenceFunction$$Type<(T)>): $Short2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2ShortFunction$$Type): $Double2FloatFunction
 "andThenByte"(arg0: $Float2ByteFunction$$Type): $Short2ByteFunction
 "composeInt"(arg0: $Int2ShortFunction$$Type): $Int2FloatFunction
 "andThenInt"(arg0: $Float2IntFunction$$Type): $Short2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: short): float
static "identity"<T>(): $Function<(short), (short)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Short2FloatFunction$$Type = ((arg0: short) => float);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Short2FloatFunction$$Original = $Short2FloatFunction;}
declare module "it.unimi.dsi.fastutil.bytes.Byte2IntFunction" {
import {$Byte2ByteFunction, $Byte2ByteFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction"
import {$Float2ByteFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import {$Byte2DoubleFunction} from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import {$Object2IntFunction} from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import {$Reference2IntFunction} from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import {$Long2IntFunction} from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import {$Long2ByteFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import {$Short2IntFunction} from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import {$Int2FloatFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import {$Float2IntFunction} from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import {$Int2CharFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import {$Int2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import {$Reference2ByteFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import {$Byte2ReferenceFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import {$Int2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$Int2IntFunction, $Int2IntFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Byte2ObjectFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import {$Byte2ShortFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import {$Int2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import {$Byte2CharFunction} from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Int2ShortFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import {$Object2ByteFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import {$Byte2LongFunction} from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import {$IntUnaryOperator, $IntUnaryOperator$$Type, $IntUnaryOperator$$Interface} from "java.util.function.IntUnaryOperator"
import {$Char2ByteFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import {$Double2ByteFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import {$Int2LongFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import {$Char2IntFunction} from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import {$Double2IntFunction} from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import {$Byte2FloatFunction} from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import {$Short2ByteFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import {$Int2ByteFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"

export interface $Byte2IntFunction$$Interface extends $Function$0$$Interface<(byte), (integer)>, $IntUnaryOperator$$Interface {

(arg0: byte): integer
}

export class $Byte2IntFunction implements $Byte2IntFunction$$Interface {
 "remove"(arg0: byte): integer
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): integer
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): integer
 "get"(arg0: byte): integer
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: byte, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "put"(arg0: byte, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "containsKey"(arg0: byte): boolean
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: integer): integer
 "getOrDefault"(arg0: byte, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "applyAsInt"(arg0: integer): integer
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (byte)>): $Function<(T), (integer)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(integer), (T)>): $Function<(byte), (T)>
 "andThenFloat"(arg0: $Int2FloatFunction$$Type): $Byte2FloatFunction
 "andThenObject"<T>(arg0: $Int2ObjectFunction$$Type<(T)>): $Byte2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2ByteFunction$$Type): $Byte2IntFunction
 "andThenLong"(arg0: $Int2LongFunction$$Type): $Byte2LongFunction
 "defaultReturnValue"(): integer
 "defaultReturnValue"(arg0: integer): void
 "composeLong"(arg0: $Long2ByteFunction$$Type): $Long2IntFunction
 "andThenChar"(arg0: $Int2CharFunction$$Type): $Byte2CharFunction
 "andThenDouble"(arg0: $Int2DoubleFunction$$Type): $Byte2DoubleFunction
 "composeObject"<T>(arg0: $Object2ByteFunction$$Type<(T)>): $Object2IntFunction<(T)>
 "composeChar"(arg0: $Char2ByteFunction$$Type): $Char2IntFunction
 "composeReference"<T>(arg0: $Reference2ByteFunction$$Type<(T)>): $Reference2IntFunction<(T)>
 "andThenShort"(arg0: $Int2ShortFunction$$Type): $Byte2ShortFunction
 "composeShort"(arg0: $Short2ByteFunction$$Type): $Short2IntFunction
 "composeFloat"(arg0: $Float2ByteFunction$$Type): $Float2IntFunction
 "andThenReference"<T>(arg0: $Int2ReferenceFunction$$Type<(T)>): $Byte2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2ByteFunction$$Type): $Double2IntFunction
 "andThenByte"(arg0: $Int2ByteFunction$$Type): $Byte2ByteFunction
 "composeInt"(arg0: $Int2ByteFunction$$Type): $Int2IntFunction
 "andThenInt"(arg0: $Int2IntFunction$$Type): $Byte2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: byte): integer
static "identity"(): $IntUnaryOperator
 "compose"(arg0: $IntUnaryOperator$$Type): $IntUnaryOperator
 "andThen"(arg0: $IntUnaryOperator$$Type): $IntUnaryOperator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Byte2IntFunction$$Type = ((arg0: byte) => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Byte2IntFunction$$Original = $Byte2IntFunction;}
declare module "it.unimi.dsi.fastutil.BidirectionalIterator" {
import {$Iterator$$Interface} from "java.util.Iterator"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $BidirectionalIterator$$Interface<K> extends $Iterator$$Interface<(K)> {
}

export class $BidirectionalIterator<K> implements $BidirectionalIterator$$Interface {
 "hasPrevious"(): boolean
 "previous"(): K
 "remove"(): void
 "forEachRemaining"(arg0: $Consumer$$Type<(K)>): void
 "hasNext"(): boolean
 "next"(): K
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BidirectionalIterator$$Type<K> = ($BidirectionalIterator<(K)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BidirectionalIterator$$Original<K> = $BidirectionalIterator<(K)>;}
declare module "it.unimi.dsi.fastutil.chars.Char2IntFunction" {
import {$Char2DoubleFunction} from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import {$Object2IntFunction} from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import {$Long2CharFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import {$Reference2IntFunction} from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import {$Long2IntFunction} from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import {$Short2IntFunction} from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import {$Int2FloatFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import {$Byte2IntFunction} from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"
import {$Float2IntFunction} from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import {$Int2CharFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import {$Short2CharFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import {$Int2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import {$Int2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$Char2ObjectFunction} from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import {$Char2ShortFunction} from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import {$Int2IntFunction, $Int2IntFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Float2CharFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import {$Int2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import {$Byte2CharFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import {$Object2CharFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Int2ShortFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import {$Char2CharFunction, $Char2CharFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2CharFunction"
import {$Double2CharFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import {$Char2LongFunction} from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import {$IntUnaryOperator, $IntUnaryOperator$$Type, $IntUnaryOperator$$Interface} from "java.util.function.IntUnaryOperator"
import {$Char2ByteFunction} from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import {$Int2LongFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import {$Reference2CharFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import {$Char2ReferenceFunction} from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import {$Char2FloatFunction} from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import {$Double2IntFunction} from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import {$Int2ByteFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"

export interface $Char2IntFunction$$Interface extends $Function$0$$Interface<(character), (integer)>, $IntUnaryOperator$$Interface {

(arg0: character): integer
}

export class $Char2IntFunction implements $Char2IntFunction$$Interface {
 "remove"(arg0: character): integer
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): integer
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): integer
 "get"(arg0: character): integer
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: character, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "put"(arg0: character, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "containsKey"(arg0: character): boolean
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: integer): integer
 "getOrDefault"(arg0: character, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "applyAsInt"(arg0: integer): integer
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (character)>): $Function<(T), (integer)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(integer), (T)>): $Function<(character), (T)>
 "andThenFloat"(arg0: $Int2FloatFunction$$Type): $Char2FloatFunction
 "andThenObject"<T>(arg0: $Int2ObjectFunction$$Type<(T)>): $Char2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2CharFunction$$Type): $Byte2IntFunction
 "andThenLong"(arg0: $Int2LongFunction$$Type): $Char2LongFunction
 "defaultReturnValue"(): integer
 "defaultReturnValue"(arg0: integer): void
 "composeLong"(arg0: $Long2CharFunction$$Type): $Long2IntFunction
 "andThenChar"(arg0: $Int2CharFunction$$Type): $Char2CharFunction
 "andThenDouble"(arg0: $Int2DoubleFunction$$Type): $Char2DoubleFunction
 "composeObject"<T>(arg0: $Object2CharFunction$$Type<(T)>): $Object2IntFunction<(T)>
 "composeChar"(arg0: $Char2CharFunction$$Type): $Char2IntFunction
 "composeReference"<T>(arg0: $Reference2CharFunction$$Type<(T)>): $Reference2IntFunction<(T)>
 "andThenShort"(arg0: $Int2ShortFunction$$Type): $Char2ShortFunction
 "composeShort"(arg0: $Short2CharFunction$$Type): $Short2IntFunction
 "composeFloat"(arg0: $Float2CharFunction$$Type): $Float2IntFunction
 "andThenReference"<T>(arg0: $Int2ReferenceFunction$$Type<(T)>): $Char2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2CharFunction$$Type): $Double2IntFunction
 "andThenByte"(arg0: $Int2ByteFunction$$Type): $Char2ByteFunction
 "composeInt"(arg0: $Int2CharFunction$$Type): $Int2IntFunction
 "andThenInt"(arg0: $Int2IntFunction$$Type): $Char2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: character): integer
static "identity"(): $IntUnaryOperator
 "compose"(arg0: $IntUnaryOperator$$Type): $IntUnaryOperator
 "andThen"(arg0: $IntUnaryOperator$$Type): $IntUnaryOperator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Char2IntFunction$$Type = ((arg0: character) => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Char2IntFunction$$Original = $Char2IntFunction;}
declare module "it.unimi.dsi.fastutil.objects.ReferenceCollection" {
import {$Iterator} from "java.util.Iterator"
import {$ObjectSpliterator} from "it.unimi.dsi.fastutil.objects.ObjectSpliterator"
import {$Collection$$Type, $Collection$$Interface} from "java.util.Collection"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$ObjectIterable$$Interface} from "it.unimi.dsi.fastutil.objects.ObjectIterable"
import {$Stream} from "java.util.stream.Stream"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$IntFunction$$Type} from "java.util.function.IntFunction"

export interface $ReferenceCollection$$Interface<K> extends $Collection$$Interface<(K)>, $ObjectIterable$$Interface<(K)> {
get "empty"(): boolean
}

export class $ReferenceCollection<K> implements $ReferenceCollection$$Interface {
 "iterator"(): $Iterator
 "spliterator"(): $ObjectSpliterator<(K)>
 "remove"(arg0: any): boolean
 "size"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "add"(arg0: K): boolean
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "toArray"(): (any)[]
 "stream"(): $Stream<(K)>
 "contains"(arg0: any): boolean
 "addAll"(arg0: $Collection$$Type<(K)>): boolean
 "removeIf"(arg0: $Predicate$$Type<(K)>): boolean
 "removeAll"(arg0: $Collection$$Type<(never)>): boolean
 "retainAll"(arg0: $Collection$$Type<(never)>): boolean
 "containsAll"(arg0: $Collection$$Type<(never)>): boolean
 "parallelStream"(): $Stream<(K)>
 "forEach"(arg0: $Consumer$$Type<(K)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReferenceCollection$$Type<K> = ($ReferenceCollection<(K)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReferenceCollection$$Original<K> = $ReferenceCollection<(K)>;}
declare module "it.unimi.dsi.fastutil.objects.AbstractReferenceCollection" {
import {$ObjectSpliterator} from "it.unimi.dsi.fastutil.objects.ObjectSpliterator"
import {$ObjectIterator} from "it.unimi.dsi.fastutil.objects.ObjectIterator"
import {$ReferenceCollection$$Interface} from "it.unimi.dsi.fastutil.objects.ReferenceCollection"
import {$AbstractCollection} from "java.util.AbstractCollection"

export class $AbstractReferenceCollection<K> extends $AbstractCollection<(K)> implements $ReferenceCollection$$Interface<(K)> {
public "toString"(): StringJS
public "iterator"(): $ObjectIterator<(K)>
public "spliterator"(): $ObjectSpliterator<(K)>
public "equals"(arg0: any): boolean
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractReferenceCollection$$Type<K> = ($AbstractReferenceCollection<(K)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractReferenceCollection$$Original<K> = $AbstractReferenceCollection<(K)>;}
declare module "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction" {
import {$Float2ByteFunction} from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import {$Reference2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import {$Int2FloatFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import {$Reference2ShortFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import {$Float2IntFunction} from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import {$Reference2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import {$Double2FloatFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import {$Double2ReferenceFunction} from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import {$Int2ReferenceFunction} from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import {$Reference2ByteFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import {$Byte2ReferenceFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Object2FloatFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import {$Float2CharFunction} from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import {$Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ReferenceFunction"
import {$Reference2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Float2LongFunction} from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import {$Float2ShortFunction} from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import {$Short2ReferenceFunction} from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import {$Long2ReferenceFunction} from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import {$Reference2FloatFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import {$Float2ObjectFunction} from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import {$Float2FloatFunction, $Float2FloatFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2FloatFunction"
import {$Reference2CharFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import {$Object2ReferenceFunction} from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import {$Char2ReferenceFunction} from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import {$Long2FloatFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import {$Char2FloatFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import {$Short2FloatFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import {$Reference2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import {$DoubleFunction$$Interface} from "java.util.function.DoubleFunction"
import {$Byte2FloatFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import {$Float2DoubleFunction} from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"

export interface $Float2ReferenceFunction$$Interface<V> extends $Function$0$$Interface<(float), (V)>, $DoubleFunction$$Interface<(V)> {

(arg0: float): V
}

export class $Float2ReferenceFunction<V> implements $Float2ReferenceFunction$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): V
 "remove"(arg0: float): V
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): V
 "get"(arg0: float): V
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "put"(arg0: float, arg1: V): V
 "put"(arg0: float, arg1: V): V
/**
 * 
 * @deprecated
 */
 "apply"(arg0: double): V
 "containsKey"(arg0: float): boolean
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "getOrDefault"(arg0: float, arg1: V): V
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: V): V
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (float)>): $Function<(T), (V)>
 "andThenFloat"(arg0: $Reference2FloatFunction$$Type<(V)>): $Float2FloatFunction
 "andThenObject"<T>(arg0: $Reference2ObjectFunction$$Type<(V), (T)>): $Float2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2FloatFunction$$Type): $Byte2ReferenceFunction<(V)>
 "andThenLong"(arg0: $Reference2LongFunction$$Type<(V)>): $Float2LongFunction
 "defaultReturnValue"(): V
 "defaultReturnValue"(arg0: V): void
 "composeLong"(arg0: $Long2FloatFunction$$Type): $Long2ReferenceFunction<(V)>
 "andThenChar"(arg0: $Reference2CharFunction$$Type<(V)>): $Float2CharFunction
 "andThenDouble"(arg0: $Reference2DoubleFunction$$Type<(V)>): $Float2DoubleFunction
 "composeObject"<T>(arg0: $Object2FloatFunction$$Type<(T)>): $Object2ReferenceFunction<(T), (V)>
 "composeChar"(arg0: $Char2FloatFunction$$Type): $Char2ReferenceFunction<(V)>
 "composeReference"<T>(arg0: $Reference2FloatFunction$$Type<(T)>): $Reference2ReferenceFunction<(T), (V)>
 "andThenShort"(arg0: $Reference2ShortFunction$$Type<(V)>): $Float2ShortFunction
 "composeShort"(arg0: $Short2FloatFunction$$Type): $Short2ReferenceFunction<(V)>
 "composeFloat"(arg0: $Float2FloatFunction$$Type): $Float2ReferenceFunction<(V)>
 "andThenReference"<T>(arg0: $Reference2ReferenceFunction$$Type<(V), (T)>): $Float2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2FloatFunction$$Type): $Double2ReferenceFunction<(V)>
 "andThenByte"(arg0: $Reference2ByteFunction$$Type<(V)>): $Float2ByteFunction
 "composeInt"(arg0: $Int2FloatFunction$$Type): $Int2ReferenceFunction<(V)>
 "andThenInt"(arg0: $Reference2IntFunction$$Type<(V)>): $Float2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: float): V
static "identity"<T>(): $Function<(float), (float)>
 "andThen"<V>(arg0: $Function$$Type<(V), (V)>): $Function<(float), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Float2ReferenceFunction$$Type<V> = ((arg0: float) => V);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Float2ReferenceFunction$$Original<V> = $Float2ReferenceFunction<(V)>;}
declare module "it.unimi.dsi.fastutil.ints.Int2IntFunction" {
import {$Object2IntFunction, $Object2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Reference2IntFunction, $Reference2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import {$Long2IntFunction, $Long2IntFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import {$Int2ShortFunction, $Int2ShortFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import {$Short2IntFunction, $Short2IntFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import {$Int2FloatFunction, $Int2FloatFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import {$Byte2IntFunction, $Byte2IntFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"
import {$Float2IntFunction, $Float2IntFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import {$Int2CharFunction, $Int2CharFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import {$IntUnaryOperator, $IntUnaryOperator$$Type, $IntUnaryOperator$$Interface} from "java.util.function.IntUnaryOperator"
import {$Int2ReferenceFunction, $Int2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import {$Int2ObjectFunction, $Int2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$Int2LongFunction, $Int2LongFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import {$Char2IntFunction, $Char2IntFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Double2IntFunction, $Double2IntFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import {$Int2DoubleFunction, $Int2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import {$Int2ByteFunction, $Int2ByteFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"

export interface $Int2IntFunction$$Interface extends $Function$0$$Interface<(integer), (integer)>, $IntUnaryOperator$$Interface {

(arg0: integer): integer
}

export class $Int2IntFunction implements $Int2IntFunction$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): any
 "remove"(arg0: integer): integer
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): integer
 "get"(arg0: integer): integer
/**
 * 
 * @deprecated
 */
 "put"(arg0: integer, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: integer, arg1: integer): integer
static "identity"(): $Int2IntFunction
 "containsKey"(arg0: integer): boolean
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "getOrDefault"(arg0: integer, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
 "applyAsInt"(arg0: integer): integer
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (integer)>): $Function<(T), (integer)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(integer), (T)>): $Function<(integer), (T)>
 "andThenFloat"(arg0: $Int2FloatFunction$$Type): $Int2FloatFunction
 "andThenObject"<T>(arg0: $Int2ObjectFunction$$Type<(T)>): $Int2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2IntFunction$$Type): $Byte2IntFunction
 "andThenLong"(arg0: $Int2LongFunction$$Type): $Int2LongFunction
 "defaultReturnValue"(): integer
 "defaultReturnValue"(arg0: integer): void
 "composeLong"(arg0: $Long2IntFunction$$Type): $Long2IntFunction
 "andThenChar"(arg0: $Int2CharFunction$$Type): $Int2CharFunction
 "andThenDouble"(arg0: $Int2DoubleFunction$$Type): $Int2DoubleFunction
 "composeObject"<T>(arg0: $Object2IntFunction$$Type<(T)>): $Object2IntFunction<(T)>
 "composeChar"(arg0: $Char2IntFunction$$Type): $Char2IntFunction
 "composeReference"<T>(arg0: $Reference2IntFunction$$Type<(T)>): $Reference2IntFunction<(T)>
 "andThenShort"(arg0: $Int2ShortFunction$$Type): $Int2ShortFunction
 "composeShort"(arg0: $Short2IntFunction$$Type): $Short2IntFunction
 "composeFloat"(arg0: $Float2IntFunction$$Type): $Float2IntFunction
 "andThenReference"<T>(arg0: $Int2ReferenceFunction$$Type<(T)>): $Int2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2IntFunction$$Type): $Double2IntFunction
 "andThenByte"(arg0: $Int2ByteFunction$$Type): $Int2ByteFunction
 "composeInt"(arg0: $Int2IntFunction$$Type): $Int2IntFunction
 "andThenInt"(arg0: $Int2IntFunction$$Type): $Int2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: integer): integer
 "compose"(arg0: $IntUnaryOperator$$Type): $IntUnaryOperator
 "andThen"(arg0: $IntUnaryOperator$$Type): $IntUnaryOperator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Int2IntFunction$$Type = ((arg0: integer) => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Int2IntFunction$$Original = $Int2IntFunction;}
declare module "it.unimi.dsi.fastutil.floats.Float2CharFunction" {
import {$Char2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import {$Float2ReferenceFunction} from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import {$Float2ByteFunction} from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import {$Long2CharFunction} from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import {$Int2FloatFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import {$Float2IntFunction} from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import {$Int2CharFunction} from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import {$Double2FloatFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import {$Short2CharFunction} from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import {$Char2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import {$Char2ShortFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Object2FloatFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import {$Byte2CharFunction} from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import {$Object2CharFunction} from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Float2LongFunction} from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import {$Float2ShortFunction} from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import {$Double2CharFunction} from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import {$Char2CharFunction, $Char2CharFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2CharFunction"
import {$Reference2FloatFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import {$Char2LongFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import {$Float2ObjectFunction} from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import {$Float2FloatFunction, $Float2FloatFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2FloatFunction"
import {$Char2ByteFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import {$Reference2CharFunction} from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import {$DoubleToIntFunction$$Interface} from "java.util.function.DoubleToIntFunction"
import {$Char2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import {$Char2IntFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import {$Long2FloatFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import {$Char2FloatFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import {$Short2FloatFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import {$Byte2FloatFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import {$Float2DoubleFunction} from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"

export interface $Float2CharFunction$$Interface extends $Function$0$$Interface<(float), (character)>, $DoubleToIntFunction$$Interface {

(arg0: float): character
}

export class $Float2CharFunction implements $Float2CharFunction$$Interface {
 "remove"(arg0: float): character
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): character
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): character
 "get"(arg0: float): character
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: float, arg1: character): character
/**
 * 
 * @deprecated
 */
 "put"(arg0: float, arg1: character): character
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "containsKey"(arg0: float): boolean
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: character): character
 "getOrDefault"(arg0: float, arg1: character): character
/**
 * 
 * @deprecated
 */
 "applyAsInt"(arg0: double): integer
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (float)>): $Function<(T), (character)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(character), (T)>): $Function<(float), (T)>
 "andThenFloat"(arg0: $Char2FloatFunction$$Type): $Float2FloatFunction
 "andThenObject"<T>(arg0: $Char2ObjectFunction$$Type<(T)>): $Float2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2FloatFunction$$Type): $Byte2CharFunction
 "andThenLong"(arg0: $Char2LongFunction$$Type): $Float2LongFunction
 "defaultReturnValue"(): character
 "defaultReturnValue"(arg0: character): void
 "composeLong"(arg0: $Long2FloatFunction$$Type): $Long2CharFunction
 "andThenChar"(arg0: $Char2CharFunction$$Type): $Float2CharFunction
 "andThenDouble"(arg0: $Char2DoubleFunction$$Type): $Float2DoubleFunction
 "composeObject"<T>(arg0: $Object2FloatFunction$$Type<(T)>): $Object2CharFunction<(T)>
 "composeChar"(arg0: $Char2FloatFunction$$Type): $Char2CharFunction
 "composeReference"<T>(arg0: $Reference2FloatFunction$$Type<(T)>): $Reference2CharFunction<(T)>
 "andThenShort"(arg0: $Char2ShortFunction$$Type): $Float2ShortFunction
 "composeShort"(arg0: $Short2FloatFunction$$Type): $Short2CharFunction
 "composeFloat"(arg0: $Float2FloatFunction$$Type): $Float2CharFunction
 "andThenReference"<T>(arg0: $Char2ReferenceFunction$$Type<(T)>): $Float2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2FloatFunction$$Type): $Double2CharFunction
 "andThenByte"(arg0: $Char2ByteFunction$$Type): $Float2ByteFunction
 "composeInt"(arg0: $Int2FloatFunction$$Type): $Int2CharFunction
 "andThenInt"(arg0: $Char2IntFunction$$Type): $Float2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: float): character
static "identity"<T>(): $Function<(float), (float)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Float2CharFunction$$Type = ((arg0: float) => character);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Float2CharFunction$$Original = $Float2CharFunction;}
declare module "it.unimi.dsi.fastutil.objects.ObjectSpliterator" {
import {$Comparator} from "java.util.Comparator"
import {$Spliterator, $Spliterator$$Interface} from "java.util.Spliterator"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $ObjectSpliterator$$Interface<K> extends $Spliterator$$Interface<(K)> {
get "exactSizeIfKnown"(): long
get "comparator"(): $Comparator<(K)>
}

export class $ObjectSpliterator<K> implements $ObjectSpliterator$$Interface {
 "skip"(arg0: long): long
 "trySplit"(): $Spliterator
 "forEachRemaining"(arg0: $Consumer$$Type<(K)>): void
 "characteristics"(): integer
 "tryAdvance"(arg0: $Consumer$$Type<(K)>): boolean
 "estimateSize"(): long
 "getExactSizeIfKnown"(): long
 "hasCharacteristics"(arg0: integer): boolean
 "getComparator"(): $Comparator<(K)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectSpliterator$$Type<K> = ($ObjectSpliterator<(K)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ObjectSpliterator$$Original<K> = $ObjectSpliterator<(K)>;}
declare module "it.unimi.dsi.fastutil.longs.AbstractLong2ReferenceFunction" {
import {$Float2ReferenceFunction} from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import {$Long2CharFunction} from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import {$Reference2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import {$Long2ByteFunction} from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import {$Long2IntFunction} from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import {$Reference2ShortFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import {$Reference2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import {$Long2ShortFunction} from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import {$Double2ReferenceFunction} from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import {$Int2ReferenceFunction} from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import {$Reference2ByteFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import {$Byte2ReferenceFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ReferenceFunction"
import {$Reference2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Long2DoubleFunction} from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import {$Long2LongFunction, $Long2LongFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import {$Float2LongFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import {$Short2ReferenceFunction} from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import {$Long2ReferenceFunction, $Long2ReferenceFunction$$Interface} from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import {$Byte2LongFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import {$Reference2FloatFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import {$Char2LongFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import {$Double2LongFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import {$Short2LongFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import {$Int2LongFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import {$Reference2CharFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Object2ReferenceFunction} from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import {$Char2ReferenceFunction} from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import {$Long2FloatFunction} from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import {$Object2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import {$Reference2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import {$Long2ObjectFunction} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"

export class $AbstractLong2ReferenceFunction<V> implements $Long2ReferenceFunction$$Interface<(V)>, $Serializable$$Interface {
public "defaultReturnValue"(arg0: V): void
public "defaultReturnValue"(): V
/**
 * 
 * @deprecated
 */
public "remove"(arg0: any): V
public "remove"(arg0: long): V
/**
 * 
 * @deprecated
 */
public "get"(arg0: any): V
public "get"(arg0: long): V
/**
 * 
 * @deprecated
 */
public "put"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
public "put"(arg0: long, arg1: V): V
public "put"(arg0: long, arg1: V): V
public "apply"(arg0: long): V
public "containsKey"(arg0: long): boolean
/**
 * 
 * @deprecated
 */
public "containsKey"(arg0: any): boolean
public "getOrDefault"(arg0: long, arg1: V): V
/**
 * 
 * @deprecated
 */
public "getOrDefault"(arg0: any, arg1: V): V
/**
 * 
 * @deprecated
 */
public "compose"<T>(arg0: $Function$$Type<(T), (long)>): $Function<(T), (V)>
public "andThenFloat"(arg0: $Reference2FloatFunction$$Type<(V)>): $Long2FloatFunction
public "andThenObject"<T>(arg0: $Reference2ObjectFunction$$Type<(V), (T)>): $Long2ObjectFunction<(T)>
public "composeByte"(arg0: $Byte2LongFunction$$Type): $Byte2ReferenceFunction<(V)>
public "andThenLong"(arg0: $Reference2LongFunction$$Type<(V)>): $Long2LongFunction
public "composeLong"(arg0: $Long2LongFunction$$Type): $Long2ReferenceFunction<(V)>
public "andThenChar"(arg0: $Reference2CharFunction$$Type<(V)>): $Long2CharFunction
public "andThenDouble"(arg0: $Reference2DoubleFunction$$Type<(V)>): $Long2DoubleFunction
public "composeObject"<T>(arg0: $Object2LongFunction$$Type<(T)>): $Object2ReferenceFunction<(T), (V)>
public "composeChar"(arg0: $Char2LongFunction$$Type): $Char2ReferenceFunction<(V)>
public "composeReference"<T>(arg0: $Reference2LongFunction$$Type<(T)>): $Reference2ReferenceFunction<(T), (V)>
public "andThenShort"(arg0: $Reference2ShortFunction$$Type<(V)>): $Long2ShortFunction
public "composeShort"(arg0: $Short2LongFunction$$Type): $Short2ReferenceFunction<(V)>
public "composeFloat"(arg0: $Float2LongFunction$$Type): $Float2ReferenceFunction<(V)>
public "andThenReference"<T>(arg0: $Reference2ReferenceFunction$$Type<(V), (T)>): $Long2ReferenceFunction<(T)>
public "composeDouble"(arg0: $Double2LongFunction$$Type): $Double2ReferenceFunction<(V)>
public "andThenByte"(arg0: $Reference2ByteFunction$$Type<(V)>): $Long2ByteFunction
public "composeInt"(arg0: $Int2LongFunction$$Type): $Int2ReferenceFunction<(V)>
public "andThenInt"(arg0: $Reference2IntFunction$$Type<(V)>): $Long2IntFunction
public "size"(): integer
public "clear"(): void
public "apply"(arg0: long): V
public static "identity"<T>(): $Function<(long), (long)>
public "andThen"<V>(arg0: $Function$$Type<(V), (V)>): $Function<(long), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractLong2ReferenceFunction$$Type<V> = ($AbstractLong2ReferenceFunction<(V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractLong2ReferenceFunction$$Original<V> = $AbstractLong2ReferenceFunction<(V)>;}
declare module "it.unimi.dsi.fastutil.longs.Long2IntFunction" {
import {$Object2IntFunction} from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import {$Long2CharFunction} from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import {$Reference2IntFunction} from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import {$Long2ByteFunction} from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import {$Short2IntFunction} from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import {$Int2FloatFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import {$Byte2IntFunction} from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"
import {$Float2IntFunction} from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import {$Reference2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import {$Int2CharFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import {$Long2ShortFunction} from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import {$Int2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import {$Int2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$Int2IntFunction, $Int2IntFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Int2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Long2DoubleFunction} from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import {$Long2LongFunction, $Long2LongFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import {$Int2ShortFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import {$Float2LongFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import {$LongToIntFunction$$Interface} from "java.util.function.LongToIntFunction"
import {$Long2ReferenceFunction} from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import {$Byte2LongFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import {$Char2LongFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import {$Double2LongFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import {$Short2LongFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import {$Int2LongFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import {$Char2IntFunction} from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import {$Long2FloatFunction} from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import {$Double2IntFunction} from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import {$Object2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import {$Int2ByteFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import {$Long2ObjectFunction} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"

export interface $Long2IntFunction$$Interface extends $Function$0$$Interface<(long), (integer)>, $LongToIntFunction$$Interface {

(arg0: long): integer
}

export class $Long2IntFunction implements $Long2IntFunction$$Interface {
 "remove"(arg0: long): integer
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): integer
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): integer
 "get"(arg0: long): integer
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: long, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "put"(arg0: long, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "containsKey"(arg0: long): boolean
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: integer): integer
 "getOrDefault"(arg0: long, arg1: integer): integer
 "applyAsInt"(arg0: long): integer
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (long)>): $Function<(T), (integer)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(integer), (T)>): $Function<(long), (T)>
 "andThenFloat"(arg0: $Int2FloatFunction$$Type): $Long2FloatFunction
 "andThenObject"<T>(arg0: $Int2ObjectFunction$$Type<(T)>): $Long2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2LongFunction$$Type): $Byte2IntFunction
 "andThenLong"(arg0: $Int2LongFunction$$Type): $Long2LongFunction
 "defaultReturnValue"(): integer
 "defaultReturnValue"(arg0: integer): void
 "composeLong"(arg0: $Long2LongFunction$$Type): $Long2IntFunction
 "andThenChar"(arg0: $Int2CharFunction$$Type): $Long2CharFunction
 "andThenDouble"(arg0: $Int2DoubleFunction$$Type): $Long2DoubleFunction
 "composeObject"<T>(arg0: $Object2LongFunction$$Type<(T)>): $Object2IntFunction<(T)>
 "composeChar"(arg0: $Char2LongFunction$$Type): $Char2IntFunction
 "composeReference"<T>(arg0: $Reference2LongFunction$$Type<(T)>): $Reference2IntFunction<(T)>
 "andThenShort"(arg0: $Int2ShortFunction$$Type): $Long2ShortFunction
 "composeShort"(arg0: $Short2LongFunction$$Type): $Short2IntFunction
 "composeFloat"(arg0: $Float2LongFunction$$Type): $Float2IntFunction
 "andThenReference"<T>(arg0: $Int2ReferenceFunction$$Type<(T)>): $Long2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2LongFunction$$Type): $Double2IntFunction
 "andThenByte"(arg0: $Int2ByteFunction$$Type): $Long2ByteFunction
 "composeInt"(arg0: $Int2LongFunction$$Type): $Int2IntFunction
 "andThenInt"(arg0: $Int2IntFunction$$Type): $Long2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: long): integer
static "identity"<T>(): $Function<(long), (long)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Long2IntFunction$$Type = ((arg0: long) => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Long2IntFunction$$Original = $Long2IntFunction;}
declare module "it.unimi.dsi.fastutil.doubles.DoubleDoubleImmutablePair" {
import {$Pair} from "it.unimi.dsi.fastutil.Pair"
import {$Comparator} from "java.util.Comparator"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$DoubleDoublePair, $DoubleDoublePair$$Interface} from "it.unimi.dsi.fastutil.doubles.DoubleDoublePair"

export class $DoubleDoubleImmutablePair implements $DoubleDoublePair$$Interface, $Serializable$$Interface {
constructor(arg0: double, arg1: double)

public "leftDouble"(): double
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"(arg0: double, arg1: double): $DoubleDoubleImmutablePair
public "rightDouble"(): double
/**
 * 
 * @deprecated
 */
public "value"(arg0: double): $DoubleDoublePair
/**
 * 
 * @deprecated
 */
public "value"(): any
/**
 * 
 * @deprecated
 */
public "value"(arg0: any): $Pair
public "value"(arg0: double): $DoubleDoublePair
/**
 * 
 * @deprecated
 */
public "first"(arg0: any): $Pair
/**
 * 
 * @deprecated
 */
public "first"(): any
/**
 * 
 * @deprecated
 */
public "first"(arg0: double): $DoubleDoublePair
public "first"(arg0: double): $DoubleDoublePair
/**
 * 
 * @deprecated
 */
public "second"(arg0: double): $DoubleDoublePair
public "second"(arg0: double): $DoubleDoublePair
/**
 * 
 * @deprecated
 */
public "second"(): double
/**
 * 
 * @deprecated
 */
public "second"(arg0: any): $Pair
/**
 * 
 * @deprecated
 */
public "key"(): any
/**
 * 
 * @deprecated
 */
public "key"(arg0: double): $DoubleDoublePair
public "key"(arg0: double): $DoubleDoublePair
/**
 * 
 * @deprecated
 */
public "key"(arg0: any): $Pair
/**
 * 
 * @deprecated
 */
public "left"(): any
/**
 * 
 * @deprecated
 */
public "left"(arg0: any): $Pair
/**
 * 
 * @deprecated
 */
public "left"(arg0: double): $DoubleDoublePair
public "left"(arg0: double): $DoubleDoublePair
/**
 * 
 * @deprecated
 */
public "right"(): any
public "right"(arg0: double): $DoubleDoublePair
/**
 * 
 * @deprecated
 */
public "right"(arg0: double): $DoubleDoublePair
/**
 * 
 * @deprecated
 */
public "right"(arg0: any): $Pair
public "valueDouble"(): double
public "secondDouble"(): double
public static "lexComparator"(): $Comparator<($DoubleDoublePair)>
public "firstDouble"(): double
public "keyDouble"(): double
public static "of"<L, R>(arg0: double, arg1: double): $Pair<(double), (double)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleDoubleImmutablePair$$Type = ($DoubleDoubleImmutablePair);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoubleDoubleImmutablePair$$Original = $DoubleDoubleImmutablePair;}
declare module "it.unimi.dsi.fastutil.objects.Reference2ObjectMap$Entry" {
import {$Comparable} from "java.lang.Comparable"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$Map$Entry, $Map$Entry$$Type, $Map$Entry$$Interface} from "java.util.Map$Entry"

export interface $Reference2ObjectMap$Entry$$Interface<K, V> extends $Map$Entry$$Interface<(K), (V)> {
get "value"(): V
get "key"(): K
set "value"(value: V)
}

export class $Reference2ObjectMap$Entry<K, V> implements $Reference2ObjectMap$Entry$$Interface {
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<K, V>(arg0: $Map$Entry$$Type<(K), (V)>): $Map$Entry<(K), (V)>
 "getValue"(): V
 "getKey"(): K
static "comparingByKey"<K, V>(arg0: $Comparator$$Type<(K)>): $Comparator<($Map$Entry<(K), (V)>)>
static "comparingByKey"<K extends $Comparable<(object)>, V>(): $Comparator<($Map$Entry<(K), (V)>)>
 "setValue"(arg0: V): V
static "comparingByValue"<K, V extends $Comparable<(object)>>(): $Comparator<($Map$Entry<(K), (V)>)>
static "comparingByValue"<K, V>(arg0: $Comparator$$Type<(V)>): $Comparator<($Map$Entry<(K), (V)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Reference2ObjectMap$Entry$$Type<K, V> = ($Reference2ObjectMap$Entry<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Reference2ObjectMap$Entry$$Original<K, V> = $Reference2ObjectMap$Entry<(K), (V)>;}
declare module "it.unimi.dsi.fastutil.longs.LongConsumer" {
import {$LongConsumer as $LongConsumer$0, $LongConsumer$$Type as $LongConsumer$0$$Type, $LongConsumer$$Interface as $LongConsumer$0$$Interface} from "java.util.function.LongConsumer"
import {$Consumer, $Consumer$$Type, $Consumer$$Interface} from "java.util.function.Consumer"

export interface $LongConsumer$$Interface extends $Consumer$$Interface<(long)>, $LongConsumer$0$$Interface {

(arg0: long): void
}

export class $LongConsumer implements $LongConsumer$$Interface {
/**
 * 
 * @deprecated
 */
 "accept"(arg0: any): void
/**
 * 
 * @deprecated
 */
 "accept"(arg0: long): void
 "andThen"(arg0: $LongConsumer$0$$Type): $LongConsumer$0
/**
 * 
 * @deprecated
 */
 "andThen"(arg0: $Consumer$$Type<(long)>): $Consumer<(long)>
 "andThen"(arg0: $LongConsumer$$Type): $LongConsumer
 "accept"(arg0: long): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongConsumer$$Type = ((arg0: long) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LongConsumer$$Original = $LongConsumer;}
declare module "it.unimi.dsi.fastutil.ints.Int2ByteFunction" {
import {$Byte2ByteFunction, $Byte2ByteFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction"
import {$Byte2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import {$Float2ByteFunction} from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import {$Object2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import {$Reference2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import {$Long2IntFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import {$Long2ByteFunction} from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import {$Short2IntFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import {$Int2FloatFunction} from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import {$Byte2IntFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"
import {$Float2IntFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import {$Int2CharFunction} from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import {$Int2ReferenceFunction} from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import {$Reference2ByteFunction} from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import {$Int2ObjectFunction} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$Byte2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import {$Int2IntFunction, $Int2IntFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Byte2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import {$Byte2ShortFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import {$Int2DoubleFunction} from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import {$Byte2CharFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Int2ShortFunction} from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import {$Object2ByteFunction} from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import {$Byte2LongFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import {$IntUnaryOperator, $IntUnaryOperator$$Type, $IntUnaryOperator$$Interface} from "java.util.function.IntUnaryOperator"
import {$Char2ByteFunction} from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import {$Double2ByteFunction} from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import {$Int2LongFunction} from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import {$Char2IntFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import {$Double2IntFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import {$Byte2FloatFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import {$Short2ByteFunction} from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"

export interface $Int2ByteFunction$$Interface extends $Function$0$$Interface<(integer), (byte)>, $IntUnaryOperator$$Interface {

(arg0: integer): byte
}

export class $Int2ByteFunction implements $Int2ByteFunction$$Interface {
 "remove"(arg0: integer): byte
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): byte
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): byte
 "get"(arg0: integer): byte
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: integer, arg1: byte): byte
/**
 * 
 * @deprecated
 */
 "put"(arg0: integer, arg1: byte): byte
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "containsKey"(arg0: integer): boolean
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: byte): byte
 "getOrDefault"(arg0: integer, arg1: byte): byte
 "applyAsInt"(arg0: integer): integer
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (integer)>): $Function<(T), (byte)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(byte), (T)>): $Function<(integer), (T)>
 "andThenFloat"(arg0: $Byte2FloatFunction$$Type): $Int2FloatFunction
 "andThenObject"<T>(arg0: $Byte2ObjectFunction$$Type<(T)>): $Int2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2IntFunction$$Type): $Byte2ByteFunction
 "andThenLong"(arg0: $Byte2LongFunction$$Type): $Int2LongFunction
 "defaultReturnValue"(): byte
 "defaultReturnValue"(arg0: byte): void
 "composeLong"(arg0: $Long2IntFunction$$Type): $Long2ByteFunction
 "andThenChar"(arg0: $Byte2CharFunction$$Type): $Int2CharFunction
 "andThenDouble"(arg0: $Byte2DoubleFunction$$Type): $Int2DoubleFunction
 "composeObject"<T>(arg0: $Object2IntFunction$$Type<(T)>): $Object2ByteFunction<(T)>
 "composeChar"(arg0: $Char2IntFunction$$Type): $Char2ByteFunction
 "composeReference"<T>(arg0: $Reference2IntFunction$$Type<(T)>): $Reference2ByteFunction<(T)>
 "andThenShort"(arg0: $Byte2ShortFunction$$Type): $Int2ShortFunction
 "composeShort"(arg0: $Short2IntFunction$$Type): $Short2ByteFunction
 "composeFloat"(arg0: $Float2IntFunction$$Type): $Float2ByteFunction
 "andThenReference"<T>(arg0: $Byte2ReferenceFunction$$Type<(T)>): $Int2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2IntFunction$$Type): $Double2ByteFunction
 "andThenByte"(arg0: $Byte2ByteFunction$$Type): $Int2ByteFunction
 "composeInt"(arg0: $Int2IntFunction$$Type): $Int2ByteFunction
 "andThenInt"(arg0: $Byte2IntFunction$$Type): $Int2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: integer): byte
static "identity"(): $IntUnaryOperator
 "compose"(arg0: $IntUnaryOperator$$Type): $IntUnaryOperator
 "andThen"(arg0: $IntUnaryOperator$$Type): $IntUnaryOperator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Int2ByteFunction$$Type = ((arg0: integer) => byte);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Int2ByteFunction$$Original = $Int2ByteFunction;}
declare module "it.unimi.dsi.fastutil.objects.Object2IntFunction" {
import {$Reference2IntFunction} from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import {$Long2IntFunction} from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import {$Object2ObjectFunction, $Object2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import {$Short2IntFunction} from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import {$Int2FloatFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import {$Byte2IntFunction} from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"
import {$Float2IntFunction} from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import {$Int2CharFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import {$Int2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import {$Int2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$Char2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import {$Object2DoubleFunction} from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import {$Int2IntFunction, $Int2IntFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Object2FloatFunction} from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import {$Byte2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import {$Int2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import {$Reference2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Object2CharFunction} from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Int2ShortFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import {$Object2ByteFunction} from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import {$ToIntFunction$$Interface} from "java.util.function.ToIntFunction"
import {$Float2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import {$Int2LongFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import {$Object2ShortFunction} from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import {$Object2ReferenceFunction} from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import {$Short2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import {$Char2IntFunction} from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import {$Double2IntFunction} from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import {$Object2LongFunction} from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import {$Double2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import {$Int2ByteFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import {$Long2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"

export interface $Object2IntFunction$$Interface<K> extends $Function$0$$Interface<(K), (integer)>, $ToIntFunction$$Interface<(K)> {

(arg0: any): integer
}

export class $Object2IntFunction<K> implements $Object2IntFunction$$Interface {
 "removeInt"(arg0: any): integer
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): integer
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): integer
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: K, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "put"(arg0: K, arg1: integer): integer
 "getInt"(arg0: any): integer
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: integer): integer
 "getOrDefault"(arg0: any, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
 "applyAsInt"(arg0: K): integer
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(integer), (T)>): $Function<(K), (T)>
 "andThenFloat"(arg0: $Int2FloatFunction$$Type): $Object2FloatFunction<(K)>
 "andThenObject"<T>(arg0: $Int2ObjectFunction$$Type<(T)>): $Object2ObjectFunction<(K), (T)>
 "composeByte"(arg0: $Byte2ObjectFunction$$Type<(K)>): $Byte2IntFunction
 "andThenLong"(arg0: $Int2LongFunction$$Type): $Object2LongFunction<(K)>
 "defaultReturnValue"(arg0: integer): void
 "defaultReturnValue"(): integer
 "composeLong"(arg0: $Long2ObjectFunction$$Type<(K)>): $Long2IntFunction
 "andThenChar"(arg0: $Int2CharFunction$$Type): $Object2CharFunction<(K)>
 "andThenDouble"(arg0: $Int2DoubleFunction$$Type): $Object2DoubleFunction<(K)>
 "composeObject"<T>(arg0: $Object2ObjectFunction$$Type<(T), (K)>): $Object2IntFunction<(T)>
 "composeChar"(arg0: $Char2ObjectFunction$$Type<(K)>): $Char2IntFunction
 "composeReference"<T>(arg0: $Reference2ObjectFunction$$Type<(T), (K)>): $Reference2IntFunction<(T)>
 "andThenShort"(arg0: $Int2ShortFunction$$Type): $Object2ShortFunction<(K)>
 "composeShort"(arg0: $Short2ObjectFunction$$Type<(K)>): $Short2IntFunction
 "composeFloat"(arg0: $Float2ObjectFunction$$Type<(K)>): $Float2IntFunction
 "andThenReference"<T>(arg0: $Int2ReferenceFunction$$Type<(T)>): $Object2ReferenceFunction<(K), (T)>
 "composeDouble"(arg0: $Double2ObjectFunction$$Type<(K)>): $Double2IntFunction
 "andThenByte"(arg0: $Int2ByteFunction$$Type): $Object2ByteFunction<(K)>
 "composeInt"(arg0: $Int2ObjectFunction$$Type<(K)>): $Int2IntFunction
 "andThenInt"(arg0: $Int2IntFunction$$Type): $Object2IntFunction<(K)>
 "size"(): integer
 "clear"(): void
 "apply"(arg0: K): integer
 "containsKey"(arg0: any): boolean
static "identity"<T>(): $Function<(K), (K)>
 "compose"<V>(arg0: $Function$$Type<(V), (K)>): $Function<(V), (integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Object2IntFunction$$Type<K> = ((arg0: any) => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Object2IntFunction$$Original<K> = $Object2IntFunction<(K)>;}
declare module "it.unimi.dsi.fastutil.objects.ObjectBidirectionalIterable" {
import {$ObjectBidirectionalIterator, $ObjectBidirectionalIterator$$Type} from "it.unimi.dsi.fastutil.objects.ObjectBidirectionalIterator"
import {$ObjectSpliterator} from "it.unimi.dsi.fastutil.objects.ObjectSpliterator"
import {$ObjectIterable$$Interface} from "it.unimi.dsi.fastutil.objects.ObjectIterable"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $ObjectBidirectionalIterable$$Interface<K> extends $ObjectIterable$$Interface<(K)> {

(): $ObjectBidirectionalIterator$$Type<(K)>
[Symbol.iterator](): IterableIterator<K>;
}

export class $ObjectBidirectionalIterable<K> implements $ObjectBidirectionalIterable$$Interface {
 "iterator"(): $ObjectBidirectionalIterator<(K)>
 "spliterator"(): $ObjectSpliterator<(K)>
 "forEach"(arg0: $Consumer$$Type<(K)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectBidirectionalIterable$$Type<K> = (() => $ObjectBidirectionalIterator$$Type<(K)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ObjectBidirectionalIterable$$Original<K> = $ObjectBidirectionalIterable<(K)>;}
declare module "it.unimi.dsi.fastutil.bytes.Byte2CharFunction" {
import {$Char2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import {$Byte2ByteFunction, $Byte2ByteFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction"
import {$Float2ByteFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import {$Byte2DoubleFunction} from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import {$Long2CharFunction} from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import {$Long2ByteFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import {$Byte2IntFunction} from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"
import {$Int2CharFunction} from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import {$Short2CharFunction} from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import {$Reference2ByteFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import {$Byte2ReferenceFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import {$Char2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import {$Char2ShortFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Byte2ObjectFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import {$Byte2ShortFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import {$Float2CharFunction} from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import {$Object2CharFunction} from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Object2ByteFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import {$Double2CharFunction} from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import {$Char2CharFunction, $Char2CharFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2CharFunction"
import {$Byte2LongFunction} from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import {$Char2LongFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import {$IntUnaryOperator, $IntUnaryOperator$$Type, $IntUnaryOperator$$Interface} from "java.util.function.IntUnaryOperator"
import {$Char2ByteFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import {$Double2ByteFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import {$Reference2CharFunction} from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import {$Char2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import {$Char2IntFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import {$Char2FloatFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import {$Byte2FloatFunction} from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import {$Short2ByteFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import {$Int2ByteFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"

export interface $Byte2CharFunction$$Interface extends $Function$0$$Interface<(byte), (character)>, $IntUnaryOperator$$Interface {

(arg0: byte): character
}

export class $Byte2CharFunction implements $Byte2CharFunction$$Interface {
 "remove"(arg0: byte): character
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): character
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): character
 "get"(arg0: byte): character
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: byte, arg1: character): character
/**
 * 
 * @deprecated
 */
 "put"(arg0: byte, arg1: character): character
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "containsKey"(arg0: byte): boolean
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: character): character
 "getOrDefault"(arg0: byte, arg1: character): character
/**
 * 
 * @deprecated
 */
 "applyAsInt"(arg0: integer): integer
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (byte)>): $Function<(T), (character)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(character), (T)>): $Function<(byte), (T)>
 "andThenFloat"(arg0: $Char2FloatFunction$$Type): $Byte2FloatFunction
 "andThenObject"<T>(arg0: $Char2ObjectFunction$$Type<(T)>): $Byte2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2ByteFunction$$Type): $Byte2CharFunction
 "andThenLong"(arg0: $Char2LongFunction$$Type): $Byte2LongFunction
 "defaultReturnValue"(): character
 "defaultReturnValue"(arg0: character): void
 "composeLong"(arg0: $Long2ByteFunction$$Type): $Long2CharFunction
 "andThenChar"(arg0: $Char2CharFunction$$Type): $Byte2CharFunction
 "andThenDouble"(arg0: $Char2DoubleFunction$$Type): $Byte2DoubleFunction
 "composeObject"<T>(arg0: $Object2ByteFunction$$Type<(T)>): $Object2CharFunction<(T)>
 "composeChar"(arg0: $Char2ByteFunction$$Type): $Char2CharFunction
 "composeReference"<T>(arg0: $Reference2ByteFunction$$Type<(T)>): $Reference2CharFunction<(T)>
 "andThenShort"(arg0: $Char2ShortFunction$$Type): $Byte2ShortFunction
 "composeShort"(arg0: $Short2ByteFunction$$Type): $Short2CharFunction
 "composeFloat"(arg0: $Float2ByteFunction$$Type): $Float2CharFunction
 "andThenReference"<T>(arg0: $Char2ReferenceFunction$$Type<(T)>): $Byte2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2ByteFunction$$Type): $Double2CharFunction
 "andThenByte"(arg0: $Char2ByteFunction$$Type): $Byte2ByteFunction
 "composeInt"(arg0: $Int2ByteFunction$$Type): $Int2CharFunction
 "andThenInt"(arg0: $Char2IntFunction$$Type): $Byte2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: byte): character
static "identity"(): $IntUnaryOperator
 "compose"(arg0: $IntUnaryOperator$$Type): $IntUnaryOperator
 "andThen"(arg0: $IntUnaryOperator$$Type): $IntUnaryOperator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Byte2CharFunction$$Type = ((arg0: byte) => character);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Byte2CharFunction$$Original = $Byte2CharFunction;}
declare module "it.unimi.dsi.fastutil.doubles.DoubleComparator" {
import {$ToIntFunction$$Type} from "java.util.function.ToIntFunction"
import {$ToLongFunction$$Type} from "java.util.function.ToLongFunction"
import {$ToDoubleFunction$$Type} from "java.util.function.ToDoubleFunction"
import {$Comparable} from "java.lang.Comparable"
import {$Comparator, $Comparator$$Type, $Comparator$$Interface} from "java.util.Comparator"
import {$Function$$Type} from "java.util.function.Function"

export interface $DoubleComparator$$Interface extends $Comparator$$Interface<(double)> {
}

export class $DoubleComparator implements $DoubleComparator$$Interface {
/**
 * 
 * @deprecated
 */
 "compare"(arg0: any, arg1: any): integer
/**
 * 
 * @deprecated
 */
 "compare"(arg0: double, arg1: double): integer
 "compare"(arg0: double, arg1: double): integer
 "reversed"(): $DoubleComparator
 "thenComparing"(arg0: $Comparator$$Type<(double)>): $Comparator<(double)>
 "thenComparing"(arg0: $DoubleComparator$$Type): $DoubleComparator
 "equals"(arg0: any): boolean
static "reverseOrder"<T extends $Comparable<(object)>>(): $Comparator<(double)>
static "comparing"<T, U extends $Comparable<(object)>>(arg0: $Function$$Type<(double), (U)>): $Comparator<(double)>
static "comparing"<T, U>(arg0: $Function$$Type<(double), (U)>, arg1: $Comparator$$Type<(U)>): $Comparator<(double)>
 "thenComparing"<U>(arg0: $Function$$Type<(double), (U)>, arg1: $Comparator$$Type<(U)>): $Comparator<(double)>
 "thenComparing"<U extends $Comparable<(object)>>(arg0: $Function$$Type<(double), (U)>): $Comparator<(double)>
static "comparingInt"<T>(arg0: $ToIntFunction$$Type<(double)>): $Comparator<(double)>
static "comparingLong"<T>(arg0: $ToLongFunction$$Type<(double)>): $Comparator<(double)>
static "comparingDouble"<T>(arg0: $ToDoubleFunction$$Type<(double)>): $Comparator<(double)>
 "thenComparingInt"(arg0: $ToIntFunction$$Type<(double)>): $Comparator<(double)>
 "thenComparingLong"(arg0: $ToLongFunction$$Type<(double)>): $Comparator<(double)>
 "thenComparingDouble"(arg0: $ToDoubleFunction$$Type<(double)>): $Comparator<(double)>
static "naturalOrder"<T extends $Comparable<(object)>>(): $Comparator<(double)>
static "nullsFirst"<T>(arg0: $Comparator$$Type<(double)>): $Comparator<(double)>
static "nullsLast"<T>(arg0: $Comparator$$Type<(double)>): $Comparator<(double)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleComparator$$Type = ($DoubleComparator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoubleComparator$$Original = $DoubleComparator;}
declare module "it.unimi.dsi.fastutil.objects.Object2DoubleFunction" {
import {$Char2DoubleFunction} from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import {$Byte2DoubleFunction} from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import {$ToDoubleFunction$$Interface} from "java.util.function.ToDoubleFunction"
import {$Object2IntFunction} from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import {$Object2ObjectFunction, $Object2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import {$Double2FloatFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import {$Double2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import {$Int2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$Char2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Object2FloatFunction} from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import {$Byte2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import {$Int2DoubleFunction} from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import {$Short2DoubleFunction} from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import {$Reference2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Double2DoubleFunction, $Double2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2DoubleFunction"
import {$Object2CharFunction} from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Long2DoubleFunction} from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import {$Object2ByteFunction} from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import {$Double2CharFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import {$Double2LongFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import {$Float2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import {$Double2ByteFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import {$Object2ShortFunction} from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import {$Object2ReferenceFunction} from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import {$Short2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import {$Double2IntFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import {$Object2LongFunction} from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import {$Double2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import {$Reference2DoubleFunction} from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import {$Float2DoubleFunction} from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import {$Double2ShortFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"
import {$Long2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"

export interface $Object2DoubleFunction$$Interface<K> extends $Function$0$$Interface<(K), (double)>, $ToDoubleFunction$$Interface<(K)> {

(arg0: any): double
}

export class $Object2DoubleFunction<K> implements $Object2DoubleFunction$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): any
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): double
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: K, arg1: double): double
/**
 * 
 * @deprecated
 */
 "put"(arg0: K, arg1: double): double
 "getDouble"(arg0: any): double
 "getOrDefault"(arg0: any, arg1: double): double
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: double): double
 "applyAsDouble"(arg0: K): double
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(double), (T)>): $Function<(K), (T)>
 "removeDouble"(arg0: any): double
 "andThenFloat"(arg0: $Double2FloatFunction$$Type): $Object2FloatFunction<(K)>
 "andThenObject"<T>(arg0: $Double2ObjectFunction$$Type<(T)>): $Object2ObjectFunction<(K), (T)>
 "composeByte"(arg0: $Byte2ObjectFunction$$Type<(K)>): $Byte2DoubleFunction
 "andThenLong"(arg0: $Double2LongFunction$$Type): $Object2LongFunction<(K)>
 "defaultReturnValue"(arg0: double): void
 "defaultReturnValue"(): double
 "composeLong"(arg0: $Long2ObjectFunction$$Type<(K)>): $Long2DoubleFunction
 "andThenChar"(arg0: $Double2CharFunction$$Type): $Object2CharFunction<(K)>
 "andThenDouble"(arg0: $Double2DoubleFunction$$Type): $Object2DoubleFunction<(K)>
 "composeObject"<T>(arg0: $Object2ObjectFunction$$Type<(T), (K)>): $Object2DoubleFunction<(T)>
 "composeChar"(arg0: $Char2ObjectFunction$$Type<(K)>): $Char2DoubleFunction
 "composeReference"<T>(arg0: $Reference2ObjectFunction$$Type<(T), (K)>): $Reference2DoubleFunction<(T)>
 "andThenShort"(arg0: $Double2ShortFunction$$Type): $Object2ShortFunction<(K)>
 "composeShort"(arg0: $Short2ObjectFunction$$Type<(K)>): $Short2DoubleFunction
 "composeFloat"(arg0: $Float2ObjectFunction$$Type<(K)>): $Float2DoubleFunction
 "andThenReference"<T>(arg0: $Double2ReferenceFunction$$Type<(T)>): $Object2ReferenceFunction<(K), (T)>
 "composeDouble"(arg0: $Double2ObjectFunction$$Type<(K)>): $Double2DoubleFunction
 "andThenByte"(arg0: $Double2ByteFunction$$Type): $Object2ByteFunction<(K)>
 "composeInt"(arg0: $Int2ObjectFunction$$Type<(K)>): $Int2DoubleFunction
 "andThenInt"(arg0: $Double2IntFunction$$Type): $Object2IntFunction<(K)>
 "size"(): integer
 "clear"(): void
 "apply"(arg0: K): double
 "containsKey"(arg0: any): boolean
static "identity"<T>(): $Function<(K), (K)>
 "compose"<V>(arg0: $Function$$Type<(V), (K)>): $Function<(V), (double)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Object2DoubleFunction$$Type<K> = ((arg0: any) => double);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Object2DoubleFunction$$Original<K> = $Object2DoubleFunction<(K)>;}
declare module "it.unimi.dsi.fastutil.longs.Long2CharFunction" {
import {$Char2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import {$Long2ByteFunction} from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import {$Long2IntFunction} from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import {$Reference2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import {$Int2CharFunction} from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import {$Long2ShortFunction} from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import {$Short2CharFunction} from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import {$Char2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import {$Char2ShortFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Float2CharFunction} from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import {$Byte2CharFunction} from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import {$Object2CharFunction} from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Long2DoubleFunction} from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import {$Long2LongFunction, $Long2LongFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import {$Float2LongFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import {$LongToIntFunction$$Interface} from "java.util.function.LongToIntFunction"
import {$Long2ReferenceFunction} from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import {$Double2CharFunction} from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import {$Char2CharFunction, $Char2CharFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2CharFunction"
import {$Byte2LongFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import {$Char2LongFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import {$Double2LongFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import {$Short2LongFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import {$Char2ByteFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import {$Int2LongFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import {$Reference2CharFunction} from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import {$Char2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import {$Char2IntFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import {$Long2FloatFunction} from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import {$Char2FloatFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import {$Object2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import {$Long2ObjectFunction} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"

export interface $Long2CharFunction$$Interface extends $Function$0$$Interface<(long), (character)>, $LongToIntFunction$$Interface {

(arg0: long): character
}

export class $Long2CharFunction implements $Long2CharFunction$$Interface {
 "remove"(arg0: long): character
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): character
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): character
 "get"(arg0: long): character
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: long, arg1: character): character
/**
 * 
 * @deprecated
 */
 "put"(arg0: long, arg1: character): character
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "containsKey"(arg0: long): boolean
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: character): character
 "getOrDefault"(arg0: long, arg1: character): character
 "applyAsInt"(arg0: long): integer
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (long)>): $Function<(T), (character)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(character), (T)>): $Function<(long), (T)>
 "andThenFloat"(arg0: $Char2FloatFunction$$Type): $Long2FloatFunction
 "andThenObject"<T>(arg0: $Char2ObjectFunction$$Type<(T)>): $Long2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2LongFunction$$Type): $Byte2CharFunction
 "andThenLong"(arg0: $Char2LongFunction$$Type): $Long2LongFunction
 "defaultReturnValue"(): character
 "defaultReturnValue"(arg0: character): void
 "composeLong"(arg0: $Long2LongFunction$$Type): $Long2CharFunction
 "andThenChar"(arg0: $Char2CharFunction$$Type): $Long2CharFunction
 "andThenDouble"(arg0: $Char2DoubleFunction$$Type): $Long2DoubleFunction
 "composeObject"<T>(arg0: $Object2LongFunction$$Type<(T)>): $Object2CharFunction<(T)>
 "composeChar"(arg0: $Char2LongFunction$$Type): $Char2CharFunction
 "composeReference"<T>(arg0: $Reference2LongFunction$$Type<(T)>): $Reference2CharFunction<(T)>
 "andThenShort"(arg0: $Char2ShortFunction$$Type): $Long2ShortFunction
 "composeShort"(arg0: $Short2LongFunction$$Type): $Short2CharFunction
 "composeFloat"(arg0: $Float2LongFunction$$Type): $Float2CharFunction
 "andThenReference"<T>(arg0: $Char2ReferenceFunction$$Type<(T)>): $Long2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2LongFunction$$Type): $Double2CharFunction
 "andThenByte"(arg0: $Char2ByteFunction$$Type): $Long2ByteFunction
 "composeInt"(arg0: $Int2LongFunction$$Type): $Int2CharFunction
 "andThenInt"(arg0: $Char2IntFunction$$Type): $Long2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: long): character
static "identity"<T>(): $Function<(long), (long)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Long2CharFunction$$Type = ((arg0: long) => character);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Long2CharFunction$$Original = $Long2CharFunction;}
declare module "it.unimi.dsi.fastutil.doubles.Double2DoubleFunction" {
import {$Char2DoubleFunction, $Char2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import {$Short2DoubleFunction, $Short2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import {$DoubleUnaryOperator, $DoubleUnaryOperator$$Type, $DoubleUnaryOperator$$Interface} from "java.util.function.DoubleUnaryOperator"
import {$Byte2DoubleFunction, $Byte2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Long2DoubleFunction, $Long2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import {$Double2CharFunction, $Double2CharFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import {$Double2FloatFunction, $Double2FloatFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import {$Double2ReferenceFunction, $Double2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import {$Double2LongFunction, $Double2LongFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import {$Double2ByteFunction, $Double2ByteFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import {$Object2DoubleFunction, $Object2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Double2IntFunction, $Double2IntFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import {$Double2ObjectFunction, $Double2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import {$Reference2DoubleFunction, $Reference2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import {$Int2DoubleFunction, $Int2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import {$Float2DoubleFunction, $Float2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import {$Double2ShortFunction, $Double2ShortFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"

export interface $Double2DoubleFunction$$Interface extends $Function$0$$Interface<(double), (double)>, $DoubleUnaryOperator$$Interface {

(arg0: double): double
}

export class $Double2DoubleFunction implements $Double2DoubleFunction$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): any
 "remove"(arg0: double): double
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): double
 "get"(arg0: double): double
/**
 * 
 * @deprecated
 */
 "put"(arg0: double, arg1: double): double
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: double, arg1: double): double
static "identity"(): $Double2DoubleFunction
 "containsKey"(arg0: double): boolean
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "getOrDefault"(arg0: double, arg1: double): double
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: double): double
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
 "applyAsDouble"(arg0: double): double
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (double)>): $Function<(T), (double)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(double), (T)>): $Function<(double), (T)>
 "andThenFloat"(arg0: $Double2FloatFunction$$Type): $Double2FloatFunction
 "andThenObject"<T>(arg0: $Double2ObjectFunction$$Type<(T)>): $Double2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2DoubleFunction$$Type): $Byte2DoubleFunction
 "andThenLong"(arg0: $Double2LongFunction$$Type): $Double2LongFunction
 "defaultReturnValue"(): double
 "defaultReturnValue"(arg0: double): void
 "composeLong"(arg0: $Long2DoubleFunction$$Type): $Long2DoubleFunction
 "andThenChar"(arg0: $Double2CharFunction$$Type): $Double2CharFunction
 "andThenDouble"(arg0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
 "composeObject"<T>(arg0: $Object2DoubleFunction$$Type<(T)>): $Object2DoubleFunction<(T)>
 "composeChar"(arg0: $Char2DoubleFunction$$Type): $Char2DoubleFunction
 "composeReference"<T>(arg0: $Reference2DoubleFunction$$Type<(T)>): $Reference2DoubleFunction<(T)>
 "andThenShort"(arg0: $Double2ShortFunction$$Type): $Double2ShortFunction
 "composeShort"(arg0: $Short2DoubleFunction$$Type): $Short2DoubleFunction
 "composeFloat"(arg0: $Float2DoubleFunction$$Type): $Float2DoubleFunction
 "andThenReference"<T>(arg0: $Double2ReferenceFunction$$Type<(T)>): $Double2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
 "andThenByte"(arg0: $Double2ByteFunction$$Type): $Double2ByteFunction
 "composeInt"(arg0: $Int2DoubleFunction$$Type): $Int2DoubleFunction
 "andThenInt"(arg0: $Double2IntFunction$$Type): $Double2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: double): double
 "compose"(arg0: $DoubleUnaryOperator$$Type): $DoubleUnaryOperator
 "andThen"(arg0: $DoubleUnaryOperator$$Type): $DoubleUnaryOperator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Double2DoubleFunction$$Type = ((arg0: double) => double);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Double2DoubleFunction$$Original = $Double2DoubleFunction;}
declare module "it.unimi.dsi.fastutil.objects.Object2ByteFunction" {
import {$Byte2ByteFunction, $Byte2ByteFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction"
import {$Byte2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import {$Float2ByteFunction} from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import {$Object2IntFunction} from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import {$Long2ByteFunction} from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import {$Object2ObjectFunction, $Object2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import {$Byte2IntFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"
import {$Reference2ByteFunction} from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import {$Byte2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import {$Int2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$Char2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import {$Object2DoubleFunction} from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Object2FloatFunction} from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import {$Byte2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import {$Byte2ShortFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import {$Byte2CharFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import {$Reference2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Object2CharFunction} from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Byte2LongFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import {$ToIntFunction$$Interface} from "java.util.function.ToIntFunction"
import {$Float2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import {$Char2ByteFunction} from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import {$Double2ByteFunction} from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import {$Object2ShortFunction} from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import {$Object2ReferenceFunction} from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import {$Short2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import {$Object2LongFunction} from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import {$Double2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import {$Byte2FloatFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import {$Short2ByteFunction} from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import {$Int2ByteFunction} from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import {$Long2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"

export interface $Object2ByteFunction$$Interface<K> extends $Function$0$$Interface<(K), (byte)>, $ToIntFunction$$Interface<(K)> {

(arg0: any): byte
}

export class $Object2ByteFunction<K> implements $Object2ByteFunction$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): any
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): any
/**
 * 
 * @deprecated
 */
 "put"(arg0: K, arg1: byte): byte
 "put"(arg0: K, arg1: byte): byte
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "getByte"(arg0: any): byte
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: byte): byte
 "getOrDefault"(arg0: any, arg1: byte): byte
 "applyAsInt"(arg0: K): integer
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(byte), (T)>): $Function<(K), (T)>
 "andThenFloat"(arg0: $Byte2FloatFunction$$Type): $Object2FloatFunction<(K)>
 "andThenObject"<T>(arg0: $Byte2ObjectFunction$$Type<(T)>): $Object2ObjectFunction<(K), (T)>
 "composeByte"(arg0: $Byte2ObjectFunction$$Type<(K)>): $Byte2ByteFunction
 "andThenLong"(arg0: $Byte2LongFunction$$Type): $Object2LongFunction<(K)>
 "defaultReturnValue"(): byte
 "defaultReturnValue"(arg0: byte): void
 "composeLong"(arg0: $Long2ObjectFunction$$Type<(K)>): $Long2ByteFunction
 "andThenChar"(arg0: $Byte2CharFunction$$Type): $Object2CharFunction<(K)>
 "andThenDouble"(arg0: $Byte2DoubleFunction$$Type): $Object2DoubleFunction<(K)>
 "composeObject"<T>(arg0: $Object2ObjectFunction$$Type<(T), (K)>): $Object2ByteFunction<(T)>
 "composeChar"(arg0: $Char2ObjectFunction$$Type<(K)>): $Char2ByteFunction
 "composeReference"<T>(arg0: $Reference2ObjectFunction$$Type<(T), (K)>): $Reference2ByteFunction<(T)>
 "andThenShort"(arg0: $Byte2ShortFunction$$Type): $Object2ShortFunction<(K)>
 "composeShort"(arg0: $Short2ObjectFunction$$Type<(K)>): $Short2ByteFunction
 "composeFloat"(arg0: $Float2ObjectFunction$$Type<(K)>): $Float2ByteFunction
 "andThenReference"<T>(arg0: $Byte2ReferenceFunction$$Type<(T)>): $Object2ReferenceFunction<(K), (T)>
 "composeDouble"(arg0: $Double2ObjectFunction$$Type<(K)>): $Double2ByteFunction
 "andThenByte"(arg0: $Byte2ByteFunction$$Type): $Object2ByteFunction<(K)>
 "composeInt"(arg0: $Int2ObjectFunction$$Type<(K)>): $Int2ByteFunction
 "andThenInt"(arg0: $Byte2IntFunction$$Type): $Object2IntFunction<(K)>
 "removeByte"(arg0: any): byte
 "size"(): integer
 "clear"(): void
 "apply"(arg0: K): byte
 "containsKey"(arg0: any): boolean
static "identity"<T>(): $Function<(K), (K)>
 "compose"<V>(arg0: $Function$$Type<(V), (K)>): $Function<(V), (byte)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Object2ByteFunction$$Type<K> = ((arg0: any) => byte);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Object2ByteFunction$$Original<K> = $Object2ByteFunction<(K)>;}
declare module "it.unimi.dsi.fastutil.objects.Reference2ShortFunction" {
import {$Float2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import {$Reference2IntFunction} from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import {$Short2IntFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import {$Reference2LongFunction} from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import {$Double2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import {$Long2ShortFunction} from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import {$Short2CharFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import {$Int2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import {$Reference2ByteFunction} from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import {$Byte2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import {$Char2ShortFunction} from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Short2ShortFunction, $Short2ShortFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ShortFunction"
import {$Byte2ShortFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import {$Short2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import {$Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ReferenceFunction"
import {$Reference2ObjectFunction} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Int2ShortFunction} from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import {$Float2ShortFunction} from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import {$Short2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import {$Long2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import {$Reference2FloatFunction} from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import {$ToIntFunction$$Interface} from "java.util.function.ToIntFunction"
import {$Short2LongFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import {$Reference2CharFunction} from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import {$Object2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import {$Object2ShortFunction} from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import {$Char2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import {$Short2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import {$Short2FloatFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import {$Reference2DoubleFunction} from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import {$Short2ByteFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import {$Double2ShortFunction} from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"

export interface $Reference2ShortFunction$$Interface<K> extends $Function$0$$Interface<(K), (short)>, $ToIntFunction$$Interface<(K)> {

(arg0: any): short
}

export class $Reference2ShortFunction<K> implements $Reference2ShortFunction$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): any
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): short
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: K, arg1: short): short
/**
 * 
 * @deprecated
 */
 "put"(arg0: K, arg1: short): short
 "getShort"(arg0: any): short
 "getOrDefault"(arg0: any, arg1: short): short
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: short): short
 "applyAsInt"(arg0: K): integer
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(short), (T)>): $Function<(K), (T)>
 "removeShort"(arg0: any): short
 "andThenFloat"(arg0: $Short2FloatFunction$$Type): $Reference2FloatFunction<(K)>
 "andThenObject"<T>(arg0: $Short2ObjectFunction$$Type<(T)>): $Reference2ObjectFunction<(K), (T)>
 "composeByte"(arg0: $Byte2ReferenceFunction$$Type<(K)>): $Byte2ShortFunction
 "andThenLong"(arg0: $Short2LongFunction$$Type): $Reference2LongFunction<(K)>
 "defaultReturnValue"(arg0: short): void
 "defaultReturnValue"(): short
 "composeLong"(arg0: $Long2ReferenceFunction$$Type<(K)>): $Long2ShortFunction
 "andThenChar"(arg0: $Short2CharFunction$$Type): $Reference2CharFunction<(K)>
 "andThenDouble"(arg0: $Short2DoubleFunction$$Type): $Reference2DoubleFunction<(K)>
 "composeObject"<T>(arg0: $Object2ReferenceFunction$$Type<(T), (K)>): $Object2ShortFunction<(T)>
 "composeChar"(arg0: $Char2ReferenceFunction$$Type<(K)>): $Char2ShortFunction
 "composeReference"<T>(arg0: $Reference2ReferenceFunction$$Type<(T), (K)>): $Reference2ShortFunction<(T)>
 "andThenShort"(arg0: $Short2ShortFunction$$Type): $Reference2ShortFunction<(K)>
 "composeShort"(arg0: $Short2ReferenceFunction$$Type<(K)>): $Short2ShortFunction
 "composeFloat"(arg0: $Float2ReferenceFunction$$Type<(K)>): $Float2ShortFunction
 "andThenReference"<T>(arg0: $Short2ReferenceFunction$$Type<(T)>): $Reference2ReferenceFunction<(K), (T)>
 "composeDouble"(arg0: $Double2ReferenceFunction$$Type<(K)>): $Double2ShortFunction
 "andThenByte"(arg0: $Short2ByteFunction$$Type): $Reference2ByteFunction<(K)>
 "composeInt"(arg0: $Int2ReferenceFunction$$Type<(K)>): $Int2ShortFunction
 "andThenInt"(arg0: $Short2IntFunction$$Type): $Reference2IntFunction<(K)>
 "size"(): integer
 "clear"(): void
 "apply"(arg0: K): short
 "containsKey"(arg0: any): boolean
static "identity"<T>(): $Function<(K), (K)>
 "compose"<V>(arg0: $Function$$Type<(V), (K)>): $Function<(V), (short)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Reference2ShortFunction$$Type<K> = ((arg0: any) => short);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Reference2ShortFunction$$Original<K> = $Reference2ShortFunction<(K)>;}
declare module "it.unimi.dsi.fastutil.longs.LongOpenHashSet" {
import {$AbstractLongSet} from "it.unimi.dsi.fastutil.longs.AbstractLongSet"
import {$Iterator$$Type} from "java.util.Iterator"
import {$Collection$$Type} from "java.util.Collection"
import {$Spliterator} from "java.util.Spliterator"
import {$Hash$$Interface} from "it.unimi.dsi.fastutil.Hash"
import {$LongStream$$Type} from "java.util.stream.LongStream"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$LongConsumer$$Type} from "java.util.function.LongConsumer"
import {$Cloneable$$Interface} from "java.lang.Cloneable"
import {$Set} from "java.util.Set"
import {$LongIterator, $LongIterator$$Type} from "it.unimi.dsi.fastutil.longs.LongIterator"
import {$LongCollection$$Type} from "it.unimi.dsi.fastutil.longs.LongCollection"

export class $LongOpenHashSet extends $AbstractLongSet implements $Serializable$$Interface, $Cloneable$$Interface, $Hash$$Interface {
constructor(arg0: $Iterator$$Type<(never)>)
constructor(arg0: $Iterator$$Type<(never)>, arg1: float)
constructor(arg0: $LongIterator$$Type)
constructor(arg0: $LongIterator$$Type, arg1: float)
constructor(arg0: (long)[])
constructor(arg0: (long)[], arg1: float)
constructor(arg0: (long)[], arg1: integer, arg2: integer)
constructor(arg0: (long)[], arg1: integer, arg2: integer, arg3: float)
constructor(arg0: $Collection$$Type<(long)>, arg1: float)
constructor()
constructor(arg0: integer)
constructor(arg0: integer, arg1: float)
constructor(arg0: $LongCollection$$Type)
constructor(arg0: $LongCollection$$Type, arg1: float)
constructor(arg0: $Collection$$Type<(long)>)

public "remove"(arg0: long): boolean
public "size"(): integer
public "hashCode"(): integer
public "clone"(): $LongOpenHashSet
public "clear"(): void
public "isEmpty"(): boolean
public "add"(arg0: long): boolean
public "iterator"(): $LongIterator
public "trim"(): boolean
public "trim"(arg0: integer): boolean
public static "of"(arg0: long, arg1: long): $LongOpenHashSet
public static "of"(): $LongOpenHashSet
public static "of"(...arg0: (long)[]): $LongOpenHashSet
public static "of"(arg0: long): $LongOpenHashSet
public static "of"(arg0: long, arg1: long, arg2: long): $LongOpenHashSet
public "contains"(arg0: long): boolean
public "spliterator"(): $Spliterator
public "addAll"(arg0: $LongCollection$$Type): boolean
public "addAll"(arg0: $Collection$$Type<(long)>): boolean
public "forEach"(arg0: $LongConsumer$$Type): void
public static "toSet"(arg0: $LongStream$$Type): $LongOpenHashSet
public "ensureCapacity"(arg0: integer): void
public static "toSetWithExpectedSize"(arg0: $LongStream$$Type, arg1: integer): $LongOpenHashSet
/**
 * 
 * @deprecated
 */
public "remove"(arg0: any): boolean
/**
 * 
 * @deprecated
 */
public "add"(arg0: long): boolean
/**
 * 
 * @deprecated
 */
public "add"(arg0: any): boolean
/**
 * 
 * @deprecated
 */
public "contains"(arg0: any): boolean
public static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $Set<(E)>
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $Set<(E)>
public static "of"<E>(...arg0: (E)[]): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $Set<(E)>
public static "of"<E>(arg0: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E): $Set<(E)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongOpenHashSet$$Type = ($LongOpenHashSet);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LongOpenHashSet$$Original = $LongOpenHashSet;}
declare module "it.unimi.dsi.fastutil.shorts.ShortSpliterator" {
import {$Spliterator$OfPrimitive, $Spliterator$OfPrimitive$$Interface} from "java.util.Spliterator$OfPrimitive"
import {$ShortConsumer, $ShortConsumer$$Type} from "it.unimi.dsi.fastutil.shorts.ShortConsumer"
import {$Comparator} from "java.util.Comparator"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $ShortSpliterator$$Interface extends $Spliterator$OfPrimitive$$Interface<(short), ($ShortConsumer), ($ShortSpliterator)> {
get "comparator"(): $Comparator
get "exactSizeIfKnown"(): long
}

export class $ShortSpliterator implements $ShortSpliterator$$Interface {
/**
 * 
 * @deprecated
 */
 "forEachRemaining"(arg0: $Consumer$$Type<(short)>): void
 "skip"(arg0: long): long
 "trySplit"(): $Spliterator$OfPrimitive
/**
 * 
 * @deprecated
 */
 "tryAdvance"(arg0: $Consumer$$Type<(short)>): boolean
 "getComparator"(): $Comparator
 "forEachRemaining"(arg0: $ShortConsumer$$Type): void
 "tryAdvance"(arg0: $ShortConsumer$$Type): boolean
 "characteristics"(): integer
 "estimateSize"(): long
 "getExactSizeIfKnown"(): long
 "hasCharacteristics"(arg0: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShortSpliterator$$Type = ($ShortSpliterator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShortSpliterator$$Original = $ShortSpliterator;}
declare module "it.unimi.dsi.fastutil.objects.Object2CharFunction" {
import {$Char2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import {$Object2IntFunction} from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import {$Long2CharFunction} from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import {$Object2ObjectFunction, $Object2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import {$Int2CharFunction} from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import {$Short2CharFunction} from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import {$Int2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$Char2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import {$Object2DoubleFunction} from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import {$Char2ShortFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Object2FloatFunction} from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import {$Byte2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import {$Float2CharFunction} from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import {$Byte2CharFunction} from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import {$Reference2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Object2ByteFunction} from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import {$Double2CharFunction} from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import {$Char2CharFunction, $Char2CharFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2CharFunction"
import {$Char2LongFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import {$ToIntFunction$$Interface} from "java.util.function.ToIntFunction"
import {$Float2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import {$Char2ByteFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import {$Reference2CharFunction} from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import {$Object2ShortFunction} from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import {$Char2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import {$Object2ReferenceFunction} from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import {$Short2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import {$Char2IntFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import {$Char2FloatFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import {$Object2LongFunction} from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import {$Double2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import {$Long2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"

export interface $Object2CharFunction$$Interface<K> extends $Function$0$$Interface<(K), (character)>, $ToIntFunction$$Interface<(K)> {

(arg0: any): character
}

export class $Object2CharFunction<K> implements $Object2CharFunction$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): any
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): any
/**
 * 
 * @deprecated
 */
 "put"(arg0: K, arg1: character): character
 "put"(arg0: K, arg1: character): character
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "getChar"(arg0: any): character
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: character): character
 "getOrDefault"(arg0: any, arg1: character): character
 "applyAsInt"(arg0: K): integer
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(character), (T)>): $Function<(K), (T)>
 "andThenFloat"(arg0: $Char2FloatFunction$$Type): $Object2FloatFunction<(K)>
 "andThenObject"<T>(arg0: $Char2ObjectFunction$$Type<(T)>): $Object2ObjectFunction<(K), (T)>
 "composeByte"(arg0: $Byte2ObjectFunction$$Type<(K)>): $Byte2CharFunction
 "andThenLong"(arg0: $Char2LongFunction$$Type): $Object2LongFunction<(K)>
 "defaultReturnValue"(): character
 "defaultReturnValue"(arg0: character): void
 "composeLong"(arg0: $Long2ObjectFunction$$Type<(K)>): $Long2CharFunction
 "andThenChar"(arg0: $Char2CharFunction$$Type): $Object2CharFunction<(K)>
 "andThenDouble"(arg0: $Char2DoubleFunction$$Type): $Object2DoubleFunction<(K)>
 "composeObject"<T>(arg0: $Object2ObjectFunction$$Type<(T), (K)>): $Object2CharFunction<(T)>
 "composeChar"(arg0: $Char2ObjectFunction$$Type<(K)>): $Char2CharFunction
 "composeReference"<T>(arg0: $Reference2ObjectFunction$$Type<(T), (K)>): $Reference2CharFunction<(T)>
 "andThenShort"(arg0: $Char2ShortFunction$$Type): $Object2ShortFunction<(K)>
 "composeShort"(arg0: $Short2ObjectFunction$$Type<(K)>): $Short2CharFunction
 "composeFloat"(arg0: $Float2ObjectFunction$$Type<(K)>): $Float2CharFunction
 "andThenReference"<T>(arg0: $Char2ReferenceFunction$$Type<(T)>): $Object2ReferenceFunction<(K), (T)>
 "composeDouble"(arg0: $Double2ObjectFunction$$Type<(K)>): $Double2CharFunction
 "andThenByte"(arg0: $Char2ByteFunction$$Type): $Object2ByteFunction<(K)>
 "removeChar"(arg0: any): character
 "composeInt"(arg0: $Int2ObjectFunction$$Type<(K)>): $Int2CharFunction
 "andThenInt"(arg0: $Char2IntFunction$$Type): $Object2IntFunction<(K)>
 "size"(): integer
 "clear"(): void
 "apply"(arg0: K): character
 "containsKey"(arg0: any): boolean
static "identity"<T>(): $Function<(K), (K)>
 "compose"<V>(arg0: $Function$$Type<(V), (K)>): $Function<(V), (character)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Object2CharFunction$$Type<K> = ((arg0: any) => character);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Object2CharFunction$$Original<K> = $Object2CharFunction<(K)>;}
declare module "it.unimi.dsi.fastutil.ints.Int2LongFunction" {
import {$Object2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import {$Long2CharFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import {$Reference2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import {$Long2IntFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import {$Long2ByteFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import {$Short2IntFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import {$Int2FloatFunction} from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import {$Byte2IntFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"
import {$Float2IntFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import {$Reference2LongFunction} from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import {$Int2CharFunction} from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import {$Long2ShortFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import {$Int2ReferenceFunction} from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import {$Int2ObjectFunction} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$Int2IntFunction, $Int2IntFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Int2DoubleFunction} from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Long2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import {$Long2LongFunction, $Long2LongFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import {$Int2ShortFunction} from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import {$Float2LongFunction} from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import {$Long2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import {$Byte2LongFunction} from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import {$Char2LongFunction} from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import {$Double2LongFunction} from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import {$IntToLongFunction$$Interface} from "java.util.function.IntToLongFunction"
import {$Short2LongFunction} from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import {$Char2IntFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import {$Long2FloatFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import {$Double2IntFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import {$Object2LongFunction} from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import {$Int2ByteFunction} from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import {$Long2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"

export interface $Int2LongFunction$$Interface extends $Function$0$$Interface<(integer), (long)>, $IntToLongFunction$$Interface {

(arg0: integer): long
}

export class $Int2LongFunction implements $Int2LongFunction$$Interface {
 "remove"(arg0: integer): long
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): long
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): long
 "get"(arg0: integer): long
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: integer, arg1: long): long
/**
 * 
 * @deprecated
 */
 "put"(arg0: integer, arg1: long): long
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "containsKey"(arg0: integer): boolean
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: long): long
 "getOrDefault"(arg0: integer, arg1: long): long
 "applyAsLong"(arg0: integer): long
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (integer)>): $Function<(T), (long)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(long), (T)>): $Function<(integer), (T)>
 "andThenFloat"(arg0: $Long2FloatFunction$$Type): $Int2FloatFunction
 "andThenObject"<T>(arg0: $Long2ObjectFunction$$Type<(T)>): $Int2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2IntFunction$$Type): $Byte2LongFunction
 "andThenLong"(arg0: $Long2LongFunction$$Type): $Int2LongFunction
 "defaultReturnValue"(): long
 "defaultReturnValue"(arg0: long): void
 "composeLong"(arg0: $Long2IntFunction$$Type): $Long2LongFunction
 "andThenChar"(arg0: $Long2CharFunction$$Type): $Int2CharFunction
 "andThenDouble"(arg0: $Long2DoubleFunction$$Type): $Int2DoubleFunction
 "composeObject"<T>(arg0: $Object2IntFunction$$Type<(T)>): $Object2LongFunction<(T)>
 "composeChar"(arg0: $Char2IntFunction$$Type): $Char2LongFunction
 "composeReference"<T>(arg0: $Reference2IntFunction$$Type<(T)>): $Reference2LongFunction<(T)>
 "andThenShort"(arg0: $Long2ShortFunction$$Type): $Int2ShortFunction
 "composeShort"(arg0: $Short2IntFunction$$Type): $Short2LongFunction
 "composeFloat"(arg0: $Float2IntFunction$$Type): $Float2LongFunction
 "andThenReference"<T>(arg0: $Long2ReferenceFunction$$Type<(T)>): $Int2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2IntFunction$$Type): $Double2LongFunction
 "andThenByte"(arg0: $Long2ByteFunction$$Type): $Int2ByteFunction
 "composeInt"(arg0: $Int2IntFunction$$Type): $Int2LongFunction
 "andThenInt"(arg0: $Long2IntFunction$$Type): $Int2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: integer): long
static "identity"<T>(): $Function<(integer), (integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Int2LongFunction$$Type = ((arg0: integer) => long);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Int2LongFunction$$Original = $Int2LongFunction;}
declare module "it.unimi.dsi.fastutil.shorts.ShortBidirectionalIterator" {
import {$ObjectBidirectionalIterator$$Interface} from "it.unimi.dsi.fastutil.objects.ObjectBidirectionalIterator"
import {$ShortConsumer$$Type} from "it.unimi.dsi.fastutil.shorts.ShortConsumer"
import {$IntConsumer$$Type} from "java.util.function.IntConsumer"
import {$ShortIterator$$Interface} from "it.unimi.dsi.fastutil.shorts.ShortIterator"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $ShortBidirectionalIterator$$Interface extends $ShortIterator$$Interface, $ObjectBidirectionalIterator$$Interface<(short)> {
}

export class $ShortBidirectionalIterator implements $ShortBidirectionalIterator$$Interface {
 "skip"(arg0: integer): integer
/**
 * 
 * @deprecated
 */
 "previous"(): short
 "back"(arg0: integer): integer
 "previousShort"(): short
 "forEachRemaining"(arg0: $IntConsumer$$Type): void
 "forEachRemaining"(arg0: $ShortConsumer$$Type): void
 "forEachRemaining"(arg0: any): void
/**
 * 
 * @deprecated
 */
 "forEachRemaining"(arg0: $Consumer$$Type<(short)>): void
/**
 * 
 * @deprecated
 */
 "next"(): any
 "nextShort"(): short
 "hasPrevious"(): boolean
 "remove"(): void
 "hasNext"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShortBidirectionalIterator$$Type = ($ShortBidirectionalIterator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShortBidirectionalIterator$$Original = $ShortBidirectionalIterator;}
declare module "it.unimi.dsi.fastutil.objects.Object2ByteMap$Entry" {
import {$Comparable} from "java.lang.Comparable"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$Map$Entry, $Map$Entry$$Type, $Map$Entry$$Interface} from "java.util.Map$Entry"

export interface $Object2ByteMap$Entry$$Interface<K> extends $Map$Entry$$Interface<(K), (byte)> {
get "value"(): byte
set "value"(value: any)
set "value"(value: byte)
set "value"(value: byte)
get "byteValue"(): byte
get "key"(): K
}

export class $Object2ByteMap$Entry<K> implements $Object2ByteMap$Entry$$Interface {
/**
 * 
 * @deprecated
 */
 "getValue"(): byte
/**
 * 
 * @deprecated
 */
 "setValue"(arg0: any): any
/**
 * 
 * @deprecated
 */
 "setValue"(arg0: byte): byte
 "setValue"(arg0: byte): byte
 "getByteValue"(): byte
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<K, V>(arg0: $Map$Entry$$Type<(K), (byte)>): $Map$Entry<(K), (byte)>
 "getKey"(): K
static "comparingByKey"<K, V>(arg0: $Comparator$$Type<(K)>): $Comparator<($Map$Entry<(K), (byte)>)>
static "comparingByKey"<K extends $Comparable<(object)>, V>(): $Comparator<($Map$Entry<(K), (byte)>)>
static "comparingByValue"<K, V extends $Comparable<(object)>>(): $Comparator<($Map$Entry<(K), (byte)>)>
static "comparingByValue"<K, V>(arg0: $Comparator$$Type<(byte)>): $Comparator<($Map$Entry<(K), (byte)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Object2ByteMap$Entry$$Type<K> = ($Object2ByteMap$Entry<(K)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Object2ByteMap$Entry$$Original<K> = $Object2ByteMap$Entry<(K)>;}
declare module "it.unimi.dsi.fastutil.ints.Int2IntMap" {
import {$Object2IntFunction, $Object2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import {$Reference2IntFunction, $Reference2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import {$Long2IntFunction, $Long2IntFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import {$Int2IntMap$Entry} from "it.unimi.dsi.fastutil.ints.Int2IntMap$Entry"
import {$Short2IntFunction, $Short2IntFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import {$Int2FloatFunction, $Int2FloatFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import {$Byte2IntFunction, $Byte2IntFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"
import {$IntBinaryOperator$$Type} from "java.util.function.IntBinaryOperator"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$IntFunction$$Type} from "java.util.function.IntFunction"
import {$Int2CharFunction, $Int2CharFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import {$Float2IntFunction, $Float2IntFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import {$Int2ReferenceFunction, $Int2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import {$Int2ObjectFunction, $Int2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Int2IntFunction, $Int2IntFunction$$Type, $Int2IntFunction$$Interface} from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import {$Set} from "java.util.Set"
import {$Int2DoubleFunction, $Int2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import {$Map, $Map$$Type, $Map$$Interface} from "java.util.Map"
import {$IntBinaryOperator$$Type as $IntBinaryOperator$0$$Type} from "it.unimi.dsi.fastutil.ints.IntBinaryOperator"
import {$IntCollection} from "it.unimi.dsi.fastutil.ints.IntCollection"
import {$Int2ShortFunction, $Int2ShortFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$IntUnaryOperator, $IntUnaryOperator$$Type} from "java.util.function.IntUnaryOperator"
import {$ObjectSet} from "it.unimi.dsi.fastutil.objects.ObjectSet"
import {$Int2LongFunction, $Int2LongFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import {$Char2IntFunction, $Char2IntFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Double2IntFunction, $Double2IntFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import {$Int2ByteFunction, $Int2ByteFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"

export interface $Int2IntMap$$Interface extends $Int2IntFunction$$Interface, $Map$$Interface<(integer), (integer)> {
[index: string | number]: integer
get "empty"(): boolean
}

export class $Int2IntMap implements $Int2IntMap$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): integer
 "remove"(arg0: integer, arg1: integer): boolean
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any, arg1: any): boolean
 "size"(): integer
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): integer
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "put"(arg0: integer, arg1: integer): integer
 "values"(): $IntCollection
 "clear"(): void
 "replace"(arg0: integer, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "replace"(arg0: integer, arg1: integer): integer
 "replace"(arg0: integer, arg1: integer, arg2: integer): boolean
/**
 * 
 * @deprecated
 */
 "replace"(arg0: any, arg1: any, arg2: any): boolean
/**
 * 
 * @deprecated
 */
 "replace"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "replace"(arg0: integer, arg1: integer, arg2: integer): boolean
 "merge"(arg0: integer, arg1: integer, arg2: $BiFunction$$Type<(integer), (integer), (integer)>): integer
/**
 * 
 * @deprecated
 */
 "merge"(arg0: integer, arg1: integer, arg2: $BiFunction$$Type<(integer), (integer), (integer)>): integer
/**
 * 
 * @deprecated
 */
 "merge"(arg0: any, arg1: any, arg2: $BiFunction$$Type): any
/**
 * 
 * @deprecated
 */
 "entrySet"(): $ObjectSet<($Map$Entry<(integer), (integer)>)>
/**
 * 
 * @deprecated
 */
 "putIfAbsent"(arg0: integer, arg1: integer): integer
 "putIfAbsent"(arg0: integer, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "putIfAbsent"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "compute"(arg0: integer, arg1: $BiFunction$$Type<(integer), (integer), (integer)>): integer
/**
 * 
 * @deprecated
 */
 "compute"(arg0: any, arg1: $BiFunction$$Type): any
 "compute"(arg0: integer, arg1: $BiFunction$$Type<(integer), (integer), (integer)>): integer
 "forEach"(arg0: $BiConsumer$$Type<(integer), (integer)>): void
 "containsKey"(arg0: integer): boolean
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "computeIfAbsent"(arg0: integer, arg1: $IntUnaryOperator$$Type): integer
/**
 * 
 * @deprecated
 */
 "computeIfAbsent"(arg0: any, arg1: $Function$$Type): any
/**
 * 
 * @deprecated
 */
 "computeIfAbsent"(arg0: integer, arg1: $Function$$Type<(integer), (integer)>): integer
 "computeIfAbsent"(arg0: integer, arg1: $Int2IntFunction$$Type): integer
 "keySet"(): $Set
 "containsValue"(arg0: integer): boolean
/**
 * 
 * @deprecated
 */
 "containsValue"(arg0: any): boolean
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
 "getOrDefault"(arg0: integer, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: integer): integer
 "computeIfPresent"(arg0: integer, arg1: $BiFunction$$Type<(integer), (integer), (integer)>): integer
/**
 * 
 * @deprecated
 */
 "computeIfPresent"(arg0: any, arg1: $BiFunction$$Type): any
/**
 * 
 * @deprecated
 */
 "computeIfPresent"(arg0: integer, arg1: $BiFunction$$Type<(integer), (integer), (integer)>): integer
 "computeIfAbsentNullable"(arg0: integer, arg1: $IntFunction$$Type<(integer)>): integer
/**
 * 
 * @deprecated
 */
 "computeIfAbsentPartial"(arg0: integer, arg1: $Int2IntFunction$$Type): integer
 "int2IntEntrySet"(): $ObjectSet<($Int2IntMap$Entry)>
 "defaultReturnValue"(arg0: integer): void
 "defaultReturnValue"(): integer
 "mergeInt"(arg0: integer, arg1: integer, arg2: $IntBinaryOperator$$Type): integer
 "mergeInt"(arg0: integer, arg1: integer, arg2: $IntBinaryOperator$0$$Type): integer
 "remove"(arg0: integer): integer
 "get"(arg0: integer): integer
 "put"(arg0: integer, arg1: integer): integer
static "identity"(): $Int2IntFunction
 "applyAsInt"(arg0: integer): integer
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (integer)>): $Function<(T), (integer)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(integer), (T)>): $Function<(integer), (T)>
 "andThenFloat"(arg0: $Int2FloatFunction$$Type): $Int2FloatFunction
 "andThenObject"<T>(arg0: $Int2ObjectFunction$$Type<(T)>): $Int2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2IntFunction$$Type): $Byte2IntFunction
 "andThenLong"(arg0: $Int2LongFunction$$Type): $Int2LongFunction
 "composeLong"(arg0: $Long2IntFunction$$Type): $Long2IntFunction
 "andThenChar"(arg0: $Int2CharFunction$$Type): $Int2CharFunction
 "andThenDouble"(arg0: $Int2DoubleFunction$$Type): $Int2DoubleFunction
 "composeObject"<T>(arg0: $Object2IntFunction$$Type<(T)>): $Object2IntFunction<(T)>
 "composeChar"(arg0: $Char2IntFunction$$Type): $Char2IntFunction
 "composeReference"<T>(arg0: $Reference2IntFunction$$Type<(T)>): $Reference2IntFunction<(T)>
 "andThenShort"(arg0: $Int2ShortFunction$$Type): $Int2ShortFunction
 "composeShort"(arg0: $Short2IntFunction$$Type): $Short2IntFunction
 "composeFloat"(arg0: $Float2IntFunction$$Type): $Float2IntFunction
 "andThenReference"<T>(arg0: $Int2ReferenceFunction$$Type<(T)>): $Int2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2IntFunction$$Type): $Double2IntFunction
 "andThenByte"(arg0: $Int2ByteFunction$$Type): $Int2ByteFunction
 "composeInt"(arg0: $Int2IntFunction$$Type): $Int2IntFunction
 "andThenInt"(arg0: $Int2IntFunction$$Type): $Int2IntFunction
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<K, V>(arg0: $Map$$Type<(integer), (integer)>): $Map<(integer), (integer)>
 "isEmpty"(): boolean
 "replaceAll"(arg0: $BiFunction$$Type<(integer), (integer), (integer)>): void
static "of"<K, V>(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer): $Map<(integer), (integer)>
static "of"<K, V>(): $Map<(integer), (integer)>
static "of"<K, V>(arg0: integer, arg1: integer): $Map<(integer), (integer)>
static "of"<K, V>(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $Map<(integer), (integer)>
static "of"<K, V>(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): $Map<(integer), (integer)>
static "of"<K, V>(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer, arg10: integer, arg11: integer, arg12: integer, arg13: integer, arg14: integer, arg15: integer, arg16: integer, arg17: integer, arg18: integer, arg19: integer): $Map<(integer), (integer)>
static "of"<K, V>(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer, arg10: integer, arg11: integer, arg12: integer, arg13: integer, arg14: integer, arg15: integer, arg16: integer, arg17: integer): $Map<(integer), (integer)>
static "of"<K, V>(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer, arg10: integer, arg11: integer, arg12: integer, arg13: integer, arg14: integer, arg15: integer): $Map<(integer), (integer)>
static "of"<K, V>(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer, arg10: integer, arg11: integer, arg12: integer, arg13: integer): $Map<(integer), (integer)>
static "of"<K, V>(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer, arg10: integer, arg11: integer): $Map<(integer), (integer)>
static "of"<K, V>(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer): $Map<(integer), (integer)>
 "putAll"(arg0: $Map$$Type<(integer), (integer)>): void
static "entry"<K, V>(arg0: integer, arg1: integer): $Map$Entry<(integer), (integer)>
static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(integer), (integer)>)[]): $Map<(integer), (integer)>
 "apply"(arg0: integer): integer
 "compose"(arg0: $IntUnaryOperator$$Type): $IntUnaryOperator
 "andThen"(arg0: $IntUnaryOperator$$Type): $IntUnaryOperator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Int2IntMap$$Type = ($Int2IntMap);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Int2IntMap$$Original = $Int2IntMap;}
declare module "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction" {
import {$Char2DoubleFunction} from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import {$Float2ReferenceFunction} from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import {$Long2CharFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import {$Reference2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import {$IntFunction$$Interface} from "java.util.function.IntFunction"
import {$Reference2ShortFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import {$Reference2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import {$Int2CharFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import {$Double2ReferenceFunction} from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import {$Short2CharFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import {$Int2ReferenceFunction} from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import {$Reference2ByteFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import {$Byte2ReferenceFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import {$Char2ObjectFunction} from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import {$Char2ShortFunction} from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Float2CharFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import {$Byte2CharFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import {$Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ReferenceFunction"
import {$Reference2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Object2CharFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Short2ReferenceFunction} from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import {$Long2ReferenceFunction} from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import {$Char2CharFunction, $Char2CharFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2CharFunction"
import {$Double2CharFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import {$Reference2FloatFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import {$Char2LongFunction} from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import {$Char2ByteFunction} from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import {$Reference2CharFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import {$Object2ReferenceFunction} from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import {$Char2IntFunction} from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import {$Char2FloatFunction} from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import {$Reference2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"

export interface $Char2ReferenceFunction$$Interface<V> extends $Function$0$$Interface<(character), (V)>, $IntFunction$$Interface<(V)> {

(arg0: character): V
}

export class $Char2ReferenceFunction<V> implements $Char2ReferenceFunction$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): V
 "remove"(arg0: character): V
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): V
 "get"(arg0: character): V
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "put"(arg0: character, arg1: V): V
 "put"(arg0: character, arg1: V): V
/**
 * 
 * @deprecated
 */
 "apply"(arg0: integer): V
 "containsKey"(arg0: character): boolean
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "getOrDefault"(arg0: character, arg1: V): V
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: V): V
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (character)>): $Function<(T), (V)>
 "andThenFloat"(arg0: $Reference2FloatFunction$$Type<(V)>): $Char2FloatFunction
 "andThenObject"<T>(arg0: $Reference2ObjectFunction$$Type<(V), (T)>): $Char2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2CharFunction$$Type): $Byte2ReferenceFunction<(V)>
 "andThenLong"(arg0: $Reference2LongFunction$$Type<(V)>): $Char2LongFunction
 "defaultReturnValue"(): V
 "defaultReturnValue"(arg0: V): void
 "composeLong"(arg0: $Long2CharFunction$$Type): $Long2ReferenceFunction<(V)>
 "andThenChar"(arg0: $Reference2CharFunction$$Type<(V)>): $Char2CharFunction
 "andThenDouble"(arg0: $Reference2DoubleFunction$$Type<(V)>): $Char2DoubleFunction
 "composeObject"<T>(arg0: $Object2CharFunction$$Type<(T)>): $Object2ReferenceFunction<(T), (V)>
 "composeChar"(arg0: $Char2CharFunction$$Type): $Char2ReferenceFunction<(V)>
 "composeReference"<T>(arg0: $Reference2CharFunction$$Type<(T)>): $Reference2ReferenceFunction<(T), (V)>
 "andThenShort"(arg0: $Reference2ShortFunction$$Type<(V)>): $Char2ShortFunction
 "composeShort"(arg0: $Short2CharFunction$$Type): $Short2ReferenceFunction<(V)>
 "composeFloat"(arg0: $Float2CharFunction$$Type): $Float2ReferenceFunction<(V)>
 "andThenReference"<T>(arg0: $Reference2ReferenceFunction$$Type<(V), (T)>): $Char2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2CharFunction$$Type): $Double2ReferenceFunction<(V)>
 "andThenByte"(arg0: $Reference2ByteFunction$$Type<(V)>): $Char2ByteFunction
 "composeInt"(arg0: $Int2CharFunction$$Type): $Int2ReferenceFunction<(V)>
 "andThenInt"(arg0: $Reference2IntFunction$$Type<(V)>): $Char2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: character): V
static "identity"<T>(): $Function<(character), (character)>
 "andThen"<V>(arg0: $Function$$Type<(V), (V)>): $Function<(character), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Char2ReferenceFunction$$Type<V> = ((arg0: character) => V);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Char2ReferenceFunction$$Original<V> = $Char2ReferenceFunction<(V)>;}
declare module "it.unimi.dsi.fastutil.doubles.DoubleSpliterator" {
import {$DoubleConsumer$$Type as $DoubleConsumer$0$$Type} from "java.util.function.DoubleConsumer"
import {$Comparator} from "java.util.Comparator"
import {$Spliterator} from "java.util.Spliterator"
import {$Spliterator$OfDouble$$Interface} from "java.util.Spliterator$OfDouble"
import {$DoubleConsumer$$Type} from "it.unimi.dsi.fastutil.doubles.DoubleConsumer"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $DoubleSpliterator$$Interface extends $Spliterator$OfDouble$$Interface {
get "comparator"(): $Comparator
get "exactSizeIfKnown"(): long
}

export class $DoubleSpliterator implements $DoubleSpliterator$$Interface {
/**
 * 
 * @deprecated
 */
 "forEachRemaining"(arg0: $Consumer$$Type<(double)>): void
 "forEachRemaining"(arg0: $DoubleConsumer$$Type): void
 "skip"(arg0: long): long
 "trySplit"(): $Spliterator
/**
 * 
 * @deprecated
 */
 "tryAdvance"(arg0: $Consumer$$Type<(double)>): boolean
 "tryAdvance"(arg0: $DoubleConsumer$$Type): boolean
 "getComparator"(): $Comparator
 "forEachRemaining"(arg0: any): void
 "forEachRemaining"(arg0: $DoubleConsumer$0$$Type): void
 "tryAdvance"(arg0: $DoubleConsumer$0$$Type): boolean
 "tryAdvance"(arg0: any): boolean
 "characteristics"(): integer
 "estimateSize"(): long
 "getExactSizeIfKnown"(): long
 "hasCharacteristics"(arg0: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleSpliterator$$Type = ($DoubleSpliterator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoubleSpliterator$$Original = $DoubleSpliterator;}
declare module "it.unimi.dsi.fastutil.ints.Int2IntMap$Entry" {
import {$Comparable} from "java.lang.Comparable"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$Map$Entry, $Map$Entry$$Type, $Map$Entry$$Interface} from "java.util.Map$Entry"

export interface $Int2IntMap$Entry$$Interface extends $Map$Entry$$Interface<(integer), (integer)> {
get "value"(): integer
get "key"(): any
set "value"(value: any)
set "value"(value: integer)
set "value"(value: integer)
get "intValue"(): integer
get "intKey"(): integer
}

export class $Int2IntMap$Entry implements $Int2IntMap$Entry$$Interface {
/**
 * 
 * @deprecated
 */
 "getValue"(): integer
/**
 * 
 * @deprecated
 */
 "getKey"(): any
/**
 * 
 * @deprecated
 */
 "setValue"(arg0: any): any
/**
 * 
 * @deprecated
 */
 "setValue"(arg0: integer): integer
 "setValue"(arg0: integer): integer
 "getIntValue"(): integer
 "getIntKey"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<K, V>(arg0: $Map$Entry$$Type<(integer), (integer)>): $Map$Entry<(integer), (integer)>
static "comparingByKey"<K, V>(arg0: $Comparator$$Type<(integer)>): $Comparator<($Map$Entry<(integer), (integer)>)>
static "comparingByKey"<K extends $Comparable<(object)>, V>(): $Comparator<($Map$Entry<(integer), (integer)>)>
static "comparingByValue"<K, V extends $Comparable<(object)>>(): $Comparator<($Map$Entry<(integer), (integer)>)>
static "comparingByValue"<K, V>(arg0: $Comparator$$Type<(integer)>): $Comparator<($Map$Entry<(integer), (integer)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Int2IntMap$Entry$$Type = ($Int2IntMap$Entry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Int2IntMap$Entry$$Original = $Int2IntMap$Entry;}
declare module "it.unimi.dsi.fastutil.longs.Long2ShortFunction" {
import {$Long2CharFunction} from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import {$Long2ByteFunction} from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import {$Long2IntFunction} from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import {$Short2IntFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import {$Reference2ShortFunction} from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import {$Reference2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import {$Short2CharFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import {$Char2ShortFunction} from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Short2ShortFunction, $Short2ShortFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ShortFunction"
import {$Byte2ShortFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import {$Short2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Long2DoubleFunction} from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import {$Long2LongFunction, $Long2LongFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import {$Int2ShortFunction} from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import {$Float2LongFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import {$Float2ShortFunction} from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import {$LongToIntFunction$$Interface} from "java.util.function.LongToIntFunction"
import {$Short2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import {$Long2ReferenceFunction} from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import {$Byte2LongFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import {$Char2LongFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import {$Double2LongFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import {$Short2LongFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import {$Int2LongFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import {$Object2ShortFunction} from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import {$Short2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import {$Long2FloatFunction} from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import {$Short2FloatFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import {$Object2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import {$Short2ByteFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import {$Long2ObjectFunction} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import {$Double2ShortFunction} from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"

export interface $Long2ShortFunction$$Interface extends $Function$0$$Interface<(long), (short)>, $LongToIntFunction$$Interface {

(arg0: long): short
}

export class $Long2ShortFunction implements $Long2ShortFunction$$Interface {
 "remove"(arg0: long): short
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): short
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): short
 "get"(arg0: long): short
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: long, arg1: short): short
/**
 * 
 * @deprecated
 */
 "put"(arg0: long, arg1: short): short
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "containsKey"(arg0: long): boolean
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: short): short
 "getOrDefault"(arg0: long, arg1: short): short
 "applyAsInt"(arg0: long): integer
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (long)>): $Function<(T), (short)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(short), (T)>): $Function<(long), (T)>
 "andThenFloat"(arg0: $Short2FloatFunction$$Type): $Long2FloatFunction
 "andThenObject"<T>(arg0: $Short2ObjectFunction$$Type<(T)>): $Long2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2LongFunction$$Type): $Byte2ShortFunction
 "andThenLong"(arg0: $Short2LongFunction$$Type): $Long2LongFunction
 "defaultReturnValue"(): short
 "defaultReturnValue"(arg0: short): void
 "composeLong"(arg0: $Long2LongFunction$$Type): $Long2ShortFunction
 "andThenChar"(arg0: $Short2CharFunction$$Type): $Long2CharFunction
 "andThenDouble"(arg0: $Short2DoubleFunction$$Type): $Long2DoubleFunction
 "composeObject"<T>(arg0: $Object2LongFunction$$Type<(T)>): $Object2ShortFunction<(T)>
 "composeChar"(arg0: $Char2LongFunction$$Type): $Char2ShortFunction
 "composeReference"<T>(arg0: $Reference2LongFunction$$Type<(T)>): $Reference2ShortFunction<(T)>
 "andThenShort"(arg0: $Short2ShortFunction$$Type): $Long2ShortFunction
 "composeShort"(arg0: $Short2LongFunction$$Type): $Short2ShortFunction
 "composeFloat"(arg0: $Float2LongFunction$$Type): $Float2ShortFunction
 "andThenReference"<T>(arg0: $Short2ReferenceFunction$$Type<(T)>): $Long2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2LongFunction$$Type): $Double2ShortFunction
 "andThenByte"(arg0: $Short2ByteFunction$$Type): $Long2ByteFunction
 "composeInt"(arg0: $Int2LongFunction$$Type): $Int2ShortFunction
 "andThenInt"(arg0: $Short2IntFunction$$Type): $Long2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: long): short
static "identity"<T>(): $Function<(long), (long)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Long2ShortFunction$$Type = ((arg0: long) => short);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Long2ShortFunction$$Original = $Long2ShortFunction;}
declare module "it.unimi.dsi.fastutil.objects.Reference2ReferenceFunction" {
import {$Float2ReferenceFunction, $Float2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import {$Reference2ObjectFunction, $Reference2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Reference2IntFunction, $Reference2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import {$Short2ReferenceFunction, $Short2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import {$Long2ReferenceFunction, $Long2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import {$Reference2ShortFunction, $Reference2ShortFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import {$Reference2LongFunction, $Reference2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import {$Reference2FloatFunction, $Reference2FloatFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import {$Double2ReferenceFunction, $Double2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import {$Int2ReferenceFunction, $Int2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import {$Reference2ByteFunction, $Reference2ByteFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import {$Byte2ReferenceFunction, $Byte2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import {$Reference2CharFunction, $Reference2CharFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import {$Object2ReferenceFunction, $Object2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import {$Char2ReferenceFunction, $Char2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Reference2DoubleFunction, $Reference2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"

export interface $Reference2ReferenceFunction$$Interface<K, V> extends $Function$0$$Interface<(K), (V)> {

(arg0: any): V
}

export class $Reference2ReferenceFunction<K, V> implements $Reference2ReferenceFunction$$Interface {
 "remove"(arg0: any): V
 "get"(arg0: any): V
 "put"(arg0: K, arg1: V): V
 "getOrDefault"(arg0: any, arg1: V): V
 "andThenFloat"(arg0: $Reference2FloatFunction$$Type<(V)>): $Reference2FloatFunction<(K)>
 "andThenObject"<T>(arg0: $Reference2ObjectFunction$$Type<(V), (T)>): $Reference2ObjectFunction<(K), (T)>
 "composeByte"(arg0: $Byte2ReferenceFunction$$Type<(K)>): $Byte2ReferenceFunction<(V)>
 "andThenLong"(arg0: $Reference2LongFunction$$Type<(V)>): $Reference2LongFunction<(K)>
 "defaultReturnValue"(arg0: V): void
 "defaultReturnValue"(): V
 "composeLong"(arg0: $Long2ReferenceFunction$$Type<(K)>): $Long2ReferenceFunction<(V)>
 "andThenChar"(arg0: $Reference2CharFunction$$Type<(V)>): $Reference2CharFunction<(K)>
 "andThenDouble"(arg0: $Reference2DoubleFunction$$Type<(V)>): $Reference2DoubleFunction<(K)>
 "composeObject"<T>(arg0: $Object2ReferenceFunction$$Type<(T), (K)>): $Object2ReferenceFunction<(T), (V)>
 "composeChar"(arg0: $Char2ReferenceFunction$$Type<(K)>): $Char2ReferenceFunction<(V)>
 "composeReference"<T>(arg0: $Reference2ReferenceFunction$$Type<(T), (K)>): $Reference2ReferenceFunction<(T), (V)>
 "andThenShort"(arg0: $Reference2ShortFunction$$Type<(V)>): $Reference2ShortFunction<(K)>
 "composeShort"(arg0: $Short2ReferenceFunction$$Type<(K)>): $Short2ReferenceFunction<(V)>
 "composeFloat"(arg0: $Float2ReferenceFunction$$Type<(K)>): $Float2ReferenceFunction<(V)>
 "andThenReference"<T>(arg0: $Reference2ReferenceFunction$$Type<(V), (T)>): $Reference2ReferenceFunction<(K), (T)>
 "composeDouble"(arg0: $Double2ReferenceFunction$$Type<(K)>): $Double2ReferenceFunction<(V)>
 "andThenByte"(arg0: $Reference2ByteFunction$$Type<(V)>): $Reference2ByteFunction<(K)>
 "composeInt"(arg0: $Int2ReferenceFunction$$Type<(K)>): $Int2ReferenceFunction<(V)>
 "andThenInt"(arg0: $Reference2IntFunction$$Type<(V)>): $Reference2IntFunction<(K)>
 "size"(): integer
 "clear"(): void
 "apply"(arg0: K): V
 "containsKey"(arg0: any): boolean
static "identity"<T>(): $Function<(K), (K)>
 "compose"<V>(arg0: $Function$$Type<(V), (K)>): $Function<(V), (V)>
 "andThen"<V>(arg0: $Function$$Type<(V), (V)>): $Function<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Reference2ReferenceFunction$$Type<K, V> = ((arg0: any) => V);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Reference2ReferenceFunction$$Original<K, V> = $Reference2ReferenceFunction<(K), (V)>;}
declare module "it.unimi.dsi.fastutil.doubles.DoubleConsumer" {
import {$DoubleConsumer as $DoubleConsumer$0, $DoubleConsumer$$Type as $DoubleConsumer$0$$Type, $DoubleConsumer$$Interface as $DoubleConsumer$0$$Interface} from "java.util.function.DoubleConsumer"
import {$Consumer, $Consumer$$Type, $Consumer$$Interface} from "java.util.function.Consumer"

export interface $DoubleConsumer$$Interface extends $Consumer$$Interface<(double)>, $DoubleConsumer$0$$Interface {

(arg0: double): void
}

export class $DoubleConsumer implements $DoubleConsumer$$Interface {
/**
 * 
 * @deprecated
 */
 "accept"(arg0: any): void
/**
 * 
 * @deprecated
 */
 "accept"(arg0: double): void
 "andThen"(arg0: $DoubleConsumer$0$$Type): $DoubleConsumer$0
/**
 * 
 * @deprecated
 */
 "andThen"(arg0: $Consumer$$Type<(double)>): $Consumer<(double)>
 "andThen"(arg0: $DoubleConsumer$$Type): $DoubleConsumer
 "accept"(arg0: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleConsumer$$Type = ((arg0: double) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoubleConsumer$$Original = $DoubleConsumer;}
declare module "it.unimi.dsi.fastutil.doubles.Double2LongFunction" {
import {$Char2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import {$Byte2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import {$Long2CharFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import {$Long2IntFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import {$Long2ByteFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import {$Reference2LongFunction} from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import {$Double2FloatFunction} from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import {$Long2ShortFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import {$Double2ReferenceFunction} from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import {$Object2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Int2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import {$Short2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import {$Double2DoubleFunction, $Double2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2DoubleFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Long2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import {$Long2LongFunction, $Long2LongFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import {$Float2LongFunction} from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import {$Double2CharFunction} from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import {$Long2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import {$Byte2LongFunction} from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import {$Char2LongFunction} from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import {$Short2LongFunction} from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import {$Double2ByteFunction} from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import {$Int2LongFunction} from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import {$Long2FloatFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import {$Double2IntFunction} from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import {$Object2LongFunction} from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import {$Double2ObjectFunction} from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import {$Reference2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import {$Float2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import {$Long2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import {$DoubleToLongFunction$$Interface} from "java.util.function.DoubleToLongFunction"
import {$Double2ShortFunction} from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"

export interface $Double2LongFunction$$Interface extends $Function$0$$Interface<(double), (long)>, $DoubleToLongFunction$$Interface {

(arg0: double): long
}

export class $Double2LongFunction implements $Double2LongFunction$$Interface {
 "remove"(arg0: double): long
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): long
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): long
 "get"(arg0: double): long
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: double, arg1: long): long
/**
 * 
 * @deprecated
 */
 "put"(arg0: double, arg1: long): long
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "containsKey"(arg0: double): boolean
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: long): long
 "getOrDefault"(arg0: double, arg1: long): long
 "applyAsLong"(arg0: double): long
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (double)>): $Function<(T), (long)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(long), (T)>): $Function<(double), (T)>
 "andThenFloat"(arg0: $Long2FloatFunction$$Type): $Double2FloatFunction
 "andThenObject"<T>(arg0: $Long2ObjectFunction$$Type<(T)>): $Double2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2DoubleFunction$$Type): $Byte2LongFunction
 "andThenLong"(arg0: $Long2LongFunction$$Type): $Double2LongFunction
 "defaultReturnValue"(): long
 "defaultReturnValue"(arg0: long): void
 "composeLong"(arg0: $Long2DoubleFunction$$Type): $Long2LongFunction
 "andThenChar"(arg0: $Long2CharFunction$$Type): $Double2CharFunction
 "andThenDouble"(arg0: $Long2DoubleFunction$$Type): $Double2DoubleFunction
 "composeObject"<T>(arg0: $Object2DoubleFunction$$Type<(T)>): $Object2LongFunction<(T)>
 "composeChar"(arg0: $Char2DoubleFunction$$Type): $Char2LongFunction
 "composeReference"<T>(arg0: $Reference2DoubleFunction$$Type<(T)>): $Reference2LongFunction<(T)>
 "andThenShort"(arg0: $Long2ShortFunction$$Type): $Double2ShortFunction
 "composeShort"(arg0: $Short2DoubleFunction$$Type): $Short2LongFunction
 "composeFloat"(arg0: $Float2DoubleFunction$$Type): $Float2LongFunction
 "andThenReference"<T>(arg0: $Long2ReferenceFunction$$Type<(T)>): $Double2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2DoubleFunction$$Type): $Double2LongFunction
 "andThenByte"(arg0: $Long2ByteFunction$$Type): $Double2ByteFunction
 "composeInt"(arg0: $Int2DoubleFunction$$Type): $Int2LongFunction
 "andThenInt"(arg0: $Long2IntFunction$$Type): $Double2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: double): long
static "identity"<T>(): $Function<(double), (double)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Double2LongFunction$$Type = ((arg0: double) => long);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Double2LongFunction$$Original = $Double2LongFunction;}
declare module "it.unimi.dsi.fastutil.doubles.Double2IntFunction" {
import {$Char2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import {$Byte2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import {$Object2IntFunction} from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import {$Reference2IntFunction} from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import {$Long2IntFunction} from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import {$Short2IntFunction} from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import {$Int2FloatFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import {$Byte2IntFunction} from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"
import {$Float2IntFunction} from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import {$Double2FloatFunction} from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import {$Int2CharFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import {$Double2ReferenceFunction} from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import {$Int2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import {$Int2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$Object2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import {$Int2IntFunction, $Int2IntFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Int2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import {$Short2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import {$Double2DoubleFunction, $Double2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2DoubleFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Long2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import {$Int2ShortFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import {$Double2CharFunction} from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import {$Double2LongFunction} from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import {$Double2ByteFunction} from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import {$Int2LongFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import {$DoubleToIntFunction$$Interface} from "java.util.function.DoubleToIntFunction"
import {$Char2IntFunction} from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import {$Double2ObjectFunction} from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import {$Reference2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import {$Float2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import {$Int2ByteFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import {$Double2ShortFunction} from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"

export interface $Double2IntFunction$$Interface extends $Function$0$$Interface<(double), (integer)>, $DoubleToIntFunction$$Interface {

(arg0: double): integer
}

export class $Double2IntFunction implements $Double2IntFunction$$Interface {
 "remove"(arg0: double): integer
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): integer
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): integer
 "get"(arg0: double): integer
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: double, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "put"(arg0: double, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "containsKey"(arg0: double): boolean
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: integer): integer
 "getOrDefault"(arg0: double, arg1: integer): integer
 "applyAsInt"(arg0: double): integer
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (double)>): $Function<(T), (integer)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(integer), (T)>): $Function<(double), (T)>
 "andThenFloat"(arg0: $Int2FloatFunction$$Type): $Double2FloatFunction
 "andThenObject"<T>(arg0: $Int2ObjectFunction$$Type<(T)>): $Double2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2DoubleFunction$$Type): $Byte2IntFunction
 "andThenLong"(arg0: $Int2LongFunction$$Type): $Double2LongFunction
 "defaultReturnValue"(): integer
 "defaultReturnValue"(arg0: integer): void
 "composeLong"(arg0: $Long2DoubleFunction$$Type): $Long2IntFunction
 "andThenChar"(arg0: $Int2CharFunction$$Type): $Double2CharFunction
 "andThenDouble"(arg0: $Int2DoubleFunction$$Type): $Double2DoubleFunction
 "composeObject"<T>(arg0: $Object2DoubleFunction$$Type<(T)>): $Object2IntFunction<(T)>
 "composeChar"(arg0: $Char2DoubleFunction$$Type): $Char2IntFunction
 "composeReference"<T>(arg0: $Reference2DoubleFunction$$Type<(T)>): $Reference2IntFunction<(T)>
 "andThenShort"(arg0: $Int2ShortFunction$$Type): $Double2ShortFunction
 "composeShort"(arg0: $Short2DoubleFunction$$Type): $Short2IntFunction
 "composeFloat"(arg0: $Float2DoubleFunction$$Type): $Float2IntFunction
 "andThenReference"<T>(arg0: $Int2ReferenceFunction$$Type<(T)>): $Double2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2DoubleFunction$$Type): $Double2IntFunction
 "andThenByte"(arg0: $Int2ByteFunction$$Type): $Double2ByteFunction
 "composeInt"(arg0: $Int2DoubleFunction$$Type): $Int2IntFunction
 "andThenInt"(arg0: $Int2IntFunction$$Type): $Double2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: double): integer
static "identity"<T>(): $Function<(double), (double)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Double2IntFunction$$Type = ((arg0: double) => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Double2IntFunction$$Original = $Double2IntFunction;}
declare module "it.unimi.dsi.fastutil.shorts.Short2IntFunction" {
import {$Object2IntFunction} from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import {$Reference2IntFunction} from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import {$Long2IntFunction} from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import {$Int2FloatFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import {$Byte2IntFunction} from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"
import {$Reference2ShortFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import {$Float2IntFunction} from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import {$Int2CharFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import {$Long2ShortFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import {$Int2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import {$Short2CharFunction} from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import {$Int2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$Int2IntFunction, $Int2IntFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import {$Char2ShortFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Short2ShortFunction, $Short2ShortFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ShortFunction"
import {$Byte2ShortFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import {$Int2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import {$Short2DoubleFunction} from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Int2ShortFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import {$Short2ReferenceFunction} from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import {$Float2ShortFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import {$IntUnaryOperator, $IntUnaryOperator$$Type, $IntUnaryOperator$$Interface} from "java.util.function.IntUnaryOperator"
import {$Short2LongFunction} from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import {$Int2LongFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import {$Short2ObjectFunction} from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import {$Object2ShortFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import {$Char2IntFunction} from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import {$Double2IntFunction} from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import {$Short2FloatFunction} from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import {$Short2ByteFunction} from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import {$Int2ByteFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import {$Double2ShortFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"

export interface $Short2IntFunction$$Interface extends $Function$0$$Interface<(short), (integer)>, $IntUnaryOperator$$Interface {

(arg0: short): integer
}

export class $Short2IntFunction implements $Short2IntFunction$$Interface {
 "remove"(arg0: short): integer
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): integer
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): integer
 "get"(arg0: short): integer
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: short, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "put"(arg0: short, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "containsKey"(arg0: short): boolean
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: integer): integer
 "getOrDefault"(arg0: short, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "applyAsInt"(arg0: integer): integer
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (short)>): $Function<(T), (integer)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(integer), (T)>): $Function<(short), (T)>
 "andThenFloat"(arg0: $Int2FloatFunction$$Type): $Short2FloatFunction
 "andThenObject"<T>(arg0: $Int2ObjectFunction$$Type<(T)>): $Short2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2ShortFunction$$Type): $Byte2IntFunction
 "andThenLong"(arg0: $Int2LongFunction$$Type): $Short2LongFunction
 "defaultReturnValue"(): integer
 "defaultReturnValue"(arg0: integer): void
 "composeLong"(arg0: $Long2ShortFunction$$Type): $Long2IntFunction
 "andThenChar"(arg0: $Int2CharFunction$$Type): $Short2CharFunction
 "andThenDouble"(arg0: $Int2DoubleFunction$$Type): $Short2DoubleFunction
 "composeObject"<T>(arg0: $Object2ShortFunction$$Type<(T)>): $Object2IntFunction<(T)>
 "composeChar"(arg0: $Char2ShortFunction$$Type): $Char2IntFunction
 "composeReference"<T>(arg0: $Reference2ShortFunction$$Type<(T)>): $Reference2IntFunction<(T)>
 "andThenShort"(arg0: $Int2ShortFunction$$Type): $Short2ShortFunction
 "composeShort"(arg0: $Short2ShortFunction$$Type): $Short2IntFunction
 "composeFloat"(arg0: $Float2ShortFunction$$Type): $Float2IntFunction
 "andThenReference"<T>(arg0: $Int2ReferenceFunction$$Type<(T)>): $Short2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2ShortFunction$$Type): $Double2IntFunction
 "andThenByte"(arg0: $Int2ByteFunction$$Type): $Short2ByteFunction
 "composeInt"(arg0: $Int2ShortFunction$$Type): $Int2IntFunction
 "andThenInt"(arg0: $Int2IntFunction$$Type): $Short2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: short): integer
static "identity"(): $IntUnaryOperator
 "compose"(arg0: $IntUnaryOperator$$Type): $IntUnaryOperator
 "andThen"(arg0: $IntUnaryOperator$$Type): $IntUnaryOperator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Short2IntFunction$$Type = ((arg0: short) => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Short2IntFunction$$Original = $Short2IntFunction;}
declare module "it.unimi.dsi.fastutil.ints.IntCollection" {
import {$Collection$$Type, $Collection$$Interface} from "java.util.Collection"
import {$Spliterator} from "java.util.Spliterator"
import {$IntStream} from "java.util.stream.IntStream"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$IntPredicate$$Type as $IntPredicate$0$$Type} from "java.util.function.IntPredicate"
import {$IntSpliterator} from "it.unimi.dsi.fastutil.ints.IntSpliterator"
import {$IntIterable$$Interface} from "it.unimi.dsi.fastutil.ints.IntIterable"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$IntFunction$$Type} from "java.util.function.IntFunction"
import {$IntIterator} from "it.unimi.dsi.fastutil.ints.IntIterator"
import {$IntConsumer$$Type as $IntConsumer$0$$Type} from "java.util.function.IntConsumer"
import {$IntPredicate$$Type} from "it.unimi.dsi.fastutil.ints.IntPredicate"
import {$Stream} from "java.util.stream.Stream"
import {$IntConsumer$$Type} from "it.unimi.dsi.fastutil.ints.IntConsumer"

export interface $IntCollection$$Interface extends $Collection$$Interface<(integer)>, $IntIterable$$Interface {
get "empty"(): boolean
}

export class $IntCollection implements $IntCollection$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): boolean
/**
 * 
 * @deprecated
 */
 "add"(arg0: any): boolean
 "add"(arg0: integer): boolean
/**
 * 
 * @deprecated
 */
 "add"(arg0: integer): boolean
 "toArray"(arg0: (integer)[]): (integer)[]
 "iterator"(): $IntIterator
/**
 * 
 * @deprecated
 */
 "stream"(): $Stream<(integer)>
 "intStream"(): $IntStream
/**
 * 
 * @deprecated
 */
 "contains"(arg0: any): boolean
 "contains"(arg0: integer): boolean
 "spliterator"(): $Spliterator
 "addAll"(arg0: $IntCollection$$Type): boolean
/**
 * 
 * @deprecated
 */
 "removeIf"(arg0: $Predicate$$Type<(integer)>): boolean
 "removeIf"(arg0: $IntPredicate$0$$Type): boolean
 "removeIf"(arg0: $IntPredicate$$Type): boolean
 "removeAll"(arg0: $IntCollection$$Type): boolean
 "retainAll"(arg0: $IntCollection$$Type): boolean
 "containsAll"(arg0: $IntCollection$$Type): boolean
/**
 * 
 * @deprecated
 */
 "parallelStream"(): $Stream<(integer)>
 "rem"(arg0: integer): boolean
/**
 * 
 * @deprecated
 */
 "toIntArray"(arg0: (integer)[]): (integer)[]
 "toIntArray"(): (integer)[]
 "intSpliterator"(): $IntSpliterator
 "intIterator"(): $IntIterator
 "intParallelStream"(): $IntStream
 "size"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "toArray"(): (any)[]
 "addAll"(arg0: $Collection$$Type<(integer)>): boolean
 "removeAll"(arg0: $Collection$$Type<(never)>): boolean
 "retainAll"(arg0: $Collection$$Type<(never)>): boolean
 "containsAll"(arg0: $Collection$$Type<(never)>): boolean
 "forEach"(arg0: $IntConsumer$0$$Type): void
/**
 * 
 * @deprecated
 */
 "forEach"(arg0: $Consumer$$Type<(integer)>): void
 "forEach"(arg0: $IntConsumer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntCollection$$Type = ($IntCollection);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntCollection$$Original = $IntCollection;}
declare module "it.unimi.dsi.fastutil.shorts.ShortList" {
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$List, $List$$Type, $List$$Interface} from "java.util.List"
import {$IntPredicate$$Type} from "java.util.function.IntPredicate"
import {$IntFunction$$Type} from "java.util.function.IntFunction"
import {$ShortConsumer$$Type} from "it.unimi.dsi.fastutil.shorts.ShortConsumer"
import {$IntConsumer$$Type} from "java.util.function.IntConsumer"
import {$Stream} from "java.util.stream.Stream"
import {$ShortUnaryOperator$$Type} from "it.unimi.dsi.fastutil.shorts.ShortUnaryOperator"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$ShortPredicate$$Type} from "it.unimi.dsi.fastutil.shorts.ShortPredicate"
import {$Collection$$Type} from "java.util.Collection"
import {$SequencedCollection} from "java.util.SequencedCollection"
import {$Comparator$$Type} from "java.util.Comparator"
import {$IntStream} from "java.util.stream.IntStream"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$IntSpliterator} from "it.unimi.dsi.fastutil.ints.IntSpliterator"
import {$ShortComparator$$Type} from "it.unimi.dsi.fastutil.shorts.ShortComparator"
import {$ShortSpliterator} from "it.unimi.dsi.fastutil.shorts.ShortSpliterator"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ShortListIterator} from "it.unimi.dsi.fastutil.shorts.ShortListIterator"
import {$IntUnaryOperator$$Type} from "java.util.function.IntUnaryOperator"
import {$ShortCollection$$Type, $ShortCollection$$Interface} from "it.unimi.dsi.fastutil.shorts.ShortCollection"
import {$IntIterator} from "it.unimi.dsi.fastutil.ints.IntIterator"
import {$ListIterator} from "java.util.ListIterator"

export interface $ShortList$$Interface extends $List$$Interface<(short)>, $Comparable$$Interface<($List<(short)>)>, $ShortCollection$$Interface {
set "elements"(value: (short)[])
get "empty"(): boolean
get "first"(): short
get "last"(): short
}

export class $ShortList implements $ShortList$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: integer): any
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): boolean
 "size"(arg0: integer): void
/**
 * 
 * @deprecated
 */
 "get"(arg0: integer): any
 "indexOf"(arg0: short): integer
/**
 * 
 * @deprecated
 */
 "indexOf"(arg0: any): integer
 "getShort"(arg0: integer): short
 "lastIndexOf"(arg0: short): integer
/**
 * 
 * @deprecated
 */
 "lastIndexOf"(arg0: any): integer
/**
 * 
 * @deprecated
 */
 "replaceAll"(arg0: $UnaryOperator$$Type<(short)>): void
 "replaceAll"(arg0: $IntUnaryOperator$$Type): void
 "replaceAll"(arg0: $ShortUnaryOperator$$Type): void
/**
 * 
 * @deprecated
 */
 "add"(arg0: integer, arg1: short): void
/**
 * 
 * @deprecated
 */
 "add"(arg0: integer, arg1: any): void
/**
 * 
 * @deprecated
 */
 "add"(arg0: any): boolean
/**
 * 
 * @deprecated
 */
 "add"(arg0: short): boolean
 "add"(arg0: short): boolean
 "add"(arg0: integer, arg1: short): void
 "subList"(arg0: integer, arg1: integer): $ShortList
 "iterator"(): $ShortListIterator
static "of"(arg0: short): $ShortList
static "of"(): $ShortList
static "of"(arg0: short, arg1: short, arg2: short): $ShortList
static "of"(...arg0: (short)[]): $ShortList
static "of"(arg0: short, arg1: short): $ShortList
/**
 * 
 * @deprecated
 */
 "contains"(arg0: any): boolean
 "spliterator"(): $ShortSpliterator
 "addAll"(arg0: $ShortList$$Type): boolean
 "addAll"(arg0: integer, arg1: $ShortCollection$$Type): boolean
 "addAll"(arg0: integer, arg1: $ShortList$$Type): boolean
 "set"(arg0: integer, arg1: short): short
/**
 * 
 * @deprecated
 */
 "set"(arg0: integer, arg1: any): any
/**
 * 
 * @deprecated
 */
 "set"(arg0: integer, arg1: short): short
 "sort"(arg0: $ShortComparator$$Type): void
/**
 * 
 * @deprecated
 */
 "sort"(arg0: $Comparator$$Type<(short)>): void
 "listIterator"(arg0: integer): $ListIterator
 "listIterator"(): $ShortListIterator
 "getElements"(arg0: integer, arg1: (short)[], arg2: integer, arg3: integer): void
 "setElements"(arg0: integer, arg1: (short)[], arg2: integer, arg3: integer): void
 "setElements"(arg0: (short)[]): void
 "setElements"(arg0: integer, arg1: (short)[]): void
 "removeShort"(arg0: integer): short
 "unstableSort"(arg0: $ShortComparator$$Type): void
/**
 * 
 * @deprecated
 */
 "unstableSort"(arg0: $Comparator$$Type<(short)>): void
 "removeElements"(arg0: integer, arg1: integer): void
 "addElements"(arg0: integer, arg1: (short)[], arg2: integer, arg3: integer): void
 "addElements"(arg0: integer, arg1: (short)[]): void
 "size"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<E>(arg0: $Collection$$Type<(short)>): $List<(short)>
 "clear"(): void
 "isEmpty"(): boolean
 "toArray"(): (any)[]
 "toArray"<T>(arg0: (T)[]): (T)[]
static "of"<E>(arg0: short, arg1: short, arg2: short): $List<(short)>
static "of"<E>(arg0: short, arg1: short, arg2: short, arg3: short): $List<(short)>
static "of"<E>(arg0: short, arg1: short, arg2: short, arg3: short, arg4: short): $List<(short)>
static "of"<E>(arg0: short, arg1: short, arg2: short, arg3: short, arg4: short, arg5: short, arg6: short, arg7: short, arg8: short, arg9: short): $List<(short)>
static "of"<E>(arg0: short, arg1: short, arg2: short, arg3: short, arg4: short, arg5: short, arg6: short, arg7: short, arg8: short): $List<(short)>
static "of"<E>(arg0: short): $List<(short)>
static "of"<E>(arg0: short, arg1: short): $List<(short)>
static "of"<E>(arg0: short, arg1: short, arg2: short, arg3: short, arg4: short, arg5: short, arg6: short): $List<(short)>
static "of"<E>(arg0: short, arg1: short, arg2: short, arg3: short, arg4: short, arg5: short, arg6: short, arg7: short): $List<(short)>
static "of"<E>(...arg0: (short)[]): $List<(short)>
static "of"<E>(arg0: short, arg1: short, arg2: short, arg3: short, arg4: short, arg5: short): $List<(short)>
 "addAll"(arg0: $Collection$$Type<(short)>): boolean
 "addAll"(arg0: integer, arg1: $Collection$$Type<(short)>): boolean
 "getFirst"(): short
 "getLast"(): short
 "addFirst"(arg0: short): void
 "addLast"(arg0: short): void
 "removeFirst"(): short
 "removeLast"(): short
 "removeAll"(arg0: $Collection$$Type<(never)>): boolean
 "retainAll"(arg0: $Collection$$Type<(never)>): boolean
 "reversed"(): $SequencedCollection
 "containsAll"(arg0: $Collection$$Type<(never)>): boolean
 "compareTo"(arg0: $List$$Type<(short)>): integer
 "toArray"(arg0: (short)[]): (short)[]
/**
 * 
 * @deprecated
 */
 "stream"(): $Stream<(short)>
 "intStream"(): $IntStream
 "contains"(arg0: short): boolean
 "addAll"(arg0: $ShortCollection$$Type): boolean
/**
 * 
 * @deprecated
 */
 "removeIf"(arg0: $Predicate$$Type<(short)>): boolean
 "removeIf"(arg0: $ShortPredicate$$Type): boolean
 "removeIf"(arg0: $IntPredicate$$Type): boolean
 "removeAll"(arg0: $ShortCollection$$Type): boolean
 "retainAll"(arg0: $ShortCollection$$Type): boolean
 "containsAll"(arg0: $ShortCollection$$Type): boolean
/**
 * 
 * @deprecated
 */
 "parallelStream"(): $Stream<(short)>
 "rem"(arg0: short): boolean
/**
 * 
 * @deprecated
 */
 "toShortArray"(arg0: (short)[]): (short)[]
 "toShortArray"(): (short)[]
 "intSpliterator"(): $IntSpliterator
 "intIterator"(): $IntIterator
 "intParallelStream"(): $IntStream
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "forEach"(arg0: $ShortConsumer$$Type): void
/**
 * 
 * @deprecated
 */
 "forEach"(arg0: $Consumer$$Type<(short)>): void
 "forEach"(arg0: $IntConsumer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShortList$$Type = ($ShortList);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShortList$$Original = $ShortList;}
declare module "it.unimi.dsi.fastutil.objects.ObjectBidirectionalIterator" {
import {$ObjectIterator$$Interface} from "it.unimi.dsi.fastutil.objects.ObjectIterator"
import {$BidirectionalIterator$$Interface} from "it.unimi.dsi.fastutil.BidirectionalIterator"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $ObjectBidirectionalIterator$$Interface<K> extends $ObjectIterator$$Interface<(K)>, $BidirectionalIterator$$Interface<(K)> {
}

export class $ObjectBidirectionalIterator<K> implements $ObjectBidirectionalIterator$$Interface {
 "skip"(arg0: integer): integer
 "back"(arg0: integer): integer
 "hasPrevious"(): boolean
 "previous"(): K
 "remove"(): void
 "forEachRemaining"(arg0: $Consumer$$Type<(K)>): void
 "hasNext"(): boolean
 "next"(): K
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectBidirectionalIterator$$Type<K> = ($ObjectBidirectionalIterator<(K)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ObjectBidirectionalIterator$$Original<K> = $ObjectBidirectionalIterator<(K)>;}
declare module "it.unimi.dsi.fastutil.objects.Object2IntMap" {
import {$Object2IntFunction, $Object2IntFunction$$Type, $Object2IntFunction$$Interface} from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import {$Reference2IntFunction} from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import {$Long2IntFunction} from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import {$Object2ObjectFunction, $Object2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import {$Short2IntFunction} from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import {$Int2FloatFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import {$Byte2IntFunction} from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"
import {$IntBinaryOperator$$Type} from "java.util.function.IntBinaryOperator"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$Float2IntFunction} from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import {$Int2CharFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import {$Int2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import {$Int2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$Char2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import {$Object2DoubleFunction} from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import {$Int2IntFunction, $Int2IntFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Object2FloatFunction} from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import {$Byte2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import {$Set} from "java.util.Set"
import {$Int2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import {$Reference2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Collection} from "java.util.Collection"
import {$Map, $Map$$Type, $Map$$Interface} from "java.util.Map"
import {$IntBinaryOperator$$Type as $IntBinaryOperator$0$$Type} from "it.unimi.dsi.fastutil.ints.IntBinaryOperator"
import {$Object2CharFunction} from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import {$Int2ShortFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import {$Object2ByteFunction} from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$ToIntFunction$$Type} from "java.util.function.ToIntFunction"
import {$Float2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import {$ObjectSet} from "it.unimi.dsi.fastutil.objects.ObjectSet"
import {$Int2LongFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import {$Object2ShortFunction} from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import {$Object2ReferenceFunction} from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import {$Short2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import {$Char2IntFunction} from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Double2IntFunction} from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import {$Object2LongFunction} from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import {$Double2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import {$Object2IntMap$Entry} from "it.unimi.dsi.fastutil.objects.Object2IntMap$Entry"
import {$Int2ByteFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import {$Long2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"

export interface $Object2IntMap$$Interface<K> extends $Object2IntFunction$$Interface<(K)>, $Map$$Interface<(K), (integer)> {
[index: string | number]: integer
get "empty"(): boolean
}

export class $Object2IntMap<K> implements $Object2IntMap$$Interface {
 "computeInt"(arg0: K, arg1: $BiFunction$$Type<(K), (integer), (integer)>): integer
 "remove"(arg0: any, arg1: integer): boolean
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): integer
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any, arg1: any): boolean
 "size"(): integer
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): integer
/**
 * 
 * @deprecated
 */
 "put"(arg0: K, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "values"(): $Collection
 "clear"(): void
 "replace"(arg0: K, arg1: integer, arg2: integer): boolean
 "replace"(arg0: K, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "replace"(arg0: K, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "replace"(arg0: any, arg1: any, arg2: any): boolean
/**
 * 
 * @deprecated
 */
 "replace"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "replace"(arg0: K, arg1: integer, arg2: integer): boolean
 "merge"(arg0: K, arg1: integer, arg2: $BiFunction$$Type<(integer), (integer), (integer)>): integer
/**
 * 
 * @deprecated
 */
 "merge"(arg0: K, arg1: integer, arg2: $BiFunction$$Type<(integer), (integer), (integer)>): integer
/**
 * 
 * @deprecated
 */
 "merge"(arg0: any, arg1: any, arg2: $BiFunction$$Type): any
/**
 * 
 * @deprecated
 */
 "entrySet"(): $ObjectSet<($Map$Entry<(K), (integer)>)>
 "putIfAbsent"(arg0: K, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "putIfAbsent"(arg0: K, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "putIfAbsent"(arg0: any, arg1: any): any
 "forEach"(arg0: $BiConsumer$$Type<(K), (integer)>): void
 "containsKey"(arg0: any): boolean
 "computeIfAbsent"(arg0: K, arg1: $Object2IntFunction$$Type<(K)>): integer
 "computeIfAbsent"(arg0: K, arg1: $ToIntFunction$$Type<(K)>): integer
 "keySet"(): $Set
/**
 * 
 * @deprecated
 */
 "containsValue"(arg0: any): boolean
 "containsValue"(arg0: integer): boolean
 "getOrDefault"(arg0: any, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "computeIntIfAbsentPartial"(arg0: K, arg1: $Object2IntFunction$$Type<(K)>): integer
 "computeIntIfPresent"(arg0: K, arg1: $BiFunction$$Type<(K), (integer), (integer)>): integer
 "defaultReturnValue"(): integer
 "defaultReturnValue"(arg0: integer): void
 "object2IntEntrySet"(): $ObjectSet<($Object2IntMap$Entry<(K)>)>
/**
 * 
 * @deprecated
 */
 "computeIntIfAbsent"(arg0: K, arg1: $ToIntFunction$$Type<(K)>): integer
/**
 * 
 * @deprecated
 */
 "mergeInt"(arg0: K, arg1: integer, arg2: $BiFunction$$Type<(integer), (integer), (integer)>): integer
 "mergeInt"(arg0: K, arg1: integer, arg2: $IntBinaryOperator$0$$Type): integer
 "mergeInt"(arg0: K, arg1: integer, arg2: $IntBinaryOperator$$Type): integer
 "removeInt"(arg0: any): integer
 "put"(arg0: K, arg1: integer): integer
 "getInt"(arg0: any): integer
 "applyAsInt"(arg0: K): integer
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(integer), (T)>): $Function<(K), (T)>
 "andThenFloat"(arg0: $Int2FloatFunction$$Type): $Object2FloatFunction<(K)>
 "andThenObject"<T>(arg0: $Int2ObjectFunction$$Type<(T)>): $Object2ObjectFunction<(K), (T)>
 "composeByte"(arg0: $Byte2ObjectFunction$$Type<(K)>): $Byte2IntFunction
 "andThenLong"(arg0: $Int2LongFunction$$Type): $Object2LongFunction<(K)>
 "composeLong"(arg0: $Long2ObjectFunction$$Type<(K)>): $Long2IntFunction
 "andThenChar"(arg0: $Int2CharFunction$$Type): $Object2CharFunction<(K)>
 "andThenDouble"(arg0: $Int2DoubleFunction$$Type): $Object2DoubleFunction<(K)>
 "composeObject"<T>(arg0: $Object2ObjectFunction$$Type<(T), (K)>): $Object2IntFunction<(T)>
 "composeChar"(arg0: $Char2ObjectFunction$$Type<(K)>): $Char2IntFunction
 "composeReference"<T>(arg0: $Reference2ObjectFunction$$Type<(T), (K)>): $Reference2IntFunction<(T)>
 "andThenShort"(arg0: $Int2ShortFunction$$Type): $Object2ShortFunction<(K)>
 "composeShort"(arg0: $Short2ObjectFunction$$Type<(K)>): $Short2IntFunction
 "composeFloat"(arg0: $Float2ObjectFunction$$Type<(K)>): $Float2IntFunction
 "andThenReference"<T>(arg0: $Int2ReferenceFunction$$Type<(T)>): $Object2ReferenceFunction<(K), (T)>
 "composeDouble"(arg0: $Double2ObjectFunction$$Type<(K)>): $Double2IntFunction
 "andThenByte"(arg0: $Int2ByteFunction$$Type): $Object2ByteFunction<(K)>
 "composeInt"(arg0: $Int2ObjectFunction$$Type<(K)>): $Int2IntFunction
 "andThenInt"(arg0: $Int2IntFunction$$Type): $Object2IntFunction<(K)>
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<K, V>(arg0: $Map$$Type<(K), (integer)>): $Map<(K), (integer)>
 "isEmpty"(): boolean
 "replaceAll"(arg0: $BiFunction$$Type<(K), (integer), (integer)>): void
static "of"<K, V>(arg0: K, arg1: integer, arg2: K, arg3: integer, arg4: K, arg5: integer, arg6: K, arg7: integer): $Map<(K), (integer)>
static "of"<K, V>(): $Map<(K), (integer)>
static "of"<K, V>(arg0: K, arg1: integer): $Map<(K), (integer)>
static "of"<K, V>(arg0: K, arg1: integer, arg2: K, arg3: integer): $Map<(K), (integer)>
static "of"<K, V>(arg0: K, arg1: integer, arg2: K, arg3: integer, arg4: K, arg5: integer): $Map<(K), (integer)>
static "of"<K, V>(arg0: K, arg1: integer, arg2: K, arg3: integer, arg4: K, arg5: integer, arg6: K, arg7: integer, arg8: K, arg9: integer, arg10: K, arg11: integer, arg12: K, arg13: integer, arg14: K, arg15: integer, arg16: K, arg17: integer, arg18: K, arg19: integer): $Map<(K), (integer)>
static "of"<K, V>(arg0: K, arg1: integer, arg2: K, arg3: integer, arg4: K, arg5: integer, arg6: K, arg7: integer, arg8: K, arg9: integer, arg10: K, arg11: integer, arg12: K, arg13: integer, arg14: K, arg15: integer, arg16: K, arg17: integer): $Map<(K), (integer)>
static "of"<K, V>(arg0: K, arg1: integer, arg2: K, arg3: integer, arg4: K, arg5: integer, arg6: K, arg7: integer, arg8: K, arg9: integer, arg10: K, arg11: integer, arg12: K, arg13: integer, arg14: K, arg15: integer): $Map<(K), (integer)>
static "of"<K, V>(arg0: K, arg1: integer, arg2: K, arg3: integer, arg4: K, arg5: integer, arg6: K, arg7: integer, arg8: K, arg9: integer, arg10: K, arg11: integer, arg12: K, arg13: integer): $Map<(K), (integer)>
static "of"<K, V>(arg0: K, arg1: integer, arg2: K, arg3: integer, arg4: K, arg5: integer, arg6: K, arg7: integer, arg8: K, arg9: integer, arg10: K, arg11: integer): $Map<(K), (integer)>
static "of"<K, V>(arg0: K, arg1: integer, arg2: K, arg3: integer, arg4: K, arg5: integer, arg6: K, arg7: integer, arg8: K, arg9: integer): $Map<(K), (integer)>
 "putAll"(arg0: $Map$$Type<(K), (integer)>): void
 "compute"(arg0: K, arg1: $BiFunction$$Type<(K), (integer), (integer)>): integer
static "entry"<K, V>(arg0: K, arg1: integer): $Map$Entry<(K), (integer)>
 "computeIfAbsent"(arg0: K, arg1: $Function$$Type<(K), (integer)>): integer
 "computeIfPresent"(arg0: K, arg1: $BiFunction$$Type<(K), (integer), (integer)>): integer
static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(K), (integer)>)[]): $Map<(K), (integer)>
 "apply"(arg0: K): integer
static "identity"<T>(): $Function<(K), (K)>
 "compose"<V>(arg0: $Function$$Type<(V), (K)>): $Function<(V), (integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Object2IntMap$$Type<K> = ($Object2IntMap<(K)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Object2IntMap$$Original<K> = $Object2IntMap<(K)>;}
declare module "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction" {
import {$Char2DoubleFunction} from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import {$Byte2ByteFunction, $Byte2ByteFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction"
import {$Float2ByteFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import {$Long2ByteFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import {$Byte2IntFunction} from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"
import {$Double2FloatFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import {$Double2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import {$Reference2ByteFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import {$Byte2ReferenceFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import {$Object2DoubleFunction} from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Byte2ObjectFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import {$IntToDoubleFunction$$Interface} from "java.util.function.IntToDoubleFunction"
import {$Byte2ShortFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import {$Int2DoubleFunction} from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import {$Byte2CharFunction} from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import {$Short2DoubleFunction} from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import {$Double2DoubleFunction, $Double2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2DoubleFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Long2DoubleFunction} from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import {$Object2ByteFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import {$Double2CharFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import {$Byte2LongFunction} from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import {$Double2LongFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import {$Char2ByteFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import {$Double2ByteFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import {$Double2IntFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import {$Double2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import {$Reference2DoubleFunction} from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import {$Byte2FloatFunction} from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import {$Short2ByteFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import {$Float2DoubleFunction} from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import {$Int2ByteFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import {$Double2ShortFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"

export interface $Byte2DoubleFunction$$Interface extends $Function$0$$Interface<(byte), (double)>, $IntToDoubleFunction$$Interface {

(arg0: byte): double
}

export class $Byte2DoubleFunction implements $Byte2DoubleFunction$$Interface {
 "remove"(arg0: byte): double
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): double
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): double
 "get"(arg0: byte): double
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: byte, arg1: double): double
/**
 * 
 * @deprecated
 */
 "put"(arg0: byte, arg1: double): double
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "containsKey"(arg0: byte): boolean
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: double): double
 "getOrDefault"(arg0: byte, arg1: double): double
/**
 * 
 * @deprecated
 */
 "applyAsDouble"(arg0: integer): double
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (byte)>): $Function<(T), (double)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(double), (T)>): $Function<(byte), (T)>
 "andThenFloat"(arg0: $Double2FloatFunction$$Type): $Byte2FloatFunction
 "andThenObject"<T>(arg0: $Double2ObjectFunction$$Type<(T)>): $Byte2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2ByteFunction$$Type): $Byte2DoubleFunction
 "andThenLong"(arg0: $Double2LongFunction$$Type): $Byte2LongFunction
 "defaultReturnValue"(): double
 "defaultReturnValue"(arg0: double): void
 "composeLong"(arg0: $Long2ByteFunction$$Type): $Long2DoubleFunction
 "andThenChar"(arg0: $Double2CharFunction$$Type): $Byte2CharFunction
 "andThenDouble"(arg0: $Double2DoubleFunction$$Type): $Byte2DoubleFunction
 "composeObject"<T>(arg0: $Object2ByteFunction$$Type<(T)>): $Object2DoubleFunction<(T)>
 "composeChar"(arg0: $Char2ByteFunction$$Type): $Char2DoubleFunction
 "composeReference"<T>(arg0: $Reference2ByteFunction$$Type<(T)>): $Reference2DoubleFunction<(T)>
 "andThenShort"(arg0: $Double2ShortFunction$$Type): $Byte2ShortFunction
 "composeShort"(arg0: $Short2ByteFunction$$Type): $Short2DoubleFunction
 "composeFloat"(arg0: $Float2ByteFunction$$Type): $Float2DoubleFunction
 "andThenReference"<T>(arg0: $Double2ReferenceFunction$$Type<(T)>): $Byte2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2ByteFunction$$Type): $Double2DoubleFunction
 "andThenByte"(arg0: $Double2ByteFunction$$Type): $Byte2ByteFunction
 "composeInt"(arg0: $Int2ByteFunction$$Type): $Int2DoubleFunction
 "andThenInt"(arg0: $Double2IntFunction$$Type): $Byte2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: byte): double
static "identity"<T>(): $Function<(byte), (byte)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Byte2DoubleFunction$$Type = ((arg0: byte) => double);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Byte2DoubleFunction$$Original = $Byte2DoubleFunction;}
declare module "it.unimi.dsi.fastutil.objects.Object2ObjectFunction" {
import {$Reference2ObjectFunction, $Reference2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Object2CharFunction, $Object2CharFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import {$Object2IntFunction, $Object2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Object2ByteFunction, $Object2ByteFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import {$Float2ObjectFunction, $Float2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import {$Int2ObjectFunction, $Int2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$Char2ObjectFunction, $Char2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import {$Object2ReferenceFunction, $Object2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import {$Object2ShortFunction, $Object2ShortFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import {$Object2DoubleFunction, $Object2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import {$Short2ObjectFunction, $Short2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Object2FloatFunction, $Object2FloatFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import {$Byte2ObjectFunction, $Byte2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import {$Object2LongFunction, $Object2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import {$Double2ObjectFunction, $Double2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import {$Long2ObjectFunction, $Long2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"

export interface $Object2ObjectFunction$$Interface<K, V> extends $Function$0$$Interface<(K), (V)> {

(arg0: any): V
}

export class $Object2ObjectFunction<K, V> implements $Object2ObjectFunction$$Interface {
 "remove"(arg0: any): V
 "get"(arg0: any): V
 "put"(arg0: K, arg1: V): V
 "getOrDefault"(arg0: any, arg1: V): V
 "andThenFloat"(arg0: $Object2FloatFunction$$Type<(V)>): $Object2FloatFunction<(K)>
 "andThenObject"<T>(arg0: $Object2ObjectFunction$$Type<(V), (T)>): $Object2ObjectFunction<(K), (T)>
 "composeByte"(arg0: $Byte2ObjectFunction$$Type<(K)>): $Byte2ObjectFunction<(V)>
 "andThenLong"(arg0: $Object2LongFunction$$Type<(V)>): $Object2LongFunction<(K)>
 "defaultReturnValue"(arg0: V): void
 "defaultReturnValue"(): V
 "composeLong"(arg0: $Long2ObjectFunction$$Type<(K)>): $Long2ObjectFunction<(V)>
 "andThenChar"(arg0: $Object2CharFunction$$Type<(V)>): $Object2CharFunction<(K)>
 "andThenDouble"(arg0: $Object2DoubleFunction$$Type<(V)>): $Object2DoubleFunction<(K)>
 "composeObject"<T>(arg0: $Object2ObjectFunction$$Type<(T), (K)>): $Object2ObjectFunction<(T), (V)>
 "composeChar"(arg0: $Char2ObjectFunction$$Type<(K)>): $Char2ObjectFunction<(V)>
 "composeReference"<T>(arg0: $Reference2ObjectFunction$$Type<(T), (K)>): $Reference2ObjectFunction<(T), (V)>
 "andThenShort"(arg0: $Object2ShortFunction$$Type<(V)>): $Object2ShortFunction<(K)>
 "composeShort"(arg0: $Short2ObjectFunction$$Type<(K)>): $Short2ObjectFunction<(V)>
 "composeFloat"(arg0: $Float2ObjectFunction$$Type<(K)>): $Float2ObjectFunction<(V)>
 "andThenReference"<T>(arg0: $Object2ReferenceFunction$$Type<(V), (T)>): $Object2ReferenceFunction<(K), (T)>
 "composeDouble"(arg0: $Double2ObjectFunction$$Type<(K)>): $Double2ObjectFunction<(V)>
 "andThenByte"(arg0: $Object2ByteFunction$$Type<(V)>): $Object2ByteFunction<(K)>
 "composeInt"(arg0: $Int2ObjectFunction$$Type<(K)>): $Int2ObjectFunction<(V)>
 "andThenInt"(arg0: $Object2IntFunction$$Type<(V)>): $Object2IntFunction<(K)>
 "size"(): integer
 "clear"(): void
 "apply"(arg0: K): V
 "containsKey"(arg0: any): boolean
static "identity"<T>(): $Function<(K), (K)>
 "compose"<V>(arg0: $Function$$Type<(V), (K)>): $Function<(V), (V)>
 "andThen"<V>(arg0: $Function$$Type<(V), (V)>): $Function<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Object2ObjectFunction$$Type<K, V> = ((arg0: any) => V);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Object2ObjectFunction$$Original<K, V> = $Object2ObjectFunction<(K), (V)>;}
declare module "it.unimi.dsi.fastutil.longs.LongSpliterator" {
import {$Spliterator$OfLong$$Interface} from "java.util.Spliterator$OfLong"
import {$Comparator} from "java.util.Comparator"
import {$LongConsumer$$Type} from "java.util.function.LongConsumer"
import {$Spliterator} from "java.util.Spliterator"
import {$LongConsumer$$Type as $LongConsumer$0$$Type} from "it.unimi.dsi.fastutil.longs.LongConsumer"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $LongSpliterator$$Interface extends $Spliterator$OfLong$$Interface {
get "comparator"(): $Comparator
get "exactSizeIfKnown"(): long
}

export class $LongSpliterator implements $LongSpliterator$$Interface {
/**
 * 
 * @deprecated
 */
 "forEachRemaining"(arg0: $Consumer$$Type<(long)>): void
 "forEachRemaining"(arg0: $LongConsumer$0$$Type): void
 "skip"(arg0: long): long
 "trySplit"(): $Spliterator
/**
 * 
 * @deprecated
 */
 "tryAdvance"(arg0: $Consumer$$Type<(long)>): boolean
 "tryAdvance"(arg0: $LongConsumer$0$$Type): boolean
 "getComparator"(): $Comparator
 "forEachRemaining"(arg0: any): void
 "forEachRemaining"(arg0: $LongConsumer$$Type): void
 "tryAdvance"(arg0: $LongConsumer$$Type): boolean
 "tryAdvance"(arg0: any): boolean
 "characteristics"(): integer
 "estimateSize"(): long
 "getExactSizeIfKnown"(): long
 "hasCharacteristics"(arg0: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongSpliterator$$Type = ($LongSpliterator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LongSpliterator$$Original = $LongSpliterator;}
declare module "it.unimi.dsi.fastutil.objects.AbstractObject2ByteFunction" {
import {$Byte2ByteFunction, $Byte2ByteFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction"
import {$Byte2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import {$Float2ByteFunction} from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import {$Object2IntFunction} from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import {$Long2ByteFunction} from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import {$Object2ObjectFunction, $Object2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import {$Byte2IntFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"
import {$Reference2ByteFunction} from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import {$Byte2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import {$Int2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$Char2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import {$Object2DoubleFunction} from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Object2FloatFunction} from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import {$Byte2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import {$Byte2ShortFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import {$Byte2CharFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import {$Reference2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Object2CharFunction} from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import {$Object2ByteFunction, $Object2ByteFunction$$Interface} from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import {$Byte2LongFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import {$Float2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import {$Char2ByteFunction} from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import {$Double2ByteFunction} from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import {$Object2ShortFunction} from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Object2ReferenceFunction} from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import {$Short2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import {$Object2LongFunction} from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import {$Double2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import {$Byte2FloatFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import {$Short2ByteFunction} from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import {$Int2ByteFunction} from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import {$Long2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"

export class $AbstractObject2ByteFunction<K> implements $Object2ByteFunction$$Interface<(K)>, $Serializable$$Interface {
public "defaultReturnValue"(arg0: byte): void
public "defaultReturnValue"(): byte
/**
 * 
 * @deprecated
 */
public "remove"(arg0: any): any
/**
 * 
 * @deprecated
 */
public "get"(arg0: any): any
/**
 * 
 * @deprecated
 */
public "put"(arg0: K, arg1: byte): byte
public "put"(arg0: K, arg1: byte): byte
/**
 * 
 * @deprecated
 */
public "put"(arg0: any, arg1: any): any
public "getByte"(arg0: any): byte
/**
 * 
 * @deprecated
 */
public "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
public "getOrDefault"(arg0: any, arg1: byte): byte
public "getOrDefault"(arg0: any, arg1: byte): byte
public "applyAsInt"(arg0: K): integer
/**
 * 
 * @deprecated
 */
public "andThen"<T>(arg0: $Function$$Type<(byte), (T)>): $Function<(K), (T)>
public "andThenFloat"(arg0: $Byte2FloatFunction$$Type): $Object2FloatFunction<(K)>
public "andThenObject"<T>(arg0: $Byte2ObjectFunction$$Type<(T)>): $Object2ObjectFunction<(K), (T)>
public "composeByte"(arg0: $Byte2ObjectFunction$$Type<(K)>): $Byte2ByteFunction
public "andThenLong"(arg0: $Byte2LongFunction$$Type): $Object2LongFunction<(K)>
public "composeLong"(arg0: $Long2ObjectFunction$$Type<(K)>): $Long2ByteFunction
public "andThenChar"(arg0: $Byte2CharFunction$$Type): $Object2CharFunction<(K)>
public "andThenDouble"(arg0: $Byte2DoubleFunction$$Type): $Object2DoubleFunction<(K)>
public "composeObject"<T>(arg0: $Object2ObjectFunction$$Type<(T), (K)>): $Object2ByteFunction<(T)>
public "composeChar"(arg0: $Char2ObjectFunction$$Type<(K)>): $Char2ByteFunction
public "composeReference"<T>(arg0: $Reference2ObjectFunction$$Type<(T), (K)>): $Reference2ByteFunction<(T)>
public "andThenShort"(arg0: $Byte2ShortFunction$$Type): $Object2ShortFunction<(K)>
public "composeShort"(arg0: $Short2ObjectFunction$$Type<(K)>): $Short2ByteFunction
public "composeFloat"(arg0: $Float2ObjectFunction$$Type<(K)>): $Float2ByteFunction
public "andThenReference"<T>(arg0: $Byte2ReferenceFunction$$Type<(T)>): $Object2ReferenceFunction<(K), (T)>
public "composeDouble"(arg0: $Double2ObjectFunction$$Type<(K)>): $Double2ByteFunction
public "andThenByte"(arg0: $Byte2ByteFunction$$Type): $Object2ByteFunction<(K)>
public "composeInt"(arg0: $Int2ObjectFunction$$Type<(K)>): $Int2ByteFunction
public "andThenInt"(arg0: $Byte2IntFunction$$Type): $Object2IntFunction<(K)>
public "removeByte"(arg0: any): byte
public "size"(): integer
public "clear"(): void
public "apply"(arg0: K): byte
public "containsKey"(arg0: any): boolean
public static "identity"<T>(): $Function<(K), (K)>
public "compose"<V>(arg0: $Function$$Type<(V), (K)>): $Function<(V), (byte)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractObject2ByteFunction$$Type<K> = ($AbstractObject2ByteFunction<(K)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractObject2ByteFunction$$Original<K> = $AbstractObject2ByteFunction<(K)>;}
declare module "it.unimi.dsi.fastutil.objects.Reference2ObjectArrayMap" {
import {$ObjectCollection} from "it.unimi.dsi.fastutil.objects.ObjectCollection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$AbstractReference2ObjectMap} from "it.unimi.dsi.fastutil.objects.AbstractReference2ObjectMap"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Function} from "java.util.function.Function"
import {$Cloneable$$Interface} from "java.lang.Cloneable"
import {$Set} from "java.util.Set"
import {$Reference2ObjectMap$FastEntrySet} from "it.unimi.dsi.fastutil.objects.Reference2ObjectMap$FastEntrySet"
import {$Reference2ObjectMap$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ObjectMap"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export class $Reference2ObjectArrayMap<K, V> extends $AbstractReference2ObjectMap<(K), (V)> implements $Serializable$$Interface, $Cloneable$$Interface {
constructor(arg0: $Map$$Type<(K), (V)>)
constructor(arg0: (any)[], arg1: (any)[], arg2: integer)
constructor(arg0: (any)[], arg1: (any)[])
constructor()
constructor(arg0: integer)
constructor(arg0: $Reference2ObjectMap$$Type<(K), (V)>)

public "remove"(arg0: any): V
public "size"(): integer
public "get"(arg0: any): V
public "put"(arg0: K, arg1: V): V
public "values"(): $ObjectCollection<(V)>
public "clone"(): any
public "clear"(): void
public "isEmpty"(): boolean
public "containsKey"(arg0: any): boolean
public "keySet"(): $Set
public "containsValue"(arg0: any): boolean
public "reference2ObjectEntrySet"(): $Reference2ObjectMap$FastEntrySet<(K), (V)>
public "defaultReturnValue"(arg0: V): void
public "defaultReturnValue"(): V
public static "copyOf"<K, V>(arg0: $Map$$Type<(K), (V)>): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
public static "of"<K, V>(): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(K), (V)>)[]): $Map<(K), (V)>
public static "identity"<T>(): $Function<(T), (T)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Reference2ObjectArrayMap$$Type<K, V> = ($Reference2ObjectArrayMap<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Reference2ObjectArrayMap$$Original<K, V> = $Reference2ObjectArrayMap<(K), (V)>;}
declare module "it.unimi.dsi.fastutil.shorts.Short2LongFunction" {
import {$Long2CharFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import {$Long2IntFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import {$Long2ByteFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import {$Short2IntFunction} from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import {$Reference2ShortFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import {$Reference2LongFunction} from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import {$Long2ShortFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import {$Short2CharFunction} from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import {$Char2ShortFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Short2ShortFunction, $Short2ShortFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ShortFunction"
import {$Byte2ShortFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import {$Short2DoubleFunction} from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Long2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import {$Long2LongFunction, $Long2LongFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import {$Int2ShortFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import {$Float2LongFunction} from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import {$Short2ReferenceFunction} from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import {$Float2ShortFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import {$Long2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import {$Byte2LongFunction} from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import {$Char2LongFunction} from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import {$Double2LongFunction} from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import {$IntToLongFunction$$Interface} from "java.util.function.IntToLongFunction"
import {$Int2LongFunction} from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import {$Short2ObjectFunction} from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import {$Object2ShortFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import {$Long2FloatFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import {$Short2FloatFunction} from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import {$Object2LongFunction} from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import {$Short2ByteFunction} from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import {$Double2ShortFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"
import {$Long2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"

export interface $Short2LongFunction$$Interface extends $Function$0$$Interface<(short), (long)>, $IntToLongFunction$$Interface {

(arg0: short): long
}

export class $Short2LongFunction implements $Short2LongFunction$$Interface {
 "remove"(arg0: short): long
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): long
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): long
 "get"(arg0: short): long
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: short, arg1: long): long
/**
 * 
 * @deprecated
 */
 "put"(arg0: short, arg1: long): long
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "containsKey"(arg0: short): boolean
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: long): long
 "getOrDefault"(arg0: short, arg1: long): long
/**
 * 
 * @deprecated
 */
 "applyAsLong"(arg0: integer): long
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (short)>): $Function<(T), (long)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(long), (T)>): $Function<(short), (T)>
 "andThenFloat"(arg0: $Long2FloatFunction$$Type): $Short2FloatFunction
 "andThenObject"<T>(arg0: $Long2ObjectFunction$$Type<(T)>): $Short2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2ShortFunction$$Type): $Byte2LongFunction
 "andThenLong"(arg0: $Long2LongFunction$$Type): $Short2LongFunction
 "defaultReturnValue"(): long
 "defaultReturnValue"(arg0: long): void
 "composeLong"(arg0: $Long2ShortFunction$$Type): $Long2LongFunction
 "andThenChar"(arg0: $Long2CharFunction$$Type): $Short2CharFunction
 "andThenDouble"(arg0: $Long2DoubleFunction$$Type): $Short2DoubleFunction
 "composeObject"<T>(arg0: $Object2ShortFunction$$Type<(T)>): $Object2LongFunction<(T)>
 "composeChar"(arg0: $Char2ShortFunction$$Type): $Char2LongFunction
 "composeReference"<T>(arg0: $Reference2ShortFunction$$Type<(T)>): $Reference2LongFunction<(T)>
 "andThenShort"(arg0: $Long2ShortFunction$$Type): $Short2ShortFunction
 "composeShort"(arg0: $Short2ShortFunction$$Type): $Short2LongFunction
 "composeFloat"(arg0: $Float2ShortFunction$$Type): $Float2LongFunction
 "andThenReference"<T>(arg0: $Long2ReferenceFunction$$Type<(T)>): $Short2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2ShortFunction$$Type): $Double2LongFunction
 "andThenByte"(arg0: $Long2ByteFunction$$Type): $Short2ByteFunction
 "composeInt"(arg0: $Int2ShortFunction$$Type): $Int2LongFunction
 "andThenInt"(arg0: $Long2IntFunction$$Type): $Short2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: short): long
static "identity"<T>(): $Function<(short), (short)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Short2LongFunction$$Type = ((arg0: short) => long);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Short2LongFunction$$Original = $Short2LongFunction;}
declare module "it.unimi.dsi.fastutil.ints.Int2ObjectMap" {
import {$Object2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import {$Reference2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import {$Long2IntFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import {$Object2ObjectFunction, $Object2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import {$Short2IntFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import {$Int2FloatFunction} from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import {$Byte2IntFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"
import {$Int2ObjectMap$Entry} from "it.unimi.dsi.fastutil.ints.Int2ObjectMap$Entry"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$IntFunction$$Type} from "java.util.function.IntFunction"
import {$Int2CharFunction} from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import {$Float2IntFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import {$Int2ReferenceFunction} from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import {$Int2ObjectFunction, $Int2ObjectFunction$$Type, $Int2ObjectFunction$$Interface} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$Char2ObjectFunction} from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import {$Object2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import {$Int2IntFunction, $Int2IntFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Object2FloatFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import {$Byte2ObjectFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import {$Set} from "java.util.Set"
import {$Int2DoubleFunction} from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import {$Reference2ObjectFunction} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Map, $Map$$Type, $Map$$Interface} from "java.util.Map"
import {$Object2CharFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import {$Int2ShortFunction} from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import {$Object2ByteFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$Float2ObjectFunction} from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import {$ObjectCollection} from "it.unimi.dsi.fastutil.objects.ObjectCollection"
import {$ObjectSet} from "it.unimi.dsi.fastutil.objects.ObjectSet"
import {$Int2LongFunction} from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import {$Short2ObjectFunction} from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import {$Object2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import {$Object2ShortFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import {$Char2IntFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Double2IntFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import {$Object2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import {$Double2ObjectFunction} from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import {$Int2ByteFunction} from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import {$Long2ObjectFunction} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"

export interface $Int2ObjectMap$$Interface<V> extends $Int2ObjectFunction$$Interface<(V)>, $Map$$Interface<(integer), (V)> {
[index: string | number]: V
get "empty"(): boolean
}

export class $Int2ObjectMap<V> implements $Int2ObjectMap$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): V
 "remove"(arg0: integer, arg1: any): boolean
 "size"(): integer
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): V
/**
 * 
 * @deprecated
 */
 "put"(arg0: integer, arg1: V): V
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "values"(): $ObjectCollection<(V)>
 "clear"(): void
 "replace"(arg0: integer, arg1: V, arg2: V): boolean
 "replace"(arg0: integer, arg1: V): V
 "merge"(arg0: integer, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
/**
 * 
 * @deprecated
 */
 "entrySet"(): $Set
 "putIfAbsent"(arg0: integer, arg1: V): V
 "compute"(arg0: integer, arg1: $BiFunction$$Type<(integer), (V), (V)>): V
 "forEach"(arg0: $BiConsumer$$Type<(integer), (V)>): void
 "containsKey"(arg0: integer): boolean
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "computeIfAbsent"(arg0: integer, arg1: $Int2ObjectFunction$$Type<(V)>): V
 "computeIfAbsent"(arg0: integer, arg1: $IntFunction$$Type<(V)>): V
 "keySet"(): $Set
 "getOrDefault"(arg0: integer, arg1: V): V
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: V): V
 "computeIfPresent"(arg0: integer, arg1: $BiFunction$$Type<(integer), (V), (V)>): V
/**
 * 
 * @deprecated
 */
 "computeIfAbsentPartial"(arg0: integer, arg1: $Int2ObjectFunction$$Type<(V)>): V
 "defaultReturnValue"(arg0: V): void
 "defaultReturnValue"(): V
 "int2ObjectEntrySet"(): $ObjectSet<($Int2ObjectMap$Entry<(V)>)>
 "remove"(arg0: integer): V
 "get"(arg0: integer): V
 "put"(arg0: integer, arg1: V): V
 "apply"(arg0: integer): V
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (integer)>): $Function<(T), (V)>
 "andThenFloat"(arg0: $Object2FloatFunction$$Type<(V)>): $Int2FloatFunction
 "andThenObject"<T>(arg0: $Object2ObjectFunction$$Type<(V), (T)>): $Int2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2IntFunction$$Type): $Byte2ObjectFunction<(V)>
 "andThenLong"(arg0: $Object2LongFunction$$Type<(V)>): $Int2LongFunction
 "composeLong"(arg0: $Long2IntFunction$$Type): $Long2ObjectFunction<(V)>
 "andThenChar"(arg0: $Object2CharFunction$$Type<(V)>): $Int2CharFunction
 "andThenDouble"(arg0: $Object2DoubleFunction$$Type<(V)>): $Int2DoubleFunction
 "composeObject"<T>(arg0: $Object2IntFunction$$Type<(T)>): $Object2ObjectFunction<(T), (V)>
 "composeChar"(arg0: $Char2IntFunction$$Type): $Char2ObjectFunction<(V)>
 "composeReference"<T>(arg0: $Reference2IntFunction$$Type<(T)>): $Reference2ObjectFunction<(T), (V)>
 "andThenShort"(arg0: $Object2ShortFunction$$Type<(V)>): $Int2ShortFunction
 "composeShort"(arg0: $Short2IntFunction$$Type): $Short2ObjectFunction<(V)>
 "composeFloat"(arg0: $Float2IntFunction$$Type): $Float2ObjectFunction<(V)>
 "andThenReference"<T>(arg0: $Object2ReferenceFunction$$Type<(V), (T)>): $Int2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2IntFunction$$Type): $Double2ObjectFunction<(V)>
 "andThenByte"(arg0: $Object2ByteFunction$$Type<(V)>): $Int2ByteFunction
 "composeInt"(arg0: $Int2IntFunction$$Type): $Int2ObjectFunction<(V)>
 "andThenInt"(arg0: $Object2IntFunction$$Type<(V)>): $Int2IntFunction
 "remove"(arg0: any, arg1: any): boolean
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<K, V>(arg0: $Map$$Type<(integer), (V)>): $Map<(integer), (V)>
 "isEmpty"(): boolean
 "replace"(arg0: integer, arg1: V, arg2: V): boolean
 "replace"(arg0: integer, arg1: V): V
 "replaceAll"(arg0: $BiFunction$$Type<(integer), (V), (V)>): void
static "of"<K, V>(arg0: integer, arg1: V, arg2: integer, arg3: V, arg4: integer, arg5: V, arg6: integer, arg7: V): $Map<(integer), (V)>
static "of"<K, V>(): $Map<(integer), (V)>
static "of"<K, V>(arg0: integer, arg1: V): $Map<(integer), (V)>
static "of"<K, V>(arg0: integer, arg1: V, arg2: integer, arg3: V): $Map<(integer), (V)>
static "of"<K, V>(arg0: integer, arg1: V, arg2: integer, arg3: V, arg4: integer, arg5: V): $Map<(integer), (V)>
static "of"<K, V>(arg0: integer, arg1: V, arg2: integer, arg3: V, arg4: integer, arg5: V, arg6: integer, arg7: V, arg8: integer, arg9: V, arg10: integer, arg11: V, arg12: integer, arg13: V, arg14: integer, arg15: V, arg16: integer, arg17: V, arg18: integer, arg19: V): $Map<(integer), (V)>
static "of"<K, V>(arg0: integer, arg1: V, arg2: integer, arg3: V, arg4: integer, arg5: V, arg6: integer, arg7: V, arg8: integer, arg9: V, arg10: integer, arg11: V, arg12: integer, arg13: V, arg14: integer, arg15: V, arg16: integer, arg17: V): $Map<(integer), (V)>
static "of"<K, V>(arg0: integer, arg1: V, arg2: integer, arg3: V, arg4: integer, arg5: V, arg6: integer, arg7: V, arg8: integer, arg9: V, arg10: integer, arg11: V, arg12: integer, arg13: V, arg14: integer, arg15: V): $Map<(integer), (V)>
static "of"<K, V>(arg0: integer, arg1: V, arg2: integer, arg3: V, arg4: integer, arg5: V, arg6: integer, arg7: V, arg8: integer, arg9: V, arg10: integer, arg11: V, arg12: integer, arg13: V): $Map<(integer), (V)>
static "of"<K, V>(arg0: integer, arg1: V, arg2: integer, arg3: V, arg4: integer, arg5: V, arg6: integer, arg7: V, arg8: integer, arg9: V, arg10: integer, arg11: V): $Map<(integer), (V)>
static "of"<K, V>(arg0: integer, arg1: V, arg2: integer, arg3: V, arg4: integer, arg5: V, arg6: integer, arg7: V, arg8: integer, arg9: V): $Map<(integer), (V)>
 "merge"(arg0: integer, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
 "putAll"(arg0: $Map$$Type<(integer), (V)>): void
 "putIfAbsent"(arg0: integer, arg1: V): V
 "compute"(arg0: integer, arg1: $BiFunction$$Type<(integer), (V), (V)>): V
static "entry"<K, V>(arg0: integer, arg1: V): $Map$Entry<(integer), (V)>
 "computeIfAbsent"(arg0: integer, arg1: $Function$$Type<(integer), (V)>): V
 "containsValue"(arg0: any): boolean
 "computeIfPresent"(arg0: integer, arg1: $BiFunction$$Type<(integer), (V), (V)>): V
static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(integer), (V)>)[]): $Map<(integer), (V)>
 "apply"(arg0: integer): V
static "identity"<T>(): $Function<(integer), (integer)>
 "andThen"<V>(arg0: $Function$$Type<(V), (V)>): $Function<(integer), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Int2ObjectMap$$Type<V> = ($Int2ObjectMap<(V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Int2ObjectMap$$Original<V> = $Int2ObjectMap<(V)>;}
declare module "it.unimi.dsi.fastutil.objects.AbstractReferenceSet" {
import {$AbstractReferenceCollection} from "it.unimi.dsi.fastutil.objects.AbstractReferenceCollection"
import {$Collection$$Type} from "java.util.Collection"
import {$Spliterator} from "java.util.Spliterator"
import {$ObjectIterator} from "it.unimi.dsi.fastutil.objects.ObjectIterator"
import {$ReferenceSet, $ReferenceSet$$Interface} from "it.unimi.dsi.fastutil.objects.ReferenceSet"
import {$Cloneable$$Interface} from "java.lang.Cloneable"
import {$Set} from "java.util.Set"

export class $AbstractReferenceSet<K> extends $AbstractReferenceCollection<(K)> implements $Cloneable$$Interface, $ReferenceSet$$Interface<(K)> {
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "iterator"(): $ObjectIterator<(K)>
public static "of"<K>(arg0: K, arg1: K): $ReferenceSet<(K)>
public static "of"<K>(...arg0: (K)[]): $ReferenceSet<(K)>
public static "of"<K>(arg0: K, arg1: K, arg2: K): $ReferenceSet<(K)>
public static "of"<K>(): $ReferenceSet<(K)>
public static "of"<K>(arg0: K): $ReferenceSet<(K)>
public "spliterator"(): $Spliterator
public "remove"(arg0: any): boolean
public "size"(): integer
public static "copyOf"<E>(arg0: $Collection$$Type<(K)>): $Set<(K)>
public "clear"(): void
public "isEmpty"(): boolean
public "add"(arg0: K): boolean
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K): $Set<(K)>
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K): $Set<(K)>
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K): $Set<(K)>
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K, arg6: K, arg7: K, arg8: K, arg9: K): $Set<(K)>
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K, arg6: K, arg7: K, arg8: K): $Set<(K)>
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K, arg6: K, arg7: K): $Set<(K)>
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K, arg6: K): $Set<(K)>
public "contains"(arg0: any): boolean
public "addAll"(arg0: $Collection$$Type<(K)>): boolean
public "removeAll"(arg0: $Collection$$Type<(never)>): boolean
public "retainAll"(arg0: $Collection$$Type<(never)>): boolean
public "containsAll"(arg0: $Collection$$Type<(never)>): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractReferenceSet$$Type<K> = ($AbstractReferenceSet<(K)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractReferenceSet$$Original<K> = $AbstractReferenceSet<(K)>;}
declare module "it.unimi.dsi.fastutil.doubles.DoubleBidirectionalIterator" {
import {$ObjectBidirectionalIterator$$Interface} from "it.unimi.dsi.fastutil.objects.ObjectBidirectionalIterator"
import {$DoubleConsumer$$Type as $DoubleConsumer$0$$Type} from "java.util.function.DoubleConsumer"
import {$DoubleIterator$$Interface} from "it.unimi.dsi.fastutil.doubles.DoubleIterator"
import {$DoubleConsumer$$Type} from "it.unimi.dsi.fastutil.doubles.DoubleConsumer"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $DoubleBidirectionalIterator$$Interface extends $DoubleIterator$$Interface, $ObjectBidirectionalIterator$$Interface<(double)> {
}

export class $DoubleBidirectionalIterator implements $DoubleBidirectionalIterator$$Interface {
 "skip"(arg0: integer): integer
/**
 * 
 * @deprecated
 */
 "previous"(): double
 "back"(arg0: integer): integer
 "previousDouble"(): double
/**
 * 
 * @deprecated
 */
 "forEachRemaining"(arg0: $Consumer$$Type<(double)>): void
 "forEachRemaining"(arg0: $DoubleConsumer$$Type): void
/**
 * 
 * @deprecated
 */
 "next"(): any
 "nextDouble"(): double
 "forEachRemaining"(arg0: any): void
 "forEachRemaining"(arg0: $DoubleConsumer$0$$Type): void
 "hasPrevious"(): boolean
 "remove"(): void
 "hasNext"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleBidirectionalIterator$$Type = ($DoubleBidirectionalIterator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoubleBidirectionalIterator$$Original = $DoubleBidirectionalIterator;}
declare module "it.unimi.dsi.fastutil.longs.Long2FloatFunction" {
import {$Float2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import {$Float2ByteFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import {$Long2CharFunction} from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import {$Long2ByteFunction} from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import {$Long2IntFunction} from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import {$Int2FloatFunction} from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import {$Float2IntFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import {$Reference2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import {$Double2FloatFunction} from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import {$Long2ShortFunction} from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import {$LongToDoubleFunction$$Interface} from "java.util.function.LongToDoubleFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Object2FloatFunction} from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import {$Float2CharFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Long2DoubleFunction} from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import {$Long2LongFunction, $Long2LongFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import {$Float2LongFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import {$Float2ShortFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import {$Long2ReferenceFunction} from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import {$Byte2LongFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import {$Reference2FloatFunction} from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import {$Char2LongFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import {$Double2LongFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import {$Float2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import {$Short2LongFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import {$Float2FloatFunction, $Float2FloatFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2FloatFunction"
import {$Int2LongFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import {$Char2FloatFunction} from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import {$Short2FloatFunction} from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import {$Object2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import {$Byte2FloatFunction} from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import {$Float2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import {$Long2ObjectFunction} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"

export interface $Long2FloatFunction$$Interface extends $Function$0$$Interface<(long), (float)>, $LongToDoubleFunction$$Interface {

(arg0: long): float
}

export class $Long2FloatFunction implements $Long2FloatFunction$$Interface {
 "remove"(arg0: long): float
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): float
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): float
 "get"(arg0: long): float
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: long, arg1: float): float
/**
 * 
 * @deprecated
 */
 "put"(arg0: long, arg1: float): float
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "containsKey"(arg0: long): boolean
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: float): float
 "getOrDefault"(arg0: long, arg1: float): float
 "applyAsDouble"(arg0: long): double
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (long)>): $Function<(T), (float)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(float), (T)>): $Function<(long), (T)>
 "andThenFloat"(arg0: $Float2FloatFunction$$Type): $Long2FloatFunction
 "andThenObject"<T>(arg0: $Float2ObjectFunction$$Type<(T)>): $Long2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2LongFunction$$Type): $Byte2FloatFunction
 "andThenLong"(arg0: $Float2LongFunction$$Type): $Long2LongFunction
 "defaultReturnValue"(): float
 "defaultReturnValue"(arg0: float): void
 "composeLong"(arg0: $Long2LongFunction$$Type): $Long2FloatFunction
 "andThenChar"(arg0: $Float2CharFunction$$Type): $Long2CharFunction
 "andThenDouble"(arg0: $Float2DoubleFunction$$Type): $Long2DoubleFunction
 "composeObject"<T>(arg0: $Object2LongFunction$$Type<(T)>): $Object2FloatFunction<(T)>
 "composeChar"(arg0: $Char2LongFunction$$Type): $Char2FloatFunction
 "composeReference"<T>(arg0: $Reference2LongFunction$$Type<(T)>): $Reference2FloatFunction<(T)>
 "andThenShort"(arg0: $Float2ShortFunction$$Type): $Long2ShortFunction
 "composeShort"(arg0: $Short2LongFunction$$Type): $Short2FloatFunction
 "composeFloat"(arg0: $Float2LongFunction$$Type): $Float2FloatFunction
 "andThenReference"<T>(arg0: $Float2ReferenceFunction$$Type<(T)>): $Long2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2LongFunction$$Type): $Double2FloatFunction
 "andThenByte"(arg0: $Float2ByteFunction$$Type): $Long2ByteFunction
 "composeInt"(arg0: $Int2LongFunction$$Type): $Int2FloatFunction
 "andThenInt"(arg0: $Float2IntFunction$$Type): $Long2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: long): float
static "identity"<T>(): $Function<(long), (long)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Long2FloatFunction$$Type = ((arg0: long) => float);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Long2FloatFunction$$Original = $Long2FloatFunction;}
declare module "it.unimi.dsi.fastutil.objects.AbstractReference2ObjectFunction" {
import {$Float2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import {$Object2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import {$Reference2IntFunction} from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import {$Object2ObjectFunction, $Object2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import {$Reference2ShortFunction} from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import {$Reference2LongFunction} from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import {$Double2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import {$Int2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import {$Reference2ByteFunction} from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import {$Int2ObjectFunction} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$Byte2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import {$Char2ObjectFunction} from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import {$Object2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Object2FloatFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import {$Byte2ObjectFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import {$Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ReferenceFunction"
import {$Reference2ObjectFunction, $Reference2ObjectFunction$$Interface} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Object2CharFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import {$Object2ByteFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import {$Short2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import {$Long2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import {$Reference2FloatFunction} from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import {$Float2ObjectFunction} from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import {$Reference2CharFunction} from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import {$Short2ObjectFunction} from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import {$Object2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import {$Char2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Object2ShortFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import {$Object2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import {$Double2ObjectFunction} from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import {$Reference2DoubleFunction} from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import {$Long2ObjectFunction} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"

export class $AbstractReference2ObjectFunction<K, V> implements $Reference2ObjectFunction$$Interface<(K), (V)>, $Serializable$$Interface {
public "defaultReturnValue"(arg0: V): void
public "defaultReturnValue"(): V
public "remove"(arg0: any): V
public "get"(arg0: any): V
public "put"(arg0: K, arg1: V): V
public "getOrDefault"(arg0: any, arg1: V): V
public "andThenFloat"(arg0: $Object2FloatFunction$$Type<(V)>): $Reference2FloatFunction<(K)>
public "andThenObject"<T>(arg0: $Object2ObjectFunction$$Type<(V), (T)>): $Reference2ObjectFunction<(K), (T)>
public "composeByte"(arg0: $Byte2ReferenceFunction$$Type<(K)>): $Byte2ObjectFunction<(V)>
public "andThenLong"(arg0: $Object2LongFunction$$Type<(V)>): $Reference2LongFunction<(K)>
public "composeLong"(arg0: $Long2ReferenceFunction$$Type<(K)>): $Long2ObjectFunction<(V)>
public "andThenChar"(arg0: $Object2CharFunction$$Type<(V)>): $Reference2CharFunction<(K)>
public "andThenDouble"(arg0: $Object2DoubleFunction$$Type<(V)>): $Reference2DoubleFunction<(K)>
public "composeObject"<T>(arg0: $Object2ReferenceFunction$$Type<(T), (K)>): $Object2ObjectFunction<(T), (V)>
public "composeChar"(arg0: $Char2ReferenceFunction$$Type<(K)>): $Char2ObjectFunction<(V)>
public "composeReference"<T>(arg0: $Reference2ReferenceFunction$$Type<(T), (K)>): $Reference2ObjectFunction<(T), (V)>
public "andThenShort"(arg0: $Object2ShortFunction$$Type<(V)>): $Reference2ShortFunction<(K)>
public "composeShort"(arg0: $Short2ReferenceFunction$$Type<(K)>): $Short2ObjectFunction<(V)>
public "composeFloat"(arg0: $Float2ReferenceFunction$$Type<(K)>): $Float2ObjectFunction<(V)>
public "andThenReference"<T>(arg0: $Object2ReferenceFunction$$Type<(V), (T)>): $Reference2ReferenceFunction<(K), (T)>
public "composeDouble"(arg0: $Double2ReferenceFunction$$Type<(K)>): $Double2ObjectFunction<(V)>
public "andThenByte"(arg0: $Object2ByteFunction$$Type<(V)>): $Reference2ByteFunction<(K)>
public "composeInt"(arg0: $Int2ReferenceFunction$$Type<(K)>): $Int2ObjectFunction<(V)>
public "andThenInt"(arg0: $Object2IntFunction$$Type<(V)>): $Reference2IntFunction<(K)>
public "size"(): integer
public "clear"(): void
public "apply"(arg0: K): V
public "containsKey"(arg0: any): boolean
public static "identity"<T>(): $Function<(K), (K)>
public "compose"<V>(arg0: $Function$$Type<(V), (K)>): $Function<(V), (V)>
public "andThen"<V>(arg0: $Function$$Type<(V), (V)>): $Function<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractReference2ObjectFunction$$Type<K, V> = ($AbstractReference2ObjectFunction<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractReference2ObjectFunction$$Original<K, V> = $AbstractReference2ObjectFunction<(K), (V)>;}
declare module "it.unimi.dsi.fastutil.ints.IntSpliterator" {
import {$Comparator} from "java.util.Comparator"
import {$Spliterator} from "java.util.Spliterator"
import {$Spliterator$OfInt$$Interface} from "java.util.Spliterator$OfInt"
import {$IntConsumer$$Type as $IntConsumer$0$$Type} from "java.util.function.IntConsumer"
import {$IntConsumer$$Type} from "it.unimi.dsi.fastutil.ints.IntConsumer"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $IntSpliterator$$Interface extends $Spliterator$OfInt$$Interface {
get "comparator"(): $Comparator
get "exactSizeIfKnown"(): long
}

export class $IntSpliterator implements $IntSpliterator$$Interface {
/**
 * 
 * @deprecated
 */
 "forEachRemaining"(arg0: $Consumer$$Type<(integer)>): void
 "forEachRemaining"(arg0: $IntConsumer$$Type): void
 "skip"(arg0: long): long
 "trySplit"(): $Spliterator
/**
 * 
 * @deprecated
 */
 "tryAdvance"(arg0: $Consumer$$Type<(integer)>): boolean
 "tryAdvance"(arg0: $IntConsumer$$Type): boolean
 "getComparator"(): $Comparator
 "forEachRemaining"(arg0: any): void
 "forEachRemaining"(arg0: $IntConsumer$0$$Type): void
 "tryAdvance"(arg0: $IntConsumer$0$$Type): boolean
 "tryAdvance"(arg0: any): boolean
 "characteristics"(): integer
 "estimateSize"(): long
 "getExactSizeIfKnown"(): long
 "hasCharacteristics"(arg0: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntSpliterator$$Type = ($IntSpliterator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntSpliterator$$Original = $IntSpliterator;}
declare module "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap" {
import {$AbstractObject2ByteSortedMap} from "it.unimi.dsi.fastutil.objects.AbstractObject2ByteSortedMap"
import {$Collection} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Comparator} from "java.util.Comparator"
import {$Hash$$Interface} from "it.unimi.dsi.fastutil.Hash"
import {$Object2ByteFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import {$Object2ByteSortedMap} from "it.unimi.dsi.fastutil.objects.Object2ByteSortedMap"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$ToIntFunction$$Type} from "java.util.function.ToIntFunction"
import {$ObjectSet} from "it.unimi.dsi.fastutil.objects.ObjectSet"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Object2ByteMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteMap"
import {$ObjectSortedSet} from "it.unimi.dsi.fastutil.objects.ObjectSortedSet"
import {$Function} from "java.util.function.Function"
import {$Cloneable$$Interface} from "java.lang.Cloneable"
import {$SortedMap} from "java.util.SortedMap"

export class $Object2ByteLinkedOpenHashMap<K> extends $AbstractObject2ByteSortedMap<(K)> implements $Serializable$$Interface, $Cloneable$$Interface, $Hash$$Interface {
constructor(arg0: $Object2ByteMap$$Type<(K)>, arg1: float)
constructor(arg0: $Object2ByteMap$$Type<(K)>)
constructor(arg0: (K)[], arg1: (byte)[], arg2: float)
constructor(arg0: (K)[], arg1: (byte)[])
constructor(arg0: integer, arg1: float)
constructor(arg0: integer)
constructor()
constructor(arg0: $Map$$Type<(K), (byte)>, arg1: float)
constructor(arg0: $Map$$Type<(K), (byte)>)

public "remove"(arg0: any, arg1: byte): boolean
public "size"(): integer
public "put"(arg0: K, arg1: byte): byte
public "values"(): $Collection
public "hashCode"(): integer
public "clone"(): $Object2ByteLinkedOpenHashMap<(K)>
public "getByte"(arg0: any): byte
public "clear"(): void
public "isEmpty"(): boolean
public "replace"(arg0: K, arg1: byte, arg2: byte): boolean
public "replace"(arg0: K, arg1: byte): byte
public "trim"(): boolean
public "trim"(arg0: integer): boolean
public "merge"(arg0: K, arg1: byte, arg2: $BiFunction$$Type<(byte), (byte), (byte)>): byte
public "putAll"(arg0: $Map$$Type<(K), (byte)>): void
public "putIfAbsent"(arg0: K, arg1: byte): byte
public "containsKey"(arg0: any): boolean
public "computeIfAbsent"(arg0: K, arg1: $ToIntFunction$$Type<(K)>): byte
public "computeIfAbsent"(arg0: K, arg1: $Object2ByteFunction$$Type<(K)>): byte
public "keySet"(): $ObjectSortedSet<(K)>
public "containsValue"(arg0: byte): boolean
public "getOrDefault"(arg0: any, arg1: byte): byte
public "ensureCapacity"(arg0: integer): void
public "comparator"(): $Comparator<(K)>
public "firstKey"(): K
public "addTo"(arg0: K, arg1: byte): byte
public "subMap"(arg0: any, arg1: any): $SortedMap
public "headMap"(arg0: K): $Object2ByteSortedMap<(K)>
public "tailMap"(arg0: any): $SortedMap
public "lastKey"(): K
public "computeByteIfPresent"(arg0: K, arg1: $BiFunction$$Type<(K), (byte), (byte)>): byte
public "object2ByteEntrySet"(): $ObjectSortedSet
public "removeFirstByte"(): byte
public "computeByte"(arg0: K, arg1: $BiFunction$$Type<(K), (byte), (byte)>): byte
public "removeLastByte"(): byte
public "getAndMoveToFirst"(arg0: K): byte
public "getAndMoveToLast"(arg0: K): byte
public "putAndMoveToFirst"(arg0: K, arg1: byte): byte
public "putAndMoveToLast"(arg0: K, arg1: byte): byte
public "removeByte"(arg0: any): byte
/**
 * 
 * @deprecated
 */
public "entrySet"(): $ObjectSet
/**
 * 
 * @deprecated
 */
public "remove"(arg0: any): any
public "defaultReturnValue"(): byte
public "defaultReturnValue"(arg0: byte): void
public static "copyOf"<K, V>(arg0: $Map$$Type<(K), (V)>): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
public static "of"<K, V>(): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(K), (V)>)[]): $Map<(K), (V)>
public static "identity"<T>(): $Function<(T), (T)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Object2ByteLinkedOpenHashMap$$Type<K> = ($Object2ByteLinkedOpenHashMap<(K)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Object2ByteLinkedOpenHashMap$$Original<K> = $Object2ByteLinkedOpenHashMap<(K)>;}
declare module "it.unimi.dsi.fastutil.ints.IntPredicate" {
import {$Predicate, $Predicate$$Type, $Predicate$$Interface} from "java.util.function.Predicate"
import {$IntPredicate as $IntPredicate$0, $IntPredicate$$Type as $IntPredicate$0$$Type, $IntPredicate$$Interface as $IntPredicate$0$$Interface} from "java.util.function.IntPredicate"

export interface $IntPredicate$$Interface extends $Predicate$$Interface<(integer)>, $IntPredicate$0$$Interface {

(arg0: integer): boolean
}

export class $IntPredicate implements $IntPredicate$$Interface {
/**
 * 
 * @deprecated
 */
 "test"(arg0: integer): boolean
/**
 * 
 * @deprecated
 */
 "test"(arg0: any): boolean
/**
 * 
 * @deprecated
 */
 "or"(arg0: $Predicate$$Type<(integer)>): $Predicate<(integer)>
 "or"(arg0: $IntPredicate$0$$Type): $IntPredicate
 "or"(arg0: $IntPredicate$$Type): $IntPredicate
 "negate"(): $IntPredicate$0
 "and"(arg0: $IntPredicate$0$$Type): $IntPredicate$0
 "and"(arg0: $IntPredicate$$Type): $IntPredicate
/**
 * 
 * @deprecated
 */
 "and"(arg0: $Predicate$$Type<(integer)>): $Predicate<(integer)>
static "not"<T>(arg0: $Predicate$$Type<(integer)>): $Predicate<(integer)>
static "isEqual"<T>(arg0: any): $Predicate<(integer)>
 "test"(arg0: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntPredicate$$Type = ((arg0: integer) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntPredicate$$Original = $IntPredicate;}
declare module "it.unimi.dsi.fastutil.objects.AbstractObjectList" {
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$Collection$$Type} from "java.util.Collection"
import {$Spliterator} from "java.util.Spliterator"
import {$SequencedCollection} from "java.util.SequencedCollection"
import {$Comparator$$Type} from "java.util.Comparator"
import {$ObjectIterator} from "it.unimi.dsi.fastutil.objects.ObjectIterator"
import {$List, $List$$Type} from "java.util.List"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Stack$$Interface} from "it.unimi.dsi.fastutil.Stack"
import {$ObjectList, $ObjectList$$Type, $ObjectList$$Interface} from "it.unimi.dsi.fastutil.objects.ObjectList"
import {$AbstractObjectCollection} from "it.unimi.dsi.fastutil.objects.AbstractObjectCollection"
import {$ObjectListIterator} from "it.unimi.dsi.fastutil.objects.ObjectListIterator"

export class $AbstractObjectList<K> extends $AbstractObjectCollection<(K)> implements $ObjectList$$Interface<(K)>, $Stack$$Interface<(K)> {
public "remove"(arg0: integer): K
public "size"(arg0: integer): void
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $List$$Type<(K)>): integer
public "indexOf"(arg0: any): integer
public "clear"(): void
public "lastIndexOf"(arg0: any): integer
public "add"(arg0: integer, arg1: K): void
public "add"(arg0: K): boolean
public "subList"(arg0: integer, arg1: integer): $ObjectList<(K)>
public "toArray"<T>(arg0: (T)[]): (T)[]
public "toArray"(): (any)[]
public "iterator"(): $ObjectIterator
public "contains"(arg0: any): boolean
public "addAll"(arg0: $Collection$$Type<(K)>): boolean
public "addAll"(arg0: integer, arg1: $Collection$$Type<(K)>): boolean
public "set"(arg0: integer, arg1: K): K
public "forEach"(arg0: $Consumer$$Type<(K)>): void
public "top"(): K
public "peek"(arg0: integer): K
public "listIterator"(arg0: integer): $ObjectListIterator<(K)>
public "listIterator"(): $ObjectListIterator<(K)>
public "push"(arg0: K): void
public "pop"(): K
public "getElements"(arg0: integer, arg1: (any)[], arg2: integer, arg3: integer): void
public "setElements"(arg0: integer, arg1: (K)[], arg2: integer, arg3: integer): void
public "removeElements"(arg0: integer, arg1: integer): void
public "addElements"(arg0: integer, arg1: (K)[], arg2: integer, arg3: integer): void
public "addElements"(arg0: integer, arg1: (K)[]): void
public static "of"<K>(...arg0: (K)[]): $ObjectList<(K)>
public static "of"<K>(arg0: K, arg1: K, arg2: K): $ObjectList<(K)>
public static "of"<K>(arg0: K, arg1: K): $ObjectList<(K)>
public static "of"<K>(): $ObjectList<(K)>
public static "of"<K>(arg0: K): $ObjectList<(K)>
public "spliterator"(): $Spliterator
public "addAll"(arg0: $ObjectList$$Type<(K)>): boolean
public "addAll"(arg0: integer, arg1: $ObjectList$$Type<(K)>): boolean
public "sort"(arg0: $Comparator$$Type<(K)>): void
public "setElements"(arg0: integer, arg1: (K)[]): void
public "setElements"(arg0: (K)[]): void
public "unstableSort"(arg0: $Comparator$$Type<(K)>): void
public "isEmpty"(): boolean
public "remove"(arg0: any): boolean
public "size"(): integer
public "get"(arg0: integer): K
public static "copyOf"<E>(arg0: $Collection$$Type<(K)>): $List<(K)>
public "replaceAll"(arg0: $UnaryOperator$$Type<(K)>): void
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K): $List<(K)>
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K): $List<(K)>
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K, arg6: K, arg7: K, arg8: K, arg9: K): $List<(K)>
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K, arg6: K, arg7: K, arg8: K): $List<(K)>
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K, arg6: K): $List<(K)>
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K, arg6: K, arg7: K): $List<(K)>
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K): $List<(K)>
public "getFirst"(): K
public "getLast"(): K
public "addFirst"(arg0: K): void
public "addLast"(arg0: K): void
public "removeFirst"(): K
public "removeLast"(): K
public "removeAll"(arg0: $Collection$$Type<(never)>): boolean
public "retainAll"(arg0: $Collection$$Type<(never)>): boolean
public "reversed"(): $SequencedCollection
public "containsAll"(arg0: $Collection$$Type<(never)>): boolean
set "elements"(value: (K)[])
get "empty"(): boolean
get "first"(): K
get "last"(): K
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractObjectList$$Type<K> = ($AbstractObjectList<(K)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractObjectList$$Original<K> = $AbstractObjectList<(K)>;}
declare module "it.unimi.dsi.fastutil.shorts.ShortListIterator" {
import {$ShortConsumer$$Type} from "it.unimi.dsi.fastutil.shorts.ShortConsumer"
import {$ListIterator$$Interface} from "java.util.ListIterator"
import {$IntConsumer$$Type} from "java.util.function.IntConsumer"
import {$ShortBidirectionalIterator$$Interface} from "it.unimi.dsi.fastutil.shorts.ShortBidirectionalIterator"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $ShortListIterator$$Interface extends $ShortBidirectionalIterator$$Interface, $ListIterator$$Interface<(short)> {
}

export class $ShortListIterator implements $ShortListIterator$$Interface {
 "remove"(): void
/**
 * 
 * @deprecated
 */
 "add"(arg0: short): void
/**
 * 
 * @deprecated
 */
 "add"(arg0: any): void
 "add"(arg0: short): void
/**
 * 
 * @deprecated
 */
 "next"(): any
/**
 * 
 * @deprecated
 */
 "set"(arg0: any): void
/**
 * 
 * @deprecated
 */
 "set"(arg0: short): void
 "set"(arg0: short): void
/**
 * 
 * @deprecated
 */
 "previous"(): any
 "skip"(arg0: integer): integer
 "back"(arg0: integer): integer
 "previousShort"(): short
 "hasNext"(): boolean
 "nextIndex"(): integer
 "previousIndex"(): integer
 "hasPrevious"(): boolean
 "forEachRemaining"(arg0: $IntConsumer$$Type): void
 "forEachRemaining"(arg0: $ShortConsumer$$Type): void
 "forEachRemaining"(arg0: any): void
/**
 * 
 * @deprecated
 */
 "forEachRemaining"(arg0: $Consumer$$Type<(short)>): void
 "nextShort"(): short
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShortListIterator$$Type = ($ShortListIterator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShortListIterator$$Original = $ShortListIterator;}
declare module "it.unimi.dsi.fastutil.objects.ReferenceOpenHashSet" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Collection$$Type} from "java.util.Collection"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Spliterator} from "java.util.Spliterator"
import {$Hash$$Interface} from "it.unimi.dsi.fastutil.Hash"
import {$AbstractReferenceSet} from "it.unimi.dsi.fastutil.objects.AbstractReferenceSet"
import {$Cloneable$$Interface} from "java.lang.Cloneable"
import {$Collector} from "java.util.stream.Collector"
import {$ReferenceCollection$$Type} from "it.unimi.dsi.fastutil.objects.ReferenceCollection"
import {$Set} from "java.util.Set"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $ReferenceOpenHashSet<K> extends $AbstractReferenceSet<(K)> implements $Serializable$$Interface, $Cloneable$$Interface, $Hash$$Interface {
constructor(arg0: (K)[], arg1: integer, arg2: integer, arg3: float)
constructor(arg0: $Iterator$$Type<(K)>)
constructor(arg0: $Iterator$$Type<(K)>, arg1: float)
constructor(arg0: $ReferenceCollection$$Type<(K)>)
constructor(arg0: (K)[], arg1: integer, arg2: integer)
constructor(arg0: (K)[], arg1: float)
constructor(arg0: (K)[])
constructor(arg0: integer, arg1: float)
constructor(arg0: integer)
constructor()
constructor(arg0: $ReferenceCollection$$Type<(K)>, arg1: float)
constructor(arg0: $Collection$$Type<(K)>)
constructor(arg0: $Collection$$Type<(K)>, arg1: float)

public "remove"(arg0: any): boolean
public "size"(): integer
public "hashCode"(): integer
public "clone"(): any
public "clear"(): void
public "isEmpty"(): boolean
public "add"(arg0: K): boolean
public "iterator"(): $Iterator
public "trim"(): boolean
public "trim"(arg0: integer): boolean
public static "of"<K>(arg0: K, arg1: K, arg2: K): $ReferenceOpenHashSet<(K)>
public static "of"<K>(arg0: K): $ReferenceOpenHashSet<(K)>
public static "of"<K>(...arg0: (K)[]): $ReferenceOpenHashSet<(K)>
public static "of"<K>(arg0: K, arg1: K): $ReferenceOpenHashSet<(K)>
public static "of"<K>(): $ReferenceOpenHashSet<(K)>
public "contains"(arg0: any): boolean
public "spliterator"(): $Spliterator
public "addAll"(arg0: $Collection$$Type<(K)>): boolean
public "forEach"(arg0: $Consumer$$Type<(K)>): void
public static "toSet"<K>(): $Collector<(K), (never), ($ReferenceOpenHashSet<(K)>)>
public "ensureCapacity"(arg0: integer): void
public static "toSetWithExpectedSize"<K>(arg0: integer): $Collector<(K), (never), ($ReferenceOpenHashSet<(K)>)>
public static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $Set<(E)>
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $Set<(E)>
public "removeAll"(arg0: $Collection$$Type<(never)>): boolean
public "retainAll"(arg0: $Collection$$Type<(never)>): boolean
public "containsAll"(arg0: $Collection$$Type<(never)>): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReferenceOpenHashSet$$Type<K> = ($ReferenceOpenHashSet<(K)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReferenceOpenHashSet$$Original<K> = $ReferenceOpenHashSet<(K)>;}
declare module "it.unimi.dsi.fastutil.objects.Reference2CharFunction" {
import {$Char2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import {$Float2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import {$Long2CharFunction} from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import {$Reference2IntFunction} from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import {$Reference2ShortFunction} from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import {$Reference2LongFunction} from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import {$Int2CharFunction} from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import {$Double2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import {$Int2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import {$Short2CharFunction} from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import {$Reference2ByteFunction} from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import {$Byte2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import {$Char2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import {$Char2ShortFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Float2CharFunction} from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import {$Byte2CharFunction} from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import {$Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ReferenceFunction"
import {$Reference2ObjectFunction} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Object2CharFunction} from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Short2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import {$Double2CharFunction} from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import {$Long2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import {$Char2CharFunction, $Char2CharFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2CharFunction"
import {$Reference2FloatFunction} from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import {$Char2LongFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import {$ToIntFunction$$Interface} from "java.util.function.ToIntFunction"
import {$Char2ByteFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import {$Object2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import {$Char2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import {$Char2IntFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import {$Char2FloatFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import {$Reference2DoubleFunction} from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"

export interface $Reference2CharFunction$$Interface<K> extends $Function$0$$Interface<(K), (character)>, $ToIntFunction$$Interface<(K)> {

(arg0: any): character
}

export class $Reference2CharFunction<K> implements $Reference2CharFunction$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): any
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): any
/**
 * 
 * @deprecated
 */
 "put"(arg0: K, arg1: character): character
 "put"(arg0: K, arg1: character): character
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "getChar"(arg0: any): character
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: character): character
 "getOrDefault"(arg0: any, arg1: character): character
 "applyAsInt"(arg0: K): integer
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(character), (T)>): $Function<(K), (T)>
 "andThenFloat"(arg0: $Char2FloatFunction$$Type): $Reference2FloatFunction<(K)>
 "andThenObject"<T>(arg0: $Char2ObjectFunction$$Type<(T)>): $Reference2ObjectFunction<(K), (T)>
 "composeByte"(arg0: $Byte2ReferenceFunction$$Type<(K)>): $Byte2CharFunction
 "andThenLong"(arg0: $Char2LongFunction$$Type): $Reference2LongFunction<(K)>
 "defaultReturnValue"(): character
 "defaultReturnValue"(arg0: character): void
 "composeLong"(arg0: $Long2ReferenceFunction$$Type<(K)>): $Long2CharFunction
 "andThenChar"(arg0: $Char2CharFunction$$Type): $Reference2CharFunction<(K)>
 "andThenDouble"(arg0: $Char2DoubleFunction$$Type): $Reference2DoubleFunction<(K)>
 "composeObject"<T>(arg0: $Object2ReferenceFunction$$Type<(T), (K)>): $Object2CharFunction<(T)>
 "composeChar"(arg0: $Char2ReferenceFunction$$Type<(K)>): $Char2CharFunction
 "composeReference"<T>(arg0: $Reference2ReferenceFunction$$Type<(T), (K)>): $Reference2CharFunction<(T)>
 "andThenShort"(arg0: $Char2ShortFunction$$Type): $Reference2ShortFunction<(K)>
 "composeShort"(arg0: $Short2ReferenceFunction$$Type<(K)>): $Short2CharFunction
 "composeFloat"(arg0: $Float2ReferenceFunction$$Type<(K)>): $Float2CharFunction
 "andThenReference"<T>(arg0: $Char2ReferenceFunction$$Type<(T)>): $Reference2ReferenceFunction<(K), (T)>
 "composeDouble"(arg0: $Double2ReferenceFunction$$Type<(K)>): $Double2CharFunction
 "andThenByte"(arg0: $Char2ByteFunction$$Type): $Reference2ByteFunction<(K)>
 "removeChar"(arg0: any): character
 "composeInt"(arg0: $Int2ReferenceFunction$$Type<(K)>): $Int2CharFunction
 "andThenInt"(arg0: $Char2IntFunction$$Type): $Reference2IntFunction<(K)>
 "size"(): integer
 "clear"(): void
 "apply"(arg0: K): character
 "containsKey"(arg0: any): boolean
static "identity"<T>(): $Function<(K), (K)>
 "compose"<V>(arg0: $Function$$Type<(V), (K)>): $Function<(V), (character)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Reference2CharFunction$$Type<K> = ((arg0: any) => character);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Reference2CharFunction$$Original<K> = $Reference2CharFunction<(K)>;}
declare module "it.unimi.dsi.fastutil.longs.LongIterable" {
import {$Iterable$$Interface} from "java.lang.Iterable"
import {$Iterator} from "java.util.Iterator"
import {$LongSpliterator} from "it.unimi.dsi.fastutil.longs.LongSpliterator"
import {$LongConsumer$$Type} from "java.util.function.LongConsumer"
import {$Spliterator} from "java.util.Spliterator"
import {$LongIterator} from "it.unimi.dsi.fastutil.longs.LongIterator"
import {$LongConsumer$$Type as $LongConsumer$0$$Type} from "it.unimi.dsi.fastutil.longs.LongConsumer"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $LongIterable$$Interface extends $Iterable$$Interface<(long)> {
}

export class $LongIterable implements $LongIterable$$Interface {
 "iterator"(): $Iterator
 "spliterator"(): $Spliterator
 "forEach"(arg0: $LongConsumer$$Type): void
/**
 * 
 * @deprecated
 */
 "forEach"(arg0: $Consumer$$Type<(long)>): void
 "forEach"(arg0: $LongConsumer$0$$Type): void
 "longIterator"(): $LongIterator
 "longSpliterator"(): $LongSpliterator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongIterable$$Type = ($LongIterable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LongIterable$$Original = $LongIterable;}
declare module "it.unimi.dsi.fastutil.Stack" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Stack$$Interface<K> {
get "empty"(): boolean
}

export class $Stack<K> implements $Stack$$Interface {
 "isEmpty"(): boolean
 "top"(): K
 "peek"(arg0: integer): K
 "push"(arg0: K): void
 "pop"(): K
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Stack$$Type<K> = ($Stack<(K)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Stack$$Original<K> = $Stack<(K)>;}
declare module "it.unimi.dsi.fastutil.objects.ObjectArrayList" {
import {$Iterator$$Type} from "java.util.Iterator"
import {$RandomAccess$$Interface} from "java.util.RandomAccess"
import {$Collection$$Type} from "java.util.Collection"
import {$Spliterator} from "java.util.Spliterator"
import {$SequencedCollection} from "java.util.SequencedCollection"
import {$Comparator$$Type} from "java.util.Comparator"
import {$ObjectIterator, $ObjectIterator$$Type} from "it.unimi.dsi.fastutil.objects.ObjectIterator"
import {$List, $List$$Type} from "java.util.List"
import {$AbstractObjectList} from "it.unimi.dsi.fastutil.objects.AbstractObjectList"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ObjectList, $ObjectList$$Type} from "it.unimi.dsi.fastutil.objects.ObjectList"
import {$ObjectCollection$$Type} from "it.unimi.dsi.fastutil.objects.ObjectCollection"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Cloneable$$Interface} from "java.lang.Cloneable"
import {$Collector} from "java.util.stream.Collector"
import {$ObjectListIterator} from "it.unimi.dsi.fastutil.objects.ObjectListIterator"

export class $ObjectArrayList<K> extends $AbstractObjectList<(K)> implements $RandomAccess$$Interface, $Cloneable$$Interface, $Serializable$$Interface {
static readonly "DEFAULT_INITIAL_CAPACITY": integer

constructor()
constructor(arg0: $Collection$$Type<(K)>)
constructor(arg0: (K)[], arg1: integer, arg2: integer)
constructor(arg0: $ObjectList$$Type<(K)>)
constructor(arg0: (K)[])
constructor(arg0: $ObjectCollection$$Type<(K)>)
constructor(arg0: $ObjectIterator$$Type<(K)>)
constructor(arg0: $Iterator$$Type<(K)>)
constructor(arg0: integer)

public "remove"(arg0: any): boolean
public "remove"(arg0: integer): K
public "size"(): integer
public "size"(arg0: integer): void
public "get"(arg0: integer): K
public "equals"(arg0: $ObjectArrayList$$Type<(K)>): boolean
public "equals"(arg0: any): boolean
public "clone"(): $ObjectArrayList<(K)>
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $ObjectArrayList$$Type<(K)>): integer
public "compareTo"(arg0: $List$$Type<(K)>): integer
public "indexOf"(arg0: any): integer
public "clear"(): void
public static "wrap"<K>(arg0: (K)[]): $ObjectArrayList<(K)>
public static "wrap"<K>(arg0: (K)[], arg1: integer): $ObjectArrayList<(K)>
public "lastIndexOf"(arg0: any): integer
public "isEmpty"(): boolean
public "add"(arg0: integer, arg1: K): void
public "add"(arg0: K): boolean
public "subList"(arg0: integer, arg1: integer): $List
public "toArray"<T>(arg0: (T)[]): (T)[]
public "toArray"(): (any)[]
public "trim"(arg0: integer): void
public "trim"(): void
public static "toList"<K>(): $Collector<(K), (never), ($ObjectArrayList<(K)>)>
public static "of"<K>(): $ObjectArrayList<(K)>
public static "of"<K>(...arg0: (K)[]): $ObjectArrayList<(K)>
public "elements"(): (K)[]
public "spliterator"(): $Spliterator
public "addAll"(arg0: integer, arg1: $ObjectList$$Type<(K)>): boolean
public "addAll"(arg0: integer, arg1: $Collection$$Type<(K)>): boolean
public "set"(arg0: integer, arg1: K): K
public "forEach"(arg0: $Consumer$$Type<(K)>): void
public "sort"(arg0: $Comparator$$Type<(K)>): void
public "ensureCapacity"(arg0: integer): void
public "removeAll"(arg0: $Collection$$Type<(never)>): boolean
public "listIterator"(arg0: integer): $ObjectListIterator<(K)>
public "getElements"(arg0: integer, arg1: (any)[], arg2: integer, arg3: integer): void
public "setElements"(arg0: integer, arg1: (K)[], arg2: integer, arg3: integer): void
public static "toListWithExpectedSize"<K>(arg0: integer): $Collector<(K), (never), ($ObjectArrayList<(K)>)>
public "unstableSort"(arg0: $Comparator$$Type<(K)>): void
public "removeElements"(arg0: integer, arg1: integer): void
public "addElements"(arg0: integer, arg1: (K)[], arg2: integer, arg3: integer): void
public "iterator"(): $ObjectIterator
public static "of"<K>(arg0: K, arg1: K, arg2: K): $ObjectList<(K)>
public static "of"<K>(arg0: K, arg1: K): $ObjectList<(K)>
public static "of"<K>(arg0: K): $ObjectList<(K)>
public static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public "retainAll"(arg0: $Collection$$Type<(never)>): boolean
public "reversed"(): $SequencedCollection
public "containsAll"(arg0: $Collection$$Type<(never)>): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectArrayList$$Type<K> = ($ObjectArrayList<(K)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ObjectArrayList$$Original<K> = $ObjectArrayList<(K)>;}
declare module "it.unimi.dsi.fastutil.objects.Reference2IntFunction" {
import {$Float2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import {$Object2IntFunction} from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import {$Long2IntFunction} from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import {$Short2IntFunction} from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import {$Int2FloatFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import {$Byte2IntFunction} from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"
import {$Reference2ShortFunction} from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import {$Reference2LongFunction} from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import {$Float2IntFunction} from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import {$Int2CharFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import {$Double2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import {$Int2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import {$Reference2ByteFunction} from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import {$Byte2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import {$Int2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$Int2IntFunction, $Int2IntFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Int2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import {$Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ReferenceFunction"
import {$Reference2ObjectFunction} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Int2ShortFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import {$Short2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import {$Long2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import {$Reference2FloatFunction} from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import {$ToIntFunction$$Interface} from "java.util.function.ToIntFunction"
import {$Reference2CharFunction} from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import {$Int2LongFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import {$Object2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import {$Char2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import {$Char2IntFunction} from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import {$Double2IntFunction} from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import {$Reference2DoubleFunction} from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import {$Int2ByteFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"

export interface $Reference2IntFunction$$Interface<K> extends $Function$0$$Interface<(K), (integer)>, $ToIntFunction$$Interface<(K)> {

(arg0: any): integer
}

export class $Reference2IntFunction<K> implements $Reference2IntFunction$$Interface {
 "removeInt"(arg0: any): integer
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): integer
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): integer
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: K, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "put"(arg0: K, arg1: integer): integer
 "getInt"(arg0: any): integer
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: integer): integer
 "getOrDefault"(arg0: any, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
 "applyAsInt"(arg0: K): integer
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(integer), (T)>): $Function<(K), (T)>
 "andThenFloat"(arg0: $Int2FloatFunction$$Type): $Reference2FloatFunction<(K)>
 "andThenObject"<T>(arg0: $Int2ObjectFunction$$Type<(T)>): $Reference2ObjectFunction<(K), (T)>
 "composeByte"(arg0: $Byte2ReferenceFunction$$Type<(K)>): $Byte2IntFunction
 "andThenLong"(arg0: $Int2LongFunction$$Type): $Reference2LongFunction<(K)>
 "defaultReturnValue"(arg0: integer): void
 "defaultReturnValue"(): integer
 "composeLong"(arg0: $Long2ReferenceFunction$$Type<(K)>): $Long2IntFunction
 "andThenChar"(arg0: $Int2CharFunction$$Type): $Reference2CharFunction<(K)>
 "andThenDouble"(arg0: $Int2DoubleFunction$$Type): $Reference2DoubleFunction<(K)>
 "composeObject"<T>(arg0: $Object2ReferenceFunction$$Type<(T), (K)>): $Object2IntFunction<(T)>
 "composeChar"(arg0: $Char2ReferenceFunction$$Type<(K)>): $Char2IntFunction
 "composeReference"<T>(arg0: $Reference2ReferenceFunction$$Type<(T), (K)>): $Reference2IntFunction<(T)>
 "andThenShort"(arg0: $Int2ShortFunction$$Type): $Reference2ShortFunction<(K)>
 "composeShort"(arg0: $Short2ReferenceFunction$$Type<(K)>): $Short2IntFunction
 "composeFloat"(arg0: $Float2ReferenceFunction$$Type<(K)>): $Float2IntFunction
 "andThenReference"<T>(arg0: $Int2ReferenceFunction$$Type<(T)>): $Reference2ReferenceFunction<(K), (T)>
 "composeDouble"(arg0: $Double2ReferenceFunction$$Type<(K)>): $Double2IntFunction
 "andThenByte"(arg0: $Int2ByteFunction$$Type): $Reference2ByteFunction<(K)>
 "composeInt"(arg0: $Int2ReferenceFunction$$Type<(K)>): $Int2IntFunction
 "andThenInt"(arg0: $Int2IntFunction$$Type): $Reference2IntFunction<(K)>
 "size"(): integer
 "clear"(): void
 "apply"(arg0: K): integer
 "containsKey"(arg0: any): boolean
static "identity"<T>(): $Function<(K), (K)>
 "compose"<V>(arg0: $Function$$Type<(V), (K)>): $Function<(V), (integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Reference2IntFunction$$Type<K> = ((arg0: any) => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Reference2IntFunction$$Original<K> = $Reference2IntFunction<(K)>;}
declare module "it.unimi.dsi.fastutil.longs.LongCollection" {
import {$LongPredicate$$Type} from "java.util.function.LongPredicate"
import {$Collection$$Type, $Collection$$Interface} from "java.util.Collection"
import {$Spliterator} from "java.util.Spliterator"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$LongStream} from "java.util.stream.LongStream"
import {$LongConsumer$$Type as $LongConsumer$0$$Type} from "it.unimi.dsi.fastutil.longs.LongConsumer"
import {$LongPredicate$$Type as $LongPredicate$0$$Type} from "it.unimi.dsi.fastutil.longs.LongPredicate"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$IntFunction$$Type} from "java.util.function.IntFunction"
import {$LongConsumer$$Type} from "java.util.function.LongConsumer"
import {$LongSpliterator} from "it.unimi.dsi.fastutil.longs.LongSpliterator"
import {$LongIterator} from "it.unimi.dsi.fastutil.longs.LongIterator"
import {$Stream} from "java.util.stream.Stream"
import {$LongIterable$$Interface} from "it.unimi.dsi.fastutil.longs.LongIterable"

export interface $LongCollection$$Interface extends $Collection$$Interface<(long)>, $LongIterable$$Interface {
get "empty"(): boolean
}

export class $LongCollection implements $LongCollection$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): boolean
/**
 * 
 * @deprecated
 */
 "add"(arg0: any): boolean
 "add"(arg0: long): boolean
/**
 * 
 * @deprecated
 */
 "add"(arg0: long): boolean
 "toArray"(arg0: (long)[]): (long)[]
 "iterator"(): $LongIterator
/**
 * 
 * @deprecated
 */
 "stream"(): $Stream<(long)>
 "contains"(arg0: long): boolean
/**
 * 
 * @deprecated
 */
 "contains"(arg0: any): boolean
 "spliterator"(): $Spliterator
 "addAll"(arg0: $LongCollection$$Type): boolean
 "removeIf"(arg0: $LongPredicate$$Type): boolean
/**
 * 
 * @deprecated
 */
 "removeIf"(arg0: $Predicate$$Type<(long)>): boolean
 "removeIf"(arg0: $LongPredicate$0$$Type): boolean
 "removeAll"(arg0: $LongCollection$$Type): boolean
 "retainAll"(arg0: $LongCollection$$Type): boolean
 "containsAll"(arg0: $LongCollection$$Type): boolean
/**
 * 
 * @deprecated
 */
 "parallelStream"(): $Stream<(long)>
 "rem"(arg0: long): boolean
 "longStream"(): $LongStream
/**
 * 
 * @deprecated
 */
 "toLongArray"(arg0: (long)[]): (long)[]
 "toLongArray"(): (long)[]
 "longParallelStream"(): $LongStream
 "longIterator"(): $LongIterator
 "longSpliterator"(): $LongSpliterator
 "size"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "toArray"(): (any)[]
 "addAll"(arg0: $Collection$$Type<(long)>): boolean
 "removeAll"(arg0: $Collection$$Type<(never)>): boolean
 "retainAll"(arg0: $Collection$$Type<(never)>): boolean
 "containsAll"(arg0: $Collection$$Type<(never)>): boolean
 "forEach"(arg0: $LongConsumer$$Type): void
/**
 * 
 * @deprecated
 */
 "forEach"(arg0: $Consumer$$Type<(long)>): void
 "forEach"(arg0: $LongConsumer$0$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongCollection$$Type = ($LongCollection);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LongCollection$$Original = $LongCollection;}
declare module "it.unimi.dsi.fastutil.shorts.Short2ByteFunction" {
import {$Byte2ByteFunction, $Byte2ByteFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction"
import {$Byte2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import {$Float2ByteFunction} from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import {$Long2ByteFunction} from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import {$Short2IntFunction} from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import {$Byte2IntFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"
import {$Reference2ShortFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import {$Long2ShortFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import {$Short2CharFunction} from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import {$Reference2ByteFunction} from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import {$Byte2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import {$Char2ShortFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Short2ShortFunction, $Short2ShortFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ShortFunction"
import {$Byte2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import {$Byte2ShortFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import {$Byte2CharFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import {$Short2DoubleFunction} from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Int2ShortFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import {$Object2ByteFunction} from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import {$Short2ReferenceFunction} from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import {$Float2ShortFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import {$Byte2LongFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import {$IntUnaryOperator, $IntUnaryOperator$$Type, $IntUnaryOperator$$Interface} from "java.util.function.IntUnaryOperator"
import {$Short2LongFunction} from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import {$Char2ByteFunction} from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import {$Double2ByteFunction} from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import {$Short2ObjectFunction} from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import {$Object2ShortFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import {$Short2FloatFunction} from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import {$Byte2FloatFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import {$Int2ByteFunction} from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import {$Double2ShortFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"

export interface $Short2ByteFunction$$Interface extends $Function$0$$Interface<(short), (byte)>, $IntUnaryOperator$$Interface {

(arg0: short): byte
}

export class $Short2ByteFunction implements $Short2ByteFunction$$Interface {
 "remove"(arg0: short): byte
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): byte
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): byte
 "get"(arg0: short): byte
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: short, arg1: byte): byte
/**
 * 
 * @deprecated
 */
 "put"(arg0: short, arg1: byte): byte
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "containsKey"(arg0: short): boolean
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: byte): byte
 "getOrDefault"(arg0: short, arg1: byte): byte
/**
 * 
 * @deprecated
 */
 "applyAsInt"(arg0: integer): integer
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (short)>): $Function<(T), (byte)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(byte), (T)>): $Function<(short), (T)>
 "andThenFloat"(arg0: $Byte2FloatFunction$$Type): $Short2FloatFunction
 "andThenObject"<T>(arg0: $Byte2ObjectFunction$$Type<(T)>): $Short2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2ShortFunction$$Type): $Byte2ByteFunction
 "andThenLong"(arg0: $Byte2LongFunction$$Type): $Short2LongFunction
 "defaultReturnValue"(): byte
 "defaultReturnValue"(arg0: byte): void
 "composeLong"(arg0: $Long2ShortFunction$$Type): $Long2ByteFunction
 "andThenChar"(arg0: $Byte2CharFunction$$Type): $Short2CharFunction
 "andThenDouble"(arg0: $Byte2DoubleFunction$$Type): $Short2DoubleFunction
 "composeObject"<T>(arg0: $Object2ShortFunction$$Type<(T)>): $Object2ByteFunction<(T)>
 "composeChar"(arg0: $Char2ShortFunction$$Type): $Char2ByteFunction
 "composeReference"<T>(arg0: $Reference2ShortFunction$$Type<(T)>): $Reference2ByteFunction<(T)>
 "andThenShort"(arg0: $Byte2ShortFunction$$Type): $Short2ShortFunction
 "composeShort"(arg0: $Short2ShortFunction$$Type): $Short2ByteFunction
 "composeFloat"(arg0: $Float2ShortFunction$$Type): $Float2ByteFunction
 "andThenReference"<T>(arg0: $Byte2ReferenceFunction$$Type<(T)>): $Short2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2ShortFunction$$Type): $Double2ByteFunction
 "andThenByte"(arg0: $Byte2ByteFunction$$Type): $Short2ByteFunction
 "composeInt"(arg0: $Int2ShortFunction$$Type): $Int2ByteFunction
 "andThenInt"(arg0: $Byte2IntFunction$$Type): $Short2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: short): byte
static "identity"(): $IntUnaryOperator
 "compose"(arg0: $IntUnaryOperator$$Type): $IntUnaryOperator
 "andThen"(arg0: $IntUnaryOperator$$Type): $IntUnaryOperator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Short2ByteFunction$$Type = ((arg0: short) => byte);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Short2ByteFunction$$Original = $Short2ByteFunction;}
declare module "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction" {
import {$Float2ReferenceFunction} from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import {$Long2CharFunction} from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import {$Reference2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import {$Long2ByteFunction} from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import {$Long2IntFunction} from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import {$LongFunction$$Interface} from "java.util.function.LongFunction"
import {$Reference2ShortFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import {$Reference2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import {$Long2ShortFunction} from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import {$Double2ReferenceFunction} from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import {$Int2ReferenceFunction} from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import {$Reference2ByteFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import {$Byte2ReferenceFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ReferenceFunction"
import {$Reference2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Long2DoubleFunction} from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import {$Long2LongFunction, $Long2LongFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import {$Float2LongFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import {$Short2ReferenceFunction} from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import {$Byte2LongFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import {$Reference2FloatFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import {$Char2LongFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import {$Double2LongFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import {$Short2LongFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import {$Int2LongFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import {$Reference2CharFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import {$Object2ReferenceFunction} from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import {$Char2ReferenceFunction} from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import {$Long2FloatFunction} from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import {$Object2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import {$Reference2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import {$Long2ObjectFunction} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"

export interface $Long2ReferenceFunction$$Interface<V> extends $Function$0$$Interface<(long), (V)>, $LongFunction$$Interface<(V)> {

(arg0: long): V
}

export class $Long2ReferenceFunction<V> implements $Long2ReferenceFunction$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): V
 "remove"(arg0: long): V
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): V
 "get"(arg0: long): V
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "put"(arg0: long, arg1: V): V
 "put"(arg0: long, arg1: V): V
 "apply"(arg0: long): V
 "containsKey"(arg0: long): boolean
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "getOrDefault"(arg0: long, arg1: V): V
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: V): V
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (long)>): $Function<(T), (V)>
 "andThenFloat"(arg0: $Reference2FloatFunction$$Type<(V)>): $Long2FloatFunction
 "andThenObject"<T>(arg0: $Reference2ObjectFunction$$Type<(V), (T)>): $Long2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2LongFunction$$Type): $Byte2ReferenceFunction<(V)>
 "andThenLong"(arg0: $Reference2LongFunction$$Type<(V)>): $Long2LongFunction
 "defaultReturnValue"(): V
 "defaultReturnValue"(arg0: V): void
 "composeLong"(arg0: $Long2LongFunction$$Type): $Long2ReferenceFunction<(V)>
 "andThenChar"(arg0: $Reference2CharFunction$$Type<(V)>): $Long2CharFunction
 "andThenDouble"(arg0: $Reference2DoubleFunction$$Type<(V)>): $Long2DoubleFunction
 "composeObject"<T>(arg0: $Object2LongFunction$$Type<(T)>): $Object2ReferenceFunction<(T), (V)>
 "composeChar"(arg0: $Char2LongFunction$$Type): $Char2ReferenceFunction<(V)>
 "composeReference"<T>(arg0: $Reference2LongFunction$$Type<(T)>): $Reference2ReferenceFunction<(T), (V)>
 "andThenShort"(arg0: $Reference2ShortFunction$$Type<(V)>): $Long2ShortFunction
 "composeShort"(arg0: $Short2LongFunction$$Type): $Short2ReferenceFunction<(V)>
 "composeFloat"(arg0: $Float2LongFunction$$Type): $Float2ReferenceFunction<(V)>
 "andThenReference"<T>(arg0: $Reference2ReferenceFunction$$Type<(V), (T)>): $Long2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2LongFunction$$Type): $Double2ReferenceFunction<(V)>
 "andThenByte"(arg0: $Reference2ByteFunction$$Type<(V)>): $Long2ByteFunction
 "composeInt"(arg0: $Int2LongFunction$$Type): $Int2ReferenceFunction<(V)>
 "andThenInt"(arg0: $Reference2IntFunction$$Type<(V)>): $Long2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: long): V
static "identity"<T>(): $Function<(long), (long)>
 "andThen"<V>(arg0: $Function$$Type<(V), (V)>): $Function<(long), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Long2ReferenceFunction$$Type<V> = ((arg0: long) => V);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Long2ReferenceFunction$$Original<V> = $Long2ReferenceFunction<(V)>;}
declare module "it.unimi.dsi.fastutil.ints.IntBidirectionalIterator" {
import {$ObjectBidirectionalIterator$$Interface} from "it.unimi.dsi.fastutil.objects.ObjectBidirectionalIterator"
import {$IntIterator$$Interface} from "it.unimi.dsi.fastutil.ints.IntIterator"
import {$IntConsumer$$Type as $IntConsumer$0$$Type} from "java.util.function.IntConsumer"
import {$IntConsumer$$Type} from "it.unimi.dsi.fastutil.ints.IntConsumer"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $IntBidirectionalIterator$$Interface extends $IntIterator$$Interface, $ObjectBidirectionalIterator$$Interface<(integer)> {
}

export class $IntBidirectionalIterator implements $IntBidirectionalIterator$$Interface {
 "skip"(arg0: integer): integer
/**
 * 
 * @deprecated
 */
 "previous"(): integer
 "back"(arg0: integer): integer
 "previousInt"(): integer
/**
 * 
 * @deprecated
 */
 "forEachRemaining"(arg0: $Consumer$$Type<(integer)>): void
 "forEachRemaining"(arg0: $IntConsumer$$Type): void
/**
 * 
 * @deprecated
 */
 "next"(): any
 "nextInt"(): integer
 "forEachRemaining"(arg0: any): void
 "forEachRemaining"(arg0: $IntConsumer$0$$Type): void
 "hasPrevious"(): boolean
 "remove"(): void
 "hasNext"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntBidirectionalIterator$$Type = ($IntBidirectionalIterator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntBidirectionalIterator$$Original = $IntBidirectionalIterator;}
declare module "it.unimi.dsi.fastutil.chars.Char2ObjectFunction" {
import {$Char2DoubleFunction} from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import {$Object2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import {$Long2CharFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import {$Object2ObjectFunction, $Object2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import {$IntFunction$$Interface} from "java.util.function.IntFunction"
import {$Int2CharFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import {$Short2CharFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import {$Int2ObjectFunction} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$Object2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import {$Char2ShortFunction} from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Object2FloatFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import {$Byte2ObjectFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import {$Float2CharFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import {$Byte2CharFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import {$Reference2ObjectFunction} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Object2CharFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Object2ByteFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import {$Char2CharFunction, $Char2CharFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2CharFunction"
import {$Double2CharFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import {$Char2LongFunction} from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import {$Float2ObjectFunction} from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import {$Char2ByteFunction} from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import {$Reference2CharFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import {$Short2ObjectFunction} from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import {$Object2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import {$Object2ShortFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import {$Char2ReferenceFunction} from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import {$Char2IntFunction} from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import {$Char2FloatFunction} from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import {$Object2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import {$Double2ObjectFunction} from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import {$Long2ObjectFunction} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"

export interface $Char2ObjectFunction$$Interface<V> extends $Function$0$$Interface<(character), (V)>, $IntFunction$$Interface<(V)> {

(arg0: character): V
}

export class $Char2ObjectFunction<V> implements $Char2ObjectFunction$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): V
 "remove"(arg0: character): V
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): V
 "get"(arg0: character): V
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "put"(arg0: character, arg1: V): V
 "put"(arg0: character, arg1: V): V
/**
 * 
 * @deprecated
 */
 "apply"(arg0: integer): V
 "containsKey"(arg0: character): boolean
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "getOrDefault"(arg0: character, arg1: V): V
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: V): V
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (character)>): $Function<(T), (V)>
 "andThenFloat"(arg0: $Object2FloatFunction$$Type<(V)>): $Char2FloatFunction
 "andThenObject"<T>(arg0: $Object2ObjectFunction$$Type<(V), (T)>): $Char2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2CharFunction$$Type): $Byte2ObjectFunction<(V)>
 "andThenLong"(arg0: $Object2LongFunction$$Type<(V)>): $Char2LongFunction
 "defaultReturnValue"(): V
 "defaultReturnValue"(arg0: V): void
 "composeLong"(arg0: $Long2CharFunction$$Type): $Long2ObjectFunction<(V)>
 "andThenChar"(arg0: $Object2CharFunction$$Type<(V)>): $Char2CharFunction
 "andThenDouble"(arg0: $Object2DoubleFunction$$Type<(V)>): $Char2DoubleFunction
 "composeObject"<T>(arg0: $Object2CharFunction$$Type<(T)>): $Object2ObjectFunction<(T), (V)>
 "composeChar"(arg0: $Char2CharFunction$$Type): $Char2ObjectFunction<(V)>
 "composeReference"<T>(arg0: $Reference2CharFunction$$Type<(T)>): $Reference2ObjectFunction<(T), (V)>
 "andThenShort"(arg0: $Object2ShortFunction$$Type<(V)>): $Char2ShortFunction
 "composeShort"(arg0: $Short2CharFunction$$Type): $Short2ObjectFunction<(V)>
 "composeFloat"(arg0: $Float2CharFunction$$Type): $Float2ObjectFunction<(V)>
 "andThenReference"<T>(arg0: $Object2ReferenceFunction$$Type<(V), (T)>): $Char2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2CharFunction$$Type): $Double2ObjectFunction<(V)>
 "andThenByte"(arg0: $Object2ByteFunction$$Type<(V)>): $Char2ByteFunction
 "composeInt"(arg0: $Int2CharFunction$$Type): $Int2ObjectFunction<(V)>
 "andThenInt"(arg0: $Object2IntFunction$$Type<(V)>): $Char2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: character): V
static "identity"<T>(): $Function<(character), (character)>
 "andThen"<V>(arg0: $Function$$Type<(V), (V)>): $Function<(character), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Char2ObjectFunction$$Type<V> = ((arg0: character) => V);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Char2ObjectFunction$$Original<V> = $Char2ObjectFunction<(V)>;}
declare module "it.unimi.dsi.fastutil.longs.Long2ObjectMap" {
import {$Object2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import {$Long2CharFunction} from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import {$Long2ByteFunction} from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import {$Long2IntFunction} from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import {$LongFunction$$Type} from "java.util.function.LongFunction"
import {$Object2ObjectFunction, $Object2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$Reference2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import {$Long2ShortFunction} from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import {$Int2ObjectFunction} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$Char2ObjectFunction} from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import {$Object2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Object2FloatFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import {$Byte2ObjectFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import {$Set} from "java.util.Set"
import {$Reference2ObjectFunction} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Map, $Map$$Type, $Map$$Interface} from "java.util.Map"
import {$Object2CharFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import {$Long2DoubleFunction} from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import {$Long2LongFunction, $Long2LongFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import {$Float2LongFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import {$Object2ByteFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import {$Long2ReferenceFunction} from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import {$Byte2LongFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$Char2LongFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import {$Double2LongFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import {$Float2ObjectFunction} from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import {$Short2LongFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import {$ObjectCollection} from "it.unimi.dsi.fastutil.objects.ObjectCollection"
import {$ObjectSet} from "it.unimi.dsi.fastutil.objects.ObjectSet"
import {$Int2LongFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import {$Short2ObjectFunction} from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import {$Object2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import {$Object2ShortFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Long2FloatFunction} from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import {$Long2ObjectMap$Entry} from "it.unimi.dsi.fastutil.longs.Long2ObjectMap$Entry"
import {$Object2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import {$Double2ObjectFunction} from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import {$Long2ObjectFunction, $Long2ObjectFunction$$Type, $Long2ObjectFunction$$Interface} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"

export interface $Long2ObjectMap$$Interface<V> extends $Long2ObjectFunction$$Interface<(V)>, $Map$$Interface<(long), (V)> {
[index: string | number]: V
get "empty"(): boolean
}

export class $Long2ObjectMap<V> implements $Long2ObjectMap$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): V
 "remove"(arg0: long, arg1: any): boolean
 "size"(): integer
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): V
/**
 * 
 * @deprecated
 */
 "put"(arg0: long, arg1: V): V
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "values"(): $ObjectCollection<(V)>
 "clear"(): void
 "replace"(arg0: long, arg1: V, arg2: V): boolean
 "replace"(arg0: long, arg1: V): V
 "merge"(arg0: long, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
/**
 * 
 * @deprecated
 */
 "entrySet"(): $Set
 "putIfAbsent"(arg0: long, arg1: V): V
 "compute"(arg0: long, arg1: $BiFunction$$Type<(long), (V), (V)>): V
 "forEach"(arg0: $BiConsumer$$Type<(long), (V)>): void
 "containsKey"(arg0: long): boolean
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "computeIfAbsent"(arg0: long, arg1: $Long2ObjectFunction$$Type<(V)>): V
 "computeIfAbsent"(arg0: long, arg1: $LongFunction$$Type<(V)>): V
 "keySet"(): $Set
 "getOrDefault"(arg0: long, arg1: V): V
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: V): V
 "computeIfPresent"(arg0: long, arg1: $BiFunction$$Type<(long), (V), (V)>): V
/**
 * 
 * @deprecated
 */
 "computeIfAbsentPartial"(arg0: long, arg1: $Long2ObjectFunction$$Type<(V)>): V
 "long2ObjectEntrySet"(): $ObjectSet<($Long2ObjectMap$Entry<(V)>)>
 "defaultReturnValue"(): V
 "defaultReturnValue"(arg0: V): void
 "remove"(arg0: long): V
 "get"(arg0: long): V
 "put"(arg0: long, arg1: V): V
 "apply"(arg0: long): V
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (long)>): $Function<(T), (V)>
 "andThenFloat"(arg0: $Object2FloatFunction$$Type<(V)>): $Long2FloatFunction
 "andThenObject"<T>(arg0: $Object2ObjectFunction$$Type<(V), (T)>): $Long2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2LongFunction$$Type): $Byte2ObjectFunction<(V)>
 "andThenLong"(arg0: $Object2LongFunction$$Type<(V)>): $Long2LongFunction
 "composeLong"(arg0: $Long2LongFunction$$Type): $Long2ObjectFunction<(V)>
 "andThenChar"(arg0: $Object2CharFunction$$Type<(V)>): $Long2CharFunction
 "andThenDouble"(arg0: $Object2DoubleFunction$$Type<(V)>): $Long2DoubleFunction
 "composeObject"<T>(arg0: $Object2LongFunction$$Type<(T)>): $Object2ObjectFunction<(T), (V)>
 "composeChar"(arg0: $Char2LongFunction$$Type): $Char2ObjectFunction<(V)>
 "composeReference"<T>(arg0: $Reference2LongFunction$$Type<(T)>): $Reference2ObjectFunction<(T), (V)>
 "andThenShort"(arg0: $Object2ShortFunction$$Type<(V)>): $Long2ShortFunction
 "composeShort"(arg0: $Short2LongFunction$$Type): $Short2ObjectFunction<(V)>
 "composeFloat"(arg0: $Float2LongFunction$$Type): $Float2ObjectFunction<(V)>
 "andThenReference"<T>(arg0: $Object2ReferenceFunction$$Type<(V), (T)>): $Long2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2LongFunction$$Type): $Double2ObjectFunction<(V)>
 "andThenByte"(arg0: $Object2ByteFunction$$Type<(V)>): $Long2ByteFunction
 "composeInt"(arg0: $Int2LongFunction$$Type): $Int2ObjectFunction<(V)>
 "andThenInt"(arg0: $Object2IntFunction$$Type<(V)>): $Long2IntFunction
 "remove"(arg0: any, arg1: any): boolean
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<K, V>(arg0: $Map$$Type<(long), (V)>): $Map<(long), (V)>
 "isEmpty"(): boolean
 "replace"(arg0: long, arg1: V, arg2: V): boolean
 "replace"(arg0: long, arg1: V): V
 "replaceAll"(arg0: $BiFunction$$Type<(long), (V), (V)>): void
static "of"<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V, arg6: long, arg7: V): $Map<(long), (V)>
static "of"<K, V>(): $Map<(long), (V)>
static "of"<K, V>(arg0: long, arg1: V): $Map<(long), (V)>
static "of"<K, V>(arg0: long, arg1: V, arg2: long, arg3: V): $Map<(long), (V)>
static "of"<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V): $Map<(long), (V)>
static "of"<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V, arg6: long, arg7: V, arg8: long, arg9: V, arg10: long, arg11: V, arg12: long, arg13: V, arg14: long, arg15: V, arg16: long, arg17: V, arg18: long, arg19: V): $Map<(long), (V)>
static "of"<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V, arg6: long, arg7: V, arg8: long, arg9: V, arg10: long, arg11: V, arg12: long, arg13: V, arg14: long, arg15: V, arg16: long, arg17: V): $Map<(long), (V)>
static "of"<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V, arg6: long, arg7: V, arg8: long, arg9: V, arg10: long, arg11: V, arg12: long, arg13: V, arg14: long, arg15: V): $Map<(long), (V)>
static "of"<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V, arg6: long, arg7: V, arg8: long, arg9: V, arg10: long, arg11: V, arg12: long, arg13: V): $Map<(long), (V)>
static "of"<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V, arg6: long, arg7: V, arg8: long, arg9: V, arg10: long, arg11: V): $Map<(long), (V)>
static "of"<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V, arg6: long, arg7: V, arg8: long, arg9: V): $Map<(long), (V)>
 "merge"(arg0: long, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
 "putAll"(arg0: $Map$$Type<(long), (V)>): void
 "putIfAbsent"(arg0: long, arg1: V): V
 "compute"(arg0: long, arg1: $BiFunction$$Type<(long), (V), (V)>): V
static "entry"<K, V>(arg0: long, arg1: V): $Map$Entry<(long), (V)>
 "computeIfAbsent"(arg0: long, arg1: $Function$$Type<(long), (V)>): V
 "containsValue"(arg0: any): boolean
 "computeIfPresent"(arg0: long, arg1: $BiFunction$$Type<(long), (V), (V)>): V
static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(long), (V)>)[]): $Map<(long), (V)>
 "apply"(arg0: long): V
static "identity"<T>(): $Function<(long), (long)>
 "andThen"<V>(arg0: $Function$$Type<(V), (V)>): $Function<(long), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Long2ObjectMap$$Type<V> = ($Long2ObjectMap<(V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Long2ObjectMap$$Original<V> = $Long2ObjectMap<(V)>;}
declare module "it.unimi.dsi.fastutil.ints.Int2CharFunction" {
import {$Char2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import {$Object2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import {$Long2CharFunction} from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import {$Reference2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import {$Long2IntFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import {$Short2IntFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import {$Int2FloatFunction} from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import {$Byte2IntFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"
import {$Float2IntFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import {$Int2ReferenceFunction} from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import {$Short2CharFunction} from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import {$Int2ObjectFunction} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$Char2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import {$Int2IntFunction, $Int2IntFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import {$Char2ShortFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Float2CharFunction} from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import {$Int2DoubleFunction} from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import {$Byte2CharFunction} from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import {$Object2CharFunction} from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Int2ShortFunction} from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import {$Double2CharFunction} from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import {$Char2CharFunction, $Char2CharFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2CharFunction"
import {$Char2LongFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import {$IntUnaryOperator, $IntUnaryOperator$$Type, $IntUnaryOperator$$Interface} from "java.util.function.IntUnaryOperator"
import {$Char2ByteFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import {$Reference2CharFunction} from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import {$Int2LongFunction} from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import {$Char2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import {$Char2IntFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import {$Char2FloatFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import {$Double2IntFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import {$Int2ByteFunction} from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"

export interface $Int2CharFunction$$Interface extends $Function$0$$Interface<(integer), (character)>, $IntUnaryOperator$$Interface {

(arg0: integer): character
}

export class $Int2CharFunction implements $Int2CharFunction$$Interface {
 "remove"(arg0: integer): character
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): character
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): character
 "get"(arg0: integer): character
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: integer, arg1: character): character
/**
 * 
 * @deprecated
 */
 "put"(arg0: integer, arg1: character): character
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "containsKey"(arg0: integer): boolean
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: character): character
 "getOrDefault"(arg0: integer, arg1: character): character
 "applyAsInt"(arg0: integer): integer
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (integer)>): $Function<(T), (character)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(character), (T)>): $Function<(integer), (T)>
 "andThenFloat"(arg0: $Char2FloatFunction$$Type): $Int2FloatFunction
 "andThenObject"<T>(arg0: $Char2ObjectFunction$$Type<(T)>): $Int2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2IntFunction$$Type): $Byte2CharFunction
 "andThenLong"(arg0: $Char2LongFunction$$Type): $Int2LongFunction
 "defaultReturnValue"(): character
 "defaultReturnValue"(arg0: character): void
 "composeLong"(arg0: $Long2IntFunction$$Type): $Long2CharFunction
 "andThenChar"(arg0: $Char2CharFunction$$Type): $Int2CharFunction
 "andThenDouble"(arg0: $Char2DoubleFunction$$Type): $Int2DoubleFunction
 "composeObject"<T>(arg0: $Object2IntFunction$$Type<(T)>): $Object2CharFunction<(T)>
 "composeChar"(arg0: $Char2IntFunction$$Type): $Char2CharFunction
 "composeReference"<T>(arg0: $Reference2IntFunction$$Type<(T)>): $Reference2CharFunction<(T)>
 "andThenShort"(arg0: $Char2ShortFunction$$Type): $Int2ShortFunction
 "composeShort"(arg0: $Short2IntFunction$$Type): $Short2CharFunction
 "composeFloat"(arg0: $Float2IntFunction$$Type): $Float2CharFunction
 "andThenReference"<T>(arg0: $Char2ReferenceFunction$$Type<(T)>): $Int2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2IntFunction$$Type): $Double2CharFunction
 "andThenByte"(arg0: $Char2ByteFunction$$Type): $Int2ByteFunction
 "composeInt"(arg0: $Int2IntFunction$$Type): $Int2CharFunction
 "andThenInt"(arg0: $Char2IntFunction$$Type): $Int2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: integer): character
static "identity"(): $IntUnaryOperator
 "compose"(arg0: $IntUnaryOperator$$Type): $IntUnaryOperator
 "andThen"(arg0: $IntUnaryOperator$$Type): $IntUnaryOperator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Int2CharFunction$$Type = ((arg0: integer) => character);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Int2CharFunction$$Original = $Int2CharFunction;}
declare module "it.unimi.dsi.fastutil.objects.ObjectIterable" {
import {$Iterable$$Interface} from "java.lang.Iterable"
import {$Iterator} from "java.util.Iterator"
import {$ObjectSpliterator} from "it.unimi.dsi.fastutil.objects.ObjectSpliterator"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $ObjectIterable$$Interface<K> extends $Iterable$$Interface<(K)> {
}

export class $ObjectIterable<K> implements $ObjectIterable$$Interface {
 "iterator"(): $Iterator
 "spliterator"(): $ObjectSpliterator<(K)>
 "forEach"(arg0: $Consumer$$Type<(K)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectIterable$$Type<K> = ($ObjectIterable<(K)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ObjectIterable$$Original<K> = $ObjectIterable<(K)>;}
declare module "it.unimi.dsi.fastutil.ints.IntSet" {
import {$Iterator} from "java.util.Iterator"
import {$Collection$$Type} from "java.util.Collection"
import {$IntStream} from "java.util.stream.IntStream"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$IntCollection$$Type, $IntCollection$$Interface} from "it.unimi.dsi.fastutil.ints.IntCollection"
import {$IntPredicate$$Type as $IntPredicate$0$$Type} from "java.util.function.IntPredicate"
import {$IntSpliterator} from "it.unimi.dsi.fastutil.ints.IntSpliterator"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$IntFunction$$Type} from "java.util.function.IntFunction"
import {$IntIterator} from "it.unimi.dsi.fastutil.ints.IntIterator"
import {$IntConsumer$$Type as $IntConsumer$0$$Type} from "java.util.function.IntConsumer"
import {$IntPredicate$$Type} from "it.unimi.dsi.fastutil.ints.IntPredicate"
import {$Set, $Set$$Interface} from "java.util.Set"
import {$Stream} from "java.util.stream.Stream"
import {$IntConsumer$$Type} from "it.unimi.dsi.fastutil.ints.IntConsumer"

export interface $IntSet$$Interface extends $IntCollection$$Interface, $Set$$Interface<(integer)> {
get "empty"(): boolean
}

export class $IntSet implements $IntSet$$Interface {
 "remove"(arg0: integer): boolean
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): boolean
/**
 * 
 * @deprecated
 */
 "add"(arg0: integer): boolean
/**
 * 
 * @deprecated
 */
 "add"(arg0: any): boolean
 "iterator"(): $Iterator
static "of"(arg0: integer, arg1: integer): $IntSet
static "of"(): $IntSet
static "of"(...arg0: (integer)[]): $IntSet
static "of"(arg0: integer): $IntSet
static "of"(arg0: integer, arg1: integer, arg2: integer): $IntSet
/**
 * 
 * @deprecated
 */
 "contains"(arg0: any): boolean
 "spliterator"(): $IntSpliterator
/**
 * 
 * @deprecated
 */
 "rem"(arg0: integer): boolean
 "add"(arg0: integer): boolean
 "toArray"(arg0: (integer)[]): (integer)[]
/**
 * 
 * @deprecated
 */
 "stream"(): $Stream<(integer)>
 "intStream"(): $IntStream
 "contains"(arg0: integer): boolean
 "addAll"(arg0: $IntCollection$$Type): boolean
/**
 * 
 * @deprecated
 */
 "removeIf"(arg0: $Predicate$$Type<(integer)>): boolean
 "removeIf"(arg0: $IntPredicate$0$$Type): boolean
 "removeIf"(arg0: $IntPredicate$$Type): boolean
 "removeAll"(arg0: $IntCollection$$Type): boolean
 "retainAll"(arg0: $IntCollection$$Type): boolean
 "containsAll"(arg0: $IntCollection$$Type): boolean
/**
 * 
 * @deprecated
 */
 "parallelStream"(): $Stream<(integer)>
/**
 * 
 * @deprecated
 */
 "toIntArray"(arg0: (integer)[]): (integer)[]
 "toIntArray"(): (integer)[]
 "intSpliterator"(): $IntSpliterator
 "intIterator"(): $IntIterator
 "intParallelStream"(): $IntStream
 "size"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<E>(arg0: $Collection$$Type<(integer)>): $Set<(integer)>
 "clear"(): void
 "isEmpty"(): boolean
 "toArray"(): (any)[]
 "toArray"<T>(arg0: (T)[]): (T)[]
static "of"<E>(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): $Set<(integer)>
static "of"<E>(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $Set<(integer)>
static "of"<E>(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $Set<(integer)>
static "of"<E>(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer): $Set<(integer)>
static "of"<E>(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer): $Set<(integer)>
static "of"<E>(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer): $Set<(integer)>
static "of"<E>(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): $Set<(integer)>
static "of"<E>(...arg0: (integer)[]): $Set<(integer)>
static "of"<E>(arg0: integer, arg1: integer, arg2: integer): $Set<(integer)>
static "of"<E>(arg0: integer): $Set<(integer)>
static "of"<E>(arg0: integer, arg1: integer): $Set<(integer)>
 "addAll"(arg0: $Collection$$Type<(integer)>): boolean
 "removeAll"(arg0: $Collection$$Type<(never)>): boolean
 "retainAll"(arg0: $Collection$$Type<(never)>): boolean
 "containsAll"(arg0: $Collection$$Type<(never)>): boolean
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "forEach"(arg0: $IntConsumer$0$$Type): void
/**
 * 
 * @deprecated
 */
 "forEach"(arg0: $Consumer$$Type<(integer)>): void
 "forEach"(arg0: $IntConsumer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntSet$$Type = ($IntSet);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntSet$$Original = $IntSet;}
declare module "it.unimi.dsi.fastutil.objects.Object2ObjectMap" {
import {$Object2IntFunction, $Object2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import {$Object2ObjectMap$Entry} from "it.unimi.dsi.fastutil.objects.Object2ObjectMap$Entry"
import {$Object2ObjectFunction, $Object2ObjectFunction$$Type, $Object2ObjectFunction$$Interface} from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$Int2ObjectFunction, $Int2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$Char2ObjectFunction, $Char2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import {$Object2DoubleFunction, $Object2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Object2FloatFunction, $Object2FloatFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import {$Byte2ObjectFunction, $Byte2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import {$Set} from "java.util.Set"
import {$Reference2ObjectFunction, $Reference2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Collection} from "java.util.Collection"
import {$Map, $Map$$Type, $Map$$Interface} from "java.util.Map"
import {$Object2CharFunction, $Object2CharFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import {$Object2ByteFunction, $Object2ByteFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$Float2ObjectFunction, $Float2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import {$ObjectSet} from "it.unimi.dsi.fastutil.objects.ObjectSet"
import {$Object2ReferenceFunction, $Object2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import {$Object2ShortFunction, $Object2ShortFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import {$Short2ObjectFunction, $Short2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Object2LongFunction, $Object2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import {$Double2ObjectFunction, $Double2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import {$Long2ObjectFunction, $Long2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"

export interface $Object2ObjectMap$$Interface<K, V> extends $Object2ObjectFunction$$Interface<(K), (V)>, $Map$$Interface<(K), (V)> {
[index: string | number]: V
get "empty"(): boolean
}

export class $Object2ObjectMap<K, V> implements $Object2ObjectMap$$Interface {
 "remove"(arg0: any): V
 "remove"(arg0: any, arg1: any): boolean
 "size"(): integer
 "put"(arg0: K, arg1: V): V
 "values"(): $Collection
 "clear"(): void
 "replace"(arg0: K, arg1: V): V
 "replace"(arg0: K, arg1: V, arg2: V): boolean
 "merge"(arg0: K, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
 "entrySet"(): $ObjectSet<($Map$Entry<(K), (V)>)>
 "putIfAbsent"(arg0: K, arg1: V): V
 "compute"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
 "forEach"(arg0: $BiConsumer$$Type<(K), (V)>): void
 "containsKey"(arg0: any): boolean
 "computeIfAbsent"(arg0: K, arg1: $Object2ObjectFunction$$Type<(K), (V)>): V
 "keySet"(): $Set
 "getOrDefault"(arg0: any, arg1: V): V
 "computeIfPresent"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
/**
 * 
 * @deprecated
 */
 "computeObjectIfAbsentPartial"(arg0: K, arg1: $Object2ObjectFunction$$Type<(K), (V)>): V
 "defaultReturnValue"(arg0: V): void
 "defaultReturnValue"(): V
 "object2ObjectEntrySet"(): $ObjectSet<($Object2ObjectMap$Entry<(K), (V)>)>
 "get"(arg0: any): V
 "andThenFloat"(arg0: $Object2FloatFunction$$Type<(V)>): $Object2FloatFunction<(K)>
 "andThenObject"<T>(arg0: $Object2ObjectFunction$$Type<(V), (T)>): $Object2ObjectFunction<(K), (T)>
 "composeByte"(arg0: $Byte2ObjectFunction$$Type<(K)>): $Byte2ObjectFunction<(V)>
 "andThenLong"(arg0: $Object2LongFunction$$Type<(V)>): $Object2LongFunction<(K)>
 "composeLong"(arg0: $Long2ObjectFunction$$Type<(K)>): $Long2ObjectFunction<(V)>
 "andThenChar"(arg0: $Object2CharFunction$$Type<(V)>): $Object2CharFunction<(K)>
 "andThenDouble"(arg0: $Object2DoubleFunction$$Type<(V)>): $Object2DoubleFunction<(K)>
 "composeObject"<T>(arg0: $Object2ObjectFunction$$Type<(T), (K)>): $Object2ObjectFunction<(T), (V)>
 "composeChar"(arg0: $Char2ObjectFunction$$Type<(K)>): $Char2ObjectFunction<(V)>
 "composeReference"<T>(arg0: $Reference2ObjectFunction$$Type<(T), (K)>): $Reference2ObjectFunction<(T), (V)>
 "andThenShort"(arg0: $Object2ShortFunction$$Type<(V)>): $Object2ShortFunction<(K)>
 "composeShort"(arg0: $Short2ObjectFunction$$Type<(K)>): $Short2ObjectFunction<(V)>
 "composeFloat"(arg0: $Float2ObjectFunction$$Type<(K)>): $Float2ObjectFunction<(V)>
 "andThenReference"<T>(arg0: $Object2ReferenceFunction$$Type<(V), (T)>): $Object2ReferenceFunction<(K), (T)>
 "composeDouble"(arg0: $Double2ObjectFunction$$Type<(K)>): $Double2ObjectFunction<(V)>
 "andThenByte"(arg0: $Object2ByteFunction$$Type<(V)>): $Object2ByteFunction<(K)>
 "composeInt"(arg0: $Int2ObjectFunction$$Type<(K)>): $Int2ObjectFunction<(V)>
 "andThenInt"(arg0: $Object2IntFunction$$Type<(V)>): $Object2IntFunction<(K)>
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<K, V>(arg0: $Map$$Type<(K), (V)>): $Map<(K), (V)>
 "isEmpty"(): boolean
 "replaceAll"(arg0: $BiFunction$$Type<(K), (V), (V)>): void
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
static "of"<K, V>(): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
 "putAll"(arg0: $Map$$Type<(K), (V)>): void
static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
 "computeIfAbsent"(arg0: K, arg1: $Function$$Type<(K), (V)>): V
 "containsValue"(arg0: any): boolean
static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(K), (V)>)[]): $Map<(K), (V)>
 "apply"(arg0: K): V
static "identity"<T>(): $Function<(K), (K)>
 "compose"<V>(arg0: $Function$$Type<(V), (K)>): $Function<(V), (V)>
 "andThen"<V>(arg0: $Function$$Type<(V), (V)>): $Function<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Object2ObjectMap$$Type<K, V> = ($Object2ObjectMap<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Object2ObjectMap$$Original<K, V> = $Object2ObjectMap<(K), (V)>;}
declare module "it.unimi.dsi.fastutil.shorts.ShortComparator" {
import {$ToIntFunction$$Type} from "java.util.function.ToIntFunction"
import {$ToLongFunction$$Type} from "java.util.function.ToLongFunction"
import {$ToDoubleFunction$$Type} from "java.util.function.ToDoubleFunction"
import {$Comparable} from "java.lang.Comparable"
import {$Comparator, $Comparator$$Type, $Comparator$$Interface} from "java.util.Comparator"
import {$Function$$Type} from "java.util.function.Function"

export interface $ShortComparator$$Interface extends $Comparator$$Interface<(short)> {
}

export class $ShortComparator implements $ShortComparator$$Interface {
/**
 * 
 * @deprecated
 */
 "compare"(arg0: any, arg1: any): integer
/**
 * 
 * @deprecated
 */
 "compare"(arg0: short, arg1: short): integer
 "compare"(arg0: short, arg1: short): integer
 "reversed"(): $ShortComparator
 "thenComparing"(arg0: $Comparator$$Type<(short)>): $Comparator<(short)>
 "thenComparing"(arg0: $ShortComparator$$Type): $ShortComparator
 "equals"(arg0: any): boolean
static "reverseOrder"<T extends $Comparable<(object)>>(): $Comparator<(short)>
static "comparing"<T, U extends $Comparable<(object)>>(arg0: $Function$$Type<(short), (U)>): $Comparator<(short)>
static "comparing"<T, U>(arg0: $Function$$Type<(short), (U)>, arg1: $Comparator$$Type<(U)>): $Comparator<(short)>
 "thenComparing"<U>(arg0: $Function$$Type<(short), (U)>, arg1: $Comparator$$Type<(U)>): $Comparator<(short)>
 "thenComparing"<U extends $Comparable<(object)>>(arg0: $Function$$Type<(short), (U)>): $Comparator<(short)>
static "comparingInt"<T>(arg0: $ToIntFunction$$Type<(short)>): $Comparator<(short)>
static "comparingLong"<T>(arg0: $ToLongFunction$$Type<(short)>): $Comparator<(short)>
static "comparingDouble"<T>(arg0: $ToDoubleFunction$$Type<(short)>): $Comparator<(short)>
 "thenComparingInt"(arg0: $ToIntFunction$$Type<(short)>): $Comparator<(short)>
 "thenComparingLong"(arg0: $ToLongFunction$$Type<(short)>): $Comparator<(short)>
 "thenComparingDouble"(arg0: $ToDoubleFunction$$Type<(short)>): $Comparator<(short)>
static "naturalOrder"<T extends $Comparable<(object)>>(): $Comparator<(short)>
static "nullsFirst"<T>(arg0: $Comparator$$Type<(short)>): $Comparator<(short)>
static "nullsLast"<T>(arg0: $Comparator$$Type<(short)>): $Comparator<(short)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShortComparator$$Type = ($ShortComparator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShortComparator$$Original = $ShortComparator;}
declare module "it.unimi.dsi.fastutil.longs.Long2ReferenceMap$Entry" {
import {$Comparable} from "java.lang.Comparable"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$Map$Entry, $Map$Entry$$Type, $Map$Entry$$Interface} from "java.util.Map$Entry"

export interface $Long2ReferenceMap$Entry$$Interface<V> extends $Map$Entry$$Interface<(long), (V)> {
get "longKey"(): long
get "key"(): long
get "value"(): V
set "value"(value: V)
}

export class $Long2ReferenceMap$Entry<V> implements $Long2ReferenceMap$Entry$$Interface {
 "getLongKey"(): long
/**
 * 
 * @deprecated
 */
 "getKey"(): long
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<K, V>(arg0: $Map$Entry$$Type<(long), (V)>): $Map$Entry<(long), (V)>
 "getValue"(): V
static "comparingByKey"<K, V>(arg0: $Comparator$$Type<(long)>): $Comparator<($Map$Entry<(long), (V)>)>
static "comparingByKey"<K extends $Comparable<(object)>, V>(): $Comparator<($Map$Entry<(long), (V)>)>
 "setValue"(arg0: V): V
static "comparingByValue"<K, V extends $Comparable<(object)>>(): $Comparator<($Map$Entry<(long), (V)>)>
static "comparingByValue"<K, V>(arg0: $Comparator$$Type<(V)>): $Comparator<($Map$Entry<(long), (V)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Long2ReferenceMap$Entry$$Type<V> = ($Long2ReferenceMap$Entry<(V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Long2ReferenceMap$Entry$$Original<V> = $Long2ReferenceMap$Entry<(V)>;}
declare module "it.unimi.dsi.fastutil.objects.AbstractObjectSet" {
import {$Collection$$Type} from "java.util.Collection"
import {$ObjectSet, $ObjectSet$$Interface} from "it.unimi.dsi.fastutil.objects.ObjectSet"
import {$AbstractObjectCollection} from "it.unimi.dsi.fastutil.objects.AbstractObjectCollection"
import {$Spliterator} from "java.util.Spliterator"
import {$ObjectIterator} from "it.unimi.dsi.fastutil.objects.ObjectIterator"
import {$Cloneable$$Interface} from "java.lang.Cloneable"
import {$Set} from "java.util.Set"

export class $AbstractObjectSet<K> extends $AbstractObjectCollection<(K)> implements $Cloneable$$Interface, $ObjectSet$$Interface<(K)> {
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "iterator"(): $ObjectIterator<(K)>
public static "of"<K>(arg0: K, arg1: K): $ObjectSet<(K)>
public static "of"<K>(...arg0: (K)[]): $ObjectSet<(K)>
public static "of"<K>(arg0: K, arg1: K, arg2: K): $ObjectSet<(K)>
public static "of"<K>(): $ObjectSet<(K)>
public static "of"<K>(arg0: K): $ObjectSet<(K)>
public "spliterator"(): $Spliterator
public "remove"(arg0: any): boolean
public "size"(): integer
public static "copyOf"<E>(arg0: $Collection$$Type<(K)>): $Set<(K)>
public "clear"(): void
public "isEmpty"(): boolean
public "add"(arg0: K): boolean
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K): $Set<(K)>
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K): $Set<(K)>
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K): $Set<(K)>
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K, arg6: K, arg7: K, arg8: K, arg9: K): $Set<(K)>
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K, arg6: K, arg7: K, arg8: K): $Set<(K)>
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K, arg6: K, arg7: K): $Set<(K)>
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K, arg6: K): $Set<(K)>
public "contains"(arg0: any): boolean
public "addAll"(arg0: $Collection$$Type<(K)>): boolean
public "removeAll"(arg0: $Collection$$Type<(never)>): boolean
public "retainAll"(arg0: $Collection$$Type<(never)>): boolean
public "containsAll"(arg0: $Collection$$Type<(never)>): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractObjectSet$$Type<K> = ($AbstractObjectSet<(K)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractObjectSet$$Original<K> = $AbstractObjectSet<(K)>;}
declare module "it.unimi.dsi.fastutil.chars.Char2FloatFunction" {
import {$Char2DoubleFunction} from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import {$Float2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import {$Float2ByteFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import {$Long2CharFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import {$Int2FloatFunction} from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import {$Float2IntFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import {$Double2FloatFunction} from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import {$Int2CharFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import {$Short2CharFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import {$Char2ObjectFunction} from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import {$Char2ShortFunction} from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Object2FloatFunction} from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import {$IntToDoubleFunction$$Interface} from "java.util.function.IntToDoubleFunction"
import {$Float2CharFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import {$Byte2CharFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import {$Object2CharFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Float2LongFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import {$Float2ShortFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import {$Char2CharFunction, $Char2CharFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2CharFunction"
import {$Double2CharFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import {$Reference2FloatFunction} from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import {$Char2LongFunction} from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import {$Float2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import {$Float2FloatFunction, $Float2FloatFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2FloatFunction"
import {$Char2ByteFunction} from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import {$Reference2CharFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import {$Char2ReferenceFunction} from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import {$Char2IntFunction} from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import {$Long2FloatFunction} from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import {$Short2FloatFunction} from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import {$Byte2FloatFunction} from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import {$Float2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"

export interface $Char2FloatFunction$$Interface extends $Function$0$$Interface<(character), (float)>, $IntToDoubleFunction$$Interface {

(arg0: character): float
}

export class $Char2FloatFunction implements $Char2FloatFunction$$Interface {
 "remove"(arg0: character): float
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): float
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): float
 "get"(arg0: character): float
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: character, arg1: float): float
/**
 * 
 * @deprecated
 */
 "put"(arg0: character, arg1: float): float
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "containsKey"(arg0: character): boolean
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: float): float
 "getOrDefault"(arg0: character, arg1: float): float
/**
 * 
 * @deprecated
 */
 "applyAsDouble"(arg0: integer): double
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (character)>): $Function<(T), (float)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(float), (T)>): $Function<(character), (T)>
 "andThenFloat"(arg0: $Float2FloatFunction$$Type): $Char2FloatFunction
 "andThenObject"<T>(arg0: $Float2ObjectFunction$$Type<(T)>): $Char2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2CharFunction$$Type): $Byte2FloatFunction
 "andThenLong"(arg0: $Float2LongFunction$$Type): $Char2LongFunction
 "defaultReturnValue"(): float
 "defaultReturnValue"(arg0: float): void
 "composeLong"(arg0: $Long2CharFunction$$Type): $Long2FloatFunction
 "andThenChar"(arg0: $Float2CharFunction$$Type): $Char2CharFunction
 "andThenDouble"(arg0: $Float2DoubleFunction$$Type): $Char2DoubleFunction
 "composeObject"<T>(arg0: $Object2CharFunction$$Type<(T)>): $Object2FloatFunction<(T)>
 "composeChar"(arg0: $Char2CharFunction$$Type): $Char2FloatFunction
 "composeReference"<T>(arg0: $Reference2CharFunction$$Type<(T)>): $Reference2FloatFunction<(T)>
 "andThenShort"(arg0: $Float2ShortFunction$$Type): $Char2ShortFunction
 "composeShort"(arg0: $Short2CharFunction$$Type): $Short2FloatFunction
 "composeFloat"(arg0: $Float2CharFunction$$Type): $Float2FloatFunction
 "andThenReference"<T>(arg0: $Float2ReferenceFunction$$Type<(T)>): $Char2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2CharFunction$$Type): $Double2FloatFunction
 "andThenByte"(arg0: $Float2ByteFunction$$Type): $Char2ByteFunction
 "composeInt"(arg0: $Int2CharFunction$$Type): $Int2FloatFunction
 "andThenInt"(arg0: $Float2IntFunction$$Type): $Char2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: character): float
static "identity"<T>(): $Function<(character), (character)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Char2FloatFunction$$Type = ((arg0: character) => float);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Char2FloatFunction$$Original = $Char2FloatFunction;}
declare module "it.unimi.dsi.fastutil.longs.LongSet" {
import {$Iterator} from "java.util.Iterator"
import {$LongPredicate$$Type} from "java.util.function.LongPredicate"
import {$Collection$$Type} from "java.util.Collection"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$LongStream} from "java.util.stream.LongStream"
import {$LongConsumer$$Type as $LongConsumer$0$$Type} from "it.unimi.dsi.fastutil.longs.LongConsumer"
import {$LongPredicate$$Type as $LongPredicate$0$$Type} from "it.unimi.dsi.fastutil.longs.LongPredicate"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$IntFunction$$Type} from "java.util.function.IntFunction"
import {$LongConsumer$$Type} from "java.util.function.LongConsumer"
import {$LongSpliterator} from "it.unimi.dsi.fastutil.longs.LongSpliterator"
import {$Set, $Set$$Interface} from "java.util.Set"
import {$LongIterator} from "it.unimi.dsi.fastutil.longs.LongIterator"
import {$Stream} from "java.util.stream.Stream"
import {$LongCollection$$Type, $LongCollection$$Interface} from "it.unimi.dsi.fastutil.longs.LongCollection"

export interface $LongSet$$Interface extends $LongCollection$$Interface, $Set$$Interface<(long)> {
get "empty"(): boolean
}

export class $LongSet implements $LongSet$$Interface {
 "remove"(arg0: long): boolean
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): boolean
/**
 * 
 * @deprecated
 */
 "add"(arg0: long): boolean
/**
 * 
 * @deprecated
 */
 "add"(arg0: any): boolean
 "iterator"(): $Iterator
static "of"(arg0: long, arg1: long): $LongSet
static "of"(): $LongSet
static "of"(...arg0: (long)[]): $LongSet
static "of"(arg0: long): $LongSet
static "of"(arg0: long, arg1: long, arg2: long): $LongSet
/**
 * 
 * @deprecated
 */
 "contains"(arg0: any): boolean
 "spliterator"(): $LongSpliterator
/**
 * 
 * @deprecated
 */
 "rem"(arg0: long): boolean
 "add"(arg0: long): boolean
 "toArray"(arg0: (long)[]): (long)[]
/**
 * 
 * @deprecated
 */
 "stream"(): $Stream<(long)>
 "contains"(arg0: long): boolean
 "addAll"(arg0: $LongCollection$$Type): boolean
 "removeIf"(arg0: $LongPredicate$$Type): boolean
/**
 * 
 * @deprecated
 */
 "removeIf"(arg0: $Predicate$$Type<(long)>): boolean
 "removeIf"(arg0: $LongPredicate$0$$Type): boolean
 "removeAll"(arg0: $LongCollection$$Type): boolean
 "retainAll"(arg0: $LongCollection$$Type): boolean
 "containsAll"(arg0: $LongCollection$$Type): boolean
/**
 * 
 * @deprecated
 */
 "parallelStream"(): $Stream<(long)>
 "longStream"(): $LongStream
/**
 * 
 * @deprecated
 */
 "toLongArray"(arg0: (long)[]): (long)[]
 "toLongArray"(): (long)[]
 "longParallelStream"(): $LongStream
 "longIterator"(): $LongIterator
 "longSpliterator"(): $LongSpliterator
 "size"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<E>(arg0: $Collection$$Type<(long)>): $Set<(long)>
 "clear"(): void
 "isEmpty"(): boolean
 "toArray"(): (any)[]
 "toArray"<T>(arg0: (T)[]): (T)[]
static "of"<E>(arg0: long, arg1: long, arg2: long, arg3: long, arg4: long, arg5: long): $Set<(long)>
static "of"<E>(arg0: long, arg1: long, arg2: long, arg3: long, arg4: long): $Set<(long)>
static "of"<E>(arg0: long, arg1: long, arg2: long, arg3: long): $Set<(long)>
static "of"<E>(arg0: long, arg1: long, arg2: long, arg3: long, arg4: long, arg5: long, arg6: long, arg7: long, arg8: long, arg9: long): $Set<(long)>
static "of"<E>(arg0: long, arg1: long, arg2: long, arg3: long, arg4: long, arg5: long, arg6: long, arg7: long, arg8: long): $Set<(long)>
static "of"<E>(arg0: long, arg1: long, arg2: long, arg3: long, arg4: long, arg5: long, arg6: long, arg7: long): $Set<(long)>
static "of"<E>(arg0: long, arg1: long, arg2: long, arg3: long, arg4: long, arg5: long, arg6: long): $Set<(long)>
static "of"<E>(...arg0: (long)[]): $Set<(long)>
static "of"<E>(arg0: long, arg1: long, arg2: long): $Set<(long)>
static "of"<E>(arg0: long): $Set<(long)>
static "of"<E>(arg0: long, arg1: long): $Set<(long)>
 "addAll"(arg0: $Collection$$Type<(long)>): boolean
 "removeAll"(arg0: $Collection$$Type<(never)>): boolean
 "retainAll"(arg0: $Collection$$Type<(never)>): boolean
 "containsAll"(arg0: $Collection$$Type<(never)>): boolean
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "forEach"(arg0: $LongConsumer$$Type): void
/**
 * 
 * @deprecated
 */
 "forEach"(arg0: $Consumer$$Type<(long)>): void
 "forEach"(arg0: $LongConsumer$0$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongSet$$Type = ($LongSet);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LongSet$$Original = $LongSet;}
declare module "it.unimi.dsi.fastutil.ints.Int2ObjectFunction" {
import {$Object2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import {$Reference2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import {$Long2IntFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import {$Short2IntFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import {$Object2ObjectFunction, $Object2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import {$Int2FloatFunction} from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import {$Byte2IntFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"
import {$IntFunction$$Interface} from "java.util.function.IntFunction"
import {$Float2IntFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import {$Int2CharFunction} from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import {$Int2ReferenceFunction} from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import {$Char2ObjectFunction} from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import {$Object2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import {$Int2IntFunction, $Int2IntFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Object2FloatFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import {$Byte2ObjectFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import {$Int2DoubleFunction} from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import {$Reference2ObjectFunction} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Object2CharFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Int2ShortFunction} from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import {$Object2ByteFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import {$Float2ObjectFunction} from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import {$Int2LongFunction} from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import {$Short2ObjectFunction} from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import {$Object2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import {$Object2ShortFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import {$Char2IntFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import {$Double2IntFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import {$Object2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import {$Double2ObjectFunction} from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import {$Int2ByteFunction} from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import {$Long2ObjectFunction} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"

export interface $Int2ObjectFunction$$Interface<V> extends $Function$0$$Interface<(integer), (V)>, $IntFunction$$Interface<(V)> {

(arg0: integer): V
}

export class $Int2ObjectFunction<V> implements $Int2ObjectFunction$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): V
 "remove"(arg0: integer): V
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): V
 "get"(arg0: integer): V
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "put"(arg0: integer, arg1: V): V
 "put"(arg0: integer, arg1: V): V
 "apply"(arg0: integer): V
 "containsKey"(arg0: integer): boolean
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "getOrDefault"(arg0: integer, arg1: V): V
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: V): V
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (integer)>): $Function<(T), (V)>
 "andThenFloat"(arg0: $Object2FloatFunction$$Type<(V)>): $Int2FloatFunction
 "andThenObject"<T>(arg0: $Object2ObjectFunction$$Type<(V), (T)>): $Int2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2IntFunction$$Type): $Byte2ObjectFunction<(V)>
 "andThenLong"(arg0: $Object2LongFunction$$Type<(V)>): $Int2LongFunction
 "defaultReturnValue"(): V
 "defaultReturnValue"(arg0: V): void
 "composeLong"(arg0: $Long2IntFunction$$Type): $Long2ObjectFunction<(V)>
 "andThenChar"(arg0: $Object2CharFunction$$Type<(V)>): $Int2CharFunction
 "andThenDouble"(arg0: $Object2DoubleFunction$$Type<(V)>): $Int2DoubleFunction
 "composeObject"<T>(arg0: $Object2IntFunction$$Type<(T)>): $Object2ObjectFunction<(T), (V)>
 "composeChar"(arg0: $Char2IntFunction$$Type): $Char2ObjectFunction<(V)>
 "composeReference"<T>(arg0: $Reference2IntFunction$$Type<(T)>): $Reference2ObjectFunction<(T), (V)>
 "andThenShort"(arg0: $Object2ShortFunction$$Type<(V)>): $Int2ShortFunction
 "composeShort"(arg0: $Short2IntFunction$$Type): $Short2ObjectFunction<(V)>
 "composeFloat"(arg0: $Float2IntFunction$$Type): $Float2ObjectFunction<(V)>
 "andThenReference"<T>(arg0: $Object2ReferenceFunction$$Type<(V), (T)>): $Int2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2IntFunction$$Type): $Double2ObjectFunction<(V)>
 "andThenByte"(arg0: $Object2ByteFunction$$Type<(V)>): $Int2ByteFunction
 "composeInt"(arg0: $Int2IntFunction$$Type): $Int2ObjectFunction<(V)>
 "andThenInt"(arg0: $Object2IntFunction$$Type<(V)>): $Int2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: integer): V
static "identity"<T>(): $Function<(integer), (integer)>
 "andThen"<V>(arg0: $Function$$Type<(V), (V)>): $Function<(integer), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Int2ObjectFunction$$Type<V> = ((arg0: integer) => V);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Int2ObjectFunction$$Original<V> = $Int2ObjectFunction<(V)>;}
declare module "it.unimi.dsi.fastutil.objects.AbstractObjectCollection" {
import {$ObjectCollection$$Interface} from "it.unimi.dsi.fastutil.objects.ObjectCollection"
import {$ObjectSpliterator} from "it.unimi.dsi.fastutil.objects.ObjectSpliterator"
import {$ObjectIterator} from "it.unimi.dsi.fastutil.objects.ObjectIterator"
import {$AbstractCollection} from "java.util.AbstractCollection"

export class $AbstractObjectCollection<K> extends $AbstractCollection<(K)> implements $ObjectCollection$$Interface<(K)> {
public "toString"(): StringJS
public "iterator"(): $ObjectIterator<(K)>
public "spliterator"(): $ObjectSpliterator<(K)>
public "equals"(arg0: any): boolean
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractObjectCollection$$Type<K> = ($AbstractObjectCollection<(K)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractObjectCollection$$Original<K> = $AbstractObjectCollection<(K)>;}
declare module "it.unimi.dsi.fastutil.ints.AbstractIntCollection" {
import {$Iterator} from "java.util.Iterator"
import {$Collection$$Type} from "java.util.Collection"
import {$Spliterator} from "java.util.Spliterator"
import {$IntStream} from "java.util.stream.IntStream"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$IntCollection$$Type, $IntCollection$$Interface} from "it.unimi.dsi.fastutil.ints.IntCollection"
import {$IntPredicate$$Type as $IntPredicate$0$$Type} from "java.util.function.IntPredicate"
import {$IntSpliterator} from "it.unimi.dsi.fastutil.ints.IntSpliterator"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$IntIterator} from "it.unimi.dsi.fastutil.ints.IntIterator"
import {$IntConsumer$$Type as $IntConsumer$0$$Type} from "java.util.function.IntConsumer"
import {$IntPredicate$$Type} from "it.unimi.dsi.fastutil.ints.IntPredicate"
import {$Stream} from "java.util.stream.Stream"
import {$IntConsumer$$Type} from "it.unimi.dsi.fastutil.ints.IntConsumer"
import {$AbstractCollection} from "java.util.AbstractCollection"

export class $AbstractIntCollection extends $AbstractCollection<(integer)> implements $IntCollection$$Interface {
/**
 * 
 * @deprecated
 */
public "remove"(arg0: any): boolean
public "toString"(): StringJS
/**
 * 
 * @deprecated
 */
public "add"(arg0: integer): boolean
/**
 * 
 * @deprecated
 */
public "add"(arg0: any): boolean
public "add"(arg0: integer): boolean
public "toArray"(arg0: (integer)[]): (integer)[]
public "iterator"(): $Iterator
public "contains"(arg0: integer): boolean
/**
 * 
 * @deprecated
 */
public "contains"(arg0: any): boolean
public "addAll"(arg0: $IntCollection$$Type): boolean
public "addAll"(arg0: $Collection$$Type<(integer)>): boolean
public "forEach"(arg0: $IntConsumer$$Type): void
public "removeIf"(arg0: $IntPredicate$$Type): boolean
public "removeAll"(arg0: $IntCollection$$Type): boolean
public "removeAll"(arg0: $Collection$$Type<(never)>): boolean
public "retainAll"(arg0: $Collection$$Type<(never)>): boolean
public "retainAll"(arg0: $IntCollection$$Type): boolean
public "containsAll"(arg0: $Collection$$Type<(never)>): boolean
public "containsAll"(arg0: $IntCollection$$Type): boolean
public "rem"(arg0: integer): boolean
/**
 * 
 * @deprecated
 */
public "toIntArray"(arg0: (integer)[]): (integer)[]
public "toIntArray"(): (integer)[]
/**
 * 
 * @deprecated
 */
public "stream"(): $Stream<(integer)>
public "intStream"(): $IntStream
public "spliterator"(): $Spliterator
/**
 * 
 * @deprecated
 */
public "removeIf"(arg0: $Predicate$$Type<(integer)>): boolean
public "removeIf"(arg0: $IntPredicate$0$$Type): boolean
/**
 * 
 * @deprecated
 */
public "parallelStream"(): $Stream<(integer)>
public "intSpliterator"(): $IntSpliterator
public "intIterator"(): $IntIterator
public "intParallelStream"(): $IntStream
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "forEach"(arg0: $IntConsumer$0$$Type): void
/**
 * 
 * @deprecated
 */
public "forEach"(arg0: $Consumer$$Type<(integer)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractIntCollection$$Type = ($AbstractIntCollection);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractIntCollection$$Original = $AbstractIntCollection;}
declare module "it.unimi.dsi.fastutil.objects.ObjectListIterator" {
import {$ObjectBidirectionalIterator$$Interface} from "it.unimi.dsi.fastutil.objects.ObjectBidirectionalIterator"
import {$ListIterator$$Interface} from "java.util.ListIterator"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $ObjectListIterator$$Interface<K> extends $ObjectBidirectionalIterator$$Interface<(K)>, $ListIterator$$Interface<(K)> {
}

export class $ObjectListIterator<K> implements $ObjectListIterator$$Interface {
 "remove"(): void
 "add"(arg0: K): void
 "set"(arg0: K): void
 "skip"(arg0: integer): integer
 "back"(arg0: integer): integer
 "hasNext"(): boolean
 "next"(): K
 "nextIndex"(): integer
 "previousIndex"(): integer
 "hasPrevious"(): boolean
 "previous"(): K
 "forEachRemaining"(arg0: $Consumer$$Type<(K)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectListIterator$$Type<K> = ($ObjectListIterator<(K)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ObjectListIterator$$Original<K> = $ObjectListIterator<(K)>;}
declare module "it.unimi.dsi.fastutil.objects.Reference2IntMap$Entry" {
import {$Comparable} from "java.lang.Comparable"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$Map$Entry, $Map$Entry$$Type, $Map$Entry$$Interface} from "java.util.Map$Entry"

export interface $Reference2IntMap$Entry$$Interface<K> extends $Map$Entry$$Interface<(K), (integer)> {
get "value"(): integer
set "value"(value: any)
set "value"(value: integer)
set "value"(value: integer)
get "intValue"(): integer
get "key"(): K
}

export class $Reference2IntMap$Entry<K> implements $Reference2IntMap$Entry$$Interface {
/**
 * 
 * @deprecated
 */
 "getValue"(): integer
/**
 * 
 * @deprecated
 */
 "setValue"(arg0: any): any
/**
 * 
 * @deprecated
 */
 "setValue"(arg0: integer): integer
 "setValue"(arg0: integer): integer
 "getIntValue"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<K, V>(arg0: $Map$Entry$$Type<(K), (integer)>): $Map$Entry<(K), (integer)>
 "getKey"(): K
static "comparingByKey"<K, V>(arg0: $Comparator$$Type<(K)>): $Comparator<($Map$Entry<(K), (integer)>)>
static "comparingByKey"<K extends $Comparable<(object)>, V>(): $Comparator<($Map$Entry<(K), (integer)>)>
static "comparingByValue"<K, V extends $Comparable<(object)>>(): $Comparator<($Map$Entry<(K), (integer)>)>
static "comparingByValue"<K, V>(arg0: $Comparator$$Type<(integer)>): $Comparator<($Map$Entry<(K), (integer)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Reference2IntMap$Entry$$Type<K> = ($Reference2IntMap$Entry<(K)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Reference2IntMap$Entry$$Original<K> = $Reference2IntMap$Entry<(K)>;}
declare module "it.unimi.dsi.fastutil.longs.Long2ObjectMap$Entry" {
import {$Comparable} from "java.lang.Comparable"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$Map$Entry, $Map$Entry$$Type, $Map$Entry$$Interface} from "java.util.Map$Entry"

export interface $Long2ObjectMap$Entry$$Interface<V> extends $Map$Entry$$Interface<(long), (V)> {
get "longKey"(): long
get "key"(): long
get "value"(): V
set "value"(value: V)
}

export class $Long2ObjectMap$Entry<V> implements $Long2ObjectMap$Entry$$Interface {
 "getLongKey"(): long
/**
 * 
 * @deprecated
 */
 "getKey"(): long
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<K, V>(arg0: $Map$Entry$$Type<(long), (V)>): $Map$Entry<(long), (V)>
 "getValue"(): V
static "comparingByKey"<K, V>(arg0: $Comparator$$Type<(long)>): $Comparator<($Map$Entry<(long), (V)>)>
static "comparingByKey"<K extends $Comparable<(object)>, V>(): $Comparator<($Map$Entry<(long), (V)>)>
 "setValue"(arg0: V): V
static "comparingByValue"<K, V extends $Comparable<(object)>>(): $Comparator<($Map$Entry<(long), (V)>)>
static "comparingByValue"<K, V>(arg0: $Comparator$$Type<(V)>): $Comparator<($Map$Entry<(long), (V)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Long2ObjectMap$Entry$$Type<V> = ($Long2ObjectMap$Entry<(V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Long2ObjectMap$Entry$$Original<V> = $Long2ObjectMap$Entry<(V)>;}
declare module "it.unimi.dsi.fastutil.ints.IntConsumer" {
import {$IntConsumer as $IntConsumer$0, $IntConsumer$$Type as $IntConsumer$0$$Type, $IntConsumer$$Interface as $IntConsumer$0$$Interface} from "java.util.function.IntConsumer"
import {$Consumer, $Consumer$$Type, $Consumer$$Interface} from "java.util.function.Consumer"

export interface $IntConsumer$$Interface extends $Consumer$$Interface<(integer)>, $IntConsumer$0$$Interface {

(arg0: integer): void
}

export class $IntConsumer implements $IntConsumer$$Interface {
/**
 * 
 * @deprecated
 */
 "accept"(arg0: any): void
/**
 * 
 * @deprecated
 */
 "accept"(arg0: integer): void
 "andThen"(arg0: $IntConsumer$0$$Type): $IntConsumer$0
/**
 * 
 * @deprecated
 */
 "andThen"(arg0: $Consumer$$Type<(integer)>): $Consumer<(integer)>
 "andThen"(arg0: $IntConsumer$$Type): $IntConsumer
 "accept"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntConsumer$$Type = ((arg0: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntConsumer$$Original = $IntConsumer;}
declare module "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction" {
import {$Char2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import {$Float2ReferenceFunction} from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import {$Byte2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import {$Reference2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import {$Reference2ShortFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import {$Reference2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import {$Double2FloatFunction} from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import {$Int2ReferenceFunction} from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import {$Reference2ByteFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import {$Byte2ReferenceFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import {$Object2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Int2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import {$Short2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import {$Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ReferenceFunction"
import {$Reference2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Double2DoubleFunction, $Double2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2DoubleFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Long2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import {$Short2ReferenceFunction} from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import {$Long2ReferenceFunction} from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import {$Double2CharFunction} from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import {$Reference2FloatFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import {$Double2LongFunction} from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import {$Double2ByteFunction} from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import {$Reference2CharFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import {$Object2ReferenceFunction} from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import {$Char2ReferenceFunction} from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import {$Double2IntFunction} from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import {$Double2ObjectFunction} from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import {$Reference2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import {$DoubleFunction$$Interface} from "java.util.function.DoubleFunction"
import {$Float2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import {$Double2ShortFunction} from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"

export interface $Double2ReferenceFunction$$Interface<V> extends $Function$0$$Interface<(double), (V)>, $DoubleFunction$$Interface<(V)> {

(arg0: double): V
}

export class $Double2ReferenceFunction<V> implements $Double2ReferenceFunction$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): V
 "remove"(arg0: double): V
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): V
 "get"(arg0: double): V
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "put"(arg0: double, arg1: V): V
 "put"(arg0: double, arg1: V): V
 "apply"(arg0: double): V
 "containsKey"(arg0: double): boolean
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "getOrDefault"(arg0: double, arg1: V): V
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: V): V
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (double)>): $Function<(T), (V)>
 "andThenFloat"(arg0: $Reference2FloatFunction$$Type<(V)>): $Double2FloatFunction
 "andThenObject"<T>(arg0: $Reference2ObjectFunction$$Type<(V), (T)>): $Double2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2DoubleFunction$$Type): $Byte2ReferenceFunction<(V)>
 "andThenLong"(arg0: $Reference2LongFunction$$Type<(V)>): $Double2LongFunction
 "defaultReturnValue"(): V
 "defaultReturnValue"(arg0: V): void
 "composeLong"(arg0: $Long2DoubleFunction$$Type): $Long2ReferenceFunction<(V)>
 "andThenChar"(arg0: $Reference2CharFunction$$Type<(V)>): $Double2CharFunction
 "andThenDouble"(arg0: $Reference2DoubleFunction$$Type<(V)>): $Double2DoubleFunction
 "composeObject"<T>(arg0: $Object2DoubleFunction$$Type<(T)>): $Object2ReferenceFunction<(T), (V)>
 "composeChar"(arg0: $Char2DoubleFunction$$Type): $Char2ReferenceFunction<(V)>
 "composeReference"<T>(arg0: $Reference2DoubleFunction$$Type<(T)>): $Reference2ReferenceFunction<(T), (V)>
 "andThenShort"(arg0: $Reference2ShortFunction$$Type<(V)>): $Double2ShortFunction
 "composeShort"(arg0: $Short2DoubleFunction$$Type): $Short2ReferenceFunction<(V)>
 "composeFloat"(arg0: $Float2DoubleFunction$$Type): $Float2ReferenceFunction<(V)>
 "andThenReference"<T>(arg0: $Reference2ReferenceFunction$$Type<(V), (T)>): $Double2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2DoubleFunction$$Type): $Double2ReferenceFunction<(V)>
 "andThenByte"(arg0: $Reference2ByteFunction$$Type<(V)>): $Double2ByteFunction
 "composeInt"(arg0: $Int2DoubleFunction$$Type): $Int2ReferenceFunction<(V)>
 "andThenInt"(arg0: $Reference2IntFunction$$Type<(V)>): $Double2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: double): V
static "identity"<T>(): $Function<(double), (double)>
 "andThen"<V>(arg0: $Function$$Type<(V), (V)>): $Function<(double), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Double2ReferenceFunction$$Type<V> = ((arg0: double) => V);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Double2ReferenceFunction$$Original<V> = $Double2ReferenceFunction<(V)>;}
declare module "it.unimi.dsi.fastutil.longs.Long2IntMap$Entry" {
import {$Comparable} from "java.lang.Comparable"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$Map$Entry, $Map$Entry$$Type, $Map$Entry$$Interface} from "java.util.Map$Entry"

export interface $Long2IntMap$Entry$$Interface extends $Map$Entry$$Interface<(long), (integer)> {
get "longKey"(): long
get "value"(): any
get "key"(): long
set "value"(value: integer)
set "value"(value: any)
set "value"(value: integer)
get "intValue"(): integer
}

export class $Long2IntMap$Entry implements $Long2IntMap$Entry$$Interface {
 "getLongKey"(): long
/**
 * 
 * @deprecated
 */
 "getValue"(): any
/**
 * 
 * @deprecated
 */
 "getKey"(): long
 "setValue"(arg0: integer): integer
/**
 * 
 * @deprecated
 */
 "setValue"(arg0: any): any
/**
 * 
 * @deprecated
 */
 "setValue"(arg0: integer): integer
 "getIntValue"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<K, V>(arg0: $Map$Entry$$Type<(long), (integer)>): $Map$Entry<(long), (integer)>
static "comparingByKey"<K, V>(arg0: $Comparator$$Type<(long)>): $Comparator<($Map$Entry<(long), (integer)>)>
static "comparingByKey"<K extends $Comparable<(object)>, V>(): $Comparator<($Map$Entry<(long), (integer)>)>
static "comparingByValue"<K, V extends $Comparable<(object)>>(): $Comparator<($Map$Entry<(long), (integer)>)>
static "comparingByValue"<K, V>(arg0: $Comparator$$Type<(integer)>): $Comparator<($Map$Entry<(long), (integer)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Long2IntMap$Entry$$Type = ($Long2IntMap$Entry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Long2IntMap$Entry$$Original = $Long2IntMap$Entry;}
declare module "it.unimi.dsi.fastutil.doubles.DoubleUnaryOperator" {
import {$UnaryOperator$$Interface} from "java.util.function.UnaryOperator"
import {$DoubleUnaryOperator as $DoubleUnaryOperator$0, $DoubleUnaryOperator$$Type as $DoubleUnaryOperator$0$$Type, $DoubleUnaryOperator$$Interface as $DoubleUnaryOperator$0$$Interface} from "java.util.function.DoubleUnaryOperator"
import {$Function, $Function$$Type} from "java.util.function.Function"

export interface $DoubleUnaryOperator$$Interface extends $UnaryOperator$$Interface<(double)>, $DoubleUnaryOperator$0$$Interface {

(arg0: double): double
}

export class $DoubleUnaryOperator implements $DoubleUnaryOperator$$Interface {
static "negation"(): $DoubleUnaryOperator
/**
 * 
 * @deprecated
 */
 "apply"(arg0: double): double
/**
 * 
 * @deprecated
 */
 "apply"(arg0: any): any
 "apply"(arg0: double): double
static "identity"(): $DoubleUnaryOperator
/**
 * 
 * @deprecated
 */
 "applyAsDouble"(arg0: double): double
 "compose"(arg0: $DoubleUnaryOperator$0$$Type): $DoubleUnaryOperator$0
 "andThen"(arg0: $DoubleUnaryOperator$0$$Type): $DoubleUnaryOperator$0
 "compose"<V>(arg0: $Function$$Type<(V), (double)>): $Function<(V), (double)>
 "andThen"<V>(arg0: $Function$$Type<(double), (V)>): $Function<(double), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleUnaryOperator$$Type = ((arg0: double) => double);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoubleUnaryOperator$$Original = $DoubleUnaryOperator;}
declare module "it.unimi.dsi.fastutil.longs.LongIterator" {
import {$LongConsumer$$Type} from "java.util.function.LongConsumer"
import {$PrimitiveIterator$OfLong$$Interface} from "java.util.PrimitiveIterator$OfLong"
import {$LongConsumer$$Type as $LongConsumer$0$$Type} from "it.unimi.dsi.fastutil.longs.LongConsumer"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $LongIterator$$Interface extends $PrimitiveIterator$OfLong$$Interface {
}

export class $LongIterator implements $LongIterator$$Interface {
/**
 * 
 * @deprecated
 */
 "forEachRemaining"(arg0: $Consumer$$Type<(long)>): void
 "forEachRemaining"(arg0: $LongConsumer$0$$Type): void
/**
 * 
 * @deprecated
 */
 "next"(): any
 "skip"(arg0: integer): integer
 "nextLong"(): long
 "forEachRemaining"(arg0: any): void
 "forEachRemaining"(arg0: $LongConsumer$$Type): void
 "remove"(): void
 "hasNext"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongIterator$$Type = ($LongIterator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LongIterator$$Original = $LongIterator;}
declare module "it.unimi.dsi.fastutil.ints.IntListIterator" {
import {$ListIterator$$Interface} from "java.util.ListIterator"
import {$IntConsumer$$Type as $IntConsumer$0$$Type} from "java.util.function.IntConsumer"
import {$IntConsumer$$Type} from "it.unimi.dsi.fastutil.ints.IntConsumer"
import {$IntBidirectionalIterator$$Interface} from "it.unimi.dsi.fastutil.ints.IntBidirectionalIterator"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $IntListIterator$$Interface extends $IntBidirectionalIterator$$Interface, $ListIterator$$Interface<(integer)> {
}

export class $IntListIterator implements $IntListIterator$$Interface {
 "remove"(): void
/**
 * 
 * @deprecated
 */
 "add"(arg0: integer): void
/**
 * 
 * @deprecated
 */
 "add"(arg0: any): void
 "add"(arg0: integer): void
/**
 * 
 * @deprecated
 */
 "next"(): any
/**
 * 
 * @deprecated
 */
 "set"(arg0: any): void
/**
 * 
 * @deprecated
 */
 "set"(arg0: integer): void
 "set"(arg0: integer): void
/**
 * 
 * @deprecated
 */
 "previous"(): any
 "skip"(arg0: integer): integer
 "back"(arg0: integer): integer
 "previousInt"(): integer
 "hasNext"(): boolean
 "nextIndex"(): integer
 "previousIndex"(): integer
 "hasPrevious"(): boolean
/**
 * 
 * @deprecated
 */
 "forEachRemaining"(arg0: $Consumer$$Type<(integer)>): void
 "forEachRemaining"(arg0: $IntConsumer$$Type): void
 "nextInt"(): integer
 "forEachRemaining"(arg0: any): void
 "forEachRemaining"(arg0: $IntConsumer$0$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntListIterator$$Type = ($IntListIterator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntListIterator$$Original = $IntListIterator;}
declare module "it.unimi.dsi.fastutil.floats.Float2FloatFunction" {
import {$DoubleUnaryOperator, $DoubleUnaryOperator$$Type, $DoubleUnaryOperator$$Interface} from "java.util.function.DoubleUnaryOperator"
import {$Float2ReferenceFunction, $Float2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import {$Float2ByteFunction, $Float2ByteFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Int2FloatFunction, $Int2FloatFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import {$Float2LongFunction, $Float2LongFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import {$Float2ShortFunction, $Float2ShortFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import {$Float2IntFunction, $Float2IntFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import {$Reference2FloatFunction, $Reference2FloatFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import {$Double2FloatFunction, $Double2FloatFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import {$Float2ObjectFunction, $Float2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Object2FloatFunction, $Object2FloatFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import {$Long2FloatFunction, $Long2FloatFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import {$Char2FloatFunction, $Char2FloatFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import {$Short2FloatFunction, $Short2FloatFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import {$Float2CharFunction, $Float2CharFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import {$Byte2FloatFunction, $Byte2FloatFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import {$Float2DoubleFunction, $Float2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"

export interface $Float2FloatFunction$$Interface extends $Function$0$$Interface<(float), (float)>, $DoubleUnaryOperator$$Interface {

(arg0: float): float
}

export class $Float2FloatFunction implements $Float2FloatFunction$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): any
 "remove"(arg0: float): float
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): float
 "get"(arg0: float): float
/**
 * 
 * @deprecated
 */
 "put"(arg0: float, arg1: float): float
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: float, arg1: float): float
static "identity"(): $Float2FloatFunction
 "containsKey"(arg0: float): boolean
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "getOrDefault"(arg0: float, arg1: float): float
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: float): float
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "applyAsDouble"(arg0: double): double
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (float)>): $Function<(T), (float)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(float), (T)>): $Function<(float), (T)>
 "andThenFloat"(arg0: $Float2FloatFunction$$Type): $Float2FloatFunction
 "andThenObject"<T>(arg0: $Float2ObjectFunction$$Type<(T)>): $Float2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2FloatFunction$$Type): $Byte2FloatFunction
 "andThenLong"(arg0: $Float2LongFunction$$Type): $Float2LongFunction
 "defaultReturnValue"(): float
 "defaultReturnValue"(arg0: float): void
 "composeLong"(arg0: $Long2FloatFunction$$Type): $Long2FloatFunction
 "andThenChar"(arg0: $Float2CharFunction$$Type): $Float2CharFunction
 "andThenDouble"(arg0: $Float2DoubleFunction$$Type): $Float2DoubleFunction
 "composeObject"<T>(arg0: $Object2FloatFunction$$Type<(T)>): $Object2FloatFunction<(T)>
 "composeChar"(arg0: $Char2FloatFunction$$Type): $Char2FloatFunction
 "composeReference"<T>(arg0: $Reference2FloatFunction$$Type<(T)>): $Reference2FloatFunction<(T)>
 "andThenShort"(arg0: $Float2ShortFunction$$Type): $Float2ShortFunction
 "composeShort"(arg0: $Short2FloatFunction$$Type): $Short2FloatFunction
 "composeFloat"(arg0: $Float2FloatFunction$$Type): $Float2FloatFunction
 "andThenReference"<T>(arg0: $Float2ReferenceFunction$$Type<(T)>): $Float2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2FloatFunction$$Type): $Double2FloatFunction
 "andThenByte"(arg0: $Float2ByteFunction$$Type): $Float2ByteFunction
 "composeInt"(arg0: $Int2FloatFunction$$Type): $Int2FloatFunction
 "andThenInt"(arg0: $Float2IntFunction$$Type): $Float2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: float): float
 "compose"(arg0: $DoubleUnaryOperator$$Type): $DoubleUnaryOperator
 "andThen"(arg0: $DoubleUnaryOperator$$Type): $DoubleUnaryOperator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Float2FloatFunction$$Type = ((arg0: float) => float);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Float2FloatFunction$$Original = $Float2FloatFunction;}
declare module "it.unimi.dsi.fastutil.shorts.Short2ShortFunction" {
import {$Short2DoubleFunction, $Short2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Int2ShortFunction, $Int2ShortFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import {$Short2IntFunction, $Short2IntFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import {$Float2ShortFunction, $Float2ShortFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import {$Short2ReferenceFunction, $Short2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import {$Reference2ShortFunction, $Reference2ShortFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import {$Long2ShortFunction, $Long2ShortFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import {$IntUnaryOperator, $IntUnaryOperator$$Type, $IntUnaryOperator$$Interface} from "java.util.function.IntUnaryOperator"
import {$Short2LongFunction, $Short2LongFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import {$Short2CharFunction, $Short2CharFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import {$Object2ShortFunction, $Object2ShortFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import {$Short2ObjectFunction, $Short2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import {$Char2ShortFunction, $Char2ShortFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Short2FloatFunction, $Short2FloatFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import {$Byte2ShortFunction, $Byte2ShortFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import {$Short2ByteFunction, $Short2ByteFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import {$Double2ShortFunction, $Double2ShortFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"

export interface $Short2ShortFunction$$Interface extends $Function$0$$Interface<(short), (short)>, $IntUnaryOperator$$Interface {

(arg0: short): short
}

export class $Short2ShortFunction implements $Short2ShortFunction$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): any
 "remove"(arg0: short): short
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): short
 "get"(arg0: short): short
/**
 * 
 * @deprecated
 */
 "put"(arg0: short, arg1: short): short
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: short, arg1: short): short
static "identity"(): $Short2ShortFunction
 "containsKey"(arg0: short): boolean
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "getOrDefault"(arg0: short, arg1: short): short
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: short): short
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "applyAsInt"(arg0: integer): integer
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (short)>): $Function<(T), (short)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(short), (T)>): $Function<(short), (T)>
 "andThenFloat"(arg0: $Short2FloatFunction$$Type): $Short2FloatFunction
 "andThenObject"<T>(arg0: $Short2ObjectFunction$$Type<(T)>): $Short2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2ShortFunction$$Type): $Byte2ShortFunction
 "andThenLong"(arg0: $Short2LongFunction$$Type): $Short2LongFunction
 "defaultReturnValue"(): short
 "defaultReturnValue"(arg0: short): void
 "composeLong"(arg0: $Long2ShortFunction$$Type): $Long2ShortFunction
 "andThenChar"(arg0: $Short2CharFunction$$Type): $Short2CharFunction
 "andThenDouble"(arg0: $Short2DoubleFunction$$Type): $Short2DoubleFunction
 "composeObject"<T>(arg0: $Object2ShortFunction$$Type<(T)>): $Object2ShortFunction<(T)>
 "composeChar"(arg0: $Char2ShortFunction$$Type): $Char2ShortFunction
 "composeReference"<T>(arg0: $Reference2ShortFunction$$Type<(T)>): $Reference2ShortFunction<(T)>
 "andThenShort"(arg0: $Short2ShortFunction$$Type): $Short2ShortFunction
 "composeShort"(arg0: $Short2ShortFunction$$Type): $Short2ShortFunction
 "composeFloat"(arg0: $Float2ShortFunction$$Type): $Float2ShortFunction
 "andThenReference"<T>(arg0: $Short2ReferenceFunction$$Type<(T)>): $Short2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2ShortFunction$$Type): $Double2ShortFunction
 "andThenByte"(arg0: $Short2ByteFunction$$Type): $Short2ByteFunction
 "composeInt"(arg0: $Int2ShortFunction$$Type): $Int2ShortFunction
 "andThenInt"(arg0: $Short2IntFunction$$Type): $Short2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: short): short
 "compose"(arg0: $IntUnaryOperator$$Type): $IntUnaryOperator
 "andThen"(arg0: $IntUnaryOperator$$Type): $IntUnaryOperator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Short2ShortFunction$$Type = ((arg0: short) => short);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Short2ShortFunction$$Original = $Short2ShortFunction;}
declare module "it.unimi.dsi.fastutil.shorts.ShortSet" {
import {$Iterator} from "java.util.Iterator"
import {$ShortPredicate$$Type} from "it.unimi.dsi.fastutil.shorts.ShortPredicate"
import {$Collection$$Type} from "java.util.Collection"
import {$IntStream} from "java.util.stream.IntStream"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$IntPredicate$$Type} from "java.util.function.IntPredicate"
import {$IntSpliterator} from "it.unimi.dsi.fastutil.ints.IntSpliterator"
import {$ShortSpliterator} from "it.unimi.dsi.fastutil.shorts.ShortSpliterator"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$IntFunction$$Type} from "java.util.function.IntFunction"
import {$IntIterator} from "it.unimi.dsi.fastutil.ints.IntIterator"
import {$ShortConsumer$$Type} from "it.unimi.dsi.fastutil.shorts.ShortConsumer"
import {$ShortCollection$$Type, $ShortCollection$$Interface} from "it.unimi.dsi.fastutil.shorts.ShortCollection"
import {$IntConsumer$$Type} from "java.util.function.IntConsumer"
import {$Set, $Set$$Interface} from "java.util.Set"
import {$Stream} from "java.util.stream.Stream"

export interface $ShortSet$$Interface extends $ShortCollection$$Interface, $Set$$Interface<(short)> {
get "empty"(): boolean
}

export class $ShortSet implements $ShortSet$$Interface {
 "remove"(arg0: short): boolean
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): boolean
/**
 * 
 * @deprecated
 */
 "add"(arg0: short): boolean
/**
 * 
 * @deprecated
 */
 "add"(arg0: any): boolean
 "iterator"(): $Iterator
static "of"(arg0: short, arg1: short): $ShortSet
static "of"(): $ShortSet
static "of"(...arg0: (short)[]): $ShortSet
static "of"(arg0: short): $ShortSet
static "of"(arg0: short, arg1: short, arg2: short): $ShortSet
/**
 * 
 * @deprecated
 */
 "contains"(arg0: any): boolean
 "spliterator"(): $ShortSpliterator
/**
 * 
 * @deprecated
 */
 "rem"(arg0: short): boolean
 "add"(arg0: short): boolean
 "toArray"(arg0: (short)[]): (short)[]
/**
 * 
 * @deprecated
 */
 "stream"(): $Stream<(short)>
 "intStream"(): $IntStream
 "contains"(arg0: short): boolean
 "addAll"(arg0: $ShortCollection$$Type): boolean
/**
 * 
 * @deprecated
 */
 "removeIf"(arg0: $Predicate$$Type<(short)>): boolean
 "removeIf"(arg0: $ShortPredicate$$Type): boolean
 "removeIf"(arg0: $IntPredicate$$Type): boolean
 "removeAll"(arg0: $ShortCollection$$Type): boolean
 "retainAll"(arg0: $ShortCollection$$Type): boolean
 "containsAll"(arg0: $ShortCollection$$Type): boolean
/**
 * 
 * @deprecated
 */
 "parallelStream"(): $Stream<(short)>
/**
 * 
 * @deprecated
 */
 "toShortArray"(arg0: (short)[]): (short)[]
 "toShortArray"(): (short)[]
 "intSpliterator"(): $IntSpliterator
 "intIterator"(): $IntIterator
 "intParallelStream"(): $IntStream
 "size"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<E>(arg0: $Collection$$Type<(short)>): $Set<(short)>
 "clear"(): void
 "isEmpty"(): boolean
 "toArray"(): (any)[]
 "toArray"<T>(arg0: (T)[]): (T)[]
static "of"<E>(arg0: short, arg1: short, arg2: short, arg3: short, arg4: short, arg5: short): $Set<(short)>
static "of"<E>(arg0: short, arg1: short, arg2: short, arg3: short, arg4: short): $Set<(short)>
static "of"<E>(arg0: short, arg1: short, arg2: short, arg3: short): $Set<(short)>
static "of"<E>(arg0: short, arg1: short, arg2: short, arg3: short, arg4: short, arg5: short, arg6: short, arg7: short, arg8: short, arg9: short): $Set<(short)>
static "of"<E>(arg0: short, arg1: short, arg2: short, arg3: short, arg4: short, arg5: short, arg6: short, arg7: short, arg8: short): $Set<(short)>
static "of"<E>(arg0: short, arg1: short, arg2: short, arg3: short, arg4: short, arg5: short, arg6: short, arg7: short): $Set<(short)>
static "of"<E>(arg0: short, arg1: short, arg2: short, arg3: short, arg4: short, arg5: short, arg6: short): $Set<(short)>
static "of"<E>(...arg0: (short)[]): $Set<(short)>
static "of"<E>(arg0: short, arg1: short, arg2: short): $Set<(short)>
static "of"<E>(arg0: short): $Set<(short)>
static "of"<E>(arg0: short, arg1: short): $Set<(short)>
 "addAll"(arg0: $Collection$$Type<(short)>): boolean
 "removeAll"(arg0: $Collection$$Type<(never)>): boolean
 "retainAll"(arg0: $Collection$$Type<(never)>): boolean
 "containsAll"(arg0: $Collection$$Type<(never)>): boolean
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "forEach"(arg0: $ShortConsumer$$Type): void
/**
 * 
 * @deprecated
 */
 "forEach"(arg0: $Consumer$$Type<(short)>): void
 "forEach"(arg0: $IntConsumer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShortSet$$Type = ($ShortSet);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShortSet$$Original = $ShortSet;}
declare module "it.unimi.dsi.fastutil.objects.AbstractObjectSortedSet" {
import {$ObjectBidirectionalIterator} from "it.unimi.dsi.fastutil.objects.ObjectBidirectionalIterator"
import {$Iterator} from "java.util.Iterator"
import {$SequencedSet} from "java.util.SequencedSet"
import {$Collection$$Type} from "java.util.Collection"
import {$ObjectSet} from "it.unimi.dsi.fastutil.objects.ObjectSet"
import {$SortedSet} from "java.util.SortedSet"
import {$Comparator} from "java.util.Comparator"
import {$Spliterator} from "java.util.Spliterator"
import {$ObjectSortedSet$$Interface} from "it.unimi.dsi.fastutil.objects.ObjectSortedSet"
import {$Set} from "java.util.Set"
import {$AbstractObjectSet} from "it.unimi.dsi.fastutil.objects.AbstractObjectSet"

export class $AbstractObjectSortedSet<K> extends $AbstractObjectSet<(K)> implements $ObjectSortedSet$$Interface<(K)> {
public "iterator"(): $Iterator
public "iterator"(arg0: K): $ObjectBidirectionalIterator<(K)>
public "spliterator"(): $Spliterator
public "subSet"(arg0: any, arg1: any): $SortedSet
public "headSet"(arg0: any): $SortedSet
public "tailSet"(arg0: any): $SortedSet
public static "of"<K>(arg0: K, arg1: K): $ObjectSet<(K)>
public static "of"<K>(...arg0: (K)[]): $ObjectSet<(K)>
public static "of"<K>(arg0: K, arg1: K, arg2: K): $ObjectSet<(K)>
public static "of"<K>(): $ObjectSet<(K)>
public static "of"<K>(arg0: K): $ObjectSet<(K)>
public "last"(): K
public "first"(): K
public "getFirst"(): K
public "getLast"(): K
public "addFirst"(arg0: K): void
public "addLast"(arg0: K): void
public "removeFirst"(): K
public "removeLast"(): K
public "reversed"(): $SequencedSet
public "comparator"(): $Comparator<(K)>
public "remove"(arg0: any): boolean
public "size"(): integer
public static "copyOf"<E>(arg0: $Collection$$Type<(K)>): $Set<(K)>
public "clear"(): void
public "isEmpty"(): boolean
public "add"(arg0: K): boolean
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K): $Set<(K)>
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K): $Set<(K)>
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K): $Set<(K)>
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K, arg6: K, arg7: K, arg8: K, arg9: K): $Set<(K)>
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K, arg6: K, arg7: K, arg8: K): $Set<(K)>
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K, arg6: K, arg7: K): $Set<(K)>
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K, arg6: K): $Set<(K)>
public "contains"(arg0: any): boolean
public "addAll"(arg0: $Collection$$Type<(K)>): boolean
public "removeAll"(arg0: $Collection$$Type<(never)>): boolean
public "retainAll"(arg0: $Collection$$Type<(never)>): boolean
public "containsAll"(arg0: $Collection$$Type<(never)>): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractObjectSortedSet$$Type<K> = ($AbstractObjectSortedSet<(K)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractObjectSortedSet$$Original<K> = $AbstractObjectSortedSet<(K)>;}
declare module "it.unimi.dsi.fastutil.longs.Long2DoubleFunction" {
import {$Char2DoubleFunction} from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import {$Byte2DoubleFunction} from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import {$Long2CharFunction} from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import {$Long2ByteFunction} from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import {$Long2IntFunction} from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import {$Reference2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import {$Double2FloatFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import {$Double2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import {$Long2ShortFunction} from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import {$LongToDoubleFunction$$Interface} from "java.util.function.LongToDoubleFunction"
import {$Object2DoubleFunction} from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Int2DoubleFunction} from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import {$Short2DoubleFunction} from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import {$Double2DoubleFunction, $Double2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2DoubleFunction"
import {$Function$$Interface as $Function$0$$Interface} from "it.unimi.dsi.fastutil.Function"
import {$Long2LongFunction, $Long2LongFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import {$Float2LongFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import {$Long2ReferenceFunction} from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import {$Double2CharFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import {$Byte2LongFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import {$Char2LongFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import {$Double2LongFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import {$Short2LongFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import {$Double2ByteFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import {$Int2LongFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import {$Long2FloatFunction} from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import {$Double2IntFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import {$Object2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import {$Double2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import {$Reference2DoubleFunction} from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import {$Float2DoubleFunction} from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import {$Long2ObjectFunction} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import {$Double2ShortFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"

export interface $Long2DoubleFunction$$Interface extends $Function$0$$Interface<(long), (double)>, $LongToDoubleFunction$$Interface {

(arg0: long): double
}

export class $Long2DoubleFunction implements $Long2DoubleFunction$$Interface {
 "remove"(arg0: long): double
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): double
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): double
 "get"(arg0: long): double
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "put"(arg0: long, arg1: double): double
/**
 * 
 * @deprecated
 */
 "put"(arg0: long, arg1: double): double
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "containsKey"(arg0: long): boolean
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: any): any
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: double): double
 "getOrDefault"(arg0: long, arg1: double): double
 "applyAsDouble"(arg0: long): double
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (long)>): $Function<(T), (double)>
/**
 * 
 * @deprecated
 */
 "andThen"<T>(arg0: $Function$$Type<(double), (T)>): $Function<(long), (T)>
 "andThenFloat"(arg0: $Double2FloatFunction$$Type): $Long2FloatFunction
 "andThenObject"<T>(arg0: $Double2ObjectFunction$$Type<(T)>): $Long2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2LongFunction$$Type): $Byte2DoubleFunction
 "andThenLong"(arg0: $Double2LongFunction$$Type): $Long2LongFunction
 "defaultReturnValue"(): double
 "defaultReturnValue"(arg0: double): void
 "composeLong"(arg0: $Long2LongFunction$$Type): $Long2DoubleFunction
 "andThenChar"(arg0: $Double2CharFunction$$Type): $Long2CharFunction
 "andThenDouble"(arg0: $Double2DoubleFunction$$Type): $Long2DoubleFunction
 "composeObject"<T>(arg0: $Object2LongFunction$$Type<(T)>): $Object2DoubleFunction<(T)>
 "composeChar"(arg0: $Char2LongFunction$$Type): $Char2DoubleFunction
 "composeReference"<T>(arg0: $Reference2LongFunction$$Type<(T)>): $Reference2DoubleFunction<(T)>
 "andThenShort"(arg0: $Double2ShortFunction$$Type): $Long2ShortFunction
 "composeShort"(arg0: $Short2LongFunction$$Type): $Short2DoubleFunction
 "composeFloat"(arg0: $Float2LongFunction$$Type): $Float2DoubleFunction
 "andThenReference"<T>(arg0: $Double2ReferenceFunction$$Type<(T)>): $Long2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2LongFunction$$Type): $Double2DoubleFunction
 "andThenByte"(arg0: $Double2ByteFunction$$Type): $Long2ByteFunction
 "composeInt"(arg0: $Int2LongFunction$$Type): $Int2DoubleFunction
 "andThenInt"(arg0: $Double2IntFunction$$Type): $Long2IntFunction
 "size"(): integer
 "clear"(): void
 "apply"(arg0: long): double
static "identity"<T>(): $Function<(long), (long)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Long2DoubleFunction$$Type = ((arg0: long) => double);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Long2DoubleFunction$$Original = $Long2DoubleFunction;}
declare module "it.unimi.dsi.fastutil.longs.AbstractLong2ObjectSortedMap" {
import {$Collection} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$SequencedCollection} from "java.util.SequencedCollection"
import {$LongComparator} from "it.unimi.dsi.fastutil.longs.LongComparator"
import {$Long2ObjectSortedMap, $Long2ObjectSortedMap$$Interface} from "it.unimi.dsi.fastutil.longs.Long2ObjectSortedMap"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$SequencedSet} from "java.util.SequencedSet"
import {$ObjectSortedSet} from "it.unimi.dsi.fastutil.objects.ObjectSortedSet"
import {$Function} from "java.util.function.Function"
import {$Long2ObjectMap$Entry} from "it.unimi.dsi.fastutil.longs.Long2ObjectMap$Entry"
import {$Set} from "java.util.Set"
import {$AbstractLong2ObjectMap} from "it.unimi.dsi.fastutil.longs.AbstractLong2ObjectMap"
import {$SortedMap} from "java.util.SortedMap"

export class $AbstractLong2ObjectSortedMap<V> extends $AbstractLong2ObjectMap<(V)> implements $Long2ObjectSortedMap$$Interface<(V)> {
public "values"(): $Collection
public "keySet"(): $Set
/**
 * 
 * @deprecated
 */
public "entrySet"(): $ObjectSortedSet<($Map$Entry<(long), (V)>)>
public "comparator"(): $LongComparator
/**
 * 
 * @deprecated
 */
public "firstKey"(): any
/**
 * 
 * @deprecated
 */
public "subMap"(arg0: long, arg1: long): $Long2ObjectSortedMap<(V)>
/**
 * 
 * @deprecated
 */
public "subMap"(arg0: any, arg1: any): $SortedMap
public "subMap"(arg0: long, arg1: long): $Long2ObjectSortedMap<(V)>
/**
 * 
 * @deprecated
 */
public "headMap"(arg0: any): $SortedMap
public "headMap"(arg0: long): $Long2ObjectSortedMap<(V)>
/**
 * 
 * @deprecated
 */
public "headMap"(arg0: long): $Long2ObjectSortedMap<(V)>
/**
 * 
 * @deprecated
 */
public "tailMap"(arg0: long): $Long2ObjectSortedMap<(V)>
public "tailMap"(arg0: long): $Long2ObjectSortedMap<(V)>
/**
 * 
 * @deprecated
 */
public "tailMap"(arg0: any): $SortedMap
/**
 * 
 * @deprecated
 */
public "lastKey"(): any
public "lastLongKey"(): long
public "firstLongKey"(): long
public "long2ObjectEntrySet"(): $ObjectSortedSet<($Long2ObjectMap$Entry<(V)>)>
public "defaultReturnValue"(): V
public "defaultReturnValue"(arg0: V): void
public "reversed"(): $SortedMap<(long), (V)>
public "putFirst"(arg0: long, arg1: V): V
public "putLast"(arg0: long, arg1: V): V
public static "copyOf"<K, V>(arg0: $Map$$Type<(long), (V)>): $Map<(long), (V)>
public static "of"<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V, arg6: long, arg7: V): $Map<(long), (V)>
public static "of"<K, V>(): $Map<(long), (V)>
public static "of"<K, V>(arg0: long, arg1: V): $Map<(long), (V)>
public static "of"<K, V>(arg0: long, arg1: V, arg2: long, arg3: V): $Map<(long), (V)>
public static "of"<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V): $Map<(long), (V)>
public static "of"<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V, arg6: long, arg7: V, arg8: long, arg9: V, arg10: long, arg11: V, arg12: long, arg13: V, arg14: long, arg15: V, arg16: long, arg17: V, arg18: long, arg19: V): $Map<(long), (V)>
public static "of"<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V, arg6: long, arg7: V, arg8: long, arg9: V, arg10: long, arg11: V, arg12: long, arg13: V, arg14: long, arg15: V, arg16: long, arg17: V): $Map<(long), (V)>
public static "of"<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V, arg6: long, arg7: V, arg8: long, arg9: V, arg10: long, arg11: V, arg12: long, arg13: V, arg14: long, arg15: V): $Map<(long), (V)>
public static "of"<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V, arg6: long, arg7: V, arg8: long, arg9: V, arg10: long, arg11: V, arg12: long, arg13: V): $Map<(long), (V)>
public static "of"<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V, arg6: long, arg7: V, arg8: long, arg9: V, arg10: long, arg11: V): $Map<(long), (V)>
public static "of"<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V, arg6: long, arg7: V, arg8: long, arg9: V): $Map<(long), (V)>
public static "entry"<K, V>(arg0: long, arg1: V): $Map$Entry<(long), (V)>
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(long), (V)>)[]): $Map<(long), (V)>
public "sequencedKeySet"(): $SequencedSet<(long)>
public "sequencedValues"(): $SequencedCollection<(V)>
public "sequencedEntrySet"(): $SequencedSet<($Map$Entry<(long), (V)>)>
public "firstEntry"(): $Map$Entry<(long), (V)>
public "lastEntry"(): $Map$Entry<(long), (V)>
public "pollFirstEntry"(): $Map$Entry<(long), (V)>
public "pollLastEntry"(): $Map$Entry<(long), (V)>
public static "identity"<T>(): $Function<(long), (long)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractLong2ObjectSortedMap$$Type<V> = ($AbstractLong2ObjectSortedMap<(V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractLong2ObjectSortedMap$$Original<V> = $AbstractLong2ObjectSortedMap<(V)>;}
declare module "it.unimi.dsi.fastutil.objects.ObjectIterator" {
import {$Iterator$$Interface} from "java.util.Iterator"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $ObjectIterator$$Interface<K> extends $Iterator$$Interface<(K)> {
}

export class $ObjectIterator<K> implements $ObjectIterator$$Interface {
 "skip"(arg0: integer): integer
 "remove"(): void
 "forEachRemaining"(arg0: $Consumer$$Type<(K)>): void
 "hasNext"(): boolean
 "next"(): K
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectIterator$$Type<K> = ($ObjectIterator<(K)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ObjectIterator$$Original<K> = $ObjectIterator<(K)>;}
declare module "it.unimi.dsi.fastutil.objects.Reference2ObjectMap$FastEntrySet" {
import {$Iterator} from "java.util.Iterator"
import {$Collection$$Type} from "java.util.Collection"
import {$ObjectSet, $ObjectSet$$Interface} from "it.unimi.dsi.fastutil.objects.ObjectSet"
import {$Spliterator} from "java.util.Spliterator"
import {$ObjectIterator} from "it.unimi.dsi.fastutil.objects.ObjectIterator"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Set} from "java.util.Set"
import {$Stream} from "java.util.stream.Stream"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$IntFunction$$Type} from "java.util.function.IntFunction"
import {$Reference2ObjectMap$Entry, $Reference2ObjectMap$Entry$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ObjectMap$Entry"

export interface $Reference2ObjectMap$FastEntrySet$$Interface<K, V> extends $ObjectSet$$Interface<($Reference2ObjectMap$Entry<(K), (V)>)> {
get "empty"(): boolean
}

export class $Reference2ObjectMap$FastEntrySet<K, V> implements $Reference2ObjectMap$FastEntrySet$$Interface {
 "fastIterator"(): $ObjectIterator<($Reference2ObjectMap$Entry<(K), (V)>)>
 "fastForEach"(arg0: $Consumer$$Type<($Reference2ObjectMap$Entry<(K), (V)>)>): void
 "iterator"(): $Iterator
static "of"<K>(arg0: $Reference2ObjectMap$Entry$$Type<(K), (V)>, arg1: $Reference2ObjectMap$Entry$$Type<(K), (V)>): $ObjectSet<($Reference2ObjectMap$Entry<(K), (V)>)>
static "of"<K>(...arg0: ($Reference2ObjectMap$Entry$$Type<(K), (V)>)[]): $ObjectSet<($Reference2ObjectMap$Entry<(K), (V)>)>
static "of"<K>(arg0: $Reference2ObjectMap$Entry$$Type<(K), (V)>, arg1: $Reference2ObjectMap$Entry$$Type<(K), (V)>, arg2: $Reference2ObjectMap$Entry$$Type<(K), (V)>): $ObjectSet<($Reference2ObjectMap$Entry<(K), (V)>)>
static "of"<K>(): $ObjectSet<($Reference2ObjectMap$Entry<(K), (V)>)>
static "of"<K>(arg0: $Reference2ObjectMap$Entry$$Type<(K), (V)>): $ObjectSet<($Reference2ObjectMap$Entry<(K), (V)>)>
 "spliterator"(): $Spliterator
 "remove"(arg0: any): boolean
 "size"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<E>(arg0: $Collection$$Type<($Reference2ObjectMap$Entry$$Type<(K), (V)>)>): $Set<($Reference2ObjectMap$Entry<(K), (V)>)>
 "clear"(): void
 "isEmpty"(): boolean
 "add"(arg0: $Reference2ObjectMap$Entry$$Type<(K), (V)>): boolean
 "toArray"(): (any)[]
 "toArray"<T>(arg0: (T)[]): (T)[]
static "of"<E>(arg0: $Reference2ObjectMap$Entry$$Type<(K), (V)>, arg1: $Reference2ObjectMap$Entry$$Type<(K), (V)>, arg2: $Reference2ObjectMap$Entry$$Type<(K), (V)>, arg3: $Reference2ObjectMap$Entry$$Type<(K), (V)>, arg4: $Reference2ObjectMap$Entry$$Type<(K), (V)>, arg5: $Reference2ObjectMap$Entry$$Type<(K), (V)>): $Set<($Reference2ObjectMap$Entry<(K), (V)>)>
static "of"<E>(arg0: $Reference2ObjectMap$Entry$$Type<(K), (V)>, arg1: $Reference2ObjectMap$Entry$$Type<(K), (V)>, arg2: $Reference2ObjectMap$Entry$$Type<(K), (V)>, arg3: $Reference2ObjectMap$Entry$$Type<(K), (V)>, arg4: $Reference2ObjectMap$Entry$$Type<(K), (V)>): $Set<($Reference2ObjectMap$Entry<(K), (V)>)>
static "of"<E>(arg0: $Reference2ObjectMap$Entry$$Type<(K), (V)>, arg1: $Reference2ObjectMap$Entry$$Type<(K), (V)>, arg2: $Reference2ObjectMap$Entry$$Type<(K), (V)>, arg3: $Reference2ObjectMap$Entry$$Type<(K), (V)>): $Set<($Reference2ObjectMap$Entry<(K), (V)>)>
static "of"<E>(arg0: $Reference2ObjectMap$Entry$$Type<(K), (V)>, arg1: $Reference2ObjectMap$Entry$$Type<(K), (V)>, arg2: $Reference2ObjectMap$Entry$$Type<(K), (V)>, arg3: $Reference2ObjectMap$Entry$$Type<(K), (V)>, arg4: $Reference2ObjectMap$Entry$$Type<(K), (V)>, arg5: $Reference2ObjectMap$Entry$$Type<(K), (V)>, arg6: $Reference2ObjectMap$Entry$$Type<(K), (V)>, arg7: $Reference2ObjectMap$Entry$$Type<(K), (V)>, arg8: $Reference2ObjectMap$Entry$$Type<(K), (V)>, arg9: $Reference2ObjectMap$Entry$$Type<(K), (V)>): $Set<($Reference2ObjectMap$Entry<(K), (V)>)>
static "of"<E>(arg0: $Reference2ObjectMap$Entry$$Type<(K), (V)>, arg1: $Reference2ObjectMap$Entry$$Type<(K), (V)>, arg2: $Reference2ObjectMap$Entry$$Type<(K), (V)>, arg3: $Reference2ObjectMap$Entry$$Type<(K), (V)>, arg4: $Reference2ObjectMap$Entry$$Type<(K), (V)>, arg5: $Reference2ObjectMap$Entry$$Type<(K), (V)>, arg6: $Reference2ObjectMap$Entry$$Type<(K), (V)>, arg7: $Reference2ObjectMap$Entry$$Type<(K), (V)>, arg8: $Reference2ObjectMap$Entry$$Type<(K), (V)>): $Set<($Reference2ObjectMap$Entry<(K), (V)>)>
static "of"<E>(arg0: $Reference2ObjectMap$Entry$$Type<(K), (V)>, arg1: $Reference2ObjectMap$Entry$$Type<(K), (V)>, arg2: $Reference2ObjectMap$Entry$$Type<(K), (V)>, arg3: $Reference2ObjectMap$Entry$$Type<(K), (V)>, arg4: $Reference2ObjectMap$Entry$$Type<(K), (V)>, arg5: $Reference2ObjectMap$Entry$$Type<(K), (V)>, arg6: $Reference2ObjectMap$Entry$$Type<(K), (V)>, arg7: $Reference2ObjectMap$Entry$$Type<(K), (V)>): $Set<($Reference2ObjectMap$Entry<(K), (V)>)>
static "of"<E>(arg0: $Reference2ObjectMap$Entry$$Type<(K), (V)>, arg1: $Reference2ObjectMap$Entry$$Type<(K), (V)>, arg2: $Reference2ObjectMap$Entry$$Type<(K), (V)>, arg3: $Reference2ObjectMap$Entry$$Type<(K), (V)>, arg4: $Reference2ObjectMap$Entry$$Type<(K), (V)>, arg5: $Reference2ObjectMap$Entry$$Type<(K), (V)>, arg6: $Reference2ObjectMap$Entry$$Type<(K), (V)>): $Set<($Reference2ObjectMap$Entry<(K), (V)>)>
 "contains"(arg0: any): boolean
 "addAll"(arg0: $Collection$$Type<($Reference2ObjectMap$Entry$$Type<(K), (V)>)>): boolean
 "removeAll"(arg0: $Collection$$Type<(never)>): boolean
 "retainAll"(arg0: $Collection$$Type<(never)>): boolean
 "containsAll"(arg0: $Collection$$Type<(never)>): boolean
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "stream"(): $Stream<($Reference2ObjectMap$Entry<(K), (V)>)>
 "removeIf"(arg0: $Predicate$$Type<($Reference2ObjectMap$Entry<(K), (V)>)>): boolean
 "parallelStream"(): $Stream<($Reference2ObjectMap$Entry<(K), (V)>)>
 "forEach"(arg0: $Consumer$$Type<($Reference2ObjectMap$Entry<(K), (V)>)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Reference2ObjectMap$FastEntrySet$$Type<K, V> = ($Reference2ObjectMap$FastEntrySet<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Reference2ObjectMap$FastEntrySet$$Original<K, V> = $Reference2ObjectMap$FastEntrySet<(K), (V)>;}
declare module "it.unimi.dsi.fastutil.longs.Long2ObjectSortedMap" {
import {$Object2IntFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import {$Long2CharFunction} from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import {$Long2ObjectMap$$Interface} from "it.unimi.dsi.fastutil.longs.Long2ObjectMap"
import {$Long2ByteFunction} from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import {$Long2IntFunction} from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import {$LongFunction$$Type} from "java.util.function.LongFunction"
import {$Object2ObjectFunction, $Object2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import {$LongComparator} from "it.unimi.dsi.fastutil.longs.LongComparator"
import {$LongSortedSet} from "it.unimi.dsi.fastutil.longs.LongSortedSet"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$Reference2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import {$Long2ShortFunction} from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import {$Int2ObjectFunction} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$Char2ObjectFunction} from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import {$Object2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Object2FloatFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import {$Byte2ObjectFunction} from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import {$SortedMap, $SortedMap$$Interface} from "java.util.SortedMap"
import {$Reference2ObjectFunction} from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import {$Collection} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Object2CharFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import {$SequencedCollection} from "java.util.SequencedCollection"
import {$Long2DoubleFunction} from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import {$Long2LongFunction, $Long2LongFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import {$Float2LongFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import {$Object2ByteFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import {$Long2ReferenceFunction} from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import {$Byte2LongFunction$$Type} from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$Char2LongFunction$$Type} from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import {$Double2LongFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import {$Float2ObjectFunction} from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import {$Short2LongFunction$$Type} from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import {$SequencedSet} from "java.util.SequencedSet"
import {$Int2LongFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import {$Short2ObjectFunction} from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import {$Object2ReferenceFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import {$Object2ShortFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import {$ObjectSortedSet} from "it.unimi.dsi.fastutil.objects.ObjectSortedSet"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Long2FloatFunction} from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import {$Long2ObjectMap$Entry} from "it.unimi.dsi.fastutil.longs.Long2ObjectMap$Entry"
import {$Object2LongFunction$$Type} from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import {$Double2ObjectFunction} from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import {$Long2ObjectFunction, $Long2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"

export interface $Long2ObjectSortedMap$$Interface<V> extends $Long2ObjectMap$$Interface<(V)>, $SortedMap$$Interface<(long), (V)> {
[index: string | number]: V
get "empty"(): boolean
}

export class $Long2ObjectSortedMap<V> implements $Long2ObjectSortedMap$$Interface {
 "values"(): $Collection
/**
 * 
 * @deprecated
 */
 "entrySet"(): $ObjectSortedSet<($Map$Entry<(long), (V)>)>
 "keySet"(): $LongSortedSet
 "comparator"(): $LongComparator
/**
 * 
 * @deprecated
 */
 "firstKey"(): any
/**
 * 
 * @deprecated
 */
 "subMap"(arg0: long, arg1: long): $Long2ObjectSortedMap<(V)>
/**
 * 
 * @deprecated
 */
 "subMap"(arg0: any, arg1: any): $SortedMap
 "subMap"(arg0: long, arg1: long): $Long2ObjectSortedMap<(V)>
/**
 * 
 * @deprecated
 */
 "headMap"(arg0: any): $SortedMap
 "headMap"(arg0: long): $Long2ObjectSortedMap<(V)>
/**
 * 
 * @deprecated
 */
 "headMap"(arg0: long): $Long2ObjectSortedMap<(V)>
/**
 * 
 * @deprecated
 */
 "tailMap"(arg0: long): $Long2ObjectSortedMap<(V)>
 "tailMap"(arg0: long): $Long2ObjectSortedMap<(V)>
/**
 * 
 * @deprecated
 */
 "tailMap"(arg0: any): $SortedMap
/**
 * 
 * @deprecated
 */
 "lastKey"(): any
 "lastLongKey"(): long
 "firstLongKey"(): long
 "long2ObjectEntrySet"(): $ObjectSortedSet<($Long2ObjectMap$Entry<(V)>)>
/**
 * 
 * @deprecated
 */
 "remove"(arg0: any): V
 "remove"(arg0: long, arg1: any): boolean
 "size"(): integer
/**
 * 
 * @deprecated
 */
 "get"(arg0: any): V
/**
 * 
 * @deprecated
 */
 "put"(arg0: long, arg1: V): V
/**
 * 
 * @deprecated
 */
 "put"(arg0: any, arg1: any): any
 "clear"(): void
 "replace"(arg0: long, arg1: V, arg2: V): boolean
 "replace"(arg0: long, arg1: V): V
 "merge"(arg0: long, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
 "putIfAbsent"(arg0: long, arg1: V): V
 "compute"(arg0: long, arg1: $BiFunction$$Type<(long), (V), (V)>): V
 "forEach"(arg0: $BiConsumer$$Type<(long), (V)>): void
 "containsKey"(arg0: long): boolean
/**
 * 
 * @deprecated
 */
 "containsKey"(arg0: any): boolean
 "computeIfAbsent"(arg0: long, arg1: $Long2ObjectFunction$$Type<(V)>): V
 "computeIfAbsent"(arg0: long, arg1: $LongFunction$$Type<(V)>): V
 "getOrDefault"(arg0: long, arg1: V): V
/**
 * 
 * @deprecated
 */
 "getOrDefault"(arg0: any, arg1: V): V
 "computeIfPresent"(arg0: long, arg1: $BiFunction$$Type<(long), (V), (V)>): V
/**
 * 
 * @deprecated
 */
 "computeIfAbsentPartial"(arg0: long, arg1: $Long2ObjectFunction$$Type<(V)>): V
 "defaultReturnValue"(): V
 "defaultReturnValue"(arg0: V): void
 "reversed"(): $SortedMap<(long), (V)>
 "putFirst"(arg0: long, arg1: V): V
 "putLast"(arg0: long, arg1: V): V
 "remove"(arg0: long): V
 "get"(arg0: long): V
 "put"(arg0: long, arg1: V): V
 "apply"(arg0: long): V
/**
 * 
 * @deprecated
 */
 "compose"<T>(arg0: $Function$$Type<(T), (long)>): $Function<(T), (V)>
 "andThenFloat"(arg0: $Object2FloatFunction$$Type<(V)>): $Long2FloatFunction
 "andThenObject"<T>(arg0: $Object2ObjectFunction$$Type<(V), (T)>): $Long2ObjectFunction<(T)>
 "composeByte"(arg0: $Byte2LongFunction$$Type): $Byte2ObjectFunction<(V)>
 "andThenLong"(arg0: $Object2LongFunction$$Type<(V)>): $Long2LongFunction
 "composeLong"(arg0: $Long2LongFunction$$Type): $Long2ObjectFunction<(V)>
 "andThenChar"(arg0: $Object2CharFunction$$Type<(V)>): $Long2CharFunction
 "andThenDouble"(arg0: $Object2DoubleFunction$$Type<(V)>): $Long2DoubleFunction
 "composeObject"<T>(arg0: $Object2LongFunction$$Type<(T)>): $Object2ObjectFunction<(T), (V)>
 "composeChar"(arg0: $Char2LongFunction$$Type): $Char2ObjectFunction<(V)>
 "composeReference"<T>(arg0: $Reference2LongFunction$$Type<(T)>): $Reference2ObjectFunction<(T), (V)>
 "andThenShort"(arg0: $Object2ShortFunction$$Type<(V)>): $Long2ShortFunction
 "composeShort"(arg0: $Short2LongFunction$$Type): $Short2ObjectFunction<(V)>
 "composeFloat"(arg0: $Float2LongFunction$$Type): $Float2ObjectFunction<(V)>
 "andThenReference"<T>(arg0: $Object2ReferenceFunction$$Type<(V), (T)>): $Long2ReferenceFunction<(T)>
 "composeDouble"(arg0: $Double2LongFunction$$Type): $Double2ObjectFunction<(V)>
 "andThenByte"(arg0: $Object2ByteFunction$$Type<(V)>): $Long2ByteFunction
 "composeInt"(arg0: $Int2LongFunction$$Type): $Int2ObjectFunction<(V)>
 "andThenInt"(arg0: $Object2IntFunction$$Type<(V)>): $Long2IntFunction
 "remove"(arg0: any, arg1: any): boolean
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<K, V>(arg0: $Map$$Type<(long), (V)>): $Map<(long), (V)>
 "isEmpty"(): boolean
 "replace"(arg0: long, arg1: V, arg2: V): boolean
 "replace"(arg0: long, arg1: V): V
 "replaceAll"(arg0: $BiFunction$$Type<(long), (V), (V)>): void
static "of"<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V, arg6: long, arg7: V): $Map<(long), (V)>
static "of"<K, V>(): $Map<(long), (V)>
static "of"<K, V>(arg0: long, arg1: V): $Map<(long), (V)>
static "of"<K, V>(arg0: long, arg1: V, arg2: long, arg3: V): $Map<(long), (V)>
static "of"<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V): $Map<(long), (V)>
static "of"<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V, arg6: long, arg7: V, arg8: long, arg9: V, arg10: long, arg11: V, arg12: long, arg13: V, arg14: long, arg15: V, arg16: long, arg17: V, arg18: long, arg19: V): $Map<(long), (V)>
static "of"<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V, arg6: long, arg7: V, arg8: long, arg9: V, arg10: long, arg11: V, arg12: long, arg13: V, arg14: long, arg15: V, arg16: long, arg17: V): $Map<(long), (V)>
static "of"<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V, arg6: long, arg7: V, arg8: long, arg9: V, arg10: long, arg11: V, arg12: long, arg13: V, arg14: long, arg15: V): $Map<(long), (V)>
static "of"<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V, arg6: long, arg7: V, arg8: long, arg9: V, arg10: long, arg11: V, arg12: long, arg13: V): $Map<(long), (V)>
static "of"<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V, arg6: long, arg7: V, arg8: long, arg9: V, arg10: long, arg11: V): $Map<(long), (V)>
static "of"<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V, arg6: long, arg7: V, arg8: long, arg9: V): $Map<(long), (V)>
 "merge"(arg0: long, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
 "putAll"(arg0: $Map$$Type<(long), (V)>): void
 "putIfAbsent"(arg0: long, arg1: V): V
 "compute"(arg0: long, arg1: $BiFunction$$Type<(long), (V), (V)>): V
static "entry"<K, V>(arg0: long, arg1: V): $Map$Entry<(long), (V)>
 "computeIfAbsent"(arg0: long, arg1: $Function$$Type<(long), (V)>): V
 "containsValue"(arg0: any): boolean
 "computeIfPresent"(arg0: long, arg1: $BiFunction$$Type<(long), (V), (V)>): V
static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(long), (V)>)[]): $Map<(long), (V)>
 "sequencedKeySet"(): $SequencedSet<(long)>
 "sequencedValues"(): $SequencedCollection<(V)>
 "sequencedEntrySet"(): $SequencedSet<($Map$Entry<(long), (V)>)>
 "firstEntry"(): $Map$Entry<(long), (V)>
 "lastEntry"(): $Map$Entry<(long), (V)>
 "pollFirstEntry"(): $Map$Entry<(long), (V)>
 "pollLastEntry"(): $Map$Entry<(long), (V)>
 "apply"(arg0: long): V
static "identity"<T>(): $Function<(long), (long)>
 "andThen"<V>(arg0: $Function$$Type<(V), (V)>): $Function<(long), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Long2ObjectSortedMap$$Type<V> = ($Long2ObjectSortedMap<(V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Long2ObjectSortedMap$$Original<V> = $Long2ObjectSortedMap<(V)>;}
