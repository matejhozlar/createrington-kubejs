import { $ItemLike } from "@package/net/minecraft/world/level";
import { $ItemEntry } from "@package/com/tterrag/registrate/util/entry";
import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $ItemStack, $Item$Properties, $Item } from "@package/net/minecraft/world/item";
import { $Ingredient, $CraftingRecipe } from "@package/net/minecraft/world/item/crafting";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Date, $Map } from "@package/java/util";
import { $Object } from "@package/java/lang";

declare module "@package/petrolpark/mc/library/core/badge" {
    export class $Badge implements $ItemLike {
        getName(): $Component;
        getId(): $ResourceLocation;
        getDescription(): $Component;
        setBadgeItem(arg0: $ItemEntry<$BadgeItem>): void;
        setDuplicationItem(arg0: $Supplier_<$Ingredient>): void;
        setId(arg0: $ResourceLocation_): void;
        getDuplicationIngredient(): $Ingredient;
        getExampleDuplicationRecipe(): $CraftingRecipe;
        static getBadge(arg0: $ResourceLocation_): $Badge;
        static getBadge(arg0: string, arg1: string): $Badge;
        asItem(): $Item;
        constructor();
        get name(): $Component;
        get description(): $Component;
        set badgeItem(value: $ItemEntry<$BadgeItem>);
        set duplicationItem(value: $Supplier_<$Ingredient>);
        get duplicationIngredient(): $Ingredient;
        get exampleDuplicationRecipe(): $CraftingRecipe;
    }
    /**
     * Values that may be interpreted as {@link $Badge}.
     */
    export type $Badge_ = RegistryTypes.PetrolparkBadge;
    export class $BadgeItem extends $Item {
        static of(arg0: $Player, arg1: $Badge_, arg2: $Date): $ItemStack;
        badge: $Supplier<$Badge>;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties, arg1: $Supplier_<$Badge>);
    }
    export interface $Badge extends RegistryMarked<RegistryTypes.PetrolparkBadgeTag, RegistryTypes.PetrolparkBadge> {}
}
