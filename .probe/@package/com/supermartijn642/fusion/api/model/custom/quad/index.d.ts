import { $Consumer_ } from "@package/java/util/function";
import { $Direction } from "@package/net/minecraft/core";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $AutoCloseable } from "@package/java/lang";
import { $Vector3f, $Vector3fc } from "@package/org/joml";

declare module "@package/com/supermartijn642/fusion/api/model/custom/quad" {
    export class $QuadAccess {
        static create(quad: $BakedQuad): $QuadAccess;
    }
    export interface $QuadAccess {
        position(vertexIndex: number): $Vector3fc;
        x(vertexIndex: number): number;
        v(vertexIndex: number): number;
        z(vertexIndex: number): number;
        u(vertexIndex: number): number;
        y(vertexIndex: number): number;
        facing(): $Direction;
        tintIndex(): number;
        copyPosition(vertexIndex: number, dest: $Vector3f): $Vector3fc;
        chunkRenderType(): $RenderType;
        toBakedQuad(): $BakedQuad;
        itemRenderType(): $RenderType;
        lightEmission(): number;
        sprite(): $TextureAtlasSprite;
        ambientOcclusion(): boolean;
        emissive(): boolean;
        shade(): boolean;
    }
    export class $EmittableQuad$Popper {
    }
    export interface $EmittableQuad$Popper extends $AutoCloseable {
        close(): void;
        popTransform(): void;
    }
    /**
     * Values that may be interpreted as {@link $EmittableQuad$Popper}.
     */
    export type $EmittableQuad$Popper_ = (() => void);
    export class $EmittableQuad$Transform {
    }
    export interface $EmittableQuad$Transform {
        transform(quad: $EmittableQuad): void;
    }
    /**
     * Values that may be interpreted as {@link $EmittableQuad$Transform}.
     */
    export type $EmittableQuad$Transform_ = ((quad: $EmittableQuad) => void);
    export class $EmittableQuad {
        static create(emitter: $Consumer_<$MutableQuad>): $EmittableQuad;
    }
    export interface $EmittableQuad extends $MutableQuad {
        emit(): void;
        pushTransform(transform: $EmittableQuad$Transform_): $EmittableQuad$Popper;
    }
    export class $MutableQuad {
        static create(): $MutableQuad;
        static create(quad: $BakedQuad): $MutableQuad;
    }
    export interface $MutableQuad extends $QuadAccess {
        position(vertexIndex: number, x: number, y: number, z: number): $MutableQuad;
        position(vertexIndex: number, position: $Vector3fc): $MutableQuad;
        copyFrom(quad: $QuadAccess): $MutableQuad;
        tintIndex(tintIndex: number): $MutableQuad;
        chunkRenderType(chunkRenderType: $RenderType): $MutableQuad;
        /**
         * @deprecated
         */
        itemRenderType(itemRenderType: $RenderType): $MutableQuad;
        uv(vertexIndex: number, u: number, v: number): $MutableQuad;
        lightEmission(lightEmission: number): $MutableQuad;
        sprite(sprite: $TextureAtlasSprite): $MutableQuad;
        ambientOcclusion(ambientOcclusion: boolean): $MutableQuad;
        /**
         * @deprecated
         */
        renderTypes(chunkRenderType: $RenderType, itemRenderType: $RenderType): $MutableQuad;
        copyBakedQuad(quad: $BakedQuad): $MutableQuad;
        createCopy(): $MutableQuad;
        emissive(emissive: boolean): $MutableQuad;
        shade(shade: boolean): $MutableQuad;
    }
}
