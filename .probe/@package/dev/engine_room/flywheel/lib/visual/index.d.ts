import { $InstancerProvider } from "@package/dev/engine_room/flywheel/api/instance";
import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $BlockPos } from "@package/net/minecraft/core";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $DynamicVisual$Context, $LightUpdatedVisual, $Visual, $SectionTrackedVisual$SectionCollector_, $BlockEntityVisual } from "@package/dev/engine_room/flywheel/api/visual";
import { $AccessorAbstractVisual } from "@package/com/railwayteam/railways/mixin/client";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $FrustumIntersection } from "@package/org/joml";

declare module "@package/dev/engine_room/flywheel/lib/visual" {
    export class $AbstractVisual implements $Visual, $AccessorAbstractVisual {
        update(partialTick: number): void;
        "delete"(): void;
        railways$getLevel(): $Level;
        railways$getInstancerProvider(): $InstancerProvider;
        constructor(ctx: $VisualizationContext, level: $Level_, partialTick: number);
    }
    export class $AbstractBlockEntityVisual<T extends $BlockEntity> extends $AbstractVisual implements $BlockEntityVisual<T>, $LightUpdatedVisual {
        isVisible(frustum: $FrustumIntersection): boolean;
        doDistanceLimitThisFrame(context: $DynamicVisual$Context): boolean;
        setSectionCollector(sectionCollector: $SectionTrackedVisual$SectionCollector_): void;
        getVisualPosition(): $BlockPos;
        constructor(ctx: $VisualizationContext, blockEntity: T, partialTick: number);
        set sectionCollector(value: $SectionTrackedVisual$SectionCollector_);
        get visualPosition(): $BlockPos;
    }
}
