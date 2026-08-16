import { $Level_ } from "@package/net/minecraft/world/level";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Component } from "@package/net/minecraft/network/chat";
import { $IPlayerAbilities } from "@package/com/furiusmax/bjornlib/capability";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Enum } from "@package/java/lang";

declare module "@package/com/furiusmax/bjornlib/ability" {
    export class $AbilityType {
        getName(): $Component;
        getParent(): $AbilityType;
        getId(): $ResourceLocation;
        getDescription(arg0: number): $Component;
        getCost(): number;
        getMaxLevel(): number;
        getCastType(): $AbilityType$AbilityCastType;
        createAbility(arg0: $Player, arg1: number): $Ability;
        getCooldown(): number;
        onLevelUp(arg0: $IPlayerAbilities, arg1: $Ability): boolean;
        static EMPTY: $AbilityType;
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: $AbilityType$AbilityCastType_);
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: $AbilityType$AbilityCastType_);
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: $AbilityType$AbilityCastType_, arg5: $AbilityType_);
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: $AbilityType$AbilityCastType_, arg4: $AbilityType_);
        get name(): $Component;
        get parent(): $AbilityType;
        get id(): $ResourceLocation;
        get cost(): number;
        get maxLevel(): number;
        get castType(): $AbilityType$AbilityCastType;
        get cooldown(): number;
    }
    /**
     * Values that may be interpreted as {@link $AbilityType}.
     */
    export type $AbilityType_ = RegistryTypes.BjornlibBjornAbility;
    export class $Ability {
        /**
         * @deprecated
         */
        tick(): void;
        getLevel(): number;
        setLevel(arg0: number): $Ability;
        startCooldown(arg0: $Level_): void;
        setPlayer(arg0: $Player): void;
        setExtraData(arg0: $CompoundTag_): void;
        getCost(): number;
        getPlayer(): $Player;
        getMaxLevel(): number;
        getExtraData(): $CompoundTag;
        writeTag(arg0: $CompoundTag_): void;
        readTag(arg0: $CompoundTag_): void;
        /**
         * @deprecated
         */
        canCastAbility(): boolean;
        canCastAbility(arg0: $Level_): boolean;
        levelUp(arg0: $IPlayerAbilities, arg1: boolean): void;
        maxLevel: number;
        lastTimeUsed: number;
        cost: number;
        level: number;
        extraData: $CompoundTag;
        cooldown: number;
        /**
         * @deprecated
         */
        cooldownTimer: number;
        type: $AbilityType;
        constructor(arg0: $AbilityType_, arg1: $Player, arg2: number);
    }
    export interface $AbilityType extends RegistryMarked<RegistryTypes.BjornlibBjornAbilityTag, RegistryTypes.BjornlibBjornAbility> {}
    export class $AbilityType$AbilityCastType extends $Enum<$AbilityType$AbilityCastType> {
        static values(): $AbilityType$AbilityCastType[];
        static valueOf(arg0: string): $AbilityType$AbilityCastType;
        static PASSIVE: $AbilityType$AbilityCastType;
        static VIEWING: $AbilityType$AbilityCastType;
        static ENTITY_TARGET: $AbilityType$AbilityCastType;
        static SELF: $AbilityType$AbilityCastType;
        static BLOCK_TARGET: $AbilityType$AbilityCastType;
    }
    /**
     * Values that may be interpreted as {@link $AbilityType$AbilityCastType}.
     */
    export type $AbilityType$AbilityCastType_ = "passive" | "self" | "viewing" | "block_target" | "entity_target";
}
