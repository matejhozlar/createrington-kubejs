import { $Level } from "@package/net/minecraft/world/level";
import { $Holder_ } from "@package/net/minecraft/core";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $ChunkGenerator } from "@package/net/minecraft/world/level/chunk";
import { $Map } from "@package/java/util";
import { $WorldOptions } from "@package/net/minecraft/world/level/levelgen";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";

declare module "@package/com/agent772/parallelworlds/accessor" {
    export class $IServerDimensionAccessor {
    }
    export interface $IServerDimensionAccessor {
        pw$getRuntimeLevels(): $Map<$ResourceKey<$Level>, $ServerLevel>;
        pw$removeRuntimeDimension(arg0: $ResourceKey_<$Level>): void;
        pw$createRuntimeDimension(arg0: $ResourceKey_<$Level>, arg1: $Holder_<$DimensionType>, arg2: $ChunkGenerator, arg3: number): $ServerLevel;
        pw$cleanupAllRuntimeDimensions(): void;
    }
    export class $IWorldDataAccessor {
    }
    export interface $IWorldDataAccessor {
        pw$setWorldOptions(arg0: $WorldOptions): void;
        pw$getWorldOptions(): $WorldOptions;
    }
}
