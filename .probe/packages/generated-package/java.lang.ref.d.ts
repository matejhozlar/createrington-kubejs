declare module "java.lang.ref.WeakReference" {
import {$ReferenceQueue$$Type} from "java.lang.ref.ReferenceQueue"
import {$Reference} from "java.lang.ref.Reference"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $WeakReference<T> extends $Reference<(T)> {
constructor(arg0: T)
constructor(arg0: T, arg1: $ReferenceQueue$$Type<(T)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeakReference$$Type<T> = ($WeakReference<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WeakReference$$Original<T> = $WeakReference<(T)>;}
declare module "java.lang.ref.ReferenceQueue" {
import {$Reference} from "java.lang.ref.Reference"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ReferenceQueue<T> {
constructor()

public "remove"(): $Reference<(T)>
public "remove"(arg0: long): $Reference<(T)>
public "poll"(): $Reference<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReferenceQueue$$Type<T> = ($ReferenceQueue<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReferenceQueue$$Original<T> = $ReferenceQueue<(T)>;}
declare module "java.lang.ref.Reference" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Reference<T> {
public "get"(): T
public "clear"(): void
public static "reachabilityFence"(arg0: any): void
public "enqueue"(): boolean
public "refersTo"(arg0: T): boolean
/**
 * 
 * @deprecated
 */
public "isEnqueued"(): boolean
get "enqueued"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Reference$$Type<T> = ($Reference<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Reference$$Original<T> = $Reference<(T)>;}
