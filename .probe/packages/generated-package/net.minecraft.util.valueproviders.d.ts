declare module "net.minecraft.util.valueproviders.ClampedNormalInt" {
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Codec} from "com.mojang.serialization.Codec"
import {$IntProvider} from "net.minecraft.util.valueproviders.IntProvider"
import {$IntProviderType} from "net.minecraft.util.valueproviders.IntProviderType"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $ClampedNormalInt extends $IntProvider {
static readonly "CODEC": $MapCodec<($ClampedNormalInt)>
static readonly "NON_NEGATIVE_CODEC": $Codec<($IntProvider)>
static readonly "POSITIVE_CODEC": $Codec<($IntProvider)>

public "sample"(arg0: $RandomSource$$Type): integer
public static "sample"(arg0: $RandomSource$$Type, arg1: float, arg2: float, arg3: float, arg4: float): integer
public "toString"(): StringJS
public static "of"(arg0: float, arg1: float, arg2: integer, arg3: integer): $ClampedNormalInt
public "getType"(): $IntProviderType<(never)>
public "getMinValue"(): integer
public "getMaxValue"(): integer
get "type"(): $IntProviderType<(never)>
get "minValue"(): integer
get "maxValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClampedNormalInt$$Type = ($ClampedNormalInt);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClampedNormalInt$$Original = $ClampedNormalInt;}
declare module "net.minecraft.util.valueproviders.IntProvider" {
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$IntProviderType} from "net.minecraft.util.valueproviders.IntProviderType"

export class $IntProvider {
static readonly "CODEC": $Codec<($IntProvider)>
static readonly "NON_NEGATIVE_CODEC": $Codec<($IntProvider)>
static readonly "POSITIVE_CODEC": $Codec<($IntProvider)>

constructor()

public "sample"(arg0: $RandomSource$$Type): integer
public "getType"(): $IntProviderType<(never)>
public "getMinValue"(): integer
public "getMaxValue"(): integer
public static "validateCodec"<T extends $IntProvider>(arg0: integer, arg1: integer, arg2: $Codec$$Type<(T)>): $Codec<(T)>
public static "codec"(arg0: integer, arg1: integer): $Codec<($IntProvider)>
get "type"(): $IntProviderType<(never)>
get "minValue"(): integer
get "maxValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntProvider$$Type = (integer) | ([min: integer, max: integer]) | ({"bounds": [min: integer, max: integer]}) | ({"min": integer, "max": integer}) | ({"min_inclusive": integer, "max_inclusive": integer}) | ({"value": integer}) | ({"clamped": $IntProvider$$Type}) | ({"clamped_normal": $IntProvider$$Type});
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntProvider$$Original = $IntProvider;}
declare module "net.minecraft.util.valueproviders.WeightedListInt" {
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Codec} from "com.mojang.serialization.Codec"
import {$IntProvider, $IntProvider$$Type} from "net.minecraft.util.valueproviders.IntProvider"
import {$IntProviderType} from "net.minecraft.util.valueproviders.IntProviderType"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$SimpleWeightedRandomList$$Type} from "net.minecraft.util.random.SimpleWeightedRandomList"

export class $WeightedListInt extends $IntProvider {
static readonly "CODEC": $MapCodec<($WeightedListInt)>
static readonly "NON_NEGATIVE_CODEC": $Codec<($IntProvider)>
static readonly "POSITIVE_CODEC": $Codec<($IntProvider)>

constructor(arg0: $SimpleWeightedRandomList$$Type<($IntProvider$$Type)>)

public "sample"(arg0: $RandomSource$$Type): integer
public "getType"(): $IntProviderType<(never)>
public "getMinValue"(): integer
public "getMaxValue"(): integer
get "type"(): $IntProviderType<(never)>
get "minValue"(): integer
get "maxValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeightedListInt$$Type = ($WeightedListInt);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WeightedListInt$$Original = $WeightedListInt;}
declare module "net.minecraft.util.valueproviders.FloatProvider" {
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$SampledFloat$$Interface} from "net.minecraft.util.valueproviders.SampledFloat"
import {$Codec} from "com.mojang.serialization.Codec"
import {$FloatProviderType} from "net.minecraft.util.valueproviders.FloatProviderType"

export class $FloatProvider implements $SampledFloat$$Interface {
static readonly "CODEC": $Codec<($FloatProvider)>

constructor()

public "getType"(): $FloatProviderType<(never)>
public "getMinValue"(): float
public "getMaxValue"(): float
public static "codec"(arg0: float, arg1: float): $Codec<($FloatProvider)>
public "sample"(arg0: $RandomSource$$Type): float
get "type"(): $FloatProviderType<(never)>
get "minValue"(): float
get "maxValue"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FloatProvider$$Type = ($FloatProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FloatProvider$$Original = $FloatProvider;}
declare module "net.minecraft.util.valueproviders.ClampedInt" {
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Codec} from "com.mojang.serialization.Codec"
import {$IntProvider, $IntProvider$$Type} from "net.minecraft.util.valueproviders.IntProvider"
import {$IntProviderType} from "net.minecraft.util.valueproviders.IntProviderType"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $ClampedInt extends $IntProvider {
static readonly "CODEC": $MapCodec<($ClampedInt)>
static readonly "NON_NEGATIVE_CODEC": $Codec<($IntProvider)>
static readonly "POSITIVE_CODEC": $Codec<($IntProvider)>

constructor(arg0: $IntProvider$$Type, arg1: integer, arg2: integer)

public "sample"(arg0: $RandomSource$$Type): integer
public static "of"(arg0: $IntProvider$$Type, arg1: integer, arg2: integer): $ClampedInt
public "getType"(): $IntProviderType<(never)>
public "getMinValue"(): integer
public "getMaxValue"(): integer
get "type"(): $IntProviderType<(never)>
get "minValue"(): integer
get "maxValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClampedInt$$Type = ($ClampedInt);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClampedInt$$Original = $ClampedInt;}
declare module "net.minecraft.util.valueproviders.FloatProviderType" {
import {$ConstantFloat} from "net.minecraft.util.valueproviders.ConstantFloat"
import {$UniformFloat} from "net.minecraft.util.valueproviders.UniformFloat"
import {$FloatProvider} from "net.minecraft.util.valueproviders.FloatProvider"
import {$ClampedNormalFloat} from "net.minecraft.util.valueproviders.ClampedNormalFloat"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$TrapezoidFloat} from "net.minecraft.util.valueproviders.TrapezoidFloat"

export interface $FloatProviderType$$Interface<P extends $FloatProvider> {

(): $MapCodec$$Type<(P)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.FloatProviderType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.FloatProviderTypeTag
}

export class $FloatProviderType<P extends $FloatProvider> implements $FloatProviderType$$Interface {
static readonly "UNIFORM": $FloatProviderType<($UniformFloat)>
static readonly "CONSTANT": $FloatProviderType<($ConstantFloat)>
static readonly "CLAMPED_NORMAL": $FloatProviderType<($ClampedNormalFloat)>
static readonly "TRAPEZOID": $FloatProviderType<($TrapezoidFloat)>

static "register"<P extends $FloatProvider>(arg0: StringJS, arg1: $MapCodec$$Type<(P)>): $FloatProviderType<(P)>
 "codec"(): $MapCodec<(P)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FloatProviderType$$Type<P> = (Special.FloatProviderType) | (() => $MapCodec$$Type<(P)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FloatProviderType$$Original<P> = $FloatProviderType<(P)>;}
declare module "net.minecraft.util.valueproviders.IntProviderType" {
import {$UniformInt} from "net.minecraft.util.valueproviders.UniformInt"
import {$ClampedInt} from "net.minecraft.util.valueproviders.ClampedInt"
import {$WeightedListInt} from "net.minecraft.util.valueproviders.WeightedListInt"
import {$ConstantInt} from "net.minecraft.util.valueproviders.ConstantInt"
import {$ClampedNormalInt} from "net.minecraft.util.valueproviders.ClampedNormalInt"
import {$IntProvider} from "net.minecraft.util.valueproviders.IntProvider"
import {$BiasedToBottomInt} from "net.minecraft.util.valueproviders.BiasedToBottomInt"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export interface $IntProviderType$$Interface<P extends $IntProvider> {

(): $MapCodec$$Type<(P)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.IntProviderType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.IntProviderTypeTag
}

export class $IntProviderType<P extends $IntProvider> implements $IntProviderType$$Interface {
static readonly "BIASED_TO_BOTTOM": $IntProviderType<($BiasedToBottomInt)>
static readonly "CLAMPED": $IntProviderType<($ClampedInt)>
static readonly "WEIGHTED_LIST": $IntProviderType<($WeightedListInt)>
static readonly "UNIFORM": $IntProviderType<($UniformInt)>
static readonly "CONSTANT": $IntProviderType<($ConstantInt)>
static readonly "CLAMPED_NORMAL": $IntProviderType<($ClampedNormalInt)>

static "register"<P extends $IntProvider>(arg0: StringJS, arg1: $MapCodec$$Type<(P)>): $IntProviderType<(P)>
 "codec"(): $MapCodec<(P)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntProviderType$$Type<P> = (Special.IntProviderType) | (() => $MapCodec$$Type<(P)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntProviderType$$Original<P> = $IntProviderType<(P)>;}
declare module "net.minecraft.util.valueproviders.UniformInt" {
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Codec} from "com.mojang.serialization.Codec"
import {$IntProvider} from "net.minecraft.util.valueproviders.IntProvider"
import {$IntProviderType} from "net.minecraft.util.valueproviders.IntProviderType"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $UniformInt extends $IntProvider {
static readonly "CODEC": $MapCodec<($UniformInt)>
static readonly "NON_NEGATIVE_CODEC": $Codec<($IntProvider)>
static readonly "POSITIVE_CODEC": $Codec<($IntProvider)>

public "sample"(arg0: $RandomSource$$Type): integer
public "toString"(): StringJS
public static "of"(arg0: integer, arg1: integer): $UniformInt
public "getType"(): $IntProviderType<(never)>
public "getMinValue"(): integer
public "getMaxValue"(): integer
get "type"(): $IntProviderType<(never)>
get "minValue"(): integer
get "maxValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UniformInt$$Type = ($UniformInt);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UniformInt$$Original = $UniformInt;}
declare module "net.minecraft.util.valueproviders.ConstantInt" {
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Codec} from "com.mojang.serialization.Codec"
import {$IntProvider} from "net.minecraft.util.valueproviders.IntProvider"
import {$IntProviderType} from "net.minecraft.util.valueproviders.IntProviderType"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $ConstantInt extends $IntProvider {
static readonly "ZERO": $ConstantInt
static readonly "CODEC": $MapCodec<($ConstantInt)>
static readonly "NON_NEGATIVE_CODEC": $Codec<($IntProvider)>
static readonly "POSITIVE_CODEC": $Codec<($IntProvider)>

public "sample"(arg0: $RandomSource$$Type): integer
public "toString"(): StringJS
public "getValue"(): integer
public static "of"(arg0: integer): $ConstantInt
public "getType"(): $IntProviderType<(never)>
public "getMinValue"(): integer
public "getMaxValue"(): integer
get "value"(): integer
get "type"(): $IntProviderType<(never)>
get "minValue"(): integer
get "maxValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConstantInt$$Type = ($ConstantInt);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConstantInt$$Original = $ConstantInt;}
declare module "net.minecraft.util.valueproviders.BiasedToBottomInt" {
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Codec} from "com.mojang.serialization.Codec"
import {$IntProvider} from "net.minecraft.util.valueproviders.IntProvider"
import {$IntProviderType} from "net.minecraft.util.valueproviders.IntProviderType"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $BiasedToBottomInt extends $IntProvider {
static readonly "CODEC": $MapCodec<($BiasedToBottomInt)>
static readonly "NON_NEGATIVE_CODEC": $Codec<($IntProvider)>
static readonly "POSITIVE_CODEC": $Codec<($IntProvider)>

public "sample"(arg0: $RandomSource$$Type): integer
public "toString"(): StringJS
public static "of"(arg0: integer, arg1: integer): $BiasedToBottomInt
public "getType"(): $IntProviderType<(never)>
public "getMinValue"(): integer
public "getMaxValue"(): integer
get "type"(): $IntProviderType<(never)>
get "minValue"(): integer
get "maxValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiasedToBottomInt$$Type = ($BiasedToBottomInt);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BiasedToBottomInt$$Original = $BiasedToBottomInt;}
declare module "net.minecraft.util.valueproviders.SampledFloat" {
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"

export interface $SampledFloat$$Interface {

(arg0: $RandomSource): float
}

export class $SampledFloat implements $SampledFloat$$Interface {
 "sample"(arg0: $RandomSource$$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SampledFloat$$Type = ((arg0: $RandomSource) => float);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SampledFloat$$Original = $SampledFloat;}
