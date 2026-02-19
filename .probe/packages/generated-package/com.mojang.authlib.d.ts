declare module "com.mojang.authlib.ProfileLookupCallback" {
import {$Exception$$Type} from "java.lang.Exception"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"

export interface $ProfileLookupCallback$$Interface {
}

export class $ProfileLookupCallback implements $ProfileLookupCallback$$Interface {
 "onProfileLookupFailed"(arg0: StringJS, arg1: $Exception$$Type): void
 "onProfileLookupSucceeded"(arg0: $GameProfile$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProfileLookupCallback$$Type = ($ProfileLookupCallback);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProfileLookupCallback$$Original = $ProfileLookupCallback;}
declare module "com.mojang.authlib.HttpAuthenticationService" {
import {$Proxy} from "java.net.Proxy"
import {$Map$$Type} from "java.util.Map"
import {$AuthenticationService$$Interface} from "com.mojang.authlib.AuthenticationService"
import {$URL, $URL$$Type} from "java.net.URL"
import {$MinecraftSessionService} from "com.mojang.authlib.minecraft.MinecraftSessionService"
import {$GameProfileRepository} from "com.mojang.authlib.GameProfileRepository"

export class $HttpAuthenticationService implements $AuthenticationService$$Interface {
public static "buildQuery"(arg0: $Map$$Type<(StringJS), (any)>): StringJS
public "getProxy"(): $Proxy
public static "constantURL"(arg0: StringJS): $URL
public static "concatenateURL"(arg0: $URL$$Type, arg1: StringJS): $URL
public "createProfileRepository"(): $GameProfileRepository
public "createMinecraftSessionService"(): $MinecraftSessionService
get "proxy"(): $Proxy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HttpAuthenticationService$$Type = ($HttpAuthenticationService);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HttpAuthenticationService$$Original = $HttpAuthenticationService;}
declare module "com.mojang.authlib.GameProfileRepository" {
import {$ProfileLookupCallback, $ProfileLookupCallback$$Type} from "com.mojang.authlib.ProfileLookupCallback"

export interface $GameProfileRepository$$Interface {

(arg0: (StringJS)[], arg1: $ProfileLookupCallback): void
}

export class $GameProfileRepository implements $GameProfileRepository$$Interface {
 "findProfilesByNames"(arg0: (StringJS)[], arg1: $ProfileLookupCallback$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameProfileRepository$$Type = ((arg0: (StringJS)[], arg1: $ProfileLookupCallback) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GameProfileRepository$$Original = $GameProfileRepository;}
declare module "com.mojang.authlib.AuthenticationService" {
import {$MinecraftSessionService} from "com.mojang.authlib.minecraft.MinecraftSessionService"
import {$GameProfileRepository} from "com.mojang.authlib.GameProfileRepository"

export interface $AuthenticationService$$Interface {
}

export class $AuthenticationService implements $AuthenticationService$$Interface {
 "createProfileRepository"(): $GameProfileRepository
 "createMinecraftSessionService"(): $MinecraftSessionService
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AuthenticationService$$Type = ($AuthenticationService);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AuthenticationService$$Original = $AuthenticationService;}
declare module "com.mojang.authlib.SignatureState" {
import {$Enum} from "java.lang.Enum"

export class $SignatureState extends $Enum<($SignatureState)> {
static readonly "SIGNED": $SignatureState
static readonly "UNSIGNED": $SignatureState
static readonly "INVALID": $SignatureState

public static "values"(): ($SignatureState)[]
public static "valueOf"(arg0: StringJS): $SignatureState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignatureState$$Type = (("unsigned") | ("invalid") | ("signed"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SignatureState$$Original = $SignatureState;}
declare module "com.mojang.authlib.GameProfile" {
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$PropertyMap} from "com.mojang.authlib.properties.PropertyMap"

export class $GameProfile {
constructor(arg0: $UUID$$Type, arg1: StringJS)

public "getName"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getProperties"(): $PropertyMap
public "getId"(): $UUID
get "name"(): StringJS
get "properties"(): $PropertyMap
get "id"(): $UUID
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameProfile$$Type = ($GameProfile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GameProfile$$Original = $GameProfile;}
declare module "com.mojang.authlib.Environment" {
import {$Record} from "java.lang.Record"

export class $Environment extends $Record {
constructor(sessionHost: StringJS, servicesHost: StringJS, name: StringJS)

public "name"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "servicesHost"(): StringJS
public "sessionHost"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Environment$$Type = ({"sessionHost"?: StringJS, "name"?: StringJS, "servicesHost"?: StringJS}) | ([sessionHost?: StringJS, name?: StringJS, servicesHost?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Environment$$Original = $Environment;}
