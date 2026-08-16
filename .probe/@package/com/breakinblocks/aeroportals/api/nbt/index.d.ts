import { $Level } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $UUID_, $UUID } from "@package/java/util";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/com/breakinblocks/aeroportals/api/nbt" {
    export class $NbtFixContext extends $Record {
        shift(arg0: $BlockPos_): $BlockPos;
        moved(): boolean;
        static simple(arg0: $UUID_, arg1: $ResourceKey_<$Level>, arg2: $ResourceKey_<$Level>, arg3: $BlockPos_): $NbtFixContext;
        plotShift(): $BlockPos;
        subUuid(): $UUID;
        dimensionChanged(): boolean;
        srcDimensionId(): $ResourceLocation;
        insideSourcePlot(arg0: $BlockPos_): boolean;
        dstDimensionId(): $ResourceLocation;
        worldTranslation(): $Vec3;
        srcRegionBlocks(): number;
        dstDimension(): $ResourceKey<$Level>;
        srcDimension(): $ResourceKey<$Level>;
        srcRegionMin(): $BlockPos;
        constructor(subUuid: $UUID_, srcDimension: $ResourceKey_<$Level>, dstDimension: $ResourceKey_<$Level>, plotShift: $BlockPos_, worldTranslation: $Vec3_, srcRegionMin: $BlockPos_, srcRegionBlocks: number);
    }
    /**
     * Values that may be interpreted as {@link $NbtFixContext}.
     */
    export type $NbtFixContext_ = { subUuid?: $UUID_, dstDimension?: $ResourceKey_<$Level>, plotShift?: $BlockPos_, srcDimension?: $ResourceKey_<$Level>, worldTranslation?: $Vec3_, srcRegionMin?: $BlockPos_, srcRegionBlocks?: number,  } | [subUuid?: $UUID_, dstDimension?: $ResourceKey_<$Level>, plotShift?: $BlockPos_, srcDimension?: $ResourceKey_<$Level>, worldTranslation?: $Vec3_, srcRegionMin?: $BlockPos_, srcRegionBlocks?: number, ];
    export class $BlockEntityNbtFixer {
    }
    export interface $BlockEntityNbtFixer {
        fix(arg0: $CompoundTag_, arg1: $NbtFixContext_): void;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityNbtFixer}.
     */
    export type $BlockEntityNbtFixer_ = ((arg0: $CompoundTag, arg1: $NbtFixContext) => void);
}
