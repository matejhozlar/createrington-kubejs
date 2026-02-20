declare module "xaero.common.settings.ModSettings" {
import {$XaeroPath$$Type} from "xaero.hud.path.XaeroPath"
import {$EntityRadarBackwardsCompatibilityConfig} from "xaero.hud.minimap.radar.category.EntityRadarBackwardsCompatibilityConfig"
import {$IXaeroMinimap$$Type} from "xaero.common.IXaeroMinimap"
import {$PrintWriter$$Type} from "java.io.PrintWriter"
import {$KeyMapping, $KeyMapping$$Type} from "net.minecraft.client.KeyMapping"
import {$MinimapSession$$Type} from "xaero.hud.minimap.module.MinimapSession"
import {$WaypointWorld$$Type} from "xaero.common.minimap.waypoints.WaypointWorld"
import {$WaypointsManager$$Type} from "xaero.common.minimap.waypoints.WaypointsManager"

export class $ModSettings {
/**
 * 
 * @deprecated
 */
static "keyLargeMap": $KeyMapping
/**
 * 
 * @deprecated
 */
static "keyReverseEntityRadar": $KeyMapping
/**
 * 
 * @deprecated
 */
static "keyToggleMap": $KeyMapping
/**
 * 
 * @deprecated
 */
static "keyBindZoom1": $KeyMapping
/**
 * 
 * @deprecated
 */
static "keyAllSets": $KeyMapping
/**
 * 
 * @deprecated
 */
static "keyManualCaveMode": $KeyMapping
 "showTimeLegacy": integer
 "needsLegacySlimeSeedResave": boolean
/**
 * 
 * @deprecated
 */
static "keyToggleTrackedPlayersInWorld": $KeyMapping
/**
 * 
 * @deprecated
 */
static "keyToggleMapWaypoints": $KeyMapping
/**
 * 
 * @deprecated
 */
static "keyToggleGrid": $KeyMapping
/**
 * 
 * @deprecated
 */
static "keyToggleSlimes": $KeyMapping
static "defaultSettings": integer
/**
 * 
 * @deprecated
 */
static "keyInstantWaypoint": $KeyMapping
 "showLightLevelLegacy": integer
 "showCoordsLegacy": boolean
/**
 * 
 * @deprecated
 */
static "keyLightOverlay": $KeyMapping
/**
 * 
 * @deprecated
 */
static "keyToggleTrackedPlayers": $KeyMapping
static readonly "format": StringJS
/**
 * 
 * @deprecated
 */
static "newWaypoint": $KeyMapping
 "displayWeatherInfoLegacy": boolean
/**
 * 
 * @deprecated
 */
static "keyBindZoom": $KeyMapping
/**
 * 
 * @deprecated
 */
static "keyToggleWaypoints": $KeyMapping
static "serverSettings": integer
/**
 * 
 * @deprecated
 */
static "keyWaypoints": $KeyMapping
/**
 * 
 * @deprecated
 */
static "keyToggleTrackedPlayersOnMap": $KeyMapping
 "showBiomeLegacy": boolean
 "showDimensionNameLegacy": boolean
 "showAnglesLegacy": boolean
/**
 * 
 * @deprecated
 */
static "keyTogglePacChunkClaims": $KeyMapping
/**
 * 
 * @deprecated
 */
static "keySwitchSet": $KeyMapping
/**
 * 
 * @deprecated
 */
static "keyAlternativeListPlayers": $KeyMapping
/**
 * 
 * @deprecated
 */
static "keyToggleRadar": $KeyMapping

constructor(arg0: $IXaeroMinimap$$Type)

public "loadSettings"(arg0: boolean): void
public "writeSettings"(arg0: $PrintWriter$$Type): void
/**
 * 
 * @deprecated
 */
public "getMinimap"(): boolean
public static "getTranslation"(arg0: boolean): StringJS
public "caveMapsDisabled"(): boolean
public "minimapDisabled"(): boolean
public "resetServerSettings"(): void
public "isIgnoreHeightmaps"(): boolean
public "deathpointsDisabled"(): boolean
public "showWaypointsDisabled"(): boolean
public "resetEntityRadarBackwardsCompatibilityConfig"(): void
public "getUIScale"(arg0: integer, arg1: integer, arg2: integer): float
public static "canEditIngameSettings"(): boolean
public "waypointsGUI"(arg0: $MinimapSession$$Type): boolean
/**
 * 
 * @deprecated
 */
public "waypointsGUI"(arg0: $WaypointsManager$$Type): boolean
public "saveSettings"(): void
public "foundOldRadarSettings"(): boolean
/**
 * 
 * @deprecated
 */
public "getLegacySlimeChunksSeed"(arg0: $XaeroPath$$Type): long
public "getLoadedWaypointLines"(): StringJS
public "removeLoadedWaypointLines"(): void
public "loadDefaultSettings"(arg0: boolean): void
public "getEntityRadarBackwardsCompatibilityConfig"(): $EntityRadarBackwardsCompatibilityConfig
public "removeLegacySlimeChunksSeed"(arg0: $XaeroPath$$Type): long
public "getAutoUIScale"(): integer
/**
 * 
 * @deprecated
 */
public "saveWaypoints"(arg0: $WaypointWorld$$Type): void
/**
 * 
 * @deprecated
 */
public "saveWaypoints"(arg0: $WaypointWorld$$Type, arg1: boolean): void
public "getMinimapScale"(): float
/**
 * 
 * @deprecated
 */
public "getSlimeChunks"(arg0: $WaypointsManager$$Type): boolean
/**
 * 
 * @deprecated
 */
public "getSlimeChunks"(arg0: $MinimapSession$$Type): boolean
/**
 * 
 * @deprecated
 */
public "setSlimeChunksSeed"(arg0: long, arg1: $XaeroPath$$Type): void
/**
 * 
 * @deprecated
 */
public "getSlimeChunksSeed"(arg0: $XaeroPath$$Type): long
/**
 * 
 * @deprecated
 */
public "saveAllWaypoints"(arg0: $WaypointsManager$$Type): void
/**
 * 
 * @deprecated
 */
public "isKeyRepeat"(arg0: $KeyMapping$$Type): boolean
public static "setServerSettings"(): void
public "readSetting"(arg0: (StringJS)[]): void
get "minimap"(): boolean
get "ignoreHeightmaps"(): boolean
get "loadedWaypointLines"(): StringJS
get "entityRadarBackwardsCompatibilityConfig"(): $EntityRadarBackwardsCompatibilityConfig
get "autoUIScale"(): integer
get "minimapScale"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModSettings$$Type = ($ModSettings);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModSettings$$Original = $ModSettings;}
