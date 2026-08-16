import { $Config } from "@package/xaero/lib/common/config";
import { $ConfigChannel } from "@package/xaero/lib/common/config/channel";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Iterable } from "@package/java/lang";
import { $IConfigProfileInfo, $ConfigProfile } from "@package/xaero/lib/common/config/profile";

declare module "@package/xaero/lib/client/gui/config/context" {
    export class $IEditConfigScreenContext {
    }
    export interface $IEditConfigScreenContext {
        reset(arg0: $ConfigChannel): void;
        getEnforcedConfig(arg0: $ConfigChannel): $Config;
        getProfiles(arg0: $ConfigChannel): $Iterable<$IConfigProfileInfo>;
        getSyncMessage(): $Component;
        isAutoConfirm(): boolean;
        deleteProfile(arg0: $ConfigProfile, arg1: $ConfigChannel): void;
        getSyncStatus(arg0: $ConfigChannel): boolean;
        setCurrentProfile(arg0: string, arg1: $ConfigChannel): void;
        confirmProfile(arg0: $ConfigProfile, arg1: $ConfigChannel): void;
        getCurrentProfile(arg0: $ConfigChannel): $ConfigProfile;
        isClientSide(): boolean;
        createProfile(arg0: string, arg1: string, arg2: $ConfigChannel, arg3: string): void;
        isAutoDefaultProfile(): boolean;
        getDropdownNarration(): $Component;
        setDefaultProfileId(arg0: string, arg1: $ConfigChannel): void;
        getDefaultProfileId(arg0: $ConfigChannel): string;
        getSelectedProfileId(arg0: $ConfigChannel): string;
        getScreenTitleFormat(): string;
        profileExists(arg0: string, arg1: $ConfigChannel): boolean;
        hasPermission(arg0: $ConfigChannel): boolean;
        get syncMessage(): $Component;
        get autoConfirm(): boolean;
        get clientSide(): boolean;
        get autoDefaultProfile(): boolean;
        get dropdownNarration(): $Component;
        get screenTitleFormat(): string;
    }
}
