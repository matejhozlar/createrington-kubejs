declare module "net.minecraft.resources.RegistryOps" {
import {$DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Optional} from "java.util.Optional"
import {$DelegatingOps} from "net.minecraft.resources.DelegatingOps"
import {$HolderLookup$RegistryLookup} from "net.minecraft.core.HolderLookup$RegistryLookup"
import {$Dynamic, $Dynamic$$Type} from "com.mojang.serialization.Dynamic"
import {$HolderOwner} from "net.minecraft.core.HolderOwner"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$HolderGetter} from "net.minecraft.core.HolderGetter"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$RecordCodecBuilder} from "com.mojang.serialization.codecs.RecordCodecBuilder"
import {$Holder$Reference} from "net.minecraft.core.Holder$Reference"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RegistryOps$RegistryInfoLookup, $RegistryOps$RegistryInfoLookup$$Type} from "net.minecraft.resources.RegistryOps$RegistryInfoLookup"

export class $RegistryOps<T> extends $DelegatingOps<(T)> {
readonly "lookupProvider": $RegistryOps$RegistryInfoLookup

public static "retrieveElement"<E, O>(arg0: $ResourceKey$$Type<(E)>): $RecordCodecBuilder<(O), ($Holder$Reference<(E)>)>
public static "retrieveGetter"<E, O>(arg0: $ResourceKey$$Type<($Registry<(E)>)>): $RecordCodecBuilder<(O), ($HolderGetter<(E)>)>
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "owner"<E>(arg0: $ResourceKey$$Type<($Registry<(E)>)>): $Optional<($HolderOwner<(E)>)>
public static "create"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: $HolderLookup$Provider$$Type): $RegistryOps<(T)>
public static "create"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: $RegistryOps$RegistryInfoLookup$$Type): $RegistryOps<(T)>
public "getter"<E>(arg0: $ResourceKey$$Type<($Registry<(E)>)>): $Optional<($HolderGetter<(E)>)>
public "withParent"<U>(arg0: $DynamicOps$$Type<(U)>): $RegistryOps<(U)>
public static "retrieveRegistryLookup"<E>(arg0: $ResourceKey$$Type<($Registry<(E)>)>): $MapCodec<($HolderLookup$RegistryLookup<(E)>)>
public static "injectRegistryContext"<T>(arg0: $Dynamic$$Type<(T)>, arg1: $HolderLookup$Provider$$Type): $Dynamic<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryOps$$Type<T> = ($RegistryOps<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistryOps$$Original<T> = $RegistryOps<(T)>;}
declare module "net.minecraft.resources.DelegatingOps" {
import {$Map$$Type} from "java.util.Map"
import {$DynamicOps$$Type, $DynamicOps$$Interface} from "com.mojang.serialization.DynamicOps"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$IntStream, $IntStream$$Type} from "java.util.stream.IntStream"
import {$DataResult} from "com.mojang.serialization.DataResult"
import {$List$$Type} from "java.util.List"
import {$LongStream, $LongStream$$Type} from "java.util.stream.LongStream"
import {$RecordBuilder} from "com.mojang.serialization.RecordBuilder"
import {$MapLike, $MapLike$$Type} from "com.mojang.serialization.MapLike"
import {$Encoder$$Type} from "com.mojang.serialization.Encoder"
import {$Consumer} from "java.util.function.Consumer"
import {$ListBuilder} from "com.mojang.serialization.ListBuilder"
import {$Decoder$$Type} from "com.mojang.serialization.Decoder"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$BiConsumer} from "java.util.function.BiConsumer"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"

export class $DelegatingOps<T> implements $DynamicOps$$Interface<(T)> {
public "remove"(arg0: T, arg1: StringJS): T
public "empty"(): T
public "emptyList"(): T
public "getByteBuffer"(arg0: T): $DataResult<($ByteBuffer)>
public "emptyMap"(): T
public "getMap"(arg0: T): $DataResult<($MapLike<(T)>)>
public "createMap"(arg0: $Map$$Type<(T), (T)>): T
public "createMap"(arg0: $Stream$$Type<($Pair$$Type<(T), (T)>)>): T
public "createLong"(arg0: long): T
public "createString"(arg0: StringJS): T
public "createList"(arg0: $Stream$$Type<(T)>): T
public "createDouble"(arg0: double): T
public "createFloat"(arg0: float): T
public "getStream"(arg0: T): $DataResult<($Stream<(T)>)>
public "getStringValue"(arg0: T): $DataResult<(StringJS)>
public "getBooleanValue"(arg0: T): $DataResult<(boolean)>
public "createInt"(arg0: integer): T
public "mapBuilder"(): $RecordBuilder<(T)>
public "createByte"(arg0: byte): T
public "mergeToMap"(arg0: T, arg1: $MapLike$$Type<(T)>): $DataResult<(T)>
public "mergeToMap"(arg0: T, arg1: $Map$$Type<(T), (T)>): $DataResult<(T)>
public "mergeToMap"(arg0: T, arg1: T, arg2: T): $DataResult<(T)>
public "convertTo"<U>(arg0: $DynamicOps$$Type<(U)>, arg1: T): U
public "getNumberValue"(arg0: T): $DataResult<(number)>
public "getIntStream"(arg0: T): $DataResult<($IntStream)>
public "createShort"(arg0: short): T
public "createByteList"(arg0: $ByteBuffer$$Type): T
public "mergeToPrimitive"(arg0: T, arg1: T): $DataResult<(T)>
public "compressMaps"(): boolean
public "createBoolean"(arg0: boolean): T
public "createIntList"(arg0: $IntStream$$Type): T
public "createLongList"(arg0: $LongStream$$Type): T
public "listBuilder"(): $ListBuilder<(T)>
public "mergeToList"(arg0: T, arg1: T): $DataResult<(T)>
public "mergeToList"(arg0: T, arg1: $List$$Type<(T)>): $DataResult<(T)>
public "getLongStream"(arg0: T): $DataResult<($LongStream)>
public "createNumeric"(arg0: number): T
public "getMapValues"(arg0: T): $DataResult<($Stream<($Pair<(T), (T)>)>)>
public "getMapEntries"(arg0: T): $DataResult<($Consumer<($BiConsumer<(T), (T)>)>)>
public "getList"(arg0: T): $DataResult<($Consumer<($Consumer<(T)>)>)>
public "get"(arg0: T, arg1: StringJS): $DataResult<(T)>
public "update"(arg0: T, arg1: StringJS, arg2: $Function$$Type<(T), (T)>): T
public "set"(arg0: T, arg1: StringJS, arg2: T): T
public "getGeneric"(arg0: T, arg1: T): $DataResult<(T)>
public "convertMap"<U>(arg0: $DynamicOps$$Type<(U)>, arg1: T): U
public "withParser"<E>(arg0: $Decoder$$Type<(E)>): $Function<(T), ($DataResult<(E)>)>
public "getNumberValue"(arg0: T, arg1: number): number
public "withEncoder"<E>(arg0: $Encoder$$Type<(E)>): $Function<(E), ($DataResult<(T)>)>
public "withDecoder"<E>(arg0: $Decoder$$Type<(E)>): $Function<(T), ($DataResult<($Pair<(E), (T)>)>)>
public "updateGeneric"(arg0: T, arg1: T, arg2: $Function$$Type<(T), (T)>): T
public "convertList"<U>(arg0: $DynamicOps$$Type<(U)>, arg1: T): U
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DelegatingOps$$Type<T> = ($DelegatingOps<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DelegatingOps$$Original<T> = $DelegatingOps<(T)>;}
declare module "net.minecraft.resources.RegistryOps$RegistryInfo" {
import {$HolderLookup$RegistryLookup$$Type} from "net.minecraft.core.HolderLookup$RegistryLookup"
import {$Lifecycle, $Lifecycle$$Type} from "com.mojang.serialization.Lifecycle"
import {$HolderOwner, $HolderOwner$$Type} from "net.minecraft.core.HolderOwner"
import {$Record} from "java.lang.Record"
import {$HolderGetter, $HolderGetter$$Type} from "net.minecraft.core.HolderGetter"

export class $RegistryOps$RegistryInfo<T> extends $Record {
constructor(owner: $HolderOwner$$Type<(T)>, getter: $HolderGetter$$Type<(T)>, elementsLifecycle: $Lifecycle$$Type)

public "elementsLifecycle"(): $Lifecycle
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "owner"(): $HolderOwner<(T)>
public "getter"(): $HolderGetter<(T)>
public static "fromRegistryLookup"<T>(arg0: $HolderLookup$RegistryLookup$$Type<(T)>): $RegistryOps$RegistryInfo<(T)>
get "ter"(): $HolderGetter<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryOps$RegistryInfo$$Type<T> = ({"getter"?: $HolderGetter$$Type<(T)>, "elementsLifecycle"?: $Lifecycle$$Type, "owner"?: $HolderOwner$$Type<(T)>}) | ([getter?: $HolderGetter$$Type<(T)>, elementsLifecycle?: $Lifecycle$$Type, owner?: $HolderOwner$$Type<(T)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistryOps$RegistryInfo$$Original<T> = $RegistryOps$RegistryInfo<(T)>;}
declare module "net.minecraft.resources.ResourceLocation" {
import {$SimpleCommandExceptionType} from "com.mojang.brigadier.exceptions.SimpleCommandExceptionType"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$DataResult} from "com.mojang.serialization.DataResult"
import {$SpecialEquality$$Interface} from "dev.latvian.mods.rhino.util.SpecialEquality"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $ResourceLocation implements $Comparable$$Interface<($ResourceLocation)>, $SpecialEquality$$Interface {
static readonly "CODEC": $Codec<($ResourceLocation)>
static readonly "REALMS_NAMESPACE": StringJS
static readonly "ERROR_INVALID": $SimpleCommandExceptionType
static readonly "NAMESPACE_SEPARATOR": character
static readonly "DEFAULT_NAMESPACE": StringJS
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($ResourceLocation)>

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: $ResourceLocation$$Type): integer
public "compareTo"(arg0: any): integer
public static "read"(arg0: StringJS): $DataResult<($ResourceLocation)>
public static "read"(arg0: $StringReader$$Type): $ResourceLocation
public static "parse"(arg0: StringJS): $ResourceLocation
public "getPath"(): StringJS
public "withPrefix"(arg0: StringJS): $ResourceLocation
public "withSuffix"(arg0: StringJS): $ResourceLocation
public static "tryBuild"(arg0: StringJS, arg1: StringJS): $ResourceLocation
public "withPath"(arg0: StringJS): $ResourceLocation
public "withPath"(arg0: $UnaryOperator$$Type<(StringJS)>): $ResourceLocation
public "getNamespace"(): StringJS
public static "fromNamespaceAndPath"(arg0: StringJS, arg1: StringJS): $ResourceLocation
public static "isAllowedInResourceLocation"(arg0: character): boolean
public static "isValidPath"(arg0: StringJS): boolean
public static "bySeparator"(arg0: StringJS, arg1: character): $ResourceLocation
public "toShortLanguageKey"(): StringJS
public static "readNonEmpty"(arg0: $StringReader$$Type): $ResourceLocation
public static "isValidNamespace"(arg0: StringJS): boolean
public static "validPathChar"(arg0: character): boolean
public static "validNamespaceChar"(arg0: character): boolean
public static "tryBySeparator"(arg0: StringJS, arg1: character): $ResourceLocation
public "compareNamespaced"(arg0: $ResourceLocation$$Type): integer
public "toLanguageKey"(arg0: StringJS): StringJS
public "toLanguageKey"(arg0: StringJS, arg1: StringJS): StringJS
public "toLanguageKey"(): StringJS
public "toDebugFileName"(): StringJS
public "specialEquals"(o: any, shallow: boolean): boolean
public static "tryParse"(arg0: StringJS): $ResourceLocation
public static "withDefaultNamespace"(arg0: StringJS): $ResourceLocation
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "path"(): StringJS
get "namespace"(): StringJS
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.CustomStat
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.CustomStatTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceLocation$$Type = (StringJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResourceLocation$$Original = $ResourceLocation;}
declare module "net.minecraft.resources.ResourceKey" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$SpecialEquality$$Interface} from "dev.latvian.mods.rhino.util.SpecialEquality"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $ResourceKey<T> implements $Comparable$$Interface<($ResourceKey<(never)>)>, $SpecialEquality$$Interface {
constructor(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type)

public "toString"(): StringJS
public "cast"<E>(arg0: $ResourceKey$$Type<($Registry<(E)>)>): $Optional<($ResourceKey<(E)>)>
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $ResourceKey$$Type<(never)>): integer
public "location"(): $ResourceLocation
public static "create"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: $ResourceLocation$$Type): $ResourceKey<(T)>
public "isFor"(arg0: $ResourceKey$$Type<($Registry<(never)>)>): boolean
public static "createRegistryKey"<T>(arg0: $ResourceLocation$$Type): $ResourceKey<($Registry<(T)>)>
public "registryKey"(): $ResourceKey<($Registry<(T)>)>
public "registry"(): $ResourceLocation
public static "codec"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $Codec<($ResourceKey<(T)>)>
public "getNamespace"(): StringJS
public "getPath"(): StringJS
public static "streamCodec"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $StreamCodec<($ByteBuf), ($ResourceKey<(T)>)>
public "specialEquals"(o: any, shallow: boolean): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "namespace"(): StringJS
get "path"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceKey$$Type<T> = (Special.LiteralOf<(T)>) | ($ResourceKey<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResourceKey$$Original<T> = $ResourceKey<(T)>;}
declare module "net.minecraft.resources.RegistryOps$RegistryInfoLookup" {
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$RegistryOps$RegistryInfo, $RegistryOps$RegistryInfo$$Type} from "net.minecraft.resources.RegistryOps$RegistryInfo"

export interface $RegistryOps$RegistryInfoLookup$$Interface {

(arg0: $ResourceKey<($Registry<(T)>)>): ($RegistryOps$RegistryInfo$$Type<(T)>)?
}

export class $RegistryOps$RegistryInfoLookup implements $RegistryOps$RegistryInfoLookup$$Interface {
 "lookup"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $Optional<($RegistryOps$RegistryInfo<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryOps$RegistryInfoLookup$$Type = ((arg0: $ResourceKey<($Registry<(T)>)>) => ($RegistryOps$RegistryInfo$$Type<(T)>)?);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistryOps$RegistryInfoLookup$$Original = $RegistryOps$RegistryInfoLookup;}
declare module "net.minecraft.resources.FileToIdConverter" {
import {$Map} from "java.util.Map"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$List} from "java.util.List"
import {$Resource} from "net.minecraft.server.packs.resources.Resource"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $FileToIdConverter {
constructor(arg0: StringJS, arg1: StringJS)

public static "json"(arg0: StringJS): $FileToIdConverter
public "listMatchingResources"(arg0: $ResourceManager$$Type): $Map<($ResourceLocation), ($Resource)>
public "idToFile"(arg0: $ResourceLocation$$Type): $ResourceLocation
public "fileToId"(arg0: $ResourceLocation$$Type): $ResourceLocation
public "listMatchingResourcesFromNamespace"(arg0: $ResourceManager$$Type, arg1: StringJS): $Map<($ResourceLocation), ($Resource)>
public "listMatchingResourceStacks"(arg0: $ResourceManager$$Type): $Map<($ResourceLocation), ($List<($Resource)>)>
public "listMatchingResourceStacksFromNamespace"(arg0: $ResourceManager$$Type, arg1: StringJS): $Map<($ResourceLocation), ($List<($Resource)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FileToIdConverter$$Type = ($FileToIdConverter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FileToIdConverter$$Original = $FileToIdConverter;}
