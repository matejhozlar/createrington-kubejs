declare module "xaero.map.file.worldsave.WorldDataReader" {
import {$MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$HolderLookup$$Type} from "net.minecraft.core.HolderLookup"
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$MapRegion$$Type} from "xaero.map.region.MapRegion"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockStateShortShapeCache$$Type} from "xaero.map.cache.BlockStateShortShapeCache"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$Executor$$Type} from "xaero.map.executor.Executor"
import {$RegionFile$$Type} from "net.minecraft.world.level.chunk.storage.RegionFile"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$WorldDataBiomeManager$$Type} from "xaero.map.file.worldsave.biome.WorldDataBiomeManager"
import {$OverlayManager$$Type} from "xaero.map.region.OverlayManager"

export class $WorldDataReader {
 "taskCreationSync": any

constructor(arg0: $OverlayManager$$Type, arg1: $BlockStateShortShapeCache$$Type, arg2: $WorldDataBiomeManager$$Type, arg3: long)

public "readChunk"(arg0: $RegionFile$$Type, arg1: $ChunkPos$$Type): $CompoundTag
public "setMapProcessor"(arg0: $MapProcessor$$Type): void
public "buildRegion"(arg0: $MapRegion$$Type, arg1: $ServerLevel$$Type, arg2: $HolderLookup$$Type<($Block$$Type)>, arg3: $Registry$$Type<($Block$$Type)>, arg4: $Registry$$Type<($Fluid$$Type)>, arg5: boolean, arg6: (integer)[], arg7: $Executor$$Type): boolean
set "mapProcessor"(value: $MapProcessor$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldDataReader$$Type = ($WorldDataReader);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldDataReader$$Original = $WorldDataReader;}
declare module "xaero.map.file.worldsave.WorldDataHandler" {
import {$MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$HolderLookup$$Type} from "net.minecraft.core.HolderLookup"
import {$MapRegion$$Type} from "xaero.map.region.MapRegion"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$WorldDataReader, $WorldDataReader$$Type} from "xaero.map.file.worldsave.WorldDataReader"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$WorldDataHandler$Result} from "xaero.map.file.worldsave.WorldDataHandler$Result"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$Executor$$Type} from "xaero.map.executor.Executor"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Path} from "java.nio.file.Path"

export class $WorldDataHandler {
constructor(arg0: $WorldDataReader$$Type, arg1: $Executor$$Type)

public "handleRenderExecutor"(): void
public static "onServerWorldUnload"(arg0: $ServerLevel$$Type): void
public "buildRegion"(arg0: $MapRegion$$Type, arg1: $HolderLookup$$Type<($Block$$Type)>, arg2: $Registry$$Type<($Block$$Type)>, arg3: $Registry$$Type<($Fluid$$Type)>, arg4: boolean, arg5: (integer)[]): $WorldDataHandler$Result
public "getWorldDir"(): $Path
public "getWorldDataReader"(): $WorldDataReader
public "getWorldServer"(): $ServerLevel
public "prepareSingleplayer"(arg0: $Level$$Type, arg1: $MapProcessor$$Type): void
get "worldDir"(): $Path
get "worldDataReader"(): $WorldDataReader
get "worldServer"(): $ServerLevel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldDataHandler$$Type = ($WorldDataHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldDataHandler$$Original = $WorldDataHandler;}
declare module "xaero.map.file.worldsave.WorldDataHandler$Result" {
import {$Enum} from "java.lang.Enum"

export class $WorldDataHandler$Result extends $Enum<($WorldDataHandler$Result)> {
static readonly "SUCCESS": $WorldDataHandler$Result
static readonly "CANCEL": $WorldDataHandler$Result
static readonly "FAIL": $WorldDataHandler$Result

public static "values"(): ($WorldDataHandler$Result)[]
public static "valueOf"(arg0: StringJS): $WorldDataHandler$Result
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldDataHandler$Result$$Type = (("success") | ("fail") | ("cancel"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldDataHandler$Result$$Original = $WorldDataHandler$Result;}
