declare module "net.minecraft.commands.SharedSuggestionProvider$ElementSuggestionType" {
import {$Enum} from "java.lang.Enum"

export class $SharedSuggestionProvider$ElementSuggestionType extends $Enum<($SharedSuggestionProvider$ElementSuggestionType)> {
static readonly "ELEMENTS": $SharedSuggestionProvider$ElementSuggestionType
static readonly "ALL": $SharedSuggestionProvider$ElementSuggestionType
static readonly "TAGS": $SharedSuggestionProvider$ElementSuggestionType

public "shouldSuggestElements"(): boolean
public static "values"(): ($SharedSuggestionProvider$ElementSuggestionType)[]
public static "valueOf"(arg0: StringJS): $SharedSuggestionProvider$ElementSuggestionType
public "shouldSuggestTags"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SharedSuggestionProvider$ElementSuggestionType$$Type = (("tags") | ("elements") | ("all"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SharedSuggestionProvider$ElementSuggestionType$$Original = $SharedSuggestionProvider$ElementSuggestionType;}
declare module "net.minecraft.commands.CommandSourceStack" {
import {$Iterable$$Type} from "java.lang.Iterable"
import {$CommandSigningContext, $CommandSigningContext$$Type} from "net.minecraft.commands.CommandSigningContext"
import {$ClientCommandRegistrationEvent$ClientCommandSourceStack$$Interface} from "dev.architectury.event.events.client.ClientCommandRegistrationEvent$ClientCommandSourceStack"
import {$SharedSuggestionProvider$$Interface} from "net.minecraft.commands.SharedSuggestionProvider"
import {$LocalPlayer} from "net.minecraft.client.player.LocalPlayer"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Set} from "java.util.Set"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$ExecutionCommandSource, $ExecutionCommandSource$$Interface} from "net.minecraft.commands.ExecutionCommandSource"
import {$RecipeManager} from "net.minecraft.world.item.crafting.RecipeManager"
import {$SharedSuggestionProvider$ElementSuggestionType$$Type} from "net.minecraft.commands.SharedSuggestionProvider$ElementSuggestionType"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ClientLevel} from "net.minecraft.client.multiplayer.ClientLevel"
import {$TaskChainer, $TaskChainer$$Type} from "net.minecraft.util.TaskChainer"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$RegistryAccess} from "net.minecraft.core.RegistryAccess"
import {$SharedSuggestionProvider$TextCoordinates, $SharedSuggestionProvider$TextCoordinates$$Type} from "net.minecraft.commands.SharedSuggestionProvider$TextCoordinates"
import {$TraceCallbacks$$Type} from "net.minecraft.commands.execution.TraceCallbacks"
import {$FeatureFlagSet} from "net.minecraft.world.flag.FeatureFlagSet"
import {$Level} from "net.minecraft.world.level.Level"
import {$ResultConsumer} from "com.mojang.brigadier.ResultConsumer"
import {$BinaryOperator$$Type} from "java.util.function.BinaryOperator"
import {$ICommandSourceStackExtension$$Interface} from "net.neoforged.neoforge.common.extensions.ICommandSourceStackExtension"
import {$AdvancementHolder} from "net.minecraft.advancements.AdvancementHolder"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Message$$Type} from "com.mojang.brigadier.Message"
import {$SimpleCommandExceptionType} from "com.mojang.brigadier.exceptions.SimpleCommandExceptionType"
import {$CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$Vec2, $Vec2$$Type} from "net.minecraft.world.phys.Vec2"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$OutgoingChatMessage$$Type} from "net.minecraft.network.chat.OutgoingChatMessage"
import {$Function$$Type} from "java.util.function.Function"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$CommandSource, $CommandSource$$Type} from "net.minecraft.commands.CommandSource"
import {$Suggestions} from "com.mojang.brigadier.suggestion.Suggestions"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$CommandExceptionType$$Type} from "com.mojang.brigadier.exceptions.CommandExceptionType"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"
import {$LazyComponentKJS$$Type} from "dev.latvian.mods.kubejs.core.LazyComponentKJS"
import {$CommandSyntaxException$$Type} from "com.mojang.brigadier.exceptions.CommandSyntaxException"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$CommandDispatcher} from "com.mojang.brigadier.CommandDispatcher"
import {$Scoreboard} from "net.minecraft.world.scores.Scoreboard"
import {$EntityAnchorArgument$Anchor, $EntityAnchorArgument$Anchor$$Type} from "net.minecraft.commands.arguments.EntityAnchorArgument$Anchor"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$CommandResultCallback, $CommandResultCallback$$Type} from "net.minecraft.commands.CommandResultCallback"
import {$ChatType$Bound$$Type} from "net.minecraft.network.chat.ChatType$Bound"

export class $CommandSourceStack implements $ExecutionCommandSource$$Interface<($CommandSourceStack)>, $SharedSuggestionProvider$$Interface, $ICommandSourceStackExtension$$Interface, $ClientCommandRegistrationEvent$ClientCommandSourceStack$$Interface {
readonly "source": $CommandSource
static readonly "ERROR_NOT_ENTITY": $SimpleCommandExceptionType
static readonly "ERROR_NOT_PLAYER": $SimpleCommandExceptionType

constructor(arg0: $CommandSource$$Type, arg1: $Vec3$$Type, arg2: $Vec2$$Type, arg3: $ServerLevel$$Type, arg4: integer, arg5: StringJS, arg6: $Component$$Type, arg7: $MinecraftServer$$Type, arg8: $Entity$$Type)

public "getEntityOrException"(): $Entity
public "getPlayerOrException"(): $ServerPlayer
public "sendSuccessLazy"(component: $LazyComponentKJS$$Type, broadcastToAdmins: boolean): void
public "withMaximumPermission"(arg0: integer): $CommandSourceStack
public "withSource"(arg0: $CommandSource$$Type): $CommandSourceStack
public "withAnchor"(arg0: $EntityAnchorArgument$Anchor$$Type): $CommandSourceStack
public "isSilent"(): boolean
public "getServer"(): $MinecraftServer
public "shouldFilterMessageTo"(arg0: $ServerPlayer$$Type): boolean
public "callback"(): $CommandResultCallback
public "getPosition"(): $Vec3
public "getDisplayName"(): $Component
public "levels"(): $Set<($ResourceKey<($Level)>)>
public "getLevel"(): $ServerLevel
public "getAnchor"(): $EntityAnchorArgument$Anchor
public "withSuppressedOutput"(): $CommandSourceStack
public "withLevel"(arg0: $ServerLevel$$Type): $CommandSourceStack
public "sendChatMessage"(arg0: $OutgoingChatMessage$$Type, arg1: boolean, arg2: $ChatType$Bound$$Type): void
public "sendFailure"(arg0: $Component$$Type): void
public "withEntity"(arg0: $Entity$$Type): $CommandSourceStack
public "handleError"(arg0: $CommandExceptionType$$Type, arg1: $Message$$Type, arg2: boolean, arg3: $TraceCallbacks$$Type): void
public "sendSystemMessage"(arg0: $Component$$Type): void
public "getPlayer"(): $ServerPlayer
public "dispatcher"(): $CommandDispatcher<($CommandSourceStack)>
public "withCallback"(arg0: $CommandResultCallback$$Type): $ExecutionCommandSource
public "withCallback"(arg0: $CommandResultCallback$$Type, arg1: $BinaryOperator$$Type<($CommandResultCallback)>): $CommandSourceStack
public "getEntity"(): $Entity
public "registryAccess"(): $RegistryAccess
public "enabledFeatures"(): $FeatureFlagSet
public "sendSuccess"(component: $Component$$Type, broadcastToAdmins: boolean): void
public "arch$sendFailure"(message: $Component$$Type): void
public "getTextName"(): StringJS
public "arch$getLevel"(): $ClientLevel
public "getRecipeNames"(): $Stream<($ResourceLocation)>
public "getAvailableSounds"(): $Stream<($ResourceLocation)>
public "arch$getRotation"(): $Vec2
public "arch$sendSuccess"(message: $Supplier$$Type, broadcastToAdmins: boolean): void
public "arch$getPosition"(): $Vec3
public "arch$getPlayer"(): $LocalPlayer
public "withPosition"(arg0: $Vec3$$Type): $CommandSourceStack
public "withRotation"(arg0: $Vec2$$Type): $CommandSourceStack
public "isPlayer"(): boolean
public "getChatMessageChainer"(): $TaskChainer
public "getOnlinePlayerNames"(): $Collection<(StringJS)>
public "suggestRegistryElements"(arg0: $ResourceKey$$Type<($Registry<(never)>)>, arg1: $SharedSuggestionProvider$ElementSuggestionType$$Type, arg2: $SuggestionsBuilder$$Type, arg3: $CommandContext$$Type<(never)>): $CompletableFuture<($Suggestions)>
public "hasPermission"(arg0: integer): boolean
public "getSigningContext"(): $CommandSigningContext
public "getAllTeams"(): $Collection<(StringJS)>
public "customSuggestion"(arg0: $CommandContext$$Type<(never)>): $CompletableFuture<($Suggestions)>
public "withSigningContext"(arg0: $CommandSigningContext$$Type, arg1: $TaskChainer$$Type): $CommandSourceStack
public "getRotation"(): $Vec2
public "withPermission"(arg0: integer): $CommandSourceStack
public "facing"(arg0: $Entity$$Type, arg1: $EntityAnchorArgument$Anchor$$Type): $CommandSourceStack
public "facing"(arg0: $Vec3$$Type): $CommandSourceStack
public static "resultConsumer"<T extends $ExecutionCommandSource<(object)>>(): $ResultConsumer<($CommandSourceStack)>
public "handleError"(arg0: $CommandSyntaxException$$Type, arg1: boolean, arg2: $TraceCallbacks$$Type): void
public "clearCallbacks"(): $CommandSourceStack
public "getCustomTabSugggestions"(): $Collection<(StringJS)>
public static "suggest"(arg0: $Iterable$$Type<(StringJS)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
public static "suggest"(arg0: (StringJS)[], arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
public static "suggest"<T>(arg0: $Iterable$$Type<(T)>, arg1: $SuggestionsBuilder$$Type, arg2: $Function$$Type<(T), (StringJS)>, arg3: $Function$$Type<(T), ($Message$$Type)>): $CompletableFuture<($Suggestions)>
public static "suggest"(arg0: $Stream$$Type<(StringJS)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
public static "filterResources"<T>(arg0: $Iterable$$Type<(T)>, arg1: StringJS, arg2: $Function$$Type<(T), ($ResourceLocation$$Type)>, arg3: $Consumer$$Type<(T)>): void
public static "filterResources"<T>(arg0: $Iterable$$Type<(T)>, arg1: StringJS, arg2: StringJS, arg3: $Function$$Type<(T), ($ResourceLocation$$Type)>, arg4: $Consumer$$Type<(T)>): void
public static "matchesSubStr"(arg0: StringJS, arg1: StringJS): boolean
public "getSelectedEntities"(): $Collection<(StringJS)>
public static "suggest2DCoordinates"(arg0: StringJS, arg1: $Collection$$Type<($SharedSuggestionProvider$TextCoordinates$$Type)>, arg2: $SuggestionsBuilder$$Type, arg3: $Predicate$$Type<(StringJS)>): $CompletableFuture<($Suggestions)>
public "getAbsoluteCoordinates"(): $Collection<($SharedSuggestionProvider$TextCoordinates)>
public "getRelevantCoordinates"(): $Collection<($SharedSuggestionProvider$TextCoordinates)>
public "suggestRegistryElements"(arg0: $Registry$$Type<(never)>, arg1: $SharedSuggestionProvider$ElementSuggestionType$$Type, arg2: $SuggestionsBuilder$$Type): void
public static "suggestResource"(arg0: $Stream$$Type<($ResourceLocation$$Type)>, arg1: $SuggestionsBuilder$$Type, arg2: StringJS): $CompletableFuture<($Suggestions)>
public static "suggestResource"(arg0: $Iterable$$Type<($ResourceLocation$$Type)>, arg1: $SuggestionsBuilder$$Type, arg2: StringJS): $CompletableFuture<($Suggestions)>
public static "suggestResource"<T>(arg0: $Stream$$Type<(T)>, arg1: $SuggestionsBuilder$$Type, arg2: $Function$$Type<(T), ($ResourceLocation$$Type)>, arg3: $Function$$Type<(T), ($Message$$Type)>): $CompletableFuture<($Suggestions)>
public static "suggestResource"(arg0: $Stream$$Type<($ResourceLocation$$Type)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
public static "suggestResource"<T>(arg0: $Iterable$$Type<(T)>, arg1: $SuggestionsBuilder$$Type, arg2: $Function$$Type<(T), ($ResourceLocation$$Type)>, arg3: $Function$$Type<(T), ($Message$$Type)>): $CompletableFuture<($Suggestions)>
public static "suggestResource"(arg0: $Iterable$$Type<($ResourceLocation$$Type)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
public static "suggestCoordinates"(arg0: StringJS, arg1: $Collection$$Type<($SharedSuggestionProvider$TextCoordinates$$Type)>, arg2: $SuggestionsBuilder$$Type, arg3: $Predicate$$Type<(StringJS)>): $CompletableFuture<($Suggestions)>
public "getUnsidedLevel"(): $Level
public "getAdvancement"(arg0: $ResourceLocation$$Type): $AdvancementHolder
public "getScoreboard"(): $Scoreboard
public "getRecipeManager"(): $RecipeManager
get "entityOrException"(): $Entity
get "playerOrException"(): $ServerPlayer
get "silent"(): boolean
get "server"(): $MinecraftServer
get "position"(): $Vec3
get "displayName"(): $Component
get "level"(): $ServerLevel
get "anchor"(): $EntityAnchorArgument$Anchor
get "player"(): $ServerPlayer
get "entity"(): $Entity
get "textName"(): StringJS
get "recipeNames"(): $Stream<($ResourceLocation)>
get "availableSounds"(): $Stream<($ResourceLocation)>
get "player"(): boolean
get "chatMessageChainer"(): $TaskChainer
get "onlinePlayerNames"(): $Collection<(StringJS)>
get "signingContext"(): $CommandSigningContext
get "allTeams"(): $Collection<(StringJS)>
get "rotation"(): $Vec2
get "customTabSugggestions"(): $Collection<(StringJS)>
get "selectedEntities"(): $Collection<(StringJS)>
get "absoluteCoordinates"(): $Collection<($SharedSuggestionProvider$TextCoordinates)>
get "relevantCoordinates"(): $Collection<($SharedSuggestionProvider$TextCoordinates)>
get "unsidedLevel"(): $Level
get "scoreboard"(): $Scoreboard
get "recipeManager"(): $RecipeManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandSourceStack$$Type = ($CommandSourceStack);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CommandSourceStack$$Original = $CommandSourceStack;}
declare module "net.minecraft.commands.CacheableFunction" {
import {$CommandFunction} from "net.minecraft.commands.functions.CommandFunction"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ServerFunctionManager$$Type} from "net.minecraft.server.ServerFunctionManager"
import {$Optional} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$CommandSourceStack} from "net.minecraft.commands.CommandSourceStack"

export class $CacheableFunction {
static readonly "CODEC": $Codec<($CacheableFunction)>

constructor(arg0: $ResourceLocation$$Type)

public "get"(arg0: $ServerFunctionManager$$Type): $Optional<($CommandFunction<($CommandSourceStack)>)>
public "equals"(arg0: any): boolean
public "getId"(): $ResourceLocation
get "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CacheableFunction$$Type = ($CacheableFunction);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CacheableFunction$$Original = $CacheableFunction;}
declare module "net.minecraft.commands.Commands" {
import {$ParseResults, $ParseResults$$Type} from "com.mojang.brigadier.ParseResults"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$LiteralArgumentBuilder} from "com.mojang.brigadier.builder.LiteralArgumentBuilder"
import {$Predicate} from "java.util.function.Predicate"
import {$ExecutionContext$$Type} from "net.minecraft.commands.execution.ExecutionContext"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$CommandBuildContext, $CommandBuildContext$$Type} from "net.minecraft.commands.CommandBuildContext"
import {$ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$RequiredArgumentBuilder} from "com.mojang.brigadier.builder.RequiredArgumentBuilder"
import {$CommandSyntaxException} from "com.mojang.brigadier.exceptions.CommandSyntaxException"
import {$Commands$ParseFunction$$Type} from "net.minecraft.commands.Commands$ParseFunction"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$CommandDispatcher} from "com.mojang.brigadier.CommandDispatcher"
import {$CommandSourceStack, $CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"
import {$Commands$CommandSelection$$Type} from "net.minecraft.commands.Commands$CommandSelection"

export class $Commands {
static readonly "LEVEL_MODERATORS": integer
static readonly "LEVEL_ALL": integer
static readonly "LEVEL_ADMINS": integer
static readonly "LEVEL_OWNERS": integer
static readonly "LEVEL_GAMEMASTERS": integer

constructor(arg0: $Commands$CommandSelection$$Type, arg1: $CommandBuildContext$$Type)

public static "validate"(): void
public static "argument"<T>(arg0: StringJS, arg1: $ArgumentType$$Type<(T)>): $RequiredArgumentBuilder<($CommandSourceStack), (T)>
public static "literal"(arg0: StringJS): $LiteralArgumentBuilder<($CommandSourceStack)>
public "sendCommands"(arg0: $ServerPlayer$$Type): void
public "performPrefixedCommand"(arg0: $CommandSourceStack$$Type, arg1: StringJS): void
public "performCommand"(arg0: $ParseResults$$Type<($CommandSourceStack$$Type)>, arg1: StringJS): void
public static "mapSource"<S>(arg0: $ParseResults$$Type<(S)>, arg1: $UnaryOperator$$Type<(S)>): $ParseResults<(S)>
public "getDispatcher"(): $CommandDispatcher<($CommandSourceStack)>
public static "createValidator"(arg0: $Commands$ParseFunction$$Type): $Predicate<(StringJS)>
public static "createValidationContext"(arg0: $HolderLookup$Provider$$Type): $CommandBuildContext
public static "executeCommandInContext"(arg0: $CommandSourceStack$$Type, arg1: $Consumer$$Type<($ExecutionContext<($CommandSourceStack)>)>): void
public static "validateParseResults"<S>(arg0: $ParseResults$$Type<(S)>): void
public static "getParseException"<S>(arg0: $ParseResults$$Type<(S)>): $CommandSyntaxException
get "dispatcher"(): $CommandDispatcher<($CommandSourceStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Commands$$Type = ($Commands);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Commands$$Original = $Commands;}
declare module "net.minecraft.commands.SharedSuggestionProvider$TextCoordinates" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SharedSuggestionProvider$TextCoordinates {
static readonly "DEFAULT_GLOBAL": $SharedSuggestionProvider$TextCoordinates
static readonly "DEFAULT_LOCAL": $SharedSuggestionProvider$TextCoordinates
readonly "x": StringJS
readonly "y": StringJS
readonly "z": StringJS

constructor(arg0: StringJS, arg1: StringJS, arg2: StringJS)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SharedSuggestionProvider$TextCoordinates$$Type = ($SharedSuggestionProvider$TextCoordinates);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SharedSuggestionProvider$TextCoordinates$$Original = $SharedSuggestionProvider$TextCoordinates;}
declare module "net.minecraft.commands.CommandSigningContext" {
import {$PlayerChatMessage, $PlayerChatMessage$$Type} from "net.minecraft.network.chat.PlayerChatMessage"

export interface $CommandSigningContext$$Interface {

(arg0: StringJS): $PlayerChatMessage$$Type
}

export class $CommandSigningContext implements $CommandSigningContext$$Interface {
static readonly "ANONYMOUS": $CommandSigningContext

 "getArgument"(arg0: StringJS): $PlayerChatMessage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandSigningContext$$Type = ((arg0: StringJS) => $PlayerChatMessage$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CommandSigningContext$$Original = $CommandSigningContext;}
declare module "net.minecraft.commands.Commands$CommandSelection" {
import {$Enum} from "java.lang.Enum"

export class $Commands$CommandSelection extends $Enum<($Commands$CommandSelection)> {
static readonly "ALL": $Commands$CommandSelection
static readonly "INTEGRATED": $Commands$CommandSelection
static readonly "DEDICATED": $Commands$CommandSelection
readonly "includeIntegrated": boolean
readonly "includeDedicated": boolean

public static "values"(): ($Commands$CommandSelection)[]
public static "valueOf"(arg0: StringJS): $Commands$CommandSelection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Commands$CommandSelection$$Type = (("all") | ("dedicated") | ("integrated"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Commands$CommandSelection$$Original = $Commands$CommandSelection;}
declare module "net.minecraft.commands.CommandSource" {
import {$Component$$Type} from "net.minecraft.network.chat.Component"

export interface $CommandSource$$Interface {
}

export class $CommandSource implements $CommandSource$$Interface {
static readonly "NULL": $CommandSource

 "sendSystemMessage"(arg0: $Component$$Type): void
 "shouldInformAdmins"(): boolean
 "acceptsFailure"(): boolean
 "acceptsSuccess"(): boolean
 "alwaysAccepts"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandSource$$Type = ($CommandSource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CommandSource$$Original = $CommandSource;}
declare module "net.minecraft.commands.SharedSuggestionProvider" {
import {$Iterable$$Type} from "java.lang.Iterable"
import {$FeatureFlagSet} from "net.minecraft.world.flag.FeatureFlagSet"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Suggestions} from "com.mojang.brigadier.suggestion.Suggestions"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Level} from "net.minecraft.world.level.Level"
import {$SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"
import {$SharedSuggestionProvider$ElementSuggestionType$$Type} from "net.minecraft.commands.SharedSuggestionProvider$ElementSuggestionType"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Message$$Type} from "com.mojang.brigadier.Message"
import {$CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$Function$$Type} from "java.util.function.Function"
import {$Set} from "java.util.Set"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$RegistryAccess} from "net.minecraft.core.RegistryAccess"
import {$SharedSuggestionProvider$TextCoordinates, $SharedSuggestionProvider$TextCoordinates$$Type} from "net.minecraft.commands.SharedSuggestionProvider$TextCoordinates"

export interface $SharedSuggestionProvider$$Interface {
get "customTabSugggestions"(): $Collection<(StringJS)>
get "recipeNames"(): $Stream<($ResourceLocation)>
get "availableSounds"(): $Stream<($ResourceLocation)>
get "selectedEntities"(): $Collection<(StringJS)>
get "absoluteCoordinates"(): $Collection<($SharedSuggestionProvider$TextCoordinates)>
get "onlinePlayerNames"(): $Collection<(StringJS)>
get "relevantCoordinates"(): $Collection<($SharedSuggestionProvider$TextCoordinates)>
get "allTeams"(): $Collection<(StringJS)>
}

export class $SharedSuggestionProvider implements $SharedSuggestionProvider$$Interface {
 "getCustomTabSugggestions"(): $Collection<(StringJS)>
 "levels"(): $Set<($ResourceKey<($Level)>)>
static "suggest"(arg0: $Iterable$$Type<(StringJS)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
static "suggest"(arg0: (StringJS)[], arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
static "suggest"<T>(arg0: $Iterable$$Type<(T)>, arg1: $SuggestionsBuilder$$Type, arg2: $Function$$Type<(T), (StringJS)>, arg3: $Function$$Type<(T), ($Message$$Type)>): $CompletableFuture<($Suggestions)>
static "suggest"(arg0: $Stream$$Type<(StringJS)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
 "registryAccess"(): $RegistryAccess
 "enabledFeatures"(): $FeatureFlagSet
static "filterResources"<T>(arg0: $Iterable$$Type<(T)>, arg1: StringJS, arg2: $Function$$Type<(T), ($ResourceLocation$$Type)>, arg3: $Consumer$$Type<(T)>): void
static "filterResources"<T>(arg0: $Iterable$$Type<(T)>, arg1: StringJS, arg2: StringJS, arg3: $Function$$Type<(T), ($ResourceLocation$$Type)>, arg4: $Consumer$$Type<(T)>): void
 "getRecipeNames"(): $Stream<($ResourceLocation)>
 "getAvailableSounds"(): $Stream<($ResourceLocation)>
static "matchesSubStr"(arg0: StringJS, arg1: StringJS): boolean
 "getSelectedEntities"(): $Collection<(StringJS)>
static "suggest2DCoordinates"(arg0: StringJS, arg1: $Collection$$Type<($SharedSuggestionProvider$TextCoordinates$$Type)>, arg2: $SuggestionsBuilder$$Type, arg3: $Predicate$$Type<(StringJS)>): $CompletableFuture<($Suggestions)>
 "getAbsoluteCoordinates"(): $Collection<($SharedSuggestionProvider$TextCoordinates)>
 "getOnlinePlayerNames"(): $Collection<(StringJS)>
 "getRelevantCoordinates"(): $Collection<($SharedSuggestionProvider$TextCoordinates)>
 "suggestRegistryElements"(arg0: $ResourceKey$$Type<($Registry<(never)>)>, arg1: $SharedSuggestionProvider$ElementSuggestionType$$Type, arg2: $SuggestionsBuilder$$Type, arg3: $CommandContext$$Type<(never)>): $CompletableFuture<($Suggestions)>
 "suggestRegistryElements"(arg0: $Registry$$Type<(never)>, arg1: $SharedSuggestionProvider$ElementSuggestionType$$Type, arg2: $SuggestionsBuilder$$Type): void
static "suggestResource"(arg0: $Stream$$Type<($ResourceLocation$$Type)>, arg1: $SuggestionsBuilder$$Type, arg2: StringJS): $CompletableFuture<($Suggestions)>
static "suggestResource"(arg0: $Iterable$$Type<($ResourceLocation$$Type)>, arg1: $SuggestionsBuilder$$Type, arg2: StringJS): $CompletableFuture<($Suggestions)>
static "suggestResource"<T>(arg0: $Stream$$Type<(T)>, arg1: $SuggestionsBuilder$$Type, arg2: $Function$$Type<(T), ($ResourceLocation$$Type)>, arg3: $Function$$Type<(T), ($Message$$Type)>): $CompletableFuture<($Suggestions)>
static "suggestResource"(arg0: $Stream$$Type<($ResourceLocation$$Type)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
static "suggestResource"<T>(arg0: $Iterable$$Type<(T)>, arg1: $SuggestionsBuilder$$Type, arg2: $Function$$Type<(T), ($ResourceLocation$$Type)>, arg3: $Function$$Type<(T), ($Message$$Type)>): $CompletableFuture<($Suggestions)>
static "suggestResource"(arg0: $Iterable$$Type<($ResourceLocation$$Type)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
 "hasPermission"(arg0: integer): boolean
static "suggestCoordinates"(arg0: StringJS, arg1: $Collection$$Type<($SharedSuggestionProvider$TextCoordinates$$Type)>, arg2: $SuggestionsBuilder$$Type, arg3: $Predicate$$Type<(StringJS)>): $CompletableFuture<($Suggestions)>
 "getAllTeams"(): $Collection<(StringJS)>
 "customSuggestion"(arg0: $CommandContext$$Type<(never)>): $CompletableFuture<($Suggestions)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SharedSuggestionProvider$$Type = ($SharedSuggestionProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SharedSuggestionProvider$$Original = $SharedSuggestionProvider;}
declare module "net.minecraft.commands.ExecutionCommandSource" {
import {$TraceCallbacks$$Type} from "net.minecraft.commands.execution.TraceCallbacks"
import {$CommandSyntaxException$$Type} from "com.mojang.brigadier.exceptions.CommandSyntaxException"
import {$CommandExceptionType$$Type} from "com.mojang.brigadier.exceptions.CommandExceptionType"
import {$ResultConsumer} from "com.mojang.brigadier.ResultConsumer"
import {$CommandDispatcher} from "com.mojang.brigadier.CommandDispatcher"
import {$CommandResultCallback, $CommandResultCallback$$Type} from "net.minecraft.commands.CommandResultCallback"
import {$Message$$Type} from "com.mojang.brigadier.Message"

export interface $ExecutionCommandSource$$Interface<T extends $ExecutionCommandSource<(object)>> {
get "silent"(): boolean
}

export class $ExecutionCommandSource<T extends $ExecutionCommandSource<(object)>> implements $ExecutionCommandSource$$Interface {
 "isSilent"(): boolean
 "callback"(): $CommandResultCallback
static "resultConsumer"<T extends $ExecutionCommandSource<(object)>>(): $ResultConsumer<(T)>
 "handleError"(arg0: $CommandExceptionType$$Type, arg1: $Message$$Type, arg2: boolean, arg3: $TraceCallbacks$$Type): void
 "handleError"(arg0: $CommandSyntaxException$$Type, arg1: boolean, arg2: $TraceCallbacks$$Type): void
 "dispatcher"(): $CommandDispatcher<(T)>
 "withCallback"(arg0: $CommandResultCallback$$Type): T
 "clearCallbacks"(): T
 "hasPermission"(arg0: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExecutionCommandSource$$Type<T> = ($ExecutionCommandSource<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExecutionCommandSource$$Original<T> = $ExecutionCommandSource<(T)>;}
declare module "net.minecraft.commands.Commands$ParseFunction" {
import {$StringReader, $StringReader$$Type} from "com.mojang.brigadier.StringReader"

export interface $Commands$ParseFunction$$Interface {

(arg0: $StringReader): void
}

export class $Commands$ParseFunction implements $Commands$ParseFunction$$Interface {
 "parse"(arg0: $StringReader$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Commands$ParseFunction$$Type = ((arg0: $StringReader) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Commands$ParseFunction$$Original = $Commands$ParseFunction;}
declare module "net.minecraft.commands.CommandBuildContext" {
import {$FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$HolderGetter$Provider} from "net.minecraft.core.HolderGetter$Provider"
import {$DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Optional} from "java.util.Optional"
import {$RegistryOps} from "net.minecraft.resources.RegistryOps"
import {$HolderLookup$RegistryLookup, $HolderLookup$RegistryLookup$$Type} from "net.minecraft.core.HolderLookup$RegistryLookup"
import {$Holder} from "net.minecraft.core.Holder"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type, $HolderLookup$Provider$$Interface} from "net.minecraft.core.HolderLookup$Provider"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Holder$Reference} from "net.minecraft.core.Holder$Reference"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"

export interface $CommandBuildContext$$Interface extends $HolderLookup$Provider$$Interface {
}

export class $CommandBuildContext implements $CommandBuildContext$$Interface {
static "simple"(arg0: $HolderLookup$Provider$$Type, arg1: $FeatureFlagSet$$Type): $CommandBuildContext
 "lookup"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $Optional<($HolderLookup$RegistryLookup<(T)>)>
static "create"(arg0: $Stream$$Type<($HolderLookup$RegistryLookup$$Type<(never)>)>): $HolderLookup$Provider
 "lookupOrThrow"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $HolderLookup$RegistryLookup<(T)>
 "asGetterLookup"(): $HolderGetter$Provider
 "listRegistries"(): $Stream<($ResourceKey<($Registry<(never)>)>)>
 "createSerializationContext"<V>(arg0: $DynamicOps$$Type<(V)>): $RegistryOps<(V)>
 "holder"<T>(arg0: $ResourceKey$$Type<(T)>): $Optional<($Holder$Reference<(T)>)>
 "holderOrThrow"<T>(arg0: $ResourceKey$$Type<(T)>): $Holder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandBuildContext$$Type = ($CommandBuildContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CommandBuildContext$$Original = $CommandBuildContext;}
declare module "net.minecraft.commands.CommandResultCallback" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CommandResultCallback$$Interface {

(arg0: boolean, arg1: integer): void
}

export class $CommandResultCallback implements $CommandResultCallback$$Interface {
static readonly "EMPTY": $CommandResultCallback

static "chain"(arg0: $CommandResultCallback$$Type, arg1: $CommandResultCallback$$Type): $CommandResultCallback
 "onSuccess"(arg0: integer): void
 "onFailure"(): void
 "onResult"(arg0: boolean, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandResultCallback$$Type = ((arg0: boolean, arg1: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CommandResultCallback$$Original = $CommandResultCallback;}
