declare module "xaero.map.region.MapTileChunk" {
import {$MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$LeveledRegion$$Type} from "xaero.map.region.LeveledRegion"
import {$MapRegion, $MapRegion$$Type} from "xaero.map.region.MapRegion"
import {$DataInputStream$$Type} from "java.io.DataInputStream"
import {$MapUpdateFastConfig$$Type} from "xaero.map.region.MapUpdateFastConfig"
import {$BlockTintProvider$$Type} from "xaero.map.biome.BlockTintProvider"
import {$BlockStateShortShapeCache$$Type} from "xaero.map.cache.BlockStateShortShapeCache"
import {$MapTile, $MapTile$$Type} from "xaero.map.region.MapTile"
import {$DataOutputStream$$Type} from "java.io.DataOutputStream"
import {$LeafRegionTexture, $LeafRegionTexture$$Type} from "xaero.map.region.texture.LeafRegionTexture"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$OverlayManager$$Type} from "xaero.map.region.OverlayManager"

export class $MapTileChunk {
static readonly "SIDE_LENGTH": integer

constructor(arg0: $MapRegion$$Type, arg1: integer, arg2: integer)

public "toString"(): StringJS
public "clean"(arg0: $MapProcessor$$Type): void
public "getNeighbourTileChunk"(arg0: integer, arg1: integer, arg2: $MapProcessor$$Type, arg3: boolean): $MapTileChunk
public "wasChanged"(): boolean
public "getX"(): integer
public "getZ"(): integer
public "unincludeInSave"(): void
public "getTimer"(): integer
public "getTile"(arg0: integer, arg1: integer): $MapTile
public "setChanged"(arg0: boolean): void
public "setTile"(arg0: integer, arg1: integer, arg2: $MapTile$$Type, arg3: $BlockStateShortShapeCache$$Type): void
public "setHasHighlights"(arg0: boolean): void
public "hasHighlightsIfUndiscovered"(): boolean
public "hasHadTerrain"(): boolean
public "updateBuffers"(arg0: $MapProcessor$$Type, arg1: $BlockTintProvider$$Type, arg2: $OverlayManager$$Type, arg3: boolean, arg4: $BlockStateShortShapeCache$$Type, arg5: $MapUpdateFastConfig$$Type): void
public "getLoadState"(): integer
public "setLoadState"(arg0: byte): void
public "includeInSave"(): boolean
public "setHasHadTerrain"(): void
public "getLeafTexture"(): $LeafRegionTexture
public "setToUpdateBuffers"(arg0: boolean): void
public "getToUpdateBuffers"(): boolean
public "getTileGridsCache"(): ((byte)[])[]
public "decTimer"(): void
public "setHasHighlightsIfUndiscovered"(arg0: boolean): void
public "unsetHasHadTerrain"(): void
public "readCacheData"(arg0: integer, arg1: integer, arg2: $DataInputStream$$Type, arg3: (byte)[], arg4: (byte)[], arg5: $MapProcessor$$Type, arg6: integer, arg7: integer): void
public "putColour"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: $ByteBuffer$$Type, arg7: integer): void
public "resetHeights"(): void
public "writeCacheData"(arg0: $DataOutputStream$$Type, arg1: (byte)[], arg2: (byte)[], arg3: $LeveledRegion$$Type<($LeafRegionTexture$$Type)>): void
public "getInRegion"(): $MapRegion
public "hasHighlights"(): boolean
get "x"(): integer
get "z"(): integer
get "timer"(): integer
set "changed"(value: boolean)
get "loadState"(): integer
set "loadState"(value: byte)
get "leafTexture"(): $LeafRegionTexture
set "toUpdateBuffers"(value: boolean)
get "toUpdateBuffers"(): boolean
get "tileGridsCache"(): ((byte)[])[]
get "inRegion"(): $MapRegion
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapTileChunk$$Type = ($MapTileChunk);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapTileChunk$$Original = $MapTileChunk;}
declare module "xaero.map.region.LayeredRegionManager" {
import {$LeveledRegion, $LeveledRegion$$Type} from "xaero.map.region.LeveledRegion"
import {$MapRegion, $MapRegion$$Type} from "xaero.map.region.MapRegion"
import {$MapLayer, $MapLayer$$Type} from "xaero.map.region.MapLayer"
import {$MapDimension$$Type} from "xaero.map.world.MapDimension"
import {$List} from "java.util.List"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set} from "java.util.Set"

export class $LayeredRegionManager {
constructor(arg0: $MapDimension$$Type)

public "remove"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): boolean
public "size"(): integer
public "get"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $LeveledRegion<(never)>
public "clear"(): void
public "getLayer"(arg0: integer): $MapLayer
public "getLoadedRegion"(arg0: integer): $LeveledRegion<(never)>
public "applyToEachLoadedLayer"(arg0: $BiConsumer$$Type<(integer), ($MapLayer)>): void
public "getLoadedListUnsynced"(): $List<($LeveledRegion<(never)>)>
public "loadedCount"(): integer
public "bumpLoadedRegion"(arg0: $LeveledRegion$$Type<(never)>): void
public "bumpLoadedRegion"(arg0: $MapRegion$$Type): void
public "removeListRegion"(arg0: $LeveledRegion$$Type<(never)>): void
public "removeLoadedRegion"(arg0: $LeveledRegion$$Type<(never)>): void
public "preDetection"(): void
public "addListRegion"(arg0: $LeveledRegion$$Type<(never)>): void
public "putLeaf"(arg0: integer, arg1: integer, arg2: $MapRegion$$Type): void
public "getLeaf"(arg0: integer, arg1: integer, arg2: integer): $MapRegion
public "getUnsyncedSet"(): $Set<($LeveledRegion<(never)>)>
public "onClearCachedHighlightHash"(arg0: integer, arg1: integer): void
public "onClearCachedHighlightHashes"(): void
public "addLoadedRegion"(arg0: $LeveledRegion$$Type<(never)>): void
get "loadedListUnsynced"(): $List<($LeveledRegion<(never)>)>
get "unsyncedSet"(): $Set<($LeveledRegion<(never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LayeredRegionManager$$Type = ($LayeredRegionManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LayeredRegionManager$$Original = $LayeredRegionManager;}
declare module "xaero.map.region.MapUpdateFastConfig" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $MapUpdateFastConfig {
readonly "stainedGlass": boolean
readonly "terrainDepth": boolean
readonly "biomeColorsInVanilla": boolean
readonly "adjustHeightForShortBlocks": boolean
readonly "biomeBlending": boolean
readonly "blockColors": integer
readonly "legibleCaveMaps": boolean
readonly "terrainSlopes": integer

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapUpdateFastConfig$$Type = ($MapUpdateFastConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapUpdateFastConfig$$Original = $MapUpdateFastConfig;}
declare module "xaero.map.region.Overlay" {
import {$MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$MapDimension$$Type} from "xaero.map.world.MapDimension"
import {$BlockPos$MutableBlockPos$$Type} from "net.minecraft.core.BlockPos$MutableBlockPos"
import {$MapTileChunk$$Type} from "xaero.map.region.MapTileChunk"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$MapUpdateFastConfig$$Type} from "xaero.map.region.MapUpdateFastConfig"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockTintProvider$$Type} from "xaero.map.biome.BlockTintProvider"
import {$MapWriter$$Type} from "xaero.map.MapWriter"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$MapTile$$Type} from "xaero.map.region.MapTile"
import {$MapPixel} from "xaero.map.region.MapPixel"
import {$Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$DimensionType$$Type} from "net.minecraft.world.level.dimension.DimensionType"
import {$OverlayManager$$Type} from "xaero.map.region.OverlayManager"
import {$MapBlock$$Type} from "xaero.map.region.MapBlock"

export class $Overlay extends $MapPixel {
constructor(arg0: $BlockState$$Type, arg1: byte, arg2: boolean)

public "equals"(arg0: $Overlay$$Type): boolean
public "write"(arg0: $BlockState$$Type, arg1: byte, arg2: boolean): void
public "getPixelColour"(arg0: $MapBlock$$Type, arg1: (integer)[], arg2: $MapWriter$$Type, arg3: $Level$$Type, arg4: $MapDimension$$Type, arg5: $Registry$$Type<($Block$$Type)>, arg6: $MapTileChunk$$Type, arg7: $MapTileChunk$$Type, arg8: $MapTileChunk$$Type, arg9: $MapTileChunk$$Type, arg10: $MapTile$$Type, arg11: integer, arg12: integer, arg13: integer, arg14: integer, arg15: $BlockPos$MutableBlockPos$$Type, arg16: $Registry$$Type<($Biome$$Type)>, arg17: $Registry$$Type<($DimensionType$$Type)>, arg18: float, arg19: float, arg20: float, arg21: $BlockTintProvider$$Type, arg22: $MapProcessor$$Type, arg23: $OverlayManager$$Type, arg24: $MapUpdateFastConfig$$Type): void
public "getOpacity"(): integer
public "toRenderString"(): StringJS
public "increaseOpacity"(arg0: integer): void
public "isWater"(): boolean
public "getParametres"(): integer
get "opacity"(): integer
get "water"(): boolean
get "parametres"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Overlay$$Type = ($Overlay);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Overlay$$Original = $Overlay;}
declare module "xaero.map.region.BranchLeveledRegion" {
import {$MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$LeveledRegion} from "xaero.map.region.LeveledRegion"
import {$ArrayList$$Type} from "java.util.ArrayList"
import {$MapDimension$$Type} from "xaero.map.world.MapDimension"
import {$File, $File$$Type} from "java.io.File"
import {$List$$Type} from "java.util.List"
import {$MapSaveLoad$$Type} from "xaero.map.file.MapSaveLoad"
import {$BranchRegionTexture, $BranchRegionTexture$$Type} from "xaero.map.region.texture.BranchRegionTexture"
import {$RegionTexture, $RegionTexture$$Type} from "xaero.map.region.texture.RegionTexture"

export class $BranchLeveledRegion extends $LeveledRegion<($BranchRegionTexture)> {
 "activeBranchUpdateReferences": integer
static readonly "CHILD_LENGTH_IN_TEXTURES": integer
 "leafTextureVersionSum": ((integer)[])[]
static readonly "SIDE_LENGTH": integer
static readonly "MAX_COORD_WITHIN_CHILD": integer

constructor(arg0: StringJS, arg1: StringJS, arg2: StringJS, arg3: $MapDimension$$Type, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: $BranchLeveledRegion$$Type)

public "isEmpty"(): boolean
public "isLoaded"(): boolean
public "checkForUpdates"(arg0: $MapProcessor$$Type, arg1: boolean, arg2: (boolean)[], arg3: $ArrayList$$Type<($BranchLeveledRegion$$Type)>, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer): void
public "setLoaded"(arg0: boolean): void
public "setShouldCheckForUpdatesSingle"(arg0: boolean): void
public "startDownloadingTexturesForCache"(arg0: $MapProcessor$$Type): void
public "getTexture"(arg0: integer, arg1: integer): $RegionTexture
public "setShouldCheckForUpdatesRecursive"(arg0: boolean): void
public "createTexture"(arg0: integer, arg1: integer): $BranchRegionTexture
public "addDebugLines"(arg0: $List$$Type<(StringJS)>, arg1: $MapProcessor$$Type, arg2: integer, arg3: integer): void
public "hasTextures"(): boolean
public "loadingAnimation"(): boolean
public "afterLimiterRemoval"(arg0: $MapProcessor$$Type): void
public "postTextureUpdate"(): void
public "eligibleForSaving"(arg0: long): boolean
public "putTexture"(arg0: integer, arg1: integer, arg2: $RegionTexture$$Type): void
public "putTexture"(arg0: integer, arg1: integer, arg2: $BranchRegionTexture$$Type): void
public "postCache"(arg0: $File$$Type, arg1: $MapSaveLoad$$Type, arg2: boolean): void
public "preCache"(): void
public "cleanAndCacheRequestsBlocked"(): boolean
public "shouldEndProcessingAfterUpload"(): boolean
public "findCacheFile"(arg0: $MapSaveLoad$$Type): $File
public "onCurrentDimFinish"(arg0: $MapSaveLoad$$Type, arg1: $MapProcessor$$Type): void
public "onProcessingEnd"(): void
public "onLimiterRemoval"(arg0: $MapProcessor$$Type): void
public "skipCaching"(arg0: integer): boolean
public "shouldBeProcessed"(): boolean
public "preCacheLoad"(): void
get "empty"(): boolean
get "loaded"(): boolean
set "loaded"(value: boolean)
set "shouldCheckForUpdatesSingle"(value: boolean)
set "shouldCheckForUpdatesRecursive"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BranchLeveledRegion$$Type = ($BranchLeveledRegion);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BranchLeveledRegion$$Original = $BranchLeveledRegion;}
declare module "xaero.map.region.MapTile" {
import {$PoolUnit$$Interface} from "xaero.map.pool.PoolUnit"
import {$MapBlock, $MapBlock$$Type} from "xaero.map.region.MapBlock"

export class $MapTile implements $PoolUnit$$Interface {
static readonly "CURRENT_WORLD_INTERPRETATION_VERSION": integer

constructor(...arg0: (any)[])

public "create"(...arg0: (any)[]): void
public "isLoaded"(): boolean
public "getWrittenCaveStart"(): integer
public "getWrittenCaveDepth"(): integer
public "setLoaded"(arg0: boolean): void
public "getBlock"(arg0: integer, arg1: integer): $MapBlock
public "setBlock"(arg0: integer, arg1: integer, arg2: $MapBlock$$Type): void
public "getChunkX"(): integer
public "getChunkZ"(): integer
public "setWorldInterpretationVersion"(arg0: integer): void
public "wasWrittenOnce"(): boolean
public "setWrittenOnce"(arg0: boolean): void
public "setWrittenCave"(arg0: integer, arg1: integer): void
public "getBlockColumn"(arg0: integer): ($MapBlock)[]
public "getWorldInterpretationVersion"(): integer
get "loaded"(): boolean
get "writtenCaveStart"(): integer
get "writtenCaveDepth"(): integer
set "loaded"(value: boolean)
get "chunkX"(): integer
get "chunkZ"(): integer
set "worldInterpretationVersion"(value: integer)
set "writtenOnce"(value: boolean)
get "worldInterpretationVersion"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapTile$$Type = ($MapTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapTile$$Original = $MapTile;}
declare module "xaero.map.region.MapRegion" {
import {$MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$LeveledRegion} from "xaero.map.region.LeveledRegion"
import {$ArrayList$$Type} from "java.util.ArrayList"
import {$BlockPos$MutableBlockPos} from "net.minecraft.core.BlockPos$MutableBlockPos"
import {$MapDimension$$Type} from "xaero.map.world.MapDimension"
import {$MapTileChunk, $MapTileChunk$$Type} from "xaero.map.region.MapTileChunk"
import {$File, $File$$Type} from "java.io.File"
import {$List$$Type} from "java.util.List"
import {$MapSaveLoad$$Type} from "xaero.map.file.MapSaveLoad"
import {$BranchLeveledRegion$$Type} from "xaero.map.region.BranchLeveledRegion"
import {$OldFormatSupport$$Type} from "xaero.map.file.OldFormatSupport"
import {$MapRegionInfo$$Interface} from "xaero.map.file.MapRegionInfo"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$RegionTexture, $RegionTexture$$Type} from "xaero.map.region.texture.RegionTexture"
import {$LeafRegionTexture, $LeafRegionTexture$$Type} from "xaero.map.region.texture.LeafRegionTexture"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"

export class $MapRegion extends $LeveledRegion<($LeafRegionTexture)> implements $MapRegionInfo$$Interface {
 "activeBranchUpdateReferences": integer
 "leafTextureVersionSum": ((integer)[])[]
 "loadingNeededForBranchLevel": integer
readonly "writerThreadPauseSync": any
static readonly "SIDE_LENGTH": integer
 "loadingPrioritized": boolean

constructor(arg0: StringJS, arg1: StringJS, arg2: StringJS, arg3: $MapDimension$$Type, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: boolean, arg9: $Registry$$Type<($Biome$$Type)>)

public "clean"(arg0: $MapProcessor$$Type): void
public "isLoaded"(): boolean
public "setParent"(arg0: $BranchLeveledRegion$$Type): void
public "getVersion"(): integer
public "setVersion"(arg0: integer): void
public "requestRefresh"(arg0: $MapProcessor$$Type, arg1: boolean): void
public "requestRefresh"(arg0: $MapProcessor$$Type): void
public "shouldConvertCacheToOutdatedOnFinishDim"(): boolean
public "shouldAffectLoadingRequestFrequency"(): boolean
public "setOutdatedWithOtherLayers"(arg0: boolean): void
public "canRequestReload_unsynced"(): boolean
public "checkForUpdates"(arg0: $MapProcessor$$Type, arg1: boolean, arg2: (boolean)[], arg3: $ArrayList$$Type<($BranchLeveledRegion$$Type)>, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer): void
public "setChunk"(arg0: integer, arg1: integer, arg2: $MapTileChunk$$Type): void
public "isResting"(): boolean
public "getBiomeRegistry"(): $Registry<($Biome)>
public "getTexture"(arg0: integer, arg1: integer): $LeafRegionTexture
public "isRefreshing"(): boolean
public "setRefreshing"(arg0: boolean): void
public "getChunk"(arg0: integer, arg1: integer): $MapTileChunk
public "createTexture"(arg0: integer, arg1: integer): $RegionTexture
public "addDebugLines"(arg0: $List$$Type<(StringJS)>, arg1: $MapProcessor$$Type, arg2: integer, arg3: integer): void
public "getCacheHashCode"(): integer
public "loadingAnimation"(): boolean
public "caveStartOutdated"(arg0: integer, arg1: integer): boolean
public "getHighlightsHash"(): integer
public "hasHadTerrain"(): boolean
public "getReloadVersion"(): integer
public "hasVersion"(): boolean
public "isWritingPaused"(): boolean
public "registerVisit"(): void
public "getLoadState"(): byte
public "setBeingWritten"(arg0: boolean): void
public "getCaveStart"(): integer
public "setLoadState"(arg0: byte): void
public "setHasHadTerrain"(): void
public "isNormalMapData"(): boolean
public "updateTargetHighlightsHash"(): void
public "destroyBufferUpdateObjects"(): void
public "updateLeafTextureVersion"(arg0: integer, arg1: integer, arg2: integer): void
public "getPixelResultBuffer"(): (integer)[]
public "getMutableGlobalPos"(): $BlockPos$MutableBlockPos
public "afterLimiterRemoval"(arg0: $MapProcessor$$Type): void
public "convertCacheToOutdated"(arg0: $MapSaveLoad$$Type, arg1: StringJS): void
public "hasRemovableSourceData"(): boolean
public "restoreBufferUpdateObjects"(): void
public "getTargetHighlightsHash"(): integer
public "isOutdatedWithOtherLayers"(): boolean
public "getUpToDateCaveStart"(): integer
public "putTexture"(arg0: integer, arg1: integer, arg2: $LeafRegionTexture$$Type): void
public "putTexture"(arg0: integer, arg1: integer, arg2: $RegionTexture$$Type): void
public "getWorldId"(): StringJS
public "getMwId"(): StringJS
public "isResaving"(): boolean
public "postCache"(arg0: $File$$Type, arg1: $MapSaveLoad$$Type, arg2: boolean): void
public "preCache"(): void
public "processWhenLoadedChunksExist"(arg0: integer): void
public "cleanAndCacheRequestsBlocked"(): boolean
public "shouldEndProcessingAfterUpload"(): boolean
public "isBeingWritten"(): boolean
public "loadCacheTextures"(arg0: $MapProcessor$$Type, arg1: $Registry$$Type<($Biome$$Type)>, arg2: boolean, arg3: ((boolean)[])[], arg4: integer, arg5: (boolean)[], arg6: (boolean)[], arg7: integer, arg8: $OldFormatSupport$$Type): boolean
public "hasLookedForCache"(): boolean
public "setCaveStart"(arg0: integer): void
public "setHighlightsHash"(arg0: integer): void
public "getRegionFile"(): $File
public "setCacheHashCode"(arg0: integer): void
public "cancelRefresh"(arg0: $MapProcessor$$Type): void
public "findCacheFile"(arg0: $MapSaveLoad$$Type): $File
public "popWriterPause"(): void
public "onCurrentDimFinish"(arg0: $MapSaveLoad$$Type, arg1: $MapProcessor$$Type): void
public "setInitialVersion"(arg0: integer): void
public "setSaveExists"(arg0: boolean): void
public "onProcessingEnd"(): void
public "getInitialVersion"(): integer
public "onLimiterRemoval"(arg0: $MapProcessor$$Type): void
public "getSaveExists"(): boolean
public "setLastSaveTime"(arg0: long): void
public "restoreMetaData"(arg0: ((integer)[])[], arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: boolean, arg6: $MapProcessor$$Type): void
public "skipCaching"(arg0: integer): boolean
public "onDimensionClear"(arg0: $MapProcessor$$Type): void
public "getLastSaveTime"(): long
public "getLastVisited"(): long
public "setRegionFile"(arg0: $File$$Type): void
public "getTimeSinceVisit"(): long
public "clearRegion"(arg0: $MapProcessor$$Type): void
public "getExtraInfo"(): StringJS
public "pushWriterPause"(): void
public "setReloadVersion"(arg0: integer): void
public "shouldBeProcessed"(): boolean
public "countChunks"(): integer
public "setLookedForCache"(arg0: boolean): void
public "updateCaveMode"(): void
public "setResaving"(arg0: boolean): void
public "unsetHasHadTerrain"(): void
public "getCaveDepth"(): integer
public "getDimId"(): StringJS
public "getRegionZ"(): integer
public "getRegionX"(): integer
public "shouldCache"(): boolean
public "getCacheFile"(): $File
public "setShouldCache"(arg0: boolean, arg1: StringJS): void
public "setCacheFile"(arg0: $File$$Type): void
get "loaded"(): boolean
set "parent"(value: $BranchLeveledRegion$$Type)
get "version"(): integer
set "version"(value: integer)
set "outdatedWithOtherLayers"(value: boolean)
get "resting"(): boolean
get "biomeRegistry"(): $Registry<($Biome)>
get "refreshing"(): boolean
set "refreshing"(value: boolean)
get "cacheHashCode"(): integer
get "highlightsHash"(): integer
get "reloadVersion"(): integer
get "writingPaused"(): boolean
get "loadState"(): byte
set "beingWritten"(value: boolean)
get "caveStart"(): integer
set "loadState"(value: byte)
get "normalMapData"(): boolean
get "pixelResultBuffer"(): (integer)[]
get "mutableGlobalPos"(): $BlockPos$MutableBlockPos
get "targetHighlightsHash"(): integer
get "outdatedWithOtherLayers"(): boolean
get "upToDateCaveStart"(): integer
get "worldId"(): StringJS
get "mwId"(): StringJS
get "resaving"(): boolean
get "beingWritten"(): boolean
set "caveStart"(value: integer)
set "highlightsHash"(value: integer)
get "regionFile"(): $File
set "cacheHashCode"(value: integer)
set "initialVersion"(value: integer)
set "saveExists"(value: boolean)
get "initialVersion"(): integer
get "saveExists"(): boolean
set "lastSaveTime"(value: long)
get "lastSaveTime"(): long
get "lastVisited"(): long
set "regionFile"(value: $File$$Type)
get "timeSinceVisit"(): long
get "extraInfo"(): StringJS
set "reloadVersion"(value: integer)
set "lookedForCache"(value: boolean)
set "resaving"(value: boolean)
get "caveDepth"(): integer
get "dimId"(): StringJS
get "regionZ"(): integer
get "regionX"(): integer
get "cacheFile"(): $File
set "cacheFile"(value: $File$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapRegion$$Type = ($MapRegion);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapRegion$$Original = $MapRegion;}
declare module "xaero.map.region.LeveledRegion" {
import {$MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$ArrayList$$Type} from "java.util.ArrayList"
import {$MapDimension, $MapDimension$$Type} from "xaero.map.world.MapDimension"
import {$File, $File$$Type} from "java.io.File"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$List$$Type} from "java.util.List"
import {$MapSaveLoad$$Type} from "xaero.map.file.MapSaveLoad"
import {$BranchLeveledRegion, $BranchLeveledRegion$$Type} from "xaero.map.region.BranchLeveledRegion"
import {$FastPalette} from "xaero.map.palette.FastPalette"
import {$OldFormatSupport$$Type} from "xaero.map.file.OldFormatSupport"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$RegionTexture, $RegionTexture$$Type} from "xaero.map.region.texture.RegionTexture"
import {$DataOutputStream$$Type} from "java.io.DataOutputStream"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"

export class $LeveledRegion<T extends $RegionTexture<(object)>> implements $Comparable$$Interface<($LeveledRegion<(T)>)> {
 "activeBranchUpdateReferences": integer
 "leafTextureVersionSum": ((integer)[])[]
static readonly "SIDE_LENGTH": integer

constructor(arg0: StringJS, arg1: StringJS, arg2: StringJS, arg3: $MapDimension$$Type, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: $BranchLeveledRegion$$Type)

public "toString"(): StringJS
public "compareTo"(arg0: $LeveledRegion$$Type<(T)>): integer
public "compareTo"(arg0: any): integer
public "getParent"(): $BranchLeveledRegion
public "isLoaded"(): boolean
public "getLevel"(): integer
public "shouldAffectLoadingRequestFrequency"(): boolean
public "setAllCachePrepared"(arg0: boolean): void
public "checkForUpdates"(arg0: $MapProcessor$$Type, arg1: boolean, arg2: (boolean)[], arg3: $ArrayList$$Type<($BranchLeveledRegion$$Type)>, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer): void
public "getDim"(): $MapDimension
public "getRegionZ"(): integer
public "getRegionX"(): integer
public "getTexture"(arg0: integer, arg1: integer): T
public "isRefreshing"(): boolean
public "deleteBuffers"(): void
public "createTexture"(arg0: integer, arg1: integer): T
public "getBiomeKey"(arg0: integer): $ResourceKey<($Biome)>
public "calculateSortingChunkDistance"(): void
public "shouldAllowAnotherRegionToLoad"(): boolean
public "addDebugLines"(arg0: $List$$Type<(StringJS)>, arg1: $MapProcessor$$Type, arg2: integer, arg3: integer): void
public "hasTextures"(): boolean
public "getRootRegion"(): $LeveledRegion<(never)>
public "loadingAnimation"(): boolean
public "shouldCache"(): boolean
public "isMetaLoaded"(): boolean
public "getCaveLayer"(): integer
public static "setComparison"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "updateLeafTextureVersion"(arg0: integer, arg1: integer, arg2: integer): void
public "setRecacheHasBeenRequested"(arg0: boolean, arg1: StringJS): void
public "afterLimiterRemoval"(arg0: $MapProcessor$$Type): void
public "hasRemovableSourceData"(): boolean
public "deleteTexturesAndBuffers"(): void
public "getBiomePaletteIndex"(arg0: $ResourceKey$$Type<($Biome)>): integer
public "uncountTextureBiomes"(arg0: $RegionTexture$$Type<(never)>): void
public "onBiomeRemovedFromTexture"(arg0: integer): void
public "onBiomeAddedToTexture"(arg0: $ResourceKey$$Type<($Biome)>): integer
public "getBiomePaletteSize"(): integer
public "putTexture"(arg0: integer, arg1: integer, arg2: T): void
public "postCache"(arg0: $File$$Type, arg1: $MapSaveLoad$$Type, arg2: boolean): void
public "preCache"(): void
public "processWhenLoadedChunksExist"(arg0: integer): void
public "cleanAndCacheRequestsBlocked"(): boolean
public "shouldEndProcessingAfterUpload"(): boolean
public "getAndResetCachedTextureVersion"(arg0: integer, arg1: integer): integer
public "reloadHasBeenRequested"(): boolean
public "recacheHasBeenRequested"(): boolean
public "calculateSortingDistance"(): void
public "setReloadHasBeenRequested"(arg0: boolean, arg1: StringJS): void
public "loadCacheTextures"(arg0: $MapProcessor$$Type, arg1: $Registry$$Type<($Biome$$Type)>, arg2: boolean, arg3: ((boolean)[])[], arg4: integer, arg5: (boolean)[], arg6: (boolean)[], arg7: integer, arg8: $OldFormatSupport$$Type): boolean
public "getCacheFile"(): $File
public "setShouldCache"(arg0: boolean, arg1: StringJS): void
public "setCacheFile"(arg0: $File$$Type): void
public "resetBiomePalette"(): void
public "deleteGLBuffers"(): void
public "findCacheFile"(arg0: $MapSaveLoad$$Type): $File
public "onCurrentDimFinish"(arg0: $MapSaveLoad$$Type, arg1: $MapProcessor$$Type): void
public "onProcessingEnd"(): void
public "onLimiterRemoval"(arg0: $MapProcessor$$Type): void
public "skipCaching"(arg0: integer): boolean
public "onDimensionClear"(arg0: $MapProcessor$$Type): void
public "getExtraInfo"(): StringJS
public "shouldBeProcessed"(): boolean
public "saveBiomePalette"(arg0: $DataOutputStream$$Type): void
public "confirmMetaLoaded"(): void
public "isAllCachePrepared"(): boolean
public "saveCacheTextures"(arg0: $File$$Type, arg1: boolean, arg2: integer): boolean
public "ensureBiomePalette"(): void
public "getBiomePalette"(): $FastPalette<($ResourceKey<($Biome)>)>
get "parent"(): $BranchLeveledRegion
get "loaded"(): boolean
get "level"(): integer
set "allCachePrepared"(value: boolean)
get "dim"(): $MapDimension
get "regionZ"(): integer
get "regionX"(): integer
get "refreshing"(): boolean
get "rootRegion"(): $LeveledRegion<(never)>
get "metaLoaded"(): boolean
get "caveLayer"(): integer
get "biomePaletteSize"(): integer
get "cacheFile"(): $File
set "cacheFile"(value: $File$$Type)
get "extraInfo"(): StringJS
get "allCachePrepared"(): boolean
get "biomePalette"(): $FastPalette<($ResourceKey<($Biome)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LeveledRegion$$Type<T> = ($LeveledRegion<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LeveledRegion$$Original<T> = $LeveledRegion<(T)>;}
declare module "xaero.map.region.MapBlock" {
import {$MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$ArrayList} from "java.util.ArrayList"
import {$Overlay, $Overlay$$Type} from "xaero.map.region.Overlay"
import {$MapDimension$$Type} from "xaero.map.world.MapDimension"
import {$BlockPos$MutableBlockPos$$Type} from "net.minecraft.core.BlockPos$MutableBlockPos"
import {$MapTileChunk$$Type} from "xaero.map.region.MapTileChunk"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$MapUpdateFastConfig$$Type} from "xaero.map.region.MapUpdateFastConfig"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockTintProvider$$Type} from "xaero.map.biome.BlockTintProvider"
import {$BlockStateShortShapeCache$$Type} from "xaero.map.cache.BlockStateShortShapeCache"
import {$MapWriter$$Type} from "xaero.map.MapWriter"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$MapTile$$Type} from "xaero.map.region.MapTile"
import {$MapPixel} from "xaero.map.region.MapPixel"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$DimensionType$$Type} from "net.minecraft.world.level.dimension.DimensionType"
import {$OverlayManager$$Type} from "xaero.map.region.OverlayManager"

export class $MapBlock extends $MapPixel {
constructor()

public "addOverlay"(arg0: $Overlay$$Type): void
public "equals"(arg0: $MapBlock$$Type, arg1: boolean): boolean
public "write"(arg0: $BlockState$$Type, arg1: integer, arg2: integer, arg3: $ResourceKey$$Type<($Biome)>, arg4: byte, arg5: boolean, arg6: boolean): void
public "equalsSlopesExcluded"(arg0: $MapBlock$$Type): boolean
public "getNumberOfOverlays"(): integer
public "getBiome"(): $ResourceKey<($Biome)>
public "setHeight"(arg0: integer): void
public "getHeight"(): integer
public "setBiome"(arg0: $ResourceKey$$Type<($Biome)>): void
public "getPixelColour"(arg0: (integer)[], arg1: $MapWriter$$Type, arg2: $Level$$Type, arg3: $MapDimension$$Type, arg4: $Registry$$Type<($Block$$Type)>, arg5: $MapTileChunk$$Type, arg6: $MapTileChunk$$Type, arg7: $MapTileChunk$$Type, arg8: $MapTileChunk$$Type, arg9: $MapTile$$Type, arg10: integer, arg11: integer, arg12: integer, arg13: integer, arg14: $BlockPos$MutableBlockPos$$Type, arg15: $Registry$$Type<($Biome$$Type)>, arg16: $Registry$$Type<($DimensionType$$Type)>, arg17: float, arg18: float, arg19: float, arg20: $BlockTintProvider$$Type, arg21: $MapProcessor$$Type, arg22: $OverlayManager$$Type, arg23: integer, arg24: integer, arg25: $BlockStateShortShapeCache$$Type, arg26: $MapUpdateFastConfig$$Type): void
public "isGrass"(): boolean
public "toRenderString"(arg0: $Registry$$Type<($Biome$$Type)>): StringJS
public "getTopHeight"(): integer
public "getEffectiveHeight"(arg0: boolean): integer
public "getEffectiveHeight"(arg0: $BlockStateShortShapeCache$$Type, arg1: $MapUpdateFastConfig$$Type): integer
public "getOverlays"(): $ArrayList<($Overlay)>
public "prepareForWriting"(arg0: integer): void
public "fixHeightType"(arg0: integer, arg1: integer, arg2: $MapTile$$Type, arg3: $MapTileChunk$$Type, arg4: $MapTileChunk$$Type, arg5: $MapTileChunk$$Type, arg6: $MapTileChunk$$Type, arg7: integer, arg8: boolean, arg9: $BlockStateShortShapeCache$$Type, arg10: $MapUpdateFastConfig$$Type): void
public "setSlopeUnknown"(arg0: boolean): void
public "getEffectiveTopHeight"(arg0: boolean): integer
public "getParametres"(): integer
public "setTopHeight"(arg0: integer): void
public "setVerticalSlope"(arg0: byte): void
public "getDiagonalSlope"(): byte
public "setDiagonalSlope"(arg0: byte): void
public "getVerticalSlope"(): byte
get "numberOfOverlays"(): integer
get "biome"(): $ResourceKey<($Biome)>
set "height"(value: integer)
get "height"(): integer
set "biome"(value: $ResourceKey$$Type<($Biome)>)
get "grass"(): boolean
get "topHeight"(): integer
get "overlays"(): $ArrayList<($Overlay)>
set "slopeUnknown"(value: boolean)
get "parametres"(): integer
set "topHeight"(value: integer)
set "verticalSlope"(value: byte)
get "diagonalSlope"(): byte
set "diagonalSlope"(value: byte)
get "verticalSlope"(): byte
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapBlock$$Type = ($MapBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapBlock$$Original = $MapBlock;}
declare module "xaero.map.region.OverlayManager" {
import {$Overlay, $Overlay$$Type} from "xaero.map.region.Overlay"

export class $OverlayManager {
constructor()

public "getOriginal"(arg0: $Overlay$$Type): $Overlay
public "getNumberOfUniqueOverlays"(): integer
get "numberOfUniqueOverlays"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OverlayManager$$Type = ($OverlayManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OverlayManager$$Original = $OverlayManager;}
