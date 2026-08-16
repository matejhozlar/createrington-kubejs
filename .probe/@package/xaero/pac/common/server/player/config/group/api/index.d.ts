import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $PlayerConfigType_ } from "@package/xaero/pac/common/server/player/config/api";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $ICustomPlayerConfigGroupAPI } from "@package/xaero/pac/common/server/player/config/group/custom/api";
import { $IPlayerConfigAPI } from "@package/xaero/pac/common/server/player/config/api/v2";
import { $UUID_, $List } from "@package/java/util";
import { $PlayerConfigGroupActionError } from "@package/xaero/pac/common/player/config/group/api";
import { $ICustomPlayerConfigGroupDataManagerAPI } from "@package/xaero/pac/common/player/config/group/custom/api";

declare module "@package/xaero/pac/common/server/player/config/group/api" {
    export class $IServerPlayerConfigGroupManagerAPI {
    }
    export interface $IServerPlayerConfigGroupManagerAPI extends $ICustomPlayerConfigGroupDataManagerAPI {
        get(arg0: string): $IPlayerConfigGroupAPI;
        removeCustom(arg0: string): ($PlayerConfigGroupActionError) | undefined;
        getCustom(arg0: string): $ICustomPlayerConfigGroupAPI;
        addCustom(arg0: string): $Either<$ICustomPlayerConfigGroupAPI, $PlayerConfigGroupActionError>;
        getUnwrapped(arg0: string): $IPlayerConfigGroupAPI;
        getMaxGroups(): number;
        getAllIdsSorted(): $List<string>;
        getGroupSpace(): number;
        addCustomLimited(arg0: string): $Either<$ICustomPlayerConfigGroupAPI, $PlayerConfigGroupActionError>;
        dataExists(arg0: string): boolean;
        get maxGroups(): number;
        get allIdsSorted(): $List<string>;
        get groupSpace(): number;
    }
    export class $IPlayerConfigGroupAPI {
    }
    export interface $IPlayerConfigGroupAPI {
        getId(): string;
        isInGroup(arg0: $IPlayerConfigAPI, arg1: $ServerPlayer): boolean;
        isInGroup(arg0: $IPlayerConfigAPI, arg1: $UUID_): boolean;
        isInGroup(arg0: $IPlayerConfigAPI, arg1: $ServerPlayer | null, arg2: $UUID_ | null): boolean;
        isDirectlyInGroup(arg0: $IPlayerConfigAPI, arg1: $ServerPlayer): boolean;
        isDirectlyInGroup(arg0: $IPlayerConfigAPI, arg1: $UUID_): boolean;
        isDirectlyInGroup(arg0: $IPlayerConfigAPI, arg1: $ServerPlayer | null, arg2: $UUID_ | null): boolean;
        supportsConfigType(arg0: $PlayerConfigType_): boolean;
        get id(): string;
    }
}
