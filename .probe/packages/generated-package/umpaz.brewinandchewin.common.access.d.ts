declare module "umpaz.brewinandchewin.common.access.FoodDataEntityAccess" {
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $FoodDataEntityAccess$$Interface {

(arg0: $LivingEntity): void
}

export class $FoodDataEntityAccess implements $FoodDataEntityAccess$$Interface {
 "brewinandchewin$setEntity"(arg0: $LivingEntity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FoodDataEntityAccess$$Type = ((arg0: $LivingEntity) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FoodDataEntityAccess$$Original = $FoodDataEntityAccess;}
declare module "umpaz.brewinandchewin.common.access.ChatPlayerListAccess" {
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $ChatPlayerListAccess$$Interface {

(arg0: $Component): void
}

export class $ChatPlayerListAccess implements $ChatPlayerListAccess$$Interface {
 "brewinandchewin$setOriginalMessage"(arg0: $Component$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChatPlayerListAccess$$Type = ((arg0: $Component) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChatPlayerListAccess$$Original = $ChatPlayerListAccess;}
declare module "umpaz.brewinandchewin.common.access.LootParamsParamSetAccess" {
import {$LootContextParamSet, $LootContextParamSet$$Type} from "net.minecraft.world.level.storage.loot.parameters.LootContextParamSet"

export interface $LootParamsParamSetAccess$$Interface {
}

export class $LootParamsParamSetAccess implements $LootParamsParamSetAccess$$Interface {
 "brewinandchewin$setParamSet"(arg0: $LootContextParamSet$$Type): void
 "brewinandchewin$getParamSet"(): $LootContextParamSet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootParamsParamSetAccess$$Type = ($LootParamsParamSetAccess);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootParamsParamSetAccess$$Original = $LootParamsParamSetAccess;}
