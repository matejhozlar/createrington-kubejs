import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $Map_, $Map, $List } from "@package/java/util";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/dev/silvergold/simulatedcoasters/mixin/ponder" {
    export class $SchematicLevelCoasterAccessor {
    }
    export interface $SchematicLevelCoasterAccessor {
        simulatedcoasters$onBEadded(arg0: $BlockEntity, arg1: $BlockPos_): void;
        simulatedcoasters$blockEntities(): $Map<$BlockPos, $BlockEntity>;
        simulatedcoasters$renderedBlockEntities(): $List<$BlockEntity>;
    }
    export class $PonderLevelCoasterAccessor {
    }
    export interface $PonderLevelCoasterAccessor {
        simulatedcoasters$originalBlockEntities(): $Map<$BlockPos, $CompoundTag>;
    }
    /**
     * Values that may be interpreted as {@link $PonderLevelCoasterAccessor}.
     */
    export type $PonderLevelCoasterAccessor_ = (() => $Map_<$BlockPos_, $CompoundTag_>);
    export class $PonderLevelCoasterInvoker {
    }
    export interface $PonderLevelCoasterInvoker {
        simulatedcoasters$onBEAdded(arg0: $BlockEntity, arg1: $BlockPos_): void;
    }
    /**
     * Values that may be interpreted as {@link $PonderLevelCoasterInvoker}.
     */
    export type $PonderLevelCoasterInvoker_ = ((arg0: $BlockEntity, arg1: $BlockPos) => void);
}
