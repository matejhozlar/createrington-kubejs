import { $Level_ } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $IBogglePatternGenerator } from "@package/petrolpark/mc/library/core/data/recipe/bogglePattern/generator";
export * as generator from "@package/petrolpark/mc/library/core/data/recipe/bogglePattern/generator";

declare module "@package/petrolpark/mc/library/core/data/recipe/bogglePattern" {
    export class $BogglePattern {
        getPattern(): number;
        getOrGeneratePattern(arg0: $Level_): number;
        getGenerator(): $IBogglePatternGenerator;
        forgetPattern(): void;
        static NETWORK_DIRECT_CODEC: $Codec<$BogglePattern>;
        static DIRECT_CODEC: $Codec<$BogglePattern>;
        constructor(arg0: $IBogglePatternGenerator);
        get pattern(): number;
        get generator(): $IBogglePatternGenerator;
    }
    /**
     * Values that may be interpreted as {@link $BogglePattern}.
     */
    export type $BogglePattern_ = RegistryTypes.PetrolparkBogglePattern;
    export interface $BogglePattern extends RegistryMarked<RegistryTypes.PetrolparkBogglePatternTag, RegistryTypes.PetrolparkBogglePattern> {}
}
