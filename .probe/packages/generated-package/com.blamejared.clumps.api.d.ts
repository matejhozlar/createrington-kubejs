declare module "com.blamejared.clumps.api.events.IRepairEvent" {
import {$Player} from "net.minecraft.world.entity.player.Player"

export interface $IRepairEvent$$Interface {
get "value"(): integer
set "value"(value: integer)
get "player"(): $Player
}

export class $IRepairEvent implements $IRepairEvent$$Interface {
 "getValue"(): integer
 "setValue"(arg0: integer): void
 "getPlayer"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRepairEvent$$Type = ($IRepairEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IRepairEvent$$Original = $IRepairEvent;}
declare module "com.blamejared.clumps.api.events.RepairEvent" {
import {$IRepairEvent$$Interface} from "com.blamejared.clumps.api.events.IRepairEvent"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Event} from "net.neoforged.bus.api.Event"

export class $RepairEvent extends $Event implements $IRepairEvent$$Interface {
constructor(arg0: $Player$$Type, arg1: integer)

public "getValue"(): integer
public "setValue"(arg0: integer): void
public "getPlayer"(): $Player
get "value"(): integer
set "value"(value: integer)
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RepairEvent$$Type = ($RepairEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RepairEvent$$Original = $RepairEvent;}
declare module "com.blamejared.clumps.api.events.IValueEvent" {
import {$Player} from "net.minecraft.world.entity.player.Player"

export interface $IValueEvent$$Interface {
get "value"(): integer
set "value"(value: integer)
get "player"(): $Player
}

export class $IValueEvent implements $IValueEvent$$Interface {
 "getValue"(): integer
 "setValue"(arg0: integer): void
 "getPlayer"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IValueEvent$$Type = ($IValueEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IValueEvent$$Original = $IValueEvent;}
declare module "com.blamejared.clumps.api.events.ValueEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Event} from "net.neoforged.bus.api.Event"
import {$IValueEvent$$Interface} from "com.blamejared.clumps.api.events.IValueEvent"

export class $ValueEvent extends $Event implements $IValueEvent$$Interface {
constructor(arg0: $Player$$Type, arg1: integer)

public "getValue"(): integer
public "setValue"(arg0: integer): void
public "getPlayer"(): $Player
get "value"(): integer
set "value"(value: integer)
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueEvent$$Type = ($ValueEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ValueEvent$$Original = $ValueEvent;}
