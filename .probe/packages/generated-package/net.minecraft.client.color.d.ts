declare module "net.minecraft.client.color.block.BlockColor" {
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $BlockColor$$Interface {

(arg0: $BlockState, arg1: $BlockAndTintGetter, arg2: $BlockPos, arg3: integer): integer
}

export class $BlockColor implements $BlockColor$$Interface {
 "getColor"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockColor$$Type = ((arg0: $BlockState, arg1: $BlockAndTintGetter, arg2: $BlockPos, arg3: integer) => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockColor$$Original = $BlockColor;}
declare module "net.minecraft.client.color.item.ItemColors" {
import {$BlockColors$$Type} from "net.minecraft.client.color.block.BlockColors"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$ItemColor$$Type} from "net.minecraft.client.color.item.ItemColor"
import {$ItemColorsNeoForgeAccessor$$Interface} from "fuzs.puzzleslib.neoforge.mixin.client.accessor.ItemColorsNeoForgeAccessor"

export class $ItemColors implements $ItemColorsNeoForgeAccessor$$Interface {
constructor()

public "getColor"(arg0: $ItemStack$$Type, arg1: integer): integer
/**
 * 
 * @deprecated
 */
public "register"(arg0: $ItemColor$$Type, ...arg1: ($ItemLike$$Type)[]): void
public static "createDefault"(arg0: $BlockColors$$Type): $ItemColors
public "puzzleslib$getItemColors"(): $Map
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemColors$$Type = ($ItemColors);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemColors$$Original = $ItemColors;}
declare module "net.minecraft.client.color.item.ItemColor" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $ItemColor$$Interface {

(arg0: $ItemStack, arg1: integer): integer
}

export class $ItemColor implements $ItemColor$$Interface {
 "getColor"(arg0: $ItemStack$$Type, arg1: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemColor$$Type = ((arg0: $ItemStack, arg1: integer) => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemColor$$Original = $ItemColor;}
declare module "net.minecraft.client.color.block.BlockColors" {
import {$Map} from "java.util.Map"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Set} from "java.util.Set"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockColorsNeoForgeAccessor$$Interface} from "fuzs.puzzleslib.neoforge.mixin.client.accessor.BlockColorsNeoForgeAccessor"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockColors implements $BlockColorsNeoForgeAccessor$$Interface {
readonly "blockColors": $Map<($Block), ($BlockColor)>

constructor()

public "getColor"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: integer): integer
public "getColor"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
/**
 * 
 * @deprecated
 */
public "register"(arg0: $BlockColor$$Type, ...arg1: ($Block$$Type)[]): void
public static "createDefault"(): $BlockColors
public "getColoringProperties"(arg0: $Block$$Type): $Set<($Property<(never)>)>
public "puzzleslib$getBlockColors"(): $Map
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockColors$$Type = ($BlockColors);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockColors$$Original = $BlockColors;}
