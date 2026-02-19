declare module "net.silentchaos512.gear.gear.material.MaterialInstance" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$PropertyKey$$Type} from "net.silentchaos512.gear.api.util.PropertyKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$TraitInstance} from "net.silentchaos512.gear.api.traits.TraitInstance"
import {$GearPropertyValue} from "net.silentchaos512.gear.api.property.GearPropertyValue"
import {$Component} from "net.minecraft.network.chat.Component"
import {$DataResource$$Type} from "net.silentchaos512.gear.api.util.DataResource"
import {$TextureType} from "net.silentchaos512.gear.api.material.TextureType"
import {$GearComponent} from "net.silentchaos512.gear.api.util.GearComponent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Material, $Material$$Type} from "net.silentchaos512.gear.api.material.Material"
import {$GearComponentInstance$$Interface} from "net.silentchaos512.gear.api.util.GearComponentInstance"
import {$Set} from "java.util.Set"
import {$RepairContext$Type$$Type} from "net.silentchaos512.gear.gear.part.RepairContext$Type"
import {$GearProperty$$Type} from "net.silentchaos512.gear.api.property.GearProperty"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$PartGearKey$$Type} from "net.silentchaos512.gear.api.util.PartGearKey"
import {$GearType$$Type} from "net.silentchaos512.gear.api.item.GearType"
import {$IMaterialModifierType$$Type} from "net.silentchaos512.gear.api.material.modifier.IMaterialModifierType"
import {$IMaterialModifier} from "net.silentchaos512.gear.api.material.modifier.IMaterialModifier"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$IMaterialCategory, $IMaterialCategory$$Type} from "net.silentchaos512.gear.api.material.IMaterialCategory"
import {$PartType, $PartType$$Type} from "net.silentchaos512.gear.api.part.PartType"

export class $MaterialInstance implements $GearComponentInstance$$Interface<($Material)> {
static readonly "CODEC": $Codec<($MaterialInstance)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($MaterialInstance)>

public "getCategories"(): $Collection<($IMaterialCategory)>
public "getColor"(arg0: $GearType$$Type, arg1: $PartType$$Type): integer
public "getNullable"(): $Material
public "get"(): $GearComponent
public "getProperty"<T, V extends $GearPropertyValue<(object)>>(arg0: $PartType$$Type, arg1: $PropertyKey$$Type<(T), (V)>): T
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getModifiers"(): $Collection<($IMaterialModifier)>
public static "of"(arg0: $DataResource$$Type<($Material$$Type)>, arg1: $ItemStack$$Type): $MaterialInstance
public static "of"(arg0: $Material$$Type): $MaterialInstance
public static "of"(arg0: $DataResource$$Type<($Material$$Type)>): $MaterialInstance
public static "of"(arg0: $Material$$Type, arg1: $ItemStack$$Type): $MaterialInstance
public static "from"(arg0: $ItemStack$$Type): $MaterialInstance
public "getId"(): $ResourceLocation
public "is"(arg0: $DataResource$$Type<($Material$$Type)>): boolean
public "getDisplayName"(arg0: $PartType$$Type, arg1: $ItemStack$$Type): $Component
public "getItem"(): $ItemStack
public "isSimple"(): boolean
public "allowedInPart"(arg0: $PartType$$Type): boolean
public "getDisplayNamePrefix"(arg0: $PartType$$Type): $Component
public "getRepairValue"(arg0: $ItemStack$$Type, arg1: $RepairContext$Type$$Type): integer
public "getRepairValue"(arg0: $ItemStack$$Type): integer
public "getIngredient"(): $Ingredient
public "onSalvage"(): $MaterialInstance
public "canRepair"(arg0: $ItemStack$$Type): boolean
public "getModifier"<T extends $IMaterialModifier>(arg0: $IMaterialModifierType$$Type<(T)>): T
public "getNameColor"(arg0: $PartType$$Type, arg1: $GearType$$Type): integer
public "getPartTypes"(): $Set<($PartType)>
public "isCraftingAllowed"(arg0: $PartType$$Type, arg1: $GearType$$Type): boolean
public "getModelKey"(): StringJS
public "getMainTextureType"(): $TextureType
public "getPropertyModifiers"<T, V extends $GearPropertyValue<(object)>>(arg0: $PartType$$Type, arg1: $PropertyKey$$Type<(T), (V)>): $Collection<(V)>
public "hasAnyCategory"(arg0: $Collection$$Type<($IMaterialCategory$$Type)>): boolean
public "getDisplayNameWithModifiers"(arg0: $PartType$$Type, arg1: $ItemStack$$Type): $MutableComponent
public "getProperty"<T, V extends $GearPropertyValue<(object)>>(arg0: $PartType$$Type, arg1: $GearProperty$$Type<(T), (V)>): T
public "getProperty"<T, V extends $GearPropertyValue<(object)>>(arg0: $Supplier$$Type<($PartType$$Type)>, arg1: $PropertyKey$$Type<(T), (V)>): T
public "getDisplayName"(arg0: $PartType$$Type): $Component
public "getTraits"(arg0: $PartGearKey$$Type): $Collection<($TraitInstance)>
public "getPropertyModifiers"<T, V extends $GearPropertyValue<(object)>>(arg0: $Supplier$$Type<($PartType$$Type)>, arg1: $PropertyKey$$Type<(T), (V)>): $Collection<(V)>
get "categories"(): $Collection<($IMaterialCategory)>
get "nullable"(): $Material
get "modifiers"(): $Collection<($IMaterialModifier)>
get "id"(): $ResourceLocation
get "item"(): $ItemStack
get "simple"(): boolean
get "ingredient"(): $Ingredient
get "partTypes"(): $Set<($PartType)>
get "modelKey"(): StringJS
get "mainTextureType"(): $TextureType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialInstance$$Type = ($MaterialInstance);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MaterialInstance$$Original = $MaterialInstance;}
declare module "net.silentchaos512.gear.gear.part.PartInstance" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$PropertyKey$$Type} from "net.silentchaos512.gear.api.util.PropertyKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$TraitInstance} from "net.silentchaos512.gear.api.traits.TraitInstance"
import {$List, $List$$Type} from "java.util.List"
import {$GearPropertyValue} from "net.silentchaos512.gear.api.property.GearPropertyValue"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$DataResource$$Type} from "net.silentchaos512.gear.api.util.DataResource"
import {$MaterialInstance, $MaterialInstance$$Type} from "net.silentchaos512.gear.gear.material.MaterialInstance"
import {$GearPart, $GearPart$$Type} from "net.silentchaos512.gear.api.part.GearPart"
import {$GearComponent} from "net.silentchaos512.gear.api.util.GearComponent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Material$$Type} from "net.silentchaos512.gear.api.material.Material"
import {$GearComponentInstance$$Interface} from "net.silentchaos512.gear.api.util.GearComponentInstance"
import {$GearProperty$$Type} from "net.silentchaos512.gear.api.property.GearProperty"
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$Collection} from "java.util.Collection"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$PartGearKey, $PartGearKey$$Type} from "net.silentchaos512.gear.api.util.PartGearKey"
import {$GearType, $GearType$$Type} from "net.silentchaos512.gear.api.item.GearType"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$CompoundPartItem$$Type} from "net.silentchaos512.gear.item.CompoundPartItem"
import {$PartType, $PartType$$Type} from "net.silentchaos512.gear.api.part.PartType"

export class $PartInstance implements $GearComponentInstance$$Interface<($GearPart)> {
static readonly "CODEC": $Codec<($PartInstance)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($PartInstance)>

public "getColor"(arg0: $GearType$$Type, arg1: integer, arg2: integer): integer
public "getColor"(arg0: $ItemStack$$Type): integer
public "getColor"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer): integer
public "getNullable"(): $GearPart
public "get"(): $GearComponent
public "getProperty"<T, V extends $GearPropertyValue<(object)>>(arg0: $PartType$$Type, arg1: $PropertyKey$$Type<(T), (V)>): T
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"(arg0: $GearPart$$Type): $PartInstance
public static "of"(arg0: $GearPart$$Type, arg1: $ItemStack$$Type): $PartInstance
public static "of"(arg0: $DataResource$$Type<($GearPart$$Type)>, arg1: $ItemStack$$Type): $PartInstance
public static "of"(arg0: $DataResource$$Type<($GearPart$$Type)>): $PartInstance
public static "from"(arg0: $ItemStack$$Type): $PartInstance
public static "from"(arg0: $ItemStack$$Type, arg1: boolean): $PartInstance
public "getKey"(): $PartGearKey
public "getId"(): $ResourceLocation
public "getType"(): $PartType
public static "create"(arg0: $DataResource$$Type<($GearPart$$Type)>, arg1: $CompoundPartItem$$Type, arg2: $DataResource$$Type<($Material$$Type)>): $PartInstance
public static "create"(arg0: $DataResource$$Type<($GearPart$$Type)>, arg1: $CompoundPartItem$$Type, arg2: $List$$Type<($MaterialInstance$$Type)>): $PartInstance
public "getDisplayName"(arg0: $PartType$$Type, arg1: $ItemStack$$Type): $Component
public "getDisplayName"(): $Component
public "isValid"(): boolean
public "getItem"(): $ItemStack
public "getMaterials"(): $List<($MaterialInstance)>
public "onRemoveFromGear"(arg0: $ItemStack$$Type): void
public "getMaterialName"(arg0: $ItemStack$$Type): $Component
public "getPrimaryMaterial"(): $MaterialInstance
public "onAddToGear"(arg0: $ItemStack$$Type): void
public "getGearType"(): $GearType
public "getNameColor"(arg0: $PartType$$Type, arg1: $GearType$$Type): integer
public "isCraftingAllowed"(arg0: $GearType$$Type, arg1: $CraftingInput$$Type): boolean
public "getModelKey"(): StringJS
public "getPropertyModifiers"<T, V extends $GearPropertyValue<(object)>>(arg0: $PartType$$Type, arg1: $PropertyKey$$Type<(T), (V)>): $Collection<(V)>
public "getPropertyModifiers"<T, V extends $GearPropertyValue<(object)>>(arg0: $PropertyKey$$Type<(T), (V)>): $Collection<(V)>
public "addInformation"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>, arg2: $TooltipFlag$$Type): void
public "getProperty"<T, V extends $GearPropertyValue<(object)>>(arg0: $PartType$$Type, arg1: $GearProperty$$Type<(T), (V)>): T
public "getProperty"<T, V extends $GearPropertyValue<(object)>>(arg0: $Supplier$$Type<($PartType$$Type)>, arg1: $PropertyKey$$Type<(T), (V)>): T
public "getDisplayName"(arg0: $PartType$$Type): $Component
public "getTraits"(arg0: $PartGearKey$$Type): $Collection<($TraitInstance)>
public "getPropertyModifiers"<T, V extends $GearPropertyValue<(object)>>(arg0: $Supplier$$Type<($PartType$$Type)>, arg1: $PropertyKey$$Type<(T), (V)>): $Collection<(V)>
get "nullable"(): $GearPart
get "key"(): $PartGearKey
get "id"(): $ResourceLocation
get "type"(): $PartType
get "displayName"(): $Component
get "valid"(): boolean
get "item"(): $ItemStack
get "materials"(): $List<($MaterialInstance)>
get "primaryMaterial"(): $MaterialInstance
get "gearType"(): $GearType
get "modelKey"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartInstance$$Type = ($PartInstance);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PartInstance$$Original = $PartInstance;}
declare module "net.silentchaos512.gear.gear.trait.Trait" {
import {$GearProperty$$Type} from "net.silentchaos512.gear.api.property.GearProperty"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Collection} from "java.util.Collection"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$TraitEffect, $TraitEffect$$Type} from "net.silentchaos512.gear.api.traits.TraitEffect"
import {$TraitActionContext$$Type} from "net.silentchaos512.gear.api.traits.TraitActionContext"
import {$List, $List$$Type} from "java.util.List"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$GearPropertyValue, $GearPropertyValue$$Type} from "net.silentchaos512.gear.api.property.GearPropertyValue"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ITraitCondition, $ITraitCondition$$Type} from "net.silentchaos512.gear.api.traits.ITraitCondition"
import {$ItemAttributeModifiers$Builder$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers$Builder"
import {$Codec} from "com.mojang.serialization.Codec"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Function$$Type} from "java.util.function.Function"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $Trait {
static readonly "CODEC": $Codec<($Trait)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Trait)>

constructor(arg0: integer, arg1: $Component$$Type, arg2: $Component$$Type, arg3: $List$$Type<($TraitEffect$$Type)>, arg4: $List$$Type<($ITraitCondition$$Type)>, arg5: $List$$Type<($Component$$Type)>)

public "onUpdate"(arg0: $TraitActionContext$$Type, arg1: boolean): void
public "onItemUse"(arg0: $UseOnContext$$Type, arg1: integer): $InteractionResult
public "getEffects"(): $List<($TraitEffect)>
public "getDescription"(arg0: integer): $MutableComponent
public "isHidden"(): boolean
public "getDisplayName"(arg0: integer): $MutableComponent
public "getConditions"(): $List<($ITraitCondition)>
public "getMaxLevel"(): integer
public "onEntityIncomingDamage"(arg0: $ItemStack$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $DamageSource$$Type, arg4: float, arg5: float): float
public "onGetAttributeModifiers"(arg0: $TraitActionContext$$Type, arg1: $ItemAttributeModifiers$Builder$$Type): void
public "getMiningSpeedModifier"(arg0: integer, arg1: $BlockState$$Type, arg2: float): float
public "onRecalculatePost"(arg0: $ItemStack$$Type, arg1: integer): void
public "onItemSwing"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: integer): void
public "onAttackEntity"(arg0: $TraitActionContext$$Type, arg1: $LivingEntity$$Type, arg2: float): float
public "onDurabilityDamage"(arg0: $TraitActionContext$$Type, arg1: integer): integer
public "onGearCrafted"(arg0: $TraitActionContext$$Type): void
public "getBonusProperties"(arg0: integer, arg1: $Player$$Type, arg2: $GearProperty$$Type<(never), (never)>, arg3: $GearPropertyValue$$Type<(never)>, arg4: float): $Collection<($GearPropertyValue<(never)>)>
public "onCalculateSynergy"(arg0: double, arg1: integer): double
public "onRecalculatePre"(arg0: $ItemStack$$Type, arg1: integer): void
public "addInformation"(arg0: integer, arg1: $List$$Type<($Component$$Type)>, arg2: $TooltipFlag$$Type, arg3: $Function$$Type<($Component), ($Component$$Type)>): void
public "addInformation"(arg0: integer, arg1: $List$$Type<($Component$$Type)>, arg2: $TooltipFlag$$Type): void
/**
 * 
 * @deprecated
 */
public "addInformation"(arg0: integer, arg1: $List$$Type<($Component$$Type)>): void
public "addLootDrops"(arg0: $TraitActionContext$$Type, arg1: $ItemStack$$Type): $ItemStack
public "getExtraWikiLines"(): $Collection<(StringJS)>
public "showInTooltip"(arg0: $TooltipFlag$$Type): boolean
get "effects"(): $List<($TraitEffect)>
get "hidden"(): boolean
get "conditions"(): $List<($ITraitCondition)>
get "maxLevel"(): integer
get "extraWikiLines"(): $Collection<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Trait$$Type = ($Trait);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Trait$$Original = $Trait;}
declare module "net.silentchaos512.gear.gear.part.RepairContext$Type" {
import {$Enum} from "java.lang.Enum"

export class $RepairContext$Type extends $Enum<($RepairContext$Type)> {
static readonly "QUICK": $RepairContext$Type
static readonly "ANVIL": $RepairContext$Type

public static "values"(): ($RepairContext$Type)[]
public static "valueOf"(arg0: StringJS): $RepairContext$Type
public "getBonusEfficiency"(): float
get "bonusEfficiency"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RepairContext$Type$$Type = (("quick") | ("anvil"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RepairContext$Type$$Original = $RepairContext$Type;}
