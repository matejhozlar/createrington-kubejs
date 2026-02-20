declare module "xaero.common.core.IBufferSource" {
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export interface $IBufferSource$$Interface {
set "xaero_lastRenderType"(value: $RenderType$$Type)
get "xaero_lastRenderType"(): $RenderType
}

export class $IBufferSource implements $IBufferSource$$Interface {
 "setXaero_lastRenderType"(arg0: $RenderType$$Type): void
 "getXaero_lastRenderType"(): $RenderType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBufferSource$$Type = ($IBufferSource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IBufferSource$$Original = $IBufferSource;}
declare module "xaero.common.core.IXaeroMinimapSMultiBlockChangePacket" {
import {$SectionPos, $SectionPos$$Type} from "net.minecraft.core.SectionPos"

export interface $IXaeroMinimapSMultiBlockChangePacket$$Interface {

(): $SectionPos$$Type
}

export class $IXaeroMinimapSMultiBlockChangePacket implements $IXaeroMinimapSMultiBlockChangePacket$$Interface {
 "xaero_mm_getSectionPos"(): $SectionPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IXaeroMinimapSMultiBlockChangePacket$$Type = (() => $SectionPos$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IXaeroMinimapSMultiBlockChangePacket$$Original = $IXaeroMinimapSMultiBlockChangePacket;}
declare module "xaero.common.core.IXaeroMinimapMinecraftClient" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IXaeroMinimapMinecraftClient$$Interface {

(): integer
get "xaeroMinimap_fps"(): integer
}

export class $IXaeroMinimapMinecraftClient implements $IXaeroMinimapMinecraftClient$$Interface {
 "getXaeroMinimap_fps"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IXaeroMinimapMinecraftClient$$Type = (() => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IXaeroMinimapMinecraftClient$$Original = $IXaeroMinimapMinecraftClient;}
declare module "xaero.common.core.IXaeroMinimapClientPlayNetHandler" {
import {$XaeroMinimapSession, $XaeroMinimapSession$$Type} from "xaero.common.XaeroMinimapSession"

export interface $IXaeroMinimapClientPlayNetHandler$$Interface {
set "xaero_minimapSession"(value: $XaeroMinimapSession$$Type)
get "xaero_minimapSession"(): $XaeroMinimapSession
}

export class $IXaeroMinimapClientPlayNetHandler implements $IXaeroMinimapClientPlayNetHandler$$Interface {
 "setXaero_minimapSession"(arg0: $XaeroMinimapSession$$Type): void
 "getXaero_minimapSession"(): $XaeroMinimapSession
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IXaeroMinimapClientPlayNetHandler$$Type = ($IXaeroMinimapClientPlayNetHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IXaeroMinimapClientPlayNetHandler$$Original = $IXaeroMinimapClientPlayNetHandler;}
