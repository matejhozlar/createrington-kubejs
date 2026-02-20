declare module "com.railwayteam.railways.mixin.client.AccessorLivingEntityRenderer" {
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $AccessorLivingEntityRenderer$$Interface<T extends $LivingEntity> {

(arg0: T, arg1: $PoseStack, arg2: float, arg3: float, arg4: float, arg5: float): void
}

export class $AccessorLivingEntityRenderer<T extends $LivingEntity> implements $AccessorLivingEntityRenderer$$Interface {
 "callSetupRotations"(arg0: T, arg1: $PoseStack$$Type, arg2: float, arg3: float, arg4: float, arg5: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorLivingEntityRenderer$$Type<T> = ((arg0: T, arg1: $PoseStack, arg2: float, arg3: float, arg4: float, arg5: float) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorLivingEntityRenderer$$Original<T> = $AccessorLivingEntityRenderer<(T)>;}
declare module "com.railwayteam.railways.mixin.client.AccessorPartialModel" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$PartialModel} from "dev.engine_room.flywheel.lib.model.baked.PartialModel"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$ConcurrentMap} from "java.util.concurrent.ConcurrentMap"

export interface $AccessorPartialModel$$Interface {

(arg0: $BakedModel): void
}

export class $AccessorPartialModel implements $AccessorPartialModel$$Interface {
static "railways$getALL"(): $ConcurrentMap<($ResourceLocation), ($PartialModel)>
 "railways$setBakedModel"(arg0: $BakedModel$$Type): void
static "railways$setPopulateOnInit"(arg0: boolean): void
static "railways$getPopulateOnInit"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorPartialModel$$Type = ((arg0: $BakedModel) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorPartialModel$$Original = $AccessorPartialModel;}
declare module "com.railwayteam.railways.mixin.AccessorIngredient" {
import {$Ingredient$Value, $Ingredient$Value$$Type} from "net.minecraft.world.item.crafting.Ingredient$Value"

export interface $AccessorIngredient$$Interface {

(): ($Ingredient$Value$$Type)[]
get "values"(): ($Ingredient$Value)[]
}

export class $AccessorIngredient implements $AccessorIngredient$$Interface {
 "getValues"(): ($Ingredient$Value)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorIngredient$$Type = (() => ($Ingredient$Value$$Type)[]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorIngredient$$Original = $AccessorIngredient;}
declare module "com.railwayteam.railways.mixin.AccessorBlockEntity" {
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $AccessorBlockEntity$$Interface {

(arg0: $BlockPos): void
set "worldPosition"(value: $BlockPos$$Type)
}

export class $AccessorBlockEntity implements $AccessorBlockEntity$$Interface {
 "setWorldPosition"(arg0: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorBlockEntity$$Type = ((arg0: $BlockPos) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorBlockEntity$$Original = $AccessorBlockEntity;}
declare module "com.railwayteam.railways.mixin.client.AccessorWalkAnimationState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorWalkAnimationState$$Interface {
set "position"(value: float)
set "speedOld"(value: float)
get "speedOld"(): float
}

export class $AccessorWalkAnimationState implements $AccessorWalkAnimationState$$Interface {
 "setPosition"(arg0: float): void
 "setSpeedOld"(arg0: float): void
 "getSpeedOld"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorWalkAnimationState$$Type = ($AccessorWalkAnimationState);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorWalkAnimationState$$Original = $AccessorWalkAnimationState;}
declare module "com.railwayteam.railways.mixin.client.AccessorEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorEntity$$Interface {
get "XRot"(): float
set "XRot"(value: float)
set "YRot"(value: float)
get "YRot"(): float
}

export class $AccessorEntity implements $AccessorEntity$$Interface {
 "getXRot"(): float
 "setXRot"(arg0: float): void
 "setYRot"(arg0: float): void
 "getYRot"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorEntity$$Type = ($AccessorEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorEntity$$Original = $AccessorEntity;}
declare module "com.railwayteam.railways.mixin.client.AccessorLevelRenderer" {
import {$RenderBuffers} from "net.minecraft.client.renderer.RenderBuffers"
import {$Particle} from "net.minecraft.client.particle.Particle"
import {$ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"

export interface $AccessorLevelRenderer$$Interface {
}

export class $AccessorLevelRenderer implements $AccessorLevelRenderer$$Interface {
 "railways$getRenderBuffers"(): $RenderBuffers
 "callAddParticleInternal"(arg0: $ParticleOptions$$Type, arg1: boolean, arg2: boolean, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: double): $Particle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorLevelRenderer$$Type = ($AccessorLevelRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorLevelRenderer$$Original = $AccessorLevelRenderer;}
declare module "com.railwayteam.railways.mixin.conductor_possession.ServerPlayerAccessor" {
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export interface $ServerPlayerAccessor$$Interface {
get "camera"(): $Entity
set "camera"(value: $Entity$$Type)
}

export class $ServerPlayerAccessor implements $ServerPlayerAccessor$$Interface {
 "getCamera"(): $Entity
 "setCamera"(arg0: $Entity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayerAccessor$$Type = ($ServerPlayerAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerPlayerAccessor$$Original = $ServerPlayerAccessor;}
declare module "com.railwayteam.railways.mixin.conductor_possession.AccessorKeyMapping" {
import {$InputConstants$Key, $InputConstants$Key$$Type} from "com.mojang.blaze3d.platform.InputConstants$Key"

export interface $AccessorKeyMapping$$Interface {

(): $InputConstants$Key$$Type
get "key"(): $InputConstants$Key
}

export class $AccessorKeyMapping implements $AccessorKeyMapping$$Interface {
 "getKey"(): $InputConstants$Key
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorKeyMapping$$Type = (() => $InputConstants$Key$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorKeyMapping$$Original = $AccessorKeyMapping;}
declare module "com.railwayteam.railways.mixin.AccessorTrain" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorTrain$$Interface {
}

export class $AccessorTrain implements $AccessorTrain$$Interface {
 "railways$getStress"(): (double)[]
 "railways$setStress"(arg0: (double)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorTrain$$Type = ($AccessorTrain);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorTrain$$Original = $AccessorTrain;}
declare module "com.railwayteam.railways.mixin.AccessorTrackTargetingBehavior" {
import {$Direction$AxisDirection, $Direction$AxisDirection$$Type} from "net.minecraft.core.Direction$AxisDirection"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BezierTrackPointLocation, $BezierTrackPointLocation$$Type} from "com.simibubi.create.content.trains.track.BezierTrackPointLocation"
import {$TrackEdgePoint$$Type} from "com.simibubi.create.content.trains.signal.TrackEdgePoint"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $AccessorTrackTargetingBehavior$$Interface {
get "id"(): $UUID
get "rotatedDirection"(): $Vec3
set "rotatedDirection"(value: $Vec3$$Type)
set "id"(value: $UUID$$Type)
get "targetDirection"(): $Direction$AxisDirection
get "orthogonal"(): boolean
set "edgePoint"(value: $TrackEdgePoint$$Type)
get "targetTrack"(): $BlockPos
set "targetDirection"(value: $Direction$AxisDirection$$Type)
set "targetTrack"(value: $BlockPos$$Type)
get "targetBezier"(): $BezierTrackPointLocation
get "migrationData"(): $CompoundTag
set "migrationData"(value: $CompoundTag$$Type)
get "prevDirection"(): $Vec3
set "orthogonal"(value: boolean)
set "targetBezier"(value: $BezierTrackPointLocation$$Type)
set "prevDirection"(value: $Vec3$$Type)
}

export class $AccessorTrackTargetingBehavior implements $AccessorTrackTargetingBehavior$$Interface {
 "getId"(): $UUID
 "getRotatedDirection"(): $Vec3
 "setRotatedDirection"(arg0: $Vec3$$Type): void
 "setId"(arg0: $UUID$$Type): void
 "getTargetDirection"(): $Direction$AxisDirection
 "isOrthogonal"(): boolean
 "setEdgePoint"(arg0: $TrackEdgePoint$$Type): void
 "getTargetTrack"(): $BlockPos
 "setTargetDirection"(arg0: $Direction$AxisDirection$$Type): void
 "setTargetTrack"(arg0: $BlockPos$$Type): void
 "getTargetBezier"(): $BezierTrackPointLocation
 "getMigrationData"(): $CompoundTag
 "setMigrationData"(arg0: $CompoundTag$$Type): void
 "getPrevDirection"(): $Vec3
 "setOrthogonal"(arg0: boolean): void
 "setTargetBezier"(arg0: $BezierTrackPointLocation$$Type): void
 "setPrevDirection"(arg0: $Vec3$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorTrackTargetingBehavior$$Type = ($AccessorTrackTargetingBehavior);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorTrackTargetingBehavior$$Original = $AccessorTrackTargetingBehavior;}
declare module "com.railwayteam.railways.mixin.AccessorBlockEntityType" {
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Set, $Set$$Type} from "java.util.Set"

export interface $AccessorBlockEntityType$$Interface {
get "validBlocks"(): $Set<($Block)>
set "validBlocks"(value: $Set$$Type<($Block$$Type)>)
}

export class $AccessorBlockEntityType implements $AccessorBlockEntityType$$Interface {
 "getValidBlocks"(): $Set<($Block)>
 "setValidBlocks"(arg0: $Set$$Type<($Block$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorBlockEntityType$$Type = ($AccessorBlockEntityType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorBlockEntityType$$Original = $AccessorBlockEntityType;}
declare module "com.railwayteam.railways.mixin.client.AccessorLocalPlayer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorLocalPlayer$$Interface {
}

export class $AccessorLocalPlayer implements $AccessorLocalPlayer$$Interface {
 "railways$getXRotLast"(): float
 "railways$getYRotLast"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorLocalPlayer$$Type = ($AccessorLocalPlayer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorLocalPlayer$$Original = $AccessorLocalPlayer;}
