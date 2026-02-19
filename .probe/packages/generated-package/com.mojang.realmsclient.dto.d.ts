declare module "com.mojang.realmsclient.dto.Subscription" {
import {$ValueObject} from "com.mojang.realmsclient.dto.ValueObject"
import {$Subscription$SubscriptionType} from "com.mojang.realmsclient.dto.Subscription$SubscriptionType"

export class $Subscription extends $ValueObject {
 "daysLeft": integer
 "type": $Subscription$SubscriptionType
 "startDate": long

constructor()

public static "parse"(arg0: StringJS): $Subscription
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Subscription$$Type = ($Subscription);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Subscription$$Original = $Subscription;}
declare module "com.mojang.realmsclient.dto.ValueObject" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ValueObject {
constructor()

public "toString"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueObject$$Type = ($ValueObject);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ValueObject$$Original = $ValueObject;}
declare module "com.mojang.realmsclient.dto.RealmsServerList" {
import {$RealmsServer} from "com.mojang.realmsclient.dto.RealmsServer"
import {$List} from "java.util.List"
import {$ValueObject} from "com.mojang.realmsclient.dto.ValueObject"

export class $RealmsServerList extends $ValueObject {
 "servers": $List<($RealmsServer)>

constructor()

public static "parse"(arg0: StringJS): $RealmsServerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsServerList$$Type = ($RealmsServerList);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RealmsServerList$$Original = $RealmsServerList;}
declare module "com.mojang.realmsclient.dto.WorldTemplate" {
import {$WorldTemplate$WorldTemplateType} from "com.mojang.realmsclient.dto.WorldTemplate$WorldTemplateType"
import {$ValueObject} from "com.mojang.realmsclient.dto.ValueObject"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"

export class $WorldTemplate extends $ValueObject {
 "trailer": StringJS
 "image": StringJS
 "author": StringJS
 "name": StringJS
 "link": StringJS
 "recommendedPlayers": StringJS
 "id": StringJS
 "type": $WorldTemplate$WorldTemplateType
 "version": StringJS

constructor()

public static "parse"(arg0: $JsonObject$$Type): $WorldTemplate
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldTemplate$$Type = ($WorldTemplate);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldTemplate$$Original = $WorldTemplate;}
declare module "com.mojang.realmsclient.dto.RealmsServer$Compatibility" {
import {$Enum} from "java.lang.Enum"

export class $RealmsServer$Compatibility extends $Enum<($RealmsServer$Compatibility)> {
static readonly "COMPATIBLE": $RealmsServer$Compatibility
static readonly "NEEDS_DOWNGRADE": $RealmsServer$Compatibility
static readonly "UNVERIFIABLE": $RealmsServer$Compatibility
static readonly "NEEDS_UPGRADE": $RealmsServer$Compatibility
static readonly "INCOMPATIBLE": $RealmsServer$Compatibility
static readonly "RELEASE_TYPE_INCOMPATIBLE": $RealmsServer$Compatibility

public "needsDowngrade"(): boolean
public static "values"(): ($RealmsServer$Compatibility)[]
public static "valueOf"(arg0: StringJS): $RealmsServer$Compatibility
public "needsUpgrade"(): boolean
public "isCompatible"(): boolean
get "compatible"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsServer$Compatibility$$Type = (("unverifiable") | ("incompatible") | ("release_type_incompatible") | ("needs_downgrade") | ("needs_upgrade") | ("compatible"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RealmsServer$Compatibility$$Original = $RealmsServer$Compatibility;}
declare module "com.mojang.realmsclient.dto.RealmsWorldOptions" {
import {$RealmsServer$Compatibility, $RealmsServer$Compatibility$$Type} from "com.mojang.realmsclient.dto.RealmsServer$Compatibility"
import {$ValueObject} from "com.mojang.realmsclient.dto.ValueObject"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"

export class $RealmsWorldOptions extends $ValueObject {
readonly "spawnMonsters": boolean
readonly "spawnProtection": integer
readonly "commandBlocks": boolean
 "templateImage": StringJS
readonly "pvp": boolean
readonly "spawnNPCs": boolean
 "templateId": long
readonly "version": StringJS
 "empty": boolean
readonly "difficulty": integer
readonly "spawnAnimals": boolean
readonly "gameMode": integer
readonly "forceGameMode": boolean
readonly "compatibility": $RealmsServer$Compatibility

constructor(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: integer, arg5: boolean, arg6: integer, arg7: integer, arg8: boolean, arg9: StringJS, arg10: StringJS, arg11: $RealmsServer$Compatibility$$Type)

public "clone"(): any
public static "parse"(arg0: $JsonObject$$Type): $RealmsWorldOptions
public "toJson"(): StringJS
public "setEmpty"(arg0: boolean): void
public "getDefaultSlotName"(arg0: integer): StringJS
public static "createDefaults"(): $RealmsWorldOptions
public "getSlotName"(arg0: integer): StringJS
public static "createEmptyDefaults"(): $RealmsWorldOptions
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsWorldOptions$$Type = ($RealmsWorldOptions);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RealmsWorldOptions$$Original = $RealmsWorldOptions;}
declare module "com.mojang.realmsclient.dto.WorldTemplatePaginatedList" {
import {$WorldTemplate} from "com.mojang.realmsclient.dto.WorldTemplate"
import {$List} from "java.util.List"
import {$ValueObject} from "com.mojang.realmsclient.dto.ValueObject"

export class $WorldTemplatePaginatedList extends $ValueObject {
 "total": integer
 "size": integer
 "templates": $List<($WorldTemplate)>
 "page": integer

constructor()
constructor(arg0: integer)

public static "parse"(arg0: StringJS): $WorldTemplatePaginatedList
public "isLastPage"(): boolean
get "lastPage"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldTemplatePaginatedList$$Type = ($WorldTemplatePaginatedList);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldTemplatePaginatedList$$Original = $WorldTemplatePaginatedList;}
declare module "com.mojang.realmsclient.dto.PingResult" {
import {$List} from "java.util.List"
import {$RegionPingResult} from "com.mojang.realmsclient.dto.RegionPingResult"
import {$ValueObject} from "com.mojang.realmsclient.dto.ValueObject"
import {$ReflectionBasedSerialization$$Interface} from "com.mojang.realmsclient.dto.ReflectionBasedSerialization"

export class $PingResult extends $ValueObject implements $ReflectionBasedSerialization$$Interface {
 "pingResults": $List<($RegionPingResult)>
 "realmIds": $List<(long)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PingResult$$Type = ($PingResult);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PingResult$$Original = $PingResult;}
declare module "com.mojang.realmsclient.dto.Backup" {
import {$Map} from "java.util.Map"
import {$JsonElement$$Type} from "com.google.gson.JsonElement"
import {$ValueObject} from "com.mojang.realmsclient.dto.ValueObject"
import {$Date} from "java.util.Date"

export class $Backup extends $ValueObject {
 "metadata": $Map<(StringJS), (StringJS)>
 "size": long
 "lastModifiedDate": $Date
 "backupId": StringJS
 "changeList": $Map<(StringJS), (StringJS)>

constructor()

public static "parse"(arg0: $JsonElement$$Type): $Backup
public "setUploadedVersion"(arg0: boolean): void
public "isUploadedVersion"(): boolean
set "uploadedVersion"(value: boolean)
get "uploadedVersion"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Backup$$Type = ($Backup);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Backup$$Original = $Backup;}
declare module "com.mojang.realmsclient.dto.Ops" {
import {$Set} from "java.util.Set"
import {$ValueObject} from "com.mojang.realmsclient.dto.ValueObject"

export class $Ops extends $ValueObject {
 "ops": $Set<(StringJS)>

constructor()

public static "parse"(arg0: StringJS): $Ops
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Ops$$Type = ($Ops);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Ops$$Original = $Ops;}
declare module "com.mojang.realmsclient.dto.RealmsNotification" {
import {$UUID} from "java.util.UUID"
import {$List} from "java.util.List"

export class $RealmsNotification {
public "seen"(): boolean
public static "parseList"(arg0: StringJS): $List<($RealmsNotification)>
public "dismissable"(): boolean
public "uuid"(): $UUID
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsNotification$$Type = ($RealmsNotification);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RealmsNotification$$Original = $RealmsNotification;}
declare module "com.mojang.realmsclient.dto.ServerActivity" {
import {$ValueObject} from "com.mojang.realmsclient.dto.ValueObject"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"

export class $ServerActivity extends $ValueObject {
 "leaveTime": long
 "profileUuid": StringJS
 "joinTime": long

constructor()

public static "parse"(arg0: $JsonObject$$Type): $ServerActivity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerActivity$$Type = ($ServerActivity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerActivity$$Original = $ServerActivity;}
declare module "com.mojang.realmsclient.dto.PlayerInfo" {
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ValueObject} from "com.mojang.realmsclient.dto.ValueObject"
import {$ReflectionBasedSerialization$$Interface} from "com.mojang.realmsclient.dto.ReflectionBasedSerialization"

export class $PlayerInfo extends $ValueObject implements $ReflectionBasedSerialization$$Interface {
constructor()

public "isOperator"(): boolean
public "getUuid"(): $UUID
public "setOperator"(arg0: boolean): void
public "getName"(): StringJS
public "setName"(arg0: StringJS): void
public "setOnline"(arg0: boolean): void
public "getAccepted"(): boolean
public "setAccepted"(arg0: boolean): void
public "setUuid"(arg0: $UUID$$Type): void
public "getOnline"(): boolean
get "operator"(): boolean
get "uuid"(): $UUID
set "operator"(value: boolean)
get "name"(): StringJS
set "name"(value: StringJS)
set "online"(value: boolean)
get "accepted"(): boolean
set "accepted"(value: boolean)
set "uuid"(value: $UUID$$Type)
get "online"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerInfo$$Type = ($PlayerInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerInfo$$Original = $PlayerInfo;}
declare module "com.mojang.realmsclient.dto.RealmsServer$WorldType" {
import {$Enum} from "java.lang.Enum"

export class $RealmsServer$WorldType extends $Enum<($RealmsServer$WorldType)> {
static readonly "ADVENTUREMAP": $RealmsServer$WorldType
static readonly "MINIGAME": $RealmsServer$WorldType
static readonly "EXPERIENCE": $RealmsServer$WorldType
static readonly "NORMAL": $RealmsServer$WorldType
static readonly "INSPIRATION": $RealmsServer$WorldType

public static "values"(): ($RealmsServer$WorldType)[]
public static "valueOf"(arg0: StringJS): $RealmsServer$WorldType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsServer$WorldType$$Type = (("normal") | ("minigame") | ("adventuremap") | ("experience") | ("inspiration"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RealmsServer$WorldType$$Original = $RealmsServer$WorldType;}
declare module "com.mojang.realmsclient.dto.Subscription$SubscriptionType" {
import {$Enum} from "java.lang.Enum"

export class $Subscription$SubscriptionType extends $Enum<($Subscription$SubscriptionType)> {
static readonly "NORMAL": $Subscription$SubscriptionType
static readonly "RECURRING": $Subscription$SubscriptionType

public static "values"(): ($Subscription$SubscriptionType)[]
public static "valueOf"(arg0: StringJS): $Subscription$SubscriptionType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Subscription$SubscriptionType$$Type = (("normal") | ("recurring"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Subscription$SubscriptionType$$Original = $Subscription$SubscriptionType;}
declare module "com.mojang.realmsclient.dto.PendingInvitesList" {
import {$List} from "java.util.List"
import {$ValueObject} from "com.mojang.realmsclient.dto.ValueObject"
import {$PendingInvite} from "com.mojang.realmsclient.dto.PendingInvite"

export class $PendingInvitesList extends $ValueObject {
 "pendingInvites": $List<($PendingInvite)>

constructor()

public static "parse"(arg0: StringJS): $PendingInvitesList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PendingInvitesList$$Type = ($PendingInvitesList);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PendingInvitesList$$Original = $PendingInvitesList;}
declare module "com.mojang.realmsclient.dto.ServerActivityList" {
import {$List} from "java.util.List"
import {$ServerActivity} from "com.mojang.realmsclient.dto.ServerActivity"
import {$ValueObject} from "com.mojang.realmsclient.dto.ValueObject"

export class $ServerActivityList extends $ValueObject {
 "periodInMillis": long
 "serverActivities": $List<($ServerActivity)>

constructor()

public static "parse"(arg0: StringJS): $ServerActivityList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerActivityList$$Type = ($ServerActivityList);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerActivityList$$Original = $ServerActivityList;}
declare module "com.mojang.realmsclient.dto.RegionPingResult" {
import {$ValueObject} from "com.mojang.realmsclient.dto.ValueObject"
import {$ReflectionBasedSerialization$$Interface} from "com.mojang.realmsclient.dto.ReflectionBasedSerialization"

export class $RegionPingResult extends $ValueObject implements $ReflectionBasedSerialization$$Interface {
constructor(arg0: StringJS, arg1: integer)

public "toString"(): StringJS
public "ping"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegionPingResult$$Type = ($RegionPingResult);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegionPingResult$$Original = $RegionPingResult;}
declare module "com.mojang.realmsclient.dto.WorldDownload" {
import {$ValueObject} from "com.mojang.realmsclient.dto.ValueObject"

export class $WorldDownload extends $ValueObject {
 "resourcePackHash": StringJS
 "downloadLink": StringJS
 "resourcePackUrl": StringJS

constructor()

public static "parse"(arg0: StringJS): $WorldDownload
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldDownload$$Type = ($WorldDownload);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldDownload$$Original = $WorldDownload;}
declare module "com.mojang.realmsclient.dto.RealmsServerAddress" {
import {$ValueObject} from "com.mojang.realmsclient.dto.ValueObject"

export class $RealmsServerAddress extends $ValueObject {
 "address": StringJS
 "resourcePackHash": StringJS
 "resourcePackUrl": StringJS

constructor()

public static "parse"(arg0: StringJS): $RealmsServerAddress
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsServerAddress$$Type = ($RealmsServerAddress);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RealmsServerAddress$$Original = $RealmsServerAddress;}
declare module "com.mojang.realmsclient.dto.RealmsServer" {
import {$RealmsServer$State} from "com.mojang.realmsclient.dto.RealmsServer$State"
import {$Map, $Map$$Type} from "java.util.Map"
import {$RealmsWorldOptions, $RealmsWorldOptions$$Type} from "com.mojang.realmsclient.dto.RealmsWorldOptions"
import {$RealmsServer$Compatibility} from "com.mojang.realmsclient.dto.RealmsServer$Compatibility"
import {$UUID} from "java.util.UUID"
import {$List} from "java.util.List"
import {$PlayerInfo} from "com.mojang.realmsclient.dto.PlayerInfo"
import {$ValueObject} from "com.mojang.realmsclient.dto.ValueObject"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$RealmsServer$WorldType} from "com.mojang.realmsclient.dto.RealmsServer$WorldType"
import {$ServerData} from "net.minecraft.client.multiplayer.ServerData"

export class $RealmsServer extends $ValueObject {
 "owner": StringJS
 "motd": StringJS
 "worldType": $RealmsServer$WorldType
 "ownerUUID": $UUID
 "expiredTrial": boolean
 "parentRealmId": long
 "players": $List<($PlayerInfo)>
 "parentWorldName": StringJS
 "minigameName": StringJS
 "minigameImage": StringJS
 "slots": $Map<(integer), ($RealmsWorldOptions)>
 "expired": boolean
 "activeSlot": integer
 "minigameId": integer
 "name": StringJS
 "activeVersion": StringJS
 "id": long
 "state": $RealmsServer$State
 "daysLeft": integer
 "remoteSubscriptionId": StringJS
 "compatibility": $RealmsServer$Compatibility

constructor()

public "needsDowngrade"(): boolean
public "getMinigameName"(): StringJS
public "getDescription"(): StringJS
public "getName"(): StringJS
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "clone"(): any
public "setName"(arg0: StringJS): void
public static "parse"(arg0: $JsonObject$$Type): $RealmsServer
public static "parse"(arg0: StringJS): $RealmsServer
public "needsUpgrade"(): boolean
public "isMinigameActive"(): boolean
public "isSnapshotRealm"(): boolean
public static "getCompatibility"(arg0: StringJS): $RealmsServer$Compatibility
public "setDescription"(arg0: StringJS): void
public "isCompatible"(): boolean
public "toServerData"(arg0: StringJS): $ServerData
public "getWorldName"(arg0: integer): StringJS
public "cloneSlots"(arg0: $Map$$Type<(integer), ($RealmsWorldOptions$$Type)>): $Map<(integer), ($RealmsWorldOptions)>
get "description"(): StringJS
get "minigameActive"(): boolean
get "snapshotRealm"(): boolean
set "description"(value: StringJS)
get "compatible"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsServer$$Type = ($RealmsServer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RealmsServer$$Original = $RealmsServer;}
declare module "com.mojang.realmsclient.dto.RealmsNews" {
import {$ValueObject} from "com.mojang.realmsclient.dto.ValueObject"

export class $RealmsNews extends $ValueObject {
 "newsLink": StringJS

constructor()

public static "parse"(arg0: StringJS): $RealmsNews
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsNews$$Type = ($RealmsNews);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RealmsNews$$Original = $RealmsNews;}
declare module "com.mojang.realmsclient.dto.WorldTemplate$WorldTemplateType" {
import {$Enum} from "java.lang.Enum"

export class $WorldTemplate$WorldTemplateType extends $Enum<($WorldTemplate$WorldTemplateType)> {
static readonly "ADVENTUREMAP": $WorldTemplate$WorldTemplateType
static readonly "WORLD_TEMPLATE": $WorldTemplate$WorldTemplateType
static readonly "MINIGAME": $WorldTemplate$WorldTemplateType
static readonly "EXPERIENCE": $WorldTemplate$WorldTemplateType
static readonly "INSPIRATION": $WorldTemplate$WorldTemplateType

public static "values"(): ($WorldTemplate$WorldTemplateType)[]
public static "valueOf"(arg0: StringJS): $WorldTemplate$WorldTemplateType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldTemplate$WorldTemplateType$$Type = (("world_template") | ("minigame") | ("adventuremap") | ("experience") | ("inspiration"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldTemplate$WorldTemplateType$$Original = $WorldTemplate$WorldTemplateType;}
declare module "com.mojang.realmsclient.dto.BackupList" {
import {$Backup} from "com.mojang.realmsclient.dto.Backup"
import {$List} from "java.util.List"
import {$ValueObject} from "com.mojang.realmsclient.dto.ValueObject"

export class $BackupList extends $ValueObject {
 "backups": $List<($Backup)>

constructor()

public static "parse"(arg0: StringJS): $BackupList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BackupList$$Type = ($BackupList);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BackupList$$Original = $BackupList;}
declare module "com.mojang.realmsclient.dto.RealmsServer$State" {
import {$Enum} from "java.lang.Enum"

export class $RealmsServer$State extends $Enum<($RealmsServer$State)> {
static readonly "CLOSED": $RealmsServer$State
static readonly "UNINITIALIZED": $RealmsServer$State
static readonly "OPEN": $RealmsServer$State

public static "values"(): ($RealmsServer$State)[]
public static "valueOf"(arg0: StringJS): $RealmsServer$State
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsServer$State$$Type = (("closed") | ("open") | ("uninitialized"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RealmsServer$State$$Original = $RealmsServer$State;}
declare module "com.mojang.realmsclient.dto.UploadInfo" {
import {$URI} from "java.net.URI"
import {$ValueObject} from "com.mojang.realmsclient.dto.ValueObject"

export class $UploadInfo extends $ValueObject {
public static "parse"(arg0: StringJS): $UploadInfo
public "getToken"(): StringJS
public static "assembleUri"(arg0: StringJS, arg1: integer): $URI
public "isWorldClosed"(): boolean
public "getUploadEndpoint"(): $URI
public static "createRequest"(arg0: StringJS): StringJS
get "token"(): StringJS
get "worldClosed"(): boolean
get "uploadEndpoint"(): $URI
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UploadInfo$$Type = ($UploadInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UploadInfo$$Original = $UploadInfo;}
declare module "com.mojang.realmsclient.dto.PendingInvite" {
import {$UUID} from "java.util.UUID"
import {$ValueObject} from "com.mojang.realmsclient.dto.ValueObject"
import {$Date} from "java.util.Date"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"

export class $PendingInvite extends $ValueObject {
 "date": $Date
 "realmName": StringJS
 "realmOwnerUuid": $UUID
 "invitationId": StringJS
 "realmOwnerName": StringJS

constructor()

public static "parse"(arg0: $JsonObject$$Type): $PendingInvite
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PendingInvite$$Type = ($PendingInvite);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PendingInvite$$Original = $PendingInvite;}
declare module "com.mojang.realmsclient.dto.RealmsServerPlayerLists" {
import {$Map} from "java.util.Map"
import {$List} from "java.util.List"
import {$ValueObject} from "com.mojang.realmsclient.dto.ValueObject"
import {$ProfileResult} from "com.mojang.authlib.yggdrasil.ProfileResult"

export class $RealmsServerPlayerLists extends $ValueObject {
 "servers": $Map<(long), ($List<($ProfileResult)>)>

constructor()

public static "parse"(arg0: StringJS): $RealmsServerPlayerLists
public "getProfileResultsFor"(arg0: long): $List<($ProfileResult)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsServerPlayerLists$$Type = ($RealmsServerPlayerLists);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RealmsServerPlayerLists$$Original = $RealmsServerPlayerLists;}
declare module "com.mojang.realmsclient.dto.ReflectionBasedSerialization" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ReflectionBasedSerialization$$Interface {
}

export class $ReflectionBasedSerialization implements $ReflectionBasedSerialization$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReflectionBasedSerialization$$Type = ($ReflectionBasedSerialization);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReflectionBasedSerialization$$Original = $ReflectionBasedSerialization;}
