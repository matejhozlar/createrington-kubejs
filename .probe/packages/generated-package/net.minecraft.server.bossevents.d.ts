declare module "net.minecraft.server.bossevents.CustomBossEvent" {
import {$ServerBossEvent} from "net.minecraft.server.level.ServerBossEvent"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection$$Type} from "java.util.Collection"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$UUID$$Type} from "java.util.UUID"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $CustomBossEvent extends $ServerBossEvent {
constructor(arg0: $ResourceLocation$$Type, arg1: $Component$$Type)

public "removeAllPlayers"(): void
public static "load"(arg0: $CompoundTag$$Type, arg1: $ResourceLocation$$Type, arg2: $HolderLookup$Provider$$Type): $CustomBossEvent
public "getValue"(): integer
public "save"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "setValue"(arg0: integer): void
public "getDisplayName"(): $Component
public "getMax"(): integer
public "addPlayer"(arg0: $ServerPlayer$$Type): void
public "onPlayerDisconnect"(arg0: $ServerPlayer$$Type): void
public "removePlayer"(arg0: $ServerPlayer$$Type): void
public "setPlayers"(arg0: $Collection$$Type<($ServerPlayer$$Type)>): boolean
public "onPlayerConnect"(arg0: $ServerPlayer$$Type): void
public "setMax"(arg0: integer): void
public "getTextId"(): $ResourceLocation
public "addOfflinePlayer"(arg0: $UUID$$Type): void
get "value"(): integer
set "value"(value: integer)
get "displayName"(): $Component
get "max"(): integer
set "players"(value: $Collection$$Type<($ServerPlayer$$Type)>)
set "max"(value: integer)
get "textId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomBossEvent$$Type = ($CustomBossEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomBossEvent$$Original = $CustomBossEvent;}
declare module "net.minecraft.server.bossevents.CustomBossEvents" {
import {$CustomBossEvent, $CustomBossEvent$$Type} from "net.minecraft.server.bossevents.CustomBossEvent"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Collection} from "java.util.Collection"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $CustomBossEvents {
constructor()

public "getIds"(): $Collection<($ResourceLocation)>
public "remove"(arg0: $CustomBossEvent$$Type): void
public "get"(arg0: $ResourceLocation$$Type): $CustomBossEvent
public "load"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "save"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "create"(arg0: $ResourceLocation$$Type, arg1: $Component$$Type): $CustomBossEvent
public "getEvents"(): $Collection<($CustomBossEvent)>
public "onPlayerDisconnect"(arg0: $ServerPlayer$$Type): void
public "onPlayerConnect"(arg0: $ServerPlayer$$Type): void
get "ids"(): $Collection<($ResourceLocation)>
get "events"(): $Collection<($CustomBossEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomBossEvents$$Type = ($CustomBossEvents);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomBossEvents$$Original = $CustomBossEvents;}
