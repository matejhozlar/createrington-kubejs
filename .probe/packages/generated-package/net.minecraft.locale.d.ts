declare module "net.minecraft.locale.Language" {
import {$FormattedCharSequence} from "net.minecraft.util.FormattedCharSequence"
import {$Map} from "java.util.Map"
import {$FormattedText$$Type} from "net.minecraft.network.chat.FormattedText"
import {$List, $List$$Type} from "java.util.List"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$InputStream$$Type} from "java.io.InputStream"

export class $Language {
static readonly "DEFAULT": StringJS

constructor()

public static "getInstance"(): $Language
public "getOrDefault"(arg0: StringJS): StringJS
public "getOrDefault"(arg0: StringJS, arg1: StringJS): StringJS
public "has"(arg0: StringJS): boolean
public static "inject"(arg0: $Language$$Type): void
public "getComponent"(arg0: StringJS): $Component
public "isDefaultRightToLeft"(): boolean
public "getLanguageData"(): $Map<(StringJS), (StringJS)>
public static "loadFromJson"(arg0: $InputStream$$Type, arg1: $BiConsumer$$Type<(StringJS), (StringJS)>, arg2: $BiConsumer$$Type<(StringJS), ($Component)>): void
public static "loadFromJson"(arg0: $InputStream$$Type, arg1: $BiConsumer$$Type<(StringJS), (StringJS)>): void
public "getVisualOrder"(arg0: $FormattedText$$Type): $FormattedCharSequence
public "getVisualOrder"(arg0: $List$$Type<($FormattedText$$Type)>): $List<($FormattedCharSequence)>
get "instance"(): $Language
get "defaultRightToLeft"(): boolean
get "languageData"(): $Map<(StringJS), (StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Language$$Type = ($Language);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Language$$Original = $Language;}
