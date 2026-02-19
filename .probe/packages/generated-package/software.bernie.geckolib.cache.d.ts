declare module "software.bernie.geckolib.cache.object.BakedGeoModel" {
import {$ModelProperties, $ModelProperties$$Type} from "software.bernie.geckolib.loading.json.raw.ModelProperties"
import {$Optional} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$GeoBone, $GeoBone$$Type} from "software.bernie.geckolib.cache.object.GeoBone"
import {$Record} from "java.lang.Record"

export class $BakedGeoModel extends $Record {
constructor(topLevelBones: $List$$Type<($GeoBone$$Type)>, properties: $ModelProperties$$Type)

public "searchForChildBone"(arg0: $GeoBone$$Type, arg1: StringJS): $GeoBone
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "properties"(): $ModelProperties
public "getBone"(arg0: StringJS): $Optional<($GeoBone)>
public "topLevelBones"(): $List<($GeoBone)>
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
declare module "software.bernie.geckolib.cache.object.GeoBone" {
import {$List} from "java.util.List"
import {$BoneSnapshot} from "software.bernie.geckolib.animation.state.BoneSnapshot"
import {$GeoCube} from "software.bernie.geckolib.cache.object.GeoCube"
import {$Matrix4f, $Matrix4f$$Type} from "org.joml.Matrix4f"
import {$Matrix3f, $Matrix3f$$Type} from "org.joml.Matrix3f"
import {$Vector3d, $Vector3d$$Type} from "org.joml.Vector3d"

export class $GeoBone {
constructor(arg0: $GeoBone$$Type, arg1: StringJS, arg2: boolean, arg3: double, arg4: boolean, arg5: boolean)

public "getModelSpaceMatrix"(): $Matrix4f
public "addRotationOffsetFromBone"(arg0: $GeoBone$$Type): void
public "getModelRotationMatrix"(): $Matrix4f
public "markPositionAsChanged"(): void
public "getWorldSpaceNormal"(): $Matrix3f
public "setWorldSpaceNormal"(arg0: $Matrix3f$$Type): void
public "markRotationAsChanged"(): void
public "getLocalSpaceMatrix"(): $Matrix4f
public "saveInitialSnapshot"(): void
public "getWorldSpaceMatrix"(): $Matrix4f
public "updateRotation"(arg0: float, arg1: float, arg2: float): void
public "getWorldPosition"(): $Vector3d
public "getName"(): StringJS
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isHidden"(): boolean
public "getParent"(): $GeoBone
public "setRotY"(arg0: float): void
public "getRotX"(): float
public "setRotX"(arg0: float): void
public "getRotY"(): float
public "getInitialSnapshot"(): $BoneSnapshot
public "getMirror"(): boolean
public "getRotationVector"(): $Vector3d
public "getPosX"(): float
public "getPosY"(): float
public "setHidden"(arg0: boolean): void
public "getInflate"(): double
public "setPosX"(arg0: float): void
public "setPosY"(arg0: float): void
public "setModelSpaceMatrix"(arg0: $Matrix4f$$Type): void
public "setWorldSpaceMatrix"(arg0: $Matrix4f$$Type): void
public "setLocalSpaceMatrix"(arg0: $Matrix4f$$Type): void
public "setTrackingMatrices"(arg0: boolean): void
public "getRotZ"(): float
public "setScaleY"(arg0: float): void
public "getScaleX"(): float
public "getScaleZ"(): float
public "setScaleX"(arg0: float): void
public "setScaleZ"(arg0: float): void
public "getScaleY"(): float
public "setRotZ"(arg0: float): void
public "setPivotZ"(arg0: float): void
public "setPosZ"(arg0: float): void
public "getReset"(): boolean
public "setPivotX"(arg0: float): void
public "setPivotY"(arg0: float): void
public "getPivotX"(): float
public "getPivotZ"(): float
public "getPivotY"(): float
public "isTrackingMatrices"(): boolean
public "isHidingChildren"(): boolean
public "getChildBones"(): $List<($GeoBone)>
public "getPositionVector"(): $Vector3d
public "getScaleVector"(): $Vector3d
public "getLocalPosition"(): $Vector3d
public "setChildrenHidden"(arg0: boolean): void
public "markScaleAsChanged"(): void
public "saveSnapshot"(): $BoneSnapshot
public "hasPositionChanged"(): boolean
public "updatePosition"(arg0: float, arg1: float, arg2: float): void
public "hasRotationChanged"(): boolean
public "resetStateChanges"(): void
public "updateScale"(arg0: float, arg1: float, arg2: float): void
public "shouldNeverRender"(): boolean
public "getModelPosition"(): $Vector3d
public "setModelPosition"(arg0: $Vector3d$$Type): void
public "hasScaleChanged"(): boolean
public "updatePivot"(arg0: float, arg1: float, arg2: float): void
public "getPosZ"(): float
public "getCubes"(): $List<($GeoCube)>
get "modelSpaceMatrix"(): $Matrix4f
get "modelRotationMatrix"(): $Matrix4f
get "worldSpaceNormal"(): $Matrix3f
set "worldSpaceNormal"(value: $Matrix3f$$Type)
get "localSpaceMatrix"(): $Matrix4f
get "worldSpaceMatrix"(): $Matrix4f
get "worldPosition"(): $Vector3d
get "name"(): StringJS
get "hidden"(): boolean
get "parent"(): $GeoBone
set "rotY"(value: float)
get "rotX"(): float
set "rotX"(value: float)
get "rotY"(): float
get "initialSnapshot"(): $BoneSnapshot
get "mirror"(): boolean
get "rotationVector"(): $Vector3d
get "posX"(): float
get "posY"(): float
set "hidden"(value: boolean)
get "inflate"(): double
set "posX"(value: float)
set "posY"(value: float)
set "modelSpaceMatrix"(value: $Matrix4f$$Type)
set "worldSpaceMatrix"(value: $Matrix4f$$Type)
set "localSpaceMatrix"(value: $Matrix4f$$Type)
set "trackingMatrices"(value: boolean)
get "rotZ"(): float
set "scaleY"(value: float)
get "scaleX"(): float
get "scaleZ"(): float
set "scaleX"(value: float)
set "scaleZ"(value: float)
get "scaleY"(): float
set "rotZ"(value: float)
set "pivotZ"(value: float)
set "posZ"(value: float)
get "reset"(): boolean
set "pivotX"(value: float)
set "pivotY"(value: float)
get "pivotX"(): float
get "pivotZ"(): float
get "pivotY"(): float
get "trackingMatrices"(): boolean
get "hidingChildren"(): boolean
get "childBones"(): $List<($GeoBone)>
get "positionVector"(): $Vector3d
get "scaleVector"(): $Vector3d
get "localPosition"(): $Vector3d
set "childrenHidden"(value: boolean)
get "modelPosition"(): $Vector3d
set "modelPosition"(value: $Vector3d$$Type)
get "posZ"(): float
get "cubes"(): $List<($GeoCube)>
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
public "withUVs"(arg0: float, arg1: float): $GeoVertex
public "texU"(): float
public "texV"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoVertex$$Type = ({"texU"?: float, "texV"?: float, "position"?: $Vector3f$$Type}) | ([texU?: float, texV?: float, position?: $Vector3f$$Type]);
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
public "quads"(): ($GeoQuad)[]
public "rotation"(): $Vec3
public "mirror"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoCube$$Type = ({"pivot"?: $Vec3$$Type, "mirror"?: boolean, "inflate"?: double, "size"?: $Vec3$$Type, "rotation"?: $Vec3$$Type, "quads"?: ($GeoQuad$$Type)[]}) | ([pivot?: $Vec3$$Type, mirror?: boolean, inflate?: double, size?: $Vec3$$Type, rotation?: $Vec3$$Type, quads?: ($GeoQuad$$Type)[]]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoCube$$Original = $GeoCube;}
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
export type $GeoQuad$$Type = ({"direction"?: $Direction$$Type, "vertices"?: ($GeoVertex$$Type)[], "normal"?: $Vector3f$$Type}) | ([direction?: $Direction$$Type, vertices?: ($GeoVertex$$Type)[], normal?: $Vector3f$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoQuad$$Original = $GeoQuad;}
