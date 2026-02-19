declare module "xaero.pac.common.server.player.config.api.IPlayerConfigManagerAPI" {
import {$IPlayerConfigOptionSpecAPI} from "xaero.pac.common.server.player.config.api.IPlayerConfigOptionSpecAPI"
import {$IPlayerConfigAPI} from "xaero.pac.common.server.player.config.api.IPlayerConfigAPI"
import {$UUID$$Type} from "java.util.UUID"
import {$Stream} from "java.util.stream.Stream"

export interface $IPlayerConfigManagerAPI$$Interface {
get "wildernessConfig"(): $IPlayerConfigAPI
get "allOptionsStream"(): $Stream<($IPlayerConfigOptionSpecAPI<(never)>)>
get "expiredClaimConfig"(): $IPlayerConfigAPI
get "defaultConfig"(): $IPlayerConfigAPI
get "serverClaimConfig"(): $IPlayerConfigAPI
}

export class $IPlayerConfigManagerAPI implements $IPlayerConfigManagerAPI$$Interface {
 "getLoadedConfig"(arg0: $UUID$$Type): $IPlayerConfigAPI
 "getWildernessConfig"(): $IPlayerConfigAPI
 "getAllOptionsStream"(): $Stream<($IPlayerConfigOptionSpecAPI<(never)>)>
 "getExpiredClaimConfig"(): $IPlayerConfigAPI
 "getOptionForId"(arg0: StringJS): $IPlayerConfigOptionSpecAPI<(never)>
 "getDefaultConfig"(): $IPlayerConfigAPI
 "getServerClaimConfig"(): $IPlayerConfigAPI
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerConfigManagerAPI$$Type = ($IPlayerConfigManagerAPI);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPlayerConfigManagerAPI$$Original = $IPlayerConfigManagerAPI;}
declare module "xaero.pac.common.server.claims.api.IServerRegionClaimsAPI" {
import {$IRegionClaimsAPI$$Interface} from "xaero.pac.common.claims.api.IRegionClaimsAPI"
import {$IPlayerChunkClaimAPI} from "xaero.pac.common.claims.player.api.IPlayerChunkClaimAPI"

export interface $IServerRegionClaimsAPI$$Interface extends $IRegionClaimsAPI$$Interface {
get "x"(): integer
get "z"(): integer
}

export class $IServerRegionClaimsAPI implements $IServerRegionClaimsAPI$$Interface {
 "getX"(): integer
 "getZ"(): integer
 "get"(arg0: integer, arg1: integer): $IPlayerChunkClaimAPI
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerRegionClaimsAPI$$Type = ($IServerRegionClaimsAPI);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IServerRegionClaimsAPI$$Original = $IServerRegionClaimsAPI;}
declare module "xaero.pac.common.server.claims.api.IServerDimensionClaimsManagerAPI" {
import {$IRegionClaimsAPI} from "xaero.pac.common.claims.api.IRegionClaimsAPI"
import {$IDimensionClaimsManagerAPI$$Interface} from "xaero.pac.common.claims.api.IDimensionClaimsManagerAPI"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IServerRegionClaimsAPI} from "xaero.pac.common.server.claims.api.IServerRegionClaimsAPI"
import {$Stream} from "java.util.stream.Stream"

export interface $IServerDimensionClaimsManagerAPI$$Interface extends $IDimensionClaimsManagerAPI$$Interface {
get "count"(): integer
get "dimension"(): $ResourceLocation
get "regionStream"(): $Stream<($IServerRegionClaimsAPI)>
}

export class $IServerDimensionClaimsManagerAPI implements $IServerDimensionClaimsManagerAPI$$Interface {
 "getCount"(): integer
 "getRegion"(arg0: integer, arg1: integer): $IRegionClaimsAPI
 "getDimension"(): $ResourceLocation
 "getRegionStream"(): $Stream<($IServerRegionClaimsAPI)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerDimensionClaimsManagerAPI$$Type = ($IServerDimensionClaimsManagerAPI);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IServerDimensionClaimsManagerAPI$$Original = $IServerDimensionClaimsManagerAPI;}
declare module "xaero.pac.common.server.player.data.api.ServerPlayerDataAPI" {
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $ServerPlayerDataAPI {
constructor()

public static "from"(arg0: $ServerPlayer$$Type): $ServerPlayerDataAPI
public "isClaimsAdminMode"(): boolean
public "isClaimsServerMode"(): boolean
public "isClaimsNonallyMode"(): boolean
get "claimsAdminMode"(): boolean
get "claimsServerMode"(): boolean
get "claimsNonallyMode"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayerDataAPI$$Type = ($ServerPlayerDataAPI);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerPlayerDataAPI$$Original = $ServerPlayerDataAPI;}
declare module "xaero.pac.common.server.player.localization.api.IAdaptiveLocalizerAPI" {
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $IAdaptiveLocalizerAPI$$Interface {
}

export class $IAdaptiveLocalizerAPI implements $IAdaptiveLocalizerAPI$$Interface {
 "getFor"(arg0: $ServerPlayer$$Type, arg1: StringJS, ...arg2: (any)[]): $MutableComponent
 "getFor"(arg0: $ServerPlayer$$Type, arg1: $Component$$Type): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAdaptiveLocalizerAPI$$Type = ($IAdaptiveLocalizerAPI);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IAdaptiveLocalizerAPI$$Original = $IAdaptiveLocalizerAPI;}
declare module "xaero.pac.common.server.player.config.api.PlayerConfigType" {
import {$Enum} from "java.lang.Enum"
import {$Component} from "net.minecraft.network.chat.Component"

export class $PlayerConfigType extends $Enum<($PlayerConfigType)> {
static readonly "PLAYER": $PlayerConfigType
static readonly "SERVER": $PlayerConfigType
static readonly "EXPIRED": $PlayerConfigType
static readonly "DEFAULT_PLAYER": $PlayerConfigType
static readonly "WILDERNESS": $PlayerConfigType

public "getName"(): $Component
public static "values"(): ($PlayerConfigType)[]
public static "valueOf"(arg0: StringJS): $PlayerConfigType
get "name"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerConfigType$$Type = (("server") | ("expired") | ("wilderness") | ("default_player") | ("player"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerConfigType$$Original = $PlayerConfigType;}
declare module "xaero.pac.common.server.parties.system.api.IPlayerPartySystemAPI" {
import {$UUID$$Type} from "java.util.UUID"

export interface $IPlayerPartySystemAPI$$Interface<P> {
}

export class $IPlayerPartySystemAPI<P> implements $IPlayerPartySystemAPI$$Interface {
 "isPermittedToPartyClaim"(arg0: $UUID$$Type): boolean
 "isPlayerAllying"(arg0: $UUID$$Type, arg1: $UUID$$Type): boolean
 "getPartyByOwner"(arg0: $UUID$$Type): P
 "getPartyByMember"(arg0: $UUID$$Type): P
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerPartySystemAPI$$Type<P> = ($IPlayerPartySystemAPI<(P)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPlayerPartySystemAPI$$Original<P> = $IPlayerPartySystemAPI<(P)>;}
declare module "xaero.pac.common.server.api.OpenPACServerAPI" {
import {$IChunkProtectionAPI} from "xaero.pac.common.server.claims.protection.api.IChunkProtectionAPI"
import {$IServerClaimsManagerAPI} from "xaero.pac.common.server.claims.api.IServerClaimsManagerAPI"
import {$IPlayerConfigManagerAPI} from "xaero.pac.common.server.player.config.api.IPlayerConfigManagerAPI"
import {$IServerDataAPI$$Type} from "xaero.pac.common.server.IServerDataAPI"
import {$MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$IPartyManagerAPI} from "xaero.pac.common.server.parties.party.api.IPartyManagerAPI"
import {$IAdaptiveLocalizerAPI} from "xaero.pac.common.server.player.localization.api.IAdaptiveLocalizerAPI"

export class $OpenPACServerAPI {
constructor(arg0: $IServerDataAPI$$Type)

public "getChunkProtection"(): $IChunkProtectionAPI
public static "get"(arg0: $MinecraftServer$$Type): $OpenPACServerAPI
public "getPlayerConfigs"(): $IPlayerConfigManagerAPI
public "getPartyManager"(): $IPartyManagerAPI
public "getServerClaimsManager"(): $IServerClaimsManagerAPI
public "getAdaptiveTextLocalizer"(): $IAdaptiveLocalizerAPI
get "chunkProtection"(): $IChunkProtectionAPI
get "playerConfigs"(): $IPlayerConfigManagerAPI
get "partyManager"(): $IPartyManagerAPI
get "serverClaimsManager"(): $IServerClaimsManagerAPI
get "adaptiveTextLocalizer"(): $IAdaptiveLocalizerAPI
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OpenPACServerAPI$$Type = ($OpenPACServerAPI);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OpenPACServerAPI$$Original = $OpenPACServerAPI;}
declare module "xaero.pac.common.server.core.accessor.IServerCommonPacketListenerImpl" {
import {$Connection, $Connection$$Type} from "net.minecraft.network.Connection"

export interface $IServerCommonPacketListenerImpl$$Interface {

(): $Connection$$Type
get "xaero_OPAC_connection"(): $Connection
}

export class $IServerCommonPacketListenerImpl implements $IServerCommonPacketListenerImpl$$Interface {
 "getXaero_OPAC_connection"(): $Connection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerCommonPacketListenerImpl$$Type = (() => $Connection$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IServerCommonPacketListenerImpl$$Original = $IServerCommonPacketListenerImpl;}
declare module "xaero.pac.common.server.player.permission.api.IPlayerPermissionSystemRegisterAPI" {
import {$IPlayerPermissionSystemAPI, $IPlayerPermissionSystemAPI$$Type} from "xaero.pac.common.server.player.permission.api.IPlayerPermissionSystemAPI"

export interface $IPlayerPermissionSystemRegisterAPI$$Interface {

(arg0: StringJS, arg1: $IPlayerPermissionSystemAPI): void
}

export class $IPlayerPermissionSystemRegisterAPI implements $IPlayerPermissionSystemRegisterAPI$$Interface {
 "register"(arg0: StringJS, arg1: $IPlayerPermissionSystemAPI$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerPermissionSystemRegisterAPI$$Type = ((arg0: StringJS, arg1: $IPlayerPermissionSystemAPI) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPlayerPermissionSystemRegisterAPI$$Original = $IPlayerPermissionSystemRegisterAPI;}
declare module "xaero.pac.common.server.claims.protection.api.IChunkProtectionAPI" {
import {$IPlayerConfigOptionSpecAPI$$Type} from "xaero.pac.common.server.player.config.api.IPlayerConfigOptionSpecAPI"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$UUID$$Type} from "java.util.UUID"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$IPlayerChunkClaimAPI$$Type} from "xaero.pac.common.claims.player.api.IPlayerChunkClaimAPI"
import {$IPlayerConfigAPI, $IPlayerConfigAPI$$Type} from "xaero.pac.common.server.player.config.api.IPlayerConfigAPI"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export interface $IChunkProtectionAPI$$Interface {
}

export class $IChunkProtectionAPI implements $IChunkProtectionAPI$$Interface {
 "onEntityPlaceBlock"(arg0: $Entity$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type): boolean
/**
 * 
 * @deprecated
 */
 "onBlockInteraction"(arg0: $Entity$$Type, arg1: $InteractionHand$$Type, arg2: $ItemStack$$Type, arg3: $ServerLevel$$Type, arg4: $BlockPos$$Type, arg5: $Direction$$Type, arg6: boolean, arg7: boolean): boolean
 "onBlockInteraction"(arg0: $Entity$$Type, arg1: $InteractionHand$$Type, arg2: $ItemStack$$Type, arg3: $ServerLevel$$Type, arg4: $BlockPos$$Type, arg5: $Direction$$Type, arg6: boolean, arg7: boolean, arg8: boolean): boolean
 "onProjectileHitSpawnedEntity"(arg0: $Entity$$Type, arg1: $Entity$$Type): boolean
 "onItemPickup"(arg0: $Entity$$Type, arg1: $ItemEntity$$Type): boolean
/**
 * 
 * @deprecated
 */
 "onEntityInteraction"(arg0: $Entity$$Type, arg1: $Entity$$Type, arg2: $Entity$$Type, arg3: $ItemStack$$Type, arg4: $InteractionHand$$Type, arg5: boolean, arg6: boolean): boolean
 "onEntityInteraction"(arg0: $Entity$$Type, arg1: $Entity$$Type, arg2: $Entity$$Type, arg3: $ItemStack$$Type, arg4: $InteractionHand$$Type, arg5: boolean, arg6: boolean, arg7: boolean): boolean
 "onPosAffectedByAnotherPos"(arg0: $ServerLevel$$Type, arg1: $ChunkPos$$Type, arg2: $ServerLevel$$Type, arg3: $ChunkPos$$Type, arg4: boolean, arg5: boolean, arg6: boolean): boolean
 "checkProtectionLeveledOption"(arg0: $IPlayerConfigOptionSpecAPI$$Type<(integer)>, arg1: $IPlayerConfigAPI$$Type, arg2: $UUID$$Type): boolean
 "checkProtectionLeveledOption"(arg0: $IPlayerConfigOptionSpecAPI$$Type<(integer)>, arg1: $IPlayerConfigAPI$$Type, arg2: $Entity$$Type): boolean
 "checkExceptionLeveledOption"(arg0: $IPlayerConfigOptionSpecAPI$$Type<(integer)>, arg1: $IPlayerConfigAPI$$Type, arg2: $Entity$$Type): boolean
 "checkExceptionLeveledOption"(arg0: $IPlayerConfigOptionSpecAPI$$Type<(integer)>, arg1: $IPlayerConfigAPI$$Type, arg2: $UUID$$Type): boolean
 "hasChunkAccess"(arg0: $IPlayerConfigAPI$$Type, arg1: $Entity$$Type): boolean
 "hasChunkAccess"(arg0: $IPlayerConfigAPI$$Type, arg1: $UUID$$Type): boolean
 "getClaimConfig"(arg0: $IPlayerChunkClaimAPI$$Type): $IPlayerConfigAPI
 "giveFullPass"(arg0: $UUID$$Type): void
 "removeFullPass"(arg0: $UUID$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChunkProtectionAPI$$Type = ($IChunkProtectionAPI);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IChunkProtectionAPI$$Original = $IChunkProtectionAPI;}
declare module "xaero.pac.common.server.player.config.api.IPlayerConfigAPI$SetResult" {
import {$Enum} from "java.lang.Enum"

export class $IPlayerConfigAPI$SetResult extends $Enum<($IPlayerConfigAPI$SetResult)> {
static readonly "SUCCESS": $IPlayerConfigAPI$SetResult
static readonly "ILLEGAL_OPTION": $IPlayerConfigAPI$SetResult
static readonly "INVALID": $IPlayerConfigAPI$SetResult
static readonly "DEFAULTED": $IPlayerConfigAPI$SetResult

public static "values"(): ($IPlayerConfigAPI$SetResult)[]
public static "valueOf"(arg0: StringJS): $IPlayerConfigAPI$SetResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerConfigAPI$SetResult$$Type = (("invalid") | ("illegal_option") | ("defaulted") | ("success"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPlayerConfigAPI$SetResult$$Original = $IPlayerConfigAPI$SetResult;}
declare module "xaero.pac.common.server.IServerDataAPI" {
import {$OpenPACServerAPI} from "xaero.pac.common.server.api.OpenPACServerAPI"
import {$IChunkProtectionAPI} from "xaero.pac.common.server.claims.protection.api.IChunkProtectionAPI"
import {$IServerClaimsManagerAPI} from "xaero.pac.common.server.claims.api.IServerClaimsManagerAPI"
import {$IPlayerConfigManagerAPI} from "xaero.pac.common.server.player.config.api.IPlayerConfigManagerAPI"
import {$IPartyManagerAPI} from "xaero.pac.common.server.parties.party.api.IPartyManagerAPI"
import {$IAdaptiveLocalizerAPI} from "xaero.pac.common.server.player.localization.api.IAdaptiveLocalizerAPI"

export interface $IServerDataAPI$$Interface {
get "chunkProtection"(): $IChunkProtectionAPI
get "adaptiveLocalizer"(): $IAdaptiveLocalizerAPI
get "playerConfigs"(): $IPlayerConfigManagerAPI
get "partyManager"(): $IPartyManagerAPI
get "API"(): $OpenPACServerAPI
get "serverClaimsManager"(): $IServerClaimsManagerAPI
}

export class $IServerDataAPI implements $IServerDataAPI$$Interface {
 "getChunkProtection"(): $IChunkProtectionAPI
 "getAdaptiveLocalizer"(): $IAdaptiveLocalizerAPI
 "getPlayerConfigs"(): $IPlayerConfigManagerAPI
 "getPartyManager"(): $IPartyManagerAPI
 "getAPI"(): $OpenPACServerAPI
 "getServerClaimsManager"(): $IServerClaimsManagerAPI
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerDataAPI$$Type = ($IServerDataAPI);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IServerDataAPI$$Original = $IServerDataAPI;}
declare module "xaero.pac.common.server.claims.api.IServerClaimsManagerAPI" {
import {$IPlayerClaimInfoAPI} from "xaero.pac.common.claims.player.api.IPlayerClaimInfoAPI"
import {$UUID$$Type} from "java.util.UUID"
import {$IServerDimensionClaimsManagerAPI} from "xaero.pac.common.server.claims.api.IServerDimensionClaimsManagerAPI"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$IClaimsManagerTrackerAPI} from "xaero.pac.common.claims.tracker.api.IClaimsManagerTrackerAPI"
import {$ClaimResult} from "xaero.pac.common.claims.result.api.ClaimResult"
import {$IServerPlayerClaimInfoAPI} from "xaero.pac.common.server.claims.player.api.IServerPlayerClaimInfoAPI"
import {$IDimensionClaimsManagerAPI} from "xaero.pac.common.claims.api.IDimensionClaimsManagerAPI"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IPlayerChunkClaimAPI} from "xaero.pac.common.claims.player.api.IPlayerChunkClaimAPI"
import {$IClaimsManagerAPI$$Interface} from "xaero.pac.common.claims.api.IClaimsManagerAPI"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Stream} from "java.util.stream.Stream"
import {$AreaClaimResult} from "xaero.pac.common.claims.result.api.AreaClaimResult"

export interface $IServerClaimsManagerAPI$$Interface extends $IClaimsManagerAPI$$Interface {
get "tracker"(): $IClaimsManagerTrackerAPI
get "playerInfoStream"(): $Stream<($IServerPlayerClaimInfoAPI)>
get "dimensionStream"(): $Stream<($IServerDimensionClaimsManagerAPI)>
}

export class $IServerClaimsManagerAPI implements $IServerClaimsManagerAPI$$Interface {
 "get"(arg0: $ResourceLocation$$Type, arg1: $ChunkPos$$Type): $IPlayerChunkClaimAPI
 "get"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer): $IPlayerChunkClaimAPI
 "get"(arg0: $ResourceLocation$$Type, arg1: $BlockPos$$Type): $IPlayerChunkClaimAPI
 "tryToClaimArea"(arg0: $ResourceLocation$$Type, arg1: $UUID$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: boolean): $AreaClaimResult
 "tryToUnclaimArea"(arg0: $ResourceLocation$$Type, arg1: $UUID$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: boolean): $AreaClaimResult
 "tryToForceloadArea"(arg0: $ResourceLocation$$Type, arg1: $UUID$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: boolean, arg9: boolean): $AreaClaimResult
 "isClaimable"(arg0: $ResourceLocation$$Type): boolean
 "claim"(arg0: $ResourceLocation$$Type, arg1: $UUID$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: boolean): $IPlayerChunkClaimAPI
 "getDimension"(arg0: $ResourceLocation$$Type): $IDimensionClaimsManagerAPI
 "getPlayerBaseClaimLimit"(arg0: $ServerPlayer$$Type): integer
 "getPlayerBaseClaimLimit"(arg0: $UUID$$Type): integer
 "getTracker"(): $IClaimsManagerTrackerAPI
 "getPlayerInfo"(arg0: $UUID$$Type): $IPlayerClaimInfoAPI
 "getPlayerInfoStream"(): $Stream<($IServerPlayerClaimInfoAPI)>
 "unclaim"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer): void
 "tryToUnclaim"(arg0: $ResourceLocation$$Type, arg1: $UUID$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: boolean): $ClaimResult<($IPlayerChunkClaimAPI)>
 "tryToForceload"(arg0: $ResourceLocation$$Type, arg1: $UUID$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: boolean, arg7: boolean): $ClaimResult<($IPlayerChunkClaimAPI)>
 "tryToClaim"(arg0: $ResourceLocation$$Type, arg1: $UUID$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: boolean): $ClaimResult<($IPlayerChunkClaimAPI)>
 "hasPlayerInfo"(arg0: $UUID$$Type): boolean
 "getDimensionStream"(): $Stream<($IServerDimensionClaimsManagerAPI)>
 "getPlayerBaseForceloadLimit"(arg0: $UUID$$Type): integer
 "getPlayerBaseForceloadLimit"(arg0: $ServerPlayer$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerClaimsManagerAPI$$Type = ($IServerClaimsManagerAPI);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IServerClaimsManagerAPI$$Original = $IServerClaimsManagerAPI;}
declare module "xaero.pac.common.server.parties.party.api.IServerPartyAPI" {
import {$PartyMemberRank$$Type} from "xaero.pac.common.parties.party.member.PartyMemberRank"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$IPartyAllyAPI} from "xaero.pac.common.parties.party.ally.api.IPartyAllyAPI"
import {$ServerPlayer} from "net.minecraft.server.level.ServerPlayer"
import {$IPartyPlayerInfoAPI} from "xaero.pac.common.parties.party.api.IPartyPlayerInfoAPI"
import {$Stream} from "java.util.stream.Stream"
import {$IPartyMemberAPI, $IPartyMemberAPI$$Type} from "xaero.pac.common.parties.party.member.api.IPartyMemberAPI"
import {$IPartyAPI$$Interface} from "xaero.pac.common.parties.party.api.IPartyAPI"

export interface $IServerPartyAPI$$Interface extends $IPartyAPI$$Interface {
get "id"(): $UUID
get "owner"(): $IPartyMemberAPI
get "defaultName"(): StringJS
get "onlineMemberStream"(): $Stream<($ServerPlayer)>
get "memberInfoStream"(): $Stream<($IPartyMemberAPI)>
get "invitedPlayersStream"(): $Stream<($IPartyPlayerInfoAPI)>
get "allyPartiesStream"(): $Stream<($IPartyAllyAPI)>
get "nonStaffInfoStream"(): $Stream<($IPartyMemberAPI)>
get "memberCount"(): integer
get "allyCount"(): integer
get "staffInfoStream"(): $Stream<($IPartyMemberAPI)>
get "inviteCount"(): integer
}

export class $IServerPartyAPI implements $IServerPartyAPI$$Interface {
 "getId"(): $UUID
 "getOwner"(): $IPartyMemberAPI
 "removeMember"(arg0: $UUID$$Type): $IPartyMemberAPI
 "getDefaultName"(): StringJS
 "isInvited"(arg0: $UUID$$Type): boolean
 "getOnlineMemberStream"(): $Stream<($ServerPlayer)>
 "addMember"(arg0: $UUID$$Type, arg1: $PartyMemberRank$$Type, arg2: StringJS): $IPartyMemberAPI
 "setRank"(arg0: $IPartyMemberAPI$$Type, arg1: $PartyMemberRank$$Type): boolean
 "isAlly"(arg0: $UUID$$Type): boolean
 "getMemberInfoStream"(): $Stream<($IPartyMemberAPI)>
 "getInvitedPlayersStream"(): $Stream<($IPartyPlayerInfoAPI)>
 "getAllyPartiesStream"(): $Stream<($IPartyAllyAPI)>
 "getNonStaffInfoStream"(): $Stream<($IPartyMemberAPI)>
 "invitePlayer"(arg0: $UUID$$Type, arg1: StringJS): $IPartyPlayerInfoAPI
 "getMemberInfo"(arg0: $UUID$$Type): $IPartyMemberAPI
 "getMemberInfo"(arg0: StringJS): $IPartyMemberAPI
 "uninvitePlayer"(arg0: $UUID$$Type): $IPartyPlayerInfoAPI
 "addAllyParty"(arg0: $UUID$$Type): void
 "removeAllyParty"(arg0: $UUID$$Type): void
 "getMemberCount"(): integer
 "getAllyCount"(): integer
 "getStaffInfoStream"(): $Stream<($IPartyMemberAPI)>
 "getInviteCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerPartyAPI$$Type = ($IServerPartyAPI);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IServerPartyAPI$$Original = $IServerPartyAPI;}
declare module "xaero.pac.common.server.claims.player.api.IServerPlayerClaimInfoAPI" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IPlayerClaimInfoAPI$$Interface} from "xaero.pac.common.claims.player.api.IPlayerClaimInfoAPI"
import {$UUID} from "java.util.UUID"
import {$Stream} from "java.util.stream.Stream"
import {$IPlayerDimensionClaimsAPI} from "xaero.pac.common.claims.player.api.IPlayerDimensionClaimsAPI"
import {$Map$Entry} from "java.util.Map$Entry"

export interface $IServerPlayerClaimInfoAPI$$Interface extends $IPlayerClaimInfoAPI$$Interface {
get "stream"(): $Stream<($Map$Entry<($ResourceLocation), ($IPlayerDimensionClaimsAPI)>)>
get "playerId"(): $UUID
get "claimCount"(): integer
get "forceloadCount"(): integer
get "claimsColor"(): integer
get "claimsName"(): StringJS
get "playerUsername"(): StringJS
}

export class $IServerPlayerClaimInfoAPI implements $IServerPlayerClaimInfoAPI$$Interface {
 "getDimension"(arg0: $ResourceLocation$$Type): $IPlayerDimensionClaimsAPI
 "getStream"(): $Stream<($Map$Entry<($ResourceLocation), ($IPlayerDimensionClaimsAPI)>)>
 "getPlayerId"(): $UUID
 "getClaimCount"(): integer
 "getForceloadCount"(): integer
 "getClaimsColor"(arg0: integer): integer
 "getClaimsColor"(arg0: StringJS): integer
 "getClaimsColor"(): integer
 "getClaimsName"(arg0: StringJS): StringJS
 "getClaimsName"(arg0: integer): StringJS
 "getClaimsName"(): StringJS
 "getPlayerUsername"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerPlayerClaimInfoAPI$$Type = ($IServerPlayerClaimInfoAPI);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IServerPlayerClaimInfoAPI$$Original = $IServerPlayerClaimInfoAPI;}
declare module "xaero.pac.common.server.player.config.api.IPlayerConfigAPI" {
import {$IPlayerConfigOptionSpecAPI$$Type} from "xaero.pac.common.server.player.config.api.IPlayerConfigOptionSpecAPI"
import {$UUID} from "java.util.UUID"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$List} from "java.util.List"
import {$Stream} from "java.util.stream.Stream"
import {$PlayerConfigType} from "xaero.pac.common.server.player.config.api.PlayerConfigType"
import {$IPlayerConfigAPI$SetResult} from "xaero.pac.common.server.player.config.api.IPlayerConfigAPI$SetResult"

export interface $IPlayerConfigAPI$$Interface {
get "subCount"(): integer
get "subConfigLimit"(): integer
get "type"(): $PlayerConfigType
get "playerId"(): $UUID
get "usedSubConfig"(): $IPlayerConfigAPI
get "subIndex"(): integer
get "subId"(): StringJS
get "subConfigAPIStream"(): $Stream<($IPlayerConfigAPI)>
get "usedServerSubConfig"(): $IPlayerConfigAPI
get "beingDeleted"(): boolean
get "subConfigIds"(): $List<(StringJS)>
}

export class $IPlayerConfigAPI implements $IPlayerConfigAPI$$Interface {
 "getSubCount"(): integer
 "getSubConfigLimit"(): integer
 "getSubConfig"(arg0: StringJS): $IPlayerConfigAPI
 "getType"(): $PlayerConfigType
 "getRaw"<T extends $Comparable<(object)>>(arg0: $IPlayerConfigOptionSpecAPI$$Type<(T)>): T
 "createSubConfig"(arg0: StringJS): $IPlayerConfigAPI
 "tryToSet"<T extends $Comparable<(object)>>(arg0: $IPlayerConfigOptionSpecAPI$$Type<(T)>, arg1: T): $IPlayerConfigAPI$SetResult
 "getPlayerId"(): $UUID
 "getEffective"<T extends $Comparable<(object)>>(arg0: $IPlayerConfigOptionSpecAPI$$Type<(T)>): T
 "getUsedSubConfig"(): $IPlayerConfigAPI
 "getDefaultRawValue"<T extends $Comparable<(object)>>(arg0: $IPlayerConfigOptionSpecAPI$$Type<(T)>): T
 "getSubIndex"(): integer
 "isOptionAllowed"(arg0: $IPlayerConfigOptionSpecAPI$$Type<(never)>): boolean
 "getSubId"(): StringJS
 "getEffectiveSubConfig"(arg0: integer): $IPlayerConfigAPI
 "getEffectiveSubConfig"(arg0: StringJS): $IPlayerConfigAPI
 "getSubConfigAPIStream"(): $Stream<($IPlayerConfigAPI)>
 "subConfigExists"(arg0: integer): boolean
 "subConfigExists"(arg0: StringJS): boolean
 "getUsedServerSubConfig"(): $IPlayerConfigAPI
 "getFromEffectiveConfig"<T extends $Comparable<(object)>>(arg0: $IPlayerConfigOptionSpecAPI$$Type<(T)>): T
 "tryToReset"<T extends $Comparable<(object)>>(arg0: $IPlayerConfigOptionSpecAPI$$Type<(T)>): $IPlayerConfigAPI$SetResult
 "isBeingDeleted"(): boolean
 "getSubConfigIds"(): $List<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerConfigAPI$$Type = ($IPlayerConfigAPI);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPlayerConfigAPI$$Original = $IPlayerConfigAPI;}
declare module "xaero.pac.common.server.player.permission.api.IPlayerPermissionSystemAPI" {
import {$Optional} from "java.util.Optional"
import {$OptionalInt} from "java.util.OptionalInt"
import {$IPermissionNodeAPI$$Type} from "xaero.pac.common.server.player.permission.api.IPermissionNodeAPI"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export interface $IPlayerPermissionSystemAPI$$Interface {
}

export class $IPlayerPermissionSystemAPI implements $IPlayerPermissionSystemAPI$$Interface {
 "getPermission"(arg0: $ServerPlayer$$Type, arg1: $IPermissionNodeAPI$$Type<(boolean)>): boolean
 "getIntPermission"(arg0: $ServerPlayer$$Type, arg1: $IPermissionNodeAPI$$Type<(integer)>): $OptionalInt
 "getPermissionTyped"<T>(arg0: $ServerPlayer$$Type, arg1: $IPermissionNodeAPI$$Type<(T)>): $Optional<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerPermissionSystemAPI$$Type = ($IPlayerPermissionSystemAPI);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPlayerPermissionSystemAPI$$Original = $IPlayerPermissionSystemAPI;}
declare module "xaero.pac.common.server.player.permission.api.IPermissionNodeAPI" {
import {$Class} from "java.lang.Class"
import {$Component} from "net.minecraft.network.chat.Component"

export interface $IPermissionNodeAPI$$Interface<T> {
get "name"(): $Component
get "type"(): $Class<(T)>
get "comment"(): $Component
get "nodeString"(): StringJS
get "defaultNodeString"(): StringJS
}

export class $IPermissionNodeAPI<T> implements $IPermissionNodeAPI$$Interface {
 "getName"(): $Component
 "getType"(): $Class<(T)>
 "getComment"(): $Component
 "getNodeString"(): StringJS
 "getDefaultNodeString"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPermissionNodeAPI$$Type<T> = ($IPermissionNodeAPI<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPermissionNodeAPI$$Original<T> = $IPermissionNodeAPI<(T)>;}
declare module "xaero.pac.common.server.player.config.api.IPlayerConfigOptionSpecAPI" {
import {$BiPredicate} from "java.util.function.BiPredicate"
import {$IPlayerConfigAPI} from "xaero.pac.common.server.player.config.api.IPlayerConfigAPI"
import {$Comparable} from "java.lang.Comparable"
import {$Predicate} from "java.util.function.Predicate"
import {$List} from "java.util.List"
import {$Function} from "java.util.function.Function"
import {$IPlayerConfigClientStorageAPI} from "xaero.pac.client.player.config.api.IPlayerConfigClientStorageAPI"
import {$Class} from "java.lang.Class"
import {$Component} from "net.minecraft.network.chat.Component"
import {$PlayerConfigType} from "xaero.pac.common.server.player.config.api.PlayerConfigType"

export interface $IPlayerConfigOptionSpecAPI$$Interface<T extends $Comparable<(object)>> {
get "id"(): StringJS
get "type"(): $Class<(T)>
get "defaultValue"(): T
get "path"(): $List<(StringJS)>
get "comment"(): StringJS
get "translationArgs"(): (StringJS)[]
get "tooltipPrefix"(): StringJS
get "shortenedId"(): StringJS
get "translation"(): StringJS
get "commentTranslationArgs"(): (StringJS)[]
get "commentTranslation"(): StringJS
get "serverSideValidator"(): $BiPredicate<($IPlayerConfigAPI), (T)>
get "configTypeFilter"(): $Predicate<($PlayerConfigType)>
get "commandInputParser"(): $Function<(StringJS), (T)>
get "commandOutputWriter"(): $Function<(T), ($Component)>
get "clientSideValidator"(): $BiPredicate<($IPlayerConfigClientStorageAPI), (T)>
}

export class $IPlayerConfigOptionSpecAPI<T extends $Comparable<(object)>> implements $IPlayerConfigOptionSpecAPI$$Interface {
 "getId"(): StringJS
 "getType"(): $Class<(T)>
 "getDefaultValue"(): T
 "getPath"(): $List<(StringJS)>
 "getComment"(): StringJS
 "getTranslationArgs"(): (StringJS)[]
 "getTooltipPrefix"(): StringJS
 "getShortenedId"(): StringJS
 "getTranslation"(): StringJS
 "getCommentTranslationArgs"(): (StringJS)[]
 "getCommentTranslation"(): StringJS
 "getServerSideValidator"(): $BiPredicate<($IPlayerConfigAPI), (T)>
 "getConfigTypeFilter"(): $Predicate<($PlayerConfigType)>
 "getCommandInputParser"(): $Function<(StringJS), (T)>
 "getCommandOutputWriter"(): $Function<(T), ($Component)>
 "getClientSideValidator"(): $BiPredicate<($IPlayerConfigClientStorageAPI), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerConfigOptionSpecAPI$$Type<T> = ($IPlayerConfigOptionSpecAPI<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPlayerConfigOptionSpecAPI$$Original<T> = $IPlayerConfigOptionSpecAPI<(T)>;}
declare module "xaero.pac.common.server.parties.system.api.IPlayerPartySystemRegisterAPI" {
import {$IPlayerPartySystemAPI, $IPlayerPartySystemAPI$$Type} from "xaero.pac.common.server.parties.system.api.IPlayerPartySystemAPI"

export interface $IPlayerPartySystemRegisterAPI$$Interface {

(arg0: StringJS, arg1: $IPlayerPartySystemAPI<(never)>): void
}

export class $IPlayerPartySystemRegisterAPI implements $IPlayerPartySystemRegisterAPI$$Interface {
 "register"(arg0: StringJS, arg1: $IPlayerPartySystemAPI$$Type<(never)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerPartySystemRegisterAPI$$Type = ((arg0: StringJS, arg1: $IPlayerPartySystemAPI<(never)>) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPlayerPartySystemRegisterAPI$$Original = $IPlayerPartySystemRegisterAPI;}
declare module "xaero.pac.common.server.parties.party.api.IPartyManagerAPI" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UUID$$Type} from "java.util.UUID"
import {$IServerPartyAPI, $IServerPartyAPI$$Type} from "xaero.pac.common.server.parties.party.api.IServerPartyAPI"
import {$Stream} from "java.util.stream.Stream"

export interface $IPartyManagerAPI$$Interface {
get "allStream"(): $Stream<($IServerPartyAPI)>
}

export class $IPartyManagerAPI implements $IPartyManagerAPI$$Interface {
 "partyExistsForOwner"(arg0: $UUID$$Type): boolean
 "createPartyForOwner"(arg0: $Player$$Type): $IServerPartyAPI
 "removePartyByOwner"(arg0: $UUID$$Type): void
 "removeParty"(arg0: $IServerPartyAPI$$Type): void
 "removePartyById"(arg0: $UUID$$Type): void
 "getPartiesThatAlly"(arg0: $UUID$$Type): $Stream<($IServerPartyAPI)>
 "getPartyByOwner"(arg0: $UUID$$Type): $IServerPartyAPI
 "getPartyByMember"(arg0: $UUID$$Type): $IServerPartyAPI
 "getAllStream"(): $Stream<($IServerPartyAPI)>
 "getPartyById"(arg0: $UUID$$Type): $IServerPartyAPI
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartyManagerAPI$$Type = ($IPartyManagerAPI);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPartyManagerAPI$$Original = $IPartyManagerAPI;}
declare module "xaero.pac.common.server.player.data.IOpenPACServerPlayer" {
import {$ServerPlayerDataAPI, $ServerPlayerDataAPI$$Type} from "xaero.pac.common.server.player.data.api.ServerPlayerDataAPI"

export interface $IOpenPACServerPlayer$$Interface {
set "xaero_OPAC_PlayerData"(value: $ServerPlayerDataAPI$$Type)
get "xaero_OPAC_PlayerData"(): $ServerPlayerDataAPI
}

export class $IOpenPACServerPlayer implements $IOpenPACServerPlayer$$Interface {
 "setXaero_OPAC_PlayerData"(arg0: $ServerPlayerDataAPI$$Type): void
 "getXaero_OPAC_PlayerData"(): $ServerPlayerDataAPI
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOpenPACServerPlayer$$Type = ($IOpenPACServerPlayer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IOpenPACServerPlayer$$Original = $IOpenPACServerPlayer;}
