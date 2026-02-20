declare module "net.minecraft.advancements.AdvancementTree" {
import {$Iterable} from "java.lang.Iterable"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AdvancementNode} from "net.minecraft.advancements.AdvancementNode"
import {$AdvancementTree$Listener$$Type} from "net.minecraft.advancements.AdvancementTree$Listener"
import {$Set$$Type} from "java.util.Set"
import {$AdvancementHolder$$Type} from "net.minecraft.advancements.AdvancementHolder"

export class $AdvancementTree {
constructor()

public "remove"(arg0: $Set$$Type<($ResourceLocation$$Type)>): void
public "get"(arg0: $ResourceLocation$$Type): $AdvancementNode
public "get"(arg0: $AdvancementHolder$$Type): $AdvancementNode
public "clear"(): void
public "addAll"(arg0: $Collection$$Type<($AdvancementHolder$$Type)>): void
public "roots"(): $Iterable<($AdvancementNode)>
public "nodes"(): $Collection<($AdvancementNode)>
public "setListener"(arg0: $AdvancementTree$Listener$$Type): void
set "listener"(value: $AdvancementTree$Listener$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancementTree$$Type = ($AdvancementTree);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AdvancementTree$$Original = $AdvancementTree;}
declare module "net.minecraft.advancements.AdvancementNode" {
import {$Iterable} from "java.lang.Iterable"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$DisplayInfo} from "net.minecraft.advancements.DisplayInfo"
import {$Advancement} from "net.minecraft.advancements.Advancement"
import {$Set} from "java.util.Set"
import {$AdvancementNodeKJS$$Interface} from "dev.latvian.mods.kubejs.core.AdvancementNodeKJS"
import {$AdvancementHolder, $AdvancementHolder$$Type} from "net.minecraft.advancements.AdvancementHolder"
import {$Component} from "net.minecraft.network.chat.Component"

export class $AdvancementNode implements $AdvancementNodeKJS$$Interface {
constructor(arg0: $AdvancementHolder$$Type, arg1: $AdvancementNode$$Type)

public "parent"(): $AdvancementNode
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "root"(): $AdvancementNode
public "holder"(): $AdvancementHolder
public static "getRoot"(arg0: $AdvancementNode$$Type): $AdvancementNode
public "children"(): $Iterable<($AdvancementNode)>
public "addChild"(arg0: $AdvancementNode$$Type): void
public "advancement"(): $Advancement
public "getTitle"(): $Component
public "getId"(): $ResourceLocation
public "self"(): $AdvancementNode
public "getParent"(): $AdvancementNode
public "getChildren"(): $Set<($AdvancementNode)>
public "addChild"(a: $AdvancementNode$$Type): void
public "hasDisplay"(): boolean
public "getDescription"(): $Component
public "getDisplay"(): $DisplayInfo
public "getDisplayText"(): $Component
get "title"(): $Component
get "id"(): $ResourceLocation
get "description"(): $Component
get "display"(): $DisplayInfo
get "displayText"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancementNode$$Type = ($AdvancementNode);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AdvancementNode$$Original = $AdvancementNode;}
declare module "net.minecraft.advancements.Criterion" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$CriterionTriggerInstance, $CriterionTriggerInstance$$Type} from "net.minecraft.advancements.CriterionTriggerInstance"
import {$Record} from "java.lang.Record"
import {$CriterionTrigger, $CriterionTrigger$$Type} from "net.minecraft.advancements.CriterionTrigger"

export class $Criterion<T extends $CriterionTriggerInstance> extends $Record {
static readonly "CODEC": $Codec<($Criterion<(never)>)>

constructor(arg0: $CriterionTrigger$$Type<(T)>, arg1: T)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "trigger"(): $CriterionTrigger<(T)>
public "triggerInstance"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Criterion$$Type<T> = ({"triggerInstance"?: T, "trigger"?: $CriterionTrigger$$Type<(T)>}) | ([triggerInstance?: T, trigger?: $CriterionTrigger$$Type<(T)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Criterion$$Original<T> = $Criterion<(T)>;}
declare module "net.minecraft.advancements.AdvancementRewards" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$CacheableFunction, $CacheableFunction$$Type} from "net.minecraft.commands.CacheableFunction"
import {$List, $List$$Type} from "java.util.List"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Record} from "java.lang.Record"

export class $AdvancementRewards extends $Record {
static readonly "CODEC": $Codec<($AdvancementRewards)>
static readonly "EMPTY": $AdvancementRewards

constructor(experience: integer, loot: $List$$Type<($ResourceKey$$Type<($LootTable$$Type)>)>, recipes: $List$$Type<($ResourceLocation$$Type)>, arg3: ($CacheableFunction$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "function"(): $Optional<($CacheableFunction)>
public "grant"(arg0: $ServerPlayer$$Type): void
public "recipes"(): $List<($ResourceLocation)>
public "loot"(): $List<($ResourceKey<($LootTable)>)>
public "experience"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancementRewards$$Type = ({"experience"?: integer, "loot"?: $List$$Type<($ResourceKey$$Type<($LootTable$$Type)>)>, "function"?: ($CacheableFunction$$Type)?, "recipes"?: $List$$Type<($ResourceLocation$$Type)>}) | ([experience?: integer, loot?: $List$$Type<($ResourceKey$$Type<($LootTable$$Type)>)>, arg?: ($CacheableFunction$$Type)?, recipes?: $List$$Type<($ResourceLocation$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AdvancementRewards$$Original = $AdvancementRewards;}
declare module "net.minecraft.advancements.AdvancementType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$AdvancementHolder$$Type} from "net.minecraft.advancements.AdvancementHolder"
import {$Component} from "net.minecraft.network.chat.Component"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Codec} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ChatFormatting} from "net.minecraft.ChatFormatting"

export class $AdvancementType extends $Enum<($AdvancementType)> implements $StringRepresentable$$Interface {
static readonly "CHALLENGE": $AdvancementType
static readonly "TASK": $AdvancementType
static readonly "GOAL": $AdvancementType
static readonly "CODEC": $Codec<($AdvancementType)>

public static "values"(): ($AdvancementType)[]
public static "valueOf"(arg0: StringJS): $AdvancementType
public "getDisplayName"(): $Component
public "getSerializedName"(): StringJS
public "getChatColor"(): $ChatFormatting
public "createAnnouncement"(arg0: $AdvancementHolder$$Type, arg1: $ServerPlayer$$Type): $MutableComponent
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
get "displayName"(): $Component
get "serializedName"(): StringJS
get "chatColor"(): $ChatFormatting
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancementType$$Type = (("task") | ("challenge") | ("goal"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AdvancementType$$Original = $AdvancementType;}
declare module "net.minecraft.advancements.AdvancementRequirements" {
import {$Collection$$Type} from "java.util.Collection"
import {$Codec} from "com.mojang.serialization.Codec"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$DataResult} from "com.mojang.serialization.DataResult"
import {$List, $List$$Type} from "java.util.List"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Record} from "java.lang.Record"

export class $AdvancementRequirements extends $Record {
static readonly "CODEC": $Codec<($AdvancementRequirements)>
static readonly "EMPTY": $AdvancementRequirements

constructor(arg0: $FriendlyByteBuf$$Type)
constructor(arg0: $List$$Type<($List$$Type<(StringJS)>)>)

public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: $Predicate$$Type<(StringJS)>): boolean
public "isEmpty"(): boolean
public "count"(arg0: $Predicate$$Type<(StringJS)>): integer
public "validate"(arg0: $Set$$Type<(StringJS)>): $DataResult<($AdvancementRequirements)>
public "write"(arg0: $FriendlyByteBuf$$Type): void
public "names"(): $Set<(StringJS)>
public static "allOf"(arg0: $Collection$$Type<(StringJS)>): $AdvancementRequirements
public static "anyOf"(arg0: $Collection$$Type<(StringJS)>): $AdvancementRequirements
public "requirements"(): $List<($List<(StringJS)>)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancementRequirements$$Type = ({"requirements"?: $List$$Type<($List$$Type<(StringJS)>)>}) | ([requirements?: $List$$Type<($List$$Type<(StringJS)>)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AdvancementRequirements$$Original = $AdvancementRequirements;}
declare module "net.minecraft.advancements.CriterionProgress" {
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Instant, $Instant$$Type} from "java.time.Instant"

export class $CriterionProgress {
constructor()
constructor(arg0: $Instant$$Type)

public "toString"(): StringJS
public "isDone"(): boolean
public "grant"(): void
public static "fromNetwork"(arg0: $FriendlyByteBuf$$Type): $CriterionProgress
public "serializeToNetwork"(arg0: $FriendlyByteBuf$$Type): void
public "revoke"(): void
public "getObtained"(): $Instant
get "done"(): boolean
get "obtained"(): $Instant
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CriterionProgress$$Type = ($CriterionProgress);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CriterionProgress$$Original = $CriterionProgress;}
declare module "net.minecraft.advancements.AdvancementProgress" {
import {$Iterable} from "java.lang.Iterable"
import {$AdvancementRequirements$$Type} from "net.minecraft.advancements.AdvancementRequirements"
import {$Codec} from "com.mojang.serialization.Codec"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$CriterionProgress} from "net.minecraft.advancements.CriterionProgress"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Instant} from "java.time.Instant"

export class $AdvancementProgress implements $Comparable$$Interface<($AdvancementProgress)> {
static readonly "CODEC": $Codec<($AdvancementProgress)>

constructor()

public "toString"(): StringJS
public "compareTo"(arg0: $AdvancementProgress$$Type): integer
public "compareTo"(arg0: any): integer
public "update"(arg0: $AdvancementRequirements$$Type): void
public "isDone"(): boolean
public "getPercent"(): float
public "hasProgress"(): boolean
public static "fromNetwork"(arg0: $FriendlyByteBuf$$Type): $AdvancementProgress
public "serializeToNetwork"(arg0: $FriendlyByteBuf$$Type): void
public "getCompletedCriteria"(): $Iterable<(StringJS)>
public "getRemainingCriteria"(): $Iterable<(StringJS)>
public "getCriterion"(arg0: StringJS): $CriterionProgress
public "getFirstProgressDate"(): $Instant
public "grantProgress"(arg0: StringJS): boolean
public "revokeProgress"(arg0: StringJS): boolean
public "getProgressText"(): $Component
get "done"(): boolean
get "percent"(): float
get "completedCriteria"(): $Iterable<(StringJS)>
get "remainingCriteria"(): $Iterable<(StringJS)>
get "firstProgressDate"(): $Instant
get "progressText"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancementProgress$$Type = ($AdvancementProgress);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AdvancementProgress$$Original = $AdvancementProgress;}
declare module "net.minecraft.advancements.AdvancementHolder" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Advancement, $Advancement$$Type} from "net.minecraft.advancements.Advancement"
import {$List} from "java.util.List"
import {$Record} from "java.lang.Record"

export class $AdvancementHolder extends $Record {
static readonly "LIST_STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($List<($AdvancementHolder)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AdvancementHolder)>

constructor(arg0: $ResourceLocation$$Type, arg1: $Advancement$$Type)

public "value"(): $Advancement
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancementHolder$$Type = ({"value"?: $Advancement$$Type, "id"?: $ResourceLocation$$Type}) | ([value?: $Advancement$$Type, id?: $ResourceLocation$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AdvancementHolder$$Original = $AdvancementHolder;}
declare module "net.minecraft.advancements.CriterionTriggerInstance" {
import {$CriterionValidator, $CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"

export interface $CriterionTriggerInstance$$Interface {

(arg0: $CriterionValidator): void
}

export class $CriterionTriggerInstance implements $CriterionTriggerInstance$$Interface {
 "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CriterionTriggerInstance$$Type = ((arg0: $CriterionValidator) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CriterionTriggerInstance$$Original = $CriterionTriggerInstance;}
declare module "net.minecraft.advancements.Advancement" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$HolderGetter$Provider$$Type} from "net.minecraft.core.HolderGetter$Provider"
import {$DisplayInfo, $DisplayInfo$$Type} from "net.minecraft.advancements.DisplayInfo"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$WithConditions} from "net.neoforged.neoforge.common.conditions.WithConditions"
import {$ProblemReporter$$Type} from "net.minecraft.util.ProblemReporter"
import {$AdvancementRewards, $AdvancementRewards$$Type} from "net.minecraft.advancements.AdvancementRewards"
import {$AdvancementHolder$$Type} from "net.minecraft.advancements.AdvancementHolder"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Criterion, $Criterion$$Type} from "net.minecraft.advancements.Criterion"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AdvancementRequirements, $AdvancementRequirements$$Type} from "net.minecraft.advancements.AdvancementRequirements"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Record} from "java.lang.Record"

export class $Advancement extends $Record {
static readonly "CODEC": $Codec<($Advancement)>
static readonly "CONDITIONAL_CODEC": $Codec<($Optional<($WithConditions<($Advancement)>)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Advancement)>

constructor(arg0: ($ResourceLocation$$Type)?, arg1: ($DisplayInfo$$Type)?, arg2: $AdvancementRewards$$Type, arg3: $Map$$Type<(StringJS), ($Criterion$$Type<(never)>)>, arg4: $AdvancementRequirements$$Type, arg5: boolean)
constructor(parent: ($ResourceLocation$$Type)?, display: ($DisplayInfo$$Type)?, rewards: $AdvancementRewards$$Type, criteria: $Map$$Type<(StringJS), ($Criterion$$Type<(never)>)>, requirements: $AdvancementRequirements$$Type, sendsTelemetryEvent: boolean, name: ($Component$$Type)?)

public "name"(): $Optional<($Component)>
public static "name"(arg0: $AdvancementHolder$$Type): $Component
public "parent"(): $Optional<($ResourceLocation)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "validate"(arg0: $ProblemReporter$$Type, arg1: $HolderGetter$Provider$$Type): void
public "display"(): $Optional<($DisplayInfo)>
public "isRoot"(): boolean
public "criteria"(): $Map<(StringJS), ($Criterion<(never)>)>
public "rewards"(): $AdvancementRewards
public "requirements"(): $AdvancementRequirements
public "sendsTelemetryEvent"(): boolean
get "root"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Advancement$$Type = ({"sendsTelemetryEvent"?: boolean, "requirements"?: $AdvancementRequirements$$Type, "name"?: ($Component$$Type)?, "rewards"?: $AdvancementRewards$$Type, "display"?: ($DisplayInfo$$Type)?, "parent"?: ($ResourceLocation$$Type)?, "criteria"?: $Map$$Type<(StringJS), ($Criterion$$Type<(never)>)>}) | ([sendsTelemetryEvent?: boolean, requirements?: $AdvancementRequirements$$Type, name?: ($Component$$Type)?, rewards?: $AdvancementRewards$$Type, display?: ($DisplayInfo$$Type)?, parent?: ($ResourceLocation$$Type)?, criteria?: $Map$$Type<(StringJS), ($Criterion$$Type<(never)>)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Advancement$$Original = $Advancement;}
declare module "net.minecraft.advancements.AdvancementTree$Listener" {
import {$AdvancementNode$$Type} from "net.minecraft.advancements.AdvancementNode"

export interface $AdvancementTree$Listener$$Interface {
}

export class $AdvancementTree$Listener implements $AdvancementTree$Listener$$Interface {
 "onRemoveAdvancementTask"(arg0: $AdvancementNode$$Type): void
 "onAdvancementsCleared"(): void
 "onAddAdvancementRoot"(arg0: $AdvancementNode$$Type): void
 "onRemoveAdvancementRoot"(arg0: $AdvancementNode$$Type): void
 "onAddAdvancementTask"(arg0: $AdvancementNode$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancementTree$Listener$$Type = ($AdvancementTree$Listener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AdvancementTree$Listener$$Original = $AdvancementTree$Listener;}
declare module "net.minecraft.advancements.DisplayInfo" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$AdvancementType, $AdvancementType$$Type} from "net.minecraft.advancements.AdvancementType"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $DisplayInfo {
static readonly "CODEC": $Codec<($DisplayInfo)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($DisplayInfo)>

constructor(arg0: $ItemStack$$Type, arg1: $Component$$Type, arg2: $Component$$Type, arg3: ($ResourceLocation$$Type)?, arg4: $AdvancementType$$Type, arg5: boolean, arg6: boolean, arg7: boolean)

public "getDescription"(): $Component
public "isHidden"(): boolean
public "getType"(): $AdvancementType
public "setLocation"(arg0: float, arg1: float): void
public "getX"(): float
public "getIcon"(): $ItemStack
public "getY"(): float
public "getTitle"(): $Component
public "getBackground"(): $Optional<($ResourceLocation)>
public "shouldAnnounceChat"(): boolean
public "shouldShowToast"(): boolean
get "description"(): $Component
get "hidden"(): boolean
get "type"(): $AdvancementType
get "x"(): float
get "icon"(): $ItemStack
get "y"(): float
get "title"(): $Component
get "background"(): $Optional<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplayInfo$$Type = ($DisplayInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DisplayInfo$$Original = $DisplayInfo;}
declare module "net.minecraft.advancements.CriterionTrigger$Listener" {
import {$PlayerAdvancements$$Type} from "net.minecraft.server.PlayerAdvancements"
import {$AdvancementHolder, $AdvancementHolder$$Type} from "net.minecraft.advancements.AdvancementHolder"
import {$CriterionTriggerInstance, $CriterionTriggerInstance$$Type} from "net.minecraft.advancements.CriterionTriggerInstance"
import {$Record} from "java.lang.Record"

export class $CriterionTrigger$Listener<T extends $CriterionTriggerInstance> extends $Record {
constructor(arg0: T, arg1: $AdvancementHolder$$Type, arg2: StringJS)

public "run"(arg0: $PlayerAdvancements$$Type): void
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "trigger"(): T
public "advancement"(): $AdvancementHolder
public "criterion"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CriterionTrigger$Listener$$Type<T> = ({"advancement"?: $AdvancementHolder$$Type, "trigger"?: T, "criterion"?: StringJS}) | ([advancement?: $AdvancementHolder$$Type, trigger?: T, criterion?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CriterionTrigger$Listener$$Original<T> = $CriterionTrigger$Listener<(T)>;}
declare module "net.minecraft.advancements.CriterionTrigger" {
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$CriterionTrigger$Listener$$Type} from "net.minecraft.advancements.CriterionTrigger$Listener"
import {$PlayerAdvancements$$Type} from "net.minecraft.server.PlayerAdvancements"
import {$Codec} from "com.mojang.serialization.Codec"
import {$CriterionTriggerInstance, $CriterionTriggerInstance$$Type} from "net.minecraft.advancements.CriterionTriggerInstance"

export interface $CriterionTrigger$$Interface<T extends $CriterionTriggerInstance> {
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.TriggerType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.TriggerTypeTag
}

export class $CriterionTrigger<T extends $CriterionTriggerInstance> implements $CriterionTrigger$$Interface {
 "codec"(): $Codec<(T)>
 "addPlayerListener"(arg0: $PlayerAdvancements$$Type, arg1: $CriterionTrigger$Listener$$Type<(T)>): void
 "createCriterion"(arg0: T): $Criterion<(T)>
 "removePlayerListener"(arg0: $PlayerAdvancements$$Type, arg1: $CriterionTrigger$Listener$$Type<(T)>): void
 "removePlayerListeners"(arg0: $PlayerAdvancements$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CriterionTrigger$$Type<T> = (Special.TriggerType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CriterionTrigger$$Original<T> = $CriterionTrigger<(T)>;}
