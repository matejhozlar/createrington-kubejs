import { $ETFLruCache$UUIDInteger } from "@package/traben/entity_texture_features/utils";
import { $ModelPartInjector } from "@package/dev/tr7zw/skinlayers/accessor";
import { $ModelPart, $PartPose, $ModelPart$Cube } from "@package/net/minecraft/client/model/geom";
import { $ETFApi$ETFVariantSuffixProvider } from "@package/traben/entity_texture_features";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $EMFDirectoryHandler } from "@package/traben/entity_model_features/utils";
import { $HashMap, $List, $Map_, $Map, $UUID_, $Collection_, $List_, $Collection } from "@package/java/util";
import { $EMFModel_ID } from "@package/traben/entity_model_features/models";
import { $EMFJemData } from "@package/traben/entity_model_features/models/jem_objects";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $EMFAnimationHandler } from "@package/traben/entity_model_features/models/animation";
import { $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Record } from "@package/java/lang";

declare module "@package/traben/entity_model_features/models/parts" {
    export class $EMFModelPartWithState extends $EMFModelPart {
        copyVariantTo(from: number, to: number): void;
        setVariantStateTo(newVariant: number): void;
        visible: boolean;
        static DEFAULT_SCALE: number;
        textureOverride: $ResourceLocation;
        zRot: number;
        yRot: number;
        xRot: number;
        yScale: number;
        isSetByAnimation: boolean;
        allKnownStateVariants: $Map<number, $EMFModelPartWithState$EMFModelState>;
        children: $Map<string, $ModelPart>;
        currentModelVariant: number;
        xScale: number;
        cubes: $List<$ModelPart$Cube>;
        initialPose: $PartPose;
        x: number;
        y: number;
        z: number;
        skipDraw: boolean;
        emf$modelInfo: $EMFModel_ID;
        zScale: number;
        constructor(cuboids: $List_<$ModelPart$Cube>, children: $Map_<string, $ModelPart>, root: $EMFModelPartRoot);
        set variantStateTo(value: number);
    }
    export class $EMFModelPart extends $ModelPart implements $ModelPartInjector {
        getRoot(): $EMFModelPartRoot;
        renderBoxes(matrices: $PoseStack, vertices: $VertexConsumer): void;
        handler$jci001$skinlayers3d$render(poseStack: $PoseStack, vertexConsumer: $VertexConsumer, light: number, overlay: number, color: number, ci: $CallbackInfo): void;
        getAllChildPartsAsAnimationMap(prefixableParents: string, variantNum: number, optifinePartNameMap: $Map_<string, string>): $HashMap<string, $EMFModelPart>;
        simplePrintChildren(depth: number): string;
        renderBoxesNoChildren(matrices: $PoseStack, vertices: $VertexConsumer, alpha: number): void;
        toStringShort(): string;
        processArmItemOverrides(matrices: $PoseStack): void;
        getVanillaModelPartsOfCurrentState(): $ModelPart;
        visible: boolean;
        static DEFAULT_SCALE: number;
        textureOverride: $ResourceLocation;
        zRot: number;
        yRot: number;
        xRot: number;
        yScale: number;
        isSetByAnimation: boolean;
        children: $Map<string, $ModelPart>;
        xScale: number;
        cubes: $List<$ModelPart$Cube>;
        initialPose: $PartPose;
        x: number;
        y: number;
        z: number;
        skipDraw: boolean;
        emf$modelInfo: $EMFModel_ID;
        zScale: number;
        constructor(cuboids: $List_<$ModelPart$Cube>, children: $Map_<string, $ModelPart>, root: $EMFModelPartRoot);
        get root(): $EMFModelPartRoot;
        get vanillaModelPartsOfCurrentState(): $ModelPart;
    }
    export class $EMFModelPartRoot extends $EMFModelPartVanilla {
        checkArmOverrides(pose: $PoseStack): void;
        setVariant1ToVanilla0(): void;
        discoverAndInitVariants(fallbackPropertiesName: string): void;
        receiveAnimationHandler(variant: number, animationHandler: $EMFAnimationHandler): void;
        animate(): void;
        getTopLevelJemTexture(): $ResourceLocation;
        tryRenderVanillaRootNormally(matrixStack: $PoseStack, vertexConsumer: $VertexConsumer, light: number, overlay: number): void;
        addVariantOfJem(jemData: $EMFJemData, variant: number): void;
        getVanillaFormatRoot(): $ModelPart;
        hasAnimation(): boolean;
        oneTimeRunnable(): void;
        doVariantCheck(): void;
        resetVanillaPartsToDefaults(): void;
        checkIfShouldExpireEntity(id: $UUID_): void;
        triggerManualAnimation(pose: $PoseStack): void;
        getAllVanillaPartsEMF(): $Collection<$EMFModelPartVanilla>;
        static DEFAULT_SCALE: number;
        textureOverride: $ResourceLocation;
        zRot: number;
        xRot: number;
        containsCustomAnims: boolean;
        allKnownStateVariants: $Map<number, $EMFModelPartWithState$EMFModelState>;
        children: $Map<string, $ModelPart>;
        vanillaRoot: $ModelPart;
        zScale: number;
        isMainModel: boolean;
        visible: boolean;
        yRot: number;
        yScale: number;
        variantTester: $ETFApi$ETFVariantSuffixProvider;
        directoryContext: $EMFDirectoryHandler;
        modelName: $EMFModel_ID;
        isSetByAnimation: boolean;
        currentModelVariant: number;
        xScale: number;
        cubes: $List<$ModelPart$Cube>;
        initialPose: $PartPose;
        x: number;
        y: number;
        z: number;
        skipDraw: boolean;
        emf$modelInfo: $EMFModel_ID;
        entitySuffixMap: $ETFLruCache$UUIDInteger;
        containsCustomModel: boolean;
        constructor(mobNameForFileAndMap: $EMFModel_ID, directoryContext: $EMFDirectoryHandler, vanillaRoot: $ModelPart, optifinePartNames: $Collection_<string>, mapForCreatedParts: $Map_<string, $EMFModelPartVanilla>);
        get topLevelJemTexture(): $ResourceLocation;
        get vanillaFormatRoot(): $ModelPart;
        get allVanillaPartsEMF(): $Collection<$EMFModelPartVanilla>;
    }
    export class $EMFModelPartWithState$EMFModelState extends $Record {
        copy(visibleOverride: boolean): $EMFModelPartWithState$EMFModelState;
        copy(): $EMFModelPartWithState$EMFModelState;
        visible(): boolean;
        defaultTransform(): $PartPose;
        variantChildren(): $Map<string, $ModelPart>;
        texture(): $ResourceLocation;
        hidden(): boolean;
        zScale(): number;
        cuboids(): $List<$ModelPart$Cube>;
        yScale(): number;
        xScale(): number;
        constructor(defaultTransform: $PartPose, cuboids: $List_<$ModelPart$Cube>, variantChildren: $Map_<string, $ModelPart>, xScale: number, yScale: number, zScale: number, visible: boolean, hidden: boolean, texture: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $EMFModelPartWithState$EMFModelState}.
     */
    export type $EMFModelPartWithState$EMFModelState_ = { yScale?: number, cuboids?: $List_<$ModelPart$Cube>, texture?: $ResourceLocation_, defaultTransform?: $PartPose, zScale?: number, variantChildren?: $Map_<string, $ModelPart>, xScale?: number, visible?: boolean, hidden?: boolean,  } | [yScale?: number, cuboids?: $List_<$ModelPart$Cube>, texture?: $ResourceLocation_, defaultTransform?: $PartPose, zScale?: number, variantChildren?: $Map_<string, $ModelPart>, xScale?: number, visible?: boolean, hidden?: boolean, ];
    export class $EMFModelPartVanilla extends $EMFModelPartWithState {
        getAllEMFCustomChildren(): $ModelPart[];
        setHideInTheseStates(variant: number): void;
        visible: boolean;
        static DEFAULT_SCALE: number;
        textureOverride: $ResourceLocation;
        zRot: number;
        yRot: number;
        xRot: number;
        yScale: number;
        isSetByAnimation: boolean;
        allKnownStateVariants: $Map<number, $EMFModelPartWithState$EMFModelState>;
        children: $Map<string, $ModelPart>;
        currentModelVariant: number;
        xScale: number;
        cubes: $List<$ModelPart$Cube>;
        initialPose: $PartPose;
        x: number;
        y: number;
        z: number;
        skipDraw: boolean;
        emf$modelInfo: $EMFModel_ID;
        zScale: number;
        constructor(name: string, vanillaPart: $ModelPart, optifinePartNames: $Collection_<string>, allVanillaParts: $Map_<string, $EMFModelPartVanilla>, root: $EMFModelPartRoot);
        get allEMFCustomChildren(): $ModelPart[];
        set hideInTheseStates(value: number);
    }
}
