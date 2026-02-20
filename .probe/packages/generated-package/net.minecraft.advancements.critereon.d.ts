declare module "net.minecraft.advancements.critereon.MinMaxBounds$BoundsFromReaderFactory" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$StringReader, $StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$MinMaxBounds, $MinMaxBounds$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds"

export interface $MinMaxBounds$BoundsFromReaderFactory$$Interface<T extends number, R extends $MinMaxBounds<(object)>> {

(arg0: $StringReader, arg1: $Optional<(T)>, arg2: $Optional<(T)>): R
}

export class $MinMaxBounds$BoundsFromReaderFactory<T extends number, R extends $MinMaxBounds<(object)>> implements $MinMaxBounds$BoundsFromReaderFactory$$Interface {
 "create"(arg0: $StringReader$$Type, arg1: (T)?, arg2: (T)?): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinMaxBounds$BoundsFromReaderFactory$$Type<T, R> = ((arg0: $StringReader, arg1: $Optional<(T)>, arg2: $Optional<(T)>) => R);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinMaxBounds$BoundsFromReaderFactory$$Original<T, R> = $MinMaxBounds$BoundsFromReaderFactory<(T), (R)>;}
declare module "net.minecraft.advancements.critereon.BlockPredicate" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$NbtPredicate, $NbtPredicate$$Type} from "net.minecraft.advancements.critereon.NbtPredicate"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$StatePropertiesPredicate, $StatePropertiesPredicate$$Type} from "net.minecraft.advancements.critereon.StatePropertiesPredicate"
import {$BlockInWorld$$Type} from "net.minecraft.world.level.block.state.pattern.BlockInWorld"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Record} from "java.lang.Record"

export class $BlockPredicate extends $Record {
static readonly "CODEC": $Codec<($BlockPredicate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($BlockPredicate)>

constructor(arg0: ($HolderSet$$Type<($Block$$Type)>)?, arg1: ($StatePropertiesPredicate$$Type)?, arg2: ($NbtPredicate$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $BlockInWorld$$Type): boolean
public "matches"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type): boolean
public "properties"(): $Optional<($StatePropertiesPredicate)>
public "requiresNbt"(): boolean
public "blocks"(): $Optional<($HolderSet<($Block)>)>
public "nbt"(): $Optional<($NbtPredicate)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPredicate$$Type = ({"nbt"?: ($NbtPredicate$$Type)?, "properties"?: ($StatePropertiesPredicate$$Type)?, "blocks"?: ($HolderSet$$Type<($Block$$Type)>)?}) | ([nbt?: ($NbtPredicate$$Type)?, properties?: ($StatePropertiesPredicate$$Type)?, blocks?: ($HolderSet$$Type<($Block$$Type)>)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockPredicate$$Original = $BlockPredicate;}
declare module "net.minecraft.advancements.critereon.StatePropertiesPredicate$PropertyMatcher" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Optional} from "java.util.Optional"
import {$StateHolder, $StateHolder$$Type} from "net.minecraft.world.level.block.state.StateHolder"
import {$StatePropertiesPredicate$ValueMatcher, $StatePropertiesPredicate$ValueMatcher$$Type} from "net.minecraft.advancements.critereon.StatePropertiesPredicate$ValueMatcher"
import {$StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $StatePropertiesPredicate$PropertyMatcher extends $Record {
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($StatePropertiesPredicate$PropertyMatcher)>

constructor(arg0: StringJS, arg1: $StatePropertiesPredicate$ValueMatcher$$Type)

public "name"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "match"<S extends $StateHolder<(object), (object)>>(arg0: $StateDefinition$$Type<(never), (S)>, arg1: S): boolean
public "checkState"(arg0: $StateDefinition$$Type<(never), (never)>): $Optional<(StringJS)>
public "valueMatcher"(): $StatePropertiesPredicate$ValueMatcher
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatePropertiesPredicate$PropertyMatcher$$Type = ({"valueMatcher"?: $StatePropertiesPredicate$ValueMatcher$$Type, "name"?: StringJS}) | ([valueMatcher?: $StatePropertiesPredicate$ValueMatcher$$Type, name?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StatePropertiesPredicate$PropertyMatcher$$Original = $StatePropertiesPredicate$PropertyMatcher;}
declare module "net.minecraft.advancements.critereon.CriterionValidator" {
import {$HolderGetter$Provider$$Type} from "net.minecraft.core.HolderGetter$Provider"
import {$Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$List$$Type} from "java.util.List"
import {$ProblemReporter$$Type} from "net.minecraft.util.ProblemReporter"
import {$LootContextParamSet$$Type} from "net.minecraft.world.level.storage.loot.parameters.LootContextParamSet"

export class $CriterionValidator {
constructor(arg0: $ProblemReporter$$Type, arg1: $HolderGetter$Provider$$Type)

public "validate"(arg0: $ContextAwarePredicate$$Type, arg1: $LootContextParamSet$$Type, arg2: StringJS): void
public "validate"(arg0: $List$$Type<($ContextAwarePredicate$$Type)>, arg1: $LootContextParamSet$$Type, arg2: StringJS): void
public "validateEntities"(arg0: $List$$Type<($ContextAwarePredicate$$Type)>, arg1: StringJS): void
public "validateEntity"(arg0: ($ContextAwarePredicate$$Type)?, arg1: StringJS): void
public "validateEntity"(arg0: $ContextAwarePredicate$$Type, arg1: StringJS): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CriterionValidator$$Type = ($CriterionValidator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CriterionValidator$$Original = $CriterionValidator;}
declare module "net.minecraft.advancements.critereon.MinMaxBounds" {
import {$SimpleCommandExceptionType} from "com.mojang.brigadier.exceptions.SimpleCommandExceptionType"
import {$MinMaxBounds$BoundsFactory$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$BoundsFactory"
import {$Optional} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$MinMaxBounds$BoundsFromReaderFactory$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$BoundsFromReaderFactory"
import {$DynamicCommandExceptionType$$Type} from "com.mojang.brigadier.exceptions.DynamicCommandExceptionType"

export interface $MinMaxBounds$$Interface<T extends number> {
get "any"(): boolean
}

export class $MinMaxBounds<T extends number> implements $MinMaxBounds$$Interface {
static readonly "ERROR_SWAPPED": $SimpleCommandExceptionType
static readonly "ERROR_EMPTY": $SimpleCommandExceptionType

 "min"(): $Optional<(T)>
 "max"(): $Optional<(T)>
 "isAny"(): boolean
 "unwrapPoint"(): $Optional<(T)>
static "createCodec"<T extends number, R extends $MinMaxBounds<(object)>>(arg0: $Codec$$Type<(T)>, arg1: $MinMaxBounds$BoundsFactory$$Type<(T), (R)>): $Codec<(R)>
static "fromReader"<T extends number, R extends $MinMaxBounds<(object)>>(arg0: $StringReader$$Type, arg1: $MinMaxBounds$BoundsFromReaderFactory$$Type<(T), (R)>, arg2: $Function$$Type<(StringJS), (T)>, arg3: $Supplier$$Type<($DynamicCommandExceptionType$$Type)>, arg4: $Function$$Type<(T), (T)>): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinMaxBounds$$Type<T> = ($MinMaxBounds<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinMaxBounds$$Original<T> = $MinMaxBounds<(T)>;}
declare module "net.minecraft.advancements.critereon.NbtPredicate" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Tag$$Type} from "net.minecraft.nbt.Tag"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $NbtPredicate extends $Record {
static readonly "CODEC": $Codec<($NbtPredicate)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($NbtPredicate)>

constructor(arg0: $CompoundTag$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $ItemStack$$Type): boolean
public "matches"(arg0: $Entity$$Type): boolean
public "matches"(arg0: $Tag$$Type): boolean
public "tag"(): $CompoundTag
public static "getEntityTagToCompare"(arg0: $Entity$$Type): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NbtPredicate$$Type = ({"tag"?: $CompoundTag$$Type}) | ([tag?: $CompoundTag$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NbtPredicate$$Original = $NbtPredicate;}
declare module "net.minecraft.advancements.critereon.MinMaxBounds$Doubles" {
import {$MinMaxBounds$BoundsFactory$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$BoundsFactory"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$MinMaxBounds$BoundsFromReaderFactory$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$BoundsFromReaderFactory"
import {$DynamicCommandExceptionType$$Type} from "com.mojang.brigadier.exceptions.DynamicCommandExceptionType"
import {$MinMaxBounds, $MinMaxBounds$$Interface} from "net.minecraft.advancements.critereon.MinMaxBounds"
import {$Record} from "java.lang.Record"

export class $MinMaxBounds$Doubles extends $Record implements $MinMaxBounds$$Interface<(double)> {
static readonly "CODEC": $Codec<($MinMaxBounds$Doubles)>
static readonly "ANY": $MinMaxBounds$Doubles

constructor(arg0: (double)?, arg1: (double)?, arg2: (double)?, arg3: (double)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "min"(): $Optional<(double)>
public "max"(): $Optional<(double)>
public "matches"(arg0: double): boolean
public static "between"(arg0: double, arg1: double): $MinMaxBounds$Doubles
public static "atLeast"(arg0: double): $MinMaxBounds$Doubles
public static "atMost"(arg0: double): $MinMaxBounds$Doubles
public static "fromReader"(arg0: $StringReader$$Type, arg1: $Function$$Type<(double), (double)>): $MinMaxBounds$Doubles
public static "fromReader"(arg0: $StringReader$$Type): $MinMaxBounds$Doubles
public static "exactly"(arg0: double): $MinMaxBounds$Doubles
public "minSq"(): $Optional<(double)>
public "maxSq"(): $Optional<(double)>
public "matchesSqr"(arg0: double): boolean
public "isAny"(): boolean
public "unwrapPoint"(): $Optional<(double)>
public static "createCodec"<T extends number, R extends $MinMaxBounds<(object)>>(arg0: $Codec$$Type<(double)>, arg1: $MinMaxBounds$BoundsFactory$$Type<(double), (R)>): $Codec<(R)>
public static "fromReader"<T extends number, R extends $MinMaxBounds<(object)>>(arg0: $StringReader$$Type, arg1: $MinMaxBounds$BoundsFromReaderFactory$$Type<(double), (R)>, arg2: $Function$$Type<(StringJS), (double)>, arg3: $Supplier$$Type<($DynamicCommandExceptionType$$Type)>, arg4: $Function$$Type<(double), (double)>): R
get "any"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinMaxBounds$Doubles$$Type = ({"maxSq"?: (double)?, "min"?: (double)?, "minSq"?: (double)?, "max"?: (double)?}) | ([maxSq?: (double)?, min?: (double)?, minSq?: (double)?, max?: (double)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinMaxBounds$Doubles$$Original = $MinMaxBounds$Doubles;}
declare module "net.minecraft.advancements.critereon.StatePropertiesPredicate$ValueMatcher" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $StatePropertiesPredicate$ValueMatcher$$Interface {
}

export class $StatePropertiesPredicate$ValueMatcher implements $StatePropertiesPredicate$ValueMatcher$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatePropertiesPredicate$ValueMatcher$$Type = ($StatePropertiesPredicate$ValueMatcher);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StatePropertiesPredicate$ValueMatcher$$Original = $StatePropertiesPredicate$ValueMatcher;}
declare module "net.minecraft.advancements.critereon.StatePropertiesPredicate" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Optional} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$StateHolder, $StateHolder$$Type} from "net.minecraft.world.level.block.state.StateHolder"
import {$StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$StatePropertiesPredicate$PropertyMatcher, $StatePropertiesPredicate$PropertyMatcher$$Type} from "net.minecraft.advancements.critereon.StatePropertiesPredicate$PropertyMatcher"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Record} from "java.lang.Record"

export class $StatePropertiesPredicate extends $Record {
static readonly "CODEC": $Codec<($StatePropertiesPredicate)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($StatePropertiesPredicate)>

constructor(arg0: $List$$Type<($StatePropertiesPredicate$PropertyMatcher$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $FluidState$$Type): boolean
public "matches"<S extends $StateHolder<(object), (object)>>(arg0: $StateDefinition$$Type<(never), (S)>, arg1: S): boolean
public "matches"(arg0: $BlockState$$Type): boolean
public "properties"(): $List<($StatePropertiesPredicate$PropertyMatcher)>
public "checkState"(arg0: $StateDefinition$$Type<(never), (never)>): $Optional<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatePropertiesPredicate$$Type = ({"properties"?: $List$$Type<($StatePropertiesPredicate$PropertyMatcher$$Type)>}) | ([properties?: $List$$Type<($StatePropertiesPredicate$PropertyMatcher$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StatePropertiesPredicate$$Original = $StatePropertiesPredicate;}
declare module "net.minecraft.advancements.critereon.MinMaxBounds$BoundsFactory" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$MinMaxBounds, $MinMaxBounds$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds"

export interface $MinMaxBounds$BoundsFactory$$Interface<T extends number, R extends $MinMaxBounds<(object)>> {

(arg0: $Optional<(T)>, arg1: $Optional<(T)>): R
}

export class $MinMaxBounds$BoundsFactory<T extends number, R extends $MinMaxBounds<(object)>> implements $MinMaxBounds$BoundsFactory$$Interface {
 "create"(arg0: (T)?, arg1: (T)?): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinMaxBounds$BoundsFactory$$Type<T, R> = ((arg0: $Optional<(T)>, arg1: $Optional<(T)>) => R);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinMaxBounds$BoundsFactory$$Original<T, R> = $MinMaxBounds$BoundsFactory<(T), (R)>;}
