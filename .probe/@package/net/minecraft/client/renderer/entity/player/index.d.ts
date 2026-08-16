import { $EntityRenderDispatcher, $LivingEntityRenderer, $EntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/entity";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $AbstractClientPlayer } from "@package/net/minecraft/client/player";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $RenderLayer } from "@package/net/minecraft/client/renderer/entity/layers";
import { $List } from "@package/java/util";
import { $PlayerModel } from "@package/net/minecraft/client/model";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $PlayerRendererInvoker } from "@package/com/furiusmax/bjornlib/neo/mixin/client";
import { $ETFPlayerSkinHolder, $ETFPlayerTexture } from "@package/traben/entity_texture_features/features/player";
import { $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/client/renderer/entity/player" {
    export class $PlayerRenderer extends $LivingEntityRenderer<$AbstractClientPlayer, $PlayerModel<$AbstractClientPlayer>> implements $ETFPlayerSkinHolder, $PlayerRendererInvoker {
        scale(livingEntity: $AbstractClientPlayer, poseStack: $PoseStack, partialTickTime: number): void;
        render(entity: $AbstractClientPlayer, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        renderNameTag(entity: $AbstractClientPlayer, displayName: $Component_, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, partialTick: number): void;
        setupRotations(entity: $AbstractClientPlayer, poseStack: $PoseStack, bob: number, yBodyRot: number, partialTick: number, scale: number): void;
        etf$getETFPlayerTexture(): $ETFPlayerTexture;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $AbstractClientPlayer): $ResourceLocation;
        renderRightHand(poseStack: $PoseStack, buffer: $MultiBufferSource_, combinedLight: number, player: $AbstractClientPlayer): void;
        renderLeftHand(poseStack: $PoseStack, buffer: $MultiBufferSource_, combinedLight: number, player: $AbstractClientPlayer): void;
        md66668e$playeranimator$getShadowRadius$0(entity: $Entity): number;
        handler$jcd000$skinlayers3d$setModelProperties(abstractClientPlayer: $AbstractClientPlayer, info: $CallbackInfo): void;
        getRenderOffset(entity: $AbstractClientPlayer, partialTicks: number): $Vec3;
        invokeSetupRotations(entity: $AbstractClientPlayer, poseStack: $PoseStack, bob: number, yBodyRot: number, partialTick: number, scale: number): void;
        invokeScale(livingEntity: $AbstractClientPlayer, poseStack: $PoseStack, partialTickTime: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$AbstractClientPlayer, $PlayerModel<$AbstractClientPlayer>>>;
        shadowStrength: number;
        model: $PlayerModel<$AbstractClientPlayer>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context, useSlimModel: boolean);
    }
}
