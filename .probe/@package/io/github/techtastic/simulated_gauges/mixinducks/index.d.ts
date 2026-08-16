import { $AbstractPanelSupportBehaviour } from "@package/net/liukrast/deployer/lib/logistics/board/connection";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";

declare module "@package/io/github/techtastic/simulated_gauges/mixinducks" {
    export class $IAbstractPanelSupport {
    }
    export interface $IAbstractPanelSupport {
        simulated_gauges$getOrCreateSupport(arg0: $SmartBlockEntity): $AbstractPanelSupportBehaviour;
    }
    /**
     * Values that may be interpreted as {@link $IAbstractPanelSupport}.
     */
    export type $IAbstractPanelSupport_ = ((arg0: $SmartBlockEntity) => $AbstractPanelSupportBehaviour);
}
