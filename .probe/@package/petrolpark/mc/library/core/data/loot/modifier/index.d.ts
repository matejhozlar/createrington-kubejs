import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LootPoolEntryContainer } from "@package/net/minecraft/world/level/storage/loot/entries";
import { $LootItemCondition } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $LootItemFunction } from "@package/net/minecraft/world/level/storage/loot/functions";
import { $ICondition } from "@package/net/neoforged/neoforge/common/conditions";
import { $Record, $Comparable } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $LootTable, $LootPool$Builder, $LootPool, $LootTable$Builder } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/petrolpark/mc/library/core/data/loot/modifier" {
    export interface $LootPoolEntryModifierType extends RegistryMarked<RegistryTypes.PetrolparkLootPoolEntryModifierTypeTag, RegistryTypes.PetrolparkLootPoolEntryModifierType> {}
    export class $ILootModifierBase {
    }
    export interface $ILootModifierBase {
        add(arg0: $LootPool$Builder, ...arg1: $LootPoolEntryContainer[]): $LootPool$Builder;
        apply(arg0: $LootTable$Builder, ...arg1: $LootItemFunction[]): $LootTable$Builder;
        apply(arg0: $LootPool$Builder, ...arg1: $LootItemFunction[]): $LootPool$Builder;
        copy(arg0: $LootTable): $LootTable$Builder;
        copy(arg0: $LootPool): $LootPool$Builder;
        getEntries(arg0: $LootPool): $List<$LootPoolEntryContainer>;
        when(arg0: $LootPool$Builder, ...arg1: $LootItemCondition[]): $LootPool$Builder;
        getConditions(arg0: $LootPool): $List<$LootItemCondition>;
        getPools(arg0: $LootTable): $List<$LootPool>;
        withPool(arg0: $LootTable$Builder, ...arg1: $LootPool[]): $LootTable$Builder;
        getFunctions(arg0: $LootTable): $List<$LootItemFunction>;
        getFunctions(arg0: $LootPool): $List<$LootItemFunction>;
        getRandomSequence(arg0: $LootTable): ($ResourceLocation) | undefined;
    }
    export interface $LootTableModifierType extends RegistryMarked<RegistryTypes.PetrolparkLootTableModifierTypeTag, RegistryTypes.PetrolparkLootTableModifierType> {}
    export class $LootTableModification extends $Record implements $Comparable<$LootTableModification> {
        modifiers(): $List<$ILootTableModifier>;
        priority(): number;
        target(): $ResourceLocation;
        compareTo(arg0: $LootTableModification_): number;
        conditions(): $List<$ICondition>;
        static DIRECT_CODEC: $Codec<$LootTableModification>;
        constructor(conditions: $List_<$ICondition>, target: $ResourceLocation_, priority: number, modifiers: $List_<$ILootTableModifier>);
    }
    /**
     * Values that may be interpreted as {@link $LootTableModification}.
     */
    export type $LootTableModification_ = RegistryTypes.PetrolparkLootTableModification | { modifiers?: $List_<$ILootTableModifier>, conditions?: $List_<$ICondition>, target?: $ResourceLocation_, priority?: number,  } | [modifiers?: $List_<$ILootTableModifier>, conditions?: $List_<$ICondition>, target?: $ResourceLocation_, priority?: number, ];
    export class $LootTableModifierType extends $Record {
        codec(): $MapCodec<$ILootTableModifier>;
        constructor(codec: $MapCodec_<$ILootTableModifier>);
    }
    /**
     * Values that may be interpreted as {@link $LootTableModifierType}.
     */
    export type $LootTableModifierType_ = RegistryTypes.PetrolparkLootTableModifierType | { codec?: $MapCodec_<$ILootTableModifier>,  } | [codec?: $MapCodec_<$ILootTableModifier>, ];
    export class $ILootPoolEntryModifier {
        static CODEC: $Codec<$ILootPoolEntryModifier>;
        static TYPED_CODEC: $Codec<$ILootPoolEntryModifier>;
    }
    export interface $ILootPoolEntryModifier extends $ILootModifierBase {
        getType(): $LootPoolEntryModifierType;
        modify(arg0: $HolderLookup$Provider, arg1: $LootTable, arg2: $LootPool, arg3: $LootPoolEntryContainer): $LootPoolEntryContainer;
        get type(): $LootPoolEntryModifierType;
    }
    export class $LootPoolEntryModifierType extends $Record {
        codec(): $MapCodec<$ILootPoolEntryModifier>;
        constructor(codec: $MapCodec_<$ILootPoolEntryModifier>);
    }
    /**
     * Values that may be interpreted as {@link $LootPoolEntryModifierType}.
     */
    export type $LootPoolEntryModifierType_ = RegistryTypes.PetrolparkLootPoolEntryModifierType | { codec?: $MapCodec_<$ILootPoolEntryModifier>,  } | [codec?: $MapCodec_<$ILootPoolEntryModifier>, ];
    export interface $LootTableModification extends RegistryMarked<RegistryTypes.PetrolparkLootTableModificationTag, RegistryTypes.PetrolparkLootTableModification> {}
    export class $ILootTableModifier {
        static CODEC: $Codec<$ILootTableModifier>;
        static TYPED_CODEC: $Codec<$ILootTableModifier>;
    }
    export interface $ILootTableModifier extends $ILootModifierBase {
        getType(): $LootTableModifierType;
        modify(arg0: $HolderLookup$Provider, arg1: $LootTable): $LootTable;
        get type(): $LootTableModifierType;
    }
}
