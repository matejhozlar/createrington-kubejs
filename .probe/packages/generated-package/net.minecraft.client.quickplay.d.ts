declare module "net.minecraft.client.quickplay.QuickPlayLog$Type" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $QuickPlayLog$Type extends $Enum<($QuickPlayLog$Type)> implements $StringRepresentable$$Interface {
static readonly "MULTIPLAYER": $QuickPlayLog$Type
static readonly "SINGLEPLAYER": $QuickPlayLog$Type
static readonly "REALMS": $QuickPlayLog$Type

public static "values"(): ($QuickPlayLog$Type)[]
public static "valueOf"(arg0: StringJS): $QuickPlayLog$Type
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuickPlayLog$Type$$Type = (("singleplayer") | ("multiplayer") | ("realms"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuickPlayLog$Type$$Original = $QuickPlayLog$Type;}
declare module "net.minecraft.client.quickplay.QuickPlayLog" {
import {$QuickPlayLog$Type$$Type} from "net.minecraft.client.quickplay.QuickPlayLog$Type"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"

export class $QuickPlayLog {
public "log"(arg0: $Minecraft$$Type): void
public static "of"(arg0: StringJS): $QuickPlayLog
public "setWorldData"(arg0: $QuickPlayLog$Type$$Type, arg1: StringJS, arg2: StringJS): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuickPlayLog$$Type = ($QuickPlayLog);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuickPlayLog$$Original = $QuickPlayLog;}
