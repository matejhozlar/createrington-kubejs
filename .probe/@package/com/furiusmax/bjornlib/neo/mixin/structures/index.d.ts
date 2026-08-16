import { $LevelHeightAccessor } from "@package/net/minecraft/world/level";
import { $StructureTemplatePool_ } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $Registry } from "@package/net/minecraft/core";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $StructureTemplate, $StructureTemplateManager, $LiquidSettings_ } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $ChunkGenerator } from "@package/net/minecraft/world/level/chunk";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $List, $List_ } from "@package/java/util";
import { $PoolAliasLookup_ } from "@package/net/minecraft/world/level/levelgen/structure/pools/alias";
import { $StructurePiece, $PoolElementStructurePiece } from "@package/net/minecraft/world/level/levelgen/structure";
import { $RandomState } from "@package/net/minecraft/world/level/levelgen";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/com/furiusmax/bjornlib/neo/mixin/structures" {
    export class $AddPiecesAccessor {
        static invokeAddPieces(arg0: $RandomState, arg1: number, arg2: boolean, arg3: $ChunkGenerator, arg4: $StructureTemplateManager, arg5: $LevelHeightAccessor, arg6: $RandomSource, arg7: $Registry<$StructureTemplatePool_>, arg8: $PoolElementStructurePiece, arg9: $List_<$PoolElementStructurePiece>, arg10: $VoxelShape, arg11: $PoolAliasLookup_, arg12: $LiquidSettings_): void;
    }
    export interface $AddPiecesAccessor {
    }
    export class $StructurePiecesBuilderAccessor {
    }
    export interface $StructurePiecesBuilderAccessor {
        getPieces(): $List<$StructurePiece>;
        get pieces(): $List<$StructurePiece>;
    }
    /**
     * Values that may be interpreted as {@link $StructurePiecesBuilderAccessor}.
     */
    export type $StructurePiecesBuilderAccessor_ = (() => $List_<$StructurePiece>);
    export class $AccessorSinglePoolElement {
    }
    export interface $AccessorSinglePoolElement {
        getTemplate(): $Either<$ResourceLocation, $StructureTemplate>;
        get template(): $Either<$ResourceLocation, $StructureTemplate>;
    }
    /**
     * Values that may be interpreted as {@link $AccessorSinglePoolElement}.
     */
    export type $AccessorSinglePoolElement_ = (() => $Either<$ResourceLocation_, $StructureTemplate>);
}
