import { $Holder_ } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $GenericFlagPole, $Flag } from "@package/petrolpark/mc/library/core/flags";

declare module "@package/petrolpark/mc/library/core/world/block/entity" {
    export class $IShulkerBoxBlockEntityDuck {
    }
    export interface $IShulkerBoxBlockEntityDuck {
        flagAll(arg0: $Stream<$Holder_<$Flag>>): void;
        getFlagPole(): $GenericFlagPole;
        get flagPole(): $GenericFlagPole;
    }
}
