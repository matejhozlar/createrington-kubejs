import { $Level_ } from "@package/net/minecraft/world/level";
import { $KineticNetworkAccessor } from "@package/com/hlysine/create_connected/mixin/kineticbattery";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $FlywheelAccessibleKineticNetwork } from "@package/com/kipti/bnb/mixin_accessor";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $KineticBlockEntity } from "@package/com/simibubi/create/content/kinetics/base";
import { $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Map } from "@package/java/util";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as base from "@package/com/simibubi/create/content/kinetics/base";
export * as press from "@package/com/simibubi/create/content/kinetics/press";
export * as fan from "@package/com/simibubi/create/content/kinetics/fan";
export * as transmission from "@package/com/simibubi/create/content/kinetics/transmission";
export * as mechanicalArm from "@package/com/simibubi/create/content/kinetics/mechanicalArm";
export * as chainConveyor from "@package/com/simibubi/create/content/kinetics/chainConveyor";
export * as belt from "@package/com/simibubi/create/content/kinetics/belt";
export * as deployer from "@package/com/simibubi/create/content/kinetics/deployer";

declare module "@package/com/simibubi/create/content/kinetics" {
    export class $KineticNetwork implements $KineticNetworkAccessor, $FlywheelAccessibleKineticNetwork {
        remove(arg0: $KineticBlockEntity): void;
        add(arg0: $KineticBlockEntity): void;
        getSize(): number;
        sync(): void;
        calculateCapacity(): number;
        handler$hal000$bits_n_bobs$addSilently(arg0: $KineticBlockEntity, arg1: number, arg2: number, arg3: $CallbackInfo): void;
        initFromTE(arg0: number, arg1: number, arg2: number): void;
        addSilently(arg0: $KineticBlockEntity, arg1: number, arg2: number): void;
        updateNetwork(): void;
        updateStressFor(arg0: $KineticBlockEntity, arg1: number): void;
        updateCapacityFor(arg0: $KineticBlockEntity, arg1: number): void;
        updateStress(): void;
        bits_n_bobs$updateFlywheelStresses(): void;
        handler$hal000$bits_n_bobs$add(arg0: $KineticBlockEntity, arg1: $CallbackInfo): void;
        handler$hal000$bits_n_bobs$remove(arg0: $KineticBlockEntity, arg1: $CallbackInfo): void;
        getActualCapacityOf(arg0: $KineticBlockEntity): number;
        calculateStress(): number;
        getActualStressOf(arg0: $KineticBlockEntity): number;
        updateCapacity(): void;
        wrapOperation$ikb000$petrolpark$checkCompositeKBEsMatchPos(arg0: $Level_, arg1: $BlockPos_, arg2: $Operation_<any>, arg3: $KineticBlockEntity): $BlockEntity;
        wrapOperation$ikb000$petrolpark$checkCompositeKBEsMatchPos$mixinextras$bridge$34(arg0: $Level_, arg1: $BlockPos_, arg2: $Operation_<any>, arg3: $LocalRef<any>): $BlockEntity;
        wrapOperation$ikb000$petrolpark$checkCompositeGeneratingKBEsMatchPos$mixinextras$bridge$35(arg0: $Level_, arg1: $BlockPos_, arg2: $Operation_<any>, arg3: $LocalRef<any>): $BlockEntity;
        handler$hal000$bits_n_bobs$updateNetworkHead(arg0: $CallbackInfo): void;
        bits_n_bobs$getFlywheelStressReleaseCapacity(): number;
        bits_n_bobs$getFlywheelStressAbsoptionCapacity(): number;
        redirect$ech000$simulated$extraKineticsCapacity(arg0: $Level_, arg1: $BlockPos_): $BlockEntity;
        redirect$ech000$simulated$extraKineticsStress(arg0: $Level_, arg1: $BlockPos_): $BlockEntity;
        wrapOperation$ikb000$petrolpark$checkCompositeGeneratingKBEsMatchPos(arg0: $Level_, arg1: $BlockPos_, arg2: $Operation_<any>, arg3: $KineticBlockEntity): $BlockEntity;
        getUnloadedStress(): number;
        sources: $Map<$KineticBlockEntity, number>;
        members: $Map<$KineticBlockEntity, number>;
        initialized: boolean;
        id: number;
        constructor();
        get size(): number;
        get unloadedStress(): number;
    }
}
