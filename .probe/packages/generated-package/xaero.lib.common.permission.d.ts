declare module "xaero.lib.common.permission.config.channel.BuiltInConfigChannelPermissions" {
import {$PermissionNode} from "xaero.lib.common.permission.PermissionNode"

export class $BuiltInConfigChannelPermissions {
public "register"(): void
public "getEnforcedServerProfileNode"(): $PermissionNode<(StringJS)>
get "enforcedServerProfileNode"(): $PermissionNode<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuiltInConfigChannelPermissions$$Type = ($BuiltInConfigChannelPermissions);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BuiltInConfigChannelPermissions$$Original = $BuiltInConfigChannelPermissions;}
declare module "xaero.lib.common.permission.PermissionNode" {
import {$Class} from "java.lang.Class"
import {$Component} from "net.minecraft.network.chat.Component"

export class $PermissionNode<T> {
public "getType"(): $Class<(T)>
public "getDisplayName"(): $Component
public "getComment"(): $Component
public "getDefaultPath"(): StringJS
public "getActualPath"(): StringJS
public "getModId"(): StringJS
get "type"(): $Class<(T)>
get "displayName"(): $Component
get "comment"(): $Component
get "defaultPath"(): StringJS
get "actualPath"(): StringJS
get "modId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PermissionNode$$Type<T> = ($PermissionNode<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PermissionNode$$Original<T> = $PermissionNode<(T)>;}
