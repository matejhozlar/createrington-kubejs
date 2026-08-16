import { $WolfModel } from "@package/net/minecraft/client/model";
import { $ETFEntity } from "@package/traben/entity_texture_features/utils";
import { $LayerDefinition } from "@package/net/minecraft/client/model/geom/builders";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ModelLayerLocation } from "@package/net/minecraft/client/model/geom";
import { $Map_, $Map } from "@package/java/util";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $EMFModelPartRoot } from "@package/traben/entity_model_features/models/parts";
import { $Wolf } from "@package/net/minecraft/world/entity/animal";

declare module "@package/traben/entity_model_features/utils" {
    export class $IEMFTextureSizeSupplier {
    }
    export interface $IEMFTextureSizeSupplier {
        emf$getTextureSize(): number[];
        emf$setTextureSize(arg0: number[]): void;
    }
    export class $IEMFCustomModelHolder {
    }
    export interface $IEMFCustomModelHolder {
        emf$getModel(): $EMFModelPartRoot;
        emf$setModel(arg0: $EMFModelPartRoot): void;
        emf$hasModel(): boolean;
    }
    export class $EMFEntity {
    }
    export interface $EMFEntity extends $ETFEntity {
        emf$getX(): number;
        emf$getY(): number;
        emf$prevX(): number;
        emf$getZ(): number;
        emf$isWet(): boolean;
        emf$prevZ(): number;
        emf$getYaw(): number;
        emf$age(): number;
        emf$prevY(): number;
        emf$getPitch(): number;
        emf$isSneaking(): boolean;
        emf$isInvisible(): boolean;
        emf$isGlowing(): boolean;
        emf$prevPitch(): number;
        emf$isOnGround(): boolean;
        emf$hasVehicle(): boolean;
        emf$hasPassengers(): boolean;
        emf$isSprinting(): boolean;
        emf$isOnFire(): boolean;
        emf$isInLava(): boolean;
        emf$getVariableMap(): $Map<string, number>;
        emf$getTypeString(): string;
        emf$isAlive(): boolean;
        emf$getVelocity(): $Vec3;
        emf$isTouchingWater(): boolean;
    }
    export class $IEMFUnmodifiedLayerRootGetter {
    }
    export interface $IEMFUnmodifiedLayerRootGetter {
        emf$getUnmodifiedRoots(): $Map<$ModelLayerLocation, $LayerDefinition>;
    }
    /**
     * Values that may be interpreted as {@link $IEMFUnmodifiedLayerRootGetter}.
     */
    export type $IEMFUnmodifiedLayerRootGetter_ = (() => $Map_<$ModelLayerLocation, $LayerDefinition>);
    export class $IEMFWolfCollarHolder<T extends $Wolf> {
    }
    export interface $IEMFWolfCollarHolder<T extends $Wolf> {
        emf$hasCollarModel(): boolean;
        emf$setCollarModel(arg0: $WolfModel<T>): void;
        emf$getCollarModel(): $WolfModel<T>;
    }
    export class $EMFDirectoryHandler {
        static basic(filename: string): $EMFDirectoryHandler;
        static getDirectoryManagerOrNull(printing: boolean, namespace: string, modelFileName: string, suffixAndFileType: string): $EMFDirectoryHandler;
        getFileNameWithType(): string;
        packIndex(): number;
        getRelativeDirectoryLocationNoValidation(fileName: string): string;
        getRelativeFilePossiblyEMFOverridden(jpmOrVariantFileNameWithSuffixAndFileType: string): $ResourceLocation;
        validForThisBase(propertiesOrSecond: $EMFDirectoryHandler): boolean;
        getFinalFileLocation(): string;
        rawFileName: string;
        namespace: string;
        isSubFolder: boolean;
        get fileNameWithType(): string;
        get finalFileLocation(): string;
    }
    export class $IEMFCuboidDataSupplier {
    }
    export interface $IEMFCuboidDataSupplier {
        emf$getTextureXY(): number[];
        emf$getSizeAdd(): number[];
        emf$getTextureUV(): number[];
    }
}
