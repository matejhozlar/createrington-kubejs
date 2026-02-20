declare module "fuzs.puzzleslib.neoforge.api.event.v1.entity.living.ComputeEnchantedLootBonusEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $ComputeEnchantedLootBonusEvent extends $LivingEvent {
constructor(entity: $LivingEntity$$Type, damageSource: $DamageSource$$Type, enchantment: $Holder$$Type<($Enchantment)>, enchantmentLevel: integer)

public "getEnchantment"(): $Holder<($Enchantment)>
public "getEnchantmentLevel"(): integer
public static "onComputeEnchantedLootBonus"(enchantment: $Holder$$Type<($Enchantment)>, enchantmentLevel: integer, livingEntity: $LivingEntity$$Type, damageSource: $DamageSource$$Type): integer
public static "onComputeEnchantedLootBonus"(enchantment: $Holder$$Type<($Enchantment)>, enchantmentLevel: integer, lootContext: $LootContext$$Type): integer
public "getDamageSource"(): $DamageSource
public "setEnchantmentLevel"(enchantmentLevel: integer): void
get "enchantment"(): $Holder<($Enchantment)>
get "enchantmentLevel"(): integer
get "damageSource"(): $DamageSource
set "enchantmentLevel"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComputeEnchantedLootBonusEvent$$Type = ($ComputeEnchantedLootBonusEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ComputeEnchantedLootBonusEvent$$Original = $ComputeEnchantedLootBonusEvent;}
