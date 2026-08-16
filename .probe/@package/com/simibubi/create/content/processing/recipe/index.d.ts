import { $BlazeBurnerBlock$HeatLevel, $BlazeBurnerBlock$HeatLevel_ } from "@package/com/simibubi/create/content/processing/burner";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $RecipeSerializer, $Ingredient, $Recipe, $RecipeInput, $RecipeType } from "@package/net/minecraft/world/item/crafting";
import { $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $KubeCreateOutput } from "@package/dev/latvian/mods/kubejs/create/wrapper";
import { $IRecipeTypeInfo } from "@package/com/simibubi/create/foundation/recipe";
import { $List, $List_ } from "@package/java/util";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $SizedFluidIngredient } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $Supplier_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $Enum } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/processing/recipe" {
    export class $ProcessingOutput implements $KubeCreateOutput {
        getStack(): $ItemStack;
        getChance(): number;
        rollOutput(arg0: $RandomSource): $ItemStack;
        /**
         * @deprecated
         */
        static CODEC: $Codec<$ProcessingOutput>;
        /**
         * @deprecated
         */
        static CODEC_OLD: $Codec<$ProcessingOutput>;
        static EMPTY: $ProcessingOutput;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ProcessingOutput>;
        static CODEC_NEW: $Codec<$ProcessingOutput>;
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: $DataComponentPatch_, arg3: number);
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: number);
        constructor(arg0: $Item_, arg1: number, arg2: $DataComponentPatch_, arg3: number);
        constructor(arg0: $Item_, arg1: number, arg2: number);
        constructor(arg0: $ItemStack_, arg1: number);
        get stack(): $ItemStack;
        get chance(): number;
    }
    export class $StandardProcessingRecipe<T extends $RecipeInput> extends $ProcessingRecipe<T, $ProcessingRecipeParams> {
        constructor(arg0: $IRecipeTypeInfo, arg1: $ProcessingRecipeParams);
    }
    export class $HeatCondition extends $Enum<$HeatCondition> implements $StringRepresentable {
        static values(): $HeatCondition[];
        static valueOf(arg0: string): $HeatCondition;
        getColor(): number;
        getSerializedName(): string;
        getTranslationKey(): string;
        visualizeAsBlazeBurner(): $BlazeBurnerBlock$HeatLevel;
        testBlazeBurner(arg0: $BlazeBurnerBlock$HeatLevel_): boolean;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$HeatCondition>;
        static HEATED: $HeatCondition;
        static SUPERHEATED: $HeatCondition;
        static NONE: $HeatCondition;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $HeatCondition>;
        get color(): number;
        get serializedName(): string;
        get translationKey(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $HeatCondition}.
     */
    export type $HeatCondition_ = "none" | "heated" | "superheated";
    export class $ProcessingRecipe$Factory<P extends $ProcessingRecipeParams, R extends $ProcessingRecipe<never, P>> {
    }
    export interface $ProcessingRecipe$Factory<P extends $ProcessingRecipeParams, R extends $ProcessingRecipe<never, P>> {
        create(arg0: P): R;
    }
    /**
     * Values that may be interpreted as {@link $ProcessingRecipe$Factory}.
     */
    export type $ProcessingRecipe$Factory_<P, R> = ((arg0: P) => R);
    export class $ProcessingRecipe<I extends $RecipeInput, P extends $ProcessingRecipeParams> implements $Recipe<I> {
        validate(): $List<string>;
        getType(): $RecipeType<never>;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        static codec<P extends $ProcessingRecipeParams, R extends $ProcessingRecipe<never, P>>(arg0: $ProcessingRecipe$Factory_<P, R>, arg1: $MapCodec_<P>): $MapCodec<R>;
        getParams(): P;
        getTypeInfo(): $IRecipeTypeInfo;
        isSpecial(): boolean;
        getGroup(): string;
        static streamCodec<P extends $ProcessingRecipeParams, R extends $ProcessingRecipe<never, P>>(arg0: $ProcessingRecipe$Factory_<P, R>, arg1: $StreamCodec<$RegistryFriendlyByteBuf, P>): $StreamCodec<$RegistryFriendlyByteBuf, R>;
        getFluidIngredients(): $NonNullList<$SizedFluidIngredient>;
        getRollableResultsAsItemStacks(): $List<$ItemStack>;
        assemble(arg0: I, arg1: $HolderLookup$Provider): $ItemStack;
        getRollableResults(): $List<$ProcessingOutput>;
        rollResults(arg0: $List_<$ProcessingOutput>, arg1: $RandomSource): $List<$ItemStack>;
        rollResults(arg0: $RandomSource): $List<$ItemStack>;
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        getSerializer(): $RecipeSerializer<never>;
        getIngredients(): $NonNullList<$Ingredient>;
        getProcessingDuration(): number;
        enforceNextResult(arg0: $Supplier_<$ItemStack>): void;
        getRequiredHeat(): $HeatCondition;
        getFluidResults(): $NonNullList<$FluidStack>;
        modifyReturnValue$iki000$petrolpark$startDecay(arg0: $List_<any>, arg1: $List_<any>): $List<any>;
        getRemainingItems(arg0: I): $NonNullList<$ItemStack>;
        isIncomplete(): boolean;
        showNotification(): boolean;
        getToastSymbol(): $ItemStack;
        constructor(arg0: $IRecipeTypeInfo, arg1: P);
        get type(): $RecipeType<never>;
        get params(): P;
        get typeInfo(): $IRecipeTypeInfo;
        get special(): boolean;
        get group(): string;
        get fluidIngredients(): $NonNullList<$SizedFluidIngredient>;
        get rollableResultsAsItemStacks(): $List<$ItemStack>;
        get rollableResults(): $List<$ProcessingOutput>;
        get serializer(): $RecipeSerializer<never>;
        get ingredients(): $NonNullList<$Ingredient>;
        get processingDuration(): number;
        get requiredHeat(): $HeatCondition;
        get fluidResults(): $NonNullList<$FluidStack>;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
    }
    export class $ProcessingRecipeParams {
        static CODEC: $MapCodec<$ProcessingRecipeParams>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ProcessingRecipeParams>;
    }
}
