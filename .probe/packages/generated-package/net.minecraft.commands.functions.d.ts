declare module "net.minecraft.commands.functions.InstantiatedFunction" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$List} from "java.util.List"
import {$UnboundEntryAction} from "net.minecraft.commands.execution.UnboundEntryAction"

export interface $InstantiatedFunction$$Interface<T> {
}

export class $InstantiatedFunction<T> implements $InstantiatedFunction$$Interface {
 "id"(): $ResourceLocation
 "entries"(): $List<($UnboundEntryAction<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InstantiatedFunction$$Type<T> = ($InstantiatedFunction<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InstantiatedFunction$$Original<T> = $InstantiatedFunction<(T)>;}
declare module "net.minecraft.commands.functions.CommandFunction" {
import {$ExecutionCommandSource, $ExecutionCommandSource$$Type} from "net.minecraft.commands.ExecutionCommandSource"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$List$$Type} from "java.util.List"
import {$InstantiatedFunction} from "net.minecraft.commands.functions.InstantiatedFunction"
import {$CommandDispatcher$$Type} from "com.mojang.brigadier.CommandDispatcher"
import {$UnboundEntryAction} from "net.minecraft.commands.execution.UnboundEntryAction"

export interface $CommandFunction$$Interface<T> {
}

export class $CommandFunction<T> implements $CommandFunction$$Interface {
 "id"(): $ResourceLocation
 "instantiate"(arg0: $CompoundTag$$Type, arg1: $CommandDispatcher$$Type<(T)>): $InstantiatedFunction<(T)>
static "parseCommand"<T extends $ExecutionCommandSource<(object)>>(arg0: $CommandDispatcher$$Type<(T)>, arg1: T, arg2: $StringReader$$Type): $UnboundEntryAction<(T)>
static "checkCommandLineLength"(arg0: charseq): void
static "fromLines"<T extends $ExecutionCommandSource<(object)>>(arg0: $ResourceLocation$$Type, arg1: $CommandDispatcher$$Type<(T)>, arg2: T, arg3: $List$$Type<(StringJS)>): $CommandFunction<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandFunction$$Type<T> = ($CommandFunction<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CommandFunction$$Original<T> = $CommandFunction<(T)>;}
