import { $Level_ } from "@package/net/minecraft/world/level";
import { $IngredientRandomizer } from "@package/petrolpark/mc/library/core/data/recipe/ingredient/randomizer";
import { $NumberProvider, $NumberProvider_ } from "@package/net/minecraft/world/level/storage/loot/providers/number";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $List, $List_, $Set } from "@package/java/util";
import { $IRewardInfo } from "@package/petrolpark/mc/library/core/data/reward/info";
import { $Products$P2 } from "@package/com/mojang/datafixers";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Consumer_ } from "@package/java/util/function";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $NumberEstimate } from "@package/petrolpark/mc/library/core/data/numberProvider";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $IAdvancedIngredient } from "@package/petrolpark/mc/library/core/data/recipe/ingredient/advanced";
import { $IRewardGenerator } from "@package/petrolpark/mc/library/core/data/reward/generator";
import { $RecordCodecBuilder$Mu, $RecordCodecBuilder$Instance } from "@package/com/mojang/serialization/codecs";
import { $Enum, $Record } from "@package/java/lang";
import { $LootContextParam } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $LootContextUser, $ValidationContext, $LootContext } from "@package/net/minecraft/world/level/storage/loot";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $IReward } from "@package/petrolpark/mc/library/core/data/reward";

declare module "@package/petrolpark/mc/library/core/world/restaurant/order" {
    export class $IRestaurantOrder$Entry {
        static commonFields<ENTRY extends $IRestaurantOrder$Entry>(arg0: $RecordCodecBuilder$Instance<ENTRY>): $Products$P2<$RecordCodecBuilder$Mu<ENTRY>, $IRestaurantOrder$Entry$Visibility, boolean>;
    }
    export interface $IRestaurantOrder$Entry {
        visibility(): $IRestaurantOrder$Entry$Visibility;
        everVisible(): boolean;
        persistsToMenu(): boolean;
    }
    export class $RestaurantOrderModifier extends $Record implements $IRestaurantOrder$Entry, $LootContextUser {
        validate(arg0: $ValidationContext): void;
        description(arg0: $Level_): $List<$Component>;
        ingredient(): $IAdvancedIngredient<$ItemStack>;
        visibility(): $IRestaurantOrder$Entry$Visibility;
        multiplierForStack(arg0: $ItemStack_, arg1: $Level_): $NumberProvider;
        persistsToMenu(): boolean;
        successMultiplier(): $NumberProvider;
        failureMultiplier(): $NumberProvider;
        supplyInfo(arg0: $Consumer_<$RestaurantOrderModifier$Info>): void;
        everVisible(): boolean;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static CODEC: $Codec<$RestaurantOrderModifier>;
        constructor(ingredient: $IAdvancedIngredient<$ItemStack_>, successMultiplier: $NumberProvider_, failureMultiplier: $NumberProvider_, visibility: $IRestaurantOrder$Entry$Visibility_, persistsToMenu: boolean);
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * Values that may be interpreted as {@link $RestaurantOrderModifier}.
     */
    export type $RestaurantOrderModifier_ = { ingredient?: $IAdvancedIngredient<$ItemStack_>, failureMultiplier?: $NumberProvider_, successMultiplier?: $NumberProvider_, persistsToMenu?: boolean, visibility?: $IRestaurantOrder$Entry$Visibility_,  } | [ingredient?: $IAdvancedIngredient<$ItemStack_>, failureMultiplier?: $NumberProvider_, successMultiplier?: $NumberProvider_, persistsToMenu?: boolean, visibility?: $IRestaurantOrder$Entry$Visibility_, ];
    export interface $RestaurantOrderGenerator extends RegistryMarked<RegistryTypes.PetrolparkRestaurantOfferGeneratorTag, RegistryTypes.PetrolparkRestaurantOfferGenerator> {}
    export class $RestaurantOrderGenerator$ModifierEntry extends $Record implements $IRestaurantOrder$Entry {
        ingredient(): $IngredientRandomizer;
        visibility(): $IRestaurantOrder$Entry$Visibility;
        chance(): $NumberProvider;
        persistsToMenu(): boolean;
        successMultiplier(): $NumberProvider;
        failureMultiplier(): $NumberProvider;
        everVisible(): boolean;
        static CODEC: $Codec<$RestaurantOrderGenerator$ModifierEntry>;
        constructor(chance: $NumberProvider_, ingredient: $IngredientRandomizer, successMultiplier: $NumberProvider_, failureMultiplier: $NumberProvider_, visibility: $IRestaurantOrder$Entry$Visibility_, persistsToMenu: boolean);
    }
    /**
     * Values that may be interpreted as {@link $RestaurantOrderGenerator$ModifierEntry}.
     */
    export type $RestaurantOrderGenerator$ModifierEntry_ = { persistsToMenu?: boolean, chance?: $NumberProvider_, ingredient?: $IngredientRandomizer, failureMultiplier?: $NumberProvider_, successMultiplier?: $NumberProvider_, visibility?: $IRestaurantOrder$Entry$Visibility_,  } | [persistsToMenu?: boolean, chance?: $NumberProvider_, ingredient?: $IngredientRandomizer, failureMultiplier?: $NumberProvider_, successMultiplier?: $NumberProvider_, visibility?: $IRestaurantOrder$Entry$Visibility_, ];
    export class $ServerRestaurantOrder$RewardEntry extends $Record implements $IRestaurantOrder$Entry {
        reward(): $Holder<$IReward>;
        visibility(): $IRestaurantOrder$Entry$Visibility;
        persistsToMenu(): boolean;
        everVisible(): boolean;
        static LIST_CODEC: $Codec<$List<$ServerRestaurantOrder$RewardEntry>>;
        constructor(reward: $Holder_<$IReward>, visibility: $IRestaurantOrder$Entry$Visibility_, persistsToMenu: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ServerRestaurantOrder$RewardEntry}.
     */
    export type $ServerRestaurantOrder$RewardEntry_ = { reward?: $Holder_<$IReward>, visibility?: $IRestaurantOrder$Entry$Visibility_, persistsToMenu?: boolean,  } | [reward?: $Holder_<$IReward>, visibility?: $IRestaurantOrder$Entry$Visibility_, persistsToMenu?: boolean, ];
    export class $IRestaurantOrder {
        static SERVER_CODEC: $Codec<$IRestaurantOrder>;
    }
    export interface $IRestaurantOrder {
        id(): number;
        ingredient(): $IAdvancedIngredient<$ItemStack>;
        modifiersInfo(): $List<$RestaurantOrderModifier$Info>;
        rewardsInfo(): $List<$IRewardInfo>;
    }
    export class $RestaurantOrderModifier$Info extends $Record {
        ingredient(): $IAdvancedIngredient<$ItemStack>;
        successMultiplier(): $NumberEstimate;
        failureMultiplier(): $NumberEstimate;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $RestaurantOrderModifier$Info>;
        constructor(ingredient: $IAdvancedIngredient<$ItemStack_>, successMultiplier: $NumberEstimate, failureMultiplier: $NumberEstimate);
    }
    /**
     * Values that may be interpreted as {@link $RestaurantOrderModifier$Info}.
     */
    export type $RestaurantOrderModifier$Info_ = { successMultiplier?: $NumberEstimate, ingredient?: $IAdvancedIngredient<$ItemStack_>, failureMultiplier?: $NumberEstimate,  } | [successMultiplier?: $NumberEstimate, ingredient?: $IAdvancedIngredient<$ItemStack_>, failureMultiplier?: $NumberEstimate, ];
    export class $ServerRestaurantOrder extends $Record implements $IRestaurantOrder, $LootContextUser {
        modifiers(): $List<$RestaurantOrderModifier>;
        test(arg0: $ItemStack_): boolean;
        validate(arg0: $ValidationContext): void;
        id(): number;
        ingredient(): $IAdvancedIngredient<$ItemStack>;
        stripForMenu(): $ServerRestaurantOrder;
        modifiersInfo(): $List<$RestaurantOrderModifier$Info>;
        rewardEntries(): $List<$ServerRestaurantOrder$RewardEntry>;
        rewardsInfo(): $List<$IRewardInfo>;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static CODEC: $Codec<$ServerRestaurantOrder>;
        constructor(id: number, ingredient: $IAdvancedIngredient<$ItemStack_>, modifiers: $List_<$RestaurantOrderModifier_>, rewardEntries: $List_<$ServerRestaurantOrder$RewardEntry_>);
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * Values that may be interpreted as {@link $ServerRestaurantOrder}.
     */
    export type $ServerRestaurantOrder_ = { ingredient?: $IAdvancedIngredient<$ItemStack_>, rewardEntries?: $List_<$ServerRestaurantOrder$RewardEntry_>, id?: number, modifiers?: $List_<$RestaurantOrderModifier_>,  } | [ingredient?: $IAdvancedIngredient<$ItemStack_>, rewardEntries?: $List_<$ServerRestaurantOrder$RewardEntry_>, id?: number, modifiers?: $List_<$RestaurantOrderModifier_>, ];
    export class $RestaurantOrderGenerator$RewardsEntry extends $Record implements $IRestaurantOrder$Entry {
        visibility(): $IRestaurantOrder$Entry$Visibility;
        chance(): $NumberProvider;
        rewards(): $Holder<$IRewardGenerator>;
        persistsToMenu(): boolean;
        everVisible(): boolean;
        static CODEC: $Codec<$RestaurantOrderGenerator$RewardsEntry>;
        constructor(chance: $NumberProvider_, rewards: $Holder_<$IRewardGenerator>, visibility: $IRestaurantOrder$Entry$Visibility_, persistsToMenu: boolean);
    }
    /**
     * Values that may be interpreted as {@link $RestaurantOrderGenerator$RewardsEntry}.
     */
    export type $RestaurantOrderGenerator$RewardsEntry_ = { rewards?: $Holder_<$IRewardGenerator>, persistsToMenu?: boolean, visibility?: $IRestaurantOrder$Entry$Visibility_, chance?: $NumberProvider_,  } | [rewards?: $Holder_<$IRewardGenerator>, persistsToMenu?: boolean, visibility?: $IRestaurantOrder$Entry$Visibility_, chance?: $NumberProvider_, ];
    export class $RestaurantOrderGenerator extends $Record implements $LootContextUser {
        modifiers(): $List<$RestaurantOrderGenerator$ModifierEntry>;
        validate(arg0: $ValidationContext): void;
        order(): $IngredientRandomizer;
        generate(arg0: $LootContext, arg1: number, arg2: $Stream<$RestaurantOrderGenerator$ModifierEntry_>): $ServerRestaurantOrder;
        rewards(): $List<$RestaurantOrderGenerator$RewardsEntry>;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static UNVALIDATED_DIRECT_CODEC: $Codec<$RestaurantOrderGenerator>;
        static CODEC: $Codec<$Holder<$RestaurantOrderGenerator>>;
        static DIRECT_CODEC: $Codec<$RestaurantOrderGenerator>;
        constructor(order: $IngredientRandomizer, modifiers: $List_<$RestaurantOrderGenerator$ModifierEntry_>, rewards: $List_<$RestaurantOrderGenerator$RewardsEntry_>);
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * Values that may be interpreted as {@link $RestaurantOrderGenerator}.
     */
    export type $RestaurantOrderGenerator_ = RegistryTypes.PetrolparkRestaurantOfferGenerator | { modifiers?: $List_<$RestaurantOrderGenerator$ModifierEntry_>, rewards?: $List_<$RestaurantOrderGenerator$RewardsEntry_>, order?: $IngredientRandomizer,  } | [modifiers?: $List_<$RestaurantOrderGenerator$ModifierEntry_>, rewards?: $List_<$RestaurantOrderGenerator$RewardsEntry_>, order?: $IngredientRandomizer, ];
    export class $IRestaurantOrder$Entry$Visibility extends $Enum<$IRestaurantOrder$Entry$Visibility> implements $StringRepresentable {
        static values(): $IRestaurantOrder$Entry$Visibility[];
        static valueOf(arg0: string): $IRestaurantOrder$Entry$Visibility;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$IRestaurantOrder$Entry$Visibility>;
        static IN_RECEIPT: $IRestaurantOrder$Entry$Visibility;
        static NEVER: $IRestaurantOrder$Entry$Visibility;
        static ALWAYS: $IRestaurantOrder$Entry$Visibility;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $IRestaurantOrder$Entry$Visibility}.
     */
    export type $IRestaurantOrder$Entry$Visibility_ = "always" | "in_receipt" | "never";
}
