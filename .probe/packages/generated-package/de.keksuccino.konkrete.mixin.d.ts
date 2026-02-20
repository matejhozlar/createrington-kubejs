declare module "de.keksuccino.konkrete.mixin.mixins.client.IMixinClientPacketListener" {
import {$CommandDispatcher, $CommandDispatcher$$Type} from "com.mojang.brigadier.CommandDispatcher"
import {$SharedSuggestionProvider, $SharedSuggestionProvider$$Type} from "net.minecraft.commands.SharedSuggestionProvider"

export interface $IMixinClientPacketListener$$Interface {
set "commandsKonkrete"(value: $CommandDispatcher$$Type<($SharedSuggestionProvider$$Type)>)
get "commandsKonkrete"(): $CommandDispatcher<($SharedSuggestionProvider)>
}

export class $IMixinClientPacketListener implements $IMixinClientPacketListener$$Interface {
 "setCommandsKonkrete"(arg0: $CommandDispatcher$$Type<($SharedSuggestionProvider$$Type)>): void
 "getCommandsKonkrete"(): $CommandDispatcher<($SharedSuggestionProvider)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinClientPacketListener$$Type = ($IMixinClientPacketListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMixinClientPacketListener$$Original = $IMixinClientPacketListener;}
declare module "de.keksuccino.konkrete.mixin.mixins.client.IMixinDynamicTexture" {
import {$NativeImage, $NativeImage$$Type} from "com.mojang.blaze3d.platform.NativeImage"

export interface $IMixinDynamicTexture$$Interface {
get "pixelsKonkrete"(): $NativeImage
set "pixelsKonkrete"(value: $NativeImage$$Type)
}

export class $IMixinDynamicTexture implements $IMixinDynamicTexture$$Interface {
 "getPixelsKonkrete"(): $NativeImage
 "setPixelsKonkrete"(arg0: $NativeImage$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinDynamicTexture$$Type = ($IMixinDynamicTexture);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMixinDynamicTexture$$Original = $IMixinDynamicTexture;}
declare module "de.keksuccino.konkrete.mixin.mixins.client.IMixinAbstractWidget" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMixinAbstractWidget$$Interface {

(arg0: integer): void
set "heightKonkrete"(value: integer)
}

export class $IMixinAbstractWidget implements $IMixinAbstractWidget$$Interface {
 "setHeightKonkrete"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinAbstractWidget$$Type = ((arg0: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMixinAbstractWidget$$Original = $IMixinAbstractWidget;}
declare module "de.keksuccino.konkrete.mixin.mixins.client.IMixinClientLanguage" {
import {$Map, $Map$$Type} from "java.util.Map"

export interface $IMixinClientLanguage$$Interface {

(): $Map$$Type<(StringJS), (StringJS)>
get "storageKonkrete"(): $Map<(StringJS), (StringJS)>
}

export class $IMixinClientLanguage implements $IMixinClientLanguage$$Interface {
 "getStorageKonkrete"(): $Map<(StringJS), (StringJS)>
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
declare module "de.keksuccino.konkrete.mixin.mixins.client.IMixinLocalPlayer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMixinLocalPlayer$$Interface {

(): integer
get "permissionLevelKonkrete"(): integer
}

export class $IMixinLocalPlayer implements $IMixinLocalPlayer$$Interface {
 "getPermissionLevelKonkrete"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinLocalPlayer$$Type = (() => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMixinLocalPlayer$$Original = $IMixinLocalPlayer;}
declare module "de.keksuccino.konkrete.mixin.mixins.client.IMixinMouseHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMixinMouseHandler$$Interface {

(): integer
get "activeButtonKonkrete"(): integer
}

export class $IMixinMouseHandler implements $IMixinMouseHandler$$Interface {
 "getActiveButtonKonkrete"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinMouseHandler$$Type = (() => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMixinMouseHandler$$Original = $IMixinMouseHandler;}
declare module "de.keksuccino.konkrete.mixin.mixins.client.IMixinScreen" {
import {$GuiEventListener, $GuiEventListener$$Type} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$List} from "java.util.List"
import {$Font$$Type} from "net.minecraft.client.gui.Font"
import {$Renderable} from "net.minecraft.client.gui.components.Renderable"

export interface $IMixinScreen$$Interface {
get "renderablesKonkrete"(): $List<($Renderable)>
get "childrenKonkrete"(): $List<($GuiEventListener)>
set "fontKonkrete"(value: $Font$$Type)
}

export class $IMixinScreen implements $IMixinScreen$$Interface {
 "getRenderablesKonkrete"(): $List<($Renderable)>
 "getChildrenKonkrete"(): $List<($GuiEventListener)>
 "invokeAddWidgetKonkrete"<T extends $GuiEventListener>(arg0: T): T
 "setFontKonkrete"(arg0: $Font$$Type): void
 "invokeAddRenderableWidgetKonkrete"<T extends $GuiEventListener>(arg0: T): T
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
