declare module "xaero.pac.common.parties.party.api.IPartyPlayerInfoAPI" {
import {$UUID} from "java.util.UUID"

export interface $IPartyPlayerInfoAPI$$Interface {
get "UUID"(): $UUID
get "username"(): StringJS
}

export class $IPartyPlayerInfoAPI implements $IPartyPlayerInfoAPI$$Interface {
 "getUUID"(): $UUID
 "getUsername"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartyPlayerInfoAPI$$Type = ($IPartyPlayerInfoAPI);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPartyPlayerInfoAPI$$Original = $IPartyPlayerInfoAPI;}
declare module "xaero.pac.common.parties.party.ally.api.IPartyAllyAPI" {
import {$UUID, $UUID$$Type} from "java.util.UUID"

export interface $IPartyAllyAPI$$Interface {

(): $UUID$$Type
get "partyId"(): $UUID
}

export class $IPartyAllyAPI implements $IPartyAllyAPI$$Interface {
 "getPartyId"(): $UUID
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartyAllyAPI$$Type = (() => $UUID$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPartyAllyAPI$$Original = $IPartyAllyAPI;}
declare module "xaero.pac.common.parties.party.member.api.IPartyMemberAPI" {
import {$PartyMemberRank} from "xaero.pac.common.parties.party.member.PartyMemberRank"
import {$UUID} from "java.util.UUID"
import {$IPartyPlayerInfoAPI$$Interface} from "xaero.pac.common.parties.party.api.IPartyPlayerInfoAPI"

export interface $IPartyMemberAPI$$Interface extends $IPartyPlayerInfoAPI$$Interface {
get "UUID"(): $UUID
get "rank"(): $PartyMemberRank
get "username"(): StringJS
get "owner"(): boolean
}

export class $IPartyMemberAPI implements $IPartyMemberAPI$$Interface {
 "getUUID"(): $UUID
 "getRank"(): $PartyMemberRank
 "getUsername"(): StringJS
 "isOwner"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartyMemberAPI$$Type = ($IPartyMemberAPI);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPartyMemberAPI$$Original = $IPartyMemberAPI;}
declare module "xaero.pac.common.parties.party.api.IPartyAPI" {
import {$PartyMemberRank$$Type} from "xaero.pac.common.parties.party.member.PartyMemberRank"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$IPartyAllyAPI} from "xaero.pac.common.parties.party.ally.api.IPartyAllyAPI"
import {$IPartyPlayerInfoAPI} from "xaero.pac.common.parties.party.api.IPartyPlayerInfoAPI"
import {$Stream} from "java.util.stream.Stream"
import {$IPartyMemberAPI, $IPartyMemberAPI$$Type} from "xaero.pac.common.parties.party.member.api.IPartyMemberAPI"

export interface $IPartyAPI$$Interface {
get "id"(): $UUID
get "owner"(): $IPartyMemberAPI
get "defaultName"(): StringJS
get "memberInfoStream"(): $Stream<($IPartyMemberAPI)>
get "invitedPlayersStream"(): $Stream<($IPartyPlayerInfoAPI)>
get "allyPartiesStream"(): $Stream<($IPartyAllyAPI)>
get "nonStaffInfoStream"(): $Stream<($IPartyMemberAPI)>
get "memberCount"(): integer
get "allyCount"(): integer
get "staffInfoStream"(): $Stream<($IPartyMemberAPI)>
get "inviteCount"(): integer
}

export class $IPartyAPI implements $IPartyAPI$$Interface {
 "getId"(): $UUID
 "getOwner"(): $IPartyMemberAPI
 "getDefaultName"(): StringJS
 "isInvited"(arg0: $UUID$$Type): boolean
 "setRank"(arg0: $IPartyMemberAPI$$Type, arg1: $PartyMemberRank$$Type): boolean
 "isAlly"(arg0: $UUID$$Type): boolean
 "getMemberInfoStream"(): $Stream<($IPartyMemberAPI)>
 "getInvitedPlayersStream"(): $Stream<($IPartyPlayerInfoAPI)>
 "getAllyPartiesStream"(): $Stream<($IPartyAllyAPI)>
 "getNonStaffInfoStream"(): $Stream<($IPartyMemberAPI)>
 "getMemberInfo"(arg0: $UUID$$Type): $IPartyMemberAPI
 "getMemberCount"(): integer
 "getAllyCount"(): integer
 "getStaffInfoStream"(): $Stream<($IPartyMemberAPI)>
 "getInviteCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartyAPI$$Type = ($IPartyAPI);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPartyAPI$$Original = $IPartyAPI;}
declare module "xaero.pac.common.parties.party.member.PartyMemberRank" {
import {$Enum} from "java.lang.Enum"
import {$ChatFormatting} from "net.minecraft.ChatFormatting"

export class $PartyMemberRank extends $Enum<($PartyMemberRank)> {
static readonly "ADMIN": $PartyMemberRank
static readonly "MEMBER": $PartyMemberRank
static readonly "MODERATOR": $PartyMemberRank

public "getColor"(): $ChatFormatting
public static "values"(): ($PartyMemberRank)[]
public static "valueOf"(arg0: StringJS): $PartyMemberRank
get "color"(): $ChatFormatting
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartyMemberRank$$Type = (("member") | ("moderator") | ("admin"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PartyMemberRank$$Original = $PartyMemberRank;}
