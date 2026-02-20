declare module "net.minecraft.server.network.ConfigurationTask" {
import {$ConfigurationTask$Type} from "net.minecraft.server.network.ConfigurationTask$Type"
import {$Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $ConfigurationTask$$Interface {
}

export class $ConfigurationTask implements $ConfigurationTask$$Interface {
 "type"(): $ConfigurationTask$Type
 "start"(arg0: $Consumer$$Type<($Packet<(never)>)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigurationTask$$Type = ($ConfigurationTask);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfigurationTask$$Original = $ConfigurationTask;}
declare module "net.minecraft.server.network.TextFilter" {
import {$FilteredText} from "net.minecraft.server.network.FilteredText"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$List, $List$$Type} from "java.util.List"

export interface $TextFilter$$Interface {
}

export class $TextFilter implements $TextFilter$$Interface {
static readonly "DUMMY": $TextFilter

 "join"(): void
 "leave"(): void
 "processStreamMessage"(arg0: StringJS): $CompletableFuture<($FilteredText)>
 "processMessageBundle"(arg0: $List$$Type<(StringJS)>): $CompletableFuture<($List<($FilteredText)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextFilter$$Type = ($TextFilter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextFilter$$Original = $TextFilter;}
declare module "net.minecraft.server.network.CommonListenerCookie" {
import {$ClientInformation, $ClientInformation$$Type} from "net.minecraft.server.level.ClientInformation"
import {$ConnectionType, $ConnectionType$$Type} from "net.neoforged.neoforge.network.connection.ConnectionType"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$Record} from "java.lang.Record"

export class $CommonListenerCookie extends $Record {
/**
 * 
 * @deprecated
 */
constructor(arg0: $GameProfile$$Type, arg1: integer, arg2: $ClientInformation$$Type, arg3: boolean)
constructor(gameProfile: $GameProfile$$Type, latency: integer, clientInformation: $ClientInformation$$Type, transferred: boolean, connectionType: $ConnectionType$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "transferred"(): boolean
public "gameProfile"(): $GameProfile
public "clientInformation"(): $ClientInformation
public "latency"(): integer
public static "createInitial"(arg0: $GameProfile$$Type, arg1: boolean): $CommonListenerCookie
public "connectionType"(): $ConnectionType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonListenerCookie$$Type = ({"latency"?: integer, "transferred"?: boolean, "gameProfile"?: $GameProfile$$Type, "connectionType"?: $ConnectionType$$Type, "clientInformation"?: $ClientInformation$$Type}) | ([latency?: integer, transferred?: boolean, gameProfile?: $GameProfile$$Type, connectionType?: $ConnectionType$$Type, clientInformation?: $ClientInformation$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CommonListenerCookie$$Original = $CommonListenerCookie;}
declare module "net.minecraft.server.network.ServerPlayerConnection" {
import {$Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ServerPlayer} from "net.minecraft.server.level.ServerPlayer"

export interface $ServerPlayerConnection$$Interface {
get "player"(): $ServerPlayer
}

export class $ServerPlayerConnection implements $ServerPlayerConnection$$Interface {
 "send"(arg0: $Packet$$Type<(never)>): void
 "getPlayer"(): $ServerPlayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayerConnection$$Type = ($ServerPlayerConnection);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerPlayerConnection$$Original = $ServerPlayerConnection;}
declare module "net.minecraft.server.network.Filterable" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$FilteredText$$Type} from "net.minecraft.server.network.FilteredText"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Function$$Type} from "java.util.function.Function"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $Filterable<T> extends $Record {
constructor(arg0: T, arg1: (T)?)

public "get"(arg0: boolean): T
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "map"<U>(arg0: $Function$$Type<(T), (U)>): $Filterable<(U)>
public static "from"(arg0: $FilteredText$$Type): $Filterable<(StringJS)>
public "resolve"<U>(arg0: $Function$$Type<(T), ((U)?)>): $Optional<($Filterable<(U)>)>
public "raw"(): T
public "filtered"(): $Optional<(T)>
public static "passThrough"<T>(arg0: T): $Filterable<(T)>
public static "codec"<T>(arg0: $Codec$$Type<(T)>): $Codec<($Filterable<(T)>)>
public static "streamCodec"<B extends $ByteBuf, T>(arg0: $StreamCodec$$Type<(B), (T)>): $StreamCodec<(B), ($Filterable<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Filterable$$Type<T> = ({"raw"?: T, "filtered"?: (T)?}) | ([raw?: T, filtered?: (T)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Filterable$$Original<T> = $Filterable<(T)>;}
declare module "net.minecraft.server.network.ServerGamePacketListenerImpl" {
import {$Iterable$$Type} from "java.lang.Iterable"
import {$ServerboundChunkBatchReceivedPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundChunkBatchReceivedPacket"
import {$ServerGamePacketListenerImplAccessor$$Interface} from "dev.lopyluna.gnkinetics.mixins.ServerGamePacketListenerImplAccessor"
import {$ServerboundClientInformationPacket$$Type} from "net.minecraft.network.protocol.common.ServerboundClientInformationPacket"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$PlayerChatMessage$$Type} from "net.minecraft.network.chat.PlayerChatMessage"
import {$ServerboundPlayerActionPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundPlayerActionPacket"
import {$ServerboundMovePlayerPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundMovePlayerPacket"
import {$ServerboundSetStructureBlockPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundSetStructureBlockPacket"
import {$ServerboundRecipeBookSeenRecipePacket$$Type} from "net.minecraft.network.protocol.game.ServerboundRecipeBookSeenRecipePacket"
import {$ServerboundSignUpdatePacket$$Type} from "net.minecraft.network.protocol.game.ServerboundSignUpdatePacket"
import {$NeoListenableNetworkHandler$$Interface} from "org.sinytra.fabric.networking_api.NeoListenableNetworkHandler"
import {$ServerCommonPacketListenerImpl} from "net.minecraft.server.network.ServerCommonPacketListenerImpl"
import {$ServerboundAcceptTeleportationPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundAcceptTeleportationPacket"
import {$ServerboundPickItemPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundPickItemPacket"
import {$RelativeMovement$$Type} from "net.minecraft.world.entity.RelativeMovement"
import {$ServerboundUseItemPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundUseItemPacket"
import {$Set$$Type} from "java.util.Set"
import {$ServerboundSwingPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundSwingPacket"
import {$ServerboundPlaceRecipePacket$$Type} from "net.minecraft.network.protocol.game.ServerboundPlaceRecipePacket"
import {$ServerboundSetCommandMinecartPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundSetCommandMinecartPacket"
import {$Logger} from "org.slf4j.Logger"
import {$ServerboundSelectTradePacket$$Type} from "net.minecraft.network.protocol.game.ServerboundSelectTradePacket"
import {$ServerboundLockDifficultyPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundLockDifficultyPacket"
import {$ServerboundUseItemOnPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundUseItemOnPacket"
import {$ServerboundEditBookPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundEditBookPacket"
import {$DisconnectionDetails$$Type} from "net.minecraft.network.DisconnectionDetails"
import {$ServerboundContainerClosePacket$$Type} from "net.minecraft.network.protocol.game.ServerboundContainerClosePacket"
import {$ServerboundCustomPayloadPacket$$Type} from "net.minecraft.network.protocol.common.ServerboundCustomPayloadPacket"
import {$ConnectionType} from "net.neoforged.neoforge.network.connection.ConnectionType"
import {$ServerboundChatCommandPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundChatCommandPacket"
import {$ServerboundPingRequestPacket$$Type} from "net.minecraft.network.protocol.ping.ServerboundPingRequestPacket"
import {$ServerboundBlockEntityTagQueryPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundBlockEntityTagQueryPacket"
import {$Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ServerboundChatCommandSignedPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundChatCommandSignedPacket"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ServerboundPlayerInputPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundPlayerInputPacket"
import {$ServerboundPaddleBoatPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundPaddleBoatPacket"
import {$ServerboundClientCommandPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundClientCommandPacket"
import {$ServerGamePacketListenerImplAccessor$$Interface as $ServerGamePacketListenerImplAccessor$0$$Interface} from "dev.lopyluna.dndesires.mixins.ServerGamePacketListenerImplAccessor"
import {$SocketAddress} from "java.net.SocketAddress"
import {$ServerboundSetCreativeModeSlotPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundSetCreativeModeSlotPacket"
import {$ServerboundConfigurationAcknowledgedPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundConfigurationAcknowledgedPacket"
import {$ServerboundSetJigsawBlockPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundSetJigsawBlockPacket"
import {$ServerboundSetCarriedItemPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundSetCarriedItemPacket"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ServerboundRecipeBookChangeSettingsPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundRecipeBookChangeSettingsPacket"
import {$ServerboundContainerButtonClickPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundContainerButtonClickPacket"
import {$ServerboundContainerSlotStateChangedPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundContainerSlotStateChangedPacket"
import {$ServerboundSetCommandBlockPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundSetCommandBlockPacket"
import {$PlayerChunkSender} from "net.minecraft.server.network.PlayerChunkSender"
import {$CommonListenerCookie$$Type} from "net.minecraft.server.network.CommonListenerCookie"
import {$ServerboundTeleportToEntityPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundTeleportToEntityPacket"
import {$ServerboundPlayerAbilitiesPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundPlayerAbilitiesPacket"
import {$Exception$$Type} from "java.lang.Exception"
import {$ServerboundSetBeaconPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundSetBeaconPacket"
import {$ServerPlayerConnection$$Interface} from "net.minecraft.server.network.ServerPlayerConnection"
import {$ServerboundInteractPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundInteractPacket"
import {$ServerboundEntityTagQueryPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundEntityTagQueryPacket"
import {$TickablePacketListener$$Interface} from "net.minecraft.network.TickablePacketListener"
import {$ServerboundSeenAdvancementsPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundSeenAdvancementsPacket"
import {$ServerboundCommandSuggestionPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundCommandSuggestionPacket"
import {$ServerboundPlayerCommandPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundPlayerCommandPacket"
import {$ServerboundMoveVehiclePacket$$Type} from "net.minecraft.network.protocol.game.ServerboundMoveVehiclePacket"
import {$PacketFlow} from "net.minecraft.network.protocol.PacketFlow"
import {$ServerboundChatAckPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundChatAckPacket"
import {$ServerboundDebugSampleSubscriptionPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundDebugSampleSubscriptionPacket"
import {$ServerboundJigsawGeneratePacket$$Type} from "net.minecraft.network.protocol.game.ServerboundJigsawGeneratePacket"
import {$ServerboundChatSessionUpdatePacket$$Type} from "net.minecraft.network.protocol.game.ServerboundChatSessionUpdatePacket"
import {$ServerboundChatPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundChatPacket"
import {$CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$ServerboundRenameItemPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundRenameItemPacket"
import {$ServerboundChangeDifficultyPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundChangeDifficultyPacket"
import {$ConnectionProtocol} from "net.minecraft.network.ConnectionProtocol"
import {$ServerboundContainerClickPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundContainerClickPacket"
import {$ServerGamePacketListener$$Interface} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$GameProfile} from "com.mojang.authlib.GameProfile"
import {$Connection, $Connection$$Type} from "net.minecraft.network.Connection"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$ChatType$Bound$$Type} from "net.minecraft.network.chat.ChatType$Bound"

export class $ServerGamePacketListenerImpl extends $ServerCommonPacketListenerImpl implements $ServerGamePacketListener$$Interface, $ServerPlayerConnection$$Interface, $TickablePacketListener$$Interface, $NeoListenableNetworkHandler$$Interface, $ServerGamePacketListenerImplAccessor$$Interface, $ServerGamePacketListenerImplAccessor$0$$Interface {
static readonly "LATENCY_CHECK_INTERVAL": integer
readonly "server": $MinecraftServer
static readonly "DISCONNECT_UNEXPECTED_QUERY": $Component
static readonly "LOGGER": $Logger
readonly "connection": $Connection
readonly "chunkSender": $PlayerChunkSender
 "connectionType": $ConnectionType
 "player": $ServerPlayer

constructor(arg0: $MinecraftServer$$Type, arg1: $Connection$$Type, arg2: $ServerPlayer$$Type, arg3: $CommonListenerCookie$$Type)

public "getRemoteAddress"(): $SocketAddress
public "tick"(): void
public "resetPosition"(): void
public "handlePickItem"(arg0: $ServerboundPickItemPacket$$Type): void
public "onDisconnect"(arg0: $DisconnectionDetails$$Type): void
public "handleChat"(arg0: $ServerboundChatPacket$$Type): void
public "isAcceptingMessages"(): boolean
public "shouldHandleMessage"(arg0: $Packet$$Type<(never)>): boolean
public "getPlayer"(): $ServerPlayer
public "handleDisconnect"(): void
public "teleport"(arg0: double, arg1: double, arg2: double, arg3: float, arg4: float): void
public "teleport"(arg0: double, arg1: double, arg2: double, arg3: float, arg4: float, arg5: $Set$$Type<($RelativeMovement$$Type)>): void
public "switchToConfig"(): void
public "handlePlayerInput"(arg0: $ServerboundPlayerInputPacket$$Type): void
public "handleInteract"(arg0: $ServerboundInteractPacket$$Type): void
public "handleChatAck"(arg0: $ServerboundChatAckPacket$$Type): void
public "handleChatCommand"(arg0: $ServerboundChatCommandPacket$$Type): void
public "addPendingMessage"(arg0: $PlayerChatMessage$$Type): void
public "handleUseItemOn"(arg0: $ServerboundUseItemOnPacket$$Type): void
public "playerProfile"(): $GameProfile
public "handlePingRequest"(arg0: $ServerboundPingRequestPacket$$Type): void
public "handleSelectTrade"(arg0: $ServerboundSelectTradePacket$$Type): void
public "handleRenameItem"(arg0: $ServerboundRenameItemPacket$$Type): void
public "handleUseItem"(arg0: $ServerboundUseItemPacket$$Type): void
public "handleSignUpdate"(arg0: $ServerboundSignUpdatePacket$$Type): void
public "handlePaddleBoat"(arg0: $ServerboundPaddleBoatPacket$$Type): void
public "handleEditBook"(arg0: $ServerboundEditBookPacket$$Type): void
public "handlePlayerAction"(arg0: $ServerboundPlayerActionPacket$$Type): void
public "handleSetCarriedItem"(arg0: $ServerboundSetCarriedItemPacket$$Type): void
public "handleContainerClose"(arg0: $ServerboundContainerClosePacket$$Type): void
public "handleChangeDifficulty"(arg0: $ServerboundChangeDifficultyPacket$$Type): void
public "handleCustomPayload"(arg0: $ServerboundCustomPayloadPacket$$Type): void
public "handlePlayerAbilities"(arg0: $ServerboundPlayerAbilitiesPacket$$Type): void
public "handleRecipeBookChangeSettingsPacket"(arg0: $ServerboundRecipeBookChangeSettingsPacket$$Type): void
public "handleTeleportToEntityPacket"(arg0: $ServerboundTeleportToEntityPacket$$Type): void
public "handleCustomCommandSuggestions"(arg0: $ServerboundCommandSuggestionPacket$$Type): void
public "handleRecipeBookSeenRecipePacket"(arg0: $ServerboundRecipeBookSeenRecipePacket$$Type): void
public "aboveGroundVehicleTickCount"(arg0: integer): void
public "handleContainerSlotStateChanged"(arg0: $ServerboundContainerSlotStateChangedPacket$$Type): void
public "handleConfigurationAcknowledged"(arg0: $ServerboundConfigurationAcknowledgedPacket$$Type): void
public "handleDebugSampleSubscription"(arg0: $ServerboundDebugSampleSubscriptionPacket$$Type): void
public "handler$ejc000$ftbquests$handleClientInformation"(packet: $ServerboundClientInformationPacket$$Type, ci: $CallbackInfo$$Type): void
public "handleClientInformation"(arg0: $ServerboundClientInformationPacket$$Type): void
public "aboveGroundTickCount"(arg0: integer): void
public "handleAcceptTeleportPacket"(arg0: $ServerboundAcceptTeleportationPacket$$Type): void
public "handleSetCommandBlock"(arg0: $ServerboundSetCommandBlockPacket$$Type): void
public "handleSeenAdvancements"(arg0: $ServerboundSeenAdvancementsPacket$$Type): void
public "ackBlockChangesUpTo"(arg0: integer): void
public "handleSetBeaconPacket"(arg0: $ServerboundSetBeaconPacket$$Type): void
public "handleSetJigsawBlock"(arg0: $ServerboundSetJigsawBlockPacket$$Type): void
public "handleClientCommand"(arg0: $ServerboundClientCommandPacket$$Type): void
public "handleContainerButtonClick"(arg0: $ServerboundContainerButtonClickPacket$$Type): void
public "handleEntityTagQuery"(arg0: $ServerboundEntityTagQueryPacket$$Type): void
public "handlePlayerCommand"(arg0: $ServerboundPlayerCommandPacket$$Type): void
public "handleSignedChatCommand"(arg0: $ServerboundChatCommandSignedPacket$$Type): void
public "handleChunkBatchReceived"(arg0: $ServerboundChunkBatchReceivedPacket$$Type): void
public "handleJigsawGenerate"(arg0: $ServerboundJigsawGeneratePacket$$Type): void
public "sendPlayerChatMessage"(arg0: $PlayerChatMessage$$Type, arg1: $ChatType$Bound$$Type): void
public "sendDisguisedChatMessage"(arg0: $Component$$Type, arg1: $ChatType$Bound$$Type): void
public "handleBlockEntityTagQuery"(arg0: $ServerboundBlockEntityTagQueryPacket$$Type): void
public "handleSetCreativeModeSlot"(arg0: $ServerboundSetCreativeModeSlotPacket$$Type): void
public "handleSetCommandMinecart"(arg0: $ServerboundSetCommandMinecartPacket$$Type): void
public "handleSetStructureBlock"(arg0: $ServerboundSetStructureBlockPacket$$Type): void
public "handleContainerClick"(arg0: $ServerboundContainerClickPacket$$Type): void
public "handleLockDifficulty"(arg0: $ServerboundLockDifficultyPacket$$Type): void
public "handleChatSessionUpdate"(arg0: $ServerboundChatSessionUpdatePacket$$Type): void
public "handleMovePlayer"(arg0: $ServerboundMovePlayerPacket$$Type): void
public "handleAnimate"(arg0: $ServerboundSwingPacket$$Type): void
public "handleMoveVehicle"(arg0: $ServerboundMoveVehiclePacket$$Type): void
public "handlePlaceRecipe"(arg0: $ServerboundPlaceRecipePacket$$Type): void
public "protocol"(): $ConnectionProtocol
public "send"(arg0: $Packet$$Type<(never)>): void
public "sendBundled"(...arg0: ($CustomPacketPayload$$Type)[]): void
public "sendBundled"(arg0: $Iterable$$Type<($CustomPacketPayload$$Type)>): void
public "onPacketError"(arg0: $Packet$$Type, arg1: $Exception$$Type): void
public "flow"(): $PacketFlow
get "remoteAddress"(): $SocketAddress
get "acceptingMessages"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerGamePacketListenerImpl$$Type = ($ServerGamePacketListenerImpl);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerGamePacketListenerImpl$$Original = $ServerGamePacketListenerImpl;}
declare module "net.minecraft.server.network.PlayerChunkSender" {
import {$LevelChunk$$Type} from "net.minecraft.world.level.chunk.LevelChunk"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"

export class $PlayerChunkSender {
static readonly "MIN_CHUNKS_PER_TICK": float
static readonly "MAX_CHUNKS_PER_TICK": float

constructor(arg0: boolean)

public "sendNextChunks"(arg0: $ServerPlayer$$Type): void
public "onChunkBatchReceivedByClient"(arg0: float): void
public "markChunkPendingToSend"(arg0: $LevelChunk$$Type): void
public "isPending"(arg0: long): boolean
public "dropChunk"(arg0: $ServerPlayer$$Type, arg1: $ChunkPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerChunkSender$$Type = ($PlayerChunkSender);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerChunkSender$$Original = $PlayerChunkSender;}
declare module "net.minecraft.server.network.ServerConnectionListener" {
import {$SocketAddress} from "java.net.SocketAddress"
import {$InetAddress$$Type} from "java.net.InetAddress"
import {$Supplier} from "java.util.function.Supplier"
import {$List} from "java.util.List"
import {$NioEventLoopGroup} from "io.netty.channel.nio.NioEventLoopGroup"
import {$EpollEventLoopGroup} from "io.netty.channel.epoll.EpollEventLoopGroup"
import {$Connection} from "net.minecraft.network.Connection"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"

export class $ServerConnectionListener {
 "running": boolean
readonly "server": $MinecraftServer
static readonly "SERVER_EVENT_GROUP": $Supplier<($NioEventLoopGroup)>
static readonly "SERVER_EPOLL_EVENT_GROUP": $Supplier<($EpollEventLoopGroup)>
readonly "connections": $List<($Connection)>

constructor(arg0: $MinecraftServer$$Type)

public "stop"(): void
public "tick"(): void
public "startMemoryChannel"(): $SocketAddress
public "getConnections"(): $List<($Connection)>
public "getServer"(): $MinecraftServer
public "startTcpServerListener"(arg0: $InetAddress$$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerConnectionListener$$Type = ($ServerConnectionListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerConnectionListener$$Original = $ServerConnectionListener;}
declare module "net.minecraft.server.network.ServerCommonPacketListenerImpl" {
import {$ServerCommonPacketListener$$Interface} from "net.minecraft.network.protocol.common.ServerCommonPacketListener"
import {$ServerboundClientInformationPacket$$Type} from "net.minecraft.network.protocol.common.ServerboundClientInformationPacket"
import {$ServerboundPongPacket$$Type} from "net.minecraft.network.protocol.common.ServerboundPongPacket"
import {$CustomPacketPayload$Type$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$CommonListenerCookie, $CommonListenerCookie$$Type} from "net.minecraft.server.network.CommonListenerCookie"
import {$ServerboundCookieResponsePacket$$Type} from "net.minecraft.network.protocol.cookie.ServerboundCookieResponsePacket"
import {$Exception$$Type} from "java.lang.Exception"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Set$$Type} from "java.util.Set"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$IServerCommonPacketListenerImpl$$Interface} from "xaero.pac.common.server.core.accessor.IServerCommonPacketListenerImpl"
import {$ReentrantBlockableEventLoop} from "net.minecraft.util.thread.ReentrantBlockableEventLoop"
import {$PacketFlow} from "net.minecraft.network.protocol.PacketFlow"
import {$CrashReport$$Type} from "net.minecraft.CrashReport"
import {$PacketSendListener$$Type} from "net.minecraft.network.PacketSendListener"
import {$CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$ServerboundKeepAlivePacket$$Type} from "net.minecraft.network.protocol.common.ServerboundKeepAlivePacket"
import {$DisconnectionDetails, $DisconnectionDetails$$Type} from "net.minecraft.network.DisconnectionDetails"
import {$ClientInformation$$Type} from "net.minecraft.server.level.ClientInformation"
import {$ServerboundCustomPayloadPacket$$Type} from "net.minecraft.network.protocol.common.ServerboundCustomPayloadPacket"
import {$Operation$$Type} from "com.llamalad7.mixinextras.injector.wrapoperation.Operation"
import {$ConnectionType, $ConnectionType$$Type} from "net.neoforged.neoforge.network.connection.ConnectionType"
import {$ConnectionProtocol} from "net.minecraft.network.ConnectionProtocol"
import {$ServerCommonNetworkHandlerAccessor$$Interface} from "net.fabricmc.fabric.mixin.networking.accessor.ServerCommonNetworkHandlerAccessor"
import {$Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$GameProfile} from "com.mojang.authlib.GameProfile"
import {$Connection, $Connection$$Type} from "net.minecraft.network.Connection"
import {$ServerboundResourcePackPacket$$Type} from "net.minecraft.network.protocol.common.ServerboundResourcePackPacket"
import {$CrashReportCategory$$Type} from "net.minecraft.CrashReportCategory"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"

export class $ServerCommonPacketListenerImpl implements $ServerCommonPacketListener$$Interface, $IServerCommonPacketListenerImpl$$Interface, $ServerCommonNetworkHandlerAccessor$$Interface {
static readonly "LATENCY_CHECK_INTERVAL": integer
readonly "server": $MinecraftServer
static readonly "DISCONNECT_UNEXPECTED_QUERY": $Component
readonly "connection": $Connection
 "connectionType": $ConnectionType

constructor(arg0: $MinecraftServer$$Type, arg1: $Connection$$Type, arg2: $CommonListenerCookie$$Type)

public "getConnection"(): $Connection
public "getOwner"(): $GameProfile
public "disconnect"(arg0: $DisconnectionDetails$$Type): void
public "disconnect"(arg0: $Component$$Type): void
public "onDisconnect"(arg0: $DisconnectionDetails$$Type): void
/**
 * 
 * @deprecated
 */
public "createCookie"(arg0: $ClientInformation$$Type): $CommonListenerCookie
public "createCookie"(arg0: $ClientInformation$$Type, arg1: $ConnectionType$$Type): $CommonListenerCookie
public "handlePong"(arg0: $ServerboundPongPacket$$Type): void
public "latency"(): integer
public "send"(arg0: $Packet$$Type<(never)>): void
public "send"(arg0: $Packet$$Type<(never)>, arg1: $PacketSendListener$$Type): void
public "playerProfile"(): $GameProfile
public "getXaero_OPAC_connection"(): $Connection
public "handleCustomPayload"(arg0: $ServerboundCustomPayloadPacket$$Type): void
public "getMainThreadEventLoop"(): $ReentrantBlockableEventLoop<(never)>
public "isSingleplayerOwner"(): boolean
public "resumeFlushing"(): void
public "suspendFlushing"(): void
public "constant$zbb000$connectivity$playTimeout"(arg0: long): long
public "getConnectionType"(): $ConnectionType
public "getServer"(): $MinecraftServer
public "handleCookieResponse"(arg0: $ServerboundCookieResponsePacket$$Type): void
public "handleResourcePackResponse"(arg0: $ServerboundResourcePackPacket$$Type): void
public "keepConnectionAlive"(): void
public "handleKeepAlive"(arg0: $ServerboundKeepAlivePacket$$Type): void
public "wrapOperation$ela000$fabric_networking_api_v1$onCustomPayloadUnregisterPacket"(arg0: $Connection$$Type, arg1: $Set$$Type, arg2: $Operation$$Type): void
public "wrapOperation$ela000$fabric_networking_api_v1$onCustomPayloadRegisterPacket"(arg0: $Connection$$Type, arg1: $Set$$Type, arg2: $Operation$$Type): void
public "handleClientInformation"(arg0: $ServerboundClientInformationPacket$$Type): void
public "onPacketError"(arg0: $Packet$$Type, arg1: $Exception$$Type): void
public "send"(arg0: $CustomPacketPayload$$Type): void
public "send"(arg0: $CustomPacketPayload$$Type, arg1: $PacketSendListener$$Type): void
public "flow"(): $PacketFlow
public "hasChannel"(arg0: $CustomPacketPayload$Type$$Type<(never)>): boolean
public "hasChannel"(arg0: $CustomPacketPayload$$Type): boolean
public "hasChannel"(arg0: $ResourceLocation$$Type): boolean
public "protocol"(): $ConnectionProtocol
public "fillListenerSpecificCrashDetails"(arg0: $CrashReport$$Type, arg1: $CrashReportCategory$$Type): void
public "fillCrashReport"(arg0: $CrashReport$$Type): void
public "createDisconnectionInfo"(arg0: $Component$$Type, arg1: $Throwable$$Type): $DisconnectionDetails
public "isAcceptingMessages"(): boolean
public "shouldHandleMessage"(arg0: $Packet$$Type<(never)>): boolean
get "owner"(): $GameProfile
get "xaero_OPAC_connection"(): $Connection
get "mainThreadEventLoop"(): $ReentrantBlockableEventLoop<(never)>
get "singleplayerOwner"(): boolean
get "acceptingMessages"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerCommonPacketListenerImpl$$Type = ($ServerCommonPacketListenerImpl);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerCommonPacketListenerImpl$$Original = $ServerCommonPacketListenerImpl;}
declare module "net.minecraft.server.network.ConfigurationTask$Type" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Record} from "java.lang.Record"

export class $ConfigurationTask$Type extends $Record {
constructor(arg0: $ResourceLocation$$Type)
constructor(id: StringJS)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigurationTask$Type$$Type = ({"id"?: StringJS}) | ([id?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfigurationTask$Type$$Original = $ConfigurationTask$Type;}
declare module "net.minecraft.server.network.FilteredText" {
import {$FilterMask, $FilterMask$$Type} from "net.minecraft.network.chat.FilterMask"
import {$Record} from "java.lang.Record"

export class $FilteredText extends $Record {
static readonly "EMPTY": $FilteredText

constructor(arg0: StringJS, arg1: $FilterMask$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "mask"(): $FilterMask
public "raw"(): StringJS
public "isFiltered"(): boolean
public "filtered"(): StringJS
public static "passThrough"(arg0: StringJS): $FilteredText
public "filteredOrEmpty"(): StringJS
public static "fullyFiltered"(arg0: StringJS): $FilteredText
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilteredText$$Type = ({"mask"?: $FilterMask$$Type, "raw"?: StringJS}) | ([mask?: $FilterMask$$Type, raw?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FilteredText$$Original = $FilteredText;}
