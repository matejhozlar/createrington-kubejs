declare module "java.lang.invoke.TypeDescriptor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $TypeDescriptor$$Interface {

(): StringJS
}

export class $TypeDescriptor implements $TypeDescriptor$$Interface {
 "descriptorString"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeDescriptor$$Type = (() => StringJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TypeDescriptor$$Original = $TypeDescriptor;}
declare module "java.lang.invoke.MethodType" {
import {$Constable$$Interface} from "java.lang.constant.Constable"
import {$Optional} from "java.util.Optional"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$MethodTypeDesc} from "java.lang.constant.MethodTypeDesc"
import {$List, $List$$Type} from "java.util.List"
import {$TypeDescriptor$OfField$$Type} from "java.lang.invoke.TypeDescriptor$OfField"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ClassLoader$$Type} from "java.lang.ClassLoader"
import {$TypeDescriptor$OfMethod, $TypeDescriptor$OfMethod$$Interface} from "java.lang.invoke.TypeDescriptor$OfMethod"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $MethodType implements $Constable$$Interface, $TypeDescriptor$OfMethod$$Interface<($Class<(never)>), ($MethodType)>, $Serializable$$Interface {
public "returnType"(): $Class<(never)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "wrap"(): $MethodType
public "describeConstable"(): $Optional<($MethodTypeDesc)>
public "descriptorString"(): StringJS
public "parameterType"(arg0: integer): $Class<(never)>
public "insertParameterTypes"(arg0: integer, arg1: $List$$Type<($Class$$Type<(never)>)>): $MethodType
public "insertParameterTypes"(arg0: integer, arg1: ($TypeDescriptor$OfField$$Type)[]): $TypeDescriptor$OfMethod
public "insertParameterTypes"(arg0: integer, ...arg1: ($Class$$Type<(never)>)[]): $MethodType
public "changeReturnType"(arg0: $TypeDescriptor$OfField$$Type): $TypeDescriptor$OfMethod
public "changeReturnType"(arg0: $Class$$Type<(never)>): $MethodType
public static "methodType"(arg0: $Class$$Type<(never)>, arg1: $Class$$Type<(never)>, ...arg2: ($Class$$Type<(never)>)[]): $MethodType
public static "methodType"(arg0: $Class$$Type<(never)>, arg1: $Class$$Type<(never)>): $MethodType
public static "methodType"(arg0: $Class$$Type<(never)>): $MethodType
public static "methodType"(arg0: $Class$$Type<(never)>, arg1: ($Class$$Type<(never)>)[]): $MethodType
public static "methodType"(arg0: $Class$$Type<(never)>, arg1: $List$$Type<($Class$$Type<(never)>)>): $MethodType
public static "methodType"(arg0: $Class$$Type<(never)>, arg1: $MethodType$$Type): $MethodType
public "dropParameterTypes"(arg0: integer, arg1: integer): $TypeDescriptor$OfMethod
public "appendParameterTypes"(arg0: $List$$Type<($Class$$Type<(never)>)>): $MethodType
public "appendParameterTypes"(...arg0: ($Class$$Type<(never)>)[]): $MethodType
public "parameterCount"(): integer
public static "genericMethodType"(arg0: integer): $MethodType
public static "genericMethodType"(arg0: integer, arg1: boolean): $MethodType
public "lastParameterType"(): $Class<(never)>
public "parameterList"(): $List<($Class<(never)>)>
public "erase"(): $MethodType
public "toMethodDescriptorString"(): StringJS
public "hasPrimitives"(): boolean
public "unwrap"(): $MethodType
public "parameterArray"(): ($Class<(never)>)[]
public "changeParameterType"(arg0: integer, arg1: $Class$$Type<(never)>): $MethodType
public "changeParameterType"(arg0: integer, arg1: $TypeDescriptor$OfField$$Type): $TypeDescriptor$OfMethod
public "hasWrappers"(): boolean
public "generic"(): $MethodType
public static "fromMethodDescriptorString"(arg0: StringJS, arg1: $ClassLoader$$Type): $MethodType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MethodType$$Type = ($MethodType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MethodType$$Original = $MethodType;}
declare module "java.lang.invoke.VarHandle$AccessMode" {
import {$Enum} from "java.lang.Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $VarHandle$AccessMode extends $Enum<($VarHandle$AccessMode)> {
static readonly "WEAK_COMPARE_AND_SET": $VarHandle$AccessMode
static readonly "GET_VOLATILE": $VarHandle$AccessMode
static readonly "SET": $VarHandle$AccessMode
static readonly "GET_AND_BITWISE_OR_ACQUIRE": $VarHandle$AccessMode
static readonly "GET_AND_ADD": $VarHandle$AccessMode
static readonly "GET_AND_SET": $VarHandle$AccessMode
static readonly "GET_ACQUIRE": $VarHandle$AccessMode
static readonly "GET_AND_ADD_RELEASE": $VarHandle$AccessMode
static readonly "GET_AND_BITWISE_AND_ACQUIRE": $VarHandle$AccessMode
static readonly "GET_AND_BITWISE_XOR_ACQUIRE": $VarHandle$AccessMode
static readonly "GET_AND_ADD_ACQUIRE": $VarHandle$AccessMode
static readonly "GET_AND_BITWISE_OR_RELEASE": $VarHandle$AccessMode
static readonly "SET_OPAQUE": $VarHandle$AccessMode
static readonly "WEAK_COMPARE_AND_SET_ACQUIRE": $VarHandle$AccessMode
static readonly "COMPARE_AND_SET": $VarHandle$AccessMode
static readonly "COMPARE_AND_EXCHANGE_ACQUIRE": $VarHandle$AccessMode
static readonly "GET_AND_BITWISE_AND": $VarHandle$AccessMode
static readonly "SET_VOLATILE": $VarHandle$AccessMode
static readonly "COMPARE_AND_EXCHANGE_RELEASE": $VarHandle$AccessMode
static readonly "GET_AND_BITWISE_XOR": $VarHandle$AccessMode
static readonly "WEAK_COMPARE_AND_SET_PLAIN": $VarHandle$AccessMode
static readonly "SET_RELEASE": $VarHandle$AccessMode
static readonly "COMPARE_AND_EXCHANGE": $VarHandle$AccessMode
static readonly "GET_AND_BITWISE_OR": $VarHandle$AccessMode
static readonly "GET_AND_BITWISE_AND_RELEASE": $VarHandle$AccessMode
static readonly "WEAK_COMPARE_AND_SET_RELEASE": $VarHandle$AccessMode
static readonly "GET_AND_SET_RELEASE": $VarHandle$AccessMode
static readonly "GET": $VarHandle$AccessMode
static readonly "GET_AND_SET_ACQUIRE": $VarHandle$AccessMode
static readonly "GET_AND_BITWISE_XOR_RELEASE": $VarHandle$AccessMode
static readonly "GET_OPAQUE": $VarHandle$AccessMode

public static "values"(): ($VarHandle$AccessMode)[]
public "methodName"(): StringJS
public static "valueOf"(arg0: StringJS): $VarHandle$AccessMode
public static "valueFromMethodName"(arg0: StringJS): $VarHandle$AccessMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VarHandle$AccessMode$$Type = (("get") | ("set") | ("get_volatile") | ("set_volatile") | ("get_acquire") | ("set_release") | ("get_opaque") | ("set_opaque") | ("compare_and_set") | ("compare_and_exchange") | ("compare_and_exchange_acquire") | ("compare_and_exchange_release") | ("weak_compare_and_set_plain") | ("weak_compare_and_set") | ("weak_compare_and_set_acquire") | ("weak_compare_and_set_release") | ("get_and_set") | ("get_and_set_acquire") | ("get_and_set_release") | ("get_and_add") | ("get_and_add_acquire") | ("get_and_add_release") | ("get_and_bitwise_or") | ("get_and_bitwise_or_release") | ("get_and_bitwise_or_acquire") | ("get_and_bitwise_and") | ("get_and_bitwise_and_release") | ("get_and_bitwise_and_acquire") | ("get_and_bitwise_xor") | ("get_and_bitwise_xor_release") | ("get_and_bitwise_xor_acquire"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VarHandle$AccessMode$$Original = $VarHandle$AccessMode;}
declare module "java.lang.invoke.VarHandle" {
import {$Constable$$Interface} from "java.lang.constant.Constable"
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$VarHandle$VarHandleDesc} from "java.lang.invoke.VarHandle$VarHandleDesc"
import {$MethodHandle} from "java.lang.invoke.MethodHandle"
import {$Class} from "java.lang.Class"
import {$MethodType} from "java.lang.invoke.MethodType"
import {$VarHandle$AccessMode$$Type} from "java.lang.invoke.VarHandle$AccessMode"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $VarHandle implements $Constable$$Interface {
public "get"(...arg0: (any)[]): any
public "toString"(): StringJS
public static "storeStoreFence"(): void
public static "fullFence"(): void
public "describeConstable"(): $Optional<($VarHandle$VarHandleDesc)>
public "set"(...arg0: (any)[]): void
public "varType"(): $Class<(never)>
public "coordinateTypes"(): $List<($Class<(never)>)>
public "accessModeType"(arg0: $VarHandle$AccessMode$$Type): $MethodType
public "isAccessModeSupported"(arg0: $VarHandle$AccessMode$$Type): boolean
public static "loadLoadFence"(): void
public "hasInvokeExactBehavior"(): boolean
public "getVolatile"(...arg0: (any)[]): any
public "setVolatile"(...arg0: (any)[]): void
public "getOpaque"(...arg0: (any)[]): any
public "setOpaque"(...arg0: (any)[]): void
public "getAcquire"(...arg0: (any)[]): any
public "setRelease"(...arg0: (any)[]): void
public "compareAndSet"(...arg0: (any)[]): boolean
public "compareAndExchange"(...arg0: (any)[]): any
public "compareAndExchangeAcquire"(...arg0: (any)[]): any
public "compareAndExchangeRelease"(...arg0: (any)[]): any
public "weakCompareAndSetPlain"(...arg0: (any)[]): boolean
public "weakCompareAndSet"(...arg0: (any)[]): boolean
public "weakCompareAndSetAcquire"(...arg0: (any)[]): boolean
public "weakCompareAndSetRelease"(...arg0: (any)[]): boolean
public "getAndSet"(...arg0: (any)[]): any
public "getAndSetAcquire"(...arg0: (any)[]): any
public "getAndSetRelease"(...arg0: (any)[]): any
public "getAndAdd"(...arg0: (any)[]): any
public "getAndAddAcquire"(...arg0: (any)[]): any
public "getAndAddRelease"(...arg0: (any)[]): any
public "getAndBitwiseOr"(...arg0: (any)[]): any
public "getAndBitwiseOrAcquire"(...arg0: (any)[]): any
public "getAndBitwiseOrRelease"(...arg0: (any)[]): any
public "getAndBitwiseAnd"(...arg0: (any)[]): any
public "getAndBitwiseAndAcquire"(...arg0: (any)[]): any
public "getAndBitwiseAndRelease"(...arg0: (any)[]): any
public "getAndBitwiseXor"(...arg0: (any)[]): any
public "getAndBitwiseXorAcquire"(...arg0: (any)[]): any
public "getAndBitwiseXorRelease"(...arg0: (any)[]): any
public "withInvokeExactBehavior"(): $VarHandle
public "withInvokeBehavior"(): $VarHandle
public "toMethodHandle"(arg0: $VarHandle$AccessMode$$Type): $MethodHandle
public static "acquireFence"(): void
public static "releaseFence"(): void
set "volatile"(value: (any)[])
set "opaque"(value: (any)[])
set "release"(value: (any)[])
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VarHandle$$Type = ($VarHandle);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VarHandle$$Original = $VarHandle;}
declare module "java.lang.invoke.MethodHandles$Lookup" {
import {$MethodHandleInfo} from "java.lang.invoke.MethodHandleInfo"
import {$VarHandle} from "java.lang.invoke.VarHandle"
import {$MethodHandle, $MethodHandle$$Type} from "java.lang.invoke.MethodHandle"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$MethodHandles$Lookup$ClassOption$$Type} from "java.lang.invoke.MethodHandles$Lookup$ClassOption"
import {$MethodType$$Type} from "java.lang.invoke.MethodType"
import {$Constructor$$Type} from "java.lang.reflect.Constructor"
import {$Field$$Type} from "java.lang.reflect.Field"
import {$Method$$Type} from "java.lang.reflect.Method"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $MethodHandles$Lookup {
static readonly "MODULE": integer
static readonly "PACKAGE": integer
static readonly "PUBLIC": integer
static readonly "ORIGINAL": integer
static readonly "UNCONDITIONAL": integer
static readonly "PROTECTED": integer
static readonly "PRIVATE": integer

public "toString"(): StringJS
public "findClass"(arg0: StringJS): $Class<(never)>
public "defineClass"(arg0: (byte)[]): $Class<(never)>
public "in"(arg0: $Class$$Type<(never)>): $MethodHandles$Lookup
public "ensureInitialized"<T>(arg0: $Class$$Type<(T)>): $Class<(T)>
public "revealDirect"(arg0: $MethodHandle$$Type): $MethodHandleInfo
public "lookupClass"(): $Class<(never)>
public "previousLookupClass"(): $Class<(never)>
public "findVirtual"(arg0: $Class$$Type<(never)>, arg1: StringJS, arg2: $MethodType$$Type): $MethodHandle
public "findStatic"(arg0: $Class$$Type<(never)>, arg1: StringJS, arg2: $MethodType$$Type): $MethodHandle
public "unreflect"(arg0: $Method$$Type): $MethodHandle
public "unreflectConstructor"(arg0: $Constructor$$Type<(never)>): $MethodHandle
public "lookupModes"(): integer
public "hasFullPrivilegeAccess"(): boolean
public "accessClass"<T>(arg0: $Class$$Type<(T)>): $Class<(T)>
public "dropLookupMode"(arg0: integer): $MethodHandles$Lookup
public "defineHiddenClass"(arg0: (byte)[], arg1: boolean, ...arg2: ($MethodHandles$Lookup$ClassOption$$Type)[]): $MethodHandles$Lookup
public "defineHiddenClassWithClassData"(arg0: (byte)[], arg1: any, arg2: boolean, ...arg3: ($MethodHandles$Lookup$ClassOption$$Type)[]): $MethodHandles$Lookup
public "findConstructor"(arg0: $Class$$Type<(never)>, arg1: $MethodType$$Type): $MethodHandle
public "findSpecial"(arg0: $Class$$Type<(never)>, arg1: StringJS, arg2: $MethodType$$Type, arg3: $Class$$Type<(never)>): $MethodHandle
public "findGetter"(arg0: $Class$$Type<(never)>, arg1: StringJS, arg2: $Class$$Type<(never)>): $MethodHandle
public "findSetter"(arg0: $Class$$Type<(never)>, arg1: StringJS, arg2: $Class$$Type<(never)>): $MethodHandle
public "findVarHandle"(arg0: $Class$$Type<(never)>, arg1: StringJS, arg2: $Class$$Type<(never)>): $VarHandle
public "findStaticGetter"(arg0: $Class$$Type<(never)>, arg1: StringJS, arg2: $Class$$Type<(never)>): $MethodHandle
public "findStaticSetter"(arg0: $Class$$Type<(never)>, arg1: StringJS, arg2: $Class$$Type<(never)>): $MethodHandle
public "findStaticVarHandle"(arg0: $Class$$Type<(never)>, arg1: StringJS, arg2: $Class$$Type<(never)>): $VarHandle
public "bind"(arg0: any, arg1: StringJS, arg2: $MethodType$$Type): $MethodHandle
public "unreflectSpecial"(arg0: $Method$$Type, arg1: $Class$$Type<(never)>): $MethodHandle
public "unreflectGetter"(arg0: $Field$$Type): $MethodHandle
public "unreflectSetter"(arg0: $Field$$Type): $MethodHandle
public "unreflectVarHandle"(arg0: $Field$$Type): $VarHandle
/**
 * 
 * @deprecated
 */
public "hasPrivateAccess"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MethodHandles$Lookup$$Type = ($MethodHandles$Lookup);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MethodHandles$Lookup$$Original = $MethodHandles$Lookup;}
declare module "java.lang.invoke.MethodHandleInfo" {
import {$Member} from "java.lang.reflect.Member"
import {$MethodHandles$Lookup$$Type} from "java.lang.invoke.MethodHandles$Lookup"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$MethodType, $MethodType$$Type} from "java.lang.invoke.MethodType"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $MethodHandleInfo$$Interface {
get "name"(): StringJS
get "modifiers"(): integer
get "declaringClass"(): $Class<(never)>
get "varArgs"(): boolean
get "referenceKind"(): integer
get "methodType"(): $MethodType
}

export class $MethodHandleInfo implements $MethodHandleInfo$$Interface {
static readonly "REF_getStatic": integer
static readonly "REF_getField": integer
static readonly "REF_putStatic": integer
static readonly "REF_newInvokeSpecial": integer
static readonly "REF_putField": integer
static readonly "REF_invokeVirtual": integer
static readonly "REF_invokeSpecial": integer
static readonly "REF_invokeStatic": integer
static readonly "REF_invokeInterface": integer

 "getName"(): StringJS
static "toString"(arg0: integer, arg1: $Class$$Type<(never)>, arg2: StringJS, arg3: $MethodType$$Type): StringJS
 "getModifiers"(): integer
 "getDeclaringClass"(): $Class<(never)>
 "isVarArgs"(): boolean
 "getReferenceKind"(): integer
 "getMethodType"(): $MethodType
 "reflectAs"<T extends $Member>(arg0: $Class$$Type<(T)>, arg1: $MethodHandles$Lookup$$Type): T
static "referenceKindToString"(arg0: integer): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MethodHandleInfo$$Type = ($MethodHandleInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MethodHandleInfo$$Original = $MethodHandleInfo;}
declare module "java.lang.invoke.VarHandle$VarHandleDesc" {
import {$MethodHandles$Lookup$$Type} from "java.lang.invoke.MethodHandles$Lookup"
import {$ClassDesc, $ClassDesc$$Type} from "java.lang.constant.ClassDesc"
import {$VarHandle} from "java.lang.invoke.VarHandle"
import {$DynamicConstantDesc} from "java.lang.constant.DynamicConstantDesc"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $VarHandle$VarHandleDesc extends $DynamicConstantDesc<($VarHandle)> {
public static "ofArray"(arg0: $ClassDesc$$Type): $VarHandle$VarHandleDesc
public "toString"(): StringJS
public "resolveConstantDesc"(arg0: $MethodHandles$Lookup$$Type): any
public static "ofField"(arg0: $ClassDesc$$Type, arg1: StringJS, arg2: $ClassDesc$$Type): $VarHandle$VarHandleDesc
public "varType"(): $ClassDesc
public static "ofStaticField"(arg0: $ClassDesc$$Type, arg1: StringJS, arg2: $ClassDesc$$Type): $VarHandle$VarHandleDesc
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VarHandle$VarHandleDesc$$Type = ($VarHandle$VarHandleDesc);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VarHandle$VarHandleDesc$$Original = $VarHandle$VarHandleDesc;}
declare module "java.lang.invoke.TypeDescriptor$OfField" {
import {$TypeDescriptor$$Interface} from "java.lang.invoke.TypeDescriptor"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $TypeDescriptor$OfField$$Interface<F extends $TypeDescriptor$OfField<(object)>> extends $TypeDescriptor$$Interface {
get "array"(): boolean
get "primitive"(): boolean
}

export class $TypeDescriptor$OfField<F extends $TypeDescriptor$OfField<(object)>> implements $TypeDescriptor$OfField$$Interface {
 "isArray"(): boolean
 "isPrimitive"(): boolean
 "componentType"(): F
 "arrayType"(): F
 "descriptorString"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeDescriptor$OfField$$Type<F> = ($TypeDescriptor$OfField<(F)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TypeDescriptor$OfField$$Original<F> = $TypeDescriptor$OfField<(F)>;}
declare module "java.lang.invoke.MethodHandles$Lookup$ClassOption" {
import {$Enum} from "java.lang.Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $MethodHandles$Lookup$ClassOption extends $Enum<($MethodHandles$Lookup$ClassOption)> {
static readonly "NESTMATE": $MethodHandles$Lookup$ClassOption
static readonly "STRONG": $MethodHandles$Lookup$ClassOption

public static "values"(): ($MethodHandles$Lookup$ClassOption)[]
public static "valueOf"(arg0: StringJS): $MethodHandles$Lookup$ClassOption
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MethodHandles$Lookup$ClassOption$$Type = (("nestmate") | ("strong"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MethodHandles$Lookup$ClassOption$$Original = $MethodHandles$Lookup$ClassOption;}
declare module "java.lang.invoke.MethodHandle" {
import {$Constable$$Interface} from "java.lang.constant.Constable"
import {$Optional} from "java.util.Optional"
import {$MethodHandleDesc} from "java.lang.constant.MethodHandleDesc"
import {$List$$Type} from "java.util.List"
import {$Class$$Type} from "java.lang.Class"
import {$MethodType, $MethodType$$Type} from "java.lang.invoke.MethodType"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $MethodHandle implements $Constable$$Interface {
public "invoke"(...arg0: (any)[]): any
public "invokeExact"(...arg0: (any)[]): any
public "asFixedArity"(): $MethodHandle
public "type"(): $MethodType
public "toString"(): StringJS
public "describeConstable"(): $Optional<($MethodHandleDesc)>
public "asType"(arg0: $MethodType$$Type): $MethodHandle
public "invokeWithArguments"(arg0: $List$$Type<(never)>): any
public "invokeWithArguments"(...arg0: (any)[]): any
public "asSpreader"(arg0: $Class$$Type<(never)>, arg1: integer): $MethodHandle
public "asSpreader"(arg0: integer, arg1: $Class$$Type<(never)>, arg2: integer): $MethodHandle
public "isVarargsCollector"(): boolean
public "asVarargsCollector"(arg0: $Class$$Type<(never)>): $MethodHandle
public "asCollector"(arg0: integer, arg1: $Class$$Type<(never)>, arg2: integer): $MethodHandle
public "asCollector"(arg0: $Class$$Type<(never)>, arg1: integer): $MethodHandle
public "withVarargs"(arg0: boolean): $MethodHandle
public "bindTo"(arg0: any): $MethodHandle
get "varargsCollector"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MethodHandle$$Type = ($MethodHandle);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MethodHandle$$Original = $MethodHandle;}
declare module "java.lang.invoke.TypeDescriptor$OfMethod" {
import {$TypeDescriptor$$Interface} from "java.lang.invoke.TypeDescriptor"
import {$List} from "java.util.List"
import {$TypeDescriptor$OfField, $TypeDescriptor$OfField$$Type} from "java.lang.invoke.TypeDescriptor$OfField"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $TypeDescriptor$OfMethod$$Interface<F extends $TypeDescriptor$OfField<(object)>, M extends $TypeDescriptor$OfMethod<(object), (object)>> extends $TypeDescriptor$$Interface {
}

export class $TypeDescriptor$OfMethod<F extends $TypeDescriptor$OfField<(object)>, M extends $TypeDescriptor$OfMethod<(object), (object)>> implements $TypeDescriptor$OfMethod$$Interface {
 "returnType"(): F
 "parameterType"(arg0: integer): F
 "insertParameterTypes"(arg0: integer, ...arg1: (F)[]): M
 "changeReturnType"(arg0: F): M
 "dropParameterTypes"(arg0: integer, arg1: integer): M
 "parameterCount"(): integer
 "parameterList"(): $List<(F)>
 "parameterArray"(): (F)[]
 "changeParameterType"(arg0: integer, arg1: F): M
 "descriptorString"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeDescriptor$OfMethod$$Type<F, M> = ($TypeDescriptor$OfMethod<(F), (M)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TypeDescriptor$OfMethod$$Original<F, M> = $TypeDescriptor$OfMethod<(F), (M)>;}
