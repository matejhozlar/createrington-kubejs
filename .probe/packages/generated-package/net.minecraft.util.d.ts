declare module "net.minecraft.util.SignatureUpdater" {
import {$SignatureUpdater$Output, $SignatureUpdater$Output$$Type} from "net.minecraft.util.SignatureUpdater$Output"

export interface $SignatureUpdater$$Interface {

(arg0: $SignatureUpdater$Output): void
}

export class $SignatureUpdater implements $SignatureUpdater$$Interface {
 "update"(arg0: $SignatureUpdater$Output$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignatureUpdater$$Type = ((arg0: $SignatureUpdater$Output) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SignatureUpdater$$Original = $SignatureUpdater;}
declare module "net.minecraft.util.ProblemReporter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ProblemReporter$$Interface {
}

export class $ProblemReporter implements $ProblemReporter$$Interface {
 "forChild"(arg0: StringJS): $ProblemReporter
 "report"(arg0: StringJS): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProblemReporter$$Type = ($ProblemReporter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProblemReporter$$Original = $ProblemReporter;}
declare module "net.minecraft.util.StringRepresentable$EnumCodec" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$Encoder, $Encoder$$Type} from "com.mojang.serialization.Encoder"
import {$Decoder$Terminal$$Type} from "com.mojang.serialization.Decoder$Terminal"
import {$MapDecoder$$Type} from "com.mojang.serialization.MapDecoder"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Either} from "com.mojang.datafixers.util.Either"
import {$Decoder, $Decoder$$Type} from "com.mojang.serialization.Decoder"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Decoder$Boxed$$Type} from "com.mojang.serialization.Decoder$Boxed"
import {$Map} from "java.util.Map"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$DataResult} from "com.mojang.serialization.DataResult"
import {$SimpleMapCodec} from "com.mojang.serialization.codecs.SimpleMapCodec"
import {$Decoder$Simple$$Type} from "com.mojang.serialization.Decoder$Simple"
import {$UnboundedMapCodec} from "com.mojang.serialization.codecs.UnboundedMapCodec"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$StringRepresentableCodec} from "net.minecraft.util.StringRepresentable$StringRepresentableCodec"
import {$MapEncoder, $MapEncoder$$Type} from "com.mojang.serialization.MapEncoder"
import {$Lifecycle$$Type} from "com.mojang.serialization.Lifecycle"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

/**
 * 
 * @deprecated
 */
export class $StringRepresentable$EnumCodec<E extends $Enum<(object)>> extends $StringRepresentable$StringRepresentableCodec<(E)> {
constructor(arg0: (E)[], arg1: $Function$$Type<(StringJS), (E)>)

public "byName"(arg0: StringJS): E
public "byName"(arg0: StringJS, arg1: E): E
public static "of"<A>(arg0: $MapEncoder$$Type<(A)>, arg1: $MapDecoder$$Type<(A)>, arg2: $Supplier$$Type<(StringJS)>): $MapCodec<(A)>
public static "of"<A>(arg0: $MapEncoder$$Type<(A)>, arg1: $MapDecoder$$Type<(A)>): $MapCodec<(A)>
public static "of"<A>(arg0: $Encoder$$Type<(A)>, arg1: $Decoder$$Type<(A)>, arg2: StringJS): $Codec<(A)>
public static "of"<A>(arg0: $Encoder$$Type<(A)>, arg1: $Decoder$$Type<(A)>): $Codec<(A)>
public static "list"<E>(arg0: $Codec$$Type<(E)>): $Codec<($List<(E)>)>
public static "list"<E>(arg0: $Codec$$Type<(E)>, arg1: integer, arg2: integer): $Codec<($List<(E)>)>
public static "unit"<A>(arg0: A): $Codec<(A)>
public static "unit"<A>(arg0: $Supplier$$Type<(A)>): $Codec<(A)>
public static "string"(arg0: integer, arg1: integer): $Codec<(StringJS)>
public static "recursive"<A>(arg0: StringJS, arg1: $Function$$Type<($Codec<(A)>), ($Codec$$Type<(A)>)>): $Codec<(A)>
public static "pair"<F, S>(arg0: $Codec$$Type<(F)>, arg1: $Codec$$Type<(S)>): $Codec<($Pair<(F), (S)>)>
public static "checkRange"<N extends number>(arg0: N, arg1: N): $Function<(N), ($DataResult<(N)>)>
public static "xor"<F, S>(arg0: $Codec$$Type<(F)>, arg1: $Codec$$Type<(S)>): $Codec<($Either<(F), (S)>)>
public static "mapPair"<F, S>(arg0: $MapCodec$$Type<(F)>, arg1: $MapCodec$$Type<(S)>): $MapCodec<($Pair<(F), (S)>)>
public static "either"<F, S>(arg0: $Codec$$Type<(F)>, arg1: $Codec$$Type<(S)>): $Codec<($Either<(F), (S)>)>
public static "floatRange"(arg0: float, arg1: float): $Codec<(float)>
public static "simpleMap"<K, V>(arg0: $Codec$$Type<(K)>, arg1: $Codec$$Type<(V)>, arg2: $Keyable$$Type): $SimpleMapCodec<(K), (V)>
public static "intRange"(arg0: integer, arg1: integer): $Codec<(integer)>
public "fieldOf"(arg0: StringJS): $MapEncoder
public static "mapEither"<F, S>(arg0: $MapCodec$$Type<(F)>, arg1: $MapCodec$$Type<(S)>): $MapCodec<($Either<(F), (S)>)>
public static "optionalField"<F>(arg0: StringJS, arg1: $Codec$$Type<(F)>, arg2: boolean): $MapCodec<($Optional<(F)>)>
public static "compoundList"<K, V>(arg0: $Codec$$Type<(K)>, arg1: $Codec$$Type<(V)>): $Codec<($List<($Pair<(K), (V)>)>)>
public static "lazyInitialized"<A>(arg0: $Supplier$$Type<($Codec$$Type<(A)>)>): $Codec<(A)>
public static "unboundedMap"<K, V>(arg0: $Codec$$Type<(K)>, arg1: $Codec$$Type<(V)>): $UnboundedMapCodec<(K), (V)>
public static "dispatchedMap"<K, V>(arg0: $Codec$$Type<(K)>, arg1: $Function$$Type<(K), ($Codec$$Type<(V)>)>): $Codec<($Map<(K), (V)>)>
public "withLifecycle"(arg0: $Lifecycle$$Type): $Encoder
public "promotePartial"(arg0: $Consumer$$Type): $Decoder
public static "withAlternative"<T, U>(arg0: $Codec$$Type<(T)>, arg1: $Codec$$Type<(U)>, arg2: $Function$$Type<(U), (T)>): $Codec<(T)>
public static "withAlternative"<T>(arg0: $Codec$$Type<(T)>, arg1: $Codec$$Type<(T)>): $Codec<(T)>
public static "stringResolver"<E>(arg0: $Function$$Type<(E), (StringJS)>, arg1: $Function$$Type<(StringJS), (E)>): $Codec<(E)>
public static "sizeLimitedString"(arg0: integer): $Codec<(StringJS)>
public static "doubleRange"(arg0: double, arg1: double): $Codec<(double)>
public static "empty"<A>(): $MapEncoder<(A)>
public static "error"<A>(arg0: StringJS): $Encoder<(A)>
public static "ofTerminal"<A>(arg0: $Decoder$Terminal$$Type<(A)>): $Decoder<(A)>
public static "ofSimple"<A>(arg0: $Decoder$Simple$$Type<(A)>): $Decoder<(A)>
public static "ofBoxed"<A>(arg0: $Decoder$Boxed$$Type<(A)>): $Decoder<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringRepresentable$EnumCodec$$Type<E> = ($StringRepresentable$EnumCodec<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StringRepresentable$EnumCodec$$Original<E> = $StringRepresentable$EnumCodec<(E)>;}
declare module "net.minecraft.util.Unit" {
import {$Enum} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"

export class $Unit extends $Enum<($Unit)> {
static readonly "CODEC": $Codec<($Unit)>
static readonly "INSTANCE": $Unit

public static "values"(): ($Unit)[]
public static "valueOf"(arg0: StringJS): $Unit
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Unit$$Type = (("instance"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Unit$$Original = $Unit;}
declare module "net.minecraft.util.ListAndDeque" {
import {$Iterator} from "java.util.Iterator"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$RandomAccess$$Interface} from "java.util.RandomAccess"
import {$Collection$$Type} from "java.util.Collection"
import {$Spliterator} from "java.util.Spliterator"
import {$Comparator$$Type} from "java.util.Comparator"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$List, $List$$Interface} from "java.util.List"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$IntFunction$$Type} from "java.util.function.IntFunction"
import {$ListIterator} from "java.util.ListIterator"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Cloneable$$Interface} from "java.lang.Cloneable"
import {$Deque, $Deque$$Interface} from "java.util.Deque"
import {$Stream} from "java.util.stream.Stream"

export interface $ListAndDeque$$Interface<T> extends $Serializable$$Interface, $Cloneable$$Interface, $Deque$$Interface<(T)>, $List$$Interface<(T)>, $RandomAccess$$Interface {
[Symbol.iterator](): IterableIterator<T>;
[index: number]: T
get "first"(): T
get "last"(): T
get "empty"(): boolean
}

export class $ListAndDeque<T> implements $ListAndDeque$$Interface {
 "remove"(): T
 "peek"(): T
 "getFirst"(): T
 "getLast"(): T
 "element"(): T
 "addFirst"(arg0: T): void
 "addLast"(arg0: T): void
 "removeFirst"(): T
 "removeLast"(): T
 "reversed"(): $Deque
 "poll"(): T
 "push"(arg0: T): void
 "pop"(): T
 "offer"(arg0: T): boolean
 "remove"(arg0: any): boolean
 "size"(): integer
 "add"(arg0: T): boolean
 "iterator"(): $Iterator<(T)>
 "contains"(arg0: any): boolean
 "addAll"(arg0: $Collection$$Type<(T)>): boolean
 "pollFirst"(): T
 "pollLast"(): T
 "offerLast"(arg0: T): boolean
 "peekFirst"(): T
 "removeFirstOccurrence"(arg0: any): boolean
 "offerFirst"(arg0: T): boolean
 "peekLast"(): T
 "removeLastOccurrence"(arg0: any): boolean
 "descendingIterator"(): $Iterator<(T)>
 "remove"(arg0: integer): T
 "get"(arg0: integer): T
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<E>(arg0: $Collection$$Type<(T)>): $List<(T)>
 "indexOf"(arg0: any): integer
 "clear"(): void
 "lastIndexOf"(arg0: any): integer
 "isEmpty"(): boolean
 "replaceAll"(arg0: $UnaryOperator$$Type<(T)>): void
 "add"(arg0: integer, arg1: T): void
 "subList"(arg0: integer, arg1: integer): $List<(T)>
 "toArray"(): (any)[]
 "toArray"<T>(arg0: (T)[]): (T)[]
static "of"<E>(arg0: T, arg1: T, arg2: T): $List<(T)>
static "of"<E>(arg0: T, arg1: T, arg2: T, arg3: T): $List<(T)>
static "of"<E>(arg0: T, arg1: T, arg2: T, arg3: T, arg4: T): $List<(T)>
static "of"<E>(arg0: T, arg1: T, arg2: T, arg3: T, arg4: T, arg5: T, arg6: T, arg7: T, arg8: T, arg9: T): $List<(T)>
static "of"<E>(arg0: T, arg1: T, arg2: T, arg3: T, arg4: T, arg5: T, arg6: T, arg7: T, arg8: T): $List<(T)>
static "of"<E>(): $List<(T)>
static "of"<E>(arg0: T): $List<(T)>
static "of"<E>(arg0: T, arg1: T): $List<(T)>
static "of"<E>(arg0: T, arg1: T, arg2: T, arg3: T, arg4: T, arg5: T, arg6: T): $List<(T)>
static "of"<E>(arg0: T, arg1: T, arg2: T, arg3: T, arg4: T, arg5: T, arg6: T, arg7: T): $List<(T)>
static "of"<E>(...arg0: (T)[]): $List<(T)>
static "of"<E>(arg0: T, arg1: T, arg2: T, arg3: T, arg4: T, arg5: T): $List<(T)>
 "spliterator"(): $Spliterator<(T)>
 "addAll"(arg0: integer, arg1: $Collection$$Type<(T)>): boolean
 "set"(arg0: integer, arg1: T): T
 "sort"(arg0: $Comparator$$Type<(T)>): void
 "removeAll"(arg0: $Collection$$Type<(never)>): boolean
 "retainAll"(arg0: $Collection$$Type<(never)>): boolean
 "listIterator"(): $ListIterator<(T)>
 "listIterator"(arg0: integer): $ListIterator<(T)>
 "containsAll"(arg0: $Collection$$Type<(never)>): boolean
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "stream"(): $Stream<(T)>
 "removeIf"(arg0: $Predicate$$Type<(T)>): boolean
 "parallelStream"(): $Stream<(T)>
 "forEach"(arg0: $Consumer$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ListAndDeque$$Type<T> = ($ListAndDeque<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ListAndDeque$$Original<T> = $ListAndDeque<(T)>;}
declare module "net.minecraft.util.StaticCache2D" {
import {$StaticCache2D$Initializer$$Type} from "net.minecraft.util.StaticCache2D$Initializer"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $StaticCache2D<T> {
public "get"(arg0: integer, arg1: integer): T
public "toString"(): StringJS
public "contains"(arg0: integer, arg1: integer): boolean
public "forEach"(arg0: $Consumer$$Type<(T)>): void
public static "create"<T>(arg0: integer, arg1: integer, arg2: integer, arg3: $StaticCache2D$Initializer$$Type<(T)>): $StaticCache2D<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StaticCache2D$$Type<T> = ($StaticCache2D<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StaticCache2D$$Original<T> = $StaticCache2D<(T)>;}
declare module "net.minecraft.util.AbortableIterationConsumer$Continuation" {
import {$Enum} from "java.lang.Enum"

export class $AbortableIterationConsumer$Continuation extends $Enum<($AbortableIterationConsumer$Continuation)> {
static readonly "CONTINUE": $AbortableIterationConsumer$Continuation
static readonly "ABORT": $AbortableIterationConsumer$Continuation

public static "values"(): ($AbortableIterationConsumer$Continuation)[]
public static "valueOf"(arg0: StringJS): $AbortableIterationConsumer$Continuation
public "shouldAbort"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbortableIterationConsumer$Continuation$$Type = (("continue") | ("abort"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbortableIterationConsumer$Continuation$$Original = $AbortableIterationConsumer$Continuation;}
declare module "net.minecraft.util.Tuple" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Tuple<A, B> {
constructor(arg0: A, arg1: B)

public "setA"(arg0: A): void
public "getA"(): A
public "getB"(): B
public "setB"(arg0: B): void
set "a"(value: A)
get "a"(): A
get "b"(): B
set "b"(value: B)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Tuple$$Type<A, B> = ($Tuple<(A), (B)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Tuple$$Original<A, B> = $Tuple<(A), (B)>;}
declare module "net.minecraft.util.InclusiveRange" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$DataResult} from "com.mojang.serialization.DataResult"
import {$Record} from "java.lang.Record"

export class $InclusiveRange<T extends $Comparable<(object)>> extends $Record {
static readonly "INT": $Codec<($InclusiveRange<(integer)>)>

constructor(arg0: T, arg1: T)
constructor(arg0: T)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "contains"(arg0: $InclusiveRange$$Type<(T)>): boolean
public static "create"<T extends $Comparable<(object)>>(arg0: T, arg1: T): $DataResult<($InclusiveRange<(T)>)>
public "isValueInRange"(arg0: T): boolean
public static "codec"<T extends $Comparable<(object)>>(arg0: $Codec$$Type<(T)>): $Codec<($InclusiveRange<(T)>)>
public static "codec"<T extends $Comparable<(object)>>(arg0: $Codec$$Type<(T)>, arg1: T, arg2: T): $Codec<($InclusiveRange<(T)>)>
public "maxInclusive"(): T
public "minInclusive"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InclusiveRange$$Type<T> = ({"maxInclusive"?: T, "minInclusive"?: T}) | ([maxInclusive?: T, minInclusive?: T]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InclusiveRange$$Original<T> = $InclusiveRange<(T)>;}
declare module "net.minecraft.util.ColorRGBA" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$Record} from "java.lang.Record"

export class $ColorRGBA extends $Record {
static readonly "CODEC": $Codec<($ColorRGBA)>

constructor(arg0: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "rgba"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorRGBA$$Type = ({"rgba"?: integer}) | ([rgba?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ColorRGBA$$Original = $ColorRGBA;}
declare module "net.minecraft.util.TimeSource" {
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

export interface $TimeSource$$Interface {

(arg0: $TimeUnit): long
}

export class $TimeSource implements $TimeSource$$Interface {
 "get"(arg0: $TimeUnit$$Type): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimeSource$$Type = ((arg0: $TimeUnit) => long);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TimeSource$$Original = $TimeSource;}
declare module "net.minecraft.util.ClassInstanceMultiMap" {
import {$ClassInstanceMultiMapAccessor$$Interface} from "net.caffeinemc.mods.lithium.mixin.alloc.entity_iteration.ClassInstanceMultiMapAccessor"
import {$Iterator} from "java.util.Iterator"
import {$ArrayList$$Type} from "java.util.ArrayList"
import {$Collection} from "java.util.Collection"
import {$EntityClassGroup$$Type} from "net.caffeinemc.mods.lithium.common.entity.EntityClassGroup"
import {$Function$$Type} from "java.util.function.Function"
import {$List} from "java.util.List"
import {$TypeFilterableListInternalAccess$$Interface} from "net.caffeinemc.mods.lithium.common.entity.TypeFilterableListInternalAccess"
import {$ClassGroupFilterableList$$Interface} from "net.caffeinemc.mods.lithium.common.world.chunk.ClassGroupFilterableList"
import {$Class$$Type} from "java.lang.Class"
import {$AbstractCollection} from "java.util.AbstractCollection"

export class $ClassInstanceMultiMap<T> extends $AbstractCollection<(T)> implements $ClassInstanceMultiMapAccessor$$Interface, $ClassGroupFilterableList$$Interface, $TypeFilterableListInternalAccess$$Interface {
constructor(arg0: $Class$$Type<(T)>)

public "remove"(arg0: any): boolean
public "size"(): integer
public "add"(arg0: T): boolean
public "iterator"(): $Iterator<(T)>
public "contains"(arg0: any): boolean
public "find"(arg0: $Class$$Type): $Collection
public "lithium$getAllOfGroupType"(arg0: $EntityClassGroup$$Type): $Collection
public "getAllInstances"(): $List
public "localvar$zpj000$lithium$remove"(arg0: any): any
public "lithium$getOrCreateAllOfTypeRaw"(arg0: $Class$$Type): $List
public "lithium$replaceCollectionAndGet"(arg0: $Class$$Type, arg1: $ArrayList$$Type): $List
public "lithium$replaceCollectionAndGet"(arg0: $Class$$Type, arg1: $Function$$Type): $List
public "localvar$zpj000$lithium$add"(arg0: any): any
public "equals"(arg0: any): boolean
public "hashCode"(): integer
get "allInstances"(): $List
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClassInstanceMultiMap$$Type<T> = ($ClassInstanceMultiMap<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClassInstanceMultiMap$$Original<T> = $ClassInstanceMultiMap<(T)>;}
declare module "net.minecraft.util.KeyDispatchDataCodec" {
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"

export class $KeyDispatchDataCodec<A> extends $Record {
constructor(arg0: $MapCodec$$Type<(A)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"<A>(arg0: $MapCodec$$Type<(A)>): $KeyDispatchDataCodec<(A)>
public "codec"(): $MapCodec<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyDispatchDataCodec$$Type<A> = ({"codec"?: $MapCodec$$Type<(A)>}) | ([codec?: $MapCodec$$Type<(A)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyDispatchDataCodec$$Original<A> = $KeyDispatchDataCodec<(A)>;}
declare module "net.minecraft.util.ModCheck$Confidence" {
import {$Enum} from "java.lang.Enum"

export class $ModCheck$Confidence extends $Enum<($ModCheck$Confidence)> {
static readonly "VERY_LIKELY": $ModCheck$Confidence
static readonly "PROBABLY_NOT": $ModCheck$Confidence
static readonly "DEFINITELY": $ModCheck$Confidence

public static "values"(): ($ModCheck$Confidence)[]
public static "valueOf"(arg0: StringJS): $ModCheck$Confidence
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModCheck$Confidence$$Type = (("probably_not") | ("very_likely") | ("definitely"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModCheck$Confidence$$Original = $ModCheck$Confidence;}
declare module "net.minecraft.util.ModCheck" {
import {$ModCheck$Confidence, $ModCheck$Confidence$$Type} from "net.minecraft.util.ModCheck$Confidence"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Class$$Type} from "java.lang.Class"
import {$Record} from "java.lang.Record"

export class $ModCheck extends $Record {
constructor(arg0: $ModCheck$Confidence$$Type, arg1: StringJS)

public static "identify"(arg0: StringJS, arg1: $Supplier$$Type<(StringJS)>, arg2: StringJS, arg3: $Class$$Type<(never)>): $ModCheck
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "merge"(arg0: $ModCheck$$Type): $ModCheck
public "description"(): StringJS
public "confidence"(): $ModCheck$Confidence
public "fullDescription"(): StringJS
public "shouldReportAsModified"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModCheck$$Type = ({"description"?: StringJS, "confidence"?: $ModCheck$Confidence$$Type}) | ([description?: StringJS, confidence?: $ModCheck$Confidence$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModCheck$$Original = $ModCheck;}
declare module "net.minecraft.util.LazyLoadedValue" {
import {$Supplier$$Type} from "java.util.function.Supplier"

/**
 * 
 * @deprecated
 */
export class $LazyLoadedValue<T> {
constructor(arg0: $Supplier$$Type<(T)>)

public "get"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LazyLoadedValue$$Type<T> = ($LazyLoadedValue<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LazyLoadedValue$$Original<T> = $LazyLoadedValue<(T)>;}
declare module "net.minecraft.util.Brightness" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$Record} from "java.lang.Record"

export class $Brightness extends $Record {
static "FULL_BRIGHT": $Brightness
static readonly "CODEC": $Codec<($Brightness)>
static readonly "LIGHT_VALUE_CODEC": $Codec<(integer)>

constructor(arg0: integer, arg1: integer)

public "sky"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "block"(): integer
public static "unpack"(arg0: integer): $Brightness
public "pack"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Brightness$$Type = ({"sky"?: integer, "block"?: integer}) | ([sky?: integer, block?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Brightness$$Original = $Brightness;}
declare module "net.minecraft.util.StringRepresentable$StringRepresentableCodec" {
import {$DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$Dynamic$$Type} from "com.mojang.serialization.Dynamic"
import {$Encoder, $Encoder$$Type} from "com.mojang.serialization.Encoder"
import {$Decoder$Terminal, $Decoder$Terminal$$Type} from "com.mojang.serialization.Decoder$Terminal"
import {$MapDecoder$$Type} from "com.mojang.serialization.MapDecoder"
import {$Codec, $Codec$$Type, $Codec$$Interface} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Either} from "com.mojang.datafixers.util.Either"
import {$Decoder, $Decoder$$Type} from "com.mojang.serialization.Decoder"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Codec$ResultFunction$$Type} from "com.mojang.serialization.Codec$ResultFunction"
import {$Decoder$Boxed, $Decoder$Boxed$$Type} from "com.mojang.serialization.Decoder$Boxed"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$Map} from "java.util.Map"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$SimpleMapCodec} from "com.mojang.serialization.codecs.SimpleMapCodec"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$Decoder$Simple, $Decoder$Simple$$Type} from "com.mojang.serialization.Decoder$Simple"
import {$UnboundedMapCodec} from "com.mojang.serialization.codecs.UnboundedMapCodec"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$ToIntFunction$$Type} from "java.util.function.ToIntFunction"
import {$MapEncoder, $MapEncoder$$Type} from "com.mojang.serialization.MapEncoder"
import {$Lifecycle$$Type} from "com.mojang.serialization.Lifecycle"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $StringRepresentable$StringRepresentableCodec<S extends $StringRepresentable> implements $Codec$$Interface<(S)> {
constructor(arg0: (S)[], arg1: $Function$$Type<(StringJS), (S)>, arg2: $ToIntFunction$$Type<(S)>)

public "decode"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: T): $DataResult<($Pair<(S), (T)>)>
public "encode"(arg0: any, arg1: $DynamicOps$$Type, arg2: any): $DataResult
public "encode"<T>(arg0: S, arg1: $DynamicOps$$Type<(T)>, arg2: T): $DataResult<(T)>
public "dispatch"<E>(arg0: StringJS, arg1: $Function$$Type<(E), (S)>, arg2: $Function$$Type<(S), ($MapCodec$$Type<(E)>)>): $Codec<(E)>
public "dispatch"<E>(arg0: $Function$$Type<(E), (S)>, arg1: $Function$$Type<(S), ($MapCodec$$Type<(E)>)>): $Codec<(E)>
public static "of"<A>(arg0: $MapEncoder$$Type<(S)>, arg1: $MapDecoder$$Type<(S)>, arg2: $Supplier$$Type<(StringJS)>): $MapCodec<(S)>
public static "of"<A>(arg0: $MapEncoder$$Type<(S)>, arg1: $MapDecoder$$Type<(S)>): $MapCodec<(S)>
public static "of"<A>(arg0: $Encoder$$Type<(S)>, arg1: $Decoder$$Type<(S)>, arg2: StringJS): $Codec<(S)>
public static "of"<A>(arg0: $Encoder$$Type<(S)>, arg1: $Decoder$$Type<(S)>): $Codec<(S)>
public static "list"<E>(arg0: $Codec$$Type<(E)>): $Codec<($List<(E)>)>
public static "list"<E>(arg0: $Codec$$Type<(E)>, arg1: integer, arg2: integer): $Codec<($List<(E)>)>
public "validate"(arg0: $Function$$Type<(S), ($DataResult$$Type<(S)>)>): $Codec<(S)>
public "orElse"(arg0: $UnaryOperator$$Type<(StringJS)>, arg1: S): $Codec<(S)>
public "orElse"(arg0: S): $Codec<(S)>
public "orElse"(arg0: $Consumer$$Type<(StringJS)>, arg1: S): $Codec<(S)>
public static "unit"<A>(arg0: S): $Codec<(S)>
public static "unit"<A>(arg0: $Supplier$$Type<(S)>): $Codec<(S)>
public static "string"(arg0: integer, arg1: integer): $Codec<(StringJS)>
public "orElseGet"(arg0: $UnaryOperator$$Type<(StringJS)>, arg1: $Supplier$$Type<(S)>): $Codec<(S)>
public "orElseGet"(arg0: $Supplier$$Type<(S)>): $Codec<(S)>
public "orElseGet"(arg0: $Consumer$$Type<(StringJS)>, arg1: $Supplier$$Type<(S)>): $Codec<(S)>
public static "recursive"<A>(arg0: StringJS, arg1: $Function$$Type<($Codec<(S)>), ($Codec$$Type<(S)>)>): $Codec<(S)>
public static "pair"<F, S>(arg0: $Codec$$Type<(F)>, arg1: $Codec$$Type<(S)>): $Codec<($Pair<(F), (S)>)>
public static "checkRange"<N extends number>(arg0: N, arg1: N): $Function<(N), ($DataResult<(N)>)>
public static "xor"<F, S>(arg0: $Codec$$Type<(F)>, arg1: $Codec$$Type<(S)>): $Codec<($Either<(F), (S)>)>
public "stable"(): $Codec<(S)>
public "lenientOptionalFieldOf"(arg0: StringJS, arg1: $Lifecycle$$Type, arg2: S, arg3: $Lifecycle$$Type): $MapCodec<(S)>
public "lenientOptionalFieldOf"(arg0: StringJS, arg1: S, arg2: $Lifecycle$$Type): $MapCodec<(S)>
public "lenientOptionalFieldOf"(arg0: StringJS, arg1: S): $MapCodec<(S)>
public "lenientOptionalFieldOf"(arg0: StringJS): $MapCodec<($Optional<(S)>)>
public "xmap"<S>(arg0: $Function$$Type<(S), (S)>, arg1: $Function$$Type<(S), (S)>): $Codec<(S)>
public static "mapPair"<F, S>(arg0: $MapCodec$$Type<(F)>, arg1: $MapCodec$$Type<(S)>): $MapCodec<($Pair<(F), (S)>)>
public "flatXmap"<S>(arg0: $Function$$Type<(S), ($DataResult$$Type<(S)>)>, arg1: $Function$$Type<(S), ($DataResult$$Type<(S)>)>): $Codec<(S)>
public static "either"<F, S>(arg0: $Codec$$Type<(F)>, arg1: $Codec$$Type<(S)>): $Codec<($Either<(F), (S)>)>
public static "floatRange"(arg0: float, arg1: float): $Codec<(float)>
public static "simpleMap"<K, V>(arg0: $Codec$$Type<(K)>, arg1: $Codec$$Type<(V)>, arg2: $Keyable$$Type): $SimpleMapCodec<(K), (V)>
public static "intRange"(arg0: integer, arg1: integer): $Codec<(integer)>
public "deprecated"(arg0: integer): $Codec<(S)>
public "mapResult"(arg0: $Codec$ResultFunction$$Type<(S)>): $Codec<(S)>
public "fieldOf"(arg0: StringJS): $MapEncoder
public static "mapEither"<F, S>(arg0: $MapCodec$$Type<(F)>, arg1: $MapCodec$$Type<(S)>): $MapCodec<($Either<(F), (S)>)>
public "partialDispatch"<E>(arg0: StringJS, arg1: $Function$$Type<(E), ($DataResult$$Type<(S)>)>, arg2: $Function$$Type<(S), ($DataResult$$Type<($MapCodec$$Type<(E)>)>)>): $Codec<(E)>
public static "optionalField"<F>(arg0: StringJS, arg1: $Codec$$Type<(F)>, arg2: boolean): $MapCodec<($Optional<(F)>)>
public static "compoundList"<K, V>(arg0: $Codec$$Type<(K)>, arg1: $Codec$$Type<(V)>): $Codec<($List<($Pair<(K), (V)>)>)>
public static "lazyInitialized"<A>(arg0: $Supplier$$Type<($Codec$$Type<(S)>)>): $Codec<(S)>
public "sizeLimitedListOf"(arg0: integer): $Codec<($List<(S)>)>
public static "unboundedMap"<K, V>(arg0: $Codec$$Type<(K)>, arg1: $Codec$$Type<(V)>): $UnboundedMapCodec<(K), (V)>
public static "dispatchedMap"<K, V>(arg0: $Codec$$Type<(K)>, arg1: $Function$$Type<(K), ($Codec$$Type<(V)>)>): $Codec<($Map<(K), (V)>)>
public "comapFlatMap"<S>(arg0: $Function$$Type<(S), ($DataResult$$Type<(S)>)>, arg1: $Function$$Type<(S), (S)>): $Codec<(S)>
public "withLifecycle"(arg0: $Lifecycle$$Type): $Encoder
public "optionalFieldOf"(arg0: StringJS, arg1: S, arg2: $Lifecycle$$Type): $MapCodec<(S)>
public "optionalFieldOf"(arg0: StringJS, arg1: $Lifecycle$$Type, arg2: S, arg3: $Lifecycle$$Type): $MapCodec<(S)>
public "optionalFieldOf"(arg0: StringJS): $MapCodec<($Optional<(S)>)>
public "optionalFieldOf"(arg0: StringJS, arg1: S): $MapCodec<(S)>
public "promotePartial"(arg0: $Consumer$$Type): $Decoder
public "dispatchMap"<E>(arg0: StringJS, arg1: $Function$$Type<(E), (S)>, arg2: $Function$$Type<(S), ($MapCodec$$Type<(E)>)>): $MapCodec<(E)>
public "dispatchMap"<E>(arg0: $Function$$Type<(E), (S)>, arg1: $Function$$Type<(S), ($MapCodec$$Type<(E)>)>): $MapCodec<(E)>
public static "withAlternative"<T, U>(arg0: $Codec$$Type<(T)>, arg1: $Codec$$Type<(U)>, arg2: $Function$$Type<(U), (T)>): $Codec<(T)>
public static "withAlternative"<T>(arg0: $Codec$$Type<(T)>, arg1: $Codec$$Type<(T)>): $Codec<(T)>
public static "stringResolver"<E>(arg0: $Function$$Type<(E), (StringJS)>, arg1: $Function$$Type<(StringJS), (E)>): $Codec<(E)>
public "dispatchStable"<E>(arg0: $Function$$Type<(E), (S)>, arg1: $Function$$Type<(S), ($MapCodec$$Type<(E)>)>): $Codec<(E)>
public "flatComapMap"<S>(arg0: $Function$$Type<(S), (S)>, arg1: $Function$$Type<(S), ($DataResult$$Type<(S)>)>): $Codec<(S)>
public static "sizeLimitedString"(arg0: integer): $Codec<(StringJS)>
public static "doubleRange"(arg0: double, arg1: double): $Codec<(double)>
public "listOf"(arg0: integer, arg1: integer): $Codec<($List<(S)>)>
public "listOf"(): $Codec<($List<(S)>)>
public static "empty"<A>(): $MapEncoder<(S)>
public static "error"<A>(arg0: StringJS): $Encoder<(S)>
public "flatComap"<B>(arg0: $Function$$Type<(B), ($DataResult$$Type<(S)>)>): $Encoder<(B)>
public "comap"<B>(arg0: $Function$$Type<(B), (S)>): $Encoder<(B)>
public "encodeStart"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: S): $DataResult<(T)>
public "decode"<T>(arg0: $Dynamic$$Type<(T)>): $DataResult<($Pair<(S), (T)>)>
public "map"<B>(arg0: $Function$$Type<(S), (B)>): $Decoder<(B)>
public "flatMap"<B>(arg0: $Function$$Type<(S), ($DataResult$$Type<(B)>)>): $Decoder<(B)>
public "parse"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: T): $DataResult<(S)>
public "parse"<T>(arg0: $Dynamic$$Type<(T)>): $DataResult<(S)>
public "boxed"(): $Decoder$Boxed<(S)>
public "terminal"(): $Decoder$Terminal<(S)>
public static "ofTerminal"<A>(arg0: $Decoder$Terminal$$Type<(S)>): $Decoder<(S)>
public static "ofSimple"<A>(arg0: $Decoder$Simple$$Type<(S)>): $Decoder<(S)>
public static "ofBoxed"<A>(arg0: $Decoder$Boxed$$Type<(S)>): $Decoder<(S)>
public "simple"(): $Decoder$Simple<(S)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringRepresentable$StringRepresentableCodec$$Type<S> = ($StringRepresentable$StringRepresentableCodec<(S)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StringRepresentable$StringRepresentableCodec$$Original<S> = $StringRepresentable$StringRepresentableCodec<(S)>;}
declare module "net.minecraft.util.SignatureValidator" {
import {$ServicesKeySet$$Type} from "com.mojang.authlib.yggdrasil.ServicesKeySet"
import {$ServicesKeyType$$Type} from "com.mojang.authlib.yggdrasil.ServicesKeyType"
import {$SignatureUpdater, $SignatureUpdater$$Type} from "net.minecraft.util.SignatureUpdater"
import {$PublicKey$$Type} from "java.security.PublicKey"
import {$Logger} from "org.slf4j.Logger"

export interface $SignatureValidator$$Interface {

(arg0: $SignatureUpdater, arg1: (byte)[]): boolean
}

export class $SignatureValidator implements $SignatureValidator$$Interface {
static readonly "NO_VALIDATION": $SignatureValidator
static readonly "LOGGER": $Logger

static "from"(arg0: $PublicKey$$Type, arg1: StringJS): $SignatureValidator
static "from"(arg0: $ServicesKeySet$$Type, arg1: $ServicesKeyType$$Type): $SignatureValidator
 "validate"(arg0: $SignatureUpdater$$Type, arg1: (byte)[]): boolean
 "validate"(arg0: (byte)[], arg1: (byte)[]): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignatureValidator$$Type = ((arg0: $SignatureUpdater, arg1: (byte)[]) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SignatureValidator$$Original = $SignatureValidator;}
declare module "net.minecraft.util.FormattedCharSink" {
import {$Style, $Style$$Type} from "net.minecraft.network.chat.Style"

export interface $FormattedCharSink$$Interface {

(arg0: integer, arg1: $Style, arg2: integer): boolean
}

export class $FormattedCharSink implements $FormattedCharSink$$Interface {
 "accept"(arg0: integer, arg1: $Style$$Type, arg2: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FormattedCharSink$$Type = ((arg0: integer, arg1: $Style, arg2: integer) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FormattedCharSink$$Original = $FormattedCharSink;}
declare module "net.minecraft.util.ExtraCodecs$TagOrElementLocation" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Record} from "java.lang.Record"

export class $ExtraCodecs$TagOrElementLocation extends $Record {
constructor(arg0: $ResourceLocation$$Type, arg1: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): $ResourceLocation
public "tag"(): boolean
public "decoratedId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtraCodecs$TagOrElementLocation$$Type = ({"tag"?: boolean, "id"?: $ResourceLocation$$Type}) | ([tag?: boolean, id?: $ResourceLocation$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExtraCodecs$TagOrElementLocation$$Original = $ExtraCodecs$TagOrElementLocation;}
declare module "net.minecraft.util.FormattedCharSequence" {
import {$Style$$Type} from "net.minecraft.network.chat.Style"
import {$Int2IntFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import {$List$$Type} from "java.util.List"
import {$FormattedCharSink, $FormattedCharSink$$Type} from "net.minecraft.util.FormattedCharSink"

export interface $FormattedCharSequence$$Interface {

(arg0: $FormattedCharSink): boolean
}

export class $FormattedCharSequence implements $FormattedCharSequence$$Interface {
static readonly "EMPTY": $FormattedCharSequence

 "accept"(arg0: $FormattedCharSink$$Type): boolean
static "fromList"(arg0: $List$$Type<($FormattedCharSequence$$Type)>): $FormattedCharSequence
static "codepoint"(arg0: integer, arg1: $Style$$Type): $FormattedCharSequence
static "fromPair"(arg0: $FormattedCharSequence$$Type, arg1: $FormattedCharSequence$$Type): $FormattedCharSequence
static "composite"(...arg0: ($FormattedCharSequence$$Type)[]): $FormattedCharSequence
static "composite"(arg0: $FormattedCharSequence$$Type, arg1: $FormattedCharSequence$$Type): $FormattedCharSequence
static "composite"(arg0: $FormattedCharSequence$$Type): $FormattedCharSequence
static "composite"(): $FormattedCharSequence
static "composite"(arg0: $List$$Type<($FormattedCharSequence$$Type)>): $FormattedCharSequence
static "decorateOutput"(arg0: $FormattedCharSink$$Type, arg1: $Int2IntFunction$$Type): $FormattedCharSink
static "forward"(arg0: StringJS, arg1: $Style$$Type, arg2: $Int2IntFunction$$Type): $FormattedCharSequence
static "forward"(arg0: StringJS, arg1: $Style$$Type): $FormattedCharSequence
static "backward"(arg0: StringJS, arg1: $Style$$Type, arg2: $Int2IntFunction$$Type): $FormattedCharSequence
static "backward"(arg0: StringJS, arg1: $Style$$Type): $FormattedCharSequence
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FormattedCharSequence$$Type = ((arg0: $FormattedCharSink) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FormattedCharSequence$$Original = $FormattedCharSequence;}
declare module "net.minecraft.util.ArrayListDeque" {
import {$Iterator} from "java.util.Iterator"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$Collection$$Type} from "java.util.Collection"
import {$List} from "java.util.List"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$AbstractList} from "java.util.AbstractList"
import {$ListAndDeque$$Interface} from "net.minecraft.util.ListAndDeque"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $ArrayListDeque<T> extends $AbstractList<(T)> implements $ListAndDeque$$Interface<(T)> {
constructor()
constructor(arg0: integer)

public "remove"(arg0: integer): T
public "size"(): integer
public "get"(arg0: integer): T
public "replaceAll"(arg0: $UnaryOperator$$Type<(T)>): void
public "add"(arg0: integer, arg1: T): void
public "set"(arg0: integer, arg1: T): T
public "forEach"(arg0: $Consumer$$Type<(T)>): void
public "capacity"(): integer
public "removeIf"(arg0: $Predicate$$Type<(T)>): boolean
public "getFirst"(): T
public "getLast"(): T
public "addFirst"(arg0: T): void
public "addLast"(arg0: T): void
public "removeFirst"(): T
public "removeLast"(): T
public "reversed"(): $List
public "pollFirst"(): T
public "pollLast"(): T
public "offerLast"(arg0: T): boolean
public "peekFirst"(): T
public "removeFirstOccurrence"(arg0: any): boolean
public "offerFirst"(arg0: T): boolean
public "peekLast"(): T
public "removeLastOccurrence"(arg0: any): boolean
public "descendingIterator"(): $Iterator<(T)>
public "remove"(): T
public "peek"(): T
public "element"(): T
public "poll"(): T
public "push"(arg0: T): void
public "pop"(): T
public "offer"(arg0: T): boolean
public "remove"(arg0: any): boolean
public "contains"(arg0: any): boolean
public "addAll"(arg0: $Collection$$Type<(T)>): boolean
public static "copyOf"<E>(arg0: $Collection$$Type<(T)>): $List<(T)>
public "isEmpty"(): boolean
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public static "of"<E>(arg0: T, arg1: T, arg2: T): $List<(T)>
public static "of"<E>(arg0: T, arg1: T, arg2: T, arg3: T): $List<(T)>
public static "of"<E>(arg0: T, arg1: T, arg2: T, arg3: T, arg4: T): $List<(T)>
public static "of"<E>(arg0: T, arg1: T, arg2: T, arg3: T, arg4: T, arg5: T, arg6: T, arg7: T, arg8: T, arg9: T): $List<(T)>
public static "of"<E>(arg0: T, arg1: T, arg2: T, arg3: T, arg4: T, arg5: T, arg6: T, arg7: T, arg8: T): $List<(T)>
public static "of"<E>(): $List<(T)>
public static "of"<E>(arg0: T): $List<(T)>
public static "of"<E>(arg0: T, arg1: T): $List<(T)>
public static "of"<E>(arg0: T, arg1: T, arg2: T, arg3: T, arg4: T, arg5: T, arg6: T): $List<(T)>
public static "of"<E>(arg0: T, arg1: T, arg2: T, arg3: T, arg4: T, arg5: T, arg6: T, arg7: T): $List<(T)>
public static "of"<E>(...arg0: (T)[]): $List<(T)>
public static "of"<E>(arg0: T, arg1: T, arg2: T, arg3: T, arg4: T, arg5: T): $List<(T)>
public "removeAll"(arg0: $Collection$$Type<(never)>): boolean
public "retainAll"(arg0: $Collection$$Type<(never)>): boolean
public "containsAll"(arg0: $Collection$$Type<(never)>): boolean
get "first"(): T
get "last"(): T
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArrayListDeque$$Type<T> = ($ArrayListDeque<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArrayListDeque$$Original<T> = $ArrayListDeque<(T)>;}
declare module "net.minecraft.util.SignatureUpdater$Output" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SignatureUpdater$Output$$Interface {

(arg0: (byte)[]): void
}

export class $SignatureUpdater$Output implements $SignatureUpdater$Output$$Interface {
 "update"(arg0: (byte)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignatureUpdater$Output$$Type = ((arg0: (byte)[]) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SignatureUpdater$Output$$Original = $SignatureUpdater$Output;}
declare module "net.minecraft.util.StringRepresentable" {
import {$RemappedEnumConstant$$Interface} from "dev.latvian.mods.rhino.util.RemappedEnumConstant"
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"

export interface $StringRepresentable$$Interface extends $RemappedEnumConstant$$Interface {

(): StringJS
get "remappedEnumConstantName"(): StringJS
get "serializedName"(): StringJS
}

export class $StringRepresentable implements $StringRepresentable$$Interface {
static readonly "PRE_BUILT_MAP_THRESHOLD": integer

static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
 "getRemappedEnumConstantName"(): StringJS
 "getSerializedName"(): StringJS
static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringRepresentable$$Type = (() => StringJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StringRepresentable$$Original = $StringRepresentable;}
declare module "net.minecraft.util.RandomSource" {
import {$PositionalRandomFactory} from "net.minecraft.world.level.levelgen.PositionalRandomFactory"

export interface $RandomSource$$Interface {
set "seed"(value: long)
}

export class $RandomSource implements $RandomSource$$Interface {
/**
 * 
 * @deprecated
 */
static readonly "GAUSSIAN_SPREAD_FACTOR": double

static "create"(arg0: long): $RandomSource
static "create"(): $RandomSource
 "nextDouble"(): double
 "nextInt"(arg0: integer): integer
 "nextInt"(): integer
 "nextInt"(arg0: integer, arg1: integer): integer
 "setSeed"(arg0: long): void
 "nextLong"(): long
 "nextBoolean"(): boolean
 "nextFloat"(): float
 "nextGaussian"(): double
 "fork"(): $RandomSource
 "nextIntBetweenInclusive"(arg0: integer, arg1: integer): integer
/**
 * 
 * @deprecated
 */
static "createThreadSafe"(): $RandomSource
 "consumeCount"(arg0: integer): void
 "forkPositional"(): $PositionalRandomFactory
static "createNewThreadLocalInstance"(): $RandomSource
 "triangle"(arg0: double, arg1: double): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RandomSource$$Type = ($RandomSource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RandomSource$$Original = $RandomSource;}
declare module "net.minecraft.util.OptionEnum" {
import {$Component} from "net.minecraft.network.chat.Component"

export interface $OptionEnum$$Interface {
get "key"(): StringJS
get "id"(): integer
get "caption"(): $Component
}

export class $OptionEnum implements $OptionEnum$$Interface {
 "getKey"(): StringJS
 "getId"(): integer
 "getCaption"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionEnum$$Type = ($OptionEnum);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OptionEnum$$Original = $OptionEnum;}
declare module "net.minecraft.util.AbortableIterationConsumer" {
import {$AbortableIterationConsumer$Continuation, $AbortableIterationConsumer$Continuation$$Type} from "net.minecraft.util.AbortableIterationConsumer$Continuation"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $AbortableIterationConsumer$$Interface<T> {

(arg0: T): $AbortableIterationConsumer$Continuation$$Type
}

export class $AbortableIterationConsumer<T> implements $AbortableIterationConsumer$$Interface {
 "accept"(arg0: T): $AbortableIterationConsumer$Continuation
static "forConsumer"<T>(arg0: $Consumer$$Type<(T)>): $AbortableIterationConsumer<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbortableIterationConsumer$$Type<T> = ((arg0: T) => $AbortableIterationConsumer$Continuation$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbortableIterationConsumer$$Original<T> = $AbortableIterationConsumer<(T)>;}
declare module "net.minecraft.util.ProgressListener" {
import {$Component$$Type} from "net.minecraft.network.chat.Component"

export interface $ProgressListener$$Interface {
}

export class $ProgressListener implements $ProgressListener$$Interface {
 "stop"(): void
 "progressStartNoAbort"(arg0: $Component$$Type): void
 "progressStagePercentage"(arg0: integer): void
 "progressStart"(arg0: $Component$$Type): void
 "progressStage"(arg0: $Component$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressListener$$Type = ($ProgressListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProgressListener$$Original = $ProgressListener;}
declare module "net.minecraft.util.BitStorage" {
import {$IntConsumer$$Type} from "java.util.function.IntConsumer"

export interface $BitStorage$$Interface {
get "size"(): integer
get "raw"(): (long)[]
get "bits"(): integer
}

export class $BitStorage implements $BitStorage$$Interface {
 "get"(arg0: integer): integer
 "set"(arg0: integer, arg1: integer): void
 "copy"(): $BitStorage
 "getSize"(): integer
 "getAndSet"(arg0: integer, arg1: integer): integer
 "getAll"(arg0: $IntConsumer$$Type): void
 "getRaw"(): (long)[]
 "unpack"(arg0: (integer)[]): void
 "getBits"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BitStorage$$Type = ($BitStorage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BitStorage$$Original = $BitStorage;}
declare module "net.minecraft.util.StaticCache2D$Initializer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $StaticCache2D$Initializer$$Interface<T> {

(arg0: integer, arg1: integer): T
}

export class $StaticCache2D$Initializer<T> implements $StaticCache2D$Initializer$$Interface {
 "get"(arg0: integer, arg1: integer): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StaticCache2D$Initializer$$Type<T> = ((arg0: integer, arg1: integer) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StaticCache2D$Initializer$$Original<T> = $StaticCache2D$Initializer<(T)>;}
declare module "net.minecraft.util.TaskChainer" {
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Logger} from "org.slf4j.Logger"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $TaskChainer$$Interface {

(arg0: $CompletableFuture<(T)>, arg1: $Consumer<(T)>): void
}

export class $TaskChainer implements $TaskChainer$$Interface {
static readonly "LOGGER": $Logger

static "immediate"(arg0: $Executor$$Type): $TaskChainer
 "append"(arg0: $Runnable$$Type): void
 "append"<T>(arg0: $CompletableFuture$$Type<(T)>, arg1: $Consumer$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaskChainer$$Type = ((arg0: $CompletableFuture<(T)>, arg1: $Consumer<(T)>) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TaskChainer$$Original = $TaskChainer;}
