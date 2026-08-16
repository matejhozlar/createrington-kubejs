import { $Level, $Level_, $ItemLike_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Ingredient_, $SingleRecipeInput_, $Recipe, $SingleRecipeInput, $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $DeferralBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/simple";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $Component } from "@package/net/minecraft/network/chat";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $BeltProcessingBehaviour } from "@package/com/simibubi/create/content/kinetics/belt/behaviour";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $List, $Optional, $Set_, $List_ } from "@package/java/util";
import { $ProcessingRecipeParams, $StandardProcessingRecipe } from "@package/com/simibubi/create/content/processing/recipe";
import { $BehaviourType } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $SizedFluidIngredient } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $IRecipeBookAcceptorBlockEntity } from "@package/petrolpark/mc/library/core/world/item/crafting/recipeBook";
import { $Supplier } from "@package/java/util/function";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BasinOperatingBlockEntity } from "@package/com/simibubi/create/content/processing/basin";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $SequencedAssemblySubCategory } from "@package/com/simibubi/create/compat/jei/category/sequencedAssembly";
import { $Enum } from "@package/java/lang";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $IAssemblyRecipe } from "@package/com/simibubi/create/content/processing/sequenced";
import { $BlockEntityType, $BlockEntityType_ } from "@package/net/minecraft/world/level/block/entity";
import { $TransportedItemStack } from "@package/com/simibubi/create/content/kinetics/belt/transport";

declare module "@package/com/simibubi/create/content/kinetics/press" {
    export class $PressingBehaviour$Mode extends $Enum<$PressingBehaviour$Mode> {
        static values(): $PressingBehaviour$Mode[];
        static valueOf(arg0: string): $PressingBehaviour$Mode;
        static invokeInit$petrolpark_$md$66668e$0(arg0: string, arg1: number, arg2: number): $PressingBehaviour$Mode;
        headOffset: number;
        static BELT: $PressingBehaviour$Mode;
        static BASIN: $PressingBehaviour$Mode;
        static WORLD: $PressingBehaviour$Mode;
    }
    /**
     * Values that may be interpreted as {@link $PressingBehaviour$Mode}.
     */
    export type $PressingBehaviour$Mode_ = "world" | "belt" | "basin" | "petrolpark_mesh_basin";
    export class $PressingRecipe extends $StandardProcessingRecipe<$SingleRecipeInput> implements $IAssemblyRecipe {
        matches(arg0: $SingleRecipeInput_, arg1: $Level_): boolean;
        addRequiredMachines(arg0: $Set_<$ItemLike_>): void;
        getDescriptionForAssembly(): $Component;
        addAssemblyIngredients(arg0: $List_<$Ingredient_>): void;
        getJEISubCategory(): $Supplier<$Supplier<$SequencedAssemblySubCategory>>;
        addAssemblyFluidIngredients(arg0: $List_<$SizedFluidIngredient>): void;
        supportsAssembly(): boolean;
        constructor(arg0: $ProcessingRecipeParams);
        get descriptionForAssembly(): $Component;
        get JEISubCategory(): $Supplier<$Supplier<$SequencedAssemblySubCategory>>;
    }
    export class $MechanicalPressBlockEntity extends $BasinOperatingBlockEntity implements $PressingBehaviour$PressingBehaviourSpecifics, $IRecipeBookAcceptorBlockEntity {
        handler$fmg000$brassworksmissions$afterItemPressed(arg0: $ItemStack_, arg1: $CallbackInfo): void;
        modify$ikd000$petrolpark$useMeshBasinOffset(arg0: $PressingBehaviour$Mode_): $PressingBehaviour$Mode;
        getParticleAmount(): number;
        getRecipe(arg0: $ItemStack_): ($RecipeHolder<$PressingRecipe>) | undefined;
        static canCompress(arg0: $Recipe<never>): boolean;
        modifyReturnValue$hce000$petrolsparts$filterRecipes(arg0: $Optional<any>, arg1: $ItemStack_): $Optional<any>;
        modifyReturnValue$ikd000$petrolpark$searchPressingRecipes(arg0: $Optional<any>, arg1: $ItemStack_): $Optional<any>;
        onPressingCompleted(): void;
        getPressingBehaviour(): $PressingBehaviour;
        tryProcessOnBelt(arg0: $TransportedItemStack, arg1: $List_<$ItemStack_>, arg2: boolean): boolean;
        onItemPressed(arg0: $ItemStack_): void;
        canProcessInBulk(): boolean;
        tryProcessInWorld(arg0: $ItemEntity, arg1: boolean): boolean;
        tryProcessInBasin(arg0: boolean): boolean;
        getKineticSpeed(): number;
        basinRemoved: boolean;
        pressingBehaviour: $PressingBehaviour;
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
        get particleAmount(): number;
        get kineticSpeed(): number;
    }
    export class $PressingBehaviour$PressingBehaviourSpecifics {
    }
    export interface $PressingBehaviour$PressingBehaviourSpecifics {
        getParticleAmount(): number;
        onPressingCompleted(): void;
        tryProcessOnBelt(arg0: $TransportedItemStack, arg1: $List_<$ItemStack_>, arg2: boolean): boolean;
        canProcessInBulk(): boolean;
        tryProcessInWorld(arg0: $ItemEntity, arg1: boolean): boolean;
        tryProcessInBasin(arg0: boolean): boolean;
        getKineticSpeed(): number;
        get particleAmount(): number;
        get kineticSpeed(): number;
    }
    export class $PressingBehaviour extends $BeltProcessingBehaviour {
        start(arg0: $PressingBehaviour$Mode_): void;
        inWorld(): boolean;
        modifyReturnValue$ikh000$petrolpark$onMeshBasin(arg0: boolean): boolean;
        onBasin(): boolean;
        makePressingParticleEffect(arg0: $Vec3_, arg1: $ItemStack_, arg2: number): void;
        makePressingParticleEffect(arg0: $Vec3_, arg1: $ItemStack_): void;
        getRenderedHeadOffset(arg0: number): number;
        makeCompactingParticleEffect(arg0: $Vec3_, arg1: $ItemStack_): void;
        getRunningTickSpeed(): number;
        running: boolean;
        mode: $PressingBehaviour$Mode;
        prevRunningTicks: number;
        static ENTITY_SCAN: number;
        runningTicks: number;
        particleItems: $List<$ItemStack>;
        blockEntity: $SmartBlockEntity;
        finished: boolean;
        static TYPE: $BehaviourType<$BeltProcessingBehaviour>;
        static CYCLE: number;
        specifics: $PressingBehaviour$PressingBehaviourSpecifics;
        constructor<T extends $SmartBlockEntity>(arg0: T);
        get runningTickSpeed(): number;
    }
}
