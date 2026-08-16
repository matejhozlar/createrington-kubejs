import { $FramebufferRenderTargetAccessor } from "@package/foundry/veil/mixin/framebuffer/accessor";
import { $ConcurrentLinkedQueue } from "@package/java/util/concurrent";
import { $CallbackInfoReturnable, $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $AdvancedFbo } from "@package/foundry/veil/api/client/render/framebuffer";
import { $Blaze3dRenderTargetExt } from "@package/net/irisshaders/iris/targets";
import { $Enum } from "@package/java/lang";
import { $RenderTargetExtension, $PerformanceRenderTargetExtension } from "@package/foundry/veil/ext";

declare module "@package/com/mojang/blaze3d/pipeline" {
    export class $MainTarget$AttachmentState extends $Enum<$MainTarget$AttachmentState> {
    }
    /**
     * Values that may be interpreted as {@link $MainTarget$AttachmentState}.
     */
    export type $MainTarget$AttachmentState_ = "none" | "color" | "depth" | "color_depth";
    export class $RenderCall {
    }
    export interface $RenderCall {
        execute(): void;
    }
    /**
     * Values that may be interpreted as {@link $RenderCall}.
     */
    export type $RenderCall_ = (() => void);
    export class $RenderTarget implements $Blaze3dRenderTargetExt, $FramebufferRenderTargetAccessor, $PerformanceRenderTargetExtension, $RenderTargetExtension {
        clear(useDepth: boolean): void;
        resize(width: number, height: number, disableBlend: boolean): void;
        unbindRead(): void;
        bindRead(): void;
        copyDepthFrom(otherTarget: $RenderTarget): void;
        setFilterMode(filterMode: number): void;
        createBuffers(width: number, height: number, disableBlend: boolean): void;
        getDepthTextureId(): number;
        isStencilEnabled(): boolean;
        getColorTextureId(): number;
        enableStencil(): void;
        veil$getTexture(arg0: number): number;
        veil$setWrapper(arg0: $AdvancedFbo): void;
        iris$getDepthBufferVersion(): number;
        handler$ben000$veil$clear(arg0: boolean, arg1: $CallbackInfo): void;
        veil$clearColorBuffer(useDepth: boolean): void;
        iris$getColorBufferVersion(): number;
        bindWrite(useDepth: boolean): void;
        blitToScreen(width: number, height: number): void;
        blitToScreen(width: number, height: number, disableBlend: boolean): void;
        unbindWrite(): void;
        destroyBuffers(): void;
        handler$ben000$veil$copyDepthFrom(arg0: $RenderTarget, arg1: $CallbackInfo): void;
        handler$bfg000$veil$bindRead(arg0: $CallbackInfo): void;
        handler$bfg000$veil$bindWrite(arg0: boolean, arg1: $CallbackInfo): void;
        handler$coh000$sodium$blitToScreen(arg0: number, arg1: number, arg2: boolean, arg3: $CallbackInfo): void;
        handler$bfg000$veil$createBuffers(arg0: $CallbackInfo): void;
        handler$bfg000$veil$destroyBuffers(arg0: $CallbackInfo): void;
        setClearColor(red: number, green: number, blue: number, alpha: number): void;
        checkStatus(): void;
        handler$bfg000$veil$getDepthTextureId(arg0: $CallbackInfoReturnable<any>): void;
        handler$bfg000$veil$getColorTextureId(arg0: $CallbackInfoReturnable<any>): void;
        getClearChannels(): number[];
        useDepth: boolean;
        filterMode: number;
        viewWidth: number;
        frameBufferId: number;
        width: number;
        viewHeight: number;
        height: number;
        constructor(useDepth: boolean);
        get depthTextureId(): number;
        get stencilEnabled(): boolean;
        get colorTextureId(): number;
        get clearChannels(): number[];
    }
    export class $MainTarget extends $RenderTarget {
        useDepth: boolean;
        filterMode: number;
        static DEFAULT_HEIGHT: number;
        viewWidth: number;
        frameBufferId: number;
        width: number;
        viewHeight: number;
        static DEFAULT_WIDTH: number;
        height: number;
        constructor(width: number, height: number);
    }
    export class $RenderPipeline {
        beginRecording(): boolean;
        endRecording(): void;
        recordRenderCall(renderCall: $RenderCall_): void;
        getRecordingQueue(): $ConcurrentLinkedQueue<$RenderCall>;
        getProcessedQueue(): $ConcurrentLinkedQueue<$RenderCall>;
        processRecordedQueue(): void;
        beginProcessing(): boolean;
        endProcessing(): void;
        canBeginProcessing(): boolean;
        canBeginRecording(): boolean;
        startRendering(): $ConcurrentLinkedQueue<$RenderCall>;
        constructor();
        get recordingQueue(): $ConcurrentLinkedQueue<$RenderCall>;
        get processedQueue(): $ConcurrentLinkedQueue<$RenderCall>;
    }
    export class $MainTarget$Dimension {
    }
    export class $TextureTarget extends $RenderTarget {
        useDepth: boolean;
        filterMode: number;
        viewWidth: number;
        frameBufferId: number;
        width: number;
        viewHeight: number;
        height: number;
        constructor(width: number, height: number, useDepth: boolean, clearError: boolean);
    }
}
