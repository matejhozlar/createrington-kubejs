declare module "javax.security.auth.Subject" {
import {$PrivilegedAction$$Type} from "java.security.PrivilegedAction"
import {$Principal, $Principal$$Type} from "java.security.Principal"
import {$Callable$$Type} from "java.util.concurrent.Callable"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$PrivilegedExceptionAction$$Type} from "java.security.PrivilegedExceptionAction"
import {$AccessControlContext$$Type} from "java.security.AccessControlContext"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Class$$Type} from "java.lang.Class"

export class $Subject implements $Serializable$$Interface {
constructor()
constructor(arg0: boolean, arg1: $Set$$Type<($Principal$$Type)>, arg2: $Set$$Type<(never)>, arg3: $Set$$Type<(never)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "setReadOnly"(): void
public "getPrincipals"(): $Set<($Principal)>
public "getPrincipals"<T extends $Principal>(arg0: $Class$$Type<(T)>): $Set<(T)>
public static "current"(): $Subject
public "isReadOnly"(): boolean
/**
 * 
 * @deprecated
 */
public static "getSubject"(arg0: $AccessControlContext$$Type): $Subject
/**
 * 
 * @deprecated
 */
public static "doAs"<T>(arg0: $Subject$$Type, arg1: $PrivilegedAction$$Type<(T)>): T
/**
 * 
 * @deprecated
 */
public static "doAs"<T>(arg0: $Subject$$Type, arg1: $PrivilegedExceptionAction$$Type<(T)>): T
public static "callAs"<T>(arg0: $Subject$$Type, arg1: $Callable$$Type<(T)>): T
/**
 * 
 * @deprecated
 */
public static "doAsPrivileged"<T>(arg0: $Subject$$Type, arg1: $PrivilegedAction$$Type<(T)>, arg2: $AccessControlContext$$Type): T
/**
 * 
 * @deprecated
 */
public static "doAsPrivileged"<T>(arg0: $Subject$$Type, arg1: $PrivilegedExceptionAction$$Type<(T)>, arg2: $AccessControlContext$$Type): T
public "getPublicCredentials"(): $Set<(any)>
public "getPublicCredentials"<T>(arg0: $Class$$Type<(T)>): $Set<(T)>
public "getPrivateCredentials"(): $Set<(any)>
public "getPrivateCredentials"<T>(arg0: $Class$$Type<(T)>): $Set<(T)>
get "readOnly"(): void
get "principals"(): $Set<($Principal)>
get "readOnly"(): boolean
get "publicCredentials"(): $Set<(any)>
get "privateCredentials"(): $Set<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Subject$$Type = ($Subject);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Subject$$Original = $Subject;}
declare module "javax.security.auth.Destroyable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Destroyable$$Interface {
get "destroyed"(): boolean
}

export class $Destroyable implements $Destroyable$$Interface {
 "isDestroyed"(): boolean
 "destroy"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Destroyable$$Type = ($Destroyable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Destroyable$$Original = $Destroyable;}
