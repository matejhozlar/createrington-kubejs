import { $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/com/blackgear/vanillabackport/common/api/extensions" {
    export class $MotionAwareEntity {
    }
    export interface $MotionAwareEntity {
        getKnownSpeed(): $Vec3;
        computeSpeed(): void;
        getHeadLookAngle(): $Vec3;
        get knownSpeed(): $Vec3;
        get headLookAngle(): $Vec3;
    }
}
