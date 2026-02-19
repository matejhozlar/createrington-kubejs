declare module "net.neoforged.neoforge.attachment.AttachmentHolder" {
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$AttachmentSyncPayloadS2C$$Type} from "net.fabricmc.fabric.impl.attachment.sync.s2c.AttachmentSyncPayloadS2C"
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$AttachmentType$$Type as $AttachmentType$0$$Type} from "net.neoforged.neoforge.attachment.AttachmentType"
import {$Map} from "java.util.Map"
import {$Optional} from "java.util.Optional"
import {$AttachmentChange$$Type} from "net.fabricmc.fabric.impl.attachment.sync.AttachmentChange"
import {$AttachmentHolderAccessor$$Interface} from "net.fabricmc.fabric.mixin.attachment.AttachmentHolderAccessor"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$AttachmentType$$Type} from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import {$IAttachmentHolder$$Interface} from "net.neoforged.neoforge.attachment.IAttachmentHolder"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$RegistryAccess} from "net.minecraft.core.RegistryAccess"
import {$AttachmentTargetInfo} from "net.fabricmc.fabric.impl.attachment.sync.AttachmentTargetInfo"

export class $AttachmentHolder implements $IAttachmentHolder$$Interface, $AttachmentHolderAccessor$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor()

public "hasData"(arg0: $AttachmentType$0$$Type<(never)>): boolean
public "getData"<T>(arg0: $AttachmentType$0$$Type<(T)>): T
public "serializeAttachments"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "getExistingDataOrNull"<T>(arg0: $AttachmentType$0$$Type<(T)>): T
public "invokeGetAttachmentMap"(): $Map
public "removeData"<T>(arg0: $AttachmentType$0$$Type<(T)>): T
public "hasAttachments"(): boolean
public "setData"<T>(arg0: $AttachmentType$0$$Type<(T)>, arg1: T): T
public "syncData"(arg0: $Supplier$$Type<($AttachmentType$0$$Type<(never)>)>): void
public "syncData"(arg0: $AttachmentType$0$$Type<(never)>): void
public "hasData"<T>(arg0: $Supplier$$Type<($AttachmentType$0$$Type<(T)>)>): boolean
public "getData"<T>(arg0: $Supplier$$Type<($AttachmentType$0$$Type<(T)>)>): T
public "getExistingDataOrNull"<T>(arg0: $Supplier$$Type<($AttachmentType$0$$Type<(T)>)>): T
public "removeData"<T>(arg0: $Supplier$$Type<($AttachmentType$0$$Type<(T)>)>): T
public "getExistingData"<T>(arg0: $AttachmentType$0$$Type<(T)>): $Optional<(T)>
public "getExistingData"<T>(arg0: $Supplier$$Type<($AttachmentType$0$$Type<(T)>)>): $Optional<(T)>
public "setData"<T>(arg0: $Supplier$$Type<($AttachmentType$0$$Type<(T)>)>, arg1: T): T
public "acknowledgeSyncedEntry"(arg0: $AttachmentType$$Type<(never)>, arg1: $AttachmentChange$$Type): void
public "fabric_getSyncTargetInfo"(): $AttachmentTargetInfo<(never)>
public "fabric_shouldTryToSync"(): boolean
public "fabric_syncChange"(arg0: $AttachmentType$$Type<(never)>, arg1: $AttachmentSyncPayloadS2C$$Type): void
public "setAttached"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: A): A
public "fabric_getDynamicRegistryManager"(): $RegistryAccess
public "fabric_computeInitialSyncChanges"(arg0: $ServerPlayer$$Type, arg1: $Consumer$$Type<($AttachmentChange)>): void
public "getAttachedOrCreate"<A>(arg0: $AttachmentType$$Type<(A)>): A
public "getAttachedOrCreate"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: $Supplier$$Type<(A)>): A
public "getAttachedOrThrow"<A>(arg0: $AttachmentType$$Type<(A)>): A
public "modifyAttached"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: $UnaryOperator$$Type<(A)>): A
public "getAttachedOrElse"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: A): A
public "getAttachedOrSet"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: A): A
public "getAttached"<A>(arg0: $AttachmentType$$Type<(A)>): A
public "hasAttached"(arg0: $AttachmentType$$Type<(never)>): boolean
public "getAttachedOrGet"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: $Supplier$$Type<(A)>): A
public "removeAttached"<A>(arg0: $AttachmentType$$Type<(A)>): A
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentHolder$$Type = ($AttachmentHolder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AttachmentHolder$$Original = $AttachmentHolder;}
declare module "net.neoforged.neoforge.attachment.AttachmentHolder$AsField" {
import {$AttachmentType$$Type} from "net.neoforged.neoforge.attachment.AttachmentType"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IAttachmentHolder$$Type} from "net.neoforged.neoforge.attachment.IAttachmentHolder"
import {$AttachmentHolder} from "net.neoforged.neoforge.attachment.AttachmentHolder"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $AttachmentHolder$AsField extends $AttachmentHolder {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $IAttachmentHolder$$Type)

public "syncData"(arg0: $AttachmentType$$Type<(never)>): void
public "deserializeInternal"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentHolder$AsField$$Type = ($AttachmentHolder$AsField);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AttachmentHolder$AsField$$Original = $AttachmentHolder$AsField;}
declare module "net.neoforged.neoforge.attachment.IAttachmentSerializer" {
import {$IAttachmentHolder$$Type} from "net.neoforged.neoforge.attachment.IAttachmentHolder"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IAttachmentSerializer$$Interface<S extends $Tag, T> {
}

export class $IAttachmentSerializer<S extends $Tag, T> implements $IAttachmentSerializer$$Interface {
 "write"(arg0: T, arg1: $HolderLookup$Provider$$Type): S
 "read"(arg0: $IAttachmentHolder$$Type, arg1: S, arg2: $HolderLookup$Provider$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAttachmentSerializer$$Type<S, T> = ($IAttachmentSerializer<(S), (T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IAttachmentSerializer$$Original<S, T> = $IAttachmentSerializer<(S), (T)>;}
declare module "net.neoforged.neoforge.attachment.AttachmentType$Builder" {
import {$StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$IAttachmentCopyHandler$$Type} from "net.neoforged.neoforge.attachment.IAttachmentCopyHandler"
import {$BiPredicate$$Type} from "java.util.function.BiPredicate"
import {$AttachmentType} from "net.neoforged.neoforge.attachment.AttachmentType"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$IAttachmentSerializer$$Type} from "net.neoforged.neoforge.attachment.IAttachmentSerializer"
import {$IAttachmentHolder$$Type} from "net.neoforged.neoforge.attachment.IAttachmentHolder"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$AttachmentSyncHandler$$Type} from "net.neoforged.neoforge.attachment.AttachmentSyncHandler"

export class $AttachmentType$Builder<T> {
public "build"(): $AttachmentType<(T)>
public "sync"(arg0: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>): $AttachmentType$Builder<(T)>
public "sync"(arg0: $AttachmentSyncHandler$$Type<(T)>): $AttachmentType$Builder<(T)>
public "sync"(arg0: $BiPredicate$$Type<($IAttachmentHolder), ($ServerPlayer)>, arg1: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>): $AttachmentType$Builder<(T)>
public "copyOnDeath"(): $AttachmentType$Builder<(T)>
public "serialize"(arg0: $IAttachmentSerializer$$Type<(never), (T)>): $AttachmentType$Builder<(T)>
public "serialize"(arg0: $Codec$$Type<(T)>): $AttachmentType$Builder<(T)>
public "serialize"(arg0: $Codec$$Type<(T)>, arg1: $Predicate$$Type<(T)>): $AttachmentType$Builder<(T)>
public "copyHandler"(arg0: $IAttachmentCopyHandler$$Type<(T)>): $AttachmentType$Builder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentType$Builder$$Type<T> = ($AttachmentType$Builder<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AttachmentType$Builder$$Original<T> = $AttachmentType$Builder<(T)>;}
declare module "net.neoforged.neoforge.attachment.AttachmentType" {
import {$IAttachmentSerializer} from "net.neoforged.neoforge.attachment.IAttachmentSerializer"
import {$IAttachmentHolder$$Type} from "net.neoforged.neoforge.attachment.IAttachmentHolder"
import {$Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$INBTSerializable} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$AttachmentType$Builder} from "net.neoforged.neoforge.attachment.AttachmentType$Builder"
import {$AttachmentTypeAccessor$$Interface} from "net.fabricmc.fabric.mixin.attachment.AttachmentTypeAccessor"

export class $AttachmentType<T> implements $AttachmentTypeAccessor$$Interface {
public "getSerializer"(): $IAttachmentSerializer
public static "builder"<T>(arg0: $Supplier$$Type<(T)>): $AttachmentType$Builder<(T)>
public static "builder"<T>(arg0: $Function$$Type<($IAttachmentHolder), (T)>): $AttachmentType$Builder<(T)>
public static "serializable"<S extends $Tag, T extends $INBTSerializable<(object)>>(arg0: $Function$$Type<($IAttachmentHolder), (T)>): $AttachmentType$Builder<(T)>
public static "serializable"<S extends $Tag, T extends $INBTSerializable<(object)>>(arg0: $Supplier$$Type<(T)>): $AttachmentType$Builder<(T)>
get "serializer"(): $IAttachmentSerializer
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.NeoforgeAttachmentTypes
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.NeoforgeAttachmentTypesTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentType$$Type<T> = (Special.NeoforgeAttachmentTypes);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AttachmentType$$Original<T> = $AttachmentType<(T)>;}
declare module "net.neoforged.neoforge.attachment.IAttachmentCopyHandler" {
import {$IAttachmentHolder, $IAttachmentHolder$$Type} from "net.neoforged.neoforge.attachment.IAttachmentHolder"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IAttachmentCopyHandler$$Interface<T> {

(arg0: T, arg1: $IAttachmentHolder, arg2: $HolderLookup$Provider): T
}

export class $IAttachmentCopyHandler<T> implements $IAttachmentCopyHandler$$Interface {
 "copy"(arg0: T, arg1: $IAttachmentHolder$$Type, arg2: $HolderLookup$Provider$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAttachmentCopyHandler$$Type<T> = ((arg0: T, arg1: $IAttachmentHolder, arg2: $HolderLookup$Provider) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IAttachmentCopyHandler$$Original<T> = $IAttachmentCopyHandler<(T)>;}
declare module "net.neoforged.neoforge.attachment.AttachmentSyncHandler" {
import {$IAttachmentHolder$$Type} from "net.neoforged.neoforge.attachment.IAttachmentHolder"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export interface $AttachmentSyncHandler$$Interface<T> {
}

export class $AttachmentSyncHandler<T> implements $AttachmentSyncHandler$$Interface {
 "write"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: T, arg2: boolean): void
 "read"(arg0: $IAttachmentHolder$$Type, arg1: $RegistryFriendlyByteBuf$$Type, arg2: T): T
 "sendToPlayer"(arg0: $IAttachmentHolder$$Type, arg1: $ServerPlayer$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentSyncHandler$$Type<T> = ($AttachmentSyncHandler<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AttachmentSyncHandler$$Original<T> = $AttachmentSyncHandler<(T)>;}
declare module "net.neoforged.neoforge.attachment.IAttachmentHolder" {
import {$AttachmentTargetImpl$$Interface} from "net.fabricmc.fabric.impl.attachment.AttachmentTargetImpl"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$AttachmentSyncPayloadS2C$$Type} from "net.fabricmc.fabric.impl.attachment.sync.s2c.AttachmentSyncPayloadS2C"
import {$AttachmentType$$Type as $AttachmentType$0$$Type} from "net.neoforged.neoforge.attachment.AttachmentType"
import {$Optional} from "java.util.Optional"
import {$AttachmentChange$$Type} from "net.fabricmc.fabric.impl.attachment.sync.AttachmentChange"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$AttachmentType$$Type} from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$IAttachmentHolderMixin$$Interface} from "net.fabricmc.fabric.mixin.attachment.IAttachmentHolderMixin"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$RegistryAccess} from "net.minecraft.core.RegistryAccess"
import {$AttachmentTargetInfo} from "net.fabricmc.fabric.impl.attachment.sync.AttachmentTargetInfo"

export interface $IAttachmentHolder$$Interface extends $AttachmentTargetImpl$$Interface, $IAttachmentHolderMixin$$Interface {
}

export class $IAttachmentHolder implements $IAttachmentHolder$$Interface {
 "syncData"(arg0: $Supplier$$Type<($AttachmentType$0$$Type<(never)>)>): void
 "syncData"(arg0: $AttachmentType$0$$Type<(never)>): void
 "hasData"<T>(arg0: $Supplier$$Type<($AttachmentType$0$$Type<(T)>)>): boolean
 "hasData"(arg0: $AttachmentType$0$$Type<(never)>): boolean
 "getData"<T>(arg0: $Supplier$$Type<($AttachmentType$0$$Type<(T)>)>): T
 "getData"<T>(arg0: $AttachmentType$0$$Type<(T)>): T
 "getExistingDataOrNull"<T>(arg0: $Supplier$$Type<($AttachmentType$0$$Type<(T)>)>): T
 "getExistingDataOrNull"<T>(arg0: $AttachmentType$0$$Type<(T)>): T
 "removeData"<T>(arg0: $Supplier$$Type<($AttachmentType$0$$Type<(T)>)>): T
 "removeData"<T>(arg0: $AttachmentType$0$$Type<(T)>): T
 "getExistingData"<T>(arg0: $AttachmentType$0$$Type<(T)>): $Optional<(T)>
 "getExistingData"<T>(arg0: $Supplier$$Type<($AttachmentType$0$$Type<(T)>)>): $Optional<(T)>
 "hasAttachments"(): boolean
 "setData"<T>(arg0: $AttachmentType$0$$Type<(T)>, arg1: T): T
 "setData"<T>(arg0: $Supplier$$Type<($AttachmentType$0$$Type<(T)>)>, arg1: T): T
 "acknowledgeSyncedEntry"(arg0: $AttachmentType$$Type<(never)>, arg1: $AttachmentChange$$Type): void
 "fabric_getSyncTargetInfo"(): $AttachmentTargetInfo<(never)>
 "fabric_shouldTryToSync"(): boolean
 "fabric_syncChange"(arg0: $AttachmentType$$Type<(never)>, arg1: $AttachmentSyncPayloadS2C$$Type): void
 "setAttached"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: A): A
 "fabric_getDynamicRegistryManager"(): $RegistryAccess
 "fabric_computeInitialSyncChanges"(arg0: $ServerPlayer$$Type, arg1: $Consumer$$Type<($AttachmentChange)>): void
 "getAttachedOrCreate"<A>(arg0: $AttachmentType$$Type<(A)>): A
 "getAttachedOrCreate"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: $Supplier$$Type<(A)>): A
 "getAttachedOrThrow"<A>(arg0: $AttachmentType$$Type<(A)>): A
 "modifyAttached"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: $UnaryOperator$$Type<(A)>): A
 "getAttachedOrElse"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: A): A
 "getAttachedOrSet"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: A): A
 "getAttached"<A>(arg0: $AttachmentType$$Type<(A)>): A
 "hasAttached"(arg0: $AttachmentType$$Type<(never)>): boolean
 "getAttachedOrGet"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: $Supplier$$Type<(A)>): A
 "removeAttached"<A>(arg0: $AttachmentType$$Type<(A)>): A
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAttachmentHolder$$Type = ($IAttachmentHolder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IAttachmentHolder$$Original = $IAttachmentHolder;}
