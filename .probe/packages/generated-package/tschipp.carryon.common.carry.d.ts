declare module "tschipp.carryon.common.carry.CarryOnData" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$CarryOnScript, $CarryOnScript$$Type} from "tschipp.carryon.common.scripting.CarryOnScript"
import {$Optional} from "java.util.Optional"
import {$CarryOnData$CarryType$$Type} from "tschipp.carryon.common.carry.CarryOnData$CarryType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CarryOnData {
constructor(arg0: $CompoundTag$$Type)

public "clone"(): $CarryOnData
public "clear"(): void
public "getBlock"(): $BlockState
public "getEntity"(arg0: $Level$$Type): $Entity
public "getNbt"(): $CompoundTag
public "getSelected"(): integer
public "getTick"(): integer
public "isCarrying"(arg0: $CarryOnData$CarryType$$Type): boolean
public "isCarrying"(): boolean
public "setBlock"(arg0: $BlockState$$Type, arg1: $BlockEntity$$Type): void
public "setSelected"(arg0: integer): void
public "getBlockEntity"(arg0: $BlockPos$$Type, arg1: $HolderLookup$Provider$$Type): $BlockEntity
public "getActiveScript"(): $Optional<($CarryOnScript)>
public "setEntity"(arg0: $Entity$$Type): void
public "isKeyPressed"(): boolean
public "setActiveScript"(arg0: $CarryOnScript$$Type): void
public "setKeyPressed"(arg0: boolean): void
public "getContentNbt"(): $CompoundTag
public "setCarryingPlayer"(): void
get "block"(): $BlockState
get "nbt"(): $CompoundTag
get "selected"(): integer
get "tick"(): integer
get "carrying"(): boolean
set "selected"(value: integer)
get "activeScript"(): $Optional<($CarryOnScript)>
set "entity"(value: $Entity$$Type)
get "keyPressed"(): boolean
set "activeScript"(value: $CarryOnScript$$Type)
set "keyPressed"(value: boolean)
get "contentNbt"(): $CompoundTag
get "carryingPlayer"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CarryOnData$$Type = ($CarryOnData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CarryOnData$$Original = $CarryOnData;}
declare module "tschipp.carryon.common.carry.CarryOnData$CarryType" {
import {$Enum} from "java.lang.Enum"

export class $CarryOnData$CarryType extends $Enum<($CarryOnData$CarryType)> {
static readonly "PLAYER": $CarryOnData$CarryType
static readonly "ENTITY": $CarryOnData$CarryType
static readonly "BLOCK": $CarryOnData$CarryType
static readonly "INVALID": $CarryOnData$CarryType

public static "values"(): ($CarryOnData$CarryType)[]
public static "valueOf"(arg0: StringJS): $CarryOnData$CarryType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CarryOnData$CarryType$$Type = (("block") | ("entity") | ("player") | ("invalid"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CarryOnData$CarryType$$Original = $CarryOnData$CarryType;}
declare module "tschipp.carryon.common.carry.CarryOnDataManager$ICarrying" {
import {$CarryOnData, $CarryOnData$$Type} from "tschipp.carryon.common.carry.CarryOnData"

export interface $CarryOnDataManager$ICarrying$$Interface {
set "carryOnData"(value: $CarryOnData$$Type)
get "carryOnData"(): $CarryOnData
}

export class $CarryOnDataManager$ICarrying implements $CarryOnDataManager$ICarrying$$Interface {
 "setCarryOnData"(arg0: $CarryOnData$$Type): void
 "getCarryOnData"(): $CarryOnData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CarryOnDataManager$ICarrying$$Type = ($CarryOnDataManager$ICarrying);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CarryOnDataManager$ICarrying$$Original = $CarryOnDataManager$ICarrying;}
