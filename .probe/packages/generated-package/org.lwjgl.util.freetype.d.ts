declare module "org.lwjgl.util.freetype.FT_Size" {
import {$MemoryStack$$Type} from "org.lwjgl.system.MemoryStack"
import {$Struct} from "org.lwjgl.system.Struct"
import {$FT_Size_Metrics, $FT_Size_Metrics$$Type} from "org.lwjgl.util.freetype.FT_Size_Metrics"
import {$FT_Generic, $FT_Generic$$Type} from "org.lwjgl.util.freetype.FT_Generic"
import {$FT_Size_Internal, $FT_Size_Internal$$Type} from "org.lwjgl.util.freetype.FT_Size_Internal"
import {$FT_Size$Buffer} from "org.lwjgl.util.freetype.FT_Size$Buffer"
import {$NativeResource$$Interface} from "org.lwjgl.system.NativeResource"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$FT_Face, $FT_Face$$Type} from "org.lwjgl.util.freetype.FT_Face"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $FT_Size extends $Struct<($FT_Size)> implements $NativeResource$$Interface {
static readonly "GENERIC": integer
static readonly "ALIGNOF": integer
static readonly "METRICS": integer
static readonly "SIZEOF": integer
static readonly "INTERNAL": integer
static readonly "FACE": integer

constructor(arg0: $ByteBuffer$$Type)

public static "validate"(arg0: long): void
public "set"(arg0: $FT_Face$$Type, arg1: $FT_Generic$$Type, arg2: $FT_Size_Metrics$$Type): $FT_Size
public "set"(arg0: $FT_Size$$Type): $FT_Size
public static "create"(arg0: long, arg1: integer): $FT_Size$Buffer
public static "create"(arg0: integer): $FT_Size$Buffer
public static "create"(): $FT_Size
public static "create"(arg0: long): $FT_Size
public "generic"(arg0: $FT_Generic$$Type): $FT_Size
public "generic"(): $FT_Generic
public "generic"(arg0: $Consumer$$Type<($FT_Generic)>): $FT_Size
public "metrics"(arg0: $FT_Size_Metrics$$Type): $FT_Size
public "metrics"(): $FT_Size_Metrics
public static "malloc"(): $FT_Size
public static "malloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_Size$Buffer
public static "malloc"(arg0: integer): $FT_Size$Buffer
public static "malloc"(arg0: $MemoryStack$$Type): $FT_Size
public "sizeof"(): integer
public static "createSafe"(arg0: long): $FT_Size
public static "createSafe"(arg0: long, arg1: integer): $FT_Size$Buffer
public static "calloc"(arg0: integer): $FT_Size$Buffer
public static "calloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_Size$Buffer
public static "calloc"(arg0: $MemoryStack$$Type): $FT_Size
public static "calloc"(): $FT_Size
public "face"(): $FT_Face
public "face"(arg0: $FT_Face$$Type): $FT_Size
public static "nmetrics"(arg0: long, arg1: $FT_Size_Metrics$$Type): void
public static "nmetrics"(arg0: long): $FT_Size_Metrics
public static "nface"(arg0: long): $FT_Face
public static "nface"(arg0: long, arg1: $FT_Face$$Type): void
public static "ngeneric"(arg0: long, arg1: $FT_Generic$$Type): void
public static "ngeneric"(arg0: long): $FT_Generic
public static "ninternal"(arg0: long, arg1: $FT_Size_Internal$$Type): void
public static "ninternal"(arg0: long): $FT_Size_Internal
public "close"(): void
public "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Size$$Type = ($FT_Size);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_Size$$Original = $FT_Size;}
declare module "org.lwjgl.util.freetype.FT_Alloc_FuncI" {
import {$CallbackI$$Interface} from "org.lwjgl.system.CallbackI"
import {$FFICIF} from "org.lwjgl.system.libffi.FFICIF"

export interface $FT_Alloc_FuncI$$Interface extends $CallbackI$$Interface {

(arg0: long, arg1: long): long
get "callInterface"(): $FFICIF
}

export class $FT_Alloc_FuncI implements $FT_Alloc_FuncI$$Interface {
static readonly "CIF": $FFICIF

 "callback"(arg0: long, arg1: long): void
 "invoke"(arg0: long, arg1: long): long
 "getCallInterface"(): $FFICIF
 "address"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Alloc_FuncI$$Type = ((arg0: long, arg1: long) => long);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_Alloc_FuncI$$Original = $FT_Alloc_FuncI;}
declare module "org.lwjgl.util.freetype.FT_Bitmap$Buffer" {
import {$StructBuffer} from "org.lwjgl.system.StructBuffer"
import {$NativeResource$$Interface} from "org.lwjgl.system.NativeResource"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$FT_Bitmap} from "org.lwjgl.util.freetype.FT_Bitmap"

export class $FT_Bitmap$Buffer extends $StructBuffer<($FT_Bitmap), ($FT_Bitmap$Buffer)> implements $NativeResource$$Interface {
constructor(arg0: $ByteBuffer$$Type)
constructor(arg0: long, arg1: integer)

public "pitch"(): integer
public "buffer"(arg0: integer): $ByteBuffer
public "rows"(): integer
public "width"(): integer
public "pixel_mode"(): byte
public "palette"(): long
public "num_grays"(): short
public "palette_mode"(): byte
public "close"(): void
public "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Bitmap$Buffer$$Type = ($FT_Bitmap$Buffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_Bitmap$Buffer$$Original = $FT_Bitmap$Buffer;}
declare module "org.lwjgl.util.freetype.FT_Realloc_FuncI" {
import {$CallbackI$$Interface} from "org.lwjgl.system.CallbackI"
import {$FFICIF} from "org.lwjgl.system.libffi.FFICIF"

export interface $FT_Realloc_FuncI$$Interface extends $CallbackI$$Interface {

(arg0: long, arg1: long, arg2: long, arg3: long): long
get "callInterface"(): $FFICIF
}

export class $FT_Realloc_FuncI implements $FT_Realloc_FuncI$$Interface {
static readonly "CIF": $FFICIF

 "callback"(arg0: long, arg1: long): void
 "invoke"(arg0: long, arg1: long, arg2: long, arg3: long): long
 "getCallInterface"(): $FFICIF
 "address"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Realloc_FuncI$$Type = ((arg0: long, arg1: long, arg2: long, arg3: long) => long);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_Realloc_FuncI$$Original = $FT_Realloc_FuncI;}
declare module "org.lwjgl.util.freetype.FT_Free_FuncI" {
import {$CallbackI$$Interface} from "org.lwjgl.system.CallbackI"
import {$FFICIF} from "org.lwjgl.system.libffi.FFICIF"

export interface $FT_Free_FuncI$$Interface extends $CallbackI$$Interface {

(arg0: long, arg1: long): void
get "callInterface"(): $FFICIF
}

export class $FT_Free_FuncI implements $FT_Free_FuncI$$Interface {
static readonly "CIF": $FFICIF

 "callback"(arg0: long, arg1: long): void
 "invoke"(arg0: long, arg1: long): void
 "getCallInterface"(): $FFICIF
 "address"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Free_FuncI$$Type = ((arg0: long, arg1: long) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_Free_FuncI$$Original = $FT_Free_FuncI;}
declare module "org.lwjgl.util.freetype.FT_Stream_IoFunc" {
import {$Callback} from "org.lwjgl.system.Callback"
import {$FFICIF} from "org.lwjgl.system.libffi.FFICIF"
import {$FT_Stream_IoFuncI$$Type, $FT_Stream_IoFuncI$$Interface} from "org.lwjgl.util.freetype.FT_Stream_IoFuncI"

export class $FT_Stream_IoFunc extends $Callback implements $FT_Stream_IoFuncI$$Interface {
public static "create"(arg0: long): $FT_Stream_IoFunc
public static "create"(arg0: $FT_Stream_IoFuncI$$Type): $FT_Stream_IoFunc
public static "createSafe"(arg0: long): $FT_Stream_IoFunc
public "callback"(arg0: long, arg1: long): void
public "invoke"(arg0: long, arg1: long, arg2: long, arg3: long): long
public "getCallInterface"(): $FFICIF
get "callInterface"(): $FFICIF
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Stream_IoFunc$$Type = ($FT_Stream_IoFunc);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_Stream_IoFunc$$Original = $FT_Stream_IoFunc;}
declare module "org.lwjgl.util.freetype.FT_Size_Metrics" {
import {$FT_Size_Metrics$Buffer} from "org.lwjgl.util.freetype.FT_Size_Metrics$Buffer"
import {$Struct} from "org.lwjgl.system.Struct"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $FT_Size_Metrics extends $Struct<($FT_Size_Metrics)> {
static readonly "ASCENDER": integer
static readonly "Y_PPEM": integer
static readonly "X_SCALE": integer
static readonly "X_PPEM": integer
static readonly "ALIGNOF": integer
static readonly "SIZEOF": integer
static readonly "MAX_ADVANCE": integer
static readonly "Y_SCALE": integer
static readonly "HEIGHT": integer
static readonly "DESCENDER": integer

constructor(arg0: $ByteBuffer$$Type)

public static "create"(arg0: long): $FT_Size_Metrics
public static "create"(arg0: long, arg1: integer): $FT_Size_Metrics$Buffer
public "sizeof"(): integer
public static "createSafe"(arg0: long, arg1: integer): $FT_Size_Metrics$Buffer
public static "createSafe"(arg0: long): $FT_Size_Metrics
public static "nheight"(arg0: long): long
public "height"(): long
public static "nx_ppem"(arg0: long): short
public "x_ppem"(): short
public "y_ppem"(): short
public "y_scale"(): long
public "max_advance"(): long
public static "nmax_advance"(arg0: long): long
public static "ndescender"(arg0: long): long
public static "nascender"(arg0: long): long
public "descender"(): long
public "ascender"(): long
public static "ny_ppem"(arg0: long): short
public static "nx_scale"(arg0: long): long
public "x_scale"(): long
public static "ny_scale"(arg0: long): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Size_Metrics$$Type = ($FT_Size_Metrics);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_Size_Metrics$$Original = $FT_Size_Metrics;}
declare module "org.lwjgl.util.freetype.FT_List$Buffer" {
import {$FT_List} from "org.lwjgl.util.freetype.FT_List"
import {$StructBuffer} from "org.lwjgl.system.StructBuffer"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$FT_ListNode} from "org.lwjgl.util.freetype.FT_ListNode"

export class $FT_List$Buffer extends $StructBuffer<($FT_List), ($FT_List$Buffer)> {
constructor(arg0: long, arg1: integer)
constructor(arg0: $ByteBuffer$$Type)

public "tail"(): $FT_ListNode
public "head"(): $FT_ListNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_List$Buffer$$Type = ($FT_List$Buffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_List$Buffer$$Original = $FT_List$Buffer;}
declare module "org.lwjgl.util.freetype.FT_Generic_Finalizer" {
import {$FT_Generic_FinalizerI$$Type, $FT_Generic_FinalizerI$$Interface} from "org.lwjgl.util.freetype.FT_Generic_FinalizerI"
import {$Callback} from "org.lwjgl.system.Callback"
import {$FFICIF} from "org.lwjgl.system.libffi.FFICIF"

export class $FT_Generic_Finalizer extends $Callback implements $FT_Generic_FinalizerI$$Interface {
public static "create"(arg0: long): $FT_Generic_Finalizer
public static "create"(arg0: $FT_Generic_FinalizerI$$Type): $FT_Generic_Finalizer
public static "createSafe"(arg0: long): $FT_Generic_Finalizer
public "callback"(arg0: long, arg1: long): void
public "invoke"(arg0: long): void
public "getCallInterface"(): $FFICIF
get "callInterface"(): $FFICIF
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Generic_Finalizer$$Type = ($FT_Generic_Finalizer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_Generic_Finalizer$$Original = $FT_Generic_Finalizer;}
declare module "org.lwjgl.util.freetype.FT_ListNode$Buffer" {
import {$StructBuffer} from "org.lwjgl.system.StructBuffer"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$FT_ListNode} from "org.lwjgl.util.freetype.FT_ListNode"

export class $FT_ListNode$Buffer extends $StructBuffer<($FT_ListNode), ($FT_ListNode$Buffer)> {
constructor(arg0: long, arg1: integer)
constructor(arg0: $ByteBuffer$$Type)

public "next"(): $FT_ListNode
public "data"(arg0: integer): $ByteBuffer
public "prev"(): $FT_ListNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_ListNode$Buffer$$Type = ($FT_ListNode$Buffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_ListNode$Buffer$$Original = $FT_ListNode$Buffer;}
declare module "org.lwjgl.util.freetype.FT_GlyphSlot" {
import {$FT_Glyph_Metrics} from "org.lwjgl.util.freetype.FT_Glyph_Metrics"
import {$Struct} from "org.lwjgl.system.Struct"
import {$FT_Generic} from "org.lwjgl.util.freetype.FT_Generic"
import {$FT_Vector} from "org.lwjgl.util.freetype.FT_Vector"
import {$FT_Face} from "org.lwjgl.util.freetype.FT_Face"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$FT_Outline} from "org.lwjgl.util.freetype.FT_Outline"
import {$FT_GlyphSlot$Buffer} from "org.lwjgl.util.freetype.FT_GlyphSlot$Buffer"
import {$FT_Bitmap} from "org.lwjgl.util.freetype.FT_Bitmap"

export class $FT_GlyphSlot extends $Struct<($FT_GlyphSlot)> {
static readonly "BITMAP": integer
static readonly "FORMAT": integer
static readonly "METRICS": integer
static readonly "SIZEOF": integer
static readonly "LIBRARY": integer
static readonly "SUBGLYPHS": integer
static readonly "NUM_SUBGLYPHS": integer
static readonly "OTHER": integer
static readonly "BITMAP_TOP": integer
static readonly "CONTROL_DATA": integer
static readonly "GENERIC": integer
static readonly "GLYPH_INDEX": integer
static readonly "LINEARHORIADVANCE": integer
static readonly "LINEARVERTADVANCE": integer
static readonly "ALIGNOF": integer
static readonly "NEXT": integer
static readonly "INTERNAL": integer
static readonly "OUTLINE": integer
static readonly "CONTROL_LEN": integer
static readonly "RSB_DELTA": integer
static readonly "BITMAP_LEFT": integer
static readonly "ADVANCE": integer
static readonly "LSB_DELTA": integer
static readonly "FACE": integer

constructor(arg0: $ByteBuffer$$Type)

public "next"(): $FT_GlyphSlot
public "format"(): integer
public static "create"(arg0: long, arg1: integer): $FT_GlyphSlot$Buffer
public static "create"(arg0: long): $FT_GlyphSlot
public "generic"(): $FT_Generic
public "advance"(): $FT_Vector
public "metrics"(): $FT_Glyph_Metrics
public "sizeof"(): integer
public static "createSafe"(arg0: long): $FT_GlyphSlot
public static "createSafe"(arg0: long, arg1: integer): $FT_GlyphSlot$Buffer
public "library"(): long
public static "ncontrol_data"(arg0: long): $ByteBuffer
public static "nbitmap_top"(arg0: long): integer
public static "ncontrol_len"(arg0: long): long
public "linearVertAdvance"(): long
public static "nglyph_index"(arg0: long): integer
public "linearHoriAdvance"(): long
public static "nlinearHoriAdvance"(arg0: long): long
public static "nlinearVertAdvance"(arg0: long): long
public static "nbitmap_left"(arg0: long): integer
public static "nnum_subglyphs"(arg0: long): integer
public "bitmap"(): $FT_Bitmap
public "outline"(): $FT_Outline
public "face"(): $FT_Face
public "glyph_index"(): integer
public static "nmetrics"(arg0: long): $FT_Glyph_Metrics
public static "nface"(arg0: long): $FT_Face
public "lsb_delta"(): long
public static "nlibrary"(arg0: long): long
public "rsb_delta"(): long
public static "nsubglyphs"(arg0: long): long
public static "noutline"(arg0: long): $FT_Outline
public static "nlsb_delta"(arg0: long): long
public static "nadvance"(arg0: long): $FT_Vector
public static "nformat"(arg0: long): integer
public static "nbitmap"(arg0: long): $FT_Bitmap
public static "nrsb_delta"(arg0: long): long
public static "nother"(arg0: long): long
public static "nnext"(arg0: long): $FT_GlyphSlot
public static "ngeneric"(arg0: long): $FT_Generic
public static "ninternal"(arg0: long): long
public "bitmap_left"(): integer
public "bitmap_top"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_GlyphSlot$$Type = ($FT_GlyphSlot);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_GlyphSlot$$Original = $FT_GlyphSlot;}
declare module "org.lwjgl.util.freetype.FT_Realloc_Func" {
import {$FT_Realloc_FuncI$$Type, $FT_Realloc_FuncI$$Interface} from "org.lwjgl.util.freetype.FT_Realloc_FuncI"
import {$Callback} from "org.lwjgl.system.Callback"
import {$FFICIF} from "org.lwjgl.system.libffi.FFICIF"

export class $FT_Realloc_Func extends $Callback implements $FT_Realloc_FuncI$$Interface {
public static "create"(arg0: long): $FT_Realloc_Func
public static "create"(arg0: $FT_Realloc_FuncI$$Type): $FT_Realloc_Func
public static "createSafe"(arg0: long): $FT_Realloc_Func
public "callback"(arg0: long, arg1: long): void
public "invoke"(arg0: long, arg1: long, arg2: long, arg3: long): long
public "getCallInterface"(): $FFICIF
get "callInterface"(): $FFICIF
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Realloc_Func$$Type = ($FT_Realloc_Func);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_Realloc_Func$$Original = $FT_Realloc_Func;}
declare module "org.lwjgl.util.freetype.FT_Vector" {
import {$MemoryStack$$Type} from "org.lwjgl.system.MemoryStack"
import {$Struct} from "org.lwjgl.system.Struct"
import {$FT_Vector$Buffer} from "org.lwjgl.util.freetype.FT_Vector$Buffer"
import {$NativeResource$$Interface} from "org.lwjgl.system.NativeResource"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $FT_Vector extends $Struct<($FT_Vector)> implements $NativeResource$$Interface {
static readonly "ALIGNOF": integer
static readonly "SIZEOF": integer
static readonly "X": integer
static readonly "Y": integer

constructor(arg0: $ByteBuffer$$Type)

public "x"(arg0: long): $FT_Vector
public "x"(): long
public "set"(arg0: long, arg1: long): $FT_Vector
public "set"(arg0: $FT_Vector$$Type): $FT_Vector
public static "create"(): $FT_Vector
public static "create"(arg0: long, arg1: integer): $FT_Vector$Buffer
public static "create"(arg0: long): $FT_Vector
public static "create"(arg0: integer): $FT_Vector$Buffer
public "y"(): long
public "y"(arg0: long): $FT_Vector
public static "malloc"(arg0: $MemoryStack$$Type): $FT_Vector
public static "malloc"(arg0: integer): $FT_Vector$Buffer
public static "malloc"(): $FT_Vector
public static "malloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_Vector$Buffer
public "sizeof"(): integer
public static "createSafe"(arg0: long): $FT_Vector
public static "createSafe"(arg0: long, arg1: integer): $FT_Vector$Buffer
public static "calloc"(arg0: integer): $FT_Vector$Buffer
public static "calloc"(): $FT_Vector
public static "calloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_Vector$Buffer
public static "calloc"(arg0: $MemoryStack$$Type): $FT_Vector
public static "nx"(arg0: long): long
public static "nx"(arg0: long, arg1: long): void
public static "ny"(arg0: long): long
public static "ny"(arg0: long, arg1: long): void
public "close"(): void
public "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Vector$$Type = ($FT_Vector);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_Vector$$Original = $FT_Vector;}
declare module "org.lwjgl.util.freetype.FT_Size_Metrics$Buffer" {
import {$StructBuffer} from "org.lwjgl.system.StructBuffer"
import {$FT_Size_Metrics} from "org.lwjgl.util.freetype.FT_Size_Metrics"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $FT_Size_Metrics$Buffer extends $StructBuffer<($FT_Size_Metrics), ($FT_Size_Metrics$Buffer)> {
constructor(arg0: long, arg1: integer)
constructor(arg0: $ByteBuffer$$Type)

public "height"(): long
public "x_ppem"(): short
public "y_ppem"(): short
public "y_scale"(): long
public "max_advance"(): long
public "descender"(): long
public "ascender"(): long
public "x_scale"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Size_Metrics$Buffer$$Type = ($FT_Size_Metrics$Buffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_Size_Metrics$Buffer$$Original = $FT_Size_Metrics$Buffer;}
declare module "org.lwjgl.util.freetype.FT_Outline$Buffer" {
import {$StructBuffer} from "org.lwjgl.system.StructBuffer"
import {$FT_Vector$Buffer} from "org.lwjgl.util.freetype.FT_Vector$Buffer"
import {$NativeResource$$Interface} from "org.lwjgl.system.NativeResource"
import {$ShortBuffer} from "java.nio.ShortBuffer"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$FT_Outline} from "org.lwjgl.util.freetype.FT_Outline"

export class $FT_Outline$Buffer extends $StructBuffer<($FT_Outline), ($FT_Outline$Buffer)> implements $NativeResource$$Interface {
constructor(arg0: long, arg1: integer)
constructor(arg0: $ByteBuffer$$Type)

public "flags"(): integer
public "tags"(): $ByteBuffer
public "points"(): $FT_Vector$Buffer
public "n_points"(): short
public "n_contours"(): short
public "contours"(): $ShortBuffer
public "close"(): void
public "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Outline$Buffer$$Type = ($FT_Outline$Buffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_Outline$Buffer$$Original = $FT_Outline$Buffer;}
declare module "org.lwjgl.util.freetype.FT_CharMap$Buffer" {
import {$StructBuffer} from "org.lwjgl.system.StructBuffer"
import {$FT_Face} from "org.lwjgl.util.freetype.FT_Face"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$FT_CharMap} from "org.lwjgl.util.freetype.FT_CharMap"

export class $FT_CharMap$Buffer extends $StructBuffer<($FT_CharMap), ($FT_CharMap$Buffer)> {
constructor(arg0: long, arg1: integer)
constructor(arg0: $ByteBuffer$$Type)

public "encoding"(): integer
public "encoding_id"(): short
public "platform_id"(): short
public "face"(): $FT_Face
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_CharMap$Buffer$$Type = ($FT_CharMap$Buffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_CharMap$Buffer$$Original = $FT_CharMap$Buffer;}
declare module "org.lwjgl.util.freetype.FT_GlyphSlot$Buffer" {
import {$FT_Glyph_Metrics} from "org.lwjgl.util.freetype.FT_Glyph_Metrics"
import {$StructBuffer} from "org.lwjgl.system.StructBuffer"
import {$FT_Generic} from "org.lwjgl.util.freetype.FT_Generic"
import {$FT_Vector} from "org.lwjgl.util.freetype.FT_Vector"
import {$FT_GlyphSlot} from "org.lwjgl.util.freetype.FT_GlyphSlot"
import {$FT_Face} from "org.lwjgl.util.freetype.FT_Face"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$FT_Outline} from "org.lwjgl.util.freetype.FT_Outline"
import {$FT_Bitmap} from "org.lwjgl.util.freetype.FT_Bitmap"

export class $FT_GlyphSlot$Buffer extends $StructBuffer<($FT_GlyphSlot), ($FT_GlyphSlot$Buffer)> {
constructor(arg0: long, arg1: integer)
constructor(arg0: $ByteBuffer$$Type)

public "next"(): $FT_GlyphSlot
public "format"(): integer
public "generic"(): $FT_Generic
public "advance"(): $FT_Vector
public "metrics"(): $FT_Glyph_Metrics
public "library"(): long
public "linearVertAdvance"(): long
public "linearHoriAdvance"(): long
public "bitmap"(): $FT_Bitmap
public "outline"(): $FT_Outline
public "face"(): $FT_Face
public "glyph_index"(): integer
public "lsb_delta"(): long
public "rsb_delta"(): long
public "bitmap_left"(): integer
public "bitmap_top"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_GlyphSlot$Buffer$$Type = ($FT_GlyphSlot$Buffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_GlyphSlot$Buffer$$Original = $FT_GlyphSlot$Buffer;}
declare module "org.lwjgl.util.freetype.FT_StreamDesc" {
import {$MemoryStack$$Type} from "org.lwjgl.system.MemoryStack"
import {$Struct} from "org.lwjgl.system.Struct"
import {$NativeResource$$Interface} from "org.lwjgl.system.NativeResource"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$FT_StreamDesc$Buffer} from "org.lwjgl.util.freetype.FT_StreamDesc$Buffer"

export class $FT_StreamDesc extends $Struct<($FT_StreamDesc)> implements $NativeResource$$Interface {
static readonly "ALIGNOF": integer
static readonly "POINTER": integer
static readonly "SIZEOF": integer
static readonly "VALUE": integer

constructor(arg0: $ByteBuffer$$Type)

public "value"(arg0: long): $FT_StreamDesc
public "value"(): long
public "set"(arg0: $FT_StreamDesc$$Type): $FT_StreamDesc
public static "create"(arg0: long, arg1: integer): $FT_StreamDesc$Buffer
public static "create"(arg0: long): $FT_StreamDesc
public static "create"(): $FT_StreamDesc
public static "create"(arg0: integer): $FT_StreamDesc$Buffer
public static "malloc"(arg0: integer): $FT_StreamDesc$Buffer
public static "malloc"(arg0: $MemoryStack$$Type): $FT_StreamDesc
public static "malloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_StreamDesc$Buffer
public static "malloc"(): $FT_StreamDesc
public "sizeof"(): integer
public static "createSafe"(arg0: long, arg1: integer): $FT_StreamDesc$Buffer
public static "createSafe"(arg0: long): $FT_StreamDesc
public static "calloc"(arg0: integer): $FT_StreamDesc$Buffer
public static "calloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_StreamDesc$Buffer
public static "calloc"(): $FT_StreamDesc
public static "calloc"(arg0: $MemoryStack$$Type): $FT_StreamDesc
public static "npointer"(arg0: long): long
public static "npointer"(arg0: long, arg1: long): void
public "pointer"(): long
public "pointer"(arg0: long): $FT_StreamDesc
public static "nvalue"(arg0: long): long
public static "nvalue"(arg0: long, arg1: long): void
public "close"(): void
public "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_StreamDesc$$Type = ($FT_StreamDesc);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_StreamDesc$$Original = $FT_StreamDesc;}
declare module "org.lwjgl.util.freetype.FT_Face" {
import {$FT_BBox} from "org.lwjgl.util.freetype.FT_BBox"
import {$PointerBuffer} from "org.lwjgl.PointerBuffer"
import {$FT_GlyphSlot} from "org.lwjgl.util.freetype.FT_GlyphSlot"
import {$FT_Memory} from "org.lwjgl.util.freetype.FT_Memory"
import {$FT_List} from "org.lwjgl.util.freetype.FT_List"
import {$Struct} from "org.lwjgl.system.Struct"
import {$FT_Size} from "org.lwjgl.util.freetype.FT_Size"
import {$FT_Generic} from "org.lwjgl.util.freetype.FT_Generic"
import {$FT_Face$Buffer} from "org.lwjgl.util.freetype.FT_Face$Buffer"
import {$FT_Bitmap_Size$Buffer} from "org.lwjgl.util.freetype.FT_Bitmap_Size$Buffer"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$FT_CharMap} from "org.lwjgl.util.freetype.FT_CharMap"
import {$FT_Stream} from "org.lwjgl.util.freetype.FT_Stream"

export class $FT_Face extends $Struct<($FT_Face)> {
static readonly "UNDERLINE_THICKNESS": integer
static readonly "GLYPH": integer
static readonly "SIZES_LIST": integer
static readonly "NUM_GLYPHS": integer
static readonly "EXTENSIONS": integer
static readonly "AUTOHINT": integer
static readonly "DRIVER": integer
static readonly "SIZEOF": integer
static readonly "FACE_FLAGS": integer
static readonly "NUM_FACES": integer
static readonly "NUM_FIXED_SIZES": integer
static readonly "MEMORY": integer
static readonly "FAMILY_NAME": integer
static readonly "AVAILABLE_SIZES": integer
static readonly "UNDERLINE_POSITION": integer
static readonly "INTERNAL": integer
static readonly "MAX_ADVANCE_HEIGHT": integer
static readonly "ASCENDER": integer
static readonly "UNITS_PER_EM": integer
static readonly "MAX_ADVANCE_WIDTH": integer
static readonly "FACE_INDEX": integer
static readonly "SIZE": integer
static readonly "STREAM": integer
static readonly "NUM_CHARMAPS": integer
static readonly "CHARMAPS": integer
static readonly "HEIGHT": integer
static readonly "STYLE_FLAGS": integer
static readonly "GENERIC": integer
static readonly "BBOX": integer
static readonly "ALIGNOF": integer
static readonly "STYLE_NAME": integer
static readonly "DESCENDER": integer
static readonly "CHARMAP": integer

constructor(arg0: $ByteBuffer$$Type)

public "size"(): $FT_Size
public static "create"(arg0: long): $FT_Face
public static "create"(arg0: long, arg1: integer): $FT_Face$Buffer
public "generic"(): $FT_Generic
public "sizeof"(): integer
public static "createSafe"(arg0: long): $FT_Face
public static "createSafe"(arg0: long, arg1: integer): $FT_Face$Buffer
public static "nheight"(arg0: long): short
public "glyph"(): $FT_GlyphSlot
public "height"(): short
public static "nsize"(arg0: long): $FT_Size
public static "nstream$"(arg0: long): $FT_Stream
public static "ndescender"(arg0: long): short
public "style_name"(): $ByteBuffer
public static "ngeneric"(arg0: long): $FT_Generic
public static "ndriver"(arg0: long): long
public "bbox"(): $FT_BBox
public static "ncharmaps"(arg0: long): $PointerBuffer
public "face_index"(): long
public static "nascender"(arg0: long): short
public static "nmemory"(arg0: long): $FT_Memory
public static "nautohint"(arg0: long): $FT_Generic
public "num_glyphs"(): long
public static "nbbox"(arg0: long): $FT_BBox
public "num_faces"(): long
public static "nglyph"(arg0: long): $FT_GlyphSlot
public "charmap"(): $FT_CharMap
public "descender"(): short
public "charmaps"(): $PointerBuffer
public static "nnum_faces"(arg0: long): long
public "face_flags"(): long
public static "ncharmap"(arg0: long): $FT_CharMap
public "ascender"(): short
public static "ninternal"(arg0: long): long
public "style_flags"(): long
public "family_nameString"(): StringJS
public "num_charmaps"(): integer
public "units_per_EM"(): short
public "max_advance_width"(): short
public "underline_position"(): short
public static "nface_flags"(arg0: long): long
public "num_fixed_sizes"(): integer
public static "nstyle_flags"(arg0: long): long
public static "nnum_glyphs"(arg0: long): long
public "available_sizes"(): $FT_Bitmap_Size$Buffer
public static "nface_index"(arg0: long): long
public static "nfamily_name"(arg0: long): $ByteBuffer
public "style_nameString"(): StringJS
public "max_advance_height"(): short
public "family_name"(): $ByteBuffer
public static "nsizes_list"(arg0: long): $FT_List
public static "nmax_advance_width"(arg0: long): short
public static "nstyle_nameString"(arg0: long): StringJS
public static "nextensions"(arg0: long): long
public static "nunits_per_EM"(arg0: long): short
public static "nstyle_name"(arg0: long): $ByteBuffer
public static "nnum_fixed_sizes"(arg0: long): integer
public static "nfamily_nameString"(arg0: long): StringJS
public static "navailable_sizes"(arg0: long): $FT_Bitmap_Size$Buffer
public static "nnum_charmaps"(arg0: long): integer
public static "nunderline_thickness"(arg0: long): short
public static "nunderline_position"(arg0: long): short
public "underline_thickness"(): short
public static "nmax_advance_height"(arg0: long): short
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Face$$Type = ($FT_Face);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_Face$$Original = $FT_Face;}
declare module "org.lwjgl.util.freetype.FT_Size_Internal" {
import {$FT_Size_Internal$Buffer} from "org.lwjgl.util.freetype.FT_Size_Internal$Buffer"
import {$Struct} from "org.lwjgl.system.Struct"
import {$FT_Size_Metrics} from "org.lwjgl.util.freetype.FT_Size_Metrics"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $FT_Size_Internal extends $Struct<($FT_Size_Internal)> {
static readonly "AUTOHINT_METRICS": integer
static readonly "ALIGNOF": integer
static readonly "SIZEOF": integer
static readonly "MODULE_DATA": integer
static readonly "AUTOHINT_MODE": integer

constructor(arg0: $ByteBuffer$$Type)

public static "create"(arg0: long): $FT_Size_Internal
public static "create"(arg0: long, arg1: integer): $FT_Size_Internal$Buffer
public "sizeof"(): integer
public static "createSafe"(arg0: long, arg1: integer): $FT_Size_Internal$Buffer
public static "createSafe"(arg0: long): $FT_Size_Internal
public static "nautohint_metrics"(arg0: long): $FT_Size_Metrics
public "module_data"(): long
public "autohint_metrics"(): $FT_Size_Metrics
public static "nmodule_data"(arg0: long): long
public "autohint_mode"(): integer
public static "nautohint_mode"(arg0: long): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Size_Internal$$Type = ($FT_Size_Internal);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_Size_Internal$$Original = $FT_Size_Internal;}
declare module "org.lwjgl.util.freetype.FT_Stream_CloseFuncI" {
import {$CallbackI$$Interface} from "org.lwjgl.system.CallbackI"
import {$FFICIF} from "org.lwjgl.system.libffi.FFICIF"

export interface $FT_Stream_CloseFuncI$$Interface extends $CallbackI$$Interface {

(arg0: long): void
get "callInterface"(): $FFICIF
}

export class $FT_Stream_CloseFuncI implements $FT_Stream_CloseFuncI$$Interface {
static readonly "CIF": $FFICIF

 "callback"(arg0: long, arg1: long): void
 "invoke"(arg0: long): void
 "getCallInterface"(): $FFICIF
 "address"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Stream_CloseFuncI$$Type = ((arg0: long) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_Stream_CloseFuncI$$Original = $FT_Stream_CloseFuncI;}
declare module "org.lwjgl.util.freetype.FT_Size$Buffer" {
import {$StructBuffer} from "org.lwjgl.system.StructBuffer"
import {$FT_Size} from "org.lwjgl.util.freetype.FT_Size"
import {$FT_Size_Metrics, $FT_Size_Metrics$$Type} from "org.lwjgl.util.freetype.FT_Size_Metrics"
import {$FT_Generic, $FT_Generic$$Type} from "org.lwjgl.util.freetype.FT_Generic"
import {$NativeResource$$Interface} from "org.lwjgl.system.NativeResource"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$FT_Face, $FT_Face$$Type} from "org.lwjgl.util.freetype.FT_Face"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $FT_Size$Buffer extends $StructBuffer<($FT_Size), ($FT_Size$Buffer)> implements $NativeResource$$Interface {
constructor(arg0: long, arg1: integer)
constructor(arg0: $ByteBuffer$$Type)

public "generic"(arg0: $Consumer$$Type<($FT_Generic)>): $FT_Size$Buffer
public "generic"(): $FT_Generic
public "generic"(arg0: $FT_Generic$$Type): $FT_Size$Buffer
public "metrics"(arg0: $FT_Size_Metrics$$Type): $FT_Size$Buffer
public "metrics"(): $FT_Size_Metrics
public "face"(): $FT_Face
public "face"(arg0: $FT_Face$$Type): $FT_Size$Buffer
public "close"(): void
public "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Size$Buffer$$Type = ($FT_Size$Buffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_Size$Buffer$$Original = $FT_Size$Buffer;}
declare module "org.lwjgl.util.freetype.FT_BBox" {
import {$MemoryStack$$Type} from "org.lwjgl.system.MemoryStack"
import {$Struct} from "org.lwjgl.system.Struct"
import {$FT_BBox$Buffer} from "org.lwjgl.util.freetype.FT_BBox$Buffer"
import {$NativeResource$$Interface} from "org.lwjgl.system.NativeResource"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $FT_BBox extends $Struct<($FT_BBox)> implements $NativeResource$$Interface {
static readonly "YMIN": integer
static readonly "YMAX": integer
static readonly "XMIN": integer
static readonly "XMAX": integer
static readonly "ALIGNOF": integer
static readonly "SIZEOF": integer

constructor(arg0: $ByteBuffer$$Type)

public "set"(arg0: long, arg1: long, arg2: long, arg3: long): $FT_BBox
public "set"(arg0: $FT_BBox$$Type): $FT_BBox
public static "create"(arg0: integer): $FT_BBox$Buffer
public static "create"(arg0: long): $FT_BBox
public static "create"(): $FT_BBox
public static "create"(arg0: long, arg1: integer): $FT_BBox$Buffer
public static "malloc"(): $FT_BBox
public static "malloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_BBox$Buffer
public static "malloc"(arg0: $MemoryStack$$Type): $FT_BBox
public static "malloc"(arg0: integer): $FT_BBox$Buffer
public "sizeof"(): integer
public static "createSafe"(arg0: long, arg1: integer): $FT_BBox$Buffer
public static "createSafe"(arg0: long): $FT_BBox
public static "calloc"(arg0: integer): $FT_BBox$Buffer
public static "calloc"(arg0: $MemoryStack$$Type): $FT_BBox
public static "calloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_BBox$Buffer
public static "calloc"(): $FT_BBox
public "yMin"(arg0: long): $FT_BBox
public "yMin"(): long
public "yMax"(arg0: long): $FT_BBox
public "yMax"(): long
public "xMin"(arg0: long): $FT_BBox
public "xMin"(): long
public "xMax"(): long
public "xMax"(arg0: long): $FT_BBox
public static "nxMax"(arg0: long, arg1: long): void
public static "nxMax"(arg0: long): long
public static "nyMax"(arg0: long): long
public static "nyMax"(arg0: long, arg1: long): void
public static "nxMin"(arg0: long): long
public static "nxMin"(arg0: long, arg1: long): void
public static "nyMin"(arg0: long): long
public static "nyMin"(arg0: long, arg1: long): void
public "close"(): void
public "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_BBox$$Type = ($FT_BBox);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_BBox$$Original = $FT_BBox;}
declare module "org.lwjgl.util.freetype.FT_Free_Func" {
import {$Callback} from "org.lwjgl.system.Callback"
import {$FFICIF} from "org.lwjgl.system.libffi.FFICIF"
import {$FT_Free_FuncI$$Type, $FT_Free_FuncI$$Interface} from "org.lwjgl.util.freetype.FT_Free_FuncI"

export class $FT_Free_Func extends $Callback implements $FT_Free_FuncI$$Interface {
public static "create"(arg0: long): $FT_Free_Func
public static "create"(arg0: $FT_Free_FuncI$$Type): $FT_Free_Func
public static "createSafe"(arg0: long): $FT_Free_Func
public "callback"(arg0: long, arg1: long): void
public "invoke"(arg0: long, arg1: long): void
public "getCallInterface"(): $FFICIF
get "callInterface"(): $FFICIF
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Free_Func$$Type = ($FT_Free_Func);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_Free_Func$$Original = $FT_Free_Func;}
declare module "org.lwjgl.util.freetype.FT_List" {
import {$Struct} from "org.lwjgl.system.Struct"
import {$FT_List$Buffer} from "org.lwjgl.util.freetype.FT_List$Buffer"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$FT_ListNode} from "org.lwjgl.util.freetype.FT_ListNode"

export class $FT_List extends $Struct<($FT_List)> {
static readonly "HEAD": integer
static readonly "ALIGNOF": integer
static readonly "TAIL": integer
static readonly "SIZEOF": integer

constructor(arg0: $ByteBuffer$$Type)

public "tail"(): $FT_ListNode
public static "create"(arg0: long): $FT_List
public static "create"(arg0: long, arg1: integer): $FT_List$Buffer
public "head"(): $FT_ListNode
public "sizeof"(): integer
public static "createSafe"(arg0: long): $FT_List
public static "createSafe"(arg0: long, arg1: integer): $FT_List$Buffer
public static "nhead"(arg0: long): $FT_ListNode
public static "ntail"(arg0: long): $FT_ListNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_List$$Type = ($FT_List);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_List$$Original = $FT_List;}
declare module "org.lwjgl.util.freetype.FT_Glyph_Metrics$Buffer" {
import {$FT_Glyph_Metrics} from "org.lwjgl.util.freetype.FT_Glyph_Metrics"
import {$StructBuffer} from "org.lwjgl.system.StructBuffer"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $FT_Glyph_Metrics$Buffer extends $StructBuffer<($FT_Glyph_Metrics), ($FT_Glyph_Metrics$Buffer)> {
constructor(arg0: long, arg1: integer)
constructor(arg0: $ByteBuffer$$Type)

public "width"(): long
public "height"(): long
public "horiBearingY"(): long
public "vertBearingX"(): long
public "vertAdvance"(): long
public "horiAdvance"(): long
public "vertBearingY"(): long
public "horiBearingX"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Glyph_Metrics$Buffer$$Type = ($FT_Glyph_Metrics$Buffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_Glyph_Metrics$Buffer$$Original = $FT_Glyph_Metrics$Buffer;}
declare module "org.lwjgl.util.freetype.FT_Glyph_Metrics" {
import {$Struct} from "org.lwjgl.system.Struct"
import {$FT_Glyph_Metrics$Buffer} from "org.lwjgl.util.freetype.FT_Glyph_Metrics$Buffer"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $FT_Glyph_Metrics extends $Struct<($FT_Glyph_Metrics)> {
static readonly "HORIADVANCE": integer
static readonly "VERTBEARINGX": integer
static readonly "VERTBEARINGY": integer
static readonly "HORIBEARINGY": integer
static readonly "VERTADVANCE": integer
static readonly "ALIGNOF": integer
static readonly "HORIBEARINGX": integer
static readonly "SIZEOF": integer
static readonly "WIDTH": integer
static readonly "HEIGHT": integer

constructor(arg0: $ByteBuffer$$Type)

public static "create"(arg0: long): $FT_Glyph_Metrics
public static "create"(arg0: long, arg1: integer): $FT_Glyph_Metrics$Buffer
public "width"(): long
public static "nwidth"(arg0: long): long
public "sizeof"(): integer
public static "createSafe"(arg0: long, arg1: integer): $FT_Glyph_Metrics$Buffer
public static "createSafe"(arg0: long): $FT_Glyph_Metrics
public static "nheight"(arg0: long): long
public "height"(): long
public static "nhoriAdvance"(arg0: long): long
public static "nvertAdvance"(arg0: long): long
public "horiBearingY"(): long
public "vertBearingX"(): long
public static "nhoriBearingY"(arg0: long): long
public static "nvertBearingX"(arg0: long): long
public "vertAdvance"(): long
public static "nhoriBearingX"(arg0: long): long
public static "nvertBearingY"(arg0: long): long
public "horiAdvance"(): long
public "vertBearingY"(): long
public "horiBearingX"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Glyph_Metrics$$Type = ($FT_Glyph_Metrics);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_Glyph_Metrics$$Original = $FT_Glyph_Metrics;}
declare module "org.lwjgl.util.freetype.FT_Bitmap_Size$Buffer" {
import {$StructBuffer} from "org.lwjgl.system.StructBuffer"
import {$FT_Bitmap_Size} from "org.lwjgl.util.freetype.FT_Bitmap_Size"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $FT_Bitmap_Size$Buffer extends $StructBuffer<($FT_Bitmap_Size), ($FT_Bitmap_Size$Buffer)> {
constructor(arg0: long, arg1: integer)
constructor(arg0: $ByteBuffer$$Type)

public "size"(): long
public "width"(): short
public "height"(): short
public "x_ppem"(): long
public "y_ppem"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Bitmap_Size$Buffer$$Type = ($FT_Bitmap_Size$Buffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_Bitmap_Size$Buffer$$Original = $FT_Bitmap_Size$Buffer;}
declare module "org.lwjgl.util.freetype.FT_Face$Buffer" {
import {$StructBuffer} from "org.lwjgl.system.StructBuffer"
import {$FT_Size} from "org.lwjgl.util.freetype.FT_Size"
import {$FT_BBox} from "org.lwjgl.util.freetype.FT_BBox"
import {$FT_Generic} from "org.lwjgl.util.freetype.FT_Generic"
import {$FT_Bitmap_Size$Buffer} from "org.lwjgl.util.freetype.FT_Bitmap_Size$Buffer"
import {$PointerBuffer} from "org.lwjgl.PointerBuffer"
import {$FT_GlyphSlot} from "org.lwjgl.util.freetype.FT_GlyphSlot"
import {$FT_Face} from "org.lwjgl.util.freetype.FT_Face"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$FT_CharMap} from "org.lwjgl.util.freetype.FT_CharMap"

export class $FT_Face$Buffer extends $StructBuffer<($FT_Face), ($FT_Face$Buffer)> {
constructor(arg0: long, arg1: integer)
constructor(arg0: $ByteBuffer$$Type)

public "size"(): $FT_Size
public "generic"(): $FT_Generic
public "glyph"(): $FT_GlyphSlot
public "height"(): short
public "style_name"(): $ByteBuffer
public "bbox"(): $FT_BBox
public "face_index"(): long
public "num_glyphs"(): long
public "num_faces"(): long
public "charmap"(): $FT_CharMap
public "descender"(): short
public "charmaps"(): $PointerBuffer
public "face_flags"(): long
public "ascender"(): short
public "style_flags"(): long
public "family_nameString"(): StringJS
public "num_charmaps"(): integer
public "units_per_EM"(): short
public "max_advance_width"(): short
public "underline_position"(): short
public "num_fixed_sizes"(): integer
public "available_sizes"(): $FT_Bitmap_Size$Buffer
public "style_nameString"(): StringJS
public "max_advance_height"(): short
public "family_name"(): $ByteBuffer
public "underline_thickness"(): short
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Face$Buffer$$Type = ($FT_Face$Buffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_Face$Buffer$$Original = $FT_Face$Buffer;}
declare module "org.lwjgl.util.freetype.FT_Bitmap" {
import {$MemoryStack$$Type} from "org.lwjgl.system.MemoryStack"
import {$FT_Bitmap$Buffer} from "org.lwjgl.util.freetype.FT_Bitmap$Buffer"
import {$Struct} from "org.lwjgl.system.Struct"
import {$NativeResource$$Interface} from "org.lwjgl.system.NativeResource"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $FT_Bitmap extends $Struct<($FT_Bitmap)> implements $NativeResource$$Interface {
static readonly "PALETTE": integer
static readonly "ALIGNOF": integer
static readonly "PIXEL_MODE": integer
static readonly "PALETTE_MODE": integer
static readonly "SIZEOF": integer
static readonly "PITCH": integer
static readonly "WIDTH": integer
static readonly "BUFFER": integer
static readonly "ROWS": integer
static readonly "NUM_GRAYS": integer

constructor(arg0: $ByteBuffer$$Type)

public "pitch"(): integer
public "buffer"(arg0: integer): $ByteBuffer
public static "create"(arg0: integer): $FT_Bitmap$Buffer
public static "create"(arg0: long): $FT_Bitmap
public static "create"(): $FT_Bitmap
public static "create"(arg0: long, arg1: integer): $FT_Bitmap$Buffer
public "rows"(): integer
public "width"(): integer
public static "malloc"(arg0: integer): $FT_Bitmap$Buffer
public static "malloc"(arg0: $MemoryStack$$Type): $FT_Bitmap
public static "malloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_Bitmap$Buffer
public static "malloc"(): $FT_Bitmap
public static "nwidth"(arg0: long): integer
public "sizeof"(): integer
public static "createSafe"(arg0: long, arg1: integer): $FT_Bitmap$Buffer
public static "createSafe"(arg0: long): $FT_Bitmap
public static "calloc"(arg0: integer): $FT_Bitmap$Buffer
public static "calloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_Bitmap$Buffer
public static "calloc"(): $FT_Bitmap
public static "calloc"(arg0: $MemoryStack$$Type): $FT_Bitmap
public "pixel_mode"(): byte
public "palette"(): long
public "num_grays"(): short
public static "nrows"(arg0: long): integer
public static "npitch"(arg0: long): integer
public static "npalette"(arg0: long): long
public static "nbuffer"(arg0: long, arg1: integer): $ByteBuffer
public static "nnum_grays"(arg0: long): short
public "palette_mode"(): byte
public static "npixel_mode"(arg0: long): byte
public static "npalette_mode"(arg0: long): byte
public "close"(): void
public "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Bitmap$$Type = ($FT_Bitmap);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_Bitmap$$Original = $FT_Bitmap;}
declare module "org.lwjgl.util.freetype.FT_Stream$Buffer" {
import {$FT_StreamDesc, $FT_StreamDesc$$Type} from "org.lwjgl.util.freetype.FT_StreamDesc"
import {$StructBuffer} from "org.lwjgl.system.StructBuffer"
import {$FT_Stream_CloseFuncI$$Type} from "org.lwjgl.util.freetype.FT_Stream_CloseFuncI"
import {$FT_Stream_IoFunc} from "org.lwjgl.util.freetype.FT_Stream_IoFunc"
import {$FT_Stream_CloseFunc} from "org.lwjgl.util.freetype.FT_Stream_CloseFunc"
import {$NativeResource$$Interface} from "org.lwjgl.system.NativeResource"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$FT_Stream_IoFuncI$$Type} from "org.lwjgl.util.freetype.FT_Stream_IoFuncI"
import {$FT_Stream} from "org.lwjgl.util.freetype.FT_Stream"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $FT_Stream$Buffer extends $StructBuffer<($FT_Stream), ($FT_Stream$Buffer)> implements $NativeResource$$Interface {
constructor(arg0: $ByteBuffer$$Type)
constructor(arg0: long, arg1: integer)

public "base"(arg0: $ByteBuffer$$Type): $FT_Stream$Buffer
public "base"(): $ByteBuffer
public "size"(arg0: long): $FT_Stream$Buffer
public "size"(): long
public "read"(): $FT_Stream_IoFunc
public "read"(arg0: $FT_Stream_IoFuncI$$Type): $FT_Stream$Buffer
public "descriptor"(arg0: $Consumer$$Type<($FT_StreamDesc)>): $FT_Stream$Buffer
public "descriptor"(): $FT_StreamDesc
public "descriptor"(arg0: $FT_StreamDesc$$Type): $FT_Stream$Buffer
public "pos"(arg0: long): $FT_Stream$Buffer
public "pos"(): long
public "pathname"(arg0: $Consumer$$Type<($FT_StreamDesc)>): $FT_Stream$Buffer
public "pathname"(): $FT_StreamDesc
public "pathname"(arg0: $FT_StreamDesc$$Type): $FT_Stream$Buffer
public "close$"(): $FT_Stream_CloseFunc
public "close$"(arg0: $FT_Stream_CloseFuncI$$Type): $FT_Stream$Buffer
public "close"(): void
public "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Stream$Buffer$$Type = ($FT_Stream$Buffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_Stream$Buffer$$Original = $FT_Stream$Buffer;}
declare module "org.lwjgl.util.freetype.FT_Bitmap_Size" {
import {$Struct} from "org.lwjgl.system.Struct"
import {$FT_Bitmap_Size$Buffer} from "org.lwjgl.util.freetype.FT_Bitmap_Size$Buffer"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $FT_Bitmap_Size extends $Struct<($FT_Bitmap_Size)> {
static readonly "Y_PPEM": integer
static readonly "X_PPEM": integer
static readonly "ALIGNOF": integer
static readonly "SIZE": integer
static readonly "SIZEOF": integer
static readonly "WIDTH": integer
static readonly "HEIGHT": integer

constructor(arg0: $ByteBuffer$$Type)

public "size"(): long
public static "create"(arg0: long): $FT_Bitmap_Size
public static "create"(arg0: long, arg1: integer): $FT_Bitmap_Size$Buffer
public "width"(): short
public static "nwidth"(arg0: long): short
public "sizeof"(): integer
public static "createSafe"(arg0: long): $FT_Bitmap_Size
public static "createSafe"(arg0: long, arg1: integer): $FT_Bitmap_Size$Buffer
public static "nheight"(arg0: long): short
public "height"(): short
public static "nsize"(arg0: long): long
public static "nx_ppem"(arg0: long): long
public "x_ppem"(): long
public "y_ppem"(): long
public static "ny_ppem"(arg0: long): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Bitmap_Size$$Type = ($FT_Bitmap_Size);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_Bitmap_Size$$Original = $FT_Bitmap_Size;}
declare module "org.lwjgl.util.freetype.FT_Vector$Buffer" {
import {$StructBuffer} from "org.lwjgl.system.StructBuffer"
import {$FT_Vector} from "org.lwjgl.util.freetype.FT_Vector"
import {$NativeResource$$Interface} from "org.lwjgl.system.NativeResource"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $FT_Vector$Buffer extends $StructBuffer<($FT_Vector), ($FT_Vector$Buffer)> implements $NativeResource$$Interface {
constructor(arg0: long, arg1: integer)
constructor(arg0: $ByteBuffer$$Type)

public "x"(arg0: long): $FT_Vector$Buffer
public "x"(): long
public "y"(): long
public "y"(arg0: long): $FT_Vector$Buffer
public "close"(): void
public "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Vector$Buffer$$Type = ($FT_Vector$Buffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_Vector$Buffer$$Original = $FT_Vector$Buffer;}
declare module "org.lwjgl.util.freetype.FT_StreamDesc$Buffer" {
import {$FT_StreamDesc} from "org.lwjgl.util.freetype.FT_StreamDesc"
import {$StructBuffer} from "org.lwjgl.system.StructBuffer"
import {$NativeResource$$Interface} from "org.lwjgl.system.NativeResource"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $FT_StreamDesc$Buffer extends $StructBuffer<($FT_StreamDesc), ($FT_StreamDesc$Buffer)> implements $NativeResource$$Interface {
constructor(arg0: long, arg1: integer)
constructor(arg0: $ByteBuffer$$Type)

public "value"(arg0: long): $FT_StreamDesc$Buffer
public "value"(): long
public "pointer"(): long
public "pointer"(arg0: long): $FT_StreamDesc$Buffer
public "close"(): void
public "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_StreamDesc$Buffer$$Type = ($FT_StreamDesc$Buffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_StreamDesc$Buffer$$Original = $FT_StreamDesc$Buffer;}
declare module "org.lwjgl.util.freetype.FT_Size_Internal$Buffer" {
import {$StructBuffer} from "org.lwjgl.system.StructBuffer"
import {$FT_Size_Metrics} from "org.lwjgl.util.freetype.FT_Size_Metrics"
import {$FT_Size_Internal} from "org.lwjgl.util.freetype.FT_Size_Internal"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $FT_Size_Internal$Buffer extends $StructBuffer<($FT_Size_Internal), ($FT_Size_Internal$Buffer)> {
constructor(arg0: long, arg1: integer)
constructor(arg0: $ByteBuffer$$Type)

public "module_data"(): long
public "autohint_metrics"(): $FT_Size_Metrics
public "autohint_mode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Size_Internal$Buffer$$Type = ($FT_Size_Internal$Buffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_Size_Internal$Buffer$$Original = $FT_Size_Internal$Buffer;}
declare module "org.lwjgl.util.freetype.FT_Generic$Buffer" {
import {$StructBuffer} from "org.lwjgl.system.StructBuffer"
import {$FT_Generic_FinalizerI$$Type} from "org.lwjgl.util.freetype.FT_Generic_FinalizerI"
import {$FT_Generic} from "org.lwjgl.util.freetype.FT_Generic"
import {$FT_Generic_Finalizer} from "org.lwjgl.util.freetype.FT_Generic_Finalizer"
import {$NativeResource$$Interface} from "org.lwjgl.system.NativeResource"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $FT_Generic$Buffer extends $StructBuffer<($FT_Generic), ($FT_Generic$Buffer)> implements $NativeResource$$Interface {
constructor(arg0: long, arg1: integer)
constructor(arg0: $ByteBuffer$$Type)

public "data"(): long
public "data"(arg0: long): $FT_Generic$Buffer
public "finalizer"(): $FT_Generic_Finalizer
public "finalizer"(arg0: $FT_Generic_FinalizerI$$Type): $FT_Generic$Buffer
public "close"(): void
public "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Generic$Buffer$$Type = ($FT_Generic$Buffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_Generic$Buffer$$Original = $FT_Generic$Buffer;}
declare module "org.lwjgl.util.freetype.FT_Memory$Buffer" {
import {$FT_Memory} from "org.lwjgl.util.freetype.FT_Memory"
import {$StructBuffer} from "org.lwjgl.system.StructBuffer"
import {$FT_Alloc_Func} from "org.lwjgl.util.freetype.FT_Alloc_Func"
import {$FT_Realloc_FuncI$$Type} from "org.lwjgl.util.freetype.FT_Realloc_FuncI"
import {$FT_Free_Func} from "org.lwjgl.util.freetype.FT_Free_Func"
import {$FT_Alloc_FuncI$$Type} from "org.lwjgl.util.freetype.FT_Alloc_FuncI"
import {$NativeResource$$Interface} from "org.lwjgl.system.NativeResource"
import {$FT_Realloc_Func} from "org.lwjgl.util.freetype.FT_Realloc_Func"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$FT_Free_FuncI$$Type} from "org.lwjgl.util.freetype.FT_Free_FuncI"

export class $FT_Memory$Buffer extends $StructBuffer<($FT_Memory), ($FT_Memory$Buffer)> implements $NativeResource$$Interface {
constructor(arg0: long, arg1: integer)
constructor(arg0: $ByteBuffer$$Type)

public "user"(): long
public "user"(arg0: long): $FT_Memory$Buffer
public "realloc"(arg0: $FT_Realloc_FuncI$$Type): $FT_Memory$Buffer
public "realloc"(): $FT_Realloc_Func
public "alloc"(): $FT_Alloc_Func
public "alloc"(arg0: $FT_Alloc_FuncI$$Type): $FT_Memory$Buffer
public "free$"(arg0: $FT_Free_FuncI$$Type): $FT_Memory$Buffer
public "free$"(): $FT_Free_Func
public "close"(): void
public "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Memory$Buffer$$Type = ($FT_Memory$Buffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_Memory$Buffer$$Original = $FT_Memory$Buffer;}
declare module "org.lwjgl.util.freetype.FT_CharMap" {
import {$Struct} from "org.lwjgl.system.Struct"
import {$FT_CharMap$Buffer} from "org.lwjgl.util.freetype.FT_CharMap$Buffer"
import {$FT_Face} from "org.lwjgl.util.freetype.FT_Face"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $FT_CharMap extends $Struct<($FT_CharMap)> {
static readonly "PLATFORM_ID": integer
static readonly "ENCODING": integer
static readonly "ALIGNOF": integer
static readonly "ENCODING_ID": integer
static readonly "SIZEOF": integer
static readonly "FACE": integer

constructor(arg0: $ByteBuffer$$Type)

public "encoding"(): integer
public static "create"(arg0: long): $FT_CharMap
public static "create"(arg0: long, arg1: integer): $FT_CharMap$Buffer
public "sizeof"(): integer
public static "createSafe"(arg0: long): $FT_CharMap
public static "createSafe"(arg0: long, arg1: integer): $FT_CharMap$Buffer
public "encoding_id"(): short
public static "nplatform_id"(arg0: long): short
public static "nencoding_id"(arg0: long): short
public "platform_id"(): short
public "face"(): $FT_Face
public static "nencoding"(arg0: long): integer
public static "nface"(arg0: long): $FT_Face
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_CharMap$$Type = ($FT_CharMap);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_CharMap$$Original = $FT_CharMap;}
declare module "org.lwjgl.util.freetype.FT_Generic_FinalizerI" {
import {$CallbackI$$Interface} from "org.lwjgl.system.CallbackI"
import {$FFICIF} from "org.lwjgl.system.libffi.FFICIF"

export interface $FT_Generic_FinalizerI$$Interface extends $CallbackI$$Interface {

(arg0: long): void
get "callInterface"(): $FFICIF
}

export class $FT_Generic_FinalizerI implements $FT_Generic_FinalizerI$$Interface {
static readonly "CIF": $FFICIF

 "callback"(arg0: long, arg1: long): void
 "invoke"(arg0: long): void
 "getCallInterface"(): $FFICIF
 "address"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Generic_FinalizerI$$Type = ((arg0: long) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_Generic_FinalizerI$$Original = $FT_Generic_FinalizerI;}
declare module "org.lwjgl.util.freetype.FT_Stream_CloseFunc" {
import {$FT_Stream_CloseFuncI$$Type, $FT_Stream_CloseFuncI$$Interface} from "org.lwjgl.util.freetype.FT_Stream_CloseFuncI"
import {$Callback} from "org.lwjgl.system.Callback"
import {$FFICIF} from "org.lwjgl.system.libffi.FFICIF"

export class $FT_Stream_CloseFunc extends $Callback implements $FT_Stream_CloseFuncI$$Interface {
public static "create"(arg0: long): $FT_Stream_CloseFunc
public static "create"(arg0: $FT_Stream_CloseFuncI$$Type): $FT_Stream_CloseFunc
public static "createSafe"(arg0: long): $FT_Stream_CloseFunc
public "callback"(arg0: long, arg1: long): void
public "invoke"(arg0: long): void
public "getCallInterface"(): $FFICIF
get "callInterface"(): $FFICIF
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Stream_CloseFunc$$Type = ($FT_Stream_CloseFunc);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_Stream_CloseFunc$$Original = $FT_Stream_CloseFunc;}
declare module "org.lwjgl.util.freetype.FT_Stream_IoFuncI" {
import {$CallbackI$$Interface} from "org.lwjgl.system.CallbackI"
import {$FFICIF} from "org.lwjgl.system.libffi.FFICIF"

export interface $FT_Stream_IoFuncI$$Interface extends $CallbackI$$Interface {

(arg0: long, arg1: long, arg2: long, arg3: long): long
get "callInterface"(): $FFICIF
}

export class $FT_Stream_IoFuncI implements $FT_Stream_IoFuncI$$Interface {
static readonly "CIF": $FFICIF

 "callback"(arg0: long, arg1: long): void
 "invoke"(arg0: long, arg1: long, arg2: long, arg3: long): long
 "getCallInterface"(): $FFICIF
 "address"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Stream_IoFuncI$$Type = ((arg0: long, arg1: long, arg2: long, arg3: long) => long);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_Stream_IoFuncI$$Original = $FT_Stream_IoFuncI;}
declare module "org.lwjgl.util.freetype.FT_Alloc_Func" {
import {$FT_Alloc_FuncI$$Type, $FT_Alloc_FuncI$$Interface} from "org.lwjgl.util.freetype.FT_Alloc_FuncI"
import {$Callback} from "org.lwjgl.system.Callback"
import {$FFICIF} from "org.lwjgl.system.libffi.FFICIF"

export class $FT_Alloc_Func extends $Callback implements $FT_Alloc_FuncI$$Interface {
public static "create"(arg0: long): $FT_Alloc_Func
public static "create"(arg0: $FT_Alloc_FuncI$$Type): $FT_Alloc_Func
public static "createSafe"(arg0: long): $FT_Alloc_Func
public "callback"(arg0: long, arg1: long): void
public "invoke"(arg0: long, arg1: long): long
public "getCallInterface"(): $FFICIF
get "callInterface"(): $FFICIF
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Alloc_Func$$Type = ($FT_Alloc_Func);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_Alloc_Func$$Original = $FT_Alloc_Func;}
declare module "org.lwjgl.util.freetype.FT_Generic" {
import {$FT_Generic$Buffer} from "org.lwjgl.util.freetype.FT_Generic$Buffer"
import {$MemoryStack$$Type} from "org.lwjgl.system.MemoryStack"
import {$Struct} from "org.lwjgl.system.Struct"
import {$FT_Generic_FinalizerI$$Type} from "org.lwjgl.util.freetype.FT_Generic_FinalizerI"
import {$FT_Generic_Finalizer} from "org.lwjgl.util.freetype.FT_Generic_Finalizer"
import {$NativeResource$$Interface} from "org.lwjgl.system.NativeResource"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $FT_Generic extends $Struct<($FT_Generic)> implements $NativeResource$$Interface {
static readonly "DATA": integer
static readonly "ALIGNOF": integer
static readonly "SIZEOF": integer
static readonly "FINALIZER": integer

constructor(arg0: $ByteBuffer$$Type)

public "data"(arg0: long): $FT_Generic
public "data"(): long
public static "validate"(arg0: long): void
public "set"(arg0: long, arg1: $FT_Generic_FinalizerI$$Type): $FT_Generic
public "set"(arg0: $FT_Generic$$Type): $FT_Generic
public "finalizer"(): $FT_Generic_Finalizer
public "finalizer"(arg0: $FT_Generic_FinalizerI$$Type): $FT_Generic
public static "create"(arg0: long): $FT_Generic
public static "create"(arg0: long, arg1: integer): $FT_Generic$Buffer
public static "create"(arg0: integer): $FT_Generic$Buffer
public static "create"(): $FT_Generic
public static "malloc"(arg0: $MemoryStack$$Type): $FT_Generic
public static "malloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_Generic$Buffer
public static "malloc"(arg0: integer): $FT_Generic$Buffer
public static "malloc"(): $FT_Generic
public "sizeof"(): integer
public static "createSafe"(arg0: long, arg1: integer): $FT_Generic$Buffer
public static "createSafe"(arg0: long): $FT_Generic
public static "calloc"(arg0: integer): $FT_Generic$Buffer
public static "calloc"(): $FT_Generic
public static "calloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_Generic$Buffer
public static "calloc"(arg0: $MemoryStack$$Type): $FT_Generic
public static "ndata"(arg0: long): long
public static "ndata"(arg0: long, arg1: long): void
public static "nfinalizer"(arg0: long, arg1: $FT_Generic_FinalizerI$$Type): void
public static "nfinalizer"(arg0: long): $FT_Generic_Finalizer
public "close"(): void
public "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Generic$$Type = ($FT_Generic);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_Generic$$Original = $FT_Generic;}
declare module "org.lwjgl.util.freetype.FT_Stream" {
import {$FT_StreamDesc, $FT_StreamDesc$$Type} from "org.lwjgl.util.freetype.FT_StreamDesc"
import {$FT_Stream_CloseFuncI$$Type} from "org.lwjgl.util.freetype.FT_Stream_CloseFuncI"
import {$FT_Stream_IoFunc} from "org.lwjgl.util.freetype.FT_Stream_IoFunc"
import {$NativeResource$$Interface} from "org.lwjgl.system.NativeResource"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$MemoryStack$$Type} from "org.lwjgl.system.MemoryStack"
import {$FT_Memory, $FT_Memory$$Type} from "org.lwjgl.util.freetype.FT_Memory"
import {$FT_Stream$Buffer} from "org.lwjgl.util.freetype.FT_Stream$Buffer"
import {$Struct} from "org.lwjgl.system.Struct"
import {$FT_Stream_CloseFunc} from "org.lwjgl.util.freetype.FT_Stream_CloseFunc"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$FT_Stream_IoFuncI$$Type} from "org.lwjgl.util.freetype.FT_Stream_IoFuncI"

export class $FT_Stream extends $Struct<($FT_Stream)> implements $NativeResource$$Interface {
static readonly "READ": integer
static readonly "DESCRIPTOR": integer
static readonly "MEMORY": integer
static readonly "POS": integer
static readonly "PATHNAME": integer
static readonly "ALIGNOF": integer
static readonly "SIZE": integer
static readonly "SIZEOF": integer
static readonly "LIMIT": integer
static readonly "CLOSE": integer
static readonly "BASE": integer
static readonly "CURSOR": integer

constructor(arg0: $ByteBuffer$$Type)

public "base"(): $ByteBuffer
public "base"(arg0: $ByteBuffer$$Type): $FT_Stream
public "size"(arg0: long): $FT_Stream
public "size"(): long
public "set"(arg0: $FT_Stream$$Type): $FT_Stream
public "set"(arg0: $ByteBuffer$$Type, arg1: long, arg2: long, arg3: $FT_StreamDesc$$Type, arg4: $FT_StreamDesc$$Type, arg5: $FT_Stream_IoFuncI$$Type, arg6: $FT_Stream_CloseFuncI$$Type): $FT_Stream
public "read"(arg0: $FT_Stream_IoFuncI$$Type): $FT_Stream
public "read"(): $FT_Stream_IoFunc
public "descriptor"(arg0: $FT_StreamDesc$$Type): $FT_Stream
public "descriptor"(arg0: $Consumer$$Type<($FT_StreamDesc)>): $FT_Stream
public "descriptor"(): $FT_StreamDesc
public static "create"(): $FT_Stream
public static "create"(arg0: integer): $FT_Stream$Buffer
public static "create"(arg0: long, arg1: integer): $FT_Stream$Buffer
public static "create"(arg0: long): $FT_Stream
public "pos"(arg0: long): $FT_Stream
public "pos"(): long
public static "nread"(arg0: long, arg1: $FT_Stream_IoFuncI$$Type): void
public static "nread"(arg0: long): $FT_Stream_IoFunc
public "pathname"(): $FT_StreamDesc
public "pathname"(arg0: $Consumer$$Type<($FT_StreamDesc)>): $FT_Stream
public "pathname"(arg0: $FT_StreamDesc$$Type): $FT_Stream
public static "malloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_Stream$Buffer
public static "malloc"(arg0: $MemoryStack$$Type): $FT_Stream
public static "malloc"(arg0: integer): $FT_Stream$Buffer
public static "malloc"(): $FT_Stream
public "sizeof"(): integer
public static "createSafe"(arg0: long): $FT_Stream
public static "createSafe"(arg0: long, arg1: integer): $FT_Stream$Buffer
public static "calloc"(): $FT_Stream
public static "calloc"(arg0: $MemoryStack$$Type): $FT_Stream
public static "calloc"(arg0: integer): $FT_Stream$Buffer
public static "calloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_Stream$Buffer
public static "ndescriptor"(arg0: long, arg1: $FT_StreamDesc$$Type): void
public static "ndescriptor"(arg0: long): $FT_StreamDesc
public static "nsize"(arg0: long, arg1: long): void
public static "nsize"(arg0: long): long
public "close$"(): $FT_Stream_CloseFunc
public "close$"(arg0: $FT_Stream_CloseFuncI$$Type): $FT_Stream
public static "nbase"(arg0: long, arg1: $ByteBuffer$$Type): void
public static "nbase"(arg0: long): $ByteBuffer
public static "npos"(arg0: long, arg1: long): void
public static "npos"(arg0: long): long
public static "npathname"(arg0: long, arg1: $FT_StreamDesc$$Type): void
public static "npathname"(arg0: long): $FT_StreamDesc
public static "nclose$"(arg0: long, arg1: $FT_Stream_CloseFuncI$$Type): void
public static "nclose$"(arg0: long): $FT_Stream_CloseFunc
public static "ncursor"(arg0: long, arg1: integer): $ByteBuffer
public static "ncursor"(arg0: long, arg1: $ByteBuffer$$Type): void
public static "nlimit$"(arg0: long, arg1: integer): $ByteBuffer
public static "nlimit$"(arg0: long, arg1: $ByteBuffer$$Type): void
public static "nmemory"(arg0: long): $FT_Memory
public static "nmemory"(arg0: long, arg1: $FT_Memory$$Type): void
public "close"(): void
public "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Stream$$Type = ($FT_Stream);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_Stream$$Original = $FT_Stream;}
declare module "org.lwjgl.util.freetype.FT_Memory" {
import {$FT_Memory$Buffer} from "org.lwjgl.util.freetype.FT_Memory$Buffer"
import {$MemoryStack$$Type} from "org.lwjgl.system.MemoryStack"
import {$FT_Alloc_Func} from "org.lwjgl.util.freetype.FT_Alloc_Func"
import {$FT_Free_Func} from "org.lwjgl.util.freetype.FT_Free_Func"
import {$FT_Realloc_FuncI$$Type} from "org.lwjgl.util.freetype.FT_Realloc_FuncI"
import {$Struct} from "org.lwjgl.system.Struct"
import {$FT_Alloc_FuncI$$Type} from "org.lwjgl.util.freetype.FT_Alloc_FuncI"
import {$NativeResource$$Interface} from "org.lwjgl.system.NativeResource"
import {$FT_Realloc_Func} from "org.lwjgl.util.freetype.FT_Realloc_Func"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$FT_Free_FuncI$$Type} from "org.lwjgl.util.freetype.FT_Free_FuncI"

export class $FT_Memory extends $Struct<($FT_Memory)> implements $NativeResource$$Interface {
static readonly "ALLOC": integer
static readonly "ALIGNOF": integer
static readonly "REALLOC": integer
static readonly "SIZEOF": integer
static readonly "USER": integer
static readonly "FREE": integer

constructor(arg0: $ByteBuffer$$Type)

public "set"(arg0: $FT_Memory$$Type): $FT_Memory
public "set"(arg0: long, arg1: $FT_Alloc_FuncI$$Type, arg2: $FT_Free_FuncI$$Type, arg3: $FT_Realloc_FuncI$$Type): $FT_Memory
public static "create"(arg0: long, arg1: integer): $FT_Memory$Buffer
public static "create"(arg0: long): $FT_Memory
public static "create"(): $FT_Memory
public static "create"(arg0: integer): $FT_Memory$Buffer
public "user"(arg0: long): $FT_Memory
public "user"(): long
public static "malloc"(arg0: $MemoryStack$$Type): $FT_Memory
public static "malloc"(arg0: integer): $FT_Memory$Buffer
public static "malloc"(): $FT_Memory
public static "malloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_Memory$Buffer
public "sizeof"(): integer
public static "createSafe"(arg0: long, arg1: integer): $FT_Memory$Buffer
public static "createSafe"(arg0: long): $FT_Memory
public static "calloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_Memory$Buffer
public static "calloc"(arg0: $MemoryStack$$Type): $FT_Memory
public static "calloc"(arg0: integer): $FT_Memory$Buffer
public static "calloc"(): $FT_Memory
public "realloc"(arg0: $FT_Realloc_FuncI$$Type): $FT_Memory
public "realloc"(): $FT_Realloc_Func
public "alloc"(arg0: $FT_Alloc_FuncI$$Type): $FT_Memory
public "alloc"(): $FT_Alloc_Func
public "free$"(): $FT_Free_Func
public "free$"(arg0: $FT_Free_FuncI$$Type): $FT_Memory
public static "nfree$"(arg0: long, arg1: $FT_Free_FuncI$$Type): void
public static "nfree$"(arg0: long): $FT_Free_Func
public static "nrealloc"(arg0: long, arg1: $FT_Realloc_FuncI$$Type): void
public static "nrealloc"(arg0: long): $FT_Realloc_Func
public static "nuser"(arg0: long): long
public static "nuser"(arg0: long, arg1: long): void
public static "nalloc"(arg0: long, arg1: $FT_Alloc_FuncI$$Type): void
public static "nalloc"(arg0: long): $FT_Alloc_Func
public "close"(): void
public "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Memory$$Type = ($FT_Memory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_Memory$$Original = $FT_Memory;}
declare module "org.lwjgl.util.freetype.FT_ListNode" {
import {$Struct} from "org.lwjgl.system.Struct"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$FT_ListNode$Buffer} from "org.lwjgl.util.freetype.FT_ListNode$Buffer"

export class $FT_ListNode extends $Struct<($FT_ListNode)> {
static readonly "DATA": integer
static readonly "PREV": integer
static readonly "ALIGNOF": integer
static readonly "NEXT": integer
static readonly "SIZEOF": integer

constructor(arg0: $ByteBuffer$$Type)

public "next"(): $FT_ListNode
public "data"(arg0: integer): $ByteBuffer
public "prev"(): $FT_ListNode
public static "create"(arg0: long): $FT_ListNode
public static "create"(arg0: long, arg1: integer): $FT_ListNode$Buffer
public "sizeof"(): integer
public static "createSafe"(arg0: long): $FT_ListNode
public static "createSafe"(arg0: long, arg1: integer): $FT_ListNode$Buffer
public static "ndata"(arg0: long, arg1: integer): $ByteBuffer
public static "nnext"(arg0: long): $FT_ListNode
public static "nprev"(arg0: long): $FT_ListNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_ListNode$$Type = ($FT_ListNode);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_ListNode$$Original = $FT_ListNode;}
declare module "org.lwjgl.util.freetype.FT_BBox$Buffer" {
import {$StructBuffer} from "org.lwjgl.system.StructBuffer"
import {$FT_BBox} from "org.lwjgl.util.freetype.FT_BBox"
import {$NativeResource$$Interface} from "org.lwjgl.system.NativeResource"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $FT_BBox$Buffer extends $StructBuffer<($FT_BBox), ($FT_BBox$Buffer)> implements $NativeResource$$Interface {
constructor(arg0: long, arg1: integer)
constructor(arg0: $ByteBuffer$$Type)

public "yMin"(arg0: long): $FT_BBox$Buffer
public "yMin"(): long
public "yMax"(): long
public "yMax"(arg0: long): $FT_BBox$Buffer
public "xMin"(): long
public "xMin"(arg0: long): $FT_BBox$Buffer
public "xMax"(): long
public "xMax"(arg0: long): $FT_BBox$Buffer
public "close"(): void
public "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_BBox$Buffer$$Type = ($FT_BBox$Buffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_BBox$Buffer$$Original = $FT_BBox$Buffer;}
declare module "org.lwjgl.util.freetype.FT_Outline" {
import {$MemoryStack$$Type} from "org.lwjgl.system.MemoryStack"
import {$Struct} from "org.lwjgl.system.Struct"
import {$FT_Vector$Buffer} from "org.lwjgl.util.freetype.FT_Vector$Buffer"
import {$FT_Outline$Buffer} from "org.lwjgl.util.freetype.FT_Outline$Buffer"
import {$NativeResource$$Interface} from "org.lwjgl.system.NativeResource"
import {$ShortBuffer} from "java.nio.ShortBuffer"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $FT_Outline extends $Struct<($FT_Outline)> implements $NativeResource$$Interface {
static readonly "CONTOURS": integer
static readonly "N_CONTOURS": integer
static readonly "ALIGNOF": integer
static readonly "SIZEOF": integer
static readonly "FLAGS": integer
static readonly "POINTS": integer
static readonly "N_POINTS": integer
static readonly "TAGS": integer

constructor(arg0: $ByteBuffer$$Type)

public "flags"(): integer
public static "create"(): $FT_Outline
public static "create"(arg0: integer): $FT_Outline$Buffer
public static "create"(arg0: long, arg1: integer): $FT_Outline$Buffer
public static "create"(arg0: long): $FT_Outline
public "tags"(): $ByteBuffer
public static "malloc"(arg0: integer): $FT_Outline$Buffer
public static "malloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_Outline$Buffer
public static "malloc"(arg0: $MemoryStack$$Type): $FT_Outline
public static "malloc"(): $FT_Outline
public "sizeof"(): integer
public static "createSafe"(arg0: long): $FT_Outline
public static "createSafe"(arg0: long, arg1: integer): $FT_Outline$Buffer
public static "calloc"(arg0: $MemoryStack$$Type): $FT_Outline
public static "calloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_Outline$Buffer
public static "calloc"(arg0: integer): $FT_Outline$Buffer
public static "calloc"(): $FT_Outline
public static "nflags"(arg0: long): integer
public static "npoints"(arg0: long): $FT_Vector$Buffer
public "points"(): $FT_Vector$Buffer
public "n_points"(): short
public "n_contours"(): short
public static "nn_points"(arg0: long): short
public static "ncontours"(arg0: long): $ShortBuffer
public "contours"(): $ShortBuffer
public static "nn_contours"(arg0: long): short
public static "ntags"(arg0: long): $ByteBuffer
public "close"(): void
public "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Outline$$Type = ($FT_Outline);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_Outline$$Original = $FT_Outline;}
