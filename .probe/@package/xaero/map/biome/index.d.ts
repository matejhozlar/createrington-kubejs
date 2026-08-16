import { $BlockAndTintGetter, $ChunkPos, $ClipContext, $ColorResolver_, $ClipBlockStateContext, $LightLayer_, $Level_ } from "@package/net/minecraft/world/level";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $MapTile } from "@package/xaero/map/region";
import { $Biome_, $Biome } from "@package/net/minecraft/world/level/biome";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Supplier_ } from "@package/java/util/function";
import { $BlockPos_, $Direction_, $Registry, $BlockPos$MutableBlockPos, $Holder } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $MapWriter, $MapProcessor } from "@package/xaero/map";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Object } from "@package/java/lang";
import { $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $Vec3_, $AABB_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $BrokenBlockTintCache } from "@package/xaero/map/cache";

declare module "@package/xaero/map/biome" {
    export class $BiomeColorCalculator {
        prepare(arg0: boolean): void;
        getBiomeColor(arg0: $ColorResolver_, arg1: boolean, arg2: $BlockPos$MutableBlockPos, arg3: $MapTile, arg4: number, arg5: $Registry<$Biome_>, arg6: $MapProcessor): number;
        getBiomeAtPos(arg0: $BlockPos_, arg1: $MapTile, arg2: number, arg3: $MapProcessor): $ResourceKey<$Biome>;
        UNREACHABLE_BIOME: $ResourceKey<$Biome>;
        RIVER_BIOME: $ResourceKey<$Biome>;
        constructor();
    }
    export class $BiomeGetter {
        getBiome(arg0: $Level_, arg1: $BlockPos_, arg2: $Registry<$Biome_>): $ResourceKey<$Biome>;
        UNKNOWN_BIOME: $ResourceKey<$Biome>;
        PLACEHOLDER_BIOME: $ResourceKey<$Biome>;
        constructor();
    }
    export class $BlockTintProvider implements $BlockAndTintGetter {
        getBlockState(arg0: $BlockPos_): $BlockState;
        getLightEngine(): $LevelLightEngine;
        getBlockTint(arg0: $BlockPos_, arg1: $ColorResolver_): number;
        getMinBuildHeight(): number;
        getBlockEntity(arg0: $BlockPos_): $BlockEntity;
        getFluidState(arg0: $BlockPos_): $FluidState;
        getHeight(): number;
        getShade(arg0: $Direction_, arg1: boolean): number;
        getBiomeColor(arg0: $BlockPos_, arg1: $BlockState_, arg2: boolean, arg3: $MapTile, arg4: number): number;
        getRawBrightness(arg0: $BlockPos_, arg1: number): number;
        getBrightness(arg0: $LightLayer_, arg1: $BlockPos_): number;
        canSeeSky(arg0: $BlockPos_): boolean;
        clip(arg0: $ClipContext): $BlockHitResult;
        getBlockFloorHeight(arg0: $BlockPos_): number;
        getBlockFloorHeight(arg0: $VoxelShape, arg1: $Supplier_<$VoxelShape>): number;
        clipWithInteractionOverride(arg0: $Vec3_, arg1: $Vec3_, arg2: $BlockPos_, arg3: $VoxelShape, arg4: $BlockState_): $BlockHitResult;
        getLightEmission(arg0: $BlockPos_): number;
        getMaxLightLevel(): number;
        getBlockStates(arg0: $AABB_): $Stream<$BlockState>;
        isBlockInLine(arg0: $ClipBlockStateContext): $BlockHitResult;
        getBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $BlockEntityType_<T>): (T) | undefined;
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
        constructor(arg0: $Registry<$Biome_>, arg1: $BiomeColorCalculator, arg2: $MapProcessor, arg3: $BrokenBlockTintCache, arg4: $MapWriter);
        get lightEngine(): $LevelLightEngine;
        get minBuildHeight(): number;
        get height(): number;
        get maxLightLevel(): number;
        get maxBuildHeight(): number;
        get maxSection(): number;
        get minSection(): number;
        get sectionsCount(): number;
    }
}
