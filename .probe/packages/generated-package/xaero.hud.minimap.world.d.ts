declare module "xaero.hud.minimap.world.state.MinimapWorldState" {
import {$XaeroPath, $XaeroPath$$Type} from "xaero.hud.path.XaeroPath"

export class $MinimapWorldState {
constructor()

public "getOutdatedAutoRootContainerPath"(arg0: integer): $XaeroPath
public "setOutdatedAutoRootContainerPath"(arg0: integer, arg1: $XaeroPath$$Type): void
public "getCurrentWorldPath"(): $XaeroPath
public "getCurrentWorldPath"(arg0: $XaeroPath$$Type): $XaeroPath
public "getAutoWorldPath"(): $XaeroPath
public "setCustomWorldPath"(arg0: $XaeroPath$$Type): void
public "getCustomContainerPath"(): $XaeroPath
public "getCurrentContainerPath"(): $XaeroPath
public "getAutoRootContainerPath"(): $XaeroPath
public "setAutoRootContainerPath"(arg0: $XaeroPath$$Type): void
public "getCurrentRootContainerPath"(): $XaeroPath
public "getCustomWorldPath"(): $XaeroPath
public "setAutoWorldPath"(arg0: $XaeroPath$$Type): void
public "setAutoContainerPathIgnoreCaseCache"(arg0: $XaeroPath$$Type): void
public "getAutoContainerPathIgnoreCaseCache"(): $XaeroPath
get "currentWorldPath"(): $XaeroPath
get "autoWorldPath"(): $XaeroPath
set "customWorldPath"(value: $XaeroPath$$Type)
get "customContainerPath"(): $XaeroPath
get "currentContainerPath"(): $XaeroPath
get "autoRootContainerPath"(): $XaeroPath
set "autoRootContainerPath"(value: $XaeroPath$$Type)
get "currentRootContainerPath"(): $XaeroPath
get "customWorldPath"(): $XaeroPath
set "autoWorldPath"(value: $XaeroPath$$Type)
set "autoContainerPathIgnoreCaseCache"(value: $XaeroPath$$Type)
get "autoContainerPathIgnoreCaseCache"(): $XaeroPath
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
public "setCurrentWorldSpawn"(arg0: $BlockPos$$Type): void
/**
 * 
 * @deprecated
 */
public "getPotentialContainerPath"(arg0: $MinimapSession$$Type): $XaeroPath
public "getPotentialContainerPath"(): $XaeroPath
/**
 * 
 * @deprecated
 */
public "ignoreContainerCase"(arg0: $XaeroPath$$Type, arg1: $XaeroPath$$Type, arg2: $MinimapSession$$Type): $XaeroPath
public "ignoreContainerCase"(arg0: $XaeroPath$$Type, arg1: $XaeroPath$$Type): $XaeroPath
public "getAutoWorldNodeBase"(arg0: $MinimapWorldRootContainer$$Type): any
public "getPotentialWorldNode"(arg0: $ResourceKey$$Type<($Level)>, arg1: boolean): StringJS
/**
 * 
 * @deprecated
 */
public "getPotentialWorldNode"(arg0: $ResourceKey$$Type<($Level)>, arg1: boolean, arg2: $MinimapSession$$Type): StringJS
/**
 * 
 * @deprecated
 */
public "getAutoRootContainerPath"(arg0: integer, arg1: $ClientPacketListener$$Type, arg2: $MinimapSession$$Type): $XaeroPath
public "getAutoRootContainerPath"(arg0: integer): $XaeroPath
public "onServerLevelId"(arg0: integer): void
public "hasServerLevelId"(arg0: $MinimapWorldRootContainer$$Type): boolean
set "currentWorldSpawn"(value: $BlockPos$$Type)
get "potentialContainerPath"(): $XaeroPath
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

public "getCurrentRootContainer"(): $MinimapWorldRootContainer
public "addRootWorldContainer"(arg0: $MinimapWorldRootContainer$$Type): void
public "getWorld"(arg0: $XaeroPath$$Type): $MinimapWorld
public "removeContainer"(arg0: $XaeroPath$$Type): boolean
public "getAutoWorld"(): $MinimapWorld
public "getRootWorldContainer"(arg0: StringJS): $MinimapWorldRootContainer
public "getRootWorldContainer"(arg0: $XaeroPath$$Type): $MinimapWorldRootContainer
public "getCurrentWorld"(arg0: $XaeroPath$$Type): $MinimapWorld
public "getCurrentWorld"(): $MinimapWorld
public "getAutoRootContainer"(): $MinimapWorldRootContainer
public "getWorldContainerNullable"(arg0: $XaeroPath$$Type): $MinimapWorldContainer
/**
 * 
 * @deprecated
 */
public "getRootContainersDirect"(): $HashMap<(StringJS), ($MinimapWorldRootContainer)>
public "getRootContainers"(): $Iterable<($MinimapWorldRootContainer)>
public "hasCustomWaypoints"(): boolean
public "addWorldContainer"(arg0: $XaeroPath$$Type): $MinimapWorldContainer
public "containerExists"(arg0: $XaeroPath$$Type): boolean
public "getCustomWaypoints"(): $Iterable<($Waypoint)>
public "getCustomWaypoints"(arg0: $ResourceLocation$$Type): $Int2ObjectMap<($Waypoint)>
public "getWorldContainer"(arg0: $XaeroPath$$Type): $MinimapWorldContainer
public "addWorld"(arg0: $XaeroPath$$Type): $MinimapWorld
get "currentRootContainer"(): $MinimapWorldRootContainer
get "autoWorld"(): $MinimapWorld
get "currentWorld"(): $MinimapWorld
get "autoRootContainer"(): $MinimapWorldRootContainer
get "rootContainersDirect"(): $HashMap<(StringJS), ($MinimapWorldRootContainer)>
get "rootContainers"(): $Iterable<($MinimapWorldRootContainer)>
get "customWaypoints"(): $Iterable<($Waypoint)>
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
import {$Map$Entry} from "java.util.Map$Entry"
import {$WaypointSession$$Type} from "xaero.hud.minimap.waypoint.WaypointSession"
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
public "getConfig"(): $RootConfig
public "getSubName"(): StringJS
public "isConfigLoaded"(): boolean
public "getDimensionType"(arg0: $ResourceKey$$Type<($Level)>): $DimensionType
/**
 * 
 * @deprecated
 */
public "isIgnoreHeightmaps"(): boolean
/**
 * 
 * @deprecated
 */
public "isTeleportationEnabled"(): boolean
/**
 * 
 * @deprecated
 */
public "setIgnoreHeightmaps"(arg0: boolean): void
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
public "removeName"(arg0: StringJS): void
public "renameOldContainer"(arg0: $XaeroPath$$Type): void
/**
 * 
 * @deprecated
 */
public "setSortType"(arg0: $WaypointsSort$$Type): void
/**
 * 
 * @deprecated
 */
public "toggleSortType"(): void
/**
 * 
 * @deprecated
 */
public "toggleSortReversed"(): void
public "getDimensionScale"(arg0: $ResourceKey$$Type<($Level)>): double
/**
 * 
 * @deprecated
 */
public "setSortReversed"(arg0: boolean): void
public "setDimensionTypeId"(arg0: $ResourceKey$$Type<($Level)>, arg1: $ResourceLocation$$Type): void
/**
 * 
 * @deprecated
 */
public "setUsingMultiworldDetection"(arg0: boolean): void
/**
 * 
 * @deprecated
 */
public "setUsingDefaultTeleportCommand"(arg0: boolean): void
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
public "getServerTeleportCommandFormat"(): StringJS
public "getDimensionTypeIds"(): $Iterable<($Map$Entry<($ResourceKey<($Level)>), ($ResourceLocation)>)>
public "getSubWorldConnections"(): $MinimapWorldConnectionManager
/**
 * 
 * @deprecated
 */
public "isIgnoreServerLevelId"(): boolean
/**
 * 
 * @deprecated
 */
public "setTeleportationEnabled"(arg0: boolean): void
/**
 * 
 * @deprecated
 */
public "isUsingMultiworldDetection"(): boolean
/**
 * 
 * @deprecated
 */
public "getDefaultMultiworldId"(): StringJS
/**
 * 
 * @deprecated
 */
public "setIgnoreServerLevelId"(arg0: boolean): void
/**
 * 
 * @deprecated
 */
public "setDefaultMultiworldId"(arg0: StringJS): void
public "updateDimensionType"(arg0: $ClientLevel$$Type): void
public "updateConnectionsField"(arg0: $WaypointSession$$Type): void
/**
 * 
 * @deprecated
 */
public "setServerTeleportCommandRotationFormat"(arg0: StringJS): void
/**
 * 
 * @deprecated
 */
public "getServerTeleportCommandRotationFormat"(): StringJS
/**
 * 
 * @deprecated
 */
public "addWorld"(arg0: StringJS): $MinimapWorld
get "empty"(): boolean
get "root"(): $MinimapWorldRootContainer
get "config"(): $RootConfig
get "subName"(): StringJS
get "configLoaded"(): boolean
get "ignoreHeightmaps"(): boolean
get "teleportationEnabled"(): boolean
set "ignoreHeightmaps"(value: boolean)
get "sortType"(): $WaypointsSort
get "sortReversed"(): boolean
set "sortType"(value: $WaypointsSort$$Type)
set "sortReversed"(value: boolean)
set "usingMultiworldDetection"(value: boolean)
set "usingDefaultTeleportCommand"(value: boolean)
set "serverTeleportCommandFormat"(value: StringJS)
get "usingDefaultTeleportCommand"(): boolean
get "serverTeleportCommandFormat"(): StringJS
get "dimensionTypeIds"(): $Iterable<($Map$Entry<($ResourceKey<($Level)>), ($ResourceLocation)>)>
get "subWorldConnections"(): $MinimapWorldConnectionManager
get "ignoreServerLevelId"(): boolean
set "teleportationEnabled"(value: boolean)
get "usingMultiworldDetection"(): boolean
get "defaultMultiworldId"(): StringJS
set "ignoreServerLevelId"(value: boolean)
set "defaultMultiworldId"(value: StringJS)
set "serverTeleportCommandRotationFormat"(value: StringJS)
get "serverTeleportCommandRotationFormat"(): StringJS
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
public "isIgnoreHeightmaps"(): boolean
public "isTeleportationEnabled"(): boolean
public "setIgnoreHeightmaps"(arg0: boolean): void
public "getSortType"(): $WaypointsSort
public "isSortReversed"(): boolean
public "setSortType"(arg0: $WaypointsSort$$Type): void
public "toggleSortType"(): void
public "toggleSortReversed"(): void
public "setSortReversed"(arg0: boolean): void
public "setUsingMultiworldDetection"(arg0: boolean): void
public "setUsingDefaultTeleportCommand"(arg0: boolean): void
public "setServerTeleportCommandFormat"(arg0: StringJS): void
public "isUsingDefaultTeleportCommand"(): boolean
public "getServerTeleportCommandFormat"(): StringJS
public "getSubWorldConnections"(): $MinimapWorldConnectionManager
public "isIgnoreServerLevelId"(): boolean
public "setTeleportationEnabled"(arg0: boolean): void
public "isUsingMultiworldDetection"(): boolean
public "getDefaultMultiworldId"(): StringJS
public "setIgnoreServerLevelId"(arg0: boolean): void
public "resetSubWorldConnections"(arg0: boolean): void
public "setDefaultMultiworldId"(arg0: StringJS): void
public "setServerTeleportCommandRotationFormat"(arg0: StringJS): void
public "getServerTeleportCommandRotationFormat"(): StringJS
get "ignoreHeightmaps"(): boolean
get "teleportationEnabled"(): boolean
set "ignoreHeightmaps"(value: boolean)
get "sortType"(): $WaypointsSort
get "sortReversed"(): boolean
set "sortType"(value: $WaypointsSort$$Type)
set "sortReversed"(value: boolean)
set "usingMultiworldDetection"(value: boolean)
set "usingDefaultTeleportCommand"(value: boolean)
set "serverTeleportCommandFormat"(value: StringJS)
get "usingDefaultTeleportCommand"(): boolean
get "serverTeleportCommandFormat"(): StringJS
get "subWorldConnections"(): $MinimapWorldConnectionManager
get "ignoreServerLevelId"(): boolean
set "teleportationEnabled"(value: boolean)
get "usingMultiworldDetection"(): boolean
get "defaultMultiworldId"(): StringJS
set "ignoreServerLevelId"(value: boolean)
set "defaultMultiworldId"(value: StringJS)
set "serverTeleportCommandRotationFormat"(value: StringJS)
get "serverTeleportCommandRotationFormat"(): StringJS
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
public "getWorlds"(): $Iterable<($MinimapWorld)>
public "setPath"(arg0: $XaeroPath$$Type): void
public "getSubName"(): StringJS
public "getSession"(): $MinimapSession
public "getLastNode"(): StringJS
public "getFirstWorld"(): $MinimapWorld
public "getRootConfig"(): $RootConfig
public "removeName"(arg0: StringJS): void
public "getFullWorldName"(arg0: StringJS, arg1: StringJS): StringJS
public "getWorldsCopy"(): $List<($MinimapWorld)>
public "getDirectoryPath"(): $Path
public "addSubContainer"(arg0: $XaeroPath$$Type): $MinimapWorldContainer
public "getSubContainers"(): $Iterable<($MinimapWorldContainer)>
public "removeWorld"(arg0: StringJS): void
public "deleteSubContainer"(arg0: $XaeroPath$$Type): boolean
public "containsSubContainer"(arg0: $XaeroPath$$Type): boolean
public "getFirstWorldConnectedTo"(arg0: $MinimapWorld$$Type): $MinimapWorld
public "fixPathCharacterCases"(arg0: $XaeroPath$$Type): $XaeroPath
public "getServerWaypointManager"(): $ServerWaypointManager
public "getAllWorldsIterable"(): $Iterable<($MinimapWorld)>
public "addWorld"(arg0: StringJS): $MinimapWorld
public "addWorld"(arg0: $MinimapWorld$$Type): void
get "empty"(): boolean
get "root"(): $MinimapWorldRootContainer
get "path"(): $XaeroPath
get "worlds"(): $Iterable<($MinimapWorld)>
set "path"(value: $XaeroPath$$Type)
get "subName"(): StringJS
get "session"(): $MinimapSession
get "lastNode"(): StringJS
get "firstWorld"(): $MinimapWorld
get "rootConfig"(): $RootConfig
get "worldsCopy"(): $List<($MinimapWorld)>
get "directoryPath"(): $Path
get "subContainers"(): $Iterable<($MinimapWorldContainer)>
get "serverWaypointManager"(): $ServerWaypointManager
get "allWorldsIterable"(): $Iterable<($MinimapWorld)>
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
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$MinimapSession$$Type} from "xaero.hud.minimap.module.MinimapSession"
import {$MinimapWorldRootContainer$$Type} from "xaero.hud.minimap.world.container.MinimapWorldRootContainer"

export class $MinimapWorldManagerIO {
constructor(arg0: $HudMod$$Type)

public "onRootContainerAdded"(arg0: $MinimapWorldRootContainer$$Type): void
public "loadWorld"(arg0: $MinimapWorld$$Type, arg1: $Path$$Type): void
public "saveWorld"(arg0: $MinimapWorld$$Type, arg1: boolean): void
public "saveWorld"(arg0: $MinimapWorld$$Type): void
public "convertWorldDimFilesToFolders"(): void
public "saveWorlds"(arg0: $MinimapWorldContainer$$Type): void
public "loadWorldsFromAllSources"(arg0: $MinimapSession$$Type, arg1: $ClientPacketListener$$Type): void
public "getRootConfigIO"(): $RootConfigIO
public "getWorldFile"(arg0: $MinimapWorld$$Type): $Path
public "saveAllWorlds"(arg0: $MinimapSession$$Type): void
public "convertWorldDimFoldersToSingleFolder"(arg0: $MinimapSession$$Type): void
public "loadAllWorlds"(arg0: $MinimapSession$$Type): void
public static "copyTempFilesBack"(arg0: $Path$$Type): void
public "loadWorldFile"(arg0: $MinimapWorldContainer$$Type, arg1: StringJS, arg2: $Path$$Type): boolean
public "checkWorldFileLine"(arg0: (StringJS)[], arg1: $MinimapWorld$$Type): boolean
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
public "setContainer"(arg0: $MinimapWorldContainer$$Type): void
public "getIterableWaypointSets"(): $Iterable<($WaypointSet)>
public "getCurrentWaypointSetId"(): StringJS
public "setCurrentWaypointSetId"(arg0: StringJS): void
public "getCurrentWaypointSet"(): $WaypointSet
public "getWaypointSet"(arg0: StringJS): $WaypointSet
public "getSlimeChunkSeed"(): long
public "getRootConfig"(): $RootConfig
public "setSlimeChunkSeed"(arg0: long): void
public "hasSomethingToRemoveOnSave"(): boolean
public "requestRemovalOnSave"(arg0: StringJS): void
public "removeWaypointSet"(arg0: StringJS): $WaypointSet
public "getSetCount"(): integer
public "getLocalWorldKey"(): $XaeroPath
public "addWaypointSet"(arg0: $WaypointSet$$Type): $WaypointSet
public "addWaypointSet"(arg0: StringJS): void
public "cleanupOnSave"(arg0: $Path$$Type): void
public "getDimId"(): $ResourceKey<($Level)>
public "setDimId"(arg0: $ResourceKey$$Type<($Level)>): void
get "node"(): StringJS
set "node"(value: StringJS)
get "container"(): $MinimapWorldContainer
get "fullPath"(): $XaeroPath
set "container"(value: $MinimapWorldContainer$$Type)
get "iterableWaypointSets"(): $Iterable<($WaypointSet)>
get "currentWaypointSetId"(): StringJS
set "currentWaypointSetId"(value: StringJS)
get "currentWaypointSet"(): $WaypointSet
get "slimeChunkSeed"(): long
get "rootConfig"(): $RootConfig
set "slimeChunkSeed"(value: long)
get "setCount"(): integer
get "localWorldKey"(): $XaeroPath
get "dimId"(): $ResourceKey<($Level)>
set "dimId"(value: $ResourceKey$$Type<($Level)>)
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
