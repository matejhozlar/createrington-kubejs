declare module "com.google.gson.stream.JsonReader" {
import {$Reader$$Type} from "java.io.Reader"
import {$JsonToken} from "com.google.gson.stream.JsonToken"
import {$Closeable$$Interface} from "java.io.Closeable"

export class $JsonReader implements $Closeable$$Interface {
constructor(arg0: $Reader$$Type)

public "toString"(): StringJS
public "hasNext"(): boolean
public "close"(): void
public "getPath"(): StringJS
public "peek"(): $JsonToken
public "nextDouble"(): double
public "nextInt"(): integer
public "setLenient"(arg0: boolean): void
public "isLenient"(): boolean
public "nextLong"(): long
public "nextBoolean"(): boolean
public "skipValue"(): void
public "beginObject"(): void
public "getPreviousPath"(): StringJS
public "nextName"(): StringJS
public "endObject"(): void
public "beginArray"(): void
public "nextString"(): StringJS
public "nextNull"(): void
public "endArray"(): void
get "path"(): StringJS
set "lenient"(value: boolean)
get "lenient"(): boolean
get "previousPath"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonReader$$Type = ($JsonReader);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JsonReader$$Original = $JsonReader;}
declare module "com.google.gson.stream.JsonWriter" {
import {$Writer$$Type} from "java.io.Writer"
import {$Closeable$$Interface} from "java.io.Closeable"
import {$Flushable$$Interface} from "java.io.Flushable"

export class $JsonWriter implements $Closeable$$Interface, $Flushable$$Interface {
constructor(arg0: $Writer$$Type)

public "name"(arg0: StringJS): $JsonWriter
public "value"(arg0: float): $JsonWriter
public "value"(arg0: double): $JsonWriter
public "value"(arg0: long): $JsonWriter
public "value"(arg0: boolean): $JsonWriter
public "value"(arg0: boolean): $JsonWriter
public "value"(arg0: StringJS): $JsonWriter
public "value"(arg0: number): $JsonWriter
public "flush"(): void
public "close"(): void
public "setLenient"(arg0: boolean): void
public "isLenient"(): boolean
public "setIndent"(arg0: StringJS): void
public "nullValue"(): $JsonWriter
public "beginObject"(): $JsonWriter
public "jsonValue"(arg0: StringJS): $JsonWriter
public "setSerializeNulls"(arg0: boolean): void
public "getSerializeNulls"(): boolean
public "setHtmlSafe"(arg0: boolean): void
public "endObject"(): $JsonWriter
public "beginArray"(): $JsonWriter
public "isHtmlSafe"(): boolean
public "endArray"(): $JsonWriter
set "lenient"(value: boolean)
get "lenient"(): boolean
set "indent"(value: StringJS)
set "serializeNulls"(value: boolean)
get "serializeNulls"(): boolean
set "htmlSafe"(value: boolean)
get "htmlSafe"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonWriter$$Type = ($JsonWriter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JsonWriter$$Original = $JsonWriter;}
declare module "com.google.gson.stream.JsonToken" {
import {$Enum} from "java.lang.Enum"

export class $JsonToken extends $Enum<($JsonToken)> {
static readonly "NUMBER": $JsonToken
static readonly "NULL": $JsonToken
static readonly "END_DOCUMENT": $JsonToken
static readonly "BEGIN_OBJECT": $JsonToken
static readonly "END_ARRAY": $JsonToken
static readonly "STRING": $JsonToken
static readonly "END_OBJECT": $JsonToken
static readonly "BEGIN_ARRAY": $JsonToken
static readonly "BOOLEAN": $JsonToken
static readonly "NAME": $JsonToken

public static "values"(): ($JsonToken)[]
public static "valueOf"(arg0: StringJS): $JsonToken
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonToken$$Type = (("begin_array") | ("end_array") | ("begin_object") | ("end_object") | ("name") | ("string") | ("number") | ("boolean") | ("null") | ("end_document"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JsonToken$$Original = $JsonToken;}
