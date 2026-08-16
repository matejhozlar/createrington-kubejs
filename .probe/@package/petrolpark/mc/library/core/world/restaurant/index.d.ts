import { $NumberProvider_, $NumberProvider } from "@package/net/minecraft/world/level/storage/loot/providers/number";
import { $Codec } from "@package/com/mojang/serialization";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $ITeam } from "@package/petrolpark/mc/library/core/world/entity/player/team";
import { $List, $Set, $List_ } from "@package/java/util";
import { $RestaurantOrderGenerator$ModifierEntry, $RestaurantOrderGenerator, $ServerRestaurantOrder, $RestaurantOrderGenerator$ModifierEntry_ } from "@package/petrolpark/mc/library/core/world/restaurant/order";
import { $EntityPredicate_, $EntityPredicate } from "@package/net/minecraft/advancements/critereon";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Record } from "@package/java/lang";
import { $LootContextParam } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $LootContextUser, $ValidationContext } from "@package/net/minecraft/world/level/storage/loot";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as order from "@package/petrolpark/mc/library/core/world/restaurant/order";

declare module "@package/petrolpark/mc/library/core/world/restaurant" {
    export interface $Restaurant extends RegistryMarked<RegistryTypes.PetrolparkRestaurantTag, RegistryTypes.PetrolparkRestaurant> {}
    export class $Restaurant$OrderGeneratorEntry extends $Record implements $LootContextUser {
        validate(arg0: $ValidationContext): void;
        generator(): $Holder<$RestaurantOrderGenerator>;
        weight(): $NumberProvider;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static CODEC: $Codec<$Restaurant$OrderGeneratorEntry>;
        constructor(generator: $Holder_<$RestaurantOrderGenerator>, weight: $NumberProvider_);
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * Values that may be interpreted as {@link $Restaurant$OrderGeneratorEntry}.
     */
    export type $Restaurant$OrderGeneratorEntry_ = { generator?: $Holder_<$RestaurantOrderGenerator>, weight?: $NumberProvider_,  } | [generator?: $Holder_<$RestaurantOrderGenerator>, weight?: $NumberProvider_, ];
    export class $Restaurant extends $Record {
        getName(): $Component;
        translationKey(): string;
        xpRequiredForLevel(): $NumberProvider;
        static generateOrder(arg0: $ServerPlayer, arg1: $Holder_<$Restaurant>, arg2: $ITeam, arg3: $Entity | null): ($ServerRestaurantOrder) | undefined;
        globalOrderModifierEntries(): $List<$RestaurantOrderGenerator$ModifierEntry>;
        orderGeneratorEntries(): $List<$Restaurant$OrderGeneratorEntry>;
        customers(): $EntityPredicate;
        canServe(arg0: $ServerPlayer, arg1: $Entity): boolean;
        static CODEC: $Codec<$Holder<$Restaurant>>;
        static DIRECT_CODEC: $Codec<$Restaurant>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$Restaurant>>;
        constructor(translationKey: string, orderGeneratorEntries: $List_<$Restaurant$OrderGeneratorEntry_>, globalOrderModifierEntries: $List_<$RestaurantOrderGenerator$ModifierEntry_>, customers: $EntityPredicate_, xpRequiredForLevel: $NumberProvider_);
        get name(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $Restaurant}.
     */
    export type $Restaurant_ = RegistryTypes.PetrolparkRestaurant | { customers?: $EntityPredicate_, xpRequiredForLevel?: $NumberProvider_, orderGeneratorEntries?: $List_<$Restaurant$OrderGeneratorEntry_>, globalOrderModifierEntries?: $List_<$RestaurantOrderGenerator$ModifierEntry_>, translationKey?: string,  } | [customers?: $EntityPredicate_, xpRequiredForLevel?: $NumberProvider_, orderGeneratorEntries?: $List_<$Restaurant$OrderGeneratorEntry_>, globalOrderModifierEntries?: $List_<$RestaurantOrderGenerator$ModifierEntry_>, translationKey?: string, ];
}
