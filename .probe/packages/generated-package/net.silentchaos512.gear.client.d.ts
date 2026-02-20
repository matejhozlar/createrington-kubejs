declare module "net.silentchaos512.gear.client.util.TextListBuilder" {
import {$List} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $TextListBuilder {
static readonly "BULLETS": (StringJS)[]
static readonly "VANILLA_BULLET": StringJS

constructor()

public "add"(arg0: $Component$$Type): $TextListBuilder
public "indent"(): $TextListBuilder
public "removeLast"(): $TextListBuilder
public "build"(): $List<($Component)>
public "unindent"(): $TextListBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextListBuilder$$Type = ($TextListBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextListBuilder$$Original = $TextListBuilder;}
declare module "net.silentchaos512.gear.client.util.GearTooltipFlag" {
import {$TooltipFlag$$Interface} from "net.minecraft.world.item.TooltipFlag"
import {$Record} from "java.lang.Record"

export class $GearTooltipFlag extends $Record implements $TooltipFlag$$Interface {
constructor(ctrlDown: boolean, altDown: boolean, shiftDown: boolean, advanced: boolean, showProperties: boolean, showConstruction: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isAdvanced"(): boolean
public "isCreative"(): boolean
public "advanced"(): boolean
public "shiftDown"(): boolean
public "ctrlDown"(): boolean
public "altDown"(): boolean
public "showConstruction"(): boolean
public static "withModifierKeys"(arg0: boolean, arg1: boolean, arg2: boolean): $GearTooltipFlag
public "showProperties"(): boolean
public "hasControlDown"(): boolean
public "hasShiftDown"(): boolean
public "hasAltDown"(): boolean
get "creative"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GearTooltipFlag$$Type = ({"advanced"?: boolean, "altDown"?: boolean, "showConstruction"?: boolean, "shiftDown"?: boolean, "showProperties"?: boolean, "ctrlDown"?: boolean}) | ([advanced?: boolean, altDown?: boolean, showConstruction?: boolean, shiftDown?: boolean, showProperties?: boolean, ctrlDown?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GearTooltipFlag$$Original = $GearTooltipFlag;}
