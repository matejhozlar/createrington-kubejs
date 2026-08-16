import { $IRecipeLayoutBuilder, $ITooltipBuilder } from "@package/mezz/jei/api/gui/builder";
import { $Codec } from "@package/com/mojang/serialization";
import { $IFocusGroup, $IRecipeManager, $RecipeType } from "@package/mezz/jei/api/recipe";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $IDrawable } from "@package/mezz/jei/api/gui/drawable";
import { $ICodecHelper } from "@package/mezz/jei/api/helpers";
import { $IRecipeSlotsView_, $IRecipeSlotDrawable } from "@package/mezz/jei/api/gui/ingredient";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $List, $List_ } from "@package/java/util";
import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";
import { $IRecipeExtrasBuilder } from "@package/mezz/jei/api/gui/widgets";
export * as extensions from "@package/mezz/jei/api/recipe/category/extensions";

declare module "@package/mezz/jei/api/recipe/category" {
    export class $IRecipeCategory<T> {
    }
    export interface $IRecipeCategory<T> {
        getTitle(): $Component;
        getCodec(arg0: $ICodecHelper, arg1: $IRecipeManager): $Codec<T>;
        getWidth(): number;
        onDisplayedIngredientsUpdate(arg0: T, arg1: $List_<$IRecipeSlotDrawable>, arg2: $IFocusGroup): void;
        draw(arg0: T, arg1: $IRecipeSlotsView_, arg2: $GuiGraphics, arg3: number, arg4: number): void;
        getIcon(): $IDrawable;
        isHandled(arg0: T): boolean;
        setRecipe(arg0: $IRecipeLayoutBuilder, arg1: T, arg2: $IFocusGroup): void;
        /**
         * @deprecated
         */
        getBackground(): $IDrawable;
        createRecipeExtras(arg0: $IRecipeExtrasBuilder, arg1: T, arg2: $IFocusGroup): void;
        /**
         * @deprecated
         */
        createRecipeExtras(arg0: $IRecipeExtrasBuilder, arg1: T, arg2: $IRecipeSlotsView_, arg3: $IFocusGroup): void;
        /**
         * @deprecated
         */
        handleInput(arg0: T, arg1: number, arg2: number, arg3: $InputConstants$Key): boolean;
        needsRecipeBorder(): boolean;
        /**
         * @deprecated
         */
        getTooltipStrings(arg0: T, arg1: $IRecipeSlotsView_, arg2: number, arg3: number): $List<$Component>;
        getTooltip(arg0: $ITooltipBuilder, arg1: T, arg2: $IRecipeSlotsView_, arg3: number, arg4: number): void;
        getHeight(): number;
        getRegistryName(arg0: T): $ResourceLocation;
        getRecipeType(): $RecipeType<T>;
        get title(): $Component;
        get width(): number;
        get icon(): $IDrawable;
        get background(): $IDrawable;
        get height(): number;
        get recipeType(): $RecipeType<T>;
    }
}
