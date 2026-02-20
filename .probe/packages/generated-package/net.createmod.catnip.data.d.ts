declare module "net.createmod.catnip.data.Couple" {
import {$Iterable$$Interface} from "java.lang.Iterable"
import {$Iterator} from "java.util.Iterator"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Spliterator} from "java.util.Spliterator"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Pair} from "net.createmod.catnip.data.Pair"
import {$ListTag, $ListTag$$Type} from "net.minecraft.nbt.ListTag"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Stream} from "java.util.stream.Stream"

export class $Couple<T> extends $Pair<(T), (T)> implements $Iterable$$Interface<(T)> {
public "get"(arg0: boolean): T
public "replace"(arg0: $Function$$Type<(T), (T)>): void
public "iterator"(): $Iterator<(T)>
public "map"<S>(arg0: $Function$$Type<(T), (S)>): $Couple<(S)>
public "stream"(): $Stream<(T)>
public "set"(arg0: boolean, arg1: T): void
public "forEach"(arg0: $Consumer$$Type<(T)>): void
public "copy"(): $Couple<(T)>
public static "create"<T>(arg0: T, arg1: T): $Couple<(T)>
public static "create"<T>(arg0: $Supplier$$Type<(T)>): $Couple<(T)>
public "swap"(): $Couple<(T)>
public static "createWithContext"<T>(arg0: $Function$$Type<(boolean), (T)>): $Couple<(T)>
public "replaceWithContext"(arg0: $BiFunction$$Type<(T), (boolean), (T)>): void
public "forEachWithParams"<S>(arg0: $BiConsumer$$Type<(T), (S)>, arg1: $Couple$$Type<(S)>): void
public static "deserializeEach"<S>(arg0: $ListTag$$Type, arg1: $Function$$Type<($CompoundTag), (S)>): $Couple<(S)>
public "serializeEach"(arg0: $Function$$Type<(T), ($CompoundTag$$Type)>): $ListTag
public "mapWithContext"<S>(arg0: $BiFunction$$Type<(T), (boolean), (S)>): $Couple<(S)>
public "replaceWithParams"<S>(arg0: $BiFunction$$Type<(T), (S), (T)>, arg1: $Couple$$Type<(S)>): void
public "mapWithParams"<S, R>(arg0: $BiFunction$$Type<(T), (R), (S)>, arg1: $Couple$$Type<(R)>): $Couple<(S)>
public "forEachWithContext"(arg0: $BiConsumer$$Type<(T), (boolean)>): void
public static "codec"<T>(arg0: $Codec$$Type<(T)>): $Codec<($Couple<(T)>)>
public "either"(arg0: $Predicate$$Type<(T)>): boolean
public "mapNotNull"<S>(arg0: $Function$$Type<(T), (S)>): $Couple<(S)>
public static "streamCodec"<B, T>(arg0: $StreamCodec$$Type<(B), (T)>): $StreamCodec<(B), ($Couple<(T)>)>
public "both"(arg0: $Predicate$$Type<(T)>): boolean
public "mapNotNullWithParam"<S, R>(arg0: $BiFunction$$Type<(T), (R), (S)>, arg1: R): $Couple<(S)>
public "spliterator"(): $Spliterator<(T)>
[Symbol.iterator](): IterableIterator<T>;
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Couple$$Type<T> = ($Couple<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Couple$$Original<T> = $Couple<(T)>;}
declare module "net.createmod.catnip.data.Pair" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"

export class $Pair<F, S> {
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"<F, S>(arg0: F, arg1: S): $Pair<(F), (S)>
public "copy"(): $Pair<(F), (S)>
public "getFirst"(): F
public "swap"(): $Pair<(S), (F)>
public "getSecond"(): S
public static "codec"<F, S>(arg0: $Codec$$Type<(F)>, arg1: $Codec$$Type<(S)>): $Codec<($Pair<(F), (S)>)>
public static "streamCodec"<B, F, S>(arg0: $StreamCodec$$Type<(B), (F)>, arg1: $StreamCodec$$Type<(B), (S)>): $StreamCodec<(B), ($Pair<(F), (S)>)>
public "setFirst"(arg0: F): void
public "setSecond"(arg0: S): void
get "first"(): F
get "second"(): S
set "first"(value: F)
set "second"(value: S)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pair$$Type<F, S> = ($Pair<(F), (S)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Pair$$Original<F, S> = $Pair<(F), (S)>;}
declare module "net.createmod.catnip.data.WorldAttached" {
import {$Function$$Type} from "java.util.function.Function"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $WorldAttached<T> {
constructor(arg0: $Function$$Type<($LevelAccessor), (T)>)

public "get"(arg0: $LevelAccessor$$Type): T
public "put"(arg0: $LevelAccessor$$Type, arg1: T): void
public "replace"(arg0: $LevelAccessor$$Type, arg1: $Consumer$$Type<(T)>): T
public "replace"(arg0: $LevelAccessor$$Type): T
public "empty"(arg0: $BiConsumer$$Type<($LevelAccessor), (T)>): void
public "empty"(arg0: $Consumer$$Type<(T)>): void
public static "invalidateWorld"(arg0: $LevelAccessor$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldAttached$$Type<T> = ($WorldAttached<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldAttached$$Original<T> = $WorldAttached<(T)>;}
