declare module "java.security.cert.Certificate" {
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Provider$$Type} from "java.security.Provider"
import {$PublicKey, $PublicKey$$Type} from "java.security.PublicKey"

export class $Certificate implements $Serializable$$Interface {
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getType"(): StringJS
public "getEncoded"(): (byte)[]
public "verify"(arg0: $PublicKey$$Type): void
public "verify"(arg0: $PublicKey$$Type, arg1: StringJS): void
public "verify"(arg0: $PublicKey$$Type, arg1: $Provider$$Type): void
public "getPublicKey"(): $PublicKey
get "type"(): StringJS
get "encoded"(): (byte)[]
get "publicKey"(): $PublicKey
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Certificate$$Type = ($Certificate);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Certificate$$Original = $Certificate;}
declare module "java.security.cert.CertPath" {
import {$Iterator} from "java.util.Iterator"
import {$Certificate} from "java.security.cert.Certificate"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$List} from "java.util.List"

export class $CertPath implements $Serializable$$Interface {
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getCertificates"(): $List<($Certificate)>
public "getType"(): StringJS
public "getEncoded"(arg0: StringJS): (byte)[]
public "getEncoded"(): (byte)[]
public "getEncodings"(): $Iterator<(StringJS)>
get "certificates"(): $List<($Certificate)>
get "type"(): StringJS
get "encoded"(): (byte)[]
get "encodings"(): $Iterator<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CertPath$$Type = ($CertPath);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CertPath$$Original = $CertPath;}
