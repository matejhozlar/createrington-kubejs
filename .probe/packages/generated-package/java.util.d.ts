declare module "java.util.PrimitiveIterator$OfLong" {
import {$LongConsumer, $LongConsumer$$Type} from "java.util.function.LongConsumer"
import {$PrimitiveIterator$$Interface} from "java.util.PrimitiveIterator"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $PrimitiveIterator$OfLong$$Interface extends $PrimitiveIterator$$Interface<(long), ($LongConsumer)> {
}

export class $PrimitiveIterator$OfLong implements $PrimitiveIterator$OfLong$$Interface {
 "forEachRemaining"(arg0: any): void
 "forEachRemaining"(arg0: $LongConsumer$$Type): void
 "forEachRemaining"(arg0: $Consumer$$Type<(long)>): void
 "next"(): any
 "nextLong"(): long
 "remove"(): void
 "hasNext"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrimitiveIterator$OfLong$$Type = ($PrimitiveIterator$OfLong);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PrimitiveIterator$OfLong$$Original = $PrimitiveIterator$OfLong;}
declare module "java.util.OptionalDouble" {
import {$DoubleConsumer$$Type} from "java.util.function.DoubleConsumer"
import {$DoubleSupplier$$Type} from "java.util.function.DoubleSupplier"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Throwable} from "java.lang.Throwable"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$DoubleStream} from "java.util.stream.DoubleStream"

export class $OptionalDouble {
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public "stream"(): $DoubleStream
public static "of"(arg0: double): $OptionalDouble
public static "empty"(): $OptionalDouble
public "isPresent"(): boolean
public "orElse"(arg0: double): double
public "orElseThrow"<X extends $Throwable>(arg0: $Supplier$$Type<(X)>): double
public "orElseThrow"(): double
public "ifPresent"(arg0: $DoubleConsumer$$Type): void
public "ifPresentOrElse"(arg0: $DoubleConsumer$$Type, arg1: $Runnable$$Type): void
public "orElseGet"(arg0: $DoubleSupplier$$Type): double
public "getAsDouble"(): double
get "present"(): boolean
get "asDouble"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionalDouble$$Type = ($OptionalDouble);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OptionalDouble$$Original = $OptionalDouble;}
declare module "java.util.Collections$UnmodifiableMap" {
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$Collection} from "java.util.Collection"
import {$Map, $Map$$Type, $Map$$Interface} from "java.util.Map"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Function$$Type} from "java.util.function.Function"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set} from "java.util.Set"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export class $Collections$UnmodifiableMap<K, V> implements $Map$$Interface<(K), (V)>, $Serializable$$Interface {
public "remove"(arg0: any, arg1: any): boolean
public "remove"(arg0: any): V
public "size"(): integer
public "get"(arg0: any): V
public "put"(arg0: K, arg1: V): V
public "equals"(arg0: any): boolean
public "values"(): $Collection<(V)>
public "hashCode"(): integer
public static "copyOf"<K, V>(arg0: $Map$$Type<(K), (V)>): $Map<(K), (V)>
public "clear"(): void
public "isEmpty"(): boolean
public "replace"(arg0: K, arg1: V, arg2: V): boolean
public "replace"(arg0: K, arg1: V): V
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
public "merge"(arg0: K, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
public "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
public "putAll"(arg0: $Map$$Type<(K), (V)>): void
public "putIfAbsent"(arg0: K, arg1: V): V
public "compute"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public "forEach"(arg0: $BiConsumer$$Type<(K), (V)>): void
public "containsKey"(arg0: any): boolean
public "computeIfAbsent"(arg0: K, arg1: $Function$$Type<(K), (V)>): V
public "keySet"(): $Set<(K)>
public "containsValue"(arg0: any): boolean
public "getOrDefault"(arg0: any, arg1: V): V
public "computeIfPresent"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(K), (V)>)[]): $Map<(K), (V)>
[index: string | number]: V
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Collections$UnmodifiableMap$$Type<K, V> = ($Collections$UnmodifiableMap<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Collections$UnmodifiableMap$$Original<K, V> = $Collections$UnmodifiableMap<(K), (V)>;}
declare module "java.util.Stack" {
import {$Collection$$Type} from "java.util.Collection"
import {$SequencedCollection} from "java.util.SequencedCollection"
import {$List} from "java.util.List"
import {$Vector} from "java.util.Vector"

export class $Stack<E> extends $Vector<(E)> {
constructor()

public "empty"(): boolean
public "peek"(): E
public "search"(arg0: any): integer
public "push"(arg0: E): E
public "pop"(): E
public static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public "reversed"(): $SequencedCollection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Stack$$Type<E> = ($Stack<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Stack$$Original<E> = $Stack<(E)>;}
declare module "java.util.SequencedCollection" {
import {$Iterator} from "java.util.Iterator"
import {$Collection$$Type, $Collection$$Interface} from "java.util.Collection"
import {$Spliterator} from "java.util.Spliterator"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Stream} from "java.util.stream.Stream"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$IntFunction$$Type} from "java.util.function.IntFunction"

export interface $SequencedCollection$$Interface<E> extends $Collection$$Interface<(E)> {
[Symbol.iterator](): IterableIterator<E>;
get "first"(): E
get "last"(): E
get "empty"(): boolean
}

export class $SequencedCollection<E> implements $SequencedCollection$$Interface {
 "getFirst"(): E
 "getLast"(): E
 "addFirst"(arg0: E): void
 "addLast"(arg0: E): void
 "removeFirst"(): E
 "removeLast"(): E
 "reversed"(): $SequencedCollection<(E)>
 "remove"(arg0: any): boolean
 "size"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "add"(arg0: E): boolean
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "toArray"(): (any)[]
 "iterator"(): $Iterator<(E)>
 "stream"(): $Stream<(E)>
 "contains"(arg0: any): boolean
 "spliterator"(): $Spliterator<(E)>
 "addAll"(arg0: $Collection$$Type<(E)>): boolean
 "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
 "removeAll"(arg0: $Collection$$Type<(never)>): boolean
 "retainAll"(arg0: $Collection$$Type<(never)>): boolean
 "containsAll"(arg0: $Collection$$Type<(never)>): boolean
 "parallelStream"(): $Stream<(E)>
 "forEach"(arg0: $Consumer$$Type<(E)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SequencedCollection$$Type<E> = ($SequencedCollection<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SequencedCollection$$Original<E> = $SequencedCollection<(E)>;}
declare module "java.util.Spliterator" {
import {$Comparator} from "java.util.Comparator"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $Spliterator$$Interface<T> {
get "exactSizeIfKnown"(): long
get "comparator"(): $Comparator<(T)>
}

export class $Spliterator<T> implements $Spliterator$$Interface {
static readonly "NONNULL": integer
static readonly "SUBSIZED": integer
static readonly "ORDERED": integer
static readonly "DISTINCT": integer
static readonly "SIZED": integer
static readonly "IMMUTABLE": integer
static readonly "CONCURRENT": integer
static readonly "SORTED": integer

 "forEachRemaining"(arg0: $Consumer$$Type<(T)>): void
 "characteristics"(): integer
 "trySplit"(): $Spliterator<(T)>
 "tryAdvance"(arg0: $Consumer$$Type<(T)>): boolean
 "estimateSize"(): long
 "getExactSizeIfKnown"(): long
 "hasCharacteristics"(arg0: integer): boolean
 "getComparator"(): $Comparator<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Spliterator$$Type<T> = ($Spliterator<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Spliterator$$Original<T> = $Spliterator<(T)>;}
declare module "java.util.Deque" {
import {$Iterator} from "java.util.Iterator"
import {$Queue$$Interface} from "java.util.Queue"
import {$Collection$$Type} from "java.util.Collection"
import {$SequencedCollection$$Interface} from "java.util.SequencedCollection"
import {$Spliterator} from "java.util.Spliterator"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Stream} from "java.util.stream.Stream"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$IntFunction$$Type} from "java.util.function.IntFunction"

export interface $Deque$$Interface<E> extends $Queue$$Interface<(E)>, $SequencedCollection$$Interface<(E)> {
[Symbol.iterator](): IterableIterator<E>;
get "first"(): E
get "last"(): E
get "empty"(): boolean
}

export class $Deque<E> implements $Deque$$Interface {
 "remove"(arg0: any): boolean
 "remove"(): E
 "size"(): integer
 "add"(arg0: E): boolean
 "iterator"(): $Iterator<(E)>
 "contains"(arg0: any): boolean
 "addAll"(arg0: $Collection$$Type<(E)>): boolean
 "peek"(): E
 "getFirst"(): E
 "getLast"(): E
 "element"(): E
 "addFirst"(arg0: E): void
 "addLast"(arg0: E): void
 "removeFirst"(): E
 "removeLast"(): E
 "reversed"(): $Deque<(E)>
 "poll"(): E
 "push"(arg0: E): void
 "pop"(): E
 "pollFirst"(): E
 "pollLast"(): E
 "offerLast"(arg0: E): boolean
 "peekFirst"(): E
 "removeFirstOccurrence"(arg0: any): boolean
 "offerFirst"(arg0: E): boolean
 "peekLast"(): E
 "removeLastOccurrence"(arg0: any): boolean
 "offer"(arg0: E): boolean
 "descendingIterator"(): $Iterator<(E)>
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "toArray"(): (any)[]
 "stream"(): $Stream<(E)>
 "spliterator"(): $Spliterator<(E)>
 "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
 "removeAll"(arg0: $Collection$$Type<(never)>): boolean
 "retainAll"(arg0: $Collection$$Type<(never)>): boolean
 "containsAll"(arg0: $Collection$$Type<(never)>): boolean
 "parallelStream"(): $Stream<(E)>
 "forEach"(arg0: $Consumer$$Type<(E)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Deque$$Type<E> = ($Deque<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Deque$$Original<E> = $Deque<(E)>;}
declare module "java.util.Locale$FilteringMode" {
import {$Enum} from "java.lang.Enum"

export class $Locale$FilteringMode extends $Enum<($Locale$FilteringMode)> {
static readonly "IGNORE_EXTENDED_RANGES": $Locale$FilteringMode
static readonly "MAP_EXTENDED_RANGES": $Locale$FilteringMode
static readonly "AUTOSELECT_FILTERING": $Locale$FilteringMode
static readonly "REJECT_EXTENDED_RANGES": $Locale$FilteringMode
static readonly "EXTENDED_FILTERING": $Locale$FilteringMode

public static "values"(): ($Locale$FilteringMode)[]
public static "valueOf"(arg0: StringJS): $Locale$FilteringMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Locale$FilteringMode$$Type = (("autoselect_filtering") | ("extended_filtering") | ("ignore_extended_ranges") | ("map_extended_ranges") | ("reject_extended_ranges"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Locale$FilteringMode$$Original = $Locale$FilteringMode;}
declare module "java.util.Locale$Category" {
import {$Enum} from "java.lang.Enum"

export class $Locale$Category extends $Enum<($Locale$Category)> {
static readonly "DISPLAY": $Locale$Category
static readonly "FORMAT": $Locale$Category

public static "values"(): ($Locale$Category)[]
public static "valueOf"(arg0: StringJS): $Locale$Category
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Locale$Category$$Type = (("display") | ("format"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Locale$Category$$Original = $Locale$Category;}
declare module "java.util.EnumSet" {
import {$Iterator} from "java.util.Iterator"
import {$Collection$$Type} from "java.util.Collection"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Cloneable$$Interface} from "java.lang.Cloneable"
import {$Set} from "java.util.Set"
import {$Class$$Type} from "java.lang.Class"
import {$AbstractSet} from "java.util.AbstractSet"

export class $EnumSet<E extends $Enum<(object)>> extends $AbstractSet<(E)> implements $Cloneable$$Interface, $Serializable$$Interface {
public "clone"(): $EnumSet<(E)>
public static "copyOf"<E extends $Enum<(object)>>(arg0: $Collection$$Type<(E)>): $EnumSet<(E)>
public static "copyOf"<E extends $Enum<(object)>>(arg0: $EnumSet$$Type<(E)>): $EnumSet<(E)>
public static "of"<E extends $Enum<(object)>>(arg0: E, arg1: E, arg2: E): $EnumSet<(E)>
public static "of"<E extends $Enum<(object)>>(arg0: E, arg1: E): $EnumSet<(E)>
public static "of"<E extends $Enum<(object)>>(arg0: E, arg1: E, arg2: E, arg3: E): $EnumSet<(E)>
public static "of"<E extends $Enum<(object)>>(arg0: E, ...arg1: (E)[]): $EnumSet<(E)>
public static "of"<E extends $Enum<(object)>>(arg0: E): $EnumSet<(E)>
public static "of"<E extends $Enum<(object)>>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $EnumSet<(E)>
public static "noneOf"<E extends $Enum<(object)>>(arg0: $Class$$Type<(E)>): $EnumSet<(E)>
public static "range"<E extends $Enum<(object)>>(arg0: E, arg1: E): $EnumSet<(E)>
public static "allOf"<E extends $Enum<(object)>>(arg0: $Class$$Type<(E)>): $EnumSet<(E)>
public static "complementOf"<E extends $Enum<(object)>>(arg0: $EnumSet$$Type<(E)>): $EnumSet<(E)>
public "remove"(arg0: any): boolean
public "size"(): integer
public "clear"(): void
public "isEmpty"(): boolean
public "add"(arg0: E): boolean
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public "iterator"(): $Iterator<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $Set<(E)>
public static "of"<E>(): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $Set<(E)>
public static "of"<E>(...arg0: (E)[]): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $Set<(E)>
public static "of"<E>(arg0: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E): $Set<(E)>
public "contains"(arg0: any): boolean
public "addAll"(arg0: $Collection$$Type<(E)>): boolean
public "retainAll"(arg0: $Collection$$Type<(never)>): boolean
public "containsAll"(arg0: $Collection$$Type<(never)>): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumSet$$Type<E> = ($EnumSet<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnumSet$$Original<E> = $EnumSet<(E)>;}
declare module "java.util.Hashtable" {
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$Collection} from "java.util.Collection"
import {$Map, $Map$$Type, $Map$$Interface} from "java.util.Map"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Function$$Type} from "java.util.function.Function"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Cloneable$$Interface} from "java.lang.Cloneable"
import {$Set} from "java.util.Set"
import {$Dictionary} from "java.util.Dictionary"
import {$Enumeration} from "java.util.Enumeration"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export class $Hashtable<K, V> extends $Dictionary<(K), (V)> implements $Map$$Interface<(K), (V)>, $Cloneable$$Interface, $Serializable$$Interface {
constructor(arg0: $Map$$Type<(K), (V)>)
constructor()
constructor(arg0: integer)
constructor(arg0: integer, arg1: float)

public "remove"(arg0: any, arg1: any): boolean
public "remove"(arg0: any): V
public "size"(): integer
public "get"(arg0: any): V
public "put"(arg0: K, arg1: V): V
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "values"(): $Collection<(V)>
public "hashCode"(): integer
public "clone"(): any
public "clear"(): void
public "isEmpty"(): boolean
public "replace"(arg0: K, arg1: V, arg2: V): boolean
public "replace"(arg0: K, arg1: V): V
public "replaceAll"(arg0: $BiFunction$$Type<(K), (V), (V)>): void
public "contains"(arg0: any): boolean
public "elements"(): $Enumeration<(V)>
public "merge"(arg0: K, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
public "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
public "putAll"(arg0: $Map$$Type<(K), (V)>): void
public "putIfAbsent"(arg0: K, arg1: V): V
public "compute"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
public "forEach"(arg0: $BiConsumer$$Type<(K), (V)>): void
public "containsKey"(arg0: any): boolean
public "computeIfAbsent"(arg0: K, arg1: $Function$$Type<(K), (V)>): V
public "keys"(): $Enumeration<(K)>
public "keySet"(): $Set<(K)>
public "containsValue"(arg0: any): boolean
public "getOrDefault"(arg0: any, arg1: V): V
public "computeIfPresent"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
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
[index: string | number]: V
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Hashtable$$Type<K, V> = ($Hashtable<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Hashtable$$Original<K, V> = $Hashtable<(K), (V)>;}
declare module "java.util.PrimitiveIterator$OfInt" {
import {$IntConsumer, $IntConsumer$$Type} from "java.util.function.IntConsumer"
import {$PrimitiveIterator$$Interface} from "java.util.PrimitiveIterator"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $PrimitiveIterator$OfInt$$Interface extends $PrimitiveIterator$$Interface<(integer), ($IntConsumer)> {
}

export class $PrimitiveIterator$OfInt implements $PrimitiveIterator$OfInt$$Interface {
 "forEachRemaining"(arg0: any): void
 "forEachRemaining"(arg0: $IntConsumer$$Type): void
 "forEachRemaining"(arg0: $Consumer$$Type<(integer)>): void
 "next"(): any
 "nextInt"(): integer
 "remove"(): void
 "hasNext"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrimitiveIterator$OfInt$$Type = ($PrimitiveIterator$OfInt);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PrimitiveIterator$OfInt$$Original = $PrimitiveIterator$OfInt;}
declare module "java.util.Map$Entry" {
import {$Comparable} from "java.lang.Comparable"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"

export interface $Map$Entry$$Interface<K, V> {
get "value"(): V
get "key"(): K
set "value"(value: V)
}

export class $Map$Entry<K, V> implements $Map$Entry$$Interface {
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
export type $Map$Entry$$Type<K, V> = ($Map$Entry<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Map$Entry$$Original<K, V> = $Map$Entry<(K), (V)>;}
declare module "java.util.Iterator" {
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $Iterator$$Interface<E> {
}

export class $Iterator<E> implements $Iterator$$Interface {
 "remove"(): void
 "forEachRemaining"(arg0: $Consumer$$Type<(E)>): void
 "hasNext"(): boolean
 "next"(): E
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Iterator$$Type<E> = ($Iterator<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Iterator$$Original<E> = $Iterator<(E)>;}
declare module "java.util.SequencedSet" {
import {$Iterator} from "java.util.Iterator"
import {$Collection$$Type} from "java.util.Collection"
import {$SequencedCollection$$Interface} from "java.util.SequencedCollection"
import {$Spliterator} from "java.util.Spliterator"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Set, $Set$$Interface} from "java.util.Set"
import {$Stream} from "java.util.stream.Stream"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$IntFunction$$Type} from "java.util.function.IntFunction"

export interface $SequencedSet$$Interface<E> extends $SequencedCollection$$Interface<(E)>, $Set$$Interface<(E)> {
[Symbol.iterator](): IterableIterator<E>;
get "first"(): E
get "last"(): E
get "empty"(): boolean
}

export class $SequencedSet<E> implements $SequencedSet$$Interface {
 "reversed"(): $SequencedSet<(E)>
 "getFirst"(): E
 "getLast"(): E
 "addFirst"(arg0: E): void
 "addLast"(arg0: E): void
 "removeFirst"(): E
 "removeLast"(): E
 "remove"(arg0: any): boolean
 "size"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $Set<(E)>
 "clear"(): void
 "isEmpty"(): boolean
 "add"(arg0: E): boolean
 "toArray"(): (any)[]
 "toArray"<T>(arg0: (T)[]): (T)[]
 "iterator"(): $Iterator<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $Set<(E)>
static "of"<E>(): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $Set<(E)>
static "of"<E>(...arg0: (E)[]): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E): $Set<(E)>
static "of"<E>(arg0: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E): $Set<(E)>
 "contains"(arg0: any): boolean
 "spliterator"(): $Spliterator<(E)>
 "addAll"(arg0: $Collection$$Type<(E)>): boolean
 "removeAll"(arg0: $Collection$$Type<(never)>): boolean
 "retainAll"(arg0: $Collection$$Type<(never)>): boolean
 "containsAll"(arg0: $Collection$$Type<(never)>): boolean
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "stream"(): $Stream<(E)>
 "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
 "parallelStream"(): $Stream<(E)>
 "forEach"(arg0: $Consumer$$Type<(E)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SequencedSet$$Type<E> = ($SequencedSet<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SequencedSet$$Original<E> = $SequencedSet<(E)>;}
declare module "java.util.SortedSet" {
import {$Iterator} from "java.util.Iterator"
import {$Collection$$Type} from "java.util.Collection"
import {$SequencedSet, $SequencedSet$$Interface} from "java.util.SequencedSet"
import {$Comparator} from "java.util.Comparator"
import {$Spliterator} from "java.util.Spliterator"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Set, $Set$$Interface} from "java.util.Set"
import {$Stream} from "java.util.stream.Stream"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$IntFunction$$Type} from "java.util.function.IntFunction"

export interface $SortedSet$$Interface<E> extends $Set$$Interface<(E)>, $SequencedSet$$Interface<(E)> {
[Symbol.iterator](): IterableIterator<E>;
get "empty"(): boolean
}

export class $SortedSet<E> implements $SortedSet$$Interface {
 "last"(): E
 "spliterator"(): $Spliterator<(E)>
 "first"(): E
 "getFirst"(): E
 "getLast"(): E
 "addFirst"(arg0: E): void
 "addLast"(arg0: E): void
 "removeFirst"(): E
 "removeLast"(): E
 "reversed"(): $SequencedSet
 "comparator"(): $Comparator<(E)>
 "subSet"(arg0: E, arg1: E): $SortedSet<(E)>
 "headSet"(arg0: E): $SortedSet<(E)>
 "tailSet"(arg0: E): $SortedSet<(E)>
 "remove"(arg0: any): boolean
 "size"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $Set<(E)>
 "clear"(): void
 "isEmpty"(): boolean
 "add"(arg0: E): boolean
 "toArray"(): (any)[]
 "toArray"<T>(arg0: (T)[]): (T)[]
 "iterator"(): $Iterator<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $Set<(E)>
static "of"<E>(): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $Set<(E)>
static "of"<E>(...arg0: (E)[]): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E): $Set<(E)>
static "of"<E>(arg0: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E): $Set<(E)>
 "contains"(arg0: any): boolean
 "addAll"(arg0: $Collection$$Type<(E)>): boolean
 "removeAll"(arg0: $Collection$$Type<(never)>): boolean
 "retainAll"(arg0: $Collection$$Type<(never)>): boolean
 "containsAll"(arg0: $Collection$$Type<(never)>): boolean
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "stream"(): $Stream<(E)>
 "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
 "parallelStream"(): $Stream<(E)>
 "forEach"(arg0: $Consumer$$Type<(E)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SortedSet$$Type<E> = ($SortedSet<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SortedSet$$Original<E> = $SortedSet<(E)>;}
declare module "java.util.Comparator" {
import {$ToIntFunction$$Type} from "java.util.function.ToIntFunction"
import {$ToLongFunction$$Type} from "java.util.function.ToLongFunction"
import {$ToDoubleFunction$$Type} from "java.util.function.ToDoubleFunction"
import {$Comparable} from "java.lang.Comparable"
import {$Function$$Type} from "java.util.function.Function"

export interface $Comparator$$Interface<T> {
}

export class $Comparator<T> implements $Comparator$$Interface {
 "equals"(arg0: any): boolean
 "compare"(arg0: T, arg1: T): integer
 "reversed"(): $Comparator<(T)>
static "reverseOrder"<T extends $Comparable<(object)>>(): $Comparator<(T)>
static "comparing"<T, U extends $Comparable<(object)>>(arg0: $Function$$Type<(T), (U)>): $Comparator<(T)>
static "comparing"<T, U>(arg0: $Function$$Type<(T), (U)>, arg1: $Comparator$$Type<(U)>): $Comparator<(T)>
 "thenComparing"<U>(arg0: $Function$$Type<(T), (U)>, arg1: $Comparator$$Type<(U)>): $Comparator<(T)>
 "thenComparing"(arg0: $Comparator$$Type<(T)>): $Comparator<(T)>
 "thenComparing"<U extends $Comparable<(object)>>(arg0: $Function$$Type<(T), (U)>): $Comparator<(T)>
static "comparingInt"<T>(arg0: $ToIntFunction$$Type<(T)>): $Comparator<(T)>
static "comparingLong"<T>(arg0: $ToLongFunction$$Type<(T)>): $Comparator<(T)>
static "comparingDouble"<T>(arg0: $ToDoubleFunction$$Type<(T)>): $Comparator<(T)>
 "thenComparingInt"(arg0: $ToIntFunction$$Type<(T)>): $Comparator<(T)>
 "thenComparingLong"(arg0: $ToLongFunction$$Type<(T)>): $Comparator<(T)>
 "thenComparingDouble"(arg0: $ToDoubleFunction$$Type<(T)>): $Comparator<(T)>
static "naturalOrder"<T extends $Comparable<(object)>>(): $Comparator<(T)>
static "nullsFirst"<T>(arg0: $Comparator$$Type<(T)>): $Comparator<(T)>
static "nullsLast"<T>(arg0: $Comparator$$Type<(T)>): $Comparator<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Comparator$$Type<T> = ($Comparator<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Comparator$$Original<T> = $Comparator<(T)>;}
declare module "java.util.Queue" {
import {$Iterator} from "java.util.Iterator"
import {$Collection$$Type, $Collection$$Interface} from "java.util.Collection"
import {$Spliterator} from "java.util.Spliterator"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Stream} from "java.util.stream.Stream"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$IntFunction$$Type} from "java.util.function.IntFunction"

export interface $Queue$$Interface<E> extends $Collection$$Interface<(E)> {
[Symbol.iterator](): IterableIterator<E>;
get "empty"(): boolean
}

export class $Queue<E> implements $Queue$$Interface {
 "remove"(): E
 "add"(arg0: E): boolean
 "peek"(): E
 "element"(): E
 "poll"(): E
 "offer"(arg0: E): boolean
 "remove"(arg0: any): boolean
 "size"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "toArray"(): (any)[]
 "iterator"(): $Iterator<(E)>
 "stream"(): $Stream<(E)>
 "contains"(arg0: any): boolean
 "spliterator"(): $Spliterator<(E)>
 "addAll"(arg0: $Collection$$Type<(E)>): boolean
 "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
 "removeAll"(arg0: $Collection$$Type<(never)>): boolean
 "retainAll"(arg0: $Collection$$Type<(never)>): boolean
 "containsAll"(arg0: $Collection$$Type<(never)>): boolean
 "parallelStream"(): $Stream<(E)>
 "forEach"(arg0: $Consumer$$Type<(E)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Queue$$Type<E> = ($Queue<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Queue$$Original<E> = $Queue<(E)>;}
declare module "java.util.Date" {
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Cloneable$$Interface} from "java.lang.Cloneable"
import {$Instant, $Instant$$Type} from "java.time.Instant"

export class $Date implements $Serializable$$Interface, $Cloneable$$Interface, $Comparable$$Interface<($Date)> {
/**
 * 
 * @deprecated
 */
constructor(arg0: StringJS)
/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer)
/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer)
constructor()
constructor(arg0: long)
/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: integer, arg2: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "clone"(): any
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $Date$$Type): integer
public static "from"(arg0: $Instant$$Type): $Date
/**
 * 
 * @deprecated
 */
public static "parse"(arg0: StringJS): long
public "before"(arg0: $Date$$Type): boolean
public "after"(arg0: $Date$$Type): boolean
public "getTime"(): long
public "toInstant"(): $Instant
/**
 * 
 * @deprecated
 */
public static "UTC"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): long
/**
 * 
 * @deprecated
 */
public "getYear"(): integer
public "setTime"(arg0: long): void
/**
 * 
 * @deprecated
 */
public "getSeconds"(): integer
/**
 * 
 * @deprecated
 */
public "getMonth"(): integer
/**
 * 
 * @deprecated
 */
public "setDate"(arg0: integer): void
/**
 * 
 * @deprecated
 */
public "setMonth"(arg0: integer): void
/**
 * 
 * @deprecated
 */
public "getHours"(): integer
/**
 * 
 * @deprecated
 */
public "setHours"(arg0: integer): void
/**
 * 
 * @deprecated
 */
public "getMinutes"(): integer
/**
 * 
 * @deprecated
 */
public "setMinutes"(arg0: integer): void
/**
 * 
 * @deprecated
 */
public "setSeconds"(arg0: integer): void
/**
 * 
 * @deprecated
 */
public "setYear"(arg0: integer): void
/**
 * 
 * @deprecated
 */
public "getDate"(): integer
/**
 * 
 * @deprecated
 */
public "getDay"(): integer
/**
 * 
 * @deprecated
 */
public "toLocaleString"(): StringJS
/**
 * 
 * @deprecated
 */
public "toGMTString"(): StringJS
/**
 * 
 * @deprecated
 */
public "getTimezoneOffset"(): integer
get "time"(): long
get "year"(): integer
set "time"(value: long)
get "seconds"(): integer
get "month"(): integer
set "date"(value: integer)
set "month"(value: integer)
get "hours"(): integer
set "hours"(value: integer)
get "minutes"(): integer
set "minutes"(value: integer)
set "seconds"(value: integer)
set "year"(value: integer)
get "date"(): integer
get "day"(): integer
get "timezoneOffset"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Date$$Type = ($Date);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Date$$Original = $Date;}
declare module "java.util.List" {
import {$Iterator} from "java.util.Iterator"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$ListIterator} from "java.util.ListIterator"
import {$Collection$$Type} from "java.util.Collection"
import {$Comparator$$Type} from "java.util.Comparator"
import {$SequencedCollection, $SequencedCollection$$Interface} from "java.util.SequencedCollection"
import {$Spliterator} from "java.util.Spliterator"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Stream} from "java.util.stream.Stream"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$IntFunction$$Type} from "java.util.function.IntFunction"

export interface $List$$Interface<E> extends $SequencedCollection$$Interface<(E)> {
[Symbol.iterator](): IterableIterator<E>;
[index: number]: E
get "empty"(): boolean
get "first"(): E
get "last"(): E
}

export class $List<E> implements $List$$Interface {
 "remove"(arg0: any): boolean
 "remove"(arg0: integer): E
 "size"(): integer
 "get"(arg0: integer): E
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $List<(E)>
 "indexOf"(arg0: any): integer
 "clear"(): void
 "lastIndexOf"(arg0: any): integer
 "isEmpty"(): boolean
 "replaceAll"(arg0: $UnaryOperator$$Type<(E)>): void
 "add"(arg0: E): boolean
 "add"(arg0: integer, arg1: E): void
 "subList"(arg0: integer, arg1: integer): $List<(E)>
 "toArray"(): (any)[]
 "toArray"<T>(arg0: (T)[]): (T)[]
 "iterator"(): $Iterator<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
static "of"<E>(): $List<(E)>
static "of"<E>(arg0: E): $List<(E)>
static "of"<E>(arg0: E, arg1: E): $List<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
static "of"<E>(...arg0: (E)[]): $List<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
 "contains"(arg0: any): boolean
 "spliterator"(): $Spliterator<(E)>
 "addAll"(arg0: $Collection$$Type<(E)>): boolean
 "addAll"(arg0: integer, arg1: $Collection$$Type<(E)>): boolean
 "set"(arg0: integer, arg1: E): E
 "sort"(arg0: $Comparator$$Type<(E)>): void
 "getFirst"(): E
 "getLast"(): E
 "addFirst"(arg0: E): void
 "addLast"(arg0: E): void
 "removeFirst"(): E
 "removeLast"(): E
 "removeAll"(arg0: $Collection$$Type<(never)>): boolean
 "retainAll"(arg0: $Collection$$Type<(never)>): boolean
 "listIterator"(): $ListIterator<(E)>
 "listIterator"(arg0: integer): $ListIterator<(E)>
 "reversed"(): $SequencedCollection
 "containsAll"(arg0: $Collection$$Type<(never)>): boolean
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "stream"(): $Stream<(E)>
 "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
 "parallelStream"(): $Stream<(E)>
 "forEach"(arg0: $Consumer$$Type<(E)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $List$$Type<E> = ((E)[]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $List$$Original<E> = $List<(E)>;}
declare module "java.util.Properties" {
import {$Hashtable} from "java.util.Hashtable"
import {$Collection} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Charset$$Type} from "java.nio.charset.Charset"
import {$Reader$$Type} from "java.io.Reader"
import {$PrintWriter$$Type} from "java.io.PrintWriter"
import {$OutputStream$$Type} from "java.io.OutputStream"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$Writer$$Type} from "java.io.Writer"
import {$PrintStream$$Type} from "java.io.PrintStream"
import {$Function$$Type} from "java.util.function.Function"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set} from "java.util.Set"
import {$InputStream$$Type} from "java.io.InputStream"
import {$Enumeration} from "java.util.Enumeration"

export class $Properties extends $Hashtable<(any), (any)> {
constructor(arg0: $Properties$$Type)
constructor(arg0: integer)
constructor()

public "remove"(arg0: any): any
public "remove"(arg0: any, arg1: any): boolean
public "size"(): integer
public "get"(arg0: any): any
public "put"(arg0: any, arg1: any): any
public "getProperty"(arg0: StringJS): StringJS
public "getProperty"(arg0: StringJS, arg1: StringJS): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "values"(): $Collection<(any)>
public "hashCode"(): integer
public "clone"(): any
public "load"(arg0: $Reader$$Type): void
public "load"(arg0: $InputStream$$Type): void
public "store"(arg0: $OutputStream$$Type, arg1: StringJS): void
public "store"(arg0: $Writer$$Type, arg1: StringJS): void
public "clear"(): void
public "isEmpty"(): boolean
public "replace"(arg0: any, arg1: any): any
public "replace"(arg0: any, arg1: any, arg2: any): boolean
public "replaceAll"(arg0: $BiFunction$$Type<(any), (any), (never)>): void
public "contains"(arg0: any): boolean
public "list"(arg0: $PrintStream$$Type): void
public "list"(arg0: $PrintWriter$$Type): void
public "elements"(): $Enumeration<(any)>
public "merge"(arg0: any, arg1: any, arg2: $BiFunction$$Type<(any), (any), (never)>): any
public "entrySet"(): $Set<($Map$Entry<(any), (any)>)>
public "putAll"(arg0: $Map$$Type<(never), (never)>): void
public "putIfAbsent"(arg0: any, arg1: any): any
public "compute"(arg0: any, arg1: $BiFunction$$Type<(any), (any), (never)>): any
public "setProperty"(arg0: StringJS, arg1: StringJS): any
public "forEach"(arg0: $BiConsumer$$Type<(any), (any)>): void
public "containsKey"(arg0: any): boolean
public "computeIfAbsent"(arg0: any, arg1: $Function$$Type<(any), (never)>): any
public "storeToXML"(arg0: $OutputStream$$Type, arg1: StringJS, arg2: StringJS): void
public "storeToXML"(arg0: $OutputStream$$Type, arg1: StringJS, arg2: $Charset$$Type): void
public "storeToXML"(arg0: $OutputStream$$Type, arg1: StringJS): void
public "keys"(): $Enumeration<(any)>
public "keySet"(): $Set<(any)>
public "containsValue"(arg0: any): boolean
public "getOrDefault"(arg0: any, arg1: any): any
public "computeIfPresent"(arg0: any, arg1: $BiFunction$$Type<(any), (any), (never)>): any
/**
 * 
 * @deprecated
 */
public "save"(arg0: $OutputStream$$Type, arg1: StringJS): void
public "loadFromXML"(arg0: $InputStream$$Type): void
public "propertyNames"(): $Enumeration<(never)>
public "stringPropertyNames"(): $Set<(StringJS)>
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
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Properties$$Type = ($Properties);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Properties$$Original = $Properties;}
declare module "java.util.PrimitiveIterator$OfDouble" {
import {$DoubleConsumer, $DoubleConsumer$$Type} from "java.util.function.DoubleConsumer"
import {$PrimitiveIterator$$Interface} from "java.util.PrimitiveIterator"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $PrimitiveIterator$OfDouble$$Interface extends $PrimitiveIterator$$Interface<(double), ($DoubleConsumer)> {
}

export class $PrimitiveIterator$OfDouble implements $PrimitiveIterator$OfDouble$$Interface {
 "forEachRemaining"(arg0: any): void
 "forEachRemaining"(arg0: $DoubleConsumer$$Type): void
 "forEachRemaining"(arg0: $Consumer$$Type<(double)>): void
 "next"(): any
 "nextDouble"(): double
 "remove"(): void
 "hasNext"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrimitiveIterator$OfDouble$$Type = ($PrimitiveIterator$OfDouble);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PrimitiveIterator$OfDouble$$Original = $PrimitiveIterator$OfDouble;}
declare module "java.util.UUID" {
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Serializable$$Interface} from "java.io.Serializable"

export class $UUID implements $Serializable$$Interface, $Comparable$$Interface<($UUID)> {
constructor(arg0: long, arg1: long)

public static "nameUUIDFromBytes"(arg0: (byte)[]): $UUID
public "getLeastSignificantBits"(): long
public "getMostSignificantBits"(): long
public "clockSequence"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "version"(): integer
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $UUID$$Type): integer
public "timestamp"(): long
public "node"(): long
public "variant"(): integer
public static "fromString"(arg0: StringJS): $UUID
public static "randomUUID"(): $UUID
get "leastSignificantBits"(): long
get "mostSignificantBits"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UUID$$Type = (StringJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UUID$$Original = $UUID;}
declare module "java.util.ImmutableCollections$MapN" {
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Function$$Type} from "java.util.function.Function"
import {$ImmutableCollections$AbstractImmutableMap} from "java.util.ImmutableCollections$AbstractImmutableMap"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export class $ImmutableCollections$MapN<K, V> extends $ImmutableCollections$AbstractImmutableMap<(K), (V)> {
public "remove"(arg0: any): V
public "put"(arg0: K, arg1: V): V
public "clear"(): void
public "putAll"(arg0: $Map$$Type<(K), (V)>): void
public "remove"(arg0: any, arg1: any): boolean
public static "copyOf"<K, V>(arg0: $Map$$Type<(K), (V)>): $Map<(K), (V)>
public "replace"(arg0: K, arg1: V, arg2: V): boolean
public "replace"(arg0: K, arg1: V): V
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
public "merge"(arg0: K, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
public "putIfAbsent"(arg0: K, arg1: V): V
public "compute"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public "computeIfAbsent"(arg0: K, arg1: $Function$$Type<(K), (V)>): V
public "getOrDefault"(arg0: any, arg1: V): V
public "computeIfPresent"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(K), (V)>)[]): $Map<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableCollections$MapN$$Type<K, V> = ($ImmutableCollections$MapN<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ImmutableCollections$MapN$$Original<K, V> = $ImmutableCollections$MapN<(K), (V)>;}
declare module "java.util.Map" {
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$Collection} from "java.util.Collection"
import {$Function$$Type} from "java.util.function.Function"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set} from "java.util.Set"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export interface $Map$$Interface<K, V> {
[index: string | number]: V
get "empty"(): boolean
}

export class $Map<K, V> implements $Map$$Interface {
 "remove"(arg0: any, arg1: any): boolean
 "remove"(arg0: any): V
 "size"(): integer
 "get"(arg0: any): V
 "put"(arg0: K, arg1: V): V
 "equals"(arg0: any): boolean
 "values"(): $Collection<(V)>
 "hashCode"(): integer
static "copyOf"<K, V>(arg0: $Map$$Type<(K), (V)>): $Map<(K), (V)>
 "clear"(): void
 "isEmpty"(): boolean
 "replace"(arg0: K, arg1: V, arg2: V): boolean
 "replace"(arg0: K, arg1: V): V
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
 "merge"(arg0: K, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
 "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
 "putAll"(arg0: $Map$$Type<(K), (V)>): void
 "putIfAbsent"(arg0: K, arg1: V): V
 "compute"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
 "forEach"(arg0: $BiConsumer$$Type<(K), (V)>): void
 "containsKey"(arg0: any): boolean
 "computeIfAbsent"(arg0: K, arg1: $Function$$Type<(K), (V)>): V
 "keySet"(): $Set<(K)>
 "containsValue"(arg0: any): boolean
 "getOrDefault"(arg0: any, arg1: V): V
 "computeIfPresent"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(K), (V)>)[]): $Map<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Map$$Type<K, V> = ({[key: string]: V});
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Map$$Original<K, V> = $Map<(K), (V)>;}
declare module "java.util.ImmutableCollections$AbstractImmutableMap" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$AbstractMap} from "java.util.AbstractMap"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export class $ImmutableCollections$AbstractImmutableMap<K, V> extends $AbstractMap<(K), (V)> implements $Serializable$$Interface {
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
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableCollections$AbstractImmutableMap$$Type<K, V> = ($ImmutableCollections$AbstractImmutableMap<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ImmutableCollections$AbstractImmutableMap$$Original<K, V> = $ImmutableCollections$AbstractImmutableMap<(K), (V)>;}
declare module "java.util.Optional" {
import {$Function$$Type} from "java.util.function.Function"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Throwable} from "java.lang.Throwable"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Stream} from "java.util.stream.Stream"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $Optional<T> {
public "get"(): T
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public "map"<U>(arg0: $Function$$Type<(T), (U)>): $Optional<(U)>
public "stream"(): $Stream<(T)>
public static "of"<T>(arg0: T): $Optional<(T)>
public "filter"(arg0: $Predicate$$Type<(T)>): $Optional<(T)>
public static "empty"<T>(): $Optional<(T)>
public "flatMap"<U>(arg0: $Function$$Type<(T), ((U)?)>): $Optional<(U)>
public "isPresent"(): boolean
public "orElse"(arg0: T): T
public "orElseThrow"<X extends $Throwable>(arg0: $Supplier$$Type<(X)>): T
public "orElseThrow"(): T
public static "ofNullable"<T>(arg0: T): $Optional<(T)>
public "ifPresent"(arg0: $Consumer$$Type<(T)>): void
public "ifPresentOrElse"(arg0: $Consumer$$Type<(T)>, arg1: $Runnable$$Type): void
public "or"(arg0: $Supplier$$Type<((T)?)>): $Optional<(T)>
public "orElseGet"(arg0: $Supplier$$Type<(T)>): T
get "present"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Optional$$Type<T> = ($Optional<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Optional$$Original<T> = $Optional<(T)>;}
declare module "java.util.BitSet" {
import {$IntStream} from "java.util.stream.IntStream"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Cloneable$$Interface} from "java.lang.Cloneable"
import {$LongBuffer$$Type} from "java.nio.LongBuffer"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $BitSet implements $Cloneable$$Interface, $Serializable$$Interface {
constructor(arg0: integer)
constructor()

public "size"(): integer
public "get"(arg0: integer): boolean
public "get"(arg0: integer, arg1: integer): $BitSet
public "equals"(arg0: any): boolean
public "length"(): integer
public "toString"(): StringJS
public "hashCode"(): integer
public "clone"(): any
public static "valueOf"(arg0: (long)[]): $BitSet
public static "valueOf"(arg0: (byte)[]): $BitSet
public static "valueOf"(arg0: $LongBuffer$$Type): $BitSet
public static "valueOf"(arg0: $ByteBuffer$$Type): $BitSet
public "clear"(arg0: integer, arg1: integer): void
public "clear"(): void
public "clear"(arg0: integer): void
public "isEmpty"(): boolean
public "stream"(): $IntStream
public "set"(arg0: integer, arg1: boolean): void
public "set"(arg0: integer): void
public "set"(arg0: integer, arg1: integer): void
public "set"(arg0: integer, arg1: integer, arg2: boolean): void
public "flip"(arg0: integer, arg1: integer): void
public "flip"(arg0: integer): void
public "nextClearBit"(arg0: integer): integer
public "or"(arg0: $BitSet$$Type): void
public "toByteArray"(): (byte)[]
public "and"(arg0: $BitSet$$Type): void
public "xor"(arg0: $BitSet$$Type): void
public "andNot"(arg0: $BitSet$$Type): void
public "nextSetBit"(arg0: integer): integer
public "toLongArray"(): (long)[]
public "previousSetBit"(arg0: integer): integer
public "previousClearBit"(arg0: integer): integer
public "intersects"(arg0: $BitSet$$Type): boolean
public "cardinality"(): integer
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BitSet$$Type = ($BitSet);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BitSet$$Original = $BitSet;}
declare module "java.util.Enumeration" {
import {$Iterator} from "java.util.Iterator"

export interface $Enumeration$$Interface<E> {
}

export class $Enumeration<E> implements $Enumeration$$Interface {
 "asIterator"(): $Iterator<(E)>
 "hasMoreElements"(): boolean
 "nextElement"(): E
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Enumeration$$Type<E> = ($Enumeration<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Enumeration$$Original<E> = $Enumeration<(E)>;}
declare module "java.util.Locale$LanguageRange" {
import {$Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"

export class $Locale$LanguageRange {
static readonly "MAX_WEIGHT": double
static readonly "MIN_WEIGHT": double

constructor(arg0: StringJS)
constructor(arg0: StringJS, arg1: double)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "parse"(arg0: StringJS): $List<($Locale$LanguageRange)>
public static "parse"(arg0: StringJS, arg1: $Map$$Type<(StringJS), ($List$$Type<(StringJS)>)>): $List<($Locale$LanguageRange)>
public "getRange"(): StringJS
public "getWeight"(): double
public static "mapEquivalents"(arg0: $List$$Type<($Locale$LanguageRange$$Type)>, arg1: $Map$$Type<(StringJS), ($List$$Type<(StringJS)>)>): $List<($Locale$LanguageRange)>
get "range"(): StringJS
get "weight"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Locale$LanguageRange$$Type = ($Locale$LanguageRange);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Locale$LanguageRange$$Original = $Locale$LanguageRange;}
declare module "java.util.RandomAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RandomAccess$$Interface {
}

export class $RandomAccess implements $RandomAccess$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RandomAccess$$Type = ($RandomAccess);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RandomAccess$$Original = $RandomAccess;}
declare module "java.util.Locale" {
import {$Locale$FilteringMode$$Type} from "java.util.Locale$FilteringMode"
import {$Collection$$Type} from "java.util.Collection"
import {$Locale$Category$$Type} from "java.util.Locale$Category"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$List, $List$$Type} from "java.util.List"
import {$Cloneable$$Interface} from "java.lang.Cloneable"
import {$Set} from "java.util.Set"
import {$Locale$LanguageRange$$Type} from "java.util.Locale$LanguageRange"
import {$Stream} from "java.util.stream.Stream"
import {$Locale$IsoCountryCode$$Type} from "java.util.Locale$IsoCountryCode"

export class $Locale implements $Cloneable$$Interface, $Serializable$$Interface {
static readonly "PRC": $Locale
static readonly "CANADA": $Locale
static readonly "ENGLISH": $Locale
static readonly "ROOT": $Locale
static readonly "TAIWAN": $Locale
static readonly "CHINA": $Locale
static readonly "ITALY": $Locale
static readonly "CHINESE": $Locale
static readonly "KOREA": $Locale
static readonly "FRENCH": $Locale
static readonly "FRANCE": $Locale
static readonly "TRADITIONAL_CHINESE": $Locale
static readonly "CANADA_FRENCH": $Locale
static readonly "GERMANY": $Locale
static readonly "ITALIAN": $Locale
static readonly "PRIVATE_USE_EXTENSION": character
static readonly "UK": $Locale
static readonly "JAPAN": $Locale
static readonly "JAPANESE": $Locale
static readonly "UNICODE_LOCALE_EXTENSION": character
static readonly "SIMPLIFIED_CHINESE": $Locale
static readonly "GERMAN": $Locale
static readonly "US": $Locale
static readonly "KOREAN": $Locale

/**
 * 
 * @deprecated
 */
constructor(arg0: StringJS)
/**
 * 
 * @deprecated
 */
constructor(arg0: StringJS, arg1: StringJS, arg2: StringJS)
/**
 * 
 * @deprecated
 */
constructor(arg0: StringJS, arg1: StringJS)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "clone"(): any
public static "getDefault"(): $Locale
public static "getDefault"(arg0: $Locale$Category$$Type): $Locale
public static "of"(arg0: StringJS, arg1: StringJS): $Locale
public static "of"(arg0: StringJS, arg1: StringJS, arg2: StringJS): $Locale
public static "of"(arg0: StringJS): $Locale
public static "lookup"(arg0: $List$$Type<($Locale$LanguageRange$$Type)>, arg1: $Collection$$Type<($Locale$$Type)>): $Locale
public static "filter"(arg0: $List$$Type<($Locale$LanguageRange$$Type)>, arg1: $Collection$$Type<($Locale$$Type)>): $List<($Locale)>
public static "filter"(arg0: $List$$Type<($Locale$LanguageRange$$Type)>, arg1: $Collection$$Type<($Locale$$Type)>, arg2: $Locale$FilteringMode$$Type): $List<($Locale)>
public "getLanguage"(): StringJS
public "getDisplayName"(): StringJS
public "getDisplayName"(arg0: $Locale$$Type): StringJS
public static "getAvailableLocales"(): ($Locale)[]
public "getUnicodeLocaleType"(arg0: StringJS): StringJS
public "getCountry"(): StringJS
public "stripExtensions"(): $Locale
public "hasExtensions"(): boolean
public "getVariant"(): StringJS
public static "setDefault"(arg0: $Locale$Category$$Type, arg1: $Locale$$Type): void
public static "setDefault"(arg0: $Locale$$Type): void
public "getScript"(): StringJS
public "getUnicodeLocaleAttributes"(): $Set<(StringJS)>
public "getUnicodeLocaleKeys"(): $Set<(StringJS)>
public "getDisplayLanguage"(): StringJS
public "getDisplayLanguage"(arg0: $Locale$$Type): StringJS
public "getDisplayScript"(arg0: $Locale$$Type): StringJS
public "getDisplayScript"(): StringJS
public "getDisplayCountry"(arg0: $Locale$$Type): StringJS
public "getDisplayCountry"(): StringJS
public "getDisplayVariant"(arg0: $Locale$$Type): StringJS
public "getDisplayVariant"(): StringJS
public static "filterTags"(arg0: $List$$Type<($Locale$LanguageRange$$Type)>, arg1: $Collection$$Type<(StringJS)>): $List<(StringJS)>
public static "filterTags"(arg0: $List$$Type<($Locale$LanguageRange$$Type)>, arg1: $Collection$$Type<(StringJS)>, arg2: $Locale$FilteringMode$$Type): $List<(StringJS)>
public static "lookupTag"(arg0: $List$$Type<($Locale$LanguageRange$$Type)>, arg1: $Collection$$Type<(StringJS)>): StringJS
public static "availableLocales"(): $Stream<($Locale)>
public static "getISOCountries"(arg0: $Locale$IsoCountryCode$$Type): $Set<(StringJS)>
public static "getISOCountries"(): (StringJS)[]
public static "getISOLanguages"(): (StringJS)[]
public "getExtension"(arg0: character): StringJS
public "getExtensionKeys"(): $Set<(character)>
public "toLanguageTag"(): StringJS
public static "caseFoldLanguageTag"(arg0: StringJS): StringJS
public static "forLanguageTag"(arg0: StringJS): $Locale
public "getISO3Language"(): StringJS
public "getISO3Country"(): StringJS
get "default"(): $Locale
get "language"(): StringJS
get "displayName"(): StringJS
get "country"(): StringJS
get "variant"(): StringJS
set "default"(value: $Locale$$Type)
get "script"(): StringJS
get "unicodeLocaleAttributes"(): $Set<(StringJS)>
get "unicodeLocaleKeys"(): $Set<(StringJS)>
get "displayLanguage"(): StringJS
get "displayScript"(): StringJS
get "displayCountry"(): StringJS
get "displayVariant"(): StringJS
get "ISOCountries"(): (StringJS)[]
get "ISOLanguages"(): (StringJS)[]
get "extensionKeys"(): $Set<(character)>
get "ISO3Language"(): StringJS
get "ISO3Country"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Locale$$Type = ($Locale);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Locale$$Original = $Locale;}
declare module "java.util.OptionalInt" {
import {$IntStream} from "java.util.stream.IntStream"
import {$IntConsumer$$Type} from "java.util.function.IntConsumer"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Throwable} from "java.lang.Throwable"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$IntSupplier$$Type} from "java.util.function.IntSupplier"

export class $OptionalInt {
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public "stream"(): $IntStream
public static "of"(arg0: integer): $OptionalInt
public static "empty"(): $OptionalInt
public "isPresent"(): boolean
public "orElse"(arg0: integer): integer
public "orElseThrow"<X extends $Throwable>(arg0: $Supplier$$Type<(X)>): integer
public "orElseThrow"(): integer
public "ifPresent"(arg0: $IntConsumer$$Type): void
public "ifPresentOrElse"(arg0: $IntConsumer$$Type, arg1: $Runnable$$Type): void
public "orElseGet"(arg0: $IntSupplier$$Type): integer
public "getAsInt"(): integer
get "present"(): boolean
get "asInt"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionalInt$$Type = ($OptionalInt);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OptionalInt$$Original = $OptionalInt;}
declare module "java.util.Vector" {
import {$RandomAccess$$Interface} from "java.util.RandomAccess"
import {$Iterator} from "java.util.Iterator"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$Collection$$Type} from "java.util.Collection"
import {$SequencedCollection} from "java.util.SequencedCollection"
import {$Comparator$$Type} from "java.util.Comparator"
import {$Spliterator} from "java.util.Spliterator"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$List, $List$$Interface} from "java.util.List"
import {$AbstractList} from "java.util.AbstractList"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ListIterator} from "java.util.ListIterator"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Cloneable$$Interface} from "java.lang.Cloneable"
import {$Enumeration} from "java.util.Enumeration"

export class $Vector<E> extends $AbstractList<(E)> implements $List$$Interface<(E)>, $RandomAccess$$Interface, $Cloneable$$Interface, $Serializable$$Interface {
constructor(arg0: $Collection$$Type<(E)>)
constructor()
constructor(arg0: integer)
constructor(arg0: integer, arg1: integer)

public "remove"(arg0: integer): E
public "remove"(arg0: any): boolean
public "size"(): integer
public "get"(arg0: integer): E
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "clone"(): any
public "indexOf"(arg0: any, arg1: integer): integer
public "indexOf"(arg0: any): integer
public "clear"(): void
public "lastIndexOf"(arg0: any, arg1: integer): integer
public "lastIndexOf"(arg0: any): integer
public "isEmpty"(): boolean
public "replaceAll"(arg0: $UnaryOperator$$Type<(E)>): void
public "add"(arg0: E): boolean
public "add"(arg0: integer, arg1: E): void
public "subList"(arg0: integer, arg1: integer): $List<(E)>
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public "iterator"(): $Iterator<(E)>
public "contains"(arg0: any): boolean
public "elements"(): $Enumeration<(E)>
public "spliterator"(): $Spliterator<(E)>
public "addAll"(arg0: $Collection$$Type<(E)>): boolean
public "addAll"(arg0: integer, arg1: $Collection$$Type<(E)>): boolean
public "set"(arg0: integer, arg1: E): E
public "forEach"(arg0: $Consumer$$Type<(E)>): void
public "sort"(arg0: $Comparator$$Type<(E)>): void
public "capacity"(): integer
public "ensureCapacity"(arg0: integer): void
public "trimToSize"(): void
public "elementAt"(arg0: integer): E
public "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
public "removeAll"(arg0: $Collection$$Type<(never)>): boolean
public "retainAll"(arg0: $Collection$$Type<(never)>): boolean
public "listIterator"(): $ListIterator<(E)>
public "listIterator"(arg0: integer): $ListIterator<(E)>
public "containsAll"(arg0: $Collection$$Type<(never)>): boolean
public "setSize"(arg0: integer): void
public "copyInto"(arg0: (any)[]): void
public "removeAllElements"(): void
public "addElement"(arg0: E): void
public "removeElement"(arg0: any): boolean
public "insertElementAt"(arg0: E, arg1: integer): void
public "firstElement"(): E
public "lastElement"(): E
public "setElementAt"(arg0: E, arg1: integer): void
public "removeElementAt"(arg0: integer): void
public static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public "reversed"(): $SequencedCollection
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vector$$Type<E> = ($Vector<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Vector$$Original<E> = $Vector<(E)>;}
declare module "java.util.HashMap" {
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$Collection} from "java.util.Collection"
import {$Map, $Map$$Type, $Map$$Interface} from "java.util.Map"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Function$$Type} from "java.util.function.Function"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Cloneable$$Interface} from "java.lang.Cloneable"
import {$AbstractMap} from "java.util.AbstractMap"
import {$Set} from "java.util.Set"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export class $HashMap<K, V> extends $AbstractMap<(K), (V)> implements $Map$$Interface<(K), (V)>, $Cloneable$$Interface, $Serializable$$Interface {
constructor(arg0: integer)
constructor(arg0: integer, arg1: float)
constructor()
constructor(arg0: $Map$$Type<(K), (V)>)

public "remove"(arg0: any): V
public "remove"(arg0: any, arg1: any): boolean
public "size"(): integer
public "get"(arg0: any): V
public "put"(arg0: K, arg1: V): V
public "values"(): $Collection<(V)>
public "clone"(): any
public "clear"(): void
public "isEmpty"(): boolean
public "replace"(arg0: K, arg1: V): V
public "replace"(arg0: K, arg1: V, arg2: V): boolean
public "replaceAll"(arg0: $BiFunction$$Type<(K), (V), (V)>): void
public "merge"(arg0: K, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
public static "newHashMap"<K, V>(arg0: integer): $HashMap<(K), (V)>
public "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
public "putAll"(arg0: $Map$$Type<(K), (V)>): void
public "putIfAbsent"(arg0: K, arg1: V): V
public "compute"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
public "forEach"(arg0: $BiConsumer$$Type<(K), (V)>): void
public "containsKey"(arg0: any): boolean
public "computeIfAbsent"(arg0: K, arg1: $Function$$Type<(K), (V)>): V
public "keySet"(): $Set<(K)>
public "containsValue"(arg0: any): boolean
public "getOrDefault"(arg0: any, arg1: V): V
public "computeIfPresent"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
public "equals"(arg0: any): boolean
public "hashCode"(): integer
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
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HashMap$$Type<K, V> = ($HashMap<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HashMap$$Original<K, V> = $HashMap<(K), (V)>;}
declare module "java.util.Spliterator$OfDouble" {
import {$Spliterator$OfPrimitive, $Spliterator$OfPrimitive$$Interface} from "java.util.Spliterator$OfPrimitive"
import {$DoubleConsumer, $DoubleConsumer$$Type} from "java.util.function.DoubleConsumer"
import {$Comparator} from "java.util.Comparator"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $Spliterator$OfDouble$$Interface extends $Spliterator$OfPrimitive$$Interface<(double), ($DoubleConsumer), ($Spliterator$OfDouble)> {
get "exactSizeIfKnown"(): long
get "comparator"(): $Comparator<(double)>
}

export class $Spliterator$OfDouble implements $Spliterator$OfDouble$$Interface {
 "forEachRemaining"(arg0: any): void
 "forEachRemaining"(arg0: $DoubleConsumer$$Type): void
 "forEachRemaining"(arg0: $Consumer$$Type<(double)>): void
 "trySplit"(): $Spliterator$OfPrimitive
 "tryAdvance"(arg0: $DoubleConsumer$$Type): boolean
 "tryAdvance"(arg0: $Consumer$$Type<(double)>): boolean
 "tryAdvance"(arg0: any): boolean
 "characteristics"(): integer
 "estimateSize"(): long
 "getExactSizeIfKnown"(): long
 "hasCharacteristics"(arg0: integer): boolean
 "getComparator"(): $Comparator<(double)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Spliterator$OfDouble$$Type = ($Spliterator$OfDouble);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Spliterator$OfDouble$$Original = $Spliterator$OfDouble;}
declare module "java.util.PrimitiveIterator" {
import {$Iterator$$Interface} from "java.util.Iterator"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $PrimitiveIterator$$Interface<T, T_CONS> extends $Iterator$$Interface<(T)> {
}

export class $PrimitiveIterator<T, T_CONS> implements $PrimitiveIterator$$Interface {
 "forEachRemaining"(arg0: T_CONS): void
 "remove"(): void
 "forEachRemaining"(arg0: $Consumer$$Type<(T)>): void
 "hasNext"(): boolean
 "next"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrimitiveIterator$$Type<T, T_CONS> = ($PrimitiveIterator<(T), (T_CONS)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PrimitiveIterator$$Original<T, T_CONS> = $PrimitiveIterator<(T), (T_CONS)>;}
declare module "java.util.Currency" {
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Set} from "java.util.Set"
import {$Locale$$Type} from "java.util.Locale"

export class $Currency implements $Serializable$$Interface {
public "toString"(): StringJS
public static "getInstance"(arg0: $Locale$$Type): $Currency
public static "getInstance"(arg0: StringJS): $Currency
public "getDisplayName"(): StringJS
public "getDisplayName"(arg0: $Locale$$Type): StringJS
public "getSymbol"(): StringJS
public "getSymbol"(arg0: $Locale$$Type): StringJS
public "getCurrencyCode"(): StringJS
public "getDefaultFractionDigits"(): integer
public static "getAvailableCurrencies"(): $Set<($Currency)>
public "getNumericCode"(): integer
public "getNumericCodeAsString"(): StringJS
get "displayName"(): StringJS
get "symbol"(): StringJS
get "currencyCode"(): StringJS
get "defaultFractionDigits"(): integer
get "availableCurrencies"(): $Set<($Currency)>
get "numericCode"(): integer
get "numericCodeAsString"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Currency$$Type = ($Currency);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Currency$$Original = $Currency;}
declare module "java.util.AbstractSet" {
import {$Iterator} from "java.util.Iterator"
import {$Collection$$Type} from "java.util.Collection"
import {$Spliterator} from "java.util.Spliterator"
import {$Set, $Set$$Interface} from "java.util.Set"
import {$AbstractCollection} from "java.util.AbstractCollection"

export class $AbstractSet<E> extends $AbstractCollection<(E)> implements $Set$$Interface<(E)> {
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "removeAll"(arg0: $Collection$$Type<(never)>): boolean
public "remove"(arg0: any): boolean
public "size"(): integer
public static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $Set<(E)>
public "clear"(): void
public "isEmpty"(): boolean
public "add"(arg0: E): boolean
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public "iterator"(): $Iterator<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $Set<(E)>
public static "of"<E>(): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $Set<(E)>
public static "of"<E>(...arg0: (E)[]): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $Set<(E)>
public static "of"<E>(arg0: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E): $Set<(E)>
public "contains"(arg0: any): boolean
public "spliterator"(): $Spliterator<(E)>
public "addAll"(arg0: $Collection$$Type<(E)>): boolean
public "retainAll"(arg0: $Collection$$Type<(never)>): boolean
public "containsAll"(arg0: $Collection$$Type<(never)>): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSet$$Type<E> = ($AbstractSet<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractSet$$Original<E> = $AbstractSet<(E)>;}
declare module "java.util.LinkedList" {
import {$Iterator} from "java.util.Iterator"
import {$ListIterator} from "java.util.ListIterator"
import {$Collection$$Type} from "java.util.Collection"
import {$SequencedCollection} from "java.util.SequencedCollection"
import {$Spliterator} from "java.util.Spliterator"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$List, $List$$Interface} from "java.util.List"
import {$Cloneable$$Interface} from "java.lang.Cloneable"
import {$AbstractSequentialList} from "java.util.AbstractSequentialList"
import {$Deque$$Interface} from "java.util.Deque"

export class $LinkedList<E> extends $AbstractSequentialList<(E)> implements $List$$Interface<(E)>, $Deque$$Interface<(E)>, $Cloneable$$Interface, $Serializable$$Interface {
constructor()
constructor(arg0: $Collection$$Type<(E)>)

public "remove"(arg0: integer): E
public "remove"(arg0: any): boolean
public "remove"(): E
public "size"(): integer
public "get"(arg0: integer): E
public "clone"(): any
public "indexOf"(arg0: any): integer
public "clear"(): void
public "lastIndexOf"(arg0: any): integer
public "add"(arg0: E): boolean
public "add"(arg0: integer, arg1: E): void
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public "contains"(arg0: any): boolean
public "spliterator"(): $Spliterator<(E)>
public "addAll"(arg0: $Collection$$Type<(E)>): boolean
public "addAll"(arg0: integer, arg1: $Collection$$Type<(E)>): boolean
public "set"(arg0: integer, arg1: E): E
public "peek"(): E
public "getFirst"(): E
public "getLast"(): E
public "element"(): E
public "addFirst"(arg0: E): void
public "addLast"(arg0: E): void
public "removeFirst"(): E
public "removeLast"(): E
public "listIterator"(arg0: integer): $ListIterator<(E)>
public "reversed"(): $SequencedCollection
public "poll"(): E
public "push"(arg0: E): void
public "pop"(): E
public "pollFirst"(): E
public "pollLast"(): E
public "offerLast"(arg0: E): boolean
public "peekFirst"(): E
public "removeFirstOccurrence"(arg0: any): boolean
public "offerFirst"(arg0: E): boolean
public "peekLast"(): E
public "removeLastOccurrence"(arg0: any): boolean
public "offer"(arg0: E): boolean
public "descendingIterator"(): $Iterator<(E)>
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $List<(E)>
public "isEmpty"(): boolean
public "subList"(arg0: integer, arg1: integer): $List<(E)>
public "iterator"(): $Iterator<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public "removeAll"(arg0: $Collection$$Type<(never)>): boolean
public "retainAll"(arg0: $Collection$$Type<(never)>): boolean
public "listIterator"(): $ListIterator<(E)>
public "containsAll"(arg0: $Collection$$Type<(never)>): boolean
get "first"(): E
get "last"(): E
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LinkedList$$Type<E> = ($LinkedList<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LinkedList$$Original<E> = $LinkedList<(E)>;}
declare module "java.util.ArrayDeque" {
import {$Iterator} from "java.util.Iterator"
import {$Collection$$Type} from "java.util.Collection"
import {$Spliterator} from "java.util.Spliterator"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Cloneable$$Interface} from "java.lang.Cloneable"
import {$Deque, $Deque$$Interface} from "java.util.Deque"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$AbstractCollection} from "java.util.AbstractCollection"

export class $ArrayDeque<E> extends $AbstractCollection<(E)> implements $Deque$$Interface<(E)>, $Cloneable$$Interface, $Serializable$$Interface {
constructor(arg0: integer)
constructor()
constructor(arg0: $Collection$$Type<(E)>)

public "remove"(): E
public "remove"(arg0: any): boolean
public "size"(): integer
public "clone"(): $ArrayDeque<(E)>
public "clear"(): void
public "isEmpty"(): boolean
public "add"(arg0: E): boolean
public "toArray"<T>(arg0: (T)[]): (T)[]
public "toArray"(): (any)[]
public "iterator"(): $Iterator<(E)>
public "contains"(arg0: any): boolean
public "spliterator"(): $Spliterator<(E)>
public "addAll"(arg0: $Collection$$Type<(E)>): boolean
public "forEach"(arg0: $Consumer$$Type<(E)>): void
public "peek"(): E
public "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
public "getFirst"(): E
public "getLast"(): E
public "element"(): E
public "addFirst"(arg0: E): void
public "addLast"(arg0: E): void
public "removeFirst"(): E
public "removeLast"(): E
public "removeAll"(arg0: $Collection$$Type<(never)>): boolean
public "retainAll"(arg0: $Collection$$Type<(never)>): boolean
public "poll"(): E
public "push"(arg0: E): void
public "pop"(): E
public "pollFirst"(): E
public "pollLast"(): E
public "offerLast"(arg0: E): boolean
public "peekFirst"(): E
public "removeFirstOccurrence"(arg0: any): boolean
public "offerFirst"(arg0: E): boolean
public "peekLast"(): E
public "removeLastOccurrence"(arg0: any): boolean
public "offer"(arg0: E): boolean
public "descendingIterator"(): $Iterator<(E)>
public "reversed"(): $Deque<(E)>
public "equals"(arg0: any): boolean
public "hashCode"(): integer
get "empty"(): boolean
get "first"(): E
get "last"(): E
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArrayDeque$$Type<E> = ($ArrayDeque<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArrayDeque$$Original<E> = $ArrayDeque<(E)>;}
declare module "java.util.Dictionary" {
import {$Enumeration} from "java.util.Enumeration"

export class $Dictionary<K, V> {
constructor()

public "remove"(arg0: any): V
public "size"(): integer
public "get"(arg0: any): V
public "put"(arg0: K, arg1: V): V
public "isEmpty"(): boolean
public "elements"(): $Enumeration<(V)>
public "keys"(): $Enumeration<(K)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Dictionary$$Type<K, V> = ($Dictionary<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Dictionary$$Original<K, V> = $Dictionary<(K), (V)>;}
declare module "java.util.Spliterator$OfInt" {
import {$Spliterator$OfPrimitive, $Spliterator$OfPrimitive$$Interface} from "java.util.Spliterator$OfPrimitive"
import {$Comparator} from "java.util.Comparator"
import {$IntConsumer, $IntConsumer$$Type} from "java.util.function.IntConsumer"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $Spliterator$OfInt$$Interface extends $Spliterator$OfPrimitive$$Interface<(integer), ($IntConsumer), ($Spliterator$OfInt)> {
get "exactSizeIfKnown"(): long
get "comparator"(): $Comparator<(integer)>
}

export class $Spliterator$OfInt implements $Spliterator$OfInt$$Interface {
 "forEachRemaining"(arg0: any): void
 "forEachRemaining"(arg0: $IntConsumer$$Type): void
 "forEachRemaining"(arg0: $Consumer$$Type<(integer)>): void
 "trySplit"(): $Spliterator$OfPrimitive
 "tryAdvance"(arg0: $IntConsumer$$Type): boolean
 "tryAdvance"(arg0: $Consumer$$Type<(integer)>): boolean
 "tryAdvance"(arg0: any): boolean
 "characteristics"(): integer
 "estimateSize"(): long
 "getExactSizeIfKnown"(): long
 "hasCharacteristics"(arg0: integer): boolean
 "getComparator"(): $Comparator<(integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Spliterator$OfInt$$Type = ($Spliterator$OfInt);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Spliterator$OfInt$$Original = $Spliterator$OfInt;}
declare module "java.util.Collection" {
import {$Iterator} from "java.util.Iterator"
import {$Iterable$$Interface} from "java.lang.Iterable"
import {$Spliterator} from "java.util.Spliterator"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Stream} from "java.util.stream.Stream"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$IntFunction$$Type} from "java.util.function.IntFunction"

export interface $Collection$$Interface<E> extends $Iterable$$Interface<(E)> {
[Symbol.iterator](): IterableIterator<E>;
get "empty"(): boolean
}

export class $Collection<E> implements $Collection$$Interface {
 "remove"(arg0: any): boolean
 "size"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "add"(arg0: E): boolean
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "toArray"(): (any)[]
 "iterator"(): $Iterator<(E)>
 "stream"(): $Stream<(E)>
 "contains"(arg0: any): boolean
 "spliterator"(): $Spliterator<(E)>
 "addAll"(arg0: $Collection$$Type<(E)>): boolean
 "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
 "removeAll"(arg0: $Collection$$Type<(never)>): boolean
 "retainAll"(arg0: $Collection$$Type<(never)>): boolean
 "containsAll"(arg0: $Collection$$Type<(never)>): boolean
 "parallelStream"(): $Stream<(E)>
 "forEach"(arg0: $Consumer$$Type<(E)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Collection$$Type<E> = ((E)[]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Collection$$Original<E> = $Collection<(E)>;}
declare module "java.util.SequencedMap" {
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$Collection} from "java.util.Collection"
import {$Map, $Map$$Type, $Map$$Interface} from "java.util.Map"
import {$SequencedSet} from "java.util.SequencedSet"
import {$SequencedCollection} from "java.util.SequencedCollection"
import {$Function$$Type} from "java.util.function.Function"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set} from "java.util.Set"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export interface $SequencedMap$$Interface<K, V> extends $Map$$Interface<(K), (V)> {
[index: string | number]: V
get "empty"(): boolean
}

export class $SequencedMap<K, V> implements $SequencedMap$$Interface {
 "reversed"(): $SequencedMap<(K), (V)>
 "sequencedKeySet"(): $SequencedSet<(K)>
 "sequencedValues"(): $SequencedCollection<(V)>
 "sequencedEntrySet"(): $SequencedSet<($Map$Entry<(K), (V)>)>
 "putFirst"(arg0: K, arg1: V): V
 "putLast"(arg0: K, arg1: V): V
 "firstEntry"(): $Map$Entry<(K), (V)>
 "lastEntry"(): $Map$Entry<(K), (V)>
 "pollFirstEntry"(): $Map$Entry<(K), (V)>
 "pollLastEntry"(): $Map$Entry<(K), (V)>
 "remove"(arg0: any, arg1: any): boolean
 "remove"(arg0: any): V
 "size"(): integer
 "get"(arg0: any): V
 "put"(arg0: K, arg1: V): V
 "equals"(arg0: any): boolean
 "values"(): $Collection<(V)>
 "hashCode"(): integer
static "copyOf"<K, V>(arg0: $Map$$Type<(K), (V)>): $Map<(K), (V)>
 "clear"(): void
 "isEmpty"(): boolean
 "replace"(arg0: K, arg1: V, arg2: V): boolean
 "replace"(arg0: K, arg1: V): V
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
 "merge"(arg0: K, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
 "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
 "putAll"(arg0: $Map$$Type<(K), (V)>): void
 "putIfAbsent"(arg0: K, arg1: V): V
 "compute"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
 "forEach"(arg0: $BiConsumer$$Type<(K), (V)>): void
 "containsKey"(arg0: any): boolean
 "computeIfAbsent"(arg0: K, arg1: $Function$$Type<(K), (V)>): V
 "keySet"(): $Set<(K)>
 "containsValue"(arg0: any): boolean
 "getOrDefault"(arg0: any, arg1: V): V
 "computeIfPresent"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(K), (V)>)[]): $Map<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SequencedMap$$Type<K, V> = ($SequencedMap<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SequencedMap$$Original<K, V> = $SequencedMap<(K), (V)>;}
declare module "java.util.AbstractCollection" {
import {$Iterator} from "java.util.Iterator"
import {$Collection$$Type, $Collection$$Interface} from "java.util.Collection"
import {$Spliterator} from "java.util.Spliterator"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Stream} from "java.util.stream.Stream"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$IntFunction$$Type} from "java.util.function.IntFunction"

export class $AbstractCollection<E> implements $Collection$$Interface<(E)> {
public "remove"(arg0: any): boolean
public "size"(): integer
public "toString"(): StringJS
public "clear"(): void
public "isEmpty"(): boolean
public "add"(arg0: E): boolean
public "toArray"<T>(arg0: (T)[]): (T)[]
public "toArray"(): (any)[]
public "iterator"(): $Iterator<(E)>
public "contains"(arg0: any): boolean
public "addAll"(arg0: $Collection$$Type<(E)>): boolean
public "removeAll"(arg0: $Collection$$Type<(never)>): boolean
public "retainAll"(arg0: $Collection$$Type<(never)>): boolean
public "containsAll"(arg0: $Collection$$Type<(never)>): boolean
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
public "stream"(): $Stream<(E)>
public "spliterator"(): $Spliterator<(E)>
public "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
public "parallelStream"(): $Stream<(E)>
public "forEach"(arg0: $Consumer$$Type<(E)>): void
[Symbol.iterator](): IterableIterator<E>;
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractCollection$$Type<E> = ($AbstractCollection<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractCollection$$Original<E> = $AbstractCollection<(E)>;}
declare module "java.util.IntSummaryStatistics" {
import {$IntConsumer, $IntConsumer$$Type, $IntConsumer$$Interface} from "java.util.function.IntConsumer"

export class $IntSummaryStatistics implements $IntConsumer$$Interface {
constructor()
constructor(arg0: long, arg1: integer, arg2: integer, arg3: long)

public "toString"(): StringJS
public "accept"(arg0: integer): void
public "combine"(arg0: $IntSummaryStatistics$$Type): void
public "getCount"(): long
public "getSum"(): long
public "getMin"(): integer
public "getAverage"(): double
public "getMax"(): integer
public "andThen"(arg0: $IntConsumer$$Type): $IntConsumer
get "count"(): long
get "sum"(): long
get "min"(): integer
get "average"(): double
get "max"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntSummaryStatistics$$Type = ($IntSummaryStatistics);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntSummaryStatistics$$Original = $IntSummaryStatistics;}
declare module "java.util.SortedMap" {
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$Collection} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$SequencedSet} from "java.util.SequencedSet"
import {$Comparator} from "java.util.Comparator"
import {$SequencedCollection} from "java.util.SequencedCollection"
import {$SequencedMap$$Interface} from "java.util.SequencedMap"
import {$Function$$Type} from "java.util.function.Function"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set} from "java.util.Set"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export interface $SortedMap$$Interface<K, V> extends $SequencedMap$$Interface<(K), (V)> {
[index: string | number]: V
get "empty"(): boolean
}

export class $SortedMap<K, V> implements $SortedMap$$Interface {
 "values"(): $Collection<(V)>
 "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
 "keySet"(): $Set<(K)>
 "reversed"(): $SortedMap<(K), (V)>
 "comparator"(): $Comparator<(K)>
 "firstKey"(): K
 "putFirst"(arg0: K, arg1: V): V
 "putLast"(arg0: K, arg1: V): V
 "subMap"(arg0: K, arg1: K): $SortedMap<(K), (V)>
 "headMap"(arg0: K): $SortedMap<(K), (V)>
 "tailMap"(arg0: K): $SortedMap<(K), (V)>
 "lastKey"(): K
 "sequencedKeySet"(): $SequencedSet<(K)>
 "sequencedValues"(): $SequencedCollection<(V)>
 "sequencedEntrySet"(): $SequencedSet<($Map$Entry<(K), (V)>)>
 "firstEntry"(): $Map$Entry<(K), (V)>
 "lastEntry"(): $Map$Entry<(K), (V)>
 "pollFirstEntry"(): $Map$Entry<(K), (V)>
 "pollLastEntry"(): $Map$Entry<(K), (V)>
 "remove"(arg0: any, arg1: any): boolean
 "remove"(arg0: any): V
 "size"(): integer
 "get"(arg0: any): V
 "put"(arg0: K, arg1: V): V
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<K, V>(arg0: $Map$$Type<(K), (V)>): $Map<(K), (V)>
 "clear"(): void
 "isEmpty"(): boolean
 "replace"(arg0: K, arg1: V, arg2: V): boolean
 "replace"(arg0: K, arg1: V): V
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
 "merge"(arg0: K, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
 "putAll"(arg0: $Map$$Type<(K), (V)>): void
 "putIfAbsent"(arg0: K, arg1: V): V
 "compute"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
 "forEach"(arg0: $BiConsumer$$Type<(K), (V)>): void
 "containsKey"(arg0: any): boolean
 "computeIfAbsent"(arg0: K, arg1: $Function$$Type<(K), (V)>): V
 "containsValue"(arg0: any): boolean
 "getOrDefault"(arg0: any, arg1: V): V
 "computeIfPresent"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(K), (V)>)[]): $Map<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SortedMap$$Type<K, V> = ($SortedMap<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SortedMap$$Original<K, V> = $SortedMap<(K), (V)>;}
declare module "java.util.AbstractList" {
import {$Iterator} from "java.util.Iterator"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$ListIterator} from "java.util.ListIterator"
import {$Collection$$Type} from "java.util.Collection"
import {$SequencedCollection} from "java.util.SequencedCollection"
import {$Spliterator} from "java.util.Spliterator"
import {$Comparator$$Type} from "java.util.Comparator"
import {$List, $List$$Interface} from "java.util.List"
import {$AbstractCollection} from "java.util.AbstractCollection"

export class $AbstractList<E> extends $AbstractCollection<(E)> implements $List$$Interface<(E)> {
public "remove"(arg0: integer): E
public "get"(arg0: integer): E
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "indexOf"(arg0: any): integer
public "clear"(): void
public "lastIndexOf"(arg0: any): integer
public "add"(arg0: integer, arg1: E): void
public "add"(arg0: E): boolean
public "subList"(arg0: integer, arg1: integer): $List<(E)>
public "iterator"(): $Iterator<(E)>
public "addAll"(arg0: integer, arg1: $Collection$$Type<(E)>): boolean
public "set"(arg0: integer, arg1: E): E
public "listIterator"(): $ListIterator<(E)>
public "listIterator"(arg0: integer): $ListIterator<(E)>
public "remove"(arg0: any): boolean
public "size"(): integer
public static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $List<(E)>
public "isEmpty"(): boolean
public "replaceAll"(arg0: $UnaryOperator$$Type<(E)>): void
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public "contains"(arg0: any): boolean
public "spliterator"(): $Spliterator<(E)>
public "addAll"(arg0: $Collection$$Type<(E)>): boolean
public "sort"(arg0: $Comparator$$Type<(E)>): void
public "getFirst"(): E
public "getLast"(): E
public "addFirst"(arg0: E): void
public "addLast"(arg0: E): void
public "removeFirst"(): E
public "removeLast"(): E
public "removeAll"(arg0: $Collection$$Type<(never)>): boolean
public "retainAll"(arg0: $Collection$$Type<(never)>): boolean
public "reversed"(): $SequencedCollection
public "containsAll"(arg0: $Collection$$Type<(never)>): boolean
[index: number]: E
get "empty"(): boolean
get "first"(): E
get "last"(): E
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractList$$Type<E> = ($AbstractList<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractList$$Original<E> = $AbstractList<(E)>;}
declare module "java.util.Random" {
import {$IntStream} from "java.util.stream.IntStream"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$LongStream} from "java.util.stream.LongStream"
import {$RandomGenerator, $RandomGenerator$$Type, $RandomGenerator$$Interface} from "java.util.random.RandomGenerator"
import {$DoubleStream} from "java.util.stream.DoubleStream"

export class $Random implements $RandomGenerator$$Interface, $Serializable$$Interface {
constructor(arg0: long)
constructor()

public static "from"(arg0: $RandomGenerator$$Type): $Random
public "nextDouble"(): double
public "nextInt"(): integer
public "nextInt"(arg0: integer): integer
public "nextBytes"(arg0: (byte)[]): void
public "setSeed"(arg0: long): void
public "ints"(arg0: long): $IntStream
public "ints"(): $IntStream
public "ints"(arg0: long, arg1: integer, arg2: integer): $IntStream
public "ints"(arg0: integer, arg1: integer): $IntStream
public "longs"(arg0: long): $LongStream
public "longs"(arg0: long, arg1: long): $LongStream
public "longs"(arg0: long, arg1: long, arg2: long): $LongStream
public "longs"(): $LongStream
public "doubles"(arg0: long): $DoubleStream
public "doubles"(arg0: long, arg1: double, arg2: double): $DoubleStream
public "doubles"(arg0: double, arg1: double): $DoubleStream
public "doubles"(): $DoubleStream
public "nextLong"(): long
public "nextBoolean"(): boolean
public "nextFloat"(): float
public "nextGaussian"(): double
public static "getDefault"(): $RandomGenerator
public static "of"(arg0: StringJS): $RandomGenerator
public "nextDouble"(arg0: double): double
public "nextDouble"(arg0: double, arg1: double): double
public "nextInt"(arg0: integer, arg1: integer): integer
public "nextLong"(arg0: long, arg1: long): long
public "nextLong"(arg0: long): long
public "nextFloat"(arg0: float): float
public "nextFloat"(arg0: float, arg1: float): float
public "nextGaussian"(arg0: double, arg1: double): double
public "isDeprecated"(): boolean
public "nextExponential"(): double
set "seed"(value: long)
get "default"(): $RandomGenerator
get "deprecated"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Random$$Type = ($Random);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Random$$Original = $Random;}
declare module "java.util.OptionalLong" {
import {$LongSupplier$$Type} from "java.util.function.LongSupplier"
import {$LongConsumer$$Type} from "java.util.function.LongConsumer"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$LongStream} from "java.util.stream.LongStream"
import {$Throwable} from "java.lang.Throwable"
import {$Runnable$$Type} from "java.lang.Runnable"

export class $OptionalLong {
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public "stream"(): $LongStream
public static "of"(arg0: long): $OptionalLong
public static "empty"(): $OptionalLong
public "isPresent"(): boolean
public "orElse"(arg0: long): long
public "orElseThrow"<X extends $Throwable>(arg0: $Supplier$$Type<(X)>): long
public "orElseThrow"(): long
public "ifPresent"(arg0: $LongConsumer$$Type): void
public "ifPresentOrElse"(arg0: $LongConsumer$$Type, arg1: $Runnable$$Type): void
public "orElseGet"(arg0: $LongSupplier$$Type): long
public "getAsLong"(): long
get "present"(): boolean
get "asLong"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionalLong$$Type = ($OptionalLong);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OptionalLong$$Original = $OptionalLong;}
declare module "java.util.Locale$IsoCountryCode" {
import {$Enum} from "java.lang.Enum"

export class $Locale$IsoCountryCode extends $Enum<($Locale$IsoCountryCode)> {
static readonly "PART3": $Locale$IsoCountryCode
static readonly "PART1_ALPHA2": $Locale$IsoCountryCode
static readonly "PART1_ALPHA3": $Locale$IsoCountryCode

public static "values"(): ($Locale$IsoCountryCode)[]
public static "valueOf"(arg0: StringJS): $Locale$IsoCountryCode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Locale$IsoCountryCode$$Type = (("part1_alpha2") | ("part1_alpha3") | ("part3"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Locale$IsoCountryCode$$Original = $Locale$IsoCountryCode;}
declare module "java.util.ListIterator" {
import {$Iterator$$Interface} from "java.util.Iterator"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $ListIterator$$Interface<E> extends $Iterator$$Interface<(E)> {
}

export class $ListIterator<E> implements $ListIterator$$Interface {
 "remove"(): void
 "add"(arg0: E): void
 "hasNext"(): boolean
 "next"(): E
 "set"(arg0: E): void
 "nextIndex"(): integer
 "previousIndex"(): integer
 "hasPrevious"(): boolean
 "previous"(): E
 "forEachRemaining"(arg0: $Consumer$$Type<(E)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ListIterator$$Type<E> = ($ListIterator<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ListIterator$$Original<E> = $ListIterator<(E)>;}
declare module "java.util.EventListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EventListener$$Interface {
}

export class $EventListener implements $EventListener$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventListener$$Type = ($EventListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EventListener$$Original = $EventListener;}
declare module "java.util.Spliterator$OfLong" {
import {$Spliterator$OfPrimitive, $Spliterator$OfPrimitive$$Interface} from "java.util.Spliterator$OfPrimitive"
import {$Comparator} from "java.util.Comparator"
import {$LongConsumer, $LongConsumer$$Type} from "java.util.function.LongConsumer"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $Spliterator$OfLong$$Interface extends $Spliterator$OfPrimitive$$Interface<(long), ($LongConsumer), ($Spliterator$OfLong)> {
get "exactSizeIfKnown"(): long
get "comparator"(): $Comparator<(long)>
}

export class $Spliterator$OfLong implements $Spliterator$OfLong$$Interface {
 "forEachRemaining"(arg0: any): void
 "forEachRemaining"(arg0: $LongConsumer$$Type): void
 "forEachRemaining"(arg0: $Consumer$$Type<(long)>): void
 "trySplit"(): $Spliterator$OfPrimitive
 "tryAdvance"(arg0: $LongConsumer$$Type): boolean
 "tryAdvance"(arg0: $Consumer$$Type<(long)>): boolean
 "tryAdvance"(arg0: any): boolean
 "characteristics"(): integer
 "estimateSize"(): long
 "getExactSizeIfKnown"(): long
 "hasCharacteristics"(arg0: integer): boolean
 "getComparator"(): $Comparator<(long)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Spliterator$OfLong$$Type = ($Spliterator$OfLong);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Spliterator$OfLong$$Original = $Spliterator$OfLong;}
declare module "java.util.Spliterator$OfPrimitive" {
import {$Comparator} from "java.util.Comparator"
import {$Spliterator, $Spliterator$$Interface} from "java.util.Spliterator"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $Spliterator$OfPrimitive$$Interface<T, T_CONS, T_SPLITR extends $Spliterator$OfPrimitive<(object), (object), (object)>> extends $Spliterator$$Interface<(T)> {
get "exactSizeIfKnown"(): long
get "comparator"(): $Comparator<(T)>
}

export class $Spliterator$OfPrimitive<T, T_CONS, T_SPLITR extends $Spliterator$OfPrimitive<(object), (object), (object)>> implements $Spliterator$OfPrimitive$$Interface {
 "forEachRemaining"(arg0: T_CONS): void
 "trySplit"(): $Spliterator
 "tryAdvance"(arg0: T_CONS): boolean
 "forEachRemaining"(arg0: $Consumer$$Type<(T)>): void
 "characteristics"(): integer
 "tryAdvance"(arg0: $Consumer$$Type<(T)>): boolean
 "estimateSize"(): long
 "getExactSizeIfKnown"(): long
 "hasCharacteristics"(arg0: integer): boolean
 "getComparator"(): $Comparator<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Spliterator$OfPrimitive$$Type<T, T_CONS, T_SPLITR> = ($Spliterator$OfPrimitive<(T), (T_CONS), (T_SPLITR)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Spliterator$OfPrimitive$$Original<T, T_CONS, T_SPLITR> = $Spliterator$OfPrimitive<(T), (T_CONS), (T_SPLITR)>;}
declare module "java.util.LongSummaryStatistics" {
import {$LongConsumer, $LongConsumer$$Type, $LongConsumer$$Interface} from "java.util.function.LongConsumer"
import {$IntConsumer, $IntConsumer$$Type, $IntConsumer$$Interface} from "java.util.function.IntConsumer"

export class $LongSummaryStatistics implements $LongConsumer$$Interface, $IntConsumer$$Interface {
constructor()
constructor(arg0: long, arg1: long, arg2: long, arg3: long)

public "toString"(): StringJS
public "accept"(arg0: integer): void
public "accept"(arg0: long): void
public "combine"(arg0: $LongSummaryStatistics$$Type): void
public "getCount"(): long
public "getSum"(): long
public "getMin"(): long
public "getAverage"(): double
public "getMax"(): long
public "andThen"(arg0: $LongConsumer$$Type): $LongConsumer
public "andThen"(arg0: $IntConsumer$$Type): $IntConsumer
get "count"(): long
get "sum"(): long
get "min"(): long
get "average"(): double
get "max"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongSummaryStatistics$$Type = ($LongSummaryStatistics);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LongSummaryStatistics$$Original = $LongSummaryStatistics;}
declare module "java.util.AbstractSequentialList" {
import {$Iterator} from "java.util.Iterator"
import {$ListIterator} from "java.util.ListIterator"
import {$Collection$$Type} from "java.util.Collection"
import {$SequencedCollection} from "java.util.SequencedCollection"
import {$List} from "java.util.List"
import {$AbstractList} from "java.util.AbstractList"

export class $AbstractSequentialList<E> extends $AbstractList<(E)> {
public "remove"(arg0: integer): E
public "get"(arg0: integer): E
public "add"(arg0: integer, arg1: E): void
public "iterator"(): $Iterator<(E)>
public "addAll"(arg0: integer, arg1: $Collection$$Type<(E)>): boolean
public "set"(arg0: integer, arg1: E): E
public "listIterator"(arg0: integer): $ListIterator<(E)>
public "remove"(arg0: any): boolean
public "size"(): integer
public static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $List<(E)>
public "isEmpty"(): boolean
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public "contains"(arg0: any): boolean
public "addAll"(arg0: $Collection$$Type<(E)>): boolean
public "removeAll"(arg0: $Collection$$Type<(never)>): boolean
public "retainAll"(arg0: $Collection$$Type<(never)>): boolean
public "reversed"(): $SequencedCollection
public "containsAll"(arg0: $Collection$$Type<(never)>): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSequentialList$$Type<E> = ($AbstractSequentialList<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractSequentialList$$Original<E> = $AbstractSequentialList<(E)>;}
declare module "java.util.ArrayList" {
import {$RandomAccess$$Interface} from "java.util.RandomAccess"
import {$Iterator} from "java.util.Iterator"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$Collection$$Type} from "java.util.Collection"
import {$SequencedCollection} from "java.util.SequencedCollection"
import {$Comparator$$Type} from "java.util.Comparator"
import {$Spliterator} from "java.util.Spliterator"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$List, $List$$Interface} from "java.util.List"
import {$AbstractList} from "java.util.AbstractList"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ListIterator} from "java.util.ListIterator"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Cloneable$$Interface} from "java.lang.Cloneable"

export class $ArrayList<E> extends $AbstractList<(E)> implements $List$$Interface<(E)>, $RandomAccess$$Interface, $Cloneable$$Interface, $Serializable$$Interface {
constructor(arg0: $Collection$$Type<(E)>)
constructor()
constructor(arg0: integer)

public "remove"(arg0: any): boolean
public "remove"(arg0: integer): E
public "size"(): integer
public "get"(arg0: integer): E
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "clone"(): any
public "indexOf"(arg0: any): integer
public "clear"(): void
public "lastIndexOf"(arg0: any): integer
public "isEmpty"(): boolean
public "replaceAll"(arg0: $UnaryOperator$$Type<(E)>): void
public "add"(arg0: integer, arg1: E): void
public "add"(arg0: E): boolean
public "subList"(arg0: integer, arg1: integer): $List<(E)>
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public "iterator"(): $Iterator<(E)>
public "contains"(arg0: any): boolean
public "spliterator"(): $Spliterator<(E)>
public "addAll"(arg0: integer, arg1: $Collection$$Type<(E)>): boolean
public "addAll"(arg0: $Collection$$Type<(E)>): boolean
public "set"(arg0: integer, arg1: E): E
public "forEach"(arg0: $Consumer$$Type<(E)>): void
public "sort"(arg0: $Comparator$$Type<(E)>): void
public "ensureCapacity"(arg0: integer): void
public "trimToSize"(): void
public "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
public "getFirst"(): E
public "getLast"(): E
public "addFirst"(arg0: E): void
public "addLast"(arg0: E): void
public "removeFirst"(): E
public "removeLast"(): E
public "removeAll"(arg0: $Collection$$Type<(never)>): boolean
public "retainAll"(arg0: $Collection$$Type<(never)>): boolean
public "listIterator"(arg0: integer): $ListIterator<(E)>
public "listIterator"(): $ListIterator<(E)>
public static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public "reversed"(): $SequencedCollection
public "containsAll"(arg0: $Collection$$Type<(never)>): boolean
get "empty"(): boolean
get "first"(): E
get "last"(): E
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArrayList$$Type<E> = ($ArrayList<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArrayList$$Original<E> = $ArrayList<(E)>;}
declare module "java.util.Set" {
import {$Iterator} from "java.util.Iterator"
import {$Collection$$Type, $Collection$$Interface} from "java.util.Collection"
import {$Spliterator} from "java.util.Spliterator"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Stream} from "java.util.stream.Stream"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$IntFunction$$Type} from "java.util.function.IntFunction"

export interface $Set$$Interface<E> extends $Collection$$Interface<(E)> {
[Symbol.iterator](): IterableIterator<E>;
get "empty"(): boolean
}

export class $Set<E> implements $Set$$Interface {
 "remove"(arg0: any): boolean
 "size"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $Set<(E)>
 "clear"(): void
 "isEmpty"(): boolean
 "add"(arg0: E): boolean
 "toArray"(): (any)[]
 "toArray"<T>(arg0: (T)[]): (T)[]
 "iterator"(): $Iterator<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $Set<(E)>
static "of"<E>(): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $Set<(E)>
static "of"<E>(...arg0: (E)[]): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E): $Set<(E)>
static "of"<E>(arg0: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E): $Set<(E)>
 "contains"(arg0: any): boolean
 "spliterator"(): $Spliterator<(E)>
 "addAll"(arg0: $Collection$$Type<(E)>): boolean
 "removeAll"(arg0: $Collection$$Type<(never)>): boolean
 "retainAll"(arg0: $Collection$$Type<(never)>): boolean
 "containsAll"(arg0: $Collection$$Type<(never)>): boolean
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "stream"(): $Stream<(E)>
 "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
 "parallelStream"(): $Stream<(E)>
 "forEach"(arg0: $Consumer$$Type<(E)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Set$$Type<E> = ((E)[]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Set$$Original<E> = $Set<(E)>;}
declare module "java.util.DoubleSummaryStatistics" {
import {$DoubleConsumer, $DoubleConsumer$$Type, $DoubleConsumer$$Interface} from "java.util.function.DoubleConsumer"

export class $DoubleSummaryStatistics implements $DoubleConsumer$$Interface {
constructor()
constructor(arg0: long, arg1: double, arg2: double, arg3: double)

public "toString"(): StringJS
public "accept"(arg0: double): void
public "combine"(arg0: $DoubleSummaryStatistics$$Type): void
public "getCount"(): long
public "getSum"(): double
public "getMin"(): double
public "getAverage"(): double
public "getMax"(): double
public "andThen"(arg0: $DoubleConsumer$$Type): $DoubleConsumer
get "count"(): long
get "sum"(): double
get "min"(): double
get "average"(): double
get "max"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleSummaryStatistics$$Type = ($DoubleSummaryStatistics);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoubleSummaryStatistics$$Original = $DoubleSummaryStatistics;}
declare module "java.util.LinkedHashMap" {
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$Collection} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$SequencedSet} from "java.util.SequencedSet"
import {$SequencedCollection} from "java.util.SequencedCollection"
import {$SequencedMap, $SequencedMap$$Interface} from "java.util.SequencedMap"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set} from "java.util.Set"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$HashMap} from "java.util.HashMap"

export class $LinkedHashMap<K, V> extends $HashMap<(K), (V)> implements $SequencedMap$$Interface<(K), (V)> {
constructor(arg0: $Map$$Type<(K), (V)>)
constructor(arg0: integer)
constructor(arg0: integer, arg1: float)
constructor(arg0: integer, arg1: float, arg2: boolean)
constructor()

public "get"(arg0: any): V
public "values"(): $Collection<(V)>
public "clear"(): void
public "replaceAll"(arg0: $BiFunction$$Type<(K), (V), (V)>): void
public "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
public static "newLinkedHashMap"<K, V>(arg0: integer): $LinkedHashMap<(K), (V)>
public "forEach"(arg0: $BiConsumer$$Type<(K), (V)>): void
public "keySet"(): $Set<(K)>
public "containsValue"(arg0: any): boolean
public "getOrDefault"(arg0: any, arg1: V): V
public "reversed"(): $SequencedMap<(K), (V)>
public "sequencedKeySet"(): $SequencedSet<(K)>
public "sequencedValues"(): $SequencedCollection<(V)>
public "sequencedEntrySet"(): $SequencedSet<($Map$Entry<(K), (V)>)>
public "putFirst"(arg0: K, arg1: V): V
public "putLast"(arg0: K, arg1: V): V
public "firstEntry"(): $Map$Entry<(K), (V)>
public "lastEntry"(): $Map$Entry<(K), (V)>
public "pollFirstEntry"(): $Map$Entry<(K), (V)>
public "pollLastEntry"(): $Map$Entry<(K), (V)>
public "equals"(arg0: any): boolean
public "hashCode"(): integer
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
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LinkedHashMap$$Type<K, V> = ($LinkedHashMap<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LinkedHashMap$$Original<K, V> = $LinkedHashMap<(K), (V)>;}
declare module "java.util.EnumMap" {
import {$Collection} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Cloneable$$Interface} from "java.lang.Cloneable"
import {$AbstractMap} from "java.util.AbstractMap"
import {$Class$$Type} from "java.lang.Class"
import {$Set} from "java.util.Set"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export class $EnumMap<K extends $Enum<(object)>, V> extends $AbstractMap<(K), (V)> implements $Serializable$$Interface, $Cloneable$$Interface {
constructor(arg0: $EnumMap$$Type<(K), (V)>)
constructor(arg0: $Map$$Type<(K), (V)>)
constructor(arg0: $Class$$Type<(K)>)

public "remove"(arg0: any): V
public "size"(): integer
public "get"(arg0: any): V
public "put"(arg0: any, arg1: any): any
public "put"(arg0: K, arg1: V): V
public "equals"(arg0: any): boolean
public "values"(): $Collection<(V)>
public "hashCode"(): integer
public "clone"(): any
public "clear"(): void
public "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
public "putAll"(arg0: $Map$$Type<(K), (V)>): void
public "containsKey"(arg0: any): boolean
public "keySet"(): $Set<(K)>
public "containsValue"(arg0: any): boolean
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
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumMap$$Type<K, V> = ($EnumMap<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnumMap$$Original<K, V> = $EnumMap<(K), (V)>;}
declare module "java.util.AbstractMap" {
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$Collection} from "java.util.Collection"
import {$Map, $Map$$Type, $Map$$Interface} from "java.util.Map"
import {$Function$$Type} from "java.util.function.Function"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set} from "java.util.Set"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export class $AbstractMap<K, V> implements $Map$$Interface<(K), (V)> {
public "remove"(arg0: any): V
public "size"(): integer
public "get"(arg0: any): V
public "put"(arg0: K, arg1: V): V
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "values"(): $Collection<(V)>
public "hashCode"(): integer
public "clear"(): void
public "isEmpty"(): boolean
public "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
public "putAll"(arg0: $Map$$Type<(K), (V)>): void
public "containsKey"(arg0: any): boolean
public "keySet"(): $Set<(K)>
public "containsValue"(arg0: any): boolean
public "remove"(arg0: any, arg1: any): boolean
public static "copyOf"<K, V>(arg0: $Map$$Type<(K), (V)>): $Map<(K), (V)>
public "replace"(arg0: K, arg1: V, arg2: V): boolean
public "replace"(arg0: K, arg1: V): V
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
public "merge"(arg0: K, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
public "putIfAbsent"(arg0: K, arg1: V): V
public "compute"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public "forEach"(arg0: $BiConsumer$$Type<(K), (V)>): void
public "computeIfAbsent"(arg0: K, arg1: $Function$$Type<(K), (V)>): V
public "getOrDefault"(arg0: any, arg1: V): V
public "computeIfPresent"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(K), (V)>)[]): $Map<(K), (V)>
[index: string | number]: V
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractMap$$Type<K, V> = ($AbstractMap<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractMap$$Original<K, V> = $AbstractMap<(K), (V)>;}
