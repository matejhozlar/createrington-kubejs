declare module "xaero.map.palette.FastPalette" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $FastPalette<T> {
public "remove"(arg0: integer): void
public "get"(arg0: integer): T
public "append"(arg0: T, arg1: integer): integer
public "replace"(arg0: T, arg1: T): boolean
public "replace"(arg0: integer, arg1: T): boolean
public "add"(arg0: T, arg1: integer): integer
public "add"(arg0: T): integer
public "count"(arg0: integer, arg1: boolean): integer
public "getCount"(arg0: integer): integer
public "getSize"(): integer
public "getIndex"(arg0: T): integer
public "getNonNullCount"(): integer
public "addNull"(): void
get "size"(): integer
get "nonNullCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FastPalette$$Type<T> = ($FastPalette<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FastPalette$$Original<T> = $FastPalette<(T)>;}
