declare module "xaero.map.region.texture.BranchTextureRenderer" {
import {$RenderTarget$$Type} from "com.mojang.blaze3d.pipeline.RenderTarget"

export class $BranchTextureRenderer {
constructor()

public "render"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $RenderTarget$$Type, arg6: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BranchTextureRenderer$$Type = ($BranchTextureRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BranchTextureRenderer$$Original = $BranchTextureRenderer;}
declare module "xaero.map.region.texture.RegionTexture" {
import {$TextureUploader$$Type} from "xaero.map.graphics.TextureUploader"
import {$MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$LeveledRegion, $LeveledRegion$$Type} from "xaero.map.region.LeveledRegion"
import {$DataInputStream$$Type} from "java.io.DataInputStream"
import {$List$$Type} from "java.util.List"
import {$MapUpdateFastConfig$$Type} from "xaero.map.region.MapUpdateFastConfig"
import {$BlockTintProvider$$Type} from "xaero.map.biome.BlockTintProvider"
import {$BlockStateShortShapeCache$$Type} from "xaero.map.cache.BlockStateShortShapeCache"
import {$RegionTextureBiomes} from "xaero.map.region.texture.RegionTextureBiomes"
import {$PoolTextureDirectBufferUnit, $PoolTextureDirectBufferUnit$$Type} from "xaero.map.pool.buffer.PoolTextureDirectBufferUnit"
import {$BranchTextureRenderer$$Type} from "xaero.map.region.texture.BranchTextureRenderer"
import {$DimensionHighlighterHandler$$Type} from "xaero.map.highlight.DimensionHighlighterHandler"
import {$DataOutputStream$$Type} from "java.io.DataOutputStream"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$ByteBuffer} from "java.nio.ByteBuffer"
import {$OverlayManager$$Type} from "xaero.map.region.OverlayManager"

export class $RegionTexture<T extends $RegionTexture<(object)>> {
static readonly "PBO_PACK_LENGTH": integer
static readonly "PBO_UNPACK_LENGTH": integer

constructor(arg0: $LeveledRegion$$Type<(T)>)

public "getRegion"(): $LeveledRegion<(T)>
public "canUpload"(): boolean
public "getBiome"(arg0: integer, arg1: integer): $ResourceKey<($Biome)>
public "getBiomes"(): $RegionTextureBiomes
public "getTimer"(): integer
public "getHeight"(arg0: integer, arg1: integer): integer
public "setBiome"(arg0: integer, arg1: integer, arg2: $ResourceKey$$Type<($Biome)>): void
public "putHeight"(arg0: integer, arg1: integer, arg2: integer): void
public "putHeight"(arg0: integer, arg1: integer): void
public "addDebugLines"(arg0: $List$$Type<(StringJS)>): void
public "getTextureHasLight"(): boolean
public "getGlColorTexture"(): integer
public "getTopHeight"(arg0: integer, arg1: integer): integer
public "shouldUpload"(): boolean
public "getDirectColorBuffer"(): $ByteBuffer
public "getColorBufferFormat"(): integer
public "deleteTexturesAndBuffers"(): void
public "isColorBufferCompressed"(): boolean
public "shouldIncludeInCache"(): boolean
public "getBufferedTextureVersion"(): integer
public "uploadBuffer"(arg0: $DimensionHighlighterHandler$$Type, arg1: $TextureUploader$$Type, arg2: $LeveledRegion$$Type<(T)>, arg3: $BranchTextureRenderer$$Type, arg4: integer, arg5: integer): long
public "hasSourceData"(): boolean
public "getTextureVersion"(): integer
public "deletePBOs"(): void
public "isUploaded"(): boolean
public "postUpload"(arg0: $MapProcessor$$Type, arg1: $LeveledRegion$$Type<(T)>, arg2: boolean): void
public "preUpload"(arg0: $MapProcessor$$Type, arg1: $BlockTintProvider$$Type, arg2: $OverlayManager$$Type, arg3: $LeveledRegion$$Type<(T)>, arg4: boolean, arg5: $BlockStateShortShapeCache$$Type, arg6: $MapUpdateFastConfig$$Type): void
public "decTimer"(): void
public "deleteColorBuffer"(): void
public "bindColorTexture"(arg0: boolean): integer
public "getColorBuffer"(): $PoolTextureDirectBufferUnit
public "prepareBuffer"(): void
public "getBufferHasLight"(): boolean
public "resetBiomes"(): void
public "setToUpload"(arg0: boolean): void
public "isCachePrepared"(): boolean
public "writeCacheMapData"(arg0: $DataOutputStream$$Type, arg1: (byte)[], arg2: (byte)[], arg3: $LeveledRegion$$Type<(T)>): void
public "setCachePrepared"(arg0: boolean): void
public "readCacheData"(arg0: integer, arg1: integer, arg2: $DataInputStream$$Type, arg3: (byte)[], arg4: (byte)[], arg5: $LeveledRegion$$Type<(T)>, arg6: $MapProcessor$$Type, arg7: integer, arg8: integer, arg9: boolean): void
public "resetTimer"(): void
public "shouldHaveContentForBranchUpdate"(): boolean
public "shouldBeUsedForBranchUpdate"(arg0: integer): boolean
public "shouldDownloadFromPBO"(): boolean
public "setBufferedTextureVersion"(arg0: integer): void
public "ensureBiomeIndexStorage"(): void
public "setShouldDownloadFromPBO"(arg0: boolean): void
public "removeHeight"(arg0: integer, arg1: integer): void
public "putTopHeight"(arg0: integer, arg1: integer, arg2: integer): void
public "putTopHeight"(arg0: integer, arg1: integer): void
public "postBufferWrite"(arg0: $PoolTextureDirectBufferUnit$$Type): void
public "removeTopHeight"(arg0: integer, arg1: integer): void
public "onTextureDeletion"(): void
get "region"(): $LeveledRegion<(T)>
get "biomes"(): $RegionTextureBiomes
get "timer"(): integer
get "textureHasLight"(): boolean
get "glColorTexture"(): integer
get "directColorBuffer"(): $ByteBuffer
get "colorBufferFormat"(): integer
get "colorBufferCompressed"(): boolean
get "bufferedTextureVersion"(): integer
get "textureVersion"(): integer
get "uploaded"(): boolean
get "colorBuffer"(): $PoolTextureDirectBufferUnit
get "bufferHasLight"(): boolean
set "toUpload"(value: boolean)
get "cachePrepared"(): boolean
set "cachePrepared"(value: boolean)
set "bufferedTextureVersion"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegionTexture$$Type<T> = ($RegionTexture<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegionTexture$$Original<T> = $RegionTexture<(T)>;}
declare module "xaero.map.region.texture.LeafRegionTexture" {
import {$MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$LeveledRegion$$Type} from "xaero.map.region.LeveledRegion"
import {$MapTileChunk, $MapTileChunk$$Type} from "xaero.map.region.MapTileChunk"
import {$DataInputStream$$Type} from "java.io.DataInputStream"
import {$List$$Type} from "java.util.List"
import {$MapUpdateFastConfig$$Type} from "xaero.map.region.MapUpdateFastConfig"
import {$BlockTintProvider$$Type} from "xaero.map.biome.BlockTintProvider"
import {$BlockStateShortShapeCache$$Type} from "xaero.map.cache.BlockStateShortShapeCache"
import {$PoolTextureDirectBufferUnit$$Type} from "xaero.map.pool.buffer.PoolTextureDirectBufferUnit"
import {$RegionTexture} from "xaero.map.region.texture.RegionTexture"
import {$DataOutputStream$$Type} from "java.io.DataOutputStream"
import {$OverlayManager$$Type} from "xaero.map.region.OverlayManager"

export class $LeafRegionTexture extends $RegionTexture<($LeafRegionTexture)> {
static readonly "PBO_PACK_LENGTH": integer
static readonly "PBO_UNPACK_LENGTH": integer

constructor(arg0: $MapTileChunk$$Type)

public "canUpload"(): boolean
public "addDebugLines"(arg0: $List$$Type<(StringJS)>): void
public "deleteTexturesAndBuffers"(): void
public "shouldIncludeInCache"(): boolean
public "hasSourceData"(): boolean
public "isUploaded"(): boolean
public "postUpload"(arg0: $MapProcessor$$Type, arg1: $LeveledRegion$$Type<($LeafRegionTexture$$Type)>, arg2: boolean): void
public "preUpload"(arg0: $MapProcessor$$Type, arg1: $BlockTintProvider$$Type, arg2: $OverlayManager$$Type, arg3: $LeveledRegion$$Type<($LeafRegionTexture$$Type)>, arg4: boolean, arg5: $BlockStateShortShapeCache$$Type, arg6: $MapUpdateFastConfig$$Type): void
public "getTileChunk"(): $MapTileChunk
public "prepareBuffer"(): void
public "writeCacheMapData"(arg0: $DataOutputStream$$Type, arg1: (byte)[], arg2: (byte)[], arg3: $LeveledRegion$$Type<($LeafRegionTexture$$Type)>): void
public "readCacheData"(arg0: integer, arg1: integer, arg2: $DataInputStream$$Type, arg3: (byte)[], arg4: (byte)[], arg5: $LeveledRegion$$Type<($LeafRegionTexture$$Type)>, arg6: $MapProcessor$$Type, arg7: integer, arg8: integer, arg9: boolean): void
public "requestHighlightOnlyUpload"(): void
public "shouldHaveContentForBranchUpdate"(): boolean
public "shouldBeUsedForBranchUpdate"(arg0: integer): boolean
public "resetHeights"(): void
public "postBufferUpdate"(arg0: boolean): void
public "postBufferWrite"(arg0: $PoolTextureDirectBufferUnit$$Type): void
get "uploaded"(): boolean
get "tileChunk"(): $MapTileChunk
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LeafRegionTexture$$Type = ($LeafRegionTexture);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LeafRegionTexture$$Original = $LeafRegionTexture;}
