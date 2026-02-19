declare module "com.illusivesoulworks.comforts.mixin.AccessorPlayer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorPlayer$$Interface {

(arg0: integer): void
set "sleepCounter"(value: integer)
}

export class $AccessorPlayer implements $AccessorPlayer$$Interface {
 "setSleepCounter"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorPlayer$$Type = ((arg0: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorPlayer$$Original = $AccessorPlayer;}
