import { $FloatOptional } from "@package/org/appliedenergistics/yoga/numeric";
import { $YogaValue } from "@package/org/appliedenergistics/yoga";

declare module "@package/org/appliedenergistics/yoga/style" {
    export class $StyleLength {
        value(): $FloatOptional;
        resolve(arg0: number): $FloatOptional;
        isDefined(): boolean;
        static percent(arg0: number): $StyleLength;
        static points(arg0: number): $StyleLength;
        static undefined(): $StyleLength;
        isUndefined(): boolean;
        isPoints(): boolean;
        static ofAuto(): $StyleLength;
        isAuto(): boolean;
        isPercent(): boolean;
        inexactEquals(arg0: $StyleLength): boolean;
        asYogaValue(): $YogaValue;
        static fromYogaValue(arg0: $YogaValue): $StyleLength;
        get defined(): boolean;
        get auto(): boolean;
    }
    export class $StyleSizeLength {
        value(): $FloatOptional;
        resolve(arg0: number): $FloatOptional;
        isDefined(): boolean;
        static percent(arg0: number): $StyleSizeLength;
        static points(arg0: number): $StyleSizeLength;
        static undefined(): $StyleSizeLength;
        isUndefined(): boolean;
        isPoints(): boolean;
        isStretch(): boolean;
        static ofAuto(): $StyleSizeLength;
        isAuto(): boolean;
        isPercent(): boolean;
        isFitContent(): boolean;
        isMaxContent(): boolean;
        static ofMaxContent(): $StyleSizeLength;
        inexactEquals(arg0: $StyleSizeLength): boolean;
        asYogaValue(): $YogaValue;
        static ofFitContent(): $StyleSizeLength;
        static fromYogaValue(arg0: $YogaValue): $StyleSizeLength;
        static ofStretch(): $StyleSizeLength;
        static AUTO: $StyleSizeLength;
        static STRETCH: $StyleSizeLength;
        static MAX_CONTENT: $StyleSizeLength;
        static UNDEFINED: $StyleSizeLength;
        static FIT_CONTENT: $StyleSizeLength;
        get defined(): boolean;
        get stretch(): boolean;
        get auto(): boolean;
        get fitContent(): boolean;
        get maxContent(): boolean;
    }
}
