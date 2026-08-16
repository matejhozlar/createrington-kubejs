import { $Level } from "@package/net/minecraft/world/level";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $RenderType, $MultiBufferSource_, $MultiBufferSource } from "@package/net/minecraft/client/renderer";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $EntityType, $Entity, $Pose } from "@package/net/minecraft/world/entity";
import { $UUID, $LinkedHashMap } from "@package/java/util";
import { $ETFEntityRenderState } from "@package/traben/entity_texture_features/features/state";
import { $ETFTexture } from "@package/traben/entity_texture_features/features/texture_handlers";
import { $BlockPos } from "@package/net/minecraft/core";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Team } from "@package/net/minecraft/world/scores";
import { $Iterable } from "@package/java/lang";
import { $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/traben/entity_texture_features/utils" {
    export class $ETFLruCache$UUIDInteger extends $ETFLruCache<$UUID, number> {
        constructor();
        constructor(capacity: number);
    }
    export class $ETFRenderLayerWithTexture {
    }
    export interface $ETFRenderLayerWithTexture {
        etf$getId(): ($ResourceLocation) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $ETFRenderLayerWithTexture}.
     */
    export type $ETFRenderLayerWithTexture_ = (() => ($ResourceLocation_) | undefined);
    export class $ETFLruCache<X, Y> extends $LinkedHashMap<X, Y> {
        defaultReturnValue(value: Y): void;
        removeEntryOnly(key: X): void;
        constructor();
        constructor(capacity: number);
    }
    export class $ETFEntity {
    }
    export interface $ETFEntity {
        etf$getETFRenderState(): $ETFEntityRenderState;
        etf$getScoreboardTeam(): $Team;
        etf$getOptifineVehicleId(): number;
        etf$getItemsEquipped(): $Iterable<$ItemStack>;
        etf$getType(): $EntityType<never>;
        etf$getCustomName(): $Component;
        etf$distanceTo(arg0: $Entity): number;
        etf$getVelocity(): $Vec3;
        /**
         * @deprecated
         */
        etf$getPose(): $Pose;
        etf$getEntityKey(): string;
        etf$getUuid(): $UUID;
        etf$isBlockEntity(): boolean;
        etf$canBeBright(): boolean;
        etf$getBlockPos(): $BlockPos;
        etf$getBlockY(): number;
        etf$getArmorItems(): $Iterable<$ItemStack>;
        etf$getWorld(): $Level;
        etf$getOptifineId(): number;
        etf$getHandItems(): $Iterable<$ItemStack>;
        etf$hasCustomName(): boolean;
        etf$getNbt(): $CompoundTag;
    }
    export class $ETFVertexConsumer {
    }
    export interface $ETFVertexConsumer {
        etf$getETFTexture(): $ETFTexture;
        etf$getRenderLayer(): $RenderType;
        etf$getProvider(): $MultiBufferSource;
        etf$initETFVertexConsumer(arg0: $MultiBufferSource_, arg1: $RenderType): void;
    }
}
