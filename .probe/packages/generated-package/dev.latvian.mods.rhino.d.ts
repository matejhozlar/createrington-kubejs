declare module "dev.latvian.mods.rhino.ConstProperties" {
import {$Scriptable$$Type} from "dev.latvian.mods.rhino.Scriptable"

export interface $ConstProperties$$Interface {
}

export class $ConstProperties implements $ConstProperties$$Interface {
 "putConst"(arg1: StringJS, arg2: $Scriptable$$Type, arg3: any): void
 "defineConst"(arg1: StringJS, arg2: $Scriptable$$Type): void
 "isConst"(arg0: StringJS): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConstProperties$$Type = ($ConstProperties);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConstProperties$$Original = $ConstProperties;}
declare module "dev.latvian.mods.rhino.CachedMethodInfo" {
import {$TypeInfo} from "dev.latvian.mods.rhino.type.TypeInfo"
import {$CachedClassInfo, $CachedClassInfo$$Type} from "dev.latvian.mods.rhino.CachedClassInfo"
import {$CachedExecutableInfo} from "dev.latvian.mods.rhino.CachedExecutableInfo"
import {$AccessibleObject} from "java.lang.reflect.AccessibleObject"
import {$Scriptable$$Type} from "dev.latvian.mods.rhino.Scriptable"
import {$Method$$Type} from "java.lang.reflect.Method"

export class $CachedMethodInfo extends $CachedExecutableInfo {
readonly "originalName": StringJS
readonly "parent": $CachedClassInfo
readonly "isStatic": boolean
readonly "isFinal": boolean
readonly "modifiers": integer
readonly "isNative": boolean

constructor(arg0: $CachedClassInfo$$Type, arg1: $Method$$Type)

public "invoke"(arg1: $Scriptable$$Type, arg2: any, ...arg3: (any)[]): any
public "getReturnType"(): $TypeInfo
public "getCached"(): $AccessibleObject
get "returnType"(): $TypeInfo
get "cached"(): $AccessibleObject
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CachedMethodInfo$$Type = ($CachedMethodInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CachedMethodInfo$$Original = $CachedMethodInfo;}
declare module "dev.latvian.mods.rhino.Callable" {
import {$Scriptable, $Scriptable$$Type} from "dev.latvian.mods.rhino.Scriptable"

export interface $Callable$$Interface {

(arg1: $Scriptable, arg2: $Scriptable, arg3: (any)[]): any
}

export class $Callable implements $Callable$$Interface {
 "call"(arg1: $Scriptable$$Type, arg2: $Scriptable$$Type, arg3: (any)[]): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Callable$$Type = ((arg1: $Scriptable, arg2: $Scriptable, arg3: (any)[]) => any);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Callable$$Original = $Callable;}
declare module "dev.latvian.mods.rhino.CachedExecutableInfo" {
import {$Executable$$Type} from "java.lang.reflect.Executable"
import {$TypeInfo} from "dev.latvian.mods.rhino.type.TypeInfo"
import {$StringBuilder$$Type} from "java.lang.StringBuilder"
import {$CachedClassInfo, $CachedClassInfo$$Type} from "dev.latvian.mods.rhino.CachedClassInfo"
import {$CachedParameters, $CachedParameters$$Type} from "dev.latvian.mods.rhino.CachedParameters"
import {$AccessibleObject} from "java.lang.reflect.AccessibleObject"
import {$CachedMemberInfo} from "dev.latvian.mods.rhino.CachedMemberInfo"
import {$Scriptable$$Type} from "dev.latvian.mods.rhino.Scriptable"
import {$MethodSignature} from "dev.latvian.mods.rhino.MethodSignature"

export class $CachedExecutableInfo extends $CachedMemberInfo {
readonly "originalName": StringJS
readonly "parent": $CachedClassInfo
readonly "isStatic": boolean
readonly "isFinal": boolean
readonly "modifiers": integer
readonly "isNative": boolean

constructor(arg0: $CachedClassInfo$$Type, arg1: $Executable$$Type)

public "invoke"(arg1: $Scriptable$$Type, arg2: any, arg3: (any)[]): any
public "toString"(): StringJS
public "getReturnType"(): $TypeInfo
public "getParameters"(): $CachedParameters
public "getSignature"(): $MethodSignature
public "getCached"(): $AccessibleObject
public "appendDebugParams"(arg0: $StringBuilder$$Type): void
public "transformArgs"(arg1: any, arg2: $CachedParameters$$Type, arg3: (any)[]): (any)[]
get "returnType"(): $TypeInfo
get "parameters"(): $CachedParameters
get "signature"(): $MethodSignature
get "cached"(): $AccessibleObject
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CachedExecutableInfo$$Type = ($CachedExecutableInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CachedExecutableInfo$$Original = $CachedExecutableInfo;}
declare module "dev.latvian.mods.rhino.type.TypeInfo" {
import {$Collection$$Type} from "java.util.Collection"
import {$StringBuilder$$Type} from "java.lang.StringBuilder"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List} from "java.util.List"
import {$TypeStringContext$$Type} from "dev.latvian.mods.rhino.type.TypeStringContext"
import {$TypeVariable$$Type} from "java.lang.reflect.TypeVariable"
import {$VariableTypeInfo, $VariableTypeInfo$$Type} from "dev.latvian.mods.rhino.type.VariableTypeInfo"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Type$$Type} from "java.lang.reflect.Type"
import {$Set} from "java.util.Set"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$RecordTypeInfo$Component} from "dev.latvian.mods.rhino.type.RecordTypeInfo$Component"

export interface $TypeInfo$$Interface {

(): $Class$$Type<(never)>
get "primitive"(): boolean
get "void"(): boolean
get "character"(): boolean
get "float"(): boolean
get "containedComponentClasses"(): $Set<($Class<(never)>)>
get "long"(): boolean
get "functionalInterface"(): boolean
get "double"(): boolean
get "byte"(): boolean
get "int"(): boolean
get "boolean"(): boolean
get "short"(): boolean
}

export class $TypeInfo implements $TypeInfo$$Interface {
static readonly "PRIMITIVE_INT_ARRAY": $TypeInfo
static readonly "PRIMITIVE_VOID": $TypeInfo
static readonly "PRIMITIVE_DOUBLE_ARRAY": $TypeInfo
static readonly "FLOAT": $TypeInfo
static readonly "PRIMITIVE_BYTE": $TypeInfo
static readonly "PRIMITIVE_LONG_ARRAY": $TypeInfo
static readonly "PRIMITIVE_FLOAT_ARRAY": $TypeInfo
static readonly "RAW_ENUM_SET": $TypeInfo
static readonly "EMPTY_ARRAY": ($TypeInfo)[]
static readonly "PRIMITIVE_BOOLEAN_ARRAY": $TypeInfo
static readonly "PRIMITIVE_BYTE_ARRAY": $TypeInfo
static readonly "RUNNABLE": $TypeInfo
static readonly "CLASS": $TypeInfo
static readonly "PRIMITIVE_FLOAT": $TypeInfo
static readonly "CONTEXT": $TypeInfo
static readonly "INT": $TypeInfo
static readonly "BYTE": $TypeInfo
static readonly "PRIMITIVE_BOOLEAN": $TypeInfo
static readonly "PRIMITIVE_DOUBLE": $TypeInfo
static readonly "PRIMITIVE_SHORT": $TypeInfo
static readonly "CHARACTER": $TypeInfo
static readonly "DOUBLE": $TypeInfo
static readonly "NONE": $TypeInfo
static readonly "RAW_LIST": $TypeInfo
static readonly "LONG": $TypeInfo
static readonly "NUMBER": $TypeInfo
static readonly "SCRIPTABLE": $TypeInfo
static readonly "PRIMITIVE_CHARACTER_ARRAY": $TypeInfo
static readonly "RAW_MAP": $TypeInfo
static readonly "RAW_FUNCTION": $TypeInfo
static readonly "RAW_PREDICATE": $TypeInfo
static readonly "RAW_SET": $TypeInfo
static readonly "OBJECT": $TypeInfo
static readonly "RAW_CONSUMER": $TypeInfo
static readonly "BOOLEAN": $TypeInfo
static readonly "SHORT": $TypeInfo
static readonly "STRING_ARRAY": $TypeInfo
static readonly "DATE": $TypeInfo
static readonly "PRIMITIVE_CHARACTER": $TypeInfo
static readonly "RAW_OPTIONAL": $TypeInfo
static readonly "RAW_SUPPLIER": $TypeInfo
static readonly "PRIMITIVE_SHORT_ARRAY": $TypeInfo
static readonly "STRING": $TypeInfo
static readonly "PRIMITIVE_INT": $TypeInfo
static readonly "OBJECT_ARRAY": $TypeInfo
static readonly "VOID": $TypeInfo
static readonly "PRIMITIVE_LONG": $TypeInfo

static "ofArray"(arg0: ($Type$$Type)[]): ($TypeInfo)[]
 "signature"(): StringJS
 "append"(arg0: $TypeStringContext$$Type, arg1: $StringBuilder$$Type): void
 "isPrimitive"(): boolean
 "newArray"(arg0: integer): any
 "componentType"(): $TypeInfo
static "of"(arg0: $Class$$Type<(never)>): $TypeInfo
static "of"(arg0: $TypeVariable$$Type<(never)>): $VariableTypeInfo
static "of"(arg0: $Type$$Type): $TypeInfo
 "enumConstants"(): $List<(any)>
 "param"(arg0: integer): $TypeInfo
 "isVoid"(): boolean
 "is"(arg0: $TypeInfo$$Type): boolean
 "or"(arg0: $TypeInfo$$Type): $TypeInfo
 "isCharacter"(): boolean
 "isFloat"(): boolean
 "asArray"(): $TypeInfo
static "safeOfArray"(arg0: $Supplier$$Type<(($Type$$Type)[])>): ($TypeInfo)[]
 "createDefaultValue"(): any
 "consolidate"(arg0: $Map$$Type<($VariableTypeInfo$$Type), ($TypeInfo$$Type)>): $TypeInfo
 "shouldConvert"(): boolean
 "getContainedComponentClasses"(): $Set<($Class<(never)>)>
 "collectContainedComponentClasses"(arg0: $Collection$$Type<($Class$$Type<(never)>)>): void
 "isLong"(): boolean
 "recordComponents"(): $Map<(StringJS), ($RecordTypeInfo$Component)>
 "isFunctionalInterface"(): boolean
 "isDouble"(): boolean
 "asClass"(): $Class<(never)>
static "safeOf"(arg0: $Supplier$$Type<($Type$$Type)>): $TypeInfo
 "isByte"(): boolean
 "isInt"(): boolean
 "isBoolean"(): boolean
 "isShort"(): boolean
 "withParams"(...arg0: ($TypeInfo$$Type)[]): $TypeInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeInfo$$Type = (() => $Class$$Type<(never)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TypeInfo$$Original = $TypeInfo;}
declare module "dev.latvian.mods.rhino.util.wrap.TypeWrapperFactory" {
import {$TypeInfo, $TypeInfo$$Type} from "dev.latvian.mods.rhino.type.TypeInfo"

export interface $TypeWrapperFactory$$Interface<T> {

(arg1: any, arg2: $TypeInfo): T
}

export class $TypeWrapperFactory<T> implements $TypeWrapperFactory$$Interface {
 "wrap"(arg1: any, arg2: $TypeInfo$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeWrapperFactory$$Type<T> = ((arg1: any, arg2: $TypeInfo) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TypeWrapperFactory$$Original<T> = $TypeWrapperFactory<(T)>;}
declare module "dev.latvian.mods.rhino.ErrorReporter" {
import {$EvaluatorException} from "dev.latvian.mods.rhino.EvaluatorException"

export interface $ErrorReporter$$Interface {
}

export class $ErrorReporter implements $ErrorReporter$$Interface {
 "error"(arg1: StringJS, arg2: StringJS, arg3: integer, arg4: StringJS, arg5: integer): void
 "warning"(arg0: StringJS, arg1: StringJS, arg2: integer, arg3: StringJS, arg4: integer): void
 "runtimeError"(arg1: StringJS, arg2: StringJS, arg3: integer, arg4: StringJS, arg5: integer): $EvaluatorException
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ErrorReporter$$Type = ($ErrorReporter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ErrorReporter$$Original = $ErrorReporter;}
declare module "dev.latvian.mods.rhino.util.CustomJavaToJsWrapper" {
import {$TypeInfo, $TypeInfo$$Type} from "dev.latvian.mods.rhino.type.TypeInfo"
import {$Scriptable, $Scriptable$$Type} from "dev.latvian.mods.rhino.Scriptable"

export interface $CustomJavaToJsWrapper$$Interface {

(arg1: $Scriptable, arg2: $TypeInfo): $Scriptable$$Type
}

export class $CustomJavaToJsWrapper implements $CustomJavaToJsWrapper$$Interface {
 "convertJavaToJs"(arg1: $Scriptable$$Type, arg2: $TypeInfo$$Type): $Scriptable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomJavaToJsWrapper$$Type = ((arg1: $Scriptable, arg2: $TypeInfo) => $Scriptable$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomJavaToJsWrapper$$Original = $CustomJavaToJsWrapper;}
declare module "dev.latvian.mods.rhino.type.ClassTypeInfo" {
import {$TypeInfo} from "dev.latvian.mods.rhino.type.TypeInfo"
import {$TypeVariable$$Type} from "java.lang.reflect.TypeVariable"
import {$VariableTypeInfo} from "dev.latvian.mods.rhino.type.VariableTypeInfo"
import {$StringBuilder$$Type} from "java.lang.StringBuilder"
import {$TypeInfoBase} from "dev.latvian.mods.rhino.type.TypeInfoBase"
import {$Type$$Type} from "java.lang.reflect.Type"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Set} from "java.util.Set"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$TypeStringContext$$Type} from "dev.latvian.mods.rhino.type.TypeStringContext"

export class $ClassTypeInfo extends $TypeInfoBase {
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "append"(arg0: $TypeStringContext$$Type, arg1: $StringBuilder$$Type): void
public "hashCode"(): integer
public "isVoid"(): boolean
public "isCharacter"(): boolean
public "isFloat"(): boolean
public "shouldConvert"(): boolean
public "getContainedComponentClasses"(): $Set<($Class<(never)>)>
public "isLong"(): boolean
public "isDouble"(): boolean
public "asClass"(): $Class<(never)>
public "isByte"(): boolean
public "isInt"(): boolean
public "isBoolean"(): boolean
public "isShort"(): boolean
public static "ofArray"(arg0: ($Type$$Type)[]): ($TypeInfo)[]
public static "of"(arg0: $Class$$Type<(never)>): $TypeInfo
public static "of"(arg0: $TypeVariable$$Type<(never)>): $VariableTypeInfo
public static "of"(arg0: $Type$$Type): $TypeInfo
public static "safeOfArray"(arg0: $Supplier$$Type<(($Type$$Type)[])>): ($TypeInfo)[]
public static "safeOf"(arg0: $Supplier$$Type<($Type$$Type)>): $TypeInfo
get "void"(): boolean
get "character"(): boolean
get "float"(): boolean
get "containedComponentClasses"(): $Set<($Class<(never)>)>
get "long"(): boolean
get "double"(): boolean
get "byte"(): boolean
get "int"(): boolean
get "boolean"(): boolean
get "short"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClassTypeInfo$$Type = ($ClassTypeInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClassTypeInfo$$Original = $ClassTypeInfo;}
declare module "dev.latvian.mods.rhino.CachedClassStorage" {
import {$Member$$Type} from "java.lang.reflect.Member"
import {$CachedClassInfo} from "dev.latvian.mods.rhino.CachedClassInfo"
import {$Class$$Type} from "java.lang.Class"

export class $CachedClassStorage {
static readonly "GLOBAL_PUBLIC": $CachedClassStorage
readonly "includeProtected": boolean
static readonly "GLOBAL_PROTECTED": $CachedClassStorage
readonly "objectClass": $CachedClassInfo

constructor(arg0: boolean)

public "include"(arg0: $Class$$Type<(never)>, arg1: $Member$$Type): boolean
public "get"(arg0: $Class$$Type<(never)>): $CachedClassInfo
public "isVisible"(arg0: integer): boolean
public "getDebugClassName"(arg0: $Class$$Type<(never)>): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CachedClassStorage$$Type = ($CachedClassStorage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CachedClassStorage$$Original = $CachedClassStorage;}
declare module "dev.latvian.mods.rhino.CachedMethodInfo$Accessible" {
import {$CachedMethodInfo} from "dev.latvian.mods.rhino.CachedMethodInfo"
import {$MethodSignature} from "dev.latvian.mods.rhino.MethodSignature"

export class $CachedMethodInfo$Accessible {
constructor()

public "getName"(): StringJS
public "getSignature"(): $MethodSignature
public "getInfo"(): $CachedMethodInfo
get "name"(): StringJS
get "signature"(): $MethodSignature
get "info"(): $CachedMethodInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CachedMethodInfo$Accessible$$Type = ($CachedMethodInfo$Accessible);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CachedMethodInfo$Accessible$$Original = $CachedMethodInfo$Accessible;}
declare module "dev.latvian.mods.rhino.CachedFieldInfo$Accessible" {
import {$CachedFieldInfo} from "dev.latvian.mods.rhino.CachedFieldInfo"

export class $CachedFieldInfo$Accessible {
constructor()

public "getName"(): StringJS
public "getInfo"(): $CachedFieldInfo
get "name"(): StringJS
get "info"(): $CachedFieldInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CachedFieldInfo$Accessible$$Type = ($CachedFieldInfo$Accessible);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CachedFieldInfo$Accessible$$Original = $CachedFieldInfo$Accessible;}
declare module "dev.latvian.mods.rhino.BaseFunction" {
import {$MemberType} from "dev.latvian.mods.rhino.MemberType"
import {$Context$$Type} from "dev.latvian.mods.rhino.Context"
import {$Function$$Interface} from "dev.latvian.mods.rhino.Function"
import {$IdScriptableObject} from "dev.latvian.mods.rhino.IdScriptableObject"
import {$DefaultValueTypeHint$$Type} from "dev.latvian.mods.rhino.util.DefaultValueTypeHint"
import {$Scriptable, $Scriptable$$Type} from "dev.latvian.mods.rhino.Scriptable"
import {$IdFunctionObject$$Type} from "dev.latvian.mods.rhino.IdFunctionObject"

export class $BaseFunction extends $IdScriptableObject implements $Function$$Interface {
static readonly "DONTENUM": integer
static readonly "CONST": integer
static readonly "UNINITIALIZED_CONST": integer
static readonly "EMPTY": integer
static readonly "READONLY": integer
static readonly "PERMANENT": integer

constructor()
constructor(arg0: boolean)
constructor(arg0: $Scriptable$$Type, arg1: $Scriptable$$Type)

public "toString"(): StringJS
public "getLength"(): integer
public "call"(arg1: $Scriptable$$Type, arg2: $Scriptable$$Type, arg3: (any)[]): any
public "getClassName"(): StringJS
public "createObject"(arg1: $Scriptable$$Type): $Scriptable
public "execIdCall"(arg0: $IdFunctionObject$$Type, arg1: $Context$$Type, arg2: $Scriptable$$Type, arg3: $Scriptable$$Type, arg4: (any)[]): any
public "getArity"(): integer
public "construct"(arg1: $Scriptable$$Type, arg2: (any)[]): $Scriptable
public "getTypeOf"(): $MemberType
public "hasInstance"(arg1: $Scriptable$$Type): boolean
public "getFunctionName"(): StringJS
public "setImmunePrototypeProperty"(arg0: any): void
public "get"(arg1: integer, arg2: $Scriptable$$Type): any
public "put"(arg1: integer, arg2: $Scriptable$$Type, arg3: any): void
public "delete"(arg1: integer): void
public "getDefaultValue"(arg1: $DefaultValueTypeHint$$Type): any
public "has"(arg1: integer, arg2: $Scriptable$$Type): boolean
public "setParentScope"(arg0: $Scriptable$$Type): void
public "getParentScope"(): $Scriptable
public "getAllIds"(): (any)[]
public "getPrototype"(): $Scriptable
public "setPrototype"(arg0: $Scriptable$$Type): void
public "getIds"(): (any)[]
get "length"(): integer
get "className"(): StringJS
get "arity"(): integer
get "typeOf"(): $MemberType
get "functionName"(): StringJS
set "immunePrototypeProperty"(value: any)
set "parentScope"(value: $Scriptable$$Type)
get "parentScope"(): $Scriptable
get "allIds"(): (any)[]
get "prototype"(): $Scriptable
set "prototype"(value: $Scriptable$$Type)
get "ids"(): (any)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseFunction$$Type = ($BaseFunction);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseFunction$$Original = $BaseFunction;}
declare module "dev.latvian.mods.rhino.Scriptable" {
import {$MemberType} from "dev.latvian.mods.rhino.MemberType"
import {$IdEnumerationIterator$$Interface} from "dev.latvian.mods.rhino.IdEnumerationIterator"
import {$DefaultValueTypeHint$$Type} from "dev.latvian.mods.rhino.util.DefaultValueTypeHint"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $Scriptable$$Interface extends $IdEnumerationIterator$$Interface {
get "className"(): StringJS
set "parentScope"(value: $Scriptable$$Type)
get "parentScope"(): $Scriptable
get "typeOf"(): $MemberType
get "allIds"(): (any)[]
get "prototype"(): $Scriptable
set "prototype"(value: $Scriptable$$Type)
get "ids"(): (any)[]
}

export class $Scriptable implements $Scriptable$$Interface {
static readonly "NOT_FOUND": any

 "get"(arg1: integer, arg2: $Scriptable$$Type): any
 "get"(arg1: StringJS, arg2: $Scriptable$$Type): any
 "put"(arg1: integer, arg2: $Scriptable$$Type, arg3: any): void
 "put"(arg1: StringJS, arg2: $Scriptable$$Type, arg3: any): void
 "delete"(arg1: StringJS): void
 "delete"(arg1: integer): void
 "getDefaultValue"(arg1: $DefaultValueTypeHint$$Type): any
 "getClassName"(): StringJS
 "has"(arg1: StringJS, arg2: $Scriptable$$Type): boolean
 "has"(arg1: integer, arg2: $Scriptable$$Type): boolean
 "setParentScope"(arg0: $Scriptable$$Type): void
 "getParentScope"(): $Scriptable
 "enumerationIteratorNext"(arg1: $Consumer$$Type<(any)>): boolean
 "enumerationIteratorHasNext"(arg1: $Consumer$$Type<(any)>): boolean
 "getTypeOf"(): $MemberType
 "getAllIds"(): (any)[]
 "hasInstance"(arg1: $Scriptable$$Type): boolean
 "getPrototype"(): $Scriptable
 "setPrototype"(arg0: $Scriptable$$Type): void
 "getIds"(): (any)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Scriptable$$Type = ($Scriptable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Scriptable$$Original = $Scriptable;}
declare module "dev.latvian.mods.rhino.util.DataObject" {
import {$Context$$Type} from "dev.latvian.mods.rhino.Context"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$List} from "java.util.List"

export interface $DataObject$$Interface {
get "dataObjectList"(): boolean
}

export class $DataObject implements $DataObject$$Interface {
 "createDataObjectList"<T>(arg0: $Supplier$$Type<(T)>, arg1: $Context$$Type): $List<(T)>
 "createDataObject"<T>(arg0: $Supplier$$Type<(T)>, arg1: $Context$$Type): T
 "isDataObjectList"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataObject$$Type = ($DataObject);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DataObject$$Original = $DataObject;}
declare module "dev.latvian.mods.rhino.ContextFactory" {
import {$MethodHandles$Lookup} from "java.lang.invoke.MethodHandles$Lookup"
import {$TypeWrappers} from "dev.latvian.mods.rhino.util.wrap.TypeWrappers"
import {$Context} from "dev.latvian.mods.rhino.Context"
import {$CachedClassStorage} from "dev.latvian.mods.rhino.CachedClassStorage"
import {$MethodHandle} from "java.lang.invoke.MethodHandle"
import {$Class$$Type} from "java.lang.Class"
import {$Record$$Type} from "java.lang.Record"

export class $ContextFactory {
constructor()

public "enter"(): $Context
public "registerDefaultRecordProperties"(arg0: $Record$$Type): void
public "getTypeWrappers"(): $TypeWrappers
public "getCachedClassStorage"(): $CachedClassStorage
public "getMethodHandlesLookup"(): $MethodHandles$Lookup
public "getDefaultRecordProperties"(arg0: $Class$$Type<(never)>): (any)[]
public "getRecordConstructor"(arg0: $Class$$Type<(never)>): $MethodHandle
public "getInstanceStaticFallback"(): boolean
public "setInstanceStaticFallback"(arg0: boolean): void
get "typeWrappers"(): $TypeWrappers
get "cachedClassStorage"(): $CachedClassStorage
get "methodHandlesLookup"(): $MethodHandles$Lookup
get "instanceStaticFallback"(): boolean
set "instanceStaticFallback"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContextFactory$$Type = ($ContextFactory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContextFactory$$Original = $ContextFactory;}
declare module "dev.latvian.mods.rhino.Script" {
import {$Scriptable, $Scriptable$$Type} from "dev.latvian.mods.rhino.Scriptable"

export interface $Script$$Interface {

(arg1: $Scriptable): any
}

export class $Script implements $Script$$Interface {
 "exec"(arg1: $Scriptable$$Type): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Script$$Type = ((arg1: $Scriptable) => any);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Script$$Original = $Script;}
declare module "dev.latvian.mods.rhino.type.JSObjectTypeInfo" {
import {$Collection$$Type} from "java.util.Collection"
import {$StringBuilder$$Type} from "java.lang.StringBuilder"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$TypeStringContext$$Type} from "dev.latvian.mods.rhino.type.TypeStringContext"
import {$TypeInfo, $TypeInfo$$Type, $TypeInfo$$Interface} from "dev.latvian.mods.rhino.type.TypeInfo"
import {$TypeVariable$$Type} from "java.lang.reflect.TypeVariable"
import {$VariableTypeInfo, $VariableTypeInfo$$Type} from "dev.latvian.mods.rhino.type.VariableTypeInfo"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$JSOptionalParam, $JSOptionalParam$$Type} from "dev.latvian.mods.rhino.type.JSOptionalParam"
import {$Type$$Type} from "java.lang.reflect.Type"
import {$Set} from "java.util.Set"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$RecordTypeInfo$Component} from "dev.latvian.mods.rhino.type.RecordTypeInfo$Component"
import {$Record} from "java.lang.Record"

export class $JSObjectTypeInfo extends $Record implements $TypeInfo$$Interface {
constructor(fields: $List$$Type<($JSOptionalParam$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "append"(arg0: $TypeStringContext$$Type, arg1: $StringBuilder$$Type): void
public "hashCode"(): integer
public static "of"(...arg0: ($JSOptionalParam$$Type)[]): $JSObjectTypeInfo
public static "of"(arg0: $JSOptionalParam$$Type, arg1: $JSOptionalParam$$Type): $JSObjectTypeInfo
public static "of"(arg0: $JSOptionalParam$$Type): $JSObjectTypeInfo
public "fields"(): $List<($JSOptionalParam)>
public "collectContainedComponentClasses"(arg0: $Collection$$Type<($Class$$Type<(never)>)>): void
public "asClass"(): $Class<(never)>
public static "ofArray"(arg0: ($Type$$Type)[]): ($TypeInfo)[]
public "signature"(): StringJS
public "isPrimitive"(): boolean
public "newArray"(arg0: integer): any
public "componentType"(): $TypeInfo
public static "of"(arg0: $Class$$Type<(never)>): $TypeInfo
public static "of"(arg0: $TypeVariable$$Type<(never)>): $VariableTypeInfo
public static "of"(arg0: $Type$$Type): $TypeInfo
public "enumConstants"(): $List<(any)>
public "param"(arg0: integer): $TypeInfo
public "isVoid"(): boolean
public "is"(arg0: $TypeInfo$$Type): boolean
public "or"(arg0: $TypeInfo$$Type): $TypeInfo
public "isCharacter"(): boolean
public "isFloat"(): boolean
public "asArray"(): $TypeInfo
public static "safeOfArray"(arg0: $Supplier$$Type<(($Type$$Type)[])>): ($TypeInfo)[]
public "createDefaultValue"(): any
public "consolidate"(arg0: $Map$$Type<($VariableTypeInfo$$Type), ($TypeInfo$$Type)>): $TypeInfo
public "shouldConvert"(): boolean
public "getContainedComponentClasses"(): $Set<($Class<(never)>)>
public "isLong"(): boolean
public "recordComponents"(): $Map<(StringJS), ($RecordTypeInfo$Component)>
public "isFunctionalInterface"(): boolean
public "isDouble"(): boolean
public static "safeOf"(arg0: $Supplier$$Type<($Type$$Type)>): $TypeInfo
public "isByte"(): boolean
public "isInt"(): boolean
public "isBoolean"(): boolean
public "isShort"(): boolean
public "withParams"(...arg0: ($TypeInfo$$Type)[]): $TypeInfo
get "primitive"(): boolean
get "void"(): boolean
get "character"(): boolean
get "float"(): boolean
get "containedComponentClasses"(): $Set<($Class<(never)>)>
get "long"(): boolean
get "functionalInterface"(): boolean
get "double"(): boolean
get "byte"(): boolean
get "int"(): boolean
get "boolean"(): boolean
get "short"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSObjectTypeInfo$$Type = ({"fields"?: $List$$Type<($JSOptionalParam$$Type)>}) | ([fields?: $List$$Type<($JSOptionalParam$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JSObjectTypeInfo$$Original = $JSObjectTypeInfo;}
declare module "dev.latvian.mods.rhino.type.RecordTypeInfo$Component" {
import {$TypeInfo, $TypeInfo$$Type} from "dev.latvian.mods.rhino.type.TypeInfo"
import {$Record} from "java.lang.Record"

export class $RecordTypeInfo$Component extends $Record {
constructor(index: integer, name: StringJS, type: $TypeInfo$$Type)

public "index"(): integer
public "name"(): StringJS
public "type"(): $TypeInfo
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecordTypeInfo$Component$$Type = ({"index"?: integer, "type"?: $TypeInfo$$Type, "name"?: StringJS}) | ([index?: integer, type?: $TypeInfo$$Type, name?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecordTypeInfo$Component$$Original = $RecordTypeInfo$Component;}
declare module "dev.latvian.mods.rhino.NativeArray" {
import {$Iterator} from "java.util.Iterator"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$Collection$$Type} from "java.util.Collection"
import {$SequencedCollection} from "java.util.SequencedCollection"
import {$Comparator$$Type} from "java.util.Comparator"
import {$Spliterator} from "java.util.Spliterator"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$List, $List$$Interface} from "java.util.List"
import {$IdScriptableObject} from "dev.latvian.mods.rhino.IdScriptableObject"
import {$IdFunctionObject$$Type} from "dev.latvian.mods.rhino.IdFunctionObject"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$IntFunction$$Type} from "java.util.function.IntFunction"
import {$ListIterator} from "java.util.ListIterator"
import {$Context$$Type} from "dev.latvian.mods.rhino.Context"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$DataObject$$Interface} from "dev.latvian.mods.rhino.util.DataObject"
import {$Scriptable$$Type} from "dev.latvian.mods.rhino.Scriptable"
import {$Stream} from "java.util.stream.Stream"

export class $NativeArray extends $IdScriptableObject implements $List$$Interface, $DataObject$$Interface {
static readonly "DONTENUM": integer
static readonly "CONST": integer
static readonly "UNINITIALIZED_CONST": integer
static readonly "EMPTY": integer
static readonly "READONLY": integer
static readonly "PERMANENT": integer

constructor(arg1: long)
constructor(arg1: (any)[])

public "remove"(arg0: any): boolean
public "remove"(arg0: integer): any
public "size"(): integer
public "get"(arg0: long, arg1: $Context$$Type): any
public "get"(arg0: integer): any
public "get"(arg1: integer, arg2: $Scriptable$$Type): any
public "put"(arg1: integer, arg2: $Scriptable$$Type, arg3: any): void
public "put"(arg1: StringJS, arg2: $Scriptable$$Type, arg3: any): void
public "toString"(): StringJS
public "getLength"(): long
public "indexOf"(arg0: any): integer
public "clear"(): void
public "lastIndexOf"(arg0: any): integer
public "isEmpty"(): boolean
public "add"(arg0: any): boolean
public "add"(arg0: integer, arg1: any): void
public "subList"(arg0: integer, arg1: integer): $List
public "toArray"(): (any)[]
public "toArray"(arg0: (any)[]): (any)[]
public "iterator"(): $Iterator
public "contains"(arg0: any): boolean
public "addAll"(arg0: integer, arg1: $Collection$$Type): boolean
public "addAll"(arg0: $Collection$$Type): boolean
public "set"(arg0: integer, arg1: any): any
public "delete"(arg1: integer): void
public "getClassName"(): StringJS
public "getAttributes"(arg1: integer): integer
public "removeAll"(arg0: $Collection$$Type): boolean
public "retainAll"(arg0: $Collection$$Type): boolean
public "listIterator"(): $ListIterator
public "listIterator"(arg0: integer): $ListIterator
public "containsAll"(arg0: $Collection$$Type): boolean
public "has"(arg1: integer, arg2: $Scriptable$$Type): boolean
public "execIdCall"(arg0: $IdFunctionObject$$Type, arg1: $Context$$Type, arg2: $Scriptable$$Type, arg3: $Scriptable$$Type, arg4: (any)[]): any
public "createDataObjectList"<T>(arg0: $Supplier$$Type<(T)>, arg1: $Context$$Type): $List<(T)>
public "getIds"(arg1: boolean, arg2: boolean): (any)[]
public "getIndexIds"(): $List<(integer)>
public "createDataObject"<T>(arg0: $Supplier$$Type<(T)>, arg1: $Context$$Type): T
public "isDataObjectList"(): boolean
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "copyOf"<E>(arg0: $Collection$$Type<(any)>): $List<(any)>
public "replaceAll"(arg0: $UnaryOperator$$Type<(any)>): void
public static "of"<E>(arg0: any, arg1: any, arg2: any): $List<(any)>
public static "of"<E>(arg0: any, arg1: any, arg2: any, arg3: any): $List<(any)>
public static "of"<E>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any): $List<(any)>
public static "of"<E>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any, arg8: any, arg9: any): $List<(any)>
public static "of"<E>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any, arg8: any): $List<(any)>
public static "of"<E>(): $List<(any)>
public static "of"<E>(arg0: any): $List<(any)>
public static "of"<E>(arg0: any, arg1: any): $List<(any)>
public static "of"<E>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any): $List<(any)>
public static "of"<E>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any): $List<(any)>
public static "of"<E>(...arg0: (any)[]): $List<(any)>
public static "of"<E>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any): $List<(any)>
public "spliterator"(): $Spliterator<(any)>
public "sort"(arg0: $Comparator$$Type<(any)>): void
public "getFirst"(): any
public "getLast"(): any
public "addFirst"(arg0: any): void
public "addLast"(arg0: any): void
public "removeFirst"(): any
public "removeLast"(): any
public "reversed"(): $SequencedCollection
public "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
public "stream"(): $Stream<(any)>
public "removeIf"(arg0: $Predicate$$Type<(any)>): boolean
public "parallelStream"(): $Stream<(any)>
public "forEach"(arg0: $Consumer$$Type<(any)>): void
get "length"(): long
get "empty"(): boolean
get "className"(): StringJS
get "indexIds"(): $List<(integer)>
get "dataObjectList"(): boolean
get "first"(): any
get "last"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NativeArray$$Type = ($NativeArray);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NativeArray$$Original = $NativeArray;}
declare module "dev.latvian.mods.rhino.util.wrap.TypeWrapperValidator" {
import {$TypeInfo, $TypeInfo$$Type} from "dev.latvian.mods.rhino.type.TypeInfo"

export interface $TypeWrapperValidator$$Interface {

(arg0: any, arg1: $TypeInfo): boolean
}

export class $TypeWrapperValidator implements $TypeWrapperValidator$$Interface {
static readonly "ALWAYS_VALID": $TypeWrapperValidator

 "isValid"(arg0: any, arg1: $TypeInfo$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeWrapperValidator$$Type = ((arg0: any, arg1: $TypeInfo) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TypeWrapperValidator$$Original = $TypeWrapperValidator;}
declare module "dev.latvian.mods.rhino.util.wrap.TypeWrapper" {
import {$TypeWrapperValidator, $TypeWrapperValidator$$Type} from "dev.latvian.mods.rhino.util.wrap.TypeWrapperValidator"
import {$TypeWrapperFactory, $TypeWrapperFactory$$Type} from "dev.latvian.mods.rhino.util.wrap.TypeWrapperFactory"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Record} from "java.lang.Record"

export class $TypeWrapper<T> extends $Record {
constructor(target: $Class$$Type<(T)>, validator: $TypeWrapperValidator$$Type, factory: $TypeWrapperFactory$$Type<(T)>)

public "equals"(arg0: any): boolean
public "target"(): $Class<(T)>
public "toString"(): StringJS
public "hashCode"(): integer
public "factory"(): $TypeWrapperFactory<(T)>
public "validator"(): $TypeWrapperValidator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeWrapper$$Type<T> = ({"target"?: $Class$$Type<(T)>, "factory"?: $TypeWrapperFactory$$Type<(T)>, "validator"?: $TypeWrapperValidator$$Type}) | ([target?: $Class$$Type<(T)>, factory?: $TypeWrapperFactory$$Type<(T)>, validator?: $TypeWrapperValidator$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TypeWrapper$$Original<T> = $TypeWrapper<(T)>;}
declare module "dev.latvian.mods.rhino.MethodSignature" {
import {$Executable$$Type} from "java.lang.reflect.Executable"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Record} from "java.lang.Record"

export class $MethodSignature extends $Record {
constructor(arg0: $Executable$$Type)
constructor(name: StringJS, args: ($Class$$Type<(never)>)[])

public "name"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "args"(): ($Class<(never)>)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MethodSignature$$Type = ({"args"?: ($Class$$Type<(never)>)[], "name"?: StringJS}) | ([args?: ($Class$$Type<(never)>)[], name?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MethodSignature$$Original = $MethodSignature;}
declare module "dev.latvian.mods.rhino.GeneratedClassLoader" {
import {$Class, $Class$$Type} from "java.lang.Class"

export interface $GeneratedClassLoader$$Interface {
}

export class $GeneratedClassLoader implements $GeneratedClassLoader$$Interface {
 "defineClass"(arg0: StringJS, arg1: (byte)[]): $Class<(never)>
 "linkClass"(arg0: $Class$$Type<(never)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeneratedClassLoader$$Type = ($GeneratedClassLoader);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeneratedClassLoader$$Original = $GeneratedClassLoader;}
declare module "dev.latvian.mods.rhino.WrappedExecutable" {
import {$TypeInfo} from "dev.latvian.mods.rhino.type.TypeInfo"
import {$CachedExecutableInfo} from "dev.latvian.mods.rhino.CachedExecutableInfo"
import {$Scriptable, $Scriptable$$Type} from "dev.latvian.mods.rhino.Scriptable"

export interface $WrappedExecutable$$Interface {

(arg1: $Scriptable, arg2: any, arg3: (any)[]): any
get "returnType"(): $TypeInfo
get "static"(): boolean
}

export class $WrappedExecutable implements $WrappedExecutable$$Interface {
 "invoke"(arg1: $Scriptable$$Type, arg2: any, arg3: (any)[]): any
 "getReturnType"(): $TypeInfo
 "isStatic"(): boolean
 "unwrap"(): $CachedExecutableInfo
 "construct"(arg1: $Scriptable$$Type, arg2: (any)[]): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrappedExecutable$$Type = ((arg1: $Scriptable, arg2: any, arg3: (any)[]) => any);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WrappedExecutable$$Original = $WrappedExecutable;}
declare module "dev.latvian.mods.rhino.CachedClassInfo" {
import {$CachedMethodInfo} from "dev.latvian.mods.rhino.CachedMethodInfo"
import {$TypeInfo} from "dev.latvian.mods.rhino.type.TypeInfo"
import {$CachedFieldInfo$Accessible} from "dev.latvian.mods.rhino.CachedFieldInfo$Accessible"
import {$CachedClassStorage, $CachedClassStorage$$Type} from "dev.latvian.mods.rhino.CachedClassStorage"
import {$CachedConstructorInfo} from "dev.latvian.mods.rhino.CachedConstructorInfo"
import {$StringBuilder$$Type} from "java.lang.StringBuilder"
import {$List} from "java.util.List"
import {$CachedFieldInfo} from "dev.latvian.mods.rhino.CachedFieldInfo"
import {$Set} from "java.util.Set"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$CachedMethodInfo$Accessible} from "dev.latvian.mods.rhino.CachedMethodInfo$Accessible"

export class $CachedClassInfo {
readonly "storage": $CachedClassStorage
readonly "type": $Class<(never)>
readonly "modifiers": integer
readonly "isInterface": boolean

constructor(arg0: $CachedClassStorage$$Type, arg1: $Class$$Type<(never)>)

public "toString"(): StringJS
public "getSuperclass"(): $CachedClassInfo
public "getInterfaces"(): $List<($CachedClassInfo)>
public "getMethod"(arg0: StringJS, arg1: ($Class$$Type<(never)>)[]): $CachedMethodInfo
public "getConstructors"(): $List<($CachedConstructorInfo)>
public "getDeclaredFields"(): $List<($CachedFieldInfo)>
public "getDeclaredMethods"(): $List<($CachedMethodInfo)>
public "getTypeInfo"(): $TypeInfo
public "getDebugInfo"(): $List<(StringJS)>
public "getAccessibleMethods"(arg0: boolean): $List<($CachedMethodInfo$Accessible)>
public "getAccessibleFields"(arg0: boolean): $List<($CachedFieldInfo$Accessible)>
public "getRemapPrefixes"(): $Set<(StringJS)>
public "appendDebugType"(arg0: $StringBuilder$$Type): void
get "superclass"(): $CachedClassInfo
get "interfaces"(): $List<($CachedClassInfo)>
get "constructors"(): $List<($CachedConstructorInfo)>
get "declaredFields"(): $List<($CachedFieldInfo)>
get "declaredMethods"(): $List<($CachedMethodInfo)>
get "typeInfo"(): $TypeInfo
get "debugInfo"(): $List<(StringJS)>
get "remapPrefixes"(): $Set<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CachedClassInfo$$Type = ($CachedClassInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CachedClassInfo$$Original = $CachedClassInfo;}
declare module "dev.latvian.mods.rhino.util.RemappedEnumConstant" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RemappedEnumConstant$$Interface {

(): StringJS
get "remappedEnumConstantName"(): StringJS
}

export class $RemappedEnumConstant implements $RemappedEnumConstant$$Interface {
 "getRemappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RemappedEnumConstant$$Type = (() => StringJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RemappedEnumConstant$$Original = $RemappedEnumConstant;}
declare module "dev.latvian.mods.rhino.util.DefaultValueTypeHint" {
import {$Enum} from "java.lang.Enum"

export class $DefaultValueTypeHint extends $Enum<($DefaultValueTypeHint)> {
static readonly "NUMBER": $DefaultValueTypeHint
static readonly "STRING": $DefaultValueTypeHint
static readonly "CLASS": $DefaultValueTypeHint
static readonly "FUNCTION": $DefaultValueTypeHint
static readonly "BOOLEAN": $DefaultValueTypeHint

public "toString"(): StringJS
public static "values"(): ($DefaultValueTypeHint)[]
public static "valueOf"(arg0: StringJS): $DefaultValueTypeHint
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DefaultValueTypeHint$$Type = (("string") | ("number") | ("boolean") | ("function") | ("class"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DefaultValueTypeHint$$Original = $DefaultValueTypeHint;}
declare module "dev.latvian.mods.rhino.RhinoException" {
import {$PrintStream$$Type} from "java.io.PrintStream"
import {$ScriptStackElement} from "dev.latvian.mods.rhino.ScriptStackElement"
import {$PrintWriter$$Type} from "java.io.PrintWriter"
import {$RuntimeException} from "java.lang.RuntimeException"

export class $RhinoException extends $RuntimeException {
public "printStackTrace"(arg0: $PrintWriter$$Type): void
public "printStackTrace"(arg0: $PrintStream$$Type): void
public "lineNumber"(): integer
public "getMessage"(): StringJS
public "columnNumber"(): integer
public "details"(): StringJS
public "lineSource"(): StringJS
public "sourceName"(): StringJS
public "getScriptStackTrace"(arg0: integer, arg1: StringJS): StringJS
public "getScriptStackTrace"(): StringJS
public "getScriptStack"(arg0: integer, arg1: StringJS): ($ScriptStackElement)[]
public "getScriptStack"(): ($ScriptStackElement)[]
public "initSourceName"(arg0: StringJS): void
public "initLineNumber"(arg0: integer): void
public "initLineSource"(arg0: StringJS): void
public "initColumnNumber"(arg0: integer): void
get "message"(): StringJS
get "scriptStackTrace"(): StringJS
get "scriptStack"(): ($ScriptStackElement)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RhinoException$$Type = ($RhinoException);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RhinoException$$Original = $RhinoException;}
declare module "dev.latvian.mods.rhino.IdScriptableObject" {
import {$Context$$Type} from "dev.latvian.mods.rhino.Context"
import {$ScriptableObject, $ScriptableObject$$Type} from "dev.latvian.mods.rhino.ScriptableObject"
import {$Symbol$$Type} from "dev.latvian.mods.rhino.Symbol"
import {$Scriptable$$Type} from "dev.latvian.mods.rhino.Scriptable"
import {$IdFunctionCall$$Interface} from "dev.latvian.mods.rhino.IdFunctionCall"
import {$IdFunctionObject, $IdFunctionObject$$Type} from "dev.latvian.mods.rhino.IdFunctionObject"

export class $IdScriptableObject extends $ScriptableObject implements $IdFunctionCall$$Interface {
static readonly "DONTENUM": integer
static readonly "CONST": integer
static readonly "UNINITIALIZED_CONST": integer
static readonly "EMPTY": integer
static readonly "READONLY": integer
static readonly "PERMANENT": integer

constructor(arg0: $Scriptable$$Type, arg1: $Scriptable$$Type)
constructor()

public "setAttributes"(arg1: StringJS, arg2: integer): void
public "get"(arg1: $Symbol$$Type, arg2: $Scriptable$$Type): any
public "get"(arg1: StringJS, arg2: $Scriptable$$Type): any
public "put"(arg1: $Symbol$$Type, arg2: $Scriptable$$Type, arg3: any): void
public "put"(arg1: StringJS, arg2: $Scriptable$$Type, arg3: any): void
public "delete"(arg1: $Symbol$$Type): void
public "delete"(arg1: StringJS): void
public "getAttributes"(arg1: $Symbol$$Type): integer
public "getAttributes"(arg1: StringJS): integer
public "has"(arg1: StringJS, arg2: $Scriptable$$Type): boolean
public "has"(arg1: $Symbol$$Type, arg2: $Scriptable$$Type): boolean
public "execIdCall"(arg0: $IdFunctionObject$$Type, arg1: $Context$$Type, arg2: $Scriptable$$Type, arg3: $Scriptable$$Type, arg4: (any)[]): any
public "exportAsJSClass"(arg0: integer, arg1: $Scriptable$$Type, arg2: boolean, arg3: $Context$$Type): $IdFunctionObject
public "initPrototypeValue"(arg0: integer, arg1: StringJS, arg2: any, arg3: integer): void
public "initPrototypeValue"(arg0: integer, arg1: $Symbol$$Type, arg2: any, arg3: integer): void
public "hasPrototypeMap"(): boolean
public "defineOwnProperty"(arg1: any, arg2: $ScriptableObject$$Type): void
public "initPrototypeMethod"(arg0: any, arg1: integer, arg2: StringJS, arg3: StringJS, arg4: integer, arg5: $Context$$Type): $IdFunctionObject
public "initPrototypeMethod"(arg0: any, arg1: integer, arg2: StringJS, arg3: integer, arg4: $Context$$Type): $IdFunctionObject
public "initPrototypeMethod"(arg0: any, arg1: integer, arg2: $Symbol$$Type, arg3: StringJS, arg4: integer, arg5: $Context$$Type): $IdFunctionObject
public "activatePrototypeMap"(arg0: integer): void
public "initPrototypeConstructor"(arg0: $IdFunctionObject$$Type, arg1: $Context$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IdScriptableObject$$Type = ($IdScriptableObject);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IdScriptableObject$$Original = $IdScriptableObject;}
declare module "dev.latvian.mods.rhino.type.RecordTypeInfo$Data" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$RecordTypeInfo$Component, $RecordTypeInfo$Component$$Type} from "dev.latvian.mods.rhino.type.RecordTypeInfo$Component"
import {$Record} from "java.lang.Record"

export class $RecordTypeInfo$Data extends $Record {
constructor(components: ($RecordTypeInfo$Component$$Type)[], componentMap: $Map$$Type<(StringJS), ($RecordTypeInfo$Component$$Type)>, defaultArguments: (any)[])

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "components"(): ($RecordTypeInfo$Component)[]
public "componentMap"(): $Map<(StringJS), ($RecordTypeInfo$Component)>
public "defaultArguments"(): (any)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecordTypeInfo$Data$$Type = ({"componentMap"?: $Map$$Type<(StringJS), ($RecordTypeInfo$Component$$Type)>, "components"?: ($RecordTypeInfo$Component$$Type)[], "defaultArguments"?: (any)[]}) | ([componentMap?: $Map$$Type<(StringJS), ($RecordTypeInfo$Component$$Type)>, components?: ($RecordTypeInfo$Component$$Type)[], defaultArguments?: (any)[]]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecordTypeInfo$Data$$Original = $RecordTypeInfo$Data;}
declare module "dev.latvian.mods.rhino.SymbolScriptable" {
import {$Symbol$$Type} from "dev.latvian.mods.rhino.Symbol"
import {$Scriptable$$Type} from "dev.latvian.mods.rhino.Scriptable"

export interface $SymbolScriptable$$Interface {
}

export class $SymbolScriptable implements $SymbolScriptable$$Interface {
 "get"(arg1: $Symbol$$Type, arg2: $Scriptable$$Type): any
 "put"(arg1: $Symbol$$Type, arg2: $Scriptable$$Type, arg3: any): void
 "delete"(arg1: $Symbol$$Type): void
 "has"(arg1: $Symbol$$Type, arg2: $Scriptable$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SymbolScriptable$$Type = ($SymbolScriptable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SymbolScriptable$$Original = $SymbolScriptable;}
declare module "dev.latvian.mods.rhino.EvaluatorException" {
import {$RhinoException} from "dev.latvian.mods.rhino.RhinoException"

export class $EvaluatorException extends $RhinoException {
constructor(arg1: StringJS)
constructor(arg1: StringJS, arg2: StringJS, arg3: integer)
constructor(arg1: StringJS, arg2: StringJS, arg3: integer, arg4: StringJS, arg5: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EvaluatorException$$Type = ($EvaluatorException);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EvaluatorException$$Original = $EvaluatorException;}
declare module "dev.latvian.mods.rhino.CachedMemberInfo" {
import {$CachedClassInfo, $CachedClassInfo$$Type} from "dev.latvian.mods.rhino.CachedClassInfo"
import {$AccessibleObject, $AccessibleObject$$Type} from "java.lang.reflect.AccessibleObject"

export class $CachedMemberInfo {
readonly "originalName": StringJS
readonly "parent": $CachedClassInfo
readonly "isStatic": boolean
readonly "isFinal": boolean
readonly "modifiers": integer
readonly "isNative": boolean

constructor(arg0: $CachedClassInfo$$Type, arg1: $AccessibleObject$$Type, arg2: StringJS, arg3: integer)

public "getName"(): StringJS
public "toString"(): StringJS
public "getDeclaringClass"(): $CachedClassInfo
public "getCached"(): $AccessibleObject
get "name"(): StringJS
get "declaringClass"(): $CachedClassInfo
get "cached"(): $AccessibleObject
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CachedMemberInfo$$Type = ($CachedMemberInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CachedMemberInfo$$Original = $CachedMemberInfo;}
declare module "dev.latvian.mods.rhino.util.SpecialEquality" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SpecialEquality$$Interface {
}

export class $SpecialEquality implements $SpecialEquality$$Interface {
 "specialEquals"(arg1: any, arg2: boolean): boolean
static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpecialEquality$$Type = ($SpecialEquality);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpecialEquality$$Original = $SpecialEquality;}
declare module "dev.latvian.mods.rhino.IdFunctionCall" {
import {$Context, $Context$$Type} from "dev.latvian.mods.rhino.Context"
import {$Scriptable, $Scriptable$$Type} from "dev.latvian.mods.rhino.Scriptable"
import {$IdFunctionObject, $IdFunctionObject$$Type} from "dev.latvian.mods.rhino.IdFunctionObject"

export interface $IdFunctionCall$$Interface {

(arg0: $IdFunctionObject, arg1: $Context, arg2: $Scriptable, arg3: $Scriptable, arg4: (any)[]): any
}

export class $IdFunctionCall implements $IdFunctionCall$$Interface {
 "execIdCall"(arg0: $IdFunctionObject$$Type, arg1: $Context$$Type, arg2: $Scriptable$$Type, arg3: $Scriptable$$Type, arg4: (any)[]): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IdFunctionCall$$Type = ((arg0: $IdFunctionObject, arg1: $Context, arg2: $Scriptable, arg3: $Scriptable, arg4: (any)[]) => any);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IdFunctionCall$$Original = $IdFunctionCall;}
declare module "dev.latvian.mods.rhino.CachedFieldInfo" {
import {$TypeInfo} from "dev.latvian.mods.rhino.type.TypeInfo"
import {$CachedClassInfo, $CachedClassInfo$$Type} from "dev.latvian.mods.rhino.CachedClassInfo"
import {$CachedMemberInfo} from "dev.latvian.mods.rhino.CachedMemberInfo"
import {$Field, $Field$$Type} from "java.lang.reflect.Field"

export class $CachedFieldInfo extends $CachedMemberInfo {
readonly "originalName": StringJS
readonly "parent": $CachedClassInfo
readonly "isStatic": boolean
readonly "isFinal": boolean
readonly "modifiers": integer
readonly "isNative": boolean

constructor(arg0: $CachedClassInfo$$Type, arg1: $Field$$Type)

public "get"(arg1: any): any
public "set"(arg1: any, arg2: any): void
public "getType"(): $TypeInfo
public "getCached"(): $Field
get "type"(): $TypeInfo
get "cached"(): $Field
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CachedFieldInfo$$Type = ($CachedFieldInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CachedFieldInfo$$Original = $CachedFieldInfo;}
declare module "dev.latvian.mods.rhino.type.TypeStringContext" {
import {$TypeInfo$$Type} from "dev.latvian.mods.rhino.type.TypeInfo"
import {$StringBuilder$$Type} from "java.lang.StringBuilder"
import {$ClassTypeInfo$$Type} from "dev.latvian.mods.rhino.type.ClassTypeInfo"

export interface $TypeStringContext$$Interface {
}

export class $TypeStringContext implements $TypeStringContext$$Interface {
static readonly "DEFAULT": $TypeStringContext

 "toString"(arg0: $TypeInfo$$Type): StringJS
 "append"(arg0: $StringBuilder$$Type, arg1: $TypeInfo$$Type): void
 "appendClassName"(arg0: $StringBuilder$$Type, arg1: $ClassTypeInfo$$Type): void
 "appendSpace"(arg0: $StringBuilder$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeStringContext$$Type = ($TypeStringContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TypeStringContext$$Original = $TypeStringContext;}
declare module "dev.latvian.mods.rhino.util.ArrayValueProvider" {
import {$NativeArray$$Type} from "dev.latvian.mods.rhino.NativeArray"
import {$Iterable$$Type} from "java.lang.Iterable"
import {$TypeInfo$$Type} from "dev.latvian.mods.rhino.type.TypeInfo"
import {$List$$Type} from "java.util.List"

export interface $ArrayValueProvider$$Interface {
get "length"(): integer
get "errorSource"(): any
}

export class $ArrayValueProvider implements $ArrayValueProvider$$Interface {
static readonly "EMPTY": $ArrayValueProvider

 "getLength"(): integer
 "createList"(arg1: $TypeInfo$$Type): any
 "createArray"(arg1: $TypeInfo$$Type): any
static "fromJavaList"(arg0: $List$$Type<(never)>, arg1: any): $ArrayValueProvider
static "fromNativeArray"(arg0: $NativeArray$$Type): $ArrayValueProvider
 "createSet"(arg1: $TypeInfo$$Type): any
static "fromIterable"(arg0: $Iterable$$Type<(never)>): $ArrayValueProvider
 "getArrayValue"(arg1: integer): any
 "getErrorSource"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArrayValueProvider$$Type = ($ArrayValueProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArrayValueProvider$$Original = $ArrayValueProvider;}
declare module "dev.latvian.mods.rhino.type.JSFixedArrayTypeInfo" {
import {$Collection$$Type} from "java.util.Collection"
import {$StringBuilder$$Type} from "java.lang.StringBuilder"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$TypeStringContext$$Type} from "dev.latvian.mods.rhino.type.TypeStringContext"
import {$TypeInfo, $TypeInfo$$Type, $TypeInfo$$Interface} from "dev.latvian.mods.rhino.type.TypeInfo"
import {$TypeVariable$$Type} from "java.lang.reflect.TypeVariable"
import {$VariableTypeInfo, $VariableTypeInfo$$Type} from "dev.latvian.mods.rhino.type.VariableTypeInfo"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$JSOptionalParam, $JSOptionalParam$$Type} from "dev.latvian.mods.rhino.type.JSOptionalParam"
import {$Type$$Type} from "java.lang.reflect.Type"
import {$Set} from "java.util.Set"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$RecordTypeInfo$Component} from "dev.latvian.mods.rhino.type.RecordTypeInfo$Component"
import {$Record} from "java.lang.Record"

export class $JSFixedArrayTypeInfo extends $Record implements $TypeInfo$$Interface {
constructor(types: $List$$Type<($JSOptionalParam$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "append"(arg0: $TypeStringContext$$Type, arg1: $StringBuilder$$Type): void
public "hashCode"(): integer
public "types"(): $List<($JSOptionalParam)>
public "collectContainedComponentClasses"(arg0: $Collection$$Type<($Class$$Type<(never)>)>): void
public "asClass"(): $Class<(never)>
public static "ofArray"(arg0: ($Type$$Type)[]): ($TypeInfo)[]
public "signature"(): StringJS
public "isPrimitive"(): boolean
public "newArray"(arg0: integer): any
public "componentType"(): $TypeInfo
public static "of"(arg0: $Class$$Type<(never)>): $TypeInfo
public static "of"(arg0: $TypeVariable$$Type<(never)>): $VariableTypeInfo
public static "of"(arg0: $Type$$Type): $TypeInfo
public "enumConstants"(): $List<(any)>
public "param"(arg0: integer): $TypeInfo
public "isVoid"(): boolean
public "is"(arg0: $TypeInfo$$Type): boolean
public "or"(arg0: $TypeInfo$$Type): $TypeInfo
public "isCharacter"(): boolean
public "isFloat"(): boolean
public "asArray"(): $TypeInfo
public static "safeOfArray"(arg0: $Supplier$$Type<(($Type$$Type)[])>): ($TypeInfo)[]
public "createDefaultValue"(): any
public "consolidate"(arg0: $Map$$Type<($VariableTypeInfo$$Type), ($TypeInfo$$Type)>): $TypeInfo
public "shouldConvert"(): boolean
public "getContainedComponentClasses"(): $Set<($Class<(never)>)>
public "isLong"(): boolean
public "recordComponents"(): $Map<(StringJS), ($RecordTypeInfo$Component)>
public "isFunctionalInterface"(): boolean
public "isDouble"(): boolean
public static "safeOf"(arg0: $Supplier$$Type<($Type$$Type)>): $TypeInfo
public "isByte"(): boolean
public "isInt"(): boolean
public "isBoolean"(): boolean
public "isShort"(): boolean
public "withParams"(...arg0: ($TypeInfo$$Type)[]): $TypeInfo
get "primitive"(): boolean
get "void"(): boolean
get "character"(): boolean
get "float"(): boolean
get "containedComponentClasses"(): $Set<($Class<(never)>)>
get "long"(): boolean
get "functionalInterface"(): boolean
get "double"(): boolean
get "byte"(): boolean
get "int"(): boolean
get "boolean"(): boolean
get "short"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSFixedArrayTypeInfo$$Type = ({"types"?: $List$$Type<($JSOptionalParam$$Type)>}) | ([types?: $List$$Type<($JSOptionalParam$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JSFixedArrayTypeInfo$$Original = $JSFixedArrayTypeInfo;}
declare module "dev.latvian.mods.rhino.Function" {
import {$Callable$$Interface} from "dev.latvian.mods.rhino.Callable"
import {$MemberType} from "dev.latvian.mods.rhino.MemberType"
import {$DefaultValueTypeHint$$Type} from "dev.latvian.mods.rhino.util.DefaultValueTypeHint"
import {$Scriptable, $Scriptable$$Type, $Scriptable$$Interface} from "dev.latvian.mods.rhino.Scriptable"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $Function$$Interface extends $Scriptable$$Interface, $Callable$$Interface {
get "className"(): StringJS
set "parentScope"(value: $Scriptable$$Type)
get "parentScope"(): $Scriptable
get "typeOf"(): $MemberType
get "allIds"(): (any)[]
get "prototype"(): $Scriptable
set "prototype"(value: $Scriptable$$Type)
get "ids"(): (any)[]
}

export class $Function implements $Function$$Interface {
 "call"(arg1: $Scriptable$$Type, arg2: $Scriptable$$Type, arg3: (any)[]): any
 "construct"(arg1: $Scriptable$$Type, arg2: (any)[]): $Scriptable
 "get"(arg1: integer, arg2: $Scriptable$$Type): any
 "get"(arg1: StringJS, arg2: $Scriptable$$Type): any
 "put"(arg1: integer, arg2: $Scriptable$$Type, arg3: any): void
 "put"(arg1: StringJS, arg2: $Scriptable$$Type, arg3: any): void
 "delete"(arg1: StringJS): void
 "delete"(arg1: integer): void
 "getDefaultValue"(arg1: $DefaultValueTypeHint$$Type): any
 "getClassName"(): StringJS
 "has"(arg1: StringJS, arg2: $Scriptable$$Type): boolean
 "has"(arg1: integer, arg2: $Scriptable$$Type): boolean
 "setParentScope"(arg0: $Scriptable$$Type): void
 "getParentScope"(): $Scriptable
 "enumerationIteratorNext"(arg1: $Consumer$$Type<(any)>): boolean
 "enumerationIteratorHasNext"(arg1: $Consumer$$Type<(any)>): boolean
 "getTypeOf"(): $MemberType
 "getAllIds"(): (any)[]
 "hasInstance"(arg1: $Scriptable$$Type): boolean
 "getPrototype"(): $Scriptable
 "setPrototype"(arg0: $Scriptable$$Type): void
 "getIds"(): (any)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function$$Type = ($Function);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Function$$Original = $Function;}
declare module "dev.latvian.mods.rhino.type.RecordTypeInfo" {
import {$JSObjectTypeInfo} from "dev.latvian.mods.rhino.type.JSObjectTypeInfo"
import {$Map, $Map$$Type} from "java.util.Map"
import {$TypeWrapperFactory$$Interface} from "dev.latvian.mods.rhino.util.wrap.TypeWrapperFactory"
import {$JSFixedArrayTypeInfo} from "dev.latvian.mods.rhino.type.JSFixedArrayTypeInfo"
import {$TypeInfo, $TypeInfo$$Type} from "dev.latvian.mods.rhino.type.TypeInfo"
import {$TypeVariable$$Type} from "java.lang.reflect.TypeVariable"
import {$VariableTypeInfo} from "dev.latvian.mods.rhino.type.VariableTypeInfo"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Type$$Type} from "java.lang.reflect.Type"
import {$ClassTypeInfo} from "dev.latvian.mods.rhino.type.ClassTypeInfo"
import {$Class$$Type} from "java.lang.Class"
import {$RecordTypeInfo$Component} from "dev.latvian.mods.rhino.type.RecordTypeInfo$Component"
import {$RecordTypeInfo$Data} from "dev.latvian.mods.rhino.type.RecordTypeInfo$Data"

export class $RecordTypeInfo extends $ClassTypeInfo implements $TypeWrapperFactory$$Interface<(any)> {
public "wrap"(arg1: any, arg2: $TypeInfo$$Type): any
public "getData"(): $RecordTypeInfo$Data
public "createInstance"(arg1: $Map$$Type<(never), (never)>): any
public "createInstance"(...arg1: (any)[]): any
public "recordComponents"(): $Map<(StringJS), ($RecordTypeInfo$Component)>
public static "setGlobalDefaultValue"<T>(arg0: $Class$$Type<(T)>, arg1: T): void
public "getObjectTypeInfo"(): $JSObjectTypeInfo
public "getArrayTypeInfo"(): $JSFixedArrayTypeInfo
public "createCombinedType"(...arg0: ($TypeInfo$$Type)[]): $TypeInfo
public static "ofArray"(arg0: ($Type$$Type)[]): ($TypeInfo)[]
public static "of"(arg0: $Class$$Type<(never)>): $TypeInfo
public static "of"(arg0: $TypeVariable$$Type<(never)>): $VariableTypeInfo
public static "of"(arg0: $Type$$Type): $TypeInfo
public static "safeOfArray"(arg0: $Supplier$$Type<(($Type$$Type)[])>): ($TypeInfo)[]
public static "safeOf"(arg0: $Supplier$$Type<($Type$$Type)>): $TypeInfo
get "data"(): $RecordTypeInfo$Data
get "objectTypeInfo"(): $JSObjectTypeInfo
get "arrayTypeInfo"(): $JSFixedArrayTypeInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecordTypeInfo$$Type = ($RecordTypeInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecordTypeInfo$$Original = $RecordTypeInfo;}
declare module "dev.latvian.mods.rhino.util.ToStringJS" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ToStringJS$$Interface {
}

export class $ToStringJS implements $ToStringJS$$Interface {
static "toStringJS"(arg1: any): StringJS
 "toStringJS"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToStringJS$$Type = ($ToStringJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ToStringJS$$Original = $ToStringJS;}
declare module "dev.latvian.mods.rhino.Context" {
import {$ContextFactory, $ContextFactory$$Type} from "dev.latvian.mods.rhino.ContextFactory"
import {$Map} from "java.util.Map"
import {$EvaluatorException} from "dev.latvian.mods.rhino.EvaluatorException"
import {$ErrorReporter} from "dev.latvian.mods.rhino.ErrorReporter"
import {$Reader$$Type} from "java.io.Reader"
import {$List} from "java.util.List"
import {$Script} from "dev.latvian.mods.rhino.Script"
import {$TypeInfo$$Type} from "dev.latvian.mods.rhino.type.TypeInfo"
import {$Callable$$Type} from "dev.latvian.mods.rhino.Callable"
import {$CachedClassStorage} from "dev.latvian.mods.rhino.CachedClassStorage"
import {$ScriptableObject, $ScriptableObject$$Type} from "dev.latvian.mods.rhino.ScriptableObject"
import {$Class$$Type} from "java.lang.Class"
import {$ArrayValueProvider} from "dev.latvian.mods.rhino.util.ArrayValueProvider"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$Scriptable, $Scriptable$$Type} from "dev.latvian.mods.rhino.Scriptable"
import {$ClassLoader, $ClassLoader$$Type} from "java.lang.ClassLoader"
import {$ClassVisibilityContext$$Type} from "dev.latvian.mods.rhino.util.ClassVisibilityContext"
import {$RegExp} from "dev.latvian.mods.rhino.regexp.RegExp"
import {$RuntimeException} from "java.lang.RuntimeException"
import {$GeneratedClassLoader} from "dev.latvian.mods.rhino.GeneratedClassLoader"

export class $Context {
static readonly "JSTYPE_JAVA_CLASS": integer
readonly "factory": $ContextFactory
static readonly "JSTYPE_JAVA_ARRAY": integer
static readonly "CONVERSION_TRIVIAL": integer
static readonly "CONVERSION_NONE": integer
 "generateObserverCount": boolean
static readonly "CONVERSION_EXACT": integer
static readonly "JSTYPE_BOOLEAN": integer
static readonly "JSTYPE_UNDEFINED": integer
static readonly "JSTYPE_OBJECT": integer
readonly "lock": any
static readonly "JSTYPE_STRING": integer
static readonly "JSTYPE_NULL": integer
static readonly "JSTYPE_JAVA_OBJECT": integer
static readonly "JSTYPE_NUMBER": integer

constructor(arg0: $ContextFactory$$Type)

public "toString"(arg0: any): StringJS
public "newArray"(arg0: $Scriptable$$Type, arg1: (any)[]): $Scriptable
public "newArray"(arg0: $Scriptable$$Type, arg1: integer): $Scriptable
public "wrap"(arg0: $Scriptable$$Type, arg1: any): any
public "wrap"(arg0: $Scriptable$$Type, arg1: any, arg2: $TypeInfo$$Type): any
public "canConvert"(arg0: any, arg1: $TypeInfo$$Type): boolean
public "getImplementationVersion"(): StringJS
public static "reportError"(arg1: StringJS, arg2: integer, arg3: StringJS, arg4: integer, arg5: StringJS): void
public static "reportError"(arg1: StringJS): void
public "toBoolean"(arg0: any): boolean
public "isStrictMode"(): boolean
public "compileString"(arg0: StringJS, arg1: StringJS, arg2: integer, arg3: any): $Script
public "getErrorReporter"(): $ErrorReporter
public "optionalMapOf"<K, V>(arg0: any, arg1: $TypeInfo$$Type, arg2: $TypeInfo$$Type): $Map<(K), (V)>
public "optionalMapOf"(arg0: any): $Map<(StringJS), (any)>
public "visibleToScripts"(arg0: StringJS, arg1: $ClassVisibilityContext$$Type): boolean
public "wrapAsJavaObject"(arg0: $Scriptable$$Type, arg1: any, arg2: $TypeInfo$$Type): $Scriptable
public "optionalListOf"<K>(arg0: any, arg1: $TypeInfo$$Type): $List<(K)>
public "optionalListOf"(arg0: any): $List<(any)>
public static "getSizeRank"(arg0: $TypeInfo$$Type): integer
public "hasTopCallScope"(): boolean
public "compileReader"(arg0: $Reader$$Type, arg1: StringJS, arg2: integer, arg3: any): $Script
public static "reportRuntimeError"(arg0: StringJS, arg1: $Context$$Type): $EvaluatorException
public static "reportRuntimeError"(arg1: StringJS, arg2: StringJS, arg3: integer, arg4: StringJS, arg5: integer): $EvaluatorException
public static "reportWarning"(arg0: StringJS, arg1: $Context$$Type): void
public static "reportWarning"(arg1: StringJS, arg2: StringJS, arg3: integer, arg4: StringJS, arg5: integer): void
public "setInstructionObserverThreshold"(arg0: integer): void
public "getInstructionObserverThreshold"(): integer
public "getMaximumInterpreterStackDepth"(): integer
public "internalConversionWeightLast"(arg0: any, arg1: $TypeInfo$$Type): integer
public "createClassLoader"(arg0: $ClassLoader$$Type): $GeneratedClassLoader
public "getCachedClassStorage"(arg0: boolean): $CachedClassStorage
public "initStandardObjects"(): $ScriptableObject
public "initStandardObjects"(arg0: $ScriptableObject$$Type): $Scriptable
public "initStandardObjects"(arg0: $ScriptableObject$$Type, arg1: boolean): $ScriptableObject
public static "getSourcePositionFromStack"(arg1: (integer)[]): StringJS
public "internalConversionWeight"(arg0: any, arg1: $TypeInfo$$Type): integer
public static "reportRuntimeError2"(arg0: StringJS, arg1: any, arg2: any, arg3: $Context$$Type): $EvaluatorException
public static "reportRuntimeError0"(arg0: StringJS, arg1: $Context$$Type): $EvaluatorException
public "arrayValueProviderOf"(arg0: any): $ArrayValueProvider
public static "throwAsScriptRuntimeEx"(arg0: $Throwable$$Type, arg1: $Context$$Type): $RuntimeException
public "initSafeStandardObjects"(arg0: $ScriptableObject$$Type, arg1: boolean): $ScriptableObject
public "initSafeStandardObjects"(arg0: $ScriptableObject$$Type): $Scriptable
public "initSafeStandardObjects"(): $ScriptableObject
public "reportConversionError"(arg0: any, arg1: $TypeInfo$$Type): any
public static "reportRuntimeError3"(arg0: StringJS, arg1: any, arg2: any, arg3: any, arg4: $Context$$Type): $EvaluatorException
public "getApplicationClassLoader"(): $ClassLoader
public "setApplicationClassLoader"(arg0: $ClassLoader$$Type): void
public "setGenerateObserverCount"(arg0: boolean): void
public "createInterfaceAdapter"(arg0: $TypeInfo$$Type, arg1: $ScriptableObject$$Type): any
public "getConversionWeight"(arg0: any, arg1: $TypeInfo$$Type): integer
public static "reportRuntimeError1"(arg0: StringJS, arg1: any, arg2: $Context$$Type): $EvaluatorException
public static "reportRuntimeError4"(arg0: StringJS, arg1: any, arg2: any, arg3: any, arg4: any, arg5: $Context$$Type): $EvaluatorException
public "lastStoredScriptable"(): $Scriptable
public "newClassSerialNumber"(): integer
public "defaultObjectToSource"(arg0: $Scriptable$$Type, arg1: $Scriptable$$Type, arg2: (any)[]): StringJS
public "putThreadLocal"(arg0: any, arg1: any): void
public "removeThreadLocal"(arg0: any): void
public "wrapNewObject"(arg0: $Scriptable$$Type, arg1: any, arg2: $TypeInfo$$Type): $Scriptable
public "evaluateReader"(arg0: $Scriptable$$Type, arg1: $Reader$$Type, arg2: StringJS, arg3: integer, arg4: any): any
public "wrapJavaClass"(arg0: $Scriptable$$Type, arg1: $Class$$Type<(never)>): $Scriptable
public "getThreadLocal"(arg0: any): any
public "getTopCallScope"(): $Scriptable
public "getTopCallOrThrow"(): $Scriptable
public "storeScriptable"(arg0: $Scriptable$$Type): void
public "evaluateString"(arg0: $Scriptable$$Type, arg1: StringJS, arg2: StringJS, arg3: integer, arg4: any): any
public static "getUndefinedValue"(): any
public "javaToJS"(arg0: any, arg1: $Scriptable$$Type): any
public "javaToJS"(arg0: any, arg1: $Scriptable$$Type, arg2: $TypeInfo$$Type): any
public "jsToJava"(arg0: any, arg1: $TypeInfo$$Type): any
public "wrapAny"(arg0: $Scriptable$$Type, arg1: any): any
public "setOf"(arg0: any, arg1: $TypeInfo$$Type): any
public "isMapLike"(arg0: any): boolean
public "setTopCall"(arg0: $Scriptable$$Type): void
public "initJSON"(arg0: $ScriptableObject$$Type, arg1: boolean): void
public "isListLike"(arg0: any): boolean
public "mapOf"(arg0: any, arg1: $TypeInfo$$Type, arg2: $TypeInfo$$Type): any
public "classOf"(arg0: any): any
public "callSync"(arg0: $Callable$$Type, arg1: $Scriptable$$Type, arg2: $Scriptable$$Type, arg3: (any)[]): any
public "doTopCall"(arg0: $Scriptable$$Type, arg1: $Callable$$Type, arg2: $Scriptable$$Type, arg3: (any)[], arg4: boolean): any
public "addToScope"(arg0: $Scriptable$$Type, arg1: StringJS, arg2: any): void
public "toNumber"(arg0: any): double
public "toObject"(arg0: any, arg1: $Scriptable$$Type): $Scriptable
public "newObject"(arg0: $Scriptable$$Type, arg1: StringJS): $Scriptable
public "newObject"(arg0: $Scriptable$$Type): $Scriptable
public "newObject"(arg0: $Scriptable$$Type, arg1: StringJS, arg2: (any)[]): $Scriptable
public "getRegExp"(): $RegExp
public "arrayOf"(arg0: any, arg1: $TypeInfo$$Type): any
public "listOf"(arg0: any, arg1: $TypeInfo$$Type): any
get "implementationVersion"(): StringJS
get "strictMode"(): boolean
get "errorReporter"(): $ErrorReporter
set "instructionObserverThreshold"(value: integer)
get "instructionObserverThreshold"(): integer
get "maximumInterpreterStackDepth"(): integer
get "applicationClassLoader"(): $ClassLoader
set "applicationClassLoader"(value: $ClassLoader$$Type)
get "topCallScope"(): $Scriptable
get "topCallOrThrow"(): $Scriptable
get "undefinedValue"(): any
set "topCall"(value: $Scriptable$$Type)
get "regExp"(): $RegExp
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Context$$Type = ($Context);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Context$$Original = $Context;}
declare module "dev.latvian.mods.rhino.IdEnumerationIterator" {
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $IdEnumerationIterator$$Interface {
}

export class $IdEnumerationIterator implements $IdEnumerationIterator$$Interface {
 "enumerationIteratorNext"(arg1: $Consumer$$Type<(any)>): boolean
 "enumerationIteratorHasNext"(arg1: $Consumer$$Type<(any)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IdEnumerationIterator$$Type = ($IdEnumerationIterator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IdEnumerationIterator$$Original = $IdEnumerationIterator;}
declare module "dev.latvian.mods.rhino.util.ClassVisibilityContext" {
import {$Enum} from "java.lang.Enum"

export class $ClassVisibilityContext extends $Enum<($ClassVisibilityContext)> {
static readonly "ARGUMENT": $ClassVisibilityContext
static readonly "EXCEPTION": $ClassVisibilityContext
static readonly "UNKNOWN": $ClassVisibilityContext
static readonly "CLASS_IN_PACKAGE": $ClassVisibilityContext
static readonly "MEMBER": $ClassVisibilityContext

public static "values"(): ($ClassVisibilityContext)[]
public static "valueOf"(arg0: StringJS): $ClassVisibilityContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClassVisibilityContext$$Type = (("unknown") | ("member") | ("class_in_package") | ("argument") | ("exception"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClassVisibilityContext$$Original = $ClassVisibilityContext;}
declare module "dev.latvian.mods.rhino.Symbol" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Symbol$$Interface {
}

export class $Symbol implements $Symbol$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Symbol$$Type = ($Symbol);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Symbol$$Original = $Symbol;}
declare module "dev.latvian.mods.rhino.IdFunctionObject" {
import {$Context$$Type} from "dev.latvian.mods.rhino.Context"
import {$BaseFunction} from "dev.latvian.mods.rhino.BaseFunction"
import {$DefaultValueTypeHint$$Type} from "dev.latvian.mods.rhino.util.DefaultValueTypeHint"
import {$Scriptable, $Scriptable$$Type} from "dev.latvian.mods.rhino.Scriptable"
import {$RuntimeException} from "java.lang.RuntimeException"
import {$IdFunctionCall$$Type} from "dev.latvian.mods.rhino.IdFunctionCall"

export class $IdFunctionObject extends $BaseFunction {
static readonly "DONTENUM": integer
static readonly "CONST": integer
static readonly "UNINITIALIZED_CONST": integer
static readonly "EMPTY": integer
static readonly "READONLY": integer
static readonly "PERMANENT": integer

constructor(arg0: $IdFunctionCall$$Type, arg1: any, arg2: integer, arg3: StringJS, arg4: integer, arg5: $Scriptable$$Type)
constructor(arg0: $IdFunctionCall$$Type, arg1: any, arg2: integer, arg3: integer)

public "getLength"(): integer
public "call"(arg1: $Scriptable$$Type, arg2: $Scriptable$$Type, arg3: (any)[]): any
public "createObject"(arg1: $Scriptable$$Type): $Scriptable
public "getTag"(): any
public "unknown"(): $RuntimeException
public "getArity"(): integer
public "addAsProperty"(arg0: $Scriptable$$Type, arg1: $Context$$Type): void
public "getPrototype"(): $Scriptable
public "hasTag"(arg0: any): boolean
public "getFunctionName"(): StringJS
public "methodId"(): integer
public "exportAsScopeProperty"(): void
public "initFunction"(arg0: StringJS, arg1: $Scriptable$$Type): void
public "markAsConstructor"(arg0: $Scriptable$$Type): void
public "get"(arg1: integer, arg2: $Scriptable$$Type): any
public "put"(arg1: integer, arg2: $Scriptable$$Type, arg3: any): void
public "delete"(arg1: integer): void
public "getDefaultValue"(arg1: $DefaultValueTypeHint$$Type): any
public "has"(arg1: integer, arg2: $Scriptable$$Type): boolean
public "setParentScope"(arg0: $Scriptable$$Type): void
public "getParentScope"(): $Scriptable
public "getAllIds"(): (any)[]
public "setPrototype"(arg0: $Scriptable$$Type): void
public "getIds"(): (any)[]
get "length"(): integer
get "tag"(): any
get "arity"(): integer
get "prototype"(): $Scriptable
get "functionName"(): StringJS
set "parentScope"(value: $Scriptable$$Type)
get "parentScope"(): $Scriptable
get "allIds"(): (any)[]
set "prototype"(value: $Scriptable$$Type)
get "ids"(): (any)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IdFunctionObject$$Type = ($IdFunctionObject);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IdFunctionObject$$Original = $IdFunctionObject;}
declare module "dev.latvian.mods.rhino.regexp.RegExp" {
import {$Scriptable, $Scriptable$$Type} from "dev.latvian.mods.rhino.Scriptable"

export class $RegExp {
static readonly "RA_MATCH": integer
static readonly "RA_REPLACE": integer
static readonly "RA_SEARCH": integer

constructor()

public "action"(arg1: $Scriptable$$Type, arg2: $Scriptable$$Type, arg3: (any)[], arg4: integer): any
public "find_split"(arg1: $Scriptable$$Type, arg2: StringJS, arg3: StringJS, arg4: $Scriptable$$Type, arg5: (integer)[], arg6: (integer)[], arg7: (boolean)[], arg8: ((StringJS)[])[]): integer
public "js_split"(arg1: $Scriptable$$Type, arg2: StringJS, arg3: (any)[]): any
public "compileRegExp"(arg1: StringJS, arg2: StringJS): any
public "wrapRegExp"(arg1: $Scriptable$$Type, arg2: any): $Scriptable
public "isRegExp"(arg0: $Scriptable$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegExp$$Type = ($RegExp);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegExp$$Original = $RegExp;}
declare module "dev.latvian.mods.rhino.util.wrap.DirectTypeWrapperFactory" {
import {$TypeInfo$$Type} from "dev.latvian.mods.rhino.type.TypeInfo"
import {$TypeWrapperFactory$$Interface} from "dev.latvian.mods.rhino.util.wrap.TypeWrapperFactory"

export interface $DirectTypeWrapperFactory$$Interface<T> extends $TypeWrapperFactory$$Interface<(T)> {

(arg0: any): T
}

export class $DirectTypeWrapperFactory<T> implements $DirectTypeWrapperFactory$$Interface {
 "wrap"(arg0: any): T
 "wrap"(arg1: any, arg2: $TypeInfo$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DirectTypeWrapperFactory$$Type<T> = ((arg0: any) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DirectTypeWrapperFactory$$Original<T> = $DirectTypeWrapperFactory<(T)>;}
declare module "dev.latvian.mods.rhino.CachedConstructorInfo" {
import {$CachedClassInfo, $CachedClassInfo$$Type} from "dev.latvian.mods.rhino.CachedClassInfo"
import {$CachedExecutableInfo} from "dev.latvian.mods.rhino.CachedExecutableInfo"
import {$Constructor, $Constructor$$Type} from "java.lang.reflect.Constructor"
import {$Scriptable$$Type} from "dev.latvian.mods.rhino.Scriptable"

export class $CachedConstructorInfo extends $CachedExecutableInfo {
readonly "originalName": StringJS
readonly "parent": $CachedClassInfo
readonly "isStatic": boolean
readonly "isFinal": boolean
readonly "modifiers": integer
readonly "isNative": boolean

constructor(arg0: $CachedClassInfo$$Type, arg1: $Constructor$$Type<(never)>)

public "invoke"(arg1: $Scriptable$$Type, arg2: any, ...arg3: (any)[]): any
public "getCached"(): $Constructor<(never)>
get "cached"(): $Constructor<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CachedConstructorInfo$$Type = ($CachedConstructorInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CachedConstructorInfo$$Original = $CachedConstructorInfo;}
declare module "dev.latvian.mods.rhino.type.JSOptionalParam" {
import {$TypeInfo, $TypeInfo$$Type} from "dev.latvian.mods.rhino.type.TypeInfo"
import {$StringBuilder$$Type} from "java.lang.StringBuilder"
import {$TypeStringContext$$Type} from "dev.latvian.mods.rhino.type.TypeStringContext"
import {$Record} from "java.lang.Record"

export class $JSOptionalParam extends $Record {
constructor(arg0: StringJS, arg1: $TypeInfo$$Type)
constructor(name: StringJS, type: $TypeInfo$$Type, optional: boolean)

public "name"(): StringJS
public "type"(): $TypeInfo
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "append"(arg0: $TypeStringContext$$Type, arg1: $StringBuilder$$Type): void
public "hashCode"(): integer
public "optional"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSOptionalParam$$Type = ({"type"?: $TypeInfo$$Type, "optional"?: boolean, "name"?: StringJS}) | ([type?: $TypeInfo$$Type, optional?: boolean, name?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JSOptionalParam$$Original = $JSOptionalParam;}
declare module "dev.latvian.mods.rhino.type.VariableTypeInfo" {
import {$TypeInfo, $TypeInfo$$Type} from "dev.latvian.mods.rhino.type.TypeInfo"
import {$TypeVariable$$Type} from "java.lang.reflect.TypeVariable"
import {$Map$$Type} from "java.util.Map"
import {$TypeInfoBase} from "dev.latvian.mods.rhino.type.TypeInfoBase"
import {$Type$$Type} from "java.lang.reflect.Type"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Class, $Class$$Type} from "java.lang.Class"

export class $VariableTypeInfo extends $TypeInfoBase {
public "getName"(): StringJS
public "toString"(): StringJS
public "getBounds"(): ($TypeInfo)[]
public "consolidate"(arg0: $Map$$Type<($VariableTypeInfo$$Type), ($TypeInfo$$Type)>): $TypeInfo
public "shouldConvert"(): boolean
public "asClass"(): $Class<(never)>
public "getMainBound"(): $TypeInfo
public static "ofArray"(arg0: ($Type$$Type)[]): ($TypeInfo)[]
public static "of"(arg0: $Class$$Type<(never)>): $TypeInfo
public static "of"(arg0: $TypeVariable$$Type<(never)>): $VariableTypeInfo
public static "of"(arg0: $Type$$Type): $TypeInfo
public static "safeOfArray"(arg0: $Supplier$$Type<(($Type$$Type)[])>): ($TypeInfo)[]
public static "safeOf"(arg0: $Supplier$$Type<($Type$$Type)>): $TypeInfo
get "name"(): StringJS
get "bounds"(): ($TypeInfo)[]
get "mainBound"(): $TypeInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VariableTypeInfo$$Type = ($VariableTypeInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VariableTypeInfo$$Original = $VariableTypeInfo;}
declare module "dev.latvian.mods.rhino.type.TypeInfoBase" {
import {$Collection$$Type} from "java.util.Collection"
import {$StringBuilder$$Type} from "java.lang.StringBuilder"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List} from "java.util.List"
import {$TypeStringContext$$Type} from "dev.latvian.mods.rhino.type.TypeStringContext"
import {$TypeInfo, $TypeInfo$$Type, $TypeInfo$$Interface} from "dev.latvian.mods.rhino.type.TypeInfo"
import {$TypeVariable$$Type} from "java.lang.reflect.TypeVariable"
import {$VariableTypeInfo, $VariableTypeInfo$$Type} from "dev.latvian.mods.rhino.type.VariableTypeInfo"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Type$$Type} from "java.lang.reflect.Type"
import {$Set} from "java.util.Set"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$RecordTypeInfo$Component} from "dev.latvian.mods.rhino.type.RecordTypeInfo$Component"

export class $TypeInfoBase implements $TypeInfo$$Interface {
constructor()

public "newArray"(arg0: integer): any
public "asArray"(): $TypeInfo
public static "ofArray"(arg0: ($Type$$Type)[]): ($TypeInfo)[]
public "signature"(): StringJS
public "append"(arg0: $TypeStringContext$$Type, arg1: $StringBuilder$$Type): void
public "isPrimitive"(): boolean
public "componentType"(): $TypeInfo
public static "of"(arg0: $Class$$Type<(never)>): $TypeInfo
public static "of"(arg0: $TypeVariable$$Type<(never)>): $VariableTypeInfo
public static "of"(arg0: $Type$$Type): $TypeInfo
public "enumConstants"(): $List<(any)>
public "param"(arg0: integer): $TypeInfo
public "isVoid"(): boolean
public "is"(arg0: $TypeInfo$$Type): boolean
public "or"(arg0: $TypeInfo$$Type): $TypeInfo
public "isCharacter"(): boolean
public "isFloat"(): boolean
public static "safeOfArray"(arg0: $Supplier$$Type<(($Type$$Type)[])>): ($TypeInfo)[]
public "createDefaultValue"(): any
public "consolidate"(arg0: $Map$$Type<($VariableTypeInfo$$Type), ($TypeInfo$$Type)>): $TypeInfo
public "shouldConvert"(): boolean
public "getContainedComponentClasses"(): $Set<($Class<(never)>)>
public "collectContainedComponentClasses"(arg0: $Collection$$Type<($Class$$Type<(never)>)>): void
public "isLong"(): boolean
public "recordComponents"(): $Map<(StringJS), ($RecordTypeInfo$Component)>
public "isFunctionalInterface"(): boolean
public "isDouble"(): boolean
public "asClass"(): $Class<(never)>
public static "safeOf"(arg0: $Supplier$$Type<($Type$$Type)>): $TypeInfo
public "isByte"(): boolean
public "isInt"(): boolean
public "isBoolean"(): boolean
public "isShort"(): boolean
public "withParams"(...arg0: ($TypeInfo$$Type)[]): $TypeInfo
get "primitive"(): boolean
get "void"(): boolean
get "character"(): boolean
get "float"(): boolean
get "containedComponentClasses"(): $Set<($Class<(never)>)>
get "long"(): boolean
get "functionalInterface"(): boolean
get "double"(): boolean
get "byte"(): boolean
get "int"(): boolean
get "boolean"(): boolean
get "short"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeInfoBase$$Type = ($TypeInfoBase);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TypeInfoBase$$Original = $TypeInfoBase;}
declare module "dev.latvian.mods.rhino.MemberType" {
import {$Context$$Type} from "dev.latvian.mods.rhino.Context"
import {$Enum} from "java.lang.Enum"

export class $MemberType extends $Enum<($MemberType)> {
static readonly "NUMBER": $MemberType
static readonly "SYMBOL": $MemberType
static readonly "UNDEFINED": $MemberType
static readonly "STRING": $MemberType
static readonly "OBJECT": $MemberType
static readonly "FUNCTION": $MemberType
static readonly "BOOLEAN": $MemberType

public static "get"(arg0: any, arg1: $Context$$Type): $MemberType
public "toString"(): StringJS
public static "values"(): ($MemberType)[]
public static "valueOf"(arg0: StringJS): $MemberType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MemberType$$Type = (("undefined") | ("object") | ("function") | ("symbol") | ("string") | ("number") | ("boolean"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MemberType$$Original = $MemberType;}
declare module "dev.latvian.mods.rhino.ExternalArrayData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ExternalArrayData$$Interface {
get "arrayLength"(): integer
}

export class $ExternalArrayData implements $ExternalArrayData$$Interface {
 "getArrayElement"(arg0: integer): any
 "setArrayElement"(arg0: integer, arg1: any): void
 "getArrayLength"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExternalArrayData$$Type = ($ExternalArrayData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExternalArrayData$$Original = $ExternalArrayData;}
declare module "dev.latvian.mods.rhino.CachedParameters" {
import {$TypeInfo, $TypeInfo$$Type} from "dev.latvian.mods.rhino.type.TypeInfo"
import {$List, $List$$Type} from "java.util.List"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Record} from "java.lang.Record"

export class $CachedParameters extends $Record {
static readonly "EMPTY": $CachedParameters
static readonly "EMPTY_FIRST_CX": $CachedParameters

constructor(count: integer, types: $List$$Type<($Class$$Type<(never)>)>, typeInfos: $List$$Type<($TypeInfo$$Type)>, firstArgContext: boolean, varArgType: $TypeInfo$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "count"(): integer
public "types"(): $List<($Class<(never)>)>
public "typesMatch"(arg0: ($Class$$Type<(never)>)[]): boolean
public "isVarArg"(): boolean
public "varArgType"(): $TypeInfo
public "typeInfos"(): $List<($TypeInfo)>
public "firstArgContext"(): boolean
get "varArg"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CachedParameters$$Type = ({"count"?: integer, "firstArgContext"?: boolean, "typeInfos"?: $List$$Type<($TypeInfo$$Type)>, "varArgType"?: $TypeInfo$$Type, "types"?: $List$$Type<($Class$$Type<(never)>)>}) | ([count?: integer, firstArgContext?: boolean, typeInfos?: $List$$Type<($TypeInfo$$Type)>, varArgType?: $TypeInfo$$Type, types?: $List$$Type<($Class$$Type<(never)>)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CachedParameters$$Original = $CachedParameters;}
declare module "dev.latvian.mods.rhino.ScriptableObject" {
import {$MemberType} from "dev.latvian.mods.rhino.MemberType"
import {$Symbol$$Type} from "dev.latvian.mods.rhino.Symbol"
import {$SymbolScriptable$$Interface} from "dev.latvian.mods.rhino.SymbolScriptable"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ExternalArrayData, $ExternalArrayData$$Type} from "dev.latvian.mods.rhino.ExternalArrayData"
import {$Callable$$Type} from "dev.latvian.mods.rhino.Callable"
import {$Context$$Type} from "dev.latvian.mods.rhino.Context"
import {$WrappedExecutable$$Type} from "dev.latvian.mods.rhino.WrappedExecutable"
import {$DefaultValueTypeHint$$Type} from "dev.latvian.mods.rhino.util.DefaultValueTypeHint"
import {$Class$$Type} from "java.lang.Class"
import {$Scriptable, $Scriptable$$Type, $Scriptable$$Interface} from "dev.latvian.mods.rhino.Scriptable"
import {$ConstProperties$$Interface} from "dev.latvian.mods.rhino.ConstProperties"

export class $ScriptableObject implements $Scriptable$$Interface, $SymbolScriptable$$Interface, $ConstProperties$$Interface {
static readonly "DONTENUM": integer
static readonly "CONST": integer
static readonly "UNINITIALIZED_CONST": integer
static readonly "EMPTY": integer
static readonly "READONLY": integer
static readonly "PERMANENT": integer

constructor()
constructor(arg0: $Scriptable$$Type, arg1: $Scriptable$$Type)

public "setAttributes"(arg1: integer, arg2: integer): void
public "setAttributes"(arg1: $Symbol$$Type, arg2: integer): void
public "setAttributes"(arg1: StringJS, arg2: integer): void
public "size"(): integer
public "get"(arg1: integer, arg2: $Scriptable$$Type): any
public "get"(arg1: $Symbol$$Type, arg2: $Scriptable$$Type): any
public "get"(arg1: StringJS, arg2: $Scriptable$$Type): any
public "get"(arg1: any): any
public "put"(arg1: StringJS, arg2: $Scriptable$$Type, arg3: any): void
public "put"(arg1: integer, arg2: $Scriptable$$Type, arg3: any): void
public "put"(arg1: $Symbol$$Type, arg2: $Scriptable$$Type, arg3: any): void
public static "getProperty"(arg0: $Scriptable$$Type, arg1: StringJS, arg2: $Context$$Type): any
public static "getProperty"(arg0: $Scriptable$$Type, arg1: $Symbol$$Type, arg2: $Context$$Type): any
public static "getProperty"(arg0: $Scriptable$$Type, arg1: integer, arg2: $Context$$Type): any
public "isEmpty"(): boolean
public "isSealed"(): boolean
public "delete"(arg1: $Symbol$$Type): void
public "delete"(arg1: integer): void
public "delete"(arg1: StringJS): void
public static "getDefaultValue"(arg0: $Scriptable$$Type, arg1: $DefaultValueTypeHint$$Type, arg2: $Context$$Type): any
public "getDefaultValue"(arg1: $DefaultValueTypeHint$$Type): any
public "getClassName"(): StringJS
public "getAttributes"(arg1: $Symbol$$Type): integer
public "getAttributes"(arg1: StringJS): integer
public "getAttributes"(arg1: integer): integer
public "has"(arg1: integer, arg2: $Scriptable$$Type): boolean
public "has"(arg1: $Symbol$$Type, arg2: $Scriptable$$Type): boolean
public "has"(arg1: StringJS, arg2: $Scriptable$$Type): boolean
public static "getGeneratorFunctionPrototype"(arg0: $Scriptable$$Type, arg1: $Context$$Type): $Scriptable
public "putConst"(arg1: StringJS, arg2: $Scriptable$$Type, arg3: any): void
public "sealObject"(): void
public "setParentScope"(arg0: $Scriptable$$Type): void
public "getParentScope"(): $Scriptable
public static "putProperty"(arg0: $Scriptable$$Type, arg1: StringJS, arg2: any, arg3: $Context$$Type): void
public static "putProperty"(arg0: $Scriptable$$Type, arg1: integer, arg2: any, arg3: $Context$$Type): void
public static "putProperty"(arg0: $Scriptable$$Type, arg1: $Symbol$$Type, arg2: any, arg3: $Context$$Type): void
public "associateValue"(arg0: any, arg1: any): any
public static "getTopLevelScope"(arg0: $Scriptable$$Type): $Scriptable
public "getAssociatedValue"(arg0: any): any
public "defineProperty"(arg1: StringJS, arg2: any, arg3: $WrappedExecutable$$Type, arg4: $WrappedExecutable$$Type, arg5: integer): void
public "defineProperty"(arg1: StringJS, arg2: any, arg3: integer): void
public static "defineProperty"(arg0: $Scriptable$$Type, arg1: StringJS, arg2: any, arg3: integer, arg4: $Context$$Type): void
public "defineProperty"(arg1: StringJS, arg2: $Class$$Type<(never)>, arg3: integer): void
public "defineProperty"(arg1: $Symbol$$Type, arg2: any, arg3: integer): void
public "getTypeOf"(): $MemberType
public "getAllIds"(): (any)[]
public static "getTopScopeValue"(arg0: $Scriptable$$Type, arg1: any, arg2: $Context$$Type): any
public "setGetterOrSetter"(arg1: StringJS, arg2: integer, arg3: $Callable$$Type, arg4: boolean): void
public "getGetterOrSetter"(arg0: StringJS, arg1: integer, arg2: boolean): any
public "defineConst"(arg1: StringJS, arg2: $Scriptable$$Type): void
public static "redefineProperty"(arg0: $Scriptable$$Type, arg1: StringJS, arg2: boolean, arg3: $Context$$Type): void
public static "getPropertyIds"(arg1: $Scriptable$$Type): (any)[]
public static "getClassPrototype"(arg0: $Scriptable$$Type, arg1: StringJS, arg2: $Context$$Type): $Scriptable
public static "putConstProperty"(arg0: $Scriptable$$Type, arg1: StringJS, arg2: any, arg3: $Context$$Type): void
public "isConst"(arg0: StringJS): boolean
public static "getFunctionPrototype"(arg0: $Scriptable$$Type, arg1: $Context$$Type): $Scriptable
public static "hasProperty"(arg0: $Scriptable$$Type, arg1: $Symbol$$Type, arg2: $Context$$Type): boolean
public static "hasProperty"(arg0: $Scriptable$$Type, arg1: integer, arg2: $Context$$Type): boolean
public static "hasProperty"(arg0: $Scriptable$$Type, arg1: StringJS, arg2: $Context$$Type): boolean
public "defineOwnProperty"(arg1: any, arg2: $ScriptableObject$$Type): void
public "preventExtensions"(): void
public "isExtensible"(): boolean
public static "deleteProperty"(arg0: $Scriptable$$Type, arg1: StringJS, arg2: $Context$$Type): boolean
public static "deleteProperty"(arg0: $Scriptable$$Type, arg1: integer, arg2: $Context$$Type): boolean
public static "getObjectPrototype"(arg0: $Scriptable$$Type, arg1: $Context$$Type): $Scriptable
public "hasInstance"(arg1: $Scriptable$$Type): boolean
public "getPrototype"(): $Scriptable
public static "getArrayPrototype"(arg0: $Scriptable$$Type, arg1: $Context$$Type): $Scriptable
public "setPrototype"(arg0: $Scriptable$$Type): void
public "getIds"(): (any)[]
public "setExternalArrayData"(arg1: $ExternalArrayData$$Type): void
public "getExternalArrayLength"(): any
public static "defineConstProperty"(arg0: $Scriptable$$Type, arg1: StringJS, arg2: $Context$$Type): void
public "avoidObjectDetection"(): boolean
public "getExternalArrayData"(): $ExternalArrayData
public "defineOwnProperties"(arg1: $ScriptableObject$$Type): void
public "defineFunctionProperties"(arg1: (StringJS)[], arg2: $Class$$Type<(never)>, arg3: integer): void
public "enumerationIteratorNext"(arg1: $Consumer$$Type<(any)>): boolean
public "enumerationIteratorHasNext"(arg1: $Consumer$$Type<(any)>): boolean
get "empty"(): boolean
get "sealed"(): boolean
get "className"(): StringJS
set "parentScope"(value: $Scriptable$$Type)
get "parentScope"(): $Scriptable
get "typeOf"(): $MemberType
get "allIds"(): (any)[]
get "extensible"(): boolean
get "prototype"(): $Scriptable
set "prototype"(value: $Scriptable$$Type)
get "ids"(): (any)[]
set "externalArrayData"(value: $ExternalArrayData$$Type)
get "externalArrayLength"(): any
get "externalArrayData"(): $ExternalArrayData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScriptableObject$$Type = ($ScriptableObject);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScriptableObject$$Original = $ScriptableObject;}
declare module "dev.latvian.mods.rhino.ScriptStackElement" {
import {$StringBuilder$$Type} from "java.lang.StringBuilder"

export class $ScriptStackElement {
readonly "fileName": StringJS
readonly "functionName": StringJS
readonly "lineNumber": integer

constructor(arg0: StringJS, arg1: StringJS, arg2: integer)

public "toString"(): StringJS
public "renderJavaStyle"(arg0: $StringBuilder$$Type): void
public "renderMozillaStyle"(arg0: $StringBuilder$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScriptStackElement$$Type = ($ScriptStackElement);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScriptStackElement$$Original = $ScriptStackElement;}
declare module "dev.latvian.mods.rhino.util.wrap.TypeWrappers" {
import {$TypeInfo$$Type} from "dev.latvian.mods.rhino.type.TypeInfo"
import {$TypeWrapperValidator$$Type} from "dev.latvian.mods.rhino.util.wrap.TypeWrapperValidator"
import {$Map} from "java.util.Map"
import {$TypeWrapperFactory, $TypeWrapperFactory$$Type} from "dev.latvian.mods.rhino.util.wrap.TypeWrapperFactory"
import {$TypeWrapper} from "dev.latvian.mods.rhino.util.wrap.TypeWrapper"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$DirectTypeWrapperFactory$$Type} from "dev.latvian.mods.rhino.util.wrap.DirectTypeWrapperFactory"

export class $TypeWrappers {
readonly "wrappers": $Map<($Class<(never)>), ($TypeWrapper<(never)>)>

constructor()

public "register"<T>(arg0: $Class$$Type<(T)>, arg1: $TypeWrapperFactory$$Type<(T)>): void
public "register"<T>(arg0: $Class$$Type<(T)>, arg1: $TypeWrapperValidator$$Type, arg2: $TypeWrapperFactory$$Type<(T)>): void
public "getWrapperFactory"(arg0: any, arg1: $TypeInfo$$Type): $TypeWrapperFactory<(never)>
public "hasWrapper"(arg0: any, arg1: $TypeInfo$$Type): boolean
public "registerDirect"<T>(arg0: $Class$$Type<(T)>, arg1: $DirectTypeWrapperFactory$$Type<(T)>): void
public "registerDirect"<T>(arg0: $Class$$Type<(T)>, arg1: $TypeWrapperValidator$$Type, arg2: $DirectTypeWrapperFactory$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeWrappers$$Type = ($TypeWrappers);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TypeWrappers$$Original = $TypeWrappers;}
