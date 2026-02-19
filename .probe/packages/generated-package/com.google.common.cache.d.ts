declare module "com.google.common.cache.LoadingCache" {
import {$Iterable$$Type} from "java.lang.Iterable"
import {$CacheStats} from "com.google.common.cache.CacheStats"
import {$Callable$$Type} from "java.util.concurrent.Callable"
import {$Map$$Type} from "java.util.Map"
import {$Function as $Function$0, $Function$$Type as $Function$0$$Type} from "java.util.function.Function"
import {$ConcurrentMap} from "java.util.concurrent.ConcurrentMap"
import {$Cache$$Interface} from "com.google.common.cache.Cache"
import {$Function$$Interface} from "com.google.common.base.Function"
import {$ImmutableMap} from "com.google.common.collect.ImmutableMap"

export interface $LoadingCache$$Interface<K, V> extends $Cache$$Interface<(K), (V)>, $Function$$Interface<(K), (V)> {
}

export class $LoadingCache<K, V> implements $LoadingCache$$Interface {
 "refresh"(key: K): void
 "get"(key: K): V
/**
 * 
 * @deprecated
 */
 "apply"(key: K): V
 "getAll"(keys: $Iterable$$Type<(K)>): $ImmutableMap<(K), (V)>
 "getUnchecked"(key: K): V
 "asMap"(): $ConcurrentMap<(K), (V)>
 "invalidate"(key: any): void
 "size"(): long
 "get"(key: K, loader: $Callable$$Type<(V)>): V
 "put"(key: K, value: V): void
 "putAll"(m: $Map$$Type<(K), (V)>): void
 "getAllPresent"(keys: $Iterable$$Type<(never)>): $ImmutableMap<(K), (V)>
 "getIfPresent"(key: any): V
 "invalidateAll"(): void
 "invalidateAll"(keys: $Iterable$$Type<(never)>): void
 "stats"(): $CacheStats
 "cleanUp"(): void
 "equals"(object: any): boolean
static "identity"<T>(): $Function$0<(K), (K)>
 "compose"<V>(arg0: $Function$0$$Type<(V), (K)>): $Function$0<(V), (V)>
 "andThen"<V>(arg0: $Function$0$$Type<(V), (V)>): $Function$0<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoadingCache$$Type<K, V> = ($LoadingCache<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LoadingCache$$Original<K, V> = $LoadingCache<(K), (V)>;}
declare module "com.google.common.cache.CacheStats" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CacheStats {
constructor(hitCount: long, missCount: long, loadSuccessCount: long, loadExceptionCount: long, totalLoadTime: long, evictionCount: long)

public "equals"(object: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "minus"(other: $CacheStats$$Type): $CacheStats
public "plus"(other: $CacheStats$$Type): $CacheStats
public "loadExceptionRate"(): double
public "loadSuccessCount"(): long
public "totalLoadTime"(): long
public "requestCount"(): long
public "evictionCount"(): long
public "averageLoadPenalty"(): double
public "loadExceptionCount"(): long
public "missRate"(): double
public "hitRate"(): double
public "loadCount"(): long
public "missCount"(): long
public "hitCount"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CacheStats$$Type = ($CacheStats);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CacheStats$$Original = $CacheStats;}
declare module "com.google.common.cache.Cache" {
import {$Iterable$$Type} from "java.lang.Iterable"
import {$CacheStats} from "com.google.common.cache.CacheStats"
import {$Callable$$Type} from "java.util.concurrent.Callable"
import {$Map$$Type} from "java.util.Map"
import {$ConcurrentMap} from "java.util.concurrent.ConcurrentMap"
import {$ImmutableMap} from "com.google.common.collect.ImmutableMap"

export interface $Cache$$Interface<K, V> {
}

export class $Cache<K, V> implements $Cache$$Interface {
 "invalidate"(key: any): void
 "size"(): long
 "get"(key: K, loader: $Callable$$Type<(V)>): V
 "put"(key: K, value: V): void
 "putAll"(m: $Map$$Type<(K), (V)>): void
 "getAllPresent"(keys: $Iterable$$Type<(never)>): $ImmutableMap<(K), (V)>
 "getIfPresent"(key: any): V
 "invalidateAll"(): void
 "invalidateAll"(keys: $Iterable$$Type<(never)>): void
 "asMap"(): $ConcurrentMap<(K), (V)>
 "stats"(): $CacheStats
 "cleanUp"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Cache$$Type<K, V> = ($Cache<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Cache$$Original<K, V> = $Cache<(K), (V)>;}
