import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $AbstractClientPlayer } from "@package/net/minecraft/client/player";
import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $LivingEntity } from "@package/net/minecraft/world/entity";

declare module "@package/com/furiusmax/bjornlib/neo/mixin/client" {
    export class $LivingEntityRendererAccessor {
    }
    export interface $LivingEntityRendererAccessor {
        callGetRenderType(arg0: $LivingEntity, arg1: boolean, arg2: boolean, arg3: boolean): $RenderType;
    }
    /**
     * Values that may be interpreted as {@link $LivingEntityRendererAccessor}.
     */
    export type $LivingEntityRendererAccessor_ = ((arg0: $LivingEntity, arg1: boolean, arg2: boolean, arg3: boolean) => $RenderType);
    export class $PlayerRendererInvoker {
    }
    export interface $PlayerRendererInvoker {
        invokeSetupRotations(arg0: $AbstractClientPlayer, arg1: $PoseStack, arg2: number, arg3: number, arg4: number, arg5: number): void;
        invokeScale(arg0: $AbstractClientPlayer, arg1: $PoseStack, arg2: number): void;
    }
    export class $QuadrupedModelAccessor {
    }
    export interface $QuadrupedModelAccessor {
        getLeftFrontLeg(): $ModelPart;
        getRightFrontLeg(): $ModelPart;
        get leftFrontLeg(): $ModelPart;
        get rightFrontLeg(): $ModelPart;
    }
}
