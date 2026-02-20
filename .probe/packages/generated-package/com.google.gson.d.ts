declare module "com.google.gson.ExclusionStrategy" {
import {$Class$$Type} from "java.lang.Class"
import {$FieldAttributes$$Type} from "com.google.gson.FieldAttributes"

export interface $ExclusionStrategy$$Interface {
}

export class $ExclusionStrategy implements $ExclusionStrategy$$Interface {
 "shouldSkipField"(arg0: $FieldAttributes$$Type): boolean
 "shouldSkipClass"(arg0: $Class$$Type<(never)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExclusionStrategy$$Type = ($ExclusionStrategy);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExclusionStrategy$$Original = $ExclusionStrategy;}
declare module "com.google.gson.ReflectionAccessFilter$FilterResult" {
import {$Enum} from "java.lang.Enum"

export class $ReflectionAccessFilter$FilterResult extends $Enum<($ReflectionAccessFilter$FilterResult)> {
static readonly "BLOCK_INACCESSIBLE": $ReflectionAccessFilter$FilterResult
static readonly "BLOCK_ALL": $ReflectionAccessFilter$FilterResult
static readonly "INDECISIVE": $ReflectionAccessFilter$FilterResult
static readonly "ALLOW": $ReflectionAccessFilter$FilterResult

public static "values"(): ($ReflectionAccessFilter$FilterResult)[]
public static "valueOf"(arg0: StringJS): $ReflectionAccessFilter$FilterResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReflectionAccessFilter$FilterResult$$Type = (("allow") | ("indecisive") | ("block_inaccessible") | ("block_all"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReflectionAccessFilter$FilterResult$$Original = $ReflectionAccessFilter$FilterResult;}
declare module "com.google.gson.JsonPrimitive" {
import {$BigInteger} from "java.math.BigInteger"
import {$JsonElement} from "com.google.gson.JsonElement"
import {$BigDecimal} from "java.math.BigDecimal"

export class $JsonPrimitive extends $JsonElement {
constructor(arg0: character)
constructor(arg0: StringJS)
constructor(arg0: number)
constructor(arg0: boolean)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getAsDouble"(): double
public "getAsInt"(): integer
public "getAsLong"(): long
public "getAsBoolean"(): boolean
public "isNumber"(): boolean
public "deepCopy"(): $JsonElement
public "getAsString"(): StringJS
public "isBoolean"(): boolean
public "getAsFloat"(): float
public "getAsShort"(): short
public "getAsByte"(): byte
public "isString"(): boolean
public "getAsNumber"(): number
/**
 * 
 * @deprecated
 */
public "getAsCharacter"(): character
public "getAsBigInteger"(): $BigInteger
public "getAsBigDecimal"(): $BigDecimal
get "asDouble"(): double
get "asInt"(): integer
get "asLong"(): long
get "asBoolean"(): boolean
get "number"(): boolean
get "asString"(): StringJS
get "boolean"(): boolean
get "asFloat"(): float
get "asShort"(): short
get "asByte"(): byte
get "string"(): boolean
get "asNumber"(): number
get "asCharacter"(): character
get "asBigInteger"(): $BigInteger
get "asBigDecimal"(): $BigDecimal
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonPrimitive$$Type = (number) | (StringJS) | (boolean) | (null);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JsonPrimitive$$Original = $JsonPrimitive;}
declare module "com.google.gson.JsonNull" {
import {$JsonElement} from "com.google.gson.JsonElement"

export class $JsonNull extends $JsonElement {
static readonly "INSTANCE": $JsonNull

/**
 * 
 * @deprecated
 */
constructor()

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "deepCopy"(): $JsonNull
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonNull$$Type = ($JsonNull);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JsonNull$$Original = $JsonNull;}
declare module "com.google.gson.FieldNamingPolicy" {
import {$Enum} from "java.lang.Enum"
import {$Field$$Type} from "java.lang.reflect.Field"
import {$FieldNamingStrategy$$Interface} from "com.google.gson.FieldNamingStrategy"

export class $FieldNamingPolicy extends $Enum<($FieldNamingPolicy)> implements $FieldNamingStrategy$$Interface {
static readonly "IDENTITY": $FieldNamingPolicy
static readonly "UPPER_CAMEL_CASE_WITH_SPACES": $FieldNamingPolicy
static readonly "UPPER_CAMEL_CASE": $FieldNamingPolicy
static readonly "LOWER_CASE_WITH_DOTS": $FieldNamingPolicy
static readonly "LOWER_CASE_WITH_UNDERSCORES": $FieldNamingPolicy
static readonly "UPPER_CASE_WITH_UNDERSCORES": $FieldNamingPolicy
static readonly "LOWER_CASE_WITH_DASHES": $FieldNamingPolicy

public static "values"(): ($FieldNamingPolicy)[]
public static "valueOf"(arg0: StringJS): $FieldNamingPolicy
public "translateName"(arg0: $Field$$Type): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FieldNamingPolicy$$Type = (("identity") | ("upper_camel_case") | ("upper_camel_case_with_spaces") | ("upper_case_with_underscores") | ("lower_case_with_underscores") | ("lower_case_with_dashes") | ("lower_case_with_dots"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FieldNamingPolicy$$Original = $FieldNamingPolicy;}
declare module "com.google.gson.Gson" {
import {$JsonReader, $JsonReader$$Type} from "com.google.gson.stream.JsonReader"
import {$Appendable$$Type} from "java.lang.Appendable"
import {$Reader$$Type} from "java.io.Reader"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$GsonBuilder} from "com.google.gson.GsonBuilder"
import {$TypeAdapter} from "com.google.gson.TypeAdapter"
import {$Excluder} from "com.google.gson.internal.Excluder"
import {$Writer$$Type} from "java.io.Writer"
import {$JsonWriter, $JsonWriter$$Type} from "com.google.gson.stream.JsonWriter"
import {$Type$$Type} from "java.lang.reflect.Type"
import {$Class$$Type} from "java.lang.Class"
import {$TypeAdapterFactory$$Type} from "com.google.gson.TypeAdapterFactory"
import {$TypeToken$$Type} from "com.google.gson.reflect.TypeToken"
import {$FieldNamingStrategy} from "com.google.gson.FieldNamingStrategy"

export class $Gson {
constructor()

public "newBuilder"(): $GsonBuilder
public "toString"(): StringJS
public "getAdapter"<T>(arg0: $TypeToken$$Type<(T)>): $TypeAdapter<(T)>
public "getAdapter"<T>(arg0: $Class$$Type<(T)>): $TypeAdapter<(T)>
public "fromJson"<T>(arg0: $Reader$$Type, arg1: $Type$$Type): T
public "fromJson"<T>(arg0: StringJS, arg1: $Class$$Type<(T)>): T
public "fromJson"<T>(arg0: $Reader$$Type, arg1: $Class$$Type<(T)>): T
public "fromJson"<T>(arg0: StringJS, arg1: $Type$$Type): T
public "fromJson"<T>(arg0: StringJS, arg1: $TypeToken$$Type<(T)>): T
public "fromJson"<T>(arg0: $JsonElement$$Type, arg1: $TypeToken$$Type<(T)>): T
public "fromJson"<T>(arg0: $JsonElement$$Type, arg1: $Type$$Type): T
public "fromJson"<T>(arg0: $JsonElement$$Type, arg1: $Class$$Type<(T)>): T
public "fromJson"<T>(arg0: $JsonReader$$Type, arg1: $Type$$Type): T
public "fromJson"<T>(arg0: $Reader$$Type, arg1: $TypeToken$$Type<(T)>): T
public "fromJson"<T>(arg0: $JsonReader$$Type, arg1: $TypeToken$$Type<(T)>): T
/**
 * 
 * @deprecated
 */
public "excluder"(): $Excluder
public "htmlSafe"(): boolean
public "toJsonTree"(arg0: any, arg1: $Type$$Type): $JsonElement
public "toJsonTree"(arg0: any): $JsonElement
public "toJson"(arg0: $JsonElement$$Type, arg1: $Appendable$$Type): void
public "toJson"(arg0: $JsonElement$$Type, arg1: $JsonWriter$$Type): void
public "toJson"(arg0: any, arg1: $Appendable$$Type): void
public "toJson"(arg0: any, arg1: $Type$$Type): StringJS
public "toJson"(arg0: any): StringJS
public "toJson"(arg0: $JsonElement$$Type): StringJS
public "toJson"(arg0: any, arg1: $Type$$Type, arg2: $Appendable$$Type): void
public "toJson"(arg0: any, arg1: $Type$$Type, arg2: $JsonWriter$$Type): void
public "newJsonWriter"(arg0: $Writer$$Type): $JsonWriter
public "newJsonReader"(arg0: $Reader$$Type): $JsonReader
public "fieldNamingStrategy"(): $FieldNamingStrategy
public "serializeNulls"(): boolean
public "getDelegateAdapter"<T>(arg0: $TypeAdapterFactory$$Type, arg1: $TypeToken$$Type<(T)>): $TypeAdapter<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Gson$$Type = ($Gson);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Gson$$Original = $Gson;}
declare module "com.google.gson.GsonBuilder" {
import {$ExclusionStrategy$$Type} from "com.google.gson.ExclusionStrategy"
import {$LongSerializationPolicy$$Type} from "com.google.gson.LongSerializationPolicy"
import {$Type$$Type} from "java.lang.reflect.Type"
import {$ToNumberStrategy$$Type} from "com.google.gson.ToNumberStrategy"
import {$Class$$Type} from "java.lang.Class"
import {$TypeAdapterFactory$$Type} from "com.google.gson.TypeAdapterFactory"
import {$Gson} from "com.google.gson.Gson"
import {$ReflectionAccessFilter$$Type} from "com.google.gson.ReflectionAccessFilter"
import {$FieldNamingStrategy$$Type} from "com.google.gson.FieldNamingStrategy"
import {$FieldNamingPolicy$$Type} from "com.google.gson.FieldNamingPolicy"

export class $GsonBuilder {
constructor()

public "create"(): $Gson
public "setLenient"(): $GsonBuilder
public "setVersion"(arg0: double): $GsonBuilder
public "setPrettyPrinting"(): $GsonBuilder
public "addSerializationExclusionStrategy"(arg0: $ExclusionStrategy$$Type): $GsonBuilder
public "enableComplexMapKeySerialization"(): $GsonBuilder
public "disableInnerClassSerialization"(): $GsonBuilder
public "registerTypeHierarchyAdapter"(arg0: $Class$$Type<(never)>, arg1: any): $GsonBuilder
public "setObjectToNumberStrategy"(arg0: $ToNumberStrategy$$Type): $GsonBuilder
public "setExclusionStrategies"(...arg0: ($ExclusionStrategy$$Type)[]): $GsonBuilder
public "setFieldNamingPolicy"(arg0: $FieldNamingPolicy$$Type): $GsonBuilder
public "setNumberToNumberStrategy"(arg0: $ToNumberStrategy$$Type): $GsonBuilder
public "setLongSerializationPolicy"(arg0: $LongSerializationPolicy$$Type): $GsonBuilder
public "addReflectionAccessFilter"(arg0: $ReflectionAccessFilter$$Type): $GsonBuilder
public "disableHtmlEscaping"(): $GsonBuilder
public "setFieldNamingStrategy"(arg0: $FieldNamingStrategy$$Type): $GsonBuilder
public "registerTypeAdapterFactory"(arg0: $TypeAdapterFactory$$Type): $GsonBuilder
public "excludeFieldsWithoutExposeAnnotation"(): $GsonBuilder
public "addDeserializationExclusionStrategy"(arg0: $ExclusionStrategy$$Type): $GsonBuilder
public "serializeSpecialFloatingPointValues"(): $GsonBuilder
public "setDateFormat"(arg0: integer): $GsonBuilder
public "setDateFormat"(arg0: StringJS): $GsonBuilder
public "setDateFormat"(arg0: integer, arg1: integer): $GsonBuilder
public "serializeNulls"(): $GsonBuilder
public "disableJdkUnsafe"(): $GsonBuilder
public "generateNonExecutableJson"(): $GsonBuilder
public "excludeFieldsWithModifiers"(...arg0: (integer)[]): $GsonBuilder
public "registerTypeAdapter"(arg0: $Type$$Type, arg1: any): $GsonBuilder
get "lenient"(): $GsonBuilder
set "version"(value: double)
get "prettyPrinting"(): $GsonBuilder
set "objectToNumberStrategy"(value: $ToNumberStrategy$$Type)
set "exclusionStrategies"(value: ($ExclusionStrategy$$Type)[])
set "fieldNamingPolicy"(value: $FieldNamingPolicy$$Type)
set "numberToNumberStrategy"(value: $ToNumberStrategy$$Type)
set "longSerializationPolicy"(value: $LongSerializationPolicy$$Type)
set "fieldNamingStrategy"(value: $FieldNamingStrategy$$Type)
set "dateFormat"(value: integer)
set "dateFormat"(value: StringJS)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GsonBuilder$$Type = ($GsonBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GsonBuilder$$Original = $GsonBuilder;}
declare module "com.google.gson.JsonArray" {
import {$Iterator} from "java.util.Iterator"
import {$Iterable$$Interface} from "java.lang.Iterable"
import {$BigInteger} from "java.math.BigInteger"
import {$Spliterator} from "java.util.Spliterator"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$List} from "java.util.List"
import {$BigDecimal} from "java.math.BigDecimal"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $JsonArray extends $JsonElement implements $Iterable$$Interface<($JsonElement)> {
constructor()
constructor(arg0: integer)

public "remove"(arg0: $JsonElement$$Type): boolean
public "remove"(arg0: integer): $JsonElement
public "size"(): integer
public "get"(arg0: integer): $JsonElement
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isEmpty"(): boolean
public "add"(arg0: character): void
public "add"(arg0: boolean): void
public "add"(arg0: StringJS): void
public "add"(arg0: $JsonElement$$Type): void
public "add"(arg0: number): void
public "iterator"(): $Iterator<($JsonElement)>
public "contains"(arg0: $JsonElement$$Type): boolean
public "addAll"(arg0: $JsonArray$$Type): void
public "set"(arg0: integer, arg1: $JsonElement$$Type): $JsonElement
public "asList"(): $List<($JsonElement)>
public "getAsDouble"(): double
public "getAsInt"(): integer
public "getAsLong"(): long
public "getAsBoolean"(): boolean
public "deepCopy"(): $JsonElement
public "getAsString"(): StringJS
public "getAsFloat"(): float
public "getAsShort"(): short
public "getAsByte"(): byte
public "getAsNumber"(): number
/**
 * 
 * @deprecated
 */
public "getAsCharacter"(): character
public "getAsBigInteger"(): $BigInteger
public "getAsBigDecimal"(): $BigDecimal
public "spliterator"(): $Spliterator<($JsonElement)>
public "forEach"(arg0: $Consumer$$Type<($JsonElement)>): void
[Symbol.iterator](): IterableIterator<$JsonElement>;
get "empty"(): boolean
get "asDouble"(): double
get "asInt"(): integer
get "asLong"(): long
get "asBoolean"(): boolean
get "asString"(): StringJS
get "asFloat"(): float
get "asShort"(): short
get "asByte"(): byte
get "asNumber"(): number
get "asCharacter"(): character
get "asBigInteger"(): $BigInteger
get "asBigDecimal"(): $BigDecimal
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonArray$$Type = ((any)[]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JsonArray$$Original = $JsonArray;}
declare module "com.google.gson.LongSerializationPolicy" {
import {$Enum} from "java.lang.Enum"
import {$JsonElement} from "com.google.gson.JsonElement"

export class $LongSerializationPolicy extends $Enum<($LongSerializationPolicy)> {
static readonly "STRING": $LongSerializationPolicy
static readonly "DEFAULT": $LongSerializationPolicy

public static "values"(): ($LongSerializationPolicy)[]
public static "valueOf"(arg0: StringJS): $LongSerializationPolicy
public "serialize"(arg0: long): $JsonElement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongSerializationPolicy$$Type = (("default") | ("string"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LongSerializationPolicy$$Original = $LongSerializationPolicy;}
declare module "com.google.gson.TypeAdapterFactory" {
import {$Gson, $Gson$$Type} from "com.google.gson.Gson"
import {$TypeAdapter, $TypeAdapter$$Type} from "com.google.gson.TypeAdapter"
import {$TypeToken, $TypeToken$$Type} from "com.google.gson.reflect.TypeToken"

export interface $TypeAdapterFactory$$Interface {

(arg0: $Gson, arg1: $TypeToken<(T)>): $TypeAdapter$$Type<(T)>
}

export class $TypeAdapterFactory implements $TypeAdapterFactory$$Interface {
 "create"<T>(arg0: $Gson$$Type, arg1: $TypeToken$$Type<(T)>): $TypeAdapter<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeAdapterFactory$$Type = ((arg0: $Gson, arg1: $TypeToken<(T)>) => $TypeAdapter$$Type<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TypeAdapterFactory$$Original = $TypeAdapterFactory;}
declare module "com.google.gson.FieldAttributes" {
import {$Collection} from "java.util.Collection"
import {$Annotation} from "java.lang.annotation.Annotation"
import {$Type} from "java.lang.reflect.Type"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Field$$Type} from "java.lang.reflect.Field"

export class $FieldAttributes {
constructor(arg0: $Field$$Type)

public "getName"(): StringJS
public "toString"(): StringJS
public "getDeclaringClass"(): $Class<(never)>
public "getAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
public "getAnnotations"(): $Collection<($Annotation)>
public "getDeclaredType"(): $Type
public "getDeclaredClass"(): $Class<(never)>
public "hasModifier"(arg0: integer): boolean
get "name"(): StringJS
get "declaringClass"(): $Class<(never)>
get "annotations"(): $Collection<($Annotation)>
get "declaredType"(): $Type
get "declaredClass"(): $Class<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FieldAttributes$$Type = ($FieldAttributes);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FieldAttributes$$Original = $FieldAttributes;}
declare module "com.google.gson.JsonDeserializer" {
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$Type, $Type$$Type} from "java.lang.reflect.Type"
import {$JsonDeserializationContext, $JsonDeserializationContext$$Type} from "com.google.gson.JsonDeserializationContext"

export interface $JsonDeserializer$$Interface<T> {

(arg0: $JsonElement, arg1: $Type, arg2: $JsonDeserializationContext): T
}

export class $JsonDeserializer<T> implements $JsonDeserializer$$Interface {
 "deserialize"(arg0: $JsonElement$$Type, arg1: $Type$$Type, arg2: $JsonDeserializationContext$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonDeserializer$$Type<T> = ((arg0: $JsonElement, arg1: $Type, arg2: $JsonDeserializationContext) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JsonDeserializer$$Original<T> = $JsonDeserializer<(T)>;}
declare module "com.google.gson.TypeAdapter" {
import {$Writer$$Type} from "java.io.Writer"
import {$JsonReader$$Type} from "com.google.gson.stream.JsonReader"
import {$JsonWriter$$Type} from "com.google.gson.stream.JsonWriter"
import {$Reader$$Type} from "java.io.Reader"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"

export class $TypeAdapter<T> {
constructor()

public "write"(arg0: $JsonWriter$$Type, arg1: T): void
public "read"(arg0: $JsonReader$$Type): T
public "fromJson"(arg0: StringJS): T
public "fromJson"(arg0: $Reader$$Type): T
public "nullSafe"(): $TypeAdapter<(T)>
public "toJsonTree"(arg0: T): $JsonElement
public "toJson"(arg0: $Writer$$Type, arg1: T): void
public "toJson"(arg0: T): StringJS
public "fromJsonTree"(arg0: $JsonElement$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeAdapter$$Type<T> = ($TypeAdapter<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TypeAdapter$$Original<T> = $TypeAdapter<(T)>;}
declare module "com.google.gson.ToNumberStrategy" {
import {$JsonReader, $JsonReader$$Type} from "com.google.gson.stream.JsonReader"

export interface $ToNumberStrategy$$Interface {

(arg0: $JsonReader): number
}

export class $ToNumberStrategy implements $ToNumberStrategy$$Interface {
 "readNumber"(arg0: $JsonReader$$Type): number
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToNumberStrategy$$Type = ((arg0: $JsonReader) => number);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ToNumberStrategy$$Original = $ToNumberStrategy;}
declare module "com.google.gson.JsonDeserializationContext" {
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$Type, $Type$$Type} from "java.lang.reflect.Type"

export interface $JsonDeserializationContext$$Interface {

(arg0: $JsonElement, arg1: $Type): T
}

export class $JsonDeserializationContext implements $JsonDeserializationContext$$Interface {
 "deserialize"<T>(arg0: $JsonElement$$Type, arg1: $Type$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonDeserializationContext$$Type = ((arg0: $JsonElement, arg1: $Type) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JsonDeserializationContext$$Original = $JsonDeserializationContext;}
declare module "com.google.gson.FieldNamingStrategy" {
import {$Field, $Field$$Type} from "java.lang.reflect.Field"

export interface $FieldNamingStrategy$$Interface {

(arg0: $Field): StringJS
}

export class $FieldNamingStrategy implements $FieldNamingStrategy$$Interface {
 "translateName"(arg0: $Field$$Type): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FieldNamingStrategy$$Type = ((arg0: $Field) => StringJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FieldNamingStrategy$$Original = $FieldNamingStrategy;}
declare module "com.google.gson.JsonElement" {
import {$JsonPrimitive, $JsonPrimitive$$Type} from "com.google.gson.JsonPrimitive"
import {$BigInteger} from "java.math.BigInteger"
import {$BigDecimal} from "java.math.BigDecimal"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$JsonArray, $JsonArray$$Type} from "com.google.gson.JsonArray"
import {$JsonNull} from "com.google.gson.JsonNull"

export class $JsonElement {
/**
 * 
 * @deprecated
 */
constructor()

public "toString"(): StringJS
public "getAsDouble"(): double
public "getAsInt"(): integer
public "getAsLong"(): long
public "getAsBoolean"(): boolean
public "deepCopy"(): $JsonElement
public "getAsString"(): StringJS
public "getAsFloat"(): float
public "getAsShort"(): short
public "getAsByte"(): byte
public "isJsonNull"(): boolean
public "isJsonArray"(): boolean
public "isJsonObject"(): boolean
public "isJsonPrimitive"(): boolean
public "getAsJsonArray"(): $JsonArray
public "getAsJsonPrimitive"(): $JsonPrimitive
public "getAsJsonNull"(): $JsonNull
public "getAsNumber"(): number
/**
 * 
 * @deprecated
 */
public "getAsCharacter"(): character
public "getAsBigInteger"(): $BigInteger
public "getAsBigDecimal"(): $BigDecimal
public "getAsJsonObject"(): $JsonObject
get "asDouble"(): double
get "asInt"(): integer
get "asLong"(): long
get "asBoolean"(): boolean
get "asString"(): StringJS
get "asFloat"(): float
get "asShort"(): short
get "asByte"(): byte
get "jsonNull"(): boolean
get "jsonArray"(): boolean
get "jsonObject"(): boolean
get "jsonPrimitive"(): boolean
get "asJsonArray"(): $JsonArray
get "asJsonPrimitive"(): $JsonPrimitive
get "asJsonNull"(): $JsonNull
get "asNumber"(): number
get "asCharacter"(): character
get "asBigInteger"(): $BigInteger
get "asBigDecimal"(): $BigDecimal
get "asJsonObject"(): $JsonObject
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonElement$$Type = ($JsonObject$$Type) | ($JsonArray$$Type) | ($JsonPrimitive$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JsonElement$$Original = $JsonElement;}
declare module "com.google.gson.ReflectionAccessFilter" {
import {$ReflectionAccessFilter$FilterResult, $ReflectionAccessFilter$FilterResult$$Type} from "com.google.gson.ReflectionAccessFilter$FilterResult"
import {$Class, $Class$$Type} from "java.lang.Class"

export interface $ReflectionAccessFilter$$Interface {

(arg0: $Class<(never)>): $ReflectionAccessFilter$FilterResult$$Type
}

export class $ReflectionAccessFilter implements $ReflectionAccessFilter$$Interface {
static readonly "BLOCK_INACCESSIBLE_JAVA": $ReflectionAccessFilter
static readonly "BLOCK_ALL_ANDROID": $ReflectionAccessFilter
static readonly "BLOCK_ALL_PLATFORM": $ReflectionAccessFilter
static readonly "BLOCK_ALL_JAVA": $ReflectionAccessFilter

 "check"(arg0: $Class$$Type<(never)>): $ReflectionAccessFilter$FilterResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReflectionAccessFilter$$Type = ((arg0: $Class<(never)>) => $ReflectionAccessFilter$FilterResult$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReflectionAccessFilter$$Original = $ReflectionAccessFilter;}
declare module "com.google.gson.JsonObject" {
import {$JsonPrimitive} from "com.google.gson.JsonPrimitive"
import {$Map} from "java.util.Map"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$Set} from "java.util.Set"
import {$JsonArray} from "com.google.gson.JsonArray"
import {$Map$Entry} from "java.util.Map$Entry"

export class $JsonObject extends $JsonElement {
constructor()

public "remove"(arg0: StringJS): $JsonElement
public "size"(): integer
public "get"(arg0: StringJS): $JsonElement
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isEmpty"(): boolean
public "add"(arg0: StringJS, arg1: $JsonElement$$Type): void
public "entrySet"(): $Set<($Map$Entry<(StringJS), ($JsonElement)>)>
public "keySet"(): $Set<(StringJS)>
public "has"(arg0: StringJS): boolean
public "addProperty"(arg0: StringJS, arg1: number): void
public "addProperty"(arg0: StringJS, arg1: boolean): void
public "addProperty"(arg0: StringJS, arg1: character): void
public "addProperty"(arg0: StringJS, arg1: StringJS): void
public "deepCopy"(): $JsonElement
public "asMap"(): $Map<(StringJS), ($JsonElement)>
public "getAsJsonArray"(arg0: StringJS): $JsonArray
public "getAsJsonPrimitive"(arg0: StringJS): $JsonPrimitive
public "getAsJsonObject"(arg0: StringJS): $JsonObject
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonObject$$Type = (object);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JsonObject$$Original = $JsonObject;}
