import { $Predicate, $BiPredicate, $Function } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $Component } from "@package/net/minecraft/network/chat";
import { $IPlayerConfigOptionSpecAPI as $IPlayerConfigOptionSpecAPI$1, $IPlayerConfigAPI$SetResult_ } from "@package/xaero/pac/common/server/player/config/api/v2";
import { $Comparable, $Enum, $Class } from "@package/java/lang";
import { $UUID_, $UUID, $List } from "@package/java/util";
import { $IPlayerConfigClientStorageAPI } from "@package/xaero/pac/client/player/config/api";
export * as v2 from "@package/xaero/pac/common/server/player/config/api/v2";

declare module "@package/xaero/pac/common/server/player/config/api" {
    export class $PlayerConfigType extends $Enum<$PlayerConfigType> {
        getName(): $Component;
        static values(): $PlayerConfigType[];
        static valueOf(arg0: string): $PlayerConfigType;
        isGlobal(): boolean;
        getSubClaimOption(): $IPlayerConfigOptionSpecAPI$1<string>;
        static PLAYER: $PlayerConfigType;
        static SERVER: $PlayerConfigType;
        static EXPIRED: $PlayerConfigType;
        static DEFAULT_PLAYER: $PlayerConfigType;
        static PARTY_CLAIMS: $PlayerConfigType;
        static WILDERNESS: $PlayerConfigType;
        get global(): boolean;
        get subClaimOption(): $IPlayerConfigOptionSpecAPI$1<string>;
    }
    /**
     * Values that may be interpreted as {@link $PlayerConfigType}.
     */
    export type $PlayerConfigType_ = "server" | "expired" | "wilderness" | "default_player" | "player" | "party_claims";
    /**
     * @deprecated
     */
    export class $IPlayerConfigManagerAPI {
    }
    export interface $IPlayerConfigManagerAPI {
        /**
         * @deprecated
         */
        getServerClaimConfig(): $IPlayerConfigAPI;
        /**
         * @deprecated
         */
        getWildernessConfig(): $IPlayerConfigAPI;
        /**
         * @deprecated
         */
        getLoadedConfig(arg0: $UUID_ | null): $IPlayerConfigAPI;
        /**
         * @deprecated
         */
        getOptionForId(arg0: string): $IPlayerConfigOptionSpecAPI<never>;
        /**
         * @deprecated
         */
        getExpiredClaimConfig(): $IPlayerConfigAPI;
        /**
         * @deprecated
         */
        getAllOptionsStream(): $Stream<$IPlayerConfigOptionSpecAPI<never>>;
        /**
         * @deprecated
         */
        getDefaultConfig(): $IPlayerConfigAPI;
        get serverClaimConfig(): $IPlayerConfigAPI;
        get wildernessConfig(): $IPlayerConfigAPI;
        get expiredClaimConfig(): $IPlayerConfigAPI;
        get allOptionsStream(): $Stream<$IPlayerConfigOptionSpecAPI<never>>;
        get defaultConfig(): $IPlayerConfigAPI;
    }
    /**
     * @deprecated
     */
    export class $IPlayerConfigOptionSpecAPI<T extends $Comparable<T>> {
    }
    export interface $IPlayerConfigOptionSpecAPI<T extends $Comparable<T>> {
        /**
         * @deprecated
         */
        getId(): string;
        /**
         * @deprecated
         */
        getType(): $Class<T>;
        /**
         * @deprecated
         */
        getDefaultValue(): T;
        /**
         * @deprecated
         */
        getPath(): $List<string>;
        /**
         * @deprecated
         */
        getComment(): string;
        /**
         * @deprecated
         */
        getTranslation(): string;
        /**
         * @deprecated
         */
        getCommandOutputWriter(): $Function<T, $Component>;
        /**
         * @deprecated
         */
        getTranslationArgs(): string[];
        /**
         * @deprecated
         */
        getServerSideValidator(): $BiPredicate<$IPlayerConfigAPI, T>;
        /**
         * @deprecated
         */
        getCommandInputParser(): $Function<string, T>;
        /**
         * @deprecated
         */
        getConfigTypeFilter(): $Predicate<$PlayerConfigType>;
        /**
         * @deprecated
         */
        getCommentTranslationArgs(): string[];
        /**
         * @deprecated
         */
        getClientSideValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, T>;
        /**
         * @deprecated
         */
        getCommentTranslation(): string;
        /**
         * @deprecated
         */
        getTooltipPrefix(): string;
        /**
         * @deprecated
         */
        getShortenedId(): string;
        get id(): string;
        get type(): $Class<T>;
        get defaultValue(): T;
        get path(): $List<string>;
        get comment(): string;
        get translation(): string;
        get commandOutputWriter(): $Function<T, $Component>;
        get translationArgs(): string[];
        get serverSideValidator(): $BiPredicate<$IPlayerConfigAPI, T>;
        get commandInputParser(): $Function<string, T>;
        get configTypeFilter(): $Predicate<$PlayerConfigType>;
        get commentTranslationArgs(): string[];
        get clientSideValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, T>;
        get commentTranslation(): string;
        get tooltipPrefix(): string;
        get shortenedId(): string;
    }
    /**
     * @deprecated
     */
    export class $IPlayerConfigAPI {
    }
    export interface $IPlayerConfigAPI {
        /**
         * @deprecated
         */
        getType(): $PlayerConfigType;
        /**
         * @deprecated
         */
        createSubConfig(arg0: string): $IPlayerConfigAPI;
        /**
         * @deprecated
         */
        getEffective<T extends $Comparable<T>>(arg0: $IPlayerConfigOptionSpecAPI<T>): T;
        /**
         * @deprecated
         */
        getRaw<T extends $Comparable<T>>(arg0: $IPlayerConfigOptionSpecAPI<T>): T;
        /**
         * @deprecated
         */
        getEffectiveSubConfig(arg0: string): $IPlayerConfigAPI;
        /**
         * @deprecated
         */
        getEffectiveSubConfig(arg0: number): $IPlayerConfigAPI;
        /**
         * @deprecated
         */
        tryToReset<T extends $Comparable<T>>(arg0: $IPlayerConfigOptionSpecAPI<T>): $IPlayerConfigAPI$SetResult;
        /**
         * @deprecated
         */
        getSubCount(): number;
        /**
         * @deprecated
         */
        getSubConfigLimit(): number;
        /**
         * @deprecated
         */
        getSubConfig(arg0: string): $IPlayerConfigAPI;
        /**
         * @deprecated
         */
        subConfigExists(arg0: number): boolean;
        /**
         * @deprecated
         */
        subConfigExists(arg0: string): boolean;
        /**
         * @deprecated
         */
        getPlayerId(): $UUID;
        /**
         * @deprecated
         */
        getUsedSubConfig(): $IPlayerConfigAPI;
        /**
         * @deprecated
         */
        getSubConfigIds(): $List<string>;
        /**
         * @deprecated
         */
        getFromEffectiveConfig<T extends $Comparable<T>>(arg0: $IPlayerConfigOptionSpecAPI<T>): T;
        /**
         * @deprecated
         */
        getSubConfigAPIStream(): $Stream<$IPlayerConfigAPI>;
        /**
         * @deprecated
         */
        getUsedServerSubConfig(): $IPlayerConfigAPI;
        /**
         * @deprecated
         */
        getSubId(): string;
        /**
         * @deprecated
         */
        getSubIndex(): number;
        /**
         * @deprecated
         */
        isOptionAllowed(arg0: $IPlayerConfigOptionSpecAPI<never>): boolean;
        /**
         * @deprecated
         */
        getDefaultRawValue<T extends $Comparable<T>>(arg0: $IPlayerConfigOptionSpecAPI<T>): T;
        /**
         * @deprecated
         */
        isBeingDeleted(): boolean;
        /**
         * @deprecated
         */
        tryToSet<T extends $Comparable<T>>(arg0: $IPlayerConfigOptionSpecAPI<T>, arg1: T | null): $IPlayerConfigAPI$SetResult;
        get type(): $PlayerConfigType;
        get subCount(): number;
        get subConfigLimit(): number;
        get playerId(): $UUID;
        get usedSubConfig(): $IPlayerConfigAPI;
        get subConfigIds(): $List<string>;
        get subConfigAPIStream(): $Stream<$IPlayerConfigAPI>;
        get usedServerSubConfig(): $IPlayerConfigAPI;
        get subId(): string;
        get subIndex(): number;
        get beingDeleted(): boolean;
    }
    /**
     * @deprecated
     */
    export class $IPlayerConfigAPI$SetResult extends $Enum<$IPlayerConfigAPI$SetResult> {
        static values(): $IPlayerConfigAPI$SetResult[];
        static valueOf(arg0: string): $IPlayerConfigAPI$SetResult;
        static fromReal(arg0: $IPlayerConfigAPI$SetResult_): $IPlayerConfigAPI$SetResult;
        static SUCCESS: $IPlayerConfigAPI$SetResult;
        static ILLEGAL_OPTION: $IPlayerConfigAPI$SetResult;
        static INVALID: $IPlayerConfigAPI$SetResult;
        static DEFAULTED: $IPlayerConfigAPI$SetResult;
    }
    /**
     * Values that may be interpreted as {@link $IPlayerConfigAPI$SetResult}.
     */
    export type $IPlayerConfigAPI$SetResult_ = "invalid" | "illegal_option" | "defaulted" | "success";
}
