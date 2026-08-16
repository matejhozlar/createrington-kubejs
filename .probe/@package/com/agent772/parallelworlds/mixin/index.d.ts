import { $LevelAccessor } from "@package/net/minecraft/world/level";

declare module "@package/com/agent772/parallelworlds/mixin" {
    export class $IStructureManagerAccessor {
    }
    export interface $IStructureManagerAccessor {
        pw$getLevel(): $LevelAccessor;
    }
    /**
     * Values that may be interpreted as {@link $IStructureManagerAccessor}.
     */
    export type $IStructureManagerAccessor_ = (() => $LevelAccessor);
}
