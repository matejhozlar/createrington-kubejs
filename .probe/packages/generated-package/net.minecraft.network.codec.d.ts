declare module "net.minecraft.network.codec.StreamEncoder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $StreamEncoder$$Interface<O, T> {

(arg0: O, arg1: T): void
}

export class $StreamEncoder<O, T> implements $StreamEncoder$$Interface {
 "encode"(arg0: O, arg1: T): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StreamEncoder$$Type<O, T> = ((arg0: O, arg1: T) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StreamEncoder$$Original<O, T> = $StreamEncoder<(O), (T)>;}
declare module "net.minecraft.network.codec.StreamCodec" {
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$StreamEncoder$$Type, $StreamEncoder$$Interface} from "net.minecraft.network.codec.StreamEncoder"
import {$Function6$$Type} from "com.mojang.datafixers.util.Function6"
import {$StreamDecoder$$Type, $StreamDecoder$$Interface} from "net.minecraft.network.codec.StreamDecoder"
import {$Function5$$Type} from "com.mojang.datafixers.util.Function5"
import {$Function4$$Type} from "com.mojang.datafixers.util.Function4"
import {$Function3$$Type} from "com.mojang.datafixers.util.Function3"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$StreamCodec$CodecOperation$$Type} from "net.minecraft.network.codec.StreamCodec$CodecOperation"
import {$Function$$Type} from "java.util.function.Function"

export interface $StreamCodec$$Interface<B, V> extends $StreamDecoder$$Interface<(B), (V)>, $StreamEncoder$$Interface<(B), (V)> {
}

export class $StreamCodec<B, V> implements $StreamCodec$$Interface {
 "dispatch"<U>(arg0: $Function$$Type<(U), (V)>, arg1: $Function$$Type<(V), ($StreamCodec$$Type<(B), (U)>)>): $StreamCodec<(B), (U)>
 "cast"<S>(): $StreamCodec<(S), (V)>
 "apply"<O>(arg0: $StreamCodec$CodecOperation$$Type<(B), (V), (O)>): $StreamCodec<(B), (O)>
 "map"<O>(arg0: $Function$$Type<(V), (O)>, arg1: $Function$$Type<(O), (V)>): $StreamCodec<(B), (O)>
static "of"<B, V>(arg0: $StreamEncoder$$Type<(B), (V)>, arg1: $StreamDecoder$$Type<(B), (V)>): $StreamCodec<(B), (V)>
static "unit"<B, V>(arg0: V): $StreamCodec<(B), (V)>
static "recursive"<B, T>(arg0: $UnaryOperator$$Type<($StreamCodec<(B), (T)>)>): $StreamCodec<(B), (T)>
 "mapStream"<O extends $ByteBuf>(arg0: $Function$$Type<(O), (B)>): $StreamCodec<(O), (V)>
static "composite"<B, C, T1>(arg0: $StreamCodec$$Type<(B), (T1)>, arg1: $Function$$Type<(C), (T1)>, arg2: $Function$$Type<(T1), (C)>): $StreamCodec<(B), (C)>
static "composite"<B, C, T1, T2, T3, T4, T5, T6>(arg0: $StreamCodec$$Type<(B), (T1)>, arg1: $Function$$Type<(C), (T1)>, arg2: $StreamCodec$$Type<(B), (T2)>, arg3: $Function$$Type<(C), (T2)>, arg4: $StreamCodec$$Type<(B), (T3)>, arg5: $Function$$Type<(C), (T3)>, arg6: $StreamCodec$$Type<(B), (T4)>, arg7: $Function$$Type<(C), (T4)>, arg8: $StreamCodec$$Type<(B), (T5)>, arg9: $Function$$Type<(C), (T5)>, arg10: $StreamCodec$$Type<(B), (T6)>, arg11: $Function$$Type<(C), (T6)>, arg12: $Function6$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (C)>): $StreamCodec<(B), (C)>
static "composite"<B, C, T1, T2, T3, T4, T5>(arg0: $StreamCodec$$Type<(B), (T1)>, arg1: $Function$$Type<(C), (T1)>, arg2: $StreamCodec$$Type<(B), (T2)>, arg3: $Function$$Type<(C), (T2)>, arg4: $StreamCodec$$Type<(B), (T3)>, arg5: $Function$$Type<(C), (T3)>, arg6: $StreamCodec$$Type<(B), (T4)>, arg7: $Function$$Type<(C), (T4)>, arg8: $StreamCodec$$Type<(B), (T5)>, arg9: $Function$$Type<(C), (T5)>, arg10: $Function5$$Type<(T1), (T2), (T3), (T4), (T5), (C)>): $StreamCodec<(B), (C)>
static "composite"<B, C, T1, T2>(arg0: $StreamCodec$$Type<(B), (T1)>, arg1: $Function$$Type<(C), (T1)>, arg2: $StreamCodec$$Type<(B), (T2)>, arg3: $Function$$Type<(C), (T2)>, arg4: $BiFunction$$Type<(T1), (T2), (C)>): $StreamCodec<(B), (C)>
static "composite"<B, C, T1, T2, T3>(arg0: $StreamCodec$$Type<(B), (T1)>, arg1: $Function$$Type<(C), (T1)>, arg2: $StreamCodec$$Type<(B), (T2)>, arg3: $Function$$Type<(C), (T2)>, arg4: $StreamCodec$$Type<(B), (T3)>, arg5: $Function$$Type<(C), (T3)>, arg6: $Function3$$Type<(T1), (T2), (T3), (C)>): $StreamCodec<(B), (C)>
static "composite"<B, C, T1, T2, T3, T4>(arg0: $StreamCodec$$Type<(B), (T1)>, arg1: $Function$$Type<(C), (T1)>, arg2: $StreamCodec$$Type<(B), (T2)>, arg3: $Function$$Type<(C), (T2)>, arg4: $StreamCodec$$Type<(B), (T3)>, arg5: $Function$$Type<(C), (T3)>, arg6: $StreamCodec$$Type<(B), (T4)>, arg7: $Function$$Type<(C), (T4)>, arg8: $Function4$$Type<(T1), (T2), (T3), (T4), (C)>): $StreamCodec<(B), (C)>
static "ofMember"<B, V>(arg0: $StreamMemberEncoder$$Type<(B), (V)>, arg1: $StreamDecoder$$Type<(B), (V)>): $StreamCodec<(B), (V)>
 "decode"(arg0: B): V
 "encode"(arg0: B, arg1: V): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StreamCodec$$Type<B, V> = ($StreamCodec<(B), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StreamCodec$$Original<B, V> = $StreamCodec<(B), (V)>;}
declare module "net.minecraft.network.codec.StreamDecoder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $StreamDecoder$$Interface<I, T> {

(arg0: I): T
}

export class $StreamDecoder<I, T> implements $StreamDecoder$$Interface {
 "decode"(arg0: I): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StreamDecoder$$Type<I, T> = ((arg0: I) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StreamDecoder$$Original<I, T> = $StreamDecoder<(I), (T)>;}
declare module "net.minecraft.network.codec.StreamCodec$CodecOperation" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"

export interface $StreamCodec$CodecOperation$$Interface<B, S, T> {

(arg0: $StreamCodec<(B), (S)>): $StreamCodec$$Type<(B), (T)>
}

export class $StreamCodec$CodecOperation<B, S, T> implements $StreamCodec$CodecOperation$$Interface {
 "apply"(arg0: $StreamCodec$$Type<(B), (S)>): $StreamCodec<(B), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StreamCodec$CodecOperation$$Type<B, S, T> = ((arg0: $StreamCodec<(B), (S)>) => $StreamCodec$$Type<(B), (T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StreamCodec$CodecOperation$$Original<B, S, T> = $StreamCodec$CodecOperation<(B), (S), (T)>;}
declare module "net.minecraft.network.codec.StreamMemberEncoder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $StreamMemberEncoder$$Interface<O, T> {

(arg0: T, arg1: O): void
}

export class $StreamMemberEncoder<O, T> implements $StreamMemberEncoder$$Interface {
 "encode"(arg0: T, arg1: O): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StreamMemberEncoder$$Type<O, T> = ((arg0: T, arg1: O) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StreamMemberEncoder$$Original<O, T> = $StreamMemberEncoder<(O), (T)>;}
