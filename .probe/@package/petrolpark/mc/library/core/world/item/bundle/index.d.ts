import { $Fraction } from "@package/org/apache/commons/lang3/math";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";

declare module "@package/petrolpark/mc/library/core/world/item/bundle" {
    export class $BundleSizeEvent extends $Event implements $ICancellableEvent {
        getSize(): $Fraction;
        getStack(): $ItemStack;
        setSize(arg0: $Fraction): void;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $ItemStack_);
        get stack(): $ItemStack;
    }
    export class $IExpandedBundleContentsMutable {
    }
    export interface $IExpandedBundleContentsMutable {
        setSize(arg0: $Fraction): void;
        set size(value: $Fraction);
    }
    /**
     * Values that may be interpreted as {@link $IExpandedBundleContentsMutable}.
     */
    export type $IExpandedBundleContentsMutable_ = ((arg0: $Fraction) => void);
}
