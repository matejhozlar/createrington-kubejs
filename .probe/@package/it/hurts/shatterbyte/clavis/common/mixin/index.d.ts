import { $NumberProvider } from "@package/net/minecraft/world/level/storage/loot/providers/number";
import { $ItemStack, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $LootPoolEntryContainer } from "@package/net/minecraft/world/level/storage/loot/entries";
import { $LootItemFunction } from "@package/net/minecraft/world/level/storage/loot/functions";
import { $List, $List_, $Map } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Container } from "@package/net/minecraft/world";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $LootItemCondition } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $Class } from "@package/java/lang";
import { $ArgumentTypeInfo } from "@package/net/minecraft/commands/synchronization";
import { $LootContextParamSet } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $LootContext, $LootPool } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/it/hurts/shatterbyte/clavis/common/mixin" {
    export class $MouseHandlerAccessor {
    }
    export interface $MouseHandlerAccessor {
        setYpos(arg0: number): void;
        setXpos(arg0: number): void;
        getXpos(): number;
        getYpos(): number;
        invokeOnMove(arg0: number, arg1: number, arg2: number): void;
    }
    export class $LootPoolSingletonContainerAccessor {
    }
    export interface $LootPoolSingletonContainerAccessor {
        getFunctions(): $List<$LootItemFunction>;
        get functions(): $List<$LootItemFunction>;
    }
    /**
     * Values that may be interpreted as {@link $LootPoolSingletonContainerAccessor}.
     */
    export type $LootPoolSingletonContainerAccessor_ = (() => $List_<$LootItemFunction>);
    export class $LootTableAccessor {
    }
    export interface $LootTableAccessor {
        getParamSet(): $LootContextParamSet;
        getPools(): $List<$LootPool>;
        invokeGetRandomItems(arg0: $LootContext): $ObjectArrayList<$ItemStack>;
        invokeGetAvailableSlots(arg0: $Container, arg1: $RandomSource): $List<number>;
        invokeShuffleAndSplitItems(arg0: $ObjectArrayList<$ItemStack_>, arg1: number, arg2: $RandomSource): void;
        getFunctions(): $List<$LootItemFunction>;
        getRandomSequence(): ($ResourceLocation) | undefined;
        get paramSet(): $LootContextParamSet;
        get pools(): $List<$LootPool>;
        get functions(): $List<$LootItemFunction>;
        get randomSequence(): ($ResourceLocation) | undefined;
    }
    export class $LootItemAccessor {
    }
    export interface $LootItemAccessor {
        getItem(): $Holder<$Item>;
        get item(): $Holder<$Item>;
    }
    /**
     * Values that may be interpreted as {@link $LootItemAccessor}.
     */
    export type $LootItemAccessor_ = (() => $Holder_<$Item>);
    export class $ArgumentTypesAccessor {
        static getByClassMap(): $Map<$Class<never>, $ArgumentTypeInfo<never, never>>;
        static get byClassMap(): $Map<$Class<never>, $ArgumentTypeInfo<never, never>>;
    }
    export interface $ArgumentTypesAccessor {
    }
    export class $LootPoolAccessor {
    }
    export interface $LootPoolAccessor {
        clavis$getConditions(): $List<$LootItemCondition>;
        clavis$getFunctions(): $List<$LootItemFunction>;
        clavis$getBonusRolls(): $NumberProvider;
        clavis$getEntries(): $List<$LootPoolEntryContainer>;
        clavis$getRolls(): $NumberProvider;
    }
}
