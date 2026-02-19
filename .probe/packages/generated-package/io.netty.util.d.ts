declare module "io.netty.util.Constant" {
import {$Comparable$$Interface} from "java.lang.Comparable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Constant$$Interface<T extends $Constant<(object)>> extends $Comparable$$Interface<(T)> {
}

export class $Constant<T extends $Constant<(object)>> implements $Constant$$Interface {
 "name"(): StringJS
 "id"(): integer
 "compareTo"(arg0: T): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Constant$$Type<T> = ($Constant<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Constant$$Original<T> = $Constant<(T)>;}
declare module "io.netty.util.IntSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IntSupplier$$Interface {

(): integer
}

export class $IntSupplier implements $IntSupplier$$Interface {
 "get"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntSupplier$$Type = (() => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntSupplier$$Original = $IntSupplier;}
declare module "io.netty.util.AttributeKey" {
import {$AbstractConstant} from "io.netty.util.AbstractConstant"
import {$Class$$Type} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AttributeKey<T> extends $AbstractConstant<($AttributeKey<(T)>)> {
public static "valueOf"<T>(arg0: StringJS): $AttributeKey<(T)>
public static "valueOf"<T>(arg0: $Class$$Type<(never)>, arg1: StringJS): $AttributeKey<(T)>
public static "newInstance"<T>(arg0: StringJS): $AttributeKey<(T)>
public static "exists"(arg0: StringJS): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttributeKey$$Type<T> = ($AttributeKey<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AttributeKey$$Original<T> = $AttributeKey<(T)>;}
declare module "io.netty.util.Attribute" {
import {$AttributeKey} from "io.netty.util.AttributeKey"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Attribute$$Interface<T> {
get "andRemove"(): T
set "ifAbsent"(value: T)
}

export class $Attribute<T> implements $Attribute$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(): void
 "get"(): T
 "set"(arg0: T): void
 "key"(): $AttributeKey<(T)>
 "compareAndSet"(arg0: T, arg1: T): boolean
 "getAndSet"(arg0: T): T
/**
 * 
 * @deprecated
 */
 "getAndRemove"(): T
 "setIfAbsent"(arg0: T): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Attribute$$Type<T> = ($Attribute<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Attribute$$Original<T> = $Attribute<(T)>;}
declare module "io.netty.util.AttributeMap" {
import {$AttributeKey$$Type} from "io.netty.util.AttributeKey"
import {$Attribute} from "io.netty.util.Attribute"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $AttributeMap$$Interface {
}

export class $AttributeMap implements $AttributeMap$$Interface {
 "hasAttr"<T>(arg0: $AttributeKey$$Type<(T)>): boolean
 "attr"<T>(arg0: $AttributeKey$$Type<(T)>): $Attribute<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttributeMap$$Type = ($AttributeMap);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AttributeMap$$Original = $AttributeMap;}
declare module "io.netty.util.ByteProcessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ByteProcessor$$Interface {

(arg0: byte): boolean
}

export class $ByteProcessor implements $ByteProcessor$$Interface {
static readonly "FIND_NUL": $ByteProcessor
static readonly "FIND_COMMA": $ByteProcessor
static readonly "FIND_CR": $ByteProcessor
static readonly "FIND_ASCII_SPACE": $ByteProcessor
static readonly "FIND_NON_CR": $ByteProcessor
static readonly "FIND_NON_CRLF": $ByteProcessor
static readonly "FIND_LF": $ByteProcessor
static readonly "FIND_LINEAR_WHITESPACE": $ByteProcessor
static readonly "FIND_NON_LINEAR_WHITESPACE": $ByteProcessor
static readonly "FIND_SEMI_COLON": $ByteProcessor
static readonly "FIND_NON_NUL": $ByteProcessor
static readonly "FIND_CRLF": $ByteProcessor
static readonly "FIND_NON_LF": $ByteProcessor

 "process"(arg0: byte): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ByteProcessor$$Type = ((arg0: byte) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ByteProcessor$$Original = $ByteProcessor;}
declare module "io.netty.util.ReferenceCounted" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ReferenceCounted$$Interface {
}

export class $ReferenceCounted implements $ReferenceCounted$$Interface {
 "release"(): boolean
 "release"(arg0: integer): boolean
 "retain"(): $ReferenceCounted
 "retain"(arg0: integer): $ReferenceCounted
 "refCnt"(): integer
 "touch"(arg0: any): $ReferenceCounted
 "touch"(): $ReferenceCounted
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReferenceCounted$$Type = ($ReferenceCounted);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReferenceCounted$$Original = $ReferenceCounted;}
declare module "io.netty.util.AbstractConstant" {
import {$Constant$$Interface} from "io.netty.util.Constant"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractConstant<T extends $AbstractConstant<(object)>> implements $Constant$$Interface<(T)> {
public "name"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: T): integer
public "compareTo"(arg0: any): integer
public "id"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractConstant$$Type<T> = ($AbstractConstant<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractConstant$$Original<T> = $AbstractConstant<(T)>;}
