declare module "xaero.map.core.IWorldMapMinecraftClient" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IWorldMapMinecraftClient$$Interface {

(): integer
get "xaeroWorldMap_fps"(): integer
}

export class $IWorldMapMinecraftClient implements $IWorldMapMinecraftClient$$Interface {
 "getXaeroWorldMap_fps"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWorldMapMinecraftClient$$Type = (() => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IWorldMapMinecraftClient$$Original = $IWorldMapMinecraftClient;}
declare module "xaero.map.core.IWorldMapClientPlayNetHandler" {
import {$WorldMapSession, $WorldMapSession$$Type} from "xaero.map.WorldMapSession"

export interface $IWorldMapClientPlayNetHandler$$Interface {
get "xaero_worldmapSession"(): $WorldMapSession
set "xaero_worldmapSession"(value: $WorldMapSession$$Type)
}

export class $IWorldMapClientPlayNetHandler implements $IWorldMapClientPlayNetHandler$$Interface {
 "getXaero_worldmapSession"(): $WorldMapSession
 "setXaero_worldmapSession"(arg0: $WorldMapSession$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWorldMapClientPlayNetHandler$$Type = ($IWorldMapClientPlayNetHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IWorldMapClientPlayNetHandler$$Original = $IWorldMapClientPlayNetHandler;}
declare module "xaero.map.core.IWorldMapSMultiBlockChangePacket" {
import {$SectionPos, $SectionPos$$Type} from "net.minecraft.core.SectionPos"

export interface $IWorldMapSMultiBlockChangePacket$$Interface {

(): $SectionPos$$Type
}

export class $IWorldMapSMultiBlockChangePacket implements $IWorldMapSMultiBlockChangePacket$$Interface {
 "xaero_wm_getSectionPos"(): $SectionPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWorldMapSMultiBlockChangePacket$$Type = (() => $SectionPos$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IWorldMapSMultiBlockChangePacket$$Original = $IWorldMapSMultiBlockChangePacket;}
declare module "xaero.map.core.IWorldMapServerLevel" {
import {$ServerWorldCapabilities, $ServerWorldCapabilities$$Type} from "xaero.map.capabilities.ServerWorldCapabilities"

export interface $IWorldMapServerLevel$$Interface {
set "xaero_wm_capabilities"(value: $ServerWorldCapabilities$$Type)
get "xaero_wm_capabilities"(): $ServerWorldCapabilities
}

export class $IWorldMapServerLevel implements $IWorldMapServerLevel$$Interface {
 "setXaero_wm_capabilities"(arg0: $ServerWorldCapabilities$$Type): void
 "getXaero_wm_capabilities"(): $ServerWorldCapabilities
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWorldMapServerLevel$$Type = ($IWorldMapServerLevel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IWorldMapServerLevel$$Original = $IWorldMapServerLevel;}
