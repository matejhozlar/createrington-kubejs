import { $Level } from "@package/net/minecraft/world/level";
import { $Event } from "@package/net/neoforged/bus/api";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $SubLevelRemovalReason, $SubLevelRemovalReason_ } from "@package/dev/ryanhcode/sable/sublevel/storage";
import { $SubLevel } from "@package/dev/ryanhcode/sable/sublevel";

declare module "@package/dev/playcdu/shtreimel/neoforge/event" {
    export class $NeoForgeSubLevelRemovedEvent extends $Event {
        getReason(): $SubLevelRemovalReason;
        getDimension(): $ResourceKey<$Level>;
        getSubLevel(): $SubLevel;
        constructor(arg0: $ResourceKey_<$Level>, arg1: $SubLevel, arg2: $SubLevelRemovalReason_);
        get reason(): $SubLevelRemovalReason;
        get dimension(): $ResourceKey<$Level>;
        get subLevel(): $SubLevel;
    }
    export class $NeoForgeSubLevelAddedEvent extends $Event {
        getDimension(): $ResourceKey<$Level>;
        getSubLevel(): $SubLevel;
        constructor(arg0: $ResourceKey_<$Level>, arg1: $SubLevel);
        get dimension(): $ResourceKey<$Level>;
        get subLevel(): $SubLevel;
    }
}
