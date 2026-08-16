import { $MinimapWorldConnectionManager } from "@package/xaero/hud/minimap/world/connection";
import { $WaypointsSort_, $WaypointsSort } from "@package/xaero/common/minimap/waypoints";
export * as io from "@package/xaero/hud/minimap/world/container/config/io";

declare module "@package/xaero/hud/minimap/world/container/config" {
    export class $RootConfig {
        isLoaded(): boolean;
        getServerTeleportCommandFormat(): string;
        isUsingDefaultTeleportCommand(): boolean;
        setUsingDefaultTeleportCommand(arg0: boolean): void;
        setServerTeleportCommandFormat(arg0: string): void;
        setLoaded(arg0: boolean): void;
        isTeleportationEnabled(): boolean;
        setIgnoreHeightmaps(arg0: boolean): void;
        isIgnoreHeightmaps(): boolean;
        setUsingMultiworldDetection(arg0: boolean): void;
        getServerTeleportCommandRotationFormat(): string;
        setServerTeleportCommandRotationFormat(arg0: string): void;
        setSortReversed(arg0: boolean): void;
        setSortType(arg0: $WaypointsSort_): void;
        toggleSortType(): void;
        toggleSortReversed(): void;
        getSortType(): $WaypointsSort;
        isSortReversed(): boolean;
        getSubWorldConnections(): $MinimapWorldConnectionManager;
        isIgnoreServerLevelId(): boolean;
        setTeleportationEnabled(arg0: boolean): void;
        resetSubWorldConnections(arg0: boolean): void;
        setIgnoreServerLevelId(arg0: boolean): void;
        isUsingMultiworldDetection(): boolean;
        getDefaultMultiworldId(): string;
        setDefaultMultiworldId(arg0: string): void;
        loaded: boolean;
        constructor(arg0: boolean);
        get subWorldConnections(): $MinimapWorldConnectionManager;
    }
}
