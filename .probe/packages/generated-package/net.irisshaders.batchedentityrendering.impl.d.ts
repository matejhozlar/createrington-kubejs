declare module "net.irisshaders.batchedentityrendering.impl.MemoryTrackingBuffer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MemoryTrackingBuffer$$Interface {
get "usedSize"(): long
get "allocatedSize"(): long
}

export class $MemoryTrackingBuffer implements $MemoryTrackingBuffer$$Interface {
 "freeAndDeleteBuffer"(): void
 "getUsedSize"(): long
 "getAllocatedSize"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MemoryTrackingBuffer$$Type = ($MemoryTrackingBuffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MemoryTrackingBuffer$$Original = $MemoryTrackingBuffer;}
declare module "net.irisshaders.batchedentityrendering.impl.RenderBuffersExt" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RenderBuffersExt$$Interface {
}

export class $RenderBuffersExt implements $RenderBuffersExt$$Interface {
 "beginLevelRendering"(): void
 "endLevelRendering"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderBuffersExt$$Type = ($RenderBuffersExt);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderBuffersExt$$Original = $RenderBuffersExt;}
declare module "net.irisshaders.batchedentityrendering.impl.MemoryTrackingRenderBuffers" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MemoryTrackingRenderBuffers$$Interface {
get "entityBufferAllocatedSize"(): long
get "maxBegins"(): integer
get "miscBufferAllocatedSize"(): long
}

export class $MemoryTrackingRenderBuffers implements $MemoryTrackingRenderBuffers$$Interface {
 "getEntityBufferAllocatedSize"(): long
 "getMaxBegins"(): integer
 "getMiscBufferAllocatedSize"(): long
 "freeAndDeleteBuffers"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MemoryTrackingRenderBuffers$$Type = ($MemoryTrackingRenderBuffers);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MemoryTrackingRenderBuffers$$Original = $MemoryTrackingRenderBuffers;}
declare module "net.irisshaders.batchedentityrendering.impl.TransparencyType" {
import {$Enum} from "java.lang.Enum"

export class $TransparencyType extends $Enum<($TransparencyType)> {
static readonly "DECAL": $TransparencyType
static readonly "GENERAL_TRANSPARENT": $TransparencyType
static readonly "OPAQUE": $TransparencyType
static readonly "WATER_MASK": $TransparencyType
static readonly "OPAQUE_DECAL": $TransparencyType
static readonly "LINES": $TransparencyType

public static "values"(): ($TransparencyType)[]
public static "valueOf"(arg0: StringJS): $TransparencyType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransparencyType$$Type = (("opaque") | ("opaque_decal") | ("general_transparent") | ("decal") | ("water_mask") | ("lines"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TransparencyType$$Original = $TransparencyType;}
declare module "net.irisshaders.batchedentityrendering.impl.BufferBuilderExt" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BufferBuilderExt$$Interface {

(): void
}

export class $BufferBuilderExt implements $BufferBuilderExt$$Interface {
 "splitStrip"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferBuilderExt$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BufferBuilderExt$$Original = $BufferBuilderExt;}
declare module "net.irisshaders.batchedentityrendering.impl.BlendingStateHolder" {
import {$TransparencyType, $TransparencyType$$Type} from "net.irisshaders.batchedentityrendering.impl.TransparencyType"

export interface $BlendingStateHolder$$Interface {
set "transparencyType"(value: $TransparencyType$$Type)
get "transparencyType"(): $TransparencyType
}

export class $BlendingStateHolder implements $BlendingStateHolder$$Interface {
 "setTransparencyType"(arg0: $TransparencyType$$Type): void
 "getTransparencyType"(): $TransparencyType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlendingStateHolder$$Type = ($BlendingStateHolder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlendingStateHolder$$Original = $BlendingStateHolder;}
declare module "net.irisshaders.batchedentityrendering.impl.DrawCallTrackingRenderBuffers" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DrawCallTrackingRenderBuffers$$Interface {
get "renderTypes"(): integer
get "drawCalls"(): integer
}

export class $DrawCallTrackingRenderBuffers implements $DrawCallTrackingRenderBuffers$$Interface {
 "resetDrawCounts"(): void
 "getRenderTypes"(): integer
 "getDrawCalls"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrawCallTrackingRenderBuffers$$Type = ($DrawCallTrackingRenderBuffers);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DrawCallTrackingRenderBuffers$$Original = $DrawCallTrackingRenderBuffers;}
