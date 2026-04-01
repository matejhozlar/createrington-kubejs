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
public "getDimId"(): $ResourceKey<($Level)>
public "getNamedString"(arg0: $MapWorld$$Type): StringJS
public "getMw"(): StringJS
get "dimId"(): $ResourceKey<($Level)>
get "mw"(): StringJS
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
import {$LeveledRegion} from "xaero.map.region.LeveledRegion"
import {$MapConnectionNode} from "xaero.map.world.MapConnectionNode"
import {$ArrayList} from "java.util.ArrayList"
import {$MapProcessor$$Type} from "xaero.map.MapProcessor"
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
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$HighlighterRegistry$$Type} from "xaero.map.highlight.HighlighterRegistry"
import {$Path} from "java.nio.file.Path"
import {$DimensionType, $DimensionType$$Type} from "net.minecraft.world.level.dimension.DimensionType"

export class $MapDimension {
 "futureMultiworldWritable": boolean
 "futureMultiworldServerBased": boolean
 "currentMultiworldWritable": boolean
readonly "regionsToCache": $ArrayList<($LeveledRegion<(never)>)>

constructor(arg0: $MapWorld$$Type, arg1: $ResourceKey$$Type<($Level)>, arg2: $HighlighterRegistry$$Type)

public "clear"(): void
public "switchToFutureMultiworldWritableValueUnsynced"(): void
public "isCacheOnlyMode"(arg0: $Registry$$Type<($DimensionType$$Type)>): boolean
public "getMapWorld"(): $MapWorld
public "isUsingWorldSave"(): boolean
public "getSkyDarken"(arg0: float, arg1: $ClientLevel$$Type, arg2: $Registry$$Type<($DimensionType$$Type)>): float
public "getWorldSaveDetectedRegions"(): $Iterable<($Hashtable<(integer), ($RegionDetection)>)>
public "isUsingUnknownDimensionType"(arg0: $Registry$$Type<($DimensionType$$Type)>): boolean
public "pickDefaultCustomMultiworldUnsynced"(): void
public "getLayeredMapRegions"(): $LayeredRegionManager
public "getDimId"(): $ResourceKey<($Level)>
public "getDimensionTypeId"(): $ResourceLocation
public "getFullReloader"(): $MapFullReloader
public "getDimensionType"(arg0: $Registry$$Type<($DimensionType$$Type)>): $DimensionType
public static "getDimensionType"(arg0: $MapDimension$$Type, arg1: $ResourceKey$$Type<($Level)>, arg2: $Registry$$Type<($DimensionType$$Type)>): $DimensionType
public "startFullMapReload"(arg0: integer, arg1: boolean, arg2: $MapProcessor$$Type): void
public "clearFullMapReload"(): void
public "calculateDimScale"(arg0: $Registry$$Type<($DimensionType$$Type)>): double
public "calculateDimDiv"(arg0: $Registry$$Type<($DimensionType$$Type)>, arg1: $DimensionType$$Type): double
public "getHighlightHandler"(): $DimensionHighlighterHandler
public "getCurrentMultiworld"(): StringJS
public "hasConfirmedMultiworld"(): boolean
public "confirmMultiworldUnsynced"(): void
public "setMultiworldUnsynced"(arg0: StringJS): void
public "getSelectedMapKeyUnsynced"(): $MapConnectionNode
public "hasDoneRegionDetection"(): boolean
public "onWorldChangeUnsynced"(arg0: $Level$$Type): void
public "getDimensionEffects"(arg0: $Registry$$Type<($DimensionType$$Type)>): $DimensionSpecialEffects
public "switchToFutureUnsynced"(): void
public "addMultiworldChecked"(arg0: StringJS): boolean
public "onClearCachedHighlightHash"(arg0: integer, arg1: integer): void
public "saveConfigUnsynced"(): void
public "deleteMultiworldId"(arg0: StringJS): void
public "getPlayerMapKey"(): $MapConnectionNode
public "preDetection"(): void
public "getOldFolderPath"(): $Path
public "setMultiworldName"(arg0: StringJS, arg1: StringJS): void
public "getMainFolderPath"(): $Path
public "toggleCaveModeType"(arg0: boolean): void
public "onCreationUnsynced"(): void
public "isAutoSelected"(): boolean
public "getShadowR"(): float
public "getShadowG"(): float
public "getShadowB"(): float
public "getCaveModeType"(): integer
public "getMultiworldName"(arg0: StringJS): StringJS
public "getMultiworldIdsCopy"(): $List<(StringJS)>
public "getFutureCustomSelectedMultiworld"(): StringJS
public "isFutureMultiworldServerBased"(): boolean
public "resetCustomMultiworldUnsynced"(): void
public "getWorldSaveRegionDetection"(arg0: integer, arg1: integer): $RegionDetection
public "deleteMultiworldMapDataUnsynced"(arg0: StringJS): void
public "isFutureUsingWorldSaveUnsynced"(): boolean
public "onClearCachedHighlightHashes"(): void
public "getFutureMultiworldUnsynced"(): StringJS
public "updateFutureAutomaticUnsynced"(arg0: $Minecraft$$Type, arg1: any): void
public "addWorldSaveRegionDetection"(arg0: $RegionDetection$$Type): void
public "getLinkedWorldSaveDetectedRegions"(): $Iterable<($RegionDetection)>
get "mapWorld"(): $MapWorld
get "usingWorldSave"(): boolean
get "worldSaveDetectedRegions"(): $Iterable<($Hashtable<(integer), ($RegionDetection)>)>
get "layeredMapRegions"(): $LayeredRegionManager
get "dimId"(): $ResourceKey<($Level)>
get "dimensionTypeId"(): $ResourceLocation
get "fullReloader"(): $MapFullReloader
get "highlightHandler"(): $DimensionHighlighterHandler
get "currentMultiworld"(): StringJS
set "multiworldUnsynced"(value: StringJS)
get "selectedMapKeyUnsynced"(): $MapConnectionNode
get "playerMapKey"(): $MapConnectionNode
get "oldFolderPath"(): $Path
get "mainFolderPath"(): $Path
get "autoSelected"(): boolean
get "shadowR"(): float
get "shadowG"(): float
get "shadowB"(): float
get "caveModeType"(): integer
get "multiworldIdsCopy"(): $List<(StringJS)>
get "futureCustomSelectedMultiworld"(): StringJS
get "futureUsingWorldSaveUnsynced"(): boolean
get "futureMultiworldUnsynced"(): StringJS
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
public "isEmpty"(): boolean
public "save"(arg0: $PrintWriter$$Type): void
public "removeConnection"(arg0: $MapConnectionNode$$Type, arg1: $MapConnectionNode$$Type): void
public "addConnection"(arg0: $MapConnectionNode$$Type, arg1: $MapConnectionNode$$Type): void
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
public "saveConfig"(): void
public "getTeleportCommandFormat"(): StringJS
public "setTeleportCommandFormat"(arg0: StringJS): void
public "getCurrentMultiworldType"(): integer
public "setUseDefaultMapTeleport"(arg0: boolean): void
public "isUsingDefaultMapTeleport"(): boolean
public "getMapProcessor"(): $MapProcessor
public "getPlayerTeleportCommandFormat"(): StringJS
public "isUsingDefaultPlayerTeleport"(): boolean
public "getDimensionTeleportCommandFormat"(): StringJS
public "setPlayerTeleportCommandFormat"(arg0: StringJS): void
public "setUseDefaultPlayerTeleport"(arg0: boolean): void
public "isCurrentMultiworldTypeConfirmed"(): boolean
public "unconfirmMultiworldTypeUnsynced"(): void
public "getEffectiveTeleportCommandFormat"(): StringJS
public "setDimensionTeleportCommandFormat"(arg0: StringJS): void
public "getCurrentDimension"(): $MapDimension
public "isCacheOnlyMode"(): boolean
public "getFutureDimensionId"(): $ResourceKey<($Level)>
public "isUsingUnknownDimensionType"(): boolean
public "clearAllCachedHighlightHashes"(): void
public static "convertWorldFolderToRootId"(arg0: integer, arg1: StringJS): StringJS
public "switchToFutureMultiworldTypeUnsynced"(): void
public "getCurrentDimensionId"(): $ResourceKey<($Level)>
public "getFutureDimension"(): $MapDimension
public "toggleDimension"(arg0: boolean): void
public "getCurrentMultiworld"(): StringJS
public "getCustomDimensionId"(): $ResourceKey<($Level)>
public "isUsingCustomDimension"(): boolean
public "setIgnoreHeightmaps"(arg0: boolean): void
public "isIgnoreHeightmaps"(): boolean
public "getEffectivePlayerTeleportCommandFormat"(): StringJS
public "getEffectiveDimensionTeleportCommandFormat"(): StringJS
public "isIgnoreServerLevelId"(): boolean
public "setCustomDimensionId"(arg0: $ResourceKey$$Type<($Level)>): void
public "getFutureMultiworldType"(arg0: $MapDimension$$Type): integer
public "setFutureDimensionId"(arg0: $ResourceKey$$Type<($Level)>): void
public "getOldUnfixedMainId"(): StringJS
public "onWorldChangeUnsynced"(arg0: $ClientLevel$$Type): void
public "switchToFutureUnsynced"(): void
public "getDimensionsList"(): $List<($MapDimension)>
public "getPlayerMapKey"(): $MapConnectionNode
public "getMapConnections"(): $MapConnectionManager
public "getPotentialDimId"(): $ResourceKey<($Level)>
public "getMainId"(): StringJS
public "isMultiplayer"(): boolean
public "createDimensionUnsynced"(arg0: $ResourceKey$$Type<($Level)>): $MapDimension
public "confirmMultiworldTypeUnsynced"(): void
public "isFutureMultiworldTypeConfirmed"(arg0: $MapDimension$$Type): boolean
public "toggleMultiworldTypeUnsynced"(): void
public "getFutureMultiworldUnsynced"(): StringJS
get "teleportCommandFormat"(): StringJS
set "teleportCommandFormat"(value: StringJS)
get "currentMultiworldType"(): integer
set "useDefaultMapTeleport"(value: boolean)
get "usingDefaultMapTeleport"(): boolean
get "mapProcessor"(): $MapProcessor
get "playerTeleportCommandFormat"(): StringJS
get "usingDefaultPlayerTeleport"(): boolean
get "dimensionTeleportCommandFormat"(): StringJS
set "playerTeleportCommandFormat"(value: StringJS)
set "useDefaultPlayerTeleport"(value: boolean)
get "currentMultiworldTypeConfirmed"(): boolean
get "effectiveTeleportCommandFormat"(): StringJS
set "dimensionTeleportCommandFormat"(value: StringJS)
get "currentDimension"(): $MapDimension
get "cacheOnlyMode"(): boolean
get "futureDimensionId"(): $ResourceKey<($Level)>
get "usingUnknownDimensionType"(): boolean
get "currentDimensionId"(): $ResourceKey<($Level)>
get "futureDimension"(): $MapDimension
get "currentMultiworld"(): StringJS
get "customDimensionId"(): $ResourceKey<($Level)>
get "usingCustomDimension"(): boolean
set "ignoreHeightmaps"(value: boolean)
get "ignoreHeightmaps"(): boolean
get "effectivePlayerTeleportCommandFormat"(): StringJS
get "effectiveDimensionTeleportCommandFormat"(): StringJS
get "ignoreServerLevelId"(): boolean
set "customDimensionId"(value: $ResourceKey$$Type<($Level)>)
set "futureDimensionId"(value: $ResourceKey$$Type<($Level)>)
get "oldUnfixedMainId"(): StringJS
get "dimensionsList"(): $List<($MapDimension)>
get "playerMapKey"(): $MapConnectionNode
get "mapConnections"(): $MapConnectionManager
get "potentialDimId"(): $ResourceKey<($Level)>
get "mainId"(): StringJS
get "multiplayer"(): boolean
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
