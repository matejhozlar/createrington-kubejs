import { $Level_ } from "@package/net/minecraft/world/level";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Component } from "@package/net/minecraft/network/chat";
import { $List } from "@package/java/util";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Pair } from "@package/net/createmod/catnip/data";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as requirements from "@package/com/oierbravo/mechanicals/foundation/recipe/requirements";

declare module "@package/com/oierbravo/mechanicals/foundation/recipe" {
    export interface $RecipeRequirementType<RR> extends RegistryMarked<RegistryTypes.MechanicalsRequirementTag, RegistryTypes.MechanicalsRequirement> {}
    export class $IRecipeRequirement {
        static LIST_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $List<$IRecipeRequirement>>;
        static CODEC: $Codec<$IRecipeRequirement>;
        static LIST_CODEC: $Codec<$List<$IRecipeRequirement>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $IRecipeRequirement>;
    }
    export interface $IRecipeRequirement {
        toString(): string;
        test(arg0: $Level_, arg1: $BlockEntity): boolean;
        getType(): $RecipeRequirementType<never>;
        getIdString(): string;
        toMissingComponent(): $Component;
        toTooltipComponent(): $Pair<$Component, $Component>;
        toItemTooltipComponent(): $Component;
        get type(): $RecipeRequirementType<never>;
        get idString(): string;
    }
    export class $RecipeRequirementType<RR extends $IRecipeRequirement> {
        codec(): $MapCodec<RR>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, RR>;
        constructor(arg0: $MapCodec_<RR>, arg1: $StreamCodec<$RegistryFriendlyByteBuf, RR>);
    }
    /**
     * Values that may be interpreted as {@link $RecipeRequirementType}.
     */
    export type $RecipeRequirementType_<RR> = RegistryTypes.MechanicalsRequirement;
}
