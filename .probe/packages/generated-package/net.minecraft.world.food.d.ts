declare module "net.minecraft.world.food.FoodProperties" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$FoodProperties$PossibleEffect, $FoodProperties$PossibleEffect$$Type} from "net.minecraft.world.food.FoodProperties$PossibleEffect"
import {$Record} from "java.lang.Record"

export class $FoodProperties extends $Record {
static readonly "DIRECT_CODEC": $Codec<($FoodProperties)>
static readonly "DIRECT_STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($FoodProperties)>

constructor(nutrition: integer, saturation: float, canAlwaysEat: boolean, eatSeconds: float, usingConvertsTo: ($ItemStack$$Type)?, effects: $List$$Type<($FoodProperties$PossibleEffect$$Type)>)

public "nutrition"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "saturation"(): float
public "usingConvertsTo"(): $Optional<($ItemStack)>
public "eatDurationTicks"(): integer
public "canAlwaysEat"(): boolean
public "effects"(): $List<($FoodProperties$PossibleEffect)>
public "eatSeconds"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FoodProperties$$Type = ({"eatSeconds"?: float, "usingConvertsTo"?: ($ItemStack$$Type)?, "canAlwaysEat"?: boolean, "nutrition"?: integer, "saturation"?: float, "effects"?: $List$$Type<($FoodProperties$PossibleEffect$$Type)>}) | ([eatSeconds?: float, usingConvertsTo?: ($ItemStack$$Type)?, canAlwaysEat?: boolean, nutrition?: integer, saturation?: float, effects?: $List$$Type<($FoodProperties$PossibleEffect$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FoodProperties$$Original = $FoodProperties;}
declare module "net.minecraft.world.food.FoodData" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$FoodProperties$$Type} from "net.minecraft.world.food.FoodProperties"

export class $FoodData {
constructor()

public "eat"(arg0: integer, arg1: float): void
public "eat"(arg0: $FoodProperties$$Type): void
public "tick"(arg0: $Player$$Type): void
public "addAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "readAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "getSaturationLevel"(): float
public "getFoodLevel"(): integer
public "setFoodLevel"(arg0: integer): void
public "setSaturation"(arg0: float): void
public "addExhaustion"(arg0: float): void
public "getExhaustionLevel"(): float
public "needsFood"(): boolean
public "setExhaustion"(arg0: float): void
public "getLastFoodLevel"(): integer
get "saturationLevel"(): float
get "foodLevel"(): integer
set "foodLevel"(value: integer)
set "saturation"(value: float)
get "exhaustionLevel"(): float
set "exhaustion"(value: float)
get "lastFoodLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FoodData$$Type = ($FoodData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FoodData$$Original = $FoodData;}
declare module "net.minecraft.world.food.FoodProperties$PossibleEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$MobEffectInstance, $MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Record} from "java.lang.Record"

export class $FoodProperties$PossibleEffect extends $Record {
static readonly "CODEC": $Codec<($FoodProperties$PossibleEffect)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($FoodProperties$PossibleEffect)>

constructor(effectSupplier: $Supplier$$Type<($MobEffectInstance$$Type)>, probability: float)

public "effect"(): $MobEffectInstance
public "effectSupplier"(): $Supplier<($MobEffectInstance)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "probability"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FoodProperties$PossibleEffect$$Type = ({"probability"?: float, "effectSupplier"?: $Supplier$$Type<($MobEffectInstance$$Type)>}) | ([probability?: float, effectSupplier?: $Supplier$$Type<($MobEffectInstance$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FoodProperties$PossibleEffect$$Original = $FoodProperties$PossibleEffect;}
