declare module "xaero.map.file.export.PNGExporter" {
import {$MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$PNGExportResult} from "xaero.map.file.export.PNGExportResult"
import {$MapTileSelection$$Type} from "xaero.map.gui.MapTileSelection"
import {$Path$$Type} from "java.nio.file.Path"
import {$Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$OldFormatSupport$$Type} from "xaero.map.file.OldFormatSupport"
import {$DimensionType$$Type} from "net.minecraft.world.level.dimension.DimensionType"

export class $PNGExporter {
constructor(arg0: $Path$$Type)

public "export"(arg0: $MapProcessor$$Type, arg1: $Registry$$Type<($Biome$$Type)>, arg2: $Registry$$Type<($DimensionType$$Type)>, arg3: $MapTileSelection$$Type, arg4: $OldFormatSupport$$Type): $PNGExportResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PNGExporter$$Type = ($PNGExporter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PNGExporter$$Original = $PNGExporter;}
