declare module "com.mojang.authlib.properties.PropertyMap" {
import {$Property} from "com.mojang.authlib.properties.Property"
import {$ForwardingMultimap} from "com.google.common.collect.ForwardingMultimap"

export class $PropertyMap extends $ForwardingMultimap<(StringJS), ($Property)> {
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PropertyMap$$Type = ($PropertyMap);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PropertyMap$$Original = $PropertyMap;}
declare module "com.mojang.authlib.properties.Property" {
import {$PublicKey$$Type} from "java.security.PublicKey"
import {$Record} from "java.lang.Record"

export class $Property extends $Record {
constructor(arg0: StringJS, arg1: StringJS)
constructor(name: StringJS, value: StringJS, signature: StringJS)

public "signature"(): StringJS
public "name"(): StringJS
public "value"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
/**
 * 
 * @deprecated
 */
public "isSignatureValid"(arg0: $PublicKey$$Type): boolean
public "hasSignature"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Property$$Type = ({"value"?: StringJS, "name"?: StringJS, "signature"?: StringJS}) | ([value?: StringJS, name?: StringJS, signature?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Property$$Original = $Property;}
