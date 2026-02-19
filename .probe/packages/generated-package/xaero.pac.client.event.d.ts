declare module "xaero.pac.client.event.api.OPACClientAddonRegisterEvent" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$IClaimsManagerTrackerRegisterAPI, $IClaimsManagerTrackerRegisterAPI$$Type} from "xaero.pac.common.claims.tracker.api.IClaimsManagerTrackerRegisterAPI"
import {$IClaimsManagerClaimResultTrackerRegisterAPI, $IClaimsManagerClaimResultTrackerRegisterAPI$$Type} from "xaero.pac.client.claims.tracker.result.api.IClaimsManagerClaimResultTrackerRegisterAPI"

export class $OPACClientAddonRegisterEvent extends $Event {
constructor(arg0: $IClaimsManagerTrackerRegisterAPI$$Type, arg1: $IClaimsManagerClaimResultTrackerRegisterAPI$$Type)

public "getClaimsManagerTrackerAPI"(): $IClaimsManagerTrackerRegisterAPI
public "getClaimsManagerClaimResultTrackerAPI"(): $IClaimsManagerClaimResultTrackerRegisterAPI
get "claimsManagerTrackerAPI"(): $IClaimsManagerTrackerRegisterAPI
get "claimsManagerClaimResultTrackerAPI"(): $IClaimsManagerClaimResultTrackerRegisterAPI
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OPACClientAddonRegisterEvent$$Type = ($OPACClientAddonRegisterEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OPACClientAddonRegisterEvent$$Original = $OPACClientAddonRegisterEvent;}
