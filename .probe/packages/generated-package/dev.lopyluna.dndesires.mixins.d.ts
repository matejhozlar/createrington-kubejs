declare module "dev.lopyluna.dndesires.mixins.FurnaceBEAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $FurnaceBEAccessor$$Interface {
get "cookingProgress$D2D"(): integer
get "cookingTotalTime$D2D"(): integer
}

export class $FurnaceBEAccessor implements $FurnaceBEAccessor$$Interface {
 "getCookingProgress$D2D"(): integer
 "getCookingTotalTime$D2D"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FurnaceBEAccessor$$Type = ($FurnaceBEAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FurnaceBEAccessor$$Original = $FurnaceBEAccessor;}
declare module "dev.lopyluna.dndesires.mixins.ServerGamePacketListenerImplAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ServerGamePacketListenerImplAccessor$$Interface {

(arg0: integer): void
}

export class $ServerGamePacketListenerImplAccessor implements $ServerGamePacketListenerImplAccessor$$Interface {
 "aboveGroundTickCount"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerGamePacketListenerImplAccessor$$Type = ((arg0: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerGamePacketListenerImplAccessor$$Original = $ServerGamePacketListenerImplAccessor;}
