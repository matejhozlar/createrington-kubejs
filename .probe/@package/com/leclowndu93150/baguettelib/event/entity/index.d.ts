import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $Player } from "@package/net/minecraft/world/entity/player";
export * as death from "@package/com/leclowndu93150/baguettelib/event/entity/death";

declare module "@package/com/leclowndu93150/baguettelib/event/entity" {
    export class $CreativeFlightEvent$Changed extends $CreativeFlightEvent {
        getNewFlightState(): boolean;
        wasFlightDisabled(): boolean;
        wasFlightEnabled(): boolean;
        getPreviousFlightState(): boolean;
        constructor(arg0: $Player, arg1: boolean, arg2: boolean);
        get newFlightState(): boolean;
        get previousFlightState(): boolean;
    }
    export class $CreativeFlightEvent$Toggle extends $CreativeFlightEvent implements $ICancellableEvent {
        getFlightState(): boolean;
        setFlightState(arg0: boolean): void;
        isDisablingFlight(): boolean;
        isEnablingFlight(): boolean;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $Player, arg1: boolean);
        get disablingFlight(): boolean;
        get enablingFlight(): boolean;
    }
    export class $CreativeFlightEvent extends $Event {
        getPlayer(): $Player;
        get player(): $Player;
    }
}
