declare module "com.google.gson.reflect.TypeToken" {
import {$Type, $Type$$Type} from "java.lang.reflect.Type"
import {$Class, $Class$$Type} from "java.lang.Class"

export class $TypeToken<T> {
public static "get"(arg0: $Type$$Type): $TypeToken<(never)>
public static "get"<T>(arg0: $Class$$Type<(T)>): $TypeToken<(T)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
/**
 * 
 * @deprecated
 */
public "isAssignableFrom"(arg0: $TypeToken$$Type<(never)>): boolean
/**
 * 
 * @deprecated
 */
public "isAssignableFrom"(arg0: $Type$$Type): boolean
/**
 * 
 * @deprecated
 */
public "isAssignableFrom"(arg0: $Class$$Type<(never)>): boolean
public "getType"(): $Type
public "getRawType"(): $Class<(T)>
public static "getArray"(arg0: $Type$$Type): $TypeToken<(never)>
public static "getParameterized"(arg0: $Type$$Type, ...arg1: ($Type$$Type)[]): $TypeToken<(never)>
get "type"(): $Type
get "rawType"(): $Class<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeToken$$Type<T> = ($TypeToken<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TypeToken$$Original<T> = $TypeToken<(T)>;}
