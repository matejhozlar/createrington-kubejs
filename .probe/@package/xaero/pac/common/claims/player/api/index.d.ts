import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Stream } from "@package/java/util/stream";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $UUID } from "@package/java/util";

declare module "@package/xaero/pac/common/claims/player/api" {
    export class $IPlayerDimensionClaimsAPI {
    }
    export interface $IPlayerDimensionClaimsAPI {
        getStream(): $Stream<$IPlayerClaimPosListAPI>;
        get stream(): $Stream<$IPlayerClaimPosListAPI>;
    }
    /**
     * Values that may be interpreted as {@link $IPlayerDimensionClaimsAPI}.
     */
    export type $IPlayerDimensionClaimsAPI_ = (() => $Stream<$IPlayerClaimPosListAPI>);
    export class $IPlayerChunkClaimAPI {
    }
    export interface $IPlayerChunkClaimAPI {
        isForceloadable(): boolean;
        isSameClaimType(arg0: $IPlayerChunkClaimAPI | null): boolean;
        getSubConfigIndex(): number;
        getPlayerId(): $UUID;
        get forceloadable(): boolean;
        get subConfigIndex(): number;
        get playerId(): $UUID;
    }
    export class $IPlayerClaimInfoAPI {
    }
    export interface $IPlayerClaimInfoAPI {
        getDimension(arg0: $ResourceLocation_): $IPlayerDimensionClaimsAPI;
        getClaimCount(): number;
        getClaimsColor(): number;
        getClaimsColor(arg0: number): number;
        getClaimsName(arg0: number): string;
        getClaimsName(): string;
        getForceloadCount(): number;
        isPartyOwned(): boolean;
        getPlayerUsername(): string;
        getPlayerId(): $UUID;
        get claimCount(): number;
        get forceloadCount(): number;
        get partyOwned(): boolean;
        get playerUsername(): string;
        get playerId(): $UUID;
    }
    export class $IPlayerClaimPosListAPI {
    }
    export interface $IPlayerClaimPosListAPI {
        getCount(): number;
        getStream(): $Stream<$ChunkPos>;
        getClaimState(): $IPlayerChunkClaimAPI;
        get count(): number;
        get stream(): $Stream<$ChunkPos>;
        get claimState(): $IPlayerChunkClaimAPI;
    }
}
