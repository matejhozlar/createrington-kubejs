declare module "com.mojang.brigadier.tree.CommandNode" {
import {$CommandContextBuilder$$Type} from "com.mojang.brigadier.context.CommandContextBuilder"
import {$Collection} from "java.util.Collection"
import {$Suggestions} from "com.mojang.brigadier.suggestion.Suggestions"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$Predicate} from "java.util.function.Predicate"
import {$SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"
import {$RedirectModifier} from "com.mojang.brigadier.RedirectModifier"
import {$Command} from "com.mojang.brigadier.Command"
import {$CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$AmbiguityConsumer$$Type} from "com.mojang.brigadier.AmbiguityConsumer"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$ArgumentBuilder} from "com.mojang.brigadier.builder.ArgumentBuilder"

export class $CommandNode<S> implements $Comparable$$Interface<($CommandNode<(S)>)> {
public "isFork"(): boolean
public "getRelevantNodes"(arg0: $StringReader$$Type): $Collection<($CommandNode<(S)>)>
public "getRedirect"(): $CommandNode<(S)>
public "findAmbiguities"(arg0: $AmbiguityConsumer$$Type<(S)>): void
public "getUsageText"(): StringJS
public "getName"(): StringJS
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $CommandNode$$Type<(S)>): integer
public "canUse"(arg0: S): boolean
public "parse"(arg0: $StringReader$$Type, arg1: $CommandContextBuilder$$Type<(S)>): void
public "getChild"(arg0: StringJS): $CommandNode<(S)>
public "getChildren"(): $Collection<($CommandNode<(S)>)>
public "addChild"(arg0: $CommandNode$$Type<(S)>): void
public "createBuilder"(): $ArgumentBuilder<(S), (never)>
public "getExamples"(): $Collection<(StringJS)>
public "getCommand"(): $Command<(S)>
public "getRequirement"(): $Predicate<(S)>
public "getRedirectModifier"(): $RedirectModifier<(S)>
public "listSuggestions"(arg0: $CommandContext$$Type<(S)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
get "fork"(): boolean
get "redirect"(): $CommandNode<(S)>
get "usageText"(): StringJS
get "name"(): StringJS
get "children"(): $Collection<($CommandNode<(S)>)>
get "examples"(): $Collection<(StringJS)>
get "command"(): $Command<(S)>
get "requirement"(): $Predicate<(S)>
get "redirectModifier"(): $RedirectModifier<(S)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandNode$$Type<S> = ($CommandNode<(S)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CommandNode$$Original<S> = $CommandNode<(S)>;}
declare module "com.mojang.brigadier.tree.RootCommandNode" {
import {$CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$CommandContextBuilder$$Type} from "com.mojang.brigadier.context.CommandContextBuilder"
import {$Suggestions} from "com.mojang.brigadier.suggestion.Suggestions"
import {$Collection} from "java.util.Collection"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"
import {$CommandNode} from "com.mojang.brigadier.tree.CommandNode"
import {$ArgumentBuilder} from "com.mojang.brigadier.builder.ArgumentBuilder"

export class $RootCommandNode<S> extends $CommandNode<(S)> {
constructor()

public "getUsageText"(): StringJS
public "getName"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "parse"(arg0: $StringReader$$Type, arg1: $CommandContextBuilder$$Type<(S)>): void
public "createBuilder"(): $ArgumentBuilder<(S), (never)>
public "getExamples"(): $Collection<(StringJS)>
public "isValidInput"(arg0: StringJS): boolean
public "listSuggestions"(arg0: $CommandContext$$Type<(S)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
get "usageText"(): StringJS
get "name"(): StringJS
get "examples"(): $Collection<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RootCommandNode$$Type<S> = ($RootCommandNode<(S)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RootCommandNode$$Original<S> = $RootCommandNode<(S)>;}
declare module "com.mojang.brigadier.tree.LiteralCommandNode" {
import {$CommandContextBuilder$$Type} from "com.mojang.brigadier.context.CommandContextBuilder"
import {$Collection} from "java.util.Collection"
import {$Suggestions} from "com.mojang.brigadier.suggestion.Suggestions"
import {$StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"
import {$CommandNode, $CommandNode$$Type} from "com.mojang.brigadier.tree.CommandNode"
import {$RedirectModifier$$Type} from "com.mojang.brigadier.RedirectModifier"
import {$Command$$Type} from "com.mojang.brigadier.Command"
import {$CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$ArgumentBuilder} from "com.mojang.brigadier.builder.ArgumentBuilder"

export class $LiteralCommandNode<S> extends $CommandNode<(S)> {
constructor(arg0: StringJS, arg1: $Command$$Type<(S)>, arg2: $Predicate$$Type<(S)>, arg3: $CommandNode$$Type<(S)>, arg4: $RedirectModifier$$Type<(S)>, arg5: boolean)

public "getUsageText"(): StringJS
public "getName"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "parse"(arg0: $StringReader$$Type, arg1: $CommandContextBuilder$$Type<(S)>): void
public "getLiteral"(): StringJS
public "createBuilder"(): $ArgumentBuilder
public "getExamples"(): $Collection<(StringJS)>
public "isValidInput"(arg0: StringJS): boolean
public "listSuggestions"(arg0: $CommandContext$$Type<(S)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
get "usageText"(): StringJS
get "name"(): StringJS
get "literal"(): StringJS
get "examples"(): $Collection<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LiteralCommandNode$$Type<S> = ($LiteralCommandNode<(S)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LiteralCommandNode$$Original<S> = $LiteralCommandNode<(S)>;}
declare module "com.mojang.brigadier.tree.ArgumentCommandNode" {
import {$CommandContextBuilder$$Type} from "com.mojang.brigadier.context.CommandContextBuilder"
import {$Collection} from "java.util.Collection"
import {$Suggestions} from "com.mojang.brigadier.suggestion.Suggestions"
import {$StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"
import {$CommandNode, $CommandNode$$Type} from "com.mojang.brigadier.tree.CommandNode"
import {$RedirectModifier$$Type} from "com.mojang.brigadier.RedirectModifier"
import {$Command$$Type} from "com.mojang.brigadier.Command"
import {$SuggestionProvider, $SuggestionProvider$$Type} from "com.mojang.brigadier.suggestion.SuggestionProvider"
import {$CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$ArgumentType, $ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$ArgumentBuilder} from "com.mojang.brigadier.builder.ArgumentBuilder"

export class $ArgumentCommandNode<S, T> extends $CommandNode<(S)> {
constructor(arg0: StringJS, arg1: $ArgumentType$$Type<(T)>, arg2: $Command$$Type<(S)>, arg3: $Predicate$$Type<(S)>, arg4: $CommandNode$$Type<(S)>, arg5: $RedirectModifier$$Type<(S)>, arg6: boolean, arg7: $SuggestionProvider$$Type<(S)>)

public "getUsageText"(): StringJS
public "getName"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "parse"(arg0: $StringReader$$Type, arg1: $CommandContextBuilder$$Type<(S)>): void
public "getType"(): $ArgumentType<(T)>
public "createBuilder"(): $ArgumentBuilder
public "getExamples"(): $Collection<(StringJS)>
public "isValidInput"(arg0: StringJS): boolean
public "listSuggestions"(arg0: $CommandContext$$Type<(S)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
public "getCustomSuggestions"(): $SuggestionProvider<(S)>
get "usageText"(): StringJS
get "name"(): StringJS
get "type"(): $ArgumentType<(T)>
get "examples"(): $Collection<(StringJS)>
get "customSuggestions"(): $SuggestionProvider<(S)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArgumentCommandNode$$Type<S, T> = ($ArgumentCommandNode<(S), (T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArgumentCommandNode$$Original<S, T> = $ArgumentCommandNode<(S), (T)>;}
