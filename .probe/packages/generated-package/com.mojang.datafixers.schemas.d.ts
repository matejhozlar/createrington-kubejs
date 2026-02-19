declare module "com.mojang.datafixers.schemas.Schema" {
import {$TaggedChoice$TaggedChoiceType} from "com.mojang.datafixers.types.templates.TaggedChoice$TaggedChoiceType"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Type} from "com.mojang.datafixers.types.Type"
import {$DSL$TypeReference$$Type} from "com.mojang.datafixers.DSL$TypeReference"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function$$Type} from "java.util.function.Function"
import {$Set} from "java.util.Set"
import {$TypeTemplate, $TypeTemplate$$Type} from "com.mojang.datafixers.types.templates.TypeTemplate"

export class $Schema {
constructor(arg0: integer, arg1: $Schema$$Type)

public "register"(arg0: $Map$$Type<(StringJS), ($Supplier$$Type<($TypeTemplate$$Type)>)>, arg1: StringJS, arg2: $Supplier$$Type<($TypeTemplate$$Type)>): void
public "register"(arg0: $Map$$Type<(StringJS), ($Supplier$$Type<($TypeTemplate$$Type)>)>, arg1: StringJS, arg2: $Function$$Type<(StringJS), ($TypeTemplate$$Type)>): void
public "id"(arg0: StringJS): $TypeTemplate
public "getParent"(): $Schema
public "getType"(arg0: $DSL$TypeReference$$Type): $Type<(never)>
public "types"(): $Set<(StringJS)>
public "registerBlockEntities"(arg0: $Schema$$Type): $Map<(StringJS), ($Supplier<($TypeTemplate)>)>
public "getTypeRaw"(arg0: $DSL$TypeReference$$Type): $Type<(never)>
public "findChoiceType"(arg0: $DSL$TypeReference$$Type): $TaggedChoice$TaggedChoiceType<(never)>
public "registerType"(arg0: boolean, arg1: $DSL$TypeReference$$Type, arg2: $Supplier$$Type<($TypeTemplate$$Type)>): void
public "registerTypes"(arg0: $Schema$$Type, arg1: $Map$$Type<(StringJS), ($Supplier$$Type<($TypeTemplate$$Type)>)>, arg2: $Map$$Type<(StringJS), ($Supplier$$Type<($TypeTemplate$$Type)>)>): void
public "resolveTemplate"(arg0: StringJS): $TypeTemplate
public "registerEntities"(arg0: $Schema$$Type): $Map<(StringJS), ($Supplier<($TypeTemplate)>)>
public "registerSimple"(arg0: $Map$$Type<(StringJS), ($Supplier$$Type<($TypeTemplate$$Type)>)>, arg1: StringJS): void
public "getVersionKey"(): integer
public "getChoiceType"(arg0: $DSL$TypeReference$$Type, arg1: StringJS): $Type<(never)>
get "parent"(): $Schema
get "versionKey"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Schema$$Type = ($Schema);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Schema$$Original = $Schema;}
