declare module "com.mojang.brigadier.arguments.ArgumentType" {
import {$CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$Suggestions} from "com.mojang.brigadier.suggestion.Suggestions"
import {$Collection} from "java.util.Collection"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$StringReader, $StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"

export interface $ArgumentType$$Interface<T> {

(arg0: $StringReader): T
get "examples"(): $Collection<(StringJS)>
}

export class $ArgumentType<T> implements $ArgumentType$$Interface {
 "parse"(arg0: $StringReader$$Type): T
 "parse"<S>(arg0: $StringReader$$Type, arg1: S): T
 "getExamples"(): $Collection<(StringJS)>
 "listSuggestions"<S>(arg0: $CommandContext$$Type<(S)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArgumentType$$Type<T> = ((arg0: $StringReader) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArgumentType$$Original<T> = $ArgumentType<(T)>;}
