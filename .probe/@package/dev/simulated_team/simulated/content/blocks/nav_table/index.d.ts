import { $Level } from "@package/net/minecraft/world/level";
import { $IAbstractPanelSupport } from "@package/io/github/techtastic/simulated_gauges/mixinducks";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $SubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $NavigationTarget } from "@package/dev/simulated_team/simulated/content/blocks/nav_table/navigation_target";
import { $AbstractPanelSupportBehaviour } from "@package/net/liukrast/deployer/lib/logistics/board/connection";
import { $Clearable } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $SingleSlotContainer, $ContainerSlot } from "@package/dev/simulated_team/simulated/multiloader/inventory";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $Quaterniond } from "@package/org/joml";
export * as navigation_target from "@package/dev/simulated_team/simulated/content/blocks/nav_table/navigation_target";

declare module "@package/dev/simulated_team/simulated/content/blocks/nav_table" {
    export class $NavTableInventory extends $SingleSlotContainer {
        maxStackSize: number;
        slot: $ContainerSlot;
        constructor(arg0: $NavTableBlockEntity);
    }
    export class $NavTableBlockEntity extends $SmartBlockEntity implements $Clearable, $IAbstractPanelSupport {
        getNavTableItem(): $NavigationTarget;
        simulated_gauges$getOrCreateSupport(arg0: $SmartBlockEntity): $AbstractPanelSupportBehaviour;
        getRedstoneStrength(arg0: $Direction_): number;
        dropHeldItem(): void;
        distanceToTarget(): number;
        getProjectedSelfPos(): $Vec3;
        getClientTargetAngle(arg0: number): number;
        clearContent(): void;
        getRelativeAngle(): number;
        forceCurrentAngle(arg0: number): void;
        getSublevelRot(): $Quaterniond;
        getHeldItem(): $ItemStack;
        getTargetPosition(arg0: boolean): $Vec3;
        setHeldItem(arg0: $ItemStack_): $ItemStack;
        lastDistanceToTarget(): number;
        worldPosition: $BlockPos;
        isPowering: boolean;
        currentTarget: $Vec3;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        inventory: $NavTableInventory;
        lerpedAngleDegrees: $LerpedFloat;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        subLevel: $SubLevel;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get navTableItem(): $NavigationTarget;
        get projectedSelfPos(): $Vec3;
        get relativeAngle(): number;
        get sublevelRot(): $Quaterniond;
    }
}
