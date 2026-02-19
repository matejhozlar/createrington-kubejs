declare module "net.minecraft.network.syncher.SynchedEntityData$DataValue" {
import {$EntityDataSerializer, $EntityDataSerializer$$Type} from "net.minecraft.network.syncher.EntityDataSerializer"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$EntityDataAccessor$$Type} from "net.minecraft.network.syncher.EntityDataAccessor"
import {$Record} from "java.lang.Record"

export class $SynchedEntityData$DataValue<T> extends $Record {
constructor(id: integer, serializer: $EntityDataSerializer$$Type<(T)>, value: T)

public "value"(): T
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): integer
public "write"(arg0: $RegistryFriendlyByteBuf$$Type): void
public static "read"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: integer): $SynchedEntityData$DataValue<(never)>
public static "create"<T>(arg0: $EntityDataAccessor$$Type<(T)>, arg1: T): $SynchedEntityData$DataValue<(T)>
public "serializer"(): $EntityDataSerializer<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SynchedEntityData$DataValue$$Type<T> = ({"serializer"?: $EntityDataSerializer$$Type<(T)>, "id"?: integer, "value"?: T}) | ([serializer?: $EntityDataSerializer$$Type<(T)>, id?: integer, value?: T]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SynchedEntityData$DataValue$$Original<T> = $SynchedEntityData$DataValue<(T)>;}
declare module "net.minecraft.network.syncher.SynchedEntityData" {
import {$SynchedEntityData$DataValue, $SynchedEntityData$DataValue$$Type} from "net.minecraft.network.syncher.SynchedEntityData$DataValue"
import {$EntityDataSerializer$$Type} from "net.minecraft.network.syncher.EntityDataSerializer"
import {$List, $List$$Type} from "java.util.List"
import {$EntityDataAccessor, $EntityDataAccessor$$Type} from "net.minecraft.network.syncher.EntityDataAccessor"
import {$SyncedDataHolder$$Type} from "net.minecraft.network.syncher.SyncedDataHolder"
import {$Class$$Type} from "java.lang.Class"

export class $SynchedEntityData {
public static "defineId"<T>(arg0: $Class$$Type<($SyncedDataHolder$$Type)>, arg1: $EntityDataSerializer$$Type<(T)>): $EntityDataAccessor<(T)>
public "get"<T>(arg0: $EntityDataAccessor$$Type<(T)>): T
public "set"<T>(arg0: $EntityDataAccessor$$Type<(T)>, arg1: T, arg2: boolean): void
public "set"<T>(arg0: $EntityDataAccessor$$Type<(T)>, arg1: T): void
public "isDirty"(): boolean
public "getNonDefaultValues"(): $List<($SynchedEntityData$DataValue<(never)>)>
public "assignValues"(arg0: $List$$Type<($SynchedEntityData$DataValue$$Type<(never)>)>): void
public "packDirty"(): $List<($SynchedEntityData$DataValue<(never)>)>
get "dirty"(): boolean
get "nonDefaultValues"(): $List<($SynchedEntityData$DataValue<(never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SynchedEntityData$$Type = ($SynchedEntityData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SynchedEntityData$$Original = $SynchedEntityData;}
declare module "net.minecraft.network.syncher.SyncedDataHolder" {
import {$SynchedEntityData$DataValue$$Type} from "net.minecraft.network.syncher.SynchedEntityData$DataValue"
import {$List$$Type} from "java.util.List"
import {$EntityDataAccessor$$Type} from "net.minecraft.network.syncher.EntityDataAccessor"

export interface $SyncedDataHolder$$Interface {
}

export class $SyncedDataHolder implements $SyncedDataHolder$$Interface {
 "onSyncedDataUpdated"(arg0: $EntityDataAccessor$$Type<(never)>): void
 "onSyncedDataUpdated"(arg0: $List$$Type<($SynchedEntityData$DataValue$$Type<(never)>)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncedDataHolder$$Type = ($SyncedDataHolder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SyncedDataHolder$$Original = $SyncedDataHolder;}
declare module "net.minecraft.network.syncher.EntityDataAccessor" {
import {$EntityDataSerializer, $EntityDataSerializer$$Type} from "net.minecraft.network.syncher.EntityDataSerializer"
import {$Record} from "java.lang.Record"

export class $EntityDataAccessor<T> extends $Record {
constructor(arg0: integer, arg1: $EntityDataSerializer$$Type<(T)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): integer
public "serializer"(): $EntityDataSerializer<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityDataAccessor$$Type<T> = ({"serializer"?: $EntityDataSerializer$$Type<(T)>, "id"?: integer}) | ([serializer?: $EntityDataSerializer$$Type<(T)>, id?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityDataAccessor$$Original<T> = $EntityDataAccessor<(T)>;}
declare module "net.minecraft.network.syncher.EntityDataSerializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$EntityDataAccessor} from "net.minecraft.network.syncher.EntityDataAccessor"

export interface $EntityDataSerializer$$Interface<T> {
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.NeoforgeEntityDataSerializers
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.NeoforgeEntityDataSerializersTag
}

export class $EntityDataSerializer<T> implements $EntityDataSerializer$$Interface {
 "copy"(arg0: T): T
 "codec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
static "forValueType"<T>(arg0: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>): $EntityDataSerializer<(T)>
 "createAccessor"(arg0: integer): $EntityDataAccessor<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityDataSerializer$$Type<T> = (Special.NeoforgeEntityDataSerializers);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityDataSerializer$$Original<T> = $EntityDataSerializer<(T)>;}
