declare module "com.denisnumb.discord_chat_mod.mixin.chat_style.CombatTrackerAccessorMixin" {
import {$List, $List$$Type} from "java.util.List"
import {$CombatEntry, $CombatEntry$$Type} from "net.minecraft.world.damagesource.CombatEntry"

export interface $CombatTrackerAccessorMixin$$Interface {

(): $List$$Type<($CombatEntry$$Type)>
get "entries"(): $List<($CombatEntry)>
}

export class $CombatTrackerAccessorMixin implements $CombatTrackerAccessorMixin$$Interface {
 "getEntries"(): $List<($CombatEntry)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CombatTrackerAccessorMixin$$Type = (() => $List$$Type<($CombatEntry$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CombatTrackerAccessorMixin$$Original = $CombatTrackerAccessorMixin;}
