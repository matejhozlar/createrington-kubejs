declare module "com.google.common.hash.HashCode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $HashCode {
public "equals"(object: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "bits"(): integer
public static "fromString"(string: StringJS): $HashCode
public "asInt"(): integer
public "writeBytesTo"(dest: (byte)[], offset: integer, maxLength: integer): integer
public "asBytes"(): (byte)[]
public "padToLong"(): long
public static "fromBytes"(bytes: (byte)[]): $HashCode
public static "fromInt"(hash: integer): $HashCode
public "asLong"(): long
public static "fromLong"(hash: long): $HashCode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HashCode$$Type = ($HashCode);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HashCode$$Original = $HashCode;}
