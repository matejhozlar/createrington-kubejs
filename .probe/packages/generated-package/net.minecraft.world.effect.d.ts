declare module "net.minecraft.world.effect.MobEffect$AttributeTemplate" {
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$Int2DoubleFunction, $Int2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import {$Record} from "java.lang.Record"

export class $MobEffect$AttributeTemplate extends $Record {
constructor(arg0: $ResourceLocation$$Type, arg1: double, arg2: $AttributeModifier$Operation$$Type)
constructor(id: $ResourceLocation$$Type, amount: double, operation: $AttributeModifier$Operation$$Type, curve: $Int2DoubleFunction$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): $ResourceLocation
public "create"(arg0: integer): $AttributeModifier
public "amount"(): double
public "operation"(): $AttributeModifier$Operation
public "curve"(): $Int2DoubleFunction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobEffect$AttributeTemplate$$Type = ({"curve"?: $Int2DoubleFunction$$Type, "amount"?: double, "operation"?: $AttributeModifier$Operation$$Type, "id"?: $ResourceLocation$$Type}) | ([curve?: $Int2DoubleFunction$$Type, amount?: double, operation?: $AttributeModifier$Operation$$Type, id?: $ResourceLocation$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobEffect$AttributeTemplate$$Original = $MobEffect$AttributeTemplate;}
declare module "net.minecraft.world.effect.MobEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$FeatureFlagSet, $FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$FeatureFlag$$Type} from "net.minecraft.world.flag.FeatureFlag"
import {$SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$EffectCure$$Type} from "net.neoforged.neoforge.common.EffectCure"
import {$Codec} from "com.mojang.serialization.Codec"
import {$FeatureElement$$Interface} from "net.minecraft.world.flag.FeatureElement"
import {$Set$$Type} from "java.util.Set"
import {$Int2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$IMobEffectExtension$$Interface} from "net.neoforged.neoforge.common.extensions.IMobEffectExtension"
import {$Entity$RemovalReason$$Type} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$IClientMobEffectExtensions$$Type} from "net.neoforged.neoforge.client.extensions.common.IClientMobEffectExtensions"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AttributeMap$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeMap"
import {$MobEffectCategory} from "net.minecraft.world.effect.MobEffectCategory"
import {$ParticleOptions} from "net.minecraft.core.particles.ParticleOptions"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $MobEffect implements $FeatureElement$$Interface, $IMobEffectExtension$$Interface {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

public "getColor"(): integer
public "onMobHurt"(arg0: $LivingEntity$$Type, arg1: integer, arg2: $DamageSource$$Type, arg3: float): void
public "getDisplayName"(): $Component
public "shouldApplyEffectTickThisTick"(arg0: integer, arg1: integer): boolean
public "getCategory"(): $MobEffectCategory
public "addAttributeModifiers"(arg0: $AttributeMap$$Type, arg1: integer): void
public "removeAttributeModifiers"(arg0: $AttributeMap$$Type): void
public "isInstantenous"(): boolean
/**
 * 
 * @deprecated
 */
public "initializeClient"(arg0: $Consumer$$Type<($IClientMobEffectExtensions)>): void
public "setBlendDuration"(arg0: integer): $MobEffect
public "isBeneficial"(): boolean
public "applyEffectTick"(arg0: $LivingEntity$$Type, arg1: integer): boolean
public "createModifiers"(arg0: integer, arg1: $BiConsumer$$Type<($Holder<($Attribute)>), ($AttributeModifier)>): void
public "withSoundOnAdded"(arg0: $SoundEvent$$Type): $MobEffect
public "createParticleOptions"(arg0: $MobEffectInstance$$Type): $ParticleOptions
public "applyInstantenousEffect"(arg0: $Entity$$Type, arg1: $Entity$$Type, arg2: $LivingEntity$$Type, arg3: integer, arg4: double): void
public "addAttributeModifier"(arg0: $Holder$$Type<($Attribute)>, arg1: $ResourceLocation$$Type, arg2: double, arg3: $AttributeModifier$Operation$$Type): $MobEffect
public "addAttributeModifier"(arg0: $Holder$$Type<($Attribute)>, arg1: $ResourceLocation$$Type, arg2: $AttributeModifier$Operation$$Type, arg3: $Int2DoubleFunction$$Type): $MobEffect
public "getBlendDurationTicks"(): integer
public "getDescriptionId"(): StringJS
public "requiredFeatures"(...arg0: ($FeatureFlag$$Type)[]): $MobEffect
public "requiredFeatures"(): $FeatureFlagSet
public "onMobRemoved"(arg0: $LivingEntity$$Type, arg1: integer, arg2: $Entity$RemovalReason$$Type): void
public "onEffectAdded"(arg0: $LivingEntity$$Type, arg1: integer): void
public "onEffectStarted"(arg0: $LivingEntity$$Type, arg1: integer): void
public "isEnabled"(arg0: $FeatureFlagSet$$Type): boolean
public "fillEffectCures"(arg0: $Set$$Type<($EffectCure$$Type)>, arg1: $MobEffectInstance$$Type): void
public "getSortOrder"(arg0: $MobEffectInstance$$Type): integer
get "color"(): integer
get "displayName"(): $Component
get "category"(): $MobEffectCategory
get "instantenous"(): boolean
set "blendDuration"(value: integer)
get "beneficial"(): boolean
get "blendDurationTicks"(): integer
get "descriptionId"(): StringJS
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.MobEffect
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.MobEffectTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobEffect$$Type = (Special.MobEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobEffect$$Original = $MobEffect;}
declare module "net.minecraft.world.effect.MobEffectCategory" {
import {$Enum} from "java.lang.Enum"
import {$ChatFormatting} from "net.minecraft.ChatFormatting"

export class $MobEffectCategory extends $Enum<($MobEffectCategory)> {
static readonly "HARMFUL": $MobEffectCategory
static readonly "BENEFICIAL": $MobEffectCategory
static readonly "NEUTRAL": $MobEffectCategory

public static "values"(): ($MobEffectCategory)[]
public static "valueOf"(arg0: StringJS): $MobEffectCategory
public "getTooltipFormatting"(): $ChatFormatting
get "tooltipFormatting"(): $ChatFormatting
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobEffectCategory$$Type = (("beneficial") | ("harmful") | ("neutral"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobEffectCategory$$Original = $MobEffectCategory;}
declare module "net.minecraft.world.effect.MobEffectInstance" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Entity$RemovalReason$$Type} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$EffectCure} from "net.neoforged.neoforge.common.EffectCure"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Int2IntFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import {$Set} from "java.util.Set"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$MobEffectInstanceAccessor$$Interface} from "com.simibubi.create.foundation.mixin.accessor.MobEffectInstanceAccessor"
import {$ParticleOptions} from "net.minecraft.core.particles.ParticleOptions"

export class $MobEffectInstance implements $Comparable$$Interface<($MobEffectInstance)>, $MobEffectInstanceAccessor$$Interface {
static readonly "MAX_AMPLIFIER": integer
static readonly "CODEC": $Codec<($MobEffectInstance)>
static readonly "INFINITE_DURATION": integer
static readonly "MIN_AMPLIFIER": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($MobEffectInstance)>

constructor(arg0: $Holder$$Type<($MobEffect)>)
constructor(arg0: $Holder$$Type<($MobEffect)>, arg1: integer, arg2: integer, arg3: boolean, arg4: boolean, arg5: boolean, arg6: $MobEffectInstance$$Type)
constructor(arg0: $Holder$$Type<($MobEffect)>, arg1: integer, arg2: integer)
constructor(arg0: $Holder$$Type<($MobEffect)>, arg1: integer, arg2: integer, arg3: boolean, arg4: boolean)
constructor(arg0: $Holder$$Type<($MobEffect)>, arg1: integer, arg2: integer, arg3: boolean, arg4: boolean, arg5: boolean)
constructor(arg0: $Holder$$Type<($MobEffect)>, arg1: integer)
constructor(arg0: $MobEffectInstance$$Type)

public "getEffect"(): $Holder<($MobEffect)>
public "isAmbient"(): boolean
public "isVisible"(): boolean
public "onMobHurt"(arg0: $LivingEntity$$Type, arg1: $DamageSource$$Type, arg2: float): void
public "getCures"(): $Set<($EffectCure)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: $MobEffectInstance$$Type): integer
public "compareTo"(arg0: any): integer
public "update"(arg0: $MobEffectInstance$$Type): boolean
public static "load"(arg0: $CompoundTag$$Type): $MobEffectInstance
public "save"(): $Tag
public "is"(arg0: $Holder$$Type<($MobEffect)>): boolean
public "tick"(arg0: $LivingEntity$$Type, arg1: $Runnable$$Type): boolean
public "getDuration"(): integer
public "isInfiniteDuration"(): boolean
public "mapDuration"(arg0: $Int2IntFunction$$Type): integer
public "getBlendFactor"(arg0: $LivingEntity$$Type, arg1: float): float
public "skipBlending"(): void
public "create$getHiddenEffect"(): $MobEffectInstance
public "showIcon"(): boolean
public "getDescriptionId"(): StringJS
public "endsWithin"(arg0: integer): boolean
public "getAmplifier"(): integer
public "copyBlendState"(arg0: $MobEffectInstance$$Type): void
public "onMobRemoved"(arg0: $LivingEntity$$Type, arg1: $Entity$RemovalReason$$Type): void
public "onEffectAdded"(arg0: $LivingEntity$$Type): void
public "getParticleOptions"(): $ParticleOptions
public "onEffectStarted"(arg0: $LivingEntity$$Type): void
get "effect"(): $Holder<($MobEffect)>
get "ambient"(): boolean
get "visible"(): boolean
get "cures"(): $Set<($EffectCure)>
get "duration"(): integer
get "infiniteDuration"(): boolean
get "descriptionId"(): StringJS
get "amplifier"(): integer
get "particleOptions"(): $ParticleOptions
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobEffectInstance$$Type = ($MobEffectInstance);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobEffectInstance$$Original = $MobEffectInstance;}
