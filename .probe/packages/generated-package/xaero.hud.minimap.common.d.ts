declare module "xaero.hud.minimap.common.config.info.config.InfoDisplayManagerConfigData" {
import {$Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$InfoDisplayConfigData, $InfoDisplayConfigData$$Type} from "xaero.hud.minimap.common.config.info.config.InfoDisplayConfigData"
import {$Stream} from "java.util.stream.Stream"

export class $InfoDisplayManagerConfigData {
static readonly "EMPTY": $InfoDisplayManagerConfigData

constructor(arg0: $List$$Type<(StringJS)>, arg1: $Map$$Type<(StringJS), ($InfoDisplayConfigData$$Type)>)

public "get"(arg0: StringJS): $InfoDisplayConfigData
public "copyOrder"(): $List<(StringJS)>
public "getOrderStream"(): $Stream<(StringJS)>
public "getFromOrder"(arg0: integer): StringJS
get "orderStream"(): $Stream<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfoDisplayManagerConfigData$$Type = ($InfoDisplayManagerConfigData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InfoDisplayManagerConfigData$$Original = $InfoDisplayManagerConfigData;}
declare module "xaero.hud.minimap.common.radar.category.EntityRadarCategorySerializers" {
import {$EntityRadarCategoryData$Builder, $EntityRadarCategoryData$Builder$$Type} from "xaero.hud.minimap.radar.category.serialization.data.EntityRadarCategoryData$Builder"
import {$ObjectCategoryDataGsonSerializer, $ObjectCategoryDataGsonSerializer$$Type} from "xaero.hud.category.serialization.data.ObjectCategoryDataGsonSerializer"
import {$ObjectCategoryDataNbtSerializer, $ObjectCategoryDataNbtSerializer$$Type} from "xaero.hud.category.serialization.data.ObjectCategoryDataNbtSerializer"
import {$EntityRadarCategoryData, $EntityRadarCategoryData$$Type} from "xaero.hud.minimap.radar.category.serialization.data.EntityRadarCategoryData"

export class $EntityRadarCategorySerializers {
constructor(arg0: $ObjectCategoryDataGsonSerializer$$Type<($EntityRadarCategoryData$$Type)>, arg1: $ObjectCategoryDataNbtSerializer$$Type<($EntityRadarCategoryData$$Type), ($EntityRadarCategoryData$Builder$$Type)>)

public "getNbt"(): $ObjectCategoryDataNbtSerializer<($EntityRadarCategoryData), ($EntityRadarCategoryData$Builder)>
public "getGson"(): $ObjectCategoryDataGsonSerializer<($EntityRadarCategoryData)>
get "nbt"(): $ObjectCategoryDataNbtSerializer<($EntityRadarCategoryData), ($EntityRadarCategoryData$Builder)>
get "gson"(): $ObjectCategoryDataGsonSerializer<($EntityRadarCategoryData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRadarCategorySerializers$$Type = ($EntityRadarCategorySerializers);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityRadarCategorySerializers$$Original = $EntityRadarCategorySerializers;}
