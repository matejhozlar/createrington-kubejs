declare module "com.blackgear.platform.common.data.neoforge.LootPoolAccess" {
import {$LootPoolEntryContainer, $LootPoolEntryContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$List, $List$$Type} from "java.util.List"

export interface $LootPoolAccess$$Interface {
get "entries"(): $List<($LootPoolEntryContainer)>
set "entries"(value: $List$$Type<($LootPoolEntryContainer$$Type)>)
}

export class $LootPoolAccess implements $LootPoolAccess$$Interface {
 "getEntries"(): $List<($LootPoolEntryContainer)>
 "setEntries"(arg0: $List$$Type<($LootPoolEntryContainer$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootPoolAccess$$Type = ($LootPoolAccess);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootPoolAccess$$Original = $LootPoolAccess;}
