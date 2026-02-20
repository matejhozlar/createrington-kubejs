declare module "com.mojang.brigadier.builder.LiteralArgumentBuilder" {
import {$ArgumentBuilder} from "com.mojang.brigadier.builder.ArgumentBuilder"
import {$LiteralCommandNode} from "com.mojang.brigadier.tree.LiteralCommandNode"

export class $LiteralArgumentBuilder<S> extends $ArgumentBuilder<(S), ($LiteralArgumentBuilder<(S)>)> {
public "build"(): $LiteralCommandNode<(S)>
public static "literal"<S>(arg0: StringJS): $LiteralArgumentBuilder<(S)>
public "getLiteral"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LiteralArgumentBuilder$$Type<S> = ($LiteralArgumentBuilder<(S)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LiteralArgumentBuilder$$Original<S> = $LiteralArgumentBuilder<(S)>;}
declare module "com.mojang.brigadier.builder.ArgumentBuilder" {
import {$Collection} from "java.util.Collection"
import {$SingleRedirectModifier$$Type} from "com.mojang.brigadier.SingleRedirectModifier"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$CommandNode, $CommandNode$$Type} from "com.mojang.brigadier.tree.CommandNode"
import {$RedirectModifier, $RedirectModifier$$Type} from "com.mojang.brigadier.RedirectModifier"
import {$Command, $Command$$Type} from "com.mojang.brigadier.Command"

export class $ArgumentBuilder<S, T extends $ArgumentBuilder<(object), (object)>> {
constructor()

public "build"(): $CommandNode<(S)>
public "requires"(arg0: $Predicate$$Type<(S)>): T
public "fork"(arg0: $CommandNode$$Type<(S)>, arg1: $RedirectModifier$$Type<(S)>): T
public "redirect"(arg0: $CommandNode$$Type<(S)>): T
public "redirect"(arg0: $CommandNode$$Type<(S)>, arg1: $SingleRedirectModifier$$Type<(S)>): T
public "getArguments"(): $Collection<($CommandNode<(S)>)>
public "getRedirectModifier"(): $RedirectModifier<(S)>
public "then"(arg0: $CommandNode$$Type<(S)>): T
public "then"(arg0: $ArgumentBuilder$$Type<(S), (never)>): T
public "forward"(arg0: $CommandNode$$Type<(S)>, arg1: $RedirectModifier$$Type<(S)>, arg2: boolean): T
public "getCommand"(): $Command<(S)>
public "isFork"(): boolean
public "executes"(arg0: $Command$$Type<(S)>): T
public "getRedirect"(): $CommandNode<(S)>
public "getRequirement"(): $Predicate<(S)>
get "arguments"(): $Collection<($CommandNode<(S)>)>
get "redirectModifier"(): $RedirectModifier<(S)>
get "command"(): $Command<(S)>
get "requirement"(): $Predicate<(S)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArgumentBuilder$$Type<S, T> = ($ArgumentBuilder<(S), (T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArgumentBuilder$$Original<S, T> = $ArgumentBuilder<(S), (T)>;}
declare module "com.mojang.brigadier.builder.RequiredArgumentBuilder" {
import {$ArgumentType, $ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$ArgumentCommandNode} from "com.mojang.brigadier.tree.ArgumentCommandNode"
import {$ArgumentBuilder} from "com.mojang.brigadier.builder.ArgumentBuilder"
import {$SuggestionProvider, $SuggestionProvider$$Type} from "com.mojang.brigadier.suggestion.SuggestionProvider"

export class $RequiredArgumentBuilder<S, T> extends $ArgumentBuilder<(S), ($RequiredArgumentBuilder<(S), (T)>)> {
public "getName"(): StringJS
public "getType"(): $ArgumentType<(T)>
public static "argument"<S, T>(arg0: StringJS, arg1: $ArgumentType$$Type<(T)>): $RequiredArgumentBuilder<(S), (T)>
public "build"(): $ArgumentCommandNode<(S), (T)>
public "suggests"(arg0: $SuggestionProvider$$Type<(S)>): $RequiredArgumentBuilder<(S), (T)>
public "getSuggestionsProvider"(): $SuggestionProvider<(S)>
get "name"(): StringJS
get "type"(): $ArgumentType<(T)>
get "suggestionsProvider"(): $SuggestionProvider<(S)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RequiredArgumentBuilder$$Type<S, T> = ($RequiredArgumentBuilder<(S), (T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RequiredArgumentBuilder$$Original<S, T> = $RequiredArgumentBuilder<(S), (T)>;}
