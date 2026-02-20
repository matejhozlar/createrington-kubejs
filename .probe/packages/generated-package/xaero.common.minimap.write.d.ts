declare module "xaero.common.minimap.write.MinimapWriterHelper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $MinimapWriterHelper {
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapWriterHelper$$Type = ($MinimapWriterHelper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinimapWriterHelper$$Original = $MinimapWriterHelper;}
declare module "xaero.common.minimap.write.MinimapWriter" {
import {$MinimapTile, $MinimapTile$$Type} from "xaero.common.minimap.region.MinimapTile"
import {$BlockPos$MutableBlockPos$$Type} from "net.minecraft.core.BlockPos$MutableBlockPos"
import {$List$$Type} from "java.util.List"
import {$MinimapChunk, $MinimapChunk$$Type} from "xaero.common.minimap.region.MinimapChunk"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockStateShortShapeCache$$Type} from "xaero.common.cache.BlockStateShortShapeCache"
import {$MinimapWriterHelper$$Type} from "xaero.common.minimap.write.MinimapWriterHelper"
import {$Heightmap$Types$$Type} from "net.minecraft.world.level.levelgen.Heightmap$Types"
import {$HighlighterRegistry$$Type} from "xaero.common.minimap.highlight.HighlighterRegistry"
import {$IXaeroMinimap$$Type} from "xaero.common.IXaeroMinimap"
import {$LevelChunk$$Type} from "net.minecraft.world.level.chunk.LevelChunk"
import {$DimensionHighlighterHandler} from "xaero.common.minimap.highlight.DimensionHighlighterHandler"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$MinimapSession$$Type} from "xaero.hud.minimap.module.MinimapSession"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MinimapWriter {
 "maxTime": long
static readonly "NO_Y_VALUE": integer
 "loadingLightOverlayMaxLight": integer
 "averageTimeDebug": long
 "totalTime": long
 "loadingLightOverlayColor": integer
 "loadedLightOverlayMaxLight": integer
 "writeFreeSinceLastWrite": long
 "minTimeDebug": long
static readonly "SUN_MINIMUM": integer
 "loadedLightOverlayType": integer
 "debugTotalTime": boolean
 "lastDebugTime": long
 "loadedLightOverlayColor": integer
 "loadingLightOverlayMinLight": integer
 "maxTimeDebug": long
 "minTime": long
 "totalRuns": long
 "loadedLightOverlayMinLight": integer
 "loadingLightOverlayType": integer

constructor(arg0: $IXaeroMinimap$$Type, arg1: $MinimapSession$$Type, arg2: $BlockStateShortShapeCache$$Type, arg3: $HighlighterRegistry$$Type)

public "cleanup"(): void
public "findBlock"(arg0: $Level$$Type, arg1: $LevelChunk$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: boolean, arg8: $BlockPos$MutableBlockPos$$Type, arg9: $BlockPos$MutableBlockPos$$Type, arg10: integer, arg11: boolean, arg12: $List$$Type<(integer)>, arg13: $List$$Type<($BlockState$$Type)>, arg14: integer, arg15: boolean, arg16: $List$$Type<(integer)>, arg17: boolean, arg18: boolean, arg19: $BlockPos$MutableBlockPos$$Type, arg20: boolean): $Block
public "onRender"(): void
public "getFixedSkyLightBlockBrightness"(arg0: float, arg1: float, arg2: integer): float
public "setupDimensionHighlightHandler"(arg0: $ResourceKey$$Type<($Level)>): void
public "getDimensionHighlightHandler"(): $DimensionHighlighterHandler
public "getLoadedCaving"(): integer
public "getLoadedMapChunkX"(): integer
public "getLoadedLevels"(): integer
public "resetShortBlocks"(): void
public "getLoadedBlocks"(): (($MinimapChunk)[])[]
public "getLoadedMapChunkZ"(): integer
public "getBlockBrightness"(arg0: float, arg1: integer, arg2: integer, arg3: integer): float
public "loadBlockColor"(arg0: integer, arg1: $Level$$Type, arg2: integer, arg3: integer, arg4: $LevelChunk$$Type, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer, arg10: $Heightmap$Types$$Type, arg11: $MinimapTile$$Type, arg12: $MinimapChunk$$Type, arg13: $MinimapChunk$$Type, arg14: $MinimapChunk$$Type, arg15: $MinimapChunk$$Type, arg16: float, arg17: float, arg18: float, arg19: boolean, arg20: boolean, arg21: integer, arg22: integer, arg23: integer, arg24: boolean, arg25: integer, arg26: integer, arg27: boolean, arg28: float, arg29: integer, arg30: boolean, arg31: $List$$Type<(integer)>, arg32: $List$$Type<($BlockState$$Type)>, arg33: $List$$Type<(integer)>, arg34: (integer)[], arg35: (integer)[], arg36: (integer)[], arg37: (float)[], arg38: (float)[], arg39: (integer)[], arg40: (integer)[], arg41: (integer)[], arg42: (integer)[], arg43: boolean, arg44: integer, arg45: $BlockPos$MutableBlockPos$$Type, arg46: $BlockPos$MutableBlockPos$$Type, arg47: long, arg48: integer, arg49: $IXaeroMinimap$$Type, arg50: $MinimapWriterHelper$$Type, arg51: integer, arg52: boolean, arg53: boolean, arg54: integer, arg55: integer, arg56: integer, arg57: integer, arg58: boolean, arg59: boolean, arg60: boolean, arg61: boolean, arg62: $BlockPos$MutableBlockPos$$Type, arg63: boolean): $MinimapTile
public "getLoadSide"(): integer
public "getMapCoord"(arg0: integer, arg1: integer): integer
public "getUpdateRadiusInChunks"(): integer
public "getSectionBasedHeight"(arg0: $LevelChunk$$Type, arg1: integer): integer
public "getLoadedSideInChunks"(): integer
public "isLoadedNonWorldMap"(): boolean
public "getLoadingSideInChunks"(): integer
public "getLoadingMapChunkX"(): integer
public "setClearBlockColours"(arg0: boolean): void
public "getLoadingMapChunkZ"(): integer
set "upDimensionHighlightHandler"(value: $ResourceKey$$Type<($Level)>)
get "dimensionHighlightHandler"(): $DimensionHighlighterHandler
get "loadedCaving"(): integer
get "loadedMapChunkX"(): integer
get "loadedLevels"(): integer
get "loadedBlocks"(): (($MinimapChunk)[])[]
get "loadedMapChunkZ"(): integer
get "loadSide"(): integer
get "updateRadiusInChunks"(): integer
get "loadedSideInChunks"(): integer
get "loadedNonWorldMap"(): boolean
get "loadingSideInChunks"(): integer
get "loadingMapChunkX"(): integer
set "clearBlockColours"(value: boolean)
get "loadingMapChunkZ"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapWriter$$Type = ($MinimapWriter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinimapWriter$$Original = $MinimapWriter;}
