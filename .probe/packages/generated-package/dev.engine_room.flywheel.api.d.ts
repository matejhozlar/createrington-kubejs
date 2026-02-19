declare module "dev.engine_room.flywheel.api.instance.InstanceType" {
import {$Layout} from "dev.engine_room.flywheel.api.layout.Layout"
import {$InstanceWriter} from "dev.engine_room.flywheel.api.instance.InstanceWriter"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Instance} from "dev.engine_room.flywheel.api.instance.Instance"
import {$InstanceHandle$$Type} from "dev.engine_room.flywheel.api.instance.InstanceHandle"

export interface $InstanceType$$Interface<I extends $Instance> {
}

export class $InstanceType<I extends $Instance> implements $InstanceType$$Interface {
 "cullShader"(): $ResourceLocation
 "writer"(): $InstanceWriter<(I)>
 "create"(arg0: $InstanceHandle$$Type): I
 "layout"(): $Layout
 "vertexShader"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InstanceType$$Type<I> = ($InstanceType<(I)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InstanceType$$Original<I> = $InstanceType<(I)>;}
declare module "dev.engine_room.flywheel.api.visual.Visual" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Visual$$Interface {
}

export class $Visual implements $Visual$$Interface {
 "update"(arg0: float): void
 "delete"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Visual$$Type = ($Visual);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Visual$$Original = $Visual;}
declare module "dev.engine_room.flywheel.api.visualization.VisualizationContext" {
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$VisualEmbedding} from "dev.engine_room.flywheel.api.visualization.VisualEmbedding"
import {$InstancerProvider} from "dev.engine_room.flywheel.api.instance.InstancerProvider"

export interface $VisualizationContext$$Interface {
}

export class $VisualizationContext implements $VisualizationContext$$Interface {
 "renderOrigin"(): $Vec3i
 "instancerProvider"(): $InstancerProvider
 "createEmbedding"(arg0: $Vec3i$$Type): $VisualEmbedding
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VisualizationContext$$Type = ($VisualizationContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VisualizationContext$$Original = $VisualizationContext;}
declare module "dev.engine_room.flywheel.api.visual.EntityVisual" {
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$Visual$$Interface} from "dev.engine_room.flywheel.api.visual.Visual"

export interface $EntityVisual$$Interface<T extends $Entity> extends $Visual$$Interface {
}

export class $EntityVisual<T extends $Entity> implements $EntityVisual$$Interface {
 "update"(arg0: float): void
 "delete"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityVisual$$Type<T> = ($EntityVisual<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityVisual$$Original<T> = $EntityVisual<(T)>;}
declare module "dev.engine_room.flywheel.api.instance.InstanceHandle" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $InstanceHandle$$Interface {
get "visible"(): boolean
set "visible"(value: boolean)
get "changed"(): void
get "deleted"(): void
}

export class $InstanceHandle implements $InstanceHandle$$Interface {
 "isVisible"(): boolean
 "setVisible"(arg0: boolean): void
 "setChanged"(): void
 "setDeleted"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InstanceHandle$$Type = ($InstanceHandle);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InstanceHandle$$Original = $InstanceHandle;}
declare module "dev.engine_room.flywheel.api.visual.BlockEntityVisual" {
import {$Instance$$Type} from "dev.engine_room.flywheel.api.instance.Instance"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$Visual$$Interface} from "dev.engine_room.flywheel.api.visual.Visual"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $BlockEntityVisual$$Interface<T extends $BlockEntity> extends $Visual$$Interface {
}

export class $BlockEntityVisual<T extends $BlockEntity> implements $BlockEntityVisual$$Interface {
 "collectCrumblingInstances"(arg0: $Consumer$$Type<($Instance)>): void
 "update"(arg0: float): void
 "delete"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityVisual$$Type<T> = ($BlockEntityVisual<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEntityVisual$$Original<T> = $BlockEntityVisual<(T)>;}
declare module "dev.engine_room.flywheel.api.instance.InstancerProvider" {
import {$InstanceType, $InstanceType$$Type} from "dev.engine_room.flywheel.api.instance.InstanceType"
import {$Instancer, $Instancer$$Type} from "dev.engine_room.flywheel.api.instance.Instancer"
import {$Instance} from "dev.engine_room.flywheel.api.instance.Instance"
import {$Model, $Model$$Type} from "dev.engine_room.flywheel.api.model.Model"

export interface $InstancerProvider$$Interface {

(arg0: $InstanceType<(I)>, arg1: $Model, arg2: integer): $Instancer$$Type<(I)>
}

export class $InstancerProvider implements $InstancerProvider$$Interface {
 "instancer"<I extends $Instance>(arg0: $InstanceType$$Type<(I)>, arg1: $Model$$Type, arg2: integer): $Instancer<(I)>
 "instancer"<I extends $Instance>(type: $InstanceType$$Type<(I)>, model: $Model$$Type): $Instancer<(I)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InstancerProvider$$Type = ((arg0: $InstanceType<(I)>, arg1: $Model, arg2: integer) => $Instancer$$Type<(I)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InstancerProvider$$Original = $InstancerProvider;}
declare module "dev.engine_room.flywheel.api.instance.Instancer" {
import {$Instance, $Instance$$Type} from "dev.engine_room.flywheel.api.instance.Instance"

export interface $Instancer$$Interface<I extends $Instance> {
}

export class $Instancer<I extends $Instance> implements $Instancer$$Interface {
 "createInstance"(): I
 "stealInstance"(arg0: I): void
 "createInstances"(arr: (I)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Instancer$$Type<I> = ($Instancer<(I)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Instancer$$Original<I> = $Instancer<(I)>;}
declare module "dev.engine_room.flywheel.api.visualization.VisualEmbedding" {
import {$Matrix4fc$$Type} from "org.joml.Matrix4fc"
import {$Matrix3fc$$Type} from "org.joml.Matrix3fc"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$InstancerProvider} from "dev.engine_room.flywheel.api.instance.InstancerProvider"
import {$VisualizationContext$$Interface} from "dev.engine_room.flywheel.api.visualization.VisualizationContext"

export interface $VisualEmbedding$$Interface extends $VisualizationContext$$Interface {
}

export class $VisualEmbedding implements $VisualEmbedding$$Interface {
 "delete"(): void
 "transforms"(arg0: $Matrix4fc$$Type, arg1: $Matrix3fc$$Type): void
 "renderOrigin"(): $Vec3i
 "instancerProvider"(): $InstancerProvider
 "createEmbedding"(arg0: $Vec3i$$Type): $VisualEmbedding
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VisualEmbedding$$Type = ($VisualEmbedding);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VisualEmbedding$$Original = $VisualEmbedding;}
declare module "dev.engine_room.flywheel.api.visualization.EntityVisualizer" {
import {$VisualizationContext$$Type} from "dev.engine_room.flywheel.api.visualization.VisualizationContext"
import {$EntityVisual} from "dev.engine_room.flywheel.api.visual.EntityVisual"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export interface $EntityVisualizer$$Interface<T extends $Entity> {
}

export class $EntityVisualizer<T extends $Entity> implements $EntityVisualizer$$Interface {
 "createVisual"(arg0: $VisualizationContext$$Type, arg1: T, arg2: float): $EntityVisual<(T)>
 "skipVanillaRender"(arg0: T): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityVisualizer$$Type<T> = ($EntityVisualizer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityVisualizer$$Original<T> = $EntityVisualizer<(T)>;}
declare module "dev.engine_room.flywheel.api.instance.Instance" {
import {$InstanceType} from "dev.engine_room.flywheel.api.instance.InstanceType"
import {$InstanceHandle} from "dev.engine_room.flywheel.api.instance.InstanceHandle"

export interface $Instance$$Interface {
set "visible"(value: boolean)
get "changed"(): void
}

export class $Instance implements $Instance$$Interface {
 "type"(): $InstanceType<(never)>
 "delete"(): void
 "handle"(): $InstanceHandle
 "setVisible"(visible: boolean): void
 "setChanged"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Instance$$Type = ($Instance);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Instance$$Original = $Instance;}
declare module "dev.engine_room.flywheel.api.model.Model" {
import {$List} from "java.util.List"
import {$Vector4fc} from "org.joml.Vector4fc"
import {$Model$ConfiguredMesh} from "dev.engine_room.flywheel.api.model.Model$ConfiguredMesh"

export interface $Model$$Interface {
}

export class $Model implements $Model$$Interface {
 "meshes"(): $List<($Model$ConfiguredMesh)>
 "boundingSphere"(): $Vector4fc
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Model$$Type = ($Model);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Model$$Original = $Model;}
declare module "dev.engine_room.flywheel.api.visualization.BlockEntityVisualizer" {
import {$BlockEntityVisual} from "dev.engine_room.flywheel.api.visual.BlockEntityVisual"
import {$VisualizationContext$$Type} from "dev.engine_room.flywheel.api.visualization.VisualizationContext"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $BlockEntityVisualizer$$Interface<T extends $BlockEntity> {
}

export class $BlockEntityVisualizer<T extends $BlockEntity> implements $BlockEntityVisualizer$$Interface {
 "createVisual"(arg0: $VisualizationContext$$Type, arg1: T, arg2: float): $BlockEntityVisual<(T)>
 "skipVanillaRender"(arg0: T): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityVisualizer$$Type<T> = ($BlockEntityVisualizer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEntityVisualizer$$Original<T> = $BlockEntityVisualizer<(T)>;}
