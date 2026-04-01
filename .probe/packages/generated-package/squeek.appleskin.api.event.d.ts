declare module "squeek.appleskin.api.event.FoodValuesEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Event} from "net.neoforged.bus.api.Event"
import {$FoodProperties, $FoodProperties$$Type} from "net.minecraft.world.food.FoodProperties"

export class $FoodValuesEvent extends $Event {
 "modifiedFoodProperties": $FoodProperties
readonly "itemStack": $ItemStack
 "defaultFoodProperties": $FoodProperties
readonly "player": $Player

constructor(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $FoodProperties$$Type, arg3: $FoodProperties$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FoodValuesEvent$$Type = ($FoodValuesEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FoodValuesEvent$$Original = $FoodValuesEvent;}
declare module "squeek.appleskin.api.event.HUDOverlayEvent$HungerRestored" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$HUDOverlayEvent} from "squeek.appleskin.api.event.HUDOverlayEvent"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$FoodProperties, $FoodProperties$$Type} from "net.minecraft.world.food.FoodProperties"

export class $HUDOverlayEvent$HungerRestored extends $HUDOverlayEvent {
readonly "itemStack": $ItemStack
readonly "currentFoodLevel": integer
 "guiGraphics": $GuiGraphics
 "x": integer
 "y": integer
readonly "foodProperties": $FoodProperties

constructor(arg0: integer, arg1: $ItemStack$$Type, arg2: $FoodProperties$$Type, arg3: integer, arg4: integer, arg5: $GuiGraphics$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HUDOverlayEvent$HungerRestored$$Type = ($HUDOverlayEvent$HungerRestored);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HUDOverlayEvent$HungerRestored$$Original = $HUDOverlayEvent$HungerRestored;}
declare module "squeek.appleskin.api.event.TooltipOverlayEvent$Render" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$TooltipOverlayEvent} from "squeek.appleskin.api.event.TooltipOverlayEvent"
import {$FoodProperties, $FoodProperties$$Type} from "net.minecraft.world.food.FoodProperties"

export class $TooltipOverlayEvent$Render extends $TooltipOverlayEvent {
readonly "defaultFood": $FoodProperties
readonly "itemStack": $ItemStack
 "guiGraphics": $GuiGraphics
readonly "modifiedFood": $FoodProperties
 "x": integer
 "y": integer

constructor(arg0: $ItemStack$$Type, arg1: integer, arg2: integer, arg3: $GuiGraphics$$Type, arg4: $FoodProperties$$Type, arg5: $FoodProperties$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TooltipOverlayEvent$Render$$Type = ($TooltipOverlayEvent$Render);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TooltipOverlayEvent$Render$$Original = $TooltipOverlayEvent$Render;}
declare module "squeek.appleskin.api.event.HUDOverlayEvent$Exhaustion" {
import {$HUDOverlayEvent} from "squeek.appleskin.api.event.HUDOverlayEvent"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"

export class $HUDOverlayEvent$Exhaustion extends $HUDOverlayEvent {
 "guiGraphics": $GuiGraphics
readonly "exhaustion": float
 "x": integer
 "y": integer

constructor(arg0: float, arg1: integer, arg2: integer, arg3: $GuiGraphics$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HUDOverlayEvent$Exhaustion$$Type = ($HUDOverlayEvent$Exhaustion);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HUDOverlayEvent$Exhaustion$$Original = $HUDOverlayEvent$Exhaustion;}
declare module "squeek.appleskin.api.event.TooltipOverlayEvent" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Event} from "net.neoforged.bus.api.Event"
import {$FoodProperties} from "net.minecraft.world.food.FoodProperties"

export class $TooltipOverlayEvent extends $Event implements $ICancellableEvent$$Interface {
readonly "defaultFood": $FoodProperties
readonly "itemStack": $ItemStack
readonly "modifiedFood": $FoodProperties

public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TooltipOverlayEvent$$Type = ($TooltipOverlayEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TooltipOverlayEvent$$Original = $TooltipOverlayEvent;}
declare module "squeek.appleskin.api.event.HUDOverlayEvent" {
import {$GuiGraphics} from "net.minecraft.client.gui.GuiGraphics"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Event} from "net.neoforged.bus.api.Event"

export class $HUDOverlayEvent extends $Event implements $ICancellableEvent$$Interface {
 "guiGraphics": $GuiGraphics
 "x": integer
 "y": integer

public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HUDOverlayEvent$$Type = ($HUDOverlayEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HUDOverlayEvent$$Original = $HUDOverlayEvent;}
declare module "squeek.appleskin.api.event.HUDOverlayEvent$HealthRestored" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$HUDOverlayEvent} from "squeek.appleskin.api.event.HUDOverlayEvent"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$FoodProperties, $FoodProperties$$Type} from "net.minecraft.world.food.FoodProperties"

export class $HUDOverlayEvent$HealthRestored extends $HUDOverlayEvent {
readonly "modifiedHealth": float
readonly "itemStack": $ItemStack
 "guiGraphics": $GuiGraphics
 "x": integer
 "y": integer
readonly "foodProperties": $FoodProperties

constructor(arg0: float, arg1: $ItemStack$$Type, arg2: $FoodProperties$$Type, arg3: integer, arg4: integer, arg5: $GuiGraphics$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HUDOverlayEvent$HealthRestored$$Type = ($HUDOverlayEvent$HealthRestored);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HUDOverlayEvent$HealthRestored$$Original = $HUDOverlayEvent$HealthRestored;}
declare module "squeek.appleskin.api.event.HUDOverlayEvent$Saturation" {
import {$HUDOverlayEvent} from "squeek.appleskin.api.event.HUDOverlayEvent"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"

export class $HUDOverlayEvent$Saturation extends $HUDOverlayEvent {
 "guiGraphics": $GuiGraphics
readonly "saturationLevel": float
 "x": integer
 "y": integer

constructor(arg0: float, arg1: integer, arg2: integer, arg3: $GuiGraphics$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HUDOverlayEvent$Saturation$$Type = ($HUDOverlayEvent$Saturation);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HUDOverlayEvent$Saturation$$Original = $HUDOverlayEvent$Saturation;}
declare module "squeek.appleskin.api.event.TooltipOverlayEvent$Pre" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$TooltipOverlayEvent} from "squeek.appleskin.api.event.TooltipOverlayEvent"
import {$FoodProperties, $FoodProperties$$Type} from "net.minecraft.world.food.FoodProperties"

export class $TooltipOverlayEvent$Pre extends $TooltipOverlayEvent {
readonly "defaultFood": $FoodProperties
readonly "itemStack": $ItemStack
readonly "modifiedFood": $FoodProperties

constructor(arg0: $ItemStack$$Type, arg1: $FoodProperties$$Type, arg2: $FoodProperties$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TooltipOverlayEvent$Pre$$Type = ($TooltipOverlayEvent$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TooltipOverlayEvent$Pre$$Original = $TooltipOverlayEvent$Pre;}
