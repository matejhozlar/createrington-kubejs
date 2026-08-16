import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";

declare module "@package/net/swzo/brassworksmissions/missions" {
    export class $ActiveMission {
        isComplete(): boolean;
        getTitle(): string;
        getCategory(): number;
        static deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $ActiveMission;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        getMissionType(): string;
        getProgress(): number;
        setProgress(arg0: number): void;
        isClaimed(): boolean;
        getRequiredAmount(): number;
        setClaimed(arg0: boolean): void;
        getRequirementType(): string;
        getIconItemStack(): $ItemStack;
        isRequirementType(arg0: string): boolean;
        incrementProgress(arg0: number): void;
        getMissionId(): string;
        getRewardItemStack(): $ItemStack;
        getRequirementItemStack(): $ItemStack;
        constructor(arg0: string, arg1: string, arg2: number, arg3: string, arg4: $ItemStack_, arg5: $ItemStack_, arg6: number, arg7: string, arg8: $ItemStack_);
        constructor(arg0: string, arg1: string, arg2: string, arg3: $ItemStack_, arg4: number, arg5: string, arg6: $ItemStack_);
        constructor(arg0: string, arg1: string, arg2: $ItemStack_, arg3: number, arg4: string, arg5: $ItemStack_);
        get complete(): boolean;
        get title(): string;
        get category(): number;
        get missionType(): string;
        get requiredAmount(): number;
        get iconItemStack(): $ItemStack;
        get missionId(): string;
        get rewardItemStack(): $ItemStack;
        get requirementItemStack(): $ItemStack;
    }
}
