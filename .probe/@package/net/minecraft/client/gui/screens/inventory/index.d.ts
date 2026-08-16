import { $HandledScreenAccessor } from "@package/dev/emi/emi/mixin/accessor";
import { $CubeMap, $PanoramaRenderer, $Rect2i } from "@package/net/minecraft/client/renderer";
import { $RecipeUpdateListener, $AbstractFurnaceRecipeBookComponent, $RecipeBookComponent } from "@package/net/minecraft/client/gui/screens/recipebook";
import { $Executor } from "@package/java/util/concurrent";
import { $AbstractContainerScreenAccessor } from "@package/yalter/mousetweaks/mixin";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $NarratorStatus, $Minecraft, $StringSplitter } from "@package/net/minecraft/client";
import { $Map, $Set, $List, $List_, $Optional } from "@package/java/util";
import { $AccessorSmithingScreen } from "@package/com/illusivesoulworks/polymorph/mixin/core";
import { $AbstractContainerScreenAccessor as $AbstractContainerScreenAccessor$1 } from "@package/net/blay09/mods/balm/mixin";
import { $AbstractHorse } from "@package/net/minecraft/world/entity/animal/horse";
import { $SimpleContainer, $InteractionHand_, $Container } from "@package/net/minecraft/world";
import { $Holder, $NonNullList } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $DrawsOnLeft } from "@package/dev/shadowsoffire/placebo/util";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ModularUI } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $TextFieldHelper } from "@package/net/minecraft/client/gui/font";
import { $HorseInventoryMenu, $ChestMenu, $FurnaceMenu, $MenuType, $LecternMenu, $ClickType_, $BeaconMenu, $CartographyTableMenu, $StonecutterMenu, $AnvilMenu, $Slot, $ShulkerBoxMenu, $ItemCombinerMenu, $EnchantmentMenu, $CrafterMenu, $CraftingMenu, $SmokerMenu, $ContainerSynchronizer, $BlastFurnaceMenu, $MerchantMenu, $SmithingMenu, $HopperMenu, $GrindstoneMenu, $DispenserMenu, $AbstractContainerMenu, $BrewingStandMenu, $AbstractFurnaceMenu, $InventoryMenu, $LoomMenu, $ContainerListener } from "@package/net/minecraft/world/inventory";
import { $Record } from "@package/java/lang";
import { $CreativeModeInventoryScreenAccessor } from "@package/com/blackgear/vanillabackport/core/mixin/access";
import { $FabricCreativeInventoryScreen } from "@package/net/fabricmc/fabric/api/client/itemgroup/v1";
import { $BaseCommandBlock } from "@package/net/minecraft/world/level";
import { $CreativeModeTab, $CreativeModeTab_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $FormattedText, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $ContainerScreenLockTooltip, $ContainerScreenDrawTooltip } from "@package/com/misterpemodder/shulkerboxtooltip/impl/hook";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $CommandSuggestions, $EditBox, $AbstractButton, $WidgetSprites, $Renderable, $CycleButton, $WidgetTooltipHolder, $Button, $Button$OnPress_, $Button$CreateNarration } from "@package/net/minecraft/client/gui/components";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $CreativeTabsScreenPage } from "@package/net/neoforged/neoforge/client/gui";
import { $WoodType } from "@package/net/minecraft/world/level/block/state/properties";
import { $SlotWrapperAccessor, $AbstractContainerScreenAccessor as $AbstractContainerScreenAccessor$2, $CreativeModeInventoryScreenAccessor as $CreativeModeInventoryScreenAccessor$2 } from "@package/net/blay09/mods/inventoryessentials/mixin";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $ContainerEventHandler } from "@package/net/minecraft/client/gui/components/events";
import { $CreativeModeInventoryScreenAccessor as $CreativeModeInventoryScreenAccessor$1 } from "@package/dev/simulated_team/simulated/mixin/accessor";
import { $SignBlockEntity, $SignText, $StructureBlockEntity, $JigsawBlockEntity, $CommandBlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Vector3f, $Quaternionf } from "@package/org/joml";
export * as tooltip from "@package/net/minecraft/client/gui/screens/inventory/tooltip";

declare module "@package/net/minecraft/client/gui/screens/inventory" {
    export class $SmithingScreen extends $ItemCombinerScreen<$SmithingMenu> implements $AccessorSmithingScreen {
        callUpdateArmorStandPreview(stack: $ItemStack_): void;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static ARMOR_STAND_TRANSLATION: $Vector3f;
        titleLabelX: number;
        titleLabelY: number;
        static EMPTY_SLOT_SMITHING_TEMPLATES: $List<$ResourceLocation>;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        static PANORAMA: $PanoramaRenderer;
        static INVENTORY_LOCATION: $ResourceLocation;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        static ARMOR_STAND_ANGLE: $Quaternionf;
        menu: $SmithingMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        static MISSING_TEMPLATE_TOOLTIP: $Component;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        static ERROR_TOOLTIP: $Component;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: $SmithingMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $EnchantmentScreen extends $AbstractContainerScreen<$EnchantmentMenu> {
        tickBook(): void;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        titleLabelX: number;
        titleLabelY: number;
        renderables: $List<$Renderable>;
        oOpen: number;
        static PANORAMA: $PanoramaRenderer;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        flipA: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        minecraft: $Minecraft;
        oFlip: number;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        flipT: number;
        flip: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        slotColor: number;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        menu: $EnchantmentMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        time: number;
        screenExecutor: $Executor;
        topPos: number;
        open: number;
        font: $Font;
        constructor(menu: $EnchantmentMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $BookViewScreen$BookAccess extends $Record {
        getPage(page: number): $FormattedText;
        /**
         * Returns the size of the book
         */
        getPageCount(): number;
        static fromItem(stack: $ItemStack_): $BookViewScreen$BookAccess;
        pages(): $List<$Component>;
        constructor(arg0: $List_<$Component_>);
        get pageCount(): number;
    }
    /**
     * Values that may be interpreted as {@link $BookViewScreen$BookAccess}.
     */
    export type $BookViewScreen$BookAccess_ = { pages?: $List_<$Component_>,  } | [pages?: $List_<$Component_>, ];
    export class $BeaconScreen$BeaconPowerButton extends $BeaconScreen$BeaconScreenButton {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        height: number;
    }
    export class $CyclingSlotBackground {
        tick(icons: $List_<$ResourceLocation_>): void;
        render(containerMenu: $AbstractContainerMenu, guiGraphics: $GuiGraphics, partialTick: number, x: number, y: number): void;
        constructor(slotIndex: number);
    }
    export class $ShulkerBoxScreen extends $AbstractContainerScreen<$ShulkerBoxMenu> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        static PANORAMA: $PanoramaRenderer;
        static INVENTORY_LOCATION: $ResourceLocation;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: $ShulkerBoxMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: $ShulkerBoxMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $CreativeModeInventoryScreen$SlotWrapper extends $Slot implements $SlotWrapperAccessor {
        getTarget(): $Slot;
        container: $Container;
        x: number;
        index: number;
        y: number;
        target: $Slot;
        constructor(slot: $Slot, index: number, x: number, y: number);
    }
    export class $CommandBlockEditScreen extends $AbstractCommandBlockEditScreen {
        updateGui(): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        previousEdit: $EditBox;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        doneButton: $Button;
        narratorButton: $CycleButton<$NarratorStatus>;
        cancelButton: $Button;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        outputButton: $CycleButton<boolean>;
        commandEdit: $EditBox;
        commandSuggestions: $CommandSuggestions;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(autoCommandBlock: $CommandBlockEntity);
    }
    export class $BrewingStandScreen extends $AbstractContainerScreen<$BrewingStandMenu> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        static PANORAMA: $PanoramaRenderer;
        static INVENTORY_LOCATION: $ResourceLocation;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: $BrewingStandMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: $BrewingStandMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $CreativeModeInventoryScreen extends $EffectRenderingInventoryScreen<$CreativeModeInventoryScreen$ItemPickerMenu> implements $CreativeModeInventoryScreenAccessor, $FabricCreativeInventoryScreen, $CreativeModeInventoryScreenAccessor$2 {
        wrapOperation$inb000$petrolpark$dontAddExtendedInventorySlots(arg0: $NonNullList<any>, arg1: $Operation_<any>): number;
        getPage(tab: $CreativeModeTab_): number;
        static handleHotbarLoadOrSave(client: $Minecraft, index: number, load: boolean, save: boolean): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getPageCount(): number;
        setCurrentPage(arg0: $CreativeTabsScreenPage): void;
        renderTabButton(guiGraphics: $GuiGraphics, creativeModeTab: $CreativeModeTab_): void;
        /**
         * Returns (if you are not on the inventoryTab) and (the flag isn't set) and (you have more than 1 page of items).
         */
        switchToNextPage(): boolean;
        getScrollOffs(): number;
        checkTabHovering(guiGraphics: $GuiGraphics, creativeModeTab: $CreativeModeTab_, mouseX: number, mouseY: number): boolean;
        checkTabClicked(creativeModeTab: $CreativeModeTab_, relativeMouseX: number, arg2: number): boolean;
        insideScrollbar(mouseX: number, arg1: number): boolean;
        /**
         * Returns (if you are not on the inventoryTab) and (the flag isn't set) and (you have more than 1 page of items).
         */
        hasAdditionalPages(): boolean;
        switchToPage(keyCode: number): boolean;
        /**
         * Returns (if you are not on the inventoryTab) and (the flag isn't set) and (you have more than 1 page of items).
         */
        isInventoryOpen(): boolean;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getCurrentPage(): number;
        getItemGroupsOnPage(arg0: number): $List<any>;
        getSelectedItemGroup(): $CreativeModeTab;
        /**
         * Returns (if you are not on the inventoryTab) and (the flag isn't set) and (you have more than 1 page of items).
         */
        switchToPreviousPage(): boolean;
        setSelectedItemGroup(arg0: $CreativeModeTab_): boolean;
        handler$inb000$petrolpark$addItemsToExtendedInventorySlots(arg0: $Slot | null, arg1: number, arg2: number, arg3: $ClickType_, arg4: $CallbackInfo): void;
        handler$inb000$petrolpark$addExtendedInventorySlots(arg0: $CreativeModeTab_, arg1: $CallbackInfo): void;
        handler$inb000$petrolpark$renderCustomTabs(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: $CallbackInfo): void;
        static getSelectedTab$petrolpark_$md$66668e$2(): $CreativeModeTab;
        static getSelectedTab$vanillabackport_$md$66668e$0(): $CreativeModeTab;
        getCONTAINER(): $SimpleContainer;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        static PANORAMA: $PanoramaRenderer;
        static selectedTab: $CreativeModeTab;
        static INVENTORY_LOCATION: $ResourceLocation;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        destroyItemSlot: $Slot;
        static $assertionsDisabled: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: $CreativeModeInventoryScreen$ItemPickerMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        static CONTAINER: $SimpleContainer;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(player: $LocalPlayer, enabledFeatures: $FeatureFlagSet, displayOperatorCreativeTab: boolean);
        get pageCount(): number;
        get scrollOffs(): number;
        get inventoryOpen(): boolean;
        static get selectedTab$petrolpark_$md$66668e$2(): $CreativeModeTab;
        static get selectedTab$vanillabackport_$md$66668e$0(): $CreativeModeTab;
    }
    export class $AbstractCommandBlockEditScreen extends $Screen {
        onDone(): void;
        getCommandBlock(): $BaseCommandBlock;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getPreviousY(): number;
        populateAndSendPacket(commandBlock: $BaseCommandBlock): void;
        updatePreviousOutput(trackOutput: boolean): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        previousEdit: $EditBox;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        doneButton: $Button;
        narratorButton: $CycleButton<$NarratorStatus>;
        cancelButton: $Button;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        outputButton: $CycleButton<boolean>;
        commandEdit: $EditBox;
        commandSuggestions: $CommandSuggestions;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor();
        get commandBlock(): $BaseCommandBlock;
        get previousY(): number;
    }
    export class $EffectRenderingInventoryScreen<T extends $AbstractContainerMenu> extends $AbstractContainerScreen<T> {
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        canSeeEffects(): boolean;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        static PANORAMA: $PanoramaRenderer;
        static INVENTORY_LOCATION: $ResourceLocation;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: T;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: T, playerInventory: $Inventory, title: $Component_);
    }
    export class $DispenserScreen extends $AbstractContainerScreen<$DispenserMenu> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        static PANORAMA: $PanoramaRenderer;
        static INVENTORY_LOCATION: $ResourceLocation;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: $DispenserMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: $DispenserMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $CreativeModeInventoryScreen$CustomCreativeSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
    }
    export class $BookViewScreen extends $Screen {
        /**
         * Moves the display back one page
         */
        pageBack(): void;
        /**
         * I'm not sure why this exists. The function it calls is public and does all the work.
         */
        forcePage(pageNum: number): boolean;
        getClickedComponentStyleAt(mouseX: number, arg1: number): $Style;
        /**
         * Moves the display back one page
         */
        createPageControlButtons(): void;
        /**
         * I'm not sure why this exists. The function it calls is public and does all the work.
         */
        setPage(pageNum: number): boolean;
        /**
         * Moves the display back one page
         */
        closeScreen(): void;
        /**
         * Moves the display back one page
         */
        createMenuControls(): void;
        setBookAccess(bookAccess: $BookViewScreen$BookAccess_): void;
        /**
         * Moves the display back one page
         */
        pageForward(): void;
        static BOOK_LOCATION: $ResourceLocation;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static TEXT_HEIGHT: number;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static PAGE_TEXT_X_OFFSET: number;
        static PAGE_TEXT_Y_OFFSET: number;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static TEXT_WIDTH: number;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static IMAGE_HEIGHT: number;
        static PANORAMA: $PanoramaRenderer;
        static IMAGE_WIDTH: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static PAGE_INDICATOR_TEXT_Y_OFFSET: number;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static EMPTY_ACCESS: $BookViewScreen$BookAccess;
        narratorButton: $CycleButton<$NarratorStatus>;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        font: $Font;
        constructor();
        constructor(bookAccess: $BookViewScreen$BookAccess_);
        set page(value: number);
        set bookAccess(value: $BookViewScreen$BookAccess_);
    }
    export class $BeaconScreen extends $AbstractContainerScreen<$BeaconMenu> {
        static access$000(arg0: $BeaconScreen): $Minecraft;
        static access$100(arg0: $BeaconScreen): $Minecraft;
        static access$200(arg0: $BeaconScreen): $Minecraft;
        updateButtons(): void;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        titleLabelX: number;
        titleLabelY: number;
        renderables: $List<$Renderable>;
        static PANORAMA: $PanoramaRenderer;
        static CANCEL_SPRITE: $ResourceLocation;
        static CONFIRM_SPRITE: $ResourceLocation;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        inventoryLabelY: number;
        static BUTTON_DISABLED_SPRITE: $ResourceLocation;
        inventoryLabelX: number;
        secondary: $Holder<$MobEffect>;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        static BUTTON_SPRITE: $ResourceLocation;
        playerInventoryTitle: $Component;
        static BUTTON_HIGHLIGHTED_SPRITE: $ResourceLocation;
        primary: $Holder<$MobEffect>;
        minecraft: $Minecraft;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        static INVENTORY_LOCATION: $ResourceLocation;
        slotColor: number;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static BUTTON_SELECTED_SPRITE: $ResourceLocation;
        static $assertionsDisabled: boolean;
        menu: $BeaconMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: $BeaconMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $ContainerScreen extends $AbstractContainerScreen<$ChestMenu> implements $MenuAccess<$ChestMenu> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        static PANORAMA: $PanoramaRenderer;
        static INVENTORY_LOCATION: $ResourceLocation;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: $ChestMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: $ChestMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $BeaconScreen$BeaconCancelButton extends $BeaconScreen$BeaconSpriteScreenButton {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        height: number;
    }
    export class $InventoryScreen extends $EffectRenderingInventoryScreen<$InventoryMenu> implements $RecipeUpdateListener {
        recipesUpdated(): void;
        getRecipeBookComponent(): $RecipeBookComponent;
        static renderEntityInInventory(guiGraphics: $GuiGraphics, x: number, y: number, scale: number, translate: $Vector3f, pose: $Quaternionf, cameraOrientation: $Quaternionf | null, entity: $LivingEntity): void;
        handler$fla000$patchouli$onGuiInitPost(arg0: $CallbackInfo): void;
        static renderEntityInInventoryFollowsMouse(guiGraphics: $GuiGraphics, x1: number, y1: number, x2: number, y2: number, scale: number, yOffset: number, mouseX: number, mouseY: number, entity: $LivingEntity): void;
        static renderEntityInInventoryFollowsAngle(guiGraphics: $GuiGraphics, x1: number, y1: number, x2: number, y2: number, scale: number, yOffset: number, mouseX: number, mouseY: number, entity: $LivingEntity): void;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        yMouse: number;
        clickedSlot: $Slot;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        static PANORAMA: $PanoramaRenderer;
        static INVENTORY_LOCATION: $ResourceLocation;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: $InventoryMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        xMouse: number;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(player: $Player);
        get recipeBookComponent(): $RecipeBookComponent;
    }
    export class $HopperScreen extends $AbstractContainerScreen<$HopperMenu> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        static PANORAMA: $PanoramaRenderer;
        static INVENTORY_LOCATION: $ResourceLocation;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: $HopperMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: $HopperMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $BookEditScreen$DisplayCache {
        changeLine(xChange: number, yChange: number): number;
        findLineStart(line: number): number;
        findLineEnd(line: number): number;
        getIndexAtPosition(font: $Font, cursorPosition: $BookEditScreen$Pos2i): number;
        redirect$gff000$amendments$plainIndexAtWidth(arg0: $StringSplitter, arg1: string, arg2: number, arg3: $Style): number;
        cursor: $BookEditScreen$Pos2i;
        selection: $Rect2i[];
        cursorAtEnd: boolean;
        lines: $BookEditScreen$LineInfo[];
        static EMPTY: $BookEditScreen$DisplayCache;
        constructor(fullText: string, cursor: $BookEditScreen$Pos2i, cursorAtEnd: boolean, lineStarts: number[], lines: $BookEditScreen$LineInfo[], selection: $Rect2i[]);
    }
    export class $FurnaceScreen extends $AbstractFurnaceScreen<$FurnaceMenu> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        static PANORAMA: $PanoramaRenderer;
        static INVENTORY_LOCATION: $ResourceLocation;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: $FurnaceMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        recipeBookComponent: $AbstractFurnaceRecipeBookComponent;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: $FurnaceMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $MerchantScreen$TradeOfferButton extends $Button {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
    }
    export class $CartographyTableScreen extends $AbstractContainerScreen<$CartographyTableMenu> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        static PANORAMA: $PanoramaRenderer;
        static INVENTORY_LOCATION: $ResourceLocation;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: $CartographyTableMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: $CartographyTableMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $LoomScreen extends $AbstractContainerScreen<$LoomMenu> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        static PANORAMA: $PanoramaRenderer;
        static INVENTORY_LOCATION: $ResourceLocation;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: $LoomMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: $LoomMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $AbstractFurnaceScreen<T extends $AbstractFurnaceMenu> extends $AbstractContainerScreen<T> implements $RecipeUpdateListener {
        recipesUpdated(): void;
        getRecipeBookComponent(): $RecipeBookComponent;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        static PANORAMA: $PanoramaRenderer;
        static INVENTORY_LOCATION: $ResourceLocation;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: T;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        recipeBookComponent: $AbstractFurnaceRecipeBookComponent;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: T, recipeBookComponent: $AbstractFurnaceRecipeBookComponent, playerInventory: $Inventory, title: $Component_, texture: $ResourceLocation_, listProgressSprite: $ResourceLocation_, burnProgressSprite: $ResourceLocation_);
    }
    export class $SmokerScreen extends $AbstractFurnaceScreen<$SmokerMenu> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        static PANORAMA: $PanoramaRenderer;
        static INVENTORY_LOCATION: $ResourceLocation;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: $SmokerMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        recipeBookComponent: $AbstractFurnaceRecipeBookComponent;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: $SmokerMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $EnchantmentNames {
        static getInstance(): $EnchantmentNames;
        /**
         * Resets the underlying random number generator using a given seed.
         */
        initSeed(seed: number): void;
        getRandomName(fontRenderer: $Font, maxWidth: number): $FormattedText;
        static get instance(): $EnchantmentNames;
    }
    export class $AbstractContainerScreen<T extends $AbstractContainerMenu> extends $Screen implements $MenuAccess<T>, $AbstractContainerScreenAccessor$1, $ContainerEventHandler, $HandledScreenAccessor, $AbstractContainerScreenAccessor, $DrawsOnLeft, $CreativeModeInventoryScreenAccessor$1, $AbstractContainerScreenAccessor$2, $ContainerScreenLockTooltip, $ContainerScreenDrawTooltip {
        renderSlotContents(arg0: $GuiGraphics, arg1: $ItemStack_, arg2: $Slot, arg3: string | null): void;
        renderFloatingItem(guiGraphics: $GuiGraphics, stack: $ItemStack_, x: number, y: number, text: string): void;
        getSlotColor(arg0: number): number;
        hasClickedOutside(mouseX: number, arg1: number, mouseY: number, arg3: number, guiLeft: number): boolean;
        /**
         * Called when the mouse is clicked over a slot or outside the gui.
         */
        slotClicked(slot: $Slot, slotId: number, mouseButton: number, type: $ClickType_): void;
        renderLabels(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number): void;
        containerTick(): void;
        isHovering(x: number, y: number, width: number, height: number, mouseX: number, arg5: number): boolean;
        isHovering(slot: $Slot, mouseX: number, arg2: number): boolean;
        renderSlot(guiGraphics: $GuiGraphics, slot: $Slot): void;
        getMenu(): T;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getXSize(): number;
        findSlot(mouseX: number, arg1: number): $Slot;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getYSize(): number;
        static renderSlotHighlight(guiGraphics: $GuiGraphics, x: number, y: number, width: number, height: number): void;
        static renderSlotHighlight(guiGraphics: $GuiGraphics, x: number, y: number, blitOffset: number): void;
        renderSlotHighlight(arg0: $GuiGraphics, arg1: $Slot, arg2: number, arg3: number, arg4: number): void;
        getTooltipFromContainerItem(stack: $ItemStack_): $List<$Component>;
        recalculateQuickCraftRemaining(): void;
        renderBg(guiGraphics: $GuiGraphics, partialTick: number, mouseX: number, mouseY: number): void;
        handleSlotStateChanged(slotId: number, containerId: number, newState: boolean): void;
        checkHotbarKeyPressed(keyCode: number, scanCode: number): boolean;
        clearDraggingState(): void;
        getSlotUnderMouse(): $Slot;
        shulkerboxtooltip$lockTooltipPosition(graphics: $GuiGraphics, font: $Font, text: $List_<any>, data: $Optional<any>, stack: $ItemStack_, x: number, y: number): void;
        shulkerboxtooltip$drawMouseoverTooltip(graphics: $GuiGraphics, font: $Font, text: $List_<any>, data: $Optional<any>, stack: $ItemStack_, x: number, y: number): void;
        renderTooltip(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getGuiLeft(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getGuiTop(): number;
        __ths(): $AbstractContainerScreen<never>;
        drawOnLeft(arg0: $GuiGraphics, arg1: $List_<$FormattedText>, arg2: number): void;
        drawOnLeft(arg0: $GuiGraphics, arg1: $List_<$FormattedText>, arg2: number, arg3: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getTopPos(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getLeftPos(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getY(): number;
        /**
         * Sets the focus state of the GUI element.
         */
        mousetweaks$setIsQuickCrafting(focused: boolean): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        mousetweaks$getQuickCraftingButton(): number;
        /**
         * Called when the mouse is clicked over a slot or outside the gui.
         */
        mousetweaks$invokeSlotClicked(slot: $Slot, slotId: number, mouseButton: number, type: $ClickType_): void;
        /**
         * Sets the focus state of the GUI element.
         */
        mousetweaks$setSkipNextRelease(focused: boolean): void;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        mousetweaks$getIsQuickCrafting(): boolean;
        mousetweaks$invokeFindSlot(mouseX: number, arg1: number): $Slot;
        callHasClickedOutside(mouseX: number, arg1: number, mouseY: number, arg3: number, guiLeft: number): boolean;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getBackgroundHeight(): number;
        callIsHovering(slot: $Slot, mouseX: number, arg2: number): boolean;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getImageHeight(): number;
        callRenderSlot(guiGraphics: $GuiGraphics, slot: $Slot): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getImageWidth(): number;
        getHoveredSlot(): $Slot;
        invokeGetSlotAt(mouseX: number, arg1: number): $Slot;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getBackgroundWidth(): number;
        getFocusedSlot(): $Slot;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getX(): number;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        static PANORAMA: $PanoramaRenderer;
        static INVENTORY_LOCATION: $ResourceLocation;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: T;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: T, playerInventory: $Inventory, title: $Component_);
        get XSize(): number;
        get YSize(): number;
        get slotUnderMouse(): $Slot;
        get guiLeft(): number;
        get guiTop(): number;
        get y(): number;
        get backgroundHeight(): number;
        get backgroundWidth(): number;
        get focusedSlot(): $Slot;
        get x(): number;
    }
    export class $CreativeInventoryListener implements $ContainerListener {
        /**
         * Sends the contents of an inventory slot to the client-side Container. This doesn't have to match the actual contents of that slot.
         */
        slotChanged(containerToSend: $AbstractContainerMenu, slotInd: number, stack: $ItemStack_): void;
        dataChanged(containerMenu: $AbstractContainerMenu, dataSlotIndex: number, value: number): void;
        constructor(minecraft: $Minecraft);
    }
    export class $BlastFurnaceScreen extends $AbstractFurnaceScreen<$BlastFurnaceMenu> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        static PANORAMA: $PanoramaRenderer;
        static INVENTORY_LOCATION: $ResourceLocation;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: $BlastFurnaceMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        recipeBookComponent: $AbstractFurnaceRecipeBookComponent;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: $BlastFurnaceMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $CrafterScreen extends $AbstractContainerScreen<$CrafterMenu> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        static PANORAMA: $PanoramaRenderer;
        static INVENTORY_LOCATION: $ResourceLocation;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: $CrafterMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: $CrafterMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $HorseInventoryScreen extends $AbstractContainerScreen<$HorseInventoryMenu> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        static PANORAMA: $PanoramaRenderer;
        static INVENTORY_LOCATION: $ResourceLocation;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: $HorseInventoryMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: $HorseInventoryMenu, inventory: $Inventory, horse: $AbstractHorse, inventoryColumns: number);
    }
    export class $BeaconScreen$BeaconConfirmButton extends $BeaconScreen$BeaconSpriteScreenButton {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        height: number;
    }
    export class $BeaconScreen$BeaconUpgradePowerButton extends $BeaconScreen$BeaconPowerButton {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        height: number;
    }
    export class $MinecartCommandBlockEditScreen extends $AbstractCommandBlockEditScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        previousEdit: $EditBox;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        doneButton: $Button;
        narratorButton: $CycleButton<$NarratorStatus>;
        cancelButton: $Button;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        outputButton: $CycleButton<boolean>;
        commandEdit: $EditBox;
        commandSuggestions: $CommandSuggestions;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(commandBlock: $BaseCommandBlock);
    }
    export class $ItemCombinerScreen<T extends $ItemCombinerMenu> extends $AbstractContainerScreen<T> implements $ContainerListener {
        /**
         * Sends the contents of an inventory slot to the client-side Container. This doesn't have to match the actual contents of that slot.
         */
        slotChanged(containerToSend: $AbstractContainerMenu, slotInd: number, stack: $ItemStack_): void;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        renderFg(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        subInit(): void;
        dataChanged(containerMenu: $AbstractContainerMenu, dataSlotIndex: number, value: number): void;
        renderErrorIcon(guiGraphics: $GuiGraphics, x: number, y: number): void;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        static PANORAMA: $PanoramaRenderer;
        static INVENTORY_LOCATION: $ResourceLocation;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: T;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: T, playerInventory: $Inventory, title: $Component_, menuResource: $ResourceLocation_);
    }
    export class $LecternScreen extends $BookViewScreen implements $MenuAccess<$LecternMenu> {
        getMenu(): $LecternMenu;
        /**
         * Moves the display back one page
         */
        bookChanged(): void;
        /**
         * Moves the display back one page
         */
        pageChanged(): void;
        static BOOK_LOCATION: $ResourceLocation;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static TEXT_HEIGHT: number;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static PAGE_TEXT_X_OFFSET: number;
        static PAGE_TEXT_Y_OFFSET: number;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static TEXT_WIDTH: number;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static IMAGE_HEIGHT: number;
        static PANORAMA: $PanoramaRenderer;
        static IMAGE_WIDTH: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static PAGE_INDICATOR_TEXT_Y_OFFSET: number;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static EMPTY_ACCESS: $BookViewScreen$BookAccess;
        narratorButton: $CycleButton<$NarratorStatus>;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        font: $Font;
        constructor(menu: $LecternMenu, playerInventory: $Inventory, title: $Component_);
        get menu(): $LecternMenu;
    }
    export class $SignEditScreen extends $AbstractSignEditScreen {
        handler$gfh000$amendments$renderSignBlockModel(arg0: $GuiGraphics, arg1: $BlockState_, arg2: $CallbackInfo): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        line: number;
        signField: $TextFieldHelper;
        sign: $SignBlockEntity;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        woodType: $WoodType;
        static MAGIC_TEXT_SCALE: number;
        static PANORAMA: $PanoramaRenderer;
        static MAGIC_SCALE_NUMBER: number;
        text: $SignText;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        isFrontText: boolean;
        narratables: $List<$NarratableEntry>;
        width: number;
        messages: string[];
        screenExecutor: $Executor;
        font: $Font;
        constructor(arg0: $SignBlockEntity, arg1: boolean, arg2: boolean);
    }
    export class $CraftingScreen extends $AbstractContainerScreen<$CraftingMenu> implements $RecipeUpdateListener {
        recipesUpdated(): void;
        getRecipeBookComponent(): $RecipeBookComponent;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        static PANORAMA: $PanoramaRenderer;
        static INVENTORY_LOCATION: $ResourceLocation;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: $CraftingMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: $CraftingMenu, playerInventory: $Inventory, title: $Component_);
        get recipeBookComponent(): $RecipeBookComponent;
    }
    export class $MerchantScreen extends $AbstractContainerScreen<$MerchantMenu> {
        static access$000(arg0: $MerchantScreen): $Font;
        static access$100(arg0: $MerchantScreen): $Font;
        static access$200(arg0: $MerchantScreen): $Font;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        scrollOff: number;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        static PANORAMA: $PanoramaRenderer;
        static INVENTORY_LOCATION: $ResourceLocation;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: $MerchantMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: $MerchantMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $BeaconScreen$BeaconSpriteScreenButton extends $BeaconScreen$BeaconScreenButton {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        height: number;
    }
    export class $BookEditScreen$Pos2i {
        x: number;
        y: number;
        constructor(x: number, y: number);
    }
    export class $JigsawBlockEditScreen extends $Screen {
        static isValidResourceLocation(location: string): boolean;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        levels: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(jigsawEntity: $JigsawBlockEntity);
    }
    export class $BeaconScreen$BeaconScreenButton extends $AbstractButton implements $BeaconScreen$BeaconButton {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        height: number;
    }
    export class $CreativeModeInventoryScreen$ItemPickerMenu extends $AbstractContainerMenu {
        canScroll(): boolean;
        /**
         * Updates the gui slot's ItemStacks based on scroll position.
         */
        scrollTo(pos: number): void;
        getScrollForRowIndex(rowIndex: number): number;
        subtractInputFromScroll(scrollOffs: number, input: number): number;
        getRowIndexForScroll(scrollOffs: number): number;
        calculateRowCount(): number;
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        containerId: number;
        items: $NonNullList<$ItemStack>;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(player: $Player);
    }
    export class $BookEditScreen$LineInfo {
    }
    export class $BeaconScreen$BeaconButton {
    }
    export interface $BeaconScreen$BeaconButton {
    }
    /**
     * Values that may be interpreted as {@link $BeaconScreen$BeaconButton}.
     */
    export type $BeaconScreen$BeaconButton_ = (() => void);
    export class $BookEditScreen extends $Screen {
        saveChanges(publish: boolean): void;
        /**
         * Adds a new page to the book (capped at 100 pages)
         */
        updateLocalCopy(): void;
        /**
         * Handles keypresses, clipboard functions, and page turning
         */
        titleKeyPressed(keyCode: number, scanCode: number, modifiers: number): boolean;
        /**
         * Returns the contents of the current page as a string (or an empty string if the currPage isn't a valid page index)
         */
        getCurrentPageText(): string;
        setCurrentPageText(title: string): void;
        /**
         * Returns the contents of the current page as a string (or an empty string if the currPage isn't a valid page index)
         */
        getClipboard(): string;
        /**
         * Adds a new page to the book (capped at 100 pages)
         */
        pageBack(): void;
        /**
         * Adds a new page to the book (capped at 100 pages)
         */
        updateButtonVisibility(): void;
        setClipboard(title: string): void;
        /**
         * Adds a new page to the book (capped at 100 pages)
         */
        clearDisplayCache(): void;
        static findLineFromPos(lineStarts: number[], find: number): number;
        /**
         * Adds a new page to the book (capped at 100 pages)
         */
        pageForward(): void;
        /**
         * Adds a new page to the book (capped at 100 pages)
         */
        eraseEmptyTrailingPages(): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        book: $ItemStack;
        pageEdit: $TextFieldHelper;
        static CUBE_MAP: $CubeMap;
        title: string;
        isSigning: boolean;
        renderables: $List<$Renderable>;
        pages: $List<string>;
        signButton: $Button;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isModified: boolean;
        static PANORAMA: $PanoramaRenderer;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        finalizeButton: $Button;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static FOOTER_SEPARATOR: $ResourceLocation;
        doneButton: $Button;
        narratorButton: $CycleButton<$NarratorStatus>;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        font: $Font;
        constructor(owner: $Player, book: $ItemStack_, hand: $InteractionHand_);
    }
    export class $HangingSignEditScreen extends $AbstractSignEditScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        line: number;
        signField: $TextFieldHelper;
        sign: $SignBlockEntity;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        woodType: $WoodType;
        static PANORAMA: $PanoramaRenderer;
        text: $SignText;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        static MAGIC_BACKGROUND_SCALE: number;
        isFrontText: boolean;
        narratables: $List<$NarratableEntry>;
        width: number;
        messages: string[];
        screenExecutor: $Executor;
        font: $Font;
        constructor(arg0: $SignBlockEntity, arg1: boolean, arg2: boolean);
    }
    export class $StonecutterScreen extends $AbstractContainerScreen<$StonecutterMenu> {
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getOffscreenRows(): number;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        static PANORAMA: $PanoramaRenderer;
        static INVENTORY_LOCATION: $ResourceLocation;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: $StonecutterMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: $StonecutterMenu, playerInventory: $Inventory, title: $Component_);
        get offscreenRows(): number;
    }
    export class $MenuAccess<T extends $AbstractContainerMenu> {
    }
    export interface $MenuAccess<T extends $AbstractContainerMenu> {
        getMenu(): T;
        get menu(): T;
    }
    /**
     * Values that may be interpreted as {@link $MenuAccess}.
     */
    export type $MenuAccess_<T> = (() => T);
    export class $AnvilScreen extends $ItemCombinerScreen<$AnvilMenu> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        static PANORAMA: $PanoramaRenderer;
        static INVENTORY_LOCATION: $ResourceLocation;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: $AnvilMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        name: $EditBox;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: $AnvilMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $AbstractSignEditScreen extends $Screen {
        offsetSign(guiGraphics: $GuiGraphics, state: $BlockState_): void;
        getSignTextScale(): $Vector3f;
        renderSignBackground(guiGraphics: $GuiGraphics, state: $BlockState_): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        line: number;
        signField: $TextFieldHelper;
        sign: $SignBlockEntity;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        woodType: $WoodType;
        static PANORAMA: $PanoramaRenderer;
        text: $SignText;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        isFrontText: boolean;
        narratables: $List<$NarratableEntry>;
        width: number;
        messages: string[];
        screenExecutor: $Executor;
        font: $Font;
        constructor(sign: $SignBlockEntity, isFrontText: boolean, isFiltered: boolean);
        constructor(sign: $SignBlockEntity, isFrontText: boolean, isFiltered: boolean, title: $Component_);
        get signTextScale(): $Vector3f;
    }
    export class $GrindstoneScreen extends $AbstractContainerScreen<$GrindstoneMenu> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        static PANORAMA: $PanoramaRenderer;
        static INVENTORY_LOCATION: $ResourceLocation;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: $GrindstoneMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: $GrindstoneMenu, playerInventory: $Inventory, title: $Component_);
    }
    export class $PageButton extends $Button {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(x: number, y: number, isForward: boolean, onPress: $Button$OnPress_, playTurnSound: boolean);
    }
    export class $StructureBlockEditScreen extends $Screen {
        static access$000(arg0: $StructureBlockEditScreen, arg1: string, arg2: string, arg3: number): boolean;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(structure: $StructureBlockEntity);
    }
}
