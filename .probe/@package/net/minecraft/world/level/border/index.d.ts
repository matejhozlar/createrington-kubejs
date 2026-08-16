import { $ChunkPos, $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $WorldBorderExtension } from "@package/dev/ryanhcode/sable/mixinterface/world_border";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $DynamicLike } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $Enum } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $Vec3_, $AABB_ } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/level/border" {
    export class $BorderChangeListener$DelegateBorderChangeListener implements $BorderChangeListener {
        onBorderSizeLerping(border: $WorldBorder, oldSize: number, arg2: number, newSize: number): void;
        onBorderSetDamageSafeZOne(border: $WorldBorder, newAmount: number): void;
        onBorderSetDamagePerBlock(border: $WorldBorder, newAmount: number): void;
        onBorderSetWarningTime(border: $WorldBorder, newDistance: number): void;
        onBorderSetWarningBlocks(border: $WorldBorder, newDistance: number): void;
        onBorderSizeSet(border: $WorldBorder, newAmount: number): void;
        onBorderCenterSet(border: $WorldBorder, x: number, arg2: number): void;
        constructor(worldBorder: $WorldBorder);
    }
    export class $WorldBorder$MovingBorderExtent implements $WorldBorder$BorderExtent {
    }
    export class $BorderStatus extends $Enum<$BorderStatus> {
        static values(): $BorderStatus[];
        static valueOf(arg0: string): $BorderStatus;
        /**
         * Retrieves the color that the border should be, while in this state.
         */
        getColor(): number;
        static GROWING: $BorderStatus;
        static SHRINKING: $BorderStatus;
        static STATIONARY: $BorderStatus;
        get color(): number;
    }
    /**
     * Values that may be interpreted as {@link $BorderStatus}.
     */
    export type $BorderStatus_ = "growing" | "shrinking" | "stationary";
    export class $BorderChangeListener {
    }
    export interface $BorderChangeListener {
        onBorderSizeLerping(border: $WorldBorder, oldSize: number, arg2: number, newSize: number): void;
        onBorderSetDamageSafeZOne(border: $WorldBorder, damagePerBlock: number): void;
        onBorderSetDamagePerBlock(border: $WorldBorder, damagePerBlock: number): void;
        onBorderSetWarningTime(border: $WorldBorder, warningBlocks: number): void;
        onBorderSetWarningBlocks(border: $WorldBorder, warningBlocks: number): void;
        onBorderSizeSet(border: $WorldBorder, damagePerBlock: number): void;
        onBorderCenterSet(border: $WorldBorder, x: number, arg2: number): void;
    }
    export class $WorldBorder$StaticBorderExtent implements $WorldBorder$BorderExtent {
    }
    export class $WorldBorder$Settings {
        write(nbt: $CompoundTag_): void;
        static read(dynamic: $DynamicLike<never>, defaultValue: $WorldBorder$Settings): $WorldBorder$Settings;
        getSize(): number;
        getDamagePerBlock(): number;
        getCenterX(): number;
        getCenterZ(): number;
        getWarningBlocks(): number;
        getWarningTime(): number;
        getSafeZone(): number;
        getSizeLerpTime(): number;
        getSizeLerpTarget(): number;
        constructor(centerX: number, arg1: number, centerZ: number, arg3: number, damagePerBlock: number, arg5: number, safeZone: number, arg7: number, warningBlocks: number);
        constructor(border: $WorldBorder);
        get size(): number;
        get damagePerBlock(): number;
        get centerX(): number;
        get centerZ(): number;
        get warningBlocks(): number;
        get warningTime(): number;
        get safeZone(): number;
        get sizeLerpTime(): number;
        get sizeLerpTarget(): number;
    }
    export class $WorldBorder$BorderExtent {
    }
    export interface $WorldBorder$BorderExtent {
        update(): $WorldBorder$BorderExtent;
        getSize(): number;
        getLerpRemainingTime(): number;
        onAbsoluteMaxSizeChange(): void;
        getStatus(): $BorderStatus;
        getMinZ(): number;
        getMinX(): number;
        getMaxX(): number;
        getMaxZ(): number;
        getCollisionShape(): $VoxelShape;
        onCenterChange(): void;
        getLerpTarget(): number;
        getLerpSpeed(): number;
        get size(): number;
        get lerpRemainingTime(): number;
        get status(): $BorderStatus;
        get minZ(): number;
        get minX(): number;
        get maxX(): number;
        get maxZ(): number;
        get collisionShape(): $VoxelShape;
        get lerpTarget(): number;
        get lerpSpeed(): number;
    }
    export class $WorldBorder implements $WorldBorderExtension {
        getSize(): number;
        tick(): void;
        setSize(damagePerBlock: number): void;
        handler$hjb000$sable$isInsideCloseToBorder(arg0: $Entity, arg1: $AABB_, arg2: $CallbackInfoReturnable<any>): void;
        handler$hjb000$sable$isWithinBounds(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfoReturnable<any>): void;
        getLerpRemainingTime(): number;
        getStatus(): $BorderStatus;
        addListener(listener: $BorderChangeListener): void;
        setCenter(x: number, arg1: number): void;
        getMinZ(): number;
        getMinX(): number;
        getMaxX(): number;
        getMaxZ(): number;
        getCollisionShape(): $VoxelShape;
        sable$setLevel(arg0: $Level_): void;
        removeListener(listener: $BorderChangeListener): void;
        getListeners(): $List<$BorderChangeListener>;
        getDistanceToBorder(x: number, arg1: number): number;
        getDistanceToBorder(entity: $Entity): number;
        getDamageSafeZone(): number;
        getDamagePerBlock(): number;
        setAbsoluteMaxSize(size: number): void;
        isInsideCloseToBorder(entity: $Entity, bounds: $AABB_): boolean;
        isWithinBounds(x: number, arg1: number): boolean;
        isWithinBounds(pos: $BlockPos_): boolean;
        isWithinBounds(box: $AABB_): boolean;
        isWithinBounds(pos: $Vec3_): boolean;
        isWithinBounds(chunkPos: $ChunkPos): boolean;
        isWithinBounds(x: number, arg1: number, z: number): boolean;
        clampToBounds(pos: $BlockPos_): $BlockPos;
        clampToBounds(pos: $Vec3_): $BlockPos;
        clampToBounds(x: number, arg1: number, y: number): $BlockPos;
        wrapOperation$chb000$lithium$getUpdatedArea(arg0: $WorldBorder$BorderExtent, arg1: $Operation_<any>): $WorldBorder$BorderExtent;
        getCenterX(): number;
        getCenterZ(): number;
        applySettings(serializer: $WorldBorder$Settings): void;
        getAbsoluteMaxSize(): number;
        getWarningBlocks(): number;
        getLerpTarget(): number;
        getWarningTime(): number;
        lerpSizeBetween(oldSize: number, arg1: number, newSize: number): void;
        setWarningTime(size: number): void;
        setDamagePerBlock(damagePerBlock: number): void;
        setWarningBlocks(size: number): void;
        getLerpSpeed(): number;
        setDamageSafeZone(damagePerBlock: number): void;
        createSettings(): $WorldBorder$Settings;
        absoluteMaxSize: number;
        static DEFAULT_SETTINGS: $WorldBorder$Settings;
        static MAX_SIZE: number;
        static MAX_CENTER_COORDINATE: number;
        constructor();
        get lerpRemainingTime(): number;
        get status(): $BorderStatus;
        get minZ(): number;
        get minX(): number;
        get maxX(): number;
        get maxZ(): number;
        get collisionShape(): $VoxelShape;
        get listeners(): $List<$BorderChangeListener>;
        get centerX(): number;
        get centerZ(): number;
        get lerpTarget(): number;
        get lerpSpeed(): number;
    }
}
