declare module "net.minecraft.world.phys.EntityHitResult" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$HitResult$Type} from "net.minecraft.world.phys.HitResult$Type"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$HitResult} from "net.minecraft.world.phys.HitResult"

export class $EntityHitResult extends $HitResult {
readonly "location": $Vec3

constructor(arg0: $Entity$$Type)
constructor(arg0: $Entity$$Type, arg1: $Vec3$$Type)

public "getType"(): $HitResult$Type
public "getEntity"(): $Entity
get "type"(): $HitResult$Type
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityHitResult$$Type = ($EntityHitResult);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityHitResult$$Original = $EntityHitResult;}
declare module "net.minecraft.world.phys.HitResult" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$HitResult$Type} from "net.minecraft.world.phys.HitResult$Type"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $HitResult {
readonly "location": $Vec3

constructor(arg0: $Vec3$$Type)

public "getLocation"(): $Vec3
public "getType"(): $HitResult$Type
public "distanceTo"(arg0: $Entity$$Type): double
get "type"(): $HitResult$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HitResult$$Type = ($HitResult);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HitResult$$Original = $HitResult;}
declare module "net.minecraft.world.phys.shapes.DiscreteVoxelShape" {
import {$Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$AxisCycle$$Type} from "net.minecraft.core.AxisCycle"
import {$DiscreteVSAccess$$Interface} from "malte0811.ferritecore.mixin.accessors.DiscreteVSAccess"
import {$DiscreteVoxelShape$IntFaceConsumer$$Type} from "net.minecraft.world.phys.shapes.DiscreteVoxelShape$IntFaceConsumer"
import {$DiscreteVoxelShape$IntLineConsumer$$Type} from "net.minecraft.world.phys.shapes.DiscreteVoxelShape$IntLineConsumer"

export class $DiscreteVoxelShape implements $DiscreteVSAccess$$Interface {
readonly "zSize": integer
readonly "ySize": integer
readonly "xSize": integer

constructor(arg0: integer, arg1: integer, arg2: integer)

public "isEmpty"(): boolean
public "fill"(arg0: integer, arg1: integer, arg2: integer): void
public "getSize"(arg0: $Direction$Axis$$Type): integer
public "getYSize"(): integer
public "getXSize"(): integer
public "isFull"(arg0: integer, arg1: integer, arg2: integer): boolean
public "isFull"(arg0: $AxisCycle$$Type, arg1: integer, arg2: integer, arg3: integer): boolean
public "getZSize"(): integer
public "forAllFaces"(arg0: $DiscreteVoxelShape$IntFaceConsumer$$Type): void
public "forAllBoxes"(arg0: $DiscreteVoxelShape$IntLineConsumer$$Type, arg1: boolean): void
public "forAllEdges"(arg0: $DiscreteVoxelShape$IntLineConsumer$$Type, arg1: boolean): void
public "lastFull"(arg0: $Direction$Axis$$Type, arg1: integer, arg2: integer): integer
public "lastFull"(arg0: $Direction$Axis$$Type): integer
public "firstFull"(arg0: $Direction$Axis$$Type, arg1: integer, arg2: integer): integer
public "firstFull"(arg0: $Direction$Axis$$Type): integer
public "isFullWide"(arg0: $AxisCycle$$Type, arg1: integer, arg2: integer, arg3: integer): boolean
public "isFullWide"(arg0: integer, arg1: integer, arg2: integer): boolean
get "empty"(): boolean
get "YSize"(): integer
get "XSize"(): integer
get "ZSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DiscreteVoxelShape$$Type = ($DiscreteVoxelShape);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DiscreteVoxelShape$$Original = $DiscreteVoxelShape;}
declare module "net.minecraft.world.phys.shapes.VoxelShape" {
import {$BlockHitResult} from "net.minecraft.world.phys.BlockHitResult"
import {$Shapes$DoubleLineConsumer$$Type} from "net.minecraft.world.phys.shapes.Shapes$DoubleLineConsumer"
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$OffsetVoxelShapeCache$$Interface} from "net.caffeinemc.mods.lithium.common.shapes.OffsetVoxelShapeCache"
import {$DoubleList} from "it.unimi.dsi.fastutil.doubles.DoubleList"
import {$VoxelShapeAccess$$Interface} from "malte0811.ferritecore.mixin.accessors.VoxelShapeAccess"
import {$VoxelShapeAccessor$$Interface as $VoxelShapeAccessor$0$$Interface} from "team.creative.creativecore.mixin.VoxelShapeAccessor"
import {$AxisCycle$$Type} from "net.minecraft.core.AxisCycle"
import {$Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$DiscreteVoxelShape, $DiscreteVoxelShape$$Type} from "net.minecraft.world.phys.shapes.DiscreteVoxelShape"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$VoxelShapeAccessor$$Interface} from "com.copycatsplus.copycats.mixin.copycat.VoxelShapeAccessor"

export class $VoxelShape implements $OffsetVoxelShapeCache$$Interface, $VoxelShapeAccessor$$Interface, $VoxelShapeAccessor$0$$Interface, $VoxelShapeAccess$$Interface {
 "shape": $DiscreteVoxelShape

constructor(arg0: $DiscreteVoxelShape$$Type)

public "get"(arg0: $Direction$Axis$$Type, arg1: integer): double
public "toString"(): StringJS
public "min"(arg0: $Direction$Axis$$Type): double
public "min"(arg0: $Direction$Axis$$Type, arg1: double, arg2: double): double
public "max"(arg0: $Direction$Axis$$Type, arg1: double, arg2: double): double
public "max"(arg0: $Direction$Axis$$Type): double
public "isEmpty"(): boolean
public "bounds"(): $AABB
public "optimize"(): $VoxelShape
public "collide"(arg0: $Direction$Axis$$Type, arg1: $AABB$$Type, arg2: double): double
public "move"(arg0: double, arg1: double, arg2: double): $VoxelShape
public "getShape"(): $DiscreteVoxelShape
public "copycats$callGetCoords"(arg0: $Direction$Axis$$Type): $DoubleList
public "clip"(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: $BlockPos$$Type): $BlockHitResult
public "getCoords"(arg0: $Direction$Axis$$Type): $DoubleList
public "lithium$setShape"(arg0: float, arg1: $Direction$$Type, arg2: $VoxelShape$$Type): void
public "copycats$getShape"(): $DiscreteVoxelShape
public "forAllBoxes"(arg0: $Shapes$DoubleLineConsumer$$Type): void
public "singleEncompassing"(): $VoxelShape
public "forAllEdges"(arg0: $Shapes$DoubleLineConsumer$$Type): void
public "copycats$setShape"(arg0: $DiscreteVoxelShape$$Type): void
public "toAabbs"(): $List<($AABB)>
public "closestPointTo"(arg0: $Vec3$$Type): $Optional<($Vec3)>
public "getFaceShape"(arg0: $Direction$$Type): $VoxelShape
public "setShape"(arg0: $DiscreteVoxelShape$$Type): void
public "getFaces"(): ($VoxelShape)[]
public "setFaces"(arg0: ($VoxelShape$$Type)[]): void
public "collideX"(arg0: $AxisCycle$$Type, arg1: $AABB$$Type, arg2: double): double
public "findIndex"(arg0: $Direction$Axis$$Type, arg1: double): integer
public "lithium$getOffsetSimplifiedShape"(arg0: float, arg1: $Direction$$Type): $VoxelShape
get "empty"(): boolean
get "faces"(): ($VoxelShape)[]
set "faces"(value: ($VoxelShape$$Type)[])
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoxelShape$$Type = ($VoxelShape);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VoxelShape$$Original = $VoxelShape;}
declare module "net.minecraft.world.phys.shapes.CollisionContext" {
import {$VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export interface $CollisionContext$$Interface {
get "descending"(): boolean
}

export class $CollisionContext implements $CollisionContext$$Interface {
static "of"(arg0: $Entity$$Type): $CollisionContext
static "empty"(): $CollisionContext
 "isHoldingItem"(arg0: $Item$$Type): boolean
 "isDescending"(): boolean
 "isAbove"(arg0: $VoxelShape$$Type, arg1: $BlockPos$$Type, arg2: boolean): boolean
 "canStandOnFluid"(arg0: $FluidState$$Type, arg1: $FluidState$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CollisionContext$$Type = ($CollisionContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CollisionContext$$Original = $CollisionContext;}
declare module "net.minecraft.world.phys.BlockHitResult" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$HitResult$Type} from "net.minecraft.world.phys.HitResult$Type"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$HitResult} from "net.minecraft.world.phys.HitResult"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $BlockHitResult extends $HitResult {
readonly "location": $Vec3

constructor(arg0: boolean, arg1: $Vec3$$Type, arg2: $Direction$$Type, arg3: $BlockPos$$Type, arg4: boolean)
constructor(arg0: $Vec3$$Type, arg1: $Direction$$Type, arg2: $BlockPos$$Type, arg3: boolean)

public "getType"(): $HitResult$Type
public "withPosition"(arg0: $BlockPos$$Type): $BlockHitResult
public static "miss"(arg0: $Vec3$$Type, arg1: $Direction$$Type, arg2: $BlockPos$$Type): $BlockHitResult
public "getBlockPos"(): $BlockPos
public "withDirection"(arg0: $Direction$$Type): $BlockHitResult
public "isInside"(): boolean
public "getDirection"(): $Direction
get "type"(): $HitResult$Type
get "blockPos"(): $BlockPos
get "inside"(): boolean
get "direction"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHitResult$$Type = ($BlockHitResult);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockHitResult$$Original = $BlockHitResult;}
declare module "net.minecraft.world.phys.shapes.DiscreteVoxelShape$IntFaceConsumer" {
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"

export interface $DiscreteVoxelShape$IntFaceConsumer$$Interface {

(arg0: $Direction, arg1: integer, arg2: integer, arg3: integer): void
}

export class $DiscreteVoxelShape$IntFaceConsumer implements $DiscreteVoxelShape$IntFaceConsumer$$Interface {
 "consume"(arg0: $Direction$$Type, arg1: integer, arg2: integer, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DiscreteVoxelShape$IntFaceConsumer$$Type = ((arg0: $Direction, arg1: integer, arg2: integer, arg3: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DiscreteVoxelShape$IntFaceConsumer$$Original = $DiscreteVoxelShape$IntFaceConsumer;}
declare module "net.minecraft.world.phys.shapes.DiscreteVoxelShape$IntLineConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DiscreteVoxelShape$IntLineConsumer$$Interface {

(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
}

export class $DiscreteVoxelShape$IntLineConsumer implements $DiscreteVoxelShape$IntLineConsumer$$Interface {
 "consume"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DiscreteVoxelShape$IntLineConsumer$$Type = ((arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DiscreteVoxelShape$IntLineConsumer$$Original = $DiscreteVoxelShape$IntLineConsumer;}
declare module "net.minecraft.world.phys.AABB" {
import {$Iterable$$Type} from "java.lang.Iterable"
import {$Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$BlockHitResult} from "net.minecraft.world.phys.BlockHitResult"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$BoundingBox$$Type} from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import {$Optional} from "java.util.Optional"
import {$Vector3f$$Type} from "org.joml.Vector3f"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $AABB {
readonly "minY": double
readonly "minX": double
readonly "maxZ": double
readonly "maxY": double
readonly "maxX": double
static readonly "$assertionsDisabled": boolean
readonly "minZ": double
static readonly "INFINITE": $AABB

constructor(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double)
constructor(arg0: $BlockPos$$Type)
constructor(arg0: $Vec3$$Type, arg1: $Vec3$$Type)

public "deflate"(arg0: double): $AABB
public "deflate"(arg0: double, arg1: double, arg2: double): $AABB
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "min"(arg0: $Direction$Axis$$Type): double
public "max"(arg0: $Direction$Axis$$Type): double
public "isInfinite"(): boolean
public "inflate"(arg0: double, arg1: double, arg2: double): $AABB
public "inflate"(arg0: double): $AABB
public static "of"(arg0: $BoundingBox$$Type): $AABB
public "contains"(arg0: $Vec3$$Type): boolean
public "contains"(arg0: double, arg1: double, arg2: double): boolean
public "getSize"(): double
public "move"(arg0: $Vec3$$Type): $AABB
public "move"(arg0: $BlockPos$$Type): $AABB
public "move"(arg0: $Vector3f$$Type): $AABB
public "move"(arg0: double, arg1: double, arg2: double): $AABB
public "intersects"(arg0: $Vec3$$Type, arg1: $Vec3$$Type): boolean
public "intersects"(arg0: $AABB$$Type): boolean
public "intersects"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): boolean
public "hasNaN"(): boolean
public static "encapsulatingFullBlocks"(arg0: $BlockPos$$Type, arg1: $BlockPos$$Type): $AABB
public "getBottomCenter"(): $Vec3
public "setMinX"(arg0: double): $AABB
public "setMinZ"(arg0: double): $AABB
public "contract"(arg0: double, arg1: double, arg2: double): $AABB
public "setMaxY"(arg0: double): $AABB
public "setMaxZ"(arg0: double): $AABB
public "setMaxX"(arg0: double): $AABB
public "intersect"(arg0: $AABB$$Type): $AABB
public static "unitCubeFromLowerCorner"(arg0: $Vec3$$Type): $AABB
public static "clip"(arg0: $Iterable$$Type<($AABB$$Type)>, arg1: $Vec3$$Type, arg2: $Vec3$$Type, arg3: $BlockPos$$Type): $BlockHitResult
public "clip"(arg0: $Vec3$$Type, arg1: $Vec3$$Type): $Optional<($Vec3)>
public "getCenter"(): $Vec3
public static "ofSize"(arg0: $Vec3$$Type, arg1: double, arg2: double, arg3: double): $AABB
public "getXsize"(): double
public "getZsize"(): double
public "getYsize"(): double
public "minmax"(arg0: $AABB$$Type): $AABB
public "setMinY"(arg0: double): $AABB
public "distanceToSqr"(arg0: $Vec3$$Type): double
public "expandTowards"(arg0: $Vec3$$Type): $AABB
public "expandTowards"(arg0: double, arg1: double, arg2: double): $AABB
public "getMinPosition"(): $Vec3
public "getMaxPosition"(): $Vec3
get "infinite"(): boolean
get "size"(): double
get "bottomCenter"(): $Vec3
get "center"(): $Vec3
get "xsize"(): double
get "zsize"(): double
get "ysize"(): double
get "minPosition"(): $Vec3
get "maxPosition"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AABB$$Type = ([]) | ([x: double, y: double, z: double]) | ([x1: double, y1: double, z1: double, x2: double, y2: double, z2: double]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AABB$$Original = $AABB;}
declare module "net.minecraft.world.phys.shapes.Shapes$DoubleLineConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Shapes$DoubleLineConsumer$$Interface {

(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): void
}

export class $Shapes$DoubleLineConsumer implements $Shapes$DoubleLineConsumer$$Interface {
 "consume"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Shapes$DoubleLineConsumer$$Type = ((arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Shapes$DoubleLineConsumer$$Original = $Shapes$DoubleLineConsumer;}
declare module "net.minecraft.world.phys.Vec2" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Vec2 {
static readonly "ZERO": $Vec2
static readonly "NEG_UNIT_Y": $Vec2
static readonly "NEG_UNIT_X": $Vec2
static readonly "MIN": $Vec2
static readonly "UNIT_X": $Vec2
static readonly "MAX": $Vec2
static readonly "ONE": $Vec2
static readonly "UNIT_Y": $Vec2
readonly "x": float
readonly "y": float

constructor(arg0: float, arg1: float)

public "equals"(arg0: $Vec2$$Type): boolean
public "length"(): float
public "scale"(arg0: float): $Vec2
public "add"(arg0: float): $Vec2
public "add"(arg0: $Vec2$$Type): $Vec2
public "dot"(arg0: $Vec2$$Type): float
public "normalized"(): $Vec2
public "negated"(): $Vec2
public "lengthSquared"(): float
public "distanceToSqr"(arg0: $Vec2$$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vec2$$Type = ($Vec2);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Vec2$$Original = $Vec2;}
declare module "net.minecraft.world.phys.Vec3" {
import {$Vec2$$Type} from "net.minecraft.world.phys.Vec2"
import {$Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$Position$$Type, $Position$$Interface} from "net.minecraft.core.Position"
import {$EnumSet$$Type} from "java.util.EnumSet"

export class $Vec3 implements $Position$$Interface {
static readonly "ZERO": $Vec3
static readonly "CODEC": $Codec<($Vec3)>

constructor(arg0: double, arg1: double, arg2: double)
constructor(arg0: $Vector3f$$Type)

public "get"(arg0: $Direction$Axis$$Type): double
public "equals"(arg0: any): boolean
public "length"(): double
public "toString"(): StringJS
public "hashCode"(): integer
public "reverse"(): $Vec3
public "scale"(arg0: double): $Vec3
public "add"(arg0: double, arg1: double, arg2: double): $Vec3
public "add"(arg0: $Vec3$$Type): $Vec3
public "x"(): double
public "dot"(arg0: $Vec3$$Type): double
public "with"(arg0: $Direction$Axis$$Type, arg1: double): $Vec3
public "z"(): double
public "y"(): double
public "multiply"(arg0: $Vec3$$Type): $Vec3
public "multiply"(arg0: double, arg1: double, arg2: double): $Vec3
public "normalize"(): $Vec3
public "subtract"(arg0: double, arg1: double, arg2: double): $Vec3
public "subtract"(arg0: $Vec3$$Type): $Vec3
public "relative"(arg0: $Direction$$Type, arg1: double): $Vec3
public "toVector3f"(): $Vector3f
public "offsetRandom"(arg0: $RandomSource$$Type, arg1: float): $Vec3
public static "atLowerCornerOf"(arg0: $Vec3i$$Type): $Vec3
public "horizontalDistanceSqr"(): double
public static "directionFromRotation"(arg0: $Vec2$$Type): $Vec3
public static "directionFromRotation"(arg0: float, arg1: float): $Vec3
public "align"(arg0: $EnumSet$$Type<($Direction$Axis$$Type)>): $Vec3
public "xRot"(arg0: float): $Vec3
public "distanceTo"(arg0: $Vec3$$Type): double
public "yRot"(arg0: float): $Vec3
public "closerThan"(arg0: $Vec3$$Type, arg1: double, arg2: double): boolean
public "closerThan"(arg0: $Position$$Type, arg1: double): boolean
public "lengthSqr"(): double
public static "upFromBottomCenterOf"(arg0: $Vec3i$$Type, arg1: double): $Vec3
public static "atLowerCornerWithOffset"(arg0: $Vec3i$$Type, arg1: double, arg2: double, arg3: double): $Vec3
public static "fromRGB24"(arg0: integer): $Vec3
public static "atCenterOf"(arg0: $Vec3i$$Type): $Vec3
public "cross"(arg0: $Vec3$$Type): $Vec3
public "lerp"(arg0: $Vec3$$Type, arg1: double): $Vec3
public "zRot"(arg0: float): $Vec3
public "vectorTo"(arg0: $Vec3$$Type): $Vec3
public "distanceToSqr"(arg0: $Vec3$$Type): double
public "distanceToSqr"(arg0: double, arg1: double, arg2: double): double
public "horizontalDistance"(): double
public static "atBottomCenterOf"(arg0: $Vec3i$$Type): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vec3$$Type = ([x: double, y: double, z: double]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Vec3$$Original = $Vec3;}
declare module "net.minecraft.world.phys.HitResult$Type" {
import {$Enum} from "java.lang.Enum"

export class $HitResult$Type extends $Enum<($HitResult$Type)> {
static readonly "ENTITY": $HitResult$Type
static readonly "MISS": $HitResult$Type
static readonly "BLOCK": $HitResult$Type

public static "values"(): ($HitResult$Type)[]
public static "valueOf"(arg0: StringJS): $HitResult$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HitResult$Type$$Type = (("miss") | ("block") | ("entity"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HitResult$Type$$Original = $HitResult$Type;}
