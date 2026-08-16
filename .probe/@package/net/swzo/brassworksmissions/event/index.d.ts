import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Event } from "@package/net/neoforged/bus/api";
import { $ActiveMission } from "@package/net/swzo/brassworksmissions/missions";

declare module "@package/net/swzo/brassworksmissions/event" {
    export class $MissionEvent$Reset extends $MissionEvent {
        constructor(arg0: $ServerPlayer);
    }
    export class $MissionEvent$Completed extends $MissionEvent {
        getSlot(): number;
        getMission(): $ActiveMission;
        constructor(arg0: $ServerPlayer, arg1: $ActiveMission, arg2: number);
        get slot(): number;
        get mission(): $ActiveMission;
    }
    export class $MissionEvent$RewardClaimed extends $MissionEvent {
        getSlot(): number;
        getMission(): $ActiveMission;
        constructor(arg0: $ServerPlayer, arg1: $ActiveMission, arg2: number);
        get slot(): number;
        get mission(): $ActiveMission;
    }
    export class $MissionEvent$Rerolled extends $MissionEvent {
        getSlot(): number;
        isForced(): boolean;
        getNewMission(): $ActiveMission;
        constructor(arg0: $ServerPlayer, arg1: $ActiveMission, arg2: number, arg3: boolean);
        get slot(): number;
        get forced(): boolean;
        get newMission(): $ActiveMission;
    }
    export class $MissionEvent extends $Event {
        getPlayer(): $ServerPlayer;
        constructor(arg0: $ServerPlayer);
        get player(): $ServerPlayer;
    }
}
