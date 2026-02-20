declare module "java.lang.reflect.Method" {
import {$Executable} from "java.lang.reflect.Executable"
import {$TypeVariable} from "java.lang.reflect.TypeVariable"
import {$Annotation} from "java.lang.annotation.Annotation"
import {$AnnotatedType} from "java.lang.reflect.AnnotatedType"
import {$Type} from "java.lang.reflect.Type"
import {$Class, $Class$$Type} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Method extends $Executable {
public "invoke"(arg0: any, ...arg1: (any)[]): any
public "getName"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getModifiers"(): integer
public "getTypeParameters"(): ($TypeVariable<($Method)>)[]
public "getReturnType"(): $Class<(never)>
public "getParameterTypes"(): ($Class<(never)>)[]
public "isSynthetic"(): boolean
public "toGenericString"(): StringJS
public "getDeclaringClass"(): $Class<(never)>
public "getAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
public "getDeclaredAnnotations"(): ($Annotation)[]
public "setAccessible"(arg0: boolean): void
public "isVarArgs"(): boolean
public "getParameterCount"(): integer
public "getParameterAnnotations"(): (($Annotation)[])[]
public "getGenericParameterTypes"(): ($Type)[]
public "getGenericExceptionTypes"(): ($Type)[]
public "isDefault"(): boolean
public "getGenericReturnType"(): $Type
public "getExceptionTypes"(): ($Class<(never)>)[]
public "isBridge"(): boolean
public "getDefaultValue"(): any
public "getAnnotatedReturnType"(): $AnnotatedType
get "name"(): StringJS
get "modifiers"(): integer
get "typeParameters"(): ($TypeVariable<($Method)>)[]
get "returnType"(): $Class<(never)>
get "parameterTypes"(): ($Class<(never)>)[]
get "synthetic"(): boolean
get "declaringClass"(): $Class<(never)>
get "declaredAnnotations"(): ($Annotation)[]
set "accessible"(value: boolean)
get "varArgs"(): boolean
get "parameterCount"(): integer
get "parameterAnnotations"(): (($Annotation)[])[]
get "genericParameterTypes"(): ($Type)[]
get "genericExceptionTypes"(): ($Type)[]
get "default"(): boolean
get "genericReturnType"(): $Type
get "exceptionTypes"(): ($Class<(never)>)[]
get "bridge"(): boolean
get "defaultValue"(): any
get "annotatedReturnType"(): $AnnotatedType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Method$$Type = ($Method);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Method$$Original = $Method;}
declare module "java.lang.reflect.Member" {
import {$Set} from "java.util.Set"
import {$Class} from "java.lang.Class"
import {$AccessFlag} from "java.lang.reflect.AccessFlag"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Member$$Interface {
get "name"(): StringJS
get "modifiers"(): integer
get "synthetic"(): boolean
get "declaringClass"(): $Class<(never)>
}

export class $Member implements $Member$$Interface {
static readonly "PUBLIC": integer
static readonly "DECLARED": integer

 "getName"(): StringJS
 "getModifiers"(): integer
 "isSynthetic"(): boolean
 "accessFlags"(): $Set<($AccessFlag)>
 "getDeclaringClass"(): $Class<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Member$$Type = ($Member);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Member$$Original = $Member;}
declare module "java.lang.reflect.Field" {
import {$Member$$Interface} from "java.lang.reflect.Member"
import {$Annotation} from "java.lang.annotation.Annotation"
import {$AnnotatedType} from "java.lang.reflect.AnnotatedType"
import {$AccessibleObject} from "java.lang.reflect.AccessibleObject"
import {$Type} from "java.lang.reflect.Type"
import {$Set} from "java.util.Set"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$AccessFlag} from "java.lang.reflect.AccessFlag"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Field extends $AccessibleObject implements $Member$$Interface {
public "getName"(): StringJS
public "get"(arg0: any): any
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getModifiers"(): integer
public "getBoolean"(arg0: any): boolean
public "getByte"(arg0: any): byte
public "getShort"(arg0: any): short
public "getChar"(arg0: any): character
public "getInt"(arg0: any): integer
public "getLong"(arg0: any): long
public "getFloat"(arg0: any): float
public "getDouble"(arg0: any): double
public "isSynthetic"(): boolean
public "toGenericString"(): StringJS
public "accessFlags"(): $Set<($AccessFlag)>
public "getDeclaringClass"(): $Class<(never)>
public "getAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
public "getAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
public "getDeclaredAnnotations"(): ($Annotation)[]
public "set"(arg0: any, arg1: any): void
public "setAccessible"(arg0: boolean): void
public "getGenericType"(): $Type
public "getType"(): $Class<(never)>
public "setBoolean"(arg0: any, arg1: boolean): void
public "setByte"(arg0: any, arg1: byte): void
public "setChar"(arg0: any, arg1: character): void
public "setShort"(arg0: any, arg1: short): void
public "setInt"(arg0: any, arg1: integer): void
public "setLong"(arg0: any, arg1: long): void
public "setFloat"(arg0: any, arg1: float): void
public "setDouble"(arg0: any, arg1: double): void
public "isEnumConstant"(): boolean
public "getAnnotatedType"(): $AnnotatedType
get "name"(): StringJS
get "modifiers"(): integer
get "synthetic"(): boolean
get "declaringClass"(): $Class<(never)>
get "declaredAnnotations"(): ($Annotation)[]
set "accessible"(value: boolean)
get "genericType"(): $Type
get "type"(): $Class<(never)>
get "enumConstant"(): boolean
get "annotatedType"(): $AnnotatedType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Field$$Type = ($Field);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Field$$Original = $Field;}
declare module "java.lang.reflect.Type" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Type$$Interface {
get "typeName"(): StringJS
}

export class $Type implements $Type$$Interface {
 "getTypeName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Type$$Type = ($Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Type$$Original = $Type;}
declare module "java.lang.reflect.TypeVariable" {
import {$GenericDeclaration} from "java.lang.reflect.GenericDeclaration"
import {$AnnotatedElement$$Interface} from "java.lang.reflect.AnnotatedElement"
import {$Annotation, $Annotation$$Type} from "java.lang.annotation.Annotation"
import {$AnnotatedType} from "java.lang.reflect.AnnotatedType"
import {$Type, $Type$$Interface} from "java.lang.reflect.Type"
import {$Class$$Type} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $TypeVariable$$Interface<D extends $GenericDeclaration> extends $Type$$Interface, $AnnotatedElement$$Interface {
get "name"(): StringJS
get "bounds"(): ($Type)[]
get "genericDeclaration"(): D
get "annotatedBounds"(): ($AnnotatedType)[]
get "typeName"(): StringJS
get "annotations"(): ($Annotation)[]
get "declaredAnnotations"(): ($Annotation)[]
}

export class $TypeVariable<D extends $GenericDeclaration> implements $TypeVariable$$Interface {
 "getName"(): StringJS
 "getBounds"(): ($Type)[]
 "getGenericDeclaration"(): D
 "getAnnotatedBounds"(): ($AnnotatedType)[]
 "getTypeName"(): StringJS
 "isAnnotationPresent"(arg0: $Class$$Type<($Annotation$$Type)>): boolean
 "getAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
 "getAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
 "getAnnotations"(): ($Annotation)[]
 "getDeclaredAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
 "getDeclaredAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
 "getDeclaredAnnotations"(): ($Annotation)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeVariable$$Type<D> = ($TypeVariable<(D)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TypeVariable$$Original<D> = $TypeVariable<(D)>;}
declare module "java.lang.reflect.Parameter" {
import {$Executable} from "java.lang.reflect.Executable"
import {$AnnotatedElement$$Interface} from "java.lang.reflect.AnnotatedElement"
import {$Annotation, $Annotation$$Type} from "java.lang.annotation.Annotation"
import {$AnnotatedType} from "java.lang.reflect.AnnotatedType"
import {$Type} from "java.lang.reflect.Type"
import {$Set} from "java.util.Set"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$AccessFlag} from "java.lang.reflect.AccessFlag"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Parameter implements $AnnotatedElement$$Interface {
public "getName"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getModifiers"(): integer
public "isSynthetic"(): boolean
public "accessFlags"(): $Set<($AccessFlag)>
public "getAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
public "getAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
public "getAnnotations"(): ($Annotation)[]
public "getDeclaredAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
public "getDeclaredAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
public "getDeclaredAnnotations"(): ($Annotation)[]
public "getType"(): $Class<(never)>
public "getAnnotatedType"(): $AnnotatedType
public "getParameterizedType"(): $Type
public "isVarArgs"(): boolean
public "isNamePresent"(): boolean
public "getDeclaringExecutable"(): $Executable
public "isImplicit"(): boolean
public "isAnnotationPresent"(arg0: $Class$$Type<($Annotation$$Type)>): boolean
get "name"(): StringJS
get "modifiers"(): integer
get "synthetic"(): boolean
get "annotations"(): ($Annotation)[]
get "declaredAnnotations"(): ($Annotation)[]
get "type"(): $Class<(never)>
get "annotatedType"(): $AnnotatedType
get "parameterizedType"(): $Type
get "varArgs"(): boolean
get "namePresent"(): boolean
get "declaringExecutable"(): $Executable
get "implicit"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Parameter$$Type = ($Parameter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Parameter$$Original = $Parameter;}
declare module "java.lang.reflect.Constructor" {
import {$Executable} from "java.lang.reflect.Executable"
import {$TypeVariable} from "java.lang.reflect.TypeVariable"
import {$Annotation} from "java.lang.annotation.Annotation"
import {$AnnotatedType} from "java.lang.reflect.AnnotatedType"
import {$Type} from "java.lang.reflect.Type"
import {$Class, $Class$$Type} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Constructor<T> extends $Executable {
public "getName"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getModifiers"(): integer
public "getTypeParameters"(): ($TypeVariable<($Constructor<(T)>)>)[]
public "newInstance"(...arg0: (any)[]): T
public "getParameterTypes"(): ($Class<(never)>)[]
public "isSynthetic"(): boolean
public "toGenericString"(): StringJS
public "getDeclaringClass"(): $Class<(T)>
public "getAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
public "getDeclaredAnnotations"(): ($Annotation)[]
public "setAccessible"(arg0: boolean): void
public "isVarArgs"(): boolean
public "getParameterCount"(): integer
public "getParameterAnnotations"(): (($Annotation)[])[]
public "getGenericParameterTypes"(): ($Type)[]
public "getGenericExceptionTypes"(): ($Type)[]
public "getExceptionTypes"(): ($Class<(never)>)[]
public "getAnnotatedReturnType"(): $AnnotatedType
public "getAnnotatedReceiverType"(): $AnnotatedType
get "name"(): StringJS
get "modifiers"(): integer
get "typeParameters"(): ($TypeVariable<($Constructor<(T)>)>)[]
get "parameterTypes"(): ($Class<(never)>)[]
get "synthetic"(): boolean
get "declaringClass"(): $Class<(T)>
get "declaredAnnotations"(): ($Annotation)[]
set "accessible"(value: boolean)
get "varArgs"(): boolean
get "parameterCount"(): integer
get "parameterAnnotations"(): (($Annotation)[])[]
get "genericParameterTypes"(): ($Type)[]
get "genericExceptionTypes"(): ($Type)[]
get "exceptionTypes"(): ($Class<(never)>)[]
get "annotatedReturnType"(): $AnnotatedType
get "annotatedReceiverType"(): $AnnotatedType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Constructor$$Type<T> = ($Constructor<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Constructor$$Original<T> = $Constructor<(T)>;}
declare module "java.lang.reflect.AccessibleObject" {
import {$AnnotatedElement$$Interface} from "java.lang.reflect.AnnotatedElement"
import {$Annotation, $Annotation$$Type} from "java.lang.annotation.Annotation"
import {$Class$$Type} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AccessibleObject implements $AnnotatedElement$$Interface {
public "isAnnotationPresent"(arg0: $Class$$Type<($Annotation$$Type)>): boolean
public "getAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
public "getAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
public "getAnnotations"(): ($Annotation)[]
public "getDeclaredAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
public "getDeclaredAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
public "getDeclaredAnnotations"(): ($Annotation)[]
public static "setAccessible"(arg0: ($AccessibleObject$$Type)[], arg1: boolean): void
public "setAccessible"(arg0: boolean): void
public "trySetAccessible"(): boolean
public "canAccess"(arg0: any): boolean
/**
 * 
 * @deprecated
 */
public "isAccessible"(): boolean
get "annotations"(): ($Annotation)[]
get "declaredAnnotations"(): ($Annotation)[]
set "accessible"(value: boolean)
get "accessible"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessibleObject$$Type = ($AccessibleObject);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessibleObject$$Original = $AccessibleObject;}
declare module "java.lang.reflect.Executable" {
import {$GenericDeclaration$$Interface} from "java.lang.reflect.GenericDeclaration"
import {$TypeVariable} from "java.lang.reflect.TypeVariable"
import {$Member$$Interface} from "java.lang.reflect.Member"
import {$Annotation} from "java.lang.annotation.Annotation"
import {$AnnotatedType} from "java.lang.reflect.AnnotatedType"
import {$AccessibleObject} from "java.lang.reflect.AccessibleObject"
import {$Type} from "java.lang.reflect.Type"
import {$Set} from "java.util.Set"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Parameter} from "java.lang.reflect.Parameter"
import {$AccessFlag} from "java.lang.reflect.AccessFlag"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Executable extends $AccessibleObject implements $Member$$Interface, $GenericDeclaration$$Interface {
public "getName"(): StringJS
public "getModifiers"(): integer
public "getTypeParameters"(): ($TypeVariable<(never)>)[]
public "getParameterTypes"(): ($Class<(never)>)[]
public "isSynthetic"(): boolean
public "toGenericString"(): StringJS
public "accessFlags"(): $Set<($AccessFlag)>
public "getDeclaringClass"(): $Class<(never)>
public "getAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
public "getAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
public "getDeclaredAnnotations"(): ($Annotation)[]
public "isVarArgs"(): boolean
public "getAnnotatedParameterTypes"(): ($AnnotatedType)[]
public "getParameterCount"(): integer
public "getParameterAnnotations"(): (($Annotation)[])[]
public "getGenericParameterTypes"(): ($Type)[]
public "getGenericExceptionTypes"(): ($Type)[]
public "getExceptionTypes"(): ($Class<(never)>)[]
public "getAnnotatedReturnType"(): $AnnotatedType
public "getParameters"(): ($Parameter)[]
public "getAnnotatedReceiverType"(): $AnnotatedType
public "getAnnotatedExceptionTypes"(): ($AnnotatedType)[]
get "name"(): StringJS
get "modifiers"(): integer
get "typeParameters"(): ($TypeVariable<(never)>)[]
get "parameterTypes"(): ($Class<(never)>)[]
get "synthetic"(): boolean
get "declaringClass"(): $Class<(never)>
get "declaredAnnotations"(): ($Annotation)[]
get "varArgs"(): boolean
get "annotatedParameterTypes"(): ($AnnotatedType)[]
get "parameterCount"(): integer
get "parameterAnnotations"(): (($Annotation)[])[]
get "genericParameterTypes"(): ($Type)[]
get "genericExceptionTypes"(): ($Type)[]
get "exceptionTypes"(): ($Class<(never)>)[]
get "annotatedReturnType"(): $AnnotatedType
get "parameters"(): ($Parameter)[]
get "annotatedReceiverType"(): $AnnotatedType
get "annotatedExceptionTypes"(): ($AnnotatedType)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Executable$$Type = ($Executable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Executable$$Original = $Executable;}
declare module "java.lang.reflect.ClassFileFormatVersion" {
import {$Enum} from "java.lang.Enum"
import {$Runtime$Version, $Runtime$Version$$Type} from "java.lang.Runtime$Version"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ClassFileFormatVersion extends $Enum<($ClassFileFormatVersion)> {
static readonly "RELEASE_15": $ClassFileFormatVersion
static readonly "RELEASE_16": $ClassFileFormatVersion
static readonly "RELEASE_17": $ClassFileFormatVersion
static readonly "RELEASE_18": $ClassFileFormatVersion
static readonly "RELEASE_11": $ClassFileFormatVersion
static readonly "RELEASE_12": $ClassFileFormatVersion
static readonly "RELEASE_13": $ClassFileFormatVersion
static readonly "RELEASE_14": $ClassFileFormatVersion
static readonly "RELEASE_20": $ClassFileFormatVersion
static readonly "RELEASE_10": $ClassFileFormatVersion
static readonly "RELEASE_21": $ClassFileFormatVersion
static readonly "RELEASE_9": $ClassFileFormatVersion
static readonly "RELEASE_8": $ClassFileFormatVersion
static readonly "RELEASE_7": $ClassFileFormatVersion
static readonly "RELEASE_6": $ClassFileFormatVersion
static readonly "RELEASE_5": $ClassFileFormatVersion
static readonly "RELEASE_4": $ClassFileFormatVersion
static readonly "RELEASE_3": $ClassFileFormatVersion
static readonly "RELEASE_2": $ClassFileFormatVersion
static readonly "RELEASE_1": $ClassFileFormatVersion
static readonly "RELEASE_0": $ClassFileFormatVersion
static readonly "RELEASE_19": $ClassFileFormatVersion

public static "values"(): ($ClassFileFormatVersion)[]
public static "valueOf"(arg0: StringJS): $ClassFileFormatVersion
public static "valueOf"(arg0: $Runtime$Version$$Type): $ClassFileFormatVersion
public "major"(): integer
public static "latest"(): $ClassFileFormatVersion
public "runtimeVersion"(): $Runtime$Version
public static "fromMajor"(arg0: integer): $ClassFileFormatVersion
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClassFileFormatVersion$$Type = (("release_0") | ("release_1") | ("release_2") | ("release_3") | ("release_4") | ("release_5") | ("release_6") | ("release_7") | ("release_8") | ("release_9") | ("release_10") | ("release_11") | ("release_12") | ("release_13") | ("release_14") | ("release_15") | ("release_16") | ("release_17") | ("release_18") | ("release_19") | ("release_20") | ("release_21"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClassFileFormatVersion$$Original = $ClassFileFormatVersion;}
declare module "java.lang.reflect.GenericDeclaration" {
import {$TypeVariable} from "java.lang.reflect.TypeVariable"
import {$AnnotatedElement$$Interface} from "java.lang.reflect.AnnotatedElement"
import {$Annotation, $Annotation$$Type} from "java.lang.annotation.Annotation"
import {$Class$$Type} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $GenericDeclaration$$Interface extends $AnnotatedElement$$Interface {
get "typeParameters"(): ($TypeVariable<(never)>)[]
get "annotations"(): ($Annotation)[]
get "declaredAnnotations"(): ($Annotation)[]
}

export class $GenericDeclaration implements $GenericDeclaration$$Interface {
 "getTypeParameters"(): ($TypeVariable<(never)>)[]
 "isAnnotationPresent"(arg0: $Class$$Type<($Annotation$$Type)>): boolean
 "getAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
 "getAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
 "getAnnotations"(): ($Annotation)[]
 "getDeclaredAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
 "getDeclaredAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
 "getDeclaredAnnotations"(): ($Annotation)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericDeclaration$$Type = ($GenericDeclaration);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GenericDeclaration$$Original = $GenericDeclaration;}
declare module "java.lang.reflect.AnnotatedType" {
import {$AnnotatedElement$$Interface} from "java.lang.reflect.AnnotatedElement"
import {$Annotation, $Annotation$$Type} from "java.lang.annotation.Annotation"
import {$Type} from "java.lang.reflect.Type"
import {$Class$$Type} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $AnnotatedType$$Interface extends $AnnotatedElement$$Interface {
get "annotations"(): ($Annotation)[]
get "declaredAnnotations"(): ($Annotation)[]
get "type"(): $Type
get "annotatedOwnerType"(): $AnnotatedType
}

export class $AnnotatedType implements $AnnotatedType$$Interface {
 "getAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
 "getAnnotations"(): ($Annotation)[]
 "getDeclaredAnnotations"(): ($Annotation)[]
 "getType"(): $Type
 "getAnnotatedOwnerType"(): $AnnotatedType
 "isAnnotationPresent"(arg0: $Class$$Type<($Annotation$$Type)>): boolean
 "getAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
 "getDeclaredAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
 "getDeclaredAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnnotatedType$$Type = ($AnnotatedType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnnotatedType$$Original = $AnnotatedType;}
declare module "java.lang.reflect.AccessFlag$Location" {
import {$Enum} from "java.lang.Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AccessFlag$Location extends $Enum<($AccessFlag$Location)> {
static readonly "MODULE": $AccessFlag$Location
static readonly "MODULE_EXPORTS": $AccessFlag$Location
static readonly "FIELD": $AccessFlag$Location
static readonly "METHOD_PARAMETER": $AccessFlag$Location
static readonly "MODULE_REQUIRES": $AccessFlag$Location
static readonly "METHOD": $AccessFlag$Location
static readonly "MODULE_OPENS": $AccessFlag$Location
static readonly "CLASS": $AccessFlag$Location
static readonly "INNER_CLASS": $AccessFlag$Location

public static "values"(): ($AccessFlag$Location)[]
public static "valueOf"(arg0: StringJS): $AccessFlag$Location
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessFlag$Location$$Type = (("class") | ("field") | ("method") | ("inner_class") | ("method_parameter") | ("module") | ("module_requires") | ("module_exports") | ("module_opens"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessFlag$Location$$Original = $AccessFlag$Location;}
declare module "java.lang.reflect.AnnotatedElement" {
import {$Annotation, $Annotation$$Type} from "java.lang.annotation.Annotation"
import {$Class$$Type} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $AnnotatedElement$$Interface {
get "annotations"(): ($Annotation)[]
get "declaredAnnotations"(): ($Annotation)[]
}

export class $AnnotatedElement implements $AnnotatedElement$$Interface {
 "isAnnotationPresent"(arg0: $Class$$Type<($Annotation$$Type)>): boolean
 "getAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
 "getAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
 "getAnnotations"(): ($Annotation)[]
 "getDeclaredAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
 "getDeclaredAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
 "getDeclaredAnnotations"(): ($Annotation)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnnotatedElement$$Type = ($AnnotatedElement);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnnotatedElement$$Original = $AnnotatedElement;}
declare module "java.lang.reflect.RecordComponent" {
import {$AnnotatedElement$$Interface} from "java.lang.reflect.AnnotatedElement"
import {$Annotation, $Annotation$$Type} from "java.lang.annotation.Annotation"
import {$AnnotatedType} from "java.lang.reflect.AnnotatedType"
import {$Type} from "java.lang.reflect.Type"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Method} from "java.lang.reflect.Method"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $RecordComponent implements $AnnotatedElement$$Interface {
public "getName"(): StringJS
public "toString"(): StringJS
public "getAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
public "getAnnotations"(): ($Annotation)[]
public "getDeclaredAnnotations"(): ($Annotation)[]
public "getGenericSignature"(): StringJS
public "getGenericType"(): $Type
public "getType"(): $Class<(never)>
public "getAnnotatedType"(): $AnnotatedType
public "getDeclaringRecord"(): $Class<(never)>
public "getAccessor"(): $Method
public "isAnnotationPresent"(arg0: $Class$$Type<($Annotation$$Type)>): boolean
public "getAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
public "getDeclaredAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
public "getDeclaredAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
get "name"(): StringJS
get "annotations"(): ($Annotation)[]
get "declaredAnnotations"(): ($Annotation)[]
get "genericSignature"(): StringJS
get "genericType"(): $Type
get "type"(): $Class<(never)>
get "annotatedType"(): $AnnotatedType
get "declaringRecord"(): $Class<(never)>
get "accessor"(): $Method
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecordComponent$$Type = ($RecordComponent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecordComponent$$Original = $RecordComponent;}
declare module "java.lang.reflect.AccessFlag" {
import {$Enum} from "java.lang.Enum"
import {$Set} from "java.util.Set"
import {$AccessFlag$Location, $AccessFlag$Location$$Type} from "java.lang.reflect.AccessFlag$Location"
import {$ClassFileFormatVersion$$Type} from "java.lang.reflect.ClassFileFormatVersion"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AccessFlag extends $Enum<($AccessFlag)> {
static readonly "TRANSITIVE": $AccessFlag
static readonly "SYNCHRONIZED": $AccessFlag
static readonly "VOLATILE": $AccessFlag
static readonly "VARARGS": $AccessFlag
static readonly "STRICT": $AccessFlag
static readonly "ENUM": $AccessFlag
static readonly "SUPER": $AccessFlag
static readonly "NATIVE": $AccessFlag
static readonly "SYNTHETIC": $AccessFlag
static readonly "FINAL": $AccessFlag
static readonly "BRIDGE": $AccessFlag
static readonly "ABSTRACT": $AccessFlag
static readonly "STATIC": $AccessFlag
static readonly "PRIVATE": $AccessFlag
static readonly "OPEN": $AccessFlag
static readonly "STATIC_PHASE": $AccessFlag
static readonly "MODULE": $AccessFlag
static readonly "INTERFACE": $AccessFlag
static readonly "ANNOTATION": $AccessFlag
static readonly "PUBLIC": $AccessFlag
static readonly "MANDATED": $AccessFlag
static readonly "PROTECTED": $AccessFlag
static readonly "TRANSIENT": $AccessFlag

public static "values"(): ($AccessFlag)[]
public static "valueOf"(arg0: StringJS): $AccessFlag
public static "maskToAccessFlags"(arg0: integer, arg1: $AccessFlag$Location$$Type): $Set<($AccessFlag)>
public "mask"(): integer
public "sourceModifier"(): boolean
public "locations"(): $Set<($AccessFlag$Location)>
public "locations"(arg0: $ClassFileFormatVersion$$Type): $Set<($AccessFlag$Location)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessFlag$$Type = (("public") | ("private") | ("protected") | ("static") | ("final") | ("super") | ("open") | ("transitive") | ("synchronized") | ("static_phase") | ("volatile") | ("bridge") | ("transient") | ("varargs") | ("native") | ("interface") | ("abstract") | ("strict") | ("synthetic") | ("annotation") | ("enum") | ("mandated") | ("module"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessFlag$$Original = $AccessFlag;}
