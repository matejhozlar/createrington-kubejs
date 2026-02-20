declare module "xaero.lib.common.config.channel.ConfigChannel" {
import {$SingleConfigManagerIO} from "xaero.lib.common.config.single.io.SingleConfigManagerIO"
import {$ConfigOptionManager} from "xaero.lib.common.config.option.ConfigOptionManager"
import {$BuiltInConfigChannelPermissions, $BuiltInConfigChannelPermissions$$Type} from "xaero.lib.common.permission.config.channel.BuiltInConfigChannelPermissions"
import {$ServerConfigManager} from "xaero.lib.common.config.server.ServerConfigManager"
import {$ServerConfigChannelSynchronizer} from "xaero.lib.common.config.server.sync.ServerConfigChannelSynchronizer"
import {$ClientConfigManager} from "xaero.lib.client.config.ClientConfigManager"
import {$ConfigOptionUITypeManager} from "xaero.lib.client.config.option.ui.ConfigOptionUITypeManager"
import {$ConfigProfileManagerIO} from "xaero.lib.common.config.profile.io.ConfigProfileManagerIO"
import {$IConfigChannelClientRegistryHandler} from "xaero.lib.client.config.channel.register.handler.IConfigChannelClientRegistryHandler"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ClientConfigOptionManager} from "xaero.lib.client.config.option.ClientConfigOptionManager"
import {$IConfigChannelCommonRegistryHandler} from "xaero.lib.common.config.channel.register.handler.IConfigChannelCommonRegistryHandler"
import {$Config} from "xaero.lib.common.config.Config"
import {$SingleConfigManager} from "xaero.lib.common.config.single.SingleConfigManager"
import {$ClientConfigChannelSynchronizer} from "xaero.lib.client.config.sync.ClientConfigChannelSynchronizer"
import {$Logger} from "org.apache.logging.log4j.Logger"

export class $ConfigChannel {
readonly "logger": $Logger

public "getId"(): $ResourceLocation
public "getPrimaryClientConfigManagerIO"(): $SingleConfigManagerIO<($Config)>
public "getPrimaryClientConfigManager"(): $SingleConfigManager<($Config)>
public "getPrimaryCommonConfigManager"(): $SingleConfigManager<($Config)>
public "postLoad"(): void
public "setBuiltInPermissions"(arg0: $BuiltInConfigChannelPermissions$$Type): void
public "getPrimaryCommonConfigManagerIO"(): $SingleConfigManagerIO<($Config)>
public "getClientConfigSynchronizer"(): $ClientConfigChannelSynchronizer
public "getConfigOptionUITypeManager"(): $ConfigOptionUITypeManager
public "getServerConfigSynchronizer"(): $ServerConfigChannelSynchronizer
public "getClientConfigProfileIO"(): $ConfigProfileManagerIO
public "getClientConfigManager"(): $ClientConfigManager
public "getBuiltInPermissions"(): $BuiltInConfigChannelPermissions
public "getConfigOptionManager"(): $ConfigOptionManager
public "getServerConfigProfileIO"(): $ConfigProfileManagerIO
public "getClientRegistryHandler"(): $IConfigChannelClientRegistryHandler
public "freezeOptionManagers"(): void
public "getCommonRegistryHandler"(): $IConfigChannelCommonRegistryHandler
public "getServerConfigManager"(): $ServerConfigManager
public "getPrimaryCommonConfigOptionManager"(): $ConfigOptionManager
public "getPrimaryClientConfigOptionManager"(): $ClientConfigOptionManager
get "id"(): $ResourceLocation
get "primaryClientConfigManagerIO"(): $SingleConfigManagerIO<($Config)>
get "primaryClientConfigManager"(): $SingleConfigManager<($Config)>
get "primaryCommonConfigManager"(): $SingleConfigManager<($Config)>
set "builtInPermissions"(value: $BuiltInConfigChannelPermissions$$Type)
get "primaryCommonConfigManagerIO"(): $SingleConfigManagerIO<($Config)>
get "clientConfigSynchronizer"(): $ClientConfigChannelSynchronizer
get "configOptionUITypeManager"(): $ConfigOptionUITypeManager
get "serverConfigSynchronizer"(): $ServerConfigChannelSynchronizer
get "clientConfigProfileIO"(): $ConfigProfileManagerIO
get "clientConfigManager"(): $ClientConfigManager
get "builtInPermissions"(): $BuiltInConfigChannelPermissions
get "configOptionManager"(): $ConfigOptionManager
get "serverConfigProfileIO"(): $ConfigProfileManagerIO
get "clientRegistryHandler"(): $IConfigChannelClientRegistryHandler
get "commonRegistryHandler"(): $IConfigChannelCommonRegistryHandler
get "serverConfigManager"(): $ServerConfigManager
get "primaryCommonConfigOptionManager"(): $ConfigOptionManager
get "primaryClientConfigOptionManager"(): $ClientConfigOptionManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigChannel$$Type = ($ConfigChannel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfigChannel$$Original = $ConfigChannel;}
declare module "xaero.lib.common.config.channel.register.handler.IConfigChannelCommonRegistryHandler" {
import {$OptionValueRedirectorManager$$Type} from "xaero.lib.common.config.option.value.redirect.OptionValueRedirectorManager"
import {$ConfigOptionManager$$Type} from "xaero.lib.common.config.option.ConfigOptionManager"
import {$ServerConfigChangeListener$$Type} from "xaero.lib.common.config.server.listener.ServerConfigChangeListener"

export interface $IConfigChannelCommonRegistryHandler$$Interface {
}

export class $IConfigChannelCommonRegistryHandler implements $IConfigChannelCommonRegistryHandler$$Interface {
 "registerProfiledOptions"(arg0: $ConfigOptionManager$$Type): void
 "registerServerOptionChangeHandlers"(arg0: $ServerConfigChangeListener$$Type): void
 "registerOptionServerRedirectors"(arg0: $OptionValueRedirectorManager$$Type): void
 "registerPrimaryCommonOptions"(arg0: $ConfigOptionManager$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigChannelCommonRegistryHandler$$Type = ($IConfigChannelCommonRegistryHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IConfigChannelCommonRegistryHandler$$Original = $IConfigChannelCommonRegistryHandler;}
declare module "xaero.lib.common.config.single.SingleConfigManager" {
import {$ConfigChannel, $ConfigChannel$$Type} from "xaero.lib.common.config.channel.ConfigChannel"
import {$ConfigOption$$Type} from "xaero.lib.common.config.option.ConfigOption"
import {$OptionValueRedirectorManager, $OptionValueRedirectorManager$$Type} from "xaero.lib.common.config.option.value.redirect.OptionValueRedirectorManager"
import {$Config, $Config$$Type} from "xaero.lib.common.config.Config"
import {$IConfigChangeListener$$Type} from "xaero.lib.common.config.listener.IConfigChangeListener"
import {$Logger, $Logger$$Type} from "org.apache.logging.log4j.Logger"

export class $SingleConfigManager<C extends $Config> {
readonly "logger": $Logger

constructor(arg0: $Logger$$Type, arg1: StringJS)

public "getChannel"(): $ConfigChannel
public "getRedirectorManager"(): $OptionValueRedirectorManager
public "setRedirectorManager"(arg0: $OptionValueRedirectorManager$$Type): void
public "getConfig"(): C
public "setChannel"(arg0: $ConfigChannel$$Type): void
public "setChangeListener"(arg0: $IConfigChangeListener$$Type): void
public "getConfigId"(): StringJS
public "setConfig"(arg0: C): void
public "getEffective"<T>(arg0: $ConfigOption$$Type<(T)>): T
get "channel"(): $ConfigChannel
get "redirectorManager"(): $OptionValueRedirectorManager
set "redirectorManager"(value: $OptionValueRedirectorManager$$Type)
get "config"(): C
set "channel"(value: $ConfigChannel$$Type)
set "changeListener"(value: $IConfigChangeListener$$Type)
get "configId"(): StringJS
set "config"(value: C)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleConfigManager$$Type<C> = ($SingleConfigManager<(C)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SingleConfigManager$$Original<C> = $SingleConfigManager<(C)>;}
declare module "xaero.lib.common.config.option.ConfigOptionManager" {
import {$Iterator} from "java.util.Iterator"
import {$Iterable$$Interface} from "java.lang.Iterable"
import {$Spliterator} from "java.util.Spliterator"
import {$ConfigOption, $ConfigOption$$Type} from "xaero.lib.common.config.option.ConfigOption"
import {$Logger} from "org.apache.logging.log4j.Logger"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $ConfigOptionManager implements $Iterable$$Interface<($ConfigOption<(never)>)> {
readonly "logger": $Logger

public "get"(arg0: StringJS): $ConfigOption<(never)>
public "iterator"(): $Iterator<($ConfigOption<(never)>)>
public "register"(arg0: $ConfigOption$$Type<(never)>): void
public "freeze"(): void
public "spliterator"(): $Spliterator<($ConfigOption<(never)>)>
public "forEach"(arg0: $Consumer$$Type<($ConfigOption<(never)>)>): void
[Symbol.iterator](): IterableIterator<$ConfigOption<(never)>>;
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigOptionManager$$Type = ($ConfigOptionManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfigOptionManager$$Original = $ConfigOptionManager;}
declare module "xaero.lib.common.config.server.sync.ServerConfigChannelSynchronizer" {
import {$Iterable$$Type} from "java.lang.Iterable"
import {$ConfigProfile$$Type} from "xaero.lib.common.config.profile.ConfigProfile"
import {$CommonConfigChannelSynchronizer} from "xaero.lib.common.config.sync.CommonConfigChannelSynchronizer"
import {$ConfigProfileInfoPacket$Entry$$Type} from "xaero.lib.common.packet.config.profile.ConfigProfileInfoPacket$Entry"
import {$ConfigOption$$Type} from "xaero.lib.common.config.option.ConfigOption"
import {$ServerPlayerData$$Type} from "xaero.lib.common.player.ServerPlayerData"
import {$List$$Type} from "java.util.List"
import {$ServerPlayerConfigSynchronizer$$Type} from "xaero.lib.common.config.server.sync.ServerPlayerConfigSynchronizer"
import {$Logger} from "org.apache.logging.log4j.Logger"
import {$AbstractConfigPacket$OptionEntry$$Type} from "xaero.lib.common.packet.config.AbstractConfigPacket$OptionEntry"

export class $ServerConfigChannelSynchronizer extends $CommonConfigChannelSynchronizer {
readonly "logger": $Logger

public "postLoad"(): void
public "syncOptionValueChange"(arg0: $ConfigProfile$$Type, arg1: $ConfigOption$$Type<(never)>): void
public "syncProfileDeletion"(arg0: $ConfigProfile$$Type): void
public "handleLogin"(arg0: $ServerPlayerConfigSynchronizer$$Type): void
public "onDeleteConfigProfilePacket"(arg0: StringJS, arg1: $ServerPlayerData$$Type): void
public "onCreateConfigProfilePacket"(arg0: StringJS, arg1: StringJS, arg2: StringJS): void
public "syncServerProfileEditingInfo"(arg0: $ServerPlayerConfigSynchronizer$$Type): void
public "syncEnforcedConfigProfileDeletion"(arg0: $ConfigProfile$$Type): void
public "onConfigProfileInfoPacket"(arg0: $List$$Type<($ConfigProfileInfoPacket$Entry$$Type)>, arg1: StringJS, arg2: $ServerPlayerData$$Type): void
public "onProfileRequestPacket"(arg0: $ServerPlayerConfigSynchronizer$$Type, arg1: StringJS): void
public "onEditProfilePacket"(arg0: StringJS, arg1: $Iterable$$Type<($AbstractConfigPacket$OptionEntry$$Type)>, arg2: $ServerPlayerData$$Type): void
public "syncProfileInfoChange"(arg0: $ConfigProfile$$Type): void
public "syncDefaultEnforcedConfigProfileSwitch"(arg0: $ConfigProfile$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerConfigChannelSynchronizer$$Type = ($ServerConfigChannelSynchronizer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerConfigChannelSynchronizer$$Original = $ServerConfigChannelSynchronizer;}
declare module "xaero.lib.common.config.listener.IConfigChangeListener" {
import {$ConfigOption$$Type} from "xaero.lib.common.config.option.ConfigOption"
import {$Config$$Type} from "xaero.lib.common.config.Config"

export interface $IConfigChangeListener$$Interface {
}

export class $IConfigChangeListener implements $IConfigChangeListener$$Interface {
 "onChange"(arg0: $Config$$Type, arg1: $ConfigOption$$Type<(never)>): void
 "onRemoved"(arg0: $Config$$Type): void
 "onFullChange"(arg0: $Config$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigChangeListener$$Type = ($IConfigChangeListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IConfigChangeListener$$Original = $IConfigChangeListener;}
declare module "xaero.lib.common.config.profile.ConfigProfile" {
import {$IConfigProfileInfo$$Interface} from "xaero.lib.common.config.profile.IConfigProfileInfo"
import {$Config} from "xaero.lib.common.config.Config"

export class $ConfigProfile extends $Config implements $IConfigProfileInfo$$Interface {
public "getName"(): StringJS
public "getId"(): StringJS
get "name"(): StringJS
get "id"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigProfile$$Type = ($ConfigProfile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfigProfile$$Original = $ConfigProfile;}
declare module "xaero.lib.common.config.option.value.redirect.OptionValueRedirectorManager" {
import {$ConfigChannel$$Type} from "xaero.lib.common.config.channel.ConfigChannel"
import {$ConfigOption$$Type} from "xaero.lib.common.config.option.ConfigOption"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Config} from "xaero.lib.common.config.Config"
import {$IConfigChangeListener$$Type} from "xaero.lib.common.config.listener.IConfigChangeListener"

export class $OptionValueRedirectorManager {
public "getValue"<T>(arg0: $ConfigOption$$Type<(T)>): T
public "register"<T>(arg0: $ConfigOption$$Type<(T)>, arg1: $Supplier$$Type<(T)>, arg2: $Predicate$$Type<($ConfigChannel)>): void
public "freeze"(): void
public "setChannel"(arg0: $ConfigChannel$$Type): void
public "setChangeListener"(arg0: $IConfigChangeListener$$Type): void
public "shouldRedirect"(arg0: $ConfigOption$$Type<(never)>): boolean
public "getCacheConfig"(): $Config
set "channel"(value: $ConfigChannel$$Type)
set "changeListener"(value: $IConfigChangeListener$$Type)
get "cacheConfig"(): $Config
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionValueRedirectorManager$$Type = ($OptionValueRedirectorManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OptionValueRedirectorManager$$Original = $OptionValueRedirectorManager;}
declare module "xaero.lib.common.config.option.BooleanConfigOption" {
import {$IndexedConfigOption} from "xaero.lib.common.config.option.IndexedConfigOption"

export class $BooleanConfigOption extends $IndexedConfigOption<(boolean)> {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BooleanConfigOption$$Type = ($BooleanConfigOption);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BooleanConfigOption$$Original = $BooleanConfigOption;}
declare module "xaero.lib.common.config.sync.CommonConfigChannelSynchronizer" {
import {$ConfigChannel$$Type} from "xaero.lib.common.config.channel.ConfigChannel"
import {$ConfigOptionManager$$Type} from "xaero.lib.common.config.option.ConfigOptionManager"
import {$Logger, $Logger$$Type} from "org.apache.logging.log4j.Logger"

export class $CommonConfigChannelSynchronizer {
readonly "logger": $Logger

constructor(arg0: $ConfigOptionManager$$Type, arg1: $Logger$$Type)

public "setChannel"(arg0: $ConfigChannel$$Type): void
set "channel"(value: $ConfigChannel$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonConfigChannelSynchronizer$$Type = ($CommonConfigChannelSynchronizer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CommonConfigChannelSynchronizer$$Original = $CommonConfigChannelSynchronizer;}
declare module "xaero.lib.common.config.server.ServerConfigManager" {
import {$ConfigProfileManager} from "xaero.lib.common.config.profile.ConfigProfileManager"
import {$ConfigChannel, $ConfigChannel$$Type} from "xaero.lib.common.config.channel.ConfigChannel"
import {$ConfigProfile, $ConfigProfile$$Type} from "xaero.lib.common.config.profile.ConfigProfile"
import {$ConfigOption$$Type} from "xaero.lib.common.config.option.ConfigOption"
import {$ServerPlayerData$$Type} from "xaero.lib.common.player.ServerPlayerData"
import {$OptionValueRedirectorManager} from "xaero.lib.common.config.option.value.redirect.OptionValueRedirectorManager"
import {$ServerConfigChangeListener, $ServerConfigChangeListener$$Type} from "xaero.lib.common.config.server.listener.ServerConfigChangeListener"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"

export class $ServerConfigManager {
public "getChannel"(): $ConfigChannel
public "postLoad"(): void
public "getChangeListener"(): $ServerConfigChangeListener
public "getRaw"<T>(arg0: $ServerPlayerData$$Type, arg1: $ConfigOption$$Type<(T)>): T
public "getRaw"<T>(arg0: $ServerPlayer$$Type, arg1: $ConfigOption$$Type<(T)>): T
public "getRaw"<T>(arg0: $ConfigProfile$$Type, arg1: $ConfigOption$$Type<(T)>): T
public "getRedirectorManager"(): $OptionValueRedirectorManager
public "setChannel"(arg0: $ConfigChannel$$Type): void
public "setServer"(arg0: $MinecraftServer$$Type): void
public "setChangeListener"(arg0: $ServerConfigChangeListener$$Type): void
public "getProfileManager"(): $ConfigProfileManager
public "setDefaultEnforcedProfileId"(arg0: StringJS): void
public "getPermissionBasedProfileId"(arg0: $ServerPlayerData$$Type): StringJS
public "getEnforcedProfileForPlayer"(arg0: $ServerPlayerData$$Type): $ConfigProfile
public "hasServerProfileEditPermission"(arg0: $ServerPlayerData$$Type): boolean
public "getServer"(): $MinecraftServer
public "getPermissionBasedProfile"(arg0: $ServerPlayerData$$Type): $ConfigProfile
public "usesDefaultEnforcedProfile"(arg0: $ServerPlayer$$Type): boolean
public "usesDefaultEnforcedProfile"(arg0: $ServerPlayerData$$Type): boolean
public "getEffective"<T>(arg0: $ServerPlayerData$$Type, arg1: $ConfigOption$$Type<(T)>): T
public "getEffective"<T>(arg0: $ServerPlayer$$Type, arg1: $ConfigOption$$Type<(T)>): T
public "getDefaultEnforcedProfile"(): $ConfigProfile
get "channel"(): $ConfigChannel
get "changeListener"(): $ServerConfigChangeListener
get "redirectorManager"(): $OptionValueRedirectorManager
set "channel"(value: $ConfigChannel$$Type)
set "server"(value: $MinecraftServer$$Type)
set "changeListener"(value: $ServerConfigChangeListener$$Type)
get "profileManager"(): $ConfigProfileManager
set "defaultEnforcedProfileId"(value: StringJS)
get "server"(): $MinecraftServer
get "defaultEnforcedProfile"(): $ConfigProfile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerConfigManager$$Type = ($ServerConfigManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerConfigManager$$Original = $ServerConfigManager;}
declare module "xaero.lib.common.config.profile.ConfigProfileManager" {
import {$Iterator} from "java.util.Iterator"
import {$Iterable$$Interface} from "java.lang.Iterable"
import {$ConfigProfile, $ConfigProfile$$Type} from "xaero.lib.common.config.profile.ConfigProfile"
import {$Spliterator} from "java.util.Spliterator"
import {$IConfigChangeListener$$Type} from "xaero.lib.common.config.listener.IConfigChangeListener"
import {$Logger} from "org.apache.logging.log4j.Logger"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $ConfigProfileManager implements $Iterable$$Interface<($ConfigProfile)> {
readonly "logger": $Logger

public "remove"(arg0: StringJS): void
public "reset"(): void
public "get"(arg0: StringJS): $ConfigProfile
public "add"(arg0: $ConfigProfile$$Type): void
public "add"(arg0: integer, arg1: $ConfigProfile$$Type): void
public "iterator"(): $Iterator<($ConfigProfile)>
public "getIndex"(arg0: StringJS): integer
public "setChangeListener"(arg0: $IConfigChangeListener$$Type): void
public "getConfigType"(): StringJS
public "spliterator"(): $Spliterator<($ConfigProfile)>
public "forEach"(arg0: $Consumer$$Type<($ConfigProfile)>): void
[Symbol.iterator](): IterableIterator<$ConfigProfile>;
set "changeListener"(value: $IConfigChangeListener$$Type)
get "configType"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigProfileManager$$Type = ($ConfigProfileManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfigProfileManager$$Original = $ConfigProfileManager;}
declare module "xaero.lib.common.config.single.io.SingleConfigManagerIO" {
import {$Config} from "xaero.lib.common.config.Config"

export class $SingleConfigManagerIO<C extends $Config> {
public "load"(): void
public "save"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleConfigManagerIO$$Type<C> = ($SingleConfigManagerIO<(C)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SingleConfigManagerIO$$Original<C> = $SingleConfigManagerIO<(C)>;}
declare module "xaero.lib.common.config.option.ConfigOption" {
import {$BiFunction} from "java.util.function.BiFunction"
import {$ConfigValueType} from "xaero.lib.common.config.option.value.type.ConfigValueType"
import {$Component} from "net.minecraft.network.chat.Component"

export class $ConfigOption<T> {
public "isOverridable"(): boolean
public "getId"(): StringJS
public "getDefaultValue"(): T
public "getDisplayName"(): $Component
public "isValidValue"(arg0: T): boolean
public "getValueType"(): $ConfigValueType<(T)>
public "shouldSaveDefaultValue"(): boolean
public "skipConfigReset"(): boolean
public "getDisplayGetter"(): $BiFunction<($ConfigOption<(T)>), (T), ($Component)>
public "getTooltip"(): $Component
get "overridable"(): boolean
get "id"(): StringJS
get "defaultValue"(): T
get "displayName"(): $Component
get "valueType"(): $ConfigValueType<(T)>
get "displayGetter"(): $BiFunction<($ConfigOption<(T)>), (T), ($Component)>
get "tooltip"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigOption$$Type<T> = ($ConfigOption<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfigOption$$Original<T> = $ConfigOption<(T)>;}
declare module "xaero.lib.common.config.server.sync.ServerPlayerConfigSynchronizer" {
import {$Iterable$$Type} from "java.lang.Iterable"
import {$ConfigChannel, $ConfigChannel$$Type} from "xaero.lib.common.config.channel.ConfigChannel"
import {$ConfigProfileInfoPacket$Entry$$Type} from "xaero.lib.common.packet.config.profile.ConfigProfileInfoPacket$Entry"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ServerPlayerData, $ServerPlayerData$$Type} from "xaero.lib.common.player.ServerPlayerData"
import {$List$$Type} from "java.util.List"
import {$AbstractConfigPacket$OptionEntry$$Type} from "xaero.lib.common.packet.config.AbstractConfigPacket$OptionEntry"

export class $ServerPlayerConfigSynchronizer {
constructor(arg0: $ServerPlayerData$$Type)

public "send"(arg0: $ConfigChannel$$Type, arg1: any): void
public "handleLogin"(): void
public "getPlayerData"(): $ServerPlayerData
public "onDeleteConfigProfilePacket"(arg0: StringJS): void
public "onCreateConfigProfilePacket"(arg0: StringJS, arg1: StringJS, arg2: StringJS): void
public "onConfigProfileInfoPacket"(arg0: $List$$Type<($ConfigProfileInfoPacket$Entry$$Type)>, arg1: StringJS): void
public "onProfileRequestPacket"(arg0: StringJS): void
public "onEditProfilePacket"(arg0: StringJS, arg1: $Iterable$$Type<($AbstractConfigPacket$OptionEntry$$Type)>): void
public "receiveChannelId"(arg0: $ResourceLocation$$Type): void
public "getCurrentInputChannel"(): $ConfigChannel
get "playerData"(): $ServerPlayerData
get "currentInputChannel"(): $ConfigChannel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayerConfigSynchronizer$$Type = ($ServerPlayerConfigSynchronizer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerPlayerConfigSynchronizer$$Original = $ServerPlayerConfigSynchronizer;}
declare module "xaero.lib.common.config.server.listener.ServerConfigChangeListener" {
import {$ConfigOption$$Type} from "xaero.lib.common.config.option.ConfigOption"
import {$Config$$Type} from "xaero.lib.common.config.Config"
import {$HandlerBasedConfigChangeListener} from "xaero.lib.common.config.listener.handler.HandlerBasedConfigChangeListener"
import {$ServerConfigChannelSynchronizer$$Type} from "xaero.lib.common.config.server.sync.ServerConfigChannelSynchronizer"

export class $ServerConfigChangeListener extends $HandlerBasedConfigChangeListener {
public "onChange"(arg0: $Config$$Type, arg1: $ConfigOption$$Type<(never)>): void
public "setSynchronizer"(arg0: $ServerConfigChannelSynchronizer$$Type): void
public "onRemoved"(arg0: $Config$$Type): void
set "synchronizer"(value: $ServerConfigChannelSynchronizer$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerConfigChangeListener$$Type = ($ServerConfigChangeListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerConfigChangeListener$$Original = $ServerConfigChangeListener;}
declare module "xaero.lib.common.config.Config" {
import {$Iterable} from "java.lang.Iterable"
import {$ConfigOption, $ConfigOption$$Type} from "xaero.lib.common.config.option.ConfigOption"
import {$IConfigChangeListener, $IConfigChangeListener$$Type} from "xaero.lib.common.config.listener.IConfigChangeListener"

export class $Config {
public "reset"(): void
public "get"<T>(arg0: $ConfigOption$$Type<(T)>): T
public "set"<T>(arg0: $ConfigOption$$Type<(T)>, arg1: T): T
public "getChangeListener"(): $IConfigChangeListener
public "getFailedSerializedValue"(arg0: $ConfigOption$$Type<(never)>): StringJS
public "addFailedSerializedValue"<T>(arg0: $ConfigOption$$Type<(T)>, arg1: StringJS): void
public "getRemovedLargeOptions"(): $Iterable<($ConfigOption<(never)>)>
public "postSave"(): void
public "copyOptionsFrom"(arg0: $Config$$Type): void
public "setChangeListener"(arg0: $IConfigChangeListener$$Type): void
public "getDirtyOptions"(): $Iterable<($ConfigOption<(never)>)>
public "isAllowNullValues"(): boolean
public "copyOptionFrom"<T>(arg0: $ConfigOption$$Type<(T)>, arg1: $Config$$Type): void
public "setOptionDefault"<T>(arg0: $ConfigOption$$Type<(T)>): void
public "clearDirtyOptions"(): void
public "usedOptions"(): $Iterable<($ConfigOption<(never)>)>
public "setDefaults"(arg0: boolean): void
public "getChangeCount"(): integer
get "changeListener"(): $IConfigChangeListener
get "removedLargeOptions"(): $Iterable<($ConfigOption<(never)>)>
set "changeListener"(value: $IConfigChangeListener$$Type)
get "dirtyOptions"(): $Iterable<($ConfigOption<(never)>)>
get "allowNullValues"(): boolean
set "optionDefault"(value: $ConfigOption$$Type<(T)>)
set "defaults"(value: boolean)
get "changeCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Config$$Type = ($Config);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Config$$Original = $Config;}
declare module "xaero.lib.common.config.profile.io.ConfigProfileManagerIO" {
import {$ConfigProfile$$Type} from "xaero.lib.common.config.profile.ConfigProfile"

export class $ConfigProfileManagerIO {
public "load"(): void
public "delete"(arg0: $ConfigProfile$$Type): void
public "delete"(arg0: $ConfigProfile$$Type, arg1: integer): void
public "save"(arg0: $ConfigProfile$$Type): void
public "saveAll"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigProfileManagerIO$$Type = ($ConfigProfileManagerIO);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfigProfileManagerIO$$Original = $ConfigProfileManagerIO;}
