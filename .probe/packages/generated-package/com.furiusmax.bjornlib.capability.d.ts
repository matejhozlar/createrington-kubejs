declare module "com.furiusmax.bjornlib.capability.IPlayerAbilities" {
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$Ability, $Ability$$Type} from "com.furiusmax.bjornlib.ability.Ability"
import {$AbilityType$$Type} from "com.furiusmax.bjornlib.ability.AbilityType"
import {$Optional} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"

export interface $IPlayerAbilities$$Interface {
get "player"(): $Player
get "roots"(): $List<($Ability)>
set "abilities"(value: $List$$Type<($Ability$$Type)>)
get "currentAbility"(): $Ability
set "currentAbility"(value: $Ability$$Type)
}

export class $IPlayerAbilities implements $IPlayerAbilities$$Interface {
 "copyFrom"(arg0: $IPlayerAbilities$$Type): void
 "getPlayer"(): $Player
 "getAbility"<T extends $Ability>(arg0: $AbilityType$$Type): $Optional<(T)>
 "getRoots"(): $List<($Ability)>
 "addAbility"(arg0: $AbilityType$$Type, arg1: integer): void
 "setAbilities"(arg0: $List$$Type<($Ability$$Type)>): void
 "getCurrentAbility"(): $Ability
 "removeAbility"(arg0: $AbilityType$$Type): void
 "setCurrentAbility"(arg0: $Ability$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerAbilities$$Type = ($IPlayerAbilities);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPlayerAbilities$$Original = $IPlayerAbilities;}
