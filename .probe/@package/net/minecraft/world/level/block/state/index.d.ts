import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $EntityType_, $EntityType, $LivingEntity, $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlag, $FeatureFlagSet, $FeatureElement } from "@package/net/minecraft/world/flag";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $RandomSource } from "@package/net/minecraft/util";
import { $InteractionResult, $MenuProvider, $InteractionHand_, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $IBlockStateExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $ItemAbility_ } from "@package/net/neoforged/neoforge/common";
import { $Item, $DyeColor_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Projectile } from "@package/net/minecraft/world/entity/projectile";
import { $RecipeScriptContext } from "@package/dev/latvian/mods/kubejs/recipe";
import { $NoteBlockInstrument, $Property, $NoteBlockInstrument_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $RenderShape, $Mirror_, $SoundType_, $SoundType, $Block, $Block_, $Rotation_, $SupportType_ } from "@package/net/minecraft/world/level/block";
import { $RelativeURL } from "@package/dev/latvian/mods/kubejs/web";
import { $BlockStateKJS, $BlockBehaviourKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $HitResult, $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $FastMap } from "@package/malte0811/ferritecore/fastmap";
import { $TreeConfiguration } from "@package/net/minecraft/world/level/levelgen/feature/configurations";
import { $PhysicsBlockPropertiesDefinition_, $PhysicsBlockPropertyTypes$PhysicsBlockPropertyType_ } from "@package/dev/ryanhcode/sable/physics/config/block_properties";
import { $BlockStateExtension } from "@package/dev/ryanhcode/sable/mixinterface/block_properties";
import { $AbstractBlockSettingsAccessor, $AbstractBlockAccessor } from "@package/net/fabricmc/fabric/mixin/object/builder";
import { $BlockBehaviourAccessor, $StateHolderAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $Map, $Map$Entry, $List, $Map_, $Collection_, $Collection } from "@package/java/util";
import { $Supplier_, $Consumer_, $Predicate_, $Function, $BiConsumer_, $ToIntFunction, $Function_, $ToIntFunction_ } from "@package/java/util/function";
import { $Reference2ObjectArrayMap, $Reference2ObjectMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $PathType, $PathType_, $PathComputationType_ } from "@package/net/minecraft/world/level/pathfinder";
import { $ServerPlayer$RespawnPosAngle, $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $HolderSet_, $BlockPos_, $Registry, $Holder_, $Holder, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ShapeUpdateHandlingBlockBehaviour } from "@package/net/caffeinemc/mods/lithium/common/block/entity";
import { $Enum, $Comparable_, $Comparable, $Object } from "@package/java/lang";
import { $LootTable, $LootParams$Builder } from "@package/net/minecraft/world/level/storage/loot";
import { $BlockBehaviourInvoker } from "@package/org/embeddedt/modernfix/common/mixin/perf/reduce_blockstate_cache_rebuilds";
import { $BlockAndTintGetter, $Explosion, $LevelAccessor, $LevelReader, $BlockGetter, $SignalGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $FluidState, $Fluid_, $PushReaction_, $PushReaction, $MapColor } from "@package/net/minecraft/world/level/material";
import { $ImmutableList, $Table } from "@package/com/google/common/collect";
import { $Pattern } from "@package/java/util/regex";
import { $FastMapStateHolder, $BlockStateCacheAccess } from "@package/malte0811/ferritecore/ducks";
import { $IBlockState } from "@package/org/embeddedt/modernfix/duck";
import { $Stream } from "@package/java/util/stream";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $RecordCodecBuilder } from "@package/com/mojang/serialization/codecs";
import { $BlockBehaviourAccessor as $BlockBehaviourAccessor$1 } from "@package/dev/simulated_team/simulated/mixin/accessor";
import { $BlockEntityType_, $BlockEntity, $BlockEntityTicker } from "@package/net/minecraft/world/level/block/entity";
import { $BubbleColumnDirection } from "@package/net/neoforged/neoforge/common/enums";
export * as pattern from "@package/net/minecraft/world/level/block/state/pattern";
export * as properties from "@package/net/minecraft/world/level/block/state/properties";
export * as predicate from "@package/net/minecraft/world/level/block/state/predicate";

declare module "@package/net/minecraft/world/level/block/state" {
    export class $BlockBehaviour$OffsetType extends $Enum<$BlockBehaviour$OffsetType> {
        static values(): $BlockBehaviour$OffsetType[];
        static valueOf(arg0: string): $BlockBehaviour$OffsetType;
        static XZ: $BlockBehaviour$OffsetType;
        static XYZ: $BlockBehaviour$OffsetType;
        static NONE: $BlockBehaviour$OffsetType;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviour$OffsetType}.
     */
    export type $BlockBehaviour$OffsetType_ = "none" | "xz" | "xyz";
    export class $StateDefinition<O, S extends $StateHolder<O, S>> {
        getProperty(propertyName: string): $Property<never>;
        getProperties(): $Collection<$Property<never>>;
        getOwner(): O;
        any(): S;
        static appendPropertyCodec<S extends $StateHolder<never, S>, T extends $Comparable<T>>(propertyCodec: $MapCodec_<S>, holderSupplier: $Supplier_<S>, value: string, property: $Property<T>): $MapCodec<S>;
        getPossibleStates(): $ImmutableList<S>;
        owner: O;
        static NAME_PATTERN: $Pattern;
        constructor(stateValueFunction: $Function_<O, S>, owner: O, valueFunction: $StateDefinition$Factory_<O, S>, propertiesByName: $Map_<string, $Property<never>>);
        get properties(): $Collection<$Property<never>>;
        get possibleStates(): $ImmutableList<S>;
    }
    export class $BlockBehaviour$BlockStateBase$Cache implements $BlockStateCacheAccess {
        getCollisionShape(): $VoxelShape;
        isFaceSturdy(direction: $Direction_, supportType: $SupportType_): boolean;
        setCollisionShape(arg0: $VoxelShape): void;
        getFaceSturdy(): boolean[];
        setFaceSturdy(arg0: boolean[]): void;
        getOcclusionShapes(): $VoxelShape[];
        setOcclusionShapes(arg0: $VoxelShape[]): void;
        largeCollisionShape: boolean;
        lightBlock: number;
        isCollisionShapeFullBlock: boolean;
        collisionShape: $VoxelShape;
        solidRender: boolean;
        occlusionShapes: $VoxelShape[];
        propagatesSkylightDown: boolean;
        constructor(state: $BlockState_);
    }
    export class $StateDefinition$Builder<O, S extends $StateHolder<O, S>> {
        add(...properties: $Property<never>[]): $StateDefinition$Builder<O, S>;
        create(stateValueFunction: $Function_<O, S>, stateFunction: $StateDefinition$Factory_<O, S>): $StateDefinition<O, S>;
        properties: $Map<string, $Property<never>>;
        constructor(owner: O);
    }
    export class $BlockBehaviour implements $FeatureElement, $BlockBehaviourInvoker, $ShapeUpdateHandlingBlockBehaviour, $AbstractBlockAccessor, $BlockBehaviourAccessor$1, $BlockBehaviourKJS, $BlockBehaviourAccessor {
        properties(): $BlockBehaviour$Properties;
        /**
         * Returns the blockstate with the given rotation from the passed blockstate. If inapplicable, returns the passed blockstate.
         */
        rotate(state: $BlockState_, rotation: $Rotation_): $BlockState;
        /**
         * Performs a random tick on a block.
         */
        tick(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): void;
        /**
         * Return a random long to be passed to `BakedModel#getQuads`, used for random model rotations
         */
        getSeed(state: $BlockState_, pos: $BlockPos_): number;
        getShape(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, context: $CollisionContext): $VoxelShape;
        /**
         * @deprecated
         */
        getSoundType(state: $BlockState_): $SoundType;
        canSurvive(state: $BlockState_, level: $LevelReader, pos: $BlockPos_): boolean;
        getLootTable(): $ResourceKey<$LootTable>;
        hasAnalogOutputSignal(state: $BlockState_): boolean;
        getInteractionShape(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        onRemove(state: $BlockState_, level: $Level_, pos: $BlockPos_, oldState: $BlockState_, movedByPiston: boolean): void;
        codec(): $MapCodec<$Block>;
        setHasCollision(arg0: boolean): void;
        setExplosionResistance(arg0: number): void;
        setIsRandomlyTicking(arg0: boolean): void;
        setRandomTickCallback(callback: $Consumer_<any>): void;
        getMaxHorizontalOffset(): number;
        getMaxVerticalOffset(): number;
        propagatesSkylightDown(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): boolean;
        /**
         * Returns the analog signal this block emits. This is the signal a comparator can read from it.
         */
        getAnalogOutputSignal(state: $BlockState_, level: $Level_, pos: $BlockPos_): number;
        getBlockSupportShape(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        isOcclusionShapeFullBlock(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): boolean;
        useShapeForLightOcclusion(state: $BlockState_): boolean;
        asItem(): $Item;
        onExplosionHit(state: $BlockState_, level: $Level_, pos: $BlockPos_, explosion: $Explosion, dropConsumer: $BiConsumer_<$ItemStack, $BlockPos>): void;
        /**
         * Returns the blockstate with the given mirror of the passed blockstate. If inapplicable, returns the passed blockstate.
         */
        mirror(state: $BlockState_, mirror: $Mirror_): $BlockState;
        getCollisionShape(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, context: $CollisionContext): $VoxelShape;
        entityInside(state: $BlockState_, level: $Level_, pos: $BlockPos_, entity: $Entity): void;
        getLightBlock(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): number;
        neighborChanged(state: $BlockState_, level: $Level_, pos: $BlockPos_, neighborBlock: $Block_, neighborPos: $BlockPos_, movedByPiston: boolean): void;
        /**
         * Called on server when `Level#blockEvent` is called. If server returns true, then also called on the client. On the Server, this may perform additional changes to the world, like pistons replacing the block with an extended base. On the client, the update may involve replacing block entities or effects such as sounds or particles
         */
        triggerEvent(state: $BlockState_, level: $Level_, pos: $BlockPos_, id: number, param: number): boolean;
        /**
         * Returns the direct signal this block emits in the given direction.
         * 
         * NOTE: directions in redstone signal related methods are backwards, so this method
         * checks for the signal emitted in the *opposite* direction of the one given.
         */
        getDirectSignal(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): number;
        isSignalSource(state: $BlockState_): boolean;
        requiredFeatures(): $FeatureFlagSet;
        canBeReplaced(state: $BlockState_, useContext: $BlockPlaceContext): boolean;
        canBeReplaced(state: $BlockState_, fluid: $Fluid_): boolean;
        isCollisionShapeFullBlock(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): boolean;
        attack(state: $BlockState_, level: $Level_, pos: $BlockPos_, player: $Player): void;
        useItemOn(stack: $ItemStack_, state: $BlockState_, level: $Level_, pos: $BlockPos_, player: $Player, hand: $InteractionHand_, hitResult: $BlockHitResult): $ItemInteractionResult;
        isAir(state: $BlockState_): boolean;
        /**
         * Update the provided state given the provided neighbor direction and neighbor state, returning a new state.
         * For example, fences make their connections to the passed in state if possible, and wet concrete powder immediately returns its solidified counterpart.
         * Note that this method should ideally consider only the specific direction passed in.
         */
        updateShape(state: $BlockState_, direction: $Direction_, neighborState: $BlockState_, level: $LevelAccessor, pos: $BlockPos_, neighborPos: $BlockPos_): $BlockState;
        skipRendering(state: $BlockState_, adjacentState: $BlockState_, direction: $Direction_): boolean;
        static simpleCodec<B extends $Block>(factory: $Function_<$BlockBehaviour$Properties, B>): $MapCodec<B>;
        /**
         * The type of render function called. MODEL for mixed tesr and static model, MODELBLOCK_ANIMATED for TESR-only, LIQUID for vanilla liquids, INVISIBLE to skip all rendering
         */
        getRenderShape(state: $BlockState_): $RenderShape;
        getFluidState(state: $BlockState_): $FluidState;
        handler$fmp000$create_hypertube$createHypertube$getCollisionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext, arg4: $CallbackInfoReturnable<any>): void;
        onPlace(state: $BlockState_, level: $Level_, pos: $BlockPos_, oldState: $BlockState_, movedByPiston: boolean): void;
        getDrops(state: $BlockState_, params: $LootParams$Builder): $List<$ItemStack>;
        asBlock(): $Block;
        /**
         * Performs a random tick on a block.
         */
        randomTick(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): void;
        updateIndirectNeighbourShapes(arg0: $BlockState_, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: number, arg4: number): void;
        static propertiesCodec<B extends $Block>(): $RecordCodecBuilder<B, $BlockBehaviour$Properties>;
        getOcclusionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): $VoxelShape;
        getMenuProvider(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): $MenuProvider;
        getVisualShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        setSpeedFactor(arg0: number): void;
        useWithoutItem(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Player, arg4: $BlockHitResult): $InteractionResult;
        defaultMapColor(): $MapColor;
        isPathfindable(arg0: $BlockState_, arg1: $PathComputationType_): boolean;
        getShadeBrightness(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): number;
        onProjectileHit(arg0: $Level_, arg1: $BlockState_, arg2: $BlockHitResult, arg3: $Projectile): void;
        spawnAfterBreak(arg0: $BlockState_, arg1: $ServerLevel, arg2: $BlockPos_, arg3: $ItemStack_, arg4: boolean): void;
        defaultDestroyTime(): number;
        isRandomlyTicking(arg0: $BlockState_): boolean;
        setSoundType(arg0: $SoundType_): void;
        setJumpFactor(arg0: number): void;
        getDestroyProgress(arg0: $BlockState_, arg1: $Player, arg2: $BlockGetter, arg3: $BlockPos_): number;
        setFriction(arg0: number): void;
        getSignal(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): number;
        isEnabled(arg0: $FeatureFlagSet): boolean;
        lithium$handleShapeUpdate(arg0: $LevelReader, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockPos_, arg4: $BlockState_): void;
        getId(): string;
        getKey(): $ResourceKey<$Block>;
        getTypeData(): $Map<string, $Object>;
        asHolder(): $Holder<$Block>;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        getRegistry(): $Registry<$Block>;
        hasTag(tag: $ResourceLocation_): boolean;
        getMod(): string;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getTags(): $List<$ResourceLocation>;
        getTagKeys(): $List<$TagKey<$Block>>;
        getIdLocation(): $ResourceLocation;
        getProperties(): $BlockBehaviour$Properties;
        invokeIsRandomlyTicking(arg0: $BlockState_): boolean;
        invokeGetFluidState(arg0: $BlockState_): $FluidState;
        create$getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        getHasCollision(): boolean;
        explosionResistance: number;
        drops: $ResourceKey<$LootTable>;
        dynamicShape: boolean;
        static UPDATE_SHAPE_ORDER: $Direction[];
        speedFactor: number;
        hasCollision: boolean;
        soundType: $SoundType;
        friction: number;
        jumpFactor: number;
        constructor(properties: $BlockBehaviour$Properties);
        get lootTable(): $ResourceKey<$LootTable>;
        set randomTickCallback(value: $Consumer_<any>);
        get maxHorizontalOffset(): number;
        get maxVerticalOffset(): number;
        get id(): string;
        get key(): $ResourceKey<$Block>;
        get typeData(): $Map<string, $Object>;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get registry(): $Registry<$Block>;
        get mod(): string;
        get tags(): $List<$ResourceLocation>;
        get tagKeys(): $List<$TagKey<$Block>>;
        get idLocation(): $ResourceLocation;
    }
    export class $BlockState extends $BlockBehaviour$BlockStateBase implements $IBlockStateExtension, $BlockStateExtension {
        sable$loadProperties(arg0: $StateDefinition<any, any>, arg1: $PhysicsBlockPropertiesDefinition_): void;
        sable$getProperty(arg0: $PhysicsBlockPropertyTypes$PhysicsBlockPropertyType_<any>): $Object;
        isEmpty(): boolean;
        rotate(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $Rotation_): $BlockState;
        getFriction(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Entity): number;
        getSoundType(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Entity): $SoundType;
        isBed(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $LivingEntity): boolean;
        shouldCheckWeakPower(arg0: $SignalGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        getBlockPathType(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Mob): $PathType;
        hasDynamicLightEmission(): boolean;
        getStateAtViewpoint(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Vec3_): $BlockState;
        canDropFromExplosion(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Explosion): boolean;
        getBeaconColorMultiplier(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): number;
        getExplosionResistance(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Explosion): number;
        getEnchantPowerBonus(arg0: $LevelReader, arg1: $BlockPos_): number;
        getToolModifiedState(arg0: $UseOnContext, arg1: $ItemAbility_, arg2: boolean): $BlockState;
        shouldDisplayFluidOverlay(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $FluidState): boolean;
        supportsExternalFaceHiding(): boolean;
        getBubbleColumnDirection(): $BubbleColumnDirection;
        onDestroyedByPlayer(arg0: $Level_, arg1: $BlockPos_, arg2: $Player, arg3: boolean, arg4: $FluidState): boolean;
        onDestroyedByPushReaction(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $FluidState): void;
        getAdjacentBlockPathType(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Mob, arg3: $PathType_): $PathType;
        addRunningEffects(arg0: $Level_, arg1: $BlockPos_, arg2: $Entity): boolean;
        onBlockStateChange(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_): void;
        getLightEmission(arg0: $BlockGetter, arg1: $BlockPos_): number;
        onNeighborChange(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): void;
        getWeakChanges(arg0: $LevelReader, arg1: $BlockPos_): boolean;
        shouldHideAdjacentFluidFace(arg0: $Direction_, arg1: $FluidState): boolean;
        addLandingEffects(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: $LivingEntity, arg4: number): boolean;
        canRedstoneConnectTo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        isScaffolding(arg0: $LivingEntity): boolean;
        setBedOccupied(arg0: $Level_, arg1: $BlockPos_, arg2: $LivingEntity, arg3: boolean): void;
        getBedDirection(arg0: $LevelReader, arg1: $BlockPos_): $Direction;
        collisionExtendsVertically(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Entity): boolean;
        modifyReturnValue$ilo000$petrolpark$scaleFrictionAttribute(arg0: number, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Entity | null): number;
        hidesNeighborFace(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_): boolean;
        isStickyBlock(): boolean;
        onCaughtFire(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $LivingEntity): void;
        ignitedByLava(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        isFlammable(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        getFireSpreadSpeed(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): number;
        canHarvestBlock(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Player): boolean;
        isConduitFrame(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): boolean;
        getRespawnPosition(arg0: $EntityType_<never>, arg1: $LevelReader, arg2: $BlockPos_, arg3: number): ($ServerPlayer$RespawnPosAngle) | undefined;
        isSlimeBlock(): boolean;
        canEntityDestroy(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Entity): boolean;
        onBlockExploded(arg0: $Level_, arg1: $BlockPos_, arg2: $Explosion): void;
        isFireSource(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Direction_): boolean;
        isPortalFrame(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        getFlammability(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): number;
        canSustainPlant(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_, arg3: $BlockState_): $TriState;
        getCloneItemStack(arg0: $HitResult, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Player): $ItemStack;
        onTreeGrow(arg0: $LevelReader, arg1: $BiConsumer_<$BlockPos, $BlockState>, arg2: $RandomSource, arg3: $BlockPos_, arg4: $TreeConfiguration): boolean;
        getExpDrop(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockEntity, arg3: $Entity, arg4: $ItemStack_): number;
        isLadder(arg0: $LevelReader, arg1: $BlockPos_, arg2: $LivingEntity): boolean;
        canStickTo(arg0: $BlockState_): boolean;
        isBurning(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        isFertile(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        handler$zfn000$fabric_rendering_fluids_v1$shouldDisplayFluidOverlay(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $FluidState, arg3: $CallbackInfoReturnable<any>): void;
        canBeHydrated(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $FluidState, arg3: $BlockPos_): boolean;
        getAppearance(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $Direction_, arg3: $BlockState_, arg4: $BlockPos_): $BlockState;
        static PROPERTIES_TAG: string;
        owner: $Block;
        cache: $BlockBehaviour$BlockStateBase$Cache;
        static CODEC: $Codec<$BlockState>;
        static PROPERTY_ENTRY_TO_STRING_FUNCTION: $Function<$Map$Entry<$Property<never>, $Comparable<never>>, string>;
        static NAME_TAG: string;
        propertiesCodec: $MapCodec<$BlockState>;
        constructor(arg0: $Block_, arg1: $Reference2ObjectArrayMap<$Property<never>, $Comparable_<never>>, arg2: $MapCodec_<$BlockState_>);
        get empty(): boolean;
        get bubbleColumnDirection(): $BubbleColumnDirection;
        get stickyBlock(): boolean;
        get slimeBlock(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockState}.
     */
    export type $BlockState_ = $Block_;
    export class $StateDefinition$Factory<O, S> {
    }
    export interface $StateDefinition$Factory<O, S> {
        create(owner: O, values: $Reference2ObjectArrayMap<$Property<never>, $Comparable_<never>>, propertiesCodec: $MapCodec_<S>): S;
    }
    /**
     * Values that may be interpreted as {@link $StateDefinition$Factory}.
     */
    export type $StateDefinition$Factory_<O, S> = ((arg0: O, arg1: $Reference2ObjectArrayMap<$Property<never>, $Comparable<never>>, arg2: $MapCodec<S>) => S);
    export class $BlockBehaviour$BlockStateBase extends $StateHolder<$Block, $BlockState> implements $IBlockState, $BlockStateKJS {
        is(block: $Holder_<$Block>): boolean;
        is(holder: $HolderSet_<$Block>): boolean;
        is(block: $Block_): boolean;
        is(tag: $TagKey_<$Block>, predicate: $Predicate_<$BlockBehaviour$BlockStateBase>): boolean;
        is(tag: $TagKey_<$Block>): boolean;
        is(block: $ResourceKey_<$Block>): boolean;
        getOffset(level: $BlockGetter, pos: $BlockPos_): $Vec3;
        /**
         * @deprecated
         * @return the blockstate with the given rotation. If inapplicable, returns itself.
         */
        rotate(rotation: $Rotation_): $BlockState;
        tick(level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): void;
        initCache(): void;
        clearCache(): void;
        getSeed(pos: $BlockPos_): number;
        getShape(level: $BlockGetter, pos: $BlockPos_, context: $CollisionContext): $VoxelShape;
        getShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        /**
         * @deprecated
         */
        getSoundType(): $SoundType;
        canSurvive(level: $LevelReader, pos: $BlockPos_): boolean;
        hasAnalogOutputSignal(): boolean;
        /**
         * @return true if the collision box of this state covers the entire upper face of the blockspace
         */
        entityCanStandOnFace(level: $BlockGetter, pos: $BlockPos_, entity: $Entity, face: $Direction_): boolean;
        updateNeighbourShapes(level: $LevelAccessor, pos: $BlockPos_, flags: number): void;
        updateNeighbourShapes(level: $LevelAccessor, pos: $BlockPos_, flags: number, recursionLeft: number): void;
        isRedstoneConductor(level: $BlockGetter, pos: $BlockPos_): boolean;
        getInteractionShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        onRemove(level: $Level_, pos: $BlockPos_, oldState: $BlockState_, movedByPiston: boolean): void;
        setLightEmission(arg0: number): void;
        setRequiresTool(arg0: boolean): void;
        getFaceOcclusionShape(level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): $VoxelShape;
        setDestroySpeed(arg0: number): void;
        propagatesSkylightDown(level: $BlockGetter, pos: $BlockPos_): boolean;
        getAnalogOutputSignal(level: $Level_, pos: $BlockPos_): number;
        getBlockSupportShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        useShapeForLightOcclusion(): boolean;
        onExplosionHit(level: $Level_, pos: $BlockPos_, explosion: $Explosion, dropConsumer: $BiConsumer_<$ItemStack, $BlockPos>): void;
        isSuffocating(level: $BlockGetter, pos: $BlockPos_): boolean;
        getBlock(): $Block;
        getTags(): $Stream<$TagKey<$Block>>;
        /**
         * @return the blockstate mirrored in the given way. If inapplicable, returns itself.
         */
        mirror(mirror: $Mirror_): $BlockState;
        getCollisionShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        getCollisionShape(level: $BlockGetter, pos: $BlockPos_, context: $CollisionContext): $VoxelShape;
        entityInside(level: $Level_, pos: $BlockPos_, entity: $Entity): void;
        getLightBlock(level: $BlockGetter, pos: $BlockPos_): number;
        /**
         * @deprecated
         */
        getLightEmission(): number;
        triggerEvent(level: $Level_, pos: $BlockPos_, id: number, param: number): boolean;
        getDirectSignal(level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): number;
        isSignalSource(): boolean;
        isFaceSturdy(level: $BlockGetter, pos: $BlockPos_, face: $Direction_, supportType: $SupportType_): boolean;
        isFaceSturdy(level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): boolean;
        hasLargeCollisionShape(): boolean;
        handleNeighborChanged(level: $Level_, pos: $BlockPos_, block: $Block_, fromPos: $BlockPos_, isMoving: boolean): void;
        getBlockHolder(): $Holder<$Block>;
        isViewBlocking(level: $BlockGetter, pos: $BlockPos_): boolean;
        isCacheInvalid(): boolean;
        entityCanStandOn(level: $BlockGetter, pos: $BlockPos_, entity: $Entity): boolean;
        emissiveRendering(level: $BlockGetter, pos: $BlockPos_): boolean;
        hasPostProcess(level: $BlockGetter, pos: $BlockPos_): boolean;
        hasOffsetFunction(): boolean;
        isValidSpawn(level: $BlockGetter, pos: $BlockPos_, entityType: $EntityType_<never>): boolean;
        /**
         * @deprecated
         */
        blocksMotion(): boolean;
        canBeReplaced(fluid: $Fluid_): boolean;
        canBeReplaced(useContext: $BlockPlaceContext): boolean;
        canBeReplaced(): boolean;
        getPistonPushReaction(): $PushReaction;
        isCollisionShapeFullBlock(level: $BlockGetter, pos: $BlockPos_): boolean;
        attack(level: $Level_, pos: $BlockPos_, player: $Player): void;
        useItemOn(stack: $ItemStack_, level: $Level_, player: $Player, hand: $InteractionHand_, hitResult: $BlockHitResult): $ItemInteractionResult;
        isAir(): boolean;
        updateShape(direction: $Direction_, neighborState: $BlockState_, level: $LevelAccessor, pos: $BlockPos_, neighborPos: $BlockPos_): $BlockState;
        skipRendering(state: $BlockState_, face: $Direction_): boolean;
        /**
         * @deprecated
         */
        ignitedByLava(): boolean;
        getRenderShape(): $RenderShape;
        hasBlockEntity(): boolean;
        handler$kha000$ferritecore$cacheStateTail(arg0: $CallbackInfo): void;
        handler$kha000$ferritecore$cacheStateHead(arg0: $CallbackInfo): void;
        handler$zmo000$iris$getShadeBrightness(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $CallbackInfoReturnable<any>): void;
        getFluidState(): $FluidState;
        requiresCorrectToolForDrops(): boolean;
        onPlace(level: $Level_, pos: $BlockPos_, oldState: $BlockState_, movedByPiston: boolean): void;
        getDrops(lootParams: $LootParams$Builder): $List<$ItemStack>;
        /**
         * @deprecated
         */
        isSolid(): boolean;
        canOcclude(): boolean;
        shouldSpawnTerrainParticles(): boolean;
        instrument(): $NoteBlockInstrument;
        randomTick(level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): void;
        updateIndirectNeighbourShapes(level: $LevelAccessor, pos: $BlockPos_, flags: number, recursionLeft: number): void;
        updateIndirectNeighbourShapes(level: $LevelAccessor, pos: $BlockPos_, flags: number): void;
        asState(): $BlockState;
        getTicker<T extends $BlockEntity>(level: $Level_, blockEntityType: $BlockEntityType_<T>): $BlockEntityTicker<T>;
        getOcclusionShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        getMenuProvider(level: $Level_, pos: $BlockPos_): $MenuProvider;
        getVisualShape(level: $BlockGetter, pos: $BlockPos_, context: $CollisionContext): $VoxelShape;
        useWithoutItem(level: $Level_, player: $Player, hitResult: $BlockHitResult): $InteractionResult;
        isPathfindable(arg0: $PathComputationType_): boolean;
        getShadeBrightness(level: $BlockGetter, pos: $BlockPos_): number;
        onProjectileHit(level: $Level_, state: $BlockState_, hit: $BlockHitResult, projectile: $Projectile): void;
        spawnAfterBreak(level: $ServerLevel, pos: $BlockPos_, stack: $ItemStack_, dropExperience: boolean): void;
        isSolidRender(level: $BlockGetter, pos: $BlockPos_): boolean;
        isRandomlyTicking(): boolean;
        getDestroyProgress(player: $Player, level: $BlockGetter, pos: $BlockPos_): number;
        getMapColor(level: $BlockGetter, pos: $BlockPos_): $MapColor;
        getSignal(level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): number;
        /**
         * @deprecated
         */
        liquid(): boolean;
        getDestroySpeed(level: $BlockGetter, pos: $BlockPos_): number;
        getId(): string;
        getKey(): $ResourceKey<$Block>;
        randomTickOverride(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): boolean;
        getWebIconURL(size: number): $RelativeURL;
        toString(): string;
        asHolder(): $Holder<$Block>;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        getRegistry(): $Registry<$Block>;
        hasTag(tag: $ResourceLocation_): boolean;
        getMod(): string;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getTags(): $List<$ResourceLocation>;
        getTagKeys(): $List<$TagKey<$Block>>;
        getIdLocation(): $ResourceLocation;
        static PROPERTIES_TAG: string;
        owner: $Block;
        cache: $BlockBehaviour$BlockStateBase$Cache;
        static PROPERTY_ENTRY_TO_STRING_FUNCTION: $Function<$Map$Entry<$Property<never>, $Comparable<never>>, string>;
        static NAME_TAG: string;
        propertiesCodec: $MapCodec<$BlockState>;
        constructor(owner: $Block_, values: $Reference2ObjectArrayMap<$Property<never>, $Comparable_<never>>, propertiesCodec: $MapCodec_<$BlockState_>);
        get soundType(): $SoundType;
        set requiresTool(value: boolean);
        get block(): $Block;
        get signalSource(): boolean;
        get blockHolder(): $Holder<$Block>;
        get cacheInvalid(): boolean;
        get pistonPushReaction(): $PushReaction;
        get air(): boolean;
        get renderShape(): $RenderShape;
        get fluidState(): $FluidState;
        get solid(): boolean;
        get randomlyTicking(): boolean;
        get id(): string;
        get key(): $ResourceKey<$Block>;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get registry(): $Registry<$Block>;
        get mod(): string;
        get tagKeys(): $List<$TagKey<$Block>>;
        get idLocation(): $ResourceLocation;
    }
    export class $BlockBehaviour$OffsetFunction {
    }
    export interface $BlockBehaviour$OffsetFunction {
        evaluate(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): $Vec3;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviour$OffsetFunction}.
     */
    export type $BlockBehaviour$OffsetFunction_ = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos) => $Vec3_);
    export class $BlockBehaviour$StatePredicate {
    }
    export interface $BlockBehaviour$StatePredicate {
        test(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviour$StatePredicate}.
     */
    export type $BlockBehaviour$StatePredicate_ = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos) => boolean);
    export class $BlockBehaviour$Properties implements $AbstractBlockSettingsAccessor {
        static of(): $BlockBehaviour$Properties;
        friction(destroyTime: number): $BlockBehaviour$Properties;
        air(): $BlockBehaviour$Properties;
        isRedstoneConductor(emissiveRendering: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        lightLevel(lightEmission: $ToIntFunction_<$BlockState>): $BlockBehaviour$Properties;
        static ofFullCopy(blockBehaviour: $BlockBehaviour): $BlockBehaviour$Properties;
        noLootTable(): $BlockBehaviour$Properties;
        explosionResistance(destroyTime: number): $BlockBehaviour$Properties;
        isSuffocating(emissiveRendering: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        strength(destroyTime: number): $BlockBehaviour$Properties;
        strength(destroyTime: number, explosionResistance: number): $BlockBehaviour$Properties;
        requiredFeatures(...requiredFeatures: $FeatureFlag[]): $BlockBehaviour$Properties;
        pushReaction(pushReaction: $PushReaction_): $BlockBehaviour$Properties;
        replaceable(): $BlockBehaviour$Properties;
        forceSolidOn(): $BlockBehaviour$Properties;
        isViewBlocking(emissiveRendering: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        emissiveRendering(emissiveRendering: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        /**
         * @deprecated
         */
        forceSolidOff(): $BlockBehaviour$Properties;
        hasPostProcess(emissiveRendering: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        isValidSpawn(isValidSpawn: $BlockBehaviour$StateArgumentPredicate_<$EntityType<never>>): $BlockBehaviour$Properties;
        sound(soundType: $SoundType_): $BlockBehaviour$Properties;
        speedFactor(destroyTime: number): $BlockBehaviour$Properties;
        ignitedByLava(): $BlockBehaviour$Properties;
        dynamicShape(): $BlockBehaviour$Properties;
        instabreak(): $BlockBehaviour$Properties;
        /**
         * @deprecated
         */
        dropsLike(block: $Block_): $BlockBehaviour$Properties;
        lootFrom(arg0: $Supplier_<$Block>): $BlockBehaviour$Properties;
        offsetType(offsetType: $BlockBehaviour$OffsetType_): $BlockBehaviour$Properties;
        requiresCorrectToolForDrops(): $BlockBehaviour$Properties;
        jumpFactor(destroyTime: number): $BlockBehaviour$Properties;
        instrument(instrument: $NoteBlockInstrument_): $BlockBehaviour$Properties;
        mapColor(mapColor: $MapColor): $BlockBehaviour$Properties;
        mapColor(mapColor: $Function_<$BlockState, $MapColor>): $BlockBehaviour$Properties;
        mapColor(mapColor: $DyeColor_): $BlockBehaviour$Properties;
        destroyTime(destroyTime: number): $BlockBehaviour$Properties;
        noOcclusion(): $BlockBehaviour$Properties;
        randomTicks(): $BlockBehaviour$Properties;
        /**
         * @deprecated
         */
        static ofLegacyCopy(blockBehaviour: $BlockBehaviour): $BlockBehaviour$Properties;
        noTerrainParticles(): $BlockBehaviour$Properties;
        noCollission(): $BlockBehaviour$Properties;
        liquid(): $BlockBehaviour$Properties;
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
        offsetFunction: $BlockBehaviour$OffsetFunction;
        canOcclude: boolean;
        lightEmission: $ToIntFunction<$BlockState>;
        drops: $ResourceKey<$LootTable>;
        soundType: $SoundType;
        static CODEC: $Codec<$BlockBehaviour$Properties>;
        isRandomlyTicking: boolean;
        spawnTerrainParticles: boolean;
        isAir: boolean;
        hasCollision: boolean;
        constructor();
        get luminance(): $ToIntFunction<$BlockState>;
    }
    export class $BlockBehaviour$StateArgumentPredicate<A> {
    }
    export interface $BlockBehaviour$StateArgumentPredicate<A> {
        test(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, value: A): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviour$StateArgumentPredicate}.
     */
    export type $BlockBehaviour$StateArgumentPredicate_<A> = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos, arg3: A) => boolean);
    export class $StateHolder<O, S> implements $StateHolderAccessor<any, any>, $FastMapStateHolder<any> {
        /**
         * @return the value of the given Property for this state
         */
        getValue<T extends $Comparable<T>>(property: $Property<T>): T;
        /**
         * @return an unmodifiable collection of all possible properties.
         */
        getProperties(): $Collection<$Property<never>>;
        setValue<T extends $Comparable<T>, V extends T>(property: $Property<T>, value: V): $Object;
        static codec<O, S extends $StateHolder<O, S>>(propertyMap: $Codec<O>, holderFunction: $Function_<O, S>): $Codec<S>;
        cycle<T extends $Comparable<T>>(property: $Property<T>): $Object;
        getValues(): $Map<$Property<never>, $Comparable<never>>;
        hasProperty<T extends $Comparable<T>>(property: $Property<T>): boolean;
        static findNextInCollection<T>(collection: $Collection_<T>, value: T): T;
        getVanillaPropertyMap(): $Reference2ObjectMap<any, any>;
        setNeighborTable(arg0: $Table<any, any, any>): void;
        setStateMap(arg0: $FastMap<any>): void;
        getOptionalValue<T extends $Comparable<T>>(property: $Property<T>): (T) | undefined;
        getStateMap(): $FastMap<any>;
        getStateIndex(): number;
        setStateIndex(arg0: number): void;
        getNeighborTable(): $Table<any, any, any>;
        trySetValue<T extends $Comparable<T>, V extends T>(property: $Property<T>, value: V): $Object;
        populateNeighbours(possibleStateMap: $Map_<any, any>): void;
        replacePropertyMap(arg0: $Reference2ObjectMap<any, any>): void;
        redirect$kgm000$ferritecore$getNeighborFromFastMap(arg0: $Table<any, any, any>, arg1: $Object, arg2: $Object): $Object;
        getOwner(): $Object;
        static PROPERTIES_TAG: string;
        owner: $Object;
        static PROPERTY_ENTRY_TO_STRING_FUNCTION: $Function<$Map$Entry<$Property<never>, $Comparable<never>>, string>;
        static NAME_TAG: string;
        propertiesCodec: $MapCodec<$Object>;
        constructor(owner: $Object, values: $Reference2ObjectArrayMap<$Property<never>, $Comparable_<never>>, propertiesCodec: $MapCodec_<$Object>);
        get properties(): $Collection<$Property<never>>;
        get values(): $Map<$Property<never>, $Comparable<never>>;
        get vanillaPropertyMap(): $Reference2ObjectMap<any, any>;
    }
}
