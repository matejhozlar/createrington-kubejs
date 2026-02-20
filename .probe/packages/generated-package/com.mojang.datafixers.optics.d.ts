declare module "com.mojang.datafixers.optics.Optic" {
import {$App, $App$$Type} from "com.mojang.datafixers.kinds.App"
import {$App2, $App2$$Type} from "com.mojang.datafixers.kinds.App2"
import {$Optional} from "java.util.Optional"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$K1, $K1$$Type} from "com.mojang.datafixers.kinds.K1"
import {$Set$$Type} from "java.util.Set"
import {$K2} from "com.mojang.datafixers.kinds.K2"
import {$TypeToken$$Type} from "com.google.common.reflect.TypeToken"

export interface $Optic$$Interface<Proof extends $K1, S, T, A, B> {

(arg0: $App<(Proof), (P)>): $Function$$Type<($App2$$Type<(P), (A), (B)>), ($App2$$Type<(P), (S), (T)>)>
}

export class $Optic<Proof extends $K1, S, T, A, B> implements $Optic$$Interface {
 "eval"<P extends $K2>(arg0: $App$$Type<(Proof), (P)>): $Function<($App2<(P), (A), (B)>), ($App2<(P), (S), (T)>)>
 "upCast"<Proof2 extends $K1>(arg0: $Set$$Type<($TypeToken$$Type<($K1$$Type)>)>, arg1: $TypeToken$$Type<(Proof2)>): $Optional<($Optic<(Proof2), (S), (T), (A), (B)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Optic$$Type<Proof, S, T, A, B> = ((arg0: $App<(Proof), (P)>) => $Function$$Type<($App2$$Type<(P), (A), (B)>), ($App2$$Type<(P), (S), (T)>)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Optic$$Original<Proof, S, T, A, B> = $Optic<(Proof), (S), (T), (A), (B)>;}
