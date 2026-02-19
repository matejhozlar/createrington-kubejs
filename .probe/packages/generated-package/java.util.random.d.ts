declare module "java.util.random.RandomGenerator" {
import {$IntStream} from "java.util.stream.IntStream"
import {$LongStream} from "java.util.stream.LongStream"
import {$DoubleStream} from "java.util.stream.DoubleStream"

export interface $RandomGenerator$$Interface {

(): long
get "default"(): $RandomGenerator
get "deprecated"(): boolean
}

export class $RandomGenerator implements $RandomGenerator$$Interface {
static "getDefault"(): $RandomGenerator
static "of"(arg0: StringJS): $RandomGenerator
 "nextDouble"(arg0: double): double
 "nextDouble"(): double
 "nextDouble"(arg0: double, arg1: double): double
 "nextInt"(arg0: integer): integer
 "nextInt"(arg0: integer, arg1: integer): integer
 "nextInt"(): integer
 "nextBytes"(arg0: (byte)[]): void
 "ints"(arg0: integer, arg1: integer): $IntStream
 "ints"(): $IntStream
 "ints"(arg0: long): $IntStream
 "ints"(arg0: long, arg1: integer, arg2: integer): $IntStream
 "longs"(arg0: long, arg1: long, arg2: long): $LongStream
 "longs"(arg0: long, arg1: long): $LongStream
 "longs"(): $LongStream
 "longs"(arg0: long): $LongStream
 "doubles"(): $DoubleStream
 "doubles"(arg0: long, arg1: double, arg2: double): $DoubleStream
 "doubles"(arg0: double, arg1: double): $DoubleStream
 "doubles"(arg0: long): $DoubleStream
 "nextLong"(arg0: long, arg1: long): long
 "nextLong"(): long
 "nextLong"(arg0: long): long
 "nextBoolean"(): boolean
 "nextFloat"(): float
 "nextFloat"(arg0: float): float
 "nextFloat"(arg0: float, arg1: float): float
 "nextGaussian"(arg0: double, arg1: double): double
 "nextGaussian"(): double
 "isDeprecated"(): boolean
 "nextExponential"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RandomGenerator$$Type = (() => long);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RandomGenerator$$Original = $RandomGenerator;}
