import { $IAuthDataAccessor } from "@package/com/qwaecd/wtmt/data";
import { $UUID } from "@package/java/util";

declare module "@package/com/qwaecd/wtmt/api" {
    export class $ITrainInfoProvider {
    }
    export interface $ITrainInfoProvider {
        getOwnerPlayerName(): string;
        authorizePlayer(arg0: string): void;
        getAuthData(): $IAuthDataAccessor;
        setOwnerPlayerName$who_touched_my_train(arg0: string): void;
        getOwnerPlayerName$who_touched_my_train(): string;
        hasUsePermission$who_touched_my_train(arg0: string): boolean;
        setPublic(): void;
        hasAuthorizedPlayer(arg0: string): boolean;
        deauthorizePlayer$who_touched_my_train(arg0: string): void;
        authorizePlayer$who_touched_my_train(arg0: string): void;
        hasAuthorizedPlayer$who_touched_my_train(arg0: string): boolean;
        setOwnerPlayerName(arg0: string): void;
        deauthorizePlayer(arg0: string): void;
        getEntityUUID(): $UUID;
        hasOwner$who_touched_my_train(): boolean;
        getAuthData$who_touched_my_train(): $IAuthDataAccessor;
        setPublic$who_touched_my_train(): void;
        getEntityUUID$who_touched_my_train(): $UUID;
        hasOwner(): boolean;
        hasUsePermission(arg0: string): boolean;
        get authData(): $IAuthDataAccessor;
        get entityUUID(): $UUID;
        get authData$who_touched_my_train(): $IAuthDataAccessor;
        get entityUUID$who_touched_my_train(): $UUID;
    }
}
