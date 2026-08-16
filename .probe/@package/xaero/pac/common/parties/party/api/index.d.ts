import { $IPartyAllyAPI } from "@package/xaero/pac/common/parties/party/ally/api";
import { $Stream } from "@package/java/util/stream";
import { $PartyMemberRank_ } from "@package/xaero/pac/common/parties/party/member";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $IPartyMemberAPI } from "@package/xaero/pac/common/parties/party/member/api";
import { $UUID_, $UUID } from "@package/java/util";

declare module "@package/xaero/pac/common/parties/party/api" {
    export class $IPartyMemberDynamicInfoSyncableAPI {
    }
    export interface $IPartyMemberDynamicInfoSyncableAPI {
        getDimension(): $ResourceLocation;
        getY(): number;
        getX(): number;
        getZ(): number;
        getPlayerId(): $UUID;
        get dimension(): $ResourceLocation;
        get y(): number;
        get x(): number;
        get z(): number;
        get playerId(): $UUID;
    }
    export class $IPartyAPI {
    }
    export interface $IPartyAPI {
        getId(): $UUID;
        getOwner(): $IPartyMemberAPI;
        getMemberCount(): number;
        getDefaultName(): string;
        isInvited(arg0: $UUID_): boolean;
        getNonStaffInfoStream(): $Stream<$IPartyMemberAPI>;
        getAllyPartiesStream(): $Stream<$IPartyAllyAPI>;
        getInvitedPlayersStream(): $Stream<$IPartyPlayerInfoAPI>;
        getMemberInfoStream(): $Stream<$IPartyMemberAPI>;
        getMemberInfo(arg0: $UUID_): $IPartyMemberAPI;
        getInviteCount(): number;
        getStaffInfoStream(): $Stream<$IPartyMemberAPI>;
        getAllyCount(): number;
        isAlly(arg0: $UUID_): boolean;
        setRank(arg0: $IPartyMemberAPI, arg1: $PartyMemberRank_): boolean;
        get id(): $UUID;
        get owner(): $IPartyMemberAPI;
        get memberCount(): number;
        get defaultName(): string;
        get nonStaffInfoStream(): $Stream<$IPartyMemberAPI>;
        get allyPartiesStream(): $Stream<$IPartyAllyAPI>;
        get invitedPlayersStream(): $Stream<$IPartyPlayerInfoAPI>;
        get memberInfoStream(): $Stream<$IPartyMemberAPI>;
        get inviteCount(): number;
        get staffInfoStream(): $Stream<$IPartyMemberAPI>;
        get allyCount(): number;
    }
    export class $IPartyPlayerInfoAPI {
    }
    export interface $IPartyPlayerInfoAPI {
        getUUID(): $UUID;
        getUsername(): string;
        get UUID(): $UUID;
        get username(): string;
    }
}
