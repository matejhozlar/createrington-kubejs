declare module "io.wispforest.owo.network.OwoClientConnectionExtension" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Set, $Set$$Type} from "java.util.Set"

export interface $OwoClientConnectionExtension$$Interface {
}

export class $OwoClientConnectionExtension implements $OwoClientConnectionExtension$$Interface {
 "owo$getChannelSet"(): $Set<($ResourceLocation)>
 "owo$setChannelSet"(arg0: $Set$$Type<($ResourceLocation$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwoClientConnectionExtension$$Type = ($OwoClientConnectionExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OwoClientConnectionExtension$$Original = $OwoClientConnectionExtension;}
