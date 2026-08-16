import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List_, $List } from "@package/java/util";
import { $Ability, $AbilityType_ } from "@package/com/furiusmax/bjornlib/ability";

declare module "@package/com/furiusmax/bjornlib/capability" {
    export class $IPlayerAbilities {
    }
    export interface $IPlayerAbilities {
        copyFrom(arg0: $IPlayerAbilities): void;
        getPlayer(): $Player;
        getAbility<T extends $Ability>(arg0: $AbilityType_): (T) | undefined;
        setAbilities(arg0: $List_<$Ability>): void;
        removeAbility(arg0: $AbilityType_): void;
        getCurrentAbility(): $Ability;
        setCurrentAbility(arg0: $Ability): void;
        addAbility(arg0: $AbilityType_, arg1: number): void;
        getRoots(): $List<$Ability>;
        get player(): $Player;
        set abilities(value: $List_<$Ability>);
        get roots(): $List<$Ability>;
    }
}
