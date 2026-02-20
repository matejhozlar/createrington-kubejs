declare module "net.silentchaos512.gear.item.CompoundPartItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$MaterialInstance, $MaterialInstance$$Type} from "net.silentchaos512.gear.gear.material.MaterialInstance"
import {$GearType} from "net.silentchaos512.gear.api.item.GearType"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$PartType, $PartType$$Type} from "net.silentchaos512.gear.api.part.PartType"

export class $CompoundPartItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "canRepair": boolean
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Supplier$$Type<($PartType$$Type)>, arg1: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "create"(arg0: $MaterialInstance$$Type, arg1: integer): $ItemStack
public "create"(arg0: $MaterialInstance$$Type): $ItemStack
public "create"(arg0: $List$$Type<($MaterialInstance$$Type)>): $ItemStack
public static "getModelKey"(arg0: $ItemStack$$Type): StringJS
public "getGearType"(): $GearType
public static "getPrimaryMaterial"(arg0: $ItemStack$$Type): $MaterialInstance
public "getColor"(arg0: $ItemStack$$Type, arg1: integer): integer
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getColorWeight"(arg0: integer, arg1: integer): integer
public "getPartType"(): $PartType
public static "getMaterials"(arg0: $ItemStack$$Type): $List<($MaterialInstance)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "gearType"(): $GearType
get "partType"(): $PartType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompoundPartItem$$Type = ($CompoundPartItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CompoundPartItem$$Original = $CompoundPartItem;}
