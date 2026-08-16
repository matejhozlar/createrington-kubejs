import { $File, $File_ } from "@package/java/io";
import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $Component } from "@package/net/minecraft/network/chat";
import { $IGuiTexture, $IGuiTexture_ } from "@package/com/lowdragmc/lowdraglib2/gui/texture";
import { $InspectorView, $HistoryView, $ResourceView } from "@package/com/lowdragmc/lowdraglib2/editor/ui/view";
import { $IProject } from "@package/com/lowdragmc/lowdraglib2/editor/project";
import { $TreeNode, $TreeBuilder$Menu } from "@package/com/lowdragmc/lowdraglib2/gui/util";
import { $List, $LinkedHashMap, $Map_, $List_, $Map } from "@package/java/util";
import { $EditorSettings } from "@package/com/lowdragmc/lowdraglib2/editor/settings";
import { $UIElementProvider_ } from "@package/com/lowdragmc/lowdraglib2/gui/ui/utils";
import { $Tab, $SplitView, $Button, $Menu, $TabView } from "@package/com/lowdragmc/lowdraglib2/gui/ui/elements";
import { $Supplier_, $Consumer_, $Supplier } from "@package/java/util/function";
import { $YogaEdge_ } from "@package/org/appliedenergistics/yoga";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Style, $UIElement } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $Layout } from "@package/dev/vfyjxf/taffy/tree";
import { $ViewMenu, $FileMenu } from "@package/com/lowdragmc/lowdraglib2/editor/ui/menu";
import { $Record, $Runnable_ } from "@package/java/lang";
export * as menu from "@package/com/lowdragmc/lowdraglib2/editor/ui/menu";
export * as view from "@package/com/lowdragmc/lowdraglib2/editor/ui/view";
export * as resource from "@package/com/lowdragmc/lowdraglib2/editor/ui/resource";

declare module "@package/com/lowdragmc/lowdraglib2/editor/ui" {
    export class $SplittableWindow$LayoutConfig extends $Record {
        first(): $SplittableWindow$LayoutConfig;
        second(): $SplittableWindow$LayoutConfig;
        serialize(): $CompoundTag;
        static deserialize(arg0: $CompoundTag_): $SplittableWindow$LayoutConfig;
        vertical(): boolean;
        anchorId(): string;
        percentage(): number;
        constructor(anchorId: string, vertical: boolean, percentage: number, first: $SplittableWindow$LayoutConfig_, second: $SplittableWindow$LayoutConfig_);
    }
    /**
     * Values that may be interpreted as {@link $SplittableWindow$LayoutConfig}.
     */
    export type $SplittableWindow$LayoutConfig_ = { anchorId?: string, vertical?: boolean, second?: $SplittableWindow$LayoutConfig_, first?: $SplittableWindow$LayoutConfig_, percentage?: number,  } | [anchorId?: string, vertical?: boolean, second?: $SplittableWindow$LayoutConfig_, first?: $SplittableWindow$LayoutConfig_, percentage?: number, ];
    export class $EditorLayout extends $Record {
        slots(): $List<$EditorLayout$SlotEntry>;
        layoutConfig(): $SplittableWindow$LayoutConfig;
        findSlotForView(arg0: string): $EditorLayout$SlotEntry;
        serialize(): $CompoundTag;
        static deserialize(arg0: $CompoundTag_): $EditorLayout;
        constructor(layoutConfig: $SplittableWindow$LayoutConfig_, slots: $List_<$EditorLayout$SlotEntry_>);
    }
    /**
     * Values that may be interpreted as {@link $EditorLayout}.
     */
    export type $EditorLayout_ = { layoutConfig?: $SplittableWindow$LayoutConfig_, slots?: $List_<$EditorLayout$SlotEntry_>,  } | [layoutConfig?: $SplittableWindow$LayoutConfig_, slots?: $List_<$EditorLayout$SlotEntry_>, ];
    export class $View extends $UIElement {
        getName(): string;
        setName(arg0: string): void;
        getViewContainer(): $ViewContainer;
        setCanRemove(arg0: boolean): void;
        getIcon(): $IGuiTexture;
        setIcon(arg0: $IGuiTexture_): void;
        createTab(): $Tab;
        isCanRemove(): boolean;
        setDynamicName(arg0: $Supplier_<$Component>): void;
        setOnRemove(arg0: $Runnable_): void;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor(arg0: string, arg1: $IGuiTexture_);
        constructor(arg0: string);
        constructor();
        get viewContainer(): $ViewContainer;
        set dynamicName(value: $Supplier_<$Component>);
        set onRemove(value: $Runnable_);
    }
    export class $ViewContainer extends $UIElement {
        expand(): void;
        isViewSelected(arg0: $View): boolean;
        getAllViews(): $List<$View>;
        getWindow(): $SplittableWindow;
        hasView(arg0: $View): boolean;
        addView(arg0: $View): $ViewContainer;
        selectView(arg0: $View): void;
        isEmptyWindow(): boolean;
        collapse(): void;
        isCollapse(): boolean;
        removeView(arg0: $View): void;
        addViews(...arg0: $View[]): $ViewContainer;
        addViewAt(arg0: $View, arg1: number): $ViewContainer;
        buttonIcon: $UIElement;
        static CODEC: $Codec<$UIElement>;
        collapseButton: $Button;
        static EMPTY_LAYOUT: $Layout;
        tabView: $TabView;
        constructor();
        get allViews(): $List<$View>;
        get window(): $SplittableWindow;
        get emptyWindow(): boolean;
    }
    export class $EditorWindow extends $UIElement {
        static open(arg0: $ResourceLocation_, arg1: $Supplier_<$Editor>): $EditorWindow;
        removeEditor(arg0: $Editor): void;
        closeWindow(): void;
        createNewEditor(arg0: $Supplier_<$Editor>): $Editor;
        static openDefault(arg0: $Supplier_<$Editor>): $EditorWindow;
        getEditors(): $LinkedHashMap<$Editor, $UIElement>;
        showEditor(arg0: $Editor): void;
        maximizeWindow(): void;
        hasMultipleEditors(): boolean;
        isMaximized(): boolean;
        retoreWindow(): void;
        minimizeWindow(): void;
        getCurrentEditor(): $Editor;
        editorButtonContainer: $UIElement;
        static CODEC: $Codec<$UIElement>;
        static DEFAULT_ID: $ResourceLocation;
        editorContainer: $UIElement;
        static EMPTY_LAYOUT: $Layout;
        window: $UIElement;
        windowID: $ResourceLocation;
        constructor(arg0: $ResourceLocation_, arg1: $Supplier_<$Editor>);
        constructor(arg0: $Supplier_<$Editor>);
        get editors(): $LinkedHashMap<$Editor, $UIElement>;
        get maximized(): boolean;
        get currentEditor(): $Editor;
    }
    export class $EditorLayout$SlotEntry extends $Record {
        path(): string;
        selectedViewName(): string;
        serialize(): $CompoundTag;
        static deserialize(arg0: $CompoundTag_): $EditorLayout$SlotEntry;
        viewNames(): $List<string>;
        constructor(path: string, viewNames: $List_<string>, selectedViewName: string);
    }
    /**
     * Values that may be interpreted as {@link $EditorLayout$SlotEntry}.
     */
    export type $EditorLayout$SlotEntry_ = { viewNames?: $List_<string>, selectedViewName?: string, path?: string,  } | [viewNames?: $List_<string>, selectedViewName?: string, path?: string, ];
    export class $Editor extends $UIElement {
        exit(): void;
        exit(arg0: $Runnable_): void;
        close(): void;
        getAllViews(): $List<$View>;
        getRootWindow(): $SplittableWindow;
        getLeftWindow(): $SplittableWindow;
        captureLayout(): $EditorLayout;
        saveAsProject(arg0: $Runnable_): void;
        saveAsProject(arg0: $File_, arg1: $Runnable_): void;
        getCurrentProject(): $IProject;
        getRightWindow(): $SplittableWindow;
        getCenterWindow(): $SplittableWindow;
        getBottomWindow(): $SplittableWindow;
        getHistoryView(): $HistoryView;
        getFileMenu(): $FileMenu;
        getInspectorView(): $InspectorView;
        getResourceView(): $ResourceView;
        getViewMenu(): $ViewMenu;
        askToSaveProject(arg0: $Runnable_): void;
        saveProject(arg0: $Runnable_): void;
        saveProject(arg0: $Runnable_, arg1: boolean): void;
        getEditorSettings(): $EditorSettings;
        getViewFallbacks(): $Map<$View, $Supplier<$ViewContainer>>;
        getSavedLayout(): $EditorLayout;
        loadProject(arg0: $IProject, arg1: $File_): void;
        static emptyEditor(): $Editor;
        applyLayout(arg0: $EditorLayout_): void;
        openSettingsPanel(): void;
        getTopPlaceholder(): $UIElement;
        getButtonContainer(): $UIElement;
        getCloseButton(): $Button;
        getMainView(): $UIElement;
        openMenu(arg0: number, arg1: number, arg2: $TreeBuilder$Menu): void;
        openMenu<T, C>(arg0: number, arg1: number, arg2: $TreeNode<T, C>, arg3: $UIElementProvider_<T>): $Menu<T, C>;
        getWindow(): $EditorWindow;
        getTitle(): $Component;
        getIcon(): $UIElement;
        getMenuContainer(): $UIElement;
        placeView(arg0: $View, arg1: $Supplier_<$ViewContainer>): void;
        closeCurrentProject(arg0: boolean, arg1: $Runnable_): void;
        getCurrentProjectFile(): $File;
        isCurrentProjectDirty(): boolean;
        getTop(): $UIElement;
        static ANCHOR_CENTER: string;
        static ANCHOR_BOTTOM: string;
        resourceView: $ResourceView;
        static EMPTY_LAYOUT: $Layout;
        topPlaceholder: $UIElement;
        icon: $UIElement;
        menuContainer: $UIElement;
        buttonContainer: $UIElement;
        inspectorView: $InspectorView;
        static ANCHOR_RIGHT: string;
        rightWindow: $SplittableWindow;
        top: $UIElement;
        closeButton: $Button;
        static ANCHOR_LEFT: string;
        fileMenu: $FileMenu;
        leftWindow: $SplittableWindow;
        static CODEC: $Codec<$UIElement>;
        historyView: $HistoryView;
        static ANCHOR_ROOT: string;
        viewMenu: $ViewMenu;
        centerWindow: $SplittableWindow;
        editorSettings: $EditorSettings;
        rootWindow: $SplittableWindow;
        bottomWindow: $SplittableWindow;
        mainView: $UIElement;
        constructor();
        get allViews(): $List<$View>;
        get currentProject(): $IProject;
        get viewFallbacks(): $Map<$View, $Supplier<$ViewContainer>>;
        get savedLayout(): $EditorLayout;
        get window(): $EditorWindow;
        get title(): $Component;
        get currentProjectFile(): $File;
        get currentProjectDirty(): boolean;
    }
    export class $SplittableWindow extends $UIElement {
        getFirst(): $SplittableWindow;
        getSecond(): $SplittableWindow;
        setImmortal(arg0: boolean): $SplittableWindow;
        getAnchorId(): string;
        getViewContainer(): $ViewContainer;
        setAnchorId(arg0: string): $SplittableWindow;
        getAllViews(): $List<$View>;
        getLayoutConfig(): $SplittableWindow$LayoutConfig;
        trimEmptySplits(): boolean;
        getLeftBottom(): $ViewContainer;
        getRightTop(): $ViewContainer;
        splitWith(arg0: $YogaEdge_, arg1: $SplittableWindow): $Pair<$SplittableWindow, $SplittableWindow>;
        isImmortal(): boolean;
        splitNew(arg0: $YogaEdge_): $Pair<$SplittableWindow, $SplittableWindow>;
        getLeftTop(): $ViewContainer;
        splitStyle(arg0: $Consumer_<$SplittableWindow$SplitStyle>): $SplittableWindow;
        isSplit(): boolean;
        applyLayoutConfig(arg0: $SplittableWindow$LayoutConfig_): $SplittableWindow;
        setViewContainer(arg0: $ViewContainer): $SplittableWindow;
        removeSplitWindow(arg0: $SplittableWindow): void;
        getRightBottom(): $ViewContainer;
        getSplitView(): $SplitView;
        getParentWindow(): $SplittableWindow;
        setParentWindow(arg0: $SplittableWindow): $SplittableWindow;
        getSplitStyle(): $SplittableWindow$SplitStyle;
        rebuildFromLayoutConfig(arg0: $SplittableWindow$LayoutConfig_, arg1: $Map_<string, $SplittableWindow>): void;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor(arg0: $SplittableWindow, arg1: $ViewContainer);
        constructor(arg0: $SplittableWindow);
        constructor();
        get first(): $SplittableWindow;
        get second(): $SplittableWindow;
        get allViews(): $List<$View>;
        get layoutConfig(): $SplittableWindow$LayoutConfig;
        get leftBottom(): $ViewContainer;
        get rightTop(): $ViewContainer;
        get leftTop(): $ViewContainer;
        get split(): boolean;
        get rightBottom(): $ViewContainer;
        get splitView(): $SplitView;
    }
    export class $SplittableWindow$SplitStyle extends $Style {
        static init(): void;
        percentage(arg0: number): $SplittableWindow$SplitStyle;
        percentage(): number;
        maxPercentage(arg0: number): $SplittableWindow$SplitStyle;
        maxPercentage(): number;
        minPercentage(arg0: number): $SplittableWindow$SplitStyle;
        minPercentage(): number;
        holder: $UIElement;
        constructor(arg0: $SplittableWindow);
    }
}
