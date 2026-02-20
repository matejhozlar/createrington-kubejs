declare module "com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType$Function" {
import {$Message, $Message$$Type} from "com.mojang.brigadier.Message"

export interface $Dynamic2CommandExceptionType$Function$$Interface {

(arg0: any, arg1: any): $Message$$Type
}

export class $Dynamic2CommandExceptionType$Function implements $Dynamic2CommandExceptionType$Function$$Interface {
 "apply"(arg0: any, arg1: any): $Message
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Dynamic2CommandExceptionType$Function$$Type = ((arg0: any, arg1: any) => $Message$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Dynamic2CommandExceptionType$Function$$Original = $Dynamic2CommandExceptionType$Function;}
declare module "com.mojang.brigadier.exceptions.CommandSyntaxException" {
import {$Exception} from "java.lang.Exception"
import {$CommandExceptionType, $CommandExceptionType$$Type} from "com.mojang.brigadier.exceptions.CommandExceptionType"
import {$BuiltInExceptionProvider} from "com.mojang.brigadier.exceptions.BuiltInExceptionProvider"
import {$Message, $Message$$Type} from "com.mojang.brigadier.Message"

export class $CommandSyntaxException extends $Exception {
static "BUILT_IN_EXCEPTIONS": $BuiltInExceptionProvider
static "ENABLE_COMMAND_STACK_TRACES": boolean
static readonly "CONTEXT_AMOUNT": integer

constructor(arg0: $CommandExceptionType$$Type, arg1: $Message$$Type)
constructor(arg0: $CommandExceptionType$$Type, arg1: $Message$$Type, arg2: StringJS, arg3: integer)

public "getInput"(): StringJS
public "getMessage"(): StringJS
public "getContext"(): StringJS
public "getType"(): $CommandExceptionType
public "getCursor"(): integer
public "getRawMessage"(): $Message
get "input"(): StringJS
get "message"(): StringJS
get "context"(): StringJS
get "type"(): $CommandExceptionType
get "cursor"(): integer
get "rawMessage"(): $Message
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandSyntaxException$$Type = ($CommandSyntaxException);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CommandSyntaxException$$Original = $CommandSyntaxException;}
declare module "com.mojang.brigadier.exceptions.DynamicCommandExceptionType" {
import {$ImmutableStringReader$$Type} from "com.mojang.brigadier.ImmutableStringReader"
import {$CommandSyntaxException} from "com.mojang.brigadier.exceptions.CommandSyntaxException"
import {$CommandExceptionType$$Interface} from "com.mojang.brigadier.exceptions.CommandExceptionType"
import {$Function$$Type} from "java.util.function.Function"
import {$Message$$Type} from "com.mojang.brigadier.Message"

export class $DynamicCommandExceptionType implements $CommandExceptionType$$Interface {
constructor(arg0: $Function$$Type<(any), ($Message$$Type)>)

public "create"(arg0: any): $CommandSyntaxException
public "createWithContext"(arg0: $ImmutableStringReader$$Type, arg1: any): $CommandSyntaxException
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicCommandExceptionType$$Type = ($DynamicCommandExceptionType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DynamicCommandExceptionType$$Original = $DynamicCommandExceptionType;}
declare module "com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType" {
import {$ImmutableStringReader$$Type} from "com.mojang.brigadier.ImmutableStringReader"
import {$CommandSyntaxException} from "com.mojang.brigadier.exceptions.CommandSyntaxException"
import {$CommandExceptionType$$Interface} from "com.mojang.brigadier.exceptions.CommandExceptionType"
import {$Dynamic2CommandExceptionType$Function$$Type} from "com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType$Function"

export class $Dynamic2CommandExceptionType implements $CommandExceptionType$$Interface {
constructor(arg0: $Dynamic2CommandExceptionType$Function$$Type)

public "create"(arg0: any, arg1: any): $CommandSyntaxException
public "createWithContext"(arg0: $ImmutableStringReader$$Type, arg1: any, arg2: any): $CommandSyntaxException
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Dynamic2CommandExceptionType$$Type = ($Dynamic2CommandExceptionType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Dynamic2CommandExceptionType$$Original = $Dynamic2CommandExceptionType;}
declare module "com.mojang.brigadier.exceptions.CommandExceptionType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CommandExceptionType$$Interface {
}

export class $CommandExceptionType implements $CommandExceptionType$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandExceptionType$$Type = ($CommandExceptionType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CommandExceptionType$$Original = $CommandExceptionType;}
declare module "com.mojang.brigadier.exceptions.BuiltInExceptionProvider" {
import {$SimpleCommandExceptionType} from "com.mojang.brigadier.exceptions.SimpleCommandExceptionType"
import {$Dynamic2CommandExceptionType} from "com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType"
import {$DynamicCommandExceptionType} from "com.mojang.brigadier.exceptions.DynamicCommandExceptionType"

export interface $BuiltInExceptionProvider$$Interface {
}

export class $BuiltInExceptionProvider implements $BuiltInExceptionProvider$$Interface {
 "longTooHigh"(): $Dynamic2CommandExceptionType
 "readerInvalidBool"(): $DynamicCommandExceptionType
 "doubleTooLow"(): $Dynamic2CommandExceptionType
 "doubleTooHigh"(): $Dynamic2CommandExceptionType
 "integerTooHigh"(): $Dynamic2CommandExceptionType
 "readerInvalidInt"(): $DynamicCommandExceptionType
 "integerTooLow"(): $Dynamic2CommandExceptionType
 "readerInvalidLong"(): $DynamicCommandExceptionType
 "readerExpectedLong"(): $SimpleCommandExceptionType
 "readerInvalidFloat"(): $DynamicCommandExceptionType
 "literalIncorrect"(): $DynamicCommandExceptionType
 "readerExpectedBool"(): $SimpleCommandExceptionType
 "floatTooHigh"(): $Dynamic2CommandExceptionType
 "floatTooLow"(): $Dynamic2CommandExceptionType
 "readerExpectedInt"(): $SimpleCommandExceptionType
 "dispatcherExpectedArgumentSeparator"(): $SimpleCommandExceptionType
 "longTooLow"(): $Dynamic2CommandExceptionType
 "readerExpectedEndOfQuote"(): $SimpleCommandExceptionType
 "dispatcherParseException"(): $DynamicCommandExceptionType
 "readerExpectedDouble"(): $SimpleCommandExceptionType
 "dispatcherUnknownCommand"(): $SimpleCommandExceptionType
 "dispatcherUnknownArgument"(): $SimpleCommandExceptionType
 "readerExpectedSymbol"(): $DynamicCommandExceptionType
 "readerExpectedStartOfQuote"(): $SimpleCommandExceptionType
 "readerExpectedFloat"(): $SimpleCommandExceptionType
 "readerInvalidEscape"(): $DynamicCommandExceptionType
 "readerInvalidDouble"(): $DynamicCommandExceptionType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuiltInExceptionProvider$$Type = ($BuiltInExceptionProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BuiltInExceptionProvider$$Original = $BuiltInExceptionProvider;}
declare module "com.mojang.brigadier.exceptions.SimpleCommandExceptionType" {
import {$ImmutableStringReader$$Type} from "com.mojang.brigadier.ImmutableStringReader"
import {$CommandSyntaxException} from "com.mojang.brigadier.exceptions.CommandSyntaxException"
import {$CommandExceptionType$$Interface} from "com.mojang.brigadier.exceptions.CommandExceptionType"
import {$Message$$Type} from "com.mojang.brigadier.Message"

export class $SimpleCommandExceptionType implements $CommandExceptionType$$Interface {
constructor(arg0: $Message$$Type)

public "toString"(): StringJS
public "create"(): $CommandSyntaxException
public "createWithContext"(arg0: $ImmutableStringReader$$Type): $CommandSyntaxException
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleCommandExceptionType$$Type = ($SimpleCommandExceptionType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleCommandExceptionType$$Original = $SimpleCommandExceptionType;}
