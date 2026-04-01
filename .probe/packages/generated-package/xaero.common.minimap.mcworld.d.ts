declare module "xaero.common.minimap.mcworld.MinimapClientWorldData" {
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$ClientboundRulesPacket, $ClientboundRulesPacket$$Type} from "xaero.hud.packet.basic.ClientboundRulesPacket"

export class $MinimapClientWorldData {
 "serverLevelId": integer
 "shadowR": float
 "shadowB": float
 "shadowG": float

constructor(arg0: $ClientLevel$$Type)

public "getSyncedRules"(): $ClientboundRulesPacket
public "setSyncedRules"(arg0: $ClientboundRulesPacket$$Type): void
public "setServerModNetworkVersion"(arg0: integer): void
public "getServerModNetworkVersion"(): integer
get "syncedRules"(): $ClientboundRulesPacket
set "syncedRules"(value: $ClientboundRulesPacket$$Type)
set "serverModNetworkVersion"(value: integer)
get "serverModNetworkVersion"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapClientWorldData$$Type = ($MinimapClientWorldData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinimapClientWorldData$$Original = $MinimapClientWorldData;}
declare module "xaero.common.minimap.mcworld.IXaeroMinimapClientWorld" {
import {$MinimapClientWorldData, $MinimapClientWorldData$$Type} from "xaero.common.minimap.mcworld.MinimapClientWorldData"

export interface $IXaeroMinimapClientWorld$$Interface {
get "xaero_minimapData"(): $MinimapClientWorldData
set "xaero_minimapData"(value: $MinimapClientWorldData$$Type)
}

export class $IXaeroMinimapClientWorld implements $IXaeroMinimapClientWorld$$Interface {
 "getXaero_minimapData"(): $MinimapClientWorldData
 "setXaero_minimapData"(arg0: $MinimapClientWorldData$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IXaeroMinimapClientWorld$$Type = ($IXaeroMinimapClientWorld);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IXaeroMinimapClientWorld$$Original = $IXaeroMinimapClientWorld;}
