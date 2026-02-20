declare module "malte0811.ferritecore.fastmap.FastMapKey" {
import {$Comparable} from "java.lang.Comparable"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $FastMapKey<T extends $Comparable<(object)>> {
public "getProperty"(): $Property<(T)>
public "getValue"(arg0: integer): T
public "numValues"(): integer
get "property"(): $Property<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FastMapKey$$Type<T> = ($FastMapKey<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FastMapKey$$Original<T> = $FastMapKey<(T)>;}
declare module "malte0811.ferritecore.fastmap.FastMap" {
import {$Map$$Type} from "java.util.Map"
import {$Collection$$Type} from "java.util.Collection"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$FastMapKey} from "malte0811.ferritecore.fastmap.FastMapKey"
import {$ReferenceSet} from "it.unimi.dsi.fastutil.objects.ReferenceSet"
import {$Map$Entry} from "java.util.Map$Entry"
import {$Property, $Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"

export class $FastMap<Value> {
constructor(arg0: $Collection$$Type<($Property$$Type<(never)>)>, arg1: $Map$$Type<($Map$$Type<($Property$$Type<(never)>), ($Comparable$$Type<(never)>)>), (Value)>, arg2: boolean)

public "getValue"(arg0: integer, arg1: any): $Comparable<(never)>
public "getValue"<T extends $Comparable<(object)>>(arg0: integer, arg1: $Property$$Type<(T)>): T
public "getKey"(arg0: integer): $FastMapKey<(never)>
public "with"(arg0: integer, arg1: $Property$$Type<(never)>, arg2: any): Value
public "getEntry"(arg0: integer, arg1: integer): $Map$Entry<($Property<(never)>), ($Comparable<(never)>)>
public "getIndexOf"(arg0: $Map$$Type<($Property$$Type<(never)>), ($Comparable$$Type<(never)>)>): integer
public "numProperties"(): integer
public "getPropertySet"(): $ReferenceSet<($Property<(never)>)>
public "isSingleState"(): boolean
get "propertySet"(): $ReferenceSet<($Property<(never)>)>
get "singleState"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FastMap$$Type<Value> = ($FastMap<(Value)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FastMap$$Original<Value> = $FastMap<(Value)>;}
