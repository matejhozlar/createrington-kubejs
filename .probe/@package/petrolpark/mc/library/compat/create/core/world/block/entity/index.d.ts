import { $KineticBlockEntity } from "@package/com/simibubi/create/content/kinetics/base";
export * as press from "@package/petrolpark/mc/library/compat/create/core/world/block/entity/press";

declare module "@package/petrolpark/mc/library/compat/create/core/world/block/entity" {
    export class $IKineticBlockEntityDuck {
        static getSource(arg0: $KineticBlockEntity): $KineticBlockEntity;
    }
    export interface $IKineticBlockEntityDuck {
        setSourceIndex(arg0: number | null): void;
        getSourceIndex(): number;
    }
}
