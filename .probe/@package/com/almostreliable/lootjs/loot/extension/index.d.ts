import { $MinecraftServer } from "@package/net/minecraft/server";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $LootPoolEntryContainer } from "@package/net/minecraft/world/level/storage/loot/entries";
import { $LootItemFunction } from "@package/net/minecraft/world/level/storage/loot/functions";
import { $List, $Map, $List_ } from "@package/java/util";
import { $LootFunctionList, $LootConditionList, $LootEntryList } from "@package/com/almostreliable/lootjs/loot";
import { $Consumer_, $Consumer } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LootType, $LootType_ } from "@package/com/almostreliable/lootjs/core";
import { $DebugInfo } from "@package/com/almostreliable/lootjs/util";
import { $Object } from "@package/java/lang";
import { $LootContextParamSet } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $LootTable, $LootPool, $LootContext } from "@package/net/minecraft/world/level/storage/loot";
import { $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/com/almostreliable/lootjs/loot/extension" {
    export class $LootItemFunctionExtension {
    }
    export interface $LootItemFunctionExtension {
        when(arg0: $Consumer_<$LootConditionList>): $LootItemFunction;
    }
    /**
     * Values that may be interpreted as {@link $LootItemFunctionExtension}.
     */
    export type $LootItemFunctionExtension_ = ((arg0: $Consumer<$LootConditionList>) => $LootItemFunction);
    export class $LootParamsExtension {
    }
    export interface $LootParamsExtension {
        setType(arg0: $LootType_): void;
        getType(): $LootType;
    }
    export class $LootContextExtension {
        static cast(arg0: $LootContext): $LootContextExtension;
    }
    export interface $LootContextExtension {
        getAttackingEntity(): $Entity;
        getKillerPlayer(): $ServerPlayer;
        getExplosionRadius(): number;
        getDamageSource(): $DamageSource;
        isType(arg0: $LootType_): boolean;
        isExploded(): boolean;
        getServer(): $MinecraftServer;
        getTool(): $ItemStack;
        getPosition(): $Vec3;
        getEntity(): $Entity;
        self(): $LootContext;
        getId(): $ResourceLocation;
        getType(): $LootType;
        getData(): $Map<string, $Object>;
        get attackingEntity(): $Entity;
        get killerPlayer(): $ServerPlayer;
        get explosionRadius(): number;
        get damageSource(): $DamageSource;
        get exploded(): boolean;
        get server(): $MinecraftServer;
        get tool(): $ItemStack;
        get position(): $Vec3;
        get entity(): $Entity;
        get id(): $ResourceLocation;
        get data(): $Map<string, $Object>;
    }
    export class $LootTableExtension {
        static cast(arg0: $LootTable): $LootTableExtension;
    }
    export interface $LootTableExtension {
        lootjs$getRandomSequence(): $ResourceLocation;
        lootjs$setRandomSequence(arg0: $ResourceLocation_ | null): void;
        lootjs$createFunctionList(): $LootFunctionList;
        lootjs$getParamSet(): $LootContextParamSet;
        lootjs$setParamSet(arg0: $LootContextParamSet): void;
        lootjs$setPools(arg0: $List_<$LootPool>): void;
        lootjs$getPools(): $List<$LootPool>;
    }
    export class $CompositeEntryBaseExtension {
    }
    export interface $CompositeEntryBaseExtension {
        lootjs$getEntries(): $List<$LootPoolEntryContainer>;
    }
    export class $LootPoolExtension {
        static cast(arg0: $LootPool): $LootPoolExtension;
    }
    export interface $LootPoolExtension {
        lootjs$asVanillaPool(): $LootPool;
        lootjs$getConditions(): $LootConditionList;
        lootjs$getFunctions(): $LootFunctionList;
        lootjs$collectDebugInfo(arg0: $DebugInfo): void;
        lootjs$getEntries(): $LootEntryList;
        lootjs$setName(arg0: string): void;
    }
}
