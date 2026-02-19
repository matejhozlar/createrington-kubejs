declare module "net.createmod.ponder.mixin.accessor.BiomeManagerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BiomeManagerAccessor$$Interface {

(): long
}

export class $BiomeManagerAccessor implements $BiomeManagerAccessor$$Interface {
 "catnip$getBiomeZoomSeed"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeManagerAccessor$$Type = (() => long);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BiomeManagerAccessor$$Original = $BiomeManagerAccessor;}
declare module "net.createmod.ponder.mixin.accessor.EntityAccessor" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"

export interface $EntityAccessor$$Interface {

(arg0: $Level): void
}

export class $EntityAccessor implements $EntityAccessor$$Interface {
 "catnip$callSetLevel"(arg0: $Level$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityAccessor$$Type = ((arg0: $Level) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityAccessor$$Original = $EntityAccessor;}
declare module "net.createmod.ponder.mixin.client.accessor.GameRendererAccessor" {
import {$Camera, $Camera$$Type} from "net.minecraft.client.Camera"

export interface $GameRendererAccessor$$Interface {

(arg0: $Camera, arg1: float, arg2: boolean): double
}

export class $GameRendererAccessor implements $GameRendererAccessor$$Interface {
 "catnip$callGetFov"(arg0: $Camera$$Type, arg1: float, arg2: boolean): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameRendererAccessor$$Type = ((arg0: $Camera, arg1: float, arg2: boolean) => double);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GameRendererAccessor$$Original = $GameRendererAccessor;}
declare module "net.createmod.ponder.mixin.client.accessor.ClientPacketListenerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ClientPacketListenerAccessor$$Interface {

(): integer
}

export class $ClientPacketListenerAccessor implements $ClientPacketListenerAccessor$$Interface {
 "catnip$getServerChunkRadius"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientPacketListenerAccessor$$Type = (() => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientPacketListenerAccessor$$Original = $ClientPacketListenerAccessor;}
declare module "net.createmod.ponder.mixin.client.accessor.ItemRendererAccessor" {
import {$TextureManager, $TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"

export interface $ItemRendererAccessor$$Interface {

(): $TextureManager$$Type
}

export class $ItemRendererAccessor implements $ItemRendererAccessor$$Interface {
 "catnip$getTextureManager"(): $TextureManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemRendererAccessor$$Type = (() => $TextureManager$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemRendererAccessor$$Original = $ItemRendererAccessor;}
declare module "net.createmod.ponder.mixin.client.accessor.ScreenAccessor" {
import {$List, $List$$Type} from "java.util.List"
import {$Renderable, $Renderable$$Type} from "net.minecraft.client.gui.components.Renderable"

export interface $ScreenAccessor$$Interface {

(): $List$$Type<($Renderable$$Type)>
}

export class $ScreenAccessor implements $ScreenAccessor$$Interface {
 "catnip$getRenderables"(): $List<($Renderable)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenAccessor$$Type = (() => $List$$Type<($Renderable$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenAccessor$$Original = $ScreenAccessor;}
declare module "net.createmod.ponder.mixin.accessor.MinecraftServerAccessor" {
import {$LevelStorageSource$LevelStorageAccess, $LevelStorageSource$LevelStorageAccess$$Type} from "net.minecraft.world.level.storage.LevelStorageSource$LevelStorageAccess"

export interface $MinecraftServerAccessor$$Interface {

(): $LevelStorageSource$LevelStorageAccess$$Type
}

export class $MinecraftServerAccessor implements $MinecraftServerAccessor$$Interface {
 "catnip$getStorageSource"(): $LevelStorageSource$LevelStorageAccess
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftServerAccessor$$Type = (() => $LevelStorageSource$LevelStorageAccess$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinecraftServerAccessor$$Original = $MinecraftServerAccessor;}
declare module "net.createmod.ponder.mixin.client.accessor.BufferBuilderAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BufferBuilderAccessor$$Interface {

(): integer
}

export class $BufferBuilderAccessor implements $BufferBuilderAccessor$$Interface {
 "catnip$getVertices"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferBuilderAccessor$$Type = (() => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BufferBuilderAccessor$$Original = $BufferBuilderAccessor;}
declare module "net.createmod.ponder.mixin.client.accessor.ParticleEngineAccessor" {
import {$ParticleProvider, $ParticleProvider$$Type} from "net.minecraft.client.particle.ParticleProvider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"

export interface $ParticleEngineAccessor$$Interface {

(): $Map$$Type<($ResourceLocation$$Type), ($ParticleProvider$$Type<(never)>)>
}

export class $ParticleEngineAccessor implements $ParticleEngineAccessor$$Interface {
 "ponder$getProviders"(): $Map<($ResourceLocation), ($ParticleProvider<(never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEngineAccessor$$Type = (() => $Map$$Type<($ResourceLocation$$Type), ($ParticleProvider$$Type<(never)>)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ParticleEngineAccessor$$Original = $ParticleEngineAccessor;}
declare module "net.createmod.ponder.mixin.client.accessor.RenderTypeAccessor" {
import {$RenderType$CompositeState$$Type} from "net.minecraft.client.renderer.RenderType$CompositeState"
import {$VertexFormat$Mode$$Type} from "com.mojang.blaze3d.vertex.VertexFormat$Mode"
import {$VertexFormat$$Type} from "com.mojang.blaze3d.vertex.VertexFormat"
import {$RenderType$CompositeRenderType} from "net.minecraft.client.renderer.RenderType$CompositeRenderType"

export interface $RenderTypeAccessor$$Interface {
}

export class $RenderTypeAccessor implements $RenderTypeAccessor$$Interface {
static "catnip$create"(arg0: StringJS, arg1: $VertexFormat$$Type, arg2: $VertexFormat$Mode$$Type, arg3: integer, arg4: boolean, arg5: boolean, arg6: $RenderType$CompositeState$$Type): $RenderType$CompositeRenderType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderTypeAccessor$$Type = ($RenderTypeAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderTypeAccessor$$Original = $RenderTypeAccessor;}
