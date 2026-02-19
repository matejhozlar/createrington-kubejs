declare module "malte0811.ferritecore.mixin.accessors.DiscreteVSAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DiscreteVSAccess$$Interface {
get "ZSize"(): integer
get "XSize"(): integer
get "YSize"(): integer
}

export class $DiscreteVSAccess implements $DiscreteVSAccess$$Interface {
 "getZSize"(): integer
 "getXSize"(): integer
 "getYSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DiscreteVSAccess$$Type = ($DiscreteVSAccess);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DiscreteVSAccess$$Original = $DiscreteVSAccess;}
declare module "malte0811.ferritecore.mixin.accessors.VoxelShapeAccess" {
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$DiscreteVoxelShape, $DiscreteVoxelShape$$Type} from "net.minecraft.world.phys.shapes.DiscreteVoxelShape"

export interface $VoxelShapeAccess$$Interface {
get "shape"(): $DiscreteVoxelShape
get "faces"(): ($VoxelShape)[]
set "shape"(value: $DiscreteVoxelShape$$Type)
set "faces"(value: ($VoxelShape$$Type)[])
}

export class $VoxelShapeAccess implements $VoxelShapeAccess$$Interface {
 "getShape"(): $DiscreteVoxelShape
 "getFaces"(): ($VoxelShape)[]
 "setShape"(arg0: $DiscreteVoxelShape$$Type): void
 "setFaces"(arg0: ($VoxelShape$$Type)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoxelShapeAccess$$Type = ($VoxelShapeAccess);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VoxelShapeAccess$$Original = $VoxelShapeAccess;}
declare module "malte0811.ferritecore.mixin.accessors.BakedQuadAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BakedQuadAccess$$Interface {

(arg0: (integer)[]): void
set "vertices"(value: (integer)[])
}

export class $BakedQuadAccess implements $BakedQuadAccess$$Interface {
 "setVertices"(arg0: (integer)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakedQuadAccess$$Type = ((arg0: (integer)[]) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BakedQuadAccess$$Original = $BakedQuadAccess;}
