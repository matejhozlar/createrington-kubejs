import { $Codec } from "@package/com/mojang/serialization";
import { $Event } from "@package/net/neoforged/bus/api";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Tag_, $Tag } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $TagsUpdatedEvent } from "@package/net/neoforged/neoforge/event";
import { $List, $Set, $Collection } from "@package/java/util";
import { $Function_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $Holder_, $RegistryAccess, $HolderSet_, $Holder } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Runnable_, $Object } from "@package/java/lang";
import { $MutableDataComponentHolder } from "@package/net/neoforged/neoforge/common";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as recipe from "@package/petrolpark/mc/library/core/flags/recipe";

declare module "@package/petrolpark/mc/library/core/flags" {
    export class $Flaggable<OBJECT, OBJECT_STACK> {
        getFlagPoleOptional(arg0: $Object): ($IFlagPole<OBJECT, OBJECT_STACK>) | undefined;
        getShownIfAbsentFlags(arg0: OBJECT): $Collection<$Holder<$Flag>>;
        onTagsLoaded(arg0: $TagsUpdatedEvent): void;
        getIntrinsicFlags(arg0: OBJECT): $Collection<$Holder<$Flag>>;
        isFlaggable(arg0: OBJECT): boolean;
        isFlaggableStack(arg0: OBJECT_STACK): boolean;
        getFlagPole(arg0: $Object): $IFlagPole<OBJECT, OBJECT_STACK>;
        constructor();
    }
    export interface $Flag extends RegistryMarked<RegistryTypes.PetrolparkFlagTag, RegistryTypes.PetrolparkFlag> {}
    export class $ComponentHolderFlagPole<OBJECT, OBJECT_STACK extends $MutableDataComponentHolder> extends $AbstractFlagPole<OBJECT, OBJECT_STACK> {
        static ORPHAN_HOLDER_LIST_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $List<$Holder<$Flag>>>;
        static ORPHAN_HOLDER_LIST_CODEC: $Codec<$List<$Holder<$Flag>>>;
    }
    export class $ItemFlagPoleSavedEvent extends $Event {
        stack: $ItemStack;
        flags: $ItemFlagPole;
        constructor(arg0: $ItemStack_, arg1: $ItemFlagPole);
    }
    export class $Flag {
        static getName(arg0: $Holder_<$Flag>): $Component;
        isPreserved(arg0: number): boolean;
        getChildren(): $Set<$Holder<$Flag>>;
        getColor(): number;
        getPreservationProportion(): number;
        getParents(): $Set<$Holder<$Flag>>;
        static getAbsentNameColored(arg0: $Holder_<$Flag>): $Component;
        static onTagsUpdated(arg0: $TagsUpdatedEvent): void;
        static getNameColored(arg0: $Holder_<$Flag>): $Component;
        getAbsentColor(): number;
        static loadChildren(arg0: $RegistryAccess): void;
        static compareHolders(arg0: $Holder_<$Flag>, arg1: $Holder_<$Flag>): number;
        static getAbsentName(arg0: $Holder_<$Flag>): $Component;
        static CODEC: $Codec<$Holder<$Flag>>;
        color: number;
        absentColor: number;
        static DIRECT_CODEC: $Codec<$Flag>;
        preservationProportion: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$Flag>>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $HolderSet_<$Flag>);
        get children(): $Set<$Holder<$Flag>>;
        get parents(): $Set<$Holder<$Flag>>;
    }
    /**
     * Values that may be interpreted as {@link $Flag}.
     */
    export type $Flag_ = RegistryTypes.PetrolparkFlag;
    export class $ItemFlagPole extends $ComponentHolderFlagPole<$Item, $ItemStack> {
        static get(arg0: $ItemStack_): $IFlagPole<never, never>;
        static create(arg0: $ItemStack_): $IFlagPole<never, never>;
        static perpetuateSingle(arg0: $Stream<$ItemStack_>, arg1: $Stream<$ItemStack_>): void;
        static perpetuateSingle(arg0: $Stream<$ItemStack_>, arg1: $ItemStack_): void;
        static perpetuate(arg0: $Stream<$ItemStack_>, arg1: $Stream<$ItemStack_>): void;
        static ORPHAN_HOLDER_LIST_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $List<$Holder<$Flag>>>;
        static ORPHAN_HOLDER_LIST_CODEC: $Codec<$List<$Holder<$Flag>>>;
    }
    export class $IFlagPole<OBJECT, OBJECT_STACK> {
        static get(arg0: $Object): ($IFlagPole<never, never>) | undefined;
        static perpetuate(arg0: $Stream<$ItemStack_>, arg1: $Stream<$FluidStack_>, arg2: number, arg3: $Stream<$ItemStack_>, arg4: $Stream<$FluidStack_>): void;
        static perpetuate<OBJECT>(arg0: $Stream<OBJECT>, arg1: $Stream<OBJECT>): void;
        static perpetuate<OBJECT>(arg0: $Stream<OBJECT>, arg1: $Stream<OBJECT>, arg2: $Function_<OBJECT, $IFlagPole<never, never>>): void;
    }
    export interface $IFlagPole<OBJECT, OBJECT_STACK> {
        save(): void;
        flag(arg0: $Holder_<$Flag>): boolean;
        getType(): OBJECT;
        has(arg0: $Holder_<$Flag>): boolean;
        getAmount(): number;
        isIntrinsic(arg0: $Holder_<$Flag>): boolean;
        streamOrphanExtrinsicFlags(): $Stream<$Holder<$Flag>>;
        streamShownIfAbsentFlags(): $Stream<$Holder<$Flag>>;
        streamShownFlags(): $Stream<$Holder<$Flag>>;
        flagAll(arg0: $Stream<$Holder_<$Flag>>): boolean;
        getFlaggable(): $Flaggable<OBJECT, OBJECT_STACK>;
        streamAllFlags(): $Stream<$Holder<$Flag>>;
        streamIntrinsicFlags(): $Stream<$Holder<$Flag>>;
        streamShownAbsentFlags(): $Stream<$Holder<$Flag>>;
        hasAnyExtrinsicFlag(): boolean;
        unflag(arg0: $Holder_<$Flag>): boolean;
        hasAnyFlag(): boolean;
        unflagOnly(arg0: $Holder_<$Flag>): boolean;
        clearFlags(): boolean;
        get type(): OBJECT;
        get amount(): number;
        get flaggable(): $Flaggable<OBJECT, OBJECT_STACK>;
    }
    export class $AbstractFlagPole<OBJECT, OBJECT_STACK> implements $IFlagPole<OBJECT, OBJECT_STACK> {
        flag(arg0: $Holder_<$Flag>): boolean;
        has(arg0: $Holder_<$Flag>): boolean;
        isIntrinsic(arg0: $Holder_<$Flag>): boolean;
        streamOrphanExtrinsicFlags(): $Stream<$Holder<$Flag>>;
        streamShownIfAbsentFlags(): $Stream<$Holder<$Flag>>;
        flagAll(arg0: $Stream<$Holder_<$Flag>>): boolean;
        streamAllFlags(): $Stream<$Holder<$Flag>>;
        streamIntrinsicFlags(): $Stream<$Holder<$Flag>>;
        hasAnyExtrinsicFlag(): boolean;
        unflag(arg0: $Holder_<$Flag>): boolean;
        hasAnyFlag(): boolean;
        unflagOnly(arg0: $Holder_<$Flag>): boolean;
        clearFlags(): boolean;
        streamShownFlags(): $Stream<$Holder<$Flag>>;
        streamShownAbsentFlags(): $Stream<$Holder<$Flag>>;
        static ORPHAN_HOLDER_LIST_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $List<$Holder<$Flag>>>;
        static ORPHAN_HOLDER_LIST_CODEC: $Codec<$List<$Holder<$Flag>>>;
    }
    export class $GenericFlagPole extends $AbstractFlagPole<$Object, $Object> {
        writeNBT(arg0: $HolderLookup$Provider): $Tag;
        readNBT(arg0: $Tag_, arg1: $HolderLookup$Provider): $GenericFlagPole;
        static ORPHAN_HOLDER_LIST_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $List<$Holder<$Flag>>>;
        static ORPHAN_HOLDER_LIST_CODEC: $Codec<$List<$Holder<$Flag>>>;
        constructor();
        constructor(arg0: $Runnable_);
    }
}
