import { $IRecipeBookAcceptorBlockEntity } from "@package/petrolpark/mc/library/core/world/item/crafting/recipeBook";
import { $Level } from "@package/net/minecraft/world/level";
import { $Consumer_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $RecipeHolder_, $Recipe } from "@package/net/minecraft/world/item/crafting";
import { $KineticBlockEntity } from "@package/com/simibubi/create/content/kinetics/base";
import { $DeferralBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/simple";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $BasinOperatingBlockEntityAccessor } from "@package/petrolpark/mc/library/mixin/compat/create/accessor";
import { $BlockEntityType_, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/content/processing/basin" {
    export class $BasinOperatingBlockEntity extends $KineticBlockEntity implements $BasinOperatingBlockEntityAccessor, $IRecipeBookAcceptorBlockEntity {
        onAvailableRecipesChanged(): void;
        addProxyRecipeBookAcceptorPositions(arg0: $Consumer_<any>): void;
        acceptsRecipeBook(arg0: $RecipeHolder_<any>): boolean;
        startProcessingBasin(): void;
        continueWithPreviousRecipe(): boolean;
        callMatchStaticFilters(arg0: $RecipeHolder_<$Recipe<never>>): boolean;
        getCurrentRecipe(): $Recipe<never>;
        basinRemoved: boolean;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        sourceIndex: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        basinChecker: $DeferralBehaviour;
        network: number;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        worldPosition: $BlockPos;
        updateSpeed: boolean;
        hasComparators: number;
        preventSpeedUpdate: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get currentRecipe(): $Recipe<never>;
    }
}
