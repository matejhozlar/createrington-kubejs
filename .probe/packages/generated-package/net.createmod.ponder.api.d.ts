declare module "net.createmod.ponder.api.VirtualBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $VirtualBlockEntity$$Interface {
get "virtual"(): boolean
}

export class $VirtualBlockEntity implements $VirtualBlockEntity$$Interface {
 "isVirtual"(): boolean
 "markVirtual"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VirtualBlockEntity$$Type = ($VirtualBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VirtualBlockEntity$$Original = $VirtualBlockEntity;}
