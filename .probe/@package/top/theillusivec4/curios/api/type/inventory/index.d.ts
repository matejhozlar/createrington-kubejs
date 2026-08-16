import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ICurio$DropRule } from "@package/top/theillusivec4/curios/api/type/capability";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $AttributeModifier_, $AttributeModifier, $AttributeModifier$Operation_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Map, $Collection, $Set } from "@package/java/util";

declare module "@package/top/theillusivec4/curios/api/type/inventory" {
    export class $IDynamicStackHandler {
    }
    export interface $IDynamicStackHandler extends $IItemHandlerModifiable {
        grow(arg0: number): void;
        shrink(arg0: number): void;
        getStackInSlot(arg0: number): $ItemStack;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        getSlots(): number;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        setPreviousStackInSlot(arg0: number, arg1: $ItemStack_): void;
        getPreviousStackInSlot(arg0: number): $ItemStack;
        get slots(): number;
    }
    export class $ICurioStacksHandler {
    }
    export interface $ICurioStacksHandler {
        getStacks(): $IDynamicStackHandler;
        getModifiers(): $Map<$ResourceLocation, $AttributeModifier>;
        update(): void;
        /**
         * @deprecated
         */
        grow(arg0: number): void;
        isVisible(): boolean;
        getPermanentModifiers(): $Set<$AttributeModifier>;
        clearCachedModifiers(): void;
        getModifiersByOperation(arg0: $AttributeModifier$Operation_): $Collection<$AttributeModifier>;
        getIdentifier(): string;
        /**
         * @deprecated
         */
        shrink(arg0: number): void;
        addPermanentModifier(arg0: $AttributeModifier_): void;
        getSyncTag(): $CompoundTag;
        addTransientModifier(arg0: $AttributeModifier_): void;
        removeModifier(arg0: $ResourceLocation_): void;
        deserializeNBT(arg0: $CompoundTag_): void;
        serializeNBT(): $CompoundTag;
        getSlots(): number;
        getActiveStates(): $NonNullList<boolean>;
        getDropRule(): $ICurio$DropRule;
        getRenders(): $NonNullList<boolean>;
        getCosmeticStacks(): $IDynamicStackHandler;
        canToggleRendering(): boolean;
        hasCosmetic(): boolean;
        clearModifiers(): void;
        copyModifiers(arg0: $ICurioStacksHandler): void;
        updateActiveState(arg0: number): void;
        getCachedModifiers(): $Set<$AttributeModifier>;
        applySyncTag(arg0: $CompoundTag_): void;
        /**
         * @deprecated
         */
        getSizeShift(): number;
        get stacks(): $IDynamicStackHandler;
        get modifiers(): $Map<$ResourceLocation, $AttributeModifier>;
        get visible(): boolean;
        get permanentModifiers(): $Set<$AttributeModifier>;
        get identifier(): string;
        get syncTag(): $CompoundTag;
        get slots(): number;
        get activeStates(): $NonNullList<boolean>;
        get dropRule(): $ICurio$DropRule;
        get renders(): $NonNullList<boolean>;
        get cosmeticStacks(): $IDynamicStackHandler;
        get cachedModifiers(): $Set<$AttributeModifier>;
        get sizeShift(): number;
    }
}
