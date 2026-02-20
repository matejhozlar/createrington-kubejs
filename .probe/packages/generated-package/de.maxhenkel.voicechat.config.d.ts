declare module "de.maxhenkel.voicechat.config.ServerConfig" {
import {$ServerConfig$Codec} from "de.maxhenkel.voicechat.config.ServerConfig$Codec"
import {$ConfigEntry} from "de.maxhenkel.voicechat.configbuilder.entry.ConfigEntry"
import {$ConfigBuilder$$Type} from "de.maxhenkel.voicechat.configbuilder.ConfigBuilder"

export class $ServerConfig {
 "groupsEnabled": $ConfigEntry<(boolean)>
 "keepAlive": $ConfigEntry<(integer)>
 "voiceChatCodec": $ConfigEntry<($ServerConfig$Codec)>
 "voiceHost": $ConfigEntry<(StringJS)>
 "broadcastRange": $ConfigEntry<(double)>
 "voiceChatMtuSize": $ConfigEntry<(integer)>
 "voiceChatPort": $ConfigEntry<(integer)>
 "crouchDistanceMultiplier": $ConfigEntry<(double)>
 "useNatives": $ConfigEntry<(boolean)>
 "allowRecording": $ConfigEntry<(boolean)>
 "voiceChatDistance": $ConfigEntry<(double)>
 "allowPings": $ConfigEntry<(boolean)>
 "voiceChatBindAddress": $ConfigEntry<(StringJS)>
 "whisperDistanceMultiplier": $ConfigEntry<(double)>
 "spectatorPlayerPossession": $ConfigEntry<(boolean)>
 "loginTimeout": $ConfigEntry<(integer)>
 "spectatorInteraction": $ConfigEntry<(boolean)>
 "forceVoiceChat": $ConfigEntry<(boolean)>

constructor(arg0: $ConfigBuilder$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerConfig$$Type = ($ServerConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerConfig$$Original = $ServerConfig;}
declare module "de.maxhenkel.voicechat.config.ServerConfig$Codec" {
import {$OpusEncoderMode} from "de.maxhenkel.voicechat.api.opus.OpusEncoderMode"
import {$Enum} from "java.lang.Enum"
import {$OpusEncoder$Application} from "de.maxhenkel.opus4j.OpusEncoder$Application"

export class $ServerConfig$Codec extends $Enum<($ServerConfig$Codec)> {
static readonly "RESTRICTED_LOWDELAY": $ServerConfig$Codec
static readonly "VOIP": $ServerConfig$Codec
static readonly "AUDIO": $ServerConfig$Codec

public static "values"(): ($ServerConfig$Codec)[]
public static "valueOf"(arg0: StringJS): $ServerConfig$Codec
public "getApplication"(): $OpusEncoder$Application
public "getMode"(): $OpusEncoderMode
get "application"(): $OpusEncoder$Application
get "mode"(): $OpusEncoderMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerConfig$Codec$$Type = (("voip") | ("audio") | ("restricted_lowdelay"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerConfig$Codec$$Original = $ServerConfig$Codec;}
