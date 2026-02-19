declare module "fuzs.puzzleslib.neoforge.mixin.client.accessor.ItemColorsNeoForgeAccessor" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ItemColor, $ItemColor$$Type} from "net.minecraft.client.color.item.ItemColor"

export interface $ItemColorsNeoForgeAccessor$$Interface {

(): $Map$$Type<($Item$$Type), ($ItemColor$$Type)>
}

export class $ItemColorsNeoForgeAccessor implements $ItemColorsNeoForgeAccessor$$Interface {
 "puzzleslib$getItemColors"(): $Map<($Item), ($ItemColor)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemColorsNeoForgeAccessor$$Type = (() => $Map$$Type<($Item$$Type), ($ItemColor$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemColorsNeoForgeAccessor$$Original = $ItemColorsNeoForgeAccessor;}
declare module "fuzs.puzzleslib.neoforge.mixin.client.accessor.BlockColorsNeoForgeAccessor" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"

export interface $BlockColorsNeoForgeAccessor$$Interface {

(): $Map$$Type<($Block$$Type), ($BlockColor$$Type)>
}

export class $BlockColorsNeoForgeAccessor implements $BlockColorsNeoForgeAccessor$$Interface {
 "puzzleslib$getBlockColors"(): $Map<($Block), ($BlockColor)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockColorsNeoForgeAccessor$$Type = (() => $Map$$Type<($Block$$Type), ($BlockColor$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockColorsNeoForgeAccessor$$Original = $BlockColorsNeoForgeAccessor;}
declare module "fuzs.puzzleslib.neoforge.mixin.accessor.NewRegistryEventNeoForgeAccessor" {
import {$NewRegistryEvent} from "net.neoforged.neoforge.registries.NewRegistryEvent"

export interface $NewRegistryEventNeoForgeAccessor$$Interface {

(): void
}

export class $NewRegistryEventNeoForgeAccessor implements $NewRegistryEventNeoForgeAccessor$$Interface {
static "puzzleslib$callInit"(): $NewRegistryEvent
 "puzzleslib$callFill"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NewRegistryEventNeoForgeAccessor$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NewRegistryEventNeoForgeAccessor$$Original = $NewRegistryEventNeoForgeAccessor;}
