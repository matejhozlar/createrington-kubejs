declare module "net.neoforged.neoforge.fluids.FluidStack" {
import {$MapId$$Type} from "net.minecraft.world.level.saveddata.maps.MapId"
import {$Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$MapDecorations$$Type} from "net.minecraft.world.item.component.MapDecorations"
import {$DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Unbreakable$$Type} from "net.minecraft.world.item.component.Unbreakable"
import {$RelativeURL} from "dev.latvian.mods.kubejs.web.RelativeURL"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$JukeboxPlayable$$Type} from "net.minecraft.world.item.JukeboxPlayable"
import {$CustomData$$Type} from "net.minecraft.world.item.component.CustomData"
import {$FluidIngredient$$Type} from "net.neoforged.neoforge.fluids.crafting.FluidIngredient"
import {$AdventureModePredicate$$Type} from "net.minecraft.world.item.AdventureModePredicate"
import {$WritableBookContent$$Type} from "net.minecraft.world.item.component.WritableBookContent"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$WrittenBookContent$$Type} from "net.minecraft.world.item.component.WrittenBookContent"
import {$ItemEnchantments$$Type} from "net.minecraft.world.item.enchantment.ItemEnchantments"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$MapPostProcessing$$Type} from "net.minecraft.world.item.component.MapPostProcessing"
import {$MutableDataComponentHolderFunctions} from "dev.latvian.mods.kubejs.component.MutableDataComponentHolderFunctions"
import {$TooltipProvider} from "net.minecraft.world.item.component.TooltipProvider"
import {$Stream} from "java.util.stream.Stream"
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$SeededContainerLoot$$Type} from "net.minecraft.world.item.component.SeededContainerLoot"
import {$DyedItemColor$$Type} from "net.minecraft.world.item.component.DyedItemColor"
import {$ItemLore$$Type} from "net.minecraft.world.item.component.ItemLore"
import {$RecipeScriptContext$$Type} from "dev.latvian.mods.kubejs.recipe.RecipeScriptContext"
import {$RecipeMatchContext$$Type} from "dev.latvian.mods.kubejs.recipe.filter.RecipeMatchContext"
import {$Rarity$$Type} from "net.minecraft.world.item.Rarity"
import {$BeehiveBlockEntity$Occupant$$Type} from "net.minecraft.world.level.block.entity.BeehiveBlockEntity$Occupant"
import {$LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Fireworks$$Type} from "net.minecraft.world.item.component.Fireworks"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$FluidStackKJS$$Interface} from "dev.latvian.mods.kubejs.core.FluidStackKJS"
import {$KubeColor$$Type} from "dev.latvian.mods.kubejs.color.KubeColor"
import {$DebugStickState$$Type} from "net.minecraft.world.item.component.DebugStickState"
import {$MapItemColor$$Type} from "net.minecraft.world.item.component.MapItemColor"
import {$ResolvableProfile$$Type} from "net.minecraft.world.item.component.ResolvableProfile"
import {$Unit$$Type} from "net.minecraft.util.Unit"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$ComponentFunctions} from "dev.latvian.mods.kubejs.component.ComponentFunctions"
import {$MutableDataComponentHolder, $MutableDataComponentHolder$$Interface} from "net.neoforged.neoforge.common.MutableDataComponentHolder"
import {$UUID$$Type} from "java.util.UUID"
import {$ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$JsonElement} from "com.google.gson.JsonElement"
import {$List, $List$$Type} from "java.util.List"
import {$FireworkExplosion$$Type} from "net.minecraft.world.item.component.FireworkExplosion"
import {$BundleContents$$Type} from "net.minecraft.world.item.component.BundleContents"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$FoodProperties$$Type} from "net.minecraft.world.food.FoodProperties"
import {$LodestoneTracker$$Type} from "net.minecraft.world.item.component.LodestoneTracker"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$SuspiciousStewEffects$$Type} from "net.minecraft.world.item.component.SuspiciousStewEffects"
import {$Codec} from "com.mojang.serialization.Codec"
import {$LockCode$$Type} from "net.minecraft.world.LockCode"
import {$DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$PotionContents$$Type} from "net.minecraft.world.item.alchemy.PotionContents"
import {$FluidLike} from "dev.latvian.mods.kubejs.fluid.FluidLike"
import {$ItemContainerContents$$Type} from "net.minecraft.world.item.component.ItemContainerContents"
import {$ArmorTrim$$Type} from "net.minecraft.world.item.armortrim.ArmorTrim"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Instrument$$Type} from "net.minecraft.world.item.Instrument"
import {$Map$$Type} from "java.util.Map"
import {$BannerPatternLayers$$Type} from "net.minecraft.world.level.block.entity.BannerPatternLayers"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$CustomModelData$$Type} from "net.minecraft.world.item.component.CustomModelData"
import {$ChargedProjectiles$$Type} from "net.minecraft.world.item.component.ChargedProjectiles"
import {$Tool$$Type} from "net.minecraft.world.item.component.Tool"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$DataComponentHolder$$Type} from "net.minecraft.core.component.DataComponentHolder"
import {$DataComponentPatch, $DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$Registry} from "net.minecraft.core.Registry"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$PotDecorations$$Type} from "net.minecraft.world.level.block.entity.PotDecorations"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$BlockItemStateProperties$$Type} from "net.minecraft.world.item.component.BlockItemStateProperties"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $FluidStack implements $MutableDataComponentHolder$$Interface, $FluidStackKJS$$Interface {
static readonly "CODEC": $Codec<($FluidStack)>
static readonly "FLUID_NON_EMPTY_CODEC": $Codec<($Holder<($Fluid)>)>
static readonly "OPTIONAL_CODEC": $Codec<($FluidStack)>
static readonly "OPTIONAL_STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($FluidStack)>
static readonly "EMPTY": $FluidStack
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($FluidStack)>

constructor(arg0: $Holder$$Type<($Fluid)>, arg1: integer, arg2: $DataComponentPatch$$Type)
constructor(arg0: $Holder$$Type<($Fluid)>, arg1: integer)
constructor(arg0: $Fluid$$Type, arg1: integer)

public "toString"(): StringJS
public "isEmpty"(): boolean
public static "matches"(arg0: $FluidStack$$Type, arg1: $FluidStack$$Type): boolean
public "split"(arg0: integer): $FluidStack
public "save"(arg0: $HolderLookup$Provider$$Type): $Tag
public "save"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): $Tag
public static "parse"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): $Optional<($FluidStack)>
public "copy"(): $FluidStack
public "is"(arg0: $FluidType$$Type): boolean
public "is"(arg0: $HolderSet$$Type<($Fluid)>): boolean
public "is"(arg0: $Holder$$Type<($Fluid)>): boolean
public "is"(arg0: $TagKey$$Type<($Fluid)>): boolean
public "is"(arg0: $Fluid$$Type): boolean
public "is"(arg0: $Predicate$$Type<($Holder<($Fluid)>)>): boolean
public "grow"(arg0: integer): void
/**
 * 
 * @deprecated
 */
public "getDisplayName"(): $Component
public "getAmount"(): integer
public "limitSize"(arg0: integer): void
public "isComponentsPatchEmpty"(): boolean
public "shrink"(arg0: integer): void
public "getComponents"(): $DataComponentMap
public "copyAndClear"(): $FluidStack
public static "hashFluidAndComponents"(arg0: $FluidStack$$Type): integer
/**
 * 
 * @deprecated
 */
public static "areFluidStackTagsEqual"(arg0: $FluidStack$$Type, arg1: $FluidStack$$Type): boolean
/**
 * 
 * @deprecated
 */
public "isFluidStackIdentical"(arg0: $FluidStack$$Type): boolean
public static "isSameFluidSameComponents"(arg0: $FluidStack$$Type, arg1: $FluidStack$$Type): boolean
public static "lenientOtionalFieldOf"(arg0: StringJS): $MapCodec<($FluidStack)>
public static "parseOptional"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $FluidStack
public "getFluidType"(): $FluidType
public "getTags"(): $Stream<($TagKey<($Fluid)>)>
public "saveOptional"(arg0: $HolderLookup$Provider$$Type): $Tag
/**
 * 
 * @deprecated
 */
public "isFluidEqual"(arg0: $FluidStack$$Type): boolean
/**
 * 
 * @deprecated
 */
public "isFluidEqual"(arg0: $ItemStack$$Type): boolean
/**
 * 
 * @deprecated
 */
public "containsFluid"(arg0: $FluidStack$$Type): boolean
public "getFluidHolder"(): $Holder<($Fluid)>
public static "fixedAmountCodec"(arg0: integer): $Codec<($FluidStack)>
public static "isSameFluid"(arg0: $FluidStack$$Type, arg1: $FluidStack$$Type): boolean
/**
 * 
 * @deprecated
 */
public "getTranslationKey"(): StringJS
public "getHoverName"(): $Component
public "getComponentsPatch"(): $DataComponentPatch
public "getFluid"(): $Fluid
public "getDescriptionId"(): StringJS
public "setAmount"(arg0: integer): void
public "copyWithAmount"(arg0: integer): $FluidStack
public "update"<T>(arg0: $DataComponentType$$Type<(T)>, arg1: T, arg2: $UnaryOperator$$Type<(T)>): T
public "update"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: T, arg2: $UnaryOperator$$Type<(T)>): T
public "update"<T, U>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: T, arg2: U, arg3: $BiFunction$$Type<(T), (U), (T)>): T
public "update"<T, U>(arg0: $DataComponentType$$Type<(T)>, arg1: T, arg2: U, arg3: $BiFunction$$Type<(T), (U), (T)>): T
public "copyFrom"(arg0: $DataComponentHolder$$Type, ...arg1: ($Supplier$$Type<($DataComponentType$$Type<(never)>)>)[]): void
public "copyFrom"(arg0: $DataComponentHolder$$Type, ...arg1: ($DataComponentType$$Type<(never)>)[]): void
public "matches"(cx: $RecipeMatchContext$$Type, s: $FluidStack$$Type, exact: boolean): boolean
public "matches"(cx: $RecipeMatchContext$$Type, ingredient: $FluidIngredient$$Type, exact: boolean): boolean
public "kjs$getWebIconURL"(ops: $DynamicOps$$Type<($Tag$$Type)>, size: integer): $RelativeURL
public "specialEquals"(o: any, shallow: boolean): boolean
public "isEmpty"(): boolean
public "kjs$equalsIgnoringCount"(stack: $FluidStack$$Type): boolean
public "getFluid"(): $Fluid
public "getAmount"(): integer
public "getRegistryId"(): $ResourceKey<($Registry<($Fluid)>)>
public "asHolder"(): $Holder<($Fluid)>
public "getIdLocation"(): $ResourceLocation
public "getRegistry"(): $Registry<($Fluid)>
public "replaceThisWith"(cx: $RecipeScriptContext$$Type, arg1: any): any
public "kjs$self"(): $FluidStack
public "getKey"(): $ResourceKey<($Fluid)>
public "getCodec"(): $Codec<(never)>
public "getId"(): StringJS
public "getMod"(): StringJS
public "copy"(amount: integer): $FluidLike
public "get"<T>(arg0: $DataComponentType$$Type<(T)>): T
public "getOrDefault"<T>(arg0: $DataComponentType$$Type<(T)>, arg1: T): T
public "has"(arg0: $DataComponentType$$Type<(never)>): boolean
public "getComponentHolder"(): $MutableDataComponentHolder
public "getComponentMap"(): $DataComponentMap
public "patch"(components: $DataComponentPatch$$Type): $MutableDataComponentHolderFunctions
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public "toJson"(): $JsonElement
public "toNBT"(): $Tag
public "getTagKeys"(): $List<($TagKey<($Fluid)>)>
public "getTags"(): $List<($ResourceLocation)>
public "hasTag"(tag: $ResourceLocation$$Type): boolean
public "get"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>): T
public "getOrDefault"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: T): T
public "has"(arg0: $Supplier$$Type<($DataComponentType$$Type<(never)>)>): boolean
public "addToTooltip"<T extends $TooltipProvider>(arg0: $DataComponentType$$Type<(T)>, arg1: $Item$TooltipContext$$Type, arg2: $Consumer$$Type<($Component)>, arg3: $TooltipFlag$$Type): void
public "addToTooltip"<T extends $TooltipProvider>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: $Item$TooltipContext$$Type, arg2: $Consumer$$Type<($Component)>, arg3: $TooltipFlag$$Type): void
public "setCustomData"(tag: $CompoundTag$$Type): void
public "setProfile"(name: StringJS, uuid: $UUID$$Type): void
public "setProfile"(profile: $GameProfile$$Type): void
public "setDyedColor"(color: $KubeColor$$Type): void
public "setEntityData"(tag: $CompoundTag$$Type): void
public "setPotionId"(potion: $Holder$$Type<($Potion)>): void
public "setUnit"(component: $DataComponentType$$Type<($Unit$$Type)>): $ComponentFunctions
public "setCustomName"(name: $Component$$Type): void
public "setRarity"(rarity: $Rarity$$Type): void
public "getCustomName"(): $Component
public "setBaseColor"(color: $DyeColor$$Type): void
public "setLore"(lines: $List$$Type<($Component$$Type)>, styledLines: $List$$Type<($Component$$Type)>): void
public "setLore"(lines: $List$$Type<($Component$$Type)>): void
public "setLockCode"(lock: StringJS): void
public "getCustomData"(): $CompoundTag
public "setAdditionalTooltipHidden"(): void
public "setBlockStateProperties"(properties: $Map$$Type<(StringJS), (StringJS)>): void
public "setDyedColorWithTooltip"(color: $KubeColor$$Type): void
public "setPotionContents"(contents: $PotionContents$$Type): void
public "resetComponents"(): $ComponentFunctions
public "setCustomModelData"(data: integer): void
public "setGlintOverride"(override: boolean): void
public "setContainerLootTable"(lootTable: $ResourceKey$$Type<($LootTable)>, seed: long): void
public "setContainerLootTable"(lootTable: $ResourceKey$$Type<($LootTable)>): void
public "getComponentString"(): StringJS
public "setTooltipHidden"(): void
public "get"<T>(type: $DataComponentType$$Type<(T)>): T
public "remove"(type: $DataComponentType$$Type<(never)>): $ComponentFunctions
public static "wrap"(o: any): $ReplacementMatch
public "set"<T extends ComponentTypes>(componentType: T, value: ComponentTypeMap[T]): $FluidStack
get "empty"(): boolean
get "displayName"(): $Component
get "amount"(): integer
get "componentsPatchEmpty"(): boolean
get "components"(): $DataComponentMap
get "fluidType"(): $FluidType
get "tags"(): $Stream<($TagKey<($Fluid)>)>
get "fluidHolder"(): $Holder<($Fluid)>
get "translationKey"(): StringJS
get "hoverName"(): $Component
get "componentsPatch"(): $DataComponentPatch
get "fluid"(): $Fluid
get "descriptionId"(): StringJS
set "amount"(value: integer)
get "empty"(): boolean
get "fluid"(): $Fluid
get "amount"(): integer
get "registryId"(): $ResourceKey<($Registry<($Fluid)>)>
get "idLocation"(): $ResourceLocation
get "registry"(): $Registry<($Fluid)>
get "key"(): $ResourceKey<($Fluid)>
get "codec"(): $Codec<(never)>
get "id"(): StringJS
get "mod"(): StringJS
get "componentHolder"(): $MutableDataComponentHolder
get "componentMap"(): $DataComponentMap
get "tagKeys"(): $List<($TagKey<($Fluid)>)>
get "tags"(): $List<($ResourceLocation)>
set "customData"(value: $CompoundTag$$Type)
set "profile"(value: $GameProfile$$Type)
set "dyedColor"(value: $KubeColor$$Type)
set "entityData"(value: $CompoundTag$$Type)
set "potionId"(value: $Holder$$Type<($Potion)>)
set "unit"(value: $DataComponentType$$Type<($Unit$$Type)>)
set "customName"(value: $Component$$Type)
set "rarity"(value: $Rarity$$Type)
get "customName"(): $Component
set "baseColor"(value: $DyeColor$$Type)
set "lore"(value: $List$$Type<($Component$$Type)>)
set "lockCode"(value: StringJS)
get "customData"(): $CompoundTag
get "additionalTooltipHidden"(): void
set "blockStateProperties"(value: $Map$$Type<(StringJS), (StringJS)>)
set "dyedColorWithTooltip"(value: $KubeColor$$Type)
set "potionContents"(value: $PotionContents$$Type)
set "customModelData"(value: integer)
set "glintOverride"(value: boolean)
set "containerLootTable"(value: $ResourceKey$$Type<($LootTable)>)
get "componentString"(): StringJS
get "tooltipHidden"(): void
}
export type ComponentTypeMap = {"minecraft:map_color": $MapItemColor$$Type;
"minecraft:bucket_entity_data": $CustomData$$Type;
"minecraft:enchantments": $ItemEnchantments$$Type;
"minecraft:map_decorations": $MapDecorations$$Type;
"minecraft:writable_book_content": $WritableBookContent$$Type;
"minecraft:block_entity_data": $CustomData$$Type;
"minecraft:instrument": $Holder$$Type<($Instrument$$Type)>;
"minecraft:lodestone_tracker": $LodestoneTracker$$Type;
"minecraft:base_color": $DyeColor$$Type;
"minecraft:map_post_processing": $MapPostProcessing$$Type;
"minecraft:item_name": $Component$$Type;
"minecraft:food": $FoodProperties$$Type;
"minecraft:unbreakable": $Unbreakable$$Type;
"minecraft:container": $ItemContainerContents$$Type;
"minecraft:pot_decorations": $PotDecorations$$Type;
"minecraft:damage": integer;
"minecraft:potion_contents": $PotionContents$$Type;
"minecraft:bees": $List$$Type<($BeehiveBlockEntity$Occupant$$Type)>;
"minecraft:trim": $ArmorTrim$$Type;
"minecraft:max_damage": integer;
"minecraft:custom_data": $CustomData$$Type;
"minecraft:map_id": $MapId$$Type;
"minecraft:recipes": $List$$Type<($ResourceLocation$$Type)>;
"minecraft:enchantment_glint_override": boolean;
"minecraft:block_state": $BlockItemStateProperties$$Type;
"minecraft:lock": $LockCode$$Type;
"minecraft:bundle_contents": $BundleContents$$Type;
"minecraft:entity_data": $CustomData$$Type;
"minecraft:suspicious_stew_effects": $SuspiciousStewEffects$$Type;
"minecraft:debug_stick_state": $DebugStickState$$Type;
"minecraft:ominous_bottle_amplifier": integer;
"minecraft:jukebox_playable": $JukeboxPlayable$$Type;
"minecraft:fire_resistant": $Unit$$Type;
"minecraft:creative_slot_lock": $Unit$$Type;
"minecraft:rarity": $Rarity$$Type;
"minecraft:tool": $Tool$$Type;
"minecraft:lore": $ItemLore$$Type;
"minecraft:container_loot": $SeededContainerLoot$$Type;
"minecraft:dyed_color": $DyedItemColor$$Type;
"minecraft:intangible_projectile": $Unit$$Type;
"minecraft:note_block_sound": $ResourceLocation$$Type;
"minecraft:charged_projectiles": $ChargedProjectiles$$Type;
"minecraft:fireworks": $Fireworks$$Type;
"minecraft:can_break": $AdventureModePredicate$$Type;
"minecraft:repair_cost": integer;
"minecraft:max_stack_size": integer;
"minecraft:stored_enchantments": $ItemEnchantments$$Type;
"minecraft:written_book_content": $WrittenBookContent$$Type;
"minecraft:custom_name": $Component$$Type;
"minecraft:can_place_on": $AdventureModePredicate$$Type;
"minecraft:firework_explosion": $FireworkExplosion$$Type;
"minecraft:attribute_modifiers": $ItemAttributeModifiers$$Type;
"minecraft:hide_tooltip": $Unit$$Type;
"minecraft:custom_model_data": $CustomModelData$$Type;
"minecraft:hide_additional_tooltip": $Unit$$Type;
"minecraft:banner_patterns": $BannerPatternLayers$$Type;
"minecraft:profile": $ResolvableProfile$$Type};
export type ComponentTypes = keyof ComponentTypeMap;
export type FluidWithAmount = {"fluid": Special.Fluid, "amount"?: integer};
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidStack$$Type = ($Fluid$$Type) | ("-") | (FluidWithAmount);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidStack$$Original = $FluidStack;}
declare module "net.neoforged.neoforge.fluids.crafting.FluidIngredient" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FluidIngredientType} from "net.neoforged.neoforge.fluids.crafting.FluidIngredientType"
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$JsonElement} from "com.google.gson.JsonElement"
import {$Predicate, $Predicate$$Type, $Predicate$$Interface} from "java.util.function.Predicate"
import {$List} from "java.util.List"
import {$RecipeMatchContext$$Type} from "dev.latvian.mods.kubejs.recipe.filter.RecipeMatchContext"
import {$SizedFluidIngredient} from "net.neoforged.neoforge.fluids.crafting.SizedFluidIngredient"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$FluidIngredientKJS$$Interface} from "dev.latvian.mods.kubejs.core.FluidIngredientKJS"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $FluidIngredient implements $Predicate$$Interface<($FluidStack)>, $FluidIngredientKJS$$Interface {
static readonly "CODEC_NON_EMPTY": $Codec<($FluidIngredient)>
static readonly "CODEC": $Codec<($FluidIngredient)>
static readonly "LIST_CODEC": $Codec<($List<($FluidIngredient)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($FluidIngredient)>
static readonly "MAP_CODEC_NONEMPTY": $MapCodec<($FluidIngredient)>
static readonly "LIST_CODEC_NON_EMPTY": $Codec<($List<($FluidIngredient)>)>

constructor()

public "getStacks"(): ($FluidStack)[]
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "test"(arg0: any): boolean
public "test"(arg0: $FluidStack$$Type): boolean
public "isEmpty"(): boolean
public static "of"(...arg0: ($Fluid$$Type)[]): $FluidIngredient
public static "of"(...arg0: ($FluidStack$$Type)[]): $FluidIngredient
public static "of"(): $FluidIngredient
public static "single"(arg0: $FluidStack$$Type): $FluidIngredient
public static "single"(arg0: $Fluid$$Type): $FluidIngredient
public static "single"(arg0: $Holder$$Type<($Fluid)>): $FluidIngredient
public static "empty"(): $FluidIngredient
public "getType"(): $FluidIngredientType<(never)>
public static "tag"(arg0: $TagKey$$Type<($Fluid)>): $FluidIngredient
public "isSimple"(): boolean
public "self"(): $FluidIngredient
public "hasNoFluids"(): boolean
public "or"(arg0: $Predicate$$Type<($FluidStack)>): $Predicate<($FluidStack)>
public "negate"(): $Predicate<($FluidStack)>
public "and"(arg0: $Predicate$$Type<($FluidStack)>): $Predicate<($FluidStack)>
public static "not"<T>(arg0: $Predicate$$Type<($FluidStack)>): $Predicate<($FluidStack)>
public static "isEqual"<T>(arg0: any): $Predicate<($FluidStack)>
public "matches"(cx: $RecipeMatchContext$$Type, arg1: $FluidIngredient$$Type, exact: boolean): boolean
public "matches"(cx: $RecipeMatchContext$$Type, s: $FluidStack$$Type, exact: boolean): boolean
public "getCodec"(): $Codec<(never)>
public "withAmount"(amount: integer): $SizedFluidIngredient
public "toJson"(): $JsonElement
public "toNBT"(): $Tag
public static "wrap"(o: any): $ReplacementMatch
get "stacks"(): ($FluidStack)[]
get "type"(): $FluidIngredientType<(never)>
get "simple"(): boolean
get "codec"(): $Codec<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidIngredient$$Type = ($Fluid$$Type) | (`#${Special.FluidTag}`) | (`@${Special.Mod}`) | (RegExp);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidIngredient$$Original = $FluidIngredient;}
declare module "net.neoforged.neoforge.fluids.FluidType$DripstoneDripInfo" {
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ParticleOptions, $ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"
import {$Record} from "java.lang.Record"

export class $FluidType$DripstoneDripInfo extends $Record {
constructor(chance: float, dripParticle: $ParticleOptions$$Type, filledCauldron: $Block$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "filledCauldron"(): $Block
public "chance"(): float
public "dripParticle"(): $ParticleOptions
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidType$DripstoneDripInfo$$Type = ({"filledCauldron"?: $Block$$Type, "dripParticle"?: $ParticleOptions$$Type, "chance"?: float}) | ([filledCauldron?: $Block$$Type, dripParticle?: $ParticleOptions$$Type, chance?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidType$DripstoneDripInfo$$Original = $FluidType$DripstoneDripInfo;}
declare module "net.neoforged.neoforge.fluids.FluidType$Properties" {
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$PathType$$Type} from "net.minecraft.world.level.pathfinder.PathType"
import {$Rarity$$Type} from "net.minecraft.world.item.Rarity"
import {$SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"
import {$SoundAction$$Type} from "net.neoforged.neoforge.common.SoundAction"

export class $FluidType$Properties {
public static "create"(): $FluidType$Properties
public "fallDistanceModifier"(arg0: float): $FluidType$Properties
public "addDripstoneDripping"(arg0: float, arg1: $ParticleOptions$$Type, arg2: $Block$$Type, arg3: $SoundEvent$$Type): $FluidType$Properties
public "descriptionId"(arg0: StringJS): $FluidType$Properties
public "adjacentPathType"(arg0: $PathType$$Type): $FluidType$Properties
public "canConvertToSource"(arg0: boolean): $FluidType$Properties
public "supportsBoating"(arg0: boolean): $FluidType$Properties
public "sound"(arg0: $SoundAction$$Type, arg1: $SoundEvent$$Type): $FluidType$Properties
public "canHydrate"(arg0: boolean): $FluidType$Properties
public "canSwim"(arg0: boolean): $FluidType$Properties
public "viscosity"(arg0: integer): $FluidType$Properties
public "lightLevel"(arg0: integer): $FluidType$Properties
public "pathType"(arg0: $PathType$$Type): $FluidType$Properties
public "canDrown"(arg0: boolean): $FluidType$Properties
public "rarity"(arg0: $Rarity$$Type): $FluidType$Properties
public "temperature"(arg0: integer): $FluidType$Properties
public "density"(arg0: integer): $FluidType$Properties
public "canPushEntity"(arg0: boolean): $FluidType$Properties
public "motionScale"(arg0: double): $FluidType$Properties
public "canExtinguish"(arg0: boolean): $FluidType$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidType$Properties$$Type = ($FluidType$Properties);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidType$Properties$$Original = $FluidType$Properties;}
declare module "net.neoforged.neoforge.fluids.capability.IFluidHandler" {
import {$IFluidHandler$FluidAction$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"

export interface $IFluidHandler$$Interface {
get "tanks"(): integer
}

export class $IFluidHandler implements $IFluidHandler$$Interface {
 "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
 "drain"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
 "fill"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): integer
 "getTanks"(): integer
 "getFluidInTank"(arg0: integer): $FluidStack
 "isFluidValid"(arg0: integer, arg1: $FluidStack$$Type): boolean
 "getTankCapacity"(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidHandler$$Type = ($IFluidHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFluidHandler$$Original = $IFluidHandler;}
declare module "net.neoforged.neoforge.fluids.BaseFlowingFluid" {
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$Optional} from "java.util.Optional"
import {$FlowingFluid} from "net.minecraft.world.level.material.FlowingFluid"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$Holder} from "net.minecraft.core.Holder"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$StateDefinition} from "net.minecraft.world.level.block.state.StateDefinition"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$FluidType} from "net.neoforged.neoforge.fluids.FluidType"

export class $BaseFlowingFluid extends $FlowingFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
readonly "stateDefinition": $StateDefinition<($Fluid), ($FluidState)>

public "getSource"(): $Fluid
public "getTickDelay"(arg0: $LevelReader$$Type): integer
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canConvertToSource"(arg0: $FluidState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): boolean
public "getBucket"(): $Item
public "getFluidType"(): $FluidType
public "getFlowing"(): $Fluid
public "isSame"(arg0: $Fluid$$Type): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
get "source"(): $Fluid
get "pickupSound"(): $Optional<($SoundEvent)>
get "bucket"(): $Item
get "fluidType"(): $FluidType
get "flowing"(): $Fluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseFlowingFluid$$Type = ($BaseFlowingFluid);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseFlowingFluid$$Original = $BaseFlowingFluid;}
declare module "net.neoforged.neoforge.fluids.BaseFlowingFluid$Flowing" {
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$Fluid} from "net.minecraft.world.level.material.Fluid"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$StateDefinition} from "net.minecraft.world.level.block.state.StateDefinition"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BaseFlowingFluid} from "net.neoforged.neoforge.fluids.BaseFlowingFluid"
import {$Holder} from "net.minecraft.core.Holder"

export class $BaseFlowingFluid$Flowing extends $BaseFlowingFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
readonly "stateDefinition": $StateDefinition<($Fluid), ($FluidState)>

constructor(arg0: $BaseFlowingFluid$Properties$$Type)

public "getAmount"(arg0: $FluidState$$Type): integer
public "isSource"(arg0: $FluidState$$Type): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseFlowingFluid$Flowing$$Type = ($BaseFlowingFluid$Flowing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseFlowingFluid$Flowing$$Original = $BaseFlowingFluid$Flowing;}
declare module "net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction" {
import {$Enum} from "java.lang.Enum"

export class $IFluidHandler$FluidAction extends $Enum<($IFluidHandler$FluidAction)> {
static readonly "EXECUTE": $IFluidHandler$FluidAction
static readonly "SIMULATE": $IFluidHandler$FluidAction

public static "values"(): ($IFluidHandler$FluidAction)[]
public static "valueOf"(arg0: StringJS): $IFluidHandler$FluidAction
public "execute"(): boolean
public "simulate"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidHandler$FluidAction$$Type = (("execute") | ("simulate"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFluidHandler$FluidAction$$Original = $IFluidHandler$FluidAction;}
declare module "net.neoforged.neoforge.fluids.crafting.FluidIngredientType" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$FluidIngredient} from "net.neoforged.neoforge.fluids.crafting.FluidIngredient"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"

export class $FluidIngredientType<T extends $FluidIngredient> extends $Record {
constructor(arg0: $MapCodec$$Type<(T)>)
constructor(codec: $MapCodec$$Type<(T)>, streamCodec: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
public "codec"(): $MapCodec<(T)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.NeoforgeFluidIngredientType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.NeoforgeFluidIngredientTypeTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidIngredientType$$Type<T> = (Special.NeoforgeFluidIngredientType) | ({"streamCodec"?: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>, "codec"?: $MapCodec$$Type<(T)>}) | ([streamCodec?: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>, codec?: $MapCodec$$Type<(T)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidIngredientType$$Original<T> = $FluidIngredientType<(T)>;}
declare module "net.neoforged.neoforge.fluids.FluidType" {
import {$FluidType$Properties$$Type} from "net.neoforged.neoforge.fluids.FluidType$Properties"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$PathType, $PathType$$Type} from "net.minecraft.world.level.pathfinder.PathType"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SoundAction$$Type} from "net.neoforged.neoforge.common.SoundAction"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$Lazy} from "net.neoforged.neoforge.common.util.Lazy"
import {$FluidType$DripstoneDripInfo} from "net.neoforged.neoforge.fluids.FluidType$DripstoneDripInfo"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IClientFluidTypeExtensions$$Type} from "net.neoforged.neoforge.client.extensions.common.IClientFluidTypeExtensions"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$Boat$$Type} from "net.minecraft.world.entity.vehicle.Boat"

export class $FluidType {
static readonly "SIZE": $Lazy<(integer)>
static readonly "BUCKET_VOLUME": integer

constructor(arg0: $FluidType$Properties$$Type)

public "getDescription"(arg0: $FluidStack$$Type): $Component
public "getDescription"(): $Component
public "toString"(): StringJS
public "move"(arg0: $FluidState$$Type, arg1: $LivingEntity$$Type, arg2: $Vec3$$Type, arg3: double): boolean
public "getStateForPlacement"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $FluidStack$$Type): $FluidState
public "getAdjacentBlockPathType"(arg0: $FluidState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Mob$$Type, arg4: $PathType$$Type): $PathType
public "getBlockForFluidState"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $FluidState$$Type): $BlockState
public "isVaporizedOnPlacement"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $FluidStack$$Type): boolean
/**
 * 
 * @deprecated
 */
public "initializeClient"(arg0: $Consumer$$Type<($IClientFluidTypeExtensions)>): void
public "getLightLevel"(): integer
public "getLightLevel"(arg0: $FluidStack$$Type): integer
public "getLightLevel"(arg0: $FluidState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): integer
public "setItemMovement"(arg0: $ItemEntity$$Type): void
public "getBlockPathType"(arg0: $FluidState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Mob$$Type, arg4: boolean): $PathType
public "handleCauldronDrip"(arg0: $Fluid$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): boolean
public "isLighterThanAir"(): boolean
public "canBePlacedInLevel"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $FluidState$$Type): boolean
public "canBePlacedInLevel"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $FluidStack$$Type): boolean
public "canConvertToSource"(arg0: $FluidState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "canConvertToSource"(arg0: $FluidStack$$Type): boolean
public "supportsBoating"(arg0: $Boat$$Type): boolean
public "supportsBoating"(arg0: $FluidState$$Type, arg1: $Boat$$Type): boolean
public "getDripInfo"(): $FluidType$DripstoneDripInfo
public "getTemperature"(arg0: $FluidState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): integer
public "getTemperature"(arg0: $FluidStack$$Type): integer
public "getTemperature"(): integer
public "getViscosity"(): integer
public "getViscosity"(arg0: $FluidState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): integer
public "getViscosity"(arg0: $FluidStack$$Type): integer
public "isAir"(): boolean
public "getBucket"(arg0: $FluidStack$$Type): $ItemStack
public "canHydrate"(arg0: $FluidStack$$Type): boolean
public "canHydrate"(arg0: $FluidState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockPos$$Type): boolean
public "canHydrate"(arg0: $Entity$$Type): boolean
public "getSound"(arg0: $Entity$$Type, arg1: $SoundAction$$Type): $SoundEvent
public "getSound"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $SoundAction$$Type): $SoundEvent
public "getSound"(arg0: $SoundAction$$Type): $SoundEvent
public "getSound"(arg0: $FluidStack$$Type, arg1: $SoundAction$$Type): $SoundEvent
public "canDrownIn"(arg0: $LivingEntity$$Type): boolean
public "canSwim"(arg0: $Entity$$Type): boolean
public "onVaporize"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $FluidStack$$Type): void
public "getDensity"(arg0: $FluidStack$$Type): integer
public "getDensity"(arg0: $FluidState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): integer
public "getDensity"(): integer
public "getRarity"(): $Rarity
public "getRarity"(arg0: $FluidStack$$Type): $Rarity
public "getDescriptionId"(): StringJS
public "getDescriptionId"(arg0: $FluidStack$$Type): StringJS
public "isVanilla"(): boolean
public "getFallDistanceModifier"(arg0: $Entity$$Type): float
public "canRideVehicleUnder"(arg0: $Entity$$Type, arg1: $Entity$$Type): boolean
public "canPushEntity"(arg0: $Entity$$Type): boolean
public "motionScale"(arg0: $Entity$$Type): double
public "canExtinguish"(arg0: $FluidState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
public "canExtinguish"(arg0: $Entity$$Type): boolean
get "description"(): $Component
get "lightLevel"(): integer
set "itemMovement"(value: $ItemEntity$$Type)
get "lighterThanAir"(): boolean
get "dripInfo"(): $FluidType$DripstoneDripInfo
get "temperature"(): integer
get "viscosity"(): integer
get "air"(): boolean
get "density"(): integer
get "rarity"(): $Rarity
get "descriptionId"(): StringJS
get "vanilla"(): boolean
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.NeoforgeFluidType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.NeoforgeFluidTypeTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidType$$Type = (Special.NeoforgeFluidType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidType$$Original = $FluidType;}
declare module "net.neoforged.neoforge.fluids.RegisterCauldronFluidContentEvent" {
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Event} from "net.neoforged.bus.api.Event"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"

export class $RegisterCauldronFluidContentEvent extends $Event implements $IModBusEvent$$Interface {
public "register"(arg0: $Block$$Type, arg1: $Fluid$$Type, arg2: integer, arg3: $IntegerProperty$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterCauldronFluidContentEvent$$Type = ($RegisterCauldronFluidContentEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterCauldronFluidContentEvent$$Original = $RegisterCauldronFluidContentEvent;}
declare module "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties" {
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$LiquidBlock$$Type} from "net.minecraft.world.level.block.LiquidBlock"

export class $BaseFlowingFluid$Properties {
constructor(arg0: $Supplier$$Type<($FluidType$$Type)>, arg1: $Supplier$$Type<($Fluid$$Type)>, arg2: $Supplier$$Type<($Fluid$$Type)>)

public "block"(arg0: $Supplier$$Type<($LiquidBlock$$Type)>): $BaseFlowingFluid$Properties
public "tickRate"(arg0: integer): $BaseFlowingFluid$Properties
public "explosionResistance"(arg0: float): $BaseFlowingFluid$Properties
public "bucket"(arg0: $Supplier$$Type<($Item$$Type)>): $BaseFlowingFluid$Properties
public "levelDecreasePerBlock"(arg0: integer): $BaseFlowingFluid$Properties
public "slopeFindDistance"(arg0: integer): $BaseFlowingFluid$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseFlowingFluid$Properties$$Type = ($BaseFlowingFluid$Properties);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseFlowingFluid$Properties$$Original = $BaseFlowingFluid$Properties;}
declare module "net.neoforged.neoforge.fluids.crafting.SizedFluidIngredient" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$RecipeScriptContext$$Type} from "dev.latvian.mods.kubejs.recipe.RecipeScriptContext"
import {$JsonElement} from "com.google.gson.JsonElement"
import {$SizedFluidIngredientKJS$$Interface} from "dev.latvian.mods.kubejs.core.SizedFluidIngredientKJS"
import {$RecipeMatchContext$$Type} from "dev.latvian.mods.kubejs.recipe.filter.RecipeMatchContext"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$FluidIngredient, $FluidIngredient$$Type} from "net.neoforged.neoforge.fluids.crafting.FluidIngredient"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"

export class $SizedFluidIngredient implements $SizedFluidIngredientKJS$$Interface {
static readonly "NESTED_CODEC": $Codec<($SizedFluidIngredient)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($SizedFluidIngredient)>
static readonly "FLAT_CODEC": $Codec<($SizedFluidIngredient)>

constructor(arg0: $FluidIngredient$$Type, arg1: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: $FluidStack$$Type): boolean
public static "of"(arg0: $Fluid$$Type, arg1: integer): $SizedFluidIngredient
public static "of"(arg0: $TagKey$$Type<($Fluid)>, arg1: integer): $SizedFluidIngredient
public static "of"(arg0: $FluidStack$$Type): $SizedFluidIngredient
public "amount"(): integer
public "ingredient"(): $FluidIngredient
public "getFluids"(): ($FluidStack)[]
public "matches"(cx: $RecipeMatchContext$$Type, s: $FluidStack$$Type, exact: boolean): boolean
public "matches"(cx: $RecipeMatchContext$$Type, arg1: $FluidIngredient$$Type, exact: boolean): boolean
public "replaceThisWith"(cx: $RecipeScriptContext$$Type, arg1: any): any
public "self"(): $SizedFluidIngredient
public "toFlatJson"(): $JsonElement
public "toNestedJson"(): $JsonElement
public static "wrap"(o: any): $ReplacementMatch
get "fluids"(): ($FluidStack)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SizedFluidIngredient$$Type = ($SizedFluidIngredient);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SizedFluidIngredient$$Original = $SizedFluidIngredient;}
