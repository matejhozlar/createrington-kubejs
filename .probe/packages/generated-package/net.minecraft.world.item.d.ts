declare module "net.minecraft.world.item.crafting.SingleRecipeInput" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Interface} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List} from "java.util.List"
import {$SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$Record} from "java.lang.Record"

export class $SingleRecipeInput extends $Record implements $RecipeInput$$Interface {
constructor(arg0: $ItemStack$$Type)

public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "item"(): $ItemStack
public "getItem"(arg0: integer): $ItemStack
public "isEmpty"(): boolean
public "find"(filter: $SlotFilter$$Type): $ItemStack
public "find"(filter: $SlotFilter$$Type, skip: integer): $ItemStack
public "self"(): $RecipeInput
public "findAll"(filter: $SlotFilter$$Type): $List<($ItemStack)>
public "findAll"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleRecipeInput$$Type = ({"item"?: $ItemStack$$Type}) | ([item?: $ItemStack$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SingleRecipeInput$$Original = $SingleRecipeInput;}
declare module "net.minecraft.world.item.component.ItemAttributeModifiers" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$ItemAttributeModifiers$Entry, $ItemAttributeModifiers$Entry$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers$Entry"
import {$EquipmentSlotGroup$$Type} from "net.minecraft.world.entity.EquipmentSlotGroup"
import {$List, $List$$Type} from "java.util.List"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$DecimalFormat} from "java.text.DecimalFormat"
import {$ItemAttributeModifiers$Builder} from "net.minecraft.world.item.component.ItemAttributeModifiers$Builder"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Record} from "java.lang.Record"

export class $ItemAttributeModifiers extends $Record {
static readonly "CODEC": $Codec<($ItemAttributeModifiers)>
static readonly "ATTRIBUTE_MODIFIER_FORMAT": $DecimalFormat
static readonly "EMPTY": $ItemAttributeModifiers
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ItemAttributeModifiers)>

constructor(arg0: $List$$Type<($ItemAttributeModifiers$Entry$$Type)>, arg1: boolean)

public "modifiers"(): $List<($ItemAttributeModifiers$Entry)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "builder"(): $ItemAttributeModifiers$Builder
public "compute"(arg0: double, arg1: $EquipmentSlot$$Type): double
public "forEach"(arg0: $EquipmentSlot$$Type, arg1: $BiConsumer$$Type<($Holder<($Attribute)>), ($AttributeModifier)>): void
public "forEach"(arg0: $EquipmentSlotGroup$$Type, arg1: $BiConsumer$$Type<($Holder<($Attribute)>), ($AttributeModifier)>): void
public "withTooltip"(arg0: boolean): $ItemAttributeModifiers
public "showInTooltip"(): boolean
public "withModifierAdded"(arg0: $Holder$$Type<($Attribute)>, arg1: $AttributeModifier$$Type, arg2: $EquipmentSlotGroup$$Type): $ItemAttributeModifiers
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemAttributeModifiers$$Type = ({"modifiers"?: $List$$Type<($ItemAttributeModifiers$Entry$$Type)>, "showInTooltip"?: boolean}) | ([modifiers?: $List$$Type<($ItemAttributeModifiers$Entry$$Type)>, showInTooltip?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemAttributeModifiers$$Original = $ItemAttributeModifiers;}
declare module "net.minecraft.world.item.enchantment.Enchantment$Cost" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$Record} from "java.lang.Record"

export class $Enchantment$Cost extends $Record {
static readonly "CODEC": $Codec<($Enchantment$Cost)>

constructor(base: integer, perLevelAboveFirst: integer)

public "perLevelAboveFirst"(): integer
public "base"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "calculate"(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Enchantment$Cost$$Type = ({"base"?: integer, "perLevelAboveFirst"?: integer}) | ([base?: integer, perLevelAboveFirst?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Enchantment$Cost$$Original = $Enchantment$Cost;}
declare module "net.minecraft.world.item.enchantment.LevelBasedValue$Lookup" {
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$List, $List$$Type} from "java.util.List"
import {$LevelBasedValue, $LevelBasedValue$$Type, $LevelBasedValue$$Interface} from "net.minecraft.world.item.enchantment.LevelBasedValue"
import {$LevelBasedValue$Linear} from "net.minecraft.world.item.enchantment.LevelBasedValue$Linear"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"
import {$LevelBasedValue$Constant} from "net.minecraft.world.item.enchantment.LevelBasedValue$Constant"

export class $LevelBasedValue$Lookup extends $Record implements $LevelBasedValue$$Interface {
static readonly "CODEC": $MapCodec<($LevelBasedValue$Lookup)>

constructor(arg0: $List$$Type<(float)>, arg1: $LevelBasedValue$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "values"(): $List<(float)>
public "hashCode"(): integer
public "fallback"(): $LevelBasedValue
public "calculate"(arg0: integer): float
public "codec"(): $MapCodec<($LevelBasedValue$Lookup)>
public static "lookup"(arg0: $List$$Type<(float)>, arg1: $LevelBasedValue$$Type): $LevelBasedValue$Lookup
public static "constant"(arg0: float): $LevelBasedValue$Constant
public static "bootstrap"(arg0: $Registry$$Type<($MapCodec$$Type<($LevelBasedValue$$Type)>)>): $MapCodec<($LevelBasedValue)>
public static "perLevel"(arg0: float, arg1: float): $LevelBasedValue$Linear
public static "perLevel"(arg0: float): $LevelBasedValue$Linear
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelBasedValue$Lookup$$Type = ({"values"?: $List$$Type<(float)>, "fallback"?: $LevelBasedValue$$Type}) | ([values?: $List$$Type<(float)>, fallback?: $LevelBasedValue$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LevelBasedValue$Lookup$$Original = $LevelBasedValue$Lookup;}
declare module "net.minecraft.world.item.Item$Properties" {
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$FeatureFlag$$Type} from "net.minecraft.world.flag.FeatureFlag"
import {$ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$FabricItem$Settings$$Interface} from "net.fabricmc.fabric.api.item.v1.FabricItem$Settings"
import {$Rarity$$Type} from "net.minecraft.world.item.Rarity"
import {$JukeboxSong$$Type} from "net.minecraft.world.item.JukeboxSong"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$FoodProperties$$Type} from "net.minecraft.world.food.FoodProperties"
import {$IItemPropertiesExtensions$$Interface} from "net.neoforged.neoforge.common.extensions.IItemPropertiesExtensions"
import {$DeferredSupplier, $DeferredSupplier$$Type} from "dev.architectury.registry.registries.DeferredSupplier"
import {$EquipmentSlotProvider$$Type} from "net.fabricmc.fabric.api.item.v1.EquipmentSlotProvider"
import {$ItemPropertiesExtensionImpl$$Interface} from "dev.architectury.impl.ItemPropertiesExtensionImpl"
import {$Interner} from "com.google.common.collect.Interner"
import {$CreativeModeTab, $CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$InjectedItemPropertiesExtension$$Interface} from "dev.architectury.extensions.injected.InjectedItemPropertiesExtension"
import {$CustomDamageHandler$$Type} from "net.fabricmc.fabric.api.item.v1.CustomDamageHandler"

export class $Item$Properties implements $IItemPropertiesExtensions$$Interface, $FabricItem$Settings$$Interface, $InjectedItemPropertiesExtension$$Interface, $ItemPropertiesExtensionImpl$$Interface {
static readonly "COMPONENT_INTERNER": $Interner<($DataComponentMap)>

constructor()

public "component"<T>(arg0: $DataComponentType$$Type<(T)>, arg1: T): $Item$Properties
public "attributes"(arg0: $ItemAttributeModifiers$$Type): $Item$Properties
public "rarity"(arg0: $Rarity$$Type): $Item$Properties
public "arch$getTab"(): $CreativeModeTab
public "arch$getTabSupplier"(): $DeferredSupplier
public "durability"(arg0: integer): $Item$Properties
public "craftRemainder"(arg0: $Item$$Type): $Item$Properties
public "stacksTo"(arg0: integer): $Item$Properties
public "food"(arg0: $FoodProperties$$Type): $Item$Properties
public "jukeboxPlayable"(arg0: $ResourceKey$$Type<($JukeboxSong)>): $Item$Properties
public "setNoRepair"(): $Item$Properties
public "arch$tab"(tab: $ResourceKey$$Type): $Item$Properties
public "arch$tab"(tab: $DeferredSupplier$$Type): $Item$Properties
public "arch$tab"(tab: $CreativeModeTab$$Type): $Item$Properties
public "requiredFeatures"(...arg0: ($FeatureFlag$$Type)[]): $Item$Properties
public "fireResistant"(): $Item$Properties
public static "validateComponents"(arg0: $DataComponentMap$$Type): $DataComponentMap
public "component"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: T): $Item$Properties
public "customDamage"(arg0: $CustomDamageHandler$$Type): $Item$Properties
public "equipmentSlot"(arg0: $EquipmentSlotProvider$$Type): $Item$Properties
get "noRepair"(): $Item$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Item$Properties$$Type = ($Item$Properties);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Item$Properties$$Original = $Item$Properties;}
declare module "net.minecraft.world.item.armortrim.ArmorTrim" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$TrimMaterial, $TrimMaterial$$Type} from "net.minecraft.world.item.armortrim.TrimMaterial"
import {$ArmorMaterial$$Type} from "net.minecraft.world.item.ArmorMaterial"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TrimPattern, $TrimPattern$$Type} from "net.minecraft.world.item.armortrim.TrimPattern"
import {$TooltipProvider$$Interface} from "net.minecraft.world.item.component.TooltipProvider"

export class $ArmorTrim implements $TooltipProvider$$Interface {
static readonly "CODEC": $Codec<($ArmorTrim)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ArmorTrim)>

constructor(arg0: $Holder$$Type<($TrimMaterial)>, arg1: $Holder$$Type<($TrimPattern)>)
constructor(arg0: $Holder$$Type<($TrimMaterial)>, arg1: $Holder$$Type<($TrimPattern)>, arg2: boolean)

public "innerTexture"(arg0: $Holder$$Type<($ArmorMaterial)>): $ResourceLocation
public "outerTexture"(arg0: $Holder$$Type<($ArmorMaterial)>): $ResourceLocation
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "pattern"(): $Holder<($TrimPattern)>
public "hasPatternAndMaterial"(arg0: $Holder$$Type<($TrimPattern)>, arg1: $Holder$$Type<($TrimMaterial)>): boolean
public "withTooltip"(arg0: boolean): $ArmorTrim
public "material"(): $Holder<($TrimMaterial)>
public "addToTooltip"(arg0: $Item$TooltipContext$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmorTrim$$Type = ($ArmorTrim);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArmorTrim$$Original = $ArmorTrim;}
declare module "net.minecraft.world.item.enchantment.effects.EnchantmentAttributeEffect" {
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$LevelBasedValue, $LevelBasedValue$$Type} from "net.minecraft.world.item.enchantment.LevelBasedValue"
import {$StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$EnchantmentLocationBasedEffect, $EnchantmentLocationBasedEffect$$Type, $EnchantmentLocationBasedEffect$$Interface} from "net.minecraft.world.item.enchantment.effects.EnchantmentLocationBasedEffect"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnchantedItemInUse$$Type} from "net.minecraft.world.item.enchantment.EnchantedItemInUse"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"

export class $EnchantmentAttributeEffect extends $Record implements $EnchantmentLocationBasedEffect$$Interface {
static readonly "CODEC": $MapCodec<($EnchantmentAttributeEffect)>

constructor(arg0: $ResourceLocation$$Type, arg1: $Holder$$Type<($Attribute)>, arg2: $LevelBasedValue$$Type, arg3: $AttributeModifier$Operation$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): $ResourceLocation
public "attribute"(): $Holder<($Attribute)>
public "amount"(): $LevelBasedValue
public "operation"(): $AttributeModifier$Operation
public "codec"(): $MapCodec<($EnchantmentAttributeEffect)>
public "onChangedBlock"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $EnchantedItemInUse$$Type, arg3: $Entity$$Type, arg4: $Vec3$$Type, arg5: boolean): void
public "getModifier"(arg0: integer, arg1: $StringRepresentable$$Type): $AttributeModifier
public "onDeactivated"(arg0: $EnchantedItemInUse$$Type, arg1: $Entity$$Type, arg2: $Vec3$$Type, arg3: integer): void
public static "bootstrap"(arg0: $Registry$$Type<($MapCodec$$Type<($EnchantmentLocationBasedEffect$$Type)>)>): $MapCodec<($EnchantmentLocationBasedEffect)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentAttributeEffect$$Type = ({"operation"?: $AttributeModifier$Operation$$Type, "amount"?: $LevelBasedValue$$Type, "id"?: $ResourceLocation$$Type, "attribute"?: $Holder$$Type<($Attribute)>}) | ([operation?: $AttributeModifier$Operation$$Type, amount?: $LevelBasedValue$$Type, id?: $ResourceLocation$$Type, attribute?: $Holder$$Type<($Attribute)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantmentAttributeEffect$$Original = $EnchantmentAttributeEffect;}
declare module "net.minecraft.world.item.crafting.SmeltingRecipe" {
import {$CookingBookCategory$$Type} from "net.minecraft.world.item.crafting.CookingBookCategory"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$AbstractCookingRecipe} from "net.minecraft.world.item.crafting.AbstractCookingRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $SmeltingRecipe extends $AbstractCookingRecipe {
constructor(arg0: StringJS, arg1: $CookingBookCategory$$Type, arg2: $Ingredient$$Type, arg3: $ItemStack$$Type, arg4: float, arg5: integer)

public "getSerializer"(): $RecipeSerializer<(never)>
public "getToastSymbol"(): $ItemStack
get "serializer"(): $RecipeSerializer<(never)>
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmeltingRecipe$$Type = ($SmeltingRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmeltingRecipe$$Original = $SmeltingRecipe;}
declare module "net.minecraft.world.item.component.TooltipProvider" {
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $TooltipProvider$$Interface {

(arg0: $Item$TooltipContext, arg1: $Consumer<($Component)>, arg2: $TooltipFlag): void
}

export class $TooltipProvider implements $TooltipProvider$$Interface {
 "addToTooltip"(arg0: $Item$TooltipContext$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TooltipProvider$$Type = ((arg0: $Item$TooltipContext, arg1: $Consumer<($Component)>, arg2: $TooltipFlag) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TooltipProvider$$Original = $TooltipProvider;}
declare module "net.minecraft.world.item.context.BlockPlaceContext" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $BlockPlaceContext extends $UseOnContext {
constructor(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $ItemStack$$Type, arg3: $BlockHitResult$$Type)
constructor(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type, arg4: $BlockHitResult$$Type)
constructor(arg0: $UseOnContext$$Type)

public "getNearestLookingDirection"(): $Direction
public "replacingClickedOnBlock"(): boolean
public "getNearestLookingDirections"(): ($Direction)[]
public "getNearestLookingVerticalDirection"(): $Direction
public static "at"(arg0: $BlockPlaceContext$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): $BlockPlaceContext
public "canPlace"(): boolean
public "getClickedPos"(): $BlockPos
get "nearestLookingDirection"(): $Direction
get "nearestLookingDirections"(): ($Direction)[]
get "nearestLookingVerticalDirection"(): $Direction
get "clickedPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPlaceContext$$Type = ($BlockPlaceContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockPlaceContext$$Original = $BlockPlaceContext;}
declare module "net.minecraft.world.item.trading.MerchantOffers" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ArrayList} from "java.util.ArrayList"
import {$Collection$$Type} from "java.util.Collection"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MerchantOffer} from "net.minecraft.world.item.trading.MerchantOffer"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$SequencedCollection} from "java.util.SequencedCollection"
import {$List} from "java.util.List"

export class $MerchantOffers extends $ArrayList<($MerchantOffer)> {
static readonly "CODEC": $Codec<($MerchantOffers)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($MerchantOffers)>

constructor()

public "getRecipeFor"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: integer): $MerchantOffer
public "copy"(): $MerchantOffers
public static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public "reversed"(): $SequencedCollection
public "containsAll"(arg0: $Collection$$Type<(never)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MerchantOffers$$Type = ($MerchantOffers);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MerchantOffers$$Original = $MerchantOffers;}
declare module "net.minecraft.world.item.component.SuspiciousStewEffects" {
import {$SuspiciousStewEffects$Entry, $SuspiciousStewEffects$Entry$$Type} from "net.minecraft.world.item.component.SuspiciousStewEffects$Entry"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$Record} from "java.lang.Record"

export class $SuspiciousStewEffects extends $Record {
static readonly "CODEC": $Codec<($SuspiciousStewEffects)>
static readonly "EMPTY": $SuspiciousStewEffects
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($SuspiciousStewEffects)>

constructor(arg0: $List$$Type<($SuspiciousStewEffects$Entry$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "withEffectAdded"(arg0: $SuspiciousStewEffects$Entry$$Type): $SuspiciousStewEffects
public "effects"(): $List<($SuspiciousStewEffects$Entry)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SuspiciousStewEffects$$Type = ({"effects"?: $List$$Type<($SuspiciousStewEffects$Entry$$Type)>}) | ([effects?: $List$$Type<($SuspiciousStewEffects$Entry$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SuspiciousStewEffects$$Original = $SuspiciousStewEffects;}
declare module "net.minecraft.world.item.component.FireworkExplosion$Shape" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$IExtensibleEnum$$Interface} from "net.neoforged.fml.common.asm.enumextension.IExtensibleEnum"
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Codec} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$ExtensionInfo} from "net.neoforged.fml.common.asm.enumextension.ExtensionInfo"

export class $FireworkExplosion$Shape extends $Enum<($FireworkExplosion$Shape)> implements $StringRepresentable$$Interface, $IExtensibleEnum$$Interface {
static readonly "SMALL_BALL": $FireworkExplosion$Shape
static readonly "LARGE_BALL": $FireworkExplosion$Shape
static readonly "CODEC": $Codec<($FireworkExplosion$Shape)>
static readonly "STAR": $FireworkExplosion$Shape
static readonly "CREEPER": $FireworkExplosion$Shape
static readonly "BURST": $FireworkExplosion$Shape
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($FireworkExplosion$Shape)>

public "getName"(): $MutableComponent
public static "values"(): ($FireworkExplosion$Shape)[]
public static "valueOf"(arg0: StringJS): $FireworkExplosion$Shape
public "getId"(): integer
public static "byId"(arg0: integer): $FireworkExplosion$Shape
public static "getExtensionInfo"(): $ExtensionInfo
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
get "name"(): $MutableComponent
get "id"(): integer
get "extensionInfo"(): $ExtensionInfo
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireworkExplosion$Shape$$Type = (("small_ball") | ("large_ball") | ("star") | ("creeper") | ("burst"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FireworkExplosion$Shape$$Original = $FireworkExplosion$Shape;}
declare module "net.minecraft.world.item.CreativeModeTab$Builder" {
import {$Collection$$Type} from "java.util.Collection"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$CreativeModeTab$Row$$Type} from "net.minecraft.world.item.CreativeModeTab$Row"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CreativeModeTab, $CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function$$Type} from "java.util.function.Function"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$CreativeModeTab$DisplayItemsGenerator$$Type} from "net.minecraft.world.item.CreativeModeTab$DisplayItemsGenerator"

export class $CreativeModeTab$Builder {
constructor(arg0: $CreativeModeTab$Row$$Type, arg1: integer)

public "build"(): $CreativeModeTab
public "withTabsImage"(arg0: $ResourceLocation$$Type): $CreativeModeTab$Builder
public "withSearchBar"(arg0: integer): $CreativeModeTab$Builder
public "withSearchBar"(): $CreativeModeTab$Builder
public "withTabsAfter"(...arg0: ($ResourceKey$$Type<($CreativeModeTab$$Type)>)[]): $CreativeModeTab$Builder
public "withTabsAfter"(...arg0: ($ResourceLocation$$Type)[]): $CreativeModeTab$Builder
public "withTabsBefore"(...arg0: ($ResourceKey$$Type<($CreativeModeTab$$Type)>)[]): $CreativeModeTab$Builder
public "withTabsBefore"(...arg0: ($ResourceLocation$$Type)[]): $CreativeModeTab$Builder
public "withTabFactory"(arg0: $Function$$Type<($CreativeModeTab$Builder), ($CreativeModeTab$$Type)>): $CreativeModeTab$Builder
public "withSlotColor"(arg0: integer): $CreativeModeTab$Builder
public "withLabelColor"(arg0: integer): $CreativeModeTab$Builder
public "title"(arg0: $Component$$Type): $CreativeModeTab$Builder
public "backgroundTexture"(arg0: $ResourceLocation$$Type): $CreativeModeTab$Builder
public "displayItems"(arg0: $Collection$$Type<($Holder$$Type<($ItemLike$$Type)>)>): $CreativeModeTab$Builder
public "displayItems"(arg0: $CreativeModeTab$DisplayItemsGenerator$$Type): $CreativeModeTab$Builder
public "noScrollBar"(): $CreativeModeTab$Builder
public "alignedRight"(): $CreativeModeTab$Builder
public "icon"(arg0: $Supplier$$Type<($ItemStack$$Type)>): $CreativeModeTab$Builder
public "hideTitle"(): $CreativeModeTab$Builder
public "withScrollBarSpriteLocation"(arg0: $ResourceLocation$$Type): $CreativeModeTab$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeModeTab$Builder$$Type = ($CreativeModeTab$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreativeModeTab$Builder$$Original = $CreativeModeTab$Builder;}
declare module "net.minecraft.world.item.component.BundleContents" {
import {$BundleContentsComponentAccessor$$Interface} from "net.fabricmc.fabric.mixin.transfer.BundleContentsComponentAccessor"
import {$Iterable} from "java.lang.Iterable"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IBundle$$Interface} from "com.blackgear.vanillabackport.common.api.bundle.IBundle"
import {$List$$Type} from "java.util.List"
import {$TooltipComponent$$Interface} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$BundleContentsAccessor$$Interface} from "com.blackgear.vanillabackport.core.mixin.access.BundleContentsAccessor"
import {$Fraction} from "org.apache.commons.lang3.math.Fraction"
import {$Stream} from "java.util.stream.Stream"

export class $BundleContents implements $TooltipComponent$$Interface, $BundleContentsAccessor$$Interface, $IBundle$$Interface, $BundleContentsComponentAccessor$$Interface {
static readonly "CODEC": $Codec<($BundleContents)>
static readonly "EMPTY": $BundleContents
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($BundleContents)>

constructor(arg0: $List$$Type<($ItemStack$$Type)>)

public "setSelectedItem"(index: integer): void
public "itemCopyStream"(): $Stream<($ItemStack)>
public "getSelectedItem"(): integer
public "getItemUnsafe"(arg0: integer): $ItemStack
public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public static "getOccupancy$fabric_transfer_api_v1_$md$d44d69$1"(arg0: $ItemStack$$Type): $Fraction
public "items"(): $Iterable<($ItemStack)>
public "getNumberOfItemsToShow"(): integer
public "weight"(): $Fraction
public static "callGetWeight$vanillabackport_$md$d44d69$0"(arg0: $ItemStack$$Type): $Fraction
public "itemsCopy"(): $Iterable<($ItemStack)>
public static "callGetWeight"(stack: $ItemStack$$Type): $Fraction
public static "getOccupancy"(arg0: $ItemStack$$Type): $Fraction
set "selectedItem"(value: integer)
get "selectedItem"(): integer
get "empty"(): boolean
get "numberOfItemsToShow"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BundleContents$$Type = ($BundleContents);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BundleContents$$Original = $BundleContents;}
declare module "net.minecraft.world.item.crafting.FireworkStarFadeRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$CustomRecipe} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $FireworkStarFadeRecipe extends $CustomRecipe {
constructor(arg0: $CraftingBookCategory$$Type)

public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireworkStarFadeRecipe$$Type = ($FireworkStarFadeRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FireworkStarFadeRecipe$$Original = $FireworkStarFadeRecipe;}
declare module "net.minecraft.world.item.ProjectileWeaponItem" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$AbstractArrow, $AbstractArrow$$Type} from "net.minecraft.world.entity.projectile.AbstractArrow"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Holder} from "net.minecraft.core.Holder"

export class $ProjectileWeaponItem extends $Item {
static readonly "ARROW_ONLY": $Predicate<($ItemStack)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "ARROW_OR_FIREWORK": $Predicate<($ItemStack)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getDefaultCreativeAmmo"(arg0: $Player$$Type, arg1: $ItemStack$$Type): $ItemStack
/**
 * 
 * @deprecated
 */
public "getAllSupportedProjectiles"(): $Predicate<($ItemStack)>
public "getAllSupportedProjectiles"(arg0: $ItemStack$$Type): $Predicate<($ItemStack)>
public "getEnchantmentValue"(): integer
public static "getHeldProjectile"(arg0: $LivingEntity$$Type, arg1: $Predicate$$Type<($ItemStack)>): $ItemStack
public "customArrow"(arg0: $AbstractArrow$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): $AbstractArrow
public "getSupportedHeldProjectiles"(arg0: $ItemStack$$Type): $Predicate<($ItemStack)>
/**
 * 
 * @deprecated
 */
public "getSupportedHeldProjectiles"(): $Predicate<($ItemStack)>
public "getDefaultProjectileRange"(): integer
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "allSupportedProjectiles"(): $Predicate<($ItemStack)>
get "enchantmentValue"(): integer
get "supportedHeldProjectiles"(): $Predicate<($ItemStack)>
get "defaultProjectileRange"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProjectileWeaponItem$$Type = ($ProjectileWeaponItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProjectileWeaponItem$$Original = $ProjectileWeaponItem;}
declare module "net.minecraft.world.item.crafting.FireworkStarRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$CustomRecipe} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $FireworkStarRecipe extends $CustomRecipe {
constructor(arg0: $CraftingBookCategory$$Type)

public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireworkStarRecipe$$Type = ($FireworkStarRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FireworkStarRecipe$$Original = $FireworkStarRecipe;}
declare module "net.minecraft.world.item.crafting.CraftingInput$Positioned" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$Record} from "java.lang.Record"

export class $CraftingInput$Positioned extends $Record {
static readonly "EMPTY": $CraftingInput$Positioned

constructor(arg0: $CraftingInput$$Type, arg1: integer, arg2: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "input"(): $CraftingInput
public "top"(): integer
public "left"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingInput$Positioned$$Type = ({"left"?: integer, "input"?: $CraftingInput$$Type, "top"?: integer}) | ([left?: integer, input?: $CraftingInput$$Type, top?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CraftingInput$Positioned$$Original = $CraftingInput$Positioned;}
declare module "net.minecraft.world.item.component.DyedItemColor" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Codec} from "com.mojang.serialization.Codec"
import {$DyeItem$$Type} from "net.minecraft.world.item.DyeItem"
import {$TooltipProvider$$Interface} from "net.minecraft.world.item.component.TooltipProvider"
import {$Record} from "java.lang.Record"

export class $DyedItemColor extends $Record implements $TooltipProvider$$Interface {
static readonly "CODEC": $Codec<($DyedItemColor)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($DyedItemColor)>
static readonly "LEATHER_COLOR": integer

constructor(arg0: integer, arg1: boolean)

public "rgb"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "getOrDefault"(arg0: $ItemStack$$Type, arg1: integer): integer
public "withTooltip"(arg0: boolean): $DyedItemColor
public static "applyDyes"(arg0: $ItemStack$$Type, arg1: $List$$Type<($DyeItem$$Type)>): $ItemStack
public "showInTooltip"(): boolean
public "addToTooltip"(arg0: $Item$TooltipContext$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DyedItemColor$$Type = ({"rgb"?: integer, "showInTooltip"?: boolean}) | ([rgb?: integer, showInTooltip?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DyedItemColor$$Original = $DyedItemColor;}
declare module "net.minecraft.world.item.CreativeModeTab$Row" {
import {$Enum} from "java.lang.Enum"

export class $CreativeModeTab$Row extends $Enum<($CreativeModeTab$Row)> {
static readonly "TOP": $CreativeModeTab$Row
static readonly "BOTTOM": $CreativeModeTab$Row

public static "values"(): ($CreativeModeTab$Row)[]
public static "valueOf"(arg0: StringJS): $CreativeModeTab$Row
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeModeTab$Row$$Type = (("top") | ("bottom"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreativeModeTab$Row$$Original = $CreativeModeTab$Row;}
declare module "net.minecraft.world.item.alchemy.PotionBrewing$Mix" {
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $PotionBrewing$Mix<T> extends $Record {
constructor(from: $Holder$$Type<(T)>, ingredient: $Ingredient$$Type, to: $Holder$$Type<(T)>)

public "ingredient"(): $Ingredient
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "from"(): $Holder<(T)>
public "to"(): $Holder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionBrewing$Mix$$Type<T> = ({"to"?: $Holder$$Type<(T)>, "ingredient"?: $Ingredient$$Type, "from"?: $Holder$$Type<(T)>}) | ([to?: $Holder$$Type<(T)>, ingredient?: $Ingredient$$Type, from?: $Holder$$Type<(T)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PotionBrewing$Mix$$Original<T> = $PotionBrewing$Mix<(T)>;}
declare module "net.minecraft.world.item.crafting.CraftingBookCategory" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$IntFunction} from "java.util.function.IntFunction"

export class $CraftingBookCategory extends $Enum<($CraftingBookCategory)> implements $StringRepresentable$$Interface {
static readonly "EQUIPMENT": $CraftingBookCategory
static readonly "CODEC": $Codec<($CraftingBookCategory)>
static readonly "BUILDING": $CraftingBookCategory
static readonly "REDSTONE": $CraftingBookCategory
static readonly "MISC": $CraftingBookCategory
static readonly "BY_ID": $IntFunction<($CraftingBookCategory)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($CraftingBookCategory)>

public static "values"(): ($CraftingBookCategory)[]
public static "valueOf"(arg0: StringJS): $CraftingBookCategory
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingBookCategory$$Type = (("building") | ("redstone") | ("equipment") | ("misc"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CraftingBookCategory$$Original = $CraftingBookCategory;}
declare module "net.minecraft.world.item.component.MapItemColor" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $MapItemColor extends $Record {
static readonly "CODEC": $Codec<($MapItemColor)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($MapItemColor)>
static readonly "DEFAULT": $MapItemColor

constructor(arg0: integer)

public "rgb"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapItemColor$$Type = ({"rgb"?: integer}) | ([rgb?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapItemColor$$Original = $MapItemColor;}
declare module "net.minecraft.world.item.crafting.ShapedRecipePattern" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$Map$$Type} from "java.util.Map"
import {$Optional$$Type} from "java.util.Optional"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$ShapedRecipePattern$Data$$Type} from "net.minecraft.world.item.crafting.ShapedRecipePattern$Data"
import {$List$$Type} from "java.util.List"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"

export class $ShapedRecipePattern {
static readonly "MAP_CODEC": $MapCodec<($ShapedRecipePattern)>
 "symmetrical": boolean
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ShapedRecipePattern)>

constructor(arg0: integer, arg1: integer, arg2: $NonNullList$$Type<($Ingredient$$Type)>, arg3: ($ShapedRecipePattern$Data$$Type)?)

public "matches"(arg0: $CraftingInput$$Type): boolean
public static "of"(arg0: $Map$$Type<(character), ($Ingredient$$Type)>, ...arg1: (StringJS)[]): $ShapedRecipePattern
public static "of"(arg0: $Map$$Type<(character), ($Ingredient$$Type)>, arg1: $List$$Type<(StringJS)>): $ShapedRecipePattern
public "width"(): integer
public "height"(): integer
public "ingredients"(): $NonNullList<($Ingredient)>
public static "getMaxHeight"(): integer
public static "getMaxWidth"(): integer
public static "setCraftingSize"(arg0: integer, arg1: integer): void
get "maxHeight"(): integer
get "maxWidth"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedRecipePattern$$Type = ($ShapedRecipePattern);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapedRecipePattern$$Original = $ShapedRecipePattern;}
declare module "net.minecraft.world.item.component.MapPostProcessing" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Enum} from "java.lang.Enum"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$IntFunction} from "java.util.function.IntFunction"

export class $MapPostProcessing extends $Enum<($MapPostProcessing)> {
static readonly "ID_MAP": $IntFunction<($MapPostProcessing)>
static readonly "LOCK": $MapPostProcessing
static readonly "SCALE": $MapPostProcessing
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($MapPostProcessing)>

public static "values"(): ($MapPostProcessing)[]
public static "valueOf"(arg0: StringJS): $MapPostProcessing
public "id"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapPostProcessing$$Type = (("lock") | ("scale"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapPostProcessing$$Original = $MapPostProcessing;}
declare module "net.minecraft.world.item.Rarity" {
import {$UnaryOperator} from "java.util.function.UnaryOperator"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Style} from "net.minecraft.network.chat.Style"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$IExtensibleEnum$$Interface} from "net.neoforged.fml.common.asm.enumextension.IExtensibleEnum"
import {$IntFunction} from "java.util.function.IntFunction"
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Codec} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$ExtensionInfo} from "net.neoforged.fml.common.asm.enumextension.ExtensionInfo"
import {$ChatFormatting} from "net.minecraft.ChatFormatting"

export class $Rarity extends $Enum<($Rarity)> implements $StringRepresentable$$Interface, $IExtensibleEnum$$Interface {
static readonly "CODEC": $Codec<($Rarity)>
static readonly "RARE": $Rarity
static readonly "EPIC": $Rarity
static readonly "UNCOMMON": $Rarity
static readonly "BY_ID": $IntFunction<($Rarity)>
static readonly "COMMON": $Rarity
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($Rarity)>

public static "values"(): ($Rarity)[]
public static "valueOf"(arg0: StringJS): $Rarity
/**
 * 
 * @deprecated
 */
public "color"(): $ChatFormatting
public static "getExtensionInfo"(): $ExtensionInfo
public "getSerializedName"(): StringJS
public "getStyleModifier"(): $UnaryOperator<($Style)>
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
get "extensionInfo"(): $ExtensionInfo
get "serializedName"(): StringJS
get "styleModifier"(): $UnaryOperator<($Style)>
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Rarity$$Type = (("common") | ("uncommon") | ("rare") | ("epic"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Rarity$$Original = $Rarity;}
declare module "net.minecraft.world.item.component.Unbreakable" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$TooltipProvider$$Interface} from "net.minecraft.world.item.component.TooltipProvider"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $Unbreakable extends $Record implements $TooltipProvider$$Interface {
static readonly "CODEC": $Codec<($Unbreakable)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($Unbreakable)>

constructor(arg0: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "withTooltip"(arg0: boolean): $Unbreakable
public "showInTooltip"(): boolean
public "addToTooltip"(arg0: $Item$TooltipContext$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Unbreakable$$Type = ({"showInTooltip"?: boolean}) | ([showInTooltip?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Unbreakable$$Original = $Unbreakable;}
declare module "net.minecraft.world.item.Tier" {
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Tool} from "net.minecraft.world.item.component.Tool"

export interface $Tier$$Interface {
get "speed"(): float
get "attackDamageBonus"(): float
get "enchantmentValue"(): integer
get "uses"(): integer
get "repairIngredient"(): $Ingredient
get "incorrectBlocksForDrops"(): $TagKey<($Block)>
}

export class $Tier implements $Tier$$Interface {
 "getSpeed"(): float
 "getAttackDamageBonus"(): float
 "getEnchantmentValue"(): integer
 "getUses"(): integer
 "createToolProperties"(arg0: $TagKey$$Type<($Block)>): $Tool
 "getRepairIngredient"(): $Ingredient
 "getIncorrectBlocksForDrops"(): $TagKey<($Block)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Tier$$Type = (StringJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Tier$$Original = $Tier;}
declare module "net.minecraft.world.item.enchantment.TargetedConditionalEffect" {
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$EnchantmentTarget, $EnchantmentTarget$$Type} from "net.minecraft.world.item.enchantment.EnchantmentTarget"
import {$LootItemCondition, $LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"
import {$LootContextParamSet$$Type} from "net.minecraft.world.level.storage.loot.parameters.LootContextParamSet"
import {$Record} from "java.lang.Record"

export class $TargetedConditionalEffect<T> extends $Record {
constructor(arg0: $EnchantmentTarget$$Type, arg1: $EnchantmentTarget$$Type, arg2: T, arg3: ($LootItemCondition$$Type)?)

public "effect"(): T
public "requirements"(): $Optional<($LootItemCondition)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $LootContext$$Type): boolean
public static "equipmentDropsCodec"<S>(arg0: $Codec$$Type<(S)>, arg1: $LootContextParamSet$$Type): $Codec<($TargetedConditionalEffect<(S)>)>
public static "codec"<S>(arg0: $Codec$$Type<(S)>, arg1: $LootContextParamSet$$Type): $Codec<($TargetedConditionalEffect<(S)>)>
public "enchanted"(): $EnchantmentTarget
public "affected"(): $EnchantmentTarget
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TargetedConditionalEffect$$Type<T> = ({"requirements"?: ($LootItemCondition$$Type)?, "enchanted"?: $EnchantmentTarget$$Type, "effect"?: T, "affected"?: $EnchantmentTarget$$Type}) | ([requirements?: ($LootItemCondition$$Type)?, enchanted?: $EnchantmentTarget$$Type, effect?: T, affected?: $EnchantmentTarget$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TargetedConditionalEffect$$Original<T> = $TargetedConditionalEffect<(T)>;}
declare module "net.minecraft.world.item.crafting.ShulkerBoxColoring" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$CustomRecipe} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $ShulkerBoxColoring extends $CustomRecipe {
constructor(arg0: $CraftingBookCategory$$Type)

public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShulkerBoxColoring$$Type = ($ShulkerBoxColoring);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShulkerBoxColoring$$Original = $ShulkerBoxColoring;}
declare module "net.minecraft.world.item.ArmorMaterial" {
import {$ArmorMaterial$Layer, $ArmorMaterial$Layer$$Type} from "net.minecraft.world.item.ArmorMaterial$Layer"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$List, $List$$Type} from "java.util.List"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$ArmorItem$Type, $ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $ArmorMaterial extends $Record {
static readonly "CODEC": $Codec<($Holder<($ArmorMaterial)>)>

constructor(arg0: $Map$$Type<($ArmorItem$Type$$Type), (integer)>, arg1: integer, arg2: $Holder$$Type<($SoundEvent)>, arg3: $Supplier$$Type<($Ingredient$$Type)>, arg4: $List$$Type<($ArmorMaterial$Layer$$Type)>, arg5: float, arg6: float)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "layers"(): $List<($ArmorMaterial$Layer)>
public "getDefense"(arg0: $ArmorItem$Type$$Type): integer
public "enchantmentValue"(): integer
public "repairIngredient"(): $Supplier<($Ingredient)>
public "toughness"(): float
public "equipSound"(): $Holder<($SoundEvent)>
public "defense"(): $Map<($ArmorItem$Type), (integer)>
public "knockbackResistance"(): float
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.ArmorMaterial
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.ArmorMaterialTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmorMaterial$$Type = (Special.ArmorMaterial) | (StringJS) | ({"enchantmentValue"?: integer, "equipSound"?: $Holder$$Type<($SoundEvent)>, "repairIngredient"?: $Supplier$$Type<($Ingredient$$Type)>, "knockbackResistance"?: float, "layers"?: $List$$Type<($ArmorMaterial$Layer$$Type)>, "toughness"?: float, "defense"?: $Map$$Type<($ArmorItem$Type$$Type), (integer)>}) | ([enchantmentValue?: integer, equipSound?: $Holder$$Type<($SoundEvent)>, repairIngredient?: $Supplier$$Type<($Ingredient$$Type)>, knockbackResistance?: float, layers?: $List$$Type<($ArmorMaterial$Layer$$Type)>, toughness?: float, defense?: $Map$$Type<($ArmorItem$Type$$Type), (integer)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArmorMaterial$$Original = $ArmorMaterial;}
declare module "net.minecraft.world.item.component.CustomData" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Predicate} from "java.util.function.Predicate"
import {$DataResult} from "com.mojang.serialization.DataResult"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$MapDecoder$$Type} from "com.mojang.serialization.MapDecoder"
import {$Codec} from "com.mojang.serialization.Codec"
import {$MapEncoder$$Type} from "com.mojang.serialization.MapEncoder"
import {$Tag$$Type} from "net.minecraft.nbt.Tag"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $CustomData {
static readonly "CODEC": $Codec<($CustomData)>
static readonly "CODEC_WITH_ID": $Codec<($CustomData)>
static readonly "EMPTY": $CustomData
/**
 * 
 * @deprecated
 */
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($CustomData)>

public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "update"<T>(arg0: $DynamicOps$$Type<($Tag$$Type)>, arg1: $MapEncoder$$Type<(T)>, arg2: T): $DataResult<($CustomData)>
public "update"(arg0: $Consumer$$Type<($CompoundTag)>): $CustomData
public static "update"(arg0: $DataComponentType$$Type<($CustomData$$Type)>, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($CompoundTag)>): void
public "isEmpty"(): boolean
public static "of"(arg0: $CompoundTag$$Type): $CustomData
public "contains"(arg0: StringJS): boolean
/**
 * 
 * @deprecated
 */
public "getUnsafe"(): $CompoundTag
public static "set"(arg0: $DataComponentType$$Type<($CustomData$$Type)>, arg1: $ItemStack$$Type, arg2: $CompoundTag$$Type): void
public "read"<T>(arg0: $MapDecoder$$Type<(T)>): $DataResult<(T)>
public "read"<T>(arg0: $DynamicOps$$Type<($Tag$$Type)>, arg1: $MapDecoder$$Type<(T)>): $DataResult<(T)>
public "loadInto"(arg0: $Entity$$Type): void
public "loadInto"(arg0: $BlockEntity$$Type, arg1: $HolderLookup$Provider$$Type): boolean
public "copyTag"(): $CompoundTag
public static "itemMatcher"(arg0: $DataComponentType$$Type<($CustomData$$Type)>, arg1: $CompoundTag$$Type): $Predicate<($ItemStack)>
public "matchedBy"(arg0: $CompoundTag$$Type): boolean
get "empty"(): boolean
get "unsafe"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomData$$Type = ($CustomData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomData$$Original = $CustomData;}
declare module "net.minecraft.world.item.component.BookContent" {
import {$Filterable, $Filterable$$Type} from "net.minecraft.server.network.Filterable"
import {$List, $List$$Type} from "java.util.List"

export interface $BookContent$$Interface<T, C> {
}

export class $BookContent<T, C> implements $BookContent$$Interface {
 "withReplacedPages"(arg0: $List$$Type<($Filterable$$Type<(T)>)>): C
 "pages"(): $List<($Filterable<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookContent$$Type<T, C> = ($BookContent<(T), (C)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BookContent$$Original<T, C> = $BookContent<(T), (C)>;}
declare module "net.minecraft.world.item.crafting.ShapelessRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CraftingBookCategory, $CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$CraftingRecipe$$Interface} from "net.minecraft.world.item.crafting.CraftingRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $ShapelessRecipe implements $CraftingRecipe$$Interface {
readonly "result": $ItemStack
readonly "ingredients": $NonNullList<($Ingredient)>
readonly "group": StringJS

constructor(arg0: StringJS, arg1: $CraftingBookCategory$$Type, arg2: $ItemStack$$Type, arg3: $NonNullList$$Type<($Ingredient$$Type)>)

public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "category"(): $CraftingBookCategory
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getGroup"(): StringJS
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getType"(): $RecipeType<(never)>
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
public "isSpecial"(): boolean
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
public "showNotification"(): boolean
get "serializer"(): $RecipeSerializer<(never)>
get "type"(): $RecipeType<(never)>
get "special"(): boolean
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapelessRecipe$$Type = ($ShapelessRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapelessRecipe$$Original = $ShapelessRecipe;}
declare module "net.minecraft.world.item.ItemDisplayContext" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$ExtensionInfo} from "net.neoforged.fml.common.asm.enumextension.ExtensionInfo"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$IExtensibleEnum$$Interface} from "net.neoforged.fml.common.asm.enumextension.IExtensibleEnum"
import {$IntFunction} from "java.util.function.IntFunction"

export class $ItemDisplayContext extends $Enum<($ItemDisplayContext)> implements $StringRepresentable$$Interface, $IExtensibleEnum$$Interface {
static readonly "HEAD": $ItemDisplayContext
static readonly "CODEC": $Codec<($ItemDisplayContext)>
static readonly "THIRD_PERSON_LEFT_HAND": $ItemDisplayContext
static readonly "THIRD_PERSON_RIGHT_HAND": $ItemDisplayContext
static readonly "FIRST_PERSON_RIGHT_HAND": $ItemDisplayContext
static readonly "GROUND": $ItemDisplayContext
static readonly "FIRST_PERSON_LEFT_HAND": $ItemDisplayContext
static readonly "FIXED": $ItemDisplayContext
static readonly "BY_ID": $IntFunction<($ItemDisplayContext)>
static readonly "GUI": $ItemDisplayContext
static readonly "NONE": $ItemDisplayContext

public static "values"(): ($ItemDisplayContext)[]
public static "valueOf"(arg0: StringJS): $ItemDisplayContext
public "getId"(): byte
public "fallback"(): $ItemDisplayContext
public static "getExtensionInfo"(): $ExtensionInfo
public "isModded"(): boolean
public "getSerializedName"(): StringJS
public "firstPerson"(): boolean
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
get "id"(): byte
get "extensionInfo"(): $ExtensionInfo
get "modded"(): boolean
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDisplayContext$$Type = (("none") | ("thirdperson_lefthand") | ("thirdperson_righthand") | ("firstperson_lefthand") | ("firstperson_righthand") | ("head") | ("gui") | ("ground") | ("fixed"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemDisplayContext$$Original = $ItemDisplayContext;}
declare module "net.minecraft.world.item.crafting.AbstractCookingRecipe" {
import {$CookingBookCategory, $CookingBookCategory$$Type} from "net.minecraft.world.item.crafting.CookingBookCategory"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$SingleRecipeInput, $SingleRecipeInput$$Type} from "net.minecraft.world.item.crafting.SingleRecipeInput"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $AbstractCookingRecipe implements $Recipe$$Interface<($SingleRecipeInput)> {
constructor(arg0: $RecipeType$$Type<(never)>, arg1: StringJS, arg2: $CookingBookCategory$$Type, arg3: $Ingredient$$Type, arg4: $ItemStack$$Type, arg5: float, arg6: integer)

public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getExperience"(): float
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $SingleRecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(never)>
public "category"(): $CookingBookCategory
public "getCookingTime"(): integer
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $SingleRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getGroup"(): StringJS
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getSerializer"(): $RecipeSerializer<(never)>
public "getRemainingItems"(arg0: $SingleRecipeInput$$Type): $NonNullList<($ItemStack)>
public "isSpecial"(): boolean
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
public "showNotification"(): boolean
get "experience"(): float
get "type"(): $RecipeType<(never)>
get "cookingTime"(): integer
get "group"(): StringJS
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(never)>
get "special"(): boolean
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractCookingRecipe$$Type = ($AbstractCookingRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractCookingRecipe$$Original = $AbstractCookingRecipe;}
declare module "net.minecraft.world.item.enchantment.ConditionalEffect" {
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$LootItemCondition, $LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"
import {$LootContextParamSet$$Type} from "net.minecraft.world.level.storage.loot.parameters.LootContextParamSet"
import {$Record} from "java.lang.Record"

export class $ConditionalEffect<T> extends $Record {
constructor(arg0: T, arg1: ($LootItemCondition$$Type)?)

public "effect"(): T
public static "conditionCodec"(arg0: $LootContextParamSet$$Type): $Codec<($LootItemCondition)>
public "requirements"(): $Optional<($LootItemCondition)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $LootContext$$Type): boolean
public static "codec"<T>(arg0: $Codec$$Type<(T)>, arg1: $LootContextParamSet$$Type): $Codec<($ConditionalEffect<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConditionalEffect$$Type<T> = ({"requirements"?: ($LootItemCondition$$Type)?, "effect"?: T}) | ([requirements?: ($LootItemCondition$$Type)?, effect?: T]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConditionalEffect$$Original<T> = $ConditionalEffect<(T)>;}
declare module "net.minecraft.world.item.component.LodestoneTracker" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$GlobalPos, $GlobalPos$$Type} from "net.minecraft.core.GlobalPos"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $LodestoneTracker extends $Record {
static readonly "CODEC": $Codec<($LodestoneTracker)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($LodestoneTracker)>

constructor(arg0: ($GlobalPos$$Type)?, arg1: boolean)

public "equals"(arg0: any): boolean
public "target"(): $Optional<($GlobalPos)>
public "toString"(): StringJS
public "hashCode"(): integer
public "tick"(arg0: $ServerLevel$$Type): $LodestoneTracker
public "tracked"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneTracker$$Type = ({"target"?: ($GlobalPos$$Type)?, "tracked"?: boolean}) | ([target?: ($GlobalPos$$Type)?, tracked?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneTracker$$Original = $LodestoneTracker;}
declare module "net.minecraft.world.item.crafting.CampfireCookingRecipe" {
import {$CookingBookCategory$$Type} from "net.minecraft.world.item.crafting.CookingBookCategory"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$AbstractCookingRecipe} from "net.minecraft.world.item.crafting.AbstractCookingRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $CampfireCookingRecipe extends $AbstractCookingRecipe {
constructor(arg0: StringJS, arg1: $CookingBookCategory$$Type, arg2: $Ingredient$$Type, arg3: $ItemStack$$Type, arg4: float, arg5: integer)

public "getSerializer"(): $RecipeSerializer<(never)>
public "getToastSymbol"(): $ItemStack
get "serializer"(): $RecipeSerializer<(never)>
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CampfireCookingRecipe$$Type = ($CampfireCookingRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CampfireCookingRecipe$$Original = $CampfireCookingRecipe;}
declare module "net.minecraft.world.item.context.UseOnContext" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$UseOnContextInvoker$$Interface} from "com.jesz.createdieselgenerators.mixins.UseOnContextInvoker"
import {$UseOnContextAccessor$$Interface} from "com.simibubi.create.foundation.mixin.accessor.UseOnContextAccessor"

export class $UseOnContext implements $UseOnContextAccessor$$Interface, $UseOnContextInvoker$$Interface {
constructor(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $BlockHitResult$$Type)
constructor(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type, arg4: $BlockHitResult$$Type)

public "getHorizontalDirection"(): $Direction
public "cdg_getHitResult"(): $BlockHitResult
public "getLevel"(): $Level
public "isSecondaryUseActive"(): boolean
public "getClickLocation"(): $Vec3
public "getHand"(): $InteractionHand
public "getPlayer"(): $Player
public "getClickedPos"(): $BlockPos
public "getClickedFace"(): $Direction
public "getItemInHand"(): $ItemStack
public "isInside"(): boolean
public "getRotation"(): float
public "create$getHitResult"(): $BlockHitResult
get "horizontalDirection"(): $Direction
get "level"(): $Level
get "secondaryUseActive"(): boolean
get "clickLocation"(): $Vec3
get "hand"(): $InteractionHand
get "player"(): $Player
get "clickedPos"(): $BlockPos
get "clickedFace"(): $Direction
get "itemInHand"(): $ItemStack
get "inside"(): boolean
get "rotation"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UseOnContext$$Type = ($UseOnContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UseOnContext$$Original = $UseOnContext;}
declare module "net.minecraft.world.item.component.Fireworks" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$FireworkExplosion, $FireworkExplosion$$Type} from "net.minecraft.world.item.component.FireworkExplosion"
import {$TooltipProvider$$Interface} from "net.minecraft.world.item.component.TooltipProvider"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $Fireworks extends $Record implements $TooltipProvider$$Interface {
static readonly "CODEC": $Codec<($Fireworks)>
static readonly "MAX_EXPLOSIONS": integer
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($Fireworks)>

constructor(arg0: integer, arg1: $List$$Type<($FireworkExplosion$$Type)>)

public "explosions"(): $List<($FireworkExplosion)>
public "flightDuration"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "addToTooltip"(arg0: $Item$TooltipContext$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Fireworks$$Type = ({"flightDuration"?: integer, "explosions"?: $List$$Type<($FireworkExplosion$$Type)>}) | ([flightDuration?: integer, explosions?: $List$$Type<($FireworkExplosion$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Fireworks$$Original = $Fireworks;}
declare module "net.minecraft.world.item.crafting.TippedArrowRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$CustomRecipe} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $TippedArrowRecipe extends $CustomRecipe {
constructor(arg0: $CraftingBookCategory$$Type)

public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TippedArrowRecipe$$Type = ($TippedArrowRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TippedArrowRecipe$$Original = $TippedArrowRecipe;}
declare module "net.minecraft.world.item.alchemy.Potion" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$MobEffectInstance, $MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$FeatureFlagSet, $FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$FeatureFlag$$Type} from "net.minecraft.world.flag.FeatureFlag"
import {$Optional$$Type} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List} from "java.util.List"
import {$FeatureElement$$Interface} from "net.minecraft.world.flag.FeatureElement"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $Potion implements $FeatureElement$$Interface {
static readonly "CODEC": $Codec<($Holder<($Potion)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($Potion)>)>

constructor(...arg0: ($MobEffectInstance$$Type)[])
constructor(arg0: StringJS, ...arg1: ($MobEffectInstance$$Type)[])

public "getEffects"(): $List<($MobEffectInstance)>
public "hasInstantEffects"(): boolean
public static "getName"(arg0: ($Holder$$Type<($Potion$$Type)>)?, arg1: StringJS): StringJS
public "requiredFeatures"(...arg0: ($FeatureFlag$$Type)[]): $Potion
public "requiredFeatures"(): $FeatureFlagSet
public "isEnabled"(arg0: $FeatureFlagSet$$Type): boolean
get "effects"(): $List<($MobEffectInstance)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.Potion
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.PotionTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Potion$$Type = (Special.Potion);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Potion$$Original = $Potion;}
declare module "net.minecraft.world.item.crafting.RecipeHolder" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RecipeScriptContext$$Type} from "dev.latvian.mods.kubejs.recipe.RecipeScriptContext"
import {$RecipeSchema} from "dev.latvian.mods.kubejs.recipe.schema.RecipeSchema"
import {$RecipeMatchContext$$Type} from "dev.latvian.mods.kubejs.recipe.filter.RecipeMatchContext"
import {$ReplacementMatchInfo$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatchInfo"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$RecipeHolderKJS$$Interface} from "dev.latvian.mods.kubejs.core.RecipeHolderKJS"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$Record} from "java.lang.Record"

export class $RecipeHolder<T extends $Recipe<(object)>> extends $Record implements $RecipeHolderKJS$$Interface {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($RecipeHolder<(never)>)>

constructor(arg0: $ResourceLocation$$Type, arg1: T)

public "value"(): T
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): $ResourceLocation
public "getTypeKey"(): $ResourceKey
public "replaceInput"(cx: $RecipeScriptContext$$Type, match: $ReplacementMatchInfo$$Type, arg2: any): boolean
public "setGroup"(group: StringJS): void
public "getSchema"(): $RecipeSchema
public "replaceOutput"(cx: $RecipeScriptContext$$Type, match: $ReplacementMatchInfo$$Type, arg2: any): boolean
public "getOrCreateId"(): $ResourceLocation
public "getRecipe"(): $Recipe<(never)>
public "getSerializer"(): $RecipeSerializer<(never)>
public "getGroup"(): StringJS
public "hasInput"(cx: $RecipeMatchContext$$Type, match: $ReplacementMatchInfo$$Type): boolean
public "hasOutput"(cx: $RecipeMatchContext$$Type, match: $ReplacementMatchInfo$$Type): boolean
public "self"(): $RecipeHolder<(never)>
public "getType"(): $ResourceLocation
public "getMod"(): StringJS
get "typeKey"(): $ResourceKey
set "group"(value: StringJS)
get "schema"(): $RecipeSchema
get "orCreateId"(): $ResourceLocation
get "recipe"(): $Recipe<(never)>
get "serializer"(): $RecipeSerializer<(never)>
get "group"(): StringJS
get "type"(): $ResourceLocation
get "mod"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeHolder$$Type<T> = ({"value"?: T, "id"?: $ResourceLocation$$Type}) | ([value?: T, id?: $ResourceLocation$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeHolder$$Original<T> = $RecipeHolder<(T)>;}
declare module "net.minecraft.world.item.Item" {
import {$BlockHitResult} from "net.minecraft.world.phys.BlockHitResult"
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$InjectedItemExtension$$Interface} from "dev.architectury.extensions.injected.InjectedItemExtension"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$ArmorMaterial$Layer$$Type} from "net.minecraft.world.item.ArmorMaterial$Layer"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ClickAction$$Type} from "net.minecraft.world.inventory.ClickAction"
import {$ItemEnchantments} from "net.minecraft.world.item.enchantment.ItemEnchantments"
import {$IItemExtension$$Interface} from "net.neoforged.neoforge.common.extensions.IItemExtension"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$FeatureElement$$Interface} from "net.minecraft.world.flag.FeatureElement"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CustomDamageHandler, $CustomDamageHandler$$Type} from "net.fabricmc.fabric.api.item.v1.CustomDamageHandler"
import {$EnchantingContext$$Type} from "net.fabricmc.fabric.api.item.v1.EnchantingContext"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$SlotAccess$$Type} from "net.minecraft.world.entity.SlotAccess"
import {$HolderLookup$RegistryLookup$$Type} from "net.minecraft.core.HolderLookup$RegistryLookup"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$EnderMan$$Type} from "net.minecraft.world.entity.monster.EnderMan"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$EquipmentSlotProvider, $EquipmentSlotProvider$$Type} from "net.fabricmc.fabric.api.item.v1.EquipmentSlotProvider"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$EnchantmentInstance$$Type} from "net.minecraft.world.item.enchantment.EnchantmentInstance"
import {$ItemLike$$Interface} from "net.minecraft.world.level.ItemLike"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Holder$Reference} from "net.minecraft.core.Holder$Reference"
import {$AABB} from "net.minecraft.world.phys.AABB"
import {$FeatureFlagSet, $FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$ItemVariantCache$$Interface} from "net.fabricmc.fabric.impl.transfer.item.ItemVariantCache"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ItemStackKey} from "dev.latvian.mods.kubejs.item.ItemStackKey"
import {$FoodProperties} from "net.minecraft.world.food.FoodProperties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemKJS$$Interface} from "dev.latvian.mods.kubejs.core.ItemKJS"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$ItemBuilder, $ItemBuilder$$Type} from "dev.latvian.mods.kubejs.item.ItemBuilder"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ItemExtensions$$Interface} from "net.fabricmc.fabric.impl.item.ItemExtensions"
import {$Map} from "java.util.Map"
import {$FabricItem$$Interface} from "net.fabricmc.fabric.api.item.v1.FabricItem"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$ItemFTBL$$Interface} from "dev.ftb.mods.ftblibrary.core.ItemFTBL"
import {$ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ItemVariant} from "net.fabricmc.fabric.api.transfer.v1.item.ItemVariant"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$IClientItemExtensions$$Type} from "net.neoforged.neoforge.client.extensions.common.IClientItemExtensions"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$ItemAccessor$$Interface} from "net.fabricmc.fabric.mixin.item.ItemAccessor"
import {$Registry} from "net.minecraft.core.Registry"
import {$TagKey} from "net.minecraft.tags.TagKey"

export class $Item implements $FeatureElement$$Interface, $ItemLike$$Interface, $IItemExtension$$Interface, $ItemAccessor$$Interface, $FabricItem$$Interface, $ItemExtensions$$Interface, $InjectedItemExtension$$Interface, $ItemFTBL$$Interface, $ItemVariantCache$$Interface, $ItemKJS$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "verifyComponentsAfterLoad"(arg0: $ItemStack$$Type): void
public "onUseTick"(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type, arg3: integer): void
public "getId"(): Special.Item
/**
 * 
 * @deprecated
 */
public "builtInRegistryHolder"(): $Holder$Reference<($Item)>
public "getDescription"(): $Component
public "getName"(arg0: $ItemStack$$Type): $Component
public "toString"(): StringJS
public static "getId"(arg0: $Item$$Type): Special.Item
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "isCorrectToolForDrops"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type): boolean
public "getAttackDamageBonus"(arg0: $Entity$$Type, arg1: float, arg2: $DamageSource$$Type): float
public "interactLivingEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type): $InteractionResult
public "setComponents"(arg0: $DataComponentMap$$Type): void
public "setCanRepair"(arg0: boolean): void
public "setItemBuilder"(b: $ItemBuilder$$Type): void
public "fabric_getCustomDamageHandler"(): $CustomDamageHandler
public "fabric_setCustomDamageHandler"(arg0: $CustomDamageHandler$$Type): void
public "fabric_getCachedItemVariant"(): $ItemVariant
public "setCraftingRemainingItemFTBL"(arg0: $Item$$Type): void
public "components"(): $DataComponentMap
/**
 * 
 * @deprecated
 */
public "canFitInsideContainerItems"(): boolean
/**
 * 
 * @deprecated
 */
public "getCraftingRemainingItem"(): $Item
public static "getPlayerPOVHitResult"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ClipContext$Fluid$$Type): $BlockHitResult
public "onCraftedPostProcess"(arg0: $ItemStack$$Type, arg1: $Level$$Type): void
public "getTypeItemStackKey"(): $ItemStackKey
public "setCraftingRemainder"(arg0: $Item$$Type): void
/**
 * 
 * @deprecated
 */
public "getEnchantmentValue"(): integer
/**
 * 
 * @deprecated
 */
public "hasCraftingRemainingItem"(): boolean
public "getDefaultMaxStackSize"(): integer
public "overrideStackedOnOther"(arg0: $ItemStack$$Type, arg1: $Slot$$Type, arg2: $ClickAction$$Type, arg3: $Player$$Type): boolean
public "overrideOtherStackedOnMe"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Slot$$Type, arg3: $ClickAction$$Type, arg4: $Player$$Type, arg5: $SlotAccess$$Type): boolean
public static "byId"(arg0: integer): $Item
public "isFoil"(arg0: $ItemStack$$Type): boolean
public "getDrinkingSound"(): $SoundEvent
public "getEatingSound"(): $SoundEvent
public "releaseUsing"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type, arg3: integer): void
public "getUseDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public "useOnRelease"(arg0: $ItemStack$$Type): boolean
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "finishUsingItem"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type): $ItemStack
public "getItemBuilder"(): $ItemBuilder
public "postHurtEnemy"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): void
public "getDestroySpeed"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type): float
/**
 * 
 * @deprecated
 */
public static "byBlock"(arg0: $Block$$Type): $Item
public "asItem"(): $Item
/**
 * 
 * @deprecated
 */
public "initializeClient"(arg0: $Consumer$$Type<($IClientItemExtensions)>): void
public "asHolder"(): $Holder
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getTypeData"(): $Map
public "setNameKey"(arg0: StringJS): void
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "getDefaultInstance"(): $ItemStack
public "getDescriptionId"(): StringJS
public "getDescriptionId"(arg0: $ItemStack$$Type): StringJS
/**
 * 
 * @deprecated
 */
public "getDefaultAttributeModifiers"(): $ItemAttributeModifiers
public "fabric_getEquipmentSlotProvider"(): $EquipmentSlotProvider
public "fabric_setEquipmentSlotProvider"(arg0: $EquipmentSlotProvider$$Type): void
/**
 * 
 * @deprecated
 */
public "modifyDefaultComponentsFrom"(arg0: $DataComponentPatch$$Type): void
public "getKey"(): $ResourceKey
public "requiredFeatures"(): $FeatureFlagSet
public "isComplex"(): boolean
public "mineBlock"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $LivingEntity$$Type): boolean
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "isEnchantable"(arg0: $ItemStack$$Type): boolean
public "isValidRepairItem"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "asIngredient"(): $Ingredient
public "isRepairable"(arg0: $ItemStack$$Type): boolean
public "onCraftedBy"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Player$$Type): void
public "canAttackBlock"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
/**
 * 
 * @deprecated
 */
public "onDestroyed"(arg0: $ItemEntity$$Type): void
public "getBreakingSound"(): $SoundEvent
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "hurtEnemy"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public "isEnabled"(arg0: $FeatureFlagSet$$Type): boolean
public "handler$cah000$fabric_item_api_v1$hasCraftingRemainingItem"(arg0: $ItemStack$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "handler$cah000$fabric_item_api_v1$getCraftingRemainingItem"(arg0: $ItemStack$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "getDamage"(arg0: $ItemStack$$Type): integer
public "isNotReplaceableByPickAction"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: integer): boolean
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "canEquip"(arg0: $ItemStack$$Type, arg1: $EquipmentSlot$$Type, arg2: $LivingEntity$$Type): boolean
public "setDamage"(arg0: $ItemStack$$Type, arg1: integer): void
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$$Type, arg1: integer, arg2: T, arg3: $Consumer$$Type<($Item)>): integer
public "canFitInsideContainerItems"(arg0: $ItemStack$$Type): boolean
public "getCraftingRemainingItem"(arg0: $ItemStack$$Type): $ItemStack
public "getEnchantmentValue"(arg0: $ItemStack$$Type): integer
public "hasCraftingRemainingItem"(arg0: $ItemStack$$Type): boolean
public "createEntity"(arg0: $Level$$Type, arg1: $Entity$$Type, arg2: $ItemStack$$Type): $Entity
public "supportsEnchantment"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
public "canGrindstoneRepair"(arg0: $ItemStack$$Type): boolean
public "getEnchantmentLevel"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): integer
public "shouldCauseBlockBreakReset"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "getArmorTexture"(arg0: $ItemStack$$Type, arg1: $Entity$$Type, arg2: $EquipmentSlot$$Type, arg3: $ArmorMaterial$Layer$$Type, arg4: boolean): $ResourceLocation
public "isPiglinCurrency"(arg0: $ItemStack$$Type): boolean
public "doesSneakBypassUse"(arg0: $ItemStack$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
public "onEntityItemUpdate"(arg0: $ItemStack$$Type, arg1: $ItemEntity$$Type): boolean
public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "onDroppedByPlayer"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public "getEntityLifespan"(arg0: $ItemStack$$Type, arg1: $Level$$Type): integer
public "getHighlightTip"(arg0: $ItemStack$$Type, arg1: $Component$$Type): $Component
public "isBookEnchantable"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "isPrimaryItemFor"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
public "getCreatorModId"(arg0: $ItemStack$$Type): StringJS
public "getXpRepairRatio"(arg0: $ItemStack$$Type): float
public "hasCustomEntity"(arg0: $ItemStack$$Type): boolean
public "getAllEnchantments"(arg0: $ItemStack$$Type, arg1: $HolderLookup$RegistryLookup$$Type<($Enchantment$$Type)>): $ItemEnchantments
public "getBurnTime"(arg0: $ItemStack$$Type, arg1: $RecipeType$$Type<(never)>): integer
public "onLeftClickEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $Entity$$Type): boolean
public "onAnimalArmorTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Mob$$Type): void
public "canBeHurtBy"(arg0: $ItemStack$$Type, arg1: $DamageSource$$Type): boolean
public "applyEnchantments"(arg0: $ItemStack$$Type, arg1: $List$$Type<($EnchantmentInstance$$Type)>): $ItemStack
public "isEnderMask"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $EnderMan$$Type): boolean
public "handler$cah000$fabric_item_api_v1$getEquipmentSlot"(arg0: $ItemStack$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "makesPiglinsNeutral"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
public "canWalkOnPowderedSnow"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
public "onEntitySwing"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $InteractionHand$$Type): boolean
/**
 * 
 * @deprecated
 */
public "onEntitySwing"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
public "elytraFlightTick"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: integer): boolean
public "canDisableShield"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $LivingEntity$$Type, arg3: $LivingEntity$$Type): boolean
public "canPerformAction"(arg0: $ItemStack$$Type, arg1: $ItemAbility$$Type): boolean
public "onStopUsing"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: integer): void
public "getFoodProperties"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): $FoodProperties
public "canContinueUsing"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "getSweepHitBox"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $Entity$$Type): $AABB
public "canElytraFly"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
public "getMaxStackSize"(arg0: $ItemStack$$Type): integer
public "getDefaultAttributeModifiers"(arg0: $ItemStack$$Type): $ItemAttributeModifiers
public "modifyReturnValue$cam000$fabric_item_api_v1$shouldCauseReequipAnimation"(arg0: boolean, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type, arg3: boolean): boolean
public "isDamaged"(arg0: $ItemStack$$Type): boolean
public "getMaxDamage"(arg0: $ItemStack$$Type): integer
public "isDamageable"(arg0: $ItemStack$$Type): boolean
public "onDestroyed"(arg0: $ItemEntity$$Type, arg1: $DamageSource$$Type): void
public "getEquipmentSlot"(arg0: $ItemStack$$Type): $EquipmentSlot
public "handler$cam000$fabric_item_api_v1$shouldCauseBlockBreakReset"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $CallbackInfoReturnable$$Type): void
public "allowContinuingBlockBreaking"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): boolean
public "allowComponentsUpdateAnimation"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type): boolean
public "getRecipeRemainder"(arg0: $ItemStack$$Type): $ItemStack
public "canBeEnchantedWith"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>, arg2: $EnchantingContext$$Type): boolean
public "arch$holder"(): $Holder<($Item)>
public "getRegistryId"(): $ResourceKey<($Registry<($Item)>)>
public "getRegistry"(): $Registry<($Item)>
public "getItem"(): $Item
public "arch$registryName"(): $ResourceLocation
public "hasTag"(tag: $ResourceLocation$$Type): boolean
public "getMod"(): StringJS
public "getIdLocation"(): $ResourceLocation
public "getTagKeys"(): $List<($TagKey<($Item)>)>
public "getTags"(): $List<($ResourceLocation)>
public "specialEquals"(o: any, shallow: boolean): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "id"(): Special.Item
get "description"(): $Component
set "canRepair"(value: boolean)
set "itemBuilder"(value: $ItemBuilder$$Type)
set "craftingRemainingItemFTBL"(value: $Item$$Type)
get "craftingRemainingItem"(): $Item
get "typeItemStackKey"(): $ItemStackKey
set "craftingRemainder"(value: $Item$$Type)
get "enchantmentValue"(): integer
get "defaultMaxStackSize"(): integer
get "drinkingSound"(): $SoundEvent
get "eatingSound"(): $SoundEvent
get "itemBuilder"(): $ItemBuilder
get "typeData"(): $Map
set "nameKey"(value: StringJS)
get "defaultInstance"(): $ItemStack
get "descriptionId"(): StringJS
get "defaultAttributeModifiers"(): $ItemAttributeModifiers
get "key"(): $ResourceKey
get "complex"(): boolean
get "breakingSound"(): $SoundEvent
get "registryId"(): $ResourceKey<($Registry<($Item)>)>
get "registry"(): $Registry<($Item)>
get "item"(): $Item
get "mod"(): StringJS
get "idLocation"(): $ResourceLocation
get "tagKeys"(): $List<($TagKey<($Item)>)>
get "tags"(): $List<($ResourceLocation)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.Item
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.ItemTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Item$$Type = (Special.Item);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Item$$Original = $Item;}
declare module "net.minecraft.world.item.enchantment.EnchantedItemInUse" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Record} from "java.lang.Record"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $EnchantedItemInUse extends $Record {
constructor(arg0: $ItemStack$$Type, arg1: $EquipmentSlot$$Type, arg2: $LivingEntity$$Type)
constructor(arg0: $ItemStack$$Type, arg1: $EquipmentSlot$$Type, arg2: $LivingEntity$$Type, arg3: $Consumer$$Type<($Item)>)

public "itemStack"(): $ItemStack
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "owner"(): $LivingEntity
public "onBreak"(): $Consumer<($Item)>
public "inSlot"(): $EquipmentSlot
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantedItemInUse$$Type = ({"onBreak"?: $Consumer$$Type<($Item$$Type)>, "owner"?: $LivingEntity$$Type, "inSlot"?: $EquipmentSlot$$Type, "itemStack"?: $ItemStack$$Type}) | ([onBreak?: $Consumer$$Type<($Item$$Type)>, owner?: $LivingEntity$$Type, inSlot?: $EquipmentSlot$$Type, itemStack?: $ItemStack$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantedItemInUse$$Original = $EnchantedItemInUse;}
declare module "net.minecraft.world.item.crafting.SmithingTrimRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$SmithingTrimRecipeAccessor$$Interface} from "dev.emi.emi.mixin.accessor.SmithingTrimRecipeAccessor"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$AccessorSmithingTrimRecipe$$Interface as $AccessorSmithingTrimRecipe$0$$Interface} from "vazkii.patchouli.mixin.AccessorSmithingTrimRecipe"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$SmithingRecipeInput$$Type} from "net.minecraft.world.item.crafting.SmithingRecipeInput"
import {$AccessorSmithingTrimRecipe$$Interface} from "com.illusivesoulworks.polymorph.mixin.core.AccessorSmithingTrimRecipe"
import {$SmithingRecipe$$Interface} from "net.minecraft.world.item.crafting.SmithingRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $SmithingTrimRecipe implements $SmithingRecipe$$Interface, $SmithingTrimRecipeAccessor$$Interface, $AccessorSmithingTrimRecipe$$Interface, $AccessorSmithingTrimRecipe$0$$Interface {
readonly "template": $Ingredient
readonly "base": $Ingredient
readonly "addition": $Ingredient

constructor(arg0: $Ingredient$$Type, arg1: $Ingredient$$Type, arg2: $Ingredient$$Type)

public "getSerializer"(): $RecipeSerializer<(never)>
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $SmithingRecipeInput$$Type, arg1: $Level$$Type): boolean
public "getBase"(): $Ingredient
public "isTemplateIngredient"(arg0: $ItemStack$$Type): boolean
public "isAdditionIngredient"(arg0: $ItemStack$$Type): boolean
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $SmithingRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getTemplate"(): $Ingredient
public "isIncomplete"(): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getAddition"(): $Ingredient
public "isBaseIngredient"(arg0: $ItemStack$$Type): boolean
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getType"(): $RecipeType<(never)>
public "getToastSymbol"(): $ItemStack
public "getRemainingItems"(arg0: $SmithingRecipeInput$$Type): $NonNullList<($ItemStack)>
public "getGroup"(): StringJS
public "isSpecial"(): boolean
public "showNotification"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(never)>
get "incomplete"(): boolean
get "type"(): $RecipeType<(never)>
get "toastSymbol"(): $ItemStack
get "group"(): StringJS
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmithingTrimRecipe$$Type = ($SmithingTrimRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmithingTrimRecipe$$Original = $SmithingTrimRecipe;}
declare module "net.minecraft.world.item.trading.Merchant" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MerchantOffers, $MerchantOffers$$Type} from "net.minecraft.world.item.trading.MerchantOffers"
import {$MerchantOffer$$Type} from "net.minecraft.world.item.trading.MerchantOffer"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"

export interface $Merchant$$Interface {
get "notifyTradeSound"(): $SoundEvent
get "offers"(): $MerchantOffers
get "villagerXp"(): integer
get "clientSide"(): boolean
set "tradingPlayer"(value: $Player$$Type)
get "tradingPlayer"(): $Player
}

export class $Merchant implements $Merchant$$Interface {
 "getNotifyTradeSound"(): $SoundEvent
 "getOffers"(): $MerchantOffers
 "getVillagerXp"(): integer
 "isClientSide"(): boolean
 "setTradingPlayer"(arg0: $Player$$Type): void
 "openTradingScreen"(arg0: $Player$$Type, arg1: $Component$$Type, arg2: integer): void
 "getTradingPlayer"(): $Player
 "showProgressBar"(): boolean
 "notifyTradeUpdated"(arg0: $ItemStack$$Type): void
 "notifyTrade"(arg0: $MerchantOffer$$Type): void
 "overrideOffers"(arg0: $MerchantOffers$$Type): void
 "canRestock"(): boolean
 "overrideXp"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Merchant$$Type = ($Merchant);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Merchant$$Original = $Merchant;}
declare module "net.minecraft.world.item.component.WrittenBookContent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$BookContent$$Interface} from "net.minecraft.world.item.component.BookContent"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Filterable, $Filterable$$Type} from "net.minecraft.server.network.Filterable"
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"
import {$Record} from "java.lang.Record"

export class $WrittenBookContent extends $Record implements $BookContent$$Interface<($Component), ($WrittenBookContent)> {
static readonly "TITLE_LENGTH": integer
static readonly "TITLE_MAX_LENGTH": integer
static readonly "CODEC": $Codec<($WrittenBookContent)>
static readonly "MAX_CRAFTABLE_GENERATION": integer
static readonly "PAGES_CODEC": $Codec<($List<($Filterable<($Component)>)>)>
static readonly "PAGE_LENGTH": integer
static readonly "EMPTY": $WrittenBookContent
static readonly "CONTENT_CODEC": $Codec<($Component)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($WrittenBookContent)>
static readonly "MAX_GENERATION": integer

constructor(arg0: $Filterable$$Type<(StringJS)>, arg1: StringJS, arg2: integer, arg3: $List$$Type<($Filterable$$Type<($Component$$Type)>)>, arg4: boolean)

public "author"(): StringJS
public "generation"(): integer
public "withReplacedPages"(arg0: $List$$Type<($Filterable$$Type<($Component$$Type)>)>): $WrittenBookContent
public "tryCraftCopy"(): $WrittenBookContent
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "resolve"(arg0: $CommandSourceStack$$Type, arg1: $Player$$Type): $WrittenBookContent
public "resolved"(): boolean
public "title"(): $Filterable<(StringJS)>
public "pages"(): $List<($Filterable<($Component)>)>
public "markResolved"(): $WrittenBookContent
public static "pagesCodec"(arg0: $Codec$$Type<($Component$$Type)>): $Codec<($List<($Filterable<($Component)>)>)>
public "getPages"(arg0: boolean): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrittenBookContent$$Type = ({"generation"?: integer, "author"?: StringJS, "title"?: $Filterable$$Type<(StringJS)>, "resolved"?: boolean, "pages"?: $List$$Type<($Filterable$$Type<($Component$$Type)>)>}) | ([generation?: integer, author?: StringJS, title?: $Filterable$$Type<(StringJS)>, resolved?: boolean, pages?: $List$$Type<($Filterable$$Type<($Component$$Type)>)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WrittenBookContent$$Original = $WrittenBookContent;}
declare module "net.minecraft.world.item.UseAnim" {
import {$Enum} from "java.lang.Enum"

export class $UseAnim extends $Enum<($UseAnim)> {
static readonly "BRUSH": $UseAnim
static readonly "TOOT_HORN": $UseAnim
static readonly "BLOCK": $UseAnim
static readonly "CUSTOM": $UseAnim
static readonly "EAT": $UseAnim
static readonly "BOW": $UseAnim
static readonly "NONE": $UseAnim
static readonly "DRINK": $UseAnim
static readonly "SPEAR": $UseAnim
static readonly "CROSSBOW": $UseAnim
static readonly "SPYGLASS": $UseAnim

public static "values"(): ($UseAnim)[]
public static "valueOf"(arg0: StringJS): $UseAnim
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UseAnim$$Type = (("none") | ("eat") | ("drink") | ("block") | ("bow") | ("spear") | ("crossbow") | ("spyglass") | ("toot_horn") | ("brush") | ("custom"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UseAnim$$Original = $UseAnim;}
declare module "net.minecraft.world.item.enchantment.EnchantmentTarget" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $EnchantmentTarget extends $Enum<($EnchantmentTarget)> implements $StringRepresentable$$Interface {
static readonly "CODEC": $Codec<($EnchantmentTarget)>
static readonly "ATTACKER": $EnchantmentTarget
static readonly "VICTIM": $EnchantmentTarget
static readonly "DAMAGING_ENTITY": $EnchantmentTarget

public static "values"(): ($EnchantmentTarget)[]
public static "valueOf"(arg0: StringJS): $EnchantmentTarget
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentTarget$$Type = (("attacker") | ("damaging_entity") | ("victim"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantmentTarget$$Original = $EnchantmentTarget;}
declare module "net.minecraft.world.item.crafting.ShieldDecorationRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$CustomRecipe} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $ShieldDecorationRecipe extends $CustomRecipe {
constructor(arg0: $CraftingBookCategory$$Type)

public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShieldDecorationRecipe$$Type = ($ShieldDecorationRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShieldDecorationRecipe$$Original = $ShieldDecorationRecipe;}
declare module "net.minecraft.world.item.CreativeModeTab$Output" {
import {$Collection$$Type} from "java.util.Collection"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$CreativeModeTab$TabVisibility, $CreativeModeTab$TabVisibility$$Type} from "net.minecraft.world.item.CreativeModeTab$TabVisibility"

export interface $CreativeModeTab$Output$$Interface {

(arg0: $ItemStack, arg1: $CreativeModeTab$TabVisibility): void
}

export class $CreativeModeTab$Output implements $CreativeModeTab$Output$$Interface {
 "acceptAll"(arg0: $Collection$$Type<($ItemStack$$Type)>): void
 "acceptAll"(arg0: $Collection$$Type<($ItemStack$$Type)>, arg1: $CreativeModeTab$TabVisibility$$Type): void
 "accept"(arg0: $ItemLike$$Type): void
 "accept"(arg0: $ItemStack$$Type, arg1: $CreativeModeTab$TabVisibility$$Type): void
 "accept"(arg0: $ItemStack$$Type): void
 "accept"(arg0: $ItemLike$$Type, arg1: $CreativeModeTab$TabVisibility$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeModeTab$Output$$Type = ((arg0: $ItemStack, arg1: $CreativeModeTab$TabVisibility) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreativeModeTab$Output$$Original = $CreativeModeTab$Output;}
declare module "net.minecraft.world.item.crafting.SingleItemRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$SingleRecipeInput, $SingleRecipeInput$$Type} from "net.minecraft.world.item.crafting.SingleRecipeInput"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $SingleItemRecipe implements $Recipe$$Interface<($SingleRecipeInput)> {
constructor(arg0: $RecipeType$$Type<(never)>, arg1: $RecipeSerializer$$Type<(never)>, arg2: StringJS, arg3: $Ingredient$$Type, arg4: $ItemStack$$Type)

public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
public "getType"(): $RecipeType<(never)>
public "assemble"(arg0: $SingleRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getGroup"(): StringJS
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "matches"(arg0: $SingleRecipeInput$$Type, arg1: $Level$$Type): boolean
public "getRemainingItems"(arg0: $SingleRecipeInput$$Type): $NonNullList<($ItemStack)>
public "isSpecial"(): boolean
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
public "showNotification"(): boolean
get "serializer"(): $RecipeSerializer<(never)>
get "type"(): $RecipeType<(never)>
get "group"(): StringJS
get "ingredients"(): $NonNullList<($Ingredient)>
get "special"(): boolean
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleItemRecipe$$Type = ($SingleItemRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SingleItemRecipe$$Original = $SingleItemRecipe;}
declare module "net.minecraft.world.item.component.Tool" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$Tool$Rule, $Tool$Rule$$Type} from "net.minecraft.world.item.component.Tool$Rule"
import {$Record} from "java.lang.Record"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $Tool extends $Record {
static readonly "CODEC": $Codec<($Tool)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Tool)>

constructor(arg0: $List$$Type<($Tool$Rule$$Type)>, arg1: float, arg2: integer)

public "defaultMiningSpeed"(): float
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "rules"(): $List<($Tool$Rule)>
public "getMiningSpeed"(arg0: $BlockState$$Type): float
public "damagePerBlock"(): integer
public "isCorrectForDrops"(arg0: $BlockState$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Tool$$Type = ({"damagePerBlock"?: integer, "defaultMiningSpeed"?: float, "rules"?: $List$$Type<($Tool$Rule$$Type)>}) | ([damagePerBlock?: integer, defaultMiningSpeed?: float, rules?: $List$$Type<($Tool$Rule$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Tool$$Original = $Tool;}
declare module "net.minecraft.world.item.crafting.ArmorDyeRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$CustomRecipe} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $ArmorDyeRecipe extends $CustomRecipe {
constructor(arg0: $CraftingBookCategory$$Type)

public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmorDyeRecipe$$Type = ($ArmorDyeRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArmorDyeRecipe$$Original = $ArmorDyeRecipe;}
declare module "net.minecraft.world.item.component.SuspiciousStewEffects$Entry" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$MobEffectInstance} from "net.minecraft.world.effect.MobEffectInstance"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $SuspiciousStewEffects$Entry extends $Record {
static readonly "CODEC": $Codec<($SuspiciousStewEffects$Entry)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($SuspiciousStewEffects$Entry)>

constructor(arg0: $Holder$$Type<($MobEffect)>, arg1: integer)

public "effect"(): $Holder<($MobEffect)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "duration"(): integer
public "createEffectInstance"(): $MobEffectInstance
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SuspiciousStewEffects$Entry$$Type = ({"duration"?: integer, "effect"?: $Holder$$Type<($MobEffect)>}) | ([duration?: integer, effect?: $Holder$$Type<($MobEffect)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SuspiciousStewEffects$Entry$$Original = $SuspiciousStewEffects$Entry;}
declare module "net.minecraft.world.item.component.FireworkExplosion" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FireworkExplosion$Shape, $FireworkExplosion$Shape$$Type} from "net.minecraft.world.item.component.FireworkExplosion$Shape"
import {$Codec} from "com.mojang.serialization.Codec"
import {$TooltipProvider$$Interface} from "net.minecraft.world.item.component.TooltipProvider"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$IntList, $IntList$$Type} from "it.unimi.dsi.fastutil.ints.IntList"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $FireworkExplosion extends $Record implements $TooltipProvider$$Interface {
static readonly "CODEC": $Codec<($FireworkExplosion)>
static readonly "DEFAULT": $FireworkExplosion
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($FireworkExplosion)>
static readonly "COLOR_LIST_CODEC": $Codec<($IntList)>

constructor(shape: $FireworkExplosion$Shape$$Type, colors: $IntList$$Type, fadeColors: $IntList$$Type, hasTrail: boolean, hasTwinkle: boolean)

public "colors"(): $IntList
public "withFadeColors"(arg0: $IntList$$Type): $FireworkExplosion
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "shape"(): $FireworkExplosion$Shape
public "addAdditionalTooltip"(arg0: $Consumer$$Type<($Component)>): void
public "addShapeNameTooltip"(arg0: $Consumer$$Type<($Component)>): void
public "hasTrail"(): boolean
public "hasTwinkle"(): boolean
public "fadeColors"(): $IntList
public "addToTooltip"(arg0: $Item$TooltipContext$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireworkExplosion$$Type = ({"shape"?: $FireworkExplosion$Shape$$Type, "fadeColors"?: $IntList$$Type, "hasTrail"?: boolean, "colors"?: $IntList$$Type, "hasTwinkle"?: boolean}) | ([shape?: $FireworkExplosion$Shape$$Type, fadeColors?: $IntList$$Type, hasTrail?: boolean, colors?: $IntList$$Type, hasTwinkle?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FireworkExplosion$$Original = $FireworkExplosion;}
declare module "net.minecraft.world.item.DiggerItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$DiggerItemKJS$$Interface} from "dev.latvian.mods.kubejs.core.DiggerItemKJS"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$TieredItem} from "net.minecraft.world.item.TieredItem"

export class $DiggerItem extends $TieredItem implements $DiggerItemKJS$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: $TagKey$$Type<($Block)>, arg2: $Item$Properties$$Type)

public static "createAttributes"(arg0: $Tier$$Type, arg1: float, arg2: float): $ItemAttributeModifiers
public "postHurtEnemy"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): void
public "kjs$getMineableTag"(): $TagKey
public "handler$dem000$kubejs$init"(ci: $CallbackInfo$$Type, blocks: $TagKey$$Type): void
public "hurtEnemy"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DiggerItem$$Type = ($DiggerItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DiggerItem$$Original = $DiggerItem;}
declare module "net.minecraft.world.item.crafting.BannerDuplicateRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$CustomRecipe} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $BannerDuplicateRecipe extends $CustomRecipe {
constructor(arg0: $CraftingBookCategory$$Type)

public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BannerDuplicateRecipe$$Type = ($BannerDuplicateRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BannerDuplicateRecipe$$Original = $BannerDuplicateRecipe;}
declare module "net.minecraft.world.item.crafting.CraftingInput" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CraftingInput$Positioned} from "net.minecraft.world.item.crafting.CraftingInput$Positioned"
import {$RecipeInput, $RecipeInput$$Interface} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$StackedContents} from "net.minecraft.world.entity.player.StackedContents"

export class $CraftingInput implements $RecipeInput$$Interface {
static readonly "EMPTY": $CraftingInput

constructor(arg0: integer, arg1: integer, arg2: $List$$Type<($ItemStack$$Type)>)

public "size"(): integer
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isEmpty"(): boolean
public static "of"(arg0: integer, arg1: integer, arg2: $List$$Type<($ItemStack$$Type)>): $CraftingInput
public "width"(): integer
public "getItem"(arg0: integer, arg1: integer): $ItemStack
public "getItem"(arg0: integer): $ItemStack
public "items"(): $List<($ItemStack)>
public "height"(): integer
public "ingredientCount"(): integer
public "stackedContents"(): $StackedContents
public static "ofPositioned"(arg0: integer, arg1: integer, arg2: $List$$Type<($ItemStack$$Type)>): $CraftingInput$Positioned
public "find"(filter: $SlotFilter$$Type): $ItemStack
public "find"(filter: $SlotFilter$$Type, skip: integer): $ItemStack
public "self"(): $RecipeInput
public "findAll"(filter: $SlotFilter$$Type): $List<($ItemStack)>
public "findAll"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingInput$$Type = ($CraftingInput);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CraftingInput$$Original = $CraftingInput;}
declare module "net.minecraft.world.item.CreativeModeTab$Type" {
import {$Enum} from "java.lang.Enum"

export class $CreativeModeTab$Type extends $Enum<($CreativeModeTab$Type)> {
static readonly "INVENTORY": $CreativeModeTab$Type
static readonly "SEARCH": $CreativeModeTab$Type
static readonly "CATEGORY": $CreativeModeTab$Type
static readonly "HOTBAR": $CreativeModeTab$Type

public static "values"(): ($CreativeModeTab$Type)[]
public static "valueOf"(arg0: StringJS): $CreativeModeTab$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeModeTab$Type$$Type = (("category") | ("inventory") | ("hotbar") | ("search"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreativeModeTab$Type$$Original = $CreativeModeTab$Type;}
declare module "net.minecraft.world.item.DyeColor" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$MapColor} from "net.minecraft.world.level.material.MapColor"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$TextColor} from "net.minecraft.network.chat.TextColor"
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Codec} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$TagKey} from "net.minecraft.tags.TagKey"
import {$Item} from "net.minecraft.world.item.Item"
import {$KubeColor$$Interface} from "dev.latvian.mods.kubejs.color.KubeColor"

export class $DyeColor extends $Enum<($DyeColor)> implements $StringRepresentable$$Interface, $KubeColor$$Interface {
static readonly "WHITE": $DyeColor
static readonly "GRAY": $DyeColor
static readonly "CODEC": $StringRepresentable$EnumCodec<($DyeColor)>
static readonly "BLUE": $DyeColor
static readonly "PURPLE": $DyeColor
static readonly "GREEN": $DyeColor
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($DyeColor)>
static readonly "RED": $DyeColor
static readonly "PINK": $DyeColor
static readonly "LIGHT_GRAY": $DyeColor
static readonly "LIGHT_BLUE": $DyeColor
static readonly "LIME": $DyeColor
static readonly "MAGENTA": $DyeColor
static readonly "BLACK": $DyeColor
static readonly "YELLOW": $DyeColor
static readonly "CYAN": $DyeColor
static readonly "BROWN": $DyeColor
static readonly "ORANGE": $DyeColor

public static "getColor"(arg0: $ItemStack$$Type): $DyeColor
public "getName"(): StringJS
public "toString"(): StringJS
public static "values"(): ($DyeColor)[]
public static "valueOf"(arg0: StringJS): $DyeColor
public "getId"(): integer
public "getTag"(): $TagKey<($Item)>
public static "byName"(arg0: StringJS, arg1: $DyeColor$$Type): $DyeColor
public "getDyedTag"(): $TagKey<($Item)>
public static "byId"(arg0: integer): $DyeColor
public "getFireworkColor"(): integer
public "getArgb"(): integer
public "getTextColor"(): integer
public "getFireworkRGB"(): integer
public static "byFireworkColor"(arg0: integer): $DyeColor
public "getRgb"(): integer
public "getMapColor"(): $MapColor
public "getTextureDiffuseColor"(): integer
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public "toHexString"(): StringJS
public "serialize"(): StringJS
public "createTextColor"(): $TextColor
public "specialEquals"(o: any, shallow: boolean): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "name"(): StringJS
get "id"(): integer
get "tag"(): $TagKey<($Item)>
get "dyedTag"(): $TagKey<($Item)>
get "fireworkColor"(): integer
get "argb"(): integer
get "textColor"(): integer
get "fireworkRGB"(): integer
get "rgb"(): integer
get "mapColor"(): $MapColor
get "textureDiffuseColor"(): integer
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DyeColor$$Type = (("white") | ("orange") | ("magenta") | ("light_blue") | ("yellow") | ("lime") | ("pink") | ("gray") | ("light_gray") | ("cyan") | ("purple") | ("blue") | ("brown") | ("green") | ("red") | ("black"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DyeColor$$Original = $DyeColor;}
declare module "net.minecraft.world.item.crafting.CookingBookCategory" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $CookingBookCategory extends $Enum<($CookingBookCategory)> implements $StringRepresentable$$Interface {
static readonly "CODEC": $StringRepresentable$EnumCodec<($CookingBookCategory)>
static readonly "BLOCKS": $CookingBookCategory
static readonly "MISC": $CookingBookCategory
static readonly "FOOD": $CookingBookCategory

public static "values"(): ($CookingBookCategory)[]
public static "valueOf"(arg0: StringJS): $CookingBookCategory
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CookingBookCategory$$Type = (("food") | ("blocks") | ("misc"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CookingBookCategory$$Original = $CookingBookCategory;}
declare module "net.minecraft.world.item.enchantment.LevelBasedValue$Constant" {
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$Codec} from "com.mojang.serialization.Codec"
import {$List$$Type} from "java.util.List"
import {$LevelBasedValue$Lookup} from "net.minecraft.world.item.enchantment.LevelBasedValue$Lookup"
import {$LevelBasedValue, $LevelBasedValue$$Type, $LevelBasedValue$$Interface} from "net.minecraft.world.item.enchantment.LevelBasedValue"
import {$LevelBasedValue$Linear} from "net.minecraft.world.item.enchantment.LevelBasedValue$Linear"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"

export class $LevelBasedValue$Constant extends $Record implements $LevelBasedValue$$Interface {
static readonly "CODEC": $Codec<($LevelBasedValue$Constant)>
static readonly "TYPED_CODEC": $MapCodec<($LevelBasedValue$Constant)>

constructor(arg0: float)

public "value"(): float
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "calculate"(arg0: integer): float
public "codec"(): $MapCodec<($LevelBasedValue$Constant)>
public static "lookup"(arg0: $List$$Type<(float)>, arg1: $LevelBasedValue$$Type): $LevelBasedValue$Lookup
public static "constant"(arg0: float): $LevelBasedValue$Constant
public static "bootstrap"(arg0: $Registry$$Type<($MapCodec$$Type<($LevelBasedValue$$Type)>)>): $MapCodec<($LevelBasedValue)>
public static "perLevel"(arg0: float, arg1: float): $LevelBasedValue$Linear
public static "perLevel"(arg0: float): $LevelBasedValue$Linear
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelBasedValue$Constant$$Type = ({"value"?: float}) | ([value?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LevelBasedValue$Constant$$Original = $LevelBasedValue$Constant;}
declare module "net.minecraft.world.item.EitherHolder" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $EitherHolder<T> extends $Record {
constructor(arg0: $Holder$$Type<(T)>)
constructor(arg0: ($Holder$$Type<(T)>)?, arg1: $ResourceKey$$Type<(T)>)
constructor(arg0: $ResourceKey$$Type<(T)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "key"(): $ResourceKey<(T)>
public "holder"(): $Optional<($Holder<(T)>)>
public "unwrap"(arg0: $HolderLookup$Provider$$Type): $Optional<($Holder<(T)>)>
public "unwrap"(arg0: $Registry$$Type<(T)>): $Optional<(T)>
public static "codec"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: $Codec$$Type<($Holder$$Type<(T)>)>): $Codec<($EitherHolder<(T)>)>
public static "streamCodec"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), ($Holder$$Type<(T)>)>): $StreamCodec<($RegistryFriendlyByteBuf), ($EitherHolder<(T)>)>
public "asEither"(): $Either<($Holder<(T)>), ($ResourceKey<(T)>)>
public static "fromEither"<T>(arg0: $Either$$Type<($Holder$$Type<(T)>), ($ResourceKey$$Type<(T)>)>): $EitherHolder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EitherHolder$$Type<T> = ({"holder"?: ($Holder$$Type<(T)>)?, "key"?: $ResourceKey$$Type<(T)>}) | ([holder?: ($Holder$$Type<(T)>)?, key?: $ResourceKey$$Type<(T)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EitherHolder$$Original<T> = $EitherHolder<(T)>;}
declare module "net.minecraft.world.item.alchemy.PotionContents" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$MobEffectInstance, $MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$Potion, $Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Codec} from "com.mojang.serialization.Codec"
import {$OptionalInt} from "java.util.OptionalInt"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Record} from "java.lang.Record"

export class $PotionContents extends $Record {
static readonly "CODEC": $Codec<($PotionContents)>
static readonly "EMPTY": $PotionContents
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($PotionContents)>

constructor(potion: ($Holder$$Type<($Potion$$Type)>)?, customColor: (integer)?, customEffects: $List$$Type<($MobEffectInstance$$Type)>)
constructor(arg0: $Holder$$Type<($Potion)>)

public "getColor"(): integer
public static "getColor"(arg0: $Holder$$Type<($Potion)>): integer
public static "getColor"(arg0: $Iterable$$Type<($MobEffectInstance$$Type)>): integer
public "potion"(): $Optional<($Holder<($Potion)>)>
public "customColor"(): $Optional<(integer)>
public "getAllEffects"(): $Iterable<($MobEffectInstance)>
public "customEffects"(): $List<($MobEffectInstance)>
public static "getColorOptional"(arg0: $Iterable$$Type<($MobEffectInstance$$Type)>): $OptionalInt
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "is"(arg0: $Holder$$Type<($Potion)>): boolean
public "withEffectAdded"(arg0: $MobEffectInstance$$Type): $PotionContents
public static "addPotionTooltip"(arg0: $Iterable$$Type<($MobEffectInstance$$Type)>, arg1: $Consumer$$Type<($Component)>, arg2: float, arg3: float): void
public "addPotionTooltip"(arg0: $Consumer$$Type<($Component)>, arg1: float, arg2: float): void
public "forEachEffect"(arg0: $Consumer$$Type<($MobEffectInstance)>): void
public static "createItemStack"(arg0: $Item$$Type, arg1: $Holder$$Type<($Potion)>): $ItemStack
public "hasEffects"(): boolean
public "withPotion"(arg0: $Holder$$Type<($Potion)>): $PotionContents
get "color"(): integer
get "allEffects"(): $Iterable<($MobEffectInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionContents$$Type = ({"potion"?: ($Holder$$Type<($Potion$$Type)>)?, "customEffects"?: $List$$Type<($MobEffectInstance$$Type)>, "customColor"?: (integer)?}) | ([potion?: ($Holder$$Type<($Potion$$Type)>)?, customEffects?: $List$$Type<($MobEffectInstance$$Type)>, customColor?: (integer)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PotionContents$$Original = $PotionContents;}
declare module "net.minecraft.world.item.ArmorItem$Type" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$EquipmentSlot} from "net.minecraft.world.entity.EquipmentSlot"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $ArmorItem$Type extends $Enum<($ArmorItem$Type)> implements $StringRepresentable$$Interface {
static readonly "LEGGINGS": $ArmorItem$Type
static readonly "HELMET": $ArmorItem$Type
static readonly "CODEC": $Codec<($ArmorItem$Type)>
static readonly "CHESTPLATE": $ArmorItem$Type
static readonly "BOOTS": $ArmorItem$Type
static readonly "BODY": $ArmorItem$Type

public "getName"(): StringJS
public static "values"(): ($ArmorItem$Type)[]
public static "valueOf"(arg0: StringJS): $ArmorItem$Type
public "getSlot"(): $EquipmentSlot
public "getDurability"(arg0: integer): integer
public "hasTrims"(): boolean
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
get "name"(): StringJS
get "slot"(): $EquipmentSlot
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmorItem$Type$$Type = (("helmet") | ("chestplate") | ("leggings") | ("boots") | ("body"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArmorItem$Type$$Original = $ArmorItem$Type;}
declare module "net.minecraft.world.item.crafting.Ingredient$Value" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Codec} from "com.mojang.serialization.Codec"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export interface $Ingredient$Value$$Interface {

(): $Collection$$Type<($ItemStack$$Type)>
get "items"(): $Collection<($ItemStack)>
}

export class $Ingredient$Value implements $Ingredient$Value$$Interface {
static readonly "CODEC": $Codec<($Ingredient$Value)>
static readonly "MAP_CODEC": $MapCodec<($Ingredient$Value)>

 "getItems"(): $Collection<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Ingredient$Value$$Type = (() => $Collection$$Type<($ItemStack$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Ingredient$Value$$Original = $Ingredient$Value;}
declare module "net.minecraft.world.item.component.ItemContainerContents$Slot" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Record} from "java.lang.Record"

export class $ItemContainerContents$Slot extends $Record {
static readonly "CODEC": $Codec<($ItemContainerContents$Slot)>

constructor(index: integer, item: $ItemStack$$Type)

public "index"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "item"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemContainerContents$Slot$$Type = ({"index"?: integer, "item"?: $ItemStack$$Type}) | ([index?: integer, item?: $ItemStack$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemContainerContents$Slot$$Original = $ItemContainerContents$Slot;}
declare module "net.minecraft.world.item.trading.MerchantOffer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ItemCost, $ItemCost$$Type} from "net.minecraft.world.item.trading.ItemCost"

export class $MerchantOffer {
 "maxUses": integer
static readonly "CODEC": $Codec<($MerchantOffer)>
 "uses": integer
 "demand": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($MerchantOffer)>

constructor(arg0: $ItemCost$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: integer, arg4: float)
constructor(arg0: $ItemCost$$Type, arg1: ($ItemCost$$Type)?, arg2: $ItemStack$$Type, arg3: integer, arg4: integer, arg5: float)
constructor(arg0: $ItemCost$$Type, arg1: ($ItemCost$$Type)?, arg2: $ItemStack$$Type, arg3: integer, arg4: integer, arg5: integer, arg6: float)
constructor(arg0: $ItemCost$$Type, arg1: ($ItemCost$$Type)?, arg2: $ItemStack$$Type, arg3: integer, arg4: integer, arg5: integer, arg6: float, arg7: integer)

public "setToOutOfStock"(): void
public "isOutOfStock"(): boolean
public "satisfiedBy"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public static "createFromStream"(arg0: $RegistryFriendlyByteBuf$$Type): $MerchantOffer
public "copy"(): $MerchantOffer
public "take"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "getResult"(): $ItemStack
public "getDemand"(): integer
public "getMaxUses"(): integer
public "resetSpecialPriceDiff"(): void
public "addToSpecialPriceDiff"(arg0: integer): void
public "getSpecialPriceDiff"(): integer
public "setSpecialPriceDiff"(arg0: integer): void
public "assemble"(): $ItemStack
public "getCostA"(): $ItemStack
public "getCostB"(): $ItemStack
public "getUses"(): integer
public "needsRestock"(): boolean
public "updateDemand"(): void
public "shouldRewardExp"(): boolean
public "getPriceMultiplier"(): float
public "increaseUses"(): void
public "getBaseCostA"(): $ItemStack
public "getItemCostB"(): $Optional<($ItemCost)>
public "getItemCostA"(): $ItemCost
public "resetUses"(): void
public "getXp"(): integer
get "toOutOfStock"(): void
get "outOfStock"(): boolean
get "result"(): $ItemStack
get "specialPriceDiff"(): integer
set "specialPriceDiff"(value: integer)
get "costA"(): $ItemStack
get "costB"(): $ItemStack
get "priceMultiplier"(): float
get "baseCostA"(): $ItemStack
get "itemCostB"(): $Optional<($ItemCost)>
get "itemCostA"(): $ItemCost
get "xp"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MerchantOffer$$Type = ($MerchantOffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MerchantOffer$$Original = $MerchantOffer;}
declare module "net.minecraft.world.item.crafting.Recipe" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$WithConditions} from "net.neoforged.neoforge.common.conditions.WithConditions"
import {$Optional} from "java.util.Optional"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export interface $Recipe$$Interface<T extends $RecipeInput> {
get "serializer"(): $RecipeSerializer<(never)>
get "type"(): $RecipeType<(never)>
get "group"(): StringJS
get "special"(): boolean
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
get "ingredients"(): $NonNullList<($Ingredient)>
}

export class $Recipe<T extends $RecipeInput> implements $Recipe$$Interface {
static readonly "CODEC": $Codec<($Recipe<(never)>)>
static readonly "CONDITIONAL_CODEC": $Codec<($Optional<($WithConditions<($Recipe<(never)>)>)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Recipe<(never)>)>

 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getSerializer"(): $RecipeSerializer<(never)>
 "matches"(arg0: T, arg1: $Level$$Type): boolean
 "getType"(): $RecipeType<(never)>
 "getRemainingItems"(arg0: T): $NonNullList<($ItemStack)>
 "assemble"(arg0: T, arg1: $HolderLookup$Provider$$Type): $ItemStack
 "getGroup"(): StringJS
 "isSpecial"(): boolean
 "isIncomplete"(): boolean
 "getToastSymbol"(): $ItemStack
 "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
 "showNotification"(): boolean
 "getIngredients"(): $NonNullList<($Ingredient)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Recipe$$Type<T> = ($Recipe<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Recipe$$Original<T> = $Recipe<(T)>;}
declare module "net.minecraft.world.item.JukeboxPlayable" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$JukeboxSong, $JukeboxSong$$Type} from "net.minecraft.world.item.JukeboxSong"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TooltipProvider$$Interface} from "net.minecraft.world.item.component.TooltipProvider"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$EitherHolder, $EitherHolder$$Type} from "net.minecraft.world.item.EitherHolder"
import {$Record} from "java.lang.Record"

export class $JukeboxPlayable extends $Record implements $TooltipProvider$$Interface {
static readonly "CODEC": $Codec<($JukeboxPlayable)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($JukeboxPlayable)>

constructor(arg0: $EitherHolder$$Type<($JukeboxSong$$Type)>, arg1: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "withTooltip"(arg0: boolean): $JukeboxPlayable
public static "tryInsertIntoJukebox"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type, arg3: $Player$$Type): $ItemInteractionResult
public "song"(): $EitherHolder<($JukeboxSong)>
public "showInTooltip"(): boolean
public "addToTooltip"(arg0: $Item$TooltipContext$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JukeboxPlayable$$Type = ({"song"?: $EitherHolder$$Type<($JukeboxSong$$Type)>, "showInTooltip"?: boolean}) | ([song?: $EitherHolder$$Type<($JukeboxSong$$Type)>, showInTooltip?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JukeboxPlayable$$Original = $JukeboxPlayable;}
declare module "net.minecraft.world.item.SpawnEggItem" {
import {$Iterable} from "java.lang.Iterable"
import {$FeatureFlagSet} from "net.minecraft.world.flag.FeatureFlagSet"
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Mob, $Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $SpawnEggItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "BY_ID": $Map<($EntityType<($Mob)>), ($SpawnEggItem)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "defaultType": $EntityType<(never)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

/**
 * 
 * @deprecated
 */
constructor(arg0: $EntityType$$Type<($Mob$$Type)>, arg1: integer, arg2: integer, arg3: $Item$Properties$$Type)

public "getColor"(arg0: integer): integer
public "getType"(arg0: $ItemStack$$Type): $EntityType<(never)>
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "byId"(arg0: $EntityType$$Type<(never)>): $SpawnEggItem
public "spawnOffspringFromSpawnEgg"(arg0: $Player$$Type, arg1: $Mob$$Type, arg2: $EntityType$$Type<($Mob$$Type)>, arg3: $ServerLevel$$Type, arg4: $Vec3$$Type, arg5: $ItemStack$$Type): $Optional<($Mob)>
public static "eggs"(): $Iterable<($SpawnEggItem)>
public "spawnsEntity"(arg0: $ItemStack$$Type, arg1: $EntityType$$Type<(never)>): boolean
public "requiredFeatures"(): $FeatureFlagSet
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnEggItem$$Type = ($SpawnEggItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpawnEggItem$$Original = $SpawnEggItem;}
declare module "net.minecraft.world.item.crafting.StonecutterRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$SingleRecipeInput$$Type} from "net.minecraft.world.item.crafting.SingleRecipeInput"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SingleItemRecipe} from "net.minecraft.world.item.crafting.SingleItemRecipe"

export class $StonecutterRecipe extends $SingleItemRecipe {
constructor(arg0: StringJS, arg1: $Ingredient$$Type, arg2: $ItemStack$$Type)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $SingleRecipeInput$$Type, arg1: $Level$$Type): boolean
public "getToastSymbol"(): $ItemStack
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StonecutterRecipe$$Type = ($StonecutterRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StonecutterRecipe$$Original = $StonecutterRecipe;}
declare module "net.minecraft.world.item.crafting.CraftingRecipe" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CraftingBookCategory} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $CraftingRecipe$$Interface extends $Recipe$$Interface<($CraftingInput)> {
get "type"(): $RecipeType<(never)>
get "serializer"(): $RecipeSerializer<(never)>
get "group"(): StringJS
get "special"(): boolean
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
get "ingredients"(): $NonNullList<($Ingredient)>
}

export class $CraftingRecipe implements $CraftingRecipe$$Interface {
 "getType"(): $RecipeType<(never)>
 "category"(): $CraftingBookCategory
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getSerializer"(): $RecipeSerializer<(never)>
 "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
 "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
 "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
 "getGroup"(): StringJS
 "isSpecial"(): boolean
 "isIncomplete"(): boolean
 "getToastSymbol"(): $ItemStack
 "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
 "showNotification"(): boolean
 "getIngredients"(): $NonNullList<($Ingredient)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingRecipe$$Type = ($CraftingRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CraftingRecipe$$Original = $CraftingRecipe;}
declare module "net.minecraft.world.item.crafting.SuspiciousStewRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$CustomRecipe} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $SuspiciousStewRecipe extends $CustomRecipe {
constructor(arg0: $CraftingBookCategory$$Type)

public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SuspiciousStewRecipe$$Type = ($SuspiciousStewRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SuspiciousStewRecipe$$Original = $SuspiciousStewRecipe;}
declare module "net.minecraft.world.item.component.BlockItemStateProperties" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"

export class $BlockItemStateProperties extends $Record {
static readonly "CODEC": $Codec<($BlockItemStateProperties)>
static readonly "EMPTY": $BlockItemStateProperties
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($BlockItemStateProperties)>

constructor(arg0: $Map$$Type<(StringJS), (StringJS)>)

public "get"<T extends $Comparable<(object)>>(arg0: $Property$$Type<(T)>): T
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public "apply"(arg0: $BlockState$$Type): $BlockState
public "properties"(): $Map<(StringJS), (StringJS)>
public "with"<T extends $Comparable<(object)>>(arg0: $Property$$Type<(T)>, arg1: $BlockState$$Type): $BlockItemStateProperties
public "with"<T extends $Comparable<(object)>>(arg0: $Property$$Type<(T)>, arg1: T): $BlockItemStateProperties
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockItemStateProperties$$Type = ({"properties"?: $Map$$Type<(StringJS), (StringJS)>}) | ([properties?: $Map$$Type<(StringJS), (StringJS)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockItemStateProperties$$Original = $BlockItemStateProperties;}
declare module "net.minecraft.world.item.component.SeededContainerLoot" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Record} from "java.lang.Record"

export class $SeededContainerLoot extends $Record {
static readonly "CODEC": $Codec<($SeededContainerLoot)>

constructor(arg0: $ResourceKey$$Type<($LootTable)>, arg1: long)

public "lootTable"(): $ResourceKey<($LootTable)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "seed"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SeededContainerLoot$$Type = ({"seed"?: long, "lootTable"?: $ResourceKey$$Type<($LootTable)>}) | ([seed?: long, lootTable?: $ResourceKey$$Type<($LootTable)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SeededContainerLoot$$Original = $SeededContainerLoot;}
declare module "net.minecraft.world.item.ItemCooldowns" {
import {$Item$$Type} from "net.minecraft.world.item.Item"

export class $ItemCooldowns {
constructor()

public "tick"(): void
public "addCooldown"(arg0: $Item$$Type, arg1: integer): void
public "getCooldownPercent"(arg0: $Item$$Type, arg1: float): float
public "isOnCooldown"(arg0: $Item$$Type): boolean
public "removeCooldown"(arg0: $Item$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCooldowns$$Type = ($ItemCooldowns);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemCooldowns$$Original = $ItemCooldowns;}
declare module "net.minecraft.world.item.component.DebugStickState" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"
import {$Property, $Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"

export class $DebugStickState extends $Record {
static readonly "CODEC": $Codec<($DebugStickState)>
static readonly "EMPTY": $DebugStickState

constructor(arg0: $Map$$Type<($Holder$$Type<($Block$$Type)>), ($Property$$Type<(never)>)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "properties"(): $Map<($Holder<($Block)>), ($Property<(never)>)>
public "withProperty"(arg0: $Holder$$Type<($Block)>, arg1: $Property$$Type<(never)>): $DebugStickState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DebugStickState$$Type = ({"properties"?: $Map$$Type<($Holder$$Type<($Block$$Type)>), ($Property$$Type<(never)>)>}) | ([properties?: $Map$$Type<($Holder$$Type<($Block$$Type)>), ($Property$$Type<(never)>)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DebugStickState$$Original = $DebugStickState;}
declare module "net.minecraft.world.item.AdventureModePredicate" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List$$Type} from "java.util.List"
import {$BlockPredicate$$Type} from "net.minecraft.advancements.critereon.BlockPredicate"
import {$BlockInWorld$$Type} from "net.minecraft.world.level.block.state.pattern.BlockInWorld"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $AdventureModePredicate {
static readonly "CAN_PLACE_HEADER": $Component
static readonly "CODEC": $Codec<($AdventureModePredicate)>
static readonly "CAN_BREAK_HEADER": $Component
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AdventureModePredicate)>

constructor(arg0: $List$$Type<($BlockPredicate$$Type)>, arg1: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: $BlockInWorld$$Type): boolean
public "withTooltip"(arg0: boolean): $AdventureModePredicate
public "showInTooltip"(): boolean
public "addToTooltip"(arg0: $Consumer$$Type<($Component)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdventureModePredicate$$Type = ($AdventureModePredicate);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AdventureModePredicate$$Original = $AdventureModePredicate;}
declare module "net.minecraft.world.item.Instrument" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $Instrument extends $Record {
static readonly "CODEC": $Codec<($Holder<($Instrument)>)>
static readonly "DIRECT_CODEC": $Codec<($Instrument)>
static readonly "DIRECT_STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Instrument)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($Instrument)>)>

constructor(arg0: $Holder$$Type<($SoundEvent)>, arg1: integer, arg2: float)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "range"(): float
public "useDuration"(): integer
public "soundEvent"(): $Holder<($SoundEvent)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.Instrument
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.InstrumentTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Instrument$$Type = (Special.Instrument) | ({"soundEvent"?: $Holder$$Type<($SoundEvent)>, "useDuration"?: integer, "range"?: float}) | ([soundEvent?: $Holder$$Type<($SoundEvent)>, useDuration?: integer, range?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Instrument$$Original = $Instrument;}
declare module "net.minecraft.world.item.CreativeModeTab$TabVisibility" {
import {$Enum} from "java.lang.Enum"

export class $CreativeModeTab$TabVisibility extends $Enum<($CreativeModeTab$TabVisibility)> {
static readonly "PARENT_AND_SEARCH_TABS": $CreativeModeTab$TabVisibility
static readonly "PARENT_TAB_ONLY": $CreativeModeTab$TabVisibility
static readonly "SEARCH_TAB_ONLY": $CreativeModeTab$TabVisibility

public static "values"(): ($CreativeModeTab$TabVisibility)[]
public static "valueOf"(arg0: StringJS): $CreativeModeTab$TabVisibility
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeModeTab$TabVisibility$$Type = (("parent_and_search_tabs") | ("parent_tab_only") | ("search_tab_only"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreativeModeTab$TabVisibility$$Original = $CreativeModeTab$TabVisibility;}
declare module "net.minecraft.world.item.JukeboxSong" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Optional} from "java.util.Optional"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $JukeboxSong extends $Record {
static readonly "CODEC": $Codec<($Holder<($JukeboxSong)>)>
static readonly "DIRECT_CODEC": $Codec<($JukeboxSong)>
static readonly "DIRECT_STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($JukeboxSong)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($JukeboxSong)>)>

constructor(arg0: $Holder$$Type<($SoundEvent)>, arg1: $Component$$Type, arg2: float, arg3: integer)

public "comparatorOutput"(): integer
public "lengthInSeconds"(): float
public "hasFinished"(arg0: long): boolean
public "lengthInTicks"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "description"(): $Component
public static "fromStack"(arg0: $HolderLookup$Provider$$Type, arg1: $ItemStack$$Type): $Optional<($Holder<($JukeboxSong)>)>
public "soundEvent"(): $Holder<($SoundEvent)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.JukeboxSong
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.JukeboxSongTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JukeboxSong$$Type = (Special.JukeboxSong) | ({"comparatorOutput"?: integer, "soundEvent"?: $Holder$$Type<($SoundEvent)>, "description"?: $Component$$Type, "lengthInSeconds"?: float}) | ([comparatorOutput?: integer, soundEvent?: $Holder$$Type<($SoundEvent)>, description?: $Component$$Type, lengthInSeconds?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JukeboxSong$$Original = $JukeboxSong;}
declare module "net.minecraft.world.item.BlockItem" {
import {$FeatureFlagSet} from "net.minecraft.world.flag.FeatureFlagSet"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $BlockItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
/**
 * 
 * @deprecated
 */
 "block": $Block
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public "canFitInsideContainerItems"(): boolean
public "place"(arg0: $BlockPlaceContext$$Type): $InteractionResult
public "getBlock"(): $Block
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "setBlockEntityData"(arg0: $ItemStack$$Type, arg1: $BlockEntityType$$Type<(never)>, arg2: $CompoundTag$$Type): void
public "getDescriptionId"(): StringJS
public "requiredFeatures"(): $FeatureFlagSet
public "registerBlocks"(arg0: $Map$$Type<($Block$$Type), ($Item$$Type)>, arg1: $Item$$Type): void
public "onDestroyed"(arg0: $ItemEntity$$Type): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "updatePlacementContext"(arg0: $BlockPlaceContext$$Type): $BlockPlaceContext
/**
 * 
 * @deprecated
 */
public "removeFromBlockToItemMap"(arg0: $Map$$Type<($Block$$Type), ($Item$$Type)>, arg1: $Item$$Type): void
public static "updateCustomBlockEntityTag"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockPos$$Type, arg3: $ItemStack$$Type): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "descriptionId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockItem$$Type = ($BlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockItem$$Original = $BlockItem;}
declare module "net.minecraft.world.item.armortrim.TrimMaterial" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ArmorMaterial, $ArmorMaterial$$Type} from "net.minecraft.world.item.ArmorMaterial"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $TrimMaterial extends $Record {
static readonly "CODEC": $Codec<($Holder<($TrimMaterial)>)>
static readonly "DIRECT_CODEC": $Codec<($TrimMaterial)>
static readonly "DIRECT_STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($TrimMaterial)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($TrimMaterial)>)>

constructor(arg0: StringJS, arg1: $Holder$$Type<($Item)>, arg2: float, arg3: $Map$$Type<($Holder$$Type<($ArmorMaterial$$Type)>), (StringJS)>, arg4: $Component$$Type)

public "ingredient"(): $Holder<($Item)>
public "itemModelIndex"(): float
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "create"(arg0: StringJS, arg1: $Item$$Type, arg2: float, arg3: $Component$$Type, arg4: $Map$$Type<($Holder$$Type<($ArmorMaterial$$Type)>), (StringJS)>): $TrimMaterial
public "description"(): $Component
public "overrideArmorMaterials"(): $Map<($Holder<($ArmorMaterial)>), (StringJS)>
public "assetName"(): StringJS
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.TrimMaterial
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.TrimMaterialTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrimMaterial$$Type = (Special.TrimMaterial) | ({"assetName"?: StringJS, "itemModelIndex"?: float, "overrideArmorMaterials"?: $Map$$Type<($Holder$$Type<($ArmorMaterial$$Type)>), (StringJS)>, "ingredient"?: $Holder$$Type<($Item)>, "description"?: $Component$$Type}) | ([assetName?: StringJS, itemModelIndex?: float, overrideArmorMaterials?: $Map$$Type<($Holder$$Type<($ArmorMaterial$$Type)>), (StringJS)>, ingredient?: $Holder$$Type<($Item)>, description?: $Component$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrimMaterial$$Original = $TrimMaterial;}
declare module "net.minecraft.world.item.BucketItem" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InjectedBucketItemExtension$$Interface} from "dev.architectury.extensions.injected.InjectedBucketItemExtension"
import {$DispensibleContainerItem$$Interface} from "net.minecraft.world.item.DispensibleContainerItem"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BucketItemAccessor$$Interface} from "dev.architectury.mixin.forge.neoforge.BucketItemAccessor"

export class $BucketItem extends $Item implements $DispensibleContainerItem$$Interface, $BucketItemAccessor$$Interface, $InjectedBucketItemExtension$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "content": $Fluid
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Fluid$$Type, arg1: $Item$Properties$$Type)

public "getContent"(): $Fluid
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "handler$cpd000$architectury$fillBucket"(level: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, cir: $CallbackInfoReturnable$$Type, stack: $ItemStack$$Type, target: $BlockHitResult$$Type): void
/**
 * 
 * @deprecated
 */
public "emptyContents"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockHitResult$$Type): boolean
public "emptyContents"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockHitResult$$Type, arg4: $ItemStack$$Type): boolean
public "checkExtraContent"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $ItemStack$$Type, arg3: $BlockPos$$Type): void
public static "getEmptySuccessItem"(arg0: $ItemStack$$Type, arg1: $Player$$Type): $ItemStack
public "arch$getFluid"(): $Fluid
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BucketItem$$Type = ($BucketItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BucketItem$$Original = $BucketItem;}
declare module "net.minecraft.world.item.alchemy.PotionBrewing" {
import {$FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$Potion, $Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$List} from "java.util.List"
import {$IBrewingRecipe} from "net.neoforged.neoforge.common.brewing.IBrewingRecipe"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$BrewingRecipeRegistryAccessor$$Interface} from "dev.emi.emi.mixin.accessor.BrewingRecipeRegistryAccessor"
import {$PotionBrewing$Mix} from "net.minecraft.world.item.alchemy.PotionBrewing$Mix"
import {$Item} from "net.minecraft.world.item.Item"
import {$PotionBrewing$Builder$$Type} from "net.minecraft.world.item.alchemy.PotionBrewing$Builder"
import {$PotionBrewingAccessor$$Interface} from "com.simibubi.create.foundation.mixin.accessor.PotionBrewingAccessor"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $PotionBrewing implements $BrewingRecipeRegistryAccessor$$Interface, $PotionBrewingAccessor$$Interface {
readonly "containerMixes": $List<($PotionBrewing$Mix<($Item)>)>
readonly "containers": $List<($Ingredient)>
static readonly "BREWING_TIME_SECONDS": integer
readonly "potionMixes": $List<($PotionBrewing$Mix<($Potion)>)>
static readonly "EMPTY": $PotionBrewing

public "hasMix"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "isInput"(arg0: $ItemStack$$Type): boolean
public "isIngredient"(arg0: $ItemStack$$Type): boolean
/**
 * 
 * @deprecated
 */
public static "bootstrap"(arg0: $FeatureFlagSet$$Type): $PotionBrewing
public static "bootstrap"(arg0: $FeatureFlagSet$$Type, arg1: $RegistryAccess$$Type): $PotionBrewing
public "mix"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): $ItemStack
public "getPotionTypes"(): $List
public "getPotionRecipes"(): $List
public "getItemRecipes"(): $List
public "isBrewablePotion"(arg0: $Holder$$Type<($Potion)>): boolean
public "getRecipes"(): $List<($IBrewingRecipe)>
public "hasPotionMix"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "create$isContainer"(arg0: $ItemStack$$Type): boolean
public static "addVanillaMixes"(arg0: $PotionBrewing$Builder$$Type): void
public "isPotionIngredient"(arg0: $ItemStack$$Type): boolean
public "hasContainerMix"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "isContainerIngredient"(arg0: $ItemStack$$Type): boolean
public "create$getContainerMixes"(): $List
public "create$getPotionMixes"(): $List
get "potionTypes"(): $List
get "potionRecipes"(): $List
get "itemRecipes"(): $List
get "recipes"(): $List<($IBrewingRecipe)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionBrewing$$Type = ($PotionBrewing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PotionBrewing$$Original = $PotionBrewing;}
declare module "net.minecraft.world.item.component.ItemContainerContents" {
import {$Iterable} from "java.lang.Iterable"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$ItemContainerContents$Slot, $ItemContainerContents$Slot$$Type} from "net.minecraft.world.item.component.ItemContainerContents$Slot"
import {$Stream} from "java.util.stream.Stream"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$ContainerComponentAccessor$$Interface} from "net.fabricmc.fabric.mixin.transfer.ContainerComponentAccessor"

export class $ItemContainerContents implements $ContainerComponentAccessor$$Interface {
static readonly "CODEC": $Codec<($ItemContainerContents)>
static readonly "EMPTY": $ItemContainerContents
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ItemContainerContents)>

public "nonEmptyStream"(): $Stream<($ItemStack)>
public "fabric_getStacks"(): $NonNullList
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "stream"(): $Stream<($ItemStack)>
public "copyInto"(arg0: $NonNullList$$Type<($ItemStack$$Type)>): void
public static "fromItems"(arg0: $List$$Type<($ItemStack$$Type)>): $ItemContainerContents
public "nonEmptyItems"(): $Iterable<($ItemStack)>
public "getStackInSlot"(arg0: integer): $ItemStack
public "getSlots"(): integer
public "nonEmptyItemsCopy"(): $Iterable<($ItemStack)>
public "copyOne"(): $ItemStack
public static "fromSlots"(arg0: $List$$Type<($ItemContainerContents$Slot$$Type)>): $ItemContainerContents
public "asSlots"(): $List<($ItemContainerContents$Slot)>
get "slots"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemContainerContents$$Type = ($ItemContainerContents);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemContainerContents$$Original = $ItemContainerContents;}
declare module "net.minecraft.world.item.crafting.CustomRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CraftingBookCategory, $CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$CraftingRecipe$$Interface} from "net.minecraft.world.item.crafting.CraftingRecipe"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $CustomRecipe implements $CraftingRecipe$$Interface {
constructor(arg0: $CraftingBookCategory$$Type)

public "category"(): $CraftingBookCategory
public "isSpecial"(): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getType"(): $RecipeType<(never)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getGroup"(): StringJS
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
public "showNotification"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
get "special"(): boolean
get "type"(): $RecipeType<(never)>
get "serializer"(): $RecipeSerializer<(never)>
get "group"(): StringJS
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
get "ingredients"(): $NonNullList<($Ingredient)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomRecipe$$Type = ($CustomRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomRecipe$$Original = $CustomRecipe;}
declare module "net.minecraft.world.item.ItemStack" {
import {$EquipmentSlotGroup$$Type} from "net.minecraft.world.entity.EquipmentSlotGroup"
import {$Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Unbreakable$$Type} from "net.minecraft.world.item.component.Unbreakable"
import {$RelativeURL} from "dev.latvian.mods.kubejs.web.RelativeURL"
import {$ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$WritableBookContent$$Type} from "net.minecraft.world.item.component.WritableBookContent"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ItemCapability$$Type} from "net.neoforged.neoforge.capabilities.ItemCapability"
import {$HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$MutableDataComponentHolderFunctions} from "dev.latvian.mods.kubejs.component.MutableDataComponentHolderFunctions"
import {$SeededContainerLoot$$Type} from "net.minecraft.world.item.component.SeededContainerLoot"
import {$ItemLore$$Type} from "net.minecraft.world.item.component.ItemLore"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$RecipeMatchContext$$Type} from "dev.latvian.mods.kubejs.recipe.filter.RecipeMatchContext"
import {$SlotAccess$$Type} from "net.minecraft.world.entity.SlotAccess"
import {$BeehiveBlockEntity$Occupant$$Type} from "net.minecraft.world.level.block.entity.BeehiveBlockEntity$Occupant"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$DebugStickState$$Type} from "net.minecraft.world.item.component.DebugStickState"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$AABB} from "net.minecraft.world.phys.AABB"
import {$MapItemColor$$Type} from "net.minecraft.world.item.component.MapItemColor"
import {$Unit, $Unit$$Type} from "net.minecraft.util.Unit"
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$ComponentFunctions} from "dev.latvian.mods.kubejs.component.ComponentFunctions"
import {$FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$MutableDataComponentHolder, $MutableDataComponentHolder$$Interface} from "net.neoforged.neoforge.common.MutableDataComponentHolder"
import {$JsonElement} from "com.google.gson.JsonElement"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$BundleContents$$Type} from "net.minecraft.world.item.component.BundleContents"
import {$ItemStackAccessor$$Interface} from "net.caffeinemc.mods.lithium.mixin.util.accessors.ItemStackAccessor"
import {$LodestoneTracker$$Type} from "net.minecraft.world.item.component.LodestoneTracker"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$ItemStackKJS$$Interface} from "dev.latvian.mods.kubejs.core.ItemStackKJS"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Instrument$$Type} from "net.minecraft.world.item.Instrument"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$PatchedDataComponentMap, $PatchedDataComponentMap$$Type} from "net.minecraft.core.component.PatchedDataComponentMap"
import {$BlockInWorld$$Type} from "net.minecraft.world.level.block.state.pattern.BlockInWorld"
import {$ChargedProjectiles$$Type} from "net.minecraft.world.item.component.ChargedProjectiles"
import {$ChangeSubscriber, $ChangeSubscriber$$Type, $ChangeSubscriber$$Interface} from "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$Operation$$Type} from "com.llamalad7.mixinextras.injector.wrapoperation.Operation"
import {$DataComponentPatch, $DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$Registry} from "net.minecraft.core.Registry"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$PotDecorations$$Type} from "net.minecraft.world.level.block.entity.PotDecorations"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Iterable$$Type} from "java.lang.Iterable"
import {$MapId$$Type} from "net.minecraft.world.level.saveddata.maps.MapId"
import {$Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$MapDecorations$$Type} from "net.minecraft.world.item.component.MapDecorations"
import {$DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Optional} from "java.util.Optional"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$JukeboxPlayable$$Type} from "net.minecraft.world.item.JukeboxPlayable"
import {$CustomData$$Type} from "net.minecraft.world.item.component.CustomData"
import {$AdventureModePredicate$$Type} from "net.minecraft.world.item.AdventureModePredicate"
import {$Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$WrittenBookContent$$Type} from "net.minecraft.world.item.component.WrittenBookContent"
import {$ClickAction$$Type} from "net.minecraft.world.inventory.ClickAction"
import {$ItemEnchantments, $ItemEnchantments$$Type} from "net.minecraft.world.item.enchantment.ItemEnchantments"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$ItemFrame} from "net.minecraft.world.entity.decoration.ItemFrame"
import {$MapPostProcessing$$Type} from "net.minecraft.world.item.component.MapPostProcessing"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$TooltipProvider} from "net.minecraft.world.item.component.TooltipProvider"
import {$DyedItemColor$$Type} from "net.minecraft.world.item.component.DyedItemColor"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EnchantingContext$$Type} from "net.fabricmc.fabric.api.item.v1.EnchantingContext"
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$RecipeScriptContext$$Type} from "dev.latvian.mods.kubejs.recipe.RecipeScriptContext"
import {$DataResult} from "com.mojang.serialization.DataResult"
import {$HolderLookup$RegistryLookup$$Type} from "net.minecraft.core.HolderLookup$RegistryLookup"
import {$Rarity, $Rarity$$Type} from "net.minecraft.world.item.Rarity"
import {$LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Fireworks$$Type} from "net.minecraft.world.item.component.Fireworks"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$EnderMan$$Type} from "net.minecraft.world.entity.monster.EnderMan"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$LevelBlock$$Type} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$KubeColor$$Type} from "dev.latvian.mods.kubejs.color.KubeColor"
import {$FabricItemStack$$Interface} from "net.fabricmc.fabric.api.item.v1.FabricItemStack"
import {$ResolvableProfile$$Type} from "net.minecraft.world.item.component.ResolvableProfile"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$UUID$$Type} from "java.util.UUID"
import {$ItemAttributeModifiers$Entry$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers$Entry"
import {$List, $List$$Type} from "java.util.List"
import {$FireworkExplosion$$Type} from "net.minecraft.world.item.component.FireworkExplosion"
import {$IItemStackExtension$$Interface} from "net.neoforged.neoforge.common.extensions.IItemStackExtension"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ItemStackExtensions$$Interface} from "net.fabricmc.fabric.impl.item.ItemStackExtensions"
import {$FoodProperties, $FoodProperties$$Type} from "net.minecraft.world.food.FoodProperties"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$SuspiciousStewEffects$$Type} from "net.minecraft.world.item.component.SuspiciousStewEffects"
import {$Codec} from "com.mojang.serialization.Codec"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$LockCode$$Type} from "net.minecraft.world.LockCode"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$PotionContents$$Type} from "net.minecraft.world.item.alchemy.PotionContents"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ItemContainerContents$$Type} from "net.minecraft.world.item.component.ItemContainerContents"
import {$ArmorTrim$$Type} from "net.minecraft.world.item.armortrim.ArmorTrim"
import {$BannerPatternLayers$$Type} from "net.minecraft.world.level.block.entity.BannerPatternLayers"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$CustomModelData$$Type} from "net.minecraft.world.item.component.CustomModelData"
import {$ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$Tool$$Type} from "net.minecraft.world.item.component.Tool"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$DataComponentHolder$$Type, $DataComponentHolder$$Interface} from "net.minecraft.core.component.DataComponentHolder"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$ChangePublisher$$Interface} from "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangePublisher"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockItemStateProperties$$Type} from "net.minecraft.world.item.component.BlockItemStateProperties"

/**
 * 
 * @deprecated
 */
export class $ItemStack implements $DataComponentHolder$$Interface, $MutableDataComponentHolder$$Interface, $IItemStackExtension$$Interface, $ItemStackAccessor$$Interface, $ChangeSubscriber$$Interface, $ChangePublisher$$Interface, $ItemStackExtensions$$Interface, $FabricItemStack$$Interface, $ItemStackKJS$$Interface {
readonly "components": $PatchedDataComponentMap
static readonly "CODEC": $Codec<($ItemStack)>
static readonly "ITEM_NON_AIR_CODEC": $Codec<($Holder<($Item)>)>
static readonly "OPTIONAL_CODEC": $Codec<($ItemStack)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ItemStack)>
static readonly "SIMPLE_ITEM_CODEC": $Codec<($ItemStack)>
static readonly "LIST_STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($List<($ItemStack)>)>
static readonly "SINGLE_ITEM_CODEC": $Codec<($ItemStack)>
static readonly "STRICT_CODEC": $Codec<($ItemStack)>
static readonly "STRICT_SINGLE_ITEM_CODEC": $Codec<($ItemStack)>
static readonly "OPTIONAL_STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ItemStack)>
static readonly "EMPTY": $ItemStack
static readonly "OPTIONAL_LIST_STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($List<($ItemStack)>)>

constructor(arg0: $ItemLike$$Type)
constructor(arg0: $Holder$$Type<($Item)>, arg1: integer, arg2: $DataComponentPatch$$Type)
constructor(arg0: $Holder$$Type<($Item)>)
constructor(arg0: $Holder$$Type<($Item)>, arg1: integer)
constructor(arg0: $ItemLike$$Type, arg1: integer)

public "getFrame"(): $ItemFrame
public "isFramed"(): boolean
public "handler$coo000$deeperdarker$getTooltipLines"(arg0: $Item$TooltipContext$$Type, arg1: $Player$$Type, arg2: $TooltipFlag$$Type, arg3: $CallbackInfoReturnable$$Type): void
public "setPopTime"(arg0: integer): void
public "getPopTime"(): integer
public "isComponentsPatchEmpty"(): boolean
public static "validatedStreamCodec"(arg0: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), ($ItemStack$$Type)>): $StreamCodec<($RegistryFriendlyByteBuf), ($ItemStack)>
public "applyComponentsAndValidate"(arg0: $DataComponentPatch$$Type): void
public "hurtAndConvertOnBreak"(arg0: integer, arg1: $ItemLike$$Type, arg2: $LivingEntity$$Type, arg3: $EquipmentSlot$$Type): $ItemStack
public "getEntityRepresentation"(): $Entity
public static "hashItemAndComponents"(arg0: $ItemStack$$Type): integer
public "hasFoil"(): boolean
public "onUseTick"(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: integer): void
public "toString"(): StringJS
public "update"<T>(arg0: $DataComponentType$$Type<(T)>, arg1: T, arg2: $UnaryOperator$$Type<(T)>): T
public "update"<T, U>(arg0: $DataComponentType$$Type<(T)>, arg1: T, arg2: U, arg3: $BiFunction$$Type<(T), (U), (T)>): T
public "isEmpty"(): boolean
public static "matches"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "split"(arg0: integer): $ItemStack
public "getCount"(): integer
public "save"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): $Tag
public "save"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "parse"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): $Optional<($ItemStack)>
public "copy"(): $ItemStack
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "is"(arg0: $HolderSet$$Type<($Item)>): boolean
public "is"(arg0: $Item$$Type): boolean
public "is"(arg0: $TagKey$$Type<($Item)>): boolean
public "is"(arg0: $Holder$$Type<($Item)>): boolean
public "is"(arg0: $Predicate$$Type<($Holder<($Item)>)>): boolean
public "grow"(arg0: integer): void
public "getDisplayName"(): $Component
public "consume"(arg0: integer, arg1: $LivingEntity$$Type): void
public "getItem"(): $Item
public "lithium$forceUnsubscribe"(arg0: any, arg1: integer): void
public "lithium$forceUnsubscribe"(arg0: $PatchedDataComponentMap$$Type, arg1: integer): void
public "fabric_setLivingEntity"(arg0: $LivingEntity$$Type): void
public "isCorrectToolForDrops"(arg0: $BlockState$$Type): boolean
public "interactLivingEntity"(arg0: $Player$$Type, arg1: $LivingEntity$$Type, arg2: $InteractionHand$$Type): $InteractionResult
public "limitSize"(arg0: integer): void
public "setCount"(arg0: integer): void
public "overrideStackedOnOther"(arg0: $Slot$$Type, arg1: $ClickAction$$Type, arg2: $Player$$Type): boolean
public "overrideOtherStackedOnMe"(arg0: $ItemStack$$Type, arg1: $Slot$$Type, arg2: $ClickAction$$Type, arg3: $Player$$Type, arg4: $SlotAccess$$Type): boolean
public "fabric_getLivingEntity"(): $LivingEntity
public "onItemUseFirst"(arg0: $UseOnContext$$Type): $InteractionResult
public "isDamageableItem"(): boolean
public "canBeHurtBy"(arg0: $DamageSource$$Type): boolean
public "transmuteCopy"(arg0: $ItemLike$$Type, arg1: integer): $ItemStack
public "transmuteCopy"(arg0: $ItemLike$$Type): $ItemStack
public "getTagEnchantments"(): $ItemEnchantments
public "consumeAndReturn"(arg0: integer, arg1: $LivingEntity$$Type): $ItemStack
public "resetComponents"(): this
public "onCraftedBySystem"(arg0: $Level$$Type): void
public "copyAndClear"(): $ItemStack
public "getItemHolder"(): $Holder<($Item)>
public "wrapOperation$bpn001$geckolib$removeGeckolibIdOnCopy"(arg0: $ItemStack$$Type, arg1: integer, arg2: $Operation$$Type): $ItemStack
public "setEntityRepresentation"(arg0: $Entity$$Type): void
public "lithium$unsubscribe"(arg0: $ChangeSubscriber$$Type): integer
public static "isSameItemSameComponents"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "getDrinkingSound"(): $SoundEvent
public "getEatingSound"(): $SoundEvent
public "forEachModifier"(arg0: $EquipmentSlotGroup$$Type, arg1: $BiConsumer$$Type<($Holder<($Attribute)>), ($AttributeModifier)>): void
public "forEachModifier"(arg0: $EquipmentSlot$$Type, arg1: $BiConsumer$$Type<($Holder<($Attribute)>), ($AttributeModifier)>): void
public "releaseUsing"(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: integer): void
public "getUseDuration"(arg0: $LivingEntity$$Type): integer
public "useOnRelease"(): boolean
public "getUseAnimation"(): $UseAnim
public "finishUsingItem"(arg0: $Level$$Type, arg1: $LivingEntity$$Type): $ItemStack
public "lithium$subscribe"(arg0: $ChangeSubscriber$$Type, arg1: integer): void
public "lithium$notify"(arg0: any, arg1: integer): void
public "lithium$notify"(arg0: $PatchedDataComponentMap$$Type, arg1: integer): void
public "hurtAndBreak"(arg0: integer, arg1: $ServerLevel$$Type, arg2: $LivingEntity$$Type, arg3: $Consumer$$Type<($Item)>): void
public "hurtAndBreak"(arg0: integer, arg1: $LivingEntity$$Type, arg2: $EquipmentSlot$$Type): void
public "hurtAndBreak"(arg0: integer, arg1: $ServerLevel$$Type, arg2: $ServerPlayer$$Type, arg3: $Consumer$$Type<($Item)>): void
public "postHurtEnemy"(arg0: $LivingEntity$$Type, arg1: $Player$$Type): void
public "getDestroySpeed"(arg0: $BlockState$$Type): float
public "getRarity"(): $Rarity
public "getComponentsPatch"(): $DataComponentPatch
public static "parseOptional"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $ItemStack
public "setDamageValue"(arg0: integer): void
public "shrink"(arg0: integer): void
public "getComponents"(): $DataComponentMap
public "getPrototype"(): $DataComponentMap
public "getHoverName"(): $Component
public "getBarWidth"(): integer
public "getTooltipLines"(arg0: $Item$TooltipContext$$Type, arg1: $Player$$Type, arg2: $TooltipFlag$$Type): $List<($Component)>
public "getBarColor"(): integer
public "isBarVisible"(): boolean
public "getTooltipImage"(): $Optional<($TooltipComponent)>
public "getMaxStackSize"(): integer
public "getDescriptionId"(): StringJS
public "isItemEnabled"(arg0: $FeatureFlagSet$$Type): boolean
public "isStackable"(): boolean
public static "lenientOptionalFieldOf"(arg0: StringJS): $MapCodec<($ItemStack)>
public "canBreakBlockInAdventureMode"(arg0: $BlockInWorld$$Type): boolean
public "lithium$unsubscribeWithData"(arg0: $ChangeSubscriber$$Type, arg1: integer): void
public "lithium$isSubscribedWithData"(arg0: $ChangeSubscriber$$Type, arg1: integer): boolean
public "mineBlock"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): void
public "isDamaged"(): boolean
public "getMaxDamage"(): integer
public "getDamageValue"(): integer
public "inventoryTick"(arg0: $Level$$Type, arg1: $Entity$$Type, arg2: integer, arg3: boolean): void
public "isEnchantable"(): boolean
public "isEnchanted"(): boolean
public "onCraftedBy"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: integer): void
public static "validateComponents"(arg0: $DataComponentMap$$Type): $DataResult<($Unit)>
/**
 * 
 * @deprecated
 */
public "onDestroyed"(arg0: $ItemEntity$$Type): void
public "getBreakingSound"(): $SoundEvent
public "canPlaceOnBlockInAdventureMode"(arg0: $BlockInWorld$$Type): boolean
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "copyWithCount"(arg0: integer): $ItemStack
/**
 * 
 * @deprecated
 */
public static "listMatches"(arg0: $List$$Type<($ItemStack$$Type)>, arg1: $List$$Type<($ItemStack$$Type)>): boolean
public "saveOptional"(arg0: $HolderLookup$Provider$$Type): $Tag
/**
 * 
 * @deprecated
 */
public static "hashStackList"(arg0: $List$$Type<($ItemStack$$Type)>): integer
public "addToTooltip"<T extends $TooltipProvider>(arg0: $DataComponentType$$Type<(T)>, arg1: $Item$TooltipContext$$Type, arg2: $Consumer$$Type<($Component)>, arg3: $TooltipFlag$$Type): void
public "lithium$getItem"(): $Item
public static "isSameItem"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "hurtEnemy"(arg0: $LivingEntity$$Type, arg1: $Player$$Type): boolean
public "get"<T>(arg0: $DataComponentType$$Type<(T)>): T
public "getOrDefault"<T>(arg0: $DataComponentType$$Type<(T)>, arg1: T): T
public "has"(arg0: $DataComponentType$$Type<(never)>): boolean
public "update"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: T, arg2: $UnaryOperator$$Type<(T)>): T
public "update"<T, U>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: T, arg2: U, arg3: $BiFunction$$Type<(T), (U), (T)>): T
public "copyFrom"(arg0: $DataComponentHolder$$Type, ...arg1: ($Supplier$$Type<($DataComponentType$$Type<(never)>)>)[]): void
public "copyFrom"(arg0: $DataComponentHolder$$Type, ...arg1: ($DataComponentType$$Type<(never)>)[]): void
public "isNotReplaceableByPickAction"(arg0: $Player$$Type, arg1: integer): boolean
public "canEquip"(arg0: $EquipmentSlot$$Type, arg1: $LivingEntity$$Type): boolean
public "canFitInsideContainerItems"(): boolean
public "getCraftingRemainingItem"(): $ItemStack
public "getEnchantmentValue"(): integer
public "hasCraftingRemainingItem"(): boolean
public "supportsEnchantment"(arg0: $Holder$$Type<($Enchantment)>): boolean
public "canGrindstoneRepair"(): boolean
public "getEnchantmentLevel"(arg0: $Holder$$Type<($Enchantment)>): integer
public "shouldCauseBlockBreakReset"(arg0: $ItemStack$$Type): boolean
public "isPiglinCurrency"(): boolean
public "doesSneakBypassUse"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type): boolean
public "onEntityItemUpdate"(arg0: $ItemEntity$$Type): boolean
public "onDroppedByPlayer"(arg0: $Player$$Type): boolean
public "getEntityLifespan"(arg0: $Level$$Type): integer
public "getHighlightTip"(arg0: $Component$$Type): $Component
public "isBookEnchantable"(arg0: $ItemStack$$Type): boolean
public "isPrimaryItemFor"(arg0: $Holder$$Type<($Enchantment)>): boolean
public "getXpRepairRatio"(): float
public "getAllEnchantments"(arg0: $HolderLookup$RegistryLookup$$Type<($Enchantment$$Type)>): $ItemEnchantments
public "getBurnTime"(arg0: $RecipeType$$Type<(never)>): integer
public "onAnimalArmorTick"(arg0: $Level$$Type, arg1: $Mob$$Type): void
public "isEnderMask"(arg0: $Player$$Type, arg1: $EnderMan$$Type): boolean
public "getAttributeModifiers"(): $ItemAttributeModifiers
public "handler$zld000$fabric_entity_events_v1$canElytraFly"(arg0: $LivingEntity$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "makesPiglinsNeutral"(arg0: $LivingEntity$$Type): boolean
public "canWalkOnPowderedSnow"(arg0: $LivingEntity$$Type): boolean
public "onEntitySwing"(arg0: $LivingEntity$$Type, arg1: $InteractionHand$$Type): boolean
/**
 * 
 * @deprecated
 */
public "onEntitySwing"(arg0: $LivingEntity$$Type): boolean
public "elytraFlightTick"(arg0: $LivingEntity$$Type, arg1: integer): boolean
public "canDisableShield"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public "canPerformAction"(arg0: $ItemAbility$$Type): boolean
public "onStopUsing"(arg0: $LivingEntity$$Type, arg1: integer): void
public "getFoodProperties"(arg0: $LivingEntity$$Type): $FoodProperties
public "getSweepHitBox"(arg0: $Player$$Type, arg1: $Entity$$Type): $AABB
public "canElytraFly"(arg0: $LivingEntity$$Type): boolean
public "getCapability"<T>(arg0: $ItemCapability$$Type<(T), (void)>): T
public "getCapability"<T, C>(arg0: $ItemCapability$$Type<(T), (C)>, arg1: C): T
public "isRepairable"(): boolean
public "onDestroyed"(arg0: $ItemEntity$$Type, arg1: $DamageSource$$Type): void
public "getEquipmentSlot"(): $EquipmentSlot
public static "dataOf"(arg0: $ChangeSubscriber$$Type<(never)>, arg1: $ChangeSubscriber$$Type<(never)>, arg2: integer): integer
public static "combine"<T>(arg0: $ChangeSubscriber$$Type<(any)>, arg1: integer, arg2: $ChangeSubscriber$$Type<(any)>, arg3: integer): $ChangeSubscriber<(any)>
public static "without"<T>(arg0: $ChangeSubscriber$$Type<(any)>, arg1: $ChangeSubscriber$$Type<(any)>): $ChangeSubscriber<(any)>
public static "without"<T>(arg0: $ChangeSubscriber$$Type<(any)>, arg1: $ChangeSubscriber$$Type<(any)>, arg2: integer, arg3: boolean): $ChangeSubscriber<(any)>
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(any)>, arg1: $ChangeSubscriber$$Type<(any)>, arg2: integer, arg3: integer, arg4: boolean): integer
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(any)>, arg1: $ChangeSubscriber$$Type<(any)>, arg2: integer): integer
public static "containsSubscriber"(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: integer, arg2: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg3: integer): boolean
public "getRecipeRemainder"(): $ItemStack
public "canBeEnchantedWith"(arg0: $Holder$$Type<($Enchantment)>, arg1: $EnchantingContext$$Type): boolean
public "toStringJS"(): StringJS
public "getId"(): Special.Item
public "matches"(cx: $RecipeMatchContext$$Type, arg1: $Ingredient$$Type, exact: boolean): boolean
public "matches"(cx: $RecipeMatchContext$$Type, s: $ItemStack$$Type, exact: boolean): boolean
public "matches"(cx: $RecipeMatchContext$$Type, itemLike: $ItemLike$$Type, exact: boolean): boolean
public "getComponentString"(): StringJS
public "getWebIconURL"(ops: $DynamicOps$$Type<($Tag$$Type)>, size: integer): $RelativeURL
public "getBlock"(): $Block
public "getMod"(): StringJS
public "getHarvestSpeed"(block: $LevelBlock$$Type): float
public "getHarvestSpeed"(): float
public "equalsIgnoringCount"(stack: $ItemStack$$Type): boolean
public "getEnchantments"(): $ItemEnchantments
public "areComponentsEqual"(other: $ItemStack$$Type): boolean
public "getIdLocation"(): $ResourceLocation
public "getRegistryId"(): $ResourceKey<($Registry<($Item)>)>
public "getRegistry"(): $Registry<($Item)>
public "asHolder"(): $Holder<($Item)>
public "replaceThisWith"(cx: $RecipeScriptContext$$Type, arg1: any): any
public "getTypeData"(): $Map<(StringJS), (any)>
public "getKey"(): $ResourceKey<($Item)>
public "self"(): $ItemStack
public "getCodec"(): $Codec<($ItemStack)>
public "asIngredient"(): $Ingredient
public "specialEquals"(o: any, shallow: boolean): boolean
public "withCount"(c: integer): this
public "withLore"(lines: ($Component$$Type)[], styledLines: ($Component$$Type)[]): this
public "withLore"(lines: ($Component$$Type)[]): this
public "toItemString0"(dynamicOps: $DynamicOps$$Type<($Tag$$Type)>): StringJS
/**
 * 
 * @deprecated
 */
public "withChance"(chance: float): $ItemStack
public "withCustomName"(name: $Component$$Type): this
public "hasEnchantment"(enchantment: $Holder$$Type<($Enchantment)>, level: integer): boolean
public "enchant"(enchantment: $Holder$$Type<($Enchantment)>, level: integer): this
public "enchant"(enchantments: $ItemEnchantments$$Type): this
public "areItemsEqual"(other: $ItemStack$$Type): boolean
public "toItemString"(): StringJS
public "get"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>): T
public "getOrDefault"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: T): T
public "has"(arg0: $Supplier$$Type<($DataComponentType$$Type<(never)>)>): boolean
public "addToTooltip"<T extends $TooltipProvider>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: $Item$TooltipContext$$Type, arg2: $Consumer$$Type<($Component)>, arg3: $TooltipFlag$$Type): void
public "getComponentMap"(): $DataComponentMap
public "patch"(components: $DataComponentPatch$$Type): $ComponentFunctions
public "getComponentHolder"(): $MutableDataComponentHolder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public "toJson"(): $JsonElement
public "toNBT"(): $Tag
public static "toStringJS"(arg1: any): StringJS
public "setUnbreakableWithTooltip"(): void
public "setMaxStackSize"(size: integer): void
public "setMapItemColor"(color: $KubeColor$$Type): void
public "setBundleContents"(items: $List$$Type<($ItemStack$$Type)>): void
public "setBucketEntityData"(tag: $CompoundTag$$Type): void
public "setFireworkExplosion"(explosion: $FireworkExplosion$$Type): void
public "setBlockEntityData"(tag: $CompoundTag$$Type): void
public "setFireResistant"(): void
public "setNoteBlockSound"(id: $ResourceLocation$$Type): void
public "getAttributeModifiers"(): $ItemAttributeModifiers
public "setChargedProjectiles"(items: $List$$Type<($ItemStack$$Type)>): void
public "setInstrument"(instrument: $Holder$$Type<($Instrument)>): void
public "setUnbreakable"(): void
public "setItemName"(component: $Component$$Type): void
public "setRepairCost"(repairCost: integer): void
public "setTool"(tool: $Tool$$Type): void
public "setFood"(foodProperties: $FoodProperties$$Type): void
public "setFood"(nutrition: integer, saturation: float): void
public "setFireworks"(fireworks: $Fireworks$$Type): void
public "setDamage"(damage: integer): void
public "setMaxDamage"(maxDamage: integer): void
public "matchesAny"(cx: $RecipeMatchContext$$Type, itemLikes: $Iterable$$Type<($ItemLike$$Type)>, exact: boolean): boolean
public "hasTag"(tag: $ResourceLocation$$Type): boolean
public "getTagKeys"(): $List<($TagKey<($Item)>)>
public "getTags"(): $List<($ResourceLocation)>
public "setAdditionalTooltipHidden"(): void
public "setDyedColorWithTooltip"(color: $KubeColor$$Type): void
public "setBlockStateProperties"(properties: $Map$$Type<(StringJS), (StringJS)>): void
public "setCustomModelData"(data: integer): void
public "setContainerLootTable"(lootTable: $ResourceKey$$Type<($LootTable)>, seed: long): void
public "setContainerLootTable"(lootTable: $ResourceKey$$Type<($LootTable)>): void
public "setTooltipHidden"(): void
public "setPotionContents"(contents: $PotionContents$$Type): void
public "setGlintOverride"(override: boolean): void
public "get"<T>(type: $DataComponentType$$Type<(T)>): T
public "remove"(type: $DataComponentType$$Type<(never)>): $ComponentFunctions
public "setDyedColor"(color: $KubeColor$$Type): void
public "setCustomData"(tag: $CompoundTag$$Type): void
public "setProfile"(profile: $GameProfile$$Type): void
public "setProfile"(name: StringJS, uuid: $UUID$$Type): void
public "setUnit"(component: $DataComponentType$$Type<($Unit$$Type)>): $ComponentFunctions
public "setPotionId"(potion: $Holder$$Type<($Potion)>): void
public "getCustomData"(): $CompoundTag
public "setLockCode"(lock: StringJS): void
public "getCustomName"(): $Component
public "setLore"(lines: $List$$Type<($Component$$Type)>, styledLines: $List$$Type<($Component$$Type)>): void
public "setLore"(lines: $List$$Type<($Component$$Type)>): void
public "setEntityData"(tag: $CompoundTag$$Type): void
public "setRarity"(rarity: $Rarity$$Type): void
public "setBaseColor"(color: $DyeColor$$Type): void
public "setCustomName"(name: $Component$$Type): void
public "getBaseAttackDamage"(): double
/**
 * Sets the attack damage of this item to the given value, **removing** all other modifiers to attack damage.
 * Note that since players have a default attack damage of 1.0, total damage will be (dmg + 1.0) before other modifiers.
 * (In practice, this simply means that most weapons have this value set to 1 less than what you might think.)
 */
public "setAttackDamage"(dmg: double): void
public "hasAttributeModifier"(attribute: $Holder$$Type<($Attribute)>, id: $ResourceLocation$$Type): boolean
public "getBaseAttackSpeed"(): double
public "setAttributeModifiers"(modifiers: $List$$Type<($ItemAttributeModifiers$Entry$$Type)>): void
/**
 * Overrides the *base* attack speed of this item to be the given value, keeping other modifiers intact.
 * Note that players have a default attack speed of 4.0, so this modifier is added on top of that.
 */
public "setBaseAttackSpeed"(speed: double): void
/**
 * Overrides the *base* attack damage of this item to be the given value, keeping other modifiers intact.
 * Note that since players have a default attack damage of 1.0, total damage will be (dmg + 1.0) before other modifiers.
 */
public "setBaseAttackDamage"(dmg: double): void
public "addAttributeModifier"(attribute: $Holder$$Type<($Attribute)>, mod: $AttributeModifier$$Type, slot: $EquipmentSlotGroup$$Type): void
public "getAttributeModifier"(attribute: $Holder$$Type<($Attribute)>, id: $ResourceLocation$$Type): $AttributeModifier
public "getAttackDamage"(): double
public "setAttributeModifiersWithTooltip"(modifiers: $List$$Type<($ItemAttributeModifiers$Entry$$Type)>): void
/**
 * Sets the attack speed of this item to the given value, **removing** all other modifiers to attack speed.
 * Note that players have a default attack speed of 4.0, so this modifier is added on top of that.
 * (Example: Swords have an attack speed of -2.4, leading to a total value of 1.6 without any other changes.)
 */
public "setAttackSpeed"(speed: double): void
public "getAttackSpeed"(): double
public static "wrap"(o: any): $ReplacementMatch
public "set"<T extends ComponentTypes>(componentType: T, value: ComponentTypeMap[T]): $ItemStack
get "frame"(): $ItemFrame
get "framed"(): boolean
set "popTime"(value: integer)
get "popTime"(): integer
get "componentsPatchEmpty"(): boolean
get "entityRepresentation"(): $Entity
get "empty"(): boolean
get "count"(): integer
get "displayName"(): $Component
get "item"(): $Item
set "count"(value: integer)
get "damageableItem"(): boolean
get "tagEnchantments"(): $ItemEnchantments
get "itemHolder"(): $Holder<($Item)>
set "entityRepresentation"(value: $Entity$$Type)
get "drinkingSound"(): $SoundEvent
get "eatingSound"(): $SoundEvent
get "useAnimation"(): $UseAnim
get "rarity"(): $Rarity
get "componentsPatch"(): $DataComponentPatch
set "damageValue"(value: integer)
get "prototype"(): $DataComponentMap
get "hoverName"(): $Component
get "barWidth"(): integer
get "barColor"(): integer
get "barVisible"(): boolean
get "tooltipImage"(): $Optional<($TooltipComponent)>
get "maxStackSize"(): integer
get "descriptionId"(): StringJS
get "stackable"(): boolean
get "damaged"(): boolean
get "maxDamage"(): integer
get "damageValue"(): integer
get "enchantable"(): boolean
get "enchanted"(): boolean
get "breakingSound"(): $SoundEvent
get "craftingRemainingItem"(): $ItemStack
get "enchantmentValue"(): integer
get "piglinCurrency"(): boolean
get "xpRepairRatio"(): float
get "attributeModifiers"(): $ItemAttributeModifiers
get "repairable"(): boolean
get "equipmentSlot"(): $EquipmentSlot
get "recipeRemainder"(): $ItemStack
get "id"(): Special.Item
get "componentString"(): StringJS
get "block"(): $Block
get "mod"(): StringJS
get "harvestSpeed"(): float
get "enchantments"(): $ItemEnchantments
get "idLocation"(): $ResourceLocation
get "registryId"(): $ResourceKey<($Registry<($Item)>)>
get "registry"(): $Registry<($Item)>
get "typeData"(): $Map<(StringJS), (any)>
get "key"(): $ResourceKey<($Item)>
get "codec"(): $Codec<($ItemStack)>
get "componentMap"(): $DataComponentMap
get "componentHolder"(): $MutableDataComponentHolder
get "unbreakableWithTooltip"(): void
set "maxStackSize"(value: integer)
set "mapItemColor"(value: $KubeColor$$Type)
set "bundleContents"(value: $List$$Type<($ItemStack$$Type)>)
set "bucketEntityData"(value: $CompoundTag$$Type)
set "fireworkExplosion"(value: $FireworkExplosion$$Type)
set "blockEntityData"(value: $CompoundTag$$Type)
get "fireResistant"(): void
set "noteBlockSound"(value: $ResourceLocation$$Type)
get "attributeModifiers"(): $ItemAttributeModifiers
set "chargedProjectiles"(value: $List$$Type<($ItemStack$$Type)>)
set "instrument"(value: $Holder$$Type<($Instrument)>)
get "unbreakable"(): void
set "itemName"(value: $Component$$Type)
set "repairCost"(value: integer)
set "tool"(value: $Tool$$Type)
set "food"(value: $FoodProperties$$Type)
set "fireworks"(value: $Fireworks$$Type)
set "damage"(value: integer)
set "maxDamage"(value: integer)
get "tagKeys"(): $List<($TagKey<($Item)>)>
get "tags"(): $List<($ResourceLocation)>
get "additionalTooltipHidden"(): void
set "dyedColorWithTooltip"(value: $KubeColor$$Type)
set "blockStateProperties"(value: $Map$$Type<(StringJS), (StringJS)>)
set "customModelData"(value: integer)
set "containerLootTable"(value: $ResourceKey$$Type<($LootTable)>)
get "tooltipHidden"(): void
set "potionContents"(value: $PotionContents$$Type)
set "glintOverride"(value: boolean)
set "dyedColor"(value: $KubeColor$$Type)
set "customData"(value: $CompoundTag$$Type)
set "profile"(value: $GameProfile$$Type)
set "unit"(value: $DataComponentType$$Type<($Unit$$Type)>)
set "potionId"(value: $Holder$$Type<($Potion)>)
get "customData"(): $CompoundTag
set "lockCode"(value: StringJS)
get "customName"(): $Component
set "lore"(value: $List$$Type<($Component$$Type)>)
set "entityData"(value: $CompoundTag$$Type)
set "rarity"(value: $Rarity$$Type)
set "baseColor"(value: $DyeColor$$Type)
set "customName"(value: $Component$$Type)
get "baseAttackDamage"(): double
set "attackDamage"(value: double)
get "baseAttackSpeed"(): double
set "attributeModifiers"(value: $List$$Type<($ItemAttributeModifiers$Entry$$Type)>)
set "baseAttackSpeed"(value: double)
set "baseAttackDamage"(value: double)
get "attackDamage"(): double
set "attributeModifiersWithTooltip"(value: $List$$Type<($ItemAttributeModifiers$Entry$$Type)>)
set "attackSpeed"(value: double)
get "attackSpeed"(): double
}
export type ComponentTypeMap = {"minecraft:enchantment_glint_override": boolean;
"minecraft:potion_contents": $PotionContents$$Type;
"minecraft:pot_decorations": $PotDecorations$$Type;
"minecraft:map_post_processing": $MapPostProcessing$$Type;
"minecraft:profile": $ResolvableProfile$$Type;
"minecraft:recipes": $List$$Type<($ResourceLocation$$Type)>;
"minecraft:firework_explosion": $FireworkExplosion$$Type;
"minecraft:debug_stick_state": $DebugStickState$$Type;
"minecraft:hide_additional_tooltip": $Unit$$Type;
"minecraft:written_book_content": $WrittenBookContent$$Type;
"minecraft:fire_resistant": $Unit$$Type;
"minecraft:stored_enchantments": $ItemEnchantments$$Type;
"minecraft:damage": integer;
"minecraft:unbreakable": $Unbreakable$$Type;
"minecraft:custom_data": $CustomData$$Type;
"minecraft:tool": $Tool$$Type;
"minecraft:bees": $List$$Type<($BeehiveBlockEntity$Occupant$$Type)>;
"minecraft:food": $FoodProperties$$Type;
"minecraft:max_damage": integer;
"minecraft:lodestone_tracker": $LodestoneTracker$$Type;
"minecraft:block_entity_data": $CustomData$$Type;
"minecraft:container": $ItemContainerContents$$Type;
"minecraft:repair_cost": integer;
"minecraft:bucket_entity_data": $CustomData$$Type;
"minecraft:custom_model_data": $CustomModelData$$Type;
"minecraft:block_state": $BlockItemStateProperties$$Type;
"minecraft:creative_slot_lock": $Unit$$Type;
"minecraft:writable_book_content": $WritableBookContent$$Type;
"minecraft:jukebox_playable": $JukeboxPlayable$$Type;
"minecraft:lore": $ItemLore$$Type;
"minecraft:custom_name": $Component$$Type;
"minecraft:container_loot": $SeededContainerLoot$$Type;
"minecraft:map_id": $MapId$$Type;
"minecraft:dyed_color": $DyedItemColor$$Type;
"minecraft:intangible_projectile": $Unit$$Type;
"minecraft:item_name": $Component$$Type;
"minecraft:fireworks": $Fireworks$$Type;
"minecraft:max_stack_size": integer;
"minecraft:trim": $ArmorTrim$$Type;
"minecraft:map_color": $MapItemColor$$Type;
"minecraft:enchantments": $ItemEnchantments$$Type;
"minecraft:can_break": $AdventureModePredicate$$Type;
"minecraft:can_place_on": $AdventureModePredicate$$Type;
"minecraft:ominous_bottle_amplifier": integer;
"minecraft:suspicious_stew_effects": $SuspiciousStewEffects$$Type;
"minecraft:banner_patterns": $BannerPatternLayers$$Type;
"minecraft:map_decorations": $MapDecorations$$Type;
"minecraft:bundle_contents": $BundleContents$$Type;
"minecraft:note_block_sound": $ResourceLocation$$Type;
"minecraft:entity_data": $CustomData$$Type;
"minecraft:base_color": $DyeColor$$Type;
"minecraft:hide_tooltip": $Unit$$Type;
"minecraft:instrument": $Holder$$Type<($Instrument$$Type)>;
"minecraft:rarity": $Rarity$$Type;
"minecraft:charged_projectiles": $ChargedProjectiles$$Type;
"minecraft:attribute_modifiers": $ItemAttributeModifiers$$Type;
"minecraft:lock": $LockCode$$Type};
export type ComponentTypes = keyof ComponentTypeMap;
export type ItemWithCount = {"item": Special.Item, "count"?: integer};
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStack$$Type = ((Special.Item)) | (ItemWithCount);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemStack$$Original = $ItemStack;}
declare module "net.minecraft.world.item.crafting.Ingredient" {
import {$Iterable$$Type} from "java.lang.Iterable"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStackSet} from "dev.latvian.mods.kubejs.item.ItemStackSet"
import {$IngredientKJS$$Interface} from "dev.latvian.mods.kubejs.core.IngredientKJS"
import {$DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$JsonElement} from "com.google.gson.JsonElement"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ItemPredicate} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set} from "java.util.Set"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$AccessorIngredient$$Interface} from "com.railwayteam.railways.mixin.AccessorIngredient"
import {$Ingredient$Value, $Ingredient$Value$$Type} from "net.minecraft.world.item.crafting.Ingredient$Value"
import {$RecipeScriptContext$$Type} from "dev.latvian.mods.kubejs.recipe.RecipeScriptContext"
import {$Predicate, $Predicate$$Type, $Predicate$$Interface} from "java.util.function.Predicate"
import {$CustomIngredient} from "net.fabricmc.fabric.api.recipe.v1.ingredient.CustomIngredient"
import {$RecipeMatchContext$$Type} from "dev.latvian.mods.kubejs.recipe.filter.RecipeMatchContext"
import {$FabricIngredient$$Interface} from "net.fabricmc.fabric.api.recipe.v1.ingredient.FabricIngredient"
import {$ExtendedIngredient$$Interface} from "org.embeddedt.modernfix.neoforge.recipe.ExtendedIngredient"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$ICustomIngredient$$Type} from "net.neoforged.neoforge.common.crafting.ICustomIngredient"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$IntList} from "it.unimi.dsi.fastutil.ints.IntList"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$SizedIngredient} from "net.neoforged.neoforge.common.crafting.SizedIngredient"

export class $Ingredient implements $Predicate$$Interface<($ItemStack)>, $ExtendedIngredient$$Interface, $FabricIngredient$$Interface, $AccessorIngredient$$Interface, $IngredientKJS$$Interface {
static readonly "CODEC": $Codec<($Ingredient)>
static readonly "LIST_CODEC_NONEMPTY": $Codec<($List<($Ingredient)>)>
 "stackingIds": $IntList
static readonly "CODEC_NONEMPTY": $Codec<($Ingredient)>
static readonly "CONTENTS_STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Ingredient)>
 "values": ($Ingredient$Value)[]
static readonly "LIST_CODEC": $Codec<($List<($Ingredient)>)>
 "itemStacks": ($ItemStack)[]
static readonly "EMPTY": $Ingredient
static readonly "MAP_CODEC_NONEMPTY": $MapCodec<($Ingredient)>

constructor(arg0: $Stream$$Type<($Ingredient$Value$$Type)>)
constructor(arg0: $ICustomIngredient$$Type)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "test"(arg0: any): boolean
public "test"(arg0: $ItemStack$$Type): boolean
public "isEmpty"(): boolean
public static "of"(...arg0: ($ItemStack$$Type)[]): $Ingredient
public static "of"(...arg0: ($ItemLike$$Type)[]): $Ingredient
public static "of"(arg0: $Stream$$Type<($ItemStack$$Type)>): $Ingredient
public static "of"(arg0: $TagKey$$Type<($Item)>): $Ingredient
public static "of"(): $Ingredient
public "isSimple"(): boolean
public "canBeUsedForMatching"(): boolean
public "mfix$clearReference"(): void
public "getCustomIngredient"(): $CustomIngredient
public "getValues"(): ($Ingredient$Value)[]
public "getStackingIds"(): $IntList
public "self"(): $Ingredient
public static "fromValues"(arg0: $Stream$$Type<($Ingredient$Value$$Type)>): $Ingredient
public "hasNoItems"(): boolean
public "isCustom"(): boolean
public "handler$zff000$modernfix$hasNoItems"(cir: $CallbackInfoReturnable$$Type): void
public "or"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public "negate"(): $Predicate<($ItemStack)>
public "and"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public static "not"<T>(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public static "isEqual"<T>(arg0: any): $Predicate<($ItemStack)>
public "requiresTesting"(): boolean
public "matches"(cx: $RecipeMatchContext$$Type, arg1: $Ingredient$$Type, exact: boolean): boolean
public "matches"(cx: $RecipeMatchContext$$Type, item: $ItemStack$$Type, exact: boolean): boolean
public "toIngredientString"(ops: $DynamicOps$$Type<($Tag$$Type)>): StringJS
public "isWildcard"(): boolean
public "replaceThisWith"(cx: $RecipeScriptContext$$Type, arg1: any): any
public "containsAnyTag"(): boolean
public "getStackArray"(): ($ItemStack)[]
public "asStack"(): $SizedIngredient
public "getTagKey"(): $TagKey<($Item)>
public "getCodec"(): $Codec<(never)>
public "asIngredient"(): $Ingredient
public "or"(ingredient: $Ingredient$$Type): $Ingredient
public "except"(subtracted: $Ingredient$$Type): $Ingredient
public "and"(ingredient: $Ingredient$$Type): $Ingredient
public "withCount"(count: integer): $SizedIngredient
public static "wrap"(from: any): $ItemPredicate
public "getDisplayStacks"(): $ItemStackSet
public "getStacks"(): $ItemStackSet
public "testItem"(item: $Item$$Type): boolean
public "getItemTypes"(): $Set<($Item)>
public "getFirst"(): $ItemStack
public "getItemIds"(): $Set<(StringJS)>
public "getItemStream"(): $Stream<($Item)>
public "toJson"(): $JsonElement
public "toNBT"(): $Tag
public "matchesAny"(cx: $RecipeMatchContext$$Type, itemLikes: $Iterable$$Type<($ItemLike$$Type)>, exact: boolean): boolean
public "matches"(cx: $RecipeMatchContext$$Type, itemLike: $ItemLike$$Type, exact: boolean): boolean
get "empty"(): boolean
get "simple"(): boolean
get "customIngredient"(): $CustomIngredient
get "custom"(): boolean
get "wildcard"(): boolean
get "stackArray"(): ($ItemStack)[]
get "tagKey"(): $TagKey<($Item)>
get "codec"(): $Codec<(never)>
get "displayStacks"(): $ItemStackSet
get "stacks"(): $ItemStackSet
get "itemTypes"(): $Set<($Item)>
get "first"(): $ItemStack
get "itemIds"(): $Set<(StringJS)>
get "itemStream"(): $Stream<($Item)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Ingredient$$Type = ($ItemStack$$Type) | (($Ingredient$$Type)[]) | (RegExp) | ("*") | ("-") | (`#${Special.ItemTag}`) | (`@${Special.Mod}`) | (`%${Special.CreativeModeTab}`);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Ingredient$$Original = $Ingredient;}
declare module "net.minecraft.world.item.DyeItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SignApplicator$$Interface} from "net.minecraft.world.item.SignApplicator"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SignBlockEntity$$Type} from "net.minecraft.world.level.block.entity.SignBlockEntity"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$SignText$$Type} from "net.minecraft.world.level.block.entity.SignText"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $DyeItem extends $Item implements $SignApplicator$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $DyeColor$$Type, arg1: $Item$Properties$$Type)

public "self"(): $DyeItem
public "interactLivingEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type): $InteractionResult
public static "byColor"(arg0: $DyeColor$$Type): $DyeItem
public "getDyeColor"(): $DyeColor
public "tryApplyToSign"(arg0: $Level$$Type, arg1: $SignBlockEntity$$Type, arg2: boolean, arg3: $Player$$Type): boolean
public "useOn"(context: $UseOnContext$$Type): $InteractionResult
public "canApplyToSign"(arg0: $SignText$$Type, arg1: $Player$$Type): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "dyeColor"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DyeItem$$Type = ($DyeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DyeItem$$Original = $DyeItem;}
declare module "net.minecraft.world.item.component.ChargedProjectiles" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$Item$$Type} from "net.minecraft.world.item.Item"

export class $ChargedProjectiles {
static readonly "CODEC": $Codec<($ChargedProjectiles)>
static readonly "EMPTY": $ChargedProjectiles
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ChargedProjectiles)>

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public static "of"(arg0: $List$$Type<($ItemStack$$Type)>): $ChargedProjectiles
public static "of"(arg0: $ItemStack$$Type): $ChargedProjectiles
public "contains"(arg0: $Item$$Type): boolean
public "getItems"(): $List<($ItemStack)>
get "empty"(): boolean
get "items"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargedProjectiles$$Type = ($ChargedProjectiles);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChargedProjectiles$$Original = $ChargedProjectiles;}
declare module "net.minecraft.world.item.component.MapDecorations" {
import {$MapDecorations$Entry, $MapDecorations$Entry$$Type} from "net.minecraft.world.item.component.MapDecorations$Entry"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Record} from "java.lang.Record"

export class $MapDecorations extends $Record {
static readonly "CODEC": $Codec<($MapDecorations)>
static readonly "EMPTY": $MapDecorations

constructor(arg0: $Map$$Type<(StringJS), ($MapDecorations$Entry$$Type)>)

public "withDecoration"(arg0: StringJS, arg1: $MapDecorations$Entry$$Type): $MapDecorations
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "decorations"(): $Map<(StringJS), ($MapDecorations$Entry)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapDecorations$$Type = ({"decorations"?: $Map$$Type<(StringJS), ($MapDecorations$Entry$$Type)>}) | ([decorations?: $Map$$Type<(StringJS), ($MapDecorations$Entry$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapDecorations$$Original = $MapDecorations;}
declare module "net.minecraft.world.item.enchantment.effects.EnchantmentLocationBasedEffect" {
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnchantedItemInUse$$Type} from "net.minecraft.world.item.enchantment.EnchantedItemInUse"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export interface $EnchantmentLocationBasedEffect$$Interface {
}

export class $EnchantmentLocationBasedEffect implements $EnchantmentLocationBasedEffect$$Interface {
static readonly "CODEC": $Codec<($EnchantmentLocationBasedEffect)>

static "bootstrap"(arg0: $Registry$$Type<($MapCodec$$Type<($EnchantmentLocationBasedEffect$$Type)>)>): $MapCodec<($EnchantmentLocationBasedEffect)>
 "codec"(): $MapCodec<($EnchantmentLocationBasedEffect)>
 "onChangedBlock"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $EnchantedItemInUse$$Type, arg3: $Entity$$Type, arg4: $Vec3$$Type, arg5: boolean): void
 "onDeactivated"(arg0: $EnchantedItemInUse$$Type, arg1: $Entity$$Type, arg2: $Vec3$$Type, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentLocationBasedEffect$$Type = ($EnchantmentLocationBasedEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantmentLocationBasedEffect$$Original = $EnchantmentLocationBasedEffect;}
declare module "net.minecraft.world.item.SignApplicator" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SignText$$Type} from "net.minecraft.world.level.block.entity.SignText"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SignBlockEntity, $SignBlockEntity$$Type} from "net.minecraft.world.level.block.entity.SignBlockEntity"

export interface $SignApplicator$$Interface {

(arg0: $Level, arg1: $SignBlockEntity, arg2: boolean, arg3: $Player): boolean
}

export class $SignApplicator implements $SignApplicator$$Interface {
 "canApplyToSign"(arg0: $SignText$$Type, arg1: $Player$$Type): boolean
 "tryApplyToSign"(arg0: $Level$$Type, arg1: $SignBlockEntity$$Type, arg2: boolean, arg3: $Player$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignApplicator$$Type = ((arg0: $Level, arg1: $SignBlockEntity, arg2: boolean, arg3: $Player) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SignApplicator$$Original = $SignApplicator;}
declare module "net.minecraft.world.item.crafting.DecoratedPotRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$CustomRecipe} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $DecoratedPotRecipe extends $CustomRecipe {
constructor(arg0: $CraftingBookCategory$$Type)

public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DecoratedPotRecipe$$Type = ($DecoratedPotRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DecoratedPotRecipe$$Original = $DecoratedPotRecipe;}
declare module "net.minecraft.world.item.enchantment.ItemEnchantments$Mutable" {
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$ItemEnchantments, $ItemEnchantments$$Type} from "net.minecraft.world.item.enchantment.ItemEnchantments"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Set} from "java.util.Set"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $ItemEnchantments$Mutable {
constructor(arg0: $ItemEnchantments$$Type)

public "upgrade"(arg0: $Holder$$Type<($Enchantment)>, arg1: integer): void
public "set"(arg0: $Holder$$Type<($Enchantment)>, arg1: integer): void
public "keySet"(): $Set<($Holder<($Enchantment)>)>
public "removeIf"(arg0: $Predicate$$Type<($Holder<($Enchantment)>)>): void
public "getLevel"(arg0: $Holder$$Type<($Enchantment)>): integer
public "toImmutable"(): $ItemEnchantments
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEnchantments$Mutable$$Type = ($ItemEnchantments$Mutable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemEnchantments$Mutable$$Original = $ItemEnchantments$Mutable;}
declare module "net.minecraft.world.item.TooltipFlag" {
import {$TooltipFlag$Default} from "net.minecraft.world.item.TooltipFlag$Default"

export interface $TooltipFlag$$Interface {
get "creative"(): boolean
get "advanced"(): boolean
}

export class $TooltipFlag implements $TooltipFlag$$Interface {
static readonly "NORMAL": $TooltipFlag$Default
static readonly "ADVANCED": $TooltipFlag$Default

 "isCreative"(): boolean
 "isAdvanced"(): boolean
 "hasControlDown"(): boolean
 "hasAltDown"(): boolean
 "hasShiftDown"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TooltipFlag$$Type = ($TooltipFlag);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TooltipFlag$$Original = $TooltipFlag;}
declare module "net.minecraft.world.item.crafting.SmokingRecipe" {
import {$CookingBookCategory$$Type} from "net.minecraft.world.item.crafting.CookingBookCategory"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$AbstractCookingRecipe} from "net.minecraft.world.item.crafting.AbstractCookingRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $SmokingRecipe extends $AbstractCookingRecipe {
constructor(arg0: StringJS, arg1: $CookingBookCategory$$Type, arg2: $Ingredient$$Type, arg3: $ItemStack$$Type, arg4: float, arg5: integer)

public "getSerializer"(): $RecipeSerializer<(never)>
public "getToastSymbol"(): $ItemStack
get "serializer"(): $RecipeSerializer<(never)>
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmokingRecipe$$Type = ($SmokingRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmokingRecipe$$Original = $SmokingRecipe;}
declare module "net.minecraft.world.item.component.CustomModelData" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $CustomModelData extends $Record {
static readonly "CODEC": $Codec<($CustomModelData)>
static readonly "DEFAULT": $CustomModelData
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($CustomModelData)>

constructor(arg0: integer)

public "value"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomModelData$$Type = ({"value"?: integer}) | ([value?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomModelData$$Original = $CustomModelData;}
declare module "net.minecraft.world.item.JukeboxSongPlayer" {
import {$JukeboxSongPlayer$OnSongChanged$$Type} from "net.minecraft.world.item.JukeboxSongPlayer$OnSongChanged"
import {$JukeboxSong, $JukeboxSong$$Type} from "net.minecraft.world.item.JukeboxSong"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $JukeboxSongPlayer {
static readonly "PLAY_EVENT_INTERVAL_TICKS": integer

constructor(arg0: $JukeboxSongPlayer$OnSongChanged$$Type, arg1: $BlockPos$$Type)

public "stop"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type): void
public "tick"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type): void
public "isPlaying"(): boolean
public "getTicksSinceSongStarted"(): long
public "setSongWithoutPlaying"(arg0: $Holder$$Type<($JukeboxSong)>, arg1: long): void
public "getSong"(): $JukeboxSong
public "play"(arg0: $LevelAccessor$$Type, arg1: $Holder$$Type<($JukeboxSong)>): void
get "playing"(): boolean
get "ticksSinceSongStarted"(): long
get "song"(): $JukeboxSong
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JukeboxSongPlayer$$Type = ($JukeboxSongPlayer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JukeboxSongPlayer$$Original = $JukeboxSongPlayer;}
declare module "net.minecraft.world.item.crafting.RecipeInput" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$RecipeInputMixin$$Interface} from "dev.latvian.mods.kubejs.core.mixin.RecipeInputMixin"
import {$RecipeInputKJS$$Interface} from "dev.latvian.mods.kubejs.core.RecipeInputKJS"

export interface $RecipeInput$$Interface extends $RecipeInputKJS$$Interface, $RecipeInputMixin$$Interface {
get "empty"(): boolean
}

export class $RecipeInput implements $RecipeInput$$Interface {
 "size"(): integer
 "isEmpty"(): boolean
 "getItem"(arg0: integer): $ItemStack
 "find"(filter: $SlotFilter$$Type): $ItemStack
 "find"(filter: $SlotFilter$$Type, skip: integer): $ItemStack
 "self"(): $RecipeInput
 "findAll"(filter: $SlotFilter$$Type): $List<($ItemStack)>
 "findAll"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeInput$$Type = ($RecipeInput);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeInput$$Original = $RecipeInput;}
declare module "net.minecraft.world.item.crafting.BookCloningRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$CustomRecipe} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $BookCloningRecipe extends $CustomRecipe {
constructor(arg0: $CraftingBookCategory$$Type)

public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookCloningRecipe$$Type = ($BookCloningRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BookCloningRecipe$$Original = $BookCloningRecipe;}
declare module "net.minecraft.world.item.enchantment.Enchantment" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EquipmentSlotGroup$$Type} from "net.minecraft.world.entity.EquipmentSlotGroup"
import {$List, $List$$Type} from "java.util.List"
import {$Enchantment$Cost, $Enchantment$Cost$$Type} from "net.minecraft.world.item.enchantment.Enchantment$Cost"
import {$Enchantment$EnchantmentDefinition, $Enchantment$EnchantmentDefinition$$Type} from "net.minecraft.world.item.enchantment.Enchantment$EnchantmentDefinition"
import {$ConditionalEffect$$Type} from "net.minecraft.world.item.enchantment.ConditionalEffect"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Enchantment$Builder} from "net.minecraft.world.item.enchantment.Enchantment$Builder"
import {$EnchantmentValueEffect$$Type} from "net.minecraft.world.item.enchantment.effects.EnchantmentValueEffect"
import {$TargetedConditionalEffect$$Type} from "net.minecraft.world.item.enchantment.TargetedConditionalEffect"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Codec} from "com.mojang.serialization.Codec"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$EnchantmentEntityEffect$$Type} from "net.minecraft.world.item.enchantment.effects.EnchantmentEntityEffect"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$MutableFloat$$Type} from "org.apache.commons.lang3.mutable.MutableFloat"
import {$Map} from "java.util.Map"
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$EnchantmentTarget$$Type} from "net.minecraft.world.item.enchantment.EnchantmentTarget"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnchantedItemInUse$$Type} from "net.minecraft.world.item.enchantment.EnchantedItemInUse"
import {$Record} from "java.lang.Record"

export class $Enchantment extends $Record {
static readonly "CODEC": $Codec<($Holder<($Enchantment)>)>
static readonly "DIRECT_CODEC": $Codec<($Enchantment)>
static readonly "MAX_LEVEL": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($Enchantment)>)>

constructor(description: $Component$$Type, definition: $Enchantment$EnchantmentDefinition$$Type, exclusiveSet: $HolderSet$$Type<($Enchantment)>, effects: $DataComponentMap$$Type)

public "getEffects"<T>(arg0: $DataComponentType$$Type<($List$$Type<(T)>)>): $List<(T)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "tick"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $EnchantedItemInUse$$Type, arg3: $Entity$$Type): void
public "description"(): $Component
public "stopLocationBasedEffects"(arg0: integer, arg1: $EnchantedItemInUse$$Type, arg2: $LivingEntity$$Type): void
public static "definition"(arg0: $HolderSet$$Type<($Item)>, arg1: $HolderSet$$Type<($Item)>, arg2: integer, arg3: integer, arg4: $Enchantment$Cost$$Type, arg5: $Enchantment$Cost$$Type, arg6: integer, ...arg7: ($EquipmentSlotGroup$$Type)[]): $Enchantment$EnchantmentDefinition
public "definition"(): $Enchantment$EnchantmentDefinition
public static "definition"(arg0: $HolderSet$$Type<($Item)>, arg1: integer, arg2: integer, arg3: $Enchantment$Cost$$Type, arg4: $Enchantment$Cost$$Type, arg5: integer, ...arg6: ($EquipmentSlotGroup$$Type)[]): $Enchantment$EnchantmentDefinition
/**
 * 
 * @deprecated
 */
public "canEnchant"(arg0: $ItemStack$$Type): boolean
/**
 * 
 * @deprecated
 */
public "isSupportedItem"(arg0: $ItemStack$$Type): boolean
public "modifyDamage"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: $Entity$$Type, arg4: $DamageSource$$Type, arg5: $MutableFloat$$Type): void
public "getMinLevel"(): integer
public "getMaxLevel"(): integer
public static "enchantment"(arg0: $Enchantment$EnchantmentDefinition$$Type): $Enchantment$Builder
public static "areCompatible"(arg0: $Holder$$Type<($Enchantment)>, arg1: $Holder$$Type<($Enchantment)>): boolean
public "getAnvilCost"(): integer
public "onProjectileSpawned"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $EnchantedItemInUse$$Type, arg3: $Entity$$Type): void
public static "applyEffects"<T>(arg0: $List$$Type<($ConditionalEffect$$Type<(T)>)>, arg1: $LootContext$$Type, arg2: $Consumer$$Type<(T)>): void
public "runLocationChangedEffects"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $EnchantedItemInUse$$Type, arg3: $LivingEntity$$Type): void
public "isImmuneToDamage"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $Entity$$Type, arg3: $DamageSource$$Type): boolean
public "getWeight"(): integer
public "modifyTridentReturnToOwnerAcceleration"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: $Entity$$Type, arg4: $MutableFloat$$Type): void
public "getSlotItems"(arg0: $LivingEntity$$Type): $Map<($EquipmentSlot), ($ItemStack)>
public static "getFullname"(arg0: $Holder$$Type<($Enchantment)>, arg1: integer): $Component
public static "itemContext"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $ItemStack$$Type): $LootContext
public "exclusiveSet"(): $HolderSet<($Enchantment)>
/**
 * 
 * @deprecated
 */
public "isPrimaryItem"(arg0: $ItemStack$$Type): boolean
public static "locationContext"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $Entity$$Type, arg3: boolean): $LootContext
public "matchingSlot"(arg0: $EquipmentSlot$$Type): boolean
/**
 * 
 * @deprecated
 */
public "getSupportedItems"(): $HolderSet<($Item)>
public static "dynamicCost"(arg0: integer, arg1: integer): $Enchantment$Cost
public static "constantCost"(arg0: integer): $Enchantment$Cost
public static "entityContext"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $Entity$$Type, arg3: $Vec3$$Type): $LootContext
public static "blockHitContext"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $Entity$$Type, arg3: $Vec3$$Type, arg4: $BlockState$$Type): $LootContext
public static "damageContext"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $Entity$$Type, arg3: $DamageSource$$Type): $LootContext
public "modifyAmmoCount"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: $MutableFloat$$Type): void
public static "doPostAttack"(arg0: $TargetedConditionalEffect$$Type<($EnchantmentEntityEffect$$Type)>, arg1: $ServerLevel$$Type, arg2: integer, arg3: $EnchantedItemInUse$$Type, arg4: $Entity$$Type, arg5: $DamageSource$$Type): void
public "doPostAttack"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $EnchantedItemInUse$$Type, arg3: $EnchantmentTarget$$Type, arg4: $Entity$$Type, arg5: $DamageSource$$Type): void
public "modifyTridentSpinAttackStrength"(arg0: $RandomSource$$Type, arg1: integer, arg2: $MutableFloat$$Type): void
public "modifyDurabilityToRepairFromXp"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: $MutableFloat$$Type): void
public "getMaxCost"(arg0: integer): integer
public "getMinCost"(arg0: integer): integer
public "modifyKnockback"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: $Entity$$Type, arg4: $DamageSource$$Type, arg5: $MutableFloat$$Type): void
public "effects"(): $DataComponentMap
public "onHitBlock"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $EnchantedItemInUse$$Type, arg3: $Entity$$Type, arg4: $Vec3$$Type, arg5: $BlockState$$Type): void
public "modifyProjectileCount"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: $Entity$$Type, arg4: $MutableFloat$$Type): void
public "modifyEntityFilteredValue"(arg0: $DataComponentType$$Type<($List$$Type<($ConditionalEffect$$Type<($EnchantmentValueEffect$$Type)>)>)>, arg1: $ServerLevel$$Type, arg2: integer, arg3: $ItemStack$$Type, arg4: $Entity$$Type, arg5: $MutableFloat$$Type): void
public "modifyFishingTimeReduction"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: $Entity$$Type, arg4: $MutableFloat$$Type): void
public "modifyBlockExperience"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: $MutableFloat$$Type): void
public "modifyUnfilteredValue"(arg0: $DataComponentType$$Type<($EnchantmentValueEffect$$Type)>, arg1: $RandomSource$$Type, arg2: integer, arg3: $MutableFloat$$Type): void
public "modifyFishingLuckBonus"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: $Entity$$Type, arg4: $MutableFloat$$Type): void
public "modifyArmorEffectivness"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: $Entity$$Type, arg4: $DamageSource$$Type, arg5: $MutableFloat$$Type): void
public "modifyPiercingCount"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: $MutableFloat$$Type): void
public "modifyDamageFilteredValue"(arg0: $DataComponentType$$Type<($List$$Type<($ConditionalEffect$$Type<($EnchantmentValueEffect$$Type)>)>)>, arg1: $ServerLevel$$Type, arg2: integer, arg3: $ItemStack$$Type, arg4: $Entity$$Type, arg5: $DamageSource$$Type, arg6: $MutableFloat$$Type): void
public "modifyProjectileSpread"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: $Entity$$Type, arg4: $MutableFloat$$Type): void
public "modifyDamageProtection"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: $Entity$$Type, arg4: $DamageSource$$Type, arg5: $MutableFloat$$Type): void
public "modifyItemFilteredCount"(arg0: $DataComponentType$$Type<($List$$Type<($ConditionalEffect$$Type<($EnchantmentValueEffect$$Type)>)>)>, arg1: $ServerLevel$$Type, arg2: integer, arg3: $ItemStack$$Type, arg4: $MutableFloat$$Type): void
public "modifyDurabilityChange"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: $MutableFloat$$Type): void
public "modifyMobExperience"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: $Entity$$Type, arg4: $MutableFloat$$Type): void
public "modifyCrossbowChargeTime"(arg0: $RandomSource$$Type, arg1: integer, arg2: $MutableFloat$$Type): void
public "modifyFallBasedDamage"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: $Entity$$Type, arg4: $DamageSource$$Type, arg5: $MutableFloat$$Type): void
get "minLevel"(): integer
get "maxLevel"(): integer
get "anvilCost"(): integer
get "weight"(): integer
get "supportedItems"(): $HolderSet<($Item)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.Enchantment
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.EnchantmentTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Enchantment$$Type = (Special.Enchantment) | ({"effects"?: $DataComponentMap$$Type, "definition"?: $Enchantment$EnchantmentDefinition$$Type, "exclusiveSet"?: $HolderSet$$Type<($Enchantment)>, "description"?: $Component$$Type}) | ([effects?: $DataComponentMap$$Type, definition?: $Enchantment$EnchantmentDefinition$$Type, exclusiveSet?: $HolderSet$$Type<($Enchantment)>, description?: $Component$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Enchantment$$Original = $Enchantment;}
declare module "net.minecraft.world.item.crafting.MapExtendingRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ShapedRecipePattern} from "net.minecraft.world.item.crafting.ShapedRecipePattern"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ShapedRecipe} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $MapExtendingRecipe extends $ShapedRecipe {
readonly "result": $ItemStack
readonly "pattern": $ShapedRecipePattern
readonly "group": StringJS

constructor(arg0: $CraftingBookCategory$$Type)

public "getSerializer"(): $RecipeSerializer<(never)>
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "isSpecial"(): boolean
get "serializer"(): $RecipeSerializer<(never)>
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapExtendingRecipe$$Type = ($MapExtendingRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapExtendingRecipe$$Original = $MapExtendingRecipe;}
declare module "net.minecraft.world.item.enchantment.Enchantment$Builder" {
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$EnchantmentBuilderAccessor$$Interface} from "net.fabricmc.fabric.mixin.item.EnchantmentBuilderAccessor"
import {$List, $List$$Type} from "java.util.List"
import {$Enchantment$EnchantmentDefinition, $Enchantment$EnchantmentDefinition$$Type} from "net.minecraft.world.item.enchantment.Enchantment$EnchantmentDefinition"
import {$ConditionalEffect$$Type} from "net.minecraft.world.item.enchantment.ConditionalEffect"
import {$EnchantmentAttributeEffect$$Type} from "net.minecraft.world.item.enchantment.effects.EnchantmentAttributeEffect"
import {$DataComponentMap$Builder} from "net.minecraft.core.component.DataComponentMap$Builder"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$TargetedConditionalEffect$$Type} from "net.minecraft.world.item.enchantment.TargetedConditionalEffect"
import {$LootItemCondition$Builder$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition$Builder"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$EnchantmentTarget$$Type} from "net.minecraft.world.item.enchantment.EnchantmentTarget"
import {$MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$Unit$$Type} from "net.minecraft.util.Unit"

export class $Enchantment$Builder implements $EnchantmentBuilderAccessor$$Interface {
constructor(arg0: $Enchantment$EnchantmentDefinition$$Type)

public "exclusiveWith"(arg0: $HolderSet$$Type<($Enchantment)>): $Enchantment$Builder
public "getDefinition"(): $Enchantment$EnchantmentDefinition
public "build"(arg0: $ResourceLocation$$Type): $Enchantment
public "withEffect"(arg0: $DataComponentType$$Type<($Unit$$Type)>): $Enchantment$Builder
public "withEffect"(arg0: $DataComponentType$$Type<($List$$Type<($EnchantmentAttributeEffect$$Type)>)>, arg1: $EnchantmentAttributeEffect$$Type): $Enchantment$Builder
public "withEffect"<E>(arg0: $DataComponentType$$Type<($List$$Type<($ConditionalEffect$$Type<(E)>)>)>, arg1: E, arg2: $LootItemCondition$Builder$$Type): $Enchantment$Builder
public "withEffect"<E>(arg0: $DataComponentType$$Type<($List$$Type<($ConditionalEffect$$Type<(E)>)>)>, arg1: E): $Enchantment$Builder
public "withEffect"<E>(arg0: $DataComponentType$$Type<($List$$Type<($TargetedConditionalEffect$$Type<(E)>)>)>, arg1: $EnchantmentTarget$$Type, arg2: $EnchantmentTarget$$Type, arg3: E, arg4: $LootItemCondition$Builder$$Type): $Enchantment$Builder
public "withEffect"<E>(arg0: $DataComponentType$$Type<($List$$Type<($TargetedConditionalEffect$$Type<(E)>)>)>, arg1: $EnchantmentTarget$$Type, arg2: $EnchantmentTarget$$Type, arg3: E): $Enchantment$Builder
public "getEffectMap"(): $DataComponentMap$Builder
public "getExclusiveSet"(): $HolderSet
public "withCustomName"(arg0: $UnaryOperator$$Type<($MutableComponent)>): $Enchantment$Builder
public "withSpecialEffect"<E>(arg0: $DataComponentType$$Type<(E)>, arg1: E): $Enchantment$Builder
public "invokeGetEffectsList"(arg0: $DataComponentType$$Type): $List
get "definition"(): $Enchantment$EnchantmentDefinition
get "effectMap"(): $DataComponentMap$Builder
get "exclusiveSet"(): $HolderSet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Enchantment$Builder$$Type = ($Enchantment$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Enchantment$Builder$$Original = $Enchantment$Builder;}
declare module "net.minecraft.world.item.JukeboxSongPlayer$OnSongChanged" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $JukeboxSongPlayer$OnSongChanged$$Interface {

(): void
}

export class $JukeboxSongPlayer$OnSongChanged implements $JukeboxSongPlayer$OnSongChanged$$Interface {
 "notifyChange"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JukeboxSongPlayer$OnSongChanged$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JukeboxSongPlayer$OnSongChanged$$Original = $JukeboxSongPlayer$OnSongChanged;}
declare module "net.minecraft.world.item.component.ItemLore" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$TooltipProvider$$Interface} from "net.minecraft.world.item.component.TooltipProvider"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Record} from "java.lang.Record"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $ItemLore extends $Record implements $TooltipProvider$$Interface {
static readonly "CODEC": $Codec<($ItemLore)>
static readonly "MAX_LINES": integer
static readonly "EMPTY": $ItemLore
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ItemLore)>

constructor(arg0: $List$$Type<($Component$$Type)>)
constructor(arg0: $List$$Type<($Component$$Type)>, arg1: $List$$Type<($Component$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "lines"(): $List<($Component)>
public "styledLines"(): $List<($Component)>
public "withLineAdded"(arg0: $Component$$Type): $ItemLore
public "addToTooltip"(arg0: $Item$TooltipContext$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemLore$$Type = ({"styledLines"?: $List$$Type<($Component$$Type)>, "lines"?: $List$$Type<($Component$$Type)>}) | ([styledLines?: $List$$Type<($Component$$Type)>, lines?: $List$$Type<($Component$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemLore$$Original = $ItemLore;}
declare module "net.minecraft.world.item.crafting.ShapedRecipePattern$Data" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"

export class $ShapedRecipePattern$Data extends $Record {
static readonly "MAP_CODEC": $MapCodec<($ShapedRecipePattern$Data)>

constructor(key: $Map$$Type<(character), ($Ingredient$$Type)>, pattern: $List$$Type<(StringJS)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "pattern"(): $List<(StringJS)>
public "key"(): $Map<(character), ($Ingredient)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedRecipePattern$Data$$Type = ({"pattern"?: $List$$Type<(StringJS)>, "key"?: $Map$$Type<(character), ($Ingredient$$Type)>}) | ([pattern?: $List$$Type<(StringJS)>, key?: $Map$$Type<(character), ($Ingredient$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapedRecipePattern$Data$$Original = $ShapedRecipePattern$Data;}
declare module "net.minecraft.world.item.enchantment.LevelBasedValue" {
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$Codec} from "com.mojang.serialization.Codec"
import {$List$$Type} from "java.util.List"
import {$LevelBasedValue$Lookup} from "net.minecraft.world.item.enchantment.LevelBasedValue$Lookup"
import {$LevelBasedValue$Linear} from "net.minecraft.world.item.enchantment.LevelBasedValue$Linear"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$LevelBasedValue$Constant} from "net.minecraft.world.item.enchantment.LevelBasedValue$Constant"

export interface $LevelBasedValue$$Interface {
}

export class $LevelBasedValue implements $LevelBasedValue$$Interface {
static readonly "DISPATCH_CODEC": $Codec<($LevelBasedValue)>
static readonly "CODEC": $Codec<($LevelBasedValue)>

static "lookup"(arg0: $List$$Type<(float)>, arg1: $LevelBasedValue$$Type): $LevelBasedValue$Lookup
static "constant"(arg0: float): $LevelBasedValue$Constant
static "bootstrap"(arg0: $Registry$$Type<($MapCodec$$Type<($LevelBasedValue$$Type)>)>): $MapCodec<($LevelBasedValue)>
 "calculate"(arg0: integer): float
static "perLevel"(arg0: float, arg1: float): $LevelBasedValue$Linear
static "perLevel"(arg0: float): $LevelBasedValue$Linear
 "codec"(): $MapCodec<($LevelBasedValue)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelBasedValue$$Type = ($LevelBasedValue);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LevelBasedValue$$Original = $LevelBasedValue;}
declare module "net.minecraft.world.item.TieredItem" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"

export class $TieredItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: $Item$Properties$$Type)

public "getEnchantmentValue"(): integer
public "getTier"(): $Tier
public "isValidRepairItem"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TieredItem$$Type = ($TieredItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TieredItem$$Original = $TieredItem;}
declare module "net.minecraft.world.item.crafting.RecipeManager" {
import {$Iterable$$Type} from "java.lang.Iterable"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$RecipeManagerKJS$$Interface} from "dev.latvian.mods.kubejs.core.RecipeManagerKJS"
import {$RecipeManager$CachedCheck} from "net.minecraft.world.item.crafting.RecipeManager$CachedCheck"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IdentifiableResourceReloadListener$$Interface} from "net.fabricmc.fabric.api.resource.IdentifiableResourceReloadListener"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$Stream} from "java.util.stream.Stream"
import {$Logger} from "org.slf4j.Logger"
import {$IRecipeContext$$Interface} from "com.illusivesoulworks.polymorph.api.common.base.IRecipeContext"
import {$Collection} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$ReloadableServerResourcesKJS, $ReloadableServerResourcesKJS$$Type} from "dev.latvian.mods.kubejs.core.ReloadableServerResourcesKJS"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$SimpleJsonResourceReloadListener} from "net.minecraft.server.packs.resources.SimpleJsonResourceReloadListener"
import {$RecipeManagerAccessor$$Interface as $RecipeManagerAccessor$0$$Interface} from "plus.dragons.createdragonsplus.mixin.minecraft.RecipeManagerAccessor"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeHolder, $RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeManagerAccessor$$Interface} from "com.possible_triangle.sliceanddice.mixins.RecipeManagerAccessor"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $RecipeManager extends $SimpleJsonResourceReloadListener implements $IRecipeContext$$Interface, $IdentifiableResourceReloadListener$$Interface, $RecipeManagerAccessor$$Interface, $RecipeManagerAccessor$0$$Interface, $RecipeManagerKJS$$Interface {
static readonly "LOGGER": $Logger
readonly "registries": $HolderLookup$Provider

constructor(arg0: $HolderLookup$Provider$$Type)

public "getRemainingItemsFor"<I extends $RecipeInput, T extends $Recipe<(object)>>(arg0: $RecipeType$$Type<(T)>, arg1: I, arg2: $Level$$Type): $NonNullList<($ItemStack)>
public "getRecipeFor"<I extends $RecipeInput, T extends $Recipe<(object)>>(arg0: $RecipeType$$Type<(T)>, arg1: I, arg2: $Level$$Type): $Optional<($RecipeHolder<(T)>)>
public "getRecipeFor"<I extends $RecipeInput, T extends $Recipe<(object)>>(arg0: $RecipeType$$Type<(T)>, arg1: I, arg2: $Level$$Type, arg3: $ResourceLocation$$Type): $Optional<($RecipeHolder<(T)>)>
public "getRecipeFor"<I extends $RecipeInput, T extends $Recipe<(object)>>(arg0: $RecipeType$$Type<(T)>, arg1: I, arg2: $Level$$Type, arg3: $RecipeHolder$$Type<(T)>): $Optional<($RecipeHolder<(T)>)>
public static "createCheck"<I extends $RecipeInput, T extends $Recipe<(object)>>(arg0: $RecipeType$$Type<(T)>): $RecipeManager$CachedCheck<(I), (T)>
public "polymorph$getContext"(): any
public "polymorph$setContext"(arg0: any): void
public "getByName"(): $Map
public static "fromJson"(arg0: $ResourceLocation$$Type, arg1: $JsonObject$$Type, arg2: $HolderLookup$Provider$$Type): $RecipeHolder<(never)>
public "getRecipes"(): $Collection<($RecipeHolder<(never)>)>
public "byKey"(arg0: $ResourceLocation$$Type): $Optional<($RecipeHolder<(never)>)>
public "replaceRecipes"(arg0: $Iterable$$Type<($RecipeHolder$$Type<(never)>)>): void
public "getOrderedRecipes"(): $Collection<($RecipeHolder<(never)>)>
public "getRecipeIds"(): $Stream<($ResourceLocation)>
public "getRecipesFor"<I extends $RecipeInput, T extends $Recipe<(object)>>(arg0: $RecipeType$$Type<(T)>, arg1: I, arg2: $Level$$Type): $List<($RecipeHolder<(T)>)>
public "getAllRecipesFor"<I extends $RecipeInput, T extends $Recipe<(object)>>(arg0: $RecipeType$$Type<(T)>): $List<($RecipeHolder<(T)>)>
public "setByType"(arg0: $Multimap$$Type): void
public "setByName"(arg0: $Map$$Type): void
public "getByType"(): $Multimap
public "getFabricDependencies"(): $Collection
public "getFabricId"(): $ResourceLocation
public "kjs$setResources"(resources: $ReloadableServerResourcesKJS$$Type): void
public "kjs$getResources"(): $ReloadableServerResourcesKJS
public "kjs$replaceRecipes"(map: $Map$$Type): void
public "kjs$getRecipeIdMap"(): $Map
public "hadErrorsLoading"(): boolean
public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
get "byName"(): $Map
get "recipes"(): $Collection<($RecipeHolder<(never)>)>
get "orderedRecipes"(): $Collection<($RecipeHolder<(never)>)>
get "recipeIds"(): $Stream<($ResourceLocation)>
set "byType"(value: $Multimap$$Type)
set "byName"(value: $Map$$Type)
get "byType"(): $Multimap
get "fabricDependencies"(): $Collection
get "fabricId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeManager$$Type = ($RecipeManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeManager$$Original = $RecipeManager;}
declare module "net.minecraft.world.item.crafting.RepairItemRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$CustomRecipe} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $RepairItemRecipe extends $CustomRecipe {
constructor(arg0: $CraftingBookCategory$$Type)

public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RepairItemRecipe$$Type = ($RepairItemRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RepairItemRecipe$$Original = $RepairItemRecipe;}
declare module "net.minecraft.world.item.enchantment.EnchantmentInstance" {
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$WeightedEntry$Wrapper} from "net.minecraft.util.random.WeightedEntry$Wrapper"
import {$WeightedEntry$IntrusiveBase} from "net.minecraft.util.random.WeightedEntry$IntrusiveBase"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $EnchantmentInstance extends $WeightedEntry$IntrusiveBase {
readonly "level": integer
readonly "enchantment": $Holder<($Enchantment)>

constructor(arg0: $Holder$$Type<($Enchantment)>, arg1: integer)

public static "wrap"<T>(arg0: T, arg1: integer): $WeightedEntry$Wrapper<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentInstance$$Type = ($EnchantmentInstance);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantmentInstance$$Original = $EnchantmentInstance;}
declare module "net.minecraft.world.item.component.ItemAttributeModifiers$Entry" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$EquipmentSlotGroup, $EquipmentSlotGroup$$Type} from "net.minecraft.world.entity.EquipmentSlotGroup"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $ItemAttributeModifiers$Entry extends $Record {
static readonly "CODEC": $Codec<($ItemAttributeModifiers$Entry)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ItemAttributeModifiers$Entry)>

constructor(arg0: $Holder$$Type<($Attribute)>, arg1: $AttributeModifier$$Type, arg2: $EquipmentSlotGroup$$Type)

public "slot"(): $EquipmentSlotGroup
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $Holder$$Type<($Attribute)>, arg1: $ResourceLocation$$Type): boolean
public "modifier"(): $AttributeModifier
public "attribute"(): $Holder<($Attribute)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemAttributeModifiers$Entry$$Type = ({"modifier"?: $AttributeModifier$$Type, "attribute"?: $Holder$$Type<($Attribute)>, "slot"?: $EquipmentSlotGroup$$Type}) | ([modifier?: $AttributeModifier$$Type, attribute?: $Holder$$Type<($Attribute)>, slot?: $EquipmentSlotGroup$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemAttributeModifiers$Entry$$Original = $ItemAttributeModifiers$Entry;}
declare module "net.minecraft.world.item.Item$TooltipContext" {
import {$MapId$$Type} from "net.minecraft.world.level.saveddata.maps.MapId"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$MapItemSavedData} from "net.minecraft.world.level.saveddata.maps.MapItemSavedData"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $Item$TooltipContext$$Interface {
}

export class $Item$TooltipContext implements $Item$TooltipContext$$Interface {
static readonly "EMPTY": $Item$TooltipContext

 "registries"(): $HolderLookup$Provider
static "of"(arg0: $Level$$Type): $Item$TooltipContext
static "of"(arg0: $HolderLookup$Provider$$Type): $Item$TooltipContext
 "level"(): $Level
 "mapData"(arg0: $MapId$$Type): $MapItemSavedData
 "tickRate"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Item$TooltipContext$$Type = ($Item$TooltipContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Item$TooltipContext$$Original = $Item$TooltipContext;}
declare module "net.minecraft.world.item.component.MapDecorations$Entry" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$MapDecorationType, $MapDecorationType$$Type} from "net.minecraft.world.level.saveddata.maps.MapDecorationType"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $MapDecorations$Entry extends $Record {
static readonly "CODEC": $Codec<($MapDecorations$Entry)>

constructor(arg0: $Holder$$Type<($MapDecorationType)>, arg1: double, arg2: double, arg3: float)

public "type"(): $Holder<($MapDecorationType)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "x"(): double
public "z"(): double
public "rotation"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapDecorations$Entry$$Type = ({"x"?: double, "z"?: double, "type"?: $Holder$$Type<($MapDecorationType)>, "rotation"?: float}) | ([x?: double, z?: double, type?: $Holder$$Type<($MapDecorationType)>, rotation?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapDecorations$Entry$$Original = $MapDecorations$Entry;}
declare module "net.minecraft.world.item.armortrim.TrimPattern" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$TrimMaterial$$Type} from "net.minecraft.world.item.armortrim.TrimMaterial"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $TrimPattern extends $Record {
static readonly "CODEC": $Codec<($Holder<($TrimPattern)>)>
static readonly "DIRECT_CODEC": $Codec<($TrimPattern)>
static readonly "DIRECT_STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($TrimPattern)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($TrimPattern)>)>

constructor(arg0: $ResourceLocation$$Type, arg1: $Holder$$Type<($Item)>, arg2: $Component$$Type, arg3: boolean)

public "copyWithStyle"(arg0: $Holder$$Type<($TrimMaterial)>): $Component
public "templateItem"(): $Holder<($Item)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "description"(): $Component
public "assetId"(): $ResourceLocation
public "decal"(): boolean
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.TrimPattern
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.TrimPatternTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrimPattern$$Type = (Special.TrimPattern) | ({"assetId"?: $ResourceLocation$$Type, "description"?: $Component$$Type, "templateItem"?: $Holder$$Type<($Item)>, "decal"?: boolean}) | ([assetId?: $ResourceLocation$$Type, description?: $Component$$Type, templateItem?: $Holder$$Type<($Item)>, decal?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrimPattern$$Original = $TrimPattern;}
declare module "net.minecraft.world.item.alchemy.PotionBrewing$Builder" {
import {$FeatureFlagSet, $FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$PotionBrewing$Mix} from "net.minecraft.world.item.alchemy.PotionBrewing$Mix"
import {$Potion, $Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List} from "java.util.List"
import {$IBrewingRecipe$$Type} from "net.neoforged.neoforge.common.brewing.IBrewingRecipe"
import {$FabricBrewingRecipeRegistryBuilder$$Interface} from "net.fabricmc.fabric.api.registry.FabricBrewingRecipeRegistryBuilder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$PotionBrewing} from "net.minecraft.world.item.alchemy.PotionBrewing"

export class $PotionBrewing$Builder implements $FabricBrewingRecipeRegistryBuilder$$Interface {
readonly "enabledFeatures": $FeatureFlagSet
readonly "containerMixes": $List<($PotionBrewing$Mix<($Item)>)>
readonly "potionMixes": $List<($PotionBrewing$Mix<($Potion)>)>

constructor(arg0: $FeatureFlagSet$$Type)

public "build"(): $PotionBrewing
public "addContainer"(arg0: $Item$$Type): void
public "registerPotionRecipe"(arg0: $Holder$$Type, arg1: $Ingredient$$Type, arg2: $Holder$$Type): void
public "addRecipe"(arg0: $IBrewingRecipe$$Type): void
public "addRecipe"(arg0: $Ingredient$$Type, arg1: $Ingredient$$Type, arg2: $ItemStack$$Type): void
public "addMix"(arg0: $Holder$$Type<($Potion)>, arg1: $Item$$Type, arg2: $Holder$$Type<($Potion)>): void
public "registerRecipes"(arg0: $Ingredient$$Type, arg1: $Holder$$Type): void
public "addStartMix"(arg0: $Item$$Type, arg1: $Holder$$Type<($Potion)>): void
public "getEnabledFeatures"(): $FeatureFlagSet
public "addContainerRecipe"(arg0: $Item$$Type, arg1: $Item$$Type, arg2: $Item$$Type): void
public "registerItemRecipe"(arg0: $Item$$Type, arg1: $Ingredient$$Type, arg2: $Item$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionBrewing$Builder$$Type = ($PotionBrewing$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PotionBrewing$Builder$$Original = $PotionBrewing$Builder;}
declare module "net.minecraft.world.item.enchantment.effects.EnchantmentEntityEffect" {
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnchantedItemInUse$$Type} from "net.minecraft.world.item.enchantment.EnchantedItemInUse"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$EnchantmentLocationBasedEffect$$Interface} from "net.minecraft.world.item.enchantment.effects.EnchantmentLocationBasedEffect"

export interface $EnchantmentEntityEffect$$Interface extends $EnchantmentLocationBasedEffect$$Interface {
}

export class $EnchantmentEntityEffect implements $EnchantmentEntityEffect$$Interface {
static readonly "CODEC": $Codec<($EnchantmentEntityEffect)>

 "apply"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $EnchantedItemInUse$$Type, arg3: $Entity$$Type, arg4: $Vec3$$Type): void
static "bootstrap"(arg0: $Registry$$Type<($MapCodec$$Type<($EnchantmentEntityEffect$$Type)>)>): $MapCodec<($EnchantmentEntityEffect)>
 "codec"(): $MapCodec<($EnchantmentEntityEffect)>
 "onChangedBlock"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $EnchantedItemInUse$$Type, arg3: $Entity$$Type, arg4: $Vec3$$Type, arg5: boolean): void
 "onDeactivated"(arg0: $EnchantedItemInUse$$Type, arg1: $Entity$$Type, arg2: $Vec3$$Type, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentEntityEffect$$Type = ($EnchantmentEntityEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantmentEntityEffect$$Original = $EnchantmentEntityEffect;}
declare module "net.minecraft.world.item.trading.ItemCost" {
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$DataComponentPredicate$Builder$$Type} from "net.minecraft.core.component.DataComponentPredicate$Builder"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$DataComponentPredicate, $DataComponentPredicate$$Type} from "net.minecraft.core.component.DataComponentPredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Record} from "java.lang.Record"

export class $ItemCost extends $Record {
static readonly "CODEC": $Codec<($ItemCost)>
static readonly "OPTIONAL_STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Optional<($ItemCost)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ItemCost)>

constructor(arg0: $Holder$$Type<($Item)>, arg1: integer, arg2: $DataComponentPredicate$$Type, arg3: $ItemStack$$Type)
constructor(arg0: $ItemLike$$Type)
constructor(arg0: $ItemLike$$Type, arg1: integer)
constructor(arg0: $Holder$$Type<($Item)>, arg1: integer, arg2: $DataComponentPredicate$$Type)

public "withComponents"(arg0: $UnaryOperator$$Type<($DataComponentPredicate$Builder)>): $ItemCost
public "itemStack"(): $ItemStack
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: $ItemStack$$Type): boolean
public "count"(): integer
public "item"(): $Holder<($Item)>
public "components"(): $DataComponentPredicate
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCost$$Type = ({"count"?: integer, "item"?: $Holder$$Type<($Item)>, "itemStack"?: $ItemStack$$Type, "components"?: $DataComponentPredicate$$Type}) | ([count?: integer, item?: $Holder$$Type<($Item)>, itemStack?: $ItemStack$$Type, components?: $DataComponentPredicate$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemCost$$Original = $ItemCost;}
declare module "net.minecraft.world.item.CreativeModeTab$DisplayItemsGenerator" {
import {$CreativeModeTab$Output, $CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$CreativeModeTab$ItemDisplayParameters, $CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"

export interface $CreativeModeTab$DisplayItemsGenerator$$Interface {

(arg0: $CreativeModeTab$ItemDisplayParameters, arg1: $CreativeModeTab$Output): void
}

export class $CreativeModeTab$DisplayItemsGenerator implements $CreativeModeTab$DisplayItemsGenerator$$Interface {
 "accept"(arg0: $CreativeModeTab$ItemDisplayParameters$$Type, arg1: $CreativeModeTab$Output$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeModeTab$DisplayItemsGenerator$$Type = ((arg0: $CreativeModeTab$ItemDisplayParameters, arg1: $CreativeModeTab$Output) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreativeModeTab$DisplayItemsGenerator$$Original = $CreativeModeTab$DisplayItemsGenerator;}
declare module "net.minecraft.world.item.enchantment.LevelBasedValue$Linear" {
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$List$$Type} from "java.util.List"
import {$LevelBasedValue$Lookup} from "net.minecraft.world.item.enchantment.LevelBasedValue$Lookup"
import {$LevelBasedValue, $LevelBasedValue$$Type, $LevelBasedValue$$Interface} from "net.minecraft.world.item.enchantment.LevelBasedValue"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"
import {$LevelBasedValue$Constant} from "net.minecraft.world.item.enchantment.LevelBasedValue$Constant"

export class $LevelBasedValue$Linear extends $Record implements $LevelBasedValue$$Interface {
static readonly "CODEC": $MapCodec<($LevelBasedValue$Linear)>

constructor(arg0: float, arg1: float)

public "perLevelAboveFirst"(): float
public "base"(): float
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "calculate"(arg0: integer): float
public "codec"(): $MapCodec<($LevelBasedValue$Linear)>
public static "lookup"(arg0: $List$$Type<(float)>, arg1: $LevelBasedValue$$Type): $LevelBasedValue$Lookup
public static "constant"(arg0: float): $LevelBasedValue$Constant
public static "bootstrap"(arg0: $Registry$$Type<($MapCodec$$Type<($LevelBasedValue$$Type)>)>): $MapCodec<($LevelBasedValue)>
public static "perLevel"(arg0: float, arg1: float): $LevelBasedValue$Linear
public static "perLevel"(arg0: float): $LevelBasedValue$Linear
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelBasedValue$Linear$$Type = ({"base"?: float, "perLevelAboveFirst"?: float}) | ([base?: float, perLevelAboveFirst?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LevelBasedValue$Linear$$Original = $LevelBasedValue$Linear;}
declare module "net.minecraft.world.item.CreativeModeTab" {
import {$Collection} from "java.util.Collection"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$List} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$CreativeModeTab$Row, $CreativeModeTab$Row$$Type} from "net.minecraft.world.item.CreativeModeTab$Row"
import {$CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"
import {$CreativeModeTab$Type} from "net.minecraft.world.item.CreativeModeTab$Type"
import {$CreativeModeTabKJS$$Interface} from "dev.latvian.mods.kubejs.core.CreativeModeTabKJS"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$CreativeModeTab$Builder} from "net.minecraft.world.item.CreativeModeTab$Builder"
import {$CreativeModeTab$DisplayItemsGenerator} from "net.minecraft.world.item.CreativeModeTab$DisplayItemsGenerator"

export class $CreativeModeTab implements $CreativeModeTabKJS$$Interface {
readonly "tabsAfter": $List<($ResourceLocation)>
readonly "tabsBefore": $List<($ResourceLocation)>
 "displayItemsGenerator": $CreativeModeTab$DisplayItemsGenerator
 "displayItems": $Collection<($ItemStack)>

public static "createTextureLocation"(arg0: StringJS): $ResourceLocation
public "row"(): $CreativeModeTab$Row
public static "builder"(): $CreativeModeTab$Builder
/**
 * 
 * @deprecated
 */
public static "builder"(arg0: $CreativeModeTab$Row$$Type, arg1: integer): $CreativeModeTab$Builder
public "contains"(arg0: $ItemStack$$Type): boolean
public "getType"(): $CreativeModeTab$Type
public "getDisplayName"(): $Component
public "getBackgroundTexture"(): $ResourceLocation
public "canScroll"(): boolean
public "showTitle"(): boolean
public "column"(): integer
public "shouldDisplay"(): boolean
public "buildContents"(arg0: $CreativeModeTab$ItemDisplayParameters$$Type): void
public "getSearchTabDisplayItems"(): $Collection<($ItemStack)>
public "getIconItem"(): $ItemStack
public "hasAnyItems"(): boolean
public "isAlignedRight"(): boolean
public "getScrollerSprite"(): $ResourceLocation
public "kjs$setDisplayName"(component: $Component$$Type): void
public "kjs$setIcon"(icon: $ItemStack$$Type): void
public "getDisplayItems"(): $Collection<($ItemStack)>
public "getTabsImage"(): $ResourceLocation
public "getLabelColor"(): integer
public "hasSearchBar"(): boolean
public "getSearchBarWidth"(): integer
public "getSlotColor"(): integer
public "handler$bkl000$fabric_item_group_api_v1$getStacks"(arg0: $CreativeModeTab$ItemDisplayParameters$$Type, arg1: $CallbackInfo$$Type): void
get "type"(): $CreativeModeTab$Type
get "displayName"(): $Component
get "backgroundTexture"(): $ResourceLocation
get "searchTabDisplayItems"(): $Collection<($ItemStack)>
get "iconItem"(): $ItemStack
get "alignedRight"(): boolean
get "scrollerSprite"(): $ResourceLocation
get "tabsImage"(): $ResourceLocation
get "labelColor"(): integer
get "searchBarWidth"(): integer
get "slotColor"(): integer
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.CreativeModeTab
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.CreativeModeTabTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeModeTab$$Type = (Special.CreativeModeTab);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreativeModeTab$$Original = $CreativeModeTab;}
declare module "net.minecraft.world.item.enchantment.ItemEnchantments" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Set} from "java.util.Set"
import {$TooltipProvider$$Interface} from "net.minecraft.world.item.component.TooltipProvider"
import {$Object2IntMap$Entry} from "it.unimi.dsi.fastutil.objects.Object2IntMap$Entry"

export class $ItemEnchantments implements $TooltipProvider$$Interface {
static readonly "CODEC": $Codec<($ItemEnchantments)>
static readonly "EMPTY": $ItemEnchantments
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ItemEnchantments)>

public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public "entrySet"(): $Set<($Object2IntMap$Entry<($Holder<($Enchantment)>)>)>
public "keySet"(): $Set<($Holder<($Enchantment)>)>
public "getLevel"(arg0: $Holder$$Type<($Enchantment)>): integer
public "withTooltip"(arg0: boolean): $ItemEnchantments
public "addToTooltip"(arg0: $Item$TooltipContext$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEnchantments$$Type = ({[key in Special.Enchantment]?: integer});
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemEnchantments$$Original = $ItemEnchantments;}
declare module "net.minecraft.world.item.component.ResolvableProfile" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$PropertyMap, $PropertyMap$$Type} from "com.mojang.authlib.properties.PropertyMap"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $ResolvableProfile extends $Record {
static readonly "CODEC": $Codec<($ResolvableProfile)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($ResolvableProfile)>

constructor(arg0: $GameProfile$$Type)
constructor(arg0: (StringJS)?, arg1: ($UUID$$Type)?, arg2: $PropertyMap$$Type, arg3: $GameProfile$$Type)
constructor(arg0: (StringJS)?, arg1: ($UUID$$Type)?, arg2: $PropertyMap$$Type)

public "name"(): $Optional<(StringJS)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): $Optional<($UUID)>
public "resolve"(): $CompletableFuture<($ResolvableProfile)>
public "properties"(): $PropertyMap
public "isResolved"(): boolean
public "gameProfile"(): $GameProfile
get "resolved"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResolvableProfile$$Type = ({"gameProfile"?: $GameProfile$$Type, "name"?: (StringJS)?, "id"?: ($UUID$$Type)?, "properties"?: $PropertyMap$$Type}) | ([gameProfile?: $GameProfile$$Type, name?: (StringJS)?, id?: ($UUID$$Type)?, properties?: $PropertyMap$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResolvableProfile$$Original = $ResolvableProfile;}
declare module "net.minecraft.world.item.component.WritableBookContent" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$BookContent$$Interface} from "net.minecraft.world.item.component.BookContent"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Filterable, $Filterable$$Type} from "net.minecraft.server.network.Filterable"
import {$List, $List$$Type} from "java.util.List"
import {$Stream} from "java.util.stream.Stream"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $WritableBookContent extends $Record implements $BookContent$$Interface<(StringJS), ($WritableBookContent)> {
static readonly "MAX_PAGES": integer
static readonly "PAGE_EDIT_LENGTH": integer
static readonly "CODEC": $Codec<($WritableBookContent)>
static readonly "PAGES_CODEC": $Codec<($List<($Filterable<(StringJS)>)>)>
static readonly "EMPTY": $WritableBookContent
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($WritableBookContent)>

constructor(arg0: $List$$Type<($Filterable$$Type<(StringJS)>)>)

public "withReplacedPages"(arg0: $List$$Type<($Filterable$$Type<(StringJS)>)>): $WritableBookContent
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "pages"(): $List<($Filterable<(StringJS)>)>
public "getPages"(arg0: boolean): $Stream<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WritableBookContent$$Type = ({"pages"?: $List$$Type<($Filterable$$Type<(StringJS)>)>}) | ([pages?: $List$$Type<($Filterable$$Type<(StringJS)>)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WritableBookContent$$Original = $WritableBookContent;}
declare module "net.minecraft.world.item.crafting.SmithingRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$SmithingRecipeInput, $SmithingRecipeInput$$Type} from "net.minecraft.world.item.crafting.SmithingRecipeInput"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $SmithingRecipe$$Interface extends $Recipe$$Interface<($SmithingRecipeInput)> {
get "type"(): $RecipeType<(never)>
get "toastSymbol"(): $ItemStack
get "serializer"(): $RecipeSerializer<(never)>
get "group"(): StringJS
get "special"(): boolean
get "incomplete"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
}

export class $SmithingRecipe implements $SmithingRecipe$$Interface {
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getType"(): $RecipeType<(never)>
 "isTemplateIngredient"(arg0: $ItemStack$$Type): boolean
 "isAdditionIngredient"(arg0: $ItemStack$$Type): boolean
 "getToastSymbol"(): $ItemStack
 "isBaseIngredient"(arg0: $ItemStack$$Type): boolean
 "getSerializer"(): $RecipeSerializer<(never)>
 "matches"(arg0: $SmithingRecipeInput$$Type, arg1: $Level$$Type): boolean
 "getRemainingItems"(arg0: $SmithingRecipeInput$$Type): $NonNullList<($ItemStack)>
 "assemble"(arg0: $SmithingRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
 "getGroup"(): StringJS
 "isSpecial"(): boolean
 "isIncomplete"(): boolean
 "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
 "showNotification"(): boolean
 "getIngredients"(): $NonNullList<($Ingredient)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmithingRecipe$$Type = ($SmithingRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmithingRecipe$$Original = $SmithingRecipe;}
declare module "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters" {
import {$FeatureFlagSet, $FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Record} from "java.lang.Record"

export class $CreativeModeTab$ItemDisplayParameters extends $Record {
constructor(enabledFeatures: $FeatureFlagSet$$Type, hasPermissions: boolean, holders: $HolderLookup$Provider$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "hasPermissions"(): boolean
public "enabledFeatures"(): $FeatureFlagSet
public "needsUpdate"(arg0: $FeatureFlagSet$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): boolean
public "holders"(): $HolderLookup$Provider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeModeTab$ItemDisplayParameters$$Type = ({"holders"?: $HolderLookup$Provider$$Type, "enabledFeatures"?: $FeatureFlagSet$$Type, "hasPermissions"?: boolean}) | ([holders?: $HolderLookup$Provider$$Type, enabledFeatures?: $FeatureFlagSet$$Type, hasPermissions?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreativeModeTab$ItemDisplayParameters$$Original = $CreativeModeTab$ItemDisplayParameters;}
declare module "net.minecraft.world.item.crafting.MapCloningRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$CustomRecipe} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $MapCloningRecipe extends $CustomRecipe {
constructor(arg0: $CraftingBookCategory$$Type)

public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapCloningRecipe$$Type = ($MapCloningRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapCloningRecipe$$Original = $MapCloningRecipe;}
declare module "net.minecraft.world.item.enchantment.Enchantment$EnchantmentDefinition" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$EquipmentSlotGroup, $EquipmentSlotGroup$$Type} from "net.minecraft.world.entity.EquipmentSlotGroup"
import {$List, $List$$Type} from "java.util.List"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$Enchantment$Cost, $Enchantment$Cost$$Type} from "net.minecraft.world.item.enchantment.Enchantment$Cost"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"

export class $Enchantment$EnchantmentDefinition extends $Record {
static readonly "CODEC": $MapCodec<($Enchantment$EnchantmentDefinition)>

constructor(supportedItems: $HolderSet$$Type<($Item)>, primaryItems: ($HolderSet$$Type<($Item$$Type)>)?, weight: integer, maxLevel: integer, minCost: $Enchantment$Cost$$Type, maxCost: $Enchantment$Cost$$Type, anvilCost: integer, slots: $List$$Type<($EquipmentSlotGroup$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "slots"(): $List<($EquipmentSlotGroup)>
public "primaryItems"(): $Optional<($HolderSet<($Item)>)>
public "maxLevel"(): integer
public "weight"(): integer
public "supportedItems"(): $HolderSet<($Item)>
public "maxCost"(): $Enchantment$Cost
public "anvilCost"(): integer
public "minCost"(): $Enchantment$Cost
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Enchantment$EnchantmentDefinition$$Type = ({"primaryItems"?: ($HolderSet$$Type<($Item$$Type)>)?, "minCost"?: $Enchantment$Cost$$Type, "maxLevel"?: integer, "maxCost"?: $Enchantment$Cost$$Type, "supportedItems"?: $HolderSet$$Type<($Item)>, "slots"?: $List$$Type<($EquipmentSlotGroup$$Type)>, "weight"?: integer, "anvilCost"?: integer}) | ([primaryItems?: ($HolderSet$$Type<($Item$$Type)>)?, minCost?: $Enchantment$Cost$$Type, maxLevel?: integer, maxCost?: $Enchantment$Cost$$Type, supportedItems?: $HolderSet$$Type<($Item)>, slots?: $List$$Type<($EquipmentSlotGroup$$Type)>, weight?: integer, anvilCost?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Enchantment$EnchantmentDefinition$$Original = $Enchantment$EnchantmentDefinition;}
declare module "net.minecraft.world.item.crafting.BlastingRecipe" {
import {$CookingBookCategory$$Type} from "net.minecraft.world.item.crafting.CookingBookCategory"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$AbstractCookingRecipe} from "net.minecraft.world.item.crafting.AbstractCookingRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $BlastingRecipe extends $AbstractCookingRecipe {
constructor(arg0: StringJS, arg1: $CookingBookCategory$$Type, arg2: $Ingredient$$Type, arg3: $ItemStack$$Type, arg4: float, arg5: integer)

public "getSerializer"(): $RecipeSerializer<(never)>
public "getToastSymbol"(): $ItemStack
get "serializer"(): $RecipeSerializer<(never)>
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlastingRecipe$$Type = ($BlastingRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlastingRecipe$$Original = $BlastingRecipe;}
declare module "net.minecraft.world.item.AnimalArmorItem$BodyType" {
import {$Enum} from "java.lang.Enum"

export class $AnimalArmorItem$BodyType extends $Enum<($AnimalArmorItem$BodyType)> {
static readonly "EQUESTRIAN": $AnimalArmorItem$BodyType
static readonly "CANINE": $AnimalArmorItem$BodyType

public static "values"(): ($AnimalArmorItem$BodyType)[]
public static "valueOf"(arg0: StringJS): $AnimalArmorItem$BodyType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimalArmorItem$BodyType$$Type = (("equestrian") | ("canine"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnimalArmorItem$BodyType$$Original = $AnimalArmorItem$BodyType;}
declare module "net.minecraft.world.item.TooltipFlag$Default" {
import {$TooltipFlag$$Interface} from "net.minecraft.world.item.TooltipFlag"
import {$Record} from "java.lang.Record"

export class $TooltipFlag$Default extends $Record implements $TooltipFlag$$Interface {
constructor(advanced: boolean, creative: boolean)

public "isCreative"(): boolean
public "isAdvanced"(): boolean
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "creative"(): boolean
public "advanced"(): boolean
public "asCreative"(): $TooltipFlag$Default
public "hasControlDown"(): boolean
public "hasAltDown"(): boolean
public "hasShiftDown"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TooltipFlag$Default$$Type = ({"advanced"?: boolean, "creative"?: boolean}) | ([advanced?: boolean, creative?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TooltipFlag$Default$$Original = $TooltipFlag$Default;}
declare module "net.minecraft.world.item.enchantment.effects.EnchantmentValueEffect" {
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$Codec} from "com.mojang.serialization.Codec"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export interface $EnchantmentValueEffect$$Interface {
}

export class $EnchantmentValueEffect implements $EnchantmentValueEffect$$Interface {
static readonly "CODEC": $Codec<($EnchantmentValueEffect)>

static "bootstrap"(arg0: $Registry$$Type<($MapCodec$$Type<($EnchantmentValueEffect$$Type)>)>): $MapCodec<($EnchantmentValueEffect)>
 "process"(arg0: integer, arg1: $RandomSource$$Type, arg2: float): float
 "codec"(): $MapCodec<($EnchantmentValueEffect)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentValueEffect$$Type = ($EnchantmentValueEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantmentValueEffect$$Original = $EnchantmentValueEffect;}
declare module "net.minecraft.world.item.crafting.RecipeType" {
import {$SmokingRecipe} from "net.minecraft.world.item.crafting.SmokingRecipe"
import {$BlastingRecipe} from "net.minecraft.world.item.crafting.BlastingRecipe"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$StonecutterRecipe} from "net.minecraft.world.item.crafting.StonecutterRecipe"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$SmeltingRecipe} from "net.minecraft.world.item.crafting.SmeltingRecipe"
import {$CraftingRecipe} from "net.minecraft.world.item.crafting.CraftingRecipe"
import {$SmithingRecipe} from "net.minecraft.world.item.crafting.SmithingRecipe"
import {$CampfireCookingRecipe} from "net.minecraft.world.item.crafting.CampfireCookingRecipe"

export interface $RecipeType$$Interface<T extends $Recipe<(object)>> {
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.RecipeType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.RecipeTypeTag
}

export class $RecipeType<T extends $Recipe<(object)>> implements $RecipeType$$Interface {
static readonly "BLASTING": $RecipeType<($BlastingRecipe)>
static readonly "STONECUTTING": $RecipeType<($StonecutterRecipe)>
static readonly "CRAFTING": $RecipeType<($CraftingRecipe)>
static readonly "SMELTING": $RecipeType<($SmeltingRecipe)>
static readonly "SMOKING": $RecipeType<($SmokingRecipe)>
static readonly "CAMPFIRE_COOKING": $RecipeType<($CampfireCookingRecipe)>
static readonly "SMITHING": $RecipeType<($SmithingRecipe)>

static "register"<T extends $Recipe<(object)>>(arg0: StringJS): $RecipeType<(T)>
static "simple"<T extends $Recipe<(object)>>(arg0: $ResourceLocation$$Type): $RecipeType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeType$$Type<T> = (Special.RecipeType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeType$$Original<T> = $RecipeType<(T)>;}
declare module "net.minecraft.world.item.ArmorMaterial$Layer" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"

export class $ArmorMaterial$Layer {
constructor(arg0: $ResourceLocation$$Type, arg1: StringJS, arg2: boolean)
constructor(arg0: $ResourceLocation$$Type)

public "dyeable"(): boolean
public "texture"(arg0: boolean): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmorMaterial$Layer$$Type = ($ArmorMaterial$Layer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArmorMaterial$Layer$$Original = $ArmorMaterial$Layer;}
declare module "net.minecraft.world.item.crafting.ShapedRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ShapedRecipeAccessor$$Interface} from "com.simibubi.create.foundation.mixin.accessor.ShapedRecipeAccessor"
import {$CraftingBookCategory, $CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ShapedRecipePattern, $ShapedRecipePattern$$Type} from "net.minecraft.world.item.crafting.ShapedRecipePattern"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$CraftingRecipe$$Interface} from "net.minecraft.world.item.crafting.CraftingRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $ShapedRecipe implements $CraftingRecipe$$Interface, $ShapedRecipeAccessor$$Interface {
readonly "result": $ItemStack
readonly "pattern": $ShapedRecipePattern
readonly "group": StringJS

constructor(arg0: StringJS, arg1: $CraftingBookCategory$$Type, arg2: $ShapedRecipePattern$$Type, arg3: $ItemStack$$Type, arg4: boolean)
constructor(arg0: StringJS, arg1: $CraftingBookCategory$$Type, arg2: $ShapedRecipePattern$$Type, arg3: $ItemStack$$Type)

public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "category"(): $CraftingBookCategory
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getWidth"(): integer
public "getHeight"(): integer
public "getGroup"(): StringJS
public "isIncomplete"(): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "showNotification"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "create$getPattern"(): $ShapedRecipePattern
public "getType"(): $RecipeType<(never)>
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
public "isSpecial"(): boolean
public "getToastSymbol"(): $ItemStack
get "serializer"(): $RecipeSerializer<(never)>
get "width"(): integer
get "height"(): integer
get "incomplete"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "type"(): $RecipeType<(never)>
get "special"(): boolean
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedRecipe$$Type = ($ShapedRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapedRecipe$$Original = $ShapedRecipe;}
declare module "net.minecraft.world.item.Items" {
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockItem$$Type} from "net.minecraft.world.item.BlockItem"

export class $Items {
static readonly "GREEN_CONCRETE_POWDER": $Item
static readonly "FOX_SPAWN_EGG": $Item
static readonly "PIGLIN_HEAD": $Item
static readonly "SHAPER_ARMOR_TRIM_SMITHING_TEMPLATE": $Item
static readonly "PURPLE_CARPET": $Item
static readonly "GOLDEN_PICKAXE": $Item
static readonly "SMALL_AMETHYST_BUD": $Item
static readonly "DEAD_TUBE_CORAL": $Item
static readonly "WOLF_SPAWN_EGG": $Item
static readonly "GREEN_GLAZED_TERRACOTTA": $Item
static readonly "JUNGLE_PRESSURE_PLATE": $Item
static readonly "EXPOSED_CUT_COPPER": $Item
static readonly "TRAPPED_CHEST": $Item
static readonly "BEE_SPAWN_EGG": $Item
static readonly "STONE_BRICK_STAIRS": $Item
static readonly "SANDSTONE_WALL": $Item
static readonly "RABBIT_STEW": $Item
static readonly "OAK_WOOD": $Item
static readonly "WHITE_TULIP": $Item
static readonly "GRAY_STAINED_GLASS": $Item
static readonly "BLUE_ORCHID": $Item
static readonly "SPRUCE_DOOR": $Item
static readonly "STRIPPED_BIRCH_LOG": $Item
static readonly "LIGHT_BLUE_TERRACOTTA": $Item
static readonly "CHERRY_BOAT": $Item
static readonly "ZOMBIE_HEAD": $Item
static readonly "BROWN_WOOL": $Item
static readonly "FIRE_CHARGE": $Item
static readonly "GRANITE_WALL": $Item
static readonly "MANGROVE_BOAT": $Item
static readonly "SHORT_GRASS": $Item
static readonly "ORANGE_SHULKER_BOX": $Item
static readonly "FLINT_AND_STEEL": $Item
static readonly "GREEN_CANDLE": $Item
static readonly "CRACKED_STONE_BRICKS": $Item
static readonly "BRICK_SLAB": $Item
static readonly "BLUE_CANDLE": $Item
static readonly "LAPIS_BLOCK": $Item
static readonly "JUNGLE_SLAB": $Item
static readonly "PURPLE_BED": $Item
static readonly "END_STONE_BRICK_STAIRS": $Item
static readonly "CLOCK": $Item
static readonly "MUSIC_DISC_STRAD": $Item
static readonly "JUNGLE_PLANKS": $Item
static readonly "DIAMOND_HORSE_ARMOR": $Item
static readonly "CHEST_MINECART": $Item
static readonly "TURTLE_EGG": $Item
static readonly "DIAMOND": $Item
static readonly "WOODEN_SHOVEL": $Item
static readonly "WHITE_CANDLE": $Item
static readonly "VERDANT_FROGLIGHT": $Item
static readonly "COBBLESTONE": $Item
static readonly "TUBE_CORAL": $Item
static readonly "GILDED_BLACKSTONE": $Item
static readonly "CYAN_STAINED_GLASS_PANE": $Item
static readonly "WAXED_COPPER_BULB": $Item
static readonly "SMOOTH_RED_SANDSTONE_SLAB": $Item
static readonly "CHISELED_SANDSTONE": $Item
static readonly "ARROW": $Item
static readonly "TOTEM_OF_UNDYING": $Item
static readonly "LIGHT_BLUE_SHULKER_BOX": $Item
static readonly "NETHER_BRICK_WALL": $Item
static readonly "AXOLOTL_SPAWN_EGG": $Item
static readonly "WAXED_WEATHERED_CUT_COPPER_STAIRS": $Item
static readonly "RED_WOOL": $Item
static readonly "COMMAND_BLOCK": $Item
static readonly "ROOTED_DIRT": $Item
static readonly "PRISMARINE_STAIRS": $Item
static readonly "DEEPSLATE_TILE_STAIRS": $Item
static readonly "POLISHED_ANDESITE": $Item
static readonly "CRAFTING_TABLE": $Item
static readonly "MOJANG_BANNER_PATTERN": $Item
static readonly "CORNFLOWER": $Item
static readonly "SCULK_SHRIEKER": $Item
static readonly "INFESTED_COBBLESTONE": $Item
static readonly "TORCHFLOWER_SEEDS": $Item
static readonly "DIORITE": $Item
static readonly "LIGHT_BLUE_CONCRETE": $Item
static readonly "POLISHED_ANDESITE_SLAB": $Item
static readonly "END_CRYSTAL": $Item
static readonly "POLISHED_BLACKSTONE_BUTTON": $Item
static readonly "MOSSY_STONE_BRICK_WALL": $Item
static readonly "POLISHED_DEEPSLATE_WALL": $Item
static readonly "HORSE_SPAWN_EGG": $Item
static readonly "WARPED_SLAB": $Item
static readonly "SKELETON_HORSE_SPAWN_EGG": $Item
static readonly "STONE_BRICK_WALL": $Item
static readonly "DARK_OAK_WOOD": $Item
static readonly "WAXED_EXPOSED_CUT_COPPER_STAIRS": $Item
static readonly "CRIMSON_HYPHAE": $Item
static readonly "JUKEBOX": $Item
static readonly "DARK_OAK_BUTTON": $Item
static readonly "APPLE": $Item
static readonly "BIRCH_BOAT": $Item
static readonly "BUCKET": $Item
static readonly "GOAT_HORN": $Item
static readonly "CRACKED_DEEPSLATE_BRICKS": $Item
static readonly "CHERRY_PRESSURE_PLATE": $Item
static readonly "WARPED_STAIRS": $Item
static readonly "MANGROVE_PLANKS": $Item
static readonly "DEEPSLATE_TILE_WALL": $Item
static readonly "BLACK_CONCRETE_POWDER": $Item
static readonly "DARK_OAK_PRESSURE_PLATE": $Item
static readonly "MINECART": $Item
static readonly "POTION": $Item
static readonly "STRIPPED_SPRUCE_WOOD": $Item
static readonly "MANGROVE_LOG": $Item
static readonly "OAK_BUTTON": $Item
static readonly "BAMBOO_CHEST_RAFT": $Item
static readonly "GRANITE": $Item
static readonly "SAND": $Item
static readonly "SCRAPE_POTTERY_SHERD": $Item
static readonly "LIGHT": $Item
static readonly "BROWN_TERRACOTTA": $Item
static readonly "ORANGE_STAINED_GLASS_PANE": $Item
static readonly "WOODEN_AXE": $Item
static readonly "FILLED_MAP": $Item
static readonly "REINFORCED_DEEPSLATE": $Item
static readonly "MOURNER_POTTERY_SHERD": $Item
static readonly "INK_SAC": $Item
static readonly "NETHER_WART": $Item
static readonly "YELLOW_CARPET": $Item
static readonly "RECOVERY_COMPASS": $Item
static readonly "BEETROOT": $Item
static readonly "LILY_OF_THE_VALLEY": $Item
static readonly "DEEPSLATE_TILES": $Item
static readonly "HAY_BLOCK": $Item
static readonly "COOKIE": $Item
static readonly "IRON_LEGGINGS": $Item
static readonly "ORANGE_DYE": $Item
static readonly "LECTERN": $Item
static readonly "RAW_COPPER_BLOCK": $Item
static readonly "GLOW_INK_SAC": $Item
static readonly "CRIMSON_FENCE_GATE": $Item
static readonly "BLACK_STAINED_GLASS_PANE": $Item
static readonly "ALLIUM": $Item
static readonly "TUFF_BRICK_WALL": $Item
static readonly "COBBLESTONE_STAIRS": $Item
static readonly "CROSSBOW": $Item
static readonly "PUMPKIN_PIE": $Item
static readonly "CRYING_OBSIDIAN": $Item
static readonly "DETECTOR_RAIL": $Item
static readonly "SOUL_CAMPFIRE": $Item
static readonly "AMETHYST_CLUSTER": $Item
static readonly "PURPLE_STAINED_GLASS": $Item
static readonly "BROWN_CONCRETE_POWDER": $Item
static readonly "TUFF_STAIRS": $Item
static readonly "MANGROVE_ROOTS": $Item
static readonly "TERRACOTTA": $Item
static readonly "END_STONE_BRICKS": $Item
static readonly "BAMBOO_RAFT": $Item
static readonly "DROWNED_SPAWN_EGG": $Item
static readonly "COARSE_DIRT": $Item
static readonly "LIGHT_GRAY_GLAZED_TERRACOTTA": $Item
static readonly "GLOWSTONE": $Item
static readonly "MANGROVE_HANGING_SIGN": $Item
static readonly "DIORITE_SLAB": $Item
static readonly "SKULL_POTTERY_SHERD": $Item
static readonly "ANCIENT_DEBRIS": $Item
static readonly "WAXED_EXPOSED_COPPER_TRAPDOOR": $Item
static readonly "SUSPICIOUS_STEW": $Item
static readonly "PINK_SHULKER_BOX": $Item
static readonly "CRIMSON_DOOR": $Item
static readonly "PORKCHOP": $Item
static readonly "POLISHED_TUFF": $Item
static readonly "GLASS_PANE": $Item
static readonly "DIAMOND_ORE": $Item
static readonly "CHIPPED_ANVIL": $Item
static readonly "DEEPSLATE_COPPER_ORE": $Item
static readonly "OAK_LEAVES": $Item
static readonly "COOKED_COD": $Item
static readonly "CYAN_BANNER": $Item
static readonly "BAMBOO_STAIRS": $Item
static readonly "WAXED_OXIDIZED_CUT_COPPER_SLAB": $Item
static readonly "MAGENTA_BED": $Item
static readonly "SPONGE": $Item
static readonly "RED_BED": $Item
static readonly "SCULK": $Item
static readonly "RAW_IRON": $Item
static readonly "TRIAL_KEY": $Item
static readonly "TIPPED_ARROW": $Item
static readonly "IRON_NUGGET": $Item
static readonly "MANGROVE_TRAPDOOR": $Item
static readonly "CANDLE": $Item
static readonly "STRIPPED_SPRUCE_LOG": $Item
static readonly "WAXED_EXPOSED_COPPER_DOOR": $Item
static readonly "WOODEN_SWORD": $Item
static readonly "COPPER_GRATE": $Item
static readonly "CHORUS_PLANT": $Item
static readonly "NETHER_BRICK": $Item
static readonly "ANDESITE_STAIRS": $Item
static readonly "PIGLIN_SPAWN_EGG": $Item
static readonly "STONE_HOE": $Item
static readonly "WAXED_WEATHERED_COPPER_BULB": $Item
static readonly "BRICKS": $Item
static readonly "CAT_SPAWN_EGG": $Item
static readonly "RED_NETHER_BRICK_WALL": $Item
static readonly "WET_SPONGE": $Item
static readonly "STRUCTURE_BLOCK": $Item
static readonly "SPIDER_SPAWN_EGG": $Item
static readonly "CHERRY_BUTTON": $Item
static readonly "RED_CARPET": $Item
static readonly "ENCHANTING_TABLE": $Item
static readonly "PHANTOM_SPAWN_EGG": $Item
static readonly "GUSTER_BANNER_PATTERN": $Item
static readonly "YELLOW_STAINED_GLASS": $Item
static readonly "PIGLIN_BANNER_PATTERN": $Item
static readonly "DEEPSLATE": $Item
static readonly "BAT_SPAWN_EGG": $Item
static readonly "RED_BANNER": $Item
static readonly "TADPOLE_SPAWN_EGG": $Item
static readonly "BLUE_STAINED_GLASS_PANE": $Item
static readonly "SPRUCE_LOG": $Item
static readonly "COPPER_TRAPDOOR": $Item
static readonly "BIRCH_FENCE": $Item
static readonly "MAP": $Item
static readonly "HOGLIN_SPAWN_EGG": $Item
static readonly "SOUL_LANTERN": $Item
static readonly "POLISHED_BLACKSTONE_BRICKS": $Item
static readonly "WHITE_STAINED_GLASS_PANE": $Item
static readonly "LIME_STAINED_GLASS": $Item
static readonly "DIORITE_WALL": $Item
static readonly "MAGMA_BLOCK": $Item
static readonly "GLOWSTONE_DUST": $Item
static readonly "STRIDER_SPAWN_EGG": $Item
static readonly "DARK_OAK_SIGN": $Item
static readonly "GOLDEN_SHOVEL": $Item
static readonly "POLISHED_DEEPSLATE": $Item
static readonly "RABBIT_SPAWN_EGG": $Item
static readonly "BLUE_CONCRETE_POWDER": $Item
static readonly "CHORUS_FLOWER": $Item
static readonly "BLACK_GLAZED_TERRACOTTA": $Item
static readonly "WRITTEN_BOOK": $Item
static readonly "RED_STAINED_GLASS": $Item
static readonly "DIAMOND_PICKAXE": $Item
static readonly "BARRIER": $Item
static readonly "ENCHANTED_BOOK": $Item
static readonly "WARPED_FENCE_GATE": $Item
static readonly "DEEPSLATE_REDSTONE_ORE": $Item
static readonly "BAMBOO_MOSAIC_STAIRS": $Item
static readonly "DEEPSLATE_BRICK_STAIRS": $Item
static readonly "CLAY_BALL": $Item
static readonly "WANDERING_TRADER_SPAWN_EGG": $Item
static readonly "LEATHER_BOOTS": $Item
static readonly "MILK_BUCKET": $Item
static readonly "COOKED_BEEF": $Item
static readonly "GRAY_CANDLE": $Item
static readonly "FARMLAND": $Item
static readonly "SKELETON_SPAWN_EGG": $Item
static readonly "TRIAL_SPAWNER": $Item
static readonly "SMOOTH_BASALT": $Item
static readonly "PRISMARINE_BRICKS": $Item
static readonly "DARK_OAK_LOG": $Item
static readonly "BRAIN_CORAL_FAN": $Item
static readonly "LEATHER_LEGGINGS": $Item
static readonly "WEATHERED_CUT_COPPER_SLAB": $Item
static readonly "OMINOUS_TRIAL_KEY": $Item
static readonly "FISHING_ROD": $Item
static readonly "WARDEN_SPAWN_EGG": $Item
static readonly "ACACIA_HANGING_SIGN": $Item
static readonly "MAGENTA_SHULKER_BOX": $Item
static readonly "ENDER_PEARL": $Item
static readonly "QUARTZ_PILLAR": $Item
static readonly "WARPED_TRAPDOOR": $Item
static readonly "AXOLOTL_BUCKET": $Item
static readonly "STRIPPED_BAMBOO_BLOCK": $Item
static readonly "GOAT_SPAWN_EGG": $Item
static readonly "REDSTONE_BLOCK": $Item
static readonly "COBBLED_DEEPSLATE_WALL": $Item
static readonly "MUSIC_DISC_PIGSTEP": $Item
static readonly "CHISELED_POLISHED_BLACKSTONE": $Item
static readonly "EXPOSED_CHISELED_COPPER": $Item
static readonly "BIRCH_SLAB": $Item
static readonly "LIME_SHULKER_BOX": $Item
static readonly "QUARTZ_SLAB": $Item
static readonly "OXIDIZED_COPPER_GRATE": $Item
static readonly "QUARTZ_BLOCK": $Item
static readonly "SHEEP_SPAWN_EGG": $Item
static readonly "PIGLIN_BRUTE_SPAWN_EGG": $Item
static readonly "SNOW": $Item
static readonly "SUGAR_CANE": $Item
static readonly "TNT_MINECART": $Item
static readonly "WITCH_SPAWN_EGG": $Item
static readonly "ACACIA_FENCE": $Item
static readonly "ARMOR_STAND": $Item
static readonly "DARK_OAK_FENCE": $Item
static readonly "HORN_CORAL": $Item
static readonly "BOW": $Item
static readonly "TUBE_CORAL_FAN": $Item
static readonly "SUGAR": $Item
static readonly "MOSSY_COBBLESTONE": $Item
static readonly "WARPED_FENCE": $Item
static readonly "DAYLIGHT_DETECTOR": $Item
static readonly "POLISHED_TUFF_WALL": $Item
static readonly "RABBIT_HIDE": $Item
static readonly "BUBBLE_CORAL": $Item
static readonly "JUNGLE_STAIRS": $Item
static readonly "CYAN_CARPET": $Item
static readonly "OXIDIZED_COPPER_DOOR": $Item
static readonly "OBSERVER": $Item
static readonly "DEEPSLATE_DIAMOND_ORE": $Item
static readonly "AMETHYST_BLOCK": $Item
static readonly "SPRUCE_TRAPDOOR": $Item
static readonly "JUNGLE_BOAT": $Item
static readonly "CHERRY_STAIRS": $Item
static readonly "CUT_COPPER": $Item
static readonly "BLAST_FURNACE": $Item
static readonly "RED_SANDSTONE_SLAB": $Item
static readonly "OBSIDIAN": $Item
static readonly "FIRE_CORAL_FAN": $Item
static readonly "AZURE_BLUET": $Item
static readonly "DEBUG_STICK": $Item
static readonly "PURPLE_STAINED_GLASS_PANE": $Item
static readonly "LIME_GLAZED_TERRACOTTA": $Item
static readonly "HUSK_SPAWN_EGG": $Item
static readonly "CARTOGRAPHY_TABLE": $Item
static readonly "BOLT_ARMOR_TRIM_SMITHING_TEMPLATE": $Item
static readonly "ORANGE_CANDLE": $Item
static readonly "CHARCOAL": $Item
static readonly "ZOMBIE_SPAWN_EGG": $Item
static readonly "BEETROOT_SOUP": $Item
static readonly "WITHER_ROSE": $Item
static readonly "DEAD_BRAIN_CORAL_FAN": $Item
static readonly "PISTON": $Item
static readonly "NETHERITE_CHESTPLATE": $Item
static readonly "BLACK_CANDLE": $Item
static readonly "CUT_RED_SANDSTONE": $Item
static readonly "YELLOW_BANNER": $Item
static readonly "BIRCH_SAPLING": $Item
static readonly "LIME_CONCRETE": $Item
static readonly "CHAINMAIL_LEGGINGS": $Item
static readonly "PURPUR_SLAB": $Item
static readonly "SNOWBALL": $Item
static readonly "PURPLE_CONCRETE_POWDER": $Item
static readonly "PURPLE_BANNER": $Item
static readonly "BIRCH_LOG": $Item
static readonly "DEEPSLATE_BRICK_WALL": $Item
static readonly "DARK_PRISMARINE_SLAB": $Item
static readonly "ACACIA_PLANKS": $Item
static readonly "MYCELIUM": $Item
static readonly "RED_SANDSTONE": $Item
static readonly "BROWN_CONCRETE": $Item
static readonly "LEATHER_CHESTPLATE": $Item
static readonly "PRISMARINE_BRICK_STAIRS": $Item
static readonly "BUNDLE": $Item
static readonly "STONE_SLAB": $Item
static readonly "LEATHER_HORSE_ARMOR": $Item
static readonly "BIRCH_LEAVES": $Item
static readonly "BAMBOO_FENCE_GATE": $Item
static readonly "DEEPSLATE_GOLD_ORE": $Item
static readonly "NETHER_BRICK_FENCE": $Item
static readonly "FIREWORK_ROCKET": $Item
static readonly "BROWN_MUSHROOM": $Item
static readonly "TUFF_BRICK_SLAB": $Item
static readonly "CYAN_SHULKER_BOX": $Item
static readonly "POLISHED_BLACKSTONE_SLAB": $Item
static readonly "WAXED_EXPOSED_CHISELED_COPPER": $Item
static readonly "NETHERITE_BLOCK": $Item
static readonly "OCELOT_SPAWN_EGG": $Item
static readonly "ACACIA_PRESSURE_PLATE": $Item
static readonly "RED_SAND": $Item
static readonly "PACKED_MUD": $Item
static readonly "SHEARS": $Item
static readonly "POLISHED_GRANITE_STAIRS": $Item
static readonly "MAGENTA_BANNER": $Item
static readonly "QUARTZ_STAIRS": $Item
static readonly "DRIED_KELP_BLOCK": $Item
static readonly "SCULK_VEIN": $Item
static readonly "BREWING_STAND": $Item
static readonly "CACTUS": $Item
static readonly "SMOOTH_QUARTZ_SLAB": $Item
static readonly "CAKE": $Item
static readonly "CHAINMAIL_BOOTS": $Item
static readonly "STRIPPED_ACACIA_WOOD": $Item
static readonly "FIREWORK_STAR": $Item
static readonly "PURPLE_DYE": $Item
static readonly "COW_SPAWN_EGG": $Item
static readonly "BAMBOO_MOSAIC_SLAB": $Item
static readonly "ELDER_GUARDIAN_SPAWN_EGG": $Item
static readonly "LIGHT_GRAY_BANNER": $Item
static readonly "GREEN_BANNER": $Item
static readonly "SPRUCE_SIGN": $Item
static readonly "BLUE_STAINED_GLASS": $Item
static readonly "ZOMBIE_VILLAGER_SPAWN_EGG": $Item
static readonly "CHISELED_TUFF_BRICKS": $Item
static readonly "STRIPPED_BIRCH_WOOD": $Item
static readonly "SLIME_BLOCK": $Item
static readonly "RED_MUSHROOM": $Item
static readonly "DRIED_KELP": $Item
static readonly "BAMBOO_FENCE": $Item
static readonly "SPRUCE_SAPLING": $Item
static readonly "LIGHT_BLUE_STAINED_GLASS": $Item
static readonly "MUTTON": $Item
static readonly "NAUTILUS_SHELL": $Item
static readonly "EXPOSED_COPPER_DOOR": $Item
static readonly "GLOBE_BANNER_PATTERN": $Item
static readonly "POLISHED_GRANITE_SLAB": $Item
static readonly "SMOOTH_RED_SANDSTONE_STAIRS": $Item
static readonly "WAXED_COPPER_TRAPDOOR": $Item
static readonly "BRAIN_CORAL": $Item
static readonly "TURTLE_HELMET": $Item
static readonly "PUFFERFISH_BUCKET": $Item
static readonly "COMPARATOR": $Item
static readonly "PIG_SPAWN_EGG": $Item
static readonly "REDSTONE_ORE": $Item
static readonly "STRIPPED_CRIMSON_HYPHAE": $Item
static readonly "SPIDER_EYE": $Item
static readonly "PINK_CANDLE": $Item
static readonly "DEAD_FIRE_CORAL_BLOCK": $Item
static readonly "RED_SANDSTONE_WALL": $Item
static readonly "WITHER_SKELETON_SKULL": $Item
static readonly "LIGHT_GRAY_TERRACOTTA": $Item
static readonly "LIGHT_BLUE_STAINED_GLASS_PANE": $Item
static readonly "FLOW_POTTERY_SHERD": $Item
static readonly "GRASS_BLOCK": $Item
static readonly "KNOWLEDGE_BOOK": $Item
static readonly "EXPOSED_COPPER_TRAPDOOR": $Item
static readonly "NETHERITE_AXE": $Item
static readonly "MAGENTA_STAINED_GLASS": $Item
static readonly "CRIMSON_PRESSURE_PLATE": $Item
static readonly "COAL_ORE": $Item
static readonly "FURNACE_MINECART": $Item
static readonly "DEEPSLATE_BRICKS": $Item
static readonly "WAXED_EXPOSED_COPPER_BULB": $Item
static readonly "PRISMARINE_CRYSTALS": $Item
static readonly "ICE": $Item
static readonly "PURPLE_SHULKER_BOX": $Item
static readonly "RIB_ARMOR_TRIM_SMITHING_TEMPLATE": $Item
static readonly "LIGHT_GRAY_CONCRETE_POWDER": $Item
static readonly "STRIPPED_OAK_WOOD": $Item
static readonly "DEEPSLATE_BRICK_SLAB": $Item
static readonly "GOLD_ORE": $Item
static readonly "GREEN_CARPET": $Item
static readonly "OCHRE_FROGLIGHT": $Item
static readonly "POLISHED_BLACKSTONE": $Item
static readonly "BLAZE_POWDER": $Item
static readonly "CLAY": $Item
static readonly "TUBE_CORAL_BLOCK": $Item
static readonly "LILAC": $Item
static readonly "RED_SANDSTONE_STAIRS": $Item
static readonly "RABBIT_FOOT": $Item
static readonly "STRIPPED_CHERRY_LOG": $Item
static readonly "WAXED_CUT_COPPER_STAIRS": $Item
static readonly "DARK_PRISMARINE": $Item
static readonly "REDSTONE": $Item
static readonly "MUSIC_DISC_WAIT": $Item
static readonly "WAXED_EXPOSED_COPPER_GRATE": $Item
static readonly "NETHER_SPROUTS": $Item
static readonly "LINGERING_POTION": $Item
static readonly "BUBBLE_CORAL_BLOCK": $Item
static readonly "BLUE_GLAZED_TERRACOTTA": $Item
static readonly "WHITE_DYE": $Item
static readonly "BRICK_WALL": $Item
static readonly "ACACIA_FENCE_GATE": $Item
static readonly "SLIME_BALL": $Item
static readonly "GLOW_LICHEN": $Item
static readonly "CHERRY_DOOR": $Item
static readonly "BIRCH_FENCE_GATE": $Item
static readonly "LIGHT_GRAY_CONCRETE": $Item
static readonly "DIAMOND_LEGGINGS": $Item
static readonly "DRAGON_BREATH": $Item
static readonly "OXIDIZED_CUT_COPPER_SLAB": $Item
static readonly "MOSSY_COBBLESTONE_STAIRS": $Item
static readonly "DARK_OAK_TRAPDOOR": $Item
static readonly "YELLOW_TERRACOTTA": $Item
static readonly "WITHER_SPAWN_EGG": $Item
static readonly "WEATHERED_CHISELED_COPPER": $Item
static readonly "CHISELED_RED_SANDSTONE": $Item
static readonly "JUNGLE_WOOD": $Item
static readonly "WARPED_FUNGUS_ON_A_STICK": $Item
static readonly "PUMPKIN_SEEDS": $Item
static readonly "CRACKED_DEEPSLATE_TILES": $Item
static readonly "NETHERITE_INGOT": $Item
static readonly "WHITE_BANNER": $Item
static readonly "ACACIA_DOOR": $Item
static readonly "FLOWERING_AZALEA": $Item
static readonly "MOSSY_STONE_BRICKS": $Item
static readonly "PRISMARINE": $Item
static readonly "WARPED_BUTTON": $Item
static readonly "TUFF_SLAB": $Item
static readonly "DEAD_TUBE_CORAL_BLOCK": $Item
static readonly "GOLDEN_HELMET": $Item
static readonly "SMOOTH_SANDSTONE": $Item
static readonly "DIAMOND_BLOCK": $Item
static readonly "MUSIC_DISC_5": $Item
static readonly "OAK_SAPLING": $Item
static readonly "POLISHED_DEEPSLATE_SLAB": $Item
static readonly "PARROT_SPAWN_EGG": $Item
static readonly "MANGROVE_FENCE_GATE": $Item
static readonly "CHISELED_DEEPSLATE": $Item
static readonly "STONE_BRICK_SLAB": $Item
static readonly "CUT_COPPER_STAIRS": $Item
static readonly "GRAY_CONCRETE": $Item
static readonly "DARK_OAK_LEAVES": $Item
static readonly "EXPOSED_COPPER_GRATE": $Item
static readonly "BAMBOO_PRESSURE_PLATE": $Item
static readonly "IRON_AXE": $Item
static readonly "MELON": $Item
static readonly "SEA_LANTERN": $Item
static readonly "GREEN_CONCRETE": $Item
static readonly "LANTERN": $Item
static readonly "SHIELD": $Item
static readonly "SMOOTH_STONE_SLAB": $Item
static readonly "SMOOTH_STONE": $Item
static readonly "COD_SPAWN_EGG": $Item
static readonly "GREEN_STAINED_GLASS_PANE": $Item
static readonly "ORANGE_CONCRETE": $Item
static readonly "BONE": $Item
static readonly "RED_NETHER_BRICKS": $Item
static readonly "POISONOUS_POTATO": $Item
static readonly "MANGROVE_DOOR": $Item
static readonly "MUSIC_DISC_FAR": $Item
static readonly "CYAN_CONCRETE_POWDER": $Item
static readonly "WAXED_COPPER_BLOCK": $Item
static readonly "SMOKER": $Item
static readonly "BIRCH_PLANKS": $Item
static readonly "WOODEN_PICKAXE": $Item
static readonly "REPEATING_COMMAND_BLOCK": $Item
static readonly "TURTLE_SPAWN_EGG": $Item
static readonly "RED_CONCRETE_POWDER": $Item
static readonly "BIRCH_DOOR": $Item
static readonly "CRIMSON_SIGN": $Item
static readonly "DARK_OAK_BOAT": $Item
static readonly "BLAZE_ROD": $Item
static readonly "BOOK": $Item
static readonly "YELLOW_DYE": $Item
static readonly "CHISELED_COPPER": $Item
static readonly "CRIMSON_TRAPDOOR": $Item
static readonly "WEATHERED_COPPER_TRAPDOOR": $Item
static readonly "BLUE_CARPET": $Item
static readonly "DEEPSLATE_TILE_SLAB": $Item
static readonly "GOLDEN_HORSE_ARMOR": $Item
static readonly "DRAGON_EGG": $Item
static readonly "EXPOSED_COPPER": $Item
static readonly "WEATHERED_CUT_COPPER_STAIRS": $Item
static readonly "SANDSTONE": $Item
static readonly "CRIMSON_STAIRS": $Item
static readonly "COBBLED_DEEPSLATE_SLAB": $Item
static readonly "MUSIC_DISC_MELLOHI": $Item
static readonly "MOSS_CARPET": $Item
static readonly "BREAD": $Item
static readonly "ANVIL": $Item
static readonly "REPEATER": $Item
static readonly "CRIMSON_HANGING_SIGN": $Item
static readonly "OXIDIZED_COPPER_BULB": $Item
static readonly "MANGROVE_CHEST_BOAT": $Item
static readonly "DEAD_BRAIN_CORAL": $Item
static readonly "BOOKSHELF": $Item
static readonly "SMOOTH_QUARTZ_STAIRS": $Item
static readonly "DANGER_POTTERY_SHERD": $Item
static readonly "LIGHT_BLUE_CANDLE": $Item
static readonly "WILD_ARMOR_TRIM_SMITHING_TEMPLATE": $Item
static readonly "COOKED_CHICKEN": $Item
static readonly "SPRUCE_WOOD": $Item
static readonly "BLACK_TERRACOTTA": $Item
static readonly "STONE_STAIRS": $Item
static readonly "EXPERIENCE_BOTTLE": $Item
static readonly "POLISHED_TUFF_SLAB": $Item
static readonly "POWDER_SNOW_BUCKET": $Item
static readonly "COMMAND_BLOCK_MINECART": $Item
static readonly "PHANTOM_MEMBRANE": $Item
static readonly "LIME_WOOL": $Item
static readonly "SPRUCE_FENCE": $Item
static readonly "SALMON": $Item
static readonly "OAK_PRESSURE_PLATE": $Item
static readonly "HONEY_BLOCK": $Item
static readonly "STRIPPED_DARK_OAK_WOOD": $Item
static readonly "MEDIUM_AMETHYST_BUD": $Item
static readonly "BIRCH_STAIRS": $Item
static readonly "MANGROVE_BUTTON": $Item
static readonly "BIRCH_TRAPDOOR": $Item
static readonly "COMPOSTER": $Item
static readonly "PITCHER_POD": $Item
static readonly "ORANGE_STAINED_GLASS": $Item
static readonly "GOLD_INGOT": $Item
static readonly "DECORATED_POT": $Item
static readonly "GLASS": $Item
static readonly "STRIPPED_MANGROVE_LOG": $Item
static readonly "ITEM_FRAME": $Item
static readonly "CHERRY_PLANKS": $Item
static readonly "NETHERITE_BOOTS": $Item
static readonly "SOUL_SAND": $Item
static readonly "EMERALD": $Item
static readonly "DIAMOND_HELMET": $Item
static readonly "GREEN_STAINED_GLASS": $Item
static readonly "GRAY_STAINED_GLASS_PANE": $Item
static readonly "SHULKER_SHELL": $Item
static readonly "BLUE_WOOL": $Item
static readonly "MAGENTA_WOOL": $Item
static readonly "PITCHER_PLANT": $Item
static readonly "BAMBOO_DOOR": $Item
static readonly "DEAD_HORN_CORAL": $Item
static readonly "IRON_HELMET": $Item
static readonly "COCOA_BEANS": $Item
static readonly "PINK_BED": $Item
static readonly "CYAN_CANDLE": $Item
static readonly "POPPY": $Item
static readonly "CYAN_TERRACOTTA": $Item
static readonly "TRIPWIRE_HOOK": $Item
static readonly "PACKED_ICE": $Item
static readonly "YELLOW_CONCRETE": $Item
static readonly "WEATHERED_COPPER_DOOR": $Item
static readonly "ACACIA_STAIRS": $Item
static readonly "COMPASS": $Item
static readonly "VINE": $Item
static readonly "INFESTED_STONE_BRICKS": $Item
static readonly "GOLDEN_CHESTPLATE": $Item
static readonly "COPPER_ORE": $Item
static readonly "NETHERITE_HOE": $Item
static readonly "BAMBOO_TRAPDOOR": $Item
static readonly "CARROT": $Item
static readonly "MAGMA_CUBE_SPAWN_EGG": $Item
static readonly "MUSIC_DISC_13": $Item
static readonly "MUSIC_DISC_WARD": $Item
static readonly "PODZOL": $Item
static readonly "WARPED_WART_BLOCK": $Item
static readonly "MUSIC_DISC_11": $Item
static readonly "POLISHED_BLACKSTONE_WALL": $Item
static readonly "WARPED_NYLIUM": $Item
static readonly "STRIPPED_CRIMSON_STEM": $Item
static readonly "BLUE_BED": $Item
static readonly "DEAD_FIRE_CORAL": $Item
static readonly "PLENTY_POTTERY_SHERD": $Item
static readonly "TURTLE_SCUTE": $Item
static readonly "BLACK_CARPET": $Item
static readonly "MUD": $Item
static readonly "PINK_TERRACOTTA": $Item
static readonly "SHEAF_POTTERY_SHERD": $Item
static readonly "GLOW_SQUID_SPAWN_EGG": $Item
static readonly "FIRE_CORAL_BLOCK": $Item
static readonly "DIAMOND_SHOVEL": $Item
static readonly "GRAY_GLAZED_TERRACOTTA": $Item
static readonly "BREEZE_ROD": $Item
static readonly "NAME_TAG": $Item
static readonly "CHERRY_LEAVES": $Item
static readonly "WEATHERED_COPPER_GRATE": $Item
static readonly "JUNGLE_FENCE": $Item
static readonly "SPAWNER": $Item
static readonly "POLISHED_BASALT": $Item
static readonly "ARCHER_POTTERY_SHERD": $Item
static readonly "WARPED_FUNGUS": $Item
static readonly "WHITE_CONCRETE_POWDER": $Item
static readonly "GRAY_TERRACOTTA": $Item
static readonly "RAIL": $Item
static readonly "MUSIC_DISC_PRECIPICE": $Item
static readonly "SWEET_BERRIES": $Item
static readonly "BREWER_POTTERY_SHERD": $Item
static readonly "DIAMOND_BOOTS": $Item
static readonly "WRITABLE_BOOK": $Item
static readonly "BEDROCK": $Item
static readonly "IRON_GOLEM_SPAWN_EGG": $Item
static readonly "RABBIT": $Item
static readonly "INFESTED_DEEPSLATE": $Item
static readonly "SHROOMLIGHT": $Item
static readonly "CHAIN_COMMAND_BLOCK": $Item
static readonly "CYAN_GLAZED_TERRACOTTA": $Item
static readonly "WAXED_WEATHERED_CUT_COPPER_SLAB": $Item
static readonly "GLOW_ITEM_FRAME": $Item
static readonly "ECHO_SHARD": $Item
static readonly "STRIPPED_DARK_OAK_LOG": $Item
static readonly "GRAY_WOOL": $Item
static readonly "MUSIC_DISC_CREATOR_MUSIC_BOX": $Item
static readonly "ACACIA_CHEST_BOAT": $Item
static readonly "ARMADILLO_SCUTE": $Item
static readonly "MUSIC_DISC_RELIC": $Item
static readonly "DARK_OAK_SLAB": $Item
static readonly "OAK_SIGN": $Item
static readonly "RED_CONCRETE": $Item
static readonly "CRACKED_POLISHED_BLACKSTONE_BRICKS": $Item
static readonly "ANGLER_POTTERY_SHERD": $Item
static readonly "WHEAT_SEEDS": $Item
static readonly "BEEHIVE": $Item
static readonly "WAXED_OXIDIZED_COPPER_DOOR": $Item
static readonly "GRAY_SHULKER_BOX": $Item
static readonly "WARPED_DOOR": $Item
static readonly "TROPICAL_FISH_BUCKET": $Item
static readonly "OAK_FENCE": $Item
static readonly "NETHER_BRICKS": $Item
static readonly "RED_CANDLE": $Item
static readonly "FLETCHING_TABLE": $Item
static readonly "FLOWER_BANNER_PATTERN": $Item
static readonly "EGG": $Item
static readonly "BRICK": $Item
static readonly "GRAY_BANNER": $Item
static readonly "ENDERMAN_SPAWN_EGG": $Item
static readonly "MAGENTA_CONCRETE": $Item
static readonly "JUNGLE_FENCE_GATE": $Item
static readonly "DARK_OAK_CHEST_BOAT": $Item
static readonly "BEETROOT_SEEDS": $Item
static readonly "FLOW_BANNER_PATTERN": $Item
static readonly "BLACK_SHULKER_BOX": $Item
static readonly "FROGSPAWN": $Item
static readonly "JUNGLE_TRAPDOOR": $Item
static readonly "OXIDIZED_CUT_COPPER_STAIRS": $Item
static readonly "ACTIVATOR_RAIL": $Item
static readonly "BOWL": $Item
static readonly "SILVERFISH_SPAWN_EGG": $Item
static readonly "DIRT_PATH": $Item
static readonly "GOLDEN_APPLE": $Item
static readonly "ZOMBIE_HORSE_SPAWN_EGG": $Item
static readonly "IRON_BOOTS": $Item
static readonly "ENCHANTED_GOLDEN_APPLE": $Item
static readonly "SHULKER_SPAWN_EGG": $Item
static readonly "HOPPER_MINECART": $Item
static readonly "ORANGE_CARPET": $Item
static readonly "PINK_CARPET": $Item
static readonly "STRUCTURE_VOID": $Item
static readonly "SADDLE": $Item
static readonly "STONECUTTER": $Item
static readonly "LIME_CONCRETE_POWDER": $Item
static readonly "POLISHED_BLACKSTONE_PRESSURE_PLATE": $Item
static readonly "PINK_BANNER": $Item
static readonly "GREEN_WOOL": $Item
static readonly "HORN_CORAL_FAN": $Item
static readonly "BROWN_DYE": $Item
static readonly "POPPED_CHORUS_FRUIT": $Item
static readonly "IRON_HOE": $Item
static readonly "CHERRY_FENCE": $Item
static readonly "MOSSY_COBBLESTONE_SLAB": $Item
static readonly "DARK_PRISMARINE_STAIRS": $Item
static readonly "TWISTING_VINES": $Item
static readonly "BOGGED_SPAWN_EGG": $Item
static readonly "PINK_CONCRETE": $Item
static readonly "GUNPOWDER": $Item
static readonly "LIME_BANNER": $Item
static readonly "MUSHROOM_STEW": $Item
static readonly "IRON_CHESTPLATE": $Item
static readonly "PRISMARINE_SHARD": $Item
static readonly "BIRCH_CHEST_BOAT": $Item
static readonly "JUNGLE_BUTTON": $Item
static readonly "BEEF": $Item
static readonly "WAXED_WEATHERED_COPPER": $Item
static readonly "MUSHROOM_STEM": $Item
static readonly "BLUE_TERRACOTTA": $Item
static readonly "VEX_ARMOR_TRIM_SMITHING_TEMPLATE": $Item
static readonly "EXPLORER_POTTERY_SHERD": $Item
static readonly "BROWN_MUSHROOM_BLOCK": $Item
static readonly "DEAD_TUBE_CORAL_FAN": $Item
static readonly "TADPOLE_BUCKET": $Item
static readonly "MAGENTA_GLAZED_TERRACOTTA": $Item
static readonly "TUFF_WALL": $Item
static readonly "CHISELED_BOOKSHELF": $Item
static readonly "DEAD_BUBBLE_CORAL": $Item
static readonly "RAW_GOLD": $Item
static readonly "WHITE_GLAZED_TERRACOTTA": $Item
static readonly "WAXED_OXIDIZED_COPPER": $Item
static readonly "NETHERITE_SCRAP": $Item
static readonly "GOLDEN_HOE": $Item
static readonly "GREEN_BED": $Item
static readonly "CAULDRON": $Item
static readonly "POLISHED_ANDESITE_STAIRS": $Item
static readonly "CHERRY_FENCE_GATE": $Item
static readonly "WITHER_SKELETON_SPAWN_EGG": $Item
static readonly "EMERALD_BLOCK": $Item
static readonly "IRON_SHOVEL": $Item
static readonly "LIME_STAINED_GLASS_PANE": $Item
static readonly "ORANGE_BANNER": $Item
static readonly "WAXED_WEATHERED_CHISELED_COPPER": $Item
static readonly "BLACK_DYE": $Item
static readonly "MUSIC_DISC_BLOCKS": $Item
static readonly "GOLDEN_BOOTS": $Item
static readonly "LIGHT_BLUE_GLAZED_TERRACOTTA": $Item
static readonly "OXIDIZED_COPPER": $Item
static readonly "PINK_STAINED_GLASS": $Item
static readonly "SPRUCE_STAIRS": $Item
static readonly "NETHERITE_LEGGINGS": $Item
static readonly "BLUE_ICE": $Item
static readonly "CAVE_SPIDER_SPAWN_EGG": $Item
static readonly "HEART_POTTERY_SHERD": $Item
static readonly "SCAFFOLDING": $Item
static readonly "CYAN_DYE": $Item
static readonly "BLUE_SHULKER_BOX": $Item
static readonly "HORN_CORAL_BLOCK": $Item
static readonly "CRIMSON_SLAB": $Item
static readonly "RESPAWN_ANCHOR": $Item
static readonly "SHELTER_POTTERY_SHERD": $Item
static readonly "KELP": $Item
static readonly "COPPER_BLOCK": $Item
static readonly "STRIPPED_WARPED_HYPHAE": $Item
static readonly "STRIPPED_JUNGLE_LOG": $Item
static readonly "ANDESITE_SLAB": $Item
static readonly "MINER_POTTERY_SHERD": $Item
static readonly "HOWL_POTTERY_SHERD": $Item
static readonly "SUSPICIOUS_GRAVEL": $Item
static readonly "CRIMSON_PLANKS": $Item
static readonly "GOLD_BLOCK": $Item
static readonly "DARK_OAK_FENCE_GATE": $Item
static readonly "SPRUCE_PRESSURE_PLATE": $Item
static readonly "ACACIA_LEAVES": $Item
static readonly "COBBLESTONE_SLAB": $Item
static readonly "HEAVY_WEIGHTED_PRESSURE_PLATE": $Item
static readonly "PINK_CONCRETE_POWDER": $Item
static readonly "WAXED_COPPER_GRATE": $Item
static readonly "COPPER_INGOT": $Item
static readonly "MELON_SLICE": $Item
static readonly "LIGHT_BLUE_CONCRETE_POWDER": $Item
static readonly "LIGHT_BLUE_DYE": $Item
static readonly "LAPIS_LAZULI": $Item
static readonly "CHISELED_TUFF": $Item
static readonly "WHITE_BED": $Item
static readonly "BUBBLE_CORAL_FAN": $Item
static readonly "HEARTBREAK_POTTERY_SHERD": $Item
static readonly "JUNGLE_CHEST_BOAT": $Item
static readonly "JUNGLE_LOG": $Item
static readonly "NOTE_BLOCK": $Item
static readonly "MANGROVE_SIGN": $Item
static readonly "WARPED_HYPHAE": $Item
static readonly "SLIME_SPAWN_EGG": $Item
static readonly "CHERRY_SIGN": $Item
static readonly "LAVA_BUCKET": $Item
static readonly "WAYFINDER_ARMOR_TRIM_SMITHING_TEMPLATE": $Item
static readonly "SPRUCE_SLAB": $Item
static readonly "DIAMOND_AXE": $Item
static readonly "PEONY": $Item
static readonly "OXEYE_DAISY": $Item
static readonly "STICK": $Item
static readonly "OAK_HANGING_SIGN": $Item
static readonly "WATER_BUCKET": $Item
static readonly "ACACIA_SIGN": $Item
static readonly "STRIPPED_WARPED_STEM": $Item
static readonly "WAXED_OXIDIZED_CUT_COPPER": $Item
static readonly "MOSS_BLOCK": $Item
static readonly "BEACON": $Item
static readonly "HONEYCOMB_BLOCK": $Item
static readonly "NETHER_BRICK_STAIRS": $Item
static readonly "BRUSH": $Item
static readonly "COBWEB": $Item
static readonly "PRIZE_POTTERY_SHERD": $Item
static readonly "MACE": $Item
static readonly "OAK_LOG": $Item
static readonly "STRIPPED_JUNGLE_WOOD": $Item
static readonly "DEAD_BRAIN_CORAL_BLOCK": $Item
static readonly "MUDDY_MANGROVE_ROOTS": $Item
static readonly "PUFFERFISH": $Item
static readonly "TINTED_GLASS": $Item
static readonly "MAGENTA_CANDLE": $Item
static readonly "YELLOW_BED": $Item
static readonly "LIGHT_GRAY_CANDLE": $Item
static readonly "SPLASH_POTION": $Item
static readonly "CHICKEN_SPAWN_EGG": $Item
static readonly "CHISELED_QUARTZ_BLOCK": $Item
static readonly "LIME_CARPET": $Item
static readonly "FEATHER": $Item
static readonly "DEEPSLATE_EMERALD_ORE": $Item
static readonly "MUD_BRICK_SLAB": $Item
static readonly "PURPLE_GLAZED_TERRACOTTA": $Item
static readonly "IRON_BARS": $Item
static readonly "WHITE_CONCRETE": $Item
static readonly "DIAMOND_CHESTPLATE": $Item
static readonly "STONE": $Item
static readonly "NETHERITE_SHOVEL": $Item
static readonly "YELLOW_WOOL": $Item
static readonly "ROSE_BUSH": $Item
static readonly "OMINOUS_BOTTLE": $Item
static readonly "MUD_BRICKS": $Item
static readonly "BROWN_CARPET": $Item
static readonly "WAXED_CHISELED_COPPER": $Item
static readonly "STRIPPED_CHERRY_WOOD": $Item
static readonly "GOLD_NUGGET": $Item
static readonly "BLACKSTONE_STAIRS": $Item
static readonly "GOLDEN_AXE": $Item
static readonly "ACACIA_LOG": $Item
static readonly "INFESTED_MOSSY_STONE_BRICKS": $Item
static readonly "CREEPER_SPAWN_EGG": $Item
static readonly "ORANGE_GLAZED_TERRACOTTA": $Item
static readonly "MUD_BRICK_STAIRS": $Item
static readonly "MAGENTA_CONCRETE_POWDER": $Item
static readonly "TNT": $Item
static readonly "BELL": $Item
static readonly "BLACKSTONE_SLAB": $Item
static readonly "TORCHFLOWER": $Item
static readonly "SPRUCE_HANGING_SIGN": $Item
static readonly "STRIPPED_ACACIA_LOG": $Item
static readonly "HOST_ARMOR_TRIM_SMITHING_TEMPLATE": $Item
static readonly "RAW_IRON_BLOCK": $Item
static readonly "POTATO": $Item
static readonly "GHAST_TEAR": $Item
static readonly "BROWN_BANNER": $Item
static readonly "AIR": $Item
static readonly "FROG_SPAWN_EGG": $Item
static readonly "GRANITE_STAIRS": $Item
static readonly "BEE_NEST": $Item
static readonly "PINK_PETALS": $Item
static readonly "CHEST": $Item
static readonly "DOLPHIN_SPAWN_EGG": $Item
static readonly "SCULK_SENSOR": $Item
static readonly "OAK_CHEST_BOAT": $Item
static readonly "BONE_MEAL": $Item
static readonly "LIME_DYE": $Item
static readonly "MANGROVE_FENCE": $Item
static readonly "OAK_DOOR": $Item
static readonly "LILY_PAD": $Item
static readonly "ENDER_DRAGON_SPAWN_EGG": $Item
static readonly "BAKED_POTATO": $Item
static readonly "SMALL_DRIPLEAF": $Item
static readonly "EXPOSED_CUT_COPPER_SLAB": $Item
static readonly "PURPUR_STAIRS": $Item
static readonly "LADDER": $Item
static readonly "RED_MUSHROOM_BLOCK": $Item
static readonly "WOLF_ARMOR": $Item
static readonly "CRAFTER": $Item
static readonly "BASALT": $Item
static readonly "TALL_GRASS": $Item
static readonly "BAMBOO_SIGN": $Item
static readonly "DEAD_BUSH": $Item
static readonly "FLOW_ARMOR_TRIM_SMITHING_TEMPLATE": $Item
static readonly "COD": $Item
static readonly "EXPOSED_CUT_COPPER_STAIRS": $Item
static readonly "PETRIFIED_OAK_SLAB": $Item
static readonly "MUD_BRICK_WALL": $Item
static readonly "LIGHT_BLUE_CARPET": $Item
static readonly "SCULK_CATALYST": $Item
static readonly "CALIBRATED_SCULK_SENSOR": $Item
static readonly "WAXED_OXIDIZED_CUT_COPPER_STAIRS": $Item
static readonly "PINK_DYE": $Item
static readonly "WARPED_ROOTS": $Item
static readonly "CHAIN": $Item
static readonly "FIRE_CORAL": $Item
static readonly "DEEPSLATE_IRON_ORE": $Item
static readonly "WAXED_OXIDIZED_COPPER_BULB": $Item
static readonly "CHISELED_NETHER_BRICKS": $Item
static readonly "LIGHT_GRAY_STAINED_GLASS_PANE": $Item
static readonly "HEART_OF_THE_SEA": $Item
static readonly "COAL_BLOCK": $Item
static readonly "WHITE_STAINED_GLASS": $Item
static readonly "WEATHERED_CUT_COPPER": $Item
static readonly "CALCITE": $Item
static readonly "PURPUR_PILLAR": $Item
static readonly "BLUE_DYE": $Item
static readonly "MUSIC_DISC_CHIRP": $Item
static readonly "NETHERITE_HELMET": $Item
static readonly "SNOW_GOLEM_SPAWN_EGG": $Item
static readonly "WARD_ARMOR_TRIM_SMITHING_TEMPLATE": $Item
static readonly "ACACIA_TRAPDOOR": $Item
static readonly "CHERRY_WOOD": $Item
static readonly "CHERRY_CHEST_BOAT": $Item
static readonly "CAMEL_SPAWN_EGG": $Item
static readonly "CRIMSON_STEM": $Item
static readonly "WHITE_CARPET": $Item
static readonly "VINDICATOR_SPAWN_EGG": $Item
static readonly "COAL": $Item
static readonly "RAW_GOLD_BLOCK": $Item
static readonly "CHISELED_STONE_BRICKS": $Item
static readonly "SNOUT_ARMOR_TRIM_SMITHING_TEMPLATE": $Item
static readonly "JIGSAW": $Item
static readonly "PURPUR_BLOCK": $Item
static readonly "TRIDENT": $Item
static readonly "FURNACE": $Item
static readonly "EVOKER_SPAWN_EGG": $Item
static readonly "JACK_O_LANTERN": $Item
static readonly "BIRCH_PRESSURE_PLATE": $Item
static readonly "BLACK_BED": $Item
static readonly "VILLAGER_SPAWN_EGG": $Item
static readonly "DEEPSLATE_LAPIS_ORE": $Item
static readonly "WAXED_OXIDIZED_CHISELED_COPPER": $Item
static readonly "LARGE_FERN": $Item
static readonly "QUARTZ": $Item
static readonly "SNIFFER_EGG": $Item
static readonly "CUT_RED_SANDSTONE_SLAB": $Item
static readonly "PURPLE_TERRACOTTA": $Item
static readonly "ELYTRA": $Item
static readonly "MAGMA_CREAM": $Item
static readonly "DIRT": $Item
static readonly "WEEPING_VINES": $Item
static readonly "COBBLED_DEEPSLATE": $Item
static readonly "GRAY_BED": $Item
static readonly "MULE_SPAWN_EGG": $Item
static readonly "BONE_BLOCK": $Item
static readonly "POLISHED_DIORITE": $Item
static readonly "GLISTERING_MELON_SLICE": $Item
static readonly "CUT_SANDSTONE": $Item
static readonly "WHITE_TERRACOTTA": $Item
static readonly "COD_BUCKET": $Item
static readonly "EYE_ARMOR_TRIM_SMITHING_TEMPLATE": $Item
static readonly "MOSSY_COBBLESTONE_WALL": $Item
static readonly "SKULL_BANNER_PATTERN": $Item
static readonly "GRINDSTONE": $Item
static readonly "POWERED_RAIL": $Item
static readonly "JUNGLE_SIGN": $Item
static readonly "DARK_OAK_PLANKS": $Item
static readonly "GUARDIAN_SPAWN_EGG": $Item
static readonly "ACACIA_WOOD": $Item
static readonly "END_STONE_BRICK_SLAB": $Item
static readonly "SPRUCE_BOAT": $Item
static readonly "MANGROVE_WOOD": $Item
static readonly "LIGHT_GRAY_STAINED_GLASS": $Item
static readonly "TROPICAL_FISH": $Item
static readonly "SEAGRASS": $Item
static readonly "WEATHERED_COPPER": $Item
static readonly "WAXED_WEATHERED_COPPER_GRATE": $Item
static readonly "OAK_PLANKS": $Item
static readonly "END_PORTAL_FRAME": $Item
static readonly "LEATHER": $Item
static readonly "WAXED_OXIDIZED_COPPER_TRAPDOOR": $Item
static readonly "STONE_SHOVEL": $Item
static readonly "DEEPSLATE_COAL_ORE": $Item
static readonly "FLOWER_POT": $Item
static readonly "HEAVY_CORE": $Item
static readonly "IRON_PICKAXE": $Item
static readonly "LIGHT_GRAY_DYE": $Item
static readonly "STRAY_SPAWN_EGG": $Item
static readonly "WIND_CHARGE": $Item
static readonly "RED_TERRACOTTA": $Item
static readonly "MOOSHROOM_SPAWN_EGG": $Item
static readonly "PAPER": $Item
static readonly "WAXED_EXPOSED_CUT_COPPER": $Item
static readonly "IRON_SWORD": $Item
static readonly "SALMON_BUCKET": $Item
static readonly "WARPED_SIGN": $Item
static readonly "COPPER_BULB": $Item
static readonly "CUT_STANDSTONE_SLAB": $Item
static readonly "SNOW_BLOCK": $Item
static readonly "CRIMSON_FENCE": $Item
static readonly "AMETHYST_SHARD": $Item
static readonly "BURN_POTTERY_SHERD": $Item
static readonly "POLISHED_DIORITE_SLAB": $Item
static readonly "ALLAY_SPAWN_EGG": $Item
static readonly "PILLAGER_SPAWN_EGG": $Item
static readonly "BRAIN_CORAL_BLOCK": $Item
static readonly "RAVAGER_SPAWN_EGG": $Item
static readonly "MOSSY_STONE_BRICK_SLAB": $Item
static readonly "STONE_BRICKS": $Item
static readonly "SANDSTONE_STAIRS": $Item
static readonly "GOLDEN_LEGGINGS": $Item
static readonly "BROWN_BED": $Item
static readonly "MANGROVE_LEAVES": $Item
static readonly "SMOOTH_SANDSTONE_SLAB": $Item
static readonly "CARROT_ON_A_STICK": $Item
static readonly "CHERRY_TRAPDOOR": $Item
static readonly "MAGENTA_TERRACOTTA": $Item
static readonly "SMOOTH_SANDSTONE_STAIRS": $Item
static readonly "SPRUCE_PLANKS": $Item
static readonly "DRAGON_HEAD": $Item
static readonly "CHERRY_SAPLING": $Item
static readonly "ANDESITE_WALL": $Item
static readonly "BLACK_WOOL": $Item
static readonly "LIGHT_GRAY_CARPET": $Item
static readonly "PURPLE_CONCRETE": $Item
static readonly "LIGHTNING_ROD": $Item
static readonly "ZOMBIFIED_PIGLIN_SPAWN_EGG": $Item
static readonly "CHERRY_HANGING_SIGN": $Item
static readonly "CYAN_BED": $Item
static readonly "LARGE_AMETHYST_BUD": $Item
static readonly "RED_SHULKER_BOX": $Item
static readonly "PEARLESCENT_FROGLIGHT": $Item
static readonly "STONE_PICKAXE": $Item
static readonly "MAGENTA_CARPET": $Item
static readonly "REDSTONE_TORCH": $Item
static readonly "CRIMSON_ROOTS": $Item
static readonly "STICKY_PISTON": $Item
static readonly "SMOOTH_QUARTZ": $Item
static readonly "PUMPKIN": $Item
static readonly "FLOWERING_AZALEA_LEAVES": $Item
static readonly "NETHER_WART_BLOCK": $Item
static readonly "COBBLED_DEEPSLATE_STAIRS": $Item
static readonly "COBBLESTONE_WALL": $Item
static readonly "WHEAT": $Item
static readonly "DEAD_FIRE_CORAL_FAN": $Item
static readonly "LIME_CANDLE": $Item
static readonly "ACACIA_SLAB": $Item
static readonly "SNORT_POTTERY_SHERD": $Item
static readonly "CRIMSON_NYLIUM": $Item
static readonly "OXIDIZED_COPPER_TRAPDOOR": $Item
static readonly "ORANGE_TERRACOTTA": $Item
static readonly "HONEYCOMB": $Item
static readonly "BLACK_CONCRETE": $Item
static readonly "AZALEA": $Item
static readonly "DROPPER": $Item
static readonly "MOSSY_STONE_BRICK_STAIRS": $Item
static readonly "SENTRY_ARMOR_TRIM_SMITHING_TEMPLATE": $Item
static readonly "WARPED_HANGING_SIGN": $Item
static readonly "DONKEY_SPAWN_EGG": $Item
static readonly "OAK_STAIRS": $Item
static readonly "BLACK_STAINED_GLASS": $Item
static readonly "IRON_TRAPDOOR": $Item
static readonly "NETHERITE_PICKAXE": $Item
static readonly "INFESTED_CHISELED_STONE_BRICKS": $Item
static readonly "BLUE_BANNER": $Item
static readonly "POLISHED_DIORITE_STAIRS": $Item
static readonly "WARPED_PRESSURE_PLATE": $Item
static readonly "DISC_FRAGMENT_5": $Item
static readonly "OAK_SLAB": $Item
static readonly "BAMBOO_HANGING_SIGN": $Item
static readonly "POINTED_DRIPSTONE": $Item
static readonly "WAXED_EXPOSED_COPPER": $Item
static readonly "PURPLE_CANDLE": $Item
static readonly "CRIMSON_FUNGUS": $Item
static readonly "GUSTER_POTTERY_SHERD": $Item
static readonly "DARK_OAK_HANGING_SIGN": $Item
static readonly "CREEPER_BANNER_PATTERN": $Item
static readonly "DARK_OAK_SAPLING": $Item
static readonly "CHAINMAIL_CHESTPLATE": $Item
static readonly "ACACIA_BUTTON": $Item
static readonly "MUSIC_DISC_MALL": $Item
static readonly "EMERALD_ORE": $Item
static readonly "MUSIC_DISC_STAL": $Item
static readonly "POLISHED_DEEPSLATE_STAIRS": $Item
static readonly "HONEY_BOTTLE": $Item
static readonly "OAK_FENCE_GATE": $Item
static readonly "POLISHED_BLACKSTONE_STAIRS": $Item
static readonly "WAXED_CUT_COPPER_SLAB": $Item
static readonly "BAMBOO_BLOCK": $Item
static readonly "SUNFLOWER": $Item
static readonly "CAMPFIRE": $Item
static readonly "SANDSTONE_SLAB": $Item
static readonly "MANGROVE_PRESSURE_PLATE": $Item
static readonly "SPRUCE_BUTTON": $Item
static readonly "CYAN_WOOL": $Item
static readonly "JUNGLE_HANGING_SIGN": $Item
static readonly "GHAST_SPAWN_EGG": $Item
static readonly "STRING": $Item
static readonly "PUFFERFISH_SPAWN_EGG": $Item
static readonly "SQUID_SPAWN_EGG": $Item
static readonly "TARGET": $Item
static readonly "PRISMARINE_BRICK_SLAB": $Item
static readonly "DRIPSTONE_BLOCK": $Item
static readonly "LOOM": $Item
static readonly "PANDA_SPAWN_EGG": $Item
static readonly "SALMON_SPAWN_EGG": $Item
static readonly "CREEPER_HEAD": $Item
static readonly "BAMBOO_PLANKS": $Item
static readonly "NETHER_QUARTZ_ORE": $Item
static readonly "SPIRE_ARMOR_TRIM_SMITHING_TEMPLATE": $Item
static readonly "DEAD_BUBBLE_CORAL_FAN": $Item
static readonly "NETHERITE_SWORD": $Item
static readonly "SUSPICIOUS_SAND": $Item
static readonly "BLACK_BANNER": $Item
static readonly "COPPER_DOOR": $Item
static readonly "WAXED_COPPER_DOOR": $Item
static readonly "COAST_ARMOR_TRIM_SMITHING_TEMPLATE": $Item
static readonly "RAISER_ARMOR_TRIM_SMITHING_TEMPLATE": $Item
static readonly "LIGHT_BLUE_BED": $Item
static readonly "PRISMARINE_WALL": $Item
static readonly "PINK_STAINED_GLASS_PANE": $Item
static readonly "WEATHERED_COPPER_BULB": $Item
static readonly "BLACKSTONE_WALL": $Item
static readonly "DIORITE_STAIRS": $Item
static readonly "BRICK_STAIRS": $Item
static readonly "BREEZE_SPAWN_EGG": $Item
static readonly "SPYGLASS": $Item
static readonly "BIRCH_HANGING_SIGN": $Item
static readonly "DAMAGED_ANVIL": $Item
static readonly "BAMBOO": $Item
static readonly "CONDUIT": $Item
static readonly "LEATHER_HELMET": $Item
static readonly "LLAMA_SPAWN_EGG": $Item
static readonly "GOLDEN_SWORD": $Item
static readonly "JUNGLE_LEAVES": $Item
static readonly "RED_TULIP": $Item
static readonly "SPORE_BLOSSOM": $Item
static readonly "WAXED_WEATHERED_COPPER_DOOR": $Item
static readonly "DARK_OAK_STAIRS": $Item
static readonly "YELLOW_SHULKER_BOX": $Item
static readonly "PINK_GLAZED_TERRACOTTA": $Item
static readonly "TIDE_ARMOR_TRIM_SMITHING_TEMPLATE": $Item
static readonly "DANDELION": $Item
static readonly "FLINT": $Item
static readonly "AZALEA_LEAVES": $Item
static readonly "RED_GLAZED_TERRACOTTA": $Item
static readonly "BAMBOO_MOSAIC": $Item
static readonly "WARPED_STEM": $Item
static readonly "YELLOW_CONCRETE_POWDER": $Item
static readonly "OAK_TRAPDOOR": $Item
static readonly "MAGENTA_DYE": $Item
static readonly "BAMBOO_BUTTON": $Item
static readonly "PURPLE_WOOL": $Item
static readonly "VAULT": $Item
static readonly "LIGHT_BLUE_BANNER": $Item
static readonly "END_STONE": $Item
static readonly "SPRUCE_FENCE_GATE": $Item
static readonly "GRAVEL": $Item
static readonly "BUDDING_AMETHYST": $Item
static readonly "ARMS_UP_POTTERY_SHERD": $Item
static readonly "IRON_HORSE_ARMOR": $Item
static readonly "CYAN_STAINED_GLASS": $Item
static readonly "LAPIS_ORE": $Item
static readonly "CHICKEN": $Item
static readonly "ORANGE_BED": $Item
static readonly "WAXED_WEATHERED_COPPER_TRAPDOOR": $Item
static readonly "BIG_DRIPLEAF": $Item
static readonly "RED_DYE": $Item
static readonly "NETHER_BRICK_SLAB": $Item
static readonly "DISPENSER": $Item
static readonly "CYAN_CONCRETE": $Item
static readonly "SMITHING_TABLE": $Item
static readonly "IRON_ORE": $Item
static readonly "POLISHED_BLACKSTONE_BRICK_SLAB": $Item
static readonly "NETHERRACK": $Item
static readonly "RED_STAINED_GLASS_PANE": $Item
static readonly "COOKED_RABBIT": $Item
static readonly "TROPICAL_FISH_SPAWN_EGG": $Item
static readonly "CHORUS_FRUIT": $Item
static readonly "COOKED_SALMON": $Item
static readonly "BROWN_SHULKER_BOX": $Item
static readonly "MELON_SEEDS": $Item
static readonly "HANGING_ROOTS": $Item
static readonly "PRISMARINE_SLAB": $Item
static readonly "SMOOTH_RED_SANDSTONE": $Item
static readonly "BROWN_STAINED_GLASS": $Item
static readonly "GLOW_BERRIES": $Item
static readonly "ARMADILLO_SPAWN_EGG": $Item
static readonly "CHAINMAIL_HELMET": $Item
static readonly "SKELETON_SKULL": $Item
static readonly "END_STONE_BRICK_WALL": $Item
static readonly "PAINTING": $Item
static readonly "POLISHED_TUFF_STAIRS": $Item
static readonly "TORCH": $Item
static readonly "ENDER_CHEST": $Item
static readonly "WAXED_OXIDIZED_COPPER_GRATE": $Item
static readonly "FERN": $Item
static readonly "BIRCH_SIGN": $Item
static readonly "POLISHED_GRANITE": $Item
static readonly "PINK_TULIP": $Item
static readonly "INFESTED_CRACKED_STONE_BRICKS": $Item
static readonly "JUNGLE_SAPLING": $Item
static readonly "DEAD_BUBBLE_CORAL_BLOCK": $Item
static readonly "LEVER": $Item
static readonly "TUFF": $Item
static readonly "STONE_PRESSURE_PLATE": $Item
static readonly "POLISHED_BLACKSTONE_BRICK_STAIRS": $Item
static readonly "NETHER_GOLD_ORE": $Item
static readonly "QUARTZ_BRICKS": $Item
static readonly "LIME_BED": $Item
static readonly "MUSIC_DISC_OTHERSIDE": $Item
static readonly "STRIPPED_OAK_LOG": $Item
static readonly "MANGROVE_SLAB": $Item
static readonly "END_ROD": $Item
static readonly "WARPED_PLANKS": $Item
static readonly "CHERRY_SLAB": $Item
static readonly "IRON_INGOT": $Item
static readonly "ORANGE_CONCRETE_POWDER": $Item
static readonly "ORANGE_WOOL": $Item
static readonly "PLAYER_HEAD": $Item
static readonly "MANGROVE_STAIRS": $Item
static readonly "LIME_TERRACOTTA": $Item
static readonly "TUFF_BRICKS": $Item
static readonly "WHITE_WOOL": $Item
static readonly "GRAY_CARPET": $Item
static readonly "GREEN_TERRACOTTA": $Item
static readonly "OAK_BOAT": $Item
static readonly "DIAMOND_SWORD": $Item
static readonly "BROWN_CANDLE": $Item
static readonly "GREEN_SHULKER_BOX": $Item
static readonly "DARK_OAK_DOOR": $Item
static readonly "ACACIA_BOAT": $Item
static readonly "GRAY_CONCRETE_POWDER": $Item
static readonly "OXIDIZED_CUT_COPPER": $Item
static readonly "DIAMOND_HOE": $Item
static readonly "BLAZE_SPAWN_EGG": $Item
static readonly "WHITE_SHULKER_BOX": $Item
static readonly "CRIMSON_BUTTON": $Item
static readonly "IRON_BLOCK": $Item
static readonly "ENDER_EYE": $Item
static readonly "BLUE_CONCRETE": $Item
static readonly "GRAY_DYE": $Item
static readonly "REDSTONE_LAMP": $Item
static readonly "SPRUCE_CHEST_BOAT": $Item
static readonly "GOLDEN_CARROT": $Item
static readonly "POLISHED_BLACKSTONE_BRICK_WALL": $Item
static readonly "BIRCH_BUTTON": $Item
static readonly "HOPPER": $Item
static readonly "LIGHT_WEIGHTED_PRESSURE_PLATE": $Item
static readonly "NETHER_STAR": $Item
static readonly "SOUL_SOIL": $Item
static readonly "YELLOW_CANDLE": $Item
static readonly "SOUL_TORCH": $Item
static readonly "LIGHT_BLUE_WOOL": $Item
static readonly "VEX_SPAWN_EGG": $Item
static readonly "LEAD": $Item
static readonly "COOKED_MUTTON": $Item
static readonly "RAW_COPPER": $Item
static readonly "TUFF_BRICK_STAIRS": $Item
static readonly "LIGHT_GRAY_SHULKER_BOX": $Item
static readonly "SILENCE_ARMOR_TRIM_SMITHING_TEMPLATE": $Item
static readonly "WAXED_CUT_COPPER": $Item
static readonly "STRIPPED_MANGROVE_WOOD": $Item
static readonly "GLASS_BOTTLE": $Item
static readonly "WAXED_WEATHERED_CUT_COPPER": $Item
static readonly "CHERRY_LOG": $Item
static readonly "YELLOW_STAINED_GLASS_PANE": $Item
static readonly "WOODEN_HOE": $Item
static readonly "CUT_COPPER_SLAB": $Item
static readonly "SNIFFER_SPAWN_EGG": $Item
static readonly "MUSIC_DISC_CAT": $Item
static readonly "TRADER_LLAMA_SPAWN_EGG": $Item
static readonly "BLACKSTONE": $Item
static readonly "NETHERITE_UPGRADE_SMITHING_TEMPLATE": $Item
static readonly "RED_NETHER_BRICK_SLAB": $Item
static readonly "COOKED_PORKCHOP": $Item
static readonly "GREEN_DYE": $Item
static readonly "ZOGLIN_SPAWN_EGG": $Item
static readonly "MAGENTA_STAINED_GLASS_PANE": $Item
static readonly "DEAD_HORN_CORAL_FAN": $Item
static readonly "SPECTRAL_ARROW": $Item
static readonly "SHULKER_BOX": $Item
static readonly "DEAD_HORN_CORAL_BLOCK": $Item
static readonly "STONE_SWORD": $Item
static readonly "ENDERMITE_SPAWN_EGG": $Item
static readonly "POLAR_BEAR_SPAWN_EGG": $Item
static readonly "CARVED_PUMPKIN": $Item
static readonly "ROTTEN_FLESH": $Item
static readonly "PINK_WOOL": $Item
static readonly "MUSIC_DISC_CREATOR": $Item
static readonly "LIGHT_GRAY_WOOL": $Item
static readonly "STONE_AXE": $Item
static readonly "BLADE_POTTERY_SHERD": $Item
static readonly "JUNGLE_DOOR": $Item
static readonly "CRACKED_NETHER_BRICKS": $Item
static readonly "GRANITE_SLAB": $Item
static readonly "STONE_BUTTON": $Item
static readonly "LIGHT_GRAY_BED": $Item
static readonly "ACACIA_SAPLING": $Item
static readonly "EXPOSED_COPPER_BULB": $Item
static readonly "FRIEND_POTTERY_SHERD": $Item
static readonly "BAMBOO_SLAB": $Item
static readonly "IRON_DOOR": $Item
static readonly "BROWN_STAINED_GLASS_PANE": $Item
static readonly "WAXED_EXPOSED_CUT_COPPER_SLAB": $Item
static readonly "BIRCH_WOOD": $Item
static readonly "FERMENTED_SPIDER_EYE": $Item
static readonly "LODESTONE": $Item
static readonly "SEA_PICKLE": $Item
static readonly "SPRUCE_LEAVES": $Item
static readonly "ORANGE_TULIP": $Item
static readonly "ANDESITE": $Item
static readonly "RED_NETHER_BRICK_STAIRS": $Item
static readonly "DUNE_ARMOR_TRIM_SMITHING_TEMPLATE": $Item
static readonly "MANGROVE_PROPAGULE": $Item
static readonly "OXIDIZED_CHISELED_COPPER": $Item
static readonly "BROWN_GLAZED_TERRACOTTA": $Item
static readonly "BARREL": $Item
static readonly "INFESTED_STONE": $Item
static readonly "YELLOW_GLAZED_TERRACOTTA": $Item

constructor()

public static "registerItem"(arg0: $ResourceKey$$Type<($Item)>, arg1: $Item$$Type): $Item
public static "registerItem"(arg0: StringJS, arg1: $Item$$Type): $Item
public static "registerItem"(arg0: $ResourceLocation$$Type, arg1: $Item$$Type): $Item
public static "registerBlock"(arg0: $Block$$Type, ...arg1: ($Block$$Type)[]): $Item
public static "registerBlock"(arg0: $Block$$Type, arg1: $UnaryOperator$$Type<($Item$Properties)>): $Item
public static "registerBlock"(arg0: $BlockItem$$Type): $Item
public static "registerBlock"(arg0: $Block$$Type): $Item
public static "registerBlock"(arg0: $Block$$Type, arg1: $Item$$Type): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Items$$Type = ($Items);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Items$$Original = $Items;}
declare module "net.minecraft.world.item.crafting.RecipeManager$CachedCheck" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$RecipeHolder, $RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"

export interface $RecipeManager$CachedCheck$$Interface<I extends $RecipeInput, T extends $Recipe<(object)>> {

(arg0: I, arg1: $Level): ($RecipeHolder$$Type<(T)>)?
}

export class $RecipeManager$CachedCheck<I extends $RecipeInput, T extends $Recipe<(object)>> implements $RecipeManager$CachedCheck$$Interface {
 "getRecipeFor"(arg0: I, arg1: $Level$$Type): $Optional<($RecipeHolder<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeManager$CachedCheck$$Type<I, T> = ((arg0: I, arg1: $Level) => ($RecipeHolder$$Type<(T)>)?);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeManager$CachedCheck$$Original<I, T> = $RecipeManager$CachedCheck<(I), (T)>;}
declare module "net.minecraft.world.item.crafting.SmithingTransformRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$SmithingTransformRecipeAccessor$$Interface} from "dev.emi.emi.mixin.accessor.SmithingTransformRecipeAccessor"
import {$SmithingRecipeInput$$Type} from "net.minecraft.world.item.crafting.SmithingRecipeInput"
import {$AccessorSmithingTransformRecipe$$Interface} from "com.illusivesoulworks.polymorph.mixin.core.AccessorSmithingTransformRecipe"
import {$SmithingRecipe$$Interface} from "net.minecraft.world.item.crafting.SmithingRecipe"
import {$AccessorSmithingTransformRecipe$$Interface as $AccessorSmithingTransformRecipe$0$$Interface} from "vazkii.patchouli.mixin.AccessorSmithingTransformRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $SmithingTransformRecipe implements $SmithingRecipe$$Interface, $SmithingTransformRecipeAccessor$$Interface, $AccessorSmithingTransformRecipe$$Interface, $AccessorSmithingTransformRecipe$0$$Interface {
readonly "template": $Ingredient
readonly "result": $ItemStack
readonly "base": $Ingredient
readonly "addition": $Ingredient

constructor(arg0: $Ingredient$$Type, arg1: $Ingredient$$Type, arg2: $Ingredient$$Type, arg3: $ItemStack$$Type)

public "getSerializer"(): $RecipeSerializer<(never)>
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $SmithingRecipeInput$$Type, arg1: $Level$$Type): boolean
public "getBase"(): $Ingredient
public "isTemplateIngredient"(arg0: $ItemStack$$Type): boolean
public "isAdditionIngredient"(arg0: $ItemStack$$Type): boolean
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $SmithingRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getTemplate"(): $Ingredient
public "isIncomplete"(): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getAddition"(): $Ingredient
public "isBaseIngredient"(arg0: $ItemStack$$Type): boolean
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getType"(): $RecipeType<(never)>
public "getToastSymbol"(): $ItemStack
public "getRemainingItems"(arg0: $SmithingRecipeInput$$Type): $NonNullList<($ItemStack)>
public "getGroup"(): StringJS
public "isSpecial"(): boolean
public "showNotification"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(never)>
get "incomplete"(): boolean
get "type"(): $RecipeType<(never)>
get "toastSymbol"(): $ItemStack
get "group"(): StringJS
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmithingTransformRecipe$$Type = ($SmithingTransformRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmithingTransformRecipe$$Original = $SmithingTransformRecipe;}
declare module "net.minecraft.world.item.crafting.SmithingRecipeInput" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Interface} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List} from "java.util.List"
import {$SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$Record} from "java.lang.Record"

export class $SmithingRecipeInput extends $Record implements $RecipeInput$$Interface {
constructor(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type)

public "base"(): $ItemStack
public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public "getItem"(arg0: integer): $ItemStack
public "template"(): $ItemStack
public "addition"(): $ItemStack
public "find"(filter: $SlotFilter$$Type): $ItemStack
public "find"(filter: $SlotFilter$$Type, skip: integer): $ItemStack
public "self"(): $RecipeInput
public "findAll"(filter: $SlotFilter$$Type): $List<($ItemStack)>
public "findAll"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmithingRecipeInput$$Type = ({"addition"?: $ItemStack$$Type, "template"?: $ItemStack$$Type, "base"?: $ItemStack$$Type}) | ([addition?: $ItemStack$$Type, template?: $ItemStack$$Type, base?: $ItemStack$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmithingRecipeInput$$Original = $SmithingRecipeInput;}
declare module "net.minecraft.world.item.crafting.FireworkRocketRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$CustomRecipe} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $FireworkRocketRecipe extends $CustomRecipe {
constructor(arg0: $CraftingBookCategory$$Type)

public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireworkRocketRecipe$$Type = ($FireworkRocketRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FireworkRocketRecipe$$Original = $FireworkRocketRecipe;}
declare module "net.minecraft.world.item.crafting.RecipeSerializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$BlastingRecipe} from "net.minecraft.world.item.crafting.BlastingRecipe"
import {$ShulkerBoxColoring} from "net.minecraft.world.item.crafting.ShulkerBoxColoring"
import {$FireworkRocketRecipe} from "net.minecraft.world.item.crafting.FireworkRocketRecipe"
import {$SmeltingRecipe} from "net.minecraft.world.item.crafting.SmeltingRecipe"
import {$BannerDuplicateRecipe} from "net.minecraft.world.item.crafting.BannerDuplicateRecipe"
import {$ShieldDecorationRecipe} from "net.minecraft.world.item.crafting.ShieldDecorationRecipe"
import {$SmithingTrimRecipe} from "net.minecraft.world.item.crafting.SmithingTrimRecipe"
import {$TippedArrowRecipe} from "net.minecraft.world.item.crafting.TippedArrowRecipe"
import {$StonecutterRecipe} from "net.minecraft.world.item.crafting.StonecutterRecipe"
import {$ShapedRecipe} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$RepairItemRecipe} from "net.minecraft.world.item.crafting.RepairItemRecipe"
import {$SmithingTransformRecipe} from "net.minecraft.world.item.crafting.SmithingTransformRecipe"
import {$BookCloningRecipe} from "net.minecraft.world.item.crafting.BookCloningRecipe"
import {$CampfireCookingRecipe} from "net.minecraft.world.item.crafting.CampfireCookingRecipe"
import {$SuspiciousStewRecipe} from "net.minecraft.world.item.crafting.SuspiciousStewRecipe"
import {$ShapelessRecipe} from "net.minecraft.world.item.crafting.ShapelessRecipe"
import {$ArmorDyeRecipe} from "net.minecraft.world.item.crafting.ArmorDyeRecipe"
import {$SmokingRecipe} from "net.minecraft.world.item.crafting.SmokingRecipe"
import {$FireworkStarRecipe} from "net.minecraft.world.item.crafting.FireworkStarRecipe"
import {$FireworkStarFadeRecipe} from "net.minecraft.world.item.crafting.FireworkStarFadeRecipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$MapExtendingRecipe} from "net.minecraft.world.item.crafting.MapExtendingRecipe"
import {$DecoratedPotRecipe} from "net.minecraft.world.item.crafting.DecoratedPotRecipe"
import {$MapCloningRecipe} from "net.minecraft.world.item.crafting.MapCloningRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export interface $RecipeSerializer$$Interface<T extends $Recipe<(object)>> {
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.RecipeSerializer
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.RecipeSerializerTag
}

export class $RecipeSerializer<T extends $Recipe<(object)>> implements $RecipeSerializer$$Interface {
static readonly "MAP_CLONING": $RecipeSerializer<($MapCloningRecipe)>
static readonly "SMELTING_RECIPE": $RecipeSerializer<($SmeltingRecipe)>
static readonly "REPAIR_ITEM": $RecipeSerializer<($RepairItemRecipe)>
static readonly "FIREWORK_STAR": $RecipeSerializer<($FireworkStarRecipe)>
static readonly "FIREWORK_STAR_FADE": $RecipeSerializer<($FireworkStarFadeRecipe)>
static readonly "SMOKING_RECIPE": $RecipeSerializer<($SmokingRecipe)>
static readonly "SHAPED_RECIPE": $RecipeSerializer<($ShapedRecipe)>
static readonly "ARMOR_DYE": $RecipeSerializer<($ArmorDyeRecipe)>
static readonly "MAP_EXTENDING": $RecipeSerializer<($MapExtendingRecipe)>
static readonly "BOOK_CLONING": $RecipeSerializer<($BookCloningRecipe)>
static readonly "SMITHING_TRANSFORM": $RecipeSerializer<($SmithingTransformRecipe)>
static readonly "BANNER_DUPLICATE": $RecipeSerializer<($BannerDuplicateRecipe)>
static readonly "CAMPFIRE_COOKING_RECIPE": $RecipeSerializer<($CampfireCookingRecipe)>
static readonly "STONECUTTER": $RecipeSerializer<($StonecutterRecipe)>
static readonly "DECORATED_POT_RECIPE": $RecipeSerializer<($DecoratedPotRecipe)>
static readonly "TIPPED_ARROW": $RecipeSerializer<($TippedArrowRecipe)>
static readonly "SHIELD_DECORATION": $RecipeSerializer<($ShieldDecorationRecipe)>
static readonly "BLASTING_RECIPE": $RecipeSerializer<($BlastingRecipe)>
static readonly "SHAPELESS_RECIPE": $RecipeSerializer<($ShapelessRecipe)>
static readonly "SHULKER_BOX_COLORING": $RecipeSerializer<($ShulkerBoxColoring)>
static readonly "SMITHING_TRIM": $RecipeSerializer<($SmithingTrimRecipe)>
static readonly "SUSPICIOUS_STEW": $RecipeSerializer<($SuspiciousStewRecipe)>
static readonly "FIREWORK_ROCKET": $RecipeSerializer<($FireworkRocketRecipe)>

static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
 "codec"(): $MapCodec<(T)>
 "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeSerializer$$Type<T> = (Special.RecipeSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeSerializer$$Original<T> = $RecipeSerializer<(T)>;}
declare module "net.minecraft.world.item.component.ItemAttributeModifiers$Builder" {
import {$AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$EquipmentSlotGroup$$Type} from "net.minecraft.world.entity.EquipmentSlotGroup"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder$$Type} from "net.minecraft.core.Holder"

export class $ItemAttributeModifiers$Builder {
public "add"(arg0: $Holder$$Type<($Attribute)>, arg1: $AttributeModifier$$Type, arg2: $EquipmentSlotGroup$$Type): $ItemAttributeModifiers$Builder
public "build"(): $ItemAttributeModifiers
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemAttributeModifiers$Builder$$Type = ($ItemAttributeModifiers$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemAttributeModifiers$Builder$$Original = $ItemAttributeModifiers$Builder;}
declare module "net.minecraft.world.item.component.Tool$Rule" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$Record} from "java.lang.Record"

export class $Tool$Rule extends $Record {
static readonly "CODEC": $Codec<($Tool$Rule)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Tool$Rule)>

constructor(arg0: $HolderSet$$Type<($Block)>, arg1: (float)?, arg2: (boolean)?)

public "speed"(): $Optional<(float)>
public "correctForDrops"(): $Optional<(boolean)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "blocks"(): $HolderSet<($Block)>
public static "deniesDrops"(arg0: $TagKey$$Type<($Block)>): $Tool$Rule
public static "overrideSpeed"(arg0: $TagKey$$Type<($Block)>, arg1: float): $Tool$Rule
public static "overrideSpeed"(arg0: $List$$Type<($Block$$Type)>, arg1: float): $Tool$Rule
public static "minesAndDrops"(arg0: $List$$Type<($Block$$Type)>, arg1: float): $Tool$Rule
public static "minesAndDrops"(arg0: $TagKey$$Type<($Block)>, arg1: float): $Tool$Rule
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Tool$Rule$$Type = ({"correctForDrops"?: (boolean)?, "speed"?: (float)?, "blocks"?: $HolderSet$$Type<($Block)>}) | ([correctForDrops?: (boolean)?, speed?: (float)?, blocks?: $HolderSet$$Type<($Block)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Tool$Rule$$Original = $Tool$Rule;}
