declare module "xaero.common.minimap.radar.tracker.system.IPlayerTrackerSystem" {
import {$Iterator} from "java.util.Iterator"
import {$IRenderedPlayerTracker$$Interface} from "xaero.hud.minimap.player.tracker.system.IRenderedPlayerTracker"
import {$ITrackedPlayerReader} from "xaero.hud.minimap.player.tracker.system.ITrackedPlayerReader"

/**
 * 
 * @deprecated
 */
export interface $IPlayerTrackerSystem$$Interface<P> extends $IRenderedPlayerTracker$$Interface<(P)> {
get "reader"(): $ITrackedPlayerReader<(P)>
get "trackedPlayerIterator"(): $Iterator<(P)>
}

export class $IPlayerTrackerSystem<P> implements $IPlayerTrackerSystem$$Interface {
 "getReader"(): $ITrackedPlayerReader<(P)>
 "getTrackedPlayerIterator"(): $Iterator<(P)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerTrackerSystem$$Type<P> = ($IPlayerTrackerSystem<(P)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPlayerTrackerSystem$$Original<P> = $IPlayerTrackerSystem<(P)>;}
declare module "xaero.common.minimap.radar.tracker.system.PlayerTrackerSystemManager" {
import {$Iterable} from "java.lang.Iterable"
import {$IPlayerTrackerSystem, $IPlayerTrackerSystem$$Type} from "xaero.common.minimap.radar.tracker.system.IPlayerTrackerSystem"
import {$RenderedPlayerTrackerManager} from "xaero.hud.minimap.player.tracker.system.RenderedPlayerTrackerManager"
import {$IRenderedPlayerTracker$$Type} from "xaero.hud.minimap.player.tracker.system.IRenderedPlayerTracker"

/**
 * 
 * @deprecated
 */
export class $PlayerTrackerSystemManager extends $RenderedPlayerTrackerManager {
constructor()

public "register"(arg0: StringJS, arg1: $IRenderedPlayerTracker$$Type<(never)>): void
/**
 * 
 * @deprecated
 */
public "register"(arg0: StringJS, arg1: $IPlayerTrackerSystem$$Type<(never)>): void
/**
 * 
 * @deprecated
 */
public "getSystems"(): $Iterable<($IPlayerTrackerSystem<(never)>)>
get "systems"(): $Iterable<($IPlayerTrackerSystem<(never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerTrackerSystemManager$$Type = ($PlayerTrackerSystemManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerTrackerSystemManager$$Original = $PlayerTrackerSystemManager;}
declare module "xaero.common.minimap.radar.MinimapRadarList" {
import {$Iterable} from "java.lang.Iterable"
import {$EntityRadarCategory, $EntityRadarCategory$$Type} from "xaero.hud.minimap.radar.category.EntityRadarCategory"
import {$RadarList} from "xaero.hud.minimap.radar.state.RadarList"

/**
 * 
 * @deprecated
 */
export class $MinimapRadarList extends $RadarList {
/**
 * 
 * @deprecated
 */
constructor()

/**
 * 
 * @deprecated
 */
public "getEntities"(): $Iterable
/**
 * 
 * @deprecated
 */
public "getClientCategory"(): $EntityRadarCategory
/**
 * 
 * @deprecated
 */
public "setClientCategory"(arg0: $EntityRadarCategory$$Type): $MinimapRadarList
get "entities"(): $Iterable
get "clientCategory"(): $EntityRadarCategory
set "clientCategory"(value: $EntityRadarCategory$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapRadarList$$Type = ($MinimapRadarList);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinimapRadarList$$Original = $MinimapRadarList;}
declare module "xaero.common.minimap.radar.tracker.synced.ClientSyncedTrackedPlayerManager" {
import {$Iterable} from "java.lang.Iterable"
import {$ClientSyncedTrackedPlayerManager as $ClientSyncedTrackedPlayerManager$0} from "xaero.hud.minimap.player.tracker.synced.ClientSyncedTrackedPlayerManager"
import {$UUID$$Type} from "java.util.UUID"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$SyncedTrackedPlayer} from "xaero.common.server.radar.tracker.SyncedTrackedPlayer"

/**
 * 
 * @deprecated
 */
export class $ClientSyncedTrackedPlayerManager extends $ClientSyncedTrackedPlayerManager$0 {
constructor()

/**
 * 
 * @deprecated
 */
public "remove"(arg0: $UUID$$Type): void
/**
 * 
 * @deprecated
 */
public "reset"(): void
/**
 * 
 * @deprecated
 */
public "update"(arg0: $UUID$$Type, arg1: double, arg2: double, arg3: double, arg4: $ResourceKey$$Type<($Level)>): void
/**
 * 
 * @deprecated
 */
public "getPlayers"(): $Iterable<($SyncedTrackedPlayer)>
get "players"(): $Iterable<($SyncedTrackedPlayer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientSyncedTrackedPlayerManager$$Type = ($ClientSyncedTrackedPlayerManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientSyncedTrackedPlayerManager$$Original = $ClientSyncedTrackedPlayerManager;}
declare module "xaero.common.minimap.radar.MinimapRadar" {
import {$MinimapProcessor$$Type} from "xaero.common.minimap.MinimapProcessor"
import {$Iterator} from "java.util.Iterator"
import {$MinimapRadarList} from "xaero.common.minimap.radar.MinimapRadarList"
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$EntityRadarCategory$$Type} from "xaero.hud.minimap.radar.category.EntityRadarCategory"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$RadarSession} from "xaero.hud.minimap.radar.RadarSession"
import {$EntityRadarCategoryManager, $EntityRadarCategoryManager$$Type} from "xaero.hud.minimap.radar.category.EntityRadarCategoryManager"

/**
 * 
 * @deprecated
 */
export class $MinimapRadar extends $RadarSession {
/**
 * 
 * @deprecated
 */
constructor(arg0: $EntityRadarCategoryManager$$Type)

/**
 * 
 * @deprecated
 */
public "getRadarListsIterator"(): $Iterator<($MinimapRadarList)>
/**
 * 
 * @deprecated
 */
public "getEntityCategoryManager"(): $EntityRadarCategoryManager
/**
 * 
 * @deprecated
 */
public "getEntityBrightness"(arg0: float, arg1: integer, arg2: integer, arg3: boolean): float
/**
 * 
 * @deprecated
 */
public "getMaxDistance"(arg0: $MinimapProcessor$$Type, arg1: boolean): double
/**
 * 
 * @deprecated
 */
public "getTeamColour"(arg0: $Entity$$Type): integer
/**
 * 
 * @deprecated
 */
public "getEntityY"(arg0: $Entity$$Type, arg1: float): double
/**
 * 
 * @deprecated
 */
public "getEntityZ"(arg0: $Entity$$Type, arg1: float): double
/**
 * 
 * @deprecated
 */
public "getEntityX"(arg0: $Entity$$Type, arg1: float): double
/**
 * 
 * @deprecated
 */
public "setLastRenderViewEntity"(arg0: $Entity$$Type): void
/**
 * 
 * @deprecated
 */
public "updateRadar"(arg0: $ClientLevel$$Type, arg1: $Player$$Type, arg2: $Entity$$Type, arg3: $MinimapProcessor$$Type): void
/**
 * 
 * @deprecated
 */
public "getEntityColour"(arg0: $Player$$Type, arg1: $Entity$$Type, arg2: float, arg3: boolean, arg4: $EntityRadarCategory$$Type, arg5: integer, arg6: integer, arg7: boolean, arg8: integer): integer
get "radarListsIterator"(): $Iterator<($MinimapRadarList)>
get "entityCategoryManager"(): $EntityRadarCategoryManager
set "lastRenderViewEntity"(value: $Entity$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapRadar$$Type = ($MinimapRadar);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinimapRadar$$Original = $MinimapRadar;}
