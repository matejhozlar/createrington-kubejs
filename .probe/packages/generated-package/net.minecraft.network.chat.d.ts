declare module "net.minecraft.network.chat.MessageSignature$Packed" {
import {$MessageSignatureCache$$Type} from "net.minecraft.network.chat.MessageSignatureCache"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$MessageSignature, $MessageSignature$$Type} from "net.minecraft.network.chat.MessageSignature"
import {$Optional} from "java.util.Optional"
import {$Record} from "java.lang.Record"

export class $MessageSignature$Packed extends $Record {
static readonly "FULL_SIGNATURE": integer

constructor(arg0: integer, arg1: $MessageSignature$$Type)
constructor(arg0: integer)
constructor(arg0: $MessageSignature$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): integer
public static "write"(arg0: $FriendlyByteBuf$$Type, arg1: $MessageSignature$Packed$$Type): void
public static "read"(arg0: $FriendlyByteBuf$$Type): $MessageSignature$Packed
public "unpack"(arg0: $MessageSignatureCache$$Type): $Optional<($MessageSignature)>
public "fullSignature"(): $MessageSignature
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MessageSignature$Packed$$Type = ({"id"?: integer, "fullSignature"?: $MessageSignature$$Type}) | ([id?: integer, fullSignature?: $MessageSignature$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MessageSignature$Packed$$Original = $MessageSignature$Packed;}
declare module "net.minecraft.network.chat.SignedMessageLink" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$SignatureUpdater$Output$$Type} from "net.minecraft.util.SignatureUpdater$Output"
import {$Record} from "java.lang.Record"

export class $SignedMessageLink extends $Record {
static readonly "CODEC": $Codec<($SignedMessageLink)>

constructor(arg0: integer, arg1: $UUID$$Type, arg2: $UUID$$Type)

public "index"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "root"(arg0: $UUID$$Type, arg1: $UUID$$Type): $SignedMessageLink
public "advance"(): $SignedMessageLink
public static "unsigned"(arg0: $UUID$$Type): $SignedMessageLink
public "sessionId"(): $UUID
public "sender"(): $UUID
public "updateSignature"(arg0: $SignatureUpdater$Output$$Type): void
public "isDescendantOf"(arg0: $SignedMessageLink$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignedMessageLink$$Type = ({"sender"?: $UUID$$Type, "index"?: integer, "sessionId"?: $UUID$$Type}) | ([sender?: $UUID$$Type, index?: integer, sessionId?: $UUID$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SignedMessageLink$$Original = $SignedMessageLink;}
declare module "net.minecraft.network.chat.HoverEvent$EntityTooltipInfo" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$RegistryOps$$Type} from "net.minecraft.resources.RegistryOps"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$List} from "java.util.List"
import {$DataResult} from "com.mojang.serialization.DataResult"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $HoverEvent$EntityTooltipInfo {
static readonly "CODEC": $Codec<($HoverEvent$EntityTooltipInfo)>
readonly "name": $Optional<($Component)>
readonly "id": $UUID
readonly "type": $EntityType<(never)>

constructor(arg0: $EntityType$$Type<(never)>, arg1: $UUID$$Type, arg2: $Component$$Type)
constructor(arg0: $EntityType$$Type<(never)>, arg1: $UUID$$Type, arg2: ($Component$$Type)?)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getTooltipLines"(): $List<($Component)>
public static "legacyCreate"(arg0: $Component$$Type, arg1: $RegistryOps$$Type<(never)>): $DataResult<($HoverEvent$EntityTooltipInfo)>
get "tooltipLines"(): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HoverEvent$EntityTooltipInfo$$Type = ($HoverEvent$EntityTooltipInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HoverEvent$EntityTooltipInfo$$Original = $HoverEvent$EntityTooltipInfo;}
declare module "net.minecraft.network.chat.RemoteChatSession$Data" {
import {$SignatureValidator$$Type} from "net.minecraft.util.SignatureValidator"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$RemoteChatSession} from "net.minecraft.network.chat.RemoteChatSession"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ProfilePublicKey$Data, $ProfilePublicKey$Data$$Type} from "net.minecraft.world.entity.player.ProfilePublicKey$Data"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$Record} from "java.lang.Record"

export class $RemoteChatSession$Data extends $Record {
constructor(arg0: $UUID$$Type, arg1: $ProfilePublicKey$Data$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "validate"(arg0: $GameProfile$$Type, arg1: $SignatureValidator$$Type): $RemoteChatSession
public static "write"(arg0: $FriendlyByteBuf$$Type, arg1: $RemoteChatSession$Data$$Type): void
public static "read"(arg0: $FriendlyByteBuf$$Type): $RemoteChatSession$Data
public "sessionId"(): $UUID
public "profilePublicKey"(): $ProfilePublicKey$Data
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RemoteChatSession$Data$$Type = ({"profilePublicKey"?: $ProfilePublicKey$Data$$Type, "sessionId"?: $UUID$$Type}) | ([profilePublicKey?: $ProfilePublicKey$Data$$Type, sessionId?: $UUID$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RemoteChatSession$Data$$Original = $RemoteChatSession$Data;}
declare module "net.minecraft.network.chat.FilterMask" {
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Style} from "net.minecraft.network.chat.Style"
import {$Component} from "net.minecraft.network.chat.Component"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $FilterMask {
static readonly "PARTIALLY_FILTERED_CODEC": $MapCodec<($FilterMask)>
static readonly "PASS_THROUGH": $FilterMask
static readonly "CODEC": $Codec<($FilterMask)>
static readonly "FULLY_FILTERED": $FilterMask
static readonly "FILTERED_STYLE": $Style
static readonly "PASS_THROUGH_CODEC": $MapCodec<($FilterMask)>
static readonly "FULLY_FILTERED_CODEC": $MapCodec<($FilterMask)>

constructor(arg0: integer)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isEmpty"(): boolean
public "apply"(arg0: StringJS): StringJS
public static "write"(arg0: $FriendlyByteBuf$$Type, arg1: $FilterMask$$Type): void
public static "read"(arg0: $FriendlyByteBuf$$Type): $FilterMask
public "applyWithFormatting"(arg0: StringJS): $Component
public "setFiltered"(arg0: integer): void
public "isFullyFiltered"(): boolean
get "empty"(): boolean
set "filtered"(value: integer)
get "fullyFiltered"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterMask$$Type = ($FilterMask);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FilterMask$$Original = $FilterMask;}
declare module "net.minecraft.network.chat.OutgoingChatMessage" {
import {$PlayerChatMessage$$Type} from "net.minecraft.network.chat.PlayerChatMessage"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Component} from "net.minecraft.network.chat.Component"
import {$ChatType$Bound$$Type} from "net.minecraft.network.chat.ChatType$Bound"

export interface $OutgoingChatMessage$$Interface {
}

export class $OutgoingChatMessage implements $OutgoingChatMessage$$Interface {
static "create"(arg0: $PlayerChatMessage$$Type): $OutgoingChatMessage
 "content"(): $Component
 "sendToPlayer"(arg0: $ServerPlayer$$Type, arg1: boolean, arg2: $ChatType$Bound$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OutgoingChatMessage$$Type = ($OutgoingChatMessage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OutgoingChatMessage$$Original = $OutgoingChatMessage;}
declare module "net.minecraft.network.chat.RemoteChatSession" {
import {$ProfilePublicKey, $ProfilePublicKey$$Type} from "net.minecraft.world.entity.player.ProfilePublicKey"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$SignedMessageChain$Decoder} from "net.minecraft.network.chat.SignedMessageChain$Decoder"
import {$Duration$$Type} from "java.time.Duration"
import {$RemoteChatSession$Data} from "net.minecraft.network.chat.RemoteChatSession$Data"
import {$SignedMessageValidator} from "net.minecraft.network.chat.SignedMessageValidator"
import {$Record} from "java.lang.Record"

export class $RemoteChatSession extends $Record {
constructor(arg0: $UUID$$Type, arg1: $ProfilePublicKey$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "sessionId"(): $UUID
public "createMessageValidator"(arg0: $Duration$$Type): $SignedMessageValidator
public "createMessageDecoder"(arg0: $UUID$$Type): $SignedMessageChain$Decoder
public "profilePublicKey"(): $ProfilePublicKey
public "asData"(): $RemoteChatSession$Data
public "hasExpired"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RemoteChatSession$$Type = ({"profilePublicKey"?: $ProfilePublicKey$$Type, "sessionId"?: $UUID$$Type}) | ([profilePublicKey?: $ProfilePublicKey$$Type, sessionId?: $UUID$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RemoteChatSession$$Original = $RemoteChatSession;}
declare module "net.minecraft.network.chat.ComponentContents" {
import {$Optional} from "java.util.Optional"
import {$Style$$Type} from "net.minecraft.network.chat.Style"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ComponentContents$Type, $ComponentContents$Type$$Type} from "net.minecraft.network.chat.ComponentContents$Type"
import {$FormattedText$ContentConsumer$$Type} from "net.minecraft.network.chat.FormattedText$ContentConsumer"
import {$FormattedText$StyledContentConsumer$$Type} from "net.minecraft.network.chat.FormattedText$StyledContentConsumer"
import {$CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"

export interface $ComponentContents$$Interface {

(): $ComponentContents$Type$$Type<(never)>
}

export class $ComponentContents implements $ComponentContents$$Interface {
 "type"(): $ComponentContents$Type<(never)>
 "resolve"(arg0: $CommandSourceStack$$Type, arg1: $Entity$$Type, arg2: integer): $MutableComponent
 "visit"<T>(arg0: $FormattedText$ContentConsumer$$Type<(T)>): $Optional<(T)>
 "visit"<T>(arg0: $FormattedText$StyledContentConsumer$$Type<(T)>, arg1: $Style$$Type): $Optional<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComponentContents$$Type = (() => $ComponentContents$Type$$Type<(never)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ComponentContents$$Original = $ComponentContents;}
declare module "net.minecraft.network.chat.MutableComponent" {
import {$Iterable} from "java.lang.Iterable"
import {$FormattedText, $FormattedText$$Type} from "net.minecraft.network.chat.FormattedText"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$UUID$$Type} from "java.util.UUID"
import {$JsonElement} from "com.google.gson.JsonElement"
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type, $Component$$Interface} from "net.minecraft.network.chat.Component"
import {$FormattedText$StyledContentConsumer$$Type} from "net.minecraft.network.chat.FormattedText$StyledContentConsumer"
import {$Message$$Type} from "com.mojang.brigadier.Message"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ComponentContents, $ComponentContents$$Type} from "net.minecraft.network.chat.ComponentContents"
import {$FormattedText$ContentConsumer$$Type} from "net.minecraft.network.chat.FormattedText$ContentConsumer"
import {$ChatFormatting$$Type} from "net.minecraft.ChatFormatting"
import {$ComponentKJS$$Interface} from "dev.latvian.mods.kubejs.core.ComponentKJS"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$Style, $Style$$Type} from "net.minecraft.network.chat.Style"
import {$ClickEvent$$Type} from "net.minecraft.network.chat.ClickEvent"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$FormattedCharSequence} from "net.minecraft.util.FormattedCharSequence"
import {$URI$$Type} from "java.net.URI"
import {$KubeColor$$Type} from "dev.latvian.mods.kubejs.color.KubeColor"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$Date$$Type} from "java.util.Date"
import {$DataSource$$Type} from "net.minecraft.network.chat.contents.DataSource"

export class $MutableComponent implements $Component$$Interface, $ComponentKJS$$Interface {
constructor(arg0: $ComponentContents$$Type, arg1: $List$$Type<($Component$$Type)>, arg2: $Style$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "append"(arg0: $Component$$Type): $MutableComponent
public "hashCode"(): integer
public static "create"(arg0: $ComponentContents$$Type): $MutableComponent
public "getContents"(): $ComponentContents
public "getSiblings"(): $List<($Component)>
public "getVisualOrderText"(): $FormattedCharSequence
public "withStyle"(arg0: $UnaryOperator$$Type<($Style)>): $MutableComponent
public "withStyle"(arg0: $ChatFormatting$$Type): $MutableComponent
public "withStyle"(arg0: $Style$$Type): $MutableComponent
public "withStyle"(...arg0: ($ChatFormatting$$Type)[]): $MutableComponent
public "setStyle"(arg0: $Style$$Type): $MutableComponent
public "withColor"(arg0: integer): $MutableComponent
public "getStyle"(): $Style
public "contains"(arg0: $Component$$Type): boolean
public static "empty"(): $MutableComponent
public "copy"(): $MutableComponent
public static "literal"(arg0: StringJS): $MutableComponent
public "visit"<T>(arg0: $FormattedText$StyledContentConsumer$$Type<(T)>, arg1: $Style$$Type): $Optional<(T)>
public "visit"<T>(arg0: $FormattedText$ContentConsumer$$Type<(T)>): $Optional<(T)>
public "getString"(arg0: integer): StringJS
public "getString"(): StringJS
public static "selector"(arg0: StringJS, arg1: ($Component$$Type)?): $MutableComponent
public static "score"(arg0: StringJS, arg1: StringJS): $MutableComponent
public static "translationArg"(arg0: $Date$$Type): $Component
public static "translationArg"(arg0: $UUID$$Type): $Component
public static "translationArg"(arg0: $ResourceLocation$$Type): $Component
public static "translationArg"(arg0: $Message$$Type): $Component
public static "translationArg"(arg0: $URI$$Type): $Component
public static "translationArg"(arg0: $ChunkPos$$Type): $Component
public static "translatableEscape"(arg0: StringJS, ...arg1: (any)[]): $MutableComponent
public static "nullToEmpty"(arg0: StringJS): $Component
public "tryCollapseToString"(): StringJS
public static "translatableWithFallback"(arg0: StringJS, arg1: StringJS, ...arg2: (any)[]): $MutableComponent
public static "translatableWithFallback"(arg0: StringJS, arg1: StringJS): $MutableComponent
public static "translatable"(arg0: StringJS, ...arg1: (any)[]): $MutableComponent
public static "translatable"(arg0: StringJS): $MutableComponent
public "toFlatList"(): $List<($Component)>
public "toFlatList"(arg0: $Style$$Type): $List<($Component)>
public static "keybind"(arg0: StringJS): $MutableComponent
public static "nbt"(arg0: StringJS, arg1: boolean, arg2: ($Component$$Type)?, arg3: $DataSource$$Type): $MutableComponent
public "plainCopy"(): $MutableComponent
public "forEach"(action: $Consumer$$Type<($Component)>): void
public "asIterable"(): $Iterable<($Component)>
public "darkPurple"(): $MutableComponent
public "insertion"(s: StringJS): $MutableComponent
/**
 * 
 * @deprecated
 */
public "component"(): $Component
public "strikethrough"(value: boolean): $MutableComponent
public "strikethrough"(): $MutableComponent
public "hasStyle"(): boolean
public "clickCopy"(text: StringJS): $MutableComponent
/**
 * 
 * @deprecated
 */
public "rawCopy"(): $MutableComponent
public "darkGray"(): $MutableComponent
public "darkGreen"(): $MutableComponent
public "underlined"(value: boolean): $MutableComponent
public "underlined"(): $MutableComponent
public "darkAqua"(): $MutableComponent
/**
 * 
 * @deprecated
 */
public "rawComponent"(): $MutableComponent
public "obfuscated"(value: boolean): $MutableComponent
public "obfuscated"(): $MutableComponent
public "isEmpty"(): boolean
public "noColor"(): $MutableComponent
public "darkRed"(): $MutableComponent
public "lightPurple"(): $MutableComponent
public "clickOpenUrl"(url: StringJS): $MutableComponent
public "darkBlue"(): $MutableComponent
public "hasSiblings"(): boolean
public "clickOpenFile"(path: StringJS): $MutableComponent
public "self"(): $MutableComponent
public "clickRunCommand"(command: StringJS): $MutableComponent
public "clickSuggestCommand"(command: StringJS): $MutableComponent
public "clickChangePage"(page: StringJS): $MutableComponent
public "getCodec"(): $Codec<(never)>
public "black"(): $MutableComponent
public "aqua"(): $MutableComponent
public "italic"(): $MutableComponent
public "italic"(value: boolean): $MutableComponent
public "red"(): $MutableComponent
public "white"(): $MutableComponent
public "hover"(s: $Component$$Type): $MutableComponent
public "yellow"(): $MutableComponent
public "font"(s: $ResourceLocation$$Type): $MutableComponent
public "color"(c: $KubeColor$$Type): $MutableComponent
public "bold"(value: boolean): $MutableComponent
public "bold"(): $MutableComponent
public "click"(s: $ClickEvent$$Type): $MutableComponent
public "gold"(): $MutableComponent
public "gray"(): $MutableComponent
public "blue"(): $MutableComponent
public "green"(): $MutableComponent
public static "of"(arg0: StringJS, arg1: $Style$$Type): $FormattedText
public static "of"(arg0: StringJS): $FormattedText
public static "composite"(arg0: $List$$Type<($FormattedText$$Type)>): $FormattedText
public static "composite"(...arg0: ($FormattedText$$Type)[]): $FormattedText
public "toJson"(): $JsonElement
public "toNBT"(): $Tag
get "contents"(): $ComponentContents
get "siblings"(): $List<($Component)>
get "visualOrderText"(): $FormattedCharSequence
set "style"(value: $Style$$Type)
get "style"(): $Style
get "string"(): StringJS
get "codec"(): $Codec<(never)>
}
export type ComponentObject = {"text"?: StringJS, "translate"?: Special.LangKey, "with"?: (any)[], "color"?: $KubeColor$$Type, "bold"?: boolean, "italic"?: boolean, "underlined"?: boolean, "strikethrough"?: boolean, "obfuscated"?: boolean, "insertion"?: StringJS, "font"?: StringJS, "click"?: $ClickEvent$$Type, "hover"?: $MutableComponent$$Type, "extra"?: ($MutableComponent$$Type)[]};
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableComponent$$Type = (StringJS) | (ComponentObject) | (($MutableComponent$$Type)[]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MutableComponent$$Original = $MutableComponent;}
declare module "net.minecraft.network.chat.numbers.NumberFormatType" {
import {$NumberFormat} from "net.minecraft.network.chat.numbers.NumberFormat"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export interface $NumberFormatType$$Interface<T extends $NumberFormat> {
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.NumberFormatType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.NumberFormatTypeTag
}

export class $NumberFormatType<T extends $NumberFormat> implements $NumberFormatType$$Interface {
 "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
 "mapCodec"(): $MapCodec<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NumberFormatType$$Type<T> = (Special.NumberFormatType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NumberFormatType$$Original<T> = $NumberFormatType<(T)>;}
declare module "net.minecraft.network.chat.ClickEvent" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$ClickEvent$Action, $ClickEvent$Action$$Type} from "net.minecraft.network.chat.ClickEvent$Action"
import {$JsonElement} from "com.google.gson.JsonElement"
import {$WithCodec$$Interface} from "dev.latvian.mods.kubejs.util.WithCodec"
import {$Tag} from "net.minecraft.nbt.Tag"

export class $ClickEvent implements $WithCodec$$Interface {
static readonly "CODEC": $Codec<($ClickEvent)>

constructor(arg0: $ClickEvent$Action$$Type, arg1: StringJS)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getValue"(): StringJS
public "getAction"(): $ClickEvent$Action
public "getCodec"(): $Codec
public "toJson"(): $JsonElement
public "toNBT"(): $Tag
get "value"(): StringJS
get "action"(): $ClickEvent$Action
get "codec"(): $Codec
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClickEvent$$Type = ({"action": ("open_url") | ("open_file") | ("run_command") | ("suggest_command") | ("change_page") | ("copy_to_clipboard"), "value": StringJS});
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClickEvent$$Original = $ClickEvent;}
declare module "net.minecraft.network.chat.SignedMessageBody$Packed" {
import {$SignedMessageBody} from "net.minecraft.network.chat.SignedMessageBody"
import {$MessageSignatureCache$$Type} from "net.minecraft.network.chat.MessageSignatureCache"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Optional} from "java.util.Optional"
import {$LastSeenMessages$Packed, $LastSeenMessages$Packed$$Type} from "net.minecraft.network.chat.LastSeenMessages$Packed"
import {$Instant, $Instant$$Type} from "java.time.Instant"
import {$Record} from "java.lang.Record"

export class $SignedMessageBody$Packed extends $Record {
constructor(arg0: $FriendlyByteBuf$$Type)
constructor(arg0: StringJS, arg1: $Instant$$Type, arg2: long, arg3: $LastSeenMessages$Packed$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "write"(arg0: $FriendlyByteBuf$$Type): void
public "content"(): StringJS
public "timeStamp"(): $Instant
public "unpack"(arg0: $MessageSignatureCache$$Type): $Optional<($SignedMessageBody)>
public "salt"(): long
public "lastSeen"(): $LastSeenMessages$Packed
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignedMessageBody$Packed$$Type = ({"timeStamp"?: $Instant$$Type, "salt"?: long, "lastSeen"?: $LastSeenMessages$Packed$$Type, "content"?: StringJS}) | ([timeStamp?: $Instant$$Type, salt?: long, lastSeen?: $LastSeenMessages$Packed$$Type, content?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SignedMessageBody$Packed$$Original = $SignedMessageBody$Packed;}
declare module "net.minecraft.network.chat.HoverEvent$ItemStackInfo" {
import {$DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Holder$$Type} from "net.minecraft.core.Holder"

export class $HoverEvent$ItemStackInfo {
static readonly "CODEC": $Codec<($HoverEvent$ItemStackInfo)>
static readonly "FULL_CODEC": $Codec<($HoverEvent$ItemStackInfo)>

constructor(arg0: $Holder$$Type<($Item)>, arg1: integer, arg2: $DataComponentPatch$$Type)
constructor(arg0: $ItemStack$$Type)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getItemStack"(): $ItemStack
get "itemStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HoverEvent$ItemStackInfo$$Type = ($HoverEvent$ItemStackInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HoverEvent$ItemStackInfo$$Original = $HoverEvent$ItemStackInfo;}
declare module "net.minecraft.network.chat.LastSeenMessages$Update" {
import {$BitSet, $BitSet$$Type} from "java.util.BitSet"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Record} from "java.lang.Record"

export class $LastSeenMessages$Update extends $Record {
constructor(arg0: $FriendlyByteBuf$$Type)
constructor(arg0: integer, arg1: $BitSet$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "offset"(): integer
public "write"(arg0: $FriendlyByteBuf$$Type): void
public "acknowledged"(): $BitSet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LastSeenMessages$Update$$Type = ({"offset"?: integer, "acknowledged"?: $BitSet$$Type}) | ([offset?: integer, acknowledged?: $BitSet$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LastSeenMessages$Update$$Original = $LastSeenMessages$Update;}
declare module "net.minecraft.network.chat.MessageSignatureCache" {
import {$SignedMessageBody$$Type} from "net.minecraft.network.chat.SignedMessageBody"
import {$MessageSignature, $MessageSignature$$Type} from "net.minecraft.network.chat.MessageSignature"
import {$List$$Type} from "java.util.List"

export class $MessageSignatureCache {
static readonly "NOT_FOUND": integer

constructor(arg0: integer)

public "push"(arg0: $SignedMessageBody$$Type, arg1: $MessageSignature$$Type): void
public "push"(arg0: $List$$Type<($MessageSignature$$Type)>): void
public "pack"(arg0: $MessageSignature$$Type): integer
public "unpack"(arg0: integer): $MessageSignature
public static "createDefault"(): $MessageSignatureCache
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MessageSignatureCache$$Type = ($MessageSignatureCache);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MessageSignatureCache$$Original = $MessageSignatureCache;}
declare module "net.minecraft.network.chat.HoverEvent$LegacyConverter" {
import {$RegistryOps, $RegistryOps$$Type} from "net.minecraft.resources.RegistryOps"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $HoverEvent$LegacyConverter$$Interface<T> {

(arg0: $Component, arg1: $RegistryOps<(never)>): $DataResult$$Type<(T)>
}

export class $HoverEvent$LegacyConverter<T> implements $HoverEvent$LegacyConverter$$Interface {
 "parse"(arg0: $Component$$Type, arg1: $RegistryOps$$Type<(never)>): $DataResult<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HoverEvent$LegacyConverter$$Type<T> = ((arg0: $Component, arg1: $RegistryOps<(never)>) => $DataResult$$Type<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HoverEvent$LegacyConverter$$Original<T> = $HoverEvent$LegacyConverter<(T)>;}
declare module "net.minecraft.network.chat.contents.DataSource$Type" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DataSource} from "net.minecraft.network.chat.contents.DataSource"
import {$Record} from "java.lang.Record"

export class $DataSource$Type<T extends $DataSource> extends $Record implements $StringRepresentable$$Interface {
constructor(arg0: $MapCodec$$Type<(T)>, arg1: StringJS)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): StringJS
public "codec"(): $MapCodec<(T)>
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataSource$Type$$Type<T> = ({"id"?: StringJS, "codec"?: $MapCodec$$Type<(T)>}) | ([id?: StringJS, codec?: $MapCodec$$Type<(T)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DataSource$Type$$Original<T> = $DataSource$Type<(T)>;}
declare module "net.minecraft.network.chat.LastSeenMessages$Packed" {
import {$MessageSignature$Packed, $MessageSignature$Packed$$Type} from "net.minecraft.network.chat.MessageSignature$Packed"
import {$MessageSignatureCache$$Type} from "net.minecraft.network.chat.MessageSignatureCache"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Optional} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$LastSeenMessages} from "net.minecraft.network.chat.LastSeenMessages"
import {$Record} from "java.lang.Record"

export class $LastSeenMessages$Packed extends $Record {
static readonly "EMPTY": $LastSeenMessages$Packed

constructor(arg0: $FriendlyByteBuf$$Type)
constructor(arg0: $List$$Type<($MessageSignature$Packed$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "write"(arg0: $FriendlyByteBuf$$Type): void
public "entries"(): $List<($MessageSignature$Packed)>
public "unpack"(arg0: $MessageSignatureCache$$Type): $Optional<($LastSeenMessages)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LastSeenMessages$Packed$$Type = ({"entries"?: $List$$Type<($MessageSignature$Packed$$Type)>}) | ([entries?: $List$$Type<($MessageSignature$Packed$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LastSeenMessages$Packed$$Original = $LastSeenMessages$Packed;}
declare module "net.minecraft.network.chat.SignedMessageBody" {
import {$SignedMessageBody$Packed} from "net.minecraft.network.chat.SignedMessageBody$Packed"
import {$MessageSignatureCache$$Type} from "net.minecraft.network.chat.MessageSignatureCache"
import {$SignatureUpdater$Output$$Type} from "net.minecraft.util.SignatureUpdater$Output"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Instant, $Instant$$Type} from "java.time.Instant"
import {$LastSeenMessages, $LastSeenMessages$$Type} from "net.minecraft.network.chat.LastSeenMessages"
import {$Record} from "java.lang.Record"

export class $SignedMessageBody extends $Record {
static readonly "MAP_CODEC": $MapCodec<($SignedMessageBody)>

constructor(arg0: StringJS, arg1: $Instant$$Type, arg2: long, arg3: $LastSeenMessages$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "content"(): StringJS
public static "unsigned"(arg0: StringJS): $SignedMessageBody
public "pack"(arg0: $MessageSignatureCache$$Type): $SignedMessageBody$Packed
public "timeStamp"(): $Instant
public "salt"(): long
public "lastSeen"(): $LastSeenMessages
public "updateSignature"(arg0: $SignatureUpdater$Output$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignedMessageBody$$Type = ({"timeStamp"?: $Instant$$Type, "salt"?: long, "lastSeen"?: $LastSeenMessages$$Type, "content"?: StringJS}) | ([timeStamp?: $Instant$$Type, salt?: long, lastSeen?: $LastSeenMessages$$Type, content?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SignedMessageBody$$Original = $SignedMessageBody;}
declare module "net.minecraft.network.chat.ChatType" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ChatTypeDecoration, $ChatTypeDecoration$$Type} from "net.minecraft.network.chat.ChatTypeDecoration"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"
import {$ChatType$Bound} from "net.minecraft.network.chat.ChatType$Bound"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BootstrapContext$$Type} from "net.minecraft.data.worldgen.BootstrapContext"
import {$Record} from "java.lang.Record"

export class $ChatType extends $Record {
static readonly "SAY_COMMAND": $ResourceKey<($ChatType)>
static readonly "MSG_COMMAND_OUTGOING": $ResourceKey<($ChatType)>
static readonly "MSG_COMMAND_INCOMING": $ResourceKey<($ChatType)>
static readonly "CHAT": $ResourceKey<($ChatType)>
static readonly "TEAM_MSG_COMMAND_OUTGOING": $ResourceKey<($ChatType)>
static readonly "TEAM_MSG_COMMAND_INCOMING": $ResourceKey<($ChatType)>
static readonly "DIRECT_CODEC": $Codec<($ChatType)>
static readonly "EMOTE_COMMAND": $ResourceKey<($ChatType)>
static readonly "DIRECT_STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ChatType)>
static readonly "DEFAULT_CHAT_DECORATION": $ChatTypeDecoration
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($ChatType)>)>

constructor(arg0: $ChatTypeDecoration$$Type, arg1: $ChatTypeDecoration$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "bootstrap"(arg0: $BootstrapContext$$Type<($ChatType$$Type)>): void
public static "bind"(arg0: $ResourceKey$$Type<($ChatType)>, arg1: $Entity$$Type): $ChatType$Bound
public static "bind"(arg0: $ResourceKey$$Type<($ChatType)>, arg1: $RegistryAccess$$Type, arg2: $Component$$Type): $ChatType$Bound
public static "bind"(arg0: $ResourceKey$$Type<($ChatType)>, arg1: $CommandSourceStack$$Type): $ChatType$Bound
public "chat"(): $ChatTypeDecoration
public "narration"(): $ChatTypeDecoration
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.ChatType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.ChatTypeTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChatType$$Type = (Special.ChatType) | ({"chat"?: $ChatTypeDecoration$$Type, "narration"?: $ChatTypeDecoration$$Type}) | ([chat?: $ChatTypeDecoration$$Type, narration?: $ChatTypeDecoration$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChatType$$Original = $ChatType;}
declare module "net.minecraft.network.chat.Component" {
import {$FormattedText, $FormattedText$$Type, $FormattedText$$Interface} from "net.minecraft.network.chat.FormattedText"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$UUID$$Type} from "java.util.UUID"
import {$Style, $Style$$Type} from "net.minecraft.network.chat.Style"
import {$List, $List$$Type} from "java.util.List"
import {$ClickEvent$$Type} from "net.minecraft.network.chat.ClickEvent"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$FormattedText$StyledContentConsumer$$Type} from "net.minecraft.network.chat.FormattedText$StyledContentConsumer"
import {$Message$$Type, $Message$$Interface} from "com.mojang.brigadier.Message"
import {$FormattedCharSequence} from "net.minecraft.util.FormattedCharSequence"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$URI$$Type} from "java.net.URI"
import {$ComponentContents} from "net.minecraft.network.chat.ComponentContents"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$KubeColor$$Type} from "dev.latvian.mods.kubejs.color.KubeColor"
import {$Date$$Type} from "java.util.Date"
import {$FormattedText$ContentConsumer$$Type} from "net.minecraft.network.chat.FormattedText$ContentConsumer"
import {$DataSource$$Type} from "net.minecraft.network.chat.contents.DataSource"

export interface $Component$$Interface extends $Message$$Interface, $FormattedText$$Interface {
get "string"(): StringJS
get "contents"(): $ComponentContents
get "siblings"(): $List<($Component)>
get "visualOrderText"(): $FormattedCharSequence
get "style"(): $Style
}

export class $Component implements $Component$$Interface {
 "contains"(arg0: $Component$$Type): boolean
static "empty"(): $MutableComponent
 "copy"(): $MutableComponent
static "literal"(arg0: StringJS): $MutableComponent
 "visit"<T>(arg0: $FormattedText$StyledContentConsumer$$Type<(T)>, arg1: $Style$$Type): $Optional<(T)>
 "visit"<T>(arg0: $FormattedText$ContentConsumer$$Type<(T)>): $Optional<(T)>
 "getString"(arg0: integer): StringJS
 "getString"(): StringJS
 "getContents"(): $ComponentContents
static "selector"(arg0: StringJS, arg1: ($Component$$Type)?): $MutableComponent
static "score"(arg0: StringJS, arg1: StringJS): $MutableComponent
 "getSiblings"(): $List<($Component)>
static "translationArg"(arg0: $Date$$Type): $Component
static "translationArg"(arg0: $UUID$$Type): $Component
static "translationArg"(arg0: $ResourceLocation$$Type): $Component
static "translationArg"(arg0: $Message$$Type): $Component
static "translationArg"(arg0: $URI$$Type): $Component
static "translationArg"(arg0: $ChunkPos$$Type): $Component
static "translatableEscape"(arg0: StringJS, ...arg1: (any)[]): $MutableComponent
 "getVisualOrderText"(): $FormattedCharSequence
static "nullToEmpty"(arg0: StringJS): $Component
 "tryCollapseToString"(): StringJS
static "translatableWithFallback"(arg0: StringJS, arg1: StringJS, ...arg2: (any)[]): $MutableComponent
static "translatableWithFallback"(arg0: StringJS, arg1: StringJS): $MutableComponent
static "translatable"(arg0: StringJS, ...arg1: (any)[]): $MutableComponent
static "translatable"(arg0: StringJS): $MutableComponent
 "toFlatList"(): $List<($Component)>
 "toFlatList"(arg0: $Style$$Type): $List<($Component)>
static "keybind"(arg0: StringJS): $MutableComponent
static "nbt"(arg0: StringJS, arg1: boolean, arg2: ($Component$$Type)?, arg3: $DataSource$$Type): $MutableComponent
 "plainCopy"(): $MutableComponent
 "getStyle"(): $Style
static "of"(arg0: StringJS, arg1: $Style$$Type): $FormattedText
static "of"(arg0: StringJS): $FormattedText
static "composite"(arg0: $List$$Type<($FormattedText$$Type)>): $FormattedText
static "composite"(...arg0: ($FormattedText$$Type)[]): $FormattedText
}
export type ComponentObject = {"text"?: StringJS, "translate"?: Special.LangKey, "with"?: (any)[], "color"?: $KubeColor$$Type, "bold"?: boolean, "italic"?: boolean, "underlined"?: boolean, "strikethrough"?: boolean, "obfuscated"?: boolean, "insertion"?: StringJS, "font"?: StringJS, "click"?: $ClickEvent$$Type, "hover"?: $Component$$Type, "extra"?: ($Component$$Type)[]};
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Component$$Type = (StringJS) | (ComponentObject) | (($Component$$Type)[]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Component$$Original = $Component;}
declare module "net.minecraft.network.chat.ChatTypeDecoration" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Style, $Style$$Type} from "net.minecraft.network.chat.Style"
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ChatTypeDecoration$Parameter, $ChatTypeDecoration$Parameter$$Type} from "net.minecraft.network.chat.ChatTypeDecoration$Parameter"
import {$ChatType$Bound$$Type} from "net.minecraft.network.chat.ChatType$Bound"
import {$Record} from "java.lang.Record"

export class $ChatTypeDecoration extends $Record {
static readonly "CODEC": $Codec<($ChatTypeDecoration)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ChatTypeDecoration)>

constructor(arg0: StringJS, arg1: $List$$Type<($ChatTypeDecoration$Parameter$$Type)>, arg2: $Style$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "parameters"(): $List<($ChatTypeDecoration$Parameter)>
public "style"(): $Style
public "decorate"(arg0: $Component$$Type, arg1: $ChatType$Bound$$Type): $Component
public "translationKey"(): StringJS
public static "withSender"(arg0: StringJS): $ChatTypeDecoration
public static "teamMessage"(arg0: StringJS): $ChatTypeDecoration
public static "incomingDirectMessage"(arg0: StringJS): $ChatTypeDecoration
public static "outgoingDirectMessage"(arg0: StringJS): $ChatTypeDecoration
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChatTypeDecoration$$Type = ({"parameters"?: $List$$Type<($ChatTypeDecoration$Parameter$$Type)>, "translationKey"?: StringJS, "style"?: $Style$$Type}) | ([parameters?: $List$$Type<($ChatTypeDecoration$Parameter$$Type)>, translationKey?: StringJS, style?: $Style$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChatTypeDecoration$$Original = $ChatTypeDecoration;}
declare module "net.minecraft.network.chat.ChatTypeDecoration$Parameter" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ChatType$Bound$$Type} from "net.minecraft.network.chat.ChatType$Bound"

export class $ChatTypeDecoration$Parameter extends $Enum<($ChatTypeDecoration$Parameter)> implements $StringRepresentable$$Interface {
static readonly "TARGET": $ChatTypeDecoration$Parameter
static readonly "CODEC": $Codec<($ChatTypeDecoration$Parameter)>
static readonly "SENDER": $ChatTypeDecoration$Parameter
static readonly "CONTENT": $ChatTypeDecoration$Parameter
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($ChatTypeDecoration$Parameter)>

public static "values"(): ($ChatTypeDecoration$Parameter)[]
public static "valueOf"(arg0: StringJS): $ChatTypeDecoration$Parameter
public "select"(arg0: $Component$$Type, arg1: $ChatType$Bound$$Type): $Component
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChatTypeDecoration$Parameter$$Type = (("sender") | ("target") | ("content"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChatTypeDecoration$Parameter$$Original = $ChatTypeDecoration$Parameter;}
declare module "net.minecraft.network.chat.MessageSignature" {
import {$SignatureValidator$$Type} from "net.minecraft.util.SignatureValidator"
import {$MessageSignature$Packed} from "net.minecraft.network.chat.MessageSignature$Packed"
import {$MessageSignatureCache$$Type} from "net.minecraft.network.chat.MessageSignatureCache"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec} from "com.mojang.serialization.Codec"
import {$SignatureUpdater$$Type} from "net.minecraft.util.SignatureUpdater"
import {$ByteBuffer} from "java.nio.ByteBuffer"
import {$Record} from "java.lang.Record"

export class $MessageSignature extends $Record {
static readonly "BYTES": integer
static readonly "CODEC": $Codec<($MessageSignature)>

constructor(arg0: (byte)[])

public "asByteBuffer"(): $ByteBuffer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "bytes"(): (byte)[]
public static "write"(arg0: $FriendlyByteBuf$$Type, arg1: $MessageSignature$$Type): void
public static "read"(arg0: $FriendlyByteBuf$$Type): $MessageSignature
public "verify"(arg0: $SignatureValidator$$Type, arg1: $SignatureUpdater$$Type): boolean
public "pack"(arg0: $MessageSignatureCache$$Type): $MessageSignature$Packed
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MessageSignature$$Type = ({"bytes"?: (byte)[]}) | ([bytes?: (byte)[]]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MessageSignature$$Original = $MessageSignature;}
declare module "net.minecraft.network.chat.FormattedText" {
import {$Optional} from "java.util.Optional"
import {$Style$$Type} from "net.minecraft.network.chat.Style"
import {$List$$Type} from "java.util.List"
import {$FormattedText$ContentConsumer$$Type} from "net.minecraft.network.chat.FormattedText$ContentConsumer"
import {$FormattedText$StyledContentConsumer$$Type} from "net.minecraft.network.chat.FormattedText$StyledContentConsumer"
import {$Unit} from "net.minecraft.util.Unit"

export interface $FormattedText$$Interface {
get "string"(): StringJS
}

export class $FormattedText implements $FormattedText$$Interface {
static readonly "EMPTY": $FormattedText
static readonly "STOP_ITERATION": $Optional<($Unit)>

static "of"(arg0: StringJS, arg1: $Style$$Type): $FormattedText
static "of"(arg0: StringJS): $FormattedText
 "visit"<T>(arg0: $FormattedText$ContentConsumer$$Type<(T)>): $Optional<(T)>
 "visit"<T>(arg0: $FormattedText$StyledContentConsumer$$Type<(T)>, arg1: $Style$$Type): $Optional<(T)>
 "getString"(): StringJS
static "composite"(arg0: $List$$Type<($FormattedText$$Type)>): $FormattedText
static "composite"(...arg0: ($FormattedText$$Type)[]): $FormattedText
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FormattedText$$Type = ($FormattedText);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FormattedText$$Original = $FormattedText;}
declare module "net.minecraft.network.chat.SignedMessageValidator" {
import {$PlayerChatMessage, $PlayerChatMessage$$Type} from "net.minecraft.network.chat.PlayerChatMessage"
import {$Logger} from "org.slf4j.Logger"

export interface $SignedMessageValidator$$Interface {

(arg0: $PlayerChatMessage): $PlayerChatMessage$$Type
}

export class $SignedMessageValidator implements $SignedMessageValidator$$Interface {
static readonly "LOGGER": $Logger
static readonly "ACCEPT_UNSIGNED": $SignedMessageValidator
static readonly "REJECT_ALL": $SignedMessageValidator

 "updateAndValidate"(arg0: $PlayerChatMessage$$Type): $PlayerChatMessage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignedMessageValidator$$Type = ((arg0: $PlayerChatMessage) => $PlayerChatMessage$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SignedMessageValidator$$Original = $SignedMessageValidator;}
declare module "net.minecraft.network.chat.ChatType$Bound" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ChatType, $ChatType$$Type} from "net.minecraft.network.chat.ChatType"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $ChatType$Bound extends $Record {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ChatType$Bound)>

constructor(arg0: $Holder$$Type<($ChatType)>, arg1: $Component$$Type)
constructor(arg0: $Holder$$Type<($ChatType)>, arg1: $Component$$Type, arg2: ($Component$$Type)?)

public "name"(): $Component
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "targetName"(): $Optional<($Component)>
public "decorate"(arg0: $Component$$Type): $Component
public "chatType"(): $Holder<($ChatType)>
public "decorateNarration"(arg0: $Component$$Type): $Component
public "withTargetName"(arg0: $Component$$Type): $ChatType$Bound
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChatType$Bound$$Type = ({"targetName"?: ($Component$$Type)?, "chatType"?: $Holder$$Type<($ChatType)>, "name"?: $Component$$Type}) | ([targetName?: ($Component$$Type)?, chatType?: $Holder$$Type<($ChatType)>, name?: $Component$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChatType$Bound$$Original = $ChatType$Bound;}
declare module "net.minecraft.network.chat.HoverEvent$Action" {
import {$HoverEvent$EntityTooltipInfo} from "net.minecraft.network.chat.HoverEvent$EntityTooltipInfo"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$HoverEvent$LegacyConverter$$Type} from "net.minecraft.network.chat.HoverEvent$LegacyConverter"
import {$HoverEvent$ItemStackInfo} from "net.minecraft.network.chat.HoverEvent$ItemStackInfo"
import {$Component} from "net.minecraft.network.chat.Component"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$HoverEvent$TypedHoverEvent} from "net.minecraft.network.chat.HoverEvent$TypedHoverEvent"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $HoverEvent$Action<T> implements $StringRepresentable$$Interface {
readonly "codec": $MapCodec<($HoverEvent$TypedHoverEvent<(T)>)>
static readonly "CODEC": $Codec<($HoverEvent$Action<(never)>)>
static readonly "SHOW_ITEM": $HoverEvent$Action<($HoverEvent$ItemStackInfo)>
static readonly "SHOW_ENTITY": $HoverEvent$Action<($HoverEvent$EntityTooltipInfo)>
static readonly "UNSAFE_CODEC": $Codec<($HoverEvent$Action<(never)>)>
static readonly "SHOW_TEXT": $HoverEvent$Action<($Component)>
readonly "legacyCodec": $MapCodec<($HoverEvent$TypedHoverEvent<(T)>)>

constructor(arg0: StringJS, arg1: boolean, arg2: $Codec$$Type<(T)>, arg3: $HoverEvent$LegacyConverter$$Type<(T)>)

public "toString"(): StringJS
public "cast"(arg0: any): T
public "isAllowedFromServer"(): boolean
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "allowedFromServer"(): boolean
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HoverEvent$Action$$Type<T> = ($HoverEvent$Action<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HoverEvent$Action$$Original<T> = $HoverEvent$Action<(T)>;}
declare module "net.minecraft.network.chat.PlayerChatMessage" {
import {$SignatureValidator$$Type} from "net.minecraft.util.SignatureValidator"
import {$SignedMessageBody, $SignedMessageBody$$Type} from "net.minecraft.network.chat.SignedMessageBody"
import {$MessageSignature, $MessageSignature$$Type} from "net.minecraft.network.chat.MessageSignature"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Duration} from "java.time.Duration"
import {$PlayerInfo, $PlayerInfo$$Type} from "net.minecraft.client.multiplayer.PlayerInfo"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$FilterMask, $FilterMask$$Type} from "net.minecraft.network.chat.FilterMask"
import {$Ownable$$Interface} from "dzwdz.chat_heads.mixininterface.Ownable"
import {$SignatureUpdater$Output$$Type} from "net.minecraft.util.SignatureUpdater$Output"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$SignedMessageLink, $SignedMessageLink$$Type} from "net.minecraft.network.chat.SignedMessageLink"
import {$Instant, $Instant$$Type} from "java.time.Instant"
import {$Record} from "java.lang.Record"

export class $PlayerChatMessage extends $Record implements $Ownable$$Interface {
static readonly "MESSAGE_EXPIRES_AFTER_SERVER": $Duration
static readonly "MAP_CODEC": $MapCodec<($PlayerChatMessage)>
static readonly "MESSAGE_EXPIRES_AFTER_CLIENT": $Duration

constructor(arg0: $SignedMessageLink$$Type, arg1: $MessageSignature$$Type, arg2: $SignedMessageBody$$Type, arg3: $Component$$Type, arg4: $FilterMask$$Type)

public "signature"(): $MessageSignature
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "filter"(arg0: $FilterMask$$Type): $PlayerChatMessage
public "filter"(arg0: boolean): $PlayerChatMessage
public static "system"(arg0: StringJS): $PlayerChatMessage
public "verify"(arg0: $SignatureValidator$$Type): boolean
public "link"(): $SignedMessageLink
public "isSystem"(): boolean
public static "unsigned"(arg0: $UUID$$Type, arg1: StringJS): $PlayerChatMessage
public "timeStamp"(): $Instant
public "hasSignature"(): boolean
public "salt"(): long
public "unsignedContent"(): $Component
public "decoratedContent"(): $Component
public "signedContent"(): StringJS
public "hasSignatureFrom"(arg0: $UUID$$Type): boolean
public "filterMask"(): $FilterMask
public "signedBody"(): $SignedMessageBody
public "sender"(): $UUID
public "withUnsignedContent"(arg0: $Component$$Type): $PlayerChatMessage
public static "updateSignature"(arg0: $SignatureUpdater$Output$$Type, arg1: $SignedMessageLink$$Type, arg2: $SignedMessageBody$$Type): void
public "isFullyFiltered"(): boolean
public "removeUnsignedContent"(): $PlayerChatMessage
public "chatheads$getOwner"(): $PlayerInfo
public "chatheads$setOwner"(playerInfo: $PlayerInfo$$Type): void
public "hasExpiredServer"(arg0: $Instant$$Type): boolean
public "hasExpiredClient"(arg0: $Instant$$Type): boolean
public "removeSignature"(): $PlayerChatMessage
get "fullyFiltered"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerChatMessage$$Type = ({"unsignedContent"?: $Component$$Type, "signedBody"?: $SignedMessageBody$$Type, "link"?: $SignedMessageLink$$Type, "signature"?: $MessageSignature$$Type, "filterMask"?: $FilterMask$$Type}) | ([unsignedContent?: $Component$$Type, signedBody?: $SignedMessageBody$$Type, link?: $SignedMessageLink$$Type, signature?: $MessageSignature$$Type, filterMask?: $FilterMask$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerChatMessage$$Original = $PlayerChatMessage;}
declare module "net.minecraft.network.chat.ChatDecorator" {
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export interface $ChatDecorator$$Interface {

(arg0: $ServerPlayer, arg1: $Component): $Component$$Type
}

export class $ChatDecorator implements $ChatDecorator$$Interface {
static readonly "PLAIN": $ChatDecorator

 "decorate"(arg0: $ServerPlayer$$Type, arg1: $Component$$Type): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChatDecorator$$Type = ((arg0: $ServerPlayer, arg1: $Component) => $Component$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChatDecorator$$Original = $ChatDecorator;}
declare module "net.minecraft.network.chat.Style" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$HoverEvent, $HoverEvent$$Type} from "net.minecraft.network.chat.HoverEvent"
import {$ClickEvent, $ClickEvent$$Type} from "net.minecraft.network.chat.ClickEvent"
import {$TextColor, $TextColor$$Type} from "net.minecraft.network.chat.TextColor"
import {$ChatFormatting$$Type} from "net.minecraft.ChatFormatting"

export class $Style {
readonly "hoverEvent": $HoverEvent
readonly "clickEvent": $ClickEvent
static readonly "DEFAULT_FONT": $ResourceLocation
readonly "color": $TextColor
readonly "underlined": boolean
readonly "insertion": StringJS
readonly "bold": boolean
readonly "strikethrough": boolean
static readonly "EMPTY": $Style
readonly "italic": boolean
readonly "obfuscated": boolean
readonly "font": $ResourceLocation

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public "applyFormats"(...arg0: ($ChatFormatting$$Type)[]): $Style
public "applyFormat"(arg0: $ChatFormatting$$Type): $Style
public "withStrikethrough"(arg0: boolean): $Style
public "withHoverEvent"(arg0: $HoverEvent$$Type): $Style
public "isUnderlined"(): boolean
public "withUnderlined"(arg0: boolean): $Style
public "getClickEvent"(): $ClickEvent
public "isStrikethrough"(): boolean
public "withObfuscated"(arg0: boolean): $Style
public "getInsertion"(): StringJS
public "withInsertion"(arg0: StringJS): $Style
public "applyLegacyFormat"(arg0: $ChatFormatting$$Type): $Style
public "isObfuscated"(): boolean
public "getColor"(): $TextColor
public "isBold"(): boolean
public "isItalic"(): boolean
public "withFont"(arg0: $ResourceLocation$$Type): $Style
public "withItalic"(arg0: boolean): $Style
public "withColor"(arg0: $TextColor$$Type): $Style
public "withColor"(arg0: integer): $Style
public "withColor"(arg0: $ChatFormatting$$Type): $Style
public "withBold"(arg0: boolean): $Style
public "applyTo"(arg0: $Style$$Type): $Style
public "getHoverEvent"(): $HoverEvent
public "withClickEvent"(arg0: $ClickEvent$$Type): $Style
public "getFont"(): $ResourceLocation
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Style$$Type = ($Style);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Style$$Original = $Style;}
declare module "net.minecraft.network.chat.FormattedText$ContentConsumer" {
import {$Optional, $Optional$$Type} from "java.util.Optional"

export interface $FormattedText$ContentConsumer$$Interface<T> {

(arg0: StringJS): (T)?
}

export class $FormattedText$ContentConsumer<T> implements $FormattedText$ContentConsumer$$Interface {
 "accept"(arg0: StringJS): $Optional<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FormattedText$ContentConsumer$$Type<T> = ((arg0: StringJS) => (T)?);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FormattedText$ContentConsumer$$Original<T> = $FormattedText$ContentConsumer<(T)>;}
declare module "net.minecraft.network.chat.SignableCommand" {
import {$ParseResults$$Type} from "com.mojang.brigadier.ParseResults"
import {$List, $List$$Type} from "java.util.List"
import {$SignableCommand$Argument, $SignableCommand$Argument$$Type} from "net.minecraft.network.chat.SignableCommand$Argument"
import {$Record} from "java.lang.Record"

export class $SignableCommand<S> extends $Record {
constructor(arg0: $List$$Type<($SignableCommand$Argument$$Type<(S)>)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"<S>(arg0: $ParseResults$$Type<(S)>): $SignableCommand<(S)>
public "arguments"(): $List<($SignableCommand$Argument<(S)>)>
public "getArgument"(arg0: StringJS): $SignableCommand$Argument<(S)>
public static "hasSignableArguments"<S>(arg0: $ParseResults$$Type<(S)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignableCommand$$Type<S> = ({"arguments"?: $List$$Type<($SignableCommand$Argument$$Type<(S)>)>}) | ([arg?: $List$$Type<($SignableCommand$Argument$$Type<(S)>)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SignableCommand$$Original<S> = $SignableCommand<(S)>;}
declare module "net.minecraft.network.chat.FormattedText$StyledContentConsumer" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Style, $Style$$Type} from "net.minecraft.network.chat.Style"

export interface $FormattedText$StyledContentConsumer$$Interface<T> {

(arg0: $Style, arg1: StringJS): (T)?
}

export class $FormattedText$StyledContentConsumer<T> implements $FormattedText$StyledContentConsumer$$Interface {
 "accept"(arg0: $Style$$Type, arg1: StringJS): $Optional<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FormattedText$StyledContentConsumer$$Type<T> = ((arg0: $Style, arg1: StringJS) => (T)?);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FormattedText$StyledContentConsumer$$Original<T> = $FormattedText$StyledContentConsumer<(T)>;}
declare module "net.minecraft.network.chat.SignedMessageChain$Decoder" {
import {$SignedMessageBody, $SignedMessageBody$$Type} from "net.minecraft.network.chat.SignedMessageBody"
import {$MessageSignature, $MessageSignature$$Type} from "net.minecraft.network.chat.MessageSignature"
import {$PlayerChatMessage, $PlayerChatMessage$$Type} from "net.minecraft.network.chat.PlayerChatMessage"
import {$UUID$$Type} from "java.util.UUID"
import {$BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"

export interface $SignedMessageChain$Decoder$$Interface {

(arg0: $MessageSignature, arg1: $SignedMessageBody): $PlayerChatMessage$$Type
get "chainBroken"(): void
}

export class $SignedMessageChain$Decoder implements $SignedMessageChain$Decoder$$Interface {
static "unsigned"(arg0: $UUID$$Type, arg1: $BooleanSupplier$$Type): $SignedMessageChain$Decoder
 "unpack"(arg0: $MessageSignature$$Type, arg1: $SignedMessageBody$$Type): $PlayerChatMessage
 "setChainBroken"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignedMessageChain$Decoder$$Type = ((arg0: $MessageSignature, arg1: $SignedMessageBody) => $PlayerChatMessage$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SignedMessageChain$Decoder$$Original = $SignedMessageChain$Decoder;}
declare module "net.minecraft.network.chat.LastSeenMessages" {
import {$MessageSignatureCache$$Type} from "net.minecraft.network.chat.MessageSignatureCache"
import {$MessageSignature, $MessageSignature$$Type} from "net.minecraft.network.chat.MessageSignature"
import {$Codec} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$LastSeenMessages$Packed} from "net.minecraft.network.chat.LastSeenMessages$Packed"
import {$SignatureUpdater$Output$$Type} from "net.minecraft.util.SignatureUpdater$Output"
import {$Record} from "java.lang.Record"

export class $LastSeenMessages extends $Record {
static readonly "CODEC": $Codec<($LastSeenMessages)>
static readonly "LAST_SEEN_MESSAGES_MAX_LENGTH": integer
static "EMPTY": $LastSeenMessages

constructor(arg0: $List$$Type<($MessageSignature$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "entries"(): $List<($MessageSignature)>
public "pack"(arg0: $MessageSignatureCache$$Type): $LastSeenMessages$Packed
public "updateSignature"(arg0: $SignatureUpdater$Output$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LastSeenMessages$$Type = ({"entries"?: $List$$Type<($MessageSignature$$Type)>}) | ([entries?: $List$$Type<($MessageSignature$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LastSeenMessages$$Original = $LastSeenMessages;}
declare module "net.minecraft.network.chat.contents.DataSource" {
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$DataSource$Type} from "net.minecraft.network.chat.contents.DataSource$Type"
import {$Stream} from "java.util.stream.Stream"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"

export interface $DataSource$$Interface {
}

export class $DataSource implements $DataSource$$Interface {
static readonly "CODEC": $MapCodec<($DataSource)>

 "type"(): $DataSource$Type<(never)>
 "getData"(arg0: $CommandSourceStack$$Type): $Stream<($CompoundTag)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataSource$$Type = ($DataSource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DataSource$$Original = $DataSource;}
declare module "net.minecraft.network.chat.HoverEvent" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$HoverEvent$Action, $HoverEvent$Action$$Type} from "net.minecraft.network.chat.HoverEvent$Action"

export class $HoverEvent {
static readonly "CODEC": $Codec<($HoverEvent)>

constructor<T>(arg0: $HoverEvent$Action$$Type<(T)>, arg1: T)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getValue"<T>(arg0: $HoverEvent$Action$$Type<(T)>): T
public "getAction"(): $HoverEvent$Action<(never)>
get "action"(): $HoverEvent$Action<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HoverEvent$$Type = ($HoverEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HoverEvent$$Original = $HoverEvent;}
declare module "net.minecraft.network.chat.HoverEvent$TypedHoverEvent" {
import {$HoverEvent$Action$$Type} from "net.minecraft.network.chat.HoverEvent$Action"
import {$Record} from "java.lang.Record"

export class $HoverEvent$TypedHoverEvent<T> extends $Record {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HoverEvent$TypedHoverEvent$$Type<T> = ({"value"?: T, "action"?: $HoverEvent$Action$$Type<(T)>}) | ([value?: T, action?: $HoverEvent$Action$$Type<(T)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HoverEvent$TypedHoverEvent$$Original<T> = $HoverEvent$TypedHoverEvent<(T)>;}
declare module "net.minecraft.network.chat.ComponentContents$Type" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$ComponentContents} from "net.minecraft.network.chat.ComponentContents"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"

export class $ComponentContents$Type<T extends $ComponentContents> extends $Record implements $StringRepresentable$$Interface {
constructor(arg0: $MapCodec$$Type<(T)>, arg1: StringJS)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): StringJS
public "codec"(): $MapCodec<(T)>
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComponentContents$Type$$Type<T> = ({"id"?: StringJS, "codec"?: $MapCodec$$Type<(T)>}) | ([id?: StringJS, codec?: $MapCodec$$Type<(T)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ComponentContents$Type$$Original<T> = $ComponentContents$Type<(T)>;}
declare module "net.minecraft.network.chat.numbers.NumberFormat" {
import {$NumberFormatType} from "net.minecraft.network.chat.numbers.NumberFormatType"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"

export interface $NumberFormat$$Interface {
}

export class $NumberFormat implements $NumberFormat$$Interface {
 "type"(): $NumberFormatType<($NumberFormat)>
 "format"(arg0: integer): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NumberFormat$$Type = ($NumberFormat);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NumberFormat$$Original = $NumberFormat;}
declare module "net.minecraft.network.chat.ClickEvent$Action" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$DataResult} from "com.mojang.serialization.DataResult"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $ClickEvent$Action extends $Enum<($ClickEvent$Action)> implements $StringRepresentable$$Interface {
static readonly "CODEC": $MapCodec<($ClickEvent$Action)>
static readonly "UNSAFE_CODEC": $MapCodec<($ClickEvent$Action)>
static readonly "RUN_COMMAND": $ClickEvent$Action
static readonly "CHANGE_PAGE": $ClickEvent$Action
static readonly "COPY_TO_CLIPBOARD": $ClickEvent$Action
static readonly "SUGGEST_COMMAND": $ClickEvent$Action
static readonly "OPEN_FILE": $ClickEvent$Action
static readonly "OPEN_URL": $ClickEvent$Action

public static "values"(): ($ClickEvent$Action)[]
public static "valueOf"(arg0: StringJS): $ClickEvent$Action
public static "filterForSerialization"(arg0: $ClickEvent$Action$$Type): $DataResult<($ClickEvent$Action)>
public "isAllowedFromServer"(): boolean
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "allowedFromServer"(): boolean
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClickEvent$Action$$Type = (("open_url") | ("open_file") | ("run_command") | ("suggest_command") | ("change_page") | ("copy_to_clipboard"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClickEvent$Action$$Original = $ClickEvent$Action;}
declare module "net.minecraft.network.chat.TextColor" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$DataResult} from "com.mojang.serialization.DataResult"
import {$KubeColor$$Interface} from "dev.latvian.mods.kubejs.color.KubeColor"
import {$ChatFormatting$$Type} from "net.minecraft.ChatFormatting"

export class $TextColor implements $KubeColor$$Interface {
static readonly "CODEC": $Codec<($TextColor)>

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getValue"(): integer
public static "fromLegacyFormat"(arg0: $ChatFormatting$$Type): $TextColor
public "formatValue"(): StringJS
public static "parseColor"(arg0: StringJS): $DataResult<($TextColor)>
public "serialize"(): StringJS
public "getArgb"(): integer
public "serialize"(): StringJS
public static "fromRgb"(arg0: integer): $TextColor
public "getRgb"(): integer
public "specialEquals"(o: any, shallow: boolean): boolean
public "createTextColor"(): $TextColor
public "toHexString"(): StringJS
public "getFireworkRGB"(): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "value"(): integer
get "argb"(): integer
get "rgb"(): integer
get "fireworkRGB"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextColor$$Type = (("") | ("light_blue_dye") | ("blue_dye") | ("purple_dye") | ("dark_red") | ("lightgraydye") | ("dark_aqua") | ("none") | ("green_dye") | ("blackdye") | ("dark_blue") | ("red") | ("pink_dye") | ("aqua") | ("white") | ("white_dye") | ("dark_gray") | ("light_purple") | ("brown_dye") | ("black") | ("darkpurple") | ("lightbluedye") | ("limedye") | ("magenta_dye") | ("-") | ("lime_dye") | ("yellowdye") | ("graydye") | ("purpledye") | ("dark_purple") | ("orange_dye") | ("darkgray") | ("browndye") | ("yellow") | ("bluedye") | ("pinkdye") | ("cyandye") | ("gold") | ("gray") | ("blue") | ("darkblue") | ("transparent") | ("red_dye") | ("darkred") | ("greendye") | ("reddye") | ("gray_dye") | ("orangedye") | ("yellow_dye") | ("black_dye") | ("magentadye") | ("green") | ("light_gray_dye") | ("darkgreen") | ("dark_green") | ("lightpurple") | ("darkaqua") | ("cyan_dye") | ("whitedye")) | (`#${string}`) | (integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextColor$$Original = $TextColor;}
