import { $Enum, $Record } from "@package/java/lang";

declare module "@package/me/yassigame/sable_beyond/api/mass" {
    export class $EntityMass$MassResolution extends $Record {
        source(): $MassSource;
        mass(): number;
        constructor(mass: number, source: $MassSource_);
    }
    /**
     * Values that may be interpreted as {@link $EntityMass$MassResolution}.
     */
    export type $EntityMass$MassResolution_ = { source?: $MassSource_, mass?: number,  } | [source?: $MassSource_, mass?: number, ];
    export class $MassSource extends $Enum<$MassSource> {
        static values(): $MassSource[];
        static valueOf(name: string): $MassSource;
        static AUTO: $MassSource;
        static ITEM_FORMULA: $MassSource;
        static ENTITY_FORMULA: $MassSource;
        static ITEM_AUTO: $MassSource;
        static NBT_OVERRIDE: $MassSource;
        static ENTITY_OVERRIDE: $MassSource;
        static ITEM_FORMULA_FALLBACK: $MassSource;
        static ITEM_OVERRIDE: $MassSource;
        static ENTITY_FORMULA_FALLBACK: $MassSource;
        static BASE_FALLBACK: $MassSource;
    }
    /**
     * Values that may be interpreted as {@link $MassSource}.
     */
    export type $MassSource_ = "nbt_override" | "entity_formula" | "entity_formula_fallback" | "item_override" | "item_formula" | "item_formula_fallback" | "item_auto" | "entity_override" | "auto" | "base_fallback";
}
