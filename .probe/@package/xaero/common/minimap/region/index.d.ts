import { $MinimapInterface } from "@package/xaero/common/minimap";
import { $ModSettings } from "@package/xaero/common/settings";
import { $List } from "@package/java/util";
import { $IntBuffer } from "@package/java/nio";

declare module "@package/xaero/common/minimap/region" {
    export class $MinimapChunk {
        reset(arg0: number, arg1: number): void;
        cleanup(arg0: $MinimapInterface): void;
        getBuffer(arg0: number): $IntBuffer;
        setChanged(arg0: boolean): void;
        copyBuffer(arg0: number, arg1: $IntBuffer): void;
        setTile(arg0: number, arg1: number, arg2: $MinimapTile): void;
        isChanged(): boolean;
        bindTexture(arg0: number): number;
        getTile(arg0: number, arg1: number): $MinimapTile;
        getX(): number;
        getZ(): number;
        getLevelsBuffered(): number;
        setLevelsBuffered(arg0: number): void;
        isHasSomething(): boolean;
        recycleTiles(): void;
        getGlTexture(arg0: number): number;
        updateBuffers(arg0: number): void;
        isRefreshRequired(arg0: number): boolean;
        setRefreshRequired(arg0: number, arg1: boolean): void;
        setGlTexture(arg0: number, arg1: number): void;
        setHasSomething(arg0: boolean): void;
        setBlockTextureUpload(arg0: boolean): void;
        putColour(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $IntBuffer, arg7: number): void;
        isBlockTextureUpload(): boolean;
        getLevelToRefresh(arg0: number): number;
        static LIGHT_LEVELS: number;
        static INT_BUFFER_SIZE: number;
        static SIZE_TILES: number;
        constructor(arg0: number, arg1: number);
        get x(): number;
        get z(): number;
    }
    export class $MinimapTile {
        isSuccess(): boolean;
        setRGB(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        setHeight(arg0: number, arg1: number, arg2: number): void;
        recycle(): void;
        hasTerrain(): boolean;
        setCode(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        setSuccess(arg0: boolean): void;
        getGreen(arg0: number, arg1: number, arg2: number): number;
        getBlue(arg0: number, arg1: number, arg2: number): number;
        getRed(arg0: number, arg1: number, arg2: number): number;
        getX(): number;
        getZ(): number;
        getHeight(arg0: number, arg1: number): number;
        static getANewTile(arg0: $ModSettings, arg1: number, arg2: number, arg3: number): $MinimapTile;
        setHasTerrain(arg0: boolean): void;
        setHighlights(arg0: number[]): void;
        isHasSomething(): boolean;
        setWasTransfered(arg0: boolean): void;
        pixelChanged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
        setHasSomething(arg0: boolean): void;
        getHighlights(): number[];
        setHighlightVersion(arg0: number): void;
        getHighlightVersion(): number;
        isSlimeChunk(): boolean;
        static isSlimeChunk(arg0: $ModSettings, arg1: number, arg2: number, arg3: number): boolean;
        isChunkGrid(): boolean;
        isWasTransfered(): boolean;
        static recycled: $List<$MinimapTile>;
        caveLevel: number;
        constructor(arg0: $ModSettings, arg1: number, arg2: number, arg3: number);
        get x(): number;
        get z(): number;
        get chunkGrid(): boolean;
    }
}
