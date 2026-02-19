declare module "de.maxhenkel.voicechat.net.SecretPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ServerConfig$Codec} from "de.maxhenkel.voicechat.config.ServerConfig$Codec"
import {$PacketFlow$$Type} from "net.minecraft.network.protocol.PacketFlow"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$List$$Type} from "java.util.List"
import {$CustomPacketPayload$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$ServerConfig$$Type} from "de.maxhenkel.voicechat.config.ServerConfig"
import {$Packet, $Packet$$Interface} from "de.maxhenkel.voicechat.net.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$CustomPacketPayload} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ServerboundCustomPayloadPacket} from "net.minecraft.network.protocol.common.ServerboundCustomPayloadPacket"
import {$ClientboundCustomPayloadPacket} from "net.minecraft.network.protocol.common.ClientboundCustomPayloadPacket"
import {$ConnectionProtocol$$Type} from "net.minecraft.network.ConnectionProtocol"
import {$CustomPacketPayload$TypeAndCodec$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$TypeAndCodec"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$CustomPacketPayload$FallbackProvider$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$FallbackProvider"

export class $SecretPacket implements $Packet$$Interface<($SecretPacket)> {
static readonly "SECRET": $CustomPacketPayload$Type<($SecretPacket)>

constructor()
constructor(arg0: $ServerPlayer$$Type, arg1: $UUID$$Type, arg2: integer, arg3: $ServerConfig$$Type)

public "getSecret"(): $UUID
public "allowRecording"(): boolean
public "type"(): $CustomPacketPayload$Type<($SecretPacket)>
public "toBytes"(arg0: $FriendlyByteBuf$$Type): void
public "getPlayerUUID"(): $UUID
public "getKeepAlive"(): integer
public "groupsEnabled"(): boolean
public "getVoiceChatDistance"(): double
public "getCodec"(): $ServerConfig$Codec
public "getMtuSize"(): integer
public "fromBytes"(arg0: $FriendlyByteBuf$$Type): $Packet
public "getVoiceHost"(): StringJS
public "getServerPort"(): integer
public static "codec"<B extends $FriendlyByteBuf>(arg0: $CustomPacketPayload$FallbackProvider$$Type<(B)>, arg1: $List$$Type<($CustomPacketPayload$TypeAndCodec$$Type<(B), (never)>)>, arg2: $ConnectionProtocol$$Type, arg3: $PacketFlow$$Type): $StreamCodec<(B), ($CustomPacketPayload)>
public static "codec"<B extends $ByteBuf, T extends $CustomPacketPayload>(arg0: $StreamMemberEncoder$$Type<(B), (T)>, arg1: $StreamDecoder$$Type<(B), (T)>): $StreamCodec<(B), (T)>
public static "createType"<T extends $CustomPacketPayload>(arg0: StringJS): $CustomPacketPayload$Type<(T)>
public "toVanillaClientbound"(): $ClientboundCustomPayloadPacket
public "toVanillaServerbound"(): $ServerboundCustomPayloadPacket
get "secret"(): $UUID
get "playerUUID"(): $UUID
get "keepAlive"(): integer
get "voiceChatDistance"(): double
get "mtuSize"(): integer
get "voiceHost"(): StringJS
get "serverPort"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SecretPacket$$Type = ($SecretPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SecretPacket$$Original = $SecretPacket;}
declare module "de.maxhenkel.voicechat.net.Packet" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$PacketFlow$$Type} from "net.minecraft.network.protocol.PacketFlow"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$List$$Type} from "java.util.List"
import {$CustomPacketPayload$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$CustomPacketPayload, $CustomPacketPayload$$Interface} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ServerboundCustomPayloadPacket} from "net.minecraft.network.protocol.common.ServerboundCustomPayloadPacket"
import {$ClientboundCustomPayloadPacket} from "net.minecraft.network.protocol.common.ClientboundCustomPayloadPacket"
import {$ConnectionProtocol$$Type} from "net.minecraft.network.ConnectionProtocol"
import {$CustomPacketPayload$TypeAndCodec$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$TypeAndCodec"
import {$CustomPacketPayload$FallbackProvider$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$FallbackProvider"

export interface $Packet$$Interface<T extends $Packet<(object)>> extends $CustomPacketPayload$$Interface {
}

export class $Packet<T extends $Packet<(object)>> implements $Packet$$Interface {
 "type"(): $CustomPacketPayload$Type<(T)>
 "toBytes"(arg0: $FriendlyByteBuf$$Type): void
 "fromBytes"(arg0: $FriendlyByteBuf$$Type): T
static "codec"<B extends $FriendlyByteBuf>(arg0: $CustomPacketPayload$FallbackProvider$$Type<(B)>, arg1: $List$$Type<($CustomPacketPayload$TypeAndCodec$$Type<(B), (never)>)>, arg2: $ConnectionProtocol$$Type, arg3: $PacketFlow$$Type): $StreamCodec<(B), ($CustomPacketPayload)>
static "codec"<B extends $ByteBuf, T extends $CustomPacketPayload>(arg0: $StreamMemberEncoder$$Type<(B), (T)>, arg1: $StreamDecoder$$Type<(B), (T)>): $StreamCodec<(B), (T)>
static "createType"<T extends $CustomPacketPayload>(arg0: StringJS): $CustomPacketPayload$Type<(T)>
 "toVanillaClientbound"(): $ClientboundCustomPayloadPacket
 "toVanillaServerbound"(): $ServerboundCustomPayloadPacket
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Packet$$Type<T> = ($Packet<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Packet$$Original<T> = $Packet<(T)>;}
