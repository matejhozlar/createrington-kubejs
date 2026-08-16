import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Biome$Precipitation_, $Biome$Precipitation } from "@package/net/minecraft/world/level/biome";
import { $BlockEvent } from "@package/net/neoforged/neoforge/event/level";
export * as entity from "@package/petrolpark/mc/library/core/world/block/entity";

declare module "@package/petrolpark/mc/library/core/world/block" {
    export class $HandlePrecipitationEvent extends $BlockEvent implements $ICancellableEvent {
        getPrecipitation(): $Biome$Precipitation;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Biome$Precipitation_);
        get precipitation(): $Biome$Precipitation;
    }
}
