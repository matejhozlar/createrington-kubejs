declare module "com.google.gson.internal.Excluder" {
import {$ExclusionStrategy$$Type} from "com.google.gson.ExclusionStrategy"
import {$Cloneable$$Interface} from "java.lang.Cloneable"
import {$Class$$Type} from "java.lang.Class"
import {$TypeAdapterFactory$$Interface} from "com.google.gson.TypeAdapterFactory"
import {$Gson$$Type} from "com.google.gson.Gson"
import {$Field$$Type} from "java.lang.reflect.Field"
import {$TypeAdapter} from "com.google.gson.TypeAdapter"
import {$TypeToken$$Type} from "com.google.gson.reflect.TypeToken"

export class $Excluder implements $TypeAdapterFactory$$Interface, $Cloneable$$Interface {
static readonly "DEFAULT": $Excluder

constructor()

public "create"<T>(arg0: $Gson$$Type, arg1: $TypeToken$$Type<(T)>): $TypeAdapter<(T)>
public "withExclusionStrategy"(arg0: $ExclusionStrategy$$Type, arg1: boolean, arg2: boolean): $Excluder
public "excludeClass"(arg0: $Class$$Type<(never)>, arg1: boolean): boolean
public "excludeField"(arg0: $Field$$Type, arg1: boolean): boolean
public "excludeFieldsWithoutExposeAnnotation"(): $Excluder
public "disableInnerClassSerialization"(): $Excluder
public "withVersion"(arg0: double): $Excluder
public "withModifiers"(...arg0: (integer)[]): $Excluder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Excluder$$Type = ($Excluder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Excluder$$Original = $Excluder;}
