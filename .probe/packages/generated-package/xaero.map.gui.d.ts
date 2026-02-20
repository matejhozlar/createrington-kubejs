declare module "xaero.map.gui.ExportScreen" {
import {$MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$Screen$DeferredTooltipRendering} from "net.minecraft.client.gui.screens.Screen$DeferredTooltipRendering"
import {$CycleButton} from "net.minecraft.client.gui.components.CycleButton"
import {$ConfigOption$$Type} from "xaero.lib.common.config.option.ConfigOption"
import {$MapTileSelection, $MapTileSelection$$Type} from "xaero.map.gui.MapTileSelection"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$List} from "java.util.List"
import {$NarratorStatus} from "net.minecraft.client.NarratorStatus"
import {$CubeMap} from "net.minecraft.client.renderer.CubeMap"
import {$Font} from "net.minecraft.client.gui.Font"
import {$ScreenExtensions} from "net.fabricmc.fabric.impl.client.screen.ScreenExtensions"
import {$Component} from "net.minecraft.network.chat.Component"
import {$PanoramaRenderer} from "net.minecraft.client.renderer.PanoramaRenderer"
import {$ConfigOptionScreenEntry} from "xaero.lib.client.config.option.ui.ConfigOptionScreenEntry"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$PNGExportResult$$Type} from "xaero.map.file.export.PNGExportResult"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$NarratableEntry} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$GuiSettings} from "xaero.lib.client.gui.GuiSettings"
import {$Executor} from "java.util.concurrent.Executor"
import {$Minecraft} from "net.minecraft.client.Minecraft"
import {$Renderable} from "net.minecraft.client.gui.components.Renderable"

export class $ExportScreen extends $GuiSettings {
static readonly "MENU_BACKGROUND": $ResourceLocation
 "minecraft": $Minecraft
 "parent": $Screen
static readonly "INWORLD_FOOTER_SEPARATOR": $ResourceLocation
 "deferredTooltipRendering": $Screen$DeferredTooltipRendering
static readonly "CUBE_MAP": $CubeMap
 "title": $Component
static readonly "FOOTER_SEPARATOR": $ResourceLocation
 "narratorButton": $CycleButton<($NarratorStatus)>
readonly "renderables": $List<($Renderable)>
static readonly "INWORLD_HEADER_SEPARATOR": $ResourceLocation
 "fullExport": boolean
readonly "narratables": $List<($NarratableEntry)>
 "width": integer
static readonly "PANORAMA": $PanoramaRenderer
readonly "screenExecutor": $Executor
 "escape": $Screen
static readonly "HEADER_SEPARATOR": $ResourceLocation
 "height": integer
 "font": $Font

constructor(arg0: $Screen$$Type, arg1: $Screen$$Type, arg2: $MapProcessor$$Type, arg3: $MapTileSelection$$Type)

public "init"(): void
public "getSelection"(): $MapTileSelection
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "primaryOptionEntry"<T>(arg0: $ConfigOption$$Type<(T)>): $ConfigOptionScreenEntry<(T)>
public "onExportDone"(arg0: $PNGExportResult$$Type): void
public static "getExtensions"(arg0: $Screen$$Type): $ScreenExtensions
get "selection"(): $MapTileSelection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExportScreen$$Type = ($ExportScreen);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExportScreen$$Original = $ExportScreen;}
declare module "xaero.map.gui.MapTileSelection" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $MapTileSelection {
constructor(arg0: integer, arg1: integer)

public "setEnd"(arg0: integer, arg1: integer): void
public "getRight"(): integer
public "getLeft"(): integer
public "getBottom"(): integer
public "getStartX"(): integer
public "getStartZ"(): integer
public "getEndZ"(): integer
public "getEndX"(): integer
public "getTop"(): integer
get "right"(): integer
get "left"(): integer
get "bottom"(): integer
get "startX"(): integer
get "startZ"(): integer
get "endZ"(): integer
get "endX"(): integer
get "top"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapTileSelection$$Type = ($MapTileSelection);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapTileSelection$$Original = $MapTileSelection;}
