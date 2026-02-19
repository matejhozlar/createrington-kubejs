declare module "xaero.pac.common.claims.api.IDimensionClaimsManagerAPI" {
import {$IRegionClaimsAPI} from "xaero.pac.common.claims.api.IRegionClaimsAPI"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"

export interface $IDimensionClaimsManagerAPI$$Interface {
get "count"(): integer
get "dimension"(): $ResourceLocation
}

export class $IDimensionClaimsManagerAPI implements $IDimensionClaimsManagerAPI$$Interface {
 "getCount"(): integer
 "getRegion"(arg0: integer, arg1: integer): $IRegionClaimsAPI
 "getDimension"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDimensionClaimsManagerAPI$$Type = ($IDimensionClaimsManagerAPI);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IDimensionClaimsManagerAPI$$Original = $IDimensionClaimsManagerAPI;}
declare module "xaero.pac.common.claims.player.api.IPlayerDimensionClaimsAPI" {
import {$IPlayerClaimPosListAPI, $IPlayerClaimPosListAPI$$Type} from "xaero.pac.common.claims.player.api.IPlayerClaimPosListAPI"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"

export interface $IPlayerDimensionClaimsAPI$$Interface {

(): $Stream$$Type<($IPlayerClaimPosListAPI$$Type)>
get "stream"(): $Stream<($IPlayerClaimPosListAPI)>
}

export class $IPlayerDimensionClaimsAPI implements $IPlayerDimensionClaimsAPI$$Interface {
 "getStream"(): $Stream<($IPlayerClaimPosListAPI)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerDimensionClaimsAPI$$Type = (() => $Stream$$Type<($IPlayerClaimPosListAPI$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPlayerDimensionClaimsAPI$$Original = $IPlayerDimensionClaimsAPI;}
declare module "xaero.pac.common.claims.api.IClaimsManagerAPI" {
import {$IDimensionClaimsManagerAPI} from "xaero.pac.common.claims.api.IDimensionClaimsManagerAPI"
import {$IPlayerChunkClaimAPI} from "xaero.pac.common.claims.player.api.IPlayerChunkClaimAPI"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IPlayerClaimInfoAPI} from "xaero.pac.common.claims.player.api.IPlayerClaimInfoAPI"
import {$UUID$$Type} from "java.util.UUID"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$IClaimsManagerTrackerAPI} from "xaero.pac.common.claims.tracker.api.IClaimsManagerTrackerAPI"

export interface $IClaimsManagerAPI$$Interface {
get "tracker"(): $IClaimsManagerTrackerAPI
}

export class $IClaimsManagerAPI implements $IClaimsManagerAPI$$Interface {
 "get"(arg0: $ResourceLocation$$Type, arg1: $BlockPos$$Type): $IPlayerChunkClaimAPI
 "get"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer): $IPlayerChunkClaimAPI
 "get"(arg0: $ResourceLocation$$Type, arg1: $ChunkPos$$Type): $IPlayerChunkClaimAPI
 "getDimension"(arg0: $ResourceLocation$$Type): $IDimensionClaimsManagerAPI
 "getTracker"(): $IClaimsManagerTrackerAPI
 "getPlayerInfo"(arg0: $UUID$$Type): $IPlayerClaimInfoAPI
 "hasPlayerInfo"(arg0: $UUID$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClaimsManagerAPI$$Type = ($IClaimsManagerAPI);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IClaimsManagerAPI$$Original = $IClaimsManagerAPI;}
declare module "xaero.pac.common.claims.tracker.api.IClaimsManagerTrackerAPI" {
import {$IClaimsManagerListenerAPI, $IClaimsManagerListenerAPI$$Type} from "xaero.pac.common.claims.tracker.api.IClaimsManagerListenerAPI"
import {$IClaimsManagerTrackerRegisterAPI$$Interface} from "xaero.pac.common.claims.tracker.api.IClaimsManagerTrackerRegisterAPI"

export interface $IClaimsManagerTrackerAPI$$Interface extends $IClaimsManagerTrackerRegisterAPI$$Interface {

(arg0: $IClaimsManagerListenerAPI): void
}

export class $IClaimsManagerTrackerAPI implements $IClaimsManagerTrackerAPI$$Interface {
 "register"(arg0: $IClaimsManagerListenerAPI$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClaimsManagerTrackerAPI$$Type = ((arg0: $IClaimsManagerListenerAPI) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IClaimsManagerTrackerAPI$$Original = $IClaimsManagerTrackerAPI;}
declare module "xaero.pac.common.claims.api.IRegionClaimsAPI" {
import {$IPlayerChunkClaimAPI} from "xaero.pac.common.claims.player.api.IPlayerChunkClaimAPI"

export interface $IRegionClaimsAPI$$Interface {
get "x"(): integer
get "z"(): integer
}

export class $IRegionClaimsAPI implements $IRegionClaimsAPI$$Interface {
 "getX"(): integer
 "getZ"(): integer
 "get"(arg0: integer, arg1: integer): $IPlayerChunkClaimAPI
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRegionClaimsAPI$$Type = ($IRegionClaimsAPI);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IRegionClaimsAPI$$Original = $IRegionClaimsAPI;}
declare module "xaero.pac.common.claims.player.api.IPlayerClaimInfoAPI" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$UUID} from "java.util.UUID"
import {$IPlayerDimensionClaimsAPI} from "xaero.pac.common.claims.player.api.IPlayerDimensionClaimsAPI"

export interface $IPlayerClaimInfoAPI$$Interface {
get "playerId"(): $UUID
get "claimCount"(): integer
get "forceloadCount"(): integer
get "claimsColor"(): integer
get "claimsName"(): StringJS
get "playerUsername"(): StringJS
}

export class $IPlayerClaimInfoAPI implements $IPlayerClaimInfoAPI$$Interface {
 "getDimension"(arg0: $ResourceLocation$$Type): $IPlayerDimensionClaimsAPI
 "getPlayerId"(): $UUID
 "getClaimCount"(): integer
 "getForceloadCount"(): integer
 "getClaimsColor"(): integer
 "getClaimsColor"(arg0: integer): integer
 "getClaimsName"(): StringJS
 "getClaimsName"(arg0: integer): StringJS
 "getPlayerUsername"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerClaimInfoAPI$$Type = ($IPlayerClaimInfoAPI);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPlayerClaimInfoAPI$$Original = $IPlayerClaimInfoAPI;}
declare module "xaero.pac.common.claims.tracker.api.IClaimsManagerTrackerRegisterAPI" {
import {$IClaimsManagerListenerAPI, $IClaimsManagerListenerAPI$$Type} from "xaero.pac.common.claims.tracker.api.IClaimsManagerListenerAPI"

export interface $IClaimsManagerTrackerRegisterAPI$$Interface {

(arg0: $IClaimsManagerListenerAPI): void
}

export class $IClaimsManagerTrackerRegisterAPI implements $IClaimsManagerTrackerRegisterAPI$$Interface {
 "register"(arg0: $IClaimsManagerListenerAPI$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClaimsManagerTrackerRegisterAPI$$Type = ((arg0: $IClaimsManagerListenerAPI) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IClaimsManagerTrackerRegisterAPI$$Original = $IClaimsManagerTrackerRegisterAPI;}
declare module "xaero.pac.common.claims.player.api.IPlayerChunkClaimAPI" {
import {$UUID} from "java.util.UUID"

export interface $IPlayerChunkClaimAPI$$Interface {
get "playerId"(): $UUID
get "subConfigIndex"(): integer
get "forceloadable"(): boolean
}

export class $IPlayerChunkClaimAPI implements $IPlayerChunkClaimAPI$$Interface {
 "getPlayerId"(): $UUID
 "getSubConfigIndex"(): integer
 "isForceloadable"(): boolean
 "isSameClaimType"(arg0: $IPlayerChunkClaimAPI$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerChunkClaimAPI$$Type = ($IPlayerChunkClaimAPI);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPlayerChunkClaimAPI$$Original = $IPlayerChunkClaimAPI;}
declare module "xaero.pac.common.claims.result.api.ClaimResult$Type" {
import {$Enum} from "java.lang.Enum"
import {$Component} from "net.minecraft.network.chat.Component"

export class $ClaimResult$Type extends $Enum<($ClaimResult$Type)> {
static readonly "CLAIM_LIMIT_REACHED": $ClaimResult$Type
static readonly "UNCLAIMABLE_DIMENSION": $ClaimResult$Type
static readonly "SUCCESSFUL_CLAIM": $ClaimResult$Type
static readonly "REPLACEMENT_IN_PROGRESS": $ClaimResult$Type
static readonly "ALREADY_CLAIMED": $ClaimResult$Type
readonly "message": $Component
static readonly "SUCCESSFUL_UNCLAIM": $ClaimResult$Type
static readonly "NOT_CLAIMED_BY_USER": $ClaimResult$Type
static readonly "CLAIMS_ARE_DISABLED": $ClaimResult$Type
static readonly "NOT_CLAIMED_BY_USER_FORCELOAD": $ClaimResult$Type
static readonly "SUCCESSFUL_UNFORCELOAD": $ClaimResult$Type
readonly "fail": boolean
static readonly "ALREADY_UNFORCELOADED": $ClaimResult$Type
static readonly "FORCELOAD_LIMIT_REACHED": $ClaimResult$Type
static readonly "TOO_FAR": $ClaimResult$Type
static readonly "NO_SERVER_PERMISSION": $ClaimResult$Type
readonly "success": boolean
static readonly "ALREADY_FORCELOADABLE": $ClaimResult$Type
static readonly "TOO_MANY_CHUNKS": $ClaimResult$Type
static readonly "SUCCESSFUL_FORCELOAD": $ClaimResult$Type

public static "values"(): ($ClaimResult$Type)[]
public static "valueOf"(arg0: StringJS): $ClaimResult$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClaimResult$Type$$Type = (("already_forceloadable") | ("already_unforceloaded") | ("claims_are_disabled") | ("too_many_chunks") | ("unclaimable_dimension") | ("not_claimed_by_user_forceload") | ("not_claimed_by_user") | ("already_claimed") | ("forceload_limit_reached") | ("claim_limit_reached") | ("too_far") | ("replacement_in_progress") | ("no_server_permission") | ("successful_unforceload") | ("successful_unclaim") | ("successful_forceload") | ("successful_claim"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClaimResult$Type$$Original = $ClaimResult$Type;}
declare module "xaero.pac.common.claims.result.api.AreaClaimResult" {
import {$Iterable} from "java.lang.Iterable"
import {$ClaimResult$Type, $ClaimResult$Type$$Type} from "xaero.pac.common.claims.result.api.ClaimResult$Type"
import {$Set$$Type} from "java.util.Set"
import {$Stream} from "java.util.stream.Stream"

export class $AreaClaimResult {
constructor(arg0: $Set$$Type<($ClaimResult$Type$$Type)>, arg1: integer, arg2: integer, arg3: integer, arg4: integer)

public "getSize"(): integer
public "getLeft"(): integer
public "getRight"(): integer
public "getBottom"(): integer
public "getTop"(): integer
public "getResultTypesIterable"(): $Iterable<($ClaimResult$Type)>
public "getResultTypesStream"(): $Stream<($ClaimResult$Type)>
get "size"(): integer
get "left"(): integer
get "right"(): integer
get "bottom"(): integer
get "top"(): integer
get "resultTypesIterable"(): $Iterable<($ClaimResult$Type)>
get "resultTypesStream"(): $Stream<($ClaimResult$Type)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AreaClaimResult$$Type = ($AreaClaimResult);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AreaClaimResult$$Original = $AreaClaimResult;}
declare module "xaero.pac.common.claims.result.api.ClaimResult" {
import {$ClaimResult$Type, $ClaimResult$Type$$Type} from "xaero.pac.common.claims.result.api.ClaimResult$Type"
import {$IPlayerChunkClaimAPI, $IPlayerChunkClaimAPI$$Type} from "xaero.pac.common.claims.player.api.IPlayerChunkClaimAPI"

export class $ClaimResult<C extends $IPlayerChunkClaimAPI> {
constructor(arg0: C, arg1: $ClaimResult$Type$$Type)

public "getResultType"(): $ClaimResult$Type
public "getClaimResult"(): C
get "resultType"(): $ClaimResult$Type
get "claimResult"(): C
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClaimResult$$Type<C> = ($ClaimResult<(C)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClaimResult$$Original<C> = $ClaimResult<(C)>;}
declare module "xaero.pac.common.claims.tracker.api.IClaimsManagerListenerAPI" {
import {$IPlayerChunkClaimAPI$$Type} from "xaero.pac.common.claims.player.api.IPlayerChunkClaimAPI"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"

export interface $IClaimsManagerListenerAPI$$Interface {
}

export class $IClaimsManagerListenerAPI implements $IClaimsManagerListenerAPI$$Interface {
 "onWholeRegionChange"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer): void
 "onChunkChange"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: $IPlayerChunkClaimAPI$$Type): void
 "onDimensionChange"(arg0: $ResourceLocation$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClaimsManagerListenerAPI$$Type = ($IClaimsManagerListenerAPI);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IClaimsManagerListenerAPI$$Original = $IClaimsManagerListenerAPI;}
