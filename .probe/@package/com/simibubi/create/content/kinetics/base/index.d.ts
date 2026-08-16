import { $Level, $Level_, $LevelReader } from "@package/net/minecraft/world/level";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $KineticBlockEntityAccessor } from "@package/net/liukrast/deployer/lib/mixin/accessors";
import { $LangBuilder } from "@package/net/createmod/catnip/lang";
import { $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $UUID, $List, $UUID_, $List_ } from "@package/java/util";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $ChatFormatting } from "@package/net/minecraft";
import { $KineticBlockEntityExtension } from "@package/dev/simulated_team/simulated/mixin_interface/extra_kinetics";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Direction$Axis, $Direction$Axis_ } from "@package/net/minecraft/core";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $IPlacerTracked } from "@package/com/mapter/aeroclaims/protect";
import { $IKineticBlockEntityDuck } from "@package/petrolpark/mc/library/compat/create/core/world/block/entity";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $IHaveGoggleInformation, $IHaveHoveringInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $KineticNetwork } from "@package/com/simibubi/create/content/kinetics";
import { $Enum } from "@package/java/lang";
import { $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/content/kinetics/base" {
    export class $IRotate {
    }
    export interface $IRotate extends $IWrenchable {
        showCapacityWithAnnotation(): boolean;
        getRotationAxis(arg0: $BlockState_): $Direction$Axis;
        getMinimumRequiredSpeedLevel(): $IRotate$SpeedLevel;
        hasShaftTowards(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_): boolean;
        hideStressImpact(): boolean;
        get minimumRequiredSpeedLevel(): $IRotate$SpeedLevel;
    }
    export class $KineticEffectHandler {
        tick(): void;
        spawnEffect(arg0: $ParticleOptions_, arg1: number, arg2: number): void;
        triggerOverStressedEffect(): void;
        queueRotationIndicators(): void;
        spawnRotationIndicators(): void;
        constructor(arg0: $KineticBlockEntity);
    }
    export class $IRotate$SpeedLevel extends $Enum<$IRotate$SpeedLevel> {
        static values(): $IRotate$SpeedLevel[];
        static valueOf(arg0: string): $IRotate$SpeedLevel;
        static of(arg0: number): $IRotate$SpeedLevel;
        getColor(): number;
        getParticleSpeed(): number;
        static getFormattedSpeedText(arg0: number, arg1: boolean): $LangBuilder;
        getSpeedValue(): number;
        getTextColor(): $ChatFormatting;
        static MEDIUM: $IRotate$SpeedLevel;
        static SLOW: $IRotate$SpeedLevel;
        static NONE: $IRotate$SpeedLevel;
        static FAST: $IRotate$SpeedLevel;
        get color(): number;
        get particleSpeed(): number;
        get speedValue(): number;
        get textColor(): $ChatFormatting;
    }
    /**
     * Values that may be interpreted as {@link $IRotate$SpeedLevel}.
     */
    export type $IRotate$SpeedLevel_ = "none" | "slow" | "medium" | "fast";
    export class $KineticBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation, $IHaveHoveringInformation, $KineticBlockEntityExtension, $IKineticBlockEntityDuck, $IPlacerTracked, $KineticBlockEntityAccessor {
        setSpeed(arg0: number): void;
        getSpeed(): number;
        onSpeedChanged(arg0: number): void;
        isSource(): boolean;
        setSource(arg0: $BlockPos_): void;
        addToTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        simulated$getConnectedToExtraKinetics(): boolean;
        simulated$setConnectedToExtraKinetics(arg0: boolean): void;
        modifyExpressionValue$ijp000$petrolpark$setCompositeKineticBlockEntityPartSource(arg0: $BlockEntity): $BlockEntity;
        getTheoreticalSpeed(): number;
        propagateRotationTo(arg0: $KineticBlockEntity, arg1: $BlockState_, arg2: $BlockState_, arg3: $BlockPos_, arg4: boolean, arg5: boolean): number;
        aeroclaims$getPlacerUUID(): $UUID;
        aeroclaims$setPlacerUUID(arg0: $UUID_): void;
        addPropagationLocations(arg0: $IRotate, arg1: $BlockState_, arg2: $List_<$BlockPos_>): $List<$BlockPos>;
        getRotationAngleOffset(arg0: $Direction$Axis_): number;
        calculateStressApplied(): number;
        detachKinetics(): void;
        attachKinetics(): void;
        handler$ijp000$petrolpark$removeSourceIndex(arg0: $CallbackInfo): void;
        handler$ecl000$simulated$addExtraKineticsInfo(arg0: $List_<any>, arg1: boolean, arg2: $CallbackInfoReturnable<any>): void;
        handler$ijp001$petrolpark$addFlagsBehaviour(arg0: $List_<any>, arg1: $CallbackInfo): void;
        clearKineticInformation(): void;
        setNetwork(arg0: number): void;
        hasNetwork(): boolean;
        hasSource(): boolean;
        tickAudio(): void;
        calculateAddedStressCapacity(): number;
        simulated$setValidationCountdown(arg0: number): void;
        isSpeedRequirementFulfilled(): boolean;
        needsSpeedUpdate(): boolean;
        getFlickerScore(): number;
        removeSource(): void;
        addToGoggleTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        getOrCreateNetwork(): $KineticNetwork;
        getGeneratedSpeed(): number;
        updateFromNetwork(arg0: number, arg1: number, arg2: number): void;
        isCustomConnection(arg0: $KineticBlockEntity, arg1: $BlockState_, arg2: $BlockState_): boolean;
        static convertToLinear(arg0: number): number;
        setSourceIndex(arg0: number | null): void;
        isOverStressed(): boolean;
        static convertToAngular(arg0: number): number;
        getSourceIndex(): number;
        static convertToDirection(arg0: number, arg1: $Direction_): number;
        handler$ecf000$simulated$readConnected(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean, arg3: $CallbackInfo): void;
        redirect$ecf000$simulated$useProperSource2(arg0: $Level_, arg1: $BlockPos_): $BlockEntity;
        handler$ecf000$simulated$removeConnected(arg0: $CallbackInfo): void;
        handler$ecf000$simulated$saveConnected(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean, arg3: $CallbackInfo): void;
        handler$ecf000$simulated$injectRemove(arg0: $CallbackInfo): void;
        redirect$ecf000$simulated$useProperSource(arg0: $Level_, arg1: $BlockPos_): $BlockEntity;
        warnOfMovement(): void;
        handler$ijp000$petrolpark$allowCompositeBlockEntitiesAsSourcesInValidation(arg0: $CallbackInfo, arg1: $BlockEntity, arg2: $KineticBlockEntity): void;
        handler$ijp000$petrolpark$clearSourceIndexInformation(arg0: $CallbackInfo): void;
        static switchToBlockState(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): void;
        containedFluidTooltip(arg0: $List_<$Component_>, arg1: boolean, arg2: $IFluidHandler): boolean;
        getIcon(arg0: boolean): $ItemStack;
        getEffects(): $KineticEffectHandler;
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
        get theoreticalSpeed(): number;
        get speedRequirementFulfilled(): boolean;
        get flickerScore(): number;
        get orCreateNetwork(): $KineticNetwork;
        get generatedSpeed(): number;
        get overStressed(): boolean;
        get effects(): $KineticEffectHandler;
    }
}
