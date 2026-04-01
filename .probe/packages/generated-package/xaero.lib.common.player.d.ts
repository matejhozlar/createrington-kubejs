declare module "xaero.lib.common.player.config.ServerPlayerConfigChannelData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ServerPlayerConfigChannelData {
constructor()

public "setCachedHasServerProfileEditPermission"(arg0: boolean): void
public "setCachedUsingConfigProfilePermission"(arg0: boolean): void
public "setCachedEnforcedConfigProfilePermission"(arg0: StringJS): void
public "isUsingConfigProfilePermission"(): boolean
public "getEnforcedConfigProfilePermission"(): StringJS
public "hasServerProfileEditPermission"(): boolean
set "cachedHasServerProfileEditPermission"(value: boolean)
set "cachedUsingConfigProfilePermission"(value: boolean)
set "cachedEnforcedConfigProfilePermission"(value: StringJS)
get "usingConfigProfilePermission"(): boolean
get "enforcedConfigProfilePermission"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayerConfigChannelData$$Type = ($ServerPlayerConfigChannelData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerPlayerConfigChannelData$$Original = $ServerPlayerConfigChannelData;}
declare module "xaero.lib.common.player.IServerPlayer" {
import {$ServerPlayerData, $ServerPlayerData$$Type} from "xaero.lib.common.player.ServerPlayerData"

export interface $IServerPlayer$$Interface {
}

export class $IServerPlayer implements $IServerPlayer$$Interface {
 "xaerolib_getData"(): $ServerPlayerData
 "xaerolib_setData"(arg0: $ServerPlayerData$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerPlayer$$Type = ($IServerPlayer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IServerPlayer$$Original = $IServerPlayer;}
declare module "xaero.lib.common.player.ServerPlayerData" {
import {$ConfigChannel$$Type} from "xaero.lib.common.config.channel.ConfigChannel"
import {$ServerPlayerConfigChannelData} from "xaero.lib.common.player.config.ServerPlayerConfigChannelData"
import {$ServerPlayerConfigSynchronizer} from "xaero.lib.common.config.server.sync.ServerPlayerConfigSynchronizer"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $ServerPlayerData {
public static "get"(arg0: $ServerPlayer$$Type): $ServerPlayerData
public "getConfigSynchronizer"(): $ServerPlayerConfigSynchronizer
public "getPlayer"(): $ServerPlayer
public "getConfigChannelData"(arg0: $ConfigChannel$$Type): $ServerPlayerConfigChannelData
public "shouldUpdateConfigPermissions"(): boolean
public "setShouldUpdateConfigPermissions"(arg0: boolean): void
public "setPlayer"(arg0: $ServerPlayer$$Type): void
get "configSynchronizer"(): $ServerPlayerConfigSynchronizer
get "player"(): $ServerPlayer
set "player"(value: $ServerPlayer$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayerData$$Type = ($ServerPlayerData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerPlayerData$$Original = $ServerPlayerData;}
