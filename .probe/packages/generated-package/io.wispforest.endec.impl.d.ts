declare module "io.wispforest.endec.impl.AttributeEndecBuilder" {
import {$Endec, $Endec$$Type} from "io.wispforest.endec.Endec"
import {$SerializationAttribute$$Type} from "io.wispforest.endec.SerializationAttribute"

export class $AttributeEndecBuilder<T> {
constructor(arg0: $Endec$$Type<(T)>, arg1: $SerializationAttribute$$Type)

public "orElse"(arg0: $Endec$$Type<(T)>): $Endec<(T)>
public "orElseIf"(arg0: $Endec$$Type<(T)>, arg1: $SerializationAttribute$$Type): $AttributeEndecBuilder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttributeEndecBuilder$$Type<T> = ($AttributeEndecBuilder<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AttributeEndecBuilder$$Original<T> = $AttributeEndecBuilder<(T)>;}
declare module "io.wispforest.endec.impl.StructField" {
import {$Endec$$Type} from "io.wispforest.endec.Endec"
import {$Deserializer$Struct$$Type} from "io.wispforest.endec.Deserializer$Struct"
import {$Serializer$$Type} from "io.wispforest.endec.Serializer"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function$$Type} from "java.util.function.Function"
import {$SerializationContext$$Type} from "io.wispforest.endec.SerializationContext"
import {$Serializer$Struct$$Type} from "io.wispforest.endec.Serializer$Struct"
import {$Deserializer$$Type} from "io.wispforest.endec.Deserializer"

export class $StructField<S, F> {
constructor(arg0: StringJS, arg1: $Endec$$Type<(F)>, arg2: $Function$$Type<(S), (F)>)
constructor(arg0: StringJS, arg1: $Endec$$Type<(F)>, arg2: $Function$$Type<(S), (F)>, arg3: F)
constructor(arg0: StringJS, arg1: $Endec$$Type<(F)>, arg2: $Function$$Type<(S), (F)>, arg3: $Supplier$$Type<(F)>)

public "encodeField"(arg0: $SerializationContext$$Type, arg1: $Serializer$$Type<(never)>, arg2: $Serializer$Struct$$Type, arg3: S): void
public "decodeField"(arg0: $SerializationContext$$Type, arg1: $Deserializer$$Type<(never)>, arg2: $Deserializer$Struct$$Type): F
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructField$$Type<S, F> = ($StructField<(S), (F)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructField$$Original<S, F> = $StructField<(S), (F)>;}
declare module "io.wispforest.endec.impl.ReflectiveEndecBuilder" {
import {$Endec, $Endec$$Type} from "io.wispforest.endec.Endec"
import {$Optional} from "java.util.Optional"
import {$Type$$Type} from "java.lang.reflect.Type"
import {$Class$$Type} from "java.lang.Class"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $ReflectiveEndecBuilder {
static readonly "SHARED_INSTANCE": $ReflectiveEndecBuilder

constructor(arg0: $Consumer$$Type<($ReflectiveEndecBuilder)>)
constructor()

public "get"(arg0: $Type$$Type): $Endec<(never)>
public "get"<T>(arg0: $Class$$Type<(T)>): $Endec<(T)>
public "register"<T>(arg0: $Endec$$Type<(T)>, arg1: $Class$$Type<(T)>): $ReflectiveEndecBuilder
public "register"<T>(arg0: $Endec$$Type<(T)>, ...arg1: ($Class$$Type<(T)>)[]): $ReflectiveEndecBuilder
public "maybeGet"<T>(arg0: $Class$$Type<(T)>): $Optional<($Endec<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReflectiveEndecBuilder$$Type = ($ReflectiveEndecBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReflectiveEndecBuilder$$Original = $ReflectiveEndecBuilder;}
declare module "io.wispforest.endec.impl.KeyedEndec" {
import {$Endec, $Endec$$Type} from "io.wispforest.endec.Endec"
import {$Supplier$$Type} from "java.util.function.Supplier"

export class $KeyedEndec<F> {
constructor(arg0: StringJS, arg1: $Endec$$Type<(F)>, arg2: $Supplier$$Type<(F)>)
constructor(arg0: StringJS, arg1: $Endec$$Type<(F)>, arg2: F)

public "key"(): StringJS
public "defaultValue"(): F
public "endec"(): $Endec<(F)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyedEndec$$Type<F> = ($KeyedEndec<(F)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyedEndec$$Original<F> = $KeyedEndec<(F)>;}
