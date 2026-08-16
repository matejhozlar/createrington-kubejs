import { $Direction_ } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $VertexConsumer, $VertexFormatElement_, $PoseStack$Pose, $VertexFormat } from "@package/com/mojang/blaze3d/vertex";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $ByteBuffer } from "@package/java/nio";
import { $Transformation } from "@package/com/mojang/math";
import { $Matrix4f, $Matrix3f, $Vector3f } from "@package/org/joml";

declare module "@package/net/neoforged/neoforge/client/model/pipeline" {
    /**
     * Vertex pipeline element that applies a transformation to incoming geometry.
     */
    export class $TransformingVertexPipeline extends $VertexConsumerWrapper {
        constructor(parent: $VertexConsumer, transformation: $Transformation);
    }
    /**
     * Wrapper for `VertexConsumer` which delegates all operations to its parent.
     * 
     * Useful for defining custom pipeline elements that only process certain data.
     */
    export class $VertexConsumerWrapper implements $VertexConsumer {
        setColor(r: number, g: number, b: number, a: number): $VertexConsumer;
        addVertex(x: number, y: number, z: number): $VertexConsumer;
        setUv(u: number, v: number): $VertexConsumer;
        setUv1(u: number, v: number): $VertexConsumer;
        setUv2(u: number, v: number): $VertexConsumer;
        setNormal(x: number, y: number, z: number): $VertexConsumer;
        misc(arg0: $VertexFormatElement_, ...arg1: number[]): $VertexConsumer;
        setColor(red: number, green: number, blue: number, alpha: number): $VertexConsumer;
        setColor(packedOverlay: number): $VertexConsumer;
        addVertex(x: number, y: number, z: number, color: number, u: number, v: number, packedOverlay: number, packedLight: number, normalX: number, normalY: number, normalZ: number): void;
        addVertex(pose: $Matrix4f, x: number, y: number, z: number): $VertexConsumer;
        addVertex(pos: $Vector3f): $VertexConsumer;
        addVertex(pose: $PoseStack$Pose, normalX: number, normalY: number, normalZ: number): $VertexConsumer;
        addVertex(pose: $PoseStack$Pose, pos: $Vector3f): $VertexConsumer;
        setOverlay(packedOverlay: number): $VertexConsumer;
        wrapMethod$cop000$sodium$modifyPutBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $Operation_<any>): void;
        wrapMethod$cop000$sodium$modifyPutBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number, arg7: number[], arg8: number, arg9: boolean, arg10: $Operation_<any>): void;
        setLight(packedOverlay: number): $VertexConsumer;
        setNormal(pose: $PoseStack$Pose, normalX: number, normalY: number, normalZ: number): $VertexConsumer;
        setWhiteAlpha(packedOverlay: number): $VertexConsumer;
        putBulkData(pose: $PoseStack$Pose, quad: $BakedQuad, brightness: number[], red: number, green: number, blue: number, alpha: number, lightmap: number[], packedOverlay: number, readAlpha: boolean): void;
        putBulkData(pose: $PoseStack$Pose, quad: $BakedQuad, red: number, green: number, blue: number, alpha: number, packedLight: number, packedOverlay: number): void;
        /**
         * Variant with no per-vertex shading.
         */
        putBulkData(pose: $PoseStack$Pose, bakedQuad: $BakedQuad, red: number, green: number, blue: number, alpha: number, packedLight: number, packedOverlay: number, readExistingColor: boolean): void;
        applyBakedLighting(packedLight: number, data: $ByteBuffer): number;
        applyBakedNormals(generated: $Vector3f, data: $ByteBuffer, normalTransform: $Matrix3f): void;
        constructor(parent: $VertexConsumer);
        set overlay(value: number);
        set light(value: number);
        set whiteAlpha(value: number);
    }
    /**
     * Vertex consumer that outputs baked quads.
     * 
     * This consumer accepts data in `DefaultVertexFormat#BLOCK` and is not picky about
     * ordering or missing elements, but will not automatically populate missing data (color will be black, for example).
     * 
     * Built quads must be retrieved after building four vertices
     */
    export class $QuadBakingVertexConsumer implements $VertexConsumer {
        setColor(r: number, g: number, b: number, a: number): $VertexConsumer;
        addVertex(x: number, y: number, z: number): $VertexConsumer;
        setUv(u: number, v: number): $VertexConsumer;
        bakeQuad(): $BakedQuad;
        setHasAmbientOcclusion(shade: boolean): void;
        setUv1(u: number, v: number): $VertexConsumer;
        setUv2(u: number, v: number): $VertexConsumer;
        setNormal(x: number, y: number, z: number): $VertexConsumer;
        misc(arg0: $VertexFormatElement_, ...arg1: number[]): $VertexConsumer;
        setDirection(direction: $Direction_): void;
        setTintIndex(tintIndex: number): void;
        setSprite(sprite: $TextureAtlasSprite): void;
        setShade(shade: boolean): void;
        setColor(red: number, green: number, blue: number, alpha: number): $VertexConsumer;
        setColor(packedOverlay: number): $VertexConsumer;
        addVertex(x: number, y: number, z: number, color: number, u: number, v: number, packedOverlay: number, packedLight: number, normalX: number, normalY: number, normalZ: number): void;
        addVertex(pose: $Matrix4f, x: number, y: number, z: number): $VertexConsumer;
        addVertex(pos: $Vector3f): $VertexConsumer;
        addVertex(pose: $PoseStack$Pose, normalX: number, normalY: number, normalZ: number): $VertexConsumer;
        addVertex(pose: $PoseStack$Pose, pos: $Vector3f): $VertexConsumer;
        setOverlay(packedOverlay: number): $VertexConsumer;
        wrapMethod$cop000$sodium$modifyPutBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $Operation_<any>): void;
        wrapMethod$cop000$sodium$modifyPutBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number, arg7: number[], arg8: number, arg9: boolean, arg10: $Operation_<any>): void;
        setLight(packedOverlay: number): $VertexConsumer;
        setNormal(pose: $PoseStack$Pose, normalX: number, normalY: number, normalZ: number): $VertexConsumer;
        setWhiteAlpha(packedOverlay: number): $VertexConsumer;
        putBulkData(pose: $PoseStack$Pose, quad: $BakedQuad, brightness: number[], red: number, green: number, blue: number, alpha: number, lightmap: number[], packedOverlay: number, readAlpha: boolean): void;
        putBulkData(pose: $PoseStack$Pose, quad: $BakedQuad, red: number, green: number, blue: number, alpha: number, packedLight: number, packedOverlay: number): void;
        /**
         * Variant with no per-vertex shading.
         */
        putBulkData(pose: $PoseStack$Pose, bakedQuad: $BakedQuad, red: number, green: number, blue: number, alpha: number, packedLight: number, packedOverlay: number, readExistingColor: boolean): void;
        applyBakedLighting(packedLight: number, data: $ByteBuffer): number;
        applyBakedNormals(generated: $Vector3f, data: $ByteBuffer, normalTransform: $Matrix3f): void;
        constructor();
        set hasAmbientOcclusion(value: boolean);
        set direction(value: $Direction_);
        set tintIndex(value: number);
        set sprite(value: $TextureAtlasSprite);
        set shade(value: boolean);
        set overlay(value: number);
        set light(value: number);
        set whiteAlpha(value: number);
    }
    /**
     * Vertex pipeline element that remaps incoming data to another format.
     */
    export class $RemappingVertexPipeline implements $VertexConsumer {
        setColor(r: number, g: number, b: number, a: number): $VertexConsumer;
        addVertex(x: number, y: number, z: number): $VertexConsumer;
        setUv(u: number, v: number): $VertexConsumer;
        endVertex(): void;
        setUv1(u: number, v: number): $VertexConsumer;
        setUv2(u: number, v: number): $VertexConsumer;
        setNormal(x: number, y: number, z: number): $VertexConsumer;
        misc(arg0: $VertexFormatElement_, ...arg1: number[]): $VertexConsumer;
        setColor(red: number, green: number, blue: number, alpha: number): $VertexConsumer;
        setColor(packedOverlay: number): $VertexConsumer;
        addVertex(x: number, y: number, z: number, color: number, u: number, v: number, packedOverlay: number, packedLight: number, normalX: number, normalY: number, normalZ: number): void;
        addVertex(pose: $Matrix4f, x: number, y: number, z: number): $VertexConsumer;
        addVertex(pos: $Vector3f): $VertexConsumer;
        addVertex(pose: $PoseStack$Pose, normalX: number, normalY: number, normalZ: number): $VertexConsumer;
        addVertex(pose: $PoseStack$Pose, pos: $Vector3f): $VertexConsumer;
        setOverlay(packedOverlay: number): $VertexConsumer;
        wrapMethod$cop000$sodium$modifyPutBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $Operation_<any>): void;
        wrapMethod$cop000$sodium$modifyPutBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number, arg7: number[], arg8: number, arg9: boolean, arg10: $Operation_<any>): void;
        setLight(packedOverlay: number): $VertexConsumer;
        setNormal(pose: $PoseStack$Pose, normalX: number, normalY: number, normalZ: number): $VertexConsumer;
        setWhiteAlpha(packedOverlay: number): $VertexConsumer;
        putBulkData(pose: $PoseStack$Pose, quad: $BakedQuad, brightness: number[], red: number, green: number, blue: number, alpha: number, lightmap: number[], packedOverlay: number, readAlpha: boolean): void;
        putBulkData(pose: $PoseStack$Pose, quad: $BakedQuad, red: number, green: number, blue: number, alpha: number, packedLight: number, packedOverlay: number): void;
        /**
         * Variant with no per-vertex shading.
         */
        putBulkData(pose: $PoseStack$Pose, bakedQuad: $BakedQuad, red: number, green: number, blue: number, alpha: number, packedLight: number, packedOverlay: number, readExistingColor: boolean): void;
        applyBakedLighting(packedLight: number, data: $ByteBuffer): number;
        applyBakedNormals(generated: $Vector3f, data: $ByteBuffer, normalTransform: $Matrix3f): void;
        constructor(parent: $VertexConsumer, targetFormat: $VertexFormat);
        set overlay(value: number);
        set light(value: number);
        set whiteAlpha(value: number);
    }
}
