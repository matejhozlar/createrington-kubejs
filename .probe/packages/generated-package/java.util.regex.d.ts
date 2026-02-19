declare module "java.util.regex.Pattern" {
import {$Matcher} from "java.util.regex.Matcher"
import {$Map} from "java.util.Map"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Predicate} from "java.util.function.Predicate"
import {$Stream} from "java.util.stream.Stream"

export class $Pattern implements $Serializable$$Interface {
static readonly "DOTALL": integer
static readonly "UNICODE_CASE": integer
static readonly "LITERAL": integer
static readonly "UNICODE_CHARACTER_CLASS": integer
static readonly "CASE_INSENSITIVE": integer
static readonly "CANON_EQ": integer
static readonly "COMMENTS": integer
static readonly "UNIX_LINES": integer
static readonly "MULTILINE": integer

public "toString"(): StringJS
public "flags"(): integer
public static "matches"(arg0: StringJS, arg1: charseq): boolean
public static "compile"(arg0: StringJS): $Pattern
public static "compile"(arg0: StringJS, arg1: integer): $Pattern
public "matcher"(arg0: charseq): $Matcher
public "split"(arg0: charseq, arg1: integer): (StringJS)[]
public "split"(arg0: charseq): (StringJS)[]
public "splitWithDelimiters"(arg0: charseq, arg1: integer): (StringJS)[]
public "pattern"(): StringJS
public static "quote"(arg0: StringJS): StringJS
public "namedGroups"(): $Map<(StringJS), (integer)>
public "asPredicate"(): $Predicate<(StringJS)>
public "asMatchPredicate"(): $Predicate<(StringJS)>
public "splitAsStream"(arg0: charseq): $Stream<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pattern$$Type = ($Pattern);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Pattern$$Original = $Pattern;}
declare module "java.util.regex.Matcher" {
import {$Pattern, $Pattern$$Type} from "java.util.regex.Pattern"
import {$Map} from "java.util.Map"
import {$StringBuilder, $StringBuilder$$Type} from "java.lang.StringBuilder"
import {$Function$$Type} from "java.util.function.Function"
import {$StringBuffer, $StringBuffer$$Type} from "java.lang.StringBuffer"
import {$MatchResult, $MatchResult$$Type, $MatchResult$$Interface} from "java.util.regex.MatchResult"
import {$Stream} from "java.util.stream.Stream"

export class $Matcher implements $MatchResult$$Interface {
public "group"(arg0: integer): StringJS
public "group"(): StringJS
public "group"(arg0: StringJS): StringJS
public "reset"(arg0: charseq): $Matcher
public "reset"(): $Matcher
public "toString"(): StringJS
public "end"(arg0: integer): integer
public "end"(): integer
public "end"(arg0: StringJS): integer
public "matches"(): boolean
public "replaceFirst"(arg0: StringJS): StringJS
public "replaceFirst"(arg0: $Function$$Type<($MatchResult), (StringJS)>): StringJS
public "replaceAll"(arg0: StringJS): StringJS
public "replaceAll"(arg0: $Function$$Type<($MatchResult), (StringJS)>): StringJS
public "pattern"(): $Pattern
public "find"(): boolean
public "find"(arg0: integer): boolean
public "start"(arg0: integer): integer
public "start"(arg0: StringJS): integer
public "start"(): integer
public "results"(): $Stream<($MatchResult)>
public "region"(arg0: integer, arg1: integer): $Matcher
public "namedGroups"(): $Map<(StringJS), (integer)>
public "groupCount"(): integer
public "hasMatch"(): boolean
public "appendReplacement"(arg0: $StringBuffer$$Type, arg1: StringJS): $Matcher
public "appendReplacement"(arg0: $StringBuilder$$Type, arg1: StringJS): $Matcher
public "appendTail"(arg0: $StringBuffer$$Type): $StringBuffer
public "appendTail"(arg0: $StringBuilder$$Type): $StringBuilder
public "regionStart"(): integer
public "regionEnd"(): integer
public "hitEnd"(): boolean
public "requireEnd"(): boolean
public "toMatchResult"(): $MatchResult
public "usePattern"(arg0: $Pattern$$Type): $Matcher
public "lookingAt"(): boolean
public static "quoteReplacement"(arg0: StringJS): StringJS
public "hasTransparentBounds"(): boolean
public "useTransparentBounds"(arg0: boolean): $Matcher
public "hasAnchoringBounds"(): boolean
public "useAnchoringBounds"(arg0: boolean): $Matcher
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Matcher$$Type = ($Matcher);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Matcher$$Original = $Matcher;}
declare module "java.util.regex.MatchResult" {
import {$Map} from "java.util.Map"

export interface $MatchResult$$Interface {
}

export class $MatchResult implements $MatchResult$$Interface {
 "group"(arg0: integer): StringJS
 "group"(arg0: StringJS): StringJS
 "group"(): StringJS
 "end"(arg0: StringJS): integer
 "end"(arg0: integer): integer
 "end"(): integer
 "start"(): integer
 "start"(arg0: StringJS): integer
 "start"(arg0: integer): integer
 "namedGroups"(): $Map<(StringJS), (integer)>
 "groupCount"(): integer
 "hasMatch"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MatchResult$$Type = ($MatchResult);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MatchResult$$Original = $MatchResult;}
