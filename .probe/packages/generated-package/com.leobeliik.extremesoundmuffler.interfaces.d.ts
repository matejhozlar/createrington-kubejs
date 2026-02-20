declare module "com.leobeliik.extremesoundmuffler.interfaces.ISoundLists" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Map} from "java.util.Map"
import {$Anchor} from "com.leobeliik.extremesoundmuffler.utils.Anchor"
import {$List} from "java.util.List"
import {$Set} from "java.util.Set"

export interface $ISoundLists$$Interface {
}

export class $ISoundLists implements $ISoundLists$$Interface {
static readonly "muffledSounds": $Map<($ResourceLocation), (double)>
static readonly "modsMuffled": $Set<(StringJS)>
static readonly "soundsList": $List<($ResourceLocation)>
static readonly "forbiddenSounds": $Set<(StringJS)>
static readonly "recentSoundsList": $List<($ResourceLocation)>
static readonly "anchorList": $List<($Anchor)>

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISoundLists$$Type = ($ISoundLists);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISoundLists$$Original = $ISoundLists;}
