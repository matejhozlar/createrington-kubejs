import { $Level } from "@package/net/minecraft/world/level";
import { $WaypointSession } from "@package/xaero/hud/minimap/waypoint";
import { $MinimapSession } from "@package/xaero/hud/minimap/module";
import { $List, $Map$Entry } from "@package/java/util";
import { $MinimapWorld } from "@package/xaero/hud/minimap/world";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $ServerWaypointManager } from "@package/xaero/hud/minimap/waypoint/server";
import { $Path } from "@package/java/nio/file";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $XaeroPath } from "@package/xaero/hud/path";
import { $MinimapWorldConnectionManager } from "@package/xaero/hud/minimap/world/connection";
import { $WaypointsSort_, $WaypointsSort, $WaypointWorldContainer } from "@package/xaero/common/minimap/waypoints";
import { $Iterable } from "@package/java/lang";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $ThirdPartyWaypointManager } from "@package/xaero/hud/minimap/waypoint/thirdparty";
import { $RootConfig } from "@package/xaero/hud/minimap/world/container/config";
export * as config from "@package/xaero/hud/minimap/world/container/config";

declare module "@package/xaero/hud/minimap/world/container" {
    export class $MinimapWorldContainer {
        getName(arg0: string): string;
        isEmpty(): boolean;
        setName(arg0: string, arg1: string): void;
        getRoot(): $MinimapWorldRootContainer;
        getPath(): $XaeroPath;
        setPath(arg0: $XaeroPath): void;
        getSubName(): string;
        getLastNode(): string;
        getSession(): $MinimapSession;
        getThirdPartyWaypointManager(): $ThirdPartyWaypointManager;
        addSubContainer(arg0: $XaeroPath): $MinimapWorldContainer;
        deleteSubContainer(arg0: $XaeroPath): boolean;
        getFullWorldName(arg0: string, arg1: string): string;
        getWorldsCopy(): $List<$MinimapWorld>;
        getEquivalentDimId(): $ResourceLocation;
        removeWorld(arg0: string): void;
        getDirectoryPath(): $Path;
        getSubContainers(): $Iterable<$MinimapWorldContainer>;
        getFirstWorld(): $MinimapWorld;
        getRootConfig(): $RootConfig;
        addWorld(arg0: $MinimapWorld): void;
        addWorld(arg0: string): $MinimapWorld;
        removeName(arg0: string): void;
        getWorlds(): $Iterable<$MinimapWorld>;
        /**
         * @deprecated
         */
        getServerWaypointManager(): $ServerWaypointManager;
        getFirstWorldConnectedTo(arg0: $MinimapWorld): $MinimapWorld;
        fixPathCharacterCases(arg0: $XaeroPath): $XaeroPath;
        containsSubContainer(arg0: $XaeroPath): boolean;
        getEquivalentDimKey(): $ResourceKey<$Level>;
        getAllWorldsIterable(): $Iterable<$MinimapWorld>;
        static UNKNOWN_DIM_ID: $ResourceLocation;
        get empty(): boolean;
        get root(): $MinimapWorldRootContainer;
        get subName(): string;
        get lastNode(): string;
        get session(): $MinimapSession;
        get thirdPartyWaypointManager(): $ThirdPartyWaypointManager;
        get worldsCopy(): $List<$MinimapWorld>;
        get equivalentDimId(): $ResourceLocation;
        get directoryPath(): $Path;
        get subContainers(): $Iterable<$MinimapWorldContainer>;
        get firstWorld(): $MinimapWorld;
        get rootConfig(): $RootConfig;
        get worlds(): $Iterable<$MinimapWorld>;
        get serverWaypointManager(): $ServerWaypointManager;
        get equivalentDimKey(): $ResourceKey<$Level>;
        get allWorldsIterable(): $Iterable<$MinimapWorld>;
    }
    export class $MinimapWorldRootContainer extends $WaypointWorldContainer {
        /**
         * @deprecated
         */
        getServerTeleportCommandFormat(): string;
        /**
         * @deprecated
         */
        isUsingDefaultTeleportCommand(): boolean;
        getConfig(): $RootConfig;
        /**
         * @deprecated
         */
        setUsingDefaultTeleportCommand(arg0: boolean): void;
        /**
         * @deprecated
         */
        setServerTeleportCommandFormat(arg0: string): void;
        /**
         * @deprecated
         */
        isTeleportationEnabled(): boolean;
        /**
         * @deprecated
         */
        setIgnoreHeightmaps(arg0: boolean): void;
        isConfigLoaded(): boolean;
        /**
         * @deprecated
         */
        isIgnoreHeightmaps(): boolean;
        /**
         * @deprecated
         */
        setUsingMultiworldDetection(arg0: boolean): void;
        getDimensionType(arg0: $ResourceKey_<$Level>): $DimensionType;
        /**
         * @deprecated
         */
        getServerTeleportCommandRotationFormat(): string;
        /**
         * @deprecated
         */
        setServerTeleportCommandRotationFormat(arg0: string): void;
        getDimensionScale(arg0: $ResourceKey_<$Level>): number;
        /**
         * @deprecated
         */
        setSortReversed(arg0: boolean): void;
        /**
         * @deprecated
         */
        setSortType(arg0: $WaypointsSort_): void;
        renameOldContainer(arg0: $XaeroPath): void;
        /**
         * @deprecated
         */
        toggleSortType(): void;
        /**
         * @deprecated
         */
        toggleSortReversed(): void;
        setDimensionTypeId(arg0: $ResourceKey_<$Level>, arg1: $ResourceLocation_): void;
        /**
         * @deprecated
         */
        getSortType(): $WaypointsSort;
        /**
         * @deprecated
         */
        isSortReversed(): boolean;
        getSubWorldConnections(): $MinimapWorldConnectionManager;
        /**
         * @deprecated
         */
        isIgnoreServerLevelId(): boolean;
        updateConnectionsField(arg0: $WaypointSession): void;
        updateDimensionType(arg0: $ClientLevel): void;
        /**
         * @deprecated
         */
        setTeleportationEnabled(arg0: boolean): void;
        /**
         * @deprecated
         */
        setIgnoreServerLevelId(arg0: boolean): void;
        getDimensionTypeIds(): $Iterable<$Map$Entry<$ResourceKey<$Level>, $ResourceLocation>>;
        /**
         * @deprecated
         */
        isUsingMultiworldDetection(): boolean;
        /**
         * @deprecated
         */
        getDefaultMultiworldId(): string;
        /**
         * @deprecated
         */
        setDefaultMultiworldId(arg0: string): void;
        static UNKNOWN_DIM_ID: $ResourceLocation;
        get config(): $RootConfig;
        get configLoaded(): boolean;
        get subWorldConnections(): $MinimapWorldConnectionManager;
        get dimensionTypeIds(): $Iterable<$Map$Entry<$ResourceKey<$Level>, $ResourceLocation>>;
    }
}
