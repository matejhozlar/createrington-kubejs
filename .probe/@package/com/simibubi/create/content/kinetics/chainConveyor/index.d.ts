import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $List, $Collection, $Map, $Map$Entry, $Set } from "@package/java/util";
import { $WeakReference } from "@package/java/lang/ref";
import { $Consumer_ } from "@package/java/util/function";
import { $Clearable } from "@package/net/minecraft/world";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $KineticBlockEntity } from "@package/com/simibubi/create/content/kinetics/base";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $Record } from "@package/java/lang";
import { $MixedChainConveyor } from "@package/de/zolitas/createdyeablechains";
import { $WorldAttached } from "@package/net/createmod/catnip/data";
import { $LevelAccessor, $Level } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Cache } from "@package/com/google/common/cache";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $IChainConveyorBlockEntityDuck } from "@package/petrolpark/mc/library/compat/create/core/world/block/chainConveyor";
import { $MutableInt } from "@package/org/apache/commons/lang3/mutable";
import { $FrogportBlockEntity } from "@package/com/simibubi/create/content/logistics/packagePort/frogport";
import { $TransformableBlockEntity } from "@package/com/simibubi/create/api/contraption/transformable";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/content/kinetics/chainConveyor" {
    export class $ChainConveyorPackage {
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        static read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $ChainConveyorPackage;
        writeToClient(arg0: $HolderLookup$Provider): $CompoundTag;
        physicsData(arg0: $LevelAccessor): $ChainConveyorPackage$ChainConveyorPackagePhysicsData;
        worldPosition: $Vec3;
        item: $ItemStack;
        justFlipped: boolean;
        netId: number;
        static physicsDataCache: $WorldAttached<$Cache<number, $ChainConveyorPackage$ChainConveyorPackagePhysicsData>>;
        chainPosition: number;
        static netIdGenerator: $AtomicInteger;
        yaw: number;
        constructor(arg0: number, arg1: $ItemStack_);
        constructor(arg0: number, arg1: $ItemStack_, arg2: number);
    }
    export class $ChainConveyorPackage$ChainConveyorPackagePhysicsData {
        shouldTick(): boolean;
        setBE(arg0: $ChainConveyorBlockEntity): void;
        targetPos: $Vec3;
        lastTick: number;
        flipped: boolean;
        motion: $Vec3;
        prevYaw: number;
        pos: $Vec3;
        prevTargetPos: $Vec3;
        prevPos: $Vec3;
        beReference: $WeakReference<$ChainConveyorBlockEntity>;
        yaw: number;
        modelKey: $ResourceLocation;
        constructor(arg0: $ChainConveyorPackage, arg1: $Vec3_);
        set BE(value: $ChainConveyorBlockEntity);
    }
    export class $ChainConveyorBlockEntity$ConnectedPort extends $Record {
        filter(): string;
        connection(): $BlockPos;
        chainPosition(): number;
        constructor(chainPosition: number, connection: $BlockPos_, filter: string);
    }
    /**
     * Values that may be interpreted as {@link $ChainConveyorBlockEntity$ConnectedPort}.
     */
    export type $ChainConveyorBlockEntity$ConnectedPort_ = { filter?: string, chainPosition?: number, connection?: $BlockPos_,  } | [filter?: string, chainPosition?: number, connection?: $BlockPos_, ];
    export class $ChainConveyorRoutingTable {
        tick(): void;
        getExitFor(arg0: $ItemStack_): $BlockPos;
        shouldAdvertise(): boolean;
        advertiseTo(arg0: $BlockPos_, arg1: $ChainConveyorRoutingTable): void;
        createSummary(): $Collection<$Component>;
        receivePortInfo(arg0: string, arg1: $BlockPos_): void;
        static ENTRY_TIMEOUT: number;
        lastUpdate: number;
        static PORT_ENTRY_TIMEOUT: number;
        entriesByDistance: $List<$ChainConveyorRoutingTable$RoutingTableEntry>;
        changed: boolean;
        constructor();
    }
    export class $ChainConveyorRoutingTable$RoutingTableEntry extends $Record {
        port(): string;
        distance(): number;
        timeout(): $MutableInt;
        invalid(): boolean;
        tick(): void;
        endOfRoute(): boolean;
        nextConnection(): $BlockPos;
        copyForNeighbour(arg0: $BlockPos_): $ChainConveyorRoutingTable$RoutingTableEntry;
        constructor(port: string, distance: number, nextConnection: $BlockPos_, timeout: $MutableInt, endOfRoute: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ChainConveyorRoutingTable$RoutingTableEntry}.
     */
    export type $ChainConveyorRoutingTable$RoutingTableEntry_ = { nextConnection?: $BlockPos_, endOfRoute?: boolean, port?: string, distance?: number, timeout?: $MutableInt,  } | [nextConnection?: $BlockPos_, endOfRoute?: boolean, port?: string, distance?: number, timeout?: $MutableInt, ];
    export class $ChainConveyorBlockEntity$ConnectionStats extends $Record {
        end(): $Vec3;
        start(): $Vec3;
        tangentAngle(): number;
        chainLength(): number;
        constructor(tangentAngle: number, chainLength: number, start: $Vec3_, end: $Vec3_);
    }
    /**
     * Values that may be interpreted as {@link $ChainConveyorBlockEntity$ConnectionStats}.
     */
    export type $ChainConveyorBlockEntity$ConnectionStats_ = { tangentAngle?: number, chainLength?: number, start?: $Vec3_, end?: $Vec3_,  } | [tangentAngle?: number, chainLength?: number, start?: $Vec3_, end?: $Vec3_, ];
    export class $ChainConveyorBlockEntity extends $KineticBlockEntity implements $TransformableBlockEntity, $Clearable, $IChainConveyorBlockEntityDuck, $MixedChainConveyor {
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
        notifyConnectedToValidate(): void;
        static getChainCost(arg0: $BlockPos_): number;
        wrapAngle(arg0: number): number;
        canAcceptPackagesFor(arg0: $BlockPos_): boolean;
        clearContent(): void;
        wrapOperation$ijc000$petrolpark$notifyArmToAnticipate$mixinextras$bridge$74(arg0: $ChainConveyorBlockEntity, arg1: $BlockPos_, arg2: $Operation_<any>, arg3: $LocalRef<any>, arg4: $LocalRef<any>): void;
        handler$hni000$sable$dropInvalidPackages(arg0: $CallbackInfo, arg1: $BlockPos_): void;
        canAcceptMorePackagesFromOtherConveyor(): boolean;
        wrapOperation$hok000$sable$testSublevelDistance1$mixinextras$bridge$73(arg0: $ChainConveyorBlockEntity, arg1: $BlockPos_, arg2: $Operation_<any>, arg3: $LocalRef<any>, arg4: $LocalRef<any>): void;
        wrapOperation$hok000$sable$testSublevelDistance$mixinextras$bridge$72(arg0: $FrogportBlockEntity, arg1: $Operation_<any>, arg2: $LocalRef<any>): boolean;
        getLoopingPackages(): $List<any>;
        getPackagePosition(arg0: number, arg1: $BlockPos_): $Vec3;
        tickBoxVisuals(): void;
        addLoopingPackage(arg0: $ChainConveyorPackage): boolean;
        prepareStats(): void;
        removeConnectionTo(arg0: $BlockPos_): boolean;
        chainDestroyed(arg0: $BlockPos_, arg1: boolean, arg2: boolean): void;
        addConnectionTo(arg0: $BlockPos_): boolean;
        wrapOperation$ijc000$petrolpark$notifyArmToAnticipate(arg0: $ChainConveyorBlockEntity, arg1: $BlockPos_, arg2: $Operation_<any>, arg3: $ChainConveyorPackage, arg4: $ChainConveyorBlockEntity$ConnectedPort_): void;
        wrapOperation$hok000$sable$testSublevelDistance1(arg0: $ChainConveyorBlockEntity, arg1: $BlockPos_, arg2: $Operation_<any>, arg3: $Map$Entry<any, any>, arg4: $ChainConveyorPackage): void;
        create_dyeable_chains$getConnectionColorMap(): $Map<any, any>;
        wrapOperation$hok000$sable$testSublevelDistance(arg0: $FrogportBlockEntity, arg1: $Operation_<any>, arg2: $ChainConveyorPackage): boolean;
        updateBoxWorldPositions(): void;
        getTravellingPackages(): $Map<any, any>;
        removeInvalidConnections(): void;
        addTravellingPackage(arg0: $ChainConveyorPackage, arg1: $BlockPos_): boolean;
        loopThresholdCrossed(arg0: number, arg1: number, arg2: number): boolean;
        forPointsAlongChains(arg0: $BlockPos_, arg1: number, arg2: $Consumer_<$Vec3>): boolean;
        canAcceptMorePackages(): boolean;
        static getChainsFromInventory(arg0: $Player, arg1: $ItemStack_, arg2: number, arg3: boolean): boolean;
        loopPorts: $Map<$BlockPos, $ChainConveyorBlockEntity$ConnectedPort>;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        sourceIndex: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        network: number;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        worldPosition: $BlockPos;
        travelPorts: $Map<$BlockPos, $ChainConveyorBlockEntity$ConnectedPort>;
        connectionStats: $Map<$BlockPos, $ChainConveyorBlockEntity$ConnectionStats>;
        updateSpeed: boolean;
        routingTable: $ChainConveyorRoutingTable;
        hasComparators: number;
        checkInvalid: boolean;
        preventSpeedUpdate: number;
        connections: $Set<$BlockPos>;
        reversed: boolean;
        cancelDrops: boolean;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get loopingPackages(): $List<any>;
        get travellingPackages(): $Map<any, any>;
    }
}
