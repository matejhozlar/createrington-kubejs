declare module "com.teamresourceful.resourcefulconfig.mixins.common.PlayerListAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PlayerListAccessor$$Interface {

(arg0: integer): void
set "maxPlayers"(value: integer)
}

export class $PlayerListAccessor implements $PlayerListAccessor$$Interface {
 "setMaxPlayers"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerListAccessor$$Type = ((arg0: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerListAccessor$$Original = $PlayerListAccessor;}
