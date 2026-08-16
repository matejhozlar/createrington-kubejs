import { $Direction$Axis } from "@package/net/minecraft/core";
import { $DoubleList } from "@package/it/unimi/dsi/fastutil/doubles";
import { $VoxelShape, $DiscreteVoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $BitSet } from "@package/java/util";

declare module "@package/malte0811/ferritecore/mixin/accessors" {
    export class $BitSetDVSAccess {
    }
    export interface $BitSetDVSAccess extends $DiscreteVSAccess {
        getXMin(): number;
        getXMax(): number;
        getZMax(): number;
        getYMin(): number;
        getZMin(): number;
        getStorage(): $BitSet;
        getYMax(): number;
        get XMin(): number;
        get XMax(): number;
        get ZMax(): number;
        get YMin(): number;
        get ZMin(): number;
        get storage(): $BitSet;
        get YMax(): number;
    }
    export class $SliceShapeAccess {
    }
    export interface $SliceShapeAccess extends $VoxelShapeAccess {
        getDelegate(): $VoxelShape;
        getAxis(): $Direction$Axis;
        get delegate(): $VoxelShape;
        get axis(): $Direction$Axis;
    }
    export class $DiscreteVSAccess {
    }
    export interface $DiscreteVSAccess {
        getXSize(): number;
        getYSize(): number;
        getZSize(): number;
        get XSize(): number;
        get YSize(): number;
        get ZSize(): number;
    }
    export class $ArrayVSAccess {
    }
    export interface $ArrayVSAccess extends $VoxelShapeAccess {
        getZPoints(): $DoubleList;
        setYPoints(arg0: $DoubleList): void;
        getYPoints(): $DoubleList;
        setZPoints(arg0: $DoubleList): void;
        getXPoints(): $DoubleList;
        setXPoints(arg0: $DoubleList): void;
    }
    export class $BakedQuadAccess {
    }
    export interface $BakedQuadAccess {
        setVertices(arg0: number[]): void;
        set vertices(value: number[]);
    }
    /**
     * Values that may be interpreted as {@link $BakedQuadAccess}.
     */
    export type $BakedQuadAccess_ = ((arg0: number[]) => void);
    export class $SubShapeAccess {
    }
    export interface $SubShapeAccess extends $DiscreteVSAccess {
        getParent(): $DiscreteVoxelShape;
        getStartY(): number;
        getStartX(): number;
        getEndY(): number;
        getStartZ(): number;
        getEndX(): number;
        getEndZ(): number;
        get parent(): $DiscreteVoxelShape;
        get startY(): number;
        get startX(): number;
        get endY(): number;
        get startZ(): number;
        get endX(): number;
        get endZ(): number;
    }
    export class $VoxelShapeAccess {
    }
    export interface $VoxelShapeAccess {
        getShape(): $DiscreteVoxelShape;
        getFaces(): $VoxelShape[];
        setShape(arg0: $DiscreteVoxelShape): void;
        setFaces(arg0: $VoxelShape[]): void;
    }
}
