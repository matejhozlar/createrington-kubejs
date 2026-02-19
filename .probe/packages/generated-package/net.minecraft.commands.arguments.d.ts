declare module "net.minecraft.commands.arguments.ArgumentSignatures$Entry" {
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$MessageSignature, $MessageSignature$$Type} from "net.minecraft.network.chat.MessageSignature"
import {$Record} from "java.lang.Record"

export class $ArgumentSignatures$Entry extends $Record {
constructor(arg0: $FriendlyByteBuf$$Type)
constructor(arg0: StringJS, arg1: $MessageSignature$$Type)

public "signature"(): $MessageSignature
public "name"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "write"(arg0: $FriendlyByteBuf$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArgumentSignatures$Entry$$Type = ({"signature"?: $MessageSignature$$Type, "name"?: StringJS}) | ([signature?: $MessageSignature$$Type, name?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArgumentSignatures$Entry$$Original = $ArgumentSignatures$Entry;}
declare module "net.minecraft.commands.arguments.ArgumentSignatures$Signer" {
import {$MessageSignature, $MessageSignature$$Type} from "net.minecraft.network.chat.MessageSignature"

export interface $ArgumentSignatures$Signer$$Interface {

(arg0: StringJS): $MessageSignature$$Type
}

export class $ArgumentSignatures$Signer implements $ArgumentSignatures$Signer$$Interface {
 "sign"(arg0: StringJS): $MessageSignature
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArgumentSignatures$Signer$$Type = ((arg0: StringJS) => $MessageSignature$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArgumentSignatures$Signer$$Original = $ArgumentSignatures$Signer;}
declare module "net.minecraft.commands.arguments.EntityAnchorArgument$Anchor" {
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$Enum} from "java.lang.Enum"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"

export class $EntityAnchorArgument$Anchor extends $Enum<($EntityAnchorArgument$Anchor)> {
static readonly "EYES": $EntityAnchorArgument$Anchor
static readonly "FEET": $EntityAnchorArgument$Anchor

public static "values"(): ($EntityAnchorArgument$Anchor)[]
public static "valueOf"(arg0: StringJS): $EntityAnchorArgument$Anchor
public "apply"(arg0: $CommandSourceStack$$Type): $Vec3
public "apply"(arg0: $Entity$$Type): $Vec3
public static "getByName"(arg0: StringJS): $EntityAnchorArgument$Anchor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityAnchorArgument$Anchor$$Type = (("feet") | ("eyes"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityAnchorArgument$Anchor$$Original = $EntityAnchorArgument$Anchor;}
declare module "net.minecraft.commands.arguments.ArgumentSignatures" {
import {$SignableCommand$$Type} from "net.minecraft.network.chat.SignableCommand"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$ArgumentSignatures$Signer$$Type} from "net.minecraft.commands.arguments.ArgumentSignatures$Signer"
import {$ArgumentSignatures$Entry, $ArgumentSignatures$Entry$$Type} from "net.minecraft.commands.arguments.ArgumentSignatures$Entry"
import {$Record} from "java.lang.Record"

export class $ArgumentSignatures extends $Record {
static readonly "EMPTY": $ArgumentSignatures

constructor(arg0: $FriendlyByteBuf$$Type)
constructor(arg0: $List$$Type<($ArgumentSignatures$Entry$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "write"(arg0: $FriendlyByteBuf$$Type): void
public "entries"(): $List<($ArgumentSignatures$Entry)>
public static "signCommand"(arg0: $SignableCommand$$Type<(never)>, arg1: $ArgumentSignatures$Signer$$Type): $ArgumentSignatures
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArgumentSignatures$$Type = ({"entries"?: $List$$Type<($ArgumentSignatures$Entry$$Type)>}) | ([entries?: $List$$Type<($ArgumentSignatures$Entry$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArgumentSignatures$$Original = $ArgumentSignatures;}
declare module "net.minecraft.commands.arguments.selector.EntitySelector" {
import {$UUID$$Type} from "java.util.UUID"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$List, $List$$Type} from "java.util.List"
import {$MinMaxBounds$Doubles$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Function$$Type} from "java.util.function.Function"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$ServerPlayer} from "net.minecraft.server.level.ServerPlayer"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $EntitySelector {
static readonly "ORDER_ARBITRARY": $BiConsumer<($Vec3), ($List<($Entity)>)>
readonly "contextFreePredicates": $List<($Predicate<($Entity)>)>
static readonly "INFINITE": integer

constructor(arg0: integer, arg1: boolean, arg2: boolean, arg3: $List$$Type<($Predicate$$Type<($Entity$$Type)>)>, arg4: $MinMaxBounds$Doubles$$Type, arg5: $Function$$Type<($Vec3), ($Vec3$$Type)>, arg6: $AABB$$Type, arg7: $BiConsumer$$Type<($Vec3), ($List<($Entity)>)>, arg8: boolean, arg9: StringJS, arg10: $UUID$$Type, arg11: $EntityType$$Type<(never)>, arg12: boolean)

public "usesSelector"(): boolean
public "isWorldLimited"(): boolean
public "includesEntities"(): boolean
public "isSelfSelector"(): boolean
public "findSingleEntity"(arg0: $CommandSourceStack$$Type): $Entity
public "getMaxResults"(): integer
public "findPlayers"(arg0: $CommandSourceStack$$Type): $List<($ServerPlayer)>
public "findEntities"(arg0: $CommandSourceStack$$Type): $List<($Entity)>
public "findSinglePlayer"(arg0: $CommandSourceStack$$Type): $ServerPlayer
public static "joinNames"(arg0: $List$$Type<($Entity$$Type)>): $Component
get "worldLimited"(): boolean
get "selfSelector"(): boolean
get "maxResults"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntitySelector$$Type = ($EntitySelector);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntitySelector$$Original = $EntitySelector;}
