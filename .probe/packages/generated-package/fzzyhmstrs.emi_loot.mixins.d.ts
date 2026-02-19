declare module "fzzyhmstrs.emi_loot.mixins.LootPoolEntryAccessor" {
import {$List, $List$$Type} from "java.util.List"
import {$LootItemCondition, $LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"

export interface $LootPoolEntryAccessor$$Interface {

(): $List$$Type<($LootItemCondition$$Type)>
get "conditions"(): $List<($LootItemCondition)>
}

export class $LootPoolEntryAccessor implements $LootPoolEntryAccessor$$Interface {
 "getConditions"(): $List<($LootItemCondition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootPoolEntryAccessor$$Type = (() => $List$$Type<($LootItemCondition$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootPoolEntryAccessor$$Original = $LootPoolEntryAccessor;}
declare module "fzzyhmstrs.emi_loot.mixins.LootTableAccessor" {
import {$List, $List$$Type} from "java.util.List"
import {$LootPool, $LootPool$$Type} from "net.minecraft.world.level.storage.loot.LootPool"

export interface $LootTableAccessor$$Interface {

(): $List$$Type<($LootPool$$Type)>
get "pools"(): $List<($LootPool)>
}

export class $LootTableAccessor implements $LootTableAccessor$$Interface {
 "getPools"(): $List<($LootPool)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootTableAccessor$$Type = (() => $List$$Type<($LootPool$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootTableAccessor$$Original = $LootTableAccessor;}
declare module "fzzyhmstrs.emi_loot.mixins.LootPoolAccessor" {
import {$LootItemFunction} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$LootPoolEntryContainer} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$List} from "java.util.List"
import {$LootItemCondition} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"
import {$NumberProvider} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"

export interface $LootPoolAccessor$$Interface {
get "entries"(): $List<($LootPoolEntryContainer)>
get "conditions"(): $List<($LootItemCondition)>
get "rolls"(): $NumberProvider
get "functions"(): $List<($LootItemFunction)>
}

export class $LootPoolAccessor implements $LootPoolAccessor$$Interface {
 "getEntries"(): $List<($LootPoolEntryContainer)>
 "getConditions"(): $List<($LootItemCondition)>
 "getRolls"(): $NumberProvider
 "getFunctions"(): $List<($LootItemFunction)>
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
