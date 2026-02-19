declare module "xaero.pac.common.entity.IItemEntity" {
import {$UUID, $UUID$$Type} from "java.util.UUID"

export interface $IItemEntity$$Interface {
set "xaero_OPAC_throwerAccessor"(value: $UUID$$Type)
get "xaero_OPAC_throwerAccessor"(): $UUID
get "xaero_OPAC_target"(): $UUID
get "xaero_OPAC_thrower"(): $UUID
}

export class $IItemEntity implements $IItemEntity$$Interface {
 "setXaero_OPAC_throwerAccessor"(arg0: $UUID$$Type): void
 "getXaero_OPAC_throwerAccessor"(): $UUID
 "getXaero_OPAC_target"(): $UUID
 "getXaero_OPAC_thrower"(): $UUID
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemEntity$$Type = ($IItemEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IItemEntity$$Original = $IItemEntity;}
declare module "xaero.pac.common.entity.EntityData" {
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$IEntity$$Type} from "xaero.pac.common.entity.IEntity"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $EntityData {
constructor()

public static "from"(arg0: $Entity$$Type): $EntityData
public static "from"(arg0: $IEntity$$Type): $EntityData
public "setShouldCheckItemUseTick"(arg0: boolean): void
public "setLastChunkEntryDimension"(arg0: $ResourceKey$$Type<($Level)>): void
public "getShouldCheckItemUseTick"(): boolean
public "getLastChunkEntryDimension"(): $ResourceKey<($Level)>
public "getLootOwner"(): $UUID
public "setLootOwner"(arg0: $UUID$$Type): void
public "getDeadPlayer"(): $UUID
public "setDeadPlayer"(arg0: $UUID$$Type): void
set "shouldCheckItemUseTick"(value: boolean)
set "lastChunkEntryDimension"(value: $ResourceKey$$Type<($Level)>)
get "shouldCheckItemUseTick"(): boolean
get "lastChunkEntryDimension"(): $ResourceKey<($Level)>
get "lootOwner"(): $UUID
set "lootOwner"(value: $UUID$$Type)
get "deadPlayer"(): $UUID
set "deadPlayer"(value: $UUID$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityData$$Type = ($EntityData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityData$$Original = $EntityData;}
declare module "xaero.pac.common.entity.IEntity" {
import {$EntityData, $EntityData$$Type} from "xaero.pac.common.entity.EntityData"

export interface $IEntity$$Interface {
get "xaero_OPAC_data"(): $EntityData
set "xaero_OPAC_data"(value: $EntityData$$Type)
}

export class $IEntity implements $IEntity$$Interface {
 "getXaero_OPAC_data"(): $EntityData
 "setXaero_OPAC_data"(arg0: $EntityData$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEntity$$Type = ($IEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEntity$$Original = $IEntity;}
