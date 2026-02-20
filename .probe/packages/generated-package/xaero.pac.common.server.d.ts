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
import {$IPlayerConfigManagerAPI} from "xaero.pac.common.server.player.config.api.IPlayerConfigManagerAPI"
import {$IServerClaimsManagerAPI} from "xaero.pac.common.server.claims.api.IServerClaimsManagerAPI"
import {$IAdaptiveLocalizerAPI} from "xaero.pac.common.server.player.localization.api.IAdaptiveLocalizerAPI"
import {$IPartyManagerAPI} from "xaero.pac.common.server.parties.party.api.IPartyManagerAPI"

export interface $IServerDataAPI$$Interface {
get "adaptiveLocalizer"(): $IAdaptiveLocalizerAPI
get "partyManager"(): $IPartyManagerAPI
get "chunkProtection"(): $IChunkProtectionAPI
get "API"(): $OpenPACServerAPI
get "serverClaimsManager"(): $IServerClaimsManagerAPI
get "playerConfigs"(): $IPlayerConfigManagerAPI
}

export class $IServerDataAPI implements $IServerDataAPI$$Interface {
 "getAdaptiveLocalizer"(): $IAdaptiveLocalizerAPI
 "getPartyManager"(): $IPartyManagerAPI
 "getChunkProtection"(): $IChunkProtectionAPI
 "getAPI"(): $OpenPACServerAPI
 "getServerClaimsManager"(): $IServerClaimsManagerAPI
 "getPlayerConfigs"(): $IPlayerConfigManagerAPI
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
declare module "xaero.pac.common.server.parties.party.api.IServerPartyAPI" {
import {$PartyMemberRank$$Type} from "xaero.pac.common.parties.party.member.PartyMemberRank"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$IPartyAllyAPI} from "xaero.pac.common.parties.party.ally.api.IPartyAllyAPI"
import {$ServerPlayer} from "net.minecraft.server.level.ServerPlayer"
import {$Stream} from "java.util.stream.Stream"
import {$IPartyPlayerInfoAPI} from "xaero.pac.common.parties.party.api.IPartyPlayerInfoAPI"
import {$IPartyMemberAPI, $IPartyMemberAPI$$Type} from "xaero.pac.common.parties.party.member.api.IPartyMemberAPI"
import {$IPartyAPI$$Interface} from "xaero.pac.common.parties.party.api.IPartyAPI"

export interface $IServerPartyAPI$$Interface extends $IPartyAPI$$Interface {
get "id"(): $UUID
get "owner"(): $IPartyMemberAPI
get "defaultName"(): StringJS
get "allyPartiesStream"(): $Stream<($IPartyAllyAPI)>
get "nonStaffInfoStream"(): $Stream<($IPartyMemberAPI)>
get "invitedPlayersStream"(): $Stream<($IPartyPlayerInfoAPI)>
get "memberInfoStream"(): $Stream<($IPartyMemberAPI)>
get "allyCount"(): integer
get "memberCount"(): integer
get "staffInfoStream"(): $Stream<($IPartyMemberAPI)>
get "inviteCount"(): integer
get "onlineMemberStream"(): $Stream<($ServerPlayer)>
}

export class $IServerPartyAPI implements $IServerPartyAPI$$Interface {
 "getId"(): $UUID
 "getOwner"(): $IPartyMemberAPI
 "getDefaultName"(): StringJS
 "removeMember"(arg0: $UUID$$Type): $IPartyMemberAPI
 "addMember"(arg0: $UUID$$Type, arg1: $PartyMemberRank$$Type, arg2: StringJS): $IPartyMemberAPI
 "setRank"(arg0: $IPartyMemberAPI$$Type, arg1: $PartyMemberRank$$Type): boolean
 "getAllyPartiesStream"(): $Stream<($IPartyAllyAPI)>
 "getNonStaffInfoStream"(): $Stream<($IPartyMemberAPI)>
 "getInvitedPlayersStream"(): $Stream<($IPartyPlayerInfoAPI)>
 "getMemberInfoStream"(): $Stream<($IPartyMemberAPI)>
 "getMemberInfo"(arg0: $UUID$$Type): $IPartyMemberAPI
 "getMemberInfo"(arg0: StringJS): $IPartyMemberAPI
 "uninvitePlayer"(arg0: $UUID$$Type): $IPartyPlayerInfoAPI
 "getAllyCount"(): integer
 "removeAllyParty"(arg0: $UUID$$Type): void
 "getMemberCount"(): integer
 "getStaffInfoStream"(): $Stream<($IPartyMemberAPI)>
 "getInviteCount"(): integer
 "addAllyParty"(arg0: $UUID$$Type): void
 "isInvited"(arg0: $UUID$$Type): boolean
 "isAlly"(arg0: $UUID$$Type): boolean
 "invitePlayer"(arg0: $UUID$$Type, arg1: StringJS): $IPartyPlayerInfoAPI
 "getOnlineMemberStream"(): $Stream<($ServerPlayer)>
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
import {$UUID} from "java.util.UUID"
import {$IPlayerClaimInfoAPI$$Interface} from "xaero.pac.common.claims.player.api.IPlayerClaimInfoAPI"
import {$Stream} from "java.util.stream.Stream"
import {$IPlayerDimensionClaimsAPI} from "xaero.pac.common.claims.player.api.IPlayerDimensionClaimsAPI"
import {$Map$Entry} from "java.util.Map$Entry"

export interface $IServerPlayerClaimInfoAPI$$Interface extends $IPlayerClaimInfoAPI$$Interface {
get "stream"(): $Stream<($Map$Entry<($ResourceLocation), ($IPlayerDimensionClaimsAPI)>)>
get "playerId"(): $UUID
get "claimCount"(): integer
get "claimsColor"(): integer
get "playerUsername"(): StringJS
get "forceloadCount"(): integer
get "claimsName"(): StringJS
}

export class $IServerPlayerClaimInfoAPI implements $IServerPlayerClaimInfoAPI$$Interface {
 "getStream"(): $Stream<($Map$Entry<($ResourceLocation), ($IPlayerDimensionClaimsAPI)>)>
 "getDimension"(arg0: $ResourceLocation$$Type): $IPlayerDimensionClaimsAPI
 "getPlayerId"(): $UUID
 "getClaimCount"(): integer
 "getClaimsColor"(arg0: integer): integer
 "getClaimsColor"(arg0: StringJS): integer
 "getClaimsColor"(): integer
 "getPlayerUsername"(): StringJS
 "getForceloadCount"(): integer
 "getClaimsName"(): StringJS
 "getClaimsName"(arg0: StringJS): StringJS
 "getClaimsName"(arg0: integer): StringJS
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
get "type"(): $PlayerConfigType
get "subConfigLimit"(): integer
get "subCount"(): integer
get "playerId"(): $UUID
get "usedServerSubConfig"(): $IPlayerConfigAPI
get "beingDeleted"(): boolean
get "subConfigIds"(): $List<(StringJS)>
get "subId"(): StringJS
get "subIndex"(): integer
get "usedSubConfig"(): $IPlayerConfigAPI
get "subConfigAPIStream"(): $Stream<($IPlayerConfigAPI)>
}

export class $IPlayerConfigAPI implements $IPlayerConfigAPI$$Interface {
 "getType"(): $PlayerConfigType
 "subConfigExists"(arg0: StringJS): boolean
 "subConfigExists"(arg0: integer): boolean
 "createSubConfig"(arg0: StringJS): $IPlayerConfigAPI
 "getRaw"<T extends $Comparable<(object)>>(arg0: $IPlayerConfigOptionSpecAPI$$Type<(T)>): T
 "tryToReset"<T extends $Comparable<(object)>>(arg0: $IPlayerConfigOptionSpecAPI$$Type<(T)>): $IPlayerConfigAPI$SetResult
 "getEffectiveSubConfig"(arg0: integer): $IPlayerConfigAPI
 "getEffectiveSubConfig"(arg0: StringJS): $IPlayerConfigAPI
 "getSubConfigLimit"(): integer
 "getSubCount"(): integer
 "getSubConfig"(arg0: StringJS): $IPlayerConfigAPI
 "getEffective"<T extends $Comparable<(object)>>(arg0: $IPlayerConfigOptionSpecAPI$$Type<(T)>): T
 "getPlayerId"(): $UUID
 "tryToSet"<T extends $Comparable<(object)>>(arg0: $IPlayerConfigOptionSpecAPI$$Type<(T)>, arg1: T): $IPlayerConfigAPI$SetResult
 "getFromEffectiveConfig"<T extends $Comparable<(object)>>(arg0: $IPlayerConfigOptionSpecAPI$$Type<(T)>): T
 "getUsedServerSubConfig"(): $IPlayerConfigAPI
 "isBeingDeleted"(): boolean
 "getSubConfigIds"(): $List<(StringJS)>
 "getSubId"(): StringJS
 "getSubIndex"(): integer
 "getUsedSubConfig"(): $IPlayerConfigAPI
 "isOptionAllowed"(arg0: $IPlayerConfigOptionSpecAPI$$Type<(never)>): boolean
 "getDefaultRawValue"<T extends $Comparable<(object)>>(arg0: $IPlayerConfigOptionSpecAPI$$Type<(T)>): T
 "getSubConfigAPIStream"(): $Stream<($IPlayerConfigAPI)>
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
declare module "xaero.pac.common.server.parties.party.api.IPartyManagerAPI" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UUID$$Type} from "java.util.UUID"
import {$IServerPartyAPI, $IServerPartyAPI$$Type} from "xaero.pac.common.server.parties.party.api.IServerPartyAPI"
import {$Stream} from "java.util.stream.Stream"

export interface $IPartyManagerAPI$$Interface {
get "allStream"(): $Stream<($IServerPartyAPI)>
}

export class $IPartyManagerAPI implements $IPartyManagerAPI$$Interface {
 "getAllStream"(): $Stream<($IServerPartyAPI)>
 "getPartyByMember"(arg0: $UUID$$Type): $IServerPartyAPI
 "getPartyByOwner"(arg0: $UUID$$Type): $IServerPartyAPI
 "partyExistsForOwner"(arg0: $UUID$$Type): boolean
 "removePartyById"(arg0: $UUID$$Type): void
 "removePartyByOwner"(arg0: $UUID$$Type): void
 "getPartiesThatAlly"(arg0: $UUID$$Type): $Stream<($IServerPartyAPI)>
 "removeParty"(arg0: $IServerPartyAPI$$Type): void
 "createPartyForOwner"(arg0: $Player$$Type): $IServerPartyAPI
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
get "xaero_OPAC_PlayerData"(): $ServerPlayerDataAPI
set "xaero_OPAC_PlayerData"(value: $ServerPlayerDataAPI$$Type)
}

export class $IOpenPACServerPlayer implements $IOpenPACServerPlayer$$Interface {
 "getXaero_OPAC_PlayerData"(): $ServerPlayerDataAPI
 "setXaero_OPAC_PlayerData"(arg0: $ServerPlayerDataAPI$$Type): void
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
declare module "xaero.pac.common.server.player.config.api.IPlayerConfigManagerAPI" {
import {$IPlayerConfigOptionSpecAPI} from "xaero.pac.common.server.player.config.api.IPlayerConfigOptionSpecAPI"
import {$IPlayerConfigAPI} from "xaero.pac.common.server.player.config.api.IPlayerConfigAPI"
import {$UUID$$Type} from "java.util.UUID"
import {$Stream} from "java.util.stream.Stream"

export interface $IPlayerConfigManagerAPI$$Interface {
get "serverClaimConfig"(): $IPlayerConfigAPI
get "wildernessConfig"(): $IPlayerConfigAPI
get "expiredClaimConfig"(): $IPlayerConfigAPI
get "defaultConfig"(): $IPlayerConfigAPI
get "allOptionsStream"(): $Stream<($IPlayerConfigOptionSpecAPI<(never)>)>
}

export class $IPlayerConfigManagerAPI implements $IPlayerConfigManagerAPI$$Interface {
 "getLoadedConfig"(arg0: $UUID$$Type): $IPlayerConfigAPI
 "getServerClaimConfig"(): $IPlayerConfigAPI
 "getWildernessConfig"(): $IPlayerConfigAPI
 "getOptionForId"(arg0: StringJS): $IPlayerConfigOptionSpecAPI<(never)>
 "getExpiredClaimConfig"(): $IPlayerConfigAPI
 "getDefaultConfig"(): $IPlayerConfigAPI
 "getAllOptionsStream"(): $Stream<($IPlayerConfigOptionSpecAPI<(never)>)>
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
 "get"(arg0: integer, arg1: integer): $IPlayerChunkClaimAPI
 "getX"(): integer
 "getZ"(): integer
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
public "isClaimsNonallyMode"(): boolean
public "isClaimsServerMode"(): boolean
public "isClaimsAdminMode"(): boolean
get "claimsNonallyMode"(): boolean
get "claimsServerMode"(): boolean
get "claimsAdminMode"(): boolean
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
declare module "xaero.pac.common.server.parties.system.api.IPlayerPartySystemAPI" {
import {$UUID$$Type} from "java.util.UUID"

export interface $IPlayerPartySystemAPI$$Interface<P> {
}

export class $IPlayerPartySystemAPI<P> implements $IPlayerPartySystemAPI$$Interface {
 "isPermittedToPartyClaim"(arg0: $UUID$$Type): boolean
 "getPartyByMember"(arg0: $UUID$$Type): P
 "getPartyByOwner"(arg0: $UUID$$Type): P
 "isPlayerAllying"(arg0: $UUID$$Type, arg1: $UUID$$Type): boolean
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
import {$IPlayerConfigManagerAPI} from "xaero.pac.common.server.player.config.api.IPlayerConfigManagerAPI"
import {$IServerClaimsManagerAPI} from "xaero.pac.common.server.claims.api.IServerClaimsManagerAPI"
import {$IServerDataAPI$$Type} from "xaero.pac.common.server.IServerDataAPI"
import {$MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$IAdaptiveLocalizerAPI} from "xaero.pac.common.server.player.localization.api.IAdaptiveLocalizerAPI"
import {$IPartyManagerAPI} from "xaero.pac.common.server.parties.party.api.IPartyManagerAPI"

export class $OpenPACServerAPI {
constructor(arg0: $IServerDataAPI$$Type)

public static "get"(arg0: $MinecraftServer$$Type): $OpenPACServerAPI
public "getPartyManager"(): $IPartyManagerAPI
public "getChunkProtection"(): $IChunkProtectionAPI
public "getServerClaimsManager"(): $IServerClaimsManagerAPI
public "getPlayerConfigs"(): $IPlayerConfigManagerAPI
public "getAdaptiveTextLocalizer"(): $IAdaptiveLocalizerAPI
get "partyManager"(): $IPartyManagerAPI
get "chunkProtection"(): $IChunkProtectionAPI
get "serverClaimsManager"(): $IServerClaimsManagerAPI
get "playerConfigs"(): $IPlayerConfigManagerAPI
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
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $IChunkProtectionAPI$$Interface {
}

export class $IChunkProtectionAPI implements $IChunkProtectionAPI$$Interface {
 "onProjectileHitSpawnedEntity"(arg0: $Entity$$Type, arg1: $Entity$$Type): boolean
 "onBlockInteraction"(arg0: $Entity$$Type, arg1: $InteractionHand$$Type, arg2: $ItemStack$$Type, arg3: $ServerLevel$$Type, arg4: $BlockPos$$Type, arg5: $Direction$$Type, arg6: boolean, arg7: boolean, arg8: boolean): boolean
/**
 * 
 * @deprecated
 */
 "onBlockInteraction"(arg0: $Entity$$Type, arg1: $InteractionHand$$Type, arg2: $ItemStack$$Type, arg3: $ServerLevel$$Type, arg4: $BlockPos$$Type, arg5: $Direction$$Type, arg6: boolean, arg7: boolean): boolean
 "onEntityPlaceBlock"(arg0: $Entity$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type): boolean
 "onEntityInteraction"(arg0: $Entity$$Type, arg1: $Entity$$Type, arg2: $Entity$$Type, arg3: $ItemStack$$Type, arg4: $InteractionHand$$Type, arg5: boolean, arg6: boolean, arg7: boolean): boolean
/**
 * 
 * @deprecated
 */
 "onEntityInteraction"(arg0: $Entity$$Type, arg1: $Entity$$Type, arg2: $Entity$$Type, arg3: $ItemStack$$Type, arg4: $InteractionHand$$Type, arg5: boolean, arg6: boolean): boolean
 "onItemPickup"(arg0: $Entity$$Type, arg1: $ItemEntity$$Type): boolean
 "removeFullPass"(arg0: $UUID$$Type): void
 "giveFullPass"(arg0: $UUID$$Type): void
 "checkExceptionLeveledOption"(arg0: $IPlayerConfigOptionSpecAPI$$Type<(integer)>, arg1: $IPlayerConfigAPI$$Type, arg2: $UUID$$Type): boolean
 "checkExceptionLeveledOption"(arg0: $IPlayerConfigOptionSpecAPI$$Type<(integer)>, arg1: $IPlayerConfigAPI$$Type, arg2: $Entity$$Type): boolean
 "checkProtectionLeveledOption"(arg0: $IPlayerConfigOptionSpecAPI$$Type<(integer)>, arg1: $IPlayerConfigAPI$$Type, arg2: $Entity$$Type): boolean
 "checkProtectionLeveledOption"(arg0: $IPlayerConfigOptionSpecAPI$$Type<(integer)>, arg1: $IPlayerConfigAPI$$Type, arg2: $UUID$$Type): boolean
 "getClaimConfig"(arg0: $IPlayerChunkClaimAPI$$Type): $IPlayerConfigAPI
 "hasChunkAccess"(arg0: $IPlayerConfigAPI$$Type, arg1: $UUID$$Type): boolean
 "hasChunkAccess"(arg0: $IPlayerConfigAPI$$Type, arg1: $Entity$$Type): boolean
 "onPosAffectedByAnotherPos"(arg0: $ServerLevel$$Type, arg1: $ChunkPos$$Type, arg2: $ServerLevel$$Type, arg3: $ChunkPos$$Type, arg4: boolean, arg5: boolean, arg6: boolean): boolean
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
declare module "xaero.pac.common.server.claims.api.IServerClaimsManagerAPI" {
import {$IPlayerClaimInfoAPI} from "xaero.pac.common.claims.player.api.IPlayerClaimInfoAPI"
import {$UUID$$Type} from "java.util.UUID"
import {$IServerDimensionClaimsManagerAPI} from "xaero.pac.common.server.claims.api.IServerDimensionClaimsManagerAPI"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$IClaimsManagerTrackerAPI} from "xaero.pac.common.claims.tracker.api.IClaimsManagerTrackerAPI"
import {$ClaimResult} from "xaero.pac.common.claims.result.api.ClaimResult"
import {$IServerPlayerClaimInfoAPI} from "xaero.pac.common.server.claims.player.api.IServerPlayerClaimInfoAPI"
import {$IPlayerChunkClaimAPI} from "xaero.pac.common.claims.player.api.IPlayerChunkClaimAPI"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IClaimsManagerAPI$$Interface} from "xaero.pac.common.claims.api.IClaimsManagerAPI"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Stream} from "java.util.stream.Stream"
import {$AreaClaimResult} from "xaero.pac.common.claims.result.api.AreaClaimResult"

export interface $IServerClaimsManagerAPI$$Interface extends $IClaimsManagerAPI$$Interface {
get "tracker"(): $IClaimsManagerTrackerAPI
get "dimensionStream"(): $Stream<($IServerDimensionClaimsManagerAPI)>
get "playerInfoStream"(): $Stream<($IServerPlayerClaimInfoAPI)>
}

export class $IServerClaimsManagerAPI implements $IServerClaimsManagerAPI$$Interface {
 "claim"(arg0: $ResourceLocation$$Type, arg1: $UUID$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: boolean): $IPlayerChunkClaimAPI
 "get"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer): $IPlayerChunkClaimAPI
 "get"(arg0: $ResourceLocation$$Type, arg1: $ChunkPos$$Type): $IPlayerChunkClaimAPI
 "get"(arg0: $ResourceLocation$$Type, arg1: $BlockPos$$Type): $IPlayerChunkClaimAPI
 "getDimension"(arg0: $ResourceLocation$$Type): $IServerDimensionClaimsManagerAPI
 "getTracker"(): $IClaimsManagerTrackerAPI
 "getPlayerInfo"(arg0: $UUID$$Type): $IPlayerClaimInfoAPI
 "unclaim"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer): void
 "hasPlayerInfo"(arg0: $UUID$$Type): boolean
 "getDimensionStream"(): $Stream<($IServerDimensionClaimsManagerAPI)>
 "getPlayerInfoStream"(): $Stream<($IServerPlayerClaimInfoAPI)>
 "tryToForceloadArea"(arg0: $ResourceLocation$$Type, arg1: $UUID$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: boolean, arg9: boolean): $AreaClaimResult
 "isClaimable"(arg0: $ResourceLocation$$Type): boolean
 "tryToClaimArea"(arg0: $ResourceLocation$$Type, arg1: $UUID$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: boolean): $AreaClaimResult
 "tryToForceload"(arg0: $ResourceLocation$$Type, arg1: $UUID$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: boolean, arg7: boolean): $ClaimResult<($IPlayerChunkClaimAPI)>
 "tryToUnclaimArea"(arg0: $ResourceLocation$$Type, arg1: $UUID$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: boolean): $AreaClaimResult
 "tryToUnclaim"(arg0: $ResourceLocation$$Type, arg1: $UUID$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: boolean): $ClaimResult<($IPlayerChunkClaimAPI)>
 "tryToClaim"(arg0: $ResourceLocation$$Type, arg1: $UUID$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: boolean): $ClaimResult<($IPlayerChunkClaimAPI)>
 "getPlayerBaseForceloadLimit"(arg0: $UUID$$Type): integer
 "getPlayerBaseForceloadLimit"(arg0: $ServerPlayer$$Type): integer
 "getPlayerBaseClaimLimit"(arg0: $ServerPlayer$$Type): integer
 "getPlayerBaseClaimLimit"(arg0: $UUID$$Type): integer
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
declare module "xaero.pac.common.server.player.permission.api.IPermissionNodeAPI" {
import {$Class} from "java.lang.Class"
import {$Component} from "net.minecraft.network.chat.Component"

export interface $IPermissionNodeAPI$$Interface<T> {
get "name"(): $Component
get "type"(): $Class<(T)>
get "comment"(): $Component
get "defaultNodeString"(): StringJS
get "nodeString"(): StringJS
}

export class $IPermissionNodeAPI<T> implements $IPermissionNodeAPI$$Interface {
 "getName"(): $Component
 "getType"(): $Class<(T)>
 "getComment"(): $Component
 "getDefaultNodeString"(): StringJS
 "getNodeString"(): StringJS
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
import {$Function} from "java.util.function.Function"
import {$Predicate} from "java.util.function.Predicate"
import {$List} from "java.util.List"
import {$Class} from "java.lang.Class"
import {$IPlayerConfigClientStorageAPI} from "xaero.pac.client.player.config.api.IPlayerConfigClientStorageAPI"
import {$Component} from "net.minecraft.network.chat.Component"
import {$PlayerConfigType} from "xaero.pac.common.server.player.config.api.PlayerConfigType"

export interface $IPlayerConfigOptionSpecAPI$$Interface<T extends $Comparable<(object)>> {
get "id"(): StringJS
get "type"(): $Class<(T)>
get "defaultValue"(): T
get "path"(): $List<(StringJS)>
get "comment"(): StringJS
get "translationArgs"(): (StringJS)[]
get "translation"(): StringJS
get "commandOutputWriter"(): $Function<(T), ($Component)>
get "serverSideValidator"(): $BiPredicate<($IPlayerConfigAPI), (T)>
get "clientSideValidator"(): $BiPredicate<($IPlayerConfigClientStorageAPI), (T)>
get "configTypeFilter"(): $Predicate<($PlayerConfigType)>
get "commandInputParser"(): $Function<(StringJS), (T)>
get "commentTranslation"(): StringJS
get "commentTranslationArgs"(): (StringJS)[]
get "shortenedId"(): StringJS
get "tooltipPrefix"(): StringJS
}

export class $IPlayerConfigOptionSpecAPI<T extends $Comparable<(object)>> implements $IPlayerConfigOptionSpecAPI$$Interface {
 "getId"(): StringJS
 "getType"(): $Class<(T)>
 "getDefaultValue"(): T
 "getPath"(): $List<(StringJS)>
 "getComment"(): StringJS
 "getTranslationArgs"(): (StringJS)[]
 "getTranslation"(): StringJS
 "getCommandOutputWriter"(): $Function<(T), ($Component)>
 "getServerSideValidator"(): $BiPredicate<($IPlayerConfigAPI), (T)>
 "getClientSideValidator"(): $BiPredicate<($IPlayerConfigClientStorageAPI), (T)>
 "getConfigTypeFilter"(): $Predicate<($PlayerConfigType)>
 "getCommandInputParser"(): $Function<(StringJS), (T)>
 "getCommentTranslation"(): StringJS
 "getCommentTranslationArgs"(): (StringJS)[]
 "getShortenedId"(): StringJS
 "getTooltipPrefix"(): StringJS
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
