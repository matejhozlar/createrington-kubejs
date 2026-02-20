declare module "xaero.common.minimap.mcworld.MinimapClientWorldData" {
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$ClientboundRulesPacket, $ClientboundRulesPacket$$Type} from "xaero.hud.packet.basic.ClientboundRulesPacket"

export class $MinimapClientWorldData {
 "serverLevelId": integer
 "shadowR": float
 "shadowB": float
 "shadowG": float

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
export type $MinimapClientWorldData$$Type = ($MinimapClientWorldData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinimapClientWorldData$$Original = $MinimapClientWorldData;}
declare module "xaero.common.minimap.mcworld.IXaeroMinimapClientWorld" {
import {$MinimapClientWorldData, $MinimapClientWorldData$$Type} from "xaero.common.minimap.mcworld.MinimapClientWorldData"

export interface $IXaeroMinimapClientWorld$$Interface {
set "xaero_minimapData"(value: $MinimapClientWorldData$$Type)
get "xaero_minimapData"(): $MinimapClientWorldData
}

export class $IXaeroMinimapClientWorld implements $IXaeroMinimapClientWorld$$Interface {
 "setXaero_minimapData"(arg0: $MinimapClientWorldData$$Type): void
 "getXaero_minimapData"(): $MinimapClientWorldData
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
