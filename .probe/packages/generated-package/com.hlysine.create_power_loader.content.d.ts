declare module "com.hlysine.create_power_loader.content.trains.CPLGlobalStation" {
import {$StationChunkLoader, $StationChunkLoader$$Type} from "com.hlysine.create_power_loader.content.trains.StationChunkLoader"

export interface $CPLGlobalStation$$Interface {
get "loader"(): $StationChunkLoader
set "loader"(value: $StationChunkLoader$$Type)
}

export class $CPLGlobalStation implements $CPLGlobalStation$$Interface {
 "getLoader"(): $StationChunkLoader
 "setLoader"(arg0: $StationChunkLoader$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CPLGlobalStation$$Type = ($CPLGlobalStation);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CPLGlobalStation$$Original = $CPLGlobalStation;}
declare module "com.hlysine.create_power_loader.content.trains.StationChunkLoader$AttachedLoader" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$LoaderType, $LoaderType$$Type} from "com.hlysine.create_power_loader.content.LoaderType"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Record} from "java.lang.Record"

export class $StationChunkLoader$AttachedLoader extends $Record {
constructor(type: $LoaderType$$Type, pos: $BlockPos$$Type)

public "type"(): $LoaderType
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "write"(): $CompoundTag
public static "read"(arg0: $CompoundTag$$Type): $StationChunkLoader$AttachedLoader
public "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StationChunkLoader$AttachedLoader$$Type = ({"pos"?: $BlockPos$$Type, "type"?: $LoaderType$$Type}) | ([pos?: $BlockPos$$Type, type?: $LoaderType$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StationChunkLoader$AttachedLoader$$Original = $StationChunkLoader$AttachedLoader;}
declare module "com.hlysine.create_power_loader.content.ChunkLoader" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$LoaderType} from "com.hlysine.create_power_loader.content.LoaderType"
import {$Set} from "java.util.Set"
import {$Pair} from "net.createmod.catnip.data.Pair"
import {$LoaderMode} from "com.hlysine.create_power_loader.content.LoaderMode"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$ChunkLoadManager$LoadedChunkPos} from "com.hlysine.create_power_loader.content.ChunkLoadManager$LoadedChunkPos"

export interface $ChunkLoader$$Interface {
get "location"(): $Pair<($ResourceLocation), ($BlockPos)>
get "forcedChunks"(): $Set<($ChunkLoadManager$LoadedChunkPos)>
get "loaderType"(): $LoaderType
get "loaderMode"(): $LoaderMode
}

export class $ChunkLoader implements $ChunkLoader$$Interface {
 "getLocation"(): $Pair<($ResourceLocation), ($BlockPos)>
 "getForcedChunks"(): $Set<($ChunkLoadManager$LoadedChunkPos)>
 "removeFromManager"(): void
 "getLoaderType"(): $LoaderType
 "getLoaderMode"(): $LoaderMode
 "addToManager"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkLoader$$Type = ($ChunkLoader);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkLoader$$Original = $ChunkLoader;}
declare module "com.hlysine.create_power_loader.content.trains.TrainChunkLoader" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$LoaderType} from "com.hlysine.create_power_loader.content.LoaderType"
import {$Train$$Type} from "com.simibubi.create.content.trains.entity.Train"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LoaderMode} from "com.hlysine.create_power_loader.content.LoaderMode"
import {$Pair} from "net.createmod.catnip.data.Pair"
import {$ChunkLoadManager$LoadedChunkPos} from "com.hlysine.create_power_loader.content.ChunkLoadManager$LoadedChunkPos"
import {$CarriageChunkLoader} from "com.hlysine.create_power_loader.content.trains.CarriageChunkLoader"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Set} from "java.util.Set"
import {$ChunkLoader$$Interface} from "com.hlysine.create_power_loader.content.ChunkLoader"
import {$BlockPos} from "net.minecraft.core.BlockPos"

export class $TrainChunkLoader implements $ChunkLoader$$Interface {
readonly "carriageLoaders": $List<($CarriageChunkLoader)>

constructor(arg0: $Train$$Type)

public "getLocation"(): $Pair<($ResourceLocation), ($BlockPos)>
public "write"(): $CompoundTag
public static "read"(arg0: $Train$$Type, arg1: $CompoundTag$$Type): $TrainChunkLoader
public "tick"(arg0: $Level$$Type): void
public "getForcedChunks"(): $Set<($ChunkLoadManager$LoadedChunkPos)>
public "onRemove"(): void
public "getLoaderType"(): $LoaderType
public "getLoaderMode"(): $LoaderMode
public "addToManager"(): void
public "removeFromManager"(): void
get "location"(): $Pair<($ResourceLocation), ($BlockPos)>
get "forcedChunks"(): $Set<($ChunkLoadManager$LoadedChunkPos)>
get "loaderType"(): $LoaderType
get "loaderMode"(): $LoaderMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrainChunkLoader$$Type = ($TrainChunkLoader);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrainChunkLoader$$Original = $TrainChunkLoader;}
declare module "com.hlysine.create_power_loader.content.LoaderType" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Codec} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $LoaderType extends $Enum<($LoaderType)> implements $StringRepresentable$$Interface {
static readonly "BRASS": $LoaderType
static readonly "ANDESITE": $LoaderType

public static "values"(): ($LoaderType)[]
public static "valueOf"(arg0: StringJS): $LoaderType
public "getSerializedName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoaderType$$Type = (("andesite") | ("brass"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LoaderType$$Original = $LoaderType;}
declare module "com.hlysine.create_power_loader.content.trains.CPLTrain" {
import {$TrainChunkLoader, $TrainChunkLoader$$Type} from "com.hlysine.create_power_loader.content.trains.TrainChunkLoader"

export interface $CPLTrain$$Interface {
get "loader"(): $TrainChunkLoader
set "loader"(value: $TrainChunkLoader$$Type)
}

export class $CPLTrain implements $CPLTrain$$Interface {
 "getLoader"(): $TrainChunkLoader
 "setLoader"(arg0: $TrainChunkLoader$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CPLTrain$$Type = ($CPLTrain);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CPLTrain$$Original = $CPLTrain;}
declare module "com.hlysine.create_power_loader.content.LoaderMode" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Codec} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $LoaderMode extends $Enum<($LoaderMode)> implements $StringRepresentable$$Interface {
static readonly "STATION": $LoaderMode
static readonly "CONTRAPTION": $LoaderMode
static readonly "TRAIN": $LoaderMode
static readonly "STATIC": $LoaderMode

public static "values"(): ($LoaderMode)[]
public static "valueOf"(arg0: StringJS): $LoaderMode
public "getSerializedName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoaderMode$$Type = (("static") | ("contraption") | ("train") | ("station"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LoaderMode$$Original = $LoaderMode;}
declare module "com.hlysine.create_power_loader.content.trains.StationChunkLoader" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$StationChunkLoader$AttachedLoader} from "com.hlysine.create_power_loader.content.trains.StationChunkLoader$AttachedLoader"
import {$LoaderType, $LoaderType$$Type} from "com.hlysine.create_power_loader.content.LoaderType"
import {$LoaderMode} from "com.hlysine.create_power_loader.content.LoaderMode"
import {$Pair} from "net.createmod.catnip.data.Pair"
import {$ChunkLoadManager$LoadedChunkPos} from "com.hlysine.create_power_loader.content.ChunkLoadManager$LoadedChunkPos"
import {$TrackGraph$$Type} from "com.simibubi.create.content.trains.graph.TrackGraph"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Set} from "java.util.Set"
import {$ChunkLoader$$Interface} from "com.hlysine.create_power_loader.content.ChunkLoader"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GlobalStation$$Type} from "com.simibubi.create.content.trains.station.GlobalStation"

export class $StationChunkLoader implements $ChunkLoader$$Interface {
readonly "attachments": $Set<($StationChunkLoader$AttachedLoader)>
readonly "forcedChunks": $Set<($ChunkLoadManager$LoadedChunkPos)>

constructor(arg0: $GlobalStation$$Type)

public "getLocation"(): $Pair<($ResourceLocation), ($BlockPos)>
public "write"(): $CompoundTag
public static "read"(arg0: $GlobalStation$$Type, arg1: $CompoundTag$$Type): $StationChunkLoader
public "tick"(arg0: $TrackGraph$$Type, arg1: boolean): void
public "getForcedChunks"(): $Set<($ChunkLoadManager$LoadedChunkPos)>
public "onRemove"(): void
public "addAttachment"(arg0: $LoaderType$$Type, arg1: $BlockPos$$Type): void
public "getLoaderType"(): $LoaderType
public "getLoaderMode"(): $LoaderMode
public "removeAttachment"(arg0: $BlockPos$$Type): void
public "addToManager"(): void
public static "isEnabledForStation"(arg0: $LoaderType$$Type): boolean
public "removeFromManager"(): void
get "location"(): $Pair<($ResourceLocation), ($BlockPos)>
get "loaderType"(): $LoaderType
get "loaderMode"(): $LoaderMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StationChunkLoader$$Type = ($StationChunkLoader);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StationChunkLoader$$Original = $StationChunkLoader;}
declare module "com.hlysine.create_power_loader.content.ChunkLoadManager$LoadedChunkPos" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$Record} from "java.lang.Record"

export class $ChunkLoadManager$LoadedChunkPos extends $Record {
constructor(dimension: $ResourceLocation$$Type, chunkPos: $ChunkPos$$Type)
constructor(arg0: $Level$$Type, arg1: $BlockPos$$Type)
constructor(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer)
constructor(arg0: $Level$$Type, arg1: long)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "x"(): integer
public "z"(): integer
public "dimension"(): $ResourceLocation
public "chunkPos"(): $ChunkPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkLoadManager$LoadedChunkPos$$Type = ({"chunkPos"?: $ChunkPos$$Type, "dimension"?: $ResourceLocation$$Type}) | ([chunkPos?: $ChunkPos$$Type, dimension?: $ResourceLocation$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkLoadManager$LoadedChunkPos$$Original = $ChunkLoadManager$LoadedChunkPos;}
