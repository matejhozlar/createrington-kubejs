import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $ICreateArmInteractionPoint } from "@package/xaero/pac/common/server/core/accessor";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $List } from "@package/java/util";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $KineticBlockEntity } from "@package/com/simibubi/create/content/kinetics/base";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $IArmBlockEntityDuck } from "@package/petrolpark/mc/library/compat/create/core/world/block/chainConveyor";
import { $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $Enum } from "@package/java/lang";
import { $TransformableBlockEntity } from "@package/com/simibubi/create/api/contraption/transformable";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/content/kinetics/mechanicalArm" {
    export class $ArmBlockEntity$Phase extends $Enum<$ArmBlockEntity$Phase> {
        static values(): $ArmBlockEntity$Phase[];
        static valueOf(arg0: string): $ArmBlockEntity$Phase;
        static MOVE_TO_INPUT: $ArmBlockEntity$Phase;
        static SEARCH_OUTPUTS: $ArmBlockEntity$Phase;
        static SEARCH_INPUTS: $ArmBlockEntity$Phase;
        static MOVE_TO_OUTPUT: $ArmBlockEntity$Phase;
        static DANCING: $ArmBlockEntity$Phase;
    }
    /**
     * Values that may be interpreted as {@link $ArmBlockEntity$Phase}.
     */
    export type $ArmBlockEntity$Phase_ = "search_inputs" | "move_to_input" | "search_outputs" | "move_to_output" | "dancing";
    export class $ArmInteractionPoint implements $ICreateArmInteractionPoint {
        extract(arg0: $ArmBlockEntity, arg1: number, arg2: number, arg3: boolean): $ItemStack;
        extract(arg0: $ArmBlockEntity, arg1: number, arg2: boolean): $ItemStack;
        insert(arg0: $ArmBlockEntity, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        getType(): $ArmInteractionPointType;
        static create(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): $ArmInteractionPoint;
        isValid(): boolean;
        keepAlive(): void;
        getLevel(): $Level;
        setLevel(arg0: $Level_): void;
        getSlotCount(arg0: $ArmBlockEntity): number;
        serialize(arg0: $BlockPos_): $CompoundTag;
        getMode(): $ArmInteractionPoint$Mode;
        static deserialize(arg0: $CompoundTag_, arg1: $Level_, arg2: $BlockPos_): $ArmInteractionPoint;
        getPos(): $BlockPos;
        static transformPos(arg0: $CompoundTag_, arg1: $StructureTransform): void;
        getTargetAngles(arg0: $BlockPos_, arg1: boolean): $ArmAngleTarget;
        updateCachedState(): void;
        xaero_OPAC_getPos(): $BlockPos;
        static isInteractable(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        cycleMode(): void;
        constructor(arg0: $ArmInteractionPointType_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_);
        get type(): $ArmInteractionPointType;
        get valid(): boolean;
        get mode(): $ArmInteractionPoint$Mode;
        get pos(): $BlockPos;
    }
    export class $ArmAngleTarget {
        constructor(arg0: $BlockPos_, arg1: $Vec3_, arg2: $Direction_, arg3: boolean);
    }
    export interface $ArmInteractionPointType extends RegistryMarked<RegistryTypes.CreateArmInteractionPointTypeTag, RegistryTypes.CreateArmInteractionPointType> {}
    export class $ArmBlockEntity extends $KineticBlockEntity implements $TransformableBlockEntity, $IArmBlockEntityDuck {
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        setPhase(arg0: $ArmBlockEntity$Phase_): void;
        getInputs(): $List<any>;
        static getRange(): number;
        getPhase(): $ArmBlockEntity$Phase;
        getOutputs(): $List<any>;
        handler$zcf000$openpartiesandclaims$onSearchForItem(arg0: $CallbackInfo): void;
        handler$zcf000$openpartiesandclaims$onSearchForDestination(arg0: $CallbackInfo): void;
        wrapMethod$iin000$petrolpark$dontCollectChainConveyorItem(arg0: $Operation_<any>): void;
        handler$iin000$petrolpark$destroyChainConveyorPoints(arg0: $CallbackInfo): void;
        wrapOperation$ige000$sable_beyond$sableBeyond$searchSubLevelsForDestination$mixinextras$bridge$55(instance: $ArmInteractionPoint, original: $Operation_<any>, armInteractionPoint: $LocalRef<any>): boolean;
        wrapOperation$ige000$sable_beyond$sableBeyond$searchSubLevelsForItem$mixinextras$bridge$54(instance: $ArmInteractionPoint, original: $Operation_<any>, armInteractionPoint: $LocalRef<any>): boolean;
        wrapOperation$ige000$sable_beyond$sableBeyond$searchSubLevelsForDestination(instance: $ArmInteractionPoint, original: $Operation_<any>, armInteractionPoint: $ArmInteractionPoint): boolean;
        redstoneUpdate(): void;
        getHeldItem(): $ItemStack;
        invokeGetTargetedInteractionPoint(): $ArmInteractionPoint;
        wrapOperation$ige000$sable_beyond$sableBeyond$searchSubLevelsForItem(instance: $ArmInteractionPoint, original: $Operation_<any>, armInteractionPoint: $ArmInteractionPoint): boolean;
        setHeldItem(arg0: $ItemStack_): void;
        setChasedPointIndex(arg0: number): void;
        invokeSearchForItem(): void;
        setChasedPointProgress(arg0: number): void;
        getChasedPointProgress(): number;
        writeInteractionPoints(arg0: $CompoundTag_): void;
        invokeSearchForDestination(): void;
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
        updateSpeed: boolean;
        hasComparators: number;
        preventSpeedUpdate: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get inputs(): $List<any>;
        static get range(): number;
        get outputs(): $List<any>;
        set chasedPointIndex(value: number);
    }
    export class $ArmInteractionPoint$Mode extends $Enum<$ArmInteractionPoint$Mode> {
        static values(): $ArmInteractionPoint$Mode[];
        static valueOf(arg0: string): $ArmInteractionPoint$Mode;
        getColor(): number;
        getTranslationKey(): string;
        static TAKE: $ArmInteractionPoint$Mode;
        static DEPOSIT: $ArmInteractionPoint$Mode;
        get color(): number;
        get translationKey(): string;
    }
    /**
     * Values that may be interpreted as {@link $ArmInteractionPoint$Mode}.
     */
    export type $ArmInteractionPoint$Mode_ = "deposit" | "take";
    export class $ArmInteractionPointType {
        static init(): void;
        getPriority(): number;
        canCreatePoint(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        static getPrimaryType(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): $ArmInteractionPointType;
        createPoint(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): $ArmInteractionPoint;
        static SORTED_TYPES_VIEW: $List<$ArmInteractionPointType>;
        constructor();
        get priority(): number;
    }
    /**
     * Values that may be interpreted as {@link $ArmInteractionPointType}.
     */
    export type $ArmInteractionPointType_ = RegistryTypes.CreateArmInteractionPointType;
}
