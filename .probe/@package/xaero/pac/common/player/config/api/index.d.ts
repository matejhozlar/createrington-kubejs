
declare module "@package/xaero/pac/common/player/config/api" {
    export class $IPlayerConfigPermissionAPI {
    }
    export interface $IPlayerConfigPermissionAPI {
        canEdit(): boolean;
        canCreateGroups(): boolean;
        canIncludePlayersInGroups(): boolean;
        canIncludeGroupsInGroups(): boolean;
        canView(): boolean;
        canClaimAs(): boolean;
    }
}
