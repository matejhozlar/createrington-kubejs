declare module "com.cake.trading_floor.foundation.access.VillagerExperienceAccessor" {
import {$MerchantOffer, $MerchantOffer$$Type} from "net.minecraft.world.item.trading.MerchantOffer"

export interface $VillagerExperienceAccessor$$Interface {

(arg0: integer, arg1: $MerchantOffer): void
}

export class $VillagerExperienceAccessor implements $VillagerExperienceAccessor$$Interface {
 "trading_Floor_Neoforge$addExperienceForTrade"(arg0: integer, arg1: $MerchantOffer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerExperienceAccessor$$Type = ((arg0: integer, arg1: $MerchantOffer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VillagerExperienceAccessor$$Original = $VillagerExperienceAccessor;}
