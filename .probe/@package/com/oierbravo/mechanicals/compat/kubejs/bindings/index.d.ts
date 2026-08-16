import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MaxSpeedRequirement, $MaxYRequirement, $BiomeTagRequirement, $MinYRequirement, $MinSpeedRequirement, $BiomeRequirement } from "@package/com/oierbravo/mechanicals/foundation/recipe/requirements";
import { $ProcessingOutput } from "@package/com/simibubi/create/content/processing/recipe";
import { $BlockPredicate$Builder, $BlockPredicate } from "@package/net/minecraft/advancements/critereon";

declare module "@package/com/oierbravo/mechanicals/compat/kubejs/bindings" {
    export class $ProcessingOutputBuilder {
        static of(arg0: $ItemStack_): $ProcessingOutput;
        static of(arg0: $ItemStack_, arg1: number): $ProcessingOutput;
        constructor();
    }
    export class $RecipeRequirementBuilder {
        static maxSpeed(arg0: number): $MaxSpeedRequirement;
        static biome(arg0: string): $BiomeRequirement;
        static biomeTag(arg0: string): $BiomeTagRequirement;
        static minY(arg0: number): $MinYRequirement;
        static maxY(arg0: number): $MaxYRequirement;
        static minSpeed(arg0: number): $MinSpeedRequirement;
        constructor();
    }
    export class $BlockPredicateBuilder {
        static of(arg0: string): $BlockPredicate;
        static from(arg0: string): $BlockPredicate$Builder;
        constructor();
    }
}
