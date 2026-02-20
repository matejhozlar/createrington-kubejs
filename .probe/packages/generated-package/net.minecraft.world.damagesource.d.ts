declare module "net.minecraft.world.damagesource.DamageScaling" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Codec} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$IScalingFunction} from "net.neoforged.neoforge.common.damagesource.IScalingFunction"
import {$ExtensionInfo} from "net.neoforged.fml.common.asm.enumextension.ExtensionInfo"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$IExtensibleEnum$$Interface} from "net.neoforged.fml.common.asm.enumextension.IExtensibleEnum"

export class $DamageScaling extends $Enum<($DamageScaling)> implements $StringRepresentable$$Interface, $IExtensibleEnum$$Interface {
static readonly "CODEC": $Codec<($DamageScaling)>
static readonly "WHEN_CAUSED_BY_LIVING_NON_PLAYER": $DamageScaling
static readonly "NEVER": $DamageScaling
static readonly "ALWAYS": $DamageScaling

public static "values"(): ($DamageScaling)[]
public static "valueOf"(arg0: StringJS): $DamageScaling
public static "getExtensionInfo"(): $ExtensionInfo
public "getScalingFunction"(): $IScalingFunction
public "getSerializedName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
get "extensionInfo"(): $ExtensionInfo
get "scalingFunction"(): $IScalingFunction
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamageScaling$$Type = (("never") | ("when_caused_by_living_non_player") | ("always"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DamageScaling$$Original = $DamageScaling;}
declare module "net.minecraft.world.damagesource.DeathMessageType" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Codec} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$IDeathMessageProvider} from "net.neoforged.neoforge.common.damagesource.IDeathMessageProvider"
import {$ExtensionInfo} from "net.neoforged.fml.common.asm.enumextension.ExtensionInfo"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$IExtensibleEnum$$Interface} from "net.neoforged.fml.common.asm.enumextension.IExtensibleEnum"

export class $DeathMessageType extends $Enum<($DeathMessageType)> implements $StringRepresentable$$Interface, $IExtensibleEnum$$Interface {
static readonly "INTENTIONAL_GAME_DESIGN": $DeathMessageType
static readonly "FALL_VARIANTS": $DeathMessageType
static readonly "CODEC": $Codec<($DeathMessageType)>
static readonly "DEFAULT": $DeathMessageType

public static "values"(): ($DeathMessageType)[]
public static "valueOf"(arg0: StringJS): $DeathMessageType
public static "getExtensionInfo"(): $ExtensionInfo
public "getSerializedName"(): StringJS
public "getMessageFunction"(): $IDeathMessageProvider
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
get "extensionInfo"(): $ExtensionInfo
get "serializedName"(): StringJS
get "messageFunction"(): $IDeathMessageProvider
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeathMessageType$$Type = (("default") | ("fall_variants") | ("intentional_game_design"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DeathMessageType$$Original = $DeathMessageType;}
declare module "net.minecraft.world.damagesource.CombatTracker" {
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Style} from "net.minecraft.network.chat.Style"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$CombatEntry, $CombatEntry$$Type} from "net.minecraft.world.damagesource.CombatEntry"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Component} from "net.minecraft.network.chat.Component"

export class $CombatTracker {
static readonly "INTENTIONAL_GAME_DESIGN_STYLE": $Style
static readonly "RESET_COMBAT_STATUS_TIME": integer
static readonly "RESET_DAMAGE_STATUS_TIME": integer

constructor(arg0: $LivingEntity$$Type)

public "getFallMessage"(arg0: $CombatEntry$$Type, arg1: $Entity$$Type): $Component
public "getDeathMessage"(): $Component
public "recheckStatus"(): void
public "recordDamage"(arg0: $DamageSource$$Type, arg1: float): void
public "getMostSignificantFall"(): $CombatEntry
public "getCombatDuration"(): integer
get "deathMessage"(): $Component
get "mostSignificantFall"(): $CombatEntry
get "combatDuration"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CombatTracker$$Type = ($CombatTracker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CombatTracker$$Original = $CombatTracker;}
declare module "net.minecraft.world.damagesource.CombatEntry" {
import {$FallLocation, $FallLocation$$Type} from "net.minecraft.world.damagesource.FallLocation"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Record} from "java.lang.Record"

export class $CombatEntry extends $Record {
constructor(arg0: $DamageSource$$Type, arg1: float, arg2: $FallLocation$$Type, arg3: float)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "source"(): $DamageSource
public "fallDistance"(): float
public "fallLocation"(): $FallLocation
public "damage"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CombatEntry$$Type = ({"source"?: $DamageSource$$Type, "fallDistance"?: float, "fallLocation"?: $FallLocation$$Type, "damage"?: float}) | ([source?: $DamageSource$$Type, fallDistance?: float, fallLocation?: $FallLocation$$Type, damage?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CombatEntry$$Original = $CombatEntry;}
declare module "net.minecraft.world.damagesource.FallLocation" {
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Record} from "java.lang.Record"

export class $FallLocation extends $Record {
static readonly "GENERIC": $FallLocation
static readonly "LADDER": $FallLocation
static readonly "VINES": $FallLocation
static readonly "WEEPING_VINES": $FallLocation
static readonly "OTHER_CLIMBABLE": $FallLocation
static readonly "TWISTING_VINES": $FallLocation
static readonly "SCAFFOLDING": $FallLocation
static readonly "WATER": $FallLocation

constructor(arg0: StringJS)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): StringJS
public "languageKey"(): StringJS
public static "getCurrentFallLocation"(arg0: $LivingEntity$$Type): $FallLocation
public static "blockToFallLocation"(arg0: $BlockState$$Type): $FallLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FallLocation$$Type = ({"id"?: StringJS}) | ([id?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FallLocation$$Original = $FallLocation;}
declare module "net.minecraft.world.damagesource.DamageSource" {
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$DamageType, $DamageType$$Type} from "net.minecraft.world.damagesource.DamageType"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $DamageSource {
constructor(arg0: $Holder$$Type<($DamageType)>, arg1: $Entity$$Type, arg2: $Entity$$Type, arg3: $Vec3$$Type)
constructor(arg0: $Holder$$Type<($DamageType)>, arg1: $Entity$$Type, arg2: $Entity$$Type)
constructor(arg0: $Holder$$Type<($DamageType)>, arg1: $Vec3$$Type)
constructor(arg0: $Holder$$Type<($DamageType)>, arg1: $Entity$$Type)
constructor(arg0: $Holder$$Type<($DamageType)>)

public "type"(): $DamageType
public "toString"(): StringJS
public "isDirect"(): boolean
public "is"(arg0: $TagKey$$Type<($DamageType)>): boolean
public "is"(arg0: $ResourceKey$$Type<($DamageType)>): boolean
public "isCreativePlayer"(): boolean
public "getFoodExhaustion"(): float
/**
 * 
 * @deprecated
 */
public "scalesWithDifficulty"(): boolean
public "getActual"(): $Entity
public "getLocalizedDeathMessage"(arg0: $LivingEntity$$Type): $Component
public "getType"(): StringJS
public "sourcePositionRaw"(): $Vec3
public "getPlayer"(): $Player
public "typeHolder"(): $Holder<($DamageType)>
public "getImmediate"(): $Entity
public "getSourcePosition"(): $Vec3
public "getWeaponItem"(): $ItemStack
get "direct"(): boolean
get "creativePlayer"(): boolean
get "foodExhaustion"(): float
get "actual"(): $Entity
get "player"(): $Player
get "immediate"(): $Entity
get "sourcePosition"(): $Vec3
get "weaponItem"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamageSource$$Type = ($DamageSource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DamageSource$$Original = $DamageSource;}
declare module "net.minecraft.world.damagesource.DamageEffects" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Codec} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$ExtensionInfo} from "net.neoforged.fml.common.asm.enumextension.ExtensionInfo"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$IExtensibleEnum$$Interface} from "net.neoforged.fml.common.asm.enumextension.IExtensibleEnum"

export class $DamageEffects extends $Enum<($DamageEffects)> implements $StringRepresentable$$Interface, $IExtensibleEnum$$Interface {
static readonly "FREEZING": $DamageEffects
static readonly "CODEC": $Codec<($DamageEffects)>
static readonly "DROWNING": $DamageEffects
static readonly "POKING": $DamageEffects
static readonly "BURNING": $DamageEffects
static readonly "HURT": $DamageEffects
static readonly "THORNS": $DamageEffects

public static "values"(): ($DamageEffects)[]
public static "valueOf"(arg0: StringJS): $DamageEffects
public "sound"(): $SoundEvent
public static "getExtensionInfo"(): $ExtensionInfo
public "getSerializedName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
get "extensionInfo"(): $ExtensionInfo
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamageEffects$$Type = (("hurt") | ("thorns") | ("drowning") | ("burning") | ("poking") | ("freezing"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DamageEffects$$Original = $DamageEffects;}
declare module "net.minecraft.world.damagesource.DamageSources" {
import {$FireworkRocketEntity$$Type} from "net.minecraft.world.entity.projectile.FireworkRocketEntity"
import {$NorthstarDamageSources$$Interface} from "com.lightning.northstar.accessor.NorthstarDamageSources"
import {$Fireball$$Type} from "net.minecraft.world.entity.projectile.Fireball"
import {$DamageType, $DamageType$$Type} from "net.minecraft.world.damagesource.DamageType"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$DamageSource} from "net.minecraft.world.damagesource.DamageSource"
import {$Registry} from "net.minecraft.core.Registry"
import {$WitherSkull$$Type} from "net.minecraft.world.entity.projectile.WitherSkull"
import {$AbstractArrow$$Type} from "net.minecraft.world.entity.projectile.AbstractArrow"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $DamageSources implements $NorthstarDamageSources$$Interface {
readonly "damageTypes": $Registry<($DamageType)>

constructor(arg0: $RegistryAccess$$Type)

public "mobProjectile"(arg0: $Entity$$Type, arg1: $LivingEntity$$Type): $DamageSource
public "source"(arg0: $ResourceKey$$Type<($DamageType)>): $DamageSource
public "source"(arg0: $ResourceKey$$Type<($DamageType)>, arg1: $Entity$$Type, arg2: $Entity$$Type): $DamageSource
public "source"(arg0: $ResourceKey$$Type<($DamageType)>, arg1: $Entity$$Type): $DamageSource
public "generic"(): $DamageSource
public "freeze"(): $DamageSource
public "thrown"(arg0: $Entity$$Type, arg1: $Entity$$Type): $DamageSource
public "magic"(): $DamageSource
public "sweetBerryBush"(): $DamageSource
public "fallingStalactite"(arg0: $Entity$$Type): $DamageSource
public "explosion"(arg0: $Entity$$Type, arg1: $Entity$$Type): $DamageSource
public "explosion"(arg0: $Explosion$$Type): $DamageSource
public "hotFloor"(): $DamageSource
public "windCharge"(arg0: $Entity$$Type, arg1: $LivingEntity$$Type): $DamageSource
public "dryOut"(): $DamageSource
public "sting"(arg0: $LivingEntity$$Type): $DamageSource
public "lightningBolt"(): $DamageSource
public "playerAttack"(arg0: $Player$$Type): $DamageSource
public "badRespawnPointExplosion"(arg0: $Vec3$$Type): $DamageSource
public "spit"(arg0: $Entity$$Type, arg1: $LivingEntity$$Type): $DamageSource
public "mobAttack"(arg0: $LivingEntity$$Type): $DamageSource
public "outOfBorder"(): $DamageSource
public "genericKill"(): $DamageSource
public "fireball"(arg0: $Fireball$$Type, arg1: $Entity$$Type): $DamageSource
public "arrow"(arg0: $AbstractArrow$$Type, arg1: $Entity$$Type): $DamageSource
public "trident"(arg0: $Entity$$Type, arg1: $Entity$$Type): $DamageSource
public "inFire"(): $DamageSource
public "lava"(): $DamageSource
public "onFire"(): $DamageSource
public "fireworks"(arg0: $FireworkRocketEntity$$Type, arg1: $Entity$$Type): $DamageSource
public "indirectMagic"(arg0: $Entity$$Type, arg1: $Entity$$Type): $DamageSource
public "witherSkull"(arg0: $WitherSkull$$Type, arg1: $Entity$$Type): $DamageSource
public "starve"(): $DamageSource
public "wither"(): $DamageSource
public "thorns"(arg0: $Entity$$Type): $DamageSource
public "fallingBlock"(arg0: $Entity$$Type): $DamageSource
public "fall"(): $DamageSource
public "cramming"(): $DamageSource
public "drown"(): $DamageSource
public "inWall"(): $DamageSource
public "stalagmite"(): $DamageSource
public "flyIntoWall"(): $DamageSource
public "fellOutOfWorld"(): $DamageSource
public "cactus"(): $DamageSource
public "anvil"(arg0: $Entity$$Type): $DamageSource
public "campfire"(): $DamageSource
public "sonicBoom"(arg0: $Entity$$Type): $DamageSource
public "dragonBreath"(): $DamageSource
public "northstar$suffocation"(): $DamageSource
public "noAggroMobAttack"(arg0: $LivingEntity$$Type): $DamageSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamageSources$$Type = ($DamageSources);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DamageSources$$Original = $DamageSources;}
declare module "net.minecraft.world.damagesource.DamageType" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$DamageScaling, $DamageScaling$$Type} from "net.minecraft.world.damagesource.DamageScaling"
import {$DamageEffects, $DamageEffects$$Type} from "net.minecraft.world.damagesource.DamageEffects"
import {$DeathMessageType, $DeathMessageType$$Type} from "net.minecraft.world.damagesource.DeathMessageType"
import {$Holder} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $DamageType extends $Record {
static readonly "CODEC": $Codec<($Holder<($DamageType)>)>
static readonly "DIRECT_CODEC": $Codec<($DamageType)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($DamageType)>)>

constructor(arg0: StringJS, arg1: $DamageScaling$$Type, arg2: float, arg3: $DamageEffects$$Type, arg4: $DeathMessageType$$Type)
constructor(arg0: StringJS, arg1: float)
constructor(arg0: StringJS, arg1: float, arg2: $DamageEffects$$Type)
constructor(arg0: StringJS, arg1: $DamageScaling$$Type, arg2: float, arg3: $DamageEffects$$Type)
constructor(arg0: StringJS, arg1: $DamageScaling$$Type, arg2: float)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "msgId"(): StringJS
public "scaling"(): $DamageScaling
public "exhaustion"(): float
public "effects"(): $DamageEffects
public "deathMessageType"(): $DeathMessageType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.DamageType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.DamageTypeTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamageType$$Type = (Special.DamageType) | ({"effects"?: $DamageEffects$$Type, "scaling"?: $DamageScaling$$Type, "msgId"?: StringJS, "deathMessageType"?: $DeathMessageType$$Type, "exhaustion"?: float}) | ([effects?: $DamageEffects$$Type, scaling?: $DamageScaling$$Type, msgId?: StringJS, deathMessageType?: $DeathMessageType$$Type, exhaustion?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DamageType$$Original = $DamageType;}
