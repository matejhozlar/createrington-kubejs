import { $Level_ } from "@package/net/minecraft/world/level";
import { $Container } from "@package/net/minecraft/world";
import { $Predicate_ } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ItemStack, $Item_, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $DataComponentPatch, $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $Record } from "@package/java/lang";
import { $Set_, $List, $Set } from "@package/java/util";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";

declare module "@package/dev/simulated_team/simulated/multiloader/inventory" {
    export class $AbstractContainer {
    }
    export interface $AbstractContainer extends $NBTSerializable, $Container {
        isEmpty(): boolean;
        getItem(arg0: number): $ItemStack;
        stillValid(arg0: $Player): boolean;
        setItem(arg0: number, arg1: $ItemStack_): void;
        setChanged(): void;
        removeItem(arg0: number, arg1: number): $ItemStack;
        insertSlot(arg0: $ItemStack_, arg1: number, arg2: boolean): $ItemStack;
        getMaxStackSize(): number;
        extractGeneral(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        extractSlot(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        insertGeneral(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        populateFields(arg0: $ContainerSlot): void;
        onStackItemChange(arg0: $ContainerSlot, arg1: $ItemStack_, arg2: $ItemStack_): void;
        getInventoryAsList(): $List<$ContainerSlot>;
        canExtractFromSlot(arg0: $ContainerSlot): boolean;
        getPopulatedSlots(): $Set<$ContainerSlot>;
        commonInsert(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot, arg2: number, arg3: boolean): number;
        canInsertItem(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot): boolean;
        commonExtract(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot, arg2: number, arg3: boolean): number;
        clearContent(): void;
        getContainerSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        get empty(): boolean;
        get maxStackSize(): number;
        get inventoryAsList(): $List<$ContainerSlot>;
        get populatedSlots(): $Set<$ContainerSlot>;
        get containerSize(): number;
    }
    export class $SingleSlotContainer implements $AbstractContainer {
        isEmpty(): boolean;
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        read(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        getItem(arg0: number): $ItemStack;
        setItem(arg0: number, arg1: $ItemStack_): void;
        setChanged(): void;
        insertSlot(arg0: $ItemStack_, arg1: number, arg2: boolean): $ItemStack;
        getMaxStackSize(): number;
        extractGeneral(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        extractSlot(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        insertGeneral(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        onStackItemChange(arg0: $ContainerSlot, arg1: $ItemStack_, arg2: $ItemStack_): void;
        getInventoryAsList(): $List<$ContainerSlot>;
        getPopulatedSlots(): $Set<$ContainerSlot>;
        canInsertItem(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot): boolean;
        canInsertItem(arg0: $ItemInfoWrapper_): boolean;
        clearContent(): void;
        getContainerSize(): number;
        stillValid(arg0: $Player): boolean;
        removeItem(arg0: number, arg1: number): $ItemStack;
        populateFields(arg0: $ContainerSlot): void;
        canExtractFromSlot(arg0: $ContainerSlot): boolean;
        commonInsert(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot, arg2: number, arg3: boolean): number;
        commonExtract(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot, arg2: number, arg3: boolean): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        countItem(arg0: $Item_): number;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        getMaxStackSize(arg0: $ItemStack_): number;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        canReceiveTransferCooldown(): boolean;
        setTransferCooldown(arg0: number): void;
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        clear(): void;
        self(): $Container;
        getBlock(level: $Level_): $LevelBlock;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getStackInSlot(slot: number): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getHeight(): number;
        getSlots(): number;
        getWidth(): number;
        asContainer(): $Container;
        setChanged(): void;
        getSlotLimit(slot: number): number;
        isMutable(): boolean;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        find(match: $ItemPredicate_): number;
        find(): number;
        count(match: $ItemPredicate_): number;
        count(): number;
        clear(match: $ItemPredicate_): void;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        getAllItems(): $List<$ItemStack>;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        isEmpty(): boolean;
        maxStackSize: number;
        slot: $ContainerSlot;
        constructor(arg0: number);
        get inventoryAsList(): $List<$ContainerSlot>;
        get populatedSlots(): $Set<$ContainerSlot>;
        get containerSize(): number;
        set transferCooldown(value: number);
        get height(): number;
        get slots(): number;
        get width(): number;
        get mutable(): boolean;
        get allItems(): $List<$ItemStack>;
    }
    export class $NBTSerializable {
    }
    export interface $NBTSerializable {
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        read(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
    }
    export class $ItemInfoWrapper extends $Record {
        type(): $Item;
        static generateFromInfo(arg0: $ItemInfoWrapper_): $ItemStack;
        static generateFromStack(arg0: $ItemStack_): $ItemInfoWrapper;
        patchMap(): $DataComponentPatch;
        constructor(type: $Item_, patchMap: $DataComponentPatch_);
    }
    /**
     * Values that may be interpreted as {@link $ItemInfoWrapper}.
     */
    export type $ItemInfoWrapper_ = { patchMap?: $DataComponentPatch_, type?: $Item_,  } | [patchMap?: $DataComponentPatch_, type?: $Item_, ];
    export class $ContainerSlot implements $NBTSerializable {
        clear(): void;
        isEmpty(): boolean;
        static of(arg0: number, arg1: $Item_, arg2: $AbstractContainer): $ContainerSlot;
        static of(arg0: number, arg1: $ItemStack_, arg2: $AbstractContainer): $ContainerSlot;
        getParent(): $AbstractContainer;
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        read(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        getType(): $Item;
        getIndex(): number;
        getStack(): $ItemStack;
        shrink(arg0: number): void;
        setStack(arg0: $ItemStack_): void;
        canInsert(arg0: $ItemInfoWrapper_): boolean;
        insertStack(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        extractStack(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        canExtract(): boolean;
        static EMPTY: $ContainerSlot;
        constructor();
        constructor(arg0: number, arg1: $ItemStack_, arg2: $Item_, arg3: $AbstractContainer);
        get empty(): boolean;
        get parent(): $AbstractContainer;
        get type(): $Item;
        get index(): number;
    }
}
