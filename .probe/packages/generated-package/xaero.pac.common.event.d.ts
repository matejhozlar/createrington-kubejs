declare module "xaero.pac.common.event.api.OPACServerAddonRegisterEvent" {
import {$IPlayerPartySystemRegisterAPI, $IPlayerPartySystemRegisterAPI$$Type} from "xaero.pac.common.server.parties.system.api.IPlayerPartySystemRegisterAPI"
import {$Event} from "net.neoforged.bus.api.Event"
import {$IClaimsManagerTrackerRegisterAPI, $IClaimsManagerTrackerRegisterAPI$$Type} from "xaero.pac.common.claims.tracker.api.IClaimsManagerTrackerRegisterAPI"
import {$IPlayerPermissionSystemRegisterAPI, $IPlayerPermissionSystemRegisterAPI$$Type} from "xaero.pac.common.server.player.permission.api.IPlayerPermissionSystemRegisterAPI"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"

export class $OPACServerAddonRegisterEvent extends $Event {
constructor(arg0: $MinecraftServer$$Type, arg1: $IPlayerPermissionSystemRegisterAPI$$Type, arg2: $IPlayerPartySystemRegisterAPI$$Type, arg3: $IClaimsManagerTrackerRegisterAPI$$Type)

public "getServer"(): $MinecraftServer
public "getPermissionSystemManager"(): $IPlayerPermissionSystemRegisterAPI
public "getClaimsManagerTrackerAPI"(): $IClaimsManagerTrackerRegisterAPI
public "getPartySystemManagerAPI"(): $IPlayerPartySystemRegisterAPI
get "server"(): $MinecraftServer
get "permissionSystemManager"(): $IPlayerPermissionSystemRegisterAPI
get "claimsManagerTrackerAPI"(): $IClaimsManagerTrackerRegisterAPI
get "partySystemManagerAPI"(): $IPlayerPartySystemRegisterAPI
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OPACServerAddonRegisterEvent$$Type = ($OPACServerAddonRegisterEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OPACServerAddonRegisterEvent$$Original = $OPACServerAddonRegisterEvent;}
