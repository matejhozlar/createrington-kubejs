declare module "dev.engine_room.flywheel.impl.extension.PoseStackExtension" {
import {$PoseTransformStack, $PoseTransformStack$$Type} from "dev.engine_room.flywheel.lib.transform.PoseTransformStack"

export interface $PoseStackExtension$$Interface {

(): $PoseTransformStack$$Type
}

export class $PoseStackExtension implements $PoseStackExtension$$Interface {
 "flywheel$transformStack"(): $PoseTransformStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoseStackExtension$$Type = (() => $PoseTransformStack$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PoseStackExtension$$Original = $PoseStackExtension;}
declare module "dev.engine_room.flywheel.impl.extension.EntityTypeExtension" {
import {$EntityVisualizer, $EntityVisualizer$$Type} from "dev.engine_room.flywheel.api.visualization.EntityVisualizer"
import {$Entity} from "net.minecraft.world.entity.Entity"

export interface $EntityTypeExtension$$Interface<T extends $Entity> {
}

export class $EntityTypeExtension<T extends $Entity> implements $EntityTypeExtension$$Interface {
 "flywheel$getVisualizer"(): $EntityVisualizer<(T)>
 "flywheel$setVisualizer"(arg0: $EntityVisualizer$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityTypeExtension$$Type<T> = ($EntityTypeExtension<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityTypeExtension$$Original<T> = $EntityTypeExtension<(T)>;}
declare module "dev.engine_room.flywheel.impl.extension.BlockEntityTypeExtension" {
import {$BlockEntityVisualizer, $BlockEntityVisualizer$$Type} from "dev.engine_room.flywheel.api.visualization.BlockEntityVisualizer"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $BlockEntityTypeExtension$$Interface<T extends $BlockEntity> {
}

export class $BlockEntityTypeExtension<T extends $BlockEntity> implements $BlockEntityTypeExtension$$Interface {
 "flywheel$getVisualizer"(): $BlockEntityVisualizer<(T)>
 "flywheel$setVisualizer"(arg0: $BlockEntityVisualizer$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityTypeExtension$$Type<T> = ($BlockEntityTypeExtension<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEntityTypeExtension$$Original<T> = $BlockEntityTypeExtension<(T)>;}
declare module "dev.engine_room.flywheel.impl.mixin.PoseStackAccessor" {
import {$PoseStack$Pose, $PoseStack$Pose$$Type} from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import {$Deque, $Deque$$Type} from "java.util.Deque"

export interface $PoseStackAccessor$$Interface {

(): $Deque$$Type<($PoseStack$Pose$$Type)>
}

export class $PoseStackAccessor implements $PoseStackAccessor$$Interface {
 "flywheel$getPoseStack"(): $Deque<($PoseStack$Pose)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoseStackAccessor$$Type = (() => $Deque$$Type<($PoseStack$Pose$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PoseStackAccessor$$Original = $PoseStackAccessor;}
declare module "dev.engine_room.flywheel.impl.extension.LevelExtension" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export interface $LevelExtension$$Interface {

(): $Iterable$$Type<($Entity$$Type)>
}

export class $LevelExtension implements $LevelExtension$$Interface {
 "flywheel$getAllLoadedEntities"(): $Iterable<($Entity)>
static "getAllLoadedEntities"(level: $Level$$Type): $Iterable<($Entity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelExtension$$Type = (() => $Iterable$$Type<($Entity$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LevelExtension$$Original = $LevelExtension;}
declare module "dev.engine_room.flywheel.impl.mixin.ModelPartAccessor" {
import {$PoseStack$Pose$$Type} from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import {$Map} from "java.util.Map"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$ModelPart} from "net.minecraft.client.model.geom.ModelPart"

export interface $ModelPartAccessor$$Interface {
}

export class $ModelPartAccessor implements $ModelPartAccessor$$Interface {
 "flywheel$compile"(arg0: $PoseStack$Pose$$Type, arg1: $VertexConsumer$$Type, arg2: integer, arg3: integer, arg4: integer): void
 "flywheel$children"(): $Map<(StringJS), ($ModelPart)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelPartAccessor$$Type = ($ModelPartAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelPartAccessor$$Original = $ModelPartAccessor;}
