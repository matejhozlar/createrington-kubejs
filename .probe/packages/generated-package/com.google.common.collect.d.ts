declare module "com.google.common.collect.ImmutableMap$Builder" {
import {$Iterable$$Type} from "java.lang.Iterable"
import {$Map$$Type} from "java.util.Map"
import {$Comparator$$Type} from "java.util.Comparator"
import {$ImmutableMap} from "com.google.common.collect.ImmutableMap"
import {$Map$Entry$$Type} from "java.util.Map$Entry"

export class $ImmutableMap$Builder<K, V> {
constructor()

public "put"(key: K, value: V): $ImmutableMap$Builder<(K), (V)>
public "put"(entry: $Map$Entry$$Type<(K), (V)>): $ImmutableMap$Builder<(K), (V)>
public "putAll"(entries: $Iterable$$Type<($Map$Entry$$Type<(K), (V)>)>): $ImmutableMap$Builder<(K), (V)>
public "putAll"(map: $Map$$Type<(K), (V)>): $ImmutableMap$Builder<(K), (V)>
public "build"(): $ImmutableMap<(K), (V)>
public "orderEntriesByValue"(valueComparator: $Comparator$$Type<(V)>): $ImmutableMap$Builder<(K), (V)>
public "buildOrThrow"(): $ImmutableMap<(K), (V)>
public "buildKeepingLast"(): $ImmutableMap<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableMap$Builder$$Type<K, V> = ($ImmutableMap$Builder<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ImmutableMap$Builder$$Original<K, V> = $ImmutableMap$Builder<(K), (V)>;}
declare module "com.google.common.collect.Multiset" {
import {$Iterator} from "java.util.Iterator"
import {$Collection$$Type, $Collection$$Interface} from "java.util.Collection"
import {$Multiset$Entry} from "com.google.common.collect.Multiset$Entry"
import {$Spliterator} from "java.util.Spliterator"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$ObjIntConsumer$$Type} from "java.util.function.ObjIntConsumer"
import {$Set} from "java.util.Set"
import {$Stream} from "java.util.stream.Stream"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$IntFunction$$Type} from "java.util.function.IntFunction"

export interface $Multiset$$Interface<E> extends $Collection$$Interface<(E)> {
[Symbol.iterator](): IterableIterator<E>;
get "empty"(): boolean
}

export class $Multiset<E> implements $Multiset$$Interface {
 "remove"(element: any, occurrences: integer): integer
 "remove"(element: any): boolean
 "size"(): integer
 "equals"(object: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
 "add"(element: E): boolean
 "add"(element: E, occurrences: integer): integer
 "iterator"(): $Iterator<(E)>
 "count"(element: any): integer
 "contains"(element: any): boolean
 "spliterator"(): $Spliterator<(E)>
 "entrySet"(): $Set<($Multiset$Entry<(E)>)>
 "forEach"(action: $Consumer$$Type<(E)>): void
 "forEachEntry"(action: $ObjIntConsumer$$Type<(E)>): void
 "removeAll"(c: $Collection$$Type<(never)>): boolean
 "retainAll"(c: $Collection$$Type<(never)>): boolean
 "containsAll"(elements: $Collection$$Type<(never)>): boolean
 "setCount"(element: E, oldCount: integer, newCount: integer): boolean
 "setCount"(element: E, count: integer): integer
 "elementSet"(): $Set<(E)>
 "clear"(): void
 "isEmpty"(): boolean
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "toArray"(): (any)[]
 "stream"(): $Stream<(E)>
 "addAll"(arg0: $Collection$$Type<(E)>): boolean
 "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
 "parallelStream"(): $Stream<(E)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Multiset$$Type<E> = ($Multiset<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Multiset$$Original<E> = $Multiset<(E)>;}
declare module "com.google.common.collect.ImmutableMap" {
import {$Iterable$$Type} from "java.lang.Iterable"
import {$Collection} from "java.util.Collection"
import {$Map$$Type, $Map$$Interface} from "java.util.Map"
import {$ImmutableSet} from "com.google.common.collect.ImmutableSet"
import {$BinaryOperator$$Type} from "java.util.function.BinaryOperator"
import {$ImmutableSetMultimap} from "com.google.common.collect.ImmutableSetMultimap"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Function$$Type} from "java.util.function.Function"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Collector} from "java.util.stream.Collector"
import {$ImmutableMap$Builder} from "com.google.common.collect.ImmutableMap$Builder"
import {$Set} from "java.util.Set"

export class $ImmutableMap<K, V> implements $Map$$Interface<(K), (V)>, $Serializable$$Interface {
/**
 * 
 * @deprecated
 */
public "remove"(key: any, value: any): boolean
/**
 * 
 * @deprecated
 */
public "remove"(o: any): V
public "get"(key: any): V
/**
 * 
 * @deprecated
 */
public "put"(k: K, v: V): V
public "equals"(object: any): boolean
public "toString"(): StringJS
public "values"(): $Collection
public "hashCode"(): integer
public static "copyOf"<K, V>(entries: $Iterable$$Type<($Map$Entry$$Type<(K), (V)>)>): $ImmutableMap<(K), (V)>
public static "copyOf"<K, V>(map: $Map$$Type<(K), (V)>): $ImmutableMap<(K), (V)>
/**
 * 
 * @deprecated
 */
public "clear"(): void
public "isEmpty"(): boolean
/**
 * 
 * @deprecated
 */
public "replace"(key: K, oldValue: V, newValue: V): boolean
/**
 * 
 * @deprecated
 */
public "replace"(key: K, value: V): V
/**
 * 
 * @deprecated
 */
public "replaceAll"(arg0: $BiFunction$$Type<(K), (V), (V)>): void
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V): $ImmutableMap<(K), (V)>
public static "of"<K, V>(): $ImmutableMap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V): $ImmutableMap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V): $ImmutableMap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V, k5: K, v5: V, k6: K, v6: V, k7: K, v7: V): $ImmutableMap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V): $ImmutableMap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V, k5: K, v5: V, k6: K, v6: V, k7: K, v7: V, k8: K, v8: V): $ImmutableMap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V, k5: K, v5: V, k6: K, v6: V, k7: K, v7: V, k8: K, v8: V, k9: K, v9: V, k10: K, v10: V): $ImmutableMap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V, k5: K, v5: V, k6: K, v6: V): $ImmutableMap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V, k5: K, v5: V): $ImmutableMap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V, k5: K, v5: V, k6: K, v6: V, k7: K, v7: V, k8: K, v8: V, k9: K, v9: V): $ImmutableMap<(K), (V)>
public static "builder"<K, V>(): $ImmutableMap$Builder<(K), (V)>
/**
 * 
 * @deprecated
 */
public "merge"(key: K, value: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
public "entrySet"(): $Set
/**
 * 
 * @deprecated
 */
public "putAll"(map: $Map$$Type<(K), (V)>): void
/**
 * 
 * @deprecated
 */
public "putIfAbsent"(key: K, value: V): V
/**
 * 
 * @deprecated
 */
public "compute"(key: K, remappingFunction: $BiFunction$$Type<(K), (V), (V)>): V
public "containsKey"(key: any): boolean
/**
 * 
 * @deprecated
 */
public "computeIfAbsent"(key: K, mappingFunction: $Function$$Type<(K), (V)>): V
public "keySet"(): $ImmutableSet<(K)>
public "containsValue"(value: any): boolean
public "getOrDefault"(key: any, defaultValue: V): V
/**
 * 
 * @deprecated
 */
public "computeIfPresent"(key: K, remappingFunction: $BiFunction$$Type<(K), (V), (V)>): V
public static "ofEntries"<K, V>(...entries: ($Map$Entry$$Type<(K), (V)>)[]): $ImmutableMap<(K), (V)>
public "asMultimap"(): $ImmutableSetMultimap<(K), (V)>
public static "builderWithExpectedSize"<K, V>(expectedSize: integer): $ImmutableMap$Builder<(K), (V)>
public static "toImmutableMap"<T, K, V>(keyFunction: $Function$$Type<(T), (K)>, valueFunction: $Function$$Type<(T), (V)>, mergeFunction: $BinaryOperator$$Type<(V)>): $Collector<(T), (never), ($ImmutableMap<(K), (V)>)>
public static "toImmutableMap"<T, K, V>(keyFunction: $Function$$Type<(T), (K)>, valueFunction: $Function$$Type<(T), (V)>): $Collector<(T), (never), ($ImmutableMap<(K), (V)>)>
public "size"(): integer
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public "forEach"(arg0: $BiConsumer$$Type<(K), (V)>): void
[index: string | number]: V
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableMap$$Type<K, V> = ($ImmutableMap<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ImmutableMap$$Original<K, V> = $ImmutableMap<(K), (V)>;}
declare module "com.google.common.collect.BaseImmutableMultimap" {
import {$Iterable$$Type} from "java.lang.Iterable"
import {$Collection} from "java.util.Collection"
import {$Map} from "java.util.Map"
import {$Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Set} from "java.util.Set"
import {$Multiset} from "com.google.common.collect.Multiset"
import {$Map$Entry} from "java.util.Map$Entry"
import {$AbstractMultimap} from "com.google.common.collect.AbstractMultimap"

export class $BaseImmutableMultimap<K, V> extends $AbstractMultimap<(K), (V)> {
public "remove"(key: any, value: any): boolean
public "put"(key: K, value: V): boolean
public "equals"(obj: any): boolean
public "values"(): $Collection<(V)>
public "hashCode"(): integer
public "isEmpty"(): boolean
public "putAll"(key: K, values: $Iterable$$Type<(V)>): boolean
public "putAll"(multimap: $Multimap$$Type<(K), (V)>): boolean
public "keys"(): $Multiset<(K)>
public "keySet"(): $Set<(K)>
public "containsValue"(value: any): boolean
public "entries"(): $Collection<($Map$Entry<(K), (V)>)>
public "containsEntry"(key: any, value: any): boolean
public "replaceValues"(key: K, values: $Iterable$$Type<(V)>): $Collection<(V)>
public "asMap"(): $Map<(K), ($Collection<(V)>)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseImmutableMultimap$$Type<K, V> = ($BaseImmutableMultimap<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseImmutableMultimap$$Original<K, V> = $BaseImmutableMultimap<(K), (V)>;}
declare module "com.google.common.collect.ImmutableMultimap$Builder" {
import {$Iterable$$Type} from "java.lang.Iterable"
import {$ImmutableMultimap} from "com.google.common.collect.ImmutableMultimap"
import {$Comparator$$Type} from "java.util.Comparator"
import {$Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Map$Entry$$Type} from "java.util.Map$Entry"

export class $ImmutableMultimap$Builder<K, V> {
constructor()

public "put"(entry: $Map$Entry$$Type<(K), (V)>): $ImmutableMultimap$Builder<(K), (V)>
public "put"(key: K, value: V): $ImmutableMultimap$Builder<(K), (V)>
public "putAll"(multimap: $Multimap$$Type<(K), (V)>): $ImmutableMultimap$Builder<(K), (V)>
public "putAll"(key: K, ...values: (V)[]): $ImmutableMultimap$Builder<(K), (V)>
public "putAll"(key: K, values: $Iterable$$Type<(V)>): $ImmutableMultimap$Builder<(K), (V)>
public "putAll"(entries: $Iterable$$Type<($Map$Entry$$Type<(K), (V)>)>): $ImmutableMultimap$Builder<(K), (V)>
public "build"(): $ImmutableMultimap<(K), (V)>
public "orderKeysBy"(keyComparator: $Comparator$$Type<(K)>): $ImmutableMultimap$Builder<(K), (V)>
public "orderValuesBy"(valueComparator: $Comparator$$Type<(V)>): $ImmutableMultimap$Builder<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableMultimap$Builder$$Type<K, V> = ($ImmutableMultimap$Builder<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ImmutableMultimap$Builder$$Original<K, V> = $ImmutableMultimap$Builder<(K), (V)>;}
declare module "com.google.common.collect.UnmodifiableIterator" {
import {$Iterator$$Interface} from "java.util.Iterator"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $UnmodifiableIterator<E> implements $Iterator$$Interface<(E)> {
/**
 * 
 * @deprecated
 */
public "remove"(): void
public "forEachRemaining"(arg0: $Consumer$$Type<(E)>): void
public "hasNext"(): boolean
public "next"(): E
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnmodifiableIterator$$Type<E> = ($UnmodifiableIterator<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UnmodifiableIterator$$Original<E> = $UnmodifiableIterator<(E)>;}
declare module "com.google.common.collect.ImmutableMultimap" {
import {$Iterable$$Type} from "java.lang.Iterable"
import {$Collection} from "java.util.Collection"
import {$Map} from "java.util.Map"
import {$Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Map$Entry$$Type} from "java.util.Map$Entry"
import {$BaseImmutableMultimap} from "com.google.common.collect.BaseImmutableMultimap"
import {$ImmutableMultimap$Builder} from "com.google.common.collect.ImmutableMultimap$Builder"
import {$ImmutableCollection} from "com.google.common.collect.ImmutableCollection"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set} from "java.util.Set"
import {$Multiset} from "com.google.common.collect.Multiset"

export class $ImmutableMultimap<K, V> extends $BaseImmutableMultimap<(K), (V)> implements $Serializable$$Interface {
/**
 * 
 * @deprecated
 */
public "remove"(key: any, value: any): boolean
public "size"(): integer
public "get"(key: K): $ImmutableCollection<(V)>
/**
 * 
 * @deprecated
 */
public "put"(key: K, value: V): boolean
public "equals"(object: any): boolean
public "toString"(): StringJS
public "values"(): $Collection
public "hashCode"(): integer
public static "copyOf"<K, V>(multimap: $Multimap$$Type<(K), (V)>): $ImmutableMultimap<(K), (V)>
public static "copyOf"<K, V>(entries: $Iterable$$Type<($Map$Entry$$Type<(K), (V)>)>): $ImmutableMultimap<(K), (V)>
/**
 * 
 * @deprecated
 */
public "clear"(): void
public "isEmpty"(): boolean
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V, k5: K, v5: V): $ImmutableMultimap<(K), (V)>
public static "of"<K, V>(): $ImmutableMultimap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V): $ImmutableMultimap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V): $ImmutableMultimap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V): $ImmutableMultimap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V): $ImmutableMultimap<(K), (V)>
public static "builder"<K, V>(): $ImmutableMultimap$Builder<(K), (V)>
/**
 * 
 * @deprecated
 */
public "putAll"(multimap: $Multimap$$Type<(K), (V)>): boolean
/**
 * 
 * @deprecated
 */
public "putAll"(key: K, values: $Iterable$$Type<(V)>): boolean
public "forEach"(action: $BiConsumer$$Type<(K), (V)>): void
public "containsKey"(key: any): boolean
public "keys"(): $Multiset
public "keySet"(): $Set
public "containsValue"(value: any): boolean
public "entries"(): $Collection
/**
 * 
 * @deprecated
 */
public "removeAll"(key: any): $Collection
public "inverse"(): $ImmutableMultimap<(V), (K)>
public "containsEntry"(key: any, value: any): boolean
/**
 * 
 * @deprecated
 */
public "replaceValues"(key: any, values: $Iterable$$Type): $Collection
public "asMap"(): $Map
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableMultimap$$Type<K, V> = ($ImmutableMultimap<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ImmutableMultimap$$Original<K, V> = $ImmutableMultimap<(K), (V)>;}
declare module "com.google.common.collect.Table$Cell" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Table$Cell$$Interface<R, C, V> {
get "value"(): V
get "columnKey"(): C
get "rowKey"(): R
}

export class $Table$Cell<R, C, V> implements $Table$Cell$$Interface {
 "equals"(obj: any): boolean
 "hashCode"(): integer
 "getValue"(): V
 "getColumnKey"(): C
 "getRowKey"(): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Table$Cell$$Type<R, C, V> = ($Table$Cell<(R), (C), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Table$Cell$$Original<R, C, V> = $Table$Cell<(R), (C), (V)>;}
declare module "com.google.common.collect.ForwardingObject" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ForwardingObject {
public "toString"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForwardingObject$$Type = ($ForwardingObject);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ForwardingObject$$Original = $ForwardingObject;}
declare module "com.google.common.collect.BiMap" {
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$Collection} from "java.util.Collection"
import {$Map, $Map$$Type, $Map$$Interface} from "java.util.Map"
import {$Function$$Type} from "java.util.function.Function"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set} from "java.util.Set"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export interface $BiMap$$Interface<K, V> extends $Map$$Interface<(K), (V)> {
[index: string | number]: V
get "empty"(): boolean
}

export class $BiMap<K, V> implements $BiMap$$Interface {
 "put"(key: K, value: V): V
 "values"(): $Collection
 "putAll"(map: $Map$$Type<(K), (V)>): void
 "forcePut"(key: K, value: V): V
 "inverse"(): $BiMap<(V), (K)>
 "remove"(arg0: any, arg1: any): boolean
 "remove"(arg0: any): V
 "size"(): integer
 "get"(arg0: any): V
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
 "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
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
export type $BiMap$$Type<K, V> = ($BiMap<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BiMap$$Original<K, V> = $BiMap<(K), (V)>;}
declare module "com.google.common.collect.ImmutableList" {
import {$Iterable$$Type} from "java.lang.Iterable"
import {$Iterator$$Type} from "java.util.Iterator"
import {$RandomAccess$$Interface} from "java.util.RandomAccess"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$Collection$$Type} from "java.util.Collection"
import {$SequencedCollection} from "java.util.SequencedCollection"
import {$Comparable} from "java.lang.Comparable"
import {$Comparator$$Type} from "java.util.Comparator"
import {$Spliterator} from "java.util.Spliterator"
import {$List, $List$$Interface} from "java.util.List"
import {$UnmodifiableIterator} from "com.google.common.collect.UnmodifiableIterator"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ListIterator} from "java.util.ListIterator"
import {$ImmutableCollection} from "com.google.common.collect.ImmutableCollection"
import {$ImmutableList$Builder} from "com.google.common.collect.ImmutableList$Builder"
import {$Collector} from "java.util.stream.Collector"

export class $ImmutableList<E> extends $ImmutableCollection<(E)> implements $List$$Interface<(E)>, $RandomAccess$$Interface {
/**
 * 
 * @deprecated
 */
public "remove"(index: integer): E
public "equals"(obj: any): boolean
public "hashCode"(): integer
public "reverse"(): $ImmutableList<(E)>
public static "copyOf"<E>(elements: (E)[]): $ImmutableList<(E)>
public static "copyOf"<E>(elements: $Collection$$Type<(E)>): $ImmutableList<(E)>
public static "copyOf"<E>(elements: $Iterable$$Type<(E)>): $ImmutableList<(E)>
public static "copyOf"<E>(elements: $Iterator$$Type<(E)>): $ImmutableList<(E)>
public "indexOf"(object: any): integer
public "lastIndexOf"(object: any): integer
/**
 * 
 * @deprecated
 */
public "replaceAll"(operator: $UnaryOperator$$Type<(E)>): void
/**
 * 
 * @deprecated
 */
public "add"(index: integer, element: E): void
public "subList"(fromIndex: integer, toIndex: integer): $List
public "iterator"(): $UnmodifiableIterator<(E)>
public static "of"<E>(e1: E, e2: E, e3: E, e4: E, e5: E): $ImmutableList<(E)>
public static "of"<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $ImmutableList<(E)>
public static "of"<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $ImmutableList<(E)>
public static "of"<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $ImmutableList<(E)>
public static "of"<E>(e1: E, e2: E): $ImmutableList<(E)>
public static "of"<E>(e1: E, e2: E, e3: E, e4: E): $ImmutableList<(E)>
public static "of"<E>(e1: E, e2: E, e3: E): $ImmutableList<(E)>
public static "of"<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E, e10: E, e11: E, e12: E, ...others: (E)[]): $ImmutableList<(E)>
public static "of"<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E, e10: E, e11: E): $ImmutableList<(E)>
public static "of"<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E, e10: E): $ImmutableList<(E)>
public static "of"<E>(): $ImmutableList<(E)>
public static "of"<E>(element: E): $ImmutableList<(E)>
public static "of"<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $ImmutableList<(E)>
public static "builder"<E>(): $ImmutableList$Builder<(E)>
public "contains"(object: any): boolean
public "spliterator"(): $Spliterator<(E)>
/**
 * 
 * @deprecated
 */
public "addAll"(index: integer, newElements: $Collection$$Type<(E)>): boolean
/**
 * 
 * @deprecated
 */
public "set"(index: integer, element: E): E
public "forEach"(consumer: $Consumer$$Type<(E)>): void
/**
 * 
 * @deprecated
 */
public "sort"(c: $Comparator$$Type<(E)>): void
/**
 * 
 * @deprecated
 */
public "asList"(): $ImmutableList<(E)>
public "listIterator"(index: integer): $ListIterator
public "listIterator"(): $ListIterator
public static "builderWithExpectedSize"<E>(expectedSize: integer): $ImmutableList$Builder<(E)>
public static "sortedCopyOf"<E>(comparator: $Comparator$$Type<(E)>, elements: $Iterable$$Type<(E)>): $ImmutableList<(E)>
public static "sortedCopyOf"<E extends $Comparable<(object)>>(elements: $Iterable$$Type<(E)>): $ImmutableList<(E)>
public static "toImmutableList"<E>(): $Collector<(E), (never), ($ImmutableList<(E)>)>
public "remove"(arg0: any): boolean
public "size"(): integer
public "get"(arg0: integer): E
public "clear"(): void
public "isEmpty"(): boolean
public "add"(arg0: E): boolean
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public "addAll"(arg0: $Collection$$Type<(E)>): boolean
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
export type $ImmutableList$$Type<E> = ($ImmutableList<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ImmutableList$$Original<E> = $ImmutableList<(E)>;}
declare module "com.google.common.collect.ImmutableSet" {
import {$Iterable$$Type} from "java.lang.Iterable"
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Collection$$Type} from "java.util.Collection"
import {$Spliterator} from "java.util.Spliterator"
import {$ImmutableCollection} from "com.google.common.collect.ImmutableCollection"
import {$Collector} from "java.util.stream.Collector"
import {$Set, $Set$$Interface} from "java.util.Set"
import {$ImmutableSet$Builder} from "com.google.common.collect.ImmutableSet$Builder"

export class $ImmutableSet<E> extends $ImmutableCollection<(E)> implements $Set$$Interface<(E)> {
public "equals"(object: any): boolean
public "hashCode"(): integer
public static "copyOf"<E>(elements: $Iterator$$Type<(E)>): $ImmutableSet<(E)>
public static "copyOf"<E>(elements: $Iterable$$Type<(E)>): $ImmutableSet<(E)>
public static "copyOf"<E>(elements: $Collection$$Type<(E)>): $ImmutableSet<(E)>
public static "copyOf"<E>(elements: (E)[]): $ImmutableSet<(E)>
public "iterator"(): $Iterator
public static "of"<E>(e1: E, e2: E, e3: E, e4: E): $ImmutableSet<(E)>
public static "of"<E>(): $ImmutableSet<(E)>
public static "of"<E>(e1: E, e2: E, e3: E): $ImmutableSet<(E)>
public static "of"<E>(element: E): $ImmutableSet<(E)>
public static "of"<E>(e1: E, e2: E): $ImmutableSet<(E)>
public static "of"<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, ...others: (E)[]): $ImmutableSet<(E)>
public static "of"<E>(e1: E, e2: E, e3: E, e4: E, e5: E): $ImmutableSet<(E)>
public static "builder"<E>(): $ImmutableSet$Builder<(E)>
public static "builderWithExpectedSize"<E>(expectedSize: integer): $ImmutableSet$Builder<(E)>
public static "toImmutableSet"<E>(): $Collector<(E), (never), ($ImmutableSet<(E)>)>
public "remove"(arg0: any): boolean
public "size"(): integer
public "clear"(): void
public "isEmpty"(): boolean
public "add"(arg0: E): boolean
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $Set<(E)>
public static "of"<E>(...arg0: (E)[]): $Set<(E)>
public "contains"(arg0: any): boolean
public "spliterator"(): $Spliterator<(E)>
public "addAll"(arg0: $Collection$$Type<(E)>): boolean
public "removeAll"(arg0: $Collection$$Type<(never)>): boolean
public "retainAll"(arg0: $Collection$$Type<(never)>): boolean
public "containsAll"(arg0: $Collection$$Type<(never)>): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableSet$$Type<E> = ($ImmutableSet<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ImmutableSet$$Original<E> = $ImmutableSet<(E)>;}
declare module "com.google.common.collect.ImmutableList$Builder" {
import {$Iterable$$Type} from "java.lang.Iterable"
import {$Iterator$$Type} from "java.util.Iterator"
import {$ImmutableCollection} from "com.google.common.collect.ImmutableCollection"
import {$ImmutableCollection$Builder} from "com.google.common.collect.ImmutableCollection$Builder"

export class $ImmutableList$Builder<E> extends $ImmutableCollection$Builder<(E)> {
constructor()

public "add"(element: any): $ImmutableCollection$Builder
public "add"(elements: (any)[]): $ImmutableCollection$Builder
public "addAll"(elements: $Iterator$$Type<(E)>): $ImmutableList$Builder<(E)>
public "addAll"(elements: $Iterable$$Type): $ImmutableCollection$Builder
public "build"(): $ImmutableCollection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableList$Builder$$Type<E> = ($ImmutableList$Builder<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ImmutableList$Builder$$Original<E> = $ImmutableList$Builder<(E)>;}
declare module "com.google.common.collect.ImmutableSetMultimap" {
import {$Iterable$$Type} from "java.lang.Iterable"
import {$SetMultimap$$Interface} from "com.google.common.collect.SetMultimap"
import {$Collection} from "java.util.Collection"
import {$Map} from "java.util.Map"
import {$Multimap$$Type} from "com.google.common.collect.Multimap"
import {$ImmutableSet} from "com.google.common.collect.ImmutableSet"
import {$ImmutableSetMultimap$Builder} from "com.google.common.collect.ImmutableSetMultimap$Builder"
import {$Map$Entry$$Type} from "java.util.Map$Entry"
import {$ImmutableMultimap} from "com.google.common.collect.ImmutableMultimap"
import {$Function$$Type} from "java.util.function.Function"
import {$Collector} from "java.util.stream.Collector"
import {$Set} from "java.util.Set"
import {$Stream$$Type} from "java.util.stream.Stream"
import {$Multiset} from "com.google.common.collect.Multiset"

export class $ImmutableSetMultimap<K, V> extends $ImmutableMultimap<(K), (V)> implements $SetMultimap$$Interface<(K), (V)> {
public "get"(key: any): $Collection
public static "copyOf"<K, V>(multimap: $Multimap$$Type<(K), (V)>): $ImmutableSetMultimap<(K), (V)>
public static "copyOf"<K, V>(entries: $Iterable$$Type<($Map$Entry$$Type<(K), (V)>)>): $ImmutableSetMultimap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V): $ImmutableSetMultimap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V): $ImmutableSetMultimap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V): $ImmutableSetMultimap<(K), (V)>
public static "of"<K, V>(): $ImmutableSetMultimap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V, k5: K, v5: V): $ImmutableSetMultimap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V): $ImmutableSetMultimap<(K), (V)>
public static "builder"<K, V>(): $ImmutableSetMultimap$Builder<(K), (V)>
public "entries"(): $Collection
/**
 * 
 * @deprecated
 */
public "removeAll"(key: any): $ImmutableSet<(V)>
public static "toImmutableSetMultimap"<T, K, V>(keyFunction: $Function$$Type<(T), (K)>, valueFunction: $Function$$Type<(T), (V)>): $Collector<(T), (never), ($ImmutableSetMultimap<(K), (V)>)>
public static "flatteningToImmutableSetMultimap"<T, K, V>(keyFunction: $Function$$Type<(T), (K)>, valuesFunction: $Function$$Type<(T), ($Stream$$Type<(V)>)>): $Collector<(T), (never), ($ImmutableSetMultimap<(K), (V)>)>
public "inverse"(): $ImmutableSetMultimap<(V), (K)>
/**
 * 
 * @deprecated
 */
public "replaceValues"(key: any, values: $Iterable$$Type): $Collection
public "equals"(obj: any): boolean
public "asMap"(): $Map<(K), ($Collection<(V)>)>
public "values"(): $Collection
public "keys"(): $Multiset
public "keySet"(): $Set
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableSetMultimap$$Type<K, V> = ($ImmutableSetMultimap<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ImmutableSetMultimap$$Original<K, V> = $ImmutableSetMultimap<(K), (V)>;}
declare module "com.google.common.collect.Interner" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Interner$$Interface<E> {

(sample: E): E
}

export class $Interner<E> implements $Interner$$Interface {
 "intern"(sample: E): E
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Interner$$Type<E> = ((sample: E) => E);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Interner$$Original<E> = $Interner<(E)>;}
declare module "com.google.common.collect.Multimap" {
import {$Iterable$$Type} from "java.lang.Iterable"
import {$Collection} from "java.util.Collection"
import {$Map} from "java.util.Map"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set} from "java.util.Set"
import {$Multiset} from "com.google.common.collect.Multiset"
import {$Map$Entry} from "java.util.Map$Entry"

export interface $Multimap$$Interface<K, V> {
get "empty"(): boolean
}

export class $Multimap<K, V> implements $Multimap$$Interface {
 "remove"(key: any, value: any): boolean
 "size"(): integer
 "get"(key: K): $Collection<(V)>
 "put"(key: K, value: V): boolean
 "equals"(obj: any): boolean
 "values"(): $Collection<(V)>
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "putAll"(key: K, values: $Iterable$$Type<(V)>): boolean
 "putAll"(multimap: $Multimap$$Type<(K), (V)>): boolean
 "forEach"(action: $BiConsumer$$Type<(K), (V)>): void
 "containsKey"(key: any): boolean
 "keys"(): $Multiset<(K)>
 "keySet"(): $Set<(K)>
 "containsValue"(value: any): boolean
 "entries"(): $Collection<($Map$Entry<(K), (V)>)>
 "removeAll"(key: any): $Collection<(V)>
 "containsEntry"(key: any, value: any): boolean
 "replaceValues"(key: K, values: $Iterable$$Type<(V)>): $Collection<(V)>
 "asMap"(): $Map<(K), ($Collection<(V)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Multimap$$Type<K, V> = ($Multimap<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Multimap$$Original<K, V> = $Multimap<(K), (V)>;}
declare module "com.google.common.collect.Table" {
import {$Collection} from "java.util.Collection"
import {$Map} from "java.util.Map"
import {$Set} from "java.util.Set"
import {$Table$Cell} from "com.google.common.collect.Table$Cell"

export interface $Table$$Interface<R, C, V> {
get "empty"(): boolean
}

export class $Table<R, C, V> implements $Table$$Interface {
 "row"(rowKey: R): $Map<(C), (V)>
 "remove"(rowKey: any, columnKey: any): V
 "size"(): integer
 "get"(rowKey: any, columnKey: any): V
 "put"(rowKey: R, columnKey: C, value: V): V
 "equals"(obj: any): boolean
 "values"(): $Collection<(V)>
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "contains"(rowKey: any, columnKey: any): boolean
 "putAll"(table: $Table$$Type<(R), (C), (V)>): void
 "containsValue"(value: any): boolean
 "column"(columnKey: C): $Map<(R), (V)>
 "columnKeySet"(): $Set<(C)>
 "containsRow"(rowKey: any): boolean
 "containsColumn"(columnKey: any): boolean
 "rowMap"(): $Map<(R), ($Map<(C), (V)>)>
 "cellSet"(): $Set<($Table$Cell<(R), (C), (V)>)>
 "rowKeySet"(): $Set<(R)>
 "columnMap"(): $Map<(C), ($Map<(R), (V)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Table$$Type<R, C, V> = ($Table<(R), (C), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Table$$Original<R, C, V> = $Table<(R), (C), (V)>;}
declare module "com.google.common.collect.Multiset$Entry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Multiset$Entry$$Interface<E> {
get "count"(): integer
get "element"(): E
}

export class $Multiset$Entry<E> implements $Multiset$Entry$$Interface {
 "equals"(o: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
 "getCount"(): integer
 "getElement"(): E
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Multiset$Entry$$Type<E> = ($Multiset$Entry<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Multiset$Entry$$Original<E> = $Multiset$Entry<(E)>;}
declare module "com.google.common.collect.ImmutableSet$Builder" {
import {$Iterable$$Type} from "java.lang.Iterable"
import {$Iterator$$Type} from "java.util.Iterator"
import {$ImmutableCollection} from "com.google.common.collect.ImmutableCollection"
import {$ImmutableCollection$Builder} from "com.google.common.collect.ImmutableCollection$Builder"

export class $ImmutableSet$Builder<E> extends $ImmutableCollection$Builder<(E)> {
constructor()

public "add"(element: E): $ImmutableSet$Builder<(E)>
public "add"(...elements: (E)[]): $ImmutableSet$Builder<(E)>
public "addAll"(elements: $Iterator$$Type): $ImmutableCollection$Builder
public "addAll"(elements: $Iterable$$Type): $ImmutableCollection$Builder
public "build"(): $ImmutableCollection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableSet$Builder$$Type<E> = ($ImmutableSet$Builder<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ImmutableSet$Builder$$Original<E> = $ImmutableSet$Builder<(E)>;}
declare module "com.google.common.collect.SetMultimap" {
import {$Iterable$$Type} from "java.lang.Iterable"
import {$Collection} from "java.util.Collection"
import {$Map} from "java.util.Map"
import {$Multimap$$Type, $Multimap$$Interface} from "com.google.common.collect.Multimap"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set} from "java.util.Set"
import {$Multiset} from "com.google.common.collect.Multiset"

export interface $SetMultimap$$Interface<K, V> extends $Multimap$$Interface<(K), (V)> {
get "empty"(): boolean
}

export class $SetMultimap<K, V> implements $SetMultimap$$Interface {
 "get"(key: K): $Set<(V)>
 "equals"(obj: any): boolean
 "entries"(): $Collection
 "removeAll"(key: any): $Set<(V)>
 "replaceValues"(key: any, values: $Iterable$$Type): $Collection
 "asMap"(): $Map<(K), ($Collection<(V)>)>
 "remove"(key: any, value: any): boolean
 "size"(): integer
 "put"(key: K, value: V): boolean
 "values"(): $Collection<(V)>
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "putAll"(key: K, values: $Iterable$$Type<(V)>): boolean
 "putAll"(multimap: $Multimap$$Type<(K), (V)>): boolean
 "forEach"(action: $BiConsumer$$Type<(K), (V)>): void
 "containsKey"(key: any): boolean
 "keys"(): $Multiset<(K)>
 "keySet"(): $Set<(K)>
 "containsValue"(value: any): boolean
 "containsEntry"(key: any, value: any): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SetMultimap$$Type<K, V> = ($SetMultimap<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SetMultimap$$Original<K, V> = $SetMultimap<(K), (V)>;}
declare module "com.google.common.collect.ImmutableSetMultimap$Builder" {
import {$Iterable$$Type} from "java.lang.Iterable"
import {$ImmutableMultimap} from "com.google.common.collect.ImmutableMultimap"
import {$Comparator$$Type} from "java.util.Comparator"
import {$ImmutableMultimap$Builder} from "com.google.common.collect.ImmutableMultimap$Builder"
import {$Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Map$Entry$$Type} from "java.util.Map$Entry"

export class $ImmutableSetMultimap$Builder<K, V> extends $ImmutableMultimap$Builder<(K), (V)> {
constructor()

public "put"(entry: $Map$Entry$$Type<(K), (V)>): $ImmutableSetMultimap$Builder<(K), (V)>
public "put"(key: any, value: any): $ImmutableMultimap$Builder
public "putAll"(entries: $Iterable$$Type): $ImmutableMultimap$Builder
public "putAll"(key: any, values: $Iterable$$Type): $ImmutableMultimap$Builder
public "putAll"(key: any, values: (any)[]): $ImmutableMultimap$Builder
public "putAll"(multimap: $Multimap$$Type): $ImmutableMultimap$Builder
public "build"(): $ImmutableMultimap
public "orderKeysBy"(keyComparator: $Comparator$$Type<(K)>): $ImmutableSetMultimap$Builder<(K), (V)>
public "orderValuesBy"(valueComparator: $Comparator$$Type<(V)>): $ImmutableSetMultimap$Builder<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableSetMultimap$Builder$$Type<K, V> = ($ImmutableSetMultimap$Builder<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ImmutableSetMultimap$Builder$$Original<K, V> = $ImmutableSetMultimap$Builder<(K), (V)>;}
declare module "com.google.common.collect.ForwardingMultimap" {
import {$Iterable$$Type} from "java.lang.Iterable"
import {$Collection} from "java.util.Collection"
import {$Map} from "java.util.Map"
import {$Multimap$$Type, $Multimap$$Interface} from "com.google.common.collect.Multimap"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set} from "java.util.Set"
import {$ForwardingObject} from "com.google.common.collect.ForwardingObject"
import {$Multiset} from "com.google.common.collect.Multiset"
import {$Map$Entry} from "java.util.Map$Entry"

export class $ForwardingMultimap<K, V> extends $ForwardingObject implements $Multimap$$Interface<(K), (V)> {
public "remove"(key: any, value: any): boolean
public "size"(): integer
public "get"(key: K): $Collection<(V)>
public "put"(key: K, value: V): boolean
public "equals"(object: any): boolean
public "values"(): $Collection<(V)>
public "hashCode"(): integer
public "clear"(): void
public "isEmpty"(): boolean
public "putAll"(multimap: $Multimap$$Type<(K), (V)>): boolean
public "putAll"(key: K, values: $Iterable$$Type<(V)>): boolean
public "containsKey"(key: any): boolean
public "keys"(): $Multiset<(K)>
public "keySet"(): $Set<(K)>
public "containsValue"(value: any): boolean
public "entries"(): $Collection<($Map$Entry<(K), (V)>)>
public "removeAll"(key: any): $Collection<(V)>
public "containsEntry"(key: any, value: any): boolean
public "replaceValues"(key: K, values: $Iterable$$Type<(V)>): $Collection<(V)>
public "asMap"(): $Map<(K), ($Collection<(V)>)>
public "forEach"(action: $BiConsumer$$Type<(K), (V)>): void
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForwardingMultimap$$Type<K, V> = ($ForwardingMultimap<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ForwardingMultimap$$Original<K, V> = $ForwardingMultimap<(K), (V)>;}
declare module "com.google.common.collect.ImmutableCollection" {
import {$Collection$$Type} from "java.util.Collection"
import {$Spliterator} from "java.util.Spliterator"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$UnmodifiableIterator} from "com.google.common.collect.UnmodifiableIterator"
import {$ImmutableList} from "com.google.common.collect.ImmutableList"
import {$AbstractCollection} from "java.util.AbstractCollection"

export class $ImmutableCollection<E> extends $AbstractCollection<(E)> implements $Serializable$$Interface {
/**
 * 
 * @deprecated
 */
public "remove"(object: any): boolean
/**
 * 
 * @deprecated
 */
public "clear"(): void
/**
 * 
 * @deprecated
 */
public "add"(e: E): boolean
public "toArray"(): (any)[]
public "toArray"<T>(other: (T)[]): (T)[]
public "iterator"(): $UnmodifiableIterator<(E)>
public "contains"(object: any): boolean
public "spliterator"(): $Spliterator<(E)>
/**
 * 
 * @deprecated
 */
public "addAll"(newElements: $Collection$$Type<(E)>): boolean
public "asList"(): $ImmutableList<(E)>
/**
 * 
 * @deprecated
 */
public "removeIf"(filter: $Predicate$$Type<(E)>): boolean
/**
 * 
 * @deprecated
 */
public "removeAll"(oldElements: $Collection$$Type<(never)>): boolean
/**
 * 
 * @deprecated
 */
public "retainAll"(elementsToKeep: $Collection$$Type<(never)>): boolean
public "equals"(arg0: any): boolean
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableCollection$$Type<E> = ($ImmutableCollection<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ImmutableCollection$$Original<E> = $ImmutableCollection<(E)>;}
declare module "com.google.common.collect.ImmutableCollection$Builder" {
import {$Iterable$$Type} from "java.lang.Iterable"
import {$Iterator$$Type} from "java.util.Iterator"
import {$ImmutableCollection} from "com.google.common.collect.ImmutableCollection"

export class $ImmutableCollection$Builder<E> {
public "add"(element: E): $ImmutableCollection$Builder<(E)>
public "add"(...elements: (E)[]): $ImmutableCollection$Builder<(E)>
public "addAll"(elements: $Iterator$$Type<(E)>): $ImmutableCollection$Builder<(E)>
public "addAll"(elements: $Iterable$$Type<(E)>): $ImmutableCollection$Builder<(E)>
public "build"(): $ImmutableCollection<(E)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableCollection$Builder$$Type<E> = ($ImmutableCollection$Builder<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ImmutableCollection$Builder$$Original<E> = $ImmutableCollection$Builder<(E)>;}
