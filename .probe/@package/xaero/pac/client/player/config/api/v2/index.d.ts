import { $BiPredicate, $Function } from "@package/java/util/function";
import { $Component } from "@package/net/minecraft/network/chat";
import { $IPlayerConfigOptionSpecAPI } from "@package/xaero/pac/common/server/player/config/api/v2";
import { $Object, $Class } from "@package/java/lang";
import { $IPlayerConfigClientStorageAPI } from "@package/xaero/pac/client/player/config/api";

declare module "@package/xaero/pac/client/player/config/api/v2" {
    export class $IPlayerConfigStringableOptionClientStorageAPI<T> {
    }
    export interface $IPlayerConfigStringableOptionClientStorageAPI<T> extends $IPlayerConfigOptionClientStorageAPI<T> {
        getValue(): T;
        getId(): string;
        getType(): $Class<T>;
        getComment(): string;
        getOption(): $IPlayerConfigOptionSpecAPI<T>;
        getValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, T>;
        getComponentWriterCast(): $Function<$Object, $Component>;
        getTranslation(): string;
        isMutable(): boolean;
        getStringValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, string>;
        isDefaulted(): boolean;
        getCommandInputParser(): $Function<string, T>;
        getTooltipPrefix(): string;
        get value(): T;
        get id(): string;
        get type(): $Class<T>;
        get comment(): string;
        get option(): $IPlayerConfigOptionSpecAPI<T>;
        get validator(): $BiPredicate<$IPlayerConfigClientStorageAPI, T>;
        get componentWriterCast(): $Function<$Object, $Component>;
        get translation(): string;
        get mutable(): boolean;
        get stringValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, string>;
        get defaulted(): boolean;
        get commandInputParser(): $Function<string, T>;
        get tooltipPrefix(): string;
    }
}
