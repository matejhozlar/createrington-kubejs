declare module "dev.engine_room.flywheel.backend.mixin.LevelRendererAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LevelRendererAccessor$$Interface {

(): integer
}

export class $LevelRendererAccessor implements $LevelRendererAccessor$$Interface {
 "flywheel$getTicks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelRendererAccessor$$Type = (() => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LevelRendererAccessor$$Original = $LevelRendererAccessor;}
declare module "dev.engine_room.flywheel.backend.mixin.AbstractClientPlayerAccessor" {
import {$PlayerInfo, $PlayerInfo$$Type} from "net.minecraft.client.multiplayer.PlayerInfo"

export interface $AbstractClientPlayerAccessor$$Interface {

(): $PlayerInfo$$Type
}

export class $AbstractClientPlayerAccessor implements $AbstractClientPlayerAccessor$$Interface {
 "flywheel$getPlayerInfo"(): $PlayerInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractClientPlayerAccessor$$Type = (() => $PlayerInfo$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractClientPlayerAccessor$$Original = $AbstractClientPlayerAccessor;}
