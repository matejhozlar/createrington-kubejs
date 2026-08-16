import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $List } from "@package/java/util";
import { $RenderedBehaviourExtension, $KineticBehaviourExtension, $ItemRequirementBehaviourExtension } from "@package/com/cake/azimuth/behaviour/extensions";
import { $BehaviourType, $BlockEntityBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $UseItemOnBlockEvent } from "@package/net/neoforged/neoforge/event/entity/player";
import { $Predicate_ } from "@package/java/util/function";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Runnable_ } from "@package/java/lang";
import { $BlockEvent$BreakEvent, $BlockEvent$EntityPlaceEvent } from "@package/net/neoforged/neoforge/event/level";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as render from "@package/com/cake/azimuth/behaviour/render";
export * as extensions from "@package/com/cake/azimuth/behaviour/extensions";

declare module "@package/com/cake/azimuth/behaviour" {
    export class $AzimuthSmartBlockEntityExtension {
    }
    export interface $AzimuthSmartBlockEntityExtension {
        azimuth$getSuperBehaviours(): $SuperBlockEntityBehaviour[];
        azimuth$searchExtensionBehaviours<T>(arg0: $Predicate_<$SuperBlockEntityBehaviour>): $List<T>;
        azimuth$getRenderedExtensionCache(): $RenderedBehaviourExtension[];
        azimuth$searchSuperBehaviours(): $SuperBlockEntityBehaviour[];
        azimuth$addCacheClearListener(arg0: $Runnable_): void;
        azimuth$getKineticExtensionCache(): $KineticBehaviourExtension[];
        azimuth$invalidateRenderBoundingBox(): void;
        azimuth$updateBehaviourExtensionCache(): void;
        azimuth$getItemRequirementExtensionCache(): $ItemRequirementBehaviourExtension[];
    }
    export class $SuperBlockEntityBehaviour extends $BlockEntityBehaviour {
        remove(): void;
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
        getLevel(): $Level;
        static getOrThrow<T extends $BlockEntityBehaviour>(arg0: $BlockEntity, arg1: $BehaviourType<T>): T;
        static getOrThrow<T extends $BlockEntityBehaviour>(arg0: $Level_, arg1: $BlockPos_, arg2: $BehaviourType<T>): T;
        static getOptional<T extends $BlockEntityBehaviour>(arg0: $Level_, arg1: $BlockPos_, arg2: $BehaviourType<T>): (T) | undefined;
        static getOptional<T extends $BlockEntityBehaviour>(arg0: $BlockEntity, arg1: $BehaviourType<T>): (T) | undefined;
        onItemUse(arg0: $UseItemOnBlockEvent): void;
        getBlockState(): $BlockState;
        onBlockPlaced(arg0: $BlockEvent$EntityPlaceEvent): void;
        onBlockBroken(arg0: $BlockEvent$BreakEvent): void;
        isClientSide(): boolean;
        getBlockEntity(): $BlockEntity;
        sendData(): void;
        getSameBehaviourOrThrow<T extends $SuperBlockEntityBehaviour>(arg0: $BlockPos_): T;
        getSameBehaviourOrThrow<T extends $SuperBlockEntityBehaviour>(arg0: $BlockEntity): T;
        getSameBehaviourOptional<T extends $SuperBlockEntityBehaviour>(arg0: $BlockPos_): (T) | undefined;
        getSameBehaviourOptional<T extends $SuperBlockEntityBehaviour>(arg0: $BlockEntity): (T) | undefined;
        hasLevel(): boolean;
        removeFromLevel(arg0: boolean): void;
        isServerLevel(): boolean;
        getSameBehaviour<T extends $SuperBlockEntityBehaviour>(arg0: $BlockEntity): T;
        getSameBehaviour<T extends $SuperBlockEntityBehaviour>(arg0: $BlockPos_): T;
        blockEntity: $SmartBlockEntity;
        constructor(arg0: $SmartBlockEntity);
        get level(): $Level;
        get blockState(): $BlockState;
        get clientSide(): boolean;
        get serverLevel(): boolean;
    }
    export class $BehaviourExtension {
    }
    export interface $BehaviourExtension {
        getBlockEntity(): $BlockEntity;
        get blockEntity(): $BlockEntity;
    }
    /**
     * Values that may be interpreted as {@link $BehaviourExtension}.
     */
    export type $BehaviourExtension_ = (() => $BlockEntity);
}
