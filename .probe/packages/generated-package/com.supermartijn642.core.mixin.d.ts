declare module "com.supermartijn642.core.mixin.BlockPropertiesAccessor" {
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"

export interface $BlockPropertiesAccessor$$Interface {
get "lootTableSupplier"(): $Supplier<($ResourceKey<($LootTable)>)>
set "lootTableSupplier"(value: $Supplier$$Type<($ResourceKey$$Type<($LootTable$$Type)>)>)
}

export class $BlockPropertiesAccessor implements $BlockPropertiesAccessor$$Interface {
 "getLootTableSupplier"(): $Supplier<($ResourceKey<($LootTable)>)>
 "setLootTableSupplier"(supplier: $Supplier$$Type<($ResourceKey$$Type<($LootTable$$Type)>)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPropertiesAccessor$$Type = ($BlockPropertiesAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockPropertiesAccessor$$Original = $BlockPropertiesAccessor;}
