import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $Record } from "@package/java/lang";
import { $ServerSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $UUID_, $UUID, $List, $List_ } from "@package/java/util";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
export * as nbt from "@package/com/breakinblocks/aeroportals/api/nbt";

declare module "@package/com/breakinblocks/aeroportals/api" {
    export class $SubLevelTransferEvent$PlotMove extends $Record {
        shift(): $BlockPos;
        uuid(): $UUID;
        containedOldPos(arg0: $BlockPos_): boolean;
        regionBlocks(): number;
        oldRegionMin(): $BlockPos;
        constructor(uuid: $UUID_, oldRegionMin: $BlockPos_, regionBlocks: number, shift: $BlockPos_);
    }
    /**
     * Values that may be interpreted as {@link $SubLevelTransferEvent$PlotMove}.
     */
    export type $SubLevelTransferEvent$PlotMove_ = { oldRegionMin?: $BlockPos_, regionBlocks?: number, shift?: $BlockPos_, uuid?: $UUID_,  } | [oldRegionMin?: $BlockPos_, regionBlocks?: number, shift?: $BlockPos_, uuid?: $UUID_, ];
    export class $SubLevelTransferEvent extends $Event {
        translation(): $Vec3;
        plotShift(): $BlockPos;
        subUuid(): $UUID;
        dstLevel(): $ServerLevel;
        newSub(): $ServerSubLevel;
        srcLevel(): $ServerLevel;
        chainPlotMoves(): $List<$SubLevelTransferEvent$PlotMove>;
        remapPlotPos(arg0: $BlockPos_): $BlockPos;
        constructor(arg0: $UUID_, arg1: $ServerSubLevel, arg2: $ServerLevel, arg3: $ServerLevel, arg4: $Vec3_, arg5: $BlockPos_, arg6: $List_<$SubLevelTransferEvent$PlotMove_>);
    }
    export class $SubLevelPreTransferEvent extends $Event implements $ICancellableEvent {
        cancel(arg0: string): void;
        sub(): $ServerSubLevel;
        label(): string;
        chain(): $List<$ServerSubLevel>;
        setDestination(arg0: $Vec3_): void;
        destination(): $Vec3;
        dstLevel(): $ServerLevel;
        srcLevel(): $ServerLevel;
        cancelReason(): string;
        originalDestination(): $Vec3;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $ServerSubLevel, arg1: $ServerLevel, arg2: $ServerLevel, arg3: $List_<$ServerSubLevel>, arg4: $Vec3_, arg5: string);
    }
}
