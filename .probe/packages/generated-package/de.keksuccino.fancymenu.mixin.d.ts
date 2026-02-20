declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinMinecraft" {
import {$ResourceLoadStateTracker} from "net.minecraft.client.ResourceLoadStateTracker"

export interface $IMixinMinecraft$$Interface {
get "reloadStateTrackerFancyMenu"(): $ResourceLoadStateTracker
}

export class $IMixinMinecraft implements $IMixinMinecraft$$Interface {
 "openChatScreenFancyMenu"(arg0: StringJS): void
 "getReloadStateTrackerFancyMenu"(): $ResourceLoadStateTracker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinMinecraft$$Type = ($IMixinMinecraft);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMixinMinecraft$$Original = $IMixinMinecraft;}
declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinBossHealthOverlay" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$LerpingBossEvent, $LerpingBossEvent$$Type} from "net.minecraft.client.gui.components.LerpingBossEvent"

export interface $IMixinBossHealthOverlay$$Interface {

(): $Map$$Type<($UUID$$Type), ($LerpingBossEvent$$Type)>
get "_events_FancyMenu"(): $Map<($UUID), ($LerpingBossEvent)>
}

export class $IMixinBossHealthOverlay implements $IMixinBossHealthOverlay$$Interface {
 "get_events_FancyMenu"(): $Map<($UUID), ($LerpingBossEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinBossHealthOverlay$$Type = (() => $Map$$Type<($UUID$$Type), ($LerpingBossEvent$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMixinBossHealthOverlay$$Original = $IMixinBossHealthOverlay;}
declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinMusicManager" {
import {$SoundInstance, $SoundInstance$$Type} from "net.minecraft.client.resources.sounds.SoundInstance"

export interface $IMixinMusicManager$$Interface {

(): $SoundInstance$$Type
get "currentMusic_FancyMenu"(): $SoundInstance
}

export class $IMixinMusicManager implements $IMixinMusicManager$$Interface {
 "getCurrentMusic_FancyMenu"(): $SoundInstance
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinMusicManager$$Type = (() => $SoundInstance$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMixinMusicManager$$Original = $IMixinMusicManager;}
declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinSplashRenderer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMixinSplashRenderer$$Interface {

(): StringJS
get "splashFancyMenu"(): StringJS
}

export class $IMixinSplashRenderer implements $IMixinSplashRenderer$$Interface {
 "getSplashFancyMenu"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinSplashRenderer$$Type = (() => StringJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMixinSplashRenderer$$Original = $IMixinSplashRenderer;}
declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinAbstractWidget" {
import {$Component$$Type} from "net.minecraft.network.chat.Component"

export interface $IMixinAbstractWidget$$Interface {
set "messageFieldFancyMenu"(value: $Component$$Type)
set "heightFancyMenu"(value: integer)
get "alphaFancyMenu"(): float
}

export class $IMixinAbstractWidget implements $IMixinAbstractWidget$$Interface {
 "setMessageFieldFancyMenu"(arg0: $Component$$Type): void
 "setHeightFancyMenu"(arg0: integer): void
 "getAlphaFancyMenu"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinAbstractWidget$$Type = ($IMixinAbstractWidget);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMixinAbstractWidget$$Original = $IMixinAbstractWidget;}
declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinClientLanguage" {
import {$Map, $Map$$Type} from "java.util.Map"

export interface $IMixinClientLanguage$$Interface {

(): $Map$$Type<(StringJS), (StringJS)>
get "storageFancyMenu"(): $Map<(StringJS), (StringJS)>
}

export class $IMixinClientLanguage implements $IMixinClientLanguage$$Interface {
 "getStorageFancyMenu"(): $Map<(StringJS), (StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinClientLanguage$$Type = (() => $Map$$Type<(StringJS), (StringJS)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMixinClientLanguage$$Original = $IMixinClientLanguage;}
declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinPlayerModel" {
import {$ModelPart, $ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"

export interface $IMixinPlayerModel$$Interface {

(): $ModelPart$$Type
get "cloakFancyMenu"(): $ModelPart
}

export class $IMixinPlayerModel implements $IMixinPlayerModel$$Interface {
 "getCloakFancyMenu"(): $ModelPart
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinPlayerModel$$Type = (() => $ModelPart$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMixinPlayerModel$$Original = $IMixinPlayerModel;}
declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinOptions" {
import {$Options$FieldAccess$$Type} from "net.minecraft.client.Options$FieldAccess"
import {$Set} from "java.util.Set"
import {$PlayerModelPart} from "net.minecraft.world.entity.player.PlayerModelPart"

export interface $IMixinOptions$$Interface {
get "modelPartsFancyMenu"(): $Set<($PlayerModelPart)>
}

export class $IMixinOptions implements $IMixinOptions$$Interface {
 "invokeProcessOptionsFancyMenu"(arg0: $Options$FieldAccess$$Type): void
 "getModelPartsFancyMenu"(): $Set<($PlayerModelPart)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinOptions$$Type = ($IMixinOptions);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMixinOptions$$Original = $IMixinOptions;}
declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinGui" {
import {$Component} from "net.minecraft.network.chat.Component"

export interface $IMixinGui$$Interface {
get "_subtitle_FancyMenu"(): $Component
get "_title_FancyMenu"(): $Component
}

export class $IMixinGui implements $IMixinGui$$Interface {
 "get_subtitle_FancyMenu"(): $Component
 "get_title_FancyMenu"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinGui$$Type = ($IMixinGui);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMixinGui$$Original = $IMixinGui;}
declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinButton" {
import {$Button$OnPress, $Button$OnPress$$Type} from "net.minecraft.client.gui.components.Button$OnPress"

export interface $IMixinButton$$Interface {

(arg0: $Button$OnPress): void
set "pressActionFancyMenu"(value: $Button$OnPress$$Type)
}

export class $IMixinButton implements $IMixinButton$$Interface {
 "setPressActionFancyMenu"(arg0: $Button$OnPress$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinButton$$Type = ((arg0: $Button$OnPress) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMixinButton$$Original = $IMixinButton;}
declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinReceivingLevelScreen" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMixinReceivingLevelScreen$$Interface {

(arg0: long): void
set "createdAtFancyMenu"(value: long)
}

export class $IMixinReceivingLevelScreen implements $IMixinReceivingLevelScreen$$Interface {
 "setCreatedAtFancyMenu"(arg0: long): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinReceivingLevelScreen$$Type = ((arg0: long) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMixinReceivingLevelScreen$$Original = $IMixinReceivingLevelScreen;}
declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinGuiGraphics" {
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"

export interface $IMixinGuiGraphics$$Interface {

(): $MultiBufferSource$BufferSource$$Type
get "bufferSource_FancyMenu"(): $MultiBufferSource$BufferSource
}

export class $IMixinGuiGraphics implements $IMixinGuiGraphics$$Interface {
 "getBufferSource_FancyMenu"(): $MultiBufferSource$BufferSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinGuiGraphics$$Type = (() => $MultiBufferSource$BufferSource$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMixinGuiGraphics$$Original = $IMixinGuiGraphics;}
declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinGameRenderer" {
import {$PostChain, $PostChain$$Type} from "net.minecraft.client.renderer.PostChain"

export interface $IMixinGameRenderer$$Interface {

(): $PostChain$$Type
get "blurEffect_FancyMenu"(): $PostChain
}

export class $IMixinGameRenderer implements $IMixinGameRenderer$$Interface {
 "getBlurEffect_FancyMenu"(): $PostChain
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinGameRenderer$$Type = (() => $PostChain$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMixinGameRenderer$$Original = $IMixinGameRenderer;}
declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinScreen" {
import {$GuiEventListener, $GuiEventListener$$Type} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$NarratableEntry} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$List} from "java.util.List"
import {$Renderable} from "net.minecraft.client.gui.components.Renderable"

export interface $IMixinScreen$$Interface {
get "_initialized_FancyMenu"(): boolean
get "renderablesFancyMenu"(): $List<($Renderable)>
get "childrenFancyMenu"(): $List<($GuiEventListener)>
get "narratablesFancyMenu"(): $List<($NarratableEntry)>
}

export class $IMixinScreen implements $IMixinScreen$$Interface {
 "get_initialized_FancyMenu"(): boolean
 "getRenderablesFancyMenu"(): $List<($Renderable)>
 "getChildrenFancyMenu"(): $List<($GuiEventListener)>
 "getNarratablesFancyMenu"(): $List<($NarratableEntry)>
 "invokeRemoveWidgetFancyMenu"(arg0: $GuiEventListener$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinScreen$$Type = ($IMixinScreen);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMixinScreen$$Original = $IMixinScreen;}
