declare module "xaero.common.minimap.region.MinimapChunk" {
import {$MinimapTile, $MinimapTile$$Type} from "xaero.common.minimap.region.MinimapTile"
import {$MinimapInterface$$Type} from "xaero.common.minimap.MinimapInterface"
import {$IntBuffer, $IntBuffer$$Type} from "java.nio.IntBuffer"

export class $MinimapChunk {
static readonly "LIGHT_LEVELS": integer
static readonly "INT_BUFFER_SIZE": integer
static readonly "SIZE_TILES": integer

constructor(arg0: integer, arg1: integer)

public "reset"(arg0: integer, arg1: integer): void
public "cleanup"(arg0: $MinimapInterface$$Type): void
public "getBuffer"(arg0: integer): $IntBuffer
public "setChanged"(arg0: boolean): void
public "putColour"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (integer)[], arg6: integer): void
public "bindTexture"(arg0: integer): integer
public "getX"(): integer
public "getZ"(): integer
public "getTile"(arg0: integer, arg1: integer): $MinimapTile
public "isChanged"(): boolean
public "copyBuffer"(arg0: integer, arg1: $IntBuffer$$Type): void
public "setTile"(arg0: integer, arg1: integer, arg2: $MinimapTile$$Type): void
public "setGlTexture"(arg0: integer, arg1: integer): void
public "setLevelsBuffered"(arg0: integer): void
public "getLevelsBuffered"(): integer
public "setHasSomething"(arg0: boolean): void
public "isRefreshRequired"(arg0: integer): boolean
public "getGlTexture"(arg0: integer): integer
public "recycleTiles"(): void
public "isHasSomething"(): boolean
public "setRefreshRequired"(arg0: integer, arg1: boolean): void
public "updateBuffers"(arg0: integer, arg1: ((integer)[])[]): void
public "setBlockTextureUpload"(arg0: boolean): void
public "getLevelToRefresh"(arg0: integer): integer
public "isBlockTextureUpload"(): boolean
set "changed"(value: boolean)
get "x"(): integer
get "z"(): integer
get "changed"(): boolean
set "levelsBuffered"(value: integer)
get "levelsBuffered"(): integer
set "hasSomething"(value: boolean)
get "hasSomething"(): boolean
set "blockTextureUpload"(value: boolean)
get "blockTextureUpload"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapChunk$$Type = ($MinimapChunk);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinimapChunk$$Original = $MinimapChunk;}
declare module "xaero.common.minimap.region.MinimapTile" {
import {$ModSettings$$Type} from "xaero.common.settings.ModSettings"
import {$List} from "java.util.List"

export class $MinimapTile {
static "recycled": $List<($MinimapTile)>
 "caveLevel": integer

constructor(arg0: $ModSettings$$Type, arg1: integer, arg2: integer, arg3: long)

public "setHeight"(arg0: integer, arg1: integer, arg2: integer): void
public "isSuccess"(): boolean
public "recycle"(): void
public "setCode"(arg0: integer, arg1: integer, arg2: long, arg3: byte, arg4: byte, arg5: byte, arg6: byte): void
public "getGreen"(arg0: integer, arg1: integer, arg2: integer): integer
public "getRed"(arg0: integer, arg1: integer, arg2: integer): integer
public "getBlue"(arg0: integer, arg1: integer, arg2: integer): integer
public "setSuccess"(arg0: boolean): void
public "getHeight"(arg0: integer, arg1: integer): integer
public static "isSlimeChunk"(arg0: $ModSettings$$Type, arg1: integer, arg2: integer, arg3: long): boolean
public "isSlimeChunk"(): boolean
public "getHighlights"(): (integer)[]
public "getX"(): integer
public "getZ"(): integer
public "setRGB"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "hasTerrain"(): boolean
public "pixelChanged"(arg0: integer, arg1: integer, arg2: long, arg3: byte, arg4: byte, arg5: byte, arg6: byte): boolean
public static "getANewTile"(arg0: $ModSettings$$Type, arg1: integer, arg2: integer, arg3: long): $MinimapTile
public "setHasSomething"(arg0: boolean): void
public "setWasTransfered"(arg0: boolean): void
public "setHasTerrain"(arg0: boolean): void
public "setHighlights"(arg0: (integer)[]): void
public "isHasSomething"(): boolean
public "getHighlightVersion"(): integer
public "setHighlightVersion"(arg0: integer): void
public "isChunkGrid"(): boolean
public "isWasTransfered"(): boolean
get "success"(): boolean
set "success"(value: boolean)
get "slimeChunk"(): boolean
get "highlights"(): (integer)[]
get "x"(): integer
get "z"(): integer
set "hasSomething"(value: boolean)
set "wasTransfered"(value: boolean)
set "highlights"(value: (integer)[])
get "hasSomething"(): boolean
get "highlightVersion"(): integer
set "highlightVersion"(value: integer)
get "chunkGrid"(): boolean
get "wasTransfered"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapTile$$Type = ($MinimapTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinimapTile$$Original = $MinimapTile;}
