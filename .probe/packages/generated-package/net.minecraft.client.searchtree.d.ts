declare module "net.minecraft.client.searchtree.SearchTree" {
import {$Function$$Type} from "java.util.function.Function"
import {$List, $List$$Type} from "java.util.List"
import {$Stream$$Type} from "java.util.stream.Stream"

export interface $SearchTree$$Interface<T> {

(arg0: StringJS): $List$$Type<(T)>
}

export class $SearchTree<T> implements $SearchTree$$Interface {
static "empty"<T>(): $SearchTree<(T)>
 "search"(arg0: StringJS): $List<(T)>
static "plainText"<T>(arg0: $List$$Type<(T)>, arg1: $Function$$Type<(T), ($Stream$$Type<(StringJS)>)>): $SearchTree<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SearchTree$$Type<T> = ((arg0: StringJS) => $List$$Type<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SearchTree$$Original<T> = $SearchTree<(T)>;}
