declare module "xaero.map.highlight.MapRegionHighlightsPreparer" {
import {$MapRegion$$Type} from "xaero.map.region.MapRegion"

export class $MapRegionHighlightsPreparer {
constructor()

public "prepare"(arg0: $MapRegion$$Type, arg1: integer, arg2: integer, arg3: boolean): void
public "prepare"(arg0: $MapRegion$$Type, arg1: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapRegionHighlightsPreparer$$Type = ($MapRegionHighlightsPreparer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapRegionHighlightsPreparer$$Original = $MapRegionHighlightsPreparer;}
declare module "xaero.map.highlight.AbstractHighlighter" {
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $AbstractHighlighter {
public "getBlockHighlightSubtleTooltip"(arg0: $ResourceKey$$Type<($Level)>, arg1: integer, arg2: integer): $Component
public "getBlockHighlightBluntTooltip"(arg0: $ResourceKey$$Type<($Level)>, arg1: integer, arg2: integer): $Component
public "chunkIsHighlit"(arg0: $ResourceKey$$Type<($Level)>, arg1: integer, arg2: integer): boolean
public "addMinimapBlockHighlightTooltips"(arg0: $List$$Type<($Component$$Type)>, arg1: $ResourceKey$$Type<($Level)>, arg2: integer, arg3: integer, arg4: integer): void
public "isCoveringOutsideDiscovered"(): boolean
public "getChunkHighlitColor"(arg0: $ResourceKey$$Type<($Level)>, arg1: integer, arg2: integer): (integer)[]
public "regionHasHighlights"(arg0: $ResourceKey$$Type<($Level)>, arg1: integer, arg2: integer): boolean
public "calculateRegionHash"(arg0: $ResourceKey$$Type<($Level)>, arg1: integer, arg2: integer): integer
get "coveringOutsideDiscovered"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractHighlighter$$Type = ($AbstractHighlighter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractHighlighter$$Original = $AbstractHighlighter;}
declare module "xaero.map.highlight.HighlighterRegistry" {
import {$AbstractHighlighter, $AbstractHighlighter$$Type} from "xaero.map.highlight.AbstractHighlighter"
import {$List} from "java.util.List"

export class $HighlighterRegistry {
constructor()

public "end"(): void
public "register"(arg0: $AbstractHighlighter$$Type): void
public "getHighlighters"(): $List<($AbstractHighlighter)>
get "highlighters"(): $List<($AbstractHighlighter)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HighlighterRegistry$$Type = ($HighlighterRegistry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HighlighterRegistry$$Original = $HighlighterRegistry;}
declare module "xaero.map.highlight.DimensionHighlighterHandler" {
import {$MapDimension$$Type} from "xaero.map.world.MapDimension"
import {$PoolTextureDirectBufferUnit, $PoolTextureDirectBufferUnit$$Type} from "xaero.map.pool.buffer.PoolTextureDirectBufferUnit"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$HighlighterRegistry$$Type} from "xaero.map.highlight.HighlighterRegistry"
import {$Component} from "net.minecraft.network.chat.Component"

export class $DimensionHighlighterHandler {
constructor(arg0: $MapDimension$$Type, arg1: $ResourceKey$$Type<($Level)>, arg2: $HighlighterRegistry$$Type)

public static "getKey"(arg0: integer, arg1: integer): long
public "getBlockHighlightSubtleTooltip"(arg0: integer, arg1: integer, arg2: boolean): $Component
public "getBlockHighlightBluntTooltip"(arg0: integer, arg1: integer, arg2: boolean): $Component
public "shouldApplyTileChunkHighlights"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: boolean): boolean
public "getRegionHash"(arg0: integer, arg1: integer): integer
public "applyChunkHighlightColors"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $PoolTextureDirectBufferUnit$$Type, arg5: $PoolTextureDirectBufferUnit$$Type, arg6: boolean, arg7: boolean, arg8: boolean): $PoolTextureDirectBufferUnit
public "clearCachedHash"(arg0: integer, arg1: integer): void
public "clearCachedHashes"(): void
public "shouldApplyRegionHighlights"(arg0: integer, arg1: integer, arg2: boolean): boolean
public static "getXFromKey"(arg0: long): integer
public static "getZFromKey"(arg0: long): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimensionHighlighterHandler$$Type = ($DimensionHighlighterHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DimensionHighlighterHandler$$Original = $DimensionHighlighterHandler;}
