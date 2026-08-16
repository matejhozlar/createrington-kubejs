import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Event } from "@package/net/neoforged/bus/api";
import { $EquipmentSlot, $EquipmentSlot_ } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";

declare module "@package/com/leclowndu93150/baguettelib/event/inventory" {
    export class $InventoryUpdateEvent$Armor extends $InventoryUpdateEvent {
        getEquipmentSlot(): $EquipmentSlot;
        constructor(arg0: $Player, arg1: $EquipmentSlot_, arg2: number, arg3: $ItemStack_, arg4: $ItemStack_);
        get equipmentSlot(): $EquipmentSlot;
    }
    export class $InventoryUpdateEvent$Hands extends $InventoryUpdateEvent {
        getEquipmentSlot(): $EquipmentSlot;
        constructor(arg0: $Player, arg1: $EquipmentSlot_, arg2: number, arg3: $ItemStack_, arg4: $ItemStack_);
        get equipmentSlot(): $EquipmentSlot;
    }
    export class $InventoryUpdateEvent$Offhand extends $InventoryUpdateEvent {
        constructor(arg0: $Player, arg1: number, arg2: $ItemStack_, arg3: $ItemStack_);
    }
    export class $InventoryUpdateEvent$Hotbar extends $InventoryUpdateEvent {
        constructor(arg0: $Player, arg1: number, arg2: $ItemStack_, arg3: $ItemStack_);
    }
    export class $InventoryUpdateEvent extends $Event {
        getSlot(): number;
        getPlayer(): $Player;
        getOldStack(): $ItemStack;
        getNewStack(): $ItemStack;
        get slot(): number;
        get player(): $Player;
        get oldStack(): $ItemStack;
        get newStack(): $ItemStack;
    }
    export class $InventoryUpdateEvent$All extends $InventoryUpdateEvent {
        constructor(arg0: $Player, arg1: number, arg2: $ItemStack_, arg3: $ItemStack_);
    }
    export class $InventoryUpdateEvent$MainInventory extends $InventoryUpdateEvent {
        constructor(arg0: $Player, arg1: number, arg2: $ItemStack_, arg3: $ItemStack_);
    }
}
