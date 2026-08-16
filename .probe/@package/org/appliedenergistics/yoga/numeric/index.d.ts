
declare module "@package/org/appliedenergistics/yoga/numeric" {
    export class $FloatOptional {
        compareTo(arg0: $FloatOptional): number;
        getValue(): number;
        add(arg0: $FloatOptional): $FloatOptional;
        static of(): $FloatOptional;
        static of(arg0: number): $FloatOptional;
        unwrap(): number;
        isDefined(): boolean;
        isLessThan(arg0: $FloatOptional): boolean;
        isGreaterThanOrEqual(arg0: $FloatOptional): boolean;
        isUndefined(): boolean;
        inexactEquals(arg0: $FloatOptional): boolean;
        maxOrDefined(arg0: $FloatOptional): $FloatOptional;
        isLessThanOrEqual(arg0: $FloatOptional): boolean;
        isGreaterThan(arg0: $FloatOptional): boolean;
        unwrapOrDefault(arg0: number): number;
        get value(): number;
        get defined(): boolean;
        get undefined(): boolean;
    }
}
