import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $DyeColor, $DyeColor_ } from "@package/net/minecraft/world/item";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/de/zolitas/createdyeablechains" {
    export class $MixedChainConveyor {
    }
    export interface $MixedChainConveyor {
        create_dyeable_chains$getConnectionColorMap(): $Map<$BlockPos, $DyeColor>;
    }
    /**
     * Values that may be interpreted as {@link $MixedChainConveyor}.
     */
    export type $MixedChainConveyor_ = (() => $Map_<$BlockPos_, $DyeColor_>);
}
