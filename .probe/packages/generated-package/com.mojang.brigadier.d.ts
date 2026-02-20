declare module "com.mojang.brigadier.ImmutableStringReader" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ImmutableStringReader$$Interface {
get "string"(): StringJS
get "remaining"(): StringJS
get "cursor"(): integer
get "totalLength"(): integer
get "remainingLength"(): integer
get "read"(): StringJS
}

export class $ImmutableStringReader implements $ImmutableStringReader$$Interface {
 "canRead"(): boolean
 "canRead"(arg0: integer): boolean
 "peek"(arg0: integer): character
 "peek"(): character
 "getString"(): StringJS
 "getRemaining"(): StringJS
 "getCursor"(): integer
 "getTotalLength"(): integer
 "getRemainingLength"(): integer
 "getRead"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableStringReader$$Type = ($ImmutableStringReader);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ImmutableStringReader$$Original = $ImmutableStringReader;}
declare module "com.mojang.brigadier.ResultConsumer" {
import {$CommandContext, $CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"

export interface $ResultConsumer$$Interface<S> {

(arg0: $CommandContext<(S)>, arg1: boolean, arg2: integer): void
}

export class $ResultConsumer<S> implements $ResultConsumer$$Interface {
 "onCommandComplete"(arg0: $CommandContext$$Type<(S)>, arg1: boolean, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResultConsumer$$Type<S> = ((arg0: $CommandContext<(S)>, arg1: boolean, arg2: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResultConsumer$$Original<S> = $ResultConsumer<(S)>;}
declare module "com.mojang.brigadier.Message" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Message$$Interface {

(): StringJS
get "string"(): StringJS
}

export class $Message implements $Message$$Interface {
 "getString"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Message$$Type = (() => StringJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Message$$Original = $Message;}
declare module "com.mojang.brigadier.StringReader" {
import {$ImmutableStringReader$$Interface} from "com.mojang.brigadier.ImmutableStringReader"

export class $StringReader implements $ImmutableStringReader$$Interface {
constructor(arg0: $StringReader$$Type)
constructor(arg0: StringJS)

public "read"(): character
public "readInt"(): integer
public "canRead"(): boolean
public "canRead"(arg0: integer): boolean
public "skip"(): void
public "peek"(): character
public "peek"(arg0: integer): character
public "expect"(arg0: character): void
public "readFloat"(): float
public "readBoolean"(): boolean
public "readLong"(): long
public "readDouble"(): double
public "readString"(): StringJS
public "getString"(): StringJS
public "getRemaining"(): StringJS
public "skipWhitespace"(): void
public "readUnquotedString"(): StringJS
public "readQuotedString"(): StringJS
public "setCursor"(arg0: integer): void
public static "isAllowedInUnquotedString"(arg0: character): boolean
public "readStringUntil"(arg0: character): StringJS
public static "isAllowedNumber"(arg0: character): boolean
public "getCursor"(): integer
public static "isQuotedStringStart"(arg0: character): boolean
public "getTotalLength"(): integer
public "getRemainingLength"(): integer
public "getRead"(): StringJS
get "string"(): StringJS
get "remaining"(): StringJS
set "cursor"(value: integer)
get "cursor"(): integer
get "totalLength"(): integer
get "remainingLength"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringReader$$Type = ($StringReader);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StringReader$$Original = $StringReader;}
declare module "com.mojang.brigadier.SingleRedirectModifier" {
import {$CommandContext, $CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"

export interface $SingleRedirectModifier$$Interface<S> {

(arg0: $CommandContext<(S)>): S
}

export class $SingleRedirectModifier<S> implements $SingleRedirectModifier$$Interface {
 "apply"(arg0: $CommandContext$$Type<(S)>): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleRedirectModifier$$Type<S> = ((arg0: $CommandContext<(S)>) => S);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SingleRedirectModifier$$Original<S> = $SingleRedirectModifier<(S)>;}
declare module "com.mojang.brigadier.AmbiguityConsumer" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$CommandNode, $CommandNode$$Type} from "com.mojang.brigadier.tree.CommandNode"

export interface $AmbiguityConsumer$$Interface<S> {

(arg0: $CommandNode<(S)>, arg1: $CommandNode<(S)>, arg2: $CommandNode<(S)>, arg3: $Collection<(StringJS)>): void
}

export class $AmbiguityConsumer<S> implements $AmbiguityConsumer$$Interface {
 "ambiguous"(arg0: $CommandNode$$Type<(S)>, arg1: $CommandNode$$Type<(S)>, arg2: $CommandNode$$Type<(S)>, arg3: $Collection$$Type<(StringJS)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmbiguityConsumer$$Type<S> = ((arg0: $CommandNode<(S)>, arg1: $CommandNode<(S)>, arg2: $CommandNode<(S)>, arg3: $Collection<(StringJS)>) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AmbiguityConsumer$$Original<S> = $AmbiguityConsumer<(S)>;}
declare module "com.mojang.brigadier.RedirectModifier" {
import {$CommandContext, $CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$Collection, $Collection$$Type} from "java.util.Collection"

export interface $RedirectModifier$$Interface<S> {

(arg0: $CommandContext<(S)>): $Collection$$Type<(S)>
}

export class $RedirectModifier<S> implements $RedirectModifier$$Interface {
 "apply"(arg0: $CommandContext$$Type<(S)>): $Collection<(S)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedirectModifier$$Type<S> = ((arg0: $CommandContext<(S)>) => $Collection$$Type<(S)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RedirectModifier$$Original<S> = $RedirectModifier<(S)>;}
declare module "com.mojang.brigadier.CommandDispatcher" {
import {$ParseResults, $ParseResults$$Type} from "com.mojang.brigadier.ParseResults"
import {$LiteralArgumentBuilder$$Type} from "com.mojang.brigadier.builder.LiteralArgumentBuilder"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Suggestions} from "com.mojang.brigadier.suggestion.Suggestions"
import {$Map} from "java.util.Map"
import {$StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$ResultConsumer$$Type} from "com.mojang.brigadier.ResultConsumer"
import {$CommandNode, $CommandNode$$Type} from "com.mojang.brigadier.tree.CommandNode"
import {$RootCommandNode, $RootCommandNode$$Type} from "com.mojang.brigadier.tree.RootCommandNode"
import {$AmbiguityConsumer$$Type} from "com.mojang.brigadier.AmbiguityConsumer"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$LiteralCommandNode} from "com.mojang.brigadier.tree.LiteralCommandNode"

export class $CommandDispatcher<S> {
static readonly "ARGUMENT_SEPARATOR": StringJS
static readonly "ARGUMENT_SEPARATOR_CHAR": character

constructor(arg0: $RootCommandNode$$Type<(S)>)
constructor()

public "register"(arg0: $LiteralArgumentBuilder$$Type<(S)>): $LiteralCommandNode<(S)>
public "execute"(arg0: $ParseResults$$Type<(S)>): integer
public "execute"(arg0: $StringReader$$Type, arg1: S): integer
public "execute"(arg0: StringJS, arg1: S): integer
public "parse"(arg0: $StringReader$$Type, arg1: S): $ParseResults<(S)>
public "parse"(arg0: StringJS, arg1: S): $ParseResults<(S)>
public "getRoot"(): $RootCommandNode<(S)>
public "getPath"(arg0: $CommandNode$$Type<(S)>): $Collection<(StringJS)>
public "findNode"(arg0: $Collection$$Type<(StringJS)>): $CommandNode<(S)>
public "getCompletionSuggestions"(arg0: $ParseResults$$Type<(S)>): $CompletableFuture<($Suggestions)>
public "getCompletionSuggestions"(arg0: $ParseResults$$Type<(S)>, arg1: integer): $CompletableFuture<($Suggestions)>
public "setConsumer"(arg0: $ResultConsumer$$Type<(S)>): void
public "getAllUsage"(arg0: $CommandNode$$Type<(S)>, arg1: S, arg2: boolean): (StringJS)[]
public "getSmartUsage"(arg0: $CommandNode$$Type<(S)>, arg1: S): $Map<($CommandNode<(S)>), (StringJS)>
public "findAmbiguities"(arg0: $AmbiguityConsumer$$Type<(S)>): void
get "root"(): $RootCommandNode<(S)>
set "consumer"(value: $ResultConsumer$$Type<(S)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandDispatcher$$Type<S> = ($CommandDispatcher<(S)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CommandDispatcher$$Original<S> = $CommandDispatcher<(S)>;}
declare module "com.mojang.brigadier.Command" {
import {$CommandContext, $CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"

export interface $Command$$Interface<S> {

(arg0: $CommandContext<(S)>): integer
}

export class $Command<S> implements $Command$$Interface {
static readonly "SINGLE_SUCCESS": integer

 "run"(arg0: $CommandContext$$Type<(S)>): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Command$$Type<S> = ((arg0: $CommandContext<(S)>) => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Command$$Original<S> = $Command<(S)>;}
declare module "com.mojang.brigadier.ParseResults" {
import {$ImmutableStringReader, $ImmutableStringReader$$Type} from "com.mojang.brigadier.ImmutableStringReader"
import {$CommandContextBuilder, $CommandContextBuilder$$Type} from "com.mojang.brigadier.context.CommandContextBuilder"
import {$Map, $Map$$Type} from "java.util.Map"
import {$CommandSyntaxException, $CommandSyntaxException$$Type} from "com.mojang.brigadier.exceptions.CommandSyntaxException"
import {$CommandNode, $CommandNode$$Type} from "com.mojang.brigadier.tree.CommandNode"

export class $ParseResults<S> {
constructor(arg0: $CommandContextBuilder$$Type<(S)>, arg1: $ImmutableStringReader$$Type, arg2: $Map$$Type<($CommandNode$$Type<(S)>), ($CommandSyntaxException$$Type)>)
constructor(arg0: $CommandContextBuilder$$Type<(S)>)

public "getContext"(): $CommandContextBuilder<(S)>
public "getExceptions"(): $Map<($CommandNode<(S)>), ($CommandSyntaxException)>
public "getReader"(): $ImmutableStringReader
get "context"(): $CommandContextBuilder<(S)>
get "exceptions"(): $Map<($CommandNode<(S)>), ($CommandSyntaxException)>
get "reader"(): $ImmutableStringReader
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParseResults$$Type<S> = ($ParseResults<(S)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ParseResults$$Original<S> = $ParseResults<(S)>;}
