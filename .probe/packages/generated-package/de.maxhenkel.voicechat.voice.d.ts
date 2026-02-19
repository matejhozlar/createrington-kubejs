declare module "de.maxhenkel.voicechat.voice.client.ClientVoicechat" {
import {$AudioRecorder} from "de.maxhenkel.voicechat.voice.client.AudioRecorder"
import {$Map} from "java.util.Map"
import {$InitializationData, $InitializationData$$Type} from "de.maxhenkel.voicechat.voice.client.InitializationData"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ClientVoicechatConnection, $ClientVoicechatConnection$$Type} from "de.maxhenkel.voicechat.voice.client.ClientVoicechatConnection"
import {$MicThread} from "de.maxhenkel.voicechat.voice.client.MicThread"
import {$SoundManager} from "de.maxhenkel.voicechat.voice.client.SoundManager"
import {$SoundPacket$$Type} from "de.maxhenkel.voicechat.voice.common.SoundPacket"
import {$TalkCache} from "de.maxhenkel.voicechat.voice.client.TalkCache"
import {$AudioChannel} from "de.maxhenkel.voicechat.voice.client.AudioChannel"

export class $ClientVoicechat {
constructor()

public "getConnection"(): $ClientVoicechatConnection
public "connect"(arg0: $InitializationData$$Type): void
public "close"(): void
public "onVoiceChatConnected"(arg0: $ClientVoicechatConnection$$Type): void
public "onVoiceChatDisconnected"(): void
public "setRecording"(arg0: boolean): boolean
public "getRecorder"(): $AudioRecorder
public "getStartTime"(): long
public "getSoundManager"(): $SoundManager
public "toggleRecording"(): boolean
public "processSoundPacket"(arg0: $SoundPacket$$Type): void
public "closeAudioChannel"(arg0: $UUID$$Type): boolean
public "reloadSoundManager"(): void
public "closeMicThread"(): void
public "reloadAudio"(): void
public "getAudioChannels"(): $Map<($UUID), ($AudioChannel)>
public "getTalkCache"(): $TalkCache
public "getMicThread"(): $MicThread
public "getInitializationData"(): $InitializationData
get "connection"(): $ClientVoicechatConnection
set "recording"(value: boolean)
get "recorder"(): $AudioRecorder
get "startTime"(): long
get "soundManager"(): $SoundManager
get "audioChannels"(): $Map<($UUID), ($AudioChannel)>
get "talkCache"(): $TalkCache
get "micThread"(): $MicThread
get "initializationData"(): $InitializationData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientVoicechat$$Type = ($ClientVoicechat);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientVoicechat$$Original = $ClientVoicechat;}
declare module "de.maxhenkel.voicechat.voice.client.MicThread" {
import {$ClientVoicechat$$Type} from "de.maxhenkel.voicechat.voice.client.ClientVoicechat"
import {$MicrophoneException$$Type} from "de.maxhenkel.voicechat.voice.client.MicrophoneException"
import {$ClientVoicechatConnection$$Type} from "de.maxhenkel.voicechat.voice.client.ClientVoicechatConnection"
import {$Thread} from "java.lang.Thread"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $MicThread extends $Thread {
static readonly "MIN_PRIORITY": integer
static readonly "MAX_PRIORITY": integer
static readonly "NORM_PRIORITY": integer

constructor(arg0: $ClientVoicechat$$Type, arg1: $ClientVoicechatConnection$$Type, arg2: $Consumer$$Type<($MicrophoneException)>)

public "run"(): void
public "close"(): void
public "getError"(arg0: $Consumer$$Type<($MicrophoneException)>): void
public "isTalking"(): boolean
public "denoiseIfEnabled"(arg0: (short)[]): (short)[]
public "isWhispering"(): boolean
public "setMicrophoneLocked"(arg0: boolean): void
public "pollMic"(): (short)[]
get "talking"(): boolean
get "whispering"(): boolean
set "microphoneLocked"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MicThread$$Type = ($MicThread);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MicThread$$Original = $MicThread;}
declare module "de.maxhenkel.voicechat.voice.common.Packet" {
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"

export interface $Packet$$Interface<T extends $Packet<(object)>> {
get "TTL"(): long
}

export class $Packet<T extends $Packet<(object)>> implements $Packet$$Interface {
 "toBytes"(arg0: $FriendlyByteBuf$$Type): void
 "getTTL"(): long
 "fromBytes"(arg0: $FriendlyByteBuf$$Type): T
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
declare module "de.maxhenkel.voicechat.voice.server.ServerGroupManager" {
import {$Map} from "java.util.Map"
import {$Server$$Type} from "de.maxhenkel.voicechat.voice.server.Server"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Group, $Group$$Type} from "de.maxhenkel.voicechat.voice.server.Group"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $ServerGroupManager {
constructor(arg0: $Server$$Type)

public "cleanupGroups"(): void
public "getPlayerGroup"(arg0: $ServerPlayer$$Type): $Group
public "getGroup"(arg0: $UUID$$Type): $Group
public "getGroups"(): $Map<($UUID), ($Group)>
public "addGroup"(arg0: $Group$$Type, arg1: $ServerPlayer$$Type): void
public "onPlayerLoggedOut"(arg0: $ServerPlayer$$Type): void
public "removeGroup"(arg0: $UUID$$Type): boolean
public "onPlayerCompatibilityCheckSucceeded"(arg0: $ServerPlayer$$Type): void
public "leaveGroup"(arg0: $ServerPlayer$$Type): void
public "joinGroup"(arg0: $Group$$Type, arg1: $ServerPlayer$$Type, arg2: StringJS): void
get "groups"(): $Map<($UUID), ($Group)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerGroupManager$$Type = ($ServerGroupManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerGroupManager$$Original = $ServerGroupManager;}
declare module "de.maxhenkel.voicechat.voice.server.PingManager$PingListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PingManager$PingListener$$Interface {
}

export class $PingManager$PingListener implements $PingManager$PingListener$$Interface {
 "onPong"(arg0: integer, arg1: long): void
 "onTimeout"(arg0: integer): void
 "onFailedAttempt"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PingManager$PingListener$$Type = ($PingManager$PingListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PingManager$PingListener$$Original = $PingManager$PingListener;}
declare module "de.maxhenkel.voicechat.voice.client.AudioChannel" {
import {$BlockingQueue} from "java.util.concurrent.BlockingQueue"
import {$ClientVoicechat$$Type} from "de.maxhenkel.voicechat.voice.client.ClientVoicechat"
import {$InitializationData$$Type} from "de.maxhenkel.voicechat.voice.client.InitializationData"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Speaker} from "de.maxhenkel.voicechat.voice.client.speaker.Speaker"
import {$Thread} from "java.lang.Thread"
import {$AudioPacketBuffer} from "de.maxhenkel.voicechat.voice.client.AudioPacketBuffer"
import {$SoundPacket, $SoundPacket$$Type} from "de.maxhenkel.voicechat.voice.common.SoundPacket"

export class $AudioChannel extends $Thread {
static readonly "MIN_PRIORITY": integer
static readonly "MAX_PRIORITY": integer
static readonly "NORM_PRIORITY": integer

constructor(arg0: $ClientVoicechat$$Type, arg1: $InitializationData$$Type, arg2: $UUID$$Type)

public "getPacketBuffer"(): $AudioPacketBuffer
public "getUUID"(): $UUID
public "run"(): void
public "getQueue"(): $BlockingQueue<($SoundPacket<(never)>)>
public "isClosed"(): boolean
public "closeAndKill"(): void
public "canKill"(): boolean
public "getLostPackets"(): long
public "addToQueue"(arg0: $SoundPacket$$Type<(never)>): void
public "getSpeaker"(): $Speaker
get "packetBuffer"(): $AudioPacketBuffer
get "UUID"(): $UUID
get "queue"(): $BlockingQueue<($SoundPacket<(never)>)>
get "closed"(): boolean
get "lostPackets"(): long
get "speaker"(): $Speaker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AudioChannel$$Type = ($AudioChannel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AudioChannel$$Original = $AudioChannel;}
declare module "de.maxhenkel.voicechat.voice.server.Server" {
import {$Map} from "java.util.Map"
import {$Collection$$Type} from "java.util.Collection"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ClientConnection, $ClientConnection$$Type} from "de.maxhenkel.voicechat.voice.server.ClientConnection"
import {$Packet$$Type} from "de.maxhenkel.voicechat.voice.common.Packet"
import {$Thread} from "java.lang.Thread"
import {$PlayerState$$Type} from "de.maxhenkel.voicechat.voice.common.PlayerState"
import {$ServerCategoryManager} from "de.maxhenkel.voicechat.voice.server.ServerCategoryManager"
import {$NetworkMessage$$Type} from "de.maxhenkel.voicechat.voice.common.NetworkMessage"
import {$VoicechatSocket} from "de.maxhenkel.voicechat.api.VoicechatSocket"
import {$MicPacket$$Type} from "de.maxhenkel.voicechat.voice.common.MicPacket"
import {$PlayerStateManager} from "de.maxhenkel.voicechat.voice.server.PlayerStateManager"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$SoundPacket$$Type} from "de.maxhenkel.voicechat.voice.common.SoundPacket"
import {$PingManager} from "de.maxhenkel.voicechat.voice.server.PingManager"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$ServerGroupManager} from "de.maxhenkel.voicechat.voice.server.ServerGroupManager"

export class $Server extends $Thread {
static readonly "MIN_PRIORITY": integer
static readonly "MAX_PRIORITY": integer
static readonly "NORM_PRIORITY": integer

constructor(arg0: $MinecraftServer$$Type)

public "getSecret"(arg0: $UUID$$Type): $UUID
public "getServer"(): $MinecraftServer
public "getConnection"(arg0: $UUID$$Type): $ClientConnection
public "run"(): void
public "close"(): void
public "getPort"(): integer
public "broadcast"(arg0: $Collection$$Type<($ServerPlayer$$Type)>, arg1: $SoundPacket$$Type<(never)>, arg2: $ServerPlayer$$Type, arg3: $PlayerState$$Type, arg4: $UUID$$Type, arg5: StringJS): void
public "isClosed"(): boolean
public "disconnectClient"(arg0: $UUID$$Type): void
public "sendPacketRaw"(arg0: $Packet$$Type<(never)>, arg1: $ClientConnection$$Type): void
public "getUnconnectedSender"(arg0: $NetworkMessage$$Type): $ClientConnection
public "getConnections"(): $Map<($UUID), ($ClientConnection)>
public "onPlayerLoggedIn"(arg0: $ServerPlayer$$Type): void
public "getSender"(arg0: $NetworkMessage$$Type): $ClientConnection
public "getPlayerStateManager"(): $PlayerStateManager
public "sendPacket"(arg0: $Packet$$Type<(never)>, arg1: $ClientConnection$$Type): boolean
public "getSocket"(): $VoicechatSocket
public "getBroadcastRange"(arg0: float): double
public "onPlayerLoggedOut"(arg0: $ServerPlayer$$Type): void
public "onPlayerCompatibilityCheckSucceeded"(arg0: $ServerPlayer$$Type): void
public "onPlayerVoicechatConnect"(arg0: $ServerPlayer$$Type): void
public "getGroupManager"(): $ServerGroupManager
public "onMicPacket"(arg0: $UUID$$Type, arg1: $MicPacket$$Type): void
public "generateNewSecret"(arg0: $UUID$$Type): $UUID
public "getPingManager"(): $PingManager
public "changePort"(arg0: integer): void
public "onPlayerVoicechatDisconnect"(arg0: $UUID$$Type): void
public "hasSecret"(arg0: $UUID$$Type): boolean
public "sendSoundPacket"(arg0: $ServerPlayer$$Type, arg1: $PlayerState$$Type, arg2: $ServerPlayer$$Type, arg3: $PlayerState$$Type, arg4: $ClientConnection$$Type, arg5: $SoundPacket$$Type<(never)>, arg6: StringJS): void
public "getCategoryManager"(): $ServerCategoryManager
get "server"(): $MinecraftServer
get "port"(): integer
get "closed"(): boolean
get "connections"(): $Map<($UUID), ($ClientConnection)>
get "playerStateManager"(): $PlayerStateManager
get "socket"(): $VoicechatSocket
get "groupManager"(): $ServerGroupManager
get "pingManager"(): $PingManager
get "categoryManager"(): $ServerCategoryManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Server$$Type = ($Server);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Server$$Original = $Server;}
declare module "de.maxhenkel.voicechat.voice.common.PlayerState" {
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$UUID, $UUID$$Type} from "java.util.UUID"

export class $PlayerState {
constructor(arg0: $UUID$$Type, arg1: StringJS, arg2: boolean, arg3: boolean)

public "isDisconnected"(): boolean
public "getUuid"(): $UUID
public "getName"(): StringJS
public "toString"(): StringJS
public "toBytes"(arg0: $FriendlyByteBuf$$Type): void
public "setName"(arg0: StringJS): void
public "setGroup"(arg0: $UUID$$Type): void
public "hasGroup"(): boolean
public "getGroup"(): $UUID
public "setDisabled"(arg0: boolean): void
public "setDisconnected"(arg0: boolean): void
public "isDisabled"(): boolean
public static "fromBytes"(arg0: $FriendlyByteBuf$$Type): $PlayerState
public "setUuid"(arg0: $UUID$$Type): void
get "disconnected"(): boolean
get "uuid"(): $UUID
get "name"(): StringJS
set "name"(value: StringJS)
set "group"(value: $UUID$$Type)
get "group"(): $UUID
set "disabled"(value: boolean)
set "disconnected"(value: boolean)
get "disabled"(): boolean
set "uuid"(value: $UUID$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerState$$Type = ($PlayerState);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerState$$Original = $PlayerState;}
declare module "de.maxhenkel.voicechat.voice.client.ClientVoicechatConnection" {
import {$NetworkMessage$$Type} from "de.maxhenkel.voicechat.voice.common.NetworkMessage"
import {$ClientVoicechat$$Type} from "de.maxhenkel.voicechat.voice.client.ClientVoicechat"
import {$InetAddress} from "java.net.InetAddress"
import {$InitializationData, $InitializationData$$Type} from "de.maxhenkel.voicechat.voice.client.InitializationData"
import {$Thread} from "java.lang.Thread"
import {$ClientVoicechatSocket} from "de.maxhenkel.voicechat.api.ClientVoicechatSocket"

export class $ClientVoicechatConnection extends $Thread {
static readonly "MIN_PRIORITY": integer
static readonly "MAX_PRIORITY": integer
static readonly "NORM_PRIORITY": integer

constructor(arg0: $ClientVoicechat$$Type, arg1: $InitializationData$$Type)

public "disconnect"(): void
public "isConnected"(): boolean
public "run"(): void
public "close"(): void
public "getAddress"(): $InetAddress
public "getData"(): $InitializationData
public "checkTimeout"(): void
public "isInitialized"(): boolean
public "sendToServer"(arg0: $NetworkMessage$$Type): boolean
public "getSocket"(): $ClientVoicechatSocket
get "connected"(): boolean
get "address"(): $InetAddress
get "data"(): $InitializationData
get "initialized"(): boolean
get "socket"(): $ClientVoicechatSocket
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientVoicechatConnection$$Type = ($ClientVoicechatConnection);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientVoicechatConnection$$Original = $ClientVoicechatConnection;}
declare module "de.maxhenkel.voicechat.voice.common.SoundPacket" {
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Packet$$Interface} from "de.maxhenkel.voicechat.voice.common.Packet"

export class $SoundPacket<T extends $SoundPacket<(object)>> implements $Packet$$Interface<(T)> {
static readonly "WHISPER_MASK": byte
static readonly "HAS_CATEGORY_MASK": byte

constructor()
constructor(arg0: $UUID$$Type, arg1: $UUID$$Type, arg2: (short)[], arg3: StringJS)
constructor(arg0: $UUID$$Type, arg1: $UUID$$Type, arg2: (byte)[], arg3: long, arg4: StringJS)

public "getData"(): (byte)[]
public "getCategory"(): StringJS
public "getSequenceNumber"(): long
public "getSender"(): $UUID
public "isFromClientAudioChannel"(): boolean
public "getChannelId"(): $UUID
public "toBytes"(arg0: $FriendlyByteBuf$$Type): void
public "getTTL"(): long
public "fromBytes"(arg0: $FriendlyByteBuf$$Type): T
get "data"(): (byte)[]
get "category"(): StringJS
get "sequenceNumber"(): long
get "sender"(): $UUID
get "fromClientAudioChannel"(): boolean
get "channelId"(): $UUID
get "TTL"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundPacket$$Type<T> = ($SoundPacket<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoundPacket$$Original<T> = $SoundPacket<(T)>;}
declare module "de.maxhenkel.voicechat.voice.client.TalkCache" {
import {$UUID$$Type} from "java.util.UUID"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $TalkCache {
constructor()

public "setTimestampSupplier"(arg0: $Supplier$$Type<(long)>): void
public "isTalking"(arg0: $UUID$$Type): boolean
public "isTalking"(arg0: $Entity$$Type): boolean
public "updateTalking"(arg0: $UUID$$Type, arg1: boolean): void
public "isWhispering"(arg0: $Entity$$Type): boolean
public "isWhispering"(arg0: $UUID$$Type): boolean
set "timestampSupplier"(value: $Supplier$$Type<(long)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TalkCache$$Type = ($TalkCache);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TalkCache$$Original = $TalkCache;}
declare module "de.maxhenkel.voicechat.voice.common.NetworkMessage" {
import {$RawUdpPacket$$Type} from "de.maxhenkel.voicechat.api.RawUdpPacket"
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$Server$$Type} from "de.maxhenkel.voicechat.voice.server.Server"
import {$UUID$$Type} from "java.util.UUID"
import {$ClientConnection$$Type} from "de.maxhenkel.voicechat.voice.server.ClientConnection"
import {$Packet, $Packet$$Type} from "de.maxhenkel.voicechat.voice.common.Packet"

export class $NetworkMessage {
static readonly "MAGIC_BYTE": byte

constructor(arg0: $Packet$$Type<(never)>)
constructor(arg0: long, arg1: $Packet$$Type<(never)>)

public "write"(arg0: $UUID$$Type): (byte)[]
public "getAddress"(): $SocketAddress
public "getTimestamp"(): long
public "getPacket"(): $Packet<($Packet<(object)>)>
public static "readPacketServer"(arg0: $RawUdpPacket$$Type, arg1: $Server$$Type): $NetworkMessage
public "getTTL"(): long
public static "readFromBytes"(arg0: $SocketAddress$$Type, arg1: $UUID$$Type, arg2: (byte)[], arg3: long): $NetworkMessage
public "writeServer"(arg0: $Server$$Type, arg1: $ClientConnection$$Type): (byte)[]
get "address"(): $SocketAddress
get "timestamp"(): long
get "packet"(): $Packet<($Packet<(object)>)>
get "TTL"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkMessage$$Type = ($NetworkMessage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NetworkMessage$$Original = $NetworkMessage;}
declare module "de.maxhenkel.voicechat.voice.server.Group" {
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ClientGroup} from "de.maxhenkel.voicechat.voice.common.ClientGroup"
import {$Group$Type, $Group$Type$$Type} from "de.maxhenkel.voicechat.api.Group$Type"

export class $Group {
constructor(arg0: $UUID$$Type, arg1: StringJS)
constructor()
constructor(arg0: $UUID$$Type, arg1: StringJS, arg2: StringJS, arg3: boolean, arg4: boolean, arg5: $Group$Type$$Type)
constructor(arg0: $UUID$$Type, arg1: StringJS, arg2: StringJS)
constructor(arg0: $UUID$$Type, arg1: StringJS, arg2: StringJS, arg3: boolean)

public "getName"(): StringJS
public "isHidden"(): boolean
public "isOpen"(): boolean
public "getId"(): $UUID
public "getType"(): $Group$Type
public "toClientGroup"(): $ClientGroup
public "getPassword"(): StringJS
public "isPersistent"(): boolean
public "isNormal"(): boolean
public "isIsolated"(): boolean
get "name"(): StringJS
get "hidden"(): boolean
get "open"(): boolean
get "id"(): $UUID
get "type"(): $Group$Type
get "password"(): StringJS
get "persistent"(): boolean
get "normal"(): boolean
get "isolated"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Group$$Type = ($Group);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Group$$Original = $Group;}
declare module "de.maxhenkel.voicechat.voice.server.ServerCategoryManager" {
import {$CategoryManager} from "de.maxhenkel.voicechat.plugins.CategoryManager"
import {$Server$$Type} from "de.maxhenkel.voicechat.voice.server.Server"
import {$VolumeCategoryImpl, $VolumeCategoryImpl$$Type} from "de.maxhenkel.voicechat.plugins.impl.VolumeCategoryImpl"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $ServerCategoryManager extends $CategoryManager {
constructor(arg0: $Server$$Type)

public "addCategory"(arg0: $VolumeCategoryImpl$$Type): void
public "onPlayerCompatibilityCheckSucceeded"(arg0: $ServerPlayer$$Type): void
public "removeCategory"(arg0: StringJS): $VolumeCategoryImpl
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerCategoryManager$$Type = ($ServerCategoryManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerCategoryManager$$Original = $ServerCategoryManager;}
declare module "de.maxhenkel.voicechat.voice.server.PlayerStateManager" {
import {$Collection} from "java.util.Collection"
import {$Server$$Type} from "de.maxhenkel.voicechat.voice.server.Server"
import {$UUID$$Type} from "java.util.UUID"
import {$PlayerState, $PlayerState$$Type} from "de.maxhenkel.voicechat.voice.common.PlayerState"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $PlayerStateManager {
constructor(arg0: $Server$$Type)

public "getState"(arg0: $UUID$$Type): $PlayerState
public "setGroup"(arg0: $ServerPlayer$$Type, arg1: $UUID$$Type): void
public "broadcastState"(arg0: $PlayerState$$Type): void
public static "defaultDisconnectedState"(arg0: $ServerPlayer$$Type): $PlayerState
public "onPlayerLoggedIn"(arg0: $ServerPlayer$$Type): void
public "getStates"(): $Collection<($PlayerState)>
public "onPlayerLoggedOut"(arg0: $ServerPlayer$$Type): void
public "onPlayerCompatibilityCheckSucceeded"(arg0: $ServerPlayer$$Type): void
public "onPlayerVoicechatConnect"(arg0: $ServerPlayer$$Type): void
public "onPlayerVoicechatDisconnect"(arg0: $UUID$$Type): void
get "states"(): $Collection<($PlayerState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerStateManager$$Type = ($PlayerStateManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerStateManager$$Original = $PlayerStateManager;}
declare module "de.maxhenkel.voicechat.voice.client.SoundManager" {
import {$List} from "java.util.List"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$Runnable$$Type} from "java.lang.Runnable"

export class $SoundManager {
constructor(arg0: StringJS)

public "close"(): void
public "isClosed"(): boolean
public "closeContext"(): void
public "runInContext"(arg0: $Executor$$Type, arg1: $Runnable$$Type): void
public static "cleanDeviceName"(arg0: StringJS): StringJS
public static "checkAlError"(): boolean
public static "checkAlcError"(arg0: long): boolean
public static "getDefaultSpeaker"(): StringJS
public static "canEnumerate"(): boolean
public static "getAllSpeakers"(): $List<(StringJS)>
public "openContext"(): boolean
public static "getAlcError"(arg0: integer): StringJS
get "closed"(): boolean
get "defaultSpeaker"(): StringJS
get "allSpeakers"(): $List<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundManager$$Type = ($SoundManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoundManager$$Original = $SoundManager;}
declare module "de.maxhenkel.voicechat.voice.client.MicrophoneException" {
import {$IOException} from "java.io.IOException"

export class $MicrophoneException extends $IOException {
constructor(arg0: StringJS)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MicrophoneException$$Type = ($MicrophoneException);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MicrophoneException$$Original = $MicrophoneException;}
declare module "de.maxhenkel.voicechat.voice.common.PingPacket" {
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Packet$$Interface} from "de.maxhenkel.voicechat.voice.common.Packet"

export class $PingPacket implements $Packet$$Interface<($PingPacket)> {
constructor(arg0: $UUID$$Type, arg1: long)
constructor()

public "toBytes"(arg0: $FriendlyByteBuf$$Type): void
public "getId"(): $UUID
public "getTimestamp"(): long
public "fromBytes"(arg0: $FriendlyByteBuf$$Type): $PingPacket
public "getTTL"(): long
get "id"(): $UUID
get "timestamp"(): long
get "TTL"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PingPacket$$Type = ($PingPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PingPacket$$Original = $PingPacket;}
declare module "de.maxhenkel.voicechat.voice.server.ClientConnection" {
import {$NetworkMessage$$Type} from "de.maxhenkel.voicechat.voice.common.NetworkMessage"
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$Server$$Type} from "de.maxhenkel.voicechat.voice.server.Server"
import {$UUID, $UUID$$Type} from "java.util.UUID"

export class $ClientConnection {
constructor(arg0: $UUID$$Type, arg1: $SocketAddress$$Type)

public "getAddress"(): $SocketAddress
public "getPlayerUUID"(): $UUID
public "getLastKeepAliveResponse"(): long
public "setLastKeepAliveResponse"(arg0: long): void
public "send"(arg0: $Server$$Type, arg1: $NetworkMessage$$Type): void
get "address"(): $SocketAddress
get "playerUUID"(): $UUID
get "lastKeepAliveResponse"(): long
set "lastKeepAliveResponse"(value: long)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientConnection$$Type = ($ClientConnection);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientConnection$$Original = $ClientConnection;}
declare module "de.maxhenkel.voicechat.voice.common.MicPacket" {
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Packet, $Packet$$Interface} from "de.maxhenkel.voicechat.voice.common.Packet"

export class $MicPacket implements $Packet$$Interface<($MicPacket)> {
constructor(arg0: (byte)[], arg1: boolean, arg2: long)
constructor()

public "toBytes"(arg0: $FriendlyByteBuf$$Type): void
public "getData"(): (byte)[]
public "getSequenceNumber"(): long
public "setData"(arg0: (byte)[]): void
public "getTTL"(): long
public "fromBytes"(arg0: $FriendlyByteBuf$$Type): $Packet
public "isWhispering"(): boolean
get "data"(): (byte)[]
get "sequenceNumber"(): long
set "data"(value: (byte)[])
get "TTL"(): long
get "whispering"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MicPacket$$Type = ($MicPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MicPacket$$Original = $MicPacket;}
declare module "de.maxhenkel.voicechat.voice.client.speaker.Speaker" {
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"

export interface $Speaker$$Interface {
}

export class $Speaker implements $Speaker$$Interface {
 "close"(): void
 "open"(): void
 "play"(arg0: (short)[], arg1: float, arg2: $Vec3$$Type, arg3: StringJS, arg4: float): void
 "play"(arg0: (short)[], arg1: float, arg2: StringJS): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Speaker$$Type = ($Speaker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Speaker$$Original = $Speaker;}
declare module "de.maxhenkel.voicechat.voice.client.AudioRecorder" {
import {$UUID$$Type} from "java.util.UUID"
import {$Path, $Path$$Type} from "java.nio.file.Path"

export class $AudioRecorder {
constructor(arg0: $Path$$Type, arg1: long)

public "getLocation"(): $Path
public "close"(): void
public static "create"(): $AudioRecorder
public "getDuration"(): StringJS
public "getDuration"(arg0: long): StringJS
public "getStorage"(arg0: long): StringJS
public "getStorage"(): StringJS
public "getStartTime"(): long
public "flushChunkThreaded"(arg0: $UUID$$Type): void
public "appendChunk"(arg0: $UUID$$Type, arg1: long, arg2: (short)[]): void
public "saveAndClose"(): void
public "getRecordedPlayerCount"(): integer
get "location"(): $Path
get "duration"(): StringJS
get "storage"(): StringJS
get "startTime"(): long
get "recordedPlayerCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AudioRecorder$$Type = ($AudioRecorder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AudioRecorder$$Original = $AudioRecorder;}
declare module "de.maxhenkel.voicechat.voice.client.InitializationData" {
import {$ServerConfig$Codec} from "de.maxhenkel.voicechat.config.ServerConfig$Codec"
import {$UUID} from "java.util.UUID"
import {$SecretPacket$$Type} from "de.maxhenkel.voicechat.net.SecretPacket"

export class $InitializationData {
constructor(arg0: StringJS, arg1: $SecretPacket$$Type)

public "getSecret"(): $UUID
public "allowRecording"(): boolean
public "getPlayerUUID"(): $UUID
public "getKeepAlive"(): integer
public "groupsEnabled"(): boolean
public "getVoiceChatDistance"(): double
public "getCodec"(): $ServerConfig$Codec
public "getMtuSize"(): integer
public "getServerIP"(): StringJS
public "getServerPort"(): integer
get "secret"(): $UUID
get "playerUUID"(): $UUID
get "keepAlive"(): integer
get "voiceChatDistance"(): double
get "codec"(): $ServerConfig$Codec
get "mtuSize"(): integer
get "serverIP"(): StringJS
get "serverPort"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InitializationData$$Type = ($InitializationData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InitializationData$$Original = $InitializationData;}
declare module "de.maxhenkel.voicechat.voice.server.PingManager" {
import {$Server$$Type} from "de.maxhenkel.voicechat.voice.server.Server"
import {$ClientConnection$$Type} from "de.maxhenkel.voicechat.voice.server.ClientConnection"
import {$PingManager$PingListener$$Type} from "de.maxhenkel.voicechat.voice.server.PingManager$PingListener"
import {$PingPacket$$Type} from "de.maxhenkel.voicechat.voice.common.PingPacket"

export class $PingManager {
constructor(arg0: $Server$$Type)

public "onPongPacket"(arg0: $PingPacket$$Type): void
public "checkTimeouts"(): void
public "sendPing"(arg0: $ClientConnection$$Type, arg1: long, arg2: integer, arg3: $PingManager$PingListener$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PingManager$$Type = ($PingManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PingManager$$Original = $PingManager;}
declare module "de.maxhenkel.voicechat.voice.client.AudioPacketBuffer" {
import {$BlockingQueue$$Type} from "java.util.concurrent.BlockingQueue"
import {$SoundPacket, $SoundPacket$$Type} from "de.maxhenkel.voicechat.voice.common.SoundPacket"

export class $AudioPacketBuffer {
constructor(arg0: integer)

public "clear"(): void
public "getSize"(): integer
public "poll"(arg0: $BlockingQueue$$Type<($SoundPacket$$Type<(never)>)>): $SoundPacket<(never)>
get "size"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AudioPacketBuffer$$Type = ($AudioPacketBuffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AudioPacketBuffer$$Original = $AudioPacketBuffer;}
