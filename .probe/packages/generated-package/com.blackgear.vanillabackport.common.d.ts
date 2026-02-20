declare module "com.blackgear.vanillabackport.common.api.variant.PriorityProvider$SelectorCondition" {
import {$Predicate, $Predicate$$Type, $Predicate$$Interface} from "java.util.function.Predicate"

export interface $PriorityProvider$SelectorCondition$$Interface<C> extends $Predicate$$Interface<(C)> {

(arg0: C): boolean
}

export class $PriorityProvider$SelectorCondition<C> implements $PriorityProvider$SelectorCondition$$Interface {
static "alwaysTrue"<C>(): $PriorityProvider$SelectorCondition<(C)>
 "test"(arg0: C): boolean
 "or"(arg0: $Predicate$$Type<(C)>): $Predicate<(C)>
 "negate"(): $Predicate<(C)>
 "and"(arg0: $Predicate$$Type<(C)>): $Predicate<(C)>
static "not"<T>(arg0: $Predicate$$Type<(C)>): $Predicate<(C)>
static "isEqual"<T>(arg0: any): $Predicate<(C)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PriorityProvider$SelectorCondition$$Type<C> = ((arg0: C) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PriorityProvider$SelectorCondition$$Original<C> = $PriorityProvider$SelectorCondition<(C)>;}
declare module "com.blackgear.vanillabackport.common.api.variant.SpawnContext" {
import {$ServerLevelAccessor, $ServerLevelAccessor$$Type} from "net.minecraft.world.level.ServerLevelAccessor"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $SpawnContext extends $Record {
constructor(pos: $BlockPos$$Type, level: $ServerLevelAccessor$$Type, biome: $Holder$$Type<($Biome)>)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "create"(level: $ServerLevelAccessor$$Type, pos: $BlockPos$$Type): $SpawnContext
public "pos"(): $BlockPos
public "level"(): $ServerLevelAccessor
public "biome"(): $Holder<($Biome)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnContext$$Type = ({"pos"?: $BlockPos$$Type, "biome"?: $Holder$$Type<($Biome)>, "level"?: $ServerLevelAccessor$$Type}) | ([pos?: $BlockPos$$Type, biome?: $Holder$$Type<($Biome)>, level?: $ServerLevelAccessor$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpawnContext$$Original = $SpawnContext;}
declare module "com.blackgear.vanillabackport.common.api.bundle.IBundle" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IBundle$$Interface {
get "numberOfItemsToShow"(): integer
set "selectedItem"(value: integer)
get "selectedItem"(): integer
}

export class $IBundle implements $IBundle$$Interface {
 "getNumberOfItemsToShow"(): integer
 "setSelectedItem"(arg0: integer): void
 "getSelectedItem"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBundle$$Type = ($IBundle);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IBundle$$Original = $IBundle;}
declare module "com.blackgear.vanillabackport.common.api.wolf.WolfSoundVariantHolder" {
import {$WolfSoundVariant, $WolfSoundVariant$$Type} from "com.blackgear.vanillabackport.common.api.wolf.WolfSoundVariant"
import {$Wolf$$Type} from "net.minecraft.world.entity.animal.Wolf"

export interface $WolfSoundVariantHolder$$Interface {
set "soundVariant"(value: $WolfSoundVariant$$Type)
get "soundVariant"(): $WolfSoundVariant
}

export class $WolfSoundVariantHolder implements $WolfSoundVariantHolder$$Interface {
static "of"(wolf: $Wolf$$Type): $WolfSoundVariantHolder
 "setSoundVariant"(arg0: $WolfSoundVariant$$Type): void
 "getSoundVariant"(): $WolfSoundVariant
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WolfSoundVariantHolder$$Type = ($WolfSoundVariantHolder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WolfSoundVariantHolder$$Original = $WolfSoundVariantHolder;}
declare module "com.blackgear.vanillabackport.common.api.variant.SpawnPrioritySelectors" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$SpawnCondition, $SpawnCondition$$Type} from "com.blackgear.vanillabackport.common.api.variant.SpawnCondition"
import {$Codec} from "com.mojang.serialization.Codec"
import {$SpawnContext, $SpawnContext$$Type} from "com.blackgear.vanillabackport.common.api.variant.SpawnContext"
import {$PriorityProvider$Selector, $PriorityProvider$Selector$$Type} from "com.blackgear.vanillabackport.common.api.variant.PriorityProvider$Selector"
import {$List, $List$$Type} from "java.util.List"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $SpawnPrioritySelectors extends $Record {
static readonly "CODEC": $Codec<($SpawnPrioritySelectors)>
static readonly "EMPTY": $SpawnPrioritySelectors
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($SpawnPrioritySelectors)>

constructor(selectors: $List$$Type<($PriorityProvider$Selector$$Type<($SpawnContext$$Type), ($SpawnCondition$$Type)>)>)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "single"(condition: $SpawnCondition$$Type, priority: integer): $SpawnPrioritySelectors
public static "fallback"(priority: integer): $SpawnPrioritySelectors
public "selectors"(): $List<($PriorityProvider$Selector<($SpawnContext), ($SpawnCondition)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnPrioritySelectors$$Type = ({"selectors"?: $List$$Type<($PriorityProvider$Selector$$Type<($SpawnContext$$Type), ($SpawnCondition$$Type)>)>}) | ([selectors?: $List$$Type<($PriorityProvider$Selector$$Type<($SpawnContext$$Type), ($SpawnCondition$$Type)>)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpawnPrioritySelectors$$Original = $SpawnPrioritySelectors;}
declare module "com.blackgear.vanillabackport.common.level.entities.animal.PigVariant$ModelType" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Codec} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $PigVariant$ModelType extends $Enum<($PigVariant$ModelType)> implements $StringRepresentable$$Interface {
static readonly "CODEC": $Codec<($PigVariant$ModelType)>
static readonly "COLD": $PigVariant$ModelType
static readonly "NORMAL": $PigVariant$ModelType

public static "values"(): ($PigVariant$ModelType)[]
public static "valueOf"(name: StringJS): $PigVariant$ModelType
public "getSerializedName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PigVariant$ModelType$$Type = (("normal") | ("cold"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PigVariant$ModelType$$Original = $PigVariant$ModelType;}
declare module "com.blackgear.vanillabackport.common.api.variant.ClientAsset" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"

export class $ClientAsset extends $Record {
static readonly "CODEC": $Codec<($ClientAsset)>
static readonly "DEFAULT_FIELD_CODEC": $MapCodec<($ClientAsset)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientAsset)>

constructor(path: $ResourceLocation$$Type)
constructor(id: $ResourceLocation$$Type, path: $ResourceLocation$$Type)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): $ResourceLocation
public "path"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientAsset$$Type = ({"path"?: $ResourceLocation$$Type, "id"?: $ResourceLocation$$Type}) | ([path?: $ResourceLocation$$Type, id?: $ResourceLocation$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientAsset$$Original = $ClientAsset;}
declare module "com.blackgear.vanillabackport.common.level.entities.animal.CowVariant" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$PriorityProvider$$Type, $PriorityProvider$$Interface} from "com.blackgear.vanillabackport.common.api.variant.PriorityProvider"
import {$SpawnCondition, $SpawnCondition$$Type} from "com.blackgear.vanillabackport.common.api.variant.SpawnCondition"
import {$CowVariant$ModelType, $CowVariant$ModelType$$Type} from "com.blackgear.vanillabackport.common.level.entities.animal.CowVariant$ModelType"
import {$Optional} from "java.util.Optional"
import {$SpawnContext} from "com.blackgear.vanillabackport.common.api.variant.SpawnContext"
import {$List} from "java.util.List"
import {$PriorityProvider$SelectorCondition} from "com.blackgear.vanillabackport.common.api.variant.PriorityProvider$SelectorCondition"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ModelAndTexture, $ModelAndTexture$$Type} from "com.blackgear.vanillabackport.common.api.variant.ModelAndTexture"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$PriorityProvider$Selector} from "com.blackgear.vanillabackport.common.api.variant.PriorityProvider$Selector"
import {$Function$$Type} from "java.util.function.Function"
import {$SpawnPrioritySelectors, $SpawnPrioritySelectors$$Type} from "com.blackgear.vanillabackport.common.api.variant.SpawnPrioritySelectors"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Record} from "java.lang.Record"

export class $CowVariant extends $Record implements $PriorityProvider$$Interface<($SpawnContext), ($SpawnCondition)> {
static readonly "CODEC": $Codec<($CowVariant)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($CowVariant)>

constructor(modelAndTexture: $ModelAndTexture$$Type<($CowVariant$ModelType$$Type)>, spawnConditions: $SpawnPrioritySelectors$$Type)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "selectors"(): $List<($PriorityProvider$Selector<($SpawnContext), ($SpawnCondition)>)>
public "spawnConditions"(): $SpawnPrioritySelectors
public "modelAndTexture"(): $ModelAndTexture<($CowVariant$ModelType)>
public static "single"<Context, Condition extends $PriorityProvider$SelectorCondition<(object)>>(condition: $SpawnCondition$$Type, priority: integer): $List<($PriorityProvider$Selector<($SpawnContext), ($SpawnCondition)>)>
public static "pick"<C, T>(stream: $Stream$$Type<(T)>, arg1: $Function$$Type<(T), ($PriorityProvider$$Type<(C), (never)>)>, random: $RandomSource$$Type, context: C): $Optional<(T)>
public static "select"<C, T>(stream: $Stream$$Type<(T)>, arg1: $Function$$Type<(T), ($PriorityProvider$$Type<(C), (never)>)>, context: C): $Stream<(T)>
public static "alwaysTrue"<Context, Condition extends $PriorityProvider$SelectorCondition<(object)>>(priority: integer): $List<($PriorityProvider$Selector<($SpawnContext), ($SpawnCondition)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CowVariant$$Type = ({"modelAndTexture"?: $ModelAndTexture$$Type<($CowVariant$ModelType$$Type)>, "spawnConditions"?: $SpawnPrioritySelectors$$Type}) | ([modelAndTexture?: $ModelAndTexture$$Type<($CowVariant$ModelType$$Type)>, spawnConditions?: $SpawnPrioritySelectors$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CowVariant$$Original = $CowVariant;}
declare module "com.blackgear.vanillabackport.common.level.entities.animal.ChickenVariant" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$PriorityProvider$$Type, $PriorityProvider$$Interface} from "com.blackgear.vanillabackport.common.api.variant.PriorityProvider"
import {$SpawnCondition, $SpawnCondition$$Type} from "com.blackgear.vanillabackport.common.api.variant.SpawnCondition"
import {$Optional} from "java.util.Optional"
import {$SpawnContext} from "com.blackgear.vanillabackport.common.api.variant.SpawnContext"
import {$List} from "java.util.List"
import {$ChickenVariant$ModelType, $ChickenVariant$ModelType$$Type} from "com.blackgear.vanillabackport.common.level.entities.animal.ChickenVariant$ModelType"
import {$PriorityProvider$SelectorCondition} from "com.blackgear.vanillabackport.common.api.variant.PriorityProvider$SelectorCondition"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ModelAndTexture, $ModelAndTexture$$Type} from "com.blackgear.vanillabackport.common.api.variant.ModelAndTexture"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$PriorityProvider$Selector} from "com.blackgear.vanillabackport.common.api.variant.PriorityProvider$Selector"
import {$Function$$Type} from "java.util.function.Function"
import {$SpawnPrioritySelectors, $SpawnPrioritySelectors$$Type} from "com.blackgear.vanillabackport.common.api.variant.SpawnPrioritySelectors"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Record} from "java.lang.Record"

export class $ChickenVariant extends $Record implements $PriorityProvider$$Interface<($SpawnContext), ($SpawnCondition)> {
static readonly "CODEC": $Codec<($ChickenVariant)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ChickenVariant)>

constructor(modelAndTexture: $ModelAndTexture$$Type<($ChickenVariant$ModelType$$Type)>, spawnConditions: $SpawnPrioritySelectors$$Type)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "selectors"(): $List<($PriorityProvider$Selector<($SpawnContext), ($SpawnCondition)>)>
public "spawnConditions"(): $SpawnPrioritySelectors
public "modelAndTexture"(): $ModelAndTexture<($ChickenVariant$ModelType)>
public static "single"<Context, Condition extends $PriorityProvider$SelectorCondition<(object)>>(condition: $SpawnCondition$$Type, priority: integer): $List<($PriorityProvider$Selector<($SpawnContext), ($SpawnCondition)>)>
public static "pick"<C, T>(stream: $Stream$$Type<(T)>, arg1: $Function$$Type<(T), ($PriorityProvider$$Type<(C), (never)>)>, random: $RandomSource$$Type, context: C): $Optional<(T)>
public static "select"<C, T>(stream: $Stream$$Type<(T)>, arg1: $Function$$Type<(T), ($PriorityProvider$$Type<(C), (never)>)>, context: C): $Stream<(T)>
public static "alwaysTrue"<Context, Condition extends $PriorityProvider$SelectorCondition<(object)>>(priority: integer): $List<($PriorityProvider$Selector<($SpawnContext), ($SpawnCondition)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChickenVariant$$Type = ({"modelAndTexture"?: $ModelAndTexture$$Type<($ChickenVariant$ModelType$$Type)>, "spawnConditions"?: $SpawnPrioritySelectors$$Type}) | ([modelAndTexture?: $ModelAndTexture$$Type<($ChickenVariant$ModelType$$Type)>, spawnConditions?: $SpawnPrioritySelectors$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChickenVariant$$Original = $ChickenVariant;}
declare module "com.blackgear.vanillabackport.common.level.entities.animal.PigVariant" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$PriorityProvider$$Type, $PriorityProvider$$Interface} from "com.blackgear.vanillabackport.common.api.variant.PriorityProvider"
import {$SpawnCondition, $SpawnCondition$$Type} from "com.blackgear.vanillabackport.common.api.variant.SpawnCondition"
import {$PigVariant$ModelType, $PigVariant$ModelType$$Type} from "com.blackgear.vanillabackport.common.level.entities.animal.PigVariant$ModelType"
import {$Optional} from "java.util.Optional"
import {$SpawnContext} from "com.blackgear.vanillabackport.common.api.variant.SpawnContext"
import {$List} from "java.util.List"
import {$PriorityProvider$SelectorCondition} from "com.blackgear.vanillabackport.common.api.variant.PriorityProvider$SelectorCondition"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ModelAndTexture, $ModelAndTexture$$Type} from "com.blackgear.vanillabackport.common.api.variant.ModelAndTexture"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$PriorityProvider$Selector} from "com.blackgear.vanillabackport.common.api.variant.PriorityProvider$Selector"
import {$Function$$Type} from "java.util.function.Function"
import {$SpawnPrioritySelectors, $SpawnPrioritySelectors$$Type} from "com.blackgear.vanillabackport.common.api.variant.SpawnPrioritySelectors"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Record} from "java.lang.Record"

export class $PigVariant extends $Record implements $PriorityProvider$$Interface<($SpawnContext), ($SpawnCondition)> {
static readonly "CODEC": $Codec<($PigVariant)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($PigVariant)>

constructor(modelAndTexture: $ModelAndTexture$$Type<($PigVariant$ModelType$$Type)>, spawnConditions: $SpawnPrioritySelectors$$Type)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "selectors"(): $List<($PriorityProvider$Selector<($SpawnContext), ($SpawnCondition)>)>
public "spawnConditions"(): $SpawnPrioritySelectors
public "modelAndTexture"(): $ModelAndTexture<($PigVariant$ModelType)>
public static "single"<Context, Condition extends $PriorityProvider$SelectorCondition<(object)>>(condition: $SpawnCondition$$Type, priority: integer): $List<($PriorityProvider$Selector<($SpawnContext), ($SpawnCondition)>)>
public static "pick"<C, T>(stream: $Stream$$Type<(T)>, arg1: $Function$$Type<(T), ($PriorityProvider$$Type<(C), (never)>)>, random: $RandomSource$$Type, context: C): $Optional<(T)>
public static "select"<C, T>(stream: $Stream$$Type<(T)>, arg1: $Function$$Type<(T), ($PriorityProvider$$Type<(C), (never)>)>, context: C): $Stream<(T)>
public static "alwaysTrue"<Context, Condition extends $PriorityProvider$SelectorCondition<(object)>>(priority: integer): $List<($PriorityProvider$Selector<($SpawnContext), ($SpawnCondition)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PigVariant$$Type = ({"modelAndTexture"?: $ModelAndTexture$$Type<($PigVariant$ModelType$$Type)>, "spawnConditions"?: $SpawnPrioritySelectors$$Type}) | ([modelAndTexture?: $ModelAndTexture$$Type<($PigVariant$ModelType$$Type)>, spawnConditions?: $SpawnPrioritySelectors$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PigVariant$$Original = $PigVariant;}
declare module "com.blackgear.vanillabackport.common.api.variant.PriorityProvider" {
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Optional} from "java.util.Optional"
import {$PriorityProvider$Selector, $PriorityProvider$Selector$$Type} from "com.blackgear.vanillabackport.common.api.variant.PriorityProvider$Selector"
import {$Function$$Type} from "java.util.function.Function"
import {$List, $List$$Type} from "java.util.List"
import {$PriorityProvider$SelectorCondition, $PriorityProvider$SelectorCondition$$Type} from "com.blackgear.vanillabackport.common.api.variant.PriorityProvider$SelectorCondition"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"

export interface $PriorityProvider$$Interface<Context, Condition extends $PriorityProvider$SelectorCondition<(object)>> {

(): $List$$Type<($PriorityProvider$Selector$$Type<(Context), (Condition)>)>
}

export class $PriorityProvider<Context, Condition extends $PriorityProvider$SelectorCondition<(object)>> implements $PriorityProvider$$Interface {
static "single"<Context, Condition extends $PriorityProvider$SelectorCondition<(object)>>(condition: Condition, priority: integer): $List<($PriorityProvider$Selector<(Context), (Condition)>)>
static "pick"<C, T>(stream: $Stream$$Type<(T)>, arg1: $Function$$Type<(T), ($PriorityProvider$$Type<(C), (never)>)>, random: $RandomSource$$Type, context: C): $Optional<(T)>
 "selectors"(): $List<($PriorityProvider$Selector<(Context), (Condition)>)>
static "select"<C, T>(stream: $Stream$$Type<(T)>, arg1: $Function$$Type<(T), ($PriorityProvider$$Type<(C), (never)>)>, context: C): $Stream<(T)>
static "alwaysTrue"<Context, Condition extends $PriorityProvider$SelectorCondition<(object)>>(priority: integer): $List<($PriorityProvider$Selector<(Context), (Condition)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PriorityProvider$$Type<Context, Condition> = (() => $List$$Type<($PriorityProvider$Selector$$Type<(Context), (Condition)>)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PriorityProvider$$Original<Context, Condition> = $PriorityProvider<(Context), (Condition)>;}
declare module "com.blackgear.vanillabackport.common.api.wolf.WolfSoundVariant" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $WolfSoundVariant extends $Record {
static readonly "CODEC": $Codec<($WolfSoundVariant)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($WolfSoundVariant)>

constructor(ambientSound: $SoundEvent$$Type, deathSound: $SoundEvent$$Type, growlSound: $SoundEvent$$Type, hurtSound: $SoundEvent$$Type, pantSound: $SoundEvent$$Type, whineSound: $SoundEvent$$Type)
constructor(ambientSound: $Holder$$Type<($SoundEvent)>, deathSound: $Holder$$Type<($SoundEvent)>, growlSound: $Holder$$Type<($SoundEvent)>, hurtSound: $Holder$$Type<($SoundEvent)>, pantSound: $Holder$$Type<($SoundEvent)>, whineSound: $Holder$$Type<($SoundEvent)>)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "ambientSound"(): $Holder<($SoundEvent)>
public "whineSound"(): $Holder<($SoundEvent)>
public "pantSound"(): $Holder<($SoundEvent)>
public "hurtSound"(): $Holder<($SoundEvent)>
public "deathSound"(): $Holder<($SoundEvent)>
public "growlSound"(): $Holder<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WolfSoundVariant$$Type = ({"ambientSound"?: $Holder$$Type<($SoundEvent)>, "growlSound"?: $Holder$$Type<($SoundEvent)>, "deathSound"?: $Holder$$Type<($SoundEvent)>, "whineSound"?: $Holder$$Type<($SoundEvent)>, "hurtSound"?: $Holder$$Type<($SoundEvent)>, "pantSound"?: $Holder$$Type<($SoundEvent)>}) | ([ambientSound?: $Holder$$Type<($SoundEvent)>, growlSound?: $Holder$$Type<($SoundEvent)>, deathSound?: $Holder$$Type<($SoundEvent)>, whineSound?: $Holder$$Type<($SoundEvent)>, hurtSound?: $Holder$$Type<($SoundEvent)>, pantSound?: $Holder$$Type<($SoundEvent)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WolfSoundVariant$$Original = $WolfSoundVariant;}
declare module "com.blackgear.vanillabackport.common.level.entities.animal.ChickenVariant$ModelType" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Codec} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $ChickenVariant$ModelType extends $Enum<($ChickenVariant$ModelType)> implements $StringRepresentable$$Interface {
static readonly "CODEC": $Codec<($ChickenVariant$ModelType)>
static readonly "COLD": $ChickenVariant$ModelType
static readonly "NORMAL": $ChickenVariant$ModelType

public static "values"(): ($ChickenVariant$ModelType)[]
public static "valueOf"(name: StringJS): $ChickenVariant$ModelType
public "getSerializedName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChickenVariant$ModelType$$Type = (("normal") | ("cold"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChickenVariant$ModelType$$Original = $ChickenVariant$ModelType;}
declare module "com.blackgear.vanillabackport.common.api.variant.SpawnCondition" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$SpawnContext, $SpawnContext$$Type} from "com.blackgear.vanillabackport.common.api.variant.SpawnContext"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$PriorityProvider$SelectorCondition, $PriorityProvider$SelectorCondition$$Interface} from "com.blackgear.vanillabackport.common.api.variant.PriorityProvider$SelectorCondition"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export interface $SpawnCondition$$Interface extends $PriorityProvider$SelectorCondition$$Interface<($SpawnContext)> {
}

export class $SpawnCondition implements $SpawnCondition$$Interface {
static readonly "CODEC": $Codec<($SpawnCondition)>

 "codec"(): $MapCodec<($SpawnCondition)>
static "alwaysTrue"<C>(): $PriorityProvider$SelectorCondition<($SpawnContext)>
 "test"(arg0: $SpawnContext$$Type): boolean
 "or"(arg0: $Predicate$$Type<($SpawnContext)>): $Predicate<($SpawnContext)>
 "negate"(): $Predicate<($SpawnContext)>
 "and"(arg0: $Predicate$$Type<($SpawnContext)>): $Predicate<($SpawnContext)>
static "not"<T>(arg0: $Predicate$$Type<($SpawnContext)>): $Predicate<($SpawnContext)>
static "isEqual"<T>(arg0: any): $Predicate<($SpawnContext)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnCondition$$Type = ($SpawnCondition);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpawnCondition$$Original = $SpawnCondition;}
declare module "com.blackgear.vanillabackport.common.level.entities.animal.CowVariant$ModelType" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Codec} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $CowVariant$ModelType extends $Enum<($CowVariant$ModelType)> implements $StringRepresentable$$Interface {
static readonly "CODEC": $Codec<($CowVariant$ModelType)>
static readonly "COLD": $CowVariant$ModelType
static readonly "WARM": $CowVariant$ModelType
static readonly "NORMAL": $CowVariant$ModelType

public static "values"(): ($CowVariant$ModelType)[]
public static "valueOf"(name: StringJS): $CowVariant$ModelType
public "getSerializedName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CowVariant$ModelType$$Type = (("normal") | ("cold") | ("warm"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CowVariant$ModelType$$Original = $CowVariant$ModelType;}
declare module "com.blackgear.vanillabackport.common.api.variant.ModelAndTexture" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ClientAsset, $ClientAsset$$Type} from "com.blackgear.vanillabackport.common.api.variant.ClientAsset"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"

export class $ModelAndTexture<T> extends $Record {
constructor(model: T, path: $ResourceLocation$$Type)
constructor(model: T, asset: $ClientAsset$$Type)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "model"(): T
public static "codec"<T>(codec: $Codec$$Type<(T)>, entry: T): $MapCodec<($ModelAndTexture<(T)>)>
public static "streamCodec"<T>(modelCodec: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>): $StreamCodec<($RegistryFriendlyByteBuf), ($ModelAndTexture<(T)>)>
public "asset"(): $ClientAsset
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelAndTexture$$Type<T> = ({"model"?: T, "asset"?: $ClientAsset$$Type}) | ([model?: T, asset?: $ClientAsset$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelAndTexture$$Original<T> = $ModelAndTexture<(T)>;}
declare module "com.blackgear.vanillabackport.common.api.variant.PriorityProvider$Selector" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$PriorityProvider$SelectorCondition, $PriorityProvider$SelectorCondition$$Type} from "com.blackgear.vanillabackport.common.api.variant.PriorityProvider$SelectorCondition"
import {$Record} from "java.lang.Record"

export class $PriorityProvider$Selector<Context, Condition extends $PriorityProvider$SelectorCondition<(object)>> extends $Record {
constructor(condition: (Condition)?, priority: integer)
constructor(priority: integer)
constructor(condition: Condition, priority: integer)

public "priority"(): integer
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "condition"(): $Optional<(Condition)>
public static "codec"<Context, Condition extends $PriorityProvider$SelectorCondition<(object)>>(codec: $Codec$$Type<(Condition)>): $Codec<($PriorityProvider$Selector<(Context), (Condition)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PriorityProvider$Selector$$Type<Context, Condition> = ({"priority"?: integer, "condition"?: (Condition)?}) | ([priority?: integer, condition?: (Condition)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PriorityProvider$Selector$$Original<Context, Condition> = $PriorityProvider$Selector<(Context), (Condition)>;}
declare module "com.blackgear.vanillabackport.common.api.leash.LeashExtension$Wrench" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$List$$Type} from "java.util.List"
import {$Record} from "java.lang.Record"

export class $LeashExtension$Wrench extends $Record {
constructor(force: $Vec3$$Type, torque: double)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "scale"(factor: double): $LeashExtension$Wrench
public "force"(): $Vec3
public "torque"(): double
public static "accumulate"(wrenches: $List$$Type<($LeashExtension$Wrench$$Type)>): $LeashExtension$Wrench
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LeashExtension$Wrench$$Type = ({"force"?: $Vec3$$Type, "torque"?: double}) | ([force?: $Vec3$$Type, torque?: double]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LeashExtension$Wrench$$Original = $LeashExtension$Wrench;}
declare module "com.blackgear.vanillabackport.common.api.leash.LeashDataExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LeashDataExtension$$Interface {
}

export class $LeashDataExtension implements $LeashDataExtension$$Interface {
 "angularMomentum"(): double
 "setAngularMomentum"(arg0: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LeashDataExtension$$Type = ($LeashDataExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LeashDataExtension$$Original = $LeashDataExtension;}
declare module "com.blackgear.vanillabackport.common.api.variant.VariantHolder" {
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $VariantHolder$$Interface<T> {
}

export class $VariantHolder<T> implements $VariantHolder$$Interface {
static "vb$trySetOffspringVariant"(child: $LivingEntity$$Type, father: $LivingEntity$$Type, mother: $LivingEntity$$Type): void
static "vb$getVariantHolder"<T>(entity: $LivingEntity$$Type): $VariantHolder<(T)>
 "vb$setVariant"(arg0: T): void
 "vb$getVariant"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VariantHolder$$Type<T> = ($VariantHolder<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VariantHolder$$Original<T> = $VariantHolder<(T)>;}
declare module "com.blackgear.vanillabackport.common.api.leash.LeashExtension" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$LeashExtension$Wrench} from "com.blackgear.vanillabackport.common.api.leash.LeashExtension$Wrench"
import {$Map} from "java.util.Map"
import {$Leashable, $Leashable$$Type} from "net.minecraft.world.entity.Leashable"
import {$Function} from "java.util.function.Function"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$List, $List$$Type} from "java.util.List"
import {$Leashable$LeashData$$Type} from "net.minecraft.world.entity.Leashable$LeashData"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export interface $LeashExtension$$Interface {
}

export class $LeashExtension implements $LeashExtension$$Interface {
static readonly "QUAD_LEASH_OFFSETS": $Map<($Predicate<($Entity)>), ($Function<($Entity), (($Vec3)[])>)>
static readonly "AXIS_SPECIFIC_ELASTICITY": $Vec3
static readonly "LEASHER_ATTACHMENT_POINT": $List<($Vec3)>
static readonly "ENTITY_ATTACHMENT_POINT": $List<($Vec3)>
static readonly "SHARED_QUAD_ATTACHMENT_POINTS": $List<($Vec3)>

 "vb$getQuadLeashHolderOffsets"(): ($Vec3)[]
static "vb$computeElasticInteraction"<E extends $Entity>(entity: E, holder: $Entity$$Type, attachmentPoints: $List$$Type<($Vec3$$Type)>, holderAttachmentPoints: $List$$Type<($Vec3$$Type)>): $List<($LeashExtension$Wrench)>
 "vb$checkElasticInteractions"(entity: $Entity$$Type, data: $Leashable$LeashData$$Type): boolean
 "vb$supportQuadLeashAsHolder"(): boolean
 "vb$onElasticLeashPull"(): void
 "vb$canHaveALeashAttachedTo"(target: $Entity$$Type): boolean
 "vb$leashElasticDistance"(): double
 "vb$notifyLeashHolder"(leashable: $Leashable$$Type): void
 "vb$supportQuadLeash"(): boolean
 "vb$getQuadLeashOffsets"(): ($Vec3)[]
static "vb$createQuadLeashOffsets"(entity: $Entity$$Type, forwardOffset: double, sideOffset: double, widthOffset: double, heightOffset: double): ($Vec3)[]
static "vb$leashableLeashedTo"(entity: $Entity$$Type): $List<($Leashable)>
 "vb$resetAngularMomentum"(): void
static "vb$getHolderMovement"(entity: $Entity$$Type): $Vec3
static "vb$getPreciseBodyRotation"(entity: $Entity$$Type, partialTicks: float): float
 "vb$leashSnapDistance"(): double
static "vb$getKnownMovement"(entity: $Entity$$Type): $Vec3
 "vb$leashDistanceTo"(entity: $Entity$$Type): double
 "vb$whenLeashedTo"(entity: $Entity$$Type): void
static "vb$angularFriction"<E extends $Entity>(entity: E): float
static "vb$leashableInArea"(entity: $Entity$$Type, filter: $Predicate$$Type<($Leashable)>): $List<($Leashable)>
static "vb$leashableInArea"(level: $Level$$Type, pos: $Vec3$$Type, filter: $Predicate$$Type<($Leashable)>): $List<($Leashable)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LeashExtension$$Type = ($LeashExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LeashExtension$$Original = $LeashExtension;}
