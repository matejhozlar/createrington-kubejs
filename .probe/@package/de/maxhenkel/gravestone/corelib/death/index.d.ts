import { $HolderLookup$Provider, $BlockPos, $NonNullList } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Event } from "@package/net/neoforged/bus/api";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $UUID, $Collection_ } from "@package/java/util";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/de/maxhenkel/gravestone/corelib/death" {
    export class $PlayerDeathEvent extends $Event {
        getSource(): $DamageSource;
        getPlayer(): $ServerPlayer;
        getDeath(): $Death;
        storeDeath(): void;
        removeDrops(): void;
        constructor(arg0: $Death, arg1: $ServerPlayer, arg2: $DamageSource_);
        get source(): $DamageSource;
        get player(): $ServerPlayer;
        get death(): $Death;
    }
    export class $Death {
        getId(): $UUID;
        getTimestamp(): number;
        getDimension(): string;
        getAllItems(): $NonNullList<$ItemStack>;
        getPlayerUUID(): $UUID;
        getArmorInventory(): $NonNullList<$ItemStack>;
        getAdditionalItems(): $NonNullList<$ItemStack>;
        getMainInventory(): $NonNullList<$ItemStack>;
        getPlayerName(): string;
        getPosY(): number;
        getPosX(): number;
        getEquipment(): $NonNullList<$ItemStack>;
        getExperience(): number;
        getModel(): number;
        static fromPlayer(arg0: $Player): $Death;
        getPosZ(): number;
        getOffHandInventory(): $NonNullList<$ItemStack>;
        getBlockPos(): $BlockPos;
        static fromNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $Death;
        toNBT(arg0: $HolderLookup$Provider, arg1: boolean): $CompoundTag;
        toNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        processDrops(arg0: $Collection_<$ItemEntity>): void;
        get id(): $UUID;
        get timestamp(): number;
        get dimension(): string;
        get allItems(): $NonNullList<$ItemStack>;
        get playerUUID(): $UUID;
        get armorInventory(): $NonNullList<$ItemStack>;
        get additionalItems(): $NonNullList<$ItemStack>;
        get mainInventory(): $NonNullList<$ItemStack>;
        get playerName(): string;
        get posY(): number;
        get posX(): number;
        get equipment(): $NonNullList<$ItemStack>;
        get experience(): number;
        get model(): number;
        get posZ(): number;
        get offHandInventory(): $NonNullList<$ItemStack>;
        get blockPos(): $BlockPos;
    }
}
