declare module "malte0811.ferritecore.ducks.FastMapStateHolder" {
import {$Table, $Table$$Type} from "com.google.common.collect.Table"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$Reference2ObjectMap, $Reference2ObjectMap$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ObjectMap"
import {$FastMap, $FastMap$$Type} from "malte0811.ferritecore.fastmap.FastMap"
import {$Property, $Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"

export interface $FastMapStateHolder$$Interface<S> {
set "stateIndex"(value: integer)
set "stateMap"(value: $FastMap$$Type<(S)>)
get "neighborTable"(): $Table<($Property<(never)>), ($Comparable<(never)>), (S)>
get "stateMap"(): $FastMap<(S)>
get "stateIndex"(): integer
set "neighborTable"(value: $Table$$Type<($Property$$Type<(never)>), ($Comparable$$Type<(never)>), (S)>)
get "vanillaPropertyMap"(): $Reference2ObjectMap<($Property<(never)>), ($Comparable<(never)>)>
}

export class $FastMapStateHolder<S> implements $FastMapStateHolder$$Interface {
 "setStateIndex"(arg0: integer): void
 "setStateMap"(arg0: $FastMap$$Type<(S)>): void
 "getNeighborTable"(): $Table<($Property<(never)>), ($Comparable<(never)>), (S)>
 "getStateMap"(): $FastMap<(S)>
 "getStateIndex"(): integer
 "setNeighborTable"(arg0: $Table$$Type<($Property$$Type<(never)>), ($Comparable$$Type<(never)>), (S)>): void
 "getVanillaPropertyMap"(): $Reference2ObjectMap<($Property<(never)>), ($Comparable<(never)>)>
 "replacePropertyMap"(arg0: $Reference2ObjectMap$$Type<($Property$$Type<(never)>), ($Comparable$$Type<(never)>)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FastMapStateHolder$$Type<S> = ($FastMapStateHolder<(S)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FastMapStateHolder$$Original<S> = $FastMapStateHolder<(S)>;}
