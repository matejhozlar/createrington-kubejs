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
public "getX"(): integer
public "getZ"(): integer
public "bindTexture"(arg0: integer): integer
public "getTile"(arg0: integer, arg1: integer): $MinimapTile
public "setChanged"(arg0: boolean): void
public "copyBuffer"(arg0: integer, arg1: $IntBuffer$$Type): void
public "setTile"(arg0: integer, arg1: integer, arg2: $MinimapTile$$Type): void
public "isChanged"(): boolean
public "updateBuffers"(arg0: integer, arg1: ((integer)[])[]): void
public "isHasSomething"(): boolean
public "setGlTexture"(arg0: integer, arg1: integer): void
public "recycleTiles"(): void
public "isRefreshRequired"(arg0: integer): boolean
public "setHasSomething"(arg0: boolean): void
public "getGlTexture"(arg0: integer): integer
public "getLevelsBuffered"(): integer
public "setLevelsBuffered"(arg0: integer): void
public "setRefreshRequired"(arg0: integer, arg1: boolean): void
public "setBlockTextureUpload"(arg0: boolean): void
public "getLevelToRefresh"(arg0: integer): integer
public "putColour"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (integer)[], arg6: integer): void
public "isBlockTextureUpload"(): boolean
get "x"(): integer
get "z"(): integer
set "changed"(value: boolean)
get "changed"(): boolean
get "hasSomething"(): boolean
set "hasSomething"(value: boolean)
get "levelsBuffered"(): integer
set "levelsBuffered"(value: integer)
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
public "getX"(): integer
public "getZ"(): integer
public "getRed"(arg0: integer, arg1: integer, arg2: integer): integer
public "getGreen"(arg0: integer, arg1: integer, arg2: integer): integer
public "getBlue"(arg0: integer, arg1: integer, arg2: integer): integer
public "isSuccess"(): boolean
public "setRGB"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "getHeight"(arg0: integer, arg1: integer): integer
public "hasTerrain"(): boolean
public "setSuccess"(arg0: boolean): void
public "setCode"(arg0: integer, arg1: integer, arg2: long, arg3: byte, arg4: byte, arg5: byte, arg6: byte): void
public "recycle"(): void
public static "isSlimeChunk"(arg0: $ModSettings$$Type, arg1: integer, arg2: integer, arg3: long): boolean
public "isSlimeChunk"(): boolean
public "getHighlights"(): (integer)[]
public "isHasSomething"(): boolean
public "setHighlights"(arg0: (integer)[]): void
public "setHasTerrain"(arg0: boolean): void
public "setHasSomething"(arg0: boolean): void
public "pixelChanged"(arg0: integer, arg1: integer, arg2: long, arg3: byte, arg4: byte, arg5: byte, arg6: byte): boolean
public "setWasTransfered"(arg0: boolean): void
public static "getANewTile"(arg0: $ModSettings$$Type, arg1: integer, arg2: integer, arg3: long): $MinimapTile
public "getHighlightVersion"(): integer
public "setHighlightVersion"(arg0: integer): void
public "isChunkGrid"(): boolean
public "isWasTransfered"(): boolean
get "x"(): integer
get "z"(): integer
get "success"(): boolean
set "success"(value: boolean)
get "slimeChunk"(): boolean
get "highlights"(): (integer)[]
get "hasSomething"(): boolean
set "highlights"(value: (integer)[])
set "hasSomething"(value: boolean)
set "wasTransfered"(value: boolean)
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
