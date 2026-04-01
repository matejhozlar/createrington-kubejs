declare module "xaero.common.XaeroMinimapSession" {
import {$WaypointSharingHandler} from "xaero.common.minimap.waypoints.WaypointSharingHandler"
import {$MinimapProcessor} from "xaero.common.minimap.MinimapProcessor"
import {$LocalPlayer$$Type} from "net.minecraft.client.player.LocalPlayer"
import {$HudMod$$Type} from "xaero.common.HudMod"
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
public "getWaypointSharing"(): $WaypointSharingHandler
public static "getForPlayer"(arg0: $LocalPlayer$$Type): $XaeroMinimapSession
public "getMinimapProcessor"(): $MinimapProcessor
public "getModMain"(): $IXaeroMinimap
public "getWaypointsManager"(): $WaypointsManager
get "currentSession"(): $XaeroMinimapSession
get "waypointSharing"(): $WaypointSharingHandler
get "minimapProcessor"(): $MinimapProcessor
get "modMain"(): $IXaeroMinimap
get "waypointsManager"(): $WaypointsManager
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
import {$IPacketHandler} from "xaero.lib.common.packet.IPacketHandler"
import {$ClientEvents} from "xaero.common.events.ClientEvents"
import {$EntityRadarCategoryManager} from "xaero.hud.minimap.radar.category.EntityRadarCategoryManager"
import {$XaeroMinimapSession} from "xaero.common.XaeroMinimapSession"
import {$Hud} from "xaero.hud.Hud"
import {$HudRenderer} from "xaero.hud.render.HudRenderer"
import {$IXaeroMinimap$$Interface} from "xaero.common.IXaeroMinimap"
import {$InfoDisplayIO} from "xaero.hud.minimap.info.InfoDisplayIO"
import {$ControlsRegister} from "xaero.hud.controls.ControlsRegister"
import {$HudIO} from "xaero.hud.io.HudIO"
import {$LegacyCommonConfigIO, $LegacyCommonConfigIO$$Type} from "xaero.common.config.LegacyCommonConfigIO"
import {$ConfigChannel} from "xaero.lib.common.config.channel.ConfigChannel"
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
import {$Minimap} from "xaero.hud.minimap.Minimap"
import {$Path} from "java.nio.file.Path"
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
public "getHudConfigs"(): $ConfigChannel
public "getMinimapFolder"(): $Path
public "getVersionID"(): StringJS
public "isLoadedClient"(): boolean
public "isLoadedServer"(): boolean
public "getConfigSubFolder"(): $Path
public "getEvents"(): $ClientEvents
public "setSettings"(arg0: $ModSettings$$Type): void
public "getSettings"(): $ModSettings
public "isOutdated"(): boolean
public "getMinimap"(): $Minimap
public "loadServer"(): void
public "isFairPlay"(): boolean
public "getHud"(): $Hud
public "getModJAR"(): $File
public "getPatreon"(): $PatreonMod
public "getHudIO"(): $HudIO
public "loadLater"(): void
public "setMessage"(arg0: StringJS): void
public "getCommonEvents"(): $CommonEvents
public "ensureControlsRegister"(): void
public "setServerPlayerTickHandler"(arg0: $ServerPlayerTickHandler$$Type): void
public "setLatestVersionMD5"(arg0: StringJS): void
public "getInterfaceRenderer"(): $InterfaceRenderer
public "getClientEventsListener"(): $ClientEventsListener
public "getServerPlayerTickHandler"(): $ServerPlayerTickHandler
public "getLatestVersionMD5"(): StringJS
public "getControlsRegister"(): $ControlsRegister
public "getSupportServerMods"(): $SupportServerMods
public "getKeyMappingControllers"(): $KeyMappingControllerManager
public "getTrackedPlayerRenderer"(): $PlayerTrackerMinimapElementRenderer
/**
 * 
 * @deprecated
 */
public "getPlayerTrackerSystemManager"(): $PlayerTrackerSystemManager
public "getEntityRadarCategoryManager"(): $EntityRadarCategoryManager
public "getEntityRadarCategorySerializers"(): $EntityRadarCategorySerializers
public "resetSettings"(): void
public "setLatestVersion"(arg0: StringJS): void
public "getNewestUpdateID"(): integer
public "tryLoadLaterServer"(): void
public "getHudRenderer"(): $HudRenderer
public "setCommonConfigIO"(arg0: $LegacyCommonConfigIO$$Type): void
/**
 * 
 * @deprecated
 */
public "getWaypointsFolder"(): $Path
public "getCommonConfigIO"(): $LegacyCommonConfigIO
public "getPlatformContext"(): $PlatformContext
public "getWaypointsFile"(): $Path
public "tryLoadLater"(): void
public "setOutdated"(arg0: boolean): void
public "getSupportMods"(): $SupportMods
public "getModEvents"(): $ModClientEvents
public "getGuiHelper"(): $GuiHelper
public "getLatestVersion"(): StringJS
public "getFieldValidators"(): $FieldValidatorHolder
public "getMessageHandler"(): $IPacketHandler
public "getModCommonEvents"(): $ModCommonEvents
public "getModClientEvents"(): $ModClientEvents
public "getPlayerTracker"(): $RenderedPlayerTrackerManager
public "isFirstStageLoaded"(): boolean
public "getInfoDisplaysIO"(): $InfoDisplayIO
public "setNewestUpdateID"(arg0: integer): void
public "getConfigFile"(): $Path
public "getOldConfigFileName"(): StringJS
public "getDefaultConfigsSubFolder"(): $Path
public "getModId"(): StringJS
public "getFileLayoutID"(): StringJS
public "getVersionsURL"(): StringJS
public "getSettingsKey"(): any
public "createSession"(): $XaeroMinimapSession
public "getUpdateLink"(): StringJS
public "getServerSettingsKey"(): any
get "interfaces"(): $InterfaceManager
get "message"(): StringJS
get "standalone"(): boolean
get "hudConfigs"(): $ConfigChannel
get "versionID"(): StringJS
get "loadedClient"(): boolean
get "loadedServer"(): boolean
get "configSubFolder"(): $Path
get "events"(): $ClientEvents
set "settings"(value: $ModSettings$$Type)
get "settings"(): $ModSettings
get "outdated"(): boolean
get "minimap"(): $Minimap
get "fairPlay"(): boolean
get "hud"(): $Hud
get "modJAR"(): $File
get "patreon"(): $PatreonMod
get "hudIO"(): $HudIO
set "message"(value: StringJS)
get "commonEvents"(): $CommonEvents
set "serverPlayerTickHandler"(value: $ServerPlayerTickHandler$$Type)
set "latestVersionMD5"(value: StringJS)
get "interfaceRenderer"(): $InterfaceRenderer
get "clientEventsListener"(): $ClientEventsListener
get "serverPlayerTickHandler"(): $ServerPlayerTickHandler
get "latestVersionMD5"(): StringJS
get "controlsRegister"(): $ControlsRegister
get "supportServerMods"(): $SupportServerMods
get "keyMappingControllers"(): $KeyMappingControllerManager
get "trackedPlayerRenderer"(): $PlayerTrackerMinimapElementRenderer
get "playerTrackerSystemManager"(): $PlayerTrackerSystemManager
get "entityRadarCategoryManager"(): $EntityRadarCategoryManager
get "entityRadarCategorySerializers"(): $EntityRadarCategorySerializers
set "latestVersion"(value: StringJS)
get "newestUpdateID"(): integer
get "hudRenderer"(): $HudRenderer
set "commonConfigIO"(value: $LegacyCommonConfigIO$$Type)
get "waypointsFolder"(): $Path
get "commonConfigIO"(): $LegacyCommonConfigIO
get "platformContext"(): $PlatformContext
set "outdated"(value: boolean)
get "supportMods"(): $SupportMods
get "modEvents"(): $ModClientEvents
get "guiHelper"(): $GuiHelper
get "latestVersion"(): StringJS
get "fieldValidators"(): $FieldValidatorHolder
get "messageHandler"(): $IPacketHandler
get "modCommonEvents"(): $ModCommonEvents
get "modClientEvents"(): $ModClientEvents
get "playerTracker"(): $RenderedPlayerTrackerManager
get "firstStageLoaded"(): boolean
get "infoDisplaysIO"(): $InfoDisplayIO
set "newestUpdateID"(value: integer)
get "configFile"(): $Path
get "oldConfigFileName"(): StringJS
get "defaultConfigsSubFolder"(): $Path
get "modId"(): StringJS
get "fileLayoutID"(): StringJS
get "versionsURL"(): StringJS
get "settingsKey"(): any
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
import {$IPacketHandler} from "xaero.lib.common.packet.IPacketHandler"
import {$ClientEvents} from "xaero.common.events.ClientEvents"
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
import {$Minimap} from "xaero.hud.minimap.Minimap"
import {$Path} from "java.nio.file.Path"
import {$ClientEventsListener} from "xaero.common.events.ClientEventsListener"
import {$ModCommonEvents} from "xaero.common.events.ModCommonEvents"

export interface $IXaeroMinimap$$Interface {
get "interfaces"(): $InterfaceManager
get "message"(): StringJS
get "standalone"(): boolean
get "modId"(): StringJS
get "fileLayoutID"(): StringJS
get "versionsURL"(): StringJS
get "settingsKey"(): any
get "versionID"(): StringJS
get "loadedClient"(): boolean
get "loadedServer"(): boolean
get "events"(): $ClientEvents
set "settings"(value: $ModSettings$$Type)
get "settings"(): $ModSettings
get "outdated"(): boolean
get "minimap"(): $Minimap
get "fairPlay"(): boolean
get "hud"(): $Hud
get "modJAR"(): $File
get "patreon"(): $PatreonMod
get "hudIO"(): $HudIO
set "message"(value: StringJS)
get "commonEvents"(): $CommonEvents
set "serverPlayerTickHandler"(value: $ServerPlayerTickHandler$$Type)
set "latestVersionMD5"(value: StringJS)
get "interfaceRenderer"(): $InterfaceRenderer
get "clientEventsListener"(): $ClientEventsListener
get "serverPlayerTickHandler"(): $ServerPlayerTickHandler
get "latestVersionMD5"(): StringJS
get "controlsRegister"(): $ControlsRegister
get "supportServerMods"(): $SupportServerMods
get "trackedPlayerRenderer"(): $PlayerTrackerMinimapElementRenderer
get "playerTrackerSystemManager"(): $PlayerTrackerSystemManager
get "entityRadarCategoryManager"(): $EntityRadarCategoryManager
get "updateLink"(): StringJS
set "latestVersion"(value: StringJS)
get "newestUpdateID"(): integer
get "hudRenderer"(): $HudRenderer
set "commonConfigIO"(value: $LegacyCommonConfigIO$$Type)
get "waypointsFolder"(): $Path
get "commonConfigIO"(): $LegacyCommonConfigIO
get "platformContext"(): $PlatformContext
get "waypointsFile"(): $Path
set "outdated"(value: boolean)
get "supportMods"(): $SupportMods
get "modEvents"(): $ModClientEvents
get "guiHelper"(): $GuiHelper
get "latestVersion"(): StringJS
get "fieldValidators"(): $FieldValidatorHolder
get "messageHandler"(): $IPacketHandler
get "modCommonEvents"(): $ModCommonEvents
get "modClientEvents"(): $ModClientEvents
get "playerTracker"(): $RenderedPlayerTrackerManager
get "firstStageLoaded"(): boolean
set "newestUpdateID"(value: integer)
get "configFile"(): $Path
get "serverSettingsKey"(): any
}

export class $IXaeroMinimap implements $IXaeroMinimap$$Interface {
static readonly "wrongWaypointsFolder": $File
static readonly "old_waypointsFile": $Path
static readonly "wrongWaypointsFile": $File

 "getInterfaces"(): $InterfaceManager
 "getMessage"(): StringJS
 "isStandalone"(): boolean
 "getModId"(): StringJS
 "getFileLayoutID"(): StringJS
 "getVersionsURL"(): StringJS
 "getSettingsKey"(): any
 "getVersionID"(): StringJS
 "isLoadedClient"(): boolean
 "createSession"(): $XaeroMinimapSession
 "isLoadedServer"(): boolean
 "getEvents"(): $ClientEvents
 "setSettings"(arg0: $ModSettings$$Type): void
 "getSettings"(): $ModSettings
 "isOutdated"(): boolean
 "getMinimap"(): $Minimap
 "isFairPlay"(): boolean
 "getHud"(): $Hud
 "getModJAR"(): $File
 "getPatreon"(): $PatreonMod
 "getHudIO"(): $HudIO
 "setMessage"(arg0: StringJS): void
 "getCommonEvents"(): $CommonEvents
 "ensureControlsRegister"(): void
 "setServerPlayerTickHandler"(arg0: $ServerPlayerTickHandler$$Type): void
 "setLatestVersionMD5"(arg0: StringJS): void
 "getInterfaceRenderer"(): $InterfaceRenderer
 "getClientEventsListener"(): $ClientEventsListener
 "getServerPlayerTickHandler"(): $ServerPlayerTickHandler
 "getLatestVersionMD5"(): StringJS
 "getControlsRegister"(): $ControlsRegister
 "getSupportServerMods"(): $SupportServerMods
 "getTrackedPlayerRenderer"(): $PlayerTrackerMinimapElementRenderer
/**
 * 
 * @deprecated
 */
 "getPlayerTrackerSystemManager"(): $PlayerTrackerSystemManager
 "getEntityRadarCategoryManager"(): $EntityRadarCategoryManager
 "getUpdateLink"(): StringJS
 "resetSettings"(): void
 "setLatestVersion"(arg0: StringJS): void
 "getNewestUpdateID"(): integer
 "tryLoadLaterServer"(): void
 "getHudRenderer"(): $HudRenderer
 "setCommonConfigIO"(arg0: $LegacyCommonConfigIO$$Type): void
 "getWaypointsFolder"(): $Path
 "getCommonConfigIO"(): $LegacyCommonConfigIO
 "getPlatformContext"(): $PlatformContext
 "getWaypointsFile"(): $Path
 "tryLoadLater"(): void
 "setOutdated"(arg0: boolean): void
 "getSupportMods"(): $SupportMods
 "getModEvents"(): $ModClientEvents
 "getGuiHelper"(): $GuiHelper
 "getLatestVersion"(): StringJS
 "getFieldValidators"(): $FieldValidatorHolder
 "getMessageHandler"(): $IPacketHandler
 "getModCommonEvents"(): $ModCommonEvents
 "getModClientEvents"(): $ModClientEvents
 "getPlayerTracker"(): $RenderedPlayerTrackerManager
 "isFirstStageLoaded"(): boolean
 "setNewestUpdateID"(arg0: integer): void
 "getConfigFile"(): $Path
 "getServerSettingsKey"(): any
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
import {$PlatformContextLoaderClientOnly} from "xaero.common.PlatformContextLoaderClientOnly"
import {$ClientEvents} from "xaero.common.events.ClientEvents"
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

public "createModClientEvents"(arg0: $IXaeroMinimap$$Type): $ModClientEvents
public "getModInfoVersion"(): StringJS
public "createCommonEvents"(arg0: $HudMod$$Type): $CommonEvents
public "createClientEvents"(arg0: $HudMod$$Type): $ClientEvents
public "createSupportMods"(arg0: $IXaeroMinimap$$Type): $SupportMods
public "getLoaderCommon"(): $PlatformContextLoaderCommon
public "createModCommonEvents"(arg0: $IXaeroMinimap$$Type): $ModCommonEvents
public "createMinimapWriter"(arg0: $IXaeroMinimap$$Type, arg1: $MinimapSession$$Type, arg2: $BlockStateShortShapeCache$$Type, arg3: $HighlighterRegistry$$Type): $MinimapWriter
public "getLoaderClientOnly"(): $PlatformContextLoaderClientOnly
get "modInfoVersion"(): StringJS
get "loaderCommon"(): $PlatformContextLoaderCommon
get "loaderClientOnly"(): $PlatformContextLoaderClientOnly
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
