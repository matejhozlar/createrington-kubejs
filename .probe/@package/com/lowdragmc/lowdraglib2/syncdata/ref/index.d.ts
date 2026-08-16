import { $IAccessor } from "@package/com/lowdragmc/lowdraglib2/syncdata/accessor";
import { $Predicate_ } from "@package/java/util/function";
import { $DynamicOps } from "@package/com/mojang/serialization";
import { $ManagedKey } from "@package/com/lowdragmc/lowdraglib2/syncdata/field";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $BooleanConsumer_ } from "@package/it/unimi/dsi/fastutil/booleans";

declare module "@package/com/lowdragmc/lowdraglib2/syncdata/ref" {
    export class $IRef<TYPE> {
    }
    export interface $IRef<TYPE> {
        update(): void;
        getKey(): $ManagedKey;
        getAccessor(): $IAccessor<TYPE>;
        writeSyncFromStream(arg0: $RegistryFriendlyByteBuf): void;
        writeRaw(arg0: TYPE): void;
        readRaw(): TYPE;
        isPersistedDirty(): boolean;
        writeInitialSync<T>(arg0: $DynamicOps<T>, arg1: T): void;
        readPersisted<T>(arg0: $DynamicOps<T>): T;
        setOnSyncListener(arg0: $BooleanConsumer_): void;
        writePersisted<T>(arg0: $DynamicOps<T>, arg1: T): void;
        isSyncDirty(): boolean;
        readInitialSync<T>(arg0: $DynamicOps<T>): T;
        clearSyncDirty(): void;
        markAsDirty(): void;
        getPersistedKey(): string;
        readSyncToStream(arg0: $RegistryFriendlyByteBuf): void;
        setPersistedPrefixName(arg0: string): void;
        setConditionalSynced(arg0: $Predicate_<TYPE>): void;
        getPersistedPrefixName(): string;
        clearPersistedDirty(): void;
        setOnPersistedListener(arg0: $BooleanConsumer_): void;
        get key(): $ManagedKey;
        get accessor(): $IAccessor<TYPE>;
        get persistedDirty(): boolean;
        set onSyncListener(value: $BooleanConsumer_);
        get syncDirty(): boolean;
        get persistedKey(): string;
        set conditionalSynced(value: $Predicate_<TYPE>);
        set onPersistedListener(value: $BooleanConsumer_);
    }
}
