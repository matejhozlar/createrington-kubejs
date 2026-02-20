declare module "xaero.map.file.MapSaveLoad" {
import {$LeveledRegion, $LeveledRegion$$Type} from "xaero.map.region.LeveledRegion"
import {$MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$ArrayList} from "java.util.ArrayList"
import {$HolderLookup$$Type} from "net.minecraft.core.HolderLookup"
import {$MapRegion, $MapRegion$$Type} from "xaero.map.region.MapRegion"
import {$MapDimension$$Type} from "xaero.map.world.MapDimension"
import {$File, $File$$Type} from "java.io.File"
import {$MapTileSelection$$Type} from "xaero.map.gui.MapTileSelection"
import {$ExportScreen$$Type} from "xaero.map.gui.ExportScreen"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockStateShortShapeCache$$Type} from "xaero.map.cache.BlockStateShortShapeCache"
import {$RegionDetection$$Type} from "xaero.map.file.RegionDetection"
import {$BranchLeveledRegion$$Type} from "xaero.map.region.BranchLeveledRegion"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$PNGExporter$$Type} from "xaero.map.file.export.PNGExporter"
import {$OldFormatSupport, $OldFormatSupport$$Type} from "xaero.map.file.OldFormatSupport"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$MapRegionInfo$$Type} from "xaero.map.file.MapRegionInfo"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$BiomeGetter$$Type} from "xaero.map.biome.BiomeGetter"
import {$OverlayManager$$Type} from "xaero.map.region.OverlayManager"

export class $MapSaveLoad {
static readonly "currentCacheSaveMinorVersion": integer
 "saveAll": boolean
static readonly "currentCacheSaveMajorVersion": integer
 "loadingFiles": boolean
static readonly "SAVE_TIME": integer
 "mainTextureLevel": integer

constructor(arg0: $OverlayManager$$Type, arg1: $PNGExporter$$Type, arg2: $OldFormatSupport$$Type, arg3: $BlockStateShortShapeCache$$Type)

public "run"(arg0: $HolderLookup$$Type<($Block$$Type)>, arg1: $Registry$$Type<($Block$$Type)>, arg2: $Registry$$Type<($Fluid$$Type)>, arg3: $BiomeGetter$$Type, arg4: $Registry$$Type<($Biome$$Type)>): void
public "getFile"(arg0: $MapRegion$$Type): $File
public static "getRootFolder"(arg0: StringJS): $Path
public "removeToCache"(arg0: $LeveledRegion$$Type<(never)>): void
public "removeToCache"(arg0: $MapDimension$$Type, arg1: integer): $LeveledRegion<(never)>
public "setNextToLoadByViewing"(arg0: $LeveledRegion$$Type<(never)>): void
public "getNextToLoadByViewing"(): $LeveledRegion<(never)>
public "isRegionDetectionComplete"(): boolean
public "safeDelete"(arg0: $Path$$Type, arg1: StringJS): void
public "loadRegion"(arg0: $MapRegion$$Type, arg1: $HolderLookup$$Type<($Block$$Type)>, arg2: $Registry$$Type<($Block$$Type)>, arg3: $Registry$$Type<($Fluid$$Type)>, arg4: $BiomeGetter$$Type, arg5: boolean, arg6: integer): boolean
public "safeMoveAndReplace"(arg0: $Path$$Type, arg1: $Path$$Type, arg2: StringJS, arg3: StringJS): void
public "addToLoad"(arg0: $MapRegion$$Type, arg1: StringJS, arg2: boolean): void
public "beingSaved"(arg0: $MapDimension$$Type, arg1: integer, arg2: integer): boolean
public "getSizeOfToLoad"(): integer
public "requestBranchCache"(arg0: $BranchLeveledRegion$$Type, arg1: StringJS): void
public "requestBranchCache"(arg0: $BranchLeveledRegion$$Type, arg1: StringJS, arg2: boolean): void
public "requestLoad"(arg0: $MapRegion$$Type, arg1: StringJS): void
public "requestLoad"(arg0: $MapRegion$$Type, arg1: StringJS, arg2: boolean): void
public "setMapProcessor"(arg0: $MapProcessor$$Type): void
public "removeTempCacheRequest"(arg0: $File$$Type): boolean
public "addTempCacheRequest"(arg0: $File$$Type): void
public "getToSave"(): $ArrayList<($MapRegion)>
public "detectRegions"(arg0: integer): void
public "clearToLoad"(): void
public "requestCache"(arg0: $LeveledRegion$$Type<(never)>): void
public "getOldFolder"(arg0: StringJS, arg1: StringJS): $Path
public "getCaveLayerFolder"(arg0: integer, arg1: $Path$$Type): $Path
public "saveExists"(arg0: $MapRegion$$Type): boolean
public "backupFile"(arg0: $File$$Type, arg1: integer): void
public "exportPNG"(arg0: $ExportScreen$$Type, arg1: $MapTileSelection$$Type): boolean
public "updateSave"(arg0: $LeveledRegion$$Type<(never)>, arg1: long, arg2: integer): void
public "getSizeOfToLoadBranchCache"(): integer
public "getMainFolder"(arg0: StringJS, arg1: StringJS): $Path
public "getMWSubFolder"(arg0: StringJS, arg1: StringJS, arg2: StringJS): $Path
public "getCacheFile"(arg0: $MapRegionInfo$$Type, arg1: integer, arg2: boolean, arg3: boolean): $File
public "toCacheContains"(arg0: $LeveledRegion$$Type<(never)>): boolean
public "removeToLoad"(arg0: $MapRegion$$Type): void
public "setRegionDetectionComplete"(arg0: boolean): void
public "detectRegionsFromFiles"(arg0: $MapDimension$$Type, arg1: StringJS, arg2: StringJS, arg3: StringJS, arg4: $Path$$Type, arg5: StringJS, arg6: integer, arg7: integer, arg8: integer, arg9: integer, arg10: $Consumer$$Type<($RegionDetection)>): void
public "getOldFormatSupport"(): $OldFormatSupport
public "getNormalFile"(arg0: $MapRegion$$Type): $File
public "getTempFile"(arg0: $File$$Type): $File
set "nextToLoadByViewing"(value: $LeveledRegion$$Type<(never)>)
get "nextToLoadByViewing"(): $LeveledRegion<(never)>
get "regionDetectionComplete"(): boolean
get "sizeOfToLoad"(): integer
set "mapProcessor"(value: $MapProcessor$$Type)
get "toSave"(): $ArrayList<($MapRegion)>
get "sizeOfToLoadBranchCache"(): integer
set "regionDetectionComplete"(value: boolean)
get "oldFormatSupport"(): $OldFormatSupport
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapSaveLoad$$Type = ($MapSaveLoad);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapSaveLoad$$Original = $MapSaveLoad;}
declare module "xaero.map.file.MapRegionInfo" {
import {$File, $File$$Type} from "java.io.File"

export interface $MapRegionInfo$$Interface {
get "regionZ"(): integer
get "regionX"(): integer
get "worldId"(): StringJS
get "mwId"(): StringJS
get "cacheFile"(): $File
set "cacheFile"(value: $File$$Type)
get "regionFile"(): $File
get "dimId"(): StringJS
}

export class $MapRegionInfo implements $MapRegionInfo$$Interface {
 "getRegionZ"(): integer
 "getRegionX"(): integer
 "shouldCache"(): boolean
 "getWorldId"(): StringJS
 "getMwId"(): StringJS
 "getCacheFile"(): $File
 "hasLookedForCache"(): boolean
 "setShouldCache"(arg0: boolean, arg1: StringJS): void
 "setCacheFile"(arg0: $File$$Type): void
 "getRegionFile"(): $File
 "getDimId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapRegionInfo$$Type = ($MapRegionInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapRegionInfo$$Original = $MapRegionInfo;}
declare module "xaero.map.file.RegionDetection" {
import {$MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$MapRegion$$Type} from "xaero.map.region.MapRegion"
import {$MapRegionInfo$$Interface} from "xaero.map.file.MapRegionInfo"
import {$File, $File$$Type} from "java.io.File"
import {$ILinkedChainNode, $ILinkedChainNode$$Type, $ILinkedChainNode$$Interface} from "xaero.map.util.linked.ILinkedChainNode"

export class $RegionDetection implements $MapRegionInfo$$Interface, $ILinkedChainNode$$Interface<($RegionDetection)> {
constructor(arg0: StringJS, arg1: StringJS, arg2: StringJS, arg3: integer, arg4: integer, arg5: $File$$Type, arg6: integer, arg7: boolean)

public "isDestroyed"(): boolean
public "setPrevious"(arg0: $RegionDetection$$Type): void
public "setPrevious"(arg0: $ILinkedChainNode$$Type): void
public "getPrevious"(): $RegionDetection
public "getRegionZ"(): integer
public "getRegionX"(): integer
public "getNext"(): $ILinkedChainNode
public "setRemoved"(arg0: boolean): void
public "setNext"(arg0: $ILinkedChainNode$$Type): void
public "setNext"(arg0: $RegionDetection$$Type): void
public "onDestroyed"(): void
public "isRemoved"(): boolean
public "shouldCache"(): boolean
public "transferInfoTo"(arg0: $MapRegion$$Type): void
public "getWorldId"(): StringJS
public "getMwId"(): StringJS
public "isHasHadTerrain"(): boolean
public "getCacheFile"(): $File
public "hasLookedForCache"(): boolean
public "setShouldCache"(arg0: boolean, arg1: StringJS): void
public "setCacheFile"(arg0: $File$$Type): void
public "getRegionFile"(): $File
public "getInitialVersion"(): integer
public "transferInfoFrom"(arg0: $MapRegion$$Type): void
public "transferInfoPostAddTo"(arg0: $MapRegion$$Type, arg1: $MapProcessor$$Type): void
public "getDimId"(): StringJS
get "destroyed"(): boolean
set "previous"(value: $RegionDetection$$Type)
set "previous"(value: $ILinkedChainNode$$Type)
get "previous"(): $RegionDetection
get "regionZ"(): integer
get "regionX"(): integer
get "next"(): $ILinkedChainNode
set "removed"(value: boolean)
set "next"(value: $ILinkedChainNode$$Type)
set "next"(value: $RegionDetection$$Type)
get "removed"(): boolean
get "worldId"(): StringJS
get "mwId"(): StringJS
get "hasHadTerrain"(): boolean
get "cacheFile"(): $File
set "cacheFile"(value: $File$$Type)
get "regionFile"(): $File
get "initialVersion"(): integer
get "dimId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegionDetection$$Type = ($RegionDetection);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegionDetection$$Original = $RegionDetection;}
declare module "xaero.map.file.OldFormatSupport" {
import {$MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ImmutableMap} from "com.google.common.collect.ImmutableMap"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $OldFormatSupport {
 "cc2BiomeRenames": $ImmutableMap<(StringJS), (StringJS)>

constructor()

public "fixBiome"(arg0: StringJS, arg1: integer): StringJS
public "fixBiome"(arg0: integer, arg1: integer): StringJS
public "fixBiome"(arg0: integer, arg1: integer, arg2: StringJS): StringJS
public "loadStates"(): void
public "fixBlock"(arg0: $CompoundTag$$Type, arg1: integer): void
public "getStateForId"(arg0: integer): $BlockState
public "loadModdedStates"(arg0: $MapProcessor$$Type, arg1: StringJS, arg2: StringJS, arg3: StringJS): void
public "loadVanillaStates"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OldFormatSupport$$Type = ($OldFormatSupport);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OldFormatSupport$$Original = $OldFormatSupport;}
