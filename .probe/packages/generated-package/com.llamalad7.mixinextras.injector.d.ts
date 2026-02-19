declare module "com.llamalad7.mixinextras.injector.wrapoperation.Operation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Operation$$Interface<R> {

(...arg0: (any)[]): R
}

export class $Operation<R> implements $Operation$$Interface {
 "call"(...arg0: (any)[]): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Operation$$Type<R> = ((arg0: (any)[]) => R);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Operation$$Original<R> = $Operation<(R)>;}
