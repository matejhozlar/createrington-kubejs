declare module "kotlin.enums.EnumEntries" {
import {$Iterator} from "java.util.Iterator"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$Collection$$Type} from "java.util.Collection"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$SequencedCollection} from "java.util.SequencedCollection"
import {$Comparator$$Type} from "java.util.Comparator"
import {$Spliterator} from "java.util.Spliterator"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$List, $List$$Interface} from "java.util.List"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$IntFunction$$Type} from "java.util.function.IntFunction"
import {$ListIterator} from "java.util.ListIterator"
import {$KMappedMarker$$Interface} from "kotlin.jvm.internal.markers.KMappedMarker"
import {$Stream} from "java.util.stream.Stream"

export interface $EnumEntries$$Interface<E extends $Enum<(object)>> extends $List$$Interface<(E)>, $KMappedMarker$$Interface {
[Symbol.iterator](): IterableIterator<E>;
[index: number]: E
get "empty"(): boolean
get "first"(): E
get "last"(): E
}

export class $EnumEntries<E extends $Enum<(object)>> implements $EnumEntries$$Interface {
 "remove"(arg0: any): boolean
 "remove"(arg0: integer): E
 "size"(): integer
 "get"(arg0: integer): E
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $List<(E)>
 "indexOf"(arg0: any): integer
 "clear"(): void
 "lastIndexOf"(arg0: any): integer
 "isEmpty"(): boolean
 "replaceAll"(arg0: $UnaryOperator$$Type<(E)>): void
 "add"(arg0: E): boolean
 "add"(arg0: integer, arg1: E): void
 "subList"(arg0: integer, arg1: integer): $List<(E)>
 "toArray"(): (any)[]
 "toArray"<T>(arg0: (T)[]): (T)[]
 "iterator"(): $Iterator<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
static "of"<E>(): $List<(E)>
static "of"<E>(arg0: E): $List<(E)>
static "of"<E>(arg0: E, arg1: E): $List<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
static "of"<E>(...arg0: (E)[]): $List<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
 "contains"(arg0: any): boolean
 "spliterator"(): $Spliterator<(E)>
 "addAll"(arg0: $Collection$$Type<(E)>): boolean
 "addAll"(arg0: integer, arg1: $Collection$$Type<(E)>): boolean
 "set"(arg0: integer, arg1: E): E
 "sort"(arg0: $Comparator$$Type<(E)>): void
 "getFirst"(): E
 "getLast"(): E
 "addFirst"(arg0: E): void
 "addLast"(arg0: E): void
 "removeFirst"(): E
 "removeLast"(): E
 "removeAll"(arg0: $Collection$$Type<(never)>): boolean
 "retainAll"(arg0: $Collection$$Type<(never)>): boolean
 "listIterator"(): $ListIterator<(E)>
 "listIterator"(arg0: integer): $ListIterator<(E)>
 "reversed"(): $SequencedCollection
 "containsAll"(arg0: $Collection$$Type<(never)>): boolean
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "stream"(): $Stream<(E)>
 "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
 "parallelStream"(): $Stream<(E)>
 "forEach"(arg0: $Consumer$$Type<(E)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumEntries$$Type<E> = ($EnumEntries<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnumEntries$$Original<E> = $EnumEntries<(E)>;}
