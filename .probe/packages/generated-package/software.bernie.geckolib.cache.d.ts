declare module "software.bernie.geckolib.cache.object.GeoBone" {
import {$List} from "java.util.List"
import {$BoneSnapshot} from "software.bernie.geckolib.animation.state.BoneSnapshot"
import {$GeoCube} from "software.bernie.geckolib.cache.object.GeoCube"
import {$Matrix4f, $Matrix4f$$Type} from "org.joml.Matrix4f"
import {$Matrix3f, $Matrix3f$$Type} from "org.joml.Matrix3f"
import {$Vector3d, $Vector3d$$Type} from "org.joml.Vector3d"

export class $GeoBone {
constructor(arg0: $GeoBone$$Type, arg1: StringJS, arg2: boolean, arg3: double, arg4: boolean, arg5: boolean)

public "getLocalPosition"(): $Vector3d
public "getScaleVector"(): $Vector3d
public "resetStateChanges"(): void
public "getModelPosition"(): $Vector3d
public "hasPositionChanged"(): boolean
public "updateScale"(arg0: float, arg1: float, arg2: float): void
public "getPositionVector"(): $Vector3d
public "hasRotationChanged"(): boolean
public "hasScaleChanged"(): boolean
public "markScaleAsChanged"(): void
public "shouldNeverRender"(): boolean
public "setChildrenHidden"(arg0: boolean): void
public "setModelPosition"(arg0: $Vector3d$$Type): void
public "updatePosition"(arg0: float, arg1: float, arg2: float): void
public "getPivotY"(): float
public "setPosZ"(arg0: float): void
public "setPivotX"(arg0: float): void
public "getReset"(): boolean
public "getPivotZ"(): float
public "setPivotY"(arg0: float): void
public "setPivotZ"(arg0: float): void
public "setRotZ"(arg0: float): void
public "getPivotX"(): float
public "getName"(): StringJS
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isHidden"(): boolean
public "getParent"(): $GeoBone
public "getWorldPosition"(): $Vector3d
public "setRotX"(arg0: float): void
public "setRotY"(arg0: float): void
public "getRotY"(): float
public "getRotX"(): float
public "setHidden"(arg0: boolean): void
public "getPosY"(): float
public "getPosX"(): float
public "setPosY"(arg0: float): void
public "setPosX"(arg0: float): void
public "getRotationVector"(): $Vector3d
public "updatePivot"(arg0: float, arg1: float, arg2: float): void
public "getInflate"(): double
public "getMirror"(): boolean
public "saveSnapshot"(): $BoneSnapshot
public "getScaleX"(): float
public "getRotZ"(): float
public "setScaleY"(arg0: float): void
public "setScaleX"(arg0: float): void
public "getScaleY"(): float
public "setScaleZ"(arg0: float): void
public "getScaleZ"(): float
public "updateRotation"(arg0: float, arg1: float, arg2: float): void
public "getCubes"(): $List<($GeoCube)>
public "getPosZ"(): float
public "setModelSpaceMatrix"(arg0: $Matrix4f$$Type): void
public "setWorldSpaceMatrix"(arg0: $Matrix4f$$Type): void
public "setLocalSpaceMatrix"(arg0: $Matrix4f$$Type): void
public "setTrackingMatrices"(arg0: boolean): void
public "isTrackingMatrices"(): boolean
public "isHidingChildren"(): boolean
public "getChildBones"(): $List<($GeoBone)>
public "getInitialSnapshot"(): $BoneSnapshot
public "markRotationAsChanged"(): void
public "getModelRotationMatrix"(): $Matrix4f
public "addRotationOffsetFromBone"(arg0: $GeoBone$$Type): void
public "getLocalSpaceMatrix"(): $Matrix4f
public "getModelSpaceMatrix"(): $Matrix4f
public "getWorldSpaceMatrix"(): $Matrix4f
public "saveInitialSnapshot"(): void
public "setWorldSpaceNormal"(arg0: $Matrix3f$$Type): void
public "getWorldSpaceNormal"(): $Matrix3f
public "markPositionAsChanged"(): void
get "localPosition"(): $Vector3d
get "scaleVector"(): $Vector3d
get "modelPosition"(): $Vector3d
get "positionVector"(): $Vector3d
set "childrenHidden"(value: boolean)
set "modelPosition"(value: $Vector3d$$Type)
get "pivotY"(): float
set "posZ"(value: float)
set "pivotX"(value: float)
get "reset"(): boolean
get "pivotZ"(): float
set "pivotY"(value: float)
set "pivotZ"(value: float)
set "rotZ"(value: float)
get "pivotX"(): float
get "name"(): StringJS
get "hidden"(): boolean
get "parent"(): $GeoBone
get "worldPosition"(): $Vector3d
set "rotX"(value: float)
set "rotY"(value: float)
get "rotY"(): float
get "rotX"(): float
set "hidden"(value: boolean)
get "posY"(): float
get "posX"(): float
set "posY"(value: float)
set "posX"(value: float)
get "rotationVector"(): $Vector3d
get "inflate"(): double
get "mirror"(): boolean
get "scaleX"(): float
get "rotZ"(): float
set "scaleY"(value: float)
set "scaleX"(value: float)
get "scaleY"(): float
set "scaleZ"(value: float)
get "scaleZ"(): float
get "cubes"(): $List<($GeoCube)>
get "posZ"(): float
set "modelSpaceMatrix"(value: $Matrix4f$$Type)
set "worldSpaceMatrix"(value: $Matrix4f$$Type)
set "localSpaceMatrix"(value: $Matrix4f$$Type)
set "trackingMatrices"(value: boolean)
get "trackingMatrices"(): boolean
get "hidingChildren"(): boolean
get "childBones"(): $List<($GeoBone)>
get "initialSnapshot"(): $BoneSnapshot
get "modelRotationMatrix"(): $Matrix4f
get "localSpaceMatrix"(): $Matrix4f
get "modelSpaceMatrix"(): $Matrix4f
get "worldSpaceMatrix"(): $Matrix4f
set "worldSpaceNormal"(value: $Matrix3f$$Type)
get "worldSpaceNormal"(): $Matrix3f
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoBone$$Type = ($GeoBone);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoBone$$Original = $GeoBone;}
declare module "software.bernie.geckolib.cache.object.GeoVertex" {
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$Record} from "java.lang.Record"

export class $GeoVertex extends $Record {
constructor(arg0: double, arg1: double, arg2: double)
constructor(position: $Vector3f$$Type, texU: float, texV: float)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "position"(): $Vector3f
public "texU"(): float
public "texV"(): float
public "withUVs"(arg0: float, arg1: float): $GeoVertex
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoVertex$$Type = ({"texU"?: float, "position"?: $Vector3f$$Type, "texV"?: float}) | ([texU?: float, position?: $Vector3f$$Type, texV?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoVertex$$Original = $GeoVertex;}
declare module "software.bernie.geckolib.cache.object.GeoCube" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$GeoQuad, $GeoQuad$$Type} from "software.bernie.geckolib.cache.object.GeoQuad"
import {$Record} from "java.lang.Record"

export class $GeoCube extends $Record {
constructor(quads: ($GeoQuad$$Type)[], pivot: $Vec3$$Type, rotation: $Vec3$$Type, size: $Vec3$$Type, inflate: double, mirror: boolean)

public "size"(): $Vec3
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "inflate"(): double
public "pivot"(): $Vec3
public "mirror"(): boolean
public "quads"(): ($GeoQuad)[]
public "rotation"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoCube$$Type = ({"size"?: $Vec3$$Type, "inflate"?: double, "mirror"?: boolean, "pivot"?: $Vec3$$Type, "quads"?: ($GeoQuad$$Type)[], "rotation"?: $Vec3$$Type}) | ([size?: $Vec3$$Type, inflate?: double, mirror?: boolean, pivot?: $Vec3$$Type, quads?: ($GeoQuad$$Type)[], rotation?: $Vec3$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoCube$$Original = $GeoCube;}
declare module "software.bernie.geckolib.cache.object.BakedGeoModel" {
import {$ModelProperties, $ModelProperties$$Type} from "software.bernie.geckolib.loading.json.raw.ModelProperties"
import {$Optional} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$GeoBone, $GeoBone$$Type} from "software.bernie.geckolib.cache.object.GeoBone"
import {$Record} from "java.lang.Record"

export class $BakedGeoModel extends $Record {
constructor(topLevelBones: $List$$Type<($GeoBone$$Type)>, properties: $ModelProperties$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "properties"(): $ModelProperties
public "getBone"(arg0: StringJS): $Optional<($GeoBone)>
public "topLevelBones"(): $List<($GeoBone)>
public "searchForChildBone"(arg0: $GeoBone$$Type, arg1: StringJS): $GeoBone
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakedGeoModel$$Type = ({"topLevelBones"?: $List$$Type<($GeoBone$$Type)>, "properties"?: $ModelProperties$$Type}) | ([topLevelBones?: $List$$Type<($GeoBone$$Type)>, properties?: $ModelProperties$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BakedGeoModel$$Original = $BakedGeoModel;}
declare module "software.bernie.geckolib.cache.object.GeoQuad" {
import {$GeoVertex, $GeoVertex$$Type} from "software.bernie.geckolib.cache.object.GeoVertex"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$FaceUV$Rotation$$Type} from "software.bernie.geckolib.loading.json.raw.FaceUV$Rotation"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$Record} from "java.lang.Record"

export class $GeoQuad extends $Record {
constructor(vertices: ($GeoVertex$$Type)[], normal: $Vector3f$$Type, direction: $Direction$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "direction"(): $Direction
public static "build"(arg0: ($GeoVertex$$Type)[], arg1: (double)[], arg2: (double)[], arg3: $FaceUV$Rotation$$Type, arg4: float, arg5: float, arg6: boolean, arg7: $Direction$$Type): $GeoQuad
/**
 * 
 * @deprecated
 */
public static "build"(arg0: ($GeoVertex$$Type)[], arg1: (double)[], arg2: (double)[], arg3: float, arg4: float, arg5: boolean, arg6: $Direction$$Type): $GeoQuad
public static "build"(arg0: ($GeoVertex$$Type)[], arg1: float, arg2: float, arg3: float, arg4: float, arg5: $FaceUV$Rotation$$Type, arg6: float, arg7: float, arg8: boolean, arg9: $Direction$$Type): $GeoQuad
/**
 * 
 * @deprecated
 */
public static "build"(arg0: ($GeoVertex$$Type)[], arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: boolean, arg8: $Direction$$Type): $GeoQuad
public "normal"(): $Vector3f
public "vertices"(): ($GeoVertex)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoQuad$$Type = ({"vertices"?: ($GeoVertex$$Type)[], "direction"?: $Direction$$Type, "normal"?: $Vector3f$$Type}) | ([vertices?: ($GeoVertex$$Type)[], direction?: $Direction$$Type, normal?: $Vector3f$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoQuad$$Original = $GeoQuad;}
