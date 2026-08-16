import { $ItemDisplayContext_ } from "@package/net/minecraft/world/item";
import { $ItemOverride, $BlockModel$GuiLight, $ItemTransform } from "@package/net/minecraft/client/renderer/block/model";
import { $Material, $ModelState, $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $List, $Map, $List_, $Collection } from "@package/java/util";
import { $QuadAccess, $MutableQuad } from "@package/com/supermartijn642/fusion/api/model/custom/quad";
import { $ModelGeometry } from "@package/com/supermartijn642/fusion/api/model/custom/geometry";
import { $Consumer_ } from "@package/java/util/function";
import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ModelPredicate } from "@package/com/supermartijn642/fusion/api/model/predicates";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Iterable } from "@package/java/lang";
import { $Transformation } from "@package/com/mojang/math";
import { $PropertyGetter, $Property, $Either } from "@package/com/supermartijn642/fusion/api/util";
import { $Vector3fc, $Matrix4fc, $Quaternionfc } from "@package/org/joml";
export * as geometry from "@package/com/supermartijn642/fusion/api/model/custom/geometry";
export * as quad from "@package/com/supermartijn642/fusion/api/model/custom/quad";

declare module "@package/com/supermartijn642/fusion/api/model/custom" {
    export class $ModelBakingContext {
    }
    export interface $ModelBakingContext extends $ModelResolver {
        getMissingBakedModel(): $BakedModel;
        pushWarning(warning: string): void;
        getMaterial(material: $ModelMaterial): $TextureAtlasSprite;
        getTransformation(): $ModelTransform;
        getModelIdentifier(): $ResourceLocation;
        walkModelTree<T>(model: $ResourceLocation_, walker: $ModelWalker_<T>): (T) | undefined;
        walkModelTree<T>(modelInstance: $UntypedModelInstance, walker: $ModelWalker_<T>): (T) | undefined;
        getModel(identifier: $ResourceLocation_): $UntypedModelInstance;
        get missingBakedModel(): $BakedModel;
        get transformation(): $ModelTransform;
        get modelIdentifier(): $ResourceLocation;
    }
    export class $CullableQuads$QuadMutator {
    }
    export interface $CullableQuads$QuadMutator {
        mutate(cullDirection: $Direction_, quad: $MutableQuad): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CullableQuads$QuadMutator}.
     */
    export type $CullableQuads$QuadMutator_ = ((cullDirection: $Direction, quad: $MutableQuad) => boolean);
    export class $UntypedModelInstance {
    }
    export interface $UntypedModelInstance extends $PropertyGetter {
        getTransform(): $ModelTransform;
        getDependencies(): $Collection<$ResourceLocation>;
        getParents(): $List<$Either<$ResourceLocation, $UntypedModelInstance>>;
        getGeometry(): $ModelGeometry;
        getEmissive(): boolean;
        getCondition(): $ModelPredicate;
        getGuiLight(): $BlockModel$GuiLight;
        getItemOverrides(): $List<$ItemOverride>;
        getMaterials(): $Map<string, $Either<string, $ModelMaterial>>;
        getMaterial(key: string): $Either<string, $ModelMaterial>;
        getAmbientOcclusion(): boolean;
        bakeModel(context: $ModelBakingContext, modelStack: $ModelStack): $BakedModel;
        getShade(): boolean;
        getItemTransform(type: $ItemDisplayContext_): $ItemTransform;
        get transform(): $ModelTransform;
        get dependencies(): $Collection<$ResourceLocation>;
        get parents(): $List<$Either<$ResourceLocation, $UntypedModelInstance>>;
        get geometry(): $ModelGeometry;
        get emissive(): boolean;
        get condition(): $ModelPredicate;
        get guiLight(): $BlockModel$GuiLight;
        get itemOverrides(): $List<$ItemOverride>;
        get materials(): $Map<string, $Either<string, $ModelMaterial>>;
        get ambientOcclusion(): boolean;
        get shade(): boolean;
    }
    export class $ModelWalker<T> {
        static walkModelTree<T>(modelResolver: $ModelResolver_, model: $ResourceLocation_, walker: $ModelWalker_<T>): (T) | undefined;
        static walkModelTree<T>(modelResolver: $ModelResolver_, modelInstance: $UntypedModelInstance, walker: $ModelWalker_<T>): (T) | undefined;
    }
    export interface $ModelWalker<T> {
        consume(modelInstance: $UntypedModelInstance, stack: $ModelStack): $ModelWalker$Result<T>;
    }
    /**
     * Values that may be interpreted as {@link $ModelWalker}.
     */
    export type $ModelWalker_<T> = ((modelInstance: $UntypedModelInstance, stack: $ModelStack) => $ModelWalker$Result<T>);
    export class $ModelMaterial {
        static of(material: $Material): $ModelMaterial;
        static of(atlas: $ResourceLocation_, texture: $ResourceLocation_): $ModelMaterial;
        static missing(atlas: $ResourceLocation_): $ModelMaterial;
        static blockAtlas(texture: $ResourceLocation_): $ModelMaterial;
        static isMissingSprite(sprite: $TextureAtlasSprite): boolean;
        static missingBlockAtlas(): $ModelMaterial;
    }
    export interface $ModelMaterial {
        texture(): $ResourceLocation;
        isMissing(): boolean;
        atlas(): $ResourceLocation;
        toMaterial(): $Material;
    }
    export class $CullableQuads {
        static builder(): $CullableQuads$Builder;
        static empty(): $CullableQuads;
        static combine(...quads: $CullableQuads[]): $CullableQuads;
    }
    export interface $CullableQuads {
        get(cullDirection: $Direction_): $List<$QuadAccess>;
        up(): $List<$QuadAccess>;
        all(): $List<$QuadAccess>;
        down(): $List<$QuadAccess>;
        north(): $List<$QuadAccess>;
        south(): $List<$QuadAccess>;
        west(): $List<$QuadAccess>;
        east(): $List<$QuadAccess>;
        unculled(): $List<$QuadAccess>;
        mutateQuads(mutator: $CullableQuads$QuadMutator_): $CullableQuads;
    }
    export class $ModelWalker$Result<T> {
        static stop(): $ModelWalker$Result<void>;
        static stop<T>(value: T): $ModelWalker$Result<T>;
        static endBranch<T>(): $ModelWalker$Result<T>;
        static proceed<T>(): $ModelWalker$Result<T>;
        static stopIfPresent<T>(value: (T) | undefined): $ModelWalker$Result<T>;
    }
    export interface $ModelWalker$Result<T> {
    }
    export class $CullableQuads$Builder {
    }
    export interface $CullableQuads$Builder {
        add(quads: $CullableQuads): $CullableQuads$Builder;
        add(cullDirection: $Direction_, quad: $QuadAccess): $CullableQuads$Builder;
        add(cullDirection: $Direction_, quads: $List_<$QuadAccess>): $CullableQuads$Builder;
        build(): $CullableQuads;
        mutateQuads(mutator: $CullableQuads$QuadMutator_): $CullableQuads$Builder;
    }
    export class $ModelStack {
        static empty(): $ModelStack;
    }
    export interface $ModelStack extends $Iterable<$UntypedModelInstance> {
        size(): number;
        get(index: number): $UntypedModelInstance;
        push(instance: $UntypedModelInstance): $ModelStack;
        push(instance: $UntypedModelInstance, identifier: $ResourceLocation_): $ModelStack;
        getIdentifier(index: number): $ResourceLocation;
        findProperty<X>(property: $Property<X, void>): (X) | undefined;
        findProperty<X, C>(property: $Property<X, C>, context: C): (X) | undefined;
        composeTransforms(): $ModelTransform;
        combineConditions(): $ModelPredicate;
        findShade(): boolean;
        walkStack<T>(walker: $ModelWalker_<T>): (T) | undefined;
        findAmbientOcclusion(): boolean;
        findMaterialRecursive(key: string, reportCircular: $Consumer_<$List<string>>): $ModelMaterial;
        walkStackAndParents<T>(modelResolver: $ModelResolver_, walker: $ModelWalker_<T>): (T) | undefined;
        findShadeIncludingParents(modelResolver: $ModelResolver_): boolean;
        findPropertyIncludingParents<X>(property: $Property<X, void>, modelResolver: $ModelResolver_): (X) | undefined;
        findPropertyIncludingParents<X, C>(property: $Property<X, C>, context: C, modelResolver: $ModelResolver_): (X) | undefined;
        findGuiLightIncludingParents(modelResolver: $ModelResolver_): $BlockModel$GuiLight;
        findItemTransformIncludingParents(type: $ItemDisplayContext_, modelResolver: $ModelResolver_): $ItemTransform;
        findEmissiveIncludingParents(modelResolver: $ModelResolver_): boolean;
        findMaterialIncludingParents(key: string, modelResolver: $ModelResolver_): $Either<string, $ModelMaterial>;
        findAmbientOcclusionIncludingParents(modelResolver: $ModelResolver_): boolean;
        findMaterialsIncludingParents(modelResolver: $ModelResolver_): $Map<string, $Either<string, $ModelMaterial>>;
        findGeometryIncludingParents(modelResolver: $ModelResolver_): $ModelGeometry;
        findMaterialRecursiveIncludingParents(key: string, reportCircular: $Consumer_<$List<string>>, modelResolver: $ModelResolver_): $ModelMaterial;
        findGeometry(): $ModelGeometry;
        findEmissive(): boolean;
        findMaterial(key: string): $Either<string, $ModelMaterial>;
        walkParents<T>(modelResolver: $ModelResolver_, walker: $ModelWalker_<T>): (T) | undefined;
        findItemTransform(type: $ItemDisplayContext_): $ItemTransform;
        findMaterials(): $Map<string, $Either<string, $ModelMaterial>>;
        findGuiLight(): $BlockModel$GuiLight;
    }
    export class $ModelTransform {
        static of(matrix: $Matrix4fc, uvLock: boolean): $ModelTransform;
        static of(modelState: $ModelState): $ModelTransform;
        static of(transformation: $Transformation, uvLock: boolean): $ModelTransform;
        static identity(): $ModelTransform;
        static compose(...transforms: $ModelTransform[]): $ModelTransform;
    }
    export interface $ModelTransform {
        scale(): $Vector3fc;
        rightRotation(): $Quaternionfc;
        translation(): $Vector3fc;
        leftRotation(): $Quaternionfc;
        toModelState(): $ModelState;
        uvLock(): boolean;
        matrix(): $Matrix4fc;
        toTransformation(): $Transformation;
    }
    export class $ModelResolver {
        static MISSING_MODEL: $ResourceLocation;
    }
    export interface $ModelResolver {
        getModelOrMissing(identifier: $ResourceLocation_): $UntypedModelInstance;
        getModel(identifier: $ResourceLocation_): $UntypedModelInstance;
    }
    /**
     * Values that may be interpreted as {@link $ModelResolver}.
     */
    export type $ModelResolver_ = ((identifier: $ResourceLocation) => $UntypedModelInstance);
}
