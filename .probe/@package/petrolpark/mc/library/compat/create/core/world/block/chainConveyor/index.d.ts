import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $Consumer_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ArmBlockEntity$Phase, $ArmBlockEntity$Phase_, $ArmInteractionPoint } from "@package/com/simibubi/create/content/kinetics/mechanicalArm";
import { $ChainConveyorBlockEntity, $ChainConveyorPackage } from "@package/com/simibubi/create/content/kinetics/chainConveyor";
import { $List, $Map } from "@package/java/util";

declare module "@package/petrolpark/mc/library/compat/create/core/world/block/chainConveyor" {
    export class $ChainConveyorItemEvent extends $Event implements $ICancellableEvent {
        allow(): void;
        getStack(): $ItemStack;
        onSuccess(arg0: $Consumer_<$ItemStack>): void;
        static canAdd(arg0: $Level_, arg1: $ItemStack_, arg2: $ChainConveyorBlockEntity, arg3: $BlockPos_, arg4: number, arg5: boolean): boolean;
        static getRemoved(arg0: $Level_, arg1: $ItemStack_, arg2: $ChainConveyorBlockEntity, arg3: $BlockPos_, arg4: number, arg5: boolean): $ChainConveyorItemEvent$Remove;
        static getRemoved(arg0: $Level_, arg1: $ChainConveyorBlockEntity, arg2: $BlockPos_, arg3: $ChainConveyorPackage, arg4: boolean): $ChainConveyorItemEvent$Remove;
        isAllowed(): boolean;
        setCanceled(arg0: boolean): void;
        setTransformedStack(arg0: $ItemStack_): void;
        static getAdded(arg0: $Level_, arg1: $ItemStack_, arg2: $ChainConveyorBlockEntity, arg3: $BlockPos_, arg4: number, arg5: boolean): $ChainConveyorItemEvent$Add;
        static canAddClient(arg0: $Level_, arg1: $ItemStack_): boolean;
        isCanceled(): boolean;
        chainConveyorPosition: number;
        level: $Level;
        chainConveyor: $ChainConveyorBlockEntity;
        chainConveyorConnection: $BlockPos;
        simulate: boolean;
        get stack(): $ItemStack;
        get allowed(): boolean;
        set transformedStack(value: $ItemStack_);
    }
    export class $IArmBlockEntityDuck {
    }
    export interface $IArmBlockEntityDuck {
        setPhase(arg0: $ArmBlockEntity$Phase_): void;
        getInputs(): $List<$ArmInteractionPoint>;
        getPhase(): $ArmBlockEntity$Phase;
        getOutputs(): $List<$ArmInteractionPoint>;
        getHeldItem(): $ItemStack;
        invokeGetTargetedInteractionPoint(): $ArmInteractionPoint;
        setHeldItem(arg0: $ItemStack_): void;
        setChasedPointIndex(arg0: number): void;
        invokeSearchForItem(): void;
        setChasedPointProgress(arg0: number): void;
        getChasedPointProgress(): number;
        invokeSearchForDestination(): void;
        get inputs(): $List<$ArmInteractionPoint>;
        get outputs(): $List<$ArmInteractionPoint>;
        set chasedPointIndex(value: number);
    }
    export class $ChainConveyorItemEvent$Remove extends $ChainConveyorItemEvent {
        chainConveyorPosition: number;
        level: $Level;
        chainConveyor: $ChainConveyorBlockEntity;
        chainConveyorConnection: $BlockPos;
        simulate: boolean;
    }
    export class $IChainConveyorBlockEntityDuck {
    }
    export interface $IChainConveyorBlockEntityDuck {
        getLoopingPackages(): $List<$ChainConveyorPackage>;
        getTravellingPackages(): $Map<$BlockPos, $List<$ChainConveyorPackage>>;
        get loopingPackages(): $List<$ChainConveyorPackage>;
        get travellingPackages(): $Map<$BlockPos, $List<$ChainConveyorPackage>>;
    }
    export class $ChainConveyorItemEvent$Add extends $ChainConveyorItemEvent {
        chainConveyorPosition: number;
        level: $Level;
        chainConveyor: $ChainConveyorBlockEntity;
        chainConveyorConnection: $BlockPos;
        simulate: boolean;
    }
    export class $ChainConveyorItemEvent$AddClient extends $Event implements $ICancellableEvent {
        set(arg0: boolean): void;
        or(arg0: boolean): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        stack: $ItemStack;
        level: $Level;
    }
}
