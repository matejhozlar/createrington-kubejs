import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $IScalableDrawable, $IDrawableBuilder, $IDrawable, $IDrawableAnimated, $IDrawableAnimated$StartDirection_, $IDrawableStatic } from "@package/mezz/jei/api/gui/drawable";
import { $ICraftingGridHelper } from "@package/mezz/jei/api/gui/ingredient";
import { $IVanillaRecipeFactory } from "@package/mezz/jei/api/recipe/vanilla";
import { $List, $List_, $Set } from "@package/java/util";
import { $IIngredientVisibility, $IIngredientManager } from "@package/mezz/jei/api/runtime";
import { $IRecipeCategory } from "@package/mezz/jei/api/recipe/category";
import { $Holder_ } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $IIngredientType_, $IIngredientTypeWithSubtypes, $IIngredientType, $IIngredientHelper, $ITypedIngredient } from "@package/mezz/jei/api/ingredients";
import { $IRecipeManager, $IFocusFactory, $RecipeType } from "@package/mezz/jei/api/recipe";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $UidContext_ } from "@package/mezz/jei/api/ingredients/subtypes";
import { $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $TextureAtlasSprite, $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $Class, $Object } from "@package/java/lang";
import { $IRecipeWidget, $IScrollGridWidgetFactory, $IScrollBoxWidget } from "@package/mezz/jei/api/gui/widgets";
import { $ITickTimer } from "@package/mezz/jei/api/gui";

declare module "@package/mezz/jei/api/helpers" {
    export class $ICodecHelper {
    }
    export interface $ICodecHelper {
        getSlowRecipeCategoryCodec<T>(arg0: $IRecipeCategory<T>, arg1: $IRecipeManager): $Codec<T>;
        getRecipeHolderCodec<T extends $RecipeHolder<never>>(): $Codec<T>;
        getTypedIngredientCodec<T>(arg0: $IIngredientType_<T>): $Codec<$ITypedIngredient<T>>;
        getTypedIngredientCodec(): $MapCodec<$ITypedIngredient<never>>;
        getIngredientTypeCodec(): $Codec<$IIngredientType<never>>;
        getRecipeTypeCodec(arg0: $IRecipeManager): $Codec<$RecipeType<never>>;
        get recipeHolderCodec(): $Codec<T>;
        get ingredientTypeCodec(): $Codec<$IIngredientType<never>>;
    }
    export class $IPlatformFluidHelper<T> {
    }
    export interface $IPlatformFluidHelper<T> {
        create(arg0: $Holder_<$Fluid>, arg1: number): T;
        create(arg0: $Holder_<$Fluid>, arg1: number, arg2: $DataComponentPatch_): T;
        bucketVolume(): number;
        getFluidIngredientType(): $IIngredientTypeWithSubtypes<$Fluid, T>;
        get fluidIngredientType(): $IIngredientTypeWithSubtypes<$Fluid, T>;
    }
    export class $IStackHelper {
    }
    export interface $IStackHelper {
        isEquivalent(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $UidContext_): boolean;
        getUidForStack(arg0: $ItemStack_, arg1: $UidContext_): $Object;
        getUidForStack(arg0: $ITypedIngredient<$ItemStack_>, arg1: $UidContext_): $Object;
        /**
         * @deprecated
         */
        getUniqueIdentifierForStack(arg0: $ItemStack_, arg1: $UidContext_): string;
    }
    export class $IJeiHelpers {
    }
    export interface $IJeiHelpers {
        getPlatformFluidHelper(): $IPlatformFluidHelper<never>;
        getGuiHelper(): $IGuiHelper;
        getCodecHelper(): $ICodecHelper;
        getModIdHelper(): $IModIdHelper;
        getAllRecipeTypes(): $Stream<$RecipeType<never>>;
        getIngredientManager(): $IIngredientManager;
        getColorHelper(): $IColorHelper;
        getFocusFactory(): $IFocusFactory;
        getStackHelper(): $IStackHelper;
        getVanillaRecipeFactory(): $IVanillaRecipeFactory;
        getIngredientVisibility(): $IIngredientVisibility;
        getRecipeType(arg0: $ResourceLocation_): ($RecipeType<never>) | undefined;
        getRecipeType<T>(arg0: $ResourceLocation_, arg1: $Class<T>): ($RecipeType<T>) | undefined;
        get platformFluidHelper(): $IPlatformFluidHelper<never>;
        get guiHelper(): $IGuiHelper;
        get codecHelper(): $ICodecHelper;
        get modIdHelper(): $IModIdHelper;
        get allRecipeTypes(): $Stream<$RecipeType<never>>;
        get ingredientManager(): $IIngredientManager;
        get colorHelper(): $IColorHelper;
        get focusFactory(): $IFocusFactory;
        get stackHelper(): $IStackHelper;
        get vanillaRecipeFactory(): $IVanillaRecipeFactory;
        get ingredientVisibility(): $IIngredientVisibility;
    }
    export class $IColorHelper {
    }
    export interface $IColorHelper {
        getClosestColorName(arg0: number): string;
        getColors(arg0: $ItemStack_, arg1: number): $List<number>;
        getColors(arg0: $TextureAtlasSprite, arg1: number, arg2: number): $List<number>;
    }
    export class $IModIdHelper {
    }
    export interface $IModIdHelper {
        getModAliases(arg0: string): $Set<string>;
        getModNameForModId(arg0: string): string;
        /**
         * @deprecated
         */
        getFormattedModNameForModId(arg0: string): string;
        /**
         * @deprecated
         */
        addModNameToIngredientTooltip<T>(arg0: $List_<$Component_>, arg1: $ITypedIngredient<T>): $List<$Component>;
        /**
         * @deprecated
         */
        addModNameToIngredientTooltip<T>(arg0: $List_<$Component_>, arg1: T, arg2: $IIngredientHelper<T>): $List<$Component>;
        getFormattedModNameComponentForModId(arg0: string): $Component;
        getModNameForTooltip<T>(arg0: $ITypedIngredient<T>): ($Component) | undefined;
        isDisplayingModNameEnabled(): boolean;
        get displayingModNameEnabled(): boolean;
    }
    export class $IGuiHelper {
    }
    export interface $IGuiHelper {
        getOutputSlot(): $IDrawableStatic;
        getRecipeArrowFilled(): $IDrawableStatic;
        getRecipePlusSign(): $IDrawableStatic;
        getRecipeArrow(): $IDrawableStatic;
        createDrawable(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number): $IDrawableStatic;
        createTickTimer(arg0: number, arg1: number, arg2: boolean): $ITickTimer;
        drawableBuilder(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number): $IDrawableBuilder;
        getSlotDrawable(): $IDrawableStatic;
        /**
         * @deprecated
         */
        getScrollBoxScrollbarExtraWidth(): number;
        createScalableDrawableSprite(arg0: $TextureAtlas, arg1: $ResourceLocation_): $IScalableDrawable;
        createAnimatedRecipeArrow(arg0: number): $IDrawableAnimated;
        /**
         * @deprecated
         */
        createScrollGridFactory(arg0: number, arg1: number): $IScrollGridWidgetFactory<never>;
        createDrawableSprite(arg0: $TextureAtlas, arg1: $ResourceLocation_, arg2: number, arg3: number): $IDrawableStatic;
        /**
         * @deprecated
         */
        createDrawableSprite(arg0: $TextureAtlas, arg1: $ResourceLocation_): $IDrawableStatic;
        createAnimatedDrawable(arg0: $IDrawableStatic, arg1: $ITickTimer, arg2: $IDrawableAnimated$StartDirection_): $IDrawableAnimated;
        createAnimatedDrawable(arg0: $IDrawableStatic, arg1: number, arg2: $IDrawableAnimated$StartDirection_, arg3: boolean): $IDrawableAnimated;
        getRecipeFlameFilled(): $IDrawableStatic;
        createWidgetFromDrawable(arg0: $IDrawable, arg1: number, arg2: number): $IRecipeWidget;
        createDrawableIngredient<V>(arg0: $IIngredientType_<V>, arg1: V): $IDrawable;
        createDrawableIngredient<V>(arg0: $ITypedIngredient<V>): $IDrawable;
        /**
         * @deprecated
         */
        createScrollBoxWidget(arg0: $IDrawable, arg1: number, arg2: number, arg3: number): $IScrollBoxWidget;
        createScrollBoxWidget(arg0: number, arg1: number, arg2: number, arg3: number): $IScrollBoxWidget;
        createDrawableItemStack(arg0: $ItemStack_): $IDrawable;
        createCraftingGridHelper(): $ICraftingGridHelper;
        getRecipeFlameEmpty(): $IDrawableStatic;
        createDrawableItemLike(arg0: $ItemLike_): $IDrawable;
        createBlankDrawable(arg0: number, arg1: number): $IDrawableStatic;
        createAnimatedRecipeFlame(arg0: number): $IDrawableAnimated;
        get outputSlot(): $IDrawableStatic;
        get recipeArrowFilled(): $IDrawableStatic;
        get recipePlusSign(): $IDrawableStatic;
        get recipeArrow(): $IDrawableStatic;
        get slotDrawable(): $IDrawableStatic;
        get scrollBoxScrollbarExtraWidth(): number;
        get recipeFlameFilled(): $IDrawableStatic;
        get recipeFlameEmpty(): $IDrawableStatic;
    }
}
