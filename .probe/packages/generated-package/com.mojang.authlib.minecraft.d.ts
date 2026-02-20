declare module "com.mojang.authlib.minecraft.report.AbuseReport" {
import {$ReportedEntity, $ReportedEntity$$Type} from "com.mojang.authlib.minecraft.report.ReportedEntity"
import {$ReportEvidence, $ReportEvidence$$Type} from "com.mojang.authlib.minecraft.report.ReportEvidence"
import {$Instant, $Instant$$Type} from "java.time.Instant"
import {$Record} from "java.lang.Record"

export class $AbuseReport extends $Record {
constructor(opinionComments: StringJS, reason: StringJS, evidence: $ReportEvidence$$Type, skinUrl: StringJS, reportedEntity: $ReportedEntity$$Type, createdTime: $Instant$$Type)

public "evidence"(): $ReportEvidence
public static "name"(arg0: StringJS, arg1: $ReportedEntity$$Type, arg2: $Instant$$Type): $AbuseReport
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "reason"(): StringJS
public "skinUrl"(): StringJS
public static "chat"(arg0: StringJS, arg1: StringJS, arg2: $ReportEvidence$$Type, arg3: $ReportedEntity$$Type, arg4: $Instant$$Type): $AbuseReport
public "createdTime"(): $Instant
public static "skin"(arg0: StringJS, arg1: StringJS, arg2: StringJS, arg3: $ReportedEntity$$Type, arg4: $Instant$$Type): $AbuseReport
public "opinionComments"(): StringJS
public "reportedEntity"(): $ReportedEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbuseReport$$Type = ({"createdTime"?: $Instant$$Type, "opinionComments"?: StringJS, "skinUrl"?: StringJS, "reason"?: StringJS, "evidence"?: $ReportEvidence$$Type, "reportedEntity"?: $ReportedEntity$$Type}) | ([createdTime?: $Instant$$Type, opinionComments?: StringJS, skinUrl?: StringJS, reason?: StringJS, evidence?: $ReportEvidence$$Type, reportedEntity?: $ReportedEntity$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbuseReport$$Original = $AbuseReport;}
declare module "com.mojang.authlib.minecraft.MinecraftProfileTextures" {
import {$MinecraftProfileTexture, $MinecraftProfileTexture$$Type} from "com.mojang.authlib.minecraft.MinecraftProfileTexture"
import {$SignatureState, $SignatureState$$Type} from "com.mojang.authlib.SignatureState"
import {$Record} from "java.lang.Record"

export class $MinecraftProfileTextures extends $Record {
static readonly "EMPTY": $MinecraftProfileTextures

constructor(skin: $MinecraftProfileTexture$$Type, cape: $MinecraftProfileTexture$$Type, elytra: $MinecraftProfileTexture$$Type, signatureState: $SignatureState$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "elytra"(): $MinecraftProfileTexture
public "cape"(): $MinecraftProfileTexture
public "skin"(): $MinecraftProfileTexture
public "signatureState"(): $SignatureState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftProfileTextures$$Type = ({"cape"?: $MinecraftProfileTexture$$Type, "signatureState"?: $SignatureState$$Type, "elytra"?: $MinecraftProfileTexture$$Type, "skin"?: $MinecraftProfileTexture$$Type}) | ([cape?: $MinecraftProfileTexture$$Type, signatureState?: $SignatureState$$Type, elytra?: $MinecraftProfileTexture$$Type, skin?: $MinecraftProfileTexture$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinecraftProfileTextures$$Original = $MinecraftProfileTextures;}
declare module "com.mojang.authlib.minecraft.report.ReportChatMessage" {
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$Instant, $Instant$$Type} from "java.time.Instant"
import {$Record} from "java.lang.Record"

export class $ReportChatMessage extends $Record {
constructor(index: integer, profileId: $UUID$$Type, sessionId: $UUID$$Type, timestamp: $Instant$$Type, salt: long, lastSeen: $List$$Type<($ByteBuffer$$Type)>, message: StringJS, signature: $ByteBuffer$$Type, messageReported: boolean)

public "salt"(): long
public "signature"(): $ByteBuffer
public "index"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "message"(): StringJS
public "timestamp"(): $Instant
public "profileId"(): $UUID
public "sessionId"(): $UUID
public "lastSeen"(): $List<($ByteBuffer)>
public "messageReported"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReportChatMessage$$Type = ({"message"?: StringJS, "index"?: integer, "lastSeen"?: $List$$Type<($ByteBuffer$$Type)>, "profileId"?: $UUID$$Type, "timestamp"?: $Instant$$Type, "signature"?: $ByteBuffer$$Type, "sessionId"?: $UUID$$Type, "messageReported"?: boolean, "salt"?: long}) | ([message?: StringJS, index?: integer, lastSeen?: $List$$Type<($ByteBuffer$$Type)>, profileId?: $UUID$$Type, timestamp?: $Instant$$Type, signature?: $ByteBuffer$$Type, sessionId?: $UUID$$Type, messageReported?: boolean, salt?: long]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReportChatMessage$$Original = $ReportChatMessage;}
declare module "com.mojang.authlib.minecraft.MinecraftProfileTexture$Type" {
import {$Enum} from "java.lang.Enum"

export class $MinecraftProfileTexture$Type extends $Enum<($MinecraftProfileTexture$Type)> {
static readonly "ELYTRA": $MinecraftProfileTexture$Type
static readonly "SKIN": $MinecraftProfileTexture$Type
static readonly "CAPE": $MinecraftProfileTexture$Type

public static "values"(): ($MinecraftProfileTexture$Type)[]
public static "valueOf"(arg0: StringJS): $MinecraftProfileTexture$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftProfileTexture$Type$$Type = (("skin") | ("cape") | ("elytra"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinecraftProfileTexture$Type$$Original = $MinecraftProfileTexture$Type;}
declare module "com.mojang.authlib.minecraft.report.ReportedEntity" {
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Record} from "java.lang.Record"

export class $ReportedEntity extends $Record {
constructor(profileId: $UUID$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "profileId"(): $UUID
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReportedEntity$$Type = ({"profileId"?: $UUID$$Type}) | ([profileId?: $UUID$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReportedEntity$$Original = $ReportedEntity;}
declare module "com.mojang.authlib.minecraft.UserApiService$UserFlag" {
import {$Enum} from "java.lang.Enum"

export class $UserApiService$UserFlag extends $Enum<($UserApiService$UserFlag)> {
static readonly "CHAT_ALLOWED": $UserApiService$UserFlag
static readonly "TELEMETRY_ENABLED": $UserApiService$UserFlag
static readonly "OPTIONAL_TELEMETRY_AVAILABLE": $UserApiService$UserFlag
static readonly "REALMS_ALLOWED": $UserApiService$UserFlag
static readonly "PROFANITY_FILTER_ENABLED": $UserApiService$UserFlag
static readonly "SERVERS_ALLOWED": $UserApiService$UserFlag

public static "values"(): ($UserApiService$UserFlag)[]
public static "valueOf"(arg0: StringJS): $UserApiService$UserFlag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UserApiService$UserFlag$$Type = (("servers_allowed") | ("realms_allowed") | ("chat_allowed") | ("telemetry_enabled") | ("profanity_filter_enabled") | ("optional_telemetry_available"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UserApiService$UserFlag$$Original = $UserApiService$UserFlag;}
declare module "com.mojang.authlib.minecraft.BanDetails" {
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Instant, $Instant$$Type} from "java.time.Instant"
import {$Record} from "java.lang.Record"

export class $BanDetails extends $Record {
static readonly "MULTIPLAYER_SCOPE": StringJS

constructor(id: $UUID$$Type, expires: $Instant$$Type, reason: StringJS, reasonMessage: StringJS)

public "expires"(): $Instant
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): $UUID
public "reason"(): StringJS
public "reasonMessage"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BanDetails$$Type = ({"reasonMessage"?: StringJS, "id"?: $UUID$$Type, "expires"?: $Instant$$Type, "reason"?: StringJS}) | ([reasonMessage?: StringJS, id?: $UUID$$Type, expires?: $Instant$$Type, reason?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BanDetails$$Original = $BanDetails;}
declare module "com.mojang.authlib.minecraft.TelemetryPropertyContainer" {
import {$JsonObject$$Type} from "com.google.gson.JsonObject"

export interface $TelemetryPropertyContainer$$Interface {
}

export class $TelemetryPropertyContainer implements $TelemetryPropertyContainer$$Interface {
static "forJsonObject"(arg0: $JsonObject$$Type): $TelemetryPropertyContainer
 "addNullProperty"(arg0: StringJS): void
 "addProperty"(arg0: StringJS, arg1: StringJS): void
 "addProperty"(arg0: StringJS, arg1: boolean): void
 "addProperty"(arg0: StringJS, arg1: long): void
 "addProperty"(arg0: StringJS, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TelemetryPropertyContainer$$Type = ($TelemetryPropertyContainer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TelemetryPropertyContainer$$Original = $TelemetryPropertyContainer;}
declare module "com.mojang.authlib.minecraft.UserApiService" {
import {$AbuseReportRequest$$Type} from "com.mojang.authlib.yggdrasil.request.AbuseReportRequest"
import {$UUID$$Type} from "java.util.UUID"
import {$UserApiService$UserProperties} from "com.mojang.authlib.minecraft.UserApiService$UserProperties"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$TelemetrySession} from "com.mojang.authlib.minecraft.TelemetrySession"
import {$KeyPairResponse} from "com.mojang.authlib.yggdrasil.response.KeyPairResponse"
import {$AbuseReportLimits} from "com.mojang.authlib.minecraft.report.AbuseReportLimits"

export interface $UserApiService$$Interface {
get "abuseReportLimits"(): $AbuseReportLimits
get "keyPair"(): $KeyPairResponse
}

export class $UserApiService implements $UserApiService$$Interface {
static readonly "OFFLINE_PROPERTIES": $UserApiService$UserProperties
static readonly "OFFLINE": $UserApiService

 "newTelemetrySession"(arg0: $Executor$$Type): $TelemetrySession
 "getAbuseReportLimits"(): $AbuseReportLimits
 "refreshBlockList"(): void
 "reportAbuse"(arg0: $AbuseReportRequest$$Type): void
 "isBlockedPlayer"(arg0: $UUID$$Type): boolean
 "canSendReports"(): boolean
 "fetchProperties"(): $UserApiService$UserProperties
 "getKeyPair"(): $KeyPairResponse
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UserApiService$$Type = ($UserApiService);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UserApiService$$Original = $UserApiService;}
declare module "com.mojang.authlib.minecraft.UserApiService$UserProperties" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$UserApiService$UserFlag, $UserApiService$UserFlag$$Type} from "com.mojang.authlib.minecraft.UserApiService$UserFlag"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BanDetails, $BanDetails$$Type} from "com.mojang.authlib.minecraft.BanDetails"
import {$Record} from "java.lang.Record"

export class $UserApiService$UserProperties extends $Record {
constructor(flags: $Set$$Type<($UserApiService$UserFlag$$Type)>, bannedScopes: $Map$$Type<(StringJS), ($BanDetails$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "flags"(): $Set<($UserApiService$UserFlag)>
public "hashCode"(): integer
public "flag"(arg0: $UserApiService$UserFlag$$Type): boolean
public "bannedScopes"(): $Map<(StringJS), ($BanDetails)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UserApiService$UserProperties$$Type = ({"bannedScopes"?: $Map$$Type<(StringJS), ($BanDetails$$Type)>, "flags"?: $Set$$Type<($UserApiService$UserFlag$$Type)>}) | ([bannedScopes?: $Map$$Type<(StringJS), ($BanDetails$$Type)>, flags?: $Set$$Type<($UserApiService$UserFlag$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UserApiService$UserProperties$$Original = $UserApiService$UserProperties;}
declare module "com.mojang.authlib.minecraft.TelemetrySession" {
import {$TelemetryEvent} from "com.mojang.authlib.minecraft.TelemetryEvent"

export interface $TelemetrySession$$Interface {
get "enabled"(): boolean
}

export class $TelemetrySession implements $TelemetrySession$$Interface {
static readonly "DISABLED": $TelemetrySession

 "isEnabled"(): boolean
 "createNewEvent"(arg0: StringJS): $TelemetryEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TelemetrySession$$Type = ($TelemetrySession);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TelemetrySession$$Original = $TelemetrySession;}
declare module "com.mojang.authlib.minecraft.MinecraftProfileTexture" {
import {$Map$$Type} from "java.util.Map"

export class $MinecraftProfileTexture {
static readonly "PROFILE_TEXTURE_COUNT": integer

constructor(arg0: StringJS, arg1: $Map$$Type<(StringJS), (StringJS)>)

public "toString"(): StringJS
public "getUrl"(): StringJS
public "getMetadata"(arg0: StringJS): StringJS
public "getHash"(): StringJS
get "url"(): StringJS
get "hash"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftProfileTexture$$Type = ($MinecraftProfileTexture);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinecraftProfileTexture$$Original = $MinecraftProfileTexture;}
declare module "com.mojang.authlib.minecraft.report.ReportEvidence" {
import {$ReportChatMessage, $ReportChatMessage$$Type} from "com.mojang.authlib.minecraft.report.ReportChatMessage"
import {$List, $List$$Type} from "java.util.List"
import {$Record} from "java.lang.Record"

export class $ReportEvidence extends $Record {
constructor(messages: $List$$Type<($ReportChatMessage$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "messages"(): $List<($ReportChatMessage)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReportEvidence$$Type = ({"messages"?: $List$$Type<($ReportChatMessage$$Type)>}) | ([messages?: $List$$Type<($ReportChatMessage$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReportEvidence$$Original = $ReportEvidence;}
declare module "com.mojang.authlib.minecraft.report.AbuseReportLimits" {
import {$Record} from "java.lang.Record"

export class $AbuseReportLimits extends $Record {
static readonly "DEFAULTS": $AbuseReportLimits

constructor(maxOpinionCommentsLength: integer, maxReportedMessageCount: integer, maxEvidenceMessageCount: integer, leadingContextMessageCount: integer, trailingContextMessageCount: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "maxOpinionCommentsLength"(): integer
public "maxReportedMessageCount"(): integer
public "leadingContextMessageCount"(): integer
public "trailingContextMessageCount"(): integer
public "maxEvidenceMessageCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbuseReportLimits$$Type = ({"leadingContextMessageCount"?: integer, "trailingContextMessageCount"?: integer, "maxOpinionCommentsLength"?: integer, "maxReportedMessageCount"?: integer, "maxEvidenceMessageCount"?: integer}) | ([leadingContextMessageCount?: integer, trailingContextMessageCount?: integer, maxOpinionCommentsLength?: integer, maxReportedMessageCount?: integer, maxEvidenceMessageCount?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbuseReportLimits$$Original = $AbuseReportLimits;}
declare module "com.mojang.authlib.minecraft.TelemetryEvent" {
import {$TelemetryPropertyContainer, $TelemetryPropertyContainer$$Interface} from "com.mojang.authlib.minecraft.TelemetryPropertyContainer"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"

export interface $TelemetryEvent$$Interface extends $TelemetryPropertyContainer$$Interface {
}

export class $TelemetryEvent implements $TelemetryEvent$$Interface {
static readonly "EMPTY": $TelemetryEvent

 "send"(): void
static "forJsonObject"(arg0: $JsonObject$$Type): $TelemetryPropertyContainer
 "addNullProperty"(arg0: StringJS): void
 "addProperty"(arg0: StringJS, arg1: StringJS): void
 "addProperty"(arg0: StringJS, arg1: boolean): void
 "addProperty"(arg0: StringJS, arg1: long): void
 "addProperty"(arg0: StringJS, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TelemetryEvent$$Type = ($TelemetryEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TelemetryEvent$$Original = $TelemetryEvent;}
declare module "com.mojang.authlib.minecraft.MinecraftSessionService" {
import {$UUID$$Type} from "java.util.UUID"
import {$InetAddress$$Type} from "java.net.InetAddress"
import {$MinecraftProfileTextures} from "com.mojang.authlib.minecraft.MinecraftProfileTextures"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$Property, $Property$$Type} from "com.mojang.authlib.properties.Property"
import {$ProfileResult} from "com.mojang.authlib.yggdrasil.ProfileResult"

export interface $MinecraftSessionService$$Interface {
}

export class $MinecraftSessionService implements $MinecraftSessionService$$Interface {
 "getSecurePropertyValue"(arg0: $Property$$Type): StringJS
 "getPackedTextures"(arg0: $GameProfile$$Type): $Property
 "unpackTextures"(arg0: $Property$$Type): $MinecraftProfileTextures
 "hasJoinedServer"(arg0: StringJS, arg1: StringJS, arg2: $InetAddress$$Type): $ProfileResult
 "fetchProfile"(arg0: $UUID$$Type, arg1: boolean): $ProfileResult
 "getTextures"(arg0: $GameProfile$$Type): $MinecraftProfileTextures
 "joinServer"(arg0: $UUID$$Type, arg1: StringJS, arg2: StringJS): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftSessionService$$Type = ($MinecraftSessionService);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinecraftSessionService$$Original = $MinecraftSessionService;}
