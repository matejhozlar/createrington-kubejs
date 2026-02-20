declare module "java.security.Principal" {
import {$Subject$$Type} from "javax.security.auth.Subject"

export interface $Principal$$Interface {
get "name"(): StringJS
}

export class $Principal implements $Principal$$Interface {
 "getName"(): StringJS
 "equals"(arg0: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
 "implies"(arg0: $Subject$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Principal$$Type = ($Principal);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Principal$$Original = $Principal;}
declare module "java.security.PrivateKey" {
import {$Destroyable$$Interface} from "javax.security.auth.Destroyable"
import {$Key$$Interface} from "java.security.Key"

export interface $PrivateKey$$Interface extends $Key$$Interface, $Destroyable$$Interface {
get "encoded"(): (byte)[]
get "format"(): StringJS
get "algorithm"(): StringJS
get "destroyed"(): boolean
}

export class $PrivateKey implements $PrivateKey$$Interface {
/**
 * 
 * @deprecated
 */
static readonly "serialVersionUID": long

 "getEncoded"(): (byte)[]
 "getFormat"(): StringJS
 "getAlgorithm"(): StringJS
 "isDestroyed"(): boolean
 "destroy"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrivateKey$$Type = ($PrivateKey);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PrivateKey$$Original = $PrivateKey;}
declare module "java.security.Signature" {
import {$Certificate$$Type} from "java.security.cert.Certificate"
import {$PrivateKey$$Type} from "java.security.PrivateKey"
import {$Provider, $Provider$$Type} from "java.security.Provider"
import {$AlgorithmParameters} from "java.security.AlgorithmParameters"
import {$SecureRandom$$Type} from "java.security.SecureRandom"
import {$PublicKey$$Type} from "java.security.PublicKey"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$SignatureSpi} from "java.security.SignatureSpi"
import {$AlgorithmParameterSpec$$Type} from "java.security.spec.AlgorithmParameterSpec"

export class $Signature extends $SignatureSpi {
public "initVerify"(arg0: $PublicKey$$Type): void
public "initVerify"(arg0: $Certificate$$Type): void
public "initSign"(arg0: $PrivateKey$$Type): void
public "initSign"(arg0: $PrivateKey$$Type, arg1: $SecureRandom$$Type): void
/**
 * 
 * @deprecated
 */
public "setParameter"(arg0: StringJS, arg1: any): void
public "setParameter"(arg0: $AlgorithmParameterSpec$$Type): void
public "toString"(): StringJS
public "clone"(): any
public "update"(arg0: byte): void
public "update"(arg0: (byte)[]): void
public "update"(arg0: (byte)[], arg1: integer, arg2: integer): void
public "update"(arg0: $ByteBuffer$$Type): void
public static "getInstance"(arg0: StringJS, arg1: StringJS): $Signature
public static "getInstance"(arg0: StringJS): $Signature
public static "getInstance"(arg0: StringJS, arg1: $Provider$$Type): $Signature
public "getParameters"(): $AlgorithmParameters
public "sign"(): (byte)[]
public "sign"(arg0: (byte)[], arg1: integer, arg2: integer): integer
public "verify"(arg0: (byte)[], arg1: integer, arg2: integer): boolean
public "verify"(arg0: (byte)[]): boolean
public "getProvider"(): $Provider
public "getAlgorithm"(): StringJS
/**
 * 
 * @deprecated
 */
public "getParameter"(arg0: StringJS): any
set "parameter"(value: $AlgorithmParameterSpec$$Type)
get "parameters"(): $AlgorithmParameters
get "provider"(): $Provider
get "algorithm"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Signature$$Type = ($Signature);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Signature$$Original = $Signature;}
declare module "java.security.ProtectionDomain" {
import {$Principal, $Principal$$Type} from "java.security.Principal"
import {$Permission$$Type} from "java.security.Permission"
import {$PermissionCollection, $PermissionCollection$$Type} from "java.security.PermissionCollection"
import {$CodeSource, $CodeSource$$Type} from "java.security.CodeSource"
import {$ClassLoader, $ClassLoader$$Type} from "java.lang.ClassLoader"

export class $ProtectionDomain {
constructor(arg0: $CodeSource$$Type, arg1: $PermissionCollection$$Type)
constructor(arg0: $CodeSource$$Type, arg1: $PermissionCollection$$Type, arg2: $ClassLoader$$Type, arg3: ($Principal$$Type)[])

public "toString"(): StringJS
public "getClassLoader"(): $ClassLoader
public "getCodeSource"(): $CodeSource
public "implies"(arg0: $Permission$$Type): boolean
public "getPermissions"(): $PermissionCollection
public "getPrincipals"(): ($Principal)[]
public "staticPermissionsOnly"(): boolean
get "classLoader"(): $ClassLoader
get "codeSource"(): $CodeSource
get "permissions"(): $PermissionCollection
get "principals"(): ($Principal)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProtectionDomain$$Type = ($ProtectionDomain);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProtectionDomain$$Original = $ProtectionDomain;}
declare module "java.security.KeyPair" {
import {$Serializable$$Interface} from "java.io.Serializable"
import {$PrivateKey, $PrivateKey$$Type} from "java.security.PrivateKey"
import {$PublicKey, $PublicKey$$Type} from "java.security.PublicKey"

export class $KeyPair implements $Serializable$$Interface {
constructor(arg0: $PublicKey$$Type, arg1: $PrivateKey$$Type)

public "getPrivate"(): $PrivateKey
public "getPublic"(): $PublicKey
get "private"(): $PrivateKey
get "public"(): $PublicKey
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyPair$$Type = ($KeyPair);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyPair$$Original = $KeyPair;}
declare module "java.security.CodeSource" {
import {$Certificate, $Certificate$$Type} from "java.security.cert.Certificate"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$URL, $URL$$Type} from "java.net.URL"
import {$CodeSigner, $CodeSigner$$Type} from "java.security.CodeSigner"

export class $CodeSource implements $Serializable$$Interface {
constructor(arg0: $URL$$Type, arg1: ($Certificate$$Type)[])
constructor(arg0: $URL$$Type, arg1: ($CodeSigner$$Type)[])

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getLocation"(): $URL
public "getCertificates"(): ($Certificate)[]
public "implies"(arg0: $CodeSource$$Type): boolean
public "getCodeSigners"(): ($CodeSigner)[]
get "location"(): $URL
get "certificates"(): ($Certificate)[]
get "codeSigners"(): ($CodeSigner)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CodeSource$$Type = ($CodeSource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CodeSource$$Original = $CodeSource;}
declare module "java.security.PermissionCollection" {
import {$Permission, $Permission$$Type} from "java.security.Permission"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Stream} from "java.util.stream.Stream"
import {$Enumeration} from "java.util.Enumeration"

export class $PermissionCollection implements $Serializable$$Interface {
constructor()

public "toString"(): StringJS
public "add"(arg0: $Permission$$Type): void
public "elements"(): $Enumeration<($Permission)>
public "setReadOnly"(): void
public "implies"(arg0: $Permission$$Type): boolean
public "isReadOnly"(): boolean
public "elementsAsStream"(): $Stream<($Permission)>
get "readOnly"(): void
get "readOnly"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PermissionCollection$$Type = ($PermissionCollection);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PermissionCollection$$Original = $PermissionCollection;}
declare module "java.security.Timestamp" {
import {$Serializable$$Interface} from "java.io.Serializable"
import {$CertPath, $CertPath$$Type} from "java.security.cert.CertPath"
import {$Date, $Date$$Type} from "java.util.Date"

export class $Timestamp implements $Serializable$$Interface {
constructor(arg0: $Date$$Type, arg1: $CertPath$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getSignerCertPath"(): $CertPath
public "getTimestamp"(): $Date
get "signerCertPath"(): $CertPath
get "timestamp"(): $Date
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Timestamp$$Type = ($Timestamp);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Timestamp$$Original = $Timestamp;}
declare module "java.security.Permission" {
import {$Serializable$$Interface} from "java.io.Serializable"
import {$PermissionCollection} from "java.security.PermissionCollection"
import {$Guard$$Interface} from "java.security.Guard"

export class $Permission implements $Guard$$Interface, $Serializable$$Interface {
constructor(arg0: StringJS)

public "getName"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "implies"(arg0: $Permission$$Type): boolean
public "getActions"(): StringJS
public "newPermissionCollection"(): $PermissionCollection
public "checkGuard"(arg0: any): void
get "name"(): StringJS
get "actions"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Permission$$Type = ($Permission);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Permission$$Original = $Permission;}
declare module "java.security.SecureRandomParameters" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SecureRandomParameters$$Interface {
}

export class $SecureRandomParameters implements $SecureRandomParameters$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SecureRandomParameters$$Type = ($SecureRandomParameters);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SecureRandomParameters$$Original = $SecureRandomParameters;}
declare module "java.security.CodeSigner" {
import {$Timestamp, $Timestamp$$Type} from "java.security.Timestamp"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$CertPath, $CertPath$$Type} from "java.security.cert.CertPath"

export class $CodeSigner implements $Serializable$$Interface {
constructor(arg0: $CertPath$$Type, arg1: $Timestamp$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getSignerCertPath"(): $CertPath
public "getTimestamp"(): $Timestamp
get "signerCertPath"(): $CertPath
get "timestamp"(): $Timestamp
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CodeSigner$$Type = ($CodeSigner);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CodeSigner$$Original = $CodeSigner;}
declare module "java.security.PrivilegedExceptionAction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PrivilegedExceptionAction$$Interface<T> {

(): T
}

export class $PrivilegedExceptionAction<T> implements $PrivilegedExceptionAction$$Interface {
 "run"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrivilegedExceptionAction$$Type<T> = (() => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PrivilegedExceptionAction$$Original<T> = $PrivilegedExceptionAction<(T)>;}
declare module "java.security.AccessControlContext" {
import {$Permission$$Type} from "java.security.Permission"
import {$ProtectionDomain$$Type} from "java.security.ProtectionDomain"
import {$DomainCombiner, $DomainCombiner$$Type} from "java.security.DomainCombiner"

/**
 * 
 * @deprecated
 */
export class $AccessControlContext {
constructor(arg0: $AccessControlContext$$Type, arg1: $DomainCombiner$$Type)
constructor(arg0: ($ProtectionDomain$$Type)[])

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "checkPermission"(arg0: $Permission$$Type): void
public "getDomainCombiner"(): $DomainCombiner
get "domainCombiner"(): $DomainCombiner
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessControlContext$$Type = ($AccessControlContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessControlContext$$Original = $AccessControlContext;}
declare module "java.security.Key" {
import {$Serializable$$Interface} from "java.io.Serializable"

export interface $Key$$Interface extends $Serializable$$Interface {
get "encoded"(): (byte)[]
get "format"(): StringJS
get "algorithm"(): StringJS
}

export class $Key implements $Key$$Interface {
/**
 * 
 * @deprecated
 */
static readonly "serialVersionUID": long

 "getEncoded"(): (byte)[]
 "getFormat"(): StringJS
 "getAlgorithm"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Key$$Type = ($Key);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Key$$Original = $Key;}
declare module "java.security.AlgorithmParameters" {
import {$Provider, $Provider$$Type} from "java.security.Provider"
import {$Class$$Type} from "java.lang.Class"
import {$AlgorithmParameterSpec, $AlgorithmParameterSpec$$Type} from "java.security.spec.AlgorithmParameterSpec"

export class $AlgorithmParameters {
public "toString"(): StringJS
public static "getInstance"(arg0: StringJS, arg1: $Provider$$Type): $AlgorithmParameters
public static "getInstance"(arg0: StringJS, arg1: StringJS): $AlgorithmParameters
public static "getInstance"(arg0: StringJS): $AlgorithmParameters
public "init"(arg0: (byte)[]): void
public "init"(arg0: (byte)[], arg1: StringJS): void
public "init"(arg0: $AlgorithmParameterSpec$$Type): void
public "getEncoded"(): (byte)[]
public "getEncoded"(arg0: StringJS): (byte)[]
public "getProvider"(): $Provider
public "getAlgorithm"(): StringJS
public "getParameterSpec"<T extends $AlgorithmParameterSpec>(arg0: $Class$$Type<(T)>): T
get "encoded"(): (byte)[]
get "provider"(): $Provider
get "algorithm"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlgorithmParameters$$Type = ($AlgorithmParameters);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AlgorithmParameters$$Original = $AlgorithmParameters;}
declare module "java.security.Guard" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Guard$$Interface {

(arg0: any): void
}

export class $Guard implements $Guard$$Interface {
 "checkGuard"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Guard$$Type = ((arg0: any) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Guard$$Original = $Guard;}
declare module "java.security.Provider" {
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$Provider$Service} from "java.security.Provider$Service"
import {$Collection} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Properties} from "java.util.Properties"
import {$Function$$Type} from "java.util.function.Function"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set} from "java.util.Set"
import {$InputStream$$Type} from "java.io.InputStream"
import {$Enumeration} from "java.util.Enumeration"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export class $Provider extends $Properties {
public "getName"(): StringJS
public "remove"(arg0: any): any
public "remove"(arg0: any, arg1: any): boolean
public "get"(arg0: any): any
public "put"(arg0: any, arg1: any): any
public "getProperty"(arg0: StringJS): StringJS
public "toString"(): StringJS
public "values"(): $Collection<(any)>
public "load"(arg0: $InputStream$$Type): void
public "clear"(): void
public "replace"(arg0: any, arg1: any): any
public "replace"(arg0: any, arg1: any, arg2: any): boolean
public "replaceAll"(arg0: $BiFunction$$Type<(any), (any), (never)>): void
public "elements"(): $Enumeration<(any)>
public "merge"(arg0: any, arg1: any, arg2: $BiFunction$$Type<(any), (any), (never)>): any
public "entrySet"(): $Set<($Map$Entry<(any), (any)>)>
public "putAll"(arg0: $Map$$Type<(never), (never)>): void
public "putIfAbsent"(arg0: any, arg1: any): any
public "compute"(arg0: any, arg1: $BiFunction$$Type<(any), (any), (never)>): any
public "forEach"(arg0: $BiConsumer$$Type<(any), (any)>): void
public "computeIfAbsent"(arg0: any, arg1: $Function$$Type<(any), (never)>): any
public "keys"(): $Enumeration<(any)>
public "keySet"(): $Set<(any)>
public "getOrDefault"(arg0: any, arg1: any): any
public "computeIfPresent"(arg0: any, arg1: $BiFunction$$Type<(any), (any), (never)>): any
/**
 * 
 * @deprecated
 */
public "getVersion"(): double
public "getService"(arg0: StringJS, arg1: StringJS): $Provider$Service
public "configure"(arg0: StringJS): $Provider
public "isConfigured"(): boolean
public "getVersionStr"(): StringJS
public "getInfo"(): StringJS
public "getServices"(): $Set<($Provider$Service)>
public static "copyOf"<K, V>(arg0: $Map$$Type<(K), (V)>): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
public static "of"<K, V>(): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(K), (V)>)[]): $Map<(K), (V)>
get "name"(): StringJS
get "version"(): double
get "configured"(): boolean
get "versionStr"(): StringJS
get "info"(): StringJS
get "services"(): $Set<($Provider$Service)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Provider$$Type = ($Provider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Provider$$Original = $Provider;}
declare module "java.security.SecureRandom" {
import {$Provider, $Provider$$Type} from "java.security.Provider"
import {$RandomGenerator} from "java.util.random.RandomGenerator"
import {$Random} from "java.util.Random"
import {$SecureRandomParameters, $SecureRandomParameters$$Type} from "java.security.SecureRandomParameters"

export class $SecureRandom extends $Random {
constructor()
constructor(arg0: (byte)[])

public "toString"(): StringJS
public static "getInstance"(arg0: StringJS, arg1: $SecureRandomParameters$$Type, arg2: StringJS): $SecureRandom
public static "getInstance"(arg0: StringJS, arg1: $SecureRandomParameters$$Type): $SecureRandom
public static "getInstance"(arg0: StringJS, arg1: $SecureRandomParameters$$Type, arg2: $Provider$$Type): $SecureRandom
public static "getInstance"(arg0: StringJS, arg1: $Provider$$Type): $SecureRandom
public static "getInstance"(arg0: StringJS, arg1: StringJS): $SecureRandom
public static "getInstance"(arg0: StringJS): $SecureRandom
public "getParameters"(): $SecureRandomParameters
public "nextBytes"(arg0: (byte)[]): void
public "nextBytes"(arg0: (byte)[], arg1: $SecureRandomParameters$$Type): void
public "getProvider"(): $Provider
public "setSeed"(arg0: long): void
public "setSeed"(arg0: (byte)[]): void
public static "getSeed"(arg0: integer): (byte)[]
public "getAlgorithm"(): StringJS
public "generateSeed"(arg0: integer): (byte)[]
public static "getInstanceStrong"(): $SecureRandom
public "reseed"(): void
public "reseed"(arg0: $SecureRandomParameters$$Type): void
public static "getDefault"(): $RandomGenerator
public static "of"(arg0: StringJS): $RandomGenerator
get "parameters"(): $SecureRandomParameters
get "provider"(): $Provider
set "seed"(value: long)
set "seed"(value: (byte)[])
get "algorithm"(): StringJS
get "instanceStrong"(): $SecureRandom
get "default"(): $RandomGenerator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SecureRandom$$Type = ($SecureRandom);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SecureRandom$$Original = $SecureRandom;}
declare module "java.security.Provider$Service" {
import {$Map$$Type} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$Provider, $Provider$$Type} from "java.security.Provider"

export class $Provider$Service {
constructor(arg0: $Provider$$Type, arg1: StringJS, arg2: StringJS, arg3: StringJS, arg4: $List$$Type<(StringJS)>, arg5: $Map$$Type<(StringJS), (StringJS)>)

public "toString"(): StringJS
public "newInstance"(arg0: any): any
public "getType"(): StringJS
public "getClassName"(): StringJS
public "getAttribute"(arg0: StringJS): StringJS
public "getProvider"(): $Provider
public "getAlgorithm"(): StringJS
public "supportsParameter"(arg0: any): boolean
get "type"(): StringJS
get "className"(): StringJS
get "provider"(): $Provider
get "algorithm"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Provider$Service$$Type = ($Provider$Service);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Provider$Service$$Original = $Provider$Service;}
declare module "java.security.SignatureSpi" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SignatureSpi {
constructor()

public "clone"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignatureSpi$$Type = ($SignatureSpi);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SignatureSpi$$Original = $SignatureSpi;}
declare module "java.security.PrivilegedAction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PrivilegedAction$$Interface<T> {

(): T
}

export class $PrivilegedAction<T> implements $PrivilegedAction$$Interface {
 "run"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrivilegedAction$$Type<T> = (() => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PrivilegedAction$$Original<T> = $PrivilegedAction<(T)>;}
declare module "java.security.PublicKey" {
import {$Key$$Interface} from "java.security.Key"

export interface $PublicKey$$Interface extends $Key$$Interface {
get "encoded"(): (byte)[]
get "format"(): StringJS
get "algorithm"(): StringJS
}

export class $PublicKey implements $PublicKey$$Interface {
/**
 * 
 * @deprecated
 */
static readonly "serialVersionUID": long

 "getEncoded"(): (byte)[]
 "getFormat"(): StringJS
 "getAlgorithm"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PublicKey$$Type = ($PublicKey);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PublicKey$$Original = $PublicKey;}
