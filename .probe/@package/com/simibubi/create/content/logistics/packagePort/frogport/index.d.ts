import { $Level, $LevelAccessor } from "@package/net/minecraft/world/level";
import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $PackagePortTarget, $PackagePortBlockEntity } from "@package/com/simibubi/create/content/logistics/packagePort";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $List_ } from "@package/java/util";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $SmartInventory } from "@package/com/simibubi/create/foundation/item";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $IHaveHoveringInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/content/logistics/packagePort/frogport" {
    export class $FrogportBlockEntity extends $PackagePortBlockEntity implements $IHaveHoveringInformation {
        getYaw(): number;
        addToTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        isAnimationInProgress(): boolean;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        tryPullingFromOwnAndAdjacentInventories(): void;
        anticipate(): void;
        wrapOperation$hon000$sable$getExactTargetLocation(arg0: $PackagePortTarget, arg1: $PackagePortBlockEntity, arg2: $LevelAccessor, arg3: $BlockPos_, arg4: $Operation_<any>): $Vec3;
        sendAnticipate(): void;
        tryPullingFrom(arg0: $IItemHandler): boolean;
        startAnimation(arg0: $ItemStack_, arg1: boolean): void;
        getIcon(arg0: boolean): $ItemStack;
        acceptsPackages: boolean;
        anticipationProgress: $LerpedFloat;
        level: $Level;
        animationProgress: $LerpedFloat;
        static ATTACHMENTS_NBT_KEY: string;
        computerBehaviour: $AbstractComputerBehaviour;
        inventory: $SmartInventory;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        manualOpenAnimationProgress: $LerpedFloat;
        currentlyDepositing: boolean;
        target: $PackagePortTarget;
        animatedPackage: $ItemStack;
        worldPosition: $BlockPos;
        goggles: boolean;
        passiveYaw: number;
        addressFilter: string;
        hasComparators: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get yaw(): number;
        get animationInProgress(): boolean;
    }
}
