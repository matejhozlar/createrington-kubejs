import { $IClaimingModeAPI } from "@package/xaero/pac/common/claims/player/mode/api";
import { $ServerPlayer } from "@package/net/minecraft/server/level";

declare module "@package/xaero/pac/common/server/player/data/api" {
    export class $ServerPlayerDataAPI {
        static from(arg0: $ServerPlayer): $ServerPlayerDataAPI;
        isPartiesAdminMode(): boolean;
        getClaimingMode(): $IClaimingModeAPI;
        isClaimsAdminMode(): boolean;
        /**
         * @deprecated
         */
        isClaimsServerMode(): boolean;
        getRawClaimingMode(): $IClaimingModeAPI;
        isClaimsNonallyMode(): boolean;
        constructor();
        get partiesAdminMode(): boolean;
        get claimingMode(): $IClaimingModeAPI;
        get claimsAdminMode(): boolean;
        get claimsServerMode(): boolean;
        get rawClaimingMode(): $IClaimingModeAPI;
        get claimsNonallyMode(): boolean;
    }
}
