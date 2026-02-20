declare module "malte0811.ferritecore.ducks.BlockStateCacheAccess" {
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"

export interface $BlockStateCacheAccess$$Interface {
get "collisionShape"(): $VoxelShape
set "collisionShape"(value: $VoxelShape$$Type)
get "faceSturdy"(): (boolean)[]
set "occlusionShapes"(value: ($VoxelShape$$Type)[])
set "faceSturdy"(value: (boolean)[])
get "occlusionShapes"(): ($VoxelShape)[]
}

export class $BlockStateCacheAccess implements $BlockStateCacheAccess$$Interface {
 "getCollisionShape"(): $VoxelShape
 "setCollisionShape"(arg0: $VoxelShape$$Type): void
 "getFaceSturdy"(): (boolean)[]
 "setOcclusionShapes"(arg0: ($VoxelShape$$Type)[]): void
 "setFaceSturdy"(arg0: (boolean)[]): void
 "getOcclusionShapes"(): ($VoxelShape)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateCacheAccess$$Type = ($BlockStateCacheAccess);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockStateCacheAccess$$Original = $BlockStateCacheAccess;}
declare module "malte0811.ferritecore.ducks.FastMapStateHolder" {
import {$Table, $Table$$Type} from "com.google.common.collect.Table"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$Reference2ObjectMap, $Reference2ObjectMap$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ObjectMap"
import {$FastMap, $FastMap$$Type} from "malte0811.ferritecore.fastmap.FastMap"
import {$Property, $Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"

export interface $FastMapStateHolder$$Interface<S> {
get "vanillaPropertyMap"(): $Reference2ObjectMap<($Property<(never)>), ($Comparable<(never)>)>
set "stateMap"(value: $FastMap$$Type<(S)>)
get "stateMap"(): $FastMap<(S)>
set "stateIndex"(value: integer)
set "neighborTable"(value: $Table$$Type<($Property$$Type<(never)>), ($Comparable$$Type<(never)>), (S)>)
get "neighborTable"(): $Table<($Property<(never)>), ($Comparable<(never)>), (S)>
get "stateIndex"(): integer
}

export class $FastMapStateHolder<S> implements $FastMapStateHolder$$Interface {
 "getVanillaPropertyMap"(): $Reference2ObjectMap<($Property<(never)>), ($Comparable<(never)>)>
 "setStateMap"(arg0: $FastMap$$Type<(S)>): void
 "getStateMap"(): $FastMap<(S)>
 "setStateIndex"(arg0: integer): void
 "setNeighborTable"(arg0: $Table$$Type<($Property$$Type<(never)>), ($Comparable$$Type<(never)>), (S)>): void
 "getNeighborTable"(): $Table<($Property<(never)>), ($Comparable<(never)>), (S)>
 "getStateIndex"(): integer
 "replacePropertyMap"(arg0: $Reference2ObjectMap$$Type<($Property$$Type<(never)>), ($Comparable$$Type<(never)>)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FastMapStateHolder$$Type<S> = ($FastMapStateHolder<(S)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FastMapStateHolder$$Original<S> = $FastMapStateHolder<(S)>;}
