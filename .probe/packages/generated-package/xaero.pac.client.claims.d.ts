declare module "xaero.pac.client.claims.tracker.result.api.IClaimsManagerClaimResultListenerAPI" {
import {$AreaClaimResult, $AreaClaimResult$$Type} from "xaero.pac.common.claims.result.api.AreaClaimResult"

export interface $IClaimsManagerClaimResultListenerAPI$$Interface {

(arg0: $AreaClaimResult): void
}

export class $IClaimsManagerClaimResultListenerAPI implements $IClaimsManagerClaimResultListenerAPI$$Interface {
 "onClaimResult"(arg0: $AreaClaimResult$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClaimsManagerClaimResultListenerAPI$$Type = ((arg0: $AreaClaimResult) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IClaimsManagerClaimResultListenerAPI$$Original = $IClaimsManagerClaimResultListenerAPI;}
declare module "xaero.pac.client.claims.tracker.result.api.IClaimsManagerClaimResultTrackerRegisterAPI" {
import {$IClaimsManagerClaimResultListenerAPI, $IClaimsManagerClaimResultListenerAPI$$Type} from "xaero.pac.client.claims.tracker.result.api.IClaimsManagerClaimResultListenerAPI"

export interface $IClaimsManagerClaimResultTrackerRegisterAPI$$Interface {

(arg0: $IClaimsManagerClaimResultListenerAPI): void
}

export class $IClaimsManagerClaimResultTrackerRegisterAPI implements $IClaimsManagerClaimResultTrackerRegisterAPI$$Interface {
 "register"(arg0: $IClaimsManagerClaimResultListenerAPI$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClaimsManagerClaimResultTrackerRegisterAPI$$Type = ((arg0: $IClaimsManagerClaimResultListenerAPI) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IClaimsManagerClaimResultTrackerRegisterAPI$$Original = $IClaimsManagerClaimResultTrackerRegisterAPI;}
