import { $MinecraftServer } from "@package/net/minecraft/server";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $GameEvent, $GameEvent$Context_ } from "@package/net/minecraft/world/level/gameevent";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $UUID_, $Map$Entry, $Set, $List, $List_, $Collection } from "@package/java/util";
import { $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $RandomSource } from "@package/net/minecraft/util";
import { $WorldBorder } from "@package/net/minecraft/world/level/border";
import { $DifficultyInstance, $Difficulty } from "@package/net/minecraft/world";
import { $Supplier_, $Predicate_ } from "@package/java/util/function";
import { $ChunkHolder, $ChunkResult, $ChunkHolder$PlayerProvider_, $ChunkHolder$LevelChangeListener_, $ServerLevel } from "@package/net/minecraft/server/level";
import { $SoundEvent_, $SoundSource_ } from "@package/net/minecraft/sounds";
import { $BlockPos, $BlockPos_, $RegistryAccess, $Registry, $Holder$Reference, $Holder_, $Holder, $Direction_, $HolderLookup } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ChunkStatus, $ChunkStatus_ } from "@package/net/minecraft/world/level/chunk/status";
import { $TargetingConditions } from "@package/net/minecraft/world/entity/ai/targeting";
import { $BlockEntitySubLevelActor, $BlockEntitySubLevelReactionWheel } from "@package/dev/ryanhcode/sable/api/block";
import { $Iterable, $Class, $Object } from "@package/java/lang";
import { $Heightmap$Types_ } from "@package/net/minecraft/world/level/levelgen";
import { $EntityTypeTest } from "@package/net/minecraft/world/level/entity";
import { $ServerLevelAccessor, $LightLayer_, $ChunkPos, $BlockGetter, $EntityGetter, $ClipContext, $ClipBlockStateContext, $CommonLevelAccessor, $LevelHeightAccessor, $ColorResolver_, $Level_ } from "@package/net/minecraft/world/level";
import { $TickPriority_, $LevelTickAccess } from "@package/net/minecraft/world/ticks";
import { $BoundingBox3ic } from "@package/dev/ryanhcode/sable/companion/math";
import { $FluidState, $Fluid_, $Fluid } from "@package/net/minecraft/world/level/material";
import { $Biome, $BiomeManager } from "@package/net/minecraft/world/level/biome";
import { $LevelChunk, $ChunkSource, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $LevelData } from "@package/net/minecraft/world/level/storage";
import { $SubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Stream } from "@package/java/util/stream";
import { $AtomicReferenceArray, $AtomicReference } from "@package/java/util/concurrent/atomic";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $AABB_, $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $SubLevelContainer } from "@package/dev/ryanhcode/sable/api/sublevel";
import { $Vector3dc } from "@package/org/joml";
export * as heat from "@package/dev/ryanhcode/sable/sublevel/plot/heat";

declare module "@package/dev/ryanhcode/sable/sublevel/plot" {
    export class $LevelPlot {
        contains(arg0: $Vec3_): boolean;
        contains(arg0: number, arg1: number): boolean;
        contains(arg0: $ChunkPos): boolean;
        contains(arg0: $Vector3dc): boolean;
        tick(): void;
        getChunk(arg0: $ChunkPos): $LevelChunk;
        onRemove(): void;
        setBoundingBox(arg0: $BoundingBox3ic): void;
        getLightEngine(): $LevelLightEngine;
        getBlockEntityActors(): $Iterable<$BlockEntitySubLevelActor>;
        addChunkHolder(arg0: $ChunkPos, arg1: $PlotChunkHolder, arg2: boolean): void;
        updateBoundingBox(): void;
        getLoadedChunks(): $Collection<$PlotChunkHolder>;
        getBoundingBox(): $BoundingBox3ic;
        getChunkHolder(arg0: $ChunkPos): $PlotChunkHolder;
        getSubLevel(): $SubLevel;
        getCenterChunk(): $ChunkPos;
        getChunkMin(): $ChunkPos;
        newEmptyChunk(arg0: $ChunkPos): void;
        getChunkMax(): $ChunkPos;
        expandIfNecessary(arg0: $BlockPos_): void;
        onBlockChange(arg0: $BlockPos_, arg1: $BlockState_): void;
        getEmbeddedLevelAccessor(): $EmbeddedPlotLevelAccessor;
        getCenterBlock(): $BlockPos;
        toLocal(arg0: $ChunkPos): $ChunkPos;
        getBlockEntityReactionWheelMap(): $Set<$Map$Entry<$BlockPos, $BlockEntitySubLevelReactionWheel>>;
        getBlockEntityReactionWheels(): $Collection<$BlockEntitySubLevelReactionWheel>;
        toGlobal(arg0: $ChunkPos): $ChunkPos;
        plotPos: $ChunkPos;
        constructor(arg0: $SubLevelContainer, arg1: number, arg2: number, arg3: number, arg4: $SubLevel);
        get lightEngine(): $LevelLightEngine;
        get blockEntityActors(): $Iterable<$BlockEntitySubLevelActor>;
        get loadedChunks(): $Collection<$PlotChunkHolder>;
        get subLevel(): $SubLevel;
        get centerChunk(): $ChunkPos;
        get chunkMin(): $ChunkPos;
        get chunkMax(): $ChunkPos;
        get embeddedLevelAccessor(): $EmbeddedPlotLevelAccessor;
        get centerBlock(): $BlockPos;
        get blockEntityReactionWheelMap(): $Set<$Map$Entry<$BlockPos, $BlockEntitySubLevelReactionWheel>>;
        get blockEntityReactionWheels(): $Collection<$BlockEntitySubLevelReactionWheel>;
    }
    export class $PlotChunkHolder extends $ChunkHolder {
        static create(arg0: $Level_, arg1: $ChunkPos, arg2: $LevelLightEngine, arg3: $LevelChunk): $PlotChunkHolder;
        getChunk(): $LevelChunk;
        getBoundingBox(): $BoundingBox3ic;
        handleBlockChange(arg0: number, arg1: number, arg2: number, arg3: $BlockState_, arg4: $BlockState_): void;
        getHeatSection(arg0: number): $HeatDataChunkSection;
        setHeatSection(arg0: number, arg1: $HeatDataChunkSection): void;
        currentlyLoading: $LevelChunk;
        pos: $ChunkPos;
        static UNLOADED_CHUNK: $ChunkResult<$ChunkAccess>;
        entityTickingChunkFuture: $CompletableFuture<$ChunkResult<$LevelChunk>>;
        static UNLOADED_LEVEL_CHUNK: $ChunkResult<$LevelChunk>;
        tickingChunkFuture: $CompletableFuture<$ChunkResult<$LevelChunk>>;
        static UNLOADED_CHUNK_FUTURE: $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        startedWork: $AtomicReference<$ChunkStatus>;
        futures: $AtomicReferenceArray<$CompletableFuture<$ChunkResult<$ChunkAccess>>>;
        fullChunkFuture: $CompletableFuture<$ChunkResult<$LevelChunk>>;
        constructor(arg0: $LevelChunk, arg1: $ChunkPos, arg2: $LevelHeightAccessor, arg3: $LevelLightEngine, arg4: $ChunkHolder$LevelChangeListener_, arg5: $ChunkHolder$PlayerProvider_);
        get chunk(): $LevelChunk;
        get boundingBox(): $BoundingBox3ic;
    }
    export class $HeatDataChunkSection {
        get(arg0: number, arg1: number, arg2: number): number;
        set(arg0: number, arg1: number, arg2: number, arg3: number): void;
        static getIndex(arg0: number, arg1: number, arg2: number): number;
        static SIZE: number;
        constructor();
    }
    export class $EmbeddedPlotLevelAccessor implements $CommonLevelAccessor, $ServerLevelAccessor {
        getLevel(): $ServerLevel;
        getChunk(arg0: number, arg1: number, arg2: $ChunkStatus_, arg3: boolean): $ChunkAccess;
        getRandom(): $RandomSource;
        gameEvent(arg0: $Holder_<$GameEvent>, arg1: $Vec3_, arg2: $GameEvent$Context_): void;
        playSound(arg0: $Player, arg1: $BlockPos_, arg2: $SoundEvent_, arg3: $SoundSource_, arg4: number, arg5: number): void;
        getServer(): $MinecraftServer;
        getCurrentDifficultyAt(arg0: $BlockPos_): $DifficultyInstance;
        getUncachedNoiseBiome(arg0: number, arg1: number, arg2: number): $Holder<$Biome>;
        getBiomeManager(): $BiomeManager;
        levelEvent(arg0: $Player, arg1: number, arg2: $BlockPos_, arg3: number): void;
        getBlockState(arg0: $BlockPos_): $BlockState;
        destroyBlock(arg0: $BlockPos_, arg1: boolean, arg2: $Entity, arg3: number): boolean;
        /**
         * @deprecated
         */
        getSeaLevel(): number;
        getLightEngine(): $LevelLightEngine;
        removeBlock(arg0: $BlockPos_, arg1: boolean): boolean;
        isFluidAtPosition(arg0: $BlockPos_, arg1: $Predicate_<$FluidState>): boolean;
        isStateAtPosition(arg0: $BlockPos_, arg1: $Predicate_<$BlockState>): boolean;
        nextSubTickCount(): number;
        getSkyDarken(): number;
        getBlockTicks(): $LevelTickAccess<$Block>;
        getFluidTicks(): $LevelTickAccess<$Fluid>;
        getEntities<T extends $Entity>(arg0: $EntityTypeTest<$Entity, T>, arg1: $AABB_, arg2: $Predicate_<T>): $List<T>;
        getEntities(arg0: $Entity, arg1: $AABB_, arg2: $Predicate_<$Entity>): $List<$Entity>;
        isClientSide(): boolean;
        addParticle(arg0: $ParticleOptions_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        dimensionType(): $DimensionType;
        getLevelData(): $LevelData;
        enabledFeatures(): $FeatureFlagSet;
        getWorldBorder(): $WorldBorder;
        getBlockEntity(arg0: $BlockPos_): $BlockEntity;
        registryAccess(): $RegistryAccess;
        getChunkSource(): $ChunkSource;
        getFluidState(arg0: $BlockPos_): $FluidState;
        getHeight(arg0: $Heightmap$Types_, arg1: number, arg2: number): number;
        setBlock(arg0: $BlockPos_, arg1: $BlockState_, arg2: number, arg3: number): boolean;
        hasChunk(arg0: number, arg1: number): boolean;
        getShade(arg0: $Direction_, arg1: boolean): number;
        getEntityCollisions(arg0: $Entity | null, arg1: $AABB_): $List<$VoxelShape>;
        getHeightmapPos(arg0: $Heightmap$Types_, arg1: $BlockPos_): $BlockPos;
        isUnobstructed(arg0: $Entity | null, arg1: $VoxelShape): boolean;
        getBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $BlockEntityType_<T>): (T) | undefined;
        addFreshEntityWithPassengers(arg0: $Entity): void;
        hasNearbyAlivePlayer(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getEntitiesOfClass<T extends $Entity>(arg0: $Class<T>, arg1: $AABB_, arg2: $Predicate_<T>): $List<T>;
        getEntitiesOfClass<T extends $Entity>(arg0: $Class<T>, arg1: $AABB_): $List<T>;
        getNearbyPlayers(arg0: $TargetingConditions, arg1: $LivingEntity, arg2: $AABB_): $List<$Player>;
        getNearestEntity<T extends $LivingEntity>(arg0: $List_<T>, arg1: $TargetingConditions, arg2: $LivingEntity | null, arg3: number, arg4: number, arg5: number): T;
        getNearestEntity<T extends $LivingEntity>(arg0: $Class<T>, arg1: $TargetingConditions, arg2: $LivingEntity | null, arg3: number, arg4: number, arg5: number, arg6: $AABB_): T;
        getPlayerByUUID(arg0: $UUID_): $Player;
        getNearestPlayer(arg0: $TargetingConditions, arg1: $LivingEntity, arg2: number, arg3: number, arg4: number): $Player;
        getNearestPlayer(arg0: $TargetingConditions, arg1: number, arg2: number, arg3: number): $Player;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Predicate_<$Entity> | null): $Player;
        getNearestPlayer(arg0: $Entity, arg1: number): $Player;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): $Player;
        getNearestPlayer(arg0: $TargetingConditions, arg1: $LivingEntity): $Player;
        getNearbyEntities<T extends $LivingEntity>(arg0: $Class<T>, arg1: $TargetingConditions, arg2: $LivingEntity, arg3: $AABB_): $List<T>;
        getEntities(arg0: $Entity | null, arg1: $AABB_): $List<$Entity>;
        handler$zcd000$openpartiesandclaims$onGetEntitiesOfClass(arg0: $Class<any>, arg1: $AABB_, arg2: $Predicate_<any>, arg3: $CallbackInfoReturnable<any>): void;
        localvar$zcd000$openpartiesandclaims$onGetEntityCollisions(arg0: $List_<any>, arg1: $Entity, arg2: $AABB_): $List<any>;
        getChunk(arg0: $BlockPos_): $ChunkAccess;
        getChunk(arg0: number, arg1: number): $ChunkAccess;
        getChunk(arg0: number, arg1: number, arg2: $ChunkStatus_): $ChunkAccess;
        /**
         * @deprecated
         */
        hasChunkAt(arg0: number, arg1: number): boolean;
        /**
         * @deprecated
         */
        hasChunkAt(arg0: $BlockPos_): boolean;
        getChunkForCollisions(arg0: number, arg1: number): $BlockGetter;
        lithium$getLoadedChunk(arg0: number, arg1: number): $ChunkAccess;
        getMaxLocalRawBrightness(arg0: $BlockPos_): number;
        getMaxLocalRawBrightness(arg0: $BlockPos_, arg1: number): number;
        canSeeSkyFromBelowWater(arg0: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(arg0: $BlockPos_, arg1: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        getPathfindingCostFromLightLevels(arg0: $BlockPos_): number;
        getNoiseBiome(arg0: number, arg1: number, arg2: number): $Holder<$Biome>;
        isEmptyBlock(arg0: $BlockPos_): boolean;
        getBlockTint(arg0: $BlockPos_, arg1: $ColorResolver_): number;
        holderLookup<T>(arg0: $ResourceKey_<$Registry<T>>): $HolderLookup<T>;
        getBiome(arg0: $BlockPos_): $Holder<$Biome>;
        getMinBuildHeight(): number;
        containsAnyLiquid(arg0: $AABB_): boolean;
        getBlockStatesIfLoaded(arg0: $AABB_): $Stream<$BlockState>;
        getHeight(): number;
        /**
         * @deprecated
         */
        getLightLevelDependentMagicValue(arg0: $BlockPos_): number;
        isWaterAt(arg0: $BlockPos_): boolean;
        gameEvent(arg0: $Entity | null, arg1: $Holder_<$GameEvent>, arg2: $BlockPos_): void;
        gameEvent(arg0: $Entity | null, arg1: $Holder_<$GameEvent>, arg2: $Vec3_): void;
        gameEvent(arg0: $Holder_<$GameEvent>, arg1: $BlockPos_, arg2: $GameEvent$Context_): void;
        gameEvent(arg0: $ResourceKey_<$GameEvent>, arg1: $BlockPos_, arg2: $GameEvent$Context_): void;
        playSound(arg0: $Player | null, arg1: $BlockPos_, arg2: $SoundEvent_, arg3: $SoundSource_): void;
        neighborShapeChanged(arg0: $Direction_, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockPos_, arg4: number, arg5: number): void;
        levelEvent(arg0: number, arg1: $BlockPos_, arg2: number): void;
        blockUpdated(arg0: $BlockPos_, arg1: $Block_): void;
        scheduleTick(arg0: $BlockPos_, arg1: $Fluid_, arg2: number): void;
        scheduleTick(arg0: $BlockPos_, arg1: $Block_, arg2: number, arg3: $TickPriority_): void;
        scheduleTick(arg0: $BlockPos_, arg1: $Block_, arg2: number): void;
        scheduleTick(arg0: $BlockPos_, arg1: $Fluid_, arg2: number, arg3: $TickPriority_): void;
        getDifficulty(): $Difficulty;
        dayTime(): number;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        getMcEntities(): $Iterable<$Entity>;
        getPlayers(): $EntityArrayList;
        getMcPlayers(): $List<$Player>;
        self(): $EntityGetter;
        getRawBrightness(arg0: $BlockPos_, arg1: number): number;
        getBrightness(arg0: $LightLayer_, arg1: $BlockPos_): number;
        canSeeSky(arg0: $BlockPos_): boolean;
        getCollisions(arg0: $Entity | null, arg1: $AABB_): $Iterable<$VoxelShape>;
        findFreePosition(arg0: $Entity | null, arg1: $VoxelShape, arg2: $Vec3_, arg3: number, arg4: number, arg5: number): ($Vec3) | undefined;
        getBlockCollisions(arg0: $Entity | null, arg1: $AABB_): $Iterable<$VoxelShape>;
        isUnobstructed(arg0: $Entity): boolean;
        isUnobstructed(arg0: $BlockState_, arg1: $BlockPos_, arg2: $CollisionContext): boolean;
        noBlockCollision(arg0: $Entity | null, arg1: $AABB_): boolean;
        noCollision(arg0: $AABB_): boolean;
        noCollision(arg0: $Entity): boolean;
        noCollision(arg0: $Entity | null, arg1: $AABB_): boolean;
        findSupportingBlock(arg0: $Entity, arg1: $AABB_): ($BlockPos) | undefined;
        collidesWithSuffocatingBlock(arg0: $Entity | null, arg1: $AABB_): boolean;
        getControlInputSignal(arg0: $BlockPos_, arg1: $Direction_, arg2: boolean): number;
        getBestNeighborSignal(arg0: $BlockPos_): number;
        getDirectSignalTo(arg0: $BlockPos_): number;
        getDirectSignal(arg0: $BlockPos_, arg1: $Direction_): number;
        hasNeighborSignal(arg0: $BlockPos_): boolean;
        hasSignal(arg0: $BlockPos_, arg1: $Direction_): boolean;
        getSignal(arg0: $BlockPos_, arg1: $Direction_): number;
        holder<T>(arg0: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        isAreaLoaded(arg0: $BlockPos_, arg1: number): boolean;
        holderOrThrow<T>(arg0: $ResourceKey_<T>): $Holder<T>;
        /**
         * @deprecated
         */
        getBlockEntityRenderAttachment(arg0: $BlockPos_): $Object;
        addFreshEntity(arg0: $Entity): boolean;
        destroyBlock(arg0: $BlockPos_, arg1: boolean): boolean;
        destroyBlock(arg0: $BlockPos_, arg1: boolean, arg2: $Entity | null): boolean;
        setBlock(arg0: $BlockPos_, arg1: $BlockState_, arg2: number): boolean;
        getTimeOfDay(arg0: number): number;
        getMoonBrightness(): number;
        getMoonPhase(): number;
        getEntityByNetworkID(id: number): $Entity;
        getEntityByUUID(id: $UUID_): $Entity;
        getEntities(): $EntityArrayList;
        clip(arg0: $ClipContext): $BlockHitResult;
        getBlockFloorHeight(arg0: $BlockPos_): number;
        getBlockFloorHeight(arg0: $VoxelShape, arg1: $Supplier_<$VoxelShape>): number;
        clipWithInteractionOverride(arg0: $Vec3_, arg1: $Vec3_, arg2: $BlockPos_, arg3: $VoxelShape, arg4: $BlockState_): $BlockHitResult;
        getLightEmission(arg0: $BlockPos_): number;
        getMaxLightLevel(): number;
        getBlockStates(arg0: $AABB_): $Stream<$BlockState>;
        isBlockInLine(arg0: $ClipBlockStateContext): $BlockHitResult;
        getShade(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
        isOutsideBuildHeight(arg0: number): boolean;
        isOutsideBuildHeight(arg0: $BlockPos_): boolean;
        getSectionIndexFromSectionY(arg0: number): number;
        getSectionYFromSectionIndex(arg0: number): number;
        getMaxBuildHeight(): number;
        getSectionIndex(arg0: number): number;
        getMaxSection(): number;
        getMinSection(): number;
        getSectionsCount(): number;
        getModelData(arg0: $BlockPos_): $ModelData;
        getAuxLightManager(arg0: $ChunkPos): $AuxiliaryLightManager;
        getAuxLightManager(arg0: $BlockPos_): $AuxiliaryLightManager;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        getBiomeFabric(arg0: $BlockPos_): $Holder<$Biome>;
        hasBiomes(): boolean;
        constructor(arg0: $LevelPlot);
        get level(): $ServerLevel;
        get random(): $RandomSource;
        get server(): $MinecraftServer;
        get biomeManager(): $BiomeManager;
        get seaLevel(): number;
        get lightEngine(): $LevelLightEngine;
        get skyDarken(): number;
        get blockTicks(): $LevelTickAccess<$Block>;
        get fluidTicks(): $LevelTickAccess<$Fluid>;
        get clientSide(): boolean;
        get levelData(): $LevelData;
        get worldBorder(): $WorldBorder;
        get chunkSource(): $ChunkSource;
        get minBuildHeight(): number;
        get difficulty(): $Difficulty;
        get mcEntities(): $Iterable<$Entity>;
        get players(): $EntityArrayList;
        get mcPlayers(): $List<$Player>;
        get moonBrightness(): number;
        get moonPhase(): number;
        get maxLightLevel(): number;
        get maxBuildHeight(): number;
        get maxSection(): number;
        get minSection(): number;
        get sectionsCount(): number;
    }
}
