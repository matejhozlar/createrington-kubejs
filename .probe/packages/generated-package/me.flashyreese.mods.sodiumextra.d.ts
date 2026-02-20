declare module "me.flashyreese.mods.sodiumextra.mixin.optimizations.beacon_beam_rendering.LevelRendererAccessor" {
import {$Frustum, $Frustum$$Type} from "net.minecraft.client.renderer.culling.Frustum"

export interface $LevelRendererAccessor$$Interface {

(): $Frustum$$Type
get "cullingFrustum"(): $Frustum
}

export class $LevelRendererAccessor implements $LevelRendererAccessor$$Interface {
 "getCullingFrustum"(): $Frustum
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelRendererAccessor$$Type = (() => $Frustum$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LevelRendererAccessor$$Original = $LevelRendererAccessor;}
declare module "me.flashyreese.mods.sodiumextra.mixin.gui.MinecraftClientAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MinecraftClientAccessor$$Interface {
get "FPS"(): integer
}

export class $MinecraftClientAccessor implements $MinecraftClientAccessor$$Interface {
static "getFPS"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftClientAccessor$$Type = ($MinecraftClientAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinecraftClientAccessor$$Original = $MinecraftClientAccessor;}
