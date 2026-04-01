declare module "com.mojang.blaze3d.vertex.VertexFormatElement" {
import {$VertexFormatElement$Usage, $VertexFormatElement$Usage$$Type} from "com.mojang.blaze3d.vertex.VertexFormatElement$Usage"
import {$VertexFormatElement$Type, $VertexFormatElement$Type$$Type} from "com.mojang.blaze3d.vertex.VertexFormatElement$Type"
import {$Stream} from "java.util.stream.Stream"
import {$Record} from "java.lang.Record"

export class $VertexFormatElement extends $Record {
static readonly "UV2": $VertexFormatElement
static readonly "POSITION": $VertexFormatElement
static readonly "UV": $VertexFormatElement
static readonly "UV1": $VertexFormatElement
static readonly "MAX_COUNT": integer
static readonly "COLOR": $VertexFormatElement
static readonly "UV0": $VertexFormatElement
static readonly "NORMAL": $VertexFormatElement

constructor(id: integer, index: integer, type: $VertexFormatElement$Type$$Type, usage: $VertexFormatElement$Usage$$Type, count: integer)

public "byteSize"(): integer
public "index"(): integer
public "type"(): $VertexFormatElement$Type
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "count"(): integer
public static "register"(arg0: integer, arg1: integer, arg2: $VertexFormatElement$Type$$Type, arg3: $VertexFormatElement$Usage$$Type, arg4: integer): $VertexFormatElement
public "id"(): integer
public "mask"(): integer
public "usage"(): $VertexFormatElement$Usage
public "setupBufferState"(arg0: integer, arg1: long, arg2: integer): void
public static "elementsFromMask"(arg0: integer): $Stream<($VertexFormatElement)>
public static "findNextId"(): integer
public static "byId"(arg0: integer): $VertexFormatElement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexFormatElement$$Type = ({"index"?: integer, "type"?: $VertexFormatElement$Type$$Type, "usage"?: $VertexFormatElement$Usage$$Type, "count"?: integer, "id"?: integer}) | ([index?: integer, type?: $VertexFormatElement$Type$$Type, usage?: $VertexFormatElement$Usage$$Type, count?: integer, id?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VertexFormatElement$$Original = $VertexFormatElement;}
declare module "com.mojang.blaze3d.vertex.VertexFormat" {
import {$VertexBuffer} from "com.mojang.blaze3d.vertex.VertexBuffer"
import {$VertexFormat$Builder} from "com.mojang.blaze3d.vertex.VertexFormat$Builder"
import {$VertexFormatExtensions$$Interface} from "net.caffeinemc.mods.sodium.api.vertex.format.VertexFormatExtensions"
import {$List} from "java.util.List"
import {$VertexFormatElement, $VertexFormatElement$$Type} from "com.mojang.blaze3d.vertex.VertexFormatElement"
import {$ImmutableMap} from "com.google.common.collect.ImmutableMap"

export class $VertexFormat implements $VertexFormatExtensions$$Interface {
static readonly "UNKNOWN_ELEMENT": integer

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "builder"(): $VertexFormat$Builder
public "contains"(arg0: $VertexFormatElement$$Type): boolean
public "getOffset"(arg0: $VertexFormatElement$$Type): integer
public "getElementAttributeNames"(): $List<(StringJS)>
public "getElements"(): $List<($VertexFormatElement)>
public "getImmediateDrawVertexBuffer"(): $VertexBuffer
public "getElementName"(arg0: $VertexFormatElement$$Type): StringJS
public "clearBufferState"(): void
public "getElementMapping"(): $ImmutableMap<(StringJS), ($VertexFormatElement)>
public "setupBufferState"(): void
public "hasPosition"(): boolean
public "getElementsMask"(): integer
public "sodium$getGlobalId"(): integer
public "hasColor"(): boolean
public "hasUV"(arg0: integer): boolean
public "hasNormal"(): boolean
public "getOffsetsByElement"(): (integer)[]
public "getVertexSize"(): integer
get "elementAttributeNames"(): $List<(StringJS)>
get "elements"(): $List<($VertexFormatElement)>
get "immediateDrawVertexBuffer"(): $VertexBuffer
get "elementMapping"(): $ImmutableMap<(StringJS), ($VertexFormatElement)>
get "upBufferState"(): void
get "elementsMask"(): integer
get "offsetsByElement"(): (integer)[]
get "vertexSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexFormat$$Type = ($VertexFormat);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VertexFormat$$Original = $VertexFormat;}
declare module "com.mojang.blaze3d.vertex.PoseStack$Pose" {
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$Matrix4f, $Matrix4f$$Type} from "org.joml.Matrix4f"
import {$Matrix3f, $Matrix3f$$Type} from "org.joml.Matrix3f"

export class $PoseStack$Pose {
 "trustedNormals": boolean

constructor(arg0: $Matrix4f$$Type, arg1: $Matrix3f$$Type)

public "copy"(): $PoseStack$Pose
public "normal"(): $Matrix3f
public "transformNormal"(arg0: float, arg1: float, arg2: float, arg3: $Vector3f$$Type): $Vector3f
public "transformNormal"(arg0: $Vector3f$$Type, arg1: $Vector3f$$Type): $Vector3f
public "pose"(): $Matrix4f
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoseStack$Pose$$Type = ($PoseStack$Pose);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PoseStack$Pose$$Original = $PoseStack$Pose;}
declare module "com.mojang.blaze3d.vertex.VertexSorting$DistanceFunction" {
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"

export interface $VertexSorting$DistanceFunction$$Interface {

(arg0: $Vector3f): float
}

export class $VertexSorting$DistanceFunction implements $VertexSorting$DistanceFunction$$Interface {
 "apply"(arg0: $Vector3f$$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexSorting$DistanceFunction$$Type = ((arg0: $Vector3f) => float);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VertexSorting$DistanceFunction$$Original = $VertexSorting$DistanceFunction;}
declare module "com.mojang.blaze3d.vertex.VertexSorting" {
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$VertexSorting$DistanceFunction$$Type} from "com.mojang.blaze3d.vertex.VertexSorting$DistanceFunction"

export interface $VertexSorting$$Interface {

(arg0: ($Vector3f)[]): (integer)[]
}

export class $VertexSorting implements $VertexSorting$$Interface {
static readonly "ORTHOGRAPHIC_Z": $VertexSorting
static readonly "DISTANCE_TO_ORIGIN": $VertexSorting

 "sort"(arg0: ($Vector3f$$Type)[]): (integer)[]
static "byDistance"(arg0: float, arg1: float, arg2: float): $VertexSorting
static "byDistance"(arg0: $Vector3f$$Type): $VertexSorting
static "byDistance"(arg0: $VertexSorting$DistanceFunction$$Type): $VertexSorting
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexSorting$$Type = ((arg0: ($Vector3f)[]) => (integer)[]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VertexSorting$$Original = $VertexSorting;}
declare module "com.mojang.blaze3d.vertex.VertexFormat$Mode" {
import {$Enum} from "java.lang.Enum"

export class $VertexFormat$Mode extends $Enum<($VertexFormat$Mode)> {
readonly "asGLMode": integer
static readonly "QUADS": $VertexFormat$Mode
readonly "primitiveLength": integer
readonly "primitiveStride": integer
readonly "connectedPrimitives": boolean
static readonly "TRIANGLE_FAN": $VertexFormat$Mode
static readonly "DEBUG_LINES": $VertexFormat$Mode
static readonly "TRIANGLES": $VertexFormat$Mode
static readonly "DEBUG_LINE_STRIP": $VertexFormat$Mode
static readonly "LINE_STRIP": $VertexFormat$Mode
static readonly "LINES": $VertexFormat$Mode
static readonly "TRIANGLE_STRIP": $VertexFormat$Mode

public static "values"(): ($VertexFormat$Mode)[]
public static "valueOf"(arg0: StringJS): $VertexFormat$Mode
public "indexCount"(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexFormat$Mode$$Type = (("lines") | ("line_strip") | ("debug_lines") | ("debug_line_strip") | ("triangles") | ("triangle_strip") | ("triangle_fan") | ("quads"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VertexFormat$Mode$$Original = $VertexFormat$Mode;}
declare module "com.mojang.blaze3d.vertex.PoseStack" {
import {$PoseStack$Pose} from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import {$PoseStackAccessor$$Interface as $PoseStackAccessor$0$$Interface} from "dev.engine_room.flywheel.impl.mixin.PoseStackAccessor"
import {$PoseStackAccessor$$Interface} from "org.embeddedt.modernfix.neoforge.mixin.bugfix.entity_pose_stack.PoseStackAccessor"
import {$IPoseStackExtension$$Interface} from "net.neoforged.neoforge.client.extensions.IPoseStackExtension"
import {$Transformation$$Type} from "com.mojang.math.Transformation"
import {$PoseTransformStack} from "dev.engine_room.flywheel.lib.transform.PoseTransformStack"
import {$Deque} from "java.util.Deque"
import {$Quaternionf$$Type} from "org.joml.Quaternionf"
import {$PoseStackExtension$$Interface} from "dev.engine_room.flywheel.impl.extension.PoseStackExtension"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"

export class $PoseStack implements $IPoseStackExtension$$Interface, $PoseStackAccessor$$Interface, $PoseStackAccessor$0$$Interface, $PoseStackExtension$$Interface {
readonly "poseStack": $Deque<($PoseStack$Pose)>

constructor()

public "clear"(): boolean
public "scale"(arg0: float, arg1: float, arg2: float): void
public "last"(): $PoseStack$Pose
public "flywheel$transformStack"(): $PoseTransformStack
public "flywheel$getPoseStack"(): $Deque
public "setIdentity"(): void
public "getPoseStack"(): $Deque
public "translate"(arg0: float, arg1: float, arg2: float): void
public "translate"(arg0: double, arg1: double, arg2: double): void
public "rotateAround"(arg0: $Quaternionf$$Type, arg1: float, arg2: float, arg3: float): void
public "popPose"(): void
public "pushPose"(): void
public "mulPose"(arg0: $Matrix4f$$Type): void
public "mulPose"(arg0: $Quaternionf$$Type): void
public "pushTransformation"(arg0: $Transformation$$Type): void
get "identity"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoseStack$$Type = ($PoseStack);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PoseStack$$Original = $PoseStack;}
declare module "com.mojang.blaze3d.vertex.VertexConsumer" {
import {$IVertexConsumerExtension$$Interface} from "net.neoforged.neoforge.client.extensions.IVertexConsumerExtension"
import {$PoseStack$Pose$$Type} from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import {$VertexFormatElement$$Type} from "com.mojang.blaze3d.vertex.VertexFormatElement"
import {$Vector3f$$Type} from "org.joml.Vector3f"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"
import {$BakedQuad$$Type} from "net.minecraft.client.renderer.block.model.BakedQuad"
import {$Matrix3f$$Type} from "org.joml.Matrix3f"

export interface $VertexConsumer$$Interface extends $IVertexConsumerExtension$$Interface {
set "color"(value: integer)
set "whiteAlpha"(value: integer)
set "light"(value: integer)
set "overlay"(value: integer)
}

export class $VertexConsumer implements $VertexConsumer$$Interface {
 "setColor"(arg0: float, arg1: float, arg2: float, arg3: float): $VertexConsumer
 "setColor"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $VertexConsumer
 "setColor"(arg0: integer): $VertexConsumer
 "setWhiteAlpha"(arg0: integer): $VertexConsumer
 "putBulkData"(arg0: $PoseStack$Pose$$Type, arg1: $BakedQuad$$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: integer, arg7: integer): void
 "putBulkData"(arg0: $PoseStack$Pose$$Type, arg1: $BakedQuad$$Type, arg2: (float)[], arg3: float, arg4: float, arg5: float, arg6: float, arg7: (integer)[], arg8: integer, arg9: boolean): void
 "setLight"(arg0: integer): $VertexConsumer
 "setUv2"(arg0: integer, arg1: integer): $VertexConsumer
 "setNormal"(arg0: $PoseStack$Pose$$Type, arg1: float, arg2: float, arg3: float): $VertexConsumer
 "setNormal"(arg0: float, arg1: float, arg2: float): $VertexConsumer
 "setUv1"(arg0: integer, arg1: integer): $VertexConsumer
 "addVertex"(arg0: $PoseStack$Pose$$Type, arg1: float, arg2: float, arg3: float): $VertexConsumer
 "addVertex"(arg0: $PoseStack$Pose$$Type, arg1: $Vector3f$$Type): $VertexConsumer
 "addVertex"(arg0: float, arg1: float, arg2: float): $VertexConsumer
 "addVertex"(arg0: $Matrix4f$$Type, arg1: float, arg2: float, arg3: float): $VertexConsumer
 "addVertex"(arg0: float, arg1: float, arg2: float, arg3: integer, arg4: float, arg5: float, arg6: integer, arg7: integer, arg8: float, arg9: float, arg10: float): void
 "addVertex"(arg0: $Vector3f$$Type): $VertexConsumer
 "setOverlay"(arg0: integer): $VertexConsumer
 "setUv"(arg0: float, arg1: float): $VertexConsumer
 "applyBakedLighting"(arg0: integer, arg1: $ByteBuffer$$Type): integer
 "putBulkData"(arg0: $PoseStack$Pose$$Type, arg1: $BakedQuad$$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: integer, arg7: integer, arg8: boolean): void
 "applyBakedNormals"(arg0: $Vector3f$$Type, arg1: $ByteBuffer$$Type, arg2: $Matrix3f$$Type): void
 "misc"(arg0: $VertexFormatElement$$Type, ...arg1: (integer)[]): $VertexConsumer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexConsumer$$Type = ($VertexConsumer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VertexConsumer$$Original = $VertexConsumer;}
declare module "com.mojang.blaze3d.vertex.MeshData$DrawState" {
import {$VertexFormat$IndexType, $VertexFormat$IndexType$$Type} from "com.mojang.blaze3d.vertex.VertexFormat$IndexType"
import {$VertexFormat$Mode, $VertexFormat$Mode$$Type} from "com.mojang.blaze3d.vertex.VertexFormat$Mode"
import {$VertexFormat, $VertexFormat$$Type} from "com.mojang.blaze3d.vertex.VertexFormat"
import {$Record} from "java.lang.Record"

export class $MeshData$DrawState extends $Record {
constructor(arg0: $VertexFormat$$Type, arg1: integer, arg2: integer, arg3: $VertexFormat$Mode$$Type, arg4: $VertexFormat$IndexType$$Type)

public "mode"(): $VertexFormat$Mode
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "format"(): $VertexFormat
public "vertexCount"(): integer
public "indexCount"(): integer
public "indexType"(): $VertexFormat$IndexType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MeshData$DrawState$$Type = ({"mode"?: $VertexFormat$Mode$$Type, "indexType"?: $VertexFormat$IndexType$$Type, "indexCount"?: integer, "format"?: $VertexFormat$$Type, "vertexCount"?: integer}) | ([mode?: $VertexFormat$Mode$$Type, indexType?: $VertexFormat$IndexType$$Type, indexCount?: integer, format?: $VertexFormat$$Type, vertexCount?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MeshData$DrawState$$Original = $MeshData$DrawState;}
declare module "com.mojang.blaze3d.vertex.VertexFormatElement$Usage" {
import {$Enum} from "java.lang.Enum"
import {$ExtensionInfo} from "net.neoforged.fml.common.asm.enumextension.ExtensionInfo"
import {$IExtensibleEnum$$Interface} from "net.neoforged.fml.common.asm.enumextension.IExtensibleEnum"

export class $VertexFormatElement$Usage extends $Enum<($VertexFormatElement$Usage)> implements $IExtensibleEnum$$Interface {
static readonly "POSITION": $VertexFormatElement$Usage
static readonly "UV": $VertexFormatElement$Usage
static readonly "GENERIC": $VertexFormatElement$Usage
static readonly "COLOR": $VertexFormatElement$Usage
static readonly "NORMAL": $VertexFormatElement$Usage

public "toString"(): StringJS
public static "values"(): ($VertexFormatElement$Usage)[]
public static "valueOf"(arg0: StringJS): $VertexFormatElement$Usage
public static "getExtensionInfo"(): $ExtensionInfo
get "extensionInfo"(): $ExtensionInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexFormatElement$Usage$$Type = (("position") | ("normal") | ("color") | ("uv") | ("generic"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VertexFormatElement$Usage$$Original = $VertexFormatElement$Usage;}
declare module "com.mojang.blaze3d.vertex.VertexFormat$Builder" {
import {$VertexFormatElement$$Type} from "com.mojang.blaze3d.vertex.VertexFormatElement"
import {$VertexFormat} from "com.mojang.blaze3d.vertex.VertexFormat"

export class $VertexFormat$Builder {
public "add"(arg0: StringJS, arg1: $VertexFormatElement$$Type): $VertexFormat$Builder
public "build"(): $VertexFormat
public "padding"(arg0: integer): $VertexFormat$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexFormat$Builder$$Type = ($VertexFormat$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VertexFormat$Builder$$Original = $VertexFormat$Builder;}
declare module "com.mojang.blaze3d.vertex.VertexBuffer$Usage" {
import {$Enum} from "java.lang.Enum"

export class $VertexBuffer$Usage extends $Enum<($VertexBuffer$Usage)> {
static readonly "STATIC": $VertexBuffer$Usage
static readonly "DYNAMIC": $VertexBuffer$Usage

public static "values"(): ($VertexBuffer$Usage)[]
public static "valueOf"(arg0: StringJS): $VertexBuffer$Usage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexBuffer$Usage$$Type = (("static") | ("dynamic"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VertexBuffer$Usage$$Original = $VertexBuffer$Usage;}
declare module "com.mojang.blaze3d.vertex.Tesselator" {
import {$BufferBuilder, $BufferBuilder$$Type} from "com.mojang.blaze3d.vertex.BufferBuilder"
import {$VertexFormat$Mode$$Type} from "com.mojang.blaze3d.vertex.VertexFormat$Mode"
import {$OwoTessellatorExtension$$Interface} from "io.wispforest.owo.util.pond.OwoTessellatorExtension"
import {$VertexFormat$$Type} from "com.mojang.blaze3d.vertex.VertexFormat"

export class $Tesselator implements $OwoTessellatorExtension$$Interface {
constructor()
constructor(arg0: integer)

public "clear"(): void
public "begin"(arg0: $VertexFormat$Mode$$Type, arg1: $VertexFormat$$Type): $BufferBuilder
public static "getInstance"(): $Tesselator
public static "init"(): void
public "owo$getStoredBuilder"(): $BufferBuilder
public "owo$setStoredBuilder"(builder: $BufferBuilder$$Type): void
public "owo$skipNextBegin"(): void
get "instance"(): $Tesselator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Tesselator$$Type = ($Tesselator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Tesselator$$Original = $Tesselator;}
declare module "com.mojang.blaze3d.vertex.VertexFormat$IndexType" {
import {$Enum} from "java.lang.Enum"

export class $VertexFormat$IndexType extends $Enum<($VertexFormat$IndexType)> {
readonly "bytes": integer
readonly "asGLType": integer
static readonly "INT": $VertexFormat$IndexType
static readonly "SHORT": $VertexFormat$IndexType

public static "values"(): ($VertexFormat$IndexType)[]
public static "valueOf"(arg0: StringJS): $VertexFormat$IndexType
public static "least"(arg0: integer): $VertexFormat$IndexType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexFormat$IndexType$$Type = (("short") | ("int"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VertexFormat$IndexType$$Original = $VertexFormat$IndexType;}
declare module "com.mojang.blaze3d.vertex.VertexBuffer" {
import {$MeshData$$Type} from "com.mojang.blaze3d.vertex.MeshData"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$VertexBuffer$Usage$$Type} from "com.mojang.blaze3d.vertex.VertexBuffer$Usage"
import {$ShaderInstance$$Type} from "net.minecraft.client.renderer.ShaderInstance"
import {$ByteBufferBuilder$Result$$Type} from "com.mojang.blaze3d.vertex.ByteBufferBuilder$Result"
import {$VertexBufferHelper$$Interface} from "net.irisshaders.iris.helpers.VertexBufferHelper"
import {$VertexFormat} from "com.mojang.blaze3d.vertex.VertexFormat"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"

export class $VertexBuffer implements $AutoCloseable$$Interface, $VertexBufferHelper$$Interface {
constructor(arg0: $VertexBuffer$Usage$$Type)

public static "unbind"(): void
public "close"(): void
public "isInvalid"(): boolean
public "bind"(): void
public "getFormat"(): $VertexFormat
public "uploadIndexBuffer"(arg0: $ByteBufferBuilder$Result$$Type): void
public "saveBinding"(): void
public "restoreBinding"(): void
public "draw"(): void
public "drawWithShader"(arg0: $Matrix4f$$Type, arg1: $Matrix4f$$Type, arg2: $ShaderInstance$$Type): void
public "upload"(arg0: $MeshData$$Type): void
get "invalid"(): boolean
get "format"(): $VertexFormat
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexBuffer$$Type = ($VertexBuffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VertexBuffer$$Original = $VertexBuffer;}
declare module "com.mojang.blaze3d.vertex.MeshData$SortState" {
import {$VertexFormat$IndexType, $VertexFormat$IndexType$$Type} from "com.mojang.blaze3d.vertex.VertexFormat$IndexType"
import {$ByteBufferBuilder$$Type} from "com.mojang.blaze3d.vertex.ByteBufferBuilder"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$ByteBufferBuilder$Result} from "com.mojang.blaze3d.vertex.ByteBufferBuilder$Result"
import {$VertexSorting$$Type} from "com.mojang.blaze3d.vertex.VertexSorting"
import {$Record} from "java.lang.Record"

export class $MeshData$SortState extends $Record {
constructor(arg0: ($Vector3f$$Type)[], arg1: $VertexFormat$IndexType$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "buildSortedIndexBuffer"(arg0: $ByteBufferBuilder$$Type, arg1: $VertexSorting$$Type): $ByteBufferBuilder$Result
public "indexType"(): $VertexFormat$IndexType
public "centroids"(): ($Vector3f)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MeshData$SortState$$Type = ({"centroids"?: ($Vector3f$$Type)[], "indexType"?: $VertexFormat$IndexType$$Type}) | ([centroids?: ($Vector3f$$Type)[], indexType?: $VertexFormat$IndexType$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MeshData$SortState$$Original = $MeshData$SortState;}
declare module "com.mojang.blaze3d.vertex.MeshData" {
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$ByteBufferBuilder$$Type} from "com.mojang.blaze3d.vertex.ByteBufferBuilder"
import {$MeshData$SortState} from "com.mojang.blaze3d.vertex.MeshData$SortState"
import {$ByteBufferBuilder$Result$$Type} from "com.mojang.blaze3d.vertex.ByteBufferBuilder$Result"
import {$ByteBuffer} from "java.nio.ByteBuffer"
import {$VertexSorting$$Type} from "com.mojang.blaze3d.vertex.VertexSorting"
import {$MeshData$DrawState, $MeshData$DrawState$$Type} from "com.mojang.blaze3d.vertex.MeshData$DrawState"

export class $MeshData implements $AutoCloseable$$Interface {
constructor(arg0: $ByteBufferBuilder$Result$$Type, arg1: $MeshData$DrawState$$Type)

public "close"(): void
public "indexBuffer"(): $ByteBuffer
public "drawState"(): $MeshData$DrawState
public "vertexBuffer"(): $ByteBuffer
public "sortQuads"(arg0: $ByteBufferBuilder$$Type, arg1: $VertexSorting$$Type): $MeshData$SortState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MeshData$$Type = ($MeshData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MeshData$$Original = $MeshData;}
declare module "com.mojang.blaze3d.vertex.ByteBufferBuilder$Result" {
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$ByteBuffer} from "java.nio.ByteBuffer"

export class $ByteBufferBuilder$Result implements $AutoCloseable$$Interface {
public "close"(): void
public "byteBuffer"(): $ByteBuffer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ByteBufferBuilder$Result$$Type = ($ByteBufferBuilder$Result);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ByteBufferBuilder$Result$$Original = $ByteBufferBuilder$Result;}
declare module "com.mojang.blaze3d.vertex.BufferBuilder" {
import {$BufferBuilderExtension$$Interface} from "net.caffeinemc.mods.sodium.client.render.vertex.buffer.BufferBuilderExtension"
import {$VertexFormatElement$$Type} from "com.mojang.blaze3d.vertex.VertexFormatElement"
import {$Vector3f$$Type} from "org.joml.Vector3f"
import {$BlockSensitiveBufferBuilder$$Interface} from "net.irisshaders.iris.vertices.BlockSensitiveBufferBuilder"
import {$ColorwheelBufferBuilder$$Interface} from "dev.djefrey.colorwheel.ColorwheelBufferBuilder"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"
import {$PoseStack$Pose$$Type} from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$VertexBufferWriter, $VertexBufferWriter$$Type, $VertexBufferWriter$$Interface} from "net.caffeinemc.mods.sodium.api.vertex.buffer.VertexBufferWriter"
import {$BufferBuilderAccessor$$Interface} from "io.wispforest.owo.mixin.BufferBuilderAccessor"
import {$ETFVertexConsumer$$Interface} from "traben.entity_texture_features.utils.ETFVertexConsumer"
import {$VertexConsumer, $VertexConsumer$$Type, $VertexConsumer$$Interface} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$Matrix3f$$Type} from "org.joml.Matrix3f"
import {$BakedQuad$$Type} from "net.minecraft.client.renderer.block.model.BakedQuad"
import {$MemoryStack$$Type} from "org.lwjgl.system.MemoryStack"
import {$MeshData} from "com.mojang.blaze3d.vertex.MeshData"
import {$ByteBufferBuilder$$Type} from "com.mojang.blaze3d.vertex.ByteBufferBuilder"
import {$VertexFormat$Mode, $VertexFormat$Mode$$Type} from "com.mojang.blaze3d.vertex.VertexFormat$Mode"
import {$BufferBuilderExt$$Interface} from "net.irisshaders.batchedentityrendering.impl.BufferBuilderExt"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$BufferBuilderAccessor$$Interface as $BufferBuilderAccessor$0$$Interface} from "net.createmod.ponder.mixin.client.accessor.BufferBuilderAccessor"
import {$VertexFormat, $VertexFormat$$Type} from "com.mojang.blaze3d.vertex.VertexFormat"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$ETFTexture} from "traben.entity_texture_features.features.texture_handlers.ETFTexture"

export class $BufferBuilder implements $VertexConsumer$$Interface, $BlockSensitiveBufferBuilder$$Interface, $BufferBuilderExtension$$Interface, $VertexBufferWriter$$Interface, $ETFVertexConsumer$$Interface, $BufferBuilderAccessor$$Interface, $ColorwheelBufferBuilder$$Interface, $BufferBuilderAccessor$0$$Interface, $BufferBuilderExt$$Interface {
readonly "format": $VertexFormat
 "building": boolean

constructor(arg0: $ByteBufferBuilder$$Type, arg1: $VertexFormat$Mode$$Type, arg2: $VertexFormat$$Type)

public "build"(): $MeshData
public "push"(arg0: $MemoryStack$$Type, arg1: long, arg2: integer, arg3: $VertexFormat$$Type): void
public "getFormat"(): $VertexFormat
public "setColor"(arg0: integer): $VertexConsumer
public "setColor"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $VertexConsumer
public "etf$getProvider"(): $MultiBufferSource
public "etf$getRenderLayer"(): $RenderType
public "catnip$getVertices"(): integer
public "clrwlBeginBlock"(block: integer, renderType: byte, lightEmission: byte, isTerrain: boolean, posX: integer, posY: integer, posZ: integer): void
public "etf$getETFTexture"(): $ETFTexture
public "beginBlock"(arg0: integer, arg1: byte, arg2: byte, arg3: integer, arg4: integer, arg5: integer): void
public "splitStrip"(): void
public "endBlock"(): void
public "buildOrThrow"(): $MeshData
public "sodium$duplicateVertex"(): void
public "getDrawMode"(): $VertexFormat$Mode
public "etf$initETFVertexConsumer"(provider: $MultiBufferSource$$Type, renderLayer: $RenderType$$Type): void
public "isBuilding"(): boolean
public "putBulkData"(arg0: $PoseStack$Pose$$Type, arg1: $BakedQuad$$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: integer, arg7: integer): void
public "putBulkData"(arg0: $PoseStack$Pose$$Type, arg1: $BakedQuad$$Type, arg2: (float)[], arg3: float, arg4: float, arg5: float, arg6: float, arg7: (integer)[], arg8: integer, arg9: boolean): void
public "setLight"(arg0: integer): $VertexConsumer
public "setUv2"(arg0: integer, arg1: integer): $VertexConsumer
public "setNormal"(arg0: float, arg1: float, arg2: float): $VertexConsumer
public "setUv1"(arg0: integer, arg1: integer): $VertexConsumer
public "addVertex"(arg0: float, arg1: float, arg2: float): $VertexConsumer
public "addVertex"(arg0: float, arg1: float, arg2: float, arg3: integer, arg4: float, arg5: float, arg6: integer, arg7: integer, arg8: float, arg9: float, arg10: float): void
public "setOverlay"(arg0: integer): $VertexConsumer
public "setUv"(arg0: float, arg1: float): $VertexConsumer
public "setColor"(arg0: float, arg1: float, arg2: float, arg3: float): $VertexConsumer
public "setWhiteAlpha"(arg0: integer): $VertexConsumer
public "setNormal"(arg0: $PoseStack$Pose$$Type, arg1: float, arg2: float, arg3: float): $VertexConsumer
public "addVertex"(arg0: $PoseStack$Pose$$Type, arg1: float, arg2: float, arg3: float): $VertexConsumer
public "addVertex"(arg0: $PoseStack$Pose$$Type, arg1: $Vector3f$$Type): $VertexConsumer
public "addVertex"(arg0: $Matrix4f$$Type, arg1: float, arg2: float, arg3: float): $VertexConsumer
public "addVertex"(arg0: $Vector3f$$Type): $VertexConsumer
public "overrideBlock"(arg0: integer): void
public "ignoreMidBlock"(arg0: boolean): void
public "restoreBlock"(): void
public static "of"(arg0: $VertexConsumer$$Type): $VertexBufferWriter
public static "copyInto"(arg0: $VertexBufferWriter$$Type, arg1: $MemoryStack$$Type, arg2: long, arg3: integer, arg4: $VertexFormat$$Type): void
public static "tryOf"(arg0: $VertexConsumer$$Type): $VertexBufferWriter
public "canUseIntrinsics"(): boolean
public "clrwlEndBlock"(): void
public "applyBakedLighting"(arg0: integer, arg1: $ByteBuffer$$Type): integer
public "putBulkData"(arg0: $PoseStack$Pose$$Type, arg1: $BakedQuad$$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: integer, arg7: integer, arg8: boolean): void
public "applyBakedNormals"(arg0: $Vector3f$$Type, arg1: $ByteBuffer$$Type, arg2: $Matrix3f$$Type): void
public "misc"(arg0: $VertexFormatElement$$Type, ...arg1: (integer)[]): $VertexConsumer
set "color"(value: integer)
get "drawMode"(): $VertexFormat$Mode
set "light"(value: integer)
set "overlay"(value: integer)
set "whiteAlpha"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferBuilder$$Type = ($BufferBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BufferBuilder$$Original = $BufferBuilder;}
declare module "com.mojang.blaze3d.vertex.VertexFormatElement$Type" {
import {$Enum} from "java.lang.Enum"

export class $VertexFormatElement$Type extends $Enum<($VertexFormatElement$Type)> {
static readonly "UBYTE": $VertexFormatElement$Type
static readonly "FLOAT": $VertexFormatElement$Type
static readonly "BYTE": $VertexFormatElement$Type
static readonly "USHORT": $VertexFormatElement$Type
static readonly "UINT": $VertexFormatElement$Type
static readonly "INT": $VertexFormatElement$Type
static readonly "SHORT": $VertexFormatElement$Type

public "size"(): integer
public "toString"(): StringJS
public static "values"(): ($VertexFormatElement$Type)[]
public static "valueOf"(arg0: StringJS): $VertexFormatElement$Type
public "glType"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexFormatElement$Type$$Type = (("float") | ("ubyte") | ("byte") | ("ushort") | ("short") | ("uint") | ("int"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VertexFormatElement$Type$$Original = $VertexFormatElement$Type;}
declare module "com.mojang.blaze3d.vertex.ByteBufferBuilder" {
import {$MemoryTrackingBuffer$$Interface} from "net.irisshaders.batchedentityrendering.impl.MemoryTrackingBuffer"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$ByteBufferBuilder$Result} from "com.mojang.blaze3d.vertex.ByteBufferBuilder$Result"
import {$MojangBufferAccessor$$Interface} from "net.irisshaders.iris.vertices.MojangBufferAccessor"

export class $ByteBufferBuilder implements $AutoCloseable$$Interface, $MojangBufferAccessor$$Interface, $MemoryTrackingBuffer$$Interface {
constructor(arg0: integer)

public "clear"(): void
public "close"(): void
public "build"(): $ByteBufferBuilder$Result
public "reserve"(arg0: integer): long
public "freeAndDeleteBuffer"(): void
public "discard"(): void
public "getPointer"(): long
public "getAllocatedSize"(): long
public "getUsedSize"(): long
get "pointer"(): long
get "allocatedSize"(): long
get "usedSize"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ByteBufferBuilder$$Type = ($ByteBufferBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ByteBufferBuilder$$Original = $ByteBufferBuilder;}
