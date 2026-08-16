import { $MapCodec_, $DynamicOps, $Codec, $Dynamic, $MapCodec } from "@package/com/mojang/serialization";
import { $Pair, $Either } from "@package/com/mojang/datafixers/util";
import { $SinglePoolElementAccessor, $ListPoolElementAccessor, $FeaturePoolElementAccessor } from "@package/com/agent772/dimconfig/mixin/worldgen";
import { $AccessorSinglePoolElement, $AddPiecesAccessor } from "@package/com/furiusmax/bjornlib/neo/mixin/structures";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $PoolAliasLookup_ } from "@package/net/minecraft/world/level/levelgen/structure/pools/alias";
import { $List, $List_ } from "@package/java/util";
import { $StringRepresentable, $RandomSource, $StringRepresentable$EnumCodec, $SequencedPriorityIterator } from "@package/net/minecraft/util";
import { $Function_, $Function } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $Holder_, $Holder, $BlockPos_, $Registry, $Vec3i } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Enum, $Record } from "@package/java/lang";
import { $PoolElementStructurePiece, $BoundingBox, $Structure$GenerationStub, $Structure$GenerationContext_ } from "@package/net/minecraft/world/level/levelgen/structure";
import { $Heightmap$Types_, $RandomState } from "@package/net/minecraft/world/level/levelgen";
import { $LevelAccessor, $WorldGenLevel, $LevelHeightAccessor, $StructureManager } from "@package/net/minecraft/world/level";
import { $Logger } from "@package/org/slf4j";
import { $StructureTemplate$StructureBlockInfo, $StructureProcessorList, $StructureTemplate$StructureBlockInfo_, $StructureProcessor, $LiquidSettings_, $LiquidSettings, $StructureTemplateManager, $StructurePlaceSettings, $StructureTemplate } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $ChunkGenerator } from "@package/net/minecraft/world/level/chunk";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $PlacedFeature } from "@package/net/minecraft/world/level/levelgen/placement";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $MutableObject } from "@package/org/apache/commons/lang3/mutable";
import { $RecordCodecBuilder } from "@package/com/mojang/serialization/codecs";
import { $Rotation_ } from "@package/net/minecraft/world/level/block";
export * as alias from "@package/net/minecraft/world/level/levelgen/structure/pools/alias";

declare module "@package/net/minecraft/world/level/levelgen/structure/pools" {
    export class $StructurePoolElement {
        static list(elements: $List_<$Function_<$StructureTemplatePool$Projection, $StructurePoolElement>>): $Function<$StructureTemplatePool$Projection, $ListPoolElement>;
        static single(id: string): $Function<$StructureTemplatePool$Projection, $SinglePoolElement>;
        static single(id: string, processors: $Holder_<$StructureProcessorList>): $Function<$StructureTemplatePool$Projection, $SinglePoolElement>;
        static single(id: string, liquidSettings: $LiquidSettings_): $Function<$StructureTemplatePool$Projection, $SinglePoolElement>;
        static single(id: string, processors: $Holder_<$StructureProcessorList>, liquidSettings: $LiquidSettings_): $Function<$StructureTemplatePool$Projection, $SinglePoolElement>;
        static empty(): $Function<$StructureTemplatePool$Projection, $EmptyPoolElement>;
        static feature(feature: $Holder_<$PlacedFeature>): $Function<$StructureTemplatePool$Projection, $FeaturePoolElement>;
        getType(): $StructurePoolElementType<never>;
        getSize(structureTemplateManager: $StructureTemplateManager, rotation: $Rotation_): $Vec3i;
        static legacy(id: string): $Function<$StructureTemplatePool$Projection, $LegacySinglePoolElement>;
        static legacy(id: string, processors: $Holder_<$StructureProcessorList>): $Function<$StructureTemplatePool$Projection, $LegacySinglePoolElement>;
        getShuffledJigsawBlocks(structureTemplateManager: $StructureTemplateManager, pos: $BlockPos_, rotation: $Rotation_, random: $RandomSource): $List<$StructureTemplate$StructureBlockInfo>;
        place(structureTemplateManager: $StructureTemplateManager, level: $WorldGenLevel, structureManager: $StructureManager, generator: $ChunkGenerator, offset: $BlockPos_, pos: $BlockPos_, rotation: $Rotation_, box: $BoundingBox, random: $RandomSource, liquidSettings: $LiquidSettings_, keepJigsaws: boolean): boolean;
        getGroundLevelDelta(): number;
        getBoundingBox(structureTemplateManager: $StructureTemplateManager, pos: $BlockPos_, rotation: $Rotation_): $BoundingBox;
        handleDataMarker(level: $LevelAccessor, blockInfo: $StructureTemplate$StructureBlockInfo_, pos: $BlockPos_, rotation: $Rotation_, random: $RandomSource, box: $BoundingBox): void;
        getProjection(): $StructureTemplatePool$Projection;
        static projectionCodec<E extends $StructurePoolElement>(): $RecordCodecBuilder<E, $StructureTemplatePool$Projection>;
        setProjection(projection: $StructureTemplatePool$Projection_): $StructurePoolElement;
        static CODEC: $Codec<$StructurePoolElement>;
        constructor(projection: $StructureTemplatePool$Projection_);
        get type(): $StructurePoolElementType<never>;
        get groundLevelDelta(): number;
    }
    export class $JigsawPlacement$Placer {
        handler$jga000$moonlight$ml$AddSpawnBoxPieces(arg0: $PoolElementStructurePiece, arg1: $MutableObject<any>, arg2: number, arg3: boolean, arg4: $LevelHeightAccessor, arg5: $RandomState, arg6: $PoolAliasLookup_, arg7: $LiquidSettings_, arg8: $CallbackInfo): void;
        hasInjected(arg0: $ResourceLocation_): boolean;
        markInjected(arg0: $ResourceLocation_): void;
        tryPlacingChildren(piece: $PoolElementStructurePiece, free: $MutableObject<$VoxelShape>, depth: number, useExpansionHack: boolean, level: $LevelHeightAccessor, random: $RandomState, poolAliasLookup: $PoolAliasLookup_, liquidSettings: $LiquidSettings_): void;
        placing: $SequencedPriorityIterator<$JigsawPlacement$PieceState>;
        constructor(pools: $Registry<$StructureTemplatePool_>, maxDepth: number, chunkGenerator: $ChunkGenerator, structureTemplateManager: $StructureTemplateManager, pieces: $List_<$PoolElementStructurePiece>, random: $RandomSource);
    }
    export class $JigsawPlacement$PieceState extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $JigsawPlacement$PieceState}.
     */
    export type $JigsawPlacement$PieceState_ = { free?: $MutableObject<$VoxelShape>, depth?: number, piece?: $PoolElementStructurePiece,  } | [free?: $MutableObject<$VoxelShape>, depth?: number, piece?: $PoolElementStructurePiece, ];
    export class $JigsawPlacement implements $AddPiecesAccessor {
        static generateJigsaw(level: $ServerLevel, startPool: $Holder_<$StructureTemplatePool>, startJigsawName: $ResourceLocation_, maxDepth: number, pos: $BlockPos_, keepJigsaws: boolean): boolean;
        static addPieces(context: $Structure$GenerationContext_, startPool: $Holder_<$StructureTemplatePool>, startJigsawName: ($ResourceLocation_) | undefined, maxDepth: number, pos: $BlockPos_, useExpansionHack: boolean, projectStartToHeightmap: ($Heightmap$Types_) | undefined, maxDistanceFromCenter: number, aliasLookup: $PoolAliasLookup_, dimensionPadding: $DimensionPadding_, liquidSettings: $LiquidSettings_): ($Structure$GenerationStub) | undefined;
        static invokeAddPieces$bjornlib_$md$66668e$0(randomState: $RandomState, maxDepth: number, useExpansionHack: boolean, chunkGenerator: $ChunkGenerator, structureTemplateManager: $StructureTemplateManager, level: $LevelHeightAccessor, random: $RandomSource, pools: $Registry<any>, startPiece: $PoolElementStructurePiece, pieces: $List_<any>, free: $VoxelShape, aliasLookup: $PoolAliasLookup_, liquidSettings: $LiquidSettings_): void;
        static LOGGER: $Logger;
        constructor();
    }
    export class $SinglePoolElement extends $StructurePoolElement implements $SinglePoolElementAccessor, $AccessorSinglePoolElement {
        getSettings(rotation: $Rotation_, boundingBox: $BoundingBox, liquidSettings: $LiquidSettings_, offset: boolean): $StructurePlaceSettings;
        static processorsCodec<E extends $SinglePoolElement>(): $RecordCodecBuilder<E, $Holder<$StructureProcessorList>>;
        getDataMarkers(structureTemplateManager: $StructureTemplateManager, pos: $BlockPos_, rotation: $Rotation_, relativePosition: boolean): $List<$StructureTemplate$StructureBlockInfo>;
        static templateCodec<E extends $SinglePoolElement>(): $RecordCodecBuilder<E, $Either<$ResourceLocation, $StructureTemplate>>;
        getTemplate(structureTemplateManager: $StructureTemplateManager): $StructureTemplate;
        static sortBySelectionPriority(structureBlockInfos: $List_<$StructureTemplate$StructureBlockInfo_>): void;
        static overrideLiquidSettingsCodec<E extends $SinglePoolElement>(): $RecordCodecBuilder<E, ($LiquidSettings) | undefined>;
        getTemplate(): $Either<$ResourceLocation, $StructureTemplate>;
        dimconfig$getTemplate(): $Either<$ResourceLocation, $StructureTemplate>;
        template: $Either<$ResourceLocation, $StructureTemplate>;
        static CODEC: $MapCodec<$SinglePoolElement>;
        overrideLiquidSettings: ($LiquidSettings) | undefined;
        processors: $Holder<$StructureProcessorList>;
        constructor(template: $Either<$ResourceLocation_, $StructureTemplate>, processors: $Holder_<$StructureProcessorList>, projection: $StructureTemplatePool$Projection_, overrideLiquidSettings: ($LiquidSettings_) | undefined);
    }
    export class $ListPoolElement extends $StructurePoolElement implements $ListPoolElementAccessor {
        dimconfig$getElements(): $List<$StructurePoolElement>;
        static CODEC: $MapCodec<$ListPoolElement>;
        elements: $List<$StructurePoolElement>;
        constructor(elements: $List_<$StructurePoolElement>, projection: $StructureTemplatePool$Projection_);
    }
    export interface $StructureTemplatePool extends RegistryMarked<RegistryTypes.WorldgenTemplatePoolTag, RegistryTypes.WorldgenTemplatePool> {}
    export class $EmptyPoolElement extends $StructurePoolElement {
        static CODEC: $MapCodec<$EmptyPoolElement>;
        static INSTANCE: $EmptyPoolElement;
    }
    export class $FeaturePoolElement extends $StructurePoolElement implements $FeaturePoolElementAccessor {
        dimconfig$getFeature(): $Holder<$PlacedFeature>;
        static CODEC: $MapCodec<$FeaturePoolElement>;
        constructor(feature: $Holder_<$PlacedFeature>, projection: $StructureTemplatePool$Projection_);
    }
    export class $StructurePoolElementType<P extends $StructurePoolElement> {
        static register<P extends $StructurePoolElement>(name: string, codec: $MapCodec_<P>): $StructurePoolElementType<P>;
        static SINGLE: $StructurePoolElementType<$SinglePoolElement>;
        static LEGACY: $StructurePoolElementType<$LegacySinglePoolElement>;
        static FEATURE: $StructurePoolElementType<$FeaturePoolElement>;
        static LIST: $StructurePoolElementType<$ListPoolElement>;
        static EMPTY: $StructurePoolElementType<$EmptyPoolElement>;
    }
    export interface $StructurePoolElementType<P extends $StructurePoolElement> {
        codec(): $MapCodec<P>;
    }
    /**
     * Values that may be interpreted as {@link $StructurePoolElementType}.
     */
    export type $StructurePoolElementType_<P> = RegistryTypes.WorldgenStructurePoolElement | (() => $MapCodec_<P>);
    export class $DimensionPadding extends $Record {
        bottom(): number;
        top(): number;
        hasEqualTopAndBottom(): boolean;
        static ZERO: $DimensionPadding;
        static CODEC: $Codec<$DimensionPadding>;
        constructor(padding: number);
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $DimensionPadding}.
     */
    export type $DimensionPadding_ = { bottom?: number, top?: number,  } | [bottom?: number, top?: number, ];
    export class $LegacySinglePoolElement extends $SinglePoolElement {
        template: $Either<$ResourceLocation, $StructureTemplate>;
        static CODEC: $MapCodec<$LegacySinglePoolElement>;
        overrideLiquidSettings: ($LiquidSettings) | undefined;
        processors: $Holder<$StructureProcessorList>;
        constructor(arg0: $Either<$ResourceLocation_, $StructureTemplate>, arg1: $Holder_<$StructureProcessorList>, arg2: $StructureTemplatePool$Projection_, arg3: ($LiquidSettings_) | undefined);
    }
    export interface $StructurePoolElementType<P> extends RegistryMarked<RegistryTypes.WorldgenStructurePoolElementTag, RegistryTypes.WorldgenStructurePoolElement> {}
    export class $JigsawJunction {
        serialize<T>(ops: $DynamicOps<T>): $Dynamic<T>;
        static deserialize<T>(dynamic: $Dynamic<T>): $JigsawJunction;
        getDeltaY(): number;
        getDestProjection(): $StructureTemplatePool$Projection;
        getSourceGroundY(): number;
        getSourceX(): number;
        getSourceZ(): number;
        constructor(sourceX: number, sourceGroundY: number, sourceZ: number, deltaY: number, destProjection: $StructureTemplatePool$Projection_);
        get deltaY(): number;
        get destProjection(): $StructureTemplatePool$Projection;
        get sourceGroundY(): number;
        get sourceX(): number;
        get sourceZ(): number;
    }
    export class $StructureTemplatePool {
        size(): number;
        getShuffledTemplates(random: $RandomSource): $List<$StructurePoolElement>;
        getMaxSize(structureTemplateManager: $StructureTemplateManager): number;
        getFallback(): $Holder<$StructureTemplatePool>;
        getRandomTemplate(random: $RandomSource): $StructurePoolElement;
        static CODEC: $Codec<$Holder<$StructureTemplatePool>>;
        rawTemplates: $List<$Pair<$StructurePoolElement, number>>;
        templates: $ObjectArrayList<$StructurePoolElement>;
        static DIRECT_CODEC: $Codec<$StructureTemplatePool>;
        constructor(fallback: $Holder_<$StructureTemplatePool>, rawTemplates: $List_<$Pair<$StructurePoolElement, number>>);
        constructor(fallback: $Holder_<$StructureTemplatePool>, rawTemplateFactories: $List_<$Pair<$Function_<$StructureTemplatePool$Projection, $StructurePoolElement>, number>>, projection: $StructureTemplatePool$Projection_);
        get fallback(): $Holder<$StructureTemplatePool>;
    }
    /**
     * Values that may be interpreted as {@link $StructureTemplatePool}.
     */
    export type $StructureTemplatePool_ = RegistryTypes.WorldgenTemplatePool;
    export class $StructureTemplatePool$Projection extends $Enum<$StructureTemplatePool$Projection> implements $StringRepresentable {
        getName(): string;
        static values(): $StructureTemplatePool$Projection[];
        static valueOf(name: string): $StructureTemplatePool$Projection;
        static byName(name: string): $StructureTemplatePool$Projection;
        getProcessors(): $ImmutableList<$StructureProcessor>;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $StringRepresentable$EnumCodec<$StructureTemplatePool$Projection>;
        static TERRAIN_MATCHING: $StructureTemplatePool$Projection;
        static RIGID: $StructureTemplatePool$Projection;
        get processors(): $ImmutableList<$StructureProcessor>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $StructureTemplatePool$Projection}.
     */
    export type $StructureTemplatePool$Projection_ = "terrain_matching" | "rigid";
}
