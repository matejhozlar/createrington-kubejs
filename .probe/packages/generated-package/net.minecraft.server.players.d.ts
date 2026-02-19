declare module "net.minecraft.server.players.ServerOpListEntry" {
import {$StoredUserEntry} from "net.minecraft.server.players.StoredUserEntry"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"

export class $ServerOpListEntry extends $StoredUserEntry<($GameProfile)> {
constructor(arg0: $GameProfile$$Type, arg1: integer, arg2: boolean)
constructor(arg0: $JsonObject$$Type)

public "getLevel"(): integer
public "getBypassesPlayerLimit"(): boolean
get "level"(): integer
get "bypassesPlayerLimit"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerOpListEntry$$Type = ($ServerOpListEntry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerOpListEntry$$Original = $ServerOpListEntry;}
declare module "net.minecraft.server.players.UserBanList" {
import {$File$$Type} from "java.io.File"
import {$StoredUserList} from "net.minecraft.server.players.StoredUserList"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$UserBanListEntry} from "net.minecraft.server.players.UserBanListEntry"

export class $UserBanList extends $StoredUserList<($GameProfile), ($UserBanListEntry)> {
constructor(arg0: $File$$Type)

public "isBanned"(arg0: $GameProfile$$Type): boolean
public "getUserList"(): (StringJS)[]
get "userList"(): (StringJS)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UserBanList$$Type = ($UserBanList);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UserBanList$$Original = $UserBanList;}
declare module "net.minecraft.server.players.PlayerList" {
import {$PlayerAdvancements} from "net.minecraft.server.PlayerAdvancements"
import {$SocketAddress$$Type} from "java.net.SocketAddress"
import {$Optional} from "java.util.Optional"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$UUID$$Type} from "java.util.UUID"
import {$PlayerChatMessage$$Type} from "net.minecraft.network.chat.PlayerChatMessage"
import {$List} from "java.util.List"
import {$LayeredRegistryAccess$$Type} from "net.minecraft.core.LayeredRegistryAccess"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ServerGamePacketListenerImpl$$Type} from "net.minecraft.server.network.ServerGamePacketListenerImpl"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$PlayerListAccess$$Interface} from "dev.ftb.mods.ftbessentials.mixin.PlayerListAccess"
import {$CommonListenerCookie$$Type} from "net.minecraft.server.network.CommonListenerCookie"
import {$PlayerListAccessor$$Interface} from "com.teamresourceful.resourcefulconfig.mixins.common.PlayerListAccessor"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Function$$Type} from "java.util.function.Function"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$PlayerDataStorage$$Type} from "net.minecraft.world.level.storage.PlayerDataStorage"
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$Map} from "java.util.Map"
import {$IpBanList} from "net.minecraft.server.players.IpBanList"
import {$File} from "java.io.File"
import {$ServerStatsCounter} from "net.minecraft.stats.ServerStatsCounter"
import {$UserWhiteList} from "net.minecraft.server.players.UserWhiteList"
import {$Entity$RemovalReason$$Type} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$UserBanList} from "net.minecraft.server.players.UserBanList"
import {$ClientInformation$$Type} from "net.minecraft.server.level.ClientInformation"
import {$RegistryLayer$$Type} from "net.minecraft.server.RegistryLayer"
import {$ServerOpList} from "net.minecraft.server.players.ServerOpList"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$Connection$$Type} from "net.minecraft.network.Connection"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"
import {$ChatType$Bound$$Type} from "net.minecraft.network.chat.ChatType$Bound"

export class $PlayerList implements $PlayerListAccessor$$Interface, $PlayerListAccess$$Interface {
static readonly "WHITELIST_FILE": $File
static readonly "USERBANLIST_FILE": $File
static readonly "IPBANLIST_FILE": $File
static readonly "OPLIST_FILE": $File
static readonly "CHAT_FILTERED_FULL": $Component
static readonly "DUPLICATE_LOGIN_DISCONNECT_MESSAGE": $Component

constructor(arg0: $MinecraftServer$$Type, arg1: $LayeredRegistryAccess$$Type<($RegistryLayer$$Type)>, arg2: $PlayerDataStorage$$Type, arg3: integer)

public "getPlayerForLogin"(arg0: $GameProfile$$Type, arg1: $ClientInformation$$Type): $ServerPlayer
public "placeNewPlayer"(arg0: $Connection$$Type, arg1: $ServerPlayer$$Type, arg2: $CommonListenerCookie$$Type): void
public "canPlayerLogin"(arg0: $SocketAddress$$Type, arg1: $GameProfile$$Type): $Component
public "respawn"(arg0: $ServerPlayer$$Type, arg1: boolean, arg2: $Entity$RemovalReason$$Type): $ServerPlayer
public "getServer"(): $MinecraftServer
public "remove"(arg0: $ServerPlayer$$Type): void
public "load"(arg0: $ServerPlayer$$Type): $Optional<($CompoundTag)>
public "op"(arg0: $GameProfile$$Type): void
public "removeAll"(): void
public "broadcast"(arg0: $Player$$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: $ResourceKey$$Type<($Level)>, arg6: $Packet$$Type<(never)>): void
public "tick"(): void
public "setViewDistance"(arg0: integer): void
public "broadcastSystemToAllExceptTeam"(arg0: $Player$$Type, arg1: $Component$$Type): void
public "broadcastChatMessage"(arg0: $PlayerChatMessage$$Type, arg1: $CommandSourceStack$$Type, arg2: $ChatType$Bound$$Type): void
public "broadcastChatMessage"(arg0: $PlayerChatMessage$$Type, arg1: $ServerPlayer$$Type, arg2: $ChatType$Bound$$Type): void
public "getPlayerAdvancements"(arg0: $ServerPlayer$$Type): $PlayerAdvancements
public "broadcastSystemMessage"(arg0: $Component$$Type, arg1: $Function$$Type<($ServerPlayer), ($Component$$Type)>, arg2: boolean): void
public "broadcastSystemMessage"(arg0: $Component$$Type, arg1: boolean): void
public "broadcastSystemToTeam"(arg0: $Player$$Type, arg1: $Component$$Type): void
public "sendPlayerPermissionLevel"(arg0: $ServerPlayer$$Type): void
public "sendActivePlayerEffects"(arg0: $ServerPlayer$$Type): void
public "getPlayerStats"(arg0: $Player$$Type): $ServerStatsCounter
public "broadcastAll"(arg0: $Packet$$Type<(never)>): void
public "broadcastAll"(arg0: $Packet$$Type<(never)>, arg1: $ResourceKey$$Type<($Level)>): void
public "sendAllPlayerInfo"(arg0: $ServerPlayer$$Type): void
public "sendActiveEffects"(arg0: $LivingEntity$$Type, arg1: $ServerGamePacketListenerImpl$$Type): void
public "isOp"(arg0: $GameProfile$$Type): boolean
public "handler$bog000$vmod$vanishmod$onBroadcast"(arg0: $Player$$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: $ResourceKey$$Type, arg6: $Packet$$Type, arg7: $CallbackInfo$$Type): void
public "getSimulationDistance"(): integer
public "getViewDistance"(): integer
public "saveAll"(): void
public "getPlayers"(): $List<($ServerPlayer)>
public "sendLevelInfo"(arg0: $ServerPlayer$$Type, arg1: $ServerLevel$$Type): void
public "getPlayer"(arg0: $UUID$$Type): $ServerPlayer
public "getBans"(): $UserBanList
public "getStats"(): $Map
public "getPlayerNamesArray"(): (StringJS)[]
public "addWorldborderListener"(arg0: $ServerLevel$$Type): void
public "getSingleplayerData"(): $CompoundTag
public "getOps"(): $ServerOpList
public "isAllowCommandsForAllPlayers"(): boolean
public "getPlayerByName"(arg0: StringJS): $ServerPlayer
public "getWhiteList"(): $UserWhiteList
public "isWhiteListed"(arg0: $GameProfile$$Type): boolean
public "getPlayerCount"(): integer
public "getMaxPlayers"(): integer
public "reloadResources"(): void
public "setSimulationDistance"(arg0: integer): void
public "setAllowCommandsForAllPlayers"(arg0: boolean): void
public "deop"(arg0: $GameProfile$$Type): void
public "reloadWhiteList"(): void
public "isUsingWhitelist"(): boolean
public "setMaxPlayers"(arg0: integer): void
public "setUsingWhiteList"(arg0: boolean): void
public "getWhiteListNames"(): (StringJS)[]
public "getPlayersWithAddress"(arg0: StringJS): $List<($ServerPlayer)>
public "canBypassPlayerLimit"(arg0: $GameProfile$$Type): boolean
public "handler$bog000$vmod$vanishmod$onSendJoinMessage"(arg0: $Connection$$Type, arg1: $ServerPlayer$$Type, arg2: $CommonListenerCookie$$Type, arg3: $CallbackInfo$$Type): void
public "getIpBans"(): $IpBanList
public "getOpNames"(): (StringJS)[]
public "disconnectAllPlayersWithProfile"(arg0: $GameProfile$$Type): boolean
get "server"(): $MinecraftServer
set "viewDistance"(value: integer)
get "simulationDistance"(): integer
get "viewDistance"(): integer
get "players"(): $List<($ServerPlayer)>
get "bans"(): $UserBanList
get "stats"(): $Map
get "playerNamesArray"(): (StringJS)[]
get "singleplayerData"(): $CompoundTag
get "ops"(): $ServerOpList
get "allowCommandsForAllPlayers"(): boolean
get "whiteList"(): $UserWhiteList
get "playerCount"(): integer
get "maxPlayers"(): integer
set "simulationDistance"(value: integer)
set "allowCommandsForAllPlayers"(value: boolean)
get "usingWhitelist"(): boolean
set "maxPlayers"(value: integer)
set "usingWhiteList"(value: boolean)
get "whiteListNames"(): (StringJS)[]
get "ipBans"(): $IpBanList
get "opNames"(): (StringJS)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerList$$Type = ($PlayerList);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerList$$Original = $PlayerList;}
declare module "net.minecraft.server.players.UserBanListEntry" {
import {$BanListEntry} from "net.minecraft.server.players.BanListEntry"
import {$SimpleDateFormat} from "java.text.SimpleDateFormat"
import {$Date$$Type} from "java.util.Date"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$Component} from "net.minecraft.network.chat.Component"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"

export class $UserBanListEntry extends $BanListEntry<($GameProfile)> {
static readonly "DATE_FORMAT": $SimpleDateFormat
static readonly "EXPIRES_NEVER": StringJS

constructor(arg0: $JsonObject$$Type)
constructor(arg0: $GameProfile$$Type, arg1: $Date$$Type, arg2: StringJS, arg3: $Date$$Type, arg4: StringJS)
constructor(arg0: $GameProfile$$Type)

public "getDisplayName"(): $Component
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UserBanListEntry$$Type = ($UserBanListEntry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UserBanListEntry$$Original = $UserBanListEntry;}
declare module "net.minecraft.server.players.UserWhiteListEntry" {
import {$StoredUserEntry} from "net.minecraft.server.players.StoredUserEntry"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"

export class $UserWhiteListEntry extends $StoredUserEntry<($GameProfile)> {
constructor(arg0: $GameProfile$$Type)
constructor(arg0: $JsonObject$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UserWhiteListEntry$$Type = ($UserWhiteListEntry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UserWhiteListEntry$$Original = $UserWhiteListEntry;}
declare module "net.minecraft.server.players.UserWhiteList" {
import {$UserWhiteListEntry} from "net.minecraft.server.players.UserWhiteListEntry"
import {$File$$Type} from "java.io.File"
import {$StoredUserList} from "net.minecraft.server.players.StoredUserList"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"

export class $UserWhiteList extends $StoredUserList<($GameProfile), ($UserWhiteListEntry)> {
constructor(arg0: $File$$Type)

public "isWhiteListed"(arg0: $GameProfile$$Type): boolean
public "getUserList"(): (StringJS)[]
get "userList"(): (StringJS)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UserWhiteList$$Type = ($UserWhiteList);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UserWhiteList$$Original = $UserWhiteList;}
declare module "net.minecraft.server.players.StoredUserEntry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $StoredUserEntry<T> {
constructor(arg0: T)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StoredUserEntry$$Type<T> = ($StoredUserEntry<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StoredUserEntry$$Original<T> = $StoredUserEntry<(T)>;}
declare module "net.minecraft.server.players.GameProfileCache" {
import {$Map} from "java.util.Map"
import {$File$$Type} from "java.io.File"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$Optional} from "java.util.Optional"
import {$GameProfileCache$GameProfileInfo} from "net.minecraft.server.players.GameProfileCache$GameProfileInfo"
import {$UUID$$Type} from "java.util.UUID"
import {$List} from "java.util.List"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$GameProfileRepository$$Type} from "com.mojang.authlib.GameProfileRepository"

export class $GameProfileCache {
readonly "profilesByName": $Map<(StringJS), ($GameProfileCache$GameProfileInfo)>

constructor(arg0: $GameProfileRepository$$Type, arg1: $File$$Type)

public "get"(arg0: StringJS): $Optional<($GameProfile)>
public "get"(arg0: $UUID$$Type): $Optional<($GameProfile)>
public "load"(): $List<($GameProfileCache$GameProfileInfo)>
public "add"(arg0: $GameProfile$$Type): void
public "save"(): void
public "getAsync"(arg0: StringJS): $CompletableFuture<($Optional<($GameProfile)>)>
public "setExecutor"(arg0: $Executor$$Type): void
public "clearExecutor"(): void
public static "setUsesAuthentication"(arg0: boolean): void
set "executor"(value: $Executor$$Type)
set "usesAuthentication"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameProfileCache$$Type = ($GameProfileCache);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GameProfileCache$$Original = $GameProfileCache;}
declare module "net.minecraft.server.players.StoredUserList" {
import {$Collection} from "java.util.Collection"
import {$File, $File$$Type} from "java.io.File"
import {$StoredUserEntry, $StoredUserEntry$$Type} from "net.minecraft.server.players.StoredUserEntry"

export class $StoredUserList<K, V extends $StoredUserEntry<(object)>> {
constructor(arg0: $File$$Type)

public "remove"(arg0: K): void
public "remove"(arg0: $StoredUserEntry$$Type<(K)>): void
public "get"(arg0: K): V
public "load"(): void
public "isEmpty"(): boolean
public "add"(arg0: V): void
public "save"(): void
public "getFile"(): $File
public "getEntries"(): $Collection<(V)>
public "getUserList"(): (StringJS)[]
get "empty"(): boolean
get "file"(): $File
get "entries"(): $Collection<(V)>
get "userList"(): (StringJS)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StoredUserList$$Type<K, V> = ($StoredUserList<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StoredUserList$$Original<K, V> = $StoredUserList<(K), (V)>;}
declare module "net.minecraft.server.players.GameProfileCache$GameProfileInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $GameProfileCache$GameProfileInfo {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameProfileCache$GameProfileInfo$$Type = ($GameProfileCache$GameProfileInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GameProfileCache$GameProfileInfo$$Original = $GameProfileCache$GameProfileInfo;}
declare module "net.minecraft.server.players.IpBanListEntry" {
import {$BanListEntry} from "net.minecraft.server.players.BanListEntry"
import {$SimpleDateFormat} from "java.text.SimpleDateFormat"
import {$Date$$Type} from "java.util.Date"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$Component} from "net.minecraft.network.chat.Component"

export class $IpBanListEntry extends $BanListEntry<(StringJS)> {
static readonly "DATE_FORMAT": $SimpleDateFormat
static readonly "EXPIRES_NEVER": StringJS

constructor(arg0: $JsonObject$$Type)
constructor(arg0: StringJS, arg1: $Date$$Type, arg2: StringJS, arg3: $Date$$Type, arg4: StringJS)
constructor(arg0: StringJS)

public "getDisplayName"(): $Component
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IpBanListEntry$$Type = ($IpBanListEntry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IpBanListEntry$$Original = $IpBanListEntry;}
declare module "net.minecraft.server.players.IpBanList" {
import {$File$$Type} from "java.io.File"
import {$SocketAddress$$Type} from "java.net.SocketAddress"
import {$StoredUserList} from "net.minecraft.server.players.StoredUserList"
import {$IpBanListEntry} from "net.minecraft.server.players.IpBanListEntry"

export class $IpBanList extends $StoredUserList<(StringJS), ($IpBanListEntry)> {
constructor(arg0: $File$$Type)

public "get"(arg0: $SocketAddress$$Type): $IpBanListEntry
public "isBanned"(arg0: StringJS): boolean
public "isBanned"(arg0: $SocketAddress$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IpBanList$$Type = ($IpBanList);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IpBanList$$Original = $IpBanList;}
declare module "net.minecraft.server.players.BanListEntry" {
import {$SimpleDateFormat} from "java.text.SimpleDateFormat"
import {$StoredUserEntry} from "net.minecraft.server.players.StoredUserEntry"
import {$Date, $Date$$Type} from "java.util.Date"
import {$Component} from "net.minecraft.network.chat.Component"

export class $BanListEntry<T> extends $StoredUserEntry<(T)> {
static readonly "DATE_FORMAT": $SimpleDateFormat
static readonly "EXPIRES_NEVER": StringJS

constructor(arg0: T, arg1: $Date$$Type, arg2: StringJS, arg3: $Date$$Type, arg4: StringJS)

public "getReason"(): StringJS
public "getDisplayName"(): $Component
public "getSource"(): StringJS
public "getExpires"(): $Date
public "getCreated"(): $Date
get "reason"(): StringJS
get "displayName"(): $Component
get "source"(): StringJS
get "expires"(): $Date
get "created"(): $Date
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BanListEntry$$Type<T> = ($BanListEntry<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BanListEntry$$Original<T> = $BanListEntry<(T)>;}
declare module "net.minecraft.server.players.ServerOpList" {
import {$File$$Type} from "java.io.File"
import {$ServerOpListEntry} from "net.minecraft.server.players.ServerOpListEntry"
import {$StoredUserList} from "net.minecraft.server.players.StoredUserList"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"

export class $ServerOpList extends $StoredUserList<($GameProfile), ($ServerOpListEntry)> {
constructor(arg0: $File$$Type)

public "getUserList"(): (StringJS)[]
public "canBypassPlayerLimit"(arg0: $GameProfile$$Type): boolean
get "userList"(): (StringJS)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerOpList$$Type = ($ServerOpList);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerOpList$$Original = $ServerOpList;}
