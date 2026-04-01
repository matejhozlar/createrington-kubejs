declare module "it.hurts.shatterbyte.clavis.common.mixin.LootPoolAccessor" {
import {$LootItemFunction} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$LootPoolEntryContainer} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$List} from "java.util.List"
import {$LootItemCondition} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"
import {$NumberProvider} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"

export interface $LootPoolAccessor$$Interface {
}

export class $LootPoolAccessor implements $LootPoolAccessor$$Interface {
 "clavis$getConditions"(): $List<($LootItemCondition)>
 "clavis$getFunctions"(): $List<($LootItemFunction)>
 "clavis$getBonusRolls"(): $NumberProvider
 "clavis$getEntries"(): $List<($LootPoolEntryContainer)>
 "clavis$getRolls"(): $NumberProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootPoolAccessor$$Type = ($LootPoolAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootPoolAccessor$$Original = $LootPoolAccessor;}
declare module "it.hurts.shatterbyte.clavis.common.mixin.LootTableAccessor" {
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$LootItemFunction} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$List} from "java.util.List"
import {$LootPool} from "net.minecraft.world.level.storage.loot.LootPool"
import {$LootContextParamSet} from "net.minecraft.world.level.storage.loot.parameters.LootContextParamSet"
import {$ObjectArrayList, $ObjectArrayList$$Type} from "it.unimi.dsi.fastutil.objects.ObjectArrayList"

export interface $LootTableAccessor$$Interface {
get "randomSequence"(): $Optional<($ResourceLocation)>
get "paramSet"(): $LootContextParamSet
get "functions"(): $List<($LootItemFunction)>
get "pools"(): $List<($LootPool)>
}

export class $LootTableAccessor implements $LootTableAccessor$$Interface {
 "getRandomSequence"(): $Optional<($ResourceLocation)>
 "getParamSet"(): $LootContextParamSet
 "getFunctions"(): $List<($LootItemFunction)>
 "invokeShuffleAndSplitItems"(arg0: $ObjectArrayList$$Type<($ItemStack$$Type)>, arg1: integer, arg2: $RandomSource$$Type): void
 "invokeGetRandomItems"(arg0: $LootContext$$Type): $ObjectArrayList<($ItemStack)>
 "invokeGetAvailableSlots"(arg0: $Container$$Type, arg1: $RandomSource$$Type): $List<(integer)>
 "getPools"(): $List<($LootPool)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootTableAccessor$$Type = ($LootTableAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootTableAccessor$$Original = $LootTableAccessor;}
declare module "it.hurts.shatterbyte.clavis.common.mixin.MouseHandlerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MouseHandlerAccessor$$Interface {
set "ypos"(value: double)
get "xpos"(): double
set "xpos"(value: double)
get "ypos"(): double
}

export class $MouseHandlerAccessor implements $MouseHandlerAccessor$$Interface {
 "setYpos"(arg0: double): void
 "getXpos"(): double
 "setXpos"(arg0: double): void
 "getYpos"(): double
 "invokeOnMove"(arg0: long, arg1: double, arg2: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseHandlerAccessor$$Type = ($MouseHandlerAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MouseHandlerAccessor$$Original = $MouseHandlerAccessor;}
