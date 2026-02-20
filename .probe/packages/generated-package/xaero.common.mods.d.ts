declare module "xaero.common.mods.SupportIris" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SupportIris {
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SupportIris$$Type = ($SupportIris);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SupportIris$$Original = $SupportIris;}
declare module "xaero.common.mods.SupportXaeroWorldmap" {
import {$MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$MultiTextureRenderTypeRendererProvider$$Type} from "xaero.common.graphics.renderer.multitexture.MultiTextureRenderTypeRendererProvider"
import {$MapRegion$$Type} from "xaero.map.region.MapRegion"
import {$MultiTextureRenderTypeRenderer$$Type} from "xaero.common.graphics.renderer.multitexture.MultiTextureRenderTypeRenderer"
import {$MapTileChunk$$Type} from "xaero.map.region.MapTileChunk"
import {$ConfigOption$$Type} from "xaero.lib.common.config.option.ConfigOption"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List} from "java.util.List"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$RadarRenderer$$Type} from "xaero.hud.minimap.radar.render.element.RadarRenderer"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MinimapRendererHelper$$Type} from "xaero.common.minimap.render.MinimapRendererHelper"
import {$HighlighterRegistry$$Type} from "xaero.common.minimap.highlight.HighlighterRegistry"
import {$IXaeroMinimap$$Type} from "xaero.common.IXaeroMinimap"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$MinimapSession$$Type} from "xaero.hud.minimap.module.MinimapSession"

export class $SupportXaeroWorldmap {
 "compatibilityVersion": integer
static "WORLDMAP_COMPATIBILITY_VERSION": integer
static readonly "MINIMAP_MW": StringJS
static readonly "black": integer
static readonly "slime": integer

constructor(arg0: $IXaeroMinimap$$Type)

public "isStainedGlassDisplayed"(): boolean
public "getClaimsFillOpacity"(): integer
public "getWorldMapTerrainDepth"(): boolean
public "getWorldMapTerrainSlopes"(): integer
public "getClaimsBorderOpacity"(): integer
public "getWorldMapFlowers"(): boolean
public "getCaveModeDepth"(): integer
public "getDisplayClaims"(): boolean
public "getBiomeBlending"(): boolean
public "isLegibleCaveMaps"(): boolean
public "getAdjustHeightForCarpetLikeBlocks"(): boolean
public "drawMinimap"(arg0: $MinimapSession$$Type, arg1: $PoseStack$$Type, arg2: $MinimapRendererHelper$$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: boolean, arg10: double, arg11: double, arg12: $VertexConsumer$$Type, arg13: $MultiTextureRenderTypeRendererProvider$$Type): void
public "getManualCaveStart"(): integer
public "getWorldMapColours"(): integer
public "getSettingsScreen"(arg0: $Screen$$Type, arg1: $Screen$$Type): $Screen
public "getSettingsScreen"(arg0: $Screen$$Type): $Screen
public "getWorldMapBiomeColorsVanillaMode"(): boolean
public "caveLayersAreUsable"(): boolean
public "bumpLoadedRegion"(arg0: $MapProcessor$$Type, arg1: $MapRegion$$Type): void
public "getWorldMapScreenForOption"(arg0: $ConfigOption$$Type<(never)>, arg1: $Screen$$Type): $Screen
public "getPartialYTeleport"(): boolean
public "shouldPreventAutoCaveMode"(arg0: $Level$$Type): boolean
public "toggleChunkClaims"(): void
public "getMapDimension"(): $ResourceKey<($Level)>
public "openSettings"(): void
public "registerHighlighters"(arg0: $HighlighterRegistry$$Type): void
public "renderSlimeChunks"(arg0: $MapTileChunk$$Type, arg1: long, arg2: integer, arg3: integer, arg4: $PoseStack$$Type, arg5: $MinimapRendererHelper$$Type, arg6: $VertexConsumer$$Type): void
public "getCaveModeType"(): integer
public "isMultiplayerMap"(): boolean
public "getMultiworldIds"(arg0: $ResourceKey$$Type<($Level)>): $List<(StringJS)>
public "confirmPlayerRadarRender"(arg0: $Player$$Type): void
public "getMapDimensionScale"(): double
public "getWorldMapIgnoreHeightmaps"(): boolean
public "getPotentialMultiworldIds"(arg0: $ResourceKey$$Type<($Level)>): $List<(StringJS)>
public "tryToGetMultiworldName"(arg0: $ResourceKey$$Type<($Level)>, arg1: StringJS): StringJS
public "getWorldMapWaypoints"(): boolean
public "prepareMapTexturedRect"(arg0: $Matrix4f$$Type, arg1: float, arg2: float, arg3: integer, arg4: integer, arg5: float, arg6: float, arg7: $MapTileChunk$$Type, arg8: $MultiTextureRenderTypeRenderer$$Type, arg9: $MultiTextureRenderTypeRenderer$$Type, arg10: $MinimapRendererHelper$$Type): void
public "hasEnabledCaveLayers"(): boolean
public "worldMapIsRenderingRadar"(): boolean
public "tryToGetMultiworldId"(arg0: $ResourceKey$$Type<($Level)>): StringJS
public "getMinimapBrightness"(): float
public "createRadarRenderWrapper"(arg0: $RadarRenderer$$Type): void
get "stainedGlassDisplayed"(): boolean
get "claimsFillOpacity"(): integer
get "worldMapTerrainDepth"(): boolean
get "worldMapTerrainSlopes"(): integer
get "claimsBorderOpacity"(): integer
get "worldMapFlowers"(): boolean
get "caveModeDepth"(): integer
get "displayClaims"(): boolean
get "biomeBlending"(): boolean
get "legibleCaveMaps"(): boolean
get "adjustHeightForCarpetLikeBlocks"(): boolean
get "manualCaveStart"(): integer
get "worldMapColours"(): integer
get "worldMapBiomeColorsVanillaMode"(): boolean
get "partialYTeleport"(): boolean
get "mapDimension"(): $ResourceKey<($Level)>
get "caveModeType"(): integer
get "multiplayerMap"(): boolean
get "mapDimensionScale"(): double
get "worldMapIgnoreHeightmaps"(): boolean
get "worldMapWaypoints"(): boolean
get "minimapBrightness"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SupportXaeroWorldmap$$Type = ($SupportXaeroWorldmap);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SupportXaeroWorldmap$$Original = $SupportXaeroWorldmap;}
declare module "xaero.common.mods.SupportMods" {
import {$SupportIris} from "xaero.common.mods.SupportIris"
import {$SupportOpenPartiesAndClaims} from "xaero.common.mods.pac.SupportOpenPartiesAndClaims"
import {$IXaeroMinimap$$Type} from "xaero.common.IXaeroMinimap"
import {$SupportFramedBlocks} from "xaero.common.mods.SupportFramedBlocks"
import {$SupportXaeroWorldmap} from "xaero.common.mods.SupportXaeroWorldmap"

export class $SupportMods {
 "supportIris": $SupportIris
 "iris": boolean
 "xaeroPac": $SupportOpenPartiesAndClaims
 "optifine": boolean
 "ftbTeams": boolean
 "supportFramedBlocks": $SupportFramedBlocks
 "vivecraft": boolean
 "worldmapSupport": $SupportXaeroWorldmap

constructor(arg0: $IXaeroMinimap$$Type)

public "framedBlocks"(): boolean
public static "checkForMinimapDuplicates"(arg0: StringJS): void
public "shouldUseWorldMapChunks"(): boolean
public "shouldUseWorldMapCaveChunks"(): boolean
public "worldmap"(): boolean
public "pac"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SupportMods$$Type = ($SupportMods);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SupportMods$$Original = $SupportMods;}
declare module "xaero.common.mods.SupportFramedBlocks" {
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SupportFramedBlocks {
constructor()

public "isFrameBlock"(arg0: $Level$$Type, arg1: $Registry$$Type<($Block$$Type)>, arg2: $BlockState$$Type): boolean
public "unpackFramedBlock"(arg0: $Level$$Type, arg1: $Registry$$Type<($Block$$Type)>, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type): $BlockState
public "onWorldChange"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SupportFramedBlocks$$Type = ($SupportFramedBlocks);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SupportFramedBlocks$$Original = $SupportFramedBlocks;}
