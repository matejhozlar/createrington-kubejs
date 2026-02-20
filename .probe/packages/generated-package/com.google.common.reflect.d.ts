declare module "com.google.common.reflect.TypeParameter" {
import {$TypeCapture} from "com.google.common.reflect.TypeCapture"

export class $TypeParameter<T> extends $TypeCapture<(T)> {
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeParameter$$Type<T> = ($TypeParameter<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TypeParameter$$Original<T> = $TypeParameter<(T)>;}
declare module "com.google.common.reflect.TypeCapture" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $TypeCapture<T> {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeCapture$$Type<T> = ($TypeCapture<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TypeCapture$$Original<T> = $TypeCapture<(T)>;}
declare module "com.google.common.reflect.TypeToken$TypeSet" {
import {$Iterator} from "java.util.Iterator"
import {$ForwardingSet} from "com.google.common.collect.ForwardingSet"
import {$Collection$$Type} from "java.util.Collection"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Set} from "java.util.Set"
import {$Class} from "java.lang.Class"
import {$TypeToken} from "com.google.common.reflect.TypeToken"

export class $TypeToken$TypeSet extends $ForwardingSet<($TypeToken<(T)>)> implements $Serializable$$Interface {
public "interfaces"(): $TypeToken$TypeSet
public "classes"(): $TypeToken$TypeSet
public "rawTypes"(): $Set<($Class<(T)>)>
public "remove"(arg0: any): boolean
public "size"(): integer
public static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $Set<(E)>
public "clear"(): void
public "isEmpty"(): boolean
public "add"(arg0: E): boolean
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public "iterator"(): $Iterator<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $Set<(E)>
public static "of"<E>(): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $Set<(E)>
public static "of"<E>(...arg0: (E)[]): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $Set<(E)>
public static "of"<E>(arg0: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E): $Set<(E)>
public "contains"(arg0: any): boolean
public "addAll"(arg0: $Collection$$Type<(E)>): boolean
public "removeAll"(arg0: $Collection$$Type<(never)>): boolean
public "retainAll"(arg0: $Collection$$Type<(never)>): boolean
public "containsAll"(arg0: $Collection$$Type<(never)>): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeToken$TypeSet$$Type = ($TypeToken$TypeSet);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TypeToken$TypeSet$$Original = $TypeToken$TypeSet;}
declare module "com.google.common.reflect.Invokable" {
import {$ImmutableList} from "com.google.common.collect.ImmutableList"
import {$Method$$Type} from "java.lang.reflect.Method"
import {$AccessFlag} from "java.lang.reflect.AccessFlag"
import {$TypeToken, $TypeToken$$Type} from "com.google.common.reflect.TypeToken"
import {$Member$$Interface} from "java.lang.reflect.Member"
import {$TypeVariable} from "java.lang.reflect.TypeVariable"
import {$AnnotatedElement$$Interface} from "java.lang.reflect.AnnotatedElement"
import {$Annotation, $Annotation$$Type} from "java.lang.annotation.Annotation"
import {$AnnotatedType} from "java.lang.reflect.AnnotatedType"
import {$Set} from "java.util.Set"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Constructor$$Type} from "java.lang.reflect.Constructor"
import {$Throwable} from "java.lang.Throwable"
import {$Parameter} from "com.google.common.reflect.Parameter"

export class $Invokable<T, R> implements $AnnotatedElement$$Interface, $Member$$Interface {
public "isOverridable"(): boolean
public "isPackagePrivate"(): boolean
public "invoke"(receiver: T, ...args: (any)[]): R
public "getName"(): StringJS
public "equals"(obj: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getModifiers"(): integer
public static "from"<T>(arg0: $Constructor$$Type<(T)>): $Invokable<(T), (T)>
public static "from"(method: $Method$$Type): $Invokable<(never), (any)>
public "getTypeParameters"(): ($TypeVariable<(never)>)[]
public "getReturnType"(): $TypeToken<(R)>
public "isSynthetic"(): boolean
public "isFinal"(): boolean
public "isStatic"(): boolean
public "isAnnotationPresent"(annotationClass: $Class$$Type<($Annotation$$Type)>): boolean
public "getDeclaringClass"(): $Class<(T)>
public "getAnnotation"<A extends $Annotation>(annotationClass: $Class$$Type<(A)>): A
public "getAnnotations"(): ($Annotation)[]
public "getDeclaredAnnotations"(): ($Annotation)[]
public "isPublic"(): boolean
public "setAccessible"(flag: boolean): void
public "isProtected"(): boolean
public "trySetAccessible"(): boolean
public "isAccessible"(): boolean
public "isVarArgs"(): boolean
public "getExceptionTypes"(): $ImmutableList<($TypeToken<($Throwable)>)>
public "getAnnotatedReturnType"(): $AnnotatedType
public "getParameters"(): $ImmutableList<($Parameter)>
public "isAbstract"(): boolean
public "isPrivate"(): boolean
public "isNative"(): boolean
public "isSynchronized"(): boolean
public "getOwnerType"(): $TypeToken<(T)>
public "returning"<R1>(returnType: $TypeToken$$Type<(R1)>): $Invokable<(T), (R1)>
public "returning"<R1>(returnType: $Class$$Type<(R1)>): $Invokable<(T), (R1)>
public "getAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
public "getDeclaredAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
public "getDeclaredAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
public "accessFlags"(): $Set<($AccessFlag)>
get "overridable"(): boolean
get "packagePrivate"(): boolean
get "name"(): StringJS
get "modifiers"(): integer
get "typeParameters"(): ($TypeVariable<(never)>)[]
get "returnType"(): $TypeToken<(R)>
get "synthetic"(): boolean
get "final"(): boolean
get "static"(): boolean
get "declaringClass"(): $Class<(T)>
get "annotations"(): ($Annotation)[]
get "declaredAnnotations"(): ($Annotation)[]
get "public"(): boolean
set "accessible"(value: boolean)
get "protected"(): boolean
get "accessible"(): boolean
get "varArgs"(): boolean
get "exceptionTypes"(): $ImmutableList<($TypeToken<($Throwable)>)>
get "annotatedReturnType"(): $AnnotatedType
get "parameters"(): $ImmutableList<($Parameter)>
get "abstract"(): boolean
get "private"(): boolean
get "native"(): boolean
get "synchronized"(): boolean
get "ownerType"(): $TypeToken<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Invokable$$Type<T, R> = ($Invokable<(T), (R)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Invokable$$Original<T, R> = $Invokable<(T), (R)>;}
declare module "com.google.common.reflect.TypeToken" {
import {$TypeCapture} from "com.google.common.reflect.TypeCapture"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Type, $Type$$Type} from "java.lang.reflect.Type"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Constructor$$Type} from "java.lang.reflect.Constructor"
import {$TypeParameter$$Type} from "com.google.common.reflect.TypeParameter"
import {$Invokable} from "com.google.common.reflect.Invokable"
import {$TypeToken$TypeSet} from "com.google.common.reflect.TypeToken$TypeSet"
import {$Method$$Type} from "java.lang.reflect.Method"

export class $TypeToken<T> extends $TypeCapture<(T)> implements $Serializable$$Interface {
public "isSubtypeOf"(type: $TypeToken$$Type<(never)>): boolean
public "isSubtypeOf"(supertype: $Type$$Type): boolean
public "resolveType"(type: $Type$$Type): $TypeToken<(never)>
public "equals"(o: any): boolean
public "toString"(): StringJS
public "method"(method: $Method$$Type): $Invokable<(T), (any)>
public "hashCode"(): integer
public "isArray"(): boolean
public "isPrimitive"(): boolean
public "wrap"(): $TypeToken<(T)>
public static "of"<T>(type: $Class$$Type<(T)>): $TypeToken<(T)>
public static "of"(type: $Type$$Type): $TypeToken<(never)>
public "getComponentType"(): $TypeToken<(never)>
public "constructor"(arg0: $Constructor$$Type<(never)>): $Invokable<(T), (T)>
public "getType"(): $Type
public "unwrap"(): $TypeToken<(T)>
public "getRawType"(): $Class<(T)>
public "where"<X>(typeParam: $TypeParameter$$Type<(X)>, typeArg: $TypeToken$$Type<(X)>): $TypeToken<(T)>
public "where"<X>(typeParam: $TypeParameter$$Type<(X)>, typeArg: $Class$$Type<(X)>): $TypeToken<(T)>
public "getSubtype"(subclass: $Class$$Type<(never)>): $TypeToken<(T)>
public "getSupertype"(superclass: $Class$$Type<(T)>): $TypeToken<(T)>
public "getTypes"(): $TypeToken$TypeSet
public "isSupertypeOf"(type: $TypeToken$$Type<(never)>): boolean
public "isSupertypeOf"(type: $Type$$Type): boolean
get "array"(): boolean
get "primitive"(): boolean
get "componentType"(): $TypeToken<(never)>
get "type"(): $Type
get "rawType"(): $Class<(T)>
get "types"(): $TypeToken$TypeSet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeToken$$Type<T> = ($TypeToken<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TypeToken$$Original<T> = $TypeToken<(T)>;}
