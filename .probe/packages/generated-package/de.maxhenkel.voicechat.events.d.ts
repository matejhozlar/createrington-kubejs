declare module "de.maxhenkel.voicechat.events.ClientVoiceChatConnectedEvent" {
import {$ClientVoicechatConnection, $ClientVoicechatConnection$$Type} from "de.maxhenkel.voicechat.voice.client.ClientVoicechatConnection"
import {$Event} from "net.neoforged.bus.api.Event"

export class $ClientVoiceChatConnectedEvent extends $Event {
constructor(arg0: $ClientVoicechatConnection$$Type)

public "getClient"(): $ClientVoicechatConnection
get "client"(): $ClientVoicechatConnection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientVoiceChatConnectedEvent$$Type = ($ClientVoiceChatConnectedEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientVoiceChatConnectedEvent$$Original = $ClientVoiceChatConnectedEvent;}
declare module "de.maxhenkel.voicechat.events.ServerVoiceChatDisconnectedEvent" {
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Event} from "net.neoforged.bus.api.Event"

export class $ServerVoiceChatDisconnectedEvent extends $Event {
constructor(arg0: $UUID$$Type)

public "getPlayerID"(): $UUID
get "playerID"(): $UUID
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerVoiceChatDisconnectedEvent$$Type = ($ServerVoiceChatDisconnectedEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerVoiceChatDisconnectedEvent$$Original = $ServerVoiceChatDisconnectedEvent;}
declare module "de.maxhenkel.voicechat.events.ClientVoiceChatDisconnectedEvent" {
import {$Event} from "net.neoforged.bus.api.Event"

export class $ClientVoiceChatDisconnectedEvent extends $Event {
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientVoiceChatDisconnectedEvent$$Type = ($ClientVoiceChatDisconnectedEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientVoiceChatDisconnectedEvent$$Original = $ClientVoiceChatDisconnectedEvent;}
declare module "de.maxhenkel.voicechat.events.ServerVoiceChatConnectedEvent" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $ServerVoiceChatConnectedEvent extends $Event {
constructor(arg0: $ServerPlayer$$Type)

public "getPlayer"(): $ServerPlayer
get "player"(): $ServerPlayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerVoiceChatConnectedEvent$$Type = ($ServerVoiceChatConnectedEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerVoiceChatConnectedEvent$$Original = $ServerVoiceChatConnectedEvent;}
declare module "de.maxhenkel.voicechat.events.VoiceChatCompatibilityCheckSucceededEvent" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $VoiceChatCompatibilityCheckSucceededEvent extends $Event {
constructor(arg0: $ServerPlayer$$Type)

public "getPlayer"(): $ServerPlayer
get "player"(): $ServerPlayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoiceChatCompatibilityCheckSucceededEvent$$Type = ($VoiceChatCompatibilityCheckSucceededEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VoiceChatCompatibilityCheckSucceededEvent$$Original = $VoiceChatCompatibilityCheckSucceededEvent;}
