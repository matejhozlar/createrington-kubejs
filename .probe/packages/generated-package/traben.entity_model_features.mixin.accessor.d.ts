declare module "traben.entity_model_features.mixin.accessor.MinecraftClientAccessor" {
import {$DeltaTracker$Timer, $DeltaTracker$Timer$$Type} from "net.minecraft.client.DeltaTracker$Timer"

export interface $MinecraftClientAccessor$$Interface {

(): $DeltaTracker$Timer$$Type
get "timer"(): $DeltaTracker$Timer
}

export class $MinecraftClientAccessor implements $MinecraftClientAccessor$$Interface {
 "getTimer"(): $DeltaTracker$Timer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftClientAccessor$$Type = (() => $DeltaTracker$Timer$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinecraftClientAccessor$$Original = $MinecraftClientAccessor;}
declare module "traben.entity_model_features.mixin.accessor.EntityRenderDispatcherAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EntityRenderDispatcherAccessor$$Interface {

(): boolean
get "shouldRenderShadow"(): boolean
}

export class $EntityRenderDispatcherAccessor implements $EntityRenderDispatcherAccessor$$Interface {
 "isShouldRenderShadow"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRenderDispatcherAccessor$$Type = (() => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityRenderDispatcherAccessor$$Original = $EntityRenderDispatcherAccessor;}
declare module "traben.entity_model_features.mixin.accessor.CuboidAccessor" {
import {$ModelPart$Polygon$$Type} from "net.minecraft.client.model.geom.ModelPart$Polygon"

export interface $CuboidAccessor$$Interface {
set "polygons"(value: ($ModelPart$Polygon$$Type)[])
set "minX"(value: float)
set "minZ"(value: float)
set "maxY"(value: float)
set "maxZ"(value: float)
set "maxX"(value: float)
set "minY"(value: float)
}

export class $CuboidAccessor implements $CuboidAccessor$$Interface {
 "setPolygons"(arg0: ($ModelPart$Polygon$$Type)[]): void
 "setMinX"(arg0: float): void
 "setMinZ"(arg0: float): void
 "setMaxY"(arg0: float): void
 "setMaxZ"(arg0: float): void
 "setMaxX"(arg0: float): void
 "setMinY"(arg0: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CuboidAccessor$$Type = ($CuboidAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CuboidAccessor$$Original = $CuboidAccessor;}
