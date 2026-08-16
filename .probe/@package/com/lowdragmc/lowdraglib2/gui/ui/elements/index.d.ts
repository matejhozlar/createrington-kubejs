import { $HistoryStack } from "@package/com/lowdragmc/lowdraglib2/utils";
import { $Codec } from "@package/com/mojang/serialization";
import { $ConfigNumber$Type } from "@package/com/lowdragmc/lowdraglib2/configurator/annotation";
import { $GUIContext } from "@package/com/lowdragmc/lowdraglib2/gui/ui/rendering";
import { $Tag_, $Tag, $LongArrayTag, $ListTag_, $ByteArrayTag, $IntArrayTag, $CompoundTag, $ListTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $IGuiTexture_, $IGuiTexture } from "@package/com/lowdragmc/lowdraglib2/gui/texture";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $ISearch, $IResultHandler_ } from "@package/com/lowdragmc/lowdraglib2/utils/search";
import { $ISceneBlockRenderHook, $ParticleManager, $WorldSceneRenderer } from "@package/com/lowdragmc/lowdraglib2/client/scene";
import { $Set_, $Map, $Set, $List, $Collection_, $List_, $Collection } from "@package/java/util";
import { $Size } from "@package/com/lowdragmc/lowdraglib2/math";
import { $StringConfigurator, $Configurator, $ConfiguratorGroup } from "@package/com/lowdragmc/lowdraglib2/configurator/ui";
import { $FormattedCharSequence, $Tuple } from "@package/net/minecraft/util";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Supplier_, $Consumer_, $Predicate_, $Function, $Predicate, $BiConsumer, $BiConsumer_, $Function_, $IntConsumer_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $HolderLookup$Provider, $Direction } from "@package/net/minecraft/core";
import { $IngredientIO_ } from "@package/com/lowdragmc/lowdraglib2/integration/xei";
import { $IPersistedSerializable, $ISubscription } from "@package/com/lowdragmc/lowdraglib2/syncdata";
import { $UIEventListener_, $UIEvent } from "@package/com/lowdragmc/lowdraglib2/gui/ui/event";
import { $Style, $ModularUI, $UITemplate, $UIElement } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $BooleanConsumer_ } from "@package/it/unimi/dsi/fastutil/booleans";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $Enum, $Record, $Class, $Runnable_, $Object } from "@package/java/lang";
import { $TaffyDimension } from "@package/dev/vfyjxf/taffy/style";
import { $IResourcePath } from "@package/com/lowdragmc/lowdraglib2/editor/resource";
import { $StyleSizeLength } from "@package/org/appliedenergistics/yoga/style";
import { $File_, $File } from "@package/java/io";
import { $ClipContext$Fluid_, $ClipContext$Fluid, $ClipContext$Block_, $ClipContext$Block, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $BiMap } from "@package/com/google/common/collect";
import { $ITreeNode, $FileNode } from "@package/com/lowdragmc/lowdraglib2/gui/util";
import { $Cursor, $FillDirection, $FillDirection_, $TextWrap_, $ScrollerMode_, $Vertical, $ScrollerMode, $Horizontal, $Cursor_, $ScrollDisplay, $TextWrap, $ScrollDisplay_, $Horizontal_, $Vertical_ } from "@package/com/lowdragmc/lowdraglib2/gui/ui/data";
import { $IConfigurable, $IConfigurableHistory } from "@package/com/lowdragmc/lowdraglib2/configurator";
import { $IHistoryStack, $UIElementProvider, $UIElementProvider_ } from "@package/com/lowdragmc/lowdraglib2/gui/ui/utils";
import { $FloatConsumer_ } from "@package/it/unimi/dsi/fastutil/floats";
import { $Stream } from "@package/java/util/stream";
import { $IBinding, $IObservable, $IDataProvider, $IDataConsumer, $IObserver_, $IObserver, $IDataSource, $IBindable } from "@package/com/lowdragmc/lowdraglib2/gui/sync/bindings";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $TrackedDummyWorld } from "@package/com/lowdragmc/lowdraglib2/utils/virtuallevel";
import { $Layout } from "@package/dev/vfyjxf/taffy/tree";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Font } from "@package/net/minecraft/client/gui";
import { $BlockPosFace, $BlockPosFace_ } from "@package/com/lowdragmc/lowdraglib2/utils/data";
import { $Vector3f } from "@package/org/joml";
export * as inventory from "@package/com/lowdragmc/lowdraglib2/gui/ui/elements/inventory";
export * as codeeditor from "@package/com/lowdragmc/lowdraglib2/gui/ui/elements/codeeditor";

declare module "@package/com/lowdragmc/lowdraglib2/gui/ui/elements" {
    export class $SearchComponent$ISearchUI$Empty<T> implements $SearchComponent$ISearchUI<T> {
        search(arg0: string, arg1: $IResultHandler_<T>): void;
        resultText(arg0: T): string;
        onResultSelected(arg0: T): void;
        constructor();
    }
    export class $TreeList$DropMode extends $Enum<$TreeList$DropMode> {
        static values(): $TreeList$DropMode[];
        static valueOf(arg0: string): $TreeList$DropMode;
        static BEFORE: $TreeList$DropMode;
        static INTO: $TreeList$DropMode;
        static AFTER: $TreeList$DropMode;
    }
    /**
     * Values that may be interpreted as {@link $TreeList$DropMode}.
     */
    export type $TreeList$DropMode_ = "before" | "into" | "after";
    export class $Selector$SelectorStyle extends $Style {
        static init(): void;
        focusOverlay(arg0: $IGuiTexture_): $Selector$SelectorStyle;
        focusOverlay(): $IGuiTexture;
        showOverlay(arg0: boolean): $Selector$SelectorStyle;
        showOverlay(): boolean;
        maxItemCount(): number;
        maxItemCount(arg0: number): $Selector$SelectorStyle;
        closeAfterSelect(arg0: boolean): $Selector$SelectorStyle;
        closeAfterSelect(): boolean;
        scrollerViewHeight(): number;
        scrollerViewHeight(arg0: number): $Selector$SelectorStyle;
        holder: $UIElement;
    }
    export class $TextField extends $BindableUIElement<string> {
        getValue(): string;
        setValue(arg0: string, arg1: boolean): $TextField;
        isError(): boolean;
        getText(): string;
        setFormatter(arg0: $Function_<string, $Component>): $TextField;
        getFormatter(): $Function<string, $Component>;
        setText(arg0: string): $TextField;
        setText(arg0: string, arg1: boolean): $TextField;
        getMode(): $TextField$Mode;
        getCursorUnderMouseX(arg0: number): number;
        setNumbersOnlyShort(arg0: number, arg1: number): $TextField;
        setNumbersOnlyFloat(arg0: number, arg1: number): $TextField;
        setNumbersOnlyDouble(arg0: number, arg1: number): $TextField;
        setTextRegexValidator(arg0: string): $TextField;
        setTextResponder(arg0: $Consumer_<string>): $TextField;
        setTextValidator(arg0: $Predicate_<string>): $TextField;
        setCompoundTagOnly(): $TextField;
        setNumbersOnlyByte(arg0: number, arg1: number): $TextField;
        getSelectionEnd(): number;
        deleteWords(arg0: number): void;
        setNumbersOnlyLong(arg0: number, arg1: number): $TextField;
        setNumbersOnlyInt(arg0: number, arg1: number): $TextField;
        getFormattedLine(): $Tuple<$FormattedCharSequence, number>;
        setAnyString(): $TextField;
        getWordPosition(arg0: number): number;
        getCursorPos(): number;
        setWheelDur(arg0: number, arg1: number): $TextField;
        setWheelDur(arg0: number): $TextField;
        textFieldStyle(arg0: $Consumer_<$TextField$TextFieldStyle>): $TextField;
        getTextFieldStyle(): $TextField$TextFieldStyle;
        getStyledLine(): $Component;
        getHighlighted(): string;
        getSelectionStart(): number;
        getWheelDur(): number;
        deleteCharsToPos(arg0: number): void;
        deleteChars(arg0: number): void;
        getHistoryStack(): $HistoryStack<string>;
        setCharValidator(arg0: $Predicate_<string>): $TextField;
        setSelection(arg0: number, arg1: number): void;
        getFont(): $Font;
        getRawText(): string;
        getDisplayOffset(): number;
        isEditable(): boolean;
        setResourceLocationOnly(): $TextField;
        insertText(arg0: string): void;
        setCursor(arg0: number): void;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get error(): boolean;
        get mode(): $TextField$Mode;
        set textRegexValidator(value: string);
        set textResponder(value: $Consumer_<string>);
        set textValidator(value: $Predicate_<string>);
        get selectionEnd(): number;
        get formattedLine(): $Tuple<$FormattedCharSequence, number>;
        get cursorPos(): number;
        get styledLine(): $Component;
        get highlighted(): string;
        get selectionStart(): number;
        get historyStack(): $HistoryStack<string>;
        set charValidator(value: $Predicate_<string>);
        get font(): $Font;
        get rawText(): string;
        get displayOffset(): number;
        get editable(): boolean;
        set cursor(value: number);
    }
    export class $GraphView extends $UIElement {
        fit(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        getOffsetY(): number;
        setOffsetX(arg0: number): void;
        setOffsetY(arg0: number): void;
        getOffsetX(): number;
        contentRoot(arg0: $Consumer_<$UIElement>): $UIElement;
        graphViewStyle(arg0: $Consumer_<$GraphView$GraphViewStyle>): $GraphView;
        removeContentChild(arg0: $UIElement): $GraphView;
        getGraphViewStyle(): $GraphView$GraphViewStyle;
        fitToChildren(arg0: number, arg1: number): void;
        addContentChild(arg0: $UIElement): $GraphView;
        getScale(): number;
        clearAllContentChildren(): $GraphView;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get scale(): number;
    }
    export class $Scroller$ScrollerStyle extends $Style {
        static init(): void;
        scrollDelta(arg0: number): $Scroller$ScrollerStyle;
        scrollDelta(): number;
        scrollBarSize(): number;
        scrollBarSize(arg0: number): $Scroller$ScrollerStyle;
        holder: $UIElement;
        constructor(arg0: $Scroller);
    }
    export class $FluidSlot$SlotStyle extends $Style {
        slotOverlay(arg0: $IGuiTexture_): $FluidSlot$SlotStyle;
        slotOverlay(): $IGuiTexture;
        hoverOverlay(): $IGuiTexture;
        hoverOverlay(arg0: $IGuiTexture_): $FluidSlot$SlotStyle;
        fillDirection(arg0: $FillDirection_): $FluidSlot$SlotStyle;
        fillDirection(): $FillDirection;
        showFluidTooltips(): boolean;
        showFluidTooltips(arg0: boolean): $FluidSlot$SlotStyle;
        showSlotOverlayOnlyEmpty(): boolean;
        showSlotOverlayOnlyEmpty(arg0: boolean): $FluidSlot$SlotStyle;
        holder: $UIElement;
        constructor(arg0: $FluidSlot);
    }
    export class $Tab extends $UIElement {
        getContent(): $UIElement;
        textStyle(arg0: $Consumer_<$TextElement$TextStyle>): $Tab;
        setText(arg0: string, arg1: boolean): $Tab;
        setText(arg0: string): $Tab;
        setText(arg0: $Component_): $Tab;
        setOnTabSelected(arg0: $Runnable_): $Tab;
        getTabView(): $TabView;
        setSelected(arg0: boolean): void;
        tabStyle(arg0: $Consumer_<$Tab$TabStyle>): $Tab;
        getTabStyle(): $Tab$TabStyle;
        setOnTabUnselected(arg0: $Runnable_): $Tab;
        setDynamicText(arg0: $Supplier_<$Component>): $Tab;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        text: $Label;
        constructor();
        get content(): $UIElement;
        set onTabSelected(value: $Runnable_);
        get tabView(): $TabView;
        set selected(value: boolean);
        set onTabUnselected(value: $Runnable_);
        set dynamicText(value: $Supplier_<$Component>);
    }
    export class $TextField$TextFieldStyle extends $Style {
        static init(): void;
        fontSize(): number;
        fontSize(arg0: number): $TextField$TextFieldStyle;
        font(arg0: $ResourceLocation_): $TextField$TextFieldStyle;
        font(): $ResourceLocation;
        errorColor(arg0: number): $TextField$TextFieldStyle;
        errorColor(): number;
        textShadow(): boolean;
        textShadow(arg0: boolean): $TextField$TextFieldStyle;
        placeholder(arg0: $Component_): $TextField$TextFieldStyle;
        placeholder(): $Component;
        cursorColor(): number;
        cursorColor(arg0: number): $TextField$TextFieldStyle;
        focusOverlay(arg0: $IGuiTexture_): $TextField$TextFieldStyle;
        focusOverlay(): $IGuiTexture;
        textColor(): number;
        textColor(arg0: number): $TextField$TextFieldStyle;
        holder: $UIElement;
        constructor(arg0: $TextField);
    }
    export class $Button$ButtonStyle extends $Style {
        pressedTexture(): $IGuiTexture;
        pressedTexture(arg0: $IGuiTexture_): $Button$ButtonStyle;
        baseTexture(arg0: $IGuiTexture_): $Button$ButtonStyle;
        baseTexture(): $IGuiTexture;
        hoverTexture(arg0: $IGuiTexture_): $Button$ButtonStyle;
        hoverTexture(): $IGuiTexture;
        holder: $UIElement;
        constructor(arg0: $Button);
    }
    export class $Scroller$Horizontal extends $Scroller {
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
    }
    export class $Button$State extends $Enum<$Button$State> {
        static values(): $Button$State[];
        static valueOf(arg0: string): $Button$State;
        static PRESSED: $Button$State;
        static HOVERED: $Button$State;
        static DEFAULT: $Button$State;
    }
    /**
     * Values that may be interpreted as {@link $Button$State}.
     */
    export type $Button$State_ = "default" | "hovered" | "pressed";
    export class $Toggle$ToggleStyle extends $Style {
        static init(): void;
        unmarkTexture(): $IGuiTexture;
        unmarkTexture(arg0: $IGuiTexture_): $Toggle$ToggleStyle;
        markTexture(): $IGuiTexture;
        markTexture(arg0: $IGuiTexture_): $Toggle$ToggleStyle;
        baseTexture(arg0: $IGuiTexture_): $Toggle$ToggleStyle;
        hoverTexture(arg0: $IGuiTexture_): $Toggle$ToggleStyle;
        holder: $UIElement;
        constructor(arg0: $Toggle);
    }
    export class $ScrollerView extends $UIElement {
        scrollerStyle(arg0: $Consumer_<$ScrollerView$ScrollerViewStyle>): $ScrollerView;
        viewContainer(arg0: $Consumer_<$UIElement>): $ScrollerView;
        addScrollViewChild(arg0: $UIElement): $ScrollerView;
        verticalScroller(arg0: $Consumer_<$Scroller>): $ScrollerView;
        getScrollerViewStyle(): $ScrollerView$ScrollerViewStyle;
        addScrollViewChildAt(arg0: $UIElement, arg1: number): $ScrollerView;
        removeScrollViewChild(arg0: $UIElement): boolean;
        scrollToChildDelayed(arg0: $UIElement): void;
        addScrollViewChildren(...arg0: $UIElement[]): $ScrollerView;
        viewPort(arg0: $Consumer_<$UIElement>): $ScrollerView;
        horizontalScroller(arg0: $Consumer_<$Scroller>): $ScrollerView;
        clearAllScrollViewChildren(): void;
        scrollToChild(arg0: $UIElement): boolean;
        verticalContainer(arg0: $Consumer_<$UIElement>): $ScrollerView;
        getContainerHeight(): number;
        hasScrollViewChild(arg0: $UIElement): boolean;
        getContainerWidth(): number;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get scrollerViewStyle(): $ScrollerView$ScrollerViewStyle;
        get containerHeight(): number;
        get containerWidth(): number;
    }
    export class $SearchComponent$SearchStyle extends $Style {
        static init(): void;
        focusOverlay(arg0: $IGuiTexture_): $SearchComponent$SearchStyle;
        focusOverlay(): $IGuiTexture;
        showOverlay(arg0: boolean): $SearchComponent$SearchStyle;
        showOverlay(): boolean;
        maxItemCount(): number;
        maxItemCount(arg0: number): $SearchComponent$SearchStyle;
        closeAfterSelect(arg0: boolean): $SearchComponent$SearchStyle;
        closeAfterSelect(): boolean;
        scrollerViewHeight(): number;
        scrollerViewHeight(arg0: number): $SearchComponent$SearchStyle;
        holder: $UIElement;
    }
    export class $Scroller extends $BindableUIElement<number> {
        getValue(): number;
        setValue(arg0: number, arg1: boolean): $Scroller;
        setValue(arg0: number): $Scroller;
        getMinValue(): number;
        getMaxValue(): number;
        scrollerStyle(arg0: $Consumer_<$Scroller$ScrollerStyle>): $Scroller;
        setNormalizedValue(arg0: number, arg1: boolean): $Scroller;
        setNormalizedValue(arg0: number): $Scroller;
        getNormalizedValue(): number;
        setClampNormalizedValue(arg0: $Function_<number, number>): $Scroller;
        setMinValue(arg0: number): $Scroller;
        setOnValueChanged(arg0: $FloatConsumer_): $Scroller;
        setScrollBarSize(arg0: number): $Scroller;
        getClampNormalizedValue(): $Function<number, number>;
        tailButton(arg0: $Consumer_<$Button>): $Scroller;
        headButton(arg0: $Consumer_<$Button>): $Scroller;
        setRange(arg0: number, arg1: number): $Scroller;
        scrollContainer(arg0: $Consumer_<$UIElement>): $Scroller;
        scrollValue(arg0: number): void;
        getScrollerStyle(): $Scroller$ScrollerStyle;
        isDragging(): boolean;
        setMaxValue(arg0: number): $Scroller;
        scrollBar(arg0: $Consumer_<$Button>): $Scroller;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        set onValueChanged(value: $FloatConsumer_);
        set scrollBarSize(value: number);
        get dragging(): boolean;
    }
    export class $ToggleGroupElement extends $UIElement {
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        toggleGroup: $Toggle$ToggleGroup;
        constructor();
    }
    export class $BindableUIElement<T> extends $UIElement implements $IBindable<T>, $IObservable<T>, $IDataConsumer<T> {
        getValue(): T;
        setValue(arg0: T, arg1: boolean): $BindableUIElement<T>;
        registerValueListener(arg0: $Consumer_<T>): $ISubscription;
        getBoundDataSources(): $Collection<$IDataProvider<T>>;
        unbindObserver(arg0: $IObserver_<T>): $BindableUIElement<T>;
        bindObserver(arg0: $IObserver_<T>): $BindableUIElement<T>;
        getBoundObservers(): $Collection<$IObserver<T>>;
        bindDataSource(arg0: $IDataProvider<T>): $BindableUIElement<T>;
        bindDataSource(arg0: $IDataProvider<T>, arg1: boolean): $BindableUIElement<T>;
        bind(arg0: $IBinding<T>): $UIElement;
        unbind(arg0: $IBinding<T>): $UIElement;
        setValue(arg0: T): $IDataSource<T>;
        unbindDataSource(arg0: $IDataProvider<T>): $UIElement;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get boundDataSources(): $Collection<$IDataProvider<T>>;
        get boundObservers(): $Collection<$IObserver<T>>;
    }
    export class $ItemSlot extends $BindableUIElement<$ItemStack> {
        getValue(): $ItemStack;
        setValue(arg0: $ItemStack_, arg1: boolean): $ItemSlot;
        getSlot(): $Slot;
        bind(arg0: $Slot): $ItemSlot;
        bind(arg0: $IItemHandlerModifiable, arg1: number): $ItemSlot;
        setItem(arg0: $ItemStack_): $ItemSlot;
        setItem(arg0: $ItemStack_, arg1: boolean): $ItemSlot;
        xeiPhantom(): $ItemSlot;
        xeiRecipeSlot(arg0: $IngredientIO_, arg1: number): $ItemSlot;
        xeiRecipeSlot(): $ItemSlot;
        xeiRecipeSlot(arg0: $IngredientIO_, arg1: number, arg2: number, arg3: $Supplier_<$Stream<$ItemStack>>): $ItemSlot;
        updateSlotPosition(): void;
        getSlotStyle(): $ItemSlot$SlotStyle;
        slotStyle(arg0: $Consumer_<$ItemSlot$SlotStyle>): $ItemSlot;
        xeiRecipeIngredient(arg0: $IngredientIO_, arg1: $Supplier_<$Stream<$ItemStack>>): $ItemSlot;
        xeiRecipeIngredient(arg0: $IngredientIO_): $ItemSlot;
        getFullTooltipTexts(): $List<$Component>;
        getFullTooltipTexts(arg0: boolean): $List<$Component>;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        static DRAGGING_BG: $IGuiTexture;
        static ITEM_SLOT_TEXTURE: $IGuiTexture;
        constructor();
        constructor(arg0: $Slot);
        get slot(): $Slot;
    }
    export class $VirtualItemHeightMode extends $Enum<$VirtualItemHeightMode> {
        static values(): $VirtualItemHeightMode[];
        static valueOf(arg0: string): $VirtualItemHeightMode;
        static VARIABLE: $VirtualItemHeightMode;
        static FIXED: $VirtualItemHeightMode;
    }
    /**
     * Values that may be interpreted as {@link $VirtualItemHeightMode}.
     */
    export type $VirtualItemHeightMode_ = "fixed" | "variable";
    export class $SearchComponent$ISearchUI<T> {
        static empty<T>(): $SearchComponent$ISearchUI<T>;
        static EMPTY: $SearchComponent$ISearchUI$Empty<any>;
    }
    export interface $SearchComponent$ISearchUI<T> extends $ISearch<T> {
        resultText(arg0: T): string;
        onResultSelected(arg0: T): void;
    }
    export class $Tab$TabStyle extends $Style {
        baseTexture(): $IGuiTexture;
        baseTexture(arg0: $IGuiTexture_): $Tab$TabStyle;
        selectedTexture(): $IGuiTexture;
        selectedTexture(arg0: $IGuiTexture_): $Tab$TabStyle;
        hoverTexture(): $IGuiTexture;
        hoverTexture(arg0: $IGuiTexture_): $Tab$TabStyle;
        holder: $UIElement;
        constructor(arg0: $Tab);
    }
    export class $Label extends $TextElement implements $IBindable<$Component>, $IDataConsumer<$Component> {
        getValue(): $Component;
        setValue(arg0: $Component_): $Label;
        getBoundDataSources(): $Collection<$IDataProvider<$Component>>;
        bind(arg0: $IBinding<$Component_>): $UIElement;
        unbind(arg0: $IBinding<$Component_>): $UIElement;
        unbindDataSource(arg0: $IDataProvider<$Component_>): $UIElement;
        bindDataSource(arg0: $IDataProvider<$Component_>): $UIElement;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get boundDataSources(): $Collection<$IDataProvider<$Component>>;
    }
    export class $TextArea$History extends $Record {
        lines(): string[];
        cursor(): $Cursor;
        constructor(lines: string[], cursor: $Cursor_);
    }
    /**
     * Values that may be interpreted as {@link $TextArea$History}.
     */
    export type $TextArea$History_ = { lines?: string[], cursor?: $Cursor_,  } | [lines?: string[], cursor?: $Cursor_, ];
    export class $TreeList<NODE extends $ITreeNode<never, never>> extends $UIElement {
        getRoot(): NODE;
        setReorderValidator(arg0: $Predicate_<$TreeList$ReorderRequest<NODE>>): $TreeList<NODE>;
        setWidthFitsContent(arg0: boolean): $TreeList<NODE>;
        static createDraggingOverlay(arg0: $TreeList$DropMode_, arg1: boolean): $IGuiTexture;
        static createDraggingOverlay(arg0: number): $IGuiTexture;
        setDragPayloadFactory(arg0: $Function_<NODE, $Object>): $TreeList<NODE>;
        expandNodeAlongPath(arg0: NODE): void;
        static optionalIconTextTemplate<NODE extends $ITreeNode<never, never>>(arg0: $Function_<NODE, $IGuiTexture>, arg1: $Function_<NODE, $Component>): $UIElementProvider<NODE>;
        static isMouseOverNodeAbove(arg0: $UIEvent): boolean;
        static isMouseOverNodeCenter(arg0: $UIEvent): boolean;
        static isMouseOverNodeBelow(arg0: $UIEvent): boolean;
        setOnSelectedChanged(arg0: $Consumer_<$Set<NODE>>): $TreeList<NODE>;
        setOnDoubleClickNode(arg0: $Consumer_<NODE>): $TreeList<NODE>;
        setSelectableNodeFilter(arg0: $Predicate_<NODE>): $TreeList<NODE>;
        setClickToExpandFilter(arg0: $Predicate_<NODE>): $TreeList<NODE>;
        setRightClickToExpand(arg0: boolean): $TreeList<NODE>;
        setDoubleClickToExpand(arg0: boolean): $TreeList<NODE>;
        getSelected(): $Set<NODE>;
        setRoot(arg0: NODE): $TreeList<NODE>;
        setSelected(arg0: $Collection_<NODE>, arg1: boolean): $TreeList<NODE>;
        static textTemplate<NODE extends $ITreeNode<never, never>>(arg0: $Function_<NODE, $Component>): $UIElementProvider<NODE>;
        setSupportMultipleSelection(arg0: boolean): $TreeList<NODE>;
        expandNode(arg0: NODE): void;
        menuStyle(arg0: $Consumer_<$TreeList$TreeListStyle>): $TreeList<NODE>;
        getNodeUIs(): $BiMap<NODE, $UIElement>;
        reloadList(): $TreeList<NODE>;
        isNodeExpanded(arg0: NODE): boolean;
        toggleNodeExpanded(arg0: NODE): void;
        isNodeSelected(arg0: NODE): boolean;
        setStaticTree(arg0: boolean): $TreeList<NODE>;
        removeSelected(arg0: NODE, arg1: boolean): $TreeList<NODE>;
        expandsOnClick(arg0: NODE): boolean;
        expandAllNodesIf(arg0: NODE, arg1: $Predicate_<NODE>): void;
        collapseNode(arg0: NODE): void;
        createNodeUI(arg0: NODE): $UIElement;
        static iconTextTemplate<NODE extends $ITreeNode<never, never>>(arg0: $Function_<NODE, $IGuiTexture>, arg1: $Function_<NODE, $Component>): $UIElementProvider<NODE>;
        setClickToExpand(arg0: boolean): $TreeList<NODE>;
        setOnReorder(arg0: $Consumer_<$TreeList$ReorderRequest<NODE>>): $TreeList<NODE>;
        isWidthFitsContent(): boolean;
        getHoveredNode(): NODE;
        addSelected(arg0: NODE, arg1: boolean): $TreeList<NODE>;
        setFlattenRoot(arg0: boolean): $TreeList<NODE>;
        getExpandedNodes(): $Set<NODE>;
        setNodeUISupplier(arg0: $UIElementProvider_<NODE>): $TreeList<NODE>;
        setOnNodeUICreated(arg0: $BiConsumer_<NODE, $UIElement>): $TreeList<NODE>;
        getTreeListStyle(): $TreeList$TreeListStyle;
        setDraggable(arg0: boolean): $TreeList<NODE>;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor(arg0: NODE, arg1: boolean);
        constructor(arg0: NODE);
        constructor();
        set reorderValidator(value: $Predicate_<$TreeList$ReorderRequest<NODE>>);
        set dragPayloadFactory(value: $Function_<NODE, $Object>);
        set onSelectedChanged(value: $Consumer_<$Set<NODE>>);
        set onDoubleClickNode(value: $Consumer_<NODE>);
        set selectableNodeFilter(value: $Predicate_<NODE>);
        set clickToExpandFilter(value: $Predicate_<NODE>);
        set rightClickToExpand(value: boolean);
        set doubleClickToExpand(value: boolean);
        set supportMultipleSelection(value: boolean);
        get nodeUIs(): $BiMap<NODE, $UIElement>;
        set staticTree(value: boolean);
        set clickToExpand(value: boolean);
        set onReorder(value: $Consumer_<$TreeList$ReorderRequest<NODE>>);
        get hoveredNode(): NODE;
        set flattenRoot(value: boolean);
        get expandedNodes(): $Set<NODE>;
        set nodeUISupplier(value: $UIElementProvider_<NODE>);
        set onNodeUICreated(value: $BiConsumer_<NODE, $UIElement>);
        get treeListStyle(): $TreeList$TreeListStyle;
        set draggable(value: boolean);
    }
    export class $TextArea extends $BindableUIElement<string[]> {
        scale(): number;
        getValue(): string[];
        setValue(arg0: string[]): $TextArea;
        setValue(arg0: string[], arg1: boolean): $TextArea;
        isError(): boolean;
        getCursorUnderMouse(arg0: number, arg1: number): $Cursor;
        collapseSelectionToCursor(): void;
        getLines(): $List<string>;
        hasSelection(): boolean;
        getCursorLine(): number;
        getSelStartLine(): number;
        getSelEndLine(): number;
        getTextAreaStyle(): $TextArea$TextAreaStyle;
        pushHistory(): void;
        setLines(arg0: $List_<string>): $TextArea;
        setLines(arg0: string[], arg1: boolean): $TextArea;
        getScrollX(): number;
        getScrollY(): number;
        setTextValidator(arg0: $Predicate_<string[]>): $TextArea;
        cursorPos(): $Cursor;
        lineHeight(): number;
        setLinesResponder(arg0: $Consumer_<string[]>): $TextArea;
        getSelEndCol(): number;
        getHistoryStack(): $HistoryStack<$TextArea$History>;
        getSelStartCol(): number;
        setCharValidator(arg0: $Predicate_<string>): $TextArea;
        setSelection(arg0: $Cursor_, arg1: $Cursor_): void;
        textAreaStyle(arg0: $Consumer_<$TextArea$TextAreaStyle>): $TextArea;
        getFont(): $Font;
        drawContentView(arg0: $GUIContext): void;
        getCursorCol(): number;
        isEditable(): boolean;
        setCursor(arg0: number, arg1: number): void;
        contentView: $UIElement;
        verticalScroller: $Scroller;
        static CODEC: $Codec<$UIElement>;
        horizontalScroller: $Scroller;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get error(): boolean;
        get cursorLine(): number;
        get selStartLine(): number;
        get selEndLine(): number;
        get scrollX(): number;
        get scrollY(): number;
        set textValidator(value: $Predicate_<string[]>);
        set linesResponder(value: $Consumer_<string[]>);
        get selEndCol(): number;
        get historyStack(): $HistoryStack<$TextArea$History>;
        get selStartCol(): number;
        set charValidator(value: $Predicate_<string>);
        get font(): $Font;
        get cursorCol(): number;
        get editable(): boolean;
    }
    export class $Switch$SwitchStyle extends $Style {
        static init(): void;
        pressedTexture(): $IGuiTexture;
        pressedTexture(arg0: $IGuiTexture_): $Switch$SwitchStyle;
        unmarkTexture(): $IGuiTexture;
        unmarkTexture(arg0: $IGuiTexture_): $Switch$SwitchStyle;
        markTexture(): $IGuiTexture;
        markTexture(arg0: $IGuiTexture_): $Switch$SwitchStyle;
        baseTexture(arg0: $IGuiTexture_): $Switch$SwitchStyle;
        baseTexture(): $IGuiTexture;
        holder: $UIElement;
        constructor(arg0: $Switch);
    }
    export class $TreeList$TreeListStyle extends $Style {
        expandIcon(arg0: $IGuiTexture_): $TreeList$TreeListStyle;
        expandIcon(): $IGuiTexture;
        collapseIcon(arg0: $IGuiTexture_): $TreeList$TreeListStyle;
        collapseIcon(): $IGuiTexture;
        hoverTexture(arg0: $IGuiTexture_): $TreeList$TreeListStyle;
        hoverTexture(): $IGuiTexture;
        nodeTexture(): $IGuiTexture;
        nodeTexture(arg0: $IGuiTexture_): $TreeList$TreeListStyle;
        holder: $UIElement;
        constructor(arg0: $TreeList<any>);
    }
    export class $SearchComponent<T> extends $BindableUIElement<T> {
        isOpen(): boolean;
        setValue(arg0: T, arg1: boolean): $SearchComponent<T>;
        hide(): void;
        setCandidateUIProvider(arg0: $UIElementProvider_<T>): $SearchComponent<T>;
        searchStyle(arg0: $Consumer_<$SearchComponent$SearchStyle>): $SearchComponent<T>;
        setSearchUI(arg0: $SearchComponent$ISearchUI<T>): $SearchComponent<T>;
        setOnValueChanged(arg0: $Consumer_<T>): $SearchComponent<T>;
        setSelected(arg0: T, arg1: boolean): $SearchComponent<T>;
        setSelected(arg0: T): $SearchComponent<T>;
        show(): void;
        getSearchStyle(): $SearchComponent$SearchStyle;
        setSearchOnServer(arg0: $Class<T[]>): $SearchComponent<T>;
        getSearchUI(): $SearchComponent$ISearchUI<T>;
        isSearchOnServer(): boolean;
        preview: $UIElement;
        dialog: $UIElement;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        listView: $UIElement;
        scrollerView: $VirtualScrollerView<T>;
        textField: $TextField;
        constructor(arg0: $SearchComponent$ISearchUI<T>);
        constructor();
        get open(): boolean;
        set candidateUIProvider(value: $UIElementProvider_<T>);
        set onValueChanged(value: $Consumer_<T>);
    }
    export class $FluidSlot extends $BindableUIElement<$FluidStack> {
        getValue(): $FluidStack;
        setValue(arg0: $FluidStack_, arg1: boolean): $FluidSlot;
        bind(arg0: $IFluidHandler, arg1: number): $FluidSlot;
        getCapacity(): number;
        getFluid(): $FluidStack;
        setCapacity(arg0: number): $FluidSlot;
        xeiPhantom(): $FluidSlot;
        xeiRecipeSlot(arg0: $IngredientIO_, arg1: number): $FluidSlot;
        xeiRecipeSlot(arg0: $IngredientIO_, arg1: number, arg2: number, arg3: $Supplier_<$Stream<$FluidStack>>): $FluidSlot;
        xeiRecipeSlot(): $FluidSlot;
        getSlotStyle(): $FluidSlot$SlotStyle;
        isAllowClickFilled(): boolean;
        getFluidAmountText(): $Component;
        slotStyle(arg0: $Consumer_<$FluidSlot$SlotStyle>): $FluidSlot;
        setFluid(arg0: $FluidStack_): $FluidSlot;
        setFluid(arg0: $FluidStack_, arg1: boolean): $FluidSlot;
        setAllowClickFilled(arg0: boolean): $FluidSlot;
        isAllowClickDrained(): boolean;
        xeiRecipeIngredient(arg0: $IngredientIO_): $FluidSlot;
        xeiRecipeIngredient(arg0: $IngredientIO_, arg1: $Supplier_<$Stream<$FluidStack>>): $FluidSlot;
        getFullTooltipTexts(): $List<$Component>;
        getFullTooltipTexts(arg0: boolean): $List<$Component>;
        setAllowClickDrained(arg0: boolean): $FluidSlot;
        amountLabel: $Label;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get fluidAmountText(): $Component;
    }
    export class $VirtualScrollerView<T> extends $ScrollerView {
        getItemCount(): number;
        setItemUIProvider(arg0: $UIElementProvider_<$CompoundTag>): $VirtualScrollerView<$CompoundTag>;
        scrollToTop(): void;
        getVirtualScrollerViewStyle(): $VirtualScrollerView$VirtualScrollerViewStyle;
        virtualScrollerViewStyle(arg0: $Consumer_<$VirtualScrollerView$VirtualScrollerViewStyle>): $VirtualScrollerView<$CompoundTag>;
        getLastMountedIndex(): number;
        refreshVisibleItems(arg0: number, arg1: number): void;
        refreshVisibleItems(): void;
        updateMeasuredItemHeight(arg0: number, arg1: number): boolean;
        getMountedItemCount(): number;
        getFirstMountedIndex(): number;
        getTotalVirtualHeight(): number;
        setBeforeMountItems(arg0: $Runnable_): $VirtualScrollerView<$CompoundTag>;
        setItems(arg0: $List_<$CompoundTag_>): $VirtualScrollerView<$CompoundTag>;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get itemCount(): number;
        set itemUIProvider(value: $UIElementProvider_<$CompoundTag>);
        get lastMountedIndex(): number;
        get mountedItemCount(): number;
        get firstMountedIndex(): number;
        get totalVirtualHeight(): number;
        set beforeMountItems(value: $Runnable_);
        set items(value: $List_<$CompoundTag_>);
    }
    export class $TagField extends $BindableUIElement<$Tag> {
        getValue(): $Tag;
        setValue(arg0: $Tag_, arg1: boolean): $TagField;
        setAny(): $TagField;
        setCompoundTagOnly(): $TagField;
        setTagResponder(arg0: $Consumer_<$Tag>): $TagField;
        setListOnly(): $TagField;
        setTagValidator(arg0: $Predicate_<$Tag>): $TagField;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        editButton: $Button;
        textField: $TextField;
        constructor();
        set tagResponder(value: $Consumer_<$Tag>);
        set tagValidator(value: $Predicate_<$Tag>);
    }
    export class $Button extends $UIElement {
        getState(): $Button$State;
        textStyle(arg0: $Consumer_<$TextElement$TextStyle>): $Button;
        setText(arg0: string, arg1: boolean): $Button;
        addPreIcon(arg0: $IGuiTexture_): $Button;
        setOnServerClick(arg0: $UIEventListener_): $Button;
        addPostIcon(arg0: $IGuiTexture_): $Button;
        getButtonStyle(): $Button$ButtonStyle;
        buttonStyle(arg0: $Consumer_<$Button$ButtonStyle>): $Button;
        setText(arg0: $Component_): $Button;
        setOnClick(arg0: $UIEventListener_): $Button;
        noText(): $Button;
        enableText(): $Button;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        text: $TextElement;
        constructor();
        get state(): $Button$State;
        set onServerClick(value: $UIEventListener_);
        set onClick(value: $UIEventListener_);
    }
    export class $GraphView$GraphViewStyle extends $Style {
        gridSize(arg0: number): $GraphView$GraphViewStyle;
        gridSize(): number;
        minScale(arg0: number): $GraphView$GraphViewStyle;
        minScale(): number;
        allowZoom(arg0: boolean): $GraphView$GraphViewStyle;
        allowZoom(): boolean;
        maxScale(arg0: number): $GraphView$GraphViewStyle;
        maxScale(): number;
        allowPan(arg0: boolean): $GraphView$GraphViewStyle;
        allowPan(): boolean;
        gridTexture(arg0: $IGuiTexture_): $GraphView$GraphViewStyle;
        gridTexture(): $IGuiTexture;
        holder: $UIElement;
        constructor(arg0: $GraphView);
    }
    export class $SplitView$Horizontal extends $SplitView {
        left(arg0: $UIElement): $SplitView$Horizontal;
        right(arg0: $UIElement): $SplitView$Horizontal;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
    }
    export class $StructuredTagEditor extends $BindableUIElement<$Tag> {
        getValue(): $Tag;
        setValue(arg0: $Tag_, arg1: boolean): $StructuredTagEditor;
        static removeByteArrayElement(arg0: $ByteArrayTag, arg1: number): $ByteArrayTag;
        static removeLongArrayElement(arg0: $LongArrayTag, arg1: number): $LongArrayTag;
        static insertLongArrayElement(arg0: $LongArrayTag, arg1: number, arg2: number): $LongArrayTag;
        static insertByteArrayElement(arg0: $ByteArrayTag, arg1: number, arg2: number): $ByteArrayTag;
        static changeListElementType(arg0: $ListTag_, arg1: $StructuredTagEditor$TagKind_): $ListTag;
        static setLongArrayElement(arg0: $LongArrayTag, arg1: number, arg2: number): $LongArrayTag;
        static setByteArrayElement(arg0: $ByteArrayTag, arg1: number, arg2: number): $ByteArrayTag;
        static insertIntArrayElement(arg0: $IntArrayTag, arg1: number, arg2: number): $IntArrayTag;
        static removeIntArrayElement(arg0: $IntArrayTag, arg1: number): $IntArrayTag;
        setAny(): $StructuredTagEditor;
        setCompoundTagOnly(): $StructuredTagEditor;
        setTagResponder(arg0: $Consumer_<$Tag>): $StructuredTagEditor;
        setListOnly(): $StructuredTagEditor;
        setTagValidator(arg0: $Predicate_<$Tag>): $StructuredTagEditor;
        static convertTag(arg0: $Tag_, arg1: $StructuredTagEditor$TagKind_): $Tag;
        static setIntArrayElement(arg0: $IntArrayTag, arg1: number, arg2: number): $IntArrayTag;
        static renameCompoundKey(arg0: $CompoundTag_, arg1: string, arg2: string): boolean;
        setRootTypeFilter(arg0: $Predicate_<$StructuredTagEditor$TagKind>): $StructuredTagEditor;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        scrollerView: $ScrollerView;
        constructor();
        set tagResponder(value: $Consumer_<$Tag>);
        set tagValidator(value: $Predicate_<$Tag>);
        set rootTypeFilter(value: $Predicate_<$StructuredTagEditor$TagKind>);
    }
    export class $ItemSlot$SlotStyle extends $Style {
        isPlayerSlot(arg0: boolean): $ItemSlot$SlotStyle;
        isPlayerSlot(): boolean;
        slotOverlay(arg0: $IGuiTexture_): $ItemSlot$SlotStyle;
        slotOverlay(): $IGuiTexture;
        showItemTooltips(): boolean;
        showItemTooltips(arg0: boolean): $ItemSlot$SlotStyle;
        hoverOverlay(): $IGuiTexture;
        hoverOverlay(arg0: $IGuiTexture_): $ItemSlot$SlotStyle;
        showSlotOverlayOnlyEmpty(arg0: boolean): $ItemSlot$SlotStyle;
        showSlotOverlayOnlyEmpty(): boolean;
        quickMovePriority(): number;
        quickMovePriority(arg0: number): $ItemSlot$SlotStyle;
        acceptQuickMove(arg0: boolean): $ItemSlot$SlotStyle;
        acceptQuickMove(): boolean;
        holder: $UIElement;
        constructor(arg0: $ItemSlot);
    }
    export class $ProgressBar$ProgressBarStyle extends $Style {
        static init(): void;
        interpolate(): boolean;
        interpolate(arg0: boolean): $ProgressBar$ProgressBarStyle;
        interpolateStep(): number;
        interpolateStep(arg0: number): $ProgressBar$ProgressBarStyle;
        fillDirection(): $FillDirection;
        fillDirection(arg0: $FillDirection_): $ProgressBar$ProgressBarStyle;
        holder: $UIElement;
        constructor(arg0: $ProgressBar);
    }
    export class $Scroller$Vertical extends $Scroller {
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
    }
    export class $Menu<K, T> extends $UIElement {
        close(): void;
        setOnNodeClicked(arg0: $Consumer_<$ITreeNode<K, $CompoundTag>>): $Menu<K, $CompoundTag>;
        setOnClose(arg0: $Runnable_): $Menu<K, $CompoundTag>;
        setHoverTextureProvider(arg0: $Function_<$ITreeNode<K, $CompoundTag>, $IGuiTexture>): $Menu<K, $CompoundTag>;
        setAutoClose(arg0: boolean): $Menu<K, $CompoundTag>;
        menuStyle(arg0: $Consumer_<$Menu$MenuStyle>): $Menu<K, $CompoundTag>;
        getNodeUIs(): $Map<$ITreeNode<K, $CompoundTag>, $UIElement>;
        setUiProvider(arg0: $UIElementProvider_<K>): $Menu<K, $CompoundTag>;
        getMenuStyle(): $Menu$MenuStyle;
        setTextureProvider(arg0: $Function_<$ITreeNode<K, $CompoundTag>, $IGuiTexture>): $Menu<K, $CompoundTag>;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        root: $ITreeNode<K, $CompoundTag>;
        constructor(arg0: $ITreeNode<K, $CompoundTag_>);
        constructor(arg0: $ITreeNode<K, $CompoundTag_>, arg1: $UIElementProvider_<K>);
        set onNodeClicked(value: $Consumer_<$ITreeNode<K, $CompoundTag>>);
        set onClose(value: $Runnable_);
        set hoverTextureProvider(value: $Function_<$ITreeNode<K, $CompoundTag>, $IGuiTexture>);
        set autoClose(value: boolean);
        get nodeUIs(): $Map<$ITreeNode<K, $CompoundTag>, $UIElement>;
        set uiProvider(value: $UIElementProvider_<K>);
        set textureProvider(value: $Function_<$ITreeNode<K, $CompoundTag>, $IGuiTexture>);
    }
    export class $Dialog extends $UIElement {
        bottom(): $Dialog;
        close(): void;
        top(): $Dialog;
        width(arg0: $TaffyDimension): $Dialog;
        /**
         * @deprecated
         */
        width(arg0: $StyleSizeLength): $Dialog;
        static showCheckBox(arg0: string, arg1: $Component_, arg2: $BooleanConsumer_): $Dialog;
        static showCheckBox(arg0: string, arg1: string, arg2: $BooleanConsumer_): $Dialog;
        static suffixFilter(...arg0: string[]): $Predicate<$FileNode>;
        static showFileDialog(arg0: string, arg1: $File_, arg2: boolean, arg3: $Predicate_<$FileNode>, arg4: $Consumer_<$File>): $Dialog;
        static showFileDialog(arg0: string, arg1: $File_, arg2: boolean, arg3: $Predicate_<$FileNode>, arg4: number, arg5: $Consumer_<$File>): $Dialog;
        static showFileDialog(arg0: string, arg1: $File_, arg2: boolean, arg3: $File_, arg4: $Predicate_<$FileNode>, arg5: number, arg6: $Consumer_<$File>): $Dialog;
        static showFileDialog(arg0: string, arg1: $File_, arg2: boolean, arg3: $File_, arg4: $Predicate_<$FileNode>, arg5: $Consumer_<$File>): $Dialog;
        setOnClose(arg0: $Runnable_): $Dialog;
        windowMode(arg0: number, arg1: number, arg2: number, arg3: number): $Dialog;
        windowMode(arg0: number, arg1: number): $Dialog;
        addContent(arg0: $UIElement): $Dialog;
        setTitle(arg0: string): $Dialog;
        show(arg0: $UIElement): $Dialog;
        show(arg0: $ModularUI): $Dialog;
        static showCancelableCheck(arg0: string, arg1: string, arg2: $BooleanConsumer_, arg3: $Runnable_): $Dialog;
        addButton(arg0: $UIElement): $Dialog;
        setAutoClose(arg0: boolean): $Dialog;
        addExternalElement(arg0: $UIElement): $Dialog;
        static stringEditorDialog(arg0: string, arg1: string, arg2: $Predicate_<string>, arg3: $Consumer_<string>): $Dialog;
        darkenBackground(): $Dialog;
        allowInteraction(): $Dialog;
        static showNotification(arg0: string, arg1: string, arg2: $Runnable_): $Dialog;
        static showNotification(arg0: string, arg1: number): $Dialog;
        setClickOutsideClose(arg0: boolean): $Dialog;
        removeExternalElement(arg0: $UIElement): $Dialog;
        titleBar: $UIElement;
        static CODEC: $Codec<$UIElement>;
        overlay: $UIElement;
        contentContainer: $UIElement;
        static EMPTY_LAYOUT: $Layout;
        buttonContainer: $UIElement;
        constructor();
        set onClose(value: $Runnable_);
        set title(value: string);
        set autoClose(value: boolean);
        set clickOutsideClose(value: boolean);
    }
    export class $TabView extends $UIElement {
        clear(): $TabView;
        tabHeaderContainer(arg0: $Consumer_<$UIElement>): $TabView;
        getSelectedTab(): $Tab;
        setOnTabSelected(arg0: $Consumer_<$Tab>): $TabView;
        tabScroller(arg0: $Consumer_<$ScrollerView>): $TabView;
        getTabContents(): $BiMap<$Tab, $UIElement>;
        addTab(arg0: $Tab, arg1: $UIElement): $TabView;
        addTab(arg0: $Tab, arg1: $UIElement, arg2: number): $TabView;
        selectTab(arg0: $Tab): $TabView;
        removeTab(arg0: $Tab): $TabView;
        tabContentContainer(arg0: $Consumer_<$UIElement>): $TabView;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get selectedTab(): $Tab;
        set onTabSelected(value: $Consumer_<$Tab>);
        get tabContents(): $BiMap<$Tab, $UIElement>;
    }
    export class $Scene extends $UIElement {
        setRenderedCore(arg0: $Collection_<$BlockPos_>, arg1: $ISceneBlockRenderHook, arg2: boolean): $Scene;
        setRenderedCore(arg0: $Collection_<$BlockPos_>, arg1: $ISceneBlockRenderHook): $Scene;
        setRenderedCore(arg0: $Collection_<$BlockPos_>): $Scene;
        setRenderSelect(arg0: boolean): $Scene;
        createScene(arg0: $Level_): $Scene;
        createScene(arg0: $Level_, arg1: boolean, arg2: $Size): $Scene;
        setRenderFacing(arg0: boolean): $Scene;
        getCenter(): $Vector3f;
        setCenter(arg0: $Vector3f): $Scene;
        getRenderer(): $WorldSceneRenderer;
        getRange(): number;
        setBeforeWorldRender(arg0: $Consumer_<$Scene>): $Scene;
        releaseRendererResource(): void;
        setAfterWorldRender(arg0: $Consumer_<$Scene>): $Scene;
        getLastSelectedPosFace(): $BlockPosFace;
        setShowHoverBlockTips(arg0: boolean): $Scene;
        getLastClickPosFace(): $BlockPosFace;
        setCameraYawAndPitch(arg0: number, arg1: number): $Scene;
        getLastHoverPosFace(): $BlockPosFace;
        isShowHoverBlockTips(): boolean;
        setCameraYawAndPitchAnima(arg0: number, arg1: number, arg2: number): void;
        isDragging(): boolean;
        useOrtho(): $Scene;
        useOrtho(arg0: boolean): $Scene;
        getZoom(): number;
        setZoom(arg0: number): $Scene;
        camZoom(): number;
        isScalable(): boolean;
        xeiLookup(): $Scene;
        isUseCache(): boolean;
        isUseOrtho(): boolean;
        getParticleManager(): $ParticleManager;
        needCompileCache(): void;
        useCacheBuffer(arg0: boolean): $Scene;
        useCacheBuffer(): $Scene;
        syncCompile(arg0: boolean): $Scene;
        syncCompile(): $Scene;
        setAllowXEILookup(arg0: boolean): $Scene;
        isIntractable(): boolean;
        getClipBlock(): $ClipContext$Block;
        renderBlockOverLay(arg0: $WorldSceneRenderer): void;
        getDummyWorld(): $TrackedDummyWorld;
        isDraggable(): boolean;
        getOnSelected(): $BiConsumer<$BlockPos, $Direction>;
        setOrthoRange(arg0: number): $Scene;
        getRotationYaw(): number;
        setClipContext(arg0: $ClipContext$Block_, arg1: $ClipContext$Fluid_): $Scene;
        isRenderSelect(): boolean;
        setOnSelected(arg0: $BiConsumer_<$BlockPos, $Direction>): $Scene;
        isAutoReleased(): boolean;
        isTickWorld(): boolean;
        setTickWorld(arg0: boolean): $Scene;
        getLastHoverItem(): $ItemStack;
        isRenderFacing(): boolean;
        isSyncCompile(): boolean;
        drawFacingBorder(arg0: $PoseStack, arg1: $BlockPosFace_, arg2: number, arg3: number): void;
        drawFacingBorder(arg0: $PoseStack, arg1: $BlockPosFace_, arg2: number): void;
        getRotationPitch(): number;
        getClipFluid(): $ClipContext$Fluid;
        setScalable(arg0: boolean): $Scene;
        setIntractable(arg0: boolean): $Scene;
        isAllowXEILookup(): boolean;
        setDraggable(arg0: boolean): $Scene;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get renderer(): $WorldSceneRenderer;
        get range(): number;
        set beforeWorldRender(value: $Consumer_<$Scene>);
        set afterWorldRender(value: $Consumer_<$Scene>);
        get lastSelectedPosFace(): $BlockPosFace;
        get lastClickPosFace(): $BlockPosFace;
        get lastHoverPosFace(): $BlockPosFace;
        get dragging(): boolean;
        get useCache(): boolean;
        get particleManager(): $ParticleManager;
        get clipBlock(): $ClipContext$Block;
        get dummyWorld(): $TrackedDummyWorld;
        set orthoRange(value: number);
        get rotationYaw(): number;
        get autoReleased(): boolean;
        get lastHoverItem(): $ItemStack;
        get rotationPitch(): number;
        get clipFluid(): $ClipContext$Fluid;
    }
    export class $ScrollerView$ScrollerViewStyle extends $Style {
        mode(): $ScrollerMode;
        mode(arg0: $ScrollerMode_): $ScrollerView$ScrollerViewStyle;
        static init(): void;
        adaptiveWidth(): boolean;
        adaptiveWidth(arg0: boolean): $ScrollerView$ScrollerViewStyle;
        adaptiveHeight(): boolean;
        adaptiveHeight(arg0: boolean): $ScrollerView$ScrollerViewStyle;
        horizontalScrollDisplay(): $ScrollDisplay;
        horizontalScrollDisplay(arg0: $ScrollDisplay_): $ScrollerView$ScrollerViewStyle;
        verticalScrollDisplay(): $ScrollDisplay;
        verticalScrollDisplay(arg0: $ScrollDisplay_): $ScrollerView$ScrollerViewStyle;
        scrollerViewMargin(): number;
        minScrollPixel(): number;
        minScrollPixel(arg0: number): $ScrollerView$ScrollerViewStyle;
        scrollerViewStyle(arg0: number): $ScrollerView$ScrollerViewStyle;
        maxScrollPixel(arg0: number): $ScrollerView$ScrollerViewStyle;
        maxScrollPixel(): number;
        holder: $UIElement;
        constructor(arg0: $ScrollerView);
    }
    export class $TextArea$TextAreaStyle extends $Style {
        static init(): void;
        horizontalScrollDisplay(): $ScrollDisplay;
        horizontalScrollDisplay(arg0: $ScrollDisplay_): $TextArea$TextAreaStyle;
        verticalScrollDisplay(): $ScrollDisplay;
        verticalScrollDisplay(arg0: $ScrollDisplay_): $TextArea$TextAreaStyle;
        fontSize(arg0: number): $TextArea$TextAreaStyle;
        fontSize(): number;
        font(): $ResourceLocation;
        font(arg0: $ResourceLocation_): $TextArea$TextAreaStyle;
        errorColor(arg0: number): $TextArea$TextAreaStyle;
        errorColor(): number;
        textShadow(arg0: boolean): $TextArea$TextAreaStyle;
        textShadow(): boolean;
        placeholder(arg0: $Component_): $TextArea$TextAreaStyle;
        placeholder(): $Component;
        lineSpacing(): number;
        lineSpacing(arg0: number): $TextArea$TextAreaStyle;
        cursorColor(arg0: number): $TextArea$TextAreaStyle;
        cursorColor(): number;
        focusOverlay(): $IGuiTexture;
        focusOverlay(arg0: $IGuiTexture_): $TextArea$TextAreaStyle;
        scrollerViewMargin(): number;
        textColor(): number;
        textColor(arg0: number): $TextArea$TextAreaStyle;
        viewMode(): $ScrollerMode;
        viewMode(arg0: $ScrollerMode_): $TextArea$TextAreaStyle;
        scrollerViewStyle(arg0: number): $TextArea$TextAreaStyle;
        holder: $UIElement;
        constructor(arg0: $TextArea);
    }
    export class $TextField$Mode extends $Enum<$TextField$Mode> {
        static values(): $TextField$Mode[];
        static valueOf(arg0: string): $TextField$Mode;
        getNumberType(): $ConfigNumber$Type;
        isNumber(): boolean;
        static NUMBER_FLOAT: $TextField$Mode;
        static RESOURCE_LOCATION: $TextField$Mode;
        static NUMBER_INT: $TextField$Mode;
        static NUMBER_BYTE: $TextField$Mode;
        static INTERNAL: $TextField$Mode;
        static COMPOUND_TAG: $TextField$Mode;
        static STRING: $TextField$Mode;
        static NUMBER_DOUBLE: $TextField$Mode;
        static NUMBER_SHORT: $TextField$Mode;
        static NUMBER_LONG: $TextField$Mode;
        get numberType(): $ConfigNumber$Type;
        get number(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TextField$Mode}.
     */
    export type $TextField$Mode_ = "internal" | "string" | "compound_tag" | "resource_location" | "number_long" | "number_int" | "number_float" | "number_double" | "number_short" | "number_byte";
    export class $BindableValue<T> extends $BindableUIElement<T> {
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        constructor(arg0: T);
    }
    export class $TextElement extends $UIElement {
        textStyle(arg0: $Consumer_<$TextElement$TextStyle>): $TextElement;
        getText(): $Component;
        setText(arg0: string, arg1: boolean): $TextElement;
        getTextStyle(): $TextElement$TextStyle;
        getFont(): $Font;
        setText(arg0: $Component_): $TextElement;
        recompute(): void;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get font(): $Font;
    }
    export class $UITemplateElement extends $UIElement {
        getPath(): $IResourcePath;
        setTemplate(arg0: $IResourcePath): $UITemplateElement;
        getTemplate(): $UITemplate;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        constructor(arg0: $IResourcePath);
        get path(): $IResourcePath;
    }
    export class $Switch extends $BindableUIElement<boolean> {
        getValue(): boolean;
        isOn(): boolean;
        setValue(arg0: boolean, arg1: boolean): $Switch;
        setOnSwitchChanged(arg0: $BooleanConsumer_): $Switch;
        switchStyle(arg0: $Consumer_<$Switch$SwitchStyle>): $Switch;
        getSwitchStyle(): $Switch$SwitchStyle;
        setOn(arg0: boolean): $Switch;
        setOn(arg0: boolean, arg1: boolean): $Switch;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        placeholder: $UIElement;
        markIcon: $UIElement;
        constructor();
        set onSwitchChanged(value: $BooleanConsumer_);
    }
    export class $SplitView$Vertical extends $SplitView {
        bottom(arg0: $UIElement): $SplitView$Vertical;
        top(arg0: $UIElement): $SplitView$Vertical;
        setPercentage(arg0: number): $SplitView$Vertical;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        set percentage(value: number);
    }
    export class $VirtualScrollerView$VirtualScrollerViewStyle extends $Style {
        static init(): void;
        overscanPixels(): number;
        overscanPixels(arg0: number): $VirtualScrollerView$VirtualScrollerViewStyle;
        itemHeightMode(arg0: $VirtualItemHeightMode_): $VirtualScrollerView$VirtualScrollerViewStyle;
        itemHeightMode(): $VirtualItemHeightMode;
        estimatedItemHeight(arg0: number): $VirtualScrollerView$VirtualScrollerViewStyle;
        estimatedItemHeight(): number;
        holder: $UIElement;
    }
    export class $TextElement$TextStyle extends $Style {
        static init(): void;
        textWrap(): $TextWrap;
        textWrap(arg0: $TextWrap_): $TextElement$TextStyle;
        textAlignHorizontal(arg0: $Horizontal_): $TextElement$TextStyle;
        textAlignHorizontal(): $Horizontal;
        textAlignVertical(): $Vertical;
        textAlignVertical(arg0: $Vertical_): $TextElement$TextStyle;
        adaptiveWidth(): boolean;
        adaptiveWidth(arg0: boolean): $TextElement$TextStyle;
        adaptiveHeight(arg0: boolean): $TextElement$TextStyle;
        adaptiveHeight(): boolean;
        fontSize(): number;
        fontSize(arg0: number): $TextElement$TextStyle;
        font(arg0: $ResourceLocation_): $TextElement$TextStyle;
        font(): $ResourceLocation;
        textShadow(arg0: boolean): $TextElement$TextStyle;
        textShadow(): boolean;
        lineSpacing(arg0: number): $TextElement$TextStyle;
        lineSpacing(): number;
        textColor(): number;
        textColor(arg0: number): $TextElement$TextStyle;
        rollSpeed(): number;
        rollSpeed(arg0: number): $TextElement$TextStyle;
        holder: $UIElement;
        constructor(arg0: $TextElement);
    }
    export class $Toggle extends $BindableUIElement<boolean> {
        getValue(): boolean;
        isOn(): boolean;
        setValue(arg0: boolean, arg1: boolean): $Toggle;
        setText(arg0: string, arg1: boolean): $Toggle;
        setText(arg0: $Component_): $Toggle;
        getToggleStyle(): $Toggle$ToggleStyle;
        toggleStyle(arg0: $Consumer_<$Toggle$ToggleStyle>): $Toggle;
        toggleLabel(arg0: $Consumer_<$Label>): $Toggle;
        setOnToggleChanged(arg0: $BooleanConsumer_): $Toggle;
        toggleButton(arg0: $Consumer_<$Button>): $Toggle;
        getToggleGroup(): $Toggle$ToggleGroup;
        setToggleGroup(arg0: $Toggle$ToggleGroup): $Toggle;
        noText(): $Toggle;
        setOn(arg0: boolean, arg1: boolean): $Toggle;
        setOn(arg0: boolean): $Toggle;
        markIcon(arg0: $Consumer_<$UIElement>): $Toggle;
        enableText(): $Toggle;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        set onToggleChanged(value: $BooleanConsumer_);
    }
    export class $Toggle$ToggleGroup implements $IPersistedSerializable, $IConfigurable {
        setAllowEmpty(arg0: boolean): $Toggle$ToggleGroup;
        getCurrentToggle(): $Toggle;
        getToggles(): $List<$Toggle>;
        writeToBuff(arg0: $ByteBuf): void;
        afterSerialize(): void;
        beforeDeserialize(): void;
        afterDeserialize(): void;
        beforeSerialize(): void;
        readFromBuff(arg0: $ByteBuf): void;
        deserializeAdditionalNBT(arg0: $Tag_, arg1: $HolderLookup$Provider): void;
        serializeAdditionalNBT(arg0: $HolderLookup$Provider): $Tag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        getConfigurableName(): string;
        createDirectConfigurator(): $Configurator;
        createHistoryRecorder(): $IConfigurableHistory;
        constructor();
        set allowEmpty(value: boolean);
        get currentToggle(): $Toggle;
        get toggles(): $List<$Toggle>;
        get configurableName(): string;
    }
    export class $StructuredTagEditor$TagKind extends $Enum<$StructuredTagEditor$TagKind> {
        static values(): $StructuredTagEditor$TagKind[];
        static valueOf(arg0: string): $StructuredTagEditor$TagKind;
        static FLOAT: $StructuredTagEditor$TagKind;
        static BYTE_ARRAY: $StructuredTagEditor$TagKind;
        displayName: string;
        static COMPOUND: $StructuredTagEditor$TagKind;
        static INT_ARRAY: $StructuredTagEditor$TagKind;
        static INT: $StructuredTagEditor$TagKind;
        static LONG_ARRAY: $StructuredTagEditor$TagKind;
        static BOOLEAN: $StructuredTagEditor$TagKind;
        static SHORT: $StructuredTagEditor$TagKind;
        static BYTE: $StructuredTagEditor$TagKind;
        static STRING: $StructuredTagEditor$TagKind;
        static END: $StructuredTagEditor$TagKind;
        static DOUBLE: $StructuredTagEditor$TagKind;
        static LIST: $StructuredTagEditor$TagKind;
        static LONG: $StructuredTagEditor$TagKind;
    }
    /**
     * Values that may be interpreted as {@link $StructuredTagEditor$TagKind}.
     */
    export type $StructuredTagEditor$TagKind_ = "end" | "byte" | "short" | "int" | "long" | "float" | "double" | "string" | "list" | "compound" | "byte_array" | "int_array" | "long_array" | "boolean";
    export class $SplitView extends $UIElement {
        first(arg0: $UIElement): $SplitView;
        second(arg0: $UIElement): $SplitView;
        setPercentage(arg0: number): $SplitView;
        getBorderSize(): number;
        getMaxPercentage(): number;
        getMinPercentage(): number;
        getPercentage(): number;
        setMaxPercentage(arg0: number): $SplitView;
        setBorderSize(arg0: number): $SplitView;
        setMinPercentage(arg0: number): $SplitView;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
    }
    export class $Menu$MenuStyle extends $Style {
        arrowIcon(arg0: $IGuiTexture_): $Menu$MenuStyle;
        arrowIcon(): $IGuiTexture;
        nodeHoverTexture(): $IGuiTexture;
        nodeHoverTexture(arg0: $IGuiTexture_): $Menu$MenuStyle;
        leafTexture(arg0: $IGuiTexture_): $Menu$MenuStyle;
        leafTexture(): $IGuiTexture;
        leafHoverTexture(arg0: $IGuiTexture_): $Menu$MenuStyle;
        leafHoverTexture(): $IGuiTexture;
        nodeTexture(arg0: $IGuiTexture_): $Menu$MenuStyle;
        nodeTexture(): $IGuiTexture;
        holder: $UIElement;
        constructor(arg0: $Menu<any, any>);
    }
    export class $ProgressBar extends $UIElement implements $IBindable<number>, $IDataConsumer<number> {
        getValue(): number;
        setValue(arg0: number): $ProgressBar;
        label(arg0: $Consumer_<$Label>): $ProgressBar;
        getMinValue(): number;
        getMaxValue(): number;
        getNormalizedValue(): number;
        getNormalizedValue(arg0: number): number;
        bar(arg0: $Consumer_<$UIElement>): $ProgressBar;
        setMinValue(arg0: number): $ProgressBar;
        setProgress(arg0: number): $ProgressBar;
        setRange(arg0: number, arg1: number): $ProgressBar;
        getBoundDataSources(): $Collection<$IDataProvider<number>>;
        barContainer(arg0: $Consumer_<$UIElement>): $ProgressBar;
        progressBarStyle(arg0: $Consumer_<$ProgressBar$ProgressBarStyle>): $ProgressBar;
        setMaxValue(arg0: number): $ProgressBar;
        unbindDataSource(arg0: $IDataProvider<number>): $ProgressBar;
        getProgressBarStyle(): $ProgressBar$ProgressBarStyle;
        bind(arg0: $IBinding<number>): $UIElement;
        unbind(arg0: $IBinding<number>): $UIElement;
        bindDataSource(arg0: $IDataProvider<number>): $UIElement;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        barBackground: $UIElement;
        constructor();
        set progress(value: number);
        get boundDataSources(): $Collection<$IDataProvider<number>>;
    }
    export class $TreeList$ReorderRequest<N> extends $Record {
        mode(): $TreeList$DropMode;
        target(): N;
        dragged(): $Set<N>;
        constructor(dragged: $Set_<N>, target: N, mode: $TreeList$DropMode_);
    }
    /**
     * Values that may be interpreted as {@link $TreeList$ReorderRequest}.
     */
    export type $TreeList$ReorderRequest_<N> = { dragged?: $Set_<any>, mode?: $TreeList$DropMode_, target?: any,  } | [dragged?: $Set_<any>, mode?: $TreeList$DropMode_, target?: any, ];
    export class $Selector<T> extends $BindableUIElement<T> {
        isOpen(): boolean;
        setValue(arg0: T, arg1: boolean): $Selector<T>;
        hide(): void;
        setCandidateUIProvider(arg0: $UIElementProvider_<T>): $Selector<T>;
        getCandidates(): $List<T>;
        setOnValueChanged(arg0: $Consumer_<T>): $Selector<T>;
        setSelected(arg0: T): $Selector<T>;
        setSelected(arg0: T, arg1: boolean): $Selector<T>;
        show(): void;
        setCandidates(arg0: $List_<T>): $Selector<T>;
        getSelectorStyle(): $Selector$SelectorStyle;
        selectorStyle(arg0: $Consumer_<$Selector$SelectorStyle>): $Selector<T>;
        preview: $UIElement;
        dialog: $UIElement;
        buttonIcon: $UIElement;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        listView: $UIElement;
        display: $UIElement;
        scrollerView: $ScrollerView;
        constructor();
        get open(): boolean;
        set candidateUIProvider(value: $UIElementProvider_<T>);
        set onValueChanged(value: $Consumer_<T>);
    }
    export class $Inspector extends $UIElement {
        clear(): void;
        inspect(arg0: $IConfigurable): $ConfiguratorGroup;
        inspect(arg0: $IConfigurable, arg1: $Consumer_<$Configurator>): $ConfiguratorGroup;
        inspect<T extends $IConfigurable>(arg0: T, arg1: $Consumer_<$Configurator>, arg2: $Runnable_, arg3: $Runnable_): $ConfiguratorGroup;
        inspect(arg0: $IConfigurable, arg1: $Consumer_<$Configurator>, arg2: $Runnable_): $ConfiguratorGroup;
        getHistoryStack(): $IHistoryStack;
        setHistoryStack(arg0: $IHistoryStack): $Inspector;
        getInspectedConfigurable(): $IConfigurable;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        scrollerView: $ScrollerView;
        constructor();
        get inspectedConfigurable(): $IConfigurable;
    }
    export class $ColorSelector extends $BindableUIElement<number> {
        getValue(): number;
        setValue(arg0: number, arg1: boolean): $ColorSelector;
        setColor(arg0: number, arg1: boolean): $ColorSelector;
        setColor(arg0: number): $ColorSelector;
        getColor(): number;
        setOnColorChangeListener(arg0: $IntConsumer_): $ColorSelector;
        hexConfigurator: $StringConfigurator;
        colorSlider: $UIElement;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        pickerContainer: $UIElement;
        hsbButton: $Button;
        textContainer: $UIElement;
        colorPreview: $UIElement;
        alphaSlider: $UIElement;
        constructor();
        set onColorChangeListener(value: $IntConsumer_);
    }
}
