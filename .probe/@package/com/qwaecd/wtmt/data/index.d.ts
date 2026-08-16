import { $TrainPermissionLevel } from "@package/com/qwaecd/wtmt/api";

declare module "@package/com/qwaecd/wtmt/data" {
    export class $IAuthDataAccessor {
    }
    export interface $IAuthDataAccessor {
        getOwnerPlayerName(): string;
        setPermissionLevel(arg0: $TrainPermissionLevel): void;
        getPermissionLevel(): $TrainPermissionLevel;
        getGeneration(): number;
        hasAuthorizedPlayer(arg0: string): boolean;
        setOwnerPlayerName(arg0: string): void;
        get generation(): number;
    }
}
