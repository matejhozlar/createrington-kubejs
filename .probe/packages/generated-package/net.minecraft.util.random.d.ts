declare module "net.minecraft.util.random.WeightedEntry$IntrusiveBase" {
import {$WeightedEntry$$Interface} from "net.minecraft.util.random.WeightedEntry"
import {$WeightedEntry$Wrapper} from "net.minecraft.util.random.WeightedEntry$Wrapper"
import {$Weight, $Weight$$Type} from "net.minecraft.util.random.Weight"

export class $WeightedEntry$IntrusiveBase implements $WeightedEntry$$Interface {
constructor(arg0: integer)
constructor(arg0: $Weight$$Type)

public "getWeight"(): $Weight
public static "wrap"<T>(arg0: T, arg1: integer): $WeightedEntry$Wrapper<(T)>
get "weight"(): $Weight
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeightedEntry$IntrusiveBase$$Type = ($WeightedEntry$IntrusiveBase);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WeightedEntry$IntrusiveBase$$Original = $WeightedEntry$IntrusiveBase;}
declare module "net.minecraft.util.random.WeightedEntry$Wrapper" {
import {$WeightedEntry$$Interface} from "net.minecraft.util.random.WeightedEntry"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Weight, $Weight$$Type} from "net.minecraft.util.random.Weight"
import {$Record} from "java.lang.Record"

export class $WeightedEntry$Wrapper<T> extends $Record implements $WeightedEntry$$Interface {
constructor(arg0: T, arg1: $Weight$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "data"(): T
public "weight"(): $Weight
public static "codec"<E>(arg0: $Codec$$Type<(E)>): $Codec<($WeightedEntry$Wrapper<(E)>)>
public "getWeight"(): $Weight
public static "wrap"<T>(arg0: T, arg1: integer): $WeightedEntry$Wrapper<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeightedEntry$Wrapper$$Type<T> = ({"weight"?: $Weight$$Type, "data"?: T}) | ([weight?: $Weight$$Type, data?: T]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WeightedEntry$Wrapper$$Original<T> = $WeightedEntry$Wrapper<(T)>;}
declare module "net.minecraft.util.random.SimpleWeightedRandomList$Builder" {
import {$SimpleWeightedRandomList} from "net.minecraft.util.random.SimpleWeightedRandomList"

export class $SimpleWeightedRandomList$Builder<E> {
constructor()

public "add"(arg0: E, arg1: integer): $SimpleWeightedRandomList$Builder<(E)>
public "add"(arg0: E): $SimpleWeightedRandomList$Builder<(E)>
public "build"(): $SimpleWeightedRandomList<(E)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleWeightedRandomList$Builder$$Type<E> = ($SimpleWeightedRandomList$Builder<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleWeightedRandomList$Builder$$Original<E> = $SimpleWeightedRandomList$Builder<(E)>;}
declare module "net.minecraft.util.random.WeightedEntry" {
import {$WeightedEntry$Wrapper} from "net.minecraft.util.random.WeightedEntry$Wrapper"
import {$Weight, $Weight$$Type} from "net.minecraft.util.random.Weight"

export interface $WeightedEntry$$Interface {

(): $Weight$$Type
get "weight"(): $Weight
}

export class $WeightedEntry implements $WeightedEntry$$Interface {
static "wrap"<T>(arg0: T, arg1: integer): $WeightedEntry$Wrapper<(T)>
 "getWeight"(): $Weight
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeightedEntry$$Type = (() => $Weight$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WeightedEntry$$Original = $WeightedEntry;}
declare module "net.minecraft.util.random.WeightedRandomList" {
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$WeightedEntry, $WeightedEntry$$Type} from "net.minecraft.util.random.WeightedEntry"
import {$Optional} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"

export class $WeightedRandomList<E extends $WeightedEntry> {
public "getRandom"(arg0: $RandomSource$$Type): $Optional<(E)>
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isEmpty"(): boolean
public static "create"<E extends $WeightedEntry>(...arg0: (E)[]): $WeightedRandomList<(E)>
public static "create"<E extends $WeightedEntry>(): $WeightedRandomList<(E)>
public static "create"<E extends $WeightedEntry>(arg0: $List$$Type<(E)>): $WeightedRandomList<(E)>
public "unwrap"(): $List
public static "codec"<E extends $WeightedEntry>(arg0: $Codec$$Type<(E)>): $Codec<($WeightedRandomList<(E)>)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeightedRandomList$$Type<E> = ($WeightedRandomList<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WeightedRandomList$$Original<E> = $WeightedRandomList<(E)>;}
declare module "net.minecraft.util.random.Weight" {
import {$Codec} from "com.mojang.serialization.Codec"

export class $Weight {
static readonly "CODEC": $Codec<($Weight)>

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"(arg0: integer): $Weight
public "asInt"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Weight$$Type = ($Weight);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Weight$$Original = $Weight;}
declare module "net.minecraft.util.random.SimpleWeightedRandomList" {
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Optional} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$WeightedEntry$Wrapper} from "net.minecraft.util.random.WeightedEntry$Wrapper"
import {$WeightedRandomList} from "net.minecraft.util.random.WeightedRandomList"
import {$SimpleWeightedRandomList$Builder} from "net.minecraft.util.random.SimpleWeightedRandomList$Builder"

export class $SimpleWeightedRandomList<E> extends $WeightedRandomList<($WeightedEntry$Wrapper<(E)>)> {
public static "builder"<E>(): $SimpleWeightedRandomList$Builder<(E)>
public static "single"<E>(arg0: E): $SimpleWeightedRandomList<(E)>
public static "empty"<E>(): $SimpleWeightedRandomList<(E)>
public static "wrappedCodecAllowingEmpty"<E>(arg0: $Codec$$Type<(E)>): $Codec<($SimpleWeightedRandomList<(E)>)>
public static "wrappedCodec"<E>(arg0: $Codec$$Type<(E)>): $Codec<($SimpleWeightedRandomList<(E)>)>
public "getRandomValue"(arg0: $RandomSource$$Type): $Optional<(E)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleWeightedRandomList$$Type<E> = ($SimpleWeightedRandomList<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleWeightedRandomList$$Original<E> = $SimpleWeightedRandomList<(E)>;}
