declare module "net.dawson.adorablehamsterpets.client.state.ClientShoulderHamsterData" {
import {$ShoulderLocation$$Type} from "net.dawson.adorablehamsterpets.entity.ShoulderLocation"
import {$AbstractClientPlayer$$Type} from "net.minecraft.client.player.AbstractClientPlayer"
import {$ShoulderHamsterState} from "net.dawson.adorablehamsterpets.entity.client.feature.ShoulderHamsterState"

export class $ClientShoulderHamsterData {
constructor()

public "clientTick"(player: $AbstractClientPlayer$$Type): void
public "getRenderScaleY"(location: $ShoulderLocation$$Type, partialTick: float): float
public "getAnimationAge"(location: $ShoulderLocation$$Type): integer
public "getRenderOffsetY"(location: $ShoulderLocation$$Type, partialTick: float): float
public "getHamsterState"(location: $ShoulderLocation$$Type): $ShoulderHamsterState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientShoulderHamsterData$$Type = ($ClientShoulderHamsterData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientShoulderHamsterData$$Original = $ClientShoulderHamsterData;}
