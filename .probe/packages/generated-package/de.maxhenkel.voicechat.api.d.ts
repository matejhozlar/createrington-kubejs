declare module "de.maxhenkel.voicechat.api.RawUdpPacket" {
import {$SocketAddress} from "java.net.SocketAddress"

export interface $RawUdpPacket$$Interface {
get "data"(): (byte)[]
get "timestamp"(): long
get "socketAddress"(): $SocketAddress
}

export class $RawUdpPacket implements $RawUdpPacket$$Interface {
 "getData"(): (byte)[]
 "getTimestamp"(): long
 "getSocketAddress"(): $SocketAddress
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RawUdpPacket$$Type = ($RawUdpPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RawUdpPacket$$Original = $RawUdpPacket;}
declare module "de.maxhenkel.voicechat.api.ClientVoicechatSocket" {
import {$RawUdpPacket} from "de.maxhenkel.voicechat.api.RawUdpPacket"
import {$SocketAddress$$Type} from "java.net.SocketAddress"

export interface $ClientVoicechatSocket$$Interface {
get "closed"(): boolean
}

export class $ClientVoicechatSocket implements $ClientVoicechatSocket$$Interface {
 "read"(): $RawUdpPacket
 "close"(): void
 "open"(): void
 "isClosed"(): boolean
 "send"(arg0: (byte)[], arg1: $SocketAddress$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientVoicechatSocket$$Type = ($ClientVoicechatSocket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientVoicechatSocket$$Original = $ClientVoicechatSocket;}
declare module "de.maxhenkel.voicechat.api.opus.OpusEncoderMode" {
import {$Enum} from "java.lang.Enum"

export class $OpusEncoderMode extends $Enum<($OpusEncoderMode)> {
static readonly "RESTRICTED_LOWDELAY": $OpusEncoderMode
static readonly "VOIP": $OpusEncoderMode
static readonly "AUDIO": $OpusEncoderMode

public static "values"(): ($OpusEncoderMode)[]
public static "valueOf"(arg0: StringJS): $OpusEncoderMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OpusEncoderMode$$Type = (("voip") | ("audio") | ("restricted_lowdelay"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OpusEncoderMode$$Original = $OpusEncoderMode;}
declare module "de.maxhenkel.voicechat.api.VoicechatSocket" {
import {$RawUdpPacket} from "de.maxhenkel.voicechat.api.RawUdpPacket"
import {$SocketAddress$$Type} from "java.net.SocketAddress"

export interface $VoicechatSocket$$Interface {
get "closed"(): boolean
get "localPort"(): integer
}

export class $VoicechatSocket implements $VoicechatSocket$$Interface {
 "read"(): $RawUdpPacket
 "close"(): void
 "open"(arg0: integer, arg1: StringJS): void
 "isClosed"(): boolean
 "getLocalPort"(): integer
 "send"(arg0: (byte)[], arg1: $SocketAddress$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoicechatSocket$$Type = ($VoicechatSocket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VoicechatSocket$$Original = $VoicechatSocket;}
