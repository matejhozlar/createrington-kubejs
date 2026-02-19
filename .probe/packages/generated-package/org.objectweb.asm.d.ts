declare module "org.objectweb.asm.Type" {
import {$Class$$Type} from "java.lang.Class"
import {$Constructor$$Type} from "java.lang.reflect.Constructor"
import {$Method$$Type} from "java.lang.reflect.Method"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Type {
static readonly "CHAR_TYPE": $Type
static readonly "FLOAT": integer
static readonly "DOUBLE_TYPE": $Type
static readonly "ARRAY": integer
static readonly "LONG_TYPE": $Type
static readonly "BYTE_TYPE": $Type
static readonly "CHAR": integer
static readonly "VOID_TYPE": $Type
static readonly "OBJECT": integer
static readonly "BOOLEAN_TYPE": $Type
static readonly "FLOAT_TYPE": $Type
static readonly "BOOLEAN": integer
static readonly "INT": integer
static readonly "SHORT": integer
static readonly "BYTE": integer
static readonly "METHOD": integer
static readonly "SHORT_TYPE": $Type
static readonly "DOUBLE": integer
static readonly "VOID": integer
static readonly "LONG": integer
static readonly "INT_TYPE": $Type

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "getDescriptor"(arg0: $Class$$Type<(never)>): StringJS
public "getDescriptor"(): StringJS
public static "getReturnType"(arg0: StringJS): $Type
public static "getReturnType"(arg0: $Method$$Type): $Type
public "getReturnType"(): $Type
public static "getType"(arg0: StringJS): $Type
public static "getType"(arg0: $Class$$Type<(never)>): $Type
public static "getType"(arg0: $Method$$Type): $Type
public static "getType"(arg0: $Constructor$$Type<(never)>): $Type
public "getSize"(): integer
public static "getMethodType"(arg0: StringJS): $Type
public static "getMethodType"(arg0: $Type$$Type, ...arg1: ($Type$$Type)[]): $Type
public static "getMethodDescriptor"(arg0: $Type$$Type, ...arg1: ($Type$$Type)[]): StringJS
public static "getMethodDescriptor"(arg0: $Method$$Type): StringJS
public "getClassName"(): StringJS
public static "getInternalName"(arg0: $Class$$Type<(never)>): StringJS
public "getInternalName"(): StringJS
public "getSort"(): integer
public static "getObjectType"(arg0: StringJS): $Type
public "getArgumentTypes"(): ($Type)[]
public static "getArgumentTypes"(arg0: $Method$$Type): ($Type)[]
public static "getArgumentTypes"(arg0: StringJS): ($Type)[]
public static "getArgumentsAndReturnSizes"(arg0: StringJS): integer
public "getArgumentsAndReturnSizes"(): integer
public static "getConstructorDescriptor"(arg0: $Constructor$$Type<(never)>): StringJS
public "getDimensions"(): integer
public "getElementType"(): $Type
public "getOpcode"(arg0: integer): integer
public static "getArgumentCount"(arg0: StringJS): integer
public "getArgumentCount"(): integer
get "descriptor"(): StringJS
get "returnType"(): $Type
get "size"(): integer
get "className"(): StringJS
get "internalName"(): StringJS
get "sort"(): integer
get "argumentTypes"(): ($Type)[]
get "argumentsAndReturnSizes"(): integer
get "dimensions"(): integer
get "elementType"(): $Type
get "argumentCount"(): integer
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
