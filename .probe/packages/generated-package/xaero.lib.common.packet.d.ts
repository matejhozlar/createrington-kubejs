declare module "xaero.lib.common.packet.config.profile.ConfigProfileInfoPacket$Entry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ConfigProfileInfoPacket$Entry {
readonly "name": StringJS
readonly "id": StringJS

constructor(arg0: StringJS, arg1: StringJS)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigProfileInfoPacket$Entry$$Type = ($ConfigProfileInfoPacket$Entry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfigProfileInfoPacket$Entry$$Original = $ConfigProfileInfoPacket$Entry;}
declare module "xaero.lib.common.packet.config.AbstractConfigPacket$OptionEntry" {
import {$ConfigOption$$Type} from "xaero.lib.common.config.option.ConfigOption"
import {$Config$$Type} from "xaero.lib.common.config.Config"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"

export class $AbstractConfigPacket$OptionEntry {
static readonly "NULL_VALUE": $Tag
readonly "optionId": StringJS
readonly "valueTag": $Tag

constructor(arg0: StringJS, arg1: $Tag$$Type)

public static "of"<T>(arg0: $ConfigOption$$Type<(T)>, arg1: T): $AbstractConfigPacket$OptionEntry
public static "of"<T>(arg0: $Config$$Type, arg1: $ConfigOption$$Type<(T)>): $AbstractConfigPacket$OptionEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractConfigPacket$OptionEntry$$Type = ($AbstractConfigPacket$OptionEntry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractConfigPacket$OptionEntry$$Original = $AbstractConfigPacket$OptionEntry;}
declare module "xaero.lib.common.packet.IPacketHandler" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$ServerPlayerData$$Type} from "xaero.lib.common.player.ServerPlayerData"
import {$Function$$Type} from "java.util.function.Function"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Class$$Type} from "java.lang.Class"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $IPacketHandler$$Interface {
get "channelId"(): $ResourceLocation
}

export class $IPacketHandler implements $IPacketHandler$$Interface {
 "register"<P>(arg0: integer, arg1: $Class$$Type<(P)>, arg2: $BiConsumer$$Type<(P), ($FriendlyByteBuf)>, arg3: $Function$$Type<($FriendlyByteBuf), (P)>, arg4: $BiConsumer$$Type<(P), ($ServerPlayer)>, arg5: $Consumer$$Type<(P)>): void
 "sendToPlayer"<T>(arg0: $ServerPlayerData$$Type, arg1: T): void
 "sendToPlayer"<T>(arg0: $ServerPlayer$$Type, arg1: T): void
 "sendToServer"<T>(arg0: T): void
 "getChannelId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPacketHandler$$Type = ($IPacketHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPacketHandler$$Original = $IPacketHandler;}
