import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/petrolpark/mc/library/core/world/item/decay/product" {
    export class $IDecayProduct {
        static CODEC: $Codec<$IDecayProduct>;
        static TYPED_CODEC: $Codec<$IDecayProduct>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $IDecayProduct>;
    }
    export interface $IDecayProduct {
        get(arg0: $ItemStack_): $ItemStack;
        getType(): $DecayProductType;
        get type(): $DecayProductType;
    }
    export class $DecayProductType extends $Record {
        codec(): $MapCodec<$IDecayProduct>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $IDecayProduct>;
        constructor(codec: $MapCodec_<$IDecayProduct>, streamCodec: $StreamCodec<$RegistryFriendlyByteBuf, $IDecayProduct>);
    }
    /**
     * Values that may be interpreted as {@link $DecayProductType}.
     */
    export type $DecayProductType_ = RegistryTypes.PetrolparkDecayProductType | { streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $IDecayProduct>, codec?: $MapCodec_<$IDecayProduct>,  } | [streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $IDecayProduct>, codec?: $MapCodec_<$IDecayProduct>, ];
    export interface $DecayProductType extends RegistryMarked<RegistryTypes.PetrolparkDecayProductTypeTag, RegistryTypes.PetrolparkDecayProductType> {}
}
