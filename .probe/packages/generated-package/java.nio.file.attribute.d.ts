declare module "java.nio.file.attribute.FileStoreAttributeView" {
import {$AttributeView$$Interface} from "java.nio.file.attribute.AttributeView"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $FileStoreAttributeView$$Interface extends $AttributeView$$Interface {

(): StringJS
}

export class $FileStoreAttributeView implements $FileStoreAttributeView$$Interface {
 "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FileStoreAttributeView$$Type = (() => StringJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FileStoreAttributeView$$Original = $FileStoreAttributeView;}
declare module "java.nio.file.attribute.UserPrincipal" {
import {$Principal$$Interface} from "java.security.Principal"
import {$Subject$$Type} from "javax.security.auth.Subject"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $UserPrincipal$$Interface extends $Principal$$Interface {
get "name"(): StringJS
}

export class $UserPrincipal implements $UserPrincipal$$Interface {
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
export type $UserPrincipal$$Type = ($UserPrincipal);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UserPrincipal$$Original = $UserPrincipal;}
declare module "java.nio.file.attribute.FileTime" {
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$Instant, $Instant$$Type} from "java.time.Instant"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FileTime implements $Comparable$$Interface<($FileTime)> {
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: $FileTime$$Type): integer
public "compareTo"(arg0: any): integer
public static "from"(arg0: $Instant$$Type): $FileTime
public static "from"(arg0: long, arg1: $TimeUnit$$Type): $FileTime
public "to"(arg0: $TimeUnit$$Type): long
public "toMillis"(): long
public "toInstant"(): $Instant
public static "fromMillis"(arg0: long): $FileTime
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FileTime$$Type = ($FileTime);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FileTime$$Original = $FileTime;}
declare module "java.nio.file.attribute.UserPrincipalLookupService" {
import {$UserPrincipal} from "java.nio.file.attribute.UserPrincipal"
import {$GroupPrincipal} from "java.nio.file.attribute.GroupPrincipal"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $UserPrincipalLookupService {
public "lookupPrincipalByGroupName"(arg0: StringJS): $GroupPrincipal
public "lookupPrincipalByName"(arg0: StringJS): $UserPrincipal
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UserPrincipalLookupService$$Type = ($UserPrincipalLookupService);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UserPrincipalLookupService$$Original = $UserPrincipalLookupService;}
declare module "java.nio.file.attribute.FileAttributeView" {
import {$AttributeView$$Interface} from "java.nio.file.attribute.AttributeView"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $FileAttributeView$$Interface extends $AttributeView$$Interface {

(): StringJS
}

export class $FileAttributeView implements $FileAttributeView$$Interface {
 "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FileAttributeView$$Type = (() => StringJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FileAttributeView$$Original = $FileAttributeView;}
declare module "java.nio.file.attribute.GroupPrincipal" {
import {$UserPrincipal$$Interface} from "java.nio.file.attribute.UserPrincipal"
import {$Subject$$Type} from "javax.security.auth.Subject"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $GroupPrincipal$$Interface extends $UserPrincipal$$Interface {
get "name"(): StringJS
}

export class $GroupPrincipal implements $GroupPrincipal$$Interface {
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
export type $GroupPrincipal$$Type = ($GroupPrincipal);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GroupPrincipal$$Original = $GroupPrincipal;}
declare module "java.nio.file.attribute.FileAttribute" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $FileAttribute$$Interface<T> {
}

export class $FileAttribute<T> implements $FileAttribute$$Interface {
 "name"(): StringJS
 "value"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FileAttribute$$Type<T> = ($FileAttribute<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FileAttribute$$Original<T> = $FileAttribute<(T)>;}
declare module "java.nio.file.attribute.BasicFileAttributes" {
import {$FileTime} from "java.nio.file.attribute.FileTime"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $BasicFileAttributes$$Interface {
get "directory"(): boolean
get "regularFile"(): boolean
get "symbolicLink"(): boolean
get "other"(): boolean
}

export class $BasicFileAttributes implements $BasicFileAttributes$$Interface {
 "size"(): long
 "isDirectory"(): boolean
 "isRegularFile"(): boolean
 "isSymbolicLink"(): boolean
 "lastModifiedTime"(): $FileTime
 "lastAccessTime"(): $FileTime
 "creationTime"(): $FileTime
 "isOther"(): boolean
 "fileKey"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicFileAttributes$$Type = ($BasicFileAttributes);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BasicFileAttributes$$Original = $BasicFileAttributes;}
declare module "java.nio.file.attribute.AttributeView" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $AttributeView$$Interface {

(): StringJS
}

export class $AttributeView implements $AttributeView$$Interface {
 "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttributeView$$Type = (() => StringJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AttributeView$$Original = $AttributeView;}
