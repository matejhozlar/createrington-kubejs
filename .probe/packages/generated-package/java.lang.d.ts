declare module "java.lang.Thread$Builder$OfPlatform" {
import {$ThreadFactory} from "java.util.concurrent.ThreadFactory"
import {$ThreadGroup$$Type} from "java.lang.ThreadGroup"
import {$Thread} from "java.lang.Thread"
import {$Thread$Builder, $Thread$Builder$$Interface} from "java.lang.Thread$Builder"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Thread$UncaughtExceptionHandler$$Type} from "java.lang.Thread$UncaughtExceptionHandler"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Thread$Builder$OfPlatform$$Interface extends $Thread$Builder$$Interface {
}

export class $Thread$Builder$OfPlatform implements $Thread$Builder$OfPlatform$$Interface {
 "name"(arg0: StringJS, arg1: long): $Thread$Builder
 "name"(arg0: StringJS): $Thread$Builder
 "priority"(arg0: integer): $Thread$Builder$OfPlatform
 "group"(arg0: $ThreadGroup$$Type): $Thread$Builder$OfPlatform
 "daemon"(): $Thread$Builder$OfPlatform
 "daemon"(arg0: boolean): $Thread$Builder$OfPlatform
 "uncaughtExceptionHandler"(arg0: $Thread$UncaughtExceptionHandler$$Type): $Thread$Builder$OfPlatform
 "stackSize"(arg0: long): $Thread$Builder$OfPlatform
 "inheritInheritableThreadLocals"(arg0: boolean): $Thread$Builder$OfPlatform
 "factory"(): $ThreadFactory
 "start"(arg0: $Runnable$$Type): $Thread
 "unstarted"(arg0: $Runnable$$Type): $Thread
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Thread$Builder$OfPlatform$$Type = ($Thread$Builder$OfPlatform);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Thread$Builder$OfPlatform$$Original = $Thread$Builder$OfPlatform;}
declare module "java.lang.Math" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Math {
static readonly "E": double
static readonly "PI": double
static readonly "TAU": double

public static "abs"(arg0: double): double
public static "abs"(arg0: float): float
public static "abs"(arg0: long): long
public static "abs"(arg0: integer): integer
public static "sin"(arg0: double): double
public static "cos"(arg0: double): double
public static "tan"(arg0: double): double
public static "atan2"(arg0: double, arg1: double): double
public static "sqrt"(arg0: double): double
public static "log"(arg0: double): double
public static "log10"(arg0: double): double
public static "pow"(arg0: double, arg1: double): double
public static "exp"(arg0: double): double
public static "min"(arg0: double, arg1: double): double
public static "min"(arg0: float, arg1: float): float
public static "min"(arg0: long, arg1: long): long
public static "min"(arg0: integer, arg1: integer): integer
public static "max"(arg0: double, arg1: double): double
public static "max"(arg0: float, arg1: float): float
public static "max"(arg0: long, arg1: long): long
public static "max"(arg0: integer, arg1: integer): integer
public static "floor"(arg0: double): double
public static "ceil"(arg0: double): double
public static "rint"(arg0: double): double
public static "round"(arg0: float): integer
public static "round"(arg0: double): long
public static "addExact"(arg0: long, arg1: long): long
public static "addExact"(arg0: integer, arg1: integer): integer
public static "decrementExact"(arg0: integer): integer
public static "decrementExact"(arg0: long): long
public static "incrementExact"(arg0: long): long
public static "incrementExact"(arg0: integer): integer
public static "multiplyExact"(arg0: long, arg1: long): long
public static "multiplyExact"(arg0: long, arg1: integer): long
public static "multiplyExact"(arg0: integer, arg1: integer): integer
public static "multiplyHigh"(arg0: long, arg1: long): long
public static "unsignedMultiplyHigh"(arg0: long, arg1: long): long
public static "negateExact"(arg0: integer): integer
public static "negateExact"(arg0: long): long
public static "subtractExact"(arg0: long, arg1: long): long
public static "subtractExact"(arg0: integer, arg1: integer): integer
public static "fma"(arg0: double, arg1: double, arg2: double): double
public static "fma"(arg0: float, arg1: float, arg2: float): float
public static "copySign"(arg0: double, arg1: double): double
public static "copySign"(arg0: float, arg1: float): float
public static "signum"(arg0: double): double
public static "signum"(arg0: float): float
public static "clamp"(arg0: float, arg1: float, arg2: float): float
public static "clamp"(arg0: long, arg1: long, arg2: long): long
public static "clamp"(arg0: double, arg1: double, arg2: double): double
public static "clamp"(arg0: long, arg1: integer, arg2: integer): integer
public static "scalb"(arg0: float, arg1: integer): float
public static "scalb"(arg0: double, arg1: integer): double
public static "getExponent"(arg0: double): integer
public static "getExponent"(arg0: float): integer
public static "floorMod"(arg0: integer, arg1: integer): integer
public static "floorMod"(arg0: long, arg1: integer): integer
public static "floorMod"(arg0: long, arg1: long): long
public static "asin"(arg0: double): double
public static "acos"(arg0: double): double
public static "atan"(arg0: double): double
public static "cbrt"(arg0: double): double
public static "IEEEremainder"(arg0: double, arg1: double): double
public static "floorDiv"(arg0: long, arg1: long): long
public static "floorDiv"(arg0: long, arg1: integer): long
public static "floorDiv"(arg0: integer, arg1: integer): integer
public static "ceilDiv"(arg0: long, arg1: long): long
public static "ceilDiv"(arg0: long, arg1: integer): long
public static "ceilDiv"(arg0: integer, arg1: integer): integer
public static "ceilMod"(arg0: long, arg1: long): long
public static "ceilMod"(arg0: long, arg1: integer): integer
public static "ceilMod"(arg0: integer, arg1: integer): integer
public static "sinh"(arg0: double): double
public static "cosh"(arg0: double): double
public static "tanh"(arg0: double): double
public static "hypot"(arg0: double, arg1: double): double
public static "expm1"(arg0: double): double
public static "log1p"(arg0: double): double
public static "toRadians"(arg0: double): double
public static "toDegrees"(arg0: double): double
public static "random"(): double
public static "divideExact"(arg0: integer, arg1: integer): integer
public static "divideExact"(arg0: long, arg1: long): long
public static "floorDivExact"(arg0: long, arg1: long): long
public static "floorDivExact"(arg0: integer, arg1: integer): integer
public static "ceilDivExact"(arg0: long, arg1: long): long
public static "ceilDivExact"(arg0: integer, arg1: integer): integer
public static "toIntExact"(arg0: long): integer
public static "multiplyFull"(arg0: integer, arg1: integer): long
public static "absExact"(arg0: long): long
public static "absExact"(arg0: integer): integer
public static "ulp"(arg0: double): double
public static "ulp"(arg0: float): float
public static "nextAfter"(arg0: float, arg1: double): float
public static "nextAfter"(arg0: double, arg1: double): double
public static "nextUp"(arg0: double): double
public static "nextUp"(arg0: float): float
public static "nextDown"(arg0: double): double
public static "nextDown"(arg0: float): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Math$$Type = ($Math);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Math$$Original = $Math;}
declare module "java.lang.Long" {
import {$ConstantDesc$$Interface} from "java.lang.constant.ConstantDesc"
import {$MethodHandles$Lookup$$Type} from "java.lang.invoke.MethodHandles$Lookup"
import {$Constable$$Interface} from "java.lang.constant.Constable"
import {$Optional} from "java.util.Optional"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Class} from "java.lang.Class"

export class $Long extends number implements $Comparable$$Interface<(long)>, $Constable$$Interface, $ConstantDesc$$Interface {
static readonly "BYTES": integer
static readonly "SIZE": integer
static readonly "MAX_VALUE": long
static readonly "MIN_VALUE": long
static readonly "TYPE": $Class<(long)>

/**
 * 
 * @deprecated
 */
constructor(arg0: StringJS)
/**
 * 
 * @deprecated
 */
constructor(arg0: long)

public static "numberOfLeadingZeros"(arg0: long): integer
public static "numberOfTrailingZeros"(arg0: long): integer
public static "bitCount"(arg0: long): integer
public "equals"(arg0: any): boolean
public static "toString"(arg0: long): StringJS
public static "toString"(arg0: long, arg1: integer): StringJS
public "toString"(): StringJS
public static "hashCode"(arg0: long): integer
public "hashCode"(): integer
public static "min"(arg0: long, arg1: long): long
public static "max"(arg0: long, arg1: long): long
public static "signum"(arg0: long): integer
public static "expand"(arg0: long, arg1: long): long
public static "compareUnsigned"(arg0: long, arg1: long): integer
public static "divideUnsigned"(arg0: long, arg1: long): long
public static "remainderUnsigned"(arg0: long, arg1: long): long
public static "reverse"(arg0: long): long
public static "reverseBytes"(arg0: long): long
public static "compress"(arg0: long, arg1: long): long
public "compareTo"(arg0: long): integer
public "compareTo"(arg0: any): integer
public static "getLong"(arg0: StringJS, arg1: long): long
public static "getLong"(arg0: StringJS): long
public static "getLong"(arg0: StringJS, arg1: long): long
public static "compare"(arg0: long, arg1: long): integer
public "byteValue"(): byte
public "shortValue"(): short
public "intValue"(): integer
public "longValue"(): long
public "floatValue"(): float
public "doubleValue"(): double
public static "valueOf"(arg0: StringJS, arg1: integer): long
public static "valueOf"(arg0: StringJS): long
public static "valueOf"(arg0: long): long
public static "toHexString"(arg0: long): StringJS
public static "decode"(arg0: StringJS): long
public "resolveConstantDesc"(arg0: $MethodHandles$Lookup$$Type): long
public "describeConstable"(): $Optional<(long)>
public static "sum"(arg0: long, arg1: long): long
public static "toUnsignedString"(arg0: long, arg1: integer): StringJS
public static "toUnsignedString"(arg0: long): StringJS
public static "parseLong"(arg0: StringJS): long
public static "parseLong"(arg0: StringJS, arg1: integer): long
public static "parseLong"(arg0: charseq, arg1: integer, arg2: integer, arg3: integer): long
public static "toOctalString"(arg0: long): StringJS
public static "toBinaryString"(arg0: long): StringJS
public static "highestOneBit"(arg0: long): long
public static "lowestOneBit"(arg0: long): long
public static "rotateLeft"(arg0: long, arg1: integer): long
public static "rotateRight"(arg0: long, arg1: integer): long
public static "parseUnsignedLong"(arg0: StringJS): long
public static "parseUnsignedLong"(arg0: charseq, arg1: integer, arg2: integer, arg3: integer): long
public static "parseUnsignedLong"(arg0: StringJS, arg1: integer): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Long$$Type = ($Long);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Long$$Original = $Long;}
declare module "java.lang.Thread$Builder" {
import {$ThreadFactory} from "java.util.concurrent.ThreadFactory"
import {$Thread} from "java.lang.Thread"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Thread$UncaughtExceptionHandler$$Type} from "java.lang.Thread$UncaughtExceptionHandler"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Thread$Builder$$Interface {
}

export class $Thread$Builder implements $Thread$Builder$$Interface {
 "name"(arg0: StringJS): $Thread$Builder
 "name"(arg0: StringJS, arg1: long): $Thread$Builder
 "factory"(): $ThreadFactory
 "start"(arg0: $Runnable$$Type): $Thread
 "uncaughtExceptionHandler"(arg0: $Thread$UncaughtExceptionHandler$$Type): $Thread$Builder
 "inheritInheritableThreadLocals"(arg0: boolean): $Thread$Builder
 "unstarted"(arg0: $Runnable$$Type): $Thread
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Thread$Builder$$Type = ($Thread$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Thread$Builder$$Original = $Thread$Builder;}
declare module "java.lang.Package" {
import {$NamedPackage} from "java.lang.NamedPackage"
import {$AnnotatedElement$$Interface} from "java.lang.reflect.AnnotatedElement"
import {$Annotation, $Annotation$$Type} from "java.lang.annotation.Annotation"
import {$URL$$Type} from "java.net.URL"
import {$Class$$Type} from "java.lang.Class"

export class $Package extends $NamedPackage implements $AnnotatedElement$$Interface {
public "getName"(): StringJS
public "toString"(): StringJS
public "hashCode"(): integer
public "isAnnotationPresent"(arg0: $Class$$Type<($Annotation$$Type)>): boolean
/**
 * 
 * @deprecated
 */
public static "getPackage"(arg0: StringJS): $Package
public "getAnnotation"<A extends $Annotation>(arg0: $Class$$Type<(A)>): A
public "getAnnotationsByType"<A extends $Annotation>(arg0: $Class$$Type<(A)>): (A)[]
public "getAnnotations"(): ($Annotation)[]
public "getDeclaredAnnotation"<A extends $Annotation>(arg0: $Class$$Type<(A)>): A
public "getDeclaredAnnotationsByType"<A extends $Annotation>(arg0: $Class$$Type<(A)>): (A)[]
public "getDeclaredAnnotations"(): ($Annotation)[]
public "isSealed"(arg0: $URL$$Type): boolean
public "isSealed"(): boolean
public static "getPackages"(): ($Package)[]
public "getSpecificationTitle"(): StringJS
public "getSpecificationVersion"(): StringJS
public "getSpecificationVendor"(): StringJS
public "getImplementationTitle"(): StringJS
public "getImplementationVersion"(): StringJS
public "getImplementationVendor"(): StringJS
public "isCompatibleWith"(arg0: StringJS): boolean
get "name"(): StringJS
get "annotations"(): ($Annotation)[]
get "declaredAnnotations"(): ($Annotation)[]
get "sealed"(): boolean
get "packages"(): ($Package)[]
get "specificationTitle"(): StringJS
get "specificationVersion"(): StringJS
get "specificationVendor"(): StringJS
get "implementationTitle"(): StringJS
get "implementationVersion"(): StringJS
get "implementationVendor"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Package$$Type = ($Package);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Package$$Original = $Package;}
declare module "java.lang.Class" {
import {$Constable$$Interface} from "java.lang.constant.Constable"
import {$RecordComponent} from "java.lang.reflect.RecordComponent"
import {$Optional} from "java.util.Optional"
import {$ClassDesc} from "java.lang.constant.ClassDesc"
import {$TypeDescriptor$OfField, $TypeDescriptor$OfField$$Interface} from "java.lang.invoke.TypeDescriptor$OfField"
import {$Field} from "java.lang.reflect.Field"
import {$Method} from "java.lang.reflect.Method"
import {$AccessFlag} from "java.lang.reflect.AccessFlag"
import {$TypeVariable} from "java.lang.reflect.TypeVariable"
import {$GenericDeclaration$$Interface} from "java.lang.reflect.GenericDeclaration"
import {$AnnotatedElement$$Interface} from "java.lang.reflect.AnnotatedElement"
import {$Package} from "java.lang.Package"
import {$Annotation, $Annotation$$Type} from "java.lang.annotation.Annotation"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$AnnotatedType} from "java.lang.reflect.AnnotatedType"
import {$Type, $Type$$Interface} from "java.lang.reflect.Type"
import {$ProtectionDomain} from "java.security.ProtectionDomain"
import {$URL} from "java.net.URL"
import {$Set} from "java.util.Set"
import {$Constructor} from "java.lang.reflect.Constructor"
import {$InputStream} from "java.io.InputStream"
import {$ClassLoader, $ClassLoader$$Type} from "java.lang.ClassLoader"
import {$Module, $Module$$Type} from "java.lang.Module"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Class<T> implements $Serializable$$Interface, $GenericDeclaration$$Interface, $Type$$Interface, $AnnotatedElement$$Interface, $TypeDescriptor$OfField$$Interface<($Class<(never)>)>, $Constable$$Interface {
public "getName"(): StringJS
public static "forName"(arg0: StringJS, arg1: boolean, arg2: $ClassLoader$$Type): $Class<(never)>
public static "forName"(arg0: $Module$$Type, arg1: StringJS): $Class<(never)>
public static "forName"(arg0: StringJS): $Class<(never)>
public "toString"(): StringJS
public "getModule"(): $Module
public "getProtectionDomain"(): $ProtectionDomain
public "isAssignableFrom"(arg0: $Class$$Type<(never)>): boolean
public "isInstance"(arg0: any): boolean
public "getModifiers"(): integer
public "isInterface"(): boolean
public "isArray"(): boolean
public "isPrimitive"(): boolean
public "isHidden"(): boolean
public "getSuperclass"(): $Class<(T)>
public "cast"(arg0: any): T
public "componentType"(): $TypeDescriptor$OfField
public "describeConstable"(): $Optional<($ClassDesc)>
public "getComponentType"(): $Class<(never)>
public "isAnnotation"(): boolean
public "isEnum"(): boolean
public "isRecord"(): boolean
public "getTypeParameters"(): ($TypeVariable<($Class<(T)>)>)[]
public "getClassLoader"(): $ClassLoader
/**
 * 
 * @deprecated
 */
public "newInstance"(): T
public "getInterfaces"(): ($Class<(never)>)[]
public "isMemberClass"(): boolean
public "isLocalClass"(): boolean
public "isAnonymousClass"(): boolean
public "getEnclosingClass"(): $Class<(never)>
public "isUnnamedClass"(): boolean
public "getSimpleName"(): StringJS
public "getCanonicalName"(): StringJS
public "isSynthetic"(): boolean
public "getResourceAsStream"(arg0: StringJS): $InputStream
public "getResource"(arg0: StringJS): $URL
public "getPackageName"(): StringJS
public "desiredAssertionStatus"(): boolean
public "getMethod"(arg0: StringJS, ...arg1: ($Class$$Type<(never)>)[]): $Method
public "isAnnotationPresent"(arg0: $Class$$Type<($Annotation$$Type)>): boolean
public "getNestHost"(): $Class<(never)>
public "descriptorString"(): StringJS
public "getPermittedSubclasses"(): ($Class<(never)>)[]
public "arrayType"(): $Class<(never)>
public "toGenericString"(): StringJS
public "getGenericSuperclass"(): $Type
public "getPackage"(): $Package
public "getGenericInterfaces"(): ($Type)[]
public "accessFlags"(): $Set<($AccessFlag)>
public "getSigners"(): (any)[]
public "getEnclosingMethod"(): $Method
public "getEnclosingConstructor"(): $Constructor<(never)>
public "getDeclaringClass"(): $Class<(never)>
public "getTypeName"(): StringJS
public "getClasses"(): ($Class<(never)>)[]
public "getFields"(): ($Field)[]
public "getMethods"(): ($Method)[]
public "getConstructors"(): ($Constructor<(never)>)[]
public "getField"(arg0: StringJS): $Field
public "getConstructor"(...arg0: ($Class$$Type<(never)>)[]): $Constructor<(T)>
public "getDeclaredClasses"(): ($Class<(never)>)[]
public "getDeclaredFields"(): ($Field)[]
public "getRecordComponents"(): ($RecordComponent)[]
public "getDeclaredMethods"(): ($Method)[]
public "getDeclaredConstructors"(): ($Constructor<(never)>)[]
public "getDeclaredField"(arg0: StringJS): $Field
public "getDeclaredMethod"(arg0: StringJS, ...arg1: ($Class$$Type<(never)>)[]): $Method
public "getDeclaredConstructor"(...arg0: ($Class$$Type<(never)>)[]): $Constructor<(T)>
public "getEnumConstants"(): (T)[]
public "asSubclass"<U>(arg0: $Class$$Type<(U)>): $Class<(U)>
public "getAnnotation"<A extends $Annotation>(arg0: $Class$$Type<(A)>): A
public "getAnnotationsByType"<A extends $Annotation>(arg0: $Class$$Type<(A)>): (A)[]
public "getAnnotations"(): ($Annotation)[]
public "getDeclaredAnnotation"<A extends $Annotation>(arg0: $Class$$Type<(A)>): A
public "getDeclaredAnnotationsByType"<A extends $Annotation>(arg0: $Class$$Type<(A)>): (A)[]
public "getDeclaredAnnotations"(): ($Annotation)[]
public "getAnnotatedSuperclass"(): $AnnotatedType
public "getAnnotatedInterfaces"(): ($AnnotatedType)[]
public "isNestmateOf"(arg0: $Class$$Type<(never)>): boolean
public "getNestMembers"(): ($Class<(never)>)[]
public "isSealed"(): boolean
get "name"(): StringJS
get "module"(): $Module
get "protectionDomain"(): $ProtectionDomain
get "modifiers"(): integer
get "interface"(): boolean
get "array"(): boolean
get "primitive"(): boolean
get "hidden"(): boolean
get "superclass"(): $Class<(T)>
get "annotation"(): boolean
get "enum"(): boolean
get "record"(): boolean
get "typeParameters"(): ($TypeVariable<($Class<(T)>)>)[]
get "classLoader"(): $ClassLoader
get "interfaces"(): ($Class<(never)>)[]
get "memberClass"(): boolean
get "localClass"(): boolean
get "anonymousClass"(): boolean
get "enclosingClass"(): $Class<(never)>
get "unnamedClass"(): boolean
get "simpleName"(): StringJS
get "canonicalName"(): StringJS
get "synthetic"(): boolean
get "packageName"(): StringJS
get "nestHost"(): $Class<(never)>
get "permittedSubclasses"(): ($Class<(never)>)[]
get "genericSuperclass"(): $Type
get "package"(): $Package
get "genericInterfaces"(): ($Type)[]
get "signers"(): (any)[]
get "enclosingMethod"(): $Method
get "enclosingConstructor"(): $Constructor<(never)>
get "declaringClass"(): $Class<(never)>
get "typeName"(): StringJS
get "classes"(): ($Class<(never)>)[]
get "fields"(): ($Field)[]
get "methods"(): ($Method)[]
get "constructors"(): ($Constructor<(never)>)[]
get "declaredClasses"(): ($Class<(never)>)[]
get "declaredFields"(): ($Field)[]
get "recordComponents"(): ($RecordComponent)[]
get "declaredMethods"(): ($Method)[]
get "declaredConstructors"(): ($Constructor<(never)>)[]
get "enumConstants"(): (T)[]
get "annotations"(): ($Annotation)[]
get "declaredAnnotations"(): ($Annotation)[]
get "annotatedSuperclass"(): $AnnotatedType
get "annotatedInterfaces"(): ($AnnotatedType)[]
get "nestMembers"(): ($Class<(never)>)[]
get "sealed"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Class$$Type<T> = ($Class<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Class$$Original<T> = $Class<(T)>;}
declare module "java.lang.ModuleLayer" {
import {$Configuration, $Configuration$$Type} from "java.lang.module.Configuration"
import {$ModuleLayer$Controller} from "java.lang.ModuleLayer$Controller"
import {$Optional} from "java.util.Optional"
import {$Function$$Type} from "java.util.function.Function"
import {$List, $List$$Type} from "java.util.List"
import {$Set} from "java.util.Set"
import {$ClassLoader, $ClassLoader$$Type} from "java.lang.ClassLoader"
import {$Module} from "java.lang.Module"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleLayer {
public "toString"(): StringJS
public static "empty"(): $ModuleLayer
public static "boot"(): $ModuleLayer
public "modules"(): $Set<($Module)>
public "configuration"(): $Configuration
public "parents"(): $List<($ModuleLayer)>
public "findModule"(arg0: StringJS): $Optional<($Module)>
public "defineModules"(arg0: $Configuration$$Type, arg1: $Function$$Type<(StringJS), ($ClassLoader$$Type)>): $ModuleLayer
public static "defineModules"(arg0: $Configuration$$Type, arg1: $List$$Type<($ModuleLayer$$Type)>, arg2: $Function$$Type<(StringJS), ($ClassLoader$$Type)>): $ModuleLayer$Controller
public static "defineModulesWithOneLoader"(arg0: $Configuration$$Type, arg1: $List$$Type<($ModuleLayer$$Type)>, arg2: $ClassLoader$$Type): $ModuleLayer$Controller
public "defineModulesWithOneLoader"(arg0: $Configuration$$Type, arg1: $ClassLoader$$Type): $ModuleLayer
public static "defineModulesWithManyLoaders"(arg0: $Configuration$$Type, arg1: $List$$Type<($ModuleLayer$$Type)>, arg2: $ClassLoader$$Type): $ModuleLayer$Controller
public "defineModulesWithManyLoaders"(arg0: $Configuration$$Type, arg1: $ClassLoader$$Type): $ModuleLayer
public "findLoader"(arg0: StringJS): $ClassLoader
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleLayer$$Type = ($ModuleLayer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModuleLayer$$Original = $ModuleLayer;}
declare module "java.lang.IllegalStateException" {
import {$Throwable$$Type} from "java.lang.Throwable"
import {$RuntimeException} from "java.lang.RuntimeException"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $IllegalStateException extends $RuntimeException {
constructor(arg0: $Throwable$$Type)
constructor(arg0: StringJS, arg1: $Throwable$$Type)
constructor(arg0: StringJS)
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IllegalStateException$$Type = ($IllegalStateException);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IllegalStateException$$Original = $IllegalStateException;}
declare module "java.lang.ModuleLayer$Controller" {
import {$ModuleLayer} from "java.lang.ModuleLayer"
import {$Module$$Type} from "java.lang.Module"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleLayer$Controller {
public "addReads"(arg0: $Module$$Type, arg1: $Module$$Type): $ModuleLayer$Controller
public "addExports"(arg0: $Module$$Type, arg1: StringJS, arg2: $Module$$Type): $ModuleLayer$Controller
public "addOpens"(arg0: $Module$$Type, arg1: StringJS, arg2: $Module$$Type): $ModuleLayer$Controller
public "layer"(): $ModuleLayer
public "enableNativeAccess"(arg0: $Module$$Type): $ModuleLayer$Controller
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleLayer$Controller$$Type = ($ModuleLayer$Controller);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModuleLayer$Controller$$Original = $ModuleLayer$Controller;}
declare module "java.lang.Exception" {
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Exception extends $Throwable {
constructor(arg0: $Throwable$$Type)
constructor(arg0: StringJS, arg1: $Throwable$$Type)
constructor(arg0: StringJS)
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Exception$$Type = ($Exception);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Exception$$Original = $Exception;}
declare module "java.lang.Boolean" {
import {$Constable$$Interface} from "java.lang.constant.Constable"
import {$Optional} from "java.util.Optional"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Class} from "java.lang.Class"
import {$DynamicConstantDesc} from "java.lang.constant.DynamicConstantDesc"

export class $Boolean implements $Serializable$$Interface, $Comparable$$Interface<(boolean)>, $Constable$$Interface {
static readonly "TRUE": boolean
static readonly "FALSE": boolean
static readonly "TYPE": $Class<(boolean)>

/**
 * 
 * @deprecated
 */
constructor(arg0: boolean)
/**
 * 
 * @deprecated
 */
constructor(arg0: StringJS)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public static "toString"(arg0: boolean): StringJS
public "hashCode"(): integer
public static "hashCode"(arg0: boolean): integer
public "compareTo"(arg0: boolean): integer
public "compareTo"(arg0: any): integer
public static "getBoolean"(arg0: StringJS): boolean
public static "compare"(arg0: boolean, arg1: boolean): integer
public "booleanValue"(): boolean
public static "valueOf"(arg0: StringJS): boolean
public static "valueOf"(arg0: boolean): boolean
public "describeConstable"(): $Optional<($DynamicConstantDesc<(boolean)>)>
public static "parseBoolean"(arg0: StringJS): boolean
public static "logicalAnd"(arg0: boolean, arg1: boolean): boolean
public static "logicalOr"(arg0: boolean, arg1: boolean): boolean
public static "logicalXor"(arg0: boolean, arg1: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Boolean$$Type = ($Boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Boolean$$Original = $Boolean;}
declare module "java.lang.Double" {
import {$ConstantDesc$$Interface} from "java.lang.constant.ConstantDesc"
import {$MethodHandles$Lookup$$Type} from "java.lang.invoke.MethodHandles$Lookup"
import {$Constable$$Interface} from "java.lang.constant.Constable"
import {$Optional} from "java.util.Optional"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Class} from "java.lang.Class"

export class $Double extends number implements $Comparable$$Interface<(double)>, $Constable$$Interface, $ConstantDesc$$Interface {
static readonly "POSITIVE_INFINITY": double
static readonly "BYTES": integer
static readonly "MAX_EXPONENT": integer
static readonly "NEGATIVE_INFINITY": double
static readonly "MIN_NORMAL": double
static readonly "SIZE": integer
static readonly "NaN": double
static readonly "MAX_VALUE": double
static readonly "MIN_VALUE": double
static readonly "TYPE": $Class<(double)>
static readonly "MIN_EXPONENT": integer
static readonly "PRECISION": integer

/**
 * 
 * @deprecated
 */
constructor(arg0: double)
/**
 * 
 * @deprecated
 */
constructor(arg0: StringJS)

public "equals"(arg0: any): boolean
public static "toString"(arg0: double): StringJS
public "toString"(): StringJS
public "hashCode"(): integer
public static "hashCode"(arg0: double): integer
public static "min"(arg0: double, arg1: double): double
public static "max"(arg0: double, arg1: double): double
public "isInfinite"(): boolean
public static "isInfinite"(arg0: double): boolean
public static "isFinite"(arg0: double): boolean
public static "doubleToRawLongBits"(arg0: double): long
public static "doubleToLongBits"(arg0: double): long
public static "longBitsToDouble"(arg0: long): double
public "compareTo"(arg0: double): integer
public "compareTo"(arg0: any): integer
public static "compare"(arg0: double, arg1: double): integer
public "byteValue"(): byte
public "shortValue"(): short
public "intValue"(): integer
public "longValue"(): long
public "floatValue"(): float
public "doubleValue"(): double
public static "valueOf"(arg0: StringJS): double
public static "valueOf"(arg0: double): double
public static "toHexString"(arg0: double): StringJS
public "resolveConstantDesc"(arg0: $MethodHandles$Lookup$$Type): any
public "describeConstable"(): $Optional<(double)>
public "isNaN"(): boolean
public static "isNaN"(arg0: double): boolean
public static "sum"(arg0: double, arg1: double): double
public static "parseDouble"(arg0: StringJS): double
get "infinite"(): boolean
get "naN"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Double$$Type = ($Double);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Double$$Original = $Double;}
declare module "java.lang.Comparable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Comparable$$Interface<T> {

(arg0: T): integer
}

export class $Comparable<T> implements $Comparable$$Interface {
 "compareTo"(arg0: T): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Comparable$$Type<T> = ((arg0: T) => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Comparable$$Original<T> = $Comparable<(T)>;}
declare module "java.lang.Thread$UncaughtExceptionHandler" {
import {$Thread, $Thread$$Type} from "java.lang.Thread"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Thread$UncaughtExceptionHandler$$Interface {

(arg0: $Thread, arg1: $Throwable): void
}

export class $Thread$UncaughtExceptionHandler implements $Thread$UncaughtExceptionHandler$$Interface {
 "uncaughtException"(arg0: $Thread$$Type, arg1: $Throwable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Thread$UncaughtExceptionHandler$$Type = ((arg0: $Thread, arg1: $Throwable) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Thread$UncaughtExceptionHandler$$Original = $Thread$UncaughtExceptionHandler;}
declare module "java.lang.Throwable" {
import {$StackTraceElement, $StackTraceElement$$Type} from "java.lang.StackTraceElement"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$PrintStream$$Type} from "java.io.PrintStream"
import {$PrintWriter$$Type} from "java.io.PrintWriter"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Throwable implements $Serializable$$Interface {
constructor(arg0: $Throwable$$Type)
constructor(arg0: StringJS, arg1: $Throwable$$Type)
constructor(arg0: StringJS)
constructor()

public "printStackTrace"(arg0: $PrintWriter$$Type): void
public "printStackTrace"(): void
public "printStackTrace"(arg0: $PrintStream$$Type): void
public "getStackTrace"(): ($StackTraceElement)[]
public "fillInStackTrace"(): $Throwable
public "getCause"(): $Throwable
public "initCause"(arg0: $Throwable$$Type): $Throwable
public "toString"(): StringJS
public "getMessage"(): StringJS
public "getSuppressed"(): ($Throwable)[]
public "getLocalizedMessage"(): StringJS
public "setStackTrace"(arg0: ($StackTraceElement$$Type)[]): void
public "addSuppressed"(arg0: $Throwable$$Type): void
get "stackTrace"(): ($StackTraceElement)[]
get "cause"(): $Throwable
get "message"(): StringJS
get "suppressed"(): ($Throwable)[]
get "localizedMessage"(): StringJS
set "stackTrace"(value: ($StackTraceElement$$Type)[])
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Throwable$$Type = ($Throwable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Throwable$$Original = $Throwable;}
declare module "java.lang.RuntimeException" {
import {$Exception} from "java.lang.Exception"
import {$Throwable$$Type} from "java.lang.Throwable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $RuntimeException extends $Exception {
constructor(arg0: $Throwable$$Type)
constructor(arg0: StringJS, arg1: $Throwable$$Type)
constructor(arg0: StringJS)
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuntimeException$$Type = ($RuntimeException);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RuntimeException$$Original = $RuntimeException;}
declare module "java.lang.Record" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Record {
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Record$$Type = ($Record);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Record$$Original = $Record;}
declare module "java.lang.Readable" {
import {$CharBuffer, $CharBuffer$$Type} from "java.nio.CharBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Readable$$Interface {

(arg0: $CharBuffer): integer
}

export class $Readable implements $Readable$$Interface {
 "read"(arg0: $CharBuffer$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Readable$$Type = ((arg0: $CharBuffer) => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Readable$$Original = $Readable;}
declare module "java.lang.Enum" {
import {$Constable$$Interface} from "java.lang.constant.Constable"
import {$Optional} from "java.util.Optional"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Enum$EnumDesc} from "java.lang.Enum$EnumDesc"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Enum<E extends $Enum<(object)>> implements $Constable$$Interface, $Comparable$$Interface<(E)>, $Serializable$$Interface {
public "name"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: E): integer
public static "valueOf"<T extends $Enum<(object)>>(arg0: $Class$$Type<(T)>, arg1: StringJS): T
public "describeConstable"(): $Optional<($Enum$EnumDesc<(E)>)>
public "getDeclaringClass"(): $Class<(E)>
public "ordinal"(): integer
get "declaringClass"(): $Class<(E)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Enum$$Type<E> = ($Enum<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Enum$$Original<E> = $Enum<(E)>;}
declare module "java.lang.Thread$State" {
import {$Enum} from "java.lang.Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Thread$State extends $Enum<($Thread$State)> {
static readonly "NEW": $Thread$State
static readonly "TERMINATED": $Thread$State
static readonly "RUNNABLE": $Thread$State
static readonly "BLOCKED": $Thread$State
static readonly "WAITING": $Thread$State
static readonly "TIMED_WAITING": $Thread$State

public static "values"(): ($Thread$State)[]
public static "valueOf"(arg0: StringJS): $Thread$State
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Thread$State$$Type = (("new") | ("runnable") | ("blocked") | ("waiting") | ("timed_waiting") | ("terminated"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Thread$State$$Original = $Thread$State;}
declare module "java.lang.Runnable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Runnable$$Interface {

(): void
}

export class $Runnable implements $Runnable$$Interface {
 "run"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Runnable$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Runnable$$Original = $Runnable;}
declare module "java.lang.ThreadGroup" {
import {$Thread$$Type} from "java.lang.Thread"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$Thread$UncaughtExceptionHandler$$Interface} from "java.lang.Thread$UncaughtExceptionHandler"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ThreadGroup implements $Thread$UncaughtExceptionHandler$$Interface {
constructor(arg0: StringJS)
constructor(arg0: $ThreadGroup$$Type, arg1: StringJS)

public "getName"(): StringJS
public "interrupt"(): void
public "toString"(): StringJS
public "list"(): void
public "getParent"(): $ThreadGroup
/**
 * 
 * @deprecated
 */
public "checkAccess"(): void
/**
 * 
 * @deprecated
 */
public "setDaemon"(arg0: boolean): void
public "getMaxPriority"(): integer
/**
 * 
 * @deprecated
 */
public "isDaemon"(): boolean
public "activeCount"(): integer
public "enumerate"(arg0: ($ThreadGroup$$Type)[]): integer
public "enumerate"(arg0: ($ThreadGroup$$Type)[], arg1: boolean): integer
public "enumerate"(arg0: ($Thread$$Type)[]): integer
public "enumerate"(arg0: ($Thread$$Type)[], arg1: boolean): integer
public "uncaughtException"(arg0: $Thread$$Type, arg1: $Throwable$$Type): void
/**
 * 
 * @deprecated
 */
public "stop"(): void
/**
 * 
 * @deprecated
 */
public "suspend"(): void
/**
 * 
 * @deprecated
 */
public "resume"(): void
public "parentOf"(arg0: $ThreadGroup$$Type): boolean
public "activeGroupCount"(): integer
public "setMaxPriority"(arg0: integer): void
/**
 * 
 * @deprecated
 */
public "isDestroyed"(): boolean
/**
 * 
 * @deprecated
 */
public "destroy"(): void
get "name"(): StringJS
get "parent"(): $ThreadGroup
set "daemon"(value: boolean)
get "maxPriority"(): integer
get "daemon"(): boolean
set "maxPriority"(value: integer)
get "destroyed"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThreadGroup$$Type = ($ThreadGroup);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ThreadGroup$$Original = $ThreadGroup;}
declare module "java.lang.Module" {
import {$ModuleDescriptor} from "java.lang.module.ModuleDescriptor"
import {$AnnotatedElement$$Interface} from "java.lang.reflect.AnnotatedElement"
import {$ModuleLayer} from "java.lang.ModuleLayer"
import {$Annotation, $Annotation$$Type} from "java.lang.annotation.Annotation"
import {$Set} from "java.util.Set"
import {$Class$$Type} from "java.lang.Class"
import {$InputStream} from "java.io.InputStream"
import {$ClassLoader} from "java.lang.ClassLoader"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Module implements $AnnotatedElement$$Interface {
public "getName"(): StringJS
public "toString"(): StringJS
public "addReads"(arg0: $Module$$Type): $Module
public "addExports"(arg0: StringJS, arg1: $Module$$Type): $Module
public "addOpens"(arg0: StringJS, arg1: $Module$$Type): $Module
public "addUses"(arg0: $Class$$Type<(never)>): $Module
public "getClassLoader"(): $ClassLoader
public "getDescriptor"(): $ModuleDescriptor
public "isNamed"(): boolean
public "getResourceAsStream"(arg0: StringJS): $InputStream
public "isOpen"(arg0: StringJS): boolean
public "isOpen"(arg0: StringJS, arg1: $Module$$Type): boolean
public "getAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
public "getAnnotations"(): ($Annotation)[]
public "getDeclaredAnnotations"(): ($Annotation)[]
public "getPackages"(): $Set<(StringJS)>
public "isNativeAccessEnabled"(): boolean
public "canRead"(arg0: $Module$$Type): boolean
public "canUse"(arg0: $Class$$Type<(never)>): boolean
public "getLayer"(): $ModuleLayer
public "isExported"(arg0: StringJS): boolean
public "isExported"(arg0: StringJS, arg1: $Module$$Type): boolean
public "isAnnotationPresent"(arg0: $Class$$Type<($Annotation$$Type)>): boolean
public "getAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
public "getDeclaredAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
public "getDeclaredAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
get "name"(): StringJS
get "classLoader"(): $ClassLoader
get "descriptor"(): $ModuleDescriptor
get "named"(): boolean
get "annotations"(): ($Annotation)[]
get "declaredAnnotations"(): ($Annotation)[]
get "packages"(): $Set<(StringJS)>
get "nativeAccessEnabled"(): boolean
get "layer"(): $ModuleLayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Module$$Type = ($Module);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Module$$Original = $Module;}
declare module "java.lang.Thread" {
import {$Map} from "java.util.Map"
import {$StackTraceElement} from "java.lang.StackTraceElement"
import {$Thread$Builder$OfVirtual} from "java.lang.Thread$Builder$OfVirtual"
import {$Thread$State} from "java.lang.Thread$State"
import {$ThreadGroup, $ThreadGroup$$Type} from "java.lang.ThreadGroup"
import {$Thread$Builder$OfPlatform} from "java.lang.Thread$Builder$OfPlatform"
import {$Duration$$Type} from "java.time.Duration"
import {$Runnable$$Type, $Runnable$$Interface} from "java.lang.Runnable"
import {$Thread$UncaughtExceptionHandler, $Thread$UncaughtExceptionHandler$$Type} from "java.lang.Thread$UncaughtExceptionHandler"
import {$ClassLoader, $ClassLoader$$Type} from "java.lang.ClassLoader"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Thread implements $Runnable$$Interface {
static readonly "MIN_PRIORITY": integer
static readonly "MAX_PRIORITY": integer
static readonly "NORM_PRIORITY": integer

constructor()
constructor(arg0: $Runnable$$Type)
constructor(arg0: $ThreadGroup$$Type, arg1: $Runnable$$Type, arg2: StringJS, arg3: long, arg4: boolean)
constructor(arg0: $ThreadGroup$$Type, arg1: $Runnable$$Type, arg2: StringJS, arg3: long)
constructor(arg0: $ThreadGroup$$Type, arg1: $Runnable$$Type, arg2: StringJS)
constructor(arg0: $Runnable$$Type, arg1: StringJS)
constructor(arg0: $ThreadGroup$$Type, arg1: $Runnable$$Type)
constructor(arg0: StringJS)
constructor(arg0: $ThreadGroup$$Type, arg1: StringJS)

public "getName"(): StringJS
public "getStackTrace"(): ($StackTraceElement)[]
public "run"(): void
public "interrupt"(): void
public "toString"(): StringJS
public static "currentThread"(): $Thread
public static "onSpinWait"(): void
public "isVirtual"(): boolean
public "join"(arg0: long): void
public "join"(arg0: long, arg1: integer): void
public "join"(): void
public "join"(arg0: $Duration$$Type): boolean
public "setContextClassLoader"(arg0: $ClassLoader$$Type): void
public "getThreadGroup"(): $ThreadGroup
/**
 * 
 * @deprecated
 */
public "checkAccess"(): void
public static "dumpStack"(): void
public "setPriority"(arg0: integer): void
public "setDaemon"(arg0: boolean): void
public "start"(): void
public "getContextClassLoader"(): $ClassLoader
public "getPriority"(): integer
public "isDaemon"(): boolean
public static "interrupted"(): boolean
public static "activeCount"(): integer
public static "enumerate"(arg0: ($Thread$$Type)[]): integer
public "isAlive"(): boolean
public "threadId"(): long
public static "setDefaultUncaughtExceptionHandler"(arg0: $Thread$UncaughtExceptionHandler$$Type): void
public "getUncaughtExceptionHandler"(): $Thread$UncaughtExceptionHandler
public static "yield"(): void
public static "sleep"(arg0: long, arg1: integer): void
public static "sleep"(arg0: $Duration$$Type): void
public static "sleep"(arg0: long): void
public static "ofPlatform"(): $Thread$Builder$OfPlatform
public static "ofVirtual"(): $Thread$Builder$OfVirtual
public static "startVirtualThread"(arg0: $Runnable$$Type): $Thread
/**
 * 
 * @deprecated
 */
public "stop"(): void
public "isInterrupted"(): boolean
/**
 * 
 * @deprecated
 */
public "suspend"(): void
/**
 * 
 * @deprecated
 */
public "resume"(): void
public "setName"(arg0: StringJS): void
/**
 * 
 * @deprecated
 */
public "countStackFrames"(): integer
public static "holdsLock"(arg0: any): boolean
public static "getAllStackTraces"(): $Map<($Thread), (($StackTraceElement)[])>
/**
 * 
 * @deprecated
 */
public "getId"(): long
public "getState"(): $Thread$State
public static "getDefaultUncaughtExceptionHandler"(): $Thread$UncaughtExceptionHandler
public "setUncaughtExceptionHandler"(arg0: $Thread$UncaughtExceptionHandler$$Type): void
get "name"(): StringJS
get "stackTrace"(): ($StackTraceElement)[]
get "virtual"(): boolean
set "contextClassLoader"(value: $ClassLoader$$Type)
get "threadGroup"(): $ThreadGroup
set "priority"(value: integer)
set "daemon"(value: boolean)
get "contextClassLoader"(): $ClassLoader
get "priority"(): integer
get "daemon"(): boolean
get "alive"(): boolean
set "defaultUncaughtExceptionHandler"(value: $Thread$UncaughtExceptionHandler$$Type)
get "uncaughtExceptionHandler"(): $Thread$UncaughtExceptionHandler
set "name"(value: StringJS)
get "allStackTraces"(): $Map<($Thread), (($StackTraceElement)[])>
get "id"(): long
get "state"(): $Thread$State
get "defaultUncaughtExceptionHandler"(): $Thread$UncaughtExceptionHandler
set "uncaughtExceptionHandler"(value: $Thread$UncaughtExceptionHandler$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Thread$$Type = ($Thread);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Thread$$Original = $Thread;}
declare module "java.lang.AbstractStringBuilder" {
import {$IntStream} from "java.util.stream.IntStream"
import {$Appendable, $Appendable$$Interface} from "java.lang.Appendable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractStringBuilder implements $Appendable$$Interface, charseq {
public "append"(arg0: charseq): $Appendable
public "append"(arg0: charseq, arg1: integer, arg2: integer): $Appendable
public "append"(arg0: character): $Appendable
public "length"(): integer
public "toString"(): StringJS
public static "compare"(arg0: charseq, arg1: charseq): integer
public "charAt"(arg0: integer): character
public "isEmpty"(): boolean
public "codePoints"(): $IntStream
public "subSequence"(arg0: integer, arg1: integer): charseq
public "chars"(): $IntStream
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractStringBuilder$$Type = ($AbstractStringBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractStringBuilder$$Original = $AbstractStringBuilder;}
declare module "java.lang.Cloneable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Cloneable$$Interface {
}

export class $Cloneable implements $Cloneable$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Cloneable$$Type = ($Cloneable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Cloneable$$Original = $Cloneable;}
declare module "java.lang.ClassLoader" {
import {$Package} from "java.lang.Package"
import {$URL} from "java.net.URL"
import {$Class} from "java.lang.Class"
import {$InputStream} from "java.io.InputStream"
import {$Stream} from "java.util.stream.Stream"
import {$Enumeration} from "java.util.Enumeration"
import {$Module} from "java.lang.Module"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ClassLoader {
public "getName"(): StringJS
public "loadClass"(arg0: StringJS): $Class<(never)>
public static "getPlatformClassLoader"(): $ClassLoader
public static "getSystemClassLoader"(): $ClassLoader
public static "getSystemResourceAsStream"(arg0: StringJS): $InputStream
public "getResourceAsStream"(arg0: StringJS): $InputStream
public static "getSystemResource"(arg0: StringJS): $URL
public "getResource"(arg0: StringJS): $URL
public "getResources"(arg0: StringJS): $Enumeration<($URL)>
public "getDefinedPackage"(arg0: StringJS): $Package
public "resources"(arg0: StringJS): $Stream<($URL)>
public "isRegisteredAsParallelCapable"(): boolean
public static "getSystemResources"(arg0: StringJS): $Enumeration<($URL)>
public "getParent"(): $ClassLoader
public "getUnnamedModule"(): $Module
public "getDefinedPackages"(): ($Package)[]
public "setDefaultAssertionStatus"(arg0: boolean): void
public "setPackageAssertionStatus"(arg0: StringJS, arg1: boolean): void
public "setClassAssertionStatus"(arg0: StringJS, arg1: boolean): void
public "clearAssertionStatus"(): void
get "name"(): StringJS
get "platformClassLoader"(): $ClassLoader
get "systemClassLoader"(): $ClassLoader
get "registeredAsParallelCapable"(): boolean
get "parent"(): $ClassLoader
get "unnamedModule"(): $Module
get "definedPackages"(): ($Package)[]
set "defaultAssertionStatus"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClassLoader$$Type = ($ClassLoader);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClassLoader$$Original = $ClassLoader;}
declare module "java.lang.Iterable" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Spliterator} from "java.util.Spliterator"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $Iterable$$Interface<T> {

(): $Iterator$$Type<(T)>
[Symbol.iterator](): IterableIterator<T>;
}

export class $Iterable<T> implements $Iterable$$Interface {
 "iterator"(): $Iterator<(T)>
 "spliterator"(): $Spliterator<(T)>
 "forEach"(arg0: $Consumer$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Iterable$$Type<T> = ((T)[]) | (() => $Iterator$$Type<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Iterable$$Original<T> = $Iterable<(T)>;}
declare module "java.lang.StringBuilder" {
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$IntStream} from "java.util.stream.IntStream"
import {$Appendable, $Appendable$$Interface} from "java.lang.Appendable"
import {$StringBuffer$$Type} from "java.lang.StringBuffer"
import {$AbstractStringBuilder} from "java.lang.AbstractStringBuilder"

export class $StringBuilder extends $AbstractStringBuilder implements $Appendable$$Interface, $Serializable$$Interface, $Comparable$$Interface<($StringBuilder)>, charseq {
constructor(arg0: charseq)
constructor(arg0: StringJS)
constructor(arg0: integer)
constructor()

public "length"(): integer
public "toString"(): StringJS
public "append"(arg0: $StringBuffer$$Type): $AbstractStringBuilder
public "append"(arg0: charseq): $AbstractStringBuilder
public "append"(arg0: charseq, arg1: integer, arg2: integer): $AbstractStringBuilder
public "append"(arg0: (character)[]): $AbstractStringBuilder
public "append"(arg0: StringJS): $AbstractStringBuilder
public "append"(arg0: any): $AbstractStringBuilder
public "append"(arg0: character): $Appendable
public "append"(arg0: integer): $AbstractStringBuilder
public "append"(arg0: long): $AbstractStringBuilder
public "append"(arg0: float): $AbstractStringBuilder
public "append"(arg0: double): $AbstractStringBuilder
public "append"(arg0: boolean): $AbstractStringBuilder
public "append"(arg0: (character)[], arg1: integer, arg2: integer): $AbstractStringBuilder
public "reverse"(): $StringBuilder
public "getChars"(arg0: integer, arg1: integer, arg2: (character)[], arg3: integer): void
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $StringBuilder$$Type): integer
public "indexOf"(arg0: StringJS, arg1: integer): integer
public "indexOf"(arg0: StringJS): integer
public "insert"(arg0: integer, arg1: charseq): $StringBuilder
public "insert"(arg0: integer, arg1: StringJS): $StringBuilder
public "insert"(arg0: integer, arg1: (character)[]): $StringBuilder
public "insert"(arg0: integer, arg1: any): $AbstractStringBuilder
public "insert"(arg0: integer, arg1: (character)[], arg2: integer, arg3: integer): $AbstractStringBuilder
public "insert"(arg0: integer, arg1: integer): $StringBuilder
public "insert"(arg0: integer, arg1: double): $StringBuilder
public "insert"(arg0: integer, arg1: float): $StringBuilder
public "insert"(arg0: integer, arg1: long): $StringBuilder
public "insert"(arg0: integer, arg1: character): $StringBuilder
public "insert"(arg0: integer, arg1: boolean): $StringBuilder
public "insert"(arg0: integer, arg1: charseq, arg2: integer, arg3: integer): $StringBuilder
public "charAt"(arg0: integer): character
public "codePointAt"(arg0: integer): integer
public "codePointBefore"(arg0: integer): integer
public "codePointCount"(arg0: integer, arg1: integer): integer
public "offsetByCodePoints"(arg0: integer, arg1: integer): integer
public "lastIndexOf"(arg0: StringJS, arg1: integer): integer
public "lastIndexOf"(arg0: StringJS): integer
public "substring"(arg0: integer): StringJS
public "substring"(arg0: integer, arg1: integer): StringJS
public "replace"(arg0: integer, arg1: integer, arg2: StringJS): $StringBuilder
public "repeat"(arg0: charseq, arg1: integer): $StringBuilder
public "repeat"(arg0: integer, arg1: integer): $AbstractStringBuilder
public "codePoints"(): $IntStream
public "subSequence"(arg0: integer, arg1: integer): charseq
public "chars"(): $IntStream
public "delete"(arg0: integer, arg1: integer): $StringBuilder
public "setLength"(arg0: integer): void
public "capacity"(): integer
public "ensureCapacity"(arg0: integer): void
public "trimToSize"(): void
public "setCharAt"(arg0: integer, arg1: character): void
public "appendCodePoint"(arg0: integer): $AbstractStringBuilder
public "deleteCharAt"(arg0: integer): $StringBuilder
public static "compare"(arg0: charseq, arg1: charseq): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringBuilder$$Type = ($StringBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StringBuilder$$Original = $StringBuilder;}
declare module "java.lang.Float" {
import {$ConstantDesc$$Interface} from "java.lang.constant.ConstantDesc"
import {$MethodHandles$Lookup$$Type} from "java.lang.invoke.MethodHandles$Lookup"
import {$Constable$$Interface} from "java.lang.constant.Constable"
import {$Optional} from "java.util.Optional"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Class} from "java.lang.Class"

export class $Float extends number implements $Comparable$$Interface<(float)>, $Constable$$Interface, $ConstantDesc$$Interface {
static readonly "POSITIVE_INFINITY": float
static readonly "BYTES": integer
static readonly "MAX_EXPONENT": integer
static readonly "NEGATIVE_INFINITY": float
static readonly "MIN_NORMAL": float
static readonly "SIZE": integer
static readonly "NaN": float
static readonly "MAX_VALUE": float
static readonly "MIN_VALUE": float
static readonly "TYPE": $Class<(float)>
static readonly "MIN_EXPONENT": integer
static readonly "PRECISION": integer

/**
 * 
 * @deprecated
 */
constructor(arg0: StringJS)
/**
 * 
 * @deprecated
 */
constructor(arg0: double)
/**
 * 
 * @deprecated
 */
constructor(arg0: float)

public "equals"(arg0: any): boolean
public static "toString"(arg0: float): StringJS
public "toString"(): StringJS
public static "hashCode"(arg0: float): integer
public "hashCode"(): integer
public static "min"(arg0: float, arg1: float): float
public static "max"(arg0: float, arg1: float): float
public static "isInfinite"(arg0: float): boolean
public "isInfinite"(): boolean
public static "isFinite"(arg0: float): boolean
public static "floatToRawIntBits"(arg0: float): integer
public static "floatToIntBits"(arg0: float): integer
public static "intBitsToFloat"(arg0: integer): float
public static "float16ToFloat"(arg0: short): float
public static "floatToFloat16"(arg0: float): short
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: float): integer
public static "compare"(arg0: float, arg1: float): integer
public "byteValue"(): byte
public "shortValue"(): short
public "intValue"(): integer
public "longValue"(): long
public "floatValue"(): float
public "doubleValue"(): double
public static "valueOf"(arg0: float): float
public static "valueOf"(arg0: StringJS): float
public static "toHexString"(arg0: float): StringJS
public "resolveConstantDesc"(arg0: $MethodHandles$Lookup$$Type): float
public "describeConstable"(): $Optional<(float)>
public static "isNaN"(arg0: float): boolean
public "isNaN"(): boolean
public static "sum"(arg0: float, arg1: float): float
public static "parseFloat"(arg0: StringJS): float
get "infinite"(): boolean
get "naN"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Float$$Type = ($Float);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Float$$Original = $Float;}
declare module "java.lang.Thread$Builder$OfVirtual" {
import {$ThreadFactory} from "java.util.concurrent.ThreadFactory"
import {$Thread} from "java.lang.Thread"
import {$Thread$Builder, $Thread$Builder$$Interface} from "java.lang.Thread$Builder"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Thread$UncaughtExceptionHandler$$Type} from "java.lang.Thread$UncaughtExceptionHandler"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Thread$Builder$OfVirtual$$Interface extends $Thread$Builder$$Interface {
}

export class $Thread$Builder$OfVirtual implements $Thread$Builder$OfVirtual$$Interface {
 "name"(arg0: StringJS, arg1: long): $Thread$Builder
 "name"(arg0: StringJS): $Thread$Builder
 "uncaughtExceptionHandler"(arg0: $Thread$UncaughtExceptionHandler$$Type): $Thread$Builder
 "inheritInheritableThreadLocals"(arg0: boolean): $Thread$Builder$OfVirtual
 "factory"(): $ThreadFactory
 "start"(arg0: $Runnable$$Type): $Thread
 "unstarted"(arg0: $Runnable$$Type): $Thread
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Thread$Builder$OfVirtual$$Type = ($Thread$Builder$OfVirtual);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Thread$Builder$OfVirtual$$Original = $Thread$Builder$OfVirtual;}
declare module "java.lang.AutoCloseable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AutoCloseable$$Interface {

(): void
}

export class $AutoCloseable implements $AutoCloseable$$Interface {
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoCloseable$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AutoCloseable$$Original = $AutoCloseable;}
declare module "java.lang.Appendable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Appendable$$Interface {
}

export class $Appendable implements $Appendable$$Interface {
 "append"(arg0: charseq): $Appendable
 "append"(arg0: charseq, arg1: integer, arg2: integer): $Appendable
 "append"(arg0: character): $Appendable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Appendable$$Type = ($Appendable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Appendable$$Original = $Appendable;}
declare module "java.lang.Integer" {
import {$ConstantDesc$$Interface} from "java.lang.constant.ConstantDesc"
import {$MethodHandles$Lookup$$Type} from "java.lang.invoke.MethodHandles$Lookup"
import {$Constable$$Interface} from "java.lang.constant.Constable"
import {$Optional} from "java.util.Optional"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Class} from "java.lang.Class"

export class $Integer extends number implements $Comparable$$Interface<(integer)>, $Constable$$Interface, $ConstantDesc$$Interface {
static readonly "BYTES": integer
static readonly "SIZE": integer
static readonly "MAX_VALUE": integer
static readonly "MIN_VALUE": integer
static readonly "TYPE": $Class<(integer)>

/**
 * 
 * @deprecated
 */
constructor(arg0: StringJS)
/**
 * 
 * @deprecated
 */
constructor(arg0: integer)

public static "numberOfLeadingZeros"(arg0: integer): integer
public static "numberOfTrailingZeros"(arg0: integer): integer
public static "bitCount"(arg0: integer): integer
public "equals"(arg0: any): boolean
public static "toString"(arg0: integer): StringJS
public "toString"(): StringJS
public static "toString"(arg0: integer, arg1: integer): StringJS
public "hashCode"(): integer
public static "hashCode"(arg0: integer): integer
public static "min"(arg0: integer, arg1: integer): integer
public static "max"(arg0: integer, arg1: integer): integer
public static "signum"(arg0: integer): integer
public static "expand"(arg0: integer, arg1: integer): integer
public static "compareUnsigned"(arg0: integer, arg1: integer): integer
public static "divideUnsigned"(arg0: integer, arg1: integer): integer
public static "remainderUnsigned"(arg0: integer, arg1: integer): integer
public static "reverse"(arg0: integer): integer
public static "reverseBytes"(arg0: integer): integer
public static "compress"(arg0: integer, arg1: integer): integer
public "compareTo"(arg0: integer): integer
public "compareTo"(arg0: any): integer
public static "compare"(arg0: integer, arg1: integer): integer
public "byteValue"(): byte
public "shortValue"(): short
public "intValue"(): integer
public "longValue"(): long
public "floatValue"(): float
public "doubleValue"(): double
public static "valueOf"(arg0: StringJS): integer
public static "valueOf"(arg0: integer): integer
public static "valueOf"(arg0: StringJS, arg1: integer): integer
public static "toHexString"(arg0: integer): StringJS
public static "decode"(arg0: StringJS): integer
public "resolveConstantDesc"(arg0: $MethodHandles$Lookup$$Type): integer
public "describeConstable"(): $Optional<(integer)>
public static "parseInt"(arg0: charseq, arg1: integer, arg2: integer, arg3: integer): integer
public static "parseInt"(arg0: StringJS): integer
public static "parseInt"(arg0: StringJS, arg1: integer): integer
public static "toUnsignedLong"(arg0: integer): long
public static "sum"(arg0: integer, arg1: integer): integer
public static "toUnsignedString"(arg0: integer, arg1: integer): StringJS
public static "toUnsignedString"(arg0: integer): StringJS
public static "parseUnsignedInt"(arg0: StringJS, arg1: integer): integer
public static "parseUnsignedInt"(arg0: charseq, arg1: integer, arg2: integer, arg3: integer): integer
public static "parseUnsignedInt"(arg0: StringJS): integer
public static "getInteger"(arg0: StringJS, arg1: integer): integer
public static "getInteger"(arg0: StringJS): integer
public static "getInteger"(arg0: StringJS, arg1: integer): integer
public static "toOctalString"(arg0: integer): StringJS
public static "toBinaryString"(arg0: integer): StringJS
public static "highestOneBit"(arg0: integer): integer
public static "lowestOneBit"(arg0: integer): integer
public static "rotateLeft"(arg0: integer, arg1: integer): integer
public static "rotateRight"(arg0: integer, arg1: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Integer$$Type = ($Integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Integer$$Original = $Integer;}
declare module "java.lang.Short" {
import {$Constable$$Interface} from "java.lang.constant.Constable"
import {$Optional} from "java.util.Optional"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Class} from "java.lang.Class"
import {$DynamicConstantDesc} from "java.lang.constant.DynamicConstantDesc"

export class $Short extends number implements $Comparable$$Interface<(short)>, $Constable$$Interface {
static readonly "BYTES": integer
static readonly "SIZE": integer
static readonly "MAX_VALUE": short
static readonly "MIN_VALUE": short
static readonly "TYPE": $Class<(short)>

/**
 * 
 * @deprecated
 */
constructor(arg0: short)
/**
 * 
 * @deprecated
 */
constructor(arg0: StringJS)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public static "toString"(arg0: short): StringJS
public static "hashCode"(arg0: short): integer
public "hashCode"(): integer
public static "compareUnsigned"(arg0: short, arg1: short): integer
public static "reverseBytes"(arg0: short): short
public "compareTo"(arg0: short): integer
public "compareTo"(arg0: any): integer
public static "compare"(arg0: short, arg1: short): integer
public "byteValue"(): byte
public "shortValue"(): short
public "intValue"(): integer
public "longValue"(): long
public "floatValue"(): float
public "doubleValue"(): double
public static "valueOf"(arg0: StringJS, arg1: integer): short
public static "valueOf"(arg0: StringJS): short
public static "valueOf"(arg0: short): short
public static "decode"(arg0: StringJS): short
public "describeConstable"(): $Optional<($DynamicConstantDesc<(short)>)>
public static "toUnsignedLong"(arg0: short): long
public static "toUnsignedInt"(arg0: short): integer
public static "parseShort"(arg0: StringJS): short
public static "parseShort"(arg0: StringJS, arg1: integer): short
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Short$$Type = ($Short);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Short$$Original = $Short;}
declare module "java.lang.StackTraceElement" {
import {$Serializable$$Interface} from "java.io.Serializable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $StackTraceElement implements $Serializable$$Interface {
constructor(arg0: StringJS, arg1: StringJS, arg2: StringJS, arg3: StringJS, arg4: StringJS, arg5: StringJS, arg6: integer)
constructor(arg0: StringJS, arg1: StringJS, arg2: StringJS, arg3: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getClassName"(): StringJS
public "isNativeMethod"(): boolean
public "getFileName"(): StringJS
public "getLineNumber"(): integer
public "getModuleName"(): StringJS
public "getModuleVersion"(): StringJS
public "getClassLoaderName"(): StringJS
public "getMethodName"(): StringJS
get "className"(): StringJS
get "nativeMethod"(): boolean
get "fileName"(): StringJS
get "lineNumber"(): integer
get "moduleName"(): StringJS
get "moduleVersion"(): StringJS
get "classLoaderName"(): StringJS
get "methodName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StackTraceElement$$Type = ($StackTraceElement);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StackTraceElement$$Original = $StackTraceElement;}
declare module "java.lang.NamedPackage" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $NamedPackage {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NamedPackage$$Type = ($NamedPackage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NamedPackage$$Original = $NamedPackage;}
declare module "java.lang.CharSequence" {
import {$IntStream} from "java.util.stream.IntStream"

export interface $CharSequence$$Interface {
get "empty"(): boolean
}

export class $CharSequence implements $CharSequence$$Interface {
 "length"(): integer
 "toString"(): StringJS
static "compare"(arg0: charseq, arg1: charseq): integer
 "charAt"(arg0: integer): character
 "isEmpty"(): boolean
 "codePoints"(): $IntStream
 "subSequence"(arg0: integer, arg1: integer): charseq
 "chars"(): $IntStream
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CharSequence$$Type = ($CharSequence);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CharSequence$$Original = $CharSequence;}
declare module "java.lang.Number" {
import {$Serializable$$Interface} from "java.io.Serializable"

export class $Number implements $Serializable$$Interface {
constructor()

public "byteValue"(): byte
public "shortValue"(): short
public "intValue"(): integer
public "longValue"(): long
public "floatValue"(): float
public "doubleValue"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Number$$Type = ($Number);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Number$$Original = $Number;}
declare module "java.lang.Byte" {
import {$Constable$$Interface} from "java.lang.constant.Constable"
import {$Optional} from "java.util.Optional"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Class} from "java.lang.Class"
import {$DynamicConstantDesc} from "java.lang.constant.DynamicConstantDesc"

export class $Byte extends number implements $Comparable$$Interface<(byte)>, $Constable$$Interface {
static readonly "BYTES": integer
static readonly "SIZE": integer
static readonly "MAX_VALUE": byte
static readonly "MIN_VALUE": byte
static readonly "TYPE": $Class<(byte)>

/**
 * 
 * @deprecated
 */
constructor(arg0: byte)
/**
 * 
 * @deprecated
 */
constructor(arg0: StringJS)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public static "toString"(arg0: byte): StringJS
public static "hashCode"(arg0: byte): integer
public "hashCode"(): integer
public static "compareUnsigned"(arg0: byte, arg1: byte): integer
public "compareTo"(arg0: byte): integer
public "compareTo"(arg0: any): integer
public static "compare"(arg0: byte, arg1: byte): integer
public "byteValue"(): byte
public "shortValue"(): short
public "intValue"(): integer
public "longValue"(): long
public "floatValue"(): float
public "doubleValue"(): double
public static "valueOf"(arg0: StringJS): byte
public static "valueOf"(arg0: StringJS, arg1: integer): byte
public static "valueOf"(arg0: byte): byte
public static "decode"(arg0: StringJS): byte
public "describeConstable"(): $Optional<($DynamicConstantDesc<(byte)>)>
public static "toUnsignedLong"(arg0: byte): long
public static "toUnsignedInt"(arg0: byte): integer
public static "parseByte"(arg0: StringJS): byte
public static "parseByte"(arg0: StringJS, arg1: integer): byte
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Byte$$Type = ($Byte);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Byte$$Original = $Byte;}
declare module "java.lang.Runtime$Version" {
import {$Optional} from "java.util.Optional"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$List} from "java.util.List"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Runtime$Version implements $Comparable$$Interface<($Runtime$Version)> {
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "version"(): $List<(integer)>
public "hashCode"(): integer
public "compareTo"(arg0: $Runtime$Version$$Type): integer
public "compareTo"(arg0: any): integer
public "update"(): integer
public "feature"(): integer
/**
 * 
 * @deprecated
 */
public "security"(): integer
public static "parse"(arg0: StringJS): $Runtime$Version
/**
 * 
 * @deprecated
 */
public "major"(): integer
/**
 * 
 * @deprecated
 */
public "minor"(): integer
public "pre"(): $Optional<(StringJS)>
public "build"(): $Optional<(integer)>
public "optional"(): $Optional<(StringJS)>
public "interim"(): integer
public "equalsIgnoreOptional"(arg0: any): boolean
public "patch"(): integer
public "compareToIgnoreOptional"(arg0: $Runtime$Version$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Runtime$Version$$Type = ($Runtime$Version);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Runtime$Version$$Original = $Runtime$Version;}
declare module "java.lang.ThreadLocal" {
import {$Supplier$$Type} from "java.util.function.Supplier"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ThreadLocal<T> {
constructor()

public "remove"(): void
public "get"(): T
public "set"(arg0: T): void
public static "withInitial"<S>(arg0: $Supplier$$Type<(S)>): $ThreadLocal<(S)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThreadLocal$$Type<T> = ($ThreadLocal<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ThreadLocal$$Original<T> = $ThreadLocal<(T)>;}
declare module "java.lang.Enum$EnumDesc" {
import {$MethodHandles$Lookup$$Type} from "java.lang.invoke.MethodHandles$Lookup"
import {$Enum} from "java.lang.Enum"
import {$ClassDesc$$Type} from "java.lang.constant.ClassDesc"
import {$DynamicConstantDesc} from "java.lang.constant.DynamicConstantDesc"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Enum$EnumDesc<E extends $Enum<(object)>> extends $DynamicConstantDesc<(E)> {
public "toString"(): StringJS
public static "of"<E extends $Enum<(object)>>(arg0: $ClassDesc$$Type, arg1: StringJS): $Enum$EnumDesc<(E)>
public "resolveConstantDesc"(arg0: $MethodHandles$Lookup$$Type): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Enum$EnumDesc$$Type<E> = ($Enum$EnumDesc<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Enum$EnumDesc$$Original<E> = $Enum$EnumDesc<(E)>;}
declare module "java.lang.StringBuffer" {
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$IntStream} from "java.util.stream.IntStream"
import {$Appendable, $Appendable$$Interface} from "java.lang.Appendable"
import {$AbstractStringBuilder} from "java.lang.AbstractStringBuilder"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $StringBuffer extends $AbstractStringBuilder implements $Appendable$$Interface, $Serializable$$Interface, $Comparable$$Interface<($StringBuffer)>, charseq {
constructor(arg0: charseq)
constructor(arg0: StringJS)
constructor(arg0: integer)
constructor()

public "length"(): integer
public "toString"(): StringJS
public "append"(arg0: (character)[]): $AbstractStringBuilder
public "append"(arg0: integer): $StringBuffer
public "append"(arg0: long): $StringBuffer
public "append"(arg0: float): $StringBuffer
public "append"(arg0: (character)[], arg1: integer, arg2: integer): $StringBuffer
public "append"(arg0: boolean): $StringBuffer
public "append"(arg0: character): $StringBuffer
public "append"(arg0: double): $AbstractStringBuilder
public "append"(arg0: StringJS): $AbstractStringBuilder
public "append"(arg0: $StringBuffer$$Type): $AbstractStringBuilder
public "append"(arg0: charseq): $AbstractStringBuilder
public "append"(arg0: charseq, arg1: integer, arg2: integer): $Appendable
public "append"(arg0: any): $AbstractStringBuilder
public "reverse"(): $StringBuffer
public "getChars"(arg0: integer, arg1: integer, arg2: (character)[], arg3: integer): void
public "compareTo"(arg0: $StringBuffer$$Type): integer
public "compareTo"(arg0: any): integer
public "indexOf"(arg0: StringJS, arg1: integer): integer
public "indexOf"(arg0: StringJS): integer
public "insert"(arg0: integer, arg1: long): $AbstractStringBuilder
public "insert"(arg0: integer, arg1: integer): $AbstractStringBuilder
public "insert"(arg0: integer, arg1: character): $AbstractStringBuilder
public "insert"(arg0: integer, arg1: boolean): $AbstractStringBuilder
public "insert"(arg0: integer, arg1: float): $AbstractStringBuilder
public "insert"(arg0: integer, arg1: double): $AbstractStringBuilder
public "insert"(arg0: integer, arg1: any): $StringBuffer
public "insert"(arg0: integer, arg1: StringJS): $AbstractStringBuilder
public "insert"(arg0: integer, arg1: (character)[], arg2: integer, arg3: integer): $AbstractStringBuilder
public "insert"(arg0: integer, arg1: (character)[]): $AbstractStringBuilder
public "insert"(arg0: integer, arg1: charseq): $AbstractStringBuilder
public "insert"(arg0: integer, arg1: charseq, arg2: integer, arg3: integer): $AbstractStringBuilder
public "charAt"(arg0: integer): character
public "codePointAt"(arg0: integer): integer
public "codePointBefore"(arg0: integer): integer
public "codePointCount"(arg0: integer, arg1: integer): integer
public "offsetByCodePoints"(arg0: integer, arg1: integer): integer
public "lastIndexOf"(arg0: StringJS, arg1: integer): integer
public "lastIndexOf"(arg0: StringJS): integer
public "substring"(arg0: integer): StringJS
public "substring"(arg0: integer, arg1: integer): StringJS
public "replace"(arg0: integer, arg1: integer, arg2: StringJS): $StringBuffer
public "repeat"(arg0: charseq, arg1: integer): $AbstractStringBuilder
public "repeat"(arg0: integer, arg1: integer): $AbstractStringBuilder
public "codePoints"(): $IntStream
public "subSequence"(arg0: integer, arg1: integer): charseq
public "chars"(): $IntStream
public "delete"(arg0: integer, arg1: integer): $AbstractStringBuilder
public "setLength"(arg0: integer): void
public "capacity"(): integer
public "ensureCapacity"(arg0: integer): void
public "trimToSize"(): void
public "setCharAt"(arg0: integer, arg1: character): void
public "appendCodePoint"(arg0: integer): $StringBuffer
public "deleteCharAt"(arg0: integer): $StringBuffer
public static "compare"(arg0: charseq, arg1: charseq): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringBuffer$$Type = ($StringBuffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StringBuffer$$Original = $StringBuffer;}
