import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CreateAdvancement } from "@package/com/simibubi/create/foundation/advancement";
import { $IInteractionChecker } from "@package/com/simibubi/create/foundation/utility";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $PartialSafeNBT } from "@package/com/simibubi/create/api/schematic/nbt";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $List, $Set_, $List_, $Collection } from "@package/java/util";
import { $RenderedBehaviourExtension, $KineticBehaviourExtension, $ItemRequirementBehaviourExtension } from "@package/com/cake/azimuth/behaviour/extensions";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $BehaviourType, $BlockEntityBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $Container } from "@package/net/minecraft/world";
import { $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $HolderGetter } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Runnable_ } from "@package/java/lang";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $SpecialBlockEntityItemRequirement } from "@package/com/simibubi/create/api/schematic/requirement";
import { $VirtualBlockEntity } from "@package/net/createmod/ponder/api";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ClientboundBlockEntityDataPacket } from "@package/net/minecraft/network/protocol/game";
import { $AzimuthSmartBlockEntityExtension, $SuperBlockEntityBehaviour } from "@package/com/cake/azimuth/behaviour";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as behaviour from "@package/com/simibubi/create/foundation/blockEntity/behaviour";

declare module "@package/com/simibubi/create/foundation/blockEntity" {
    export class $SyncedBlockEntity extends $BlockEntity {
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        sendData(): void;
        readClient(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        notifyUpdate(): void;
        writeClient(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $CompoundTag;
        blockHolderGetter(): $HolderGetter<$Block>;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $ItemHandlerContainer implements $Container {
        isEmpty(): boolean;
        getItem(arg0: number): $ItemStack;
        stillValid(arg0: $Player): boolean;
        setItem(arg0: number, arg1: $ItemStack_): void;
        setChanged(): void;
        removeItem(arg0: number, arg1: number): $ItemStack;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        getMaxStackSize(): number;
        clearContent(): void;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        getContainerSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        countItem(arg0: $Item_): number;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        getMaxStackSize(arg0: $ItemStack_): number;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
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
        constructor(arg0: $IItemHandlerModifiable);
        get containerSize(): number;
        set transferCooldown(value: number);
        get height(): number;
        get slots(): number;
        get width(): number;
        get mutable(): boolean;
        get allItems(): $List<$ItemStack>;
    }
    export class $CachedRenderBBBlockEntity extends $SyncedBlockEntity {
        getRenderBoundingBox(): $AABB;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get renderBoundingBox(): $AABB;
    }
    export class $SmartBlockEntity extends $CachedRenderBBBlockEntity implements $PartialSafeNBT, $IInteractionChecker, $SpecialBlockEntityItemRequirement, $VirtualBlockEntity, $AzimuthSmartBlockEntityExtension {
        remove(): void;
        isVirtual(): boolean;
        initialize(): void;
        destroy(): void;
        tick(): void;
        invalidate(): void;
        award(arg0: $CreateAdvancement): void;
        azimuth$getSuperBehaviours(): $SuperBlockEntityBehaviour[];
        handler$zej000$azimuth$setRemoved(arg0: $CallbackInfo): void;
        azimuth$searchExtensionBehaviours(arg0: $Predicate_<any>): $List<any>;
        azimuth$getRenderedExtensionCache(): $RenderedBehaviourExtension[];
        azimuth$searchSuperBehaviours(): $SuperBlockEntityBehaviour[];
        azimuth$addCacheClearListener(arg0: $Runnable_): void;
        azimuth$getKineticExtensionCache(): $KineticBehaviourExtension[];
        azimuth$invalidateRenderBoundingBox(): void;
        azimuth$updateBehaviourExtensionCache(): void;
        azimuth$getItemRequirementExtensionCache(): $ItemRequirementBehaviourExtension[];
        lazyTick(): void;
        sendToMenu(arg0: $RegistryFriendlyByteBuf): void;
        writeSafe(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        addBehavioursDeferred(arg0: $List_<$BlockEntityBehaviour>): void;
        attachBehaviourLate(arg0: $BlockEntityBehaviour): void;
        addBehaviours(arg0: $List_<$BlockEntityBehaviour>): void;
        forEachBehaviour(arg0: $Consumer_<$BlockEntityBehaviour>): void;
        setLazyTickRate(arg0: number): void;
        isChunkUnloaded(): boolean;
        getBehaviour<T extends $BlockEntityBehaviour>(arg0: $BehaviourType<T>): T;
        canPlayerUse(arg0: $Player): boolean;
        refreshBlockState(): void;
        removeBehaviour(arg0: $BehaviourType<never>): void;
        getRequiredItems(arg0: $BlockState_): $ItemRequirement;
        awardIfNear(arg0: $CreateAdvancement, arg1: number): void;
        getAllBehaviours(): $Collection<$BlockEntityBehaviour>;
        markVirtual(): void;
        registerAwardables(arg0: $List_<$BlockEntityBehaviour>, ...arg1: $CreateAdvancement[]): void;
        handler$zej000$azimuth$constructWithAdditionalBehaviours(arg0: $BlockEntityType_<any>, arg1: $BlockPos_, arg2: $BlockState_, arg3: $CallbackInfo): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get virtual(): boolean;
        set lazyTickRate(value: number);
        get chunkUnloaded(): boolean;
        get allBehaviours(): $Collection<$BlockEntityBehaviour>;
    }
}
