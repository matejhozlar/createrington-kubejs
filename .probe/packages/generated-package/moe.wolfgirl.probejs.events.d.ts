declare module "moe.wolfgirl.probejs.events.CodeGenerationEventJS" {
import {$KubeEvent$$Interface} from "dev.latvian.mods.kubejs.event.KubeEvent"

export class $CodeGenerationEventJS implements $KubeEvent$$Interface {
constructor()

public "add"(...lines: (StringJS)[]): void
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(value: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(value: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(value: any): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CodeGenerationEventJS$$Type = ($CodeGenerationEventJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CodeGenerationEventJS$$Original = $CodeGenerationEventJS;}
declare module "moe.wolfgirl.probejs.events.ScriptEventJS" {
import {$ScriptDump$$Type} from "moe.wolfgirl.probejs.lang.typescript.ScriptDump"
import {$KubeEvent$$Interface} from "dev.latvian.mods.kubejs.event.KubeEvent"
import {$TypeConverter} from "moe.wolfgirl.probejs.lang.transpiler.TypeConverter"
import {$ScriptType} from "dev.latvian.mods.kubejs.script.ScriptType"

export class $ScriptEventJS implements $KubeEvent$$Interface {
constructor(dump: $ScriptDump$$Type)

public "getTypeConverter"(): $TypeConverter
public "getScriptType"(): $ScriptType
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(value: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(value: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(value: any): any
get "typeConverter"(): $TypeConverter
get "scriptType"(): $ScriptType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScriptEventJS$$Type = ($ScriptEventJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScriptEventJS$$Original = $ScriptEventJS;}
declare module "moe.wolfgirl.probejs.events.TypeAssignmentEventJS" {
import {$ScriptDump$$Type} from "moe.wolfgirl.probejs.lang.typescript.ScriptDump"
import {$ScriptEventJS} from "moe.wolfgirl.probejs.events.ScriptEventJS"
import {$Class$$Type} from "java.lang.Class"
import {$BaseType$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.BaseType"

export class $TypeAssignmentEventJS extends $ScriptEventJS {
constructor(scriptDump: $ScriptDump$$Type)

public "assignType"(clazz: $Class$$Type<(never)>, baseType: $BaseType$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeAssignmentEventJS$$Type = ($TypeAssignmentEventJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TypeAssignmentEventJS$$Original = $TypeAssignmentEventJS;}
declare module "moe.wolfgirl.probejs.events.TypingModificationEventJS" {
import {$ScriptDump$$Type} from "moe.wolfgirl.probejs.lang.typescript.ScriptDump"
import {$ScriptEventJS} from "moe.wolfgirl.probejs.events.ScriptEventJS"
import {$Map$$Type} from "java.util.Map"
import {$Class$$Type} from "java.lang.Class"
import {$ClassPath$$Type} from "moe.wolfgirl.probejs.lang.java.clazz.ClassPath"
import {$TypeScriptFile$$Type} from "moe.wolfgirl.probejs.lang.typescript.TypeScriptFile"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $TypingModificationEventJS extends $ScriptEventJS {
constructor(dump: $ScriptDump$$Type, files: $Map$$Type<($ClassPath$$Type), ($TypeScriptFile$$Type)>)

public "modify"(clazz: $Class$$Type<(never)>, file: $Consumer$$Type<($TypeScriptFile)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypingModificationEventJS$$Type = ($TypingModificationEventJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TypingModificationEventJS$$Original = $TypingModificationEventJS;}
declare module "moe.wolfgirl.probejs.events.SnippetGenerationEventJS" {
import {$KubeEvent$$Interface} from "dev.latvian.mods.kubejs.event.KubeEvent"
import {$Snippet$$Type} from "moe.wolfgirl.probejs.lang.snippet.Snippet"
import {$SnippetDump$$Type} from "moe.wolfgirl.probejs.lang.snippet.SnippetDump"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $SnippetGenerationEventJS implements $KubeEvent$$Interface {
constructor(dump: $SnippetDump$$Type)

public "create"(name: StringJS, handler: $Consumer$$Type<($Snippet)>): void
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(value: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(value: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(value: any): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SnippetGenerationEventJS$$Type = ($SnippetGenerationEventJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SnippetGenerationEventJS$$Original = $SnippetGenerationEventJS;}
