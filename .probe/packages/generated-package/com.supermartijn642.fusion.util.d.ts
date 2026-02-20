declare module "com.supermartijn642.fusion.util.Triple" {
import {$Record} from "java.lang.Record"

export class $Triple<X, Y, Z> extends $Record {
constructor(left: X, middle: Y, right: Z)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"<X, Y, Z>(left: X, middle: Y, right: Z): $Triple<(X), (Y), (Z)>
public "left"(): X
public "right"(): Z
public "middle"(): Y
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Triple$$Type<X, Y, Z> = ({"left"?: X, "middle"?: Y, "right"?: Z}) | ([left?: X, middle?: Y, right?: Z]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Triple$$Original<X, Y, Z> = $Triple<(X), (Y), (Z)>;}
