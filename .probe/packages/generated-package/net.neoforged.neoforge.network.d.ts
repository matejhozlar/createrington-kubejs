declare module "net.neoforged.neoforge.network.handling.IPayloadHandler" {
import {$IPayloadContext, $IPayloadContext$$Type} from "net.neoforged.neoforge.network.handling.IPayloadContext"
import {$CustomPacketPayload, $CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"

export interface $IPayloadHandler$$Interface<T extends $CustomPacketPayload> {

(arg0: T, arg1: $IPayloadContext): void
}

export class $IPayloadHandler<T extends $CustomPacketPayload> implements $IPayloadHandler$$Interface {
 "handle"(arg0: T, arg1: $IPayloadContext$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPayloadHandler$$Type<T> = ((arg0: T, arg1: $IPayloadContext) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPayloadHandler$$Original<T> = $IPayloadHandler<(T)>;}
declare module "net.neoforged.neoforge.network.IContainerFactory" {
import {$MenuType$MenuSupplier$$Interface} from "net.minecraft.world.inventory.MenuType$MenuSupplier"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"

export interface $IContainerFactory$$Interface<T extends $AbstractContainerMenu> extends $MenuType$MenuSupplier$$Interface<(T)> {

(arg0: integer, arg1: $Inventory, arg2: $RegistryFriendlyByteBuf): T
}

export class $IContainerFactory<T extends $AbstractContainerMenu> implements $IContainerFactory$$Interface {
 "create"(arg0: integer, arg1: $Inventory$$Type, arg2: $RegistryFriendlyByteBuf$$Type): T
 "create"(arg0: integer, arg1: $Inventory$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IContainerFactory$$Type<T> = ((arg0: integer, arg1: $Inventory, arg2: $RegistryFriendlyByteBuf) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IContainerFactory$$Original<T> = $IContainerFactory<(T)>;}
declare module "net.neoforged.neoforge.network.registration.HandlerThread" {
import {$Enum} from "java.lang.Enum"

export class $HandlerThread extends $Enum<($HandlerThread)> {
static readonly "NETWORK": $HandlerThread
static readonly "MAIN": $HandlerThread

public static "values"(): ($HandlerThread)[]
public static "valueOf"(arg0: StringJS): $HandlerThread
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HandlerThread$$Type = (("main") | ("network"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HandlerThread$$Original = $HandlerThread;}
declare module "net.neoforged.neoforge.network.event.RegisterConfigurationTasksEvent" {
import {$ConfigurationTask, $ConfigurationTask$$Type} from "net.minecraft.server.network.ConfigurationTask"
import {$Queue} from "java.util.Queue"
import {$Event} from "net.neoforged.bus.api.Event"
import {$ServerConfigurationPacketListener, $ServerConfigurationPacketListener$$Type} from "net.minecraft.network.protocol.configuration.ServerConfigurationPacketListener"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"

export class $RegisterConfigurationTasksEvent extends $Event implements $IModBusEvent$$Interface {
constructor(arg0: $ServerConfigurationPacketListener$$Type)

public "register"(arg0: $ConfigurationTask$$Type): void
public "getListener"(): $ServerConfigurationPacketListener
public "getConfigurationTasks"(): $Queue<($ConfigurationTask)>
get "listener"(): $ServerConfigurationPacketListener
get "configurationTasks"(): $Queue<($ConfigurationTask)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterConfigurationTasksEvent$$Type = ($RegisterConfigurationTasksEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterConfigurationTasksEvent$$Original = $RegisterConfigurationTasksEvent;}
declare module "net.neoforged.neoforge.network.connection.ConnectionType" {
import {$Enum} from "java.lang.Enum"

export class $ConnectionType extends $Enum<($ConnectionType)> {
static readonly "OTHER": $ConnectionType
static readonly "NEOFORGE": $ConnectionType

public static "values"(): ($ConnectionType)[]
public static "valueOf"(arg0: StringJS): $ConnectionType
public "isOther"(): boolean
public "isNeoForge"(): boolean
get "other"(): boolean
get "neoForge"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConnectionType$$Type = (("neoforge") | ("other"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConnectionType$$Original = $ConnectionType;}
declare module "net.neoforged.neoforge.network.event.RegisterPayloadHandlersEvent" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"
import {$PayloadRegistrar} from "net.neoforged.neoforge.network.registration.PayloadRegistrar"

export class $RegisterPayloadHandlersEvent extends $Event implements $IModBusEvent$$Interface {
constructor()

public "registrar"(arg0: StringJS): $PayloadRegistrar
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterPayloadHandlersEvent$$Type = ($RegisterPayloadHandlersEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterPayloadHandlersEvent$$Original = $RegisterPayloadHandlersEvent;}
declare module "net.neoforged.neoforge.network.bundle.PacketAndPayloadAcceptor" {
import {$ClientCommonPacketListener} from "net.minecraft.network.protocol.common.ClientCommonPacketListener"
import {$Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $PacketAndPayloadAcceptor<L extends $ClientCommonPacketListener> {
constructor(arg0: $Consumer$$Type<($Packet<(L)>)>)

public "accept"(arg0: $Packet$$Type<(L)>): $PacketAndPayloadAcceptor<(L)>
public "accept"(arg0: $CustomPacketPayload$$Type): $PacketAndPayloadAcceptor<(L)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PacketAndPayloadAcceptor$$Type<L> = ($PacketAndPayloadAcceptor<(L)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PacketAndPayloadAcceptor$$Original<L> = $PacketAndPayloadAcceptor<(L)>;}
declare module "net.neoforged.neoforge.network.registration.PayloadRegistrar" {
import {$StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$HandlerThread$$Type} from "net.neoforged.neoforge.network.registration.HandlerThread"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$CustomPacketPayload$Type$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$CustomPacketPayload} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$IPayloadHandler$$Type} from "net.neoforged.neoforge.network.handling.IPayloadHandler"

export class $PayloadRegistrar {
constructor(arg0: StringJS)

public "commonBidirectional"<T extends $CustomPacketPayload>(arg0: $CustomPacketPayload$Type$$Type<(T)>, arg1: $StreamCodec$$Type<($FriendlyByteBuf$$Type), (T)>, arg2: $IPayloadHandler$$Type<(T)>): $PayloadRegistrar
public "optional"(): $PayloadRegistrar
public "commonToClient"<T extends $CustomPacketPayload>(arg0: $CustomPacketPayload$Type$$Type<(T)>, arg1: $StreamCodec$$Type<($FriendlyByteBuf$$Type), (T)>, arg2: $IPayloadHandler$$Type<(T)>): $PayloadRegistrar
public "commonToServer"<T extends $CustomPacketPayload>(arg0: $CustomPacketPayload$Type$$Type<(T)>, arg1: $StreamCodec$$Type<($FriendlyByteBuf$$Type), (T)>, arg2: $IPayloadHandler$$Type<(T)>): $PayloadRegistrar
public "configurationToClient"<T extends $CustomPacketPayload>(arg0: $CustomPacketPayload$Type$$Type<(T)>, arg1: $StreamCodec$$Type<($FriendlyByteBuf$$Type), (T)>, arg2: $IPayloadHandler$$Type<(T)>): $PayloadRegistrar
public "playToClient"<T extends $CustomPacketPayload>(arg0: $CustomPacketPayload$Type$$Type<(T)>, arg1: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>, arg2: $IPayloadHandler$$Type<(T)>): $PayloadRegistrar
public "playBidirectional"<T extends $CustomPacketPayload>(arg0: $CustomPacketPayload$Type$$Type<(T)>, arg1: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>, arg2: $IPayloadHandler$$Type<(T)>): $PayloadRegistrar
public "playToServer"<T extends $CustomPacketPayload>(arg0: $CustomPacketPayload$Type$$Type<(T)>, arg1: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>, arg2: $IPayloadHandler$$Type<(T)>): $PayloadRegistrar
public "versioned"(arg0: StringJS): $PayloadRegistrar
public "executesOn"(arg0: $HandlerThread$$Type): $PayloadRegistrar
public "configurationBidirectional"<T extends $CustomPacketPayload>(arg0: $CustomPacketPayload$Type$$Type<(T)>, arg1: $StreamCodec$$Type<($FriendlyByteBuf$$Type), (T)>, arg2: $IPayloadHandler$$Type<(T)>): $PayloadRegistrar
public "configurationToServer"<T extends $CustomPacketPayload>(arg0: $CustomPacketPayload$Type$$Type<(T)>, arg1: $StreamCodec$$Type<($FriendlyByteBuf$$Type), (T)>, arg2: $IPayloadHandler$$Type<(T)>): $PayloadRegistrar
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PayloadRegistrar$$Type = ($PayloadRegistrar);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PayloadRegistrar$$Original = $PayloadRegistrar;}
declare module "net.neoforged.neoforge.network.handling.IPayloadContext" {
import {$PacketFlow} from "net.minecraft.network.protocol.PacketFlow"
import {$ConfigurationTask$Type$$Type} from "net.minecraft.server.network.ConfigurationTask$Type"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$ChannelHandlerContext} from "io.netty.channel.ChannelHandlerContext"
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$ConnectionProtocol} from "net.minecraft.network.ConnectionProtocol"
import {$Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ICommonPacketListener} from "net.neoforged.neoforge.common.extensions.ICommonPacketListener"
import {$Connection} from "net.minecraft.network.Connection"

export interface $IPayloadContext$$Interface {
}

export class $IPayloadContext implements $IPayloadContext$$Interface {
 "disconnect"(arg0: $Component$$Type): void
 "channelHandlerContext"(): $ChannelHandlerContext
 "handle"(arg0: $Packet$$Type<(never)>): void
 "handle"(arg0: $CustomPacketPayload$$Type): void
 "protocol"(): $ConnectionProtocol
 "connection"(): $Connection
 "listener"(): $ICommonPacketListener
 "finishCurrentTask"(arg0: $ConfigurationTask$Type$$Type): void
 "reply"(arg0: $CustomPacketPayload$$Type): void
 "enqueueWork"(arg0: $Runnable$$Type): $CompletableFuture<(void)>
 "enqueueWork"<T>(arg0: $Supplier$$Type<(T)>): $CompletableFuture<(T)>
 "player"(): $Player
 "flow"(): $PacketFlow
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPayloadContext$$Type = ($IPayloadContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPayloadContext$$Original = $IPayloadContext;}
