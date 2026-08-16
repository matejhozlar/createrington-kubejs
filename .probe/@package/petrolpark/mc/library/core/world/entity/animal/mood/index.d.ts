import { $Holder } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $EntityNumberProvider } from "@package/petrolpark/mc/library/core/data/numberProvider/entity";
import { $StringProvider } from "@package/petrolpark/mc/library/core/data/stringProvider";
import { $Record } from "@package/java/lang";
import { $List_, $List } from "@package/java/util";
import { $EntityPredicate_, $EntityPredicate } from "@package/net/minecraft/advancements/critereon";

declare module "@package/petrolpark/mc/library/core/world/entity/animal/mood" {
    export interface $AnimalMoodModifier extends RegistryMarked<RegistryTypes.PetrolparkAnimalMoodModifierTag, RegistryTypes.PetrolparkAnimalMoodModifier> {}
    export class $AnimalMoodModifier extends $Record {
        value(): $EntityNumberProvider;
        predicate(): $EntityPredicate;
        translationArgs(): $List<$StringProvider>;
        translationKey(): string;
        static UNVALIDATED_DIRECT_CODEC: $Codec<$AnimalMoodModifier>;
        static CODEC: $Codec<$Holder<$AnimalMoodModifier>>;
        static DIRECT_CODEC: $Codec<$AnimalMoodModifier>;
        constructor(predicate: $EntityPredicate_, value: $EntityNumberProvider, translationKey: string, translationArgs: $List_<$StringProvider>);
    }
    /**
     * Values that may be interpreted as {@link $AnimalMoodModifier}.
     */
    export type $AnimalMoodModifier_ = RegistryTypes.PetrolparkAnimalMoodModifier | { translationArgs?: $List_<$StringProvider>, predicate?: $EntityPredicate_, translationKey?: string, value?: $EntityNumberProvider,  } | [translationArgs?: $List_<$StringProvider>, predicate?: $EntityPredicate_, translationKey?: string, value?: $EntityNumberProvider, ];
}
