declare module "io.wispforest.owo.util.Observable" {
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $Observable<T> {
public "get"(): T
public static "of"<T>(initial: T): $Observable<(T)>
public "set"(newValue: T): void
public "observe"(observer: $Consumer$$Type<(T)>): void
public static "observeAll"(observer: $Runnable$$Type, ...observables: ($Observable$$Type<(never)>)[]): void
public static "observeAll"<T>(observer: $Consumer$$Type<(T)>, ...observables: ($Observable$$Type<(T)>)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Observable$$Type<T> = ($Observable<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Observable$$Original<T> = $Observable<(T)>;}
declare module "io.wispforest.owo.util.pond.OwoItemExtensions" {
import {$CreativeModeTab, $CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$CreativeModeTab$Output} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$BiConsumer} from "java.util.function.BiConsumer"
import {$Item} from "net.minecraft.world.item.Item"

export interface $OwoItemExtensions$$Interface {
}

export class $OwoItemExtensions implements $OwoItemExtensions$$Interface {
 "owo$shouldTrackUsageStat"(): boolean
 "owo$stackGenerator"(): $BiConsumer<($Item), ($CreativeModeTab$Output)>
 "owo$setGroup"(group: $CreativeModeTab$$Type): void
 "owo$setGroup"(arg0: $Supplier$$Type<($CreativeModeTab$$Type)>): void
 "owo$tab"(): integer
 "owo$group"(): $CreativeModeTab
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwoItemExtensions$$Type = ($OwoItemExtensions);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OwoItemExtensions$$Original = $OwoItemExtensions;}
declare module "io.wispforest.owo.util.pond.OwoScreenExtension" {
import {$ParentComponent} from "io.wispforest.owo.ui.core.ParentComponent"
import {$Layer$Instance} from "io.wispforest.owo.ui.layers.Layer$Instance"
import {$Layer$$Type} from "io.wispforest.owo.ui.layers.Layer"
import {$Screen} from "net.minecraft.client.gui.screens.Screen"
import {$List} from "java.util.List"

export interface $OwoScreenExtension$$Interface {
}

export class $OwoScreenExtension implements $OwoScreenExtension$$Interface {
 "owo$getInstancesView"(): $List<($Layer$Instance)>
 "owo$getInstance"<S extends $Screen, R extends $ParentComponent>(arg0: $Layer$$Type<(S), (R)>): $Layer$Instance
 "owo$updateLayers"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwoScreenExtension$$Type = ($OwoScreenExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OwoScreenExtension$$Original = $OwoScreenExtension;}
declare module "io.wispforest.owo.util.pond.OwoTessellatorExtension" {
import {$BufferBuilder, $BufferBuilder$$Type} from "com.mojang.blaze3d.vertex.BufferBuilder"

export interface $OwoTessellatorExtension$$Interface {
}

export class $OwoTessellatorExtension implements $OwoTessellatorExtension$$Interface {
 "owo$getStoredBuilder"(): $BufferBuilder
 "owo$setStoredBuilder"(arg0: $BufferBuilder$$Type): void
 "owo$skipNextBegin"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwoTessellatorExtension$$Type = ($OwoTessellatorExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OwoTessellatorExtension$$Original = $OwoTessellatorExtension;}
declare module "io.wispforest.owo.util.EventStream" {
import {$EventSource} from "io.wispforest.owo.util.EventSource"
import {$Function$$Type} from "java.util.function.Function"
import {$List$$Type} from "java.util.List"

export class $EventStream<T> {
constructor(sinkFactory: $Function$$Type<($List<(T)>), (T)>)

public "source"(): $EventSource<(T)>
public "sink"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventStream$$Type<T> = ($EventStream<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EventStream$$Original<T> = $EventStream<(T)>;}
declare module "io.wispforest.owo.util.pond.OwoSlotExtension" {
import {$PositionedRectangle, $PositionedRectangle$$Type} from "io.wispforest.owo.ui.core.PositionedRectangle"

export interface $OwoSlotExtension$$Interface {
}

export class $OwoSlotExtension implements $OwoSlotExtension$$Interface {
 "owo$getScissorArea"(): $PositionedRectangle
 "owo$getDisabledOverride"(): boolean
 "owo$setDisabledOverride"(arg0: boolean): void
 "owo$setScissorArea"(arg0: $PositionedRectangle$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwoSlotExtension$$Type = ($OwoSlotExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OwoSlotExtension$$Original = $OwoSlotExtension;}
declare module "io.wispforest.owo.util.pond.OwoScreenHandlerExtension" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ScreenInternals$SyncPropertiesPacket$$Type} from "io.wispforest.owo.client.screens.ScreenInternals$SyncPropertiesPacket"
import {$ScreenInternals$LocalPacket$$Type} from "io.wispforest.owo.client.screens.ScreenInternals$LocalPacket"

export interface $OwoScreenHandlerExtension$$Interface {
}

export class $OwoScreenHandlerExtension implements $OwoScreenHandlerExtension$$Interface {
 "owo$readPropertySync"(arg0: $ScreenInternals$SyncPropertiesPacket$$Type): void
 "owo$handlePacket"(arg0: $ScreenInternals$LocalPacket$$Type, arg1: boolean): void
 "owo$attachToPlayer"(arg0: $Player$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwoScreenHandlerExtension$$Type = ($OwoScreenHandlerExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OwoScreenHandlerExtension$$Original = $OwoScreenHandlerExtension;}
declare module "io.wispforest.owo.util.pond.OwoEntityRenderDispatcherExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $OwoEntityRenderDispatcherExtension$$Interface {
}

export class $OwoEntityRenderDispatcherExtension implements $OwoEntityRenderDispatcherExtension$$Interface {
 "owo$showNametag"(): boolean
 "owo$counterRotate"(): boolean
 "owo$setShowNametag"(arg0: boolean): void
 "owo$setCounterRotate"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwoEntityRenderDispatcherExtension$$Type = ($OwoEntityRenderDispatcherExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OwoEntityRenderDispatcherExtension$$Original = $OwoEntityRenderDispatcherExtension;}
declare module "io.wispforest.owo.util.EventSource" {
import {$EventSource$Subscription} from "io.wispforest.owo.util.EventSource$Subscription"

export class $EventSource<T> {
public "subscribe"(subscriber: T): $EventSource$Subscription
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventSource$$Type<T> = ($EventSource<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EventSource$$Original<T> = $EventSource<(T)>;}
