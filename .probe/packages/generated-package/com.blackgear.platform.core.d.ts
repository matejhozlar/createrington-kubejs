declare module "com.blackgear.platform.core.mixin.access.NearPlaneAccessor" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"

export interface $NearPlaneAccessor$$Interface {

(): $Vec3$$Type
get "forward"(): $Vec3
}

export class $NearPlaneAccessor implements $NearPlaneAccessor$$Interface {
 "getForward"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NearPlaneAccessor$$Type = (() => $Vec3$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NearPlaneAccessor$$Original = $NearPlaneAccessor;}
declare module "com.blackgear.platform.core.mixin.access.SensorTypeAccessor" {
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$SensorType} from "net.minecraft.world.entity.ai.sensing.SensorType"
import {$Sensor} from "net.minecraft.world.entity.ai.sensing.Sensor"

export interface $SensorTypeAccessor$$Interface {
}

export class $SensorTypeAccessor implements $SensorTypeAccessor$$Interface {
static "createSensorType"<T extends $Sensor<(object)>>(supplier: $Supplier$$Type<(T)>): $SensorType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SensorTypeAccessor$$Type = ($SensorTypeAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SensorTypeAccessor$$Original = $SensorTypeAccessor;}
declare module "com.blackgear.platform.core.mixin.access.PackRepositoryAccessor" {
import {$Set, $Set$$Type} from "java.util.Set"
import {$RepositorySource, $RepositorySource$$Type} from "net.minecraft.server.packs.repository.RepositorySource"

export interface $PackRepositoryAccessor$$Interface {
get "sources"(): $Set<($RepositorySource)>
set "sources"(value: $Set$$Type<($RepositorySource$$Type)>)
}

export class $PackRepositoryAccessor implements $PackRepositoryAccessor$$Interface {
 "getSources"(): $Set<($RepositorySource)>
 "setSources"(arg0: $Set$$Type<($RepositorySource$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PackRepositoryAccessor$$Type = ($PackRepositoryAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PackRepositoryAccessor$$Original = $PackRepositoryAccessor;}
declare module "com.blackgear.platform.core.mixin.access.ScreenAccessor" {
import {$GuiEventListener, $GuiEventListener$$Type} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$List} from "java.util.List"
import {$NarratableEntry} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$Renderable, $Renderable$$Type} from "net.minecraft.client.gui.components.Renderable"

export interface $ScreenAccessor$$Interface {
get "renderables"(): $List<($Renderable)>
get "narratables"(): $List<($NarratableEntry)>
}

export class $ScreenAccessor implements $ScreenAccessor$$Interface {
 "getRenderables"(): $List<($Renderable)>
 "getNarratables"(): $List<($NarratableEntry)>
 "callAddWidget"<T extends $GuiEventListener>(arg0: T): T
 "callAddRenderableOnly"<T extends $Renderable>(arg0: T): T
 "callAddRenderableWidget"<T extends $GuiEventListener>(arg0: T): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenAccessor$$Type = ($ScreenAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenAccessor$$Original = $ScreenAccessor;}
declare module "com.blackgear.platform.core.mixin.neoforge.access.LootTableAccessor" {
import {$List, $List$$Type} from "java.util.List"
import {$LootPool, $LootPool$$Type} from "net.minecraft.world.level.storage.loot.LootPool"

export interface $LootTableAccessor$$Interface {

(): $List$$Type<($LootPool$$Type)>
get "pools"(): $List<($LootPool)>
}

export class $LootTableAccessor implements $LootTableAccessor$$Interface {
 "getPools"(): $List<($LootPool)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootTableAccessor$$Type = (() => $List$$Type<($LootPool$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootTableAccessor$$Original = $LootTableAccessor;}
declare module "com.blackgear.platform.core.mixin.access.LevelResourceAccessor" {
import {$LevelResource} from "net.minecraft.world.level.storage.LevelResource"

export interface $LevelResourceAccessor$$Interface {
}

export class $LevelResourceAccessor implements $LevelResourceAccessor$$Interface {
static "createLevelResource"(string: StringJS): $LevelResource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelResourceAccessor$$Type = ($LevelResourceAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LevelResourceAccessor$$Original = $LevelResourceAccessor;}
declare module "com.blackgear.platform.core.mixin.access.SimpleParticleTypeAccessor" {
import {$SimpleParticleType} from "net.minecraft.core.particles.SimpleParticleType"

export interface $SimpleParticleTypeAccessor$$Interface {
}

export class $SimpleParticleTypeAccessor implements $SimpleParticleTypeAccessor$$Interface {
static "createSimpleParticleType"(overrideLimiter: boolean): $SimpleParticleType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleParticleTypeAccessor$$Type = ($SimpleParticleTypeAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleParticleTypeAccessor$$Original = $SimpleParticleTypeAccessor;}
declare module "com.blackgear.platform.core.mixin.access.CameraAccessor" {
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"

export interface $CameraAccessor$$Interface {

(): $BlockGetter$$Type
get "level"(): $BlockGetter
}

export class $CameraAccessor implements $CameraAccessor$$Interface {
 "getLevel"(): $BlockGetter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CameraAccessor$$Type = (() => $BlockGetter$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CameraAccessor$$Original = $CameraAccessor;}
declare module "com.blackgear.platform.core.mixin.access.ActivityAccessor" {
import {$Activity} from "net.minecraft.world.entity.schedule.Activity"

export interface $ActivityAccessor$$Interface {
}

export class $ActivityAccessor implements $ActivityAccessor$$Interface {
static "createActivity"(name: StringJS): $Activity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ActivityAccessor$$Type = ($ActivityAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ActivityAccessor$$Original = $ActivityAccessor;}
declare module "com.blackgear.platform.core.mixin.access.ItemRendererAccessor" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"

export interface $ItemRendererAccessor$$Interface {

(arg0: $BakedModel, arg1: $ItemStack, arg2: integer, arg3: integer, arg4: $PoseStack, arg5: $VertexConsumer): void
}

export class $ItemRendererAccessor implements $ItemRendererAccessor$$Interface {
 "callRenderModelLists"(arg0: $BakedModel$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: integer, arg4: $PoseStack$$Type, arg5: $VertexConsumer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemRendererAccessor$$Type = ((arg0: $BakedModel, arg1: $ItemStack, arg2: integer, arg3: integer, arg4: $PoseStack, arg5: $VertexConsumer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemRendererAccessor$$Original = $ItemRendererAccessor;}
