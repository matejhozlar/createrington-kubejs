declare module "xaero.map.MapWriter" {
import {$MapProcessor, $MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$MapRegion$$Type} from "xaero.map.region.MapRegion"
import {$BlockPos$MutableBlockPos$$Type} from "net.minecraft.core.BlockPos$MutableBlockPos"
import {$MapTileChunk$$Type} from "xaero.map.region.MapTileChunk"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$MapUpdateFastConfig$$Type} from "xaero.map.region.MapUpdateFastConfig"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockTintProvider$$Type} from "xaero.map.biome.BlockTintProvider"
import {$BlockStateShortShapeCache$$Type} from "xaero.map.cache.BlockStateShortShapeCache"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$BiomeColorCalculator$$Type} from "xaero.map.biome.BiomeColorCalculator"
import {$LevelChunk$$Type} from "net.minecraft.world.level.chunk.LevelChunk"
import {$StateHolder$$Type} from "net.minecraft.world.level.block.state.StateHolder"
import {$Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BiomeGetter$$Type} from "xaero.map.biome.BiomeGetter"
import {$MapBlock$$Type} from "xaero.map.region.MapBlock"
import {$OverlayManager$$Type} from "xaero.map.region.OverlayManager"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MapWriter {
static readonly "DEFAULT_RESOURCE": (StringJS)[]
static readonly "NO_Y_VALUE": integer
static readonly "MAX_TRANSPARENCY_BLEND_DEPTH": integer
 "writeFreeSinceLastWrite": long

constructor(arg0: $OverlayManager$$Type, arg1: $BlockStateShortShapeCache$$Type, arg2: $BiomeGetter$$Type)

public "onRender"(arg0: $BiomeColorCalculator$$Type, arg1: $OverlayManager$$Type): void
public "isGlowing"(arg0: $BlockState$$Type): boolean
public "writeMap"(arg0: $Level$$Type, arg1: $Registry$$Type<($Block$$Type)>, arg2: double, arg3: double, arg4: double, arg5: $Registry$$Type<($Biome$$Type)>, arg6: $BiomeColorCalculator$$Type, arg7: $OverlayManager$$Type, arg8: boolean, arg9: boolean, arg10: boolean, arg11: boolean, arg12: boolean, arg13: $BlockPos$MutableBlockPos$$Type, arg14: $BlockTintProvider$$Type, arg15: integer, arg16: $MapUpdateFastConfig$$Type): boolean
public "getMapProcessor"(): $MapProcessor
public "setMapProcessor"(arg0: $MapProcessor$$Type): void
public "getUpdateCounter"(): long
public "shouldOverlay"(arg0: $StateHolder$$Type<(never), (never)>): boolean
public "hasVanillaColor"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $Registry$$Type<($Block$$Type)>, arg3: $BlockPos$$Type): boolean
public "resetPosition"(): void
public "isInvisible"(arg0: $BlockState$$Type, arg1: $Block$$Type, arg2: boolean): boolean
public "loadPixel"(arg0: $Level$$Type, arg1: $Registry$$Type<($Block$$Type)>, arg2: $MapBlock$$Type, arg3: $MapBlock$$Type, arg4: $LevelChunk$$Type, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: boolean, arg10: boolean, arg11: integer, arg12: boolean, arg13: boolean, arg14: $Registry$$Type<($Biome$$Type)>, arg15: boolean, arg16: integer, arg17: $BlockPos$MutableBlockPos$$Type): void
public "getBlockTintIndex"(arg0: $BlockState$$Type): integer
public "writeChunk"(arg0: $Level$$Type, arg1: $Registry$$Type<($Block$$Type)>, arg2: integer, arg3: boolean, arg4: $Registry$$Type<($Biome$$Type)>, arg5: $OverlayManager$$Type, arg6: boolean, arg7: boolean, arg8: boolean, arg9: boolean, arg10: boolean, arg11: $BlockPos$MutableBlockPos$$Type, arg12: $BlockTintProvider$$Type, arg13: integer, arg14: integer, arg15: integer, arg16: integer, arg17: integer, arg18: integer, arg19: integer, arg20: integer, arg21: integer, arg22: $MapUpdateFastConfig$$Type): boolean
public "updateBottomRightTile"(arg0: $MapRegion$$Type, arg1: $MapTileChunk$$Type, arg2: $MapTileChunk$$Type, arg3: integer, arg4: integer): void
public "requestCachedColoursClear"(): void
public "setDirtyInWriteDistance"(arg0: $Player$$Type, arg1: $Level$$Type): void
public "getSectionBasedHeight"(arg0: $LevelChunk$$Type, arg1: integer): integer
public "loadBlockColourFromTexture"(arg0: $BlockState$$Type, arg1: boolean, arg2: $Level$$Type, arg3: $Registry$$Type<($Block$$Type)>, arg4: $BlockPos$$Type): integer
get "mapProcessor"(): $MapProcessor
set "mapProcessor"(value: $MapProcessor$$Type)
get "updateCounter"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapWriter$$Type = ($MapWriter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapWriter$$Original = $MapWriter;}
declare module "xaero.map.MapRunner" {
import {$MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$MapRunnerTask$$Type} from "xaero.map.task.MapRunnerTask"
import {$Runnable$$Interface} from "java.lang.Runnable"

export class $MapRunner implements $Runnable$$Interface {
constructor()

public "run"(): void
public "stop"(): void
public "addTask"(arg0: $MapRunnerTask$$Type): void
public "doTasks"(arg0: $MapProcessor$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapRunner$$Type = ($MapRunner);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapRunner$$Original = $MapRunner;}
declare module "xaero.map.MapLimiter" {
import {$MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$MapWorld$$Type} from "xaero.map.world.MapWorld"

export class $MapLimiter {
constructor()

public "applyLimit"(arg0: $MapWorld$$Type, arg1: $MapProcessor$$Type): void
public "onSessionFinalized"(): void
public "getAvailableVRAM"(): integer
public "setMostRegionsAtATime"(arg0: integer): void
public "getMostRegionsAtATime"(): integer
public "updateAvailableVRAM"(): void
get "availableVRAM"(): integer
set "mostRegionsAtATime"(value: integer)
get "mostRegionsAtATime"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapLimiter$$Type = ($MapLimiter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapLimiter$$Original = $MapLimiter;}
declare module "xaero.map.WorldMapSession" {
import {$LocalPlayer$$Type} from "net.minecraft.client.player.LocalPlayer"
import {$MapProcessor} from "xaero.map.MapProcessor"
import {$ControlsHandler} from "xaero.map.controls.ControlsHandler"
import {$ClientPacketListener$$Type} from "net.minecraft.client.multiplayer.ClientPacketListener"

export class $WorldMapSession {
constructor()

public "init"(arg0: $ClientPacketListener$$Type, arg1: long): void
public "cleanup"(): void
public static "getCurrentSession"(): $WorldMapSession
public static "getForPlayer"(arg0: $LocalPlayer$$Type): $WorldMapSession
public "getMapProcessor"(): $MapProcessor
public "isUsable"(): boolean
public "getControlsHandler"(): $ControlsHandler
get "currentSession"(): $WorldMapSession
get "mapProcessor"(): $MapProcessor
get "usable"(): boolean
get "controlsHandler"(): $ControlsHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldMapSession$$Type = ($WorldMapSession);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldMapSession$$Original = $WorldMapSession;}
declare module "xaero.map.MapProcessor" {
import {$LeveledRegion, $LeveledRegion$$Type} from "xaero.map.region.LeveledRegion"
import {$MapLimiter, $MapLimiter$$Type} from "xaero.map.MapLimiter"
import {$WorldDataHandler, $WorldDataHandler$$Type} from "xaero.map.file.worldsave.WorldDataHandler"
import {$MapDimension$$Type} from "xaero.map.world.MapDimension"
import {$CustomVertexConsumers, $CustomVertexConsumers$$Type} from "xaero.map.graphics.CustomVertexConsumers"
import {$MapTileChunk} from "xaero.map.region.MapTileChunk"
import {$MapWorld} from "xaero.map.world.MapWorld"
import {$MapSaveLoad, $MapSaveLoad$$Type} from "xaero.map.file.MapSaveLoad"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClientPacketListener$$Type} from "net.minecraft.client.multiplayer.ClientPacketListener"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Field} from "java.lang.reflect.Field"
import {$MapWriter, $MapWriter$$Type} from "xaero.map.MapWriter"
import {$MessageBox, $MessageBox$$Type} from "xaero.map.gui.message.MessageBox"
import {$BiomeColorCalculator, $BiomeColorCalculator$$Type} from "xaero.map.biome.BiomeColorCalculator"
import {$MapTile} from "xaero.map.region.MapTile"
import {$BranchTextureRenderer$$Type} from "xaero.map.region.texture.BranchTextureRenderer"
import {$BrokenBlockTintCache$$Type} from "xaero.map.cache.BrokenBlockTintCache"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapTilePool, $MapTilePool$$Type} from "xaero.map.pool.MapTilePool"
import {$MapRegionHighlightsPreparer, $MapRegionHighlightsPreparer$$Type} from "xaero.map.highlight.MapRegionHighlightsPreparer"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$BiomeGetter$$Type} from "xaero.map.biome.BiomeGetter"
import {$ClientSyncedTrackedPlayerManager, $ClientSyncedTrackedPlayerManager$$Type} from "xaero.map.radar.tracker.synced.ClientSyncedTrackedPlayerManager"
import {$TextureUploader$$Type} from "xaero.map.graphics.TextureUploader"
import {$ArrayList} from "java.util.ArrayList"
import {$HolderLookup, $HolderLookup$$Type} from "net.minecraft.core.HolderLookup"
import {$MapRegion, $MapRegion$$Type} from "xaero.map.region.MapRegion"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockTintProvider} from "xaero.map.biome.BlockTintProvider"
import {$BlockStateShortShapeCache, $BlockStateShortShapeCache$$Type} from "xaero.map.cache.BlockStateShortShapeCache"
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$Queue} from "java.util.Queue"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$MultiTextureRenderTypeRendererProvider, $MultiTextureRenderTypeRendererProvider$$Type} from "xaero.map.graphics.renderer.multitexture.MultiTextureRenderTypeRendererProvider"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$ByteBufferDeallocator, $ByteBufferDeallocator$$Type} from "xaero.map.deallocator.ByteBufferDeallocator"
import {$CaveStartCalculator$$Type} from "xaero.map.misc.CaveStartCalculator"
import {$MapRunner$$Type} from "xaero.map.MapRunner"
import {$HighlighterRegistry, $HighlighterRegistry$$Type} from "xaero.map.highlight.HighlighterRegistry"
import {$MessageBoxRenderer, $MessageBoxRenderer$$Type} from "xaero.map.gui.message.render.MessageBoxRenderer"
import {$OverlayManager, $OverlayManager$$Type} from "xaero.map.region.OverlayManager"
import {$DimensionType, $DimensionType$$Type} from "net.minecraft.world.level.dimension.DimensionType"

export class $MapProcessor {
 "worldBiomeRegistry": $Registry<($Biome)>
 "freeFramePeriod": long
readonly "processorThreadPauseSync": any
 "mainPlayerX": double
 "mainWorldBlockRegistry": $Registry<($Block)>
 "mainPlayerY": double
 "mainWorldBiomeRegistry": $Registry<($Biome)>
readonly "mainStuffSync": any
 "mainWorld": $ClientLevel
 "mainWorldDimensionTypeRegistry": $Registry<($DimensionType)>
static readonly "ROOT_FOLDER_FORMAT": integer
 "selectedField": $Field
 "mainPlayerZ": double
readonly "renderThreadPauseSync": any
 "newWorldBiomeRegistry": $Registry<($Biome)>
 "newWorldDimensionTypeRegistry": $Registry<($DimensionType)>
static readonly "DEFAULT_LIGHT_LEVELS": integer
readonly "uiSync": any
readonly "uiPauseSync": any
 "newWorldBlockRegistry": $Registry<($Block)>

constructor(arg0: $MapSaveLoad$$Type, arg1: $MapWriter$$Type, arg2: $MapLimiter$$Type, arg3: $ByteBufferDeallocator$$Type, arg4: $MapTilePool$$Type, arg5: $OverlayManager$$Type, arg6: $TextureUploader$$Type, arg7: $WorldDataHandler$$Type, arg8: $BranchTextureRenderer$$Type, arg9: $MultiTextureRenderTypeRendererProvider$$Type, arg10: $CustomVertexConsumers$$Type, arg11: $BiomeColorCalculator$$Type, arg12: $BlockStateShortShapeCache$$Type, arg13: $BiomeGetter$$Type, arg14: $BrokenBlockTintCache$$Type, arg15: $HighlighterRegistry$$Type, arg16: $MapRegionHighlightsPreparer$$Type, arg17: $MessageBox$$Type, arg18: $MessageBoxRenderer$$Type, arg19: $CaveStartCalculator$$Type, arg20: $ClientSyncedTrackedPlayerManager$$Type)

public "run"(arg0: $MapRunner$$Type): void
public "stop"(): void
public "isEqual"(arg0: StringJS, arg1: StringJS, arg2: StringJS): boolean
public "getWorld"(): $ClientLevel
public "onInit"(arg0: $ClientPacketListener$$Type): void
public "isFinished"(): boolean
public "onWorldUnload"(): void
public "getCurrentDimension"(): StringJS
public "isCurrentMultiworldWritable"(): boolean
public "getMapRegionHighlightsPreparer"(): $MapRegionHighlightsPreparer
public "getMapSaveLoad"(): $MapSaveLoad
public "getLeafMapRegion"(arg0: integer, arg1: integer, arg2: integer, arg3: boolean): $MapRegion
public "updateCaveStart"(): void
public "getCurrentWorldId"(): StringJS
public "isCurrentMapLocked"(): boolean
public "isWritingPaused"(): boolean
public "getMapWorld"(): $MapWorld
public "getTilePool"(): $MapTilePool
public "getBrightness"(arg0: integer, arg1: $ClientLevel$$Type, arg2: boolean): float
public "getBrightness"(): float
public "getBrightness"(arg0: boolean): float
public "serverHasMod"(): boolean
public "setConsideringNetherFairPlayMessage"(arg0: boolean): void
public "updateMapItem"(): void
public "getAffectingLoadingFrequencyCount"(): integer
public "getMapItem"(): $Item
public "getCvc"(): $CustomVertexConsumers
public "getBlockStateShortShapeCache"(): $BlockStateShortShapeCache
public "setFairplayMessageReceived"(arg0: boolean): void
public "getRenderStartTimeUpdater"(): $Runnable
public "getMinecraftScheduledTasks"(): $Queue<($Runnable)>
public static "shouldSkipWorldRender"(): boolean
public "getCrosshairMessage"(): StringJS
public "resetRenderStartTime"(): void
public "getWorldDataHandler"(): $WorldDataHandler
public "isUIPaused"(): boolean
public "getMapWriter"(): $MapWriter
public "updateWorldSpawn"(arg0: $BlockPos$$Type, arg1: $ClientLevel$$Type): void
public "onClientTickStart"(): void
public "setMainValues"(): void
public "onRenderProcess"(arg0: $Minecraft$$Type): void
public "onServerLevelId"(arg0: integer): void
public "pushRenderPause"(arg0: boolean, arg1: boolean): void
public "popRenderPause"(arg0: boolean, arg1: boolean): void
public "setServerModNetworkVersion"(arg0: integer): void
public "waitForLoadingToFinish"(arg0: $Runnable$$Type): void
public "getMultiTextureRenderTypeRenderers"(): $MultiTextureRenderTypeRendererProvider
public "getWorldBlockTintProvider"(): $BlockTintProvider
public "isWaitingForWorldUpdate"(): boolean
public "getWorldBlockRegistry"(): $Registry<($Block)>
public "getCurrentCaveLayer"(): integer
public "getLeveledRegion"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $LeveledRegion<(never)>
public "getMessageBox"(): $MessageBox
public "isMapWorldUsable"(): boolean
public "isRenderingPaused"(): boolean
public "getOverlayManager"(): $OverlayManager
public "regionExists"(arg0: integer, arg1: integer, arg2: integer): boolean
public "isUploadingPaused"(): boolean
public "getFootprints"(): $ArrayList<((double)[])>
public "getProcessedCount"(): integer
public "getMapLimiter"(): $MapLimiter
public "isProcessed"(arg0: $LeveledRegion$$Type<(never)>): boolean
public "getMessageBoxRenderer"(): $MessageBoxRenderer
public "regionDetectionExists"(arg0: integer, arg1: integer, arg2: integer): boolean
public "getAmbientBrightness"(arg0: $DimensionType$$Type): float
public "getBufferDeallocator"(): $ByteBufferDeallocator
public "isConsideringNetherFairPlay"(): boolean
public "ignoreWorld"(arg0: $Level$$Type): boolean
public "fairplayMessageWasReceived"(): boolean
public "checkForWorldUpdate"(): void
public "requestCurrentMapDeletion"(): void
public "canQuickConfirmUnsynced"(): boolean
public "toggleMultiworldType"(arg0: $MapDimension$$Type): void
public "updateVisitedDimension"(arg0: $ClientLevel$$Type): void
public "getDimensionIdForFolder"(arg0: StringJS): $ResourceKey<($Level)>
public "getWorldBlockLookup"(): $HolderLookup<($Block)>
public "getServerModNetworkVersion"(): integer
public "quickConfirmMultiworld"(): void
public "getBiomeColorCalculator"(): $BiomeColorCalculator
public "getHighlighterRegistry"(): $HighlighterRegistry
public "addToProcess"(arg0: $LeveledRegion$$Type<(never)>): void
public "setMultiworld"(arg0: $MapDimension$$Type, arg1: StringJS): void
public "isProcessingPaused"(): boolean
public "confirmMultiworld"(arg0: $MapDimension$$Type): boolean
public "updateFootprints"(arg0: integer): void
public "getMapChunk"(arg0: integer, arg1: integer, arg2: integer): $MapTileChunk
public "removeToProcess"(arg0: $LeveledRegion$$Type<(never)>): void
public "updateDimension"(arg0: $ClientLevel$$Type, arg1: $ResourceKey$$Type<($Level)>): void
public "popIsLoading"(): void
public "changeWorld"(arg0: $ClientLevel$$Type, arg1: $HolderLookup$$Type<($Block$$Type)>, arg2: $Registry$$Type<($Block$$Type)>, arg3: $Registry$$Type<($Fluid$$Type)>, arg4: $Registry$$Type<($Biome$$Type)>, arg5: $Registry$$Type<($DimensionType$$Type)>): void
public "pushIsLoading"(): void
public "pushUIPause"(): void
public static "isWorldMultiplayer"(arg0: boolean, arg1: StringJS): boolean
public "getRenderStartTime"(): long
public "getNewWorld"(): $ClientLevel
public "isFinalizing"(): boolean
public "getCurrentDimId"(): StringJS
public static "isWorldRealms"(arg0: StringJS): boolean
public "getCurrentMWId"(): StringJS
public "popUIPause"(): void
public "getMapTile"(arg0: integer, arg1: integer, arg2: integer): $MapTile
public "initMinimapRender"(arg0: integer, arg1: integer): void
public "removeToRefresh"(arg0: $MapRegion$$Type): void
public "addToRefresh"(arg0: $MapRegion$$Type, arg1: boolean): void
public "pushWriterPause"(): void
public "getGlobalVersion"(): integer
public "removeMapRegion"(arg0: $LeveledRegion$$Type<(never)>): void
public "popWriterPause"(): void
public "getWorldDimensionTypeRegistry"(): $Registry<($DimensionType)>
public "getClientSyncedTrackedPlayerManager"(): $ClientSyncedTrackedPlayerManager
public "beforeMinimapRegionRender"(arg0: $MapRegion$$Type): void
public "finalizeMinimapRender"(): void
public "getMinimapMapRegion"(arg0: integer, arg1: integer): $MapRegion
public "getDimensionName"(arg0: $ResourceKey$$Type<($Level)>): StringJS
get "world"(): $ClientLevel
get "finished"(): boolean
get "currentDimension"(): StringJS
get "currentMultiworldWritable"(): boolean
get "mapRegionHighlightsPreparer"(): $MapRegionHighlightsPreparer
get "mapSaveLoad"(): $MapSaveLoad
get "currentWorldId"(): StringJS
get "currentMapLocked"(): boolean
get "writingPaused"(): boolean
get "mapWorld"(): $MapWorld
get "tilePool"(): $MapTilePool
get "brightness"(): float
set "consideringNetherFairPlayMessage"(value: boolean)
get "affectingLoadingFrequencyCount"(): integer
get "mapItem"(): $Item
get "cvc"(): $CustomVertexConsumers
get "blockStateShortShapeCache"(): $BlockStateShortShapeCache
set "fairplayMessageReceived"(value: boolean)
get "renderStartTimeUpdater"(): $Runnable
get "minecraftScheduledTasks"(): $Queue<($Runnable)>
get "crosshairMessage"(): StringJS
get "worldDataHandler"(): $WorldDataHandler
get "UIPaused"(): boolean
get "mapWriter"(): $MapWriter
get "mainValues"(): void
set "serverModNetworkVersion"(value: integer)
get "multiTextureRenderTypeRenderers"(): $MultiTextureRenderTypeRendererProvider
get "worldBlockTintProvider"(): $BlockTintProvider
get "waitingForWorldUpdate"(): boolean
get "worldBlockRegistry"(): $Registry<($Block)>
get "currentCaveLayer"(): integer
get "messageBox"(): $MessageBox
get "mapWorldUsable"(): boolean
get "renderingPaused"(): boolean
get "overlayManager"(): $OverlayManager
get "uploadingPaused"(): boolean
get "footprints"(): $ArrayList<((double)[])>
get "processedCount"(): integer
get "mapLimiter"(): $MapLimiter
get "messageBoxRenderer"(): $MessageBoxRenderer
get "bufferDeallocator"(): $ByteBufferDeallocator
get "consideringNetherFairPlay"(): boolean
get "worldBlockLookup"(): $HolderLookup<($Block)>
get "serverModNetworkVersion"(): integer
get "biomeColorCalculator"(): $BiomeColorCalculator
get "highlighterRegistry"(): $HighlighterRegistry
get "processingPaused"(): boolean
get "renderStartTime"(): long
get "newWorld"(): $ClientLevel
get "finalizing"(): boolean
get "currentDimId"(): StringJS
get "currentMWId"(): StringJS
get "globalVersion"(): integer
get "worldDimensionTypeRegistry"(): $Registry<($DimensionType)>
get "clientSyncedTrackedPlayerManager"(): $ClientSyncedTrackedPlayerManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapProcessor$$Type = ($MapProcessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapProcessor$$Original = $MapProcessor;}
declare module "xaero.map.MapFullReloader" {
import {$Iterator$$Type} from "java.util.Iterator"
import {$MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$MapRegion$$Type} from "xaero.map.region.MapRegion"
import {$MapDimension$$Type} from "xaero.map.world.MapDimension"
import {$RegionDetection$$Type} from "xaero.map.file.RegionDetection"

export class $MapFullReloader {
static readonly "CONVERTED_WORLD_SAVE_MW": StringJS

constructor(arg0: integer, arg1: boolean, arg2: $Iterator$$Type<($RegionDetection$$Type)>, arg3: $MapDimension$$Type, arg4: $MapProcessor$$Type)

public "isResave"(): boolean
public "onRenderProcess"(): void
public "isPartOfReload"(arg0: $MapRegion$$Type): boolean
get "resave"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapFullReloader$$Type = ($MapFullReloader);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapFullReloader$$Original = $MapFullReloader;}
