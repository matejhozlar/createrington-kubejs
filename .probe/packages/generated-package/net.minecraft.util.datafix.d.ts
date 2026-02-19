declare module "net.minecraft.util.datafix.fixes.StructuresBecomeConfiguredFix$Conversion" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$Record} from "java.lang.Record"

export class $StructuresBecomeConfiguredFix$Conversion extends $Record {
constructor(biomeMapping: $Map$$Type<(StringJS), (StringJS)>, fallback: StringJS)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "fallback"(): StringJS
public "biomeMapping"(): $Map<(StringJS), (StringJS)>
public static "biomeMapped"(arg0: $Map$$Type<($List$$Type<(StringJS)>), (StringJS)>, arg1: StringJS): $StructuresBecomeConfiguredFix$Conversion
public static "trivial"(arg0: StringJS): $StructuresBecomeConfiguredFix$Conversion
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructuresBecomeConfiguredFix$Conversion$$Type = ({"biomeMapping"?: $Map$$Type<(StringJS), (StringJS)>, "fallback"?: StringJS}) | ([biomeMapping?: $Map$$Type<(StringJS), (StringJS)>, fallback?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructuresBecomeConfiguredFix$Conversion$$Original = $StructuresBecomeConfiguredFix$Conversion;}
declare module "net.minecraft.util.datafix.DataFixTypes" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Enum} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$DSL$TypeReference} from "com.mojang.datafixers.DSL$TypeReference"
import {$Dynamic, $Dynamic$$Type} from "com.mojang.serialization.Dynamic"
import {$Set} from "java.util.Set"
import {$DataFixer$$Type} from "com.mojang.datafixers.DataFixer"

export class $DataFixTypes extends $Enum<($DataFixTypes)> {
static readonly "SAVED_DATA_MAP_DATA": $DataFixTypes
static readonly "WORLD_GEN_SETTINGS": $DataFixTypes
static readonly "SAVED_DATA_MAP_INDEX": $DataFixTypes
static readonly "STRUCTURE": $DataFixTypes
static readonly "STATS": $DataFixTypes
static readonly "LEVEL": $DataFixTypes
static readonly "OPTIONS": $DataFixTypes
static readonly "ADVANCEMENTS": $DataFixTypes
static readonly "POI_CHUNK": $DataFixTypes
static readonly "SAVED_DATA_COMMAND_STORAGE": $DataFixTypes
static readonly "PLAYER": $DataFixTypes
static readonly "SAVED_DATA_FORCED_CHUNKS": $DataFixTypes
static readonly "TYPES_FOR_LEVEL_LIST": $Set<($DSL$TypeReference)>
static readonly "SAVED_DATA_RANDOM_SEQUENCES": $DataFixTypes
static readonly "SAVED_DATA_RAIDS": $DataFixTypes
static readonly "SAVED_DATA_SCOREBOARD": $DataFixTypes
static readonly "SAVED_DATA_STRUCTURE_FEATURE_INDICES": $DataFixTypes
static readonly "ENTITY_CHUNK": $DataFixTypes
static readonly "HOTBAR": $DataFixTypes
static readonly "CHUNK": $DataFixTypes

public static "values"(): ($DataFixTypes)[]
public "update"<T>(arg0: $DataFixer$$Type, arg1: $Dynamic$$Type<(T)>, arg2: integer, arg3: integer): $Dynamic<(T)>
public "update"(arg0: $DataFixer$$Type, arg1: $CompoundTag$$Type, arg2: integer, arg3: integer): $CompoundTag
public static "valueOf"(arg0: StringJS): $DataFixTypes
public "wrapCodec"<A>(arg0: $Codec$$Type<(A)>, arg1: $DataFixer$$Type, arg2: integer): $Codec<(A)>
public "updateToCurrentVersion"(arg0: $DataFixer$$Type, arg1: $CompoundTag$$Type, arg2: integer): $CompoundTag
public "updateToCurrentVersion"<T>(arg0: $DataFixer$$Type, arg1: $Dynamic$$Type<(T)>, arg2: integer): $Dynamic<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataFixTypes$$Type = (("level") | ("player") | ("chunk") | ("hotbar") | ("options") | ("structure") | ("stats") | ("saved_data_command_storage") | ("saved_data_forced_chunks") | ("saved_data_map_data") | ("saved_data_map_index") | ("saved_data_raids") | ("saved_data_random_sequences") | ("saved_data_scoreboard") | ("saved_data_structure_feature_indices") | ("advancements") | ("poi_chunk") | ("world_gen_settings") | ("entity_chunk"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DataFixTypes$$Original = $DataFixTypes;}
