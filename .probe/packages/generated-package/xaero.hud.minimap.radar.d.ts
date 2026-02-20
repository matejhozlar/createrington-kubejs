declare module "xaero.hud.minimap.radar.state.RadarState" {
import {$Iterable} from "java.lang.Iterable"
import {$EntityRadarCategory, $EntityRadarCategory$$Type} from "xaero.hud.minimap.radar.category.EntityRadarCategory"
import {$RadarList} from "xaero.hud.minimap.radar.state.RadarList"

export class $RadarState {
constructor()

public "getListsReversedOrder"(): boolean
public "getListsGeneratedForConfig"(): $EntityRadarCategory
public "getListsGeneratedForSyncedConfig"(): $EntityRadarCategory
public "setListsGeneratedForSyncedConfig"(arg0: $EntityRadarCategory$$Type): void
public "getRadarLists"(): $Iterable<($RadarList)>
get "listsReversedOrder"(): boolean
get "listsGeneratedForConfig"(): $EntityRadarCategory
get "listsGeneratedForSyncedConfig"(): $EntityRadarCategory
set "listsGeneratedForSyncedConfig"(value: $EntityRadarCategory$$Type)
get "radarLists"(): $Iterable<($RadarList)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RadarState$$Type = ($RadarState);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RadarState$$Original = $RadarState;}
declare module "xaero.hud.minimap.radar.category.EntityRadarBackwardsCompatibilityConfig" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $EntityRadarBackwardsCompatibilityConfig {
 "showPlayers": boolean
 "tamedMobNames": integer
 "displayNameWhenIconFails": boolean
 "hostileColor": integer
 "friendlyMobNames": integer
 "playerIcons": integer
 "playersColor": integer
 "otherTeamsNames": integer
 "showItems": boolean
 "alwaysEntityNametags": boolean
 "mobIcons": integer
 "otherTeamColor": integer
 "tamedIcons": integer
 "showMobs": boolean
 "showOtherTeam": boolean
 "playerNames": integer
 "dotsSize": integer
 "itemNames": integer
 "tamedMobsColor": integer
 "hostileIcons": integer
 "showHostile": boolean
 "itemsColor": integer
 "headsScale": double
 "otherColor": integer
 "showTamed": boolean
 "hostileMobNames": integer
 "heightLimit": integer
 "otherNames": integer
 "showEntityHeight": boolean
 "itemFramesOnRadar": boolean
 "entityAmount": integer
 "mobsColor": integer
 "showOther": boolean

constructor()

public "readSetting"(arg0: (StringJS)[]): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRadarBackwardsCompatibilityConfig$$Type = ($EntityRadarBackwardsCompatibilityConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityRadarBackwardsCompatibilityConfig$$Original = $EntityRadarBackwardsCompatibilityConfig;}
declare module "xaero.hud.minimap.radar.category.serialization.data.EntityRadarCategoryData" {
import {$FilterObjectCategoryData} from "xaero.hud.category.serialization.data.FilterObjectCategoryData"

export class $EntityRadarCategoryData extends $FilterObjectCategoryData<($EntityRadarCategoryData)> {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRadarCategoryData$$Type = ($EntityRadarCategoryData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityRadarCategoryData$$Original = $EntityRadarCategoryData;}
declare module "xaero.hud.minimap.radar.state.RadarStateUpdater" {
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RadarState$$Type} from "xaero.hud.minimap.radar.state.RadarState"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$EntityRadarCategoryManager$$Type} from "xaero.hud.minimap.radar.category.EntityRadarCategoryManager"

export class $RadarStateUpdater {
constructor(arg0: $EntityRadarCategoryManager$$Type, arg1: $RadarState$$Type)

public "update"(arg0: $ClientLevel$$Type, arg1: $Entity$$Type, arg2: $Player$$Type): void
public "setLastRenderViewEntity"(arg0: $Entity$$Type): void
set "lastRenderViewEntity"(value: $Entity$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RadarStateUpdater$$Type = ($RadarStateUpdater);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RadarStateUpdater$$Original = $RadarStateUpdater;}
declare module "xaero.hud.minimap.radar.color.RadarColorHelper" {
import {$EntityRadarCategory$$Type} from "xaero.hud.minimap.radar.category.EntityRadarCategory"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$RadarList$$Type} from "xaero.hud.minimap.radar.state.RadarList"
import {$RadarColor, $RadarColor$$Type} from "xaero.hud.minimap.radar.color.RadarColor"

export class $RadarColorHelper {
constructor()

public "getTeamColor"(arg0: $Entity$$Type): integer
public "getEntityHeightFade"(arg0: float, arg1: integer, arg2: integer): float
public "getFallbackColor"(arg0: $EntityRadarCategory$$Type, arg1: $EntityRadarCategory$$Type): $RadarColor
public "getFallbackColor"(arg0: $RadarList$$Type): $RadarColor
public "getEntityColor"(arg0: $Entity$$Type, arg1: float, arg2: boolean, arg3: integer, arg4: integer, arg5: boolean, arg6: $RadarColor$$Type, arg7: $RadarColor$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RadarColorHelper$$Type = ($RadarColorHelper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RadarColorHelper$$Original = $RadarColorHelper;}
declare module "xaero.hud.minimap.radar.category.EntityRadarDefaultCategories" {
import {$ModSettings$$Type} from "xaero.common.settings.ModSettings"
import {$EntityRadarCategory} from "xaero.hud.minimap.radar.category.EntityRadarCategory"

export class $EntityRadarDefaultCategories {
constructor(arg0: boolean)

public "setupDefault"(arg0: $ModSettings$$Type): $EntityRadarCategory
set "upDefault"(value: $ModSettings$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRadarDefaultCategories$$Type = ($EntityRadarDefaultCategories);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityRadarDefaultCategories$$Original = $EntityRadarDefaultCategories;}
declare module "xaero.hud.minimap.radar.category.EntityRadarCategoryConfigIO" {
import {$Config$$Type} from "xaero.lib.common.config.Config"
import {$EntityRadarCategory, $EntityRadarCategory$$Type} from "xaero.hud.minimap.radar.category.EntityRadarCategory"

export class $EntityRadarCategoryConfigIO {
public "loadRootCategory"(arg0: $Config$$Type): $EntityRadarCategory
public "storeRootCategory"(arg0: $EntityRadarCategory$$Type, arg1: $Config$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRadarCategoryConfigIO$$Type = ($EntityRadarCategoryConfigIO);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityRadarCategoryConfigIO$$Original = $EntityRadarCategoryConfigIO;}
declare module "xaero.hud.minimap.radar.RadarSession" {
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RadarState} from "xaero.hud.minimap.radar.state.RadarState"
import {$RadarStateUpdater} from "xaero.hud.minimap.radar.state.RadarStateUpdater"
import {$RadarColorHelper} from "xaero.hud.minimap.radar.color.RadarColorHelper"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$EntityRadarCategoryManager, $EntityRadarCategoryManager$$Type} from "xaero.hud.minimap.radar.category.EntityRadarCategoryManager"

export class $RadarSession {
constructor(arg0: $EntityRadarCategoryManager$$Type)

public "update"(arg0: $ClientLevel$$Type, arg1: $Entity$$Type, arg2: $Player$$Type): void
public "getState"(): $RadarState
public "getColorHelper"(): $RadarColorHelper
public "getStateUpdater"(): $RadarStateUpdater
public "getCategoryManager"(): $EntityRadarCategoryManager
get "state"(): $RadarState
get "colorHelper"(): $RadarColorHelper
get "stateUpdater"(): $RadarStateUpdater
get "categoryManager"(): $EntityRadarCategoryManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RadarSession$$Type = ($RadarSession);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RadarSession$$Original = $RadarSession;}
declare module "xaero.hud.minimap.radar.category.serialization.data.EntityRadarCategoryData$Builder" {
import {$ObjectCategoryData$Builder} from "xaero.hud.category.serialization.data.ObjectCategoryData$Builder"
import {$FilterObjectCategoryData$Builder} from "xaero.hud.category.serialization.data.FilterObjectCategoryData$Builder"
import {$EntityRadarCategoryData} from "xaero.hud.minimap.radar.category.serialization.data.EntityRadarCategoryData"

export class $EntityRadarCategoryData$Builder extends $FilterObjectCategoryData$Builder<($EntityRadarCategoryData), ($EntityRadarCategoryData$Builder)> {
public static "begin"(): $EntityRadarCategoryData$Builder
public "setDefault"(): $ObjectCategoryData$Builder
get "default"(): $ObjectCategoryData$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRadarCategoryData$Builder$$Type = ($EntityRadarCategoryData$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityRadarCategoryData$Builder$$Original = $EntityRadarCategoryData$Builder;}
declare module "xaero.hud.minimap.radar.category.EntityRadarCategoryManager" {
import {$EntityRadarDefaultCategories} from "xaero.hud.minimap.radar.category.EntityRadarDefaultCategories"
import {$EntityRadarCategoryConfigIO} from "xaero.hud.minimap.radar.category.EntityRadarCategoryConfigIO"
import {$IEditConfigScreenContext$$Type} from "xaero.lib.client.gui.config.context.IEditConfigScreenContext"
import {$Config, $Config$$Type} from "xaero.lib.common.config.Config"
import {$ObjectCategoryRuleResolver} from "xaero.hud.category.rule.resolver.ObjectCategoryRuleResolver"
import {$EntityRadarCategory, $EntityRadarCategory$$Type} from "xaero.hud.minimap.radar.category.EntityRadarCategory"
import {$Path} from "java.nio.file.Path"

export class $EntityRadarCategoryManager {
public "init"(): void
public "storeEditedCategory"(arg0: $EntityRadarCategory$$Type, arg1: boolean): void
public "storeEditedCategory"(arg0: boolean): void
public "getEditedCategoryConfig"(): $Config
public "fetchDefaultServerCategory"(arg0: integer): $EntityRadarCategory
public "fetchDefaultServerCategory"(): $EntityRadarCategory
public "fetchDefaultClientCategory"(): $EntityRadarCategory
public "fetchDefaultClientCategory"(arg0: integer): $EntityRadarCategory
public "getSyncedRootCategory"(): $EntityRadarCategory
public "updateFromConfigChange"(arg0: $Config$$Type): void
public "getSecondaryLegacyFilePath"(): $Path
public "forgetEditedCategory"(): void
public "editedCategoryNeedsSaving"(): boolean
public "resetRootCategorySettings"(arg0: $IEditConfigScreenContext$$Type): void
public "getMainIO"(): $EntityRadarCategoryConfigIO
public "loadEditedCategory"(arg0: $Config$$Type, arg1: boolean): $EntityRadarCategory
public "getEditedCategory"(): $EntityRadarCategory
public "getRootCategory"(): $EntityRadarCategory
public "getRuleResolver"(): $ObjectCategoryRuleResolver
public "getEffectiveSyncedRootCategory"(): $EntityRadarCategory
public "setEditedCategoryNeedsSaving"(arg0: boolean): void
public "getDefaultCategoryConfigurator"(): $EntityRadarDefaultCategories
get "editedCategoryConfig"(): $Config
get "syncedRootCategory"(): $EntityRadarCategory
get "secondaryLegacyFilePath"(): $Path
get "mainIO"(): $EntityRadarCategoryConfigIO
get "editedCategory"(): $EntityRadarCategory
get "rootCategory"(): $EntityRadarCategory
get "ruleResolver"(): $ObjectCategoryRuleResolver
get "effectiveSyncedRootCategory"(): $EntityRadarCategory
get "defaultCategoryConfigurator"(): $EntityRadarDefaultCategories
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRadarCategoryManager$$Type = ($EntityRadarCategoryManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityRadarCategoryManager$$Original = $EntityRadarCategoryManager;}
declare module "xaero.hud.minimap.radar.category.EntityRadarCategory" {
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$FilterObjectCategory} from "xaero.hud.category.FilterObjectCategory"
import {$EntityRadarCategoryData} from "xaero.hud.minimap.radar.category.serialization.data.EntityRadarCategoryData"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $EntityRadarCategory extends $FilterObjectCategory<($Entity), ($Player), ($EntityRadarCategoryData), ($EntityRadarCategory)> {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRadarCategory$$Type = ($EntityRadarCategory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityRadarCategory$$Original = $EntityRadarCategory;}
