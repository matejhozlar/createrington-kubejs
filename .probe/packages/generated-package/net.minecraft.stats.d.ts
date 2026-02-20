declare module "net.minecraft.stats.Stats" {
import {$StatType} from "net.minecraft.stats.StatType"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$EntityType} from "net.minecraft.world.entity.EntityType"

export class $Stats {
static readonly "INTERACT_WITH_LOOM": $ResourceLocation
static readonly "ANIMALS_BRED": $ResourceLocation
static readonly "INTERACT_WITH_BLAST_FURNACE": $ResourceLocation
static readonly "TUNE_NOTEBLOCK": $ResourceLocation
static readonly "PLAY_NOTEBLOCK": $ResourceLocation
static readonly "PLAY_TIME": $ResourceLocation
static readonly "DEATHS": $ResourceLocation
static readonly "INTERACT_WITH_BREWINGSTAND": $ResourceLocation
static readonly "PLAY_RECORD": $ResourceLocation
static readonly "JUMP": $ResourceLocation
static readonly "POT_FLOWER": $ResourceLocation
static readonly "INTERACT_WITH_ANVIL": $ResourceLocation
static readonly "WALK_ON_WATER_ONE_CM": $ResourceLocation
static readonly "INTERACT_WITH_STONECUTTER": $ResourceLocation
static readonly "RAID_WIN": $ResourceLocation
static readonly "SWIM_ONE_CM": $ResourceLocation
static readonly "INTERACT_WITH_LECTERN": $ResourceLocation
static readonly "RAID_TRIGGER": $ResourceLocation
static readonly "CROUCH_ONE_CM": $ResourceLocation
static readonly "STRIDER_ONE_CM": $ResourceLocation
static readonly "USE_CAULDRON": $ResourceLocation
static readonly "DAMAGE_DEALT": $ResourceLocation
static readonly "BELL_RING": $ResourceLocation
static readonly "CLEAN_SHULKER_BOX": $ResourceLocation
static readonly "TIME_SINCE_DEATH": $ResourceLocation
static readonly "TRIGGER_TRAPPED_CHEST": $ResourceLocation
static readonly "ITEM_BROKEN": $StatType<($Item)>
static readonly "FLY_ONE_CM": $ResourceLocation
static readonly "EAT_CAKE_SLICE": $ResourceLocation
static readonly "DAMAGE_ABSORBED": $ResourceLocation
static readonly "INTERACT_WITH_FURNACE": $ResourceLocation
static readonly "AVIATE_ONE_CM": $ResourceLocation
static readonly "INTERACT_WITH_GRINDSTONE": $ResourceLocation
static readonly "TARGET_HIT": $ResourceLocation
static readonly "FISH_CAUGHT": $ResourceLocation
static readonly "TIME_SINCE_REST": $ResourceLocation
static readonly "INTERACT_WITH_CRAFTING_TABLE": $ResourceLocation
static readonly "BLOCK_MINED": $StatType<($Block)>
static readonly "DAMAGE_DEALT_RESISTED": $ResourceLocation
static readonly "INSPECT_HOPPER": $ResourceLocation
static readonly "ITEM_DROPPED": $StatType<($Item)>
static readonly "DAMAGE_TAKEN": $ResourceLocation
static readonly "LEAVE_GAME": $ResourceLocation
static readonly "FALL_ONE_CM": $ResourceLocation
static readonly "INTERACT_WITH_CARTOGRAPHY_TABLE": $ResourceLocation
static readonly "TOTAL_WORLD_TIME": $ResourceLocation
static readonly "WALK_UNDER_WATER_ONE_CM": $ResourceLocation
static readonly "CLEAN_ARMOR": $ResourceLocation
static readonly "MINECART_ONE_CM": $ResourceLocation
static readonly "FILL_CAULDRON": $ResourceLocation
static readonly "CLIMB_ONE_CM": $ResourceLocation
static readonly "DROP": $ResourceLocation
static readonly "SPRINT_ONE_CM": $ResourceLocation
static readonly "ITEM_USED": $StatType<($Item)>
static readonly "ENCHANT_ITEM": $ResourceLocation
static readonly "INTERACT_WITH_SMITHING_TABLE": $ResourceLocation
static readonly "CUSTOM": $StatType<($ResourceLocation)>
static readonly "OPEN_ENDERCHEST": $ResourceLocation
static readonly "MOB_KILLS": $ResourceLocation
static readonly "SLEEP_IN_BED": $ResourceLocation
static readonly "HORSE_ONE_CM": $ResourceLocation
static readonly "INTERACT_WITH_BEACON": $ResourceLocation
static readonly "PIG_ONE_CM": $ResourceLocation
static readonly "ENTITY_KILLED": $StatType<($EntityType<(never)>)>
static readonly "ITEM_PICKED_UP": $StatType<($Item)>
static readonly "OPEN_BARREL": $ResourceLocation
static readonly "INSPECT_DISPENSER": $ResourceLocation
static readonly "ENTITY_KILLED_BY": $StatType<($EntityType<(never)>)>
static readonly "WALK_ONE_CM": $ResourceLocation
static readonly "TALKED_TO_VILLAGER": $ResourceLocation
static readonly "DAMAGE_DEALT_ABSORBED": $ResourceLocation
static readonly "TRADED_WITH_VILLAGER": $ResourceLocation
static readonly "BOAT_ONE_CM": $ResourceLocation
static readonly "DAMAGE_RESISTED": $ResourceLocation
static readonly "INTERACT_WITH_SMOKER": $ResourceLocation
static readonly "CROUCH_TIME": $ResourceLocation
static readonly "CLEAN_BANNER": $ResourceLocation
static readonly "ITEM_CRAFTED": $StatType<($Item)>
static readonly "DAMAGE_BLOCKED_BY_SHIELD": $ResourceLocation
static readonly "OPEN_SHULKER_BOX": $ResourceLocation
static readonly "INTERACT_WITH_CAMPFIRE": $ResourceLocation
static readonly "INSPECT_DROPPER": $ResourceLocation
static readonly "OPEN_CHEST": $ResourceLocation
static readonly "PLAYER_KILLS": $ResourceLocation

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Stats$$Type = ($Stats);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Stats$$Original = $Stats;}
declare module "net.minecraft.stats.RecipeBookSettings" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$RecipeBookType$$Type} from "net.minecraft.world.inventory.RecipeBookType"

export class $RecipeBookSettings {
constructor()

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isOpen"(arg0: $RecipeBookType$$Type): boolean
public "write"(arg0: $FriendlyByteBuf$$Type): void
public "write"(arg0: $CompoundTag$$Type): void
public static "read"(arg0: $FriendlyByteBuf$$Type): $RecipeBookSettings
public static "read"(arg0: $CompoundTag$$Type): $RecipeBookSettings
public "copy"(): $RecipeBookSettings
public "replaceFrom"(arg0: $RecipeBookSettings$$Type): void
public "setOpen"(arg0: $RecipeBookType$$Type, arg1: boolean): void
public "isFiltering"(arg0: $RecipeBookType$$Type): boolean
public "setFiltering"(arg0: $RecipeBookType$$Type, arg1: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeBookSettings$$Type = ($RecipeBookSettings);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeBookSettings$$Original = $RecipeBookSettings;}
declare module "net.minecraft.stats.ServerRecipeBook" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Collection$$Type} from "java.util.Collection"
import {$RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$RecipeManager$$Type} from "net.minecraft.world.item.crafting.RecipeManager"
import {$RecipeBook} from "net.minecraft.stats.RecipeBook"
import {$Set} from "java.util.Set"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $ServerRecipeBook extends $RecipeBook {
readonly "highlight": $Set<($ResourceLocation)>
readonly "known": $Set<($ResourceLocation)>
static readonly "RECIPE_BOOK_TAG": StringJS

constructor()

public "removeRecipes"(arg0: $Collection$$Type<($RecipeHolder$$Type<(never)>)>, arg1: $ServerPlayer$$Type): integer
public "sendInitialRecipeBook"(arg0: $ServerPlayer$$Type): void
public "addRecipes"(arg0: $Collection$$Type<($RecipeHolder$$Type<(never)>)>, arg1: $ServerPlayer$$Type): integer
public "fromNbt"(arg0: $CompoundTag$$Type, arg1: $RecipeManager$$Type): void
public "toNbt"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerRecipeBook$$Type = ($ServerRecipeBook);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerRecipeBook$$Original = $ServerRecipeBook;}
declare module "net.minecraft.stats.StatType" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Iterable$$Interface} from "java.lang.Iterable"
import {$Iterator} from "java.util.Iterator"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Stat, $Stat$$Type} from "net.minecraft.stats.Stat"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Spliterator} from "java.util.Spliterator"
import {$StatFormatter$$Type} from "net.minecraft.stats.StatFormatter"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $StatType<T> implements $Iterable$$Interface<($Stat<(T)>)> {
constructor(arg0: $Registry$$Type<(T)>, arg1: $Component$$Type)

public "get"(arg0: T): $Stat<(T)>
public "get"(arg0: T, arg1: $StatFormatter$$Type): $Stat<(T)>
public "iterator"(): $Iterator<($Stat<(T)>)>
public "contains"(arg0: T): boolean
public "getDisplayName"(): $Component
public "getRegistry"(): $Registry<(T)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($Stat<(T)>)>
public "spliterator"(): $Spliterator<($Stat<(T)>)>
public "forEach"(arg0: $Consumer$$Type<($Stat<(T)>)>): void
[Symbol.iterator](): IterableIterator<$Stat<(T)>>;
get "displayName"(): $Component
get "registry"(): $Registry<(T)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.StatType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.StatTypeTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatType$$Type<T> = (Special.StatType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StatType$$Original<T> = $StatType<(T)>;}
declare module "net.minecraft.stats.StatsCounter" {
import {$StatType$$Type} from "net.minecraft.stats.StatType"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Object2IntMap} from "it.unimi.dsi.fastutil.objects.Object2IntMap"
import {$Stat, $Stat$$Type} from "net.minecraft.stats.Stat"

export class $StatsCounter {
readonly "stats": $Object2IntMap<($Stat<(never)>)>

constructor()

public "getValue"<T>(arg0: $StatType$$Type<(T)>, arg1: T): integer
public "getValue"(arg0: $Stat$$Type<(never)>): integer
public "increment"(arg0: $Player$$Type, arg1: $Stat$$Type<(never)>, arg2: integer): void
public "setValue"(arg0: $Player$$Type, arg1: $Stat$$Type<(never)>, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatsCounter$$Type = ($StatsCounter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StatsCounter$$Original = $StatsCounter;}
declare module "net.minecraft.stats.RecipeBook" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$RecipeBookMenu$$Type} from "net.minecraft.world.inventory.RecipeBookMenu"
import {$RecipeBookType$$Type} from "net.minecraft.world.inventory.RecipeBookType"
import {$Set} from "java.util.Set"
import {$RecipeBookSettings, $RecipeBookSettings$$Type} from "net.minecraft.stats.RecipeBookSettings"

export class $RecipeBook {
readonly "highlight": $Set<($ResourceLocation)>
readonly "known": $Set<($ResourceLocation)>

constructor()

public "remove"(arg0: $ResourceLocation$$Type): void
public "remove"(arg0: $RecipeHolder$$Type<(never)>): void
public "add"(arg0: $ResourceLocation$$Type): void
public "add"(arg0: $RecipeHolder$$Type<(never)>): void
public "contains"(arg0: $ResourceLocation$$Type): boolean
public "contains"(arg0: $RecipeHolder$$Type<(never)>): boolean
public "isOpen"(arg0: $RecipeBookType$$Type): boolean
public "copyOverData"(arg0: $RecipeBook$$Type): void
public "removeHighlight"(arg0: $RecipeHolder$$Type<(never)>): void
public "willHighlight"(arg0: $RecipeHolder$$Type<(never)>): boolean
public "setOpen"(arg0: $RecipeBookType$$Type, arg1: boolean): void
public "addHighlight"(arg0: $ResourceLocation$$Type): void
public "addHighlight"(arg0: $RecipeHolder$$Type<(never)>): void
public "isFiltering"(arg0: $RecipeBookType$$Type): boolean
public "isFiltering"(arg0: $RecipeBookMenu$$Type<(never), (never)>): boolean
public "setFiltering"(arg0: $RecipeBookType$$Type, arg1: boolean): void
public "setBookSettings"(arg0: $RecipeBookSettings$$Type): void
public "getBookSettings"(): $RecipeBookSettings
public "setBookSetting"(arg0: $RecipeBookType$$Type, arg1: boolean, arg2: boolean): void
set "bookSettings"(value: $RecipeBookSettings$$Type)
get "bookSettings"(): $RecipeBookSettings
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeBook$$Type = ($RecipeBook);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeBook$$Original = $RecipeBook;}
declare module "net.minecraft.stats.Stat" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$StatType, $StatType$$Type} from "net.minecraft.stats.StatType"
import {$ObjectiveCriteria} from "net.minecraft.world.scores.criteria.ObjectiveCriteria"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$StatFormatter$$Type} from "net.minecraft.stats.StatFormatter"

export class $Stat<T> extends $ObjectiveCriteria {
static readonly "DEATH_COUNT": $ObjectiveCriteria
static readonly "ARMOR": $ObjectiveCriteria
static readonly "TRIGGER": $ObjectiveCriteria
static readonly "KILL_COUNT_ALL": $ObjectiveCriteria
static readonly "AIR": $ObjectiveCriteria
static readonly "LEVEL": $ObjectiveCriteria
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Stat<(never)>)>
static readonly "DUMMY": $ObjectiveCriteria
static readonly "EXPERIENCE": $ObjectiveCriteria
static readonly "HEALTH": $ObjectiveCriteria
static readonly "KILL_COUNT_PLAYERS": $ObjectiveCriteria
static readonly "TEAM_KILL": ($ObjectiveCriteria)[]
static readonly "KILLED_BY_TEAM": ($ObjectiveCriteria)[]
static readonly "FOOD": $ObjectiveCriteria

constructor(arg0: $StatType$$Type<(T)>, arg1: T, arg2: $StatFormatter$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getValue"(): T
public "format"(arg0: integer): StringJS
public "getType"(): $StatType<(T)>
public static "buildName"<T>(arg0: $StatType$$Type<(T)>, arg1: T): StringJS
get "value"(): T
get "type"(): $StatType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Stat$$Type<T> = (StringJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Stat$$Original<T> = $Stat<(T)>;}
declare module "net.minecraft.stats.ServerStatsCounter" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Object2IntMap} from "it.unimi.dsi.fastutil.objects.Object2IntMap"
import {$File$$Type} from "java.io.File"
import {$Stat, $Stat$$Type} from "net.minecraft.stats.Stat"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$StatsCounter} from "net.minecraft.stats.StatsCounter"
import {$MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$DataFixer$$Type} from "com.mojang.datafixers.DataFixer"

export class $ServerStatsCounter extends $StatsCounter {
readonly "stats": $Object2IntMap<($Stat<(never)>)>

constructor(arg0: $MinecraftServer$$Type, arg1: $File$$Type)

public "save"(): void
public "setValue"(arg0: $Player$$Type, arg1: $Stat$$Type<(never)>, arg2: integer): void
public "parseLocal"(arg0: $DataFixer$$Type, arg1: StringJS): void
public "toJson"(): StringJS
public "sendStats"(arg0: $ServerPlayer$$Type): void
public "markAllDirty"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerStatsCounter$$Type = ($ServerStatsCounter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerStatsCounter$$Original = $ServerStatsCounter;}
declare module "net.minecraft.stats.StatFormatter" {
import {$DecimalFormat} from "java.text.DecimalFormat"

export interface $StatFormatter$$Interface {

(arg0: integer): StringJS
}

export class $StatFormatter implements $StatFormatter$$Interface {
static readonly "DISTANCE": $StatFormatter
static readonly "DECIMAL_FORMAT": $DecimalFormat
static readonly "DIVIDE_BY_TEN": $StatFormatter
static readonly "TIME": $StatFormatter
static readonly "DEFAULT": $StatFormatter

 "format"(arg0: integer): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatFormatter$$Type = ((arg0: integer) => StringJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StatFormatter$$Original = $StatFormatter;}
