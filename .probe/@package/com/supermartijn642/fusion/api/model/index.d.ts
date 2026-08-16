import { $ItemDisplayContext_ } from "@package/net/minecraft/world/item";
import { $ItemTransform, $ItemOverride, $BlockModel$GuiLight } from "@package/net/minecraft/client/renderer/block/model";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $ModelPredicate } from "@package/com/supermartijn642/fusion/api/model/predicates";
import { $List, $Map, $Collection } from "@package/java/util";
import { $ModelGeometry } from "@package/com/supermartijn642/fusion/api/model/custom/geometry";
import { $UntypedModelInstance, $ModelBakingContext, $ModelTransform, $ModelStack, $ModelMaterial } from "@package/com/supermartijn642/fusion/api/model/custom";
import { $Property, $Serializer, $Either } from "@package/com/supermartijn642/fusion/api/util";
export * as custom from "@package/com/supermartijn642/fusion/api/model/custom";
export * as predicates from "@package/com/supermartijn642/fusion/api/model/predicates";

declare module "@package/com/supermartijn642/fusion/api/model" {
    export class $ModelInstance<T> {
        static of<T>(modelType: $ModelType<T>, modelData: T): $ModelInstance<T>;
    }
    export interface $ModelInstance<T> extends $UntypedModelInstance {
        getModelData(): T;
        getModelType(): $ModelType<T>;
        get modelData(): T;
        get modelType(): $ModelType<T>;
    }
    export class $ModelType<T> {
    }
    export interface $ModelType<T> extends $Serializer<T> {
        getProperty<X, C>(property: $Property<X, C>, context: C, data: T): (X) | undefined;
        getTransform(data: T): $ModelTransform;
        getDependencies(data: T): $Collection<$ResourceLocation>;
        getParents(data: T): $List<$Either<$ResourceLocation, $UntypedModelInstance>>;
        getGeometry(data: T): $ModelGeometry;
        getEmissive(data: T): boolean;
        getCondition(data: T): $ModelPredicate;
        getGuiLight(data: T): $BlockModel$GuiLight;
        getItemOverrides(data: T): $List<$ItemOverride>;
        getMaterials(data: T): $Map<string, $Either<string, $ModelMaterial>>;
        getAmbientOcclusion(data: T): boolean;
        bakeModel(context: $ModelBakingContext, modelStack: $ModelStack, data: T): $BakedModel;
        getShade(data: T): boolean;
        getItemTransform(type: $ItemDisplayContext_, data: T): $ItemTransform;
    }
}
