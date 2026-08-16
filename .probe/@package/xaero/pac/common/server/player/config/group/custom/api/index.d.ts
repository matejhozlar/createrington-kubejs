import { $Either } from "@package/com/mojang/datafixers/util";
import { $UUID_, $Set } from "@package/java/util";
import { $PlayerConfigGroupActionError } from "@package/xaero/pac/common/player/config/group/api";
import { $ICustomPlayerConfigGroupDataAPI, $ICustomPlayerGroupMemberAPI } from "@package/xaero/pac/common/player/config/group/custom/api";

declare module "@package/xaero/pac/common/server/player/config/group/custom/api" {
    export class $ICustomPlayerConfigGroupAPI {
    }
    export interface $ICustomPlayerConfigGroupAPI extends $ICustomPlayerConfigGroupDataAPI {
        getSize(): number;
        copyData(): $ICustomPlayerConfigGroupDataAPI;
        includeGroupLimited(arg0: string): ($PlayerConfigGroupActionError) | undefined;
        excludeMember(arg0: $ICustomPlayerGroupMemberAPI): ($PlayerConfigGroupActionError) | undefined;
        excludeMember(arg0: $UUID_ | null, arg1: string | null): ($PlayerConfigGroupActionError) | undefined;
        excludeGroup(arg0: string): ($PlayerConfigGroupActionError) | undefined;
        playerNameIsIncluded(arg0: string | null): boolean;
        getDirectMembers(): $Set<$ICustomPlayerGroupMemberAPI>;
        playerIdIsIncluded(arg0: $UUID_ | null): boolean;
        includeGroup(arg0: string): ($PlayerConfigGroupActionError) | undefined;
        groupIdIsIncluded(arg0: string | null): boolean;
        getDirectGroupIds(): $Set<string>;
        includeMember(arg0: $UUID_ | null, arg1: string | null): $Either<$ICustomPlayerGroupMemberAPI, $PlayerConfigGroupActionError>;
        includeMemberLimited(arg0: $UUID_ | null, arg1: string | null): $Either<$ICustomPlayerGroupMemberAPI, $PlayerConfigGroupActionError>;
        get size(): number;
        get directMembers(): $Set<$ICustomPlayerGroupMemberAPI>;
        get directGroupIds(): $Set<string>;
    }
}
