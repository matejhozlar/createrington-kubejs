import { $JsonObject_ } from "@package/com/google/gson";
import { $NumberProvider_ } from "@package/net/minecraft/world/level/storage/loot/providers/number";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $GroupedLootAction$Builder, $LootAction_, $LootModifier$Builder, $LootAction } from "@package/com/almostreliable/lootjs/loot/modifier";
import { $EntityType_, $EquipmentSlot_, $EntityType, $Entity, $EquipmentSlotGroup_ } from "@package/net/minecraft/world/entity";
import { $LootPoolEntryType_, $LootPoolEntryContainer } from "@package/net/minecraft/world/level/storage/loot/entries";
import { $AttributeModifier, $AttributeModifier$Operation_, $Attribute, $Attribute_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $ModifyLootAction$Callback_ } from "@package/com/almostreliable/lootjs/loot/modifier/handler";
import { $Set_, $Set, $List, $Map_, $List_ } from "@package/java/util";
import { $Consumer_, $BiFunction, $Predicate_, $Predicate, $Function_, $UnaryOperator_ } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $HolderSet_, $BlockPos_, $HolderLookup$Provider, $Holder_, $WritableRegistry } from "@package/net/minecraft/core";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $LootType_ } from "@package/com/almostreliable/lootjs/core";
import { $ItemFilter_, $IdFilter_, $LootTableFilter } from "@package/com/almostreliable/lootjs/core/filters";
import { $DataComponentType_ } from "@package/net/minecraft/core/component";
import { $Record } from "@package/java/lang";
import { $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $ValidationContext, $LootContext, $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Explosion$BlockInteraction_ } from "@package/net/minecraft/world/level";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $LootItemFunctionType, $LootItemFunctionType_, $LootItemFunction$Builder, $SetEnchantmentsFunction$Builder, $LootItemFunction } from "@package/net/minecraft/world/level/storage/loot/functions";
import { $StatePropertiesPredicate_, $EntityPredicate_, $MinMaxBounds$Ints_, $LocationPredicate_, $DistancePredicate_, $EnchantmentPredicate_, $NbtPredicate, $DamageSourcePredicate_, $ItemPredicate_, $ItemEnchantmentsPredicate, $EnchantmentPredicate, $MinMaxBounds$Doubles_ } from "@package/net/minecraft/advancements/critereon";
import { $Potion_ } from "@package/net/minecraft/world/item/alchemy";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $IGlobalLootModifier } from "@package/net/neoforged/neoforge/common/loot";
import { $LootItemConditionType_, $LootItemCondition } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $ListHolder, $BlockFilter, $DebugInfo } from "@package/com/almostreliable/lootjs/util";
import { $ItemLootEntry, $LootEntry, $SimpleLootEntry } from "@package/com/almostreliable/lootjs/core/entry";
import { $LootContextParam } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $LootTableList, $MutableLootTable, $LootEntryAppender, $MutableLootPool, $LootEntriesTransformer } from "@package/com/almostreliable/lootjs/loot/table";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as modifier from "@package/com/almostreliable/lootjs/loot/modifier";
export * as table from "@package/com/almostreliable/lootjs/loot/table";
export * as extension from "@package/com/almostreliable/lootjs/loot/extension";

declare module "@package/com/almostreliable/lootjs/loot" {
    export class $LootFunctionsContainer<F> {
    }
    export interface $LootFunctionsContainer<F> {
        setName(arg0: $Component_): F;
        addAttributes(arg0: $Consumer_<$AddAttributesFunction$Builder>): F;
        damage(arg0: $NumberProvider_): F;
        setCount(arg0: $NumberProvider_): F;
        enchant(arg0: boolean, arg1: $Consumer_<$SetEnchantmentsFunction$Builder>): F;
        enchant(arg0: $Consumer_<$SetEnchantmentsFunction$Builder>): F;
        limitCount(arg0: $NumberProvider_ | null, arg1: $NumberProvider_ | null): F;
        setCustomData(arg0: $CompoundTag_): F;
        enchantWithLevels(arg0: $NumberProvider_): F;
        enchantRandomly(): F;
        enchantRandomly(arg0: $HolderSet_<$Enchantment>): F;
        jsonFunction(arg0: $JsonObject_): F;
        replaceLore(...arg0: $Component_[]): F;
        toggleTooltips(arg0: $Map_<string, boolean>): F;
        addFunction(arg0: $LootItemFunction): F;
        applyOreBonus(arg0: $Holder_<$Enchantment>): F;
        applyBonus(arg0: $Holder_<$Enchantment>, arg1: number): F;
        addPotion(arg0: $Potion_): F;
        smelt(): F;
        addLore(...arg0: $Component_[]): F;
        applyBinomialDistributionBonus(arg0: $Holder_<$Enchantment>, arg1: number, arg2: number): F;
        simulateExplosionDecay(): F;
        applyEnchantmentBonus(arg0: $NumberProvider_): F;
        applyEnchantmentBonus(arg0: $Holder_<$Enchantment>, arg1: $NumberProvider_): F;
        set name(value: $Component_);
        set count(value: $NumberProvider_);
        set customData(value: $CompoundTag_);
    }
    /**
     * Values that may be interpreted as {@link $LootFunctionsContainer}.
     */
    export type $LootFunctionsContainer_<F> = ((arg0: $LootItemFunction) => F);
    export class $Predicates {
        static lookup(): $HolderLookup$Provider;
        static enchantment(arg0: $IdFilter_, arg1: $MinMaxBounds$Ints_): $EnchantmentPredicate;
        static enchantment(arg0: $IdFilter_): $EnchantmentPredicate;
        static storedEnchantments(arg0: $EnchantmentPredicate_[]): $ItemEnchantmentsPredicate;
        static nbt(arg0: $CompoundTag_): $NbtPredicate;
        static itemEnchantments(arg0: $EnchantmentPredicate_[]): $ItemEnchantmentsPredicate;
    }
    export interface $Predicates {
    }
    export class $AddAttributesFunction$Modifier {
        createAttributeModifier(arg0: $LootContext): $AttributeModifier;
        constructor(arg0: number, arg1: $Holder_<$Attribute>, arg2: $AttributeModifier$Operation_, arg3: $NumberProvider_, arg4: $ResourceLocation_, arg5: $Set_<$EquipmentSlotGroup_>);
    }
    export class $LootCondition implements $LootConditionsContainer<$LootItemCondition> {
        matchLocation(arg0: $LocationPredicate_): $LootItemCondition;
        matchLocation(arg0: $BlockPos_, arg1: $LocationPredicate_): $LootItemCondition;
        luck(arg0: $MinMaxBounds$Doubles_): $LootItemCondition;
        matchTool(arg0: $ItemPredicate_): $LootItemCondition;
        blockEntity(arg0: $Predicate_<$BlockEntity>): $LootItemCondition;
        matchBlock(arg0: $Block_, arg1: $StatePropertiesPredicate_): $LootItemCondition;
        matchBlock(arg0: $Block_): $LootItemCondition;
        killedByPlayer(): $LootItemCondition;
        randomChance(arg0: $NumberProvider_): $LootItemCondition;
        survivesExplosion(): $LootItemCondition;
        matchStructure(arg0: $HolderSet_<$Structure>): $LootItemCondition;
        matchStructure(arg0: $HolderSet_<$Structure>, arg1: boolean): $LootItemCondition;
        matchEntity(arg0: $EntityPredicate_): $LootItemCondition;
        matchPlayer(arg0: $EntityPredicate_): $LootItemCondition;
        isLightLevel(arg0: number, arg1: number): $LootItemCondition;
        matchPlayerCustom(arg0: $Predicate_<$ServerPlayer>): $LootItemCondition;
        matchDistance(arg0: $DistancePredicate_): $LootItemCondition;
        hasAnyStage(...arg0: string[]): $LootItemCondition;
        matchOffHand(arg0: $ItemFilter_): $LootItemCondition;
        matchEntityCustom(arg0: $Predicate_<$Entity>): $LootItemCondition;
        matchWeather(arg0: boolean | null, arg1: boolean | null): $LootItemCondition;
        matchAttacker(arg0: $EntityPredicate_): $LootItemCondition;
        matchAnyHotbarSlot(arg0: $ItemFilter_): $LootItemCondition;
        randomTableBonus(arg0: $Holder_<$Enchantment>, arg1: number[]): $LootItemCondition;
        matchDimension(...arg0: $ResourceLocation_[]): $LootItemCondition;
        matchDamageSource(arg0: $DamageSourcePredicate_): $LootItemCondition;
        matchMainHand(arg0: $ItemFilter_): $LootItemCondition;
        matchChest(arg0: $ItemFilter_): $LootItemCondition;
        matchAnyOf(...arg0: $LootItemCondition[]): $LootItemCondition;
        matchAllOf(...arg0: $LootItemCondition[]): $LootItemCondition;
        matchEquip(arg0: $EquipmentSlot_, arg1: $ItemFilter_): $LootItemCondition;
        matchFeet(arg0: $ItemFilter_): $LootItemCondition;
        matchTime(arg0: number, arg1: number, arg2: number): $LootItemCondition;
        matchTime(arg0: number, arg1: number): $LootItemCondition;
        matchBiome(arg0: $HolderSet_<$Biome>): $LootItemCondition;
        matchLegs(arg0: $ItemFilter_): $LootItemCondition;
        matchHead(arg0: $ItemFilter_): $LootItemCondition;
        randomChanceWithEnchantment(arg0: $Holder_<$Enchantment>, arg1: number[]): $LootItemCondition;
        matchDirectAttacker(arg0: $EntityPredicate_): $LootItemCondition;
        matchAnyInventorySlot(arg0: $ItemFilter_): $LootItemCondition;
        matchCustomCondition(arg0: $JsonObject_): $LootItemCondition;
        matchDirectAttackerCustom(arg0: $Predicate_<$Entity>): $LootItemCondition;
        matchAttackerCustom(arg0: $Predicate_<$Entity>): $LootItemCondition;
        constructor();
    }
    export class $LootConditionList extends $ListHolder<$LootItemCondition, $LootItemCondition> implements $LootConditionsContainer<$LootConditionList>, $Predicate<$LootContext> {
        remove(arg0: $IdFilter_): boolean;
        indexOf(arg0: $LootItemConditionType_): number;
        test(arg0: $LootContext): boolean;
        lastIndexOf(arg0: $LootItemConditionType_): number;
        contains(arg0: $LootItemConditionType_): boolean;
        addCondition(arg0: $LootItemCondition): $LootConditionList;
        collectDebugInfo(arg0: $DebugInfo): void;
        matchLocation(arg0: $LocationPredicate_): $LootConditionList;
        matchLocation(arg0: $BlockPos_, arg1: $LocationPredicate_): $LootConditionList;
        luck(arg0: $MinMaxBounds$Doubles_): $LootConditionList;
        matchTool(arg0: $ItemPredicate_): $LootConditionList;
        blockEntity(arg0: $Predicate_<$BlockEntity>): $LootConditionList;
        matchBlock(arg0: $Block_, arg1: $StatePropertiesPredicate_): $LootConditionList;
        matchBlock(arg0: $Block_): $LootConditionList;
        killedByPlayer(): $LootConditionList;
        randomChance(arg0: $NumberProvider_): $LootConditionList;
        survivesExplosion(): $LootConditionList;
        matchStructure(arg0: $HolderSet_<$Structure>): $LootConditionList;
        matchStructure(arg0: $HolderSet_<$Structure>, arg1: boolean): $LootConditionList;
        matchEntity(arg0: $EntityPredicate_): $LootConditionList;
        matchPlayer(arg0: $EntityPredicate_): $LootConditionList;
        isLightLevel(arg0: number, arg1: number): $LootConditionList;
        matchPlayerCustom(arg0: $Predicate_<$ServerPlayer>): $LootConditionList;
        matchDistance(arg0: $DistancePredicate_): $LootConditionList;
        hasAnyStage(...arg0: string[]): $LootConditionList;
        matchOffHand(arg0: $ItemFilter_): $LootConditionList;
        matchEntityCustom(arg0: $Predicate_<$Entity>): $LootConditionList;
        matchWeather(arg0: boolean | null, arg1: boolean | null): $LootConditionList;
        matchAttacker(arg0: $EntityPredicate_): $LootConditionList;
        matchAnyHotbarSlot(arg0: $ItemFilter_): $LootConditionList;
        randomTableBonus(arg0: $Holder_<$Enchantment>, arg1: number[]): $LootConditionList;
        matchDimension(...arg0: $ResourceLocation_[]): $LootConditionList;
        matchDamageSource(arg0: $DamageSourcePredicate_): $LootConditionList;
        matchMainHand(arg0: $ItemFilter_): $LootConditionList;
        matchChest(arg0: $ItemFilter_): $LootConditionList;
        matchAnyOf(...arg0: $LootItemCondition[]): $LootConditionList;
        matchAllOf(...arg0: $LootItemCondition[]): $LootConditionList;
        matchEquip(arg0: $EquipmentSlot_, arg1: $ItemFilter_): $LootConditionList;
        matchFeet(arg0: $ItemFilter_): $LootConditionList;
        matchTime(arg0: number, arg1: number, arg2: number): $LootConditionList;
        matchTime(arg0: number, arg1: number): $LootConditionList;
        matchBiome(arg0: $HolderSet_<$Biome>): $LootConditionList;
        matchLegs(arg0: $ItemFilter_): $LootConditionList;
        matchHead(arg0: $ItemFilter_): $LootConditionList;
        randomChanceWithEnchantment(arg0: $Holder_<$Enchantment>, arg1: number[]): $LootConditionList;
        matchDirectAttacker(arg0: $EntityPredicate_): $LootConditionList;
        matchAnyInventorySlot(arg0: $ItemFilter_): $LootConditionList;
        matchCustomCondition(arg0: $JsonObject_): $LootConditionList;
        matchDirectAttackerCustom(arg0: $Predicate_<$Entity>): $LootConditionList;
        matchAttackerCustom(arg0: $Predicate_<$Entity>): $LootConditionList;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        constructor();
        constructor(arg0: $List_<$LootItemCondition>);
    }
    export class $AddAttributesFunction$Builder implements $LootItemFunction$Builder {
        add(arg0: $AddAttributesFunction$Modifier): $AddAttributesFunction$Builder;
        add(arg0: $Attribute_, arg1: $ResourceLocation_, arg2: $NumberProvider_, arg3: $Consumer_<$AddAttributesFunction$Modifier$Builder>): $AddAttributesFunction$Builder;
        build(): $AddAttributesFunction;
        simple(arg0: number, arg1: $Attribute_, arg2: $ResourceLocation_, arg3: $NumberProvider_): $AddAttributesFunction$Builder;
        simple(arg0: $Attribute_, arg1: $ResourceLocation_, arg2: $NumberProvider_): $AddAttributesFunction$Builder;
        preserveDefaults(arg0: boolean): $AddAttributesFunction$Builder;
        forSlots(arg0: number, arg1: $Attribute_, arg2: $ResourceLocation_, arg3: $NumberProvider_, arg4: $EquipmentSlotGroup_[]): $AddAttributesFunction$Builder;
        forSlots(arg0: $Attribute_, arg1: $ResourceLocation_, arg2: $NumberProvider_, arg3: $EquipmentSlotGroup_[]): $AddAttributesFunction$Builder;
        constructor();
    }
    export class $AddAttributesFunction$Modifier$Builder {
        build(): $AddAttributesFunction$Modifier;
        setOperation(arg0: $AttributeModifier$Operation_): void;
        setSlots(arg0: $EquipmentSlotGroup_[]): void;
        setProbability(arg0: number): void;
        constructor(arg0: $Attribute_, arg1: $ResourceLocation_, arg2: $NumberProvider_);
        set operation(value: $AttributeModifier$Operation_);
        set slots(value: $EquipmentSlotGroup_[]);
        set probability(value: number);
    }
    export class $LootModificationEvent {
        addTableModifier(...arg0: $LootTableFilter[]): $LootModifier$Builder;
        getGlobalModifiers(): $List<string>;
        /**
         * @deprecated
         */
        addTypeModifier(...arg0: $LootType_[]): $LootModifier$Builder;
        addEntityModifier(arg0: $HolderSet_<$EntityType<never>>): $LootModifier$Builder;
        addBlockModifier(arg0: $BlockFilter): $LootModifier$Builder;
        enableLogging(): void;
        disableLootModification(...arg0: $IdFilter_[]): void;
        disableZombieHeadDrop(): void;
        removeGlobalModifiers(...arg0: $IdFilter_[]): void;
        disableSkeletonHeadDrop(): void;
        disableCreeperHeadDrop(): void;
        disableWitherStarDrop(): void;
        constructor(arg0: $Map_<$ResourceLocation_, $IGlobalLootModifier>);
        get globalModifiers(): $List<string>;
    }
    export class $AddAttributesFunction implements $LootItemFunction {
        apply(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        getType(): $LootItemFunctionType<any>;
        lootjs$when(arg0: $Consumer_<any>): $LootItemFunction;
        validate(arg0: $ValidationContext): void;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        andThen<V>(arg0: $Function_<$ItemStack, V>): $BiFunction<$ItemStack, $LootContext, V>;
        constructor(arg0: boolean, arg1: $List_<$AddAttributesFunction$Modifier>);
        get type(): $LootItemFunctionType<any>;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $LootConditionsContainer<C> {
    }
    export interface $LootConditionsContainer<C> {
        matchLocation(arg0: $LocationPredicate_): C;
        matchLocation(arg0: $BlockPos_, arg1: $LocationPredicate_): C;
        luck(arg0: $MinMaxBounds$Doubles_): C;
        addCondition(arg0: $LootItemCondition): C;
        matchTool(arg0: $ItemPredicate_): C;
        blockEntity(arg0: $Predicate_<$BlockEntity>): C;
        matchBlock(arg0: $Block_, arg1: $StatePropertiesPredicate_): C;
        matchBlock(arg0: $Block_): C;
        killedByPlayer(): C;
        randomChance(arg0: $NumberProvider_): C;
        survivesExplosion(): C;
        matchStructure(arg0: $HolderSet_<$Structure>): C;
        matchStructure(arg0: $HolderSet_<$Structure>, arg1: boolean): C;
        matchEntity(arg0: $EntityPredicate_): C;
        matchPlayer(arg0: $EntityPredicate_): C;
        isLightLevel(arg0: number, arg1: number): C;
        matchPlayerCustom(arg0: $Predicate_<$ServerPlayer>): C;
        matchDistance(arg0: $DistancePredicate_): C;
        hasAnyStage(...arg0: string[]): C;
        matchOffHand(arg0: $ItemFilter_): C;
        matchEntityCustom(arg0: $Predicate_<$Entity>): C;
        matchWeather(arg0: boolean | null, arg1: boolean | null): C;
        matchAttacker(arg0: $EntityPredicate_): C;
        matchAnyHotbarSlot(arg0: $ItemFilter_): C;
        randomTableBonus(arg0: $Holder_<$Enchantment>, arg1: number[]): C;
        matchDimension(...arg0: $ResourceLocation_[]): C;
        matchDamageSource(arg0: $DamageSourcePredicate_): C;
        matchMainHand(arg0: $ItemFilter_): C;
        matchChest(arg0: $ItemFilter_): C;
        matchAnyOf(...arg0: $LootItemCondition[]): C;
        matchAllOf(...arg0: $LootItemCondition[]): C;
        matchEquip(arg0: $EquipmentSlot_, arg1: $ItemFilter_): C;
        matchFeet(arg0: $ItemFilter_): C;
        matchTime(arg0: number, arg1: number, arg2: number): C;
        matchTime(arg0: number, arg1: number): C;
        matchBiome(arg0: $HolderSet_<$Biome>): C;
        matchLegs(arg0: $ItemFilter_): C;
        matchHead(arg0: $ItemFilter_): C;
        randomChanceWithEnchantment(arg0: $Holder_<$Enchantment>, arg1: number[]): C;
        matchDirectAttacker(arg0: $EntityPredicate_): C;
        matchAnyInventorySlot(arg0: $ItemFilter_): C;
        matchCustomCondition(arg0: $JsonObject_): C;
        matchDirectAttackerCustom(arg0: $Predicate_<$Entity>): C;
        matchAttackerCustom(arg0: $Predicate_<$Entity>): C;
    }
    /**
     * Values that may be interpreted as {@link $LootConditionsContainer}.
     */
    export type $LootConditionsContainer_<C> = ((arg0: $LootItemCondition) => C);
    export class $LootTableEvent {
        create(arg0: $ResourceLocation_, arg1: $LootType_): $MutableLootTable;
        create(arg0: $ResourceLocation_): $MutableLootTable;
        getLootTable(arg0: $ResourceLocation_): $MutableLootTable;
        hasLootTable(arg0: $ResourceLocation_): boolean;
        /**
         * @deprecated
         */
        modifyLootTypeTables(...arg0: $LootType_[]): $LootTableList;
        clearLootTables(arg0: $IdFilter_): void;
        getEntityTable(arg0: $EntityType_<never>): $MutableLootTable;
        modifyEntityTables(arg0: $IdFilter_): $LootTableList;
        forEachTable(arg0: $IdFilter_, arg1: $Consumer_<$MutableLootTable>): void;
        forEachTable(arg0: $Consumer_<$MutableLootTable>): void;
        getLootTableIds(): $Set<$ResourceLocation>;
        getLootTableIds(arg0: $IdFilter_): $Set<$ResourceLocation>;
        getBlockTable(arg0: $Block_): $MutableLootTable;
        modifyLootTables(...arg0: $LootTableFilter[]): $LootTableList;
        modifyBlockTables(arg0: $IdFilter_): $LootTableList;
        constructor(arg0: $WritableRegistry<$LootTable>);
    }
    export class $LootActionContainer<A extends $LootActionContainer<never>> {
    }
    export interface $LootActionContainer<A extends $LootActionContainer<never>> {
        group(arg0: $Consumer_<$GroupedLootAction$Builder>): A;
        group(arg0: $ItemFilter_, arg1: $Consumer_<$GroupedLootAction$Builder>): A;
        pool(arg0: $Consumer_<$MutableLootPool>): A;
        dropExperience(arg0: $NumberProvider_): A;
        removeLoot(arg0: $ItemFilter_): A;
        modifyLoot(arg0: $ItemFilter_, arg1: $ModifyLootAction$Callback_): A;
        addLoot(...arg0: $LootEntry[]): A;
        addSequenceLoot(...arg0: $LootEntry[]): A;
        customAction(arg0: $LootAction_): A;
        replaceLoot(arg0: $ItemFilter_, arg1: $LootEntry, arg2: boolean, arg3: $DataComponentType_<never>[]): A;
        replaceLoot(arg0: $ItemFilter_, arg1: $LootEntry, arg2: boolean): A;
        replaceLoot(arg0: $ItemFilter_, arg1: $LootEntry): A;
        triggerExplosion(arg0: number, arg1: $Explosion$BlockInteraction_, arg2: boolean): A;
        triggerExplosion(arg0: number, arg1: boolean, arg2: boolean): A;
        playerAction(arg0: $Consumer_<$ServerPlayer>): A;
        addAction(arg0: $LootAction_): A;
        addAlternativesLoot(...arg0: $LootEntry[]): A;
        triggerLightningStrike(arg0: boolean): A;
    }
    /**
     * Values that may be interpreted as {@link $LootActionContainer}.
     */
    export type $LootActionContainer_<A> = ((arg0: $LootAction) => A);
    export class $LootFunction extends $Record implements $LootFunctionsContainer<$LootItemFunction> {
        addFunction(arg0: $LootItemFunction): $LootItemFunction;
        setName(arg0: $Component_): $LootItemFunction;
        addAttributes(arg0: $Consumer_<$AddAttributesFunction$Builder>): $LootItemFunction;
        damage(arg0: $NumberProvider_): $LootItemFunction;
        setCount(arg0: $NumberProvider_): $LootItemFunction;
        enchant(arg0: boolean, arg1: $Consumer_<$SetEnchantmentsFunction$Builder>): $LootItemFunction;
        enchant(arg0: $Consumer_<$SetEnchantmentsFunction$Builder>): $LootItemFunction;
        limitCount(arg0: $NumberProvider_ | null, arg1: $NumberProvider_ | null): $LootItemFunction;
        setCustomData(arg0: $CompoundTag_): $LootItemFunction;
        enchantWithLevels(arg0: $NumberProvider_): $LootItemFunction;
        enchantRandomly(): $LootItemFunction;
        enchantRandomly(arg0: $HolderSet_<$Enchantment>): $LootItemFunction;
        jsonFunction(arg0: $JsonObject_): $LootItemFunction;
        replaceLore(...arg0: $Component_[]): $LootItemFunction;
        toggleTooltips(arg0: $Map_<string, boolean>): $LootItemFunction;
        applyOreBonus(arg0: $Holder_<$Enchantment>): $LootItemFunction;
        applyBonus(arg0: $Holder_<$Enchantment>, arg1: number): $LootItemFunction;
        addPotion(arg0: $Potion_): $LootItemFunction;
        smelt(): $LootItemFunction;
        addLore(...arg0: $Component_[]): $LootItemFunction;
        applyBinomialDistributionBonus(arg0: $Holder_<$Enchantment>, arg1: number, arg2: number): $LootItemFunction;
        simulateExplosionDecay(): $LootItemFunction;
        applyEnchantmentBonus(arg0: $NumberProvider_): $LootItemFunction;
        applyEnchantmentBonus(arg0: $Holder_<$Enchantment>, arg1: $NumberProvider_): $LootItemFunction;
        constructor();
        set name(value: $Component_);
        set count(value: $NumberProvider_);
        set customData(value: $CompoundTag_);
    }
    /**
     * Values that may be interpreted as {@link $LootFunction}.
     */
    export type $LootFunction_ = {  } | [];
    export class $LootEntryList extends $ListHolder<$LootEntry, $LootPoolEntryContainer> implements $LootEntriesTransformer, $LootEntryAppender {
        remove(arg0: $IdFilter_): boolean;
        indexOf(arg0: $LootPoolEntryType_): number;
        lastIndexOf(arg0: $LootPoolEntryType_): number;
        contains(arg0: $LootPoolEntryType_): boolean;
        removeEntry(arg0: $Predicate_<$SimpleLootEntry>, arg1: boolean): $LootEntryList;
        modify(arg0: $UnaryOperator_<$LootEntry>): void;
        collectDebugInfo(arg0: $DebugInfo): void;
        createVanillaArray(): $List<$LootPoolEntryContainer>;
        removeEntry(arg0: $Predicate_<$SimpleLootEntry>): $LootEntriesTransformer;
        hasItem(arg0: $ItemFilter_): boolean;
        removeItem(arg0: $ItemFilter_, arg1: boolean): $LootEntriesTransformer;
        removeItem(arg0: $ItemFilter_): $LootEntriesTransformer;
        removeReference(arg0: $IdFilter_, arg1: boolean): $LootEntriesTransformer;
        removeReference(arg0: $IdFilter_): $LootEntriesTransformer;
        removeTag(arg0: string, arg1: boolean): $LootEntriesTransformer;
        removeTag(arg0: string): $LootEntriesTransformer;
        modifyItemEntry(arg0: $UnaryOperator_<$ItemLootEntry>): $LootEntriesTransformer;
        modifyEntry(arg0: $UnaryOperator_<$SimpleLootEntry>): $LootEntriesTransformer;
        replaceItem(arg0: $ItemFilter_, arg1: $Item_, arg2: boolean): $LootEntriesTransformer;
        replaceItem(arg0: $ItemFilter_, arg1: $Item_): $LootEntriesTransformer;
        addCustomEntry(arg0: $JsonObject_): $LootEntryAppender;
        addEntry(arg0: $LootEntry): $LootEntryAppender;
        modifyEntry(arg0: $UnaryOperator_<$SimpleLootEntry>, arg1: boolean): $LootEntriesTransformer;
        constructor(arg0: $List_<$LootPoolEntryContainer>);
        constructor(...arg0: $LootEntry[]);
        constructor();
    }
    export class $LootFunctionList extends $ListHolder<$LootItemFunction, $LootItemFunction> implements $LootFunctionsContainer<$LootFunctionList>, $BiFunction<$ItemStack, $LootContext, $ItemStack> {
        remove(arg0: $IdFilter_): boolean;
        indexOf(arg0: $LootItemFunctionType_<never>): number;
        lastIndexOf(arg0: $LootItemFunctionType_<never>): number;
        replace(arg0: $LootItemFunctionType_<never>, arg1: $LootItemFunction): boolean;
        apply(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        contains(arg0: $LootItemFunctionType_<never>): boolean;
        collectDebugInfo(arg0: $DebugInfo): void;
        setName(arg0: $Component_): $LootFunctionList;
        addAttributes(arg0: $Consumer_<$AddAttributesFunction$Builder>): $LootFunctionList;
        damage(arg0: $NumberProvider_): $LootFunctionList;
        setCount(arg0: $NumberProvider_): $LootFunctionList;
        enchant(arg0: boolean, arg1: $Consumer_<$SetEnchantmentsFunction$Builder>): $LootFunctionList;
        enchant(arg0: $Consumer_<$SetEnchantmentsFunction$Builder>): $LootFunctionList;
        limitCount(arg0: $NumberProvider_ | null, arg1: $NumberProvider_ | null): $LootFunctionList;
        setCustomData(arg0: $CompoundTag_): $LootFunctionList;
        enchantWithLevels(arg0: $NumberProvider_): $LootFunctionList;
        enchantRandomly(): $LootFunctionList;
        enchantRandomly(arg0: $HolderSet_<$Enchantment>): $LootFunctionList;
        jsonFunction(arg0: $JsonObject_): $LootFunctionList;
        replaceLore(...arg0: $Component_[]): $LootFunctionList;
        toggleTooltips(arg0: $Map_<string, boolean>): $LootFunctionList;
        applyOreBonus(arg0: $Holder_<$Enchantment>): $LootFunctionList;
        applyBonus(arg0: $Holder_<$Enchantment>, arg1: number): $LootFunctionList;
        addPotion(arg0: $Potion_): $LootFunctionList;
        smelt(): $LootFunctionList;
        addLore(...arg0: $Component_[]): $LootFunctionList;
        applyBinomialDistributionBonus(arg0: $Holder_<$Enchantment>, arg1: number, arg2: number): $LootFunctionList;
        simulateExplosionDecay(): $LootFunctionList;
        applyEnchantmentBonus(arg0: $NumberProvider_): $LootFunctionList;
        applyEnchantmentBonus(arg0: $Holder_<$Enchantment>, arg1: $NumberProvider_): $LootFunctionList;
        andThen<V>(arg0: $Function_<$ItemStack, V>): $BiFunction<$ItemStack, $LootContext, V>;
        addFunction(arg0: $LootItemFunction): $LootFunctionList;
        constructor();
        constructor(arg0: $List_<$LootItemFunction>);
        set name(value: $Component_);
        set count(value: $NumberProvider_);
        set customData(value: $CompoundTag_);
    }
}
