import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Record } from "@package/java/lang";
import { $LootContextUser, $LootContext } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/petrolpark/mc/library/core/data/stringProvider" {
    export interface $StringProviderType extends RegistryMarked<RegistryTypes.PetrolparkStringProviderTypeTag, RegistryTypes.PetrolparkStringProviderType> {}
    export class $StringProviderType extends $Record {
        codec(): $MapCodec<$StringProvider>;
        constructor(codec: $MapCodec_<$StringProvider>);
    }
    /**
     * Values that may be interpreted as {@link $StringProviderType}.
     */
    export type $StringProviderType_ = RegistryTypes.PetrolparkStringProviderType | { codec?: $MapCodec_<$StringProvider>,  } | [codec?: $MapCodec_<$StringProvider>, ];
    export class $StringProvider {
        static CODEC: $Codec<$StringProvider>;
        static TYPED_CODEC: $Codec<$StringProvider>;
    }
    export interface $StringProvider extends $LootContextUser {
        getString(arg0: $LootContext): $Component;
        getStringProviderType(): $StringProviderType;
        get stringProviderType(): $StringProviderType;
    }
}
