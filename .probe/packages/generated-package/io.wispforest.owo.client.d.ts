declare module "io.wispforest.owo.client.screens.OwoScreenHandler" {
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$Endec$$Type} from "io.wispforest.endec.Endec"
import {$ReflectiveEndecBuilder} from "io.wispforest.endec.impl.ReflectiveEndecBuilder"
import {$SyncedProperty} from "io.wispforest.owo.client.screens.SyncedProperty"
import {$Class$$Type} from "java.lang.Class"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Record, $Record$$Type} from "java.lang.Record"

export interface $OwoScreenHandler$$Interface {
}

export class $OwoScreenHandler implements $OwoScreenHandler$$Interface {
 "player"(): $Player
 "addClientboundMessage"<R extends $Record>(messageClass: $Class$$Type<(R)>, endec: $Endec$$Type<(R)>, handler: $Consumer$$Type<(R)>): void
 "addClientboundMessage"<R extends $Record>(messageClass: $Class$$Type<(R)>, handler: $Consumer$$Type<(R)>): void
 "addServerboundMessage"<R extends $Record>(messageClass: $Class$$Type<(R)>, handler: $Consumer$$Type<(R)>): void
 "addServerboundMessage"<R extends $Record>(messageClass: $Class$$Type<(R)>, endec: $Endec$$Type<(R)>, handler: $Consumer$$Type<(R)>): void
 "createProperty"<T>(clazz: $Class$$Type<(T)>, endec: $Endec$$Type<(T)>, initial: T): $SyncedProperty<(T)>
 "createProperty"<T>(clazz: $Class$$Type<(T)>, initial: T): $SyncedProperty<(T)>
 "endecBuilder"(): $ReflectiveEndecBuilder
 "sendMessage"<R extends $Record>(message: R): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwoScreenHandler$$Type = ($OwoScreenHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OwoScreenHandler$$Original = $OwoScreenHandler;}
declare module "io.wispforest.owo.client.screens.ScreenInternals$LocalPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Endec} from "io.wispforest.endec.Endec"
import {$PacketFlow$$Type} from "net.minecraft.network.protocol.PacketFlow"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$List$$Type} from "java.util.List"
import {$CustomPacketPayload$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$CustomPacketPayload, $CustomPacketPayload$$Interface} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ServerboundCustomPayloadPacket} from "net.minecraft.network.protocol.common.ServerboundCustomPayloadPacket"
import {$ClientboundCustomPayloadPacket} from "net.minecraft.network.protocol.common.ClientboundCustomPayloadPacket"
import {$ConnectionProtocol$$Type} from "net.minecraft.network.ConnectionProtocol"
import {$CustomPacketPayload$TypeAndCodec$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$TypeAndCodec"
import {$CustomPacketPayload$FallbackProvider$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$FallbackProvider"
import {$Record} from "java.lang.Record"

export class $ScreenInternals$LocalPacket extends $Record implements $CustomPacketPayload$$Interface {
static readonly "ENDEC": $Endec<($ScreenInternals$LocalPacket)>
static readonly "ID": $CustomPacketPayload$Type<($ScreenInternals$LocalPacket)>

constructor(packetId: integer, payload: $FriendlyByteBuf$$Type)

public "payload"(): $FriendlyByteBuf
public "type"(): $CustomPacketPayload$Type<($CustomPacketPayload)>
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "packetId"(): integer
public static "codec"<B extends $FriendlyByteBuf>(arg0: $CustomPacketPayload$FallbackProvider$$Type<(B)>, arg1: $List$$Type<($CustomPacketPayload$TypeAndCodec$$Type<(B), (never)>)>, arg2: $ConnectionProtocol$$Type, arg3: $PacketFlow$$Type): $StreamCodec<(B), ($CustomPacketPayload)>
public static "codec"<B extends $ByteBuf, T extends $CustomPacketPayload>(arg0: $StreamMemberEncoder$$Type<(B), (T)>, arg1: $StreamDecoder$$Type<(B), (T)>): $StreamCodec<(B), (T)>
public "toVanillaClientbound"(): $ClientboundCustomPayloadPacket
public "toVanillaServerbound"(): $ServerboundCustomPayloadPacket
public static "createType"<T extends $CustomPacketPayload>(arg0: StringJS): $CustomPacketPayload$Type<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenInternals$LocalPacket$$Type = ({"packetId"?: integer, "payload"?: $FriendlyByteBuf$$Type}) | ([packetId?: integer, payload?: $FriendlyByteBuf$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenInternals$LocalPacket$$Original = $ScreenInternals$LocalPacket;}
declare module "io.wispforest.owo.client.screens.SyncedProperty" {
import {$Endec$$Type} from "io.wispforest.endec.Endec"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$Observable} from "io.wispforest.owo.util.Observable"

export class $SyncedProperty<T> extends $Observable<(T)> {
constructor(index: integer, endec: $Endec$$Type<(T)>, initial: T, owner: $AbstractContainerMenu$$Type)

public "index"(): integer
public "write"(buf: $FriendlyByteBuf$$Type): void
public "read"(buf: $FriendlyByteBuf$$Type): void
public "needsSync"(): boolean
public "markDirty"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncedProperty$$Type<T> = ($SyncedProperty<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SyncedProperty$$Original<T> = $SyncedProperty<(T)>;}
declare module "io.wispforest.owo.client.screens.ScreenInternals$SyncPropertiesPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Endec} from "io.wispforest.endec.Endec"
import {$PacketFlow$$Type} from "net.minecraft.network.protocol.PacketFlow"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$List$$Type} from "java.util.List"
import {$CustomPacketPayload$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$CustomPacketPayload, $CustomPacketPayload$$Interface} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ServerboundCustomPayloadPacket} from "net.minecraft.network.protocol.common.ServerboundCustomPayloadPacket"
import {$ClientboundCustomPayloadPacket} from "net.minecraft.network.protocol.common.ClientboundCustomPayloadPacket"
import {$ConnectionProtocol$$Type} from "net.minecraft.network.ConnectionProtocol"
import {$CustomPacketPayload$TypeAndCodec$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$TypeAndCodec"
import {$CustomPacketPayload$FallbackProvider$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$FallbackProvider"
import {$Record} from "java.lang.Record"

export class $ScreenInternals$SyncPropertiesPacket extends $Record implements $CustomPacketPayload$$Interface {
static readonly "ENDEC": $Endec<($ScreenInternals$SyncPropertiesPacket)>
static readonly "ID": $CustomPacketPayload$Type<($ScreenInternals$SyncPropertiesPacket)>

constructor(payload: $FriendlyByteBuf$$Type)

public "payload"(): $FriendlyByteBuf
public "type"(): $CustomPacketPayload$Type<($CustomPacketPayload)>
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "codec"<B extends $FriendlyByteBuf>(arg0: $CustomPacketPayload$FallbackProvider$$Type<(B)>, arg1: $List$$Type<($CustomPacketPayload$TypeAndCodec$$Type<(B), (never)>)>, arg2: $ConnectionProtocol$$Type, arg3: $PacketFlow$$Type): $StreamCodec<(B), ($CustomPacketPayload)>
public static "codec"<B extends $ByteBuf, T extends $CustomPacketPayload>(arg0: $StreamMemberEncoder$$Type<(B), (T)>, arg1: $StreamDecoder$$Type<(B), (T)>): $StreamCodec<(B), (T)>
public "toVanillaClientbound"(): $ClientboundCustomPayloadPacket
public "toVanillaServerbound"(): $ServerboundCustomPayloadPacket
public static "createType"<T extends $CustomPacketPayload>(arg0: StringJS): $CustomPacketPayload$Type<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenInternals$SyncPropertiesPacket$$Type = ({"payload"?: $FriendlyByteBuf$$Type}) | ([payload?: $FriendlyByteBuf$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenInternals$SyncPropertiesPacket$$Original = $ScreenInternals$SyncPropertiesPacket;}
