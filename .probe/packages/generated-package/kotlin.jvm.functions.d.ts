declare module "kotlin.jvm.functions.Function1" {
import {$Function$$Interface} from "kotlin.Function"

export interface $Function1$$Interface<P1, R> extends $Function$$Interface<(R)> {

(arg0: P1): R
}

export class $Function1<P1, R> implements $Function1$$Interface {
 "invoke"(arg0: P1): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function1$$Type<P1, R> = ((arg0: P1) => R);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Function1$$Original<P1, R> = $Function1<(P1), (R)>;}
