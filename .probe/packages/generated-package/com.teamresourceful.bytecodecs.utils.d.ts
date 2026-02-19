declare module "com.teamresourceful.bytecodecs.utils.Either" {
import {$Optional} from "java.util.Optional"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $Either$$Interface<L, R> {

(arg0: $Function<(L), (T)>, arg1: $Function<(R), (T)>): T
}

export class $Either<L, R> implements $Either$$Interface {
 "isLeft"(): boolean
static "ofLeft"<L, R>(arg0: L): $Either<(L), (R)>
static "ofRight"<L, R>(arg0: R): $Either<(L), (R)>
static "value"<T>(arg0: $Either$$Type<(T), (T)>): T
 "map"<T>(arg0: $Function$$Type<(L), (T)>, arg1: $Function$$Type<(R), (T)>): T
 "left"(): $Optional<(L)>
 "right"(): $Optional<(R)>
 "isRight"(): boolean
 "ifLeft"(arg0: $Consumer$$Type<(L)>): $Either<(L), (R)>
 "ifRight"(arg0: $Consumer$$Type<(R)>): $Either<(L), (R)>
 "mapEither"<F, S>(arg0: $Function$$Type<(L), (F)>, arg1: $Function$$Type<(R), (S)>): $Either<(F), (S)>
 "mapRight"<T>(arg0: $Function$$Type<(R), (T)>): $Either<(L), (T)>
 "mapLeft"<T>(arg0: $Function$$Type<(L), (T)>): $Either<(T), (R)>
 "leftOr"(arg0: L): L
 "rightOr"(arg0: R): R
 "leftOrThrow"(): L
 "rightOrThrow"(): R
 "ifRightOrElse"(arg0: $Consumer$$Type<(R)>, arg1: $Runnable$$Type): $Either<(L), (R)>
 "ifLeftOrElse"(arg0: $Consumer$$Type<(L)>, arg1: $Runnable$$Type): $Either<(L), (R)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Either$$Type<L, R> = ((arg0: $Function<(L), (T)>, arg1: $Function<(R), (T)>) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Either$$Original<L, R> = $Either<(L), (R)>;}
