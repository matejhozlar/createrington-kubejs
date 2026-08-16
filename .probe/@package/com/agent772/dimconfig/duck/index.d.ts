import { $Holder, $Holder_ } from "@package/net/minecraft/core";
import { $NoiseGeneratorSettings } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/com/agent772/dimconfig/duck" {
    export class $NoiseSettingsOverride {
    }
    export interface $NoiseSettingsOverride {
        dimconfig$setNoiseSettingsOverride(arg0: $Holder_<$NoiseGeneratorSettings>): void;
        dimconfig$getNoiseSettingsOverride(): $Holder<$NoiseGeneratorSettings>;
    }
}
