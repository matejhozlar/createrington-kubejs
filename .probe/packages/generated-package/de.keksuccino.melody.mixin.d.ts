declare module "de.keksuccino.melody.mixin.mixins.common.client.IMixinSoundManager" {
import {$SoundEngine, $SoundEngine$$Type} from "net.minecraft.client.sounds.SoundEngine"

export interface $IMixinSoundManager$$Interface {

(): $SoundEngine$$Type
get "soundEngineMelody"(): $SoundEngine
}

export class $IMixinSoundManager implements $IMixinSoundManager$$Interface {
 "getSoundEngineMelody"(): $SoundEngine
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinSoundManager$$Type = (() => $SoundEngine$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMixinSoundManager$$Original = $IMixinSoundManager;}
declare module "de.keksuccino.melody.mixin.mixins.common.client.IMixinSoundEngine" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMixinSoundEngine$$Interface {

(): boolean
get "loadedMelody"(): boolean
}

export class $IMixinSoundEngine implements $IMixinSoundEngine$$Interface {
 "getLoadedMelody"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinSoundEngine$$Type = (() => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMixinSoundEngine$$Original = $IMixinSoundEngine;}
