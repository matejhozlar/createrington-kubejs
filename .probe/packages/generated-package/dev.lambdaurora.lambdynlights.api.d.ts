declare module "dev.lambdaurora.lambdynlights.api.DynamicLightHandler" {
import {$Creeper} from "net.minecraft.world.entity.monster.Creeper"
import {$Function$$Type} from "java.util.function.Function"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"

export interface $DynamicLightHandler$$Interface<T> {

(arg0: T): integer
}

export class $DynamicLightHandler<T> implements $DynamicLightHandler$$Interface {
static "makeHandler"<T extends $LivingEntity>(luminance: $Function$$Type<(T), (integer)>, waterSensitive: $Function$$Type<(T), (boolean)>): $DynamicLightHandler<(T)>
 "getLuminance"(arg0: T): integer
static "makeLivingEntityHandler"<T extends $LivingEntity>(handler: $DynamicLightHandler$$Type<(T)>): $DynamicLightHandler<(T)>
 "isWaterSensitive"(lightSource: T): boolean
static "makeCreeperEntityHandler"<T extends $Creeper>(handler: $DynamicLightHandler$$Type<(T)>): $DynamicLightHandler<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicLightHandler$$Type<T> = ((arg0: T) => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DynamicLightHandler$$Original<T> = $DynamicLightHandler<(T)>;}
