import { $BlockPos_, $Position, $SectionPos } from "@package/net/minecraft/core";
import { $CullFrustum } from "@package/foundry/veil/api/client/render";
import { $ViewportProvider, $Viewport } from "@package/net/caffeinemc/mods/sodium/client/render/viewport";
import { $FrustumExtension } from "@package/foundry/veil/ext";
import { $AABB_ } from "@package/net/minecraft/world/phys";
import { $Matrix4fc, $Matrix4f, $Vector2dc, $Vector4fc, $Vector3dc, $Vector3ic, $Vector2fc, $Vector3fc } from "@package/org/joml";

declare module "@package/net/minecraft/client/renderer/culling" {
    export class $Frustum implements $FrustumExtension, $CullFrustum, $ViewportProvider {
        prepare(camX: number, arg1: number, camY: number): void;
        getPosition(): $Vector3dc;
        isVisible(aabb: $AABB_): boolean;
        offsetToFullyIncludeCameraCube(offset: number): $Frustum;
        getModelViewProjectionMatrix(): $Matrix4fc;
        getViewVector(): $Vector3fc;
        sodium$createViewport(): $Viewport;
        testPlaneXZ(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        veil$setupFrustum(arg0: $Matrix4fc, arg1: $Matrix4fc): void;
        testPlaneXY(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        testLineSegment(minX: number, arg1: number, minY: number, arg3: number, minZ: number, arg5: number): boolean;
        testAab(minX: number, arg1: number, minY: number, arg3: number, minZ: number, arg5: number): boolean;
        testAab(aabb: $AABB_): boolean;
        testSphere(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        testPoint(arg0: number, arg1: number, arg2: number): boolean;
        getPlanes(): $Vector4fc[];
        toFrustum(): $Frustum;
        testSection(arg0: $SectionPos): boolean;
        testPlaneXZ(arg0: $Vector2dc, arg1: $Vector2dc): boolean;
        testPlaneXZ(arg0: $Vector2fc, arg1: $Vector2fc): boolean;
        testPlaneXY(arg0: $Vector2dc, arg1: $Vector2dc): boolean;
        testPlaneXY(arg0: $Vector2fc, arg1: $Vector2fc): boolean;
        testLineSegment(arg0: $Vector3dc, arg1: $Vector3dc): boolean;
        testLineSegment(arg0: $Vector3fc, arg1: $Vector3fc): boolean;
        testAab(arg0: $Vector3dc, arg1: $Vector3dc): boolean;
        testAab(arg0: $Vector3fc, arg1: $Vector3fc): boolean;
        testSphere(arg0: $Vector3fc, arg1: number): boolean;
        testSphere(arg0: $Vector3dc, arg1: number): boolean;
        testPoint(arg0: $Vector3ic): boolean;
        testPoint(arg0: $Position): boolean;
        testPoint(arg0: $Vector3fc): boolean;
        testPoint(arg0: $Vector3dc): boolean;
        testBlock(arg0: $BlockPos_): boolean;
        static OFFSET_STEP: number;
        constructor(frustum: $Matrix4f, projection: $Matrix4f);
        constructor(other: $Frustum);
        get position(): $Vector3dc;
        get modelViewProjectionMatrix(): $Matrix4fc;
        get viewVector(): $Vector3fc;
        get planes(): $Vector4fc[];
    }
}
