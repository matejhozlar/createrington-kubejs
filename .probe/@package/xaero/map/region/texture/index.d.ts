import { $DataInputStream, $DataOutputStream } from "@package/java/io";
import { $OverlayManager, $LeveledRegion, $MapUpdateFastConfig, $MapTileChunk } from "@package/xaero/map/region";
import { $TextureUploader } from "@package/xaero/map/graphics";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $DimensionHighlighterHandler } from "@package/xaero/map/highlight";
import { $RenderTarget } from "@package/com/mojang/blaze3d/pipeline";
import { $BlockTintProvider } from "@package/xaero/map/biome";
import { $List_ } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $PoolTextureDirectBufferUnit } from "@package/xaero/map/pool/buffer";
import { $MapProcessor } from "@package/xaero/map";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $FastPalette, $Paletted2DFastBitArrayIntStorage } from "@package/xaero/map/palette";
import { $BlockStateShortShapeCache } from "@package/xaero/map/cache";

declare module "@package/xaero/map/region/texture" {
    export class $RegionTexture<T extends $RegionTexture<T>> {
        getRegion(): $LeveledRegion<T>;
        getTextureVersion(): number;
        shouldUpload(): boolean;
        hasSourceData(): boolean;
        uploadBuffer(arg0: $DimensionHighlighterHandler, arg1: $TextureUploader, arg2: $LeveledRegion<T>, arg3: $BranchTextureRenderer, arg4: number, arg5: number): number;
        getTimer(): number;
        shouldDownloadFromPBO(): boolean;
        getBiome(arg0: number, arg1: number): $ResourceKey<$Biome>;
        getColorBufferFormat(): number;
        getDirectColorBuffer(): $ByteBuffer;
        isColorBufferCompressed(): boolean;
        resetTimer(): void;
        getBiomes(): $RegionTextureBiomes;
        getHeight(arg0: number, arg1: number): number;
        setCachePrepared(arg0: boolean): void;
        isCachePrepared(): boolean;
        setToUpload(arg0: boolean): void;
        writeCacheMapData(arg0: $DataOutputStream, arg1: number[], arg2: number[], arg3: $LeveledRegion<T>): void;
        resetBiomes(): void;
        readCacheData(arg0: number, arg1: number, arg2: $DataInputStream, arg3: number[], arg4: number[], arg5: $LeveledRegion<T>, arg6: $MapProcessor, arg7: number, arg8: number, arg9: boolean): void;
        setBiome(arg0: number, arg1: number, arg2: $ResourceKey_<$Biome>): void;
        canUpload(): boolean;
        prepareBuffer(): void;
        deleteColorBuffer(): void;
        bindColorTexture(arg0: boolean): number;
        getBufferHasLight(): boolean;
        getColorBuffer(): $PoolTextureDirectBufferUnit;
        getTextureHasLight(): boolean;
        getGlColorTexture(): number;
        addDebugLines(arg0: $List_<string>): void;
        getTopHeight(arg0: number, arg1: number): number;
        shouldIncludeInCache(): boolean;
        deleteTexturesAndBuffers(): void;
        getBufferedTextureVersion(): number;
        deletePBOs(): void;
        isUploaded(): boolean;
        preUpload(arg0: $MapProcessor, arg1: $BlockTintProvider, arg2: $OverlayManager, arg3: $LeveledRegion<T>, arg4: boolean, arg5: $BlockStateShortShapeCache, arg6: $MapUpdateFastConfig): void;
        decTimer(): void;
        postUpload(arg0: $MapProcessor, arg1: $LeveledRegion<T>, arg2: boolean): void;
        shouldHaveContentForBranchUpdate(): boolean;
        shouldBeUsedForBranchUpdate(arg0: number): boolean;
        putHeight(arg0: number, arg1: number): void;
        putHeight(arg0: number, arg1: number, arg2: number): void;
        setBufferedTextureVersion(arg0: number): void;
        ensureBiomeIndexStorage(): void;
        setShouldDownloadFromPBO(arg0: boolean): void;
        onTextureDeletion(): void;
        removeTopHeight(arg0: number, arg1: number): void;
        postBufferWrite(arg0: $PoolTextureDirectBufferUnit): void;
        putTopHeight(arg0: number, arg1: number): void;
        putTopHeight(arg0: number, arg1: number, arg2: number): void;
        removeHeight(arg0: number, arg1: number): void;
        static PBO_PACK_LENGTH: number;
        static PBO_UNPACK_LENGTH: number;
        constructor(arg0: $LeveledRegion<T>);
        get region(): $LeveledRegion<T>;
        get textureVersion(): number;
        get timer(): number;
        get colorBufferFormat(): number;
        get directColorBuffer(): $ByteBuffer;
        get colorBufferCompressed(): boolean;
        get biomes(): $RegionTextureBiomes;
        set toUpload(value: boolean);
        get bufferHasLight(): boolean;
        get colorBuffer(): $PoolTextureDirectBufferUnit;
        get textureHasLight(): boolean;
        get glColorTexture(): number;
        get uploaded(): boolean;
    }
    export class $LeafRegionTexture extends $RegionTexture<$LeafRegionTexture> {
        getTileChunk(): $MapTileChunk;
        requestHighlightOnlyUpload(): void;
        resetHeights(): void;
        postBufferUpdate(arg0: boolean): void;
        static PBO_PACK_LENGTH: number;
        static PBO_UNPACK_LENGTH: number;
        constructor(arg0: $MapTileChunk);
        get tileChunk(): $MapTileChunk;
    }
    export class $BranchRegionTexture extends $RegionTexture<$BranchRegionTexture> {
        requestDownload(): void;
        checkForUpdates(arg0: $RegionTexture<never>, arg1: $RegionTexture<never>, arg2: $RegionTexture<never>, arg3: $RegionTexture<never>, arg4: $LeveledRegion<never>): boolean;
        static PBO_PACK_LENGTH: number;
        static PBO_UNPACK_LENGTH: number;
        constructor(arg0: $LeveledRegion<$BranchRegionTexture>);
    }
    export class $RegionTextureBiomes {
        getBiomeIndexStorage(): $Paletted2DFastBitArrayIntStorage;
        getRegionBiomePalette(): $FastPalette<$ResourceKey<$Biome>>;
        constructor(arg0: $Paletted2DFastBitArrayIntStorage, arg1: $FastPalette<$ResourceKey_<$Biome>>);
        get biomeIndexStorage(): $Paletted2DFastBitArrayIntStorage;
        get regionBiomePalette(): $FastPalette<$ResourceKey<$Biome>>;
    }
    export class $BranchTextureRenderer {
        render(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $RenderTarget, arg6: boolean): void;
        constructor();
    }
}
