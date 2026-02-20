declare module "xaero.map.world.MapConnectionNode" {
import {$MapWorld$$Type} from "xaero.map.world.MapWorld"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export class $MapConnectionNode {
constructor(arg0: $ResourceKey$$Type<($Level)>, arg1: StringJS)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "fromString"(arg0: StringJS): $MapConnectionNode
public "getMw"(): StringJS
public "getNamedString"(arg0: $MapWorld$$Type): StringJS
public "getDimId"(): $ResourceKey<($Level)>
get "mw"(): StringJS
get "dimId"(): $ResourceKey<($Level)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapConnectionNode$$Type = ($MapConnectionNode);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapConnectionNode$$Original = $MapConnectionNode;}
declare module "xaero.map.world.MapDimension" {
import {$Iterable} from "java.lang.Iterable"
import {$DimensionSpecialEffects} from "net.minecraft.client.renderer.DimensionSpecialEffects"
import {$MapConnectionNode} from "xaero.map.world.MapConnectionNode"
import {$LeveledRegion} from "xaero.map.region.LeveledRegion"
import {$MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$ArrayList} from "java.util.ArrayList"
import {$Hashtable} from "java.util.Hashtable"
import {$MapWorld, $MapWorld$$Type} from "xaero.map.world.MapWorld"
import {$List} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LayeredRegionManager} from "xaero.map.region.LayeredRegionManager"
import {$RegionDetection, $RegionDetection$$Type} from "xaero.map.file.RegionDetection"
import {$MapFullReloader} from "xaero.map.MapFullReloader"
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$DimensionHighlighterHandler} from "xaero.map.highlight.DimensionHighlighterHandler"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Path} from "java.nio.file.Path"
import {$HighlighterRegistry$$Type} from "xaero.map.highlight.HighlighterRegistry"
import {$DimensionType, $DimensionType$$Type} from "net.minecraft.world.level.dimension.DimensionType"

export class $MapDimension {
 "futureMultiworldWritable": boolean
 "futureMultiworldServerBased": boolean
 "currentMultiworldWritable": boolean
readonly "regionsToCache": $ArrayList<($LeveledRegion<(never)>)>

constructor(arg0: $MapWorld$$Type, arg1: $ResourceKey$$Type<($Level)>, arg2: $HighlighterRegistry$$Type)

public "clear"(): void
public "getLayeredMapRegions"(): $LayeredRegionManager
public "getSkyDarken"(arg0: float, arg1: $ClientLevel$$Type, arg2: $Registry$$Type<($DimensionType$$Type)>): float
public "switchToFutureMultiworldWritableValueUnsynced"(): void
public "toggleCaveModeType"(arg0: boolean): void
public "onCreationUnsynced"(): void
public "isAutoSelected"(): boolean
public "isUsingUnknownDimensionType"(arg0: $Registry$$Type<($DimensionType$$Type)>): boolean
public "startFullMapReload"(arg0: integer, arg1: boolean, arg2: $MapProcessor$$Type): void
public "clearFullMapReload"(): void
public static "getDimensionType"(arg0: $MapDimension$$Type, arg1: $ResourceKey$$Type<($Level)>, arg2: $Registry$$Type<($DimensionType$$Type)>): $DimensionType
public "getDimensionType"(arg0: $Registry$$Type<($DimensionType$$Type)>): $DimensionType
public "getDimensionTypeId"(): $ResourceLocation
public "getFullReloader"(): $MapFullReloader
public "calculateDimScale"(arg0: $Registry$$Type<($DimensionType$$Type)>): double
public "pickDefaultCustomMultiworldUnsynced"(): void
public "isCacheOnlyMode"(arg0: $Registry$$Type<($DimensionType$$Type)>): boolean
public "getMapWorld"(): $MapWorld
public "isUsingWorldSave"(): boolean
public "calculateDimDiv"(arg0: $Registry$$Type<($DimensionType$$Type)>, arg1: $DimensionType$$Type): double
public "preDetection"(): void
public "getOldFolderPath"(): $Path
public "getMainFolderPath"(): $Path
public "setMultiworldName"(arg0: StringJS, arg1: StringJS): void
public "saveConfigUnsynced"(): void
public "getPlayerMapKey"(): $MapConnectionNode
public "deleteMultiworldId"(arg0: StringJS): void
public "isFutureMultiworldServerBased"(): boolean
public "getMultiworldName"(arg0: StringJS): StringJS
public "getCaveModeType"(): integer
public "getShadowR"(): float
public "getShadowB"(): float
public "getShadowG"(): float
public "getWorldSaveDetectedRegions"(): $Iterable<($Hashtable<(integer), ($RegionDetection)>)>
public "getHighlightHandler"(): $DimensionHighlighterHandler
public "getCurrentMultiworld"(): StringJS
public "getMultiworldIdsCopy"(): $List<(StringJS)>
public "switchToFutureUnsynced"(): void
public "hasConfirmedMultiworld"(): boolean
public "confirmMultiworldUnsynced"(): void
public "setMultiworldUnsynced"(arg0: StringJS): void
public "getSelectedMapKeyUnsynced"(): $MapConnectionNode
public "hasDoneRegionDetection"(): boolean
public "getDimensionEffects"(arg0: $Registry$$Type<($DimensionType$$Type)>): $DimensionSpecialEffects
public "onClearCachedHighlightHash"(arg0: integer, arg1: integer): void
public "onWorldChangeUnsynced"(arg0: $Level$$Type): void
public "addMultiworldChecked"(arg0: StringJS): boolean
public "getDimId"(): $ResourceKey<($Level)>
public "onClearCachedHighlightHashes"(): void
public "deleteMultiworldMapDataUnsynced"(arg0: StringJS): void
public "getFutureMultiworldUnsynced"(): StringJS
public "getFutureCustomSelectedMultiworld"(): StringJS
public "updateFutureAutomaticUnsynced"(arg0: $Minecraft$$Type, arg1: any): void
public "resetCustomMultiworldUnsynced"(): void
public "isFutureUsingWorldSaveUnsynced"(): boolean
public "addWorldSaveRegionDetection"(arg0: $RegionDetection$$Type): void
public "getLinkedWorldSaveDetectedRegions"(): $Iterable<($RegionDetection)>
public "getWorldSaveRegionDetection"(arg0: integer, arg1: integer): $RegionDetection
get "layeredMapRegions"(): $LayeredRegionManager
get "autoSelected"(): boolean
get "dimensionTypeId"(): $ResourceLocation
get "fullReloader"(): $MapFullReloader
get "mapWorld"(): $MapWorld
get "usingWorldSave"(): boolean
get "oldFolderPath"(): $Path
get "mainFolderPath"(): $Path
get "playerMapKey"(): $MapConnectionNode
get "caveModeType"(): integer
get "shadowR"(): float
get "shadowB"(): float
get "shadowG"(): float
get "worldSaveDetectedRegions"(): $Iterable<($Hashtable<(integer), ($RegionDetection)>)>
get "highlightHandler"(): $DimensionHighlighterHandler
get "currentMultiworld"(): StringJS
get "multiworldIdsCopy"(): $List<(StringJS)>
set "multiworldUnsynced"(value: StringJS)
get "selectedMapKeyUnsynced"(): $MapConnectionNode
get "dimId"(): $ResourceKey<($Level)>
get "futureMultiworldUnsynced"(): StringJS
get "futureCustomSelectedMultiworld"(): StringJS
get "futureUsingWorldSaveUnsynced"(): boolean
get "linkedWorldSaveDetectedRegions"(): $Iterable<($RegionDetection)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapDimension$$Type = ($MapDimension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapDimension$$Original = $MapDimension;}
declare module "xaero.map.world.MapConnectionManager" {
import {$MapConnectionNode$$Type} from "xaero.map.world.MapConnectionNode"
import {$PrintWriter$$Type} from "java.io.PrintWriter"

export class $MapConnectionManager {
constructor()

public "isConnected"(arg0: $MapConnectionNode$$Type, arg1: $MapConnectionNode$$Type): boolean
public "addConnection"(arg0: $MapConnectionNode$$Type, arg1: $MapConnectionNode$$Type): void
public "isEmpty"(): boolean
public "save"(arg0: $PrintWriter$$Type): void
public "removeConnection"(arg0: $MapConnectionNode$$Type, arg1: $MapConnectionNode$$Type): void
public "renameDimension"(arg0: StringJS, arg1: StringJS): void
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapConnectionManager$$Type = ($MapConnectionManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapConnectionManager$$Original = $MapConnectionManager;}
declare module "xaero.map.world.MapWorld" {
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$MapConnectionNode} from "xaero.map.world.MapConnectionNode"
import {$MapProcessor, $MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$MapConnectionManager} from "xaero.map.world.MapConnectionManager"
import {$MapDimension, $MapDimension$$Type} from "xaero.map.world.MapDimension"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export class $MapWorld {
constructor(arg0: StringJS, arg1: StringJS, arg2: $MapProcessor$$Type)

public "load"(): void
public "getDimensions"(arg0: $List$$Type<($MapDimension$$Type)>): void
public "getDimension"(arg0: $ResourceKey$$Type<($Level)>): $MapDimension
public "getCurrentDimensionId"(): $ResourceKey<($Level)>
public "setTeleportCommandFormat"(arg0: StringJS): void
public "setUseDefaultMapTeleport"(arg0: boolean): void
public "getTeleportCommandFormat"(): StringJS
public "getCurrentMultiworldType"(): integer
public "isUsingDefaultMapTeleport"(): boolean
public "getEffectivePlayerTeleportCommandFormat"(): StringJS
public "getEffectiveDimensionTeleportCommandFormat"(): StringJS
public "saveConfig"(): void
public "isMultiplayer"(): boolean
public "getCurrentDimension"(): $MapDimension
public "isUsingUnknownDimensionType"(): boolean
public "clearAllCachedHighlightHashes"(): void
public "getFutureDimension"(): $MapDimension
public "toggleDimension"(arg0: boolean): void
public "isIgnoreHeightmaps"(): boolean
public "switchToFutureMultiworldTypeUnsynced"(): void
public "isCacheOnlyMode"(): boolean
public "getMapProcessor"(): $MapProcessor
public "setIgnoreHeightmaps"(arg0: boolean): void
public static "convertWorldFolderToRootId"(arg0: integer, arg1: StringJS): StringJS
public "getPotentialDimId"(): $ResourceKey<($Level)>
public "getMapConnections"(): $MapConnectionManager
public "getPlayerMapKey"(): $MapConnectionNode
public "getDimensionsList"(): $List<($MapDimension)>
public "getMainId"(): StringJS
public "getFutureDimensionId"(): $ResourceKey<($Level)>
public "getCustomDimensionId"(): $ResourceKey<($Level)>
public "isUsingCustomDimension"(): boolean
public "getCurrentMultiworld"(): StringJS
public "createDimensionUnsynced"(arg0: $ResourceKey$$Type<($Level)>): $MapDimension
public "isIgnoreServerLevelId"(): boolean
public "switchToFutureUnsynced"(): void
public "getFutureMultiworldType"(arg0: $MapDimension$$Type): integer
public "setCustomDimensionId"(arg0: $ResourceKey$$Type<($Level)>): void
public "setFutureDimensionId"(arg0: $ResourceKey$$Type<($Level)>): void
public "onWorldChangeUnsynced"(arg0: $ClientLevel$$Type): void
public "getOldUnfixedMainId"(): StringJS
public "isUsingDefaultPlayerTeleport"(): boolean
public "setUseDefaultPlayerTeleport"(arg0: boolean): void
public "getEffectiveTeleportCommandFormat"(): StringJS
public "unconfirmMultiworldTypeUnsynced"(): void
public "setDimensionTeleportCommandFormat"(arg0: StringJS): void
public "isCurrentMultiworldTypeConfirmed"(): boolean
public "getPlayerTeleportCommandFormat"(): StringJS
public "setPlayerTeleportCommandFormat"(arg0: StringJS): void
public "getDimensionTeleportCommandFormat"(): StringJS
public "getFutureMultiworldUnsynced"(): StringJS
public "confirmMultiworldTypeUnsynced"(): void
public "toggleMultiworldTypeUnsynced"(): void
public "isFutureMultiworldTypeConfirmed"(arg0: $MapDimension$$Type): boolean
get "currentDimensionId"(): $ResourceKey<($Level)>
set "teleportCommandFormat"(value: StringJS)
set "useDefaultMapTeleport"(value: boolean)
get "teleportCommandFormat"(): StringJS
get "currentMultiworldType"(): integer
get "usingDefaultMapTeleport"(): boolean
get "effectivePlayerTeleportCommandFormat"(): StringJS
get "effectiveDimensionTeleportCommandFormat"(): StringJS
get "multiplayer"(): boolean
get "currentDimension"(): $MapDimension
get "usingUnknownDimensionType"(): boolean
get "futureDimension"(): $MapDimension
get "ignoreHeightmaps"(): boolean
get "cacheOnlyMode"(): boolean
get "mapProcessor"(): $MapProcessor
set "ignoreHeightmaps"(value: boolean)
get "potentialDimId"(): $ResourceKey<($Level)>
get "mapConnections"(): $MapConnectionManager
get "playerMapKey"(): $MapConnectionNode
get "dimensionsList"(): $List<($MapDimension)>
get "mainId"(): StringJS
get "futureDimensionId"(): $ResourceKey<($Level)>
get "customDimensionId"(): $ResourceKey<($Level)>
get "usingCustomDimension"(): boolean
get "currentMultiworld"(): StringJS
get "ignoreServerLevelId"(): boolean
set "customDimensionId"(value: $ResourceKey$$Type<($Level)>)
set "futureDimensionId"(value: $ResourceKey$$Type<($Level)>)
get "oldUnfixedMainId"(): StringJS
get "usingDefaultPlayerTeleport"(): boolean
set "useDefaultPlayerTeleport"(value: boolean)
get "effectiveTeleportCommandFormat"(): StringJS
set "dimensionTeleportCommandFormat"(value: StringJS)
get "currentMultiworldTypeConfirmed"(): boolean
get "playerTeleportCommandFormat"(): StringJS
set "playerTeleportCommandFormat"(value: StringJS)
get "dimensionTeleportCommandFormat"(): StringJS
get "futureMultiworldUnsynced"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapWorld$$Type = ($MapWorld);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapWorld$$Original = $MapWorld;}
