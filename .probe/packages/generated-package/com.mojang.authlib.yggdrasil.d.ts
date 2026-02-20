declare module "com.mojang.authlib.yggdrasil.YggdrasilAuthenticationService" {
import {$HttpAuthenticationService} from "com.mojang.authlib.HttpAuthenticationService"
import {$Proxy$$Type} from "java.net.Proxy"
import {$UserApiService} from "com.mojang.authlib.minecraft.UserApiService"
import {$ServicesKeySet} from "com.mojang.authlib.yggdrasil.ServicesKeySet"
import {$Environment$$Type} from "com.mojang.authlib.Environment"
import {$MinecraftSessionService} from "com.mojang.authlib.minecraft.MinecraftSessionService"
import {$GameProfileRepository} from "com.mojang.authlib.GameProfileRepository"

export class $YggdrasilAuthenticationService extends $HttpAuthenticationService {
constructor(arg0: $Proxy$$Type)
constructor(arg0: $Proxy$$Type, arg1: $Environment$$Type)

public "getServicesKeySet"(): $ServicesKeySet
public "createProfileRepository"(): $GameProfileRepository
public "createMinecraftSessionService"(): $MinecraftSessionService
public "createUserApiService"(arg0: StringJS): $UserApiService
get "servicesKeySet"(): $ServicesKeySet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $YggdrasilAuthenticationService$$Type = ($YggdrasilAuthenticationService);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $YggdrasilAuthenticationService$$Original = $YggdrasilAuthenticationService;}
declare module "com.mojang.authlib.yggdrasil.ServicesKeyType" {
import {$Enum} from "java.lang.Enum"

export class $ServicesKeyType extends $Enum<($ServicesKeyType)> {
static readonly "PROFILE_KEY": $ServicesKeyType
static readonly "PROFILE_PROPERTY": $ServicesKeyType

public static "values"(): ($ServicesKeyType)[]
public static "valueOf"(arg0: StringJS): $ServicesKeyType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServicesKeyType$$Type = (("profile_property") | ("profile_key"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServicesKeyType$$Original = $ServicesKeyType;}
declare module "com.mojang.authlib.yggdrasil.response.KeyPairResponse$KeyPair" {
import {$Record} from "java.lang.Record"

export class $KeyPairResponse$KeyPair extends $Record {
constructor(privateKey: StringJS, publicKey: StringJS)

public "publicKey"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "privateKey"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyPairResponse$KeyPair$$Type = ({"privateKey"?: StringJS, "publicKey"?: StringJS}) | ([privateKey?: StringJS, publicKey?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyPairResponse$KeyPair$$Original = $KeyPairResponse$KeyPair;}
declare module "com.mojang.authlib.yggdrasil.ProfileResult" {
import {$ProfileActionType, $ProfileActionType$$Type} from "com.mojang.authlib.yggdrasil.ProfileActionType"
import {$Set, $Set$$Type} from "java.util.Set"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$Record} from "java.lang.Record"

export class $ProfileResult extends $Record {
constructor(arg0: $GameProfile$$Type)
constructor(profile: $GameProfile$$Type, actions: $Set$$Type<($ProfileActionType$$Type)>)

public "profile"(): $GameProfile
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "actions"(): $Set<($ProfileActionType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProfileResult$$Type = ({"profile"?: $GameProfile$$Type, "actions"?: $Set$$Type<($ProfileActionType$$Type)>}) | ([profile?: $GameProfile$$Type, actions?: $Set$$Type<($ProfileActionType$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProfileResult$$Original = $ProfileResult;}
declare module "com.mojang.authlib.yggdrasil.request.AbuseReportRequest$RealmInfo" {
import {$Record} from "java.lang.Record"

export class $AbuseReportRequest$RealmInfo extends $Record {
constructor(realmId: StringJS, slotId: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "slotId"(): integer
public "realmId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbuseReportRequest$RealmInfo$$Type = ({"slotId"?: integer, "realmId"?: StringJS}) | ([slotId?: integer, realmId?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbuseReportRequest$RealmInfo$$Original = $AbuseReportRequest$RealmInfo;}
declare module "com.mojang.authlib.yggdrasil.request.AbuseReportRequest$ClientInfo" {
import {$Record} from "java.lang.Record"

export class $AbuseReportRequest$ClientInfo extends $Record {
constructor(clientVersion: StringJS, locale: StringJS)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "locale"(): StringJS
public "clientVersion"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbuseReportRequest$ClientInfo$$Type = ({"clientVersion"?: StringJS, "locale"?: StringJS}) | ([clientVersion?: StringJS, locale?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbuseReportRequest$ClientInfo$$Original = $AbuseReportRequest$ClientInfo;}
declare module "com.mojang.authlib.yggdrasil.request.AbuseReportRequest$ThirdPartyServerInfo" {
import {$Record} from "java.lang.Record"

export class $AbuseReportRequest$ThirdPartyServerInfo extends $Record {
constructor(address: StringJS)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "address"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbuseReportRequest$ThirdPartyServerInfo$$Type = ({"address"?: StringJS}) | ([address?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbuseReportRequest$ThirdPartyServerInfo$$Original = $AbuseReportRequest$ThirdPartyServerInfo;}
declare module "com.mojang.authlib.yggdrasil.ProfileActionType" {
import {$Enum} from "java.lang.Enum"

export class $ProfileActionType extends $Enum<($ProfileActionType)> {
static readonly "USING_BANNED_SKIN": $ProfileActionType
static readonly "FORCED_NAME_CHANGE": $ProfileActionType

public static "values"(): ($ProfileActionType)[]
public static "valueOf"(arg0: StringJS): $ProfileActionType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProfileActionType$$Type = (("forced_name_change") | ("using_banned_skin"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProfileActionType$$Original = $ProfileActionType;}
declare module "com.mojang.authlib.yggdrasil.request.AbuseReportRequest" {
import {$AbuseReport, $AbuseReport$$Type} from "com.mojang.authlib.minecraft.report.AbuseReport"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$AbuseReportRequest$ClientInfo, $AbuseReportRequest$ClientInfo$$Type} from "com.mojang.authlib.yggdrasil.request.AbuseReportRequest$ClientInfo"
import {$AbuseReportRequest$RealmInfo, $AbuseReportRequest$RealmInfo$$Type} from "com.mojang.authlib.yggdrasil.request.AbuseReportRequest$RealmInfo"
import {$AbuseReportRequest$ThirdPartyServerInfo, $AbuseReportRequest$ThirdPartyServerInfo$$Type} from "com.mojang.authlib.yggdrasil.request.AbuseReportRequest$ThirdPartyServerInfo"
import {$Record} from "java.lang.Record"

export class $AbuseReportRequest extends $Record {
constructor(version: integer, id: $UUID$$Type, report: $AbuseReport$$Type, clientInfo: $AbuseReportRequest$ClientInfo$$Type, thirdPartyServerInfo: $AbuseReportRequest$ThirdPartyServerInfo$$Type, realmInfo: $AbuseReportRequest$RealmInfo$$Type, reportType: StringJS)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "version"(): integer
public "hashCode"(): integer
public "id"(): $UUID
public "realmInfo"(): $AbuseReportRequest$RealmInfo
public "report"(): $AbuseReport
public "reportType"(): StringJS
public "thirdPartyServerInfo"(): $AbuseReportRequest$ThirdPartyServerInfo
public "clientInfo"(): $AbuseReportRequest$ClientInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbuseReportRequest$$Type = ({"thirdPartyServerInfo"?: $AbuseReportRequest$ThirdPartyServerInfo$$Type, "clientInfo"?: $AbuseReportRequest$ClientInfo$$Type, "reportType"?: StringJS, "version"?: integer, "report"?: $AbuseReport$$Type, "id"?: $UUID$$Type, "realmInfo"?: $AbuseReportRequest$RealmInfo$$Type}) | ([thirdPartyServerInfo?: $AbuseReportRequest$ThirdPartyServerInfo$$Type, clientInfo?: $AbuseReportRequest$ClientInfo$$Type, reportType?: StringJS, version?: integer, report?: $AbuseReport$$Type, id?: $UUID$$Type, realmInfo?: $AbuseReportRequest$RealmInfo$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbuseReportRequest$$Original = $AbuseReportRequest;}
declare module "com.mojang.authlib.yggdrasil.response.KeyPairResponse" {
import {$KeyPairResponse$KeyPair, $KeyPairResponse$KeyPair$$Type} from "com.mojang.authlib.yggdrasil.response.KeyPairResponse$KeyPair"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$Record} from "java.lang.Record"

export class $KeyPairResponse extends $Record {
constructor(keyPair: $KeyPairResponse$KeyPair$$Type, publicKeySignature: $ByteBuffer$$Type, expiresAt: StringJS, refreshedAfter: StringJS)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "expiresAt"(): StringJS
public "keyPair"(): $KeyPairResponse$KeyPair
public "refreshedAfter"(): StringJS
public "publicKeySignature"(): $ByteBuffer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyPairResponse$$Type = ({"publicKeySignature"?: $ByteBuffer$$Type, "refreshedAfter"?: StringJS, "keyPair"?: $KeyPairResponse$KeyPair$$Type, "expiresAt"?: StringJS}) | ([publicKeySignature?: $ByteBuffer$$Type, refreshedAfter?: StringJS, keyPair?: $KeyPairResponse$KeyPair$$Type, expiresAt?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyPairResponse$$Original = $KeyPairResponse;}
declare module "com.mojang.authlib.yggdrasil.ServicesKeyInfo" {
import {$Signature} from "java.security.Signature"
import {$Property$$Type} from "com.mojang.authlib.properties.Property"

export interface $ServicesKeyInfo$$Interface {
}

export class $ServicesKeyInfo implements $ServicesKeyInfo$$Interface {
 "signature"(): $Signature
 "validateProperty"(arg0: $Property$$Type): boolean
 "keyBitCount"(): integer
 "signatureBitCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServicesKeyInfo$$Type = ($ServicesKeyInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServicesKeyInfo$$Original = $ServicesKeyInfo;}
declare module "com.mojang.authlib.yggdrasil.ServicesKeySet" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ServicesKeyType, $ServicesKeyType$$Type} from "com.mojang.authlib.yggdrasil.ServicesKeyType"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$ServicesKeyInfo, $ServicesKeyInfo$$Type} from "com.mojang.authlib.yggdrasil.ServicesKeyInfo"

export interface $ServicesKeySet$$Interface {

(arg0: $ServicesKeyType): $Collection$$Type<($ServicesKeyInfo$$Type)>
}

export class $ServicesKeySet implements $ServicesKeySet$$Interface {
static readonly "EMPTY": $ServicesKeySet

 "keys"(arg0: $ServicesKeyType$$Type): $Collection<($ServicesKeyInfo)>
static "lazy"(arg0: $Supplier$$Type<($ServicesKeySet$$Type)>): $ServicesKeySet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServicesKeySet$$Type = ((arg0: $ServicesKeyType) => $Collection$$Type<($ServicesKeyInfo$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServicesKeySet$$Original = $ServicesKeySet;}
