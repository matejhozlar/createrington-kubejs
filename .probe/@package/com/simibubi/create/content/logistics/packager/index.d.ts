import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $Codec } from "@package/com/mojang/serialization";
import { $AdvancementBehaviour } from "@package/com/simibubi/create/foundation/advancement";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $PackagerBlockEntityAccessor as $PackagerBlockEntityAccessor$1 } from "@package/net/liukrast/deployer/lib/mixin/accessors";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $List, $Map, $List_ } from "@package/java/util";
import { $PackageOrderWithCrafts, $PackageOrderWithCrafts_ } from "@package/com/simibubi/create/content/logistics/stockTicker";
import { $BigItemStack } from "@package/com/simibubi/create/content/logistics";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $Predicate_ } from "@package/java/util/function";
import { $Clearable, $Container } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $PRExtension } from "@package/net/liukrast/deployer/lib/mixinExtensions";
import { $Record } from "@package/java/lang";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $IItemHandler, $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $InventoryIdentifier, $InventoryIdentifier_ } from "@package/com/simibubi/create/api/packager";
import { $InvManipulationBehaviour, $VersionedInventoryTrackerBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/inventory";
import { $MutableInt, $MutableBoolean } from "@package/org/apache/commons/lang3/mutable";
import { $PackagerBlockEntityAccessor } from "@package/net/zlt/create_vibrant_vaults/mixin/accessor";
import { $LogisticallyLinkedBehaviour$RequestType_ } from "@package/com/simibubi/create/content/logistics/packagerLink";
import { $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/content/logistics/packager" {
    export class $PackagerBlockEntity extends $SmartBlockEntity implements $Clearable, $PackagerBlockEntityAccessor$1, $PackagerBlockEntityAccessor {
        isTooBusyFor(arg0: $LogisticallyLinkedBehaviour$RequestType_): boolean;
        redstoneModeActive(): boolean;
        attemptToSend(arg0: $List_<$PackagingRequest_>): void;
        updateSignAddress(): void;
        getAvailableItems(): $InventorySummary;
        getRenderedBox(): $ItemStack;
        getTrayOffset(arg0: number): number;
        activate(): void;
        recheckIfLinksPresent(): void;
        isTargetingSameInventory(arg0: $IdentifiedInventory_): boolean;
        flashLink(): void;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        clearContent(): void;
        unwrapBox(arg0: $ItemStack_, arg1: boolean): boolean;
        triggerStockCheck(): void;
        invokeGetLinkPos(): $BlockPos;
        invokeSupportsBlockEntity(arg0: $BlockEntity): boolean;
        getInvVersionTracker(): $VersionedInventoryTrackerBehaviour;
        createVibrantVaults$getInventory(): $PackagerItemHandler;
        getAdvancement(): $AdvancementBehaviour;
        targetInventory: $InvManipulationBehaviour;
        level: $Level;
        previouslyUnwrapped: $ItemStack;
        queuedExitingPackages: $List<$BigItemStack>;
        customComputerAddress: string;
        static ATTACHMENTS_NBT_KEY: string;
        buttonCooldown: number;
        inventory: $PackagerItemHandler;
        animationTicks: number;
        computerBehaviour: $AbstractComputerBehaviour;
        hasCustomComputerAddress: boolean;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        worldPosition: $BlockPos;
        redstonePowered: boolean;
        heldBox: $ItemStack;
        signBasedAddress: string;
        hasComparators: number;
        animationInward: boolean;
        static CYCLE: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get availableItems(): $InventorySummary;
        get renderedBox(): $ItemStack;
        get invVersionTracker(): $VersionedInventoryTrackerBehaviour;
        get advancement(): $AdvancementBehaviour;
    }
    export class $PackagerItemHandler implements $IItemHandlerModifiable {
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        getStackInSlot(arg0: number): $ItemStack;
        getSlots(): number;
        getSlotLimit(arg0: number): number;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        kjs$self(): $IItemHandler;
        kjs$getBlock(level: $Level_): $LevelBlock;
        kjs$isMutable(): boolean;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        find(match: $ItemPredicate_): number;
        find(): number;
        count(match: $ItemPredicate_): number;
        count(): number;
        clear(match: $ItemPredicate_): void;
        clear(): void;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        getHeight(): number;
        getAllItems(): $List<$ItemStack>;
        getWidth(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        asContainer(): $Container;
        setChanged(): void;
        isEmpty(): boolean;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getStackInSlot(slot: number): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getSlots(): number;
        getSlotLimit(slot: number): number;
        constructor(arg0: $PackagerBlockEntity);
        get height(): number;
        get allItems(): $List<$ItemStack>;
        get width(): number;
        get empty(): boolean;
    }
    export class $IdentifiedInventory extends $Record {
        handler(): $IItemHandler;
        identifier(): $InventoryIdentifier;
        constructor(identifier: $InventoryIdentifier_, handler: $IItemHandler);
    }
    /**
     * Values that may be interpreted as {@link $IdentifiedInventory}.
     */
    export type $IdentifiedInventory_ = { identifier?: $InventoryIdentifier_, handler?: $IItemHandler,  } | [identifier?: $InventoryIdentifier_, handler?: $IItemHandler, ];
    export class $InventorySummary {
        getStacks(): $List<$BigItemStack>;
        isEmpty(): boolean;
        add(arg0: $ItemStack_, arg1: number): void;
        add(arg0: $InventorySummary): void;
        add(arg0: $BigItemStack): void;
        add(arg0: $ItemStack_): void;
        copy(): $InventorySummary;
        erase(arg0: $ItemStack_): boolean;
        getTotalCount(): number;
        getCountOf(arg0: $ItemStack_): number;
        getStacksByCount(): $List<$BigItemStack>;
        divideAndSendTo(arg0: $ServerPlayer, arg1: $BlockPos_): void;
        getItemMap(): $Map<$Item, $List<$BigItemStack>>;
        addAllBigItemStacks(arg0: $List_<$BigItemStack>): void;
        addAllItemStacks(arg0: $List_<$ItemStack_>): void;
        getTotalOfMatching(arg0: $Predicate_<$ItemStack>): number;
        static CODEC: $Codec<$InventorySummary>;
        contributingLinks: number;
        static EMPTY: $InventorySummary;
        constructor();
        get stacks(): $List<$BigItemStack>;
        get empty(): boolean;
        get totalCount(): number;
        get stacksByCount(): $List<$BigItemStack>;
        get itemMap(): $Map<$Item, $List<$BigItemStack>>;
    }
    export class $PackagingRequest extends $Record implements $PRExtension {
        context(): $PackageOrderWithCrafts;
        isEmpty(): boolean;
        count(): $MutableInt;
        getCount(): number;
        static create(arg0: $ItemStack_, arg1: number, arg2: string, arg3: number, arg4: $MutableBoolean, arg5: number, arg6: number, arg7: $PackageOrderWithCrafts_): $PackagingRequest;
        address(): string;
        subtract(arg0: number): void;
        item(): $ItemStack;
        packageCounter(): $MutableInt;
        deployer$isFlagged(): boolean;
        finalLink(): $MutableBoolean;
        linkIndex(): number;
        orderId(): number;
        deployer$flag(): void;
        constructor(item: $ItemStack_, count: $MutableInt, address: string, linkIndex: number, finalLink: $MutableBoolean, packageCounter: $MutableInt, orderId: number, context: $PackageOrderWithCrafts_);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $PackagingRequest}.
     */
    export type $PackagingRequest_ = { count?: $MutableInt, context?: $PackageOrderWithCrafts_, finalLink?: $MutableBoolean, item?: $ItemStack_, address?: string, packageCounter?: $MutableInt, linkIndex?: number, orderId?: number,  } | [count?: $MutableInt, context?: $PackageOrderWithCrafts_, finalLink?: $MutableBoolean, item?: $ItemStack_, address?: string, packageCounter?: $MutableInt, linkIndex?: number, orderId?: number, ];
}
