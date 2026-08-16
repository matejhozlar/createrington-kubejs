import { $YggdrasilAuthenticationService } from "@package/com/mojang/authlib/yggdrasil";

declare module "@package/net/fw14/createAddons/accessDenied/mixin" {
    export class $MinecraftAccessor {
    }
    export interface $MinecraftAccessor {
        getAuthenticationService(): $YggdrasilAuthenticationService;
        get authenticationService(): $YggdrasilAuthenticationService;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftAccessor}.
     */
    export type $MinecraftAccessor_ = (() => $YggdrasilAuthenticationService);
}
