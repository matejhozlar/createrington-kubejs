declare module "vazkii.patchouli.mixin.client.AccessorKeyMapping" {
import {$Map} from "java.util.Map"
import {$KeyMapping} from "net.minecraft.client.KeyMapping"

export interface $AccessorKeyMapping$$Interface {
get "allKeyMappings"(): $Map<(StringJS), ($KeyMapping)>
}

export class $AccessorKeyMapping implements $AccessorKeyMapping$$Interface {
static "getAllKeyMappings"(): $Map<(StringJS), ($KeyMapping)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorKeyMapping$$Type = ($AccessorKeyMapping);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorKeyMapping$$Original = $AccessorKeyMapping;}
declare module "vazkii.patchouli.mixin.client.AccessorClientAdvancements" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$AdvancementHolder, $AdvancementHolder$$Type} from "net.minecraft.advancements.AdvancementHolder"
import {$AdvancementProgress, $AdvancementProgress$$Type} from "net.minecraft.advancements.AdvancementProgress"

export interface $AccessorClientAdvancements$$Interface {

(): $Map$$Type<($AdvancementHolder$$Type), ($AdvancementProgress$$Type)>
get "progress"(): $Map<($AdvancementHolder), ($AdvancementProgress)>
}

export class $AccessorClientAdvancements implements $AccessorClientAdvancements$$Interface {
 "getProgress"(): $Map<($AdvancementHolder), ($AdvancementProgress)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorClientAdvancements$$Type = (() => $Map$$Type<($AdvancementHolder$$Type), ($AdvancementProgress$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorClientAdvancements$$Original = $AccessorClientAdvancements;}
declare module "vazkii.patchouli.mixin.client.AccessorMultiBufferSource" {
import {$SequencedMap} from "java.util.SequencedMap"
import {$ByteBufferBuilder} from "com.mojang.blaze3d.vertex.ByteBufferBuilder"
import {$RenderType} from "net.minecraft.client.renderer.RenderType"

export interface $AccessorMultiBufferSource$$Interface {
get "fixedBuffers"(): $SequencedMap<($RenderType), ($ByteBufferBuilder)>
get "fallbackBuffer"(): $ByteBufferBuilder
}

export class $AccessorMultiBufferSource implements $AccessorMultiBufferSource$$Interface {
 "getFixedBuffers"(): $SequencedMap<($RenderType), ($ByteBufferBuilder)>
 "getFallbackBuffer"(): $ByteBufferBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorMultiBufferSource$$Type = ($AccessorMultiBufferSource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorMultiBufferSource$$Original = $AccessorMultiBufferSource;}
declare module "vazkii.patchouli.mixin.client.AccessorScreen" {
import {$NarratableEntry} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$List} from "java.util.List"
import {$Renderable} from "net.minecraft.client.gui.components.Renderable"

export interface $AccessorScreen$$Interface {
get "renderables"(): $List<($Renderable)>
get "narratables"(): $List<($NarratableEntry)>
}

export class $AccessorScreen implements $AccessorScreen$$Interface {
 "getRenderables"(): $List<($Renderable)>
 "getNarratables"(): $List<($NarratableEntry)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorScreen$$Type = ($AccessorScreen);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorScreen$$Original = $AccessorScreen;}
