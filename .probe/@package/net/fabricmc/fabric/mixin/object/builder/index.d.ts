import { $Function_, $Function, $ToIntFunction } from "@package/java/util/function";
import { $NoteBlockInstrument } from "@package/net/minecraft/world/level/block/state/properties";
import { $PushReaction, $MapColor } from "@package/net/minecraft/world/level/material";
import { $BlockBehaviour$StateArgumentPredicate, $BlockBehaviour$OffsetFunction_, $BlockBehaviour$Properties, $BlockState, $BlockBehaviour$OffsetFunction, $BlockBehaviour$StatePredicate } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $EntityType, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $SoundType } from "@package/net/minecraft/world/level/block";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $AttributeSupplier } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Map } from "@package/java/util";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/fabricmc/fabric/mixin/object/builder" {
    export class $DefaultAttributeRegistryAccessor {
        static getRegistry(): $Map<$EntityType<$LivingEntity>, $AttributeSupplier>;
        static get registry(): $Map<$EntityType<$LivingEntity>, $AttributeSupplier>;
    }
    export interface $DefaultAttributeRegistryAccessor {
    }
    export class $AbstractBlockSettingsAccessor {
    }
    export interface $AbstractBlockSettingsAccessor {
        getFriction(): number;
        getSoundType(): $SoundType;
        getExplosionResistance(): number;
        getSpeedFactor(): number;
        getJumpFactor(): number;
        setLiquid(arg0: boolean): void;
        getIsAir(): boolean;
        setDrops(arg0: $ResourceKey_<$LootTable>): void;
        setIsAir(arg0: boolean): void;
        getDrops(): $ResourceKey<$LootTable>;
        isRequiresCorrectToolForDrops(): boolean;
        setRequiresCorrectToolForDrops(arg0: boolean): void;
        getIsRedstoneConductor(): $BlockBehaviour$StatePredicate;
        getSpawnTerrainParticles(): boolean;
        getRequiredFeatures(): $FeatureFlagSet;
        setSpawnTerrainParticles(arg0: boolean): void;
        getIsRandomlyTicking(): boolean;
        setRequiredFeatures(arg0: $FeatureFlagSet): void;
        getEmissiveRendering(): $BlockBehaviour$StatePredicate;
        setIsRandomlyTicking(arg0: boolean): void;
        getLiquid(): boolean;
        getHasCollision(): boolean;
        getMapColor(): $Function<$BlockState, $MapColor>;
        setOffsetFunction(arg0: $BlockBehaviour$OffsetFunction_): void;
        getIgnitedByLava(): boolean;
        getReplaceable(): boolean;
        setReplaceable(arg0: boolean): void;
        setIgnitedByLava(arg0: boolean): void;
        getInstrument(): $NoteBlockInstrument;
        getForceSolidOff(): boolean;
        getHasPostProcess(): $BlockBehaviour$StatePredicate;
        getCanOcclude(): boolean;
        setDynamicShape(arg0: boolean): void;
        setCanOcclude(arg0: boolean): void;
        getOffsetFunction(): $BlockBehaviour$OffsetFunction;
        setMapColor(arg0: $Function_<$BlockState, $MapColor>): void;
        getPushReaction(): $PushReaction;
        setForceSolidOn(arg0: boolean): void;
        getDestroyTime(): number;
        getIsValidSpawn(): $BlockBehaviour$StateArgumentPredicate<$EntityType<never>>;
        getForceSolidOn(): boolean;
        getIsSuffocating(): $BlockBehaviour$StatePredicate;
        getLuminance(): $ToIntFunction<$BlockState>;
        getIsViewBlocking(): $BlockBehaviour$StatePredicate;
        getDynamicShape(): boolean;
        setHasCollision(arg0: boolean): void;
        setForceSolidOff(arg0: boolean): void;
        get friction(): number;
        get soundType(): $SoundType;
        get explosionResistance(): number;
        get speedFactor(): number;
        get jumpFactor(): number;
        get isRedstoneConductor(): $BlockBehaviour$StatePredicate;
        get emissiveRendering(): $BlockBehaviour$StatePredicate;
        get instrument(): $NoteBlockInstrument;
        get hasPostProcess(): $BlockBehaviour$StatePredicate;
        get pushReaction(): $PushReaction;
        get destroyTime(): number;
        get isValidSpawn(): $BlockBehaviour$StateArgumentPredicate<$EntityType<never>>;
        get isSuffocating(): $BlockBehaviour$StatePredicate;
        get luminance(): $ToIntFunction<$BlockState>;
        get isViewBlocking(): $BlockBehaviour$StatePredicate;
    }
    export class $AbstractBlockAccessor {
    }
    export interface $AbstractBlockAccessor {
        getProperties(): $BlockBehaviour$Properties;
        get properties(): $BlockBehaviour$Properties;
    }
    /**
     * Values that may be interpreted as {@link $AbstractBlockAccessor}.
     */
    export type $AbstractBlockAccessor_ = (() => $BlockBehaviour$Properties);
}
