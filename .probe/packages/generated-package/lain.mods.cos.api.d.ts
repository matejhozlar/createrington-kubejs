declare module "lain.mods.cos.api.event.CosArmorDeathDrops" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CAStacksBase, $CAStacksBase$$Type} from "lain.mods.cos.api.inventory.CAStacksBase"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Event} from "net.neoforged.bus.api.Event"

export class $CosArmorDeathDrops extends $Event implements $ICancellableEvent$$Interface {
constructor(arg0: $Player$$Type, arg1: $CAStacksBase$$Type)

public "getCAStacks"(): $CAStacksBase
public "getEntityPlayer"(): $Player
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "CAStacks"(): $CAStacksBase
get "entityPlayer"(): $Player
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosArmorDeathDrops$$Type = ($CosArmorDeathDrops);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CosArmorDeathDrops$$Original = $CosArmorDeathDrops;}
declare module "lain.mods.cos.api.inventory.CAStacksBase" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ItemStackHandler} from "net.neoforged.neoforge.items.ItemStackHandler"

export class $CAStacksBase extends $ItemStackHandler {
constructor()
constructor(arg0: integer)

public "isHidden"(arg0: StringJS, arg1: StringJS): boolean
public "setSize"(arg0: integer): void
public "setHidden"(arg0: StringJS, arg1: StringJS, arg2: boolean): boolean
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public "setSkinArmor"(arg0: integer, arg1: boolean): void
public "forEachHidden"(arg0: $BiConsumer$$Type<(StringJS), (StringJS)>): void
public "isSkinArmor"(arg0: integer): boolean
set "size"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CAStacksBase$$Type = ($CAStacksBase);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CAStacksBase$$Original = $CAStacksBase;}
