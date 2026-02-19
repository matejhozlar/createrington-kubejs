declare module "java.lang.constant.DirectMethodHandleDesc" {
import {$MethodHandles$Lookup$$Type} from "java.lang.invoke.MethodHandles$Lookup"
import {$DirectMethodHandleDesc$Kind, $DirectMethodHandleDesc$Kind$$Type} from "java.lang.constant.DirectMethodHandleDesc$Kind"
import {$MethodHandleDesc, $MethodHandleDesc$$Interface} from "java.lang.constant.MethodHandleDesc"
import {$ClassDesc, $ClassDesc$$Type} from "java.lang.constant.ClassDesc"
import {$MethodTypeDesc, $MethodTypeDesc$$Type} from "java.lang.constant.MethodTypeDesc"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $DirectMethodHandleDesc$$Interface extends $MethodHandleDesc$$Interface {
get "ownerInterface"(): boolean
}

export class $DirectMethodHandleDesc implements $DirectMethodHandleDesc$$Interface {
 "methodName"(): StringJS
 "kind"(): $DirectMethodHandleDesc$Kind
 "owner"(): $ClassDesc
 "refKind"(): integer
 "lookupDescriptor"(): StringJS
 "isOwnerInterface"(): boolean
 "equals"(arg0: any): boolean
static "of"(arg0: $DirectMethodHandleDesc$Kind$$Type, arg1: $ClassDesc$$Type, arg2: StringJS, arg3: StringJS): $DirectMethodHandleDesc
 "resolveConstantDesc"(arg0: $MethodHandles$Lookup$$Type): any
 "asType"(arg0: $MethodTypeDesc$$Type): $MethodHandleDesc
static "ofField"(arg0: $DirectMethodHandleDesc$Kind$$Type, arg1: $ClassDesc$$Type, arg2: StringJS, arg3: $ClassDesc$$Type): $DirectMethodHandleDesc
static "ofMethod"(arg0: $DirectMethodHandleDesc$Kind$$Type, arg1: $ClassDesc$$Type, arg2: StringJS, arg3: $MethodTypeDesc$$Type): $DirectMethodHandleDesc
 "invocationType"(): $MethodTypeDesc
static "ofConstructor"(arg0: $ClassDesc$$Type, ...arg1: ($ClassDesc$$Type)[]): $DirectMethodHandleDesc
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DirectMethodHandleDesc$$Type = ($DirectMethodHandleDesc);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DirectMethodHandleDesc$$Original = $DirectMethodHandleDesc;}
declare module "java.lang.constant.ConstantDesc" {
import {$MethodHandles$Lookup, $MethodHandles$Lookup$$Type} from "java.lang.invoke.MethodHandles$Lookup"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ConstantDesc$$Interface {

(arg0: $MethodHandles$Lookup): any
}

export class $ConstantDesc implements $ConstantDesc$$Interface {
 "resolveConstantDesc"(arg0: $MethodHandles$Lookup$$Type): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConstantDesc$$Type = ((arg0: $MethodHandles$Lookup) => any);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConstantDesc$$Original = $ConstantDesc;}
declare module "java.lang.constant.MethodTypeDesc" {
import {$ConstantDesc$$Interface} from "java.lang.constant.ConstantDesc"
import {$MethodHandles$Lookup$$Type} from "java.lang.invoke.MethodHandles$Lookup"
import {$ClassDesc, $ClassDesc$$Type} from "java.lang.constant.ClassDesc"
import {$List, $List$$Type} from "java.util.List"
import {$TypeDescriptor$OfField, $TypeDescriptor$OfField$$Type} from "java.lang.invoke.TypeDescriptor$OfField"
import {$TypeDescriptor$OfMethod, $TypeDescriptor$OfMethod$$Interface} from "java.lang.invoke.TypeDescriptor$OfMethod"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $MethodTypeDesc$$Interface extends $ConstantDesc$$Interface, $TypeDescriptor$OfMethod$$Interface<($ClassDesc), ($MethodTypeDesc)> {
}

export class $MethodTypeDesc implements $MethodTypeDesc$$Interface {
 "returnType"(): $ClassDesc
 "equals"(arg0: any): boolean
static "of"(arg0: $ClassDesc$$Type): $MethodTypeDesc
static "of"(arg0: $ClassDesc$$Type, ...arg1: ($ClassDesc$$Type)[]): $MethodTypeDesc
static "of"(arg0: $ClassDesc$$Type, arg1: $List$$Type<($ClassDesc$$Type)>): $MethodTypeDesc
 "resolveConstantDesc"(arg0: $MethodHandles$Lookup$$Type): any
 "descriptorString"(): StringJS
static "ofDescriptor"(arg0: StringJS): $MethodTypeDesc
 "parameterType"(arg0: integer): $TypeDescriptor$OfField
 "insertParameterTypes"(arg0: integer, ...arg1: ($ClassDesc$$Type)[]): $MethodTypeDesc
 "insertParameterTypes"(arg0: integer, arg1: ($TypeDescriptor$OfField$$Type)[]): $TypeDescriptor$OfMethod
 "changeReturnType"(arg0: $ClassDesc$$Type): $MethodTypeDesc
 "changeReturnType"(arg0: $TypeDescriptor$OfField$$Type): $TypeDescriptor$OfMethod
 "dropParameterTypes"(arg0: integer, arg1: integer): $TypeDescriptor$OfMethod
 "parameterCount"(): integer
 "parameterList"(): $List<($ClassDesc)>
 "parameterArray"(): ($TypeDescriptor$OfField)[]
 "changeParameterType"(arg0: integer, arg1: $ClassDesc$$Type): $MethodTypeDesc
 "changeParameterType"(arg0: integer, arg1: $TypeDescriptor$OfField$$Type): $TypeDescriptor$OfMethod
 "displayDescriptor"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MethodTypeDesc$$Type = ($MethodTypeDesc);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MethodTypeDesc$$Original = $MethodTypeDesc;}
declare module "java.lang.constant.ClassDesc" {
import {$ConstantDesc$$Interface} from "java.lang.constant.ConstantDesc"
import {$MethodHandles$Lookup$$Type} from "java.lang.invoke.MethodHandles$Lookup"
import {$TypeDescriptor$OfField, $TypeDescriptor$OfField$$Interface} from "java.lang.invoke.TypeDescriptor$OfField"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ClassDesc$$Interface extends $ConstantDesc$$Interface, $TypeDescriptor$OfField$$Interface<($ClassDesc)> {
get "array"(): boolean
get "primitive"(): boolean
get "classOrInterface"(): boolean
}

export class $ClassDesc implements $ClassDesc$$Interface {
 "equals"(arg0: any): boolean
 "isArray"(): boolean
 "isPrimitive"(): boolean
 "componentType"(): $TypeDescriptor$OfField
static "of"(arg0: StringJS): $ClassDesc
static "of"(arg0: StringJS, arg1: StringJS): $ClassDesc
 "resolveConstantDesc"(arg0: $MethodHandles$Lookup$$Type): any
 "packageName"(): StringJS
 "descriptorString"(): StringJS
static "ofDescriptor"(arg0: StringJS): $ClassDesc
 "arrayType"(): $TypeDescriptor$OfField
 "arrayType"(arg0: integer): $ClassDesc
 "displayName"(): StringJS
 "nested"(arg0: StringJS, ...arg1: (StringJS)[]): $ClassDesc
 "nested"(arg0: StringJS): $ClassDesc
 "isClassOrInterface"(): boolean
static "ofInternalName"(arg0: StringJS): $ClassDesc
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClassDesc$$Type = ($ClassDesc);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClassDesc$$Original = $ClassDesc;}
declare module "java.lang.constant.DynamicConstantDesc" {
import {$ConstantDesc, $ConstantDesc$$Type, $ConstantDesc$$Interface} from "java.lang.constant.ConstantDesc"
import {$MethodHandles$Lookup$$Type} from "java.lang.invoke.MethodHandles$Lookup"
import {$List} from "java.util.List"
import {$ClassDesc, $ClassDesc$$Type} from "java.lang.constant.ClassDesc"
import {$DirectMethodHandleDesc, $DirectMethodHandleDesc$$Type} from "java.lang.constant.DirectMethodHandleDesc"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DynamicConstantDesc<T> implements $ConstantDesc$$Interface {
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"<T>(arg0: $DirectMethodHandleDesc$$Type, ...arg1: ($ConstantDesc$$Type)[]): $DynamicConstantDesc<(T)>
public static "of"<T>(arg0: $DirectMethodHandleDesc$$Type): $DynamicConstantDesc<(T)>
public "resolveConstantDesc"(arg0: $MethodHandles$Lookup$$Type): T
public "bootstrapMethod"(): $DirectMethodHandleDesc
public static "ofNamed"<T>(arg0: $DirectMethodHandleDesc$$Type, arg1: StringJS, arg2: $ClassDesc$$Type, ...arg3: ($ConstantDesc$$Type)[]): $DynamicConstantDesc<(T)>
public static "ofCanonical"<T>(arg0: $DirectMethodHandleDesc$$Type, arg1: StringJS, arg2: $ClassDesc$$Type, arg3: ($ConstantDesc$$Type)[]): $ConstantDesc
public "bootstrapArgsList"(): $List<($ConstantDesc)>
public "constantType"(): $ClassDesc
public "constantName"(): StringJS
public "bootstrapArgs"(): ($ConstantDesc)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicConstantDesc$$Type<T> = ($DynamicConstantDesc<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DynamicConstantDesc$$Original<T> = $DynamicConstantDesc<(T)>;}
declare module "java.lang.constant.Constable" {
import {$ConstantDesc, $ConstantDesc$$Type} from "java.lang.constant.ConstantDesc"
import {$Optional, $Optional$$Type} from "java.util.Optional"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Constable$$Interface {

(): ($ConstantDesc$$Type)?
}

export class $Constable implements $Constable$$Interface {
 "describeConstable"(): $Optional<($ConstantDesc)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Constable$$Type = (() => ($ConstantDesc$$Type)?);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Constable$$Original = $Constable;}
declare module "java.lang.constant.MethodHandleDesc" {
import {$ConstantDesc$$Interface} from "java.lang.constant.ConstantDesc"
import {$MethodHandles$Lookup$$Type} from "java.lang.invoke.MethodHandles$Lookup"
import {$DirectMethodHandleDesc$Kind$$Type} from "java.lang.constant.DirectMethodHandleDesc$Kind"
import {$ClassDesc$$Type} from "java.lang.constant.ClassDesc"
import {$MethodTypeDesc, $MethodTypeDesc$$Type} from "java.lang.constant.MethodTypeDesc"
import {$DirectMethodHandleDesc} from "java.lang.constant.DirectMethodHandleDesc"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $MethodHandleDesc$$Interface extends $ConstantDesc$$Interface {
}

export class $MethodHandleDesc implements $MethodHandleDesc$$Interface {
 "equals"(arg0: any): boolean
static "of"(arg0: $DirectMethodHandleDesc$Kind$$Type, arg1: $ClassDesc$$Type, arg2: StringJS, arg3: StringJS): $DirectMethodHandleDesc
 "resolveConstantDesc"(arg0: $MethodHandles$Lookup$$Type): any
 "asType"(arg0: $MethodTypeDesc$$Type): $MethodHandleDesc
static "ofField"(arg0: $DirectMethodHandleDesc$Kind$$Type, arg1: $ClassDesc$$Type, arg2: StringJS, arg3: $ClassDesc$$Type): $DirectMethodHandleDesc
static "ofMethod"(arg0: $DirectMethodHandleDesc$Kind$$Type, arg1: $ClassDesc$$Type, arg2: StringJS, arg3: $MethodTypeDesc$$Type): $DirectMethodHandleDesc
 "invocationType"(): $MethodTypeDesc
static "ofConstructor"(arg0: $ClassDesc$$Type, ...arg1: ($ClassDesc$$Type)[]): $DirectMethodHandleDesc
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MethodHandleDesc$$Type = ($MethodHandleDesc);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MethodHandleDesc$$Original = $MethodHandleDesc;}
declare module "java.lang.constant.DirectMethodHandleDesc$Kind" {
import {$Enum} from "java.lang.Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DirectMethodHandleDesc$Kind extends $Enum<($DirectMethodHandleDesc$Kind)> {
static readonly "INTERFACE_SPECIAL": $DirectMethodHandleDesc$Kind
readonly "refKind": integer
static readonly "SETTER": $DirectMethodHandleDesc$Kind
static readonly "SPECIAL": $DirectMethodHandleDesc$Kind
static readonly "STATIC": $DirectMethodHandleDesc$Kind
static readonly "GETTER": $DirectMethodHandleDesc$Kind
static readonly "STATIC_GETTER": $DirectMethodHandleDesc$Kind
static readonly "INTERFACE_VIRTUAL": $DirectMethodHandleDesc$Kind
static readonly "STATIC_SETTER": $DirectMethodHandleDesc$Kind
static readonly "CONSTRUCTOR": $DirectMethodHandleDesc$Kind
readonly "isInterface": boolean
static readonly "INTERFACE_STATIC": $DirectMethodHandleDesc$Kind
static readonly "VIRTUAL": $DirectMethodHandleDesc$Kind

public static "values"(): ($DirectMethodHandleDesc$Kind)[]
public static "valueOf"(arg0: integer, arg1: boolean): $DirectMethodHandleDesc$Kind
public static "valueOf"(arg0: StringJS): $DirectMethodHandleDesc$Kind
public static "valueOf"(arg0: integer): $DirectMethodHandleDesc$Kind
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DirectMethodHandleDesc$Kind$$Type = (("static") | ("interface_static") | ("virtual") | ("interface_virtual") | ("special") | ("interface_special") | ("constructor") | ("getter") | ("setter") | ("static_getter") | ("static_setter"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DirectMethodHandleDesc$Kind$$Original = $DirectMethodHandleDesc$Kind;}
