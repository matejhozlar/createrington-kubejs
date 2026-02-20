declare module "de.maxhenkel.corpse.corelib.death.PlayerDeathEvent" {
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Death, $Death$$Type} from "de.maxhenkel.corpse.corelib.death.Death"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $PlayerDeathEvent extends $Event {
constructor(arg0: $Death$$Type, arg1: $ServerPlayer$$Type, arg2: $DamageSource$$Type)

public "getSource"(): $DamageSource
public "getPlayer"(): $ServerPlayer
public "getDeath"(): $Death
public "storeDeath"(): void
public "removeDrops"(): void
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
import {$Collection$$Type} from "java.util.Collection"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
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
public "getEquipment"(): $NonNullList<($ItemStack)>
public "getModel"(): byte
public "toNBT"(arg0: $HolderLookup$Provider$$Type, arg1: boolean): $CompoundTag
public "toNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "getBlockPos"(): $BlockPos
public static "fromPlayer"(arg0: $Player$$Type): $Death
public static "fromNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $Death
public "getAllItems"(): $NonNullList<($ItemStack)>
public "getPlayerUUID"(): $UUID
public "getExperience"(): integer
public "getPosZ"(): double
public "getArmorInventory"(): $NonNullList<($ItemStack)>
public "getAdditionalItems"(): $NonNullList<($ItemStack)>
public "getMainInventory"(): $NonNullList<($ItemStack)>
public "getPlayerName"(): StringJS
public "processDrops"(arg0: $Collection$$Type<($ItemEntity$$Type)>): void
public "getOffHandInventory"(): $NonNullList<($ItemStack)>
get "id"(): $UUID
get "timestamp"(): long
get "dimension"(): StringJS
get "posY"(): double
get "posX"(): double
get "equipment"(): $NonNullList<($ItemStack)>
get "model"(): byte
get "blockPos"(): $BlockPos
get "allItems"(): $NonNullList<($ItemStack)>
get "playerUUID"(): $UUID
get "experience"(): integer
get "posZ"(): double
get "armorInventory"(): $NonNullList<($ItemStack)>
get "additionalItems"(): $NonNullList<($ItemStack)>
get "mainInventory"(): $NonNullList<($ItemStack)>
get "playerName"(): StringJS
get "offHandInventory"(): $NonNullList<($ItemStack)>
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
