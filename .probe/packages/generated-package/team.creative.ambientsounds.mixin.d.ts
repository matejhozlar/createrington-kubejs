declare module "team.creative.ambientsounds.mixin.SoundBufferLibraryAccessor" {
import {$ResourceProvider, $ResourceProvider$$Type} from "net.minecraft.server.packs.resources.ResourceProvider"

export interface $SoundBufferLibraryAccessor$$Interface {

(): $ResourceProvider$$Type
get "resourceManager"(): $ResourceProvider
}

export class $SoundBufferLibraryAccessor implements $SoundBufferLibraryAccessor$$Interface {
 "getResourceManager"(): $ResourceProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundBufferLibraryAccessor$$Type = (() => $ResourceProvider$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoundBufferLibraryAccessor$$Original = $SoundBufferLibraryAccessor;}
