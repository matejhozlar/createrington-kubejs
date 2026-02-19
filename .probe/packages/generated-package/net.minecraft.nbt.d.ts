declare module "net.minecraft.nbt.StreamTagVisitor$ValueResult" {
import {$Enum} from "java.lang.Enum"

export class $StreamTagVisitor$ValueResult extends $Enum<($StreamTagVisitor$ValueResult)> {
static readonly "CONTINUE": $StreamTagVisitor$ValueResult
static readonly "HALT": $StreamTagVisitor$ValueResult
static readonly "BREAK": $StreamTagVisitor$ValueResult

public static "values"(): ($StreamTagVisitor$ValueResult)[]
public static "valueOf"(arg0: StringJS): $StreamTagVisitor$ValueResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StreamTagVisitor$ValueResult$$Type = (("continue") | ("break") | ("halt"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StreamTagVisitor$ValueResult$$Original = $StreamTagVisitor$ValueResult;}
declare module "net.minecraft.nbt.ByteArrayTag" {
import {$TagType} from "net.minecraft.nbt.TagType"
import {$CollectionTag} from "net.minecraft.nbt.CollectionTag"
import {$Collection$$Type} from "java.util.Collection"
import {$SequencedCollection} from "java.util.SequencedCollection"
import {$List, $List$$Type} from "java.util.List"
import {$StreamTagVisitor$ValueResult} from "net.minecraft.nbt.StreamTagVisitor$ValueResult"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$DataOutput$$Type} from "java.io.DataOutput"
import {$ByteTag, $ByteTag$$Type} from "net.minecraft.nbt.ByteTag"
import {$StreamTagVisitor$$Type} from "net.minecraft.nbt.StreamTagVisitor"
import {$TagVisitor$$Type} from "net.minecraft.nbt.TagVisitor"

export class $ByteArrayTag extends $CollectionTag<($ByteTag)> {
static readonly "TYPE": $TagType<($ByteArrayTag)>

constructor(arg0: (byte)[])
constructor(arg0: $List$$Type<(byte)>)

public "setTag"(arg0: integer, arg1: $Tag$$Type): boolean
public "addTag"(arg0: integer, arg1: $Tag$$Type): boolean
public "remove"(arg0: integer): $Tag
public "size"(): integer
public "get"(arg0: integer): $ByteTag
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "clear"(): void
public "add"(arg0: integer, arg1: any): void
public "add"(arg0: integer, arg1: $Tag$$Type): void
public "add"(arg0: integer, arg1: $ByteTag$$Type): void
public "set"(arg0: integer, arg1: $Tag$$Type): $Tag
public "set"(arg0: integer, arg1: any): any
public "set"(arg0: integer, arg1: $ByteTag$$Type): $ByteTag
public "write"(arg0: $DataOutput$$Type): void
public "accept"(arg0: $TagVisitor$$Type): void
public "accept"(arg0: $StreamTagVisitor$$Type): $StreamTagVisitor$ValueResult
public "getId"(): byte
public "getType"(): $TagType<($ByteArrayTag)>
public "copy"(): $Tag
public "getElementType"(): byte
public "sizeInBytes"(): integer
public "getAsByteArray"(): (byte)[]
public "remove"(arg0: any): boolean
public static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $List<(E)>
public "isEmpty"(): boolean
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public "contains"(arg0: any): boolean
public "addAll"(arg0: $Collection$$Type<(E)>): boolean
public "removeAll"(arg0: $Collection$$Type<(never)>): boolean
public "retainAll"(arg0: $Collection$$Type<(never)>): boolean
public "reversed"(): $SequencedCollection
public "containsAll"(arg0: $Collection$$Type<(never)>): boolean
get "id"(): byte
get "type"(): $TagType<($ByteArrayTag)>
get "elementType"(): byte
get "asByteArray"(): (byte)[]
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ByteArrayTag$$Type = ($ByteArrayTag);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ByteArrayTag$$Original = $ByteArrayTag;}
declare module "net.minecraft.nbt.NumericTag" {
import {$TagType} from "net.minecraft.nbt.TagType"
import {$StreamTagVisitor$ValueResult} from "net.minecraft.nbt.StreamTagVisitor$ValueResult"
import {$Tag, $Tag$$Interface} from "net.minecraft.nbt.Tag"
import {$SpecialEquality$$Interface} from "dev.latvian.mods.rhino.util.SpecialEquality"
import {$DataOutput$$Type} from "java.io.DataOutput"
import {$StreamTagVisitor$$Type} from "net.minecraft.nbt.StreamTagVisitor"
import {$TagVisitor$$Type} from "net.minecraft.nbt.TagVisitor"

export class $NumericTag implements $Tag$$Interface, $SpecialEquality$$Interface {
public "toString"(): StringJS
public "getAsDouble"(): double
public "getAsInt"(): integer
public "getAsLong"(): long
public "getAsFloat"(): float
public "getAsShort"(): short
public "getAsByte"(): byte
public "getAsNumber"(): number
public "specialEquals"(o: any, shallow: boolean): boolean
public "write"(arg0: $DataOutput$$Type): void
public "accept"(arg0: $TagVisitor$$Type): void
public "accept"(arg0: $StreamTagVisitor$$Type): $StreamTagVisitor$ValueResult
public "getId"(): byte
public "getType"(): $TagType<(never)>
public "copy"(): $Tag
public "sizeInBytes"(): integer
public "getAsString"(): StringJS
public "acceptAsRoot"(arg0: $StreamTagVisitor$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "asDouble"(): double
get "asInt"(): integer
get "asLong"(): long
get "asFloat"(): float
get "asShort"(): short
get "asByte"(): byte
get "asNumber"(): number
get "id"(): byte
get "type"(): $TagType<(never)>
get "asString"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NumericTag$$Type = ($NumericTag);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NumericTag$$Original = $NumericTag;}
declare module "net.minecraft.nbt.ShortTag" {
import {$TagType} from "net.minecraft.nbt.TagType"
import {$NumericTag} from "net.minecraft.nbt.NumericTag"
import {$StreamTagVisitor$ValueResult} from "net.minecraft.nbt.StreamTagVisitor$ValueResult"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$DataOutput$$Type} from "java.io.DataOutput"
import {$StreamTagVisitor$$Type} from "net.minecraft.nbt.StreamTagVisitor"
import {$TagVisitor$$Type} from "net.minecraft.nbt.TagVisitor"

export class $ShortTag extends $NumericTag {
static readonly "TYPE": $TagType<($ShortTag)>

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "valueOf"(arg0: short): $ShortTag
public "write"(arg0: $DataOutput$$Type): void
public "accept"(arg0: $TagVisitor$$Type): void
public "accept"(arg0: $StreamTagVisitor$$Type): $StreamTagVisitor$ValueResult
public "getId"(): byte
public "getType"(): $TagType<($ShortTag)>
public "copy"(): $Tag
public "getAsDouble"(): double
public "getAsInt"(): integer
public "getAsLong"(): long
public "sizeInBytes"(): integer
public "getAsFloat"(): float
public "getAsShort"(): short
public "getAsByte"(): byte
public "getAsNumber"(): number
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "id"(): byte
get "type"(): $TagType<($ShortTag)>
get "asDouble"(): double
get "asInt"(): integer
get "asLong"(): long
get "asFloat"(): float
get "asShort"(): short
get "asByte"(): byte
get "asNumber"(): number
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShortTag$$Type = ($ShortTag);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShortTag$$Original = $ShortTag;}
declare module "net.minecraft.nbt.IntTag" {
import {$TagType} from "net.minecraft.nbt.TagType"
import {$NumericTag} from "net.minecraft.nbt.NumericTag"
import {$StreamTagVisitor$ValueResult} from "net.minecraft.nbt.StreamTagVisitor$ValueResult"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$DataOutput$$Type} from "java.io.DataOutput"
import {$StreamTagVisitor$$Type} from "net.minecraft.nbt.StreamTagVisitor"
import {$TagVisitor$$Type} from "net.minecraft.nbt.TagVisitor"

export class $IntTag extends $NumericTag {
static readonly "TYPE": $TagType<($IntTag)>

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "valueOf"(arg0: integer): $IntTag
public "write"(arg0: $DataOutput$$Type): void
public "accept"(arg0: $TagVisitor$$Type): void
public "accept"(arg0: $StreamTagVisitor$$Type): $StreamTagVisitor$ValueResult
public "getId"(): byte
public "getType"(): $TagType<($IntTag)>
public "copy"(): $Tag
public "getAsDouble"(): double
public "getAsInt"(): integer
public "getAsLong"(): long
public "sizeInBytes"(): integer
public "getAsFloat"(): float
public "getAsShort"(): short
public "getAsByte"(): byte
public "getAsNumber"(): number
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "id"(): byte
get "type"(): $TagType<($IntTag)>
get "asDouble"(): double
get "asInt"(): integer
get "asLong"(): long
get "asFloat"(): float
get "asShort"(): short
get "asByte"(): byte
get "asNumber"(): number
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntTag$$Type = ($IntTag);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntTag$$Original = $IntTag;}
declare module "net.minecraft.nbt.EndTag" {
import {$TagType} from "net.minecraft.nbt.TagType"
import {$StreamTagVisitor$ValueResult} from "net.minecraft.nbt.StreamTagVisitor$ValueResult"
import {$Tag, $Tag$$Interface} from "net.minecraft.nbt.Tag"
import {$DataOutput$$Type} from "java.io.DataOutput"
import {$StreamTagVisitor$$Type} from "net.minecraft.nbt.StreamTagVisitor"
import {$TagVisitor$$Type} from "net.minecraft.nbt.TagVisitor"

export class $EndTag implements $Tag$$Interface {
static readonly "INSTANCE": $EndTag
static readonly "TYPE": $TagType<($EndTag)>

public "toString"(): StringJS
public "write"(arg0: $DataOutput$$Type): void
public "accept"(arg0: $StreamTagVisitor$$Type): $StreamTagVisitor$ValueResult
public "accept"(arg0: $TagVisitor$$Type): void
public "getId"(): byte
public "getType"(): $TagType<($EndTag)>
public "copy"(): $Tag
public "sizeInBytes"(): integer
public "getAsString"(): StringJS
public "acceptAsRoot"(arg0: $StreamTagVisitor$$Type): void
get "id"(): byte
get "type"(): $TagType<($EndTag)>
get "asString"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EndTag$$Type = ($EndTag);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EndTag$$Original = $EndTag;}
declare module "net.minecraft.nbt.TagType" {
import {$StreamTagVisitor$ValueResult} from "net.minecraft.nbt.StreamTagVisitor$ValueResult"
import {$DataInput$$Type} from "java.io.DataInput"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$NbtAccounter$$Type} from "net.minecraft.nbt.NbtAccounter"
import {$EndTag} from "net.minecraft.nbt.EndTag"
import {$StreamTagVisitor$$Type} from "net.minecraft.nbt.StreamTagVisitor"

export interface $TagType$$Interface<T extends $Tag> {
get "name"(): StringJS
get "value"(): boolean
get "prettyName"(): StringJS
}

export class $TagType<T extends $Tag> implements $TagType$$Interface {
 "parseRoot"(arg0: $DataInput$$Type, arg1: $StreamTagVisitor$$Type, arg2: $NbtAccounter$$Type): void
 "getName"(): StringJS
 "load"(arg0: $DataInput$$Type, arg1: $NbtAccounter$$Type): T
 "parse"(arg0: $DataInput$$Type, arg1: $StreamTagVisitor$$Type, arg2: $NbtAccounter$$Type): $StreamTagVisitor$ValueResult
 "skip"(arg0: $DataInput$$Type, arg1: $NbtAccounter$$Type): void
 "skip"(arg0: $DataInput$$Type, arg1: integer, arg2: $NbtAccounter$$Type): void
 "isValue"(): boolean
 "getPrettyName"(): StringJS
static "createInvalid"(arg0: integer): $TagType<($EndTag)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagType$$Type<T> = ($TagType<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TagType$$Original<T> = $TagType<(T)>;}
declare module "net.minecraft.nbt.StreamTagVisitor$EntryResult" {
import {$Enum} from "java.lang.Enum"

export class $StreamTagVisitor$EntryResult extends $Enum<($StreamTagVisitor$EntryResult)> {
static readonly "HALT": $StreamTagVisitor$EntryResult
static readonly "BREAK": $StreamTagVisitor$EntryResult
static readonly "ENTER": $StreamTagVisitor$EntryResult
static readonly "SKIP": $StreamTagVisitor$EntryResult

public static "values"(): ($StreamTagVisitor$EntryResult)[]
public static "valueOf"(arg0: StringJS): $StreamTagVisitor$EntryResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StreamTagVisitor$EntryResult$$Type = (("enter") | ("skip") | ("break") | ("halt"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StreamTagVisitor$EntryResult$$Original = $StreamTagVisitor$EntryResult;}
declare module "net.minecraft.nbt.IntArrayTag" {
import {$TagType} from "net.minecraft.nbt.TagType"
import {$CollectionTag} from "net.minecraft.nbt.CollectionTag"
import {$Collection$$Type} from "java.util.Collection"
import {$SequencedCollection} from "java.util.SequencedCollection"
import {$List, $List$$Type} from "java.util.List"
import {$StreamTagVisitor$ValueResult} from "net.minecraft.nbt.StreamTagVisitor$ValueResult"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$DataOutput$$Type} from "java.io.DataOutput"
import {$IntTag, $IntTag$$Type} from "net.minecraft.nbt.IntTag"
import {$StreamTagVisitor$$Type} from "net.minecraft.nbt.StreamTagVisitor"
import {$TagVisitor$$Type} from "net.minecraft.nbt.TagVisitor"

export class $IntArrayTag extends $CollectionTag<($IntTag)> {
static readonly "TYPE": $TagType<($IntArrayTag)>

constructor(arg0: (integer)[])
constructor(arg0: $List$$Type<(integer)>)

public "setTag"(arg0: integer, arg1: $Tag$$Type): boolean
public "addTag"(arg0: integer, arg1: $Tag$$Type): boolean
public "remove"(arg0: integer): any
public "size"(): integer
public "get"(arg0: integer): $IntTag
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "clear"(): void
public "add"(arg0: integer, arg1: $IntTag$$Type): void
public "add"(arg0: integer, arg1: any): void
public "add"(arg0: integer, arg1: $Tag$$Type): void
public "set"(arg0: integer, arg1: $IntTag$$Type): $IntTag
public "set"(arg0: integer, arg1: any): any
public "set"(arg0: integer, arg1: $Tag$$Type): $Tag
public "write"(arg0: $DataOutput$$Type): void
public "accept"(arg0: $StreamTagVisitor$$Type): $StreamTagVisitor$ValueResult
public "accept"(arg0: $TagVisitor$$Type): void
public "getId"(): byte
public "getType"(): $TagType<($IntArrayTag)>
public "copy"(): $IntArrayTag
public "getElementType"(): byte
public "sizeInBytes"(): integer
public "getAsIntArray"(): (integer)[]
public "remove"(arg0: any): boolean
public static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $List<(E)>
public "isEmpty"(): boolean
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public "contains"(arg0: any): boolean
public "addAll"(arg0: $Collection$$Type<(E)>): boolean
public "removeAll"(arg0: $Collection$$Type<(never)>): boolean
public "retainAll"(arg0: $Collection$$Type<(never)>): boolean
public "reversed"(): $SequencedCollection
public "containsAll"(arg0: $Collection$$Type<(never)>): boolean
get "id"(): byte
get "type"(): $TagType<($IntArrayTag)>
get "elementType"(): byte
get "asIntArray"(): (integer)[]
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntArrayTag$$Type = ($IntArrayTag);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntArrayTag$$Original = $IntArrayTag;}
declare module "net.minecraft.nbt.StreamTagVisitor" {
import {$StreamTagVisitor$EntryResult} from "net.minecraft.nbt.StreamTagVisitor$EntryResult"
import {$TagType$$Type} from "net.minecraft.nbt.TagType"
import {$StreamTagVisitor$ValueResult} from "net.minecraft.nbt.StreamTagVisitor$ValueResult"

export interface $StreamTagVisitor$$Interface {
}

export class $StreamTagVisitor implements $StreamTagVisitor$$Interface {
 "visitList"(arg0: $TagType$$Type<(never)>, arg1: integer): $StreamTagVisitor$ValueResult
 "visit"(arg0: double): $StreamTagVisitor$ValueResult
 "visit"(arg0: long): $StreamTagVisitor$ValueResult
 "visit"(arg0: float): $StreamTagVisitor$ValueResult
 "visit"(arg0: (integer)[]): $StreamTagVisitor$ValueResult
 "visit"(arg0: (long)[]): $StreamTagVisitor$ValueResult
 "visit"(arg0: (byte)[]): $StreamTagVisitor$ValueResult
 "visit"(arg0: StringJS): $StreamTagVisitor$ValueResult
 "visit"(arg0: byte): $StreamTagVisitor$ValueResult
 "visit"(arg0: short): $StreamTagVisitor$ValueResult
 "visit"(arg0: integer): $StreamTagVisitor$ValueResult
 "visitEnd"(): $StreamTagVisitor$ValueResult
 "visitEntry"(arg0: $TagType$$Type<(never)>, arg1: StringJS): $StreamTagVisitor$EntryResult
 "visitEntry"(arg0: $TagType$$Type<(never)>): $StreamTagVisitor$EntryResult
 "visitRootEntry"(arg0: $TagType$$Type<(never)>): $StreamTagVisitor$ValueResult
 "visitContainerEnd"(): $StreamTagVisitor$ValueResult
 "visitElement"(arg0: $TagType$$Type<(never)>, arg1: integer): $StreamTagVisitor$EntryResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StreamTagVisitor$$Type = ($StreamTagVisitor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StreamTagVisitor$$Original = $StreamTagVisitor;}
declare module "net.minecraft.nbt.FloatTag" {
import {$TagType} from "net.minecraft.nbt.TagType"
import {$NumericTag} from "net.minecraft.nbt.NumericTag"
import {$StreamTagVisitor$ValueResult} from "net.minecraft.nbt.StreamTagVisitor$ValueResult"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$DataOutput$$Type} from "java.io.DataOutput"
import {$StreamTagVisitor$$Type} from "net.minecraft.nbt.StreamTagVisitor"
import {$TagVisitor$$Type} from "net.minecraft.nbt.TagVisitor"

export class $FloatTag extends $NumericTag {
static readonly "ZERO": $FloatTag
static readonly "TYPE": $TagType<($FloatTag)>

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "valueOf"(arg0: float): $FloatTag
public "write"(arg0: $DataOutput$$Type): void
public "accept"(arg0: $TagVisitor$$Type): void
public "accept"(arg0: $StreamTagVisitor$$Type): $StreamTagVisitor$ValueResult
public "getId"(): byte
public "getType"(): $TagType<($FloatTag)>
public "copy"(): $Tag
public "getAsDouble"(): double
public "getAsInt"(): integer
public "getAsLong"(): long
public "sizeInBytes"(): integer
public "getAsFloat"(): float
public "getAsShort"(): short
public "getAsByte"(): byte
public "getAsNumber"(): number
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "id"(): byte
get "type"(): $TagType<($FloatTag)>
get "asDouble"(): double
get "asInt"(): integer
get "asLong"(): long
get "asFloat"(): float
get "asShort"(): short
get "asByte"(): byte
get "asNumber"(): number
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FloatTag$$Type = ($FloatTag);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FloatTag$$Original = $FloatTag;}
declare module "net.minecraft.nbt.LongArrayTag" {
import {$Collection$$Type} from "java.util.Collection"
import {$LongSet$$Type} from "it.unimi.dsi.fastutil.longs.LongSet"
import {$SequencedCollection} from "java.util.SequencedCollection"
import {$List, $List$$Type} from "java.util.List"
import {$StreamTagVisitor$ValueResult} from "net.minecraft.nbt.StreamTagVisitor$ValueResult"
import {$TagType} from "net.minecraft.nbt.TagType"
import {$CollectionTag} from "net.minecraft.nbt.CollectionTag"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$DataOutput$$Type} from "java.io.DataOutput"
import {$StreamTagVisitor$$Type} from "net.minecraft.nbt.StreamTagVisitor"
import {$LongTag, $LongTag$$Type} from "net.minecraft.nbt.LongTag"
import {$TagVisitor$$Type} from "net.minecraft.nbt.TagVisitor"

export class $LongArrayTag extends $CollectionTag<($LongTag)> {
static readonly "TYPE": $TagType<($LongArrayTag)>

constructor(arg0: (long)[])
constructor(arg0: $List$$Type<(long)>)
constructor(arg0: $LongSet$$Type)

public "setTag"(arg0: integer, arg1: $Tag$$Type): boolean
public "addTag"(arg0: integer, arg1: $Tag$$Type): boolean
public "remove"(arg0: integer): $Tag
public "size"(): integer
public "get"(arg0: integer): $LongTag
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "clear"(): void
public "add"(arg0: integer, arg1: any): void
public "add"(arg0: integer, arg1: $Tag$$Type): void
public "add"(arg0: integer, arg1: $LongTag$$Type): void
public "set"(arg0: integer, arg1: $Tag$$Type): $Tag
public "set"(arg0: integer, arg1: any): any
public "set"(arg0: integer, arg1: $LongTag$$Type): $LongTag
public "write"(arg0: $DataOutput$$Type): void
public "accept"(arg0: $TagVisitor$$Type): void
public "accept"(arg0: $StreamTagVisitor$$Type): $StreamTagVisitor$ValueResult
public "getId"(): byte
public "getType"(): $TagType<($LongArrayTag)>
public "copy"(): $LongArrayTag
public "getElementType"(): byte
public "sizeInBytes"(): integer
public "getAsLongArray"(): (long)[]
public "remove"(arg0: any): boolean
public static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $List<(E)>
public "isEmpty"(): boolean
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public "contains"(arg0: any): boolean
public "addAll"(arg0: $Collection$$Type<(E)>): boolean
public "removeAll"(arg0: $Collection$$Type<(never)>): boolean
public "retainAll"(arg0: $Collection$$Type<(never)>): boolean
public "reversed"(): $SequencedCollection
public "containsAll"(arg0: $Collection$$Type<(never)>): boolean
get "id"(): byte
get "type"(): $TagType<($LongArrayTag)>
get "elementType"(): byte
get "asLongArray"(): (long)[]
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongArrayTag$$Type = ($LongArrayTag);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LongArrayTag$$Original = $LongArrayTag;}
declare module "net.minecraft.nbt.CollectionTag" {
import {$CustomJavaToJsWrapper$$Interface} from "dev.latvian.mods.rhino.util.CustomJavaToJsWrapper"
import {$Collection$$Type} from "java.util.Collection"
import {$SequencedCollection} from "java.util.SequencedCollection"
import {$List} from "java.util.List"
import {$StreamTagVisitor$ValueResult} from "net.minecraft.nbt.StreamTagVisitor$ValueResult"
import {$AbstractList} from "java.util.AbstractList"
import {$TagType} from "net.minecraft.nbt.TagType"
import {$TypeInfo$$Type} from "dev.latvian.mods.rhino.type.TypeInfo"
import {$Tag, $Tag$$Type, $Tag$$Interface} from "net.minecraft.nbt.Tag"
import {$DataOutput$$Type} from "java.io.DataOutput"
import {$Scriptable, $Scriptable$$Type} from "dev.latvian.mods.rhino.Scriptable"
import {$StreamTagVisitor$$Type} from "net.minecraft.nbt.StreamTagVisitor"
import {$TagVisitor$$Type} from "net.minecraft.nbt.TagVisitor"

export class $CollectionTag<T extends $Tag> extends $AbstractList<(T)> implements $Tag$$Interface, $CustomJavaToJsWrapper$$Interface {
constructor()

public "setTag"(arg0: integer, arg1: $Tag$$Type): boolean
public "addTag"(arg0: integer, arg1: $Tag$$Type): boolean
public "remove"(arg0: integer): T
public "add"(arg0: integer, arg1: any): void
public "add"(arg0: integer, arg1: T): void
public "set"(arg0: integer, arg1: any): any
public "set"(arg0: integer, arg1: T): T
public "getElementType"(): byte
public "convertJavaToJs"(scope: $Scriptable$$Type, target: $TypeInfo$$Type): $Scriptable
public "toString"(): StringJS
public "write"(arg0: $DataOutput$$Type): void
public "accept"(arg0: $TagVisitor$$Type): void
public "accept"(arg0: $StreamTagVisitor$$Type): $StreamTagVisitor$ValueResult
public "getId"(): byte
public "getType"(): $TagType<(never)>
public "copy"(): $Tag
public "sizeInBytes"(): integer
public "getAsString"(): StringJS
public "acceptAsRoot"(arg0: $StreamTagVisitor$$Type): void
public "remove"(arg0: any): boolean
public "size"(): integer
public static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $List<(E)>
public "isEmpty"(): boolean
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public "contains"(arg0: any): boolean
public "addAll"(arg0: $Collection$$Type<(E)>): boolean
public "removeAll"(arg0: $Collection$$Type<(never)>): boolean
public "retainAll"(arg0: $Collection$$Type<(never)>): boolean
public "reversed"(): $SequencedCollection
public "containsAll"(arg0: $Collection$$Type<(never)>): boolean
get "elementType"(): byte
get "id"(): byte
get "type"(): $TagType<(never)>
get "asString"(): StringJS
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CollectionTag$$Type<T> = ((any)[]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CollectionTag$$Original<T> = $CollectionTag<(T)>;}
declare module "net.minecraft.nbt.ByteTag" {
import {$TagType} from "net.minecraft.nbt.TagType"
import {$NumericTag} from "net.minecraft.nbt.NumericTag"
import {$StreamTagVisitor$ValueResult} from "net.minecraft.nbt.StreamTagVisitor$ValueResult"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$DataOutput$$Type} from "java.io.DataOutput"
import {$StreamTagVisitor$$Type} from "net.minecraft.nbt.StreamTagVisitor"
import {$TagVisitor$$Type} from "net.minecraft.nbt.TagVisitor"

export class $ByteTag extends $NumericTag {
static readonly "ZERO": $ByteTag
static readonly "ONE": $ByteTag
static readonly "TYPE": $TagType<($ByteTag)>

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "valueOf"(arg0: boolean): $ByteTag
public static "valueOf"(arg0: byte): $ByteTag
public "write"(arg0: $DataOutput$$Type): void
public "accept"(arg0: $StreamTagVisitor$$Type): $StreamTagVisitor$ValueResult
public "accept"(arg0: $TagVisitor$$Type): void
public "getId"(): byte
public "getType"(): $TagType<($ByteTag)>
public "copy"(): $Tag
public "getAsDouble"(): double
public "getAsInt"(): integer
public "getAsLong"(): long
public "sizeInBytes"(): integer
public "getAsFloat"(): float
public "getAsShort"(): short
public "getAsByte"(): byte
public "getAsNumber"(): number
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "id"(): byte
get "type"(): $TagType<($ByteTag)>
get "asDouble"(): double
get "asInt"(): integer
get "asLong"(): long
get "asFloat"(): float
get "asShort"(): short
get "asByte"(): byte
get "asNumber"(): number
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ByteTag$$Type = ($ByteTag);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ByteTag$$Original = $ByteTag;}
declare module "net.minecraft.nbt.Tag" {
import {$TagType} from "net.minecraft.nbt.TagType"
import {$StreamTagVisitor$ValueResult} from "net.minecraft.nbt.StreamTagVisitor$ValueResult"
import {$DataOutput$$Type} from "java.io.DataOutput"
import {$StreamTagVisitor$$Type} from "net.minecraft.nbt.StreamTagVisitor"
import {$TagVisitor$$Type} from "net.minecraft.nbt.TagVisitor"

export interface $Tag$$Interface {
get "id"(): byte
get "type"(): $TagType<(never)>
get "asString"(): StringJS
}

export class $Tag implements $Tag$$Interface {
static readonly "TAG_INT": byte
static readonly "TAG_FLOAT": byte
static readonly "TAG_BYTE_ARRAY": byte
static readonly "MAX_DEPTH": integer
static readonly "OBJECT_HEADER": integer
static readonly "TAG_INT_ARRAY": byte
static readonly "ARRAY_HEADER": integer
static readonly "TAG_DOUBLE": byte
static readonly "TAG_STRING": byte
static readonly "OBJECT_REFERENCE": integer
static readonly "TAG_BYTE": byte
static readonly "TAG_ANY_NUMERIC": byte
static readonly "TAG_COMPOUND": byte
static readonly "TAG_SHORT": byte
static readonly "TAG_END": byte
static readonly "TAG_LIST": byte
static readonly "TAG_LONG_ARRAY": byte
static readonly "STRING_SIZE": integer
static readonly "TAG_LONG": byte

 "toString"(): StringJS
 "write"(arg0: $DataOutput$$Type): void
 "accept"(arg0: $TagVisitor$$Type): void
 "accept"(arg0: $StreamTagVisitor$$Type): $StreamTagVisitor$ValueResult
 "getId"(): byte
 "getType"(): $TagType<(never)>
 "copy"(): $Tag
 "sizeInBytes"(): integer
 "getAsString"(): StringJS
 "acceptAsRoot"(arg0: $StreamTagVisitor$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Tag$$Type = (StringJS) | (number) | (boolean) | (object) | ((any)[]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Tag$$Original = $Tag;}
declare module "net.minecraft.nbt.CompoundTag" {
import {$CustomJavaToJsWrapper$$Interface} from "dev.latvian.mods.rhino.util.CustomJavaToJsWrapper"
import {$Map, $Map$$Type} from "java.util.Map"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$List$$Type} from "java.util.List"
import {$StreamTagVisitor$ValueResult} from "net.minecraft.nbt.StreamTagVisitor$ValueResult"
import {$ListTag} from "net.minecraft.nbt.ListTag"
import {$TypeInfo$$Type} from "dev.latvian.mods.rhino.type.TypeInfo"
import {$TagType, $TagType$$Type} from "net.minecraft.nbt.TagType"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Set} from "java.util.Set"
import {$DataInput$$Type} from "java.io.DataInput"
import {$Tag, $Tag$$Type, $Tag$$Interface} from "net.minecraft.nbt.Tag"
import {$DataOutput$$Type} from "java.io.DataOutput"
import {$Scriptable, $Scriptable$$Type} from "dev.latvian.mods.rhino.Scriptable"
import {$NbtAccounter$$Type} from "net.minecraft.nbt.NbtAccounter"
import {$StreamTagVisitor$$Type} from "net.minecraft.nbt.StreamTagVisitor"
import {$TagVisitor$$Type} from "net.minecraft.nbt.TagVisitor"

export class $CompoundTag implements $Tag$$Interface, $CustomJavaToJsWrapper$$Interface {
static readonly "CODEC": $Codec<($CompoundTag)>
static readonly "TYPE": $TagType<($CompoundTag)>
readonly "tags": $Map<(StringJS), ($Tag)>

constructor(arg0: $Map$$Type<(StringJS), ($Tag$$Type)>)
constructor(arg0: integer)
constructor()

public "getUUID"(arg0: StringJS): $UUID
public "remove"(arg0: StringJS): void
public "size"(): integer
public "get"(arg0: StringJS): $Tag
public "put"(arg0: StringJS, arg1: $Tag$$Type): $Tag
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getBoolean"(arg0: StringJS): boolean
public "putBoolean"(arg0: StringJS, arg1: boolean): void
public "getByte"(arg0: StringJS): byte
public "putByte"(arg0: StringJS, arg1: byte): void
public "getShort"(arg0: StringJS): short
public "putShort"(arg0: StringJS, arg1: short): void
public "getInt"(arg0: StringJS): integer
public "putInt"(arg0: StringJS, arg1: integer): void
public "getLong"(arg0: StringJS): long
public "putLong"(arg0: StringJS, arg1: long): void
public "getFloat"(arg0: StringJS): float
public "putFloat"(arg0: StringJS, arg1: float): void
public "getDouble"(arg0: StringJS): double
public "putDouble"(arg0: StringJS, arg1: double): void
public "isEmpty"(): boolean
public "contains"(arg0: StringJS): boolean
public "contains"(arg0: StringJS, arg1: integer): boolean
public "merge"(arg0: $CompoundTag$$Type): $CompoundTag
public "write"(arg0: $DataOutput$$Type): void
public "accept"(arg0: $TagVisitor$$Type): void
public "accept"(arg0: $StreamTagVisitor$$Type): $StreamTagVisitor$ValueResult
public "getId"(): byte
public "getType"(): $TagType<($CompoundTag)>
public "copy"(): $CompoundTag
public "getString"(arg0: StringJS): StringJS
public "putByteArray"(arg0: StringJS, arg1: (byte)[]): void
public "putByteArray"(arg0: StringJS, arg1: $List$$Type<(byte)>): void
public "sizeInBytes"(): integer
public "hasUUID"(arg0: StringJS): boolean
public "putUUID"(arg0: StringJS, arg1: $UUID$$Type): void
public "putString"(arg0: StringJS, arg1: StringJS): void
public "getTagType"(arg0: StringJS): byte
public "getAllKeys"(): $Set<(StringJS)>
public "getCompound"(arg0: StringJS): $CompoundTag
public "getIntArray"(arg0: StringJS): (integer)[]
public static "readNamedTagData"(arg0: $TagType$$Type<(never)>, arg1: StringJS, arg2: $DataInput$$Type, arg3: $NbtAccounter$$Type): $Tag
public "putIntArray"(arg0: StringJS, arg1: (integer)[]): void
public "putIntArray"(arg0: StringJS, arg1: $List$$Type<(integer)>): void
public "getLongArray"(arg0: StringJS): (long)[]
public "getByteArray"(arg0: StringJS): (byte)[]
public "putLongArray"(arg0: StringJS, arg1: (long)[]): void
public "putLongArray"(arg0: StringJS, arg1: $List$$Type<(long)>): void
public "convertJavaToJs"(scope: $Scriptable$$Type, target: $TypeInfo$$Type): $Scriptable
public "getList"(arg0: StringJS, arg1: integer): $ListTag
public "getAsString"(): StringJS
public "acceptAsRoot"(arg0: $StreamTagVisitor$$Type): void
get "empty"(): boolean
get "id"(): byte
get "type"(): $TagType<($CompoundTag)>
get "allKeys"(): $Set<(StringJS)>
get "asString"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompoundTag$$Type = (object);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CompoundTag$$Original = $CompoundTag;}
declare module "net.minecraft.nbt.DoubleTag" {
import {$TagType} from "net.minecraft.nbt.TagType"
import {$NumericTag} from "net.minecraft.nbt.NumericTag"
import {$StreamTagVisitor$ValueResult} from "net.minecraft.nbt.StreamTagVisitor$ValueResult"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$DataOutput$$Type} from "java.io.DataOutput"
import {$StreamTagVisitor$$Type} from "net.minecraft.nbt.StreamTagVisitor"
import {$TagVisitor$$Type} from "net.minecraft.nbt.TagVisitor"

export class $DoubleTag extends $NumericTag {
static readonly "ZERO": $DoubleTag
static readonly "TYPE": $TagType<($DoubleTag)>

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "valueOf"(arg0: double): $DoubleTag
public "write"(arg0: $DataOutput$$Type): void
public "accept"(arg0: $TagVisitor$$Type): void
public "accept"(arg0: $StreamTagVisitor$$Type): $StreamTagVisitor$ValueResult
public "getId"(): byte
public "getType"(): $TagType<($DoubleTag)>
public "copy"(): $Tag
public "getAsDouble"(): double
public "getAsInt"(): integer
public "getAsLong"(): long
public "sizeInBytes"(): integer
public "getAsFloat"(): float
public "getAsShort"(): short
public "getAsByte"(): byte
public "getAsNumber"(): number
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "id"(): byte
get "type"(): $TagType<($DoubleTag)>
get "asDouble"(): double
get "asInt"(): integer
get "asLong"(): long
get "asFloat"(): float
get "asShort"(): short
get "asByte"(): byte
get "asNumber"(): number
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleTag$$Type = ($DoubleTag);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoubleTag$$Original = $DoubleTag;}
declare module "net.minecraft.nbt.ListTag" {
import {$TagType} from "net.minecraft.nbt.TagType"
import {$CollectionTag} from "net.minecraft.nbt.CollectionTag"
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$Collection$$Type} from "java.util.Collection"
import {$SequencedCollection} from "java.util.SequencedCollection"
import {$List, $List$$Type} from "java.util.List"
import {$StreamTagVisitor$ValueResult} from "net.minecraft.nbt.StreamTagVisitor$ValueResult"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$DataOutput$$Type} from "java.io.DataOutput"
import {$StreamTagVisitor$$Type} from "net.minecraft.nbt.StreamTagVisitor"
import {$TagVisitor$$Type} from "net.minecraft.nbt.TagVisitor"

export class $ListTag extends $CollectionTag<($Tag)> {
static readonly "TYPE": $TagType<($ListTag)>

constructor(arg0: $List$$Type<($Tag$$Type)>, arg1: byte)
constructor(arg0: integer)
constructor()

public "setTag"(arg0: integer, arg1: $Tag$$Type): boolean
public "addTag"(arg0: integer, arg1: $Tag$$Type): boolean
public "remove"(arg0: integer): $Tag
public "size"(): integer
public "get"(arg0: integer): $Tag
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getShort"(arg0: integer): short
public "getInt"(arg0: integer): integer
public "getFloat"(arg0: integer): float
public "getDouble"(arg0: integer): double
public "clear"(): void
public "isEmpty"(): boolean
public "add"(arg0: integer, arg1: $Tag$$Type): void
public "add"(arg0: integer, arg1: any): void
public "set"(arg0: integer, arg1: $Tag$$Type): $Tag
public "set"(arg0: integer, arg1: any): any
public "write"(arg0: $DataOutput$$Type): void
public "accept"(arg0: $TagVisitor$$Type): void
public "accept"(arg0: $StreamTagVisitor$$Type): $StreamTagVisitor$ValueResult
public "getId"(): byte
public "getType"(): $TagType<($ListTag)>
public "copy"(): $ListTag
public "getString"(arg0: integer): StringJS
public "getElementType"(): byte
public "sizeInBytes"(): integer
public "getCompound"(arg0: integer): $CompoundTag
public "getIntArray"(arg0: integer): (integer)[]
public "getLongArray"(arg0: integer): (long)[]
public "getList"(arg0: integer): $ListTag
public "remove"(arg0: any): boolean
public static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $List<(E)>
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public "contains"(arg0: any): boolean
public "addAll"(arg0: $Collection$$Type<(E)>): boolean
public "removeAll"(arg0: $Collection$$Type<(never)>): boolean
public "retainAll"(arg0: $Collection$$Type<(never)>): boolean
public "reversed"(): $SequencedCollection
public "containsAll"(arg0: $Collection$$Type<(never)>): boolean
get "empty"(): boolean
get "id"(): byte
get "type"(): $TagType<($ListTag)>
get "elementType"(): byte
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ListTag$$Type = ((any)[]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ListTag$$Original = $ListTag;}
declare module "net.minecraft.nbt.LongTag" {
import {$TagType} from "net.minecraft.nbt.TagType"
import {$NumericTag} from "net.minecraft.nbt.NumericTag"
import {$StreamTagVisitor$ValueResult} from "net.minecraft.nbt.StreamTagVisitor$ValueResult"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$DataOutput$$Type} from "java.io.DataOutput"
import {$StreamTagVisitor$$Type} from "net.minecraft.nbt.StreamTagVisitor"
import {$TagVisitor$$Type} from "net.minecraft.nbt.TagVisitor"

export class $LongTag extends $NumericTag {
static readonly "TYPE": $TagType<($LongTag)>

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "valueOf"(arg0: long): $LongTag
public "write"(arg0: $DataOutput$$Type): void
public "accept"(arg0: $TagVisitor$$Type): void
public "accept"(arg0: $StreamTagVisitor$$Type): $StreamTagVisitor$ValueResult
public "getId"(): byte
public "getType"(): $TagType<($LongTag)>
public "copy"(): $Tag
public "getAsDouble"(): double
public "getAsInt"(): integer
public "getAsLong"(): long
public "sizeInBytes"(): integer
public "getAsFloat"(): float
public "getAsShort"(): short
public "getAsByte"(): byte
public "getAsNumber"(): number
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "id"(): byte
get "type"(): $TagType<($LongTag)>
get "asDouble"(): double
get "asInt"(): integer
get "asLong"(): long
get "asFloat"(): float
get "asShort"(): short
get "asByte"(): byte
get "asNumber"(): number
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongTag$$Type = ($LongTag);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LongTag$$Original = $LongTag;}
declare module "net.minecraft.nbt.NbtAccounter" {
import {$IModifyAbleNbtAccounter$$Interface} from "com.connectivity.networkstats.IModifyAbleNbtAccounter"
import {$NbtAccounterAccessor$$Interface} from "com.simibubi.create.foundation.mixin.accessor.NbtAccounterAccessor"

export class $NbtAccounter implements $IModifyAbleNbtAccounter$$Interface, $NbtAccounterAccessor$$Interface {
 "quota": long

constructor(arg0: long, arg1: integer)

public static "create"(arg0: long): $NbtAccounter
public "readUTF"(arg0: StringJS): StringJS
public "getDepth"(): integer
public "getUsage"(): long
public "popDepth"(): void
public "pushDepth"(): void
public "setQuota"(arg0: long): void
public "getOriginalQuota"(): long
public static "unlimitedHeap"(): $NbtAccounter
public "accountBytes"(arg0: long, arg1: long): void
public "accountBytes"(arg0: long): void
public "create$getUsage"(): long
get "depth"(): integer
get "usage"(): long
get "originalQuota"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NbtAccounter$$Type = ($NbtAccounter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NbtAccounter$$Original = $NbtAccounter;}
declare module "net.minecraft.nbt.StringTag" {
import {$TagType} from "net.minecraft.nbt.TagType"
import {$StreamTagVisitor$ValueResult} from "net.minecraft.nbt.StreamTagVisitor$ValueResult"
import {$DataInput$$Type} from "java.io.DataInput"
import {$Tag$$Interface} from "net.minecraft.nbt.Tag"
import {$SpecialEquality$$Interface} from "dev.latvian.mods.rhino.util.SpecialEquality"
import {$DataOutput$$Type} from "java.io.DataOutput"
import {$StreamTagVisitor$$Type} from "net.minecraft.nbt.StreamTagVisitor"
import {$TagVisitor$$Type} from "net.minecraft.nbt.TagVisitor"

export class $StringTag implements $Tag$$Interface, $SpecialEquality$$Interface {
static readonly "TYPE": $TagType<($StringTag)>

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "valueOf"(arg0: StringJS): $StringTag
public "write"(arg0: $DataOutput$$Type): void
public "accept"(arg0: $TagVisitor$$Type): void
public "accept"(arg0: $StreamTagVisitor$$Type): $StreamTagVisitor$ValueResult
public "getId"(): byte
public "getType"(): $TagType<($StringTag)>
public "copy"(): $StringTag
public "sizeInBytes"(): integer
public "getAsString"(): StringJS
public static "skipString"(arg0: $DataInput$$Type): void
public static "quoteAndEscape"(arg0: StringJS): StringJS
public "specialEquals"(o: any, shallow: boolean): boolean
public "acceptAsRoot"(arg0: $StreamTagVisitor$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "id"(): byte
get "type"(): $TagType<($StringTag)>
get "asString"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringTag$$Type = ($StringTag);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StringTag$$Original = $StringTag;}
declare module "net.minecraft.nbt.TagVisitor" {
import {$StringTag$$Type} from "net.minecraft.nbt.StringTag"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IntArrayTag$$Type} from "net.minecraft.nbt.IntArrayTag"
import {$ListTag$$Type} from "net.minecraft.nbt.ListTag"
import {$DoubleTag$$Type} from "net.minecraft.nbt.DoubleTag"
import {$ShortTag$$Type} from "net.minecraft.nbt.ShortTag"
import {$FloatTag$$Type} from "net.minecraft.nbt.FloatTag"
import {$LongArrayTag$$Type} from "net.minecraft.nbt.LongArrayTag"
import {$IntTag$$Type} from "net.minecraft.nbt.IntTag"
import {$ByteTag$$Type} from "net.minecraft.nbt.ByteTag"
import {$EndTag$$Type} from "net.minecraft.nbt.EndTag"
import {$ByteArrayTag$$Type} from "net.minecraft.nbt.ByteArrayTag"
import {$LongTag$$Type} from "net.minecraft.nbt.LongTag"

export interface $TagVisitor$$Interface {
}

export class $TagVisitor implements $TagVisitor$$Interface {
 "visitList"(arg0: $ListTag$$Type): void
 "visitEnd"(arg0: $EndTag$$Type): void
 "visitByteArray"(arg0: $ByteArrayTag$$Type): void
 "visitIntArray"(arg0: $IntArrayTag$$Type): void
 "visitLongArray"(arg0: $LongArrayTag$$Type): void
 "visitString"(arg0: $StringTag$$Type): void
 "visitDouble"(arg0: $DoubleTag$$Type): void
 "visitCompound"(arg0: $CompoundTag$$Type): void
 "visitInt"(arg0: $IntTag$$Type): void
 "visitShort"(arg0: $ShortTag$$Type): void
 "visitByte"(arg0: $ByteTag$$Type): void
 "visitFloat"(arg0: $FloatTag$$Type): void
 "visitLong"(arg0: $LongTag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagVisitor$$Type = ($TagVisitor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TagVisitor$$Original = $TagVisitor;}
