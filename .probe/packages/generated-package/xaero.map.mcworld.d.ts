declare module "xaero.map.mcworld.WorldMapClientWorldData" {
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$ClientboundRulesPacket, $ClientboundRulesPacket$$Type} from "xaero.map.message.basic.ClientboundRulesPacket"
import {$BlockPos} from "net.minecraft.core.BlockPos"

export class $WorldMapClientWorldData {
 "usedSpawn": $BlockPos
 "serverLevelId": integer
 "usedServerLevelId": integer
 "latestSpawn": $BlockPos

constructor(arg0: $ClientLevel$$Type)

public "setSyncedRules"(arg0: $ClientboundRulesPacket$$Type): void
public "setServerModNetworkVersion"(arg0: integer): void
public "getSyncedRules"(): $ClientboundRulesPacket
public "getServerModNetworkVersion"(): integer
set "syncedRules"(value: $ClientboundRulesPacket$$Type)
set "serverModNetworkVersion"(value: integer)
get "syncedRules"(): $ClientboundRulesPacket
get "serverModNetworkVersion"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldMapClientWorldData$$Type = ($WorldMapClientWorldData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldMapClientWorldData$$Original = $WorldMapClientWorldData;}
declare module "xaero.map.mcworld.IWorldMapClientWorld" {
import {$WorldMapClientWorldData, $WorldMapClientWorldData$$Type} from "xaero.map.mcworld.WorldMapClientWorldData"

export interface $IWorldMapClientWorld$$Interface {
get "xaero_worldmapData"(): $WorldMapClientWorldData
set "xaero_worldmapData"(value: $WorldMapClientWorldData$$Type)
}

export class $IWorldMapClientWorld implements $IWorldMapClientWorld$$Interface {
 "getXaero_worldmapData"(): $WorldMapClientWorldData
 "setXaero_worldmapData"(arg0: $WorldMapClientWorldData$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWorldMapClientWorld$$Type = ($IWorldMapClientWorld);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IWorldMapClientWorld$$Original = $IWorldMapClientWorld;}
