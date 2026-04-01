declare module "xaero.lib.client.config.option.ClientConfigOptionManager" {
import {$ConfigOption, $ConfigOption$$Type} from "xaero.lib.common.config.option.ConfigOption"
import {$ConfigOptionManager} from "xaero.lib.common.config.option.ConfigOptionManager"
import {$Logger} from "org.apache.logging.log4j.Logger"
import {$ConfigOptionUIType, $ConfigOptionUIType$$Type} from "xaero.lib.client.config.option.ui.type.ConfigOptionUIType"
import {$ConfigOptionUITypeManager} from "xaero.lib.client.config.option.ui.ConfigOptionUITypeManager"

export class $ClientConfigOptionManager extends $ConfigOptionManager {
readonly "logger": $Logger

public "getUIType"<CT extends $ConfigOption<(object)>>(arg0: CT): $ConfigOptionUIType<(CT)>
public "getUiTypeManager"(): $ConfigOptionUITypeManager
public "registerUIType"<CT extends $ConfigOption<(object)>>(arg0: CT, arg1: $ConfigOptionUIType$$Type<(CT)>): void
get "uiTypeManager"(): $ConfigOptionUITypeManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientConfigOptionManager$$Type = ($ClientConfigOptionManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientConfigOptionManager$$Original = $ClientConfigOptionManager;}
declare module "xaero.lib.client.config.option.value.redirect.ClientOptionValueRedirectorManager" {
import {$ConfigChannel$$Type} from "xaero.lib.common.config.channel.ConfigChannel"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ConfigOption$$Type} from "xaero.lib.common.config.option.ConfigOption"
import {$Function$$Type} from "java.util.function.Function"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$OptionValueRedirectorManager} from "xaero.lib.common.config.option.value.redirect.OptionValueRedirectorManager"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $ClientOptionValueRedirectorManager extends $OptionValueRedirectorManager {
public "getName"(arg0: $ConfigOption$$Type<(never)>): $Component
public "register"<T>(arg0: $ConfigOption$$Type<(T)>, arg1: $Supplier$$Type<(T)>, arg2: $Predicate$$Type<($ConfigChannel)>, arg3: $Function$$Type<($Screen), ($Screen$$Type)>, arg4: $Component$$Type, arg5: $Supplier$$Type<($Component$$Type)>): void
public "register"<T>(arg0: $ConfigOption$$Type<(T)>, arg1: $Supplier$$Type<(T)>, arg2: $Predicate$$Type<($ConfigChannel)>): void
public "getTooltip"(arg0: $ConfigOption$$Type<(never)>): $Component
public "shouldDeactivateWidget"(arg0: $ConfigOption$$Type<(never)>): boolean
public "redirectScreen"(arg0: $ConfigOption$$Type<(never)>): boolean
public "redirectScreen"(arg0: $ConfigOption$$Type<(never)>, arg1: $Screen$$Type): $Screen
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientOptionValueRedirectorManager$$Type = ($ClientOptionValueRedirectorManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientOptionValueRedirectorManager$$Original = $ClientOptionValueRedirectorManager;}
declare module "xaero.lib.client.config.listener.ClientConfigChangeListener" {
import {$ConfigOption$$Type} from "xaero.lib.common.config.option.ConfigOption"
import {$HandlerBasedConfigChangeListener} from "xaero.lib.common.config.listener.handler.HandlerBasedConfigChangeListener"
import {$Config$$Type} from "xaero.lib.common.config.Config"
import {$ClientConfigManager} from "xaero.lib.client.config.ClientConfigManager"

export class $ClientConfigChangeListener extends $HandlerBasedConfigChangeListener {
public "onChange"(arg0: $Config$$Type, arg1: $ConfigOption$$Type<(never)>): void
public "getManager"(): $ClientConfigManager
get "manager"(): $ClientConfigManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientConfigChangeListener$$Type = ($ClientConfigChangeListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientConfigChangeListener$$Original = $ClientConfigChangeListener;}
declare module "xaero.lib.client.config.ClientConfigManager" {
import {$ConfigChannel, $ConfigChannel$$Type} from "xaero.lib.common.config.channel.ConfigChannel"
import {$ConfigProfileManager} from "xaero.lib.common.config.profile.ConfigProfileManager"
import {$ConfigProfile, $ConfigProfile$$Type} from "xaero.lib.common.config.profile.ConfigProfile"
import {$ClientConfigChangeListener} from "xaero.lib.client.config.listener.ClientConfigChangeListener"
import {$ConfigOption$$Type} from "xaero.lib.common.config.option.ConfigOption"
import {$Config} from "xaero.lib.common.config.Config"
import {$SingleConfigManager} from "xaero.lib.common.config.single.SingleConfigManager"
import {$ClientOptionValueRedirectorManager} from "xaero.lib.client.config.option.value.redirect.ClientOptionValueRedirectorManager"
import {$SyncedConfigManager} from "xaero.lib.client.config.sync.SyncedConfigManager"

export class $ClientConfigManager {
public "getChannel"(): $ConfigChannel
public "shouldIgnoreServerEnforcement"<T>(arg0: $ConfigProfile$$Type, arg1: $ConfigOption$$Type<(T)>): boolean
public "shouldIgnoreServerEnforcement"<T>(arg0: $ConfigOption$$Type<(T)>): boolean
public "getCurrentProfile"(): $ConfigProfile
public "postLoad"(): void
public "getRaw"<T>(arg0: $ConfigProfile$$Type, arg1: $ConfigOption$$Type<(T)>): T
public "getRaw"<T>(arg0: $ConfigOption$$Type<(T)>): T
public "getEffective"<T>(arg0: $ConfigOption$$Type<(T)>): T
public "getEffective"<T>(arg0: $ConfigProfile$$Type, arg1: $ConfigOption$$Type<(T)>): T
public "getServerSynced"(): $SyncedConfigManager
public "getChangeListener"(): $ClientConfigChangeListener
public "setChannel"(arg0: $ConfigChannel$$Type): void
public "getPrimaryConfigManager"(): $SingleConfigManager<($Config)>
public "getRedirectorManager"(): $ClientOptionValueRedirectorManager
public "getProfileManager"(): $ConfigProfileManager
get "channel"(): $ConfigChannel
get "currentProfile"(): $ConfigProfile
get "serverSynced"(): $SyncedConfigManager
get "changeListener"(): $ClientConfigChangeListener
set "channel"(value: $ConfigChannel$$Type)
get "primaryConfigManager"(): $SingleConfigManager<($Config)>
get "redirectorManager"(): $ClientOptionValueRedirectorManager
get "profileManager"(): $ConfigProfileManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientConfigManager$$Type = ($ClientConfigManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientConfigManager$$Original = $ClientConfigManager;}
declare module "xaero.lib.client.config.sync.ClientConfigChannelSynchronizer" {
import {$Iterable$$Type} from "java.lang.Iterable"
import {$ConfigProfile$$Type} from "xaero.lib.common.config.profile.ConfigProfile"
import {$CommonConfigChannelSynchronizer} from "xaero.lib.common.config.sync.CommonConfigChannelSynchronizer"
import {$ConfigProfileInfoPacket$Entry$$Type} from "xaero.lib.common.packet.config.profile.ConfigProfileInfoPacket$Entry"
import {$List$$Type} from "java.util.List"
import {$ConfigOptionManager$$Type} from "xaero.lib.common.config.option.ConfigOptionManager"
import {$Logger, $Logger$$Type} from "org.apache.logging.log4j.Logger"
import {$AbstractConfigPacket$OptionEntry$$Type} from "xaero.lib.common.packet.config.AbstractConfigPacket$OptionEntry"
import {$SyncedConfigManager$$Type} from "xaero.lib.client.config.sync.SyncedConfigManager"

export class $ClientConfigChannelSynchronizer extends $CommonConfigChannelSynchronizer {
readonly "logger": $Logger

constructor(arg0: $ConfigOptionManager$$Type, arg1: $SyncedConfigManager$$Type, arg2: $Logger$$Type)

public "reset"(): void
public "createProfile"(arg0: StringJS, arg1: StringJS, arg2: StringJS): void
public "syncDirtyOptions"(arg0: $ConfigProfile$$Type): void
public "requestProfile"(arg0: StringJS): void
public "changeDefaultEnforcedProfileId"(arg0: StringJS): void
public "onDeleteConfigProfilePacket"(arg0: StringJS): void
public "onEditProfilePacket"(arg0: StringJS, arg1: $Iterable$$Type<($AbstractConfigPacket$OptionEntry$$Type)>): void
public "onEnforcedConfigPacket"(arg0: boolean, arg1: $Iterable$$Type<($AbstractConfigPacket$OptionEntry$$Type)>): void
public "onConfigProfileInfoPacket"(arg0: $List$$Type<($ConfigProfileInfoPacket$Entry$$Type)>, arg1: StringJS, arg2: boolean): void
public "deleteProfile"(arg0: StringJS): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientConfigChannelSynchronizer$$Type = ($ClientConfigChannelSynchronizer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientConfigChannelSynchronizer$$Original = $ClientConfigChannelSynchronizer;}
declare module "xaero.lib.client.config.sync.SyncedConfigManager" {
import {$ConfigChannel$$Type} from "xaero.lib.common.config.channel.ConfigChannel"
import {$ConfigProfile, $ConfigProfile$$Type} from "xaero.lib.common.config.profile.ConfigProfile"
import {$Config} from "xaero.lib.common.config.Config"
import {$SingleConfigManager} from "xaero.lib.common.config.single.SingleConfigManager"
import {$ClientConfigChannelSynchronizer$$Type} from "xaero.lib.client.config.sync.ClientConfigChannelSynchronizer"
import {$Logger} from "org.apache.logging.log4j.Logger"
import {$SyncedConfigProfileInfoManager} from "xaero.lib.client.config.sync.profile.SyncedConfigProfileInfoManager"

export class $SyncedConfigManager extends $SingleConfigManager<($Config)> {
readonly "logger": $Logger

public "reset"(): void
public "isSyncingEditedProfile"(): boolean
public "isChannelPresentOnServer"(): boolean
public "receiveEditedProfile"(arg0: $ConfigProfile$$Type): void
public "getProfileInfoManager"(): $SyncedConfigProfileInfoManager
public "setDesiredEditedProfileId"(arg0: StringJS): void
public "getDesiredEditedProfileId"(): StringJS
public "setSyncingEditedProfile"(arg0: boolean): void
public "setChannel"(arg0: $ConfigChannel$$Type): void
public "getEditedProfile"(): $ConfigProfile
public "confirmEdit"(arg0: $ConfigProfile$$Type): void
public "setSynchronizer"(arg0: $ClientConfigChannelSynchronizer$$Type): void
public "resetEdit"(): void
public "confirmChannelPresenceOnServer"(): void
get "syncingEditedProfile"(): boolean
get "channelPresentOnServer"(): boolean
get "profileInfoManager"(): $SyncedConfigProfileInfoManager
set "desiredEditedProfileId"(value: StringJS)
get "desiredEditedProfileId"(): StringJS
set "syncingEditedProfile"(value: boolean)
set "channel"(value: $ConfigChannel$$Type)
get "editedProfile"(): $ConfigProfile
set "synchronizer"(value: $ClientConfigChannelSynchronizer$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncedConfigManager$$Type = ($SyncedConfigManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SyncedConfigManager$$Original = $SyncedConfigManager;}
declare module "xaero.lib.client.config.channel.register.handler.IConfigChannelClientRegistryHandler" {
import {$ClientConfigChangeListener$$Type} from "xaero.lib.client.config.listener.ClientConfigChangeListener"
import {$ClientConfigOptionManager$$Type} from "xaero.lib.client.config.option.ClientConfigOptionManager"
import {$ClientOptionValueRedirectorManager$$Type} from "xaero.lib.client.config.option.value.redirect.ClientOptionValueRedirectorManager"
import {$ConfigOptionUITypeManager$$Type} from "xaero.lib.client.config.option.ui.ConfigOptionUITypeManager"

export interface $IConfigChannelClientRegistryHandler$$Interface {
}

export class $IConfigChannelClientRegistryHandler implements $IConfigChannelClientRegistryHandler$$Interface {
 "registerClientOptionChangeHandlers"(arg0: $ClientConfigChangeListener$$Type): void
 "registerOptionClientRedirectors"(arg0: $ClientOptionValueRedirectorManager$$Type): void
 "registerConfigOptionUITypes"(arg0: $ConfigOptionUITypeManager$$Type): void
 "registerPrimaryClientOptions"(arg0: $ClientConfigOptionManager$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigChannelClientRegistryHandler$$Type = ($IConfigChannelClientRegistryHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IConfigChannelClientRegistryHandler$$Original = $IConfigChannelClientRegistryHandler;}
declare module "xaero.lib.client.config.option.ui.type.ConfigOptionUIType" {
import {$ConfigOption} from "xaero.lib.common.config.option.ConfigOption"
import {$IConfigOptionWidgetFactory, $IConfigOptionWidgetFactory$$Type} from "xaero.lib.client.config.option.ui.factory.IConfigOptionWidgetFactory"

export class $ConfigOptionUIType<CT extends $ConfigOption<(object)>> {
constructor(arg0: $IConfigOptionWidgetFactory$$Type<(CT)>)

public "getWidgetFactory"(): $IConfigOptionWidgetFactory<(CT)>
get "widgetFactory"(): $IConfigOptionWidgetFactory<(CT)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigOptionUIType$$Type<CT> = ($ConfigOptionUIType<(CT)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfigOptionUIType$$Original<CT> = $ConfigOptionUIType<(CT)>;}
declare module "xaero.lib.client.config.option.ui.ConfigOptionUITypeManager" {
import {$ConfigOption, $ConfigOption$$Type} from "xaero.lib.common.config.option.ConfigOption"
import {$ConfigOptionUIType, $ConfigOptionUIType$$Type} from "xaero.lib.client.config.option.ui.type.ConfigOptionUIType"

export class $ConfigOptionUITypeManager {
public "getUIType"<CT extends $ConfigOption<(object)>>(arg0: CT): $ConfigOptionUIType<(CT)>
public "registerUIType"<CT extends $ConfigOption<(object)>>(arg0: CT, arg1: $ConfigOptionUIType$$Type<(CT)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigOptionUITypeManager$$Type = ($ConfigOptionUITypeManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfigOptionUITypeManager$$Original = $ConfigOptionUITypeManager;}
