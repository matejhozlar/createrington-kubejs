import { $ClipContext$Block_, $Level, $ClipContext$Fluid_, $Level_ } from "@package/net/minecraft/world/level";
import { $MultiBufferSource, $RenderType } from "@package/net/minecraft/client/renderer";
import { $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $ParticleRenderType_, $ParticleRenderType, $Particle } from "@package/net/minecraft/client/particle";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Camera } from "@package/net/minecraft/client";
import { $Comparator, $Map, $Set, $Set_, $Collection_, $List_, $Collection } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $PositionedRect } from "@package/com/lowdragmc/lowdraglib2/math";
import { $Consumer_, $BiConsumer_, $Predicate_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $VertexConsumer, $VertexFormatElement_, $PoseStack, $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $Record } from "@package/java/lang";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Matrix3f, $Matrix4f, $Vector3f } from "@package/org/joml";

declare module "@package/com/lowdragmc/lowdraglib2/client/scene" {
    export class $ISceneBlockRenderHook {
    }
    export interface $ISceneBlockRenderHook {
        apply(arg0: $RenderType): void;
        applyBESR(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockEntity, arg3: $PoseStack, arg4: number): void;
        applyVertexConsumerWrapper(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $WorldSceneRenderer$VertexConsumerWrapper, arg4: $RenderType, arg5: number): void;
    }
    export class $ISceneEntityRenderHook {
    }
    export interface $ISceneEntityRenderHook {
        applyEntity(arg0: $Level_, arg1: $Entity, arg2: $PoseStack, arg3: number): void;
    }
    export class $WorldSceneRenderer {
        setOnLookingAt(arg0: $Consumer_<$BlockHitResult>): $WorldSceneRenderer;
        setFov(arg0: number): $WorldSceneRenderer;
        render(arg0: $PoseStack, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        getLookAt(): $Vector3f;
        getWorldUp(): $Vector3f;
        unProject(arg0: number, arg1: number, arg2: boolean): $Vector3f;
        unProject(arg0: number, arg1: number): $Vector3f;
        getLastHit(): $Vector3f;
        setBeforeWorldRender(arg0: $Consumer_<$WorldSceneRenderer>): $WorldSceneRenderer;
        setAfterWorldRender(arg0: $Consumer_<$WorldSceneRenderer>): $WorldSceneRenderer;
        removeRenderedBlocks(arg0: $Collection_<$BlockPos_>): $WorldSceneRenderer;
        setBlocked(arg0: $Set_<$BlockPos_>): $WorldSceneRenderer;
        getFov(): number;
        useOrtho(arg0: boolean): $WorldSceneRenderer;
        getEyePos(): $Vector3f;
        isUseCache(): boolean;
        getParticleManager(): $ParticleManager;
        releaseResource(): void;
        setCameraLookAt(arg0: $Vector3f, arg1: $Vector3f, arg2: $Vector3f): void;
        setCameraLookAt(arg0: $Vector3f, arg1: number, arg2: number, arg3: number): void;
        needCompileCache(): $WorldSceneRenderer;
        useCacheBuffer(arg0: boolean): $WorldSceneRenderer;
        setCameraOrtho(arg0: number, arg1: number, arg2: number): void;
        setCameraOrtho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        syncCompile(arg0: boolean): $WorldSceneRenderer;
        setClipBlock(arg0: $ClipContext$Block_): $WorldSceneRenderer;
        addRenderedBlocks(arg0: $Collection_<$BlockPos_>, arg1: $ISceneBlockRenderHook): $WorldSceneRenderer;
        isCompiling(): boolean;
        setClipFluid(arg0: $ClipContext$Fluid_): $WorldSceneRenderer;
        setBeforeBatchEnd(arg0: $BiConsumer_<$MultiBufferSource, number>): $WorldSceneRenderer;
        setParticleManager(arg0: $ParticleManager): $WorldSceneRenderer;
        getCompileProgress(): number;
        isSyncCompile(): boolean;
        getLastTraceResult(): $BlockHitResult;
        rayTrace(arg0: $Vector3f): $BlockHitResult;
        project(arg0: $Vector3f): $Vector3f;
        isEndBatchLast(): boolean;
        deleteCacheBuffer(): $WorldSceneRenderer;
        getPositionedRect(arg0: number, arg1: number, arg2: number, arg3: number): $PositionedRect;
        setEndBatchLast(arg0: boolean): $WorldSceneRenderer;
        getSyncCompileMaxBlocksPerFrame(): number;
        setSyncCompileTimeBudgetNanos(arg0: number): $WorldSceneRenderer;
        setSyncCompileMaxBlocksPerFrame(arg0: number): $WorldSceneRenderer;
        getSyncCompileTimeBudgetNanos(): number;
        setSceneEntityRenderHook(arg0: $ISceneEntityRenderHook): $WorldSceneRenderer;
        getPositionRectRevert(arg0: number, arg1: number, arg2: number, arg3: number): $PositionedRect;
        removeAllRenderedBlocks(): $WorldSceneRenderer;
        static setDefaultRenderLayerState(arg0: $RenderType): void;
        world: $Level;
        renderedBlocksMap: $Map<$Collection<$BlockPos>, $WorldSceneRenderer$RenderedBlocksEntry>;
        constructor(arg0: $Level_);
        set onLookingAt(value: $Consumer_<$BlockHitResult>);
        get lookAt(): $Vector3f;
        get worldUp(): $Vector3f;
        get lastHit(): $Vector3f;
        set beforeWorldRender(value: $Consumer_<$WorldSceneRenderer>);
        set afterWorldRender(value: $Consumer_<$WorldSceneRenderer>);
        set blocked(value: $Set_<$BlockPos_>);
        get eyePos(): $Vector3f;
        get useCache(): boolean;
        set clipBlock(value: $ClipContext$Block_);
        get compiling(): boolean;
        set clipFluid(value: $ClipContext$Fluid_);
        set beforeBatchEnd(value: $BiConsumer_<$MultiBufferSource, number>);
        get compileProgress(): number;
        get lastTraceResult(): $BlockHitResult;
        set sceneEntityRenderHook(value: $ISceneEntityRenderHook);
        static set defaultRenderLayerState(value: $RenderType);
    }
    export class $WorldSceneRenderer$RenderedBlocksEntry extends $Record {
        snapshot(): $Set<$BlockPos>;
        hook(): $ISceneBlockRenderHook;
        constructor(snapshot: $Set_<$BlockPos_>, hook: $ISceneBlockRenderHook);
    }
    /**
     * Values that may be interpreted as {@link $WorldSceneRenderer$RenderedBlocksEntry}.
     */
    export type $WorldSceneRenderer$RenderedBlocksEntry_ = { hook?: $ISceneBlockRenderHook, snapshot?: $Set_<$BlockPos_>,  } | [hook?: $ISceneBlockRenderHook, snapshot?: $Set_<$BlockPos_>, ];
    export class $WorldSceneRenderer$VertexConsumerWrapper implements $VertexConsumer {
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        addOffset(arg0: number, arg1: number, arg2: number): void;
        addVertex(arg0: number, arg1: number, arg2: number): $VertexConsumer;
        setUv(arg0: number, arg1: number): $VertexConsumer;
        setOffsetX(arg0: number): $WorldSceneRenderer$VertexConsumerWrapper;
        setOffsetY(arg0: number): $WorldSceneRenderer$VertexConsumerWrapper;
        setUv1(arg0: number, arg1: number): $VertexConsumer;
        setUv2(arg0: number, arg1: number): $VertexConsumer;
        setNormal(arg0: number, arg1: number, arg2: number): $VertexConsumer;
        clearOffset(): void;
        clearColor(): void;
        setColorMultiplier(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setOffsetZ(arg0: number): $WorldSceneRenderer$VertexConsumerWrapper;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        setColor(arg0: number): $VertexConsumer;
        addVertex(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        addVertex(arg0: $Matrix4f, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        addVertex(arg0: $Vector3f): $VertexConsumer;
        addVertex(arg0: $PoseStack$Pose, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        addVertex(arg0: $PoseStack$Pose, arg1: $Vector3f): $VertexConsumer;
        setOverlay(arg0: number): $VertexConsumer;
        wrapMethod$cop000$sodium$modifyPutBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $Operation_<any>): void;
        wrapMethod$cop000$sodium$modifyPutBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number, arg7: number[], arg8: number, arg9: boolean, arg10: $Operation_<any>): void;
        setLight(arg0: number): $VertexConsumer;
        setNormal(arg0: $PoseStack$Pose, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        setWhiteAlpha(arg0: number): $VertexConsumer;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number, arg7: number[], arg8: number, arg9: boolean): void;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        misc(arg0: $VertexFormatElement_, ...arg1: number[]): $VertexConsumer;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean): void;
        applyBakedLighting(arg0: number, arg1: $ByteBuffer): number;
        applyBakedNormals(arg0: $Vector3f, arg1: $ByteBuffer, arg2: $Matrix3f): void;
        constructor(arg0: $VertexConsumer);
        set offsetX(value: number);
        set offsetY(value: number);
        set offsetZ(value: number);
        set overlay(value: number);
        set light(value: number);
        set whiteAlpha(value: number);
    }
    export class $ParticleManager {
        tick(): void;
        setLevel(arg0: $Level_): void;
        render(arg0: $PoseStack, arg1: $Camera, arg2: number, arg3: $Predicate_<$ParticleRenderType>): void;
        addParticle(arg0: $Particle): void;
        getParticleAmount(): number;
        clearAllParticles(): void;
        static makeParticleRenderTypeComparator(arg0: $List_<$ParticleRenderType_>): $Comparator<$ParticleRenderType>;
        level: $Level;
        constructor();
        get particleAmount(): number;
    }
}
