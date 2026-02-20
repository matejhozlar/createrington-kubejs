declare module "dev.isxander.yacl3.mixin.OptionInstanceAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $OptionInstanceAccessor$$Interface<T> {

(): T
get "initialValue"(): T
}

export class $OptionInstanceAccessor<T> implements $OptionInstanceAccessor$$Interface {
 "getInitialValue"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionInstanceAccessor$$Type<T> = (() => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OptionInstanceAccessor$$Original<T> = $OptionInstanceAccessor<(T)>;}
