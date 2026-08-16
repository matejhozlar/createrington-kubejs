import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ModelProperties_, $ModelProperties, $FaceUV$Rotation_ } from "@package/software/bernie/geckolib/loading/json/raw";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $BoneSnapshot } from "@package/software/bernie/geckolib/animation/state";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $Matrix4f, $Matrix3f, $Vector3d, $Vector3f } from "@package/org/joml";

declare module "@package/software/bernie/geckolib/cache/object" {
    export class $BakedGeoModel extends $Record {
        properties(): $ModelProperties;
        topLevelBones(): $List<$GeoBone>;
        searchForChildBone(arg0: $GeoBone, arg1: string): $GeoBone;
        getBone(arg0: string): ($GeoBone) | undefined;
        constructor(topLevelBones: $List_<$GeoBone>, properties: $ModelProperties_);
    }
    /**
     * Values that may be interpreted as {@link $BakedGeoModel}.
     */
    export type $BakedGeoModel_ = { properties?: $ModelProperties_, topLevelBones?: $List_<$GeoBone>,  } | [properties?: $ModelProperties_, topLevelBones?: $List_<$GeoBone>, ];
    export class $GeoBone {
        getName(): string;
        isHidden(): boolean;
        getParent(): $GeoBone;
        getChildBones(): $List<$GeoBone>;
        getPosY(): number;
        getPosX(): number;
        getScaleX(): number;
        getScaleY(): number;
        getRotationVector(): $Vector3d;
        updateRotation(arg0: number, arg1: number, arg2: number): void;
        setHidden(arg0: boolean): void;
        getPosZ(): number;
        setPosZ(arg0: number): void;
        getCubes(): $List<$GeoCube>;
        getMirror(): boolean;
        getRotY(): number;
        setRotX(arg0: number): void;
        getRotX(): number;
        setRotY(arg0: number): void;
        getWorldPosition(): $Vector3d;
        setPosY(arg0: number): void;
        setPosX(arg0: number): void;
        updatePosition(arg0: number, arg1: number, arg2: number): void;
        getLocalPosition(): $Vector3d;
        setRotZ(arg0: number): void;
        setScaleY(arg0: number): void;
        setScaleZ(arg0: number): void;
        setScaleX(arg0: number): void;
        getScaleZ(): number;
        getRotZ(): number;
        getReset(): boolean;
        getPivotZ(): number;
        getInflate(): number;
        setPivotZ(arg0: number): void;
        setPivotX(arg0: number): void;
        setPivotY(arg0: number): void;
        getPivotY(): number;
        getPivotX(): number;
        getInitialSnapshot(): $BoneSnapshot;
        updateScale(arg0: number, arg1: number, arg2: number): void;
        hasPositionChanged(): boolean;
        hasRotationChanged(): boolean;
        markScaleAsChanged(): void;
        hasScaleChanged(): boolean;
        saveSnapshot(): $BoneSnapshot;
        resetStateChanges(): void;
        setChildrenHidden(arg0: boolean): void;
        updatePivot(arg0: number, arg1: number, arg2: number): void;
        isHidingChildren(): boolean;
        shouldNeverRender(): boolean;
        isTrackingMatrices(): boolean;
        getModelPosition(): $Vector3d;
        getPositionVector(): $Vector3d;
        setModelPosition(arg0: $Vector3d): void;
        getScaleVector(): $Vector3d;
        markPositionAsChanged(): void;
        markRotationAsChanged(): void;
        getLocalSpaceMatrix(): $Matrix4f;
        setLocalSpaceMatrix(arg0: $Matrix4f): void;
        getModelSpaceMatrix(): $Matrix4f;
        setModelSpaceMatrix(arg0: $Matrix4f): void;
        getModelRotationMatrix(): $Matrix4f;
        saveInitialSnapshot(): void;
        getWorldSpaceNormal(): $Matrix3f;
        setWorldSpaceMatrix(arg0: $Matrix4f): void;
        setTrackingMatrices(arg0: boolean): void;
        getWorldSpaceMatrix(): $Matrix4f;
        setWorldSpaceNormal(arg0: $Matrix3f): void;
        addRotationOffsetFromBone(arg0: $GeoBone): void;
        constructor(arg0: $GeoBone, arg1: string, arg2: boolean, arg3: number, arg4: boolean, arg5: boolean);
        get name(): string;
        get parent(): $GeoBone;
        get childBones(): $List<$GeoBone>;
        get rotationVector(): $Vector3d;
        get cubes(): $List<$GeoCube>;
        get mirror(): boolean;
        get worldPosition(): $Vector3d;
        get localPosition(): $Vector3d;
        get reset(): boolean;
        get inflate(): number;
        get initialSnapshot(): $BoneSnapshot;
        set childrenHidden(value: boolean);
        get hidingChildren(): boolean;
        get positionVector(): $Vector3d;
        get scaleVector(): $Vector3d;
        get modelRotationMatrix(): $Matrix4f;
    }
    export class $GeoQuad extends $Record {
        direction(): $Direction;
        static build(arg0: $GeoVertex_[], arg1: number[], arg2: number[], arg3: $FaceUV$Rotation_, arg4: number, arg5: number, arg6: boolean, arg7: $Direction_): $GeoQuad;
        /**
         * @deprecated
         */
        static build(arg0: $GeoVertex_[], arg1: number[], arg2: number[], arg3: number, arg4: number, arg5: boolean, arg6: $Direction_): $GeoQuad;
        static build(arg0: $GeoVertex_[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: $FaceUV$Rotation_, arg6: number, arg7: number, arg8: boolean, arg9: $Direction_): $GeoQuad;
        /**
         * @deprecated
         */
        static build(arg0: $GeoVertex_[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: $Direction_): $GeoQuad;
        normal(): $Vector3f;
        vertices(): $GeoVertex[];
        constructor(vertices: $GeoVertex_[], normal: $Vector3f, direction: $Direction_);
    }
    /**
     * Values that may be interpreted as {@link $GeoQuad}.
     */
    export type $GeoQuad_ = { direction?: $Direction_, vertices?: $GeoVertex_[], normal?: $Vector3f,  } | [direction?: $Direction_, vertices?: $GeoVertex_[], normal?: $Vector3f, ];
    export class $GeoCube extends $Record {
        size(): $Vec3;
        inflate(): number;
        pivot(): $Vec3;
        mirror(): boolean;
        quads(): $GeoQuad[];
        rotation(): $Vec3;
        constructor(quads: $GeoQuad_[], pivot: $Vec3_, rotation: $Vec3_, size: $Vec3_, inflate: number, mirror: boolean);
    }
    /**
     * Values that may be interpreted as {@link $GeoCube}.
     */
    export type $GeoCube_ = { quads?: $GeoQuad_[], pivot?: $Vec3_, mirror?: boolean, inflate?: number, size?: $Vec3_, rotation?: $Vec3_,  } | [quads?: $GeoQuad_[], pivot?: $Vec3_, mirror?: boolean, inflate?: number, size?: $Vec3_, rotation?: $Vec3_, ];
    export class $GeoVertex extends $Record {
        position(): $Vector3f;
        texU(): number;
        texV(): number;
        withUVs(arg0: number, arg1: number): $GeoVertex;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(position: $Vector3f, texU: number, texV: number);
    }
    /**
     * Values that may be interpreted as {@link $GeoVertex}.
     */
    export type $GeoVertex_ = { position?: $Vector3f, texU?: number, texV?: number,  } | [position?: $Vector3f, texU?: number, texV?: number, ];
}
