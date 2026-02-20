declare module "com.mojang.realmsclient.client.RealmsClient$Environment" {
import {$Optional} from "java.util.Optional"
import {$Enum} from "java.lang.Enum"

export class $RealmsClient$Environment extends $Enum<($RealmsClient$Environment)> {
readonly "baseUrl": StringJS
readonly "protocol": StringJS
static readonly "STAGE": $RealmsClient$Environment
static readonly "LOCAL": $RealmsClient$Environment
static readonly "PRODUCTION": $RealmsClient$Environment

public static "values"(): ($RealmsClient$Environment)[]
public static "valueOf"(arg0: StringJS): $RealmsClient$Environment
public static "byName"(arg0: StringJS): $Optional<($RealmsClient$Environment)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsClient$Environment$$Type = (("production") | ("stage") | ("local"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RealmsClient$Environment$$Original = $RealmsClient$Environment;}
declare module "com.mojang.realmsclient.client.RealmsClient$CompatibleVersionResponse" {
import {$Enum} from "java.lang.Enum"

export class $RealmsClient$CompatibleVersionResponse extends $Enum<($RealmsClient$CompatibleVersionResponse)> {
static readonly "OTHER": $RealmsClient$CompatibleVersionResponse
static readonly "COMPATIBLE": $RealmsClient$CompatibleVersionResponse
static readonly "OUTDATED": $RealmsClient$CompatibleVersionResponse

public static "values"(): ($RealmsClient$CompatibleVersionResponse)[]
public static "valueOf"(arg0: StringJS): $RealmsClient$CompatibleVersionResponse
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsClient$CompatibleVersionResponse$$Type = (("compatible") | ("outdated") | ("other"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RealmsClient$CompatibleVersionResponse$$Original = $RealmsClient$CompatibleVersionResponse;}
declare module "com.mojang.realmsclient.client.RealmsClient" {
import {$RealmsServerAddress} from "com.mojang.realmsclient.dto.RealmsServerAddress"
import {$BackupList} from "com.mojang.realmsclient.dto.BackupList"
import {$RealmsServer} from "com.mojang.realmsclient.dto.RealmsServer"
import {$UploadInfo} from "com.mojang.realmsclient.dto.UploadInfo"
import {$RealmsWorldOptions$$Type} from "com.mojang.realmsclient.dto.RealmsWorldOptions"
import {$WorldTemplatePaginatedList} from "com.mojang.realmsclient.dto.WorldTemplatePaginatedList"
import {$PendingInvitesList} from "com.mojang.realmsclient.dto.PendingInvitesList"
import {$UUID$$Type} from "java.util.UUID"
import {$Subscription} from "com.mojang.realmsclient.dto.Subscription"
import {$List, $List$$Type} from "java.util.List"
import {$RealmsClient$CompatibleVersionResponse} from "com.mojang.realmsclient.client.RealmsClient$CompatibleVersionResponse"
import {$WorldGenerationInfo$$Type} from "com.mojang.realmsclient.util.WorldGenerationInfo"
import {$RealmsServerList} from "com.mojang.realmsclient.dto.RealmsServerList"
import {$Ops} from "com.mojang.realmsclient.dto.Ops"
import {$RealmsClient$Environment} from "com.mojang.realmsclient.client.RealmsClient$Environment"
import {$RealmsNotification} from "com.mojang.realmsclient.dto.RealmsNotification"
import {$ServerActivityList} from "com.mojang.realmsclient.dto.ServerActivityList"
import {$WorldDownload} from "com.mojang.realmsclient.dto.WorldDownload"
import {$RealmsServerPlayerLists} from "com.mojang.realmsclient.dto.RealmsServerPlayerLists"
import {$RealmsNews} from "com.mojang.realmsclient.dto.RealmsNews"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$PingResult$$Type} from "com.mojang.realmsclient.dto.PingResult"
import {$RealmsServer$WorldType$$Type} from "com.mojang.realmsclient.dto.RealmsServer$WorldType"

export class $RealmsClient {
static readonly "ENVIRONMENT": $RealmsClient$Environment

constructor(arg0: StringJS, arg1: StringJS, arg2: $Minecraft$$Type)

public "update"(arg0: long, arg1: StringJS, arg2: StringJS): void
public "join"(arg0: long): $RealmsServerAddress
public "op"(arg0: long, arg1: $UUID$$Type): $Ops
public "close"(arg0: long): boolean
public "open"(arg0: long): boolean
public static "create"(): $RealmsClient
public static "create"(arg0: $Minecraft$$Type): $RealmsClient
public "listRealms"(): $RealmsServerList
public "getNews"(): $RealmsNews
public "resetWorldWithSeed"(arg0: long, arg1: $WorldGenerationInfo$$Type): boolean
public "pendingInvites"(): $PendingInvitesList
public "subscriptionFor"(arg0: long): $Subscription
public "getOwnRealm"(arg0: long): $RealmsServer
public "clientCompatible"(): $RealmsClient$CompatibleVersionResponse
public "uninviteMyselfFrom"(arg0: long): void
public "restoreWorld"(arg0: long, arg1: StringJS): void
public "initializeRealm"(arg0: long, arg1: StringJS, arg2: StringJS): void
public "hasParentalConsent"(): boolean
public "acceptInvitation"(arg0: StringJS): void
public "deleteRealm"(arg0: long): void
public "requestUploadInfo"(arg0: long, arg1: StringJS): $UploadInfo
public "rejectInvitation"(arg0: StringJS): void
public "getNotifications"(): $List<($RealmsNotification)>
public "getActivity"(arg0: long): $ServerActivityList
public "backupsFor"(arg0: long): $BackupList
public "deop"(arg0: long, arg1: $UUID$$Type): $Ops
public "switchSlot"(arg0: long, arg1: integer): boolean
public "uninvite"(arg0: long, arg1: $UUID$$Type): void
public "agreeToTos"(): void
public "sendPingResults"(arg0: $PingResult$$Type): void
public "notificationsSeen"(arg0: $List$$Type<($UUID$$Type)>): void
public "notificationsDismiss"(arg0: $List$$Type<($UUID$$Type)>): void
public "updateSlot"(arg0: long, arg1: integer, arg2: $RealmsWorldOptions$$Type): void
public "invite"(arg0: long, arg1: StringJS): $RealmsServer
public "trialAvailable"(): boolean
public "getLiveStats"(): $RealmsServerPlayerLists
public "createSnapshotRealm"(arg0: long): $RealmsServer
public "fetchWorldTemplates"(arg0: integer, arg1: integer, arg2: $RealmsServer$WorldType$$Type): $WorldTemplatePaginatedList
public "putIntoMinigameMode"(arg0: long, arg1: StringJS): boolean
public "resetWorldWithTemplate"(arg0: long, arg1: StringJS): boolean
public "requestDownloadInfo"(arg0: long, arg1: integer): $WorldDownload
public "listSnapshotEligibleRealms"(): $List<($RealmsServer)>
public "pendingInvitesCount"(): integer
get "news"(): $RealmsNews
get "notifications"(): $List<($RealmsNotification)>
get "liveStats"(): $RealmsServerPlayerLists
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsClient$$Type = ($RealmsClient);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RealmsClient$$Original = $RealmsClient;}
