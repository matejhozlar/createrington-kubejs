import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";
export * as structures from "@package/com/furiusmax/bjornlib/neo/mixin/structures";
export * as client from "@package/com/furiusmax/bjornlib/neo/mixin/client";

declare module "@package/com/furiusmax/bjornlib/neo/mixin" {
    export class $LimbAnimatorAccessor {
    }
    export interface $LimbAnimatorAccessor {
        setPos(arg0: number): void;
        setPrevSpeed(arg0: number): void;
        getPrevSpeed(): number;
        set pos(value: number);
    }
    export class $EntityAccessor {
    }
    export interface $EntityAccessor {
        setVehicle(arg0: $Entity): void;
        shape_callSetFlag(arg0: number, arg1: boolean): void;
        setPassengers(arg0: $ImmutableList<$Entity>): void;
        setTouchingWater(arg0: boolean): void;
        callGetEncodeId(): string;
        shape_callPlayStepSound(arg0: $BlockPos_, arg1: $BlockState_): void;
        set vehicle(value: $Entity);
        set passengers(value: $ImmutableList<$Entity>);
        set touchingWater(value: boolean);
    }
    export class $LivingEntityAccessor {
    }
    export interface $LivingEntityAccessor {
        isJumping(): boolean;
        callCalculateFallDamage(arg0: number, arg1: number): number;
        callUpdatingUsingItem(): void;
        callPlayBlockFallSound(): void;
        callSetLivingEntityFlag(arg0: number, arg1: boolean): void;
        getSwimAmount(): number;
        callGetHurtSound(arg0: $DamageSource_): $SoundEvent;
        callGetDeathSound(): $SoundEvent;
        setSwimAmount(arg0: number): void;
        setSwimAmountO(arg0: number): void;
        getSwimAmountO(): number;
        callGetVoicePitch(): number;
        callGetSoundVolume(): number;
        get jumping(): boolean;
    }
}
