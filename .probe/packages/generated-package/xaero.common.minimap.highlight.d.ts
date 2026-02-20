declare module "xaero.common.minimap.highlight.HighlighterRegistry" {
import {$List} from "java.util.List"
import {$AbstractHighlighter, $AbstractHighlighter$$Type} from "xaero.common.minimap.highlight.AbstractHighlighter"

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
declare module "xaero.common.minimap.highlight.DimensionHighlighterHandler" {
import {$MinimapWriter$$Type} from "xaero.common.minimap.write.MinimapWriter"
import {$HighlighterRegistry$$Type} from "xaero.common.minimap.highlight.HighlighterRegistry"
import {$InfoDisplayCompiler$$Type} from "xaero.hud.minimap.info.render.compile.InfoDisplayCompiler"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export class $DimensionHighlighterHandler {
constructor(arg0: $ResourceKey$$Type<($Level)>, arg1: $HighlighterRegistry$$Type, arg2: $MinimapWriter$$Type)

public "getVersion"(): integer
public "requestRefresh"(arg0: integer, arg1: integer): void
public "requestRefresh"(): void
public "shouldApplyTileChunkHighlights"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: boolean): boolean
public "applyChunkHighlightColors"(arg0: integer, arg1: integer): (integer)[]
public "shouldApplyRegionHighlights"(arg0: integer, arg1: integer, arg2: boolean): boolean
public "addBlockHighlightTooltips"(arg0: $InfoDisplayCompiler$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: boolean): void
get "version"(): integer
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
