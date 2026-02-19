declare module "net.silentchaos512.gear.util.Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $Serializer<B, V> {
constructor(arg0: $MapCodec$$Type<(V)>, arg1: $StreamCodec$$Type<(B), (V)>)

public "codec"(): $MapCodec<(V)>
public "streamCodec"(): $StreamCodec<(B), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Serializer$$Type<B, V> = ($Serializer<(B), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Serializer$$Original<B, V> = $Serializer<(B), (V)>;}
