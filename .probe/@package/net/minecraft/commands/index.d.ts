import { $RecipeManager } from "@package/net/minecraft/world/item/crafting";
import { $Codec } from "@package/com/mojang/serialization";
import { $ServerFunctionManager, $MinecraftServer } from "@package/net/minecraft/server";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Message, $ResultConsumer, $Message_, $StringReader, $CommandDispatcher, $ParseResults } from "@package/com/mojang/brigadier";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $Map_, $Collection_, $Collection, $Map, $Set } from "@package/java/util";
import { $TaskChainer_, $TaskChainer } from "@package/net/minecraft/util";
import { $AdvancementHolder } from "@package/net/minecraft/advancements";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Predicate, $Supplier_, $Function_, $BinaryOperator_, $Consumer_, $UnaryOperator_, $Predicate_ } from "@package/java/util/function";
import { $CharPredicate_ } from "@package/net/minecraft";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $ICommandSourceStackExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Dynamic2CommandExceptionType, $CommandSyntaxException, $DynamicCommandExceptionType, $CommandExceptionType, $SimpleCommandExceptionType, $BuiltInExceptionProvider } from "@package/com/mojang/brigadier/exceptions";
import { $Suggestions, $SuggestionsBuilder } from "@package/com/mojang/brigadier/suggestion";
import { $LiteralArgumentBuilder, $RequiredArgumentBuilder } from "@package/com/mojang/brigadier/builder";
import { $CommandContext } from "@package/com/mojang/brigadier/context";
import { $Iterable_, $Enum, $Record, $Exception } from "@package/java/lang";
import { $Level } from "@package/net/minecraft/world/level";
import { $ExecutionContext, $TraceCallbacks } from "@package/net/minecraft/commands/execution";
import { $Component_, $PlayerChatMessage, $ChatType$Bound_, $OutgoingChatMessage, $Component, $PlayerChatMessage_ } from "@package/net/minecraft/network/chat";
import { $ClientCommandRegistrationEvent$ClientCommandSourceStack } from "@package/dev/architectury/event/events/client";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $EntityAnchorArgument$Anchor_, $EntityAnchorArgument$Anchor } from "@package/net/minecraft/commands/arguments";
import { $Stream } from "@package/java/util/stream";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Scoreboard } from "@package/net/minecraft/world/scores";
import { $CommandFunction } from "@package/net/minecraft/commands/functions";
import { $LazyComponentKJS_ } from "@package/dev/latvian/mods/kubejs/core";
import { $Vec3, $Vec2, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $ArgumentType_ } from "@package/com/mojang/brigadier/arguments";
export * as execution from "@package/net/minecraft/commands/execution";
export * as functions from "@package/net/minecraft/commands/functions";
export * as arguments from "@package/net/minecraft/commands/arguments";
export * as synchronization from "@package/net/minecraft/commands/synchronization";

declare module "@package/net/minecraft/commands" {
    export class $CacheableFunction {
        get(functionManager: $ServerFunctionManager): ($CommandFunction<$CommandSourceStack>) | undefined;
        getId(): $ResourceLocation;
        static CODEC: $Codec<$CacheableFunction>;
        constructor(id: $ResourceLocation_);
        get id(): $ResourceLocation;
    }
    export class $CommandBuildContext {
        static simple(provider: $HolderLookup$Provider, enabledFeatures: $FeatureFlagSet): $CommandBuildContext;
    }
    export interface $CommandBuildContext extends $HolderLookup$Provider {
    }
    export class $SharedSuggestionProvider {
        static suggest<T>(resources: $Iterable_<T>, builder: $SuggestionsBuilder, stringFunction: $Function_<T, string>, suggestionFunction: $Function_<T, $Message>): $CompletableFuture<$Suggestions>;
        static suggest(strings: string[], builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static suggest(strings: $Stream<string>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static suggest(strings: $Iterable_<string>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static suggest2DCoordinates(remaining: string, coordinates: $Collection_<$SharedSuggestionProvider$TextCoordinates>, builder: $SuggestionsBuilder, validator: $Predicate_<string>): $CompletableFuture<$Suggestions>;
        static filterResources<T>(resources: $Iterable_<T>, remaining: string, prefix: string, locationFunction: $Function_<T, $ResourceLocation>, resourceConsumer: $Consumer_<T>): void;
        static filterResources<T>(resources: $Iterable_<T>, input: string, locationFunction: $Function_<T, $ResourceLocation>, resourceConsumer: $Consumer_<T>): void;
        static matchesSubStr(string: string, arg1: string): boolean;
        static suggestResource(resources: $Stream<$ResourceLocation_>, builder: $SuggestionsBuilder, prefix: string): $CompletableFuture<$Suggestions>;
        static suggestResource(strings: $Iterable_<$ResourceLocation>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static suggestResource(resources: $Iterable_<$ResourceLocation>, builder: $SuggestionsBuilder, prefix: string): $CompletableFuture<$Suggestions>;
        static suggestResource<T>(resources: $Stream<T>, builder: $SuggestionsBuilder, locationFunction: $Function_<T, $ResourceLocation>, suggestionFunction: $Function_<T, $Message>): $CompletableFuture<$Suggestions>;
        static suggestResource<T>(resources: $Iterable_<T>, builder: $SuggestionsBuilder, stringFunction: $Function_<T, $ResourceLocation>, suggestionFunction: $Function_<T, $Message>): $CompletableFuture<$Suggestions>;
        static suggestResource(strings: $Stream<$ResourceLocation_>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static suggestCoordinates(remaining: string, coordinates: $Collection_<$SharedSuggestionProvider$TextCoordinates>, builder: $SuggestionsBuilder, validator: $Predicate_<string>): $CompletableFuture<$Suggestions>;
    }
    export interface $SharedSuggestionProvider {
        levels(): $Set<$ResourceKey<$Level>>;
        enabledFeatures(): $FeatureFlagSet;
        registryAccess(): $RegistryAccess;
        getSelectedEntities(): $Collection<string>;
        getAbsoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        getOnlinePlayerNames(): $Collection<string>;
        getRelevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        suggestRegistryElements(registry: $Registry<never>, type: $SharedSuggestionProvider$ElementSuggestionType_, builder: $SuggestionsBuilder): void;
        suggestRegistryElements(resourceKey: $ResourceKey_<$Registry<never>>, registryKey: $SharedSuggestionProvider$ElementSuggestionType_, builder: $SuggestionsBuilder, context: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        getAvailableSounds(): $Stream<$ResourceLocation>;
        getRecipeNames(): $Stream<$ResourceLocation>;
        getCustomTabSugggestions(): $Collection<string>;
        hasPermission(permissionLevel: number): boolean;
        customSuggestion(context: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        getAllTeams(): $Collection<string>;
        get selectedEntities(): $Collection<string>;
        get absoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get onlinePlayerNames(): $Collection<string>;
        get relevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get availableSounds(): $Stream<$ResourceLocation>;
        get recipeNames(): $Stream<$ResourceLocation>;
        get customTabSugggestions(): $Collection<string>;
        get allTeams(): $Collection<string>;
    }
    export class $CommandSource {
        static NULL: $CommandSource;
    }
    export interface $CommandSource {
        acceptsFailure(): boolean;
        shouldInformAdmins(): boolean;
        acceptsSuccess(): boolean;
        alwaysAccepts(): boolean;
        sendSystemMessage(component: $Component_): void;
    }
    export class $ExecutionCommandSource<T extends $ExecutionCommandSource<T>> {
        static resultConsumer<T extends $ExecutionCommandSource<T>>(): $ResultConsumer<T>;
    }
    export interface $ExecutionCommandSource<T extends $ExecutionCommandSource<T>> {
        callback(): $CommandResultCallback;
        dispatcher(): $CommandDispatcher<T>;
        handleError(exception: $CommandSyntaxException, success: boolean, traceCallbacks: $TraceCallbacks | null): void;
        handleError(exceptionType: $CommandExceptionType, message: $Message_, success: boolean, traceCallbacks: $TraceCallbacks | null): void;
        isSilent(): boolean;
        clearCallbacks(): T;
        withCallback(callback: $CommandResultCallback_): T;
        hasPermission(permissionLevel: number): boolean;
        get silent(): boolean;
    }
    export class $CommandSigningContext$SignedArguments extends $Record implements $CommandSigningContext {
        "arguments"(): $Map<string, $PlayerChatMessage>;
        getArgument(arg0: string): $PlayerChatMessage;
        constructor(arg0: $Map_<string, $PlayerChatMessage_>);
    }
    /**
     * Values that may be interpreted as {@link $CommandSigningContext$SignedArguments}.
     */
    export type $CommandSigningContext$SignedArguments_ = { arguments?: $Map_<string, $PlayerChatMessage_>,  } | [arguments?: $Map_<string, $PlayerChatMessage_>, ];
    export class $CommandResultCallback {
        static chain(first: $CommandResultCallback_, second: $CommandResultCallback_): $CommandResultCallback;
        static EMPTY: $CommandResultCallback;
    }
    export interface $CommandResultCallback {
        onFailure(): void;
        onSuccess(result: number): void;
        onResult(success: boolean, result: number): void;
    }
    /**
     * Values that may be interpreted as {@link $CommandResultCallback}.
     */
    export type $CommandResultCallback_ = ((arg0: boolean, arg1: number) => void);
    export class $CommandSourceStack implements $ExecutionCommandSource<$CommandSourceStack>, $SharedSuggestionProvider, $ICommandSourceStackExtension, $ClientCommandRegistrationEvent$ClientCommandSourceStack {
        getDisplayName(): $Component;
        levels(): $Set<$ResourceKey<$Level>>;
        getLevel(): $ServerLevel;
        callback(): $CommandResultCallback;
        getPosition(): $Vec3;
        getServer(): $MinecraftServer;
        facing(lookPos: $Vec3_): $CommandSourceStack;
        facing(entity: $Entity, anchor: $EntityAnchorArgument$Anchor_): $CommandSourceStack;
        getAnchor(): $EntityAnchorArgument$Anchor;
        withSource(source: $CommandSource): $CommandSourceStack;
        sendChatMessage(message: $OutgoingChatMessage, shouldFilter: boolean, boundChatType: $ChatType$Bound_): void;
        dispatcher(): $CommandDispatcher<$CommandSourceStack>;
        withLevel(level: $ServerLevel): $CommandSourceStack;
        shouldFilterMessageTo(receiver: $ServerPlayer): boolean;
        getEntity(): $Entity;
        handleError(exceptionType: $CommandExceptionType, message: $Message_, success: boolean, traceCallbacks: $TraceCallbacks | null): void;
        getPlayer(): $ServerPlayer;
        withPosition(lookPos: $Vec3_): $CommandSourceStack;
        getRotation(): $Vec2;
        withSuppressedOutput(): $CommandSourceStack;
        isSilent(): boolean;
        withAnchor(anchor: $EntityAnchorArgument$Anchor_): $CommandSourceStack;
        isPlayer(): boolean;
        sendSystemMessage(message: $Component_): void;
        enabledFeatures(): $FeatureFlagSet;
        registryAccess(): $RegistryAccess;
        withCallback(callback: $CommandResultCallback_): $CommandSourceStack;
        withCallback(callback: $CommandResultCallback_, operator: $BinaryOperator_<$CommandResultCallback>): $CommandSourceStack;
        getOnlinePlayerNames(): $Collection<string>;
        getChatMessageChainer(): $TaskChainer;
        suggestRegistryElements(resourceKey: $ResourceKey_<$Registry<never>>, registryKey: $SharedSuggestionProvider$ElementSuggestionType_, builder: $SuggestionsBuilder, context: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        getPlayerOrException(): $ServerPlayer;
        arch$getLevel(): $ClientLevel;
        withSigningContext(signingContext: $CommandSigningContext_, chatMessageChainer: $TaskChainer_): $CommandSourceStack;
        arch$sendSuccess(messageSupplier: $Supplier_<any>, allowLogging: boolean): void;
        arch$getPosition(): $Vec3;
        getAvailableSounds(): $Stream<$ResourceLocation>;
        getTextName(): string;
        sendSuccess(component: $Component_, broadcastToAdmins: boolean): void;
        arch$getRotation(): $Vec2;
        arch$sendFailure(message: $Component_): void;
        arch$getPlayer(): $LocalPlayer;
        getRecipeNames(): $Stream<$ResourceLocation>;
        withEntity(entity: $Entity): $CommandSourceStack;
        sendFailure(message: $Component_): void;
        withMaximumPermission(permissionLevel: number): $CommandSourceStack;
        getEntityOrException(): $Entity;
        sendSuccessLazy(component: $LazyComponentKJS_, broadcastToAdmins: boolean): void;
        withPermission(permissionLevel: number): $CommandSourceStack;
        hasPermission(level: number): boolean;
        getSigningContext(): $CommandSigningContext;
        customSuggestion(context: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        getAllTeams(): $Collection<string>;
        withRotation(rotation: $Vec2): $CommandSourceStack;
        handleError(exception: $CommandSyntaxException, success: boolean, traceCallbacks: $TraceCallbacks | null): void;
        clearCallbacks(): $CommandSourceStack;
        getSelectedEntities(): $Collection<string>;
        getAbsoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        getRelevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        suggestRegistryElements(registry: $Registry<never>, type: $SharedSuggestionProvider$ElementSuggestionType_, builder: $SuggestionsBuilder): void;
        getCustomTabSugggestions(): $Collection<string>;
        getScoreboard(): $Scoreboard;
        getRecipeManager(): $RecipeManager;
        getUnsidedLevel(): $Level;
        getAdvancement(id: $ResourceLocation_): $AdvancementHolder;
        source: $CommandSource;
        static ERROR_NOT_ENTITY: $SimpleCommandExceptionType;
        static ERROR_NOT_PLAYER: $SimpleCommandExceptionType;
        constructor(source: $CommandSource, worldPosition: $Vec3_, rotation: $Vec2, level: $ServerLevel, permissionLevel: number, textName: string, displayName: $Component_, server: $MinecraftServer, entity: $Entity | null);
        constructor(source: $CommandSource, worldPosition: $Vec3_, rotation: $Vec2, level: $ServerLevel, permissionLevel: number, textName: string, displayName: $Component_, server: $MinecraftServer, entity: $Entity | null, silent: boolean, resultCallback: $CommandResultCallback_, anchor: $EntityAnchorArgument$Anchor_, signingContext: $CommandSigningContext_, chatMessageChainer: $TaskChainer_);
        get displayName(): $Component;
        get level(): $ServerLevel;
        get position(): $Vec3;
        get server(): $MinecraftServer;
        get anchor(): $EntityAnchorArgument$Anchor;
        get entity(): $Entity;
        get rotation(): $Vec2;
        get silent(): boolean;
        get onlinePlayerNames(): $Collection<string>;
        get chatMessageChainer(): $TaskChainer;
        get playerOrException(): $ServerPlayer;
        get availableSounds(): $Stream<$ResourceLocation>;
        get textName(): string;
        get recipeNames(): $Stream<$ResourceLocation>;
        get entityOrException(): $Entity;
        get signingContext(): $CommandSigningContext;
        get allTeams(): $Collection<string>;
        get selectedEntities(): $Collection<string>;
        get absoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get relevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get customTabSugggestions(): $Collection<string>;
        get scoreboard(): $Scoreboard;
        get recipeManager(): $RecipeManager;
        get unsidedLevel(): $Level;
    }
    export class $SharedSuggestionProvider$ElementSuggestionType extends $Enum<$SharedSuggestionProvider$ElementSuggestionType> {
        static values(): $SharedSuggestionProvider$ElementSuggestionType[];
        static valueOf(arg0: string): $SharedSuggestionProvider$ElementSuggestionType;
        shouldSuggestTags(): boolean;
        shouldSuggestElements(): boolean;
        static ELEMENTS: $SharedSuggestionProvider$ElementSuggestionType;
        static ALL: $SharedSuggestionProvider$ElementSuggestionType;
        static TAGS: $SharedSuggestionProvider$ElementSuggestionType;
    }
    /**
     * Values that may be interpreted as {@link $SharedSuggestionProvider$ElementSuggestionType}.
     */
    export type $SharedSuggestionProvider$ElementSuggestionType_ = "tags" | "elements" | "all";
    export class $Commands$ParseFunction {
    }
    export interface $Commands$ParseFunction {
        parse(input: $StringReader): void;
    }
    /**
     * Values that may be interpreted as {@link $Commands$ParseFunction}.
     */
    export type $Commands$ParseFunction_ = ((arg0: $StringReader) => void);
    export class $Commands {
        static validate(): void;
        /**
         * Creates a new argument. Intended to be imported statically. The benefit of this over the brigadier `RequiredArgumentBuilder#argument` method is that it is typed to `CommandSource`.
         */
        static argument<T>(name: string, type: $ArgumentType_<T>): $RequiredArgumentBuilder<$CommandSourceStack, T>;
        /**
         * Creates a new argument. Intended to be imported statically. The benefit of this over the brigadier `LiteralArgumentBuilder#literal` method is that it is typed to `CommandSource`.
         */
        static literal(name: string): $LiteralArgumentBuilder<$CommandSourceStack>;
        static validateParseResults<S>(parseResults: $ParseResults<S>): void;
        performPrefixedCommand(source: $CommandSourceStack, command: string): void;
        performCommand(parseResults: $ParseResults<$CommandSourceStack>, command: string): void;
        static executeCommandInContext(source: $CommandSourceStack, contextConsumer: $Consumer_<$ExecutionContext<$CommandSourceStack>>): void;
        static createValidationContext(provider: $HolderLookup$Provider): $CommandBuildContext;
        getDispatcher(): $CommandDispatcher<$CommandSourceStack>;
        static mapSource<S>(parseResults: $ParseResults<S>, mapper: $UnaryOperator_<S>): $ParseResults<S>;
        static createValidator(parser: $Commands$ParseFunction_): $Predicate<string>;
        sendCommands(player: $ServerPlayer): void;
        static getParseException<S>(result: $ParseResults<S>): $CommandSyntaxException;
        static LEVEL_MODERATORS: number;
        static LEVEL_ALL: number;
        static LEVEL_ADMINS: number;
        static LEVEL_OWNERS: number;
        static LEVEL_GAMEMASTERS: number;
        constructor(selection: $Commands$CommandSelection_, context: $CommandBuildContext);
        get dispatcher(): $CommandDispatcher<$CommandSourceStack>;
    }
    export class $FunctionInstantiationException extends $Exception {
        messageComponent(): $Component;
        constructor(messageComponent: $Component_);
    }
    export class $SharedSuggestionProvider$TextCoordinates {
        static DEFAULT_GLOBAL: $SharedSuggestionProvider$TextCoordinates;
        static DEFAULT_LOCAL: $SharedSuggestionProvider$TextCoordinates;
        x: string;
        y: string;
        z: string;
        constructor(x: string, y: string, z: string);
    }
    export class $Commands$CommandSelection extends $Enum<$Commands$CommandSelection> {
        static values(): $Commands$CommandSelection[];
        static valueOf(arg0: string): $Commands$CommandSelection;
        static ALL: $Commands$CommandSelection;
        static INTEGRATED: $Commands$CommandSelection;
        static DEDICATED: $Commands$CommandSelection;
        includeIntegrated: boolean;
        includeDedicated: boolean;
    }
    /**
     * Values that may be interpreted as {@link $Commands$CommandSelection}.
     */
    export type $Commands$CommandSelection_ = "all" | "dedicated" | "integrated";
    export class $CommandSigningContext {
        static ANONYMOUS: $CommandSigningContext;
    }
    export interface $CommandSigningContext {
        getArgument(name: string): $PlayerChatMessage;
    }
    /**
     * Values that may be interpreted as {@link $CommandSigningContext}.
     */
    export type $CommandSigningContext_ = ((arg0: string) => $PlayerChatMessage_);
    export class $BrigadierExceptions implements $BuiltInExceptionProvider {
        readerExpectedEndOfQuote(): $SimpleCommandExceptionType;
        readerInvalidEscape(): $DynamicCommandExceptionType;
        dispatcherUnknownArgument(): $SimpleCommandExceptionType;
        dispatcherParseException(): $DynamicCommandExceptionType;
        readerExpectedFloat(): $SimpleCommandExceptionType;
        readerExpectedDouble(): $SimpleCommandExceptionType;
        readerExpectedSymbol(): $DynamicCommandExceptionType;
        dispatcherUnknownCommand(): $SimpleCommandExceptionType;
        readerExpectedStartOfQuote(): $SimpleCommandExceptionType;
        readerInvalidDouble(): $DynamicCommandExceptionType;
        dispatcherExpectedArgumentSeparator(): $SimpleCommandExceptionType;
        literalIncorrect(): $DynamicCommandExceptionType;
        doubleTooLow(): $Dynamic2CommandExceptionType;
        doubleTooHigh(): $Dynamic2CommandExceptionType;
        readerInvalidBool(): $DynamicCommandExceptionType;
        readerExpectedInt(): $SimpleCommandExceptionType;
        floatTooLow(): $Dynamic2CommandExceptionType;
        floatTooHigh(): $Dynamic2CommandExceptionType;
        integerTooLow(): $Dynamic2CommandExceptionType;
        integerTooHigh(): $Dynamic2CommandExceptionType;
        readerInvalidLong(): $DynamicCommandExceptionType;
        readerExpectedLong(): $SimpleCommandExceptionType;
        readerInvalidFloat(): $DynamicCommandExceptionType;
        readerExpectedBool(): $SimpleCommandExceptionType;
        readerInvalidInt(): $DynamicCommandExceptionType;
        longTooHigh(): $Dynamic2CommandExceptionType;
        longTooLow(): $Dynamic2CommandExceptionType;
        constructor();
    }
    export class $ParserUtils {
        static parseJson<T>(registries: $HolderLookup$Provider, reader: $StringReader, codec: $Codec<T>): T;
        static readWhile(reader: $StringReader, predicate: $CharPredicate_): string;
        constructor();
    }
}
