import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $List } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/petrolpark/mc/library/core/data/recipe/bogglePattern/generator" {
    export interface $BogglePatternGeneratorType extends RegistryMarked<RegistryTypes.PetrolparkBogglePatternGeneratorTypeTag, RegistryTypes.PetrolparkBogglePatternGeneratorType> {}
    export class $BogglePatternGeneratorType extends $Record {
        networkCodec(): $MapCodec<$IBogglePatternGenerator>;
        codec(): $MapCodec<$IBogglePatternGenerator>;
        constructor(codec: $MapCodec_<$IBogglePatternGenerator>, networkCodec: $MapCodec_<$IBogglePatternGenerator>);
    }
    /**
     * Values that may be interpreted as {@link $BogglePatternGeneratorType}.
     */
    export type $BogglePatternGeneratorType_ = RegistryTypes.PetrolparkBogglePatternGeneratorType | { networkCodec?: $MapCodec_<$IBogglePatternGenerator>, codec?: $MapCodec_<$IBogglePatternGenerator>,  } | [networkCodec?: $MapCodec_<$IBogglePatternGenerator>, codec?: $MapCodec_<$IBogglePatternGenerator>, ];
    export class $IBogglePatternGenerator {
        static POSITIONS: $List<number>;
        static CODEC: $Codec<$IBogglePatternGenerator>;
        static NETWORK_CODEC: $Codec<$IBogglePatternGenerator>;
        static TYPED_NETWORK_CODEC: $Codec<$IBogglePatternGenerator>;
        static TYPED_CODEC: $Codec<$IBogglePatternGenerator>;
    }
    export interface $IBogglePatternGenerator {
        getType(): $BogglePatternGeneratorType;
        generate(arg0: $RandomSource): number;
        get type(): $BogglePatternGeneratorType;
    }
}
