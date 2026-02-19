declare module "com.copycatsplus.copycats.mixin.copycat.VoxelShapeAccessor" {
import {$Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$DoubleList} from "it.unimi.dsi.fastutil.doubles.DoubleList"
import {$DiscreteVoxelShape, $DiscreteVoxelShape$$Type} from "net.minecraft.world.phys.shapes.DiscreteVoxelShape"

export interface $VoxelShapeAccessor$$Interface {
}

export class $VoxelShapeAccessor implements $VoxelShapeAccessor$$Interface {
 "copycats$callGetCoords"(arg0: $Direction$Axis$$Type): $DoubleList
 "copycats$setShape"(arg0: $DiscreteVoxelShape$$Type): void
 "copycats$getShape"(): $DiscreteVoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoxelShapeAccessor$$Type = ($VoxelShapeAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VoxelShapeAccessor$$Original = $VoxelShapeAccessor;}
declare module "com.copycatsplus.copycats.mixin.foundation.copycat.ChunkAccessAccessor" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $ChunkAccessAccessor$$Interface {

(): $Map$$Type<($BlockPos$$Type), ($BlockEntity$$Type)>
get "blockEntities"(): $Map<($BlockPos), ($BlockEntity)>
}

export class $ChunkAccessAccessor implements $ChunkAccessAccessor$$Interface {
 "getBlockEntities"(): $Map<($BlockPos), ($BlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkAccessAccessor$$Type = (() => $Map$$Type<($BlockPos$$Type), ($BlockEntity$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkAccessAccessor$$Original = $ChunkAccessAccessor;}
declare module "com.copycatsplus.copycats.mixin.foundation.copycat.BlockEntityAccessor" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"

export interface $BlockEntityAccessor$$Interface {

(arg0: $CompoundTag): void
}

export class $BlockEntityAccessor implements $BlockEntityAccessor$$Interface {
 "callSaveMetadata"(arg0: $CompoundTag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityAccessor$$Type = ((arg0: $CompoundTag) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEntityAccessor$$Original = $BlockEntityAccessor;}
