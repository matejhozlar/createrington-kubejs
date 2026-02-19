declare module "com.mojang.serialization.OptionalDynamic" {
import {$DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Optional} from "java.util.Optional"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$IntStream} from "java.util.stream.IntStream"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$LongStream} from "java.util.stream.LongStream"
import {$Dynamic, $Dynamic$$Type} from "com.mojang.serialization.Dynamic"
import {$Decoder$$Type} from "com.mojang.serialization.Decoder"
import {$Function$$Type} from "java.util.function.Function"
import {$DynamicLike} from "com.mojang.serialization.DynamicLike"
import {$Stream} from "java.util.stream.Stream"
import {$ByteBuffer} from "java.nio.ByteBuffer"

export class $OptionalDynamic<T> extends $DynamicLike<(T)> {
constructor(arg0: $DynamicOps$$Type<(T)>, arg1: $DataResult$$Type<($Dynamic$$Type<(T)>)>)

public "get"(arg0: StringJS): $OptionalDynamic<(T)>
public "get"(): $DataResult<($Dynamic<(T)>)>
public "decode"<A>(arg0: $Decoder$$Type<(A)>): $DataResult<($Pair<(A), (T)>)>
public "map"<U>(arg0: $Function$$Type<($Dynamic<(T)>), (U)>): $DataResult<(U)>
public "result"(): $Optional<($Dynamic<(T)>)>
public "flatMap"<U>(arg0: $Function$$Type<($Dynamic<(T)>), ($DataResult$$Type<(U)>)>): $DataResult<(U)>
public "getElement"(arg0: StringJS): $DataResult<(T)>
public "asString"(): $DataResult<(StringJS)>
public "getGeneric"(arg0: T): $DataResult<(T)>
public "asNumber"(): $DataResult<(number)>
public "asBoolean"(): $DataResult<(boolean)>
public "asMapOpt"(): $DataResult<($Stream<($Pair<($Dynamic<(T)>), ($Dynamic<(T)>)>)>)>
public "into"<V>(arg0: $Function$$Type<($Dynamic<(T)>), (V)>): $DataResult<(V)>
public "orElseEmptyMap"(): $Dynamic<(T)>
public "orElseEmptyList"(): $Dynamic<(T)>
public "asLongStreamOpt"(): $DataResult<($LongStream)>
public "asByteBufferOpt"(): $DataResult<($ByteBuffer)>
public "getElementGeneric"(arg0: T): $DataResult<(T)>
public "asStreamOpt"(): $DataResult<($Stream<($Dynamic<(T)>)>)>
public "asIntStreamOpt"(): $DataResult<($IntStream)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionalDynamic$$Type<T> = ($OptionalDynamic<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OptionalDynamic$$Original<T> = $OptionalDynamic<(T)>;}
declare module "com.mojang.serialization.Decoder$Boxed" {
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$Decoder} from "com.mojang.serialization.Decoder"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$Dynamic, $Dynamic$$Type} from "com.mojang.serialization.Dynamic"

export interface $Decoder$Boxed$$Interface<A> {

(arg0: $Dynamic<(T)>): $DataResult$$Type<($Pair$$Type<(A), (T)>)>
}

export class $Decoder$Boxed<A> implements $Decoder$Boxed$$Interface {
 "decode"<T>(arg0: $Dynamic$$Type<(T)>): $DataResult<($Pair<(A), (T)>)>
 "decoder"(): $Decoder<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Decoder$Boxed$$Type<A> = ((arg0: $Dynamic<(T)>) => $DataResult$$Type<($Pair$$Type<(A), (T)>)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Decoder$Boxed$$Original<A> = $Decoder$Boxed<(A)>;}
declare module "com.mojang.serialization.Decoder$Simple" {
import {$Decoder} from "com.mojang.serialization.Decoder"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$Dynamic, $Dynamic$$Type} from "com.mojang.serialization.Dynamic"

export interface $Decoder$Simple$$Interface<A> {

(arg0: $Dynamic<(T)>): $DataResult$$Type<(A)>
}

export class $Decoder$Simple<A> implements $Decoder$Simple$$Interface {
 "decode"<T>(arg0: $Dynamic$$Type<(T)>): $DataResult<(A)>
 "decoder"(): $Decoder<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Decoder$Simple$$Type<A> = ((arg0: $Dynamic<(T)>) => $DataResult$$Type<(A)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Decoder$Simple$$Original<A> = $Decoder$Simple<(A)>;}
declare module "com.mojang.serialization.Decoder" {
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$Dynamic$$Type} from "com.mojang.serialization.Dynamic"
import {$Decoder$Simple, $Decoder$Simple$$Type} from "com.mojang.serialization.Decoder$Simple"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Decoder$Terminal, $Decoder$Terminal$$Type} from "com.mojang.serialization.Decoder$Terminal"
import {$MapDecoder} from "com.mojang.serialization.MapDecoder"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function$$Type} from "java.util.function.Function"
import {$Lifecycle$$Type} from "com.mojang.serialization.Lifecycle"
import {$Decoder$Boxed, $Decoder$Boxed$$Type} from "com.mojang.serialization.Decoder$Boxed"

export interface $Decoder$$Interface<A> {

(arg0: $DynamicOps<(T)>, arg1: T): $DataResult$$Type<($Pair$$Type<(A), (T)>)>
}

export class $Decoder<A> implements $Decoder$$Interface {
 "decode"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: T): $DataResult<($Pair<(A), (T)>)>
 "decode"<T>(arg0: $Dynamic$$Type<(T)>): $DataResult<($Pair<(A), (T)>)>
 "map"<B>(arg0: $Function$$Type<(A), (B)>): $Decoder<(B)>
 "flatMap"<B>(arg0: $Function$$Type<(A), ($DataResult$$Type<(B)>)>): $Decoder<(B)>
 "parse"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: T): $DataResult<(A)>
 "parse"<T>(arg0: $Dynamic$$Type<(T)>): $DataResult<(A)>
static "error"<A>(arg0: StringJS): $Decoder<(A)>
static "unit"<A>(arg0: $Supplier$$Type<(A)>): $MapDecoder<(A)>
static "unit"<A>(arg0: A): $MapDecoder<(A)>
 "boxed"(): $Decoder$Boxed<(A)>
 "terminal"(): $Decoder$Terminal<(A)>
static "ofTerminal"<A>(arg0: $Decoder$Terminal$$Type<(A)>): $Decoder<(A)>
static "ofSimple"<A>(arg0: $Decoder$Simple$$Type<(A)>): $Decoder<(A)>
static "ofBoxed"<A>(arg0: $Decoder$Boxed$$Type<(A)>): $Decoder<(A)>
 "fieldOf"(arg0: StringJS): $MapDecoder<(A)>
 "withLifecycle"(arg0: $Lifecycle$$Type): $Decoder<(A)>
 "promotePartial"(arg0: $Consumer$$Type<(StringJS)>): $Decoder<(A)>
 "simple"(): $Decoder$Simple<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Decoder$$Type<A> = ((arg0: $DynamicOps<(T)>, arg1: T) => $DataResult$$Type<($Pair$$Type<(A), (T)>)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Decoder$$Original<A> = $Decoder<(A)>;}
declare module "com.mojang.serialization.MapDecoder" {
import {$KeyCompressor} from "com.mojang.serialization.KeyCompressor"
import {$Keyable, $Keyable$$Interface} from "com.mojang.serialization.Keyable"
import {$DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Decoder} from "com.mojang.serialization.Decoder"
import {$Function$$Type} from "java.util.function.Function"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$Lifecycle$$Type} from "com.mojang.serialization.Lifecycle"
import {$MapLike$$Type} from "com.mojang.serialization.MapLike"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"

export interface $MapDecoder$$Interface<A> extends $Keyable$$Interface {
}

export class $MapDecoder<A> implements $MapDecoder$$Interface {
 "decode"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: $MapLike$$Type<(T)>): $DataResult<(A)>
 "map"<B>(arg0: $Function$$Type<(A), (B)>): $MapDecoder<(B)>
 "flatMap"<B>(arg0: $Function$$Type<(A), ($DataResult$$Type<(B)>)>): $MapDecoder<(B)>
 "decoder"(): $Decoder<(A)>
 "ap"<E>(arg0: $MapDecoder$$Type<($Function$$Type<(A), (E)>)>): $MapDecoder<(E)>
 "compressor"<T>(arg0: $DynamicOps$$Type<(T)>): $KeyCompressor<(T)>
 "withLifecycle"(arg0: $Lifecycle$$Type): $MapDecoder<(A)>
 "compressedDecode"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: T): $DataResult<(A)>
 "keys"<T>(arg0: $DynamicOps$$Type<(T)>): $Stream<(T)>
static "forStrings"(arg0: $Supplier$$Type<($Stream$$Type<(StringJS)>)>): $Keyable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapDecoder$$Type<A> = ($MapDecoder<(A)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapDecoder$$Original<A> = $MapDecoder<(A)>;}
declare module "com.mojang.serialization.MapCodec" {
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$KeyCompressor, $KeyCompressor$$Type} from "com.mojang.serialization.KeyCompressor"
import {$MapCodec$ResultFunction$$Type} from "com.mojang.serialization.MapCodec$ResultFunction"
import {$DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$RecordBuilder, $RecordBuilder$$Type} from "com.mojang.serialization.RecordBuilder"
import {$MapLike$$Type} from "com.mojang.serialization.MapLike"
import {$Encoder} from "com.mojang.serialization.Encoder"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$MapDecoder, $MapDecoder$$Type, $MapDecoder$$Interface} from "com.mojang.serialization.MapDecoder"
import {$CompressorHolder} from "com.mojang.serialization.CompressorHolder"
import {$RecordCodecBuilder} from "com.mojang.serialization.codecs.RecordCodecBuilder"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Decoder} from "com.mojang.serialization.Decoder"
import {$Function$$Type} from "java.util.function.Function"
import {$MapEncoder, $MapEncoder$$Type, $MapEncoder$$Interface} from "com.mojang.serialization.MapEncoder"
import {$Lifecycle$$Type} from "com.mojang.serialization.Lifecycle"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"

export class $MapCodec<A> extends $CompressorHolder implements $MapDecoder$$Interface<(A)>, $MapEncoder$$Interface<(A)> {
constructor()

public static "of"<A>(arg0: $MapEncoder$$Type<(A)>, arg1: $MapDecoder$$Type<(A)>): $MapCodec<(A)>
public static "of"<A>(arg0: $MapEncoder$$Type<(A)>, arg1: $MapDecoder$$Type<(A)>, arg2: $Supplier$$Type<(StringJS)>): $MapCodec<(A)>
public "validate"(arg0: $Function$$Type<(A), ($DataResult$$Type<(A)>)>): $MapCodec<(A)>
public "keys"<T>(arg0: $DynamicOps$$Type<(T)>): $Stream<(T)>
public "orElse"(arg0: A): $MapCodec<(A)>
public "orElse"(arg0: $UnaryOperator$$Type<(StringJS)>, arg1: A): $MapCodec<(A)>
public "orElse"(arg0: $Consumer$$Type<(StringJS)>, arg1: A): $MapCodec<(A)>
public static "unit"<A>(arg0: A): $MapCodec<(A)>
public static "unit"<A>(arg0: $Supplier$$Type<(A)>): $MapCodec<(A)>
public "orElseGet"(arg0: $Consumer$$Type<(StringJS)>, arg1: $Supplier$$Type<(A)>): $MapCodec<(A)>
public "orElseGet"(arg0: $UnaryOperator$$Type<(StringJS)>, arg1: $Supplier$$Type<(A)>): $MapCodec<(A)>
public "orElseGet"(arg0: $Supplier$$Type<(A)>): $MapCodec<(A)>
public static "recursive"<A>(arg0: StringJS, arg1: $Function$$Type<($Codec<(A)>), ($MapCodec$$Type<(A)>)>): $MapCodec<(A)>
public "dependent"<E>(arg0: $MapCodec$$Type<(E)>, arg1: $Function$$Type<(A), ($Pair$$Type<(E), ($MapCodec$$Type<(E)>)>)>, arg2: $BiFunction$$Type<(A), (E), (A)>): $MapCodec<(A)>
public "stable"(): $MapCodec<(A)>
public "codec"(): $Codec<(A)>
public "xmap"<S>(arg0: $Function$$Type<(A), (S)>, arg1: $Function$$Type<(S), (A)>): $MapCodec<(S)>
public "flatXmap"<S>(arg0: $Function$$Type<(A), ($DataResult$$Type<(S)>)>, arg1: $Function$$Type<(S), ($DataResult$$Type<(A)>)>): $MapCodec<(S)>
public "forGetter"<O>(arg0: $Function$$Type<(O), (A)>): $RecordCodecBuilder<(O), (A)>
public "deprecated"(arg0: integer): $MapCodec<(A)>
public "mapResult"(arg0: $MapCodec$ResultFunction$$Type<(A)>): $MapCodec<(A)>
public "setPartial"(arg0: $Supplier$$Type<(A)>): $MapCodec<(A)>
public "fieldOf"(arg0: StringJS): $MapCodec<(A)>
public "withLifecycle"(arg0: $Lifecycle$$Type): $MapEncoder
public static "assumeMapUnsafe"<A>(arg0: $Codec$$Type<(A)>): $MapCodec<(A)>
public "decode"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: $MapLike$$Type<(T)>): $DataResult<(A)>
public "map"<B>(arg0: $Function$$Type<(A), (B)>): $MapDecoder<(B)>
public "flatMap"<B>(arg0: $Function$$Type<(A), ($DataResult$$Type<(B)>)>): $MapDecoder<(B)>
public "decoder"(): $Decoder<(A)>
public "ap"<E>(arg0: $MapDecoder$$Type<($Function$$Type<(A), (E)>)>): $MapDecoder<(E)>
public "compressor"<T>(arg0: $DynamicOps$$Type<(T)>): $KeyCompressor<(T)>
public "compressedDecode"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: T): $DataResult<(A)>
public "encode"<T>(arg0: A, arg1: $DynamicOps$$Type<(T)>, arg2: $RecordBuilder$$Type<(T)>): $RecordBuilder<(T)>
public "encoder"(): $Encoder<(A)>
public static "makeCompressedBuilder"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: $KeyCompressor$$Type<(T)>): $RecordBuilder<(T)>
public "flatComap"<B>(arg0: $Function$$Type<(B), ($DataResult$$Type<(A)>)>): $MapEncoder<(B)>
public "comap"<B>(arg0: $Function$$Type<(B), (A)>): $MapEncoder<(B)>
public "compressedBuilder"<T>(arg0: $DynamicOps$$Type<(T)>): $RecordBuilder<(T)>
public static "forStrings"(arg0: $Supplier$$Type<($Stream$$Type<(StringJS)>)>): $Keyable
set "partial"(value: $Supplier$$Type<(A)>)
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.CreatePotatoProjectileBlockHitAction
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.CreatePotatoProjectileBlockHitActionTag
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.WorldgenMaterialRule
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.WorldgenMaterialRuleTag
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.EntitySubPredicateType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.EntitySubPredicateTypeTag
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.EnchantmentEntityEffectType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.EnchantmentEntityEffectTypeTag
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.CreatePotatoProjectileEntityHitAction
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.CreatePotatoProjectileEntityHitActionTag
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.EnchantmentLevelBasedValueType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.EnchantmentLevelBasedValueTypeTag
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.CreatePotatoProjectileRenderMode
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.CreatePotatoProjectileRenderModeTag
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.EnchantmentValueEffectType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.EnchantmentValueEffectTypeTag
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.EnchantmentProviderType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.EnchantmentProviderTypeTag
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.WorldgenChunkGenerator
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.WorldgenChunkGeneratorTag
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.WorldgenDensityFunctionType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.WorldgenDensityFunctionTypeTag
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.WorldgenMaterialCondition
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.WorldgenMaterialConditionTag
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.WorldgenBiomeSource
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.WorldgenBiomeSourceTag
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.NeoforgeConditionCodecs
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.NeoforgeConditionCodecsTag
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.EnchantmentLocationBasedEffectType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.EnchantmentLocationBasedEffectTypeTag
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.NeoforgeStructureModifierSerializers
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.NeoforgeStructureModifierSerializersTag
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.WorldgenPoolAliasBinding
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.WorldgenPoolAliasBindingTag
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.NeoforgeGlobalLootModifierSerializers
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.NeoforgeGlobalLootModifierSerializersTag
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.BlockType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.BlockTypeTag
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.NeoforgeBiomeModifierSerializers
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.NeoforgeBiomeModifierSerializersTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapCodec$$Type<A> = (Special.CreatePotatoProjectileBlockHitAction) | (Special.WorldgenMaterialRule) | (Special.EntitySubPredicateType) | (Special.EnchantmentEntityEffectType) | (Special.CreatePotatoProjectileEntityHitAction) | (Special.EnchantmentLevelBasedValueType) | (Special.CreatePotatoProjectileRenderMode) | (Special.EnchantmentValueEffectType) | (Special.EnchantmentProviderType) | (Special.WorldgenChunkGenerator) | (Special.WorldgenDensityFunctionType) | (Special.WorldgenMaterialCondition) | (Special.WorldgenBiomeSource) | (Special.NeoforgeConditionCodecs) | (Special.EnchantmentLocationBasedEffectType) | (Special.NeoforgeStructureModifierSerializers) | (Special.WorldgenPoolAliasBinding) | (Special.NeoforgeGlobalLootModifierSerializers) | (Special.BlockType) | (Special.NeoforgeBiomeModifierSerializers);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapCodec$$Original<A> = $MapCodec<(A)>;}
declare module "com.mojang.serialization.ListBuilder" {
import {$Iterable$$Type} from "java.lang.Iterable"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$DynamicOps} from "com.mojang.serialization.DynamicOps"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$Encoder$$Type} from "com.mojang.serialization.Encoder"

export interface $ListBuilder$$Interface<T> {
}

export class $ListBuilder<T> implements $ListBuilder$$Interface {
 "ops"(): $DynamicOps<(T)>
 "add"<E>(arg0: E, arg1: $Encoder$$Type<(E)>): $ListBuilder<(T)>
 "add"(arg0: $DataResult$$Type<(T)>): $ListBuilder<(T)>
 "add"(arg0: T): $ListBuilder<(T)>
 "addAll"<E>(arg0: $Iterable$$Type<(E)>, arg1: $Encoder$$Type<(E)>): $ListBuilder<(T)>
 "build"(arg0: $DataResult$$Type<(T)>): $DataResult<(T)>
 "build"(arg0: T): $DataResult<(T)>
 "mapError"(arg0: $UnaryOperator$$Type<(StringJS)>): $ListBuilder<(T)>
 "withErrorsFrom"(arg0: $DataResult$$Type<(never)>): $ListBuilder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ListBuilder$$Type<T> = ($ListBuilder<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ListBuilder$$Original<T> = $ListBuilder<(T)>;}
declare module "com.mojang.serialization.DynamicOps" {
import {$Map$$Type} from "java.util.Map"
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

export interface $DynamicOps$$Interface<T> {
}

export class $DynamicOps<T> implements $DynamicOps$$Interface {
 "remove"(arg0: T, arg1: StringJS): T
 "get"(arg0: T, arg1: StringJS): $DataResult<(T)>
 "update"(arg0: T, arg1: StringJS, arg2: $Function$$Type<(T), (T)>): T
 "empty"(): T
 "set"(arg0: T, arg1: StringJS, arg2: T): T
 "emptyList"(): T
 "getByteBuffer"(arg0: T): $DataResult<($ByteBuffer)>
 "emptyMap"(): T
 "getMap"(arg0: T): $DataResult<($MapLike<(T)>)>
 "createMap"(arg0: $Map$$Type<(T), (T)>): T
 "createMap"(arg0: $Stream$$Type<($Pair$$Type<(T), (T)>)>): T
 "createLong"(arg0: long): T
 "createString"(arg0: StringJS): T
 "createList"(arg0: $Stream$$Type<(T)>): T
 "createDouble"(arg0: double): T
 "createFloat"(arg0: float): T
 "getStream"(arg0: T): $DataResult<($Stream<(T)>)>
 "getStringValue"(arg0: T): $DataResult<(StringJS)>
 "getBooleanValue"(arg0: T): $DataResult<(boolean)>
 "getGeneric"(arg0: T, arg1: T): $DataResult<(T)>
 "createInt"(arg0: integer): T
 "mapBuilder"(): $RecordBuilder<(T)>
 "createByte"(arg0: byte): T
 "mergeToMap"(arg0: T, arg1: T, arg2: T): $DataResult<(T)>
 "mergeToMap"(arg0: T, arg1: $Map$$Type<(T), (T)>): $DataResult<(T)>
 "mergeToMap"(arg0: T, arg1: $MapLike$$Type<(T)>): $DataResult<(T)>
 "convertMap"<U>(arg0: $DynamicOps$$Type<(U)>, arg1: T): U
 "convertTo"<U>(arg0: $DynamicOps$$Type<(U)>, arg1: T): U
 "withParser"<E>(arg0: $Decoder$$Type<(E)>): $Function<(T), ($DataResult<(E)>)>
 "getNumberValue"(arg0: T): $DataResult<(number)>
 "getNumberValue"(arg0: T, arg1: number): number
 "getIntStream"(arg0: T): $DataResult<($IntStream)>
 "createShort"(arg0: short): T
 "createByteList"(arg0: $ByteBuffer$$Type): T
 "mergeToPrimitive"(arg0: T, arg1: T): $DataResult<(T)>
 "compressMaps"(): boolean
 "createBoolean"(arg0: boolean): T
 "createIntList"(arg0: $IntStream$$Type): T
 "createLongList"(arg0: $LongStream$$Type): T
 "listBuilder"(): $ListBuilder<(T)>
 "mergeToList"(arg0: T, arg1: $List$$Type<(T)>): $DataResult<(T)>
 "mergeToList"(arg0: T, arg1: T): $DataResult<(T)>
 "getLongStream"(arg0: T): $DataResult<($LongStream)>
 "createNumeric"(arg0: number): T
 "withEncoder"<E>(arg0: $Encoder$$Type<(E)>): $Function<(E), ($DataResult<(T)>)>
 "getMapValues"(arg0: T): $DataResult<($Stream<($Pair<(T), (T)>)>)>
 "withDecoder"<E>(arg0: $Decoder$$Type<(E)>): $Function<(T), ($DataResult<($Pair<(E), (T)>)>)>
 "updateGeneric"(arg0: T, arg1: T, arg2: $Function$$Type<(T), (T)>): T
 "convertList"<U>(arg0: $DynamicOps$$Type<(U)>, arg1: T): U
 "getMapEntries"(arg0: T): $DataResult<($Consumer<($BiConsumer<(T), (T)>)>)>
 "getList"(arg0: T): $DataResult<($Consumer<($Consumer<(T)>)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicOps$$Type<T> = ($DynamicOps<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DynamicOps$$Original<T> = $DynamicOps<(T)>;}
declare module "com.mojang.serialization.Keyable" {
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"

export interface $Keyable$$Interface {

(arg0: $DynamicOps<(T)>): $Stream$$Type<(T)>
}

export class $Keyable implements $Keyable$$Interface {
 "keys"<T>(arg0: $DynamicOps$$Type<(T)>): $Stream<(T)>
static "forStrings"(arg0: $Supplier$$Type<($Stream$$Type<(StringJS)>)>): $Keyable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Keyable$$Type = ((arg0: $DynamicOps<(T)>) => $Stream$$Type<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Keyable$$Original = $Keyable;}
declare module "com.mojang.serialization.MapCodec$ResultFunction" {
import {$DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$RecordBuilder, $RecordBuilder$$Type} from "com.mojang.serialization.RecordBuilder"
import {$MapLike$$Type} from "com.mojang.serialization.MapLike"

export interface $MapCodec$ResultFunction$$Interface<A> {
}

export class $MapCodec$ResultFunction<A> implements $MapCodec$ResultFunction$$Interface {
 "apply"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: $MapLike$$Type<(T)>, arg2: $DataResult$$Type<(A)>): $DataResult<(A)>
 "coApply"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: A, arg2: $RecordBuilder$$Type<(T)>): $RecordBuilder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapCodec$ResultFunction$$Type<A> = ($MapCodec$ResultFunction<(A)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapCodec$ResultFunction$$Original<A> = $MapCodec$ResultFunction<(A)>;}
declare module "com.mojang.serialization.CompressorHolder" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$KeyCompressor} from "com.mojang.serialization.KeyCompressor"
import {$DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Compressable$$Interface} from "com.mojang.serialization.Compressable"

export class $CompressorHolder implements $Compressable$$Interface {
constructor()

public "compressor"<T>(arg0: $DynamicOps$$Type<(T)>): $KeyCompressor<(T)>
public "keys"<T>(arg0: $DynamicOps$$Type<(T)>): $Stream<(T)>
public static "forStrings"(arg0: $Supplier$$Type<($Stream$$Type<(StringJS)>)>): $Keyable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompressorHolder$$Type = ($CompressorHolder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CompressorHolder$$Original = $CompressorHolder;}
declare module "com.mojang.serialization.RecordBuilder" {
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$DynamicOps} from "com.mojang.serialization.DynamicOps"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$Lifecycle$$Type} from "com.mojang.serialization.Lifecycle"
import {$Encoder$$Type} from "com.mojang.serialization.Encoder"

export interface $RecordBuilder$$Interface<T> {
set "lifecycle"(value: $Lifecycle$$Type)
}

export class $RecordBuilder<T> implements $RecordBuilder$$Interface {
 "ops"(): $DynamicOps<(T)>
 "add"<E>(arg0: StringJS, arg1: E, arg2: $Encoder$$Type<(E)>): $RecordBuilder<(T)>
 "add"(arg0: StringJS, arg1: T): $RecordBuilder<(T)>
 "add"(arg0: StringJS, arg1: $DataResult$$Type<(T)>): $RecordBuilder<(T)>
 "add"(arg0: T, arg1: $DataResult$$Type<(T)>): $RecordBuilder<(T)>
 "add"(arg0: T, arg1: T): $RecordBuilder<(T)>
 "add"(arg0: $DataResult$$Type<(T)>, arg1: $DataResult$$Type<(T)>): $RecordBuilder<(T)>
 "build"(arg0: T): $DataResult<(T)>
 "build"(arg0: $DataResult$$Type<(T)>): $DataResult<(T)>
 "mapError"(arg0: $UnaryOperator$$Type<(StringJS)>): $RecordBuilder<(T)>
 "setLifecycle"(arg0: $Lifecycle$$Type): $RecordBuilder<(T)>
 "withErrorsFrom"(arg0: $DataResult$$Type<(never)>): $RecordBuilder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecordBuilder$$Type<T> = ($RecordBuilder<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecordBuilder$$Original<T> = $RecordBuilder<(T)>;}
declare module "com.mojang.serialization.DataResult$Error" {
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$DataResult$Instance} from "com.mojang.serialization.DataResult$Instance"
import {$App$$Type} from "com.mojang.datafixers.kinds.App"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$DataResult, $DataResult$$Type, $DataResult$$Interface} from "com.mojang.serialization.DataResult"
import {$Function3$$Type} from "com.mojang.datafixers.util.Function3"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$DataResult$Mu$$Type} from "com.mojang.serialization.DataResult$Mu"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Lifecycle, $Lifecycle$$Type} from "com.mojang.serialization.Lifecycle"
import {$Throwable} from "java.lang.Throwable"
import {$Record} from "java.lang.Record"

export class $DataResult$Error<R> extends $Record implements $DataResult$$Interface<(R)> {
constructor(messageSupplier: $Supplier$$Type<(StringJS)>, partialValue: (R)?, lifecycle: $Lifecycle$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "map"(arg0: $Function$$Type): $DataResult
public "result"(): $Optional<(R)>
public "message"(): StringJS
public "flatMap"<R2>(arg0: $Function$$Type<(R), ($DataResult$$Type<(R2)>)>): $DataResult$Error<(R2)>
public "error"(): $Optional<($DataResult$Error<(R)>)>
public "messageSupplier"(): $Supplier<(StringJS)>
public "ap"<R2>(arg0: $DataResult$$Type<($Function$$Type<(R), (R2)>)>): $DataResult$Error<(R2)>
public "lifecycle"(): $Lifecycle
public "setPartial"(arg0: any): $DataResult
public "setPartial"(arg0: $Supplier$$Type): $DataResult
public "mapError"(arg0: $UnaryOperator$$Type): $DataResult
public "isSuccess"(): boolean
public "getOrThrow"<E extends $Throwable>(arg0: $Function$$Type<(StringJS), (E)>): R
public "mapOrElse"<T>(arg0: $Function$$Type<(R), (T)>, arg1: $Function$$Type<($DataResult$Error<(R)>), (T)>): T
public "ifSuccess"(arg0: $Consumer$$Type<(R)>): $DataResult<(R)>
public "ifError"(arg0: $Consumer$$Type<($DataResult$Error<(R)>)>): $DataResult<(R)>
public "partialValue"(): $Optional<(R)>
public "promotePartial"(arg0: $Consumer$$Type<(StringJS)>): $DataResult<(R)>
public "setLifecycle"(arg0: $Lifecycle$$Type): $DataResult$Error<(R)>
public "resultOrPartial"(arg0: $Consumer$$Type<(StringJS)>): $Optional<(R)>
public "resultOrPartial"(): $Optional<(R)>
public "getPartialOrThrow"<E extends $Throwable>(arg0: $Function$$Type<(StringJS), (E)>): R
public "hasResultOrPartial"(): boolean
public static "error"<R>(arg0: $Supplier$$Type<(StringJS)>, arg1: $Lifecycle$$Type): $DataResult<(R)>
public static "error"<R>(arg0: $Supplier$$Type<(StringJS)>, arg1: R, arg2: $Lifecycle$$Type): $DataResult<(R)>
public static "error"<R>(arg0: $Supplier$$Type<(StringJS)>, arg1: R): $DataResult<(R)>
public static "error"<R>(arg0: $Supplier$$Type<(StringJS)>): $DataResult<(R)>
public static "instance"(): $DataResult$Instance
public "isError"(): boolean
public static "unbox"<R>(arg0: $App$$Type<($DataResult$Mu$$Type), (R)>): $DataResult<(R)>
public static "success"<R>(arg0: R): $DataResult<(R)>
public static "success"<R>(arg0: R, arg1: $Lifecycle$$Type): $DataResult<(R)>
public "apply2"<R2, S>(arg0: $BiFunction$$Type<(R), (R2), (S)>, arg1: $DataResult$$Type<(R2)>): $DataResult<(S)>
public "getOrThrow"(): R
public static "partialGet"<K, V>(arg0: $Function$$Type<(K), (V)>, arg1: $Supplier$$Type<(StringJS)>): $Function<(K), ($DataResult<(V)>)>
public "apply3"<R2, R3, S>(arg0: $Function3$$Type<(R), (R2), (R3), (S)>, arg1: $DataResult$$Type<(R2)>, arg2: $DataResult$$Type<(R3)>): $DataResult<(S)>
public "getPartialOrThrow"(): R
public static "appendMessages"(arg0: StringJS, arg1: StringJS): StringJS
public "apply2stable"<R2, S>(arg0: $BiFunction$$Type<(R), (R2), (S)>, arg1: $DataResult$$Type<(R2)>): $DataResult<(S)>
public "addLifecycle"(arg0: $Lifecycle$$Type): $DataResult<(R)>
set "partial"(value: any)
set "partial"(value: $Supplier$$Type)
get "orThrow"(): R
get "partialOrThrow"(): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataResult$Error$$Type<R> = ({"partialValue"?: (R)?, "messageSupplier"?: $Supplier$$Type<(StringJS)>, "lifecycle"?: $Lifecycle$$Type}) | ([partialValue?: (R)?, messageSupplier?: $Supplier$$Type<(StringJS)>, lifecycle?: $Lifecycle$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DataResult$Error$$Original<R> = $DataResult$Error<(R)>;}
declare module "com.mojang.serialization.MapEncoder" {
import {$KeyCompressor, $KeyCompressor$$Type} from "com.mojang.serialization.KeyCompressor"
import {$Keyable, $Keyable$$Interface} from "com.mojang.serialization.Keyable"
import {$DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function$$Type} from "java.util.function.Function"
import {$DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$RecordBuilder, $RecordBuilder$$Type} from "com.mojang.serialization.RecordBuilder"
import {$Lifecycle$$Type} from "com.mojang.serialization.Lifecycle"
import {$Encoder} from "com.mojang.serialization.Encoder"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"

export interface $MapEncoder$$Interface<A> extends $Keyable$$Interface {
}

export class $MapEncoder<A> implements $MapEncoder$$Interface {
 "encode"<T>(arg0: A, arg1: $DynamicOps$$Type<(T)>, arg2: $RecordBuilder$$Type<(T)>): $RecordBuilder<(T)>
 "encoder"(): $Encoder<(A)>
static "makeCompressedBuilder"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: $KeyCompressor$$Type<(T)>): $RecordBuilder<(T)>
 "flatComap"<B>(arg0: $Function$$Type<(B), ($DataResult$$Type<(A)>)>): $MapEncoder<(B)>
 "compressor"<T>(arg0: $DynamicOps$$Type<(T)>): $KeyCompressor<(T)>
 "comap"<B>(arg0: $Function$$Type<(B), (A)>): $MapEncoder<(B)>
 "withLifecycle"(arg0: $Lifecycle$$Type): $MapEncoder<(A)>
 "compressedBuilder"<T>(arg0: $DynamicOps$$Type<(T)>): $RecordBuilder<(T)>
 "keys"<T>(arg0: $DynamicOps$$Type<(T)>): $Stream<(T)>
static "forStrings"(arg0: $Supplier$$Type<($Stream$$Type<(StringJS)>)>): $Keyable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapEncoder$$Type<A> = ($MapEncoder<(A)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapEncoder$$Original<A> = $MapEncoder<(A)>;}
declare module "com.mojang.serialization.Decoder$Terminal" {
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Decoder} from "com.mojang.serialization.Decoder"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"

export interface $Decoder$Terminal$$Interface<A> {

(arg0: $DynamicOps<(T)>, arg1: T): $DataResult$$Type<(A)>
}

export class $Decoder$Terminal<A> implements $Decoder$Terminal$$Interface {
 "decode"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: T): $DataResult<(A)>
 "decoder"(): $Decoder<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Decoder$Terminal$$Type<A> = ((arg0: $DynamicOps<(T)>, arg1: T) => $DataResult$$Type<(A)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Decoder$Terminal$$Original<A> = $Decoder$Terminal<(A)>;}
declare module "com.mojang.serialization.Encoder" {
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Function$$Type} from "java.util.function.Function"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$MapEncoder} from "com.mojang.serialization.MapEncoder"
import {$Lifecycle$$Type} from "com.mojang.serialization.Lifecycle"

export interface $Encoder$$Interface<A> {

(arg0: A, arg1: $DynamicOps<(T)>, arg2: T): $DataResult$$Type<(T)>
}

export class $Encoder<A> implements $Encoder$$Interface {
 "encode"<T>(arg0: A, arg1: $DynamicOps$$Type<(T)>, arg2: T): $DataResult<(T)>
static "empty"<A>(): $MapEncoder<(A)>
static "error"<A>(arg0: StringJS): $Encoder<(A)>
 "flatComap"<B>(arg0: $Function$$Type<(B), ($DataResult$$Type<(A)>)>): $Encoder<(B)>
 "fieldOf"(arg0: StringJS): $MapEncoder<(A)>
 "comap"<B>(arg0: $Function$$Type<(B), (A)>): $Encoder<(B)>
 "withLifecycle"(arg0: $Lifecycle$$Type): $Encoder<(A)>
 "encodeStart"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: A): $DataResult<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Encoder$$Type<A> = ((arg0: A, arg1: $DynamicOps<(T)>, arg2: T) => $DataResult$$Type<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Encoder$$Original<A> = $Encoder<(A)>;}
declare module "com.mojang.serialization.Dynamic" {
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$Map} from "java.util.Map"
import {$DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Optional$$Type} from "java.util.Optional"
import {$OptionalDynamic} from "com.mojang.serialization.OptionalDynamic"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$IntStream} from "java.util.stream.IntStream"
import {$DataResult} from "com.mojang.serialization.DataResult"
import {$LongStream} from "java.util.stream.LongStream"
import {$Decoder$$Type} from "com.mojang.serialization.Decoder"
import {$Function$$Type} from "java.util.function.Function"
import {$DynamicLike} from "com.mojang.serialization.DynamicLike"
import {$Stream} from "java.util.stream.Stream"
import {$ByteBuffer} from "java.nio.ByteBuffer"

export class $Dynamic<T> extends $DynamicLike<(T)> {
constructor(arg0: $DynamicOps$$Type<(T)>)
constructor(arg0: $DynamicOps$$Type<(T)>, arg1: T)

public "remove"(arg0: StringJS): $Dynamic<(T)>
public "get"(arg0: StringJS): $OptionalDynamic<(T)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "cast"<U>(arg0: $DynamicOps$$Type<(U)>): U
public "update"(arg0: StringJS, arg1: $Function$$Type<($Dynamic<(never)>), ($Dynamic$$Type<(never)>)>): $Dynamic<(T)>
public "convert"<R>(arg0: $DynamicOps$$Type<(R)>): $Dynamic<(R)>
public static "convert"<S, T>(arg0: $DynamicOps$$Type<(S)>, arg1: $DynamicOps$$Type<(T)>, arg2: S): T
public "decode"<A>(arg0: $Decoder$$Type<(A)>): $DataResult<($Pair<(A), (T)>)>
public "getValue"(): T
public "map"(arg0: $Function$$Type<(T), (T)>): $Dynamic<(T)>
public static "copyField"(arg0: $Dynamic$$Type<(never)>, arg1: StringJS, arg2: $Dynamic$$Type<(never)>, arg3: StringJS): $Dynamic<(never)>
public "merge"(arg0: $Dynamic$$Type<(never)>): $OptionalDynamic<(T)>
public "merge"(arg0: $Dynamic$$Type<(never)>, arg1: $Dynamic$$Type<(never)>): $OptionalDynamic<(T)>
public "set"(arg0: StringJS, arg1: $Dynamic$$Type<(never)>): $Dynamic<(T)>
public "getElement"(arg0: StringJS): $DataResult<(T)>
public "asString"(): $DataResult<(StringJS)>
public "getGeneric"(arg0: T): $DataResult<(T)>
public "castTyped"<U>(arg0: $DynamicOps$$Type<(U)>): $Dynamic<(U)>
public "asNumber"(): $DataResult<(number)>
public "asBoolean"(): $DataResult<(boolean)>
public "asMapOpt"(): $DataResult<($Stream<($Pair<($Dynamic<(T)>), ($Dynamic<(T)>)>)>)>
public "into"<V>(arg0: $Function$$Type<($Dynamic<(T)>), (V)>): V
public "getMapValues"(): $DataResult<($Map<($Dynamic<(T)>), ($Dynamic<(T)>)>)>
public "updateGeneric"(arg0: T, arg1: $Function$$Type<(T), (T)>): $Dynamic<(T)>
public "asLongStreamOpt"(): $DataResult<($LongStream)>
public "replaceField"(arg0: StringJS, arg1: StringJS, arg2: ($Dynamic$$Type<(never)>)?): $Dynamic<(T)>
public "renameAndFixField"(arg0: StringJS, arg1: StringJS, arg2: $UnaryOperator$$Type<($Dynamic<(never)>)>): $Dynamic<(T)>
public "asByteBufferOpt"(): $DataResult<($ByteBuffer)>
public "updateMapValues"(arg0: $Function$$Type<($Pair<($Dynamic<(never)>), ($Dynamic<(never)>)>), ($Pair$$Type<($Dynamic$$Type<(never)>), ($Dynamic$$Type<(never)>)>)>): $Dynamic<(T)>
public "renameField"(arg0: StringJS, arg1: StringJS): $Dynamic<(T)>
public "setFieldIfPresent"(arg0: StringJS, arg1: ($Dynamic$$Type<(never)>)?): $Dynamic<(T)>
public "getElementGeneric"(arg0: T): $DataResult<(T)>
public static "copyAndFixField"<T>(arg0: $Dynamic$$Type<(T)>, arg1: StringJS, arg2: $Dynamic$$Type<(never)>, arg3: StringJS, arg4: $UnaryOperator$$Type<($Dynamic<(T)>)>): $Dynamic<(never)>
public "asStreamOpt"(): $DataResult<($Stream<($Dynamic<(T)>)>)>
public "asIntStreamOpt"(): $DataResult<($IntStream)>
get "value"(): T
get "mapValues"(): $DataResult<($Map<($Dynamic<(T)>), ($Dynamic<(T)>)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Dynamic$$Type<T> = ($Dynamic<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Dynamic$$Original<T> = $Dynamic<(T)>;}
declare module "com.mojang.serialization.DataResult" {
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$DataResult$Instance} from "com.mojang.serialization.DataResult$Instance"
import {$App$$Type, $App$$Interface} from "com.mojang.datafixers.kinds.App"
import {$Optional} from "java.util.Optional"
import {$Function3$$Type} from "com.mojang.datafixers.util.Function3"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$DataResult$Mu, $DataResult$Mu$$Type} from "com.mojang.serialization.DataResult$Mu"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Lifecycle, $Lifecycle$$Type} from "com.mojang.serialization.Lifecycle"
import {$Throwable} from "java.lang.Throwable"
import {$DataResult$Error, $DataResult$Error$$Type} from "com.mojang.serialization.DataResult$Error"

export interface $DataResult$$Interface<R> extends $App$$Interface<($DataResult$Mu), (R)> {
set "partial"(value: R)
set "partial"(value: $Supplier$$Type<(R)>)
get "orThrow"(): R
get "partialOrThrow"(): R
}

export class $DataResult<R> implements $DataResult$$Interface {
 "map"<T>(arg0: $Function$$Type<(R), (T)>): $DataResult<(T)>
 "result"(): $Optional<(R)>
 "flatMap"<R2>(arg0: $Function$$Type<(R), ($DataResult$$Type<(R2)>)>): $DataResult<(R2)>
static "error"<R>(arg0: $Supplier$$Type<(StringJS)>, arg1: $Lifecycle$$Type): $DataResult<(R)>
static "error"<R>(arg0: $Supplier$$Type<(StringJS)>, arg1: R, arg2: $Lifecycle$$Type): $DataResult<(R)>
 "error"(): $Optional<($DataResult$Error<(R)>)>
static "error"<R>(arg0: $Supplier$$Type<(StringJS)>, arg1: R): $DataResult<(R)>
static "error"<R>(arg0: $Supplier$$Type<(StringJS)>): $DataResult<(R)>
static "instance"(): $DataResult$Instance
 "isError"(): boolean
static "unbox"<R>(arg0: $App$$Type<($DataResult$Mu$$Type), (R)>): $DataResult<(R)>
static "success"<R>(arg0: R): $DataResult<(R)>
static "success"<R>(arg0: R, arg1: $Lifecycle$$Type): $DataResult<(R)>
 "ap"<R2>(arg0: $DataResult$$Type<($Function$$Type<(R), (R2)>)>): $DataResult<(R2)>
 "lifecycle"(): $Lifecycle
 "apply2"<R2, S>(arg0: $BiFunction$$Type<(R), (R2), (S)>, arg1: $DataResult$$Type<(R2)>): $DataResult<(S)>
 "setPartial"(arg0: R): $DataResult<(R)>
 "setPartial"(arg0: $Supplier$$Type<(R)>): $DataResult<(R)>
 "mapError"(arg0: $UnaryOperator$$Type<(StringJS)>): $DataResult<(R)>
 "isSuccess"(): boolean
 "getOrThrow"<E extends $Throwable>(arg0: $Function$$Type<(StringJS), (E)>): R
 "getOrThrow"(): R
static "partialGet"<K, V>(arg0: $Function$$Type<(K), (V)>, arg1: $Supplier$$Type<(StringJS)>): $Function<(K), ($DataResult<(V)>)>
 "mapOrElse"<T>(arg0: $Function$$Type<(R), (T)>, arg1: $Function$$Type<($DataResult$Error<(R)>), (T)>): T
 "apply3"<R2, R3, S>(arg0: $Function3$$Type<(R), (R2), (R3), (S)>, arg1: $DataResult$$Type<(R2)>, arg2: $DataResult$$Type<(R3)>): $DataResult<(S)>
 "ifSuccess"(arg0: $Consumer$$Type<(R)>): $DataResult<(R)>
 "ifError"(arg0: $Consumer$$Type<($DataResult$Error<(R)>)>): $DataResult<(R)>
 "promotePartial"(arg0: $Consumer$$Type<(StringJS)>): $DataResult<(R)>
 "setLifecycle"(arg0: $Lifecycle$$Type): $DataResult<(R)>
 "resultOrPartial"(arg0: $Consumer$$Type<(StringJS)>): $Optional<(R)>
 "resultOrPartial"(): $Optional<(R)>
 "getPartialOrThrow"(): R
 "getPartialOrThrow"<E extends $Throwable>(arg0: $Function$$Type<(StringJS), (E)>): R
static "appendMessages"(arg0: StringJS, arg1: StringJS): StringJS
 "hasResultOrPartial"(): boolean
 "apply2stable"<R2, S>(arg0: $BiFunction$$Type<(R), (R2), (S)>, arg1: $DataResult$$Type<(R2)>): $DataResult<(S)>
 "addLifecycle"(arg0: $Lifecycle$$Type): $DataResult<(R)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataResult$$Type<R> = ($DataResult<(R)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DataResult$$Original<R> = $DataResult<(R)>;}
declare module "com.mojang.serialization.DataResult$Instance$Mu" {
import {$Applicative$Mu$$Interface} from "com.mojang.datafixers.kinds.Applicative$Mu"

export class $DataResult$Instance$Mu implements $Applicative$Mu$$Interface {
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataResult$Instance$Mu$$Type = ($DataResult$Instance$Mu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DataResult$Instance$Mu$$Original = $DataResult$Instance$Mu;}
declare module "com.mojang.serialization.DataResult$Instance" {
import {$DataResult$Instance$Mu, $DataResult$Instance$Mu$$Type} from "com.mojang.serialization.DataResult$Instance$Mu"
import {$Enum} from "java.lang.Enum"
import {$Function9, $Function9$$Type} from "com.mojang.datafixers.util.Function9"
import {$Function8, $Function8$$Type} from "com.mojang.datafixers.util.Function8"
import {$Function7, $Function7$$Type} from "com.mojang.datafixers.util.Function7"
import {$Function6, $Function6$$Type} from "com.mojang.datafixers.util.Function6"
import {$Function5, $Function5$$Type} from "com.mojang.datafixers.util.Function5"
import {$Function4, $Function4$$Type} from "com.mojang.datafixers.util.Function4"
import {$Function3, $Function3$$Type} from "com.mojang.datafixers.util.Function3"
import {$Function11$$Type} from "com.mojang.datafixers.util.Function11"
import {$Function10$$Type} from "com.mojang.datafixers.util.Function10"
import {$Products$P10} from "com.mojang.datafixers.Products$P10"
import {$DataResult$Mu, $DataResult$Mu$$Type} from "com.mojang.serialization.DataResult$Mu"
import {$Products$P3} from "com.mojang.datafixers.Products$P3"
import {$Products$P4} from "com.mojang.datafixers.Products$P4"
import {$Products$P11} from "com.mojang.datafixers.Products$P11"
import {$Products$P1} from "com.mojang.datafixers.Products$P1"
import {$Products$P2} from "com.mojang.datafixers.Products$P2"
import {$Products$P7} from "com.mojang.datafixers.Products$P7"
import {$Products$P8} from "com.mojang.datafixers.Products$P8"
import {$Products$P5} from "com.mojang.datafixers.Products$P5"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Products$P6} from "com.mojang.datafixers.Products$P6"
import {$Products$P16} from "com.mojang.datafixers.Products$P16"
import {$Products$P14} from "com.mojang.datafixers.Products$P14"
import {$Products$P15} from "com.mojang.datafixers.Products$P15"
import {$Products$P12} from "com.mojang.datafixers.Products$P12"
import {$Products$P13} from "com.mojang.datafixers.Products$P13"
import {$Applicative$Mu} from "com.mojang.datafixers.kinds.Applicative$Mu"
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$Products$P9} from "com.mojang.datafixers.Products$P9"
import {$Function13$$Type} from "com.mojang.datafixers.util.Function13"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Function12$$Type} from "com.mojang.datafixers.util.Function12"
import {$Function15$$Type} from "com.mojang.datafixers.util.Function15"
import {$Function14$$Type} from "com.mojang.datafixers.util.Function14"
import {$Function16$$Type} from "com.mojang.datafixers.util.Function16"
import {$K1} from "com.mojang.datafixers.kinds.K1"
import {$Applicative, $Applicative$$Interface} from "com.mojang.datafixers.kinds.Applicative"

export class $DataResult$Instance extends $Enum<($DataResult$Instance)> implements $Applicative$$Interface<($DataResult$Mu), ($DataResult$Instance$Mu)> {
static readonly "INSTANCE": $DataResult$Instance

public static "values"(): ($DataResult$Instance)[]
public static "valueOf"(arg0: StringJS): $DataResult$Instance
public "map"<T, R>(arg0: $Function$$Type<(T), (R)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T)>): $App<($DataResult$Mu), (R)>
public "point"<A>(arg0: A): $App<($DataResult$Mu), (A)>
public "ap"<A, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function$$Type<(A), (R)>)>, arg1: $App$$Type<($DataResult$Mu$$Type), (A)>): $App<($DataResult$Mu), (R)>
public "ap2"<A, B, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($BiFunction$$Type<(A), (B), (R)>)>, arg1: $App$$Type<($DataResult$Mu$$Type), (A)>, arg2: $App$$Type<($DataResult$Mu$$Type), (B)>): $App<($DataResult$Mu), (R)>
public "lift1"<A, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function$$Type<(A), (R)>)>): $Function<($App<($DataResult$Mu), (A)>), ($App<($DataResult$Mu), (R)>)>
public "ap3"<T1, T2, T3, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function3$$Type<(T1), (T2), (T3), (R)>)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T3)>): $App<($DataResult$Mu), (R)>
public static "unbox"<F extends $K1, Mu extends $Applicative$Mu>(arg0: $App$$Type<($DataResult$Instance$Mu$$Type), ($DataResult$Mu$$Type)>): $Applicative<($DataResult$Mu), ($DataResult$Instance$Mu)>
public "ap"<A, R>(arg0: $Function$$Type<(A), (R)>, arg1: $App$$Type<($DataResult$Mu$$Type), (A)>): $App<($DataResult$Mu), (R)>
public "apply2"<A, B, R>(arg0: $BiFunction$$Type<(A), (B), (R)>, arg1: $App$$Type<($DataResult$Mu$$Type), (A)>, arg2: $App$$Type<($DataResult$Mu$$Type), (B)>): $App<($DataResult$Mu), (R)>
public "apply3"<T1, T2, T3, R>(arg0: $Function3$$Type<(T1), (T2), (T3), (R)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T3)>): $App<($DataResult$Mu), (R)>
public "ap16"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function16$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg7: $App$$Type<($DataResult$Mu$$Type), (T7)>, arg8: $App$$Type<($DataResult$Mu$$Type), (T8)>, arg9: $App$$Type<($DataResult$Mu$$Type), (T9)>, arg10: $App$$Type<($DataResult$Mu$$Type), (T10)>, arg11: $App$$Type<($DataResult$Mu$$Type), (T11)>, arg12: $App$$Type<($DataResult$Mu$$Type), (T12)>, arg13: $App$$Type<($DataResult$Mu$$Type), (T13)>, arg14: $App$$Type<($DataResult$Mu$$Type), (T14)>, arg15: $App$$Type<($DataResult$Mu$$Type), (T15)>, arg16: $App$$Type<($DataResult$Mu$$Type), (T16)>): $App<($DataResult$Mu), (R)>
public "ap12"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function12$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (R)>)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg7: $App$$Type<($DataResult$Mu$$Type), (T7)>, arg8: $App$$Type<($DataResult$Mu$$Type), (T8)>, arg9: $App$$Type<($DataResult$Mu$$Type), (T9)>, arg10: $App$$Type<($DataResult$Mu$$Type), (T10)>, arg11: $App$$Type<($DataResult$Mu$$Type), (T11)>, arg12: $App$$Type<($DataResult$Mu$$Type), (T12)>): $App<($DataResult$Mu), (R)>
public "lift3"<T1, T2, T3, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function3$$Type<(T1), (T2), (T3), (R)>)>): $Function3<($App<($DataResult$Mu), (T1)>), ($App<($DataResult$Mu), (T2)>), ($App<($DataResult$Mu), (T3)>), ($App<($DataResult$Mu), (R)>)>
public "lift6"<T1, T2, T3, T4, T5, T6, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function6$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (R)>)>): $Function6<($App<($DataResult$Mu), (T1)>), ($App<($DataResult$Mu), (T2)>), ($App<($DataResult$Mu), (T3)>), ($App<($DataResult$Mu), (T4)>), ($App<($DataResult$Mu), (T5)>), ($App<($DataResult$Mu), (T6)>), ($App<($DataResult$Mu), (R)>)>
public "ap7"<T1, T2, T3, T4, T5, T6, T7, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function7$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (R)>)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg7: $App$$Type<($DataResult$Mu$$Type), (T7)>): $App<($DataResult$Mu), (R)>
public "ap4"<T1, T2, T3, T4, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function4$$Type<(T1), (T2), (T3), (T4), (R)>)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T4)>): $App<($DataResult$Mu), (R)>
public "lift7"<T1, T2, T3, T4, T5, T6, T7, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function7$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (R)>)>): $Function7<($App<($DataResult$Mu), (T1)>), ($App<($DataResult$Mu), (T2)>), ($App<($DataResult$Mu), (T3)>), ($App<($DataResult$Mu), (T4)>), ($App<($DataResult$Mu), (T5)>), ($App<($DataResult$Mu), (T6)>), ($App<($DataResult$Mu), (T7)>), ($App<($DataResult$Mu), (R)>)>
public "lift8"<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function8$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>)>): $Function8<($App<($DataResult$Mu), (T1)>), ($App<($DataResult$Mu), (T2)>), ($App<($DataResult$Mu), (T3)>), ($App<($DataResult$Mu), (T4)>), ($App<($DataResult$Mu), (T5)>), ($App<($DataResult$Mu), (T6)>), ($App<($DataResult$Mu), (T7)>), ($App<($DataResult$Mu), (T8)>), ($App<($DataResult$Mu), (R)>)>
public "ap10"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function10$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (R)>)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg7: $App$$Type<($DataResult$Mu$$Type), (T7)>, arg8: $App$$Type<($DataResult$Mu$$Type), (T8)>, arg9: $App$$Type<($DataResult$Mu$$Type), (T9)>, arg10: $App$$Type<($DataResult$Mu$$Type), (T10)>): $App<($DataResult$Mu), (R)>
public "lift2"<A, B, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($BiFunction$$Type<(A), (B), (R)>)>): $BiFunction<($App<($DataResult$Mu), (A)>), ($App<($DataResult$Mu), (B)>), ($App<($DataResult$Mu), (R)>)>
public "ap15"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function15$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg7: $App$$Type<($DataResult$Mu$$Type), (T7)>, arg8: $App$$Type<($DataResult$Mu$$Type), (T8)>, arg9: $App$$Type<($DataResult$Mu$$Type), (T9)>, arg10: $App$$Type<($DataResult$Mu$$Type), (T10)>, arg11: $App$$Type<($DataResult$Mu$$Type), (T11)>, arg12: $App$$Type<($DataResult$Mu$$Type), (T12)>, arg13: $App$$Type<($DataResult$Mu$$Type), (T13)>, arg14: $App$$Type<($DataResult$Mu$$Type), (T14)>, arg15: $App$$Type<($DataResult$Mu$$Type), (T15)>): $App<($DataResult$Mu), (R)>
public "ap6"<T1, T2, T3, T4, T5, T6, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function6$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (R)>)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T6)>): $App<($DataResult$Mu), (R)>
public "ap13"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function13$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (R)>)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg7: $App$$Type<($DataResult$Mu$$Type), (T7)>, arg8: $App$$Type<($DataResult$Mu$$Type), (T8)>, arg9: $App$$Type<($DataResult$Mu$$Type), (T9)>, arg10: $App$$Type<($DataResult$Mu$$Type), (T10)>, arg11: $App$$Type<($DataResult$Mu$$Type), (T11)>, arg12: $App$$Type<($DataResult$Mu$$Type), (T12)>, arg13: $App$$Type<($DataResult$Mu$$Type), (T13)>): $App<($DataResult$Mu), (R)>
public "lift4"<T1, T2, T3, T4, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function4$$Type<(T1), (T2), (T3), (T4), (R)>)>): $Function4<($App<($DataResult$Mu), (T1)>), ($App<($DataResult$Mu), (T2)>), ($App<($DataResult$Mu), (T3)>), ($App<($DataResult$Mu), (T4)>), ($App<($DataResult$Mu), (R)>)>
public "ap5"<T1, T2, T3, T4, T5, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function5$$Type<(T1), (T2), (T3), (T4), (T5), (R)>)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T5)>): $App<($DataResult$Mu), (R)>
public "ap8"<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function8$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg7: $App$$Type<($DataResult$Mu$$Type), (T7)>, arg8: $App$$Type<($DataResult$Mu$$Type), (T8)>): $App<($DataResult$Mu), (R)>
public "lift9"<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function9$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>)>): $Function9<($App<($DataResult$Mu), (T1)>), ($App<($DataResult$Mu), (T2)>), ($App<($DataResult$Mu), (T3)>), ($App<($DataResult$Mu), (T4)>), ($App<($DataResult$Mu), (T5)>), ($App<($DataResult$Mu), (T6)>), ($App<($DataResult$Mu), (T7)>), ($App<($DataResult$Mu), (T8)>), ($App<($DataResult$Mu), (T9)>), ($App<($DataResult$Mu), (R)>)>
public "ap9"<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function9$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg7: $App$$Type<($DataResult$Mu$$Type), (T7)>, arg8: $App$$Type<($DataResult$Mu$$Type), (T8)>, arg9: $App$$Type<($DataResult$Mu$$Type), (T9)>): $App<($DataResult$Mu), (R)>
public "ap11"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function11$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (R)>)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg7: $App$$Type<($DataResult$Mu$$Type), (T7)>, arg8: $App$$Type<($DataResult$Mu$$Type), (T8)>, arg9: $App$$Type<($DataResult$Mu$$Type), (T9)>, arg10: $App$$Type<($DataResult$Mu$$Type), (T10)>, arg11: $App$$Type<($DataResult$Mu$$Type), (T11)>): $App<($DataResult$Mu), (R)>
public "lift5"<T1, T2, T3, T4, T5, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function5$$Type<(T1), (T2), (T3), (T4), (T5), (R)>)>): $Function5<($App<($DataResult$Mu), (T1)>), ($App<($DataResult$Mu), (T2)>), ($App<($DataResult$Mu), (T3)>), ($App<($DataResult$Mu), (T4)>), ($App<($DataResult$Mu), (T5)>), ($App<($DataResult$Mu), (R)>)>
public "ap14"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>(arg0: $App$$Type<($DataResult$Mu$$Type), ($Function14$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg7: $App$$Type<($DataResult$Mu$$Type), (T7)>, arg8: $App$$Type<($DataResult$Mu$$Type), (T8)>, arg9: $App$$Type<($DataResult$Mu$$Type), (T9)>, arg10: $App$$Type<($DataResult$Mu$$Type), (T10)>, arg11: $App$$Type<($DataResult$Mu$$Type), (T11)>, arg12: $App$$Type<($DataResult$Mu$$Type), (T12)>, arg13: $App$$Type<($DataResult$Mu$$Type), (T13)>, arg14: $App$$Type<($DataResult$Mu$$Type), (T14)>): $App<($DataResult$Mu), (R)>
public "apply9"<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: $Function9$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg7: $App$$Type<($DataResult$Mu$$Type), (T7)>, arg8: $App$$Type<($DataResult$Mu$$Type), (T8)>, arg9: $App$$Type<($DataResult$Mu$$Type), (T9)>): $App<($DataResult$Mu), (R)>
public "apply4"<T1, T2, T3, T4, R>(arg0: $Function4$$Type<(T1), (T2), (T3), (T4), (R)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T4)>): $App<($DataResult$Mu), (R)>
public "apply6"<T1, T2, T3, T4, T5, T6, R>(arg0: $Function6$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (R)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T6)>): $App<($DataResult$Mu), (R)>
public "apply7"<T1, T2, T3, T4, T5, T6, T7, R>(arg0: $Function7$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (R)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg7: $App$$Type<($DataResult$Mu$$Type), (T7)>): $App<($DataResult$Mu), (R)>
public "apply5"<T1, T2, T3, T4, T5, R>(arg0: $Function5$$Type<(T1), (T2), (T3), (T4), (T5), (R)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T5)>): $App<($DataResult$Mu), (R)>
public "apply8"<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: $Function8$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg7: $App$$Type<($DataResult$Mu$$Type), (T7)>, arg8: $App$$Type<($DataResult$Mu$$Type), (T8)>): $App<($DataResult$Mu), (R)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(arg0: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T7)>, arg7: $App$$Type<($DataResult$Mu$$Type), (T8)>, arg8: $App$$Type<($DataResult$Mu$$Type), (T9)>, arg9: $App$$Type<($DataResult$Mu$$Type), (T10)>, arg10: $App$$Type<($DataResult$Mu$$Type), (T11)>): $Products$P11<($DataResult$Mu), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(arg0: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T7)>, arg7: $App$$Type<($DataResult$Mu$$Type), (T8)>, arg8: $App$$Type<($DataResult$Mu$$Type), (T9)>, arg9: $App$$Type<($DataResult$Mu$$Type), (T10)>): $Products$P10<($DataResult$Mu), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9>(arg0: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T7)>, arg7: $App$$Type<($DataResult$Mu$$Type), (T8)>, arg8: $App$$Type<($DataResult$Mu$$Type), (T9)>): $Products$P9<($DataResult$Mu), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(arg0: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T7)>, arg7: $App$$Type<($DataResult$Mu$$Type), (T8)>, arg8: $App$$Type<($DataResult$Mu$$Type), (T9)>, arg9: $App$$Type<($DataResult$Mu$$Type), (T10)>, arg10: $App$$Type<($DataResult$Mu$$Type), (T11)>, arg11: $App$$Type<($DataResult$Mu$$Type), (T12)>, arg12: $App$$Type<($DataResult$Mu$$Type), (T13)>, arg13: $App$$Type<($DataResult$Mu$$Type), (T14)>, arg14: $App$$Type<($DataResult$Mu$$Type), (T15)>, arg15: $App$$Type<($DataResult$Mu$$Type), (T16)>): $Products$P16<($DataResult$Mu), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(arg0: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T7)>, arg7: $App$$Type<($DataResult$Mu$$Type), (T8)>, arg8: $App$$Type<($DataResult$Mu$$Type), (T9)>, arg9: $App$$Type<($DataResult$Mu$$Type), (T10)>, arg10: $App$$Type<($DataResult$Mu$$Type), (T11)>, arg11: $App$$Type<($DataResult$Mu$$Type), (T12)>, arg12: $App$$Type<($DataResult$Mu$$Type), (T13)>, arg13: $App$$Type<($DataResult$Mu$$Type), (T14)>, arg14: $App$$Type<($DataResult$Mu$$Type), (T15)>): $Products$P15<($DataResult$Mu), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(arg0: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T7)>, arg7: $App$$Type<($DataResult$Mu$$Type), (T8)>, arg8: $App$$Type<($DataResult$Mu$$Type), (T9)>, arg9: $App$$Type<($DataResult$Mu$$Type), (T10)>, arg10: $App$$Type<($DataResult$Mu$$Type), (T11)>, arg11: $App$$Type<($DataResult$Mu$$Type), (T12)>, arg12: $App$$Type<($DataResult$Mu$$Type), (T13)>, arg13: $App$$Type<($DataResult$Mu$$Type), (T14)>): $Products$P14<($DataResult$Mu), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(arg0: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T7)>, arg7: $App$$Type<($DataResult$Mu$$Type), (T8)>, arg8: $App$$Type<($DataResult$Mu$$Type), (T9)>, arg9: $App$$Type<($DataResult$Mu$$Type), (T10)>, arg10: $App$$Type<($DataResult$Mu$$Type), (T11)>, arg11: $App$$Type<($DataResult$Mu$$Type), (T12)>, arg12: $App$$Type<($DataResult$Mu$$Type), (T13)>): $Products$P13<($DataResult$Mu), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(arg0: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T7)>, arg7: $App$$Type<($DataResult$Mu$$Type), (T8)>, arg8: $App$$Type<($DataResult$Mu$$Type), (T9)>, arg9: $App$$Type<($DataResult$Mu$$Type), (T10)>, arg10: $App$$Type<($DataResult$Mu$$Type), (T11)>, arg11: $App$$Type<($DataResult$Mu$$Type), (T12)>): $Products$P12<($DataResult$Mu), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12)>
public "group"<T1, T2, T3>(arg0: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T3)>): $Products$P3<($DataResult$Mu), (T1), (T2), (T3)>
public "group"<T1, T2>(arg0: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T2)>): $Products$P2<($DataResult$Mu), (T1), (T2)>
public "group"<T1>(arg0: $App$$Type<($DataResult$Mu$$Type), (T1)>): $Products$P1<($DataResult$Mu), (T1)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8>(arg0: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T7)>, arg7: $App$$Type<($DataResult$Mu$$Type), (T8)>): $Products$P8<($DataResult$Mu), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>
public "group"<T1, T2, T3, T4, T5, T6, T7>(arg0: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T6)>, arg6: $App$$Type<($DataResult$Mu$$Type), (T7)>): $Products$P7<($DataResult$Mu), (T1), (T2), (T3), (T4), (T5), (T6), (T7)>
public "group"<T1, T2, T3, T4, T5, T6>(arg0: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T5)>, arg5: $App$$Type<($DataResult$Mu$$Type), (T6)>): $Products$P6<($DataResult$Mu), (T1), (T2), (T3), (T4), (T5), (T6)>
public "group"<T1, T2, T3, T4, T5>(arg0: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T4)>, arg4: $App$$Type<($DataResult$Mu$$Type), (T5)>): $Products$P5<($DataResult$Mu), (T1), (T2), (T3), (T4), (T5)>
public "group"<T1, T2, T3, T4>(arg0: $App$$Type<($DataResult$Mu$$Type), (T1)>, arg1: $App$$Type<($DataResult$Mu$$Type), (T2)>, arg2: $App$$Type<($DataResult$Mu$$Type), (T3)>, arg3: $App$$Type<($DataResult$Mu$$Type), (T4)>): $Products$P4<($DataResult$Mu), (T1), (T2), (T3), (T4)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataResult$Instance$$Type = (("instance"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DataResult$Instance$$Original = $DataResult$Instance;}
declare module "com.mojang.serialization.Codec" {
import {$DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$Dynamic, $Dynamic$$Type} from "com.mojang.serialization.Dynamic"
import {$PrimitiveCodec} from "com.mojang.serialization.codecs.PrimitiveCodec"
import {$Encoder, $Encoder$$Type, $Encoder$$Interface} from "com.mojang.serialization.Encoder"
import {$Unit} from "com.mojang.datafixers.util.Unit"
import {$Decoder$Terminal, $Decoder$Terminal$$Type} from "com.mojang.serialization.Decoder$Terminal"
import {$MapDecoder$$Type} from "com.mojang.serialization.MapDecoder"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Either} from "com.mojang.datafixers.util.Either"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Decoder, $Decoder$$Type, $Decoder$$Interface} from "com.mojang.serialization.Decoder"
import {$Codec$ResultFunction$$Type} from "com.mojang.serialization.Codec$ResultFunction"
import {$Decoder$Boxed, $Decoder$Boxed$$Type} from "com.mojang.serialization.Decoder$Boxed"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$Map} from "java.util.Map"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$IntStream} from "java.util.stream.IntStream"
import {$SimpleMapCodec} from "com.mojang.serialization.codecs.SimpleMapCodec"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$LongStream} from "java.util.stream.LongStream"
import {$Decoder$Simple, $Decoder$Simple$$Type} from "com.mojang.serialization.Decoder$Simple"
import {$UnboundedMapCodec} from "com.mojang.serialization.codecs.UnboundedMapCodec"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$MapEncoder, $MapEncoder$$Type} from "com.mojang.serialization.MapEncoder"
import {$Lifecycle$$Type} from "com.mojang.serialization.Lifecycle"
import {$ByteBuffer} from "java.nio.ByteBuffer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export interface $Codec$$Interface<A> extends $Encoder$$Interface<(A)>, $Decoder$$Interface<(A)> {
}

export class $Codec<A> implements $Codec$$Interface {
static readonly "FLOAT": $PrimitiveCodec<(float)>
static readonly "INT": $PrimitiveCodec<(integer)>
static readonly "SHORT": $PrimitiveCodec<(short)>
static readonly "PASSTHROUGH": $Codec<($Dynamic<(never)>)>
static readonly "BOOL": $PrimitiveCodec<(boolean)>
static readonly "BYTE_BUFFER": $PrimitiveCodec<($ByteBuffer)>
static readonly "INT_STREAM": $PrimitiveCodec<($IntStream)>
static readonly "BYTE": $PrimitiveCodec<(byte)>
static readonly "LONG_STREAM": $PrimitiveCodec<($LongStream)>
static readonly "STRING": $PrimitiveCodec<(StringJS)>
static readonly "DOUBLE": $PrimitiveCodec<(double)>
static readonly "EMPTY": $MapCodec<($Unit)>
static readonly "LONG": $PrimitiveCodec<(long)>

 "dispatch"<E>(arg0: StringJS, arg1: $Function$$Type<(E), (A)>, arg2: $Function$$Type<(A), ($MapCodec$$Type<(E)>)>): $Codec<(E)>
 "dispatch"<E>(arg0: $Function$$Type<(E), (A)>, arg1: $Function$$Type<(A), ($MapCodec$$Type<(E)>)>): $Codec<(E)>
static "of"<A>(arg0: $MapEncoder$$Type<(A)>, arg1: $MapDecoder$$Type<(A)>, arg2: $Supplier$$Type<(StringJS)>): $MapCodec<(A)>
static "of"<A>(arg0: $MapEncoder$$Type<(A)>, arg1: $MapDecoder$$Type<(A)>): $MapCodec<(A)>
static "of"<A>(arg0: $Encoder$$Type<(A)>, arg1: $Decoder$$Type<(A)>, arg2: StringJS): $Codec<(A)>
static "of"<A>(arg0: $Encoder$$Type<(A)>, arg1: $Decoder$$Type<(A)>): $Codec<(A)>
static "list"<E>(arg0: $Codec$$Type<(E)>): $Codec<($List<(E)>)>
static "list"<E>(arg0: $Codec$$Type<(E)>, arg1: integer, arg2: integer): $Codec<($List<(E)>)>
 "validate"(arg0: $Function$$Type<(A), ($DataResult$$Type<(A)>)>): $Codec<(A)>
 "orElse"(arg0: $UnaryOperator$$Type<(StringJS)>, arg1: A): $Codec<(A)>
 "orElse"(arg0: A): $Codec<(A)>
 "orElse"(arg0: $Consumer$$Type<(StringJS)>, arg1: A): $Codec<(A)>
static "unit"<A>(arg0: A): $Codec<(A)>
static "unit"<A>(arg0: $Supplier$$Type<(A)>): $Codec<(A)>
static "string"(arg0: integer, arg1: integer): $Codec<(StringJS)>
 "orElseGet"(arg0: $UnaryOperator$$Type<(StringJS)>, arg1: $Supplier$$Type<(A)>): $Codec<(A)>
 "orElseGet"(arg0: $Supplier$$Type<(A)>): $Codec<(A)>
 "orElseGet"(arg0: $Consumer$$Type<(StringJS)>, arg1: $Supplier$$Type<(A)>): $Codec<(A)>
static "recursive"<A>(arg0: StringJS, arg1: $Function$$Type<($Codec<(A)>), ($Codec$$Type<(A)>)>): $Codec<(A)>
static "pair"<F, S>(arg0: $Codec$$Type<(F)>, arg1: $Codec$$Type<(S)>): $Codec<($Pair<(F), (S)>)>
static "checkRange"<N extends number>(arg0: N, arg1: N): $Function<(N), ($DataResult<(N)>)>
static "xor"<F, S>(arg0: $Codec$$Type<(F)>, arg1: $Codec$$Type<(S)>): $Codec<($Either<(F), (S)>)>
 "stable"(): $Codec<(A)>
 "lenientOptionalFieldOf"(arg0: StringJS, arg1: $Lifecycle$$Type, arg2: A, arg3: $Lifecycle$$Type): $MapCodec<(A)>
 "lenientOptionalFieldOf"(arg0: StringJS, arg1: A, arg2: $Lifecycle$$Type): $MapCodec<(A)>
 "lenientOptionalFieldOf"(arg0: StringJS, arg1: A): $MapCodec<(A)>
 "lenientOptionalFieldOf"(arg0: StringJS): $MapCodec<($Optional<(A)>)>
 "xmap"<S>(arg0: $Function$$Type<(A), (S)>, arg1: $Function$$Type<(S), (A)>): $Codec<(S)>
static "mapPair"<F, S>(arg0: $MapCodec$$Type<(F)>, arg1: $MapCodec$$Type<(S)>): $MapCodec<($Pair<(F), (S)>)>
 "flatXmap"<S>(arg0: $Function$$Type<(A), ($DataResult$$Type<(S)>)>, arg1: $Function$$Type<(S), ($DataResult$$Type<(A)>)>): $Codec<(S)>
static "either"<F, S>(arg0: $Codec$$Type<(F)>, arg1: $Codec$$Type<(S)>): $Codec<($Either<(F), (S)>)>
static "floatRange"(arg0: float, arg1: float): $Codec<(float)>
static "simpleMap"<K, V>(arg0: $Codec$$Type<(K)>, arg1: $Codec$$Type<(V)>, arg2: $Keyable$$Type): $SimpleMapCodec<(K), (V)>
static "intRange"(arg0: integer, arg1: integer): $Codec<(integer)>
 "deprecated"(arg0: integer): $Codec<(A)>
 "mapResult"(arg0: $Codec$ResultFunction$$Type<(A)>): $Codec<(A)>
 "fieldOf"(arg0: StringJS): $MapEncoder
static "mapEither"<F, S>(arg0: $MapCodec$$Type<(F)>, arg1: $MapCodec$$Type<(S)>): $MapCodec<($Either<(F), (S)>)>
 "partialDispatch"<E>(arg0: StringJS, arg1: $Function$$Type<(E), ($DataResult$$Type<(A)>)>, arg2: $Function$$Type<(A), ($DataResult$$Type<($MapCodec$$Type<(E)>)>)>): $Codec<(E)>
static "optionalField"<F>(arg0: StringJS, arg1: $Codec$$Type<(F)>, arg2: boolean): $MapCodec<($Optional<(F)>)>
static "compoundList"<K, V>(arg0: $Codec$$Type<(K)>, arg1: $Codec$$Type<(V)>): $Codec<($List<($Pair<(K), (V)>)>)>
static "lazyInitialized"<A>(arg0: $Supplier$$Type<($Codec$$Type<(A)>)>): $Codec<(A)>
 "sizeLimitedListOf"(arg0: integer): $Codec<($List<(A)>)>
static "unboundedMap"<K, V>(arg0: $Codec$$Type<(K)>, arg1: $Codec$$Type<(V)>): $UnboundedMapCodec<(K), (V)>
static "dispatchedMap"<K, V>(arg0: $Codec$$Type<(K)>, arg1: $Function$$Type<(K), ($Codec$$Type<(V)>)>): $Codec<($Map<(K), (V)>)>
 "comapFlatMap"<S>(arg0: $Function$$Type<(A), ($DataResult$$Type<(S)>)>, arg1: $Function$$Type<(S), (A)>): $Codec<(S)>
 "withLifecycle"(arg0: $Lifecycle$$Type): $Encoder
 "optionalFieldOf"(arg0: StringJS, arg1: A, arg2: $Lifecycle$$Type): $MapCodec<(A)>
 "optionalFieldOf"(arg0: StringJS, arg1: $Lifecycle$$Type, arg2: A, arg3: $Lifecycle$$Type): $MapCodec<(A)>
 "optionalFieldOf"(arg0: StringJS): $MapCodec<($Optional<(A)>)>
 "optionalFieldOf"(arg0: StringJS, arg1: A): $MapCodec<(A)>
 "promotePartial"(arg0: $Consumer$$Type): $Decoder
 "dispatchMap"<E>(arg0: StringJS, arg1: $Function$$Type<(E), (A)>, arg2: $Function$$Type<(A), ($MapCodec$$Type<(E)>)>): $MapCodec<(E)>
 "dispatchMap"<E>(arg0: $Function$$Type<(E), (A)>, arg1: $Function$$Type<(A), ($MapCodec$$Type<(E)>)>): $MapCodec<(E)>
static "withAlternative"<T, U>(arg0: $Codec$$Type<(T)>, arg1: $Codec$$Type<(U)>, arg2: $Function$$Type<(U), (T)>): $Codec<(T)>
static "withAlternative"<T>(arg0: $Codec$$Type<(T)>, arg1: $Codec$$Type<(T)>): $Codec<(T)>
static "stringResolver"<E>(arg0: $Function$$Type<(E), (StringJS)>, arg1: $Function$$Type<(StringJS), (E)>): $Codec<(E)>
 "dispatchStable"<E>(arg0: $Function$$Type<(E), (A)>, arg1: $Function$$Type<(A), ($MapCodec$$Type<(E)>)>): $Codec<(E)>
 "flatComapMap"<S>(arg0: $Function$$Type<(A), (S)>, arg1: $Function$$Type<(S), ($DataResult$$Type<(A)>)>): $Codec<(S)>
static "sizeLimitedString"(arg0: integer): $Codec<(StringJS)>
static "doubleRange"(arg0: double, arg1: double): $Codec<(double)>
 "listOf"(arg0: integer, arg1: integer): $Codec<($List<(A)>)>
 "listOf"(): $Codec<($List<(A)>)>
 "encode"<T>(arg0: A, arg1: $DynamicOps$$Type<(T)>, arg2: T): $DataResult<(T)>
static "empty"<A>(): $MapEncoder<(A)>
static "error"<A>(arg0: StringJS): $Encoder<(A)>
 "flatComap"<B>(arg0: $Function$$Type<(B), ($DataResult$$Type<(A)>)>): $Encoder<(B)>
 "comap"<B>(arg0: $Function$$Type<(B), (A)>): $Encoder<(B)>
 "encodeStart"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: A): $DataResult<(T)>
 "decode"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: T): $DataResult<($Pair<(A), (T)>)>
 "decode"<T>(arg0: $Dynamic$$Type<(T)>): $DataResult<($Pair<(A), (T)>)>
 "map"<B>(arg0: $Function$$Type<(A), (B)>): $Decoder<(B)>
 "flatMap"<B>(arg0: $Function$$Type<(A), ($DataResult$$Type<(B)>)>): $Decoder<(B)>
 "parse"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: T): $DataResult<(A)>
 "parse"<T>(arg0: $Dynamic$$Type<(T)>): $DataResult<(A)>
 "boxed"(): $Decoder$Boxed<(A)>
 "terminal"(): $Decoder$Terminal<(A)>
static "ofTerminal"<A>(arg0: $Decoder$Terminal$$Type<(A)>): $Decoder<(A)>
static "ofSimple"<A>(arg0: $Decoder$Simple$$Type<(A)>): $Decoder<(A)>
static "ofBoxed"<A>(arg0: $Decoder$Boxed$$Type<(A)>): $Decoder<(A)>
 "simple"(): $Decoder$Simple<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Codec$$Type<A> = ($Codec<(A)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Codec$$Original<A> = $Codec<(A)>;}
declare module "com.mojang.serialization.Compressable" {
import {$KeyCompressor} from "com.mojang.serialization.KeyCompressor"
import {$Keyable, $Keyable$$Interface} from "com.mojang.serialization.Keyable"
import {$DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"

export interface $Compressable$$Interface extends $Keyable$$Interface {
}

export class $Compressable implements $Compressable$$Interface {
 "compressor"<T>(arg0: $DynamicOps$$Type<(T)>): $KeyCompressor<(T)>
 "keys"<T>(arg0: $DynamicOps$$Type<(T)>): $Stream<(T)>
static "forStrings"(arg0: $Supplier$$Type<($Stream$$Type<(StringJS)>)>): $Keyable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Compressable$$Type = ($Compressable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Compressable$$Original = $Compressable;}
declare module "com.mojang.serialization.Codec$ResultFunction" {
import {$DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"

export interface $Codec$ResultFunction$$Interface<A> {
}

export class $Codec$ResultFunction<A> implements $Codec$ResultFunction$$Interface {
 "apply"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: T, arg2: $DataResult$$Type<($Pair$$Type<(A), (T)>)>): $DataResult<($Pair<(A), (T)>)>
 "coApply"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: A, arg2: $DataResult$$Type<(T)>): $DataResult<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Codec$ResultFunction$$Type<A> = ($Codec$ResultFunction<(A)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Codec$ResultFunction$$Original<A> = $Codec$ResultFunction<(A)>;}
declare module "com.mojang.serialization.KeyCompressor" {
import {$DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Stream$$Type} from "java.util.stream.Stream"

export class $KeyCompressor<T> {
constructor(arg0: $DynamicOps$$Type<(T)>, arg1: $Stream$$Type<(T)>)

public "size"(): integer
public "compress"(arg0: T): integer
public "compress"(arg0: StringJS): integer
public "decompress"(arg0: integer): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyCompressor$$Type<T> = ($KeyCompressor<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyCompressor$$Original<T> = $KeyCompressor<(T)>;}
declare module "com.mojang.serialization.DataResult$Mu" {
import {$K1$$Interface} from "com.mojang.datafixers.kinds.K1"

export class $DataResult$Mu implements $K1$$Interface {
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataResult$Mu$$Type = ($DataResult$Mu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DataResult$Mu$$Original = $DataResult$Mu;}
declare module "com.mojang.serialization.MapLike" {
import {$DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Map$$Type} from "java.util.Map"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$Stream} from "java.util.stream.Stream"

export interface $MapLike$$Interface<T> {
}

export class $MapLike<T> implements $MapLike$$Interface {
 "get"(arg0: T): T
 "get"(arg0: StringJS): T
 "entries"(): $Stream<($Pair<(T), (T)>)>
static "forMap"<T>(arg0: $Map$$Type<(T), (T)>, arg1: $DynamicOps$$Type<(T)>): $MapLike<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapLike$$Type<T> = ($MapLike<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapLike$$Original<T> = $MapLike<(T)>;}
declare module "com.mojang.serialization.DynamicLike" {
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Map, $Map$$Type} from "java.util.Map"
import {$OptionalDynamic} from "com.mojang.serialization.OptionalDynamic"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$IntStream, $IntStream$$Type} from "java.util.stream.IntStream"
import {$List} from "java.util.List"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$LongStream, $LongStream$$Type} from "java.util.stream.LongStream"
import {$Dynamic, $Dynamic$$Type} from "com.mojang.serialization.Dynamic"
import {$Function3$$Type} from "com.mojang.datafixers.util.Function3"
import {$Decoder$$Type} from "com.mojang.serialization.Decoder"
import {$Function$$Type} from "java.util.function.Function"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"

export class $DynamicLike<T> {
constructor(arg0: $DynamicOps$$Type<(T)>)

public "asLongStream"(): $LongStream
public "asByteBuffer"(): $ByteBuffer
public "get"(arg0: StringJS): $OptionalDynamic<(T)>
public "decode"<A>(arg0: $Decoder$$Type<(A)>): $DataResult<($Pair<(A), (T)>)>
public "emptyList"(): $Dynamic<(T)>
public "read"<A>(arg0: $Decoder$$Type<(A)>): $DataResult<(A)>
public "asList"<U>(arg0: $Function$$Type<($Dynamic<(T)>), (U)>): $List<(U)>
public "emptyMap"(): $Dynamic<(T)>
public "createMap"(arg0: $Map$$Type<($Dynamic$$Type<(never)>), ($Dynamic$$Type<(never)>)>): $Dynamic<(T)>
public "createLong"(arg0: long): $Dynamic<(T)>
public "createString"(arg0: StringJS): $Dynamic<(T)>
public "getElement"(arg0: StringJS): $DataResult<(T)>
public "getElement"(arg0: StringJS, arg1: T): T
public "asDouble"(arg0: double): double
public "asString"(arg0: StringJS): StringJS
public "asString"(): $DataResult<(StringJS)>
public "createList"(arg0: $Stream$$Type<($Dynamic$$Type<(never)>)>): $Dynamic<(T)>
public "asInt"(arg0: integer): integer
public "createDouble"(arg0: double): $Dynamic<(T)>
public "createFloat"(arg0: float): $Dynamic<(T)>
public "asMap"<K, V>(arg0: $Function$$Type<($Dynamic<(T)>), (K)>, arg1: $Function$$Type<($Dynamic<(T)>), (V)>): $Map<(K), (V)>
public "getGeneric"(arg0: T): $DataResult<(T)>
public "createInt"(arg0: integer): $Dynamic<(T)>
public "createByte"(arg0: byte): $Dynamic<(T)>
public "getOps"(): $DynamicOps<(T)>
public "readMap"<R>(arg0: $DataResult$$Type<(R)>, arg1: $Function3$$Type<(R), ($Dynamic$$Type<(T)>), ($Dynamic$$Type<(T)>), ($DataResult$$Type<(R)>)>): $DataResult<(R)>
public "readMap"<K, V>(arg0: $Decoder$$Type<(K)>, arg1: $Decoder$$Type<(V)>): $DataResult<($List<($Pair<(K), (V)>)>)>
public "readMap"<K, V>(arg0: $Decoder$$Type<(K)>, arg1: $Function$$Type<(K), ($Decoder$$Type<(V)>)>): $DataResult<($List<($Pair<(K), (V)>)>)>
public "asNumber"(): $DataResult<(number)>
public "asNumber"(arg0: number): number
public "asBoolean"(): $DataResult<(boolean)>
public "asBoolean"(arg0: boolean): boolean
public "asMapOpt"(): $DataResult<($Stream<($Pair<($Dynamic<(T)>), ($Dynamic<(T)>)>)>)>
public "asMapOpt"<K, V>(arg0: $Function$$Type<($Dynamic<(T)>), (K)>, arg1: $Function$$Type<($Dynamic<(T)>), (V)>): $DataResult<($Map<(K), (V)>)>
public "asListOpt"<U>(arg0: $Function$$Type<($Dynamic<(T)>), (U)>): $DataResult<($List<(U)>)>
public "asByte"(arg0: byte): byte
public "asShort"(arg0: short): short
public "asFloat"(arg0: float): float
public "asLong"(arg0: long): long
public "asStream"(): $Stream<($Dynamic<(T)>)>
public "readList"<E>(arg0: $Decoder$$Type<(E)>): $DataResult<($List<(E)>)>
public "readList"<E>(arg0: $Function$$Type<($Dynamic<(never)>), ($DataResult$$Type<(E)>)>): $DataResult<($List<(E)>)>
public "createShort"(arg0: short): $Dynamic<(T)>
public "createByteList"(arg0: $ByteBuffer$$Type): $Dynamic<(never)>
public "createBoolean"(arg0: boolean): $Dynamic<(T)>
public "createIntList"(arg0: $IntStream$$Type): $Dynamic<(never)>
public "createLongList"(arg0: $LongStream$$Type): $Dynamic<(never)>
public "asIntStream"(): $IntStream
public "createNumeric"(arg0: number): $Dynamic<(T)>
public "asLongStreamOpt"(): $DataResult<($LongStream)>
public "asByteBufferOpt"(): $DataResult<($ByteBuffer)>
public "getElementGeneric"(arg0: T, arg1: T): T
public "getElementGeneric"(arg0: T): $DataResult<(T)>
public "asStreamOpt"(): $DataResult<($Stream<($Dynamic<(T)>)>)>
public "asIntStreamOpt"(): $DataResult<($IntStream)>
get "ops"(): $DynamicOps<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicLike$$Type<T> = ($DynamicLike<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DynamicLike$$Original<T> = $DynamicLike<(T)>;}
declare module "com.mojang.serialization.Lifecycle" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Lifecycle {
public "add"(arg0: $Lifecycle$$Type): $Lifecycle
public static "stable"(): $Lifecycle
public static "deprecated"(arg0: integer): $Lifecycle
public static "experimental"(): $Lifecycle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Lifecycle$$Type = ($Lifecycle);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Lifecycle$$Original = $Lifecycle;}
