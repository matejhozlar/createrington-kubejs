
declare module "@package/xaero/lib/common/player/config" {
    export class $ServerPlayerConfigChannelData {
        setCachedUsingConfigProfilePermission(arg0: boolean): void;
        setCachedHasServerProfileEditPermission(arg0: boolean): void;
        setCachedEnforcedConfigProfilePermission(arg0: string): void;
        isUsingConfigProfilePermission(): boolean;
        hasServerProfileEditPermission(): boolean;
        getEnforcedConfigProfilePermission(): string;
        constructor();
        set cachedUsingConfigProfilePermission(value: boolean);
        set cachedHasServerProfileEditPermission(value: boolean);
        set cachedEnforcedConfigProfilePermission(value: string);
        get usingConfigProfilePermission(): boolean;
        get enforcedConfigProfilePermission(): string;
    }
}
