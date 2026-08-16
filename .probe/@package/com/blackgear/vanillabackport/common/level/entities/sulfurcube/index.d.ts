import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item } from "@package/net/minecraft/world/item";
import { $FloatProvider } from "@package/net/minecraft/util/valueproviders";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $AttributeModifier_, $Attribute, $AttributeModifier } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $DamageType } from "@package/net/minecraft/world/damagesource";

declare module "@package/com/blackgear/vanillabackport/common/level/entities/sulfurcube" {
    export interface $SulfurCubeArchetype extends RegistryMarked<RegistryTypes.VanillabackportSulfurCubeArchetypesTag, RegistryTypes.VanillabackportSulfurCubeArchetypes> {}
    export class $SulfurCubeArchetype$ExplosionData extends $Record {
        power(): number;
        fuse(): number;
        causesFire(): boolean;
        static CODEC: $Codec<$SulfurCubeArchetype$ExplosionData>;
        constructor(power: number, causesFire: boolean, fuse: number);
    }
    /**
     * Values that may be interpreted as {@link $SulfurCubeArchetype$ExplosionData}.
     */
    export type $SulfurCubeArchetype$ExplosionData_ = { causesFire?: boolean, power?: number, fuse?: number,  } | [causesFire?: boolean, power?: number, fuse?: number, ];
    export class $SulfurCubeArchetype$KnockbackModifiers extends $Record {
        verticalPower(): number;
        horizontalPower(): number;
        static CODEC: $Codec<$SulfurCubeArchetype$KnockbackModifiers>;
        constructor(horizontalPower: number, verticalPower: number);
    }
    /**
     * Values that may be interpreted as {@link $SulfurCubeArchetype$KnockbackModifiers}.
     */
    export type $SulfurCubeArchetype$KnockbackModifiers_ = { verticalPower?: number, horizontalPower?: number,  } | [verticalPower?: number, horizontalPower?: number, ];
    export class $SulfurCubeArchetype extends $Record {
        items(): $TagKey<$Item>;
        attributeModifiers(): $List<$SulfurCubeArchetype$AttributeEntry>;
        explosion(): ($SulfurCubeArchetype$ExplosionData) | undefined;
        buoyant(): boolean;
        knockbackModifiers(): $SulfurCubeArchetype$KnockbackModifiers;
        soundSettings(): $SulfurCubeArchetype$SoundSettings;
        contactDamage(): ($SulfurCubeArchetype$ContactDamage) | undefined;
        static DEFAULT_KNOCKBACK_MODIFIERS: $SulfurCubeArchetype$KnockbackModifiers;
        static DIRECT_CODEC: $Codec<$SulfurCubeArchetype>;
        static DEFAULT_SOUND_SETTINGS: $SulfurCubeArchetype$SoundSettings;
        constructor(items: $TagKey_<$Item>, attributeModifiers: $List_<$SulfurCubeArchetype$AttributeEntry_>, buoyant: boolean, explosion: ($SulfurCubeArchetype$ExplosionData_) | undefined, contactDamage: ($SulfurCubeArchetype$ContactDamage_) | undefined, knockbackModifiers: $SulfurCubeArchetype$KnockbackModifiers_, soundSettings: $SulfurCubeArchetype$SoundSettings_);
    }
    /**
     * Values that may be interpreted as {@link $SulfurCubeArchetype}.
     */
    export type $SulfurCubeArchetype_ = RegistryTypes.VanillabackportSulfurCubeArchetypes | { contactDamage?: ($SulfurCubeArchetype$ContactDamage_) | undefined, attributeModifiers?: $List_<$SulfurCubeArchetype$AttributeEntry_>, items?: $TagKey_<$Item>, knockbackModifiers?: $SulfurCubeArchetype$KnockbackModifiers_, soundSettings?: $SulfurCubeArchetype$SoundSettings_, explosion?: ($SulfurCubeArchetype$ExplosionData_) | undefined, buoyant?: boolean,  } | [contactDamage?: ($SulfurCubeArchetype$ContactDamage_) | undefined, attributeModifiers?: $List_<$SulfurCubeArchetype$AttributeEntry_>, items?: $TagKey_<$Item>, knockbackModifiers?: $SulfurCubeArchetype$KnockbackModifiers_, soundSettings?: $SulfurCubeArchetype$SoundSettings_, explosion?: ($SulfurCubeArchetype$ExplosionData_) | undefined, buoyant?: boolean, ];
    export class $SulfurCubeArchetype$AttributeEntry extends $Record {
        static add(attribute: $Holder_<$Attribute>, amount: number, archetype: $ResourceKey_<$SulfurCubeArchetype>): $SulfurCubeArchetype$AttributeEntry;
        static multiply(attribute: $Holder_<$Attribute>, amount: number, archetype: $ResourceKey_<$SulfurCubeArchetype>): $SulfurCubeArchetype$AttributeEntry;
        modifier(): $AttributeModifier;
        attribute(): $Holder<$Attribute>;
        static CODEC: $Codec<$SulfurCubeArchetype$AttributeEntry>;
        constructor(attribute: $Holder_<$Attribute>, modifier: $AttributeModifier_);
    }
    /**
     * Values that may be interpreted as {@link $SulfurCubeArchetype$AttributeEntry}.
     */
    export type $SulfurCubeArchetype$AttributeEntry_ = { modifier?: $AttributeModifier_, attribute?: $Holder_<$Attribute>,  } | [modifier?: $AttributeModifier_, attribute?: $Holder_<$Attribute>, ];
    export class $SulfurCubeArchetype$ContactDamage extends $Record {
        amount(): $FloatProvider;
        damageType(): $ResourceKey<$DamageType>;
        attributeToSource(): boolean;
        static CODEC: $Codec<$SulfurCubeArchetype$ContactDamage>;
        constructor(damageType: $ResourceKey_<$DamageType>, amount: $FloatProvider, attributeToSource: boolean);
    }
    /**
     * Values that may be interpreted as {@link $SulfurCubeArchetype$ContactDamage}.
     */
    export type $SulfurCubeArchetype$ContactDamage_ = { attributeToSource?: boolean, damageType?: $ResourceKey_<$DamageType>, amount?: $FloatProvider,  } | [attributeToSource?: boolean, damageType?: $ResourceKey_<$DamageType>, amount?: $FloatProvider, ];
    export class $SulfurCubeArchetype$SoundSettings extends $Record {
        pushSoundImpulseThreshold(): number;
        hitSound(): $Holder<$SoundEvent>;
        pushSound(): $Holder<$SoundEvent>;
        pushSoundCooldown(): number;
        static CODEC: $Codec<$SulfurCubeArchetype$SoundSettings>;
        constructor(hitSound: $Holder_<$SoundEvent>, pushSound: $Holder_<$SoundEvent>, pushSoundImpulseThreshold: number, pushSoundCooldown: number);
    }
    /**
     * Values that may be interpreted as {@link $SulfurCubeArchetype$SoundSettings}.
     */
    export type $SulfurCubeArchetype$SoundSettings_ = { pushSound?: $Holder_<$SoundEvent>, pushSoundCooldown?: number, pushSoundImpulseThreshold?: number, hitSound?: $Holder_<$SoundEvent>,  } | [pushSound?: $Holder_<$SoundEvent>, pushSoundCooldown?: number, pushSoundImpulseThreshold?: number, hitSound?: $Holder_<$SoundEvent>, ];
}
