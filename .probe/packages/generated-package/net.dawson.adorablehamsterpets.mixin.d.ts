declare module "net.dawson.adorablehamsterpets.mixin.accessor.SlotAccessor" {
import {$Container, $Container$$Type} from "net.minecraft.world.Container"

export interface $SlotAccessor$$Interface {

(): $Container$$Type
}

export class $SlotAccessor implements $SlotAccessor$$Interface {
 "adorablehamsterpets$getInventory"(): $Container
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotAccessor$$Type = (() => $Container$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlotAccessor$$Original = $SlotAccessor;}
declare module "net.dawson.adorablehamsterpets.mixin.client.accessor.HandledScreenAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $HandledScreenAccessor$$Interface {
get "x"(): integer
get "y"(): integer
get "backgroundWidth"(): integer
}

export class $HandledScreenAccessor implements $HandledScreenAccessor$$Interface {
 "getX"(): integer
 "getY"(): integer
 "getBackgroundWidth"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HandledScreenAccessor$$Type = ($HandledScreenAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HandledScreenAccessor$$Original = $HandledScreenAccessor;}
declare module "net.dawson.adorablehamsterpets.mixin.client.LivingEntityRendererInvoker" {
import {$RenderLayer, $RenderLayer$$Type} from "net.minecraft.client.renderer.entity.layers.RenderLayer"

export interface $LivingEntityRendererInvoker$$Interface {

(arg0: $RenderLayer<(never), (never)>): boolean
}

export class $LivingEntityRendererInvoker implements $LivingEntityRendererInvoker$$Interface {
 "callAddFeature"(arg0: $RenderLayer$$Type<(never), (never)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityRendererInvoker$$Type = ((arg0: $RenderLayer<(never), (never)>) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingEntityRendererInvoker$$Original = $LivingEntityRendererInvoker;}
declare module "net.dawson.adorablehamsterpets.mixin.accessor.ScreenWidgetAdder" {
import {$GuiEventListener, $GuiEventListener$$Type} from "net.minecraft.client.gui.components.events.GuiEventListener"

export interface $ScreenWidgetAdder$$Interface {

(arg0: T): T
}

export class $ScreenWidgetAdder implements $ScreenWidgetAdder$$Interface {
 "adorablehamsterpets$addWidget"<T extends $GuiEventListener>(arg0: T): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenWidgetAdder$$Type = ((arg0: T) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenWidgetAdder$$Original = $ScreenWidgetAdder;}
