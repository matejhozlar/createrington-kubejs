import { $IClaimingModeAPI_ } from "@package/xaero/pac/common/claims/player/mode/api";
import { $Predicate, $BiPredicate, $Function } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $PlayerConfigType } from "@package/xaero/pac/common/server/player/config/api";
import { $IServerPlayerConfigGroupManagerAPI } from "@package/xaero/pac/common/server/player/config/group/api";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Enum, $Class } from "@package/java/lang";
import { $UUID_, $UUID, $List } from "@package/java/util";
import { $IPlayerConfigClientStorageAPI } from "@package/xaero/pac/client/player/config/api";

declare module "@package/xaero/pac/common/server/player/config/api/v2" {
    export class $IPlayerConfigManagerAPI {
    }
    export interface $IPlayerConfigManagerAPI {
        getServerClaimConfig(): $IPlayerConfigAPI;
        getWildernessConfig(): $IPlayerConfigAPI;
        getPartyOwnerConfig(arg0: $UUID_): $IPlayerConfigAPI;
        getLoadedConfig(arg0: $UUID_ | null): $IPlayerConfigAPI;
        getOptionForId(arg0: string): $IPlayerConfigOptionSpecAPI<never>;
        getExpiredClaimConfig(): $IPlayerConfigAPI;
        getAllOptionsStream(): $Stream<$IPlayerConfigOptionSpecAPI<never>>;
        getDefaultConfig(): $IPlayerConfigAPI;
        get serverClaimConfig(): $IPlayerConfigAPI;
        get wildernessConfig(): $IPlayerConfigAPI;
        get expiredClaimConfig(): $IPlayerConfigAPI;
        get allOptionsStream(): $Stream<$IPlayerConfigOptionSpecAPI<never>>;
        get defaultConfig(): $IPlayerConfigAPI;
    }
    export class $IPlayerConfigOptionSpecAPI<T> {
    }
    export interface $IPlayerConfigOptionSpecAPI<T> {
        getId(): string;
        getType(): $Class<T>;
        getDefaultValue(): T;
        getPath(): $List<string>;
        getComment(): string;
        isOverridable(): boolean;
        getTranslation(): string;
        getTranslationArgs(): string[];
        getServerSideValidator(): $BiPredicate<$IPlayerConfigAPI, T>;
        getCommandInputParser(): $Function<string, T>;
        isDirectlyConfigurable(): boolean;
        getConfigTypeFilter(): $Predicate<$PlayerConfigType>;
        getCommentTranslationArgs(): string[];
        getClientSideValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, T>;
        getCommentTranslation(): string;
        getTooltipPrefix(): string;
        getComponentWriter(): $Function<T, $Component>;
        getShortenedId(): string;
        get id(): string;
        get type(): $Class<T>;
        get defaultValue(): T;
        get path(): $List<string>;
        get comment(): string;
        get overridable(): boolean;
        get translation(): string;
        get translationArgs(): string[];
        get serverSideValidator(): $BiPredicate<$IPlayerConfigAPI, T>;
        get commandInputParser(): $Function<string, T>;
        get directlyConfigurable(): boolean;
        get configTypeFilter(): $Predicate<$PlayerConfigType>;
        get commentTranslationArgs(): string[];
        get clientSideValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, T>;
        get commentTranslation(): string;
        get tooltipPrefix(): string;
        get componentWriter(): $Function<T, $Component>;
        get shortenedId(): string;
    }
    export class $IPlayerConfigAPI {
    }
    export interface $IPlayerConfigAPI {
        getType(): $PlayerConfigType;
        createSubConfig(arg0: string): $IPlayerConfigAPI;
        getEffective<T>(arg0: $IPlayerConfigOptionSpecAPI<T>): T;
        getRaw<T>(arg0: $IPlayerConfigOptionSpecAPI<T>): T;
        getEffectiveSubConfig(arg0: string): $IPlayerConfigAPI;
        getEffectiveSubConfig(arg0: number): $IPlayerConfigAPI;
        tryToReset<T>(arg0: $IPlayerConfigOptionSpecAPI<T>): $IPlayerConfigAPI$SetResult;
        getPlayerGroups(): $IServerPlayerConfigGroupManagerAPI;
        getSubCount(): number;
        getSubConfigLimit(): number;
        getSubConfig(arg0: string): $IPlayerConfigAPI;
        subConfigExists(arg0: string): boolean;
        subConfigExists(arg0: number): boolean;
        getPlayerId(): $UUID;
        getUsedSubConfig(arg0: $IClaimingModeAPI_): $IPlayerConfigAPI;
        getUsedSubConfig(): $IPlayerConfigAPI;
        getSubConfigIds(): $List<string>;
        getFromEffectiveConfig<T>(arg0: $IPlayerConfigOptionSpecAPI<T>): T;
        getSubConfigAPIStream(): $Stream<$IPlayerConfigAPI>;
        /**
         * @deprecated
         */
        getUsedServerSubConfig(): $IPlayerConfigAPI;
        getSubId(): string;
        getSubIndex(): number;
        isOptionAllowed(arg0: $IPlayerConfigOptionSpecAPI<never>): boolean;
        getDefaultRawValue<T>(arg0: $IPlayerConfigOptionSpecAPI<T>): T;
        isBeingDeleted(): boolean;
        tryToSet<T>(arg0: $IPlayerConfigOptionSpecAPI<T>, arg1: T | null): $IPlayerConfigAPI$SetResult;
        get type(): $PlayerConfigType;
        get playerGroups(): $IServerPlayerConfigGroupManagerAPI;
        get subCount(): number;
        get subConfigLimit(): number;
        get playerId(): $UUID;
        get subConfigIds(): $List<string>;
        get subConfigAPIStream(): $Stream<$IPlayerConfigAPI>;
        get usedServerSubConfig(): $IPlayerConfigAPI;
        get subId(): string;
        get subIndex(): number;
        get beingDeleted(): boolean;
    }
    export class $IPlayerConfigAPI$SetResult extends $Enum<$IPlayerConfigAPI$SetResult> {
        static values(): $IPlayerConfigAPI$SetResult[];
        static valueOf(arg0: string): $IPlayerConfigAPI$SetResult;
        static SUCCESS: $IPlayerConfigAPI$SetResult;
        static ILLEGAL_OPTION: $IPlayerConfigAPI$SetResult;
        static NOT_DIRECTLY_CONFIGURABLE: $IPlayerConfigAPI$SetResult;
        static INVALID: $IPlayerConfigAPI$SetResult;
        static DEFAULTED: $IPlayerConfigAPI$SetResult;
    }
    /**
     * Values that may be interpreted as {@link $IPlayerConfigAPI$SetResult}.
     */
    export type $IPlayerConfigAPI$SetResult_ = "invalid" | "illegal_option" | "defaulted" | "success" | "not_directly_configurable";
}
