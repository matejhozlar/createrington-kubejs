declare module "software.bernie.geckolib.event.GeoRenderEvent$Block$Pre" {
import {$GeoRenderer} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$GeoRenderEvent$Block} from "software.bernie.geckolib.event.GeoRenderEvent$Block"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$GeoBlockRenderer$$Type} from "software.bernie.geckolib.renderer.GeoBlockRenderer"
import {$BakedGeoModel, $BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"

export class $GeoRenderEvent$Block$Pre extends $GeoRenderEvent$Block implements $ICancellableEvent$$Interface {
constructor(arg0: $GeoBlockRenderer$$Type<(never)>, arg1: $PoseStack$$Type, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: float, arg5: integer)

public "getPackedLight"(): integer
public "getModel"(): $BakedGeoModel
public "getPartialTick"(): float
public "getRenderer"(): $GeoRenderer
public "getPoseStack"(): $PoseStack
public "getBufferSource"(): $MultiBufferSource
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "packedLight"(): integer
get "model"(): $BakedGeoModel
get "partialTick"(): float
get "renderer"(): $GeoRenderer
get "poseStack"(): $PoseStack
get "bufferSource"(): $MultiBufferSource
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$Block$Pre$$Type = ($GeoRenderEvent$Block$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoRenderEvent$Block$Pre$$Original = $GeoRenderEvent$Block$Pre;}
declare module "software.bernie.geckolib.event.GeoRenderEvent$Item$Post" {
import {$GeoRenderEvent$Item} from "software.bernie.geckolib.event.GeoRenderEvent$Item"
import {$GeoRenderer} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$GeoItemRenderer$$Type} from "software.bernie.geckolib.renderer.GeoItemRenderer"
import {$BakedGeoModel, $BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"

export class $GeoRenderEvent$Item$Post extends $GeoRenderEvent$Item {
constructor(arg0: $GeoItemRenderer$$Type<(never)>, arg1: $PoseStack$$Type, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: float, arg5: integer)

public "getPackedLight"(): integer
public "getModel"(): $BakedGeoModel
public "getPartialTick"(): float
public "getRenderer"(): $GeoRenderer
public "getPoseStack"(): $PoseStack
public "getBufferSource"(): $MultiBufferSource
get "packedLight"(): integer
get "model"(): $BakedGeoModel
get "partialTick"(): float
get "renderer"(): $GeoRenderer
get "poseStack"(): $PoseStack
get "bufferSource"(): $MultiBufferSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$Item$Post$$Type = ($GeoRenderEvent$Item$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoRenderEvent$Item$Post$$Original = $GeoRenderEvent$Item$Post;}
declare module "software.bernie.geckolib.event.GeoRenderEvent$Entity" {
import {$GeoRenderEvent$$Interface} from "software.bernie.geckolib.event.GeoRenderEvent"
import {$Event} from "net.neoforged.bus.api.Event"
import {$GeoEntityRenderer, $GeoEntityRenderer$$Type} from "software.bernie.geckolib.renderer.GeoEntityRenderer"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $GeoRenderEvent$Entity extends $Event implements $GeoRenderEvent$$Interface {
constructor(arg0: $GeoEntityRenderer$$Type<(never)>)

public "getEntity"(): $Entity
public "getRenderer"(): $GeoEntityRenderer<(never)>
get "entity"(): $Entity
get "renderer"(): $GeoEntityRenderer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$Entity$$Type = ($GeoRenderEvent$Entity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoRenderEvent$Entity$$Original = $GeoRenderEvent$Entity;}
declare module "software.bernie.geckolib.event.GeoRenderEvent$Object$Pre" {
import {$GeoRenderer} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$GeoRenderEvent$Object} from "software.bernie.geckolib.event.GeoRenderEvent$Object"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$GeoObjectRenderer$$Type} from "software.bernie.geckolib.renderer.GeoObjectRenderer"
import {$BakedGeoModel, $BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"

export class $GeoRenderEvent$Object$Pre extends $GeoRenderEvent$Object implements $ICancellableEvent$$Interface {
constructor(arg0: $GeoObjectRenderer$$Type<(never)>, arg1: $PoseStack$$Type, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: float, arg5: integer)

public "getPackedLight"(): integer
public "getModel"(): $BakedGeoModel
public "getPartialTick"(): float
public "getRenderer"(): $GeoRenderer
public "getPoseStack"(): $PoseStack
public "getBufferSource"(): $MultiBufferSource
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "packedLight"(): integer
get "model"(): $BakedGeoModel
get "partialTick"(): float
get "renderer"(): $GeoRenderer
get "poseStack"(): $PoseStack
get "bufferSource"(): $MultiBufferSource
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$Object$Pre$$Type = ($GeoRenderEvent$Object$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoRenderEvent$Object$Pre$$Original = $GeoRenderEvent$Object$Pre;}
declare module "software.bernie.geckolib.event.GeoRenderEvent$Armor$Post" {
import {$GeoRenderer} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$GeoArmorRenderer$$Type} from "software.bernie.geckolib.renderer.GeoArmorRenderer"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$GeoRenderEvent$Armor} from "software.bernie.geckolib.event.GeoRenderEvent$Armor"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$BakedGeoModel, $BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"

export class $GeoRenderEvent$Armor$Post extends $GeoRenderEvent$Armor {
constructor(arg0: $GeoArmorRenderer$$Type<(never)>, arg1: $PoseStack$$Type, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: float, arg5: integer)

public "getPackedLight"(): integer
public "getModel"(): $BakedGeoModel
public "getPartialTick"(): float
public "getRenderer"(): $GeoRenderer
public "getPoseStack"(): $PoseStack
public "getBufferSource"(): $MultiBufferSource
get "packedLight"(): integer
get "model"(): $BakedGeoModel
get "partialTick"(): float
get "renderer"(): $GeoRenderer
get "poseStack"(): $PoseStack
get "bufferSource"(): $MultiBufferSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$Armor$Post$$Type = ($GeoRenderEvent$Armor$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoRenderEvent$Armor$Post$$Original = $GeoRenderEvent$Armor$Post;}
declare module "software.bernie.geckolib.event.GeoRenderEvent$ReplacedEntity$CompileRenderLayers" {
import {$GeoRenderer} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$GeoRenderEvent$ReplacedEntity} from "software.bernie.geckolib.event.GeoRenderEvent$ReplacedEntity"
import {$GeoRenderLayer$$Type} from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"
import {$GeoReplacedEntityRenderer$$Type} from "software.bernie.geckolib.renderer.GeoReplacedEntityRenderer"

export class $GeoRenderEvent$ReplacedEntity$CompileRenderLayers extends $GeoRenderEvent$ReplacedEntity {
constructor(arg0: $GeoReplacedEntityRenderer$$Type<(never), (never)>)

public "getRenderer"(): $GeoRenderer
public "addLayer"(arg0: $GeoRenderLayer$$Type): void
get "renderer"(): $GeoRenderer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$ReplacedEntity$CompileRenderLayers$$Type = ($GeoRenderEvent$ReplacedEntity$CompileRenderLayers);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoRenderEvent$ReplacedEntity$CompileRenderLayers$$Original = $GeoRenderEvent$ReplacedEntity$CompileRenderLayers;}
declare module "software.bernie.geckolib.event.GeoRenderEvent$Object$CompileRenderLayers" {
import {$GeoRenderer} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$GeoRenderEvent$Object} from "software.bernie.geckolib.event.GeoRenderEvent$Object"
import {$GeoObjectRenderer$$Type} from "software.bernie.geckolib.renderer.GeoObjectRenderer"
import {$GeoRenderLayer$$Type} from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"

export class $GeoRenderEvent$Object$CompileRenderLayers extends $GeoRenderEvent$Object {
constructor(arg0: $GeoObjectRenderer$$Type<(never)>)

public "getRenderer"(): $GeoRenderer
public "addLayer"(arg0: $GeoRenderLayer$$Type): void
get "renderer"(): $GeoRenderer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$Object$CompileRenderLayers$$Type = ($GeoRenderEvent$Object$CompileRenderLayers);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoRenderEvent$Object$CompileRenderLayers$$Original = $GeoRenderEvent$Object$CompileRenderLayers;}
declare module "software.bernie.geckolib.event.GeoRenderEvent$Item$CompileRenderLayers" {
import {$GeoRenderEvent$Item} from "software.bernie.geckolib.event.GeoRenderEvent$Item"
import {$GeoRenderer} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$GeoRenderLayer$$Type} from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"
import {$GeoItemRenderer$$Type} from "software.bernie.geckolib.renderer.GeoItemRenderer"

export class $GeoRenderEvent$Item$CompileRenderLayers extends $GeoRenderEvent$Item {
constructor(arg0: $GeoItemRenderer$$Type<(never)>)

public "getRenderer"(): $GeoRenderer
public "addLayer"(arg0: $GeoRenderLayer$$Type): void
get "renderer"(): $GeoRenderer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$Item$CompileRenderLayers$$Type = ($GeoRenderEvent$Item$CompileRenderLayers);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoRenderEvent$Item$CompileRenderLayers$$Original = $GeoRenderEvent$Item$CompileRenderLayers;}
declare module "software.bernie.geckolib.event.GeoRenderEvent$Block$CompileRenderLayers" {
import {$GeoRenderer} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$GeoRenderEvent$Block} from "software.bernie.geckolib.event.GeoRenderEvent$Block"
import {$GeoBlockRenderer$$Type} from "software.bernie.geckolib.renderer.GeoBlockRenderer"
import {$GeoRenderLayer$$Type} from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"

export class $GeoRenderEvent$Block$CompileRenderLayers extends $GeoRenderEvent$Block {
constructor(arg0: $GeoBlockRenderer$$Type<(never)>)

public "getRenderer"(): $GeoRenderer
public "addLayer"(arg0: $GeoRenderLayer$$Type): void
get "renderer"(): $GeoRenderer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$Block$CompileRenderLayers$$Type = ($GeoRenderEvent$Block$CompileRenderLayers);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoRenderEvent$Block$CompileRenderLayers$$Original = $GeoRenderEvent$Block$CompileRenderLayers;}
declare module "software.bernie.geckolib.event.GeoRenderEvent$ReplacedEntity$Post" {
import {$GeoRenderer} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$GeoRenderEvent$ReplacedEntity} from "software.bernie.geckolib.event.GeoRenderEvent$ReplacedEntity"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$GeoReplacedEntityRenderer$$Type} from "software.bernie.geckolib.renderer.GeoReplacedEntityRenderer"
import {$BakedGeoModel, $BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"

export class $GeoRenderEvent$ReplacedEntity$Post extends $GeoRenderEvent$ReplacedEntity {
constructor(arg0: $GeoReplacedEntityRenderer$$Type<(never), (never)>, arg1: $PoseStack$$Type, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: float, arg5: integer)

public "getPackedLight"(): integer
public "getModel"(): $BakedGeoModel
public "getPartialTick"(): float
public "getRenderer"(): $GeoRenderer
public "getPoseStack"(): $PoseStack
public "getBufferSource"(): $MultiBufferSource
get "packedLight"(): integer
get "model"(): $BakedGeoModel
get "partialTick"(): float
get "renderer"(): $GeoRenderer
get "poseStack"(): $PoseStack
get "bufferSource"(): $MultiBufferSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$ReplacedEntity$Post$$Type = ($GeoRenderEvent$ReplacedEntity$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoRenderEvent$ReplacedEntity$Post$$Original = $GeoRenderEvent$ReplacedEntity$Post;}
declare module "software.bernie.geckolib.event.GeoRenderEvent$Entity$CompileRenderLayers" {
import {$GeoRenderer} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$GeoRenderEvent$Entity} from "software.bernie.geckolib.event.GeoRenderEvent$Entity"
import {$GeoEntityRenderer$$Type} from "software.bernie.geckolib.renderer.GeoEntityRenderer"
import {$GeoRenderLayer$$Type} from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"

export class $GeoRenderEvent$Entity$CompileRenderLayers extends $GeoRenderEvent$Entity {
constructor(arg0: $GeoEntityRenderer$$Type<(never)>)

public "getRenderer"(): $GeoRenderer
public "addLayer"(arg0: $GeoRenderLayer$$Type): void
get "renderer"(): $GeoRenderer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$Entity$CompileRenderLayers$$Type = ($GeoRenderEvent$Entity$CompileRenderLayers);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoRenderEvent$Entity$CompileRenderLayers$$Original = $GeoRenderEvent$Entity$CompileRenderLayers;}
declare module "software.bernie.geckolib.event.GeoRenderEvent$ReplacedEntity$Pre" {
import {$GeoRenderer} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$GeoRenderEvent$ReplacedEntity} from "software.bernie.geckolib.event.GeoRenderEvent$ReplacedEntity"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$GeoReplacedEntityRenderer$$Type} from "software.bernie.geckolib.renderer.GeoReplacedEntityRenderer"
import {$BakedGeoModel, $BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"

export class $GeoRenderEvent$ReplacedEntity$Pre extends $GeoRenderEvent$ReplacedEntity implements $ICancellableEvent$$Interface {
constructor(arg0: $GeoReplacedEntityRenderer$$Type<(never), (never)>, arg1: $PoseStack$$Type, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: float, arg5: integer)

public "getPackedLight"(): integer
public "getModel"(): $BakedGeoModel
public "getPartialTick"(): float
public "getRenderer"(): $GeoRenderer
public "getPoseStack"(): $PoseStack
public "getBufferSource"(): $MultiBufferSource
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "packedLight"(): integer
get "model"(): $BakedGeoModel
get "partialTick"(): float
get "renderer"(): $GeoRenderer
get "poseStack"(): $PoseStack
get "bufferSource"(): $MultiBufferSource
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$ReplacedEntity$Pre$$Type = ($GeoRenderEvent$ReplacedEntity$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoRenderEvent$ReplacedEntity$Pre$$Original = $GeoRenderEvent$ReplacedEntity$Pre;}
declare module "software.bernie.geckolib.event.GeoRenderEvent" {
import {$GeoRenderer, $GeoRenderer$$Type} from "software.bernie.geckolib.renderer.GeoRenderer"

export interface $GeoRenderEvent$$Interface {

(): $GeoRenderer$$Type<(never)>
get "renderer"(): $GeoRenderer<(never)>
}

export class $GeoRenderEvent implements $GeoRenderEvent$$Interface {
 "getRenderer"(): $GeoRenderer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$$Type = (() => $GeoRenderer$$Type<(never)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoRenderEvent$$Original = $GeoRenderEvent;}
declare module "software.bernie.geckolib.event.GeoRenderEvent$Item$Pre" {
import {$GeoRenderEvent$Item} from "software.bernie.geckolib.event.GeoRenderEvent$Item"
import {$GeoRenderer} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$GeoItemRenderer$$Type} from "software.bernie.geckolib.renderer.GeoItemRenderer"
import {$BakedGeoModel, $BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"

export class $GeoRenderEvent$Item$Pre extends $GeoRenderEvent$Item implements $ICancellableEvent$$Interface {
constructor(arg0: $GeoItemRenderer$$Type<(never)>, arg1: $PoseStack$$Type, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: float, arg5: integer)

public "getPackedLight"(): integer
public "getModel"(): $BakedGeoModel
public "getPartialTick"(): float
public "getRenderer"(): $GeoRenderer
public "getPoseStack"(): $PoseStack
public "getBufferSource"(): $MultiBufferSource
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "packedLight"(): integer
get "model"(): $BakedGeoModel
get "partialTick"(): float
get "renderer"(): $GeoRenderer
get "poseStack"(): $PoseStack
get "bufferSource"(): $MultiBufferSource
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$Item$Pre$$Type = ($GeoRenderEvent$Item$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoRenderEvent$Item$Pre$$Original = $GeoRenderEvent$Item$Pre;}
declare module "software.bernie.geckolib.event.GeoRenderEvent$Object$Post" {
import {$GeoRenderer} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$GeoRenderEvent$Object} from "software.bernie.geckolib.event.GeoRenderEvent$Object"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$GeoObjectRenderer$$Type} from "software.bernie.geckolib.renderer.GeoObjectRenderer"
import {$BakedGeoModel, $BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"

export class $GeoRenderEvent$Object$Post extends $GeoRenderEvent$Object {
constructor(arg0: $GeoObjectRenderer$$Type<(never)>, arg1: $PoseStack$$Type, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: float, arg5: integer)

public "getPackedLight"(): integer
public "getModel"(): $BakedGeoModel
public "getPartialTick"(): float
public "getRenderer"(): $GeoRenderer
public "getPoseStack"(): $PoseStack
public "getBufferSource"(): $MultiBufferSource
get "packedLight"(): integer
get "model"(): $BakedGeoModel
get "partialTick"(): float
get "renderer"(): $GeoRenderer
get "poseStack"(): $PoseStack
get "bufferSource"(): $MultiBufferSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$Object$Post$$Type = ($GeoRenderEvent$Object$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoRenderEvent$Object$Post$$Original = $GeoRenderEvent$Object$Post;}
declare module "software.bernie.geckolib.event.GeoRenderEvent$Armor$CompileRenderLayers" {
import {$GeoRenderer} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$GeoArmorRenderer$$Type} from "software.bernie.geckolib.renderer.GeoArmorRenderer"
import {$GeoRenderEvent$Armor} from "software.bernie.geckolib.event.GeoRenderEvent$Armor"
import {$GeoRenderLayer$$Type} from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"

export class $GeoRenderEvent$Armor$CompileRenderLayers extends $GeoRenderEvent$Armor {
constructor(arg0: $GeoArmorRenderer$$Type<(never)>)

public "getRenderer"(): $GeoRenderer
public "addLayer"(arg0: $GeoRenderLayer$$Type): void
get "renderer"(): $GeoRenderer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$Armor$CompileRenderLayers$$Type = ($GeoRenderEvent$Armor$CompileRenderLayers);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoRenderEvent$Armor$CompileRenderLayers$$Original = $GeoRenderEvent$Armor$CompileRenderLayers;}
declare module "software.bernie.geckolib.event.GeoRenderEvent$Armor" {
import {$GeoRenderEvent$$Interface} from "software.bernie.geckolib.event.GeoRenderEvent"
import {$GeoArmorRenderer, $GeoArmorRenderer$$Type} from "software.bernie.geckolib.renderer.GeoArmorRenderer"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$EquipmentSlot} from "net.minecraft.world.entity.EquipmentSlot"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $GeoRenderEvent$Armor extends $Event implements $GeoRenderEvent$$Interface {
constructor(arg0: $GeoArmorRenderer$$Type<(never)>)

public "getEntity"(): $Entity
public "getItemStack"(): $ItemStack
public "getRenderer"(): $GeoArmorRenderer<(never)>
public "getEquipmentSlot"(): $EquipmentSlot
get "entity"(): $Entity
get "itemStack"(): $ItemStack
get "renderer"(): $GeoArmorRenderer<(never)>
get "equipmentSlot"(): $EquipmentSlot
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$Armor$$Type = ($GeoRenderEvent$Armor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoRenderEvent$Armor$$Original = $GeoRenderEvent$Armor;}
declare module "software.bernie.geckolib.event.GeoRenderEvent$Object" {
import {$GeoRenderEvent$$Interface} from "software.bernie.geckolib.event.GeoRenderEvent"
import {$Event} from "net.neoforged.bus.api.Event"
import {$GeoObjectRenderer, $GeoObjectRenderer$$Type} from "software.bernie.geckolib.renderer.GeoObjectRenderer"

export class $GeoRenderEvent$Object extends $Event implements $GeoRenderEvent$$Interface {
constructor(arg0: $GeoObjectRenderer$$Type<(never)>)

public "getRenderer"(): $GeoObjectRenderer<(never)>
get "renderer"(): $GeoObjectRenderer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$Object$$Type = ($GeoRenderEvent$Object);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoRenderEvent$Object$$Original = $GeoRenderEvent$Object;}
declare module "software.bernie.geckolib.event.GeoRenderEvent$ReplacedEntity" {
import {$GeoRenderEvent$$Interface} from "software.bernie.geckolib.event.GeoRenderEvent"
import {$GeoRenderer} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$Event} from "net.neoforged.bus.api.Event"
import {$GeoReplacedEntityRenderer$$Type} from "software.bernie.geckolib.renderer.GeoReplacedEntityRenderer"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $GeoRenderEvent$ReplacedEntity extends $Event implements $GeoRenderEvent$$Interface {
constructor(arg0: $GeoReplacedEntityRenderer$$Type<(never), (never)>)

public "getRenderer"(): $GeoRenderer
public "getReplacedEntity"(): $Entity
get "renderer"(): $GeoRenderer
get "replacedEntity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$ReplacedEntity$$Type = ($GeoRenderEvent$ReplacedEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoRenderEvent$ReplacedEntity$$Original = $GeoRenderEvent$ReplacedEntity;}
declare module "software.bernie.geckolib.event.GeoRenderEvent$Block" {
import {$GeoRenderEvent$$Interface} from "software.bernie.geckolib.event.GeoRenderEvent"
import {$Event} from "net.neoforged.bus.api.Event"
import {$GeoBlockRenderer, $GeoBlockRenderer$$Type} from "software.bernie.geckolib.renderer.GeoBlockRenderer"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $GeoRenderEvent$Block extends $Event implements $GeoRenderEvent$$Interface {
constructor(arg0: $GeoBlockRenderer$$Type<(never)>)

public "getBlockEntity"(): $BlockEntity
public "getRenderer"(): $GeoBlockRenderer<(never)>
get "blockEntity"(): $BlockEntity
get "renderer"(): $GeoBlockRenderer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$Block$$Type = ($GeoRenderEvent$Block);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoRenderEvent$Block$$Original = $GeoRenderEvent$Block;}
declare module "software.bernie.geckolib.event.GeoRenderEvent$Block$Post" {
import {$GeoRenderer} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$GeoRenderEvent$Block} from "software.bernie.geckolib.event.GeoRenderEvent$Block"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$GeoBlockRenderer$$Type} from "software.bernie.geckolib.renderer.GeoBlockRenderer"
import {$BakedGeoModel, $BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"

export class $GeoRenderEvent$Block$Post extends $GeoRenderEvent$Block {
constructor(arg0: $GeoBlockRenderer$$Type<(never)>, arg1: $PoseStack$$Type, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: float, arg5: integer)

public "getPackedLight"(): integer
public "getModel"(): $BakedGeoModel
public "getPartialTick"(): float
public "getRenderer"(): $GeoRenderer
public "getPoseStack"(): $PoseStack
public "getBufferSource"(): $MultiBufferSource
get "packedLight"(): integer
get "model"(): $BakedGeoModel
get "partialTick"(): float
get "renderer"(): $GeoRenderer
get "poseStack"(): $PoseStack
get "bufferSource"(): $MultiBufferSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$Block$Post$$Type = ($GeoRenderEvent$Block$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoRenderEvent$Block$Post$$Original = $GeoRenderEvent$Block$Post;}
declare module "software.bernie.geckolib.event.GeoRenderEvent$Armor$Pre" {
import {$GeoRenderer} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$GeoArmorRenderer$$Type} from "software.bernie.geckolib.renderer.GeoArmorRenderer"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$GeoRenderEvent$Armor} from "software.bernie.geckolib.event.GeoRenderEvent$Armor"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$BakedGeoModel, $BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"

export class $GeoRenderEvent$Armor$Pre extends $GeoRenderEvent$Armor implements $ICancellableEvent$$Interface {
constructor(arg0: $GeoArmorRenderer$$Type<(never)>, arg1: $PoseStack$$Type, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: float, arg5: integer)

public "getPackedLight"(): integer
public "getModel"(): $BakedGeoModel
public "getPartialTick"(): float
public "getRenderer"(): $GeoRenderer
public "getPoseStack"(): $PoseStack
public "getBufferSource"(): $MultiBufferSource
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "packedLight"(): integer
get "model"(): $BakedGeoModel
get "partialTick"(): float
get "renderer"(): $GeoRenderer
get "poseStack"(): $PoseStack
get "bufferSource"(): $MultiBufferSource
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$Armor$Pre$$Type = ($GeoRenderEvent$Armor$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoRenderEvent$Armor$Pre$$Original = $GeoRenderEvent$Armor$Pre;}
declare module "software.bernie.geckolib.event.GeoRenderEvent$Item" {
import {$GeoRenderEvent$$Interface} from "software.bernie.geckolib.event.GeoRenderEvent"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Event} from "net.neoforged.bus.api.Event"
import {$GeoItemRenderer, $GeoItemRenderer$$Type} from "software.bernie.geckolib.renderer.GeoItemRenderer"

export class $GeoRenderEvent$Item extends $Event implements $GeoRenderEvent$$Interface {
constructor(arg0: $GeoItemRenderer$$Type<(never)>)

public "getItemStack"(): $ItemStack
public "getRenderer"(): $GeoItemRenderer<(never)>
get "itemStack"(): $ItemStack
get "renderer"(): $GeoItemRenderer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$Item$$Type = ($GeoRenderEvent$Item);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoRenderEvent$Item$$Original = $GeoRenderEvent$Item;}
declare module "software.bernie.geckolib.event.GeoRenderEvent$Entity$Pre" {
import {$GeoRenderer} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$GeoRenderEvent$Entity} from "software.bernie.geckolib.event.GeoRenderEvent$Entity"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$GeoEntityRenderer$$Type} from "software.bernie.geckolib.renderer.GeoEntityRenderer"
import {$BakedGeoModel, $BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"

export class $GeoRenderEvent$Entity$Pre extends $GeoRenderEvent$Entity implements $ICancellableEvent$$Interface {
constructor(arg0: $GeoEntityRenderer$$Type<(never)>, arg1: $PoseStack$$Type, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: float, arg5: integer)

public "getPackedLight"(): integer
public "getModel"(): $BakedGeoModel
public "getPartialTick"(): float
public "getRenderer"(): $GeoRenderer
public "getPoseStack"(): $PoseStack
public "getBufferSource"(): $MultiBufferSource
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "packedLight"(): integer
get "model"(): $BakedGeoModel
get "partialTick"(): float
get "renderer"(): $GeoRenderer
get "poseStack"(): $PoseStack
get "bufferSource"(): $MultiBufferSource
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$Entity$Pre$$Type = ($GeoRenderEvent$Entity$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoRenderEvent$Entity$Pre$$Original = $GeoRenderEvent$Entity$Pre;}
declare module "software.bernie.geckolib.event.GeoRenderEvent$Entity$Post" {
import {$GeoRenderer} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$GeoRenderEvent$Entity} from "software.bernie.geckolib.event.GeoRenderEvent$Entity"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$GeoEntityRenderer$$Type} from "software.bernie.geckolib.renderer.GeoEntityRenderer"
import {$BakedGeoModel, $BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"

export class $GeoRenderEvent$Entity$Post extends $GeoRenderEvent$Entity {
constructor(arg0: $GeoEntityRenderer$$Type<(never)>, arg1: $PoseStack$$Type, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: float, arg5: integer)

public "getPackedLight"(): integer
public "getModel"(): $BakedGeoModel
public "getPartialTick"(): float
public "getRenderer"(): $GeoRenderer
public "getPoseStack"(): $PoseStack
public "getBufferSource"(): $MultiBufferSource
get "packedLight"(): integer
get "model"(): $BakedGeoModel
get "partialTick"(): float
get "renderer"(): $GeoRenderer
get "poseStack"(): $PoseStack
get "bufferSource"(): $MultiBufferSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$Entity$Post$$Type = ($GeoRenderEvent$Entity$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoRenderEvent$Entity$Post$$Original = $GeoRenderEvent$Entity$Post;}
