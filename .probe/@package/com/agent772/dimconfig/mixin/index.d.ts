import { $RandomState, $WorldOptions } from "@package/net/minecraft/world/level/levelgen";
export * as worldgen from "@package/com/agent772/dimconfig/mixin/worldgen";

declare module "@package/com/agent772/dimconfig/mixin" {
    export class $PrimaryLevelDataAccessor {
    }
    export interface $PrimaryLevelDataAccessor {
        dimconfig$getWorldOptions(): $WorldOptions;
        dimconfig$setWorldOptions(arg0: $WorldOptions): void;
    }
    export class $ServerChunkCacheAccessor {
    }
    export interface $ServerChunkCacheAccessor {
        dimconfig$getRandomState(): $RandomState;
    }
    /**
     * Values that may be interpreted as {@link $ServerChunkCacheAccessor}.
     */
    export type $ServerChunkCacheAccessor_ = (() => $RandomState);
    export class $ChunkMapAccessor {
    }
    export interface $ChunkMapAccessor {
        dimconfig$setRandomState(arg0: $RandomState): void;
    }
    /**
     * Values that may be interpreted as {@link $ChunkMapAccessor}.
     */
    export type $ChunkMapAccessor_ = ((arg0: $RandomState) => void);
}
