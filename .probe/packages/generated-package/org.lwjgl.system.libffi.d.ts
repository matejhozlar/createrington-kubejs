declare module "org.lwjgl.system.libffi.FFICIF" {
import {$FFICIF$Buffer} from "org.lwjgl.system.libffi.FFICIF$Buffer"
import {$MemoryStack$$Type} from "org.lwjgl.system.MemoryStack"
import {$FFIType} from "org.lwjgl.system.libffi.FFIType"
import {$Struct} from "org.lwjgl.system.Struct"
import {$NativeResource$$Interface} from "org.lwjgl.system.NativeResource"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$PointerBuffer} from "org.lwjgl.PointerBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FFICIF extends $Struct<($FFICIF)> implements $NativeResource$$Interface {
static readonly "ARG_TYPES": integer
static readonly "BYTES": integer
static readonly "NARGS": integer
static readonly "ALIGNOF": integer
static readonly "RTYPE": integer
static readonly "SIZEOF": integer
static readonly "ABI": integer
static readonly "FLAGS": integer

constructor(arg0: $ByteBuffer$$Type)

public static "nabi"(arg0: long): integer
public static "nnargs"(arg0: long): integer
public static "narg_types"(arg0: long, arg1: integer): $PointerBuffer
public static "nflags"(arg0: long): integer
public "arg_types"(arg0: integer): $PointerBuffer
public "flags"(): integer
public "bytes"(): integer
public static "create"(arg0: long): $FFICIF
public static "create"(arg0: integer): $FFICIF$Buffer
public static "create"(arg0: long, arg1: integer): $FFICIF$Buffer
public static "create"(): $FFICIF
public "rtype"(): $FFIType
public "nargs"(): integer
public static "nrtype"(arg0: long): $FFIType
public "abi"(): integer
public static "nbytes"(arg0: long): integer
public static "createSafe"(arg0: long, arg1: integer): $FFICIF$Buffer
public static "createSafe"(arg0: long): $FFICIF
public static "calloc"(): $FFICIF
public static "calloc"(arg0: $MemoryStack$$Type): $FFICIF
public static "calloc"(arg0: integer, arg1: $MemoryStack$$Type): $FFICIF$Buffer
public static "calloc"(arg0: integer): $FFICIF$Buffer
public "sizeof"(): integer
public static "malloc"(): $FFICIF
public static "malloc"(arg0: integer): $FFICIF$Buffer
public static "malloc"(arg0: $MemoryStack$$Type): $FFICIF
public static "malloc"(arg0: integer, arg1: $MemoryStack$$Type): $FFICIF$Buffer
public "close"(): void
public "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FFICIF$$Type = ($FFICIF);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FFICIF$$Original = $FFICIF;}
