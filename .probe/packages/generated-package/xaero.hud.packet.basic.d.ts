declare module "xaero.hud.packet.basic.ClientboundRulesPacket" {
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"

export class $ClientboundRulesPacket {
readonly "allowCaveModeOnServer": boolean
readonly "allowNetherCaveModeOnServer": boolean
readonly "allowRadarOnServer": boolean

constructor(arg0: boolean, arg1: boolean, arg2: boolean)

public "write"(arg0: $FriendlyByteBuf$$Type): void
public static "read"(arg0: $FriendlyByteBuf$$Type): $ClientboundRulesPacket
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundRulesPacket$$Type = ($ClientboundRulesPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundRulesPacket$$Original = $ClientboundRulesPacket;}
