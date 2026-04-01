declare module "io.wispforest.owo.itemgroup.OwoItemGroup$TabTextures" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Record} from "java.lang.Record"

export class $OwoItemGroup$TabTextures extends $Record {
constructor(topSelected: $ResourceLocation$$Type, topSelectedFirstColumn: $ResourceLocation$$Type, topUnselected: $ResourceLocation$$Type, bottomSelected: $ResourceLocation$$Type, bottomSelectedFirstColumn: $ResourceLocation$$Type, bottomUnselected: $ResourceLocation$$Type)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "bottomSelected"(): $ResourceLocation
public "topUnselected"(): $ResourceLocation
public "bottomUnselected"(): $ResourceLocation
public "topSelected"(): $ResourceLocation
public "topSelectedFirstColumn"(): $ResourceLocation
public "bottomSelectedFirstColumn"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwoItemGroup$TabTextures$$Type = ({"bottomUnselected"?: $ResourceLocation$$Type, "topSelectedFirstColumn"?: $ResourceLocation$$Type, "bottomSelectedFirstColumn"?: $ResourceLocation$$Type, "topSelected"?: $ResourceLocation$$Type, "bottomSelected"?: $ResourceLocation$$Type, "topUnselected"?: $ResourceLocation$$Type}) | ([bottomUnselected?: $ResourceLocation$$Type, topSelectedFirstColumn?: $ResourceLocation$$Type, bottomSelectedFirstColumn?: $ResourceLocation$$Type, topSelected?: $ResourceLocation$$Type, bottomSelected?: $ResourceLocation$$Type, topUnselected?: $ResourceLocation$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OwoItemGroup$TabTextures$$Original = $OwoItemGroup$TabTextures;}
declare module "io.wispforest.owo.itemgroup.OwoItemGroup$ScrollerTextures" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Record} from "java.lang.Record"

export class $OwoItemGroup$ScrollerTextures extends $Record {
constructor(enabled: $ResourceLocation$$Type, disabled: $ResourceLocation$$Type)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "enabled"(): $ResourceLocation
public "disabled"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwoItemGroup$ScrollerTextures$$Type = ({"disabled"?: $ResourceLocation$$Type, "enabled"?: $ResourceLocation$$Type}) | ([disabled?: $ResourceLocation$$Type, enabled?: $ResourceLocation$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OwoItemGroup$ScrollerTextures$$Original = $OwoItemGroup$ScrollerTextures;}
declare module "io.wispforest.owo.itemgroup.OwoItemGroup$Builder" {
import {$OwoItemGroup$ScrollerTextures$$Type} from "io.wispforest.owo.itemgroup.OwoItemGroup$ScrollerTextures"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$OwoItemGroup, $OwoItemGroup$$Type} from "io.wispforest.owo.itemgroup.OwoItemGroup"
import {$OwoItemGroup$TabTextures$$Type} from "io.wispforest.owo.itemgroup.OwoItemGroup$TabTextures"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $OwoItemGroup$Builder {
public "build"(): $OwoItemGroup
public "backgroundTexture"(backgroundTexture: $ResourceLocation$$Type): $OwoItemGroup$Builder
public "initializer"(initializer: $Consumer$$Type<($OwoItemGroup)>): $OwoItemGroup$Builder
public "tabTextures"(tabTextures: $OwoItemGroup$TabTextures$$Type): $OwoItemGroup$Builder
public "scrollerTextures"(scrollerTextures: $OwoItemGroup$ScrollerTextures$$Type): $OwoItemGroup$Builder
public "tabStackHeight"(tabStackHeight: integer): $OwoItemGroup$Builder
public "buttonStackHeight"(buttonStackHeight: integer): $OwoItemGroup$Builder
public "displaySingleTab"(): $OwoItemGroup$Builder
public "disableDynamicTitle"(): $OwoItemGroup$Builder
public "withoutMultipleSelection"(): $OwoItemGroup$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwoItemGroup$Builder$$Type = ($OwoItemGroup$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OwoItemGroup$Builder$$Original = $OwoItemGroup$Builder;}
declare module "io.wispforest.owo.itemgroup.ItemGroupReference" {
import {$OwoItemGroup, $OwoItemGroup$$Type} from "io.wispforest.owo.itemgroup.OwoItemGroup"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Record} from "java.lang.Record"

export class $ItemGroupReference extends $Record {
/**
 * 
 * @deprecated
 */
constructor(group: $OwoItemGroup$$Type, tab: integer)
constructor(groupSup: $Supplier$$Type<($OwoItemGroup$$Type)>, tab: integer)

public "group"(): $OwoItemGroup
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "tab"(): integer
public "groupSup"(): $Supplier<($OwoItemGroup)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemGroupReference$$Type = ({"groupSup"?: $Supplier$$Type<($OwoItemGroup$$Type)>, "tab"?: integer}) | ([groupSup?: $Supplier$$Type<($OwoItemGroup$$Type)>, tab?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemGroupReference$$Original = $ItemGroupReference;}
declare module "io.wispforest.owo.itemgroup.Icon" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"

export interface $Icon$$Interface {

(arg0: $GuiGraphics, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: float): void
}

export class $Icon implements $Icon$$Interface {
static "of"(texture: $ResourceLocation$$Type, u: integer, v: integer, textureWidth: integer, textureHeight: integer): $Icon
static "of"(texture: $ResourceLocation$$Type, textureSize: integer, frameDelay: integer, loop: boolean): $Icon
static "of"(stack: $ItemStack$$Type): $Icon
static "of"(item: $ItemLike$$Type): $Icon
 "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Icon$$Type = ((arg0: $GuiGraphics, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: float) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Icon$$Original = $Icon;}
declare module "io.wispforest.owo.itemgroup.gui.ItemGroupButton" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$OwoItemGroup$ButtonDefinition$$Interface} from "io.wispforest.owo.itemgroup.OwoItemGroup$ButtonDefinition"
import {$Icon, $Icon$$Type} from "io.wispforest.owo.itemgroup.Icon"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Component} from "net.minecraft.network.chat.Component"

export class $ItemGroupButton implements $OwoItemGroup$ButtonDefinition$$Interface {
static readonly "ICONS_TEXTURE": $ResourceLocation

constructor(group: $CreativeModeTab$$Type, icon: $Icon$$Type, name: StringJS, texture: $ResourceLocation$$Type, action: $Runnable$$Type)
constructor(group: $CreativeModeTab$$Type, icon: $Icon$$Type, name: StringJS, action: $Runnable$$Type)

public "action"(): $Runnable
public static "link"(group: $CreativeModeTab$$Type, icon: $Icon$$Type, name: StringJS, url: StringJS): $ItemGroupButton
public "texture"(): $ResourceLocation
public "icon"(): $Icon
public static "discord"(group: $CreativeModeTab$$Type, url: StringJS): $ItemGroupButton
public "tooltip"(): $Component
public static "github"(group: $CreativeModeTab$$Type, url: StringJS): $ItemGroupButton
public static "curseforge"(group: $CreativeModeTab$$Type, url: StringJS): $ItemGroupButton
public static "modrinth"(group: $CreativeModeTab$$Type, url: StringJS): $ItemGroupButton
public static "tooltipFor"(group: $CreativeModeTab$$Type, component: StringJS, componentName: StringJS): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemGroupButton$$Type = ($ItemGroupButton);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemGroupButton$$Original = $ItemGroupButton;}
declare module "io.wispforest.owo.itemgroup.gui.ItemGroupTab" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$OwoItemGroup$ButtonDefinition$$Interface} from "io.wispforest.owo.itemgroup.OwoItemGroup$ButtonDefinition"
import {$Icon, $Icon$$Type} from "io.wispforest.owo.itemgroup.Icon"
import {$ItemGroupTab$ContentSupplier, $ItemGroupTab$ContentSupplier$$Type} from "io.wispforest.owo.itemgroup.gui.ItemGroupTab$ContentSupplier"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Record} from "java.lang.Record"

export class $ItemGroupTab extends $Record implements $OwoItemGroup$ButtonDefinition$$Interface {
static readonly "DEFAULT_TEXTURE": $ResourceLocation

constructor(icon: $Icon$$Type, name: $Component$$Type, contentSupplier: $ItemGroupTab$ContentSupplier$$Type, texture: $ResourceLocation$$Type, primary: boolean)

public "name"(): $Component
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "texture"(): $ResourceLocation
public "icon"(): $Icon
public "primary"(): boolean
public "tooltip"(): $Component
public "contentSupplier"(): $ItemGroupTab$ContentSupplier
public static "tooltipFor"(group: $CreativeModeTab$$Type, component: StringJS, componentName: StringJS): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemGroupTab$$Type = ({"icon"?: $Icon$$Type, "contentSupplier"?: $ItemGroupTab$ContentSupplier$$Type, "name"?: $Component$$Type, "primary"?: boolean, "texture"?: $ResourceLocation$$Type}) | ([icon?: $Icon$$Type, contentSupplier?: $ItemGroupTab$ContentSupplier$$Type, name?: $Component$$Type, primary?: boolean, texture?: $ResourceLocation$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemGroupTab$$Original = $ItemGroupTab;}
declare module "io.wispforest.owo.itemgroup.OwoItemGroup" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Collection} from "java.util.Collection"
import {$OwoItemGroup$Builder} from "io.wispforest.owo.itemgroup.OwoItemGroup$Builder"
import {$List} from "java.util.List"
import {$Icon, $Icon$$Type} from "io.wispforest.owo.itemgroup.Icon"
import {$ItemGroupButton, $ItemGroupButton$$Type} from "io.wispforest.owo.itemgroup.gui.ItemGroupButton"
import {$CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"
import {$ItemGroupTab} from "io.wispforest.owo.itemgroup.gui.ItemGroupTab"
import {$IntSet} from "it.unimi.dsi.fastutil.ints.IntSet"
import {$OwoItemGroup$ScrollerTextures} from "io.wispforest.owo.itemgroup.OwoItemGroup$ScrollerTextures"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CreativeModeTab} from "net.minecraft.world.item.CreativeModeTab"
import {$OwoItemGroup$TabTextures} from "io.wispforest.owo.itemgroup.OwoItemGroup$TabTextures"
import {$CreativeModeTab$Output} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$BiConsumer} from "java.util.function.BiConsumer"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ItemGroupTab$ContentSupplier$$Type} from "io.wispforest.owo.itemgroup.gui.ItemGroupTab$ContentSupplier"
import {$CreativeModeTab$DisplayItemsGenerator} from "net.minecraft.world.item.CreativeModeTab$DisplayItemsGenerator"

export class $OwoItemGroup extends $CreativeModeTab {
readonly "buttons": $List<($ItemGroupButton)>
readonly "tabsAfter": $List<($ResourceLocation)>
 "backgroundTexture": $ResourceLocation
readonly "tabs": $List<($ItemGroupTab)>
readonly "tabsBefore": $List<($ResourceLocation)>
static readonly "DEFAULT_BACKGROUND": $ResourceLocation
 "displayItemsGenerator": $CreativeModeTab$DisplayItemsGenerator
 "alignedRight": boolean
static readonly "DEFAULT_STACK_GENERATOR": $BiConsumer<($Item), ($CreativeModeTab$Output)>
 "displayItems": $Collection<($ItemStack)>

public static "builder"(id: $ResourceLocation$$Type, iconSupplier: $Supplier$$Type<($Icon$$Type)>): $OwoItemGroup$Builder
public "initialize"(): void
public "id"(): $ResourceLocation
public "hasAnyItems"(): boolean
public "owo$getBackgroundTexture"(): $ResourceLocation
public "canSelectMultipleTabs"(): boolean
public "getButtonStackHeight"(): integer
public "getScrollerTextures"(): $OwoItemGroup$ScrollerTextures
public "shouldDisplaySingleTab"(): boolean
public "icon"(): $Icon
public "getButtons"(): $List<($ItemGroupButton)>
public "getTab"(index: integer): $ItemGroupTab
public "buildContents"(context: $CreativeModeTab$ItemDisplayParameters$$Type): void
public "shouldDisplay"(): boolean
public "addButton"(button: $ItemGroupButton$$Type): void
public "addTab"(icon: $Icon$$Type, name: StringJS, contentTag: $TagKey$$Type<($Item)>, texture: $ResourceLocation$$Type, primary: boolean): void
public "addTab"(icon: $Icon$$Type, name: StringJS, contentTag: $TagKey$$Type<($Item)>, primary: boolean): void
public "toggleTab"(tab: integer, context: $CreativeModeTab$ItemDisplayParameters$$Type): void
public "selectTab"(tab: integer, context: $CreativeModeTab$ItemDisplayParameters$$Type): void
public "hasDynamicTitle"(): boolean
public "selectSingleTab"(tab: integer, context: $CreativeModeTab$ItemDisplayParameters$$Type): void
public "addCustomTab"(icon: $Icon$$Type, name: StringJS, contentSupplier: $ItemGroupTab$ContentSupplier$$Type, primary: boolean): void
public "addCustomTab"(icon: $Icon$$Type, name: StringJS, contentSupplier: $ItemGroupTab$ContentSupplier$$Type, texture: $ResourceLocation$$Type, primary: boolean): void
public "isTabSelected"(tab: integer): boolean
public "getTabStackHeight"(): integer
public "deselectTab"(tab: integer, context: $CreativeModeTab$ItemDisplayParameters$$Type): void
public "getTabTextures"(): $OwoItemGroup$TabTextures
public "selectedTabs"(): $IntSet
get "buttonStackHeight"(): integer
get "scrollerTextures"(): $OwoItemGroup$ScrollerTextures
get "tabStackHeight"(): integer
get "tabTextures"(): $OwoItemGroup$TabTextures
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwoItemGroup$$Type = ($OwoItemGroup);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OwoItemGroup$$Original = $OwoItemGroup;}
declare module "io.wispforest.owo.itemgroup.OwoItemGroup$ButtonDefinition" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$Icon} from "io.wispforest.owo.itemgroup.Icon"
import {$Component} from "net.minecraft.network.chat.Component"

export interface $OwoItemGroup$ButtonDefinition$$Interface {
}

export class $OwoItemGroup$ButtonDefinition implements $OwoItemGroup$ButtonDefinition$$Interface {
 "texture"(): $ResourceLocation
 "icon"(): $Icon
static "tooltipFor"(group: $CreativeModeTab$$Type, component: StringJS, componentName: StringJS): $Component
 "tooltip"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwoItemGroup$ButtonDefinition$$Type = ($OwoItemGroup$ButtonDefinition);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OwoItemGroup$ButtonDefinition$$Original = $OwoItemGroup$ButtonDefinition;}
declare module "io.wispforest.owo.itemgroup.OwoItemSettingsExtension" {
import {$ItemGroupReference$$Type} from "io.wispforest.owo.itemgroup.ItemGroupReference"
import {$OwoItemGroup, $OwoItemGroup$$Type} from "io.wispforest.owo.itemgroup.OwoItemGroup"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties} from "net.minecraft.world.item.Item$Properties"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export interface $OwoItemSettingsExtension$$Interface {
}

export class $OwoItemSettingsExtension implements $OwoItemSettingsExtension$$Interface {
/**
 * 
 * @deprecated
 */
 "group"(): $OwoItemGroup
 "group"(groupSupplier: $Supplier$$Type<($OwoItemGroup$$Type)>): $Item$Properties
/**
 * 
 * @deprecated
 */
 "group"(group: $OwoItemGroup$$Type): $Item$Properties
 "group"(ref: $ItemGroupReference$$Type): $Item$Properties
 "tab"(tab: integer): $Item$Properties
 "tab"(): integer
 "shouldTrackUsageStat"(): boolean
 "trackUsageStat"(): $Item$Properties
 "stackGenerator"(): $BiConsumer<($Item), ($CreativeModeTab$Output)>
 "stackGenerator"(generator: $BiConsumer$$Type<($Item), ($CreativeModeTab$Output)>): $Item$Properties
 "groupSupplier"(): $Supplier<($OwoItemGroup)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwoItemSettingsExtension$$Type = ($OwoItemSettingsExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OwoItemSettingsExtension$$Original = $OwoItemSettingsExtension;}
declare module "io.wispforest.owo.itemgroup.gui.ItemGroupTab$ContentSupplier" {
import {$CreativeModeTab$Output, $CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$CreativeModeTab$ItemDisplayParameters, $CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"

export interface $ItemGroupTab$ContentSupplier$$Interface {

(arg0: $CreativeModeTab$ItemDisplayParameters, arg1: $CreativeModeTab$Output): void
}

export class $ItemGroupTab$ContentSupplier implements $ItemGroupTab$ContentSupplier$$Interface {
 "addItems"(arg0: $CreativeModeTab$ItemDisplayParameters$$Type, arg1: $CreativeModeTab$Output$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemGroupTab$ContentSupplier$$Type = ((arg0: $CreativeModeTab$ItemDisplayParameters, arg1: $CreativeModeTab$Output) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemGroupTab$ContentSupplier$$Original = $ItemGroupTab$ContentSupplier;}
