declare module "net.minecraft.client.particle.Particle" {
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$ParticleGroup} from "net.minecraft.core.particles.ParticleGroup"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$ParticleRenderType} from "net.minecraft.client.particle.ParticleRenderType"
import {$Optional} from "java.util.Optional"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$Camera$$Type} from "net.minecraft.client.Camera"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"

export class $Particle {
 "bCol": float
 "gCol": float
 "x": double
 "y": double
 "z": double
 "zd": double
 "rCol": float
 "yd": double
 "xd": double
 "age": integer

constructor(arg0: $ClientLevel$$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double)

public "getRenderBoundingBox"(arg0: float): $AABB
public "setPos"(arg0: double, arg1: double, arg2: double): void
public "setPower"(arg0: float): $Particle
public "remove"(): void
public "toString"(): StringJS
public "scale"(arg0: float): $Particle
public "isAlive"(): boolean
public "move"(arg0: double, arg1: double, arg2: double): void
public "tick"(): void
public "setColor"(arg0: float, arg1: float, arg2: float): void
public "render"(arg0: $VertexConsumer$$Type, arg1: $Camera$$Type, arg2: float): void
public "getPos"(): $Vec3
public "getParticleGroup"(): $Optional<($ParticleGroup)>
public "setLifetime"(arg0: integer): void
public "setParticleSpeed"(arg0: double, arg1: double, arg2: double): void
public "getLifetime"(): integer
public "setBoundingBox"(arg0: $AABB$$Type): void
public "getBoundingBox"(): $AABB
public "getRenderType"(): $ParticleRenderType
set "power"(value: float)
get "alive"(): boolean
get "pos"(): $Vec3
get "particleGroup"(): $Optional<($ParticleGroup)>
set "lifetime"(value: integer)
get "lifetime"(): integer
set "boundingBox"(value: $AABB$$Type)
get "boundingBox"(): $AABB
get "renderType"(): $ParticleRenderType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Particle$$Type = ($Particle);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Particle$$Original = $Particle;}
declare module "net.minecraft.client.particle.SingleQuadParticle$FacingCameraMode" {
import {$Quaternionf, $Quaternionf$$Type} from "org.joml.Quaternionf"
import {$Camera, $Camera$$Type} from "net.minecraft.client.Camera"

export interface $SingleQuadParticle$FacingCameraMode$$Interface {

(arg0: $Quaternionf, arg1: $Camera, arg2: float): void
}

export class $SingleQuadParticle$FacingCameraMode implements $SingleQuadParticle$FacingCameraMode$$Interface {
static readonly "LOOKAT_Y": $SingleQuadParticle$FacingCameraMode
static readonly "LOOKAT_XYZ": $SingleQuadParticle$FacingCameraMode

 "setRotation"(arg0: $Quaternionf$$Type, arg1: $Camera$$Type, arg2: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleQuadParticle$FacingCameraMode$$Type = ((arg0: $Quaternionf, arg1: $Camera, arg2: float) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SingleQuadParticle$FacingCameraMode$$Original = $SingleQuadParticle$FacingCameraMode;}
declare module "net.minecraft.client.particle.ParticleProvider" {
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$Particle, $Particle$$Type} from "net.minecraft.client.particle.Particle"
import {$ParticleOptions, $ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"

export interface $ParticleProvider$$Interface<T extends $ParticleOptions> {

(arg0: T, arg1: $ClientLevel, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double): $Particle$$Type
}

export class $ParticleProvider<T extends $ParticleOptions> implements $ParticleProvider$$Interface {
 "createParticle"(arg0: T, arg1: $ClientLevel$$Type, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double): $Particle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleProvider$$Type<T> = ((arg0: T, arg1: $ClientLevel, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double) => $Particle$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ParticleProvider$$Original<T> = $ParticleProvider<(T)>;}
declare module "net.minecraft.client.particle.SpriteSet" {
import {$TextureAtlasSprite} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"

export interface $SpriteSet$$Interface {
}

export class $SpriteSet implements $SpriteSet$$Interface {
 "get"(arg0: integer, arg1: integer): $TextureAtlasSprite
 "get"(arg0: $RandomSource$$Type): $TextureAtlasSprite
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteSet$$Type = ($SpriteSet);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteSet$$Original = $SpriteSet;}
declare module "net.minecraft.client.particle.TextureSheetParticle" {
import {$SingleQuadParticle} from "net.minecraft.client.particle.SingleQuadParticle"
import {$SpriteSet$$Type} from "net.minecraft.client.particle.SpriteSet"

export class $TextureSheetParticle extends $SingleQuadParticle {
 "bCol": float
 "gCol": float
 "x": double
 "y": double
 "z": double
 "zd": double
 "rCol": float
 "yd": double
 "xd": double
 "age": integer

public "setSpriteFromAge"(arg0: $SpriteSet$$Type): void
public "pickSprite"(arg0: $SpriteSet$$Type): void
set "spriteFromAge"(value: $SpriteSet$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureSheetParticle$$Type = ($TextureSheetParticle);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextureSheetParticle$$Original = $TextureSheetParticle;}
declare module "net.minecraft.client.particle.SimpleAnimatedParticle" {
import {$ParticleRenderType} from "net.minecraft.client.particle.ParticleRenderType"
import {$TextureSheetParticle} from "net.minecraft.client.particle.TextureSheetParticle"

export class $SimpleAnimatedParticle extends $TextureSheetParticle {
 "bCol": float
 "gCol": float
 "x": double
 "y": double
 "z": double
 "zd": double
 "rCol": float
 "yd": double
 "xd": double
 "age": integer

public "tick"(): void
public "setColor"(arg0: integer): void
public "getRenderType"(): $ParticleRenderType
public "getLightColor"(arg0: float): integer
public "setFadeColor"(arg0: integer): void
set "color"(value: integer)
get "renderType"(): $ParticleRenderType
set "fadeColor"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleAnimatedParticle$$Type = ($SimpleAnimatedParticle);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleAnimatedParticle$$Original = $SimpleAnimatedParticle;}
declare module "net.minecraft.client.particle.SingleQuadParticle" {
import {$SingleQuadParticle$FacingCameraMode} from "net.minecraft.client.particle.SingleQuadParticle$FacingCameraMode"
import {$Particle} from "net.minecraft.client.particle.Particle"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$Camera$$Type} from "net.minecraft.client.Camera"
import {$AABB} from "net.minecraft.world.phys.AABB"

export class $SingleQuadParticle extends $Particle {
 "bCol": float
 "gCol": float
 "x": double
 "y": double
 "z": double
 "zd": double
 "rCol": float
 "yd": double
 "xd": double
 "age": integer

public "getRenderBoundingBox"(arg0: float): $AABB
public "scale"(arg0: float): $Particle
public "render"(arg0: $VertexConsumer$$Type, arg1: $Camera$$Type, arg2: float): void
public "getQuadSize"(arg0: float): float
public "getFacingCameraMode"(): $SingleQuadParticle$FacingCameraMode
get "facingCameraMode"(): $SingleQuadParticle$FacingCameraMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleQuadParticle$$Type = ($SingleQuadParticle);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SingleQuadParticle$$Original = $SingleQuadParticle;}
declare module "net.minecraft.client.particle.ParticleRenderType" {
import {$TextureManager, $TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$BufferBuilder, $BufferBuilder$$Type} from "com.mojang.blaze3d.vertex.BufferBuilder"
import {$Tesselator, $Tesselator$$Type} from "com.mojang.blaze3d.vertex.Tesselator"

export interface $ParticleRenderType$$Interface {

(arg0: $Tesselator, arg1: $TextureManager): $BufferBuilder$$Type
get "translucent"(): boolean
}

export class $ParticleRenderType implements $ParticleRenderType$$Interface {
static readonly "NO_RENDER": $ParticleRenderType
static readonly "TERRAIN_SHEET": $ParticleRenderType
static readonly "PARTICLE_SHEET_LIT": $ParticleRenderType
static readonly "PARTICLE_SHEET_OPAQUE": $ParticleRenderType
static readonly "PARTICLE_SHEET_TRANSLUCENT": $ParticleRenderType
static readonly "CUSTOM": $ParticleRenderType

 "begin"(arg0: $Tesselator$$Type, arg1: $TextureManager$$Type): $BufferBuilder
 "isTranslucent"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleRenderType$$Type = ((arg0: $Tesselator, arg1: $TextureManager) => $BufferBuilder$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ParticleRenderType$$Original = $ParticleRenderType;}
declare module "net.minecraft.client.particle.ParticleEngine" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Particle, $Particle$$Type} from "net.minecraft.client.particle.Particle"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Frustum$$Type} from "net.minecraft.client.renderer.culling.Frustum"
import {$Camera$$Type} from "net.minecraft.client.Camera"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$ParticleManagerAccessor$$Interface} from "net.fabricmc.fabric.mixin.client.particle.ParticleManagerAccessor"
import {$ParticleProvider$Sprite$$Type} from "net.minecraft.client.particle.ParticleProvider$Sprite"
import {$ParticleType$$Type} from "net.minecraft.core.particles.ParticleType"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ParticleProvider$$Type} from "net.minecraft.client.particle.ParticleProvider"
import {$LightTexture$$Type} from "net.minecraft.client.renderer.LightTexture"
import {$Map} from "java.util.Map"
import {$ParticleRenderType$$Type} from "net.minecraft.client.particle.ParticleRenderType"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$TextureAtlas} from "net.minecraft.client.renderer.texture.TextureAtlas"
import {$PreparableReloadListener$$Interface} from "net.minecraft.server.packs.resources.PreparableReloadListener"
import {$ParticleEngine$SpriteParticleRegistration$$Type} from "net.minecraft.client.particle.ParticleEngine$SpriteParticleRegistration"
import {$ParticleEngineAccessor$$Interface} from "net.createmod.ponder.mixin.client.accessor.ParticleEngineAccessor"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$ParticleOptions, $ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $ParticleEngine implements $PreparableReloadListener$$Interface, $ParticleManagerAccessor$$Interface, $ParticleEngineAccessor$$Interface {
readonly "textureAtlas": $TextureAtlas

constructor(arg0: $ClientLevel$$Type, arg1: $TextureManager$$Type)

public "add"(arg0: $Particle$$Type): void
/**
 * 
 * @deprecated
 */
public "register"<T extends $ParticleOptions>(arg0: $ParticleType$$Type<(T)>, arg1: $ParticleProvider$Sprite$$Type<(T)>): void
/**
 * 
 * @deprecated
 */
public "register"<T extends $ParticleOptions>(arg0: $ParticleType$$Type<(T)>, arg1: $ParticleEngine$SpriteParticleRegistration$$Type<(T)>): void
/**
 * 
 * @deprecated
 */
public "register"<T extends $ParticleOptions>(arg0: $ParticleType$$Type<(T)>, arg1: $ParticleProvider$$Type<(T)>): void
public "destroy"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): void
public "close"(): void
public "tick"(): void
public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
public "setLevel"(arg0: $ClientLevel$$Type): void
/**
 * 
 * @deprecated
 */
public "render"(arg0: $LightTexture$$Type, arg1: $Camera$$Type, arg2: float): void
public "render"(arg0: $LightTexture$$Type, arg1: $Camera$$Type, arg2: float, arg3: $Frustum$$Type, arg4: $Predicate$$Type<($ParticleRenderType)>): void
public "countParticles"(): StringJS
public "addBlockHitEffects"(arg0: $BlockPos$$Type, arg1: $BlockHitResult$$Type): void
public "iterateParticles"(arg0: $Consumer$$Type<($Particle)>): void
public "crack"(arg0: $BlockPos$$Type, arg1: $Direction$$Type): void
public "createTrackingEmitter"(arg0: $Entity$$Type, arg1: $ParticleOptions$$Type): void
public "createTrackingEmitter"(arg0: $Entity$$Type, arg1: $ParticleOptions$$Type, arg2: integer): void
public "ponder$getProviders"(): $Map
public "createParticle"(arg0: $ParticleOptions$$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double): $Particle
public "getParticleAtlasTexture"(): $TextureAtlas
public "getName"(): StringJS
set "level"(value: $ClientLevel$$Type)
get "particleAtlasTexture"(): $TextureAtlas
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEngine$$Type = ($ParticleEngine);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ParticleEngine$$Original = $ParticleEngine;}
declare module "net.minecraft.client.particle.ParticleProvider$Sprite" {
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$TextureSheetParticle, $TextureSheetParticle$$Type} from "net.minecraft.client.particle.TextureSheetParticle"
import {$ParticleOptions, $ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"

export interface $ParticleProvider$Sprite$$Interface<T extends $ParticleOptions> {

(arg0: T, arg1: $ClientLevel, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double): $TextureSheetParticle$$Type
}

export class $ParticleProvider$Sprite<T extends $ParticleOptions> implements $ParticleProvider$Sprite$$Interface {
 "createParticle"(arg0: T, arg1: $ClientLevel$$Type, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double): $TextureSheetParticle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleProvider$Sprite$$Type<T> = ((arg0: T, arg1: $ClientLevel, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double) => $TextureSheetParticle$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ParticleProvider$Sprite$$Original<T> = $ParticleProvider$Sprite<(T)>;}
declare module "net.minecraft.client.particle.ParticleEngine$SpriteParticleRegistration" {
import {$ParticleProvider, $ParticleProvider$$Type} from "net.minecraft.client.particle.ParticleProvider"
import {$SpriteSet, $SpriteSet$$Type} from "net.minecraft.client.particle.SpriteSet"
import {$ParticleOptions} from "net.minecraft.core.particles.ParticleOptions"

export interface $ParticleEngine$SpriteParticleRegistration$$Interface<T extends $ParticleOptions> {

(arg0: $SpriteSet): $ParticleProvider$$Type<(T)>
}

export class $ParticleEngine$SpriteParticleRegistration<T extends $ParticleOptions> implements $ParticleEngine$SpriteParticleRegistration$$Interface {
 "create"(arg0: $SpriteSet$$Type): $ParticleProvider<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEngine$SpriteParticleRegistration$$Type<T> = ((arg0: $SpriteSet) => $ParticleProvider$$Type<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ParticleEngine$SpriteParticleRegistration$$Original<T> = $ParticleEngine$SpriteParticleRegistration<(T)>;}
