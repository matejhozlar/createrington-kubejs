declare module "xaero.common.XaeroMinimapSession" {
import {$MinimapProcessor} from "xaero.common.minimap.MinimapProcessor"
import {$WaypointSharingHandler} from "xaero.common.minimap.waypoints.WaypointSharingHandler"
import {$HudMod$$Type} from "xaero.common.HudMod"
import {$LocalPlayer$$Type} from "net.minecraft.client.player.LocalPlayer"
import {$HudSession} from "xaero.hud.HudSession"
import {$IXaeroMinimap} from "xaero.common.IXaeroMinimap"
import {$ClientPacketListener$$Type} from "net.minecraft.client.multiplayer.ClientPacketListener"
import {$WaypointsManager} from "xaero.common.minimap.waypoints.WaypointsManager"

/**
 * 
 * @deprecated
 */
export class $XaeroMinimapSession extends $HudSession {
constructor(arg0: $HudMod$$Type)

public "init"(arg0: $ClientPacketListener$$Type): void
public static "getCurrentSession"(): $XaeroMinimapSession
public "getWaypointsManager"(): $WaypointsManager
public "getMinimapProcessor"(): $MinimapProcessor
public static "getForPlayer"(arg0: $LocalPlayer$$Type): $XaeroMinimapSession
public "getWaypointSharing"(): $WaypointSharingHandler
public "getModMain"(): $IXaeroMinimap
get "currentSession"(): $XaeroMinimapSession
get "waypointsManager"(): $WaypointsManager
get "minimapProcessor"(): $MinimapProcessor
get "waypointSharing"(): $WaypointSharingHandler
get "modMain"(): $IXaeroMinimap
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $XaeroMinimapSession$$Type = ($XaeroMinimapSession);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $XaeroMinimapSession$$Original = $XaeroMinimapSession;}
declare module "xaero.common.HudMod" {
import {$ModSettings, $ModSettings$$Type} from "xaero.common.settings.ModSettings"
import {$RenderedPlayerTrackerManager} from "xaero.hud.minimap.player.tracker.system.RenderedPlayerTrackerManager"
import {$ClientEvents} from "xaero.common.events.ClientEvents"
import {$IPacketHandler} from "xaero.lib.common.packet.IPacketHandler"
import {$EntityRadarCategoryManager} from "xaero.hud.minimap.radar.category.EntityRadarCategoryManager"
import {$XaeroMinimapSession} from "xaero.common.XaeroMinimapSession"
import {$Hud} from "xaero.hud.Hud"
import {$HudRenderer} from "xaero.hud.render.HudRenderer"
import {$IXaeroMinimap$$Interface} from "xaero.common.IXaeroMinimap"
import {$InfoDisplayIO} from "xaero.hud.minimap.info.InfoDisplayIO"
import {$ControlsRegister} from "xaero.hud.controls.ControlsRegister"
import {$HudIO} from "xaero.hud.io.HudIO"
import {$ConfigChannel} from "xaero.lib.common.config.channel.ConfigChannel"
import {$LegacyCommonConfigIO, $LegacyCommonConfigIO$$Type} from "xaero.common.config.LegacyCommonConfigIO"
import {$FieldValidatorHolder} from "xaero.common.validator.FieldValidatorHolder"
import {$File} from "java.io.File"
import {$InterfaceRenderer} from "xaero.common.interfaces.render.InterfaceRenderer"
import {$GuiHelper} from "xaero.common.gui.GuiHelper"
import {$InterfaceManager} from "xaero.common.interfaces.InterfaceManager"
import {$SupportMods} from "xaero.common.mods.SupportMods"
import {$EntityRadarCategorySerializers} from "xaero.hud.minimap.common.radar.category.EntityRadarCategorySerializers"
import {$PatreonMod} from "xaero.lib.patreon.PatreonMod"
import {$ModClientEvents} from "xaero.common.events.ModClientEvents"
import {$PlatformContext} from "xaero.common.PlatformContext"
import {$PlayerTrackerMinimapElementRenderer} from "xaero.hud.minimap.player.tracker.PlayerTrackerMinimapElementRenderer"
import {$SupportServerMods} from "xaero.common.server.mods.SupportServerMods"
import {$ServerPlayerTickHandler, $ServerPlayerTickHandler$$Type} from "xaero.common.server.player.ServerPlayerTickHandler"
import {$PlayerTrackerSystemManager} from "xaero.common.minimap.radar.tracker.system.PlayerTrackerSystemManager"
import {$CommonEvents} from "xaero.common.events.CommonEvents"
import {$KeyMappingControllerManager} from "xaero.hud.controls.key.KeyMappingControllerManager"
import {$Path} from "java.nio.file.Path"
import {$Minimap} from "xaero.hud.minimap.Minimap"
import {$ClientEventsListener} from "xaero.common.events.ClientEventsListener"
import {$Logger} from "org.apache.logging.log4j.Logger"
import {$ModCommonEvents} from "xaero.common.events.ModCommonEvents"

export class $HudMod implements $IXaeroMinimap$$Interface {
 "waypointsFile": $Path
static "INSTANCE": $HudMod
static readonly "LOGGER": $Logger
static readonly "FAIRPLAY": boolean
 "shouldLoadLegacySettings": boolean
 "minimapFolder": $Path

public "getInterfaces"(): $InterfaceManager
public "getMessage"(): StringJS
public "isStandalone"(): boolean
public "setSettings"(arg0: $ModSettings$$Type): void
public "getEntityRadarCategoryManager"(): $EntityRadarCategoryManager
/**
 * 
 * @deprecated
 */
public "getPlayerTrackerSystemManager"(): $PlayerTrackerSystemManager
public "getEntityRadarCategorySerializers"(): $EntityRadarCategorySerializers
public "setMessage"(arg0: StringJS): void
public "getSettings"(): $ModSettings
public "getConfigSubFolder"(): $Path
public "getConfigFile"(): $Path
public "getVersionID"(): StringJS
public "isLoadedClient"(): boolean
public "getMinimapFolder"(): $Path
public "isLoadedServer"(): boolean
public "getHudConfigs"(): $ConfigChannel
public "getMessageHandler"(): $IPacketHandler
public "setOutdated"(arg0: boolean): void
public "getWaypointsFile"(): $Path
public "getFieldValidators"(): $FieldValidatorHolder
public "getPlayerTracker"(): $RenderedPlayerTrackerManager
public "getCommonConfigIO"(): $LegacyCommonConfigIO
public "setNewestUpdateID"(arg0: integer): void
public "getNewestUpdateID"(): integer
public "getInfoDisplaysIO"(): $InfoDisplayIO
public "getSupportMods"(): $SupportMods
public "tryLoadLaterServer"(): void
/**
 * 
 * @deprecated
 */
public "getWaypointsFolder"(): $Path
public "setCommonConfigIO"(arg0: $LegacyCommonConfigIO$$Type): void
public "getPlatformContext"(): $PlatformContext
public "getHudRenderer"(): $HudRenderer
public "getGuiHelper"(): $GuiHelper
public "getModClientEvents"(): $ModClientEvents
public "tryLoadLater"(): void
public "getModCommonEvents"(): $ModCommonEvents
public "resetSettings"(): void
public "getModEvents"(): $ModClientEvents
public "isFirstStageLoaded"(): boolean
public "getLatestVersion"(): StringJS
public "setLatestVersion"(arg0: StringJS): void
public "getEvents"(): $ClientEvents
public "isOutdated"(): boolean
public "isFairPlay"(): boolean
public "getHudIO"(): $HudIO
public "getMinimap"(): $Minimap
public "loadLater"(): void
public "getPatreon"(): $PatreonMod
public "loadServer"(): void
public "getModJAR"(): $File
public "getHud"(): $Hud
public "getCommonEvents"(): $CommonEvents
public "getOldConfigFileName"(): StringJS
public "getDefaultConfigsSubFolder"(): $Path
public "setLatestVersionMD5"(arg0: StringJS): void
public "setServerPlayerTickHandler"(arg0: $ServerPlayerTickHandler$$Type): void
public "getSupportServerMods"(): $SupportServerMods
public "getClientEventsListener"(): $ClientEventsListener
public "getLatestVersionMD5"(): StringJS
public "ensureControlsRegister"(): void
public "getControlsRegister"(): $ControlsRegister
public "getServerPlayerTickHandler"(): $ServerPlayerTickHandler
public "getKeyMappingControllers"(): $KeyMappingControllerManager
public "getTrackedPlayerRenderer"(): $PlayerTrackerMinimapElementRenderer
public "getInterfaceRenderer"(): $InterfaceRenderer
public "getVersionsURL"(): StringJS
public "getSettingsKey"(): any
public "createSession"(): $XaeroMinimapSession
public "getFileLayoutID"(): StringJS
public "getModId"(): StringJS
public "getUpdateLink"(): StringJS
public "getServerSettingsKey"(): any
get "interfaces"(): $InterfaceManager
get "message"(): StringJS
get "standalone"(): boolean
set "settings"(value: $ModSettings$$Type)
get "entityRadarCategoryManager"(): $EntityRadarCategoryManager
get "playerTrackerSystemManager"(): $PlayerTrackerSystemManager
get "entityRadarCategorySerializers"(): $EntityRadarCategorySerializers
set "message"(value: StringJS)
get "settings"(): $ModSettings
get "configSubFolder"(): $Path
get "configFile"(): $Path
get "versionID"(): StringJS
get "loadedClient"(): boolean
get "loadedServer"(): boolean
get "hudConfigs"(): $ConfigChannel
get "messageHandler"(): $IPacketHandler
set "outdated"(value: boolean)
get "fieldValidators"(): $FieldValidatorHolder
get "playerTracker"(): $RenderedPlayerTrackerManager
get "commonConfigIO"(): $LegacyCommonConfigIO
set "newestUpdateID"(value: integer)
get "newestUpdateID"(): integer
get "infoDisplaysIO"(): $InfoDisplayIO
get "supportMods"(): $SupportMods
get "waypointsFolder"(): $Path
set "commonConfigIO"(value: $LegacyCommonConfigIO$$Type)
get "platformContext"(): $PlatformContext
get "hudRenderer"(): $HudRenderer
get "guiHelper"(): $GuiHelper
get "modClientEvents"(): $ModClientEvents
get "modCommonEvents"(): $ModCommonEvents
get "modEvents"(): $ModClientEvents
get "firstStageLoaded"(): boolean
get "latestVersion"(): StringJS
set "latestVersion"(value: StringJS)
get "events"(): $ClientEvents
get "outdated"(): boolean
get "fairPlay"(): boolean
get "hudIO"(): $HudIO
get "minimap"(): $Minimap
get "patreon"(): $PatreonMod
get "modJAR"(): $File
get "hud"(): $Hud
get "commonEvents"(): $CommonEvents
get "oldConfigFileName"(): StringJS
get "defaultConfigsSubFolder"(): $Path
set "latestVersionMD5"(value: StringJS)
set "serverPlayerTickHandler"(value: $ServerPlayerTickHandler$$Type)
get "supportServerMods"(): $SupportServerMods
get "clientEventsListener"(): $ClientEventsListener
get "latestVersionMD5"(): StringJS
get "controlsRegister"(): $ControlsRegister
get "serverPlayerTickHandler"(): $ServerPlayerTickHandler
get "keyMappingControllers"(): $KeyMappingControllerManager
get "trackedPlayerRenderer"(): $PlayerTrackerMinimapElementRenderer
get "interfaceRenderer"(): $InterfaceRenderer
get "versionsURL"(): StringJS
get "settingsKey"(): any
get "fileLayoutID"(): StringJS
get "modId"(): StringJS
get "updateLink"(): StringJS
get "serverSettingsKey"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HudMod$$Type = ($HudMod);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HudMod$$Original = $HudMod;}
declare module "xaero.common.PlatformContextLoaderClientOnly" {
import {$IXaeroMinimap$$Type} from "xaero.common.IXaeroMinimap"

export class $PlatformContextLoaderClientOnly {
constructor()

public "preInit"(arg0: StringJS, arg1: $IXaeroMinimap$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlatformContextLoaderClientOnly$$Type = ($PlatformContextLoaderClientOnly);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlatformContextLoaderClientOnly$$Original = $PlatformContextLoaderClientOnly;}
declare module "xaero.common.IXaeroMinimap" {
import {$ModSettings, $ModSettings$$Type} from "xaero.common.settings.ModSettings"
import {$RenderedPlayerTrackerManager} from "xaero.hud.minimap.player.tracker.system.RenderedPlayerTrackerManager"
import {$ClientEvents} from "xaero.common.events.ClientEvents"
import {$IPacketHandler} from "xaero.lib.common.packet.IPacketHandler"
import {$EntityRadarCategoryManager} from "xaero.hud.minimap.radar.category.EntityRadarCategoryManager"
import {$XaeroMinimapSession} from "xaero.common.XaeroMinimapSession"
import {$Hud} from "xaero.hud.Hud"
import {$HudRenderer} from "xaero.hud.render.HudRenderer"
import {$ControlsRegister} from "xaero.hud.controls.ControlsRegister"
import {$HudIO} from "xaero.hud.io.HudIO"
import {$LegacyCommonConfigIO, $LegacyCommonConfigIO$$Type} from "xaero.common.config.LegacyCommonConfigIO"
import {$FieldValidatorHolder} from "xaero.common.validator.FieldValidatorHolder"
import {$File} from "java.io.File"
import {$InterfaceRenderer} from "xaero.common.interfaces.render.InterfaceRenderer"
import {$GuiHelper} from "xaero.common.gui.GuiHelper"
import {$InterfaceManager} from "xaero.common.interfaces.InterfaceManager"
import {$SupportMods} from "xaero.common.mods.SupportMods"
import {$PatreonMod} from "xaero.lib.patreon.PatreonMod"
import {$ModClientEvents} from "xaero.common.events.ModClientEvents"
import {$PlatformContext} from "xaero.common.PlatformContext"
import {$PlayerTrackerMinimapElementRenderer} from "xaero.hud.minimap.player.tracker.PlayerTrackerMinimapElementRenderer"
import {$SupportServerMods} from "xaero.common.server.mods.SupportServerMods"
import {$ServerPlayerTickHandler, $ServerPlayerTickHandler$$Type} from "xaero.common.server.player.ServerPlayerTickHandler"
import {$PlayerTrackerSystemManager} from "xaero.common.minimap.radar.tracker.system.PlayerTrackerSystemManager"
import {$CommonEvents} from "xaero.common.events.CommonEvents"
import {$Path} from "java.nio.file.Path"
import {$Minimap} from "xaero.hud.minimap.Minimap"
import {$ClientEventsListener} from "xaero.common.events.ClientEventsListener"
import {$ModCommonEvents} from "xaero.common.events.ModCommonEvents"

export interface $IXaeroMinimap$$Interface {
get "interfaces"(): $InterfaceManager
get "message"(): StringJS
get "standalone"(): boolean
set "settings"(value: $ModSettings$$Type)
get "entityRadarCategoryManager"(): $EntityRadarCategoryManager
get "playerTrackerSystemManager"(): $PlayerTrackerSystemManager
set "message"(value: StringJS)
get "settings"(): $ModSettings
get "versionsURL"(): StringJS
get "settingsKey"(): any
get "fileLayoutID"(): StringJS
get "configFile"(): $Path
get "versionID"(): StringJS
get "loadedClient"(): boolean
get "loadedServer"(): boolean
get "messageHandler"(): $IPacketHandler
set "outdated"(value: boolean)
get "waypointsFile"(): $Path
get "fieldValidators"(): $FieldValidatorHolder
get "playerTracker"(): $RenderedPlayerTrackerManager
get "commonConfigIO"(): $LegacyCommonConfigIO
set "newestUpdateID"(value: integer)
get "newestUpdateID"(): integer
get "supportMods"(): $SupportMods
get "waypointsFolder"(): $Path
set "commonConfigIO"(value: $LegacyCommonConfigIO$$Type)
get "platformContext"(): $PlatformContext
get "hudRenderer"(): $HudRenderer
get "guiHelper"(): $GuiHelper
get "modClientEvents"(): $ModClientEvents
get "modCommonEvents"(): $ModCommonEvents
get "modEvents"(): $ModClientEvents
get "firstStageLoaded"(): boolean
get "latestVersion"(): StringJS
set "latestVersion"(value: StringJS)
get "events"(): $ClientEvents
get "modId"(): StringJS
get "updateLink"(): StringJS
get "outdated"(): boolean
get "fairPlay"(): boolean
get "hudIO"(): $HudIO
get "minimap"(): $Minimap
get "patreon"(): $PatreonMod
get "modJAR"(): $File
get "hud"(): $Hud
get "commonEvents"(): $CommonEvents
get "serverSettingsKey"(): any
set "latestVersionMD5"(value: StringJS)
set "serverPlayerTickHandler"(value: $ServerPlayerTickHandler$$Type)
get "supportServerMods"(): $SupportServerMods
get "clientEventsListener"(): $ClientEventsListener
get "latestVersionMD5"(): StringJS
get "controlsRegister"(): $ControlsRegister
get "serverPlayerTickHandler"(): $ServerPlayerTickHandler
get "trackedPlayerRenderer"(): $PlayerTrackerMinimapElementRenderer
get "interfaceRenderer"(): $InterfaceRenderer
}

export class $IXaeroMinimap implements $IXaeroMinimap$$Interface {
static readonly "wrongWaypointsFolder": $File
static readonly "old_waypointsFile": $Path
static readonly "wrongWaypointsFile": $File

 "getInterfaces"(): $InterfaceManager
 "getMessage"(): StringJS
 "isStandalone"(): boolean
 "setSettings"(arg0: $ModSettings$$Type): void
 "getEntityRadarCategoryManager"(): $EntityRadarCategoryManager
/**
 * 
 * @deprecated
 */
 "getPlayerTrackerSystemManager"(): $PlayerTrackerSystemManager
 "setMessage"(arg0: StringJS): void
 "getSettings"(): $ModSettings
 "getVersionsURL"(): StringJS
 "getSettingsKey"(): any
 "createSession"(): $XaeroMinimapSession
 "getFileLayoutID"(): StringJS
 "getConfigFile"(): $Path
 "getVersionID"(): StringJS
 "isLoadedClient"(): boolean
 "isLoadedServer"(): boolean
 "getMessageHandler"(): $IPacketHandler
 "setOutdated"(arg0: boolean): void
 "getWaypointsFile"(): $Path
 "getFieldValidators"(): $FieldValidatorHolder
 "getPlayerTracker"(): $RenderedPlayerTrackerManager
 "getCommonConfigIO"(): $LegacyCommonConfigIO
 "setNewestUpdateID"(arg0: integer): void
 "getNewestUpdateID"(): integer
 "getSupportMods"(): $SupportMods
 "tryLoadLaterServer"(): void
 "getWaypointsFolder"(): $Path
 "setCommonConfigIO"(arg0: $LegacyCommonConfigIO$$Type): void
 "getPlatformContext"(): $PlatformContext
 "getHudRenderer"(): $HudRenderer
 "getGuiHelper"(): $GuiHelper
 "getModClientEvents"(): $ModClientEvents
 "tryLoadLater"(): void
 "getModCommonEvents"(): $ModCommonEvents
 "resetSettings"(): void
 "getModEvents"(): $ModClientEvents
 "isFirstStageLoaded"(): boolean
 "getLatestVersion"(): StringJS
 "setLatestVersion"(arg0: StringJS): void
 "getEvents"(): $ClientEvents
 "getModId"(): StringJS
 "getUpdateLink"(): StringJS
 "isOutdated"(): boolean
 "isFairPlay"(): boolean
 "getHudIO"(): $HudIO
 "getMinimap"(): $Minimap
 "getPatreon"(): $PatreonMod
 "getModJAR"(): $File
 "getHud"(): $Hud
 "getCommonEvents"(): $CommonEvents
 "getServerSettingsKey"(): any
 "setLatestVersionMD5"(arg0: StringJS): void
 "setServerPlayerTickHandler"(arg0: $ServerPlayerTickHandler$$Type): void
 "getSupportServerMods"(): $SupportServerMods
 "getClientEventsListener"(): $ClientEventsListener
 "getLatestVersionMD5"(): StringJS
 "ensureControlsRegister"(): void
 "getControlsRegister"(): $ControlsRegister
 "getServerPlayerTickHandler"(): $ServerPlayerTickHandler
 "getTrackedPlayerRenderer"(): $PlayerTrackerMinimapElementRenderer
 "getInterfaceRenderer"(): $InterfaceRenderer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IXaeroMinimap$$Type = ($IXaeroMinimap);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IXaeroMinimap$$Original = $IXaeroMinimap;}
declare module "xaero.common.PlatformContextLoaderCommon" {
import {$IXaeroMinimap$$Type} from "xaero.common.IXaeroMinimap"

export class $PlatformContextLoaderCommon {
constructor()

public "setup"(arg0: $IXaeroMinimap$$Type): void
set "up"(value: $IXaeroMinimap$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlatformContextLoaderCommon$$Type = ($PlatformContextLoaderCommon);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlatformContextLoaderCommon$$Original = $PlatformContextLoaderCommon;}
declare module "xaero.common.PlatformContext" {
import {$HudMod$$Type} from "xaero.common.HudMod"
import {$ClientEvents} from "xaero.common.events.ClientEvents"
import {$PlatformContextLoaderClientOnly} from "xaero.common.PlatformContextLoaderClientOnly"
import {$SupportMods} from "xaero.common.mods.SupportMods"
import {$BlockStateShortShapeCache$$Type} from "xaero.common.cache.BlockStateShortShapeCache"
import {$ModClientEvents} from "xaero.common.events.ModClientEvents"
import {$MinimapWriter} from "xaero.common.minimap.write.MinimapWriter"
import {$HighlighterRegistry$$Type} from "xaero.common.minimap.highlight.HighlighterRegistry"
import {$PlatformContextLoaderCommon} from "xaero.common.PlatformContextLoaderCommon"
import {$IXaeroMinimap$$Type} from "xaero.common.IXaeroMinimap"
import {$CommonEvents} from "xaero.common.events.CommonEvents"
import {$MinimapSession$$Type} from "xaero.hud.minimap.module.MinimapSession"
import {$ModCommonEvents} from "xaero.common.events.ModCommonEvents"

export class $PlatformContext {
constructor()

public "createClientEvents"(arg0: $HudMod$$Type): $ClientEvents
public "createSupportMods"(arg0: $IXaeroMinimap$$Type): $SupportMods
public "createCommonEvents"(arg0: $HudMod$$Type): $CommonEvents
public "getModInfoVersion"(): StringJS
public "createMinimapWriter"(arg0: $IXaeroMinimap$$Type, arg1: $MinimapSession$$Type, arg2: $BlockStateShortShapeCache$$Type, arg3: $HighlighterRegistry$$Type): $MinimapWriter
public "getLoaderClientOnly"(): $PlatformContextLoaderClientOnly
public "createModCommonEvents"(arg0: $IXaeroMinimap$$Type): $ModCommonEvents
public "createModClientEvents"(arg0: $IXaeroMinimap$$Type): $ModClientEvents
public "getLoaderCommon"(): $PlatformContextLoaderCommon
get "modInfoVersion"(): StringJS
get "loaderClientOnly"(): $PlatformContextLoaderClientOnly
get "loaderCommon"(): $PlatformContextLoaderCommon
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlatformContext$$Type = ($PlatformContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlatformContext$$Original = $PlatformContext;}
