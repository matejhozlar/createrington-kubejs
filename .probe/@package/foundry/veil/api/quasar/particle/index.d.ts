import { $Colorc } from "@package/foundry/veil/api/client/color";
import { $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $Codec } from "@package/com/mojang/serialization";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $MolangEnvironment } from "@package/gg/moonflower/molangcompiler/api";
import { $Camera } from "@package/net/minecraft/client";
import { $Iterator, $List, $List_ } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $BlockPos } from "@package/net/minecraft/core";
import { $TickTaskScheduler } from "@package/foundry/veil/api";
import { $MatrixStack } from "@package/foundry/veil/api/client/render";
import { $Trail } from "@package/foundry/veil/api/quasar/fx";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $CodeModule_ } from "@package/foundry/veil/api/quasar/data/module";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Record } from "@package/java/lang";
import { $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $QuasarParticleData_, $QuasarParticleData, $ParticleSettings, $ParticleSettings_, $EmitterShapeSettings, $ParticleEmitterData, $EmitterShapeSettings_ } from "@package/foundry/veil/api/quasar/data";
import { $Vector4fc, $Vector3dc, $Vector3d, $Vector3f, $Vector4f, $Vector3fc } from "@package/org/joml";
import { $ForceParticleModule, $ParticleModule, $CollisionParticleModule, $UpdateParticleModule, $InitParticleModule, $RenderParticleModule } from "@package/foundry/veil/api/quasar/emitters/module";

declare module "@package/foundry/veil/api/quasar/particle" {
    export class $RenderStyle {
        static CODEC: $Codec<$RenderStyle>;
    }
    export interface $RenderStyle {
        clear(): void;
        setup(arg0: number): boolean;
        render(arg0: $MatrixStack, arg1: $QuasarParticle, arg2: $RenderData, arg3: $Vector3fc, arg4: $VertexConsumer, arg5: number, arg6: number): void;
        getRenderType(arg0: $QuasarParticle, arg1: $RenderData): $RenderType;
        set up(value: number);
    }
    /**
     * Values that may be interpreted as {@link $RenderStyle}.
     */
    export type $RenderStyle_ = RegistryTypes.VeilQuasarRenderStyle | ((arg0: $MatrixStack, arg1: $QuasarParticle, arg2: $RenderData, arg3: $Vector3fc, arg4: $VertexConsumer, arg5: number, arg6: number) => void);
    export class $RenderData {
        tick(arg0: $QuasarParticle, arg1: number): void;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setColor(arg0: $Vector4fc): void;
        setColor(arg0: $Colorc): void;
        render(arg0: $QuasarParticle, arg1: number): void;
        getPackedLight(): number;
        setAdditive(arg0: boolean): void;
        setAlpha(arg0: number): void;
        isAdditive(): boolean;
        getRenderType(): $RenderType;
        getAlpha(): number;
        getGreen(): number;
        getBlue(): number;
        getRed(): number;
        setAtlasSprite(arg0: $TextureAtlasSprite): void;
        markDirty(): void;
        setGreen(arg0: number): void;
        setRed(arg0: number): void;
        setBlue(arg0: number): void;
        setFixedPackedLight(arg0: number): void;
        getRenderRadius(): number;
        getAgePercent(): number;
        getRenderAge(): number;
        getRenderPosition(): $Vector3dc;
        getRenderRotation(): $Vector3fc;
        getAtlasSprite(): $TextureAtlasSprite;
        getSpriteData(): $SpriteData;
        renderTrails(arg0: $MatrixStack, arg1: $MultiBufferSource_, arg2: $Vec3_, arg3: number): void;
        getFixedPackedLight(): number;
        setSpriteData(arg0: $SpriteData_): void;
        getTrails(): $List<$Trail>;
        /**
         * @deprecated
         */
        static BLANK: $ResourceLocation;
        agePercent: number;
        renderAge: number;
        constructor(arg0: $QuasarParticle, arg1: $QuasarParticleData_);
        get packedLight(): number;
        get renderType(): $RenderType;
        get renderRadius(): number;
        get renderPosition(): $Vector3dc;
        get renderRotation(): $Vector3fc;
        get trails(): $List<$Trail>;
    }
    export interface $RenderStyle extends RegistryMarked<RegistryTypes.VeilQuasarRenderStyleTag, RegistryTypes.VeilQuasarRenderStyle> {}
    export class $ParticleModuleSet {
        static builder(): $ParticleModuleSet$Builder;
        copy(): $ParticleModuleSet;
        getAllModules(): $ParticleModule[];
        getCollisionModules(): $CollisionParticleModule[];
        getEnabledRenderModules(): $Iterator<$RenderParticleModule>;
        getUpdateModules(): $UpdateParticleModule[];
        getForceModules(): $ForceParticleModule[];
        getInitModules(): $InitParticleModule[];
        updateEnabled(): void;
        getRenderModules(): $RenderParticleModule[];
        getEnabledRenderModulesArray(): $RenderParticleModule[];
        getEnabledRenderModuleCount(): number;
        get allModules(): $ParticleModule[];
        get collisionModules(): $CollisionParticleModule[];
        get enabledRenderModules(): $Iterator<$RenderParticleModule>;
        get updateModules(): $UpdateParticleModule[];
        get forceModules(): $ForceParticleModule[];
        get initModules(): $InitParticleModule[];
        get renderModules(): $RenderParticleModule[];
        get enabledRenderModulesArray(): $RenderParticleModule[];
        get enabledRenderModuleCount(): number;
    }
    export class $ParticleModuleSet$Builder {
        build(): $ParticleModuleSet;
        addModule(arg0: $ParticleModule): void;
        constructor();
    }
    export class $QuasarParticle {
        remove(): void;
        init(): void;
        tick(): void;
        getLevel(): $ClientLevel;
        getData(): $QuasarParticleData;
        getPosition(): $Vector3d;
        getEnvironment(): $MolangEnvironment;
        getRandomSource(): $RandomSource;
        onRemove(): void;
        getAge(): number;
        render(arg0: number): void;
        getModules(): $ParticleModuleSet;
        getSettings(): $ParticleSettings;
        getScheduler(): $TickTaskScheduler;
        getRenderData(): $RenderData;
        isRemoved(): boolean;
        getRotation(): $Vector3f;
        getBlockPosition(): $BlockPos;
        getVelocity(): $Vector3d;
        getBoundingBox(): $AABB;
        getEmitter(): $ParticleEmitter;
        setAge(arg0: number): void;
        getBlockStateInOrUnder(): $BlockState;
        getLifetime(): number;
        getRadius(): number;
        setRadius(arg0: number): void;
        vectorToRotation(arg0: number, arg1: number, arg2: number): void;
        constructor(arg0: $ClientLevel, arg1: $RandomSource, arg2: $TickTaskScheduler, arg3: $QuasarParticleData_, arg4: $ParticleModuleSet, arg5: $ParticleSettings_, arg6: $ParticleEmitter);
        get level(): $ClientLevel;
        get data(): $QuasarParticleData;
        get position(): $Vector3d;
        get environment(): $MolangEnvironment;
        get randomSource(): $RandomSource;
        get modules(): $ParticleModuleSet;
        get settings(): $ParticleSettings;
        get scheduler(): $TickTaskScheduler;
        get renderData(): $RenderData;
        get removed(): boolean;
        get rotation(): $Vector3f;
        get blockPosition(): $BlockPos;
        get velocity(): $Vector3d;
        get boundingBox(): $AABB;
        get emitter(): $ParticleEmitter;
        get blockStateInOrUnder(): $BlockState;
        get lifetime(): number;
    }
    export class $ParticleEmitter {
        remove(): void;
        reset(): void;
        trim(arg0: number): number;
        getCount(): number;
        isLoop(): boolean;
        getData(): $ParticleEmitterData;
        getPosition(): $Vector3d;
        render(arg0: $MatrixStack, arg1: $MultiBufferSource_, arg2: $Camera, arg3: number): void;
        setPosition(arg0: number, arg1: number, arg2: number): void;
        setPosition(arg0: $Vector3dc): void;
        setPosition(arg0: $Vec3_): void;
        static clearErrors(): void;
        setCount(arg0: number): void;
        isRemoved(): boolean;
        setRate(arg0: number): void;
        getRate(): number;
        getRegistryName(): $ResourceLocation;
        getParticleCount(): number;
        setLoop(arg0: boolean): void;
        getEmitterShapeSettings(): $List<$EmitterShapeSettings>;
        setParticleSettings(arg0: $ParticleSettings_): void;
        getParticleSettings(): $ParticleSettings;
        setEmitterShapeSettings(arg0: $List_<$EmitterShapeSettings_>): void;
        getParticleData(): $QuasarParticleData;
        getAttachedEntity(): $Entity;
        setMaxParticles(arg0: number): void;
        addCodeModule(arg0: $CodeModule_): void;
        setForceSpawn(arg0: boolean): void;
        setAttachedEntity(arg0: $Entity): void;
        getMaxParticles(): number;
        getMaxLifetime(): number;
        setParticleData(arg0: $QuasarParticleData_): void;
        setMaxLifetime(arg0: number): void;
        isForceSpawn(): boolean;
        get data(): $ParticleEmitterData;
        get removed(): boolean;
        get registryName(): $ResourceLocation;
        get particleCount(): number;
    }
    export class $SpriteData extends $Record {
        v(arg0: number, arg1: number, arg2: number): number;
        u(arg0: number, arg1: number, arg2: number): number;
        uv(arg0: number, arg1: number, arg2: $Vector4f): $Vector4f;
        sprite(): $ResourceLocation;
        frameWidth(): number;
        stretchToLifetime(): boolean;
        frameTime(): number;
        frameCount(): number;
        frameHeight(): number;
        static CODEC: $Codec<$SpriteData>;
        constructor(sprite: $ResourceLocation_, frameCount: number, frameTime: number, frameWidth: number, frameHeight: number, stretchToLifetime: boolean);
    }
    /**
     * Values that may be interpreted as {@link $SpriteData}.
     */
    export type $SpriteData_ = { frameTime?: number, frameHeight?: number, frameCount?: number, stretchToLifetime?: boolean, frameWidth?: number, sprite?: $ResourceLocation_,  } | [frameTime?: number, frameHeight?: number, frameCount?: number, stretchToLifetime?: boolean, frameWidth?: number, sprite?: $ResourceLocation_, ];
}
