declare module "team.creative.creativecore.mixin.VoxelShapeAccessor" {
import {$DiscreteVoxelShape, $DiscreteVoxelShape$$Type} from "net.minecraft.world.phys.shapes.DiscreteVoxelShape"

export interface $VoxelShapeAccessor$$Interface {

(arg0: $DiscreteVoxelShape): void
set "shape"(value: $DiscreteVoxelShape$$Type)
}

export class $VoxelShapeAccessor implements $VoxelShapeAccessor$$Interface {
 "setShape"(arg0: $DiscreteVoxelShape$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoxelShapeAccessor$$Type = ((arg0: $DiscreteVoxelShape) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VoxelShapeAccessor$$Original = $VoxelShapeAccessor;}
declare module "team.creative.creativecore.mixin.StringSplitterAccessor" {
import {$StringSplitter$WidthProvider, $StringSplitter$WidthProvider$$Type} from "net.minecraft.client.StringSplitter$WidthProvider"

export interface $StringSplitterAccessor$$Interface {

(): $StringSplitter$WidthProvider$$Type
get "widthProvider"(): $StringSplitter$WidthProvider
}

export class $StringSplitterAccessor implements $StringSplitterAccessor$$Interface {
 "getWidthProvider"(): $StringSplitter$WidthProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringSplitterAccessor$$Type = (() => $StringSplitter$WidthProvider$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StringSplitterAccessor$$Original = $StringSplitterAccessor;}
declare module "team.creative.creativecore.mixin.MouseHandlerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MouseHandlerAccessor$$Interface {

(): double
get "lastHandleMovementTime"(): double
}

export class $MouseHandlerAccessor implements $MouseHandlerAccessor$$Interface {
 "getLastHandleMovementTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseHandlerAccessor$$Type = (() => double);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MouseHandlerAccessor$$Original = $MouseHandlerAccessor;}
declare module "team.creative.creativecore.mixin.VanillaPackResourcesAccessor" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$PackType, $PackType$$Type} from "net.minecraft.server.packs.PackType"
import {$List, $List$$Type} from "java.util.List"
import {$Path, $Path$$Type} from "java.nio.file.Path"

export interface $VanillaPackResourcesAccessor$$Interface {

(): $Map$$Type<($PackType$$Type), ($List$$Type<($Path$$Type)>)>
get "pathsForType"(): $Map<($PackType), ($List<($Path)>)>
}

export class $VanillaPackResourcesAccessor implements $VanillaPackResourcesAccessor$$Interface {
 "getPathsForType"(): $Map<($PackType), ($List<($Path)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VanillaPackResourcesAccessor$$Type = (() => $Map$$Type<($PackType$$Type), ($List$$Type<($Path$$Type)>)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VanillaPackResourcesAccessor$$Original = $VanillaPackResourcesAccessor;}
