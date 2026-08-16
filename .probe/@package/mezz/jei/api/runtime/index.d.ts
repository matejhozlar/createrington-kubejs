import { $Codec } from "@package/com/mojang/serialization";
import { $Rect2i } from "@package/net/minecraft/client/renderer";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $IGuiProperties, $IGhostIngredientHandler, $IGuiClickableArea } from "@package/mezz/jei/api/gui/handlers";
import { $IJeiHelpers } from "@package/mezz/jei/api/helpers";
import { $IJeiConfigManager } from "@package/mezz/jei/api/runtime/config";
import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";
import { $List, $Set, $Collection_, $List_, $Collection } from "@package/java/util";
import { $IRecipeTransferManager } from "@package/mezz/jei/api/recipe/transfer";
import { $IRecipeCategory } from "@package/mezz/jei/api/recipe/category";
import { $IClickableIngredientFactory } from "@package/mezz/jei/api/gui/builder";
import { $Stream } from "@package/java/util/stream";
import { $IIngredientType_, $IIngredientRenderer, $IIngredientTypeWithSubtypes, $IIngredientType, $ITypedIngredient, $IIngredientHelper } from "@package/mezz/jei/api/ingredients";
import { $AbstractContainerScreen } from "@package/net/minecraft/client/gui/screens/inventory";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $IRecipeManager, $RecipeType, $IFocus } from "@package/mezz/jei/api/recipe";
import { $Enum, $Class } from "@package/java/lang";
export * as config from "@package/mezz/jei/api/runtime/config";

declare module "@package/mezz/jei/api/runtime" {
    export class $IEditModeConfig$HideMode extends $Enum<$IEditModeConfig$HideMode> {
        static values(): $IEditModeConfig$HideMode[];
        static valueOf(arg0: string): $IEditModeConfig$HideMode;
        static WILDCARD: $IEditModeConfig$HideMode;
        static SINGLE: $IEditModeConfig$HideMode;
    }
    /**
     * Values that may be interpreted as {@link $IEditModeConfig$HideMode}.
     */
    export type $IEditModeConfig$HideMode_ = "single" | "wildcard";
    export class $IClickableIngredient<T> {
    }
    export interface $IClickableIngredient<T> {
        getArea(): $Rect2i;
        /**
         * @deprecated
         */
        getIngredientType(): $IIngredientType<T>;
        /**
         * @deprecated
         */
        getIngredient(): T;
        getTypedIngredient(): $ITypedIngredient<T>;
        get area(): $Rect2i;
        get ingredientType(): $IIngredientType<T>;
        get ingredient(): T;
        get typedIngredient(): $ITypedIngredient<T>;
    }
    export class $IIngredientManager$IIngredientListener {
    }
    export interface $IIngredientManager$IIngredientListener {
        onIngredientsAdded<V>(arg0: $IIngredientHelper<V>, arg1: $Collection_<$ITypedIngredient<V>>): void;
        onIngredientsRemoved<V>(arg0: $IIngredientHelper<V>, arg1: $Collection_<$ITypedIngredient<V>>): void;
    }
    export class $IEditModeConfig {
    }
    export interface $IEditModeConfig {
        getIngredientHiddenUsingConfigFile<V>(arg0: $ITypedIngredient<V>): $Set<$IEditModeConfig$HideMode>;
        isIngredientHiddenUsingConfigFile<V>(arg0: $ITypedIngredient<V>): boolean;
        showIngredientUsingConfigFile<V>(arg0: $ITypedIngredient<V>, arg1: $IEditModeConfig$HideMode_): void;
        hideIngredientUsingConfigFile<V>(arg0: $ITypedIngredient<V>, arg1: $IEditModeConfig$HideMode_): void;
    }
    export class $IScreenHelper {
    }
    export interface $IScreenHelper {
        getGuiExclusionAreas(arg0: $Screen): $Stream<$Rect2i>;
        getClickableIngredientUnderMouse(arg0: $Screen, arg1: number, arg2: number): $Stream<$IClickableIngredient<never>>;
        getGuiProperties<T extends $Screen>(arg0: T): ($IGuiProperties) | undefined;
        getGuiClickableArea(arg0: $AbstractContainerScreen<never>, arg1: number, arg2: number): $Stream<$IGuiClickableArea>;
        /**
         * @deprecated
         */
        getGhostIngredientHandler<T extends $Screen>(arg0: T): ($IGhostIngredientHandler<T>) | undefined;
        getGhostIngredientHandlers<T extends $Screen>(arg0: T): $List<$IGhostIngredientHandler<T>>;
    }
    export class $IJeiKeyMapping {
    }
    export interface $IJeiKeyMapping {
        isUnbound(): boolean;
        getTranslatedKeyMessage(): $Component;
        isActiveAndMatches(arg0: $InputConstants$Key): boolean;
        get unbound(): boolean;
        get translatedKeyMessage(): $Component;
    }
    export class $IJeiKeyMappings {
    }
    export interface $IJeiKeyMappings {
        getShowRecipe(): $IJeiKeyMapping;
        getShowUses(): $IJeiKeyMapping;
        get showRecipe(): $IJeiKeyMapping;
        get showUses(): $IJeiKeyMapping;
    }
    export class $IJeiRuntime {
    }
    export interface $IJeiRuntime {
        getBookmarkOverlay(): $IBookmarkOverlay;
        getEditModeConfig(): $IEditModeConfig;
        getConfigManager(): $IJeiConfigManager;
        getIngredientListOverlay(): $IIngredientListOverlay;
        getKeyMappings(): $IJeiKeyMappings;
        getRecipeManager(): $IRecipeManager;
        getIngredientFilter(): $IIngredientFilter;
        getJeiHelpers(): $IJeiHelpers;
        getIngredientManager(): $IIngredientManager;
        getScreenHelper(): $IScreenHelper;
        getRecipeTransferManager(): $IRecipeTransferManager;
        /**
         * @deprecated
         */
        getIngredientVisibility(): $IIngredientVisibility;
        getRecipesGui(): $IRecipesGui;
        get bookmarkOverlay(): $IBookmarkOverlay;
        get editModeConfig(): $IEditModeConfig;
        get configManager(): $IJeiConfigManager;
        get ingredientListOverlay(): $IIngredientListOverlay;
        get keyMappings(): $IJeiKeyMappings;
        get recipeManager(): $IRecipeManager;
        get ingredientFilter(): $IIngredientFilter;
        get jeiHelpers(): $IJeiHelpers;
        get ingredientManager(): $IIngredientManager;
        get screenHelper(): $IScreenHelper;
        get recipeTransferManager(): $IRecipeTransferManager;
        get ingredientVisibility(): $IIngredientVisibility;
        get recipesGui(): $IRecipesGui;
    }
    export class $IBookmarkOverlay {
    }
    export interface $IBookmarkOverlay {
        getItemStackUnderMouse(): $ItemStack;
        getIngredientUnderMouse<T>(arg0: $IIngredientType_<T>): T;
        getIngredientUnderMouse(): ($ITypedIngredient<never>) | undefined;
        get itemStackUnderMouse(): $ItemStack;
    }
    export class $IIngredientListOverlay {
    }
    export interface $IIngredientListOverlay {
        isListDisplayed(): boolean;
        getVisibleIngredients<T>(arg0: $IIngredientType_<T>): $List<T>;
        getIngredientUnderMouse<T>(arg0: $IIngredientType_<T>): T;
        getIngredientUnderMouse(): ($ITypedIngredient<never>) | undefined;
        hasKeyboardFocus(): boolean;
        get listDisplayed(): boolean;
    }
    export class $IJeiFeatures {
    }
    export interface $IJeiFeatures {
        disableInventoryEffectRendererGuiHandler(): void;
        isJeiGuiEnabled(): boolean;
        disableJeiGui(): void;
        get jeiGuiEnabled(): boolean;
    }
    export class $IRecipesGui {
    }
    export interface $IRecipesGui {
        show<V>(arg0: $IFocus<V>): void;
        show(arg0: $List_<$IFocus<never>>): void;
        getIngredientUnderMouse<T>(arg0: $IIngredientType_<T>): (T) | undefined;
        getParentScreen(): ($Screen) | undefined;
        showRecipes<T>(arg0: $IRecipeCategory<T>, arg1: $List_<T>, arg2: $List_<$IFocus<never>>): void;
        showTypes(arg0: $List_<$RecipeType<never>>): void;
        get parentScreen(): ($Screen) | undefined;
    }
    export class $IIngredientVisibility$IListener {
    }
    export interface $IIngredientVisibility$IListener {
        onIngredientVisibilityChanged<V>(arg0: $ITypedIngredient<V>, arg1: boolean): void;
        onIngredientsVisibilityChanged<V>(arg0: $Collection_<$ITypedIngredient<V>>, arg1: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $IIngredientVisibility$IListener}.
     */
    export type $IIngredientVisibility$IListener_ = ((arg0: $ITypedIngredient<any>, arg1: boolean) => void);
    export class $IIngredientManager {
    }
    export interface $IIngredientManager {
        getIngredientTypeChecked<V>(arg0: V): ($IIngredientType<V>) | undefined;
        getIngredientTypeChecked<V>(arg0: $Class<V>): ($IIngredientType<V>) | undefined;
        getAllTypedIngredients<V>(arg0: $IIngredientType_<V>): $Collection<$ITypedIngredient<V>>;
        getIngredientRenderer<V>(arg0: V): $IIngredientRenderer<V>;
        getIngredientRenderer<V>(arg0: $IIngredientType_<V>): $IIngredientRenderer<V>;
        getIngredientTypeForUid(arg0: string): ($IIngredientType<never>) | undefined;
        normalizeTypedIngredient<V>(arg0: $ITypedIngredient<V>): $ITypedIngredient<V>;
        /**
         * @deprecated
         */
        createClickableIngredient<V>(arg0: $IIngredientType_<V>, arg1: V, arg2: $Rect2i, arg3: boolean): ($IClickableIngredient<V>) | undefined;
        /**
         * @deprecated
         */
        createClickableIngredient<V>(arg0: V, arg1: $Rect2i, arg2: boolean): ($IClickableIngredient<V>) | undefined;
        /**
         * @deprecated
         */
        getTypedIngredientByUid<V>(arg0: $IIngredientType_<V>, arg1: string): ($ITypedIngredient<V>) | undefined;
        registerIngredientListener(arg0: $IIngredientManager$IIngredientListener): void;
        getIngredientAliases(arg0: $ITypedIngredient<never>): $Collection<string>;
        getAllItemStacks(): $Collection<$ItemStack>;
        /**
         * @deprecated
         */
        getIngredientByUid<V>(arg0: $IIngredientType_<V>, arg1: string): (V) | undefined;
        removeIngredientsAtRuntime<V>(arg0: $IIngredientType_<V>, arg1: $Collection_<V>): void;
        getIngredientTypeWithSubtypesFromBase<B, I>(arg0: B): ($IIngredientTypeWithSubtypes<B, I>) | undefined;
        getIngredientCodec<V>(arg0: $IIngredientType_<V>): $Codec<V>;
        getIngredientHelper<V>(arg0: $IIngredientType_<V>): $IIngredientHelper<V>;
        getIngredientHelper<V>(arg0: V): $IIngredientHelper<V>;
        getIngredientType<V>(arg0: V): $IIngredientType<V>;
        addIngredientsAtRuntime<V>(arg0: $IIngredientType_<V>, arg1: $Collection_<V>): void;
        createTypedIngredient<T>(arg0: T, arg1: boolean): ($ITypedIngredient<T>) | undefined;
        createTypedIngredient<V>(arg0: $IIngredientType_<V>, arg1: V, arg2: boolean): ($ITypedIngredient<V>) | undefined;
        /**
         * @deprecated
         */
        createTypedIngredient<V>(arg0: V): ($ITypedIngredient<V>) | undefined;
        /**
         * @deprecated
         */
        createTypedIngredient<V>(arg0: $IIngredientType_<V>, arg1: V): ($ITypedIngredient<V>) | undefined;
        getAllIngredients<V>(arg0: $IIngredientType_<V>): $Collection<V>;
        getClickableIngredientFactory(): $IClickableIngredientFactory;
        getRegisteredIngredientTypes(): $Collection<$IIngredientType<never>>;
        get allItemStacks(): $Collection<$ItemStack>;
        get clickableIngredientFactory(): $IClickableIngredientFactory;
        get registeredIngredientTypes(): $Collection<$IIngredientType<never>>;
    }
    export class $IIngredientVisibility {
    }
    export interface $IIngredientVisibility {
        registerListener(arg0: $IIngredientVisibility$IListener_): void;
        isIngredientVisible<V>(arg0: $ITypedIngredient<V>): boolean;
        isIngredientVisible<V>(arg0: $IIngredientType_<V>, arg1: V): boolean;
    }
    export class $IIngredientFilter {
    }
    export interface $IIngredientFilter {
        getFilteredItemStacks(): $List<$ItemStack>;
        getFilteredIngredients<T>(arg0: $IIngredientType_<T>): $List<T>;
        setFilterText(arg0: string): void;
        getFilterText(): string;
        get filteredItemStacks(): $List<$ItemStack>;
    }
}
