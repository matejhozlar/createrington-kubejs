import { $Entity, $Leashable } from "@package/net/minecraft/world/entity";
import { $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/com/blackgear/vanillabackport/common/api/leash" {
    export class $LeashDataExtension {
    }
    export interface $LeashDataExtension {
        angularMomentum(): number;
        setAngularMomentum(arg0: number): void;
    }
    export class $LeashableCallback {
    }
    export interface $LeashableCallback {
        vb$whenLeashedTo(leashHolder: $Entity): void;
        vb$notifyLeashHolder(leashee: $Leashable): void;
        vb$supportsQuadLeash(): boolean;
        vb$onElasticLeashPull(): void;
        vb$leashElasticDistance(): number;
        vb$leashSnapDistance(): number;
        vb$getQuadLeashOffsets(): $Vec3[];
        vb$getQuadLeashHolderOffsets(): $Vec3[];
        vb$supportsQuadLeashAsHolder(): boolean;
    }
}
