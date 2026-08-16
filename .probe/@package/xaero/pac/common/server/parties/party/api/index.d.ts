import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $IPartyAllyAPI } from "@package/xaero/pac/common/parties/party/ally/api";
import { $Stream } from "@package/java/util/stream";
import { $IPartyPlayerInfoAPI, $IPartyAPI } from "@package/xaero/pac/common/parties/party/api";
import { $PartyMemberRank_ } from "@package/xaero/pac/common/parties/party/member";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $IPartyMemberAPI } from "@package/xaero/pac/common/parties/party/member/api";
import { $UUID_, $UUID } from "@package/java/util";

declare module "@package/xaero/pac/common/server/parties/party/api" {
    export class $IPartyManagerAPI {
    }
    export interface $IPartyManagerAPI {
        getPartyByOwner(arg0: $UUID_): $IServerPartyAPI;
        getPartyByMember(arg0: $UUID_): $IServerPartyAPI;
        getAllStream(): $Stream<$IServerPartyAPI>;
        partyExistsForOwner(arg0: $UUID_): boolean;
        removePartyById(arg0: $UUID_): void;
        getPartiesThatAlly(arg0: $UUID_): $Stream<$IServerPartyAPI>;
        removeParty(arg0: $IServerPartyAPI): void;
        removePartyByOwner(arg0: $UUID_): void;
        getPartyById(arg0: $UUID_): $IServerPartyAPI;
        createPartyForOwner(arg0: $Player): $IServerPartyAPI;
        get allStream(): $Stream<$IServerPartyAPI>;
    }
    export class $IServerPartyAPI {
    }
    export interface $IServerPartyAPI extends $IPartyAPI {
        getId(): $UUID;
        getOwner(): $IPartyMemberAPI;
        removeMember(arg0: $UUID_): $IPartyMemberAPI;
        addMember(arg0: $UUID_, arg1: $PartyMemberRank_ | null, arg2: string): $IPartyMemberAPI;
        getMemberCount(): number;
        getDefaultName(): string;
        invitePlayer(arg0: $UUID_, arg1: string): $IPartyPlayerInfoAPI;
        isInvited(arg0: $UUID_): boolean;
        getNonStaffInfoStream(): $Stream<$IPartyMemberAPI>;
        getAllyPartiesStream(): $Stream<$IPartyAllyAPI>;
        getInvitedPlayersStream(): $Stream<$IPartyPlayerInfoAPI>;
        getMemberInfoStream(): $Stream<$IPartyMemberAPI>;
        getMemberInfo(arg0: $UUID_): $IPartyMemberAPI;
        getMemberInfo(arg0: string): $IPartyMemberAPI;
        uninvitePlayer(arg0: $UUID_): $IPartyPlayerInfoAPI;
        removeAllyParty(arg0: $UUID_): void;
        getInviteCount(): number;
        getStaffInfoStream(): $Stream<$IPartyMemberAPI>;
        addAllyParty(arg0: $UUID_): void;
        getAllyCount(): number;
        isAlly(arg0: $UUID_): boolean;
        setRank(arg0: $IPartyMemberAPI, arg1: $PartyMemberRank_): boolean;
        getOnlineMemberStream(): $Stream<$ServerPlayer>;
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
        get onlineMemberStream(): $Stream<$ServerPlayer>;
    }
}
