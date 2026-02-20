declare module "net.minecraft.network.protocol.common.ClientboundKeepAlivePacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ClientCommonPacketListener, $ClientCommonPacketListener$$Type} from "net.minecraft.network.protocol.common.ClientCommonPacketListener"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $ClientboundKeepAlivePacket implements $Packet$$Interface<($ClientCommonPacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundKeepAlivePacket)>

constructor(arg0: long)

public "type"(): $PacketType<($ClientboundKeepAlivePacket)>
public "getId"(): long
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientCommonPacketListener$$Type): void
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientCommonPacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientCommonPacketListener$$Type)>): $StreamCodec<(B), ($ClientCommonPacketListener)>
get "id"(): long
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundKeepAlivePacket$$Type = ($ClientboundKeepAlivePacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundKeepAlivePacket$$Original = $ClientboundKeepAlivePacket;}
declare module "net.minecraft.network.protocol.game.ClientboundChunkBatchStartPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundChunkBatchStartPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "INSTANCE": $ClientboundChunkBatchStartPacket
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($ClientboundChunkBatchStartPacket)>

public "type"(): $PacketType<($ClientboundChunkBatchStartPacket)>
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundChunkBatchStartPacket$$Type = ($ClientboundChunkBatchStartPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundChunkBatchStartPacket$$Original = $ClientboundChunkBatchStartPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundMapItemDataPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$MapId, $MapId$$Type} from "net.minecraft.world.level.saveddata.maps.MapId"
import {$Collection$$Type} from "java.util.Collection"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$MapItemSavedData$MapPatch, $MapItemSavedData$MapPatch$$Type} from "net.minecraft.world.level.saveddata.maps.MapItemSavedData$MapPatch"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$MapDecoration, $MapDecoration$$Type} from "net.minecraft.world.level.saveddata.maps.MapDecoration"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$MapItemSavedData$$Type} from "net.minecraft.world.level.saveddata.maps.MapItemSavedData"
import {$Record} from "java.lang.Record"

export class $ClientboundMapItemDataPacket extends $Record implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientboundMapItemDataPacket)>

constructor(arg0: $MapId$$Type, arg1: byte, arg2: boolean, arg3: $Collection$$Type<($MapDecoration$$Type)>, arg4: $MapItemSavedData$MapPatch$$Type)
constructor(arg0: $MapId$$Type, arg1: byte, arg2: boolean, arg3: ($List$$Type<($MapDecoration$$Type)>)?, arg4: ($MapItemSavedData$MapPatch$$Type)?)

public "type"(): $PacketType<($ClientboundMapItemDataPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "scale"(): byte
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "decorations"(): $Optional<($List<($MapDecoration)>)>
public "locked"(): boolean
public "applyToMap"(arg0: $MapItemSavedData$$Type): void
public "mapId"(): $MapId
public "colorPatch"(): $Optional<($MapItemSavedData$MapPatch)>
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundMapItemDataPacket$$Type = ({"locked"?: boolean, "mapId"?: $MapId$$Type, "scale"?: byte, "colorPatch"?: ($MapItemSavedData$MapPatch$$Type)?, "decorations"?: ($List$$Type<($MapDecoration$$Type)>)?}) | ([locked?: boolean, mapId?: $MapId$$Type, scale?: byte, colorPatch?: ($MapItemSavedData$MapPatch$$Type)?, decorations?: ($List$$Type<($MapDecoration$$Type)>)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundMapItemDataPacket$$Original = $ClientboundMapItemDataPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundSetBorderWarningDelayPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$WorldBorder$$Type} from "net.minecraft.world.level.border.WorldBorder"

export class $ClientboundSetBorderWarningDelayPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundSetBorderWarningDelayPacket)>

constructor(arg0: $WorldBorder$$Type)

public "type"(): $PacketType<($ClientboundSetBorderWarningDelayPacket)>
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "getWarningDelay"(): integer
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "warningDelay"(): integer
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundSetBorderWarningDelayPacket$$Type = ($ClientboundSetBorderWarningDelayPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundSetBorderWarningDelayPacket$$Original = $ClientboundSetBorderWarningDelayPacket;}
declare module "net.minecraft.network.protocol.game.ServerboundSeenAdvancementsPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$AdvancementHolder$$Type} from "net.minecraft.advancements.AdvancementHolder"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$ServerboundSeenAdvancementsPacket$Action, $ServerboundSeenAdvancementsPacket$Action$$Type} from "net.minecraft.network.protocol.game.ServerboundSeenAdvancementsPacket$Action"

export class $ServerboundSeenAdvancementsPacket implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundSeenAdvancementsPacket)>

constructor(arg0: $ServerboundSeenAdvancementsPacket$Action$$Type, arg1: $ResourceLocation$$Type)

public "type"(): $PacketType<($ServerboundSeenAdvancementsPacket)>
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getTab"(): $ResourceLocation
public static "closedScreen"(): $ServerboundSeenAdvancementsPacket
public "getAction"(): $ServerboundSeenAdvancementsPacket$Action
public static "openedTab"(arg0: $AdvancementHolder$$Type): $ServerboundSeenAdvancementsPacket
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "tab"(): $ResourceLocation
get "action"(): $ServerboundSeenAdvancementsPacket$Action
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundSeenAdvancementsPacket$$Type = ($ServerboundSeenAdvancementsPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundSeenAdvancementsPacket$$Original = $ServerboundSeenAdvancementsPacket;}
declare module "net.minecraft.network.protocol.common.ClientboundPingPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ClientCommonPacketListener, $ClientCommonPacketListener$$Type} from "net.minecraft.network.protocol.common.ClientCommonPacketListener"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $ClientboundPingPacket implements $Packet$$Interface<($ClientCommonPacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundPingPacket)>

constructor(arg0: integer)

public "type"(): $PacketType<($ClientboundPingPacket)>
public "getId"(): integer
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientCommonPacketListener$$Type): void
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientCommonPacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientCommonPacketListener$$Type)>): $StreamCodec<(B), ($ClientCommonPacketListener)>
get "id"(): integer
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundPingPacket$$Type = ($ClientboundPingPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundPingPacket$$Original = $ClientboundPingPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundBlockEventPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundBlockEventPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientboundBlockEventPacket)>

constructor(arg0: $BlockPos$$Type, arg1: $Block$$Type, arg2: integer, arg3: integer)

public "type"(): $PacketType<($ClientboundBlockEventPacket)>
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getPos"(): $BlockPos
public "getBlock"(): $Block
public "getB0"(): integer
public "getB1"(): integer
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "pos"(): $BlockPos
get "block"(): $Block
get "b0"(): integer
get "b1"(): integer
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundBlockEventPacket$$Type = ($ClientboundBlockEventPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundBlockEventPacket$$Original = $ClientboundBlockEventPacket;}
declare module "net.minecraft.network.protocol.common.custom.BreezeDebugPayload$BreezeInfo" {
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Record} from "java.lang.Record"

export class $BreezeDebugPayload$BreezeInfo extends $Record {
constructor(arg0: $FriendlyByteBuf$$Type)
constructor(arg0: $UUID$$Type, arg1: integer, arg2: integer, arg3: $BlockPos$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): integer
public "write"(arg0: $FriendlyByteBuf$$Type): void
public "generateName"(): StringJS
public "attackTarget"(): integer
public "jumpTarget"(): $BlockPos
public "uuid"(): $UUID
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BreezeDebugPayload$BreezeInfo$$Type = ({"id"?: integer, "attackTarget"?: integer, "jumpTarget"?: $BlockPos$$Type, "uuid"?: $UUID$$Type}) | ([id?: integer, attackTarget?: integer, jumpTarget?: $BlockPos$$Type, uuid?: $UUID$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BreezeDebugPayload$BreezeInfo$$Original = $BreezeDebugPayload$BreezeInfo;}
declare module "net.minecraft.network.protocol.game.ClientboundSetBorderWarningDistancePacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$WorldBorder$$Type} from "net.minecraft.world.level.border.WorldBorder"

export class $ClientboundSetBorderWarningDistancePacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundSetBorderWarningDistancePacket)>

constructor(arg0: $WorldBorder$$Type)

public "type"(): $PacketType<($ClientboundSetBorderWarningDistancePacket)>
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "getWarningBlocks"(): integer
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "warningBlocks"(): integer
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundSetBorderWarningDistancePacket$$Type = ($ClientboundSetBorderWarningDistancePacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundSetBorderWarningDistancePacket$$Original = $ClientboundSetBorderWarningDistancePacket;}
declare module "net.minecraft.network.protocol.game.VecDeltaCodec" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"

export class $VecDeltaCodec {
constructor()

public "decode"(arg0: long, arg1: long, arg2: long): $Vec3
public static "decode"(arg0: long): double
public static "encode"(arg0: double): long
public "delta"(arg0: $Vec3$$Type): $Vec3
public "getBase"(): $Vec3
public "encodeX"(arg0: $Vec3$$Type): long
public "encodeZ"(arg0: $Vec3$$Type): long
public "encodeY"(arg0: $Vec3$$Type): long
public "setBase"(arg0: $Vec3$$Type): void
get "base"(): $Vec3
set "base"(value: $Vec3$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VecDeltaCodec$$Type = ($VecDeltaCodec);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VecDeltaCodec$$Original = $VecDeltaCodec;}
declare module "net.minecraft.network.protocol.game.ClientGamePacketListener" {
import {$ClientboundSetChunkCacheRadiusPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetChunkCacheRadiusPacket"
import {$ClientboundPingPacket$$Type} from "net.minecraft.network.protocol.common.ClientboundPingPacket"
import {$ClientboundBlockEventPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockEventPacket"
import {$ClientboundCooldownPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundCooldownPacket"
import {$ClientboundUpdateMobEffectPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundUpdateMobEffectPacket"
import {$ClientboundUpdateAdvancementsPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundUpdateAdvancementsPacket"
import {$ClientboundSetObjectivePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetObjectivePacket"
import {$ClientboundContainerSetSlotPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundContainerSetSlotPacket"
import {$ClientboundDeleteChatPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundDeleteChatPacket"
import {$ClientboundOpenScreenPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundOpenScreenPacket"
import {$ClientboundSetScorePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetScorePacket"
import {$ClientboundLevelChunkWithLightPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundLevelChunkWithLightPacket"
import {$ClientboundSetBorderWarningDistancePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetBorderWarningDistancePacket"
import {$ClientboundSetBorderSizePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetBorderSizePacket"
import {$ClientboundSetActionBarTextPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetActionBarTextPacket"
import {$ClientboundPlayerAbilitiesPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundPlayerAbilitiesPacket"
import {$ClientboundSetBorderWarningDelayPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetBorderWarningDelayPacket"
import {$ClientboundBundlePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBundlePacket"
import {$ClientboundPlayerCombatEndPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundPlayerCombatEndPacket"
import {$CrashReport$$Type} from "net.minecraft.CrashReport"
import {$ClientboundInitializeBorderPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundInitializeBorderPacket"
import {$ClientPongPacketListener$$Interface} from "net.minecraft.network.protocol.ping.ClientPongPacketListener"
import {$ClientboundMoveVehiclePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundMoveVehiclePacket"
import {$ClientboundForgetLevelChunkPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundForgetLevelChunkPacket"
import {$ClientboundTagQueryPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundTagQueryPacket"
import {$ClientboundSetExperiencePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetExperiencePacket"
import {$ClientboundContainerSetContentPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundContainerSetContentPacket"
import {$ConnectionType} from "net.neoforged.neoforge.network.connection.ConnectionType"
import {$ClientboundTickingStatePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundTickingStatePacket"
import {$ClientboundSetBorderCenterPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetBorderCenterPacket"
import {$ClientboundUpdateRecipesPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundUpdateRecipesPacket"
import {$ClientboundPlayerInfoUpdatePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket"
import {$ClientboundSetDisplayObjectivePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetDisplayObjectivePacket"
import {$Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ClientboundClearTitlesPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundClearTitlesPacket"
import {$ClientboundTabListPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundTabListPacket"
import {$CrashReportCategory$$Type} from "net.minecraft.CrashReportCategory"
import {$ClientboundKeepAlivePacket$$Type} from "net.minecraft.network.protocol.common.ClientboundKeepAlivePacket"
import {$ClientboundSetEntityMotionPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetEntityMotionPacket"
import {$ClientboundPlayerCombatEnterPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundPlayerCombatEnterPacket"
import {$ClientboundMerchantOffersPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundMerchantOffersPacket"
import {$ClientboundChunkBatchFinishedPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundChunkBatchFinishedPacket"
import {$ClientboundBlockDestructionPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockDestructionPacket"
import {$ClientboundPlayerPositionPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundPlayerPositionPacket"
import {$ClientboundDisconnectPacket$$Type} from "net.minecraft.network.protocol.common.ClientboundDisconnectPacket"
import {$ClientboundPlayerCombatKillPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundPlayerCombatKillPacket"
import {$Exception$$Type} from "java.lang.Exception"
import {$ClientboundCustomReportDetailsPacket$$Type} from "net.minecraft.network.protocol.common.ClientboundCustomReportDetailsPacket"
import {$ReentrantBlockableEventLoop} from "net.minecraft.util.thread.ReentrantBlockableEventLoop"
import {$ClientboundCommandsPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundCommandsPacket"
import {$ClientboundBossEventPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBossEventPacket"
import {$ClientboundTransferPacket$$Type} from "net.minecraft.network.protocol.common.ClientboundTransferPacket"
import {$PacketFlow} from "net.minecraft.network.protocol.PacketFlow"
import {$ClientboundSetTitlesAnimationPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetTitlesAnimationPacket"
import {$ClientboundSectionBlocksUpdatePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSectionBlocksUpdatePacket"
import {$ClientboundSoundPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSoundPacket"
import {$ClientboundResourcePackPopPacket$$Type} from "net.minecraft.network.protocol.common.ClientboundResourcePackPopPacket"
import {$ClientboundResetScorePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundResetScorePacket"
import {$CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$ClientboundTickingStepPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundTickingStepPacket"
import {$ClientboundSetEquipmentPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetEquipmentPacket"
import {$ClientboundDamageEventPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundDamageEventPacket"
import {$ClientboundAnimatePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundAnimatePacket"
import {$ClientboundPlayerChatPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundPlayerChatPacket"
import {$ClientboundOpenSignEditorPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundOpenSignEditorPacket"
import {$ClientboundChunksBiomesPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundChunksBiomesPacket"
import {$ClientboundCustomPayloadPacket$$Type} from "net.minecraft.network.protocol.common.ClientboundCustomPayloadPacket"
import {$ConnectionProtocol} from "net.minecraft.network.ConnectionProtocol"
import {$ClientboundTeleportEntityPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundTeleportEntityPacket"
import {$ClientboundContainerClosePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundContainerClosePacket"
import {$ClientboundHurtAnimationPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundHurtAnimationPacket"
import {$ClientCommonPacketListener$$Interface} from "net.minecraft.network.protocol.common.ClientCommonPacketListener"
import {$ClientboundCookieRequestPacket$$Type} from "net.minecraft.network.protocol.cookie.ClientboundCookieRequestPacket"
import {$ClientboundSetBorderLerpSizePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetBorderLerpSizePacket"
import {$ClientboundDisguisedChatPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundDisguisedChatPacket"
import {$ClientboundSetEntityLinkPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetEntityLinkPacket"
import {$ClientboundContainerSetDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundContainerSetDataPacket"
import {$ClientboundRespawnPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundRespawnPacket"
import {$ClientboundSetChunkCacheCenterPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetChunkCacheCenterPacket"
import {$ClientboundAddExperienceOrbPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundAddExperienceOrbPacket"
import {$ClientboundPlayerInfoRemovePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundPlayerInfoRemovePacket"
import {$ClientboundChunkBatchStartPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundChunkBatchStartPacket"
import {$ClientboundSetHealthPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetHealthPacket"
import {$ClientboundLevelParticlesPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundLevelParticlesPacket"
import {$ClientboundBlockChangedAckPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockChangedAckPacket"
import {$ClientboundStopSoundPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundStopSoundPacket"
import {$ClientboundSetTitleTextPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetTitleTextPacket"
import {$ClientboundBlockUpdatePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockUpdatePacket"
import {$ClientboundSetPassengersPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetPassengersPacket"
import {$ClientboundPlayerLookAtPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundPlayerLookAtPacket"
import {$ClientboundSoundEntityPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSoundEntityPacket"
import {$ClientboundSetCarriedItemPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetCarriedItemPacket"
import {$ClientboundUpdateTagsPacket$$Type} from "net.minecraft.network.protocol.common.ClientboundUpdateTagsPacket"
import {$ClientboundGameEventPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundGameEventPacket"
import {$DisconnectionDetails, $DisconnectionDetails$$Type} from "net.minecraft.network.DisconnectionDetails"
import {$ClientboundLightUpdatePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundLightUpdatePacket"
import {$ClientboundPongResponsePacket$$Type} from "net.minecraft.network.protocol.ping.ClientboundPongResponsePacket"
import {$ClientboundServerDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundServerDataPacket"
import {$ClientboundSystemChatPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSystemChatPacket"
import {$ClientboundRecipePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundRecipePacket"
import {$ClientboundSetSubtitleTextPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetSubtitleTextPacket"
import {$ClientboundUpdateAttributesPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundUpdateAttributesPacket"
import {$ClientboundMapItemDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundMapItemDataPacket"
import {$ClientboundOpenBookPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundOpenBookPacket"
import {$ClientboundSetDefaultSpawnPositionPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetDefaultSpawnPositionPacket"
import {$ClientboundSetEntityDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetEntityDataPacket"
import {$ClientboundSetTimePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetTimePacket"
import {$CustomPacketPayload$Type$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$ClientboundCustomChatCompletionsPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundCustomChatCompletionsPacket"
import {$ClientboundProjectilePowerPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundProjectilePowerPacket"
import {$ClientboundTakeItemEntityPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundTakeItemEntityPacket"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$ClientboundChangeDifficultyPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundChangeDifficultyPacket"
import {$ClientboundExplodePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundExplodePacket"
import {$ClientboundDebugSamplePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundDebugSamplePacket"
import {$ClientboundCommandSuggestionsPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundCommandSuggestionsPacket"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ClientboundResourcePackPushPacket$$Type} from "net.minecraft.network.protocol.common.ClientboundResourcePackPushPacket"
import {$ClientboundAddEntityPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundAddEntityPacket"
import {$ClientboundLoginPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundLoginPacket"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$ClientboundAwardStatsPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundAwardStatsPacket"
import {$ClientboundStartConfigurationPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundStartConfigurationPacket"
import {$ClientboundMoveEntityPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundMoveEntityPacket"
import {$ClientboundHorseScreenOpenPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundHorseScreenOpenPacket"
import {$ClientboundSetCameraPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetCameraPacket"
import {$ClientboundSelectAdvancementsTabPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSelectAdvancementsTabPacket"
import {$ClientboundStoreCookiePacket$$Type} from "net.minecraft.network.protocol.common.ClientboundStoreCookiePacket"
import {$ClientboundServerLinksPacket$$Type} from "net.minecraft.network.protocol.common.ClientboundServerLinksPacket"
import {$ClientboundRemoveEntitiesPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundRemoveEntitiesPacket"
import {$ClientboundRemoveMobEffectPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundRemoveMobEffectPacket"
import {$ClientboundSetPlayerTeamPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetPlayerTeamPacket"
import {$ClientboundSetSimulationDistancePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundSetSimulationDistancePacket"
import {$ClientboundLevelEventPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundLevelEventPacket"
import {$ClientboundEntityEventPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundEntityEventPacket"
import {$ClientboundPlaceGhostRecipePacket$$Type} from "net.minecraft.network.protocol.game.ClientboundPlaceGhostRecipePacket"
import {$ClientboundBlockEntityDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import {$Connection} from "net.minecraft.network.Connection"
import {$ClientboundRotateHeadPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundRotateHeadPacket"

export interface $ClientGamePacketListener$$Interface extends $ClientPongPacketListener$$Interface, $ClientCommonPacketListener$$Interface {
set "actionBarText"(value: $ClientboundSetActionBarTextPacket$$Type)
set "subtitleText"(value: $ClientboundSetSubtitleTextPacket$$Type)
set "titlesAnimation"(value: $ClientboundSetTitlesAnimationPacket$$Type)
set "titleText"(value: $ClientboundSetTitleTextPacket$$Type)
get "acceptingMessages"(): boolean
get "mainThreadEventLoop"(): $ReentrantBlockableEventLoop<(never)>
get "connection"(): $Connection
get "connectionType"(): $ConnectionType
}

export class $ClientGamePacketListener implements $ClientGamePacketListener$$Interface {
 "protocol"(): $ConnectionProtocol
 "handleBlockChangedAck"(arg0: $ClientboundBlockChangedAckPacket$$Type): void
 "handleLogin"(arg0: $ClientboundLoginPacket$$Type): void
 "handleInitializeBorder"(arg0: $ClientboundInitializeBorderPacket$$Type): void
 "handleSetCarriedItem"(arg0: $ClientboundSetCarriedItemPacket$$Type): void
 "handleOpenSignEditor"(arg0: $ClientboundOpenSignEditorPacket$$Type): void
 "handleUpdateMobEffect"(arg0: $ClientboundUpdateMobEffectPacket$$Type): void
 "handleSetBorderCenter"(arg0: $ClientboundSetBorderCenterPacket$$Type): void
 "handleSetBorderLerpSize"(arg0: $ClientboundSetBorderLerpSizePacket$$Type): void
 "handleSetBorderSize"(arg0: $ClientboundSetBorderSizePacket$$Type): void
 "handleSetEntityData"(arg0: $ClientboundSetEntityDataPacket$$Type): void
 "handleRemoveEntities"(arg0: $ClientboundRemoveEntitiesPacket$$Type): void
 "handleCommandSuggestions"(arg0: $ClientboundCommandSuggestionsPacket$$Type): void
 "handleChunkBlocksUpdate"(arg0: $ClientboundSectionBlocksUpdatePacket$$Type): void
 "handleTakeItemEntity"(arg0: $ClientboundTakeItemEntityPacket$$Type): void
 "handleHorseScreenOpen"(arg0: $ClientboundHorseScreenOpenPacket$$Type): void
 "handleBlockDestruction"(arg0: $ClientboundBlockDestructionPacket$$Type): void
 "handleEntityLinkPacket"(arg0: $ClientboundSetEntityLinkPacket$$Type): void
 "handleAddExperienceOrb"(arg0: $ClientboundAddExperienceOrbPacket$$Type): void
 "handleTeleportEntity"(arg0: $ClientboundTeleportEntityPacket$$Type): void
 "handleHurtAnimation"(arg0: $ClientboundHurtAnimationPacket$$Type): void
 "handleContainerSetSlot"(arg0: $ClientboundContainerSetSlotPacket$$Type): void
 "handleContainerContent"(arg0: $ClientboundContainerSetContentPacket$$Type): void
 "handleContainerSetData"(arg0: $ClientboundContainerSetDataPacket$$Type): void
 "handleBlockEntityData"(arg0: $ClientboundBlockEntityDataPacket$$Type): void
 "handleConfigurationStart"(arg0: $ClientboundStartConfigurationPacket$$Type): void
 "handleContainerClose"(arg0: $ClientboundContainerClosePacket$$Type): void
 "handleStopSoundEvent"(arg0: $ClientboundStopSoundPacket$$Type): void
 "handleUpdateRecipes"(arg0: $ClientboundUpdateRecipesPacket$$Type): void
 "handleLevelChunkWithLight"(arg0: $ClientboundLevelChunkWithLightPacket$$Type): void
 "handleDisguisedChat"(arg0: $ClientboundDisguisedChatPacket$$Type): void
 "handleTagQueryPacket"(arg0: $ClientboundTagQueryPacket$$Type): void
 "handleAddOrRemoveRecipes"(arg0: $ClientboundRecipePacket$$Type): void
 "handleForgetLevelChunk"(arg0: $ClientboundForgetLevelChunkPacket$$Type): void
 "handlePlayerCombatEnd"(arg0: $ClientboundPlayerCombatEndPacket$$Type): void
 "handlePlayerCombatEnter"(arg0: $ClientboundPlayerCombatEnterPacket$$Type): void
 "handlePlayerCombatKill"(arg0: $ClientboundPlayerCombatKillPacket$$Type): void
 "handleSetExperience"(arg0: $ClientboundSetExperiencePacket$$Type): void
 "handleChangeDifficulty"(arg0: $ClientboundChangeDifficultyPacket$$Type): void
 "handleSetEntityMotion"(arg0: $ClientboundSetEntityMotionPacket$$Type): void
 "handleSetChunkCacheRadius"(arg0: $ClientboundSetChunkCacheRadiusPacket$$Type): void
 "handlePlayerInfoRemove"(arg0: $ClientboundPlayerInfoRemovePacket$$Type): void
 "handleSetDisplayObjective"(arg0: $ClientboundSetDisplayObjectivePacket$$Type): void
 "handleSetChunkCacheCenter"(arg0: $ClientboundSetChunkCacheCenterPacket$$Type): void
 "handleChunkBatchStart"(arg0: $ClientboundChunkBatchStartPacket$$Type): void
 "handleTabListCustomisation"(arg0: $ClientboundTabListPacket$$Type): void
 "handleParticleEvent"(arg0: $ClientboundLevelParticlesPacket$$Type): void
 "handleMerchantOffers"(arg0: $ClientboundMerchantOffersPacket$$Type): void
 "handleLightUpdatePacket"(arg0: $ClientboundLightUpdatePacket$$Type): void
 "handleSoundEntityEvent"(arg0: $ClientboundSoundEntityPacket$$Type): void
 "handleRemoveMobEffect"(arg0: $ClientboundRemoveMobEffectPacket$$Type): void
 "handlePlayerInfoUpdate"(arg0: $ClientboundPlayerInfoUpdatePacket$$Type): void
 "handleSetPlayerTeamPacket"(arg0: $ClientboundSetPlayerTeamPacket$$Type): void
 "handleChunkBatchFinished"(arg0: $ClientboundChunkBatchFinishedPacket$$Type): void
 "handlePlayerAbilities"(arg0: $ClientboundPlayerAbilitiesPacket$$Type): void
 "handleUpdateAttributes"(arg0: $ClientboundUpdateAttributesPacket$$Type): void
 "handleSetSimulationDistance"(arg0: $ClientboundSetSimulationDistancePacket$$Type): void
 "handleCustomChatCompletions"(arg0: $ClientboundCustomChatCompletionsPacket$$Type): void
 "handleSelectAdvancementsTab"(arg0: $ClientboundSelectAdvancementsTabPacket$$Type): void
 "handleSetBorderWarningDelay"(arg0: $ClientboundSetBorderWarningDelayPacket$$Type): void
 "handleUpdateAdvancementsPacket"(arg0: $ClientboundUpdateAdvancementsPacket$$Type): void
 "handleSetBorderWarningDistance"(arg0: $ClientboundSetBorderWarningDistancePacket$$Type): void
 "handleProjectilePowerPacket"(arg0: $ClientboundProjectilePowerPacket$$Type): void
 "handleSetEntityPassengersPacket"(arg0: $ClientboundSetPassengersPacket$$Type): void
 "handleGameEvent"(arg0: $ClientboundGameEventPacket$$Type): void
 "handleEntityEvent"(arg0: $ClientboundEntityEventPacket$$Type): void
 "handleDamageEvent"(arg0: $ClientboundDamageEventPacket$$Type): void
 "handleSystemChat"(arg0: $ClientboundSystemChatPacket$$Type): void
 "handleTickingStep"(arg0: $ClientboundTickingStepPacket$$Type): void
 "handleBlockUpdate"(arg0: $ClientboundBlockUpdatePacket$$Type): void
 "handleSetHealth"(arg0: $ClientboundSetHealthPacket$$Type): void
 "handleMovePlayer"(arg0: $ClientboundPlayerPositionPacket$$Type): void
 "handleMoveEntity"(arg0: $ClientboundMoveEntityPacket$$Type): void
 "handleTickingState"(arg0: $ClientboundTickingStatePacket$$Type): void
 "handleAddEntity"(arg0: $ClientboundAddEntityPacket$$Type): void
 "handleSetTime"(arg0: $ClientboundSetTimePacket$$Type): void
 "handleExplosion"(arg0: $ClientboundExplodePacket$$Type): void
 "handleOpenScreen"(arg0: $ClientboundOpenScreenPacket$$Type): void
 "handleRotateMob"(arg0: $ClientboundRotateHeadPacket$$Type): void
 "handleRespawn"(arg0: $ClientboundRespawnPacket$$Type): void
 "handlePlayerChat"(arg0: $ClientboundPlayerChatPacket$$Type): void
 "handleSetEquipment"(arg0: $ClientboundSetEquipmentPacket$$Type): void
 "handleDeleteChat"(arg0: $ClientboundDeleteChatPacket$$Type): void
 "handleBlockEvent"(arg0: $ClientboundBlockEventPacket$$Type): void
 "handleAnimate"(arg0: $ClientboundAnimatePacket$$Type): void
 "handleChunksBiomes"(arg0: $ClientboundChunksBiomesPacket$$Type): void
 "handleSetSpawn"(arg0: $ClientboundSetDefaultSpawnPositionPacket$$Type): void
 "handleSoundEvent"(arg0: $ClientboundSoundPacket$$Type): void
 "handleBossUpdate"(arg0: $ClientboundBossEventPacket$$Type): void
 "handleMapItemData"(arg0: $ClientboundMapItemDataPacket$$Type): void
 "handleCommands"(arg0: $ClientboundCommandsPacket$$Type): void
 "handleSetCamera"(arg0: $ClientboundSetCameraPacket$$Type): void
 "setActionBarText"(arg0: $ClientboundSetActionBarTextPacket$$Type): void
 "handleLevelEvent"(arg0: $ClientboundLevelEventPacket$$Type): void
 "handleLookAt"(arg0: $ClientboundPlayerLookAtPacket$$Type): void
 "setSubtitleText"(arg0: $ClientboundSetSubtitleTextPacket$$Type): void
 "setTitlesAnimation"(arg0: $ClientboundSetTitlesAnimationPacket$$Type): void
 "handleServerData"(arg0: $ClientboundServerDataPacket$$Type): void
 "handleTitlesClear"(arg0: $ClientboundClearTitlesPacket$$Type): void
 "setTitleText"(arg0: $ClientboundSetTitleTextPacket$$Type): void
 "handleAwardStats"(arg0: $ClientboundAwardStatsPacket$$Type): void
 "handleMoveVehicle"(arg0: $ClientboundMoveVehiclePacket$$Type): void
 "handleBundlePacket"(arg0: $ClientboundBundlePacket$$Type): void
 "handleAddObjective"(arg0: $ClientboundSetObjectivePacket$$Type): void
 "handleOpenBook"(arg0: $ClientboundOpenBookPacket$$Type): void
 "handleResetScore"(arg0: $ClientboundResetScorePacket$$Type): void
 "handleSetScore"(arg0: $ClientboundSetScorePacket$$Type): void
 "handleItemCooldown"(arg0: $ClientboundCooldownPacket$$Type): void
 "handleDebugSample"(arg0: $ClientboundDebugSamplePacket$$Type): void
 "handlePlaceRecipe"(arg0: $ClientboundPlaceGhostRecipePacket$$Type): void
 "handlePongResponse"(arg0: $ClientboundPongResponsePacket$$Type): void
 "handlePing"(arg0: $ClientboundPingPacket$$Type): void
 "handleDisconnect"(arg0: $ClientboundDisconnectPacket$$Type): void
 "handleCustomPayload"(arg0: $ClientboundCustomPayloadPacket$$Type): void
 "handleCustomReportDetails"(arg0: $ClientboundCustomReportDetailsPacket$$Type): void
 "handleResourcePackPop"(arg0: $ClientboundResourcePackPopPacket$$Type): void
 "handleResourcePackPush"(arg0: $ClientboundResourcePackPushPacket$$Type): void
 "handleServerLinks"(arg0: $ClientboundServerLinksPacket$$Type): void
 "handleTransfer"(arg0: $ClientboundTransferPacket$$Type): void
 "handleStoreCookie"(arg0: $ClientboundStoreCookiePacket$$Type): void
 "handleKeepAlive"(arg0: $ClientboundKeepAlivePacket$$Type): void
 "handleUpdateTags"(arg0: $ClientboundUpdateTagsPacket$$Type): void
 "fillListenerSpecificCrashDetails"(arg0: $CrashReport$$Type, arg1: $CrashReportCategory$$Type): void
 "fillCrashReport"(arg0: $CrashReport$$Type): void
 "onDisconnect"(arg0: $DisconnectionDetails$$Type): void
 "createDisconnectionInfo"(arg0: $Component$$Type, arg1: $Throwable$$Type): $DisconnectionDetails
 "isAcceptingMessages"(): boolean
 "shouldHandleMessage"(arg0: $Packet$$Type<(never)>): boolean
 "onPacketError"(arg0: $Packet$$Type, arg1: $Exception$$Type): void
 "flow"(): $PacketFlow
 "handleRequestCookie"(arg0: $ClientboundCookieRequestPacket$$Type): void
 "disconnect"(arg0: $Component$$Type): void
 "send"(arg0: $CustomPacketPayload$$Type): void
 "getMainThreadEventLoop"(): $ReentrantBlockableEventLoop<(never)>
 "getConnection"(): $Connection
 "hasChannel"(arg0: $CustomPacketPayload$Type$$Type<(never)>): boolean
 "hasChannel"(arg0: $CustomPacketPayload$$Type): boolean
 "hasChannel"(arg0: $ResourceLocation$$Type): boolean
 "send"(arg0: $Packet$$Type<(never)>): void
 "getConnectionType"(): $ConnectionType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientGamePacketListener$$Type = ($ClientGamePacketListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientGamePacketListener$$Original = $ClientGamePacketListener;}
declare module "net.minecraft.network.protocol.game.ClientboundPlayerCombatEnterPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundPlayerCombatEnterPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "INSTANCE": $ClientboundPlayerCombatEnterPacket
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($ClientboundPlayerCombatEnterPacket)>

public "type"(): $PacketType<($ClientboundPlayerCombatEnterPacket)>
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundPlayerCombatEnterPacket$$Type = ($ClientboundPlayerCombatEnterPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundPlayerCombatEnterPacket$$Original = $ClientboundPlayerCombatEnterPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundChunksBiomesPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$ClientboundChunksBiomesPacket$ChunkBiomeData, $ClientboundChunksBiomesPacket$ChunkBiomeData$$Type} from "net.minecraft.network.protocol.game.ClientboundChunksBiomesPacket$ChunkBiomeData"
import {$LevelChunk$$Type} from "net.minecraft.world.level.chunk.LevelChunk"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$Record} from "java.lang.Record"

export class $ClientboundChunksBiomesPacket extends $Record implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundChunksBiomesPacket)>

constructor(arg0: $List$$Type<($ClientboundChunksBiomesPacket$ChunkBiomeData$$Type)>)

public "type"(): $PacketType<($ClientboundChunksBiomesPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "chunkBiomeData"(): $List<($ClientboundChunksBiomesPacket$ChunkBiomeData)>
public static "forChunks"(arg0: $List$$Type<($LevelChunk$$Type)>): $ClientboundChunksBiomesPacket
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundChunksBiomesPacket$$Type = ({"chunkBiomeData"?: $List$$Type<($ClientboundChunksBiomesPacket$ChunkBiomeData$$Type)>}) | ([chunkBiomeData?: $List$$Type<($ClientboundChunksBiomesPacket$ChunkBiomeData$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundChunksBiomesPacket$$Original = $ClientboundChunksBiomesPacket;}
declare module "net.minecraft.network.protocol.login.ClientboundLoginDisconnectPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$ClientLoginPacketListener, $ClientLoginPacketListener$$Type} from "net.minecraft.network.protocol.login.ClientLoginPacketListener"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $ClientboundLoginDisconnectPacket implements $Packet$$Interface<($ClientLoginPacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundLoginDisconnectPacket)>

constructor(arg0: $Component$$Type)

public "getReason"(): $Component
public "type"(): $PacketType<($ClientboundLoginDisconnectPacket)>
public "handle"(arg0: $ClientLoginPacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientLoginPacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientLoginPacketListener$$Type)>): $StreamCodec<(B), ($ClientLoginPacketListener)>
get "reason"(): $Component
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundLoginDisconnectPacket$$Type = ($ClientboundLoginDisconnectPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundLoginDisconnectPacket$$Original = $ClientboundLoginDisconnectPacket;}
declare module "net.minecraft.network.protocol.common.ClientboundResourcePackPushPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ClientCommonPacketListener, $ClientCommonPacketListener$$Type} from "net.minecraft.network.protocol.common.ClientCommonPacketListener"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$Record} from "java.lang.Record"

export class $ClientboundResourcePackPushPacket extends $Record implements $Packet$$Interface<($ClientCommonPacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($ClientboundResourcePackPushPacket)>
static readonly "MAX_HASH_LENGTH": integer

constructor(arg0: $UUID$$Type, arg1: StringJS, arg2: StringJS, arg3: boolean, arg4: ($Component$$Type)?)

public "type"(): $PacketType<($ClientboundResourcePackPushPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "hash"(): StringJS
public "url"(): StringJS
public "id"(): $UUID
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientCommonPacketListener$$Type): void
public "prompt"(): $Optional<($Component)>
public "required"(): boolean
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientCommonPacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientCommonPacketListener$$Type)>): $StreamCodec<(B), ($ClientCommonPacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundResourcePackPushPacket$$Type = ({"required"?: boolean, "hash"?: StringJS, "url"?: StringJS, "prompt"?: ($Component$$Type)?, "id"?: $UUID$$Type}) | ([required?: boolean, hash?: StringJS, url?: StringJS, prompt?: ($Component$$Type)?, id?: $UUID$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundResourcePackPushPacket$$Original = $ClientboundResourcePackPushPacket;}
declare module "net.minecraft.network.protocol.common.custom.StructuresDebugPayload$PieceInfo" {
import {$BoundingBox, $BoundingBox$$Type} from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Record} from "java.lang.Record"

export class $StructuresDebugPayload$PieceInfo extends $Record {
constructor(arg0: $FriendlyByteBuf$$Type)
constructor(arg0: $BoundingBox$$Type, arg1: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "write"(arg0: $FriendlyByteBuf$$Type): void
public "isStart"(): boolean
public "boundingBox"(): $BoundingBox
get "start"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructuresDebugPayload$PieceInfo$$Type = ({"isStart"?: boolean, "boundingBox"?: $BoundingBox$$Type}) | ([isStart?: boolean, boundingBox?: $BoundingBox$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructuresDebugPayload$PieceInfo$$Original = $StructuresDebugPayload$PieceInfo;}
declare module "net.minecraft.network.protocol.game.ClientboundLightUpdatePacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$BitSet$$Type} from "java.util.BitSet"
import {$LevelLightEngine$$Type} from "net.minecraft.world.level.lighting.LevelLightEngine"
import {$ClientboundLightUpdatePacketData} from "net.minecraft.network.protocol.game.ClientboundLightUpdatePacketData"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"

export class $ClientboundLightUpdatePacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundLightUpdatePacket)>

constructor(arg0: $ChunkPos$$Type, arg1: $LevelLightEngine$$Type, arg2: $BitSet$$Type, arg3: $BitSet$$Type)

public "type"(): $PacketType<($ClientboundLightUpdatePacket)>
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getX"(): integer
public "getZ"(): integer
public "getLightData"(): $ClientboundLightUpdatePacketData
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "x"(): integer
get "z"(): integer
get "lightData"(): $ClientboundLightUpdatePacketData
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundLightUpdatePacket$$Type = ($ClientboundLightUpdatePacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundLightUpdatePacket$$Original = $ClientboundLightUpdatePacket;}
declare module "net.minecraft.network.protocol.game.ServerboundContainerClickPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$ClickType, $ClickType$$Type} from "net.minecraft.world.inventory.ClickType"
import {$Int2ObjectMap, $Int2ObjectMap$$Type} from "it.unimi.dsi.fastutil.ints.Int2ObjectMap"

export class $ServerboundContainerClickPacket implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ServerboundContainerClickPacket)>

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $ClickType$$Type, arg5: $ItemStack$$Type, arg6: $Int2ObjectMap$$Type<($ItemStack$$Type)>)

public "type"(): $PacketType<($ServerboundContainerClickPacket)>
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "getStateId"(): integer
public "getSlotNum"(): integer
public "getChangedSlots"(): $Int2ObjectMap<($ItemStack)>
public "getClickType"(): $ClickType
public "getButtonNum"(): integer
public "getCarriedItem"(): $ItemStack
public "getContainerId"(): integer
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "stateId"(): integer
get "slotNum"(): integer
get "changedSlots"(): $Int2ObjectMap<($ItemStack)>
get "clickType"(): $ClickType
get "buttonNum"(): integer
get "carriedItem"(): $ItemStack
get "containerId"(): integer
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundContainerClickPacket$$Type = ($ServerboundContainerClickPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundContainerClickPacket$$Original = $ServerboundContainerClickPacket;}
declare module "net.minecraft.network.protocol.game.ServerboundChunkBatchReceivedPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $ServerboundChunkBatchReceivedPacket extends $Record implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundChunkBatchReceivedPacket)>

constructor(arg0: float)

public "type"(): $PacketType<($ServerboundChunkBatchReceivedPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "desiredChunksPerTick"(): float
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundChunkBatchReceivedPacket$$Type = ({"desiredChunksPerTick"?: float}) | ([desiredChunksPerTick?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundChunkBatchReceivedPacket$$Original = $ServerboundChunkBatchReceivedPacket;}
declare module "net.minecraft.network.protocol.game.ServerboundPlayerCommandPacket$Action" {
import {$Enum} from "java.lang.Enum"

export class $ServerboundPlayerCommandPacket$Action extends $Enum<($ServerboundPlayerCommandPacket$Action)> {
static readonly "PRESS_SHIFT_KEY": $ServerboundPlayerCommandPacket$Action
static readonly "STOP_RIDING_JUMP": $ServerboundPlayerCommandPacket$Action
static readonly "STOP_SLEEPING": $ServerboundPlayerCommandPacket$Action
static readonly "START_RIDING_JUMP": $ServerboundPlayerCommandPacket$Action
static readonly "START_SPRINTING": $ServerboundPlayerCommandPacket$Action
static readonly "STOP_SPRINTING": $ServerboundPlayerCommandPacket$Action
static readonly "START_FALL_FLYING": $ServerboundPlayerCommandPacket$Action
static readonly "RELEASE_SHIFT_KEY": $ServerboundPlayerCommandPacket$Action
static readonly "OPEN_INVENTORY": $ServerboundPlayerCommandPacket$Action

public static "values"(): ($ServerboundPlayerCommandPacket$Action)[]
public static "valueOf"(arg0: StringJS): $ServerboundPlayerCommandPacket$Action
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundPlayerCommandPacket$Action$$Type = (("press_shift_key") | ("release_shift_key") | ("stop_sleeping") | ("start_sprinting") | ("stop_sprinting") | ("start_riding_jump") | ("stop_riding_jump") | ("open_inventory") | ("start_fall_flying"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundPlayerCommandPacket$Action$$Original = $ServerboundPlayerCommandPacket$Action;}
declare module "net.minecraft.network.protocol.game.ClientboundSetTitlesAnimationPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundSetTitlesAnimationPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundSetTitlesAnimationPacket)>

constructor(arg0: integer, arg1: integer, arg2: integer)

public "type"(): $PacketType<($ClientboundSetTitlesAnimationPacket)>
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getStay"(): integer
public "getFadeOut"(): integer
public "getFadeIn"(): integer
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "stay"(): integer
get "fadeOut"(): integer
get "fadeIn"(): integer
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundSetTitlesAnimationPacket$$Type = ($ClientboundSetTitlesAnimationPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundSetTitlesAnimationPacket$$Original = $ClientboundSetTitlesAnimationPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundTakeItemEntityPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundTakeItemEntityPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundTakeItemEntityPacket)>

constructor(arg0: integer, arg1: integer, arg2: integer)

public "type"(): $PacketType<($ClientboundTakeItemEntityPacket)>
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getAmount"(): integer
public "getItemId"(): integer
public "getPlayerId"(): integer
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "amount"(): integer
get "itemId"(): integer
get "playerId"(): integer
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundTakeItemEntityPacket$$Type = ($ClientboundTakeItemEntityPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundTakeItemEntityPacket$$Original = $ClientboundTakeItemEntityPacket;}
declare module "net.minecraft.network.protocol.game.ServerboundSignUpdatePacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $ServerboundSignUpdatePacket implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundSignUpdatePacket)>

constructor(arg0: $BlockPos$$Type, arg1: boolean, arg2: StringJS, arg3: StringJS, arg4: StringJS, arg5: StringJS)

public "type"(): $PacketType<($ServerboundSignUpdatePacket)>
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getPos"(): $BlockPos
public "getLines"(): (StringJS)[]
public "isFrontText"(): boolean
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "pos"(): $BlockPos
get "lines"(): (StringJS)[]
get "frontText"(): boolean
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundSignUpdatePacket$$Type = ($ServerboundSignUpdatePacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundSignUpdatePacket$$Original = $ServerboundSignUpdatePacket;}
declare module "net.minecraft.network.protocol.game.ClientboundTeleportEntityPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundTeleportEntityPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundTeleportEntityPacket)>

constructor(arg0: $Entity$$Type)

public "type"(): $PacketType<($ClientboundTeleportEntityPacket)>
public "getId"(): integer
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "getX"(): double
public "getZ"(): double
public "getY"(): double
public "getyRot"(): byte
public "isOnGround"(): boolean
public "getxRot"(): byte
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "id"(): integer
get "x"(): double
get "z"(): double
get "y"(): double
get "yRot"(): byte
get "onGround"(): boolean
get "xRot"(): byte
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundTeleportEntityPacket$$Type = ($ClientboundTeleportEntityPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundTeleportEntityPacket$$Original = $ClientboundTeleportEntityPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundExplodePacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$List, $List$$Type} from "java.util.List"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$Explosion$BlockInteraction, $Explosion$BlockInteraction$$Type} from "net.minecraft.world.level.Explosion$BlockInteraction"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ParticleOptions, $ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"

export class $ClientboundExplodePacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientboundExplodePacket)>

constructor(arg0: double, arg1: double, arg2: double, arg3: float, arg4: $List$$Type<($BlockPos$$Type)>, arg5: $Vec3$$Type, arg6: $Explosion$BlockInteraction$$Type, arg7: $ParticleOptions$$Type, arg8: $ParticleOptions$$Type, arg9: $Holder$$Type<($SoundEvent)>)

public "type"(): $PacketType<($ClientboundExplodePacket)>
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getSmallExplosionParticles"(): $ParticleOptions
public "getX"(): double
public "getZ"(): double
public "getExplosionSound"(): $Holder<($SoundEvent)>
public "getY"(): double
public "getToBlow"(): $List<($BlockPos)>
public "getLargeExplosionParticles"(): $ParticleOptions
public "getPower"(): float
public "getBlockInteraction"(): $Explosion$BlockInteraction
public "getKnockbackZ"(): float
public "getKnockbackX"(): float
public "getKnockbackY"(): float
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "smallExplosionParticles"(): $ParticleOptions
get "x"(): double
get "z"(): double
get "explosionSound"(): $Holder<($SoundEvent)>
get "y"(): double
get "toBlow"(): $List<($BlockPos)>
get "largeExplosionParticles"(): $ParticleOptions
get "power"(): float
get "blockInteraction"(): $Explosion$BlockInteraction
get "knockbackZ"(): float
get "knockbackX"(): float
get "knockbackY"(): float
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundExplodePacket$$Type = ($ClientboundExplodePacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundExplodePacket$$Original = $ClientboundExplodePacket;}
declare module "net.minecraft.network.protocol.game.ClientboundCooldownPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$Record} from "java.lang.Record"

export class $ClientboundCooldownPacket extends $Record implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientboundCooldownPacket)>

constructor(arg0: $Item$$Type, arg1: integer)

public "type"(): $PacketType<($ClientboundCooldownPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "duration"(): integer
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "item"(): $Item
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundCooldownPacket$$Type = ({"duration"?: integer, "item"?: $Item$$Type}) | ([duration?: integer, item?: $Item$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundCooldownPacket$$Original = $ClientboundCooldownPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket$Action$Reader" {
import {$ClientboundPlayerInfoUpdatePacket$EntryBuilder, $ClientboundPlayerInfoUpdatePacket$EntryBuilder$$Type} from "net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket$EntryBuilder"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"

export interface $ClientboundPlayerInfoUpdatePacket$Action$Reader$$Interface {

(arg0: $ClientboundPlayerInfoUpdatePacket$EntryBuilder, arg1: $RegistryFriendlyByteBuf): void
}

export class $ClientboundPlayerInfoUpdatePacket$Action$Reader implements $ClientboundPlayerInfoUpdatePacket$Action$Reader$$Interface {
 "read"(arg0: $ClientboundPlayerInfoUpdatePacket$EntryBuilder$$Type, arg1: $RegistryFriendlyByteBuf$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundPlayerInfoUpdatePacket$Action$Reader$$Type = ((arg0: $ClientboundPlayerInfoUpdatePacket$EntryBuilder, arg1: $RegistryFriendlyByteBuf) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundPlayerInfoUpdatePacket$Action$Reader$$Original = $ClientboundPlayerInfoUpdatePacket$Action$Reader;}
declare module "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CustomPacketPayload} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$Record} from "java.lang.Record"

export class $CustomPacketPayload$Type<T extends $CustomPacketPayload> extends $Record {
constructor(id: $ResourceLocation$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomPacketPayload$Type$$Type<T> = ({"id"?: $ResourceLocation$$Type}) | ([id?: $ResourceLocation$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomPacketPayload$Type$$Original<T> = $CustomPacketPayload$Type<(T)>;}
declare module "net.minecraft.network.protocol.game.ClientboundChangeDifficultyPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$Difficulty, $Difficulty$$Type} from "net.minecraft.world.Difficulty"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundChangeDifficultyPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundChangeDifficultyPacket)>

constructor(arg0: $Difficulty$$Type, arg1: boolean)

public "type"(): $PacketType<($ClientboundChangeDifficultyPacket)>
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "isLocked"(): boolean
public "getDifficulty"(): $Difficulty
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "locked"(): boolean
get "difficulty"(): $Difficulty
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundChangeDifficultyPacket$$Type = ($ClientboundChangeDifficultyPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundChangeDifficultyPacket$$Original = $ClientboundChangeDifficultyPacket;}
declare module "net.minecraft.network.protocol.common.custom.GoalDebugPayload$DebugGoal" {
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Record} from "java.lang.Record"

export class $GoalDebugPayload$DebugGoal extends $Record {
constructor(arg0: $FriendlyByteBuf$$Type)
constructor(arg0: integer, arg1: boolean, arg2: StringJS)

public "name"(): StringJS
public "priority"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "write"(arg0: $FriendlyByteBuf$$Type): void
public "isRunning"(): boolean
get "running"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GoalDebugPayload$DebugGoal$$Type = ({"isRunning"?: boolean, "priority"?: integer, "name"?: StringJS}) | ([isRunning?: boolean, priority?: integer, name?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GoalDebugPayload$DebugGoal$$Original = $GoalDebugPayload$DebugGoal;}
declare module "net.minecraft.network.protocol.game.ServerboundChangeDifficultyPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$Difficulty, $Difficulty$$Type} from "net.minecraft.world.Difficulty"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $ServerboundChangeDifficultyPacket implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundChangeDifficultyPacket)>

constructor(arg0: $Difficulty$$Type)

public "type"(): $PacketType<($ServerboundChangeDifficultyPacket)>
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "getDifficulty"(): $Difficulty
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "difficulty"(): $Difficulty
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundChangeDifficultyPacket$$Type = ($ServerboundChangeDifficultyPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundChangeDifficultyPacket$$Original = $ServerboundChangeDifficultyPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket$Action" {
import {$ClientboundPlayerInfoUpdatePacket$Action$Writer} from "net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket$Action$Writer"
import {$Enum} from "java.lang.Enum"
import {$ClientboundPlayerInfoUpdatePacket$Action$Reader} from "net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket$Action$Reader"

export class $ClientboundPlayerInfoUpdatePacket$Action extends $Enum<($ClientboundPlayerInfoUpdatePacket$Action)> {
static readonly "UPDATE_DISPLAY_NAME": $ClientboundPlayerInfoUpdatePacket$Action
readonly "reader": $ClientboundPlayerInfoUpdatePacket$Action$Reader
static readonly "UPDATE_LISTED": $ClientboundPlayerInfoUpdatePacket$Action
static readonly "ADD_PLAYER": $ClientboundPlayerInfoUpdatePacket$Action
static readonly "UPDATE_GAME_MODE": $ClientboundPlayerInfoUpdatePacket$Action
readonly "writer": $ClientboundPlayerInfoUpdatePacket$Action$Writer
static readonly "UPDATE_LATENCY": $ClientboundPlayerInfoUpdatePacket$Action
static readonly "INITIALIZE_CHAT": $ClientboundPlayerInfoUpdatePacket$Action

public static "values"(): ($ClientboundPlayerInfoUpdatePacket$Action)[]
public static "valueOf"(arg0: StringJS): $ClientboundPlayerInfoUpdatePacket$Action
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundPlayerInfoUpdatePacket$Action$$Type = (("add_player") | ("initialize_chat") | ("update_game_mode") | ("update_listed") | ("update_latency") | ("update_display_name"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundPlayerInfoUpdatePacket$Action$$Original = $ClientboundPlayerInfoUpdatePacket$Action;}
declare module "net.minecraft.network.protocol.game.ClientboundResetScorePacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$Record} from "java.lang.Record"

export class $ClientboundResetScorePacket extends $Record implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundResetScorePacket)>

constructor(arg0: StringJS, arg1: StringJS)

public "type"(): $PacketType<($ClientboundResetScorePacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "owner"(): StringJS
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "objectiveName"(): StringJS
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundResetScorePacket$$Type = ({"objectiveName"?: StringJS, "owner"?: StringJS}) | ([objectiveName?: StringJS, owner?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundResetScorePacket$$Original = $ClientboundResetScorePacket;}
declare module "net.minecraft.network.protocol.game.ClientboundTabListPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$Record} from "java.lang.Record"

export class $ClientboundTabListPacket extends $Record implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientboundTabListPacket)>

constructor(arg0: $Component$$Type, arg1: $Component$$Type)

public "type"(): $PacketType<($ClientboundTabListPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "header"(): $Component
public "footer"(): $Component
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundTabListPacket$$Type = ({"header"?: $Component$$Type, "footer"?: $Component$$Type}) | ([header?: $Component$$Type, footer?: $Component$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundTabListPacket$$Original = $ClientboundTabListPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundHurtAnimationPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$Record} from "java.lang.Record"

export class $ClientboundHurtAnimationPacket extends $Record implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundHurtAnimationPacket)>

constructor(arg0: integer, arg1: float)
constructor(arg0: $LivingEntity$$Type)

public "type"(): $PacketType<($ClientboundHurtAnimationPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): integer
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "yaw"(): float
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundHurtAnimationPacket$$Type = ({"yaw"?: float, "id"?: integer}) | ([yaw?: float, id?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundHurtAnimationPacket$$Original = $ClientboundHurtAnimationPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundSoundPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$SoundSource, $SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"

export class $ClientboundSoundPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "LOCATION_ACCURACY": float
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientboundSoundPacket)>

constructor(arg0: $Holder$$Type<($SoundEvent)>, arg1: $SoundSource$$Type, arg2: double, arg3: double, arg4: double, arg5: float, arg6: float, arg7: long)

public "type"(): $PacketType<($ClientboundSoundPacket)>
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getSeed"(): long
public "getSource"(): $SoundSource
public "getX"(): double
public "getZ"(): double
public "getSound"(): $Holder<($SoundEvent)>
public "getY"(): double
public "getPitch"(): float
public "getVolume"(): float
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "seed"(): long
get "source"(): $SoundSource
get "x"(): double
get "z"(): double
get "sound"(): $Holder<($SoundEvent)>
get "y"(): double
get "pitch"(): float
get "volume"(): float
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundSoundPacket$$Type = ($ClientboundSoundPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundSoundPacket$$Original = $ClientboundSoundPacket;}
declare module "net.minecraft.network.protocol.ping.ServerboundPingRequestPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ServerPingPacketListener, $ServerPingPacketListener$$Type} from "net.minecraft.network.protocol.ping.ServerPingPacketListener"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $ServerboundPingRequestPacket implements $Packet$$Interface<($ServerPingPacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($ServerboundPingRequestPacket)>

constructor(arg0: long)

public "type"(): $PacketType<($ServerboundPingRequestPacket)>
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ServerPingPacketListener$$Type): void
public "getTime"(): long
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerPingPacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerPingPacketListener$$Type)>): $StreamCodec<(B), ($ServerPingPacketListener)>
get "time"(): long
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundPingRequestPacket$$Type = ($ServerboundPingRequestPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundPingRequestPacket$$Original = $ServerboundPingRequestPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundSetEntityDataPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$List, $List$$Type} from "java.util.List"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$SynchedEntityData$DataValue, $SynchedEntityData$DataValue$$Type} from "net.minecraft.network.syncher.SynchedEntityData$DataValue"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$Record} from "java.lang.Record"

export class $ClientboundSetEntityDataPacket extends $Record implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "EOF_MARKER": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientboundSetEntityDataPacket)>

constructor(arg0: integer, arg1: $List$$Type<($SynchedEntityData$DataValue$$Type<(never)>)>)

public "type"(): $PacketType<($ClientboundSetEntityDataPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): integer
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "packedItems"(): $List<($SynchedEntityData$DataValue<(never)>)>
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundSetEntityDataPacket$$Type = ({"packedItems"?: $List$$Type<($SynchedEntityData$DataValue$$Type<(never)>)>, "id"?: integer}) | ([packedItems?: $List$$Type<($SynchedEntityData$DataValue$$Type<(never)>)>, id?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundSetEntityDataPacket$$Original = $ClientboundSetEntityDataPacket;}
declare module "net.minecraft.network.protocol.game.ServerboundEntityTagQueryPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $ServerboundEntityTagQueryPacket implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundEntityTagQueryPacket)>

constructor(arg0: integer, arg1: integer)

public "type"(): $PacketType<($ServerboundEntityTagQueryPacket)>
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getEntityId"(): integer
public "getTransactionId"(): integer
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "entityId"(): integer
get "transactionId"(): integer
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundEntityTagQueryPacket$$Type = ($ServerboundEntityTagQueryPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundEntityTagQueryPacket$$Original = $ServerboundEntityTagQueryPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundRemoveMobEffectPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$Record} from "java.lang.Record"

export class $ClientboundRemoveMobEffectPacket extends $Record implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientboundRemoveMobEffectPacket)>

constructor(arg0: integer, arg1: $Holder$$Type<($MobEffect)>)

public "type"(): $PacketType<($ClientboundRemoveMobEffectPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getEntity"(arg0: $Level$$Type): $Entity
public "entityId"(): integer
public "effect"(): $Holder<($MobEffect)>
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundRemoveMobEffectPacket$$Type = ({"effect"?: $Holder$$Type<($MobEffect)>, "entityId"?: integer}) | ([effect?: $Holder$$Type<($MobEffect)>, entityId?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundRemoveMobEffectPacket$$Original = $ClientboundRemoveMobEffectPacket;}
declare module "net.minecraft.network.protocol.game.ServerboundTeleportToEntityPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$UUID$$Type} from "java.util.UUID"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $ServerboundTeleportToEntityPacket implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundTeleportToEntityPacket)>

constructor(arg0: $UUID$$Type)

public "type"(): $PacketType<($ServerboundTeleportToEntityPacket)>
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "getEntity"(arg0: $ServerLevel$$Type): $Entity
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundTeleportToEntityPacket$$Type = ($ServerboundTeleportToEntityPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundTeleportToEntityPacket$$Original = $ServerboundTeleportToEntityPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundPlayerCombatKillPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$Record} from "java.lang.Record"

export class $ClientboundPlayerCombatKillPacket extends $Record implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientboundPlayerCombatKillPacket)>

constructor(arg0: integer, arg1: $Component$$Type)

public "type"(): $PacketType<($ClientboundPlayerCombatKillPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "message"(): $Component
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "playerId"(): integer
public "isTerminal"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "skippable"(): boolean
get "terminal"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundPlayerCombatKillPacket$$Type = ({"playerId"?: integer, "message"?: $Component$$Type}) | ([playerId?: integer, message?: $Component$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundPlayerCombatKillPacket$$Original = $ClientboundPlayerCombatKillPacket;}
declare module "net.minecraft.network.protocol.cookie.ServerCookiePacketListener" {
import {$PacketFlow} from "net.minecraft.network.protocol.PacketFlow"
import {$Exception$$Type} from "java.lang.Exception"
import {$ServerPacketListener$$Interface} from "net.minecraft.network.protocol.game.ServerPacketListener"
import {$ConnectionProtocol} from "net.minecraft.network.ConnectionProtocol"
import {$CrashReport$$Type} from "net.minecraft.CrashReport"
import {$Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$CrashReportCategory$$Type} from "net.minecraft.CrashReportCategory"
import {$DisconnectionDetails, $DisconnectionDetails$$Type} from "net.minecraft.network.DisconnectionDetails"
import {$ServerboundCookieResponsePacket$$Type} from "net.minecraft.network.protocol.cookie.ServerboundCookieResponsePacket"

export interface $ServerCookiePacketListener$$Interface extends $ServerPacketListener$$Interface {
get "acceptingMessages"(): boolean
}

export class $ServerCookiePacketListener implements $ServerCookiePacketListener$$Interface {
 "handleCookieResponse"(arg0: $ServerboundCookieResponsePacket$$Type): void
 "onPacketError"(arg0: $Packet$$Type, arg1: $Exception$$Type): void
 "flow"(): $PacketFlow
 "protocol"(): $ConnectionProtocol
 "fillListenerSpecificCrashDetails"(arg0: $CrashReport$$Type, arg1: $CrashReportCategory$$Type): void
 "fillCrashReport"(arg0: $CrashReport$$Type): void
 "onDisconnect"(arg0: $DisconnectionDetails$$Type): void
 "createDisconnectionInfo"(arg0: $Component$$Type, arg1: $Throwable$$Type): $DisconnectionDetails
 "isAcceptingMessages"(): boolean
 "shouldHandleMessage"(arg0: $Packet$$Type<(never)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerCookiePacketListener$$Type = ($ServerCookiePacketListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerCookiePacketListener$$Original = $ServerCookiePacketListener;}
declare module "net.minecraft.network.protocol.cookie.ClientboundCookieRequestPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientCookiePacketListener, $ClientCookiePacketListener$$Type} from "net.minecraft.network.protocol.cookie.ClientCookiePacketListener"
import {$Record} from "java.lang.Record"

export class $ClientboundCookieRequestPacket extends $Record implements $Packet$$Interface<($ClientCookiePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundCookieRequestPacket)>

constructor(arg0: $ResourceLocation$$Type)

public "type"(): $PacketType<($ClientboundCookieRequestPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "key"(): $ResourceLocation
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientCookiePacketListener$$Type): void
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientCookiePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientCookiePacketListener$$Type)>): $StreamCodec<(B), ($ClientCookiePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundCookieRequestPacket$$Type = ({"key"?: $ResourceLocation$$Type}) | ([key?: $ResourceLocation$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundCookieRequestPacket$$Original = $ClientboundCookieRequestPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundUpdateAttributesPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Collection$$Type} from "java.util.Collection"
import {$List} from "java.util.List"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$AttributeInstance$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeInstance"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ClientboundUpdateAttributesPacket$AttributeSnapshot} from "net.minecraft.network.protocol.game.ClientboundUpdateAttributesPacket$AttributeSnapshot"

export class $ClientboundUpdateAttributesPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientboundUpdateAttributesPacket)>

constructor(arg0: integer, arg1: $Collection$$Type<($AttributeInstance$$Type)>)

public "type"(): $PacketType<($ClientboundUpdateAttributesPacket)>
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getValues"(): $List<($ClientboundUpdateAttributesPacket$AttributeSnapshot)>
public "getEntityId"(): integer
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "values"(): $List<($ClientboundUpdateAttributesPacket$AttributeSnapshot)>
get "entityId"(): integer
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundUpdateAttributesPacket$$Type = ($ClientboundUpdateAttributesPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundUpdateAttributesPacket$$Original = $ClientboundUpdateAttributesPacket;}
declare module "net.minecraft.network.protocol.common.ClientboundDisconnectPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ClientCommonPacketListener, $ClientCommonPacketListener$$Type} from "net.minecraft.network.protocol.common.ClientCommonPacketListener"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $ClientboundDisconnectPacket extends $Record implements $Packet$$Interface<($ClientCommonPacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($ClientboundDisconnectPacket)>

constructor(arg0: $Component$$Type)

public "type"(): $PacketType<($ClientboundDisconnectPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "reason"(): $Component
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientCommonPacketListener$$Type): void
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientCommonPacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientCommonPacketListener$$Type)>): $StreamCodec<(B), ($ClientCommonPacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundDisconnectPacket$$Type = ({"reason"?: $Component$$Type}) | ([reason?: $Component$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundDisconnectPacket$$Original = $ClientboundDisconnectPacket;}
declare module "net.minecraft.network.protocol.configuration.ServerboundFinishConfigurationPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerConfigurationPacketListener, $ServerConfigurationPacketListener$$Type} from "net.minecraft.network.protocol.configuration.ServerConfigurationPacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $ServerboundFinishConfigurationPacket implements $Packet$$Interface<($ServerConfigurationPacketListener)> {
static readonly "INSTANCE": $ServerboundFinishConfigurationPacket
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($ServerboundFinishConfigurationPacket)>

public "type"(): $PacketType<($ServerboundFinishConfigurationPacket)>
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ServerConfigurationPacketListener$$Type): void
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerConfigurationPacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerConfigurationPacketListener$$Type)>): $StreamCodec<(B), ($ServerConfigurationPacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundFinishConfigurationPacket$$Type = ($ServerboundFinishConfigurationPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundFinishConfigurationPacket$$Original = $ServerboundFinishConfigurationPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundStopSoundPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$SoundSource, $SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundStopSoundPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundStopSoundPacket)>

constructor(arg0: $ResourceLocation$$Type, arg1: $SoundSource$$Type)

public "getName"(): $ResourceLocation
public "type"(): $PacketType<($ClientboundStopSoundPacket)>
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "getSource"(): $SoundSource
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "name"(): $ResourceLocation
get "source"(): $SoundSource
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundStopSoundPacket$$Type = ($ClientboundStopSoundPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundStopSoundPacket$$Original = $ClientboundStopSoundPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundRecipePacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Collection$$Type} from "java.util.Collection"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$List} from "java.util.List"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$ClientboundRecipePacket$State, $ClientboundRecipePacket$State$$Type} from "net.minecraft.network.protocol.game.ClientboundRecipePacket$State"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$RecipeBookSettings, $RecipeBookSettings$$Type} from "net.minecraft.stats.RecipeBookSettings"

export class $ClientboundRecipePacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundRecipePacket)>

constructor(arg0: $ClientboundRecipePacket$State$$Type, arg1: $Collection$$Type<($ResourceLocation$$Type)>, arg2: $Collection$$Type<($ResourceLocation$$Type)>, arg3: $RecipeBookSettings$$Type)

public "type"(): $PacketType<($ClientboundRecipePacket)>
public "getState"(): $ClientboundRecipePacket$State
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "getRecipes"(): $List<($ResourceLocation)>
public "getBookSettings"(): $RecipeBookSettings
public "getHighlights"(): $List<($ResourceLocation)>
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "state"(): $ClientboundRecipePacket$State
get "recipes"(): $List<($ResourceLocation)>
get "bookSettings"(): $RecipeBookSettings
get "highlights"(): $List<($ResourceLocation)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundRecipePacket$$Type = ($ClientboundRecipePacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundRecipePacket$$Original = $ClientboundRecipePacket;}
declare module "net.minecraft.network.protocol.common.custom.BeeDebugPayload$BeeInfo" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Path, $Path$$Type} from "net.minecraft.world.level.pathfinder.Path"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Record} from "java.lang.Record"

export class $BeeDebugPayload$BeeInfo extends $Record {
constructor(arg0: $FriendlyByteBuf$$Type)
constructor(arg0: $UUID$$Type, arg1: integer, arg2: $Vec3$$Type, arg3: $Path$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type, arg6: integer, arg7: $Set$$Type<(StringJS)>, arg8: $List$$Type<($BlockPos$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): integer
public "write"(arg0: $FriendlyByteBuf$$Type): void
public "pos"(): $Vec3
public "path"(): $Path
public "hasHive"(arg0: $BlockPos$$Type): boolean
public "hivePos"(): $BlockPos
public "travelTicks"(): integer
public "generateName"(): StringJS
public "blacklistedHives"(): $List<($BlockPos)>
public "uuid"(): $UUID
public "flowerPos"(): $BlockPos
public "goals"(): $Set<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeeDebugPayload$BeeInfo$$Type = ({"path"?: $Path$$Type, "id"?: integer, "blacklistedHives"?: $List$$Type<($BlockPos$$Type)>, "hivePos"?: $BlockPos$$Type, "pos"?: $Vec3$$Type, "flowerPos"?: $BlockPos$$Type, "travelTicks"?: integer, "goals"?: $Set$$Type<(StringJS)>, "uuid"?: $UUID$$Type}) | ([path?: $Path$$Type, id?: integer, blacklistedHives?: $List$$Type<($BlockPos$$Type)>, hivePos?: $BlockPos$$Type, pos?: $Vec3$$Type, flowerPos?: $BlockPos$$Type, travelTicks?: integer, goals?: $Set$$Type<(StringJS)>, uuid?: $UUID$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BeeDebugPayload$BeeInfo$$Original = $BeeDebugPayload$BeeInfo;}
declare module "net.minecraft.network.protocol.game.ServerboundSetBeaconPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$Record} from "java.lang.Record"

export class $ServerboundSetBeaconPacket extends $Record implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ServerboundSetBeaconPacket)>

constructor(arg0: ($Holder$$Type<($MobEffect$$Type)>)?, arg1: ($Holder$$Type<($MobEffect$$Type)>)?)

public "type"(): $PacketType<($ServerboundSetBeaconPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "secondary"(): $Optional<($Holder<($MobEffect)>)>
public "primary"(): $Optional<($Holder<($MobEffect)>)>
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundSetBeaconPacket$$Type = ({"secondary"?: ($Holder$$Type<($MobEffect$$Type)>)?, "primary"?: ($Holder$$Type<($MobEffect$$Type)>)?}) | ([secondary?: ($Holder$$Type<($MobEffect$$Type)>)?, primary?: ($Holder$$Type<($MobEffect$$Type)>)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundSetBeaconPacket$$Original = $ServerboundSetBeaconPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundRotateHeadPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundRotateHeadPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundRotateHeadPacket)>

constructor(arg0: $Entity$$Type, arg1: byte)

public "type"(): $PacketType<($ClientboundRotateHeadPacket)>
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getEntity"(arg0: $Level$$Type): $Entity
public "getYHeadRot"(): byte
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "YHeadRot"(): byte
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundRotateHeadPacket$$Type = ($ClientboundRotateHeadPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundRotateHeadPacket$$Original = $ClientboundRotateHeadPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundOpenScreenPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$MenuType, $MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundOpenScreenPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientboundOpenScreenPacket)>

constructor(arg0: integer, arg1: $MenuType$$Type<(never)>, arg2: $Component$$Type)

public "type"(): $PacketType<($ClientboundOpenScreenPacket)>
public "getType"(): $MenuType<(never)>
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "getTitle"(): $Component
public "getContainerId"(): integer
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "title"(): $Component
get "containerId"(): integer
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundOpenScreenPacket$$Type = ($ClientboundOpenScreenPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundOpenScreenPacket$$Original = $ClientboundOpenScreenPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundBundlePacket" {
import {$Iterable$$Type} from "java.lang.Iterable"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$BundlePacket} from "net.minecraft.network.protocol.BundlePacket"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundBundlePacket extends $BundlePacket<($ClientGamePacketListener)> {
constructor(arg0: $Iterable$$Type<($Packet$$Type<($ClientGamePacketListener$$Type)>)>)

public "type"(): $PacketType<($ClientboundBundlePacket)>
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), (T)>, arg1: $StreamDecoder$$Type<(B), (T)>): $StreamCodec<(B), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundBundlePacket$$Type = ($ClientboundBundlePacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundBundlePacket$$Original = $ClientboundBundlePacket;}
declare module "net.minecraft.network.protocol.game.CommonPlayerSpawnInfo" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$GlobalPos, $GlobalPos$$Type} from "net.minecraft.core.GlobalPos"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$GameType, $GameType$$Type} from "net.minecraft.world.level.GameType"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$DimensionType, $DimensionType$$Type} from "net.minecraft.world.level.dimension.DimensionType"
import {$Record} from "java.lang.Record"

export class $CommonPlayerSpawnInfo extends $Record {
constructor(arg0: $RegistryFriendlyByteBuf$$Type)
constructor(arg0: $Holder$$Type<($DimensionType)>, arg1: $ResourceKey$$Type<($Level)>, arg2: long, arg3: $GameType$$Type, arg4: $GameType$$Type, arg5: boolean, arg6: boolean, arg7: ($GlobalPos$$Type)?, arg8: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "write"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "isDebug"(): boolean
public "seed"(): long
public "dimension"(): $ResourceKey<($Level)>
public "gameType"(): $GameType
public "portalCooldown"(): integer
public "lastDeathLocation"(): $Optional<($GlobalPos)>
public "dimensionType"(): $Holder<($DimensionType)>
public "previousGameType"(): $GameType
public "isFlat"(): boolean
get "debug"(): boolean
get "flat"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonPlayerSpawnInfo$$Type = ({"lastDeathLocation"?: ($GlobalPos$$Type)?, "dimension"?: $ResourceKey$$Type<($Level)>, "previousGameType"?: $GameType$$Type, "portalCooldown"?: integer, "seed"?: long, "dimensionType"?: $Holder$$Type<($DimensionType)>, "isFlat"?: boolean, "gameType"?: $GameType$$Type, "isDebug"?: boolean}) | ([lastDeathLocation?: ($GlobalPos$$Type)?, dimension?: $ResourceKey$$Type<($Level)>, previousGameType?: $GameType$$Type, portalCooldown?: integer, seed?: long, dimensionType?: $Holder$$Type<($DimensionType)>, isFlat?: boolean, gameType?: $GameType$$Type, isDebug?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CommonPlayerSpawnInfo$$Original = $CommonPlayerSpawnInfo;}
declare module "net.minecraft.network.protocol.common.ClientCommonPacketListener" {
import {$ClientboundCookieRequestPacket$$Type} from "net.minecraft.network.protocol.cookie.ClientboundCookieRequestPacket"
import {$ClientboundPingPacket$$Type} from "net.minecraft.network.protocol.common.ClientboundPingPacket"
import {$CustomPacketPayload$Type$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$IClientCommonPacketListenerExtension$$Interface} from "net.neoforged.neoforge.common.extensions.IClientCommonPacketListenerExtension"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$ClientboundDisconnectPacket$$Type} from "net.minecraft.network.protocol.common.ClientboundDisconnectPacket"
import {$Exception$$Type} from "java.lang.Exception"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ClientboundResourcePackPushPacket$$Type} from "net.minecraft.network.protocol.common.ClientboundResourcePackPushPacket"
import {$ClientboundCustomReportDetailsPacket$$Type} from "net.minecraft.network.protocol.common.ClientboundCustomReportDetailsPacket"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$ReentrantBlockableEventLoop} from "net.minecraft.util.thread.ReentrantBlockableEventLoop"
import {$ClientboundPacketListener$$Interface} from "net.minecraft.network.ClientboundPacketListener"
import {$ClientboundTransferPacket$$Type} from "net.minecraft.network.protocol.common.ClientboundTransferPacket"
import {$PacketFlow} from "net.minecraft.network.protocol.PacketFlow"
import {$CrashReport$$Type} from "net.minecraft.CrashReport"
import {$ClientboundResourcePackPopPacket$$Type} from "net.minecraft.network.protocol.common.ClientboundResourcePackPopPacket"
import {$ClientboundUpdateTagsPacket$$Type} from "net.minecraft.network.protocol.common.ClientboundUpdateTagsPacket"
import {$CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$ClientboundStoreCookiePacket$$Type} from "net.minecraft.network.protocol.common.ClientboundStoreCookiePacket"
import {$DisconnectionDetails, $DisconnectionDetails$$Type} from "net.minecraft.network.DisconnectionDetails"
import {$ClientCookiePacketListener$$Interface} from "net.minecraft.network.protocol.cookie.ClientCookiePacketListener"
import {$ClientboundServerLinksPacket$$Type} from "net.minecraft.network.protocol.common.ClientboundServerLinksPacket"
import {$ConnectionType} from "net.neoforged.neoforge.network.connection.ConnectionType"
import {$ClientboundCustomPayloadPacket$$Type} from "net.minecraft.network.protocol.common.ClientboundCustomPayloadPacket"
import {$ConnectionProtocol} from "net.minecraft.network.ConnectionProtocol"
import {$Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$Connection} from "net.minecraft.network.Connection"
import {$CrashReportCategory$$Type} from "net.minecraft.CrashReportCategory"
import {$ClientboundKeepAlivePacket$$Type} from "net.minecraft.network.protocol.common.ClientboundKeepAlivePacket"

export interface $ClientCommonPacketListener$$Interface extends $ClientCookiePacketListener$$Interface, $ClientboundPacketListener$$Interface, $IClientCommonPacketListenerExtension$$Interface {
get "mainThreadEventLoop"(): $ReentrantBlockableEventLoop<(never)>
get "acceptingMessages"(): boolean
get "connection"(): $Connection
get "connectionType"(): $ConnectionType
}

export class $ClientCommonPacketListener implements $ClientCommonPacketListener$$Interface {
 "handlePing"(arg0: $ClientboundPingPacket$$Type): void
 "handleDisconnect"(arg0: $ClientboundDisconnectPacket$$Type): void
 "handleCustomPayload"(arg0: $ClientboundCustomPayloadPacket$$Type): void
 "handleCustomReportDetails"(arg0: $ClientboundCustomReportDetailsPacket$$Type): void
 "handleResourcePackPop"(arg0: $ClientboundResourcePackPopPacket$$Type): void
 "handleResourcePackPush"(arg0: $ClientboundResourcePackPushPacket$$Type): void
 "handleServerLinks"(arg0: $ClientboundServerLinksPacket$$Type): void
 "handleTransfer"(arg0: $ClientboundTransferPacket$$Type): void
 "handleStoreCookie"(arg0: $ClientboundStoreCookiePacket$$Type): void
 "handleKeepAlive"(arg0: $ClientboundKeepAlivePacket$$Type): void
 "handleUpdateTags"(arg0: $ClientboundUpdateTagsPacket$$Type): void
 "handleRequestCookie"(arg0: $ClientboundCookieRequestPacket$$Type): void
 "flow"(): $PacketFlow
 "disconnect"(arg0: $Component$$Type): void
 "send"(arg0: $CustomPacketPayload$$Type): void
 "getMainThreadEventLoop"(): $ReentrantBlockableEventLoop<(never)>
 "protocol"(): $ConnectionProtocol
 "fillListenerSpecificCrashDetails"(arg0: $CrashReport$$Type, arg1: $CrashReportCategory$$Type): void
 "fillCrashReport"(arg0: $CrashReport$$Type): void
 "onDisconnect"(arg0: $DisconnectionDetails$$Type): void
 "createDisconnectionInfo"(arg0: $Component$$Type, arg1: $Throwable$$Type): $DisconnectionDetails
 "isAcceptingMessages"(): boolean
 "shouldHandleMessage"(arg0: $Packet$$Type<(never)>): boolean
 "onPacketError"(arg0: $Packet$$Type, arg1: $Exception$$Type): void
 "getConnection"(): $Connection
 "hasChannel"(arg0: $CustomPacketPayload$Type$$Type<(never)>): boolean
 "hasChannel"(arg0: $CustomPacketPayload$$Type): boolean
 "hasChannel"(arg0: $ResourceLocation$$Type): boolean
 "send"(arg0: $Packet$$Type<(never)>): void
 "getConnectionType"(): $ConnectionType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientCommonPacketListener$$Type = ($ClientCommonPacketListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientCommonPacketListener$$Original = $ClientCommonPacketListener;}
declare module "net.minecraft.network.protocol.game.ServerGamePacketListener" {
import {$Iterable$$Type} from "java.lang.Iterable"
import {$ServerboundChunkBatchReceivedPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundChunkBatchReceivedPacket"
import {$ServerPingPacketListener$$Interface} from "net.minecraft.network.protocol.ping.ServerPingPacketListener"
import {$ServerboundClientInformationPacket$$Type} from "net.minecraft.network.protocol.common.ServerboundClientInformationPacket"
import {$ServerboundPlayerActionPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundPlayerActionPacket"
import {$ServerboundMovePlayerPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundMovePlayerPacket"
import {$ServerboundSetStructureBlockPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundSetStructureBlockPacket"
import {$ServerboundRecipeBookSeenRecipePacket$$Type} from "net.minecraft.network.protocol.game.ServerboundRecipeBookSeenRecipePacket"
import {$ServerboundSignUpdatePacket$$Type} from "net.minecraft.network.protocol.game.ServerboundSignUpdatePacket"
import {$ServerboundAcceptTeleportationPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundAcceptTeleportationPacket"
import {$ServerboundPickItemPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundPickItemPacket"
import {$ServerboundUseItemPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundUseItemPacket"
import {$ServerboundSwingPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundSwingPacket"
import {$ServerboundPlaceRecipePacket$$Type} from "net.minecraft.network.protocol.game.ServerboundPlaceRecipePacket"
import {$ServerboundSetCommandMinecartPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundSetCommandMinecartPacket"
import {$ServerboundSelectTradePacket$$Type} from "net.minecraft.network.protocol.game.ServerboundSelectTradePacket"
import {$ServerboundLockDifficultyPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundLockDifficultyPacket"
import {$ServerboundUseItemOnPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundUseItemOnPacket"
import {$CrashReport$$Type} from "net.minecraft.CrashReport"
import {$ServerboundEditBookPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundEditBookPacket"
import {$PacketSendListener$$Type} from "net.minecraft.network.PacketSendListener"
import {$DisconnectionDetails, $DisconnectionDetails$$Type} from "net.minecraft.network.DisconnectionDetails"
import {$ServerboundContainerClosePacket$$Type} from "net.minecraft.network.protocol.game.ServerboundContainerClosePacket"
import {$ServerboundCustomPayloadPacket$$Type} from "net.minecraft.network.protocol.common.ServerboundCustomPayloadPacket"
import {$ConnectionType} from "net.neoforged.neoforge.network.connection.ConnectionType"
import {$ServerboundChatCommandPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundChatCommandPacket"
import {$ServerboundPingRequestPacket$$Type} from "net.minecraft.network.protocol.ping.ServerboundPingRequestPacket"
import {$ServerboundBlockEntityTagQueryPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundBlockEntityTagQueryPacket"
import {$IServerGamePacketListenerExtension$$Interface} from "net.neoforged.neoforge.common.extensions.IServerGamePacketListenerExtension"
import {$Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ServerboundChatCommandSignedPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundChatCommandSignedPacket"
import {$ServerboundResourcePackPacket$$Type} from "net.minecraft.network.protocol.common.ServerboundResourcePackPacket"
import {$CrashReportCategory$$Type} from "net.minecraft.CrashReportCategory"
import {$ServerboundPlayerInputPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundPlayerInputPacket"
import {$ServerboundPaddleBoatPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundPaddleBoatPacket"
import {$ServerboundClientCommandPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundClientCommandPacket"
import {$ServerCommonPacketListener$$Interface} from "net.minecraft.network.protocol.common.ServerCommonPacketListener"
import {$ServerboundSetCreativeModeSlotPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundSetCreativeModeSlotPacket"
import {$ServerboundConfigurationAcknowledgedPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundConfigurationAcknowledgedPacket"
import {$ServerboundPongPacket$$Type} from "net.minecraft.network.protocol.common.ServerboundPongPacket"
import {$CustomPacketPayload$Type$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$ServerboundSetJigsawBlockPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundSetJigsawBlockPacket"
import {$ServerboundSetCarriedItemPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundSetCarriedItemPacket"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$ServerboundRecipeBookChangeSettingsPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundRecipeBookChangeSettingsPacket"
import {$ServerboundContainerButtonClickPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundContainerButtonClickPacket"
import {$ServerboundContainerSlotStateChangedPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundContainerSlotStateChangedPacket"
import {$ServerboundSetCommandBlockPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundSetCommandBlockPacket"
import {$ServerboundTeleportToEntityPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundTeleportToEntityPacket"
import {$ServerboundCookieResponsePacket$$Type} from "net.minecraft.network.protocol.cookie.ServerboundCookieResponsePacket"
import {$ServerboundPlayerAbilitiesPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundPlayerAbilitiesPacket"
import {$Exception$$Type} from "java.lang.Exception"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ServerboundSetBeaconPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundSetBeaconPacket"
import {$ServerboundInteractPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundInteractPacket"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$ReentrantBlockableEventLoop} from "net.minecraft.util.thread.ReentrantBlockableEventLoop"
import {$ServerboundEntityTagQueryPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundEntityTagQueryPacket"
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
import {$ServerboundKeepAlivePacket$$Type} from "net.minecraft.network.protocol.common.ServerboundKeepAlivePacket"
import {$ServerboundRenameItemPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundRenameItemPacket"
import {$ServerboundChangeDifficultyPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundChangeDifficultyPacket"
import {$ConnectionProtocol} from "net.minecraft.network.ConnectionProtocol"
import {$ServerboundContainerClickPacket$$Type} from "net.minecraft.network.protocol.game.ServerboundContainerClickPacket"
import {$Connection} from "net.minecraft.network.Connection"

export interface $ServerGamePacketListener$$Interface extends $ServerPingPacketListener$$Interface, $ServerCommonPacketListener$$Interface, $IServerGamePacketListenerExtension$$Interface {
get "acceptingMessages"(): boolean
get "connection"(): $Connection
get "mainThreadEventLoop"(): $ReentrantBlockableEventLoop<(never)>
get "connectionType"(): $ConnectionType
}

export class $ServerGamePacketListener implements $ServerGamePacketListener$$Interface {
 "protocol"(): $ConnectionProtocol
 "handlePickItem"(arg0: $ServerboundPickItemPacket$$Type): void
 "handleChat"(arg0: $ServerboundChatPacket$$Type): void
 "handlePlayerInput"(arg0: $ServerboundPlayerInputPacket$$Type): void
 "handleInteract"(arg0: $ServerboundInteractPacket$$Type): void
 "handleChatAck"(arg0: $ServerboundChatAckPacket$$Type): void
 "handleChatCommand"(arg0: $ServerboundChatCommandPacket$$Type): void
 "handleUseItemOn"(arg0: $ServerboundUseItemOnPacket$$Type): void
 "handleSelectTrade"(arg0: $ServerboundSelectTradePacket$$Type): void
 "handleRenameItem"(arg0: $ServerboundRenameItemPacket$$Type): void
 "handleUseItem"(arg0: $ServerboundUseItemPacket$$Type): void
 "handleSignUpdate"(arg0: $ServerboundSignUpdatePacket$$Type): void
 "handlePaddleBoat"(arg0: $ServerboundPaddleBoatPacket$$Type): void
 "handleEditBook"(arg0: $ServerboundEditBookPacket$$Type): void
 "handlePlayerAction"(arg0: $ServerboundPlayerActionPacket$$Type): void
 "handleSetCarriedItem"(arg0: $ServerboundSetCarriedItemPacket$$Type): void
 "handleContainerClose"(arg0: $ServerboundContainerClosePacket$$Type): void
 "handleChangeDifficulty"(arg0: $ServerboundChangeDifficultyPacket$$Type): void
 "handlePlayerAbilities"(arg0: $ServerboundPlayerAbilitiesPacket$$Type): void
 "handleRecipeBookChangeSettingsPacket"(arg0: $ServerboundRecipeBookChangeSettingsPacket$$Type): void
 "handleTeleportToEntityPacket"(arg0: $ServerboundTeleportToEntityPacket$$Type): void
 "handleCustomCommandSuggestions"(arg0: $ServerboundCommandSuggestionPacket$$Type): void
 "handleRecipeBookSeenRecipePacket"(arg0: $ServerboundRecipeBookSeenRecipePacket$$Type): void
 "handleContainerSlotStateChanged"(arg0: $ServerboundContainerSlotStateChangedPacket$$Type): void
 "handleConfigurationAcknowledged"(arg0: $ServerboundConfigurationAcknowledgedPacket$$Type): void
 "handleDebugSampleSubscription"(arg0: $ServerboundDebugSampleSubscriptionPacket$$Type): void
 "handleAcceptTeleportPacket"(arg0: $ServerboundAcceptTeleportationPacket$$Type): void
 "handleSetCommandBlock"(arg0: $ServerboundSetCommandBlockPacket$$Type): void
 "handleSeenAdvancements"(arg0: $ServerboundSeenAdvancementsPacket$$Type): void
 "handleSetBeaconPacket"(arg0: $ServerboundSetBeaconPacket$$Type): void
 "handleSetJigsawBlock"(arg0: $ServerboundSetJigsawBlockPacket$$Type): void
 "handleClientCommand"(arg0: $ServerboundClientCommandPacket$$Type): void
 "handleContainerButtonClick"(arg0: $ServerboundContainerButtonClickPacket$$Type): void
 "handleEntityTagQuery"(arg0: $ServerboundEntityTagQueryPacket$$Type): void
 "handlePlayerCommand"(arg0: $ServerboundPlayerCommandPacket$$Type): void
 "handleSignedChatCommand"(arg0: $ServerboundChatCommandSignedPacket$$Type): void
 "handleChunkBatchReceived"(arg0: $ServerboundChunkBatchReceivedPacket$$Type): void
 "handleJigsawGenerate"(arg0: $ServerboundJigsawGeneratePacket$$Type): void
 "handleBlockEntityTagQuery"(arg0: $ServerboundBlockEntityTagQueryPacket$$Type): void
 "handleSetCreativeModeSlot"(arg0: $ServerboundSetCreativeModeSlotPacket$$Type): void
 "handleSetCommandMinecart"(arg0: $ServerboundSetCommandMinecartPacket$$Type): void
 "handleSetStructureBlock"(arg0: $ServerboundSetStructureBlockPacket$$Type): void
 "handleContainerClick"(arg0: $ServerboundContainerClickPacket$$Type): void
 "handleLockDifficulty"(arg0: $ServerboundLockDifficultyPacket$$Type): void
 "handleChatSessionUpdate"(arg0: $ServerboundChatSessionUpdatePacket$$Type): void
 "handleMovePlayer"(arg0: $ServerboundMovePlayerPacket$$Type): void
 "handleAnimate"(arg0: $ServerboundSwingPacket$$Type): void
 "handleMoveVehicle"(arg0: $ServerboundMoveVehiclePacket$$Type): void
 "handlePlaceRecipe"(arg0: $ServerboundPlaceRecipePacket$$Type): void
 "handlePingRequest"(arg0: $ServerboundPingRequestPacket$$Type): void
 "handlePong"(arg0: $ServerboundPongPacket$$Type): void
 "handleCustomPayload"(arg0: $ServerboundCustomPayloadPacket$$Type): void
 "handleClientInformation"(arg0: $ServerboundClientInformationPacket$$Type): void
 "handleResourcePackResponse"(arg0: $ServerboundResourcePackPacket$$Type): void
 "handleKeepAlive"(arg0: $ServerboundKeepAlivePacket$$Type): void
 "sendBundled"(...arg0: ($CustomPacketPayload$$Type)[]): void
 "sendBundled"(arg0: $Iterable$$Type<($CustomPacketPayload$$Type)>): void
 "fillListenerSpecificCrashDetails"(arg0: $CrashReport$$Type, arg1: $CrashReportCategory$$Type): void
 "fillCrashReport"(arg0: $CrashReport$$Type): void
 "onDisconnect"(arg0: $DisconnectionDetails$$Type): void
 "createDisconnectionInfo"(arg0: $Component$$Type, arg1: $Throwable$$Type): $DisconnectionDetails
 "isAcceptingMessages"(): boolean
 "shouldHandleMessage"(arg0: $Packet$$Type<(never)>): boolean
 "onPacketError"(arg0: $Packet$$Type, arg1: $Exception$$Type): void
 "flow"(): $PacketFlow
 "handleCookieResponse"(arg0: $ServerboundCookieResponsePacket$$Type): void
 "send"(arg0: $CustomPacketPayload$$Type): void
 "send"(arg0: $Packet$$Type<(never)>, arg1: $PacketSendListener$$Type): void
 "send"(arg0: $CustomPacketPayload$$Type, arg1: $PacketSendListener$$Type): void
 "getConnection"(): $Connection
 "hasChannel"(arg0: $CustomPacketPayload$Type$$Type<(never)>): boolean
 "hasChannel"(arg0: $CustomPacketPayload$$Type): boolean
 "hasChannel"(arg0: $ResourceLocation$$Type): boolean
 "disconnect"(arg0: $Component$$Type): void
 "send"(arg0: $Packet$$Type<(never)>): void
 "getMainThreadEventLoop"(): $ReentrantBlockableEventLoop<(never)>
 "getConnectionType"(): $ConnectionType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerGamePacketListener$$Type = ($ServerGamePacketListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerGamePacketListener$$Original = $ServerGamePacketListener;}
declare module "net.minecraft.network.protocol.game.ServerboundSetCreativeModeSlotPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $ServerboundSetCreativeModeSlotPacket extends $Record implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ServerboundSetCreativeModeSlotPacket)>

constructor(arg0: integer, arg1: $ItemStack$$Type)
constructor(arg0: short, arg1: $ItemStack$$Type)

public "type"(): $PacketType<($ServerboundSetCreativeModeSlotPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "slotNum"(): short
public "itemStack"(): $ItemStack
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundSetCreativeModeSlotPacket$$Type = ({"itemStack"?: $ItemStack$$Type, "slotNum"?: short}) | ([itemStack?: $ItemStack$$Type, slotNum?: short]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundSetCreativeModeSlotPacket$$Original = $ServerboundSetCreativeModeSlotPacket;}
declare module "net.minecraft.network.protocol.game.ServerboundLockDifficultyPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $ServerboundLockDifficultyPacket implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundLockDifficultyPacket)>

constructor(arg0: boolean)

public "type"(): $PacketType<($ServerboundLockDifficultyPacket)>
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "isLocked"(): boolean
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "locked"(): boolean
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundLockDifficultyPacket$$Type = ($ServerboundLockDifficultyPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundLockDifficultyPacket$$Original = $ServerboundLockDifficultyPacket;}
declare module "net.minecraft.network.protocol.game.ServerboundMoveVehiclePacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $ServerboundMoveVehiclePacket implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundMoveVehiclePacket)>

constructor(arg0: $Entity$$Type)

public "type"(): $PacketType<($ServerboundMoveVehiclePacket)>
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "getXRot"(): float
public "getYRot"(): float
public "getX"(): double
public "getZ"(): double
public "getY"(): double
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "XRot"(): float
get "YRot"(): float
get "x"(): double
get "z"(): double
get "y"(): double
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundMoveVehiclePacket$$Type = ($ServerboundMoveVehiclePacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundMoveVehiclePacket$$Original = $ServerboundMoveVehiclePacket;}
declare module "net.minecraft.network.protocol.game.ClientboundMerchantOffersPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$MerchantOffers, $MerchantOffers$$Type} from "net.minecraft.world.item.trading.MerchantOffers"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundMerchantOffersPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientboundMerchantOffersPacket)>

constructor(arg0: integer, arg1: $MerchantOffers$$Type, arg2: integer, arg3: integer, arg4: boolean, arg5: boolean)

public "type"(): $PacketType<($ClientboundMerchantOffersPacket)>
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "getOffers"(): $MerchantOffers
public "getVillagerXp"(): integer
public "canRestock"(): boolean
public "getContainerId"(): integer
public "getVillagerLevel"(): integer
public "showProgress"(): boolean
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "offers"(): $MerchantOffers
get "villagerXp"(): integer
get "containerId"(): integer
get "villagerLevel"(): integer
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundMerchantOffersPacket$$Type = ($ClientboundMerchantOffersPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundMerchantOffersPacket$$Original = $ClientboundMerchantOffersPacket;}
declare module "net.minecraft.network.protocol.login.ClientboundHelloPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$ClientLoginPacketListener, $ClientLoginPacketListener$$Type} from "net.minecraft.network.protocol.login.ClientLoginPacketListener"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$PublicKey} from "java.security.PublicKey"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $ClientboundHelloPacket implements $Packet$$Interface<($ClientLoginPacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundHelloPacket)>

constructor(arg0: StringJS, arg1: (byte)[], arg2: (byte)[], arg3: boolean)

public "type"(): $PacketType<($ClientboundHelloPacket)>
public "handle"(arg0: $ClientLoginPacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getPublicKey"(): $PublicKey
public "getServerId"(): StringJS
public "getChallenge"(): (byte)[]
public "shouldAuthenticate"(): boolean
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientLoginPacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientLoginPacketListener$$Type)>): $StreamCodec<(B), ($ClientLoginPacketListener)>
get "publicKey"(): $PublicKey
get "serverId"(): StringJS
get "challenge"(): (byte)[]
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundHelloPacket$$Type = ($ClientboundHelloPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundHelloPacket$$Original = $ClientboundHelloPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundHorseScreenOpenPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundHorseScreenOpenPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundHorseScreenOpenPacket)>

constructor(arg0: integer, arg1: integer, arg2: integer)

public "type"(): $PacketType<($ClientboundHorseScreenOpenPacket)>
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getEntityId"(): integer
public "getInventoryColumns"(): integer
public "getContainerId"(): integer
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "entityId"(): integer
get "inventoryColumns"(): integer
get "containerId"(): integer
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundHorseScreenOpenPacket$$Type = ($ClientboundHorseScreenOpenPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundHorseScreenOpenPacket$$Original = $ClientboundHorseScreenOpenPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundPlayerPositionPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RelativeMovement, $RelativeMovement$$Type} from "net.minecraft.world.entity.RelativeMovement"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundPlayerPositionPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundPlayerPositionPacket)>

constructor(arg0: double, arg1: double, arg2: double, arg3: float, arg4: float, arg5: $Set$$Type<($RelativeMovement$$Type)>, arg6: integer)

public "type"(): $PacketType<($ClientboundPlayerPositionPacket)>
public "getId"(): integer
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "getXRot"(): float
public "getYRot"(): float
public "getX"(): double
public "getZ"(): double
public "getY"(): double
public "getRelativeArguments"(): $Set<($RelativeMovement)>
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "id"(): integer
get "XRot"(): float
get "YRot"(): float
get "x"(): double
get "z"(): double
get "y"(): double
get "relativeArguments"(): $Set<($RelativeMovement)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundPlayerPositionPacket$$Type = ($ClientboundPlayerPositionPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundPlayerPositionPacket$$Original = $ClientboundPlayerPositionPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundPlayerInfoRemovePacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$Record} from "java.lang.Record"

export class $ClientboundPlayerInfoRemovePacket extends $Record implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundPlayerInfoRemovePacket)>

constructor(arg0: $List$$Type<($UUID$$Type)>)

public "type"(): $PacketType<($ClientboundPlayerInfoRemovePacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "profileIds"(): $List<($UUID)>
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundPlayerInfoRemovePacket$$Type = ({"profileIds"?: $List$$Type<($UUID$$Type)>}) | ([profileIds?: $List$$Type<($UUID$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundPlayerInfoRemovePacket$$Original = $ClientboundPlayerInfoRemovePacket;}
declare module "net.minecraft.network.protocol.game.ClientboundCommandSuggestionsPacket$Entry" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Record} from "java.lang.Record"

export class $ClientboundCommandSuggestionsPacket$Entry extends $Record {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientboundCommandSuggestionsPacket$Entry)>

constructor(arg0: StringJS, arg1: ($Component$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "text"(): StringJS
public "tooltip"(): $Optional<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundCommandSuggestionsPacket$Entry$$Type = ({"text"?: StringJS, "tooltip"?: ($Component$$Type)?}) | ([text?: StringJS, tooltip?: ($Component$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundCommandSuggestionsPacket$Entry$$Original = $ClientboundCommandSuggestionsPacket$Entry;}
declare module "net.minecraft.network.protocol.game.ClientboundLevelChunkPacketData" {
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$ClientboundLevelChunkPacketData$BlockEntityTagOutput} from "net.minecraft.network.protocol.game.ClientboundLevelChunkPacketData$BlockEntityTagOutput"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$LevelChunk$$Type} from "net.minecraft.world.level.chunk.LevelChunk"
import {$Consumer} from "java.util.function.Consumer"

export class $ClientboundLevelChunkPacketData {
constructor(arg0: $LevelChunk$$Type)
constructor(arg0: $RegistryFriendlyByteBuf$$Type, arg1: integer, arg2: integer)

public "write"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "getHeightmaps"(): $CompoundTag
public "getBlockEntitiesTagsConsumer"(arg0: integer, arg1: integer): $Consumer<($ClientboundLevelChunkPacketData$BlockEntityTagOutput)>
public static "extractChunkData"(arg0: $FriendlyByteBuf$$Type, arg1: $LevelChunk$$Type): void
public "getReadBuffer"(): $FriendlyByteBuf
get "heightmaps"(): $CompoundTag
get "readBuffer"(): $FriendlyByteBuf
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundLevelChunkPacketData$$Type = ($ClientboundLevelChunkPacketData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundLevelChunkPacketData$$Original = $ClientboundLevelChunkPacketData;}
declare module "net.minecraft.network.protocol.ping.ServerPingPacketListener" {
import {$PacketFlow} from "net.minecraft.network.protocol.PacketFlow"
import {$Exception$$Type} from "java.lang.Exception"
import {$ServerboundPingRequestPacket$$Type} from "net.minecraft.network.protocol.ping.ServerboundPingRequestPacket"
import {$PacketListener$$Interface} from "net.minecraft.network.PacketListener"
import {$ConnectionProtocol} from "net.minecraft.network.ConnectionProtocol"
import {$CrashReport$$Type} from "net.minecraft.CrashReport"
import {$Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$CrashReportCategory$$Type} from "net.minecraft.CrashReportCategory"
import {$DisconnectionDetails, $DisconnectionDetails$$Type} from "net.minecraft.network.DisconnectionDetails"

export interface $ServerPingPacketListener$$Interface extends $PacketListener$$Interface {
get "acceptingMessages"(): boolean
}

export class $ServerPingPacketListener implements $ServerPingPacketListener$$Interface {
 "handlePingRequest"(arg0: $ServerboundPingRequestPacket$$Type): void
 "protocol"(): $ConnectionProtocol
 "fillListenerSpecificCrashDetails"(arg0: $CrashReport$$Type, arg1: $CrashReportCategory$$Type): void
 "fillCrashReport"(arg0: $CrashReport$$Type): void
 "onDisconnect"(arg0: $DisconnectionDetails$$Type): void
 "createDisconnectionInfo"(arg0: $Component$$Type, arg1: $Throwable$$Type): $DisconnectionDetails
 "isAcceptingMessages"(): boolean
 "shouldHandleMessage"(arg0: $Packet$$Type<(never)>): boolean
 "onPacketError"(arg0: $Packet$$Type, arg1: $Exception$$Type): void
 "flow"(): $PacketFlow
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPingPacketListener$$Type = ($ServerPingPacketListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerPingPacketListener$$Original = $ServerPingPacketListener;}
declare module "net.minecraft.network.protocol.PacketType" {
import {$PacketFlow, $PacketFlow$$Type} from "net.minecraft.network.protocol.PacketFlow"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$Record} from "java.lang.Record"

export class $PacketType<T extends $Packet<(object)>> extends $Record {
constructor(arg0: $PacketFlow$$Type, arg1: $ResourceLocation$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): $ResourceLocation
public "flow"(): $PacketFlow
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PacketType$$Type<T> = ({"id"?: $ResourceLocation$$Type, "flow"?: $PacketFlow$$Type}) | ([id?: $ResourceLocation$$Type, flow?: $PacketFlow$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PacketType$$Original<T> = $PacketType<(T)>;}
declare module "net.minecraft.network.protocol.game.ServerboundPlaceRecipePacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $ServerboundPlaceRecipePacket implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundPlaceRecipePacket)>

constructor(arg0: integer, arg1: $RecipeHolder$$Type<(never)>, arg2: boolean)

public "type"(): $PacketType<($ServerboundPlaceRecipePacket)>
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getRecipe"(): $ResourceLocation
public "isShiftDown"(): boolean
public "getContainerId"(): integer
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "recipe"(): $ResourceLocation
get "shiftDown"(): boolean
get "containerId"(): integer
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundPlaceRecipePacket$$Type = ($ServerboundPlaceRecipePacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundPlaceRecipePacket$$Original = $ServerboundPlaceRecipePacket;}
declare module "net.minecraft.network.protocol.game.ServerboundChatAckPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $ServerboundChatAckPacket extends $Record implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundChatAckPacket)>

constructor(arg0: integer)

public "type"(): $PacketType<($ServerboundChatAckPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "offset"(): integer
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundChatAckPacket$$Type = ({"offset"?: integer}) | ([offset?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundChatAckPacket$$Original = $ServerboundChatAckPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundRespawnPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$CommonPlayerSpawnInfo, $CommonPlayerSpawnInfo$$Type} from "net.minecraft.network.protocol.game.CommonPlayerSpawnInfo"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$Record} from "java.lang.Record"

export class $ClientboundRespawnPacket extends $Record implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "KEEP_ALL_DATA": byte
static readonly "KEEP_ENTITY_DATA": byte
static readonly "KEEP_ATTRIBUTE_MODIFIERS": byte
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientboundRespawnPacket)>

constructor(arg0: $CommonPlayerSpawnInfo$$Type, arg1: byte)

public "type"(): $PacketType<($ClientboundRespawnPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "shouldKeep"(arg0: byte): boolean
public "commonPlayerSpawnInfo"(): $CommonPlayerSpawnInfo
public "dataToKeep"(): byte
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundRespawnPacket$$Type = ({"commonPlayerSpawnInfo"?: $CommonPlayerSpawnInfo$$Type, "dataToKeep"?: byte}) | ([commonPlayerSpawnInfo?: $CommonPlayerSpawnInfo$$Type, dataToKeep?: byte]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundRespawnPacket$$Original = $ClientboundRespawnPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundSetPassengersPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundSetPassengersPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundSetPassengersPacket)>

constructor(arg0: $Entity$$Type)

public "type"(): $PacketType<($ClientboundSetPassengersPacket)>
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getVehicle"(): integer
public "getPassengers"(): (integer)[]
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "vehicle"(): integer
get "passengers"(): (integer)[]
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundSetPassengersPacket$$Type = ($ClientboundSetPassengersPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundSetPassengersPacket$$Original = $ClientboundSetPassengersPacket;}
declare module "net.minecraft.network.protocol.common.ClientboundStoreCookiePacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ClientCommonPacketListener, $ClientCommonPacketListener$$Type} from "net.minecraft.network.protocol.common.ClientCommonPacketListener"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $ClientboundStoreCookiePacket extends $Record implements $Packet$$Interface<($ClientCommonPacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundStoreCookiePacket)>
static readonly "PAYLOAD_STREAM_CODEC": $StreamCodec<($ByteBuf), ((byte)[])>

constructor(arg0: $ResourceLocation$$Type, arg1: (byte)[])

public "payload"(): (byte)[]
public "type"(): $PacketType<($ClientboundStoreCookiePacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "key"(): $ResourceLocation
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientCommonPacketListener$$Type): void
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientCommonPacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientCommonPacketListener$$Type)>): $StreamCodec<(B), ($ClientCommonPacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundStoreCookiePacket$$Type = ({"key"?: $ResourceLocation$$Type, "payload"?: (byte)[]}) | ([key?: $ResourceLocation$$Type, payload?: (byte)[]]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundStoreCookiePacket$$Original = $ClientboundStoreCookiePacket;}
declare module "net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Collection$$Type} from "java.util.Collection"
import {$List} from "java.util.List"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ClientboundPlayerInfoUpdatePacket$Entry} from "net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket$Entry"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ClientboundPlayerInfoUpdatePacket$Action, $ClientboundPlayerInfoUpdatePacket$Action$$Type} from "net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket$Action"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$EnumSet, $EnumSet$$Type} from "java.util.EnumSet"

export class $ClientboundPlayerInfoUpdatePacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientboundPlayerInfoUpdatePacket)>

constructor(arg0: $ClientboundPlayerInfoUpdatePacket$Action$$Type, arg1: $ServerPlayer$$Type)
constructor(arg0: $EnumSet$$Type<($ClientboundPlayerInfoUpdatePacket$Action$$Type)>, arg1: $Collection$$Type<($ServerPlayer$$Type)>)

public "type"(): $PacketType<($ClientboundPlayerInfoUpdatePacket)>
public "toString"(): StringJS
public "entries"(): $List<($ClientboundPlayerInfoUpdatePacket$Entry)>
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "actions"(): $EnumSet<($ClientboundPlayerInfoUpdatePacket$Action)>
public "newEntries"(): $List<($ClientboundPlayerInfoUpdatePacket$Entry)>
public static "createPlayerInitializing"(arg0: $Collection$$Type<($ServerPlayer$$Type)>): $ClientboundPlayerInfoUpdatePacket
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundPlayerInfoUpdatePacket$$Type = ($ClientboundPlayerInfoUpdatePacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundPlayerInfoUpdatePacket$$Original = $ClientboundPlayerInfoUpdatePacket;}
declare module "net.minecraft.network.protocol.common.ServerboundResourcePackPacket$Action" {
import {$Enum} from "java.lang.Enum"

export class $ServerboundResourcePackPacket$Action extends $Enum<($ServerboundResourcePackPacket$Action)> {
static readonly "INVALID_URL": $ServerboundResourcePackPacket$Action
static readonly "ACCEPTED": $ServerboundResourcePackPacket$Action
static readonly "DOWNLOADED": $ServerboundResourcePackPacket$Action
static readonly "SUCCESSFULLY_LOADED": $ServerboundResourcePackPacket$Action
static readonly "FAILED_RELOAD": $ServerboundResourcePackPacket$Action
static readonly "DISCARDED": $ServerboundResourcePackPacket$Action
static readonly "DECLINED": $ServerboundResourcePackPacket$Action
static readonly "FAILED_DOWNLOAD": $ServerboundResourcePackPacket$Action

public static "values"(): ($ServerboundResourcePackPacket$Action)[]
public static "valueOf"(arg0: StringJS): $ServerboundResourcePackPacket$Action
public "isTerminal"(): boolean
get "terminal"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundResourcePackPacket$Action$$Type = (("successfully_loaded") | ("declined") | ("failed_download") | ("accepted") | ("downloaded") | ("invalid_url") | ("failed_reload") | ("discarded"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundResourcePackPacket$Action$$Original = $ServerboundResourcePackPacket$Action;}
declare module "net.minecraft.network.protocol.game.ServerboundContainerSlotStateChangedPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $ServerboundContainerSlotStateChangedPacket extends $Record implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundContainerSlotStateChangedPacket)>

constructor(arg0: integer, arg1: integer, arg2: boolean)

public "type"(): $PacketType<($ServerboundContainerSlotStateChangedPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "newState"(): boolean
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "slotId"(): integer
public "containerId"(): integer
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundContainerSlotStateChangedPacket$$Type = ({"slotId"?: integer, "containerId"?: integer, "newState"?: boolean}) | ([slotId?: integer, containerId?: integer, newState?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundContainerSlotStateChangedPacket$$Original = $ServerboundContainerSlotStateChangedPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundEntityEventPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundEntityEventPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundEntityEventPacket)>

constructor(arg0: $Entity$$Type, arg1: byte)

public "type"(): $PacketType<($ClientboundEntityEventPacket)>
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getEntity"(arg0: $Level$$Type): $Entity
public "getEventId"(): byte
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "eventId"(): byte
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundEntityEventPacket$$Type = ($ClientboundEntityEventPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundEntityEventPacket$$Original = $ClientboundEntityEventPacket;}
declare module "net.minecraft.network.protocol.game.ServerboundSeenAdvancementsPacket$Action" {
import {$Enum} from "java.lang.Enum"

export class $ServerboundSeenAdvancementsPacket$Action extends $Enum<($ServerboundSeenAdvancementsPacket$Action)> {
static readonly "OPENED_TAB": $ServerboundSeenAdvancementsPacket$Action
static readonly "CLOSED_SCREEN": $ServerboundSeenAdvancementsPacket$Action

public static "values"(): ($ServerboundSeenAdvancementsPacket$Action)[]
public static "valueOf"(arg0: StringJS): $ServerboundSeenAdvancementsPacket$Action
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundSeenAdvancementsPacket$Action$$Type = (("opened_tab") | ("closed_screen"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundSeenAdvancementsPacket$Action$$Original = $ServerboundSeenAdvancementsPacket$Action;}
declare module "net.minecraft.network.protocol.game.ClientboundMoveVehiclePacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundMoveVehiclePacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundMoveVehiclePacket)>

constructor(arg0: $Entity$$Type)

public "type"(): $PacketType<($ClientboundMoveVehiclePacket)>
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "getXRot"(): float
public "getYRot"(): float
public "getX"(): double
public "getZ"(): double
public "getY"(): double
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "XRot"(): float
get "YRot"(): float
get "x"(): double
get "z"(): double
get "y"(): double
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundMoveVehiclePacket$$Type = ($ClientboundMoveVehiclePacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundMoveVehiclePacket$$Original = $ClientboundMoveVehiclePacket;}
declare module "net.minecraft.network.protocol.login.ClientboundLoginCompressionPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ClientLoginPacketListener, $ClientLoginPacketListener$$Type} from "net.minecraft.network.protocol.login.ClientLoginPacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $ClientboundLoginCompressionPacket implements $Packet$$Interface<($ClientLoginPacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundLoginCompressionPacket)>

constructor(arg0: integer)

public "type"(): $PacketType<($ClientboundLoginCompressionPacket)>
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientLoginPacketListener$$Type): void
public "getCompressionThreshold"(): integer
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientLoginPacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientLoginPacketListener$$Type)>): $StreamCodec<(B), ($ClientLoginPacketListener)>
get "compressionThreshold"(): integer
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundLoginCompressionPacket$$Type = ($ClientboundLoginCompressionPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundLoginCompressionPacket$$Original = $ClientboundLoginCompressionPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundChunkBatchFinishedPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$Record} from "java.lang.Record"

export class $ClientboundChunkBatchFinishedPacket extends $Record implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundChunkBatchFinishedPacket)>

constructor(arg0: integer)

public "type"(): $PacketType<($ClientboundChunkBatchFinishedPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "batchSize"(): integer
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundChunkBatchFinishedPacket$$Type = ({"batchSize"?: integer}) | ([batchSize?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundChunkBatchFinishedPacket$$Original = $ClientboundChunkBatchFinishedPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundSetSimulationDistancePacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$Record} from "java.lang.Record"

export class $ClientboundSetSimulationDistancePacket extends $Record implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundSetSimulationDistancePacket)>

constructor(arg0: integer)

public "type"(): $PacketType<($ClientboundSetSimulationDistancePacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "simulationDistance"(): integer
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundSetSimulationDistancePacket$$Type = ({"simulationDistance"?: integer}) | ([simulationDistance?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundSetSimulationDistancePacket$$Original = $ClientboundSetSimulationDistancePacket;}
declare module "net.minecraft.network.protocol.game.ClientboundSetBorderSizePacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$WorldBorder$$Type} from "net.minecraft.world.level.border.WorldBorder"

export class $ClientboundSetBorderSizePacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundSetBorderSizePacket)>

constructor(arg0: $WorldBorder$$Type)

public "type"(): $PacketType<($ClientboundSetBorderSizePacket)>
public "getSize"(): double
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "size"(): double
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundSetBorderSizePacket$$Type = ($ClientboundSetBorderSizePacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundSetBorderSizePacket$$Original = $ClientboundSetBorderSizePacket;}
declare module "net.minecraft.network.protocol.game.ClientboundTickingStatePacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$TickRateManager$$Type} from "net.minecraft.world.TickRateManager"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$Record} from "java.lang.Record"

export class $ClientboundTickingStatePacket extends $Record implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundTickingStatePacket)>

constructor(arg0: float, arg1: boolean)

public "type"(): $PacketType<($ClientboundTickingStatePacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "from"(arg0: $TickRateManager$$Type): $ClientboundTickingStatePacket
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "isFrozen"(): boolean
public "tickRate"(): float
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "frozen"(): boolean
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundTickingStatePacket$$Type = ({"tickRate"?: float, "isFrozen"?: boolean}) | ([tickRate?: float, isFrozen?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundTickingStatePacket$$Original = $ClientboundTickingStatePacket;}
declare module "net.minecraft.network.protocol.game.ServerboundInteractPacket$Action" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ServerboundInteractPacket$Action$$Interface {
}

export class $ServerboundInteractPacket$Action implements $ServerboundInteractPacket$Action$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundInteractPacket$Action$$Type = ($ServerboundInteractPacket$Action);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundInteractPacket$Action$$Original = $ServerboundInteractPacket$Action;}
declare module "net.minecraft.network.protocol.game.ClientboundSystemChatPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$Record} from "java.lang.Record"

export class $ClientboundSystemChatPacket extends $Record implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientboundSystemChatPacket)>

constructor(arg0: $Component$$Type, arg1: boolean)

public "type"(): $PacketType<($ClientboundSystemChatPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "content"(): $Component
public "overlay"(): boolean
public "isSkippable"(): boolean
public "isTerminal"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "skippable"(): boolean
get "terminal"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundSystemChatPacket$$Type = ({"content"?: $Component$$Type, "overlay"?: boolean}) | ([content?: $Component$$Type, overlay?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundSystemChatPacket$$Original = $ClientboundSystemChatPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundAwardStatsPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$Object2IntMap, $Object2IntMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2IntMap"
import {$Stat, $Stat$$Type} from "net.minecraft.stats.Stat"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$Record} from "java.lang.Record"

export class $ClientboundAwardStatsPacket extends $Record implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientboundAwardStatsPacket)>

constructor(arg0: $Object2IntMap$$Type<($Stat$$Type<(never)>)>)

public "type"(): $PacketType<($ClientboundAwardStatsPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "stats"(): $Object2IntMap<($Stat<(never)>)>
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundAwardStatsPacket$$Type = ({"stats"?: $Object2IntMap$$Type<($Stat$$Type<(never)>)>}) | ([stats?: $Object2IntMap$$Type<($Stat$$Type<(never)>)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundAwardStatsPacket$$Original = $ClientboundAwardStatsPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundSetActionBarTextPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$Record} from "java.lang.Record"

export class $ClientboundSetActionBarTextPacket extends $Record implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientboundSetActionBarTextPacket)>

constructor(arg0: $Component$$Type)

public "type"(): $PacketType<($ClientboundSetActionBarTextPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "text"(): $Component
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundSetActionBarTextPacket$$Type = ({"text"?: $Component$$Type}) | ([text?: $Component$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundSetActionBarTextPacket$$Original = $ClientboundSetActionBarTextPacket;}
declare module "net.minecraft.network.protocol.status.ClientStatusPacketListener" {
import {$PacketFlow} from "net.minecraft.network.protocol.PacketFlow"
import {$CrashReport$$Type} from "net.minecraft.CrashReport"
import {$ClientPongPacketListener$$Interface} from "net.minecraft.network.protocol.ping.ClientPongPacketListener"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$DisconnectionDetails, $DisconnectionDetails$$Type} from "net.minecraft.network.DisconnectionDetails"
import {$ClientboundPongResponsePacket$$Type} from "net.minecraft.network.protocol.ping.ClientboundPongResponsePacket"
import {$Exception$$Type} from "java.lang.Exception"
import {$ConnectionProtocol} from "net.minecraft.network.ConnectionProtocol"
import {$Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$CrashReportCategory$$Type} from "net.minecraft.CrashReportCategory"
import {$ClientboundStatusResponsePacket$$Type} from "net.minecraft.network.protocol.status.ClientboundStatusResponsePacket"
import {$ClientboundPacketListener$$Interface} from "net.minecraft.network.ClientboundPacketListener"

export interface $ClientStatusPacketListener$$Interface extends $ClientPongPacketListener$$Interface, $ClientboundPacketListener$$Interface {
get "acceptingMessages"(): boolean
}

export class $ClientStatusPacketListener implements $ClientStatusPacketListener$$Interface {
 "protocol"(): $ConnectionProtocol
 "handleStatusResponse"(arg0: $ClientboundStatusResponsePacket$$Type): void
 "handlePongResponse"(arg0: $ClientboundPongResponsePacket$$Type): void
 "flow"(): $PacketFlow
 "fillListenerSpecificCrashDetails"(arg0: $CrashReport$$Type, arg1: $CrashReportCategory$$Type): void
 "fillCrashReport"(arg0: $CrashReport$$Type): void
 "onDisconnect"(arg0: $DisconnectionDetails$$Type): void
 "createDisconnectionInfo"(arg0: $Component$$Type, arg1: $Throwable$$Type): $DisconnectionDetails
 "isAcceptingMessages"(): boolean
 "shouldHandleMessage"(arg0: $Packet$$Type<(never)>): boolean
 "onPacketError"(arg0: $Packet$$Type, arg1: $Exception$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientStatusPacketListener$$Type = ($ClientStatusPacketListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientStatusPacketListener$$Original = $ClientStatusPacketListener;}
declare module "net.minecraft.network.protocol.game.ServerboundInteractPacket$Handler" {
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"

export interface $ServerboundInteractPacket$Handler$$Interface {
}

export class $ServerboundInteractPacket$Handler implements $ServerboundInteractPacket$Handler$$Interface {
 "onAttack"(): void
 "onInteraction"(arg0: $InteractionHand$$Type, arg1: $Vec3$$Type): void
 "onInteraction"(arg0: $InteractionHand$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundInteractPacket$Handler$$Type = ($ServerboundInteractPacket$Handler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundInteractPacket$Handler$$Original = $ServerboundInteractPacket$Handler;}
declare module "net.minecraft.network.protocol.cookie.ServerboundCookieResponsePacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerCookiePacketListener, $ServerCookiePacketListener$$Type} from "net.minecraft.network.protocol.cookie.ServerCookiePacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $ServerboundCookieResponsePacket extends $Record implements $Packet$$Interface<($ServerCookiePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundCookieResponsePacket)>

constructor(arg0: $ResourceLocation$$Type, arg1: (byte)[])

public "payload"(): (byte)[]
public "type"(): $PacketType<($ServerboundCookieResponsePacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "key"(): $ResourceLocation
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ServerCookiePacketListener$$Type): void
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerCookiePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerCookiePacketListener$$Type)>): $StreamCodec<(B), ($ServerCookiePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundCookieResponsePacket$$Type = ({"key"?: $ResourceLocation$$Type, "payload"?: (byte)[]}) | ([key?: $ResourceLocation$$Type, payload?: (byte)[]]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundCookieResponsePacket$$Original = $ServerboundCookieResponsePacket;}
declare module "net.minecraft.network.protocol.common.ServerboundCustomPayloadPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ServerCommonPacketListener, $ServerCommonPacketListener$$Type} from "net.minecraft.network.protocol.common.ServerCommonPacketListener"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$INamedPacket$$Interface} from "com.connectivity.networkstats.INamedPacket"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$CustomPacketPayload, $CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$CustomPayloadS2CPacketAccessor$$Interface} from "net.fabricmc.fabric.mixin.attachment.CustomPayloadS2CPacketAccessor"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$Record} from "java.lang.Record"

export class $ServerboundCustomPayloadPacket extends $Record implements $Packet$$Interface<($ServerCommonPacketListener)>, $INamedPacket$$Interface, $CustomPayloadS2CPacketAccessor$$Interface {
static readonly "CONFIG_STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundCustomPayloadPacket)>
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundCustomPayloadPacket)>

constructor(payload: $CustomPacketPayload$$Type)

public "payload"(): $CustomPacketPayload
public "getName"(): StringJS
public "type"(): $PacketType<($ServerboundCustomPayloadPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "setName"(arg0: StringJS): void
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ServerCommonPacketListener$$Type): void
public static "getMaxPayloadSize$fabric_data_attachment_api_v1_$md$6d3b50$0"(): integer
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerCommonPacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerCommonPacketListener$$Type)>): $StreamCodec<(B), ($ServerCommonPacketListener)>
public static "getMaxPayloadSize"(): integer
get "name"(): StringJS
set "name"(value: StringJS)
get "maxPayloadSize$fabric_data_attachment_api_v1_$md$6d3b50$0"(): integer
get "terminal"(): boolean
get "skippable"(): boolean
get "maxPayloadSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundCustomPayloadPacket$$Type = ({"payload"?: $CustomPacketPayload$$Type}) | ([payload?: $CustomPacketPayload$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundCustomPayloadPacket$$Original = $ServerboundCustomPayloadPacket;}
declare module "net.minecraft.network.protocol.configuration.ServerConfigurationPacketListener" {
import {$ServerCommonPacketListener$$Interface} from "net.minecraft.network.protocol.common.ServerCommonPacketListener"
import {$ServerboundClientInformationPacket$$Type} from "net.minecraft.network.protocol.common.ServerboundClientInformationPacket"
import {$ServerboundPongPacket$$Type} from "net.minecraft.network.protocol.common.ServerboundPongPacket"
import {$CustomPacketPayload$Type$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$IServerConfigurationPacketListenerExtension$$Interface} from "net.neoforged.neoforge.common.extensions.IServerConfigurationPacketListenerExtension"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$ServerboundCookieResponsePacket$$Type} from "net.minecraft.network.protocol.cookie.ServerboundCookieResponsePacket"
import {$Exception$$Type} from "java.lang.Exception"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ServerboundFinishConfigurationPacket$$Type} from "net.minecraft.network.protocol.configuration.ServerboundFinishConfigurationPacket"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$ReentrantBlockableEventLoop} from "net.minecraft.util.thread.ReentrantBlockableEventLoop"
import {$ConfigurationTask$Type$$Type} from "net.minecraft.server.network.ConfigurationTask$Type"
import {$PacketFlow} from "net.minecraft.network.protocol.PacketFlow"
import {$CrashReport$$Type} from "net.minecraft.CrashReport"
import {$PacketSendListener$$Type} from "net.minecraft.network.PacketSendListener"
import {$CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$ServerboundKeepAlivePacket$$Type} from "net.minecraft.network.protocol.common.ServerboundKeepAlivePacket"
import {$DisconnectionDetails, $DisconnectionDetails$$Type} from "net.minecraft.network.DisconnectionDetails"
import {$ServerboundCustomPayloadPacket$$Type} from "net.minecraft.network.protocol.common.ServerboundCustomPayloadPacket"
import {$ConnectionType} from "net.neoforged.neoforge.network.connection.ConnectionType"
import {$ConnectionProtocol} from "net.minecraft.network.ConnectionProtocol"
import {$Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ServerboundSelectKnownPacks$$Type} from "net.minecraft.network.protocol.configuration.ServerboundSelectKnownPacks"
import {$Connection} from "net.minecraft.network.Connection"
import {$ServerboundResourcePackPacket$$Type} from "net.minecraft.network.protocol.common.ServerboundResourcePackPacket"
import {$CrashReportCategory$$Type} from "net.minecraft.CrashReportCategory"

export interface $ServerConfigurationPacketListener$$Interface extends $ServerCommonPacketListener$$Interface, $IServerConfigurationPacketListenerExtension$$Interface {
get "connection"(): $Connection
get "mainThreadEventLoop"(): $ReentrantBlockableEventLoop<(never)>
get "connectionType"(): $ConnectionType
get "acceptingMessages"(): boolean
}

export class $ServerConfigurationPacketListener implements $ServerConfigurationPacketListener$$Interface {
 "protocol"(): $ConnectionProtocol
 "handleConfigurationFinished"(arg0: $ServerboundFinishConfigurationPacket$$Type): void
 "handleSelectKnownPacks"(arg0: $ServerboundSelectKnownPacks$$Type): void
 "handlePong"(arg0: $ServerboundPongPacket$$Type): void
 "handleCustomPayload"(arg0: $ServerboundCustomPayloadPacket$$Type): void
 "handleClientInformation"(arg0: $ServerboundClientInformationPacket$$Type): void
 "handleResourcePackResponse"(arg0: $ServerboundResourcePackPacket$$Type): void
 "handleKeepAlive"(arg0: $ServerboundKeepAlivePacket$$Type): void
 "finishCurrentTask"(arg0: $ConfigurationTask$Type$$Type): void
 "handleCookieResponse"(arg0: $ServerboundCookieResponsePacket$$Type): void
 "onPacketError"(arg0: $Packet$$Type, arg1: $Exception$$Type): void
 "send"(arg0: $CustomPacketPayload$$Type): void
 "send"(arg0: $Packet$$Type<(never)>, arg1: $PacketSendListener$$Type): void
 "send"(arg0: $CustomPacketPayload$$Type, arg1: $PacketSendListener$$Type): void
 "flow"(): $PacketFlow
 "getConnection"(): $Connection
 "hasChannel"(arg0: $CustomPacketPayload$Type$$Type<(never)>): boolean
 "hasChannel"(arg0: $CustomPacketPayload$$Type): boolean
 "hasChannel"(arg0: $ResourceLocation$$Type): boolean
 "disconnect"(arg0: $Component$$Type): void
 "send"(arg0: $Packet$$Type<(never)>): void
 "getMainThreadEventLoop"(): $ReentrantBlockableEventLoop<(never)>
 "getConnectionType"(): $ConnectionType
 "fillListenerSpecificCrashDetails"(arg0: $CrashReport$$Type, arg1: $CrashReportCategory$$Type): void
 "fillCrashReport"(arg0: $CrashReport$$Type): void
 "onDisconnect"(arg0: $DisconnectionDetails$$Type): void
 "createDisconnectionInfo"(arg0: $Component$$Type, arg1: $Throwable$$Type): $DisconnectionDetails
 "isAcceptingMessages"(): boolean
 "shouldHandleMessage"(arg0: $Packet$$Type<(never)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerConfigurationPacketListener$$Type = ($ServerConfigurationPacketListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerConfigurationPacketListener$$Original = $ServerConfigurationPacketListener;}
declare module "net.minecraft.network.protocol.game.ClientboundBlockDestructionPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundBlockDestructionPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundBlockDestructionPacket)>

constructor(arg0: integer, arg1: $BlockPos$$Type, arg2: integer)

public "type"(): $PacketType<($ClientboundBlockDestructionPacket)>
public "getId"(): integer
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "getPos"(): $BlockPos
public "getProgress"(): integer
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "id"(): integer
get "pos"(): $BlockPos
get "progress"(): integer
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundBlockDestructionPacket$$Type = ($ClientboundBlockDestructionPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundBlockDestructionPacket$$Original = $ClientboundBlockDestructionPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundSetCarriedItemPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundSetCarriedItemPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundSetCarriedItemPacket)>

constructor(arg0: integer)

public "type"(): $PacketType<($ClientboundSetCarriedItemPacket)>
public "getSlot"(): integer
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "slot"(): integer
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundSetCarriedItemPacket$$Type = ($ClientboundSetCarriedItemPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundSetCarriedItemPacket$$Original = $ClientboundSetCarriedItemPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundSetHealthPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundSetHealthPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundSetHealthPacket)>

constructor(arg0: float, arg1: integer, arg2: float)

public "type"(): $PacketType<($ClientboundSetHealthPacket)>
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getFood"(): integer
public "getHealth"(): float
public "getSaturation"(): float
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "food"(): integer
get "health"(): float
get "saturation"(): float
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundSetHealthPacket$$Type = ($ClientboundSetHealthPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundSetHealthPacket$$Original = $ClientboundSetHealthPacket;}
declare module "net.minecraft.network.protocol.configuration.ServerboundSelectKnownPacks" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$KnownPack, $KnownPack$$Type} from "net.minecraft.server.packs.repository.KnownPack"
import {$List, $List$$Type} from "java.util.List"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerConfigurationPacketListener, $ServerConfigurationPacketListener$$Type} from "net.minecraft.network.protocol.configuration.ServerConfigurationPacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $ServerboundSelectKnownPacks extends $Record implements $Packet$$Interface<($ServerConfigurationPacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($ServerboundSelectKnownPacks)>

constructor(knownPacks: $List$$Type<($KnownPack$$Type)>)

public "type"(): $PacketType<($ServerboundSelectKnownPacks)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ServerConfigurationPacketListener$$Type): void
public "knownPacks"(): $List<($KnownPack)>
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerConfigurationPacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerConfigurationPacketListener$$Type)>): $StreamCodec<(B), ($ServerConfigurationPacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundSelectKnownPacks$$Type = ({"knownPacks"?: $List$$Type<($KnownPack$$Type)>}) | ([knownPacks?: $List$$Type<($KnownPack$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundSelectKnownPacks$$Original = $ServerboundSelectKnownPacks;}
declare module "net.minecraft.network.protocol.game.ServerboundMovePlayerPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $ServerboundMovePlayerPacket implements $Packet$$Interface<($ServerGamePacketListener)> {
readonly "onGround": boolean
readonly "yRot": float
readonly "x": double
readonly "xRot": float
readonly "y": double
readonly "hasRot": boolean
readonly "z": double
readonly "hasPos": boolean

constructor(arg0: double, arg1: double, arg2: double, arg3: float, arg4: float, arg5: boolean, arg6: boolean, arg7: boolean)

public "type"(): $PacketType<($ServerboundMovePlayerPacket)>
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "getXRot"(arg0: float): float
public "getYRot"(arg0: float): float
public "getX"(arg0: double): double
public "getZ"(arg0: double): double
public "getY"(arg0: double): double
public "hasPosition"(): boolean
public "isOnGround"(): boolean
public "hasRotation"(): boolean
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundMovePlayerPacket$$Type = ($ServerboundMovePlayerPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundMovePlayerPacket$$Original = $ServerboundMovePlayerPacket;}
declare module "net.minecraft.network.protocol.common.ServerboundKeepAlivePacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ServerCommonPacketListener, $ServerCommonPacketListener$$Type} from "net.minecraft.network.protocol.common.ServerCommonPacketListener"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $ServerboundKeepAlivePacket implements $Packet$$Interface<($ServerCommonPacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundKeepAlivePacket)>

constructor(arg0: long)

public "type"(): $PacketType<($ServerboundKeepAlivePacket)>
public "getId"(): long
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ServerCommonPacketListener$$Type): void
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerCommonPacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerCommonPacketListener$$Type)>): $StreamCodec<(B), ($ServerCommonPacketListener)>
get "id"(): long
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundKeepAlivePacket$$Type = ($ServerboundKeepAlivePacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundKeepAlivePacket$$Original = $ServerboundKeepAlivePacket;}
declare module "net.minecraft.network.protocol.game.ClientboundSetTimePacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundSetTimePacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundSetTimePacket)>

constructor(arg0: long, arg1: long, arg2: boolean)

public "type"(): $PacketType<($ClientboundSetTimePacket)>
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getGameTime"(): long
public "getDayTime"(): long
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "gameTime"(): long
get "dayTime"(): long
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundSetTimePacket$$Type = ($ClientboundSetTimePacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundSetTimePacket$$Original = $ClientboundSetTimePacket;}
declare module "net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket$Entry" {
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$GameType, $GameType$$Type} from "net.minecraft.world.level.GameType"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$RemoteChatSession$Data, $RemoteChatSession$Data$$Type} from "net.minecraft.network.chat.RemoteChatSession$Data"
import {$Record} from "java.lang.Record"

export class $ClientboundPlayerInfoUpdatePacket$Entry extends $Record {
constructor(arg0: $ServerPlayer$$Type)
constructor(arg0: $UUID$$Type, arg1: $GameProfile$$Type, arg2: boolean, arg3: integer, arg4: $GameType$$Type, arg5: $Component$$Type, arg6: $RemoteChatSession$Data$$Type)

public "profile"(): $GameProfile
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "displayName"(): $Component
public "gameMode"(): $GameType
public "profileId"(): $UUID
public "latency"(): integer
public "chatSession"(): $RemoteChatSession$Data
public "listed"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundPlayerInfoUpdatePacket$Entry$$Type = ({"latency"?: integer, "displayName"?: $Component$$Type, "profileId"?: $UUID$$Type, "gameMode"?: $GameType$$Type, "listed"?: boolean, "chatSession"?: $RemoteChatSession$Data$$Type, "profile"?: $GameProfile$$Type}) | ([latency?: integer, displayName?: $Component$$Type, profileId?: $UUID$$Type, gameMode?: $GameType$$Type, listed?: boolean, chatSession?: $RemoteChatSession$Data$$Type, profile?: $GameProfile$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundPlayerInfoUpdatePacket$Entry$$Original = $ClientboundPlayerInfoUpdatePacket$Entry;}
declare module "net.minecraft.network.protocol.game.ClientboundForgetLevelChunkPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$Record} from "java.lang.Record"

export class $ClientboundForgetLevelChunkPacket extends $Record implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundForgetLevelChunkPacket)>

constructor(arg0: $ChunkPos$$Type)

public "type"(): $PacketType<($ClientboundForgetLevelChunkPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "pos"(): $ChunkPos
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundForgetLevelChunkPacket$$Type = ({"pos"?: $ChunkPos$$Type}) | ([pos?: $ChunkPos$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundForgetLevelChunkPacket$$Original = $ClientboundForgetLevelChunkPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundUpdateRecipesPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Collection$$Type} from "java.util.Collection"
import {$List} from "java.util.List"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$RecipeHolder, $RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"

export class $ClientboundUpdateRecipesPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientboundUpdateRecipesPacket)>

constructor(arg0: $Collection$$Type<($RecipeHolder$$Type<(never)>)>)

public "type"(): $PacketType<($ClientboundUpdateRecipesPacket)>
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "getRecipes"(): $List<($RecipeHolder<(never)>)>
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "recipes"(): $List<($RecipeHolder<(never)>)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundUpdateRecipesPacket$$Type = ($ClientboundUpdateRecipesPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundUpdateRecipesPacket$$Original = $ClientboundUpdateRecipesPacket;}
declare module "net.minecraft.network.protocol.game.ServerboundSelectTradePacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $ServerboundSelectTradePacket implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundSelectTradePacket)>

constructor(arg0: integer)

public "type"(): $PacketType<($ServerboundSelectTradePacket)>
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "getItem"(): integer
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "item"(): integer
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundSelectTradePacket$$Type = ($ServerboundSelectTradePacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundSelectTradePacket$$Original = $ServerboundSelectTradePacket;}
declare module "net.minecraft.network.protocol.BundlerInfo" {
import {$Iterable$$Type} from "java.lang.Iterable"
import {$BundlerInfo$Bundler} from "net.minecraft.network.protocol.BundlerInfo$Bundler"
import {$Function$$Type} from "java.util.function.Function"
import {$PacketListener} from "net.minecraft.network.PacketListener"
import {$PacketType$$Type} from "net.minecraft.network.protocol.PacketType"
import {$Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$BundlePacket} from "net.minecraft.network.protocol.BundlePacket"
import {$BundleDelimiterPacket$$Type} from "net.minecraft.network.protocol.BundleDelimiterPacket"
import {$ChannelHandlerContext$$Type} from "io.netty.channel.ChannelHandlerContext"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $BundlerInfo$$Interface {
}

export class $BundlerInfo implements $BundlerInfo$$Interface {
static readonly "BUNDLE_SIZE_LIMIT": integer

 "startPacketBundling"(arg0: $Packet$$Type<(never)>): $BundlerInfo$Bundler
 "unbundlePacket"(arg0: $Packet$$Type<(never)>, arg1: $Consumer$$Type<($Packet<(never)>)>, arg2: $ChannelHandlerContext$$Type): void
/**
 * 
 * @deprecated
 */
 "unbundlePacket"(arg0: $Packet$$Type<(never)>, arg1: $Consumer$$Type<($Packet<(never)>)>): void
static "createForPacket"<T extends $PacketListener, P extends $BundlePacket<(object)>>(arg0: $PacketType$$Type<(P)>, arg1: $Function$$Type<($Iterable<($Packet<(T)>)>), (P)>, arg2: $BundleDelimiterPacket$$Type<(T)>): $BundlerInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BundlerInfo$$Type = ($BundlerInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BundlerInfo$$Original = $BundlerInfo;}
declare module "net.minecraft.network.protocol.game.ClientboundCommandSuggestionsPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Suggestions, $Suggestions$$Type} from "com.mojang.brigadier.suggestion.Suggestions"
import {$List, $List$$Type} from "java.util.List"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ClientboundCommandSuggestionsPacket$Entry, $ClientboundCommandSuggestionsPacket$Entry$$Type} from "net.minecraft.network.protocol.game.ClientboundCommandSuggestionsPacket$Entry"
import {$Record} from "java.lang.Record"

export class $ClientboundCommandSuggestionsPacket extends $Record implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientboundCommandSuggestionsPacket)>

constructor(arg0: integer, arg1: $Suggestions$$Type)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: $List$$Type<($ClientboundCommandSuggestionsPacket$Entry$$Type)>)

public "type"(): $PacketType<($ClientboundCommandSuggestionsPacket)>
public "equals"(arg0: any): boolean
public "length"(): integer
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): integer
public "start"(): integer
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "suggestions"(): $List<($ClientboundCommandSuggestionsPacket$Entry)>
public "toSuggestions"(): $Suggestions
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundCommandSuggestionsPacket$$Type = ({"id"?: integer, "start"?: integer, "suggestions"?: $List$$Type<($ClientboundCommandSuggestionsPacket$Entry$$Type)>, "length"?: integer}) | ([id?: integer, start?: integer, suggestions?: $List$$Type<($ClientboundCommandSuggestionsPacket$Entry$$Type)>, length?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundCommandSuggestionsPacket$$Original = $ClientboundCommandSuggestionsPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundSetChunkCacheRadiusPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundSetChunkCacheRadiusPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundSetChunkCacheRadiusPacket)>

constructor(arg0: integer)

public "type"(): $PacketType<($ClientboundSetChunkCacheRadiusPacket)>
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "getRadius"(): integer
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "radius"(): integer
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundSetChunkCacheRadiusPacket$$Type = ($ClientboundSetChunkCacheRadiusPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundSetChunkCacheRadiusPacket$$Original = $ClientboundSetChunkCacheRadiusPacket;}
declare module "net.minecraft.network.protocol.common.custom.BrainDebugPayload$BrainDump" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Path, $Path$$Type} from "net.minecraft.world.level.pathfinder.Path"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Record} from "java.lang.Record"

export class $BrainDebugPayload$BrainDump extends $Record {
constructor(arg0: $FriendlyByteBuf$$Type)
constructor(arg0: $UUID$$Type, arg1: integer, arg2: StringJS, arg3: StringJS, arg4: integer, arg5: float, arg6: float, arg7: $Vec3$$Type, arg8: StringJS, arg9: $Path$$Type, arg10: boolean, arg11: integer, arg12: $List$$Type<(StringJS)>, arg13: $List$$Type<(StringJS)>, arg14: $List$$Type<(StringJS)>, arg15: $List$$Type<(StringJS)>, arg16: $Set$$Type<($BlockPos$$Type)>, arg17: $Set$$Type<($BlockPos$$Type)>)

public "name"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): integer
public "write"(arg0: $FriendlyByteBuf$$Type): void
public "pos"(): $Vec3
public "path"(): $Path
public "xp"(): integer
public "hasPoi"(arg0: $BlockPos$$Type): boolean
public "inventory"(): StringJS
public "potentialPois"(): $Set<($BlockPos)>
public "hasPotentialPoi"(arg0: $BlockPos$$Type): boolean
public "gossips"(): $List<(StringJS)>
public "uuid"(): $UUID
public "health"(): float
public "memories"(): $List<(StringJS)>
public "pois"(): $Set<($BlockPos)>
public "wantsGolem"(): boolean
public "behaviors"(): $List<(StringJS)>
public "angerLevel"(): integer
public "activities"(): $List<(StringJS)>
public "profession"(): StringJS
public "maxHealth"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrainDebugPayload$BrainDump$$Type = ({"xp"?: integer, "potentialPois"?: $Set$$Type<($BlockPos$$Type)>, "id"?: integer, "memories"?: $List$$Type<(StringJS)>, "path"?: $Path$$Type, "inventory"?: StringJS, "uuid"?: $UUID$$Type, "maxHealth"?: float, "name"?: StringJS, "activities"?: $List$$Type<(StringJS)>, "wantsGolem"?: boolean, "profession"?: StringJS, "pois"?: $Set$$Type<($BlockPos$$Type)>, "gossips"?: $List$$Type<(StringJS)>, "pos"?: $Vec3$$Type, "angerLevel"?: integer, "behaviors"?: $List$$Type<(StringJS)>, "health"?: float}) | ([xp?: integer, potentialPois?: $Set$$Type<($BlockPos$$Type)>, id?: integer, memories?: $List$$Type<(StringJS)>, path?: $Path$$Type, inventory?: StringJS, uuid?: $UUID$$Type, maxHealth?: float, name?: StringJS, activities?: $List$$Type<(StringJS)>, wantsGolem?: boolean, profession?: StringJS, pois?: $Set$$Type<($BlockPos$$Type)>, gossips?: $List$$Type<(StringJS)>, pos?: $Vec3$$Type, angerLevel?: integer, behaviors?: $List$$Type<(StringJS)>, health?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BrainDebugPayload$BrainDump$$Original = $BrainDebugPayload$BrainDump;}
declare module "net.minecraft.network.protocol.game.ClientboundBossEventPacket$Handler" {
import {$BossEvent$BossBarColor$$Type} from "net.minecraft.world.BossEvent$BossBarColor"
import {$UUID$$Type} from "java.util.UUID"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BossEvent$BossBarOverlay$$Type} from "net.minecraft.world.BossEvent$BossBarOverlay"

export interface $ClientboundBossEventPacket$Handler$$Interface {
}

export class $ClientboundBossEventPacket$Handler implements $ClientboundBossEventPacket$Handler$$Interface {
 "remove"(arg0: $UUID$$Type): void
 "add"(arg0: $UUID$$Type, arg1: $Component$$Type, arg2: float, arg3: $BossEvent$BossBarColor$$Type, arg4: $BossEvent$BossBarOverlay$$Type, arg5: boolean, arg6: boolean, arg7: boolean): void
 "updateProgress"(arg0: $UUID$$Type, arg1: float): void
 "updateStyle"(arg0: $UUID$$Type, arg1: $BossEvent$BossBarColor$$Type, arg2: $BossEvent$BossBarOverlay$$Type): void
 "updateProperties"(arg0: $UUID$$Type, arg1: boolean, arg2: boolean, arg3: boolean): void
 "updateName"(arg0: $UUID$$Type, arg1: $Component$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundBossEventPacket$Handler$$Type = ($ClientboundBossEventPacket$Handler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundBossEventPacket$Handler$$Original = $ClientboundBossEventPacket$Handler;}
declare module "net.minecraft.network.protocol.game.ServerboundRenameItemPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $ServerboundRenameItemPacket implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundRenameItemPacket)>

constructor(arg0: StringJS)

public "getName"(): StringJS
public "type"(): $PacketType<($ServerboundRenameItemPacket)>
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "name"(): StringJS
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundRenameItemPacket$$Type = ($ServerboundRenameItemPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundRenameItemPacket$$Original = $ServerboundRenameItemPacket;}
declare module "net.minecraft.network.protocol.game.ServerboundBlockEntityTagQueryPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $ServerboundBlockEntityTagQueryPacket implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundBlockEntityTagQueryPacket)>

constructor(arg0: integer, arg1: $BlockPos$$Type)

public "type"(): $PacketType<($ServerboundBlockEntityTagQueryPacket)>
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getPos"(): $BlockPos
public "getTransactionId"(): integer
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "pos"(): $BlockPos
get "transactionId"(): integer
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundBlockEntityTagQueryPacket$$Type = ($ServerboundBlockEntityTagQueryPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundBlockEntityTagQueryPacket$$Original = $ServerboundBlockEntityTagQueryPacket;}
declare module "net.minecraft.network.protocol.game.ServerboundSetCommandBlockPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$CommandBlockEntity$Mode, $CommandBlockEntity$Mode$$Type} from "net.minecraft.world.level.block.entity.CommandBlockEntity$Mode"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $ServerboundSetCommandBlockPacket implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundSetCommandBlockPacket)>

constructor(arg0: $BlockPos$$Type, arg1: StringJS, arg2: $CommandBlockEntity$Mode$$Type, arg3: boolean, arg4: boolean, arg5: boolean)

public "type"(): $PacketType<($ServerboundSetCommandBlockPacket)>
public "isAutomatic"(): boolean
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "getPos"(): $BlockPos
public "getMode"(): $CommandBlockEntity$Mode
public "getCommand"(): StringJS
public "isTrackOutput"(): boolean
public "isConditional"(): boolean
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "automatic"(): boolean
get "pos"(): $BlockPos
get "mode"(): $CommandBlockEntity$Mode
get "command"(): StringJS
get "trackOutput"(): boolean
get "conditional"(): boolean
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundSetCommandBlockPacket$$Type = ($ServerboundSetCommandBlockPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundSetCommandBlockPacket$$Original = $ServerboundSetCommandBlockPacket;}
declare module "net.minecraft.network.protocol.common.custom.HiveDebugPayload$HiveInfo" {
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Record} from "java.lang.Record"

export class $HiveDebugPayload$HiveInfo extends $Record {
constructor(arg0: $FriendlyByteBuf$$Type)
constructor(arg0: $BlockPos$$Type, arg1: StringJS, arg2: integer, arg3: integer, arg4: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "write"(arg0: $FriendlyByteBuf$$Type): void
public "pos"(): $BlockPos
public "occupantCount"(): integer
public "sedated"(): boolean
public "honeyLevel"(): integer
public "hiveType"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HiveDebugPayload$HiveInfo$$Type = ({"honeyLevel"?: integer, "hiveType"?: StringJS, "occupantCount"?: integer, "pos"?: $BlockPos$$Type, "sedated"?: boolean}) | ([honeyLevel?: integer, hiveType?: StringJS, occupantCount?: integer, pos?: $BlockPos$$Type, sedated?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HiveDebugPayload$HiveInfo$$Original = $HiveDebugPayload$HiveInfo;}
declare module "net.minecraft.network.protocol.status.ClientboundStatusResponsePacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$ServerStatus, $ServerStatus$$Type} from "net.minecraft.network.protocol.status.ServerStatus"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientStatusPacketListener, $ClientStatusPacketListener$$Type} from "net.minecraft.network.protocol.status.ClientStatusPacketListener"
import {$Record} from "java.lang.Record"

export class $ClientboundStatusResponsePacket extends $Record implements $Packet$$Interface<($ClientStatusPacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundStatusResponsePacket)>

constructor(status: $ServerStatus$$Type, cachedStatus: StringJS)
constructor(arg0: $ServerStatus$$Type)

public "type"(): $PacketType<($ClientboundStatusResponsePacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "status"(): $ServerStatus
public "handle"(arg0: $ClientStatusPacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "cachedStatus"(): StringJS
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientStatusPacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientStatusPacketListener$$Type)>): $StreamCodec<(B), ($ClientStatusPacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundStatusResponsePacket$$Type = ({"cachedStatus"?: StringJS, "status"?: $ServerStatus$$Type}) | ([cachedStatus?: StringJS, status?: $ServerStatus$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundStatusResponsePacket$$Original = $ClientboundStatusResponsePacket;}
declare module "net.minecraft.network.protocol.game.ServerPacketListener" {
import {$PacketFlow} from "net.minecraft.network.protocol.PacketFlow"
import {$Exception$$Type} from "java.lang.Exception"
import {$ConnectionProtocol} from "net.minecraft.network.ConnectionProtocol"
import {$CrashReport$$Type} from "net.minecraft.CrashReport"
import {$ServerboundPacketListener$$Interface} from "net.minecraft.network.ServerboundPacketListener"
import {$Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Logger} from "org.slf4j.Logger"
import {$CrashReportCategory$$Type} from "net.minecraft.CrashReportCategory"
import {$DisconnectionDetails, $DisconnectionDetails$$Type} from "net.minecraft.network.DisconnectionDetails"

export interface $ServerPacketListener$$Interface extends $ServerboundPacketListener$$Interface {
get "acceptingMessages"(): boolean
}

export class $ServerPacketListener implements $ServerPacketListener$$Interface {
static readonly "LOGGER": $Logger

 "onPacketError"(arg0: $Packet$$Type, arg1: $Exception$$Type): void
 "flow"(): $PacketFlow
 "protocol"(): $ConnectionProtocol
 "fillListenerSpecificCrashDetails"(arg0: $CrashReport$$Type, arg1: $CrashReportCategory$$Type): void
 "fillCrashReport"(arg0: $CrashReport$$Type): void
 "onDisconnect"(arg0: $DisconnectionDetails$$Type): void
 "createDisconnectionInfo"(arg0: $Component$$Type, arg1: $Throwable$$Type): $DisconnectionDetails
 "isAcceptingMessages"(): boolean
 "shouldHandleMessage"(arg0: $Packet$$Type<(never)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPacketListener$$Type = ($ServerPacketListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerPacketListener$$Original = $ServerPacketListener;}
declare module "net.minecraft.network.protocol.game.ClientboundLoginPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$CommonPlayerSpawnInfo, $CommonPlayerSpawnInfo$$Type} from "net.minecraft.network.protocol.game.CommonPlayerSpawnInfo"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Record} from "java.lang.Record"

export class $ClientboundLoginPacket extends $Record implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientboundLoginPacket)>

constructor(arg0: integer, arg1: boolean, arg2: $Set$$Type<($ResourceKey$$Type<($Level$$Type)>)>, arg3: integer, arg4: integer, arg5: integer, arg6: boolean, arg7: boolean, arg8: boolean, arg9: $CommonPlayerSpawnInfo$$Type, arg10: boolean)

public "type"(): $PacketType<($ClientboundLoginPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "levels"(): $Set<($ResourceKey<($Level)>)>
public "reducedDebugInfo"(): boolean
public "hardcore"(): boolean
public "showDeathScreen"(): boolean
public "doLimitedCrafting"(): boolean
public "simulationDistance"(): integer
public "chunkRadius"(): integer
public "playerId"(): integer
public "commonPlayerSpawnInfo"(): $CommonPlayerSpawnInfo
public "enforcesSecureChat"(): boolean
public "maxPlayers"(): integer
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundLoginPacket$$Type = ({"reducedDebugInfo"?: boolean, "chunkRadius"?: integer, "doLimitedCrafting"?: boolean, "enforcesSecureChat"?: boolean, "levels"?: $Set$$Type<($ResourceKey$$Type<($Level$$Type)>)>, "simulationDistance"?: integer, "commonPlayerSpawnInfo"?: $CommonPlayerSpawnInfo$$Type, "hardcore"?: boolean, "playerId"?: integer, "showDeathScreen"?: boolean, "maxPlayers"?: integer}) | ([reducedDebugInfo?: boolean, chunkRadius?: integer, doLimitedCrafting?: boolean, enforcesSecureChat?: boolean, levels?: $Set$$Type<($ResourceKey$$Type<($Level$$Type)>)>, simulationDistance?: integer, commonPlayerSpawnInfo?: $CommonPlayerSpawnInfo$$Type, hardcore?: boolean, playerId?: integer, showDeathScreen?: boolean, maxPlayers?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundLoginPacket$$Original = $ClientboundLoginPacket;}
declare module "net.minecraft.network.protocol.common.custom.CustomPacketPayload$FallbackProvider" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$CustomPacketPayload, $CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"

export interface $CustomPacketPayload$FallbackProvider$$Interface<B extends $FriendlyByteBuf> {

(arg0: $ResourceLocation): $StreamCodec$$Type<(B), ($CustomPacketPayload$$Type)>
}

export class $CustomPacketPayload$FallbackProvider<B extends $FriendlyByteBuf> implements $CustomPacketPayload$FallbackProvider$$Interface {
 "create"(arg0: $ResourceLocation$$Type): $StreamCodec<(B), ($CustomPacketPayload)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomPacketPayload$FallbackProvider$$Type<B> = ((arg0: $ResourceLocation) => $StreamCodec$$Type<(B), ($CustomPacketPayload$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomPacketPayload$FallbackProvider$$Original<B> = $CustomPacketPayload$FallbackProvider<(B)>;}
declare module "net.minecraft.network.protocol.game.ClientboundSetPlayerTeamPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Collection} from "java.util.Collection"
import {$Optional} from "java.util.Optional"
import {$ClientboundSetPlayerTeamPacket$Action, $ClientboundSetPlayerTeamPacket$Action$$Type} from "net.minecraft.network.protocol.game.ClientboundSetPlayerTeamPacket$Action"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$ClientboundSetPlayerTeamPacket$Parameters} from "net.minecraft.network.protocol.game.ClientboundSetPlayerTeamPacket$Parameters"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$PlayerTeam$$Type} from "net.minecraft.world.scores.PlayerTeam"

export class $ClientboundSetPlayerTeamPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientboundSetPlayerTeamPacket)>

public "getName"(): StringJS
public "type"(): $PacketType<($ClientboundSetPlayerTeamPacket)>
public "getParameters"(): $Optional<($ClientboundSetPlayerTeamPacket$Parameters)>
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getPlayers"(): $Collection<(StringJS)>
public static "createPlayerPacket"(arg0: $PlayerTeam$$Type, arg1: StringJS, arg2: $ClientboundSetPlayerTeamPacket$Action$$Type): $ClientboundSetPlayerTeamPacket
public static "createRemovePacket"(arg0: $PlayerTeam$$Type): $ClientboundSetPlayerTeamPacket
public static "createAddOrModifyPacket"(arg0: $PlayerTeam$$Type, arg1: boolean): $ClientboundSetPlayerTeamPacket
public "getTeamAction"(): $ClientboundSetPlayerTeamPacket$Action
public "getPlayerAction"(): $ClientboundSetPlayerTeamPacket$Action
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "name"(): StringJS
get "parameters"(): $Optional<($ClientboundSetPlayerTeamPacket$Parameters)>
get "players"(): $Collection<(StringJS)>
get "teamAction"(): $ClientboundSetPlayerTeamPacket$Action
get "playerAction"(): $ClientboundSetPlayerTeamPacket$Action
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundSetPlayerTeamPacket$$Type = ($ClientboundSetPlayerTeamPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundSetPlayerTeamPacket$$Original = $ClientboundSetPlayerTeamPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundPlaceGhostRecipePacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundPlaceGhostRecipePacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundPlaceGhostRecipePacket)>

constructor(arg0: integer, arg1: $RecipeHolder$$Type<(never)>)

public "type"(): $PacketType<($ClientboundPlaceGhostRecipePacket)>
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getRecipe"(): $ResourceLocation
public "getContainerId"(): integer
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "recipe"(): $ResourceLocation
get "containerId"(): integer
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundPlaceGhostRecipePacket$$Type = ($ClientboundPlaceGhostRecipePacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundPlaceGhostRecipePacket$$Original = $ClientboundPlaceGhostRecipePacket;}
declare module "net.minecraft.network.protocol.game.ClientboundUpdateMobEffectPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$Holder} from "net.minecraft.core.Holder"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"

export class $ClientboundUpdateMobEffectPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientboundUpdateMobEffectPacket)>

constructor(arg0: integer, arg1: $MobEffectInstance$$Type, arg2: boolean)

public "type"(): $PacketType<($ClientboundUpdateMobEffectPacket)>
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "getEntityId"(): integer
public "getEffectDurationTicks"(): integer
public "getEffect"(): $Holder<($MobEffect)>
public "getEffectAmplifier"(): integer
public "effectShowsIcon"(): boolean
public "isEffectAmbient"(): boolean
public "shouldBlend"(): boolean
public "isEffectVisible"(): boolean
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "entityId"(): integer
get "effectDurationTicks"(): integer
get "effect"(): $Holder<($MobEffect)>
get "effectAmplifier"(): integer
get "effectAmbient"(): boolean
get "effectVisible"(): boolean
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundUpdateMobEffectPacket$$Type = ($ClientboundUpdateMobEffectPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundUpdateMobEffectPacket$$Original = $ClientboundUpdateMobEffectPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundGameEventPacket$Type" {
import {$Int2ObjectMap} from "it.unimi.dsi.fastutil.ints.Int2ObjectMap"

export class $ClientboundGameEventPacket$Type {
static readonly "TYPES": $Int2ObjectMap<($ClientboundGameEventPacket$Type)>
readonly "id": integer

constructor(arg0: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundGameEventPacket$Type$$Type = ($ClientboundGameEventPacket$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundGameEventPacket$Type$$Original = $ClientboundGameEventPacket$Type;}
declare module "net.minecraft.network.protocol.common.ClientboundServerLinksPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ClientCommonPacketListener, $ClientCommonPacketListener$$Type} from "net.minecraft.network.protocol.common.ClientCommonPacketListener"
import {$List, $List$$Type} from "java.util.List"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerLinks$UntrustedEntry, $ServerLinks$UntrustedEntry$$Type} from "net.minecraft.server.ServerLinks$UntrustedEntry"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $ClientboundServerLinksPacket extends $Record implements $Packet$$Interface<($ClientCommonPacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($ClientboundServerLinksPacket)>

constructor(arg0: $List$$Type<($ServerLinks$UntrustedEntry$$Type)>)

public "type"(): $PacketType<($ClientboundServerLinksPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientCommonPacketListener$$Type): void
public "links"(): $List<($ServerLinks$UntrustedEntry)>
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientCommonPacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientCommonPacketListener$$Type)>): $StreamCodec<(B), ($ClientCommonPacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundServerLinksPacket$$Type = ({"links"?: $List$$Type<($ServerLinks$UntrustedEntry$$Type)>}) | ([links?: $List$$Type<($ServerLinks$UntrustedEntry$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundServerLinksPacket$$Original = $ClientboundServerLinksPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundLevelChunkWithLightPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$BitSet$$Type} from "java.util.BitSet"
import {$LevelLightEngine$$Type} from "net.minecraft.world.level.lighting.LevelLightEngine"
import {$ClientboundLightUpdatePacketData} from "net.minecraft.network.protocol.game.ClientboundLightUpdatePacketData"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$ClientboundLevelChunkPacketData} from "net.minecraft.network.protocol.game.ClientboundLevelChunkPacketData"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$LevelChunk$$Type} from "net.minecraft.world.level.chunk.LevelChunk"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"

export class $ClientboundLevelChunkWithLightPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientboundLevelChunkWithLightPacket)>

constructor(arg0: $LevelChunk$$Type, arg1: $LevelLightEngine$$Type, arg2: $BitSet$$Type, arg3: $BitSet$$Type)

public "type"(): $PacketType<($ClientboundLevelChunkWithLightPacket)>
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getX"(): integer
public "getZ"(): integer
public "getLightData"(): $ClientboundLightUpdatePacketData
public "getChunkData"(): $ClientboundLevelChunkPacketData
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "x"(): integer
get "z"(): integer
get "lightData"(): $ClientboundLightUpdatePacketData
get "chunkData"(): $ClientboundLevelChunkPacketData
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundLevelChunkWithLightPacket$$Type = ($ClientboundLevelChunkWithLightPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundLevelChunkWithLightPacket$$Original = $ClientboundLevelChunkWithLightPacket;}
declare module "net.minecraft.network.protocol.game.ServerboundPlayerAbilitiesPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Abilities$$Type} from "net.minecraft.world.entity.player.Abilities"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $ServerboundPlayerAbilitiesPacket implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundPlayerAbilitiesPacket)>

constructor(arg0: $Abilities$$Type)

public "type"(): $PacketType<($ServerboundPlayerAbilitiesPacket)>
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "isFlying"(): boolean
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "flying"(): boolean
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundPlayerAbilitiesPacket$$Type = ($ServerboundPlayerAbilitiesPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundPlayerAbilitiesPacket$$Original = $ServerboundPlayerAbilitiesPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundOpenSignEditorPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundOpenSignEditorPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundOpenSignEditorPacket)>

constructor(arg0: $BlockPos$$Type, arg1: boolean)

public "type"(): $PacketType<($ClientboundOpenSignEditorPacket)>
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getPos"(): $BlockPos
public "isFrontText"(): boolean
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "pos"(): $BlockPos
get "frontText"(): boolean
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundOpenSignEditorPacket$$Type = ($ClientboundOpenSignEditorPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundOpenSignEditorPacket$$Original = $ClientboundOpenSignEditorPacket;}
declare module "net.minecraft.network.protocol.status.ServerStatus$Players" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$Record} from "java.lang.Record"

export class $ServerStatus$Players extends $Record {
static readonly "CODEC": $Codec<($ServerStatus$Players)>

constructor(max: integer, online: integer, sample: $List$$Type<($GameProfile$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "max"(): integer
public "sample"(): $List<($GameProfile)>
public "online"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerStatus$Players$$Type = ({"max"?: integer, "online"?: integer, "sample"?: $List$$Type<($GameProfile$$Type)>}) | ([max?: integer, online?: integer, sample?: $List$$Type<($GameProfile$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerStatus$Players$$Original = $ServerStatus$Players;}
declare module "net.minecraft.network.protocol.login.ClientLoginPacketListener" {
import {$ClientboundCookieRequestPacket$$Type} from "net.minecraft.network.protocol.cookie.ClientboundCookieRequestPacket"
import {$PacketFlow} from "net.minecraft.network.protocol.PacketFlow"
import {$ClientboundGameProfilePacket$$Type} from "net.minecraft.network.protocol.login.ClientboundGameProfilePacket"
import {$CrashReport$$Type} from "net.minecraft.CrashReport"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$ClientCookiePacketListener$$Interface} from "net.minecraft.network.protocol.cookie.ClientCookiePacketListener"
import {$DisconnectionDetails, $DisconnectionDetails$$Type} from "net.minecraft.network.DisconnectionDetails"
import {$ClientboundCustomQueryPacket$$Type} from "net.minecraft.network.protocol.login.ClientboundCustomQueryPacket"
import {$ClientboundLoginDisconnectPacket$$Type} from "net.minecraft.network.protocol.login.ClientboundLoginDisconnectPacket"
import {$Exception$$Type} from "java.lang.Exception"
import {$ClientboundLoginCompressionPacket$$Type} from "net.minecraft.network.protocol.login.ClientboundLoginCompressionPacket"
import {$ClientboundHelloPacket$$Type} from "net.minecraft.network.protocol.login.ClientboundHelloPacket"
import {$ConnectionProtocol} from "net.minecraft.network.ConnectionProtocol"
import {$Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$CrashReportCategory$$Type} from "net.minecraft.CrashReportCategory"
import {$ClientboundPacketListener$$Interface} from "net.minecraft.network.ClientboundPacketListener"

export interface $ClientLoginPacketListener$$Interface extends $ClientCookiePacketListener$$Interface, $ClientboundPacketListener$$Interface {
get "acceptingMessages"(): boolean
}

export class $ClientLoginPacketListener implements $ClientLoginPacketListener$$Interface {
 "protocol"(): $ConnectionProtocol
 "handleGameProfile"(arg0: $ClientboundGameProfilePacket$$Type): void
 "handleHello"(arg0: $ClientboundHelloPacket$$Type): void
 "handleDisconnect"(arg0: $ClientboundLoginDisconnectPacket$$Type): void
 "handleCompression"(arg0: $ClientboundLoginCompressionPacket$$Type): void
 "handleCustomQuery"(arg0: $ClientboundCustomQueryPacket$$Type): void
 "handleRequestCookie"(arg0: $ClientboundCookieRequestPacket$$Type): void
 "flow"(): $PacketFlow
 "fillListenerSpecificCrashDetails"(arg0: $CrashReport$$Type, arg1: $CrashReportCategory$$Type): void
 "fillCrashReport"(arg0: $CrashReport$$Type): void
 "onDisconnect"(arg0: $DisconnectionDetails$$Type): void
 "createDisconnectionInfo"(arg0: $Component$$Type, arg1: $Throwable$$Type): $DisconnectionDetails
 "isAcceptingMessages"(): boolean
 "shouldHandleMessage"(arg0: $Packet$$Type<(never)>): boolean
 "onPacketError"(arg0: $Packet$$Type, arg1: $Exception$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientLoginPacketListener$$Type = ($ClientLoginPacketListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientLoginPacketListener$$Original = $ClientLoginPacketListener;}
declare module "net.minecraft.network.protocol.game.ClientboundSetScorePacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$NumberFormat, $NumberFormat$$Type} from "net.minecraft.network.chat.numbers.NumberFormat"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$Record} from "java.lang.Record"

export class $ClientboundSetScorePacket extends $Record implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientboundSetScorePacket)>

constructor(arg0: StringJS, arg1: StringJS, arg2: integer, arg3: ($Component$$Type)?, arg4: ($NumberFormat$$Type)?)

public "type"(): $PacketType<($ClientboundSetScorePacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "owner"(): StringJS
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "display"(): $Optional<($Component)>
public "numberFormat"(): $Optional<($NumberFormat)>
public "score"(): integer
public "objectiveName"(): StringJS
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundSetScorePacket$$Type = ({"objectiveName"?: StringJS, "display"?: ($Component$$Type)?, "score"?: integer, "numberFormat"?: ($NumberFormat$$Type)?, "owner"?: StringJS}) | ([objectiveName?: StringJS, display?: ($Component$$Type)?, score?: integer, numberFormat?: ($NumberFormat$$Type)?, owner?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundSetScorePacket$$Original = $ClientboundSetScorePacket;}
declare module "net.minecraft.network.protocol.game.ServerboundSetCarriedItemPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $ServerboundSetCarriedItemPacket implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundSetCarriedItemPacket)>

constructor(arg0: integer)

public "type"(): $PacketType<($ServerboundSetCarriedItemPacket)>
public "getSlot"(): integer
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "slot"(): integer
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundSetCarriedItemPacket$$Type = ($ServerboundSetCarriedItemPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundSetCarriedItemPacket$$Original = $ServerboundSetCarriedItemPacket;}
declare module "net.minecraft.network.protocol.PacketFlow" {
import {$Enum} from "java.lang.Enum"
import {$LogicalSide} from "net.neoforged.fml.LogicalSide"
import {$IPacketFlowExtension$$Interface} from "net.neoforged.neoforge.common.extensions.IPacketFlowExtension"

export class $PacketFlow extends $Enum<($PacketFlow)> implements $IPacketFlowExtension$$Interface {
static readonly "CLIENTBOUND": $PacketFlow
static readonly "SERVERBOUND": $PacketFlow

public static "values"(): ($PacketFlow)[]
public static "valueOf"(arg0: StringJS): $PacketFlow
public "id"(): StringJS
public "getOpposite"(): $PacketFlow
public "self"(): $PacketFlow
public "getReceptionSide"(): $LogicalSide
public "isClientbound"(): boolean
public "isServerbound"(): boolean
get "opposite"(): $PacketFlow
get "receptionSide"(): $LogicalSide
get "clientbound"(): boolean
get "serverbound"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PacketFlow$$Type = (("serverbound") | ("clientbound"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PacketFlow$$Original = $PacketFlow;}
declare module "net.minecraft.network.protocol.game.ClientboundLightUpdatePacketData" {
import {$BitSet, $BitSet$$Type} from "java.util.BitSet"
import {$LevelLightEngine$$Type} from "net.minecraft.world.level.lighting.LevelLightEngine"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$List} from "java.util.List"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"

export class $ClientboundLightUpdatePacketData {
constructor(arg0: $ChunkPos$$Type, arg1: $LevelLightEngine$$Type, arg2: $BitSet$$Type, arg3: $BitSet$$Type)
constructor(arg0: $FriendlyByteBuf$$Type, arg1: integer, arg2: integer)

public "write"(arg0: $FriendlyByteBuf$$Type): void
public "getBlockYMask"(): $BitSet
public "getBlockUpdates"(): $List<((byte)[])>
public "getEmptySkyYMask"(): $BitSet
public "getEmptyBlockYMask"(): $BitSet
public "getSkyUpdates"(): $List<((byte)[])>
public "getSkyYMask"(): $BitSet
get "blockYMask"(): $BitSet
get "blockUpdates"(): $List<((byte)[])>
get "emptySkyYMask"(): $BitSet
get "emptyBlockYMask"(): $BitSet
get "skyUpdates"(): $List<((byte)[])>
get "skyYMask"(): $BitSet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundLightUpdatePacketData$$Type = ($ClientboundLightUpdatePacketData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundLightUpdatePacketData$$Original = $ClientboundLightUpdatePacketData;}
declare module "net.minecraft.network.protocol.game.ServerboundPickItemPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $ServerboundPickItemPacket implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundPickItemPacket)>

constructor(arg0: integer)

public "type"(): $PacketType<($ServerboundPickItemPacket)>
public "getSlot"(): integer
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "slot"(): integer
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundPickItemPacket$$Type = ($ServerboundPickItemPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundPickItemPacket$$Original = $ServerboundPickItemPacket;}
declare module "net.minecraft.network.protocol.game.ServerboundConfigurationAcknowledgedPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $ServerboundConfigurationAcknowledgedPacket implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "INSTANCE": $ServerboundConfigurationAcknowledgedPacket
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($ServerboundConfigurationAcknowledgedPacket)>

public "type"(): $PacketType<($ServerboundConfigurationAcknowledgedPacket)>
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundConfigurationAcknowledgedPacket$$Type = ($ServerboundConfigurationAcknowledgedPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundConfigurationAcknowledgedPacket$$Original = $ServerboundConfigurationAcknowledgedPacket;}
declare module "net.minecraft.network.protocol.game.ServerboundPlayerCommandPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ServerboundPlayerCommandPacket$Action, $ServerboundPlayerCommandPacket$Action$$Type} from "net.minecraft.network.protocol.game.ServerboundPlayerCommandPacket$Action"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $ServerboundPlayerCommandPacket implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundPlayerCommandPacket)>

constructor(arg0: $Entity$$Type, arg1: $ServerboundPlayerCommandPacket$Action$$Type, arg2: integer)
constructor(arg0: $Entity$$Type, arg1: $ServerboundPlayerCommandPacket$Action$$Type)

public "type"(): $PacketType<($ServerboundPlayerCommandPacket)>
public "getId"(): integer
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "getData"(): integer
public "getAction"(): $ServerboundPlayerCommandPacket$Action
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "id"(): integer
get "data"(): integer
get "action"(): $ServerboundPlayerCommandPacket$Action
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundPlayerCommandPacket$$Type = ($ServerboundPlayerCommandPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundPlayerCommandPacket$$Original = $ServerboundPlayerCommandPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundLevelParticlesPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$ParticleOptions, $ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"

export class $ClientboundLevelParticlesPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientboundLevelParticlesPacket)>

constructor<T extends $ParticleOptions>(arg0: T, arg1: boolean, arg2: double, arg3: double, arg4: double, arg5: float, arg6: float, arg7: float, arg8: float, arg9: integer)

public "type"(): $PacketType<($ClientboundLevelParticlesPacket)>
public "getCount"(): integer
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getMaxSpeed"(): float
public "getX"(): double
public "getZ"(): double
public "getY"(): double
public "getXDist"(): float
public "getYDist"(): float
public "getZDist"(): float
public "getParticle"(): $ParticleOptions
public "isOverrideLimiter"(): boolean
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "count"(): integer
get "maxSpeed"(): float
get "x"(): double
get "z"(): double
get "y"(): double
get "XDist"(): float
get "YDist"(): float
get "ZDist"(): float
get "particle"(): $ParticleOptions
get "overrideLimiter"(): boolean
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundLevelParticlesPacket$$Type = ($ClientboundLevelParticlesPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundLevelParticlesPacket$$Original = $ClientboundLevelParticlesPacket;}
declare module "net.minecraft.network.protocol.game.ServerboundSetStructureBlockPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$StructureMode, $StructureMode$$Type} from "net.minecraft.world.level.block.state.properties.StructureMode"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$StructureBlockEntity$UpdateType, $StructureBlockEntity$UpdateType$$Type} from "net.minecraft.world.level.block.entity.StructureBlockEntity$UpdateType"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $ServerboundSetStructureBlockPacket implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundSetStructureBlockPacket)>

constructor(arg0: $BlockPos$$Type, arg1: $StructureBlockEntity$UpdateType$$Type, arg2: $StructureMode$$Type, arg3: StringJS, arg4: $BlockPos$$Type, arg5: $Vec3i$$Type, arg6: $Mirror$$Type, arg7: $Rotation$$Type, arg8: StringJS, arg9: boolean, arg10: boolean, arg11: boolean, arg12: float, arg13: long)

public "getName"(): StringJS
public "type"(): $PacketType<($ServerboundSetStructureBlockPacket)>
public "getSize"(): $Vec3i
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "getOffset"(): $BlockPos
public "getSeed"(): long
public "getData"(): StringJS
public "getPos"(): $BlockPos
public "getIntegrity"(): float
public "isIgnoreEntities"(): boolean
public "getMode"(): $StructureMode
public "isShowAir"(): boolean
public "getMirror"(): $Mirror
public "getUpdateType"(): $StructureBlockEntity$UpdateType
public "isShowBoundingBox"(): boolean
public "getRotation"(): $Rotation
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "name"(): StringJS
get "size"(): $Vec3i
get "offset"(): $BlockPos
get "seed"(): long
get "data"(): StringJS
get "pos"(): $BlockPos
get "integrity"(): float
get "ignoreEntities"(): boolean
get "mode"(): $StructureMode
get "showAir"(): boolean
get "mirror"(): $Mirror
get "updateType"(): $StructureBlockEntity$UpdateType
get "showBoundingBox"(): boolean
get "rotation"(): $Rotation
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundSetStructureBlockPacket$$Type = ($ServerboundSetStructureBlockPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundSetStructureBlockPacket$$Original = $ServerboundSetStructureBlockPacket;}
declare module "net.minecraft.network.protocol.game.ServerboundUseItemOnPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $ServerboundUseItemOnPacket implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundUseItemOnPacket)>

constructor(arg0: $InteractionHand$$Type, arg1: $BlockHitResult$$Type, arg2: integer)

public "type"(): $PacketType<($ServerboundUseItemOnPacket)>
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getHand"(): $InteractionHand
public "getSequence"(): integer
public "getHitResult"(): $BlockHitResult
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "hand"(): $InteractionHand
get "sequence"(): integer
get "hitResult"(): $BlockHitResult
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundUseItemOnPacket$$Type = ($ServerboundUseItemOnPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundUseItemOnPacket$$Original = $ServerboundUseItemOnPacket;}
declare module "net.minecraft.network.protocol.common.ClientboundCustomReportDetailsPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ClientCommonPacketListener, $ClientCommonPacketListener$$Type} from "net.minecraft.network.protocol.common.ClientCommonPacketListener"
import {$Map, $Map$$Type} from "java.util.Map"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $ClientboundCustomReportDetailsPacket extends $Record implements $Packet$$Interface<($ClientCommonPacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($ClientboundCustomReportDetailsPacket)>

constructor(arg0: $Map$$Type<(StringJS), (StringJS)>)

public "type"(): $PacketType<($ClientboundCustomReportDetailsPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientCommonPacketListener$$Type): void
public "details"(): $Map<(StringJS), (StringJS)>
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientCommonPacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientCommonPacketListener$$Type)>): $StreamCodec<(B), ($ClientCommonPacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundCustomReportDetailsPacket$$Type = ({"details"?: $Map$$Type<(StringJS), (StringJS)>}) | ([details?: $Map$$Type<(StringJS), (StringJS)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundCustomReportDetailsPacket$$Original = $ClientboundCustomReportDetailsPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundSetTitleTextPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$Record} from "java.lang.Record"

export class $ClientboundSetTitleTextPacket extends $Record implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientboundSetTitleTextPacket)>

constructor(arg0: $Component$$Type)

public "type"(): $PacketType<($ClientboundSetTitleTextPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "text"(): $Component
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundSetTitleTextPacket$$Type = ({"text"?: $Component$$Type}) | ([text?: $Component$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundSetTitleTextPacket$$Original = $ClientboundSetTitleTextPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundMoveEntityPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundMoveEntityPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
readonly "onGround": boolean
readonly "yRot": byte
readonly "za": short
readonly "ya": short
readonly "xRot": byte
readonly "xa": short
readonly "hasRot": boolean
readonly "entityId": integer
readonly "hasPos": boolean

constructor(arg0: integer, arg1: short, arg2: short, arg3: short, arg4: byte, arg5: byte, arg6: boolean, arg7: boolean, arg8: boolean)

public "type"(): $PacketType<($ClientboundMoveEntityPacket)>
public "toString"(): StringJS
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "getEntity"(arg0: $Level$$Type): $Entity
public "getZa"(): short
public "getYa"(): short
public "getXa"(): short
public "hasPosition"(): boolean
public "getyRot"(): byte
public "isOnGround"(): boolean
public "getxRot"(): byte
public "hasRotation"(): boolean
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundMoveEntityPacket$$Type = ($ClientboundMoveEntityPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundMoveEntityPacket$$Original = $ClientboundMoveEntityPacket;}
declare module "net.minecraft.network.protocol.game.ServerboundPlayerInputPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $ServerboundPlayerInputPacket implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundPlayerInputPacket)>

constructor(arg0: float, arg1: float, arg2: boolean, arg3: boolean)

public "type"(): $PacketType<($ServerboundPlayerInputPacket)>
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getXxa"(): float
public "getZza"(): float
public "isJumping"(): boolean
public "isShiftKeyDown"(): boolean
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "xxa"(): float
get "zza"(): float
get "jumping"(): boolean
get "shiftKeyDown"(): boolean
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundPlayerInputPacket$$Type = ($ServerboundPlayerInputPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundPlayerInputPacket$$Original = $ServerboundPlayerInputPacket;}
declare module "net.minecraft.network.protocol.game.ServerboundCommandSuggestionPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $ServerboundCommandSuggestionPacket implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundCommandSuggestionPacket)>

constructor(arg0: integer, arg1: StringJS)

public "type"(): $PacketType<($ServerboundCommandSuggestionPacket)>
public "getId"(): integer
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "getCommand"(): StringJS
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "id"(): integer
get "command"(): StringJS
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundCommandSuggestionPacket$$Type = ($ServerboundCommandSuggestionPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundCommandSuggestionPacket$$Original = $ServerboundCommandSuggestionPacket;}
declare module "net.minecraft.network.protocol.BundlerInfo$Bundler" {
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"

export interface $BundlerInfo$Bundler$$Interface {

(arg0: $Packet<(never)>): $Packet$$Type<(never)>
}

export class $BundlerInfo$Bundler implements $BundlerInfo$Bundler$$Interface {
 "addPacket"(arg0: $Packet$$Type<(never)>): $Packet<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BundlerInfo$Bundler$$Type = ((arg0: $Packet<(never)>) => $Packet$$Type<(never)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BundlerInfo$Bundler$$Original = $BundlerInfo$Bundler;}
declare module "net.minecraft.network.protocol.game.ClientboundSetDisplayObjectivePacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$Objective$$Type} from "net.minecraft.world.scores.Objective"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$DisplaySlot, $DisplaySlot$$Type} from "net.minecraft.world.scores.DisplaySlot"

export class $ClientboundSetDisplayObjectivePacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundSetDisplayObjectivePacket)>

constructor(arg0: $DisplaySlot$$Type, arg1: $Objective$$Type)

public "type"(): $PacketType<($ClientboundSetDisplayObjectivePacket)>
public "getSlot"(): $DisplaySlot
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "getObjectiveName"(): StringJS
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "slot"(): $DisplaySlot
get "objectiveName"(): StringJS
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundSetDisplayObjectivePacket$$Type = ($ClientboundSetDisplayObjectivePacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundSetDisplayObjectivePacket$$Original = $ClientboundSetDisplayObjectivePacket;}
declare module "net.minecraft.network.protocol.BundleDelimiterPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$PacketListener, $PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $BundleDelimiterPacket<T extends $PacketListener> implements $Packet$$Interface<(T)> {
constructor()

public "type"(): $PacketType<($BundleDelimiterPacket<(T)>)>
public "handle"(arg0: T): void
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), (T)>, arg1: $StreamDecoder$$Type<(B), (T)>): $StreamCodec<(B), (T)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BundleDelimiterPacket$$Type<T> = ($BundleDelimiterPacket<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BundleDelimiterPacket$$Original<T> = $BundleDelimiterPacket<(T)>;}
declare module "net.minecraft.network.protocol.game.ClientboundTickingStepPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$TickRateManager$$Type} from "net.minecraft.world.TickRateManager"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$Record} from "java.lang.Record"

export class $ClientboundTickingStepPacket extends $Record implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundTickingStepPacket)>

constructor(arg0: integer)

public "type"(): $PacketType<($ClientboundTickingStepPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "from"(arg0: $TickRateManager$$Type): $ClientboundTickingStepPacket
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "tickSteps"(): integer
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundTickingStepPacket$$Type = ({"tickSteps"?: integer}) | ([tickSteps?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundTickingStepPacket$$Original = $ClientboundTickingStepPacket;}
declare module "net.minecraft.network.protocol.game.ServerboundContainerButtonClickPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $ServerboundContainerButtonClickPacket extends $Record implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundContainerButtonClickPacket)>

constructor(arg0: integer, arg1: integer)

public "type"(): $PacketType<($ServerboundContainerButtonClickPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "buttonId"(): integer
public "containerId"(): integer
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundContainerButtonClickPacket$$Type = ({"buttonId"?: integer, "containerId"?: integer}) | ([buttonId?: integer, containerId?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundContainerButtonClickPacket$$Original = $ServerboundContainerButtonClickPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundSetObjectivePacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Optional} from "java.util.Optional"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$Component} from "net.minecraft.network.chat.Component"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$ObjectiveCriteria$RenderType} from "net.minecraft.world.scores.criteria.ObjectiveCriteria$RenderType"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$NumberFormat} from "net.minecraft.network.chat.numbers.NumberFormat"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Objective$$Type} from "net.minecraft.world.scores.Objective"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"

export class $ClientboundSetObjectivePacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "METHOD_ADD": integer
static readonly "METHOD_REMOVE": integer
static readonly "METHOD_CHANGE": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientboundSetObjectivePacket)>

constructor(arg0: $Objective$$Type, arg1: integer)

public "type"(): $PacketType<($ClientboundSetObjectivePacket)>
public "getMethod"(): integer
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getDisplayName"(): $Component
public "getNumberFormat"(): $Optional<($NumberFormat)>
public "getRenderType"(): $ObjectiveCriteria$RenderType
public "getObjectiveName"(): StringJS
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "method"(): integer
get "displayName"(): $Component
get "numberFormat"(): $Optional<($NumberFormat)>
get "renderType"(): $ObjectiveCriteria$RenderType
get "objectiveName"(): StringJS
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundSetObjectivePacket$$Type = ($ClientboundSetObjectivePacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundSetObjectivePacket$$Original = $ClientboundSetObjectivePacket;}
declare module "net.minecraft.network.protocol.common.ServerCommonPacketListener" {
import {$ServerboundClientInformationPacket$$Type} from "net.minecraft.network.protocol.common.ServerboundClientInformationPacket"
import {$ServerboundPongPacket$$Type} from "net.minecraft.network.protocol.common.ServerboundPongPacket"
import {$CustomPacketPayload$Type$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$ServerboundCookieResponsePacket$$Type} from "net.minecraft.network.protocol.cookie.ServerboundCookieResponsePacket"
import {$Exception$$Type} from "java.lang.Exception"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ServerCookiePacketListener$$Interface} from "net.minecraft.network.protocol.cookie.ServerCookiePacketListener"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$ReentrantBlockableEventLoop} from "net.minecraft.util.thread.ReentrantBlockableEventLoop"
import {$PacketFlow} from "net.minecraft.network.protocol.PacketFlow"
import {$CrashReport$$Type} from "net.minecraft.CrashReport"
import {$PacketSendListener$$Type} from "net.minecraft.network.PacketSendListener"
import {$CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$ServerboundKeepAlivePacket$$Type} from "net.minecraft.network.protocol.common.ServerboundKeepAlivePacket"
import {$DisconnectionDetails, $DisconnectionDetails$$Type} from "net.minecraft.network.DisconnectionDetails"
import {$ServerboundCustomPayloadPacket$$Type} from "net.minecraft.network.protocol.common.ServerboundCustomPayloadPacket"
import {$ConnectionType} from "net.neoforged.neoforge.network.connection.ConnectionType"
import {$IServerCommonPacketListenerExtension$$Interface} from "net.neoforged.neoforge.common.extensions.IServerCommonPacketListenerExtension"
import {$ServerPacketListener$$Interface} from "net.minecraft.network.protocol.game.ServerPacketListener"
import {$ConnectionProtocol} from "net.minecraft.network.ConnectionProtocol"
import {$Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$Connection} from "net.minecraft.network.Connection"
import {$ServerboundResourcePackPacket$$Type} from "net.minecraft.network.protocol.common.ServerboundResourcePackPacket"
import {$CrashReportCategory$$Type} from "net.minecraft.CrashReportCategory"

export interface $ServerCommonPacketListener$$Interface extends $ServerCookiePacketListener$$Interface, $ServerPacketListener$$Interface, $IServerCommonPacketListenerExtension$$Interface {
get "connection"(): $Connection
get "mainThreadEventLoop"(): $ReentrantBlockableEventLoop<(never)>
get "connectionType"(): $ConnectionType
get "acceptingMessages"(): boolean
}

export class $ServerCommonPacketListener implements $ServerCommonPacketListener$$Interface {
 "handlePong"(arg0: $ServerboundPongPacket$$Type): void
 "handleCustomPayload"(arg0: $ServerboundCustomPayloadPacket$$Type): void
 "handleClientInformation"(arg0: $ServerboundClientInformationPacket$$Type): void
 "handleResourcePackResponse"(arg0: $ServerboundResourcePackPacket$$Type): void
 "handleKeepAlive"(arg0: $ServerboundKeepAlivePacket$$Type): void
 "handleCookieResponse"(arg0: $ServerboundCookieResponsePacket$$Type): void
 "onPacketError"(arg0: $Packet$$Type, arg1: $Exception$$Type): void
 "send"(arg0: $CustomPacketPayload$$Type): void
 "send"(arg0: $Packet$$Type<(never)>, arg1: $PacketSendListener$$Type): void
 "send"(arg0: $CustomPacketPayload$$Type, arg1: $PacketSendListener$$Type): void
 "flow"(): $PacketFlow
 "getConnection"(): $Connection
 "hasChannel"(arg0: $CustomPacketPayload$Type$$Type<(never)>): boolean
 "hasChannel"(arg0: $CustomPacketPayload$$Type): boolean
 "hasChannel"(arg0: $ResourceLocation$$Type): boolean
 "disconnect"(arg0: $Component$$Type): void
 "send"(arg0: $Packet$$Type<(never)>): void
 "getMainThreadEventLoop"(): $ReentrantBlockableEventLoop<(never)>
 "getConnectionType"(): $ConnectionType
 "protocol"(): $ConnectionProtocol
 "fillListenerSpecificCrashDetails"(arg0: $CrashReport$$Type, arg1: $CrashReportCategory$$Type): void
 "fillCrashReport"(arg0: $CrashReport$$Type): void
 "onDisconnect"(arg0: $DisconnectionDetails$$Type): void
 "createDisconnectionInfo"(arg0: $Component$$Type, arg1: $Throwable$$Type): $DisconnectionDetails
 "isAcceptingMessages"(): boolean
 "shouldHandleMessage"(arg0: $Packet$$Type<(never)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerCommonPacketListener$$Type = ($ServerCommonPacketListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerCommonPacketListener$$Original = $ServerCommonPacketListener;}
declare module "net.minecraft.network.protocol.ping.ClientPongPacketListener" {
import {$ClientboundPongResponsePacket$$Type} from "net.minecraft.network.protocol.ping.ClientboundPongResponsePacket"
import {$PacketFlow} from "net.minecraft.network.protocol.PacketFlow"
import {$Exception$$Type} from "java.lang.Exception"
import {$PacketListener$$Interface} from "net.minecraft.network.PacketListener"
import {$ConnectionProtocol} from "net.minecraft.network.ConnectionProtocol"
import {$CrashReport$$Type} from "net.minecraft.CrashReport"
import {$Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$CrashReportCategory$$Type} from "net.minecraft.CrashReportCategory"
import {$DisconnectionDetails, $DisconnectionDetails$$Type} from "net.minecraft.network.DisconnectionDetails"

export interface $ClientPongPacketListener$$Interface extends $PacketListener$$Interface {
get "acceptingMessages"(): boolean
}

export class $ClientPongPacketListener implements $ClientPongPacketListener$$Interface {
 "handlePongResponse"(arg0: $ClientboundPongResponsePacket$$Type): void
 "protocol"(): $ConnectionProtocol
 "fillListenerSpecificCrashDetails"(arg0: $CrashReport$$Type, arg1: $CrashReportCategory$$Type): void
 "fillCrashReport"(arg0: $CrashReport$$Type): void
 "onDisconnect"(arg0: $DisconnectionDetails$$Type): void
 "createDisconnectionInfo"(arg0: $Component$$Type, arg1: $Throwable$$Type): $DisconnectionDetails
 "isAcceptingMessages"(): boolean
 "shouldHandleMessage"(arg0: $Packet$$Type<(never)>): boolean
 "onPacketError"(arg0: $Packet$$Type, arg1: $Exception$$Type): void
 "flow"(): $PacketFlow
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientPongPacketListener$$Type = ($ClientPongPacketListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientPongPacketListener$$Original = $ClientPongPacketListener;}
declare module "net.minecraft.network.protocol.game.ServerboundPaddleBoatPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $ServerboundPaddleBoatPacket implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundPaddleBoatPacket)>

constructor(arg0: boolean, arg1: boolean)

public "type"(): $PacketType<($ServerboundPaddleBoatPacket)>
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getRight"(): boolean
public "getLeft"(): boolean
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "right"(): boolean
get "left"(): boolean
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundPaddleBoatPacket$$Type = ($ServerboundPaddleBoatPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundPaddleBoatPacket$$Original = $ServerboundPaddleBoatPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundSectionBlocksUpdatePacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$LevelChunkSection$$Type} from "net.minecraft.world.level.chunk.LevelChunkSection"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$IXaeroMinimapSMultiBlockChangePacket$$Interface} from "xaero.common.core.IXaeroMinimapSMultiBlockChangePacket"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$ShortSet$$Type} from "it.unimi.dsi.fastutil.shorts.ShortSet"
import {$IWorldMapSMultiBlockChangePacket$$Interface} from "xaero.map.core.IWorldMapSMultiBlockChangePacket"
import {$SectionPos, $SectionPos$$Type} from "net.minecraft.core.SectionPos"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ClientboundSectionBlocksUpdatePacket implements $Packet$$Interface<($ClientGamePacketListener)>, $IXaeroMinimapSMultiBlockChangePacket$$Interface, $IWorldMapSMultiBlockChangePacket$$Interface {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundSectionBlocksUpdatePacket)>

constructor(arg0: $SectionPos$$Type, arg1: $ShortSet$$Type, arg2: $LevelChunkSection$$Type)

public "type"(): $PacketType<($ClientboundSectionBlocksUpdatePacket)>
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "runUpdates"(arg0: $BiConsumer$$Type<($BlockPos), ($BlockState)>): void
public "xaero_wm_getSectionPos"(): $SectionPos
public "xaero_mm_getSectionPos"(): $SectionPos
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundSectionBlocksUpdatePacket$$Type = ($ClientboundSectionBlocksUpdatePacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundSectionBlocksUpdatePacket$$Original = $ClientboundSectionBlocksUpdatePacket;}
declare module "net.minecraft.network.protocol.game.ClientboundContainerClosePacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundContainerClosePacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundContainerClosePacket)>

constructor(arg0: integer)

public "type"(): $PacketType<($ClientboundContainerClosePacket)>
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "getContainerId"(): integer
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "containerId"(): integer
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundContainerClosePacket$$Type = ($ClientboundContainerClosePacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundContainerClosePacket$$Original = $ClientboundContainerClosePacket;}
declare module "net.minecraft.network.protocol.game.ClientboundProjectilePowerPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundProjectilePowerPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundProjectilePowerPacket)>

constructor(arg0: integer, arg1: double)

public "type"(): $PacketType<($ClientboundProjectilePowerPacket)>
public "getId"(): integer
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "getAccelerationPower"(): double
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "id"(): integer
get "accelerationPower"(): double
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundProjectilePowerPacket$$Type = ($ClientboundProjectilePowerPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundProjectilePowerPacket$$Original = $ClientboundProjectilePowerPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundAddExperienceOrbPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$ExperienceOrb$$Type} from "net.minecraft.world.entity.ExperienceOrb"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$ServerEntity$$Type} from "net.minecraft.server.level.ServerEntity"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundAddExperienceOrbPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundAddExperienceOrbPacket)>

constructor(arg0: $ExperienceOrb$$Type, arg1: $ServerEntity$$Type)

public "type"(): $PacketType<($ClientboundAddExperienceOrbPacket)>
public "getValue"(): integer
public "getId"(): integer
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getX"(): double
public "getZ"(): double
public "getY"(): double
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "value"(): integer
get "id"(): integer
get "x"(): double
get "z"(): double
get "y"(): double
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundAddExperienceOrbPacket$$Type = ($ClientboundAddExperienceOrbPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundAddExperienceOrbPacket$$Original = $ClientboundAddExperienceOrbPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket$EntryBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ClientboundPlayerInfoUpdatePacket$EntryBuilder {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundPlayerInfoUpdatePacket$EntryBuilder$$Type = ($ClientboundPlayerInfoUpdatePacket$EntryBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundPlayerInfoUpdatePacket$EntryBuilder$$Original = $ClientboundPlayerInfoUpdatePacket$EntryBuilder;}
declare module "net.minecraft.network.protocol.game.ClientboundBlockUpdatePacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ClientboundBlockUpdatePacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientboundBlockUpdatePacket)>

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)
constructor(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type)

public "type"(): $PacketType<($ClientboundBlockUpdatePacket)>
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getPos"(): $BlockPos
public "getBlockState"(): $BlockState
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "pos"(): $BlockPos
get "blockState"(): $BlockState
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundBlockUpdatePacket$$Type = ($ClientboundBlockUpdatePacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundBlockUpdatePacket$$Original = $ClientboundBlockUpdatePacket;}
declare module "net.minecraft.network.protocol.game.ServerboundSetJigsawBlockPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$JigsawBlockEntity$JointType, $JigsawBlockEntity$JointType$$Type} from "net.minecraft.world.level.block.entity.JigsawBlockEntity$JointType"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $ServerboundSetJigsawBlockPacket implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundSetJigsawBlockPacket)>

constructor(arg0: $BlockPos$$Type, arg1: $ResourceLocation$$Type, arg2: $ResourceLocation$$Type, arg3: $ResourceLocation$$Type, arg4: StringJS, arg5: $JigsawBlockEntity$JointType$$Type, arg6: integer, arg7: integer)

public "getName"(): $ResourceLocation
public "type"(): $PacketType<($ServerboundSetJigsawBlockPacket)>
public "getPool"(): $ResourceLocation
public "getTarget"(): $ResourceLocation
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "getPos"(): $BlockPos
public "getFinalState"(): StringJS
public "getJoint"(): $JigsawBlockEntity$JointType
public "getSelectionPriority"(): integer
public "getPlacementPriority"(): integer
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "name"(): $ResourceLocation
get "pool"(): $ResourceLocation
get "target"(): $ResourceLocation
get "pos"(): $BlockPos
get "finalState"(): StringJS
get "joint"(): $JigsawBlockEntity$JointType
get "selectionPriority"(): integer
get "placementPriority"(): integer
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundSetJigsawBlockPacket$$Type = ($ServerboundSetJigsawBlockPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundSetJigsawBlockPacket$$Original = $ServerboundSetJigsawBlockPacket;}
declare module "net.minecraft.network.protocol.common.custom.CustomPacketPayload" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$PacketFlow$$Type} from "net.minecraft.network.protocol.PacketFlow"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$List$$Type} from "java.util.List"
import {$CustomPacketPayload$Type, $CustomPacketPayload$Type$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ServerboundCustomPayloadPacket} from "net.minecraft.network.protocol.common.ServerboundCustomPayloadPacket"
import {$ClientboundCustomPayloadPacket} from "net.minecraft.network.protocol.common.ClientboundCustomPayloadPacket"
import {$ConnectionProtocol$$Type} from "net.minecraft.network.ConnectionProtocol"
import {$CustomPacketPayload$TypeAndCodec$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$TypeAndCodec"
import {$CustomPacketPayload$FallbackProvider$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$FallbackProvider"

export interface $CustomPacketPayload$$Interface {

(): $CustomPacketPayload$Type$$Type<($CustomPacketPayload$$Type)>
}

export class $CustomPacketPayload implements $CustomPacketPayload$$Interface {
 "type"(): $CustomPacketPayload$Type<($CustomPacketPayload)>
 "toVanillaServerbound"(): $ServerboundCustomPayloadPacket
 "toVanillaClientbound"(): $ClientboundCustomPayloadPacket
static "codec"<B extends $FriendlyByteBuf>(arg0: $CustomPacketPayload$FallbackProvider$$Type<(B)>, arg1: $List$$Type<($CustomPacketPayload$TypeAndCodec$$Type<(B), (never)>)>, arg2: $ConnectionProtocol$$Type, arg3: $PacketFlow$$Type): $StreamCodec<(B), ($CustomPacketPayload)>
static "codec"<B extends $ByteBuf, T extends $CustomPacketPayload>(arg0: $StreamMemberEncoder$$Type<(B), (T)>, arg1: $StreamDecoder$$Type<(B), (T)>): $StreamCodec<(B), (T)>
static "createType"<T extends $CustomPacketPayload>(arg0: StringJS): $CustomPacketPayload$Type<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomPacketPayload$$Type = (() => $CustomPacketPayload$Type$$Type<($CustomPacketPayload$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomPacketPayload$$Original = $CustomPacketPayload;}
declare module "net.minecraft.network.protocol.game.ClientboundRemoveEntitiesPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$IntList, $IntList$$Type} from "it.unimi.dsi.fastutil.ints.IntList"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundRemoveEntitiesPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundRemoveEntitiesPacket)>

constructor(...arg0: (integer)[])
constructor(arg0: $IntList$$Type)

public "type"(): $PacketType<($ClientboundRemoveEntitiesPacket)>
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getEntityIds"(): $IntList
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "entityIds"(): $IntList
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundRemoveEntitiesPacket$$Type = ($ClientboundRemoveEntitiesPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundRemoveEntitiesPacket$$Original = $ClientboundRemoveEntitiesPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundDamageEventPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$DamageType, $DamageType$$Type} from "net.minecraft.world.damagesource.DamageType"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Record} from "java.lang.Record"

export class $ClientboundDamageEventPacket extends $Record implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientboundDamageEventPacket)>

constructor(arg0: integer, arg1: $Holder$$Type<($DamageType)>, arg2: integer, arg3: integer, arg4: ($Vec3$$Type)?)
constructor(arg0: $Entity$$Type, arg1: $DamageSource$$Type)

public "type"(): $PacketType<($ClientboundDamageEventPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "sourceType"(): $Holder<($DamageType)>
public "getSource"(arg0: $Level$$Type): $DamageSource
public "entityId"(): integer
public "sourcePosition"(): $Optional<($Vec3)>
public "sourceCauseId"(): integer
public "sourceDirectId"(): integer
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundDamageEventPacket$$Type = ({"sourceType"?: $Holder$$Type<($DamageType)>, "sourceCauseId"?: integer, "sourceDirectId"?: integer, "entityId"?: integer, "sourcePosition"?: ($Vec3$$Type)?}) | ([sourceType?: $Holder$$Type<($DamageType)>, sourceCauseId?: integer, sourceDirectId?: integer, entityId?: integer, sourcePosition?: ($Vec3$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundDamageEventPacket$$Original = $ClientboundDamageEventPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundSetChunkCacheCenterPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundSetChunkCacheCenterPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundSetChunkCacheCenterPacket)>

constructor(arg0: integer, arg1: integer)

public "type"(): $PacketType<($ClientboundSetChunkCacheCenterPacket)>
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getX"(): integer
public "getZ"(): integer
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "x"(): integer
get "z"(): integer
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundSetChunkCacheCenterPacket$$Type = ($ClientboundSetChunkCacheCenterPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundSetChunkCacheCenterPacket$$Original = $ClientboundSetChunkCacheCenterPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundCustomChatCompletionsPacket$Action" {
import {$Enum} from "java.lang.Enum"

export class $ClientboundCustomChatCompletionsPacket$Action extends $Enum<($ClientboundCustomChatCompletionsPacket$Action)> {
static readonly "ADD": $ClientboundCustomChatCompletionsPacket$Action
static readonly "SET": $ClientboundCustomChatCompletionsPacket$Action
static readonly "REMOVE": $ClientboundCustomChatCompletionsPacket$Action

public static "values"(): ($ClientboundCustomChatCompletionsPacket$Action)[]
public static "valueOf"(arg0: StringJS): $ClientboundCustomChatCompletionsPacket$Action
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundCustomChatCompletionsPacket$Action$$Type = (("add") | ("remove") | ("set"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundCustomChatCompletionsPacket$Action$$Original = $ClientboundCustomChatCompletionsPacket$Action;}
declare module "net.minecraft.network.protocol.game.ClientboundContainerSetSlotPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundContainerSetSlotPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "CARRIED_ITEM": integer
static readonly "PLAYER_INVENTORY": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientboundContainerSetSlotPacket)>

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: $ItemStack$$Type)

public "type"(): $PacketType<($ClientboundContainerSetSlotPacket)>
public "getSlot"(): integer
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getItem"(): $ItemStack
public "getStateId"(): integer
public "getContainerId"(): integer
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "slot"(): integer
get "item"(): $ItemStack
get "stateId"(): integer
get "containerId"(): integer
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundContainerSetSlotPacket$$Type = ($ClientboundContainerSetSlotPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundContainerSetSlotPacket$$Original = $ClientboundContainerSetSlotPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundBossEventPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$UUID$$Type} from "java.util.UUID"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$BossEvent$$Type} from "net.minecraft.world.BossEvent"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ClientboundBossEventPacket$Handler$$Type} from "net.minecraft.network.protocol.game.ClientboundBossEventPacket$Handler"
import {$ClientboundBossEventPacket$Operation} from "net.minecraft.network.protocol.game.ClientboundBossEventPacket$Operation"

export class $ClientboundBossEventPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "REMOVE_OPERATION": $ClientboundBossEventPacket$Operation
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientboundBossEventPacket)>

public "type"(): $PacketType<($ClientboundBossEventPacket)>
public "dispatch"(arg0: $ClientboundBossEventPacket$Handler$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public static "createUpdateStylePacket"(arg0: $BossEvent$$Type): $ClientboundBossEventPacket
public static "createUpdateProgressPacket"(arg0: $BossEvent$$Type): $ClientboundBossEventPacket
public static "createUpdateNamePacket"(arg0: $BossEvent$$Type): $ClientboundBossEventPacket
public static "createRemovePacket"(arg0: $UUID$$Type): $ClientboundBossEventPacket
public static "createUpdatePropertiesPacket"(arg0: $BossEvent$$Type): $ClientboundBossEventPacket
public static "encodeProperties"(arg0: boolean, arg1: boolean, arg2: boolean): integer
public static "createAddPacket"(arg0: $BossEvent$$Type): $ClientboundBossEventPacket
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundBossEventPacket$$Type = ($ClientboundBossEventPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundBossEventPacket$$Original = $ClientboundBossEventPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundSetPlayerTeamPacket$Parameters" {
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$PlayerTeam$$Type} from "net.minecraft.world.scores.PlayerTeam"
import {$Component} from "net.minecraft.network.chat.Component"
import {$ChatFormatting} from "net.minecraft.ChatFormatting"

export class $ClientboundSetPlayerTeamPacket$Parameters {
constructor(arg0: $PlayerTeam$$Type)
constructor(arg0: $RegistryFriendlyByteBuf$$Type)

public "write"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "getDisplayName"(): $Component
public "getOptions"(): integer
public "getColor"(): $ChatFormatting
public "getNametagVisibility"(): StringJS
public "getPlayerPrefix"(): $Component
public "getPlayerSuffix"(): $Component
public "getCollisionRule"(): StringJS
get "displayName"(): $Component
get "options"(): integer
get "color"(): $ChatFormatting
get "nametagVisibility"(): StringJS
get "playerPrefix"(): $Component
get "playerSuffix"(): $Component
get "collisionRule"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundSetPlayerTeamPacket$Parameters$$Type = ($ClientboundSetPlayerTeamPacket$Parameters);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundSetPlayerTeamPacket$Parameters$$Original = $ClientboundSetPlayerTeamPacket$Parameters;}
declare module "net.minecraft.network.protocol.game.ClientboundPlayerLookAtPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$EntityAnchorArgument$Anchor, $EntityAnchorArgument$Anchor$$Type} from "net.minecraft.commands.arguments.EntityAnchorArgument$Anchor"

export class $ClientboundPlayerLookAtPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundPlayerLookAtPacket)>

constructor(arg0: $EntityAnchorArgument$Anchor$$Type, arg1: $Entity$$Type, arg2: $EntityAnchorArgument$Anchor$$Type)
constructor(arg0: $EntityAnchorArgument$Anchor$$Type, arg1: double, arg2: double, arg3: double)

public "getPosition"(arg0: $Level$$Type): $Vec3
public "type"(): $PacketType<($ClientboundPlayerLookAtPacket)>
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "getFromAnchor"(): $EntityAnchorArgument$Anchor
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "fromAnchor"(): $EntityAnchorArgument$Anchor
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundPlayerLookAtPacket$$Type = ($ClientboundPlayerLookAtPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundPlayerLookAtPacket$$Original = $ClientboundPlayerLookAtPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundCustomChatCompletionsPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$ClientboundCustomChatCompletionsPacket$Action, $ClientboundCustomChatCompletionsPacket$Action$$Type} from "net.minecraft.network.protocol.game.ClientboundCustomChatCompletionsPacket$Action"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$Record} from "java.lang.Record"

export class $ClientboundCustomChatCompletionsPacket extends $Record implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundCustomChatCompletionsPacket)>

constructor(arg0: $ClientboundCustomChatCompletionsPacket$Action$$Type, arg1: $List$$Type<(StringJS)>)

public "type"(): $PacketType<($ClientboundCustomChatCompletionsPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "action"(): $ClientboundCustomChatCompletionsPacket$Action
public "entries"(): $List<(StringJS)>
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundCustomChatCompletionsPacket$$Type = ({"entries"?: $List$$Type<(StringJS)>, "action"?: $ClientboundCustomChatCompletionsPacket$Action$$Type}) | ([entries?: $List$$Type<(StringJS)>, action?: $ClientboundCustomChatCompletionsPacket$Action$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundCustomChatCompletionsPacket$$Original = $ClientboundCustomChatCompletionsPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundBossEventPacket$Operation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ClientboundBossEventPacket$Operation$$Interface {
}

export class $ClientboundBossEventPacket$Operation implements $ClientboundBossEventPacket$Operation$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundBossEventPacket$Operation$$Type = ($ClientboundBossEventPacket$Operation);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundBossEventPacket$Operation$$Original = $ClientboundBossEventPacket$Operation;}
declare module "net.minecraft.network.protocol.game.ServerboundJigsawGeneratePacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $ServerboundJigsawGeneratePacket implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundJigsawGeneratePacket)>

constructor(arg0: $BlockPos$$Type, arg1: integer, arg2: boolean)

public "type"(): $PacketType<($ServerboundJigsawGeneratePacket)>
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "levels"(): integer
public "getPos"(): $BlockPos
public "keepJigsaws"(): boolean
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "pos"(): $BlockPos
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundJigsawGeneratePacket$$Type = ($ServerboundJigsawGeneratePacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundJigsawGeneratePacket$$Original = $ServerboundJigsawGeneratePacket;}
declare module "net.minecraft.network.protocol.game.ClientboundPlayerChatPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$MessageSignature, $MessageSignature$$Type} from "net.minecraft.network.chat.MessageSignature"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$FilterMask, $FilterMask$$Type} from "net.minecraft.network.chat.FilterMask"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$SignedMessageBody$Packed, $SignedMessageBody$Packed$$Type} from "net.minecraft.network.chat.SignedMessageBody$Packed"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$Record} from "java.lang.Record"
import {$ChatType$Bound, $ChatType$Bound$$Type} from "net.minecraft.network.chat.ChatType$Bound"

export class $ClientboundPlayerChatPacket extends $Record implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientboundPlayerChatPacket)>

constructor(arg0: $UUID$$Type, arg1: integer, arg2: $MessageSignature$$Type, arg3: $SignedMessageBody$Packed$$Type, arg4: $Component$$Type, arg5: $FilterMask$$Type, arg6: $ChatType$Bound$$Type)

public "signature"(): $MessageSignature
public "index"(): integer
public "type"(): $PacketType<($ClientboundPlayerChatPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "body"(): $SignedMessageBody$Packed
public "sender"(): $UUID
public "isSkippable"(): boolean
public "filterMask"(): $FilterMask
public "chatType"(): $ChatType$Bound
public "unsignedContent"(): $Component
public "isTerminal"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "skippable"(): boolean
get "terminal"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundPlayerChatPacket$$Type = ({"body"?: $SignedMessageBody$Packed$$Type, "sender"?: $UUID$$Type, "filterMask"?: $FilterMask$$Type, "index"?: integer, "unsignedContent"?: $Component$$Type, "chatType"?: $ChatType$Bound$$Type, "signature"?: $MessageSignature$$Type}) | ([body?: $SignedMessageBody$Packed$$Type, sender?: $UUID$$Type, filterMask?: $FilterMask$$Type, index?: integer, unsignedContent?: $Component$$Type, chatType?: $ChatType$Bound$$Type, signature?: $MessageSignature$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundPlayerChatPacket$$Original = $ClientboundPlayerChatPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundDisguisedChatPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ChatType$Bound, $ChatType$Bound$$Type} from "net.minecraft.network.chat.ChatType$Bound"
import {$Record} from "java.lang.Record"

export class $ClientboundDisguisedChatPacket extends $Record implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientboundDisguisedChatPacket)>

constructor(arg0: $Component$$Type, arg1: $ChatType$Bound$$Type)

public "type"(): $PacketType<($ClientboundDisguisedChatPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "message"(): $Component
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "isSkippable"(): boolean
public "chatType"(): $ChatType$Bound
public "isTerminal"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "skippable"(): boolean
get "terminal"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundDisguisedChatPacket$$Type = ({"message"?: $Component$$Type, "chatType"?: $ChatType$Bound$$Type}) | ([message?: $Component$$Type, chatType?: $ChatType$Bound$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundDisguisedChatPacket$$Original = $ClientboundDisguisedChatPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundBlockChangedAckPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$Record} from "java.lang.Record"

export class $ClientboundBlockChangedAckPacket extends $Record implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundBlockChangedAckPacket)>

constructor(arg0: integer)

public "type"(): $PacketType<($ClientboundBlockChangedAckPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "sequence"(): integer
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundBlockChangedAckPacket$$Type = ({"sequence"?: integer}) | ([sequence?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundBlockChangedAckPacket$$Original = $ClientboundBlockChangedAckPacket;}
declare module "net.minecraft.network.protocol.game.ServerboundInteractPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ServerboundInteractPacket$Handler$$Type} from "net.minecraft.network.protocol.game.ServerboundInteractPacket$Handler"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$ServerboundInteractPacket$Action} from "net.minecraft.network.protocol.game.ServerboundInteractPacket$Action"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $ServerboundInteractPacket implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundInteractPacket)>
static readonly "ATTACK_ACTION": $ServerboundInteractPacket$Action

public "type"(): $PacketType<($ServerboundInteractPacket)>
public "dispatch"(arg0: $ServerboundInteractPacket$Handler$$Type): void
public "getTarget"(arg0: $ServerLevel$$Type): $Entity
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public static "createAttackPacket"(arg0: $Entity$$Type, arg1: boolean): $ServerboundInteractPacket
public "isUsingSecondaryAction"(): boolean
public static "createInteractionPacket"(arg0: $Entity$$Type, arg1: boolean, arg2: $InteractionHand$$Type, arg3: $Vec3$$Type): $ServerboundInteractPacket
public static "createInteractionPacket"(arg0: $Entity$$Type, arg1: boolean, arg2: $InteractionHand$$Type): $ServerboundInteractPacket
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "usingSecondaryAction"(): boolean
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundInteractPacket$$Type = ($ServerboundInteractPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundInteractPacket$$Original = $ServerboundInteractPacket;}
declare module "net.minecraft.network.protocol.game.ServerboundChatSessionUpdatePacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$RemoteChatSession$Data, $RemoteChatSession$Data$$Type} from "net.minecraft.network.chat.RemoteChatSession$Data"
import {$Record} from "java.lang.Record"

export class $ServerboundChatSessionUpdatePacket extends $Record implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundChatSessionUpdatePacket)>

constructor(arg0: $RemoteChatSession$Data$$Type)

public "type"(): $PacketType<($ServerboundChatSessionUpdatePacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "chatSession"(): $RemoteChatSession$Data
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundChatSessionUpdatePacket$$Type = ({"chatSession"?: $RemoteChatSession$Data$$Type}) | ([chatSession?: $RemoteChatSession$Data$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundChatSessionUpdatePacket$$Original = $ServerboundChatSessionUpdatePacket;}
declare module "net.minecraft.network.protocol.game.ClientboundTagQueryPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundTagQueryPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundTagQueryPacket)>

constructor(arg0: integer, arg1: $CompoundTag$$Type)

public "type"(): $PacketType<($ClientboundTagQueryPacket)>
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getTag"(): $CompoundTag
public "isSkippable"(): boolean
public "getTransactionId"(): integer
public "isTerminal"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "tag"(): $CompoundTag
get "skippable"(): boolean
get "transactionId"(): integer
get "terminal"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundTagQueryPacket$$Type = ($ClientboundTagQueryPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundTagQueryPacket$$Original = $ClientboundTagQueryPacket;}
declare module "net.minecraft.network.protocol.status.ServerStatus$Version" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$Record} from "java.lang.Record"

export class $ServerStatus$Version extends $Record {
static readonly "CODEC": $Codec<($ServerStatus$Version)>

constructor(name: StringJS, protocol: integer)

public "name"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "current"(): $ServerStatus$Version
public "protocol"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerStatus$Version$$Type = ({"protocol"?: integer, "name"?: StringJS}) | ([protocol?: integer, name?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerStatus$Version$$Original = $ServerStatus$Version;}
declare module "net.minecraft.network.protocol.common.ServerboundPongPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ServerCommonPacketListener, $ServerCommonPacketListener$$Type} from "net.minecraft.network.protocol.common.ServerCommonPacketListener"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $ServerboundPongPacket implements $Packet$$Interface<($ServerCommonPacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundPongPacket)>

constructor(arg0: integer)

public "type"(): $PacketType<($ServerboundPongPacket)>
public "getId"(): integer
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ServerCommonPacketListener$$Type): void
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerCommonPacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerCommonPacketListener$$Type)>): $StreamCodec<(B), ($ServerCommonPacketListener)>
get "id"(): integer
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundPongPacket$$Type = ($ServerboundPongPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundPongPacket$$Original = $ServerboundPongPacket;}
declare module "net.minecraft.network.protocol.login.ClientboundGameProfilePacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$ClientLoginPacketListener, $ClientLoginPacketListener$$Type} from "net.minecraft.network.protocol.login.ClientLoginPacketListener"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $ClientboundGameProfilePacket extends $Record implements $Packet$$Interface<($ClientLoginPacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($ClientboundGameProfilePacket)>

constructor(arg0: $GameProfile$$Type, arg1: boolean)

public "type"(): $PacketType<($ClientboundGameProfilePacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "handle"(arg0: $ClientLoginPacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "gameProfile"(): $GameProfile
public "isTerminal"(): boolean
/**
 * 
 * @deprecated
 */
public "strictErrorHandling"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientLoginPacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientLoginPacketListener$$Type)>): $StreamCodec<(B), ($ClientLoginPacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundGameProfilePacket$$Type = ({"strictErrorHandling"?: boolean, "gameProfile"?: $GameProfile$$Type}) | ([strictErrorHandling?: boolean, gameProfile?: $GameProfile$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundGameProfilePacket$$Original = $ClientboundGameProfilePacket;}
declare module "net.minecraft.network.protocol.game.ClientboundSetCameraPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundSetCameraPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundSetCameraPacket)>

constructor(arg0: $Entity$$Type)

public "type"(): $PacketType<($ClientboundSetCameraPacket)>
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "getEntity"(arg0: $Level$$Type): $Entity
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundSetCameraPacket$$Type = ($ClientboundSetCameraPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundSetCameraPacket$$Original = $ClientboundSetCameraPacket;}
declare module "net.minecraft.network.protocol.status.ServerStatus" {
import {$ServerStatus$Players, $ServerStatus$Players$$Type} from "net.minecraft.network.protocol.status.ServerStatus$Players"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ServerStatus$Favicon, $ServerStatus$Favicon$$Type} from "net.minecraft.network.protocol.status.ServerStatus$Favicon"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ServerStatus$Version, $ServerStatus$Version$$Type} from "net.minecraft.network.protocol.status.ServerStatus$Version"
import {$Record} from "java.lang.Record"

export class $ServerStatus extends $Record {
static readonly "CODEC": $Codec<($ServerStatus)>

/**
 * 
 * @deprecated
 */
constructor(arg0: $Component$$Type, arg1: ($ServerStatus$Players$$Type)?, arg2: ($ServerStatus$Version$$Type)?, arg3: ($ServerStatus$Favicon$$Type)?, arg4: boolean)
constructor(description: $Component$$Type, players: ($ServerStatus$Players$$Type)?, version: ($ServerStatus$Version$$Type)?, favicon: ($ServerStatus$Favicon$$Type)?, enforcesSecureChat: boolean, isModded: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "version"(): $Optional<($ServerStatus$Version)>
public "hashCode"(): integer
public "description"(): $Component
public "isModded"(): boolean
public "players"(): $Optional<($ServerStatus$Players)>
public "favicon"(): $Optional<($ServerStatus$Favicon)>
public "enforcesSecureChat"(): boolean
get "modded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerStatus$$Type = ({"enforcesSecureChat"?: boolean, "description"?: $Component$$Type, "favicon"?: ($ServerStatus$Favicon$$Type)?, "version"?: ($ServerStatus$Version$$Type)?, "isModded"?: boolean, "players"?: ($ServerStatus$Players$$Type)?}) | ([enforcesSecureChat?: boolean, description?: $Component$$Type, favicon?: ($ServerStatus$Favicon$$Type)?, version?: ($ServerStatus$Version$$Type)?, isModded?: boolean, players?: ($ServerStatus$Players$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerStatus$$Original = $ServerStatus;}
declare module "net.minecraft.network.protocol.common.ClientboundCustomPayloadPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ClientCommonPacketListener, $ClientCommonPacketListener$$Type} from "net.minecraft.network.protocol.common.ClientCommonPacketListener"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$INamedPacket$$Interface} from "com.connectivity.networkstats.INamedPacket"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$CustomPacketPayload, $CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$Record} from "java.lang.Record"

export class $ClientboundCustomPayloadPacket extends $Record implements $Packet$$Interface<($ClientCommonPacketListener)>, $INamedPacket$$Interface {
static readonly "GAMEPLAY_STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientboundCustomPayloadPacket)>
static readonly "CONFIG_STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundCustomPayloadPacket)>

constructor(payload: $CustomPacketPayload$$Type)

public "payload"(): $CustomPacketPayload
public "getName"(): StringJS
public "type"(): $PacketType<($ClientboundCustomPayloadPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "setName"(arg0: StringJS): void
public "handle"(arg0: $ClientCommonPacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientCommonPacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientCommonPacketListener$$Type)>): $StreamCodec<(B), ($ClientCommonPacketListener)>
get "name"(): StringJS
set "name"(value: StringJS)
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundCustomPayloadPacket$$Type = ({"payload"?: $CustomPacketPayload$$Type}) | ([payload?: $CustomPacketPayload$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundCustomPayloadPacket$$Original = $ClientboundCustomPayloadPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundInitializeBorderPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$WorldBorder$$Type} from "net.minecraft.world.level.border.WorldBorder"

export class $ClientboundInitializeBorderPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundInitializeBorderPacket)>

constructor(arg0: $WorldBorder$$Type)

public "type"(): $PacketType<($ClientboundInitializeBorderPacket)>
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getNewSize"(): double
public "getWarningTime"(): integer
public "getWarningBlocks"(): integer
public "getOldSize"(): double
public "getNewAbsoluteMaxSize"(): integer
public "getNewCenterZ"(): double
public "getLerpTime"(): long
public "getNewCenterX"(): double
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "newSize"(): double
get "warningTime"(): integer
get "warningBlocks"(): integer
get "oldSize"(): double
get "newAbsoluteMaxSize"(): integer
get "newCenterZ"(): double
get "lerpTime"(): long
get "newCenterX"(): double
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundInitializeBorderPacket$$Type = ($ClientboundInitializeBorderPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundInitializeBorderPacket$$Original = $ClientboundInitializeBorderPacket;}
declare module "net.minecraft.network.protocol.cookie.ClientCookiePacketListener" {
import {$ClientboundCookieRequestPacket$$Type} from "net.minecraft.network.protocol.cookie.ClientboundCookieRequestPacket"
import {$PacketFlow} from "net.minecraft.network.protocol.PacketFlow"
import {$Exception$$Type} from "java.lang.Exception"
import {$ConnectionProtocol} from "net.minecraft.network.ConnectionProtocol"
import {$CrashReport$$Type} from "net.minecraft.CrashReport"
import {$Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$CrashReportCategory$$Type} from "net.minecraft.CrashReportCategory"
import {$DisconnectionDetails, $DisconnectionDetails$$Type} from "net.minecraft.network.DisconnectionDetails"
import {$ClientboundPacketListener$$Interface} from "net.minecraft.network.ClientboundPacketListener"

export interface $ClientCookiePacketListener$$Interface extends $ClientboundPacketListener$$Interface {
get "acceptingMessages"(): boolean
}

export class $ClientCookiePacketListener implements $ClientCookiePacketListener$$Interface {
 "handleRequestCookie"(arg0: $ClientboundCookieRequestPacket$$Type): void
 "flow"(): $PacketFlow
 "protocol"(): $ConnectionProtocol
 "fillListenerSpecificCrashDetails"(arg0: $CrashReport$$Type, arg1: $CrashReportCategory$$Type): void
 "fillCrashReport"(arg0: $CrashReport$$Type): void
 "onDisconnect"(arg0: $DisconnectionDetails$$Type): void
 "createDisconnectionInfo"(arg0: $Component$$Type, arg1: $Throwable$$Type): $DisconnectionDetails
 "isAcceptingMessages"(): boolean
 "shouldHandleMessage"(arg0: $Packet$$Type<(never)>): boolean
 "onPacketError"(arg0: $Packet$$Type, arg1: $Exception$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientCookiePacketListener$$Type = ($ClientCookiePacketListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientCookiePacketListener$$Original = $ClientCookiePacketListener;}
declare module "net.minecraft.network.protocol.game.ClientboundUpdateAttributesPacket$AttributeSnapshot" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $ClientboundUpdateAttributesPacket$AttributeSnapshot extends $Record {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientboundUpdateAttributesPacket$AttributeSnapshot)>
static readonly "MODIFIER_STREAM_CODEC": $StreamCodec<($ByteBuf), ($AttributeModifier)>

constructor(arg0: $Holder$$Type<($Attribute)>, arg1: double, arg2: $Collection$$Type<($AttributeModifier$$Type)>)

public "modifiers"(): $Collection<($AttributeModifier)>
public "base"(): double
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "attribute"(): $Holder<($Attribute)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundUpdateAttributesPacket$AttributeSnapshot$$Type = ({"attribute"?: $Holder$$Type<($Attribute)>, "modifiers"?: $Collection$$Type<($AttributeModifier$$Type)>, "base"?: double}) | ([attribute?: $Holder$$Type<($Attribute)>, modifiers?: $Collection$$Type<($AttributeModifier$$Type)>, base?: double]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundUpdateAttributesPacket$AttributeSnapshot$$Original = $ClientboundUpdateAttributesPacket$AttributeSnapshot;}
declare module "net.minecraft.network.protocol.game.ServerboundDebugSampleSubscriptionPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$RemoteDebugSampleType, $RemoteDebugSampleType$$Type} from "net.minecraft.util.debugchart.RemoteDebugSampleType"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $ServerboundDebugSampleSubscriptionPacket extends $Record implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundDebugSampleSubscriptionPacket)>

constructor(arg0: $RemoteDebugSampleType$$Type)

public "type"(): $PacketType<($ServerboundDebugSampleSubscriptionPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "sampleType"(): $RemoteDebugSampleType
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundDebugSampleSubscriptionPacket$$Type = ({"sampleType"?: $RemoteDebugSampleType$$Type}) | ([sampleType?: $RemoteDebugSampleType$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundDebugSampleSubscriptionPacket$$Original = $ServerboundDebugSampleSubscriptionPacket;}
declare module "net.minecraft.network.protocol.common.ClientboundUpdateTagsPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ClientCommonPacketListener, $ClientCommonPacketListener$$Type} from "net.minecraft.network.protocol.common.ClientCommonPacketListener"
import {$Map, $Map$$Type} from "java.util.Map"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$TagNetworkSerialization$NetworkPayload, $TagNetworkSerialization$NetworkPayload$$Type} from "net.minecraft.tags.TagNetworkSerialization$NetworkPayload"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export class $ClientboundUpdateTagsPacket implements $Packet$$Interface<($ClientCommonPacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundUpdateTagsPacket)>

constructor(arg0: $Map$$Type<($ResourceKey$$Type<($Registry$$Type<(never)>)>), ($TagNetworkSerialization$NetworkPayload$$Type)>)

public "type"(): $PacketType<($ClientboundUpdateTagsPacket)>
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientCommonPacketListener$$Type): void
public "getTags"(): $Map<($ResourceKey<($Registry<(never)>)>), ($TagNetworkSerialization$NetworkPayload)>
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientCommonPacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientCommonPacketListener$$Type)>): $StreamCodec<(B), ($ClientCommonPacketListener)>
get "tags"(): $Map<($ResourceKey<($Registry<(never)>)>), ($TagNetworkSerialization$NetworkPayload)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundUpdateTagsPacket$$Type = ($ClientboundUpdateTagsPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundUpdateTagsPacket$$Original = $ClientboundUpdateTagsPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundSetPlayerTeamPacket$Action" {
import {$Enum} from "java.lang.Enum"

export class $ClientboundSetPlayerTeamPacket$Action extends $Enum<($ClientboundSetPlayerTeamPacket$Action)> {
static readonly "ADD": $ClientboundSetPlayerTeamPacket$Action
static readonly "REMOVE": $ClientboundSetPlayerTeamPacket$Action

public static "values"(): ($ClientboundSetPlayerTeamPacket$Action)[]
public static "valueOf"(arg0: StringJS): $ClientboundSetPlayerTeamPacket$Action
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundSetPlayerTeamPacket$Action$$Type = (("add") | ("remove"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundSetPlayerTeamPacket$Action$$Original = $ClientboundSetPlayerTeamPacket$Action;}
declare module "net.minecraft.network.protocol.game.ServerboundRecipeBookSeenRecipePacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $ServerboundRecipeBookSeenRecipePacket implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundRecipeBookSeenRecipePacket)>

constructor(arg0: $RecipeHolder$$Type<(never)>)

public "type"(): $PacketType<($ServerboundRecipeBookSeenRecipePacket)>
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "getRecipe"(): $ResourceLocation
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "recipe"(): $ResourceLocation
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundRecipeBookSeenRecipePacket$$Type = ($ServerboundRecipeBookSeenRecipePacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundRecipeBookSeenRecipePacket$$Original = $ServerboundRecipeBookSeenRecipePacket;}
declare module "net.minecraft.network.protocol.game.ServerboundSetCommandMinecartPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$BaseCommandBlock} from "net.minecraft.world.level.BaseCommandBlock"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $ServerboundSetCommandMinecartPacket implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundSetCommandMinecartPacket)>

constructor(arg0: integer, arg1: StringJS, arg2: boolean)

public "type"(): $PacketType<($ServerboundSetCommandMinecartPacket)>
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getCommand"(): StringJS
public "isTrackOutput"(): boolean
public "getCommandBlock"(arg0: $Level$$Type): $BaseCommandBlock
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "command"(): StringJS
get "trackOutput"(): boolean
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundSetCommandMinecartPacket$$Type = ($ServerboundSetCommandMinecartPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundSetCommandMinecartPacket$$Original = $ServerboundSetCommandMinecartPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundSetEquipmentPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$List, $List$$Type} from "java.util.List"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"

export class $ClientboundSetEquipmentPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientboundSetEquipmentPacket)>

constructor(arg0: integer, arg1: $List$$Type<($Pair$$Type<($EquipmentSlot$$Type), ($ItemStack$$Type)>)>)

public "type"(): $PacketType<($ClientboundSetEquipmentPacket)>
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getSlots"(): $List<($Pair<($EquipmentSlot), ($ItemStack)>)>
public "getEntity"(): integer
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "slots"(): $List<($Pair<($EquipmentSlot), ($ItemStack)>)>
get "entity"(): integer
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundSetEquipmentPacket$$Type = ($ClientboundSetEquipmentPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundSetEquipmentPacket$$Original = $ClientboundSetEquipmentPacket;}
declare module "net.minecraft.network.protocol.game.ServerboundPlayerActionPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ServerboundPlayerActionPacket$Action, $ServerboundPlayerActionPacket$Action$$Type} from "net.minecraft.network.protocol.game.ServerboundPlayerActionPacket$Action"

export class $ServerboundPlayerActionPacket implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundPlayerActionPacket)>

constructor(arg0: $ServerboundPlayerActionPacket$Action$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type)
constructor(arg0: $ServerboundPlayerActionPacket$Action$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: integer)

public "type"(): $PacketType<($ServerboundPlayerActionPacket)>
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getPos"(): $BlockPos
public "getSequence"(): integer
public "getAction"(): $ServerboundPlayerActionPacket$Action
public "getDirection"(): $Direction
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "pos"(): $BlockPos
get "sequence"(): integer
get "action"(): $ServerboundPlayerActionPacket$Action
get "direction"(): $Direction
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundPlayerActionPacket$$Type = ($ServerboundPlayerActionPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundPlayerActionPacket$$Original = $ServerboundPlayerActionPacket;}
declare module "net.minecraft.network.protocol.login.ClientboundCustomQueryPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$INamedPacket$$Interface} from "com.connectivity.networkstats.INamedPacket"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$ClientLoginPacketListener, $ClientLoginPacketListener$$Type} from "net.minecraft.network.protocol.login.ClientLoginPacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$CustomQueryPayload, $CustomQueryPayload$$Type} from "net.minecraft.network.protocol.login.custom.CustomQueryPayload"
import {$Record} from "java.lang.Record"

export class $ClientboundCustomQueryPacket extends $Record implements $Packet$$Interface<($ClientLoginPacketListener)>, $INamedPacket$$Interface {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundCustomQueryPacket)>

constructor(arg0: integer, arg1: $CustomQueryPayload$$Type)

public "payload"(): $CustomQueryPayload
public "getName"(): StringJS
public "type"(): $PacketType<($ClientboundCustomQueryPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "setName"(arg0: StringJS): void
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientLoginPacketListener$$Type): void
public "transactionId"(): integer
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientLoginPacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientLoginPacketListener$$Type)>): $StreamCodec<(B), ($ClientLoginPacketListener)>
get "name"(): StringJS
set "name"(value: StringJS)
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundCustomQueryPacket$$Type = ({"transactionId"?: integer, "payload"?: $CustomQueryPayload$$Type}) | ([transactionId?: integer, payload?: $CustomQueryPayload$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundCustomQueryPacket$$Original = $ClientboundCustomQueryPacket;}
declare module "net.minecraft.network.protocol.game.ServerboundAcceptTeleportationPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $ServerboundAcceptTeleportationPacket implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundAcceptTeleportationPacket)>

constructor(arg0: integer)

public "type"(): $PacketType<($ServerboundAcceptTeleportationPacket)>
public "getId"(): integer
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "id"(): integer
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundAcceptTeleportationPacket$$Type = ($ServerboundAcceptTeleportationPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundAcceptTeleportationPacket$$Original = $ServerboundAcceptTeleportationPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundGameEventPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ClientboundGameEventPacket$Type, $ClientboundGameEventPacket$Type$$Type} from "net.minecraft.network.protocol.game.ClientboundGameEventPacket$Type"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundGameEventPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "DEMO_PARAM_HINT_4": integer
static readonly "DEMO_PARAM_HINT_3": integer
static readonly "STOP_RAINING": $ClientboundGameEventPacket$Type
static readonly "DEMO_PARAM_HINT_2": integer
static readonly "START_RAINING": $ClientboundGameEventPacket$Type
static readonly "LIMITED_CRAFTING": $ClientboundGameEventPacket$Type
static readonly "PUFFER_FISH_STING": $ClientboundGameEventPacket$Type
static readonly "CHANGE_GAME_MODE": $ClientboundGameEventPacket$Type
static readonly "DEMO_PARAM_HINT_1": integer
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundGameEventPacket)>
static readonly "THUNDER_LEVEL_CHANGE": $ClientboundGameEventPacket$Type
static readonly "DEMO_PARAM_INTRO": integer
static readonly "LEVEL_CHUNKS_LOAD_START": $ClientboundGameEventPacket$Type
static readonly "NO_RESPAWN_BLOCK_AVAILABLE": $ClientboundGameEventPacket$Type
static readonly "DEMO_EVENT": $ClientboundGameEventPacket$Type
static readonly "WIN_GAME": $ClientboundGameEventPacket$Type
static readonly "IMMEDIATE_RESPAWN": $ClientboundGameEventPacket$Type
static readonly "ARROW_HIT_PLAYER": $ClientboundGameEventPacket$Type
static readonly "GUARDIAN_ELDER_EFFECT": $ClientboundGameEventPacket$Type
static readonly "RAIN_LEVEL_CHANGE": $ClientboundGameEventPacket$Type

constructor(arg0: $ClientboundGameEventPacket$Type$$Type, arg1: float)

public "type"(): $PacketType<($ClientboundGameEventPacket)>
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getEvent"(): $ClientboundGameEventPacket$Type
public "getParam"(): float
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "event"(): $ClientboundGameEventPacket$Type
get "param"(): float
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundGameEventPacket$$Type = ($ClientboundGameEventPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundGameEventPacket$$Original = $ClientboundGameEventPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundServerDataPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$Record} from "java.lang.Record"

export class $ClientboundServerDataPacket extends $Record implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($ClientboundServerDataPacket)>

constructor(arg0: $Component$$Type, arg1: ((byte)[])?)

public "type"(): $PacketType<($ClientboundServerDataPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "iconBytes"(): $Optional<((byte)[])>
public "motd"(): $Component
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundServerDataPacket$$Type = ({"iconBytes"?: ((byte)[])?, "motd"?: $Component$$Type}) | ([iconBytes?: ((byte)[])?, motd?: $Component$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundServerDataPacket$$Original = $ClientboundServerDataPacket;}
declare module "net.minecraft.network.protocol.game.ServerboundChatCommandSignedPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$LastSeenMessages$Update, $LastSeenMessages$Update$$Type} from "net.minecraft.network.chat.LastSeenMessages$Update"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$ArgumentSignatures, $ArgumentSignatures$$Type} from "net.minecraft.commands.arguments.ArgumentSignatures"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$Instant, $Instant$$Type} from "java.time.Instant"
import {$Record} from "java.lang.Record"

export class $ServerboundChatCommandSignedPacket extends $Record implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundChatCommandSignedPacket)>

constructor(arg0: StringJS, arg1: $Instant$$Type, arg2: long, arg3: $ArgumentSignatures$$Type, arg4: $LastSeenMessages$Update$$Type)

public "salt"(): long
public "type"(): $PacketType<($ServerboundChatCommandSignedPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "command"(): StringJS
public "timeStamp"(): $Instant
public "argumentSignatures"(): $ArgumentSignatures
public "lastSeenMessages"(): $LastSeenMessages$Update
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundChatCommandSignedPacket$$Type = ({"argumentSignatures"?: $ArgumentSignatures$$Type, "lastSeenMessages"?: $LastSeenMessages$Update$$Type, "timeStamp"?: $Instant$$Type, "command"?: StringJS, "salt"?: long}) | ([argumentSignatures?: $ArgumentSignatures$$Type, lastSeenMessages?: $LastSeenMessages$Update$$Type, timeStamp?: $Instant$$Type, command?: StringJS, salt?: long]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundChatCommandSignedPacket$$Original = $ServerboundChatCommandSignedPacket;}
declare module "net.minecraft.network.protocol.game.ServerboundUseItemPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $ServerboundUseItemPacket implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundUseItemPacket)>

constructor(arg0: $InteractionHand$$Type, arg1: integer, arg2: float, arg3: float)

public "type"(): $PacketType<($ServerboundUseItemPacket)>
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getXRot"(): float
public "getYRot"(): float
public "getHand"(): $InteractionHand
public "getSequence"(): integer
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "XRot"(): float
get "YRot"(): float
get "hand"(): $InteractionHand
get "sequence"(): integer
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundUseItemPacket$$Type = ($ServerboundUseItemPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundUseItemPacket$$Original = $ServerboundUseItemPacket;}
declare module "net.minecraft.network.protocol.common.ClientboundResourcePackPopPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ClientCommonPacketListener, $ClientCommonPacketListener$$Type} from "net.minecraft.network.protocol.common.ClientCommonPacketListener"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$Record} from "java.lang.Record"

export class $ClientboundResourcePackPopPacket extends $Record implements $Packet$$Interface<($ClientCommonPacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundResourcePackPopPacket)>

constructor(arg0: ($UUID$$Type)?)

public "type"(): $PacketType<($ClientboundResourcePackPopPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): $Optional<($UUID)>
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientCommonPacketListener$$Type): void
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientCommonPacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientCommonPacketListener$$Type)>): $StreamCodec<(B), ($ClientCommonPacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundResourcePackPopPacket$$Type = ({"id"?: ($UUID$$Type)?}) | ([id?: ($UUID$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundResourcePackPopPacket$$Original = $ClientboundResourcePackPopPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundSetExperiencePacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundSetExperiencePacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundSetExperiencePacket)>

constructor(arg0: float, arg1: integer, arg2: integer)

public "type"(): $PacketType<($ClientboundSetExperiencePacket)>
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getExperienceProgress"(): float
public "getExperienceLevel"(): integer
public "getTotalExperience"(): integer
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "experienceProgress"(): float
get "experienceLevel"(): integer
get "totalExperience"(): integer
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundSetExperiencePacket$$Type = ($ClientboundSetExperiencePacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundSetExperiencePacket$$Original = $ClientboundSetExperiencePacket;}
declare module "net.minecraft.network.protocol.Packet" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$PacketListener, $PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export interface $Packet$$Interface<T extends $PacketListener> {
get "terminal"(): boolean
get "skippable"(): boolean
}

export class $Packet<T extends $PacketListener> implements $Packet$$Interface {
 "type"(): $PacketType<($Packet<(T)>)>
 "handle"(arg0: T): void
 "isTerminal"(): boolean
 "isSkippable"(): boolean
static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), (T)>, arg1: $StreamDecoder$$Type<(B), (T)>): $StreamCodec<(B), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Packet$$Type<T> = ($Packet<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Packet$$Original<T> = $Packet<(T)>;}
declare module "net.minecraft.network.protocol.common.ClientboundTransferPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ClientCommonPacketListener, $ClientCommonPacketListener$$Type} from "net.minecraft.network.protocol.common.ClientCommonPacketListener"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $ClientboundTransferPacket extends $Record implements $Packet$$Interface<($ClientCommonPacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundTransferPacket)>

constructor(arg0: StringJS, arg1: integer)

public "type"(): $PacketType<($ClientboundTransferPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "host"(): StringJS
public "port"(): integer
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientCommonPacketListener$$Type): void
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientCommonPacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientCommonPacketListener$$Type)>): $StreamCodec<(B), ($ClientCommonPacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundTransferPacket$$Type = ({"port"?: integer, "host"?: StringJS}) | ([port?: integer, host?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundTransferPacket$$Original = $ClientboundTransferPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundContainerSetDataPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundContainerSetDataPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundContainerSetDataPacket)>

constructor(arg0: integer, arg1: integer, arg2: integer)

public "type"(): $PacketType<($ClientboundContainerSetDataPacket)>
public "getValue"(): integer
public "getId"(): integer
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getContainerId"(): integer
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "value"(): integer
get "id"(): integer
get "containerId"(): integer
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundContainerSetDataPacket$$Type = ($ClientboundContainerSetDataPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundContainerSetDataPacket$$Original = $ClientboundContainerSetDataPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundOpenBookPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundOpenBookPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundOpenBookPacket)>

constructor(arg0: $InteractionHand$$Type)

public "type"(): $PacketType<($ClientboundOpenBookPacket)>
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "getHand"(): $InteractionHand
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "hand"(): $InteractionHand
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundOpenBookPacket$$Type = ($ClientboundOpenBookPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundOpenBookPacket$$Original = $ClientboundOpenBookPacket;}
declare module "net.minecraft.network.protocol.BundlePacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$INamedPacket$$Interface} from "com.connectivity.networkstats.INamedPacket"
import {$PacketListener, $PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Type, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $BundlePacket<T extends $PacketListener> implements $Packet$$Interface<(T)>, $INamedPacket$$Interface {
constructor(arg0: $Iterable$$Type<($Packet$$Type<(T)>)>)

public "getName"(): StringJS
public "type"(): $PacketType<($BundlePacket<(T)>)>
public "setName"(arg0: StringJS): void
public "subPackets"(): $Iterable<($Packet<(T)>)>
public "handle"(arg0: T): void
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), (T)>, arg1: $StreamDecoder$$Type<(B), (T)>): $StreamCodec<(B), (T)>
get "name"(): StringJS
set "name"(value: StringJS)
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BundlePacket$$Type<T> = ($BundlePacket<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BundlePacket$$Original<T> = $BundlePacket<(T)>;}
declare module "net.minecraft.network.protocol.game.ClientboundDeleteChatPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$MessageSignature$Packed, $MessageSignature$Packed$$Type} from "net.minecraft.network.chat.MessageSignature$Packed"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$Record} from "java.lang.Record"

export class $ClientboundDeleteChatPacket extends $Record implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundDeleteChatPacket)>

constructor(arg0: $MessageSignature$Packed$$Type)

public "type"(): $PacketType<($ClientboundDeleteChatPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "messageSignature"(): $MessageSignature$Packed
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundDeleteChatPacket$$Type = ({"messageSignature"?: $MessageSignature$Packed$$Type}) | ([messageSignature?: $MessageSignature$Packed$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundDeleteChatPacket$$Original = $ClientboundDeleteChatPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundSetBorderCenterPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$WorldBorder$$Type} from "net.minecraft.world.level.border.WorldBorder"

export class $ClientboundSetBorderCenterPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundSetBorderCenterPacket)>

constructor(arg0: $WorldBorder$$Type)

public "type"(): $PacketType<($ClientboundSetBorderCenterPacket)>
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getNewCenterZ"(): double
public "getNewCenterX"(): double
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "newCenterZ"(): double
get "newCenterX"(): double
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundSetBorderCenterPacket$$Type = ($ClientboundSetBorderCenterPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundSetBorderCenterPacket$$Original = $ClientboundSetBorderCenterPacket;}
declare module "net.minecraft.network.protocol.game.ServerboundClientCommandPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ServerboundClientCommandPacket$Action, $ServerboundClientCommandPacket$Action$$Type} from "net.minecraft.network.protocol.game.ServerboundClientCommandPacket$Action"

export class $ServerboundClientCommandPacket implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundClientCommandPacket)>

constructor(arg0: $ServerboundClientCommandPacket$Action$$Type)

public "type"(): $PacketType<($ServerboundClientCommandPacket)>
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "getAction"(): $ServerboundClientCommandPacket$Action
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "action"(): $ServerboundClientCommandPacket$Action
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundClientCommandPacket$$Type = ($ServerboundClientCommandPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundClientCommandPacket$$Original = $ServerboundClientCommandPacket;}
declare module "net.minecraft.network.protocol.game.ServerboundPlayerActionPacket$Action" {
import {$Enum} from "java.lang.Enum"

export class $ServerboundPlayerActionPacket$Action extends $Enum<($ServerboundPlayerActionPacket$Action)> {
static readonly "STOP_DESTROY_BLOCK": $ServerboundPlayerActionPacket$Action
static readonly "DROP_ALL_ITEMS": $ServerboundPlayerActionPacket$Action
static readonly "DROP_ITEM": $ServerboundPlayerActionPacket$Action
static readonly "RELEASE_USE_ITEM": $ServerboundPlayerActionPacket$Action
static readonly "ABORT_DESTROY_BLOCK": $ServerboundPlayerActionPacket$Action
static readonly "SWAP_ITEM_WITH_OFFHAND": $ServerboundPlayerActionPacket$Action
static readonly "START_DESTROY_BLOCK": $ServerboundPlayerActionPacket$Action

public static "values"(): ($ServerboundPlayerActionPacket$Action)[]
public static "valueOf"(arg0: StringJS): $ServerboundPlayerActionPacket$Action
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundPlayerActionPacket$Action$$Type = (("start_destroy_block") | ("abort_destroy_block") | ("stop_destroy_block") | ("drop_all_items") | ("drop_item") | ("release_use_item") | ("swap_item_with_offhand"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundPlayerActionPacket$Action$$Original = $ServerboundPlayerActionPacket$Action;}
declare module "net.minecraft.network.protocol.game.ClientboundSelectAdvancementsTabPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundSelectAdvancementsTabPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundSelectAdvancementsTabPacket)>

constructor(arg0: $ResourceLocation$$Type)

public "type"(): $PacketType<($ClientboundSelectAdvancementsTabPacket)>
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "getTab"(): $ResourceLocation
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "tab"(): $ResourceLocation
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundSelectAdvancementsTabPacket$$Type = ($ClientboundSelectAdvancementsTabPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundSelectAdvancementsTabPacket$$Original = $ClientboundSelectAdvancementsTabPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundClearTitlesPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundClearTitlesPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundClearTitlesPacket)>

constructor(arg0: boolean)

public "type"(): $PacketType<($ClientboundClearTitlesPacket)>
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "shouldResetTimes"(): boolean
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundClearTitlesPacket$$Type = ($ClientboundClearTitlesPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundClearTitlesPacket$$Original = $ClientboundClearTitlesPacket;}
declare module "net.minecraft.network.protocol.game.ServerboundClientCommandPacket$Action" {
import {$Enum} from "java.lang.Enum"

export class $ServerboundClientCommandPacket$Action extends $Enum<($ServerboundClientCommandPacket$Action)> {
static readonly "REQUEST_STATS": $ServerboundClientCommandPacket$Action
static readonly "PERFORM_RESPAWN": $ServerboundClientCommandPacket$Action

public static "values"(): ($ServerboundClientCommandPacket$Action)[]
public static "valueOf"(arg0: StringJS): $ServerboundClientCommandPacket$Action
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundClientCommandPacket$Action$$Type = (("perform_respawn") | ("request_stats"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundClientCommandPacket$Action$$Original = $ServerboundClientCommandPacket$Action;}
declare module "net.minecraft.network.protocol.game.ClientboundDebugSamplePacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$RemoteDebugSampleType, $RemoteDebugSampleType$$Type} from "net.minecraft.util.debugchart.RemoteDebugSampleType"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$Record} from "java.lang.Record"

export class $ClientboundDebugSamplePacket extends $Record implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundDebugSamplePacket)>

constructor(arg0: (long)[], arg1: $RemoteDebugSampleType$$Type)

public "type"(): $PacketType<($ClientboundDebugSamplePacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "sample"(): (long)[]
public "debugSampleType"(): $RemoteDebugSampleType
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundDebugSamplePacket$$Type = ({"debugSampleType"?: $RemoteDebugSampleType$$Type, "sample"?: (long)[]}) | ([debugSampleType?: $RemoteDebugSampleType$$Type, sample?: (long)[]]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundDebugSamplePacket$$Original = $ClientboundDebugSamplePacket;}
declare module "net.minecraft.network.protocol.game.ClientboundAddEntityPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ServerEntity$$Type} from "net.minecraft.server.level.ServerEntity"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $ClientboundAddEntityPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientboundAddEntityPacket)>

constructor(arg0: integer, arg1: $UUID$$Type, arg2: double, arg3: double, arg4: double, arg5: float, arg6: float, arg7: $EntityType$$Type<(never)>, arg8: integer, arg9: $Vec3$$Type, arg10: double)
constructor(arg0: $Entity$$Type, arg1: integer, arg2: $BlockPos$$Type)
constructor(arg0: $Entity$$Type, arg1: $ServerEntity$$Type, arg2: integer)
constructor(arg0: $Entity$$Type, arg1: $ServerEntity$$Type)

public "type"(): $PacketType<($ClientboundAddEntityPacket)>
public "getId"(): integer
public "getType"(): $EntityType<(never)>
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "getData"(): integer
public "getUUID"(): $UUID
public "getXRot"(): float
public "getYRot"(): float
public "getX"(): double
public "getZ"(): double
public "getZa"(): double
public "getYa"(): double
public "getXa"(): double
public "getY"(): double
public "getYHeadRot"(): float
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "id"(): integer
get "data"(): integer
get "UUID"(): $UUID
get "XRot"(): float
get "YRot"(): float
get "x"(): double
get "z"(): double
get "za"(): double
get "ya"(): double
get "xa"(): double
get "y"(): double
get "YHeadRot"(): float
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundAddEntityPacket$$Type = ($ClientboundAddEntityPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundAddEntityPacket$$Original = $ClientboundAddEntityPacket;}
declare module "net.minecraft.network.protocol.game.ServerboundContainerClosePacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $ServerboundContainerClosePacket implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundContainerClosePacket)>

constructor(arg0: integer)

public "type"(): $PacketType<($ServerboundContainerClosePacket)>
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "getContainerId"(): integer
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "containerId"(): integer
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundContainerClosePacket$$Type = ($ServerboundContainerClosePacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundContainerClosePacket$$Original = $ServerboundContainerClosePacket;}
declare module "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $ClientboundBlockEntityDataPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientboundBlockEntityDataPacket)>

constructor(arg0: $BlockPos$$Type, arg1: $BlockEntityType$$Type<(never)>, arg2: $CompoundTag$$Type)

public "type"(): $PacketType<($ClientboundBlockEntityDataPacket)>
public "getType"(): $BlockEntityType<(never)>
public static "create"(arg0: $BlockEntity$$Type, arg1: $BiFunction$$Type<($BlockEntity), ($RegistryAccess), ($CompoundTag$$Type)>): $ClientboundBlockEntityDataPacket
public static "create"(arg0: $BlockEntity$$Type): $ClientboundBlockEntityDataPacket
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getTag"(): $CompoundTag
public "getPos"(): $BlockPos
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "tag"(): $CompoundTag
get "pos"(): $BlockPos
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundBlockEntityDataPacket$$Type = ($ClientboundBlockEntityDataPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundBlockEntityDataPacket$$Original = $ClientboundBlockEntityDataPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundCommandsPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$SharedSuggestionProvider, $SharedSuggestionProvider$$Type} from "net.minecraft.commands.SharedSuggestionProvider"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$RootCommandNode, $RootCommandNode$$Type} from "com.mojang.brigadier.tree.RootCommandNode"
import {$CommandBuildContext$$Type} from "net.minecraft.commands.CommandBuildContext"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"

export class $ClientboundCommandsPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundCommandsPacket)>

constructor(arg0: $RootCommandNode$$Type<($SharedSuggestionProvider$$Type)>)

public "type"(): $PacketType<($ClientboundCommandsPacket)>
public "getRoot"(arg0: $CommandBuildContext$$Type): $RootCommandNode<($SharedSuggestionProvider)>
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundCommandsPacket$$Type = ($ClientboundCommandsPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundCommandsPacket$$Original = $ClientboundCommandsPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundChunksBiomesPacket$ChunkBiomeData" {
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$LevelChunk$$Type} from "net.minecraft.world.level.chunk.LevelChunk"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$Record} from "java.lang.Record"

export class $ClientboundChunksBiomesPacket$ChunkBiomeData extends $Record {
constructor(arg0: $ChunkPos$$Type, arg1: (byte)[])
constructor(arg0: $FriendlyByteBuf$$Type)
constructor(arg0: $LevelChunk$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "buffer"(): (byte)[]
public "write"(arg0: $FriendlyByteBuf$$Type): void
public "pos"(): $ChunkPos
public static "extractChunkData"(arg0: $FriendlyByteBuf$$Type, arg1: $LevelChunk$$Type): void
public "getReadBuffer"(): $FriendlyByteBuf
get "readBuffer"(): $FriendlyByteBuf
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundChunksBiomesPacket$ChunkBiomeData$$Type = ({"buffer"?: (byte)[], "pos"?: $ChunkPos$$Type}) | ([buffer?: (byte)[], pos?: $ChunkPos$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundChunksBiomesPacket$ChunkBiomeData$$Original = $ClientboundChunksBiomesPacket$ChunkBiomeData;}
declare module "net.minecraft.network.protocol.ping.ClientboundPongResponsePacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ClientPongPacketListener, $ClientPongPacketListener$$Type} from "net.minecraft.network.protocol.ping.ClientPongPacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $ClientboundPongResponsePacket extends $Record implements $Packet$$Interface<($ClientPongPacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundPongResponsePacket)>

constructor(arg0: long)

public "type"(): $PacketType<($ClientboundPongResponsePacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "time"(): long
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientPongPacketListener$$Type): void
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientPongPacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientPongPacketListener$$Type)>): $StreamCodec<(B), ($ClientPongPacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundPongResponsePacket$$Type = ({"time"?: long}) | ([time?: long]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundPongResponsePacket$$Original = $ClientboundPongResponsePacket;}
declare module "net.minecraft.network.protocol.game.ClientboundLevelChunkPacketData$BlockEntityTagOutput" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $ClientboundLevelChunkPacketData$BlockEntityTagOutput$$Interface {

(arg0: $BlockPos, arg1: $BlockEntityType<(never)>, arg2: $CompoundTag): void
}

export class $ClientboundLevelChunkPacketData$BlockEntityTagOutput implements $ClientboundLevelChunkPacketData$BlockEntityTagOutput$$Interface {
 "accept"(arg0: $BlockPos$$Type, arg1: $BlockEntityType$$Type<(never)>, arg2: $CompoundTag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundLevelChunkPacketData$BlockEntityTagOutput$$Type = ((arg0: $BlockPos, arg1: $BlockEntityType<(never)>, arg2: $CompoundTag) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundLevelChunkPacketData$BlockEntityTagOutput$$Original = $ClientboundLevelChunkPacketData$BlockEntityTagOutput;}
declare module "net.minecraft.network.protocol.game.ServerboundChatCommandPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $ServerboundChatCommandPacket extends $Record implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundChatCommandPacket)>

constructor(arg0: StringJS)

public "type"(): $PacketType<($ServerboundChatCommandPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "command"(): StringJS
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundChatCommandPacket$$Type = ({"command"?: StringJS}) | ([command?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundChatCommandPacket$$Original = $ServerboundChatCommandPacket;}
declare module "net.minecraft.network.protocol.game.ServerboundRecipeBookChangeSettingsPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$RecipeBookType, $RecipeBookType$$Type} from "net.minecraft.world.inventory.RecipeBookType"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $ServerboundRecipeBookChangeSettingsPacket implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundRecipeBookChangeSettingsPacket)>

constructor(arg0: $RecipeBookType$$Type, arg1: boolean, arg2: boolean)

public "type"(): $PacketType<($ServerboundRecipeBookChangeSettingsPacket)>
public "isOpen"(): boolean
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getBookType"(): $RecipeBookType
public "isFiltering"(): boolean
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "open"(): boolean
get "bookType"(): $RecipeBookType
get "filtering"(): boolean
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundRecipeBookChangeSettingsPacket$$Type = ($ServerboundRecipeBookChangeSettingsPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundRecipeBookChangeSettingsPacket$$Original = $ServerboundRecipeBookChangeSettingsPacket;}
declare module "net.minecraft.network.protocol.game.ServerboundSwingPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $ServerboundSwingPacket implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundSwingPacket)>

constructor(arg0: $InteractionHand$$Type)

public "type"(): $PacketType<($ServerboundSwingPacket)>
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "getHand"(): $InteractionHand
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "hand"(): $InteractionHand
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundSwingPacket$$Type = ($ServerboundSwingPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundSwingPacket$$Original = $ServerboundSwingPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundPlayerCombatEndPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$CombatTracker$$Type} from "net.minecraft.world.damagesource.CombatTracker"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundPlayerCombatEndPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundPlayerCombatEndPacket)>

constructor(arg0: integer)
constructor(arg0: $CombatTracker$$Type)

public "type"(): $PacketType<($ClientboundPlayerCombatEndPacket)>
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundPlayerCombatEndPacket$$Type = ($ClientboundPlayerCombatEndPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundPlayerCombatEndPacket$$Original = $ClientboundPlayerCombatEndPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundSetEntityLinkPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundSetEntityLinkPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundSetEntityLinkPacket)>

constructor(arg0: $Entity$$Type, arg1: $Entity$$Type)

public "type"(): $PacketType<($ClientboundSetEntityLinkPacket)>
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getDestId"(): integer
public "getSourceId"(): integer
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "destId"(): integer
get "sourceId"(): integer
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundSetEntityLinkPacket$$Type = ($ClientboundSetEntityLinkPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundSetEntityLinkPacket$$Original = $ClientboundSetEntityLinkPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundSetSubtitleTextPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$Record} from "java.lang.Record"

export class $ClientboundSetSubtitleTextPacket extends $Record implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientboundSetSubtitleTextPacket)>

constructor(arg0: $Component$$Type)

public "type"(): $PacketType<($ClientboundSetSubtitleTextPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "text"(): $Component
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundSetSubtitleTextPacket$$Type = ({"text"?: $Component$$Type}) | ([text?: $Component$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundSetSubtitleTextPacket$$Original = $ClientboundSetSubtitleTextPacket;}
declare module "net.minecraft.network.protocol.status.ServerStatus$Favicon" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$Record} from "java.lang.Record"

export class $ServerStatus$Favicon extends $Record {
static readonly "CODEC": $Codec<($ServerStatus$Favicon)>

constructor(iconBytes: (byte)[])

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "iconBytes"(): (byte)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerStatus$Favicon$$Type = ({"iconBytes"?: (byte)[]}) | ([iconBytes?: (byte)[]]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerStatus$Favicon$$Original = $ServerStatus$Favicon;}
declare module "net.minecraft.network.protocol.game.ClientboundSetEntityMotionPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundSetEntityMotionPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundSetEntityMotionPacket)>

constructor(arg0: integer, arg1: $Vec3$$Type)
constructor(arg0: $Entity$$Type)

public "type"(): $PacketType<($ClientboundSetEntityMotionPacket)>
public "getId"(): integer
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getZa"(): double
public "getYa"(): double
public "getXa"(): double
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "id"(): integer
get "za"(): double
get "ya"(): double
get "xa"(): double
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundSetEntityMotionPacket$$Type = ($ClientboundSetEntityMotionPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundSetEntityMotionPacket$$Original = $ClientboundSetEntityMotionPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundSetBorderLerpSizePacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$WorldBorder$$Type} from "net.minecraft.world.level.border.WorldBorder"

export class $ClientboundSetBorderLerpSizePacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundSetBorderLerpSizePacket)>

constructor(arg0: $WorldBorder$$Type)

public "type"(): $PacketType<($ClientboundSetBorderLerpSizePacket)>
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getNewSize"(): double
public "getOldSize"(): double
public "getLerpTime"(): long
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "newSize"(): double
get "oldSize"(): double
get "lerpTime"(): long
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundSetBorderLerpSizePacket$$Type = ($ClientboundSetBorderLerpSizePacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundSetBorderLerpSizePacket$$Original = $ClientboundSetBorderLerpSizePacket;}
declare module "net.minecraft.network.protocol.game.ServerboundEditBookPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$Record} from "java.lang.Record"

export class $ServerboundEditBookPacket extends $Record implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "MAX_BYTES_PER_CHAR": integer
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundEditBookPacket)>

constructor(arg0: integer, arg1: $List$$Type<(StringJS)>, arg2: (StringJS)?)

public "slot"(): integer
public "type"(): $PacketType<($ServerboundEditBookPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "pages"(): $List<(StringJS)>
public "title"(): $Optional<(StringJS)>
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundEditBookPacket$$Type = ({"title"?: (StringJS)?, "slot"?: integer, "pages"?: $List$$Type<(StringJS)>}) | ([title?: (StringJS)?, slot?: integer, pages?: $List$$Type<(StringJS)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundEditBookPacket$$Original = $ServerboundEditBookPacket;}
declare module "net.minecraft.network.protocol.common.custom.CustomPacketPayload$TypeAndCodec" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$CustomPacketPayload$Type, $CustomPacketPayload$Type$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$CustomPacketPayload} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$Record} from "java.lang.Record"

export class $CustomPacketPayload$TypeAndCodec<B extends $FriendlyByteBuf, T extends $CustomPacketPayload> extends $Record {
constructor(type: $CustomPacketPayload$Type$$Type<(T)>, codec: $StreamCodec$$Type<(B), (T)>)

public "type"(): $CustomPacketPayload$Type<(T)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "codec"(): $StreamCodec<(B), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomPacketPayload$TypeAndCodec$$Type<B, T> = ({"type"?: $CustomPacketPayload$Type$$Type<(T)>, "codec"?: $StreamCodec$$Type<(B), (T)>}) | ([type?: $CustomPacketPayload$Type$$Type<(T)>, codec?: $StreamCodec$$Type<(B), (T)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomPacketPayload$TypeAndCodec$$Original<B, T> = $CustomPacketPayload$TypeAndCodec<(B), (T)>;}
declare module "net.minecraft.network.protocol.game.ServerboundChatPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$MessageSignature, $MessageSignature$$Type} from "net.minecraft.network.chat.MessageSignature"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$LastSeenMessages$Update, $LastSeenMessages$Update$$Type} from "net.minecraft.network.chat.LastSeenMessages$Update"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerGamePacketListener, $ServerGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import {$Instant, $Instant$$Type} from "java.time.Instant"
import {$Record} from "java.lang.Record"

export class $ServerboundChatPacket extends $Record implements $Packet$$Interface<($ServerGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundChatPacket)>

constructor(arg0: StringJS, arg1: $Instant$$Type, arg2: long, arg3: $MessageSignature$$Type, arg4: $LastSeenMessages$Update$$Type)

public "salt"(): long
public "signature"(): $MessageSignature
public "type"(): $PacketType<($ServerboundChatPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "message"(): StringJS
public "handle"(arg0: $ServerGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "timeStamp"(): $Instant
public "lastSeenMessages"(): $LastSeenMessages$Update
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerGamePacketListener$$Type)>): $StreamCodec<(B), ($ServerGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundChatPacket$$Type = ({"message"?: StringJS, "signature"?: $MessageSignature$$Type, "timeStamp"?: $Instant$$Type, "salt"?: long, "lastSeenMessages"?: $LastSeenMessages$Update$$Type}) | ([message?: StringJS, signature?: $MessageSignature$$Type, timeStamp?: $Instant$$Type, salt?: long, lastSeenMessages?: $LastSeenMessages$Update$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundChatPacket$$Original = $ServerboundChatPacket;}
declare module "net.minecraft.network.protocol.common.ServerboundClientInformationPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ClientInformation, $ClientInformation$$Type} from "net.minecraft.server.level.ClientInformation"
import {$ServerCommonPacketListener, $ServerCommonPacketListener$$Type} from "net.minecraft.network.protocol.common.ServerCommonPacketListener"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $ServerboundClientInformationPacket extends $Record implements $Packet$$Interface<($ServerCommonPacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundClientInformationPacket)>

constructor(arg0: $ClientInformation$$Type)

public "type"(): $PacketType<($ServerboundClientInformationPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "handle"(arg0: $ServerCommonPacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "information"(): $ClientInformation
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerCommonPacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerCommonPacketListener$$Type)>): $StreamCodec<(B), ($ServerCommonPacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundClientInformationPacket$$Type = ({"information"?: $ClientInformation$$Type}) | ([information?: $ClientInformation$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundClientInformationPacket$$Original = $ServerboundClientInformationPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundUpdateAdvancementsPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List} from "java.util.List"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$AdvancementHolder, $AdvancementHolder$$Type} from "net.minecraft.advancements.AdvancementHolder"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$AdvancementProgress, $AdvancementProgress$$Type} from "net.minecraft.advancements.AdvancementProgress"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"

export class $ClientboundUpdateAdvancementsPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientboundUpdateAdvancementsPacket)>

constructor(arg0: boolean, arg1: $Collection$$Type<($AdvancementHolder$$Type)>, arg2: $Set$$Type<($ResourceLocation$$Type)>, arg3: $Map$$Type<($ResourceLocation$$Type), ($AdvancementProgress$$Type)>)

public "type"(): $PacketType<($ClientboundUpdateAdvancementsPacket)>
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "getProgress"(): $Map<($ResourceLocation), ($AdvancementProgress)>
public "shouldReset"(): boolean
public "getAdded"(): $List<($AdvancementHolder)>
public "getRemoved"(): $Set<($ResourceLocation)>
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "progress"(): $Map<($ResourceLocation), ($AdvancementProgress)>
get "added"(): $List<($AdvancementHolder)>
get "removed"(): $Set<($ResourceLocation)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundUpdateAdvancementsPacket$$Type = ($ClientboundUpdateAdvancementsPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundUpdateAdvancementsPacket$$Original = $ClientboundUpdateAdvancementsPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket$Action$Writer" {
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ClientboundPlayerInfoUpdatePacket$Entry, $ClientboundPlayerInfoUpdatePacket$Entry$$Type} from "net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket$Entry"

export interface $ClientboundPlayerInfoUpdatePacket$Action$Writer$$Interface {

(arg0: $RegistryFriendlyByteBuf, arg1: $ClientboundPlayerInfoUpdatePacket$Entry): void
}

export class $ClientboundPlayerInfoUpdatePacket$Action$Writer implements $ClientboundPlayerInfoUpdatePacket$Action$Writer$$Interface {
 "write"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $ClientboundPlayerInfoUpdatePacket$Entry$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundPlayerInfoUpdatePacket$Action$Writer$$Type = ((arg0: $RegistryFriendlyByteBuf, arg1: $ClientboundPlayerInfoUpdatePacket$Entry) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundPlayerInfoUpdatePacket$Action$Writer$$Original = $ClientboundPlayerInfoUpdatePacket$Action$Writer;}
declare module "net.minecraft.network.protocol.game.ClientboundStartConfigurationPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundStartConfigurationPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "INSTANCE": $ClientboundStartConfigurationPacket
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($ClientboundStartConfigurationPacket)>

public "type"(): $PacketType<($ClientboundStartConfigurationPacket)>
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundStartConfigurationPacket$$Type = ($ClientboundStartConfigurationPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundStartConfigurationPacket$$Original = $ClientboundStartConfigurationPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundRecipePacket$State" {
import {$Enum} from "java.lang.Enum"

export class $ClientboundRecipePacket$State extends $Enum<($ClientboundRecipePacket$State)> {
static readonly "ADD": $ClientboundRecipePacket$State
static readonly "INIT": $ClientboundRecipePacket$State
static readonly "REMOVE": $ClientboundRecipePacket$State

public static "values"(): ($ClientboundRecipePacket$State)[]
public static "valueOf"(arg0: StringJS): $ClientboundRecipePacket$State
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundRecipePacket$State$$Type = (("init") | ("add") | ("remove"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundRecipePacket$State$$Original = $ClientboundRecipePacket$State;}
declare module "net.minecraft.network.protocol.game.ClientboundContainerSetContentPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"

export class $ClientboundContainerSetContentPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientboundContainerSetContentPacket)>

constructor(arg0: integer, arg1: integer, arg2: $NonNullList$$Type<($ItemStack$$Type)>, arg3: $ItemStack$$Type)

public "type"(): $PacketType<($ClientboundContainerSetContentPacket)>
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getStateId"(): integer
public "getItems"(): $List<($ItemStack)>
public "getCarriedItem"(): $ItemStack
public "getContainerId"(): integer
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "stateId"(): integer
get "items"(): $List<($ItemStack)>
get "carriedItem"(): $ItemStack
get "containerId"(): integer
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundContainerSetContentPacket$$Type = ($ClientboundContainerSetContentPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundContainerSetContentPacket$$Original = $ClientboundContainerSetContentPacket;}
declare module "net.minecraft.network.protocol.common.ServerboundResourcePackPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ServerCommonPacketListener, $ServerCommonPacketListener$$Type} from "net.minecraft.network.protocol.common.ServerCommonPacketListener"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$ServerboundResourcePackPacket$Action, $ServerboundResourcePackPacket$Action$$Type} from "net.minecraft.network.protocol.common.ServerboundResourcePackPacket$Action"
import {$Record} from "java.lang.Record"

export class $ServerboundResourcePackPacket extends $Record implements $Packet$$Interface<($ServerCommonPacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ServerboundResourcePackPacket)>

constructor(arg0: $UUID$$Type, arg1: $ServerboundResourcePackPacket$Action$$Type)

public "type"(): $PacketType<($ServerboundResourcePackPacket)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): $UUID
public "action"(): $ServerboundResourcePackPacket$Action
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ServerCommonPacketListener$$Type): void
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ServerCommonPacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ServerCommonPacketListener$$Type)>): $StreamCodec<(B), ($ServerCommonPacketListener)>
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundResourcePackPacket$$Type = ({"id"?: $UUID$$Type, "action"?: $ServerboundResourcePackPacket$Action$$Type}) | ([id?: $UUID$$Type, action?: $ServerboundResourcePackPacket$Action$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundResourcePackPacket$$Original = $ServerboundResourcePackPacket;}
declare module "net.minecraft.network.protocol.login.custom.CustomQueryPayload" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"

export interface $CustomQueryPayload$$Interface {
}

export class $CustomQueryPayload implements $CustomQueryPayload$$Interface {
 "id"(): $ResourceLocation
 "write"(arg0: $FriendlyByteBuf$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomQueryPayload$$Type = ($CustomQueryPayload);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomQueryPayload$$Original = $CustomQueryPayload;}
declare module "net.minecraft.network.protocol.game.ClientboundSetDefaultSpawnPositionPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundSetDefaultSpawnPositionPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundSetDefaultSpawnPositionPacket)>

constructor(arg0: $BlockPos$$Type, arg1: float)

public "type"(): $PacketType<($ClientboundSetDefaultSpawnPositionPacket)>
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getPos"(): $BlockPos
public "getAngle"(): float
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "pos"(): $BlockPos
get "angle"(): float
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundSetDefaultSpawnPositionPacket$$Type = ($ClientboundSetDefaultSpawnPositionPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundSetDefaultSpawnPositionPacket$$Original = $ClientboundSetDefaultSpawnPositionPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundPlayerAbilitiesPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Abilities$$Type} from "net.minecraft.world.entity.player.Abilities"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundPlayerAbilitiesPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
 "flyingSpeed": float
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundPlayerAbilitiesPacket)>

constructor(arg0: $Abilities$$Type)

public "type"(): $PacketType<($ClientboundPlayerAbilitiesPacket)>
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "getWalkingSpeed"(): float
public "isFlying"(): boolean
public "canFly"(): boolean
public "isInvulnerable"(): boolean
public "getFlyingSpeed"(): float
public "canInstabuild"(): boolean
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "walkingSpeed"(): float
get "flying"(): boolean
get "invulnerable"(): boolean
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundPlayerAbilitiesPacket$$Type = ($ClientboundPlayerAbilitiesPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundPlayerAbilitiesPacket$$Original = $ClientboundPlayerAbilitiesPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundAnimatePacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundAnimatePacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "CRITICAL_HIT": integer
static readonly "MAGIC_CRITICAL_HIT": integer
static readonly "SWING_MAIN_HAND": integer
static readonly "SWING_OFF_HAND": integer
static readonly "WAKE_UP": integer
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundAnimatePacket)>

constructor(arg0: $Entity$$Type, arg1: integer)

public "type"(): $PacketType<($ClientboundAnimatePacket)>
public "getId"(): integer
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "getAction"(): integer
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "id"(): integer
get "action"(): integer
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundAnimatePacket$$Type = ($ClientboundAnimatePacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundAnimatePacket$$Original = $ClientboundAnimatePacket;}
declare module "net.minecraft.network.protocol.game.ClientboundSoundEntityPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$SoundSource, $SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $ClientboundSoundEntityPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientboundSoundEntityPacket)>

constructor(arg0: $Holder$$Type<($SoundEvent)>, arg1: $SoundSource$$Type, arg2: $Entity$$Type, arg3: float, arg4: float, arg5: long)

public "type"(): $PacketType<($ClientboundSoundEntityPacket)>
public "getId"(): integer
public "handle"(arg0: $PacketListener$$Type): void
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "getSeed"(): long
public "getSource"(): $SoundSource
public "getSound"(): $Holder<($SoundEvent)>
public "getPitch"(): float
public "getVolume"(): float
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "id"(): integer
get "seed"(): long
get "source"(): $SoundSource
get "sound"(): $Holder<($SoundEvent)>
get "pitch"(): float
get "volume"(): float
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundSoundEntityPacket$$Type = ($ClientboundSoundEntityPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundSoundEntityPacket$$Original = $ClientboundSoundEntityPacket;}
declare module "net.minecraft.network.protocol.game.ClientboundLevelEventPacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$PacketType} from "net.minecraft.network.protocol.PacketType"
import {$Packet, $Packet$$Interface} from "net.minecraft.network.protocol.Packet"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"

export class $ClientboundLevelEventPacket implements $Packet$$Interface<($ClientGamePacketListener)> {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ClientboundLevelEventPacket)>

constructor(arg0: integer, arg1: $BlockPos$$Type, arg2: integer, arg3: boolean)

public "type"(): $PacketType<($ClientboundLevelEventPacket)>
public "getType"(): integer
public "handle"(arg0: $ClientGamePacketListener$$Type): void
public "handle"(arg0: $PacketListener$$Type): void
public "getData"(): integer
public "getPos"(): $BlockPos
public "isGlobalEvent"(): boolean
public "isTerminal"(): boolean
public "isSkippable"(): boolean
public static "codec"<B extends $ByteBuf, T extends $Packet<(object)>>(arg0: $StreamMemberEncoder$$Type<(B), ($ClientGamePacketListener)>, arg1: $StreamDecoder$$Type<(B), ($ClientGamePacketListener$$Type)>): $StreamCodec<(B), ($ClientGamePacketListener)>
get "data"(): integer
get "pos"(): $BlockPos
get "globalEvent"(): boolean
get "terminal"(): boolean
get "skippable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundLevelEventPacket$$Type = ($ClientboundLevelEventPacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundLevelEventPacket$$Original = $ClientboundLevelEventPacket;}
