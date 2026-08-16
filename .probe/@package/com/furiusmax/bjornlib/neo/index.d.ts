import { $Serializable } from "@package/java/io";
import { $Event } from "@package/net/neoforged/bus/api";
import { $IPlayerAbilities } from "@package/com/furiusmax/bjornlib/capability";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $AbilityType_ } from "@package/com/furiusmax/bjornlib/ability";
export * as mixin from "@package/com/furiusmax/bjornlib/neo/mixin";

declare module "@package/com/furiusmax/bjornlib/neo" {
    export class $AbilityEvents$UpdateSkill extends $AbilityEvents {
        constructor(arg0: $Player, arg1: $AbilityType_, arg2: $IPlayerAbilities);
    }
    export class $AbilityEvents$AddSkill extends $AbilityEvents {
        constructor(arg0: $Player, arg1: $AbilityType_, arg2: $IPlayerAbilities);
    }
    export class $AbilityEvents$releaseAbility extends $AbilityEvents {
        constructor(arg0: $Player, arg1: $AbilityType_, arg2: $IPlayerAbilities);
    }
    export class $AbilityEvents$RemoveSkill extends $AbilityEvents {
        constructor(arg0: $Player, arg1: $AbilityType_, arg2: $IPlayerAbilities);
    }
    export class $AbilityEvents$CastContinuousAbility extends $AbilityEvents {
        constructor(arg0: $Player, arg1: $AbilityType_, arg2: $IPlayerAbilities);
    }
    export class $AbilityEvents extends $Event implements $Serializable {
        constructor();
    }
    export class $AbilityEvents$CastAbility extends $AbilityEvents {
        constructor(arg0: $Player, arg1: $AbilityType_, arg2: $IPlayerAbilities);
    }
}
