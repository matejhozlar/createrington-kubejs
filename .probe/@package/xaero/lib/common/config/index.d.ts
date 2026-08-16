import { $IConfigChangeListener } from "@package/xaero/lib/common/config/listener";
import { $ConfigOption } from "@package/xaero/lib/common/config/option";
import { $Iterable } from "@package/java/lang";
export * as option from "@package/xaero/lib/common/config/option";
export * as single from "@package/xaero/lib/common/config/single";
export * as channel from "@package/xaero/lib/common/config/channel";
export * as listener from "@package/xaero/lib/common/config/listener";
export * as server from "@package/xaero/lib/common/config/server";
export * as profile from "@package/xaero/lib/common/config/profile";
export * as sync from "@package/xaero/lib/common/config/sync";

declare module "@package/xaero/lib/common/config" {
    export class $Config {
        reset(): void;
        get<T>(arg0: $ConfigOption<T>): T;
        set<T>(arg0: $ConfigOption<T>, arg1: T): T;
        isAllowNullValues(): boolean;
        copyOptionsFrom(arg0: $Config): void;
        getDirtyOptions(): $Iterable<$ConfigOption<never>>;
        clearDirtyOptions(): void;
        setChangeListener(arg0: $IConfigChangeListener): void;
        copyOptionFrom<T>(arg0: $ConfigOption<T>, arg1: $Config): void;
        setOptionDefault<T>(arg0: $ConfigOption<T>): void;
        getChangeCount(): number;
        setDefaults(): void;
        getChangeListener(): $IConfigChangeListener;
        usedOptions(): $Iterable<$ConfigOption<never>>;
        postSave(): void;
        getFailedSerializedValue(arg0: $ConfigOption<never>): string;
        getRemovedLargeOptions(): $Iterable<$ConfigOption<never>>;
        addFailedSerializedValue<T>(arg0: $ConfigOption<T>, arg1: string): void;
        get allowNullValues(): boolean;
        get dirtyOptions(): $Iterable<$ConfigOption<never>>;
        set optionDefault(value: $ConfigOption<T>);
        get changeCount(): number;
        get removedLargeOptions(): $Iterable<$ConfigOption<never>>;
    }
}
