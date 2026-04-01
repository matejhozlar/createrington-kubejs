declare module "xaero.hud.minimap.world.state.MinimapWorldState" {
import {$XaeroPath, $XaeroPath$$Type} from "xaero.hud.path.XaeroPath"

export class $MinimapWorldState {
constructor()

public "setAutoRootContainerPath"(arg0: $XaeroPath$$Type): void
public "getAutoContainerPathIgnoreCaseCache"(): $XaeroPath
public "setAutoContainerPathIgnoreCaseCache"(arg0: $XaeroPath$$Type): void
public "getCustomWorldPath"(): $XaeroPath
public "getCurrentWorldPath"(arg0: $XaeroPath$$Type): $XaeroPath
public "getCurrentWorldPath"(): $XaeroPath
public "getAutoWorldPath"(): $XaeroPath
public "setCustomWorldPath"(arg0: $XaeroPath$$Type): void
public "getCustomContainerPath"(): $XaeroPath
public "getCurrentContainerPath"(): $XaeroPath
public "getAutoRootContainerPath"(): $XaeroPath
public "getCurrentRootContainerPath"(): $XaeroPath
public "setAutoWorldPath"(arg0: $XaeroPath$$Type): void
public "setOutdatedAutoRootContainerPath"(arg0: integer, arg1: $XaeroPath$$Type): void
public "getOutdatedAutoRootContainerPath"(arg0: integer): $XaeroPath
set "autoRootContainerPath"(value: $XaeroPath$$Type)
get "autoContainerPathIgnoreCaseCache"(): $XaeroPath
set "autoContainerPathIgnoreCaseCache"(value: $XaeroPath$$Type)
get "customWorldPath"(): $XaeroPath
get "currentWorldPath"(): $XaeroPath
get "autoWorldPath"(): $XaeroPath
set "customWorldPath"(value: $XaeroPath$$Type)
get "customContainerPath"(): $XaeroPath
get "currentContainerPath"(): $XaeroPath
get "autoRootContainerPath"(): $XaeroPath
get "currentRootContainerPath"(): $XaeroPath
set "autoWorldPath"(value: $XaeroPath$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapWorldState$$Type = ($MinimapWorldState);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinimapWorldState$$Original = $MinimapWorldState;}
declare module "xaero.hud.minimap.world.state.MinimapWorldStateUpdater" {
import {$HudMod$$Type} from "xaero.common.HudMod"
import {$XaeroPath, $XaeroPath$$Type} from "xaero.hud.path.XaeroPath"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ClientPacketListener$$Type} from "net.minecraft.client.multiplayer.ClientPacketListener"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$MinimapSession$$Type} from "xaero.hud.minimap.module.MinimapSession"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MinimapWorldRootContainer$$Type} from "xaero.hud.minimap.world.container.MinimapWorldRootContainer"

export class $MinimapWorldStateUpdater {
static readonly "ROOT_CONTAINER_FORMAT": integer

constructor(arg0: $HudMod$$Type, arg1: $MinimapSession$$Type, arg2: $ClientPacketListener$$Type)

public "update"(): void
/**
 * 
 * @deprecated
 */
public "update"(arg0: $MinimapSession$$Type): void
public "init"(): void
public "hasServerLevelId"(arg0: $MinimapWorldRootContainer$$Type): boolean
public "onServerLevelId"(arg0: integer): void
/**
 * 
 * @deprecated
 */
public "getPotentialWorldNode"(arg0: $ResourceKey$$Type<($Level)>, arg1: boolean, arg2: $MinimapSession$$Type): StringJS
public "getPotentialWorldNode"(arg0: $ResourceKey$$Type<($Level)>, arg1: boolean): StringJS
public "getAutoRootContainerPath"(arg0: integer): $XaeroPath
/**
 * 
 * @deprecated
 */
public "getAutoRootContainerPath"(arg0: integer, arg1: $ClientPacketListener$$Type, arg2: $MinimapSession$$Type): $XaeroPath
/**
 * 
 * @deprecated
 */
public "getPotentialContainerPath"(arg0: $MinimapSession$$Type): $XaeroPath
public "getPotentialContainerPath"(): $XaeroPath
public "ignoreContainerCase"(arg0: $XaeroPath$$Type, arg1: $XaeroPath$$Type): $XaeroPath
/**
 * 
 * @deprecated
 */
public "ignoreContainerCase"(arg0: $XaeroPath$$Type, arg1: $XaeroPath$$Type, arg2: $MinimapSession$$Type): $XaeroPath
public "getAutoWorldNodeBase"(arg0: $MinimapWorldRootContainer$$Type): any
public "setCurrentWorldSpawn"(arg0: $BlockPos$$Type): void
get "potentialContainerPath"(): $XaeroPath
set "currentWorldSpawn"(value: $BlockPos$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapWorldStateUpdater$$Type = ($MinimapWorldStateUpdater);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinimapWorldStateUpdater$$Original = $MinimapWorldStateUpdater;}
declare module "xaero.hud.minimap.world.MinimapWorldManager" {
import {$Iterable} from "java.lang.Iterable"
import {$HudMod$$Type} from "xaero.common.HudMod"
import {$XaeroPath$$Type} from "xaero.hud.path.XaeroPath"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Waypoint} from "xaero.common.minimap.waypoints.Waypoint"
import {$MinimapWorldContainer} from "xaero.hud.minimap.world.container.MinimapWorldContainer"
import {$MinimapWorld} from "xaero.hud.minimap.world.MinimapWorld"
import {$MinimapSession$$Type} from "xaero.hud.minimap.module.MinimapSession"
import {$MinimapWorldRootContainer, $MinimapWorldRootContainer$$Type} from "xaero.hud.minimap.world.container.MinimapWorldRootContainer"
import {$Int2ObjectMap} from "it.unimi.dsi.fastutil.ints.Int2ObjectMap"
import {$HashMap} from "java.util.HashMap"

export class $MinimapWorldManager {
constructor(arg0: $HudMod$$Type, arg1: $MinimapSession$$Type)

public "getWorld"(arg0: $XaeroPath$$Type): $MinimapWorld
public "getCurrentRootContainer"(): $MinimapWorldRootContainer
public "addRootWorldContainer"(arg0: $MinimapWorldRootContainer$$Type): void
public "getWorldContainer"(arg0: $XaeroPath$$Type): $MinimapWorldContainer
public "getCustomWaypoints"(): $Iterable<($Waypoint)>
public "getCustomWaypoints"(arg0: $ResourceLocation$$Type): $Int2ObjectMap<($Waypoint)>
public "containerExists"(arg0: $XaeroPath$$Type): boolean
public "addWorldContainer"(arg0: $XaeroPath$$Type): $MinimapWorldContainer
public "removeContainer"(arg0: $XaeroPath$$Type): boolean
public "getRootWorldContainer"(arg0: $XaeroPath$$Type): $MinimapWorldRootContainer
public "getRootWorldContainer"(arg0: StringJS): $MinimapWorldRootContainer
public "getCurrentWorld"(arg0: $XaeroPath$$Type): $MinimapWorld
public "getCurrentWorld"(): $MinimapWorld
public "addWorld"(arg0: $XaeroPath$$Type): $MinimapWorld
public "getAutoRootContainer"(): $MinimapWorldRootContainer
public "getWorldContainerNullable"(arg0: $XaeroPath$$Type): $MinimapWorldContainer
/**
 * 
 * @deprecated
 */
public "getRootContainersDirect"(): $HashMap<(StringJS), ($MinimapWorldRootContainer)>
public "getAutoWorld"(): $MinimapWorld
public "hasCustomWaypoints"(): boolean
public "getRootContainers"(): $Iterable<($MinimapWorldRootContainer)>
get "currentRootContainer"(): $MinimapWorldRootContainer
get "customWaypoints"(): $Iterable<($Waypoint)>
get "currentWorld"(): $MinimapWorld
get "autoRootContainer"(): $MinimapWorldRootContainer
get "rootContainersDirect"(): $HashMap<(StringJS), ($MinimapWorldRootContainer)>
get "autoWorld"(): $MinimapWorld
get "rootContainers"(): $Iterable<($MinimapWorldRootContainer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapWorldManager$$Type = ($MinimapWorldManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinimapWorldManager$$Original = $MinimapWorldManager;}
declare module "xaero.hud.minimap.world.container.MinimapWorldRootContainer" {
import {$Iterable} from "java.lang.Iterable"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$MinimapWorld} from "xaero.hud.minimap.world.MinimapWorld"
import {$WaypointsSort, $WaypointsSort$$Type} from "xaero.common.minimap.waypoints.WaypointsSort"
import {$WaypointSession$$Type} from "xaero.hud.minimap.waypoint.WaypointSession"
import {$Map$Entry} from "java.util.Map$Entry"
import {$RootConfig} from "xaero.hud.minimap.world.container.config.RootConfig"
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$XaeroPath$$Type} from "xaero.hud.path.XaeroPath"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$MinimapWorldConnectionManager} from "xaero.hud.minimap.world.connection.MinimapWorldConnectionManager"
import {$WaypointWorldContainer} from "xaero.common.minimap.waypoints.WaypointWorldContainer"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$DimensionType} from "net.minecraft.world.level.dimension.DimensionType"

export class $MinimapWorldRootContainer extends $WaypointWorldContainer {
public "getName"(arg0: StringJS): StringJS
public "isEmpty"(): boolean
public "getRoot"(): $MinimapWorldRootContainer
public "getSubName"(): StringJS
public "getConfig"(): $RootConfig
/**
 * 
 * @deprecated
 */
public "isTeleportationEnabled"(): boolean
public "isConfigLoaded"(): boolean
/**
 * 
 * @deprecated
 */
public "getServerTeleportCommandFormat"(): StringJS
/**
 * 
 * @deprecated
 */
public "setServerTeleportCommandFormat"(arg0: StringJS): void
/**
 * 
 * @deprecated
 */
public "isUsingDefaultTeleportCommand"(): boolean
/**
 * 
 * @deprecated
 */
public "setUsingDefaultTeleportCommand"(arg0: boolean): void
/**
 * 
 * @deprecated
 */
public "getSortType"(): $WaypointsSort
/**
 * 
 * @deprecated
 */
public "isSortReversed"(): boolean
public "getDimensionType"(arg0: $ResourceKey$$Type<($Level)>): $DimensionType
/**
 * 
 * @deprecated
 */
public "setIgnoreHeightmaps"(arg0: boolean): void
/**
 * 
 * @deprecated
 */
public "setUsingMultiworldDetection"(arg0: boolean): void
/**
 * 
 * @deprecated
 */
public "isIgnoreHeightmaps"(): boolean
/**
 * 
 * @deprecated
 */
public "isUsingMultiworldDetection"(): boolean
/**
 * 
 * @deprecated
 */
public "setTeleportationEnabled"(arg0: boolean): void
public "updateDimensionType"(arg0: $ClientLevel$$Type): void
/**
 * 
 * @deprecated
 */
public "setIgnoreServerLevelId"(arg0: boolean): void
public "updateConnectionsField"(arg0: $WaypointSession$$Type): void
public "getDimensionTypeIds"(): $Iterable<($Map$Entry<($ResourceKey<($Level)>), ($ResourceLocation)>)>
public "getSubWorldConnections"(): $MinimapWorldConnectionManager
/**
 * 
 * @deprecated
 */
public "getDefaultMultiworldId"(): StringJS
/**
 * 
 * @deprecated
 */
public "setDefaultMultiworldId"(arg0: StringJS): void
/**
 * 
 * @deprecated
 */
public "isIgnoreServerLevelId"(): boolean
/**
 * 
 * @deprecated
 */
public "toggleSortType"(): void
/**
 * 
 * @deprecated
 */
public "setSortType"(arg0: $WaypointsSort$$Type): void
public "setDimensionTypeId"(arg0: $ResourceKey$$Type<($Level)>, arg1: $ResourceLocation$$Type): void
/**
 * 
 * @deprecated
 */
public "toggleSortReversed"(): void
public "renameOldContainer"(arg0: $XaeroPath$$Type): void
/**
 * 
 * @deprecated
 */
public "setSortReversed"(arg0: boolean): void
public "getDimensionScale"(arg0: $ResourceKey$$Type<($Level)>): double
public "removeName"(arg0: StringJS): void
/**
 * 
 * @deprecated
 */
public "getServerTeleportCommandRotationFormat"(): StringJS
/**
 * 
 * @deprecated
 */
public "setServerTeleportCommandRotationFormat"(arg0: StringJS): void
/**
 * 
 * @deprecated
 */
public "getFirstWorld"(): $MinimapWorld
get "empty"(): boolean
get "root"(): $MinimapWorldRootContainer
get "subName"(): StringJS
get "config"(): $RootConfig
get "teleportationEnabled"(): boolean
get "configLoaded"(): boolean
get "serverTeleportCommandFormat"(): StringJS
set "serverTeleportCommandFormat"(value: StringJS)
get "usingDefaultTeleportCommand"(): boolean
set "usingDefaultTeleportCommand"(value: boolean)
get "sortType"(): $WaypointsSort
get "sortReversed"(): boolean
set "ignoreHeightmaps"(value: boolean)
set "usingMultiworldDetection"(value: boolean)
get "ignoreHeightmaps"(): boolean
get "usingMultiworldDetection"(): boolean
set "teleportationEnabled"(value: boolean)
set "ignoreServerLevelId"(value: boolean)
get "dimensionTypeIds"(): $Iterable<($Map$Entry<($ResourceKey<($Level)>), ($ResourceLocation)>)>
get "subWorldConnections"(): $MinimapWorldConnectionManager
get "defaultMultiworldId"(): StringJS
set "defaultMultiworldId"(value: StringJS)
get "ignoreServerLevelId"(): boolean
set "sortType"(value: $WaypointsSort$$Type)
set "sortReversed"(value: boolean)
get "serverTeleportCommandRotationFormat"(): StringJS
set "serverTeleportCommandRotationFormat"(value: StringJS)
get "firstWorld"(): $MinimapWorld
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapWorldRootContainer$$Type = ($MinimapWorldRootContainer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinimapWorldRootContainer$$Original = $MinimapWorldRootContainer;}
declare module "xaero.hud.minimap.world.container.config.RootConfig" {
import {$MinimapWorldConnectionManager} from "xaero.hud.minimap.world.connection.MinimapWorldConnectionManager"
import {$WaypointsSort, $WaypointsSort$$Type} from "xaero.common.minimap.waypoints.WaypointsSort"

export class $RootConfig {
 "loaded": boolean

constructor(arg0: boolean)

public "isLoaded"(): boolean
public "setLoaded"(arg0: boolean): void
public "isTeleportationEnabled"(): boolean
public "getServerTeleportCommandFormat"(): StringJS
public "setServerTeleportCommandFormat"(arg0: StringJS): void
public "isUsingDefaultTeleportCommand"(): boolean
public "setUsingDefaultTeleportCommand"(arg0: boolean): void
public "getSortType"(): $WaypointsSort
public "isSortReversed"(): boolean
public "setIgnoreHeightmaps"(arg0: boolean): void
public "setUsingMultiworldDetection"(arg0: boolean): void
public "isIgnoreHeightmaps"(): boolean
public "isUsingMultiworldDetection"(): boolean
public "setTeleportationEnabled"(arg0: boolean): void
public "setIgnoreServerLevelId"(arg0: boolean): void
public "resetSubWorldConnections"(arg0: boolean): void
public "getSubWorldConnections"(): $MinimapWorldConnectionManager
public "getDefaultMultiworldId"(): StringJS
public "setDefaultMultiworldId"(arg0: StringJS): void
public "isIgnoreServerLevelId"(): boolean
public "toggleSortType"(): void
public "setSortType"(arg0: $WaypointsSort$$Type): void
public "toggleSortReversed"(): void
public "setSortReversed"(arg0: boolean): void
public "getServerTeleportCommandRotationFormat"(): StringJS
public "setServerTeleportCommandRotationFormat"(arg0: StringJS): void
get "teleportationEnabled"(): boolean
get "serverTeleportCommandFormat"(): StringJS
set "serverTeleportCommandFormat"(value: StringJS)
get "usingDefaultTeleportCommand"(): boolean
set "usingDefaultTeleportCommand"(value: boolean)
get "sortType"(): $WaypointsSort
get "sortReversed"(): boolean
set "ignoreHeightmaps"(value: boolean)
set "usingMultiworldDetection"(value: boolean)
get "ignoreHeightmaps"(): boolean
get "usingMultiworldDetection"(): boolean
set "teleportationEnabled"(value: boolean)
set "ignoreServerLevelId"(value: boolean)
get "subWorldConnections"(): $MinimapWorldConnectionManager
get "defaultMultiworldId"(): StringJS
set "defaultMultiworldId"(value: StringJS)
get "ignoreServerLevelId"(): boolean
set "sortType"(value: $WaypointsSort$$Type)
set "sortReversed"(value: boolean)
get "serverTeleportCommandRotationFormat"(): StringJS
set "serverTeleportCommandRotationFormat"(value: StringJS)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RootConfig$$Type = ($RootConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RootConfig$$Original = $RootConfig;}
declare module "xaero.hud.minimap.world.container.MinimapWorldContainer" {
import {$Iterable} from "java.lang.Iterable"
import {$XaeroPath, $XaeroPath$$Type} from "xaero.hud.path.XaeroPath"
import {$List} from "java.util.List"
import {$MinimapWorld, $MinimapWorld$$Type} from "xaero.hud.minimap.world.MinimapWorld"
import {$Path} from "java.nio.file.Path"
import {$MinimapSession} from "xaero.hud.minimap.module.MinimapSession"
import {$MinimapWorldRootContainer} from "xaero.hud.minimap.world.container.MinimapWorldRootContainer"
import {$ServerWaypointManager} from "xaero.hud.minimap.waypoint.server.ServerWaypointManager"
import {$RootConfig} from "xaero.hud.minimap.world.container.config.RootConfig"

export class $MinimapWorldContainer {
public "getName"(arg0: StringJS): StringJS
public "toString"(): StringJS
public "isEmpty"(): boolean
public "setName"(arg0: StringJS, arg1: StringJS): void
public "getRoot"(): $MinimapWorldRootContainer
public "getPath"(): $XaeroPath
public "setPath"(arg0: $XaeroPath$$Type): void
public "getSubName"(): StringJS
public "getWorlds"(): $Iterable<($MinimapWorld)>
public "getSession"(): $MinimapSession
public "getLastNode"(): StringJS
public "addWorld"(arg0: $MinimapWorld$$Type): void
public "addWorld"(arg0: StringJS): $MinimapWorld
public "getFirstWorld"(): $MinimapWorld
public "getRootConfig"(): $RootConfig
public "getServerWaypointManager"(): $ServerWaypointManager
public "containsSubContainer"(arg0: $XaeroPath$$Type): boolean
public "getAllWorldsIterable"(): $Iterable<($MinimapWorld)>
public "getFirstWorldConnectedTo"(arg0: $MinimapWorld$$Type): $MinimapWorld
public "fixPathCharacterCases"(arg0: $XaeroPath$$Type): $XaeroPath
public "removeWorld"(arg0: StringJS): void
public "getDirectoryPath"(): $Path
public "deleteSubContainer"(arg0: $XaeroPath$$Type): boolean
public "getSubContainers"(): $Iterable<($MinimapWorldContainer)>
public "getWorldsCopy"(): $List<($MinimapWorld)>
public "addSubContainer"(arg0: $XaeroPath$$Type): $MinimapWorldContainer
public "getFullWorldName"(arg0: StringJS, arg1: StringJS): StringJS
public "removeName"(arg0: StringJS): void
get "empty"(): boolean
get "root"(): $MinimapWorldRootContainer
get "path"(): $XaeroPath
set "path"(value: $XaeroPath$$Type)
get "subName"(): StringJS
get "worlds"(): $Iterable<($MinimapWorld)>
get "session"(): $MinimapSession
get "lastNode"(): StringJS
get "firstWorld"(): $MinimapWorld
get "rootConfig"(): $RootConfig
get "serverWaypointManager"(): $ServerWaypointManager
get "allWorldsIterable"(): $Iterable<($MinimapWorld)>
get "directoryPath"(): $Path
get "subContainers"(): $Iterable<($MinimapWorldContainer)>
get "worldsCopy"(): $List<($MinimapWorld)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapWorldContainer$$Type = ($MinimapWorldContainer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinimapWorldContainer$$Original = $MinimapWorldContainer;}
declare module "xaero.hud.minimap.world.io.MinimapWorldManagerIO" {
import {$HudMod$$Type} from "xaero.common.HudMod"
import {$RootConfigIO} from "xaero.hud.minimap.world.container.config.io.RootConfigIO"
import {$MinimapWorldContainer$$Type} from "xaero.hud.minimap.world.container.MinimapWorldContainer"
import {$MinimapWorld$$Type} from "xaero.hud.minimap.world.MinimapWorld"
import {$ClientPacketListener$$Type} from "net.minecraft.client.multiplayer.ClientPacketListener"
import {$MinimapSession$$Type} from "xaero.hud.minimap.module.MinimapSession"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$MinimapWorldRootContainer$$Type} from "xaero.hud.minimap.world.container.MinimapWorldRootContainer"

export class $MinimapWorldManagerIO {
constructor(arg0: $HudMod$$Type)

public "onRootContainerAdded"(arg0: $MinimapWorldRootContainer$$Type): void
public "saveWorld"(arg0: $MinimapWorld$$Type): void
public "saveWorld"(arg0: $MinimapWorld$$Type, arg1: boolean): void
public "saveAllWorlds"(arg0: $MinimapSession$$Type): void
public "loadWorld"(arg0: $MinimapWorld$$Type, arg1: $Path$$Type): void
public "loadWorldsFromAllSources"(arg0: $MinimapSession$$Type, arg1: $ClientPacketListener$$Type): void
public "getWorldFile"(arg0: $MinimapWorld$$Type): $Path
public "saveWorlds"(arg0: $MinimapWorldContainer$$Type): void
public "getRootConfigIO"(): $RootConfigIO
public "convertWorldDimFoldersToSingleFolder"(arg0: $MinimapSession$$Type): void
public "loadAllWorlds"(arg0: $MinimapSession$$Type): void
public "loadWorldFile"(arg0: $MinimapWorldContainer$$Type, arg1: StringJS, arg2: $Path$$Type): boolean
public static "copyTempFilesBack"(arg0: $Path$$Type): void
public "checkWorldFileLine"(arg0: (StringJS)[], arg1: $MinimapWorld$$Type): boolean
public "convertWorldDimFilesToFolders"(): void
get "rootConfigIO"(): $RootConfigIO
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapWorldManagerIO$$Type = ($MinimapWorldManagerIO);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinimapWorldManagerIO$$Original = $MinimapWorldManagerIO;}
declare module "xaero.hud.minimap.world.MinimapWorld" {
import {$Iterable} from "java.lang.Iterable"
import {$WaypointSet, $WaypointSet$$Type} from "xaero.hud.minimap.waypoint.set.WaypointSet"
import {$XaeroPath} from "xaero.hud.path.XaeroPath"
import {$MinimapWorldContainer, $MinimapWorldContainer$$Type} from "xaero.hud.minimap.world.container.MinimapWorldContainer"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Path$$Type} from "java.nio.file.Path"
import {$RootConfig} from "xaero.hud.minimap.world.container.config.RootConfig"

export class $MinimapWorld {
public "getNode"(): StringJS
public "setNode"(arg0: StringJS): void
public "getContainer"(): $MinimapWorldContainer
public "getFullPath"(): $XaeroPath
public "addWaypointSet"(arg0: StringJS): void
public "addWaypointSet"(arg0: $WaypointSet$$Type): $WaypointSet
public "getLocalWorldKey"(): $XaeroPath
public "cleanupOnSave"(arg0: $Path$$Type): void
public "removeWaypointSet"(arg0: StringJS): $WaypointSet
public "getSetCount"(): integer
public "setContainer"(arg0: $MinimapWorldContainer$$Type): void
public "getIterableWaypointSets"(): $Iterable<($WaypointSet)>
public "setCurrentWaypointSetId"(arg0: StringJS): void
public "getCurrentWaypointSet"(): $WaypointSet
public "getCurrentWaypointSetId"(): StringJS
public "setDimId"(arg0: $ResourceKey$$Type<($Level)>): void
public "getDimId"(): $ResourceKey<($Level)>
public "getWaypointSet"(arg0: StringJS): $WaypointSet
public "getRootConfig"(): $RootConfig
public "getSlimeChunkSeed"(): long
public "setSlimeChunkSeed"(arg0: long): void
public "requestRemovalOnSave"(arg0: StringJS): void
public "hasSomethingToRemoveOnSave"(): boolean
get "node"(): StringJS
set "node"(value: StringJS)
get "container"(): $MinimapWorldContainer
get "fullPath"(): $XaeroPath
get "localWorldKey"(): $XaeroPath
get "setCount"(): integer
set "container"(value: $MinimapWorldContainer$$Type)
get "iterableWaypointSets"(): $Iterable<($WaypointSet)>
set "currentWaypointSetId"(value: StringJS)
get "currentWaypointSet"(): $WaypointSet
get "currentWaypointSetId"(): StringJS
set "dimId"(value: $ResourceKey$$Type<($Level)>)
get "dimId"(): $ResourceKey<($Level)>
get "rootConfig"(): $RootConfig
get "slimeChunkSeed"(): long
set "slimeChunkSeed"(value: long)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapWorld$$Type = ($MinimapWorld);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinimapWorld$$Original = $MinimapWorld;}
declare module "xaero.hud.minimap.world.MinimapDimensionHelper" {
import {$LocalPlayer$$Type} from "net.minecraft.client.player.LocalPlayer"
import {$MinimapWorld$$Type} from "xaero.hud.minimap.world.MinimapWorld"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export class $MinimapDimensionHelper {
constructor()

public "getDimCoordinateScale"(arg0: $MinimapWorld$$Type): double
public "getDimensionDivision"(arg0: $MinimapWorld$$Type): double
public "getDimensionDirectoryName"(arg0: $ResourceKey$$Type<($Level)>): StringJS
public "findDimensionKeyForOldName"(arg0: $LocalPlayer$$Type, arg1: StringJS): $ResourceKey<($Level)>
public "getDimensionKeyForDirectoryName"(arg0: StringJS): $ResourceKey<($Level)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapDimensionHelper$$Type = ($MinimapDimensionHelper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinimapDimensionHelper$$Original = $MinimapDimensionHelper;}
