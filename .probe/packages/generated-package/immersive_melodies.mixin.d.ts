declare module "immersive_melodies.mixin.MusicTrackerAccessor" {
import {$SoundInstance, $SoundInstance$$Type} from "net.minecraft.client.resources.sounds.SoundInstance"

export interface $MusicTrackerAccessor$$Interface {

(): $SoundInstance$$Type
get "currentMusic"(): $SoundInstance
}

export class $MusicTrackerAccessor implements $MusicTrackerAccessor$$Interface {
 "getCurrentMusic"(): $SoundInstance
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MusicTrackerAccessor$$Type = (() => $SoundInstance$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MusicTrackerAccessor$$Original = $MusicTrackerAccessor;}
