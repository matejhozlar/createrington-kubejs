declare module "de.maxhenkel.voicechat.configbuilder.entry.ConfigEntry" {
import {$Config} from "de.maxhenkel.voicechat.configbuilder.Config"

export interface $ConfigEntry$$Interface<T> {
get "default"(): T
get "key"(): StringJS
get "config"(): $Config
get "comments"(): (StringJS)[]
}

export class $ConfigEntry<T> implements $ConfigEntry$$Interface {
 "reset"(): $ConfigEntry<(T)>
 "get"(): T
 "getDefault"(): T
 "getKey"(): StringJS
 "set"(arg0: T): $ConfigEntry<(T)>
 "save"(): $ConfigEntry<(T)>
 "comment"(...arg0: (StringJS)[]): $ConfigEntry<(T)>
 "getConfig"(): $Config
 "getComments"(): (StringJS)[]
 "saveSync"(): $ConfigEntry<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigEntry$$Type<T> = ($ConfigEntry<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfigEntry$$Original<T> = $ConfigEntry<(T)>;}
declare module "de.maxhenkel.voicechat.configbuilder.ConfigBuilder" {
import {$ConfigBuilder$Builder} from "de.maxhenkel.voicechat.configbuilder.ConfigBuilder$Builder"
import {$BooleanConfigEntry} from "de.maxhenkel.voicechat.configbuilder.entry.BooleanConfigEntry"
import {$DoubleConfigEntry} from "de.maxhenkel.voicechat.configbuilder.entry.DoubleConfigEntry"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Function$$Type} from "java.util.function.Function"
import {$IntegerConfigEntry} from "de.maxhenkel.voicechat.configbuilder.entry.IntegerConfigEntry"
import {$LongConfigEntry} from "de.maxhenkel.voicechat.configbuilder.entry.LongConfigEntry"
import {$ConfigEntry} from "de.maxhenkel.voicechat.configbuilder.entry.ConfigEntry"
import {$StringConfigEntry} from "de.maxhenkel.voicechat.configbuilder.entry.StringConfigEntry"
import {$FloatConfigEntry} from "de.maxhenkel.voicechat.configbuilder.entry.FloatConfigEntry"
import {$EnumConfigEntry} from "de.maxhenkel.voicechat.configbuilder.entry.EnumConfigEntry"

export interface $ConfigBuilder$$Interface {
}

export class $ConfigBuilder implements $ConfigBuilder$$Interface {
static "builder"<C>(arg0: $Function$$Type<($ConfigBuilder), (C)>): $ConfigBuilder$Builder<(C)>
 "entry"<T>(arg0: StringJS, arg1: T, ...arg2: (StringJS)[]): $ConfigEntry<(T)>
 "header"(...arg0: (StringJS)[]): $ConfigBuilder
 "enumEntry"<E extends $Enum<(object)>>(arg0: StringJS, arg1: E, ...arg2: (StringJS)[]): $EnumConfigEntry<(E)>
 "stringEntry"(arg0: StringJS, arg1: StringJS, ...arg2: (StringJS)[]): $StringConfigEntry
 "integerEntry"(arg0: StringJS, arg1: integer, arg2: integer, arg3: integer, ...arg4: (StringJS)[]): $IntegerConfigEntry
 "integerEntry"(arg0: StringJS, arg1: integer, ...arg2: (StringJS)[]): $IntegerConfigEntry
 "doubleEntry"(arg0: StringJS, arg1: double, ...arg2: (StringJS)[]): $DoubleConfigEntry
 "doubleEntry"(arg0: StringJS, arg1: double, arg2: double, arg3: double, ...arg4: (StringJS)[]): $DoubleConfigEntry
 "booleanEntry"(arg0: StringJS, arg1: boolean, ...arg2: (StringJS)[]): $BooleanConfigEntry
 "longEntry"(arg0: StringJS, arg1: long, arg2: long, arg3: long, ...arg4: (StringJS)[]): $LongConfigEntry
 "longEntry"(arg0: StringJS, arg1: long, ...arg2: (StringJS)[]): $LongConfigEntry
 "floatEntry"(arg0: StringJS, arg1: float, ...arg2: (StringJS)[]): $FloatConfigEntry
 "floatEntry"(arg0: StringJS, arg1: float, arg2: float, arg3: float, ...arg4: (StringJS)[]): $FloatConfigEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigBuilder$$Type = ($ConfigBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfigBuilder$$Original = $ConfigBuilder;}
