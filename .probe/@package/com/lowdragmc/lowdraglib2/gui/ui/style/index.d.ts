import { $TransitionAnimation, $Transition_, $Transition } from "@package/com/lowdragmc/lowdraglib2/gui/ui/style/animation";
import { $Codec } from "@package/com/mojang/serialization";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $IGuiTexture, $IGuiTexture_ } from "@package/com/lowdragmc/lowdraglib2/gui/texture";
import { $ResourceManager, $ResourceManagerReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $Pattern } from "@package/java/util/regex";
import { $List, $Map_, $List_, $Collection, $Map } from "@package/java/util";
import { $Configurator } from "@package/com/lowdragmc/lowdraglib2/configurator/ui";
import { $Tooltips_, $Tooltips, $Transform2D, $GridTemplate_, $GridTemplateAreas_, $Grid_, $GridAuto_ } from "@package/com/lowdragmc/lowdraglib2/gui/ui/data";
import { $Supplier_, $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $YogaFlexDirection_, $YogaJustify_, $YogaDirection_, $YogaOverflow, $YogaGutter_, $YogaPositionType_, $YogaAlign_, $YogaEdge_, $YogaOverflow_, $YogaWrap_, $YogaDisplay_ } from "@package/org/appliedenergistics/yoga";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ModularUI, $Style, $UIElement } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $Enum, $Record, $Class } from "@package/java/lang";
import { $AlignContent, $TaffyPosition, $FlexWrap_, $AlignItems, $GridAutoFlow_, $AlignItems_, $TaffyDimension, $FlexDirection, $TaffyDirection } from "@package/dev/vfyjxf/taffy/style";
import { $StyleLength, $StyleSizeLength } from "@package/org/appliedenergistics/yoga/style";
export * as animation from "@package/com/lowdragmc/lowdraglib2/gui/ui/style/animation";

declare module "@package/com/lowdragmc/lowdraglib2/gui/ui/style" {
    export class $HierarchicalStyleMatcher$SelectorGroup extends $Record {
        styleMatcher(): $StyleMatcher;
        isChildCombinator(): boolean;
        constructor(styleMatcher: $StyleMatcher_, isChildCombinator: boolean);
        get childCombinator(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $HierarchicalStyleMatcher$SelectorGroup}.
     */
    export type $HierarchicalStyleMatcher$SelectorGroup_ = { styleMatcher?: $StyleMatcher_, isChildCombinator?: boolean,  } | [styleMatcher?: $StyleMatcher_, isChildCombinator?: boolean, ];
    export class $IValueInterpolator<T> {
        static binary<V>(): $IValueInterpolator<V>;
        static snapToEnd<V>(): $IValueInterpolator<V>;
        /**
         * @deprecated
         */
        static alwaysInterpolate<V>(): $IValueInterpolator<V>;
        static neverInterpolate<V>(): $IValueInterpolator<V>;
        static BINARY: $IValueInterpolator<any>;
        static SNAP_TO_END: $IValueInterpolator<any>;
        /**
         * @deprecated
         */
        static ALWAYS_INTERPOLATE: $IValueInterpolator<any>;
        static NEVER_INTERPOLATE: $IValueInterpolator<any>;
    }
    export interface $IValueInterpolator<T> {
        interpolate(arg0: T, arg1: T, arg2: number): T;
    }
    /**
     * Values that may be interpreted as {@link $IValueInterpolator}.
     */
    export type $IValueInterpolator_<T> = ((arg0: T, arg1: T, arg2: number) => T);
    export class $Stylesheet {
        getName(): string;
        clear(): void;
        merge(arg0: $Stylesheet): void;
        setName(arg0: string): void;
        static parse(arg0: string): $Stylesheet;
        static parseStyleValues(arg0: string): $Map<$Property<never>, $StyleValue<never>>;
        addRule(arg0: $StyleRule): void;
        calculateValues(arg0: $UIElement): $List<$StyleRule>;
        removeRule(arg0: $StyleRule): void;
        getRawLss(): string;
        static DECL: $Pattern;
        static RULE: $Pattern;
        rules: $List<$StyleRule>;
        static EMPTY: $Stylesheet;
        constructor(arg0: $List_<$StyleRule>);
        get rawLss(): string;
    }
    export class $StyleRule {
        getProperty(arg0: $Property<never>): $StyleValue<never>;
        matches(arg0: $UIElement): boolean;
        getSpecificity(): number;
        sourceOrder: number;
        matcher: $HierarchicalStyleMatcher;
        properties: $Map<$Property<never>, $StyleValue<never>>;
        constructor(arg0: $HierarchicalStyleMatcher, arg1: $Map_<$Property<never>, $StyleValue<never>>);
        get specificity(): number;
    }
    export class $StylesheetManager implements $ResourceManagerReloadListener {
        getStylesheetSafe(arg0: $ResourceLocation_): $Stylesheet;
        getStylesheet(arg0: $ResourceLocation_): $Stylesheet;
        onResourceManagerReload(arg0: $ResourceManager): void;
        unregisterEngine(arg0: $StyleEngine): void;
        registerEngine(arg0: $StyleEngine): void;
        hasStylesheet(arg0: $ResourceLocation_): boolean;
        unregisterBuiltinStylesheet(arg0: $ResourceLocation_): void;
        getMergedStylesheetsOrElse(arg0: string, arg1: $Stylesheet): $Stylesheet;
        registerBuiltinStylesheet(arg0: $ResourceLocation_, arg1: $Stylesheet): void;
        getAllBuiltinStylesheets(): $Collection<$ResourceLocation>;
        getMergedStylesheetsSafe(arg0: string): $Stylesheet;
        getMergedStylesheets(arg0: string): $Stylesheet;
        getAllPackStylesheets(): $Collection<$ResourceLocation>;
        getStylesheetOrElse(arg0: $ResourceLocation_, arg1: $Stylesheet): $Stylesheet;
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
        getName(): string;
        static PATH: string;
        static MODERN: $ResourceLocation;
        static GDP: $ResourceLocation;
        static ORE: $ResourceLocation;
        static MC: $ResourceLocation;
        static ORE_MERGED: $ResourceLocation;
        static INSTANCE: $StylesheetManager;
        static GDP_MERGED: $ResourceLocation;
        static MODERN_MERGED: $ResourceLocation;
        static MC_MERGED: $ResourceLocation;
        get allBuiltinStylesheets(): $Collection<$ResourceLocation>;
        get allPackStylesheets(): $Collection<$ResourceLocation>;
        get name(): string;
    }
    export class $StyleMatcher extends $Record {
        matches(arg0: $UIElement): boolean;
        static create(arg0: $List_<$StyleSelector_>): $StyleMatcher;
        static create(arg0: $StyleSelector_[]): $StyleMatcher;
        selector(): $StyleSelector[];
        weight(): number;
        constructor(selector: $StyleSelector_[], weight: number);
    }
    /**
     * Values that may be interpreted as {@link $StyleMatcher}.
     */
    export type $StyleMatcher_ = { selector?: $StyleSelector_[], weight?: number,  } | [selector?: $StyleSelector_[], weight?: number, ];
    export class $StyleOrigin extends $Enum<$StyleOrigin> {
        static values(): $StyleOrigin[];
        static valueOf(arg0: string): $StyleOrigin;
        static STYLESHEET: $StyleOrigin;
        static ANIMATION: $StyleOrigin;
        static IMPORTANT: $StyleOrigin;
        static INLINE: $StyleOrigin;
        priority: number;
        static DEFAULT: $StyleOrigin;
    }
    /**
     * Values that may be interpreted as {@link $StyleOrigin}.
     */
    export type $StyleOrigin_ = "default" | "stylesheet" | "inline" | "animation" | "important";
    export class $StyleValue<T> {
        compute(): T;
        rawValue: string;
        constructor(arg0: string);
    }
    export class $StyleSelector extends $Record {
        scope(): $SelectorScope;
        type(): $SelectorType;
        matches(arg0: $UIElement): boolean;
        identity(): $Either<string, $HierarchicalStyleMatcher>;
        static parse(arg0: string): $StyleSelector;
        weight(): number;
        static parseNotSelector(arg0: string): $StyleSelector;
        constructor(type: $SelectorType, identity: $Either<string, $HierarchicalStyleMatcher>, scope: $SelectorScope);
    }
    /**
     * Values that may be interpreted as {@link $StyleSelector}.
     */
    export type $StyleSelector_ = { scope?: $SelectorScope, identity?: $Either<string, $HierarchicalStyleMatcher>, type?: $SelectorType,  } | [scope?: $SelectorScope, identity?: $Either<string, $HierarchicalStyleMatcher>, type?: $SelectorType, ];
    export class $StyleChangeListener<T> {
    }
    export interface $StyleChangeListener<T> {
        onComputedChange(arg0: $UIElement, arg1: $Property<T>, arg2: T, arg3: T): void;
    }
    /**
     * Values that may be interpreted as {@link $StyleChangeListener}.
     */
    export type $StyleChangeListener_<T> = ((arg0: $UIElement, arg1: $Property<T>, arg2: T, arg3: T) => void);
    export class $HierarchicalStyleMatcher {
        matches(arg0: $UIElement): boolean;
        static parse(arg0: string): $HierarchicalStyleMatcher;
        getSpecificity(): number;
        getSelectorGroups(): $List<$HierarchicalStyleMatcher$SelectorGroup>;
        constructor(arg0: $List_<$HierarchicalStyleMatcher$SelectorGroup_>);
        get specificity(): number;
        get selectorGroups(): $List<$HierarchicalStyleMatcher$SelectorGroup>;
    }
    export class $StyleBag {
        compute(arg0: number): void;
        isDirty(): boolean;
        moveInlineAsDefault(): void;
        replaceOrPutCandidate<T>(arg0: $Property<T>, arg1: $StyleSlot_<T>): void;
        removeCandidates(arg0: $Property<never>, arg1: $Predicate_<$StyleSlot<never>>): void;
        removeCandidates(arg0: $Predicate_<$StyleSlot<never>>): void;
        putCandidates(arg0: $Map_<$Property<never>, $StyleValue<never>>, arg1: $StyleOrigin_, arg2: number, arg3: number): void;
        markDirty(): void;
        getComputed<T>(arg0: $Property<T>): T;
        computeCandidate<T>(arg0: $Property<T>): T;
        onTransitionUpdate<T>(arg0: $TransitionAnimation<T>, arg1: T, arg2: T): void;
        onAnimationUpdate<T>(arg0: $StyleOrigin_, arg1: $Property<T>, arg2: T): void;
        containsCandidate(arg0: $Property<never>, arg1: $Predicate_<$StyleSlot<never>>): boolean;
        putCandidate<T>(arg0: $Property<T>, arg1: $StyleSlot_<T>): void;
        clearCandidates(): void;
        replaceAnimationFinal<T>(arg0: $Property<T>, arg1: $Predicate_<$StyleSlot<never>>, arg2: $StyleSlot_<T>): void;
        computeCandidateSlot<T>(arg0: $Property<T>): $StyleSlot<T>;
        onTransitionFinished<T>(arg0: $TransitionAnimation<T>): void;
        candidates: $Map<$Property<never>, $List<$StyleSlot<never>>>;
        element: $UIElement;
        constructor(arg0: $UIElement);
        get dirty(): boolean;
    }
    export class $ValueParser<T> {
    }
    export interface $ValueParser<T> {
        parse(arg0: string): $StyleValue<T>;
    }
    /**
     * Values that may be interpreted as {@link $ValueParser}.
     */
    export type $ValueParser_<T> = ((arg0: string) => $StyleValue<T>);
    export class $StyleEngine {
        remove(arg0: $StyleBag): void;
        enqueue(arg0: $StyleBag): void;
        dispose(): void;
        removeLocalStylesheet(arg0: $UIElement, arg1: $Stylesheet): void;
        addLocalStylesheet(arg0: $UIElement, arg1: $Stylesheet): void;
        scheduleReloadElementStyles(arg0: $UIElement): void;
        inQueue(arg0: $StyleBag): boolean;
        onElementUnregister(arg0: $UIElement): void;
        scheduleFullReload(): void;
        removeStylesheet(arg0: $Stylesheet): void;
        addStylesheet(arg0: $Stylesheet): void;
        onElementRegister(arg0: $UIElement): void;
        addStylesheets(arg0: $List_<$Stylesheet>): void;
        addStylesheets(...arg0: $Stylesheet[]): void;
        requireCalculate(): boolean;
        calculateStyle(): void;
        getElementStyleRules(): $Map<$UIElement, $Map<$Stylesheet, $List<$StyleRule>>>;
        clearAllStylesheets(): void;
        modularUI: $ModularUI;
        globalSheets: $List<$Stylesheet>;
        constructor(arg0: $ModularUI);
        get elementStyleRules(): $Map<$UIElement, $Map<$Stylesheet, $List<$StyleRule>>>;
    }
    export class $LayoutStyle extends $Style {
        /**
         * @deprecated
         */
        bottom(arg0: $StyleLength): $LayoutStyle;
        bottom(arg0: number): $LayoutStyle;
        top(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        top(arg0: $StyleLength): $LayoutStyle;
        /**
         * @deprecated
         */
        left(arg0: $StyleLength): $LayoutStyle;
        left(arg0: number): $LayoutStyle;
        right(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        right(arg0: $StyleLength): $LayoutStyle;
        width(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        width(arg0: $StyleSizeLength): $LayoutStyle;
        /**
         * @deprecated
         */
        minWidth(arg0: $StyleSizeLength): $LayoutStyle;
        minWidth(arg0: number): $LayoutStyle;
        maxWidth(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        maxWidth(arg0: $StyleSizeLength): $LayoutStyle;
        /**
         * @deprecated
         */
        paddingTop(arg0: $StyleLength): $LayoutStyle;
        paddingTop(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setOverflow(arg0: $YogaOverflow_): $LayoutStyle;
        setAspectRatio(arg0: number): $LayoutStyle;
        heightPercent(arg0: number): $LayoutStyle;
        widthPercent(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setPosition(arg0: $YogaEdge_, arg1: $StyleLength): $LayoutStyle;
        /**
         * @deprecated
         */
        setPosition(arg0: $YogaEdge_, arg1: number): $LayoutStyle;
        setMaxWidth(arg0: $TaffyDimension): $LayoutStyle;
        /**
         * @deprecated
         */
        setMaxWidth(arg0: $StyleSizeLength): $LayoutStyle;
        /**
         * @deprecated
         */
        setMaxWidth(arg0: number): $LayoutStyle;
        height(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        height(arg0: $StyleSizeLength): $LayoutStyle;
        getWidth(): $TaffyDimension;
        getAspectRatio(): number;
        /**
         * @deprecated
         */
        setHeight(arg0: $StyleSizeLength): $LayoutStyle;
        setHeight(arg0: $TaffyDimension): $LayoutStyle;
        /**
         * @deprecated
         */
        setHeight(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setWidth(arg0: $StyleSizeLength): $LayoutStyle;
        /**
         * @deprecated
         */
        setWidth(arg0: number): $LayoutStyle;
        setWidth(arg0: $TaffyDimension): $LayoutStyle;
        paddingAll(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        paddingAll(arg0: $StyleLength): $LayoutStyle;
        /**
         * @deprecated
         */
        setDisplay(arg0: $YogaDisplay_): $LayoutStyle;
        overflow(arg0: $YogaOverflow_): $LayoutStyle;
        marginTop(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        marginTop(arg0: $StyleLength): $LayoutStyle;
        marginRight(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        marginRight(arg0: $StyleLength): $LayoutStyle;
        /**
         * @deprecated
         */
        paddingRight(arg0: $StyleLength): $LayoutStyle;
        paddingRight(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        paddingLeft(arg0: $StyleLength): $LayoutStyle;
        paddingLeft(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setMargin(arg0: $YogaEdge_, arg1: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setMargin(arg0: $YogaEdge_, arg1: $StyleLength): $LayoutStyle;
        alignItems(arg0: $AlignItems_): $LayoutStyle;
        heightAuto(): $LayoutStyle;
        rightAuto(): $LayoutStyle;
        flexGrow(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setFlex(arg0: number): $LayoutStyle;
        topAuto(): $LayoutStyle;
        flexBasis(arg0: number): $LayoutStyle;
        widthAuto(): $LayoutStyle;
        bottomAuto(): $LayoutStyle;
        flexWrap(arg0: $FlexWrap_): $LayoutStyle;
        gapColumn(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        gapColumn(arg0: $StyleLength): $LayoutStyle;
        flexAuto(): $LayoutStyle;
        gridRow(arg0: string): $LayoutStyle;
        gridRow(arg0: $Grid_): $LayoutStyle;
        topPercent(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setGap(arg0: $YogaGutter_, arg1: $StyleLength): $LayoutStyle;
        /**
         * @deprecated
         */
        setGap(arg0: $YogaGutter_, arg1: number): $LayoutStyle;
        leftAuto(): $LayoutStyle;
        flexShrink(arg0: number): $LayoutStyle;
        gapRow(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        gapRow(arg0: $StyleLength): $LayoutStyle;
        gridColumn(arg0: $Grid_): $LayoutStyle;
        gridColumn(arg0: string): $LayoutStyle;
        /**
         * @deprecated
         */
        setWrap(arg0: $YogaWrap_): $LayoutStyle;
        /**
         * @deprecated
         */
        minHeight(arg0: $StyleSizeLength): $LayoutStyle;
        minHeight(arg0: number): $LayoutStyle;
        flex(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        marginLeft(arg0: $StyleLength): $LayoutStyle;
        marginLeft(arg0: number): $LayoutStyle;
        gapAll(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        gapAll(arg0: $StyleLength): $LayoutStyle;
        marginAll(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        marginAll(arg0: $StyleLength): $LayoutStyle;
        getHeight(): $TaffyDimension;
        /**
         * @deprecated
         */
        setDirection(arg0: $YogaDirection_): $LayoutStyle;
        /**
         * @deprecated
         */
        setMinWidth(arg0: number): $LayoutStyle;
        setMinWidth(arg0: $TaffyDimension): $LayoutStyle;
        /**
         * @deprecated
         */
        setMinWidth(arg0: $StyleSizeLength): $LayoutStyle;
        /**
         * @deprecated
         */
        setMinHeight(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setMinHeight(arg0: $StyleSizeLength): $LayoutStyle;
        setMinHeight(arg0: $TaffyDimension): $LayoutStyle;
        setMaxHeight(arg0: $TaffyDimension): $LayoutStyle;
        /**
         * @deprecated
         */
        setMaxHeight(arg0: $StyleSizeLength): $LayoutStyle;
        /**
         * @deprecated
         */
        setMaxHeight(arg0: number): $LayoutStyle;
        aspectRatio(arg0: number): $LayoutStyle;
        maxHeight(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        maxHeight(arg0: $StyleSizeLength): $LayoutStyle;
        /**
         * @deprecated
         */
        setMinWidthMaxContent(): $LayoutStyle;
        minHeightMaxContent(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMinHeightMaxContent(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMinWidthFitContent(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMaxHeightPercent(arg0: number): $LayoutStyle;
        paddingBottomPercent(arg0: number): $LayoutStyle;
        marginHorizontalPercent(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setMaxHeightMaxContent(): $LayoutStyle;
        /**
         * @deprecated
         */
        setFlexBasisFitContent(): $LayoutStyle;
        paddingVerticalPercent(arg0: number): $LayoutStyle;
        marginBottomPercent(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setMinHeightStretch(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMinHeightPercent(arg0: number): $LayoutStyle;
        maxHeightMaxContent(): $LayoutStyle;
        /**
         * @deprecated
         */
        setFlexBasisMaxContent(): $LayoutStyle;
        gridTemplateColumns(arg0: $GridTemplate_): $LayoutStyle;
        gridTemplateColumns(arg0: string): $LayoutStyle;
        /**
         * @deprecated
         */
        setMaxHeightStretch(): $LayoutStyle;
        maxHeightFitContent(): $LayoutStyle;
        flexBasisMaxContent(): $LayoutStyle;
        paddingHorizontalPercent(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setHeightFitContent(): $LayoutStyle;
        minHeightFitContent(): $LayoutStyle;
        marginHorizontalAuto(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMaxWidthMaxContent(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMaxWidthFitContent(): $LayoutStyle;
        marginVerticalPercent(arg0: number): $LayoutStyle;
        minHeightMinContent(): $LayoutStyle;
        /**
         * @deprecated
         */
        setHeightMaxContent(): $LayoutStyle;
        flexBasisFitContent(): $LayoutStyle;
        maxHeightMinContent(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMaxHeightFitContent(): $LayoutStyle;
        /**
         * @deprecated
         */
        setFlexBasisStretch(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMinHeightFitContent(): $LayoutStyle;
        /**
         * @deprecated
         */
        setFlexBasisPercent(arg0: number): $LayoutStyle;
        flexBasisMinContent(): $LayoutStyle;
        paddingRightPercent(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setPadding(arg0: $YogaEdge_, arg1: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setPadding(arg0: $YogaEdge_, arg1: $StyleLength): $LayoutStyle;
        getMaxWidth(): $TaffyDimension;
        getMaxHeight(): $TaffyDimension;
        minWidthMinContent(): $LayoutStyle;
        maxWidthMaxContent(): $LayoutStyle;
        heightMinContent(): $LayoutStyle;
        heightFitContent(): $LayoutStyle;
        minWidthFitContent(): $LayoutStyle;
        widthFitContent(): $LayoutStyle;
        /**
         * @deprecated
         */
        setHeightStretch(): $LayoutStyle;
        widthMaxContent(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMaxWidthAuto(): $LayoutStyle;
        setFlexShrinkAuto(): $LayoutStyle;
        maxWidthMinContent(): $LayoutStyle;
        minWidthMaxContent(): $LayoutStyle;
        setAspectRatioAuto(): $LayoutStyle;
        /**
         * @deprecated
         */
        setWidthMaxContent(): $LayoutStyle;
        setFlexGrow(arg0: number): $LayoutStyle;
        widthMinContent(): $LayoutStyle;
        widthStretch(): $LayoutStyle;
        minWidthPercent(arg0: number): $LayoutStyle;
        minWidthAuto(): $LayoutStyle;
        /**
         * @deprecated
         */
        setWidthFitContent(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMinWidthStretch(): $LayoutStyle;
        minWidthStretch(): $LayoutStyle;
        maxWidthAuto(): $LayoutStyle;
        maxWidthStretch(): $LayoutStyle;
        heightStretch(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMinWidthAuto(): $LayoutStyle;
        /**
         * @deprecated
         */
        setHeightAuto(): $LayoutStyle;
        setFlexGrowAuto(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMaxWidthStretch(): $LayoutStyle;
        maxWidthPercent(arg0: number): $LayoutStyle;
        minHeightPercent(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setMinHeightAuto(): $LayoutStyle;
        /**
         * @deprecated
         */
        setWidthPercent(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setWidthStretch(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMinWidthPercent(arg0: number): $LayoutStyle;
        setFlexShrink(arg0: number): $LayoutStyle;
        maxWidthFitContent(): $LayoutStyle;
        /**
         * @deprecated
         */
        setHeightPercent(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setWidthAuto(): $LayoutStyle;
        heightMaxContent(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMaxWidthPercent(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setAlignContent(arg0: $YogaAlign_): $LayoutStyle;
        marginTopPercent(arg0: number): $LayoutStyle;
        marginHorizontal(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        marginHorizontal(arg0: $StyleLength): $LayoutStyle;
        marginRightAuto(): $LayoutStyle;
        /**
         * @deprecated
         */
        paddingHorizontal(arg0: $StyleLength): $LayoutStyle;
        paddingHorizontal(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setPositionAuto(arg0: $YogaEdge_): $LayoutStyle;
        /**
         * @deprecated
         */
        setAlignSelf(arg0: $YogaAlign_): $LayoutStyle;
        /**
         * @deprecated
         */
        setFlexAuto(): $LayoutStyle;
        flexBasisAuto(): $LayoutStyle;
        paddingVertical(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        paddingVertical(arg0: $StyleLength): $LayoutStyle;
        maxHeightStretch(): $LayoutStyle;
        /**
         * @deprecated
         */
        paddingBottom(arg0: $StyleLength): $LayoutStyle;
        paddingBottom(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setFlexBasis(arg0: number): $LayoutStyle;
        flexGrowAuto(): $LayoutStyle;
        flexShrinkAuto(): $LayoutStyle;
        marginAllAuto(): $LayoutStyle;
        paddingTopPercent(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setJustifyContent(arg0: $YogaJustify_): $LayoutStyle;
        bottomPercent(arg0: number): $LayoutStyle;
        marginLeftAuto(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMarginPercent(arg0: $YogaEdge_, arg1: number): $LayoutStyle;
        justifyItems(arg0: $AlignItems_): $LayoutStyle;
        marginRightPercent(arg0: number): $LayoutStyle;
        paddingAllPercent(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setGapPercent(arg0: $YogaGutter_, arg1: number): $LayoutStyle;
        gapColumnPercent(arg0: number): $LayoutStyle;
        gapRowPercent(arg0: number): $LayoutStyle;
        paddingLeftPercent(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setPositionType(arg0: $YogaPositionType_): $LayoutStyle;
        rightPercent(arg0: number): $LayoutStyle;
        flexBasisPercent(arg0: number): $LayoutStyle;
        gridTemplateRows(arg0: string): $LayoutStyle;
        gridTemplateRows(arg0: $GridTemplate_): $LayoutStyle;
        justifySelf(arg0: $AlignItems_): $LayoutStyle;
        marginVertical(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        marginVertical(arg0: $StyleLength): $LayoutStyle;
        gridTemplateAreas(arg0: $GridTemplateAreas_): $LayoutStyle;
        gridTemplateAreas(arg0: string): $LayoutStyle;
        marginLeftPercent(arg0: number): $LayoutStyle;
        marginTopAuto(): $LayoutStyle;
        /**
         * @deprecated
         */
        setPaddingPercent(arg0: $YogaEdge_, arg1: number): $LayoutStyle;
        gridAutoRows(arg0: string): $LayoutStyle;
        gridAutoRows(arg0: $GridAuto_): $LayoutStyle;
        gridAutoColumns(arg0: $GridAuto_): $LayoutStyle;
        gridAutoColumns(arg0: string): $LayoutStyle;
        marginBottom(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        marginBottom(arg0: $StyleLength): $LayoutStyle;
        /**
         * @deprecated
         */
        setFlexBasisAuto(): $LayoutStyle;
        gapAllPercent(arg0: number): $LayoutStyle;
        maxHeightAuto(): $LayoutStyle;
        maxHeightPercent(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setFlexDirection(arg0: $YogaFlexDirection_): $LayoutStyle;
        marginVerticalAuto(): $LayoutStyle;
        aspectRatioAuto(): $LayoutStyle;
        /**
         * @deprecated
         */
        setAlignItems(arg0: $YogaAlign_): $LayoutStyle;
        gridAutoFlow(arg0: $GridAutoFlow_): $LayoutStyle;
        getMinWidth(): $TaffyDimension;
        marginBottomAuto(): $LayoutStyle;
        flexBasisStretch(): $LayoutStyle;
        minHeightStretch(): $LayoutStyle;
        getMinHeight(): $TaffyDimension;
        /**
         * @deprecated
         */
        setMaxHeightAuto(): $LayoutStyle;
        minHeightAuto(): $LayoutStyle;
        /**
         * @deprecated
         */
        setMarginAuto(arg0: $YogaEdge_): $LayoutStyle;
        marginAllPercent(arg0: number): $LayoutStyle;
        /**
         * @deprecated
         */
        setPositionPercent(arg0: $YogaEdge_, arg1: number): $LayoutStyle;
        leftPercent(arg0: number): $LayoutStyle;
        getFlexDirection(): $FlexDirection;
        getStyleDirection(): $TaffyDirection;
        getAlignItems(): $AlignItems;
        getJustifyContent(): $AlignContent;
        getJustifyItems(): $AlignItems;
        getFlexBasis(): $TaffyDimension;
        getOverflow(): $YogaOverflow;
        getAlignContent(): $AlignContent;
        getAlignSelf(): $AlignItems;
        getJustifySelf(): $AlignItems;
        getFlexGrow(): number;
        getFlexShrink(): number;
        getPositionType(): $TaffyPosition;
        holder: $UIElement;
        constructor(arg0: $UIElement);
        set display(value: $YogaDisplay_);
        set wrap(value: $YogaWrap_);
        set direction(value: $YogaDirection_);
        set positionAuto(value: $YogaEdge_);
        set marginAuto(value: $YogaEdge_);
        get styleDirection(): $TaffyDirection;
    }
    export class $BasicStyle extends $Style {
        static init(): void;
        color(arg0: number): $BasicStyle;
        color(): number;
        transition(arg0: $Transition_): $BasicStyle;
        transition(): $Transition;
        appendTooltips(...arg0: $Component_[]): $BasicStyle;
        overlay(arg0: $IGuiTexture_): $BasicStyle;
        transform2D(arg0: $Transform2D): $BasicStyle;
        transform2D(): $Transform2D;
        overflowVisible(arg0: boolean): $BasicStyle;
        overflowVisible(): boolean;
        overflowClip(): $IGuiTexture;
        overflowClip(arg0: $IGuiTexture_): $BasicStyle;
        background(arg0: $IGuiTexture_): $BasicStyle;
        opacity(): number;
        opacity(arg0: number): $BasicStyle;
        zIndex(arg0: number): $BasicStyle;
        zIndex(): number;
        tooltips(...arg0: $Component_[]): $BasicStyle;
        backgroundTexture(arg0: $IGuiTexture_): $BasicStyle;
        backgroundTexture(): $IGuiTexture;
        tooltips(): $Tooltips;
        tooltips(arg0: $Tooltips_): $BasicStyle;
        appendTooltipsString(...arg0: string[]): $BasicStyle;
        overlayTexture(arg0: $IGuiTexture_): $BasicStyle;
        overlayTexture(): $IGuiTexture;
        holder: $UIElement;
        constructor(arg0: $UIElement);
    }
    export class $StyleSlot<T> extends $Record {
        value(): T;
        compareTo(arg0: $StyleSlot_<never>): number;
        static compare(arg0: $StyleSlot_<never>, arg1: $StyleSlot_<never>): number;
        static of<T>(arg0: $Property<T>, arg1: $StyleOrigin_, arg2: number, arg3: number, arg4: T): $StyleSlot<T>;
        property(): $Property<T>;
        origin(): $StyleOrigin;
        specificity(): number;
        typeEquals(arg0: $StyleSlot_<never>): boolean;
        sourceOrder(): number;
        constructor(property: $Property<T>, origin: $StyleOrigin_, specificity: number, sourceOrder: number, value: T);
    }
    /**
     * Values that may be interpreted as {@link $StyleSlot}.
     */
    export type $StyleSlot_<T> = { sourceOrder?: number, specificity?: number, property?: $Property<any>, value?: any, origin?: $StyleOrigin_,  } | [sourceOrder?: number, specificity?: number, property?: $Property<any>, value?: any, origin?: $StyleOrigin_, ];
    export class $Property<VALUE> {
        getValue(arg0: $Map_<string, $StyleValue<never>>): (VALUE) | undefined;
        static of<T>(arg0: string, arg1: $Codec<T>, arg2: T, arg3: $ValueParser_<T>): $Property<T>;
        static of<T>(arg0: string, arg1: $Class<T>, arg2: $Codec<T>, arg3: T, arg4: $ValueParser_<T>): $Property<T>;
        getConfigName(): string;
        notifyListeners(arg0: $UIElement, arg1: VALUE, arg2: VALUE): void;
        addListener(arg0: $StyleChangeListener_<VALUE>): $Property<VALUE>;
        getInterpolator(): $IValueInterpolator<VALUE>;
        createConfigurator(arg0: $Supplier_<VALUE>, arg1: $Consumer_<VALUE>, arg2: VALUE): $Configurator;
        getConfigTooltips(): $Component[];
        setInterpolator(arg0: $IValueInterpolator_<VALUE>): $Property<VALUE>;
        setAllowTransition(arg0: boolean): $Property<VALUE>;
        isAllowTransition(): boolean;
        setConfigName(arg0: string): $Property<VALUE>;
        setConfigTooltips(arg0: $Tooltips_): $Property<VALUE>;
        codec: $Codec<VALUE>;
        static CODEC: $Codec<$Property<never>>;
        name: string;
        id: number;
        type: $Class<VALUE>;
        valueParser: $ValueParser<VALUE>;
        initialValue: VALUE;
        constructor(arg0: string, arg1: $Class<VALUE>, arg2: $Codec<VALUE>, arg3: VALUE, arg4: $ValueParser_<VALUE>);
    }
}
