declare module "net.dawson.adorablehamsterpets.accessor.PlayerEntityAccessor" {
import {$ClientShoulderHamsterData} from "net.dawson.adorablehamsterpets.client.state.ClientShoulderHamsterData"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ShoulderLocation, $ShoulderLocation$$Type} from "net.dawson.adorablehamsterpets.entity.ShoulderLocation"
import {$ArrayDeque} from "java.util.ArrayDeque"

export interface $PlayerEntityAccessor$$Interface {
}

export class $PlayerEntityAccessor implements $PlayerEntityAccessor$$Interface {
 "adorablehamsterpets$getMountOrderQueue"(): $ArrayDeque<($ShoulderLocation)>
 "adorablehamsterpets$setRawShoulderData"(arg0: $CompoundTag$$Type): void
 "adorablehamsterpets$syncShoulderData"(): void
 "adorablehamsterpets$getClientShoulderData"(): $ClientShoulderHamsterData
 "hasAnyShoulderHamster"(): boolean
 "getShoulderHamster"(arg0: $ShoulderLocation$$Type): $CompoundTag
 "setShoulderHamster"(arg0: $ShoulderLocation$$Type, arg1: $CompoundTag$$Type): void
 "adorablehamsterpets$dismountShoulderHamster"(arg0: boolean): void
 "adorablehamsterpets$dismountShoulderHamster"(): void
 "ahp_setLastGoldMessageIndex"(arg0: integer): void
 "ahp_getLastGoldMessageIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEntityAccessor$$Type = ($PlayerEntityAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerEntityAccessor$$Original = $PlayerEntityAccessor;}
