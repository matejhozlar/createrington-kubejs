declare module "de.maxhenkel.corpse.corelib.death.PlayerDeathEvent" {
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Death, $Death$$Type} from "de.maxhenkel.corpse.corelib.death.Death"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $PlayerDeathEvent extends $Event {
constructor(arg0: $Death$$Type, arg1: $ServerPlayer$$Type, arg2: $DamageSource$$Type)

public "getSource"(): $DamageSource
public "getPlayer"(): $ServerPlayer
public "storeDeath"(): void
public "removeDrops"(): void
public "getDeath"(): $Death
get "source"(): $DamageSource
get "player"(): $ServerPlayer
get "death"(): $Death
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerDeathEvent$$Type = ($PlayerDeathEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerDeathEvent$$Original = $PlayerDeathEvent;}
declare module "de.maxhenkel.corpse.corelib.death.Death" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Collection$$Type} from "java.util.Collection"
import {$UUID} from "java.util.UUID"
import {$ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $Death {
public "toString"(): StringJS
public "getId"(): $UUID
public "getTimestamp"(): long
public "getDimension"(): StringJS
public "getPosY"(): double
public "getPosX"(): double
public static "fromPlayer"(arg0: $Player$$Type): $Death
public "getEquipment"(): $NonNullList<($ItemStack)>
public "getPlayerUUID"(): $UUID
public "getAllItems"(): $NonNullList<($ItemStack)>
public static "fromNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $Death
public "getExperience"(): integer
public "toNBT"(arg0: $HolderLookup$Provider$$Type, arg1: boolean): $CompoundTag
public "toNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "getModel"(): byte
public "getBlockPos"(): $BlockPos
public "getOffHandInventory"(): $NonNullList<($ItemStack)>
public "processDrops"(arg0: $Collection$$Type<($ItemEntity$$Type)>): void
public "getMainInventory"(): $NonNullList<($ItemStack)>
public "getAdditionalItems"(): $NonNullList<($ItemStack)>
public "getPlayerName"(): StringJS
public "getArmorInventory"(): $NonNullList<($ItemStack)>
public "getPosZ"(): double
get "id"(): $UUID
get "timestamp"(): long
get "dimension"(): StringJS
get "posY"(): double
get "posX"(): double
get "equipment"(): $NonNullList<($ItemStack)>
get "playerUUID"(): $UUID
get "allItems"(): $NonNullList<($ItemStack)>
get "experience"(): integer
get "model"(): byte
get "blockPos"(): $BlockPos
get "offHandInventory"(): $NonNullList<($ItemStack)>
get "mainInventory"(): $NonNullList<($ItemStack)>
get "additionalItems"(): $NonNullList<($ItemStack)>
get "playerName"(): StringJS
get "armorInventory"(): $NonNullList<($ItemStack)>
get "posZ"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Death$$Type = ($Death);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Death$$Original = $Death;}
