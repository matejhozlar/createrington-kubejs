declare module "com.mojang.math.Axis" {
import {$Vector3f$$Type} from "org.joml.Vector3f"
import {$Quaternionf, $Quaternionf$$Type} from "org.joml.Quaternionf"

export interface $Axis$$Interface {

(arg0: float): $Quaternionf$$Type
}

export class $Axis implements $Axis$$Interface {
static readonly "ZN": $Axis
static readonly "YN": $Axis
static readonly "XN": $Axis
static readonly "ZP": $Axis
static readonly "YP": $Axis
static readonly "XP": $Axis

static "of"(arg0: $Vector3f$$Type): $Axis
 "rotation"(arg0: float): $Quaternionf
 "rotationDegrees"(arg0: float): $Quaternionf
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Axis$$Type = ((arg0: float) => $Quaternionf$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Axis$$Original = $Axis;}
declare module "com.mojang.math.Transformation" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$ITransformationExtension$$Interface} from "net.neoforged.neoforge.common.extensions.ITransformationExtension"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Vector4f$$Type} from "org.joml.Vector4f"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$Quaternionf, $Quaternionf$$Type} from "org.joml.Quaternionf"
import {$Matrix4f, $Matrix4f$$Type} from "org.joml.Matrix4f"
import {$Matrix3f} from "org.joml.Matrix3f"

export class $Transformation implements $ITransformationExtension$$Interface {
static readonly "CODEC": $Codec<($Transformation)>
static readonly "EXTENDED_CODEC": $Codec<($Transformation)>

constructor(arg0: $Matrix4f$$Type)
constructor(arg0: $Vector3f$$Type, arg1: $Quaternionf$$Type, arg2: $Vector3f$$Type, arg3: $Quaternionf$$Type)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "identity"(): $Transformation
public "compose"(arg0: $Transformation$$Type): $Transformation
public "inverse"(): $Transformation
public "getScale"(): $Vector3f
public "getRightRotation"(): $Quaternionf
public "getLeftRotation"(): $Quaternionf
public "slerp"(arg0: $Transformation$$Type, arg1: float): $Transformation
public "getTranslation"(): $Vector3f
public "getNormalMatrix"(): $Matrix3f
public "getMatrix"(): $Matrix4f
public "rotateTransform"(arg0: $Direction$$Type): $Direction
public "isIdentity"(): boolean
public "transformPosition"(arg0: $Vector4f$$Type): void
public "transformNormal"(arg0: $Vector3f$$Type): void
public "blockCenterToCorner"(): $Transformation
public "blockCornerToCenter"(): $Transformation
public "applyOrigin"(arg0: $Vector3f$$Type): $Transformation
get "scale"(): $Vector3f
get "rightRotation"(): $Quaternionf
get "leftRotation"(): $Quaternionf
get "translation"(): $Vector3f
get "normalMatrix"(): $Matrix3f
get "matrix"(): $Matrix4f
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Transformation$$Type = ($Transformation);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Transformation$$Original = $Transformation;}
declare module "com.mojang.math.OctahedralGroup" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$FrontAndTop, $FrontAndTop$$Type} from "net.minecraft.core.FrontAndTop"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$Matrix3f} from "org.joml.Matrix3f"

export class $OctahedralGroup extends $Enum<($OctahedralGroup)> implements $StringRepresentable$$Interface {
static readonly "ROT_60_REF_PNP": $OctahedralGroup
static readonly "ROT_180_EDGE_YZ_POS": $OctahedralGroup
static readonly "ROT_180_FACE_XZ": $OctahedralGroup
static readonly "ROT_180_FACE_XY": $OctahedralGroup
static readonly "ROT_90_X_POS": $OctahedralGroup
static readonly "ROT_60_REF_NPN": $OctahedralGroup
static readonly "SWAP_NEG_XZ": $OctahedralGroup
static readonly "ROT_60_REF_NNN": $OctahedralGroup
static readonly "ROT_60_REF_NPP": $OctahedralGroup
static readonly "ROT_60_REF_PPN": $OctahedralGroup
static readonly "SWAP_NEG_XY": $OctahedralGroup
static readonly "ROT_90_REF_Z_NEG": $OctahedralGroup
static readonly "ROT_90_X_NEG": $OctahedralGroup
static readonly "ROT_180_EDGE_YZ_NEG": $OctahedralGroup
static readonly "ROT_60_REF_NNP": $OctahedralGroup
static readonly "ROT_60_REF_PNN": $OctahedralGroup
static readonly "ROT_60_REF_PPP": $OctahedralGroup
static readonly "ROT_180_EDGE_XZ_NEG": $OctahedralGroup
static readonly "ROT_120_NNN": $OctahedralGroup
static readonly "ROT_120_NPP": $OctahedralGroup
static readonly "ROT_120_PPN": $OctahedralGroup
static readonly "ROT_120_NPN": $OctahedralGroup
static readonly "ROT_90_REF_X_POS": $OctahedralGroup
static readonly "ROT_120_PNP": $OctahedralGroup
static readonly "SWAP_YZ": $OctahedralGroup
static readonly "ROT_90_REF_Y_NEG": $OctahedralGroup
static readonly "ROT_120_NNP": $OctahedralGroup
static readonly "ROT_120_PNN": $OctahedralGroup
static readonly "ROT_120_PPP": $OctahedralGroup
static readonly "ROT_90_Y_POS": $OctahedralGroup
static readonly "ROT_180_EDGE_XZ_POS": $OctahedralGroup
static readonly "ROT_90_Y_NEG": $OctahedralGroup
static readonly "ROT_180_EDGE_XY_NEG": $OctahedralGroup
static readonly "INVERT_X": $OctahedralGroup
static readonly "ROT_90_REF_Y_POS": $OctahedralGroup
static readonly "ROT_90_Z_NEG": $OctahedralGroup
static readonly "ROT_180_FACE_YZ": $OctahedralGroup
static readonly "ROT_90_REF_X_NEG": $OctahedralGroup
static readonly "ROT_180_EDGE_XY_POS": $OctahedralGroup
static readonly "ROT_90_Z_POS": $OctahedralGroup
static readonly "INVERSION": $OctahedralGroup
static readonly "SWAP_NEG_YZ": $OctahedralGroup
static readonly "IDENTITY": $OctahedralGroup
static readonly "ROT_90_REF_Z_POS": $OctahedralGroup
static readonly "SWAP_XY": $OctahedralGroup
static readonly "SWAP_XZ": $OctahedralGroup
static readonly "INVERT_Z": $OctahedralGroup
static readonly "INVERT_Y": $OctahedralGroup

public "toString"(): StringJS
public static "values"(): ($OctahedralGroup)[]
public static "valueOf"(arg0: StringJS): $OctahedralGroup
public "compose"(arg0: $OctahedralGroup$$Type): $OctahedralGroup
public "rotate"(arg0: $Direction$$Type): $Direction
public "rotate"(arg0: $FrontAndTop$$Type): $FrontAndTop
public "inverts"(arg0: $Direction$Axis$$Type): boolean
public "inverse"(): $OctahedralGroup
public "transformation"(): $Matrix3f
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OctahedralGroup$$Type = (("identity") | ("rot_180_face_xy") | ("rot_180_face_xz") | ("rot_180_face_yz") | ("rot_120_nnn") | ("rot_120_nnp") | ("rot_120_npn") | ("rot_120_npp") | ("rot_120_pnn") | ("rot_120_pnp") | ("rot_120_ppn") | ("rot_120_ppp") | ("rot_180_edge_xy_neg") | ("rot_180_edge_xy_pos") | ("rot_180_edge_xz_neg") | ("rot_180_edge_xz_pos") | ("rot_180_edge_yz_neg") | ("rot_180_edge_yz_pos") | ("rot_90_x_neg") | ("rot_90_x_pos") | ("rot_90_y_neg") | ("rot_90_y_pos") | ("rot_90_z_neg") | ("rot_90_z_pos") | ("inversion") | ("invert_x") | ("invert_y") | ("invert_z") | ("rot_60_ref_nnn") | ("rot_60_ref_nnp") | ("rot_60_ref_npn") | ("rot_60_ref_npp") | ("rot_60_ref_pnn") | ("rot_60_ref_pnp") | ("rot_60_ref_ppn") | ("rot_60_ref_ppp") | ("swap_xy") | ("swap_yz") | ("swap_xz") | ("swap_neg_xy") | ("swap_neg_yz") | ("swap_neg_xz") | ("rot_90_ref_x_neg") | ("rot_90_ref_x_pos") | ("rot_90_ref_y_neg") | ("rot_90_ref_y_pos") | ("rot_90_ref_z_neg") | ("rot_90_ref_z_pos"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OctahedralGroup$$Original = $OctahedralGroup;}
