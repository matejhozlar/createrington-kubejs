declare module "com.mojang.brigadier.suggestion.Suggestion" {
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$StringRange, $StringRange$$Type} from "com.mojang.brigadier.context.StringRange"
import {$Message, $Message$$Type} from "com.mojang.brigadier.Message"

export class $Suggestion implements $Comparable$$Interface<($Suggestion)> {
constructor(arg0: $StringRange$$Type, arg1: StringJS)
constructor(arg0: $StringRange$$Type, arg1: StringJS, arg2: $Message$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "expand"(arg0: StringJS, arg1: $StringRange$$Type): $Suggestion
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $Suggestion$$Type): integer
public "apply"(arg0: StringJS): StringJS
public "compareToIgnoreCase"(arg0: $Suggestion$$Type): integer
public "getText"(): StringJS
public "getTooltip"(): $Message
public "getRange"(): $StringRange
get "text"(): StringJS
get "tooltip"(): $Message
get "range"(): $StringRange
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Suggestion$$Type = ($Suggestion);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Suggestion$$Original = $Suggestion;}
declare module "com.mojang.brigadier.suggestion.SuggestionsBuilder" {
import {$Suggestions} from "com.mojang.brigadier.suggestion.Suggestions"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$Message$$Type} from "com.mojang.brigadier.Message"

export class $SuggestionsBuilder {
constructor(arg0: StringJS, arg1: StringJS, arg2: integer)
constructor(arg0: StringJS, arg1: integer)

public "getRemainingLowerCase"(): StringJS
public "getInput"(): StringJS
public "add"(arg0: $SuggestionsBuilder$$Type): $SuggestionsBuilder
public "build"(): $Suggestions
public "getRemaining"(): StringJS
public "suggest"(arg0: StringJS, arg1: $Message$$Type): $SuggestionsBuilder
public "suggest"(arg0: integer): $SuggestionsBuilder
public "suggest"(arg0: integer, arg1: $Message$$Type): $SuggestionsBuilder
public "suggest"(arg0: StringJS): $SuggestionsBuilder
public "getStart"(): integer
public "buildFuture"(): $CompletableFuture<($Suggestions)>
public "createOffset"(arg0: integer): $SuggestionsBuilder
public "restart"(): $SuggestionsBuilder
get "remainingLowerCase"(): StringJS
get "input"(): StringJS
get "remaining"(): StringJS
get "start"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SuggestionsBuilder$$Type = ($SuggestionsBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SuggestionsBuilder$$Original = $SuggestionsBuilder;}
declare module "com.mojang.brigadier.suggestion.Suggestions" {
import {$Suggestion, $Suggestion$$Type} from "com.mojang.brigadier.suggestion.Suggestion"
import {$Collection$$Type} from "java.util.Collection"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$List, $List$$Type} from "java.util.List"
import {$StringRange, $StringRange$$Type} from "com.mojang.brigadier.context.StringRange"

export class $Suggestions {
constructor(arg0: $StringRange$$Type, arg1: $List$$Type<($Suggestion$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public static "merge"(arg0: StringJS, arg1: $Collection$$Type<($Suggestions$$Type)>): $Suggestions
public static "empty"(): $CompletableFuture<($Suggestions)>
public static "create"(arg0: StringJS, arg1: $Collection$$Type<($Suggestion$$Type)>): $Suggestions
public "getRange"(): $StringRange
public "getList"(): $List<($Suggestion)>
get "range"(): $StringRange
get "list"(): $List<($Suggestion)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Suggestions$$Type = ($Suggestions);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Suggestions$$Original = $Suggestions;}
declare module "com.mojang.brigadier.suggestion.SuggestionProvider" {
import {$CommandContext, $CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$Suggestions, $Suggestions$$Type} from "com.mojang.brigadier.suggestion.Suggestions"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$SuggestionsBuilder, $SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"

export interface $SuggestionProvider$$Interface<S> {

(arg0: $CommandContext<(S)>, arg1: $SuggestionsBuilder): $CompletableFuture$$Type<($Suggestions$$Type)>
}

export class $SuggestionProvider<S> implements $SuggestionProvider$$Interface {
 "getSuggestions"(arg0: $CommandContext$$Type<(S)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SuggestionProvider$$Type<S> = ((arg0: $CommandContext<(S)>, arg1: $SuggestionsBuilder) => $CompletableFuture$$Type<($Suggestions$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SuggestionProvider$$Original<S> = $SuggestionProvider<(S)>;}
