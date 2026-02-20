declare module "net.caffeinemc.mods.sodium.client.render.chunk.map.ClientChunkEventListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ClientChunkEventListener$$Interface {
}

export class $ClientChunkEventListener implements $ClientChunkEventListener$$Interface {
 "onChunkStatusRemoved"(arg0: integer, arg1: integer, arg2: integer): void
 "onChunkStatusAdded"(arg0: integer, arg1: integer, arg2: integer): void
 "updateMapCenter"(arg0: integer, arg1: integer): void
 "updateLoadDistance"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientChunkEventListener$$Type = ($ClientChunkEventListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientChunkEventListener$$Original = $ClientChunkEventListener;}
declare module "net.caffeinemc.mods.sodium.client.model.quad.BakedQuadView" {
import {$TextureAtlasSprite} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$ModelQuadView$$Interface} from "net.caffeinemc.mods.sodium.client.model.quad.ModelQuadView"
import {$Direction} from "net.minecraft.core.Direction"
import {$ModelQuadFacing} from "net.caffeinemc.mods.sodium.client.model.quad.properties.ModelQuadFacing"

export interface $BakedQuadView$$Interface extends $ModelQuadView$$Interface {
get "faceNormal"(): integer
get "normalFace"(): $ModelQuadFacing
get "flags"(): integer
get "lightFace"(): $Direction
get "colorIndex"(): integer
get "sprite"(): $TextureAtlasSprite
}

export class $BakedQuadView implements $BakedQuadView$$Interface {
 "getFaceNormal"(): integer
 "hasAO"(): boolean
 "getNormalFace"(): $ModelQuadFacing
 "hasShade"(): boolean
 "getLight"(arg0: integer): integer
 "hasColor"(): boolean
 "getFlags"(): integer
 "getX"(arg0: integer): float
 "getZ"(arg0: integer): float
 "getY"(arg0: integer): float
 "getAccurateNormal"(arg0: integer): integer
 "getLightFace"(): $Direction
 "calculateNormal"(): integer
 "getColorIndex"(): integer
 "getVertexNormal"(arg0: integer): integer
 "getSprite"(): $TextureAtlasSprite
 "getColor"(arg0: integer): integer
 "getTexU"(arg0: integer): float
 "getTexV"(arg0: integer): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakedQuadView$$Type = ($BakedQuadView);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BakedQuadView$$Original = $BakedQuadView;}
declare module "net.caffeinemc.mods.sodium.client.render.chunk.ChunkRenderMatrices" {
import {$Matrix4fc, $Matrix4fc$$Type} from "org.joml.Matrix4fc"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Record} from "java.lang.Record"

export class $ChunkRenderMatrices extends $Record {
constructor(projection: $Matrix4fc$$Type, modelView: $Matrix4fc$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "from"(arg0: $PoseStack$$Type): $ChunkRenderMatrices
public "projection"(): $Matrix4fc
public "modelView"(): $Matrix4fc
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkRenderMatrices$$Type = ({"projection"?: $Matrix4fc$$Type, "modelView"?: $Matrix4fc$$Type}) | ([projection?: $Matrix4fc$$Type, modelView?: $Matrix4fc$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkRenderMatrices$$Original = $ChunkRenderMatrices;}
declare module "net.caffeinemc.mods.sodium.mixin.platform.neoforge.AuxiliaryLightManagerMixin" {
import {$SodiumAuxiliaryLightManager$$Interface} from "net.caffeinemc.mods.sodium.client.world.SodiumAuxiliaryLightManager"

export interface $AuxiliaryLightManagerMixin$$Interface extends $SodiumAuxiliaryLightManager$$Interface {
}

export class $AuxiliaryLightManagerMixin implements $AuxiliaryLightManagerMixin$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AuxiliaryLightManagerMixin$$Type = ($AuxiliaryLightManagerMixin);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AuxiliaryLightManagerMixin$$Original = $AuxiliaryLightManagerMixin;}
declare module "net.caffeinemc.mods.sodium.client.model.color.interop.ItemColorsExtension" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemColor, $ItemColor$$Type} from "net.minecraft.client.color.item.ItemColor"

export interface $ItemColorsExtension$$Interface {

(arg0: $ItemStack): $ItemColor$$Type
}

export class $ItemColorsExtension implements $ItemColorsExtension$$Interface {
 "sodium$getColorProvider"(arg0: $ItemStack$$Type): $ItemColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemColorsExtension$$Type = ((arg0: $ItemStack) => $ItemColor$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemColorsExtension$$Original = $ItemColorsExtension;}
declare module "net.caffeinemc.mods.sodium.client.world.SodiumAuxiliaryLightManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SodiumAuxiliaryLightManager$$Interface {
}

export class $SodiumAuxiliaryLightManager implements $SodiumAuxiliaryLightManager$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SodiumAuxiliaryLightManager$$Type = ($SodiumAuxiliaryLightManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SodiumAuxiliaryLightManager$$Original = $SodiumAuxiliaryLightManager;}
declare module "net.caffeinemc.mods.sodium.client.world.BiomeSeedProvider" {
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"

export interface $BiomeSeedProvider$$Interface {

(): long
}

export class $BiomeSeedProvider implements $BiomeSeedProvider$$Interface {
 "sodium$getBiomeZoomSeed"(): long
static "getBiomeZoomSeed"(arg0: $ClientLevel$$Type): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeSeedProvider$$Type = (() => long);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BiomeSeedProvider$$Original = $BiomeSeedProvider;}
declare module "net.caffeinemc.mods.sodium.client.render.texture.SpriteContentsExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SpriteContentsExtension$$Interface {
}

export class $SpriteContentsExtension implements $SpriteContentsExtension$$Interface {
 "sodium$isActive"(): boolean
 "sodium$setActive"(arg0: boolean): void
 "sodium$hasAnimation"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsExtension$$Type = ($SpriteContentsExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteContentsExtension$$Original = $SpriteContentsExtension;}
declare module "net.caffeinemc.mods.sodium.client.world.PalettedContainerROExtension" {
import {$PalettedContainerRO, $PalettedContainerRO$$Type} from "net.minecraft.world.level.chunk.PalettedContainerRO"

export interface $PalettedContainerROExtension$$Interface<T> {
}

export class $PalettedContainerROExtension<T> implements $PalettedContainerROExtension$$Interface {
static "clone"<T>(arg0: $PalettedContainerRO$$Type<(T)>): $PalettedContainerRO<(T)>
static "of"<T>(arg0: $PalettedContainerRO$$Type<(T)>): $PalettedContainerROExtension<(T)>
 "sodium$copy"(): $PalettedContainerRO<(T)>
 "sodium$unpack"(arg0: (T)[], arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
 "sodium$unpack"(arg0: (T)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PalettedContainerROExtension$$Type<T> = ($PalettedContainerROExtension<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PalettedContainerROExtension$$Original<T> = $PalettedContainerROExtension<(T)>;}
declare module "net.caffeinemc.mods.sodium.mixin.features.textures.animations.upload.SpriteContentsTickerAccessor" {
import {$SpriteContents$AnimatedTexture} from "net.minecraft.client.renderer.texture.SpriteContents$AnimatedTexture"

export interface $SpriteContentsTickerAccessor$$Interface {
get "frameIndex"(): integer
get "animationInfo"(): $SpriteContents$AnimatedTexture
get "frameTicks"(): integer
}

export class $SpriteContentsTickerAccessor implements $SpriteContentsTickerAccessor$$Interface {
 "getFrameIndex"(): integer
 "getAnimationInfo"(): $SpriteContents$AnimatedTexture
 "getFrameTicks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsTickerAccessor$$Type = ($SpriteContentsTickerAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteContentsTickerAccessor$$Original = $SpriteContentsTickerAccessor;}
declare module "net.caffeinemc.mods.sodium.client.render.chunk.compile.pipeline.TextureAtlasSpriteExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TextureAtlasSpriteExtension$$Interface {

(): boolean
}

export class $TextureAtlasSpriteExtension implements $TextureAtlasSpriteExtension$$Interface {
 "sodium$hasUnknownImageContents"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureAtlasSpriteExtension$$Type = (() => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextureAtlasSpriteExtension$$Original = $TextureAtlasSpriteExtension;}
declare module "net.caffeinemc.mods.sodium.client.render.viewport.frustum.Frustum" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Frustum$$Interface {

(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): boolean
}

export class $Frustum implements $Frustum$$Interface {
 "testAab"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Frustum$$Type = ((arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Frustum$$Original = $Frustum;}
declare module "net.caffeinemc.mods.sodium.client.render.chunk.ExtendedBlockEntityType" {
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$BlockEntityRenderPredicate, $BlockEntityRenderPredicate$$Type} from "net.caffeinemc.mods.sodium.api.blockentity.BlockEntityRenderPredicate"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $ExtendedBlockEntityType$$Interface<T extends $BlockEntity> {
}

export class $ExtendedBlockEntityType<T extends $BlockEntity> implements $ExtendedBlockEntityType$$Interface {
 "sodium$removeRenderPredicate"(arg0: $BlockEntityRenderPredicate$$Type<(T)>): boolean
static "shouldRender"<T extends $BlockEntity>(arg0: $BlockEntityType$$Type<(T)>, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: T): boolean
static "removeRenderPredicate"<T extends $BlockEntity>(arg0: $BlockEntityType$$Type<(T)>, arg1: $BlockEntityRenderPredicate$$Type<(T)>): boolean
 "sodium$getRenderPredicates"(): ($BlockEntityRenderPredicate<(T)>)[]
 "sodium$addRenderPredicate"(arg0: $BlockEntityRenderPredicate$$Type<(T)>): void
static "addRenderPredicate"<T extends $BlockEntity>(arg0: $BlockEntityType$$Type<(T)>, arg1: $BlockEntityRenderPredicate$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedBlockEntityType$$Type<T> = ($ExtendedBlockEntityType<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExtendedBlockEntityType$$Original<T> = $ExtendedBlockEntityType<(T)>;}
declare module "net.caffeinemc.mods.sodium.mixin.platform.neoforge.ChunkRenderTypeSetAccessor" {
import {$BitSet, $BitSet$$Type} from "java.util.BitSet"
import {$ChunkRenderTypeSet} from "net.neoforged.neoforge.client.ChunkRenderTypeSet"

export interface $ChunkRenderTypeSetAccessor$$Interface {

(): $BitSet$$Type
get "bits"(): $BitSet
}

export class $ChunkRenderTypeSetAccessor implements $ChunkRenderTypeSetAccessor$$Interface {
static "create"(arg0: $BitSet$$Type): $ChunkRenderTypeSet
 "getBits"(): $BitSet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkRenderTypeSetAccessor$$Type = (() => $BitSet$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkRenderTypeSetAccessor$$Original = $ChunkRenderTypeSetAccessor;}
declare module "net.caffeinemc.mods.sodium.client.services.SodiumModelData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SodiumModelData$$Interface {
}

export class $SodiumModelData implements $SodiumModelData$$Interface {
static readonly "EMPTY": $SodiumModelData

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SodiumModelData$$Type = ($SodiumModelData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SodiumModelData$$Original = $SodiumModelData;}
declare module "net.caffeinemc.mods.sodium.api.vertex.format.VertexFormatExtensions" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $VertexFormatExtensions$$Interface {

(): integer
}

export class $VertexFormatExtensions implements $VertexFormatExtensions$$Interface {
 "sodium$getGlobalId"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexFormatExtensions$$Type = (() => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VertexFormatExtensions$$Original = $VertexFormatExtensions;}
declare module "net.caffeinemc.mods.sodium.mixin.features.textures.NativeImageAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NativeImageAccessor$$Interface {

(): long
get "pixels"(): long
}

export class $NativeImageAccessor implements $NativeImageAccessor$$Interface {
 "getPixels"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NativeImageAccessor$$Type = (() => long);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NativeImageAccessor$$Original = $NativeImageAccessor;}
declare module "net.caffeinemc.mods.sodium.client.render.chunk.map.ChunkTrackerHolder" {
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$ChunkTracker, $ChunkTracker$$Type} from "net.caffeinemc.mods.sodium.client.render.chunk.map.ChunkTracker"

export interface $ChunkTrackerHolder$$Interface {

(): $ChunkTracker$$Type
}

export class $ChunkTrackerHolder implements $ChunkTrackerHolder$$Interface {
static "get"(arg0: $ClientLevel$$Type): $ChunkTracker
 "sodium$getTracker"(): $ChunkTracker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkTrackerHolder$$Type = (() => $ChunkTracker$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkTrackerHolder$$Original = $ChunkTrackerHolder;}
declare module "net.caffeinemc.mods.sodium.mixin.features.textures.SpriteContentsInvoker" {
import {$NativeImage, $NativeImage$$Type} from "com.mojang.blaze3d.platform.NativeImage"

export interface $SpriteContentsInvoker$$Interface {

(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: ($NativeImage)[]): void
}

export class $SpriteContentsInvoker implements $SpriteContentsInvoker$$Interface {
 "invokeUpload"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: ($NativeImage$$Type)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsInvoker$$Type = ((arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: ($NativeImage)[]) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteContentsInvoker$$Original = $SpriteContentsInvoker;}
declare module "net.caffeinemc.mods.sodium.mixin.features.textures.animations.upload.SpriteContentsAccessor" {
import {$NativeImage, $NativeImage$$Type} from "com.mojang.blaze3d.platform.NativeImage"

export interface $SpriteContentsAccessor$$Interface {

(): ($NativeImage$$Type)[]
get "images"(): ($NativeImage)[]
}

export class $SpriteContentsAccessor implements $SpriteContentsAccessor$$Interface {
 "getImages"(): ($NativeImage)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsAccessor$$Type = (() => ($NativeImage$$Type)[]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteContentsAccessor$$Original = $SpriteContentsAccessor;}
declare module "net.caffeinemc.mods.sodium.client.render.SodiumWorldRenderer" {
import {$LocalBooleanRef$$Type} from "com.llamalad7.mixinextras.sugar.ref.LocalBooleanRef"
import {$BlockDestructionProgress$$Type} from "net.minecraft.server.level.BlockDestructionProgress"
import {$RenderBuffers$$Type} from "net.minecraft.client.renderer.RenderBuffers"
import {$Collection} from "java.util.Collection"
import {$SortedSet$$Type} from "java.util.SortedSet"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Long2ObjectMap$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectMap"
import {$Camera$$Type} from "net.minecraft.client.Camera"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ChunkRenderMatrices$$Type} from "net.caffeinemc.mods.sodium.client.render.chunk.ChunkRenderMatrices"
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$Viewport$$Type} from "net.caffeinemc.mods.sodium.client.render.viewport.Viewport"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export class $SodiumWorldRenderer {
constructor(arg0: $Minecraft$$Type)

public static "instance"(): $SodiumWorldRenderer
public "reload"(): void
public "setLevel"(arg0: $ClientLevel$$Type): void
public "isBoxVisible"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): boolean
public "renderBlockEntities"(arg0: $PoseStack$$Type, arg1: $RenderBuffers$$Type, arg2: $Long2ObjectMap$$Type<($SortedSet$$Type<($BlockDestructionProgress$$Type)>)>, arg3: $Camera$$Type, arg4: float, arg5: $LocalBooleanRef$$Type): void
public "scheduleRebuildForChunk"(arg0: integer, arg1: integer, arg2: integer, arg3: boolean): void
public "scheduleRebuildForChunks"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: boolean): void
public "scheduleTerrainUpdate"(): void
public "getChunksDebugString"(): StringJS
public "isTerrainRenderComplete"(): boolean
public "getVisibleChunkCount"(): integer
public "isSectionReady"(arg0: integer, arg1: integer, arg2: integer): boolean
public "drawChunkLayer"(arg0: $RenderType$$Type, arg1: $ChunkRenderMatrices$$Type, arg2: double, arg3: double, arg4: double): void
public "setupTerrain"(arg0: $Camera$$Type, arg1: $Viewport$$Type, arg2: boolean, arg3: boolean): void
public "iterateVisibleBlockEntities"(arg0: $Consumer$$Type<($BlockEntity)>): void
public "scheduleRebuildForBlockArea"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: boolean): void
public static "instanceNullable"(): $SodiumWorldRenderer
public "isEntityVisible"(arg0: $Entity$$Type): boolean
public "getDebugStrings"(): $Collection<(StringJS)>
set "level"(value: $ClientLevel$$Type)
get "chunksDebugString"(): StringJS
get "terrainRenderComplete"(): boolean
get "visibleChunkCount"(): integer
get "debugStrings"(): $Collection<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SodiumWorldRenderer$$Type = ($SodiumWorldRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SodiumWorldRenderer$$Original = $SodiumWorldRenderer;}
declare module "net.caffeinemc.mods.sodium.client.render.viewport.CameraTransform" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CameraTransform {
readonly "intX": integer
readonly "fracX": float
readonly "x": double
readonly "fracY": float
readonly "y": double
readonly "intZ": integer
readonly "z": double
readonly "intY": integer
readonly "fracZ": float

constructor(arg0: double, arg1: double, arg2: double)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CameraTransform$$Type = ($CameraTransform);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CameraTransform$$Original = $CameraTransform;}
declare module "net.caffeinemc.mods.sodium.client.render.chunk.compile.pipeline.SpriteContentsExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SpriteContentsExtension$$Interface {
}

export class $SpriteContentsExtension implements $SpriteContentsExtension$$Interface {
 "sodium$hasTransparentPixels"(): boolean
 "sodium$hasTranslucentPixels"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsExtension$$Type = ($SpriteContentsExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteContentsExtension$$Original = $SpriteContentsExtension;}
declare module "net.caffeinemc.mods.sodium.client.platform.NativeWindowHandle" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NativeWindowHandle$$Interface {

(): long
get "win32Handle"(): long
}

export class $NativeWindowHandle implements $NativeWindowHandle$$Interface {
 "getWin32Handle"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NativeWindowHandle$$Type = (() => long);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NativeWindowHandle$$Original = $NativeWindowHandle;}
declare module "net.caffeinemc.mods.sodium.api.vertex.buffer.VertexBufferWriter" {
import {$MemoryStack, $MemoryStack$$Type} from "org.lwjgl.system.MemoryStack"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$VertexFormat, $VertexFormat$$Type} from "com.mojang.blaze3d.vertex.VertexFormat"

export interface $VertexBufferWriter$$Interface {

(arg0: $MemoryStack, arg1: long, arg2: integer, arg3: $VertexFormat): void
}

export class $VertexBufferWriter implements $VertexBufferWriter$$Interface {
static "of"(arg0: $VertexConsumer$$Type): $VertexBufferWriter
 "push"(arg0: $MemoryStack$$Type, arg1: long, arg2: integer, arg3: $VertexFormat$$Type): void
static "copyInto"(arg0: $VertexBufferWriter$$Type, arg1: $MemoryStack$$Type, arg2: long, arg3: integer, arg4: $VertexFormat$$Type): void
 "canUseIntrinsics"(): boolean
static "tryOf"(arg0: $VertexConsumer$$Type): $VertexBufferWriter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexBufferWriter$$Type = ((arg0: $MemoryStack, arg1: long, arg2: integer, arg3: $VertexFormat) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VertexBufferWriter$$Original = $VertexBufferWriter;}
declare module "net.caffeinemc.mods.sodium.api.blockentity.BlockEntityRenderPredicate" {
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $BlockEntityRenderPredicate$$Interface<T extends $BlockEntity> {

(arg0: $BlockGetter, arg1: $BlockPos, arg2: T): boolean
}

export class $BlockEntityRenderPredicate<T extends $BlockEntity> implements $BlockEntityRenderPredicate$$Interface {
 "shouldRender"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: T): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityRenderPredicate$$Type<T> = ((arg0: $BlockGetter, arg1: $BlockPos, arg2: T) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEntityRenderPredicate$$Original<T> = $BlockEntityRenderPredicate<(T)>;}
declare module "net.caffeinemc.mods.sodium.client.render.vertex.buffer.BufferBuilderExtension" {
import {$MemoryStack$$Type} from "org.lwjgl.system.MemoryStack"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$VertexBufferWriter, $VertexBufferWriter$$Type, $VertexBufferWriter$$Interface} from "net.caffeinemc.mods.sodium.api.vertex.buffer.VertexBufferWriter"
import {$VertexFormat$$Type} from "com.mojang.blaze3d.vertex.VertexFormat"

export interface $BufferBuilderExtension$$Interface extends $VertexBufferWriter$$Interface {
}

export class $BufferBuilderExtension implements $BufferBuilderExtension$$Interface {
 "sodium$duplicateVertex"(): void
static "of"(arg0: $VertexConsumer$$Type): $VertexBufferWriter
 "push"(arg0: $MemoryStack$$Type, arg1: long, arg2: integer, arg3: $VertexFormat$$Type): void
static "copyInto"(arg0: $VertexBufferWriter$$Type, arg1: $MemoryStack$$Type, arg2: long, arg3: integer, arg4: $VertexFormat$$Type): void
 "canUseIntrinsics"(): boolean
static "tryOf"(arg0: $VertexConsumer$$Type): $VertexBufferWriter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferBuilderExtension$$Type = ($BufferBuilderExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BufferBuilderExtension$$Original = $BufferBuilderExtension;}
declare module "net.caffeinemc.mods.sodium.client.model.quad.properties.ModelQuadFacing" {
import {$Enum} from "java.lang.Enum"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Vector3fc} from "org.joml.Vector3fc"

export class $ModelQuadFacing extends $Enum<($ModelQuadFacing)> {
static readonly "NEG_Z": $ModelQuadFacing
static readonly "POS_X": $ModelQuadFacing
static readonly "NEG_Y": $ModelQuadFacing
static readonly "ALL": integer
static readonly "POS_Y": $ModelQuadFacing
static readonly "NEG_X": $ModelQuadFacing
static readonly "POS_Z": $ModelQuadFacing
static readonly "OPPOSING_Z": integer
static readonly "OPPOSING_X": integer
static readonly "UNASSIGNED_MASK": integer
static readonly "OPPOSING_Y": integer
static readonly "UNASSIGNED": $ModelQuadFacing
static readonly "PACKED_ALIGNED_NORMALS": (integer)[]
static readonly "ALIGNED_NORMALS": ($Vector3fc)[]
static readonly "VALUES": ($ModelQuadFacing)[]
static readonly "COUNT": integer
static readonly "NONE": integer
static readonly "DIRECTIONS": integer

public static "values"(): ($ModelQuadFacing)[]
public static "valueOf"(arg0: StringJS): $ModelQuadFacing
public "getSign"(): integer
public "getOpposite"(): $ModelQuadFacing
public static "fromDirection"(arg0: $Direction$$Type): $ModelQuadFacing
public static "fromNormal"(arg0: float, arg1: float, arg2: float): $ModelQuadFacing
public "isAligned"(): boolean
public "getAxis"(): integer
public static "fromPackedNormal"(arg0: integer): $ModelQuadFacing
public "getPackedAlignedNormal"(): integer
public static "bitmapIsOpposingAligned"(arg0: integer): boolean
public static "bitmapHasUnassigned"(arg0: integer): boolean
public "getAlignedNormal"(): $Vector3fc
get "sign"(): integer
get "opposite"(): $ModelQuadFacing
get "aligned"(): boolean
get "axis"(): integer
get "packedAlignedNormal"(): integer
get "alignedNormal"(): $Vector3fc
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelQuadFacing$$Type = (("pos_x") | ("pos_y") | ("pos_z") | ("neg_x") | ("neg_y") | ("neg_z") | ("unassigned"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelQuadFacing$$Original = $ModelQuadFacing;}
declare module "net.caffeinemc.mods.sodium.client.model.quad.ModelQuadView" {
import {$TextureAtlasSprite} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$Direction} from "net.minecraft.core.Direction"

export interface $ModelQuadView$$Interface {
get "flags"(): integer
get "faceNormal"(): integer
get "lightFace"(): $Direction
get "colorIndex"(): integer
get "sprite"(): $TextureAtlasSprite
}

export class $ModelQuadView implements $ModelQuadView$$Interface {
 "getLight"(arg0: integer): integer
 "hasColor"(): boolean
 "getFlags"(): integer
 "getX"(arg0: integer): float
 "getZ"(arg0: integer): float
 "getY"(arg0: integer): float
 "getAccurateNormal"(arg0: integer): integer
 "getFaceNormal"(): integer
 "getLightFace"(): $Direction
 "calculateNormal"(): integer
 "getColorIndex"(): integer
 "getVertexNormal"(arg0: integer): integer
 "getSprite"(): $TextureAtlasSprite
 "getColor"(arg0: integer): integer
 "getTexU"(arg0: integer): float
 "getTexV"(arg0: integer): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelQuadView$$Type = ($ModelQuadView);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelQuadView$$Original = $ModelQuadView;}
declare module "net.caffeinemc.mods.sodium.client.model.color.interop.BlockColorsExtension" {
import {$BlockColors$$Type} from "net.minecraft.client.color.block.BlockColors"
import {$Reference2ReferenceMap} from "it.unimi.dsi.fastutil.objects.Reference2ReferenceMap"
import {$ReferenceSet} from "it.unimi.dsi.fastutil.objects.ReferenceSet"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockColor} from "net.minecraft.client.color.block.BlockColor"

export interface $BlockColorsExtension$$Interface {
}

export class $BlockColorsExtension implements $BlockColorsExtension$$Interface {
static "getProviders"(arg0: $BlockColors$$Type): $Reference2ReferenceMap<($Block), ($BlockColor)>
 "sodium$getOverridenVanillaBlocks"(): $ReferenceSet<($Block)>
 "sodium$getProviders"(): $Reference2ReferenceMap<($Block), ($BlockColor)>
static "getOverridenVanillaBlocks"(arg0: $BlockColors$$Type): $ReferenceSet<($Block)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockColorsExtension$$Type = ($BlockColorsExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockColorsExtension$$Original = $BlockColorsExtension;}
declare module "net.caffeinemc.mods.sodium.mixin.core.render.texture.TextureAtlasAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TextureAtlasAccessor$$Interface {
get "width"(): integer
get "height"(): integer
}

export class $TextureAtlasAccessor implements $TextureAtlasAccessor$$Interface {
 "getWidth"(): integer
 "getHeight"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureAtlasAccessor$$Type = ($TextureAtlasAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextureAtlasAccessor$$Original = $TextureAtlasAccessor;}
declare module "net.caffeinemc.mods.sodium.client.world.LevelRendererExtension" {
import {$SodiumWorldRenderer, $SodiumWorldRenderer$$Type} from "net.caffeinemc.mods.sodium.client.render.SodiumWorldRenderer"

export interface $LevelRendererExtension$$Interface {

(): $SodiumWorldRenderer$$Type
}

export class $LevelRendererExtension implements $LevelRendererExtension$$Interface {
 "sodium$getWorldRenderer"(): $SodiumWorldRenderer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelRendererExtension$$Type = (() => $SodiumWorldRenderer$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LevelRendererExtension$$Original = $LevelRendererExtension;}
declare module "net.caffeinemc.mods.sodium.mixin.features.render.frapi.ItemRendererAccessor" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $ItemRendererAccessor$$Interface {
}

export class $ItemRendererAccessor implements $ItemRendererAccessor$$Interface {
static "sodium$hasAnimatedTexture"(arg0: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemRendererAccessor$$Type = ($ItemRendererAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemRendererAccessor$$Original = $ItemRendererAccessor;}
declare module "net.caffeinemc.mods.sodium.client.render.viewport.Viewport" {
import {$Frustum$$Type} from "net.caffeinemc.mods.sodium.client.render.viewport.frustum.Frustum"
import {$SectionPos} from "net.minecraft.core.SectionPos"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$CameraTransform} from "net.caffeinemc.mods.sodium.client.render.viewport.CameraTransform"
import {$Vector3d$$Type} from "org.joml.Vector3d"

export class $Viewport {
constructor(arg0: $Frustum$$Type, arg1: $Vector3d$$Type)

public "getTransform"(): $CameraTransform
public "isBoxVisible"(arg0: integer, arg1: integer, arg2: integer, arg3: float, arg4: float, arg5: float): boolean
public "getChunkCoord"(): $SectionPos
public "getBlockCoord"(): $BlockPos
get "transform"(): $CameraTransform
get "chunkCoord"(): $SectionPos
get "blockCoord"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Viewport$$Type = ($Viewport);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Viewport$$Original = $Viewport;}
declare module "net.caffeinemc.mods.sodium.client.render.chunk.map.ChunkTracker$ChunkEventHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ChunkTracker$ChunkEventHandler$$Interface {

(arg0: integer, arg1: integer): void
}

export class $ChunkTracker$ChunkEventHandler implements $ChunkTracker$ChunkEventHandler$$Interface {
 "apply"(arg0: integer, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkTracker$ChunkEventHandler$$Type = ((arg0: integer, arg1: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkTracker$ChunkEventHandler$$Original = $ChunkTracker$ChunkEventHandler;}
declare module "net.caffeinemc.mods.sodium.client.render.chunk.map.ChunkTracker" {
import {$ChunkTracker$ChunkEventHandler$$Type} from "net.caffeinemc.mods.sodium.client.render.chunk.map.ChunkTracker$ChunkEventHandler"
import {$ClientChunkEventListener$$Interface} from "net.caffeinemc.mods.sodium.client.render.chunk.map.ClientChunkEventListener"
import {$LongCollection, $LongCollection$$Type} from "it.unimi.dsi.fastutil.longs.LongCollection"

export class $ChunkTracker implements $ClientChunkEventListener$$Interface {
constructor()

public "forEachEvent"(arg0: $ChunkTracker$ChunkEventHandler$$Type, arg1: $ChunkTracker$ChunkEventHandler$$Type): void
public "getReadyChunks"(): $LongCollection
public static "forEachChunk"(arg0: $LongCollection$$Type, arg1: $ChunkTracker$ChunkEventHandler$$Type): void
public "onChunkStatusRemoved"(arg0: integer, arg1: integer, arg2: integer): void
public "onChunkStatusAdded"(arg0: integer, arg1: integer, arg2: integer): void
public "updateMapCenter"(arg0: integer, arg1: integer): void
public "updateLoadDistance"(arg0: integer): void
get "readyChunks"(): $LongCollection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkTracker$$Type = ($ChunkTracker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkTracker$$Original = $ChunkTracker;}
declare module "net.caffeinemc.mods.sodium.client.render.viewport.ViewportProvider" {
import {$Viewport, $Viewport$$Type} from "net.caffeinemc.mods.sodium.client.render.viewport.Viewport"

export interface $ViewportProvider$$Interface {

(): $Viewport$$Type
}

export class $ViewportProvider implements $ViewportProvider$$Interface {
 "sodium$createViewport"(): $Viewport
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ViewportProvider$$Type = (() => $Viewport$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ViewportProvider$$Original = $ViewportProvider;}
