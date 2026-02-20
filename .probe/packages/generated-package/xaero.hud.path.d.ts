declare module "xaero.hud.path.XaeroPath" {
import {$Path, $Path$$Type} from "java.nio.file.Path"

export class $XaeroPath {
public "getAtIndex"(arg0: integer): $XaeroPath
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "resolve"(arg0: $XaeroPath$$Type): $XaeroPath
public "resolve"(arg0: StringJS): $XaeroPath
public "getParent"(): $XaeroPath
public static "root"(arg0: StringJS, arg1: boolean): $XaeroPath
public static "root"(arg0: StringJS): $XaeroPath
public "getRoot"(): $XaeroPath
public "resolveSibling"(arg0: StringJS): $XaeroPath
public "getSubPath"(arg0: integer): $XaeroPath
public "getNodeCount"(): integer
public "getLastNode"(): StringJS
public "isSubOf"(arg0: $XaeroPath$$Type): boolean
public "applyToFilePath"(arg0: $Path$$Type): $Path
get "parent"(): $XaeroPath
get "nodeCount"(): integer
get "lastNode"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $XaeroPath$$Type = ($XaeroPath);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $XaeroPath$$Original = $XaeroPath;}
