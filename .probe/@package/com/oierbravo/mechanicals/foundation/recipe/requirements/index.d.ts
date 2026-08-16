import { $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RecipeRequirementType, $IRecipeRequirement } from "@package/com/oierbravo/mechanicals/foundation/recipe";
import { $Pair } from "@package/net/createmod/catnip/data";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/oierbravo/mechanicals/foundation/recipe/requirements" {
    export class $BiomeRequirement extends $Record implements $IRecipeRequirement {
        test(arg0: $Level_, arg1: $BlockEntity): boolean;
        static of(arg0: string): $BiomeRequirement;
        static of(arg0: $ResourceLocation_): $BiomeRequirement;
        static of(arg0: $ResourceKey_<$Biome>): $BiomeRequirement;
        getType(): $RecipeRequirementType<never>;
        getIdString(): string;
        biomeResourceKey(): $ResourceKey<$Biome>;
        toMissingComponent(): $Component;
        toTooltipComponent(): $Pair<$Component, $Component>;
        toItemTooltipComponent(): $Component;
        static CODEC: $MapCodec<$BiomeRequirement>;
        static ID: string;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BiomeRequirement>;
        constructor(biomeResourceKey: $ResourceKey_<$Biome>);
        get type(): $RecipeRequirementType<never>;
        get idString(): string;
    }
    /**
     * Values that may be interpreted as {@link $BiomeRequirement}.
     */
    export type $BiomeRequirement_ = { biomeResourceKey?: $ResourceKey_<$Biome>,  } | [biomeResourceKey?: $ResourceKey_<$Biome>, ];
    export class $MaxYRequirement extends $Record implements $IRecipeRequirement {
        test(arg0: $Level_, arg1: $BlockEntity): boolean;
        static of(arg0: number): $MaxYRequirement;
        getType(): $RecipeRequirementType<never>;
        getIdString(): string;
        maxY(): number;
        toMissingComponent(): $Component;
        toTooltipComponent(): $Pair<$Component, $Component>;
        toItemTooltipComponent(): $Component;
        static CODEC: $MapCodec<$MaxYRequirement>;
        static ID: string;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MaxYRequirement>;
        constructor(maxY: number);
        get type(): $RecipeRequirementType<never>;
        get idString(): string;
    }
    /**
     * Values that may be interpreted as {@link $MaxYRequirement}.
     */
    export type $MaxYRequirement_ = { maxY?: number,  } | [maxY?: number, ];
    export class $MinSpeedRequirement extends $Record implements $IRecipeRequirement {
        test(arg0: $Level_, arg1: $BlockEntity): boolean;
        static of(arg0: number): $MinSpeedRequirement;
        getType(): $RecipeRequirementType<never>;
        speed(): number;
        getIdString(): string;
        toMissingComponent(): $Component;
        toTooltipComponent(): $Pair<$Component, $Component>;
        toItemTooltipComponent(): $Component;
        static CODEC: $MapCodec<$MinSpeedRequirement>;
        static ID: string;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MinSpeedRequirement>;
        constructor(speed: number);
        get type(): $RecipeRequirementType<never>;
        get idString(): string;
    }
    /**
     * Values that may be interpreted as {@link $MinSpeedRequirement}.
     */
    export type $MinSpeedRequirement_ = { speed?: number,  } | [speed?: number, ];
    export class $MaxSpeedRequirement extends $Record implements $IRecipeRequirement {
        test(arg0: $Level_, arg1: $BlockEntity): boolean;
        static of(arg0: number): $MaxSpeedRequirement;
        getType(): $RecipeRequirementType<never>;
        speed(): number;
        getIdString(): string;
        toMissingComponent(): $Component;
        toTooltipComponent(): $Pair<$Component, $Component>;
        toItemTooltipComponent(): $Component;
        static CODEC: $MapCodec<$MaxSpeedRequirement>;
        static ID: string;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MaxSpeedRequirement>;
        constructor(speed: number);
        get type(): $RecipeRequirementType<never>;
        get idString(): string;
    }
    /**
     * Values that may be interpreted as {@link $MaxSpeedRequirement}.
     */
    export type $MaxSpeedRequirement_ = { speed?: number,  } | [speed?: number, ];
    export class $MinYRequirement extends $Record implements $IRecipeRequirement {
        test(arg0: $Level_, arg1: $BlockEntity): boolean;
        static of(arg0: number): $MinYRequirement;
        getType(): $RecipeRequirementType<never>;
        getIdString(): string;
        minY(): number;
        toMissingComponent(): $Component;
        toTooltipComponent(): $Pair<$Component, $Component>;
        toItemTooltipComponent(): $Component;
        static CODEC: $MapCodec<$MinYRequirement>;
        static ID: string;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MinYRequirement>;
        constructor(minY: number);
        get type(): $RecipeRequirementType<never>;
        get idString(): string;
    }
    /**
     * Values that may be interpreted as {@link $MinYRequirement}.
     */
    export type $MinYRequirement_ = { minY?: number,  } | [minY?: number, ];
    export class $BiomeTagRequirement extends $Record implements $IRecipeRequirement {
        test(arg0: $Level_, arg1: $BlockEntity): boolean;
        static of(arg0: $TagKey_<$Biome>): $BiomeTagRequirement;
        static of(arg0: string): $BiomeTagRequirement;
        static of(arg0: $ResourceLocation_): $BiomeTagRequirement;
        getType(): $RecipeRequirementType<never>;
        tag(): $TagKey<$Biome>;
        getIdString(): string;
        getResourceLocation(): $ResourceLocation;
        toMissingComponent(): $Component;
        toTooltipComponent(): $Pair<$Component, $Component>;
        toItemTooltipComponent(): $Component;
        static CODEC: $MapCodec<$BiomeTagRequirement>;
        static ID: string;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BiomeTagRequirement>;
        constructor(arg0: $ResourceLocation_);
        constructor(tag: $TagKey_<$Biome>);
        get type(): $RecipeRequirementType<never>;
        get idString(): string;
        get resourceLocation(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $BiomeTagRequirement}.
     */
    export type $BiomeTagRequirement_ = { tag?: $TagKey_<$Biome>,  } | [tag?: $TagKey_<$Biome>, ];
}
