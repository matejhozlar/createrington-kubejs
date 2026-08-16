import { $RenderType, $MultiBufferSource } from "@package/net/minecraft/client/renderer";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";

declare module "@package/net/createmod/catnip/render" {
    export class $SpriteShiftEntry {
        set(arg0: $ResourceLocation_, arg1: $ResourceLocation_): void;
        getTarget(): $TextureAtlasSprite;
        getOriginalResourceLocation(): $ResourceLocation;
        getOriginal(): $TextureAtlasSprite;
        static getUnInterpolatedV(arg0: $TextureAtlasSprite, arg1: number): number;
        static getUnInterpolatedU(arg0: $TextureAtlasSprite, arg1: number): number;
        getTargetU(arg0: number): number;
        getTargetV(arg0: number): number;
        getTargetResourceLocation(): $ResourceLocation;
        constructor();
        get target(): $TextureAtlasSprite;
        get originalResourceLocation(): $ResourceLocation;
        get original(): $TextureAtlasSprite;
        get targetResourceLocation(): $ResourceLocation;
    }
    export class $BindableTexture {
    }
    export interface $BindableTexture {
        getLocation(): $ResourceLocation;
        bind(): void;
        get location(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $BindableTexture}.
     */
    export type $BindableTexture_ = (() => $ResourceLocation_);
    export class $SuperRenderTypeBuffer {
    }
    export interface $SuperRenderTypeBuffer extends $MultiBufferSource {
        getBuffer(arg0: $RenderType): $VertexConsumer;
        draw(arg0: $RenderType): void;
        draw(): void;
        getLateBuffer(arg0: $RenderType): $VertexConsumer;
        getEarlyBuffer(arg0: $RenderType): $VertexConsumer;
    }
}
